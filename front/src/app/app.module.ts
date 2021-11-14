import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdentityPipePipe } from './shared/pipe/identity/identity-pipe.pipe';
import { AddressPipePipe } from './shared/pipe/address/address-pipe.pipe';
import { MatModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FamilyComponent } from './customer/family/family.component';
import { DocumentComponent } from './shared/component/document/document.component';
import { AppointmentComponent } from './customer/message/appointment.component';
import { FlexLayoutGapDirective } from './shared/directive/file-icon/flex-layout-gap.directive';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FamilyEditComponent } from './customer/family/family-edit/family-edit.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { AddressComponent } from './shared/component/address/address.component';
import { WarrantyComponent } from './shared/component/warranty/warranty.component';
import { Injectable } from '@angular/core';
import { StyleDefinition, LayoutGapStyleBuilder, LayoutGapParent } from '@angular/flex-layout';
import { CompanyComponent } from './company/company.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractTypeSelectComponent } from './contract/contract-type-select/contract-type-select.component';
import { ContractTypeComponent } from './contract/contract-type/contract-type.component';
import { ContractItemEditComponent } from './contract/contract-item-edit/contract-item-edit.component';
import { ContractSingleItemEditComponent } from './contract/contract-single-item-edit/contract-single-item-edit.component';
import { ContractMultiItemEditComponent } from './contract/contract-multi-item-edit/contract-multi-item-edit.component';
import { ContractMultiItemEditDialogComponent } from './contract/contract-multi-item-edit-dialog/contract-multi-item-edit-dialog.component';
import { ContractComponent } from './contract/contract/contract.component';
import { AddressRowInput } from './shared/component/address/addresse-row/address-row.component';
import { AppointmentEditComponent } from './customer/message/appointment-edit/appointment-edit.component';
import { CustomerIdentityComponent } from './customer/customer-identity/customer-identity.component';
import { InsurerComponent } from './insurer/insurer.component';
import { InsurerEditComponent } from './insurer/insurer-edit/insurer-edit.component';
import { CompanyIdentityComponent } from './company/company-identity/company-identity.component';


@Injectable()
export class DefaultLayoutGapStyleBuilder extends LayoutGapStyleBuilder {
  sideEffect(gapValue: string, _styles: StyleDefinition, parent: LayoutGapParent) {
    super.sideEffect(gapValue || '16px', _styles, parent);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    IdentityPipePipe,
    AddressPipePipe,
    ContractListComponent,
    CustomerComponent,
    FamilyComponent,
    DocumentComponent,
    AppointmentComponent,
    FlexLayoutGapDirective,
    FamilyEditComponent,
    ContractEditComponent,
    AddressComponent,
    WarrantyComponent,
    CompanyComponent,
    CompanyEditComponent,
    ContractCreateComponent,
    ContractTypeSelectComponent,
    ContractTypeComponent,
    ContractItemEditComponent,
    ContractSingleItemEditComponent,
    ContractMultiItemEditComponent,
    ContractMultiItemEditDialogComponent,
    ContractComponent,
    AddressRowInput,
    AppointmentEditComponent,
    CustomerIdentityComponent,
    InsurerComponent,
    InsurerEditComponent,
    CompanyIdentityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [
    {provide: LayoutGapStyleBuilder, useClass: DefaultLayoutGapStyleBuilder}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
