# 文件相关

> 可直接复制相关代码 在控制台输出结果

## API

| 名称                                                       | 描述    |
| ---------------------------------------------------------- | :--------------------------------- |
| <a href="#base64toblob">base64ToBlob</a>                   | base64 转 blob  |
| <a href="#base64tofile">base64ToFile</a>                   | base64 转 file     |
| <a href="#blobtobase64">blobToBase64</a>                   | blob 转 base64           |
| <a href="#blobtofile">blobToFile</a>                       | blob 转  file          |
| <a href="#filetobase64">fileToBase64</a>                   | file 转  base64          |
| <a href="#filetoblob">fileToBlob</a>                       | file 转  blob          |
| <a href="#bytesformat">bytesFormat</a>                     | 字节自动转换为：B、KB、MB、GB、TB    |
| <a href="#downloadbybase64">downloadByBase64</a>           | base64 文件下载   |
| <a href="#downloadbyimglink">downloadByImgLink</a>         | 根据图片 imgUrl 下载图片   |
| <a href="#downloadbyimgselector">downloadByImgSelector</a> | 根据 img 标签选择器下载图片|

### base64ToBlob

> base64 转 blob

**语法：**

```javascript
rutils.base64ToBlob(base64)
```

**示例：**

```javascript
rutils.base64ToBlob('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFrSURBVDhPjZJLLwNRFMe7EWInTUmEaGi9pyo0fYSi2pIQZSdsfQsbawtfwEotWvpWTZBYkZA2io2NT1Btqljoy/zde9thWmM4yS9z7p3zS86ZM4rhsB0CXNjBntrAJDQSDIRmwEUqNZQf8lB4Fmq/pYLP/A059wWnoIs4peUunwmG6CISmXs85B6RyWfxXHhBtpBjbN5so3m/V1puPxiDKeaCEGW+jHw5j+JHCSWSb93uoMmtkZY7Dg0wHi9VVWAkMgelh2PzagNWMrPt67v8KSs9Oih2W9Do7mFog1boj+bl5XfSKo14+g4XqTiu00lcphKwxFbQ6TPKy6/FNybXh+1kFSqvXl7meZ4Vu843YCJn59k6HKdrbE10bllZiG7/BBr21Gj1jqKNMEjEX/dMV2WOLVdVsJzeiWvE1Mhqvxnj0QVcPSUZNKd34hoxNTJtif6eKo+eQXNxm/XUyAL9oWmG1DsxkvL/sOMTgE8YwIjgtWoAAAAASUVORK5CYII=')
// Blob {size: 470, type: "image/png"} 
```

### base64ToFile

> base64 转 file

**语法：**
```javascript
rutils.base64ToFile(base64, fileName)
```

**示例：**
```js
rutils.base64ToFile('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFrSURBVDhPjZJLLwNRFMe7EWInTUmEaGi9pyo0fYSi2pIQZSdsfQsbawtfwEotWvpWTZBYkZA2io2NT1Btqljoy/zde9thWmM4yS9z7p3zS86ZM4rhsB0CXNjBntrAJDQSDIRmwEUqNZQf8lB4Fmq/pYLP/A059wWnoIs4peUunwmG6CISmXs85B6RyWfxXHhBtpBjbN5so3m/V1puPxiDKeaCEGW+jHw5j+JHCSWSb93uoMmtkZY7Dg0wHi9VVWAkMgelh2PzagNWMrPt67v8KSs9Oih2W9Do7mFog1boj+bl5XfSKo14+g4XqTiu00lcphKwxFbQ6TPKy6/FNybXh+1kFSqvXl7meZ4Vu843YCJn59k6HKdrbE10bllZiG7/BBr21Gj1jqKNMEjEX/dMV2WOLVdVsJzeiWvE1Mhqvxnj0QVcPSUZNKd34hoxNTJtif6eKo+eQXNxm/XUyAL9oWmG1DsxkvL/sOMTgE8YwIjgtWoAAAAASUVORK5CYII=','测试名称')
// File {name: "测试名称", lastModified: 1624334190275, lastModifiedDate: Tue Jun 22 2021 11:56:30 GMT+0800 (中国标准时间), webkitRelativePath: "", size: 470, …}
```

### blobToBase64

> blob 转 base64

**语法：**
```javascript
rutils.blobToBase64(Blob)
```

**示例：**

