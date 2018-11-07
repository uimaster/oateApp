import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrlistingComponent } from './hrlisting.component';

describe('HrlistingComponent', () => {
  let component: HrlistingComponent;
  let fixture: ComponentFixture<HrlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
