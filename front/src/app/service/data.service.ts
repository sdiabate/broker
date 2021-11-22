import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContractItem, ContractType } from '../model/contract.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contractTypeSource = new BehaviorSubject<ContractType>(null);
  currentContractType = this.contractTypeSource.asObservable();

  private contractItemSource = new BehaviorSubject<ContractItem>(null);
  currentContractItem = this.contractItemSource.asObservable();
  
  constructor() {
    const contractType = localStorage.getItem('contractType');
    if(contractType) {
      this.contractTypeSource.next(JSON.parse(contractType));
    }

    const contractItem = localStorage.getItem('contractItem');
    if(contractItem) {
      this.contractItemSource.next(JSON.parse(contractItem));
    }
  }

  selectContractType(contractType: ContractType): void {
    localStorage.setItem('contractType', JSON.stringify(contractType));
    this.contractTypeSource.next(contractType);
  }

  selectContractItem(contractItem: ContractItem): void {
    localStorage.setItem('contractItem', JSON.stringify(contractItem));
    this.contractItemSource.next(contractItem);
  }

}
