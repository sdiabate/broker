import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContractItemData } from 'src/app/model/contract.model';
import { ContractItemEditComponent } from '../contract-item-edit/contract-item-edit.component';

@Component({
  selector: 'app-contract-multi-item-edit-dialog',
  templateUrl: './contract-multi-item-edit-dialog.component.html',
  styleUrls: ['./contract-multi-item-edit-dialog.component.scss']
})
export class ContractMultiItemEditDialogComponent implements OnInit {

  @ViewChild(ContractItemEditComponent) contractItemEditComponent: ContractItemEditComponent;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: ContractItemData,
              public dialogRef: MatDialogRef<ContractMultiItemEditDialogComponent>) { }

  ngOnInit(): void {

  }

  onValidate() {
    this.contractItemEditComponent.validate();
    this.dialogRef.close(this.data);
  }
}
