import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  @Input() imageLoader = false;
  @Input() bool = false;
  @Input() adminName = '';
  update = true;
  constructor() {}

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
