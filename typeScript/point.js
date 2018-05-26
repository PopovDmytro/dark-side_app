"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PointClass = /** @class */ (function () {
    // private x: number;
    // private y: number;
    function PointClass(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    PointClass.prototype.draw = function () {
        console.log(this._x + this._y);
    };
    PointClass.getDistance = function () {
        console.log('* - *');
    };
    Object.defineProperty(PointClass.prototype, "x", {
        // getX() {
        get: function () {
            return this._x;
        },
        // setX(value) {
        set: function (value) {
            if (value < 0) {
                throw new Error('value cant be less than 0');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return PointClass;
}());
exports.PointClass = PointClass;
