class Employee{
    name:string;
    protected company:string;
    private phone:number;
    constructor(name:string,company:string,phone:number){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    showInfor(){
        console.log(this.name,this.company,this.phone);
    }
    protected ManagePhone():number{
        return this.phone;
    }
}
class Manager extends Employee{
    teamSize:number;
    constructor(a:string,b:string,c:number,teamSize:number){
        super(a,b,c)
        this.name=a;
        this.company=b;
        this.teamSize=teamSize
    }
    getPropertyFromParent(): number {
        return this.ManagePhone();
    }
    showInfor(): void {
        console.log(this.name);
        console.log(this.company);
        console.log(this.getPropertyFromParent());
        console.log(this.teamSize);
    }
}
let manager1=new Manager('quan','asdfgb',18,12);
manager1.showInfor();

