// nextTick 异步处理
// mutationObserve
const root = document.getElementById('root');
const btn = document.getElementById('btn');

let count = '0';
const textNode = document.createTextNode(count);

const listeners = (mutationsList)=>{
    console.log( textNode.data)
}
const observeOptions = {
    characterData: true
}
const Mo = new MutationObserver(listeners);
Mo.observe(textNode,observeOptions)
btn.addEventListener('click',function(){
    count += 1
    textNode.data = count;
    console.log( textNode.data)

})