import { ResourceLoader } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AgmCoreModule } from "@agm/core";
// import {} from "googlemaps";
import { ViewChild } from "@angular/core";
import { GMapModule } from "primeng/gmap";
@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  constructor() {}
  ngOnInit(): void {}
}
