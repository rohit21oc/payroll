import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlySlipsComponent } from './yearly-slips.component';

describe('YearlySlipsComponent', () => {
  let component: YearlySlipsComponent;
  let fixture: ComponentFixture<YearlySlipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearlySlipsComponent]
    });
    fixture = TestBed.createComponent(YearlySlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
