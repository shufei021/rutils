/**
 * @description 通过元素进行范围选中
 * @param {Element} o 
 * @param {Function} fn 
 */
export default function selectRangeByElement(o, fn) {
    const el = typeof o === 'string' ?  document.querySelector(o) : o;
    el.onmouseup = function (event) {
        const target = event.srcElement ? event.srcElement : event.target
        const sText =
            document.selection == undefined
                ? document.getSelection().toString()
                : document.selection.createRange().text
        sText.length && fn(sText, target)
    }
    return el
}

/**
 * 
 *  selectRangeByElement(document, (txt, tar)=> {
      alert("文字属于" + tar.tagName + "元素，选中内容为：" + txt);
    });
 * 
 */