import {normalize} from '@/string/normalize'
export const getValueType = (param) => {
	const res = (Object.prototype.toString as any).call(param).split(' ')[1].split(']')[0];
	return normalize(res)
}
export const getArgsName = (func:any) => {
	//匹配函数括号里的参数
	const args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
	//分解参数成数组
	return args.split(",").map(function (arg) {
		//去空格和内联注释
		return arg.replace(/\/\*.*\*\//, "").trim();
	}).filter(function (args) {
		//确保没有undefineds
		return args;
	});
}
// 函数在执行times次之后，才执行
export const after = (times:number,fn,cxt?)=>()=>--times===0&&fn.apply(cxt||this||null);
// 判断一个值 是否存在与一个集合中
export function makeMapByString(str:string,expectsLowerCase?:boolean):(val:string)=>boolean{
	const map = Object.create(null);
	const list = str.split(',');
	for (let i = 0; i < list.length; i++) {
	    map[list[i]] = true
	}
	return expectsLowerCase
	  ? val => !!map[val.toLowerCase()]
	  : val => !!map[val]
}
/*** --- 函数  --- */
// 柯里化 函数实现
export function currying(fn,allArgs = [],length?:number){
    const paramsLen = length||fn.length;
    return function next(...params){
       allArgs =allArgs.concat(params);
       if(allArgs.length < paramsLen){
         return currying(fn,allArgs)
       }
       return fn.apply(this,allArgs)
    }
}

// 防抖 函数实现
export type Immediate = true|false;
export function debounce(fn: any, delay: number, immediate:Immediate= true,context:any){
    // 不是函数 抛出错误
    if(typeof fn !== 'function'){
     throw new Error(`fn is not function`)
    }
    let timer = null;
    // 第一次触发事件是否立即执行
    let _immediate = immediate;
    return function (...args) {
        if (_immediate) {
            fn.apply(this, args)
            _immediate = false;
            return;
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

// 节流 函数实现
export function throttle(fn:any,wait:number){
    let lastTime = 0;
    return function(...args){
    let nowTime = new Date().getTime();
    if(nowTime - lastTime > wait){
        fn.apply(this,args);
        lastTime = nowTime;
    }
  }   
}

