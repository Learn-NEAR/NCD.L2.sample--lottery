import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationCircleMdComponent } from './decoration-circle-md.component';

describe('DecorationCircleMdComponent', () => {
  let component: DecorationCircleMdComponent;
  let fixture: ComponentFixture<DecorationCircleMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorationCircleMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationCircleMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
