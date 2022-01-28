import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeContractMobileComponent } from './change-contract-mobile.component';

describe('ChangeContractMobileComponent', () => {
  let component: ChangeContractMobileComponent;
  let fixture: ComponentFixture<ChangeContractMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeContractMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeContractMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
