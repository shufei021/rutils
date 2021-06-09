/**
 * @description: Blob  to  File
 * @param  { Blob } blob
 * @param { String } filename : file name
 * @return { File } File
 */
const blobToFile = function (blob, filename) {
    return new File([blob], filename, { type: blob.type, lastModified: Date.now() })
}
export default blobToFile
