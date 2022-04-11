/**
 *  根据style 的id 找到对应的style 标签，在里面插入css, 如果没有找到则重新创建一个style插入到文档中
 * @param {String} styleId 
 * @param {Array} arr 
 * @returns element style
 */
export default function addStyleCss(styleId,arr){
    const targetCss = [...document.styleSheets].find(i=>i.ownerNode.id === styleId)
    if(targetCss){
        for (let i=0;i<arr.length;i++)targetCss.insertRule(arr[i])
        return targetCss
    }else{
        const style = document.createElement('style')
        style.id = 'add_style_css_'+Date.now()
        document.body.appendChild(style)
        style.onload = ()=>{
            const targetCss = [...document.styleSheets].find(i=>i.ownerNode.id === style.id)
            for (let i=0;i<arr.length;i++)targetCss.insertRule(arr[i])
        }
        return style
    }
}