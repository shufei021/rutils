(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{419:function(t,s,a){"use strict";a.r(s);var n=a(86),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数字相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字相关"}},[t._v("#")]),t._v(" 数字相关")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述（加、减、乘、除支持多个数据）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#r-add"}},[t._v("add")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-merge"}},[t._v("subtract")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("减")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-multiply"}},[t._v("multiply")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("乘")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-devide"}},[t._v("devide")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("除")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-calc"}},[t._v("calc")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算方法")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-fmtNum"}},[t._v("fmtNum")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数字格式化")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-isinteger"}},[t._v("isInteger")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否为整数")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-isnum"}},[t._v("isNum")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否为数字")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-round"}},[t._v("round")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("四舍五入到指定位数")])])])])]),t._v(" "),a("h3",{attrs:{id:"r-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-add"}},[t._v("#")]),t._v(" R.add")]),t._v(" "),a("blockquote",[a("p",[t._v("两数或多数相加的和")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("R.add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1, value2, value3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t1."),a("code",[t._v("value1")]),t._v(" {number | array} 加数，如果需要多个可传入 "),a("code",[t._v("array")]),t._v(" 进行相加；")]),t._v(" "),a("p",[t._v("​\t2."),a("code",[t._v("value2")]),t._v(" {number} 被加数， "),a("span",{staticStyle:{color:"#ff5722"}},[t._v("如果第一个参数为 "),a("code",[t._v("array")]),t._v("，那么第二个参数则为保留小数位数，第三个参数可不传")]),t._v("；")]),t._v(" "),a("p",[t._v("​\t3."),a("code",[t._v("value3")]),t._v(" {number} 结果保留位数；")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("​\t计算后的和")]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 两数相加")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.325")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.235")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 2.56")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 多数相加，第一个参数为数字list，第二个则为保留位数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.124")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 28.12")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"r-subtract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-subtract"}},[t._v("#")]),t._v(" R.subtract")]),t._v(" "),a("blockquote",[a("p",[t._v("两数或多数相减的值")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("R.subtract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1, value2, value3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t1."),a("code",[t._v("value1")]),t._v(" {number | array} 减数，如果需要多个可传入 "),a("code",[t._v("array")]),t._v(" 进行相减；")]),t._v(" "),a("p",[t._v("​\t2."),a("code",[t._v("value2")]),t._v(" {number} 被减数， "),a("span",{staticStyle:{color:"#ff5722"}},[t._v("如果第一个参数为 "),a("code",[t._v("array")]),t._v("，那么第二个参数则为保留小数位数，第三个参数可不传")]),t._v("；")]),t._v(" "),a("p",[t._v("​\t3."),a("code",[t._v("value3")]),t._v(" {number} 结果保留位数；")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("​\t计算后的值")]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.两数相减")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subtract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.325")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.235")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0.09")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.多数相减，第一个参数为数字list，第二个则为保留位数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subtract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.124")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 2.88")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"r-multiply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-multiply"}},[t._v("#")]),t._v(" R.multiply")]),t._v(" "),a("blockquote",[a("p",[t._v("两数或多数相乘的值")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("R.multiply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1, value2, value3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t1."),a("code",[t._v("value1")]),t._v(" {number | array} 乘数，如果需要多个可传入 "),a("code",[t._v("array")]),t._v(" 进行相乘；")]),t._v(" "),a("p",[t._v("​\t2."),a("code",[t._v("value2")]),t._v(" {number} 被乘数， "),a("span",{staticStyle:{color:"#ff5722"}},[t._v("如果第一个参数为 "),a("code",[t._v("array")]),t._v("，那么第二个参数则为保留小数位数，第三个参数可不传")]),t._v("；")]),t._v(" "),a("p",[t._v("​\t3."),a("code",[t._v("value3")]),t._v(" {number} 结果保留位数；")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("​\t计算后的值")]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.两数相乘")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.325")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.235")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 1.64")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.多数相乘，第一个参数为数字list，第二个则为保留位数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.124")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 5129.28")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"r-devide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-devide"}},[t._v("#")]),t._v(" R.devide")]),t._v(" "),a("blockquote",[a("p",[t._v("两数或多数相除的值")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("R.devide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1, value2, value3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t1."),a("code",[t._v("value1")]),t._v(" {number | array} 除数，如果需要多个可传入 "),a("code",[t._v("array")]),t._v(" 进行相除；")]),t._v(" "),a("p",[t._v("​\t2."),a("code",[t._v("value2")]),t._v(" {number} 被除数， "),a("span",{staticStyle:{color:"#ff5722"}},[t._v("如果第一个参数为 "),a("code",[t._v("array")]),t._v("，那么第二个参数则为保留小数位数，第三个参数可不传")]),t._v("；")]),t._v(" "),a("p",[t._v("​\t3."),a("code",[t._v("value3")]),t._v(" {number} 结果保留位数；")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("​\t计算后的值")]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.两数相除")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("devide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.325")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.235")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 1.07")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.多数相除，第一个参数为数字list，第二个则为保留位数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("devide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.124")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0.16")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"r-isnum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-isnum"}},[t._v("#")]),t._v(" R.isNum")]),t._v(" "),a("blockquote",[a("p",[t._v("是否有效数字：排除 "),a("code",[t._v("NaN")]),t._v(" 、 "),a("code",[t._v("Infinity")]),t._v("，数字字符串或数字，都为有效数字")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("R.isNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t1."),a("code",[t._v("value")]),t._v(" {number} 检测的值")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("​\ttrue: 是  |  false：否")]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'111'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\d+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("gi")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\narr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true: (123, '123')")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false: (other)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"r-isinteger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-isinteger"}},[t._v("#")]),t._v(" R.isInteger")]),t._v(" "),a("blockquote",[a("p",[t._v("是否为整数, 必须是数字类型")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("R.isInteger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t1."),a("code",[t._v("value1")]),t._v(" {number} 检测的值")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("​\ttrue: 是  |  false：否")]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInteger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInteger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInteger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInteger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);