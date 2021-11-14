import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractItemEditComponent } from './contract-item-edit.component';

describe('ContractItemEditComponent', () => {
  let component: ContractItemEditComponent;
  let fixture: ComponentFixture<ContractItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
