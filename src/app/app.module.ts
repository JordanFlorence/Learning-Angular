import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TagFilterPipe } from './tag-filter.pipe';
import {FormsModule} from '@angular/forms';
import { HoverStyleDirective } from './hover-style.directive';
import { MessagesComponent } from './messages/messages.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {CreateContentComponent, InsertContentDialog} from './create-content/create-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDivider, MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    TagFilterPipe,
    HoverStyleDirective,
    MessagesComponent,
    CreateContentComponent,
    InsertContentDialog,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    MatRippleModule,
    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent },
      { path: 'content', component: ContentListComponent },
      { path: '**', component: NotFoundComponent }
    ])
    ],
  providers: [],
  entryComponents: [InsertContentDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
