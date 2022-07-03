var Kh = Object.defineProperty;
var js = Object.getOwnPropertySymbols;
var Yh = Object.prototype.hasOwnProperty,
    Gh = Object.prototype.propertyIsEnumerable;
var Us = (e, t, n) => t in e ? Kh(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Fs = (e, t) => {
        for (var n in t || (t = {})) Yh.call(t, n) && Us(e, n, t[n]);
        if (js)
            for (var n of js(t)) Gh.call(t, n) && Us(e, n, t[n]);
        return e
    };
var Pa = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function qh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Xh(e) {
    if (e.__esModule) return e;
    var t = Object.defineProperty({}, "__esModule", {
        value: !0
    });
    return Object.keys(e).forEach(function (n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, r.get ? r : {
            enumerable: !0,
            get: function () {
                return e[n]
            }
        })
    }), t
}
var B = {
        exports: {}
    },
    Q = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Bs = Object.getOwnPropertySymbols,
    Qh = Object.prototype.hasOwnProperty,
    Zh = Object.prototype.propertyIsEnumerable;

function Jh(e) {
    if (e == null) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}

function em() {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function (i) {
            return t[i]
        });
        if (r.join("") !== "0123456789") return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (i) {
            o[i] = i
        }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var zs = em() ? Object.assign : function (e, t) {
    for (var n, r = Jh(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var a in n) Qh.call(n, a) && (r[a] = n[a]);
        if (Bs) {
            o = Bs(n);
            for (var u = 0; u < o.length; u++) Zh.call(n, o[u]) && (r[o[u]] = n[o[u]])
        }
    }
    return r
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa = zs,
    gn = 60103,
    Ws = 60106;
Q.Fragment = 60107;
Q.StrictMode = 60108;
Q.Profiler = 60114;
var Hs = 60109,
    $s = 60110,
    Ks = 60112;
Q.Suspense = 60113;
var Ys = 60115,
    Gs = 60116;
if (typeof Symbol == "function" && Symbol.for) {
    var Ye = Symbol.for;
    gn = Ye("react.element"), Ws = Ye("react.portal"), Q.Fragment = Ye("react.fragment"), Q.StrictMode = Ye("react.strict_mode"), Q.Profiler = Ye("react.profiler"), Hs = Ye("react.provider"), $s = Ye("react.context"), Ks = Ye("react.forward_ref"), Q.Suspense = Ye("react.suspense"), Ys = Ye("react.memo"), Gs = Ye("react.lazy")
}
var qs = typeof Symbol == "function" && Symbol.iterator;

function tm(e) {
    return e === null || typeof e != "object" ? null : (e = qs && e[qs] || e["@@iterator"], typeof e == "function" ? e : null)
}

function ar(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Xs = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    Qs = {};

function Pn(e, t, n) {
    this.props = e, this.context = t, this.refs = Qs, this.updater = n || Xs
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error(ar(85));
    this.updater.enqueueSetState(this, e, t, "setState")
};
Pn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Zs() {}
Zs.prototype = Pn.prototype;

function _a(e, t, n) {
    this.props = e, this.context = t, this.refs = Qs, this.updater = n || Xs
}
var Sa = _a.prototype = new Zs;
Sa.constructor = _a;
wa(Sa, Pn.prototype);
Sa.isPureReactComponent = !0;
var Oa = {
        current: null
    },
    Js = Object.prototype.hasOwnProperty,
    ef = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function tf(e, t, n) {
    var r, o = {},
        i = null,
        a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) Js.call(t, r) && !ef.hasOwnProperty(r) && (o[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) o.children = n;
    else if (1 < u) {
        for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
    return {
        $$typeof: gn,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: Oa.current
    }
}

function nm(e, t) {
    return {
        $$typeof: gn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ea(e) {
    return typeof e == "object" && e !== null && e.$$typeof === gn
}

function rm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var nf = /\/+/g;

function Ta(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? rm("" + e.key) : t.toString(36)
}

function ko(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else switch (i) {
    case "string":
    case "number":
        a = !0;
        break;
    case "object":
        switch (e.$$typeof) {
        case gn:
        case Ws:
            a = !0
        }
    }
    if (a) return a = e, o = o(a), e = r === "" ? "." + Ta(a, 0) : r, Array.isArray(o) ? (n = "", e != null && (n = e.replace(nf, "$&/") + "/"), ko(o, t, n, "", function (c) {
        return c
    })) : o != null && (Ea(o) && (o = nm(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(nf, "$&/") + "/") + e)), t.push(o)), 1;
    if (a = 0, r = r === "" ? "." : r + ":", Array.isArray(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var l = r + Ta(i, u);
            a += ko(i, t, n, l, o)
        } else if (l = tm(e), typeof l == "function")
            for (e = l.call(e), u = 0; !(i = e.next()).done;) i = i.value, l = r + Ta(i, u++), a += ko(i, t, n, l, o);
        else if (i === "object") throw t = "" + e, Error(ar(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
    return a
}

function Lo(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return ko(e, r, "", "", function (i) {
        return t.call(n, i, o++)
    }), r
}

function om(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), e._status = 0, e._result = t, t.then(function (n) {
            e._status === 0 && (n = n.default, e._status = 1, e._result = n)
        }, function (n) {
            e._status === 0 && (e._status = 2, e._result = n)
        })
    }
    if (e._status === 1) return e._result;
    throw e._result
}
var rf = {
    current: null
};

function ft() {
    var e = rf.current;
    if (e === null) throw Error(ar(321));
    return e
}
var im = {
    ReactCurrentDispatcher: rf,
    ReactCurrentBatchConfig: {
        transition: 0
    },
    ReactCurrentOwner: Oa,
    IsSomeRendererActing: {
        current: !1
    },
    assign: wa
};
Q.Children = {
    map: Lo,
    forEach: function (e, t, n) {
        Lo(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return Lo(e, function () {
            t++
        }), t
    },
    toArray: function (e) {
        return Lo(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!Ea(e)) throw Error(ar(143));
        return e
    }
};
Q.Component = Pn;
Q.PureComponent = _a;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = im;
Q.cloneElement = function (e, t, n) {
    if (e == null) throw Error(ar(267, e));
    var r = wa({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, a = Oa.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (l in t) Js.call(t, l) && !ef.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        u = Array(l);
        for (var c = 0; c < l; c++) u[c] = arguments[c + 2];
        r.children = u
    }
    return {
        $$typeof: gn,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: a
    }
};
Q.createContext = function (e, t) {
    return t === void 0 && (t = null), e = {
        $$typeof: $s,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
    }, e.Provider = {
        $$typeof: Hs,
        _context: e
    }, e.Consumer = e
};
Q.createElement = tf;
Q.createFactory = function (e) {
    var t = tf.bind(null, e);
    return t.type = e, t
};
Q.createRef = function () {
    return {
        current: null
    }
};
Q.forwardRef = function (e) {
    return {
        $$typeof: Ks,
        render: e
    }
};
Q.isValidElement = Ea;
Q.lazy = function (e) {
    return {
        $$typeof: Gs,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: om
    }
};
Q.memo = function (e, t) {
    return {
        $$typeof: Ys,
        type: e,
        compare: t === void 0 ? null : t
    }
};
Q.useCallback = function (e, t) {
    return ft().useCallback(e, t)
};
Q.useContext = function (e, t) {
    return ft().useContext(e, t)
};
Q.useDebugValue = function () {};
Q.useEffect = function (e, t) {
    return ft().useEffect(e, t)
};
Q.useImperativeHandle = function (e, t, n) {
    return ft().useImperativeHandle(e, t, n)
};
Q.useLayoutEffect = function (e, t) {
    return ft().useLayoutEffect(e, t)
};
Q.useMemo = function (e, t) {
    return ft().useMemo(e, t)
};
Q.useReducer = function (e, t, n) {
    return ft().useReducer(e, t, n)
};
Q.useRef = function (e) {
    return ft().useRef(e)
};
Q.useState = function (e) {
    return ft().useState(e)
};
Q.version = "17.0.2";
B.exports = Q;
var of = B.exports, af = {
    exports: {}
}, je = {}, uf = {
    exports: {}
}, lf = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    var t, n, r, o;
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var a = Date,
            u = a.now();
        e.unstable_now = function () {
            return a.now() - u
        }
    }
    if (typeof window == "undefined" || typeof MessageChannel != "function") {
        var l = null,
            c = null,
            y = function () {
                if (l !== null) try {
                    var b = e.unstable_now();
                    l(!0, b), l = null
                } catch (V) {
                    throw setTimeout(y, 0), V
                }
            };
        t = function (b) {
            l !== null ? setTimeout(t, 0, b) : (l = b, setTimeout(y, 0))
        }, n = function (b, V) {
            c = setTimeout(b, V)
        }, r = function () {
            clearTimeout(c)
        }, e.unstable_shouldYield = function () {
            return !1
        }, o = e.unstable_forceFrameRate = function () {}
    } else {
        var E = window.setTimeout,
            h = window.clearTimeout;
        if (typeof console != "undefined") {
            var P = window.cancelAnimationFrame;
            typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof P != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
        }
        var R = !1,
            x = null,
            m = -1,
            w = 5,
            _ = 0;
        e.unstable_shouldYield = function () {
            return e.unstable_now() >= _
        }, o = function () {}, e.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < b ? Math.floor(1e3 / b) : 5
        };
        var S = new MessageChannel,
            k = S.port2;
        S.port1.onmessage = function () {
            if (x !== null) {
                var b = e.unstable_now();
                _ = b + w;
                try {
                    x(!0, b) ? k.postMessage(null) : (R = !1, x = null)
                } catch (V) {
                    throw k.postMessage(null), V
                }
            } else R = !1
        }, t = function (b) {
            x = b, R || (R = !0, k.postMessage(null))
        }, n = function (b, V) {
            m = E(function () {
                b(e.unstable_now())
            }, V)
        }, r = function () {
            h(m), m = -1
        }
    }

    function O(b, V) {
        var A = b.length;
        b.push(V);
        e: for (;;) {
            var F = A - 1 >>> 1,
                H = b[F];
            if (H !== void 0 && 0 < s(H, V)) b[F] = V, b[A] = H, A = F;
            else break e
        }
    }

    function g(b) {
        return b = b[0], b === void 0 ? null : b
    }

    function d(b) {
        var V = b[0];
        if (V !== void 0) {
            var A = b.pop();
            if (A !== V) {
                b[0] = A;
                e: for (var F = 0, H = b.length; F < H;) {
                    var X = 2 * (F + 1) - 1,
                        q = b[X],
                        J = X + 1,
                        fe = b[J];
                    if (q !== void 0 && 0 > s(q, A)) fe !== void 0 && 0 > s(fe, q) ? (b[F] = fe, b[J] = A, F = J) : (b[F] = q, b[X] = A, F = X);
                    else if (fe !== void 0 && 0 > s(fe, A)) b[F] = fe, b[J] = A, F = J;
                    else break e
                }
            }
            return V
        }
        return null
    }

    function s(b, V) {
        var A = b.sortIndex - V.sortIndex;
        return A !== 0 ? A : b.id - V.id
    }
    var f = [],
        p = [],
        v = 1,
        T = null,
        L = 3,
        C = !1,
        j = !1,
        N = !1;

    function U(b) {
        for (var V = g(p); V !== null;) {
            if (V.callback === null) d(p);
            else if (V.startTime <= b) d(p), V.sortIndex = V.expirationTime, O(f, V);
            else break;
            V = g(p)
        }
    }

    function I(b) {
        if (N = !1, U(b), !j)
            if (g(f) !== null) j = !0, t(M);
            else {
                var V = g(p);
                V !== null && n(I, V.startTime - b)
            }
    }

    function M(b, V) {
        j = !1, N && (N = !1, r()), C = !0;
        var A = L;
        try {
            for (U(V), T = g(f); T !== null && (!(T.expirationTime > V) || b && !e.unstable_shouldYield());) {
                var F = T.callback;
                if (typeof F == "function") {
                    T.callback = null, L = T.priorityLevel;
                    var H = F(T.expirationTime <= V);
                    V = e.unstable_now(), typeof H == "function" ? T.callback = H : T === g(f) && d(f), U(V)
                } else d(f);
                T = g(f)
            }
            if (T !== null) var X = !0;
            else {
                var q = g(p);
                q !== null && n(I, q.startTime - V), X = !1
            }
            return X
        } finally {
            T = null, L = A, C = !1
        }
    }
    var D = o;
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (b) {
        b.callback = null
    }, e.unstable_continueExecution = function () {
        j || C || (j = !0, t(M))
    }, e.unstable_getCurrentPriorityLevel = function () {
        return L
    }, e.unstable_getFirstCallbackNode = function () {
        return g(f)
    }, e.unstable_next = function (b) {
        switch (L) {
        case 1:
        case 2:
        case 3:
            var V = 3;
            break;
        default:
            V = L
        }
        var A = L;
        L = V;
        try {
            return b()
        } finally {
            L = A
        }
    }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = D, e.unstable_runWithPriority = function (b, V) {
        switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            b = 3
        }
        var A = L;
        L = b;
        try {
            return V()
        } finally {
            L = A
        }
    }, e.unstable_scheduleCallback = function (b, V, A) {
        var F = e.unstable_now();
        switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? F + A : F) : A = F, b) {
        case 1:
            var H = -1;
            break;
        case 2:
            H = 250;
            break;
        case 5:
            H = 1073741823;
            break;
        case 4:
            H = 1e4;
            break;
        default:
            H = 5e3
        }
        return H = A + H, b = {
            id: v++,
            callback: V,
            priorityLevel: b,
            startTime: A,
            expirationTime: H,
            sortIndex: -1
        }, A > F ? (b.sortIndex = A, O(p, b), g(f) === null && b === g(p) && (N ? r() : N = !0, n(I, A - F))) : (b.sortIndex = H, O(f, b), j || C || (j = !0, t(M))), b
    }, e.unstable_wrapCallback = function (b) {
        var V = L;
        return function () {
            var A = L;
            L = V;
            try {
                return b.apply(this, arguments)
            } finally {
                L = A
            }
        }
    }
})(lf);
uf.exports = lf;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do = B.exports,
    oe = zs,
    pe = uf.exports;

function z(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
if (!Do) throw Error(z(227));
var sf = new Set,
    ur = {};

function Gt(e, t) {
    wn(e, t), wn(e + "Capture", t)
}

function wn(e, t) {
    for (ur[e] = t, e = 0; e < t.length; e++) sf.add(t[e])
}
var ct = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
    am = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ff = Object.prototype.hasOwnProperty,
    cf = {},
    pf = {};

function um(e) {
    return ff.call(pf, e) ? !0 : ff.call(cf, e) ? !1 : am.test(e) ? pf[e] = !0 : (cf[e] = !0, !1)
}

function lm(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}

function sm(e, t, n, r) {
    if (t === null || typeof t == "undefined" || lm(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
    case 3:
        return !t;
    case 4:
        return t === !1;
    case 5:
        return isNaN(t);
    case 6:
        return isNaN(t) || 1 > t
    }
    return !1
}

function Te(e, t, n, r, o, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    ve[e] = new Te(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function (e) {
    var t = e[0];
    ve[t] = new Te(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ve[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    ve[e] = new Te(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    ve[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ve[e] = new Te(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    ve[e] = new Te(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ve[e] = new Te(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    ve[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ra = /[\-:]([a-z])/g;

function Ca(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Ra, Ca);
    ve[t] = new Te(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Ra, Ca);
    ve[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Ra, Ca);
    ve[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ve[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ve.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    ve[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function xa(e, t, n, r) {
    var o = ve.hasOwnProperty(t) ? ve[t] : null,
        i = o !== null ? o.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
    i || (sm(t, n, o, r) && (n = null), r || o === null ? um(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var qt = Do.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    lr = 60103,
    Xt = 60106,
    Ot = 60107,
    ba = 60108,
    sr = 60114,
    ka = 60109,
    La = 60110,
    Mo = 60112,
    fr = 60113,
    Ao = 60120,
    Io = 60115,
    Da = 60116,
    Ma = 60121,
    Aa = 60128,
    df = 60129,
    Ia = 60130,
    Va = 60131;
if (typeof Symbol == "function" && Symbol.for) {
    var de = Symbol.for;
    lr = de("react.element"), Xt = de("react.portal"), Ot = de("react.fragment"), ba = de("react.strict_mode"), sr = de("react.profiler"), ka = de("react.provider"), La = de("react.context"), Mo = de("react.forward_ref"), fr = de("react.suspense"), Ao = de("react.suspense_list"), Io = de("react.memo"), Da = de("react.lazy"), Ma = de("react.block"), de("react.scope"), Aa = de("react.opaque.id"), df = de("react.debug_trace_mode"), Ia = de("react.offscreen"), Va = de("react.legacy_hidden")
}
var yf = typeof Symbol == "function" && Symbol.iterator;

function cr(e) {
    return e === null || typeof e != "object" ? null : (e = yf && e[yf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Na;

function pr(e) {
    if (Na === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Na = t && t[1] || ""
    }
    return `
` + Na + e
}
var ja = !1;

function Vo(e, t) {
    if (!e || ja) return "";
    ja = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (l) {
                    var r = l
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (l) {
                    r = l
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (l) {
                r = l
            }
            e()
        }
    } catch (l) {
        if (l && r && typeof l.stack == "string") {
            for (var o = l.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, u = i.length - 1; 1 <= a && 0 <= u && o[a] !== i[u];) u--;
            for (; 1 <= a && 0 <= u; a--, u--)
                if (o[a] !== i[u]) {
                    if (a !== 1 || u !== 1)
                        do
                            if (a--, u--, 0 > u || o[a] !== i[u]) return `
` + o[a].replace(" at new ", " at "); while (1 <= a && 0 <= u);
                    break
                }
        }
    } finally {
        ja = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? pr(e) : ""
}

function fm(e) {
    switch (e.tag) {
    case 5:
        return pr(e.type);
    case 16:
        return pr("Lazy");
    case 13:
        return pr("Suspense");
    case 19:
        return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Vo(e.type, !1), e;
    case 11:
        return e = Vo(e.type.render, !1), e;
    case 22:
        return e = Vo(e.type._render, !1), e;
    case 1:
        return e = Vo(e.type, !0), e;
    default:
        return ""
    }
}

function _n(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
    case Ot:
        return "Fragment";
    case Xt:
        return "Portal";
    case sr:
        return "Profiler";
    case ba:
        return "StrictMode";
    case fr:
        return "Suspense";
    case Ao:
        return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
    case La:
        return (e.displayName || "Context") + ".Consumer";
    case ka:
        return (e._context.displayName || "Context") + ".Provider";
    case Mo:
        var t = e.render;
        return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case Io:
        return _n(e.type);
    case Ma:
        return _n(e._render);
    case Da:
        t = e._payload, e = e._init;
        try {
            return _n(e(t))
        } catch {}
    }
    return null
}

function Et(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
        return e;
    default:
        return ""
    }
}

function vf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function cm(e) {
    var t = vf(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return o.call(this)
            },
            set: function (a) {
                r = "" + a, i.call(this, a)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function () {
                return r
            },
            setValue: function (a) {
                r = "" + a
            },
            stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function No(e) {
    e._valueTracker || (e._valueTracker = cm(e))
}

function hf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = vf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function jo(e) {
    if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Ua(e, t) {
    var n = t.checked;
    return oe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked
    })
}

function mf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Et(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function gf(e, t) {
    t = t.checked, t != null && xa(e, "checked", t, !1)
}

function Fa(e, t) {
    gf(e, t);
    var n = Et(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ba(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ba(e, t.type, Et(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Pf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ba(e, t, n) {
    (t !== "number" || jo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

function pm(e) {
    var t = "";
    return Do.Children.forEach(e, function (n) {
        n != null && (t += n)
    }), t
}

function za(e, t) {
    return e = oe({
        children: void 0
    }, t), (t = pm(t.children)) && (e.children = t), e
}

function Sn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Et(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Wa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
    return oe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function wf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(z(92));
            if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(z(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Et(n)
    }
}

function _f(e, t) {
    var n = Et(t.value),
        r = Et(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Sf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
var Ha = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg"
};

function Of(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}

function $a(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Of(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Uo, Ef = function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== Ha.svg || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Uo = Uo || document.createElement("div"), Uo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Uo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function dr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var yr = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    dm = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function (e) {
    dm.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), yr[t] = yr[e]
    })
});

function Tf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || yr.hasOwnProperty(e) && yr[e] ? ("" + t).trim() : t + "px"
}

function Rf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Tf(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var ym = oe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Ka(e, t) {
    if (t) {
        if (ym[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(z(60));
            if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(z(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(z(62))
    }
}

function Ya(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}

function Ga(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var qa = null,
    On = null,
    En = null;

function Cf(e) {
    if (e = Mr(e)) {
        if (typeof qa != "function") throw Error(z(280));
        var t = e.stateNode;
        t && (t = ri(t), qa(e.stateNode, e.type, t))
    }
}

function xf(e) {
    On ? En ? En.push(e) : En = [e] : On = e
}

function bf() {
    if (On) {
        var e = On,
            t = En;
        if (En = On = null, Cf(e), t)
            for (e = 0; e < t.length; e++) Cf(t[e])
    }
}

function Xa(e, t) {
    return e(t)
}

function kf(e, t, n, r, o) {
    return e(t, n, r, o)
}

function Qa() {}
var Lf = Xa,
    Qt = !1,
    Za = !1;

function Ja() {
    (On !== null || En !== null) && (Qa(), bf())
}

function vm(e, t, n) {
    if (Za) return e(t, n);
    Za = !0;
    try {
        return Lf(e, t, n)
    } finally {
        Za = !1, Ja()
    }
}

function vr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ri(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default:
        e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(z(231, t, typeof n));
    return n
}
var eu = !1;
if (ct) try {
    var hr = {};
    Object.defineProperty(hr, "passive", {
        get: function () {
            eu = !0
        }
    }), window.addEventListener("test", hr, hr), window.removeEventListener("test", hr, hr)
} catch {
    eu = !1
}

function hm(e, t, n, r, o, i, a, u, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (y) {
        this.onError(y)
    }
}
var mr = !1,
    Fo = null,
    Bo = !1,
    tu = null,
    mm = {
        onError: function (e) {
            mr = !0, Fo = e
        }
    };

function gm(e, t, n, r, o, i, a, u, l) {
    mr = !1, Fo = null, hm.apply(mm, arguments)
}

function Pm(e, t, n, r, o, i, a, u, l) {
    if (gm.apply(this, arguments), mr) {
        if (mr) {
            var c = Fo;
            mr = !1, Fo = null
        } else throw Error(z(198));
        Bo || (Bo = !0, tu = c)
    }
}

function Zt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, (t.flags & 1026) != 0 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Df(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Mf(e) {
    if (Zt(e) !== e) throw Error(z(188))
}

function wm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Zt(e), t === null) throw Error(z(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Mf(o), e;
                if (i === r) return Mf(o), t;
                i = i.sibling
            }
            throw Error(z(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var a = !1, u = o.child; u;) {
                if (u === n) {
                    a = !0, n = o, r = i;
                    break
                }
                if (u === r) {
                    a = !0, r = o, n = i;
                    break
                }
                u = u.sibling
            }
            if (!a) {
                for (u = i.child; u;) {
                    if (u === n) {
                        a = !0, n = i, r = o;
                        break
                    }
                    if (u === r) {
                        a = !0, r = i, n = o;
                        break
                    }
                    u = u.sibling
                }
                if (!a) throw Error(z(189))
            }
        }
        if (n.alternate !== r) throw Error(z(190))
    }
    if (n.tag !== 3) throw Error(z(188));
    return n.stateNode.current === n ? e : t
}

function Af(e) {
    if (e = wm(e), !e) return null;
    for (var t = e;;) {
        if (t.tag === 5 || t.tag === 6) return t;
        if (t.child) t.child.return = t, t = t.child;
        else {
            if (t === e) break;
            for (; !t.sibling;) {
                if (!t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return null
}

function If(e, t) {
    for (var n = e.alternate; t !== null;) {
        if (t === e || t === n) return !0;
        t = t.return
    }
    return !1
}
var Vf, nu, Nf, jf, ru = !1,
    Ze = [],
    Tt = null,
    Rt = null,
    Ct = null,
    gr = new Map,
    Pr = new Map,
    wr = [],
    Uf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function ou(e, t, n, r, o) {
    return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: n | 16,
        nativeEvent: o,
        targetContainers: [r]
    }
}

function Ff(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Tt = null;
        break;
    case "dragenter":
    case "dragleave":
        Rt = null;
        break;
    case "mouseover":
    case "mouseout":
        Ct = null;
        break;
    case "pointerover":
    case "pointerout":
        gr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Pr.delete(t.pointerId)
    }
}

function _r(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = ou(t, n, r, o, i), t !== null && (t = Mr(t), t !== null && nu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function _m(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Tt = _r(Tt, e, t, n, r, o), !0;
    case "dragenter":
        return Rt = _r(Rt, e, t, n, r, o), !0;
    case "mouseover":
        return Ct = _r(Ct, e, t, n, r, o), !0;
    case "pointerover":
        var i = o.pointerId;
        return gr.set(i, _r(gr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
        return i = o.pointerId, Pr.set(i, _r(Pr.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Sm(e) {
    var t = Jt(e.target);
    if (t !== null) {
        var n = Zt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Df(n), t !== null) {
                    e.blockedOn = t, jf(e.lanePriority, function () {
                        pe.unstable_runWithPriority(e.priority, function () {
                            Nf(n)
                        })
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.hydrate) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function zo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = fu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null) return t = Mr(n), t !== null && nu(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Bf(e, t, n) {
    zo(e) && n.delete(t)
}

function Om() {
    for (ru = !1; 0 < Ze.length;) {
        var e = Ze[0];
        if (e.blockedOn !== null) {
            e = Mr(e.blockedOn), e !== null && Vf(e);
            break
        }
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = fu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n !== null) {
                e.blockedOn = n;
                break
            }
            t.shift()
        }
        e.blockedOn === null && Ze.shift()
    }
    Tt !== null && zo(Tt) && (Tt = null), Rt !== null && zo(Rt) && (Rt = null), Ct !== null && zo(Ct) && (Ct = null), gr.forEach(Bf), Pr.forEach(Bf)
}

function Sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ru || (ru = !0, pe.unstable_scheduleCallback(pe.unstable_NormalPriority, Om)))
}

function zf(e) {
    function t(o) {
        return Sr(o, e)
    }
    if (0 < Ze.length) {
        Sr(Ze[0], e);
        for (var n = 1; n < Ze.length; n++) {
            var r = Ze[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Tt !== null && Sr(Tt, e), Rt !== null && Sr(Rt, e), Ct !== null && Sr(Ct, e), gr.forEach(t), Pr.forEach(t), n = 0; n < wr.length; n++) r = wr[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < wr.length && (n = wr[0], n.blockedOn === null);) Sm(n), n.blockedOn === null && wr.shift()
}

function Wo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Tn = {
        animationend: Wo("Animation", "AnimationEnd"),
        animationiteration: Wo("Animation", "AnimationIteration"),
        animationstart: Wo("Animation", "AnimationStart"),
        transitionend: Wo("Transition", "TransitionEnd")
    },
    iu = {},
    Wf = {};
ct && (Wf = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);

function Ho(e) {
    if (iu[e]) return iu[e];
    if (!Tn[e]) return e;
    var t = Tn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Wf) return iu[e] = t[n];
    return e
}
var Hf = Ho("animationend"),
    $f = Ho("animationiteration"),
    Kf = Ho("animationstart"),
    Yf = Ho("transitionend"),
    Gf = new Map,
    au = new Map,
    Em = ["abort", "abort", Hf, "animationEnd", $f, "animationIteration", Kf, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Yf, "transitionEnd", "waiting", "waiting"];

function uu(e, t) {
    for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
            o = e[n + 1];
        o = "on" + (o[0].toUpperCase() + o.slice(1)), au.set(r, t), Gf.set(r, o), Gt(o, [r])
    }
}
var Tm = pe.unstable_now;
Tm();
var ee = 8;

function Rn(e) {
    if ((1 & e) != 0) return ee = 15, 1;
    if ((2 & e) != 0) return ee = 14, 2;
    if ((4 & e) != 0) return ee = 13, 4;
    var t = 24 & e;
    return t !== 0 ? (ee = 12, t) : (e & 32) != 0 ? (ee = 11, 32) : (t = 192 & e, t !== 0 ? (ee = 10, t) : (e & 256) != 0 ? (ee = 9, 256) : (t = 3584 & e, t !== 0 ? (ee = 8, t) : (e & 4096) != 0 ? (ee = 7, 4096) : (t = 4186112 & e, t !== 0 ? (ee = 6, t) : (t = 62914560 & e, t !== 0 ? (ee = 5, t) : e & 67108864 ? (ee = 4, 67108864) : (e & 134217728) != 0 ? (ee = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (ee = 2, t) : (1073741824 & e) != 0 ? (ee = 1, 1073741824) : (ee = 8, e))))))
}

function Rm(e) {
    switch (e) {
    case 99:
        return 15;
    case 98:
        return 10;
    case 97:
    case 96:
        return 8;
    case 95:
        return 2;
    default:
        return 0
    }
}

function Cm(e) {
    switch (e) {
    case 15:
    case 14:
        return 99;
    case 13:
    case 12:
    case 11:
    case 10:
        return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
        return 97;
    case 3:
    case 2:
    case 1:
        return 95;
    case 0:
        return 90;
    default:
        throw Error(z(358, e))
    }
}

function Or(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return ee = 0;
    var r = 0,
        o = 0,
        i = e.expiredLanes,
        a = e.suspendedLanes,
        u = e.pingedLanes;
    if (i !== 0) r = i, o = ee = 15;
    else if (i = n & 134217727, i !== 0) {
        var l = i & ~a;
        l !== 0 ? (r = Rn(l), o = ee) : (u &= i, u !== 0 && (r = Rn(u), o = ee))
    } else i = n & ~a, i !== 0 ? (r = Rn(i), o = ee) : u !== 0 && (r = Rn(u), o = ee);
    if (r === 0) return 0;
    if (r = 31 - xt(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && (t & a) == 0) {
        if (Rn(t), o <= ee) return t;
        ee = o
    }
    if (t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - xt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function qf(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function $o(e, t) {
    switch (e) {
    case 15:
        return 1;
    case 14:
        return 2;
    case 12:
        return e = Cn(24 & ~t), e === 0 ? $o(10, t) : e;
    case 10:
        return e = Cn(192 & ~t), e === 0 ? $o(8, t) : e;
    case 8:
        return e = Cn(3584 & ~t), e === 0 && (e = Cn(4186112 & ~t), e === 0 && (e = 512)), e;
    case 2:
        return t = Cn(805306368 & ~t), t === 0 && (t = 268435456), t
    }
    throw Error(z(358, e))
}

function Cn(e) {
    return e & -e
}

function lu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Ko(e, t, n) {
    e.pendingLanes |= t;
    var r = t - 1;
    e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - xt(t), e[t] = n
}
var xt = Math.clz32 ? Math.clz32 : km,
    xm = Math.log,
    bm = Math.LN2;

function km(e) {
    return e === 0 ? 32 : 31 - (xm(e) / bm | 0) | 0
}
var Lm = pe.unstable_UserBlockingPriority,
    Dm = pe.unstable_runWithPriority,
    Yo = !0;

function Mm(e, t, n, r) {
    Qt || Qa();
    var o = su,
        i = Qt;
    Qt = !0;
    try {
        kf(o, e, t, n, r)
    } finally {
        (Qt = i) || Ja()
    }
}

function Am(e, t, n, r) {
    Dm(Lm, su.bind(null, e, t, n, r))
}

function su(e, t, n, r) {
    if (Yo) {
        var o;
        if ((o = (t & 4) == 0) && 0 < Ze.length && -1 < Uf.indexOf(e)) e = ou(null, e, t, n, r), Ze.push(e);
        else {
            var i = fu(e, t, n, r);
            if (i === null) o && Ff(e, r);
            else {
                if (o) {
                    if (-1 < Uf.indexOf(e)) {
                        e = ou(i, e, t, n, r), Ze.push(e);
                        return
                    }
                    if (_m(i, e, t, n, r)) return;
                    Ff(e, r)
                }
                Tc(e, t, r, null, n)
            }
        }
    }
}

function fu(e, t, n, r) {
    var o = Ga(r);
    if (o = Jt(o), o !== null) {
        var i = Zt(o);
        if (i === null) o = null;
        else {
            var a = i.tag;
            if (a === 13) {
                if (o = Df(i), o !== null) return o;
                o = null
            } else if (a === 3) {
                if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
                o = null
            } else i !== o && (o = null)
        }
    }
    return Tc(e, t, r, o, n), null
}
var bt = null,
    cu = null,
    Go = null;

function Xf() {
    if (Go) return Go;
    var e, t = cu,
        n = t.length,
        r, o = "value" in bt ? bt.value : bt.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
    return Go = o.slice(e, 1 < r ? 1 - r : void 0)
}

function qo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Xo() {
    return !0
}

function Qf() {
    return !1
}

function Ae(e) {
    function t(n, r, o, i, a) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Xo : Qf, this.isPropagationStopped = Qf, this
    }
    return oe(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xo)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xo)
        },
        persist: function () {},
        isPersistent: Xo
    }), t
}
var xn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    pu = Ae(xn),
    Er = oe({}, xn, {
        view: 0,
        detail: 0
    }),
    Im = Ae(Er),
    du, yu, Tr, Qo = oe({}, Er, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: hu,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (du = e.screenX - Tr.screenX, yu = e.screenY - Tr.screenY) : yu = du = 0, Tr = e), du)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : yu
        }
    }),
    Zf = Ae(Qo),
    Vm = oe({}, Qo, {
        dataTransfer: 0
    }),
    Nm = Ae(Vm),
    jm = oe({}, Er, {
        relatedTarget: 0
    }),
    vu = Ae(jm),
    Um = oe({}, xn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Fm = Ae(Um),
    Bm = oe({}, xn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    zm = Ae(Bm),
    Wm = oe({}, xn, {
        data: 0
    }),
    Jf = Ae(Wm),
    Hm = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    $m = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Km = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Ym(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Km[e]) ? !!t[e] : !1
}

function hu() {
    return Ym
}
var Gm = oe({}, Er, {
        key: function (e) {
            if (e.key) {
                var t = Hm[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = qo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $m[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: hu,
        charCode: function (e) {
            return e.type === "keypress" ? qo(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? qo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    qm = Ae(Gm),
    Xm = oe({}, Qo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    ec = Ae(Xm),
    Qm = oe({}, Er, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: hu
    }),
    Zm = Ae(Qm),
    Jm = oe({}, xn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    eg = Ae(Jm),
    tg = oe({}, Qo, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    ng = Ae(tg),
    rg = [9, 13, 27, 32],
    mu = ct && "CompositionEvent" in window,
    Rr = null;
ct && "documentMode" in document && (Rr = document.documentMode);
var og = ct && "TextEvent" in window && !Rr,
    tc = ct && (!mu || Rr && 8 < Rr && 11 >= Rr),
    nc = String.fromCharCode(32),
    rc = !1;

function oc(e, t) {
    switch (e) {
    case "keyup":
        return rg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}

function ic(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var bn = !1;

function ig(e, t) {
    switch (e) {
    case "compositionend":
        return ic(t);
    case "keypress":
        return t.which !== 32 ? null : (rc = !0, nc);
    case "textInput":
        return e = t.data, e === nc && rc ? null : e;
    default:
        return null
    }
}

function ag(e, t) {
    if (bn) return e === "compositionend" || !mu && oc(e, t) ? (e = Xf(), Go = cu = bt = null, bn = !1, e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return tc && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var ug = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ug[e.type] : t === "textarea"
}

function uc(e, t, n, r) {
    xf(r), t = Jo(t, "onChange"), 0 < t.length && (n = new pu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Cr = null,
    xr = null;

function lg(e) {
    wc(e, 0)
}

function Zo(e) {
    var t = An(e);
    if (hf(t)) return e
}

function sg(e, t) {
    if (e === "change") return t
}
var lc = !1;
if (ct) {
    var gu;
    if (ct) {
        var Pu = "oninput" in document;
        if (!Pu) {
            var sc = document.createElement("div");
            sc.setAttribute("oninput", "return;"), Pu = typeof sc.oninput == "function"
        }
        gu = Pu
    } else gu = !1;
    lc = gu && (!document.documentMode || 9 < document.documentMode)
}

function fc() {
    Cr && (Cr.detachEvent("onpropertychange", cc), xr = Cr = null)
}

function cc(e) {
    if (e.propertyName === "value" && Zo(xr)) {
        var t = [];
        if (uc(t, xr, e, Ga(e)), e = lg, Qt) e(t);
        else {
            Qt = !0;
            try {
                Xa(e, t)
            } finally {
                Qt = !1, Ja()
            }
        }
    }
}

function fg(e, t, n) {
    e === "focusin" ? (fc(), Cr = t, xr = n, Cr.attachEvent("onpropertychange", cc)) : e === "focusout" && fc()
}

function cg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Zo(xr)
}

function pg(e, t) {
    if (e === "click") return Zo(t)
}

function dg(e, t) {
    if (e === "input" || e === "change") return Zo(t)
}

function yg(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
}
var Ue = typeof Object.is == "function" ? Object.is : yg,
    vg = Object.prototype.hasOwnProperty;

function br(e, t) {
    if (Ue(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++)
        if (!vg.call(t, n[r]) || !Ue(e[n[r]], t[n[r]])) return !1;
    return !0
}

function pc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function dc(e, t) {
    var n = pc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = pc(n)
    }
}

function yc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function vc() {
    for (var e = window, t = jo(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = jo(e.document)
    }
    return t
}

function wu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
var hg = ct && "documentMode" in document && 11 >= document.documentMode,
    kn = null,
    _u = null,
    kr = null,
    Su = !1;

function hc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Su || kn == null || kn !== jo(r) || (r = kn, "selectionStart" in r && wu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), kr && br(kr, r) || (kr = r, r = Jo(_u, "onSelect"), 0 < r.length && (t = new pu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = kn)))
}
uu("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
uu("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
uu(Em, 2);
for (var mc = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Ou = 0; Ou < mc.length; Ou++) au.set(mc[Ou], 0);
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
Gt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Gt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Gt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Gt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    gc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));

function Pc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Pm(r, t, void 0, e), e.currentTarget = null
}

function wc(e, t) {
    t = (t & 4) != 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var u = r[a],
                        l = u.instance,
                        c = u.currentTarget;
                    if (u = u.listener, l !== i && o.isPropagationStopped()) break e;
                    Pc(o, u, c), i = l
                } else
                    for (a = 0; a < r.length; a++) {
                        if (u = r[a], l = u.instance, c = u.currentTarget, u = u.listener, l !== i && o.isPropagationStopped()) break e;
                        Pc(o, u, c), i = l
                    }
        }
    }
    if (Bo) throw e = tu, Bo = !1, tu = null, e
}

function ne(e, t) {
    var n = Lc(t),
        r = e + "__bubble";
    n.has(r) || (Ec(t, e, 2, !1), n.add(r))
}
var _c = "_reactListening" + Math.random().toString(36).slice(2);

function Sc(e) {
    e[_c] || (e[_c] = !0, sf.forEach(function (t) {
        gc.has(t) || Oc(t, !1, e, null), Oc(t, !0, e, null)
    }))
}

function Oc(e, t, n, r) {
    var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
        i = n;
    if (e === "selectionchange" && n.nodeType !== 9 && (i = n.ownerDocument), r !== null && !t && gc.has(e)) {
        if (e !== "scroll") return;
        o |= 2, i = r
    }
    var a = Lc(i),
        u = e + "__" + (t ? "capture" : "bubble");
    a.has(u) || (t && (o |= 4), Ec(i, e, o, t), a.add(u))
}

function Ec(e, t, n, r) {
    var o = au.get(t);
    switch (o === void 0 ? 2 : o) {
    case 0:
        o = Mm;
        break;
    case 1:
        o = Am;
        break;
    default:
        o = su
    }
    n = o.bind(null, t, n, e), o = void 0, !eu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function Tc(e, t, n, r, o) {
    var i = r;
    if ((t & 1) == 0 && (t & 2) == 0 && r !== null) e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
            var u = r.stateNode.containerInfo;
            if (u === o || u.nodeType === 8 && u.parentNode === o) break;
            if (a === 4)
                for (a = r.return; a !== null;) {
                    var l = a.tag;
                    if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                    a = a.return
                }
            for (; u !== null;) {
                if (a = Jt(u), a === null) return;
                if (l = a.tag, l === 5 || l === 6) {
                    r = i = a;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    vm(function () {
        var c = i,
            y = Ga(n),
            E = [];
        e: {
            var h = Gf.get(e);
            if (h !== void 0) {
                var P = pu,
                    R = e;
                switch (e) {
                case "keypress":
                    if (qo(n) === 0) break e;
                case "keydown":
                case "keyup":
                    P = qm;
                    break;
                case "focusin":
                    R = "focus", P = vu;
                    break;
                case "focusout":
                    R = "blur", P = vu;
                    break;
                case "beforeblur":
                case "afterblur":
                    P = vu;
                    break;
                case "click":
                    if (n.button === 2) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    P = Zf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    P = Nm;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    P = Zm;
                    break;
                case Hf:
                case $f:
                case Kf:
                    P = Fm;
                    break;
                case Yf:
                    P = eg;
                    break;
                case "scroll":
                    P = Im;
                    break;
                case "wheel":
                    P = ng;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    P = zm;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    P = ec
                }
                var x = (t & 4) != 0,
                    m = !x && e === "scroll",
                    w = x ? h !== null ? h + "Capture" : null : h;
                x = [];
                for (var _ = c, S; _ !== null;) {
                    S = _;
                    var k = S.stateNode;
                    if (S.tag === 5 && k !== null && (S = k, w !== null && (k = vr(_, w), k != null && x.push(Dr(_, k, S)))), m) break;
                    _ = _.return
                }
                0 < x.length && (h = new P(h, R, null, n, y), E.push({
                    event: h,
                    listeners: x
                }))
            }
        }
        if ((t & 7) == 0) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", P = e === "mouseout" || e === "pointerout", h && (t & 16) == 0 && (R = n.relatedTarget || n.fromElement) && (Jt(R) || R[Mn])) break e;
                if ((P || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, P ? (R = n.relatedTarget || n.toElement, P = c, R = R ? Jt(R) : null, R !== null && (m = Zt(R), R !== m || R.tag !== 5 && R.tag !== 6) && (R = null)) : (P = null, R = c), P !== R)) {
                    if (x = Zf, k = "onMouseLeave", w = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (x = ec, k = "onPointerLeave", w = "onPointerEnter", _ = "pointer"), m = P == null ? h : An(P), S = R == null ? h : An(R), h = new x(k, _ + "leave", P, n, y), h.target = m, h.relatedTarget = S, k = null, Jt(y) === c && (x = new x(w, _ + "enter", R, n, y), x.target = S, x.relatedTarget = m, k = x), m = k, P && R) t: {
                        for (x = P, w = R, _ = 0, S = x; S; S = Ln(S)) _++;
                        for (S = 0, k = w; k; k = Ln(k)) S++;
                        for (; 0 < _ - S;) x = Ln(x),
                        _--;
                        for (; 0 < S - _;) w = Ln(w),
                        S--;
                        for (; _--;) {
                            if (x === w || w !== null && x === w.alternate) break t;
                            x = Ln(x), w = Ln(w)
                        }
                        x = null
                    }
                    else x = null;
                    P !== null && Rc(E, h, P, x, !1), R !== null && m !== null && Rc(E, m, R, x, !0)
                }
            }
            e: {
                if (h = c ? An(c) : window, P = h.nodeName && h.nodeName.toLowerCase(), P === "select" || P === "input" && h.type === "file") var O = sg;
                else if (ac(h))
                    if (lc) O = dg;
                    else {
                        O = cg;
                        var g = fg
                    }
                else(P = h.nodeName) && P.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (O = pg);
                if (O && (O = O(e, c))) {
                    uc(E, O, n, y);
                    break e
                }
                g && g(e, h, c),
                e === "focusout" && (g = h._wrapperState) && g.controlled && h.type === "number" && Ba(h, "number", h.value)
            }
            switch (g = c ? An(c) : window, e) {
            case "focusin":
                (ac(g) || g.contentEditable === "true") && (kn = g, _u = c, kr = null);
                break;
            case "focusout":
                kr = _u = kn = null;
                break;
            case "mousedown":
                Su = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Su = !1, hc(E, n, y);
                break;
            case "selectionchange":
                if (hg) break;
            case "keydown":
            case "keyup":
                hc(E, n, y)
            }
            var d;
            if (mu) e: {
                switch (e) {
                case "compositionstart":
                    var s = "onCompositionStart";
                    break e;
                case "compositionend":
                    s = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    s = "onCompositionUpdate";
                    break e
                }
                s = void 0
            }
            else bn ? oc(e, n) && (s = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (s = "onCompositionStart");s && (tc && n.locale !== "ko" && (bn || s !== "onCompositionStart" ? s === "onCompositionEnd" && bn && (d = Xf()) : (bt = y, cu = "value" in bt ? bt.value : bt.textContent, bn = !0)), g = Jo(c, s), 0 < g.length && (s = new Jf(s, e, null, n, y), E.push({
                event: s,
                listeners: g
            }), d ? s.data = d : (d = ic(n), d !== null && (s.data = d)))),
            (d = og ? ig(e, n) : ag(e, n)) && (c = Jo(c, "onBeforeInput"), 0 < c.length && (y = new Jf("onBeforeInput", "beforeinput", null, n, y), E.push({
                event: y,
                listeners: c
            }), y.data = d))
        }
        wc(E, t)
    })
}

function Dr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Jo(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = vr(e, n), i != null && r.unshift(Dr(e, i, o)), i = vr(e, t), i != null && r.push(Dr(e, i, o))), e = e.return
    }
    return r
}

function Ln(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Rc(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r;) {
        var u = n,
            l = u.alternate,
            c = u.stateNode;
        if (l !== null && l === r) break;
        u.tag === 5 && c !== null && (u = c, o ? (l = vr(n, i), l != null && a.unshift(Dr(n, l, u))) : o || (l = vr(n, i), l != null && a.push(Dr(n, l, u)))), n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}

function ei() {}
var Eu = null,
    Tu = null;

function Cc(e, t) {
    switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
        return !!t.autoFocus
    }
    return !1
}

function Ru(e, t) {
    return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var xc = typeof setTimeout == "function" ? setTimeout : void 0,
    mg = typeof clearTimeout == "function" ? clearTimeout : void 0;

function Cu(e) {
    e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""))
}

function Dn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break
    }
    return e
}

function bc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var xu = 0;

function gg(e) {
    return {
        $$typeof: Aa,
        toString: e,
        valueOf: e
    }
}
var ti = Math.random().toString(36).slice(2),
    kt = "__reactFiber$" + ti,
    ni = "__reactProps$" + ti,
    Mn = "__reactContainer$" + ti,
    kc = "__reactEvents$" + ti;

function Jt(e) {
    var t = e[kt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Mn] || n[kt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = bc(e); e !== null;) {
                    if (n = e[kt]) return n;
                    e = bc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Mr(e) {
    return e = e[kt] || e[Mn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function An(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(z(33))
}

function ri(e) {
    return e[ni] || null
}

function Lc(e) {
    var t = e[kc];
    return t === void 0 && (t = e[kc] = new Set), t
}
var bu = [],
    In = -1;

function Lt(e) {
    return {
        current: e
    }
}

function re(e) {
    0 > In || (e.current = bu[In], bu[In] = null, In--)
}

function ie(e, t) {
    In++, bu[In] = e.current, e.current = t
}
var Dt = {},
    Pe = Lt(Dt),
    be = Lt(!1),
    en = Dt;

function Vn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function ke(e) {
    return e = e.childContextTypes, e != null
}

function oi() {
    re(be), re(Pe)
}

function Dc(e, t, n) {
    if (Pe.current !== Dt) throw Error(z(168));
    ie(Pe, t), ie(be, n)
}

function Mc(e, t, n) {
    var r = e.stateNode;
    if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in e)) throw Error(z(108, _n(t) || "Unknown", o));
    return oe({}, n, r)
}

function ii(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dt, en = Pe.current, ie(Pe, e), ie(be, be.current), !0
}

function Ac(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(z(169));
    n ? (e = Mc(e, t, en), r.__reactInternalMemoizedMergedChildContext = e, re(be), re(Pe), ie(Pe, e)) : re(be), ie(be, n)
}
var ku = null,
    tn = null,
    Pg = pe.unstable_runWithPriority,
    Lu = pe.unstable_scheduleCallback,
    Du = pe.unstable_cancelCallback,
    wg = pe.unstable_shouldYield,
    Ic = pe.unstable_requestPaint,
    Mu = pe.unstable_now,
    _g = pe.unstable_getCurrentPriorityLevel,
    ai = pe.unstable_ImmediatePriority,
    Vc = pe.unstable_UserBlockingPriority,
    Nc = pe.unstable_NormalPriority,
    jc = pe.unstable_LowPriority,
    Uc = pe.unstable_IdlePriority,
    Au = {},
    Sg = Ic !== void 0 ? Ic : function () {},
    pt = null,
    ui = null,
    Iu = !1,
    Fc = Mu(),
    we = 1e4 > Fc ? Mu : function () {
        return Mu() - Fc
    };

function Nn() {
    switch (_g()) {
    case ai:
        return 99;
    case Vc:
        return 98;
    case Nc:
        return 97;
    case jc:
        return 96;
    case Uc:
        return 95;
    default:
        throw Error(z(332))
    }
}

function Bc(e) {
    switch (e) {
    case 99:
        return ai;
    case 98:
        return Vc;
    case 97:
        return Nc;
    case 96:
        return jc;
    case 95:
        return Uc;
    default:
        throw Error(z(332))
    }
}

function nn(e, t) {
    return e = Bc(e), Pg(e, t)
}

function Ar(e, t, n) {
    return e = Bc(e), Lu(e, t, n)
}

function Je() {
    if (ui !== null) {
        var e = ui;
        ui = null, Du(e)
    }
    zc()
}

function zc() {
    if (!Iu && pt !== null) {
        Iu = !0;
        var e = 0;
        try {
            var t = pt;
            nn(99, function () {
                for (; e < t.length; e++) {
                    var n = t[e];
                    do n = n(!0); while (n !== null)
                }
            }), pt = null
        } catch (n) {
            throw pt !== null && (pt = pt.slice(e + 1)), Lu(ai, Je), n
        } finally {
            Iu = !1
        }
    }
}
var Og = qt.ReactCurrentBatchConfig;

function Ge(e, t) {
    if (e && e.defaultProps) {
        t = oe({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var li = Lt(null),
    si = null,
    jn = null,
    fi = null;

function Vu() {
    fi = jn = si = null
}

function Nu(e) {
    var t = li.current;
    re(li), e.type._context._currentValue = t
}

function Wc(e, t) {
    for (; e !== null;) {
        var n = e.alternate;
        if ((e.childLanes & t) === t) {
            if (n === null || (n.childLanes & t) === t) break;
            n.childLanes |= t
        } else e.childLanes |= t, n !== null && (n.childLanes |= t);
        e = e.return
    }
}

function Un(e, t) {
    si = e, fi = jn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) != 0 && (qe = !0), e.firstContext = null)
}

function Fe(e, t) {
    if (fi !== e && t !== !1 && t !== 0)
        if ((typeof t != "number" || t === 1073741823) && (fi = e, t = 1073741823), t = {
                context: e,
                observedBits: t,
                next: null
            }, jn === null) {
            if (si === null) throw Error(z(308));
            jn = t, si.dependencies = {
                lanes: 0,
                firstContext: t,
                responders: null
            }
        } else jn = jn.next = t;
    return e._currentValue
}
var Mt = !1;

function ju(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null
        },
        effects: null
    }
}

function Hc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function At(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function It(e, t) {
    if (e = e.updateQueue, e !== null) {
        e = e.shared;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }
}

function $c(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = a : i = i.next = a, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ir(e, t, n, r) {
    var o = e.updateQueue;
    Mt = !1;
    var i = o.firstBaseUpdate,
        a = o.lastBaseUpdate,
        u = o.shared.pending;
    if (u !== null) {
        o.shared.pending = null;
        var l = u,
            c = l.next;
        l.next = null, a === null ? i = c : a.next = c, a = l;
        var y = e.alternate;
        if (y !== null) {
            y = y.updateQueue;
            var E = y.lastBaseUpdate;
            E !== a && (E === null ? y.firstBaseUpdate = c : E.next = c, y.lastBaseUpdate = l)
        }
    }
    if (i !== null) {
        E = o.baseState, a = 0, y = c = l = null;
        do {
            u = i.lane;
            var h = i.eventTime;
            if ((r & u) === u) {
                y !== null && (y = y.next = {
                    eventTime: h,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var P = e,
                        R = i;
                    switch (u = t, h = n, R.tag) {
                    case 1:
                        if (P = R.payload, typeof P == "function") {
                            E = P.call(h, E, u);
                            break e
                        }
                        E = P;
                        break e;
                    case 3:
                        P.flags = P.flags & -4097 | 64;
                    case 0:
                        if (P = R.payload, u = typeof P == "function" ? P.call(h, E, u) : P, u == null) break e;
                        E = oe({}, E, u);
                        break e;
                    case 2:
                        Mt = !0
                    }
                }
                i.callback !== null && (e.flags |= 32, u = o.effects, u === null ? o.effects = [i] : u.push(i))
            } else h = {
                eventTime: h,
                lane: u,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null
            }, y === null ? (c = y = h, l = E) : y = y.next = h, a |= u;
            if (i = i.next, i === null) {
                if (u = o.shared.pending, u === null) break;
                i = u.next, u.next = null, o.lastBaseUpdate = u, o.shared.pending = null
            }
        } while (1);
        y === null && (l = E), o.baseState = l, o.firstBaseUpdate = c, o.lastBaseUpdate = y, Yr |= a, e.lanes = a, e.memoizedState = E
    }
}

function Kc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(z(191, o));
                o.call(r)
            }
        }
}
var Yc = new Do.Component().refs;

function ci(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var pi = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Zt(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ie(),
            o = jt(e),
            i = At(r, o);
        i.payload = t, n != null && (i.callback = n), It(e, i), Ut(e, o, r)
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ie(),
            o = jt(e),
            i = At(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), It(e, i), Ut(e, o, r)
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ie(),
            r = jt(e),
            o = At(n, r);
        o.tag = 2, t != null && (o.callback = t), It(e, o), Ut(e, r, n)
    }
};

function Gc(e, t, n, r, o, i, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !br(n, r) || !br(o, i) : !0
}

function qc(e, t, n) {
    var r = !1,
        o = Dt,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Fe(i) : (o = ke(t) ? en : Pe.current, r = t.contextTypes, i = (r = r != null) ? Vn(e, o) : Dt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Xc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pi.enqueueReplaceState(t, t.state, null)
}

function Uu(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = Yc, ju(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Fe(i) : (i = ke(t) ? en : Pe.current, o.context = Vn(e, i)), Ir(e, n, o, r), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ci(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && pi.enqueueReplaceState(o, o.state, null), Ir(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4)
}
var di = Array.isArray;

function Vr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(z(309));
                var r = n.stateNode
            }
            if (!r) throw Error(z(147, e));
            var o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
                var a = r.refs;
                a === Yc && (a = r.refs = {}), i === null ? delete a[o] : a[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(z(284));
        if (!n._owner) throw Error(z(290, e))
    }
    return e
}

function yi(e, t) {
    if (e.type !== "textarea") throw Error(z(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
}

function Qc(e) {
    function t(m, w) {
        if (e) {
            var _ = m.lastEffect;
            _ !== null ? (_.nextEffect = w, m.lastEffect = w) : m.firstEffect = m.lastEffect = w, w.nextEffect = null, w.flags = 8
        }
    }

    function n(m, w) {
        if (!e) return null;
        for (; w !== null;) t(m, w), w = w.sibling;
        return null
    }

    function r(m, w) {
        for (m = new Map; w !== null;) w.key !== null ? m.set(w.key, w) : m.set(w.index, w), w = w.sibling;
        return m
    }

    function o(m, w) {
        return m = zt(m, w), m.index = 0, m.sibling = null, m
    }

    function i(m, w, _) {
        return m.index = _, e ? (_ = m.alternate, _ !== null ? (_ = _.index, _ < w ? (m.flags = 2, w) : _) : (m.flags = 2, w)) : w
    }

    function a(m) {
        return e && m.alternate === null && (m.flags = 2), m
    }

    function u(m, w, _, S) {
        return w === null || w.tag !== 6 ? (w = _l(_, m.mode, S), w.return = m, w) : (w = o(w, _), w.return = m, w)
    }

    function l(m, w, _, S) {
        return w !== null && w.elementType === _.type ? (S = o(w, _.props), S.ref = Vr(m, w, _), S.return = m, S) : (S = Di(_.type, _.key, _.props, null, m.mode, S), S.ref = Vr(m, w, _), S.return = m, S)
    }

    function c(m, w, _, S) {
        return w === null || w.tag !== 4 || w.stateNode.containerInfo !== _.containerInfo || w.stateNode.implementation !== _.implementation ? (w = Sl(_, m.mode, S), w.return = m, w) : (w = o(w, _.children || []), w.return = m, w)
    }

    function y(m, w, _, S, k) {
        return w === null || w.tag !== 7 ? (w = Yn(_, m.mode, S, k), w.return = m, w) : (w = o(w, _), w.return = m, w)
    }

    function E(m, w, _) {
        if (typeof w == "string" || typeof w == "number") return w = _l("" + w, m.mode, _), w.return = m, w;
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case lr:
                return _ = Di(w.type, w.key, w.props, null, m.mode, _), _.ref = Vr(m, null, w), _.return = m, _;
            case Xt:
                return w = Sl(w, m.mode, _), w.return = m, w
            }
            if (di(w) || cr(w)) return w = Yn(w, m.mode, _, null), w.return = m, w;
            yi(m, w)
        }
        return null
    }

    function h(m, w, _, S) {
        var k = w !== null ? w.key : null;
        if (typeof _ == "string" || typeof _ == "number") return k !== null ? null : u(m, w, "" + _, S);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case lr:
                return _.key === k ? _.type === Ot ? y(m, w, _.props.children, S, k) : l(m, w, _, S) : null;
            case Xt:
                return _.key === k ? c(m, w, _, S) : null
            }
            if (di(_) || cr(_)) return k !== null ? null : y(m, w, _, S, null);
            yi(m, _)
        }
        return null
    }

    function P(m, w, _, S, k) {
        if (typeof S == "string" || typeof S == "number") return m = m.get(_) || null, u(w, m, "" + S, k);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case lr:
                return m = m.get(S.key === null ? _ : S.key) || null, S.type === Ot ? y(w, m, S.props.children, k, S.key) : l(w, m, S, k);
            case Xt:
                return m = m.get(S.key === null ? _ : S.key) || null, c(w, m, S, k)
            }
            if (di(S) || cr(S)) return m = m.get(_) || null, y(w, m, S, k, null);
            yi(w, S)
        }
        return null
    }

    function R(m, w, _, S) {
        for (var k = null, O = null, g = w, d = w = 0, s = null; g !== null && d < _.length; d++) {
            g.index > d ? (s = g, g = null) : s = g.sibling;
            var f = h(m, g, _[d], S);
            if (f === null) {
                g === null && (g = s);
                break
            }
            e && g && f.alternate === null && t(m, g), w = i(f, w, d), O === null ? k = f : O.sibling = f, O = f, g = s
        }
        if (d === _.length) return n(m, g), k;
        if (g === null) {
            for (; d < _.length; d++) g = E(m, _[d], S), g !== null && (w = i(g, w, d), O === null ? k = g : O.sibling = g, O = g);
            return k
        }
        for (g = r(m, g); d < _.length; d++) s = P(g, m, d, _[d], S), s !== null && (e && s.alternate !== null && g.delete(s.key === null ? d : s.key), w = i(s, w, d), O === null ? k = s : O.sibling = s, O = s);
        return e && g.forEach(function (p) {
            return t(m, p)
        }), k
    }

    function x(m, w, _, S) {
        var k = cr(_);
        if (typeof k != "function") throw Error(z(150));
        if (_ = k.call(_), _ == null) throw Error(z(151));
        for (var O = k = null, g = w, d = w = 0, s = null, f = _.next(); g !== null && !f.done; d++, f = _.next()) {
            g.index > d ? (s = g, g = null) : s = g.sibling;
            var p = h(m, g, f.value, S);
            if (p === null) {
                g === null && (g = s);
                break
            }
            e && g && p.alternate === null && t(m, g), w = i(p, w, d), O === null ? k = p : O.sibling = p, O = p, g = s
        }
        if (f.done) return n(m, g), k;
        if (g === null) {
            for (; !f.done; d++, f = _.next()) f = E(m, f.value, S), f !== null && (w = i(f, w, d), O === null ? k = f : O.sibling = f, O = f);
            return k
        }
        for (g = r(m, g); !f.done; d++, f = _.next()) f = P(g, m, d, f.value, S), f !== null && (e && f.alternate !== null && g.delete(f.key === null ? d : f.key), w = i(f, w, d), O === null ? k = f : O.sibling = f, O = f);
        return e && g.forEach(function (v) {
            return t(m, v)
        }), k
    }
    return function (m, w, _, S) {
        var k = typeof _ == "object" && _ !== null && _.type === Ot && _.key === null;
        k && (_ = _.props.children);
        var O = typeof _ == "object" && _ !== null;
        if (O) switch (_.$$typeof) {
        case lr:
            e: {
                for (O = _.key, k = w; k !== null;) {
                    if (k.key === O) {
                        switch (k.tag) {
                        case 7:
                            if (_.type === Ot) {
                                n(m, k.sibling), w = o(k, _.props.children), w.return = m, m = w;
                                break e
                            }
                            break;
                        default:
                            if (k.elementType === _.type) {
                                n(m, k.sibling), w = o(k, _.props), w.ref = Vr(m, k, _), w.return = m, m = w;
                                break e
                            }
                        }
                        n(m, k);
                        break
                    } else t(m, k);
                    k = k.sibling
                }
                _.type === Ot ? (w = Yn(_.props.children, m.mode, S, _.key), w.return = m, m = w) : (S = Di(_.type, _.key, _.props, null, m.mode, S), S.ref = Vr(m, w, _), S.return = m, m = S)
            }
            return a(m);
        case Xt:
            e: {
                for (k = _.key; w !== null;) {
                    if (w.key === k)
                        if (w.tag === 4 && w.stateNode.containerInfo === _.containerInfo && w.stateNode.implementation === _.implementation) {
                            n(m, w.sibling), w = o(w, _.children || []), w.return = m, m = w;
                            break e
                        } else {
                            n(m, w);
                            break
                        }
                    else t(m, w);
                    w = w.sibling
                }
                w = Sl(_, m.mode, S),
                w.return = m,
                m = w
            }
            return a(m)
        }
        if (typeof _ == "string" || typeof _ == "number") return _ = "" + _, w !== null && w.tag === 6 ? (n(m, w.sibling), w = o(w, _), w.return = m, m = w) : (n(m, w), w = _l(_, m.mode, S), w.return = m, m = w), a(m);
        if (di(_)) return R(m, w, _, S);
        if (cr(_)) return x(m, w, _, S);
        if (O && yi(m, _), typeof _ == "undefined" && !k) switch (m.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
            throw Error(z(152, _n(m.type) || "Component"))
        }
        return n(m, w)
    }
}
var vi = Qc(!0),
    Zc = Qc(!1),
    Nr = {},
    et = Lt(Nr),
    jr = Lt(Nr),
    Ur = Lt(Nr);

function rn(e) {
    if (e === Nr) throw Error(z(174));
    return e
}

function Fu(e, t) {
    switch (ie(Ur, t), ie(jr, e), ie(et, Nr), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $a(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $a(t, e)
    }
    re(et), ie(et, t)
}

function Fn() {
    re(et), re(jr), re(Ur)
}

function Jc(e) {
    rn(Ur.current);
    var t = rn(et.current),
        n = $a(t, e.type);
    t !== n && (ie(jr, e), ie(et, n))
}

function Bu(e) {
    jr.current === e && (re(et), re(jr))
}
var ae = Lt(0);

function hi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 64) != 0) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var dt = null,
    Vt = null,
    tt = !1;

function ep(e, t) {
    var n = We(5, null, null, 0);
    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
}

function tp(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
    case 13:
        return !1;
    default:
        return !1
    }
}

function zu(e) {
    if (tt) {
        var t = Vt;
        if (t) {
            var n = t;
            if (!tp(e, t)) {
                if (t = Dn(n.nextSibling), !t || !tp(e, t)) {
                    e.flags = e.flags & -1025 | 2, tt = !1, dt = e;
                    return
                }
                ep(dt, n)
            }
            dt = e, Vt = Dn(t.firstChild)
        } else e.flags = e.flags & -1025 | 2, tt = !1, dt = e
    }
}

function np(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    dt = e
}

function mi(e) {
    if (e !== dt) return !1;
    if (!tt) return np(e), tt = !0, !1;
    var t = e.type;
    if (e.tag !== 5 || t !== "head" && t !== "body" && !Ru(t, e.memoizedProps))
        for (t = Vt; t;) ep(e, t), t = Dn(t.nextSibling);
    if (np(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Vt = Dn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Vt = null
        }
    } else Vt = dt ? Dn(e.stateNode.nextSibling) : null;
    return !0
}

function Wu() {
    Vt = dt = null, tt = !1
}
var Bn = [];

function Hu() {
    for (var e = 0; e < Bn.length; e++) Bn[e]._workInProgressVersionPrimary = null;
    Bn.length = 0
}
var Fr = qt.ReactCurrentDispatcher,
    Be = qt.ReactCurrentBatchConfig,
    Br = 0,
    se = null,
    _e = null,
    he = null,
    gi = !1,
    zr = !1;

function Le() {
    throw Error(z(321))
}

function $u(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ue(e[n], t[n])) return !1;
    return !0
}

function Ku(e, t, n, r, o, i) {
    if (Br = i, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fr.current = e === null || e.memoizedState === null ? Tg : Rg, e = n(r, o), zr) {
        i = 0;
        do {
            if (zr = !1, !(25 > i)) throw Error(z(301));
            i += 1, he = _e = null, t.updateQueue = null, Fr.current = Cg, e = n(r, o)
        } while (zr)
    }
    if (Fr.current = Si, t = _e !== null && _e.next !== null, Br = 0, he = _e = se = null, gi = !1, t) throw Error(z(300));
    return e
}

function on() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return he === null ? se.memoizedState = he = e : he = he.next = e, he
}

function an() {
    if (_e === null) {
        var e = se.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = _e.next;
    var t = he === null ? se.memoizedState : he.next;
    if (t !== null) he = t, _e = e;
    else {
        if (e === null) throw Error(z(310));
        _e = e, e = {
            memoizedState: _e.memoizedState,
            baseState: _e.baseState,
            baseQueue: _e.baseQueue,
            queue: _e.queue,
            next: null
        }, he === null ? se.memoizedState = he = e : he = he.next = e
    }
    return he
}

function nt(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Wr(e) {
    var t = an(),
        n = t.queue;
    if (n === null) throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = _e,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = i.next, i.next = a
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        o = o.next, r = r.baseState;
        var u = a = i = null,
            l = o;
        do {
            var c = l.lane;
            if ((Br & c) === c) u !== null && (u = u.next = {
                lane: 0,
                action: l.action,
                eagerReducer: l.eagerReducer,
                eagerState: l.eagerState,
                next: null
            }), r = l.eagerReducer === e ? l.eagerState : e(r, l.action);
            else {
                var y = {
                    lane: c,
                    action: l.action,
                    eagerReducer: l.eagerReducer,
                    eagerState: l.eagerState,
                    next: null
                };
                u === null ? (a = u = y, i = r) : u = u.next = y, se.lanes |= c, Yr |= c
            }
            l = l.next
        } while (l !== null && l !== o);
        u === null ? i = r : u.next = a, Ue(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
    }
    return [t.memoizedState, n.dispatch]
}

function Hr(e) {
    var t = an(),
        n = t.queue;
    if (n === null) throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = o = o.next;
        do i = e(i, a.action), a = a.next; while (a !== o);
        Ue(i, t.memoizedState) || (qe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function rp(e, t, n) {
    var r = t._getVersion;
    r = r(t._source);
    var o = t._workInProgressVersionPrimary;
    if (o !== null ? e = o === r : (e = e.mutableReadLanes, (e = (Br & e) === e) && (t._workInProgressVersionPrimary = r, Bn.push(t))), e) return n(t._source);
    throw Bn.push(t), Error(z(350))
}

function op(e, t, n, r) {
    var o = Re;
    if (o === null) throw Error(z(349));
    var i = t._getVersion,
        a = i(t._source),
        u = Fr.current,
        l = u.useState(function () {
            return rp(o, t, n)
        }),
        c = l[1],
        y = l[0];
    l = he;
    var E = e.memoizedState,
        h = E.refs,
        P = h.getSnapshot,
        R = E.source;
    E = E.subscribe;
    var x = se;
    return e.memoizedState = {
        refs: h,
        source: t,
        subscribe: r
    }, u.useEffect(function () {
        h.getSnapshot = n, h.setSnapshot = c;
        var m = i(t._source);
        if (!Ue(a, m)) {
            m = n(t._source), Ue(y, m) || (c(m), m = jt(x), o.mutableReadLanes |= m & o.pendingLanes), m = o.mutableReadLanes, o.entangledLanes |= m;
            for (var w = o.entanglements, _ = m; 0 < _;) {
                var S = 31 - xt(_),
                    k = 1 << S;
                w[S] |= m, _ &= ~k
            }
        }
    }, [n, t, r]), u.useEffect(function () {
        return r(t._source, function () {
            var m = h.getSnapshot,
                w = h.setSnapshot;
            try {
                w(m(t._source));
                var _ = jt(x);
                o.mutableReadLanes |= _ & o.pendingLanes
            } catch (S) {
                w(function () {
                    throw S
                })
            }
        })
    }, [t, r]), Ue(P, n) && Ue(R, t) && Ue(E, r) || (e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: nt,
        lastRenderedState: y
    }, e.dispatch = c = Xu.bind(null, se, e), l.queue = e, l.baseQueue = null, y = rp(o, t, n), l.memoizedState = l.baseState = y), y
}

function ip(e, t, n) {
    var r = an();
    return op(r, e, t, n)
}

function $r(e) {
    var t = on();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: nt,
        lastRenderedState: e
    }, e = e.dispatch = Xu.bind(null, se, e), [t.memoizedState, e]
}

function Pi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = se.updateQueue, t === null ? (t = {
        lastEffect: null
    }, se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ap(e) {
    var t = on();
    return e = {
        current: e
    }, t.memoizedState = e
}

function wi() {
    return an().memoizedState
}

function Yu(e, t, n, r) {
    var o = on();
    se.flags |= e, o.memoizedState = Pi(1 | t, n, void 0, r === void 0 ? null : r)
}

function Gu(e, t, n, r) {
    var o = an();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (_e !== null) {
        var a = _e.memoizedState;
        if (i = a.destroy, r !== null && $u(r, a.deps)) {
            Pi(t, n, i, r);
            return
        }
    }
    se.flags |= e, o.memoizedState = Pi(1 | t, n, i, r)
}

function up(e, t) {
    return Yu(516, 4, e, t)
}

function _i(e, t) {
    return Gu(516, 4, e, t)
}

function lp(e, t) {
    return Gu(4, 2, e, t)
}

function sp(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function () {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function () {
            t.current = null
        }
}

function fp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Gu(4, 2, sp.bind(null, t, e), n)
}

function qu() {}

function cp(e, t) {
    var n = an();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $u(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function pp(e, t) {
    var n = an();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $u(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Eg(e, t) {
    var n = Nn();
    nn(98 > n ? 98 : n, function () {
        e(!0)
    }), nn(97 < n ? 97 : n, function () {
        var r = Be.transition;
        Be.transition = 1;
        try {
            e(!1), t()
        } finally {
            Be.transition = r
        }
    })
}

function Xu(e, t, n) {
    var r = Ie(),
        o = jt(e),
        i = {
            lane: o,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
        },
        a = t.pending;
    if (a === null ? i.next = i : (i.next = a.next, a.next = i), t.pending = i, a = e.alternate, e === se || a !== null && a === se) zr = gi = !0;
    else {
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
            var u = t.lastRenderedState,
                l = a(u, n);
            if (i.eagerReducer = a, i.eagerState = l, Ue(l, u)) return
        } catch {} finally {}
        Ut(e, o, r)
    }
}
var Si = {
        readContext: Fe,
        useCallback: Le,
        useContext: Le,
        useEffect: Le,
        useImperativeHandle: Le,
        useLayoutEffect: Le,
        useMemo: Le,
        useReducer: Le,
        useRef: Le,
        useState: Le,
        useDebugValue: Le,
        useDeferredValue: Le,
        useTransition: Le,
        useMutableSource: Le,
        useOpaqueIdentifier: Le,
        unstable_isNewReconciler: !1
    },
    Tg = {
        readContext: Fe,
        useCallback: function (e, t) {
            return on().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Fe,
        useEffect: up,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null, Yu(4, 2, sp.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return Yu(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = on();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function (e, t, n) {
            var r = on();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, e = e.dispatch = Xu.bind(null, se, e), [r.memoizedState, e]
        },
        useRef: ap,
        useState: $r,
        useDebugValue: qu,
        useDeferredValue: function (e) {
            var t = $r(e),
                n = t[0],
                r = t[1];
            return up(function () {
                var o = Be.transition;
                Be.transition = 1;
                try {
                    r(e)
                } finally {
                    Be.transition = o
                }
            }, [e]), n
        },
        useTransition: function () {
            var e = $r(!1),
                t = e[0];
            return e = Eg.bind(null, e[1]), ap(e), [e, t]
        },
        useMutableSource: function (e, t, n) {
            var r = on();
            return r.memoizedState = {
                refs: {
                    getSnapshot: t,
                    setSnapshot: null
                },
                source: e,
                subscribe: n
            }, op(r, e, t, n)
        },
        useOpaqueIdentifier: function () {
            if (tt) {
                var e = !1,
                    t = gg(function () {
                        throw e || (e = !0, n("r:" + (xu++).toString(36))), Error(z(355))
                    }),
                    n = $r(t)[1];
                return (se.mode & 2) == 0 && (se.flags |= 516, Pi(5, function () {
                    n("r:" + (xu++).toString(36))
                }, void 0, null)), t
            }
            return t = "r:" + (xu++).toString(36), $r(t), t
        },
        unstable_isNewReconciler: !1
    },
    Rg = {
        readContext: Fe,
        useCallback: cp,
        useContext: Fe,
        useEffect: _i,
        useImperativeHandle: fp,
        useLayoutEffect: lp,
        useMemo: pp,
        useReducer: Wr,
        useRef: wi,
        useState: function () {
            return Wr(nt)
        },
        useDebugValue: qu,
        useDeferredValue: function (e) {
            var t = Wr(nt),
                n = t[0],
                r = t[1];
            return _i(function () {
                var o = Be.transition;
                Be.transition = 1;
                try {
                    r(e)
                } finally {
                    Be.transition = o
                }
            }, [e]), n
        },
        useTransition: function () {
            var e = Wr(nt)[0];
            return [wi().current, e]
        },
        useMutableSource: ip,
        useOpaqueIdentifier: function () {
            return Wr(nt)[0]
        },
        unstable_isNewReconciler: !1
    },
    Cg = {
        readContext: Fe,
        useCallback: cp,
        useContext: Fe,
        useEffect: _i,
        useImperativeHandle: fp,
        useLayoutEffect: lp,
        useMemo: pp,
        useReducer: Hr,
        useRef: wi,
        useState: function () {
            return Hr(nt)
        },
        useDebugValue: qu,
        useDeferredValue: function (e) {
            var t = Hr(nt),
                n = t[0],
                r = t[1];
            return _i(function () {
                var o = Be.transition;
                Be.transition = 1;
                try {
                    r(e)
                } finally {
                    Be.transition = o
                }
            }, [e]), n
        },
        useTransition: function () {
            var e = Hr(nt)[0];
            return [wi().current, e]
        },
        useMutableSource: ip,
        useOpaqueIdentifier: function () {
            return Hr(nt)[0]
        },
        unstable_isNewReconciler: !1
    },
    xg = qt.ReactCurrentOwner,
    qe = !1;

function De(e, t, n, r) {
    t.child = e === null ? Zc(t, null, n, r) : vi(t, e.child, n, r)
}

function dp(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Un(t, o), r = Ku(e, t, n, r, i, o), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, yt(e, t, o)) : (t.flags |= 1, De(e, t, r, o), t.child)
}

function yp(e, t, n, r, o, i) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !Pl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, vp(e, t, a, r, o, i)) : (e = Di(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    return a = e.child, (o & i) == 0 && (o = a.memoizedProps, n = n.compare, n = n !== null ? n : br, n(o, r) && e.ref === t.ref) ? yt(e, t, i) : (t.flags |= 1, e = zt(a, r), e.ref = t.ref, e.return = t, t.child = e)
}

function vp(e, t, n, r, o, i) {
    if (e !== null && br(e.memoizedProps, r) && e.ref === t.ref)
        if (qe = !1, (i & o) != 0)(e.flags & 16384) != 0 && (qe = !0);
        else return t.lanes = e.lanes, yt(e, t, i);
    return Zu(e, t, n, r, i)
}

function Qu(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
        if ((t.mode & 4) == 0) t.memoizedState = {
            baseLanes: 0
        }, Li(t, n);
        else if ((n & 1073741824) != 0) t.memoizedState = {
        baseLanes: 0
    }, Li(t, i !== null ? i.baseLanes : n);
    else return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e
    }, Li(t, e), null;
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Li(t, r);
    return De(e, t, o, n), t.child
}

function hp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128)
}

function Zu(e, t, n, r, o) {
    var i = ke(n) ? en : Pe.current;
    return i = Vn(t, i), Un(t, o), n = Ku(e, t, n, r, i, o), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, yt(e, t, o)) : (t.flags |= 1, De(e, t, n, o), t.child)
}

function mp(e, t, n, r, o) {
    if (ke(n)) {
        var i = !0;
        ii(t)
    } else i = !1;
    if (Un(t, o), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), qc(t, n, r), Uu(t, n, r, o), r = !0;
    else if (e === null) {
        var a = t.stateNode,
            u = t.memoizedProps;
        a.props = u;
        var l = a.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = Fe(c) : (c = ke(n) ? en : Pe.current, c = Vn(t, c));
        var y = n.getDerivedStateFromProps,
            E = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        E || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== r || l !== c) && Xc(t, a, r, c), Mt = !1;
        var h = t.memoizedState;
        a.state = h, Ir(t, r, a, o), l = t.memoizedState, u !== r || h !== l || be.current || Mt ? (typeof y == "function" && (ci(t, n, y, r), l = t.memoizedState), (u = Mt || Gc(t, n, u, r, h, l, c)) ? (E || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4)) : (typeof a.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = c, r = u) : (typeof a.componentDidMount == "function" && (t.flags |= 4), r = !1)
    } else {
        a = t.stateNode, Hc(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Ge(t.type, u), a.props = c, E = t.pendingProps, h = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = Fe(l) : (l = ke(n) ? en : Pe.current, l = Vn(t, l));
        var P = n.getDerivedStateFromProps;
        (y = typeof P == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== E || h !== l) && Xc(t, a, r, l), Mt = !1, h = t.memoizedState, a.state = h, Ir(t, r, a, o);
        var R = t.memoizedState;
        u !== E || h !== R || be.current || Mt ? (typeof P == "function" && (ci(t, n, P, r), R = t.memoizedState), (c = Mt || Gc(t, n, c, r, h, R, l)) ? (y || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, R, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, R, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = R), a.props = r, a.state = R, a.context = l, r = c) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), r = !1)
    }
    return Ju(e, t, n, r, i, o)
}

function Ju(e, t, n, r, o, i) {
    hp(e, t);
    var a = (t.flags & 64) != 0;
    if (!r && !a) return o && Ac(t, n, !1), yt(e, t, i);
    r = t.stateNode, xg.current = t;
    var u = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = vi(t, e.child, null, i), t.child = vi(t, null, u, i)) : De(e, t, u, i), t.memoizedState = r.state, o && Ac(t, n, !0), t.child
}

function gp(e) {
    var t = e.stateNode;
    t.pendingContext ? Dc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dc(e, t.context, !1), Fu(e, t.containerInfo)
}
var Oi = {
    dehydrated: null,
    retryLane: 0
};

function Pp(e, t, n) {
    var r = t.pendingProps,
        o = ae.current,
        i = !1,
        a;
    return (a = (t.flags & 64) != 0) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) != 0), a ? (i = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (o |= 1), ie(ae, o & 1), e === null ? (r.fallback !== void 0 && zu(t), e = r.children, o = r.fallback, i ? (e = wp(t, e, o, n), t.child.memoizedState = {
        baseLanes: n
    }, t.memoizedState = Oi, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = wp(t, e, o, n), t.child.memoizedState = {
        baseLanes: n
    }, t.memoizedState = Oi, t.lanes = 33554432, e) : (n = wl({
        mode: "visible",
        children: e
    }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? i ? (r = Sp(e, t, r.children, r.fallback, n), i = t.child, o = e.child.memoizedState, i.memoizedState = o === null ? {
        baseLanes: n
    } : {
        baseLanes: o.baseLanes | n
    }, i.childLanes = e.childLanes & ~n, t.memoizedState = Oi, r) : (n = _p(e, t, r.children, n), t.memoizedState = null, n) : i ? (r = Sp(e, t, r.children, r.fallback, n), i = t.child, o = e.child.memoizedState, i.memoizedState = o === null ? {
        baseLanes: n
    } : {
        baseLanes: o.baseLanes | n
    }, i.childLanes = e.childLanes & ~n, t.memoizedState = Oi, r) : (n = _p(e, t, r.children, n), t.memoizedState = null, n)
}

function wp(e, t, n, r) {
    var o = e.mode,
        i = e.child;
    return t = {
        mode: "hidden",
        children: t
    }, (o & 2) == 0 && i !== null ? (i.childLanes = 0, i.pendingProps = t) : i = wl(t, o, 0, null), n = Yn(n, o, r, null), i.return = e, n.return = e, i.sibling = n, e.child = i, n
}

function _p(e, t, n, r) {
    var o = e.child;
    return e = o.sibling, n = zt(o, {
        mode: "visible",
        children: n
    }), (t.mode & 2) == 0 && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n
}

function Sp(e, t, n, r, o) {
    var i = t.mode,
        a = e.child;
    e = a.sibling;
    var u = {
        mode: "hidden",
        children: n
    };
    return (i & 2) == 0 && t.child !== a ? (n = t.child, n.childLanes = 0, n.pendingProps = u, a = n.lastEffect, a !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = a, a.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = zt(a, u), e !== null ? r = zt(e, r) : (r = Yn(r, i, o, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r
}

function Op(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Wc(e.return, t)
}

function el(e, t, n, r, o, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
        lastEffect: i
    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o, a.lastEffect = i)
}

function Ep(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (De(e, t, r.children, n), r = ae.current, (r & 2) != 0) r = r & 1 | 2, t.flags |= 64;
    else {
        if (e !== null && (e.flags & 64) != 0) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Op(e, n);
            else if (e.tag === 19) Op(e, n);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ie(ae, r), (t.mode & 2) == 0) t.memoizedState = null;
    else switch (o) {
    case "forwards":
        for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && hi(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), el(t, !1, o, n, i, t.lastEffect);
        break;
    case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null;) {
            if (e = o.alternate, e !== null && hi(e) === null) {
                t.child = o;
                break
            }
            e = o.sibling, o.sibling = n, n = o, o = e
        }
        el(t, !0, n, null, i, t.lastEffect);
        break;
    case "together":
        el(t, !1, null, null, void 0, t.lastEffect);
        break;
    default:
        t.memoizedState = null
    }
    return t.child
}

function yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Yr |= t.lanes, (n & t.childLanes) != 0) {
        if (e !== null && t.child !== e.child) throw Error(z(153));
        if (t.child !== null) {
            for (e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = zt(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }
    return null
}
var Tp, tl, Rp, Cp;
Tp = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
tl = function () {};
Rp = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, rn(et.current);
        var i = null;
        switch (n) {
        case "input":
            o = Ua(e, o), r = Ua(e, r), i = [];
            break;
        case "option":
            o = za(e, o), r = za(e, r), i = [];
            break;
        case "select":
            o = oe({}, o, {
                value: void 0
            }), r = oe({}, r, {
                value: void 0
            }), i = [];
            break;
        case "textarea":
            o = Wa(e, o), r = Wa(e, r), i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ei)
        }
        Ka(n, r);
        var a;
        n = null;
        for (c in o)
            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
                if (c === "style") {
                    var u = o[c];
                    for (a in u) u.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ur.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (u = o != null ? o[c] : void 0, r.hasOwnProperty(c) && l !== u && (l != null || u != null))
                if (c === "style")
                    if (u) {
                        for (a in u) !u.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                        for (a in l) l.hasOwnProperty(a) && u[a] !== l[a] && (n || (n = {}), n[a] = l[a])
                    } else n || (i || (i = []), i.push(c, n)), n = l;
            else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (i = i || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ur.hasOwnProperty(c) ? (l != null && c === "onScroll" && ne("scroll", e), i || u === l || (i = [])) : typeof l == "object" && l !== null && l.$$typeof === Aa ? l.toString() : (i = i || []).push(c, l))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
Cp = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Kr(e, t) {
    if (!tt) switch (e.tailMode) {
    case "hidden":
        t = e.tail;
        for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
    case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function bg(e, t, n) {
    var r = t.pendingProps;
    switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return null;
    case 1:
        return ke(t.type) && oi(), null;
    case 3:
        return Fn(), re(be), re(Pe), Hu(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (mi(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), tl(t), null;
    case 5:
        Bu(t);
        var o = rn(Ur.current);
        if (n = t.type, e !== null && t.stateNode != null) Rp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
        else {
            if (!r) {
                if (t.stateNode === null) throw Error(z(166));
                return null
            }
            if (e = rn(et.current), mi(t)) {
                r = t.stateNode, n = t.type;
                var i = t.memoizedProps;
                switch (r[kt] = t, r[ni] = i, n) {
                case "dialog":
                    ne("cancel", r), ne("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ne("load", r);
                    break;
                case "video":
                case "audio":
                    for (e = 0; e < Lr.length; e++) ne(Lr[e], r);
                    break;
                case "source":
                    ne("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ne("error", r), ne("load", r);
                    break;
                case "details":
                    ne("toggle", r);
                    break;
                case "input":
                    mf(r, i), ne("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    }, ne("invalid", r);
                    break;
                case "textarea":
                    wf(r, i), ne("invalid", r)
                }
                Ka(n, i), e = null;
                for (var a in i) i.hasOwnProperty(a) && (o = i[a], a === "children" ? typeof o == "string" ? r.textContent !== o && (e = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (e = ["children", "" + o]) : ur.hasOwnProperty(a) && o != null && a === "onScroll" && ne("scroll", r));
                switch (n) {
                case "input":
                    No(r), Pf(r, i, !0);
                    break;
                case "textarea":
                    No(r), Sf(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = ei)
                }
                r = e, t.updateQueue = r, r !== null && (t.flags |= 4)
            } else {
                switch (a = o.nodeType === 9 ? o : o.ownerDocument, e === Ha.html && (e = Of(n)), e === Ha.html ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[kt] = t, e[ni] = r, Tp(e, t, !1, !1), t.stateNode = e, a = Ya(n, r), n) {
                case "dialog":
                    ne("cancel", e), ne("close", e), o = r;
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ne("load", e), o = r;
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Lr.length; o++) ne(Lr[o], e);
                    o = r;
                    break;
                case "source":
                    ne("error", e), o = r;
                    break;
                case "img":
                case "image":
                case "link":
                    ne("error", e), ne("load", e), o = r;
                    break;
                case "details":
                    ne("toggle", e), o = r;
                    break;
                case "input":
                    mf(e, r), o = Ua(e, r), ne("invalid", e);
                    break;
                case "option":
                    o = za(e, r);
                    break;
                case "select":
                    e._wrapperState = {
                        wasMultiple: !!r.multiple
                    }, o = oe({}, r, {
                        value: void 0
                    }), ne("invalid", e);
                    break;
                case "textarea":
                    wf(e, r), o = Wa(e, r), ne("invalid", e);
                    break;
                default:
                    o = r
                }
                Ka(n, o);
                var u = o;
                for (i in u)
                    if (u.hasOwnProperty(i)) {
                        var l = u[i];
                        i === "style" ? Rf(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ef(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && dr(e, l) : typeof l == "number" && dr(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ur.hasOwnProperty(i) ? l != null && i === "onScroll" && ne("scroll", e) : l != null && xa(e, i, l, a))
                    } switch (n) {
                case "input":
                    No(e), Pf(e, r, !1);
                    break;
                case "textarea":
                    No(e), Sf(e);
                    break;
                case "option":
                    r.value != null && e.setAttribute("value", "" + Et(r.value));
                    break;
                case "select":
                    e.multiple = !!r.multiple, i = r.value, i != null ? Sn(e, !!r.multiple, i, !1) : r.defaultValue != null && Sn(e, !!r.multiple, r.defaultValue, !0);
                    break;
                default:
                    typeof o.onClick == "function" && (e.onclick = ei)
                }
                Cc(n, r) && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 128)
        }
        return null;
    case 6:
        if (e && t.stateNode != null) Cp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
            n = rn(Ur.current), rn(et.current), mi(t) ? (r = t.stateNode, n = t.memoizedProps, r[kt] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r)
        }
        return null;
    case 13:
        return re(ae), r = t.memoizedState, (t.flags & 64) != 0 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && mi(t) : n = e.memoizedState !== null, r && !n && (t.mode & 2) != 0 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || (ae.current & 1) != 0 ? me === 0 && (me = 3) : ((me === 0 || me === 3) && (me = 4), Re === null || (Yr & 134217727) == 0 && (Wn & 134217727) == 0 || $n(Re, Se))), (r || n) && (t.flags |= 4), null);
    case 4:
        return Fn(), tl(t), e === null && Sc(t.stateNode.containerInfo), null;
    case 10:
        return Nu(t), null;
    case 17:
        return ke(t.type) && oi(), null;
    case 19:
        if (re(ae), r = t.memoizedState, r === null) return null;
        if (i = (t.flags & 64) != 0, a = r.rendering, a === null)
            if (i) Kr(r, !1);
            else {
                if (me !== 0 || e !== null && (e.flags & 64) != 0)
                    for (e = t.child; e !== null;) {
                        if (a = hi(e), a !== null) {
                            for (t.flags |= 64, Kr(r, !1), i = a.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return ie(ae, ae.current & 1 | 2), t.child
                        }
                        e = e.sibling
                    }
                r.tail !== null && we() > pl && (t.flags |= 64, i = !0, Kr(r, !1), t.lanes = 33554432)
            }
        else {
            if (!i)
                if (e = hi(a), e !== null) {
                    if (t.flags |= 64, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kr(r, !0), r.tail === null && r.tailMode === "hidden" && !a.alternate && !tt) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null
                } else 2 * we() - r.renderingStartTime > pl && n !== 1073741824 && (t.flags |= 64, i = !0, Kr(r, !1), t.lanes = 33554432);
            r.isBackwards ? (a.sibling = t.child, t.child = a) : (n = r.last, n !== null ? n.sibling = a : t.child = a, r.last = a)
        }
        return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = we(), n.sibling = null, t = ae.current, ie(ae, i ? t & 1 | 2 : t & 1), n) : null;
    case 23:
    case 24:
        return gl(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null
    }
    throw Error(z(156, t.tag))
}

function kg(e) {
    switch (e.tag) {
    case 1:
        ke(e.type) && oi();
        var t = e.flags;
        return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 3:
        if (Fn(), re(be), re(Pe), Hu(), t = e.flags, (t & 64) != 0) throw Error(z(285));
        return e.flags = t & -4097 | 64, e;
    case 5:
        return Bu(e), null;
    case 13:
        return re(ae), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 19:
        return re(ae), null;
    case 4:
        return Fn(), null;
    case 10:
        return Nu(e), null;
    case 23:
    case 24:
        return gl(), null;
    default:
        return null
    }
}

function nl(e, t) {
    try {
        var n = "",
            r = t;
        do n += fm(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o
    }
}

function rl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Lg = typeof WeakMap == "function" ? WeakMap : Map;

function xp(e, t, n) {
    n = At(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function () {
        Ri || (Ri = !0, dl = r), rl(e, t)
    }, n
}

function bp(e, t, n) {
    n = At(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function () {
            return rl(e, t), r(o)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () {
        typeof r != "function" && (rt === null ? rt = new Set([this]) : rt.add(this), rl(e, t));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }), n
}
var Dg = typeof WeakSet == "function" ? WeakSet : Set;

function kp(e) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function") try {
            t(null)
        } catch (n) {
            Bt(e, n)
        } else t.current = null
}

function Mg(e, t) {
    switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
        return;
    case 1:
        if (t.flags & 256 && e !== null) {
            var n = e.memoizedProps,
                r = e.memoizedState;
            e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ge(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
        }
        return;
    case 3:
        t.flags & 256 && Cu(t.stateNode.containerInfo);
        return;
    case 5:
    case 6:
    case 4:
    case 17:
        return
    }
    throw Error(z(163))
}

function Ag(e, t, n) {
    switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
        if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            e = t = t.next;
            do {
                if ((e.tag & 3) == 3) {
                    var r = e.create;
                    e.destroy = r()
                }
                e = e.next
            } while (e !== t)
        }
        if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            e = t = t.next;
            do {
                var o = e;
                r = o.next, o = o.tag, (o & 4) != 0 && (o & 1) != 0 && ($p(n, e), zg(n, e)), e = r
            } while (e !== t)
        }
        return;
    case 1:
        e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Ge(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), t = n.updateQueue, t !== null && Kc(n, t, e);
        return;
    case 3:
        if (t = n.updateQueue, t !== null) {
            if (e = null, n.child !== null) switch (n.child.tag) {
            case 5:
                e = n.child.stateNode;
                break;
            case 1:
                e = n.child.stateNode
            }
            Kc(n, t, e)
        }
        return;
    case 5:
        e = n.stateNode, t === null && n.flags & 4 && Cc(n.type, n.memoizedProps) && e.focus();
        return;
    case 6:
        return;
    case 4:
        return;
    case 12:
        return;
    case 13:
        n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && zf(n))));
        return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
        return
    }
    throw Error(z(163))
}

function Lp(e, t) {
    for (var n = e;;) {
        if (n.tag === 5) {
            var r = n.stateNode;
            if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
            else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                o = o != null && o.hasOwnProperty("display") ? o.display : null, r.style.display = Tf("display", o)
            }
        } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
        else if ((n.tag !== 23 && n.tag !== 24 || n.memoizedState === null || n === e) && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
}

function Dp(e, t) {
    if (tn && typeof tn.onCommitFiberUnmount == "function") try {
        tn.onCommitFiberUnmount(ku, t)
    } catch {}
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
        if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
            var n = e = e.next;
            do {
                var r = n,
                    o = r.destroy;
                if (r = r.tag, o !== void 0)
                    if ((r & 4) != 0) $p(t, n);
                    else {
                        r = t;
                        try {
                            o()
                        } catch (i) {
                            Bt(r, i)
                        }
                    } n = n.next
            } while (n !== e)
        }
        break;
    case 1:
        if (kp(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
            e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
        } catch (i) {
            Bt(t, i)
        }
        break;
    case 5:
        kp(t);
        break;
    case 4:
        Vp(e, t)
    }
}

function Mp(e) {
    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
}

function Ap(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Ip(e) {
    e: {
        for (var t = e.return; t !== null;) {
            if (Ap(t)) break e;
            t = t.return
        }
        throw Error(z(160))
    }
    var n = t;
    switch (t = n.stateNode, n.tag) {
    case 5:
        var r = !1;
        break;
    case 3:
        t = t.containerInfo, r = !0;
        break;
    case 4:
        t = t.containerInfo, r = !0;
        break;
    default:
        throw Error(z(161))
    }
    n.flags & 16 && (dr(t, ""), n.flags &= -17);e: t: for (n = e;;) {
        for (; n.sibling === null;) {
            if (n.return === null || Ap(n.return)) {
                n = null;
                break e
            }
            n = n.return
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
            if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
            n.child.return = n, n = n.child
        }
        if (!(n.flags & 2)) {
            n = n.stateNode;
            break e
        }
    }
    r ? ol(e, n, t) : il(e, n, t)
}

function ol(e, t, n) {
    var r = e.tag,
        o = r === 5 || r === 6;
    if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ei));
    else if (r !== 4 && (e = e.child, e !== null))
        for (ol(e, t, n), e = e.sibling; e !== null;) ol(e, t, n), e = e.sibling
}

function il(e, t, n) {
    var r = e.tag,
        o = r === 5 || r === 6;
    if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (il(e, t, n), e = e.sibling; e !== null;) il(e, t, n), e = e.sibling
}

function Vp(e, t) {
    for (var n = t, r = !1, o, i;;) {
        if (!r) {
            r = n.return;
            e: for (;;) {
                if (r === null) throw Error(z(160));
                switch (o = r.stateNode, r.tag) {
                case 5:
                    i = !1;
                    break e;
                case 3:
                    o = o.containerInfo, i = !0;
                    break e;
                case 4:
                    o = o.containerInfo, i = !0;
                    break e
                }
                r = r.return
            }
            r = !0
        }
        if (n.tag === 5 || n.tag === 6) {
            e: for (var a = e, u = n, l = u;;)
                if (Dp(a, l), l.child !== null && l.tag !== 4) l.child.return = l, l = l.child;
                else {
                    if (l === u) break e;
                    for (; l.sibling === null;) {
                        if (l.return === null || l.return === u) break e;
                        l = l.return
                    }
                    l.sibling.return = l.return, l = l.sibling
                }i ? (a = o, u = n.stateNode, a.nodeType === 8 ? a.parentNode.removeChild(u) : a.removeChild(u)) : o.removeChild(n.stateNode)
        }
        else if (n.tag === 4) {
            if (n.child !== null) {
                o = n.stateNode.containerInfo, i = !0, n.child.return = n, n = n.child;
                continue
            }
        } else if (Dp(e, n), n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return, n.tag === 4 && (r = !1)
        }
        n.sibling.return = n.return, n = n.sibling
    }
}

function al(e, t) {
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
        var n = t.updateQueue;
        if (n = n !== null ? n.lastEffect : null, n !== null) {
            var r = n = n.next;
            do(r.tag & 3) == 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next; while (r !== n)
        }
        return;
    case 1:
        return;
    case 5:
        if (n = t.stateNode, n != null) {
            r = t.memoizedProps;
            var o = e !== null ? e.memoizedProps : r;
            e = t.type;
            var i = t.updateQueue;
            if (t.updateQueue = null, i !== null) {
                for (n[ni] = r, e === "input" && r.type === "radio" && r.name != null && gf(n, r), Ya(e, o), t = Ya(e, r), o = 0; o < i.length; o += 2) {
                    var a = i[o],
                        u = i[o + 1];
                    a === "style" ? Rf(n, u) : a === "dangerouslySetInnerHTML" ? Ef(n, u) : a === "children" ? dr(n, u) : xa(n, a, u, t)
                }
                switch (e) {
                case "input":
                    Fa(n, r);
                    break;
                case "textarea":
                    _f(n, r);
                    break;
                case "select":
                    e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? Sn(n, !!r.multiple, i, !1) : e !== !!r.multiple && (r.defaultValue != null ? Sn(n, !!r.multiple, r.defaultValue, !0) : Sn(n, !!r.multiple, r.multiple ? [] : "", !1))
                }
            }
        }
        return;
    case 6:
        if (t.stateNode === null) throw Error(z(162));
        t.stateNode.nodeValue = t.memoizedProps;
        return;
    case 3:
        n = t.stateNode, n.hydrate && (n.hydrate = !1, zf(n.containerInfo));
        return;
    case 12:
        return;
    case 13:
        t.memoizedState !== null && (cl = we(), Lp(t.child, !0)), Np(t);
        return;
    case 19:
        Np(t);
        return;
    case 17:
        return;
    case 23:
    case 24:
        Lp(t, t.memoizedState !== null);
        return
    }
    throw Error(z(163))
}

function Np(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Dg), t.forEach(function (r) {
            var o = $g.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function Ig(e, t) {
    return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1
}
var Vg = Math.ceil,
    Ei = qt.ReactCurrentDispatcher,
    ul = qt.ReactCurrentOwner,
    G = 0,
    Re = null,
    ce = null,
    Se = 0,
    un = 0,
    ll = Lt(0),
    me = 0,
    Ti = null,
    zn = 0,
    Yr = 0,
    Wn = 0,
    sl = 0,
    fl = null,
    cl = 0,
    pl = 1 / 0;

function Hn() {
    pl = we() + 500
}
var $ = null,
    Ri = !1,
    dl = null,
    rt = null,
    Nt = !1,
    Gr = null,
    qr = 90,
    yl = [],
    vl = [],
    vt = null,
    Xr = 0,
    hl = null,
    Ci = -1,
    ht = 0,
    xi = 0,
    Qr = null,
    bi = !1;

function Ie() {
    return (G & 48) != 0 ? we() : Ci !== -1 ? Ci : Ci = we()
}

function jt(e) {
    if (e = e.mode, (e & 2) == 0) return 1;
    if ((e & 4) == 0) return Nn() === 99 ? 1 : 2;
    if (ht === 0 && (ht = zn), Og.transition !== 0) {
        xi !== 0 && (xi = fl !== null ? fl.pendingLanes : 0), e = ht;
        var t = 4186112 & ~xi;
        return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t
    }
    return e = Nn(), (G & 4) != 0 && e === 98 ? e = $o(12, ht) : (e = Rm(e), e = $o(e, ht)), e
}

function Ut(e, t, n) {
    if (50 < Xr) throw Xr = 0, hl = null, Error(z(185));
    if (e = ki(e, t), e === null) return null;
    Ko(e, t, n), e === Re && (Wn |= t, me === 4 && $n(e, Se));
    var r = Nn();
    t === 1 ? (G & 8) != 0 && (G & 48) == 0 ? ml(e) : (ze(e, n), G === 0 && (Hn(), Je())) : ((G & 4) == 0 || r !== 98 && r !== 99 || (vt === null ? vt = new Set([e]) : vt.add(e)), ze(e, n)), fl = e
}

function ki(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

function ze(e, t) {
    for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
        var u = 31 - xt(a),
            l = 1 << u,
            c = i[u];
        if (c === -1) {
            if ((l & r) == 0 || (l & o) != 0) {
                c = t, Rn(l);
                var y = ee;
                i[u] = 10 <= y ? c + 250 : 6 <= y ? c + 5e3 : -1
            }
        } else c <= t && (e.expiredLanes |= l);
        a &= ~l
    }
    if (r = Or(e, e === Re ? Se : 0), t = ee, r === 0) n !== null && (n !== Au && Du(n), e.callbackNode = null, e.callbackPriority = 0);
    else {
        if (n !== null) {
            if (e.callbackPriority === t) return;
            n !== Au && Du(n)
        }
        t === 15 ? (n = ml.bind(null, e), pt === null ? (pt = [n], ui = Lu(ai, zc)) : pt.push(n), n = Au) : t === 14 ? n = Ar(99, ml.bind(null, e)) : (n = Cm(t), n = Ar(n, jp.bind(null, e))), e.callbackPriority = t, e.callbackNode = n
    }
}

function jp(e) {
    if (Ci = -1, xi = ht = 0, (G & 48) != 0) throw Error(z(327));
    var t = e.callbackNode;
    if (Ft() && e.callbackNode !== t) return null;
    var n = Or(e, e === Re ? Se : 0);
    if (n === 0) return null;
    var r = n,
        o = G;
    G |= 16;
    var i = zp();
    (Re !== e || Se !== r) && (Hn(), Kn(e, r));
    do try {
        Ug();
        break
    } catch (u) {
        Bp(e, u)
    }
    while (1);
    if (Vu(), Ei.current = i, G = o, ce !== null ? r = 0 : (Re = null, Se = 0, r = me), (zn & Wn) != 0) Kn(e, 0);
    else if (r !== 0) {
        if (r === 2 && (G |= 64, e.hydrate && (e.hydrate = !1, Cu(e.containerInfo)), n = qf(e), n !== 0 && (r = Zr(e, n))), r === 1) throw t = Ti, Kn(e, 0), $n(e, n), ze(e, we()), t;
        switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
        case 0:
        case 1:
            throw Error(z(345));
        case 2:
            ln(e);
            break;
        case 3:
            if ($n(e, n), (n & 62914560) === n && (r = cl + 500 - we(), 10 < r)) {
                if (Or(e, 0) !== 0) break;
                if (o = e.suspendedLanes, (o & n) !== n) {
                    Ie(), e.pingedLanes |= e.suspendedLanes & o;
                    break
                }
                e.timeoutHandle = xc(ln.bind(null, e), r);
                break
            }
            ln(e);
            break;
        case 4:
            if ($n(e, n), (n & 4186112) === n) break;
            for (r = e.eventTimes, o = -1; 0 < n;) {
                var a = 31 - xt(n);
                i = 1 << a, a = r[a], a > o && (o = a), n &= ~i
            }
            if (n = o, n = we() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Vg(n / 1960)) - n, 10 < n) {
                e.timeoutHandle = xc(ln.bind(null, e), n);
                break
            }
            ln(e);
            break;
        case 5:
            ln(e);
            break;
        default:
            throw Error(z(329))
        }
    }
    return ze(e, we()), e.callbackNode === t ? jp.bind(null, e) : null
}

function $n(e, t) {
    for (t &= ~sl, t &= ~Wn, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - xt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function ml(e) {
    if ((G & 48) != 0) throw Error(z(327));
    if (Ft(), e === Re && (e.expiredLanes & Se) != 0) {
        var t = Se,
            n = Zr(e, t);
        (zn & Wn) != 0 && (t = Or(e, t), n = Zr(e, t))
    } else t = Or(e, 0), n = Zr(e, t);
    if (e.tag !== 0 && n === 2 && (G |= 64, e.hydrate && (e.hydrate = !1, Cu(e.containerInfo)), t = qf(e), t !== 0 && (n = Zr(e, t))), n === 1) throw n = Ti, Kn(e, 0), $n(e, t), ze(e, we()), n;
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e), ze(e, we()), null
}

function Ng() {
    if (vt !== null) {
        var e = vt;
        vt = null, e.forEach(function (t) {
            t.expiredLanes |= 24 & t.pendingLanes, ze(t, we())
        })
    }
    Je()
}

function Up(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = n, G === 0 && (Hn(), Je())
    }
}

function Fp(e, t) {
    var n = G;
    G &= -2, G |= 8;
    try {
        return e(t)
    } finally {
        G = n, G === 0 && (Hn(), Je())
    }
}

function Li(e, t) {
    ie(ll, un), un |= t, zn |= t
}

function gl() {
    un = ll.current, re(ll)
}

function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, mg(n)), ce !== null)
        for (n = ce.return; n !== null;) {
            var r = n;
            switch (r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && oi();
                break;
            case 3:
                Fn(), re(be), re(Pe), Hu();
                break;
            case 5:
                Bu(r);
                break;
            case 4:
                Fn();
                break;
            case 13:
                re(ae);
                break;
            case 19:
                re(ae);
                break;
            case 10:
                Nu(r);
                break;
            case 23:
            case 24:
                gl()
            }
            n = n.return
        }
    Re = e, ce = zt(e.current, null), Se = un = zn = t, me = 0, Ti = null, sl = Wn = Yr = 0
}

function Bp(e, t) {
    do {
        var n = ce;
        try {
            if (Vu(), Fr.current = Si, gi) {
                for (var r = se.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                gi = !1
            }
            if (Br = 0, he = _e = se = null, zr = !1, ul.current = null, n === null || n.return === null) {
                me = 1, Ti = t, ce = null;
                break
            }
            e: {
                var i = e,
                    a = n.return,
                    u = n,
                    l = t;
                if (t = Se, u.flags |= 2048, u.firstEffect = u.lastEffect = null, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l;
                    if ((u.mode & 2) == 0) {
                        var y = u.alternate;
                        y ? (u.updateQueue = y.updateQueue, u.memoizedState = y.memoizedState, u.lanes = y.lanes) : (u.updateQueue = null, u.memoizedState = null)
                    }
                    var E = (ae.current & 1) != 0,
                        h = a;
                    do {
                        var P;
                        if (P = h.tag === 13) {
                            var R = h.memoizedState;
                            if (R !== null) P = R.dehydrated !== null;
                            else {
                                var x = h.memoizedProps;
                                P = x.fallback === void 0 ? !1 : x.unstable_avoidThisFallback !== !0 ? !0 : !E
                            }
                        }
                        if (P) {
                            var m = h.updateQueue;
                            if (m === null) {
                                var w = new Set;
                                w.add(c), h.updateQueue = w
                            } else m.add(c);
                            if ((h.mode & 2) == 0) {
                                if (h.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1)
                                    if (u.alternate === null) u.tag = 17;
                                    else {
                                        var _ = At(-1, 1);
                                        _.tag = 2, It(u, _)
                                    } u.lanes |= 1;
                                break e
                            }
                            l = void 0, u = t;
                            var S = i.pingCache;
                            if (S === null ? (S = i.pingCache = new Lg, l = new Set, S.set(c, l)) : (l = S.get(c), l === void 0 && (l = new Set, S.set(c, l))), !l.has(u)) {
                                l.add(u);
                                var k = Hg.bind(null, i, c, u);
                                c.then(k, k)
                            }
                            h.flags |= 4096, h.lanes = t;
                            break e
                        }
                        h = h.return
                    } while (h !== null);
                    l = Error((_n(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)
                }
                me !== 5 && (me = 2),
                l = nl(l, u),
                h = a;do {
                    switch (h.tag) {
                    case 3:
                        i = l, h.flags |= 4096, t &= -t, h.lanes |= t;
                        var O = xp(h, i, t);
                        $c(h, O);
                        break e;
                    case 1:
                        i = l;
                        var g = h.type,
                            d = h.stateNode;
                        if ((h.flags & 64) == 0 && (typeof g.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (rt === null || !rt.has(d)))) {
                            h.flags |= 4096, t &= -t, h.lanes |= t;
                            var s = bp(h, i, t);
                            $c(h, s);
                            break e
                        }
                    }
                    h = h.return
                } while (h !== null)
            }
            Hp(n)
        } catch (f) {
            t = f, ce === n && n !== null && (ce = n = n.return);
            continue
        }
        break
    } while (1)
}

function zp() {
    var e = Ei.current;
    return Ei.current = Si, e === null ? Si : e
}

function Zr(e, t) {
    var n = G;
    G |= 16;
    var r = zp();
    Re === e && Se === t || Kn(e, t);
    do try {
        jg();
        break
    } catch (o) {
        Bp(e, o)
    }
    while (1);
    if (Vu(), G = n, Ei.current = r, ce !== null) throw Error(z(261));
    return Re = null, Se = 0, me
}

function jg() {
    for (; ce !== null;) Wp(ce)
}

function Ug() {
    for (; ce !== null && !wg();) Wp(ce)
}

function Wp(e) {
    var t = Yp(e.alternate, e, un);
    e.memoizedProps = e.pendingProps, t === null ? Hp(e) : ce = t, ul.current = null
}

function Hp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, (t.flags & 2048) == 0) {
            if (n = bg(n, t, un), n !== null) {
                ce = n;
                return
            }
            if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || (un & 1073741824) != 0 || (n.mode & 4) == 0) {
                for (var r = 0, o = n.child; o !== null;) r |= o.lanes | o.childLanes, o = o.sibling;
                n.childLanes = r
            }
            e !== null && (e.flags & 2048) == 0 && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
        } else {
            if (n = kg(t), n !== null) {
                n.flags &= 2047, ce = n;
                return
            }
            e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
        }
        if (t = t.sibling, t !== null) {
            ce = t;
            return
        }
        ce = t = e
    } while (t !== null);
    me === 0 && (me = 5)
}

function ln(e) {
    var t = Nn();
    return nn(99, Fg.bind(null, e, t)), null
}

function Fg(e, t) {
    do Ft(); while (Gr !== null);
    if ((G & 48) != 0) throw Error(z(327));
    var n = e.finishedWork;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
    e.callbackNode = null;
    var r = n.lanes | n.childLanes,
        o = r,
        i = e.pendingLanes & ~o;
    e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= o, e.mutableReadLanes &= o, e.entangledLanes &= o, o = e.entanglements;
    for (var a = e.eventTimes, u = e.expirationTimes; 0 < i;) {
        var l = 31 - xt(i),
            c = 1 << l;
        o[l] = 0, a[l] = -1, u[l] = -1, i &= ~c
    }
    if (vt !== null && (r & 24) == 0 && vt.has(e) && vt.delete(e), e === Re && (ce = Re = null, Se = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
        if (o = G, G |= 32, ul.current = null, Eu = Yo, a = vc(), wu(a)) {
            if ("selectionStart" in a) u = {
                start: a.selectionStart,
                end: a.selectionEnd
            };
            else e: if (u = (u = a.ownerDocument) && u.defaultView || window, (c = u.getSelection && u.getSelection()) && c.rangeCount !== 0) {
                u = c.anchorNode, i = c.anchorOffset, l = c.focusNode, c = c.focusOffset;
                try {
                    u.nodeType, l.nodeType
                } catch {
                    u = null;
                    break e
                }
                var y = 0,
                    E = -1,
                    h = -1,
                    P = 0,
                    R = 0,
                    x = a,
                    m = null;
                t: for (;;) {
                    for (var w; x !== u || i !== 0 && x.nodeType !== 3 || (E = y + i), x !== l || c !== 0 && x.nodeType !== 3 || (h = y + c), x.nodeType === 3 && (y += x.nodeValue.length), (w = x.firstChild) !== null;) m = x, x = w;
                    for (;;) {
                        if (x === a) break t;
                        if (m === u && ++P === i && (E = y), m === l && ++R === c && (h = y), (w = x.nextSibling) !== null) break;
                        x = m, m = x.parentNode
                    }
                    x = w
                }
                u = E === -1 || h === -1 ? null : {
                    start: E,
                    end: h
                }
            } else u = null;
            u = u || {
                start: 0,
                end: 0
            }
        } else u = null;
        Tu = {
            focusedElem: a,
            selectionRange: u
        }, Yo = !1, Qr = null, bi = !1, $ = r;
        do try {
            Bg()
        } catch (f) {
            if ($ === null) throw Error(z(330));
            Bt($, f), $ = $.nextEffect
        }
        while ($ !== null);
        Qr = null, $ = r;
        do try {
            for (a = e; $ !== null;) {
                var _ = $.flags;
                if (_ & 16 && dr($.stateNode, ""), _ & 128) {
                    var S = $.alternate;
                    if (S !== null) {
                        var k = S.ref;
                        k !== null && (typeof k == "function" ? k(null) : k.current = null)
                    }
                }
                switch (_ & 1038) {
                case 2:
                    Ip($), $.flags &= -3;
                    break;
                case 6:
                    Ip($), $.flags &= -3, al($.alternate, $);
                    break;
                case 1024:
                    $.flags &= -1025;
                    break;
                case 1028:
                    $.flags &= -1025, al($.alternate, $);
                    break;
                case 4:
                    al($.alternate, $);
                    break;
                case 8:
                    u = $, Vp(a, u);
                    var O = u.alternate;
                    Mp(u), O !== null && Mp(O)
                }
                $ = $.nextEffect
            }
        } catch (f) {
            if ($ === null) throw Error(z(330));
            Bt($, f), $ = $.nextEffect
        }
        while ($ !== null);
        if (k = Tu, S = vc(), _ = k.focusedElem, a = k.selectionRange, S !== _ && _ && _.ownerDocument && yc(_.ownerDocument.documentElement, _)) {
            for (a !== null && wu(_) && (S = a.start, k = a.end, k === void 0 && (k = S), "selectionStart" in _ ? (_.selectionStart = S, _.selectionEnd = Math.min(k, _.value.length)) : (k = (S = _.ownerDocument || document) && S.defaultView || window, k.getSelection && (k = k.getSelection(), u = _.textContent.length, O = Math.min(a.start, u), a = a.end === void 0 ? O : Math.min(a.end, u), !k.extend && O > a && (u = a, a = O, O = u), u = dc(_, O), i = dc(_, a), u && i && (k.rangeCount !== 1 || k.anchorNode !== u.node || k.anchorOffset !== u.offset || k.focusNode !== i.node || k.focusOffset !== i.offset) && (S = S.createRange(), S.setStart(u.node, u.offset), k.removeAllRanges(), O > a ? (k.addRange(S), k.extend(i.node, i.offset)) : (S.setEnd(i.node, i.offset), k.addRange(S)))))), S = [], k = _; k = k.parentNode;) k.nodeType === 1 && S.push({
                element: k,
                left: k.scrollLeft,
                top: k.scrollTop
            });
            for (typeof _.focus == "function" && _.focus(), _ = 0; _ < S.length; _++) k = S[_], k.element.scrollLeft = k.left, k.element.scrollTop = k.top
        }
        Yo = !!Eu, Tu = Eu = null, e.current = n, $ = r;
        do try {
            for (_ = e; $ !== null;) {
                var g = $.flags;
                if (g & 36 && Ag(_, $.alternate, $), g & 128) {
                    S = void 0;
                    var d = $.ref;
                    if (d !== null) {
                        var s = $.stateNode;
                        switch ($.tag) {
                        case 5:
                            S = s;
                            break;
                        default:
                            S = s
                        }
                        typeof d == "function" ? d(S) : d.current = S
                    }
                }
                $ = $.nextEffect
            }
        } catch (f) {
            if ($ === null) throw Error(z(330));
            Bt($, f), $ = $.nextEffect
        }
        while ($ !== null);
        $ = null, Sg(), G = o
    } else e.current = n;
    if (Nt) Nt = !1, Gr = e, qr = t;
    else
        for ($ = r; $ !== null;) t = $.nextEffect, $.nextEffect = null, $.flags & 8 && (g = $, g.sibling = null, g.stateNode = null), $ = t;
    if (r = e.pendingLanes, r === 0 && (rt = null), r === 1 ? e === hl ? Xr++ : (Xr = 0, hl = e) : Xr = 0, n = n.stateNode, tn && typeof tn.onCommitFiberRoot == "function") try {
        tn.onCommitFiberRoot(ku, n, void 0, (n.current.flags & 64) == 64)
    } catch {}
    if (ze(e, we()), Ri) throw Ri = !1, e = dl, dl = null, e;
    return (G & 8) != 0 || Je(), null
}

function Bg() {
    for (; $ !== null;) {
        var e = $.alternate;
        bi || Qr === null || (($.flags & 8) != 0 ? If($, Qr) && (bi = !0) : $.tag === 13 && Ig(e, $) && If($, Qr) && (bi = !0));
        var t = $.flags;
        (t & 256) != 0 && Mg(e, $), (t & 512) == 0 || Nt || (Nt = !0, Ar(97, function () {
            return Ft(), null
        })), $ = $.nextEffect
    }
}

function Ft() {
    if (qr !== 90) {
        var e = 97 < qr ? 97 : qr;
        return qr = 90, nn(e, Wg)
    }
    return !1
}

function zg(e, t) {
    yl.push(t, e), Nt || (Nt = !0, Ar(97, function () {
        return Ft(), null
    }))
}

function $p(e, t) {
    vl.push(t, e), Nt || (Nt = !0, Ar(97, function () {
        return Ft(), null
    }))
}

function Wg() {
    if (Gr === null) return !1;
    var e = Gr;
    if (Gr = null, (G & 48) != 0) throw Error(z(331));
    var t = G;
    G |= 32;
    var n = vl;
    vl = [];
    for (var r = 0; r < n.length; r += 2) {
        var o = n[r],
            i = n[r + 1],
            a = o.destroy;
        if (o.destroy = void 0, typeof a == "function") try {
            a()
        } catch (l) {
            if (i === null) throw Error(z(330));
            Bt(i, l)
        }
    }
    for (n = yl, yl = [], r = 0; r < n.length; r += 2) {
        o = n[r], i = n[r + 1];
        try {
            var u = o.create;
            o.destroy = u()
        } catch (l) {
            if (i === null) throw Error(z(330));
            Bt(i, l)
        }
    }
    for (u = e.current.firstEffect; u !== null;) e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
    return G = t, Je(), !0
}

function Kp(e, t, n) {
    t = nl(n, t), t = xp(e, t, 1), It(e, t), t = Ie(), e = ki(e, 1), e !== null && (Ko(e, 1, t), ze(e, t))
}

function Bt(e, t) {
    if (e.tag === 3) Kp(e, e, t);
    else
        for (var n = e.return; n !== null;) {
            if (n.tag === 3) {
                Kp(n, e, t);
                break
            } else if (n.tag === 1) {
                var r = n.stateNode;
                if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rt === null || !rt.has(r))) {
                    e = nl(t, e);
                    var o = bp(n, e, 1);
                    if (It(n, o), o = Ie(), n = ki(n, 1), n !== null) Ko(n, 1, o), ze(n, o);
                    else if (typeof r.componentDidCatch == "function" && (rt === null || !rt.has(r))) try {
                        r.componentDidCatch(t, e)
                    } catch {}
                    break
                }
            }
            n = n.return
        }
}

function Hg(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ie(), e.pingedLanes |= e.suspendedLanes & n, Re === e && (Se & n) === n && (me === 4 || me === 3 && (Se & 62914560) === Se && 500 > we() - cl ? Kn(e, 0) : sl |= n), ze(e, t)
}

function $g(e, t) {
    var n = e.stateNode;
    n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, (t & 2) == 0 ? t = 1 : (t & 4) == 0 ? t = Nn() === 99 ? 1 : 2 : (ht === 0 && (ht = zn), t = Cn(62914560 & ~ht), t === 0 && (t = 4194304))), n = Ie(), e = ki(e, t), e !== null && (Ko(e, t, n), ze(e, n))
}
var Yp;
Yp = function (e, t, n) {
    var r = t.lanes;
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || be.current) qe = !0;
        else if ((n & r) != 0) qe = (e.flags & 16384) != 0;
    else {
        switch (qe = !1, t.tag) {
        case 3:
            gp(t), Wu();
            break;
        case 5:
            Jc(t);
            break;
        case 1:
            ke(t.type) && ii(t);
            break;
        case 4:
            Fu(t, t.stateNode.containerInfo);
            break;
        case 10:
            r = t.memoizedProps.value;
            var o = t.type._context;
            ie(li, o._currentValue), o._currentValue = r;
            break;
        case 13:
            if (t.memoizedState !== null) return (n & t.child.childLanes) != 0 ? Pp(e, t, n) : (ie(ae, ae.current & 1), t = yt(e, t, n), t !== null ? t.sibling : null);
            ie(ae, ae.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) != 0, (e.flags & 64) != 0) {
                if (r) return Ep(e, t, n);
                t.flags |= 64
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ie(ae, ae.current), r) break;
            return null;
        case 23:
        case 24:
            return t.lanes = 0, Qu(e, t, n)
        }
        return yt(e, t, n)
    } else qe = !1;
    switch (t.lanes = 0, t.tag) {
    case 2:
        if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = Vn(t, Pe.current), Un(t, n), o = Ku(null, t, r, e, o, n), t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) {
            if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r)) {
                var i = !0;
                ii(t)
            } else i = !1;
            t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ju(t);
            var a = r.getDerivedStateFromProps;
            typeof a == "function" && ci(t, r, a, e), o.updater = pi, t.stateNode = o, o._reactInternals = t, Uu(t, r, e, n), t = Ju(null, t, r, !0, i, n)
        } else t.tag = 0, De(null, t, o, n), t = t.child;
        return t;
    case 16:
        o = t.elementType;
        e: {
            switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = o._init, o = i(o._payload), t.type = o, i = t.tag = Yg(o), e = Ge(o, e), i) {
            case 0:
                t = Zu(null, t, o, e, n);
                break e;
            case 1:
                t = mp(null, t, o, e, n);
                break e;
            case 11:
                t = dp(null, t, o, e, n);
                break e;
            case 14:
                t = yp(null, t, o, Ge(o.type, e), r, n);
                break e
            }
            throw Error(z(306, o, ""))
        }
        return t;
    case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ge(r, o), Zu(e, t, r, o, n);
    case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ge(r, o), mp(e, t, r, o, n);
    case 3:
        if (gp(t), r = t.updateQueue, e === null || r === null) throw Error(z(282));
        if (r = t.pendingProps, o = t.memoizedState, o = o !== null ? o.element : null, Hc(e, t), Ir(t, r, null, n), r = t.memoizedState.element, r === o) Wu(), t = yt(e, t, n);
        else {
            if (o = t.stateNode, (i = o.hydrate) && (Vt = Dn(t.stateNode.containerInfo.firstChild), dt = t, i = tt = !0), i) {
                if (e = o.mutableSourceEagerHydrationData, e != null)
                    for (o = 0; o < e.length; o += 2) i = e[o], i._workInProgressVersionPrimary = e[o + 1], Bn.push(i);
                for (n = Zc(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 1024, n = n.sibling
            } else De(e, t, r, n), Wu();
            t = t.child
        }
        return t;
    case 5:
        return Jc(t), e === null && zu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, Ru(r, o) ? a = null : i !== null && Ru(r, i) && (t.flags |= 16), hp(e, t), De(e, t, a, n), t.child;
    case 6:
        return e === null && zu(t), null;
    case 13:
        return Pp(e, t, n);
    case 4:
        return Fu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = vi(t, null, r, n) : De(e, t, r, n), t.child;
    case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ge(r, o), dp(e, t, r, o, n);
    case 7:
        return De(e, t, t.pendingProps, n), t.child;
    case 8:
        return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
        return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            r = t.type._context,
            o = t.pendingProps,
            a = t.memoizedProps,
            i = o.value;
            var u = t.type._context;
            if (ie(li, u._currentValue), u._currentValue = i, a !== null)
                if (u = a.value, i = Ue(u, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, i) : 1073741823) | 0, i === 0) {
                    if (a.children === o.children && !be.current) {
                        t = yt(e, t, n);
                        break e
                    }
                } else
                    for (u = t.child, u !== null && (u.return = t); u !== null;) {
                        var l = u.dependencies;
                        if (l !== null) {
                            a = u.child;
                            for (var c = l.firstContext; c !== null;) {
                                if (c.context === r && (c.observedBits & i) != 0) {
                                    u.tag === 1 && (c = At(-1, n & -n), c.tag = 2, It(u, c)), u.lanes |= n, c = u.alternate, c !== null && (c.lanes |= n), Wc(u.return, n), l.lanes |= n;
                                    break
                                }
                                c = c.next
                            }
                        } else a = u.tag === 10 && u.type === t.type ? null : u.child;
                        if (a !== null) a.return = u;
                        else
                            for (a = u; a !== null;) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (u = a.sibling, u !== null) {
                                    u.return = a.return, a = u;
                                    break
                                }
                                a = a.return
                            }
                        u = a
                    }
            De(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type, i = t.pendingProps, r = i.children, Un(t, n), o = Fe(o, i.unstable_observedBits), r = r(o), t.flags |= 1, De(e, t, r, n), t.child;
    case 14:
        return o = t.type, i = Ge(o, t.pendingProps), i = Ge(o.type, i), yp(e, t, o, i, r, n);
    case 15:
        return vp(e, t, t.type, t.pendingProps, r, n);
    case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ge(r, o), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ke(r) ? (e = !0, ii(t)) : e = !1, Un(t, n), qc(t, r, o), Uu(t, r, o, n), Ju(null, t, r, !0, e, n);
    case 19:
        return Ep(e, t, n);
    case 23:
        return Qu(e, t, n);
    case 24:
        return Qu(e, t, n)
    }
    throw Error(z(156, t.tag))
};

function Kg(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function We(e, t, n, r) {
    return new Kg(e, t, n, r)
}

function Pl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Yg(e) {
    if (typeof e == "function") return Pl(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Mo) return 11;
        if (e === Io) return 14
    }
    return 2
}

function zt(e, t) {
    var n = e.alternate;
    return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Di(e, t, n, r, o, i) {
    var a = 2;
    if (r = e, typeof e == "function") Pl(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
    case Ot:
        return Yn(n.children, o, i, t);
    case df:
        a = 8, o |= 16;
        break;
    case ba:
        a = 8, o |= 1;
        break;
    case sr:
        return e = We(12, n, t, o | 8), e.elementType = sr, e.type = sr, e.lanes = i, e;
    case fr:
        return e = We(13, n, t, o), e.type = fr, e.elementType = fr, e.lanes = i, e;
    case Ao:
        return e = We(19, n, t, o), e.elementType = Ao, e.lanes = i, e;
    case Ia:
        return wl(n, o, i, t);
    case Va:
        return e = We(24, n, t, o), e.elementType = Va, e.lanes = i, e;
    default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ka:
            a = 10;
            break e;
        case La:
            a = 9;
            break e;
        case Mo:
            a = 11;
            break e;
        case Io:
            a = 14;
            break e;
        case Da:
            a = 16, r = null;
            break e;
        case Ma:
            a = 22;
            break e
        }
        throw Error(z(130, e == null ? e : typeof e, ""))
    }
    return t = We(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Yn(e, t, n, r) {
    return e = We(7, e, r, t), e.lanes = n, e
}

function wl(e, t, n, r) {
    return e = We(23, e, r, t), e.elementType = Ia, e.lanes = n, e
}

function _l(e, t, n) {
    return e = We(6, e, null, t), e.lanes = n, e
}

function Sl(e, t, n) {
    return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Gg(e, t, n) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = lu(0), this.expirationTimes = lu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lu(0), this.mutableSourceEagerHydrationData = null
}

function qg(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Xt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Mi(e, t, n, r) {
    var o = t.current,
        i = Ie(),
        a = jt(o);
    e: if (n) {
        n = n._reactInternals;
        t: {
            if (Zt(n) !== n || n.tag !== 1) throw Error(z(170));
            var u = n;do {
                switch (u.tag) {
                case 3:
                    u = u.stateNode.context;
                    break t;
                case 1:
                    if (ke(u.type)) {
                        u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                        break t
                    }
                }
                u = u.return
            } while (u !== null);
            throw Error(z(171))
        }
        if (n.tag === 1) {
            var l = n.type;
            if (ke(l)) {
                n = Mc(n, l, u);
                break e
            }
        }
        n = u
    } else n = Dt;
    return t.context === null ? t.context = n : t.pendingContext = n, t = At(i, a), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), It(o, t), Ut(o, a, i), a
}

function Ol(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}

function Gp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function El(e, t) {
    Gp(e, t), (e = e.alternate) && Gp(e, t)
}

function Xg() {
    return null
}

function Tl(e, t, n) {
    var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
    if (n = new Gg(e, t, n != null && n.hydrate === !0), t = We(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, ju(t), e[Mn] = n.current, Sc(e.nodeType === 8 ? e.parentNode : e), r)
        for (e = 0; e < r.length; e++) {
            t = r[e];
            var o = t._getVersion;
            o = o(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o)
        }
    this._internalRoot = n
}
Tl.prototype.render = function (e) {
    Mi(e, this._internalRoot, null, null)
};
Tl.prototype.unmount = function () {
    var e = this._internalRoot,
        t = e.containerInfo;
    Mi(null, e, null, function () {
        t[Mn] = null
    })
};

function Jr(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Qg(e, t) {
    if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t)
        for (var n; n = e.lastChild;) e.removeChild(n);
    return new Tl(e, 0, t ? {
        hydrate: !0
    } : void 0)
}

function Ai(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var a = i._internalRoot;
        if (typeof o == "function") {
            var u = o;
            o = function () {
                var c = Ol(a);
                u.call(c)
            }
        }
        Mi(t, a, e, o)
    } else {
        if (i = n._reactRootContainer = Qg(n, r), a = i._internalRoot, typeof o == "function") {
            var l = o;
            o = function () {
                var c = Ol(a);
                l.call(c)
            }
        }
        Fp(function () {
            Mi(t, a, e, o)
        })
    }
    return Ol(a)
}
Vf = function (e) {
    if (e.tag === 13) {
        var t = Ie();
        Ut(e, 4, t), El(e, 4)
    }
};
nu = function (e) {
    if (e.tag === 13) {
        var t = Ie();
        Ut(e, 67108864, t), El(e, 67108864)
    }
};
Nf = function (e) {
    if (e.tag === 13) {
        var t = Ie(),
            n = jt(e);
        Ut(e, n, t), El(e, n)
    }
};
jf = function (e, t) {
    return t()
};
qa = function (e, t, n) {
    switch (t) {
    case "input":
        if (Fa(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ri(r);
                    if (!o) throw Error(z(90));
                    hf(r), Fa(r, o)
                }
            }
        }
        break;
    case "textarea":
        _f(e, n);
        break;
    case "select":
        t = n.value, t != null && Sn(e, !!n.multiple, t, !1)
    }
};
Xa = Up;
kf = function (e, t, n, r, o) {
    var i = G;
    G |= 4;
    try {
        return nn(98, e.bind(null, t, n, r, o))
    } finally {
        G = i, G === 0 && (Hn(), Je())
    }
};
Qa = function () {
    (G & 49) == 0 && (Ng(), Ft())
};
Lf = function (e, t) {
    var n = G;
    G |= 2;
    try {
        return e(t)
    } finally {
        G = n, G === 0 && (Hn(), Je())
    }
};

function qp(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jr(t)) throw Error(z(200));
    return qg(e, t, null, n)
}
var Zg = {
        Events: [Mr, An, ri, xf, bf, Ft, {
            current: !1
        }]
    },
    eo = {
        findFiberByHostInstance: Jt,
        bundleType: 0,
        version: "17.0.2",
        rendererPackageName: "react-dom"
    },
    Jg = {
        bundleType: eo.bundleType,
        version: eo.version,
        rendererPackageName: eo.rendererPackageName,
        rendererConfig: eo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: qt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Af(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: eo.findFiberByHostInstance || Xg,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ii.isDisabled && Ii.supportsFiber) try {
        ku = Ii.inject(Jg), tn = Ii
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zg;
je.createPortal = qp;
je.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(z(188)) : Error(z(268, Object.keys(e)));
    return e = Af(t), e = e === null ? null : e.stateNode, e
};
je.flushSync = function (e, t) {
    var n = G;
    if ((n & 48) != 0) return e(t);
    G |= 1;
    try {
        if (e) return nn(99, e.bind(null, t))
    } finally {
        G = n, Je()
    }
};
je.hydrate = function (e, t, n) {
    if (!Jr(t)) throw Error(z(200));
    return Ai(null, e, t, !0, n)
};
je.render = function (e, t, n) {
    if (!Jr(t)) throw Error(z(200));
    return Ai(null, e, t, !1, n)
};
je.unmountComponentAtNode = function (e) {
    if (!Jr(e)) throw Error(z(40));
    return e._reactRootContainer ? (Fp(function () {
        Ai(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Mn] = null
        })
    }), !0) : !1
};
je.unstable_batchedUpdates = Up;
je.unstable_createPortal = function (e, t) {
    return qp(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null)
};
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Jr(n)) throw Error(z(200));
    if (e == null || e._reactInternals === void 0) throw Error(z(38));
    return Ai(e, t, n, !1, r)
};
je.version = "17.0.2";

function Xp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xp)
    } catch (e) {
        console.error(e)
    }
}
Xp(), af.exports = je;
var AO = af.exports;

function Vi() {
    return Vi = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Vi.apply(this, arguments)
}
var sn;
(function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(sn || (sn = {}));
var Qp = function (e) {
        return e
    },
    Zp = "beforeunload",
    e0 = "popstate";

function t0(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.window,
        r = n === void 0 ? document.defaultView : n,
        o = r.history;

    function i() {
        var d = r.location,
            s = d.pathname,
            f = d.search,
            p = d.hash,
            v = o.state || {};
        return [v.idx, Qp({
            pathname: s,
            search: f,
            hash: p,
            state: v.usr || null,
            key: v.key || "default"
        })]
    }
    var a = null;

    function u() {
        if (a) P.call(a), a = null;
        else {
            var d = sn.Pop,
                s = i(),
                f = s[0],
                p = s[1];
            if (P.length) {
                if (f != null) {
                    var v = y - f;
                    v && (a = {
                        action: d,
                        location: p,
                        retry: function () {
                            O(v * -1)
                        }
                    }, O(v))
                }
            } else _(d)
        }
    }
    r.addEventListener(e0, u);
    var l = sn.Pop,
        c = i(),
        y = c[0],
        E = c[1],
        h = ed(),
        P = ed();
    y == null && (y = 0, o.replaceState(Vi({}, o.state, {
        idx: y
    }), ""));

    function R(d) {
        return typeof d == "string" ? d : Rl(d)
    }

    function x(d, s) {
        return s === void 0 && (s = null), Qp(Vi({
            pathname: E.pathname,
            hash: "",
            search: ""
        }, typeof d == "string" ? fn(d) : d, {
            state: s,
            key: n0()
        }))
    }

    function m(d, s) {
        return [{
            usr: d.state,
            key: d.key,
            idx: s
        }, R(d)]
    }

    function w(d, s, f) {
        return !P.length || (P.call({
            action: d,
            location: s,
            retry: f
        }), !1)
    }

    function _(d) {
        l = d;
        var s = i();
        y = s[0], E = s[1], h.call({
            action: l,
            location: E
        })
    }

    function S(d, s) {
        var f = sn.Push,
            p = x(d, s);

        function v() {
            S(d, s)
        }
        if (w(f, p, v)) {
            var T = m(p, y + 1),
                L = T[0],
                C = T[1];
            try {
                o.pushState(L, "", C)
            } catch {
                r.location.assign(C)
            }
            _(f)
        }
    }

    function k(d, s) {
        var f = sn.Replace,
            p = x(d, s);

        function v() {
            k(d, s)
        }
        if (w(f, p, v)) {
            var T = m(p, y),
                L = T[0],
                C = T[1];
            o.replaceState(L, "", C), _(f)
        }
    }

    function O(d) {
        o.go(d)
    }
    var g = {
        get action() {
            return l
        },
        get location() {
            return E
        },
        createHref: R,
        push: S,
        replace: k,
        go: O,
        back: function () {
            O(-1)
        },
        forward: function () {
            O(1)
        },
        listen: function (s) {
            return h.push(s)
        },
        block: function (s) {
            var f = P.push(s);
            return P.length === 1 && r.addEventListener(Zp, Jp),
                function () {
                    f(), P.length || r.removeEventListener(Zp, Jp)
                }
        }
    };
    return g
}

function Jp(e) {
    e.preventDefault(), e.returnValue = ""
}

function ed() {
    var e = [];
    return {
        get length() {
            return e.length
        },
        push: function (n) {
            return e.push(n),
                function () {
                    e = e.filter(function (r) {
                        return r !== n
                    })
                }
        },
        call: function (n) {
            e.forEach(function (r) {
                return r && r(n)
            })
        }
    }
}

function n0() {
    return Math.random().toString(36).substr(2, 8)
}

function Rl(e) {
    var t = e.pathname,
        n = t === void 0 ? "/" : t,
        r = e.search,
        o = r === void 0 ? "" : r,
        i = e.hash,
        a = i === void 0 ? "" : i;
    return o && o !== "?" && (n += o.charAt(0) === "?" ? o : "?" + o), a && a !== "#" && (n += a.charAt(0) === "#" ? a : "#" + a), n
}

function fn(e) {
    var t = {};
    if (e) {
        var n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        var r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}
/**
 * React Router v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ot(e, t) {
    if (!e) throw new Error(t)
}
const Cl = B.exports.createContext(null),
    xl = B.exports.createContext(null),
    Ni = B.exports.createContext({
        outlet: null,
        matches: []
    });

function r0(e) {
    ot(!1)
}

function o0(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = sn.Pop,
        navigator: i,
        static: a = !1
    } = e;
    to() && ot(!1);
    let u = ad(t),
        l = B.exports.useMemo(() => ({
            basename: u,
            navigator: i,
            static: a
        }), [u, i, a]);
    typeof r == "string" && (r = fn(r));
    let {
        pathname: c = "/",
        search: y = "",
        hash: E = "",
        state: h = null,
        key: P = "default"
    } = r, R = B.exports.useMemo(() => {
        let x = id(c, u);
        return x == null ? null : {
            pathname: x,
            search: y,
            hash: E,
            state: h,
            key: P
        }
    }, [u, c, y, E, h, P]);
    return R == null ? null : B.exports.createElement(Cl.Provider, {
        value: l
    }, B.exports.createElement(xl.Provider, {
        children: n,
        value: {
            location: R,
            navigationType: o
        }
    }))
}

function IO(e) {
    let {
        children: t,
        location: n
    } = e;
    return u0(bl(t), n)
}

function i0(e) {
    to() || ot(!1);
    let {
        basename: t,
        navigator: n
    } = B.exports.useContext(Cl), {
        hash: r,
        pathname: o,
        search: i
    } = td(e), a = o;
    if (t !== "/") {
        let u = T0(e),
            l = u != null && u.endsWith("/");
        a = o === "/" ? t + (l ? "/" : "") : Wt([t, o])
    }
    return n.createHref({
        pathname: a,
        search: i,
        hash: r
    })
}

function to() {
    return B.exports.useContext(xl) != null
}

function ji() {
    return to() || ot(!1), B.exports.useContext(xl).location
}

function a0() {
    to() || ot(!1);
    let {
        basename: e,
        navigator: t
    } = B.exports.useContext(Cl), {
        matches: n
    } = B.exports.useContext(Ni), {
        pathname: r
    } = ji(), o = JSON.stringify(n.map(u => u.pathnameBase)), i = B.exports.useRef(!1);
    return B.exports.useEffect(() => {
        i.current = !0
    }), B.exports.useCallback(function (u, l) {
        if (l === void 0 && (l = {}), !i.current) return;
        if (typeof u == "number") {
            t.go(u);
            return
        }
        let c = od(u, JSON.parse(o), r);
        e !== "/" && (c.pathname = Wt([e, c.pathname])), (l.replace ? t.replace : t.push)(c, l.state)
    }, [e, t, o, r])
}

function td(e) {
    let {
        matches: t
    } = B.exports.useContext(Ni), {
        pathname: n
    } = ji(), r = JSON.stringify(t.map(o => o.pathnameBase));
    return B.exports.useMemo(() => od(e, JSON.parse(r), n), [e, r, n])
}

function u0(e, t) {
    to() || ot(!1);
    let {
        matches: n
    } = B.exports.useContext(Ni), r = n[n.length - 1], o = r ? r.params : {};
    r && r.pathname;
    let i = r ? r.pathnameBase : "/";
    r && r.route;
    let a = ji(),
        u;
    if (t) {
        var l;
        let h = typeof t == "string" ? fn(t) : t;
        i === "/" || ((l = h.pathname) == null ? void 0 : l.startsWith(i)) || ot(!1), u = h
    } else u = a;
    let c = u.pathname || "/",
        y = i === "/" ? c : c.slice(i.length) || "/",
        E = l0(e, {
            pathname: y
        });
    return P0(E && E.map(h => Object.assign({}, h, {
        params: Object.assign({}, o, h.params),
        pathname: Wt([i, h.pathname]),
        pathnameBase: h.pathnameBase === "/" ? i : Wt([i, h.pathnameBase])
    })), n)
}

function bl(e) {
    let t = [];
    return B.exports.Children.forEach(e, n => {
        if (!B.exports.isValidElement(n)) return;
        if (n.type === B.exports.Fragment) {
            t.push.apply(t, bl(n.props.children));
            return
        }
        n.type !== r0 && ot(!1);
        let r = {
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            index: n.props.index,
            path: n.props.path
        };
        n.props.children && (r.children = bl(n.props.children)), t.push(r)
    }), t
}

function l0(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? fn(t) : t,
        o = id(r.pathname || "/", n);
    if (o == null) return null;
    let i = nd(e);
    s0(i);
    let a = null;
    for (let u = 0; a == null && u < i.length; ++u) a = g0(i[u], o);
    return a
}

function nd(e, t, n, r) {
    return t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""), e.forEach((o, i) => {
        let a = {
            relativePath: o.path || "",
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        a.relativePath.startsWith("/") && (a.relativePath.startsWith(r) || ot(!1), a.relativePath = a.relativePath.slice(r.length));
        let u = Wt([r, a.relativePath]),
            l = n.concat(a);
        o.children && o.children.length > 0 && (o.index === !0 && ot(!1), nd(o.children, t, l, u)), !(o.path == null && !o.index) && t.push({
            path: u,
            score: h0(u, o.index),
            routesMeta: l
        })
    }), t
}

function s0(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : m0(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const f0 = /^:\w+$/,
    c0 = 3,
    p0 = 2,
    d0 = 1,
    y0 = 10,
    v0 = -2,
    rd = e => e === "*";

function h0(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(rd) && (r += v0), t && (r += p0), n.filter(o => !rd(o)).reduce((o, i) => o + (f0.test(i) ? c0 : i === "" ? d0 : y0), r)
}

function m0(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function g0(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, o = "/", i = [];
    for (let a = 0; a < n.length; ++a) {
        let u = n[a],
            l = a === n.length - 1,
            c = o === "/" ? t : t.slice(o.length) || "/",
            y = w0({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: l
            }, c);
        if (!y) return null;
        Object.assign(r, y.params);
        let E = u.route;
        i.push({
            params: r,
            pathname: Wt([o, y.pathname]),
            pathnameBase: ad(Wt([o, y.pathnameBase])),
            route: E
        }), y.pathnameBase !== "/" && (o = Wt([o, y.pathnameBase]))
    }
    return i
}

function P0(e, t) {
    return t === void 0 && (t = []), e == null ? null : e.reduceRight((n, r, o) => B.exports.createElement(Ni.Provider, {
        children: r.route.element !== void 0 ? r.route.element : n,
        value: {
            outlet: n,
            matches: t.concat(e.slice(0, o + 1))
        }
    }), null)
}

function w0(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = _0(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        a = i.replace(/(.)\/+$/, "$1"),
        u = o.slice(1);
    return {
        params: r.reduce((c, y, E) => {
            if (y === "*") {
                let h = u[E] || "";
                a = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1")
            }
            return c[y] = S0(u[E] || ""), c
        }, {}),
        pathname: i,
        pathnameBase: a,
        pattern: e
    }
}

function _0(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0);
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (a, u) => (r.push(u), "([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)", [new RegExp(o, t ? void 0 : "i"), r]
}

function S0(e, t) {
    try {
        return decodeURIComponent(e)
    } catch {
        return e
    }
}

function O0(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: o = ""
    } = typeof e == "string" ? fn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : E0(n, t) : t,
        search: R0(r),
        hash: C0(o)
    }
}

function E0(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }), n.length > 1 ? n.join("/") : "/"
}

function od(e, t, n) {
    let r = typeof e == "string" ? fn(e) : e,
        o = e === "" || r.pathname === "" ? "/" : r.pathname,
        i;
    if (o == null) i = n;
    else {
        let u = t.length - 1;
        if (o.startsWith("..")) {
            let l = o.split("/");
            for (; l[0] === "..";) l.shift(), u -= 1;
            r.pathname = l.join("/")
        }
        i = u >= 0 ? t[u] : "/"
    }
    let a = O0(r, i);
    return o && o !== "/" && o.endsWith("/") && !a.pathname.endsWith("/") && (a.pathname += "/"), a
}

function T0(e) {
    return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? fn(e).pathname : e.pathname
}

function id(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = e.charAt(t.length);
    return n && n !== "/" ? null : e.slice(t.length) || "/"
}
const Wt = e => e.join("/").replace(/\/\/+/g, "/"),
    ad = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    R0 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    C0 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
/**
 * React Router DOM v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function kl() {
    return kl = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, kl.apply(this, arguments)
}

function x0(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
const b0 = ["onClick", "reloadDocument", "replace", "state", "target", "to"];

function VO(e) {
    let {
        basename: t,
        children: n,
        window: r
    } = e, o = B.exports.useRef();
    o.current == null && (o.current = t0({
        window: r
    }));
    let i = o.current,
        [a, u] = B.exports.useState({
            action: i.action,
            location: i.location
        });
    return B.exports.useLayoutEffect(() => i.listen(u), [i]), B.exports.createElement(o0, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i
    })
}

function k0(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
const NO = B.exports.forwardRef(function (t, n) {
    let {
        onClick: r,
        reloadDocument: o,
        replace: i = !1,
        state: a,
        target: u,
        to: l
    } = t, c = x0(t, b0), y = i0(l), E = L0(l, {
        replace: i,
        state: a,
        target: u
    });

    function h(P) {
        r && r(P), !P.defaultPrevented && !o && E(P)
    }
    return B.exports.createElement("a", kl({}, c, {
        href: y,
        onClick: h,
        ref: n,
        target: u
    }))
});

function L0(e, t) {
    let {
        target: n,
        replace: r,
        state: o
    } = t === void 0 ? {} : t, i = a0(), a = ji(), u = td(e);
    return B.exports.useCallback(l => {
        if (l.button === 0 && (!n || n === "_self") && !k0(l)) {
            l.preventDefault();
            let c = !!r || Rl(a) === Rl(u);
            i(e, {
                replace: c,
                state: o
            })
        }
    }, [a, i, u, r, o, n, e])
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ll = function (e, t) {
    return Ll = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function (n, r) {
        n.__proto__ = r
    } || function (n, r) {
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
    }, Ll(e, t)
};

function ud(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Ll(e, t);

    function n() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var W = function () {
    return W = Object.assign || function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, W.apply(this, arguments)
};

function He(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function ye(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var r = n.call(e),
        o, i = [],
        a;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(o = r.next()).done;) i.push(o.value)
    } catch (u) {
        a = {
            error: u
        }
    } finally {
        try {
            o && !o.done && (n = r.return) && n.call(r)
        } finally {
            if (a) throw a.error
        }
    }
    return i
}

function it(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var mt = function (e) {
        return {
            isEnabled: function (t) {
                return e.some(function (n) {
                    return !!t[n]
                })
            }
        }
    },
    no = {
        measureLayout: mt(["layout", "layoutId", "drag"]),
        animation: mt(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
        exit: mt(["exit"]),
        drag: mt(["drag", "dragControls"]),
        focus: mt(["whileFocus"]),
        hover: mt(["whileHover", "onHoverStart", "onHoverEnd"]),
        tap: mt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
        pan: mt(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
        inView: mt(["whileInView", "onViewportEnter", "onViewportLeave"])
    };

function D0(e) {
    for (var t in e) e[t] !== null && (t === "projectionNodeConstructor" ? no.projectionNodeConstructor = e[t] : no[t].Component = e[t])
}
var M0 = function () {},
    Ui = function () {},
    ld = B.exports.createContext({
        strict: !1
    }),
    sd = Object.keys(no),
    A0 = sd.length;

function I0(e, t, n) {
    var r = [];
    if (B.exports.useContext(ld), !t) return null;
    for (var o = 0; o < A0; o++) {
        var i = sd[o],
            a = no[i],
            u = a.isEnabled,
            l = a.Component;
        u(e) && l && r.push(B.exports.createElement(l, W({
            key: i
        }, e, {
            visualElement: t
        })))
    }
    return r
}
var fd = B.exports.createContext({
        transformPagePoint: function (e) {
            return e
        },
        isStatic: !1
    }),
    Fi = B.exports.createContext({});

function V0() {
    return B.exports.useContext(Fi).visualElement
}
var Bi = B.exports.createContext(null),
    ro = typeof window != "undefined",
    cd = ro ? B.exports.useLayoutEffect : B.exports.useEffect;

function N0(e, t, n, r) {
    var o = B.exports.useContext(ld),
        i = V0(),
        a = B.exports.useContext(Bi),
        u = B.exports.useRef(void 0);
    r || (r = o.renderer), !u.current && r && (u.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceId: a == null ? void 0 : a.id,
        blockInitialAnimation: (a == null ? void 0 : a.initial) === !1
    }));
    var l = u.current;
    return cd(function () {
        l == null || l.syncRender()
    }), B.exports.useEffect(function () {
        var c;
        (c = l == null ? void 0 : l.animationState) === null || c === void 0 || c.animateChanges()
    }), cd(function () {
        return function () {
            return l == null ? void 0 : l.notifyUnmount()
        }
    }, []), l
}

function Gn(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function j0(e, t, n) {
    return B.exports.useCallback(function (r) {
        var o;
        r && ((o = e.mount) === null || o === void 0 || o.call(e, r)), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Gn(n) && (n.current = r))
    }, [t])
}

function pd(e) {
    return Array.isArray(e)
}

function Xe(e) {
    return typeof e == "string" || pd(e)
}

function U0(e) {
    var t = {};
    return e.forEachValue(function (n, r) {
        return t[r] = n.get()
    }), t
}

function F0(e) {
    var t = {};
    return e.forEachValue(function (n, r) {
        return t[r] = n.getVelocity()
    }), t
}

function dd(e, t, n, r, o) {
    var i;
    return r === void 0 && (r = {}), o === void 0 && (o = {}), typeof t == "function" && (t = t(n != null ? n : e.custom, r, o)), typeof t == "string" && (t = (i = e.variants) === null || i === void 0 ? void 0 : i[t]), typeof t == "function" && (t = t(n != null ? n : e.custom, r, o)), t
}

function zi(e, t, n) {
    var r = e.getProps();
    return dd(r, t, n != null ? n : r.custom, U0(e), F0(e))
}

function Wi(e) {
    var t;
    return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) == "function" || Xe(e.initial) || Xe(e.animate) || Xe(e.whileHover) || Xe(e.whileDrag) || Xe(e.whileTap) || Xe(e.whileFocus) || Xe(e.exit)
}

function yd(e) {
    return Boolean(Wi(e) || e.variants)
}

function B0(e, t) {
    if (Wi(e)) {
        var n = e.initial,
            r = e.animate;
        return {
            initial: n === !1 || Xe(n) ? n : void 0,
            animate: Xe(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function z0(e) {
    var t = B0(e, B.exports.useContext(Fi)),
        n = t.initial,
        r = t.animate;
    return B.exports.useMemo(function () {
        return {
            initial: n,
            animate: r
        }
    }, [vd(n), vd(r)])
}

function vd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}

function Hi(e) {
    var t = B.exports.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const hd = 1 / 60 * 1e3,
    W0 = typeof performance != "undefined" ? () => performance.now() : () => Date.now(),
    md = typeof window != "undefined" ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(W0()), hd);

function H0(e) {
    let t = [],
        n = [],
        r = 0,
        o = !1,
        i = !1;
    const a = new WeakSet,
        u = {
            schedule: (l, c = !1, y = !1) => {
                const E = y && o,
                    h = E ? t : n;
                return c && a.add(l), h.indexOf(l) === -1 && (h.push(l), E && o && (r = t.length)), l
            },
            cancel: l => {
                const c = n.indexOf(l);
                c !== -1 && n.splice(c, 1), a.delete(l)
            },
            process: l => {
                if (o) {
                    i = !0;
                    return
                }
                if (o = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
                    for (let c = 0; c < r; c++) {
                        const y = t[c];
                        y(l), a.has(y) && (u.schedule(y), e())
                    }
                o = !1, i && (i = !1, u.process(l))
            }
        };
    return u
}
const $0 = 40;
let Dl = !0,
    oo = !1,
    Ml = !1;
const qn = {
        delta: 0,
        timestamp: 0
    },
    io = ["read", "update", "preRender", "render", "postRender"],
    $i = io.reduce((e, t) => (e[t] = H0(() => oo = !0), e), {}),
    at = io.reduce((e, t) => {
        const n = $i[t];
        return e[t] = (r, o = !1, i = !1) => (oo || Y0(), n.schedule(r, o, i)), e
    }, {}),
    Xn = io.reduce((e, t) => (e[t] = $i[t].cancel, e), {}),
    Al = io.reduce((e, t) => (e[t] = () => $i[t].process(qn), e), {}),
    K0 = e => $i[e].process(qn),
    gd = e => {
        oo = !1, qn.delta = Dl ? hd : Math.max(Math.min(e - qn.timestamp, $0), 1), qn.timestamp = e, Ml = !0, io.forEach(K0), Ml = !1, oo && (Dl = !1, md(gd))
    },
    Y0 = () => {
        oo = !0, Dl = !0, Ml || md(gd)
    },
    Ki = () => qn,
    Yi = (e, t, n) => Math.min(Math.max(n, e), t),
    Il = .001,
    G0 = .01,
    Pd = 10,
    q0 = .05,
    X0 = 1;

function Q0({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let o, i;
    M0(e <= Pd * 1e3);
    let a = 1 - t;
    a = Yi(q0, X0, a), e = Yi(G0, Pd, e / 1e3), a < 1 ? (o = c => {
        const y = c * a,
            E = y * e,
            h = y - n,
            P = Vl(c, a),
            R = Math.exp(-E);
        return Il - h / P * R
    }, i = c => {
        const E = c * a * e,
            h = E * n + n,
            P = Math.pow(a, 2) * Math.pow(c, 2) * e,
            R = Math.exp(-E),
            x = Vl(Math.pow(c, 2), a);
        return (-o(c) + Il > 0 ? -1 : 1) * ((h - P) * R) / x
    }) : (o = c => {
        const y = Math.exp(-c * e),
            E = (c - n) * e + 1;
        return -Il + y * E
    }, i = c => {
        const y = Math.exp(-c * e),
            E = (n - c) * (e * e);
        return y * E
    });
    const u = 5 / e,
        l = J0(o, i, u);
    if (e = e * 1e3, isNaN(l)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    }; {
        const c = Math.pow(l, 2) * r;
        return {
            stiffness: c,
            damping: a * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const Z0 = 12;

function J0(e, t, n) {
    let r = n;
    for (let o = 1; o < Z0; o++) r = r - e(r) / t(r);
    return r
}

function Vl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const eP = ["duration", "bounce"],
    tP = ["stiffness", "damping", "mass"];

function wd(e, t) {
    return t.some(n => e[n] !== void 0)
}

function nP(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!wd(e, tP) && wd(e, eP)) {
        const n = Q0(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }), t.isResolvedFromDuration = !0
    }
    return t
}

function Nl(e) {
    var {
        from: t = 0,
        to: n = 1,
        restSpeed: r = 2,
        restDelta: o
    } = e, i = He(e, ["from", "to", "restSpeed", "restDelta"]);
    const a = {
        done: !1,
        value: t
    };
    let {
        stiffness: u,
        damping: l,
        mass: c,
        velocity: y,
        duration: E,
        isResolvedFromDuration: h
    } = nP(i), P = _d, R = _d;

    function x() {
        const m = y ? -(y / 1e3) : 0,
            w = n - t,
            _ = l / (2 * Math.sqrt(u * c)),
            S = Math.sqrt(u / c) / 1e3;
        if (o === void 0 && (o = Math.min(Math.abs(n - t) / 100, .4)), _ < 1) {
            const k = Vl(S, _);
            P = O => {
                const g = Math.exp(-_ * S * O);
                return n - g * ((m + _ * S * w) / k * Math.sin(k * O) + w * Math.cos(k * O))
            }, R = O => {
                const g = Math.exp(-_ * S * O);
                return _ * S * g * (Math.sin(k * O) * (m + _ * S * w) / k + w * Math.cos(k * O)) - g * (Math.cos(k * O) * (m + _ * S * w) - k * w * Math.sin(k * O))
            }
        } else if (_ === 1) P = k => n - Math.exp(-S * k) * (w + (m + S * w) * k);
        else {
            const k = S * Math.sqrt(_ * _ - 1);
            P = O => {
                const g = Math.exp(-_ * S * O),
                    d = Math.min(k * O, 300);
                return n - g * ((m + _ * S * w) * Math.sinh(d) + k * w * Math.cosh(d)) / k
            }
        }
    }
    return x(), {
        next: m => {
            const w = P(m);
            if (h) a.done = m >= E;
            else {
                const _ = R(m) * 1e3,
                    S = Math.abs(_) <= r,
                    k = Math.abs(n - w) <= o;
                a.done = S && k
            }
            return a.value = a.done ? n : w, a
        },
        flipTarget: () => {
            y = -y, [t, n] = [n, t], x()
        }
    }
}
Nl.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const _d = e => 0,
    ao = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    ue = (e, t, n) => -n * e + n * t + e,
    Sd = (e, t) => n => Math.max(Math.min(n, t), e),
    uo = e => e % 1 ? Number(e.toFixed(5)) : e,
    lo = /(-)?([\d]*\.?[\d])+/g,
    jl = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
    rP = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

function so(e) {
    return typeof e == "string"
}
const cn = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    fo = Object.assign(Object.assign({}, cn), {
        transform: Sd(0, 1)
    }),
    Gi = Object.assign(Object.assign({}, cn), {
        default: 1
    }),
    co = e => ({
        test: t => so(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    Ht = co("deg"),
    ut = co("%"),
    Y = co("px"),
    oP = co("vh"),
    iP = co("vw"),
    Od = Object.assign(Object.assign({}, ut), {
        parse: e => ut.parse(e) / 100,
        transform: e => ut.transform(e * 100)
    }),
    Ul = (e, t) => n => Boolean(so(n) && rP.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    Ed = (e, t, n) => r => {
        if (!so(r)) return r;
        const [o, i, a, u] = r.match(lo);
        return {
            [e]: parseFloat(o),
            [t]: parseFloat(i),
            [n]: parseFloat(a),
            alpha: u !== void 0 ? parseFloat(u) : 1
        }
    },
    pn = {
        test: Ul("hsl", "hue"),
        parse: Ed("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + ut.transform(uo(t)) + ", " + ut.transform(uo(n)) + ", " + uo(fo.transform(r)) + ")"
    },
    aP = Sd(0, 255),
    Fl = Object.assign(Object.assign({}, cn), {
        transform: e => Math.round(aP(e))
    }),
    $t = {
        test: Ul("rgb", "red"),
        parse: Ed("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Fl.transform(e) + ", " + Fl.transform(t) + ", " + Fl.transform(n) + ", " + uo(fo.transform(r)) + ")"
    };

function uP(e) {
    let t = "",
        n = "",
        r = "",
        o = "";
    return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), o = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), o = e.substr(4, 1), t += t, n += n, r += r, o += o), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const Bl = {
        test: Ul("#"),
        parse: uP,
        transform: $t.transform
    },
    Ce = {
        test: e => $t.test(e) || Bl.test(e) || pn.test(e),
        parse: e => $t.test(e) ? $t.parse(e) : pn.test(e) ? pn.parse(e) : Bl.parse(e),
        transform: e => so(e) ? e : e.hasOwnProperty("red") ? $t.transform(e) : pn.transform(e)
    },
    Td = "${c}",
    Rd = "${n}";

function lP(e) {
    var t, n, r, o;
    return isNaN(e) && so(e) && ((n = (t = e.match(lo)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((o = (r = e.match(jl)) === null || r === void 0 ? void 0 : r.length) !== null && o !== void 0 ? o : 0) > 0
}

function Cd(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(jl);
    r && (n = r.length, e = e.replace(jl, Td), t.push(...r.map(Ce.parse)));
    const o = e.match(lo);
    return o && (e = e.replace(lo, Rd), t.push(...o.map(cn.parse))), {
        values: t,
        numColors: n,
        tokenised: e
    }
}

function xd(e) {
    return Cd(e).values
}

function bd(e) {
    const {
        values: t,
        numColors: n,
        tokenised: r
    } = Cd(e), o = t.length;
    return i => {
        let a = r;
        for (let u = 0; u < o; u++) a = a.replace(u < n ? Td : Rd, u < n ? Ce.transform(i[u]) : uo(i[u]));
        return a
    }
}
const sP = e => typeof e == "number" ? 0 : e;

function fP(e) {
    const t = xd(e);
    return bd(e)(t.map(sP))
}
const gt = {
        test: lP,
        parse: xd,
        createTransformer: bd,
        getAnimatableNone: fP
    },
    cP = new Set(["brightness", "contrast", "saturate", "opacity"]);

function pP(e) {
    let [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(lo) || [];
    if (!r) return e;
    const o = n.replace(r, "");
    let i = cP.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + o + ")"
}
const dP = /([a-z-]*)\(.*?\)/g,
    zl = Object.assign(Object.assign({}, gt), {
        getAnimatableNone: e => {
            const t = e.match(dP);
            return t ? t.map(pP).join(" ") : e
        }
    });

function Wl(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function kd({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let o = 0,
        i = 0,
        a = 0;
    if (!t) o = i = a = n;
    else {
        const u = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - u;
        o = Wl(l, u, e + 1 / 3), i = Wl(l, u, e), a = Wl(l, u, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(a * 255),
        alpha: r
    }
}
const yP = (e, t, n) => {
        const r = e * e,
            o = t * t;
        return Math.sqrt(Math.max(0, n * (o - r) + r))
    },
    vP = [Bl, $t, pn],
    Ld = e => vP.find(t => t.test(e)),
    Dd = (e, t) => {
        let n = Ld(e),
            r = Ld(t),
            o = n.parse(e),
            i = r.parse(t);
        n === pn && (o = kd(o), n = $t), r === pn && (i = kd(i), r = $t);
        const a = Object.assign({}, o);
        return u => {
            for (const l in a) l !== "alpha" && (a[l] = yP(o[l], i[l], u));
            return a.alpha = ue(o.alpha, i.alpha, u), n.transform(a)
        }
    },
    Hl = e => typeof e == "number",
    hP = (e, t) => n => t(e(n)),
    qi = (...e) => e.reduce(hP);

function Md(e, t) {
    return Hl(e) ? n => ue(e, t, n) : Ce.test(e) ? Dd(e, t) : Vd(e, t)
}
const Ad = (e, t) => {
        const n = [...e],
            r = n.length,
            o = e.map((i, a) => Md(i, t[a]));
        return i => {
            for (let a = 0; a < r; a++) n[a] = o[a](i);
            return n
        }
    },
    mP = (e, t) => {
        const n = Object.assign(Object.assign({}, e), t),
            r = {};
        for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = Md(e[o], t[o]));
        return o => {
            for (const i in r) n[i] = r[i](o);
            return n
        }
    };

function Id(e) {
    const t = gt.parse(e),
        n = t.length;
    let r = 0,
        o = 0,
        i = 0;
    for (let a = 0; a < n; a++) r || typeof t[a] == "number" ? r++ : t[a].hue !== void 0 ? i++ : o++;
    return {
        parsed: t,
        numNumbers: r,
        numRGB: o,
        numHSL: i
    }
}
const Vd = (e, t) => {
        const n = gt.createTransformer(t),
            r = Id(e),
            o = Id(t);
        return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? qi(Ad(r.parsed, o.parsed), n) : a => `${a>0?t:e}`
    },
    gP = (e, t) => n => ue(e, t, n);

function PP(e) {
    if (typeof e == "number") return gP;
    if (typeof e == "string") return Ce.test(e) ? Dd : Vd;
    if (Array.isArray(e)) return Ad;
    if (typeof e == "object") return mP
}

function wP(e, t, n) {
    const r = [],
        o = n || PP(e[0]),
        i = e.length - 1;
    for (let a = 0; a < i; a++) {
        let u = o(e[a], e[a + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[a] : t;
            u = qi(l, u)
        }
        r.push(u)
    }
    return r
}

function _P([e, t], [n]) {
    return r => n(ao(e, t, r))
}

function SP(e, t) {
    const n = e.length,
        r = n - 1;
    return o => {
        let i = 0,
            a = !1;
        if (o <= e[0] ? a = !0 : o >= e[r] && (i = r - 1, a = !0), !a) {
            let l = 1;
            for (; l < n && !(e[l] > o || l === r); l++);
            i = l - 1
        }
        const u = ao(e[i], e[i + 1], o);
        return t[i](u)
    }
}

function Nd(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: o
} = {}) {
    const i = e.length;
    Ui(i === t.length), Ui(!r || !Array.isArray(r) || r.length === i - 1), e[0] > e[i - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
    const a = wP(t, r, o),
        u = i === 2 ? _P(e, a) : SP(e, a);
    return n ? l => u(Yi(e[0], e[i - 1], l)) : u
}
const Xi = e => t => 1 - e(1 - t),
    $l = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    OP = e => t => Math.pow(t, e),
    jd = e => t => t * t * ((e + 1) * t - e),
    EP = e => {
        const t = jd(e);
        return n => (n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
    },
    Ud = 1.525,
    TP = 4 / 11,
    RP = 8 / 11,
    CP = 9 / 10,
    Kl = e => e,
    Yl = OP(2),
    xP = Xi(Yl),
    Fd = $l(Yl),
    Bd = e => 1 - Math.sin(Math.acos(e)),
    Gl = Xi(Bd),
    bP = $l(Gl),
    ql = jd(Ud),
    kP = Xi(ql),
    LP = $l(ql),
    DP = EP(Ud),
    MP = 4356 / 361,
    AP = 35442 / 1805,
    IP = 16061 / 1805,
    Qi = e => {
        if (e === 1 || e === 0) return e;
        const t = e * e;
        return e < TP ? 7.5625 * t : e < RP ? 9.075 * t - 9.9 * e + 3.4 : e < CP ? MP * t - AP * e + IP : 10.8 * e * e - 20.52 * e + 10.72
    },
    VP = Xi(Qi),
    NP = e => e < .5 ? .5 * (1 - Qi(1 - e * 2)) : .5 * Qi(e * 2 - 1) + .5;

function jP(e, t) {
    return e.map(() => t || Fd).splice(0, e.length - 1)
}

function UP(e) {
    const t = e.length;
    return e.map((n, r) => r !== 0 ? r / (t - 1) : 0)
}

function FP(e, t) {
    return e.map(n => n * t)
}

function Zi({
    from: e = 0,
    to: t = 1,
    ease: n,
    offset: r,
    duration: o = 300
}) {
    const i = {
            done: !1,
            value: e
        },
        a = Array.isArray(t) ? t : [e, t],
        u = FP(r && r.length === a.length ? r : UP(a), o);

    function l() {
        return Nd(u, a, {
            ease: Array.isArray(n) ? n : jP(a, n)
        })
    }
    let c = l();
    return {
        next: y => (i.value = c(y), i.done = y >= o, i),
        flipTarget: () => {
            a.reverse(), c = l()
        }
    }
}

function BP({
    velocity: e = 0,
    from: t = 0,
    power: n = .8,
    timeConstant: r = 350,
    restDelta: o = .5,
    modifyTarget: i
}) {
    const a = {
        done: !1,
        value: t
    };
    let u = n * e;
    const l = t + u,
        c = i === void 0 ? l : i(l);
    return c !== l && (u = c - t), {
        next: y => {
            const E = -u * Math.exp(-y / r);
            return a.done = !(E > o || E < -o), a.value = a.done ? c : c + E, a
        },
        flipTarget: () => {}
    }
}
const zd = {
    keyframes: Zi,
    spring: Nl,
    decay: BP
};

function zP(e) {
    if (Array.isArray(e.to)) return Zi;
    if (zd[e.type]) return zd[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Zi : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Nl : Zi
}

function Wd(e, t, n = 0) {
    return e - t - n
}

function WP(e, t, n = 0, r = !0) {
    return r ? Wd(t + -e, t, n) : t - (e - t) + n
}

function HP(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const $P = e => {
    const t = ({
        delta: n
    }) => e(n);
    return {
        start: () => at.update(t, !0),
        stop: () => Xn.update(t)
    }
};

function Hd(e) {
    var t, n, {
            from: r,
            autoplay: o = !0,
            driver: i = $P,
            elapsed: a = 0,
            repeat: u = 0,
            repeatType: l = "loop",
            repeatDelay: c = 0,
            onPlay: y,
            onStop: E,
            onComplete: h,
            onRepeat: P,
            onUpdate: R
        } = e,
        x = He(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {
        to: m
    } = x, w, _ = 0, S = x.duration, k, O = !1, g = !0, d;
    const s = zP(x);
    ((n = (t = s).needsInterpolation) === null || n === void 0 ? void 0 : n.call(t, r, m)) && (d = Nd([0, 100], [r, m], {
        clamp: !1
    }), r = 0, m = 100);
    const f = s(Object.assign(Object.assign({}, x), {
        from: r,
        to: m
    }));

    function p() {
        _++, l === "reverse" ? (g = _ % 2 == 0, a = WP(a, S, c, g)) : (a = Wd(a, S, c), l === "mirror" && f.flipTarget()), O = !1, P && P()
    }

    function v() {
        w.stop(), h && h()
    }

    function T(C) {
        if (g || (C = -C), a += C, !O) {
            const j = f.next(Math.max(0, a));
            k = j.value, d && (k = d(k)), O = g ? j.done : a <= 0
        }
        R == null || R(k), O && (_ === 0 && (S != null || (S = a)), _ < u ? HP(a, S, c, g) && p() : v())
    }

    function L() {
        y == null || y(), w = i(T), w.start()
    }
    return o && L(), {
        stop: () => {
            E == null || E(), w.stop()
        }
    }
}

function $d(e, t) {
    return t ? e * (1e3 / t) : 0
}

function KP({
    from: e = 0,
    velocity: t = 0,
    min: n,
    max: r,
    power: o = .8,
    timeConstant: i = 750,
    bounceStiffness: a = 500,
    bounceDamping: u = 10,
    restDelta: l = 1,
    modifyTarget: c,
    driver: y,
    onUpdate: E,
    onComplete: h,
    onStop: P
}) {
    let R;

    function x(S) {
        return n !== void 0 && S < n || r !== void 0 && S > r
    }

    function m(S) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - S) < Math.abs(r - S) ? n : r
    }

    function w(S) {
        R == null || R.stop(), R = Hd(Object.assign(Object.assign({}, S), {
            driver: y,
            onUpdate: k => {
                var O;
                E == null || E(k), (O = S.onUpdate) === null || O === void 0 || O.call(S, k)
            },
            onComplete: h,
            onStop: P
        }))
    }

    function _(S) {
        w(Object.assign({
            type: "spring",
            stiffness: a,
            damping: u,
            restDelta: l
        }, S))
    }
    if (x(e)) _({
        from: e,
        velocity: t,
        to: m(e)
    });
    else {
        let S = o * t + e;
        typeof c != "undefined" && (S = c(S));
        const k = m(S),
            O = k === n ? -1 : 1;
        let g, d;
        const s = f => {
            g = d, d = f, t = $d(f - g, Ki().delta), (O === 1 && f > k || O === -1 && f < k) && _({
                from: f,
                to: k,
                velocity: t
            })
        };
        w({
            type: "decay",
            from: e,
            velocity: t,
            timeConstant: i,
            power: o,
            restDelta: l,
            modifyTarget: c,
            onUpdate: x(S) ? s : void 0
        })
    }
    return {
        stop: () => R == null ? void 0 : R.stop()
    }
}
const Xl = e => e.hasOwnProperty("x") && e.hasOwnProperty("y"),
    Kd = e => Xl(e) && e.hasOwnProperty("z"),
    Ji = (e, t) => Math.abs(e - t);

function Yd(e, t) {
    if (Hl(e) && Hl(t)) return Ji(e, t);
    if (Xl(e) && Xl(t)) {
        const n = Ji(e.x, t.x),
            r = Ji(e.y, t.y),
            o = Kd(e) && Kd(t) ? Ji(e.z, t.z) : 0;
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
    }
}
const Gd = (e, t) => 1 - 3 * t + 3 * e,
    qd = (e, t) => 3 * t - 6 * e,
    Xd = e => 3 * e,
    ea = (e, t, n) => ((Gd(t, n) * e + qd(t, n)) * e + Xd(t)) * e,
    Qd = (e, t, n) => 3 * Gd(t, n) * e * e + 2 * qd(t, n) * e + Xd(t),
    YP = 1e-7,
    GP = 10;

function qP(e, t, n, r, o) {
    let i, a, u = 0;
    do a = t + (n - t) / 2, i = ea(a, r, o) - e, i > 0 ? n = a : t = a; while (Math.abs(i) > YP && ++u < GP);
    return a
}
const XP = 8,
    QP = .001;

function ZP(e, t, n, r) {
    for (let o = 0; o < XP; ++o) {
        const i = Qd(t, n, r);
        if (i === 0) return t;
        t -= (ea(t, n, r) - e) / i
    }
    return t
}
const ta = 11,
    na = 1 / (ta - 1);

function JP(e, t, n, r) {
    if (e === t && n === r) return Kl;
    const o = new Float32Array(ta);
    for (let a = 0; a < ta; ++a) o[a] = ea(a * na, e, n);

    function i(a) {
        let u = 0,
            l = 1;
        const c = ta - 1;
        for (; l !== c && o[l] <= a; ++l) u += na;
        --l;
        const y = (a - o[l]) / (o[l + 1] - o[l]),
            E = u + y * na,
            h = Qd(E, e, n);
        return h >= QP ? ZP(a, E, e, n) : h === 0 ? E : qP(a, u, u + na, e, n)
    }
    return a => a === 0 || a === 1 ? a : ea(i(a), t, r)
}

function Ql(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Zl(e, t) {
    var n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
var po = function () {
        function e() {
            this.subscriptions = []
        }
        return e.prototype.add = function (t) {
            var n = this;
            return Ql(this.subscriptions, t),
                function () {
                    return Zl(n.subscriptions, t)
                }
        }, e.prototype.notify = function (t, n, r) {
            var o = this.subscriptions.length;
            if (!!o)
                if (o === 1) this.subscriptions[0](t, n, r);
                else
                    for (var i = 0; i < o; i++) {
                        var a = this.subscriptions[i];
                        a && a(t, n, r)
                    }
        }, e.prototype.getSize = function () {
            return this.subscriptions.length
        }, e.prototype.clear = function () {
            this.subscriptions.length = 0
        }, e
    }(),
    ew = function (e) {
        return !isNaN(parseFloat(e))
    },
    tw = function () {
        function e(t) {
            var n = this;
            this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new po, this.velocityUpdateSubscribers = new po, this.renderSubscribers = new po, this.canTrackVelocity = !1, this.updateAndNotify = function (r, o) {
                o === void 0 && (o = !0), n.prev = n.current, n.current = r;
                var i = Ki(),
                    a = i.delta,
                    u = i.timestamp;
                n.lastUpdated !== u && (n.timeDelta = a, n.lastUpdated = u, at.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), o && n.renderSubscribers.notify(n.current)
            }, this.scheduleVelocityCheck = function () {
                return at.postRender(n.velocityCheck)
            }, this.velocityCheck = function (r) {
                var o = r.timestamp;
                o !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()))
            }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = ew(this.current)
        }
        return e.prototype.onChange = function (t) {
            return this.updateSubscribers.add(t)
        }, e.prototype.clearListeners = function () {
            this.updateSubscribers.clear()
        }, e.prototype.onRenderRequest = function (t) {
            return t(this.get()), this.renderSubscribers.add(t)
        }, e.prototype.attach = function (t) {
            this.passiveEffect = t
        }, e.prototype.set = function (t, n) {
            n === void 0 && (n = !0), !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
        }, e.prototype.get = function () {
            return this.current
        }, e.prototype.getPrevious = function () {
            return this.prev
        }, e.prototype.getVelocity = function () {
            return this.canTrackVelocity ? $d(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }, e.prototype.start = function (t) {
            var n = this;
            return this.stop(), new Promise(function (r) {
                n.hasAnimated = !0, n.stopAnimation = t(r)
            }).then(function () {
                return n.clearAnimation()
            })
        }, e.prototype.stop = function () {
            this.stopAnimation && this.stopAnimation(), this.clearAnimation()
        }, e.prototype.isAnimating = function () {
            return !!this.stopAnimation
        }, e.prototype.clearAnimation = function () {
            this.stopAnimation = null
        }, e.prototype.destroy = function () {
            this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
        }, e
    }();

function Qn(e) {
    return new tw(e)
}
var Pt = function (e) {
        return Boolean(e !== null && typeof e == "object" && e.getVelocity)
    },
    ra = function (e) {
        return e * 1e3
    },
    nw = {
        linear: Kl,
        easeIn: Yl,
        easeInOut: Fd,
        easeOut: xP,
        circIn: Bd,
        circInOut: bP,
        circOut: Gl,
        backIn: ql,
        backInOut: LP,
        backOut: kP,
        anticipate: DP,
        bounceIn: VP,
        bounceInOut: NP,
        bounceOut: Qi
    },
    Zd = function (e) {
        if (Array.isArray(e)) {
            Ui(e.length === 4);
            var t = ye(e, 4),
                n = t[0],
                r = t[1],
                o = t[2],
                i = t[3];
            return JP(n, r, o, i)
        } else if (typeof e == "string") return nw[e];
        return e
    },
    rw = function (e) {
        return Array.isArray(e) && typeof e[0] != "number"
    },
    Jd = function (e, t) {
        return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && gt.test(t) && !t.startsWith("url("))
    },
    yo = function (e) {
        return Array.isArray(e)
    },
    dn = function () {
        return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
    },
    oa = function (e) {
        return {
            type: "spring",
            stiffness: 550,
            damping: e === 0 ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        }
    },
    Jl = function () {
        return {
            type: "keyframes",
            ease: "linear",
            duration: .3
        }
    },
    ow = function (e) {
        return {
            type: "keyframes",
            duration: .8,
            values: e
        }
    },
    ey = {
        x: dn,
        y: dn,
        z: dn,
        rotate: dn,
        rotateX: dn,
        rotateY: dn,
        rotateZ: dn,
        scaleX: oa,
        scaleY: oa,
        scale: oa,
        opacity: Jl,
        backgroundColor: Jl,
        color: Jl,
        default: oa
    },
    iw = function (e, t) {
        var n;
        return yo(t) ? n = ow : n = ey[e] || ey.default, W({
            to: t
        }, n(t))
    },
    ty = W(W({}, cn), {
        transform: Math.round
    }),
    ny = {
        borderWidth: Y,
        borderTopWidth: Y,
        borderRightWidth: Y,
        borderBottomWidth: Y,
        borderLeftWidth: Y,
        borderRadius: Y,
        radius: Y,
        borderTopLeftRadius: Y,
        borderTopRightRadius: Y,
        borderBottomRightRadius: Y,
        borderBottomLeftRadius: Y,
        width: Y,
        maxWidth: Y,
        height: Y,
        maxHeight: Y,
        size: Y,
        top: Y,
        right: Y,
        bottom: Y,
        left: Y,
        padding: Y,
        paddingTop: Y,
        paddingRight: Y,
        paddingBottom: Y,
        paddingLeft: Y,
        margin: Y,
        marginTop: Y,
        marginRight: Y,
        marginBottom: Y,
        marginLeft: Y,
        rotate: Ht,
        rotateX: Ht,
        rotateY: Ht,
        rotateZ: Ht,
        scale: Gi,
        scaleX: Gi,
        scaleY: Gi,
        scaleZ: Gi,
        skew: Ht,
        skewX: Ht,
        skewY: Ht,
        distance: Y,
        translateX: Y,
        translateY: Y,
        translateZ: Y,
        x: Y,
        y: Y,
        z: Y,
        perspective: Y,
        transformPerspective: Y,
        opacity: fo,
        originX: Od,
        originY: Od,
        originZ: Y,
        zIndex: ty,
        fillOpacity: fo,
        strokeOpacity: fo,
        numOctaves: ty
    },
    aw = W(W({}, ny), {
        color: Ce,
        backgroundColor: Ce,
        outlineColor: Ce,
        fill: Ce,
        stroke: Ce,
        borderColor: Ce,
        borderTopColor: Ce,
        borderRightColor: Ce,
        borderBottomColor: Ce,
        borderLeftColor: Ce,
        filter: zl,
        WebkitFilter: zl
    }),
    es = function (e) {
        return aw[e]
    };

function ts(e, t) {
    var n, r = es(e);
    return r !== zl && (r = gt), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t)
}
var uw = {
        current: !1
    },
    lw = function (e) {
        return Boolean(e && typeof e == "object" && e.mix && e.toValue)
    },
    ry = function (e) {
        return yo(e) ? e[e.length - 1] || 0 : e
    };

function sw(e) {
    e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
    var t = He(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(t).length
}

function fw(e) {
    var t = e.ease,
        n = e.times,
        r = e.yoyo,
        o = e.flip,
        i = e.loop,
        a = He(e, ["ease", "times", "yoyo", "flip", "loop"]),
        u = W({}, a);
    return n && (u.offset = n), a.duration && (u.duration = ra(a.duration)), a.repeatDelay && (u.repeatDelay = ra(a.repeatDelay)), t && (u.ease = rw(t) ? t.map(Zd) : Zd(t)), a.type === "tween" && (u.type = "keyframes"), (r || i || o) && (r ? u.repeatType = "reverse" : i ? u.repeatType = "loop" : o && (u.repeatType = "mirror"), u.repeat = i || r || o || a.repeat), a.type !== "spring" && (u.type = "keyframes"), u
}

function cw(e, t) {
    var n, r, o = ns(e, t) || {};
    return (r = (n = o.delay) !== null && n !== void 0 ? n : e.delay) !== null && r !== void 0 ? r : 0
}

function pw(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = it([], ye(e.to), !1), e.to[0] = e.from), e
}

function dw(e, t, n) {
    var r;
    return Array.isArray(t.to) && ((r = e.duration) !== null && r !== void 0 || (e.duration = .8)), pw(t), sw(e) || (e = W(W({}, e), iw(n, t.to))), W(W({}, t), fw(e))
}

function yw(e, t, n, r, o) {
    var i, a = ns(r, e),
        u = (i = a.from) !== null && i !== void 0 ? i : t.get(),
        l = Jd(e, n);
    u === "none" && l && typeof n == "string" ? u = ts(e, n) : oy(u) && typeof n == "string" ? u = iy(n) : !Array.isArray(n) && oy(n) && typeof u == "string" && (n = iy(u));
    var c = Jd(e, u);

    function y() {
        var h = {
            from: u,
            to: n,
            velocity: t.getVelocity(),
            onComplete: o,
            onUpdate: function (P) {
                return t.set(P)
            }
        };
        return a.type === "inertia" || a.type === "decay" ? KP(W(W({}, h), a)) : Hd(W(W({}, dw(a, h, e)), {
            onUpdate: function (P) {
                var R;
                h.onUpdate(P), (R = a.onUpdate) === null || R === void 0 || R.call(a, P)
            },
            onComplete: function () {
                var P;
                h.onComplete(), (P = a.onComplete) === null || P === void 0 || P.call(a)
            }
        }))
    }

    function E() {
        var h, P, R = ry(n);
        return t.set(R), o(), (h = a == null ? void 0 : a.onUpdate) === null || h === void 0 || h.call(a, R), (P = a == null ? void 0 : a.onComplete) === null || P === void 0 || P.call(a), {
            stop: function () {}
        }
    }
    return !c || !l || a.type === !1 ? E : y
}

function oy(e) {
    return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1
}

function iy(e) {
    return typeof e == "number" ? 0 : ts("", e)
}

function ns(e, t) {
    return e[t] || e.default || e
}

function rs(e, t, n, r) {
    return r === void 0 && (r = {}), uw.current && (r = {
        type: !1
    }), t.start(function (o) {
        var i, a, u = yw(e, t, n, r, o),
            l = cw(r, e),
            c = function () {
                return a = u()
            };
        return l ? i = window.setTimeout(c, ra(l)) : c(),
            function () {
                clearTimeout(i), a == null || a.stop()
            }
    })
}

function vw(e, t, n) {
    n === void 0 && (n = {});
    var r = Pt(e) ? e : Qn(e);
    return rs("", r, t, n), {
        stop: function () {
            return r.stop()
        },
        isAnimating: function () {
            return r.isAnimating()
        }
    }
}
var ay = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    hw = ay.length,
    uy = function (e) {
        return typeof e == "string" ? parseFloat(e) : e
    },
    ly = function (e) {
        return typeof e == "number" || Y.test(e)
    };

function mw(e, t, n, r, o, i) {
    var a, u, l, c;
    o ? (e.opacity = ue(0, (a = n.opacity) !== null && a !== void 0 ? a : 1, gw(r)), e.opacityExit = ue((u = t.opacity) !== null && u !== void 0 ? u : 1, 0, Pw(r))) : i && (e.opacity = ue((l = t.opacity) !== null && l !== void 0 ? l : 1, (c = n.opacity) !== null && c !== void 0 ? c : 1, r));
    for (var y = 0; y < hw; y++) {
        var E = "border".concat(ay[y], "Radius"),
            h = sy(t, E),
            P = sy(n, E);
        if (!(h === void 0 && P === void 0)) {
            h || (h = 0), P || (P = 0);
            var R = h === 0 || P === 0 || ly(h) === ly(P);
            R ? (e[E] = Math.max(ue(uy(h), uy(P), r), 0), (ut.test(P) || ut.test(h)) && (e[E] += "%")) : e[E] = P
        }
    }(t.rotate || n.rotate) && (e.rotate = ue(t.rotate || 0, n.rotate || 0, r))
}

function sy(e, t) {
    var n;
    return (n = e[t]) !== null && n !== void 0 ? n : e.borderRadius
}
var gw = fy(0, .5, Gl),
    Pw = fy(.5, .95, Kl);

function fy(e, t, n) {
    return function (r) {
        return r < e ? 0 : r > t ? 1 : n(ao(e, t, r))
    }
}

function cy(e, t) {
    e.min = t.min, e.max = t.max
}

function lt(e, t) {
    cy(e.x, t.x), cy(e.y, t.y)
}

function os(e) {
    return e === void 0 || e === 1
}

function py(e) {
    var t = e.scale,
        n = e.scaleX,
        r = e.scaleY;
    return !os(t) || !os(n) || !os(r)
}

function Kt(e) {
    return py(e) || dy(e.x) || dy(e.y) || e.z || e.rotate || e.rotateX || e.rotateY
}

function dy(e) {
    return e && e !== "0%"
}

function ia(e, t, n) {
    var r = e - n,
        o = t * r;
    return n + o
}

function yy(e, t, n, r, o) {
    return o !== void 0 && (e = ia(e, o, r)), ia(e, n, r) + t
}

function is(e, t, n, r, o) {
    t === void 0 && (t = 0), n === void 0 && (n = 1), e.min = yy(e.min, t, n, r, o), e.max = yy(e.max, t, n, r, o)
}

function vy(e, t) {
    var n = t.x,
        r = t.y;
    is(e.x, n.translate, n.scale, n.originPoint), is(e.y, r.translate, r.scale, r.originPoint)
}

function ww(e, t, n, r) {
    var o, i;
    r === void 0 && (r = !1);
    var a = n.length;
    if (!!a) {
        t.x = t.y = 1;
        for (var u, l, c = 0; c < a; c++) u = n[c], l = u.projectionDelta, ((i = (o = u.instance) === null || o === void 0 ? void 0 : o.style) === null || i === void 0 ? void 0 : i.display) !== "contents" && (r && u.options.layoutScroll && u.scroll && u !== u.root && Jn(e, {
            x: -u.scroll.x,
            y: -u.scroll.y
        }), l && (t.x *= l.x.scale, t.y *= l.y.scale, vy(e, l)), r && Kt(u.latestValues) && Jn(e, u.latestValues))
    }
}

function Zn(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function hy(e, t, n) {
    var r = ye(n, 3),
        o = r[0],
        i = r[1],
        a = r[2],
        u = t[a] !== void 0 ? t[a] : .5,
        l = ue(e.min, e.max, u);
    is(e, t[o], t[i], l, t.scale)
}
var _w = ["x", "scaleX", "originX"],
    Sw = ["y", "scaleY", "originY"];

function Jn(e, t) {
    hy(e.x, t, _w), hy(e.y, t, Sw)
}

function wt(e) {
    return e.max - e.min
}

function my(e, t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = .01), Yd(e, t) < n
}

function gy(e, t, n, r) {
    r === void 0 && (r = .5), e.origin = r, e.originPoint = ue(t.min, t.max, e.origin), e.scale = wt(n) / wt(t), (my(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ue(n.min, n.max, e.origin) - e.originPoint, (my(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function vo(e, t, n, r) {
    gy(e.x, t.x, n.x, r == null ? void 0 : r.originX), gy(e.y, t.y, n.y, r == null ? void 0 : r.originY)
}

function Py(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + wt(t)
}

function Ow(e, t, n) {
    Py(e.x, t.x, n.x), Py(e.y, t.y, n.y)
}

function wy(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + wt(t)
}

function ho(e, t, n) {
    wy(e.x, t.x, n.x), wy(e.y, t.y, n.y)
}

function _y(e, t, n, r, o) {
    return e -= t, e = ia(e, 1 / n, r), o !== void 0 && (e = ia(e, 1 / o, r)), e
}

function Ew(e, t, n, r, o, i, a) {
    if (t === void 0 && (t = 0), n === void 0 && (n = 1), r === void 0 && (r = .5), i === void 0 && (i = e), a === void 0 && (a = e), ut.test(t)) {
        t = parseFloat(t);
        var u = ue(a.min, a.max, t / 100);
        t = u - a.min
    }
    if (typeof t == "number") {
        var l = ue(i.min, i.max, r);
        e === i && (l -= t), e.min = _y(e.min, t, n, l, o), e.max = _y(e.max, t, n, l, o)
    }
}

function Sy(e, t, n, r, o) {
    var i = ye(n, 3),
        a = i[0],
        u = i[1],
        l = i[2];
    Ew(e, t[a], t[u], t[l], t.scale, r, o)
}
var Tw = ["x", "scaleX", "originX"],
    Rw = ["y", "scaleY", "originY"];

function Oy(e, t, n, r) {
    Sy(e.x, t, Tw, n == null ? void 0 : n.x, r == null ? void 0 : r.x), Sy(e.y, t, Rw, n == null ? void 0 : n.y, r == null ? void 0 : r.y)
}
var Ey = function () {
        return {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        }
    },
    mo = function () {
        return {
            x: Ey(),
            y: Ey()
        }
    },
    Ty = function () {
        return {
            min: 0,
            max: 0
        }
    },
    Oe = function () {
        return {
            x: Ty(),
            y: Ty()
        }
    };

function Ry(e) {
    return e.translate === 0 && e.scale === 1
}

function Cy(e) {
    return Ry(e.x) && Ry(e.y)
}

function xy(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
var Cw = function () {
        function e() {
            this.members = []
        }
        return e.prototype.add = function (t) {
            Ql(this.members, t), t.scheduleRender()
        }, e.prototype.remove = function (t) {
            if (Zl(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                var n = this.members[this.members.length - 1];
                n && this.promote(n)
            }
        }, e.prototype.relegate = function (t) {
            var n = this.members.findIndex(function (a) {
                return t === a
            });
            if (n === 0) return !1;
            for (var r, o = n; o >= 0; o--) {
                var i = this.members[o];
                if (i.isPresent !== !1) {
                    r = i;
                    break
                }
            }
            return r ? (this.promote(r), !0) : !1
        }, e.prototype.promote = function (t, n) {
            var r, o = this.lead;
            if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
                o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, n && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues, t.snapshot.isShared = !0), ((r = t.root) === null || r === void 0 ? void 0 : r.isUpdating) && (t.isLayoutDirty = !0);
                var i = t.options.crossfade;
                i === !1 && o.hide()
            }
        }, e.prototype.exitAnimationComplete = function () {
            this.members.forEach(function (t) {
                var n, r, o, i, a;
                (r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n), (a = (o = t.resumingFrom) === null || o === void 0 ? void 0 : (i = o.options).onExitComplete) === null || a === void 0 || a.call(i)
            })
        }, e.prototype.scheduleRender = function () {
            this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1)
            })
        }, e.prototype.removeLeadSnapshot = function () {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }, e
    }(),
    aa = {};

function xw(e) {
    Object.assign(aa, e)
}
var bw = "translate3d(0px, 0px, 0) scale(1, 1)";

function by(e, t, n) {
    var r = e.x.translate / t.x,
        o = e.y.translate / t.y,
        i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
    if (n) {
        var a = n.rotate,
            u = n.rotateX,
            l = n.rotateY;
        a && (i += "rotate(".concat(a, "deg) ")), u && (i += "rotateX(".concat(u, "deg) ")), l && (i += "rotateY(".concat(l, "deg) "))
    }
    return i += "scale(".concat(e.x.scale, ", ").concat(e.y.scale, ")"), i === bw ? "none" : i
}

function st(e) {
    return [e("x"), e("y")]
}
var as = ["", "X", "Y", "Z"],
    kw = ["translate", "scale", "rotate", "skew"],
    go = ["transformPerspective", "x", "y", "z"];
kw.forEach(function (e) {
    return as.forEach(function (t) {
        return go.push(e + t)
    })
});

function Lw(e, t) {
    return go.indexOf(e) - go.indexOf(t)
}
var Dw = new Set(go);

function ua(e) {
    return Dw.has(e)
}
var Mw = new Set(["originX", "originY", "originZ"]);

function ky(e) {
    return Mw.has(e)
}
var Aw = function (e, t) {
        return e.depth - t.depth
    },
    Iw = function () {
        function e() {
            this.children = [], this.isDirty = !1
        }
        return e.prototype.add = function (t) {
            Ql(this.children, t), this.isDirty = !0
        }, e.prototype.remove = function (t) {
            Zl(this.children, t), this.isDirty = !0
        }, e.prototype.forEach = function (t) {
            this.isDirty && this.children.sort(Aw), this.isDirty = !1, this.children.forEach(t)
        }, e
    }();

function la(e) {
    var t = Pt(e) ? e.get() : e;
    return lw(t) ? t.toValue() : t
}
var Ly = 1e3,
    Po = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

function Dy(e) {
    var t = e.attachResizeListener,
        n = e.defaultParent,
        r = e.measureScroll,
        o = e.resetTransform;
    return function () {
        function i(a, u, l) {
            var c = this;
            u === void 0 && (u = {}), l === void 0 && (l = n == null ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function () {
                c.isUpdating && (c.isUpdating = !1, c.clearAllSnapshots())
            }, this.updateProjection = function () {
                c.nodes.forEach(Bw), c.nodes.forEach(zw)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = a, this.latestValues = u, this.root = l ? l.root || l : this, this.path = l ? it(it([], ye(l.path), !1), [l], !1) : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, a && this.root.registerPotentialNode(a, this);
            for (var y = 0; y < this.path.length; y++) this.path[y].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Iw)
        }
        return i.prototype.addEventListener = function (a, u) {
            return this.eventHandlers.has(a) || this.eventHandlers.set(a, new po), this.eventHandlers.get(a).add(u)
        }, i.prototype.notifyListeners = function (a) {
            for (var u = [], l = 1; l < arguments.length; l++) u[l - 1] = arguments[l];
            var c = this.eventHandlers.get(a);
            c == null || c.notify.apply(c, it([], ye(u), !1))
        }, i.prototype.hasListeners = function (a) {
            return this.eventHandlers.has(a)
        }, i.prototype.registerPotentialNode = function (a, u) {
            this.potentialNodes.set(a, u)
        }, i.prototype.mount = function (a, u) {
            var l = this,
                c;
            if (u === void 0 && (u = !1), !this.instance) {
                this.isSVG = a instanceof SVGElement && a.tagName !== "svg", this.instance = a;
                var y = this.options,
                    E = y.layoutId,
                    h = y.layout,
                    P = y.visualElement;
                if (P && !P.getInstance() && P.mount(a), this.root.nodes.add(this), (c = this.parent) === null || c === void 0 || c.children.add(this), this.id && this.root.potentialNodes.delete(this.id), u && (h || E) && (this.isLayoutDirty = !0), t) {
                    var R, x = function () {
                        return l.root.updateBlockedByResize = !1
                    };
                    t(a, function () {
                        l.root.updateBlockedByResize = !0, clearTimeout(R), R = window.setTimeout(x, 250), Po.hasAnimatedSinceResize && (Po.hasAnimatedSinceResize = !1, l.nodes.forEach(Fw))
                    })
                }
                E && this.root.registerSharedNode(E, this), this.options.animate !== !1 && P && (E || h) && this.addEventListener("didUpdate", function (m) {
                    var w, _, S, k, O, g = m.delta,
                        d = m.hasLayoutChanged,
                        s = m.hasRelativeTargetChanged,
                        f = m.layout;
                    if (l.isTreeAnimationBlocked()) {
                        l.target = void 0, l.relativeTarget = void 0;
                        return
                    }
                    var p = (_ = (w = l.options.transition) !== null && w !== void 0 ? w : P.getDefaultTransition()) !== null && _ !== void 0 ? _ : Yw,
                        v = P.getProps().onLayoutAnimationComplete,
                        T = !l.targetLayout || !xy(l.targetLayout, f) || s,
                        L = !d && s;
                    ((S = l.resumeFrom) === null || S === void 0 ? void 0 : S.instance) || L || d && (T || !l.currentAnimation) ? (l.resumeFrom && (l.resumingFrom = l.resumeFrom, l.resumingFrom.resumingFrom = void 0), l.setAnimationOrigin(g, L), l.startAnimation(W(W({}, ns(p, "layout")), {
                        onComplete: v
                    }))) : l.isLead() && ((O = (k = l.options).onExitComplete) === null || O === void 0 || O.call(k)), l.targetLayout = f
                })
            }
        }, i.prototype.unmount = function () {
            var a, u;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (a = this.getStack()) === null || a === void 0 || a.remove(this), (u = this.parent) === null || u === void 0 || u.children.delete(this), this.instance = void 0, Xn.preRender(this.updateProjection)
        }, i.prototype.blockUpdate = function () {
            this.updateManuallyBlocked = !0
        }, i.prototype.unblockUpdate = function () {
            this.updateManuallyBlocked = !1
        }, i.prototype.isUpdateBlocked = function () {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }, i.prototype.isTreeAnimationBlocked = function () {
            var a;
            return this.isAnimationBlocked || ((a = this.parent) === null || a === void 0 ? void 0 : a.isTreeAnimationBlocked()) || !1
        }, i.prototype.startUpdate = function () {
            var a;
            this.isUpdateBlocked() || (this.isUpdating = !0, (a = this.nodes) === null || a === void 0 || a.forEach(Ww))
        }, i.prototype.willUpdate = function (a) {
            var u, l, c;
            if (a === void 0 && (a = !0), this.root.isUpdateBlocked()) {
                (l = (u = this.options).onExitComplete) === null || l === void 0 || l.call(u);
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
                this.isLayoutDirty = !0;
                for (var y = 0; y < this.path.length; y++) {
                    var E = this.path[y];
                    E.shouldResetTransform = !0, E.updateScroll()
                }
                var h = this.options,
                    P = h.layoutId,
                    R = h.layout;
                if (!(P === void 0 && !R)) {
                    var x = (c = this.options.visualElement) === null || c === void 0 ? void 0 : c.getProps().transformTemplate;
                    this.prevTransformTemplateValue = x == null ? void 0 : x(this.latestValues, ""), this.updateSnapshot(), a && this.notifyListeners("willUpdate")
                }
            }
        }, i.prototype.didUpdate = function () {
            var a = this.isUpdateBlocked();
            if (a) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(My);
                return
            }!this.isUpdating || (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Gw), this.potentialNodes.clear()), this.nodes.forEach(Uw), this.nodes.forEach(Vw), this.nodes.forEach(Nw), this.clearAllSnapshots(), Al.update(), Al.preRender(), Al.render())
        }, i.prototype.clearAllSnapshots = function () {
            this.nodes.forEach(jw), this.sharedNodes.forEach(Hw)
        }, i.prototype.scheduleUpdateProjection = function () {
            at.preRender(this.updateProjection, !1, !0)
        }, i.prototype.scheduleCheckAfterUnmount = function () {
            var a = this;
            at.postRender(function () {
                a.isLayoutDirty ? a.root.didUpdate() : a.root.checkUpdateFailed()
            })
        }, i.prototype.updateSnapshot = function () {
            if (!(this.snapshot || !this.instance)) {
                var a = this.measure(),
                    u = this.removeTransform(this.removeElementScroll(a));
                Ny(u), this.snapshot = {
                    measured: a,
                    layout: u,
                    latestValues: {}
                }
            }
        }, i.prototype.updateLayout = function () {
            var a;
            if (!!this.instance && (this.updateScroll(), !(!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (var u = 0; u < this.path.length; u++) {
                        var l = this.path[u];
                        l.updateScroll()
                    }
                var c = this.measure();
                Ny(c);
                var y = this.layout;
                this.layout = {
                    measured: c,
                    actual: this.removeElementScroll(c)
                }, this.layoutCorrected = Oe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), (a = this.options.visualElement) === null || a === void 0 || a.notifyLayoutMeasure(this.layout.actual, y == null ? void 0 : y.actual)
            }
        }, i.prototype.updateScroll = function () {
            this.options.layoutScroll && this.instance && (this.scroll = r(this.instance))
        }, i.prototype.resetTransform = function () {
            var a;
            if (!!o) {
                var u = this.isLayoutDirty || this.shouldResetTransform,
                    l = this.projectionDelta && !Cy(this.projectionDelta),
                    c = (a = this.options.visualElement) === null || a === void 0 ? void 0 : a.getProps().transformTemplate,
                    y = c == null ? void 0 : c(this.latestValues, ""),
                    E = y !== this.prevTransformTemplateValue;
                u && (l || Kt(this.latestValues) || E) && (o(this.instance, y), this.shouldResetTransform = !1, this.scheduleRender())
            }
        }, i.prototype.measure = function () {
            var a = this.options.visualElement;
            if (!a) return Oe();
            var u = a.measureViewportBox(),
                l = this.root.scroll;
            return l && (Zn(u.x, l.x), Zn(u.y, l.y)), u
        }, i.prototype.removeElementScroll = function (a) {
            var u = Oe();
            lt(u, a);
            for (var l = 0; l < this.path.length; l++) {
                var c = this.path[l],
                    y = c.scroll,
                    E = c.options;
                c !== this.root && y && E.layoutScroll && (Zn(u.x, y.x), Zn(u.y, y.y))
            }
            return u
        }, i.prototype.applyTransform = function (a, u) {
            u === void 0 && (u = !1);
            var l = Oe();
            lt(l, a);
            for (var c = 0; c < this.path.length; c++) {
                var y = this.path[c];
                !u && y.options.layoutScroll && y.scroll && y !== y.root && Jn(l, {
                    x: -y.scroll.x,
                    y: -y.scroll.y
                }), !!Kt(y.latestValues) && Jn(l, y.latestValues)
            }
            return Kt(this.latestValues) && Jn(l, this.latestValues), l
        }, i.prototype.removeTransform = function (a) {
            var u, l = Oe();
            lt(l, a);
            for (var c = 0; c < this.path.length; c++) {
                var y = this.path[c];
                if (!!y.instance && !!Kt(y.latestValues)) {
                    py(y.latestValues) && y.updateSnapshot();
                    var E = Oe(),
                        h = y.measure();
                    lt(E, h), Oy(l, y.latestValues, (u = y.snapshot) === null || u === void 0 ? void 0 : u.layout, E)
                }
            }
            return Kt(this.latestValues) && Oy(l, this.latestValues), l
        }, i.prototype.setTargetDelta = function (a) {
            this.targetDelta = a, this.root.scheduleUpdateProjection()
        }, i.prototype.setOptions = function (a) {
            var u;
            this.options = W(W(W({}, this.options), a), {
                crossfade: (u = a.crossfade) !== null && u !== void 0 ? u : !0
            })
        }, i.prototype.clearMeasurements = function () {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }, i.prototype.resolveTargetDelta = function () {
            var a, u = this.options,
                l = u.layout,
                c = u.layoutId;
            !this.layout || !(l || c) || (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), ho(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), lt(this.relativeTarget, this.relativeTargetOrigin))), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Oe(), this.targetWithTransforms = Oe()), this.relativeTarget && this.relativeTargetOrigin && ((a = this.relativeParent) === null || a === void 0 ? void 0 : a.target) ? Ow(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : lt(this.target, this.layout.actual), vy(this.target, this.targetDelta)) : lt(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), ho(this.relativeTargetOrigin, this.target, this.relativeParent.target), lt(this.relativeTarget, this.relativeTargetOrigin)))))
        }, i.prototype.getClosestProjectingParent = function () {
            if (!(!this.parent || Kt(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
        }, i.prototype.calcProjection = function () {
            var a, u = this.options,
                l = u.layout,
                c = u.layoutId;
            if (this.isTreeAnimating = Boolean(((a = this.parent) === null || a === void 0 ? void 0 : a.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !(!this.layout || !(l || c))) {
                var y = this.getLead();
                lt(this.layoutCorrected, this.layout.actual), ww(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== y);
                var E = y.target;
                if (!!E) {
                    this.projectionDelta || (this.projectionDelta = mo(), this.projectionDeltaWithTransform = mo());
                    var h = this.treeScale.x,
                        P = this.treeScale.y,
                        R = this.projectionTransform;
                    vo(this.projectionDelta, this.layoutCorrected, E, this.latestValues), this.projectionTransform = by(this.projectionDelta, this.treeScale), (this.projectionTransform !== R || this.treeScale.x !== h || this.treeScale.y !== P) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", E))
                }
            }
        }, i.prototype.hide = function () {
            this.isVisible = !1
        }, i.prototype.show = function () {
            this.isVisible = !0
        }, i.prototype.scheduleRender = function (a) {
            var u, l, c;
            a === void 0 && (a = !0), (l = (u = this.options).scheduleRender) === null || l === void 0 || l.call(u), a && ((c = this.getStack()) === null || c === void 0 || c.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }, i.prototype.setAnimationOrigin = function (a, u) {
            var l = this,
                c;
            u === void 0 && (u = !1);
            var y = this.snapshot,
                E = (y == null ? void 0 : y.latestValues) || {},
                h = W({}, this.latestValues),
                P = mo();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !u;
            var R = Oe(),
                x = y == null ? void 0 : y.isShared,
                m = (((c = this.getStack()) === null || c === void 0 ? void 0 : c.members.length) || 0) <= 1,
                w = Boolean(x && !m && this.options.crossfade === !0 && !this.path.some(Kw));
            this.mixTargetDelta = function (_) {
                var S, k = _ / 1e3;
                Ay(P.x, a.x, k), Ay(P.y, a.y, k), l.setTargetDelta(P), l.relativeTarget && l.relativeTargetOrigin && l.layout && ((S = l.relativeParent) === null || S === void 0 ? void 0 : S.layout) && (ho(R, l.layout.actual, l.relativeParent.layout.actual), $w(l.relativeTarget, l.relativeTargetOrigin, R, k)), x && (l.animationValues = h, mw(h, E, l.latestValues, k, w, m)), l.root.scheduleUpdateProjection(), l.scheduleRender()
            }, this.mixTargetDelta(0)
        }, i.prototype.startAnimation = function (a) {
            var u = this,
                l, c;
            (l = this.currentAnimation) === null || l === void 0 || l.stop(), this.resumingFrom && ((c = this.resumingFrom.currentAnimation) === null || c === void 0 || c.stop()), this.pendingAnimation && (Xn.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = at.update(function () {
                Po.hasAnimatedSinceResize = !0, u.currentAnimation = vw(0, Ly, W(W({}, a), {
                    onUpdate: function (y) {
                        var E;
                        u.mixTargetDelta(y), (E = a.onUpdate) === null || E === void 0 || E.call(a, y)
                    },
                    onComplete: function () {
                        var y;
                        (y = a.onComplete) === null || y === void 0 || y.call(a), u.completeAnimation()
                    }
                })), u.resumingFrom && (u.resumingFrom.currentAnimation = u.currentAnimation), u.pendingAnimation = void 0
            })
        }, i.prototype.completeAnimation = function () {
            var a;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (a = this.getStack()) === null || a === void 0 || a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }, i.prototype.finishAnimation = function () {
            var a;
            this.currentAnimation && ((a = this.mixTargetDelta) === null || a === void 0 || a.call(this, Ly), this.currentAnimation.stop()), this.completeAnimation()
        }, i.prototype.applyTransformsToTarget = function () {
            var a = this.getLead(),
                u = a.targetWithTransforms,
                l = a.target,
                c = a.layout,
                y = a.latestValues;
            !u || !l || !c || (lt(u, l), Jn(u, y), vo(this.projectionDeltaWithTransform, this.layoutCorrected, u, y))
        }, i.prototype.registerSharedNode = function (a, u) {
            var l, c, y;
            this.sharedNodes.has(a) || this.sharedNodes.set(a, new Cw);
            var E = this.sharedNodes.get(a);
            E.add(u), u.promote({
                transition: (l = u.options.initialPromotionConfig) === null || l === void 0 ? void 0 : l.transition,
                preserveFollowOpacity: (y = (c = u.options.initialPromotionConfig) === null || c === void 0 ? void 0 : c.shouldPreserveFollowOpacity) === null || y === void 0 ? void 0 : y.call(c, u)
            })
        }, i.prototype.isLead = function () {
            var a = this.getStack();
            return a ? a.lead === this : !0
        }, i.prototype.getLead = function () {
            var a, u = this.options.layoutId;
            return u ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this
        }, i.prototype.getPrevLead = function () {
            var a, u = this.options.layoutId;
            return u ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0
        }, i.prototype.getStack = function () {
            var a = this.options.layoutId;
            if (a) return this.root.sharedNodes.get(a)
        }, i.prototype.promote = function (a) {
            var u = a === void 0 ? {} : a,
                l = u.needsReset,
                c = u.transition,
                y = u.preserveFollowOpacity,
                E = this.getStack();
            E && E.promote(this, y), l && (this.projectionDelta = void 0, this.needsReset = !0), c && this.setOptions({
                transition: c
            })
        }, i.prototype.relegate = function () {
            var a = this.getStack();
            return a ? a.relegate(this) : !1
        }, i.prototype.resetRotation = function () {
            var a = this.options.visualElement;
            if (!!a) {
                for (var u = !1, l = {}, c = 0; c < as.length; c++) {
                    var y = as[c],
                        E = "rotate" + y;
                    !a.getStaticValue(E) || (u = !0, l[E] = a.getStaticValue(E), a.setStaticValue(E, 0))
                }
                if (!!u) {
                    a == null || a.syncRender();
                    for (var E in l) a.setStaticValue(E, l[E]);
                    a.scheduleRender()
                }
            }
        }, i.prototype.getProjectionStyles = function (a) {
            var u, l, c, y, E, h;
            a === void 0 && (a = {});
            var P = {};
            if (!this.instance || this.isSVG) return P;
            if (this.isVisible) P.visibility = "";
            else return {
                visibility: "hidden"
            };
            var R = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, P.opacity = "", P.pointerEvents = la(a.pointerEvents) || "", P.transform = R ? R(this.latestValues, "") : "none", P;
            var x = this.getLead();
            if (!this.projectionDelta || !this.layout || !x.target) {
                var m = {};
                return this.options.layoutId && (m.opacity = (l = this.latestValues.opacity) !== null && l !== void 0 ? l : 1, m.pointerEvents = la(a.pointerEvents) || ""), this.hasProjected && !Kt(this.latestValues) && (m.transform = R ? R({}, "") : "none", this.hasProjected = !1), m
            }
            var w = x.animationValues || x.latestValues;
            this.applyTransformsToTarget(), P.transform = by(this.projectionDeltaWithTransform, this.treeScale, w), R && (P.transform = R(w, P.transform));
            var _ = this.projectionDelta,
                S = _.x,
                k = _.y;
            P.transformOrigin = "".concat(S.origin * 100, "% ").concat(k.origin * 100, "% 0"), x.animationValues ? P.opacity = x === this ? (y = (c = w.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && y !== void 0 ? y : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : P.opacity = x === this ? (E = w.opacity) !== null && E !== void 0 ? E : "" : (h = w.opacityExit) !== null && h !== void 0 ? h : 0;
            for (var O in aa)
                if (w[O] !== void 0) {
                    var g = aa[O],
                        d = g.correct,
                        s = g.applyTo,
                        f = d(w[O], x);
                    if (s)
                        for (var p = s.length, v = 0; v < p; v++) P[s[v]] = f;
                    else P[O] = f
                } return this.options.layoutId && (P.pointerEvents = x === this ? la(a.pointerEvents) || "" : "none"), P
        }, i.prototype.clearSnapshot = function () {
            this.resumeFrom = this.snapshot = void 0
        }, i.prototype.resetTree = function () {
            this.root.nodes.forEach(function (a) {
                var u;
                return (u = a.currentAnimation) === null || u === void 0 ? void 0 : u.stop()
            }), this.root.nodes.forEach(My), this.root.sharedNodes.clear()
        }, i
    }()
}

function Vw(e) {
    e.updateLayout()
}

function Nw(e) {
    var t, n, r, o, i = (n = (t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) !== null && n !== void 0 ? n : e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
        var a = e.layout,
            u = a.actual,
            l = a.measured;
        e.options.animationType === "size" ? st(function (_) {
            var S = i.isShared ? i.measured[_] : i.layout[_],
                k = wt(S);
            S.min = u[_].min, S.max = S.min + k
        }) : e.options.animationType === "position" && st(function (_) {
            var S = i.isShared ? i.measured[_] : i.layout[_],
                k = wt(u[_]);
            S.max = S.min + k
        });
        var c = mo();
        vo(c, u, i.layout);
        var y = mo();
        i.isShared ? vo(y, e.applyTransform(l, !0), i.measured) : vo(y, u, i.layout);
        var E = !Cy(c),
            h = !1;
        if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
            var P = e.relativeParent,
                R = P.snapshot,
                x = P.layout;
            if (R && x) {
                var m = Oe();
                ho(m, i.layout, R.layout);
                var w = Oe();
                ho(w, u, x.actual), xy(m, w) || (h = !0)
            }
        }
        e.notifyListeners("didUpdate", {
            layout: u,
            snapshot: i,
            delta: y,
            layoutDelta: c,
            hasLayoutChanged: E,
            hasRelativeTargetChanged: h
        })
    } else e.isLead() && ((o = (r = e.options).onExitComplete) === null || o === void 0 || o.call(r));
    e.options.transition = void 0
}

function jw(e) {
    e.clearSnapshot()
}

function My(e) {
    e.clearMeasurements()
}

function Uw(e) {
    e.resetTransform()
}

function Fw(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
}

function Bw(e) {
    e.resolveTargetDelta()
}

function zw(e) {
    e.calcProjection()
}

function Ww(e) {
    e.resetRotation()
}

function Hw(e) {
    e.removeLeadSnapshot()
}

function Ay(e, t, n) {
    e.translate = ue(t.translate, 0, n), e.scale = ue(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Iy(e, t, n, r) {
    e.min = ue(t.min, n.min, r), e.max = ue(t.max, n.max, r)
}

function $w(e, t, n, r) {
    Iy(e.x, t.x, n.x, r), Iy(e.y, t.y, n.y, r)
}

function Kw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
var Yw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
};

function Gw(e, t) {
    for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
        if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break
        } var o = n && n !== e.root ? n.instance : document,
        i = o.querySelector('[data-projection-id="'.concat(t, '"]'));
    i && e.mount(i, !0)
}

function Vy(e) {
    e.min = Math.round(e.min), e.max = Math.round(e.max)
}

function Ny(e) {
    Vy(e.x), Vy(e.y)
}
var qw = 1;

function Xw() {
    return Hi(function () {
        if (Po.hasEverUpdated) return qw++
    })
}
var jy = B.exports.createContext({}),
    Uy = B.exports.createContext({});

function Qw(e, t, n, r) {
    var o, i = t.layoutId,
        a = t.layout,
        u = t.drag,
        l = t.dragConstraints,
        c = t.layoutScroll,
        y = B.exports.useContext(Uy);
    !r || !n || (n == null ? void 0 : n.projection) || (n.projection = new r(e, n.getLatestValues(), (o = n.parent) === null || o === void 0 ? void 0 : o.projection), n.projection.setOptions({
        layoutId: i,
        layout: a,
        alwaysMeasureLayout: Boolean(u) || l && Gn(l),
        visualElement: n,
        scheduleRender: function () {
            return n.scheduleRender()
        },
        animationType: typeof a == "string" ? a : "both",
        initialPromotionConfig: y,
        layoutScroll: c
    }))
}
var Zw = function (e) {
    ud(t, e);

    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return t.prototype.getSnapshotBeforeUpdate = function () {
        return this.updateProps(), null
    }, t.prototype.componentDidUpdate = function () {}, t.prototype.updateProps = function () {
        var n = this.props,
            r = n.visualElement,
            o = n.props;
        r && r.setProps(o)
    }, t.prototype.render = function () {
        return this.props.children
    }, t
}( of .Component);

function Jw(e) {
    var t = e.preloadedFeatures,
        n = e.createVisualElement,
        r = e.projectionNodeConstructor,
        o = e.useRender,
        i = e.useVisualState,
        a = e.Component;
    t && D0(t);

    function u(l, c) {
        var y = e_(l);
        l = W(W({}, l), {
            layoutId: y
        });
        var E = B.exports.useContext(fd),
            h = null,
            P = z0(l),
            R = E.isStatic ? void 0 : Xw(),
            x = i(l, E.isStatic);
        return !E.isStatic && ro && (P.visualElement = N0(a, x, W(W({}, E), l), n), Qw(R, l, P.visualElement, r || no.projectionNodeConstructor), h = I0(l, P.visualElement)), B.exports.createElement(Zw, {
            visualElement: P.visualElement,
            props: W(W({}, E), l)
        }, h, B.exports.createElement(Fi.Provider, {
            value: P
        }, o(a, l, R, j0(x, P.visualElement, c), x, E.isStatic, P.visualElement)))
    }
    return B.exports.forwardRef(u)
}

function e_(e) {
    var t, n = e.layoutId,
        r = (t = B.exports.useContext(jy)) === null || t === void 0 ? void 0 : t.id;
    return r && n !== void 0 ? r + "-" + n : n
}

function t_(e) {
    function t(r, o) {
        return o === void 0 && (o = {}), Jw(e(r, o))
    }
    if (typeof Proxy == "undefined") return t;
    var n = new Map;
    return new Proxy(t, {
        get: function (r, o) {
            return n.has(o) || n.set(o, t(o)), n.get(o)
        }
    })
}
var n_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

function us(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(n_.indexOf(e) > -1 || /[A-Z]/.test(e))
}

function Fy(e, t) {
    var n = t.layout,
        r = t.layoutId;
    return ua(e) || ky(e) || (n || r !== void 0) && (!!aa[e] || e === "opacity")
}
var r_ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};

function o_(e, t, n, r) {
    var o = e.transform,
        i = e.transformKeys,
        a = t.enableHardwareAcceleration,
        u = a === void 0 ? !0 : a,
        l = t.allowTransformNone,
        c = l === void 0 ? !0 : l,
        y = "";
    i.sort(Lw);
    for (var E = !1, h = i.length, P = 0; P < h; P++) {
        var R = i[P];
        y += "".concat(r_[R] || R, "(").concat(o[R], ") "), R === "z" && (E = !0)
    }
    return !E && u ? y += "translateZ(0)" : y = y.trim(), r ? y = r(o, n ? "" : y) : c && n && (y = "none"), y
}

function i_(e) {
    var t = e.originX,
        n = t === void 0 ? "50%" : t,
        r = e.originY,
        o = r === void 0 ? "50%" : r,
        i = e.originZ,
        a = i === void 0 ? 0 : i;
    return "".concat(n, " ").concat(o, " ").concat(a)
}

function By(e) {
    return e.startsWith("--")
}
var a_ = function (e, t) {
    return t && typeof e == "number" ? t.transform(e) : e
};

function ls(e, t, n, r) {
    var o, i = e.style,
        a = e.vars,
        u = e.transform,
        l = e.transformKeys,
        c = e.transformOrigin;
    l.length = 0;
    var y = !1,
        E = !1,
        h = !0;
    for (var P in t) {
        var R = t[P];
        if (By(P)) {
            a[P] = R;
            continue
        }
        var x = ny[P],
            m = a_(R, x);
        if (ua(P)) {
            if (y = !0, u[P] = m, l.push(P), !h) continue;
            R !== ((o = x.default) !== null && o !== void 0 ? o : 0) && (h = !1)
        } else ky(P) ? (c[P] = m, E = !0) : i[P] = m
    }
    y ? i.transform = o_(e, n, h, r) : r ? i.transform = r({}, "") : !t.transform && i.transform && (i.transform = "none"), E && (i.transformOrigin = i_(c))
}
var ss = function () {
    return {
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
    }
};

function zy(e, t, n) {
    for (var r in t) !Pt(t[r]) && !Fy(r, n) && (e[r] = t[r])
}

function u_(e, t, n) {
    var r = e.transformTemplate;
    return B.exports.useMemo(function () {
        var o = ss();
        ls(o, t, {
            enableHardwareAcceleration: !n
        }, r);
        var i = o.vars,
            a = o.style;
        return W(W({}, i), a)
    }, [t])
}

function l_(e, t, n) {
    var r = e.style || {},
        o = {};
    return zy(o, r, e), Object.assign(o, u_(e, t, n)), e.transformValues && (o = e.transformValues(o)), o
}

function s_(e, t, n) {
    var r = {},
        o = l_(e, t, n);
    return Boolean(e.drag) && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : "pan-".concat(e.drag === "x" ? "y" : "x")), r.style = o, r
}
var f_ = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

function sa(e) {
    return f_.has(e)
}
var Wy = function (e) {
    return !sa(e)
};

function c_(e) {
    !e || (Wy = function (t) {
        return t.startsWith("on") ? !sa(t) : e(t)
    })
}
try {
    c_(require("@emotion/is-prop-valid").default)
} catch {}

function p_(e, t, n) {
    var r = {};
    for (var o in e)(Wy(o) || n === !0 && sa(o) || !t && !sa(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}

function Hy(e, t, n) {
    return typeof e == "string" ? e : Y.transform(t + n * e)
}

function d_(e, t, n) {
    var r = Hy(t, e.x, e.width),
        o = Hy(n, e.y, e.height);
    return "".concat(r, " ").concat(o)
}
var y_ = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    v_ = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function h_(e, t, n, r, o) {
    n === void 0 && (n = 1), r === void 0 && (r = 0), o === void 0 && (o = !0), e.pathLength = 1;
    var i = o ? y_ : v_;
    e[i.offset] = Y.transform(-r);
    var a = Y.transform(t),
        u = Y.transform(n);
    e[i.array] = "".concat(a, " ").concat(u)
}

function fs(e, t, n, r) {
    var o = t.attrX,
        i = t.attrY,
        a = t.originX,
        u = t.originY,
        l = t.pathLength,
        c = t.pathSpacing,
        y = c === void 0 ? 1 : c,
        E = t.pathOffset,
        h = E === void 0 ? 0 : E,
        P = He(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    ls(e, P, n, r), e.attrs = e.style, e.style = {};
    var R = e.attrs,
        x = e.style,
        m = e.dimensions;
    R.transform && (m && (x.transform = R.transform), delete R.transform), m && (a !== void 0 || u !== void 0 || x.transform) && (x.transformOrigin = d_(m, a !== void 0 ? a : .5, u !== void 0 ? u : .5)), o !== void 0 && (R.x = o), i !== void 0 && (R.y = i), l !== void 0 && h_(R, l, y, h, !1)
}
var $y = function () {
    return W(W({}, ss()), {
        attrs: {}
    })
};

function m_(e, t) {
    var n = B.exports.useMemo(function () {
        var o = $y();
        return fs(o, t, {
            enableHardwareAcceleration: !1
        }, e.transformTemplate), W(W({}, o.attrs), {
            style: W({}, o.style)
        })
    }, [t]);
    if (e.style) {
        var r = {};
        zy(r, e.style, e), n.style = W(W({}, r), n.style)
    }
    return n
}

function g_(e) {
    e === void 0 && (e = !1);
    var t = function (n, r, o, i, a, u) {
        var l = a.latestValues,
            c = us(n) ? m_ : s_,
            y = c(r, l, u),
            E = p_(r, typeof n == "string", e),
            h = W(W(W({}, E), y), {
                ref: i
            });
        return o && (h["data-projection-id"] = o), B.exports.createElement(n, h)
    };
    return t
}
var P_ = /([a-z])([A-Z])/g,
    w_ = "$1-$2",
    Ky = function (e) {
        return e.replace(P_, w_).toLowerCase()
    };

function Yy(e, t, n, r) {
    var o = t.style,
        i = t.vars;
    Object.assign(e.style, o, r && r.getProjectionStyles(n));
    for (var a in i) e.style.setProperty(a, i[a])
}
var Gy = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

function qy(e, t) {
    Yy(e, t);
    for (var n in t.attrs) e.setAttribute(Gy.has(n) ? n : Ky(n), t.attrs[n])
}

function cs(e) {
    var t = e.style,
        n = {};
    for (var r in t)(Pt(t[r]) || Fy(r, e)) && (n[r] = t[r]);
    return n
}

function Xy(e) {
    var t = cs(e);
    for (var n in e)
        if (Pt(e[n])) {
            var r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
            t[r] = e[n]
        } return t
}

function ps(e) {
    return typeof e == "object" && typeof e.start == "function"
}

function Qy(e, t, n, r) {
    var o = e.scrapeMotionValuesFromProps,
        i = e.createRenderState,
        a = e.onMount,
        u = {
            latestValues: __(t, n, r, o),
            renderState: i()
        };
    return a && (u.mount = function (l) {
        return a(t, l, u)
    }), u
}
var Zy = function (e) {
    return function (t, n) {
        var r = B.exports.useContext(Fi),
            o = B.exports.useContext(Bi);
        return n ? Qy(e, t, r, o) : Hi(function () {
            return Qy(e, t, r, o)
        })
    }
};

function __(e, t, n, r) {
    var o = {},
        i = (n == null ? void 0 : n.initial) === !1,
        a = r(e);
    for (var u in a) o[u] = la(a[u]);
    var l = e.initial,
        c = e.animate,
        y = Wi(e),
        E = yd(e);
    t && E && !y && e.inherit !== !1 && (l != null || (l = t.initial), c != null || (c = t.animate));
    var h = i || l === !1,
        P = h ? c : l;
    if (P && typeof P != "boolean" && !ps(P)) {
        var R = Array.isArray(P) ? P : [P];
        R.forEach(function (x) {
            var m = dd(e, x);
            if (!!m) {
                var w = m.transitionEnd;
                m.transition;
                var _ = He(m, ["transitionEnd", "transition"]);
                for (var S in _) {
                    var k = _[S];
                    if (Array.isArray(k)) {
                        var O = h ? k.length - 1 : 0;
                        k = k[O]
                    }
                    k !== null && (o[S] = k)
                }
                for (var S in w) o[S] = w[S]
            }
        })
    }
    return o
}
var S_ = {
        useVisualState: Zy({
            scrapeMotionValuesFromProps: Xy,
            createRenderState: $y,
            onMount: function (e, t, n) {
                var r = n.renderState,
                    o = n.latestValues;
                try {
                    r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    r.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
                fs(r, o, {
                    enableHardwareAcceleration: !1
                }, e.transformTemplate), qy(t, r)
            }
        })
    },
    O_ = {
        useVisualState: Zy({
            scrapeMotionValuesFromProps: cs,
            createRenderState: ss
        })
    };

function E_(e, t, n, r, o) {
    var i = t.forwardMotionProps,
        a = i === void 0 ? !1 : i,
        u = us(e) ? S_ : O_;
    return W(W({}, u), {
        preloadedFeatures: n,
        useRender: g_(a),
        createVisualElement: r,
        projectionNodeConstructor: o,
        Component: e
    })
}
var te;
(function (e) {
    e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit"
})(te || (te = {}));

function ds(e, t, n, r) {
    return e.addEventListener(t, n, r),
        function () {
            return e.removeEventListener(t, n, r)
        }
}

function ys(e, t, n, r) {
    B.exports.useEffect(function () {
        var o = e.current;
        if (n && o) return ds(o, t, n, r)
    }, [e, t, n, r])
}

function T_(e) {
    var t = e.whileFocus,
        n = e.visualElement,
        r = function () {
            var i;
            (i = n.animationState) === null || i === void 0 || i.setActive(te.Focus, !0)
        },
        o = function () {
            var i;
            (i = n.animationState) === null || i === void 0 || i.setActive(te.Focus, !1)
        };
    ys(n, "focus", t ? r : void 0), ys(n, "blur", t ? o : void 0)
}

function Jy(e) {
    return typeof PointerEvent != "undefined" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent
}

function ev(e) {
    var t = !!e.touches;
    return t
}

function R_(e) {
    return function (t) {
        var n = t instanceof MouseEvent,
            r = !n || n && t.button === 0;
        r && e(t)
    }
}
var C_ = {
    pageX: 0,
    pageY: 0
};

function x_(e, t) {
    t === void 0 && (t = "page");
    var n = e.touches[0] || e.changedTouches[0],
        r = n || C_;
    return {
        x: r[t + "X"],
        y: r[t + "Y"]
    }
}

function b_(e, t) {
    return t === void 0 && (t = "page"), {
        x: e[t + "X"],
        y: e[t + "Y"]
    }
}

function vs(e, t) {
    return t === void 0 && (t = "page"), {
        point: ev(e) ? x_(e, t) : b_(e, t)
    }
}
var tv = function (e, t) {
        t === void 0 && (t = !1);
        var n = function (r) {
            return e(r, vs(r))
        };
        return t ? R_(n) : n
    },
    k_ = function () {
        return ro && window.onpointerdown === null
    },
    L_ = function () {
        return ro && window.ontouchstart === null
    },
    D_ = function () {
        return ro && window.onmousedown === null
    },
    M_ = {
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointercancel: "mousecancel",
        pointerover: "mouseover",
        pointerout: "mouseout",
        pointerenter: "mouseenter",
        pointerleave: "mouseleave"
    },
    A_ = {
        pointerdown: "touchstart",
        pointermove: "touchmove",
        pointerup: "touchend",
        pointercancel: "touchcancel"
    };

function nv(e) {
    return k_() ? e : L_() ? A_[e] : D_() ? M_[e] : e
}

function er(e, t, n, r) {
    return ds(e, nv(t), tv(n, t === "pointerdown"), r)
}

function fa(e, t, n, r) {
    return ys(e, nv(t), n && tv(n, t === "pointerdown"), r)
}

function rv(e) {
    var t = null;
    return function () {
        var n = function () {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
var ov = rv("dragHorizontal"),
    iv = rv("dragVertical");

function av(e) {
    var t = !1;
    if (e === "y") t = iv();
    else if (e === "x") t = ov();
    else {
        var n = ov(),
            r = iv();
        n && r ? t = function () {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function uv() {
    var e = av(!0);
    return e ? (e(), !1) : !0
}

function lv(e, t, n) {
    return function (r, o) {
        var i;
        !Jy(r) || uv() || ((i = e.animationState) === null || i === void 0 || i.setActive(te.Hover, t), n == null || n(r, o))
    }
}

function I_(e) {
    var t = e.onHoverStart,
        n = e.onHoverEnd,
        r = e.whileHover,
        o = e.visualElement;
    fa(o, "pointerenter", t || r ? lv(o, !0, t) : void 0), fa(o, "pointerleave", n || r ? lv(o, !1, n) : void 0)
}
var sv = function (e, t) {
    return t ? e === t ? !0 : sv(e, t.parentElement) : !1
};

function fv(e) {
    return B.exports.useEffect(function () {
        return function () {
            return e()
        }
    }, [])
}

function V_(e) {
    var t = e.onTap,
        n = e.onTapStart,
        r = e.onTapCancel,
        o = e.whileTap,
        i = e.visualElement,
        a = t || n || r || o,
        u = B.exports.useRef(!1),
        l = B.exports.useRef(null);

    function c() {
        var R;
        (R = l.current) === null || R === void 0 || R.call(l), l.current = null
    }

    function y() {
        var R;
        return c(), u.current = !1, (R = i.animationState) === null || R === void 0 || R.setActive(te.Tap, !1), !uv()
    }

    function E(R, x) {
        !y() || (sv(i.getInstance(), R.target) ? t == null || t(R, x) : r == null || r(R, x))
    }

    function h(R, x) {
        !y() || r == null || r(R, x)
    }

    function P(R, x) {
        var m;
        c(), !u.current && (u.current = !0, l.current = qi(er(window, "pointerup", E), er(window, "pointercancel", h)), (m = i.animationState) === null || m === void 0 || m.setActive(te.Tap, !0), n == null || n(R, x))
    }
    fa(i, "pointerdown", a ? P : void 0), fv(c)
}
var hs = new WeakMap,
    ms = new WeakMap,
    N_ = function (e) {
        var t;
        (t = hs.get(e.target)) === null || t === void 0 || t(e)
    },
    j_ = function (e) {
        e.forEach(N_)
    };

function U_(e) {
    var t = e.root,
        n = He(e, ["root"]),
        r = t || document;
    ms.has(r) || ms.set(r, {});
    var o = ms.get(r),
        i = JSON.stringify(n);
    return o[i] || (o[i] = new IntersectionObserver(j_, W({
        root: t
    }, n))), o[i]
}

function F_(e, t, n) {
    var r = U_(t);
    return hs.set(e, n), r.observe(e),
        function () {
            hs.delete(e), r.unobserve(e)
        }
}

function B_(e) {
    var t = e.visualElement,
        n = e.whileInView,
        r = e.onViewportEnter,
        o = e.onViewportLeave,
        i = e.viewport,
        a = i === void 0 ? {} : i,
        u = B.exports.useRef({
            hasEnteredView: !1,
            isInView: !1
        }),
        l = Boolean(n || r || o);
    a.once && u.current.hasEnteredView && (l = !1);
    var c = typeof IntersectionObserver == "undefined" ? H_ : W_;
    c(l, u.current, t, a)
}
var z_ = {
    some: 0,
    all: 1
};

function W_(e, t, n, r) {
    var o = r.root,
        i = r.margin,
        a = r.amount,
        u = a === void 0 ? "some" : a,
        l = r.once;
    B.exports.useEffect(function () {
        if (!!e) {
            var c = {
                    root: o == null ? void 0 : o.current,
                    rootMargin: i,
                    threshold: typeof u == "number" ? u : z_[u]
                },
                y = function (E) {
                    var h, P = E.isIntersecting;
                    if (t.isInView !== P && (t.isInView = P, !(l && !P && t.hasEnteredView))) {
                        P && (t.hasEnteredView = !0), (h = n.animationState) === null || h === void 0 || h.setActive(te.InView, P);
                        var R = n.getProps(),
                            x = P ? R.onViewportEnter : R.onViewportLeave;
                        x == null || x(E)
                    }
                };
            return F_(n.getInstance(), c, y)
        }
    }, [e, o, i, u])
}

function H_(e, t, n) {
    B.exports.useEffect(function () {
        !e || requestAnimationFrame(function () {
            var r;
            t.hasEnteredView = !0;
            var o = n.getProps().onViewportEnter;
            o == null || o(null), (r = n.animationState) === null || r === void 0 || r.setActive(te.InView, !0)
        })
    }, [e])
}
var Yt = function (e) {
        return function (t) {
            return e(t), null
        }
    },
    $_ = {
        inView: Yt(B_),
        tap: Yt(V_),
        focus: Yt(T_),
        hover: Yt(I_)
    };

function cv() {
    var e = B.exports.useContext(Bi);
    if (e === null) return [!0, null];
    var t = e.isPresent,
        n = e.onExitComplete,
        r = e.register,
        o = G_();
    B.exports.useEffect(function () {
        return r(o)
    }, []);
    var i = function () {
        return n == null ? void 0 : n(o)
    };
    return !t && n ? [!1, i] : [!0]
}
var K_ = 0,
    Y_ = function () {
        return K_++
    },
    G_ = function () {
        return Hi(Y_)
    };

function pv(e, t) {
    if (!Array.isArray(t)) return !1;
    var n = t.length;
    if (n !== e.length) return !1;
    for (var r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
var q_ = function (e) {
        return /^\-?\d*\.?\d+$/.test(e)
    },
    X_ = function (e) {
        return /^0[^.\s]+$/.test(e)
    },
    dv = function (e) {
        return function (t) {
            return t.test(e)
        }
    },
    Q_ = {
        test: function (e) {
            return e === "auto"
        },
        parse: function (e) {
            return e
        }
    },
    yv = [cn, Y, ut, Ht, iP, oP, Q_],
    wo = function (e) {
        return yv.find(dv(e))
    },
    Z_ = it(it([], ye(yv), !1), [Ce, gt], !1),
    J_ = function (e) {
        return Z_.find(dv(e))
    };

function eS(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Qn(n))
}

function tS(e, t) {
    var n = zi(e, t),
        r = n ? e.makeTargetAnimatable(n, !1) : {},
        o = r.transitionEnd,
        i = o === void 0 ? {} : o;
    r.transition;
    var a = He(r, ["transitionEnd", "transition"]);
    a = W(W({}, a), i);
    for (var u in a) {
        var l = ry(a[u]);
        eS(e, u, l)
    }
}

function nS(e, t, n) {
    var r, o, i, a, u = Object.keys(t).filter(function (P) {
            return !e.hasValue(P)
        }),
        l = u.length;
    if (!!l)
        for (var c = 0; c < l; c++) {
            var y = u[c],
                E = t[y],
                h = null;
            Array.isArray(E) && (h = E[0]), h === null && (h = (o = (r = n[y]) !== null && r !== void 0 ? r : e.readValue(y)) !== null && o !== void 0 ? o : t[y]), h != null && (typeof h == "string" && (q_(h) || X_(h)) ? h = parseFloat(h) : !J_(h) && gt.test(E) && (h = ts(y, E)), e.addValue(y, Qn(h)), (i = (a = n)[y]) !== null && i !== void 0 || (a[y] = h), e.setBaseTarget(y, h))
        }
}

function rS(e, t) {
    if (!!t) {
        var n = t[e] || t.default || t;
        return n.from
    }
}

function oS(e, t, n) {
    var r, o, i = {};
    for (var a in e) i[a] = (r = rS(a, t)) !== null && r !== void 0 ? r : (o = n.getValue(a)) === null || o === void 0 ? void 0 : o.get();
    return i
}

function iS(e, t, n) {
    n === void 0 && (n = {}), e.notifyAnimationStart(t);
    var r;
    if (Array.isArray(t)) {
        var o = t.map(function (a) {
            return gs(e, a, n)
        });
        r = Promise.all(o)
    } else if (typeof t == "string") r = gs(e, t, n);
    else {
        var i = typeof t == "function" ? zi(e, t, n.custom) : t;
        r = vv(e, i, n)
    }
    return r.then(function () {
        return e.notifyAnimationComplete(t)
    })
}

function gs(e, t, n) {
    var r;
    n === void 0 && (n = {});
    var o = zi(e, t, n.custom),
        i = (o || {}).transition,
        a = i === void 0 ? e.getDefaultTransition() || {} : i;
    n.transitionOverride && (a = n.transitionOverride);
    var u = o ? function () {
            return vv(e, o, n)
        } : function () {
            return Promise.resolve()
        },
        l = ((r = e.variantChildren) === null || r === void 0 ? void 0 : r.size) ? function (P) {
            P === void 0 && (P = 0);
            var R = a.delayChildren,
                x = R === void 0 ? 0 : R,
                m = a.staggerChildren,
                w = a.staggerDirection;
            return aS(e, t, x + P, m, w, n)
        } : function () {
            return Promise.resolve()
        },
        c = a.when;
    if (c) {
        var y = ye(c === "beforeChildren" ? [u, l] : [l, u], 2),
            E = y[0],
            h = y[1];
        return E().then(h)
    } else return Promise.all([u(), l(n.delay)])
}

function vv(e, t, n) {
    var r, o = n === void 0 ? {} : n,
        i = o.delay,
        a = i === void 0 ? 0 : i,
        u = o.transitionOverride,
        l = o.type,
        c = e.makeTargetAnimatable(t),
        y = c.transition,
        E = y === void 0 ? e.getDefaultTransition() : y,
        h = c.transitionEnd,
        P = He(c, ["transition", "transitionEnd"]);
    u && (E = u);
    var R = [],
        x = l && ((r = e.animationState) === null || r === void 0 ? void 0 : r.getState()[l]);
    for (var m in P) {
        var w = e.getValue(m),
            _ = P[m];
        if (!(!w || _ === void 0 || x && lS(x, m))) {
            var S = rs(m, w, _, W({
                delay: a
            }, E));
            R.push(S)
        }
    }
    return Promise.all(R).then(function () {
        h && tS(e, h)
    })
}

function aS(e, t, n, r, o, i) {
    n === void 0 && (n = 0), r === void 0 && (r = 0), o === void 0 && (o = 1);
    var a = [],
        u = (e.variantChildren.size - 1) * r,
        l = o === 1 ? function (c) {
            return c === void 0 && (c = 0), c * r
        } : function (c) {
            return c === void 0 && (c = 0), u - c * r
        };
    return Array.from(e.variantChildren).sort(uS).forEach(function (c, y) {
        a.push(gs(c, t, W(W({}, i), {
            delay: n + l(y)
        })).then(function () {
            return c.notifyAnimationComplete(t)
        }))
    }), Promise.all(a)
}

function uS(e, t) {
    return e.sortNodePosition(t)
}

function lS(e, t) {
    var n = e.protectedKeys,
        r = e.needsAnimating,
        o = n.hasOwnProperty(t) && r[t] !== !0;
    return r[t] = !1, o
}
var Ps = [te.Animate, te.InView, te.Focus, te.Hover, te.Tap, te.Drag, te.Exit],
    sS = it([], ye(Ps), !1).reverse(),
    fS = Ps.length;

function cS(e) {
    return function (t) {
        return Promise.all(t.map(function (n) {
            var r = n.animation,
                o = n.options;
            return iS(e, r, o)
        }))
    }
}

function pS(e) {
    var t = cS(e),
        n = yS(),
        r = {},
        o = !0,
        i = function (y, E) {
            var h = zi(e, E);
            if (h) {
                h.transition;
                var P = h.transitionEnd,
                    R = He(h, ["transition", "transitionEnd"]);
                y = W(W(W({}, y), R), P)
            }
            return y
        };

    function a(y) {
        return r[y] !== void 0
    }

    function u(y) {
        t = y(e)
    }

    function l(y, E) {
        for (var h, P = e.getProps(), R = e.getVariantContext(!0) || {}, x = [], m = new Set, w = {}, _ = 1 / 0, S = function (d) {
                var s = sS[d],
                    f = n[s],
                    p = (h = P[s]) !== null && h !== void 0 ? h : R[s],
                    v = Xe(p),
                    T = s === E ? f.isActive : null;
                T === !1 && (_ = d);
                var L = p === R[s] && p !== P[s] && v;
                if (L && o && e.manuallyAnimateOnMount && (L = !1), f.protectedKeys = W({}, w), !f.isActive && T === null || !p && !f.prevProp || ps(p) || typeof p == "boolean") return "continue";
                var C = dS(f.prevProp, p),
                    j = C || s === E && f.isActive && !L && v || d > _ && v,
                    N = Array.isArray(p) ? p : [p],
                    U = N.reduce(i, {});
                T === !1 && (U = {});
                var I = f.prevResolvedValues,
                    M = I === void 0 ? {} : I,
                    D = W(W({}, M), U),
                    b = function (H) {
                        j = !0, m.delete(H), f.needsAnimating[H] = !0
                    };
                for (var V in D) {
                    var A = U[V],
                        F = M[V];
                    w.hasOwnProperty(V) || (A !== F ? yo(A) && yo(F) ? !pv(A, F) || C ? b(V) : f.protectedKeys[V] = !0 : A !== void 0 ? b(V) : m.add(V) : A !== void 0 && m.has(V) ? b(V) : f.protectedKeys[V] = !0)
                }
                f.prevProp = p, f.prevResolvedValues = U, f.isActive && (w = W(W({}, w), U)), o && e.blockInitialAnimation && (j = !1), j && !L && x.push.apply(x, it([], ye(N.map(function (H) {
                    return {
                        animation: H,
                        options: W({
                            type: s
                        }, y)
                    }
                })), !1))
            }, k = 0; k < fS; k++) S(k);
        if (r = W({}, w), m.size) {
            var O = {};
            m.forEach(function (d) {
                var s = e.getBaseTarget(d);
                s !== void 0 && (O[d] = s)
            }), x.push({
                animation: O
            })
        }
        var g = Boolean(x.length);
        return o && P.initial === !1 && !e.manuallyAnimateOnMount && (g = !1), o = !1, g ? t(x) : Promise.resolve()
    }

    function c(y, E, h) {
        var P;
        return n[y].isActive === E ? Promise.resolve() : ((P = e.variantChildren) === null || P === void 0 || P.forEach(function (R) {
            var x;
            return (x = R.animationState) === null || x === void 0 ? void 0 : x.setActive(y, E)
        }), n[y].isActive = E, l(h, y))
    }
    return {
        isAnimated: a,
        animateChanges: l,
        setActive: c,
        setAnimateFunction: u,
        getState: function () {
            return n
        }
    }
}

function dS(e, t) {
    return typeof t == "string" ? t !== e : pd(t) ? !pv(t, e) : !1
}

function yn(e) {
    return e === void 0 && (e = !1), {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function yS() {
    var e;
    return e = {}, e[te.Animate] = yn(!0), e[te.InView] = yn(), e[te.Hover] = yn(), e[te.Tap] = yn(), e[te.Drag] = yn(), e[te.Focus] = yn(), e[te.Exit] = yn(), e
}
var vS = {
        animation: Yt(function (e) {
            var t = e.visualElement,
                n = e.animate;
            t.animationState || (t.animationState = pS(t)), ps(n) && B.exports.useEffect(function () {
                return n.subscribe(t)
            }, [n])
        }),
        exit: Yt(function (e) {
            var t = e.custom,
                n = e.visualElement,
                r = ye(cv(), 2),
                o = r[0],
                i = r[1],
                a = B.exports.useContext(Bi);
            B.exports.useEffect(function () {
                var u, l;
                n.isPresent = o;
                var c = (u = n.animationState) === null || u === void 0 ? void 0 : u.setActive(te.Exit, !o, {
                    custom: (l = a == null ? void 0 : a.custom) !== null && l !== void 0 ? l : t
                });
                !o && (c == null || c.then(i))
            }, [o])
        })
    },
    hv = function () {
        function e(t, n, r) {
            var o = this,
                i = r === void 0 ? {} : r,
                a = i.transformPagePoint;
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function () {
                    if (!!(o.lastMoveEvent && o.lastMoveEventInfo)) {
                        var h = _s(o.lastMoveEventInfo, o.history),
                            P = o.startEvent !== null,
                            R = Yd(h.offset, {
                                x: 0,
                                y: 0
                            }) >= 3;
                        if (!(!P && !R)) {
                            var x = h.point,
                                m = Ki().timestamp;
                            o.history.push(W(W({}, x), {
                                timestamp: m
                            }));
                            var w = o.handlers,
                                _ = w.onStart,
                                S = w.onMove;
                            P || (_ && _(o.lastMoveEvent, h), o.startEvent = o.lastMoveEvent), S && S(o.lastMoveEvent, h)
                        }
                    }
                }, this.handlePointerMove = function (h, P) {
                    if (o.lastMoveEvent = h, o.lastMoveEventInfo = ws(P, o.transformPagePoint), Jy(h) && h.buttons === 0) {
                        o.handlePointerUp(h, P);
                        return
                    }
                    at.update(o.updatePoint, !0)
                }, this.handlePointerUp = function (h, P) {
                    o.end();
                    var R = o.handlers,
                        x = R.onEnd,
                        m = R.onSessionEnd,
                        w = _s(ws(P, o.transformPagePoint), o.history);
                    o.startEvent && x && x(h, w), m && m(h, w)
                }, !(ev(t) && t.touches.length > 1)) {
                this.handlers = n, this.transformPagePoint = a;
                var u = vs(t),
                    l = ws(u, this.transformPagePoint),
                    c = l.point,
                    y = Ki().timestamp;
                this.history = [W(W({}, c), {
                    timestamp: y
                })];
                var E = n.onSessionStart;
                E && E(t, _s(l, this.history)), this.removeListeners = qi(er(window, "pointermove", this.handlePointerMove), er(window, "pointerup", this.handlePointerUp), er(window, "pointercancel", this.handlePointerUp))
            }
        }
        return e.prototype.updateHandlers = function (t) {
            this.handlers = t
        }, e.prototype.end = function () {
            this.removeListeners && this.removeListeners(), Xn.update(this.updatePoint)
        }, e
    }();

function ws(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function mv(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function _s(e, t) {
    var n = e.point;
    return {
        point: n,
        delta: mv(n, gv(t)),
        offset: mv(n, hS(t)),
        velocity: mS(t, .1)
    }
}

function hS(e) {
    return e[0]
}

function gv(e) {
    return e[e.length - 1]
}

function mS(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    for (var n = e.length - 1, r = null, o = gv(e); n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > ra(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    var i = (o.timestamp - r.timestamp) / 1e3;
    if (i === 0) return {
        x: 0,
        y: 0
    };
    var a = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}

function gS(e, t, n) {
    var r = t.min,
        o = t.max;
    return r !== void 0 && e < r ? e = n ? ue(r, e, n.min) : Math.max(e, r) : o !== void 0 && e > o && (e = n ? ue(o, e, n.max) : Math.min(e, o)), e
}

function Pv(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function PS(e, t) {
    var n = t.top,
        r = t.left,
        o = t.bottom,
        i = t.right;
    return {
        x: Pv(e.x, r, i),
        y: Pv(e.y, n, o)
    }
}

function wv(e, t) {
    var n, r = t.min - e.min,
        o = t.max - e.max;
    return t.max - t.min < e.max - e.min && (n = ye([o, r], 2), r = n[0], o = n[1]), {
        min: r,
        max: o
    }
}

function wS(e, t) {
    return {
        x: wv(e.x, t.x),
        y: wv(e.y, t.y)
    }
}

function _S(e, t) {
    var n = .5,
        r = wt(e),
        o = wt(t);
    return o > r ? n = ao(t.min, t.max - r, e.min) : r > o && (n = ao(e.min, e.max - o, t.min)), Yi(0, 1, n)
}

function SS(e, t) {
    var n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
var Ss = .35;

function OS(e) {
    return e === void 0 && (e = Ss), e === !1 ? e = 0 : e === !0 && (e = Ss), {
        x: _v(e, "left", "right"),
        y: _v(e, "top", "bottom")
    }
}

function _v(e, t, n) {
    return {
        min: Sv(e, t),
        max: Sv(e, n)
    }
}

function Sv(e, t) {
    var n;
    return typeof e == "number" ? e : (n = e[t]) !== null && n !== void 0 ? n : 0
}

function Ov(e) {
    var t = e.top,
        n = e.left,
        r = e.right,
        o = e.bottom;
    return {
        x: {
            min: n,
            max: r
        },
        y: {
            min: t,
            max: o
        }
    }
}

function ES(e) {
    var t = e.x,
        n = e.y;
    return {
        top: n.min,
        right: t.max,
        bottom: n.max,
        left: t.min
    }
}

function TS(e, t) {
    if (!t) return e;
    var n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Ev(e, t) {
    return Ov(TS(e.getBoundingClientRect(), t))
}

function RS(e, t, n) {
    var r = Ev(e, n),
        o = t.scroll;
    return o && (Zn(r.x, o.x), Zn(r.y, o.y)), r
}
var CS = new WeakMap,
    xS = function () {
        function e(t) {
            this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Oe(), this.visualElement = t
        }
        return e.prototype.start = function (t, n) {
            var r = this,
                o = n === void 0 ? {} : n,
                i = o.snapToCursor,
                a = i === void 0 ? !1 : i;
            if (this.visualElement.isPresent !== !1) {
                var u = function (E) {
                        r.stopAnimation(), a && r.snapToCursor(vs(E, "page").point)
                    },
                    l = function (E, h) {
                        var P, R = r.getProps(),
                            x = R.drag,
                            m = R.dragPropagation,
                            w = R.onDragStart;
                        x && !m && (r.openGlobalLock && r.openGlobalLock(), r.openGlobalLock = av(x), !r.openGlobalLock) || (r.isDragging = !0, r.currentDirection = null, r.resolveConstraints(), r.visualElement.projection && (r.visualElement.projection.isAnimationBlocked = !0, r.visualElement.projection.target = void 0), st(function (_) {
                            var S, k, O = r.getAxisMotionValue(_).get() || 0;
                            if (ut.test(O)) {
                                var g = (k = (S = r.visualElement.projection) === null || S === void 0 ? void 0 : S.layout) === null || k === void 0 ? void 0 : k.actual[_];
                                if (g) {
                                    var d = wt(g);
                                    O = d * (parseFloat(O) / 100)
                                }
                            }
                            r.originPoint[_] = O
                        }), w == null || w(E, h), (P = r.visualElement.animationState) === null || P === void 0 || P.setActive(te.Drag, !0))
                    },
                    c = function (E, h) {
                        var P = r.getProps(),
                            R = P.dragPropagation,
                            x = P.dragDirectionLock,
                            m = P.onDirectionLock,
                            w = P.onDrag;
                        if (!(!R && !r.openGlobalLock)) {
                            var _ = h.offset;
                            if (x && r.currentDirection === null) {
                                r.currentDirection = bS(_), r.currentDirection !== null && (m == null || m(r.currentDirection));
                                return
                            }
                            r.updateAxis("x", h.point, _), r.updateAxis("y", h.point, _), r.visualElement.syncRender(), w == null || w(E, h)
                        }
                    },
                    y = function (E, h) {
                        return r.stop(E, h)
                    };
                this.panSession = new hv(t, {
                    onSessionStart: u,
                    onStart: l,
                    onMove: c,
                    onSessionEnd: y
                }, {
                    transformPagePoint: this.visualElement.getTransformPagePoint()
                })
            }
        }, e.prototype.stop = function (t, n) {
            var r = this.isDragging;
            if (this.cancel(), !!r) {
                var o = n.velocity;
                this.startAnimation(o);
                var i = this.getProps().onDragEnd;
                i == null || i(t, n)
            }
        }, e.prototype.cancel = function () {
            var t, n;
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (t = this.panSession) === null || t === void 0 || t.end(), this.panSession = void 0;
            var r = this.getProps().dragPropagation;
            !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(te.Drag, !1)
        }, e.prototype.updateAxis = function (t, n, r) {
            var o = this.getProps().drag;
            if (!(!r || !ca(t, o, this.currentDirection))) {
                var i = this.getAxisMotionValue(t),
                    a = this.originPoint[t] + r[t];
                this.constraints && this.constraints[t] && (a = gS(a, this.constraints[t], this.elastic[t])), i.set(a)
            }
        }, e.prototype.resolveConstraints = function () {
            var t = this,
                n = this.getProps(),
                r = n.dragConstraints,
                o = n.dragElastic,
                i = (this.visualElement.projection || {}).layout,
                a = this.constraints;
            r && Gn(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && i ? this.constraints = PS(i.actual, r) : this.constraints = !1, this.elastic = OS(o), a !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && st(function (u) {
                t.getAxisMotionValue(u) && (t.constraints[u] = SS(i.actual[u], t.constraints[u]))
            })
        }, e.prototype.resolveRefConstraints = function () {
            var t = this.getProps(),
                n = t.dragConstraints,
                r = t.onMeasureDragConstraints;
            if (!n || !Gn(n)) return !1;
            var o = n.current,
                i = this.visualElement.projection;
            if (!i || !i.layout) return !1;
            var a = RS(o, i.root, this.visualElement.getTransformPagePoint()),
                u = wS(i.layout.actual, a);
            if (r) {
                var l = r(ES(u));
                this.hasMutatedConstraints = !!l, l && (u = Ov(l))
            }
            return u
        }, e.prototype.startAnimation = function (t) {
            var n = this,
                r = this.getProps(),
                o = r.drag,
                i = r.dragMomentum,
                a = r.dragElastic,
                u = r.dragTransition,
                l = r.dragSnapToOrigin,
                c = r.onDragTransitionEnd,
                y = this.constraints || {},
                E = st(function (h) {
                    var P;
                    if (!!ca(h, o, n.currentDirection)) {
                        var R = (P = y == null ? void 0 : y[h]) !== null && P !== void 0 ? P : {};
                        l && (R = {
                            min: 0,
                            max: 0
                        });
                        var x = a ? 200 : 1e6,
                            m = a ? 40 : 1e7,
                            w = W(W({
                                type: "inertia",
                                velocity: i ? t[h] : 0,
                                bounceStiffness: x,
                                bounceDamping: m,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10
                            }, u), R);
                        return n.startAxisValueAnimation(h, w)
                    }
                });
            return Promise.all(E).then(c)
        }, e.prototype.startAxisValueAnimation = function (t, n) {
            var r = this.getAxisMotionValue(t);
            return rs(t, r, 0, n)
        }, e.prototype.stopAnimation = function () {
            var t = this;
            st(function (n) {
                return t.getAxisMotionValue(n).stop()
            })
        }, e.prototype.getAxisMotionValue = function (t) {
            var n, r, o = "_drag" + t.toUpperCase(),
                i = this.visualElement.getProps()[o];
            return i || this.visualElement.getValue(t, (r = (n = this.visualElement.getProps().initial) === null || n === void 0 ? void 0 : n[t]) !== null && r !== void 0 ? r : 0)
        }, e.prototype.snapToCursor = function (t) {
            var n = this;
            st(function (r) {
                var o = n.getProps().drag;
                if (!!ca(r, o, n.currentDirection)) {
                    var i = n.visualElement.projection,
                        a = n.getAxisMotionValue(r);
                    if (i && i.layout) {
                        var u = i.layout.actual[r],
                            l = u.min,
                            c = u.max;
                        a.set(t[r] - ue(l, c, .5))
                    }
                }
            })
        }, e.prototype.scalePositionWithinConstraints = function () {
            var t = this,
                n, r = this.getProps(),
                o = r.drag,
                i = r.dragConstraints,
                a = this.visualElement.projection;
            if (!(!Gn(i) || !a || !this.constraints)) {
                this.stopAnimation();
                var u = {
                    x: 0,
                    y: 0
                };
                st(function (c) {
                    var y = t.getAxisMotionValue(c);
                    if (y) {
                        var E = y.get();
                        u[c] = _S({
                            min: E,
                            max: E
                        }, t.constraints[c])
                    }
                });
                var l = this.visualElement.getProps().transformTemplate;
                this.visualElement.getInstance().style.transform = l ? l({}, "") : "none", (n = a.root) === null || n === void 0 || n.updateScroll(), a.updateLayout(), this.resolveConstraints(), st(function (c) {
                    if (!!ca(c, o, null)) {
                        var y = t.getAxisMotionValue(c),
                            E = t.constraints[c],
                            h = E.min,
                            P = E.max;
                        y.set(ue(h, P, u[c]))
                    }
                })
            }
        }, e.prototype.addListeners = function () {
            var t = this,
                n;
            CS.set(this.visualElement, this);
            var r = this.visualElement.getInstance(),
                o = er(r, "pointerdown", function (c) {
                    var y = t.getProps(),
                        E = y.drag,
                        h = y.dragListener,
                        P = h === void 0 ? !0 : h;
                    E && P && t.start(c)
                }),
                i = function () {
                    var c = t.getProps().dragConstraints;
                    Gn(c) && (t.constraints = t.resolveRefConstraints())
                },
                a = this.visualElement.projection,
                u = a.addEventListener("measure", i);
            a && !a.layout && ((n = a.root) === null || n === void 0 || n.updateScroll(), a.updateLayout()), i();
            var l = ds(window, "resize", function () {
                t.scalePositionWithinConstraints()
            });
            return a.addEventListener("didUpdate", function (c) {
                    var y = c.delta,
                        E = c.hasLayoutChanged;
                    t.isDragging && E && (st(function (h) {
                        var P = t.getAxisMotionValue(h);
                        !P || (t.originPoint[h] += y[h].translate, P.set(P.get() + y[h].translate))
                    }), t.visualElement.syncRender())
                }),
                function () {
                    l(), o(), u()
                }
        }, e.prototype.getProps = function () {
            var t = this.visualElement.getProps(),
                n = t.drag,
                r = n === void 0 ? !1 : n,
                o = t.dragDirectionLock,
                i = o === void 0 ? !1 : o,
                a = t.dragPropagation,
                u = a === void 0 ? !1 : a,
                l = t.dragConstraints,
                c = l === void 0 ? !1 : l,
                y = t.dragElastic,
                E = y === void 0 ? Ss : y,
                h = t.dragMomentum,
                P = h === void 0 ? !0 : h;
            return W(W({}, t), {
                drag: r,
                dragDirectionLock: i,
                dragPropagation: u,
                dragConstraints: c,
                dragElastic: E,
                dragMomentum: P
            })
        }, e
    }();

function ca(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function bS(e, t) {
    t === void 0 && (t = 10);
    var n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}

function kS(e) {
    var t = e.dragControls,
        n = e.visualElement,
        r = Hi(function () {
            return new xS(n)
        });
    B.exports.useEffect(function () {
        return t && t.subscribe(r)
    }, [r, t]), B.exports.useEffect(function () {
        return r.addListeners()
    }, [r])
}

function LS(e) {
    var t = e.onPan,
        n = e.onPanStart,
        r = e.onPanEnd,
        o = e.onPanSessionStart,
        i = e.visualElement,
        a = t || n || r || o,
        u = B.exports.useRef(null),
        l = B.exports.useContext(fd).transformPagePoint,
        c = {
            onSessionStart: o,
            onStart: n,
            onMove: t,
            onEnd: function (E, h) {
                u.current = null, r && r(E, h)
            }
        };
    B.exports.useEffect(function () {
        u.current !== null && u.current.updateHandlers(c)
    });

    function y(E) {
        u.current = new hv(E, c, {
            transformPagePoint: l
        })
    }
    fa(i, "pointerdown", a && y), fv(function () {
        return u.current && u.current.end()
    })
}
var DS = {
        pan: Yt(LS),
        drag: Yt(kS)
    },
    pa = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];

function MS() {
    var e = pa.map(function () {
            return new po
        }),
        t = {},
        n = {
            clearAllListeners: function () {
                return e.forEach(function (r) {
                    return r.clear()
                })
            },
            updatePropListeners: function (r) {
                pa.forEach(function (o) {
                    var i, a = "on" + o,
                        u = r[a];
                    (i = t[o]) === null || i === void 0 || i.call(t), u && (t[o] = n[a](u))
                })
            }
        };
    return e.forEach(function (r, o) {
        n["on" + pa[o]] = function (i) {
            return r.add(i)
        }, n["notify" + pa[o]] = function () {
            for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
            r.notify.apply(r, it([], ye(i), !1))
        }
    }), n
}

function AS(e, t, n) {
    var r;
    for (var o in t) {
        var i = t[o],
            a = n[o];
        if (Pt(i)) e.addValue(o, i);
        else if (Pt(a)) e.addValue(o, Qn(i));
        else if (a !== i)
            if (e.hasValue(o)) {
                var u = e.getValue(o);
                !u.hasAnimated && u.set(i)
            } else e.addValue(o, Qn((r = e.getStaticValue(o)) !== null && r !== void 0 ? r : i))
    }
    for (var o in n) t[o] === void 0 && e.removeValue(o);
    return t
}
var Tv = function (e) {
        var t = e.treeType,
            n = t === void 0 ? "" : t,
            r = e.build,
            o = e.getBaseTarget,
            i = e.makeTargetAnimatable,
            a = e.measureViewportBox,
            u = e.render,
            l = e.readValueFromInstance,
            c = e.removeValueFromRenderState,
            y = e.sortNodePosition,
            E = e.scrapeMotionValuesFromProps;
        return function (h, P) {
            var R = h.parent,
                x = h.props,
                m = h.presenceId,
                w = h.blockInitialAnimation,
                _ = h.visualState;
            P === void 0 && (P = {});
            var S = !1,
                k = _.latestValues,
                O = _.renderState,
                g, d = MS(),
                s = new Map,
                f = new Map,
                p = {},
                v = W({}, k),
                T;

            function L() {
                !g || !S || (C(), u(g, O, x.style, V.projection))
            }

            function C() {
                r(V, O, k, P, x)
            }

            function j() {
                d.notifyUpdate(k)
            }

            function N(A, F) {
                var H = F.onChange(function (q) {
                        k[A] = q, x.onUpdate && at.update(j, !1, !0)
                    }),
                    X = F.onRenderRequest(V.scheduleRender);
                f.set(A, function () {
                    H(), X()
                })
            }
            var U = E(x);
            for (var I in U) {
                var M = U[I];
                k[I] !== void 0 && Pt(M) && M.set(k[I], !1)
            }
            var D = Wi(x),
                b = yd(x),
                V = W(W({
                    treeType: n,
                    current: null,
                    depth: R ? R.depth + 1 : 0,
                    parent: R,
                    children: new Set,
                    presenceId: m,
                    variantChildren: b ? new Set : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(R == null ? void 0 : R.isMounted()),
                    blockInitialAnimation: w,
                    isMounted: function () {
                        return Boolean(g)
                    },
                    mount: function (A) {
                        S = !0, g = V.current = A, V.projection && V.projection.mount(A), b && R && !D && (T = R == null ? void 0 : R.addVariantChild(V)), R == null || R.children.add(V), V.setProps(x)
                    },
                    unmount: function () {
                        var A;
                        (A = V.projection) === null || A === void 0 || A.unmount(), Xn.update(j), Xn.render(L), f.forEach(function (F) {
                            return F()
                        }), T == null || T(), R == null || R.children.delete(V), d.clearAllListeners(), g = void 0, S = !1
                    },
                    addVariantChild: function (A) {
                        var F, H = V.getClosestVariantNode();
                        if (H) return (F = H.variantChildren) === null || F === void 0 || F.add(A),
                            function () {
                                return H.variantChildren.delete(A)
                            }
                    },
                    sortNodePosition: function (A) {
                        return !y || n !== A.treeType ? 0 : y(V.getInstance(), A.getInstance())
                    },
                    getClosestVariantNode: function () {
                        return b ? V : R == null ? void 0 : R.getClosestVariantNode()
                    },
                    getLayoutId: function () {
                        return x.layoutId
                    },
                    getInstance: function () {
                        return g
                    },
                    getStaticValue: function (A) {
                        return k[A]
                    },
                    setStaticValue: function (A, F) {
                        return k[A] = F
                    },
                    getLatestValues: function () {
                        return k
                    },
                    setVisibility: function (A) {
                        V.isVisible !== A && (V.isVisible = A, V.scheduleRender())
                    },
                    makeTargetAnimatable: function (A, F) {
                        return F === void 0 && (F = !0), i(V, A, x, F)
                    },
                    measureViewportBox: function () {
                        return a(g, x)
                    },
                    addValue: function (A, F) {
                        V.hasValue(A) && V.removeValue(A), s.set(A, F), k[A] = F.get(), N(A, F)
                    },
                    removeValue: function (A) {
                        var F;
                        s.delete(A), (F = f.get(A)) === null || F === void 0 || F(), f.delete(A), delete k[A], c(A, O)
                    },
                    hasValue: function (A) {
                        return s.has(A)
                    },
                    getValue: function (A, F) {
                        var H = s.get(A);
                        return H === void 0 && F !== void 0 && (H = Qn(F), V.addValue(A, H)), H
                    },
                    forEachValue: function (A) {
                        return s.forEach(A)
                    },
                    readValue: function (A) {
                        var F;
                        return (F = k[A]) !== null && F !== void 0 ? F : l(g, A, P)
                    },
                    setBaseTarget: function (A, F) {
                        v[A] = F
                    },
                    getBaseTarget: function (A) {
                        if (o) {
                            var F = o(x, A);
                            if (F !== void 0 && !Pt(F)) return F
                        }
                        return v[A]
                    }
                }, d), {
                    build: function () {
                        return C(), O
                    },
                    scheduleRender: function () {
                        at.render(L, !1, !0)
                    },
                    syncRender: L,
                    setProps: function (A) {
                        (A.transformTemplate || x.transformTemplate) && V.scheduleRender(), x = A, d.updatePropListeners(A), p = AS(V, E(x), p)
                    },
                    getProps: function () {
                        return x
                    },
                    getVariant: function (A) {
                        var F;
                        return (F = x.variants) === null || F === void 0 ? void 0 : F[A]
                    },
                    getDefaultTransition: function () {
                        return x.transition
                    },
                    getTransformPagePoint: function () {
                        return x.transformPagePoint
                    },
                    getVariantContext: function (A) {
                        if (A === void 0 && (A = !1), A) return R == null ? void 0 : R.getVariantContext();
                        if (!D) {
                            var F = (R == null ? void 0 : R.getVariantContext()) || {};
                            return x.initial !== void 0 && (F.initial = x.initial), F
                        }
                        for (var H = {}, X = 0; X < IS; X++) {
                            var q = Rv[X],
                                J = x[q];
                            (Xe(J) || J === !1) && (H[q] = J)
                        }
                        return H
                    }
                });
            return V
        }
    },
    Rv = it(["initial"], ye(Ps), !1),
    IS = Rv.length;

function Os(e) {
    return typeof e == "string" && e.startsWith("var(--")
}
var Cv = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function VS(e) {
    var t = Cv.exec(e);
    if (!t) return [, ];
    var n = ye(t, 3),
        r = n[1],
        o = n[2];
    return [r, o]
}

function Es(e, t, n) {
    var r = ye(VS(e), 2),
        o = r[0],
        i = r[1];
    if (!!o) {
        var a = window.getComputedStyle(t).getPropertyValue(o);
        return a ? a.trim() : Os(i) ? Es(i, t) : i
    }
}

function NS(e, t, n) {
    var r, o = He(t, []),
        i = e.getInstance();
    if (!(i instanceof Element)) return {
        target: o,
        transitionEnd: n
    };
    n && (n = W({}, n)), e.forEachValue(function (c) {
        var y = c.get();
        if (!!Os(y)) {
            var E = Es(y, i);
            E && c.set(E)
        }
    });
    for (var a in o) {
        var u = o[a];
        if (!!Os(u)) {
            var l = Es(u, i);
            !l || (o[a] = l, n && ((r = n[a]) !== null && r !== void 0 || (n[a] = u)))
        }
    }
    return {
        target: o,
        transitionEnd: n
    }
}
var jS = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
    xv = function (e) {
        return jS.has(e)
    },
    US = function (e) {
        return Object.keys(e).some(xv)
    },
    bv = function (e, t) {
        e.set(t, !1), e.set(t)
    },
    kv = function (e) {
        return e === cn || e === Y
    },
    Lv;
(function (e) {
    e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom"
})(Lv || (Lv = {}));
var Dv = function (e, t) {
        return parseFloat(e.split(", ")[t])
    },
    Mv = function (e, t) {
        return function (n, r) {
            var o = r.transform;
            if (o === "none" || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return Dv(i[1], t);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Dv(a[1], e) : 0
        }
    },
    FS = new Set(["x", "y", "z"]),
    BS = go.filter(function (e) {
        return !FS.has(e)
    });

function zS(e) {
    var t = [];
    return BS.forEach(function (n) {
        var r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t.length && e.syncRender(), t
}
var Av = {
        width: function (e, t) {
            var n = e.x,
                r = t.paddingLeft,
                o = r === void 0 ? "0" : r,
                i = t.paddingRight,
                a = i === void 0 ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a)
        },
        height: function (e, t) {
            var n = e.y,
                r = t.paddingTop,
                o = r === void 0 ? "0" : r,
                i = t.paddingBottom,
                a = i === void 0 ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a)
        },
        top: function (e, t) {
            var n = t.top;
            return parseFloat(n)
        },
        left: function (e, t) {
            var n = t.left;
            return parseFloat(n)
        },
        bottom: function (e, t) {
            var n = e.y,
                r = t.top;
            return parseFloat(r) + (n.max - n.min)
        },
        right: function (e, t) {
            var n = e.x,
                r = t.left;
            return parseFloat(r) + (n.max - n.min)
        },
        x: Mv(4, 13),
        y: Mv(5, 14)
    },
    WS = function (e, t, n) {
        var r = t.measureViewportBox(),
            o = t.getInstance(),
            i = getComputedStyle(o),
            a = i.display,
            u = {};
        a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach(function (c) {
            u[c] = Av[c](r, i)
        }), t.syncRender();
        var l = t.measureViewportBox();
        return n.forEach(function (c) {
            var y = t.getValue(c);
            bv(y, u[c]), e[c] = Av[c](l, i)
        }), e
    },
    HS = function (e, t, n, r) {
        n === void 0 && (n = {}), r === void 0 && (r = {}), t = W({}, t), r = W({}, r);
        var o = Object.keys(t).filter(xv),
            i = [],
            a = !1,
            u = [];
        if (o.forEach(function (c) {
                var y = e.getValue(c);
                if (!!e.hasValue(c)) {
                    var E = n[c],
                        h = wo(E),
                        P = t[c],
                        R;
                    if (yo(P)) {
                        var x = P.length,
                            m = P[0] === null ? 1 : 0;
                        E = P[m], h = wo(E);
                        for (var w = m; w < x; w++) R ? Ui(wo(P[w]) === R) : R = wo(P[w])
                    } else R = wo(P);
                    if (h !== R)
                        if (kv(h) && kv(R)) {
                            var _ = y.get();
                            typeof _ == "string" && y.set(parseFloat(_)), typeof P == "string" ? t[c] = parseFloat(P) : Array.isArray(P) && R === Y && (t[c] = P.map(parseFloat))
                        } else(h == null ? void 0 : h.transform) && (R == null ? void 0 : R.transform) && (E === 0 || P === 0) ? E === 0 ? y.set(R.transform(E)) : t[c] = h.transform(P) : (a || (i = zS(e), a = !0), u.push(c), r[c] = r[c] !== void 0 ? r[c] : t[c], bv(y, P))
                }
            }), u.length) {
            var l = WS(t, e, u);
            return i.length && i.forEach(function (c) {
                var y = ye(c, 2),
                    E = y[0],
                    h = y[1];
                e.getValue(E).set(h)
            }), e.syncRender(), {
                target: l,
                transitionEnd: r
            }
        } else return {
            target: t,
            transitionEnd: r
        }
    };

function $S(e, t, n, r) {
    return US(t) ? HS(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
var KS = function (e, t, n, r) {
    var o = NS(e, t, r);
    return t = o.target, r = o.transitionEnd, $S(e, t, n, r)
};

function YS(e) {
    return window.getComputedStyle(e)
}
var Iv = {
        treeType: "dom",
        readValueFromInstance: function (e, t) {
            if (ua(t)) {
                var n = es(t);
                return n && n.default || 0
            } else {
                var r = YS(e);
                return (By(t) ? r.getPropertyValue(t) : r[t]) || 0
            }
        },
        sortNodePosition: function (e, t) {
            return e.compareDocumentPosition(t) & 2 ? 1 : -1
        },
        getBaseTarget: function (e, t) {
            var n;
            return (n = e.style) === null || n === void 0 ? void 0 : n[t]
        },
        measureViewportBox: function (e, t) {
            var n = t.transformPagePoint;
            return Ev(e, n)
        },
        resetTransform: function (e, t, n) {
            var r = n.transformTemplate;
            t.style.transform = r ? r({}, "") : "none", e.scheduleRender()
        },
        restoreTransform: function (e, t) {
            e.style.transform = t.style.transform
        },
        removeValueFromRenderState: function (e, t) {
            var n = t.vars,
                r = t.style;
            delete n[e], delete r[e]
        },
        makeTargetAnimatable: function (e, t, n, r) {
            var o = n.transformValues;
            r === void 0 && (r = !0);
            var i = t.transition,
                a = t.transitionEnd,
                u = He(t, ["transition", "transitionEnd"]),
                l = oS(u, i || {}, e);
            if (o && (a && (a = o(a)), u && (u = o(u)), l && (l = o(l))), r) {
                nS(e, u, l);
                var c = KS(e, u, l, a);
                a = c.transitionEnd, u = c.target
            }
            return W({
                transition: i,
                transitionEnd: a
            }, u)
        },
        scrapeMotionValuesFromProps: cs,
        build: function (e, t, n, r, o) {
            e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden"), ls(t, n, r, o.transformTemplate)
        },
        render: Yy
    },
    GS = Tv(Iv),
    qS = Tv(W(W({}, Iv), {
        getBaseTarget: function (e, t) {
            return e[t]
        },
        readValueFromInstance: function (e, t) {
            var n;
            return ua(t) ? ((n = es(t)) === null || n === void 0 ? void 0 : n.default) || 0 : (t = Gy.has(t) ? t : Ky(t), e.getAttribute(t))
        },
        scrapeMotionValuesFromProps: Xy,
        build: function (e, t, n, r, o) {
            fs(t, n, r, o.transformTemplate)
        },
        render: qy
    })),
    XS = function (e, t) {
        return us(e) ? qS(t, {
            enableHardwareAcceleration: !1
        }) : GS(t, {
            enableHardwareAcceleration: !0
        })
    };

function Vv(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
var _o = {
        correct: function (e, t) {
            if (!t.target) return e;
            if (typeof e == "string")
                if (Y.test(e)) e = parseFloat(e);
                else return e;
            var n = Vv(e, t.target.x),
                r = Vv(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%")
        }
    },
    Nv = "_$css",
    QS = {
        correct: function (e, t) {
            var n = t.treeScale,
                r = t.projectionDelta,
                o = e,
                i = e.includes("var("),
                a = [];
            i && (e = e.replace(Cv, function (x) {
                return a.push(x), Nv
            }));
            var u = gt.parse(e);
            if (u.length > 5) return o;
            var l = gt.createTransformer(e),
                c = typeof u[0] != "number" ? 1 : 0,
                y = r.x.scale * n.x,
                E = r.y.scale * n.y;
            u[0 + c] /= y, u[1 + c] /= E;
            var h = ue(y, E, .5);
            typeof u[2 + c] == "number" && (u[2 + c] /= h), typeof u[3 + c] == "number" && (u[3 + c] /= h);
            var P = l(u);
            if (i) {
                var R = 0;
                P = P.replace(Nv, function () {
                    var x = a[R];
                    return R++, x
                })
            }
            return P
        }
    },
    Ts = {
        exports: {}
    },
    So = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZS = B.exports,
    jv = 60103;
So.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
    var Uv = Symbol.for;
    jv = Uv("react.element"), So.Fragment = Uv("react.fragment")
}
var JS = ZS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    e1 = Object.prototype.hasOwnProperty,
    t1 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Fv(e, t, n) {
    var r, o = {},
        i = null,
        a = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
    for (r in t) e1.call(t, r) && !t1.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: jv,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: JS.current
    }
}
So.jsx = Fv;
So.jsxs = Fv;
Ts.exports = So;
const n1 = Ts.exports.jsx,
    jO = Ts.exports.jsxs;
var r1 = function (e) {
    ud(t, e);

    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return t.prototype.componentDidMount = function () {
        var n = this,
            r = this.props,
            o = r.visualElement,
            i = r.layoutGroup,
            a = r.switchLayoutGroup,
            u = r.layoutId,
            l = o.projection;
        xw(i1), l && ((i == null ? void 0 : i.group) && i.group.add(l), (a == null ? void 0 : a.register) && u && a.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", function () {
            n.safeToRemove()
        }), l.setOptions(W(W({}, l.options), {
            onExitComplete: function () {
                return n.safeToRemove()
            }
        }))), Po.hasEverUpdated = !0
    }, t.prototype.getSnapshotBeforeUpdate = function (n) {
        var r = this,
            o = this.props,
            i = o.layoutDependency,
            a = o.visualElement,
            u = o.drag,
            l = o.isPresent,
            c = a.projection;
        return c && (c.isPresent = l, u || n.layoutDependency !== i || i === void 0 ? c.willUpdate() : this.safeToRemove(), n.isPresent !== l && (l ? c.promote() : c.relegate() || at.postRender(function () {
            var y;
            ((y = c.getStack()) === null || y === void 0 ? void 0 : y.members.length) || r.safeToRemove()
        }))), null
    }, t.prototype.componentDidUpdate = function () {
        var n = this.props.visualElement.projection;
        n && (n.root.didUpdate(), !n.currentAnimation && n.isLead() && this.safeToRemove())
    }, t.prototype.componentWillUnmount = function () {
        var n = this.props,
            r = n.visualElement,
            o = n.layoutGroup,
            i = n.switchLayoutGroup,
            a = r.projection;
        a && (a.scheduleCheckAfterUnmount(), (o == null ? void 0 : o.group) && o.group.remove(a), (i == null ? void 0 : i.deregister) && i.deregister(a))
    }, t.prototype.safeToRemove = function () {
        var n = this.props.safeToRemove;
        n == null || n()
    }, t.prototype.render = function () {
        return null
    }, t
}( of .Component);

function o1(e) {
    var t = ye(cv(), 2),
        n = t[0],
        r = t[1],
        o = B.exports.useContext(jy);
    return n1(r1, Fs({}, W({}, e, {
        layoutGroup: o,
        switchLayoutGroup: B.exports.useContext(Uy),
        isPresent: n,
        safeToRemove: r
    })))
}
var i1 = {
        borderRadius: W(W({}, _o), {
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        }),
        borderTopLeftRadius: _o,
        borderTopRightRadius: _o,
        borderBottomLeftRadius: _o,
        borderBottomRightRadius: _o,
        boxShadow: QS
    },
    a1 = {
        measureLayout: o1
    },
    u1 = Dy({
        attachResizeListener: function (e, t) {
            return e.addEventListener("resize", t, {
                    passive: !0
                }),
                function () {
                    return e.removeEventListener("resize", t)
                }
        },
        measureScroll: function () {
            return {
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }
        }
    }),
    Rs = {
        current: void 0
    },
    l1 = Dy({
        measureScroll: function (e) {
            return {
                x: e.scrollLeft,
                y: e.scrollTop
            }
        },
        defaultParent: function () {
            if (!Rs.current) {
                var e = new u1(0, {});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Rs.current = e
            }
            return Rs.current
        },
        resetTransform: function (e, t) {
            e.style.transform = t != null ? t : "none"
        }
    }),
    s1 = W(W(W(W({}, vS), $_), DS), a1),
    UO = t_(function (e, t) {
        return E_(e, t, s1, XS, l1)
    }),
    Bv = {},
    zv = {},
    Z = {},
    f1 = function (t, n, r) {
        var o = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("script");
        typeof n == "function" && (r = n, n = {}), n = n || {}, r = r || function () {}, i.type = n.type || "text/javascript", i.charset = n.charset || "utf8", i.async = "async" in n ? !!n.async : !0, i.src = t, n.attrs && c1(i, n.attrs), n.text && (i.text = "" + n.text);
        var a = "onload" in i ? Wv : p1;
        a(i, r), i.onload || Wv(i, r), o.appendChild(i)
    };

function c1(e, t) {
    for (var n in t) e.setAttribute(n, t[n])
}

function Wv(e, t) {
    e.onload = function () {
        this.onerror = this.onload = null, t(null, e)
    }, e.onerror = function () {
        this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
    }
}

function p1(e, t) {
    e.onreadystatechange = function () {
        this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, t(null, e))
    }
}
var d1 = function (t) {
    return y1(t) && !v1(t)
};

function y1(e) {
    return !!e && typeof e == "object"
}

function v1(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || g1(e)
}
var h1 = typeof Symbol == "function" && Symbol.for,
    m1 = h1 ? Symbol.for("react.element") : 60103;

function g1(e) {
    return e.$$typeof === m1
}

function P1(e) {
    return Array.isArray(e) ? [] : {}
}

function Oo(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? tr(P1(e), e, t) : e
}

function w1(e, t, n) {
    return e.concat(t).map(function (r) {
        return Oo(r, n)
    })
}

function _1(e, t) {
    if (!t.customMerge) return tr;
    var n = t.customMerge(e);
    return typeof n == "function" ? n : tr
}

function S1(e) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return e.propertyIsEnumerable(t)
    }) : []
}

function Hv(e) {
    return Object.keys(e).concat(S1(e))
}

function $v(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}

function O1(e, t) {
    return $v(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
}

function E1(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && Hv(e).forEach(function (o) {
        r[o] = Oo(e[o], n)
    }), Hv(t).forEach(function (o) {
        O1(e, o) || ($v(e, o) && n.isMergeableObject(t[o]) ? r[o] = _1(o, n)(e[o], t[o], n) : r[o] = Oo(t[o], n))
    }), r
}

function tr(e, t, n) {
    n = n || {}, n.arrayMerge = n.arrayMerge || w1, n.isMergeableObject = n.isMergeableObject || d1, n.cloneUnlessOtherwiseSpecified = Oo;
    var r = Array.isArray(t),
        o = Array.isArray(e),
        i = r === o;
    return i ? r ? n.arrayMerge(e, t, n) : E1(e, t, n) : Oo(t, n)
}
tr.all = function (t, n) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (r, o) {
        return tr(r, o, n)
    }, {})
};
var T1 = tr,
    Kv = T1;
Object.defineProperty(Z, "__esModule", {
    value: !0
});
Z.parseStartTime = N1;
Z.parseEndTime = j1;
Z.randomString = U1;
Z.queryString = F1;
Z.getSDK = B1;
Z.getConfig = z1;
Z.omit = W1;
Z.callPlayer = H1;
Z.isMediaStream = $1;
Z.isBlobUrl = K1;
Z.supportsWebKitPresentationMode = Y1;
var R1 = Yv(f1),
    C1 = Yv(Kv);

function Yv(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function x1(e, t) {
    return D1(e) || L1(e, t) || k1(e, t) || b1()
}

function b1() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function k1(e, t) {
    if (!!e) {
        if (typeof e == "string") return Gv(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gv(e, t)
    }
}

function Gv(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function L1(e, t) {
    if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a = e[Symbol.iterator](), u; !(r = (u = a.next()).done) && (n.push(u.value), !(t && n.length === t)); r = !0);
        } catch (l) {
            o = !0, i = l
        } finally {
            try {
                !r && a.return != null && a.return()
            } finally {
                if (o) throw i
            }
        }
        return n
    }
}

function D1(e) {
    if (Array.isArray(e)) return e
}
var M1 = /[?&#](?:start|t)=([0-9hms]+)/,
    A1 = /[?&#]end=([0-9hms]+)/,
    Cs = /(\d+)(h|m|s)/g,
    I1 = /^\d+$/;

function qv(e, t) {
    if (!(e instanceof Array)) {
        var n = e.match(t);
        if (n) {
            var r = n[1];
            if (r.match(Cs)) return V1(r);
            if (I1.test(r)) return parseInt(r)
        }
    }
}

function V1(e) {
    for (var t = 0, n = Cs.exec(e); n !== null;) {
        var r = n,
            o = x1(r, 3),
            i = o[1],
            a = o[2];
        a === "h" && (t += parseInt(i, 10) * 60 * 60), a === "m" && (t += parseInt(i, 10) * 60), a === "s" && (t += parseInt(i, 10)), n = Cs.exec(e)
    }
    return t
}

function N1(e) {
    return qv(e, M1)
}

function j1(e) {
    return qv(e, A1)
}

function U1() {
    return Math.random().toString(36).substr(2, 5)
}

function F1(e) {
    return Object.keys(e).map(function (t) {
        return "".concat(t, "=").concat(e[t])
    }).join("&")
}

function xs(e) {
    return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
}
var nr = {};

function B1(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
        r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function () {
            return !0
        },
        o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : R1.default,
        i = xs(t);
    return i && r(i) ? Promise.resolve(i) : new Promise(function (a, u) {
        if (nr[e]) {
            nr[e].push({
                resolve: a,
                reject: u
            });
            return
        }
        nr[e] = [{
            resolve: a,
            reject: u
        }];
        var l = function (E) {
            nr[e].forEach(function (h) {
                return h.resolve(E)
            })
        };
        if (n) {
            var c = window[n];
            window[n] = function () {
                c && c(), l(xs(t))
            }
        }
        o(e, function (y) {
            y ? (nr[e].forEach(function (E) {
                return E.reject(y)
            }), nr[e] = null) : n || l(xs(t))
        })
    })
}

function z1(e, t) {
    return (0, C1.default)(t.config, e.config)
}

function W1(e) {
    for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
    for (var i = (t = []).concat.apply(t, r), a = {}, u = Object.keys(e), l = 0, c = u; l < c.length; l++) {
        var y = c[l];
        i.indexOf(y) === -1 && (a[y] = e[y])
    }
    return a
}

function H1(e) {
    var t;
    if (!this.player || !this.player[e]) {
        var n = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c – ");
        return this.player ? this.player[e] || (n += "The method was not available") : n += "The player was not available", console.warn(n, "font-weight: bold", ""), null
    }
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
    return (t = this.player)[e].apply(t, o)
}

function $1(e) {
    return typeof window != "undefined" && typeof window.MediaStream != "undefined" && e instanceof window.MediaStream
}

function K1(e) {
    return /^blob:/.test(e)
}

function Y1() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement("video"),
        t = /iPhone|iPod/.test(navigator.userAgent) === !1;
    return e.webkitSupportsPresentationMode && typeof e.webkitSetPresentationMode == "function" && t
}
var K = {};
Object.defineProperty(K, "__esModule", {
    value: !0
});
K.canPlay = K.FLV_EXTENSIONS = K.DASH_EXTENSIONS = K.HLS_EXTENSIONS = K.VIDEO_EXTENSIONS = K.AUDIO_EXTENSIONS = K.MATCH_URL_KALTURA = K.MATCH_URL_VIDYARD = K.MATCH_URL_MIXCLOUD = K.MATCH_URL_DAILYMOTION = K.MATCH_URL_TWITCH_CHANNEL = K.MATCH_URL_TWITCH_VIDEO = K.MATCH_URL_WISTIA = K.MATCH_URL_STREAMABLE = K.MATCH_URL_FACEBOOK_WATCH = K.MATCH_URL_FACEBOOK = K.MATCH_URL_VIMEO = K.MATCH_URL_SOUNDCLOUD = K.MATCH_URL_YOUTUBE = void 0;
var Xv = Z;

function G1(e, t) {
    var n;
    if (typeof Symbol == "undefined" || e[Symbol.iterator] == null) {
        if (Array.isArray(e) || (n = q1(e)) || t && e && typeof e.length == "number") {
            n && (e = n);
            var r = 0,
                o = function () {};
            return {
                s: o,
                n: function () {
                    return r >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[r++]
                    }
                },
                e: function (c) {
                    throw c
                },
                f: o
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var i = !0,
        a = !1,
        u;
    return {
        s: function () {
            n = e[Symbol.iterator]()
        },
        n: function () {
            var c = n.next();
            return i = c.done, c
        },
        e: function (c) {
            a = !0, u = c
        },
        f: function () {
            try {
                !i && n.return != null && n.return()
            } finally {
                if (a) throw u
            }
        }
    }
}

function q1(e, t) {
    if (!!e) {
        if (typeof e == "string") return Qv(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qv(e, t)
    }
}

function Qv(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}
var bs = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
K.MATCH_URL_YOUTUBE = bs;
var Zv = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
K.MATCH_URL_SOUNDCLOUD = Zv;
var Jv = /vimeo\.com\/.+/;
K.MATCH_URL_VIMEO = Jv;
var eh = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
K.MATCH_URL_FACEBOOK = eh;
var th = /^https?:\/\/fb\.watch\/.+$/;
K.MATCH_URL_FACEBOOK_WATCH = th;
var nh = /streamable\.com\/([a-z0-9]+)$/;
K.MATCH_URL_STREAMABLE = nh;
var rh = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
K.MATCH_URL_WISTIA = rh;
var oh = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
K.MATCH_URL_TWITCH_VIDEO = oh;
var ih = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
K.MATCH_URL_TWITCH_CHANNEL = ih;
var ah = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
K.MATCH_URL_DAILYMOTION = ah;
var uh = /mixcloud\.com\/([^/]+\/[^/]+)/;
K.MATCH_URL_MIXCLOUD = uh;
var lh = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;
K.MATCH_URL_VIDYARD = lh;
var sh = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;
K.MATCH_URL_KALTURA = sh;
var ks = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
K.AUDIO_EXTENSIONS = ks;
var Ls = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
K.VIDEO_EXTENSIONS = Ls;
var Ds = /\.(m3u8)($|\?)/i;
K.HLS_EXTENSIONS = Ds;
var fh = /\.(mpd)($|\?)/i;
K.DASH_EXTENSIONS = fh;
var ch = /\.(flv)($|\?)/i;
K.FLV_EXTENSIONS = ch;
var X1 = function e(t) {
        if (t instanceof Array) {
            var n = G1(t),
                r;
            try {
                for (n.s(); !(r = n.n()).done;) {
                    var o = r.value;
                    if (typeof o == "string" && e(o) || e(o.src)) return !0
                }
            } catch (i) {
                n.e(i)
            } finally {
                n.f()
            }
            return !1
        }
        return (0, Xv.isMediaStream)(t) || (0, Xv.isBlobUrl)(t) ? !0 : ks.test(t) || Ls.test(t) || Ds.test(t) || fh.test(t) || ch.test(t)
    },
    Q1 = {
        youtube: function (t) {
            return t instanceof Array ? t.every(function (n) {
                return bs.test(n)
            }) : bs.test(t)
        },
        soundcloud: function (t) {
            return Zv.test(t) && !ks.test(t)
        },
        vimeo: function (t) {
            return Jv.test(t) && !Ls.test(t) && !Ds.test(t)
        },
        facebook: function (t) {
            return eh.test(t) || th.test(t)
        },
        streamable: function (t) {
            return nh.test(t)
        },
        wistia: function (t) {
            return rh.test(t)
        },
        twitch: function (t) {
            return oh.test(t) || ih.test(t)
        },
        dailymotion: function (t) {
            return ah.test(t)
        },
        mixcloud: function (t) {
            return uh.test(t)
        },
        vidyard: function (t) {
            return lh.test(t)
        },
        kaltura: function (t) {
            return sh.test(t)
        },
        file: X1
    };
K.canPlay = Q1;
var ph = {};
(function (e) {
    function t(I) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (D) {
            return typeof D
        } : t = function (D) {
            return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D
        }, t(I)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var I = new WeakMap;
        return i = function () {
            return I
        }, I
    }

    function a(I) {
        if (I && I.__esModule) return I;
        if (I === null || t(I) !== "object" && typeof I != "function") return {
            default: I
        };
        var M = i();
        if (M && M.has(I)) return M.get(I);
        var D = {},
            b = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var V in I)
            if (Object.prototype.hasOwnProperty.call(I, V)) {
                var A = b ? Object.getOwnPropertyDescriptor(I, V) : null;
                A && (A.get || A.set) ? Object.defineProperty(D, V, A) : D[V] = I[V]
            } return D.default = I, M && M.set(I, D), D
    }

    function u(I, M) {
        var D = Object.keys(I);
        if (Object.getOwnPropertySymbols) {
            var b = Object.getOwnPropertySymbols(I);
            M && (b = b.filter(function (V) {
                return Object.getOwnPropertyDescriptor(I, V).enumerable
            })), D.push.apply(D, b)
        }
        return D
    }

    function l(I) {
        for (var M = 1; M < arguments.length; M++) {
            var D = arguments[M] != null ? arguments[M] : {};
            M % 2 ? u(Object(D), !0).forEach(function (b) {
                f(I, b, D[b])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(D)) : u(Object(D)).forEach(function (b) {
                Object.defineProperty(I, b, Object.getOwnPropertyDescriptor(D, b))
            })
        }
        return I
    }

    function c(I, M) {
        return R(I) || P(I, M) || E(I, M) || y()
    }

    function y() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function E(I, M) {
        if (!!I) {
            if (typeof I == "string") return h(I, M);
            var D = Object.prototype.toString.call(I).slice(8, -1);
            if (D === "Object" && I.constructor && (D = I.constructor.name), D === "Map" || D === "Set") return Array.from(I);
            if (D === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)) return h(I, M)
        }
    }

    function h(I, M) {
        (M == null || M > I.length) && (M = I.length);
        for (var D = 0, b = new Array(M); D < M; D++) b[D] = I[D];
        return b
    }

    function P(I, M) {
        if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(I)))) {
            var D = [],
                b = !0,
                V = !1,
                A = void 0;
            try {
                for (var F = I[Symbol.iterator](), H; !(b = (H = F.next()).done) && (D.push(H.value), !(M && D.length === M)); b = !0);
            } catch (X) {
                V = !0, A = X
            } finally {
                try {
                    !b && F.return != null && F.return()
                } finally {
                    if (V) throw A
                }
            }
            return D
        }
    }

    function R(I) {
        if (Array.isArray(I)) return I
    }

    function x(I, M) {
        if (!(I instanceof M)) throw new TypeError("Cannot call a class as a function")
    }

    function m(I, M) {
        for (var D = 0; D < M.length; D++) {
            var b = M[D];
            b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(I, b.key, b)
        }
    }

    function w(I, M, D) {
        return M && m(I.prototype, M), D && m(I, D), I
    }

    function _(I, M) {
        if (typeof M != "function" && M !== null) throw new TypeError("Super expression must either be null or a function");
        I.prototype = Object.create(M && M.prototype, {
            constructor: {
                value: I,
                writable: !0,
                configurable: !0
            }
        }), M && S(I, M)
    }

    function S(I, M) {
        return S = Object.setPrototypeOf || function (b, V) {
            return b.__proto__ = V, b
        }, S(I, M)
    }

    function k(I) {
        var M = d();
        return function () {
            var b = s(I),
                V;
            if (M) {
                var A = s(this).constructor;
                V = Reflect.construct(b, arguments, A)
            } else V = b.apply(this, arguments);
            return O(this, V)
        }
    }

    function O(I, M) {
        return M && (t(M) === "object" || typeof M == "function") ? M : g(I)
    }

    function g(I) {
        if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return I
    }

    function d() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function s(I) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function (D) {
            return D.__proto__ || Object.getPrototypeOf(D)
        }, s(I)
    }

    function f(I, M, D) {
        return M in I ? Object.defineProperty(I, M, {
            value: D,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : I[M] = D, I
    }
    var p = "https://www.youtube.com/iframe_api",
        v = "YT",
        T = "onYouTubeIframeAPIReady",
        L = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
        C = /user\/([a-zA-Z0-9_-]+)\/?/,
        j = /youtube-nocookie\.com/,
        N = "https://www.youtube-nocookie.com",
        U = function (I) {
            _(D, I);
            var M = k(D);

            function D() {
                var b;
                x(this, D);
                for (var V = arguments.length, A = new Array(V), F = 0; F < V; F++) A[F] = arguments[F];
                return b = M.call.apply(M, [this].concat(A)), f(g(b), "callPlayer", r.callPlayer), f(g(b), "parsePlaylist", function (H) {
                    if (H instanceof Array) return {
                        listType: "playlist",
                        playlist: H.map(b.getID).join(",")
                    };
                    if (L.test(H)) {
                        var X = H.match(L),
                            q = c(X, 2),
                            J = q[1];
                        return {
                            listType: "playlist",
                            list: J.replace(/^UC/, "UU")
                        }
                    }
                    if (C.test(H)) {
                        var fe = H.match(C),
                            Ke = c(fe, 2),
                            Qe = Ke[1];
                        return {
                            listType: "user_uploads",
                            list: Qe
                        }
                    }
                    return {}
                }), f(g(b), "onStateChange", function (H) {
                    var X = H.data,
                        q = b.props,
                        J = q.onPlay,
                        fe = q.onPause,
                        Ke = q.onBuffer,
                        Qe = q.onBufferEnd,
                        xo = q.onEnded,
                        or = q.onReady,
                        bo = q.loop,
                        ir = q.config,
                        mn = ir.playerVars,
                        ga = ir.onUnstarted,
                        St = window[v].PlayerState,
                        Uh = St.UNSTARTED,
                        Fh = St.PLAYING,
                        Bh = St.PAUSED,
                        zh = St.BUFFERING,
                        Wh = St.ENDED,
                        Hh = St.CUED;
                    if (X === Uh && ga(), X === Fh && (J(), Qe()), X === Bh && fe(), X === zh && Ke(), X === Wh) {
                        var $h = !!b.callPlayer("getPlaylist");
                        bo && !$h && (mn.start ? b.seekTo(mn.start) : b.play()), xo()
                    }
                    X === Hh && or()
                }), f(g(b), "mute", function () {
                    b.callPlayer("mute")
                }), f(g(b), "unmute", function () {
                    b.callPlayer("unMute")
                }), f(g(b), "ref", function (H) {
                    b.container = H
                }), b
            }
            return w(D, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "getID",
                value: function (V) {
                    return !V || V instanceof Array || L.test(V) ? null : V.match(o.MATCH_URL_YOUTUBE)[1]
                }
            }, {
                key: "load",
                value: function (V, A) {
                    var F = this,
                        H = this.props,
                        X = H.playing,
                        q = H.muted,
                        J = H.playsinline,
                        fe = H.controls,
                        Ke = H.loop,
                        Qe = H.config,
                        xo = H.onError,
                        or = Qe.playerVars,
                        bo = Qe.embedOptions,
                        ir = this.getID(V);
                    if (A) {
                        if (L.test(V) || C.test(V) || V instanceof Array) {
                            this.player.loadPlaylist(this.parsePlaylist(V));
                            return
                        }
                        this.player.cueVideoById({
                            videoId: ir,
                            startSeconds: (0, r.parseStartTime)(V) || or.start,
                            endSeconds: (0, r.parseEndTime)(V) || or.end
                        });
                        return
                    }(0, r.getSDK)(p, v, T, function (mn) {
                        return mn.loaded
                    }).then(function (mn) {
                        !F.container || (F.player = new mn.Player(F.container, l({
                            width: "100%",
                            height: "100%",
                            videoId: ir,
                            playerVars: l(l({
                                autoplay: X ? 1 : 0,
                                mute: q ? 1 : 0,
                                controls: fe ? 1 : 0,
                                start: (0, r.parseStartTime)(V),
                                end: (0, r.parseEndTime)(V),
                                origin: window.location.origin,
                                playsinline: J ? 1 : 0
                            }, F.parsePlaylist(V)), or),
                            events: {
                                onReady: function () {
                                    Ke && F.player.setLoop(!0), F.props.onReady()
                                },
                                onStateChange: F.onStateChange,
                                onError: function (St) {
                                    return xo(St.data)
                                }
                            },
                            host: j.test(V) ? N : void 0
                        }, bo)))
                    }, xo), bo.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("playVideo")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pauseVideo")
                }
            }, {
                key: "stop",
                value: function () {
                    !document.body.contains(this.callPlayer("getIframe")) || this.callPlayer("stopVideo")
                }
            }, {
                key: "seekTo",
                value: function (V) {
                    this.callPlayer("seekTo", V), this.props.playing || this.pause()
                }
            }, {
                key: "setVolume",
                value: function (V) {
                    this.callPlayer("setVolume", V * 100)
                }
            }, {
                key: "setPlaybackRate",
                value: function (V) {
                    this.callPlayer("setPlaybackRate", V)
                }
            }, {
                key: "setLoop",
                value: function (V) {
                    this.callPlayer("setLoop", V)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.callPlayer("getDuration")
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.callPlayer("getCurrentTime")
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return this.callPlayer("getVideoLoadedFraction") * this.getDuration()
                }
            }, {
                key: "render",
                value: function () {
                    var V = this.props.display,
                        A = {
                            width: "100%",
                            height: "100%",
                            display: V
                        };
                    return n.default.createElement("div", {
                        style: A
                    }, n.default.createElement("div", {
                        ref: this.ref
                    }))
                }
            }]), D
        }(n.Component);
    e.default = U, f(U, "displayName", "YouTube"), f(U, "canPlay", o.canPlay.youtube)
})(ph);
var dh = {};
(function (e) {
    function t(d) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (f) {
            return typeof f
        } : t = function (f) {
            return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f
        }, t(d)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var d = new WeakMap;
        return i = function () {
            return d
        }, d
    }

    function a(d) {
        if (d && d.__esModule) return d;
        if (d === null || t(d) !== "object" && typeof d != "function") return {
            default: d
        };
        var s = i();
        if (s && s.has(d)) return s.get(d);
        var f = {},
            p = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var v in d)
            if (Object.prototype.hasOwnProperty.call(d, v)) {
                var T = p ? Object.getOwnPropertyDescriptor(d, v) : null;
                T && (T.get || T.set) ? Object.defineProperty(f, v, T) : f[v] = d[v]
            } return f.default = d, s && s.set(d, f), f
    }

    function u(d, s) {
        var f = Object.keys(d);
        if (Object.getOwnPropertySymbols) {
            var p = Object.getOwnPropertySymbols(d);
            s && (p = p.filter(function (v) {
                return Object.getOwnPropertyDescriptor(d, v).enumerable
            })), f.push.apply(f, p)
        }
        return f
    }

    function l(d) {
        for (var s = 1; s < arguments.length; s++) {
            var f = arguments[s] != null ? arguments[s] : {};
            s % 2 ? u(Object(f), !0).forEach(function (p) {
                S(d, p, f[p])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(f)) : u(Object(f)).forEach(function (p) {
                Object.defineProperty(d, p, Object.getOwnPropertyDescriptor(f, p))
            })
        }
        return d
    }

    function c(d, s) {
        if (!(d instanceof s)) throw new TypeError("Cannot call a class as a function")
    }

    function y(d, s) {
        for (var f = 0; f < s.length; f++) {
            var p = s[f];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p)
        }
    }

    function E(d, s, f) {
        return s && y(d.prototype, s), f && y(d, f), d
    }

    function h(d, s) {
        if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
        d.prototype = Object.create(s && s.prototype, {
            constructor: {
                value: d,
                writable: !0,
                configurable: !0
            }
        }), s && P(d, s)
    }

    function P(d, s) {
        return P = Object.setPrototypeOf || function (p, v) {
            return p.__proto__ = v, p
        }, P(d, s)
    }

    function R(d) {
        var s = w();
        return function () {
            var p = _(d),
                v;
            if (s) {
                var T = _(this).constructor;
                v = Reflect.construct(p, arguments, T)
            } else v = p.apply(this, arguments);
            return x(this, v)
        }
    }

    function x(d, s) {
        return s && (t(s) === "object" || typeof s == "function") ? s : m(d)
    }

    function m(d) {
        if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return d
    }

    function w() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function _(d) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) {
            return f.__proto__ || Object.getPrototypeOf(f)
        }, _(d)
    }

    function S(d, s, f) {
        return s in d ? Object.defineProperty(d, s, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : d[s] = f, d
    }
    var k = "https://w.soundcloud.com/player/api.js",
        O = "SC",
        g = function (d) {
            h(f, d);
            var s = R(f);

            function f() {
                var p;
                c(this, f);
                for (var v = arguments.length, T = new Array(v), L = 0; L < v; L++) T[L] = arguments[L];
                return p = s.call.apply(s, [this].concat(T)), S(m(p), "callPlayer", r.callPlayer), S(m(p), "duration", null), S(m(p), "currentTime", null), S(m(p), "fractionLoaded", null), S(m(p), "mute", function () {
                    p.setVolume(0)
                }), S(m(p), "unmute", function () {
                    p.props.volume !== null && p.setVolume(p.props.volume)
                }), S(m(p), "ref", function (C) {
                    p.iframe = C
                }), p
            }
            return E(f, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (v, T) {
                    var L = this;
                    (0, r.getSDK)(k, O).then(function (C) {
                        if (!!L.iframe) {
                            var j = C.Widget.Events,
                                N = j.PLAY,
                                U = j.PLAY_PROGRESS,
                                I = j.PAUSE,
                                M = j.FINISH,
                                D = j.ERROR;
                            T || (L.player = C.Widget(L.iframe), L.player.bind(N, L.props.onPlay), L.player.bind(I, function () {
                                var b = L.duration - L.currentTime;
                                b < .05 || L.props.onPause()
                            }), L.player.bind(U, function (b) {
                                L.currentTime = b.currentPosition / 1e3, L.fractionLoaded = b.loadedProgress
                            }), L.player.bind(M, function () {
                                return L.props.onEnded()
                            }), L.player.bind(D, function (b) {
                                return L.props.onError(b)
                            })), L.player.load(v, l(l({}, L.props.config.options), {}, {
                                callback: function () {
                                    L.player.getDuration(function (V) {
                                        L.duration = V / 1e3, L.props.onReady()
                                    })
                                }
                            }))
                        }
                    })
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {}
            }, {
                key: "seekTo",
                value: function (v) {
                    this.callPlayer("seekTo", v * 1e3)
                }
            }, {
                key: "setVolume",
                value: function (v) {
                    this.callPlayer("setVolume", v * 100)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return this.fractionLoaded * this.duration
                }
            }, {
                key: "render",
                value: function () {
                    var v = this.props.display,
                        T = {
                            width: "100%",
                            height: "100%",
                            display: v
                        };
                    return n.default.createElement("iframe", {
                        ref: this.ref,
                        src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
                        style: T,
                        frameBorder: 0,
                        allow: "autoplay"
                    })
                }
            }]), f
        }(n.Component);
    e.default = g, S(g, "displayName", "SoundCloud"), S(g, "canPlay", o.canPlay.soundcloud), S(g, "loopOnEnded", !0)
})(dh);
var yh = {};
(function (e) {
    function t(d) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (f) {
            return typeof f
        } : t = function (f) {
            return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f
        }, t(d)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var d = new WeakMap;
        return i = function () {
            return d
        }, d
    }

    function a(d) {
        if (d && d.__esModule) return d;
        if (d === null || t(d) !== "object" && typeof d != "function") return {
            default: d
        };
        var s = i();
        if (s && s.has(d)) return s.get(d);
        var f = {},
            p = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var v in d)
            if (Object.prototype.hasOwnProperty.call(d, v)) {
                var T = p ? Object.getOwnPropertyDescriptor(d, v) : null;
                T && (T.get || T.set) ? Object.defineProperty(f, v, T) : f[v] = d[v]
            } return f.default = d, s && s.set(d, f), f
    }

    function u(d, s) {
        var f = Object.keys(d);
        if (Object.getOwnPropertySymbols) {
            var p = Object.getOwnPropertySymbols(d);
            s && (p = p.filter(function (v) {
                return Object.getOwnPropertyDescriptor(d, v).enumerable
            })), f.push.apply(f, p)
        }
        return f
    }

    function l(d) {
        for (var s = 1; s < arguments.length; s++) {
            var f = arguments[s] != null ? arguments[s] : {};
            s % 2 ? u(Object(f), !0).forEach(function (p) {
                S(d, p, f[p])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(f)) : u(Object(f)).forEach(function (p) {
                Object.defineProperty(d, p, Object.getOwnPropertyDescriptor(f, p))
            })
        }
        return d
    }

    function c(d, s) {
        if (!(d instanceof s)) throw new TypeError("Cannot call a class as a function")
    }

    function y(d, s) {
        for (var f = 0; f < s.length; f++) {
            var p = s[f];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p)
        }
    }

    function E(d, s, f) {
        return s && y(d.prototype, s), f && y(d, f), d
    }

    function h(d, s) {
        if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
        d.prototype = Object.create(s && s.prototype, {
            constructor: {
                value: d,
                writable: !0,
                configurable: !0
            }
        }), s && P(d, s)
    }

    function P(d, s) {
        return P = Object.setPrototypeOf || function (p, v) {
            return p.__proto__ = v, p
        }, P(d, s)
    }

    function R(d) {
        var s = w();
        return function () {
            var p = _(d),
                v;
            if (s) {
                var T = _(this).constructor;
                v = Reflect.construct(p, arguments, T)
            } else v = p.apply(this, arguments);
            return x(this, v)
        }
    }

    function x(d, s) {
        return s && (t(s) === "object" || typeof s == "function") ? s : m(d)
    }

    function m(d) {
        if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return d
    }

    function w() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function _(d) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) {
            return f.__proto__ || Object.getPrototypeOf(f)
        }, _(d)
    }

    function S(d, s, f) {
        return s in d ? Object.defineProperty(d, s, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : d[s] = f, d
    }
    var k = "https://player.vimeo.com/api/player.js",
        O = "Vimeo",
        g = function (d) {
            h(f, d);
            var s = R(f);

            function f() {
                var p;
                c(this, f);
                for (var v = arguments.length, T = new Array(v), L = 0; L < v; L++) T[L] = arguments[L];
                return p = s.call.apply(s, [this].concat(T)), S(m(p), "callPlayer", r.callPlayer), S(m(p), "duration", null), S(m(p), "currentTime", null), S(m(p), "secondsLoaded", null), S(m(p), "mute", function () {
                    p.setVolume(0)
                }), S(m(p), "unmute", function () {
                    p.props.volume !== null && p.setVolume(p.props.volume)
                }), S(m(p), "ref", function (C) {
                    p.container = C
                }), p
            }
            return E(f, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (v) {
                    var T = this;
                    this.duration = null, (0, r.getSDK)(k, O).then(function (L) {
                        !T.container || (T.player = new L.Player(T.container, l({
                            url: v,
                            autoplay: T.props.playing,
                            muted: T.props.muted,
                            loop: T.props.loop,
                            playsinline: T.props.playsinline,
                            controls: T.props.controls
                        }, T.props.config.playerOptions)), T.player.ready().then(function () {
                            var C = T.container.querySelector("iframe");
                            C.style.width = "100%", C.style.height = "100%"
                        }).catch(T.props.onError), T.player.on("loaded", function () {
                            T.props.onReady(), T.refreshDuration()
                        }), T.player.on("play", function () {
                            T.props.onPlay(), T.refreshDuration()
                        }), T.player.on("pause", T.props.onPause), T.player.on("seeked", function (C) {
                            return T.props.onSeek(C.seconds)
                        }), T.player.on("ended", T.props.onEnded), T.player.on("error", T.props.onError), T.player.on("timeupdate", function (C) {
                            var j = C.seconds;
                            T.currentTime = j
                        }), T.player.on("progress", function (C) {
                            var j = C.seconds;
                            T.secondsLoaded = j
                        }), T.player.on("bufferstart", T.props.onBuffer), T.player.on("bufferend", T.props.onBufferEnd))
                    }, this.props.onError)
                }
            }, {
                key: "refreshDuration",
                value: function () {
                    var v = this;
                    this.player.getDuration().then(function (T) {
                        v.duration = T
                    })
                }
            }, {
                key: "play",
                value: function () {
                    var v = this.callPlayer("play");
                    v && v.catch(this.props.onError)
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {
                    this.callPlayer("unload")
                }
            }, {
                key: "seekTo",
                value: function (v) {
                    this.callPlayer("setCurrentTime", v)
                }
            }, {
                key: "setVolume",
                value: function (v) {
                    this.callPlayer("setVolume", v)
                }
            }, {
                key: "setLoop",
                value: function (v) {
                    this.callPlayer("setLoop", v)
                }
            }, {
                key: "setPlaybackRate",
                value: function (v) {
                    this.callPlayer("setPlaybackRate", v)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return this.secondsLoaded
                }
            }, {
                key: "render",
                value: function () {
                    var v = this.props.display,
                        T = {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            display: v
                        };
                    return n.default.createElement("div", {
                        key: this.props.url,
                        ref: this.ref,
                        style: T
                    })
                }
            }]), f
        }(n.Component);
    e.default = g, S(g, "displayName", "Vimeo"), S(g, "canPlay", o.canPlay.vimeo), S(g, "forceLoad", !0)
})(yh);
var vh = {};
(function (e) {
    function t(s) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (p) {
            return typeof p
        } : t = function (p) {
            return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p
        }, t(s)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var s = new WeakMap;
        return i = function () {
            return s
        }, s
    }

    function a(s) {
        if (s && s.__esModule) return s;
        if (s === null || t(s) !== "object" && typeof s != "function") return {
            default: s
        };
        var f = i();
        if (f && f.has(s)) return f.get(s);
        var p = {},
            v = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var T in s)
            if (Object.prototype.hasOwnProperty.call(s, T)) {
                var L = v ? Object.getOwnPropertyDescriptor(s, T) : null;
                L && (L.get || L.set) ? Object.defineProperty(p, T, L) : p[T] = s[T]
            } return p.default = s, f && f.set(s, p), p
    }

    function u() {
        return u = Object.assign || function (s) {
            for (var f = 1; f < arguments.length; f++) {
                var p = arguments[f];
                for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && (s[v] = p[v])
            }
            return s
        }, u.apply(this, arguments)
    }

    function l(s, f) {
        if (!(s instanceof f)) throw new TypeError("Cannot call a class as a function")
    }

    function c(s, f) {
        for (var p = 0; p < f.length; p++) {
            var v = f[p];
            v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(s, v.key, v)
        }
    }

    function y(s, f, p) {
        return f && c(s.prototype, f), p && c(s, p), s
    }

    function E(s, f) {
        if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function");
        s.prototype = Object.create(f && f.prototype, {
            constructor: {
                value: s,
                writable: !0,
                configurable: !0
            }
        }), f && h(s, f)
    }

    function h(s, f) {
        return h = Object.setPrototypeOf || function (v, T) {
            return v.__proto__ = T, v
        }, h(s, f)
    }

    function P(s) {
        var f = m();
        return function () {
            var v = w(s),
                T;
            if (f) {
                var L = w(this).constructor;
                T = Reflect.construct(v, arguments, L)
            } else T = v.apply(this, arguments);
            return R(this, T)
        }
    }

    function R(s, f) {
        return f && (t(f) === "object" || typeof f == "function") ? f : x(s)
    }

    function x(s) {
        if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s
    }

    function m() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function w(s) {
        return w = Object.setPrototypeOf ? Object.getPrototypeOf : function (p) {
            return p.__proto__ || Object.getPrototypeOf(p)
        }, w(s)
    }

    function _(s, f, p) {
        return f in s ? Object.defineProperty(s, f, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[f] = p, s
    }
    var S = "https://connect.facebook.net/en_US/sdk.js",
        k = "FB",
        O = "fbAsyncInit",
        g = "facebook-player-",
        d = function (s) {
            E(p, s);
            var f = P(p);

            function p() {
                var v;
                l(this, p);
                for (var T = arguments.length, L = new Array(T), C = 0; C < T; C++) L[C] = arguments[C];
                return v = f.call.apply(f, [this].concat(L)), _(x(v), "callPlayer", r.callPlayer), _(x(v), "playerID", v.props.config.playerId || "".concat(g).concat((0, r.randomString)())), _(x(v), "mute", function () {
                    v.callPlayer("mute")
                }), _(x(v), "unmute", function () {
                    v.callPlayer("unmute")
                }), v
            }
            return y(p, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (T, L) {
                    var C = this;
                    if (L) {
                        (0, r.getSDK)(S, k, O).then(function (j) {
                            return j.XFBML.parse()
                        });
                        return
                    }(0, r.getSDK)(S, k, O).then(function (j) {
                        j.init({
                            appId: C.props.config.appId,
                            xfbml: !0,
                            version: C.props.config.version
                        }), j.Event.subscribe("xfbml.render", function (N) {
                            C.props.onLoaded()
                        }), j.Event.subscribe("xfbml.ready", function (N) {
                            N.type === "video" && N.id === C.playerID && (C.player = N.instance, C.player.subscribe("startedPlaying", C.props.onPlay), C.player.subscribe("paused", C.props.onPause), C.player.subscribe("finishedPlaying", C.props.onEnded), C.player.subscribe("startedBuffering", C.props.onBuffer), C.player.subscribe("finishedBuffering", C.props.onBufferEnd), C.player.subscribe("error", C.props.onError), C.props.muted ? C.callPlayer("mute") : C.callPlayer("unmute"), C.props.onReady(), document.getElementById(C.playerID).querySelector("iframe").style.visibility = "visible")
                        })
                    })
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {}
            }, {
                key: "seekTo",
                value: function (T) {
                    this.callPlayer("seek", T)
                }
            }, {
                key: "setVolume",
                value: function (T) {
                    this.callPlayer("setVolume", T)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.callPlayer("getDuration")
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.callPlayer("getCurrentPosition")
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return null
                }
            }, {
                key: "render",
                value: function () {
                    var T = this.props.config.attributes,
                        L = {
                            width: "100%",
                            height: "100%"
                        };
                    return n.default.createElement("div", u({
                        style: L,
                        id: this.playerID,
                        className: "fb-video",
                        "data-href": this.props.url,
                        "data-autoplay": this.props.playing ? "true" : "false",
                        "data-allowfullscreen": "true",
                        "data-controls": this.props.controls ? "true" : "false"
                    }, T))
                }
            }]), p
        }(n.Component);
    e.default = d, _(d, "displayName", "Facebook"), _(d, "canPlay", o.canPlay.facebook), _(d, "loopOnEnded", !0)
})(vh);
var hh = {};
(function (e) {
    function t(O) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (d) {
            return typeof d
        } : t = function (d) {
            return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        }, t(O)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var O = new WeakMap;
        return i = function () {
            return O
        }, O
    }

    function a(O) {
        if (O && O.__esModule) return O;
        if (O === null || t(O) !== "object" && typeof O != "function") return {
            default: O
        };
        var g = i();
        if (g && g.has(O)) return g.get(O);
        var d = {},
            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var f in O)
            if (Object.prototype.hasOwnProperty.call(O, f)) {
                var p = s ? Object.getOwnPropertyDescriptor(O, f) : null;
                p && (p.get || p.set) ? Object.defineProperty(d, f, p) : d[f] = O[f]
            } return d.default = O, g && g.set(O, d), d
    }

    function u(O, g) {
        if (!(O instanceof g)) throw new TypeError("Cannot call a class as a function")
    }

    function l(O, g) {
        for (var d = 0; d < g.length; d++) {
            var s = g[d];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(O, s.key, s)
        }
    }

    function c(O, g, d) {
        return g && l(O.prototype, g), d && l(O, d), O
    }

    function y(O, g) {
        if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function");
        O.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: O,
                writable: !0,
                configurable: !0
            }
        }), g && E(O, g)
    }

    function E(O, g) {
        return E = Object.setPrototypeOf || function (s, f) {
            return s.__proto__ = f, s
        }, E(O, g)
    }

    function h(O) {
        var g = x();
        return function () {
            var s = m(O),
                f;
            if (g) {
                var p = m(this).constructor;
                f = Reflect.construct(s, arguments, p)
            } else f = s.apply(this, arguments);
            return P(this, f)
        }
    }

    function P(O, g) {
        return g && (t(g) === "object" || typeof g == "function") ? g : R(O)
    }

    function R(O) {
        if (O === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return O
    }

    function x() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function m(O) {
        return m = Object.setPrototypeOf ? Object.getPrototypeOf : function (d) {
            return d.__proto__ || Object.getPrototypeOf(d)
        }, m(O)
    }

    function w(O, g, d) {
        return g in O ? Object.defineProperty(O, g, {
            value: d,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : O[g] = d, O
    }
    var _ = "https://cdn.embed.ly/player-0.1.0.min.js",
        S = "playerjs",
        k = function (O) {
            y(d, O);
            var g = h(d);

            function d() {
                var s;
                u(this, d);
                for (var f = arguments.length, p = new Array(f), v = 0; v < f; v++) p[v] = arguments[v];
                return s = g.call.apply(g, [this].concat(p)), w(R(s), "callPlayer", r.callPlayer), w(R(s), "duration", null), w(R(s), "currentTime", null), w(R(s), "secondsLoaded", null), w(R(s), "mute", function () {
                    s.callPlayer("mute")
                }), w(R(s), "unmute", function () {
                    s.callPlayer("unmute")
                }), w(R(s), "ref", function (T) {
                    s.iframe = T
                }), s
            }
            return c(d, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (f) {
                    var p = this;
                    (0, r.getSDK)(_, S).then(function (v) {
                        !p.iframe || (p.player = new v.Player(p.iframe), p.player.setLoop(p.props.loop), p.player.on("ready", p.props.onReady), p.player.on("play", p.props.onPlay), p.player.on("pause", p.props.onPause), p.player.on("seeked", p.props.onSeek), p.player.on("ended", p.props.onEnded), p.player.on("error", p.props.onError), p.player.on("timeupdate", function (T) {
                            var L = T.duration,
                                C = T.seconds;
                            p.duration = L, p.currentTime = C
                        }), p.player.on("buffered", function (T) {
                            var L = T.percent;
                            p.duration && (p.secondsLoaded = p.duration * L)
                        }), p.props.muted && p.player.mute())
                    }, this.props.onError)
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {}
            }, {
                key: "seekTo",
                value: function (f) {
                    this.callPlayer("setCurrentTime", f)
                }
            }, {
                key: "setVolume",
                value: function (f) {
                    this.callPlayer("setVolume", f * 100)
                }
            }, {
                key: "setLoop",
                value: function (f) {
                    this.callPlayer("setLoop", f)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return this.secondsLoaded
                }
            }, {
                key: "render",
                value: function () {
                    var f = this.props.url.match(o.MATCH_URL_STREAMABLE)[1],
                        p = {
                            width: "100%",
                            height: "100%"
                        };
                    return n.default.createElement("iframe", {
                        ref: this.ref,
                        src: "https://streamable.com/o/".concat(f),
                        frameBorder: "0",
                        scrolling: "no",
                        style: p,
                        allowFullScreen: !0
                    })
                }
            }]), d
        }(n.Component);
    e.default = k, w(k, "displayName", "Streamable"), w(k, "canPlay", o.canPlay.streamable)
})(hh);
var mh = {};
(function (e) {
    function t(s) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (p) {
            return typeof p
        } : t = function (p) {
            return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p
        }, t(s)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var s = new WeakMap;
        return i = function () {
            return s
        }, s
    }

    function a(s) {
        if (s && s.__esModule) return s;
        if (s === null || t(s) !== "object" && typeof s != "function") return {
            default: s
        };
        var f = i();
        if (f && f.has(s)) return f.get(s);
        var p = {},
            v = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var T in s)
            if (Object.prototype.hasOwnProperty.call(s, T)) {
                var L = v ? Object.getOwnPropertyDescriptor(s, T) : null;
                L && (L.get || L.set) ? Object.defineProperty(p, T, L) : p[T] = s[T]
            } return p.default = s, f && f.set(s, p), p
    }

    function u(s, f) {
        var p = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            f && (v = v.filter(function (T) {
                return Object.getOwnPropertyDescriptor(s, T).enumerable
            })), p.push.apply(p, v)
        }
        return p
    }

    function l(s) {
        for (var f = 1; f < arguments.length; f++) {
            var p = arguments[f] != null ? arguments[f] : {};
            f % 2 ? u(Object(p), !0).forEach(function (v) {
                S(s, v, p[v])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(p)) : u(Object(p)).forEach(function (v) {
                Object.defineProperty(s, v, Object.getOwnPropertyDescriptor(p, v))
            })
        }
        return s
    }

    function c(s, f) {
        if (!(s instanceof f)) throw new TypeError("Cannot call a class as a function")
    }

    function y(s, f) {
        for (var p = 0; p < f.length; p++) {
            var v = f[p];
            v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(s, v.key, v)
        }
    }

    function E(s, f, p) {
        return f && y(s.prototype, f), p && y(s, p), s
    }

    function h(s, f) {
        if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function");
        s.prototype = Object.create(f && f.prototype, {
            constructor: {
                value: s,
                writable: !0,
                configurable: !0
            }
        }), f && P(s, f)
    }

    function P(s, f) {
        return P = Object.setPrototypeOf || function (v, T) {
            return v.__proto__ = T, v
        }, P(s, f)
    }

    function R(s) {
        var f = w();
        return function () {
            var v = _(s),
                T;
            if (f) {
                var L = _(this).constructor;
                T = Reflect.construct(v, arguments, L)
            } else T = v.apply(this, arguments);
            return x(this, T)
        }
    }

    function x(s, f) {
        return f && (t(f) === "object" || typeof f == "function") ? f : m(s)
    }

    function m(s) {
        if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s
    }

    function w() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function _(s) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function (p) {
            return p.__proto__ || Object.getPrototypeOf(p)
        }, _(s)
    }

    function S(s, f, p) {
        return f in s ? Object.defineProperty(s, f, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[f] = p, s
    }
    var k = "https://fast.wistia.com/assets/external/E-v1.js",
        O = "Wistia",
        g = "wistia-player-",
        d = function (s) {
            h(p, s);
            var f = R(p);

            function p() {
                var v;
                c(this, p);
                for (var T = arguments.length, L = new Array(T), C = 0; C < T; C++) L[C] = arguments[C];
                return v = f.call.apply(f, [this].concat(L)), S(m(v), "callPlayer", r.callPlayer), S(m(v), "playerID", v.props.config.playerId || "".concat(g).concat((0, r.randomString)())), S(m(v), "onPlay", function () {
                    var j;
                    return (j = v.props).onPlay.apply(j, arguments)
                }), S(m(v), "onPause", function () {
                    var j;
                    return (j = v.props).onPause.apply(j, arguments)
                }), S(m(v), "onSeek", function () {
                    var j;
                    return (j = v.props).onSeek.apply(j, arguments)
                }), S(m(v), "onEnded", function () {
                    var j;
                    return (j = v.props).onEnded.apply(j, arguments)
                }), S(m(v), "mute", function () {
                    v.callPlayer("mute")
                }), S(m(v), "unmute", function () {
                    v.callPlayer("unmute")
                }), v
            }
            return E(p, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (T) {
                    var L = this,
                        C = this.props,
                        j = C.playing,
                        N = C.muted,
                        U = C.controls,
                        I = C.onReady,
                        M = C.config,
                        D = C.onError;
                    (0, r.getSDK)(k, O).then(function (b) {
                        M.customControls && M.customControls.forEach(function (V) {
                            return b.defineControl(V)
                        }), window._wq = window._wq || [], window._wq.push({
                            id: L.playerID,
                            options: l({
                                autoPlay: j,
                                silentAutoPlay: "allow",
                                muted: N,
                                controlsVisibleOnLoad: U,
                                fullscreenButton: U,
                                playbar: U,
                                playbackRateControl: U,
                                qualityControl: U,
                                volumeControl: U,
                                settingsControl: U,
                                smallPlayButton: U
                            }, M.options),
                            onReady: function (A) {
                                L.player = A, L.unbind(), L.player.bind("play", L.onPlay), L.player.bind("pause", L.onPause), L.player.bind("seek", L.onSeek), L.player.bind("end", L.onEnded), I()
                            }
                        })
                    }, D)
                }
            }, {
                key: "unbind",
                value: function () {
                    this.player.unbind("play", this.onPlay), this.player.unbind("pause", this.onPause), this.player.unbind("seek", this.onSeek), this.player.unbind("end", this.onEnded)
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {
                    this.unbind(), this.callPlayer("remove")
                }
            }, {
                key: "seekTo",
                value: function (T) {
                    this.callPlayer("time", T)
                }
            }, {
                key: "setVolume",
                value: function (T) {
                    this.callPlayer("volume", T)
                }
            }, {
                key: "setPlaybackRate",
                value: function (T) {
                    this.callPlayer("playbackRate", T)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.callPlayer("duration")
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.callPlayer("time")
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return null
                }
            }, {
                key: "render",
                value: function () {
                    var T = this.props.url,
                        L = T && T.match(o.MATCH_URL_WISTIA)[1],
                        C = "wistia_embed wistia_async_".concat(L),
                        j = {
                            width: "100%",
                            height: "100%"
                        };
                    return n.default.createElement("div", {
                        id: this.playerID,
                        key: L,
                        className: C,
                        style: j
                    })
                }
            }]), p
        }(n.Component);
    e.default = d, S(d, "displayName", "Wistia"), S(d, "canPlay", o.canPlay.wistia), S(d, "loopOnEnded", !0)
})(mh);
var gh = {};
(function (e) {
    function t(s) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (p) {
            return typeof p
        } : t = function (p) {
            return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p
        }, t(s)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var s = new WeakMap;
        return i = function () {
            return s
        }, s
    }

    function a(s) {
        if (s && s.__esModule) return s;
        if (s === null || t(s) !== "object" && typeof s != "function") return {
            default: s
        };
        var f = i();
        if (f && f.has(s)) return f.get(s);
        var p = {},
            v = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var T in s)
            if (Object.prototype.hasOwnProperty.call(s, T)) {
                var L = v ? Object.getOwnPropertyDescriptor(s, T) : null;
                L && (L.get || L.set) ? Object.defineProperty(p, T, L) : p[T] = s[T]
            } return p.default = s, f && f.set(s, p), p
    }

    function u(s, f) {
        var p = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            f && (v = v.filter(function (T) {
                return Object.getOwnPropertyDescriptor(s, T).enumerable
            })), p.push.apply(p, v)
        }
        return p
    }

    function l(s) {
        for (var f = 1; f < arguments.length; f++) {
            var p = arguments[f] != null ? arguments[f] : {};
            f % 2 ? u(Object(p), !0).forEach(function (v) {
                S(s, v, p[v])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(p)) : u(Object(p)).forEach(function (v) {
                Object.defineProperty(s, v, Object.getOwnPropertyDescriptor(p, v))
            })
        }
        return s
    }

    function c(s, f) {
        if (!(s instanceof f)) throw new TypeError("Cannot call a class as a function")
    }

    function y(s, f) {
        for (var p = 0; p < f.length; p++) {
            var v = f[p];
            v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(s, v.key, v)
        }
    }

    function E(s, f, p) {
        return f && y(s.prototype, f), p && y(s, p), s
    }

    function h(s, f) {
        if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function");
        s.prototype = Object.create(f && f.prototype, {
            constructor: {
                value: s,
                writable: !0,
                configurable: !0
            }
        }), f && P(s, f)
    }

    function P(s, f) {
        return P = Object.setPrototypeOf || function (v, T) {
            return v.__proto__ = T, v
        }, P(s, f)
    }

    function R(s) {
        var f = w();
        return function () {
            var v = _(s),
                T;
            if (f) {
                var L = _(this).constructor;
                T = Reflect.construct(v, arguments, L)
            } else T = v.apply(this, arguments);
            return x(this, T)
        }
    }

    function x(s, f) {
        return f && (t(f) === "object" || typeof f == "function") ? f : m(s)
    }

    function m(s) {
        if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s
    }

    function w() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function _(s) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function (p) {
            return p.__proto__ || Object.getPrototypeOf(p)
        }, _(s)
    }

    function S(s, f, p) {
        return f in s ? Object.defineProperty(s, f, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[f] = p, s
    }
    var k = "https://player.twitch.tv/js/embed/v1.js",
        O = "Twitch",
        g = "twitch-player-",
        d = function (s) {
            h(p, s);
            var f = R(p);

            function p() {
                var v;
                c(this, p);
                for (var T = arguments.length, L = new Array(T), C = 0; C < T; C++) L[C] = arguments[C];
                return v = f.call.apply(f, [this].concat(L)), S(m(v), "callPlayer", r.callPlayer), S(m(v), "playerID", v.props.config.playerId || "".concat(g).concat((0, r.randomString)())), S(m(v), "mute", function () {
                    v.callPlayer("setMuted", !0)
                }), S(m(v), "unmute", function () {
                    v.callPlayer("setMuted", !1)
                }), v
            }
            return E(p, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (T, L) {
                    var C = this,
                        j = this.props,
                        N = j.playsinline,
                        U = j.onError,
                        I = j.config,
                        M = j.controls,
                        D = o.MATCH_URL_TWITCH_CHANNEL.test(T),
                        b = D ? T.match(o.MATCH_URL_TWITCH_CHANNEL)[1] : T.match(o.MATCH_URL_TWITCH_VIDEO)[1];
                    if (L) {
                        D ? this.player.setChannel(b) : this.player.setVideo("v" + b);
                        return
                    }(0, r.getSDK)(k, O).then(function (V) {
                        C.player = new V.Player(C.playerID, l({
                            video: D ? "" : b,
                            channel: D ? b : "",
                            height: "100%",
                            width: "100%",
                            playsinline: N,
                            autoplay: C.props.playing,
                            muted: C.props.muted,
                            controls: D ? !0 : M,
                            time: (0, r.parseStartTime)(T)
                        }, I.options));
                        var A = V.Player,
                            F = A.READY,
                            H = A.PLAYING,
                            X = A.PAUSE,
                            q = A.ENDED,
                            J = A.ONLINE,
                            fe = A.OFFLINE;
                        C.player.addEventListener(F, C.props.onReady), C.player.addEventListener(H, C.props.onPlay), C.player.addEventListener(X, C.props.onPause), C.player.addEventListener(q, C.props.onEnded), C.player.addEventListener(J, C.props.onLoaded), C.player.addEventListener(fe, C.props.onLoaded)
                    }, U)
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "seekTo",
                value: function (T) {
                    this.callPlayer("seek", T)
                }
            }, {
                key: "setVolume",
                value: function (T) {
                    this.callPlayer("setVolume", T)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.callPlayer("getDuration")
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.callPlayer("getCurrentTime")
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return null
                }
            }, {
                key: "render",
                value: function () {
                    var T = {
                        width: "100%",
                        height: "100%"
                    };
                    return n.default.createElement("div", {
                        style: T,
                        id: this.playerID
                    })
                }
            }]), p
        }(n.Component);
    e.default = d, S(d, "displayName", "Twitch"), S(d, "canPlay", o.canPlay.twitch), S(d, "loopOnEnded", !0)
})(gh);
var Ph = {};
(function (e) {
    function t(C) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (N) {
            return typeof N
        } : t = function (N) {
            return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N
        }, t(C)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var C = new WeakMap;
        return i = function () {
            return C
        }, C
    }

    function a(C) {
        if (C && C.__esModule) return C;
        if (C === null || t(C) !== "object" && typeof C != "function") return {
            default: C
        };
        var j = i();
        if (j && j.has(C)) return j.get(C);
        var N = {},
            U = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var I in C)
            if (Object.prototype.hasOwnProperty.call(C, I)) {
                var M = U ? Object.getOwnPropertyDescriptor(C, I) : null;
                M && (M.get || M.set) ? Object.defineProperty(N, I, M) : N[I] = C[I]
            } return N.default = C, j && j.set(C, N), N
    }

    function u(C, j) {
        var N = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
            var U = Object.getOwnPropertySymbols(C);
            j && (U = U.filter(function (I) {
                return Object.getOwnPropertyDescriptor(C, I).enumerable
            })), N.push.apply(N, U)
        }
        return N
    }

    function l(C) {
        for (var j = 1; j < arguments.length; j++) {
            var N = arguments[j] != null ? arguments[j] : {};
            j % 2 ? u(Object(N), !0).forEach(function (U) {
                f(C, U, N[U])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(N)) : u(Object(N)).forEach(function (U) {
                Object.defineProperty(C, U, Object.getOwnPropertyDescriptor(N, U))
            })
        }
        return C
    }

    function c(C, j) {
        return R(C) || P(C, j) || E(C, j) || y()
    }

    function y() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function E(C, j) {
        if (!!C) {
            if (typeof C == "string") return h(C, j);
            var N = Object.prototype.toString.call(C).slice(8, -1);
            if (N === "Object" && C.constructor && (N = C.constructor.name), N === "Map" || N === "Set") return Array.from(C);
            if (N === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)) return h(C, j)
        }
    }

    function h(C, j) {
        (j == null || j > C.length) && (j = C.length);
        for (var N = 0, U = new Array(j); N < j; N++) U[N] = C[N];
        return U
    }

    function P(C, j) {
        if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(C)))) {
            var N = [],
                U = !0,
                I = !1,
                M = void 0;
            try {
                for (var D = C[Symbol.iterator](), b; !(U = (b = D.next()).done) && (N.push(b.value), !(j && N.length === j)); U = !0);
            } catch (V) {
                I = !0, M = V
            } finally {
                try {
                    !U && D.return != null && D.return()
                } finally {
                    if (I) throw M
                }
            }
            return N
        }
    }

    function R(C) {
        if (Array.isArray(C)) return C
    }

    function x(C, j) {
        if (!(C instanceof j)) throw new TypeError("Cannot call a class as a function")
    }

    function m(C, j) {
        for (var N = 0; N < j.length; N++) {
            var U = j[N];
            U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(C, U.key, U)
        }
    }

    function w(C, j, N) {
        return j && m(C.prototype, j), N && m(C, N), C
    }

    function _(C, j) {
        if (typeof j != "function" && j !== null) throw new TypeError("Super expression must either be null or a function");
        C.prototype = Object.create(j && j.prototype, {
            constructor: {
                value: C,
                writable: !0,
                configurable: !0
            }
        }), j && S(C, j)
    }

    function S(C, j) {
        return S = Object.setPrototypeOf || function (U, I) {
            return U.__proto__ = I, U
        }, S(C, j)
    }

    function k(C) {
        var j = d();
        return function () {
            var U = s(C),
                I;
            if (j) {
                var M = s(this).constructor;
                I = Reflect.construct(U, arguments, M)
            } else I = U.apply(this, arguments);
            return O(this, I)
        }
    }

    function O(C, j) {
        return j && (t(j) === "object" || typeof j == "function") ? j : g(C)
    }

    function g(C) {
        if (C === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return C
    }

    function d() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function s(C) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function (N) {
            return N.__proto__ || Object.getPrototypeOf(N)
        }, s(C)
    }

    function f(C, j, N) {
        return j in C ? Object.defineProperty(C, j, {
            value: N,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : C[j] = N, C
    }
    var p = "https://api.dmcdn.net/all.js",
        v = "DM",
        T = "dmAsyncInit",
        L = function (C) {
            _(N, C);
            var j = k(N);

            function N() {
                var U;
                x(this, N);
                for (var I = arguments.length, M = new Array(I), D = 0; D < I; D++) M[D] = arguments[D];
                return U = j.call.apply(j, [this].concat(M)), f(g(U), "callPlayer", r.callPlayer), f(g(U), "onDurationChange", function () {
                    var b = U.getDuration();
                    U.props.onDuration(b)
                }), f(g(U), "mute", function () {
                    U.callPlayer("setMuted", !0)
                }), f(g(U), "unmute", function () {
                    U.callPlayer("setMuted", !1)
                }), f(g(U), "ref", function (b) {
                    U.container = b
                }), U
            }
            return w(N, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (I) {
                    var M = this,
                        D = this.props,
                        b = D.controls,
                        V = D.config,
                        A = D.onError,
                        F = D.playing,
                        H = I.match(o.MATCH_URL_DAILYMOTION),
                        X = c(H, 2),
                        q = X[1];
                    if (this.player) {
                        this.player.load(q, {
                            start: (0, r.parseStartTime)(I),
                            autoplay: F
                        });
                        return
                    }(0, r.getSDK)(p, v, T, function (J) {
                        return J.player
                    }).then(function (J) {
                        if (!!M.container) {
                            var fe = J.player;
                            M.player = new fe(M.container, {
                                width: "100%",
                                height: "100%",
                                video: q,
                                params: l({
                                    controls: b,
                                    autoplay: M.props.playing,
                                    mute: M.props.muted,
                                    start: (0, r.parseStartTime)(I),
                                    origin: window.location.origin
                                }, V.params),
                                events: {
                                    apiready: M.props.onReady,
                                    seeked: function () {
                                        return M.props.onSeek(M.player.currentTime)
                                    },
                                    video_end: M.props.onEnded,
                                    durationchange: M.onDurationChange,
                                    pause: M.props.onPause,
                                    playing: M.props.onPlay,
                                    waiting: M.props.onBuffer,
                                    error: function (Qe) {
                                        return A(Qe)
                                    }
                                }
                            })
                        }
                    }, A)
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {}
            }, {
                key: "seekTo",
                value: function (I) {
                    this.callPlayer("seek", I)
                }
            }, {
                key: "setVolume",
                value: function (I) {
                    this.callPlayer("setVolume", I)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.player.duration || null
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.player.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return this.player.bufferedTime
                }
            }, {
                key: "render",
                value: function () {
                    var I = this.props.display,
                        M = {
                            width: "100%",
                            height: "100%",
                            display: I
                        };
                    return n.default.createElement("div", {
                        style: M
                    }, n.default.createElement("div", {
                        ref: this.ref
                    }))
                }
            }]), N
        }(n.Component);
    e.default = L, f(L, "displayName", "DailyMotion"), f(L, "canPlay", o.canPlay.dailymotion), f(L, "loopOnEnded", !0)
})(Ph);
var wh = {};
(function (e) {
    function t(d) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (f) {
            return typeof f
        } : t = function (f) {
            return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f
        }, t(d)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var d = new WeakMap;
        return i = function () {
            return d
        }, d
    }

    function a(d) {
        if (d && d.__esModule) return d;
        if (d === null || t(d) !== "object" && typeof d != "function") return {
            default: d
        };
        var s = i();
        if (s && s.has(d)) return s.get(d);
        var f = {},
            p = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var v in d)
            if (Object.prototype.hasOwnProperty.call(d, v)) {
                var T = p ? Object.getOwnPropertyDescriptor(d, v) : null;
                T && (T.get || T.set) ? Object.defineProperty(f, v, T) : f[v] = d[v]
            } return f.default = d, s && s.set(d, f), f
    }

    function u(d, s) {
        var f = Object.keys(d);
        if (Object.getOwnPropertySymbols) {
            var p = Object.getOwnPropertySymbols(d);
            s && (p = p.filter(function (v) {
                return Object.getOwnPropertyDescriptor(d, v).enumerable
            })), f.push.apply(f, p)
        }
        return f
    }

    function l(d) {
        for (var s = 1; s < arguments.length; s++) {
            var f = arguments[s] != null ? arguments[s] : {};
            s % 2 ? u(Object(f), !0).forEach(function (p) {
                S(d, p, f[p])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(f)) : u(Object(f)).forEach(function (p) {
                Object.defineProperty(d, p, Object.getOwnPropertyDescriptor(f, p))
            })
        }
        return d
    }

    function c(d, s) {
        if (!(d instanceof s)) throw new TypeError("Cannot call a class as a function")
    }

    function y(d, s) {
        for (var f = 0; f < s.length; f++) {
            var p = s[f];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p)
        }
    }

    function E(d, s, f) {
        return s && y(d.prototype, s), f && y(d, f), d
    }

    function h(d, s) {
        if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
        d.prototype = Object.create(s && s.prototype, {
            constructor: {
                value: d,
                writable: !0,
                configurable: !0
            }
        }), s && P(d, s)
    }

    function P(d, s) {
        return P = Object.setPrototypeOf || function (p, v) {
            return p.__proto__ = v, p
        }, P(d, s)
    }

    function R(d) {
        var s = w();
        return function () {
            var p = _(d),
                v;
            if (s) {
                var T = _(this).constructor;
                v = Reflect.construct(p, arguments, T)
            } else v = p.apply(this, arguments);
            return x(this, v)
        }
    }

    function x(d, s) {
        return s && (t(s) === "object" || typeof s == "function") ? s : m(d)
    }

    function m(d) {
        if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return d
    }

    function w() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function _(d) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) {
            return f.__proto__ || Object.getPrototypeOf(f)
        }, _(d)
    }

    function S(d, s, f) {
        return s in d ? Object.defineProperty(d, s, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : d[s] = f, d
    }
    var k = "https://widget.mixcloud.com/media/js/widgetApi.js",
        O = "Mixcloud",
        g = function (d) {
            h(f, d);
            var s = R(f);

            function f() {
                var p;
                c(this, f);
                for (var v = arguments.length, T = new Array(v), L = 0; L < v; L++) T[L] = arguments[L];
                return p = s.call.apply(s, [this].concat(T)), S(m(p), "callPlayer", r.callPlayer), S(m(p), "duration", null), S(m(p), "currentTime", null), S(m(p), "secondsLoaded", null), S(m(p), "mute", function () {}), S(m(p), "unmute", function () {}), S(m(p), "ref", function (C) {
                    p.iframe = C
                }), p
            }
            return E(f, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (v) {
                    var T = this;
                    (0, r.getSDK)(k, O).then(function (L) {
                        T.player = L.PlayerWidget(T.iframe), T.player.ready.then(function () {
                            T.player.events.play.on(T.props.onPlay), T.player.events.pause.on(T.props.onPause), T.player.events.ended.on(T.props.onEnded), T.player.events.error.on(T.props.error), T.player.events.progress.on(function (C, j) {
                                T.currentTime = C, T.duration = j
                            }), T.props.onReady()
                        })
                    }, this.props.onError)
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {}
            }, {
                key: "seekTo",
                value: function (v) {
                    this.callPlayer("seek", v)
                }
            }, {
                key: "setVolume",
                value: function (v) {}
            }, {
                key: "getDuration",
                value: function () {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return null
                }
            }, {
                key: "render",
                value: function () {
                    var v = this.props,
                        T = v.url,
                        L = v.config,
                        C = T.match(o.MATCH_URL_MIXCLOUD)[1],
                        j = {
                            width: "100%",
                            height: "100%"
                        },
                        N = (0, r.queryString)(l(l({}, L.options), {}, {
                            feed: "/".concat(C, "/")
                        }));
                    return n.default.createElement("iframe", {
                        key: C,
                        ref: this.ref,
                        style: j,
                        src: "https://www.mixcloud.com/widget/iframe/?".concat(N),
                        frameBorder: "0"
                    })
                }
            }]), f
        }(n.Component);
    e.default = g, S(g, "displayName", "Mixcloud"), S(g, "canPlay", o.canPlay.mixcloud), S(g, "loopOnEnded", !0)
})(wh);
var _h = {};
(function (e) {
    function t(s) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (p) {
            return typeof p
        } : t = function (p) {
            return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p
        }, t(s)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var s = new WeakMap;
        return i = function () {
            return s
        }, s
    }

    function a(s) {
        if (s && s.__esModule) return s;
        if (s === null || t(s) !== "object" && typeof s != "function") return {
            default: s
        };
        var f = i();
        if (f && f.has(s)) return f.get(s);
        var p = {},
            v = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var T in s)
            if (Object.prototype.hasOwnProperty.call(s, T)) {
                var L = v ? Object.getOwnPropertyDescriptor(s, T) : null;
                L && (L.get || L.set) ? Object.defineProperty(p, T, L) : p[T] = s[T]
            } return p.default = s, f && f.set(s, p), p
    }

    function u(s, f) {
        var p = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            f && (v = v.filter(function (T) {
                return Object.getOwnPropertyDescriptor(s, T).enumerable
            })), p.push.apply(p, v)
        }
        return p
    }

    function l(s) {
        for (var f = 1; f < arguments.length; f++) {
            var p = arguments[f] != null ? arguments[f] : {};
            f % 2 ? u(Object(p), !0).forEach(function (v) {
                S(s, v, p[v])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(p)) : u(Object(p)).forEach(function (v) {
                Object.defineProperty(s, v, Object.getOwnPropertyDescriptor(p, v))
            })
        }
        return s
    }

    function c(s, f) {
        if (!(s instanceof f)) throw new TypeError("Cannot call a class as a function")
    }

    function y(s, f) {
        for (var p = 0; p < f.length; p++) {
            var v = f[p];
            v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(s, v.key, v)
        }
    }

    function E(s, f, p) {
        return f && y(s.prototype, f), p && y(s, p), s
    }

    function h(s, f) {
        if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function");
        s.prototype = Object.create(f && f.prototype, {
            constructor: {
                value: s,
                writable: !0,
                configurable: !0
            }
        }), f && P(s, f)
    }

    function P(s, f) {
        return P = Object.setPrototypeOf || function (v, T) {
            return v.__proto__ = T, v
        }, P(s, f)
    }

    function R(s) {
        var f = w();
        return function () {
            var v = _(s),
                T;
            if (f) {
                var L = _(this).constructor;
                T = Reflect.construct(v, arguments, L)
            } else T = v.apply(this, arguments);
            return x(this, T)
        }
    }

    function x(s, f) {
        return f && (t(f) === "object" || typeof f == "function") ? f : m(s)
    }

    function m(s) {
        if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s
    }

    function w() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function _(s) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function (p) {
            return p.__proto__ || Object.getPrototypeOf(p)
        }, _(s)
    }

    function S(s, f, p) {
        return f in s ? Object.defineProperty(s, f, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[f] = p, s
    }
    var k = "https://play.vidyard.com/embed/v4.js",
        O = "VidyardV4",
        g = "onVidyardAPI",
        d = function (s) {
            h(p, s);
            var f = R(p);

            function p() {
                var v;
                c(this, p);
                for (var T = arguments.length, L = new Array(T), C = 0; C < T; C++) L[C] = arguments[C];
                return v = f.call.apply(f, [this].concat(L)), S(m(v), "callPlayer", r.callPlayer), S(m(v), "mute", function () {
                    v.setVolume(0)
                }), S(m(v), "unmute", function () {
                    v.props.volume !== null && v.setVolume(v.props.volume)
                }), S(m(v), "ref", function (j) {
                    v.container = j
                }), v
            }
            return E(p, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (T) {
                    var L = this,
                        C = this.props,
                        j = C.playing,
                        N = C.config,
                        U = C.onError,
                        I = C.onDuration,
                        M = T && T.match(o.MATCH_URL_VIDYARD)[1];
                    this.player && this.stop(), (0, r.getSDK)(k, O, g).then(function (D) {
                        !L.container || (D.api.addReadyListener(function (b, V) {
                            L.player = V, L.player.on("ready", L.props.onReady), L.player.on("play", L.props.onPlay), L.player.on("pause", L.props.onPause), L.player.on("seek", L.props.onSeek), L.player.on("playerComplete", L.props.onEnded)
                        }, M), D.api.renderPlayer(l({
                            uuid: M,
                            container: L.container,
                            autoplay: j ? 1 : 0
                        }, N.options)), D.api.getPlayerMetadata(M).then(function (b) {
                            L.duration = b.length_in_seconds, I(b.length_in_seconds)
                        }))
                    }, U)
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {
                    window.VidyardV4.api.destroyPlayer(this.player)
                }
            }, {
                key: "seekTo",
                value: function (T) {
                    this.callPlayer("seek", T)
                }
            }, {
                key: "setVolume",
                value: function (T) {
                    this.callPlayer("setVolume", T)
                }
            }, {
                key: "setPlaybackRate",
                value: function (T) {
                    this.callPlayer("setPlaybackSpeed", T)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.callPlayer("currentTime")
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return null
                }
            }, {
                key: "render",
                value: function () {
                    var T = this.props.display,
                        L = {
                            width: "100%",
                            height: "100%",
                            display: T
                        };
                    return n.default.createElement("div", {
                        style: L
                    }, n.default.createElement("div", {
                        ref: this.ref
                    }))
                }
            }]), p
        }(n.Component);
    e.default = d, S(d, "displayName", "Vidyard"), S(d, "canPlay", o.canPlay.vidyard)
})(_h);
var Sh = {};
(function (e) {
    function t(O) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (d) {
            return typeof d
        } : t = function (d) {
            return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        }, t(O)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var O = new WeakMap;
        return i = function () {
            return O
        }, O
    }

    function a(O) {
        if (O && O.__esModule) return O;
        if (O === null || t(O) !== "object" && typeof O != "function") return {
            default: O
        };
        var g = i();
        if (g && g.has(O)) return g.get(O);
        var d = {},
            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var f in O)
            if (Object.prototype.hasOwnProperty.call(O, f)) {
                var p = s ? Object.getOwnPropertyDescriptor(O, f) : null;
                p && (p.get || p.set) ? Object.defineProperty(d, f, p) : d[f] = O[f]
            } return d.default = O, g && g.set(O, d), d
    }

    function u(O, g) {
        if (!(O instanceof g)) throw new TypeError("Cannot call a class as a function")
    }

    function l(O, g) {
        for (var d = 0; d < g.length; d++) {
            var s = g[d];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(O, s.key, s)
        }
    }

    function c(O, g, d) {
        return g && l(O.prototype, g), d && l(O, d), O
    }

    function y(O, g) {
        if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function");
        O.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: O,
                writable: !0,
                configurable: !0
            }
        }), g && E(O, g)
    }

    function E(O, g) {
        return E = Object.setPrototypeOf || function (s, f) {
            return s.__proto__ = f, s
        }, E(O, g)
    }

    function h(O) {
        var g = x();
        return function () {
            var s = m(O),
                f;
            if (g) {
                var p = m(this).constructor;
                f = Reflect.construct(s, arguments, p)
            } else f = s.apply(this, arguments);
            return P(this, f)
        }
    }

    function P(O, g) {
        return g && (t(g) === "object" || typeof g == "function") ? g : R(O)
    }

    function R(O) {
        if (O === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return O
    }

    function x() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function m(O) {
        return m = Object.setPrototypeOf ? Object.getPrototypeOf : function (d) {
            return d.__proto__ || Object.getPrototypeOf(d)
        }, m(O)
    }

    function w(O, g, d) {
        return g in O ? Object.defineProperty(O, g, {
            value: d,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : O[g] = d, O
    }
    var _ = "https://cdn.embed.ly/player-0.1.0.min.js",
        S = "playerjs",
        k = function (O) {
            y(d, O);
            var g = h(d);

            function d() {
                var s;
                u(this, d);
                for (var f = arguments.length, p = new Array(f), v = 0; v < f; v++) p[v] = arguments[v];
                return s = g.call.apply(g, [this].concat(p)), w(R(s), "callPlayer", r.callPlayer), w(R(s), "duration", null), w(R(s), "currentTime", null), w(R(s), "secondsLoaded", null), w(R(s), "mute", function () {
                    s.callPlayer("mute")
                }), w(R(s), "unmute", function () {
                    s.callPlayer("unmute")
                }), w(R(s), "ref", function (T) {
                    s.iframe = T
                }), s
            }
            return c(d, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this)
                }
            }, {
                key: "load",
                value: function (f) {
                    var p = this;
                    (0, r.getSDK)(_, S).then(function (v) {
                        !p.iframe || (p.player = new v.Player(p.iframe), p.player.on("ready", function () {
                            p.player.isReady = !0, p.player.on("play", p.props.onPlay), p.player.on("pause", p.props.onPause), p.player.on("seeked", p.props.onSeek), p.player.on("ended", p.props.onEnded), p.player.on("error", p.props.onError), p.player.on("timeupdate", function (T) {
                                var L = T.duration,
                                    C = T.seconds;
                                p.duration = L, p.currentTime = C
                            }), p.player.on("buffered", function (T) {
                                var L = T.percent;
                                p.duration && (p.secondsLoaded = p.duration * L)
                            }), p.player.setLoop(p.props.loop), p.props.muted && p.player.mute(), setTimeout(function () {
                                p.props.onReady()
                            })
                        }))
                    }, this.props.onError)
                }
            }, {
                key: "play",
                value: function () {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function () {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function () {}
            }, {
                key: "seekTo",
                value: function (f) {
                    this.callPlayer("setCurrentTime", f)
                }
            }, {
                key: "setVolume",
                value: function (f) {
                    this.callPlayer("setVolume", f)
                }
            }, {
                key: "setLoop",
                value: function (f) {
                    this.callPlayer("setLoop", f)
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return this.secondsLoaded
                }
            }, {
                key: "render",
                value: function () {
                    var f = {
                        width: "100%",
                        height: "100%"
                    };
                    return n.default.createElement("iframe", {
                        ref: this.ref,
                        src: this.props.url,
                        frameBorder: "0",
                        scrolling: "no",
                        style: f,
                        allowFullScreen: !0,
                        allow: "encrypted-media",
                        referrerPolicy: "no-referrer-when-downgrade"
                    })
                }
            }]), d
        }(n.Component);
    e.default = k, w(k, "displayName", "Kaltura"), w(k, "canPlay", o.canPlay.kaltura)
})(Sh);
var Oh = {};
(function (e) {
    function t(N) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (I) {
            return typeof I
        } : t = function (I) {
            return I && typeof Symbol == "function" && I.constructor === Symbol && I !== Symbol.prototype ? "symbol" : typeof I
        }, t(N)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = a(B.exports),
        r = Z,
        o = K;

    function i() {
        if (typeof WeakMap != "function") return null;
        var N = new WeakMap;
        return i = function () {
            return N
        }, N
    }

    function a(N) {
        if (N && N.__esModule) return N;
        if (N === null || t(N) !== "object" && typeof N != "function") return {
            default: N
        };
        var U = i();
        if (U && U.has(N)) return U.get(N);
        var I = {},
            M = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var D in N)
            if (Object.prototype.hasOwnProperty.call(N, D)) {
                var b = M ? Object.getOwnPropertyDescriptor(N, D) : null;
                b && (b.get || b.set) ? Object.defineProperty(I, D, b) : I[D] = N[D]
            } return I.default = N, U && U.set(N, I), I
    }

    function u() {
        return u = Object.assign || function (N) {
            for (var U = 1; U < arguments.length; U++) {
                var I = arguments[U];
                for (var M in I) Object.prototype.hasOwnProperty.call(I, M) && (N[M] = I[M])
            }
            return N
        }, u.apply(this, arguments)
    }

    function l(N, U) {
        if (!(N instanceof U)) throw new TypeError("Cannot call a class as a function")
    }

    function c(N, U) {
        for (var I = 0; I < U.length; I++) {
            var M = U[I];
            M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(N, M.key, M)
        }
    }

    function y(N, U, I) {
        return U && c(N.prototype, U), I && c(N, I), N
    }

    function E(N, U) {
        if (typeof U != "function" && U !== null) throw new TypeError("Super expression must either be null or a function");
        N.prototype = Object.create(U && U.prototype, {
            constructor: {
                value: N,
                writable: !0,
                configurable: !0
            }
        }), U && h(N, U)
    }

    function h(N, U) {
        return h = Object.setPrototypeOf || function (M, D) {
            return M.__proto__ = D, M
        }, h(N, U)
    }

    function P(N) {
        var U = m();
        return function () {
            var M = w(N),
                D;
            if (U) {
                var b = w(this).constructor;
                D = Reflect.construct(M, arguments, b)
            } else D = M.apply(this, arguments);
            return R(this, D)
        }
    }

    function R(N, U) {
        return U && (t(U) === "object" || typeof U == "function") ? U : x(N)
    }

    function x(N) {
        if (N === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return N
    }

    function m() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function w(N) {
        return w = Object.setPrototypeOf ? Object.getPrototypeOf : function (I) {
            return I.__proto__ || Object.getPrototypeOf(I)
        }, w(N)
    }

    function _(N, U, I) {
        return U in N ? Object.defineProperty(N, U, {
            value: I,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : N[U] = I, N
    }
    var S = typeof navigator != "undefined",
        k = S && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1,
        O = S && (/iPad|iPhone|iPod/.test(navigator.userAgent) || k) && !window.MSStream,
        g = "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",
        d = "Hls",
        s = "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",
        f = "dashjs",
        p = "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",
        v = "flvjs",
        T = /www\.dropbox\.com\/.+/,
        L = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,
        C = "https://videodelivery.net/{id}/manifest/video.m3u8",
        j = function (N) {
            E(I, N);
            var U = P(I);

            function I() {
                var M;
                l(this, I);
                for (var D = arguments.length, b = new Array(D), V = 0; V < D; V++) b[V] = arguments[V];
                return M = U.call.apply(U, [this].concat(b)), _(x(M), "onReady", function () {
                    var A;
                    return (A = M.props).onReady.apply(A, arguments)
                }), _(x(M), "onPlay", function () {
                    var A;
                    return (A = M.props).onPlay.apply(A, arguments)
                }), _(x(M), "onBuffer", function () {
                    var A;
                    return (A = M.props).onBuffer.apply(A, arguments)
                }), _(x(M), "onBufferEnd", function () {
                    var A;
                    return (A = M.props).onBufferEnd.apply(A, arguments)
                }), _(x(M), "onPause", function () {
                    var A;
                    return (A = M.props).onPause.apply(A, arguments)
                }), _(x(M), "onEnded", function () {
                    var A;
                    return (A = M.props).onEnded.apply(A, arguments)
                }), _(x(M), "onError", function () {
                    var A;
                    return (A = M.props).onError.apply(A, arguments)
                }), _(x(M), "onEnablePIP", function () {
                    var A;
                    return (A = M.props).onEnablePIP.apply(A, arguments)
                }), _(x(M), "onDisablePIP", function (A) {
                    var F = M.props,
                        H = F.onDisablePIP,
                        X = F.playing;
                    H(A), X && M.play()
                }), _(x(M), "onPresentationModeChange", function (A) {
                    if (M.player && (0, r.supportsWebKitPresentationMode)(M.player)) {
                        var F = M.player.webkitPresentationMode;
                        F === "picture-in-picture" ? M.onEnablePIP(A) : F === "inline" && M.onDisablePIP(A)
                    }
                }), _(x(M), "onSeek", function (A) {
                    M.props.onSeek(A.target.currentTime)
                }), _(x(M), "mute", function () {
                    M.player.muted = !0
                }), _(x(M), "unmute", function () {
                    M.player.muted = !1
                }), _(x(M), "renderSourceElement", function (A, F) {
                    return typeof A == "string" ? n.default.createElement("source", {
                        key: F,
                        src: A
                    }) : n.default.createElement("source", u({
                        key: F
                    }, A))
                }), _(x(M), "renderTrack", function (A, F) {
                    return n.default.createElement("track", u({
                        key: F
                    }, A))
                }), _(x(M), "ref", function (A) {
                    M.player && (M.prevPlayer = M.player), M.player = A
                }), M
            }
            return y(I, [{
                key: "componentDidMount",
                value: function () {
                    this.props.onMount && this.props.onMount(this), this.addListeners(this.player), O && this.player.load()
                }
            }, {
                key: "componentDidUpdate",
                value: function (D) {
                    this.shouldUseAudio(this.props) !== this.shouldUseAudio(D) && (this.removeListeners(this.prevPlayer, D.url), this.addListeners(this.player)), this.props.url !== D.url && !(0, r.isMediaStream)(this.props.url) && (this.player.srcObject = null)
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    this.removeListeners(this.player), this.hls && this.hls.destroy()
                }
            }, {
                key: "addListeners",
                value: function (D) {
                    var b = this.props,
                        V = b.url,
                        A = b.playsinline;
                    D.addEventListener("play", this.onPlay), D.addEventListener("waiting", this.onBuffer), D.addEventListener("playing", this.onBufferEnd), D.addEventListener("pause", this.onPause), D.addEventListener("seeked", this.onSeek), D.addEventListener("ended", this.onEnded), D.addEventListener("error", this.onError), D.addEventListener("enterpictureinpicture", this.onEnablePIP), D.addEventListener("leavepictureinpicture", this.onDisablePIP), D.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(V) || D.addEventListener("canplay", this.onReady), A && (D.setAttribute("playsinline", ""), D.setAttribute("webkit-playsinline", ""), D.setAttribute("x5-playsinline", ""))
                }
            }, {
                key: "removeListeners",
                value: function (D, b) {
                    D.removeEventListener("canplay", this.onReady), D.removeEventListener("play", this.onPlay), D.removeEventListener("waiting", this.onBuffer), D.removeEventListener("playing", this.onBufferEnd), D.removeEventListener("pause", this.onPause), D.removeEventListener("seeked", this.onSeek), D.removeEventListener("ended", this.onEnded), D.removeEventListener("error", this.onError), D.removeEventListener("enterpictureinpicture", this.onEnablePIP), D.removeEventListener("leavepictureinpicture", this.onDisablePIP), D.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(b) || D.removeEventListener("canplay", this.onReady)
                }
            }, {
                key: "shouldUseAudio",
                value: function (D) {
                    return D.config.forceVideo || D.config.attributes.poster ? !1 : o.AUDIO_EXTENSIONS.test(D.url) || D.config.forceAudio
                }
            }, {
                key: "shouldUseHLS",
                value: function (D) {
                    return this.props.config.forceHLS ? !0 : O ? !1 : o.HLS_EXTENSIONS.test(D) || L.test(D)
                }
            }, {
                key: "shouldUseDASH",
                value: function (D) {
                    return o.DASH_EXTENSIONS.test(D) || this.props.config.forceDASH
                }
            }, {
                key: "shouldUseFLV",
                value: function (D) {
                    return o.FLV_EXTENSIONS.test(D) || this.props.config.forceFLV
                }
            }, {
                key: "load",
                value: function (D) {
                    var b = this,
                        V = this.props.config,
                        A = V.hlsVersion,
                        F = V.hlsOptions,
                        H = V.dashVersion,
                        X = V.flvVersion;
                    if (this.hls && this.hls.destroy(), this.dash && this.dash.reset(), this.shouldUseHLS(D) && (0, r.getSDK)(g.replace("VERSION", A), d).then(function (q) {
                            if (b.hls = new q(F), b.hls.on(q.Events.MANIFEST_PARSED, function () {
                                    b.props.onReady()
                                }), b.hls.on(q.Events.ERROR, function (fe, Ke) {
                                    b.props.onError(fe, Ke, b.hls, q)
                                }), L.test(D)) {
                                var J = D.match(L)[1];
                                b.hls.loadSource(C.replace("{id}", J))
                            } else b.hls.loadSource(D);
                            b.hls.attachMedia(b.player), b.props.onLoaded()
                        }), this.shouldUseDASH(D) && (0, r.getSDK)(s.replace("VERSION", H), f).then(function (q) {
                            b.dash = q.MediaPlayer().create(), b.dash.initialize(b.player, D, b.props.playing), b.dash.on("error", b.props.onError), parseInt(H) < 3 ? b.dash.getDebug().setLogToBrowserConsole(!1) : b.dash.updateSettings({
                                debug: {
                                    logLevel: q.Debug.LOG_LEVEL_NONE
                                }
                            }), b.props.onLoaded()
                        }), this.shouldUseFLV(D) && (0, r.getSDK)(p.replace("VERSION", X), v).then(function (q) {
                            b.flv = q.createPlayer({
                                type: "flv",
                                url: D
                            }), b.flv.attachMediaElement(b.player), b.flv.load(), b.props.onLoaded()
                        }), D instanceof Array) this.player.load();
                    else if ((0, r.isMediaStream)(D)) try {
                        this.player.srcObject = D
                    } catch {
                        this.player.src = window.URL.createObjectURL(D)
                    }
                }
            }, {
                key: "play",
                value: function () {
                    var D = this.player.play();
                    D && D.catch(this.props.onError)
                }
            }, {
                key: "pause",
                value: function () {
                    this.player.pause()
                }
            }, {
                key: "stop",
                value: function () {
                    this.player.removeAttribute("src"), this.dash && this.dash.reset()
                }
            }, {
                key: "seekTo",
                value: function (D) {
                    this.player.currentTime = D
                }
            }, {
                key: "setVolume",
                value: function (D) {
                    this.player.volume = D
                }
            }, {
                key: "enablePIP",
                value: function () {
                    this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0, r.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "picture-in-picture" && this.player.webkitSetPresentationMode("picture-in-picture")
                }
            }, {
                key: "disablePIP",
                value: function () {
                    document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0, r.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "inline" && this.player.webkitSetPresentationMode("inline")
                }
            }, {
                key: "setPlaybackRate",
                value: function (D) {
                    this.player.playbackRate = D
                }
            }, {
                key: "getDuration",
                value: function () {
                    if (!this.player) return null;
                    var D = this.player,
                        b = D.duration,
                        V = D.seekable;
                    return b === 1 / 0 && V.length > 0 ? V.end(V.length - 1) : b
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.player ? this.player.currentTime : null
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    if (!this.player) return null;
                    var D = this.player.buffered;
                    if (D.length === 0) return 0;
                    var b = D.end(D.length - 1),
                        V = this.getDuration();
                    return b > V ? V : b
                }
            }, {
                key: "getSource",
                value: function (D) {
                    var b = this.shouldUseHLS(D),
                        V = this.shouldUseDASH(D),
                        A = this.shouldUseFLV(D);
                    if (!(D instanceof Array || (0, r.isMediaStream)(D) || b || V || A)) return T.test(D) ? D.replace("www.dropbox.com", "dl.dropboxusercontent.com") : D
                }
            }, {
                key: "render",
                value: function () {
                    var D = this.props,
                        b = D.url,
                        V = D.playing,
                        A = D.loop,
                        F = D.controls,
                        H = D.muted,
                        X = D.config,
                        q = D.width,
                        J = D.height,
                        fe = this.shouldUseAudio(this.props),
                        Ke = fe ? "audio" : "video",
                        Qe = {
                            width: q === "auto" ? q : "100%",
                            height: J === "auto" ? J : "100%"
                        };
                    return n.default.createElement(Ke, u({
                        ref: this.ref,
                        src: this.getSource(b),
                        style: Qe,
                        preload: "auto",
                        autoPlay: V || void 0,
                        controls: F,
                        muted: H,
                        loop: A
                    }, X.attributes), b instanceof Array && b.map(this.renderSourceElement), X.tracks.map(this.renderTrack))
                }
            }]), I
        }(n.Component);
    e.default = j, _(j, "displayName", "FilePlayer"), _(j, "canPlay", o.canPlay.file)
})(Oh);
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = B.exports,
        n = Z,
        r = K;

    function o(l) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? o = function (y) {
            return typeof y
        } : o = function (y) {
            return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y
        }, o(l)
    }

    function i() {
        if (typeof WeakMap != "function") return null;
        var l = new WeakMap;
        return i = function () {
            return l
        }, l
    }

    function a(l) {
        if (l && l.__esModule) return l;
        if (l === null || o(l) !== "object" && typeof l != "function") return {
            default: l
        };
        var c = i();
        if (c && c.has(l)) return c.get(l);
        var y = {},
            E = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var h in l)
            if (Object.prototype.hasOwnProperty.call(l, h)) {
                var P = E ? Object.getOwnPropertyDescriptor(l, h) : null;
                P && (P.get || P.set) ? Object.defineProperty(y, h, P) : y[h] = l[h]
            } return y.default = l, c && c.set(l, y), y
    }
    var u = [{
        key: "youtube",
        name: "YouTube",
        canPlay: r.canPlay.youtube,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(ph)
            })
        })
    }, {
        key: "soundcloud",
        name: "SoundCloud",
        canPlay: r.canPlay.soundcloud,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(dh)
            })
        })
    }, {
        key: "vimeo",
        name: "Vimeo",
        canPlay: r.canPlay.vimeo,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(yh)
            })
        })
    }, {
        key: "facebook",
        name: "Facebook",
        canPlay: r.canPlay.facebook,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(vh)
            })
        })
    }, {
        key: "streamable",
        name: "Streamable",
        canPlay: r.canPlay.streamable,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(hh)
            })
        })
    }, {
        key: "wistia",
        name: "Wistia",
        canPlay: r.canPlay.wistia,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(mh)
            })
        })
    }, {
        key: "twitch",
        name: "Twitch",
        canPlay: r.canPlay.twitch,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(gh)
            })
        })
    }, {
        key: "dailymotion",
        name: "DailyMotion",
        canPlay: r.canPlay.dailymotion,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(Ph)
            })
        })
    }, {
        key: "mixcloud",
        name: "Mixcloud",
        canPlay: r.canPlay.mixcloud,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(wh)
            })
        })
    }, {
        key: "vidyard",
        name: "Vidyard",
        canPlay: r.canPlay.vidyard,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(_h)
            })
        })
    }, {
        key: "kaltura",
        name: "Kaltura",
        canPlay: r.canPlay.kaltura,
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(Sh)
            })
        })
    }, {
        key: "file",
        name: "FilePlayer",
        canPlay: r.canPlay.file,
        canEnablePIP: function (c) {
            return r.canPlay.file(c) && (document.pictureInPictureEnabled || (0, n.supportsWebKitPresentationMode)()) && !r.AUDIO_EXTENSIONS.test(c)
        },
        lazyPlayer: (0, t.lazy)(function () {
            return Promise.resolve().then(function () {
                return a(Oh)
            })
        })
    }];
    e.default = u
})(zv);
var da = {},
    Eh = Number.isNaN || function (t) {
        return typeof t == "number" && t !== t
    };

function Z1(e, t) {
    return !!(e === t || Eh(e) && Eh(t))
}

function J1(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++)
        if (!Z1(e[n], t[n])) return !1;
    return !0
}

function eO(e, t) {
    t === void 0 && (t = J1);
    var n, r = [],
        o, i = !1;

    function a() {
        for (var u = [], l = 0; l < arguments.length; l++) u[l] = arguments[l];
        return i && n === this && t(u, r) || (o = e.apply(this, u), i = !0, n = this, r = u), o
    }
    return a
}
var tO = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: eO
    }),
    nO = Xh(tO),
    rO = typeof Element != "undefined",
    oO = typeof Map == "function",
    iO = typeof Set == "function",
    aO = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function ya(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var n, r, o;
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- != 0;)
                if (!ya(e[r], t[r])) return !1;
            return !0
        }
        var i;
        if (oO && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0])) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!ya(r.value[1], t.get(r.value[0]))) return !1;
            return !0
        }
        if (iO && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0])) return !1;
            return !0
        }
        if (aO && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- != 0;)
                if (e[r] !== t[r]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- != 0;)
            if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
        if (rO && e instanceof Element) return !1;
        for (r = n; r-- != 0;)
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !ya(e[o[r]], t[o[r]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var Th = function (t, n) {
        try {
            return ya(t, n)
        } catch (r) {
            if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
            throw r
        }
    },
    vn = {},
    Rh = {
        exports: {}
    },
    uO = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    lO = uO,
    sO = lO;

function Ch() {}

function xh() {}
xh.resetWarningCache = Ch;
var fO = function () {
    function e(r, o, i, a, u, l) {
        if (l !== sO) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: xh,
        resetWarningCache: Ch
    };
    return n.PropTypes = n, n
};
Rh.exports = fO();
Object.defineProperty(vn, "__esModule", {
    value: !0
});
vn.defaultProps = vn.propTypes = void 0;
var _t = cO(Rh.exports);

function cO(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Ve = _t.default.string,
    Ne = _t.default.bool,
    rr = _t.default.number,
    Ms = _t.default.array,
    Eo = _t.default.oneOfType,
    $e = _t.default.shape,
    Me = _t.default.object,
    ge = _t.default.func,
    bh = _t.default.node,
    pO = {
        url: Eo([Ve, Ms, Me]),
        playing: Ne,
        loop: Ne,
        controls: Ne,
        volume: rr,
        muted: Ne,
        playbackRate: rr,
        width: Eo([Ve, rr]),
        height: Eo([Ve, rr]),
        style: Me,
        progressInterval: rr,
        playsinline: Ne,
        pip: Ne,
        stopOnUnmount: Ne,
        light: Eo([Ne, Ve]),
        playIcon: bh,
        previewTabIndex: rr,
        fallback: bh,
        wrapper: Eo([Ve, ge, $e({
            render: ge.isRequired
        })]),
        config: $e({
            soundcloud: $e({
                options: Me
            }),
            youtube: $e({
                playerVars: Me,
                embedOptions: Me,
                onUnstarted: ge
            }),
            facebook: $e({
                appId: Ve,
                version: Ve,
                playerId: Ve,
                attributes: Me
            }),
            dailymotion: $e({
                params: Me
            }),
            vimeo: $e({
                playerOptions: Me
            }),
            file: $e({
                attributes: Me,
                tracks: Ms,
                forceVideo: Ne,
                forceAudio: Ne,
                forceHLS: Ne,
                forceDASH: Ne,
                forceFLV: Ne,
                hlsOptions: Me,
                hlsVersion: Ve,
                dashVersion: Ve,
                flvVersion: Ve
            }),
            wistia: $e({
                options: Me,
                playerId: Ve,
                customControls: Ms
            }),
            mixcloud: $e({
                options: Me
            }),
            twitch: $e({
                options: Me,
                playerId: Ve
            }),
            vidyard: $e({
                options: Me
            })
        }),
        onReady: ge,
        onStart: ge,
        onPlay: ge,
        onPause: ge,
        onBuffer: ge,
        onBufferEnd: ge,
        onEnded: ge,
        onError: ge,
        onDuration: ge,
        onSeek: ge,
        onProgress: ge,
        onClickPreview: ge,
        onEnablePIP: ge,
        onDisablePIP: ge
    };
vn.propTypes = pO;
var xe = function () {},
    dO = {
        playing: !1,
        loop: !1,
        controls: !1,
        volume: null,
        muted: !1,
        playbackRate: 1,
        width: "640px",
        height: "360px",
        style: {},
        progressInterval: 1e3,
        playsinline: !1,
        pip: !1,
        stopOnUnmount: !0,
        light: !1,
        fallback: null,
        wrapper: "div",
        previewTabIndex: 0,
        config: {
            soundcloud: {
                options: {
                    visual: !0,
                    buying: !1,
                    liking: !1,
                    download: !1,
                    sharing: !1,
                    show_comments: !1,
                    show_playcount: !1
                }
            },
            youtube: {
                playerVars: {
                    playsinline: 1,
                    showinfo: 0,
                    rel: 0,
                    iv_load_policy: 3,
                    modestbranding: 1
                },
                embedOptions: {},
                onUnstarted: xe
            },
            facebook: {
                appId: "1309697205772819",
                version: "v3.3",
                playerId: null,
                attributes: {}
            },
            dailymotion: {
                params: {
                    api: 1,
                    "endscreen-enable": !1
                }
            },
            vimeo: {
                playerOptions: {
                    autopause: !1,
                    byline: !1,
                    portrait: !1,
                    title: !1
                }
            },
            file: {
                attributes: {},
                tracks: [],
                forceVideo: !1,
                forceAudio: !1,
                forceHLS: !1,
                forceDASH: !1,
                forceFLV: !1,
                hlsOptions: {},
                hlsVersion: "0.14.16",
                dashVersion: "3.1.3",
                flvVersion: "1.5.0"
            },
            wistia: {
                options: {},
                playerId: null,
                customControls: null
            },
            mixcloud: {
                options: {
                    hide_cover: 1
                }
            },
            twitch: {
                options: {},
                playerId: null
            },
            vidyard: {
                options: {}
            }
        },
        onReady: xe,
        onStart: xe,
        onPlay: xe,
        onPause: xe,
        onBuffer: xe,
        onBufferEnd: xe,
        onEnded: xe,
        onError: xe,
        onDuration: xe,
        onSeek: xe,
        onProgress: xe,
        onClickPreview: xe,
        onEnablePIP: xe,
        onDisablePIP: xe
    };
vn.defaultProps = dO;
var kh = {};
(function (e) {
    function t(g) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (s) {
            return typeof s
        } : t = function (s) {
            return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
        }, t(g)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = u(B.exports),
        r = i(Th),
        o = vn;

    function i(g) {
        return g && g.__esModule ? g : {
            default: g
        }
    }

    function a() {
        if (typeof WeakMap != "function") return null;
        var g = new WeakMap;
        return a = function () {
            return g
        }, g
    }

    function u(g) {
        if (g && g.__esModule) return g;
        if (g === null || t(g) !== "object" && typeof g != "function") return {
            default: g
        };
        var d = a();
        if (d && d.has(g)) return d.get(g);
        var s = {},
            f = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var p in g)
            if (Object.prototype.hasOwnProperty.call(g, p)) {
                var v = f ? Object.getOwnPropertyDescriptor(g, p) : null;
                v && (v.get || v.set) ? Object.defineProperty(s, p, v) : s[p] = g[p]
            } return s.default = g, d && d.set(g, s), s
    }

    function l() {
        return l = Object.assign || function (g) {
            for (var d = 1; d < arguments.length; d++) {
                var s = arguments[d];
                for (var f in s) Object.prototype.hasOwnProperty.call(s, f) && (g[f] = s[f])
            }
            return g
        }, l.apply(this, arguments)
    }

    function c(g, d) {
        if (!(g instanceof d)) throw new TypeError("Cannot call a class as a function")
    }

    function y(g, d) {
        for (var s = 0; s < d.length; s++) {
            var f = d[s];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(g, f.key, f)
        }
    }

    function E(g, d, s) {
        return d && y(g.prototype, d), s && y(g, s), g
    }

    function h(g, d) {
        if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(d && d.prototype, {
            constructor: {
                value: g,
                writable: !0,
                configurable: !0
            }
        }), d && P(g, d)
    }

    function P(g, d) {
        return P = Object.setPrototypeOf || function (f, p) {
            return f.__proto__ = p, f
        }, P(g, d)
    }

    function R(g) {
        var d = w();
        return function () {
            var f = _(g),
                p;
            if (d) {
                var v = _(this).constructor;
                p = Reflect.construct(f, arguments, v)
            } else p = f.apply(this, arguments);
            return x(this, p)
        }
    }

    function x(g, d) {
        return d && (t(d) === "object" || typeof d == "function") ? d : m(g)
    }

    function m(g) {
        if (g === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return g
    }

    function w() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function _(g) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function (s) {
            return s.__proto__ || Object.getPrototypeOf(s)
        }, _(g)
    }

    function S(g, d, s) {
        return d in g ? Object.defineProperty(g, d, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[d] = s, g
    }
    var k = 5e3,
        O = function (g) {
            h(s, g);
            var d = R(s);

            function s() {
                var f;
                c(this, s);
                for (var p = arguments.length, v = new Array(p), T = 0; T < p; T++) v[T] = arguments[T];
                return f = d.call.apply(d, [this].concat(v)), S(m(f), "mounted", !1), S(m(f), "isReady", !1), S(m(f), "isPlaying", !1), S(m(f), "isLoading", !0), S(m(f), "loadOnReady", null), S(m(f), "startOnPlay", !0), S(m(f), "seekOnPlay", null), S(m(f), "onDurationCalled", !1), S(m(f), "handlePlayerMount", function (L) {
                    f.player = L, f.player.load(f.props.url), f.progress()
                }), S(m(f), "getInternalPlayer", function (L) {
                    return f.player ? f.player[L] : null
                }), S(m(f), "progress", function () {
                    if (f.props.url && f.player && f.isReady) {
                        var L = f.getCurrentTime() || 0,
                            C = f.getSecondsLoaded(),
                            j = f.getDuration();
                        if (j) {
                            var N = {
                                playedSeconds: L,
                                played: L / j
                            };
                            C !== null && (N.loadedSeconds = C, N.loaded = C / j), (N.playedSeconds !== f.prevPlayed || N.loadedSeconds !== f.prevLoaded) && f.props.onProgress(N), f.prevPlayed = N.playedSeconds, f.prevLoaded = N.loadedSeconds
                        }
                    }
                    f.progressTimeout = setTimeout(f.progress, f.props.progressFrequency || f.props.progressInterval)
                }), S(m(f), "handleReady", function () {
                    if (!!f.mounted) {
                        f.isReady = !0, f.isLoading = !1;
                        var L = f.props,
                            C = L.onReady,
                            j = L.playing,
                            N = L.volume,
                            U = L.muted;
                        C(), !U && N !== null && f.player.setVolume(N), f.loadOnReady ? (f.player.load(f.loadOnReady, !0), f.loadOnReady = null) : j && f.player.play(), f.handleDurationCheck()
                    }
                }), S(m(f), "handlePlay", function () {
                    f.isPlaying = !0, f.isLoading = !1;
                    var L = f.props,
                        C = L.onStart,
                        j = L.onPlay,
                        N = L.playbackRate;
                    f.startOnPlay && (f.player.setPlaybackRate && N !== 1 && f.player.setPlaybackRate(N), C(), f.startOnPlay = !1), j(), f.seekOnPlay && (f.seekTo(f.seekOnPlay), f.seekOnPlay = null), f.handleDurationCheck()
                }), S(m(f), "handlePause", function (L) {
                    f.isPlaying = !1, f.isLoading || f.props.onPause(L)
                }), S(m(f), "handleEnded", function () {
                    var L = f.props,
                        C = L.activePlayer,
                        j = L.loop,
                        N = L.onEnded;
                    C.loopOnEnded && j && f.seekTo(0), j || (f.isPlaying = !1, N())
                }), S(m(f), "handleError", function () {
                    var L;
                    f.isLoading = !1, (L = f.props).onError.apply(L, arguments)
                }), S(m(f), "handleDurationCheck", function () {
                    clearTimeout(f.durationCheckTimeout);
                    var L = f.getDuration();
                    L ? f.onDurationCalled || (f.props.onDuration(L), f.onDurationCalled = !0) : f.durationCheckTimeout = setTimeout(f.handleDurationCheck, 100)
                }), S(m(f), "handleLoaded", function () {
                    f.isLoading = !1
                }), f
            }
            return E(s, [{
                key: "componentDidMount",
                value: function () {
                    this.mounted = !0
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                }
            }, {
                key: "componentDidUpdate",
                value: function (p) {
                    var v = this;
                    if (!!this.player) {
                        var T = this.props,
                            L = T.url,
                            C = T.playing,
                            j = T.volume,
                            N = T.muted,
                            U = T.playbackRate,
                            I = T.pip,
                            M = T.loop,
                            D = T.activePlayer;
                        if (!(0, r.default)(p.url, L)) {
                            if (this.isLoading && !D.forceLoad) {
                                console.warn("ReactPlayer: the attempt to load ".concat(L, " is being deferred until the player has loaded")), this.loadOnReady = L;
                                return
                            }
                            this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(L, this.isReady)
                        }!p.playing && C && !this.isPlaying && this.player.play(), p.playing && !C && this.isPlaying && this.player.pause(), !p.pip && I && this.player.enablePIP && this.player.enablePIP(), p.pip && !I && this.player.disablePIP && this.player.disablePIP(), p.volume !== j && j !== null && this.player.setVolume(j), p.muted !== N && (N ? this.player.mute() : (this.player.unmute(), j !== null && setTimeout(function () {
                            return v.player.setVolume(j)
                        }))), p.playbackRate !== U && this.player.setPlaybackRate && this.player.setPlaybackRate(U), p.loop !== M && this.player.setLoop && this.player.setLoop(M)
                    }
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.isReady ? this.player.getDuration() : null
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.isReady ? this.player.getCurrentTime() : null
                }
            }, {
                key: "getSecondsLoaded",
                value: function () {
                    return this.isReady ? this.player.getSecondsLoaded() : null
                }
            }, {
                key: "seekTo",
                value: function (p, v) {
                    var T = this;
                    if (!this.isReady && p !== 0) {
                        this.seekOnPlay = p, setTimeout(function () {
                            T.seekOnPlay = null
                        }, k);
                        return
                    }
                    var L = v ? v === "fraction" : p > 0 && p < 1;
                    if (L) {
                        var C = this.player.getDuration();
                        if (!C) {
                            console.warn("ReactPlayer: could not seek using fraction \u2013\xA0duration not yet available");
                            return
                        }
                        this.player.seekTo(C * p);
                        return
                    }
                    this.player.seekTo(p)
                }
            }, {
                key: "render",
                value: function () {
                    var p = this.props.activePlayer;
                    return p ? n.default.createElement(p, l({}, this.props, {
                        onMount: this.handlePlayerMount,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError
                    })) : null
                }
            }]), s
        }(n.Component);
    e.default = O, S(O, "displayName", "Player"), S(O, "propTypes", o.propTypes), S(O, "defaultProps", o.defaultProps)
})(kh);
var Lh = {};
(function (e) {
    function t(O) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function (d) {
            return typeof d
        } : t = function (d) {
            return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        }, t(O)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = o(B.exports);

    function r() {
        if (typeof WeakMap != "function") return null;
        var O = new WeakMap;
        return r = function () {
            return O
        }, O
    }

    function o(O) {
        if (O && O.__esModule) return O;
        if (O === null || t(O) !== "object" && typeof O != "function") return {
            default: O
        };
        var g = r();
        if (g && g.has(O)) return g.get(O);
        var d = {},
            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var f in O)
            if (Object.prototype.hasOwnProperty.call(O, f)) {
                var p = s ? Object.getOwnPropertyDescriptor(O, f) : null;
                p && (p.get || p.set) ? Object.defineProperty(d, f, p) : d[f] = O[f]
            } return d.default = O, g && g.set(O, d), d
    }

    function i(O, g) {
        var d = Object.keys(O);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(O);
            g && (s = s.filter(function (f) {
                return Object.getOwnPropertyDescriptor(O, f).enumerable
            })), d.push.apply(d, s)
        }
        return d
    }

    function a(O) {
        for (var g = 1; g < arguments.length; g++) {
            var d = arguments[g] != null ? arguments[g] : {};
            g % 2 ? i(Object(d), !0).forEach(function (s) {
                w(O, s, d[s])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(d)) : i(Object(d)).forEach(function (s) {
                Object.defineProperty(O, s, Object.getOwnPropertyDescriptor(d, s))
            })
        }
        return O
    }

    function u(O, g) {
        if (!(O instanceof g)) throw new TypeError("Cannot call a class as a function")
    }

    function l(O, g) {
        for (var d = 0; d < g.length; d++) {
            var s = g[d];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(O, s.key, s)
        }
    }

    function c(O, g, d) {
        return g && l(O.prototype, g), d && l(O, d), O
    }

    function y(O, g) {
        if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function");
        O.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: O,
                writable: !0,
                configurable: !0
            }
        }), g && E(O, g)
    }

    function E(O, g) {
        return E = Object.setPrototypeOf || function (s, f) {
            return s.__proto__ = f, s
        }, E(O, g)
    }

    function h(O) {
        var g = x();
        return function () {
            var s = m(O),
                f;
            if (g) {
                var p = m(this).constructor;
                f = Reflect.construct(s, arguments, p)
            } else f = s.apply(this, arguments);
            return P(this, f)
        }
    }

    function P(O, g) {
        return g && (t(g) === "object" || typeof g == "function") ? g : R(O)
    }

    function R(O) {
        if (O === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return O
    }

    function x() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }

    function m(O) {
        return m = Object.setPrototypeOf ? Object.getPrototypeOf : function (d) {
            return d.__proto__ || Object.getPrototypeOf(d)
        }, m(O)
    }

    function w(O, g, d) {
        return g in O ? Object.defineProperty(O, g, {
            value: d,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : O[g] = d, O
    }
    var _ = "64px",
        S = {},
        k = function (O) {
            y(d, O);
            var g = h(d);

            function d() {
                var s;
                u(this, d);
                for (var f = arguments.length, p = new Array(f), v = 0; v < f; v++) p[v] = arguments[v];
                return s = g.call.apply(g, [this].concat(p)), w(R(s), "mounted", !1), w(R(s), "state", {
                    image: null
                }), w(R(s), "handleKeyPress", function (T) {
                    (T.key === "Enter" || T.key === " ") && s.props.onClick()
                }), s
            }
            return c(d, [{
                key: "componentDidMount",
                value: function () {
                    this.mounted = !0, this.fetchImage(this.props)
                }
            }, {
                key: "componentDidUpdate",
                value: function (f) {
                    var p = this.props,
                        v = p.url,
                        T = p.light;
                    (f.url !== v || f.light !== T) && this.fetchImage(this.props)
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    this.mounted = !1
                }
            }, {
                key: "fetchImage",
                value: function (f) {
                    var p = this,
                        v = f.url,
                        T = f.light;
                    if (typeof T == "string") {
                        this.setState({
                            image: T
                        });
                        return
                    }
                    if (S[v]) {
                        this.setState({
                            image: S[v]
                        });
                        return
                    }
                    return this.setState({
                        image: null
                    }), window.fetch("https://noembed.com/embed?url=".concat(v)).then(function (L) {
                        return L.json()
                    }).then(function (L) {
                        if (L.thumbnail_url && p.mounted) {
                            var C = L.thumbnail_url.replace("height=100", "height=480");
                            p.setState({
                                image: C
                            }), S[v] = C
                        }
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var f = this.props,
                        p = f.onClick,
                        v = f.playIcon,
                        T = f.previewTabIndex,
                        L = this.state.image,
                        C = {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        j = {
                            preview: a({
                                width: "100%",
                                height: "100%",
                                backgroundImage: L ? "url(".concat(L, ")") : void 0,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                cursor: "pointer"
                            }, C),
                            shadow: a({
                                background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                                borderRadius: _,
                                width: _,
                                height: _
                            }, C),
                            playIcon: {
                                borderStyle: "solid",
                                borderWidth: "16px 0 16px 26px",
                                borderColor: "transparent transparent transparent white",
                                marginLeft: "7px"
                            }
                        },
                        N = n.default.createElement("div", {
                            style: j.shadow,
                            className: "react-player__shadow"
                        }, n.default.createElement("div", {
                            style: j.playIcon,
                            className: "react-player__play-icon"
                        }));
                    return n.default.createElement("div", {
                        style: j.preview,
                        className: "react-player__preview",
                        onClick: p,
                        tabIndex: T,
                        onKeyPress: this.handleKeyPress
                    }, v || N)
                }
            }]), d
        }(n.Component);
    e.default = k
})(Lh);
Object.defineProperty(da, "__esModule", {
    value: !0
});
da.createReactPlayer = void 0;
var hn = Nh(B.exports),
    yO = va(Kv),
    As = va(nO),
    Dh = va(Th),
    To = vn,
    vO = Z,
    hO = va(kh);

function va(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Ro(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ro = function (n) {
        return typeof n
    } : Ro = function (n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Ro(e)
}

function Mh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Ah(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Mh(Object(n), !0).forEach(function (r) {
            le(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mh(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function ha() {
    return ha = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ha.apply(this, arguments)
}

function Is(e) {
    return wO(e) || PO(e) || gO(e) || mO()
}

function mO() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function gO(e, t) {
    if (!!e) {
        if (typeof e == "string") return Vs(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Vs(e, t)
    }
}

function PO(e) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e)) return Array.from(e)
}

function wO(e) {
    if (Array.isArray(e)) return Vs(e)
}

function Vs(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function _O(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ih(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function SO(e, t, n) {
    return t && Ih(e.prototype, t), n && Ih(e, n), e
}

function OO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Ns(e, t)
}

function Ns(e, t) {
    return Ns = Object.setPrototypeOf || function (r, o) {
        return r.__proto__ = o, r
    }, Ns(e, t)
}

function EO(e) {
    var t = RO();
    return function () {
        var r = ma(e),
            o;
        if (t) {
            var i = ma(this).constructor;
            o = Reflect.construct(r, arguments, i)
        } else o = r.apply(this, arguments);
        return TO(this, o)
    }
}

function TO(e, t) {
    return t && (Ro(t) === "object" || typeof t == "function") ? t : Ee(e)
}

function Ee(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function RO() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
    } catch {
        return !1
    }
}

function ma(e) {
    return ma = Object.setPrototypeOf ? Object.getPrototypeOf : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, ma(e)
}

function le(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Vh() {
    if (typeof WeakMap != "function") return null;
    var e = new WeakMap;
    return Vh = function () {
        return e
    }, e
}

function Nh(e) {
    if (e && e.__esModule) return e;
    if (e === null || Ro(e) !== "object" && typeof e != "function") return {
        default: e
    };
    var t = Vh();
    if (t && t.has(e)) return t.get(e);
    var n = {},
        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e)
        if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
        } return n.default = e, t && t.set(e, n), n
}
var CO = (0, hn.lazy)(function () {
        return Promise.resolve().then(function () {
            return Nh(Lh)
        })
    }),
    xO = typeof window != "undefined" && window.document,
    bO = typeof Pa != "undefined" && Pa.window && Pa.window.document,
    kO = Object.keys(To.propTypes),
    LO = xO || bO ? hn.Suspense : function () {
        return null
    },
    Co = [],
    DO = function (t, n) {
        var r, o;
        return o = r = function (i) {
            OO(u, i);
            var a = EO(u);

            function u() {
                var l;
                _O(this, u);
                for (var c = arguments.length, y = new Array(c), E = 0; E < c; E++) y[E] = arguments[E];
                return l = a.call.apply(a, [this].concat(y)), le(Ee(l), "state", {
                    showPreview: !!l.props.light
                }), le(Ee(l), "references", {
                    wrapper: function (P) {
                        l.wrapper = P
                    },
                    player: function (P) {
                        l.player = P
                    }
                }), le(Ee(l), "handleClickPreview", function (h) {
                    l.setState({
                        showPreview: !1
                    }), l.props.onClickPreview(h)
                }), le(Ee(l), "showPreview", function () {
                    l.setState({
                        showPreview: !0
                    })
                }), le(Ee(l), "getDuration", function () {
                    return l.player ? l.player.getDuration() : null
                }), le(Ee(l), "getCurrentTime", function () {
                    return l.player ? l.player.getCurrentTime() : null
                }), le(Ee(l), "getSecondsLoaded", function () {
                    return l.player ? l.player.getSecondsLoaded() : null
                }), le(Ee(l), "getInternalPlayer", function () {
                    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "player";
                    return l.player ? l.player.getInternalPlayer(h) : null
                }), le(Ee(l), "seekTo", function (h, P) {
                    if (!l.player) return null;
                    l.player.seekTo(h, P)
                }), le(Ee(l), "handleReady", function () {
                    l.props.onReady(Ee(l))
                }), le(Ee(l), "getActivePlayer", (0, As.default)(function (h) {
                    for (var P = 0, R = [].concat(Co, Is(t)); P < R.length; P++) {
                        var x = R[P];
                        if (x.canPlay(h)) return x
                    }
                    return n || null
                })), le(Ee(l), "getConfig", (0, As.default)(function (h, P) {
                    var R = l.props.config;
                    return yO.default.all([To.defaultProps.config, To.defaultProps.config[P] || {}, R, R[P] || {}])
                })), le(Ee(l), "getAttributes", (0, As.default)(function (h) {
                    return (0, vO.omit)(l.props, kO)
                })), le(Ee(l), "renderActivePlayer", function (h) {
                    if (!h) return null;
                    var P = l.getActivePlayer(h);
                    if (!P) return null;
                    var R = l.getConfig(h, P.key);
                    return hn.default.createElement(hO.default, ha({}, l.props, {
                        key: P.key,
                        ref: l.references.player,
                        config: R,
                        activePlayer: P.lazyPlayer || P,
                        onReady: l.handleReady
                    }))
                }), l
            }
            return SO(u, [{
                key: "shouldComponentUpdate",
                value: function (c, y) {
                    return !(0, Dh.default)(this.props, c) || !(0, Dh.default)(this.state, y)
                }
            }, {
                key: "componentDidUpdate",
                value: function (c) {
                    var y = this.props.light;
                    !c.light && y && this.setState({
                        showPreview: !0
                    }), c.light && !y && this.setState({
                        showPreview: !1
                    })
                }
            }, {
                key: "renderPreview",
                value: function (c) {
                    if (!c) return null;
                    var y = this.props,
                        E = y.light,
                        h = y.playIcon,
                        P = y.previewTabIndex;
                    return hn.default.createElement(CO, {
                        url: c,
                        light: E,
                        playIcon: h,
                        previewTabIndex: P,
                        onClick: this.handleClickPreview
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var c = this.props,
                        y = c.url,
                        E = c.style,
                        h = c.width,
                        P = c.height,
                        R = c.fallback,
                        x = c.wrapper,
                        m = this.state.showPreview,
                        w = this.getAttributes(y);
                    return hn.default.createElement(x, ha({
                        ref: this.references.wrapper,
                        style: Ah(Ah({}, E), {}, {
                            width: h,
                            height: P
                        })
                    }, w), hn.default.createElement(LO, {
                        fallback: R
                    }, m ? this.renderPreview(y) : this.renderActivePlayer(y)))
                }
            }]), u
        }(hn.Component), le(r, "displayName", "ReactPlayer"), le(r, "propTypes", To.propTypes), le(r, "defaultProps", To.defaultProps), le(r, "addCustomPlayer", function (i) {
            Co.push(i)
        }), le(r, "removeCustomPlayers", function () {
            Co.length = 0
        }), le(r, "canPlay", function (i) {
            for (var a = 0, u = [].concat(Co, Is(t)); a < u.length; a++) {
                var l = u[a];
                if (l.canPlay(i)) return !0
            }
            return !1
        }), le(r, "canEnablePIP", function (i) {
            for (var a = 0, u = [].concat(Co, Is(t)); a < u.length; a++) {
                var l = u[a];
                if (l.canEnablePIP && l.canEnablePIP(i)) return !0
            }
            return !1
        }), o
    };
da.createReactPlayer = DO;
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(zv),
        n = da;

    function r(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var o = t.default[t.default.length - 1],
        i = (0, n.createReactPlayer)(t.default, o);
    e.default = i
})(Bv);
var FO = qh(Bv);

function jh(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = jh(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function BO() {
    for (var e = 0, t, n, r = ""; e < arguments.length;)(t = arguments[e++]) && (n = jh(t)) && (r && (r += " "), r += n);
    return r
}
export {
    VO as B, NO as L, FO as R, n1 as a, IO as b, BO as c, r0 as d, AO as e, of as f, jO as j, UO as m, B as r
};