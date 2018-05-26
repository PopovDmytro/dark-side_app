import {Component} from "@angular/core";

@Component({
    selector: 'test-component',
    template: `
        <h1>Test component in test module</h1>
        <test2-component></test2-component>
    `
})
export class TestComponent {

}
