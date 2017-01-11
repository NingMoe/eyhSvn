/* Zepto v1.1.6 - zeptojs.com/license */
var Zepto = function () {
    function t(t) {
        return null == t ? String(t) : I[B.call(t)] || "object"
    }

    function e(e) {
        return "function" == t(e)
    }

    function n(t) {
        return null != t && t == t.window
    }

    function r(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function i(e) {
        return "object" == t(e)
    }

    function o(t) {
        return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function a(t) {
        return "number" == typeof t.length
    }

    function s(t) {
        return O.call(t, function (t) {
            return null != t
        })
    }

    function u(t) {
        return t.length > 0 ? E.fn.concat.apply([], t) : t
    }

    function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function l(t) {
        return t in M ? M[t] : M[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function f(t, e) {
        return "number" != typeof e || D[c(t)] ? e : e + "px"
    }

    function p(t) {
        var e, n;
        return k[t] || (e = N.createElement(t), N.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), k[t] = n), k[t]
    }

    function h(t) {
        return "children" in t ? P.call(t.children) : E.map(t.childNodes, function (t) {
            return 1 == t.nodeType ? t : void 0
        })
    }

    function d(t, e, n) {
        for (T in e)n && (o(e[T]) || W(e[T])) ? (o(e[T]) && !o(t[T]) && (t[T] = {}), W(e[T]) && !W(t[T]) && (t[T] = []), d(t[T], e[T], n)) : e[T] !== b && (t[T] = e[T])
    }

    function m(t, e) {
        return null == e ? E(t) : E(t).filter(e)
    }

    function g(t, n, r, i) {
        return e(n) ? n.call(t, r, i) : n
    }

    function v(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function y(t, e) {
        var n = t.className || "", r = n && n.baseVal !== b;
        return e === b ? r ? n.baseVal : n : void(r ? n.baseVal = e : t.className = e)
    }

    function x(t) {
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? E.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }

    function w(t, e) {
        e(t);
        for (var n = 0, r = t.childNodes.length; r > n; n++)w(t.childNodes[n], e)
    }

    var b, T, E, j, S, $, C = [], P = C.slice, O = C.filter, N = window.document, k = {}, M = {}, D = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, A = /^\s*<(\w+|!)[^>]*>/, L = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, _ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, R = /^(?:body|html)$/i, Z = /([A-Z])/g, q = ["val", "css", "html", "text", "data", "width", "height", "offset"], F = ["after", "prepend", "before", "append"], H = N.createElement("table"), z = N.createElement("tr"), U = {
        tr: N.createElement("tbody"),
        tbody: H,
        thead: H,
        tfoot: H,
        td: z,
        th: z,
        "*": N.createElement("div")
    }, V = /complete|loaded|interactive/, X = /^[\w-]*$/, I = {}, B = I.toString, Y = {}, J = N.createElement("div"), G = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, W = Array.isArray || function (t) {
            return t instanceof Array
        };
    return Y.matches = function (t, e) {
        if (!e || !t || 1 !== t.nodeType)return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n)return n.call(t, e);
        var r, i = t.parentNode, o = !i;
        return o && (i = J).appendChild(t), r = ~Y.qsa(i, e).indexOf(t), o && J.removeChild(t), r
    }, S = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, $ = function (t) {
        return O.call(t, function (e, n) {
            return t.indexOf(e) == n
        })
    }, Y.fragment = function (t, e, n) {
        var r, i, a;
        return L.test(t) && (r = E(N.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(_, "<$1></$2>")), e === b && (e = A.test(t) && RegExp.$1), e in U || (e = "*"), a = U[e], a.innerHTML = "" + t, r = E.each(P.call(a.childNodes), function () {
            a.removeChild(this)
        })), o(n) && (i = E(r), E.each(n, function (t, e) {
            q.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
        })), r
    }, Y.Z = function (t, e) {
        return t = t || [], t.__proto__ = E.fn, t.selector = e || "", t
    }, Y.isZ = function (t) {
        return t instanceof Y.Z
    }, Y.init = function (t, n) {
        var r;
        if (!t)return Y.Z();
        if ("string" == typeof t)if (t = t.trim(), "<" == t[0] && A.test(t)) r = Y.fragment(t, RegExp.$1, n), t = null; else {
            if (n !== b)return E(n).find(t);
            r = Y.qsa(N, t)
        } else {
            if (e(t))return E(N).ready(t);
            if (Y.isZ(t))return t;
            if (W(t)) r = s(t); else if (i(t)) r = [t], t = null; else if (A.test(t)) r = Y.fragment(t.trim(), RegExp.$1, n), t = null; else {
                if (n !== b)return E(n).find(t);
                r = Y.qsa(N, t)
            }
        }
        return Y.Z(r, t)
    }, E = function (t, e) {
        return Y.init(t, e)
    }, E.extend = function (t) {
        var e, n = P.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
            d(t, n, e)
        }), t
    }, Y.qsa = function (t, e) {
        var n, i = "#" == e[0], o = !i && "." == e[0], a = i || o ? e.slice(1) : e, s = X.test(a);
        return r(t) && s && i ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : P.call(s && !i ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, E.contains = N.documentElement.contains ? function (t, e) {
        return t !== e && t.contains(e)
    } : function (t, e) {
        for (; e && (e = e.parentNode);)if (e === t)return !0;
        return !1
    }, E.type = t, E.isFunction = e, E.isWindow = n, E.isArray = W, E.isPlainObject = o, E.isEmptyObject = function (t) {
        var e;
        for (e in t)return !1;
        return !0
    }, E.inArray = function (t, e, n) {
        return C.indexOf.call(e, t, n)
    }, E.camelCase = S, E.trim = function (t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, E.uuid = 0, E.support = {}, E.expr = {}, E.map = function (t, e) {
        var n, r, i, o = [];
        if (a(t))for (r = 0; r < t.length; r++)n = e(t[r], r), null != n && o.push(n); else for (i in t)n = e(t[i], i), null != n && o.push(n);
        return u(o)
    }, E.each = function (t, e) {
        var n, r;
        if (a(t)) {
            for (n = 0; n < t.length; n++)if (e.call(t[n], n, t[n]) === !1)return t
        } else for (r in t)if (e.call(t[r], r, t[r]) === !1)return t;
        return t
    }, window.JSON && (E.parseJSON = JSON.parse), E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        I["[object " + e + "]"] = e.toLowerCase()
    }), E.fn = {
        forEach: C.forEach,
        reduce: C.reduce,
        push: C.push,
        sort: C.sort,
        indexOf: C.indexOf,
        concat: C.concat,
        map: function (t) {
            return E(E.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return E(P.apply(this, arguments))
        },
        ready: function (t) {
            return V.test(N.readyState) && N.body ? t(E) : N.addEventListener("DOMContentLoaded", function () {
                t(E)
            }, !1), this
        },
        get: function (t) {
            return t === b ? P.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (t) {
            return C.every.call(this, function (e, n) {
                return t.call(e, n, e) !== !1
            }), this
        },
        filter: function (t) {
            return e(t) ? this.not(this.not(t)) : E(O.call(this, function (e) {
                return Y.matches(e, t)
            }))
        },
        add: function (t, e) {
            return E($(this.concat(E(t, e))))
        },
        is: function (t) {
            return this.length > 0 && Y.matches(this[0], t)
        },
        not: function (t) {
            var n = [];
            if (e(t) && t.call !== b) this.each(function (e) {
                t.call(this, e) || n.push(this)
            }); else {
                var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? P.call(t) : E(t);
                this.forEach(function (t) {
                    r.indexOf(t) < 0 && n.push(t)
                })
            }
            return E(n)
        },
        has: function (t) {
            return this.filter(function () {
                return i(t) ? E.contains(this, t) : E(this).find(t).size()
            })
        },
        eq: function (t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function () {
            var t = this[0];
            return t && !i(t) ? t : E(t)
        },
        last: function () {
            var t = this[this.length - 1];
            return t && !i(t) ? t : E(t)
        },
        find: function (t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? E(t).filter(function () {
                var t = this;
                return C.some.call(n, function (e) {
                    return E.contains(e, t)
                })
            }) : 1 == this.length ? E(Y.qsa(this[0], t)) : this.map(function () {
                return Y.qsa(this, t)
            }) : E()
        },
        closest: function (t, e) {
            var n = this[0], i = !1;
            for ("object" == typeof t && (i = E(t)); n && !(i ? i.indexOf(n) >= 0 : Y.matches(n, t));)n = n !== e && !r(n) && n.parentNode;
            return E(n)
        },
        parents: function (t) {
            for (var e = [], n = this; n.length > 0;)n = E.map(n, function (t) {
                return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return m(e, t)
        },
        parent: function (t) {
            return m($(this.pluck("parentNode")), t)
        },
        children: function (t) {
            return m(this.map(function () {
                return h(this)
            }), t)
        },
        siblings: function (t) {
            return m(this.map(function (t, e) {
                return O.call(h(e.parentNode), function (t) {
                    return t !== e
                })
            }), t)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (t) {
            return E.map(this, function (e) {
                return e[t]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
            })
        },
        replaceWith: function (t) {
            return this.before(t).remove()
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (t) {
            return this.each(function () {
                var e = E(this);
                (t === b ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function (t) {
            return E(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function (t) {
            return E(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = this.innerHTML;
                E(this).empty().append(g(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = g(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function (t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function (n) {
                if (1 === this.nodeType)if (i(t))for (T in t)v(this, T, t[T]); else v(this, t, g(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : b
        },
        removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && t.split(" ").forEach(function (t) {
                    v(this, t)
                }, this)
            })
        },
        prop: function (t, e) {
            return t = G[t] || t, 1 in arguments ? this.each(function (n) {
                this[t] = g(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function (t, e) {
            var n = "data-" + t.replace(Z, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== r ? x(r) : b
        },
        val: function (t) {
            return 0 in arguments ? this.each(function (e) {
                this.value = g(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? E(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function (t) {
            if (t)return this.each(function (e) {
                var n = E(this), r = g(this, t, e, n.offset()), i = n.offsetParent().offset(), o = {
                    top: r.top - i.top,
                    left: r.left - i.left
                };
                "static" == n.css("position") && (o.position = "relative"), n.css(o)
            });
            if (!this.length)return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function (e, n) {
            if (arguments.length < 2) {
                var r, i = this[0];
                if (!i)return;
                if (r = getComputedStyle(i, ""), "string" == typeof e)return i.style[S(e)] || r.getPropertyValue(e);
                if (W(e)) {
                    var o = {};
                    return E.each(e, function (t, e) {
                        o[e] = i.style[S(e)] || r.getPropertyValue(e)
                    }), o
                }
            }
            var a = "";
            if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function () {
                this.style.removeProperty(c(e))
            }); else for (T in e)e[T] || 0 === e[T] ? a += c(T) + ":" + f(T, e[T]) + ";" : this.each(function () {
                this.style.removeProperty(c(T))
            });
            return this.each(function () {
                this.style.cssText += ";" + a
            })
        },
        index: function (t) {
            return t ? this.indexOf(E(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (t) {
            return t ? C.some.call(this, function (t) {
                return this.test(y(t))
            }, l(t)) : !1
        },
        addClass: function (t) {
            return t ? this.each(function (e) {
                if ("className" in this) {
                    j = [];
                    var n = y(this), r = g(this, t, e, n);
                    r.split(/\s+/g).forEach(function (t) {
                        E(this).hasClass(t) || j.push(t)
                    }, this), j.length && y(this, n + (n ? " " : "") + j.join(" "))
                }
            }) : this
        },
        removeClass: function (t) {
            return this.each(function (e) {
                if ("className" in this) {
                    if (t === b)return y(this, "");
                    j = y(this), g(this, t, e, j).split(/\s+/g).forEach(function (t) {
                        j = j.replace(l(t), " ")
                    }), y(this, j.trim())
                }
            })
        },
        toggleClass: function (t, e) {
            return t ? this.each(function (n) {
                var r = E(this), i = g(this, t, n, y(this));
                i.split(/\s+/g).forEach(function (t) {
                    (e === b ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
                })
            }) : this
        },
        scrollTop: function (t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === b ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                    this.scrollTop = t
                } : function () {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        position: function () {
            if (this.length) {
                var t = this[0], e = this.offsetParent(), n = this.offset(), r = R.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return n.top -= parseFloat(E(t).css("margin-top")) || 0, n.left -= parseFloat(E(t).css("margin-left")) || 0, r.top += parseFloat(E(e[0]).css("border-top-width")) || 0, r.left += parseFloat(E(e[0]).css("border-left-width")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || N.body; t && !R.test(t.nodeName) && "static" == E(t).css("position");)t = t.offsetParent;
                return t
            })
        }
    }, E.fn.detach = E.fn.remove, ["width", "height"].forEach(function (t) {
        var e = t.replace(/./, function (t) {
            return t[0].toUpperCase()
        });
        E.fn[t] = function (i) {
            var o, a = this[0];
            return i === b ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
                a = E(this), a.css(t, g(this, i, e, a[t]()))
            })
        }
    }), F.forEach(function (e, n) {
        var r = n % 2;
        E.fn[e] = function () {
            var e, i, o = E.map(arguments, function (n) {
                return e = t(n), "object" == e || "array" == e || null == n ? n : Y.fragment(n)
            }), a = this.length > 1;
            return o.length < 1 ? this : this.each(function (t, e) {
                i = r ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                var s = E.contains(N.documentElement, i);
                o.forEach(function (t) {
                    if (a) t = t.cloneNode(!0); else if (!i)return E(t).remove();
                    i.insertBefore(t, e), s && w(t, function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, E.fn[r ? e + "To" : "insert" + (n ? "Before" : "After")] = function (t) {
            return E(t)[e](this), this
        }
    }), Y.Z.prototype = E.fn, Y.uniq = $, Y.deserializeValue = x, E.zepto = Y, E
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
    function e(t) {
        return t._zid || (t._zid = h++)
    }

    function n(t, n, o, a) {
        if (n = r(n), n.ns)var s = i(n.ns);
        return (v[e(t)] || []).filter(function (t) {
            return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
        })
    }

    function r(t) {
        var e = ("" + t).split(".");
        return {e: e[0], ns: e.slice(1).sort().join(" ")}
    }

    function i(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }

    function o(t, e) {
        return t.del && !y && t.e in x || !!e
    }

    function a(t) {
        return y && x[t] || t
    }

    function s(n, i, s, c, f, h, d) {
        var m = e(n), g = v[m] || (v[m] = []);
        i.split(/\s/).forEach(function (e) {
            if ("ready" == e)return t(document).ready(s);
            var i = r(e);
            i.fn = s, i.sel = f, i.del = h;
            var m = h || s;
            i.proxy = function (t) {
                if (u(t) && (t = l(t), !t.isImmediatePropagationStopped())) {
                    t.data = c;
                    var e = m.apply(n, t._args == p ? [t] : [t].concat(t._args));
                    return e === !1 && (t.preventDefault(), t.stopPropagation()), e
                }
            }, i.i = g.length, g.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, d))
        })
    }

    function u(t) {
        var e = ["", "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap", ""].join(" ").indexOf(" " + t.type + " ") > -1;
        return e && "kimi" !== t._trigger ? !1 : !0
    }

    function c(t, r, i, s, u) {
        var c = e(t);
        (r || "").split(/\s/).forEach(function (e) {
            n(t, e, i, s).forEach(function (e) {
                delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
            })
        })
    }

    function l(e, n) {
        return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(j, function (t, r) {
            var i = n[t];
            e[t] = function () {
                return this[r] = b, i && i.apply(n, arguments)
            }, e[r] = T
        }), (n.defaultPrevented !== p ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)), e
    }

    function f(t) {
        var e, n = {originalEvent: t};
        for (e in t)E.test(e) || t[e] === p || (n[e] = t[e]);
        return l(n, t)
    }

    var p, h = 1, d = Array.prototype.slice, m = t.isFunction, g = function (t) {
        return "string" == typeof t
    }, v = {}, y = "onfocusin" in window, x = {focus: "focusin", blur: "focusout"}, w = {};
    w.click = "MouseEvents", t.event = {add: s, remove: c}, t.proxy = function (n, r) {
        var i = 2 in arguments && d.call(arguments, 2);
        if (m(n)) {
            var o = function () {
                return n.apply(r, i ? i.concat(d.call(arguments)) : arguments)
            };
            return o._zid = e(n), o
        }
        if (g(r))return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
        throw new TypeError("expected function")
    }, t.fn.one = function (t, e, n, r) {
        return this.on(t, e, n, r, 1)
    };
    var b = function () {
        return !0
    }, T = function () {
        return !1
    }, E = /^([A-Z]|returnValue$|layer[XY]$)/, j = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.on = function (e, n, r, i, o) {
        var a, u, l = this;
        return e && !g(e) ? (t.each(e, function (t, e) {
            l.on(t, n, r, e, o)
        }), l) : (g(n) || m(i) || i === !1 || (i = r, r = n, n = p), (m(r) || r === !1) && (i = r, r = p), i === !1 && (i = T), l.each(function (l, p) {
            o && (a = function (t) {
                return c(p, t.type, i), i.apply(this, arguments)
            }), n && (u = function (e) {
                var r, o = t(e.target).closest(n, p).get(0);
                return o && o !== p ? (r = t.extend(f(e), {
                    currentTarget: o,
                    liveFired: p
                }), (a || i).apply(o, [r].concat(d.call(arguments, 1)))) : void 0
            }), s(p, e, i, r, n, u || a)
        }))
    }, t.fn.off = function (e, n, r) {
        var i = this;
        return e && !g(e) ? (t.each(e, function (t, e) {
            i.off(t, n, e)
        }), i) : (g(n) || m(r) || r === !1 || (r = n, n = p), r === !1 && (r = T), i.each(function () {
            c(this, e, r, n)
        }))
    }, t.fn.trigger = function (e, n) {
        return e = g(e) || t.isPlainObject(e) ? t.Event(e) : l(e), e._args = n, e._trigger = "kimi", this.each(function () {
            e.type in x && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    }, t.fn.triggerHandler = function (e, r) {
        var i, o;
        return this.each(function (a, s) {
            i = f(g(e) ? t.Event(e) : e), i._args = r, i.target = s, t.each(n(s, e.type || e), function (t, e) {
                return o = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }), o
    }, "focusin focusout focus blur load resize scroll unload click dblclick change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
            return 0 in arguments ? this.on(e, t) : this.trigger(e)
        }
    }), t.Event = function (t, e) {
        g(t) || (e = t, t = e.type);
        var n = document.createEvent(w[t] || "Events"), r = !0;
        if (e)for (var i in e)"bubbles" == i ? r = !!e[i] : n[i] = e[i];
        return n.initEvent(t, r, !0), l(n)
    }
}(Zepto), function (t) {
    function e(t, e, n, r) {
        return Math.abs(t - e) >= Math.abs(n - r) ? t - e > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
    }

    function n() {
        l = null, p.last && (p.el.trigger("longTap"), p = {})
    }

    function r() {
        l && clearTimeout(l), l = null
    }

    function i() {
        s && clearTimeout(s), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), s = u = c = l = null, p = {}
    }

    function o(t) {
        return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
    }

    function a(t, e) {
        return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
    }

    var s, u, c, l, f, p = {}, h = 750;
    t(document).ready(function () {
        var d, m, g, v, y = 0, x = 0;
        "MSGesture" in window && (f = new MSGesture, f.target = document.body), t(document).on("MSGestureEnd", function (t) {
            var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
            e && (p.el.trigger("swipe"), p.el.trigger("swipe" + e))
        }).on("touchstart MSPointerDown pointerdown", function (e) {
            (!(v = a(e, "down")) || o(e)) && (g = v ? e : e.touches[0], e.touches && 1 === e.touches.length && p.x2 && (p.x2 = void 0, p.y2 = void 0), d = Date.now(), m = d - (p.last || d), p.el = t("tagName" in g.target ? g.target : g.target.parentNode), s && clearTimeout(s), p.x1 = g.pageX, p.y1 = g.pageY, m > 0 && 250 >= m && (p.isDoubleTap = !0), p.last = d, l = setTimeout(n, h), f && v && f.addPointer(e.pointerId))
        }).on("touchmove MSPointerMove pointermove", function (t) {
            (!(v = a(t, "move")) || o(t)) && (g = v ? t : t.touches[0], r(), p.x2 = g.pageX, p.y2 = g.pageY, y += Math.abs(p.x1 - p.x2), x += Math.abs(p.y1 - p.y2))
        }).on("touchend MSPointerUp pointerup", function (n) {
            (!(v = a(n, "up")) || o(n)) && (r(), p.x2 && Math.abs(p.x1 - p.x2) > 30 || p.y2 && Math.abs(p.y1 - p.y2) > 30 ? c = setTimeout(function () {
                p.el.trigger("swipe"), p.el.trigger("swipe" + e(p.x1, p.x2, p.y1, p.y2)), p = {}
            }, 0) : "last" in p && (30 > y && 30 > x ? u = setTimeout(function () {
                var e = t.Event("tap");
                e.cancelTouch = i, p.el.trigger(e), p.isDoubleTap ? (p.el && p.el.trigger("doubleTap"), p = {}) : s = setTimeout(function () {
                    s = null, p.el && p.el.trigger("singleTap"), p = {}
                }, 250)
            }, 0) : p = {}), y = x = 0)
        }).on("touchcancel MSPointerCancel pointercancel", i), t(window).on("scroll", i)
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
        t.fn[e] = function (t) {
            return this.on(e, t)
        }
    })
}(Zepto), function (t) {
    function e(e, n, r) {
        var i = t.Event(n);
        return t(e).trigger(i, r), !i.isDefaultPrevented()
    }

    function n(t, n, r, i) {
        return t.global ? e(n || y, r, i) : void 0
    }

    function r(e) {
        e.global && 0 === t.active++ && n(e, null, "ajaxStart")
    }

    function i(e) {
        e.global && !--t.active && n(e, null, "ajaxStop")
    }

    function o(t, e) {
        var r = e.context;
        return e.beforeSend.call(r, t, e) === !1 || n(e, r, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void n(e, r, "ajaxSend", [t, e])
    }

    function a(t, e, r, i) {
        var o = r.context, a = "success";
        r.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), n(r, o, "ajaxSuccess", [e, r, t]), u(a, e, r)
    }

    function s(t, e, r, i, o) {
        var a = i.context;
        i.error.call(a, r, e, t), o && o.rejectWith(a, [r, e, t]), n(i, a, "ajaxError", [r, i, t || e]), u(e, r, i)
    }

    function u(t, e, r) {
        var o = r.context;
        r.complete.call(o, e, t), n(r, o, "ajaxComplete", [e, r]), i(r)
    }

    function c() {
    }

    function l(t) {
        return t && (t = t.split(";", 2)[0]), t && (t == E ? "html" : t == T ? "json" : w.test(t) ? "script" : b.test(t) && "xml") || "text"
    }

    function f(t, e) {
        return "" == e ? t : t + (/[^\?]\?[^\?]/.test(t) ? "&" : "?") + e
    }

    function p(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
    }

    function h(e, n, r, i) {
        return t.isFunction(n) && (i = r, r = n, n = void 0), t.isFunction(r) || (i = r, r = void 0), {
            url: e,
            data: n,
            success: r,
            dataType: i
        }
    }

    function d(e, n, r, i) {
        var o, a = t.isArray(n), s = t.isPlainObject(n);
        t.each(n, function (n, u) {
            o = t.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? d(e, u, r, n) : e.add(n, u)
        })
    }

    var m, g, v = 0, y = window.document, x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, w = /^(?:text|application)\/javascript/i, b = /^(?:text|application)\/xml/i, T = "application/json", E = "text/html", j = /^\s*$/, S = y.createElement("a");
    S.href = window.location.href, t.active = 0;
    var $ = function (e, n) {
        if (!("type" in e))return t.ajax(e);
        var r, i, u = e.jsonpCallback, c = (t.isFunction(u) ? u() : u) || "jsonp" + ++v, l = y.createElement("script"), f = window[c], p = function (e) {
            t(l).triggerHandler("error", e || "abort")
        }, h = {abort: p};
        return n && n.promise(h), t(l).on("load error", function (o, u) {
            clearTimeout(i), t(l).off().remove(), "error" != o.type && r ? a(r[0], h, e, n) : s(null, u || "error", h, e, n), window[c] = f, r && t.isFunction(f) && f(r[0]), f = r = void 0
        }), o(h, e) === !1 ? (p("abort"), h) : (window[c] = function () {
            r = arguments
        }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function () {
            p("timeout")
        }, e.timeout)), h)
    };
    t.ajaxSettings = {
        type: "GET",
        beforeSend: c,
        success: c,
        error: c,
        complete: c,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: T,
            xml: "application/xml, text/xml",
            html: E,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, t.ajax = function (e) {
        var n, i, u = t.extend({}, e || {}), h = t.Deferred && t.Deferred();
        for (m in t.ajaxSettings)void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
        r(u), u.crossDomain || (n = y.createElement("a"), n.href = u.url, n.href = n.href, u.crossDomain = S.protocol + "//" + S.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), (i = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, i)), p(u);
        var d = u.dataType, v = /\?.+=\?/.test(u.url);
        if (v && (d = "jsonp"), u.cache !== !1 && (e && e.cache === !0 || "script" != d && "jsonp" != d) || (u.url = f(u.url, "_=" + Date.now())), "jsonp" == d)return v || (u.url = f(u.url, u.jsonp ? u.jsonp + "=?" : u.jsonp === !1 ? "" : "callback=?")), $(u, h);
        var x, w = u.accepts[d], b = {}, T = function (t, e) {
            b[t.toLowerCase()] = [t, e]
        }, E = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol, C = u.xhr(), P = C.setRequestHeader;
        if (h && h.promise(C), u.crossDomain || T("X-Requested-With", "XMLHttpRequest"), T("Accept", w || "*/*"), (w = u.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]), C.overrideMimeType && C.overrideMimeType(w)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && T("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers)for (g in u.headers)T(g, u.headers[g]);
        if (C.setRequestHeader = T, C.onreadystatechange = function () {
                if (4 == C.readyState) {
                    C.onreadystatechange = c, clearTimeout(x);
                    var e, n = !1;
                    if (C.status >= 200 && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == E) {
                        d = d || l(u.mimeType || C.getResponseHeader("content-type")), e = C.responseText;
                        try {
                            "script" == d ? (1, eval)(e) : "xml" == d ? e = C.responseXML : "json" == d && (e = j.test(e) ? null : t.parseJSON(e))
                        } catch (r) {
                            n = r
                        }
                        n ? s(n, "parsererror", C, u, h) : a(e, C, u, h)
                    } else s(C.statusText || null, C.status ? "error" : "abort", C, u, h)
                }
            }, o(C, u) === !1)return C.abort(), s(null, "abort", C, u, h), C;
        if (u.xhrFields)for (g in u.xhrFields)C[g] = u.xhrFields[g];
        var O = "async" in u ? u.async : !0;
        C.open(u.type, u.url, O, u.username, u.password);
        for (g in b)P.apply(C, b[g]);
        return u.timeout > 0 && (x = setTimeout(function () {
            C.onreadystatechange = c, C.abort(), s(null, "timeout", C, u, h)
        }, u.timeout)), C.send(u.data ? u.data : null), C
    }, t.get = function () {
        return t.ajax(h.apply(null, arguments))
    }, t.post = function () {
        var e = h.apply(null, arguments);
        return e.type = "POST", t.ajax(e)
    }, t.getJSON = function () {
        var e = h.apply(null, arguments);
        return e.dataType = "json", t.ajax(e)
    }, t.fn.load = function (e, n, r) {
        if (!this.length)return this;
        var i, o = this, a = e.split(/\s/), s = h(e, n, r), u = s.success;
        return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function (e) {
            o.html(i ? t("<div>").html(e.replace(x, "")).find(i) : e), u && u.apply(o, arguments)
        }, t.ajax(s), this
    };
    var C = encodeURIComponent;
    t.param = function (e, n) {
        var r = [];
        return r.add = function (e, n) {
            t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(C(e) + "=" + C(n))
        }, d(r, e, n), r.join("&").replace(/%20/g, "+")
    }
}(Zepto), function (t) {
    var e = t.ajax;
    t.jsonp = t.ajaxJSONP = function (t) {
        return t.dataType = "jsonp", e(t)
    }, t.getScript = function (e, n) {
        function r() {
            i && (clearTimeout(i), i = null)
        }

        var i, o = document.createElement("script"), a = t.isFunction(n), s = /[&\?]disable-cache\b/.test(location.search);
        return (a || n && n.success) && (o.onload = function () {
            r(), a ? n() : n.success.call(n.context)
        }), !a && n && (n.error && (o.onerror = function () {
            r(), n.error.call(n.context)
        }), n.timeout && (i = setTimeout(function () {
            i = null, n.error && n.error.call(n.context)
        }, n.timeout))), e = s ? e + (/[^\?]\?[^\?]/.test(e) ? "&" : "?") + "t=" + (new Date).getTime() : e, o.setAttribute("data-path", e), o.src = e, document.head.appendChild(o)
    }
}(Zepto), function (t) {
    t.version = "0.0.233", t.onLine = !/waptest|wapa|localhost|(\d+\.){2}|taobao\.net|alidemo\.cn/.test(location.host), t.merge = function (e) {
        var n, r = [].slice, i = r.call(arguments, 1), o = {};
        return "boolean" == typeof e ? (n = e, e = i) : e = r.call(arguments, 0), t.extend.apply(t, [!!n, o].concat(e)), o
    }, t.importStyle = function (e) {
        t("<style>" + e + "</style>").appendTo("head")
    }
}(Zepto), function (t) {
    function e(t) {
        var e = {}, n = [];
        return t.forEach(function (t) {
            t = t.replace(/^kimi\//, i), e[t] || o.modules[t] || (n.push(t), e[t] = !0)
        }), n
    }

    function n(t) {
        var n = [];
        return t.forEach(function (t) {
            if (!o.modules[t]) {
                -1 === t.indexOf("/") && (t = "kimi/" + t);
                var e = o.alias[t];
                e ? (e.requires && (n = n.concat(e.requires)), n.push(e.alias)) : -1 === n.indexOf(t) && n.push(t)
            }
        }), e(n)
    }

    function r(t) {
        var e = o.alias[t], n = {exports: {}}, a = n.exports;
        t = e ? e.alias : t.replace(/^kimi\//, i);
        var s = o.modules[t];
        return s && $.isPlainObject(s) ? "result" in s ? s.result : "factory" in s ? s.result = $.isFunction(s.factory) ? s.factory.apply(null, [r, a, n]) || n.exports : s.factory : void 0 : $
    }

    var i = "tb/kimi/" + $.version + "/extend/", o = {
        base: $.onLine ? "//g.alicdn.com/" : "//assets.daily.taobao.net/g/",
        ext: ".js",
        modules: {},
        alias: {
            "kimi/deferred": {alias: "tb/kimi/" + $.version + "/extend/deferred", requires: [i + "callbacks"]},
            "kimi/fx_methods": {alias: "tb/kimi/" + $.version + "/extend/fx_methods", requires: [i + "fx"]},
            "kimi/gesture": {alias: "tb/kimi/" + $.version + "/extend/gesture", requires: [i + "detect"]}
        }
    };
    $.config = function (t, e) {
        $.isPlainObject(t) ? $.extend(o.alias, t, !0) : o[t] = e
    }, $.use = function (t, e) {
        $.isArray(t) || (t = t.split(",")), e || (e = function () {
        });
        var a = n(t), s = function () {
            e.apply(null, t.map(function (t) {
                return r(t)
            }))
        };
        a.length ? (a = a.map(function (t) {
            return /^kimi\/[^\d\.]+$/.test(t) ? t = t.replace(/^kimi\//, i) : t
        }), $.getScript(o.base + "??" + a.join(o.ext + ",") + o.ext, s)) : s()
    }, $.addStyleSheet = function (t) {
        if ($.isArray(t) || !/^http\:\/\//.test(t)) {
            $.isArray(t) || (t = t.split(","));
            var e = [], r = /\.css$/, i = n(t);
            i.length ? (i.forEach(function (t) {
                r.test(t) && (e.push(t), o.modules[t] = !0)
            }), e.length && document.write('<link rel="stylesheet" href="' + o.base + "??" + e.join(",").replace(/\.css\b/g, o.ext.replace("js", "css")) + '" />')) : (e.push(t), o.modules[t] = !0)
        } else $('<link rel="stylesheet" href="' + t + '" />').appendTo("head")
    },
    $.define = function (t, e, n) {
        n || (n = e), o.modules[t] = {factory: n}
    },
    $.extend(t, {define: $.define}),
    $._mmd = o,
    $.define("tb/kimi/" + $.version + "/extend/ajax", function () {
        return $
    })
}(window);