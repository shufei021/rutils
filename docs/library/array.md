# 数组相关

## API

| 名称                                                   | 描述                                          |
| ------------------------------------------------------ | :-------------------------------------------- |
| <a href="#union">union</a>                             | 数组并集                                      |
| <a href="#intersection">intersection</a>               | 数组交集                                      |
| <a href="#except">except</a>                           | 数组差集                                      |
| <a href="#unique">unique</a>                           | 数组去重                                      |
| <a href="#sum">sum</a>                                 | 数组求和                                      |
| <a href="#arraytotree">arrayToTree</a>                 | 数组转树                                      |
| <a href="#arraytoobject">arrayToObject</a>             | 数组转对象                                    |
| <a href="#group">group</a>                             | 数组分组                                      |
| <a href="#mean">mean</a>                               | 数组平均数                                    |
| <a href="#arrayfill">arrayFill</a>                     | 数组填充                                      |
| <a href="#delby">delBy</a>                             | 数组条件删除                                  |
| <a href="#exchangepostion">exchangePostion</a>         | 数组值位置交换                                |
| <a href="#insetpostion">insetPostion</a>               | 数组值插入交换                                |
| <a href="#flatten">flatten</a>                         | 数组扁平化                                    |
| <a href="#indexofall">indexOfAll</a>                   | 数组索引获取                                  |
| <a href="#isrepeat">isRepeat</a>                       | 数组值是否重复                                |
| <a href="#range">range</a>                             | 数组生成 起止数字间（包含起止数字）的升序数组 |
| <a href="#rangerandom">rangeRandom</a>                 | 数组生成 两数之间指定长度的随机数组           |
| <a href="#rangescopestartzore">rangeScopeStartZore</a> | 数组生成 最小数字 0 到 max 最大值 的升序数组  |
| <a href="#rangestep">rangeStep</a>                     | 数组生成 指定范围内指定步长的数组             |
| <a href="#sample">sample</a>                           | 数组中获取随机数 1 个                         |
| <a href="#timestotal">timesTotal</a>                   | 数组中出现次数统计                            |

### union

> 求数组并集

```javascript
rutils.union(value1, value2)
```

**参数：**

​ 1.`value1` {array} 传入的数组 a

​ 2.`value2` {array} 传入的数组 b

**返回值：**

​ `array`

​ [] 两数组的并集

**例子：**

```javascript
// 场景1：
let a = [1, 2, 3, 4, 5]
let b = [1, 2, 4, 5, 6]

rutils.union(a, b) //[1,2,3,4,5,6]

// 场景2：
let a1 = [
    { id: 1, name: '张三', age: 20 },
    { id: 2, name: '李四', age: 21 },
    { id: 3, name: '小二', age: 23 }
]
let b1 = [
    { id: 2, name: '李四', age: 21 },
    { id: 4, name: '小明', age: 24 },
    { id: 5, name: '小红', age: 25 }
]

// 通过 id 获取并集
rutils.union(a1, b1, 'id')
[
  {id: 1, name: "张三", age: 20}
  {id: 2, name: "李四", age: 21}
  {id: 3, name: "小二", age: 23}
  {id: 4, name: "小明", age: 24}
  {id: 5, name: "小红", age: 25}
]
```

### unique

> 去除重复值

```javascript
rutils.unique(value1, value2)
```

**参数：**

​ 1.`value1` {array} 检测的数组

​ 2.`value2` {string} item 的 key 名

**返回值：**

​ `array`

​ 不存在重复值的新数组

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

// 推荐 rutils.unique(a1,'id') 进行去重
```

### intersection

> 去除*求数组交集*值

```javascript
rutils.intersection(value1, value2)
```

**参数：**

​ 1.`value1` {array} 传入的数组 a；

​ 2.`value2` {array} 传入的数组 b

**返回值：**

​ `array`

​ [] 两数组的交集

**例子：**

```javascript
// 场景1：
let a = [1, 2, 3, 4, 5]
let b = [1, 2, 4, 5, 6]

rutils.intersection(a, b) // [1,2,4,5]

