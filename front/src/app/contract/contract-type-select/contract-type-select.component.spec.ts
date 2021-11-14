import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTypeSelectComponent } from './contract-type-select.component';

describe('ContractTypeSelectComponent', () => {
  let component: ContractTypeSelectComponent;
  let fixture: ComponentFixture<ContractTypeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractTypeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
