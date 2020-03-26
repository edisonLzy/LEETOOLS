const context = require.context('./',false,/\.ts/);
import mutipleConditionFilterArray from './mutipleConditionFilterArray';

// export default context.keys().reduce((fns:any,cur:string)=>{
//     if(cur.endsWith('index.ts')){
//       return;
//     }
//     fns = {}
//     const _modules = context(cur).default as Function;
//     Reflect.set(fns,_modules.name,_modules)
//     return fns;
// },{})
export default  {
    mutipleConditionFilterArray
}
