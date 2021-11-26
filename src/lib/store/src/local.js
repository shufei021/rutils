const local = localStorage
const _set = local.setItem.bind(local)
const _get = local.getItem.bind(local)
const _remove = local.removeItem.bind(local)
const _parse = v => JSON.parse(_get(v))
const _stringify = JSON.stringify
const isString = v => typeof v === 'string'
const isObject = v => Object.prototype.toString.call(v) === '[object Object]'
const isNum = n => (typeof n == 'symbol' ? false : !isNaN(parseFloat(n)) && isFinite(n))

const set = function (a, b) {
    if (isString(a)) {
        _set(a, isString(b) ? b : _stringify(b))
    } else if (isObject(a)) {
        for (let k in a) {
            _set(k, isString(a[k]) ? a[k] : _stringify(a[k]))
        }
    }
}

const setExpired = function (...arg) {
    let [a, b, c] = arg
    let d = +new Date()
    let fn = function (k, v, t) {
        _set(
            k,
            _stringify({
                startTime: d, //创建并存入时间戳
                expiredTime: t, //过期时间
                value: v
            })
        )
    }
    if (arg.length == 1) {
        //设置多个值
        if (isObject(a)) {
            for (let k in a) {
                fn(k, a[k], 0)
            }
        }
    } else if (arg.length == 2) {
        if (isString(a)) {
            fn(a, 0, b)
        } else if (isObject(a) && isNum(b)) {
            for (let k in a) {
                fn(k, a[k], Number(b))
            }
        }
    } else if (arg.length == 3) {
        if (isString(a) && isNum(c)) {
            fn(a, b, Number(c))
        }
    }
}

const get = function (k,d) {
    if (isString(k)) {
        let ret = null
        try {
            ret =  _parse(k)
        } catch (e) {
            ret = _get(k)
        }
        return d!==undefined && !ret? d:ret
    } else if (Array.isArray(k)) {
        if(!k.length) return {}
        return k.reduce((p, c) => {
            let rt = null
            if (isString(c) && c in local) {
                try {
                    rt = _parse(c)
                } catch (e) {
                    rt = _get(c)
                }
                p[c] = rt
            }
            return p
        }, {})
    }
}

/**
 * @description: 获取带过期时间的缓存
 * @return {*}
 * @param {*} k
 */
const getExpired = function (k) {
    // 如果是字符串，则获取该缓存
    if(isString(k)){
        let v = _parse(k)
        if (v && 'startTime' in v) {
            // 如果大于就是过期了，如果小于或等于就还没过期
            if (new Date() - v.startTime > v.expiredTime) {
                _remove(k)
                return false
            } else {
                return v.value
            }
        } else {
            return null
        }
    }else {
        let ret = {}
        for(let i=0;i<k.length;i++){
            let key = k[i]
            if(isString(key)){
                let v = _parse(key)
                if(v && 'startTime' in v){
                    // 如果大于就是过期了，如果小于或等于就还没过期
                    if (new Date() - v.startTime > v.expiredTime) {
                        _remove(k)
                    } else {
                        ret[key]= v.value
                    }
                }
            }
        }
        return ret
    }
}

const del = function (k) {
    if (isString(k)) {
        _remove(k)
    } else if (Array.isArray(k)) {
        for (let i = 0, len = k.length; i < len; i++) {
            let j = k[i]
            if (isString(j)) {
                _remove(j)
            }
        }
    }
}

const clearAll = function () {
    local.clear()
}

const clearAllExpired = function () {
    let keys = Object.keys(local)
    let len = keys.length
    for (let i = 0; i < len; i++) {
        let o = _parse(k)
        if (o && 'expiredTime' in o) _remove(k)
    }
}

const each = function (cb) {
    let a = Object.keys(localStorage)
    for (let i = 0, len = a.length; i < len; i++) {
        let k = a[i]
        let v = _parse(k)
        cb(k, v)
    }
}

export default {
    set,
    get,
    del,
    each,
    setExpired,
    getExpired,
    clearAll,
    clearAllExpired
}
