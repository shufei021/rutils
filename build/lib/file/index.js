!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).file=t()}(this,function(){"use strict";function t(e){for(var t=e.split(",")[0].split(":")[1].split(";")[0],n=window.atob(e.split(",")[1]),e=new ArrayBuffer(n.length),o=new Uint8Array(e),r=0,i=n.length;r<i;r++)o[r]=n.charCodeAt(r);return new Blob([o],{type:t})}function n(n){return new Promise(function(e){var t=new FileReader;t.readAsDataURL(n),t.onload=function(){e(this.result)}})}function c(e,t){var n=1<arguments.length&&void 0!==t?t:"default";(t=document.createElement("a")).style="display: none",document.body.appendChild(t),t.download=n,t.href=e,document.createEvent?((e=document.createEvent("MouseEvents")).initEvent("click",!0,!1),t.dispatchEvent(e)):document.createEventObject?t.fireEvent("onclick"):"function"==typeof t.onclick&&t.onclick(),document.body.removeChild(t)}return{bytesFormat:function(e){if(0===e)return"0 B";if(!e)return"";var t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,t)).toFixed(2)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},base64ToBlob:t,base64ToFile:function(e,t){for(var n=e.split(","),e=n[0].match(/:(.*?);/)[1],o=atob(n[1]),r=o.length,i=new Uint8Array(r);r--;)i[r]=o.charCodeAt(r);return new File([i],t,{type:e})},blobToBase64:function(n){return new Promise(function(t){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.readAsDataURL(n)})},blobToFile:function(e,t){return new File([e],t,{type:e.type,lastModified:Date.now()})},fileToBase64:n,fileToBlob:function(e){return n(e).then(t)},downloadByBase64:c,downloadByImgLink:function(o,r,i,a){return new Promise(function(n,t){var e=new Image;e.src=o,e.crossOrigin="anonymous",e.onload=function(){i=i||this.width,a=a||this.height;var e=document.createElement("canvas"),t=e.getContext("2d");e.setAttribute("width",i),e.setAttribute("height",a),t.drawImage(this,0,0,i,a);e=e.toDataURL("image/png",.95);c(e,r),n(e)},e.onerror=function(e){return t(e)}})},downloadByImgSelector:function(e,i){return new Promise(function(o,t){var r=new Image;r.setAttribute("crossOrigin","anonymous"),r.onload=function(){var e=document.createElement("canvas");e.width=r.width,e.height=r.height,e.getContext("2d").drawImage(r,0,0,e.width,e.height);var t=e.toDataURL("image/png"),n=document.createElement("a"),e=new MouseEvent("click");n.download=i||"defaultName",n.href=t,n.dispatchEvent(e),o()},r.onerror=function(e){return t(e)},r.src=("string"==typeof e?document.querySelector(e):e).src})}}});
//# sourceMappingURL=index.js.map
