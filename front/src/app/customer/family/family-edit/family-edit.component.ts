import { KeyValue } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FamilyMember } from 'src/app/model/customer.model';
import { MiscService } from 'src/app/service/misc.service';

@Component({
  selector: 'app-family-edit',
  templateUrl: './family-edit.component.html',
  styleUrls: ['./family-edit.component.scss']
})
export class FamilyEditComponent implements OnInit {

  form: FormGroup;

  genders$: Observable<KeyValue<string, string>[]>;

  relationships$: Observable<KeyValue<string, string>[]>;

  constructor(public dialogRef: MatDialogRef<FamilyEditComponent>,
              @Inject(MAT_DIALOG_DATA) public member: FamilyMember,
              private formBuilder: FormBuilder,
              private miscService: MiscService) {
    this.form = this.formBuilder.group({
      'gender': [null, Validators.required],
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'birthdate': [null, Validators.required],
      'relationship': [null, Validators.required]
    }
    );
  }

  ngOnInit(): void {
    this.genders$ = this.miscService.fetchGenders();
    this.relationships$ = this.miscService.fetchRelationships();
  }

}
