import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitusersComponent } from './gitusers.component';

describe('GitusersComponent', () => {
  let component: GitusersComponent;
  let fixture: ComponentFixture<GitusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
