class ShapeVersion2{
    calculatePerimeter(width: number, height: number):number;
    calculatePerimeter(radius: number):number;
    calculatePerimeter(a: number, b?:any):number{
        if(b){
            return 2 * (a + b);
        }
        return 2 * Math.PI * a;
    }
}
class RectangleVersion2 extends ShapeVersion2{
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
class CircleVersion2 extends ShapeVersion2{
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    get Radius(): number{
        return this.radius;
    }
}
let rectangle2 = new RectangleVersion2(7, 4);
let circle2 = new CircleVersion2(8);
console.log(rectangle2.calculatePerimeter(rectangle2.Width, rectangle2.Height));
console.log(circle2.calculatePerimeter(circle2.Radius));