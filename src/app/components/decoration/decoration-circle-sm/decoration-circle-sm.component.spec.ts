import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationCircleSmComponent } from './decoration-circle-sm.component';

describe('DecorationCircleSmComponent', () => {
  let component: DecorationCircleSmComponent;
  let fixture: ComponentFixture<DecorationCircleSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorationCircleSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationCircleSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
