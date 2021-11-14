import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentComponent: any;
  showSaveButton: boolean = false;
  pageTitle: string;

  constructor(faConfig: FaConfig) {
  }

  @ViewChild('sidenav') sidenav: MatSidenav;

  onActivate(component: any): void {
    this.currentComponent = component;
    this.showSaveButton = component['save'] !== undefined;
    this.pageTitle = component['title'] ? component.title() : '';
  }

  save(): void {
    this.currentComponent.save();
  }
}
