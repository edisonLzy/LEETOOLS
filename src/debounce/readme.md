### 防抖函数
 - 
## 测试代码
``` 
const handle = function(e){
    console.log(arguments)
    console.log(e,this.value)
}
dom.addEventListener('input',debounce(handle,1000))
```