// 根据 path 获取深层次的值
export function getDeepValue(source:any,path:string[],length = path.length ){
  if(length===0)return source;
  return path.reduce((result,key)=>{
     return result[key];
  },source)
}