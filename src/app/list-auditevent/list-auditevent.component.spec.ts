import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuditeventComponent } from './list-auditevent.component';

describe('ListAuditeventComponent', () => {
  let component: ListAuditeventComponent;
  let fixture: ComponentFixture<ListAuditeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAuditeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAuditeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
