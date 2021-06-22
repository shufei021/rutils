# 字符相关

## API

| 名称                                                 | 描述             |
| ---------------------------------------------------- | :--------------- |
| <a href="#camelcase">camelCase</a>                   | 字符串转驼峰     |
| <a href="#guid">guid</a>                             | 随机 UUID        |
| <a href="#randomhexcolorcode">randomHexColorCode</a> | 随机十六进制颜色 |

### camelCase

字符转为大驼峰

**语法：**

```javascript
rutils.camelCase(val)
```

**示例：**

```javascript
rutils.camelCase('hello_word')
// => "HelloWord"

rutils.camelCase('welcome_to_chengdu')
// => "WelcomeToChengdu"
```

### guid

随机生成 36 位字符 ID, 如： `db9b82c8-784a-6d3d-b4f1-2e312c79071a`

**语法：**

```javascript
rutils.guid()
```

**示例：**

```javascript
rutils.guid()
// => "db9b82c8-784a-6d3d-b4f1-2e312c79071a"
```

### randomHexColorCode

随机十六进制颜色，如：`#0099ff`

**语法：**

```javascript
rutils.randomHexColorCode()
```

**示例：**

```javascript
rutils.randomHexColorCode()
// => "#0099ff"
```
