// import _Array from './array/index';
// import _String from './string/index'
// const target = Object.assign({},_Array,_String);

// interface OutPut extends Window{
//      L?:any
// }
// (function(window:OutPut){
//   const target = Object.assign({},Array)
//   window.L = target
// })(window)
// import _ from 'lodash';
// import * as _ from 'lodash';
// import react from 'react-dom';

// import Vue from 'vue';
// import debounce from './debounce/index';
// const handle = function(e){
//     console.log(e)
// }
// dom.addEventListener('input',debounce(handle,1000))

import EventPond from './emiter';
import debounce from './debounce';
import throttle from './throttle';
import ArrayTools from './array';
import './nextTick'
export default  {
    EventPond,
    debounce,
    throttle,
    ArrayTools,
}