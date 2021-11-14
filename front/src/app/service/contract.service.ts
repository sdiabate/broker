import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Contract, ContractType } from '../model/contract.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  getContract(id: string): Observable<Contract> {
    return this.http.get<ContractType[]>('/api/contractTypes').pipe(
      switchMap(types => this.getContracts('customer').pipe(tap(contracts => {
        contracts[0].type = types[0],
        contracts[0].itemData = []
      }))),
      map(contracts => contracts[0])
    );
  }

  getContracts(customer: string): Observable<Contract[]> {
    return this.http.get<Contract[]>('/api/contracts');
  }
}
