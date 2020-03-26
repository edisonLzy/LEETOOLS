### 节流函数
 - 指定指定一定时间内 只触发一次处理函数
## 测试代码
``` 
const handle = function(e){
    console.log('-----',e)
}
let oBtn = document.getElementById('oBtn')
oBtn.addEventListener('click',throttle(handle,1000))
```