/**
 * @description: File to Base64
 * @param { File } file :  File
 * @return { Promise }
 */
const fileToBase64 = function (file) {
    return new Promise(resole => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            resole(this.result)
        }
    })
}
export default fileToBase64
