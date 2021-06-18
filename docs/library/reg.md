# 正则相关

## API



| 名称                     | 描述                                                      |
| ------------------------ | :-------------------------------------------------------- |
| isNoWord                 | 验证不能包含字母                                          |
| isCHNAndEN               | 验证中文和数字                                            |
| isPostcode               | 验证邮政编码(中国)                                        |
| isWeChatNum              | 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线 |
| isColor16                | 验证16进制颜色                                            |
| isTrainNum               | 验证火车车次                                              |
| isHttpAndPort            | 验证必须带端口号的网址(或ip)                              |
| isRightWebsite           | 验证网址(支持端口和"?+参数"和"#+参数)                     |
| isCreditCode             | 验证统一社会信用代码                                      |
| isVersion                | 版本号格式必须为X.Y.Z                                     |
| isImageUrl               | 图片链接地址（图片格式可按需增删）                        |
| isChineseName            | 中文姓名                                                  |
| isEnglishName            | 英文姓名                                                  |
| isLicensePlateNumberNER  | 车牌号(新能源)                                            |
| isLicensePlateNumberNNER | 车牌号(非新能源)                                          |
| isLicensePlateNumberNNER | 车牌号(新能源+非新能源)                                   |
| isMPStrict               | 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段  |
| isMPRelaxed              | 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可  |
| isEmail                  | 邮箱                                                      |
| isLandlineTelephone      | 验证座机电话(国内),如: 0341-86091234                      |
| isPassport               | 护照（包含香港、澳门）                                    |
| isChineseCharacter       | 中文/汉字                                                 |
| isNumber                 | 数字                                                      |
| isDecimal                | 小数                                                      |
| isInteger                | 整数                                                      |
| isQQNum                  | QQ                                                        |
| isNumAndStr              | 数字和字母组成                                            |
| isEnglish                | 英文字母                                                  |
| isCapital                | 验证大写英文字母                                          |
| isLowercase              | 验证小写英文字母                                          |

### 例子

> 回到顶部

```bash
R.isInteger(value)
```

**参数：**

​	1.`value` { any } 需要检测测值

**返回值：**

​	`boolean`

​	true: 是 | false:否

 **例子：**

```javascript
isInteger(1.1)
// => false

isInteger(2)
// => true

isInteger(NaN)
// => false

isInteger('1')
// => true
```
