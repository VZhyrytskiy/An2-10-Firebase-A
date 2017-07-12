import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrivingListComponent } from './retriving-list.component';

describe('RetrivingListComponent', () => {
  let component: RetrivingListComponent;
  let fixture: ComponentFixture<RetrivingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrivingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrivingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
