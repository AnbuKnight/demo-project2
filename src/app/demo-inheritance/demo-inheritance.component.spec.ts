import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInheritanceComponent } from './demo-inheritance.component';

describe('DemoInheritanceComponent', () => {
  let component: DemoInheritanceComponent;
  let fixture: ComponentFixture<DemoInheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoInheritanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
