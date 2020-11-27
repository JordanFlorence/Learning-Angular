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
      this.contentList = [];
      this.getContentList();
    }


  exists(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.contentList.length; i++){
      if (this.title === this.contentList[i].title){
        console.log('exists');
      }
    }
  }

  addToList(content: Content): void {
    this.contentList.push(content);
    this.contentList = Object.assign([], this.contentList);
  }

  updateList(message: string): void{
    console.log(message);
    this.getContentList();
  }

  getContentList(): void{
    this.contentService.getContentList().subscribe(cl => {
      this.contentList = cl;
      console.log(cl.length);
    });
  }
}
