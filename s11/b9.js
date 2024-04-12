"use strict";
class Shape {
    calculateArea(a, b) {
        if (b) {
            return a * b;
        }
        return Math.PI * a * a;
    }
}
class Rectangle extends Shape {
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
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    get Radius() {
        return this.radius;
    }
}
let rectangle1 = new Rectangle(7, 4);
let circle1 = new Circle(8);
console.log(rectangle1.calculateArea(rectangle1.Width, rectangle1.Height));
console.log(circle1.calculateArea(circle1.Radius));
