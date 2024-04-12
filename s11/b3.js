"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    showInfor() {
        console.log(this);
    }
}
class Students extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
        this.name = name;
    }
}
let student1 = new Students(1, 'le anh quan');
student1.showInfor();
