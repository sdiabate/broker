import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { Customer } from '../model/customer.model';
import { Contract } from '../model/contract.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Contract[]>('/api/contracts').pipe(
      mergeMap(contracts => this.http.get<Customer[]>('/api/customers').pipe(
        tap(customers => customers.forEach(c => c.contracts = contracts))
      ))
    );
  }

  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>('/api/customer');
  }
}
