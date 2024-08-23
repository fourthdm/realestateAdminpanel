import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewblogsComponent } from './viewblogs.component';

describe('ViewblogsComponent', () => {
  let component: ViewblogsComponent;
  let fixture: ComponentFixture<ViewblogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewblogsComponent]
    });
    fixture = TestBed.createComponent(ViewblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
