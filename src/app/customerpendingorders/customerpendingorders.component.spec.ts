import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpendingordersComponent } from './customerpendingorders.component';

describe('CustomerpendingordersComponent', () => {
  let component: CustomerpendingordersComponent;
  let fixture: ComponentFixture<CustomerpendingordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerpendingordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerpendingordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
