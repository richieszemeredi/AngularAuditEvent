import { Component, OnInit } from '@angular/core';
import { AuditEventService } from '../audit-event.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auditEventService.createAuditEvent(this.auditEventForm.value);
    this.router.navigate(['list-auditevent']);
  }
}
