/*
 * @Description: 打包工具类 rutils.js 的打包配置
 * @Author: shufei
 * @Date: 2020-08-24 08:26:55
 * @LastEditTime: 2021-05-30 20:27:43
 * @LastEditors: Please set LastEditors
 */
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import requireContext from 'rollup-plugin-require-context'

// const fs = require('fs')
// const path = require('path')
// const lib = path.resolve(__dirname, './src/lib')
// const files = fs.readdirSync(lib)
// let buildFile = files.reduce((p, c) => {
//     p.push({
//         input: `src/index.js`,
//         output: {
//             file: `./build/index.js`,
//             format: 'umd',
//             name: 'rutils',
//             sourcemap: true
//         },
//         plugins: [
//             resolve({
//                 jsnext: true,
//                 main: true,
//                 browser: true
//             }),
//             requireContext(),
//             commonjs(),
//             babel({
//                 exclude: 'node_modules/**',
//                 runtimeHelpers: true
//             }),
//             uglify()
//         ]
//     })
//     return p
// }, [])
export default {
    input: `src/index.js`,
    output: {
        file: `./build/index.js`,
        format: 'umd',
        name: 'rutils',
        sourcemap: true
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        requireContext(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
        }),
        uglify()
    ]
}
