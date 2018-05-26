import {Component} from "@angular/core";
import {TestService} from "./test.service";

@Component({
    selector: 'courses-component',
    template: `
        <h2>Courses</h2>
        <div *ngFor="let x of data; index as i; first as isFirst">{{x}} + {{i}} + {{isFirst}}</div>
    `,
    styleUrls: []
})
export class CoursesComponent {
    data: number[];
    constructor(testS: TestService) {
        this.data = testS.getData();
    }
}
