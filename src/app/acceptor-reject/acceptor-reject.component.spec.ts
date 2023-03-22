import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorRejectComponent } from './acceptor-reject.component';

describe('AcceptorRejectComponent', () => {
  let component: AcceptorRejectComponent;
  let fixture: ComponentFixture<AcceptorRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptorRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
