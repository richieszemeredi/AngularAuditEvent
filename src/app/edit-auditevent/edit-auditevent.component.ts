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
      //period: [''],
      recorded: [''],
      outcome: [''],
      outcomeDesc: [''],
      purposeOfEvent: [''],
      agent: [''],
      source: [''],
      entity: [''],
      start: [''],
      end: ['']
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
        recorded: [new Date(this.auditEventRef.recorded)],
        outcome: [this.auditEventRef.outcome],
        outcomeDesc: [this.auditEventRef.outcomeDesc],
        purposeOfEvent: [this.auditEventRef.purposeOfEvent],
        agent: [this.auditEventRef.agent],
        source: [this.auditEventRef.source],
        entity: [this.auditEventRef.entity],
        start: [new Date(this.auditEventRef.start)],
        end:[new Date(this.auditEventRef.end)]
      });  
    });
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.editForm.value.period = this.editForm.value.start.toISOString().split('T')[0] + ' - ' + this.editForm.value.end.toISOString().split('T')[0];

    this.editForm.value.recorded = this.editForm.value.recorded.toISOString().split('T')[0];
    this.editForm.value.start = this.editForm.value.start.toISOString().split('T')[0];
    this.editForm.value.end = this.editForm.value.end.toISOString().split('T')[0];

    this.auditEventService.updateAuditEvent(this.editForm.value, id);
    this.router.navigate(['list-auditevent']);
  };
}
