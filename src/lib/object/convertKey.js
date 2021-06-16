/**
 * 转换Key
 * @param {Array|Object} obj 数据源
 * @param {Object} keyMap 映射关系
 * @param {Boolean} isDeep 是否为深度
 * @return {Array|Object}
 */
const convertKey = (obj, keyMap, isDeep) => {
	if (!['[object Array]', '[object Object]'].includes(Object.prototype.toString.call(obj))) {
		throw new TypeError('The first argument should be either an object or an array！');
	}
	if (Object.prototype.toString.call(keyMap) !== '[object Object]') {
		throw new TypeError('The parameter keyMap should be an object!');
	}
	let res = obj instanceof Array ? [] : {};
	if (obj instanceof Object) {
		for (let key in obj) {
			let newKey = Object.keys(keyMap).includes(key) ? keyMap[key] : key;
			res[newKey] = obj[key];
	
			//是否为深度转换
			if (isDeep && obj[key] instanceof Object && Object.keys(obj[key]).length) {
				res[newKey] = convertKey(obj[key], keyMap, isDeep);
			}
		}
	}
	return res;
}

export default convertKey