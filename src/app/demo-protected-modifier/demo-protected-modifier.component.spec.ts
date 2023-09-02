import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProtectedModifierComponent } from './demo-protected-modifier.component';

describe('DemoProtectedModifierComponent', () => {
  let component: DemoProtectedModifierComponent;
  let fixture: ComponentFixture<DemoProtectedModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoProtectedModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProtectedModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
