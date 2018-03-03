import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-user',
  template: `
    <!--<input type="text" [(ngModel)]="name" >-->
    <input type="text" (input)="onUserInput($event)" [value]="name" >
    <p>Hello here !</p>
    <p>name is : {{name}}</p>
    
    <img [src]="this.images[this.imgN]" alt="">
    <div class="">--- {{imgN}} ---</div>
    <div class="nav-container">
      <div (click)="changeImg('-')" class="nav-btn prev">prev</div>
      <div (click)="changeImg('+')" class="nav-btn next">next</div>
    </div>
    <hr>
    <app-user-detail></app-user-detail>
  `,
  styles: [
      `
      img {
        max-width: 500px;
        width: 100%;
      }
      .nav-container {
        display: flex;
        justify-content: space-between;
        max-width: 500px;
      }
      .nav-btn {
          border: 1px solid #2a6496;
          width: 50px;
          display: inline-block;
          text-align: center;
          cursor: pointer;
      }
      .nav-btn:hover {
        background-color:#2a6496;
        color:#fff;
      }`
  ]
})
export class UserComponent implements OnInit {

  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  images: string[] = [
    'https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=',
    'https://www.w3schools.com/w3css/img_fjords.jpg',
    'http://www.wallpaperbackgrounds.org/wp-content/uploads/Images.jpg',
    'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png',
    'https://static.pexels.com/photos/67843/splashing-splash-aqua-water-67843.jpeg'
  ];
  imgN = 0;

  ngOnInit(){
  }

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }

  changeImg(navTo:string) {
    if( navTo === '+' ) {
      if(this.imgN < this.images.length - 1) {
        this.imgN++;
      } else {
        this.imgN = 0
      }
    } else if( navTo === '-' ) {
      if(this.imgN > 0 ) {
        this.imgN--;
      } else {
        this.imgN = this.images.length - 1;
      }
    }

  }

}


