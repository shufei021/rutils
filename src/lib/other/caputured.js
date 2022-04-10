/**
 * @description: 捕获函数
 * @param {*}
 * @return {*}
 */

export default async function caputured (asyncFunc, ...args) {
    try {
      const res = await asyncFunc(...args)
      return { err: null, res, args }
    } catch (err) {
      return { err, res: null, args }
    }
}
