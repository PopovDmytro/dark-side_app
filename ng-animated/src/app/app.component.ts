import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courseGoals = [
    {title: "Master Ng Styling", isActiveGoal: true},
    {title: "Understand Ng Animations", isActiveGoal: false},
    {title: "Master Ng Animations", isActiveGoal: false},
  ]
}
