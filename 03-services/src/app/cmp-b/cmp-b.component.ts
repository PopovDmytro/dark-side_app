import { Component, OnInit } from '@angular/core';

import {LogService} from "../service/log.service";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
  // providers: [LogService]
})
export class CmpBComponent implements OnInit {

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
    this.dataService.pushedData.subscribe(
      data => this.value = data
    );
  }

}
