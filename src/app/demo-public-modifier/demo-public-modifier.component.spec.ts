import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPublicModifierComponent } from './demo-public-modifier.component';

describe('DemoPublicModifierComponent', () => {
  let component: DemoPublicModifierComponent;
  let fixture: ComponentFixture<DemoPublicModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPublicModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPublicModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
