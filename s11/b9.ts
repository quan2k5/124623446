class Shape{
    calculateArea(width: number, height: number):number;
    calculateArea(radius: number):number;
    calculateArea(a: number, b?:any):number{
        if(b){
            return a * b;
        }
        return Math.PI*a*a;
    }
}
class Rectangle extends Shape{
    private width: number;
    private height: number;
    constructor(a: number,b: number) {
        super();
        this.width = a;
        this.height =b;
    }
    get Width(): number{
        return this.width;
    }
    get Height(): number{
        return this.height;
    }
}
class Circle extends Shape{
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    get Radius(): number{
        return this.radius;
    }
}
let rectangle1 = new Rectangle(7, 4);
let circle1 = new Circle(8);
console.log( rectangle1.calculateArea(rectangle1.Width, rectangle1.Height));
console.log(circle1.calculateArea(circle1.Radius));