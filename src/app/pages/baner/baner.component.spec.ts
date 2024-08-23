import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanerComponent } from './baner.component';

describe('BanerComponent', () => {
  let component: BanerComponent;
  let fixture: ComponentFixture<BanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanerComponent]
    });
    fixture = TestBed.createComponent(BanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
