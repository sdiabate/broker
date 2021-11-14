import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractMultiItemEditDialogComponent } from './contract-multi-item-edit-dialog.component';

describe('ContractMultiItemEditDialogComponent', () => {
  let component: ContractMultiItemEditDialogComponent;
  let fixture: ComponentFixture<ContractMultiItemEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractMultiItemEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractMultiItemEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
