// new 的模拟实现
function Create(fn){
   const obj = Object.create(fn.prototype);
   //保存参数  
   const params = [...arguments].slice(1);
   const res = fn.apply(obj,params);
   return typeof res === 'object'?res:obj;
}

function A(name){
    this.name = name;
}
A.prototype.say = function(){
   console.log('hello' + this.name)
}
const _b = Create(A,'1')
console.log(_b instanceof A)
console.log(_b.name)
// const _a = new A('1'); 
// console.log(_a instanceof A)
