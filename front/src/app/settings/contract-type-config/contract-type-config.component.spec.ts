import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTypeConfigComponent } from './contract-type-config.component';

describe('ContractTypeConfigComponent', () => {
  let component: ContractTypeConfigComponent;
  let fixture: ComponentFixture<ContractTypeConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractTypeConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractTypeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
