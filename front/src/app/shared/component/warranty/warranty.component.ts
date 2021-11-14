import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss']
})
export class WarrantyComponent implements OnInit {

  @Input() warranties: string[];
  
  displayedColumns: string[] = ['label', 'deductible'];

  dataSource = new MatTableDataSource<String>();
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.warranties;
  }

}
