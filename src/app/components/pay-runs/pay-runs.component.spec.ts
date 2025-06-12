import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRunsComponent } from './pay-runs.component';

describe('PayRunsComponent', () => {
  let component: PayRunsComponent;
  let fixture: ComponentFixture<PayRunsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayRunsComponent]
    });
    fixture = TestBed.createComponent(PayRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
