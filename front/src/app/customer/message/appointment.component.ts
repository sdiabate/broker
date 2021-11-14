import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/model/appointment.model';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppointmentComponent implements OnInit, AfterViewInit {

  @Input() appointments: Appointment[];

  displayedColumns: string[] = ['detail', 'direction', 'date', 'duration', 'host', 'type', 'subject', 'edit', 'delete'];

  dataSource = new MatTableDataSource<Appointment>();

  expandedElement: Appointment | null;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.data = this.appointments;
  }

  onAdd() {
    const appointment: Appointment = {} as Appointment;
    const dialogRef = this.dialog.open(AppointmentEditComponent, {
      width: '450px',
      data: appointment
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
