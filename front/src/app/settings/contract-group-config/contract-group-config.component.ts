import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ContractCategory, ContractType } from 'src/app/model/contract.model';
import { MiscService } from 'src/app/service/misc.service';

@Component({
  selector: 'app-contract-group-config',
  templateUrl: './contract-group-config.component.html',
  styleUrls: ['./contract-group-config.component.scss']
})
export class ContractGroupConfigComponent implements OnInit {

  displayedColumns: string[] = ['name', 'count', 'edit', 'delete', 'detail'];

  dataSource = new MatTableDataSource<ContractCategory>();

  constructor(private router: Router,
              private misc: MiscService) { }

  ngOnInit(): void {
    this.misc.fetchContractCategories().subscribe(category => this.dataSource.data = category);
  }

  showContractType(contractType: ContractType) {
    this.router.navigate(['/contract-type-config/' + contractType.id]);
  }

}
