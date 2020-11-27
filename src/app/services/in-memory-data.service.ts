import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {CONTENTLIST} from '../helper-files/ContentDB';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(): object{
    const content: Content[] = CONTENTLIST;
    return {content};
  }
  genId(content: Content[]): number{
    return content.length > 0 ? Math.max(...content.map(c => c.id)) + 1 : 2000;
  }
}
