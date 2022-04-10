/**
 * 获取滚动条宽度
 * @param {*} el 滚动容器
 * @returns 滚动条宽度
 */
export default function getScrollerWidth(el) {
    if (el) {
        return new Promise((resolve, reject) => {
            const content = document.createElement("div");
            content.innerHTML = "1";
            el.appendChild(content);
            setTimeout(() => {
                const result = el.offsetWidth - content.offsetWidth;
                el.removeChild(content);
                resolve(result);
            });
        });
    } else {
        // 创建div
        const scroller = document.createElement("div");
        scroller.style.cssText =
            "width:50px;height:50px;overflow: scroll;";
        scroller.innerHTML = "<div>1</div>";
        document.body.appendChild(scroller);
        const result = 50 - scroller.querySelector("div").offsetWidth;
        document.body.removeChild(scroller);
        return result;
    }
}