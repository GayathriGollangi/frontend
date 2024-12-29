let arrStr : string [] =["1","2","3"];
type userObj = {
    name:string;
    age:number;
}
let user : userObj={
    name:"John",
    age:30,
}
//array of obj
let database : Array<userObj>=[
    {name:"John",age:30},
    {name:"Jane",age:25},
    
]
//union and intersection
let numStr : number | string | boolean = 123;
numStr = false
numStr = "123"