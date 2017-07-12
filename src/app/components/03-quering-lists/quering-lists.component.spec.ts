import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueringListsComponent } from './quering-lists.component';

describe('QueringListsComponent', () => {
  let component: QueringListsComponent;
  let fixture: ComponentFixture<QueringListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueringListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueringListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
