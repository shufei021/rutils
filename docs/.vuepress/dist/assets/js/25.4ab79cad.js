(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{430:function(t,e,n){var r,o;n(49),n(50),n(74),n(110),n(368),n(369),n(24),n(319),n(370),n(68),n(76),n(183),n(176),n(106),n(178),n(65),n(188),n(371),n(35),n(170),n(372),n(373),n(374),n(376),n(377),n(77),n(378),n(78),n(379),n(380),n(118),n(382),n(194),n(189),n(383),n(190),n(115),n(105),n(9),n(384),n(317),n(316),n(45),n(70),n(386),n(185),n(19),n(314),n(389),n(390),n(391),n(67),n(315),n(392),n(397),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(411),n(412),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(420),n(421),n(69),n(33),n(119),n(422);var i=n(426);!function(u,c){"object"==i(e)&&void 0!==t?t.exports=c():void 0===(o="function"==typeof(r=c)?r.call(e,n,e,t):r)||(t.exports=o)}(0,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(e)}function e(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(e,n){if(e===n)return!0;if(e instanceof Date&&n instanceof Date)return e.getTime()===n.getTime();if(!e||!n||"object"!==t(e)&&"object"!==t(n))return e===n;if(e.prototype!==n.prototype)return!1;var r=Object.keys(e);return r.length===Object.keys(n).length&&(Array.isArray(e)&&Array.isArray(n)&&e.length===n.length||"Object"==o(e)&&"Object"==o(n))&&r.every((function(t){return l(e[t],n[t])}));function o(t){return Object.prototype.toString.call(t).slice(8,-1)}}function f(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function s(t,e){return f(t)===e}function d(e){return n=[],r=[],function e(o){if(null===o)return null;if("object"!==t(o))return o;var i;s(o,"array")?i=[]:s(o,"regexp")?(i=new RegExp(o.source,getRegExp(o)),o.lastIndex&&(i.lastIndex=o.lastIndex)):i=s(o,"date")?new Date(o.getTime()):(c=Object.getPrototypeOf(o),Object.create(c));var u,c=n.indexOf(o);if(-1!==c)return r[c];for(u in n.push(o),r.push(i),o)i[u]=e(o[u]);return i}(e);var n,r}function p(t,e,n,r,o){for(var i=2<arguments.length&&void 0!==n?n:"id",u=3<arguments.length&&void 0!==r?r:"children",c=4<arguments.length?o:void 0,a=0,l=t.length;a<l;a++){var f=t[a];if(c.push(f),f[i]===e)return c;if(f[u]&&f[u].length&&p(f[u],e,i,u="children",c))return c;c.pop()}}String.prototype.padStart||(String.prototype.padStart=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))}),String.prototype.padEnd||(String.prototype.padEnd=function(t,e){return t>>=0,e=String(void 0!==e?e:""),this.length>t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),String(this)+e.slice(0,t))});var h={isEmpty:function(t){if(null==t)return!0;if(null!=(n=t)&&"function"!=typeof n&&"number"==typeof(n=n.length)&&-1<n&&n%1==0&&n<=9007199254740991)try{return!t.length}catch(t){}var e,n,r;if(["map","set"].includes((r=t,Object.prototype.toString.call(r).slice(8,-1).toLowerCase())))return!t.size;if(e=t,n=Object.prototype,e===("function"==typeof(r=e&&e.constructor)&&r.prototype||n))return!Object.keys(t).length;var o,i=Object.prototype.hasOwnProperty;for(o in t)if(i.call(t,o))return!1;return!0},isEquals:l,isArray:function(t){return Array.isArray(t)},isBoolean:function(t){return"boolean"==typeof t},isDate:function(t){return"date"===f(t)},isFunction:function(t){return"function"==typeof t},isNull:function(t){return null===t},isNumber:function(t){return"number"==typeof t},isObject:function(t){return"object"===f(t)},isRegExp:function(t){return"regexp"===f(t)},isString:function(t){return"string"==typeof t},isType:s,isUndefined:function(t){return void 0===t},getType:f},g={union:function(t,e,n){return t.concat(e.filter((function(e){return n?!t.map((function(t){return t[n]})).includes(e[n]):!t.includes(e)})))},intersection:function(t,e,n){return t.filter((function(t){return n?e.map((function(t){return t[n]})).includes(t[n]):e.includes(t)}))},archive:function(t,e){return Array.from(new Set(t.map((function(t){return t[e]})))).reduce((function(n,r){return n.push(t.filter((function(t){return t[e]===r}))),n}),[])},arrayFill:function(t,e){return Array(t).fill(e)},arrayToObject:function(t){return Array.from(t.entries()).reduce((function(t,e){return t[e[0]]=e[1],t}),{})},arrayToTree:function t(e,n,r){var i=1<arguments.length&&void 0!==n?n:null,u=2<arguments.length&&void 0!==r?r:"pid";return e.filter((function(t){return t[u]===i})).map((function(n){return o(o({},n),{},{children:t(e,n.id,u)})}))},delBy:function(t,e,n){for(var r=2<arguments.length&&void 0!==n&&n?t:JSON.parse(JSON.stringify(t)),o=r.length-1;0<=o;o--)if("function"==typeof e)e(r[o])&&r.splice(o,1);else if(Array.isArray(e))-1<e.indexOf(r[o])&&r.splice(o,1);else if(r[o]===e)r.splice(o,1);else if("Object"===Object.prototype.toString.call(e).slice(8,-1)){var i,u=r[o];for(i in e)Array.isArray(e[i])?-1<e[i].indexOf(u[i])&&r.splice(o,1):e[i]===u[i]&&r.splice(o,1)}return r},except:function(t,e,n){return[].concat(u(t),u(e)).filter((function(r){return![t,e].every((function(t){return n?t.map((function(t){return t[n]})).includes(r[n]):t.includes(r)}))}))},exchangePostion:function(t,e,n,r){return(t=3<arguments.length&&void 0!==r&&r?t:JSON.parse(JSON.stringify(t))).splice(e,1,t.splice(n,1,t[e])[0]),t},flatten:function t(e,n){var r=1<arguments.length&&void 0!==n?n:1;return e.reduce((function(e,n){return e.concat(1<r&&Array.isArray(n)?t(n,r-1):n)}),[])},group:function(t,e){return u(Array(Math.ceil(t.length/e)).keys()).reduce((function(n,r,o){return n.push(t.slice(o*e,(o+1)*e)),n}),[])},indexOfAll:function(t,e,n){return t.reduce((function(t,r,o){return(n?r[e]===n:r===e)?[].concat(u(t),[o]):t}),[])},insetPostion:function(t,e,n,r){return(t=3<arguments.length&&void 0!==r&&r?t:JSON.parse(JSON.stringify(t))).splice(n,0,t.splice(e,1)[0]),t},isRepeat:function(t){var e=t.length;try{for(var n=0;n<e;n++)for(var r=n+1;r<e;r++)if(l(t[n],t[r]))return!0;return!1}catch(n){return e!==unique(t).length}},mean:function(t,e){return(e?t.map("function"==typeof e?e:function(t){return t[e]}):t).reduce((function(t,e){return t+ +e}),0)/t.length},range:function(t,e){return Array.from({length:e-t+1},(function(e,n){return n+t}))},rangeRandom:function(t,e,n,r){var o=0<arguments.length&&void 0!==t?t:0,i=1<arguments.length&&void 0!==e?e:0;n=2<arguments.length&&void 0!==n?n:1;if(!(3<arguments.length&&void 0!==r)||r)return Array.from({length:n},(function(){return Math.floor(Math.random()*(i-o+1))+o}));for(var u=Array.from({length:i-o+1},(function(t,e){return e+o})),c=n>u.length?u.length:n,a=[];a.length!=c;){var l=u[Math.floor(Math.random()*u.length)];a.includes(l)||a.push(l)}return a},rangeScopeStartZore:function(t){return u(Object.keys(t).keys())},rangeStep:function(t,e,n){return Array.from({length:(e-t)/n+1},(function(e,r){return t+r*n}))},sample:function(t){return t[Math.floor(Math.random()*t.length)]},sum:function(t,e){var n="function"==typeof e;return t.reduce((function(t,r){return t+(n?e(r):e?r[e]||0:r)}),0)},timesTotal:function(t,e,n){return t.reduce((function(t,r){return(n?r[e]===n:r===e)?t+1:t}),0)},unique:function(t,e){var n=[];if(e)n=t.reduce((function(t,n){return t.map((function(t){return t[e]})).includes(n[e])?t:[].concat(u(t),[n])}),[]);else for(var r=0,o=t.length;r<o;r++)!function(e){0!=e&&n.some((function(n){return l(n,t[e])}))||n.push(t[e])}(r);return n},make:function(t,e,r){return t.reduce((function(t,o){return[].concat(u(t),[n({},o[e],o[r])])}),[])},treeToArray:function t(e,n){var r=1<arguments.length&&void 0!==n?n:"children";return(Array.isArray(e)?e:[e]).reduce((function(e,n){return[].concat(u(e),[n],u(t(n[r]||[])))}),[])},pick:function(t,e){return t.reduce((function(t,r){return[].concat(u(t),[e.reduce((function(t,e){return o(o({},t),{},n({},e,r[e]))}),{})])}),[])},getTreeNode:function t(e,n,r){for(var o=2<arguments.length&&void 0!==r?r:"id",i=0,u=e.length;i<u;i++){var c=e[i];if(c[o]===n)return c;if(c.children&&c.children.length&&(c=t(c.children,n,o)))return c}},arrayGroup:function(t,e){for(var n=[],r=0,o=1,i=t.length;o<i;o++){var u=t[o-1],c=t[o];u[e]!==c[e]&&(n.push(t.slice(r,o)),r=o),o===i-1&&n.push(t.slice(r))}return n},arrayAt:function(t,e){return(e=1<arguments.length&&void 0!==e?e:0)<0?t[t.length+e]:t[e]},arrayRepeat:function(t,e){for(var n=1<arguments.length&&void 0!==e?e:0,r=0,o=t;r<n;)o=o.concat(t),r++;return o},arraySubstr:function(t,e,n){return t.slice(e,e+n)},delByIndexs:function(t,e,n){2<arguments.length&&void 0!==n&&!n||(t=JSON.Parse(JSON.stringify(t))),e=e.sort((function(t,e){return e-t}));for(var r=0;r<e.length;r++)t.splice(e[r],1);return t},findIndexs:function(t,e){for(var n=[],r=0;r<t.length;r++)e(t[r])&&n.push(r);return n},groupArchive:function(t,e){return u(new Set(t.map((function(t){return t[e]})))).reduce((function(n,r){return[].concat(u(n),[t.filter((function(t){return t[e]===r}))])}),[])},groupState:function(t,e){for(var n=[],r=0,o=1,i=t.length;o<i;o++)t[o-1][e]!==t[o][e]&&(n.push(t.slice(r,o)),r=o),o===i-1&&n.push(t.slice(r));return n},lastFind:function(t,e){for(var n=t.length-1;0<=n;n--)if(e(t[n]))return t[n]},lastFindIndex:function(t,e){for(var n=t.length-1;0<=n;n--)if(e(t[n]))return n;return-1},rangeGenerater:function(t,e){return Array.from({length:e-t+1},(function(e,n){return n+t}))},arrayRestore:function(t,e,n,r){return 3<arguments.length&&void 0!==r&&r||(t=d(t)),t.splice(e,0,t.splice(n,1)[0]),t},getTreePath:function(t,e,n,r){for(var o,i=void 0===(o=n.idAlias)?"id":o,u=void 0===(o=n.nameAlias)?"name":o,c=void 0===(n=n.children)?"children":n,a=!(3<arguments.length&&void 0!==r)||r,l=0,f=t.length;l<f;l++){var s=t[l],d=[];if(s[i]===e)return a?[s[u]]:[s];if(s[c]&&s[c].length&&(p(s[c],e,i,c,d),d.length))return d.unshift(s),a?d.map((function(t){return t[u]})):d}return[]},queryTreeNode:function(t,e,n){var r=n.idAlias,o=void 0===r?"id":r,i=void 0===(n=n.children)?"children":n;t=d(t);for(var u=Array.isArray(t)?t:[t];u.length;){var c=u.shift();if(c[o]===e)return c;c[i]&&c[i].length&&c[i].forEach((function(t){u.push(t)}))}},queryTreePath:function t(e,n,r){var o=2<arguments.length&&void 0!==r?r:[];if(!e)return[];var i=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=c(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return{s:e=function(){},n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}(e=Array.isArray(e)?e:[e]);try{for(i.s();!(u=i.n()).done;){var u=u.value;if(o.push(u),n(u))return o;if(u.children&&u.children.length&&(u=t(u.children,n,o)).length)return u;o.pop()}}catch(t){i.e(t)}finally{i.f()}return[]}};function y(t,e){for(var n in e)t.setAttribute(n,e[n]);return t}function m(t,e){return void 0===e?t:Number(Math.round(t+"e"+(e||0))+"e-"+(e||0))}function v(t,e,n,r){var o,i;try{o=e.toString().split(".")[1].length}catch(t){o=0}try{i=n.toString().split(".")[1].length}catch(t){i=0}var u=Math.pow(10,Math.max(o,i)),c=[m((Math.round(u*e)+Math.round(u*n))/u,r),m((Math.round(u*e)-Math.round(u*n))/u,r),m(Math.round(u*e)*Math.round(u*n)/(u*u),r),m(Math.round(u*e)/Math.round(u*n),r)];u=String(m(c[t],r||0));return r?u.includes(".")?u.split(".")[0]+"."+u.split(".")[1].padEnd(r,0):(u+".").padEnd((u+".").length+r,0):c[t]}function b(e){return"symbol"!=t(e)&&!isNaN(parseFloat(e))&&isFinite(e)}var F={bindEvent:function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},bufferAnimation:function(t,e,n){var r,o=2<arguments.length&&void 0!==n?n:"left";(t="string"==typeof t?document.querySelector(t):t)&&(r="left"===o?"offsetLeft":"offsetTop",clearInterval(t.timer),t.timer=setInterval((function(){var n=Math.ceil((e-t[r])/10);t[r]==e?clearInterval(t.timer):t.style["left"===o?"left":"top"]=t[r]+n+"px"}),30))},constantAnimation:function(t,e,n){var r,o,i=2<arguments.length&&void 0!==n?n:"left";(t="string"==typeof t?document.querySelector(t):t)&&(r="left"===i?"offsetLeft":"offsetTop",clearInterval(t.timer),o=e>t[r]?5:-5,t.timer=setInterval((function(){t[r]==e?clearInterval(t.timer):t.style[i]=t[r]+o+"px"}),30))},debounce:function(t,e,n){function r(){var r,i=arguments,u=this;o&&clearTimeout(o),n?(r=!o,o=setTimeout((function(){o=null}),e),r&&t.apply(u,i)):o=setTimeout((function(){t.apply(u,i)}),e)}var o;return r.cancel=function(){clearTimeout(o),o=null},r},fromData:function(t){return Object.keys(t).reduce((function(e,n){return!e.append(n,t[n])&&e}),new FormData)},getStyle:function(t,e){return(t="string"==typeof t?document.querySelector(t):t)?n({left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight},e,(t.currentStyle||getComputedStyle(t))[e])[e]:null},hide:function(t){Array.from(document.querySelectorAll(t)).forEach((function(t){return t.style.display="none"}))},isEllipsis:function(t){return t.scrollHeight!==t.offsetHeight||t.scrollWidth!==t.offsetWidth},throttle:function(t,e,n){var r,o,i,u=0;return n=n||{},function(){o=this,i=arguments;var c=(new Date).valueOf();!1!==n.leading||u||(u=c),e<c-u?(r&&(clearTimeout(r),r=null),t.apply(o,i),u=c):r||!1===n.trailing||(r=setTimeout((function(){u=(new Date).valueOf(),r=null,t.apply(o,i)}),e))}},trigger:function(t,e){var n;t&&((n=document.createEvent("Events")).initEvent(e,!0,!0),e in t?(t[e](),["blur","scroll","select"].includes(e)&&t.dispatchEvent(n)):t.dispatchEvent(n))},unbindEvent:function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},getAttr:function(t,e){try{return(t="string"==typeof t?document.querySelector(t):t).getAttribute(e)}catch(t){return{}}},setAttr:y,getMaxZIndex:function(){return Math.max.apply(Math,u(u(document.querySelectorAll("*")).map((function(t){return parseInt(getComputedStyle(t).zIndex)||1}))))},bottomVisible:function(){return document.documentElement.clientHeight+window.scrollY>=(document.documentElement.scrollHeight||document.documentElement.clientHeight)},scrollToTop:function t(){var e=document.documentElement.scrollTop||document.body.scrollTop;0<e&&(window.requestAnimationFrame(t),window.scrollTo(0,e-e/8))},smoothScroll:function(t){return document.querySelector(t).scrollIntoView({behavior:"smooth"})},getScrollPosition:function(t){return{x:void 0!==(t=0<arguments.length&&void 0!==t?t:window).pageXOffset?t.pageXOffset:t.scrollLeft,y:void 0!==t.pageYOffset?t.pageYOffset:t.scrollTop}},backTop:function(t,e){var n=1<arguments.length&&void 0!==e?e:100,r=document.getElementById(t),o=document.documentElement,i=document.body;function u(){r.style.display=o.scrollTop+i.scrollTop>n?"block":"none"}window.onscroll=u,r.style.display="none",r.onclick=function(){r.style.display="none",window.onscroll=null,this.timer=setInterval((function(){o.scrollTop-=Math.ceil(.1*(o.scrollTop+i.scrollTop)),i.scrollTop-=Math.ceil(.1*(o.scrollTop+i.scrollTop)),o.scrollTop+i.scrollTop==0&&clearInterval(r.timer,window.onscroll=u)}),10)}},contains:function(t,e){return t="string"==typeof t?document.querySelector(t):t,e="string"==typeof e?document.querySelector(e):e,!(!t||!e)&&t.contains(e)},getScrollXY:function(){return document.body.scrollTop?{x:document.body.scrollLeft,y:document.body.scrollTop}:{x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop}},dynamicAddCss:function(t,e){var n=1<arguments.length&&void 0!==e?e:"";return new Promise((function(e){var r=document.createElement("link");r.setAttribute("href",n+t+".css"),r.setAttribute("type","text/css"),r.onload=function(){return e(r)},document.getElementsByTagName("head")[0].appendChild(r)}))},dynamicAddScript:function(t){return new Promise((function(e){t.forEach((function(t){var e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e)})),window.onload=function(){return e()}}))},createElement:function(t,e){return t=0<arguments.length&&void 0!==t?t:"div",e=1<arguments.length?e:void 0,t=document.createElement(t),"object"===f(e)?y(t,e):t},isScrollBottom:function(t){return!!(t="string"==typeof t?document.querySelector(t):t)&&t.scrollHeight-t.scrollTop===t.clientHeight},isScrollerVisible:function(t,e,n){return t="string"==typeof t?document.querySelector(t):t,e="string"==typeof e?t.querySelector(e):e,0<=(e=(n="string"==typeof n?e.querySelector(n):n).getBoundingClientRect().top-e.offsetTop)&&e<=t.offsetHeight-n.offsetHeight},getElementByClassName:function(t,e){if(t.classList.contains(e))return t;for(var n=t.parentNode;;){if(!n.classList)return null;if(n.classList.contains(e))return n;n=n.parentNode}},getScrollDirection:function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window,n=(e=e===window?window:"string"==typeof e?document.querySelector(e):e)===window?e.scrollX:e.scrollLeft,r=e===window?e.scrollY:e.scrollTop;if(void 0===(e=e===window?t:e).oldScrollLeft&&void 0===e.oldScrollTop&&r&&n)return e.oldScrollLeft=0,e.oldScrollTop=0,e.oldScrollLeft=n,e.oldScrollTop=r,{x:!0,y:!0};void 0===e.oldScrollLeft&&(e.oldScrollLeft=0),void 0===e.oldScrollTop&&(e.oldScrollTop=0);var o=e.oldScrollTop!==r;return e.oldScrollLeft=n,e.oldScrollTop=r,{x:!o,y:o}},getScrollerWidth:function(t){if(t)return new Promise((function(e,n){var r=document.createElement("div");r.innerHTML="1",t.appendChild(r),setTimeout((function(){var n=t.offsetWidth-r.offsetWidth;t.removeChild(r),e(n)}))}));var e=document.createElement("div");e.style.cssText="width:50px;height:50px;overflow: scroll;",e.innerHTML="<div>1</div>",document.body.appendChild(e);var n=50-e.querySelector("div").offsetWidth;return document.body.removeChild(e),n},selectRangeByElement:function(t,e){return(t="string"==typeof t?document.querySelector(t):t).onmouseup=function(t){var n=t.srcElement||t.target;(t=null==document.selection?document.getSelection().toString():document.selection.createRange().text).length&&e(t,n)},t},selectTextByElement:function(t){var e,n="string"==typeof t?document.querySelector(t):t;document.body.createTextRange?((e=document.body.createTextRange()).moveToElementText(n),e.select()):window.getSelection&&(t=window.getSelection(),(e=document.createRange()).selectNodeContents(n),t.removeAllRanges(),t.addRange(e))},addStyleCss:function(t,e){var n=u(document.styleSheets).find((function(e){return e.ownerNode.id===t}));if(n){for(var r=0;r<e.length;r++)n.insertRule(e[r]);return n}var o=document.createElement("style");return o.id="add_style_css_"+Date.now(),document.body.appendChild(o),o.onload=function(){for(var t=u(document.styleSheets).find((function(t){return t.ownerNode.id===o.id})),n=0;n<e.length;n++)t.insertRule(e[n])},o},copyText:function(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},domWatch:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,i=(n=o({attributes:!0,childList:!0,subtree:!0,once:!0},n),new r((function(){e.apply(void 0,arguments),n.once&&i.disconnect()})));return t="string"==typeof t?document.querySelector(t):t,i.observe(t,n),i},getElementByTarget:function(t,e){if(!t)return null;if(t.classList.contains(e))return t;for(var n=t.parentNode;;){if(!n.classList)return null;if(n.classList.contains(e))return n;n=n.parentNode}}};function A(){return!!T.match(/Chrome/i)}function w(){return!!(T.match(/(iPhone|iPad|iPod)/i)||T.match(/Android/i)||T.match(/Windows Phone/i)||T.match(/IEMobile/i))}function D(){return!!T.match(/(iPhone|iPad|iPod)/i)}function S(){return!!T.match(/Android/i)}function E(){return C&&"wxwork"!=T.match(/wxwork/i)}function x(){return C&&"wxwork"!=T.match(/wxwork/i)&&"Mobile"==T.match(/Mobile/i)}var O={add:function t(e,n,r){return Array.isArray(e)?e.length?e.reduce((function(e,r){return t(e,r,n)}),0):0:v(0,e,n,r)},calc:v,devide:function t(e,n,r){return Array.isArray(e)?2<=e.length?e.reduce((function(e,r){return t(e,r,n)})):"":e&&n?v(3,e,n,r):""},fmtNum:function(t,e,n,r){var o=1<arguments.length&&void 0!==e&&e,i=2<arguments.length?n:void 0;e=3<arguments.length?r:void 0;return void 0===t||null==t?"":b(n=t+"")?(r=!n.includes("."),t=0==(i=void 0===i?r?0:n.split(".")[1].length:i)?Math.round(n)+"":(r?n:m(+n+"",i)+"").split(".")[0],n=m(+n+"",i)+"",n=((n=0==i||r?"":n.split(".")[1])||"").padEnd(i,0),n=(o?t.replace(/(?=(?!\b)(\d{3})+$)/g,","):t)+(n.length?"."+n:""),e?Number(n):n):""},isNum:b,multiply:function t(e,n,r){return Array.isArray(e)?e.length?e.reduce((function(e,r){return t(e,r,n)}),1):0:v(2,e,n,r)},round:m,subtract:function t(e,n,r){return Array.isArray(e)?e.length?e.reduce((function(e,r){return t(e,r,n)})):0:v(1,e,n,r)},isInteger:function(t){return"number"==typeof t&&!isNaN(t)&&t%1==0},sumBigNumber:function(t,e){var n="",r=0;for(t=t.split(""),e=e.split("");t.length||e.length||r;)n=(r+=~~t.pop()+~~e.pop())%10+n,r=9<r;return n.replace(/^0+/,"")},sumDecimalNumber:function(t,e){e+="";for(var n=(t+="").split(".")[0],r=e.split(".")[0],o=t.split(".")[1]||"0",i=(t=e.split(".")[1]||"0",e=(o.length>t.length?o:t).length,o.padEnd(e,0)),u=t.padEnd(e,0),c=Array(e).fill([]).map((function(t,e){return[+i[e]+ +u[e]]})).reverse(),a=0;a<c.length&&c.length-1!==a;a++)c[a]=c[a]%10,9<c[a]&&(c[a+1]=+c[a+1]+1);return n=+n+ +r+ +(9<c[c.length-1]?1:0),c[c.length-1]=c[c.length-1]%10,~(r=(c=c.reverse()).findLastIndex((function(t){return t})))&&(c=c.slice(0,r+1)),c.filter(Boolean).length?n+"."+c.join(""):n}},T=window.navigator.userAgent,C="MicroMessenger"==T.match(/MicroMessenger/i),j=function(){return C&&"wxwork"!=T.match(/wxwork/i)&&"Mobile"!=T.match(/Mobile/i)},N=function(){return C&&"wxwork"==T.match(/wxwork/i)},M=function(){return C&&"wxwork"==T.match(/wxwork/i)&&"Mobile"==T.match(/Mobile/i)},P=function(){return C&&"wxwork"==T.match(/wxwork/i)&&"Mobile"!=T.match(/Mobile/i)},L=function(){return T.includes("Firefox")},I=function(){return/Safari/.test(T)&&!/Chrome/.test(T)},B=function(){return["win32","wow32","win64","wow64"].some((function(t){return T.toLowerCase().includes(t)}))},R=function(){return/macintosh|mac os x/i.test(T)};A.is=A(),w.is=w(),D.is=D(),S.is=S(),E.is=E(),x.is=x(),j.is=j(),N.is=N(),M.is=M(),P.is=P(),L.is=L(),I.is=I(),B.is=B(),R.is=R();j={isChrome:A,isMobile:w,isIos:D,isAndroid:S,isWx:E,isWxMobile:x,isWxPc:j,isWxWork:N,isWxWorkMobile:M,isWxWorkPc:P,isFirefox:L,isSafari:I,isWindows:B,isMac:R};function $(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function J(t){for(var e=t.split(",")[0].split(":")[1].split(";")[0],n=window.atob(t.split(",")[1]),r=(t=new ArrayBuffer(n.length),new Uint8Array(t)),o=0,i=n.length;o<i;o++)r[o]=n.charCodeAt(o);return new Blob([r],{type:e})}function Z(t){return new Promise((function(e){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){e(this.result)}}))}function q(t,e){var n=1<arguments.length&&void 0!==e?e:"default";(e=document.createElement("a")).style="display: none",document.body.appendChild(e),e.download=n,e.href=t,document.createEvent?((t=document.createEvent("MouseEvents")).initEvent("click",!0,!1),e.dispatchEvent(t)):document.createEventObject?e.fireEvent("onclick"):"function"==typeof e.onclick&&e.onclick(),document.body.removeChild(e)}function z(t){return JSON.parse(rt(t))}function H(t){return"string"==typeof t}function W(t){return"[object Object]"===Object.prototype.toString.call(t)}function U(e){return"symbol"!=t(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function _(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Y(t,e){if(H(t)){var n=null;try{W(n=z(t))||Array.isArray(n)||(n=rt(t)),"false"!==n&&"true"!==n||(n=z(t))}catch(e){n=rt(t)}return void 0===e||n?n:e}if(Array.isArray(t))return t.length?t.reduce((function(t,e){var n=null;if(H(e)&&_(et,e)){try{n=z(e)}catch(t){n=rt(e)}t[e]=n}return t}),{}):{}}function K(t){return JSON.parse(ct(t))}function X(t){return"string"==typeof t}function G(t,e){if(X(t)){var n=null;try{n=K(t)}catch(e){n=ct(t)}return void 0===e||n?n:e}if(st(t))return t.length?t.reduce((function(t,e){var n=null;if(X(e)){try{n=K(e)}catch(t){n=ct(e)}n&&(t[e]=n)}return t}),{}):{}}N={merge:function t(){return Array.from(arguments).reduce((function(e,n){for(var r in n)e[r]=e[r]&&"[object Object]"===e[r].toString()?t(e[r],n[r]):e[r]=n[r];return e}),{})},clone:function(t){var e,n={};for(e in t)n[e]=t[e];return n},deepClone:d,findKey:function(t,e){for(var n in t)if("function"==typeof e&&e(t[n])||Array.isArray(e)&&t[n][e[0]]===e[1]||"string"==typeof e&&e in t[n]||l(t[n],e))return n},convertKey:function t(e,n,r){if(!["array","object"].includes(f(e)))throw new TypeError("The first argument should be either an object or an array！");if("[object Object]"!==Object.prototype.toString.call(n))throw new TypeError("The parameter keyMap should be an object!");var o=Array.isArray(e)?[]:{};if(e instanceof Object)for(var i in e){var u=Object.keys(n).includes(i)?n[i]:i;o[u]=e[i],r&&["array","object"].includes(f(e[i]))&&Object.keys(e[i]).length&&(o[u]=t(e[i],n,r))}return o},get:function(t,e,n,r){try{if(!t)return n;if(!e||Array.isArray(e)&&0===e.length)return n||t;for(var o=Array.isArray(e)?e:e.replace(/\[(\d+)\]/g,".$1").split("."),i=r?JSON.parse(JSON.stringify(t)):t,u=0,c=o.length;u<c;u++)if(i=i[(a=o[u],isNaN(Number(a))?a:Number(a))],-1<[void 0].indexOf(i))return n;return i}catch(t){return n}var a},objectRebuild:function(t,e){return e?Array.isArray(e)?e.reduce((function(e,n){return e[n]=t[n],e}),{}):Object.keys(t).reduce((function(n,r){return e[r]&&(n[e[r]]=t[r]),n}),{}):t}};var Q={"&":"&amp","<":"&lt",">":"&gt",'"':"&quot","'":"&#39"},V=/[&<>"']/g,tt=RegExp(V.source),et=(M={guid:function(){return $()+$()+"-"+$()+"-"+$()+"-"+$()+"-"+$()+$()+$()},camelCase:function(t){return t.match(/[a-zA-Z]+/g).reduce((function(t,e){return t+(e=e.toLowerCase()).replace(e[0],e[0].toUpperCase())}),"")},escape:function(t){return t&&tt.test(t)?t.replace(V,(function(t){return Q[t]})):t},randomHexColorCode:function(){return"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6)}},P={isNoWord:function(t){return/^[^A-Za-z]*$/g.test(t)},isCHNAndEN:function(t){return/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(t)},isPostcode:function(t){return/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(t)},isWeChatNum:function(t){return/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(t)},isColor16:function(t){return/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(t)},isTrainNum:function(t){return/^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(t)},isHttpAndPort:function(t){return/^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(t)},isRightWebsite:function(t){return/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(t)},isCreditCode:function(t){return/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(t)},isVersion:function(t){return/^\d+(?:\.\d+){2}$/g.test(t)},isImageUrl:function(t){return/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(t)},isChineseName:function(t){return/^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(t)},isEnglishName:function(t){return/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(t)},isLicensePlateNumberNER:function(t){return/[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(t)},isLicensePlateNumberNNER:function(t){return/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(t)},isLicensePlateNumber:function(t){return/^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(t)},isMPStrict:function(t){return/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(t)},isMPRelaxed:function(t){return/^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(t)},isEmail:function(t){return/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},isLandlineTelephone:function(t){return/\d{3}-\d{8}|\d{4}-\d{7}/g.test(t)},isPassport:function(t){return/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(t)},isChineseCharacter:function(t){return/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(t)},isDecimal:function(t){return/^\d+\.\d+$/g.test(t)},isInteger:function(t){return"number"==typeof t&&!isNaN(t)&&t%1==0},isNumberStr:function(t){return/^\d{1,}$/g.test(t)},isQQNum:function(t){return/^[1-9][0-9]{4,10}$/g.test(t)},isNumAndStr:function(t){return/^[A-Za-z0-9]+$/g.test(t)},isEnglish:function(t){return/^[a-zA-Z]+$/g.test(t)},isCapital:function(t){return/^[A-Z]+$/g.test(t)},isLowercase:function(t){return/^[a-z]+$/g.test(t)},isNumEnglishChinese:function(t){return/^[0-9a-zA-Z\u4e00-\u9fa5]+$/g.test(t)}},L={getQuery:function(t){var e=0<arguments.length&&void 0!==t?t:window.location.href;try{return e.includes("?")?e.split("?")[1].match(/([^&=]*)=([^&]*)/g).reduce((function(t,e){return t[e.split("=")[0]]=decodeURIComponent(e.split("=")[1]),t}),{}):{}}catch(t){return{}}},urlSerialize:function(t,e){var n=1<arguments.length&&void 0!==e?e:{};return Object.keys(n).reduce((function(e,r){return e+(e===t?"?":"&")+"".concat(r,"=").concat(encodeURIComponent(n[r]))}),t)},urlTmtFmt:function(t,e){var n=1<arguments.length&&void 0!==e?e:{},r=/\{(\w+)\}/g.test(t)?t.replace(/\{(\w+)\}/g,(function(t,e){var r=n[e];return delete n[e],r})):t;return Object.keys(n).length?Object.keys(n).reduce((function(t,e){return t+(t===r?"?":"&")+"".concat(e,"=").concat(n[e])}),r):r}},I={bytesFormat:function(t){if(0===t)return"0 B";if(!t)return"";var e=Math.floor(Math.log(t)/Math.log(1024));return(t/Math.pow(1024,e)).toFixed(2)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][e]},base64ToBlob:J,base64ToFile:function(t,e){for(var n=t.split(","),r=(t=n[0].match(/:(.*?);/)[1],atob(n[1])),o=r.length,i=new Uint8Array(o);o--;)i[o]=r.charCodeAt(o);return new File([i],e,{type:t})},blobToBase64:function(t){return new Promise((function(e){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.readAsDataURL(t)}))},blobToFile:function(t,e){return new File([t],e,{type:t.type,lastModified:Date.now()})},fileToBase64:Z,fileToBlob:function(t){return Z(t).then(J)},downloadByBase64:q,downloadByImgLink:function(t,e,n,r){return new Promise((function(o,i){var u=new Image;u.src=t,u.crossOrigin="anonymous",u.onload=function(){n=n||this.width,r=r||this.height;var t=document.createElement("canvas"),i=t.getContext("2d");t.setAttribute("width",n),t.setAttribute("height",r),i.drawImage(this,0,0,n,r),q(t=t.toDataURL("image/png",.95),e),o(t)},u.onerror=function(t){return i(t)}}))},downloadByImgSelector:function(t,e){return new Promise((function(n,r){var o=new Image;o.setAttribute("crossOrigin","anonymous"),o.onload=function(){(i=document.createElement("canvas")).width=o.width,i.height=o.height,i.getContext("2d").drawImage(o,0,0,i.width,i.height);var t=i.toDataURL("image/png"),r=document.createElement("a"),i=new MouseEvent("click");r.download=e||"defaultName",r.href=t,r.dispatchEvent(i),n()},o.onerror=function(t){return r(t)},o.src=("string"==typeof t?document.querySelector(t):t).src}))},bufferFileDownload:function(t,e){var n=new Blob([t],{type:"charset=utf-8"});t=document.createElement("a"),n=window.URL.createObjectURL(n);t.href=n,t.download=e,(e=document.getElementsByTagName("body")[0]).appendChild(t),t.click(),e.removeChild(t),window.URL.revokeObjectURL(n)}},localStorage),nt=et.setItem.bind(et),rt=et.getItem.bind(et),ot=et.removeItem.bind(et),it=JSON.stringify,ut=(B={set:function(t,e){if(H(t))nt(t,H(e)?e:it(e));else if(W(t))for(var n in t)nt(n,H(t[n])?t[n]:it(t[n]))},get:Y,del:function(t){if(H(t))ot(t);else if(Array.isArray(t))for(var e=0,n=t.length;e<n;e++){var r=t[e];H(r)&&ot(r)}},each:function(t){for(var e=Object.keys(localStorage),n=0,r=e.length;n<r;n++){var o=e[n];t(o,z(o))}},getOnce:function(t,e){if(e=Y(t,e),"string"==typeof t)_(et,t)&&ot(t);else if(Array.isArray(t)&&t.length)for(var n=0;n<t.length;n++)_(et,t[n])&&ot(t[n]);return e},setExpired:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];function r(t,e,n){nt(t,it({startTime:c,expiredTime:n,value:e}))}var o=e[0],i=e[1],u=e[2],c=+new Date;if(1==e.length){if(W(o))for(var a in o)r(a,o[a],0)}else if(2==e.length){if(H(o))r(o,0,i);else if(W(o)&&U(i))for(var l in o)r(l,o[l],Number(i))}else 3==e.length&&H(o)&&U(u)&&r(o,i,Number(u))},getExpired:function(t){if(H(t)){var e=z(t);return e&&"startTime"in e?new Date-e.startTime>e.expiredTime?(ot(t),!1):e.value:null}for(var n={},r=0;r<t.length;r++){var o,i=t[r];!H(i)||(o=z(i))&&"startTime"in o&&(new Date-o.startTime>o.expiredTime?ot(t):n[i]=o.value)}return n},clearAll:function(){et.clear()},clearAllExpired:function(){for(var t=Object.keys(et).length,e=0;e<t;e++){var n=z(k);n&&"expiredTime"in n&&ot(k)}}},sessionStorage),ct=ut.getItem.bind(ut),at=ut.setItem.bind(ut),lt=ut.removeItem.bind(ut),ft=(ut.clear.bind(ut),JSON.stringify),st=Array.isArray;R={local:B,session:{get:G,set:function(t,e){if(X(t))at(t,ft(e));else if(st(t))for(var n=0;n<t.length;n++){var r=t[n];if(i=r,"[object Object]"===Object.prototype.toString.call(i))for(var o in r)at(o,X(r[o])?r[o]:ft(r[o]))}var i},del:function(t){if(X(t))lt(t);else if(Array.isArray(t))for(var e=0,n=t.length;e<n;e++){var r=t[e];X(r)&&lt(r)}},clearAll:function(){ut.clear()},each:function(t){for(var e=Object.keys(sessionStorage),n=0;n<e.length;n++)t(e[n],G(e[n]))}}};function dt(){var t;return t=regeneratorRuntime.mark((function t(e){var n,r,o,i,u=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=u.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=u[o];return t.prev=1,t.next=4,e.apply(void 0,r);case 4:return i=t.sent,t.abrupt("return",{err:null,res:i,args:r});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{err:t.t0,res:null,args:r});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})),(dt=function(){var n=this,r=arguments;return new Promise((function(o,i){var u=t.apply(n,r);function c(t){e(u,o,i,c,a,"next",t)}function a(t){e(u,o,i,c,a,"throw",t)}c(void 0)}))}).apply(this,arguments)}return B=Object.freeze({__proto__:null,simplify:function(t,e,n){var r=Object.keys(t).find((function(t){return JSON.parse(t).includes(e)}));return"string"==typeof t[r]?t[r]:"function"==typeof t[r]?t[r]():!t[r]&&n&&"string"==typeof n?n:!t[r]&&n&&"function"==typeof n?n():void 0},caputured:function(t){return dt.apply(this,arguments)},nestedHandler:function(t,e,n){(e=t.find(e))?e[1]():n&&n()},simplifyFunc:function(t,e,n){var r=Object.keys(t);if(!r.length)throw Error("不接受空对象");var o=r.findIndex((function(t){return JSON.stringify(JSON.parse(t))===JSON.stringify(e)}));return"string"==typeof(o=t[r[o]])?o:"function"==typeof o?o():o||"string"!=typeof n?o||"function"!=typeof n?void 0:n():n},descartes:function(e){var n,r,o={},i=[],u=null,c=[];for(r in e)"object"===t(e[r])&&(o[r]={parent:u,count:0},u=r);if(null===u)return e;for(;;){var a=void 0;for(a in e)n=o[a].count,c.push(e[a][n]);for(i.push(c),c=[];;){if(!(o[a].count+1>=e[a].length)){o[a].count++;break}if(o[a].count=0,null===(u=o[a].parent))return i;a=u}}},bfs:function(t,e){for(var n=Array.isArray(t)?u(t):[t],r=e.children||"children";n.length;){var o=n.shift();e.cb?e.cb(o):e&&e(o),o&&o[r]&&o[r].length&&o[r].forEach((function(t){return n.push(t)}))}}}),o(o(o(o(o(o(o(o(o(o(o({},h),g),F),O),j),N),M),{},{reg:P},L),I),R),B)}))}}]);