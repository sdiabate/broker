import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIdentityComponent } from './company-identity.component';

describe('CompanyIdentityComponent', () => {
  let component: CompanyIdentityComponent;
  let fixture: ComponentFixture<CompanyIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
