import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivationPatientComponent } from './reactivation-patient.component';

describe('ReactivationPatientComponent', () => {
  let component: ReactivationPatientComponent;
  let fixture: ComponentFixture<ReactivationPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivationPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
