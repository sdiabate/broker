import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Customer, FamilyMember } from 'src/app/model/customer.model';
import { FamilyEditComponent } from './family-edit/family-edit.component';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  @Input() members;

  displayedColumns: string[] = ['firstname', 'lastname', 'gender', 'birthdate', 'relationship', 'edit', 'delete'];

  dataSource = new MatTableDataSource<FamilyMember>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = this.members;
  }

  onAdd() {
    const member: FamilyMember = {};
    const dialogRef = this.dialog.open(FamilyEditComponent, {
      width: '450px',
      data: member
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
