import { Component, OnInit } from '@angular/core';
import { AuditEventService } from '../audit-event.service';
import { AuditEvent } from '../audit-event.model';


@Component({
  selector: 'app-list-auditevent',
  templateUrl: './list-auditevent.component.html',
  styleUrls: ['./list-auditevent.component.css']
})
export class ListAuditeventComponent implements OnInit {
  AuditEvents: AuditEvent[];
  
  constructor(private auditEventService: AuditEventService) { }

  ngOnInit() {
    this.auditEventService.getAuditEventList().subscribe(res => {
      this.AuditEvents = res.map( e => {
        return {
          id: e.payload.doc.id,
           ...e.payload.doc.data() as {}
        } as AuditEvent;
      })
    });    
  }
  columnsToDisplay = ['type', 'subtype', 'action', 'period', 'recorded', 'outcome', 'outcomeDesc', 'purposeOfEvent', 'agent', 'source', 'entity', 'toDo'];

  removeAuditEvent = auditEvent => this.auditEventService.deleteAuditEvent(auditEvent);
}
