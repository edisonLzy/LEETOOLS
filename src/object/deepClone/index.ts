// JSON.parse(JSON.stringify(OBJ)) 
export default function clone(obj,deep=true){
   // 过滤特殊情况
   if(obj === null)return null;
   if(typeof obj!=='object') return obj;
   if(obj instanceof RegExp){
      return new RegExp(obj)
   }
   if(obj instanceof Date){
    return new Date(obj)
 }
   // 保证克隆的结果 还是 obj.constuctor的实例
   let newObj = new obj.constuctor;
   for(let key in obj){
       if(obj.hasOwnProperty(key)){
        newObj[key] = clone(obj); 
       }
   }
   return newObj;
}