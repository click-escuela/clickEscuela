import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesResumeComponent } from './grades.component';

describe('GradesResumeComponent', () => {
  let component: GradesResumeComponent;
  let fixture: ComponentFixture<GradesResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
