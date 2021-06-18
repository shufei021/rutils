# DOM相关

## API



| 名称                                                 | 描述                                                       |
| ---------------------------------------------------- | :--------------------------------------------------------- |
| <a href="#r-backtop">backTop</a>                     | 回到顶部                                                   |
| <a href="#r-bindevent">bindEvent</a>                 | 绑定事件                                                   |
| <a href="#r-unbindevent">unbindEvent</a>             | 移除事件                                                   |
| <a href="#r-trigger">trigger</a>                     | 触发原生事件、自定义事件                                   |
| <a href="#r-bottomvisible">bottomVisible</a>         | 滚动条情况下，页面最底部是否出现在可视区域内               |
| <a href="#r-contains">contains</a>                   | DOM 元素 `A` 是否包含在元素 `B` 节点中，常适用于outclick   |
| <a href="#r-debounce">debounce</a>                   | 防抖函数                                                   |
| <a href="#r-throttle">throttle</a>                   | 节流函数                                                   |
| <a href="#r-dynamicaddcss">dynamicAddCss</a>         | 动态加载css                                                |
| <a href="#r-dynamicaddscript">dynamicAddScript</a>   | 动态加载js脚本                                             |
| <a href="#r-getattr">getAttr</a>                     | 获取元素属性值                                             |
| <a href="#r-getmaxzindex">getMaxZIndex</a>           | 获取DOM中 `z-index` 最高的元素                             |
| <a href="#r-getscrollposition">getScrollPosition</a> | 获取元素的滚动位置坐标                                     |
| <a href="#r-getscrollxy">getScrollXY</a>             | 获取网页被卷去的位置                                       |
| <a href="#r-getstyle">getStyle</a>                   | 获取元素样式，如：`width`、`height`、`padding`、`margin`等 |
| <a href="#r-hide">hide</a>                           | 隐藏元素                                                   |
| <a href="#r-isellipsis">isEllipsis</a>               | 内容是否超出省略                                           |
| <a href="#r-loadscript">loadScript</a>               | 加载外部脚本                                               |
| <a href="#r-smoothscroll">smoothScroll</a>           | 顺滑的滚动到当前元素                                       |
| <a href="#r-isscrollbottom">isScrollBottom</a>       | 元素是否滚动到最底部                                       |

### R.backTop

> 回到顶部

```javascript
R.backTop(value1, value2)
```

**参数：**

​	1.`value1` { string } 回到顶部的元素ID

​	1.`?value2` { string } 按钮距离底部间距, 默认为：`100`

**返回值：**

​	`void`

​	文件流

 **例子：**

```html
<button id="go-top-btn">
  回到顶部
</button>

<script>
	backTop('#go-top-btn')
</script>
```



### R.bindEvent

> 绑定DOM事件

```javascript
bindEvent(value1, value2, value3)
```

**参数：**

​	1.`value1` {element} 绑定元素

​	2.`value2` {string} 事件名称，不需要加`on`前缀

​	3.`value3` {function} 事件回调函数

**返回值：**

​	`void`

 **例子：**

```javascript
bindEvent(document.body, "click", function (e) {
	console.log(e) //event
})
```



### R.unbindEvent

> 解绑事件监听

```javascript
R.unbindEvent(value1, value2, value3)
```

**参数：**

​	1.`value1` {element} 元素

​	2.`value2` {string} 事件名称、类型

​	3.`value3` {function} 事件回调处理函数

**返回值：**

​	`void`

 **例子：**

```javascript
const btn = document.querySelector("#test-btn")
const handlerClick = () => {
  console.log("btn点击事件触发")
  unbindEvent(btn, "click", handlerClick) // 移除事件
}
bindEvent(btn, "click", handlerClick)// 绑定事件
```



### R.trigger

> 手动触发已有和自定义事件类型函数

```javascript
R.trigger(value1, value2)
```

**参数：**

​	1.`value1` {element} 元素

​	2.`value2` {string} 事件名称、类型

**返回值：**

​	`void`

 **例子：**

```javascript
const btn = document.querySelector("#test-btn")
btn.addEventListener("click", () => {
  console.log("btn点击事件触发")
})
trigger(btn, "click") // 触发按钮的click事件
```





### R.bottomVisible

> 滚动条情况下，页面最底部是否出现在可视区域内 。<span style="color: red;">日常用于：上拉加载更多</span>