```javascript
rutils.blobToBase64(rutils.base64ToBlob('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFrSURBVDhPjZJLLwNRFMe7EWInTUmEaGi9pyo0fYSi2pIQZSdsfQsbawtfwEotWvpWTZBYkZA2io2NT1Btqljoy/zde9thWmM4yS9z7p3zS86ZM4rhsB0CXNjBntrAJDQSDIRmwEUqNZQf8lB4Fmq/pYLP/A059wWnoIs4peUunwmG6CISmXs85B6RyWfxXHhBtpBjbN5so3m/V1puPxiDKeaCEGW+jHw5j+JHCSWSb93uoMmtkZY7Dg0wHi9VVWAkMgelh2PzagNWMrPt67v8KSs9Oih2W9Do7mFog1boj+bl5XfSKo14+g4XqTiu00lcphKwxFbQ6TPKy6/FNybXh+1kFSqvXl7meZ4Vu843YCJn59k6HKdrbE10bllZiG7/BBr21Gj1jqKNMEjEX/dMV2WOLVdVsJzeiWvE1Mhqvxnj0QVcPSUZNKd34hoxNTJtif6eKo+eQXNxm/XUyAL9oWmG1DsxkvL/sOMTgE8YwIjgtWoAAAAASUVORK5CYII=')).then(base64=>{
    console.log(base64)
})
```

### blobToFile

>  blob 转 file 

**语法：**
```javascript
rutils.blobToFile(Blob, fileName)
```

**示例：**
```js
rutils.blobToFile(rutils.base64ToBlob('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFrSURBVDhPjZJLLwNRFMe7EWInTUmEaGi9pyo0fYSi2pIQZSdsfQsbawtfwEotWvpWTZBYkZA2io2NT1Btqljoy/zde9thWmM4yS9z7p3zS86ZM4rhsB0CXNjBntrAJDQSDIRmwEUqNZQf8lB4Fmq/pYLP/A059wWnoIs4peUunwmG6CISmXs85B6RyWfxXHhBtpBjbN5so3m/V1puPxiDKeaCEGW+jHw5j+JHCSWSb93uoMmtkZY7Dg0wHi9VVWAkMgelh2PzagNWMrPt67v8KSs9Oih2W9Do7mFog1boj+bl5XfSKo14+g4XqTiu00lcphKwxFbQ6TPKy6/FNybXh+1kFSqvXl7meZ4Vu843YCJn59k6HKdrbE10bllZiG7/BBr21Gj1jqKNMEjEX/dMV2WOLVdVsJzeiWvE1Mhqvxnj0QVcPSUZNKd34hoxNTJtif6eKo+eQXNxm/XUyAL9oWmG1DsxkvL/sOMTgE8YwIjgtWoAAAAASUVORK5CYII='), 'fileName')
// File {name: "fileName", lastModified: 1624340040360, lastModifiedDate: Tue Jun 22 2021 13:34:00 GMT+0800 (中国标准时间), webkitRelativePath: "", size: 470, …}
```

### fileToBase64

> file 转 base64

**语法：**

```javascript
rutils.fileToBase64(file)
```

**示例：**

```javascript
rutils.fileToBase64(rutils.base64ToFile('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFrSURBVDhPjZJLLwNRFMe7EWInTUmEaGi9pyo0fYSi2pIQZSdsfQsbawtfwEotWvpWTZBYkZA2io2NT1Btqljoy/zde9thWmM4yS9z7p3zS86ZM4rhsB0CXNjBntrAJDQSDIRmwEUqNZQf8lB4Fmq/pYLP/A059wWnoIs4peUunwmG6CISmXs85B6RyWfxXHhBtpBjbN5so3m/V1puPxiDKeaCEGW+jHw5j+JHCSWSb93uoMmtkZY7Dg0wHi9VVWAkMgelh2PzagNWMrPt67v8KSs9Oih2W9Do7mFog1boj+bl5XfSKo14+g4XqTiu00lcphKwxFbQ6TPKy6/FNybXh+1kFSqvXl7meZ4Vu843YCJn59k6HKdrbE10bllZiG7/BBr21Gj1jqKNMEjEX/dMV2WOLVdVsJzeiWvE1Mhqvxnj0QVcPSUZNKd34hoxNTJtif6eKo+eQXNxm/XUyAL9oWmG1DsxkvL/sOMTgE8YwIjgtWoAAAAASUVORK5CYII=','测试名称')).then(Base64=>{
    console.log(Base64)
})
```

