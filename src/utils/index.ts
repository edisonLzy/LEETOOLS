
type NormalizeType = 'lower'|'upper';
export const normalize = (param: string, format:NormalizeType = 'lower') => {
	return format === 'lower' ? param.toLowerCase() : param.toUpperCase();
}
export const getValueType = (param) => {
	const res = (Object.prototype.toString as any).call(param).split(' ')[1].split(']')[0];
	return normalize(res)
}
export const getArgsName = (func:any) => {
	//匹配函数括号里的参数
	const args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
	//分解参数成数组
	return args.split(",").map(function (arg) {
		//去空格和内联注释
		return arg.replace(/\/\*.*\*\//, "").trim();
	}).filter(function (args) {
		//确保没有undefineds
		return args;
	});
}
// 函数在执行times次之后，才执行
export const after = (times:number,fn,cxt?)=>()=>--times===0&&fn.apply(cxt||this||null);