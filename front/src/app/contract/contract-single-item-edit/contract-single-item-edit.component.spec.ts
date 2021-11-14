import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSingleItemEditComponent } from './contract-single-item-edit.component';

describe('ContractSingleItemEditComponent', () => {
  let component: ContractSingleItemEditComponent;
  let fixture: ComponentFixture<ContractSingleItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractSingleItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractSingleItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
