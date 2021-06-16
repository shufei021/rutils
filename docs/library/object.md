# 对象相关

## API



| 名称                                 | 描述            |
| ------------------------------------ | :-------------- |
| <a href="#r-clone">clone</a>         | 对象浅拷贝      |
| <a href="#r-deepclone">deepClone</a> | 对象深拷贝      |
| <a href="#r-findkey">findKey</a>     | 查询某个值的key |
| <a href="#r-merge">merge</a>         | 合并两个对象    |

### R.clone

> 浅拷贝，针对引用类型值，只是拷贝了引用地址，并未对值做单独开辟空间存放，因此只适用于基本类型数据；

```bash
R.clone(value)
```

**参数：**

​	1.`value` {array | object} 源数据；

**返回值：**

​	`object|array`

​	浅拷贝后的数据

 **例子：**

```javascript
let a1 = {
  id: 111,
  users: ["张三", "李四", "王五"]
}

let res1 = clone(a1);
res1.users.push("小六");
console.log(res1.users);
// => ["张三", "李四", "王五", "小六"]

console.log(a1.users);
// => ["张三", "李四", "王五", "小六"]

console.log(a1.users === res1.users);
// => true

```



### R.deepClone

> 深拷贝，针对引用类型的值，单独开辟了内存空间来存放，因此新数据和老数据不会相互依赖、干扰；

```bash
R.deepClone(value)
```

**参数：**

​	1.`value` {object | array} 克隆的源数据

**返回值：**

​	`array|array`

​	深拷贝后的数据

 **例子：**

```javascript
//场景1：
let a = [1, 2, 3, 4, 5, 1, 2, 3]
unique(a)
// => [1,2,3,4,5]


//场景2：
let a1 = [
    { id: 1, name: '张三', age: 20 },
    { id: 2, name: '李四', age: 21 },
    { id: 3, name: '小红', age: 23 },
    { id: 2, name: '李四', age: 21 }
]
unique(a1)
// => 
// [
//     {id: 1, name: "张三", age: 20}
//     {id: 2, name: "李四", age: 21}
//     {id: 3, name: "小二", age: 23}
//     {id: 4, name: "小明", age: 24}
//     {id: 5, name: "小红", age: 25}
// ]
```



### R.findKey

> 通过 `value` 在对象中查找 `key`；

```bash
R.findKey(value)
```

**参数：**

​	1.`value1` {object | array} 源数据

​	2.`value2` {object | array | string | boolean | number | function } 源数据

**返回值：**

​	`string`

​	对象中的Key

 **例子：**

```javascript
let users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)
 
// The `_.matches` iteratee shorthand.
findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
findKey(users, ['active', false]);
// => 'fred'
 
// The `_.property` iteratee shorthand.
findKey(users, 'active');
// => 'barney'
```





### R.merge

> 合并两个对象

```bash
R.clone(value1, value2)
```

**参数：**

​	1.`value1` {object} 数据源1；

​	1.`value2` {object} 数据源2；

**返回值：**

​	`object`

​	合并后的新对象

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

