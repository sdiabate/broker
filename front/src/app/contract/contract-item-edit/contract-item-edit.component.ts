import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContractItemData } from 'src/app/model/contract.model';
import { ParamValue } from 'src/app/model/misc.model';
import { ContractItemEdit } from '../contract-edit/contract-edit.component';

@Component({
  selector: 'app-contract-item-edit',
  templateUrl: './contract-item-edit.component.html',
  styleUrls: ['./contract-item-edit.component.scss']
})
export class ContractItemEditComponent implements OnInit, ContractItemEdit {

  @Input() data: ContractItemData;

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.syncParamsWithValues();
    this.buildForm();
  }

  syncParamsWithValues() {
    this.data.item.params.forEach(param => {
      let value = this.data.values.find(v => v.param === param);
      if(!value) {
        value = {param: param};
        this.data.values.push(value);
      }
    });
  }

  buildForm() {
    this.form = new FormGroup({});
    for(let i = 0; i < this.data.values.length; i++) {
      this.form.setControl(i.toString(), this.buildControl(this.data.values[i]));
    }
  }

  buildControl(pv: ParamValue): FormControl {
    const control = new FormControl(pv.value);
    return control;
  }

  validate() {
    for(let i = 0; i < this.data.values.length; i++) {
      this.data.values[i].value = this.form.get(i.toString()).value;
    }
  }
}
