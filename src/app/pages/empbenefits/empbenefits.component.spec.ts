import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpbenefitsComponent } from './empbenefits.component';

describe('EmpbenefitsComponent', () => {
  let component: EmpbenefitsComponent;
  let fixture: ComponentFixture<EmpbenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpbenefitsComponent]
    });
    fixture = TestBed.createComponent(EmpbenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