// 场景2：
let a1 = [
    { id: 1, name: '张三', age: 20 },
    { id: 2, name: '李四', age: 21 },
    { id: 3, name: '小二', age: 23 }
]
let b1 = [
    { id: 2, name: '李四', age: 21 },
    { id: 4, name: '小明', age: 24 },
    { id: 5, name: '小红', age: 25 }
]
rutils.intersection(a1, b1, 'id') // [ { id: 2, name: '李四', age: 21 }]
```

### arrayFill

> _生成一个指定长度 每个值都填充为统一的 指定值_

```javascript
rutils.arrayFill(value1, value2)
```

**参数：**

​ 1.`value1` {number} 生成的数组长度

​ 2.`value2` {any} 数组中 item 内容

**返回值：**

​ `array`

​ [value2, value2, value2, .....]填充后的新数组

**例子：**

```javascript
rutils.arrayFill(3, '1')
// => ['1', '1', '1']

rutils.arrayFill(3, { name: 'zhangsan' })
// => [{name: 'zhangsan'}, {name: 'zhangsan'}, {name: 'zhangsan'}]
```

### arrayToTree

> list 转为树形数据

```javascript
rutils.arrayToTree(value1, value2, value3)
```

**参数：**

​ 1.`value1` {array} 原始数据列表

​ 2.`value2` {string} 数据 id key, 默认 null

​ 3.`value3` {string} 父级 id key, 默认 pid

**返回值：**

​ `array`

```javascript
const currentArray = [
    { id: '01', name: '张大大', pid: null, job: '项目经理' },
    { id: '02', name: '小亮', pid: '01', job: '产品leader' },
    { id: '03', name: '小美', pid: '01', job: 'UIleader' },
    { id: '04', name: '老马', pid: '01', job: '技术leader' },
    { id: '05', name: '老王', pid: '01', job: '测试leader' },
    { id: '06', name: '老李', pid: '01', job: '运维leader' },
    { id: '07', name: '小丽', pid: '02', job: '产品经理' },
    { id: '08', name: '大光', pid: '02', job: '产品经理' },
    { id: '09', name: '小高', pid: '03', job: 'UI设计师' },
    { id: '10', name: '小刘', pid: '04', job: '前端工程师' },
    { id: '11', name: '小华', pid: '04', job: '后端工程师' },
    { id: '12', name: '小李', pid: '04', job: '后端工程师' },
    { id: '13', name: '小赵', pid: '05', job: '测试工程师' },
    { id: '14', name: '小强', pid: '05', job: '测试工程师' },
    { id: '15', name: '小涛', pid: '06', job: '运维工程师' }
]
rutils.arrayToTree(currentArray)
```

### delBy

> 根据条件删除数组中某个值

```javascript
rutils.delBy(value1, value2, value3)
```

**参数：**

​ 1.`value1` {array} 原始数据列表

​ 2.`value2` {string} 条件

​ 3.`value3` {boolean} 是否改变原始数组

**返回值：**

​ `array`

​ [item1, item2, item3, ....]

**例子：**

```javascript
/**
 * 用法1：
 * let a1 = [1, 2, 3, 4, 5, 6]
 * rutils.delBy(a1, 2)// [1, 3, 4, 5, 6]
 * a1 // [1, 2, 3, 4, 5, 6]
 * let a1 = [1, 2, 3, 4, 5, 6]
 * rutils.delBy(a1, 2, true)// [1, 3, 4, 5, 6]
 * a1 // [1, 3, 4, 5, 6]
 *
 *
 *
 */

/**
 * 用法2：
 * let a1 = [
 *   { id: 1, name: '罗老板', age: 18 },
 *   { id: 2, name: '帆老板', age: 19 },
 *   { id: 3, name: '全老板', age: 20 },
 *    { id: 2, name: '帆老板', age: 19 }
 * ]
 * // 删除 a1 数组中 id 为 2的值
 * rutils.delBy(a1, item => item.id === 2) //  等价于 handday.arr.delBy(a1, { id: 2 })
 * console.log(a1)
 * //
 * [
 *     { id: 1, name: '罗老板', age: 18 },
 *    { id: 3, name: '全老板', age: 20 },
 * ]
 *
 *
 *
 *
 *
 */

/**
 * 用法3：
 *
 *
 * let a1 = [
 *    { id: 1, name: '罗老板', age: 18 },
 *     { id: 2, name: '帆老板', age: 19 },
 *     { id: 3, name: '全老板', age: 20 },
 *     { id: 2, name: '帆老板', age: 19 }
 * ]
 * // 删除 只要 id 是 1 或 2的值
 * rutils.delBy(a1, { id: [1, 2] })
 * console.log(a1)
 * //
 * [
 *     { id: 3, name: '全老板', age: 20 },
 * ]
 *
 *
 *
 */

