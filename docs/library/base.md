# 基础

## API

| 名称                                   | 描述                     |
| -------------------------------------- | ------------------------ |
| <a href="#isempty">isEmpty</a>         | 是否为空                 |
| <a href="#isequals">isEquals</a>       | 深度比较两者的值是否相等 |
| <a href="#isarray">isArray</a>         | 是否为数组               |
| <a href="#isdate">isDate</a>           | 是否为日期               |
| <a href="#isboolean">isBoolean</a>     | 是否为布尔               |
| <a href="#isfunction">isFunction</a>   | 是否为函数               |
| <a href="#isnull">isNull</a>           | 是否为 null              |
| <a href="#isnumber">isNumber</a>       | 是否为数字               |
| <a href="#isobject">isObject</a>       | 是否为对象               |
| <a href="#isregexp">isRegExp</a>       | 是否为正则               |
| <a href="#isstring">isString</a>       | 是否为字符串             |
| <a href="#istype">isType</a>           | 是否为指定类型           |
| <a href="#isundefined">isUndefined</a> | 是否为 undefined         |


### isEmpty

```js
rutils.isEmpty(value)
```

**参数：**

​ 1. `value` 需要检测的值；

**返回：**

​ `boolean`

​ true：表示为空 | false 不为空

**例子：**

```javascript
rutils.isEmpty(null)
// => true

rutils.isEmpty(true)
// => true

rutils.isEmpty(1)
// => true

rutils.isEmpty([1, 2, 3])
// => false

rutils.isEmpty({ a: 1 })
// => false

rutils.isEmpty([])
// => ture

rutils.isEmpty({})
// => ture
```

### isEquals

> 判断两个数据是否相同，值支持基本类型（string/number/boolean...）

```js
rutils.isEquals(value1, value2)
```

**参数：**

1. `value1 ` {any} 需要检测的值 1
2. `value2` {any} 需要检测的值 2

**返回：**

​ `boolean`

​ true:相同 | false:不同

**例子：**

```javascript
rutils.isEquals(1, '1')
// => false

rutils.isEquals({ userName: 'zhangsan' }, { userName: 'lisi' })
// => false
```

### isArray

> 判断数据是否为数组

```js
rutils.isArray(value)
```

**参数：**

​ 1. `value` {any} 需要检测的值

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isArray(1)
// => false

rutils.isArray([1, 2, 3, 4])
// => true
```

### isDate

> 数据是否为日期对象,注：日期对象生效`new Date()`

```js
rutils.isDate(value)
```

**参数：**

​ 1. `value` 需要检测的值

**返回：**

​ `boolean`

​ true：是 | false 否

**例子：**

```javascript
rutils.isDate(new Date())
// => true

rutils.isDate('yyyy-mm-dd')
// => false
```

### isBoolean

> 数据是否布尔

```js
rutils.isBoolean(value)
```

**参数：**

​ 1. `value` 需要检测的值

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isBoolean(new Boolean())
// => true

rutils.isBoolean(true)
// => true

rutils.isBoolean(false)
// => true

rutils.isBoolean(false)
// => true

rutils.isBoolean('test')
// => false

rutils.isBoolean(0)
// => false
```

### isFunction

> 值是否为函数

```js
rutils.isBoolean(value)
```

**参数：**

​ 1.`value` 需要检测的值

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isFunction(new Function())
// => true

const fun1 = function () {
    console.log(111)
}
rutils.isFunction(fun1)
// => true

const obj = {
    getData() {}
}
rutils.isFunction(obj.getData)
// => true

rutils.isFunction(111)
// => false
```

### isNull

> 值是否为空值

```js
rutils.isNull(value)
```

**参数：**

​ 1. `value` 需要检测的值

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isNull(null)
// => true

rutils.isNull(1)
// => false

rutils.isNull()
// => false
```

### isNumber

> 值是否为数字

```js
rutils.isNumber(value)
```

**参数：**

​ 1. `value` 需要检测的值

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isNumber(123)
// => true

rutils.isNumber('123')
// => false

rutils.isNumber(true)
// => false
```

### isObject

> 值是否为对象，注意：{}、new Object(), 内部实现为：`Object.prototype.toString.call(value) === '[object Object]'`

```js
rutils.isObject(value)
```

**参数：**

​ 1. `value` 需要检测的值

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isObject({})
// => true

function Person() {}
rutils.isObject(new Person())
// => true

rutils.isObject(new Date())
// => false
```

### isRegExp

> 值是否为正则表达式

```js
rutils.isRegExp(value)
```

**参数：**

​ 1. `value` 需要检测的值

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isRegExp(new RegExp('\\w+'))
// => true

rutils.isRegExp(/^[1][3,4,5,7,8][0-9]{9}$/)
// => true

rutils.isRegExp(111)
// => false
```

### isType

> 值是否为指定类型，底层调用的是 `Object.prototype.toString.call(value1)`

```js
rutils.isType(value1, value2)
```

**参数：**

​ 1. `value1` {any} 需要检测的值 1

​ 2. `value2` {String} 需要检测的值的类型，小驼峰, 如：（map、set、date、array....）等

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isType({}, 'object')
// => true

rutils.isType({}, 'Object')
// => false, 注意小写

rutils.isType([], 'array')
// => true

rutils.isType(new Set(), 'set')
// => true

rutils.isType(new Set(), 'Set')
// => false

rutils.isType(new Map(), 'map')
// => true

rutils.isType(new Date(), 'object')
// => false
```

### isString

> 值是否为字符串类型

```js
rutils.isString(value1)
```

**参数：**

​ 1.`value1` {any} 需要检测的值 1

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isString('hello word!')
// => true

rutils.isString('')
// => true

rutils.isString(null)
// => false

rutils.isString({})
// => false
```

### isUndefined

> 值是否为字符串类型

```js
rutils.isUndefined(value)
```

**参数：**

​ 1.`value` {any} 需要检测的值

**返回：**

​ `boolean`

​ true:是 | false:否

**例子：**

```javascript
rutils.isUndefined(undefined)
// => true

const obj = {}
rutils.isUndefined(obj.name)
// => true

rutils.isUndefined('undefined')
// => false
```
