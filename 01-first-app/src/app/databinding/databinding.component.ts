import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation: string = 'This is sting interpolation !';
  numberInterpolation: number = 7;
  result: string = '';

  onTest() {
    return true;
  }

  setResult(e) {
    // console.log(e.target.value);
    this.result = e.target.value;
    return e.target.value;
  }

  onClicked(value: string) {
    alert(value);
  }
}
