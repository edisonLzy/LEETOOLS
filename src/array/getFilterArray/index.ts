/**
 * @desc 数组多条件去重
 * @param arr 
 * @param condtions 
 */
export const getFilterArray = (arr, ...condtions)=>{
    // pop first condition
    const curCondition = condtions.shift();
    // get first condition key
    let key = Object.keys(curCondition)[0];
    // get first condition value
    let val = curCondition[key];
    // the first filter 
    let res = arr.reduce((acc,cur)=>{
        if(cur[key]===val){
          acc.push(cur)
        }
        return acc;
    },[])
    // the export is conditions's length is zero
    const {length} = condtions;
    if(length===0){
      return res;
    }
    // recursion with this res and remains condition
    return getFilterArray(res,...condtions)
}
