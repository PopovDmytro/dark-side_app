import {Injectable} from "@angular/core";
import { Router, Routes } from '@angular/router'

import {User} from "./user";

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  signupUser(user: User) {

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
  }

  signinUser(user: User) {

    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }
}
