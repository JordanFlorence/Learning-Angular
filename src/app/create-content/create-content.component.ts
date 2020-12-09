import {Component, EventEmitter, Output, OnInit, Inject} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<string>();
  newContent: any;
  constructor(private contentService: ContentService, public dialog: MatDialog) {
    this.newContent = {
      title: '',
      imageUrl: ''
    };
  }

  ngOnInit(): void {
  }

  openInsertContentDialog(): void {
    const contentDialogRef = this.dialog.open(InsertContentDialog, {
      width: '400px'
    });
    contentDialogRef.afterClosed().subscribe(newContentFromDialog => {
      this.newContent = newContentFromDialog;
      if (this.newContent) {
        this.insertContent();
      }
    });

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

@Component({
  selector: 'app-create-content-dialog',
  templateUrl: 'create-content-dialog.component.html',
})
export class InsertContentDialog {
  newContent: any;
  constructor(public dialogRef: MatDialogRef<InsertContentDialog>) {
    this.newContent = {
      title: '',
      imageUrl: ''
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
