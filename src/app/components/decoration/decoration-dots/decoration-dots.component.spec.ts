import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationDotsComponent } from './decoration-dots.component';

describe('DecorationDotsComponent', () => {
  let component: DecorationDotsComponent;
  let fixture: ComponentFixture<DecorationDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorationDotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
