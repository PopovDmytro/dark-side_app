import { Component } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name" name="1" />
    <input type="text" [(ngModel)]="person.name" name="1" />
  `,
  styles: []
})
export class TwoWayBindingComponent {

  person = {
    name: 'Max',
    age: 27
  };

}
