import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    return of('Hello User!').pipe(delay(3000));
  }
}