function log(message) {
    console.log(message);
}

const constVariable = 123;
let messageHello = 'Hello world';

log(messageHello);

//enum declare constants
enum Color { Red = 0, Blue = 1, Green = 2 }
enum Type { Red = '#f00', Blue = '#00f', Green = '#0f0' }

//type associate
let message;
message = 'abc';
let splitString = (<string>message).split('');
let alternativeWaySplitString = (message as string).split('');

//arrow function
let doLog = (message) => {
    console.log(message);
};

//interface
interface Point {
    x: number;
    y: number;
}

let drawPoint = (point: Point) => {
    //..
};

drawPoint({
    x: 1,
    y: 2
});

//Classes & importing code from external ts files
import { PointClass } from './point';

PointClass.getDistance();

let pointInstance = new PointClass(1,2);
pointInstance.draw();
// let x = pointInstance.getX();
let x = pointInstance.x;
// pointInstance.setX(10);
pointInstance.x = 10;
pointInstance.draw();

//exercise
import { LikeComponent } from './likeComponent';
const component = new LikeComponent(10, true);
component.onClick();
console.log(`Like Component ${component.likeCount}, is Selected ${component.isSelected}`);

/*
* tsc  --target ES2016 main.ts
* tsc  --target ES5 main.ts
*/