/**
 * 用法4：
 *
 *
 * let a1 = [
 *     { id: 1, name: '罗老板', age: 18 },
 *     { id: 2, name: '帆老板', age: 19 },
 *     { id: 3, name: '全老板', age: 20 },
 *     { id: 2, name: '帆老板', age: 19 }
 * ]
 * // 删除 a1 数组中 id值为 2，或 name值为 全老板  PS：注意是或的关系
 * rutils.delBy(a1, { id: 2, name: '全老板' })
 * console.log(a1)
 *
 *
 *
 *
 */

/**
 * 用法5：
 *
 *
 * let a1 = [
 *     { id: 1, name: '罗老板', age: 18 },
 *     { id: 2, name: '帆老板', age: 19 },
 *     { id: 3, name: '全老板', age: 20 },
 *     { id: 2, name: '帆老板', age: 19 },
 *     { id: 4, name: '卫老板', age: 22 },
 *     { id: 5, name: '卓老板', age: 21 },
 *     { id: 6, name: '黄老板', age: 23 }
 * ]
 * // 只要 id值为 2 ，name值 是 全老板 或 卫老板，age值是23 ，对应的值都从数组中删除掉
 * rutils.delBy(a1, { id: 2, name: ['全老板', '卫老板'], age: 23 })
 * console.log(a1)
 * //
 * [
 * {id: 1, name: "罗老板", age: 18}
 * {id: 5, name: "卓老板", age: 21}
 * ]
 *
 *
 *
 */

/***
 * 用法6：
 *
 * let a1 = [1, 2, 3, 4, 5, 2]
 * // 删除 给出的数组范围的值
 * rutils.delBy(a1, [2, 3, 4])
 * console.log(a1) //[1,5]
 *
 *
 *
 */
```

### except

> 求数组差集

```javascript
rutils.except(value1, value2)
```

**参数：**

​ 1.`value1` 需要检测的值 1

​ 2.`value2` 需要检测的值 2

**返回值：**

​ `array`

​ [] 两数组的差集

**例子：**

```javascript
// 场景一
let a = [1, 2, 3, 4, 5]
let b = [1, 2, 4, 5, 6]
rutils.except(a, b) // [3,6]

// 场景二，list对象
let a1 = [
    { id: 1, name: '张三', age: 20 },
    { id: 2, name: '李四', age: 21 },
    { id: 3, name: '小二', age: 23 }
]
let b1 = [
    { id: 2, name: '李四', age: 21 },
    { id: 4, name: '小明', age: 24 },
    { id: 5, name: '小红', age: 25 }
]
rutils.except(a1, b1, 'id')
/*
[
  {id: 1, name: "张三", age: 20}
  {id: 3, name: "小二", age: 23}
  {id: 4, name: "小明", age: 24}
  {id: 5, name: "小红", age: 25}
]
*/
```

### exchangePostion

> 交换数组中任一两个值的位置

```javascript
rutils.exchangePostion(value1, value2, value3)
```

**参数：**

​ 1.`value1` {array} 原始数组

​ 2.`value2` {number} 原始位置索引

​ 3.`value3` {number} 新位置索引

​ 4.`value3` {boolean} 是否改变原始数组

**返回值：**

​ `array`

**例子：**

```javascript
// 示例：
let a1 = [1, 2, 3, 4, 5, 6]
rutils.exchangePostion(a1, 4, 1) // [1, 5, 3, 4, 2, 6]
console.log(a1) // [1, 2, 3, 4, 5, 6]

// 示例2：
let a2 = [1, 2, 3, 4, 5, 6]
rutils.exchangePostion(a2, 4, 1，true) // [1, 5, 3, 4, 2, 6]
console.log(a2) // [1, 5, 3, 4, 2, 6]
```

### flatten

> 指定深度扁平化数组

```javascript
rutils.flatten(value1, value2)
```

**参数：**

​ 1.`value1` {array} 原始数组

​ 2.`value2` {number} 扁平化向下查找层级，默认为`1`

**返回值：**

​ `array`

​ [] 扁平化后的新数组

**例子：**

```javascript
rutils.flatten([1, 2, 3, [4, [5, 6, [7]]]])
// => [1, 2, 3, 4, [5,6,[7]]]

