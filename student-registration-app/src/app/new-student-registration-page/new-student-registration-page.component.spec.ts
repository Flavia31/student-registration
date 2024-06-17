import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentRegistrationPageComponent } from './new-student-registration-page.component';

describe('NewStudentRegistrationPageComponent', () => {
  let component: NewStudentRegistrationPageComponent;
  let fixture: ComponentFixture<NewStudentRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewStudentRegistrationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStudentRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
