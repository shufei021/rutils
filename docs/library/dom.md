# DOM 相关

## API

| 名称                                               | 描述                                                       |
| -------------------------------------------------- | :--------------------------------------------------------- |
| <a href="#backtop">backTop</a>                     | 回到顶部                                                   |
| <a href="#bindevent">bindEvent</a>                 | 绑定事件                                                   |
| <a href="#unbindevent">unbindEvent</a>             | 移除事件                                                   |
| <a href="#trigger">trigger</a>                     | 触发原生事件、自定义事件                                   |
| <a href="#bottomvisible">bottomVisible</a>         | 滚动条情况下，页面最底部是否出现在可视区域内               |
| <a href="#contains">contains</a>                   | DOM 元素 `A` 是否包含在元素 `B` 节点中，常适用于 outclick  |
| <a href="#debounce">debounce</a>                   | 防抖函数                                                   |
| <a href="#throttle">throttle</a>                   | 节流函数                                                   |
| <a href="#dynamicaddcss">dynamicAddCss</a>         | 动态加载 css                                               |
| <a href="#dynamicaddscript">dynamicAddScript</a>   | 动态加载 js 脚本                                           |
| <a href="#getattr">getAttr</a>                     | 获取元素属性值                                             |
| <a href="#getmaxzindex">getMaxZIndex</a>           | 获取 DOM 中 `z-index` 最高的元素                           |
| <a href="#getscrollposition">getScrollPosition</a> | 获取元素的滚动位置坐标                                     |
| <a href="#getscrollxy">getScrollXY</a>             | 获取网页被卷去的位置                                       |
| <a href="#getstyle">getStyle</a>                   | 获取元素样式，如：`width`、`height`、`padding`、`margin`等 |
| <a href="#hide">hide</a>                           | 隐藏元素                                                   |
| <a href="#isellipsis">isEllipsis</a>               | 内容是否超出省略                                           |
| <a href="#loadscript">loadScript</a>               | 加载外部脚本                                               |
| <a href="#smoothscroll">smoothScroll</a>           | 顺滑的滚动到当前元素                                       |
| <a href="#isscrollbottom">isScrollBottom</a>       | 元素是否滚动到最底部                                       |
| <a href="#addstylecss">addStyleCss</a>             | 添加style的css                                       |
| <a href="#getscrolldirection">getScrollDirection</a>             | 获取滚动方向                                       |
| <a href="#getscrollerwidth">getScrollerWidth</a>             | 获取滚动条宽带                                       |
| <a href="#selectrangebyelement">selectRangeByElement</a>             | 通过元素选中范围值                                       |
| <a href="#selecttextbyelement">selectTextByElement</a>             | 通过元素选中文本                                       |
| <a href="#copytext">copyText</a>             | 复制文本内容                                       |
### backTop

> 回到顶部

```javascript
rutils.backTop(value1, value2)
```

**参数：**

​ 1.`value1` { string } 回到顶部的元素 ID

​ 1.`value2` { string } 按钮距离底部间距, 默认为：`100`

**返回值：**

​ `void`

​ 文件流

**例子：**

```html
<button id="go-top-btn">回到顶部</button>

<script>
    rutils.backTop('#go-top-btn')
</script>
```

### bindEvent

> 绑定 DOM 事件

```javascript
rutils.bindEvent(value1, value2, value3)
```

**参数：**

​ 1.`value1` {element} 绑定元素

​ 2.`value2` {string} 事件名称，不需要加`on`前缀

​ 3.`value3` {function} 事件回调函数

**返回值：**

​ `void`

**例子：**

```javascript
rutils.bindEvent(document.body, 'click', function (e) {
    console.log(e) //event
})
```

### unbindEvent

> 解绑事件监听

```javascript
rutils.unbindEvent(value1, value2, value3)
```

**参数：**

​ 1.`value1` {element} 元素

​ 2.`value2` {string} 事件名称、类型

​ 3.`value3` {function} 事件回调处理函数

**返回值：**

​ `void`

**例子：**

