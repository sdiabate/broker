import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContractType } from '../model/contract.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contractTypeSource = new BehaviorSubject<ContractType>(null);
  currentContractType = this.contractTypeSource.asObservable();
  
  constructor() {
    const contractType = localStorage.getItem('contractType');
    if(contractType) {
      this.contractTypeSource.next(JSON.parse(contractType));
    }
  }

  selectContractType(contractType: ContractType): void {
    localStorage.setItem('contractType', JSON.stringify(contractType));
    this.contractTypeSource.next(contractType);
  }
}
