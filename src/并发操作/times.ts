import * as fs from 'fs';
import * as path from 'path';
const cache:{age:string,name:string}= {
    age:'1',
    name:'1'
}
const after = (times:number,fn,cxt?)=>()=>--times===0&&fn.apply(cxt||this||null);
const pr = after(2,print)
fs.readFile(path.resolve(__dirname,'age.txt'),'utf-8',function(err,data){
    cache.age = data;
    pr()
})
fs.readFile(path.resolve(__dirname,'name.txt'),'utf-8',function(err,data){
    cache.name = data;
    pr()
})
function print(){
    console.log('cache: ', cache);
}