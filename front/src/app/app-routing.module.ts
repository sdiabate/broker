import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgentComponent } from './agent/agent.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { CorporateComponent } from './customer/corporate/corporate.component';
import { CustomerComponent } from './customer/customer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { InsurerEditComponent } from './insurer/insurer-edit/insurer-edit.component';
import { InsurerComponent } from './insurer/insurer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContractTypeConfigComponent } from './settings/contract-type-config/contract-type-config.component';
import { SettingsComponent } from './settings/settings.component';

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
    path: 'insurers',
    component: InsurerComponent
  },
  {
    path: 'insurer/:id',
    component: InsurerEditComponent
  },
  {
    path: 'corporate/:id',
    component: CorporateComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'agents',
    component: AgentComponent
  },
  {
    path: 'dashboard',
    component: DashbordComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'contract-type-config/:id',
    component: ContractTypeConfigComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
