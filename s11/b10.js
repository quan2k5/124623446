"use strict";
class ShapeVersion2 {
    calculatePerimeter(a, b) {
        if (b) {
            return 2 * (a + b);
        }
        return 2 * Math.PI * a;
    }
}
class RectangleVersion2 extends ShapeVersion2 {
    constructor(a, b) {
        super();
        this.width = a;
        this.height = b;
    }
    get Width() {
        return this.width;
    }
    get Height() {
        return this.height;
    }
}
class CircleVersion2 extends ShapeVersion2 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    get Radius() {
        return this.radius;
    }
}
let rectangle2 = new RectangleVersion2(7, 4);
let circle2 = new CircleVersion2(8);
console.log(rectangle2.calculatePerimeter(rectangle2.Width, rectangle2.Height));
console.log(circle2.calculatePerimeter(circle2.Radius));
