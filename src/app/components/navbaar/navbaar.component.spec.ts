import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaarComponent } from './navbaar.component';

describe('NavbaarComponent', () => {
  let component: NavbaarComponent;
  let fixture: ComponentFixture<NavbaarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbaarComponent]
    });
    fixture = TestBed.createComponent(NavbaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
