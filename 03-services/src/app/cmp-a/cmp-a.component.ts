import { Component, OnInit } from '@angular/core';

import { LogService } from "../service/log.service";
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
  // providers: [LogService]
})
export class CmpAComponent implements OnInit {

  value: string = '';
  items: string[] = [];

  constructor(private logService: LogService, private dataService: DataService) { }

  onLog(value:string) {
    this.logService.writeToLog(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
     this.items = this.dataService.getData();
  }

  onSend(value: string) {
    this.dataService.pushData(value)
  }

  ngOnInit() {
    // this.dataService.pushedData.subscribe(
    //   data => this.value = data
    // );
  }

}
