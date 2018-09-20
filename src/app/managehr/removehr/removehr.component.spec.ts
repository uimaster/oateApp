import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovehrComponent } from './removehr.component';

describe('RemovehrComponent', () => {
  let component: RemovehrComponent;
  let fixture: ComponentFixture<RemovehrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovehrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovehrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
