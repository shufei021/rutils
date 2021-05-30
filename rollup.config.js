/*
 * @Description: 打包工具类 handday.js 的打包配置
 * @Author: shufei
 * @Date: 2020-08-24 08:26:55
 * @LastEditTime: 2020-12-04 14:48:54
 * @LastEditors: shufei
 */
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import requireContext from 'rollup-plugin-require-context'

const fs = require('fs')
const path = require('path')
const lib = path.resolve(__dirname, './src/lib')
const files = fs.readdirSync(lib)
let buildFile = files.reduce((p, c) => {
    p.push({
        input: `src/lib/${c}/index.js`,
        output: {
            file: `./dist/lib/${c}/index.js`,
            format: 'umd',
            name: c,
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
    })
    return p
}, [])
export default buildFile
