## DOM
 #  0级事件
    语法： dom.onclick = cb;
    机制:  给dom对象的onclick属性添加一个方法,有效绑定的事件只有一个
 #  2级事件
    语法：dom.addEventListner('eventname',cb)
    机制: 基于事件池机制,每增加一个绑定的方法，就往事件池中添加这个方法。当事件触发的时候会依次触发事件池中的方法('''发布订阅模式的机制''')
    其他:dom2中可以给一些特殊的事件类型绑定方法，这些事件类型dom0不支持
    例如
        DOMContentLoaded(dom结构加载完成触发)
        transitionend(css3 transition触发完成之后触发)
    事件池机制：
        1.添加方法/删除方法：基于add/remove-EventListner/attach-dettachEvent(ie 6-8)
        2.当事件行为触发，会把事件池中的方法按照增加的顺序依次执行.（ie 6-8 顺序不固定)
 # $(document).ready() 与 window.onload的区别
    1.window.onload 属于dom0级事件绑定，且在所有资源加载完成之后才会触发(js,css,html)
    2.$(document).ready() 属于dom2级事件绑定 ，基于DOMContentLoaded在dom结构加载完成之后触发
## jquery中的发布订阅（没有做事件去重处理）
   1.创建一个事件池$.callbacks()
   2.add 
     remove 
     fire 参数会 传给事件池中的每个方法
## 数组塌陷问题
