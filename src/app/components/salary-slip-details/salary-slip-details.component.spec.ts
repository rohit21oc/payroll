import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarySlipDetailsComponent } from './salary-slip-details.component';

describe('SalarySlipDetailsComponent', () => {
  let component: SalarySlipDetailsComponent;
  let fixture: ComponentFixture<SalarySlipDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalarySlipDetailsComponent]
    });
    fixture = TestBed.createComponent(SalarySlipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
