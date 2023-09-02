import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDoCheckCycleComponent } from './ng-do-check-cycle.component';

describe('NgDoCheckCycleComponent', () => {
  let component: NgDoCheckCycleComponent;
  let fixture: ComponentFixture<NgDoCheckCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDoCheckCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDoCheckCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
