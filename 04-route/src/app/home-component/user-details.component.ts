import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs/Rx'

@Component({
  selector: 'app-user-details',
  template: `
    <h3>user detail</h3>
    <button (click)="onNavigate()">go home</button>
    <hr>
    {{id}}
  `,
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  id: string;

  constructor(private router : Router, private activatedRoute: ActivatedRoute) {
    // this.id = activatedRoute.snapshot.params['idKey'];
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['idKey']
    );
  }


  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analytics': 100}});
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
