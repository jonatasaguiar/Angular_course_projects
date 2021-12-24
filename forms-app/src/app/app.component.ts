import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// ------------- REACTIVE  section
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('male'),
    });
  }
  onSubmit() {
    console.log(this.signupForm);
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