```javascript
const btn = document.querySelector('#test-btn')
const handlerClick = () => {
    console.log('btn点击事件触发')
    rutils.unbindEvent(btn, 'click', handlerClick) // 移除事件
}
rutils.bindEvent(btn, 'click', handlerClick) // 绑定事件
```

### trigger

> 手动触发已有和自定义事件类型函数

```javascript
rutils.trigger(value1, value2)
```

**参数：**

​ 1.`value1` {element} 元素

​ 2.`value2` {string} 事件名称、类型

**返回值：**

​ `void`

**例子：**

```javascript
const btn = document.querySelector('#test-btn')
btn.addEventListener('click', () => {
    console.log('btn点击事件触发')
})
rutils.trigger(btn, 'click') // 触发按钮的click事件
```

### bottomVisible

> 滚动条情况下，页面最底部是否出现在可视区域内 。<span style="color: red;">日常用于：上拉加载更多</span>

```javascript
rutils.bottomVisible()
```

**参数：**

​ 无

**返回值：**

​ `boolean`

​ true：已出现在可视区域 | false 未出现在可视区域

**例子：**

```javascript
// 滚动到底部分页
window.addEventListener(
    'scroll',
    () => {
        const isVisible = rutils.bottomVisible()
        if (isVisible) {
            console.log('下一页数据加载中...')
        }
    },
    false
)
```

### contains

> DOM 元素 `A` 是否包含在元素 `B` 节点中，常适用于 outclick

```javascript
rutils.contains(value1, value2)
```

**参数：**

​ 1.`value1` {element|string} 父容器也就是 B，选择器或者元素自身；

​ 1.`value2` {element|string} 子内容；

**返回值：**

​ `boolean`

​ true: 包含在父级中 | false:不在传入的容器中

**例子：**

```html
<div class="father-wrap">
    <h1 class="sub-content">我就是子内容</h1>
</div>

<script>
    // 1.传递选择器
    rutils.contains('.father-wrap', '.sub-content')
    // => true

    // 2.传递元素
    rutils.contains(document.querySelector('.father-wrap'), document.querySelector('.sub-content'))
    // => true
</script>
```

### debounce

> 防抖函数，日常用语滚动防抖、input 输入防抖等..

```javascript
rutils.debounce(value1, value2, value3)
```

**参数：**

​ 1.`value1` {function} 事件处理函数

​ 1.`value2` {number} 事件响应函数执行需求的单位时间, 单位：毫秒

​ 1.`?value3` {boolean} 是否立即执行

**返回值：**

​ `function`

​ 借助闭包二次包装后的事件处理函数

**例子：**

```javascript
// 1.不立即执行
window.addEventListener(
    'scroll',
    rutils.debounce(() => {
        console.log('500毫秒后 go go go~')
    }, 500),
    false
)

// 2.立即执行
window.addEventListener(
    'scroll',
    rutils.debounce(
        () => {
            console.log('直接 go go go~')
        },
        500,
        true
    ),
    false
)
```

### throttle

> 节流

```javascript
rutils.throttle(value1, value2, value3)
```

**参数：**

​ 1.`value1` {function} 事件处理函数

​ 2.`value2` {number} 事件响应函数执行需求的单位时间, 单位：毫秒

​ 3.`?value3` {object} 配置对象

​ 3-1.`value3.immediate` {boolean} 是否为立即执行

​ 3-2.`value3.trailing` {boolean} 最后还要执行一次

**返回值：**

​ `function`

​ 借助闭包二次包装后的事件处理函数

**例子：**

```javascript
// 1.不立即执行
window.addEventListener(
    'scroll',
    rutils.throttle(() => {
        console.log('500毫秒后 go go go~')
    }, 500),
    false
)

// 2.立即执行
window.addEventListener(
    'scroll',
    rutils.throttle(
        () => {
            console.log('直接 go go go~')
        },
        500,
        {
            immediate: true
        }
    ),
    false
)
```

### dynamicAddCss

> 动态添加 css 文件

```javascript
rutils.dynamicAddCss(value1, value2)
```

**参数：**

​ 1.`value1` {string} css 文件名，无须写后缀

​ 2.`value2` {string} css 文件前缀

**返回值：**

​ `promise<element>`

​ 返回一个 link 标签

