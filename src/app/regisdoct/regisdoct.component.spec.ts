import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisdoctComponent } from './regisdoct.component';

describe('RegisdoctComponent', () => {
  let component: RegisdoctComponent;
  let fixture: ComponentFixture<RegisdoctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisdoctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisdoctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
