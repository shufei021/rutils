# 数组相关

::: tip 说明
目前编写数组相关方法 30+，涵盖数组的各种操作，可在当前页面 F12 打开控制台直接 CV 到控制看结果，
没有没有你想要的方法，请联系 <span style="color:#26B1F6">QQ 1017981699</span> 或是 <span style="color:#26B1F6">github</span> 提 <span style="color:#26B1F6">issue</span>，我会尽快处理
:::

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
| <a href="#pick">pick</a>                               | 数组筛选                                      |
| <a href="#make">make</a>                               | 数组项重组                                    |
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
| <a href="#arrayrestore">arrayRestore</a>               | 数组状态还原                                  |
| <a href="#arraygroup">arrayGroup </a>                  | 按数组原状态顺序分组                          |
| <a href="#arrayat">arrayAt</a>                         | 数组负索引访问                                |
| <a href="#arrayrepeat ">arrayRepeat </a>               | 数组复制                                      |
| <a href="#arraysubstr">arraySubstr</a>                 | 数组截取                                      |
| <a href="#delbyindexs">delByIndexs</a>                 | 数组值多个删除                                |
| <a href="#grouparchive">groupArchive</a>               | 数组归档                                      |
| <a href="#lastfind">lastFind</a>                       | 数组反向查询                                  |
| <a href="#lastfindindex">lastFindIndex</a>             | 数组反向查询索引                              |
| <a href="#gettreepath">getTreePath</a>                 | 获取树路径                                    |
| <a href="#querytreenode">queryTreeNode</a>             | 查询树节点                                    |
| <a href="#querytreepath">queryTreePath</a>             | 查询树路径                                    |

[[toc]]

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

### arrayToObject

> 数组转对象

**语法：**

```js
rutils.arrayToObject(array)
```

**示例：**

```js
rutils.arrayToObject([1, 2, 3]) //{0: 1, 1: 2, 2: 3}
rutils.arrayToObject([{ A: 1 }, { b: 2 }]) // {0:{A:1},1:{b:2}}
```

### pick

> json 数组，属性筛选

**语法：**

```js
rutils.pick(array, keys)
```

**示例：**

```js
let arr = [
    {uuid: "32317268-a82f-384c-33a1-20b48c69fa07", name: "张三", time: "2021-06-28 15:07:18", age: 20}
    {uuid: "514c416f-379b-fc13-853c-291026504bb9", name: "李四", time: "2021-06-29 15:07:18", age: 21}
    {uuid: "e2b03c8b-654a-3c48-c853-19aeccf4d00e", name: "小红", time: "2021-06-30 15:07:18", age: 22}
    {uuid: "d1135ef4-f11e-d9ee-39b2-82119174fd5c", name: "李明", time: "2021-07-01 15:07:18", age: 23}
]
rutils.pick(arr,['uuid','name'])

/*
[
    {uuid: "32317268-a82f-384c-33a1-20b48c69fa07", name: "张三"}
    {uuid: "514c416f-379b-fc13-853c-291026504bb9", name: "李四"}
    {uuid: "e2b03c8b-654a-3c48-c853-19aeccf4d00e", name: "小红"}
    {uuid: "d1135ef4-f11e-d9ee-39b2-82119174fd5c", name: "李明"}
]
*/
```

### make

> json 数组 项重组

**语法：**

```js
rutils.make(array, k1, k2)
```

**示例：**

```js
let arr = [
    {uuid: "32317268-a82f-384c-33a1-20b48c69fa07", name: "张三", time: "2021-06-28 15:07:18", age: 20}
    {uuid: "514c416f-379b-fc13-853c-291026504bb9", name: "李四", time: "2021-06-29 15:07:18", age: 21}
    {uuid: "e2b03c8b-654a-3c48-c853-19aeccf4d00e", name: "小红", time: "2021-06-30 15:07:18", age: 22}
    {uuid: "d1135ef4-f11e-d9ee-39b2-82119174fd5c", name: "李明", time: "2021-07-01 15:07:18", age: 23}
]
// 数组项 指定某项值 为 key，某项值 为 value
rutils.make(arr, 'uuid', 'age')
/*
[
    {32317268-a82f-384c-33a1-20b48c69fa07: 20}
    {514c416f-379b-fc13-853c-291026504bb9: 21}
    {e2b03c8b-654a-3c48-c853-19aeccf4d00e: 22}
    {d1135ef4-f11e-d9ee-39b2-82119174fd5c: 23}
]
*/
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

### arrayRestore

> 有时候，我们需要还原数组 改变顺序之前的顺序状态，因此，我们需求一个 数组顺序状态还原方法来帮我解决这个问题

语法：

```javascript
/**
 * @description: 数组状态还原
 * @param { Array } list: 有两值交换后的数组
 * @param { Number } oldIndex: 交换项索引
 * @param { Number } newIndex：被交换项索引
 * @param { Boolean } isDeep：是否给改变原数组
 */
