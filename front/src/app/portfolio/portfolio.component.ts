import { animate, state, style, transition, trigger } from '@angular/animations';
import { KeyValue } from '@angular/common';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerIdentityComponent } from '../customer/customer-identity/customer-identity.component';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';
import { MiscService } from '../service/misc.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['more', 'code', 'type', 'name', 'address', 'phone', 'broker', 'registrationDate', 'delete', 'details'];

  dataSource = new MatTableDataSource<Customer>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild("addCustomerDialog") addCustomerDialog: TemplateRef<any>;

  @ViewChild("addEnterpriseDialog") addEnterpriseDialog: TemplateRef<any>;

  @ViewChild(CustomerIdentityComponent) customerIdentity: CustomerIdentityComponent;

  expandedElement: Customer | null;

  customerTypes$: Observable<KeyValue<string, string>[]>

  constructor(private router: Router,
              private customerService: CustomerService,
              private miscService: MiscService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers => this.dataSource.data = customers);
    this.customerTypes$ = this.miscService.fetchCustomerTypes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showCustomer(customer: Customer) {
    this.router.navigate([(customer.person ? '/customer/' : '/corporate/') + customer.id]);
  }
  
  addCustomer(): void {
    const dialogRef = this.dialog.open(this.addCustomerDialog, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  addEnterprise(): void {
    const dialogRef = this.dialog.open(this.addEnterpriseDialog, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  of(customer: Customer): Observable<Customer> {
    return of(customer);
  }

  title(): string {
    return 'Portefeuille';
  }
}
