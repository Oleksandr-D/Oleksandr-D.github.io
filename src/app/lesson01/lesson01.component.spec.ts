import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson01Component } from './lesson01.component';

describe('Lesson01Component', () => {
  let component: Lesson01Component;
  let fixture: ComponentFixture<Lesson01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
