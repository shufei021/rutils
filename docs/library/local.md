# localStorage存储相关

## API

| 名称                                             | 描述                 |
| ------------------------------------------------ | :------------------- |
| <a href="#r-get">get</a>                         | 查                   |
| <a href="#r-del">set</a>                         | 增                   |
| <a href="#r-del">del</a>                         | 删                   |
| <a href="#r-setexpired">setExpired</a>           | 设置带过期时间的数据 |
| <a href="#r-getexpired">getExpired</a>           | 获取带过期时间的数据 |
| <a href="#r-clearallexpired">clearAllExpired</a> | 清除所有过期时间     |
| <a href="#r-clearall">clearAll</a>               | 清空所有内容         |
| <a href="#r-each">each</a>                       | 遍历所有数据         |



### R.get

> 获取储存的值，可批量获取

```bash
R.get(value)
```

**参数：**

 	1. `value` {string|array} 存储的key，多条则传递数组

**返回值：**

​	`any`

​	单条则返回设置对应的值`value`，多条返回一个`object`

 **例子：**

```javascript
// 1.单条获取
get("userName");
// => 张三

// 2.多条获取
get(["userName", "age", "sex"])
// => {userName: "张三", age: 20, sex: "男"}
```





### R.set

> 设置存储内容，支持多条写入

```bash
R.set(value1, value2)
```

**参数：**

	1. `value1` {string|object} 存储的key，如果传入`object`则为多条，请忽略`value2`参数
 	2.  `value2` {any} 存储的value，如果第一个参数为对象，则该参数不生效

**返回值：**

​	`void`

 **例子：**

```javascript
// 1.单条写入
set("userName", "zhangsan")

// 2.多条写入
set({
  userName: "zhangsan",
  age: 30,
  job: "JAVA开发"
})
```



### R.del

> 删除一条或多条数据

```bash
R.del(value)
```

**参数：**

	1. `value` {string|array} 删除数据的key，多条则为数组

**返回值：**

​	无

 **例子：**

```javascript
// 1.单条删除
del("userName")

// 2.多条删除
del(["userName", "age", "job"])
```





### R.setExpired

> 写入一条带过期时间的数据

<font color="#ff5722" style="font-weight: bold;">注意： 如果使用了此方法写入数据，那么获取也得使用 `getExpire()` 来获取数据</font>

```bash
R.setExpired(value1, value2, value3)
```

**参数：**

 	1.	`value1` {string} 字段key
 	2.	`value2` {any} 字段值value
 	3.	`value3` {number} 过期时间，单位: (毫秒)

**返回值：**

​	`void`

 **例子：**

```javascript
// 1.写入一条带过期时间的数据
setExpired("userName", "zhangsan", 3000); // 3秒后过期

// 2.获取数据
getExpired("userName")
// => "zhangsan"

// 3.过期后获取数据
setTimeout(() => {
  const userName = getExpired("userName")
  // => false
}, 4000)
```





### R.getExpired

> 获取一条在有效过期时间内的数据

```bash
R.setExpired(value)
```

**参数：**

 	1.	`value` {string} 字段key

**返回值：**

​	`any`

​	如果值过期了则返回 `false`， 否则返回对应的值`value`

 **例子：**

```javascript
// 1.写入一条带过期时间的数据
setExpired("userName", "zhangsan", 3000); // 3秒后过期

// 1秒后获取值
setTimeout(() => {
  const userName = getExpired("userName")
  // => zhangsan
}, 1000)

// 4秒后获取值
setTimeout(() => {
  const userName = getExpired("userName")
  // => false
}, 4000)
```



### R.clearAllExpired

> 清除所有设置过期时间的值

```bash
R.clearAllExpired()
```

**参数：**

​	无

**返回值：**

​	`any`

 **例子：**

```javascript
clearAllExpired()
// 清空所有设置了过期时间的值
```



### R.clearAll

> 清空所有数据

```bash
R.clearAll(value)
```

**参数：**

​	无

**返回值：**

​	`void`

 **例子：**

```javascript
// 1.设置数据
set("userName", "张三")

// 2.获取
get("userName")
// => "张三"

// 3.清空所有
clearAll()


// 获取
get("userName")
// => null
```

