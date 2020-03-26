import * as fs from 'fs';
import * as path from 'path';
const cache:{age:string,name:string}= {
    age:'1',
    name:'1'
}
fs.readFile(path.resolve(__dirname,'age.txt'),'utf-8',function(err,data){
    cache.age = data;
    e.emit()
})
fs.readFile(path.resolve(__dirname,'name.txt'),'utf-8',function(err,data){
    cache.name = data;
    e.emit()
})
function print(){
    console.log('cache: ', cache);
}
class Event{
    cache:any[] = [];
    on(fn){
     this.cache.push(fn)
    }
    emit(){
        this.cache.forEach(fn=>fn())
    }
}
const e = new Event();
e.on(function(){
    console.log('读取到了数据')
})
e.on(function(){
   if(cache.age!=='1' && cache.name !=='1'){
       console.log(cache)
      console.log('读取完毕')
   }
})