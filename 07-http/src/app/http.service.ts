import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { map } from 'rxjs/operators';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://angular2-course-48312.firebaseio.com/title.json');
  }

  sentData(user: any) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post('https://angular2-course-48312.firebaseio.com/data.json', body, {
      headers: headers
    }).catch(this.handleError);
  }

  getOwnDate () {
    return this.http.get('https://angular2-course-48312.firebaseio.com/data.json');
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
