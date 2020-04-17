const _context = require.context('./',true,/\.ts/);

function getFuncName(path:string){
     const arr =path.split('/');
     return arr[1]
}

const map = {}
 _context.keys().reduce((fns:any,cur:string)=>{
    if(cur.endsWith('./index.ts')){
      return;
    }
    const funcName = getFuncName(cur);
    const func = _context(cur)[funcName];
    fns[funcName] = func;
    return fns;
},map)
export const leeArray = map;
