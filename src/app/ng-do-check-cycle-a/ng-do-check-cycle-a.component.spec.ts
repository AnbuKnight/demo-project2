import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDoCheckCycleAComponent } from './ng-do-check-cycle-a.component';

describe('NgDoCheckCycleAComponent', () => {
  let component: NgDoCheckCycleAComponent;
  let fixture: ComponentFixture<NgDoCheckCycleAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDoCheckCycleAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDoCheckCycleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
