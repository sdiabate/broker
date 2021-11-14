import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractMultiItemEditComponent } from './contract-multi-item-edit.component';

describe('ContractMultiItemEditComponent', () => {
  let component: ContractMultiItemEditComponent;
  let fixture: ComponentFixture<ContractMultiItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractMultiItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractMultiItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
