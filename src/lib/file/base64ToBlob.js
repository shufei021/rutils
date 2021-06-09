/**
 * @description: Base64 to Blob
 * @param { dataURL } base64 : file base64
 * @return { Blob }
 */
const base64ToBlob = function (base64) {
    let mime = base64.split(',')[0].split(':')[1].split(';')[0] //mime type
    let byte = window.atob(base64.split(',')[1]) //base64 decode
    let arrayBuffer = new ArrayBuffer(byte.length) // create buffer array
    let intArray = new Uint8Array(arrayBuffer) // create view
    for (let i = 0, len = byte.length; i < len; i++) {
        intArray[i] = byte.charCodeAt(i)
    }
    return new Blob([intArray], { type: mime })
}
export default base64ToBlob
