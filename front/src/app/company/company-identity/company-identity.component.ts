import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-identity',
  templateUrl: './company-identity.component.html',
  styleUrls: ['./company-identity.component.scss']
})
export class CompanyIdentityComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'siret': [null, Validators.required],
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'phone1': [null, Validators.required],
      'phone2': [null],
      'fax': [null],
      'registrationDate': [null, Validators.required],
      'activity': [null],
      'interlocutor': [null],
      'interlocutorRole': [null],
      'employeesCount': [null]
    });
  }

  ngOnInit(): void {
  }

}
