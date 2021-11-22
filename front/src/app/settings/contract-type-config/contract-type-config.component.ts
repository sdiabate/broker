import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContractItem, ContractType } from 'src/app/model/contract.model';
import { DataService } from 'src/app/service/data.service';
import { MiscService } from 'src/app/service/misc.service';

@Component({
  selector: 'app-contract-type-config',
  templateUrl: './contract-type-config.component.html',
  styleUrls: ['./contract-type-config.component.scss']
})
export class ContractTypeConfigComponent implements OnInit {

  displayedColumns: string[] = ['name', 'count', 'edit', 'delete', 'detail'];

  dataSource = new MatTableDataSource<ContractType>();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService,
              private misc: MiscService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params => this.misc.getContractCategory('id'))).subscribe(cat => this.dataSource.data = cat.contractTypes);
  }

  showContractItem(item: ContractItem) {
    this.dataService.selectContractItem(item);
    this.router.navigate(['/contract-type-config/']);
  }
}
