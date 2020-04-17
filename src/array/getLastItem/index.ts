/**
 * @desc 获取数组最后一项
 * @param arr 获取数组的最后一项
 * pop() 返回并删除数组的最后一项，如果是空数组，则返回undefined。 会改变源数组 
 * slice 返回一个新的数组，且数组的值是源数组的最后一项，不会改变新的数组
 * length 
 */
export const getLastItem = (arr:any[])=> arr.length===0?arr:arr.slice(-1)[0];