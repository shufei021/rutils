/**
 * 验证不能包含字母
 * @param { string } value
 */
const isNoWord = value => /^[^A-Za-z]*$/g.test(value)

/**
 * 验证中文和数字
 * @param { string } value
 */
const isCHNAndEN = value =>
    /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(
        value
    )
/**
 * 验证邮政编码(中国)
 * @param { string } value
 */
const isPostcode = value => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value)

/**
 * 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
 * @param { string } value
 */
const isWeChatNum = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value)

/**
 * 验证16进制颜色
 * @param { string } value
 */
const isColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value)

/**
 * 验证火车车次
 * @param { string } value
 */
const isTrainNum = value => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value)

/**
 * 验证必须带端口号的网址(或ip)
 * @param { string } value
 */
const isHttpAndPort = value => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value)

/**
 * 验证网址(支持端口和"?+参数"和"#+参数)
 *  @param { string } value
 */
const isRightWebsite = value => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value)

/**
 * 验证统一社会信用代码
 *  @param { string } value
 */
const isCreditCode = value => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value)

/**
 * 验证版本号格式必须为X.Y.Z
 *  @param { string } value
 */
const isVersion = value => /^\d+(?:\.\d+){2}$/g.test(value)

/**
 * 验证图片链接地址（图片格式可按需增删）
 *  @param { string } value
 */
const isImageUrl = value => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value)

/**
 * 验证中文姓名
 * @param { string } value
 */
const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value)

/**
 * 验证英文姓名
 * @param { string } value
 */
const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value)

/**
 * 验证车牌号(新能源)
 * @param { string } value
 */
const isLicensePlateNumberNER = value => /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value)

/**
 * 验证车牌号(非新能源)
 * @param { string } value
 */
const isLicensePlateNumberNNER = value => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value)

/**
 * 验证车牌号(新能源+非新能源)
 * @param { string } value
 */
const isLicensePlateNumber = value =>
    /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(
        value
    )

/**
 * 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
 * @param { string } value
 */
const isMPStrict = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value)

/**
 * 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @param { string } value
 */
const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value)

/**
 * 验证email(邮箱) 收录自 有赞 vant 的 https://github.com/youzan/vant/blob/2.x/src/utils/validate/email.ts
 * @param { string } value
 */
const isEmail = function (value) {
    const reg =
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    return reg.test(value)
}
/**
 * 验证座机电话(国内),如: 0341-86091234
 * @param { string } value
 */
const isLandlineTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value)

/**
 * 验证护照（包含香港、澳门）
 * @param { string } value
 */
const isPassport = value => /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value)

/**
 * 验证中文/汉字
 * @param { string } value
 */
const isChineseCharacter = value =>
    /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(
        value
    )

/**
 * 验证小数
 * @param { string } value
 */
const isDecimal = value => /^\d+\.\d+$/g.test(value)

/**
 * 验证数字
 * @param { string } value
 */
const isNumber = value => /^\d{1,}$/g.test(value)

/**
 *
 * 验证qq号格式
 * @param { string } value
 */
const isQQNum = value => /^[1-9][0-9]{4,10}$/g.test(value)

/**
 * 验证数字和字母组成
 * @param { string } value
 */
const isNumAndStr = value => /^[A-Za-z0-9]+$/g.test(value)

/**
 * 验证英文字母
 * @param { string } value
 */
const isEnglish = value => /^[a-zA-Z]+$/g.test(value)

/**
 * 验证大写英文字母
 * @param { string } value
 */
const isCapital = value => /^[A-Z]+$/g.test(value)

/**
 * 验证小写英文字母
 * @param { string } value
 */
const isLowercase = value => /^[a-z]+$/g.test(value)

export default {
    isNoWord,
    isCHNAndEN,
    isPostcode,
    isWeChatNum,
    isColor16,
    isTrainNum,
    isHttpAndPort,
    isRightWebsite,
    isCreditCode,
    isVersion,
    isImageUrl,
    isChineseName,
    isEnglishName,
    isLicensePlateNumberNER,
    isLicensePlateNumberNNER,
    isLicensePlateNumber,
    isMPStrict,
    isMPRelaxed,
    isEmail,
    isLandlineTelephone,
    isPassport,
    isChineseCharacter,
    isDecimal,
    isNumber,
    isQQNum,
    isNumAndStr,
    isEnglish,
    isCapital,
    isLowercase
}
