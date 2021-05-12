import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuditeventComponent } from './edit-auditevent.component';

describe('EditAuditeventComponent', () => {
  let component: EditAuditeventComponent;
  let fixture: ComponentFixture<EditAuditeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAuditeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAuditeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
