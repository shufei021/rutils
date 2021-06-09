/**
 * @description: Blob to Base64
 * @param  {Blob} blob
 * @return {Promise<dataURL>} Base64
 */
const blobToBase64 = function (blob) {
    return new Promise(resolve => {
        let reader = new FileReader()
        reader.onload = function (e) {
            resolve(e.target.result)
        }
        reader.readAsDataURL(blob)
    })
}
export default blobToBase64
