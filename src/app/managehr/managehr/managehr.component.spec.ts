import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehrComponent } from './managehr.component';

describe('ManagehrComponent', () => {
  let component: ManagehrComponent;
  let fixture: ComponentFixture<ManagehrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagehrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagehrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
