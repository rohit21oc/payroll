import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRunsEmpComponent } from './pay-runs-emp.component';

describe('PayRunsEmpComponent', () => {
  let component: PayRunsEmpComponent;
  let fixture: ComponentFixture<PayRunsEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayRunsEmpComponent]
    });
    fixture = TestBed.createComponent(PayRunsEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
