import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Company } from '../model/company.model';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-insurer',
  templateUrl: './insurer.component.html',
  styleUrls: ['./insurer.component.scss']
})
export class InsurerComponent implements OnInit {

  @ViewChild("addInsurerDialog") addInsurerDialog: TemplateRef<any>;

  displayedColumns: string[] = ['siret', 'name', 'email', 'phone', 'address', 'registrationDate', 'delete', 'edit'];

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

  addInsurer(): void {
    const dialogRef = this.dialog.open(this.addInsurerDialog, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  showCompany(company: Company) {
    this.router.navigate(['/insurer/' + company.id]);
  }

  title(): string {
    return "Assureurs";
  }
}
