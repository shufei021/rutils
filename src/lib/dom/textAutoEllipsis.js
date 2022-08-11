
/**
 * @description 文本自动省略号方法
 * @param { String } str ：传入的字符串
 * @param { Number } limitWidth ：限制的宽度值
 * @param { String } dir ：前/后 置省略
 * @param { Element} wrap ：文本所在的DOM容器
 * @returns 
 */
export default function textAutoEllipsis(str, limitWidth, dir = 'right', wrap) {
    if (!str) return str
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    ctx.font = `normal ${wrap ? getComputedStyle(wrap, null)['font-size'] : '16px'} PingFang SC`
    const _width = ctx.measureText(str).width
    if (_width > limitWidth) {
      for (let i = 0; i < str.length; i++) {
        if (!i) continue
        const resultStr = dir === 'right' ? str.slice(0, i) + '...' : '...' + str.slice(-i)
        const width = ctx.measureText(resultStr).width
        if (width > limitWidth) return dir === 'right' ? str.slice(0, i - 1) + '...' : '...' + str.slice(-i + 1)
      }
      return  dir === 'right' ? str.slice(0, str.length - 1) + '...' : '...' + str.slice(-str.length + 1)
    } else {
      return str
    }
}

/**
 * 
 *  const div1 = document.querySelector('.cs1')
    const div2 = document.querySelector('.cs2')
    div1.innerHTML = this.textAutoEllipsis('中国/四川省/成都市/武侯区/桂溪街道',120,'right',div1)
    div2.innerHTML = this.textAutoEllipsis('中国/四川省/成都市/武侯区/桂溪街道',120,'left',div2)
 * 
 */