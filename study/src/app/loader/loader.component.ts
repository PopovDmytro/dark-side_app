import { Component, OnInit } from '@angular/core';
//
import {StarWarsService} from "../star-wars.service";

@Component({
  selector: 'app-loader',
  template: `<div *ngIf="loaderShow" class="preloader"></div>`,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loaderShow:boolean;
  private swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
    this.loaderShow = this.swService.loader;

    this.swService.loaderUpdated.subscribe((loader) => {
      this.loaderShow = loader;
    });
  }
}
