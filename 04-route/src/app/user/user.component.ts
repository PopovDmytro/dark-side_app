import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: string;

  constructor(private router : Router) {

  }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

}
