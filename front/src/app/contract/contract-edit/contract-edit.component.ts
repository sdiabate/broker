import { Component, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Contract, ContractItemData } from 'src/app/model/contract.model';
import { Customer } from 'src/app/model/customer.model';
import { ContractService } from 'src/app/service/contract.service';
import { CustomerService } from 'src/app/service/customer.service';
import { MiscService } from 'src/app/service/misc.service';
import { ContractMultiItemEditComponent } from '../contract-multi-item-edit/contract-multi-item-edit.component';
import { ContractSingleItemEditComponent } from '../contract-single-item-edit/contract-single-item-edit.component';

export interface ContractItemEdit {
  validate: () => void;
}

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.scss']
})
export class ContractEditComponent implements OnInit {

  @ViewChildren(ContractSingleItemEditComponent) singleItemComponents: ContractSingleItemEditComponent[];

  @ViewChildren(ContractMultiItemEditComponent) multiItemComponents: ContractMultiItemEditComponent[];

  data$: Observable<any>;

  paymentModes = ['Prélèvement', 'Avis au client'];

  constructor(private route: ActivatedRoute,
              private miscService: MiscService,
              private customerService: CustomerService,
              private contractService: ContractService) { }

  ngOnInit(): void {
    this.data$ = forkJoin({
      contract:  this.contractService.getContract('id').pipe(
        map(contract => {
          contract.type.items.forEach(item => {
            if(!item.multi) {
              const contractItemData: ContractItemData = {item: item, values: []};
              contract.itemData.push(contractItemData);
              item.params.forEach(param => contractItemData.values.push({param: param}))
            }
          });
          return contract;
        })
      ),
      customer: this.customerService.getCustomer('id')
    }).pipe(tap(d => console.log(d)));
  }

  save(contract: Contract) {
  }

  title(): string {
    return 'Détails du contrat';
  }
}
