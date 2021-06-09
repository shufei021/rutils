import fileToBase64 from './fileToBase64'
import base64ToBlob from './base64ToBlob'
/**
 * @description: File to Blob
 * @param  { File } file: File object
 * @return { Promise }
 */
const fileToBlob = function (file) {
    return fileToBase64(file).then(r => base64ToBlob(r))
}
export default fileToBlob
