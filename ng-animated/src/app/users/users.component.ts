import {Component, HostBinding, OnInit} from '@angular/core';
import {routeSlideTrigger, routeStateTrigger} from "../shared/route-animations";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    routeStateTrigger({startOpacity: 0, duration: '1500ms'}),
    routeSlideTrigger
  ]
})
export class UsersComponent implements OnInit {

  @HostBinding('@routeState') routerAnimation = true;
  // @HostBinding('@routeSlideState') routerSlideAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
