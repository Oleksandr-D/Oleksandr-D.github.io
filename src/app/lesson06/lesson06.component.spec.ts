import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson06Component } from './lesson06.component';

describe('Lesson06Component', () => {
  let component: Lesson06Component;
  let fixture: ComponentFixture<Lesson06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
