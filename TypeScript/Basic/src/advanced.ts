type rgb = [number,number,number,number]
let color : rgb =[123,256,256,102];

let names : [string,string] = ["John","kevin"];


//generic functions

function getInfo<Type>(value:Type){
    return value;
}
getInfo<number>(1234);
getInfo<string>("hello");

interface user2 {
    name: string;
    age: number;

}
interface Admin extends user2 {
    role: string;
    phone1:number;
    phone2?:number;
    //it is not mandatory it is optional

}
let obj : Admin ={
    name: "John",
    age: 25,
    role: "admin",
    phone1: 1234567890,

}