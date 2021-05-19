import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuditEvent } from '../app/audit-event.model'

@Injectable({
  providedIn: 'root'
})
export class AuditEventService {

  constructor(private angularFirestore : AngularFirestore) { }

  getAuditEventDoc(id) {
    return this.angularFirestore.collection('auditevent-collection').doc(id).valueChanges()
  }

  getAuditEvent(id) {
    return this.angularFirestore.collection('auditevent-collection').doc(id).valueChanges()
  }

  getAuditEventList() {
    return this.angularFirestore.collection('auditevent-collection').snapshotChanges();
  }

  createAuditEvent(auditEvent: AuditEvent) {
    return new Promise<any>((resolve, reject) => {this.angularFirestore.collection("auditevent-collection").add(auditEvent).then(response => {console.log(response) }, error => reject(error))});
  }

  deleteAuditEvent(auditEvent) {
    return this.angularFirestore.collection("auditevent-collection").doc(auditEvent.id).delete();
  }

  updateAuditEvent(auditEvent: AuditEvent, id) {
    return this.angularFirestore
      .collection("auditevent-collection")
      .doc(id)
      .update({
        type: auditEvent.type,
        subtype: auditEvent.subtype,
        action: auditEvent.action,
        period: auditEvent.period,
        recorded: auditEvent.recorded,
        outcome: auditEvent.outcome,
        outcomeDesc: auditEvent.outcomeDesc,
        purposeOfEvent: auditEvent.purposeOfEvent,
        agent: auditEvent.agent,
        source: auditEvent.source,
        entity: auditEvent.entity,
        start: auditEvent.start,
        end: auditEvent.end
      });
  }
}
