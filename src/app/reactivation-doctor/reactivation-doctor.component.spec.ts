import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivationDoctorComponent } from './reactivation-doctor.component';

describe('ReactivationDoctorComponent', () => {
  let component: ReactivationDoctorComponent;
  let fixture: ComponentFixture<ReactivationDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivationDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivationDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
