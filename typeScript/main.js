"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(message) {
    console.log(message);
}
var constVariable = 123;
var messageHello = 'Hello world';
log(messageHello);
//enum declare constants
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var Type;
(function (Type) {
    Type["Red"] = "#f00";
    Type["Blue"] = "#00f";
    Type["Green"] = "#0f0";
})(Type || (Type = {}));
//type associate
var message;
message = 'abc';
var splitString = message.split('');
var alternativeWaySplitString = message.split('');
//arrow function
var doLog = function (message) {
    console.log(message);
};
var drawPoint = function (point) {
    //..
};
drawPoint({
    x: 1,
    y: 2
});
//Classes & importing code from external ts files
var point_1 = require("./point");
point_1.PointClass.getDistance();
var pointInstance = new point_1.PointClass(1, 2);
pointInstance.draw();
// let x = pointInstance.getX();
var x = pointInstance.x;
// pointInstance.setX(10);
pointInstance.x = 10;
pointInstance.draw();
//exercise
var likeComponent_1 = require("./likeComponent");
var component = new likeComponent_1.LikeComponent(10, true);
component.onClick();
console.log("Like Component " + component.likeCount + ", is Selected " + component.isSelected);
/*
* tsc  --target ES2016 main.ts
* tsc  --target ES5 main.ts
*/ 
