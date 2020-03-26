import * as Utils from '../utils/index'
Function.prototype.myApply = function(target,args){
     console.log(target,args)
     // 判断this 是否是函数
     if(typeof this !== 'function'){
        throw new Error(`${this.name} is not a function`)
     }
     // 判断 arg是否是数组
     if(Utils.getValueType(args)!=='array'){
         const name = Utils.getArgsName(this);
         throw new Error(`${name[0]} is not a array`)
     }
     const context = target||window;
     const fn = this;
     context.fn = fn;
     const res = context.fn(...args);
     Reflect.deleteProperty(context,'fn')
     return res;
}
function show(name,aa){
  console.log(this.name)
}
const a = {
   name:'leezhiyu'
}
show.myApply(a,[123123])