"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    showInfor() {
        console.log(this.name, this.company, this.phone);
    }
    ManagePhone() {
        return this.phone;
    }
}
class Manager extends Employee {
    constructor(a, b, c, teamSize) {
        super(a, b, c);
        this.name = a;
        this.company = b;
        this.teamSize = teamSize;
    }
    getPropertyFromParent() {
        return this.ManagePhone();
    }
    showInfor() {
        console.log(this.name);
        console.log(this.company);
        console.log(this.getPropertyFromParent());
        console.log(this.teamSize);
    }
}
let manager1 = new Manager('quan', 'asdfgb', 18, 12);
manager1.showInfor();