```

示例：

```javascript
const oldArr = [1, 2, 3, 4, 5, 6, 7]
const oldIndex = 5
const newIndex = 2
// 在拖拽排序中，我们把 数组 的索引 5的值 6 拖到索引 2的位置，之前的顺势往下排，得到 [1, 2, 6, 3, 4, 5,  7]

// 现在，你想借助 改变后的数组 [1, 2, 6, 3, 4, 5,  7] 和 改变时的 新旧索引 还原数组改变之前的状态，我们这样做

rutils.arrayRestore([1, 2, 6, 3, 4, 5, 7], oldIndex, newIndex) // [1, 2, 3, 4, 5, 6, 7]
```

### arrayGroup

语法：

```javascript
/**
 * @description: 数组按标识进行分组 （分组后顺序不变）
 * @param {Array} list：分组的数组
 * @param {String} typeStr：分组的标识
 * @return {Array}
 */
```

> 某些场景，按理说根据条件归档已经够用了，但是有些特殊情况，我们不想集中归档，我们想根据条件按顺序进行归档，如下：

```javascript
const list = [
    { name: '1', type: 0 },

    { name: '2', type: 1 },
    { name: '3', type: 1 },
    { name: '4', type: 1 },

    { name: '5', type: 0 },
    { name: '6', type: 0 },

    { name: '7', type: 2 },
    { name: '8', type: 2 },
    { name: '9', type: 2 },

    { name: '10', type: 0 },
    { name: '11', type: 0 }
]
// 需求=> 转换成
/*
[ 
    
    [{name:'1',type:0}], 

    [{name:'2',type:1}, {name:'3',type:1}, {name:'4',type:1}], 

    [{name:'5',type:0}, {name:'6',type:0}], 

    [{name:'7',type:2}, {name:'8',type:2}, {name:'9',type:2}], 

    [{name:'10',type:0},{name:'11',type:0}], 
]
*/
// 此时 arrayGroup 就可以排上用场了

rutils.arrayGroup(list, 'type')
```

### arrayAt

> 我们知道数组你如果想访问数组的最后一个 或 倒数第几个，你必须用 数组的长度 通过减去来计算 需要访问的索引值，该方法让你用负数简单的就能够访问倒数值

语法：

```javascript
/**
 * @description: 根据索引访问数组项
 * @param { Array } arr：数组
 * @param { Number } index：索引，默认 0
 */
```

示例：

```javascript
// 最新的提案已经出来，最新谷歌浏览器已经支持了
;[1, 2, 3, 4]
    .at() // 1
    [(1, 2, 3, 4)].at(1) // 2
    [(1, 2, 3, 4)].at(2) // 3
    [(1, 2, 3, 4)].at(3) // 4
    [(1, 2, 3, 4)].at(4) // undefined
    [(1, 2, 3, 4)].at(-1) // 4
    [(1, 2, 3, 4)].at(-2) // 3
    [(1, 2, 3, 4)].at(-3) // 2
    [(1, 2, 3, 4)].at(-4) // 1
    [(1, 2, 3, 4)].at(-5) // undefined

// 我们自己实现的效果一样，无需考虑兼容
rutils.arrayAt([1, 2, 3, 4]) // 1
rutils.arrayAt([1, 2, 3, 4], 1) // 2
rutils.arrayAt([1, 2, 3, 4], 2) // 3
rutils.arrayAt([1, 2, 3, 4], 3) // 4
rutils.arrayAt([1, 2, 3, 4], 4) // undefined
rutils.arrayAt([1, 2, 3, 4], -1) // 4
rutils.arrayAt([1, 2, 3, 4], -2) // 3
rutils.arrayAt([1, 2, 3, 4], -3) // 2
rutils.arrayAt([1, 2, 3, 4], -4) // 1
rutils.arrayAt([1, 2, 3, 4], -5) // undefined
```

### arrayRepeat

> 你一定知道字符串的 repeat 方法，但是数组却没有 repeat 方法，没有关系，arrayRepeat 就是做这样的事的方法

语法：

```javascript
/**
 * @description: 数组复制
 * @param {Array} arr:需要复制的数组
 * @param {Number} n: 复制的次数，默认 0
 */
```

示例：

```javascript
rutils.arrayRepeat([1, 2, 3]) // [1, 2, 3]    不传复制次数 默认是不复制 返回原数组
rutils.arrayRepeat([1, 2, 3], 1) //  [1, 2, 3, 1, 2, 3] 复制 1 遍
rutils.arrayRepeat([1, 2, 3], 2) // [1, 2, 3, 1, 2, 3, 1, 2, 3] 复制 2 遍
rutils.arrayRepeat([1, 2, 3], 3) // [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3] 复制 3 遍
rutils.arrayRepeat([{ name: 'lisi' }], 1) // [{name: "lisi"},{name: "lisi"}] 复制 1 遍
```

### arraySubstr

> PS: 该方法并不是 和 slice 一样，二是和字符串的 substr 类似

语法：

```javascript
/**
 * @description: 让数组拥有和字符串的substr 一样的功能
 * @param { Array } arr：数组
 * @param { Number } startIndex：开始截取的索引值
 * @param { Number} len：截取的长度
 */
