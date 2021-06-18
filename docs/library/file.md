# 文件相关

## API



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

### R.base64ToBlob

> base64转为文件流

```javascript
R.base64ToBlob(value)
```

**参数：**

​	1.`value` { string } base64

**返回值：**

​	`blob`

​	文件流

 **例子：**

```javascript
let res = base64ToBlob('data:image/png;base64,......')
console.log(Object.prototype.toString.call(res) === '[object Bolb]') //判断数据类型
// => true
```



### R.base64ToFile

> base64转为File文件

```javascript
R.base64ToFile(value1, value2)
```

**参数：**

​	1.`value1` {string} base64字符

​	2.`value2` {string} 文件名称，如：`测试文件.png`

**返回值：**

​	`file`

​	返回的数据为 `new File()`

 **例子：**

```javascript

```



### R.blobToBase64

> blob文件流转为Base64

```javascript
R.blobToBase64(value)
```

**参数：**

​	1.`value1` {blob} 文件流数据

**返回值：**

​	`string`

​	转换后的base64字符串

 **例子：**

```javascript

```





### R.blobToFile

> 文件流转为File对象

```javascript
R.blobToFile(value1, value2)
```

**参数：**

​	1.`value1` {blob} blob文件流数据；

​	1.`value2` {string} 文件名称；

**返回值：**

​	`file`

​	转换后的 `new File()` 数据

 **例子：**






### R.fileToBase64

> 文件流转文件

```javascript
R.fileToBase64(value)
```

**参数：**

​	1.`value` {file} file文件对象

**返回值：**

​	`string`

​	转换后的base64字符数据

 **例子：**

```javascript
fileToBase64(new File())
```





### R.fileToBlob

> 文件转为文件流，由于有异步操作，所以返回值为一个`Promise`

```javascript
R.fileToBlob(value)
```

**参数：**

​	1.`value` {file} File文件

**返回值：**

​	`promise<blob>`

​	`Promise.resolve(res)`， res则为 `new Blob` 文件流数据

 **例子：**

```javascript
// 异步
fileToBlob(new File()).then(data => {
	let dataType = Object.prototype.toString.call(data)
  console.log(dataType === '[object Blob]');
  // => true
}).catch(err => {
  console.log(err)
})

```



### R.bytesFormat

> 文件大小字节格式化，B、KB、MB、GB、TB...
>
> 分别有：`['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']`

```javascript
R.bytesFormat(value)
```

**参数：**

​	1.`value` {number} 文件的大小, 单位：`字节`

**返回值：**

​	`string`

​	格式化后的文件大小，如：30KB、2MB、50GB....

 **例子：**

```javascript
bytesFormat(1024)
// => "1.00 KB"

bytesFormat(2399624)
// => "2.29 MB"

bytesFormat(3100399624)
// => "2.89 GB"

bytesFormat(3100399621124)
// => "2.82 TB"

```



### R.downloadByBase64

> 通过base64字符串下载文件

```javascript
R.downloadByBase64(value1, value2)
```

**参数：**

​	1.`value1` {string} base64字符串

​	1.`value2` {string} 文件名称；

**返回值：**

​	`void`

 **例子：**

```javascript
//提示：文件下载的时候不需处理掉头部，头部全部传入方法中，方法内部坐了头部信息处理；
downloadByBase64('data:image/png;base64,......', '测试base64下载.png')
```



### R.downloadByImgLink

> 通过一个图片的 `URL` 下载一张图片

```javascript
R.downloadByImgLink(value1, value2, value3)
```

**参数：**

​	1.`value1` {string} 图片的URL地址

​	2.`value2` {number} 图片宽度，默认为自身宽；

​	3.`value3` {number} 图片高度，默认为自身高；

**返回值：**

​	`promise<string>`

​	返回为`Promise`，其`resolve`中数据为图片的base64字符；

 **例子：**

```javascript
// 1.默认用法
downloadByImgLink('https://pics5.baidu.com/feed/26607a01094d08f17d.png')

// 2.设置自定义宽、高
downloadByImgLink('https://pics5.baidu.com/feed/26607a01094d08f17d.png', 200, 200)
```







### R.downloadByImgSelector

> 通过DOM中的img标签，使用选择器下载图片

```javascript
R.downloadByImgSelector(value1, value2)
```

**参数：**

​	1.`value1` {stirng} dom中的img标签选择器，如：`#user-avatar`；

​	1.`value2` {string} 图片名称；

**返回值：**

​	`void`

 **例子：**

```html
<img src="https://pics5.baidu.com/feed/26607a01094d08f17d.png" id="test-img" />


<script>
	downloadByImgSelector("#test-img", "测试下载图片.png")
</script>
```

