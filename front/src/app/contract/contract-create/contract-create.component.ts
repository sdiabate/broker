import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Contract, ContractItemData, ContractType } from 'src/app/model/contract.model';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/service/customer.service';
import { DataService } from 'src/app/service/data.service';
import { OnSave } from 'src/app/model/onsave.model';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit, OnDestroy, OnSave {

  contract$: Observable<Contract>;

  customer$: Observable<Customer>;

  contractType: ContractType;

  contractTypeSubscription: Subscription;

  constructor(private customerService: CustomerService,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.contractTypeSubscription = this.dataService.currentContractType.subscribe(type => this.contractType = type);
    this.customer$ = this.customerService.getCustomer('id');
    this.buildContract();
  }

  ngOnDestroy(): void {
    this.contractTypeSubscription.unsubscribe();
  }

  buildContract() {
    const contract: Contract = {type: this.contractType, itemData: []};
    this.contractType.items.forEach(item => {
      if(!item.multi) {
        const contractItemData: ContractItemData = {item: item, values: []};
        contract.itemData.push(contractItemData);
        item.params.forEach(param => contractItemData.values.push({param: param}))
      }
    });
    this.contract$ = of(contract);
  }

  save(): void {
  }

  title(): string {
    return 'Création de contrat';
  }
}
