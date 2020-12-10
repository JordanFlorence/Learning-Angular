import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {CONTENTLIST} from '../helper-files/ContentDB';
import {Observable, of} from 'rxjs';
import {MessageService} from '../message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }
  getContent(id: number): Observable<Content> {
    return this.http.get<Content>('api/content/' + id);
  }

  getContentList(): Observable<Content[]> {
    return this.http.get<Content[]>('api/content');
  }

  insertContent(content: Content): Observable<Content>{
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }
  updateContent(content: Content): Observable<any>{
    return this.http.put<Content>('api/content', content, this.httpOptions);
  }

}
