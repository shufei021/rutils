# 其它

<p><img src="/rutils/kk.jpg" alt="图片" width="100%"></p>

:::tip 目标
以围绕常见的业务难题进行的解决方案
:::

## API

| 名称                                 | 描述             |
| ------------------------------------ | :--------------- |
| <a href="#caputured">caputured</a>           | 异步简化函数       |
| <a href="#simplify">simplify</a>           | 简化函数 key为数组字符串     |
| <a href="#simplifyFunc">simplifyFunc</a> | 简化函数 key为对象字符串         |
| <a href="#descartes">descartes</a>       | 笛卡尔积组装函数 |
### caputured

> 异步简化函数

**语法**

```js
caputured( asyncFunc, ...args )
```

**参数**

`asyncFunc:` 异步函数<br/>
`...args:` 异步函数`asyncFunc`接收的参数

**示例**

```js
// 模拟请求数据函数

function requestDataFunc(params){
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(params)
        }, 2000)
    })
}

// 执行请求的函数

async function init(){
    const { res, err, args } = await rutils.caputured(requestDataFunc, { params: 1 }, {config:'ceshi'})
   // 首先处理错误

   // 成功拿到数据的处理
    if (res) {
        console.log(res)
    } else { // 请求失败的处理
        console.log('请求失败了', err, args) // args 是 requestDataFunc 除第一个参数外的其他参数的合集数组
    }
}
// 执行
init()
```

### simplify

> 简化函数 key为数组字符串

**语法**

```js
simplify( o, s, d )
```

**参数**

`@param { Object } o:`  像 下面示例中的 3种对象<br/>
`@param { String } s:` 像 下面示例中的 3种对象一样的 key 字符串<br/>
`@param { String | Function } d:` 没有匹配到 给的默认值 或是 执行的默认函数

**示例**

```js
// 第一种类型 值均为 字符串
const type1 = {
    '["xls", "xlsx", "xlsm"]':"xls",
    '["doc", "docx"]':"doc",
    '["ppt", "pptx"]':"ppt",
    '["pdf"]':"pdf",
    '["mp3", "wma"]':"audio",
    '["mp4"]':"media",
    '["zip", "7z", "rar", "apz"]':"zip",
    '["txt"]':"txt",
    '["jpg", "jpeg", "gif", "png"]':"image"
}

// 第二种类型 值均为 函数
const type2 = {
    '["xls", "xlsx", "xlsm"]':()=>{
        console.log("xls")
    },
    '["doc", "docx"]':()=>{
        console.log("doc")
    },
    '["ppt", "pptx"]':()=>{
        console.log("ppt")
    },
    '["pdf"]':()=>{
        console.log("pdf")
    },
    '["mp3", "wma"]':()=>{
        console.log("audio")
    },
    '["mp4"]':()=>{
        console.log("media")
    },
    '["zip", "7z", "rar", "apz"]':()=>{
        console.log("zip")
    },
    '["txt"]':()=>{
        console.log("txt")
    },
    '["jpg", "jpeg", "gif", "png"]':()=>{
        console.log("image")
    }
}

// 第三种类型 值为混合
const type3 = {
    '["xls", "xlsx", "xlsm"]':"xls",
    '["doc", "docx"]':"doc",
    '["ppt", "pptx"]':"ppt",
    '["pdf"]':"pdf",
    '["mp3", "wma"]':()=>{
        return "audio"
    },
    '["mp4"]':"media",
    '["zip", "7z", "rar", "apz"]':"zip",
    '["txt"]':"txt",
    '["jpg", "jpeg", "gif", "png"]':()=>{
        return "image"
    }
}


rutils.simplify(type3,'wma','default') // audio

rutils.simplify(type3,'wma11','default') // default

rutils.simplify(type3,'wma12',()=>{
    console.log('没有匹配到就执行这个函数')
})
```

### simplifyFunc

> 简化函数 key为对象字符串

**语法**

```js
simplifyFunc( o, c, d )
```

**参数**

`@param { Object } o:` 对象 map<br/>
`@param { String } c:` 条件对象<br/>
`@param { String | Function } d:` 没有匹配到 给的默认值 或是 执行的默认函数

**示例**

