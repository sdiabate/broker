import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract, ContractItem, ContractItemData } from 'src/app/model/contract.model';
import { Customer } from 'src/app/model/customer.model';
import { MiscService } from 'src/app/service/misc.service';
import { ContractMultiItemEditComponent } from '../contract-multi-item-edit/contract-multi-item-edit.component';
import { ContractSingleItemEditComponent } from '../contract-single-item-edit/contract-single-item-edit.component';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  @ViewChildren(ContractSingleItemEditComponent) singleItemComponents: ContractSingleItemEditComponent[];

  @ViewChildren(ContractMultiItemEditComponent) multiItemComponents: ContractMultiItemEditComponent[];

  @Input() contract: Contract;

  @Input() customer: Customer;

  @Output() onValidate = new EventEmitter<Contract>();

  warranties$: Observable<string[]>;

  paymentModes = ['Prélèvement', 'Avis au client'];

  // key = contract item label
  contractItems: Map<string, ContractItem> = new Map();

  // key = contract item label
  data: Map<string, ContractItemData[]> = new Map();

  constructor(private miscService: MiscService) { }

  ngOnInit(): void {
    this.contract.itemData.forEach(currentData => {
      let arr = this.data.get(currentData.item.label);
      if(!arr) {
        arr = [currentData];
        this.data.set(currentData.item.label, arr);
      } else {
        arr.push(currentData);
      }
    });

    this.contract.type.items.forEach(item => {
      this.contractItems.set(item.label, item);
      if(!this.data.get(item.label)) {
        // Only for muti item cases
        this.data.set(item.label, []);
      }
    });

    this.warranties$ = this.miscService.fetchWarranties().pipe();
  }

  validate() {
    this.singleItemComponents.forEach(cmp => cmp.validate());
    this.multiItemComponents.forEach(cmp => cmp.validate());

    this.onValidate.emit(this.contract); 
  }

}