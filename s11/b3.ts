class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    showInfor(){
        console.log(this);
    }
}
class Students extends Person{
    id:number;
    constructor(id:number,name:string){
        super(name)
        this.id=id;
        this.name=name;
    }
}
let student1=new Students(1,'le anh quan');
student1.showInfor();