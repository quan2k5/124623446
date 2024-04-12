class Products{
    name:string;
    price:number;
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
    getDescription(){
        console.log(this);
    }
}
class Electronics extends Products{
    private brand:string;
    constructor(name:string,price:number,brand:string){
        super(name,price);
        this.name=name;
        this.price=price;
        this.brand=brand;
    }
}
let electronic1=new Electronics('quat',1245,'dfgb');
electronic1.getDescription();