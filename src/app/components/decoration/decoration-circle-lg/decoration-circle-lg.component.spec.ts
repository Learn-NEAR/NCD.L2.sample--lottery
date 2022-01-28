import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationCircleLgComponent } from './decoration-circle-lg.component';

describe('DecorationCircleLgComponent', () => {
  let component: DecorationCircleLgComponent;
  let fixture: ComponentFixture<DecorationCircleLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorationCircleLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationCircleLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
