/**
 *  根据style 的id 找到对应的style 标签，在里面插入css
 * @param {*} styleId 
 * @param {*} arr 
 * @returns 
 */
export default function addStyleCss(styleId,arr){
    const targetCss = [...document.styleSheets].find(i=>i.ownerNode.id === styleId)
    for (let i=0;i<arr.length;i++){
        targetCss.insertRule(arr[i])
    }
    return targetCss
}