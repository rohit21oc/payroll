import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaarComponent } from './sidebaar.component';

describe('SidebaarComponent', () => {
  let component: SidebaarComponent;
  let fixture: ComponentFixture<SidebaarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebaarComponent]
    });
    fixture = TestBed.createComponent(SidebaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
