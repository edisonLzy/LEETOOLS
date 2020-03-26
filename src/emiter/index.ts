export default (function () {
    const CachePond = Symbol('cachePond');
    const OncePond = Symbol('OncePond');
    // const Status = Symbol('Status');
    // 基于 发布订阅模式的事件池
    class EventPond {
        constructor() {
            //创建一个事件池 用来存储后期需要执行的方法
            //Map数据结构可以 避免 数组塌陷问题
            this[CachePond] = new Map();
            this[OncePond] = new Map();
        }
        //增加(避免重复添加)
        add(func) {
            if (typeof func !== 'function') {
                return;
            }
            if (this[CachePond].has(func)) {
                return;
            }
            this[CachePond].set(func, func);
        }
        //移除
        remove(func) {
            if (!this[CachePond].has(func)) {
                return;
            }
            this[CachePond].delete(func);
        }
        //执行
        fire(...args) {
            if (this[CachePond].size === 0) return;
            this[CachePond].forEach((_fn) => {
                if (this[OncePond].has(_fn)) {
                    if (this[OncePond].get(_fn)) {
                        return;
                    } else {
                        this[OncePond].set(_fn, true);
                    }
                }
                // 当参数大于3个时候 call的性能 略优于apply
                _fn.call(this, ...args)
            })
        }
        //清空
        clear() {
            this[CachePond].clear()
        }
        //once
        once(func) {
            if (this[OncePond].has(func)) return;
            this[OncePond].set(func, false)
            this.add(func)
        }
    }
    return function () {
        return new EventPond()
    }
})()

// 测试代码
// const pond = EventPond();
// const a = function(){
//     console.log('a')
// }
// const b = function(){
//     console.log('b')
// }
// const c = function(){
//     console.log('c')
//     pond.remove(b)
// }
// const d = function(){
//     console.log('d')
// }
// pond.once(a)
// pond.add(b)
// pond.add(c)
// pond.once(d)
// pond.fire()
// pond.fire()