**例子：**

```javascript
// 引入当前项目中的，common.css文件
rutils
    .dynamicAddCss('./style/common')
    .then(el => {
        console.log('css引入成功！')
    })
    .catch(err => {
        console.log('css引入失败：', err)
    })
```

### dynamicAddScript

> 动态异步加载 `script` 脚本

```javascript
rutils.dynamicAddScript(value)
```

**参数：**

​ 1.`value` {string | array} 脚本地址，多个则传入数组

**返回值：**

​ `promise<void>`

**例子：**

```javascript
// 1.单个加载脚本
rutils
    .dynamicAddScript('www.baidu.com/source/js/test.js')
    .then(() => {
        console.log('脚本加载成功')
    })
    .catch(err => {
        console.log('脚本加载失败：', err)
    })

// 1.多个加载脚本,传入数组
rutils
    .dynamicAddScript(['www.baidu.com/source/js/test.js', 'www.baidu.com/source/js/test2.js', 'www.baidu.com/source/js/test3.js', 'www.baidu.com/source/js/test4.js'])
    .then(() => {
        console.log('脚本加载成功')
    })
    .catch(err => {
        console.log('脚本加载失败：', err)
    })
```

### getAttr

> 获取元素的属性值

```javascript
rutils.getAttr(value1, value2)
```

**参数：**

​ 1.`value1` {element} 元素

​ 2.`value2` {string} 属性 key，如： `class`

**返回值：**

​ `string`

​ 格式化后的文件大小，如：30KB、2MB、50GB....

**例子：**

```javascript
rutils.getAttr(document.querySelector('#app'), 'id')
```

### getMaxZIndex

> 获取 DOM 中 `z-index` 最高的元素

```javascript
rutils.getMaxZIndex()
```

**参数：**

​ 无

**返回值：**

​ `number`

​ 计算层级后的最大值

**例子：**

```javascript
rutils.getMaxZIndex()
// => 17
```

### getScrollPosition

> 获取元素的滚动位置坐标

```javascript
rutils.getScrollPosition(value)
```

**参数：**

​ 1.`value` {element} 元素

**返回值：**

​ `object`

```
{
	x: 0,
	y: 300
}
```

**例子：**

```javascript
rutils.getScrollPosition(document.querySelector('#container'))
// => {x: 0, y: 300}
```

### getScrollXY

> 获取网页被卷去的位置

```javascript
rutils.getScrollXY()
```

**参数：**

​ 无

**返回值：**

​ `object`

```javascript
// 分别为offsetLeft，offsetTop
{
  x: 0,
  y:  200
}
```

**例子：**

```javascript
rutils.getScrollXY()
```

### getStyle

> 获取元素样式，如：`width`、`height`、`padding`、`margin`等

```javascript
rutils.getStyle(value1, value2)
```

**参数：**

​ 1.`value1` {element} 元素

​ 1.`value2` {string} 属性 key

**返回值：**

​ `string`

​ 如：width、height、padding、margin 等

**例子：**

```javascript
rutils.getStyle(document.body, 'width')
// => "1290px"

rutils.getStyle(document.body, 'color')
// => "rgb(44, 62, 80)"
```

### setAttr

> 设置元素属性，如：class、id、style 等内容

```javascript
rutils.setAttr(value1, value2)
```

**参数：**

​ 1.`value1` {element} 元素

​ 1.`value2` {object} 设置的属性对象

**返回值：**

​ `element`

**例子：**

```javascript
rutils.setAttr(document.body, {
    class: '1',
    id: 'test-id'
})
// => body
```

### hide

> 隐藏元素

```javascript
rutils.hide(value)
```

**参数：**

​ 1.`value` {string} 元素选择器

**返回值：**

​ `string`

​ 如：width、height、padding、margin 等

**例子：**

```javascript
rutils.hide('.box')
```

### isEllipsis

> 内容是否超出省略

```javascript
rutils.isEllipsis(value)
```

**参数：**

​ 1.`value` {element} 元素

**返回值：**

​ `boolean`

​ true: 超出 | false:未超出

**例子：**

```javascript
rutils.isEllipsis(document.body)
// => false
```

