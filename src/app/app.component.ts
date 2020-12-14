import { Component } from '@angular/core';
import {Content} from './helper-files/content-interface';
import {ContentService} from './services/content.service';
import {LogUpdateService} from './services/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-angular';
  constructor(private contentService: ContentService, private logService: LogUpdateService) {
  }
}
