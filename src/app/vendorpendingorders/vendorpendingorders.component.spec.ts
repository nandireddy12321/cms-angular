import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpendingordersComponent } from './vendorpendingorders.component';

describe('VendorpendingordersComponent', () => {
  let component: VendorpendingordersComponent;
  let fixture: ComponentFixture<VendorpendingordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorpendingordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpendingordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