### fileToBlob

> file 转 blob

**语法：**

```javascript
rutils.fileToBlob(file)
```

**示例：**

```javascript
rutils.fileToBlob(rutils.base64ToFile('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFrSURBVDhPjZJLLwNRFMe7EWInTUmEaGi9pyo0fYSi2pIQZSdsfQsbawtfwEotWvpWTZBYkZA2io2NT1Btqljoy/zde9thWmM4yS9z7p3zS86ZM4rhsB0CXNjBntrAJDQSDIRmwEUqNZQf8lB4Fmq/pYLP/A059wWnoIs4peUunwmG6CISmXs85B6RyWfxXHhBtpBjbN5so3m/V1puPxiDKeaCEGW+jHw5j+JHCSWSb93uoMmtkZY7Dg0wHi9VVWAkMgelh2PzagNWMrPt67v8KSs9Oih2W9Do7mFog1boj+bl5XfSKo14+g4XqTiu00lcphKwxFbQ6TPKy6/FNybXh+1kFSqvXl7meZ4Vu843YCJn59k6HKdrbE10bllZiG7/BBr21Gj1jqKNMEjEX/dMV2WOLVdVsJzeiWvE1Mhqvxnj0QVcPSUZNKd34hoxNTJtif6eKo+eQXNxm/XUyAL9oWmG1DsxkvL/sOMTgE8YwIjgtWoAAAAASUVORK5CYII=','测试名称'))
    .then(blob => {
        console.log(blob)
    })
```

### bytesFormat

> 文件大小字节格式化成 `['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']`

**语法：**
```javascript
rutils.bytesFormat(bytes)
```

**示例：**

```javascript
rutils.bytesFormat(1024)
// => "1.00 KB"

rutils.bytesFormat(2399624)
// => "2.29 MB"

rutils.bytesFormat(3100399624)
// => "2.89 GB"

rutils.bytesFormat(3100399621124)
// => "2.82 TB"
```

### downloadByBase64

> 通过 base64 下载文件

```javascript
rutils.downloadByBase64(base64, fileName)
```

**示例：**

```javascript
rutils.downloadByBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFrSURBVDhPjZJLLwNRFMe7EWInTUmEaGi9pyo0fYSi2pIQZSdsfQsbawtfwEotWvpWTZBYkZA2io2NT1Btqljoy/zde9thWmM4yS9z7p3zS86ZM4rhsB0CXNjBntrAJDQSDIRmwEUqNZQf8lB4Fmq/pYLP/A059wWnoIs4peUunwmG6CISmXs85B6RyWfxXHhBtpBjbN5so3m/V1puPxiDKeaCEGW+jHw5j+JHCSWSb93uoMmtkZY7Dg0wHi9VVWAkMgelh2PzagNWMrPt67v8KSs9Oih2W9Do7mFog1boj+bl5XfSKo14+g4XqTiu00lcphKwxFbQ6TPKy6/FNybXh+1kFSqvXl7meZ4Vu843YCJn59k6HKdrbE10bllZiG7/BBr21Gj1jqKNMEjEX/dMV2WOLVdVsJzeiWvE1Mhqvxnj0QVcPSUZNKd34hoxNTJtif6eKo+eQXNxm/XUyAL9oWmG1DsxkvL/sOMTgE8YwIjgtWoAAAAASUVORK5CYII=', '测试')
```

### downloadByImgLink

> 通过图片的 `imgUrl` 进行下载

**语法：**
```javascript
rutils.downloadByImgLink(imgUrl,fileName, width, height)
```

**示例：**

```javascript

rutils.downloadByImgLink('https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1340127580,1407454083&fm=26&gp=0.jpg','头像').then(res=>{
    console.log('下载成功')
}).catch(err=>{
    console.log('下载失败')
})

// 设置下载图标的宽、高
rutils.downloadByImgLink('https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1340127580,1407454083&fm=26&gp=0.jpg','头像', 200, 200).then(res=>{
    console.log('下载成功')
}).catch(err=>{
    console.log('下载失败')
})
```

### downloadByImgSelector

> 通过 DOM 中的 img 标签，使用选择器下载图片

**语法：**
```javascript
rutils.downloadByImgSelector(imgSlector, fileName)
```

**示例：**

<img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" id="test" />

```html
<body>
    <img id="test" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg"  />
</body>    

<script>
    rutils.downloadByImgSelector('#test', '测试下载')
</script>
```
