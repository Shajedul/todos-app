import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTodosComponent } from './view-all-todos.component';

describe('ViewAllTodosComponent', () => {
  let component: ViewAllTodosComponent;
  let fixture: ComponentFixture<ViewAllTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
