import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Contract, ContractItem, ContractItemData } from 'src/app/model/contract.model';
import { Param } from 'src/app/model/misc.model';
import { ContractItemEdit } from '../contract-edit/contract-edit.component';
import { ContractMultiItemEditDialogComponent } from '../contract-multi-item-edit-dialog/contract-multi-item-edit-dialog.component';

@Component({
  selector: 'app-contract-multi-item-edit',
  templateUrl: './contract-multi-item-edit.component.html',
  styleUrls: ['./contract-multi-item-edit.component.scss']
})
export class ContractMultiItemEditComponent implements OnInit, ContractItemEdit {

  @Input() item: ContractItem;

  @Input() data: ContractItemData[];

  @Input() contract: Contract;

  displayedColumns: string[] = [];

  dataSource: MatTableDataSource<ContractItemData>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ContractItemData>(this.data);
    this.item.params.forEach(param => this.displayedColumns.push(param.name));
    this.displayedColumns.push('edit', 'delete');
  }

  valueOf(param: Param, data: ContractItemData) {
    return data.values.find(v => v.param.name === param.name).value;
  }

  onAdd() {
    const data: ContractItemData = {item: this.item, values: []};
    const dialogRef = this.dialog.open(ContractMultiItemEditDialogComponent, {
      width: '450px',
      data: data
    });

    dialogRef.afterClosed().subscribe((result: ContractItemData) => {
      if(result) {
        this.data.push(result);
        this.dataSource.data = this.data;
      }
    });
  }

  onEdit(data: ContractItemData) {
    const dataCloned: ContractItemData = {item: data.item, values: [...data.values]};
    const dialogRef = this.dialog.open(ContractMultiItemEditDialogComponent, {
      width: '450px',
      data: data
    });

    dialogRef.afterClosed().subscribe((result: ContractItemData) => {
      if(result) {
        data.values = result.values;
        this.dataSource.data = this.dataSource.data;
      }
    });
  }

  validate() {
    const arr = this.contract.itemData;
    for( let i = 0; i < arr.length; i++) {
      if(arr[i].item.label === this.item.label) {
        arr.splice(i, 1);
        i--;
      }
    }
    this.data.forEach(element => arr.push(element));
  }
}
