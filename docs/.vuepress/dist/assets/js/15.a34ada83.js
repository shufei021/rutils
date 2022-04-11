(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{445:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"存储相关-localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储相关-localstorage"}},[t._v("#")]),t._v(" 存储相关（localStorage）")]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#get"}},[t._v("get")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("查")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#del"}},[t._v("set")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("增")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#del"}},[t._v("del")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("删")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#setexpired"}},[t._v("setExpired")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置带过期时间的数据")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#getexpired"}},[t._v("getExpired")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取带过期时间的数据")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#clearallexpired"}},[t._v("clearAllExpired")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("清除所有过期时间")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#clearall"}},[t._v("clearAll")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("清空所有内容")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#each"}},[t._v("each")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("遍历所有数据")])])])]),t._v(" "),s("h3",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),s("blockquote",[s("p",[t._v("获取储存的值，可批量获取")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("p",[t._v("​ 1. "),s("code",[t._v("value")]),t._v(" {string | array} 存储的 key，多条则传递数组")]),t._v(" "),s("p",[s("strong",[t._v("返回值：")])]),t._v(" "),s("p",[t._v("​ "),s("code",[t._v("any")])]),t._v(" "),s("p",[t._v("​ 单条则返回设置对应的值"),s("code",[t._v("value")]),t._v("，多条返回一个"),s("code",[t._v("object")])]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入数据")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张三'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'男'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.单条获取")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 张三")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.多条获取")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sex'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => {userName: "张三", age: 20, sex: "男"}')]),t._v("\n")])])]),s("h3",{attrs:{id:"set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" set")]),t._v(" "),s("blockquote",[s("p",[t._v("设置存储内容，支持多条写入")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("value1")]),t._v(" {string | object} 存储的 key，如果传入"),s("code",[t._v("object")]),t._v("则为多条，请忽略"),s("code",[t._v("value2")]),t._v("参数")]),t._v(" "),s("li",[s("code",[t._v("value2")]),t._v(" {any} 存储的 value，如果第一个参数为对象，则该参数不生效 setExpired")])]),t._v(" "),s("p",[s("strong",[t._v("返回值：")])]),t._v(" "),s("p",[t._v("​ "),s("code",[t._v("void")])]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.单条写入")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.多条写入")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    userName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    job"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JAVA开发'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"del"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#del"}},[t._v("#")]),t._v(" del")]),t._v(" "),s("blockquote",[s("p",[t._v("删除一条或多条数据")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("p",[t._v("​ 1. "),s("code",[t._v("value")]),t._v(" {string | array} 删除数据的 key，多条则为数组")]),t._v(" "),s("p",[s("strong",[t._v("返回值：")])]),t._v(" "),s("p",[t._v("​ "),s("code",[t._v("void")])]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.单条删除")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.多条删除")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'job'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"setexpired"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setexpired"}},[t._v("#")]),t._v(" setExpired")]),t._v(" "),s("blockquote",[s("p",[t._v("写入一条带过期时间的数据")])]),t._v(" "),s("p",[s("font",{staticStyle:{"font-weight":"bold"},attrs:{color:"#ff5722"}},[t._v("注意： 如果使用了此方法写入数据，那么获取也得使用 "),s("code",[t._v("getExpire()")]),t._v(" 来获取数据")])],1),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("value1")]),t._v(" {string} 字段 key;")]),t._v(" "),s("li",[s("code",[t._v("value2")]),t._v(" {any} 字段值 value")]),t._v(" "),s("li",[s("code",[t._v("value3")]),t._v(" {number} 过期时间，单位: (毫秒)；")])]),t._v(" "),s("p",[s("strong",[t._v("返回值：")])]),t._v(" "),s("p",[t._v("​ "),s("code",[t._v("void")])]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.写入一条带过期时间的数据")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3秒后过期")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.获取数据")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "zhangsan"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.过期后获取数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"getexpired"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getexpired"}},[t._v("#")]),t._v(" getExpired")]),t._v(" "),s("blockquote",[s("p",[t._v("获取一条在有效过期时间内的数据")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("p",[t._v("​ 1. "),s("code",[t._v("value")]),t._v(" {string} 字段 key")]),t._v(" "),s("p",[s("strong",[t._v("返回值：")])]),t._v(" "),s("p",[t._v("​ "),s("code",[t._v("any")])]),t._v(" "),s("p",[t._v("​ 如果值过期了则返回 "),s("code",[t._v("false")]),t._v("， 否则返回对应的值"),s("code",[t._v("value")])]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.写入一条带过期时间的数据")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3秒后过期")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1秒后获取值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => zhangsan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4秒后获取值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"clearallexpired"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clearallexpired"}},[t._v("#")]),t._v(" clearAllExpired")]),t._v(" "),s("blockquote",[s("p",[t._v("清除所有设置过期时间的值")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearAllExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("p",[t._v("​ 无")]),t._v(" "),s("p",[s("strong",[t._v("返回值：")])]),t._v(" "),s("p",[t._v("​ "),s("code",[t._v("any")])]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearAllExpired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清空所有设置了过期时间的值")]),t._v("\n")])])]),s("h3",{attrs:{id:"clearall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clearall"}},[t._v("#")]),t._v(" clearAll")]),t._v(" "),s("blockquote",[s("p",[t._v("清空所有数据")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("p",[t._v("​ 无")]),t._v(" "),s("p",[s("strong",[t._v("返回值：")])]),t._v(" "),s("p",[t._v("​ "),s("code",[t._v("void")])]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.设置数据")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张三'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.获取")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "张三"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.清空所有")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => null")]),t._v("\n")])])]),s("h3",{attrs:{id:"each"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#each"}},[t._v("#")]),t._v(" each")]),t._v(" "),s("blockquote",[s("p",[t._v("遍历所有存储的值")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("value")]),t._v(" {function} 回调函数，形参有"),s("code",[t._v("key")]),t._v(" 、"),s("code",[t._v("value")]),t._v("两个参数")])]),t._v(" "),s("p",[s("strong",[t._v("返回值：")])]),t._v(" "),s("p",[t._v("​ "),s("code",[t._v("void")])]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环")]),t._v("\nrutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do sth...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);