```javascript
R.bottomVisible()
```

**参数：**

​	无

**返回值：**

​	`boolean`

​	true：已出现在可视区域 | false未出现在可视区域

 **例子：**

```javascript
// 滚动到底部分页
window.addEventListener("scroll", () => {
  const isVisible = bottomVisible()
  if (isVisible) {
    console.log("下一页数据加载中...")
  }
}, false)
```





### R.contains

> DOM 元素 `A` 是否包含在元素 `B` 节点中，常适用于outclick

```javascript
R.contains(value1, value2)
```

**参数：**

​	1.`value1` {element|string} 父容器也就是B，选择器或者元素自身；

​	1.`value2` {element|string} 子内容；

**返回值：**

​	`boolean`

​	true: 包含在父级中 | false:不在传入的容器中

 **例子：**

```html
<div class="father-wrap">
  <h1 class="sub-content">我就是子内容</h1>	
</div>

<script>
  // 1.传递选择器
	contains('.father-wrap', '.sub-content');
  // => true
  
  // 2.传递元素
  contains(document.querySelector(".father-wrap"), document.querySelector(".sub-content"));
  // => true
</script>
```

### R.debounce

> 防抖函数，日常用语滚动防抖、input输入防抖等..

```javascript
R.debounce(value1, value2, value3)
```

**参数：**

​	1.`value1` {function} 事件处理函数

​	1.`value2` {number} 事件响应函数执行需求的单位时间, 单位：毫秒

​	1.`?value3` {boolean} 是否立即执行

**返回值：**

​	`function`

​	借助闭包二次包装后的事件处理函数

 **例子：**

```javascript
// 1.不立即执行
window.addEventListener("scroll", debounce(() => {
	console.log('500毫秒后 go go go~')
}, 500), false)

// 2.立即执行
window.addEventListener("scroll", debounce(() => {
	console.log('直接 go go go~')
}, 500, true), false)
```



### R.throttle

> 节流

```javascript
R.throttle(value1, value2, value3)
```

**参数：**

​	1.`value1` {function} 事件处理函数

​	2.`value2` {number} 事件响应函数执行需求的单位时间, 单位：毫秒

​	3.`?value3` {object} 配置对象

​			3-1.`value3.immediate` {boolean} 是否为立即执行

​			3-2.`value3.trailing` {boolean} 最后还要执行一次

**返回值：**

​	`function`

​	借助闭包二次包装后的事件处理函数

 **例子：**

```javascript
// 1.不立即执行
window.addEventListener("scroll", throttle(() => {
	console.log('500毫秒后 go go go~')
}, 500), false)

// 2.立即执行
window.addEventListener("scroll", throttle(() => {
	console.log('直接 go go go~')
}, 500, {
  immediate: true
}), false)
```





### R.dynamicAddCss

> 动态添加css文件

```javascript
R.dynamicAddCss(value1, value2)
```

**参数：**

​	1.`value1` {string} css文件名，无须写后缀

​	2.`?value2` {string} css文件前缀

**返回值：**

​	`promise<element>`

​	返回一个link标签

 **例子：**

```javascript
// 引入当前项目中的，common.css文件
dynamicAddCss("./style/common").then(el => {
  console.log("css引入成功！")
}).catch(err => {
  console.log("css引入失败：", err)
})
```



### R.dynamicAddScript

> 动态异步加载 `script` 脚本

```javascript
R.dynamicAddScript(value)
```

**参数：**

​	1.`value` {string | array} 脚本地址，多个则传入数组

**返回值：**

​	`promise<void>`

 **例子：**

```javascript
// 1.单个加载脚本
dynamicAddScript('www.baidu.com/source/js/test.js').then(() => {
	console.log("脚本加载成功")
}).catch(err => {
  console.log("脚本加载失败：", err)
})

// 1.多个加载脚本,传入数组
dynamicAddScript([
  'www.baidu.com/source/js/test.js',
  'www.baidu.com/source/js/test2.js',
  'www.baidu.com/source/js/test3.js',
  'www.baidu.com/source/js/test4.js'
]).then(() => {
	console.log("脚本加载成功")
}).catch(err => {
  console.log("脚本加载失败：", err)
})

```



### R.getAttr

> 获取元素的属性值

