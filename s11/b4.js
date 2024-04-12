"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    showSpeed() {
        console.log('toc do hien tai la:', this.speed);
    }
    set IncreaseSpeed(number) {
        this.speed = this.speed + number;
    }
    set ReduceSpeed(number) {
        if (this.speed <= 30) {
            console.log('Toc do xe dang qua cham');
        }
        else {
            this.speed = this.speed - number;
        }
    }
}
class Bicycle extends Vehicle {
    constructor(a, b, c, gear) {
        super(a, b, c);
        this.name = a;
        this.speed = b;
        this.id = c;
        this.gear = gear;
    }
}
let bicycle1 = new Bicycle('xe dua', 234, 49, 47);
bicycle1.IncreaseSpeed = 5;
bicycle1.showSpeed();
bicycle1.ReduceSpeed = 3;
bicycle1.showSpeed();
