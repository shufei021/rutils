# URL 相关

## API

| 名称                                     | 描述               |
| ---------------------------------------- | :----------------- |
| <a href="#getquery">getQuery</a>         | url 查询参数获取   |
| <a href="#urlserialize">urlSerialize</a> | url 参数序列化     |
| <a href="#urltmtfmt">urlTmtFmt</a>       | url 模板参数格式化 |

### getQuery

获取 url 查询参数，不传递参数则为当前页面的 URL

**语法：**

```javascript
rutils.getQuery(val)
```

**示例：**

```javascript
rutils.getQuery('https://juejin.cn/search?keyword=%E8%B6%85%E8%84%B1%E8%87%AA%E7%84%B6') // { keyword: "超脱自然" }

rutils.getQuery() // 获取当前页面的url的参数
```

### urlSerialize

url 参数序列化

**语法：**

```javascript
rutils.urlSerialize(value1, value2)
```

**示例：**

```javascript
// 示例1：
rutils.urlSerialize('www.baidu.com/search', {
    keyword: '成都',
    date: '2021-06-17'
})
// => "www.baidu.com/search?keyword=%E6%88%90%E9%83%BD&date=2021-06-17"

// 示例2：
rutils.urlSerialize('', {
    keyword: '成都',
    date: '2021-06-17'
})
// => "?keyword=%E6%88%90%E9%83%BD&date=2021-06-17"
```

### urlTmtFmt

URL 地址栏中的模板解析

**语法：**

```javascript
/**
 * url模板 参数格式化
 *
 *  @param {String}  URL: 模板路径，例：'/uap/msg/announcementRecord/{sysId}/{tenantId}/{userId}' 或 '/uap/msg/announcementRecord'
 *  @param {Object}  params: 传入的参数，包含路径参数 或 不包含，默认 {}
 *  @param {Boolean} flag：是否拼接路径和查询参数
 */
rutils.urlTmtFmt(urlTmp, params)
```

**示例：**

```javascript
const url = 'www.baidu.com/test/search/{userId}/{keywords}'

rutils.urlTmtFmt(url, {
    userId: '12345',
    keywords: '成都'
})

//  "www.baidu.com/test/search/12345/成都"
```