rutils.flatten([1, 2, 3, [4, [5, 6, [7]]]], 2)
// => [1, 2, 3, 4, 5,6,[7]]
```

### group

> 一维数组转二维数组 (分组)

```javascript
rutils.group(value1, value2)
```

**参数：**

​ 1.`value1` {array} 需要分组的一维数组

​ 1.`value2` {number} 平分基数（num 个为一组进行分组（归档）

**返回值：**

​ `array`

​ [[], [], []...] 分组成功后的数组

**例子：**

```javascript
rutils.group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
// => [[1, 2], [3, 4], [5, 6], [7, 8], [9.10]]

rutils.isNumber('123')
// => false

rutils.isNumber(true)
// => false
```

### indexOfAll

> 返回数组中某值的所有索引，数组形式返回

```javascript
rutils.indexOfAll(value1, value2, value3)
```

**参数：**

​ 1.`value1` {array} 需要检测的值

​ 2.`value2` {string} 键名

​ 3.`value3` {string} 键值

**返回值：**

​ `array`

​ 新的索引数组

**例子：**

```javascript
let a1 = [
    { id: 1, name: '张三', age: 20, count: 100 },
    { id: 2, name: '李四', age: 21, count: 50 },
    { id: 2, name: '大卫', age: 21, count: 50 },
    { id: 3, name: '阿呆', age: 23, count: 55 },
    { id: 3, name: '阿呆', age: 23, count: 55 }
]
rutils.indexOfAll(a1, 'id', 3)
// => [3, 4]

let a2 = [1, 2, 3, 1, 2, 3]
rutils.indexOfAll(a2, 1)
// => [0, 3]
```

### insetPostion

> 指定数组中某个索引的值 取出来，再插入到数组的任一位置

```javascript
rutils.insetPostion(value1, value2, value3, value4)
```

**参数：**

​ 1.`value1` {array} 操作的数组

​ 2.`value2` {number} 老位置索引

​ 3.`value3` {number} 新位置索引

​ 4.`value4` {boolean} 是否改变原数组，默认不改变返回一个新数组

**返回值：**

​ `array`

​ [] 替换位置后的数组

**例子：**

```javascript
let a1 = [1, 2, 3, 4, 5, 6]
rutils.insetPostion(a1, 3, 1)
// => [1, 4, 2, 3, 5, 6]

console.log(a1)
// => [1, 2, 3, 4, 5, 6]
```

### isRepeat

> 数组内是否有重复值

```javascript
rutils.isRepeat(value)
```

**参数：**

​ 1.`value` {array} 需要检测的值

**返回值：**

​ `boolean`

​ true：有重复的值，false 没有重复的值

**例子：**

```javascript
// 示例
let a1 = [{ id: 1, name: '张三', age: 20 }, { id: 1, name: '李四', age: 20 }, { id: 3, name: '小明', age: 23 }, { id: 2, name: '大卫', age: 21 }, 1, 3, 2, { 0: 1, 1: 2, 2: 3 }, [1, 2, 3]]
rutils.isRepeat(a1)
// => false

