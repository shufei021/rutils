import setAttr from "./setAttr";
import getType from "../base/getType";

/**
 * 创建元素
 * @param {String} nodeName 元素类型
 * @param {Object} nodeAttrs 元素属性
 * @return {Element} 创建完成的元素
 */
const createElement = (elName='div', elAttrs) => {
    const el = document.createElement(elName);
    return getType(elAttrs) === "object" ? setAttr(el, elAttrs) : el;
};
export default createElement