```javascript
R.getAttr(value1, value2)
```

**参数：**

​	1.`value1` {element} 元素

​	2.`value2` {string} 属性key，如： `class`

**返回值：**

​	`string`

​	格式化后的文件大小，如：30KB、2MB、50GB....

 **例子：**

```javascript
getAttr(document.querySelector('#app'), "id")
```



### R.getMaxZIndex

> 获取DOM中 `z-index` 最高的元素

```javascript
R.getMaxZIndex()
```

**参数：**

​	无

**返回值：**

​	`number`

​	计算层级后的最大值

 **例子：**

```javascript
getMaxZIndex()
// => 17
```



### R.getScrollPosition

> 获取元素的滚动位置坐标

```javascript
R.getScrollPosition(value)
```

**参数：**

​	1.`value` {element} 元素

**返回值：**

​	`object`

```
{
	x: 0,
	y: 300
}
```

 **例子：**

```javascript
R.getScrollPosition(document.querySelector("#container"))
// => {x: 0, y: 300}
```





### R.getScrollXY

> 获取网页被卷去的位置

```javascript
R.getScrollXY()
```

**参数：**

​	无

**返回值：**

​	`object`

```javascript
// 分别为offsetLeft，offsetTop
{
  x: 0,
  y:  200
}
```

 **例子：**

```javascript
getScrollXY()
```



### R.getStyle

> 获取元素样式，如：`width`、`height`、`padding`、`margin`等

```javascript
R.getStyle(value1, value2)
```

**参数：**

​	1.`value1` {element} 元素

​	1.`value2` {string} 属性key

**返回值：**

​	`string`

​	如：width、height、padding、margin等

 **例子：**

```javascript
getStyle(document.body, "width")
// => "1290px"

getStyle(document.body, "color")
// => "rgb(44, 62, 80)"
```



### R.setAttr

> 设置元素属性，如：class、id、style等内容

```javascript
R.setAttr(value1, value2)
```

**参数：**

​	1.`value1` {element} 元素

​	1.`value2` {object} 设置的属性对象 

**返回值：**

​	`element`

 **例子：**

```javascript
setAttr(document.body, {
  class: '1',
	id: 'test-id'
})
// => body
```





### R.hide

> 隐藏元素

```javascript
R.hide(value)
```

**参数：**

​	1.`value` {string} 元素选择器

**返回值：**

​	`string`

​	如：width、height、padding、margin等

 **例子：**

```javascript
hide('.box')
```





### R.isEllipsis

> 内容是否超出省略

```javascript
R.isEllipsis(value)
```

**参数：**

​	1.`value` {element} 元素

**返回值：**

​	`boolean`

​	true: 超出 | false:未超出

 **例子：**

```javascript
isEllipsis(document.body)
// => false
```





### R.loadScript

> 动态加载外部js脚本

```javascript
R.loadScript(value1, value2)
```

**参数：**

​	1.`value1` {element} 脚本地址URL

​	2.`value2` {object} 属性对象

**返回值：**

​	`promise<element>`

​	由于操作涉及到异步，返回的是Promise.resolve(res), res为script元素

 **例子：**

```javascript
// 1.默认使用
loadScript("www.baiu.com/source/js/common.js").then(el => {
	console.log("加载成功：", el)
}).catch(err => {
  console.log("加载失败：", err)
})

// 2.设置属性
loadScript("www.baiu.com/source/js/common.js", {
  id: "load-script",
  type: "sync-load-script"
}).then(el => {
	console.log("加载成功：", el)
}).catch(err => {
  console.log("加载失败：", err)
})
```



### R.smoothScroll

> 顺滑到某个元素

```javascript
R.smoothScroll(value)
```

**参数：**

​	1.`value` {element} 元素

**返回值：**

​	无

 **例子：**

```javascript
smoothScroll(".test-btn")
```



### R.isScrollBottom

> 判断元素是否滚动到最低部，常用语底部加载更多

```javascript
R.isScrollBottom(value)
```

**参数：**

​	1.`value` {element | string} 元素或选择器

**返回值：**

​	`boolean`

​	true: 底部 | false: 非底部

 **例子：**

```javascript
// 1.选择器
isScrollBottom(".scoll-wrap")
// => true


// 2.元素
isScrollBottom(document.querySelector(".scoll-wrap"))
// => true
```
