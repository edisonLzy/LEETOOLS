
export default function throttle(fn:any,wait:number,context:any){
    let lastTime = 0;
    return function(...args){
    let nowTime = new Date().getTime();
    if(nowTime - lastTime > wait){
        fn.apply(context,args);
        lastTime = nowTime;
    }
  }   
}