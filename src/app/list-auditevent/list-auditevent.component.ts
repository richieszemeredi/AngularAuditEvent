import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuditEventService } from '../audit-event.service';
import { AuditEvent } from '../audit-event.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-auditevent',
  templateUrl: './list-auditevent.component.html',
  styleUrls: ['./list-auditevent.component.css']
})
export class ListAuditeventComponent implements OnInit {
  AuditEventsArray: AuditEvent[];
  AuditEventsObservable: Observable<Account[]>;
  dataSource: MatTableDataSource<AuditEvent>;

  constructor(private auditEventService: AuditEventService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.auditEventService.getAuditEventList().subscribe(res => {
      this.AuditEventsArray = res.map( e => {
        return {
          id: e.payload.doc.id,
           ...e.payload.doc.data() as {}
        } as AuditEvent;
      })
      this.dataSource = new MatTableDataSource(this.AuditEventsArray);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  columnsToDisplay = ['type', 'subtype', 'action', 'period', 'recorded', 'outcome', 'outcomeDesc', 'purposeOfEvent', 'agent', 'source', 'entity', 'toDo'];

  removeAuditEvent = auditEvent => this.auditEventService.deleteAuditEvent(auditEvent);
}
