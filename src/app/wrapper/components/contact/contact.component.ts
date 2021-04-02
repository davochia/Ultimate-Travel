import { Feedback } from './../../../shared/model/feedback';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 @ViewChild('fform')
  feedbackFormDirective: any;

  feedbackForm!: FormGroup;
  feedback!: Feedback;
  feedbackErrMess!: string;




  formErrors: any =  {
    'fullname': '',
    'tel': '',
    'email': '',
    'message': ''
  };

  validationMessages: any = {
    'fullname': {
      'required':'First Name is required.',
      'minlength':'First Name must be at least 2 characters long.',
      'maxlength':'FirstName cannot be more than 25 characters long.'
    },

    'tel': {
      'required':'Tel. number is required.',
      'pattern':'Invalid character.'
    },

    'email': {
      'required':'Email is required.',
      'email':'Email not in valid format.'
    },

    'message': {
      'required':'Message is required.',
      'minlength':'Message must be at least 4 characters long.',
      'maxlength':'Message cannot be more than 250 characters long.'
    },
  };


  constructor(private fb: FormBuilder ) {
    this.createForm();
   }

  ngOnInit(): void {
 
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      tel: [ , [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(250)]]
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

      this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }

    const form = this.feedbackForm;

    for (const field in this.formErrors) {

     if (this.formErrors.hasOwnProperty(field)) {
        
      // clear previous error message (if any)
        this.formErrors[field] = '';
        
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {

          const messages = this.validationMessages[field];

          for (const key in control.errors) {

            if (control.errors.hasOwnProperty(key)) {

              this.formErrors[field] += messages[key] + ' ';

            }
          }
        }

      }
     }
  }


  onSubmit(){
		this.feedback = this.feedbackForm.value;
		console.log(this.feedback);
		this.feedbackForm.reset({
				fullname: '',
				tel: '',
				email: '',
				message: ''
		});
  }
}
