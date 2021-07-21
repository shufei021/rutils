/**
 * Buffer下载文件
 * @param {Buffer} buffer
 * @param {String} fileName
 */
const bufferFileDownload = (buffer, fileName) => {
  /* eslint-disable */
  var blob = new Blob([buffer], { type: 'charset=utf-8' })
  var a = document.createElement('a')
  var url = window.URL.createObjectURL(blob)
  a.href = url
  a.download = fileName
  var body = document.getElementsByTagName('body')[0]
  body.appendChild(a)
  a.click()
  body.removeChild(a)
  window.URL.revokeObjectURL(url)
}

export default bufferFileDownload
