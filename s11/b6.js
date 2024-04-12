"use strict";
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(this);
    }
}
class Electronics extends Products {
    constructor(name, price, brand) {
        super(name, price);
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
}
let electronic1 = new Electronics('quat', 1245, 'dfgb');
electronic1.getDescription();
