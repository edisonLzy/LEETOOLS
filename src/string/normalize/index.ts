type NormalizeType = 'lower'|'upper';
export const normalize = (param: string, format:NormalizeType = 'lower') =>format === 'lower' ? param.toLowerCase() : param.toUpperCase();