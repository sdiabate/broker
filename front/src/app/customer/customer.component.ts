import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from '../model/customer.model';
import { OnSave } from '../model/onsave.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnSave {

  form: FormGroup;

  customer$: Observable<Customer>;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customer$ = this.route.paramMap.pipe(
      switchMap(params => this.customerService.getCustomer(params.get('id')))
    );
  }

  save(): void {
  }

  title(): string {
    return 'Compte particulier';
  }
}
