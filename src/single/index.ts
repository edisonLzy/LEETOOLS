// single
export default function single<T>(constructor:new (...arr:any[])=>T){
    let instance:T;
    return function(...params:any[]){
        if(!(instance instanceof constructor)){
             instance =new constructor(params)
        }
        return instance;
    }
}
class A {
  name:string;
  constructor(name:string){
     this.name = name;
  }
  show(){
      console.log(this.name)
  }
}
class Dialog{
    static instance:Dialog;
    static getInstance(content:string){
         if(!Dialog.instance){
            Dialog.instance = new Dialog(content)
         }
         Dialog.instance.create(content)
    }
    content:string;
    constructor(content:string){
       this.create(content)
    }
    create(content){
        const div = document.createElement('div');
        div.setAttribute('class','dialog')
        div.innerText = content;
        document.body.appendChild(div);
    }
}
const dia = Dialog.getInstance('leezhiyu')
const dia1 = Dialog.getInstance('huangxingling')