import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'hospital';
  deviceXs!: boolean;
  mediaSub!: Subscription;
  constructor(private mediaObs: MediaObserver) {}
  ngOnInit(): void {
    this.mediaSub = this.mediaObs.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === 'xs' ? true : false;
    });
  }
  ngOnDestroy(): void {}
}
