class Vehicle{
    protected name:string;
    protected speed:number;
    protected id:number;
    constructor(name:string,speed:number,id:number){
        this.id=id;
        this.name=name;
        this.speed=speed;
    }
    showSpeed(){
        console.log('toc do hien tai la:',this.speed);    
    }
    set IncreaseSpeed(number:number){
        this.speed=this.speed+number;
    }
    set ReduceSpeed(number:number){
        if(this.speed<=30){
            console.log('Toc do xe dang qua cham');
        }else{
            this.speed=this.speed-number;
        }
    }
}
class Bicycle extends Vehicle{
    private gear:number;
    constructor(a:string,b:number,c:number,gear:number){
        super(a,b,c);
        this.name=a;
        this.speed=b;
        this.id=c;
        this.gear=gear;
    }
}
let bicycle1=new Bicycle('xe dua',234,49,47);
bicycle1.IncreaseSpeed=5;
bicycle1.showSpeed();
bicycle1.ReduceSpeed=3;
bicycle1.showSpeed();