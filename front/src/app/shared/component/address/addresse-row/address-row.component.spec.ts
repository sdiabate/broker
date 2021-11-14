import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressRowInput } from './address-row.component';

describe('AddresseRowComponent', () => {
  let component: AddressRowInput;
  let fixture: ComponentFixture<AddressRowInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressRowInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressRowInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
