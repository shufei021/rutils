# 字符相关

## API

| 名称                                                   | 描述             |
| ------------------------------------------------------ | :--------------- |
| <a href="#r-camelcase">camelCase</a>                   | 字符串转驼峰     |
| <a href="#r-guid">guid</a>                             | 随机UUID         |
| <a href="#r-randomhexcolorcode">randomHexColorCode</a> | 随机十六进制颜色 |



### R.camelCase

> 字符转为大驼峰，

```bash
R.camelCase(value)
```

**参数：**

​	1. `value` {string} 需要转换的字符

**返回值：**

​	`string`

​	返回大驼峰字符串

 **例子：**

```javascript
camelCase("hello_word")
// => "HelloWord"

camelCase("welcome_to_chengdu")
// => "WelcomeToChengdu"
```





### R.guid

> 随机生成36位字符ID, 类似UUID

```bash
R.guid()
```

**参数：**

​	无

**返回值：**

​	`string`

​	36位随机字母、数字、下划线组成的id，如： `db9b82c8-784a-6d3d-b4f1-2e312c79071a`

 **例子：**

```javascript
guid()
// => "db9b82c8-784a-6d3d-b4f1-2e312c79071a"
```



### R.randomHexColorCode

> 随机十六进制颜色

```bash
R.randomHexColorCode()
```

**参数：**

​	无

**返回值：**

​	`string`

​	随机十六进制颜色，如：`#0099ff`

 **例子：**

```javascript
randomHexColorCode()
// => "#0099ff"
```
