# URL相关

## API

| 名称                                                   | 描述             |
| ------------------------------------------------------ | :--------------- |
| <a href="#r-getquery">getQuery</a>                     | 获取url查询参数  |
| <a href="#r-urlserialize">urlSerialize</a>             | url参数序列化    |
| <a href="#r-randomhexcolorcode">randomHexColorCode</a> | 随机十六进制颜色 |



### R.getQuery

> 获取url查询参数，不传递参数则为当前窗口

```bash
R.getQuery(value)
```

**参数：**

​	1. `value` {string} 需要获取的URL，默认为当前窗口上的URL

**返回值：**

​	`objet`

​	解析出的url参数，并做了 `encodeURIComponent` 转码处理

 **例子：**

```javascript
const url = "https://juejin.cn/search?keyword=%E8%B6%85%E8%84%B1%E8%87%AA%E7%84%B6"
getQuery(url)
// => { keyword: "超脱自然" }
```





### R.urlSerialize

> url参数序列化

```bash
R.urlSerialize(value1, value2)
```

**参数：**

1. `value1` {string} URL地址，如果没有URL可传入`空字符`占位
2. `value2` {object} 需要的参数

**返回值：**

​	`string`

​	由地址、参数拼接好的字符，通过`encodeURIComponent`编码后的

 **例子：**

```javascript
// 示例1：
urlSerialize("www.baidu.com/search", {
  keyword: "成都",
  date: "2021-06-17"
})
// => "www.baidu.com/search?keyword=%E6%88%90%E9%83%BD&date=2021-06-17"


// 示例2：
urlSerialize('', {
  keyword: "成都",
  date: "2021-06-17"
})
// => "?keyword=%E6%88%90%E9%83%BD&date=2021-06-17"
```



### R.urlTmtFmt

> URL地址栏中的模板解析

```bash
R.urlTmtFmt(value1, value2)
```

**参数：**

1. `value1` {string} URL地址，如：www.baidu.com/test/search/{corpId}/{userId}
2. `value2` {object} 需要的参数

**返回值：**

​	`string`

​	解析之后的字符

 **例子：**

```javascript
const url = "www.baidu.com/test/search/{userId}/{keywords}"
urlTmtFmt(url, {
  userId: "12345",
  keywords: "成都"
})

// => "www.baidu.com/test/search/12345/成都"
```