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

### getType

> 获取值类型

**语法：**

```js
rutils.getType(value)
```

**示例：**

```javascript
rutils.getType(null)
// => 'null'

rutils.getType(true)
// => 'boolean'

rutils.getType(1)
// => 'number'

rutils.getType([1, 2, 3])
// => 'array'

rutils.getType({ a: 1 })
// => 'object'

rutils.getType(new Set())
// => 'set'

rutils.getType(new Map())
// => 'map'

rutils.getType(function() {})
// => 'function'
```

### isEmpty

**语法：**

```js
rutils.isEmpty(value)
```

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

> 判断两个值是否相同

**语法：**

```js
rutils.isEquals(value1, value2)
```

**示例：**

```javascript
rutils.isEquals(1, '1')
// => false

rutils.isEquals({ userName: 'zhangsan' }, { userName: 'lisi' })
// => false
let a1 = { user: 'zhangsan', info: { age: 22, ad: { name: '十里店' } } }
let b1 = { user: 'zhangsan', info: { age: 22, ad: { name: '十里店' } } }
rutils.isEquals(a1, b1)
// => true

let a = { user: 'zhangsan', info: { age: 22, ad: { name: '十里店', time: new Date('2022/1/1') } } }
let b = { user: 'zhangsan', info: { age: 22, ad: { name: '十里店', time: new Date('2022/1/1') } } }
rutils.isEquals(a, b)
// => true

let arr1 = [{ user: 'zhangsan', info: { age: 22, ad: { name: '十里店', time: new Date('2022/1/1') } } }]
let arr2 = [{ user: 'zhangsan', info: { age: 22, ad: { name: '十里店', time: new Date('2022/1/1') } } }]
rutils.isEquals(arr1, arr2)
// => true
```

### isArray

> 判断数据是否为数组

**语法：**

```js
rutils.isArray(value)
```

**示例：**

```javascript
rutils.isArray(1)
// => false

rutils.isArray([1, 2, 3, 4])
// => true
```

### isDate

> 数据是否为日期对象`

**语法：**

```js
rutils.isDate(value)
```

**示例：**

```javascript
rutils.isDate(new Date())
// => true

rutils.isDate('yyyy-mm-dd')
// => false
```

### isBoolean

> 数据是否布尔

**语法：**

```js
rutils.isBoolean(value)
```

**示例：**

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

**语法：**

```js
rutils.isBoolean(value)
```

**示例：**

```javascript
rutils.isFunction(new Function())
// => true

const fun1 = function() {
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

rutils.isFunction(() => ({}))
// => true
```

### isNull

> 值是否为空值

**语法：**

```js
rutils.isNull(value)
```

**示例：**

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

**语法：**

```js
rutils.isNumber(value)
```

**示例：**

```javascript
rutils.isNumber(123)
// => true

rutils.isNumber('123')
// => false

rutils.isNumber(true)
// => false
```

### isObject

> 值是否为纯净的对象

**语法：**

```js
rutils.isObject(value)
```

**示例：**

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

**语法：**

```js
rutils.isRegExp(value)
```

**示例：**

```javascript
rutils.isRegExp(new RegExp('\\w+'))
// => true

rutils.isRegExp(/^[1][3,4,5,7,8][0-9]{9}$/)
// => true

rutils.isRegExp(111)
// => false
```

### isType

> 值是否为指定类型`

**语法：**

```js
rutils.isType(value, type)
```

**示例：**

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

**语法：**

```js
rutils.isString(value)
```

**示例：**

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

**语法：**

```js
rutils.isUndefined(value)
```

**示例：**

```javascript
rutils.isUndefined(undefined)
// => true

const obj = {}
rutils.isUndefined(obj.name)
// => true

rutils.isUndefined('undefined')
// => false
```
