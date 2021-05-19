import { Component, OnInit } from '@angular/core';
import { AuditEventService } from '../audit-event.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-auditevent',
  templateUrl: './create-auditevent.component.html',
  styleUrls: ['./create-auditevent.component.css']
})
export class CreateAuditeventComponent implements OnInit {
  public auditEventForm: FormGroup;

  constructor(
    public auditEventService : AuditEventService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.auditEventForm = this.formBuilder.group({
      type: [''],
      subtype: [''],
      action: [''],
      period: [''],
      recorded: [''],
      outcome:[''],
      outcomeDesc: [''],
      purposeOfEvent: [''],
      agent: [''],
      source:[''],
      entity:[''],
      start: [''],
      end: ['']
    })
  }

  ngOnInit(): void { }

  onSubmit() {
    this.auditEventForm.value.recorded = this.auditEventForm.value.recorded.toISOString().split('T')[0];
    this.auditEventForm.value.period = this.auditEventForm.value.start.toISOString().split('T')[0] + ' - ' + this.auditEventForm.value.end.toISOString().split('T')[0];
    this.auditEventForm.value.start = this.auditEventForm.value.start.toISOString().split('T')[0];
    this.auditEventForm.value.end = this.auditEventForm.value.end.toISOString().split('T')[0];

    this.auditEventService.createAuditEvent(this.auditEventForm.value);

    this.router.navigate(['list-auditevent']);
  }
}