// 示例2
let a2 = [
    { id: 1, name: '张三', age: 20 },
    { id: 1, name: '张三', age: 20 },
    { id: 1, name: '李四', age: 20 },
    { id: 3, name: '小明', age: 23 },
    { id: 2, name: '大卫', age: 21 },
    1,
    3,
    2,
    { 0: 1, 1: 2, 2: 3 },
    [1, 2, 3]
]
rutils.isRepeat(a2)
// => true
```

### mean

> 数组平均数

```javascript
rutils.mean(value1, value2)
```

**参数：**

​ 1.`value1` {array} 数组

​ 1.`value2` {string|function} 回调函数或者是 key

**返回值：**

​ `number`

​ 数组中的平均数

**例子：**

```javascript
//1.复杂类型数据，函数返回自定义字段
rutils.mean([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)
// => 5

//2.传入key
rutils.mean([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')
// => 5

//3.不传递第二个参数
rutils.mean([4, 2, 8, 6])
// => 5

//4.数组中item为字符串
rutils.mean(['4', 2, '8', 6])
// => 5
```

### range

> 生成 起止数字间（包含起止数字）的升序数组

```javascript
rutils.range(value1, value2)
```

**参数：**

​ 1.`value1` {number} 最小值

​ 2.`value2` {number} 最大值

**返回值：**

​ `array`

​ [`value1`, `... `, `value2`] 从最小值到最大值

**例子：**

```javascript
rutils.range(0, 10)
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

rutils.range(1, 9)
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### rangeRandom

> 生成两数之间指定长度（所需产生的个数）的随机数组

```javascript
rutils.rangeRandom(value1, value2, value3, value4)
```

**参数：**

​ 1.`value1` {number} 起始值

​ 2.`value2` {number} 结束值

​ 3.`value3` {number} 指定生成的个数，默认`1`

​ 4.`value4` {boolean} 是否重复,默认重复

**返回值：**

​ `array`

​ [`value1`, `... `, `value2`] 从最小值到最大值

**例子：**

```javascript
//默认取出0-10的随机数，由于第三位参数没传递，默认返回一个值
rutils.rangeRandom(0, 10)
// => [3]

//取出0-10的10位随机数，
rutils.rangeRandom(0, 10, 10)
// => [79, 78, 88, 71, 9, 65, 60, 31, 43, 41]

//取出20-50的8为随机数，不可重复
rutils.rangeRandom(20, 50, 8, true)
// => [20, 40, 23, 35, 42, 45, 22, 39]
```

### rangeScopeStartZore

> 生成 最小数字 0 到 max 最大值 的升序数组

```javascript
rutils.rangeScopeStartZore(max)
```

**参数：**

​ 1.`max` {number} 最大值

**返回值：**

​ `array`

​ [`value1`, `... `, `value2`] 从最小值到最大值

**例子：**

```javascript
rutils.rangeScopeStartZore(10)
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

rutils.rangeScopeStartZore(5)
// => [0, 1, 2, 3, 4, 5]
```

### rangeStep

> 生成指定范围内指定步长的数组

```javascript
rutils.rangeStep(value1, value2, value3)
```

**参数：**

​ 1.`value1` {number} 最小值

​ 2.`value2` {number} 最大值

​ 3.`value3` {number} 步长

**返回值：**

​ `array`

​ [`value1`, `... `, `value2`] 从最小值到最大值

**例子：**

```javascript
rutils.rangeStep(0, 19, 2)
// => [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

rutils.rangeStep(0, 19, 3)
// => [0, 3, 6, 9, 12, 15, 18]

rutils.rangeStep(0, 19, 4)
// => [0, 4, 8, 12, 16]
```

### sample

> 取出数组中随机一项目

```javascript
rutils.sample(value)
```

**参数：**

​ 1.`value` {array} 操作数组

**返回值：**

​ `any`

​ 数组中随机项

**例子：**

```javascript
rutils.sample([1, 2, 3, 4, 5])
// => 5

let users = [
    {
        name: '张三'
    },
    {
        name: '李四'
    },
    {
        name: '王五'
    }
]
rutils.sample(users)
// => {name: "张三"}
```

### sum

> 数组求和

```javascript
rutils.sum(value1, value2)
```

**参数：**

​ 1.`value1` {array} 数组

​ 2.`?value2` {string} 数组对象 key

**返回值：**

​ `number`

​ 最终求和值

**例子：**

```javascript
let a = [1, 2, 3, 4, 5]
rutils.sum(a)
// => 15

let a1 = [
    { id: 1, name: '张三', age: 20 },
    { id: 2, name: '李四', age: 21 },
    { id: 3, name: '小二', age: 23 }
]
rutils.sum(a1, 'age')
// => 64
```

### timesTotal

> 数组中出现次数统计

```javascript
rutils.timesTotal(value1, value2, value3)
```

**参数：**

​ 1.`value1` {array} 检测的数组

​ 2.`value2` {string} item 的 key 名

​ 3.`value3` {any} 检测值

**返回值：**

​ `array`

​ [`value1`, `... `, `value2`] 从最小值到最大值

**例子：**

```javascript
let a1 = [1, 2, 3, 1, 5, 6, 1]
rutils.timesTotal(a1, 1)
// => 3

let a2 = [{ a: 1 }, { a: 1 }]
rutils.timesTotal(a2, 'a', 1)
// => 2
```
