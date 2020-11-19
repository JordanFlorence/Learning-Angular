import {Component, Input, OnInit} from '@angular/core';

import {Content} from '../helper-files/content-interface';
import {CONTENTLIST} from '../helper-files/ContentDB';
import {ContentService} from '../services/content.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  @Input() content: Content;
  contentList: Content[];
  title = '';



  constructor(private contentService: ContentService) {

  }
  ngOnInit(): void {
    // this.contentList = this.contentService.getContentList();
    this.contentService.getContentListObs().subscribe(cl => {
      this.contentList = cl;
    });
  }


  exists(): void {
    // this.title = 'test';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.contentList.length; i++){
      if (this.title === this.contentList[i].title){
        console.log('exists');
      }
    }
  }
}
