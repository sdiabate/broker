import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractGroupConfigComponent } from './contract-group-config.component';

describe('ContractGroupConfigComponent', () => {
  let component: ContractGroupConfigComponent;
  let fixture: ComponentFixture<ContractGroupConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractGroupConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractGroupConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
