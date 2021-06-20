/**
 * 创建canvas
 * @param {Object} attrs
 * @returns {Object}
 */
const createCanvas = (attrs = {}) => {
    let canvas = document.createElement("canvas");
    Object.keys(attrs).forEach((key) => {
        canvas.setAttribute(key, attrs[key]);
    });
    return canvas;
};

/**
 * 创建Img
 * @param src 图片地址
 * @param
 */
const createImg = (src) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            resolve(img);
        };
        img.setSrc = (url) => {
            img.src = url;
        };
        img.setSrc(src);
    });
};

/**
 * 图片压缩
 * @param {String/Array} src 图片地址
 * @param {Number} scale 压缩比例 0-1
 * @returns {Promise}
 */
const imgCompress = (src, scale = 1) => {
    const imgList = Array.isArray(src) ? src : [src];
    const imgPromList = imgList.map((img) => {
        return new Promise(async (resolve) => {
            const imgEl = await createImg(img);
            const { width, height } = imgEl;
            const comWidth = width * scale; // 压缩后宽
            const comHeight = height * scale; // 压缩后高
            const canvas = createCanvas({ width: comWidth, height: comHeight });
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, comWidth, comHeight);
            ctx.drawImage(imgEl, 0, 0, comWidth, comHeight);
            resolve({
                ctx,
                data: canvas.toDataURL("image/jpeg", 1),
            });
        });
    });
    return Promise.all(imgPromList).then((res) => Promise.resolve(res));
};

export default imgCompress;
