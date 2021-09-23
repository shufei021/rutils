!(function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module ? (module.exports = e()) : 'function' == typeof define && define.amd ? define(e) : ((t = t || self).rutils = e())
})(this, function () {
    'use strict'
    function c(t) {
        return (c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                      return typeof t
                  }
                : function (t) {
                      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                  })(t)
    }
    function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
    }
    function r(e, t) {
        var n,
            r = Object.keys(e)
        return (
            Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })),
                r.push.apply(r, n)),
            r
        )
    }
    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
                ? r(Object(n), !0).forEach(function (t) {
                      o(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : r(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
        }
        return e
    }
    function i(t) {
        return (
            (function (t) {
                if (Array.isArray(t)) return l(t)
            })(t) ||
            (function (t) {
                if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            })(t) ||
            a(t) ||
            (function () {
                throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
            })()
        )
    }
    function a(t, e) {
        if (t) {
            if ('string' == typeof t) return l(t, e)
            var n = Object.prototype.toString.call(t).slice(8, -1)
            return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
            )
        }
    }
    function l(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
    }
    String.prototype.padStart ||
        (String.prototype.padStart = function (t, e) {
            return (t >>= 0), (e = String(void 0 !== e ? e : ' ')), this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), e.slice(0, t) + String(this))
        }),
        String.prototype.padEnd ||
            (String.prototype.padEnd = function (t, e) {
                return (t >>= 0), (e = String(void 0 !== e ? e : '')), this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), String(this) + e.slice(0, t))
            })
    function f(e, n) {
        if (e === n) return !0
        if (e instanceof Date && n instanceof Date) return e.getTime() === n.getTime()
        if (!e || !n || ('object' !== c(e) && 'object' !== c(n))) return e === n
        if (e.prototype !== n.prototype) return !1
        var t = Object.keys(e)
        return (
            t.length === Object.keys(n).length &&
            ((Array.isArray(e) && Array.isArray(n)) || ('Object' == r(e) && 'Object' == r(n))) &&
            t.every(function (t) {
                return f(e[t], n[t])
            })
        )
        function r(t) {
            return Object.prototype.toString.call(t).slice(8, -1)
        }
    }
    function s(t) {
        return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
    }
    function d(t, e) {
        return s(t) === e
    }
    function h(t) {
        return (
            (i = []),
            (u = []),
            (function t(e) {
                if (null === e) return null
                if ('object' !== c(e)) return e
                var n
                d(e, 'array')
                    ? (n = [])
                    : d(e, 'regexp')
                    ? ((n = new RegExp(e.source, getRegExp(e))), e.lastIndex && (n.lastIndex = e.lastIndex))
                    : (n = d(e, 'date') ? new Date(e.getTime()) : ((o = Object.getPrototypeOf(e)), Object.create(o)))
                var r,
                    o = i.indexOf(e)
                if (-1 !== o) return u[o]
                for (r in (i.push(e), u.push(n), e)) n[r] = t(e[r])
                return n
            })(t)
        )
        var i, u
    }
    function g(t, e, n, r, o) {
        for (
            var i = 2 < arguments.length && void 0 !== n ? n : 'id', u = 3 < arguments.length && void 0 !== r ? r : 'children', c = 4 < arguments.length ? o : void 0, a = 0, l = t.length;
            a < l;
            a++
        ) {
            var f = t[a]
            if ((c.push(f), f[i] === e)) return c
            if (f[u] && f[u].length) if (g(f[u], e, i, (u = 'children'), c)) return c
            c.pop()
        }
    }
    function n(t, e) {
        for (var n in e) t.setAttribute(n, e[n])
        return t
    }
    function p(t, e) {
        return void 0 === e ? t : Number(Math.round(t + 'e' + (e || 0)) + 'e-' + (e || 0))
    }
    function y(t, e, n, r) {
        var o, i
        try {
            o = e.toString().split('.')[1].length
        } catch (t) {
            o = 0
        }
        try {
            i = n.toString().split('.')[1].length
        } catch (t) {
            i = 0
        }
        var u = Math.pow(10, Math.max(o, i)),
            c = [
                p((Math.round(u * e) + Math.round(u * n)) / u, r),
                p((Math.round(u * e) - Math.round(u * n)) / u, r),
                p((Math.round(u * e) * Math.round(u * n)) / (u * u), r),
                p(Math.round(u * e) / Math.round(u * n), r)
            ],
            u = String(p(c[t], r || 0))
        return r ? (u.includes('.') ? u.split('.')[0] + '.' + u.split('.')[1].padEnd(r, 0) : (u + '.').padEnd((u + '.').length + r, 0)) : c[t]
    }
    function m(t) {
        return 'symbol' != c(t) && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function t() {
        return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1)
    }
    function e(t) {
        for (var e = t.split(',')[0].split(':')[1].split(';')[0], n = window.atob(t.split(',')[1]), t = new ArrayBuffer(n.length), r = new Uint8Array(t), o = 0, i = n.length; o < i; o++)
            r[o] = n.charCodeAt(o)
        return new Blob([r], { type: e })
    }
    function v(n) {
        return new Promise(function (t) {
            var e = new FileReader()
            e.readAsDataURL(n),
                (e.onload = function () {
                    t(this.result)
                })
        })
    }
    function F(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : 'default'
        ;((e = document.createElement('a')).style = 'display: none'),
            document.body.appendChild(e),
            (e.download = n),
            (e.href = t),
            document.createEvent
                ? ((t = document.createEvent('MouseEvents')).initEvent('click', !0, !1), e.dispatchEvent(t))
                : document.createEventObject
                ? e.fireEvent('onclick')
                : 'function' == typeof e.onclick && e.onclick(),
            document.body.removeChild(e)
    }
    function b(t) {
        return JSON.parse(W(t))
    }
    function A(t) {
        return 'string' == typeof t
    }
    function D(t) {
        return '[object Object]' === Object.prototype.toString.call(t)
    }
    function w(t) {
        return 'symbol' != c(t) && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function E(t) {
        return JSON.parse(Q(t))
    }
    function x(t) {
        return 'string' == typeof t
    }
    function S(e) {
        if (x(e))
            try {
                return E(e)
            } catch (t) {
                return Q(e)
            }
        else if (et(e))
            return e.reduce(function (t, e) {
                var n = E(e)
                return n && (t[e] = n), t
            }, {})
    }
    var O = {
            isEmpty: function (t) {
                if (null == t) return !0
                if (null != (n = t) && 'function' != typeof n && 'number' == typeof (n = n.length) && -1 < n && n % 1 == 0 && n <= 9007199254740991)
                    try {
                        return !t.length
                    } catch (t) {}
                var e, n, r
                if (['map', 'set'].includes(((r = t), Object.prototype.toString.call(r).slice(8, -1).toLowerCase()))) return !t.size
                if (((e = t), (n = Object.prototype), (r = e && e.constructor), e === (('function' == typeof r && r.prototype) || n))) return !Object.keys(t).length
                var o,
                    i = Object.prototype.hasOwnProperty
                for (o in t) if (i.call(t, o)) return !1
                return !0
            },
            isEquals: f,
            isArray: function (t) {
                return Array.isArray(t)
            },
            isBoolean: function (t) {
                return 'boolean' == typeof t
            },
            isDate: function (t) {
                return 'date' === s(t)
            },
            isFunction: function (t) {
                return 'function' == typeof t
            },
            isNull: function (t) {
                return null === t
            },
            isNumber: function (t) {
                return 'number' == typeof t
            },
            isObject: function (t) {
                return 'object' === s(t)
            },
            isRegExp: function (t) {
                return 'regexp' === s(t)
            },
            isString: function (t) {
                return 'string' == typeof t
            },
            isType: d,
            isUndefined: function (t) {
                return void 0 === t
            },
            getType: s
        },
        T = {
            union: function (e, t, n) {
                return e.concat(
                    t.filter(function (t) {
                        return n
                            ? !e
                                  .map(function (t) {
                                      return t[n]
                                  })
                                  .includes(t[n])
                            : !e.includes(t)
                    })
                )
            },
            intersection: function (t, e, n) {
                return t.filter(function (t) {
                    return n
                        ? e
                              .map(function (t) {
                                  return t[n]
                              })
                              .includes(t[n])
                        : e.includes(t)
                })
            },
            archive: function (n, r) {
                return Array.from(
                    new Set(
                        n.map(function (t) {
                            return t[r]
                        })
                    )
                ).reduce(function (t, e) {
                    return (
                        t.push(
                            n.filter(function (t) {
                                return t[r] === e
                            })
                        ),
                        t
                    )
                }, [])
            },
            arrayFill: function (t, e) {
                return Array(t).fill(e)
            },
            arrayToObject: function (t) {
                return Array.from(t.entries()).reduce(function (t, e) {
                    return (t[e[0]] = e[1]), t
                }, {})
            },
            arrayToTree: function e(n, t, r) {
                var o = 1 < arguments.length && void 0 !== t ? t : null,
                    i = 2 < arguments.length && void 0 !== r ? r : 'pid'
                return n
                    .filter(function (t) {
                        return t[i] === o
                    })
                    .map(function (t) {
                        return u(u({}, t), {}, { children: e(n, t.id, i) })
                    })
            },
            delBy: function (t, e, n) {
                for (var r = 2 < arguments.length && void 0 !== n && n ? t : JSON.parse(JSON.stringify(t)), o = r.length - 1; 0 <= o; o--)
                    if ('function' == typeof e) e(r[o]) && r.splice(o, 1)
                    else if (Array.isArray(e)) -1 < e.indexOf(r[o]) && r.splice(o, 1)
                    else if (r[o] === e) r.splice(o, 1)
                    else if ('Object' === Object.prototype.toString.call(e).slice(8, -1)) {
                        var i,
                            u = r[o]
                        for (i in e) Array.isArray(e[i]) ? -1 < e[i].indexOf(u[i]) && r.splice(o, 1) : e[i] === u[i] && r.splice(o, 1)
                    }
                return r
            },
            except: function (t, n, r) {
                return [].concat(i(t), i(n)).filter(function (e) {
                    return ![t, n].every(function (t) {
                        return r
                            ? t
                                  .map(function (t) {
                                      return t[r]
                                  })
                                  .includes(e[r])
                            : t.includes(e)
                    })
                })
            },
            exchangePostion: function (t, e, n, r) {
                t = 3 < arguments.length && void 0 !== r && r ? t : JSON.parse(JSON.stringify(t))
                return t.splice(e, 1, t.splice(n, 1, t[e])[0]), t
            },
            flatten: function n(t, e) {
                var r = 1 < arguments.length && void 0 !== e ? e : 1
                return t.reduce(function (t, e) {
                    return t.concat(1 < r && Array.isArray(e) ? n(e, r - 1) : e)
                }, [])
            },
            group: function (r, o) {
                return i(Array(Math.ceil(r.length / o)).keys()).reduce(function (t, e, n) {
                    return t.push(r.slice(n * o, (n + 1) * o)), t
                }, [])
            },
            indexOfAll: function (t, r, o) {
                return t.reduce(function (t, e, n) {
                    return (o ? e[r] === o : e === r) ? [].concat(i(t), [n]) : t
                }, [])
            },
            insetPostion: function (t, e, n, r) {
                t = 3 < arguments.length && void 0 !== r && r ? t : JSON.parse(JSON.stringify(t))
                return t.splice(n, 0, t.splice(e, 1)[0]), t
            },
            isRepeat: function (e) {
                var n = e.length
                try {
                    for (var t = 0; t < n; t++) for (var r = t + 1; r < n; r++) if (f(e[t], e[r])) return !0
                    return !1
                } catch (t) {
                    return n !== unique(e).length
                }
            },
            mean: function (t, e) {
                return (
                    (e
                        ? t.map(
                              'function' == typeof e
                                  ? e
                                  : function (t) {
                                        return t[e]
                                    }
                          )
                        : t
                    ).reduce(function (t, e) {
                        return t + +e
                    }, 0) / t.length
                )
            },
            range: function (n, t) {
                return Array.from({ length: t - n + 1 }, function (t, e) {
                    return e + n
                })
            },
            rangeRandom: function (t, e, n, r) {
                var o = 0 < arguments.length && void 0 !== t ? t : 0,
                    i = 1 < arguments.length && void 0 !== e ? e : 0,
                    n = 2 < arguments.length && void 0 !== n ? n : 1
                if (!(3 < arguments.length && void 0 !== r) || r)
                    return Array.from({ length: n }, function () {
                        return Math.floor(Math.random() * (i - o + 1)) + o
                    })
                for (
                    var u = Array.from({ length: i - o + 1 }, function (t, e) {
                            return e + o
                        }),
                        c = n > u.length ? u.length : n,
                        a = [];
                    a.length != c;

                ) {
                    var l = u[Math.floor(Math.random() * u.length)]
                    a.includes(l) || a.push(l)
                }
                return a
            },
            rangeScopeStartZore: function (t) {
                return i(Object.keys(t).keys())
            },
            rangeStep: function (n, t, r) {
                return Array.from({ length: (t - n) / r + 1 }, function (t, e) {
                    return n + e * r
                })
            },
            sample: function (t) {
                return t[Math.floor(Math.random() * t.length)]
            },
            sum: function (t, n) {
                return t.reduce(function (t, e) {
                    return t + (n ? e[n] || 0 : e)
                }, 0)
            },
            timesTotal: function (t, n, r) {
                return t.reduce(function (t, e) {
                    return (r ? e[n] === r : e === n) ? t + 1 : t
                }, 0)
            },
            unique: function (n, r) {
                var t = []
                if (r)
                    t = n.reduce(function (t, e) {
                        return t
                            .map(function (t) {
                                return t[r]
                            })
                            .includes(e[r])
                            ? t
                            : [].concat(i(t), [e])
                    }, [])
                else
                    for (var e = 0, o = n.length; e < o; e++)
                        !(function (e) {
                            ;(0 != e &&
                                t.some(function (t) {
                                    return f(t, n[e])
                                })) ||
                                t.push(n[e])
                        })(e)
                return t
            },
            make: function (t, n, r) {
                return t.reduce(function (t, e) {
                    return [].concat(i(t), [o({}, e[n], e[r])])
                }, [])
            },
            pick: function (t, e) {
                return t.reduce(function (t, n) {
                    return [].concat(i(t), [
                        e.reduce(function (t, e) {
                            return u(u({}, t), {}, o({}, e, n[e]))
                        }, {})
                    ])
                }, [])
            },
            getTreeNode: function t(e, n, r) {
                for (var o = 2 < arguments.length && void 0 !== r ? r : 'id', i = 0, u = e.length; i < u; i++) {
                    var c = e[i]
                    if (c[o] === n) return c
                    if (c.children && c.children.length) {
                        c = t(c.children, n, o)
                        if (c) return c
                    }
                }
            },
            arrayGroup: function (t, e) {
                for (var n = [], r = 0, o = 1, i = t.length; o < i; o++) {
                    var u = t[o - 1],
                        c = t[o]
                    u[e] !== c[e] && (n.push(t.slice(r, o)), (r = o)), o === i - 1 && n.push(t.slice(r))
                }
                return n
            },
            arrayAt: function (t, e) {
                e = 1 < arguments.length && void 0 !== e ? e : 0
                return e < 0 ? t[t.length + e] : t[e]
            },
            arrayRepeat: function (t, e) {
                for (var n = 1 < arguments.length && void 0 !== e ? e : 0, r = 0, o = t; r < n; ) (o = o.concat(t)), r++
                return o
            },
            arraySubstr: function (t, e, n) {
                return t.slice(e, e + n)
            },
            delByIndexs: function (t, e, n) {
                ;(2 < arguments.length && void 0 !== n && !n) || (t = JSON.Parse(JSON.stringify(t))),
                    (e = e.sort(function (t, e) {
                        return e - t
                    }))
                for (var r = 0; r < e.length; r++) t.splice(e[r], 1)
                return t
            },
            findIndexs: function (t, e) {
                for (var n = [], r = 0; r < t.length; r++) e(t[r]) && n.push(r)
                return n
            },
            groupArchive: function (n, r) {
                return i(
                    new Set(
                        n.map(function (t) {
                            return t[r]
                        })
                    )
                ).reduce(function (t, e) {
                    return [].concat(i(t), [
                        n.filter(function (t) {
                            return t[r] === e
                        })
                    ])
                }, [])
            },
            groupState: function (t, e) {
                for (var n = [], r = 0, o = 1, i = t.length; o < i; o++) t[o - 1][e] !== t[o][e] && (n.push(t.slice(r, o)), (r = o)), o === i - 1 && n.push(t.slice(r))
                return n
            },
            lastFind: function (t, e) {
                for (var n = t.length - 1; 0 <= n; n--) if (e(t[n])) return t[n]
            },
            lastFindIndex: function (t, e) {
                for (var n = t.length - 1; 0 <= n; n--) if (e(t[n])) return n
                return -1
            },
            rangeGenerater: function (n, t) {
                return Array.from({ length: t - n + 1 }, function (t, e) {
                    return e + n
                })
            },
            arrayRestore: function (t, e, n, r) {
                return (3 < arguments.length && void 0 !== r && r) || (t = h(t)), t.splice(e, 0, t.splice(n, 1)[0]), t
            },
            getTreePath: function (t, e, n, r) {
                for (
                    var o = n.idAlias,
                        i = void 0 === o ? 'id' : o,
                        o = n.nameAlias,
                        u = void 0 === o ? 'name' : o,
                        n = n.children,
                        c = void 0 === n ? 'children' : n,
                        a = !(3 < arguments.length && void 0 !== r) || r,
                        l = 0,
                        f = t.length;
                    l < f;
                    l++
                ) {
                    var s = t[l],
                        d = []
                    if (s[i] === e) return a ? [s[u]] : [s]
                    if (s[c] && s[c].length && (g(s[c], e, i, c, d), d.length))
                        return (
                            d.unshift(s),
                            a
                                ? d.map(function (t) {
                                      return t[u]
                                  })
                                : d
                        )
                }
                return []
            },
            queryTreeNode: function (t, e, n) {
                var r = n.idAlias,
                    o = void 0 === r ? 'id' : r,
                    n = n.children,
                    i = void 0 === n ? 'children' : n
                t = h(t)
                for (var u = Array.isArray(t) ? t : [t]; u.length; ) {
                    var c = u.shift()
                    if (c[o] === e) return c
                    c[i] &&
                        c[i].length &&
                        c[i].forEach(function (t) {
                            u.push(t)
                        })
                }
            },
            queryTreePath: function t(e, n, r) {
                var o = 2 < arguments.length && void 0 !== r ? r : []
                if (!e) return []
                var i = (function (t, e) {
                    var n
                    if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (n = a(t)) || (e && t && 'number' == typeof t.length)) {
                            n && (t = n)
                            var r = 0,
                                e = function () {}
                            return {
                                s: e,
                                n: function () {
                                    return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }
                                },
                                e: function (t) {
                                    throw t
                                },
                                f: e
                            }
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
                    }
                    var o,
                        i = !0,
                        u = !1
                    return {
                        s: function () {
                            n = t[Symbol.iterator]()
                        },
                        n: function () {
                            var t = n.next()
                            return (i = t.done), t
                        },
                        e: function (t) {
                            ;(u = !0), (o = t)
                        },
                        f: function () {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                    }
                })((e = Array.isArray(e) ? e : [e]))
                try {
                    for (i.s(); !(u = i.n()).done; ) {
                        var u = u.value
                        if ((o.push(u), n(u))) return o
                        if (u.children && u.children.length) {
                            u = t(u.children, n, o)
                            if (u.length) return u
                        }
                        o.pop()
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                return []
            }
        },
        j = {
            bindEvent: function (t, e, n) {
                t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent('on' + e, n)
            },
            bufferAnimation: function (e, n, t) {
                var r,
                    o = 2 < arguments.length && void 0 !== t ? t : 'left'
                ;(e = 'string' == typeof e ? document.querySelector(e) : e) &&
                    ((r = 'left' === o ? 'offsetLeft' : 'offsetTop'),
                    clearInterval(e.timer),
                    (e.timer = setInterval(function () {
                        var t = Math.ceil((n - e[r]) / 10)
                        e[r] == n ? clearInterval(e.timer) : (e.style['left' === o ? 'left' : 'top'] = e[r] + t + 'px')
                    }, 30)))
            },
            constantAnimation: function (t, e, n) {
                var r,
                    o,
                    i = 2 < arguments.length && void 0 !== n ? n : 'left'
                ;(t = 'string' == typeof t ? document.querySelector(t) : t) &&
                    ((r = 'left' === i ? 'offsetLeft' : 'offsetTop'),
                    clearInterval(t.timer),
                    (o = e > t[r] ? 5 : -5),
                    (t.timer = setInterval(function () {
                        t[r] == e ? clearInterval(t.timer) : (t.style[i] = t[r] + o + 'px')
                    }, 30)))
            },
            debounce: function (r, o, i) {
                function t() {
                    var t,
                        e = arguments,
                        n = this
                    u && clearTimeout(u),
                        i
                            ? ((t = !u),
                              (u = setTimeout(function () {
                                  u = null
                              }, o)),
                              t && r.apply(n, e))
                            : (u = setTimeout(function () {
                                  r.apply(n, e)
                              }, o))
                }
                var u
                return (
                    (t.cancel = function () {
                        clearTimeout(u), (u = null)
                    }),
                    t
                )
            },
            fromData: function (n) {
                var t = Object.keys(n).reduce(function (t, e) {
                    return !t.append(e, n[e]) && t
                }, new FormData())
                return (
                    (t.check = function () {
                        return n
                    }),
                    t
                )
            },
            getStyle: function (t, e) {
                return (t = 'string' == typeof t ? document.querySelector(t) : t)
                    ? o({ left: t.offsetLeft, top: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight }, e, (t.currentStyle || getComputedStyle(t))[e])[e]
                    : null
            },
            hide: function (t) {
                Array.from(document.querySelectorAll(t)).forEach(function (t) {
                    return (t.style.display = 'none')
                })
            },
            isEllipsis: function (t) {
                return t.scrollHeight !== t.offsetHeight || t.scrollWidth !== t.offsetWidth
            },
            throttle: function (e, n, r) {
                var o,
                    i,
                    u,
                    c = 0
                return (
                    (r = r || {}),
                    function () {
                        ;(i = this), (u = arguments)
                        var t = new Date().valueOf()
                        !1 !== r.leading || c || (c = t),
                            n < t - c
                                ? (o && (clearTimeout(o), (o = null)), e.apply(i, u), (c = t))
                                : o ||
                                  !1 === r.trailing ||
                                  (o = setTimeout(function () {
                                      ;(c = new Date().valueOf()), (o = null), e.apply(i, u)
                                  }, n))
                    }
                )
            },
            trigger: function (t, e) {
                var n = document.createEvent('Events')
                n.initEvent(e, !0, !0), e in t ? (t[e](), ['blur', 'scroll', 'select'].includes(e) && t.dispatchEvent(n)) : t.dispatchEvent(n)
            },
            unbindEvent: function (t, e, n) {
                t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent('on' + e, n)
            },
            getAttr: function (t, e) {
                try {
                    return (t = 'string' == typeof t ? document.querySelector(t) : t).getAttribute(e)
                } catch (t) {
                    return {}
                }
            },
            setAttr: n,
            getMaxZIndex: function () {
                var t = document.querySelectorAll('*')
                return Math.max.apply(
                    Math,
                    i(
                        i(t).map(function (t) {
                            return parseInt(getComputedStyle(t).zIndex) || 1
                        })
                    )
                )
            },
            bottomVisible: function () {
                return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)
            },
            scrollToTop: function t() {
                var e = document.documentElement.scrollTop || document.body.scrollTop
                0 < e && (window.requestAnimationFrame(t), window.scrollTo(0, e - e / 8))
            },
            smoothScroll: function (t) {
                return document.querySelector(t).scrollIntoView({ behavior: 'smooth' })
            },
            getScrollPosition: function (t) {
                t = 0 < arguments.length && void 0 !== t ? t : window
                return { x: void 0 !== t.pageXOffset ? t.pageXOffset : t.scrollLeft, y: void 0 !== t.pageYOffset ? t.pageYOffset : t.scrollTop }
            },
            backTop: function (t, e) {
                var n = 1 < arguments.length && void 0 !== e ? e : 100,
                    r = document.getElementById(t),
                    o = document.documentElement,
                    i = document.body
                function u() {
                    r.style.display = o.scrollTop + i.scrollTop > n ? 'block' : 'none'
                }
                ;(window.onscroll = u),
                    (r.style.display = 'none'),
                    (r.onclick = function () {
                        ;(r.style.display = 'none'),
                            (window.onscroll = null),
                            (this.timer = setInterval(function () {
                                ;(o.scrollTop -= Math.ceil(0.1 * (o.scrollTop + i.scrollTop))),
                                    (i.scrollTop -= Math.ceil(0.1 * (o.scrollTop + i.scrollTop))),
                                    o.scrollTop + i.scrollTop == 0 && clearInterval(r.timer, (window.onscroll = u))
                            }, 10))
                    })
            },
            contains: function (t, e) {
                ;(t = 'string' == typeof t ? document.querySelector(t) : t), (e = 'string' == typeof e ? document.querySelector(e) : e)
                return !(!t || !e) && t.contains(e)
            },
            getScrollXY: function () {
                return document.body.scrollTop ? { x: document.body.scrollLeft, y: document.body.scrollTop } : { x: document.documentElement.scrollLeft, y: document.documentElement.scrollTop }
            },
            dynamicAddCss: function (n, t) {
                var r = 1 < arguments.length && void 0 !== t ? t : ''
                return new Promise(function (t) {
                    var e = document.createElement('link')
                    e.setAttribute('href', r + n + '.css'),
                        e.setAttribute('type', 'text/css'),
                        (e.onload = function () {
                            return t(e)
                        }),
                        document.getElementsByTagName('head')[0].appendChild(e)
                })
            },
            dynamicAddScript: function (e) {
                return new Promise(function (t) {
                    e.forEach(function (t) {
                        var e = document.createElement('script')
                        e.setAttribute('src', t), document.body.appendChild(e)
                    }),
                        (window.onload = function () {
                            return t()
                        })
                })
            },
            createElement: function (t, e) {
                if (t) {
                    t = document.createElement(t)
                    return 'object' === s(e) ? n(t, e) : t
                }
            },
            isScrollBottom: function (t) {
                return !!(t = 'string' == typeof t ? document.querySelector(t) : t) && t.scrollHeight - t.scrollTop === t.clientHeight
            }
        },
        C = {
            add: function n(t, r, e) {
                return Array.isArray(t)
                    ? t.length
                        ? t.reduce(function (t, e) {
                              return n(t, e, r)
                          }, 0)
                        : 0
                    : y(0, t, r, e)
            },
            calc: y,
            devide: function n(t, r, e) {
                return Array.isArray(t)
                    ? 2 <= t.length
                        ? t.reduce(function (t, e) {
                              return n(t, e, r)
                          })
                        : ''
                    : t && r
                    ? y(3, t, r, e)
                    : ''
            },
            fmtNum: function (t, e, n, r) {
                var o = 1 < arguments.length && void 0 !== e && e,
                    i = 2 < arguments.length ? n : void 0,
                    e = 3 < arguments.length ? r : void 0
                if (void 0 === t || null == t) return ''
                if (!m((n = t + ''))) return ''
                ;(r = !n.includes('.')),
                    (t = 0 == (i = void 0 === i ? (r ? 0 : n.split('.')[1].length) : i) ? Math.round(n) + '' : (r ? n : p(+n + '', i) + '').split('.')[0]),
                    (n = p(+n + '', i) + ''),
                    (n = ((n = 0 == i || r ? '' : n.split('.')[1]) || '').padEnd(i, 0)),
                    (n = (o ? t.replace(/(?=(?!\b)(\d{3})+$)/g, ',') : t) + (n.length ? '.' + n : ''))
                return e ? Number(n) : n
            },
            isNum: m,
            multiply: function n(t, r, e) {
                return Array.isArray(t)
                    ? t.length
                        ? t.reduce(function (t, e) {
                              return n(t, e, r)
                          }, 1)
                        : 0
                    : y(2, t, r, e)
            },
            round: p,
            subtract: function n(t, e, r) {
                var t = 0 < arguments.length && void 0 !== t ? t : 0,
                    o = 1 < arguments.length && void 0 !== e ? e : 0,
                    r = 2 < arguments.length ? r : void 0
                return Array.isArray(t)
                    ? t.length
                        ? t.reduce(function (t, e) {
                              return n(t, e, o)
                          })
                        : 0
                    : y(1, t, o, r)
            },
            isInteger: function (t) {
                return 'number' == typeof t && !isNaN(t) && t % 1 == 0
            }
        },
        N = window.navigator.userAgent,
        M = 'MicroMessenger' == N.match(/MicroMessenger/i),
        P = {
            isChrome: function () {
                return N.match(/Chrome/i)
            },
            isMobile: function () {
                return !!(N.match(/(iPhone|iPad|iPod)/i) || N.match(/Android/i) || N.match(/Windows Phone/i) || N.match(/IEMobile/i))
            },
            isIos: function () {
                return !!N.match(/(iPhone|iPad|iPod)/i)
            },
            isAndroid: function () {
                return !!N.match(/Android/i)
            },
            isWx: function () {
                return M && 'wxwork' != N.match(/wxwork/i)
            },
            isWxMobile: function () {
                return M && 'wxwork' != N.match(/wxwork/i) && 'Mobile' == N.match(/Mobile/i)
            },
            isWxPc: function () {
                return M && 'wxwork' != N.match(/wxwork/i) && 'Mobile' != N.match(/Mobile/i)
            },
            isWxWork: function () {
                return M && 'wxwork' == N.match(/wxwork/i)
            },
            isWxWorkMobile: function () {
                return M && 'wxwork' == N.match(/wxwork/i) && 'Mobile' == N.match(/Mobile/i)
            },
            isWxWorkPc: function () {
                return M && 'wxwork' == N.match(/wxwork/i) && 'Mobile' != N.match(/Mobile/i)
            }
        },
        I = function () {
            return Array.from(arguments).reduce(function (t, e) {
                for (var n in e) t[n] = t[n] && '[object Object]' === t[n].toString() ? I(t[n], e[n]) : (t[n] = e[n])
                return t
            }, {})
        },
        $ = {
            merge: I,
            clone: function (t) {
                var e,
                    n = {}
                for (e in t) n[e] = t[e]
                return n
            },
            deepClone: h,
            findKey: function (t, e) {
                for (var n in t) if (('function' == typeof e && e(t[n])) || (Array.isArray(e) && t[n][e[0]] === e[1]) || ('string' == typeof e && e in t[n]) || f(t[n], e)) return n
            },
            convertKey: function t(e, n, r) {
                if (!['array', 'object'].includes(s(e))) throw new TypeError('The first argument should be either an object or an array！')
                if ('[object Object]' !== Object.prototype.toString.call(n)) throw new TypeError('The parameter keyMap should be an object!')
                var o = Array.isArray(e) ? [] : {}
                if (e instanceof Object)
                    for (var i in e) {
                        var u = Object.keys(n).includes(i) ? n[i] : i
                        ;(o[u] = e[i]), r && ['array', 'object'].includes(s(e[i])) && Object.keys(e[i]).length && (o[u] = t(e[i], n, r))
                    }
                return o
            },
            get: function (t, e, n, r) {
                try {
                    if (!t) return n
                    if (!e || (Array.isArray(e) && 0 === e.length)) return n || t
                    for (var o = Array.isArray(e) ? e : e.replace(/\[(\d+)\]/g, '.$1').split('.'), i = r ? JSON.parse(JSON.stringify(t)) : t, u = 0, c = o.length; u < c; u++) {
                        i = i[((a = o[u]), isNaN(Number(a)) ? a : Number(a))]
                        if (-1 < [void 0].indexOf(i)) return n
                    }
                    return i
                } catch (t) {
                    return n
                }
                var a
            }
        },
        B = { '&': '&amp', '<': '&lt', '>': '&gt', '"': '&quot', "'": '&#39' },
        L = /[&<>"']/g,
        Z = RegExp(L.source),
        R = {
            guid: function () {
                return t() + t() + '-' + t() + '-' + t() + '-' + t() + '-' + t() + t() + t()
            },
            camelCase: function (t) {
                return t.match(/[a-zA-Z]+/g).reduce(function (t, e) {
                    return (t += (e = e.toLowerCase()).replace(e[0], e[0].toUpperCase()))
                }, '')
            },
            escape: function (t) {
                return t && Z.test(t)
                    ? t.replace(L, function (t) {
                          return B[t]
                      })
                    : t
            },
            randomHexColorCode: function () {
                return '#' + (1048575 * Math.random() * 1e6).toString(16).slice(0, 6)
            }
        },
        J = {
            isNoWord: function (t) {
                return /^[^A-Za-z]*$/g.test(t)
            },
            isCHNAndEN: function (t) {
                return /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(
                    t
                )
            },
            isPostcode: function (t) {
                return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(t)
            },
            isWeChatNum: function (t) {
                return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(t)
            },
            isColor16: function (t) {
                return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(t)
            },
            isTrainNum: function (t) {
                return /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(t)
            },
            isHttpAndPort: function (t) {
                return /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(t)
            },
            isRightWebsite: function (t) {
                return /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(t)
            },
            isCreditCode: function (t) {
                return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(t)
            },
            isVersion: function (t) {
                return /^\d+(?:\.\d+){2}$/g.test(t)
            },
            isImageUrl: function (t) {
                return /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(t)
            },
            isChineseName: function (t) {
                return /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(t)
            },
            isEnglishName: function (t) {
                return /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(t)
            },
            isLicensePlateNumberNER: function (t) {
                return /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(t)
            },
            isLicensePlateNumberNNER: function (t) {
                return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(t)
            },
            isLicensePlateNumber: function (t) {
                return /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(
                    t
                )
            },
            isMPStrict: function (t) {
                return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(t)
            },
            isMPRelaxed: function (t) {
                return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(t)
            },
            isEmail: function (t) {
                return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
                    t
                )
            },
            isLandlineTelephone: function (t) {
                return /\d{3}-\d{8}|\d{4}-\d{7}/g.test(t)
            },
            isPassport: function (t) {
                return /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(t)
            },
            isChineseCharacter: function (t) {
                return /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(
                    t
                )
            },
            isDecimal: function (t) {
                return /^\d+\.\d+$/g.test(t)
            },
            isInteger: function (t) {
                return 'number' == typeof t && !isNaN(t) && t % 1 == 0
            },
            isNumberStr: function (t) {
                return /^\d{1,}$/g.test(t)
            },
            isQQNum: function (t) {
                return /^[1-9][0-9]{4,10}$/g.test(t)
            },
            isNumAndStr: function (t) {
                return /^[A-Za-z0-9]+$/g.test(t)
            },
            isEnglish: function (t) {
                return /^[a-zA-Z]+$/g.test(t)
            },
            isCapital: function (t) {
                return /^[A-Z]+$/g.test(t)
            },
            isLowercase: function (t) {
                return /^[a-z]+$/g.test(t)
            }
        },
        z = {
            getQuery: function (t) {
                var e = 0 < arguments.length && void 0 !== t ? t : window.location.href
                try {
                    return e.includes('?')
                        ? e
                              .split('?')[1]
                              .match(/([^&=]*)=([^&]*)/g)
                              .reduce(function (t, e) {
                                  return (t[e.split('=')[0]] = decodeURIComponent(e.split('=')[1])), t
                              }, {})
                        : {}
                } catch (t) {
                    return {}
                }
            },
            urlSerialize: function (n, t) {
                var r = 1 < arguments.length && void 0 !== t ? t : {}
                return Object.keys(r).reduce(function (t, e) {
                    return t + ((t === n ? '?' : '&') + ''.concat(e, '=').concat(encodeURIComponent(r[e])))
                }, n)
            },
            urlTmtFmt: function (t, e) {
                var r = 1 < arguments.length && void 0 !== e ? e : {},
                    n = /\{(\w+)\}/g.test(t)
                        ? t.replace(/\{(\w+)\}/g, function (t, e) {
                              var n = r[e]
                              return delete r[e], n
                          })
                        : t
                return Object.keys(r).length
                    ? Object.keys(r).reduce(function (t, e) {
                          return t + ((t === n ? '?' : '&') + ''.concat(e, '=').concat(r[e]))
                      }, n)
                    : n
            }
        },
        H = {
            bytesFormat: function (t) {
                if (0 === t) return '0 B'
                if (!t) return ''
                var e = Math.floor(Math.log(t) / Math.log(1024))
                return (t / Math.pow(1024, e)).toFixed(2) + ' ' + ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][e]
            },
            base64ToBlob: e,
            base64ToFile: function (t, e) {
                for (var n = t.split(','), t = n[0].match(/:(.*?);/)[1], r = atob(n[1]), o = r.length, i = new Uint8Array(o); o--; ) i[o] = r.charCodeAt(o)
                return new File([i], e, { type: t })
            },
            blobToBase64: function (n) {
                return new Promise(function (e) {
                    var t = new FileReader()
                    ;(t.onload = function (t) {
                        e(t.target.result)
                    }),
                        t.readAsDataURL(n)
                })
            },
            blobToFile: function (t, e) {
                return new File([t], e, { type: t.type, lastModified: Date.now() })
            },
            fileToBase64: v,
            fileToBlob: function (t) {
                return v(t).then(e)
            },
            downloadByBase64: F,
            downloadByImgLink: function (r, o, i, u) {
                return new Promise(function (n, e) {
                    var t = new Image()
                    ;(t.src = r),
                        (t.crossOrigin = 'anonymous'),
                        (t.onload = function () {
                            ;(i = i || this.width), (u = u || this.height)
                            var t = document.createElement('canvas'),
                                e = t.getContext('2d')
                            t.setAttribute('width', i), t.setAttribute('height', u), e.drawImage(this, 0, 0, i, u)
                            t = t.toDataURL('image/png', 0.95)
                            F(t, o), n(t)
                        }),
                        (t.onerror = function (t) {
                            return e(t)
                        })
                })
            },
            downloadByImgSelector: function (t, i) {
                return new Promise(function (r, e) {
                    var o = new Image()
                    o.setAttribute('crossOrigin', 'anonymous'),
                        (o.onload = function () {
                            var t = document.createElement('canvas')
                            ;(t.width = o.width), (t.height = o.height), t.getContext('2d').drawImage(o, 0, 0, t.width, t.height)
                            var e = t.toDataURL('image/png'),
                                n = document.createElement('a'),
                                t = new MouseEvent('click')
                            ;(n.download = i || 'defaultName'), (n.href = e), n.dispatchEvent(t), r()
                        }),
                        (o.onerror = function (t) {
                            return e(t)
                        }),
                        (o.src = ('string' == typeof t ? document.querySelector(t) : t).src)
                })
            },
            bufferFileDownload: function (t, e) {
                var n = new Blob([t], { type: 'charset=utf-8' }),
                    t = document.createElement('a'),
                    n = window.URL.createObjectURL(n)
                ;(t.href = n), (t.download = e)
                e = document.getElementsByTagName('body')[0]
                e.appendChild(t), t.click(), e.removeChild(t), window.URL.revokeObjectURL(n)
            }
        },
        q = localStorage,
        U = q.setItem.bind(q),
        W = q.getItem.bind(q),
        Y = q.removeItem.bind(q),
        K = JSON.stringify,
        X = {
            set: function (t, e) {
                if (A(t)) U(t, A(e) ? e : K(e))
                else if (D(t)) for (var n in t) U(n, A(t[n]) ? t[n] : K(t[n]))
            },
            get: function (t) {
                return A(t)
                    ? b(t)
                    : Array.isArray(t)
                    ? t.reduce(function (t, e) {
                          return A(e) && e in q && (t[e] = b(e)), t
                      }, {})
                    : void 0
            },
            del: function (t) {
                if (A(t)) Y(t)
                else if (Array.isArray(t))
                    for (var e = 0, n = t.length; e < n; e++) {
                        var r = t[e]
                        A(r) && Y(r)
                    }
            },
            each: function (t) {
                for (var e = Object.keys(localStorage), n = 0, r = e.length; n < r; n++) {
                    var o = e[n]
                    t(o, b(o))
                }
            },
            setExpired: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
                function r(t, e, n) {
                    U(t, K({ startTime: c, expiredTime: n, value: e }))
                }
                var o = e[0],
                    i = e[1],
                    u = e[2],
                    c = +new Date()
                if (1 == e.length) {
                    if (D(o)) for (var a in o) r(a, o[a], 0)
                } else if (2 == e.length) {
                    if (A(o)) r(o, 0, i)
                    else if (D(o) && w(i)) for (var l in o) r(l, o[l], Number(i))
                } else 3 == e.length && A(o) && w(u) && r(o, i, Number(u))
            },
            getExpired: function (t) {
                if (A(t)) {
                    var e = b(t)
                    return e && 'startTime' in e ? (new Date() - e.startTime > e.expiredTime ? (Y(t), !1) : e.value) : null
                }
                for (var n = {}, r = 0; r < t.length; r++) {
                    var o,
                        i = t[r]
                    !A(i) || ((o = b(i)) && 'startTime' in o && (new Date() - o.startTime > o.expiredTime ? Y(t) : (n[i] = o.value)))
                }
                return n
            },
            clearAll: function () {
                q.clear()
            },
            clearAllExpired: function () {
                for (var t = Object.keys(q).length, e = 0; e < t; e++) {
                    var n = b(k)
                    n && 'expiredTime' in n && Y(k)
                }
            }
        },
        G = sessionStorage,
        Q = G.getItem.bind(G),
        _ = G.setItem.bind(G),
        V = G.removeItem.bind(G),
        tt = (G.clear.bind(G), JSON.stringify),
        et = Array.isArray,
        X = {
            local: X,
            session: {
                get: S,
                set: function (t, e) {
                    if (x(t)) _(t, tt(e))
                    else if (et(t))
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n]
                            if (((i = r), '[object Object]' === Object.prototype.toString.call(i))) for (var o in r) _(o, x(r[o]) ? r[o] : tt(r[o]))
                        }
                    var i
                },
                del: function (t) {
                    if (x(t)) V(t)
                    else if (Array.isArray(t))
                        for (var e = 0, n = t.length; e < n; e++) {
                            var r = t[e]
                            x(r) && V(r)
                        }
                },
                clearAll: function () {
                    G.clear()
                },
                each: function (t) {
                    for (var e = Object.keys(sessionStorage), n = 0; n < e.length; n++) t(e[n], S(e[n]))
                }
            }
        }
    return u(u(u(u(u(u(u(u(u(u(u({}, O), T), j), C), P), $), R), J), z), H), X)
})