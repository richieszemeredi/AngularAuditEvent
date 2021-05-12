import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuditeventComponent } from './create-auditevent.component';

describe('CreateAuditeventComponent', () => {
  let component: CreateAuditeventComponent;
  let fixture: ComponentFixture<CreateAuditeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAuditeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuditeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
