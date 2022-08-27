import { ConnectionService } from '../connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect!: Array<any>;
  checked = false;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(fb: FormBuilder, private connectionService: ConnectionService) {
    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      contactFormSubjects: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
      contactFormCopy: ['', Validators.requiredTrue],
    });
  }

  ngOnInit() {
    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
    ];
  }

  get name() {
    return this.contactForm.get('contactFormName');
  }
  get email() {
    return this.contactForm.get('contactFormEmail');
  }
  get subjects() {
    return this.contactForm.get('contactFormSubjects');
  }
  get message() {
    return this.contactForm.get('contactFormMessage');
  }
  get copy() {
    return this.contactForm.get('contactFormCopy');
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert('Your message has been sent.');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      (error: any) => {
        console.log('Error', error);
      }
    );
  }
}
