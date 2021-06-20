/**
 * 是否为整数
 * @param {*} number 
 * @return {Boolean}
 */
const isInteger = number => {
    return typeof number === 'number' && !isNaN(number) && number % 1 === 0
}

export default isInteger
