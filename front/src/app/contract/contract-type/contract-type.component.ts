import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContractType } from 'src/app/model/contract.model';

@Component({
  selector: 'app-contract-type',
  templateUrl: './contract-type.component.html',
  styleUrls: ['./contract-type.component.scss']
})
export class ContractTypeComponent implements OnInit {

  @Input() contractTypes: ContractType[];

  @Output() onSelect = new EventEmitter<ContractType>();
  
  displayedColumns: string[] = ['icon', 'label','select'];

  dataSource = new MatTableDataSource<ContractType>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.contractTypes;
  }
  
  select(contractType: ContractType) {
    this.onSelect.emit(contractType);
  }

}
