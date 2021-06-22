# 存储相关（localStorage）

## API

| 名称                                           | 描述                 |
| ---------------------------------------------- | :------------------- |
| <a href="#get">get</a>                         | 查                   |
| <a href="#del">set</a>                         | 增                   |
| <a href="#del">del</a>                         | 删                   |
| <a href="#setexpired">setExpired</a>           | 设置带过期时间的数据 |
| <a href="#getexpired">getExpired</a>           | 获取带过期时间的数据 |
| <a href="#clearallexpired">clearAllExpired</a> | 清除所有过期时间     |
| <a href="#clearall">clearAll</a>               | 清空所有内容         |
| <a href="#each">each</a>                       | 遍历所有数据         |

### get

> 获取储存的值，可批量获取

```javascript
rutils.local.get(value)
```

**参数：**

​ 1. `value` {string | array} 存储的 key，多条则传递数组

**返回值：**

​ `any`

​ 单条则返回设置对应的值`value`，多条返回一个`object`

**例子：**

```javascript
// 写入数据
rutils.local.set({ userName: '张三', age: 20, sex: '男' })

// 1.单条获取
rutils.local.get('userName')
// => 张三

// 2.多条获取
rutils.local.get(['userName', 'age', 'sex'])
// => {userName: "张三", age: 20, sex: "男"}
```

### set

> 设置存储内容，支持多条写入

```javascript
rutils.local.set(value1, value2)
```

**参数：**

1. `value1` {string | object} 存储的 key，如果传入`object`则为多条，请忽略`value2`参数
2. `value2` {any} 存储的 value，如果第一个参数为对象，则该参数不生效 setExpired

**返回值：**

​ `void`

**例子：**

```javascript
// 1.单条写入
rutils.local.set('userName', 'zhangsan')

// 2.多条写入
rutils.local.set({
    userName: 'zhangsan',
    age: 30,
    job: 'JAVA开发'
})
```

### del

> 删除一条或多条数据

```javascript
rutils.local.del(value)
```

**参数：**

​ 1. `value` {string | array} 删除数据的 key，多条则为数组

**返回值：**

​ `void`

**例子：**

```javascript
// 1.单条删除
rutils.local.del('userName')

// 2.多条删除
rutils.local.del(['userName', 'age', 'job'])
```

### setExpired

> 写入一条带过期时间的数据

<font color="#ff5722" style="font-weight: bold;">注意： 如果使用了此方法写入数据，那么获取也得使用 `getExpire()` 来获取数据</font>

```javascript
rutils.local.setExpired(value1, value2, value3)
```

**参数：**

1. `value1` {string} 字段 key;
2. `value2` {any} 字段值 value
3. `value3` {number} 过期时间，单位: (毫秒)；

**返回值：**

​ `void`

**例子：**

```javascript
// 1.写入一条带过期时间的数据
rutils.local.setExpired('userName', 'zhangsan', 3000) // 3秒后过期

// 2.获取数据
rutils.local.getExpired('userName')
// => "zhangsan"

// 3.过期后获取数据
setTimeout(() => {
    const userName = rutils.local.getExpired('userName')
    // => false
}, 4000)
```

### getExpired

> 获取一条在有效过期时间内的数据

```javascript
rutils.local.getExpired(value)
```

**参数：**

​ 1. `value` {string} 字段 key

**返回值：**

​ `any`

​ 如果值过期了则返回 `false`， 否则返回对应的值`value`

**例子：**

```javascript
// 1.写入一条带过期时间的数据
rutils.local.setExpired('userName', 'zhangsan', 3000) // 3秒后过期

// 1秒后获取值
setTimeout(() => {
    const userName = rutils.local.getExpired('userName')
    // => zhangsan
}, 1000)

// 4秒后获取值
setTimeout(() => {
    const userName = rutils.local.getExpired('userName')
    // => false
}, 4000)
```

### clearAllExpired

> 清除所有设置过期时间的值

```javascript
rutils.local.clearAllExpired()
```

**参数：**

​ 无

**返回值：**

​ `any`

**例子：**

```javascript
rutils.local.clearAllExpired()
// 清空所有设置了过期时间的值
```

### clearAll

> 清空所有数据

```javascript
rutils.local.clearAll(value)
```

**参数：**

​ 无

**返回值：**

​ `void`

**例子：**

```javascript
// 1.设置数据
rutils.local.set('userName', '张三')

// 2.获取
rutils.local.get('userName')
// => "张三"

// 3.清空所有
rutils.local.clearAll()

// 获取
rutils.local.get('userName')
// => null
```

### each

> 遍历所有存储的值

```javascript
rutils.local.each(value)
```

**参数：**

1. `value` {function} 回调函数，形参有`key` 、`value`两个参数

**返回值：**

​ `void`

**例子：**

```javascript
// 循环
rutils.local.each((key, value) => {
    // do sth...
})
```