### loadScript

> 动态加载外部 js 脚本

```javascript
rutils.loadScript(value1, value2)
```

**参数：**

​ 1.`value1` {element} 脚本地址 UrutilsL

​ 2.`value2` {object} 属性对象

**返回值：**

​ `promise<element>`

​ 由于操作涉及到异步，返回的是 Promise.resolve(res), res 为 script 元素

**例子：**

```javascript
// 1.默认使用
rutils
    .loadScript('www.baiu.com/source/js/common.js')
    .then(el => {
        console.log('加载成功：', el)
    })
    .catch(err => {
        console.log('加载失败：', err)
    })

// 2.设置属性
rutils
    .loadScript('www.baiu.com/source/js/common.js', {
        id: 'load-script',
        type: 'sync-load-script'
    })
    .then(el => {
        console.log('加载成功：', el)
    })
    .catch(err => {
        console.log('加载失败：', err)
    })
```

### smoothScroll

> 顺滑到某个元素

```javascript
rutils.smoothScroll(value)
```

**参数：**

​ 1.`value` {element} 元素

**返回值：**

​ 无

**例子：**

```javascript
rutils.smoothScroll('.test-btn')
```

### isScrollBottom

> 判断元素是否滚动到最低部，常用语底部加载更多

```javascript
rutils.isScrollBottom(value)
```

**参数：**

​ 1.`value` {element | string} 元素或选择器

**返回值：**

​ `boolean`

​ true: 底部 | false: 非底部

**例子：**

```javascript
// 1.选择器
rutils.isScrollBottom('.scoll-wrap')
// => true

// 2.元素
rutils.isScrollBottom(document.querySelector('.scoll-wrap'))
// => true
```


### addstylecss

> 添加style中的css，常用于rem转换后的class类，再重置成 像px单位

**语法**
```javascript
addStyleCss(styleId,arr)
```

**参数**
```javascript
/**
 *  根据style 的id 找到对应的style 标签，在里面插入css
 * @param {*} styleId : style 的 id 值
 * @param {*} arr ：样式列表
 * @returns viod
 */
```

### getScrollDirection

> 获取滚动方向

**语法**
```javascript
getScrollDirection(scroller)
```

**参数**
```javascript
/**
 * @description 获取滚动方向
 * @param { Element | HTMLElement | Window } scroller 滚动容器元素
 * @returns Object {x,y}
 */
```

### getScrollerWidth

> 获取滚动条宽度

**语法**
```javascript
getScrollerWidth(el)
```

**参数**
```javascript
/**
 * 获取滚动条宽度
 * @param {*} el 滚动容器,非必填
 * @returns 滚动条宽度
 */
```

**示例**

```js
// 如果是异步设置了滚动条宽度，且传入了el，则返回值是一个Promise对象
rutis.getScrollerWidth(el).then(width=>{
    console.log(width)
})
// 如果想直接获取滚动条宽度，什么不需求传，返回值就是滚动条的宽度值
rutis.getScrollerWidth()
```

### selectRangeByElement

> 主动选中文本范围 触发回调

**语法**
```javascript
selectRangeByElement(o, fn)
```

**参数**
```javascript
/**
 * @description 通过元素进行范围选中
 * @param {Element} o 
 * @param {Function} fn 
 */
```

```js
rutils.selectByElement(document, (txt, tar)=> {
    alert("文字属于" + tar.tagName + "元素，选中内容为：" + txt);
})
```

### selectTextByElement

> 手动选中元素里面的内容函数

**语法**
```javascript
selectTextByElement(element)
```

**参数**
```javascript
/**
 * @description 设置元素里面文字呈选中状态
 * @param {Element | String} element 
 */
```

```js
// html 

/*
<body>
 <div class="container">js手动选中元素里面的内容函数</div>
</body>

*/
rutils.selectTextByElement('.container')// 类 container 元素里面的内容都被选中
```

### copyText

> 复制文本内容

**语法**
```js
copyText(copyContentStr)
```

**参数**

`@param {String} copyContentStr:` 传入的复制的文本内容

**示例**
```js
rutils.copyText('测试的文本内容')
```