```

示例：

```javascript
'12345'.substr(0, 1) // '1'
'12345'.substr(0, 2) // '12'
'12345'.substr(0, 3) // '123'
'12345'.substr(1, 3) // '234'

let arr = [1, 2, 3, 4, 5]
rutils.arraySubstr(arr, 0, 1) // [1]
rutils.arraySubstr(arr, 0, 2) // [1,2]
rutils.arraySubstr(arr, 0, 3) // [1,2,3]
rutils.arraySubstr(arr, 1, 3) // [2,3,4]
```

### delByIndexs

> 根据索引数组删除数组对应索引的值，我们知道从正序开始删除会改变数组的长度，进而下一次的删除索引就会错乱，delByIndexs 方法就是解决此问题的

语法：

```javascript
/**
 * @description: 数组删除
 * @param {Array} delIndexs:需要删除的索引数组
 * @param {Number} isDeep: 是否深度克隆
 */
```

示例：

```javascript
const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
// findIndexs 在上面已经实现，查询满足条件的所有所有值
const delIndexs = rutils.findIndexs(list, i => [2, 4, 7].includes(i.id)) // [1, 3, 6]
rutils.delByIndexs(list, delIndexs) // [{ id: 1 }, { id: 3 },  { id: 5 }, { id: 6 }]
```

### groupArchive

> 根据条件归档

语法：

```javascript
/**
 * @description:归档， 对一维 json 数组进行归档（根据 key）
 * @param {Array} arr:一维数组
 * @param {String} key：key 字符串
 */
```

示例：

```javascript
let books = [
    { date: '2月', name: '化学书' },
    { date: '1月', name: '历史书' },
    { date: '2月', name: '数学书' },
    { date: '3月', name: '语文书' },
    { date: '1月', name: '地理书' }
]
rutils.groupArchive(books, 'date')
/* 
[
    [
        {date: "2月", name: "化学书"}
        {date: "2月", name: "数学书"}
    ],
     [
        {date: "1月", name: "历史书"}
        {date: "1月", name: "地理书"}
    ],
     [
        {date: "3月", name: "语文书"}
    ],
] 
*/
```

### lastFind

> 数组 find 正向查询，但是没有 反向查询，lastFind 就是做这个事的

语法：

```javascript
/**
 * @description:反向查找
 * @param {Array} arr:数组
 * @param {Function} cb 回调函数
 */
```

示例：

```javascript
const list = [
    { type: 1, subType: 11 },
    { type: 2, subType: 22 },
    { type: 3, subType: 33 },
    { type: 4, subType: 44 },
    { type: 5, subType: 55 },
    { type: 3, subType: 34 },
    { type: 7, subType: 77 }
]
list.find(i => i.type == 3) //{type: 3, subType: 33}
rutils.lastFind(list, i => i.type == 3) //{type: 3, subType: 34}
rutils.lastFind(list, i => i.type == 33) //undefined
```

### lastFindIndex

> 数组 find 正向查询索引，但是没有 反向查询索引，lastFindIndex 就是做这个事的

语法：

```javascript
/**
 * @description:反向查找索引
 * @param {Array} arr:数组
 * @param {Function} cb 回调函数
 */
```

示例：

```javascript
const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 3 }, { id: 7 }]
rutils.lastFindIndex(list, i => i.id == 3) // 5
rutils.lastFindIndex(list, i => i.id == 33) // -1
```

### getTreePath

> 根据 树 的 id 根据完整的路径

语法：

```javascript
/**
 * @description: 查询树任一节点的完整路径
 * @param { Array } list：树数组
 * @param { String } id：节点id
 * @param { String } idAlias：id别名,默认 id
 * @param { String } nameAlias：name别名，默认 name
 * @param { String } children：children别名，默认 children
 * @param { Boolean } isTextPath：是否返回文字路径，默认 true
 */
 getTreePath(list, id, { idAlias = 'id', nameAlias = 'name', children = 'children' }, isTextPath = true)
```

示例：

```js

rutils.getTreePath(cityData, '仙桃市', { idAlias: 'text', nameAlias: 'value' }))
rutils.getTreePath(cityData, '429004', { idAlias: 'value', nameAlias: 'text' }, false))
```

### queryTreeNode

> 查询树节点

语法：

```javascript
/**
 * @description: 查询树节点
 * @param { Object | Array } tree:树
 * @param { String } id：id
 * @param { String } idAlias：id别名
 * @param { String } children：children：别名
 */

queryTreeNode(tree,id,{idAlias = 'id',  children = 'children'})
```

示例：

```javascript
rutils.queryTreeNode(cityData, '429004', { idAlias: 'value', nameAlias: 'text' })
```

### queryTreePath

> 根据用户自定义条件 查询 树节点

语法：

```javascript
/**
 * @description: 找到树节点
 * @param { Object | Array } tree 树
 * @param { Function } func：回调函数
 * @param { Array } path：路径
 */
queryTreePath(tree, func, (path = []))
```

示例：

```javascript
rutils.queryTreePath(cityData, node => node.value === '429004')
```
