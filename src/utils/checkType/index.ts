import {currying} from '../index';
interface checkedFn{
     isBoolean?:(value:any)=>boolean;
     isString?:(value:any)=>boolean;
     isNumber?:(value:any)=>boolean;
     isSymbol?:(value:any)=>boolean;
     isFunction?:(value:any)=>boolean;
     isUndefined?:(value:any)=>boolean;
     isArray?:(value:any)=>boolean;
     isNull?:(value:any)=>boolean;
     isObject?:(value:any)=>boolean;
}
const types = ['Boolean','String','Number','Symbol','Function','Null','Undefined','Array','Object'];
function checkType(type,value?){
     const cache:any =  Object.prototype.toString;
     return cache.call(value) === `[object ${type}]`
}
const cache:checkedFn = {};
types.forEach(type=>{
    cache[`is${type}`] = currying(checkType)(type);
})
export default cache;