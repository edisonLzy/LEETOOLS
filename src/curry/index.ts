
export default function currying(fn,allArgs = [],length?:number){
    const paramsLen = length||fn.length;
    return function next(...params){
       allArgs =allArgs.concat(params);
       if(allArgs.length < paramsLen){
         return currying(fn,allArgs)
       }
       return fn.apply(this,allArgs)
    }
 }
// function add (a,b?,c?,d?,e?){
//    return a+b+c+d+e;
// }
// const add1 = currying(add)(1);
// const add2 = add1(1,2,3)
// const add3 = add2(1)
// console.log(add3)
