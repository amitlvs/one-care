import { HeaderComponent } from './../header/header.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
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
