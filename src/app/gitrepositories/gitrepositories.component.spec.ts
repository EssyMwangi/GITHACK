import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitrepositoriesComponent } from './gitrepositories.component';

describe('GitrepositoriesComponent', () => {
  let component: GitrepositoriesComponent;
  let fixture: ComponentFixture<GitrepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitrepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitrepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
