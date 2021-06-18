# 基础

## API



| 名称                                     | 描述                                   |
| ---------------------------------------- | -------------------------------------- |
| <a href="#r-gettype">getType</a>         | 获取值类型                             |
| <a href="#r-isempty">isEmpty</a>         | 是否为空值                             |
| <a href="#r-isequals">isEquals</a>       | 深度比较两者的值是否相等，值为基本类型 |
| <a href="#r-isarray">isArray</a>         | 是否为数组                             |
| <a href="#r-isdate">isDate</a>           | 是否为日期                             |
| <a href="#r-isboolean">isBoolean</a>     | 是否为布尔                             |
| <a href="#r-isfunction">isFunction</a>   | 是否为函数                             |
| <a href="#r-isnull">isNull</a>           | 是否为null                             |
| <a href="#r-isnumber">isNumber</a>       | 是否为数字                             |
| <a href="#r-isobject">isObject</a>       | 是否为对象                             |
| <a href="#r-isregexp">isRegExp</a>       | 是否为正则                             |
| <a href="#r-isstring">isString</a>       | 是否为字符串                           |
| <a href="#r-istype">isType</a>           | 是否为指定类型                         |
| <a href="#r-isundefined">isUndefined</a> | 是否为undefined                        |



### R.getType

> 获取值的类型，日常通过 `typeof` 、`instanceof` 无法精确获取值的原始类型。底层实现：`Object.prototype.toSring.call(value)` 就可以拿到值的最原始类型；

```bash
R.getType(value)
```

**参数：**

​	1. `value` 需要检测的值；

**返回：**

​	`string`

​	array、function、object、date、map、set、null、undefined等数据类型

 **例子：**

```javascript
getType(null);
// => 'null'
 
getType(true);
// => 'boolean'
 
getType(1);
// => 'number'
 
getType([1, 2, 3]);
// => 'array'
 
getType({ 'a': 1 });
// => 'object'

getType(new Set());
// => 'set'

getType(new Map());
// => 'map'

getType(function () {});
// => 'function'
```





### R.isEmpty

```bash
R.isEmpty(value)
```

**参数：**

​	1. `value` 需要检测的值；

**返回：**

​	`boolean`

​	true：表示为空 | false不为空

 **例子：**

```javascript
isEmpty(null);
// => true
 
isEmpty(true);
// => true
 
isEmpty(1);
// => true
 
isEmpty([1, 2, 3]);
// => false
 
isEmpty({ 'a': 1 });
// => false

isEmpty([]);
// => ture

isEmpty({});
// => ture
```



### R.isEquals

> 判断两个数据是否相同，值支持基本类型（string/number/boolean...）

```bash
R.isEquals(value1, value2)
```

**参数：**

1. `value1 ` {any} 需要检测的值1
2. `value2` {any} 需要检测的值2

**返回：**

​	`boolean`

​	true:相同  |  false:不同

 **例子：**

```javascript
isEquals(1, '1');
// => false
 
isEquals({userName: 'zhangsan'}, {userName: "lisi"});
// => false
```



### R.isArray

> 判断数据是否为数组

```bash
R.isArray(value)
```

**参数：**

​	1. `value` {any} 需要检测的值

**返回：**

​	`boolean`

​	true:是  |  false:否

 **例子：**

```javascript
isArray(1);
// => false
 
isArray([1, 2, 3, 4]);
// => true
```





### R.isDate

> 数据是否为日期对象,注：日期对象生效`new Date()`

```bash
R.isDate(value)
```

**参数：**

​	1. `value` 需要检测的值

**返回：**

​	`boolean`

​	true：是  |  false否

 **例子：**

```javascript
isDate(new Date());
// => true
 
isDate('yyyy-mm-dd');
// => false
```



### R.isBoolean

> 数据是否布尔

```bash
R.isBoolean(value)
```

**参数：**

​	1. `value` 需要检测的值

**返回：**

​	`boolean`

​	true:是  |  false:否

 **例子：**

```javascript
isBoolean(new Boolean());
// => true

isBoolean(true);
// => true

isBoolean(false);
// => true

isBoolean(false);
// => true
 
isBoolean('test');
// => false

isBoolean(0);
// => false
```



### R.isFunction

> 值是否为函数

```bash
R.isBoolean(value)
```

**参数：**

​	1.`value` 需要检测的值

**返回：**

​	`boolean`

​	true:是  |  false:否

 **例子：**

```javascript
isFunction(new Function());
// => true

const fun1 = function () {
  console.log(111);
}
isFunction(fun1);
// => true

const obj = {
	getData() {}
}
isFunction(obj.getData)
// => true

isFunction(111);
// => false
```





### R.isNull

> 值是否为空值

```bash
R.isNull(value)
```

**参数：**

​	1. `value` 需要检测的值

**返回：**

​	`boolean`

​	true:是  |  false:否

 **例子：**

```javascript
isNull(null);
// => true

isNull(1);
// => false

isNull();
// => false
```





### R.isNumber

> 值是否为数字

```bash
R.isNumber(value)
```

**参数：**

​	1. `value` 需要检测的值

**返回：**

​	`boolean`

​	true:是 | false:否

 **例子：**

```javascript
isNumber(123);
// => true

isNumber('123');
// => false

isNumber(true);
// => false
```





### R.isObject

> 值是否为对象，注意：{}、new Object(), 内部实现为：`Object.prototype.toString.call(value) === '[object Object]'`

```bash
R.isObject(value)
```

**参数：**

​	1. `value` 需要检测的值

**返回：**

​	`boolean`

​	true:是 | false:否

 **例子：**

```javascript
isObject({});
// => true

function Person() {}
isObject(new Person())
// => true

isObject(new Date())
// => false
```





### R.isRegExp

> 值是否为正则表达式

```bash
R.isRegExp(value)
```

**参数：**

​	1. `value` 需要检测的值

**返回：**

​	`boolean`

​	true:是 | false:否

 **例子：**

```javascript
isRegExp(new RegExp("\\w+"));
// => true

isRegExp(/^[1][3,4,5,7,8][0-9]{9}$/)
// => true

isRegExp(111)
// => false
```





### R.isType

> 值是否为指定类型，底层调用的是 `Object.prototype.toString.call(value1)`

```bash
R.isType(value1, value2)
```

**参数：**

​	1. `value1` {any} 需要检测的值1

​	2. `value2` {String} 需要检测的值的类型，小驼峰, 如：（map、set、date、array....）等

**返回：**

​	`boolean`

​	true:是 | false:否

 **例子：**

```javascript
isType({}, 'object')
// => true

isType({}, 'Object')
// => false, 注意小写

isType([], 'array')
// => true

isType(new Set(), 'set')
// => true

isType(new Set(), 'Set')
// => false

isType(new Map(), 'map')
// => true

isType(new Date(), 'object')
// => false
```





### R.isString

> 值是否为字符串类型

```bash
R.isString(value1)
```

**参数：**

​	1.`value1` {any} 需要检测的值1

**返回：**

​	`boolean`

​	true:是 | false:否

 **例子：**

```javascript
isString('hello word!')
// => true

isString('')
// => true

isString(null)
// => false

isString({})
// => false
```



### R.isUndefined

> 值是否为字符串类型

```bash
R.isUndefined(value)
```

**参数：**

​	1.`value` {any} 需要检测的值

**返回：**

​	`boolean`

​	true:是  |  false:否

 **例子：**

```javascript
isUndefined(undefined)
// => true

const obj = {}
isUndefined(obj.name)
// => true

isUndefined('undefined')
// => false
```

