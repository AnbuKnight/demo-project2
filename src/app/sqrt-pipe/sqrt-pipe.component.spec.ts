import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqrtPipeComponent } from './sqrt-pipe.component';

describe('SqrtPipeComponent', () => {
  let component: SqrtPipeComponent;
  let fixture: ComponentFixture<SqrtPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqrtPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqrtPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