```js
// a b c 的值不定
const a = 1
const b = 1
const c = 1

if (a === 1) {
    if (b === 1) {
        if (c === 1) {
            return 'a1-b1-c1'
        } else if (c === 2) {
            return 'a1-b1-c2'
        } else {
            return 'a1-b1-else'
        }
    } else if (b === 2) {
        if (c === 1) {
            return 'a1-b2-c1'
        } else if (c === 2) {
            return 'a1-b2-c2'
        } else {
            return 'a1-b2-else'
        }
    } else {
        if (c === 1) {
            return 'a1-else-c1'
        } else if (c === 2) {
            return 'a1-else-c2'
        } else {
            return 'a1-else-else'
        }
    }
} else if (a === 2) {
    if (b === 1) {
        if (c === 1) {
            return 'a2-b1-c1'
        } else if (c === 2) {
            return 'a2-b1-c2'
        } else {
            return 'a2-b1-else'
        }
    } else if (b === 2) {
        if (c === 1) {
            return 'a2-b2-c1'
        } else if (c === 2) {
            return 'a2-b2-c2'
        } else {
            return 'a2-b2-else'
        }
    } else {
        if (c === 1) {
            return 'a2-else-c1'
        } else if (c === 2) {
            return 'a2-else-c2'
        } else {
            return 'a2-else-else'
        }
    }
} else {
    if (b === 1) {
        if (c === 1) {
            return 'else-b1-c1'
        } else if (c === 2) {
            return 'else-b1-c2'
        } else {
            return 'else-b1-else'
        }
    } else if (b === 2) {
        if (c === 1) {
            return 'else-b2-c1'
        } else if (c === 2) {
            return 'else-b2-c2'
        } else {
            return 'else-b2c-else'
        }
    } else {
        if (c === 1) {
            return 'else-else-c1'
        } else if (c === 2) {
            return 'else-else-c2'
        } else {
            return 'else-else-else'
        }
    }
}

```
**优化**
```js
const a = 1
const b = 1
const c = 1

const ValidValue = [1,2]
const elseValue = 99

// a 和 b、c的枚举值只能是约定好的 1 或 2，即使后面要加，我们在map对象里面也是很好加的，管理和维护一个对象更方便，else 我们统一标识为 99，你可以定义成其它

// 我们创建一个对象,依此来维护一个对象

const map = {
     '{"a":1,"b":1,"c":1}':()=>'a1-b1-c1',
     '{"a":1,"b":1,"c":2}':()=>'a1-b1-c2',
     '{"a":1,"b":1,"c":99}':()=>'a1-b1-else',
     '{"a":1,"b":2,"c":1}':()=>'a1-b2-c1',
     '{"a":1,"b":2,"c":2}':()=>'a1-b2-c2',
     '{"a":1,"b":2,"c":99}':()=>'a1-b2-else',
     '{"a":1,"b":99,"c":1}':()=>'a1-else-c1',
     '{"a":1,"b":99,"c":2}':()=>'a1-else-c2',
     '{"a":1,"b":99,"c":99}':()=>'a1-else-else',
     
     '{"a":2,"b":1,"c":1}':()=>'a2-b1-c1',
     '{"a":2,"b":1,"c":2}':()=>'a2-b1-c2',
     '{"a":2,"b":1,"c":99}':()=>'a2-b1-else',
     '{"a":2,"b":2,"c":1}':()=>'a2-b2-c1',
     '{"a":2,"b":2,"c":2}':()=>'a2-b2-c2',
     '{"a":2,"b":2,"c":99}':()=>'a2-b2-else',
     '{"a":2,"b":99,"c":1}':()=>'a2-else-c1',
     '{"a":2,"b":99,"c":2}':()=>'a2-else-c2',
     '{"a":2,"b":99,"c":99}':()=>'a2-else-else',
     
     '{"a":99,"b":1,"c":1}':()=>'else-b1-c1',
     '{"a":99,"b":1,"c":2}':()=>'else-b1-c2',
     '{"a":99,"b":1,"c":99}':()=>'else-b1-else',
     '{"a":99,"b":2,"c":1}':()=>'else-b2-c1',
     '{"a":99,"b":2,"c":2}':()=>'else-b2-c2',
     '{"a":99,"b":2,"c":99}':()=>'else-b2-else',
     '{"a":99,"b":99,"c":1}':()=>'else-else-c1',
     '{"a":99,"b":99,"c":2}':()=>'else-else-c2',
     '{"a":99,"b":99,"c":99}':()=>'else-else-else',
}
// map 的key 你也可以 这样写,如下
/*
const map = {
    [JSON.stringify({a:1,b:1,c:1})]:()=>'a1-b1-c1'
}
*/


rutils.simplifyFunc(map,{ 
    a:ValidValue.includes(a)?a:elseValue,
    b:ValidValue.includes(b)?b:elseValue,
    c:ValidValue.includes(c)?c:elseValue 
})
```

### descartes

> 笛卡尔积组装函数

**语法**

```js
descartes( attrList )
```

**参数**

`@param { Array } attrList:`  属性数组

**示例**

```js
const colors = ["红", "黄", "绿"]
const sizes = [1, 2, 3]
const others = ["a", "b", "c"]

rutils.descartes([colors, sizes, others])

```
