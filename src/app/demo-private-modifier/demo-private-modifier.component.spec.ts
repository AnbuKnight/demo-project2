import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPrivateModifierComponent } from './demo-private-modifier.component';

describe('DemoPrivateModifierComponent', () => {
  let component: DemoPrivateModifierComponent;
  let fixture: ComponentFixture<DemoPrivateModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPrivateModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPrivateModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
