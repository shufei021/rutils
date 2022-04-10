/**
 * @description 设置元素里面文字呈选中状态
 * @param {Element | String} element 
 */
export default function selectTextByElement(element) {
  const text = typeof element === 'string' ?  document.querySelector(element) : element;
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}