import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Company } from 'src/app/model/company.model';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  @Input() company: Company;

  @Input() isCustomer: boolean;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  title(): string {
    return "Mise à jour société";
  }
}
