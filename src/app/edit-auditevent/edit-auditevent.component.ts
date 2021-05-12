import { Component, OnInit } from '@angular/core';
import { AuditEventService } from '../audit-event.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-auditevent',
  templateUrl: './edit-auditevent.component.html',
  styleUrls: ['./edit-auditevent.component.css']
})
export class EditAuditeventComponent implements OnInit {
  public editForm: FormGroup;
  auditEventRef: any;

  constructor(
    public auditEventService: AuditEventService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) { 
    this.editForm = this.formBuilder.group({
      type: [''],
      subtype: [''],
      action: [''],
      period: [''],
      recorded: [''],
      outcome: [''],
      outcomeDesc: [''],
      purposeOfEvent: [''],
      agent: [''],
      source: [''],
      entity: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    this.auditEventService.getAuditEventDoc(id).subscribe(res => {
      this.auditEventRef = res;
      this.editForm = this.formBuilder.group({
        type: [this.auditEventRef.type],
        subtype: [this.auditEventRef.subtype],
        action: [this.auditEventRef.action],
        period: [this.auditEventRef.period],
        recorded: [this.auditEventRef.recorded],
        outcome: [this.auditEventRef.outcome],
        outcomeDesc: [this.auditEventRef.outcomeDesc],
        purposeOfEvent: [this.auditEventRef.purposeOfEvent],
        agent: [this.auditEventRef.agent],
        source: [this.auditEventRef.source],
        entity: [this.auditEventRef.entity]
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');

    this.auditEventService.updateAuditEvent(this.editForm.value, id);
    this.router.navigate(['list-auditevent']);
  };
}
