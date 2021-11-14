import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Company } from '../model/company.model'
import { CompanyService } from '../service/company.service'
import { CompanyEditComponent } from './company-edit/company-edit.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['siret', 'name', 'email', 'phone', 'address', 'registrationDate', 'edit', 'delete'];

  dataSource = new MatTableDataSource<Company>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private companyService: CompanyService,
              public dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.companyService.fetchCompanies().subscribe(companies => this.dataSource.data = companies)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onAdd() {
    const data: Company = {};
    const dialogRef = this.dialog.open(CompanyEditComponent, {
      width: '450px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  showCompany(company: Company) {
    this.router.navigate(['company'])
  }

}
