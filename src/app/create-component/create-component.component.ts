import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<string>();
  newContent: any;
  constructor(private contentService: ContentService) {
    this.newContent = {
      title: '',
      imageUrl: ''
    };
  }

  ngOnInit(): void {
  }

  insertContent(): void{
    let contentReceived: Content;
    console.log('Trying to insert into the content list', this.newContent);
    this.contentService.insertContent(this.newContent).subscribe(serverContent => {
      console.log('Inserted into the content list.', serverContent);
      contentReceived = serverContent;
      this.newContentEvent.emit(contentReceived);
    });
  }
  updateContent(): void{
    this.newContent.id = +this.newContent.id;
    console.log('Updating the content list', this.newContent);
    this.contentService.updateContent(this.newContent).subscribe(_ => {
      console.log('Content List updated.');
      this.updateContentEvent.emit('Content that was updated, id: ' + this.newContent.id);
    });
  }
}
