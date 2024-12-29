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

type user = {name:string,id:string,address:string}
type admin ={role:string}
const John : user & admin={
    name:"John",
    id:"123",
    address:"NY",
    role:"admin",

}