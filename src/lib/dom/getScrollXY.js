/**
 * @description: 获取网页被卷去的位置
 */
const getScrollXY = function () {
    return document.body.scrollTop
        ? {
              x: document.body.scrollLeft,
              y: document.body.scrollTop
          }
        : {
              x: document.documentElement.scrollLeft,
              y: document.documentElement.scrollTop
          }
}
export default getScrollXY
