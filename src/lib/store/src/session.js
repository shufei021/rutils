const session = sessionStorage
const _get = session.getItem.bind(session)
const _set = session.setItem.bind(session)
const _remove = session.removeItem.bind(session)
const _clear = session.clear.bind(session)
const _stringify = JSON.stringify
const _parse = v => JSON.parse(_get(v))
const isString = v => typeof v === 'string'
const isObject = v => Object.prototype.toString.call(v) === '[object Object]'
const isArray = Array.isArray

const get = function (k) {
    if (isString(k)) {
        try {
            return _parse(k)
        } catch (e) {
            return _get(k)
        }
    } else if (isArray(k)) {
        return k.reduce((p, c) => {
            let i = _parse(c)
            i && (p[c] = i)
            return p
        }, {})
    }
}

const set = function (k, v) {
    if (isString(k)) {
        _set(k, _stringify(v)) //set(key,val)
    } else if (isArray(k)) {
        //set([{key1:val1},{key2:val2}]) or set([{key1:val1,k11:val22},{key2:val2}])
        for (let i = 0; i < k.length; i++) {
            let j = k[i]
            if (isObject(j)) {
                for (let k in j) {
                    _set(k, isString(j[k]) ? j[k] : _stringify(j[k]))
                }
            }
        }
    }
}

const del = function (k) {
    if (isString(k)) {
        _remove(k)
    } else if (Array.isArray(k)) {
        for (let i = 0, len = k.length; i < len; i++) {
            let j = k[i]
            isString(j) && _remove(j)
        }
    }
}

const clearAll = function () {
    session.clear()
}

const each = function (cb) {
    let arr = Object.keys(sessionStorage)
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], get(arr[i]))
    }
}

export default {
    get,
    set,
    del,
    clearAll,
    each
}
