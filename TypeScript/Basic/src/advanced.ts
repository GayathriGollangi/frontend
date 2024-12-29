type rgb = [number,number,number,number]
let color : rgb =[123,256,256,102];

let names : [string,string] = ["John","kevin"];


//generic functions

function getInfo<Type>(value:Type){
    return value;
}
getInfo<number>(1234);
getInfo<string>("hello");