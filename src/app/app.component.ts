import { Component } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MEAN-course';

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('indigo-pink-theme');
  }
}
