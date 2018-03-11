import {Injectable, EventEmitter} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {HttpClient, HttpResponse} from "@angular/common/http";
import 'rxjs/add/operator/map';
//
import { LogService } from "./log.service";

@Injectable()
export class StarWarsService {

  private characters = [
    {name: 'Luke Skywalker', side: 'light'},
    {name: 'Darth Vader', side: ''}
  ];
  private logService: LogService;
  characterChanged = new Subject<void>();
  http: HttpClient;

  loaderUpdated:EventEmitter<any> = new EventEmitter();
  loader:boolean;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  showLoader() {
    this.loader = true;
    this.loaderUpdated.emit(this.loader);
  }

  hideLoader() {
    this.loader = false;
    this.loaderUpdated.emit(this.loader);
  }

  fetchCharacters() {
    this.showLoader();
    this.http.get('https://swapi.co/api/people', {})
      // .map((response: HttpResponse<any>) => {
      .map((response: any) => {
        const extractChars = response.results;
        return extractChars.map((char) => { return {name: char.name, side: ''}; });
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.characters = data;
          this.characterChanged.next();
        },
        () => {},
        () => {
          this.hideLoader();
        }
      );
    // this.http.post('https://swapi.co/api/people', {}, {});
  }

  getCharacters(chosenList) {
    if(chosenList === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    this.showLoader();
    const pos = this.characters.findIndex((char) => {
      return char.name == charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
    this.characterChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
    this.hideLoader();
  }

  addCharacter(obj:{name:string, side:string}) {
    const pos = this.characters.findIndex((char) => {
      return char.name === obj.name;
    });

    if(pos !== -1){
      return;
    }
    this.characters.push(obj);
  }

}
