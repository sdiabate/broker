import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContractItem, ContractItemData } from 'src/app/model/contract.model';
import { ParamValue } from 'src/app/model/misc.model';
import { ContractItemEditComponent } from '../contract-item-edit/contract-item-edit.component';

@Component({
  selector: 'app-contract-single-item-edit',
  templateUrl: './contract-single-item-edit.component.html',
  styleUrls: ['./contract-single-item-edit.component.scss']
})
export class ContractSingleItemEditComponent implements OnInit {

  @Input() data: ContractItemData;

  @ViewChild(ContractItemEditComponent) contractItemEditComponent: ContractItemEditComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

  validate() {
    this.contractItemEditComponent.validate();
  }
}
