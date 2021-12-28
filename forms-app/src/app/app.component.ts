import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// ------------- REACTIVE  section
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([new FormControl('male')]),
    });

    this.signupForm.valueChanges.subscribe((value) => {
      console.log(`This value is changing`);
      console.log(value);
    });
    this.signupForm.statusChanges.subscribe((status) =>
      console.log(`This status is changing ${status}`)
    );
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'Max',
    //     email: 'max@test.com',
    //   },
    //   gender: 'male',
    //   hobbies: [],
    // });
    this.signupForm.patchValue({
      userData: {
        username: 'Anna',
        email: 'anna@test.com',
      },
    });

    // ---------- --- REACTIVE  Assignment section
    this.signupFormAssignment = new FormGroup({
      projectname: new FormControl(
        null,
        [
          Validators.required,
          // this.forbiddenProjectNames.bind(this),
        ],
        this.forbiddenProjects
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  // get controls() {
  //   return (this.signupForm.get('hobbies') as FormArray).controls;
  // }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      console.log('I got you');
      return { nameIsForbidden: true };
    }
    console.log('I didnt get you');
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
    return promise;
  }

  // ------------- REACTIVE  Assignment section

  signupFormAssignment: FormGroup;
  forbiddenProjectName: ['Test'];

  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectName.indexOf(control.value) !== -1) {
      return { projectNameIsForbidden: true };
    }
    return null;
  }

  forbiddenProjects(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ projectIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
    return promise;
  }

  onSubmitAssignment() {
    console.log(this.signupFormAssignment);
    // this.signupForm.reset();
  }
}

// ------------- Template Driven  section
// export class AppComponent {

//   @ViewChild('f') signUpForm: NgForm;
//   @ViewChild('fAssignment') assingmentForm: NgForm;
//   defaultQuestion = 'pet';
//   answer = 'Two-way binding';
//   genders = ['male', 'female'];
//   user = {
//     username: '',
//     email: '',
//     secretQuestion: '',
//     answer: '',
//     gender: '',
//   };
//   submitted = false;

//   suggestUserName() {
//     const suggestedName = 'Superuser';
//     // this.signUpForm.setValue({
//     //   userData: {
//     //     username: suggestedName,
//     //     email: '',
//     //   },
//     //   secret: 'pet',
//     //   questionAnswer: '',
//     //   gender: 'male',
//     // });

//     // ----- SET VALUE sets the whole form and
//     // ----- PATCH VALUE sets especifics parts of the form

//     this.signUpForm.form.patchValue({
//       userData: {
//         username: suggestedName,
//       },
//     });
//   }
//   // onSubmit(form: NgForm) {
//   //   console.log(form);
//   //   console.log(form.value.username);
//   //   console.log(form.value.secret);
//   //   console.log(form.value.email);
//   // }

//   onResetWithValues() {
//     const suggestedName = 'Superuser';
//     this.signUpForm.reset({
//       userData: {
//         username: suggestedName,
//         email: '',
//       },
//       secret: 'pet',
//       questionAnswer: '',
//       gender: 'male',
//     });
//   }

//   onReset() {
//     this.signUpForm.reset();
//   }
//   onSubmit() {
//     this.submitted = true;
//     this.user.username = this.signUpForm.value.userData.username;
//     this.user.email = this.signUpForm.value.userData.email;
//     this.user.secretQuestion = this.signUpForm.value.secret;
//     this.user.answer = this.signUpForm.value.questionAnswer;
//     this.user.gender = this.signUpForm.value.gender;
//     this.onReset();
//     console.log(this.signUpForm);
//   }

//   // ------------- Template Driven Assignment section

//   // defaultChoice = 'Advanced';
//   // submittedAssignment = false;
//   // userAssignment = {
//   //   email: '',
//   //   subscription: '',
//   //   password: '',
//   // };
//   // onSubmitAssigment() {
//   //   this.submittedAssignment = true;
//   //   this.userAssignment.email = this.assingmentForm.value.email;
//   //   this.userAssignment.subscription = this.assingmentForm.value.subscription;
//   //   this.userAssignment.password = this.assingmentForm.value.password;
//   //   console.log(
//   //     'this.assingmentForm.value.subscription: ' +
//   //       this.assingmentForm.value.subscription
//   //   );
//   //   console.log(this.assingmentForm);
//   // }
// }
