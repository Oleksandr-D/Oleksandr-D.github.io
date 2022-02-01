import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson04Component } from './lesson04.component';

describe('Lesson04Component', () => {
  let component: Lesson04Component;
  let fixture: ComponentFixture<Lesson04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
