/**
 * instanceof 一直沿着原型链向上递归查找
 * @param left 变量
 * @param right 构造函数
 */
export default function i (left:any,right:(new (...param)=>any)):boolean{
    if(!(left&&right))return;
   do{
    if(left.__proto__ === right.prototype)return true;
   }while(left = left.__proto__)
   return false;
}
