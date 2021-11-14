import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContractCategory, ContractType } from '../model/contract.model';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor(private http: HttpClient) { }

  fetchGenders(): Observable<KeyValue<string, string>[]> {
    return this.http.get<KeyValue<string, string>[]>('/api/genders');
  }

  fetchRelationships(): Observable<KeyValue<string, string>[]> {
    return this.http.get<KeyValue<string, string>[]>('/api/relationships');
  }

  fetchContractTypes(): Observable<ContractType[]> {
    return this.http.get<ContractType[]>('/api/contractTypes');
  }

  fetchWarranties(): Observable<string[]> {
    return this.http.get<string[]>('/api/warranties');
  }

  fetchContractCategories(): Observable<ContractCategory[]> {
    return this.http.get<ContractCategory[]>('/api/contractCategories');
  }

  fetchAppointmentDirections(): Observable<KeyValue<string, string>[]> {
    return of([{key: 'IN', value: 'IN'}, {key: 'OUT', value: 'OUT'}]);
  }

  fetchAppointmentTypes(): Observable<KeyValue<string, string>[]> {
    return of([{key: 'MAIL', value: 'MAIL'}, {key: 'PHONE', value: 'PHONE'}, {key: 'PHYSICAL', value: 'PHYSICAL'}]);
  }

  fetchCustomerTypes(): Observable<KeyValue<string, string>[]> {
    return of([{key: 'COMPANY', value: 'Entreprise'}, {key: 'PERSON', value: 'Particulier'}, {key: 'PROSPECT', value: 'Prospect'}]);
  }
}
