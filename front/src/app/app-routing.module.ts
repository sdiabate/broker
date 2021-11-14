import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CustomerComponent } from './customer/customer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component'
import { CompanyComponent } from './company/company.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { InsurerComponent } from './insurer/insurer.component';
import { InsurerEditComponent } from './insurer/insurer-edit/insurer-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'customer/:id',
    component: CustomerComponent
  },
  {
    path: 'contract/:id',
    component: ContractEditComponent
  },
  {
    path: 'contract',
    component: ContractCreateComponent
  },
  {
    path: 'companies',
    component: CompanyComponent
  },
  {
    path: 'company',
    component: CompanyEditComponent
  },
  {
    path: 'insurers',
    component: InsurerComponent
  },
  {
    path: 'insurer/:id',
    component: InsurerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
