import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogComponentComponent } from './admin-blog-component.component';

describe('AdminBlogComponentComponent', () => {
  let component: AdminBlogComponentComponent;
  let fixture: ComponentFixture<AdminBlogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
