import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationLinesComponent } from './decoration-lines.component';

describe('DecorationLinesComponent', () => {
  let component: DecorationLinesComponent;
  let fixture: ComponentFixture<DecorationLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorationLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
