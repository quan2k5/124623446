"use strict";
class Account {
    constructor(a, b) {
        this.accountNumber = a;
        this.balance = b;
    }
    set deposit(number) {
        this.accountNumber += number;
    }
    set withDraw(number) {
        if (this.accountNumber < number) {
            console.log('So tien trong tai khoan cua ban ko du');
        }
        else {
            this.accountNumber -= number;
        }
    }
}
class SavingAccount extends Account {
    constructor(a, b, c, d) {
        super(a, b);
        this.accountNumber = a;
        this.balance = b;
        this.interestRate = c;
        this.OverdraftLimit = d;
    }
    caculateInterest() {
        console.log('so tien lai cua ban', this.accountNumber / 100 * this.interestRate);
        this.accountNumber += this.accountNumber / 100 * this.interestRate;
    }
    set withDraw(number) {
        if (this.accountNumber < number) {
            if (number <= this.accountNumber + this.accountNumber / 100 * this.OverdraftLimit) {
                if (confirm('Tai khoan ko du tien .ban muon su dung han muc ko?')) {
                    this.accountNumber -= number;
                }
            }
            else {
                console.log('han muc cho phep ko du');
            }
        }
        else {
            this.accountNumber -= number;
        }
    }
    showInfor() {
        console.log(this.accountNumber);
    }
}
let newAccount = new SavingAccount(700000, 1, 10, 20);
newAccount.caculateInterest();
newAccount.showInfor();
newAccount.deposit = 800000;
newAccount.caculateInterest();
newAccount.showInfor();
newAccount.withDraw = 3000000;
newAccount.showInfor();
