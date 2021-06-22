# 存储相关（sessionStorage）

## API

| 名称                             | 描述         |
| -------------------------------- | :----------- |
| <a href="#get">get</a>           | 查           |
| <a href="#del">set</a>           | 增           |
| <a href="#del">del</a>           | 删           |
| <a href="#clearall">clearAll</a> | 清空所有内容 |
| <a href="#each">each</a>         | 遍历所有数据 |

### get

> 获取储存的值，可批量获取

```javascript
rutils.session.get(value)
```

**参数：**

​ 1. `value` {string|array} 存储的 key，多条则传递数组

**返回值：**

​ `any`

​ 单条则返回设置对应的值`value`，多条返回一个`object`

**例子：**

```javascript
// 1.单条获取
rutils.session.get('userName')
// => 张三

// 2.多条获取
rutils.session.get(['userName', 'age', 'sex'])
// => {userName: "张三", age: 20, sex: "男"}
```

### set

> 设置存储内容，支持多条写入

```javascript
rutils.session.set(value1, value2)
```

**参数：**

1. `value1` {string|object} 存储的 key，如果传入`object`则为多条，请忽略`value2`参数
2. `value2` {any} 存储的 value，如果第一个参数为对象，则该参数不生效

**返回值：**

​ `void`

**例子：**

```javascript
// 1.单条写入
rutils.session.set('userName', 'zhangsan')

// 2.多条写入
rutils.session.set({
    userName: 'zhangsan',
    age: 30,
    job: 'JAVA开发'
})
```

### del

> 删除一条或多条数据

```javascript
rutils.session.del(value)
```

**参数：**

​ 1. `value` {string|array} 删除数据的 key，多条则为数组

**返回值：**

​ 无

**例子：**

```javascript
// 1.单条删除
rutils.session.del('userName')

// 2.多条删除
rutils.session.del(['userName', 'age', 'job'])
```

### clearAll

> 清空所有数据

```javascript
rutils.session.clearAll(value)
```

**参数：**

​ 无

**返回值：**

​ `void`

**例子：**

```javascript
// 1.设置数据
rutils.session.set('userName', '张三')

// 2.获取
rutils.session.get('userName')
// => "张三"

// 3.清空所有
rutils.session.clearAll()

// 获取
rutils.session.get('userName')
// => null
```

### each

> 遍历所有存储的值

```javascript
rutils.session.each(value)
```

**参数：**

1. `value` {function} 回调函数，形参有`key` 、`value`两个参数

**返回值：**

​ `void`

**例子：**

```javascript
// 循环
rutils.session.each((key, value) => {
    // do sth...
})
```
