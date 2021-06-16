# 数字相关

## API



| 名称                                 | 描述（加、减、乘、除支持多个数据） |
| ------------------------------------ | :--------------------------------- |
| <a href="#r-add">add</a>             | 加                                 |
| <a href="#r-merge">subtract</a>      | 减                                 |
| <a href="#r-multiply">multiply</a>   | 乘                                 |
| <a href="#r-devide">devide</a>       | 除                                 |
| <a href="#r-calc">calc</a>           | 计算方法                           |
| <a href="#r-fmtNum">fmtNum</a>       | 数字格式化                         |
| <a href="#r-isinteger">isInteger</a> | 是否为整数                         |
| <a href="#r-isnum">isNum</a>         | 是否为数字                         |
| <a href="#r-round">round</a>         | *四舍五入到指定位数*               |

### R.add

> 两数或多数相加的和

```bash
R.add(value1, value2, value3)
```

**参数：**

​	1.`value1` {number | array} 加数，如果需要多个可传入 `array` 进行相加；

​	2.`value2` {number} 被加数， <span style="color: #ff5722;">如果第一个参数为 `array`，那么第二个参数则为保留小数位数，第三个参数可不传</span>；

​	3.`value3` {number} 结果保留位数；

**返回值：**

​	`number`

​	计算后的和

 **例子：**

```javascript
// 两数相加
add(1.325, 1.235, 2)
// => 2.56

// 多数相加，第一个参数为数字list，第二个则为保留位数
add([1, 2, 3, 4, 5, 6, 7.124], 2)
// => 28.12

```



### R.subtract

> 两数或多数相减的值

```bash
R.subtract(value1, value2, value3)
```

**参数：**

​	1.`value1` {number | array} 减数，如果需要多个可传入 `array` 进行相减；

​	2.`value2` {number} 被减数， <span style="color: #ff5722;">如果第一个参数为 `array`，那么第二个参数则为保留小数位数，第三个参数可不传</span>；

​	3.`value3` {number} 结果保留位数；

**返回值：**

​	`number`

​	计算后的值

 **例子：**

```javascript
// 1.两数相减
subtract(1.325, 1.235, 2)
// => 0.09

// 2.多数相减，第一个参数为数字list，第二个则为保留位数
subtract([30, 2, 3, 4, 5, 6, 7.124], 2)
// => 2.88

```





### R.multiply

> 两数或多数相乘的值

```bash
R.multiply(value1, value2, value3)
```

**参数：**

​	1.`value1` {number | array} 乘数，如果需要多个可传入 `array` 进行相乘；

​	2.`value2` {number} 被乘数， <span style="color: #ff5722;">如果第一个参数为 `array`，那么第二个参数则为保留小数位数，第三个参数可不传</span>；

​	3.`value3` {number} 结果保留位数；

**返回值：**

​	`number`

​	计算后的值

 **例子：**

```javascript
// 1.两数相乘
multiply(1.325, 1.235, 2)
// => 1.64

// 2.多数相乘，第一个参数为数字list，第二个则为保留位数
multiply([1, 2, 3, 4, 5, 6, 7.124], 2)
// => 5129.28

```





### R.devide

> 两数或多数相除的值

```bash
R.devide(value1, value2, value3)
```

**参数：**

​	1.`value1` {number | array} 除数，如果需要多个可传入 `array` 进行相除；

​	2.`value2` {number} 被除数， <span style="color: #ff5722;">如果第一个参数为 `array`，那么第二个参数则为保留小数位数，第三个参数可不传</span>；

​	3.`value3` {number} 结果保留位数；

**返回值：**

​	`number`

​	计算后的值

 **例子：**

```javascript
// 1.两数相除
devide(1.325, 1.235, 2)
// => 1.07

// 2.多数相除，第一个参数为数字list，第二个则为保留位数
devide([500, 1.2, 3, 4, 5, 6, 7.124], 2)
// => 0.16

```





### R.isNum

> 是否有效数字：排除 `NaN` 、 `Infinity`，数字字符串或数字，都为有效数字

```bash
R.isNum(value)
```

**参数：**

​	1.`value` {number} 检测的值

**返回值：**

​	`boolean`

​	true: 是  |  false：否

 **例子：**

```javascript
let arr = [{}, [], undefined, null, 123, '123', Symbol('111'), function () {}, new Date(), false, /\d+/gi, NaN,Infinity]
arr.forEach(item => {
  console.log(isNum(item))
  // true: (123, '123')
  // false: (other)
})
```





### R.isInteger

> 是否为整数, 必须是数字类型

```bash
R.isInteger(value)
```

**参数：**

​	1.`value1` {number} 检测的值

**返回值：**

​	`boolean`

​	true: 是  |  false：否

 **例子：**

```javascript
isInteger(3)
// => true

isInteger(3.11)
// => false

isInteger('3')
// => false

isInteger(NaN)
// => false
```

