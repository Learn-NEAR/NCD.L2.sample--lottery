import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeContractComponent } from './change-contract.component';

describe('ChangeContractComponent', () => {
  let component: ChangeContractComponent;
  let fixture: ComponentFixture<ChangeContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
