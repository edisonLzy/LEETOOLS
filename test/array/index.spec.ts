import {expect} from 'chai';
import {getLastItem} from '../../src/array/getLastItem'
import {getFilterArray} from '../../src/array/getFilterArray'
describe('测试数组方法',()=>{
    it(`获取数组的最后一项 --- getLastItem`,()=>{
      const arr = [1,2,3,4,5,6]
      const res = getLastItem(arr);
      expect(res).to.be.equal(6)
    })
    it("多条件筛选数组 --- getFilterArray",()=>{
       const arr = [{
         name:'lee',
         age:18,
         sex:'male'
       },{
         name:'huang',
         age:20,
         sex:'female'
       },{
         name:'lee',
         age:18,
         sex:'female'
       }
       ]
       const res = getFilterArray(arr,{age:18},{sex:'male'});
       // 比较对象使用deep,递归遍历里面的键值对进行比较
       expect(res).to.be.deep.equal([{
         name:'lee',
         age:18,
         sex:'male'
       }
       ])

    })
})

