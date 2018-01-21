import { Component, OnInit } from '@angular/core';
import { HttpResponse } from "@angular/common/http";

import { HttpService } from "../http.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit {
  items: any[] = [];
  asyncSting = this.httpService.getData();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: HttpResponse<any>) => { console.log(data) },
        (error) => { console.log('httpComponent' ,error) },
        () => {}
      );
  }

  onSubmit(userName: string, email: string ) {
    this.httpService.sentData({username: userName, email: email})
      .subscribe(data => console.log(data));
  }

  onGetData() {
    this.httpService.getOwnDate()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            myArray.push(data[key]);
          }

          this.items = myArray;
        }
      );
  }

}
