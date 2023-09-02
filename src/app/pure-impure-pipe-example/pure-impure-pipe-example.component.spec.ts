import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureImpurePipeExampleComponent } from './pure-impure-pipe-example.component';

describe('PureImpurePipeExampleComponent', () => {
  let component: PureImpurePipeExampleComponent;
  let fixture: ComponentFixture<PureImpurePipeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureImpurePipeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PureImpurePipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
