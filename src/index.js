import './polyfill'
// base
import base from './lib/base'
// array
import array from './lib/array'
// dom
import dom from './lib/dom'
// number
import number from './lib/number'
// browser
import browser from './lib/browser'
// object
import object from './lib/object'
// string
import string from './lib/string'
// regExp
import reg from './lib/reg'
// url
import url from './lib/url'
// file
import file from './lib/file'
// store
import store from './lib/store'

export default {
    ...base,
    ...array,
    ...dom,
    ...number,
    ...browser,
    ...object,
    ...string,
    ...reg,
    ...url,
    ...file,
    ...store
}
