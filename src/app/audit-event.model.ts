export class AuditEvent {
    id: string;
    type: String;
    subtype: String;
    action: String;
    period: String;
    recorded: Date;
    outcome: String;
    outcomeDesc: String;
    purposeOfEvent: String;
    agent: String;
    source: String;
    entity: String;
    start: String;
    end: String;
}