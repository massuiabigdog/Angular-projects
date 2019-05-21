import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmdetailComponent } from './crmdetail.component';

describe('CrmdetailComponent', () => {
  let component: CrmdetailComponent;
  let fixture: ComponentFixture<CrmdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
