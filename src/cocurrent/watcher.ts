import * as fs from 'fs';
import * as path from 'path';
const cache: { age: string, name: string } = {
    age: '1',
    name: '1'
}
fs.readFile(path.resolve(__dirname, 'age.txt'), 'utf-8', function (err, data) {
    cache.age = data;
})
fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf-8', function (err, data) {
    cache.name = data;
})
function print() {
    console.log('cache: ', cache);
}
class Watcher {
    // 被观察者
    caches:Observe[];
    constructor() {

    }
    add(ob:Observe){
        this.caches.push(ob)
    }
    
}
class Observe {
    // 观察者
    constructor() {

    }
    print(data){
        console.log(data)
    }
}
const rname = new Observe();
const rage = new Observe();
const watcher = new Watcher();
watcher.add(rname)
watcher.add(rage)