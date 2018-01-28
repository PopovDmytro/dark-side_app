//Types

let varString : string;
let varNumber : number;
let varBool : boolean;
let varAny : any;
let arrStrings : Array<string>;
function aVoid ():void {
  let arr: Array<number> = [1,2,2,3,5,56];
}

//Class

class Car {

  engineName: string;
  gears: number;
  private speed: number;

  constructor(speed: number) {
    this.speed = speed || 0;
  }

  accelerate():void {
    this.speed++;
  }

  throttle():void {
    this.speed--;
  }

  getSpeed():void {
    console.log(this.speed);
  }

  static numberOfWheels(): number {
    return 4;
  }

}

let car = new Car(5);

car.accelerate();
car.getSpeed();

console.log(Car.numberOfWheels());

//Interface

interface User {
  username: string;
  password: string;
  confirmPassword?: string; //optional property => does not have to be implemented
}

let user: User;

user = {
  username: 'name',
  password: 'pass'
};

interface CanDrive {
  accelerate(speed: number): void;
}

let carInt: CanDrive = {
  accelerate: function (speed: number) {
    //...
  }
};

//Generics

let numberArr: Array<number>;
numberArr = [1,2,3];

//Modules

export class ExportedClass {
  // this class is exported
}
