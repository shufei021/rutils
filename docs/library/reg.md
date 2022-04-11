# 正则相关

## API

| 名称                     | 描述                                                     |
| ------------------------ | :------------------------------------------------------- |
| isNoWord                 | 不能包含字母                                             |
| isCHNAndEN               | 中文和数字                                               |
| isPostcode               | 邮政编码(中国)                                           |
| isWeChatNum              | 微信号，6 至 20 位，以字母开头，字母，数字，减号，下划线 |
| isColor16                | 16 进制颜色                                              |
| isTrainNum               | 火车车次                                                 |
| isHttpAndPort            | 必须带端口号的网址(或 ip)                                |
| isRightWebsite           | 网址(支持端口和"?+参数"和"#+参数)                        |
| isCreditCode             | 统一社会信用代码                                         |
| isVersion                | 版本号格式必须为 X.Y.Z                                   |
| isImageUrl               | 图片链接地址（图片格式可按需增删）                       |
| isChineseName            | 中文姓名                                                 |
| isEnglishName            | 英文姓名                                                 |
| isLicensePlateNumberNER  | 车牌号(新能源)                                           |
| isLicensePlateNumberNNER | 车牌号(非新能源)                                         |
| isLicensePlateNumberNNER | 车牌号(新能源+非新能源)                                  |
| isMPStrict               | 手机号中国(严谨), 根据工信部 2019 年最新公布的手机号段   |
| isMPRelaxed              | 手机号中国(宽松), 只要是 13,14,15,16,17,18,19 开头即可   |
| isEmail                  | 邮箱                                                     |
| isLandlineTelephone      | 座机电话(国内),如: 0341-86091234                         |
| isPassport               | 护照（包含香港、澳门）                                   |
| isChineseCharacter       | 中文/汉字                                                |
| isNumberStr              | 是否整数字符串                                           |
| isDecimal                | 小数                                                     |
| isInteger                | 整数                                                     |
| isQQNum                  | QQ                                                       |
| isNumAndStr              | 数字和字母组成                                           |
| isEnglish                | 英文字母                                                 |
| isCapital                | 大写英文字母                                             |
| isLowercase              | 小写英文字母                                             |

### 示例

```javascript
rutils.reg.isInteger(1.1)
// => false

rutils.reg.isInteger(2)
// => true

rutils.reg.isInteger(NaN)
// => false

rutils.reg.isInteger('1')
// => true
```
