import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurer-edit',
  templateUrl: './insurer-edit.component.html',
  styleUrls: ['./insurer-edit.component.scss']
})
export class InsurerEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title(): string {
    return "Compte assureur";
  }

  save(): void {
    
  }
}
