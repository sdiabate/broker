import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddressRow } from '../../model/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  form: FormGroup = new FormGroup({
    street: new FormControl(new AddressRow(null, '')),
    city: new FormControl(new AddressRow(null, '')),
    country: new FormControl(null)
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}
