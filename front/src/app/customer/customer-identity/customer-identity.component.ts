import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-identity',
  templateUrl: './customer-identity.component.html',
  styleUrls: ['./customer-identity.component.scss']
})
export class CustomerIdentityComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'code': [null, Validators.required],
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'gender': [null, Validators.required],
      'birthdate': [null, Validators.required],
      'phone1': [null, Validators.required],
      'phone2': [null, Validators.required],
      'registrationDate': [null, Validators.required],
      'email': [null, Validators.required],
      'maritalStatus': [null, Validators.required],
      'birthCountry': [null, Validators.required],
      'trader': [null, Validators.required],
      'job': [null, Validators.required],
      'income': [null, Validators.required],
      'ssn': [null, Validators.required],
      'validated': [null, Validators.required]
    });
  }

}
