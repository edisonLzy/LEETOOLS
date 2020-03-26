type Immediate = true|false;
import * as Utils from '../utils/index'
// 防抖 函数实现
export default function(fn: any, delay: number, immediate:Immediate= true,context:any){
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