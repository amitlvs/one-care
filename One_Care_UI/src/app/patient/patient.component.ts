import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  @Input() imageLoader = false;
  @Input() bool = false;
  @Input() adminName = '';
  update = true;
  patientForm!: FormGroup;
  user: any = ['Patient', 'Admin', 'Doctor'];
  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      name: ['', [Validators.min(4), Validators.required]],
      gender: [''],
      age: [''],
      cn: [''],
    });
  }

  ngOnInit(): void {}
  login() {
    this.adminName = 'login';
    this.imageLoader = false;
    this.bool = true;
    this.update = false;
  }
  signup() {
    this.adminName = 'signup';
    this.imageLoader = false;
    this.bool = true;
    this.update = false;
  }
}
