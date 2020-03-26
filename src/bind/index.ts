interface Function extends FunctionConstructor {
    myBind(...params:any[]):any,
}
(Function.prototype as Function).myBind= function(target){
    const self = this;
    const args = Array.from(arguments);
    const cache = function(){};
    const fn = function(){
        const innerArgs = Array.from(arguments);
        return self.apply(this instanceof cache?this:(target||window),[...args,...innerArgs])
    }
    // 保证 constructor 指向 原来的构造函数
    cache.prototype = self.prototype;
    fn.prototype = new cache();
    return fn;
}
// bind 基本 使用 bind(contxt,params)
// 改变 this的指向 返回一个新的函数 等待在某一个时刻触发
// params 会在作为 新的函数参数且与新的函数可以叠加(且放到新函数的参数之前)
// 当new执行返回的函数的时候，构造函数(constructor)依旧是原来的函数 
// 单对象编程
function show(a,b,c,d,e){
    console.log(a,b,c,d,e)
    console.log(this.x);
}
const a = {
    x:'a'
}
const b = {
    x:'b',
}
const printb = show.myBind(a,1,2,3);
printb(4,5,6)



