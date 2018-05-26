import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TestService {

    arr: number[];

    constructor (private http: HttpClient) {
        this.arr = [1, 2, 4, 5, 6, 7];
    }

    getData() {
        return this.arr;
    }

}