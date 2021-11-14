import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Contract, ContractType } from 'src/app/model/contract.model';
import { DataService } from 'src/app/service/data.service';
import { ContractTypeSelectComponent } from '../contract-type-select/contract-type-select.component';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  @Input() contracts: Contract[];

  displayedColumns: string[] = ['number', 'label', 'date', 'billingCycle', 'validated', 'offer', 'provider', 'download', 'send', 'edit'];

  dataSource = new MatTableDataSource<Contract>();

  constructor(public dialog: MatDialog,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.dataSource.data = this.contracts;
  }

  showContract(contract: Contract) {
    this.router.navigate(['/contract/' + contract.id]);
  }

  createContract() {
    const dialogRef = this.dialog.open(ContractTypeSelectComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe((result: ContractType) => {
      if(result) {
        this.dataService.selectContractType(result);
        this.router.navigate(['/contract']);
      }
    });
  }
}
