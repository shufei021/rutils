# 数字相关

## API

| 名称                               | 描述               |
| ---------------------------------- | :----------------- |
| <a href="#add">add</a>             | 加                 |
| <a href="#subtract">subtract</a>   | 减                 |
| <a href="#multiply">multiply</a>   | 乘                 |
| <a href="#devide">devide</a>       | 除                 |
| <a href="#fmtnum">fmtNum</a>       | 数字格式化         |
| <a href="#isinteger">isInteger</a> | 是否为整数         |
| <a href="#isnum">isNum</a>         | 是否为数字         |
| <a href="#round">round</a>         | 四舍五入到指定位数 |
| <a href="#sumdecimalnumber">sumDecimalNumber</a>         | 两个超小数（均是字符串）相加 |
| <a href="#sumbignumber">sumBigNumber</a>         | 两个超大整数（均是字符串）相加 |

### add

两数或多数相加

**语法：**

```javascript
/**
 * 相加
 * @param {Number} a :加数
 * @param {Number} b ：被加数
 * @param {Number} digit ：结果保留位数
 */
rutils.add(a, b, digit)
```

**示例：**

```javascript
// 两数相加
rutils.add(1.325, 1.235, 2)
// => 2.56

// 多数相加，第一个参数为数字数组，第二个则为保留位数
rutils.add([1, 2, 3, 4, 5, 6, 7.124], 2)
// => 28.12
```

### subtract

两数或多数相减

**语法：**

```javascript
/**
 * 两数相减
 * @param {Number} a :减数
 * @param {Number} b ：被减数
 * @param {Number} digit ：结果保留位数
 */
rutils.subtract(a, b, digit)
```

**示例：**

```javascript
// 1.两数相减
rutils.subtract(1.325, 1.235, 2)
// => 0.09

// 2.多数相减，第一个参数为数字list，第二个则为保留位数
rutils.subtract([30, 2, 3, 4, 5, 6, 7.124], 2)
// => 2.88
```

### multiply

两数或多数相乘的值

**语法：**

```javascript
/**
 * 两数相乘
 * @param { Number } a :乘数
 * @param { Number } b ：被乘数
 * @param { Number } digit ：结果保留位数
 */
rutils.multiply(a, b, digit)
```

**示例：**

```javascript
// 1.两数相乘
rutils.multiply(1.325, 1.235, 2)
// => 1.64

// 2.多数相乘，第一个参数为数字list，第二个则为保留位数
rutils.multiply([1, 2, 3, 4, 5, 6, 7.124], 2)
// => 5129.28

rutils.multiply(1.1, 2.2) // 2.42
rutils.multiply(1.13, 0.8, 0) // 1
rutils.multiply(1.13, 0.8, 1) // "0.9"
rutils.multiply(1.13, 0.8, 2) // "0.90"
rutils.multiply(1.13, 0.8, 3) // "0.904"
rutils.multiply(1.13, 0.8, 4) // "0.9040"
```

### devide

两数或多数相除的值

**语法：**

```javascript
/**
 * 两数相除
 * @param {Number} a :除数
 * @param {Number} b ：被除数
 * @param {Number} digit ：结果保留位数
 */
rutils.devide(a, b, digit)
```

**示例：**

```javascript
// 1.两数相除
rutils.devide(1.325, 1.235, 2)
// => 1.07

// 2.多数相除，第一个参数为数字list，第二个则为保留位数
rutils.devide([500, 1.2, 3, 4, 5, 6, 7.124], 2)
// => 0.16

rutils.devide() // ""
rutils.devide(1) // ""
rutils.devide(1, 3) // 0.3333333333333333
rutils.devide(1, 3, 1) // "0.3"
rutils.devide(1, 3, 2) // "0.33"

rutils.devide() // ""
rutils.devide([]) // ""
rutils.devide([1, 3]) // 0.3333333333333333
rutils.devide([1, 3, 3]) // 0.1111111111111111
rutils.devide([1, 9]) // 0.1111111111111111
rutils.devide([1, 9], 0) // 0
rutils.devide([1, 9], 1) // "0.1"
rutils.devide([1, 9], 2) // "0.11"
rutils.devide([1, 9], 3) // "0.111"
```

### fmtNum

格式化数字

语法：

```js
/**
 * 数字格式化
 * @param { String | Number } val : 有效数数字
 * @param { Boolean } isThousands : 整数部分是否进行千分位,默认值 false
 * @param { Number } digit : 小数部分四舍五入保留到的位数
 * @param { Boolean } isCalc : 计算结果是否 Number 处理
 */
rutils.fmtNum(val, isThousands, len, isCalc)
```

示例：

```js
rutils.fmtNum() // ""
rutils.fmtNum(11111111111.333555) // "11111111111.333555"
rutils.fmtNum(11111111111.333555, false, 3) // "11111111111.334"
rutils.fmtNum(11111111111.333555, true) // "11,111,111,111.333555"
rutils.fmtNum(11111111111.333555, true, 3) // "11,111,111,111.334"
rutils.fmtNum(1.45, false, 3, true) // 1.45
```

### round

四舍五入

语法：

```js
/**
 * 四舍五入到指定位数
 * @param { Number } n:小数
 * @param { Number } decimals ：四舍五入到指定位数
 */
rutils.round(n, decimals)
```

示例：

```js
rutils.round(1.23456, 1) // 1.2
rutils.round(1.23456, 2) // 1.23
rutils.round(1.23456, 3) // 1.235
rutils.round(1.23456, 4) // 1.2346
rutils.round(1.23456, 5) // 1.23456
```

### isNum

是否有效数字：排除 `NaN` 、 `Infinity`，数字字符串或数字，都为有效数字

```javascript
/**
 * 判断是否是有效数字 不包含NaN
 * 是否有效数字：排除 NaN Infinity，数字字符串 或是 数字，都为有效数字
 * @param {any} val: 判断的值
 */
rutils.isNum(val)
```

**示例：**

```javascript
let arr = [{}, [], undefined, null, 123, '123', Symbol('111'), function() {}, new Date(), false, /\d+/gi, NaN, Infinity]
arr.forEach(item => {
    console.log(rutils.isNum(item))
    // true: (123, '123')
    // false: (other)
})
```

### isInteger

是否为整数, 必须是数字类型

**语法：**

```javascript
rutils.isInteger(val)
```

**示例：**

```javascript
rutils.isInteger(3)
// => true

rutils.isInteger(3.11)
// => false

rutils.isInteger('3')
// => false

rutils.isInteger(NaN)
// => false
```

### sumDecimalNumber

> 两个超小数（均是字符串）相加

**语法：**

```javascript
rutils.sumDecimalNumber(a,b)
```

**参数：**

`a：`加数 ，字符串类型，超小数<br/>
`b：`被加数 ，字符串类型，超小数

**示例：**

```javascript
rutils.sumDecimalNumber('0.0000000000001','0.00000000000007')// '0.00000000000017'
```

### sumBigNumber

> 两个超小数（均是字符串）相加

**语法：**

```javascript
rutils.sumBigNumber(a,b)
```
**参数：**

`a：`加数 ，字符串类型，整数<br/>
`b：`被加数 ，字符串类型，整数

**示例：**

```javascript
rutils.sumBigNumber('9999999999999999','9999999999999999999')// '10009999999999999998' 与BigInt 运算一致
//BigInt运算： 9999999999999999n+9999999999999999999n // 10009999999999999998n
```