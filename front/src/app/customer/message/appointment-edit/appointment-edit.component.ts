import { KeyValue } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/model/appointment.model';
import { FamilyMember } from 'src/app/model/customer.model';
import { MiscService } from 'src/app/service/misc.service';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.scss']
})
export class AppointmentEditComponent implements OnInit {

  form: FormGroup;

  directions$: Observable<KeyValue<string, string>[]>;

  types$: Observable<KeyValue<string, string>[]>;

  constructor(public dialogRef: MatDialogRef<AppointmentEditComponent>,
              @Inject(MAT_DIALOG_DATA) public appointment: Appointment,
              private formBuilder: FormBuilder,
              private miscService: MiscService) {
    this.form = this.formBuilder.group({
      'date': [null, Validators.required],
      'direction': [null, Validators.required],
      'type': [null, Validators.required],
      'host': [null, Validators.required],
      'duration': [null, Validators.required],
      'subject': [null, Validators.required],
      'body': [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.directions$ = this.miscService.fetchAppointmentDirections();
    this.types$ = this.miscService.fetchAppointmentTypes();
  }

}
