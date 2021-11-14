import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurerEditComponent } from './insurer-edit.component';

describe('InsurerEditComponent', () => {
  let component: InsurerEditComponent;
  let fixture: ComponentFixture<InsurerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
