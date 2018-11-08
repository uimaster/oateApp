import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdetailComponent } from './hrdetail.component';

describe('HrdetailComponent', () => {
  let component: HrdetailComponent;
  let fixture: ComponentFixture<HrdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
