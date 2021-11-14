import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Inject, Input, OnDestroy, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { AddressRow } from '../../../model/address.model';

@Component({
  selector: 'app-address-row',
  templateUrl: './address-row.component.html',
  styleUrls: ['./address-row.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: AddressRowInput }],
  host: {
    '[class.input-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  }
})
export class AddressRowInput implements ControlValueAccessor, MatFormFieldControl<AddressRow>, OnDestroy {

  static nextId = 0;
  @ViewChild('number') numberInput: HTMLInputElement;
  @ViewChild('name') nameInput: HTMLInputElement;

  form: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  controlType = 'address-row-input';
  id = `address-row-input-${AddressRowInput.nextId++}`;
  onChange = (_: any) => {};
  onTouched = () => {};

  get empty() {
    const {
      value: { number, name }
    } = this.form;

    return !number && !name;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input('aria-describedby') userAriaDescribedBy: string;

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.form.disable() : this.form.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): AddressRow | null {
    if (this.form.valid) {
      const {
        value: { number, name }
      } = this.form;
      return new AddressRow(number, name);
    }
    return null;
  }
  set value(tel: AddressRow | null) {
    const { number, name } = tel || new AddressRow(null, '');
    this.form.setValue({ number, name });
    this.stateChanges.next();
  }

  get errorState(): boolean {
    return this.form.invalid && this.form.dirty;
  }

  constructor(
    formBuilder: FormBuilder,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField,
    @Optional() @Self() public ngControl: NgControl) {

    this.form = formBuilder.group({
      number: [
        null,
        [Validators.required]
      ],
      name: [
        null,
        [Validators.required]
      ]
    });

    _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next();
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  // autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void {
  //   if (!control.errors && nextElement) {
  //     this._focusMonitor.focusVia(nextElement, 'program');
  //   }
  // }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program');
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  setDescribedByIds(ids: string[]) {
    const controlElement = this._elementRef.nativeElement
      .querySelector('.address-row-input-container')!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick() {
    // if (this.form.controls.number.valid) {
    //   this._focusMonitor.focusVia(this.numberInput, 'program');
    // } else if (this.form.controls.name.valid) {
    //   this._focusMonitor.focusVia(this.nameInput, 'program');
    // }
  }

  writeValue(tel: AddressRow | null): void {
    this.value = tel;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
  //   this.autoFocusNext(control, nextElement);
  //   this.onChange(this.value);
  // }

  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_required: BooleanInput;
}
