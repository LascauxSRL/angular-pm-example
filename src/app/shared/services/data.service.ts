import { Injectable } from '@angular/core';
import { AppElement } from '../element.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  elements: AppElement[] = [{
    id: 1,
    name: 'The first element'
  }, {
    id: 2,
    name: 'The second element'
  }];

  constructor() { }
}
