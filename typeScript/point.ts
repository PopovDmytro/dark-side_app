export class PointClass {
    // private x: number;
    // private y: number;

    constructor (private _x: number, private _y?:number) {

    }

    draw () {
        console.log(this._x + this._y);
    }

    static getDistance () {
        console.log('* - *');
    }

    // getX() {
    get x() {
        return this._x;
    }

    // setX(value) {
    set x(value) {
        if(value < 0) {
            throw new Error('value cant be less than 0');
        }
        this._x = value;
    }
}