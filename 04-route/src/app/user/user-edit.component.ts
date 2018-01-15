import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Rx";
import {ActivatedRoute, Router} from "@angular/router";
import {ComponentCanDeactivate} from "./user-edit.guard";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-user-edit',
  template: `
    <h3>
      user-edit works!
    </h3>
    <button (click)="done = true">Done</button>
    <button class="" (click)="onNavigate()" >Go home</button>
  `,
  styles: []
})
export class UserEditComponent implements OnInit, ComponentCanDeactivate {

  done: boolean = false;
  private subscription: Subscription;
  id: string;

  constructor(private router : Router, private activatedRoute: ActivatedRoute) {
    // this.id = activatedRoute.snapshot.params['idKey'];
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['idKey']
    );
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(!this.done) {
      return confirm('do you want leave ?');
    }
    return true;
  }
}
