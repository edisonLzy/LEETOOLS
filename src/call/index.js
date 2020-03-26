// 思路：将当前的函数 作为传递的上下文的属性 执行。
Function.prototype.myCall = function(context,...params){
   // 判断this 是否是函数
   if(typeof this !== 'function'){
      throw new Error(`${this.name} is not a function!`)
   }
   // 存储参数
   const cache = [...params];
   // 当前调用call的函数
   const fn = this;
   // 保存当前传递的上下文 null 则指向window
   const _context = context||window;
   // 将fn挂在context上面
   _context.fn = fn;
   // 保存fn执行的返回结果
   const _res = _context.fn(...params);
   Reflect.deleteProperty(_context,'fn')
   return  _res;
}
function _call(p){
   console.log(this,p)
   return 1;
}
const _callA = {
    a:'123123'
}
console.log(_call.myCall(_callA,123))
