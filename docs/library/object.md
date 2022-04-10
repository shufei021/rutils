# 对象相关

<p><img src="/rutils/lm.jpg" alt="图片" width="100%"></p>

## API

| 名称                                 | 描述             |
| ------------------------------------ | :--------------- |
| <a href="#clone">clone</a>           | 对象浅拷贝       |
| <a href="#deepclone">deepClone</a>   | 对象深拷贝       |
| <a href="#findkey">findKey</a>       | 查询某个值的 key |
| <a href="#merge">merge</a>           | 合并两个对象     |
| <a href="#convertkey">convertKey</a> | 转换 key         |
| <a href="#objectrebuild">objectRebuild</a> | 对象重组         |

### clone

> 浅拷贝，针对引用类型值，只是拷贝了引用地址，并未对值做单独开辟空间存放，因此只适用于基本类型数据；

```javascript
rutils.clone(value)
```

**参数：**

​ 1.`value` {array | object} 源数据；

**返回值：**

​ `object|array`

​ 浅拷贝后的数据

**例子：**

```javascript
let a1 = {
    id: 111,
    users: ['张三', '李四', '王五']
}

let res1 = rutils.clone(a1)
res1.users.push('小六')
console.log(res1.users)
// => ["张三", "李四", "王五", "小六"]

console.log(a1.users)
// => ["张三", "李四", "王五", "小六"]

console.log(a1.users === res1.users)
// => true
```

### deepClone

> 深拷贝，针对引用类型的值，单独开辟了内存空间来存放，因此新数据和老数据不会相互依赖、干扰；

```javascript
rutils.deepClone(value)
```

**参数：**

​ 1.`value` {object | array} 克隆的源数据

**返回值：**

​ `array|array`

​ 深拷贝后的数据

**例子：**

```javascript
//场景1：
let a = [1, 2, 3, 4, 5, 1, 2, 3]
rutils.unique(a)
// => [1,2,3,4,5]

//场景2：
let a1 = [
    { id: 1, name: '张三', age: 20 },
    { id: 2, name: '李四', age: 21 },
    { id: 3, name: '小红', age: 23 },
    { id: 2, name: '李四', age: 21 }
]
rutils.unique(a1)
// =>
// [
//     {id: 1, name: "张三", age: 20}
//     {id: 2, name: "李四", age: 21}
//     {id: 3, name: "小二", age: 23}
//     {id: 4, name: "小明", age: 24}
//     {id: 5, name: "小红", age: 25}
// ]
```

### findKey

> 通过 `value` 在对象中查找 `key`；

```javascript
rutils.findKey(value)
```

**参数：**

​ 1.`value1` {object | array} 源数据

​ 2.`value2` {object | array | string | boolean | number | function } 源数据

**返回值：**

​ `string`

​ 对象中的 Key

**例子：**

```javascript
let users = {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
}

rutils.findKey(users, function(o) {
    return o.age < 40
})
// => 'barney' (iteration order is not guaranteed)

// The `_.matches` iteratee shorthand.
rutils.findKey(users, { age: 1, active: true })
// => 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
rutils.findKey(users, ['active', false])
// => 'fred'

// The `_.property` iteratee shorthand.
rutils.findKey(users, 'active')
// => 'barney'
```

### merge

> 合并对象

```javascript
rutils.merge(value1, value2, value2)
```

**参数：**

1. `value1` {object} 数据源 1；
2. `value2` {object} 数据源 2；
3. `valueN` {object} 数据源 n；

**返回值：**

​ `object`

​ 合并后的新对象

**例子：**

```javascript
var a = {
  name: "张三",
  age: 30
}

let b = {
  home: '四川省成都市'
}

merge(a, b)
// =>
{
  name: "张三",
  age: 30,
  home: "四川成都"
}

```

### convertKey

> 转换 key

```javascript
merge.convertKey(value1, value2, value3)
```

**参数：**

1. `value1` {object | array} 数据源
2. `value2` {object} key 隐射关系
3. `value3` {boolean} 是否为深度替换， 如果为 true，则第二层、....、第 n 层 的相同 key 会被替换成映射 key

**返回值：**

​ `object | array`

​ 转换后的新对象、或者数组

**例子：**

```javascript
var a = {
    name: '张三',
    age: 30
}

// 把原始的 name 换成 userNmae， 把原始的age 换成 ageNum
convertKey(a, { name: 'userName', age: 'ageNum' }, true)
// => { userName: "张三", ageNum: 30 }
```

### objectRebuild

> 对象重组，常用于后端接口参数的过滤

```javascript
/**
 * @description 对象组装
 * @param {Object} o 对象
 * @param {Object | Array} filter 
 * @returns 重组后的对象
 */
```

**示例**

```javascript
// 需求处理的对象
const obj = {a: 1, b: 2}

// 后端需要的 需要转换的key的映射，即 把 obj 中的 键 a 替换成 键 A1
const keysObj = {
    'a':'A1',
}
objectRebuild(obj,keysObj) // {A1: 1}

objectRebuild(obj,['a','b1']) // {a: 1, b1: undefined}
```