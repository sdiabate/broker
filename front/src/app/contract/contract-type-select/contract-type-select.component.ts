import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ContractCategory, ContractType } from 'src/app/model/contract.model';
import { MiscService } from 'src/app/service/misc.service';

@Component({
  selector: 'app-contract-type-select',
  templateUrl: './contract-type-select.component.html',
  styleUrls: ['./contract-type-select.component.scss']
})
export class ContractTypeSelectComponent implements OnInit {

  contractCategories$: Observable<ContractCategory[]>;

  contractTypes: ContractType[];

  constructor(public dialogRef: MatDialogRef<ContractTypeSelectComponent>,
              private miscService: MiscService) { }

  ngOnInit(): void {
    this.contractCategories$ = this.miscService.fetchContractCategories();
    this.miscService.fetchContractTypes().subscribe(arr => this.contractTypes = arr);
  }

  select(contractType: ContractType) {
    this.dialogRef.close(this.contractTypes[0]);
  }
}
