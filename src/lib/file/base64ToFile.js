/**
 * @description: Base64 to File
 * @param dataURL   {String}  base64
 * @param fileName   {String}  file name
 * @returns {File}
 */
const base64ToFile = function (base64, fileName) {
    let arr = base64.split(','),
        mimeType = arr[0].match(/:(.*?);/)[1], //base64文件类型
        bStr = atob(arr[1]),
        n = bStr.length,
        u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bStr.charCodeAt(n)
    }
    return new File([u8arr], fileName, { type: mimeType })
}
export default base64ToFile
