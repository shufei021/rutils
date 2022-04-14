# 浏览器&系统&环境

> Browser and system and environment

## API

| 名称                                                       | 描述                              |
| ---------------------------------------------------------- | :-------------------------------- |
| <a href="#ischrome">isChrome</a>                   | 是否Chrome浏览器          |
| <a href="#issafari">isSafari </a>                   | 是否是Safari浏览器              |
| <a href="#isfirefox">isFirefox</a>                   | 是否是火狐浏览器         |
| <a href="#ismobile">isMobile</a>            | 是否是移动端     |
| <a href="#isios">isIos</a>                   | 是否是IOS        |
| <a href="#isandroid">isAndroid</a>           | 是否是Android            |
| <a href="#iswx">isWx</a>                     | 是否是微信 |
| <a href="#iswxmobile">isWxMobile</a>           | 是否是微信移动端         |
| <a href="#iswxpc">isWxPc</a>         | 是否微信PC端          |
| <a href="#iswxwork">isWxWork</a> | 是否企业微信       |
| <a href="#iswxworkmobile">isWxWorkMobile </a>      | 是否企业微信移动端       |
| <a href="#iswxworkpc">isWxWorkPc </a>      | 是否企业微信PC端       |

:::warning PS
以上均是函数
:::

## 浏览器识别

### 是否Chrome浏览器
```js
rutils.isChrome()

// 或 rutils.isChrome.is (最新版本支持.is 直接获取)
```

### 是否是Safari浏览器
```js
rutils.isSafari()

// 或 rutils.isSafari.is (最新版本支持.is 直接获取)
```

### 是否是火狐浏览器
```js
rutils.isFirefox()

// 或 rutils.isFirefox.is (最新版本支持.is 直接获取)
```

## 移动端/PC端识别

### 是否移动端
```js
rutils.isMobile()

// 或 rutils.isMobile.is (最新版本支持.is 直接获取)

// 不是移动端 就是PC 端
```

## 系统识别

### 是否IOS
```js
rutils.isIos()

// 或 rutils.isIos.is (最新版本支持.is 直接获取)

```

### 是否Android
```js
rutils.isAndroid()

// 或 rutils.isAndroid.is (最新版本支持.is 直接获取)

```

## 微信（WeChat）相关识别

### 是否是微信

```js
rutils.isWx()

// 或 rutils.isWx.is (最新版本支持.is 直接获取)
```

### 是否是微信移动端

```js
rutils.isWxMobile()

// 或 rutils.isWxMobile.is (最新版本支持.is 直接获取)
```

### 是否是微信PC端

```js
rutils.isWxPc()

// 或 rutils.isWxPc.is (最新版本支持.is 直接获取)
```

## 企业微信（WeChat Work）相关识别

### 是否企业微信

```js
rutils.isWxWork()

// 或 rutils.isWxWork.is (最新版本支持.is 直接获取)
```

### 是否企业微信移动端

```js
rutils.isWxWorkMobile()

// 或 rutils.isWxWorkMobile.is (最新版本支持.is 直接获取)
```

### 是否企业微信PC端

```js
rutils.isWxWorkPc()

// 或 rutils.isWxWorkPc.is (最新版本支持.is 直接获取)
```