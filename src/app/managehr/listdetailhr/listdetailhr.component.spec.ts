import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdetailhrComponent } from './listdetailhr.component';

describe('ListdetailhrComponent', () => {
  let component: ListdetailhrComponent;
  let fixture: ComponentFixture<ListdetailhrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdetailhrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdetailhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
