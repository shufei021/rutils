# ruitls.js

## API汇总

### 基础类

| 名称        | 描述                                   |
| ----------- | -------------------------------------- |
| isEmpty     | 是否为空值                             |
| isEquals    | 深度比较两者的值是否相等，值为基本类型 |
| isArray     | 是否为数组                             |
| isDate      | 是否为日期                             |
| isBoolean   | 是否为布尔                             |
| isFunction  | 是否为函数                             |
| isNull      | 是否为null                             |
| isNumber    | 是否为数字                             |
| isObject    | 是否为对象                             |
| isRegExp    | 是否为正则                             |
| isString    | 是否为字符串                           |
| isType      | 是否为指定类型                         |
| isUndefined | 是否为undefined                        |


### 数组类


| 名称                | 描述                                                  |
| ------------------- | :---------------------------------------------------- |
| <a href="#r-union">union</a>               | 求数组并集                                            |
| <a href="#r-unique">unique</a>              | 数组去重                                              |
| <a href="#r-intersection">intersection</a>        | 深度比较两者的值是否相等，值为基本类型                |
| <a href="#r-arrayfill">arrayFill</a>           | 生成一个指定长度的数字，并填充                        |
| <a href="#r-arraytoobject">arrayToObject</a>       | 是否为日期                                            |
| <a href="#r-arraytotree">arrayToTree</a>         | 数组转树                                              |
| <a href="#r-delby">delBy</a>               | 根据条件删除数组中的值                                |
| <a href="#r-except">except</a>              | 求数组差集                                          |
| <a href="#r-exchangepostion">exchangePostion</a>     | 交换数组中任一两个值的位置                            |
| <a href="#r-flatten">flatten</a>             | 指定深度扁平化数组                                    |
| <a href="#r-group">group</a>               | 一维数组转二维数组 (分组)                             |
| <a href="#r-indexofall">indexOfAll</a>          | 返回数组中某值的所有索引，数组形式返回                |
| <a href="#r-insetpostion">insetPostion</a>        | 指定数组中某个索引的值 取出来，再插入到数组的任一位置 |
| <a href="#r-isrepeat">isRepeat</a>            | 数组内是否有重复值                                    |
| <a href="#r-mean">mean</a>                | 数组平均数                                            |
| <a href="#r-range">range</a>               | 生成 起止数字间（包含起止数字）的升序数组             |
| <a href="#r-rangerandom">rangeRandom</a>         | 生成两数之间指定长度（所需产生的个数）的随机数组      |
| <a href="#r-rangescopestartzore">rangeScopeStartZore</a> | 生成最小数字 0 到max最大值 的升序数组                 |
| <a href="#r-rangestep">rangeStep</a>           | 生成指定范围内指定步长的数组                          |
| <a href="#r-sample">sample</a>              | 指定数组中获取随机数(1 位)                            |
| <a href="#r-sum">sum</a>                 | 求和                                                  |
| <a href="#r-timestotal">timesTotal</a>          | 数组中出现次数统计                                    |

### 对象类

| 名称                                 | 描述            |
| ------------------------------------ | :-------------- |
| <a href="#r-clone">clone</a>         | 对象浅拷贝      |
| <a href="#r-deepclone">deepClone</a> | 对象深拷贝      |
| <a href="#r-findkey">findKey</a>     | 查询某个值的key |
| <a href="#r-merge">merge</a>         | 合并两个对象    |

### 数字类

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

### DOM 类

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

### 文件类

| 名称                                                         | 描述                                                         |
| ------------------------------------------------------------ | :----------------------------------------------------------- |
| <a href="#r-base64toblob">base64ToBlob</a>                   | base64转为流                                                 |
| <a href="#r-base64tofile">base64ToFile</a>                   | base64转文件                                                 |
| <a href="#r-blobtobase64">blobToBase64</a>                   | 文件流转为base64                                             |
| <a href="#r-blobtofile">blobToFile</a>                       | 文件流转为File文件                                           |
| <a href="#r-bytesformat">bytesFormat</a>                     | 字节自动转换为：B、KB、MB、GB、TB....                        |
| <a href="#r-downloadbybase64">downloadByBase64</a>           | base64文件下载                                               |
| <a href="#r-downloadbyimglink">downloadByImgLink</a>         | 根据图片URL下载图片                                          |
| <a href="#r-downloadbyimgselector">downloadByImgSelector</a> | 根据img标签选择器下载图片，如：`<img src="xxx.png" id="img" />`,`downloadByImgSelector('#img')` |
