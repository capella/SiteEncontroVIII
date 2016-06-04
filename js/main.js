(function() {
    var h, m = this;

    function n(a) {
        return void 0 !== a
    }

    function aa() {}

    function ba(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function p(a) {
        return "array" == ba(a)
    }

    function ca(a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function q(a) {
        return "string" == typeof a
    }

    function da(a) {
        return "number" == typeof a
    }

    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ga = 0;

    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ia(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function r(a, b, c) {
        r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
        return r.apply(null, arguments)
    }

    function ja(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var t = Date.now || function() {
        return +new Date
    };

    function u(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.i = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ce = function(a, c, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
            return b.prototype[c].apply(a, g)
        }
    };

    function ka(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ka);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    u(ka, Error);
    ka.prototype.name = "CustomError";
    var la;

    function ma(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    }
    var na = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function oa(a) {
        if (!pa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ua, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;"));
        return a
    }
    var qa = /&/g,
        ra = /</g,
        sa = />/g,
        ta = /"/g,
        ua = /'/g,
        va = /\x00/g,
        pa = /[\x00&<>"']/;

    function wa(a) {
        var b = 0,
            c = na(String(xa)).split(".");
        a = na(String(a)).split(".");
        for (var d = Math.max(c.length, a.length), e = 0; 0 == b && e < d; e++) {
            var f = c[e] || "",
                g = a[e] || "",
                k = RegExp("(\\d*)(\\D*)", "g"),
                l = RegExp("(\\d*)(\\D*)", "g");
            do {
                var D = k.exec(f) || ["", "", ""],
                    w = l.exec(g) || ["", "", ""];
                if (0 == D[0].length && 0 == w[0].length) break;
                b = ya(0 == D[1].length ? 0 : parseInt(D[1], 10), 0 == w[1].length ? 0 : parseInt(w[1], 10)) || ya(0 == D[2].length, 0 == w[2].length) || ya(D[2], w[2])
            } while (0 == b)
        }
        return b
    }

    function ya(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function za(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function Aa(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function Ba(a) {
        var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };

    function Ca(a, b) {
        b.unshift(a);
        ka.call(this, ma.apply(null, b));
        b.shift()
    }
    u(Ca, ka);
    Ca.prototype.name = "AssertionError";

    function v(a, b) {
        throw new Ca("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var Da = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ea = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Fa = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a,
                b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = q(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var l = g[k];
                    b.call(c, l, k, a) && (e[f++] = l)
                }
            return e
        };

    function Ga(a, b) {
        for (var c = a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function Ha(a, b) {
        return 0 <= Da(a, b)
    }

    function Ia(a, b) {
        var c = Da(a, b),
            d;
        (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
        return d
    }

    function Ja(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }

    function Ka(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function La(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };

    function Ma(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Na(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Oa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Pa(a) {
        for (var b in a) return !1;
        return !0
    }

    function x(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
    var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ra(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Qa.length; f++) c = Qa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Sa = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
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
    };

    function y() {
        this.pb = "";
        this.Tc = Ta
    }
    y.prototype.ca = !0;
    y.prototype.T = function() {
        return this.pb
    };
    y.prototype.toString = function() {
        return "Const{" + this.pb + "}"
    };

    function Ua(a) {
        if (a instanceof y && a.constructor === y && a.Tc === Ta) return a.pb;
        v("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    }
    var Ta = {};

    function Va(a) {
        var b = new y;
        b.pb = a;
        return b
    };

    function z() {
        this.kb = "";
        this.Rc = Wa
    }
    z.prototype.ca = !0;
    var Wa = {};
    z.prototype.T = function() {
        return this.kb
    };
    z.prototype.toString = function() {
        return "SafeStyle{" + this.kb + "}"
    };
    z.prototype.eb = function(a) {
        this.kb = a;
        return this
    };
    var Xa = (new z).eb(""),
        Ya = /^[-,."'%_!# a-zA-Z0-9]+$/;

    function Za() {
        this.M = "";
        this.Sc = $a
    }
    h = Za.prototype;
    h.ca = !0;
    h.T = function() {
        return this.M
    };
    h.Mb = !0;
    h.ma = function() {
        return 1
    };
    h.toString = function() {
        return "SafeUrl{" + this.M + "}"
    };
    var cb = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        $a = {};

    function db() {
        this.lb = "";
        this.Vc = eb
    }
    h = db.prototype;
    h.ca = !0;
    h.T = function() {
        return this.lb
    };
    h.Mb = !0;
    h.ma = function() {
        return 1
    };
    h.toString = function() {
        return "TrustedResourceUrl{" + this.lb + "}"
    };

    function fb(a) {
        if (a instanceof db && a.constructor === db && a.Vc === eb) return a.lb;
        v("expected object of type TrustedResourceUrl, got '" + a + "'");
        return "type_error:TrustedResourceUrl"
    }
    var eb = {};

    function gb(a) {
        var b = new db;
        b.lb = a;
        return b
    };

    function hb() {
        this.M = "";
        this.Qc = ib;
        this.jc = null
    }
    h = hb.prototype;
    h.Mb = !0;
    h.ma = function() {
        return this.jc
    };
    h.ca = !0;
    h.T = function() {
        return this.M
    };
    h.toString = function() {
        return "SafeHtml{" + this.M + "}"
    };

    function A(a) {
        if (a instanceof hb && a.constructor === hb && a.Qc === ib) return a.M;
        v("expected object of type SafeHtml, got '" + a + "'");
        return "type_error:SafeHtml"
    }
    var jb = /^[a-zA-Z0-9-]+$/,
        kb = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        lb = {
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            TEMPLATE: !0
        };

    function mb(a, b, c) {
        if (!jb.test(a)) throw Error("Invalid tag name <" + a + ">.");
        if (a.toUpperCase() in lb) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
        return nb(a, b, c)
    }

    function ob(a) {
        function b(a) {
            if (p(a)) Ea(a, b);
            else {
                if (!(a instanceof hb)) {
                    var f = null;
                    a.Mb && (f = a.ma());
                    a = pb(oa(a.ca ? a.T() : String(a)), f)
                }
                d += A(a);
                a = a.ma();
                0 == c ? c = a : 0 != a && c != a && (c = null)
            }
        }
        var c = 0,
            d = "";
        Ea(arguments, b);
        return pb(d, c)
    }
    var ib = {};

    function pb(a, b) {
        return (new hb).eb(a, b)
    }
    hb.prototype.eb = function(a, b) {
        this.M = a;
        this.jc = b;
        return this
    };

    function nb(a, b, c) {
        var d = null,
            e = "<" + a;
        if (b)
            for (var f in b) {
                if (!jb.test(f)) throw Error('Invalid attribute name "' + f + '".');
                var g = b[f];
                if (null != g) {
                    var k, l = a;
                    k = f;
                    if (g instanceof y) g = Ua(g);
                    else if ("style" == k.toLowerCase()) {
                        if (!ea(g)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
                        if (!(g instanceof z)) {
                            var l = "",
                                D = void 0;
                            for (D in g) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(D)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + D);
                                var w = g[D];
                                if (null !=
                                    w) {
                                    if (w instanceof y) w = Ua(w);
                                    else if (Ya.test(w)) {
                                        for (var ab = !0, bb = !0, Jb = 0; Jb < w.length; Jb++) {
                                            var Xc = w.charAt(Jb);
                                            "'" == Xc && bb ? ab = !ab : '"' == Xc && ab && (bb = !bb)
                                        }
                                        ab && bb || (v("String value requires balanced quotes, got: " + w), w = "zClosurez")
                                    } else v("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " + w), w = "zClosurez";
                                    l += D + ":" + w + ";"
                                }
                            }
                            g = l ? (new z).eb(l) : Xa
                        }
                        l = void 0;
                        g instanceof z && g.constructor === z && g.Rc === Wa ? l = g.kb : (v("expected object of type SafeStyle, got '" + g + "'"), l = "type_error:SafeStyle");
                        g = l
                    } else {
                        if (/^on/i.test(k)) throw Error('Attribute "' +
                            k + '" requires goog.string.Const value, "' + g + '" given.');
                        if (k.toLowerCase() in kb)
                            if (g instanceof db) g = fb(g);
                            else if (g instanceof Za) g instanceof Za && g.constructor === Za && g.Sc === $a ? g = g.M : (v("expected object of type SafeUrl, got '" + g + "'"), g = "type_error:SafeUrl");
                        else if (q(g)) g instanceof Za || (g = g.ca ? g.T() : String(g), cb.test(g) || (g = "about:invalid#zClosurez"), l = new Za, l.M = g, g = l), g = g.T();
                        else throw Error('Attribute "' + k + '" on tag "' + l + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                            g + '" given.');
                    }
                    g.ca && (g = g.T());
                    k = k + '="' + oa(String(g)) + '"';
                    e += " " + k
                }
            }
        null != c ? p(c) || (c = [c]) : c = [];
        !0 === Sa[a.toLowerCase()] ? e += ">" : (d = ob(c), e += ">" + A(d) + "</" + a + ">", d = d.ma());
        (a = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
        return pb(e, d)
    }
    pb("<!DOCTYPE html>", 0);
    pb("", 0);
    var qb;
    a: {
        var rb = m.navigator;
        if (rb) {
            var sb = rb.userAgent;
            if (sb) {
                qb = sb;
                break a
            }
        }
        qb = ""
    }

    function B(a) {
        return -1 != qb.indexOf(a)
    };
    var tb = B("Opera") || B("OPR"),
        C = B("Trident") || B("MSIE"),
        ub = B("Edge"),
        E = B("Gecko") && !(-1 != qb.toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
        F = -1 != qb.toLowerCase().indexOf("webkit") && !B("Edge"),
        vb = F && B("Mobile");

    function wb() {
        var a = qb;
        if (E) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (ub) return /Edge\/([\d\.]+)/.exec(a);
        if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (F) return /WebKit\/(\S+)/.exec(a)
    }

    function xb() {
        var a = m.document;
        return a ? a.documentMode : void 0
    }
    var xa = function() {
            if (tb && m.opera) {
                var a;
                var b = m.opera.version;
                try {
                    a = b()
                } catch (c) {
                    a = b
                }
                return a
            }
            a = "";
            (b = wb()) && (a = b ? b[1] : "");
            return C && (b = xb(), b > parseFloat(a)) ? String(b) : a
        }(),
        yb = {};

    function G(a) {
        return yb[a] || (yb[a] = 0 <= wa(a))
    }
    var zb = m.document,
        Ab = zb && C ? xb() || ("CSS1Compat" == zb.compatMode ? parseInt(xa, 10) : 5) : void 0;

    function Bb(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    }
    Bb.prototype.kc = null;
    var Cb = 0;
    Bb.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || Cb++;
        d || t();
        this.La = a;
        this.vd = b;
        delete this.kc
    };
    Bb.prototype.Bc = function(a) {
        this.La = a
    };

    function Db(a) {
        this.rc = a;
        this.l = this.v = this.La = this.u = null
    }

    function Eb(a, b) {
        this.name = a;
        this.value = b
    }
    Eb.prototype.toString = function() {
        return this.name
    };
    var Fb = new Eb("WARNING", 900),
        Gb = new Eb("INFO", 800),
        Hb = new Eb("CONFIG", 700);
    h = Db.prototype;
    h.getName = function() {
        return this.rc
    };
    h.getParent = function() {
        return this.u
    };
    h.mc = function() {
        this.v || (this.v = {});
        return this.v
    };
    h.Bc = function(a) {
        this.La = a
    };

    function Ib(a) {
        if (a.La) return a.La;
        if (a.u) return Ib(a.u);
        v("Root logger has no level set.");
        return null
    }
    h.log = function(a, b, c) {
        if (a.value >= Ib(this).value)
            for ("function" == ba(b) && (b = b()), a = new Bb(a, String(b), this.rc), c && (a.kc = c), c = "log:" + a.vd, m.console && (m.console.timeStamp ? m.console.timeStamp(c) : m.console.markTimeline && m.console.markTimeline(c)), m.msWriteProfilerMark && m.msWriteProfilerMark(c), c = this; c;) {
                b = c;
                var d = a;
                if (b.l)
                    for (var e = 0, f = void 0; f = b.l[e]; e++) f(d);
                c = c.getParent()
            }
    };
    h.info = function(a, b) {
        this.log(Gb, a, b)
    };
    var Kb = {},
        Lb = null;

    function Mb(a) {
        Lb || (Lb = new Db(""), Kb[""] = Lb, Lb.Bc(Hb));
        var b;
        if (!(b = Kb[a])) {
            b = new Db(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1),
                c = Mb(a.substr(0, c));
            c.mc()[d] = b;
            b.u = c;
            Kb[a] = b
        }
        return b
    };

    function Nb(a, b) {
        this.x = n(a) ? a : 0;
        this.y = n(b) ? b : 0
    }
    h = Nb.prototype;
    h.clone = function() {
        return new Nb(this.x, this.y)
    };
    h.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    h.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    h.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    h.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    h.translate = function(a, b) {
        a instanceof Nb ? (this.x += a.x, this.y += a.y) : (this.x += a, da(b) && (this.y += b));
        return this
    };
    h.scale = function(a, b) {
        var c = da(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };

    function Ob(a, b) {
        this.width = a;
        this.height = b
    }
    h = Ob.prototype;
    h.clone = function() {
        return new Ob(this.width, this.height)
    };
    h.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    h.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    h.scale = function(a, b) {
        var c = da(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var Pb = !C || 9 <= Ab,
        Qb = !E && !C || C && 9 <= Ab || E && G("1.9.1");
    C && G("9");

    function Rb(a) {
        return a ? new Sb(Tb(a)) : la || (la = new Sb)
    }

    function Ub(a, b) {
        return q(b) ? a.getElementById(b) : b
    }

    function Vb(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Wb("*", a, b)
    }

    function Xb(a, b) {
        var c = b || document,
            d = null;
        return (d = c.getElementsByClassName ? c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Wb("*", a, b)[0]) || null
    }

    function Wb(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && Ha(a.split(/\s+/), b) && (d[e++] = g);
            d.length = e;
            return d
        }
        return c
    }

    function Yb(a, b) {
        Ma(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Zb.hasOwnProperty(d) ? a.setAttribute(Zb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var Zb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function $b() {
        var a = window.document,
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Ob(a.clientWidth, a.clientHeight)
    }

    function H(a, b, c) {
        return ac(document, arguments)
    }

    function ac(a, b) {
        var c = b[0],
            d = b[1];
        if (!Pb && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', oa(d.name), '"');
            if (d.type) {
                c.push(' type="', oa(d.type), '"');
                var e = {};
                Ra(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (q(d) ? c.className = d : p(d) ? c.className = d.join(" ") : Yb(c, d));
        2 < b.length && bc(a, c, b, 2);
        return c
    }

    function bc(a, b, c, d) {
        function e(c) {
            c && b.appendChild(q(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!ca(f) || ea(f) && 0 < f.nodeType) e(f);
            else {
                var g;
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ea(f)) {
                            g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" == ba(f)) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Ea(g ? Ka(f) : f, e)
            }
        }
    }

    function cc(a, b) {
        bc(Tb(a), a, arguments, 1)
    }

    function dc(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function ec(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function Tb(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function fc(a) {
        return a.contentDocument || a.contentWindow.document
    }

    function gc(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else dc(a), a.appendChild(Tb(a).createTextNode(String(b)))
    }

    function hc(a, b, c, d) {
        c || (a = a.parentNode);
        c = null == d;
        for (var e = 0; a && (c || e <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            e++
        }
        return null
    }

    function Sb(a) {
        this.w = a || m.document || document
    }
    h = Sb.prototype;
    h.$a = Rb;
    h.A = function(a) {
        return Ub(this.w, a)
    };
    h.Kb = function(a, b) {
        return Vb(a, b || this.w)
    };
    h.ab = function(a, b) {
        return Xb(a, b || this.w)
    };
    h.f = function(a, b, c) {
        return ac(this.w, arguments)
    };
    h.createElement = function(a) {
        return this.w.createElement(a)
    };
    h.createTextNode = function(a) {
        return this.w.createTextNode(String(a))
    };

    function ic(a, b) {
        var c = a.w,
            d = c.createElement("DIV");
        if (C) {
            var e = ob(mb("br"), b);
            d.innerHTML = A(e);
            d.removeChild(d.firstChild)
        } else d.innerHTML = A(b);
        if (1 == d.childNodes.length) d = d.removeChild(d.firstChild);
        else {
            for (c = c.createDocumentFragment(); d.firstChild;) c.appendChild(d.firstChild);
            d = c
        }
        return d
    }

    function jc(a) {
        a = a.w;
        return a.parentWindow || a.defaultView
    }
    h.appendChild = function(a, b) {
        a.appendChild(b)
    };
    h.append = cc;
    h.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    h.zc = dc;
    h.removeNode = ec;

    function kc(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType)
            if (a.removeNode) a.removeNode(!1);
            else {
                for (; b = a.firstChild;) c.insertBefore(b, a);
                ec(a)
            }
    }
    h.mc = function(a) {
        return Qb && void 0 != a.children ? a.children : Fa(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    h.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    h.cd = hc;

    function lc(a, b, c) {
        if (q(b))(b = mc(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = mc(c, d);
                f && (c.style[f] = e)
            }
    }
    var nc = {};

    function mc(a, b) {
        var c = nc[b];
        if (!c) {
            var d = za(b),
                c = d;
            void 0 === a.style[d] && (d = (F ? "Webkit" : E ? "Moz" : C ? "ms" : tb ? "O" : null) + Ba(d), void 0 !== a.style[d] && (c = d));
            nc[b] = c
        }
        return c
    }

    function oc(a, b) {
        var c;
        a: {
            c = Tb(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c = c[b] || c.getPropertyValue(b) || "";
                break a
            }
            c = ""
        }
        return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function pc(a) {
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    }

    function I(a) {
        var b = qc;
        if ("none" != oc(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function qc(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = F && !b && !c;
        if ((!n(b) || d) && a.getBoundingClientRect) {
            var e;
            a: {
                try {
                    e = a.getBoundingClientRect()
                } catch (f) {
                    e = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                    break a
                }
                C && a.ownerDocument.body && (a = a.ownerDocument, e.left -= a.documentElement.clientLeft + a.body.clientLeft, e.top -= a.documentElement.clientTop + a.body.clientTop)
            }
            return new Ob(e.right - e.left, e.bottom - e.top)
        }
        return new Ob(b, c)
    }
    var rc = E ? "MozUserSelect" : F ? "WebkitUserSelect" : null;

    function sc() {
        0 != tc && (uc[this[fa] || (this[fa] = ++ga)] = this);
        this.Z = this.Z;
        this.ea = this.ea
    }
    var tc = 0,
        uc = {};
    sc.prototype.Z = !1;
    sc.prototype.ka = function() {
        if (!this.Z && (this.Z = !0, this.s(), 0 != tc)) {
            var a = this[fa] || (this[fa] = ++ga);
            delete uc[a]
        }
    };
    sc.prototype.s = function() {
        if (this.ea)
            for (; this.ea.length;) this.ea.shift()()
    };

    function vc(a) {
        a && "function" == typeof a.ka && a.ka()
    };
    var wc = !C || 9 <= Ab,
        xc = C && !G("9");
    !F || G("528");
    E && G("1.9b") || C && G("8") || tb && G("9.5") || F && G("528");
    E && !G("8") || C && G("9");

    function J(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.fa = !1;
        this.Ac = !0
    }
    J.prototype.stopPropagation = function() {
        this.fa = !0
    };
    J.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Ac = !1
    };

    function yc(a) {
        yc[" "](a);
        return a
    }
    yc[" "] = aa;

    function zc(a, b) {
        J.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.la = this.state = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var e = a.relatedTarget;
            if (e) {
                if (E) {
                    var f;
                    a: {
                        try {
                            yc(e.nodeName);
                            f = !0;
                            break a
                        } catch (g) {}
                        f = !1
                    }
                    f || (e = null)
                }
            } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.relatedTarget = e;
            null === d ? (this.offsetX = F || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = F || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0,
                this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.state = a.state;
            this.la = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    u(zc, J);
    zc.prototype.stopPropagation = function() {
        zc.i.stopPropagation.call(this);
        this.la.stopPropagation ? this.la.stopPropagation() : this.la.cancelBubble = !0
    };
    zc.prototype.preventDefault = function() {
        zc.i.preventDefault.call(this);
        var a = this.la;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, xc) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Ac = "closure_listenable_" + (1E6 * Math.random() | 0),
        Bc = 0;

    function Cc(a, b, c, d, e) {
        this.listener = a;
        this.mb = null;
        this.src = b;
        this.type = c;
        this.xa = !!d;
        this.bb = e;
        this.key = ++Bc;
        this.ta = this.Ta = !1
    }

    function Dc(a) {
        a.ta = !0;
        a.listener = null;
        a.mb = null;
        a.src = null;
        a.bb = null
    };

    function Ec(a) {
        this.src = a;
        this.o = {};
        this.Ra = 0
    }
    h = Ec.prototype;
    h.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.o[f];
        a || (a = this.o[f] = [], this.Ra++);
        var g = Fc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Ta = !1)) : (b = new Cc(b, this.src, f, !!d, e), b.Ta = c, a.push(b));
        return b
    };
    h.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.o)) return !1;
        var e = this.o[a];
        b = Fc(e, b, c, d);
        return -1 < b ? (Dc(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.o[a], this.Ra--), !0) : !1
    };

    function Gc(a, b) {
        var c = b.type;
        c in a.o && Ia(a.o[c], b) && (Dc(b), 0 == a.o[c].length && (delete a.o[c], a.Ra--))
    }
    h.Oa = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.o)
            if (!a || c == a) {
                for (var d = this.o[c], e = 0; e < d.length; e++) ++b, Dc(d[e]);
                delete this.o[c];
                this.Ra--
            }
        return b
    };
    h.Da = function(a, b, c, d) {
        a = this.o[a.toString()];
        var e = -1;
        a && (e = Fc(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    h.hasListener = function(a, b) {
        var c = n(a),
            d = c ? a.toString() : "",
            e = n(b);
        return Na(this.o, function(a) {
            for (var g = 0; g < a.length; ++g)
                if (!(c && a[g].type != d || e && a[g].xa != b)) return !0;
            return !1
        })
    };

    function Fc(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ta && f.listener == b && f.xa == !!c && f.bb == d) return e
        }
        return -1
    };
    var Hc = "closure_lm_" + (1E6 * Math.random() | 0),
        Ic = {},
        Jc = 0;

    function K(a, b, c, d, e) {
        if (p(b)) {
            for (var f = 0; f < b.length; f++) K(a, b[f], c, d, e);
            return null
        }
        c = Kc(c);
        if (a && a[Ac]) a = a.c(b, c, d, e);
        else {
            if (!b) throw Error("Invalid event type");
            var f = !!d,
                g = Lc(a);
            g || (a[Hc] = g = new Ec(a));
            c = g.add(b, c, !1, d, e);
            if (!c.mb) {
                d = Mc();
                c.mb = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) a.addEventListener(b.toString(), d, f);
                else if (a.attachEvent) a.attachEvent(Nc(b.toString()), d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                Jc++
            }
            a = c
        }
        return a
    }

    function Mc() {
        var a = Oc,
            b = wc ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function Pc(a, b, c, d, e) {
        if (p(b))
            for (var f = 0; f < b.length; f++) Pc(a, b[f], c, d, e);
        else c = Kc(c), a && a[Ac] ? a.Sa(b, c, d, e) : a && (a = Lc(a)) && (b = a.Da(b, c, !!d, e)) && Qc(b)
    }

    function Qc(a) {
        if (!da(a) && a && !a.ta) {
            var b = a.src;
            if (b && b[Ac]) Gc(b.K, a);
            else {
                var c = a.type,
                    d = a.mb;
                b.removeEventListener ? b.removeEventListener(c, d, a.xa) : b.detachEvent && b.detachEvent(Nc(c), d);
                Jc--;
                (c = Lc(b)) ? (Gc(c, a), 0 == c.Ra && (c.src = null, b[Hc] = null)) : Dc(a)
            }
        }
    }

    function Nc(a) {
        return a in Ic ? Ic[a] : Ic[a] = "on" + a
    }

    function Rc(a, b, c, d) {
        var e = !0;
        if (a = Lc(a))
            if (b = a.o[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.xa == c && !f.ta && (f = Sc(f, d), e = e && !1 !== f)
                }
            return e
    }

    function Sc(a, b) {
        var c = a.listener,
            d = a.bb || a.src;
        a.Ta && Qc(a);
        return c.call(d, b)
    }

    function Oc(a, b) {
        if (a.ta) return !0;
        if (!wc) {
            var c;
            if (!(c = b)) a: {
                c = ["window", "event"];
                for (var d = m, e; e = c.shift();)
                    if (null != d[e]) d = d[e];
                    else {
                        c = null;
                        break a
                    }
                c = d
            }
            e = c;
            c = new zc(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (l) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
                for (var f = a.type, g = e.length - 1; !c.fa && 0 <= g; g--) {
                    c.currentTarget = e[g];
                    var k = Rc(e[g], f, !0, c),
                        d = d && k
                }
                for (g = 0; !c.fa && g <
                    e.length; g++) c.currentTarget = e[g],
                k = Rc(e[g], f, !1, c),
                d = d && k
            }
            return d
        }
        return Sc(a, new zc(b, this))
    }

    function Lc(a) {
        a = a[Hc];
        return a instanceof Ec ? a : null
    }
    var Tc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Kc(a) {
        if ("function" == ba(a)) return a;
        a[Tc] || (a[Tc] = function(b) {
            return a.handleEvent(b)
        });
        return a[Tc]
    };

    function L() {
        sc.call(this);
        this.K = new Ec(this);
        this.Wc = this;
        this.jb = null
    }
    u(L, sc);
    L.prototype[Ac] = !0;
    h = L.prototype;
    h.Xb = function(a) {
        this.jb = a
    };
    h.addEventListener = function(a, b, c, d) {
        K(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        Pc(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        var b, c = this.jb;
        if (c)
            for (b = []; c; c = c.jb) b.push(c);
        var c = this.Wc,
            d = a.type || a;
        if (q(a)) a = new J(a, c);
        else if (a instanceof J) a.target = a.target || c;
        else {
            var e = a;
            a = new J(d, c);
            Ra(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var g = b.length - 1; !a.fa && 0 <= g; g--) f = a.currentTarget = b[g], e = Uc(f, d, !0, a) && e;
        a.fa || (f = a.currentTarget = c, e = Uc(f, d, !0, a) && e, a.fa || (e = Uc(f, d, !1, a) && e));
        if (b)
            for (g = 0; !a.fa && g < b.length; g++) f = a.currentTarget = b[g], e = Uc(f, d, !1, a) && e;
        return e
    };
    h.s = function() {
        L.i.s.call(this);
        this.K && this.K.Oa(void 0);
        this.jb = null
    };
    h.c = function(a, b, c, d) {
        return this.K.add(String(a), b, !1, c, d)
    };
    h.Sa = function(a, b, c, d) {
        return this.K.remove(String(a), b, c, d)
    };

    function Uc(a, b, c, d) {
        b = a.K.o[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ta && g.xa == c) {
                var k = g.listener,
                    l = g.bb || g.src;
                g.Ta && Gc(a.K, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Ac
    }
    h.Da = function(a, b, c, d) {
        return this.K.Da(String(a), b, c, d)
    };
    h.hasListener = function(a, b) {
        return this.K.hasListener(n(a) ? String(a) : void 0, b)
    };

    function Vc(a, b) {
        L.call(this);
        this.Ia = a || 1;
        this.wa = b || m;
        this.xb = r(this.Zd, this);
        this.Nb = t()
    }
    u(Vc, L);
    h = Vc.prototype;
    h.enabled = !1;
    h.b = null;
    h.setInterval = function(a) {
        this.Ia = a;
        this.b && this.enabled ? (this.stop(), this.start()) : this.b && this.stop()
    };
    h.Zd = function() {
        if (this.enabled) {
            var a = t() - this.Nb;
            0 < a && a < .8 * this.Ia ? this.b = this.wa.setTimeout(this.xb, this.Ia - a) : (this.b && (this.wa.clearTimeout(this.b), this.b = null), this.dispatchEvent(Wc), this.enabled && (this.b = this.wa.setTimeout(this.xb, this.Ia), this.Nb = t()))
        }
    };
    h.start = function() {
        this.enabled = !0;
        this.b || (this.b = this.wa.setTimeout(this.xb, this.Ia), this.Nb = t())
    };
    h.stop = function() {
        this.enabled = !1;
        this.b && (this.wa.clearTimeout(this.b), this.b = null)
    };
    h.s = function() {
        Vc.i.s.call(this);
        this.stop();
        delete this.wa
    };
    var Wc = "tick";

    function Yc(a) {
        sc.call(this);
        this.na = a;
        this.Ja = {}
    }
    u(Yc, sc);
    var Zc = [];
    h = Yc.prototype;
    h.c = function(a, b, c, d) {
        p(b) || (b && (Zc[0] = b.toString()), b = Zc);
        for (var e = 0; e < b.length; e++) {
            var f = K(a, b[e], c || this.handleEvent, d || !1, this.na || this);
            if (!f) break;
            this.Ja[f.key] = f
        }
        return this
    };
    h.Sa = function(a, b, c, d, e) {
        if (p(b))
            for (var f = 0; f < b.length; f++) this.Sa(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.na || this, c = Kc(c), d = !!d, b = a && a[Ac] ? a.Da(b, c, d, e) : a ? (a = Lc(a)) ? a.Da(b, c, d, e) : null : null, b && (Qc(b), delete this.Ja[b.key]);
        return this
    };
    h.Oa = function() {
        Ma(this.Ja, function(a, b) {
            this.Ja.hasOwnProperty(b) && Qc(a)
        }, this);
        this.Ja = {}
    };
    h.s = function() {
        Yc.i.s.call(this);
        this.Oa()
    };
    h.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function $c(a, b) {
        J.call(this, "navigate");
        this.nd = b
    }
    u($c, J);

    function ad() {
        return !(B("iPad") || B("Android") && !B("Mobile") || B("Silk")) && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"))
    };

    function bd(a, b) {
        for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
        return c.join("\x0B")
    };

    function cd(a, b, c, d) {
        L.call(this);
        if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
        var e;
        if (c) e = c;
        else {
            e = "history_state" + dd;
            var f = mb("input", {
                type: "text",
                name: e,
                id: e,
                style: Va("display:none")
            });
            document.write(A(f));
            e = Ub(document, e)
        }
        this.Ea = e;
        c = c ? (c = Tb(c)) ? c.parentWindow || c.defaultView : window : window;
        this.N = c;
        this.Lb = q(b) ? gb(b) : b;
        C && !b && (b = "https" == window.location.protocol ? Va("https:///") : Va('javascript:""'), this.Lb = b = gb(Ua(b)));
        this.b = new Vc(ed);
        b = ja(vc, this.b);
        this.Z ?
            b.call(void 0) : (this.ea || (this.ea = []), this.ea.push(n(void 0) ? r(b, void 0) : b));
        this.ha = !a;
        this.aa = new Yc(this);
        if (a || fd) {
            var g;
            if (d) g = d;
            else {
                a = "history_iframe" + dd;
                d = {
                    id: a,
                    style: Va("display:none"),
                    sandbox: void 0
                };
                b = {};
                b.src = this.Lb || null;
                b.srcdoc = null;
                c = {
                    sandbox: ""
                };
                e = {};
                for (g in b) e[g] = b[g];
                for (g in c) e[g] = c[g];
                for (g in d) {
                    f = g.toLowerCase();
                    if (f in b) throw Error('Cannot override "' + f + '" attribute, got "' + g + '" with value "' + d[g] + '"');
                    f in c && delete e[f];
                    e[g] = d[g]
                }
                g = nb("iframe", e, void 0);
                document.write(A(g));
                g = Ub(document, a)
            }
            this.cb = g;
            this.Jc = !0
        }
        fd && (this.aa.c(this.N, "load", this.Fd), this.Cc = this.Fb = !1);
        this.ha ? gd(this, M(this), !0) : hd(this, this.Ea.value);
        dd++
    }
    u(cd, L);
    cd.prototype.Aa = !1;
    cd.prototype.sa = !1;
    cd.prototype.qa = null;
    var id = function(a, b) {
            var c = b || bd;
            return function() {
                var b = this || m,
                    b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
                    e = c(a[fa] || (a[fa] = ++ga), arguments);
                return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
            }
        }(function() {
            return C ? 8 <= Ab : "onhashchange" in m
        }),
        fd = C && !(8 <= Ab);
    h = cd.prototype;
    h.ra = null;
    h.s = function() {
        cd.i.s.call(this);
        this.aa.ka();
        jd(this, !1)
    };

    function jd(a, b) {
        if (b != a.Aa)
            if (fd && !a.Fb) a.Cc = b;
            else if (b)
            if (tb ? a.aa.c(a.N.document, kd, a.Sd) : E && a.aa.c(a.N, "pageshow", a.Pd), id() && a.ha) a.aa.c(a.N, "hashchange", a.Jd), a.Aa = !0, a.dispatchEvent(new $c(M(a), !1));
            else {
                if (!C || ad() || a.Fb) a.aa.c(a.b, Wc, r(a.gc, a, !0)), a.Aa = !0, fd || (a.qa = M(a), a.dispatchEvent(new $c(M(a), !1))), a.b.start()
            }
        else a.Aa = !1, a.aa.Oa(), a.b.stop()
    }
    h.Fd = function() {
        this.Fb = !0;
        this.Ea.value && hd(this, this.Ea.value, !0);
        jd(this, this.Cc)
    };
    h.Pd = function(a) {
        a.la.persisted && (jd(this, !1), jd(this, !0))
    };
    h.Jd = function() {
        var a = ld(this.N);
        a != this.qa && md(this, a, !0)
    };

    function M(a) {
        return null != a.ra ? a.ra : a.ha ? ld(a.N) : nd(a) || ""
    }

    function ld(a) {
        a = a.location.href;
        var b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    }

    function od(a, b) {
        M(a) != b && (a.ha ? (gd(a, b, !1), id() || C && !ad() && hd(a, b, !1, void 0), a.Aa && a.gc(!1)) : (hd(a, b, !1), a.ra = a.qa = a.Ea.value = b, a.dispatchEvent(new $c(0, !1))))
    }

    function gd(a, b, c) {
        a = a.N.location;
        var d = a.href.split("#")[0],
            e = -1 != a.href.indexOf("#");
        if (fd || e || b) d += "#" + b;
        d != a.href && (c ? a.replace(d) : a.href = d)
    }

    function hd(a, b, c, d) {
        if (a.Jc || b != nd(a))
            if (a.Jc = !1, b = encodeURIComponent(String(b)), C) {
                var e = fc(a.cb);
                e.open("text/html", c ? "replace" : void 0);
                c = ob(mb("title", {}, d || a.N.document.title), mb("body", {}, b));
                e.write(A(c));
                e.close()
            } else if (e = fb(a.Lb) + "#" + b, a = a.cb.contentWindow) c ? a.location.replace(e) : a.location.href = e
    }

    function nd(a) {
        if (C) return a = fc(a.cb), a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, " ")) : null;
        var b = a.cb.contentWindow;
        if (b) {
            var c;
            try {
                c = decodeURIComponent(ld(b).replace(/\+/g, " "))
            } catch (d) {
                return a.sa || (1 != a.sa && a.b.setInterval(pd), a.sa = !0), null
            }
            a.sa && (0 != a.sa && a.b.setInterval(ed), a.sa = !1);
            return c || null
        }
        return null
    }
    h.gc = function(a) {
        if (this.ha) {
            var b = ld(this.N);
            b != this.qa && md(this, b, a)
        }
        if (!this.ha || fd)
            if (b = nd(this) || "", null == this.ra || b == this.ra) this.ra = null, b != this.qa && md(this, b, a)
    };

    function md(a, b, c) {
        a.qa = a.Ea.value = b;
        a.ha ? (fd && hd(a, b), gd(a, b)) : hd(a, b);
        a.dispatchEvent(new $c(M(a), c))
    }
    h.Sd = function() {
        this.b.stop();
        this.b.start()
    };
    var kd = ["mousedown", "keydown", "mousemove"],
        dd = 0,
        ed = 150,
        pd = 1E4;

    function qd(a) {
        a = a.className;
        return q(a) && a.match(/\S+/g) || []
    }

    function N(a, b) {
        for (var c = qd(a), d = c, e = La(arguments, 1), f = 0; f < e.length; f++) Ha(d, e[f]) || d.push(e[f]);
        a.className = c.join(" ")
    }

    function O(a, b) {
        var c = qd(a),
            c = rd(c, La(arguments, 1));
        a.className = c.join(" ")
    }

    function rd(a, b) {
        return Fa(a, function(a) {
            return !Ha(b, a)
        })
    };

    function sd() {}
    sd.dd = function() {
        return sd.oc ? sd.oc : sd.oc = new sd
    };
    sd.prototype.zd = 0;

    function P(a) {
        L.call(this);
        this.h = a || Rb();
        this.Vb = td;
        this.nc = null;
        this.da = !1;
        this.a = null;
        this.U = void 0;
        this.Va = this.v = this.u = null;
        this.Mc = !1
    }
    u(P, L);
    P.prototype.hd = sd.dd();
    var td = null;
    h = P.prototype;
    h.A = function() {
        return this.a
    };
    h.Kb = function(a) {
        return this.a ? this.h.Kb(a, this.a) : []
    };
    h.ab = function(a) {
        return this.a ? this.h.ab(a, this.a) : null
    };

    function Q(a) {
        a.U || (a.U = new Yc(a));
        return a.U
    }
    h.getParent = function() {
        return this.u
    };
    h.Xb = function(a) {
        if (this.u && this.u != a) throw Error("Method not supported");
        P.i.Xb.call(this, a)
    };
    h.$a = function() {
        return this.h
    };
    h.f = function() {
        this.a = this.h.createElement("DIV")
    };

    function ud(a, b) {
        if (a.da) throw Error("Component already rendered");
        if (b && a.fc(b)) {
            a.Mc = !0;
            var c = Tb(b);
            a.h && a.h.w == c || (a.h = Rb(b));
            a.J(b);
            a.$()
        } else throw Error("Invalid element to decorate");
    }
    h.fc = function() {
        return !0
    };
    h.J = function(a) {
        this.a = a
    };
    h.$ = function() {
        this.da = !0;
        vd(this, function(a) {
            !a.da && a.A() && a.$()
        })
    };

    function wd(a) {
        vd(a, function(a) {
            a.da && wd(a)
        });
        a.U && a.U.Oa();
        a.da = !1
    }
    h.s = function() {
        this.da && wd(this);
        this.U && (this.U.ka(), delete this.U);
        vd(this, function(a) {
            a.ka()
        });
        !this.Mc && this.a && ec(this.a);
        this.u = this.a = this.Va = this.v = null;
        P.i.s.call(this)
    };

    function xd(a) {
        null == a.Vb && (a.Vb = "rtl" == oc(a.da ? a.a : a.h.w.body, "direction"));
        return a.Vb
    }

    function vd(a, b) {
        a.v && Ea(a.v, b, void 0)
    }
    h.removeChild = function(a, b) {
        if (a) {
            var c = q(a) ? a : a.nc || (a.nc = ":" + (a.hd.zd++).toString(36));
            a = this.Va && c ? x(this.Va, c) || null : null;
            if (c && a) {
                var d = this.Va;
                c in d && delete d[c];
                Ia(this.v, a);
                b && (wd(a), a.a && ec(a.a));
                c = a;
                if (null == c) throw Error("Unable to set parent component");
                c.u = null;
                P.i.Xb.call(c, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    h.zc = function(a) {
        for (var b = []; this.v && 0 != this.v.length;) b.push(this.removeChild(this.v ? this.v[0] || null : null, a));
        return b
    };
    C && G(8);
    var yd = {
            ie: !0
        },
        zd = {
            je: !0
        };

    function Ad() {
        throw Error("Do not instantiate directly");
    }
    Ad.prototype.yb = null;
    Ad.prototype.toString = function() {
        return this.content
    };

    function Bd(a) {
        if (!ea(a)) return String(a);
        if (a instanceof Ad) {
            if (a.Bb === yd) return a.content;
            if (a.Bb === zd) return oa(a.content)
        }
        v("Soy template output is unsafe for use as HTML: " + a);
        return "zSoyz"
    }
    var Cd = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
        Dd = {};

    function Ed(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return q(a) && a.match(/\S+/g) || []
    }

    function Fd(a, b) {
        return a.classList ? a.classList.contains(b) : Ha(Ed(a), b)
    }

    function Gd(a) {
        a.classList ? a.classList.add("selected") : Fd(a, "selected") || (a.className += 0 < a.className.length ? " selected" : "selected")
    }

    function Hd(a) {
        a.classList ? a.classList.remove("selected") : Fd(a, "selected") && (a.className = Fa(Ed(a), function(a) {
            return "selected" != a
        }).join(" "))
    };
    var Id = !C;

    function R(a, b) {
        return Id && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + Aa(b))
    };

    function Jd(a) {
        L.call(this);
        this.Ha = {};
        this.Ga = {};
        this.na = new Yc(this);
        this.u = a
    }
    u(Jd, L);
    var Kd = [C && !G("11") ? "readystatechange" : "load", "abort", "error"];
    Jd.prototype.start = function() {
        var a = this.Ha;
        Ea(Oa(a), function(b) {
            var c = a[b];
            if (c && (delete a[b], !this.Z)) {
                var d;
                d = this.u ? Rb(this.u).f("IMG") : new Image;
                c.ic && (d.crossOrigin = c.ic);
                this.na.c(d, Kd, this.vc);
                this.Ga[b] = d;
                d.id = b;
                d.src = c.src
            }
        }, this)
    };
    Jd.prototype.vc = function(a) {
        var b = a.currentTarget;
        if (b) {
            if ("readystatechange" == a.type)
                if ("complete" == b.readyState) a.type = "load";
                else return;
                "undefined" == typeof b.naturalWidth && ("load" == a.type ? (b.naturalWidth = b.width, b.naturalHeight = b.height) : (b.naturalWidth = 0, b.naturalHeight = 0));
            this.dispatchEvent({
                type: a.type,
                target: b
            });
            !this.Z && (a = b.id, delete this.Ha[a], b = this.Ga[a]) && (delete this.Ga[a], this.na.Sa(b, Kd, this.vc), Pa(this.Ga) && Pa(this.Ha) && this.dispatchEvent("complete"))
        }
    };
    Jd.prototype.s = function() {
        delete this.Ha;
        delete this.Ga;
        vc(this.na);
        Jd.i.s.call(this)
    };

    function Ld(a) {
        this.a = a;
        this.a[Md] = this;
        this.Ba = {};
        this.C = {};
        this.wb = {}
    }
    var Md = "_wect";
    Ld.prototype.td = Mb("wireless.events.ListenerCoalescer");

    function Nd(a) {
        a[Md] || new Ld(a);
        return a[Md]
    }
    Ld.prototype.ed = function(a, b) {
        void 0 == this.Ba[a] && (this.Ba[a] = 0);
        this.Ba[a]++;
        for (var c = this.C[a], d = c.length, e, f = 0; f < d; f++) try {
            c[f](b)
        } catch (k) {
            var g = this.td;
            g && g.log(Fb, "Exception during event processing.", k);
            e = e || k
        }
        this.Ba[a]--;
        if (e) throw e;
    };

    function Od(a, b) {
        a.wb[b] || (a.wb[b] = r(a.ed, a, b));
        return a.wb[b]
    }

    function Pd(a, b, c, d) {
        d = !!d;
        var e = b + ":" + (d ? "capture" : "bubble");
        a.C[e] || (a.C[e] = [], a.a.addEventListener(b, Od(a, e), d));
        a.C[e].push(c)
    }
    var Qd = 0,
        Rd = /Mac OS X.+Silk\//;

    function Sd(a, b, c, d) {
        return a << 21 | b << 14 | c << 7 | d
    }
    var Td = /OS (\d)_(\d)(?:_(\d))?/,
        Ud = /Chrome\/([0-9.]+)/;

    function Vd(a, b, c, d, e) {
        var f = Nd(a);
        Pd(f, b, c, d);
        e && Wd(a, function() {
            Pd(f, b, c, d)
        }, function() {
            var a = !!d,
                e = b + ":" + (a ? "capture" : "bubble");
            if (f.C[e]) {
                f.Ba[e] && (f.C[e] = f.C[e].slice(0));
                var l = f.C[e].indexOf(c); - 1 != l && f.C[e].splice(l, 1);
                0 == f.C[e].length && (f.C[e] = void 0, f.a.removeEventListener(b, Od(f, e), a))
            }
        })
    }

    function Wd(a, b, c) {
        a.addEventListener("DOMFocusIn", function(a) {
            a.target && "TEXTAREA" == a.target.tagName && b()
        }, !1);
        a.addEventListener("DOMFocusOut", function(a) {
            a.target && "TEXTAREA" == a.target.tagName && c()
        }, !1)
    }

    function Xd(a, b, c) {
        var d = document.createEvent("HTMLEvents");
        d.initEvent(b, !0, !0);
        d.sender = c;
        d.de = void 0;
        a.dispatchEvent(d)
    }
    var Yd = /iPhone|iPod|iPad/.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Android") || Rd.test(navigator.userAgent),
        S = window.navigator.msPointerEnabled,
        Zd = Yd ? "touchstart" : S ? "MSPointerDown" : "mousedown",
        $d = Yd ? "touchmove" : S ? "MSPointerMove" : "mousemove",
        ae = Yd ? "touchend" : S ? "MSPointerUp" : "mouseup",
        be = S ? "MSPointerCancel" : "touchcancel";

    function ce(a) {
        return function(b) {
            b.touches = [];
            b.targetTouches = [];
            b.changedTouches = [];
            b.type != ae && (b.touches[0] = b, b.targetTouches[0] = b);
            b.changedTouches[0] = b;
            a(b)
        }
    }

    function de(a) {
        var b;
        if (b = -1 != navigator.userAgent.indexOf("Android") && -1 != navigator.userAgent.indexOf("Chrome/")) b = Ud.exec(navigator.userAgent), b = 18 == +(b ? b[1] : "").split(".")[0];
        return b ? new Nb(a.clientX, a.pageY - window.scrollY) : new Nb(a.clientX, a.clientY)
    }

    function ee(a) {
        return (S ? [a] : a.changedTouches) || []
    }

    function T(a) {
        return S ? a.pointerId : a.identifier
    }
    var fe = C ? "-ms-" : E ? "-moz-" : tb ? 0 > wa("15.0") ? "-o-" : "-webkit-" : "-webkit-",
        ge = C ? "ms" : E ? "Moz" : tb ? 0 > wa("15.0") ? "O" : "webkit" : "webkit",
        he = fe + "transform",
        ie = ge + "Transform",
        je = ge + "Transition";

    function ke() {
        this.F = [];
        this.B = []
    }

    function le(a, b) {
        for (; a.length && 250 < b - a[1] || 10 < a.length;) a.splice(0, 2)
    }

    function me(a, b) {
        var c = Math.abs(b);
        5 < c && (c = 6 > a.B.length ? 1 : 5);
        return c * (0 > b ? -1 : 1)
    }

    function U(a, b, c) {
        this.m = a;
        this.H = b;
        this.S = c;
        this.I = [];
        this.ia = [];
        this.sb = [];
        this.tb = [];
        this.ua = [];
        this.va = []
    }
    U.prototype.j = 0;

    function ne(a, b) {
        for (var c, d = ee(b), e = d.length, f = 0; f < a.j; f++) {
            a.ia[f] = void 0;
            for (var g = 0; g < e; g++)
                if (a.I[f] == T(d[g])) {
                    a.ia[f] = d[g];
                    c = !0;
                    break
                }
        }
        return c
    }
    U.prototype.Sb = function(a) {
        if (!this.qb && this.j != this.S) {
            for (var b = ee(a), c = Math.min(b.length, this.S - this.j), d = 0; d < c; d++) {
                var e = b[d];
                this.I[this.j] = T(e);
                this.ua[this.j] = e.clientX;
                this.va[this.j] = e.clientY;
                this.j++
            }
            ne(this, a);
            if (this.j == this.S)
                for (d = 0; d < this.S; d++) this.sb[d] = this.tb[d] = 0;
            this.tc(a)
        }
    };
    U.prototype.ib = function(a) {
        if (!this.qb && 0 < this.j && ne(this, a)) {
            this.ba && this.Qb(a);
            a = this.j;
            for (var b = 0, c = 0; c < a; c++) this.ia[c] && (this.I.splice(c - b, 1), this.j--, this.ba = !1, b++)
        }
    };
    U.prototype.reset = function() {
        this.j = 0;
        this.qb = this.ba = !1
    };

    function oe(a, b) {
        var c = b || 0,
            d = a.ia[c];
        return d ? d.clientX : a.m[a.I[c || 0]]
    }

    function pe(a, b) {
        var c = b || 0,
            d = a.ia[c];
        return d ? d.clientY : a.H[a.I[c || 0]]
    }
    "WebKitCSSMatrix" in window && new WebKitCSSMatrix("");

    function qe(a, b) {
        var c = "translate3d(" + b + "px,0px,0px)";
        n(void 0) && (c += " scale3d(undefined,undefined,1)");
        a.style[ie] = c
    }
    var V, re, se, te, ue = Mb("wireless.events.clickbuster");

    function ve(a) {
        if (!(2500 < t() - re)) {
            var b = de(a);
            if (1 > b.x && 1 > b.y) ue && ue.log(Fb, "Not busting click on label elem at (" + b.x + ", " + b.y + ")", void 0);
            else {
                for (var c = 0; c < V.length; c += 2)
                    if (25 > Math.abs(b.x - V[c]) && 25 > Math.abs(b.y - V[c + 1])) {
                        V.splice(c, c + 2);
                        return
                    }
                ue && ue.log(Fb, "busting click at " + b.x + ", " + b.y, void 0);
                a.stopPropagation();
                a.preventDefault();
                (a = se) && a()
            }
        }
    }

    function we(a) {
        var b = de((a.touches || [a])[0]);
        V.push(b.x, b.y);
        window.setTimeout(function() {
            for (var a = b.x, d = b.y, e = 0; e < V.length; e += 2)
                if (V[e] == a && V[e + 1] == d) {
                    V.splice(e, e + 2);
                    break
                }
            se = void 0
        }, 2500)
    }

    function xe(a, b, c) {
        U.call(this, b, c, 2);
        this.ac = a
    }
    u(xe, U);
    xe.prototype.tc = aa;
    xe.prototype.sc = function(a) {
        return this.ac.he(a)
    };
    xe.prototype.Rb = function(a) {
        this.ac.ge(a);
        a.preventDefault()
    };
    xe.prototype.Qb = function(a) {
        this.ac.fe(a);
        a && a.preventDefault()
    };

    function ye(a, b, c) {
        U.call(this, b, c, 1);
        this.Jb = a;
        this.Ib = new ke
    }
    u(ye, U);
    ye.prototype.tc = function(a) {
        var b = this.Ib,
            c = this.ua[0],
            d = this.va[0];
        a = a.timeStamp;
        b.F.length = b.B.length = 0;
        b.F.push(c, a);
        b.B.push(d, a);
        b.Gb = c;
        b.Hb = d;
        this.Gb = this.ua[0];
        this.Hb = this.va[0]
    };
    ye.prototype.sc = function() {
        var a = this.Jb,
            b = a.za;
        if (b = Math.abs(ze(a.za)) > Math.abs(pe(b) - b.Hb))
            for (var c = 0; c < a.Wb.length; ++c) a.Wb[c].stop(), a.Wb[c].ee().reset();
        b && Xd(a.V, Ae, a);
        return b
    };
    ye.prototype.Rb = function(a) {
        this.Gb = this.ua[0];
        this.Hb = this.va[0];
        var b = this.Ib,
            c = oe(this),
            d = pe(this),
            e = a.timeStamp,
            f = b.F[b.F.length - 2] - c,
            g = b.B[b.B.length - 2] - d,
            k = b.F,
            l = b.rd;
        l && f && 2 < k.length && 0 < l ^ 0 < f && k.splice(0, k.length - 2);
        k = b.B;
        (l = b.sd) && g && 2 < k.length && 0 < l ^ 0 < g && k.splice(0, k.length - 2);
        le(b.F, e);
        le(b.B, e);
        b.F.push(c, e);
        b.B.push(d, e);
        b.rd = f;
        b.sd = g;
        b = this.Jb;
        a.stopPropagation();
        c = ze(b.za) || 0;
        if (!b.X && 0 < c || b.X == b.Ua.length - 1 && 0 > c) c /= 2;
        qe(b.V, b.Ya + c);
        a.preventDefault()
    };
    ye.prototype.Qb = function(a) {
        if (a) {
            var b;
            b = this.Ib;
            var c = this.m[this.I[0]],
                d = this.H[this.I[0]],
                e = a.timeStamp;
            n(c) && n(d) && e ? (le(b.F, e), le(b.B, e), c = b.F.length ? (c - b.F[0]) / (e - b.F[1]) : 0, d = b.B.length ? (d - b.B[0]) / (e - b.B[1]) : 0, c = me(b, c), d = me(b, d), b = new Nb(c, d)) : b = void 0;
            this.bd = b || void 0;
            a.preventDefault()
        }
        this.Jb.Pb(a);
        b = this.ua[0];
        d = this.va[0];
        if (e = a) n(te) || (e = Td.exec(navigator.userAgent) || [], e.shift(), te = Sd.apply(null, e) >= Sd(6) || !1), e = te;
        if (e) a.preventDefault();
        else
            for (se = void 0, V || (document.addEventListener("click",
                    ve, !0), a = we, Yd || S || (a = ce(a)), Vd(document, Zd, a, !0, !0), V = []), re = t(), a = 0; a < V.length; a += 2)
                if (25 > Math.abs(b - V[a]) && 25 > Math.abs(d - V[a + 1])) {
                    V.splice(a, a + 2);
                    break
                }
    };

    function ze(a) {
        return oe(a) - a.Gb
    }

    function Be(a) {
        this.ub = a;
        this.a = this.ub.A();
        this.m = {};
        this.H = {};
        this.l = []
    }
    var Ce = [ye, xe];
    h = Be.prototype;
    h.Qd = function(a) {
        var b = a.touches || [a],
            c = b.length,
            d;
        for (d in this.m) {
            for (var e = 0; e < c; e++)
                if (d == T(b[e])) {
                    var f = !0;
                    break
                }
            f || De(this, +d)
        }
        b = ee(a);
        c = b.length;
        for (e = 0; e < c; e++) d = T(b[e]), n(this.m[d]) && De(this, +d);
        c = !0;
        e = this.l.length;
        for (b = 0; b < e; b++)
            if ((d = this.l[b]) && d.j != d.S) {
                c = !1;
                break
            }
        if (!c && this.ub.Sb(a)) {
            c = ee(a);
            d = c.length;
            for (b = 0; b < d; b++) {
                var f = c[b],
                    g = T(f);
                this.m[g] = f.clientX;
                this.H[g] = f.clientY
            }
            for (b = 0; b < e; b++)(d = this.l[b]) && d.Sb(a)
        }
    };
    h.Od = function(a) {
        for (var b = !0, c = this.l.length, d = 0; d < c; d++) {
            var e = this.l[d];
            if (e && 0 < e.j) {
                b = !1;
                break
            }
        }
        if (!b) {
            for (d = 0; d < c; d++)
                if (e = this.l[d])
                    if (b = e, e = a, !b.qb && b.j == b.S && ne(b, e))
                        if (b.ba) b.Rb(e);
                        else {
                            for (var f = void 0, g = 0; g < b.S; g++) {
                                var k = b.ia[g];
                                if (k) {
                                    var l = b.I[g],
                                        D = b.H[l] - k.clientY;
                                    b.sb[g] += Math.abs(b.m[l] - k.clientX);
                                    b.tb[g] += Math.abs(D);
                                    f = f || 2 < b.sb[g] || 2 < b.tb[g]
                                }
                            }
                            if (f) {
                                for (g = 0; g < b.S; g++) b.ua[g] = oe(b, g), b.va[g] = pe(b, g);
                                b.ba = b.sc(e);
                                b.ba ? b.Rb(e) : b.reset()
                            }
                        }
            a = ee(a);
            c = a.length;
            for (d = 0; d < c; d++) b = a[d], e = T(b),
                n(this.m[e]) && (this.m[e] = b.clientX, this.H[e] = b.clientY)
        }
    };
    h.Gd = function(a) {
        for (var b = ee(a), c = b.length, d, e = 0; e < c; e++) {
            var f = b[e],
                f = T(f);
            n(this.m[f]) && (this.ub.ib(a), d = !0)
        }
        if (d) {
            d = this.l.length;
            for (e = 0; e < d; e++)(f = this.l[e]) && f.ib(a);
            for (e = 0; e < c; e++) f = b[e], f = T(f), n(this.m[f]) && (delete this.m[f], delete this.H[f])
        }
    };

    function De(a, b) {
        a.ub.ib(null);
        for (var c = a.l.length, d = 0; d < c; d++) {
            var e = a.l[d];
            if (e) {
                var f = e;
                if (!f.qb && 0 < f.j) {
                    for (var e = void 0, g = 0; g < f.j; g++)
                        if (f.I[g] == b) {
                            e = g;
                            break
                        }
                    n(e) && (f.ba && f.Qb(null), f.I.splice(e, 1), f.j--, f.ba = !1)
                }
            }
        }
        delete a.m[b];
        delete a.H[b]
    }
    h.enable = function(a, b) {
        var c = r(this.Gd, this),
            d = this.a,
            e = r(this.Qd, this),
            f = r(this.Od, this),
            g = c;
        Yd || S || (e = ce(e), f = ce(f), g = ce(g));
        var k = !!a;
        Vd(d, Zd, e, k, b);
        Vd(d, $d, f, k, b);
        Vd(d, ae, g, k, b);
        Vd(d, be, c, k, b)
    };
    h.reset = function() {
        for (var a in this.m) delete this.m[Number(a)], delete this.H[Number(a)];
        for (a = 0; a < this.l.length; a++) {
            var b = this.l[a];
            b && b.reset()
        }
    };
    Qd++;
    Qd++;
    Qd++;
    Qd++;
    Qd++;

    function Ee(a, b, c, d, e) {
        this.V = b;
        this.Ua = c;
        this.X = d;
        this.ya = e;
        this.lc = new Be(this)
    }
    var Fe = "slider:card_changed_" + Qd++,
        Ae = "slider:start_slide_" + Qd++;
    h = Ee.prototype;
    h.Ya = 0;
    h.Gc = 200;
    h.Hc = .005;

    function Ge(a) {
        a.Wb = [];
        He(a);
        Ie(a);
        a.lc.enable(!1);
        var b;
        b = a.lc;
        var c = b.l[0];
        c ? b = c : (c = new Ce[0](a, b.m, b.H), b = b.l[0] = c);
        a.za = b
    }
    h.resize = function(a) {
        a != this.ya && (this.ya = a, He(this), Ie(this))
    };

    function He(a) {
        for (var b = 0, c; c = a.Ua[b]; b++) c.style.width = a.ya + "px"
    }
    h.A = function() {
        return this.V
    };
    h.Sb = function() {
        this.V.style[je] = "";
        return !0
    };
    h.Pb = function() {
        var a = ze(this.za),
            b = this.za.bd.x,
            c = Math.round(-(this.Ya + a) / this.ya);
        Math.abs(b) > this.Hc && (b = 0 > b, 0 != a && b != 0 > a ? c = this.X : c == this.X && (c += b ? 1 : -1));
        Je(this, c, !0)
    };

    function Je(a, b, c) {
        b = Math.max(0, Math.min(a.Ua.length - 1, b));
        a.X = b;
        Ie(a, c);
        Xd(a.V, Fe, a)
    }

    function Ie(a, b) {
        a.Ya = -a.X * a.ya;
        a.V.style[je] = b ? he + " " + a.Gc + "ms ease-in-out" : "";
        qe(a.V, a.Ya)
    }
    h.ib = function() {};

    function Ke(a, b) {
        P.call(this, b);
        var c = a || {};
        this.ld = x(c, "isCalculateHeight", !0);
        this.W = x(c, "cssNamespace", Le);
        this.Tb = x(c, "paramName", "tab");
        this.rb = [];
        this.ja = [];
        this.Ab = {};
        this.zb = [];
        this.G = 0;
        this.O = {
            be: this.W,
            Nc: this.W + "-" + Me,
            bc: this.W + "-" + Ne,
            Oc: this.W + "-" + Oe,
            Pc: this.W + "-" + Pe,
            cc: this.W + "-" + Qe,
            Uc: this.W + "-" + Re
        };
        n(Se) || (c = H("input", {
            id: "history_state",
            style: "display:none;",
            type: "hidden"
        }), document.body.appendChild(c), Se = new cd(!1, null, c), jd(Se, !0));
        this.Fa = Se
    }
    var Se;
    u(Ke, P);
    var Le = "gweb-tabset",
        Me = "content",
        Ne = "content-active",
        Oe = "contents",
        Pe = "nav",
        Qe = "nav-active",
        Re = "visible";
    h = Ke.prototype;
    h.f = function() {
        Ke.i.f.call(this);
        this.a = this.$a().createElement("div")
    };
    h.J = function(a) {
        Ke.i.J.call(this, a);
        this.a = a;
        a = this.A();
        this.Fc = Wb("div", this.O.Pc, a)[0];
        this.rb = Wb("li", null, this.Fc);
        this.Zc = Wb("div", this.O.Oc, a)[0];
        this.ja = Vb(this.O.Nc, a);
        a = 0;
        for (var b; b = this.ja[a]; a++) b = b.id || "UNDEFINED-CONTENT-ITEM-" + a, this.Ab[b] = a, this.zb[a] = b;
        this.G = Te(this);
        Ue(this, this.G, !1);
        Q(this).c(this.Fa, "navigate", this.gd);
        this.ld && lc(this.Zc, "min-height", Ve(this) + "px");
        N(this.A(), this.O.Uc)
    };
    h.$ = function() {
        Ke.i.$.call(this);
        for (var a = Q(this), b = 0, c; c = this.rb[b]; b++) c = Wb("a", null, c)[0], a.c(c, "click", ja(this.fd, b))
    };
    h.gd = function(a) {
        var b = Te(this);
        b != this.G && a.nd && Ue(this, b, !1)
    };
    h.fd = function(a, b) {
        b.preventDefault();
        Ue(this, a, !0)
    };

    function Te(a) {
        var b;
        b = new RegExp(a.Tb + "=[A-Za-z0-9_-]+", "g");
        var c = M(a.Fa).match(b);
        if (c && c[0])
            for (var d = c.length, e = 0; e < d; e++) {
                b = c[e].split("=")[1];
                var f = a.Ab;
                if (null !== f && b in f) return x(a.Ab, b)
            }
        return 0
    }

    function Ve(a) {
        var b = I(a.Fc).height,
            c = I(a.ja[0]).height;
        Ea(a.ja, function(a, b) {
            0 < b && (c = Math.max(c, I(a).height))
        }, a);
        return Math.max(b, c)
    }

    function Ue(a, b, c) {
        c = n(c) ? c : !0;
        O(a.rb[a.G], a.O.cc);
        O(a.ja[a.G], a.O.bc);
        N(a.rb[b], a.O.cc);
        N(a.ja[b], a.O.bc);
        if (c) {
            var d = new RegExp(a.Tb + "=" + a.zb[a.G], "g");
            c = a.Tb + "=" + a.zb[b];
            var e = M(a.Fa);
            (d = e.match(d)) && d[0] ? (c = e.replace(d[0], c), od(a.Fa, c)) : od(a.Fa, e + (e ? "&" + c : c))
        }
        a.G = b;
        a.dispatchEvent(new We)
    }

    function We() {
        J.call(this, Xe)
    }
    u(We, J);
    var Xe = "tab-select";

    function Ye(a, b) {
        P.call(this, b);
        var c = a || {};
        this.h = this.$a();
        this.od = x(c, "isSupportTouches", Yd);
        this.qc = this.oa() ? Ze : x(c, "keyboardMode", $e);
        this.Wa = x(c, "class", af);
        var d = x(c, "itemsPerPage"),
            e = 1;
        da(d) && (e = d);
        this.qd = e;
        this.Ud = x(c, "prevText", bf);
        this.Ad = x(c, "nextText", cf);
        this.ad = x(c, "dotText", df);
        this.Cb = x(c, "contents", []);
        this.Ic = x(c, "unrollContent");
        this.xd = x(c, "isNavUnselectable", !0);
        this.kd = x(c, "isAutoRotate", !0);
        this.Yc = x(c, "autoRotateInterval", 5E3);
        this.fb = x(c, "isLoop", !0);
        this.pc = x(c, "isDisplay", !1);
        this.pd = x(c, "isTopNav", !1);
        this.$c = this.pc ? ef : x(c, "dotPosition", ff);
        this.dc = x(c, "autoTracker");
        this.Ec = x(c, "stopTimerWhenHover", !0);
        this.Ob = this.wc = "DIV"
    }
    u(Ye, P);
    var af = "gweb-pagination",
        bf = "\u2190",
        cf = "\u2192",
        df = "%d",
        $e = "always",
        Ze = "disabled",
        ff = "front",
        ef = "middle";
    h = Ye.prototype;
    h.G = 0;
    h.Ka = 0;
    h.D = !1;
    h.f = function() {
        var a = this.h,
            b = [],
            c;
        if (this.Cb.length)
            for (var d = 0, e = this.Cb.length; d < e; d++) b.push(a.f("div", W(this, "content"), ic(a, pb(this.Cb[d], null))));
        else b.push(a.f("div", W(this, "content")));
        this.Ic && (c = a.f("div", W(this, "unroll"), ic(a, pb(this.Ic, null))));
        a = a.f("div", W(this, this.Wa), b, c);
        this.J(a)
    };
    h.J = function(a) {
        var b = this.h;
        "UL" == a.tagName && (this.wc = "UL", this.Ob = "LI");
        this.a = a;
        this.pc && N(this.a, W(this, "display"));
        this.oa() && N(this.a, W(this, "touch"));
        this.hc = b.Kb(W(this, "content"), this.a);
        this.g = [];
        a = 0;
        for (var c = this.hc.length; a < c; a++) {
            var d = this.g.length - 1,
                e = this.hc[a];
            0 == a % this.qd ? this.g.push(b.f(this.wc, W(this, "page"), e)) : b.appendChild(this.g[d], e)
        }
        this.ga = b.f("div", W(this, "scroll"), this.g);
        this.R = b.f(this.Ob, W(this, "expose"), this.ga);
        this.Zb = b.ab(W(this, "unroll"), this.a);
        b.zc(this.a);
        b.appendChild(this.a, this.R);
        b = this.h;
        a = [];
        c = b.f("li", null, this.Na = b.f("span", W(this, "prev"), this.Ud));
        d = b.f("li", null, this.Ma = b.f("span", W(this, "next"), this.Ad));
        this.P = [];
        for (var e = 0, f = this.g.length; e < f; e++) a.push(b.f("li", null, this.P[e] = b.f("span", W(this, "dot"), this.ad.replace("%d", e + 1))));
        switch (this.$c) {
            case ef:
                a = Ja(c, a, d);
                break;
            case "end":
                a = Ja(c, d, a);
                break;
            default:
                a = Ja(a, c, d)
        }
        this.hb = b.f(this.Ob, W(this, "nav"), this.Zb, this.wd = b.f("ul", null, a));
        if (this.xd)
            if (d = this.wd, a = d.getElementsByTagName("*"),
                rc) {
                if (c = "none", d.style && (d.style[rc] = c), a)
                    for (d = 0; e = a[d]; d++) e.style && (e.style[rc] = c)
            } else if (C || tb)
            if (c = "on", d.setAttribute("unselectable", c), a)
                for (d = 0; e = a[d]; d++) e.setAttribute("unselectable", c);
        this.pd ? (b = this.R, b.parentNode && b.parentNode.insertBefore(this.hb, b)) : b.appendChild(this.a, this.hb)
    };
    h.$ = function() {
        this.Lc();
        gf(this);
        hf(this);
        var a = Q(this);
        a.c(this.Na, "click", this.Ed);
        a.c(this.Ma, "click", this.Dd);
        for (var b = 0, c = this.P.length; b < c; b++) a.c(this.P[b], "click", ja(this.Cd, b));
        a.c(this.a, "mouseover", this.Nd);
        a.c(this.a, "mouseout", this.Md);
        this.kd && this.fb && (jf(this), a.c(this, "enter", this.Hd), a.c(this, "leave", this.Kd));
        if (this.qc != Ze) switch (this.qc) {
            case $e:
                this.ec();
                break;
            case "hover":
                a.c(this, "enter", this.ec), a.c(this, "leave", this.ae)
        }
        a.c(this, "flip", this.Id);
        a.c(jc(this.h), "resize",
            this.Lc);
        this.dispatchEvent("show");
        N(this.a, W(this, "ready"));
        this.dc && kf(this)
    };
    h.s = function() {
        for (var a = this.h, b = 0, c = this.g.length; b < c; b++) kc(this.g[b]);
        kc(this.ga);
        kc(this.R);
        this.Zb && a.appendChild(this.a, this.Zb);
        a.removeNode(this.hb);
        this.vb && this.a && (O(this.a, W(this, this.vb)), this.vb = "");
        O(this.a, W(this, "ready"));
        O(this.a, W(this, "touch"));
        Ye.i.s.call(this)
    };
    h.fc = function(a) {
        return a && this.h.ab(W(this, "content"), a)
    };

    function W(a, b) {
        return a.Wa == b ? a.Wa : a.Wa + "-" + b
    }

    function X(a) {
        return parseInt(a.G, 10)
    }
    h.oa = function() {
        return this.od
    };

    function lf(a, b) {
        a.Ka = a.G;
        a.G = parseInt(b, 10)
    }

    function hf(a) {
        if (0 != a.P.length) {
            var b = a.P[X(a)];
            O(a.P[parseInt(a.Ka, 10)], W(a, "active"));
            N(b, W(a, "active"));
            a.fb || mf(a, function() {
                N(this.Na, W(this, "disabled"));
                O(this.Ma, W(this, "disabled"))
            }, function() {
                N(this.Ma, W(this, "disabled"));
                O(this.Na, W(this, "disabled"))
            }, function() {
                O(this.Na, W(this, "disabled"));
                O(this.Ma, W(this, "disabled"))
            })
        }
    }

    function gf(a) {
        O(a.g[a.Ka], W(a, "active"));
        N(a.g[X(a)], W(a, "active"))
    }

    function Y(a, b) {
        a.D = !1;
        if (X(a) != b) {
            a.b && a.b && a.b.stop();
            var c;
            mf(a, function() {
                0 > b ? this.fb && (c = this.g.length - 1) : c = b > this.g.length - 1 ? this.g.length - 1 : b
            }, function() {
                b > this.g.length - 1 ? this.fb && (c = 0) : c = 0 > b ? 0 : b
            }, function() {
                c = 0 > b ? 0 : b > this.g.length - 1 ? this.g.length - 1 : b
            });
            n(c) && (lf(a, c), a.D = !0, a.dispatchEvent("flip"));
            a.b && jf(a)
        }
    }

    function jf(a) {
        a.b || (a.b = new Vc(a.Yc), Q(a).c(a.b, Wc, a.Rd));
        a.b.start()
    }

    function nf(a) {
        a.b && (a.b.stop(), a.b.start())
    }

    function kf(a) {
        var b = a.dc,
            c = Q(a),
            d = a.A().id,
            e = "Module: Pagination" + (d && " - " + d);
        c.c(a, "clickprev", r(function() {
            b.trackEvent(e, "Button: Prev", "Page " + (X(this) + 1));
            this.D && b.trackEvent(e, "Button: Prev (Flipped)", "Page " + (X(this) + 1))
        }, a));
        c.c(a, "clicknext", r(function() {
            b.trackEvent(e, "Button: Next", "Page " + (X(this) + 1));
            this.D && b.trackEvent(e, "Button: Next (Flipped)", "Page " + (X(this) + 1))
        }, a));
        c.c(a, "clickdot", r(function() {
            b.trackEvent(e, "Button: Dot", "Page " + (X(this) + 1))
        }, a));
        c.c(a, "keyprev", r(function() {
            b.trackEvent(e,
                "Keyboard: Prev", "Page " + (X(this) + 1));
            this.D && b.trackEvent(e, "Keyboard: Prev (Flipped)", "Page " + (X(this) + 1))
        }, a));
        c.c(a, "keynext", r(function() {
            b.trackEvent(e, "Keyboard: Next", "Page " + (X(this) + 1));
            this.D && b.trackEvent(e, "Keyboard: Next (Flipped)", "Page " + (X(this) + 1))
        }, a));
        a.oa() && (c.c(a, "swipe", r(function() {
            b.trackEvent(e, "Swipe", "Page " + (X(this) + 1));
            this.D && b.trackEvent(e, "Swipe (Flipped)", "Page " + (X(this) + 1))
        }, a)), c.c(a, "swipeprev", r(function() {
            b.trackEvent(e, "Swipe: Prev", "Page " + (X(this) + 1));
            this.D &&
                b.trackEvent(e, "Swipe: Prev (Flipped)", "Page " + (X(this) + 1))
        }, a)), c.c(a, "swipenext", r(function() {
            b.trackEvent(e, "Swipe: Next", "Page " + (X(this) + 1));
            this.D && b.trackEvent(e, "Swipe: Next (Flipped)", "Page " + (X(this) + 1))
        }, a)));
        c.c(a, "flip", r(function() {
            b.trackEvent(e, "Page Flip", "Page " + (X(this) + 1));
            this.D && b.trackEvent(e, "Page Flip (Flipped)", "Page " + (X(this) + 1))
        }, a))
    }

    function mf(a, b, c, d) {
        switch (!0) {
            case 0 == X(a):
                null === b || b.call(a);
                break;
            case X(a) == a.g.length - 1:
                null === c || c.call(a);
                break;
            default:
                null === d || d.call(a)
        }
    }
    h.Ed = function() {
        Y(this, X(this) - 1);
        nf(this);
        this.dispatchEvent("clickprev")
    };
    h.Dd = function() {
        Y(this, X(this) + 1);
        nf(this);
        this.dispatchEvent("clicknext")
    };
    h.Cd = function(a) {
        Y(this, a);
        nf(this);
        this.dispatchEvent("clickdot")
    };
    h.Rd = function() {
        Y(this, X(this) + 1)
    };
    h.Nd = function(a) {
        of(this, a.target) && a.relatedTarget && !of(this, a.relatedTarget) && this.dispatchEvent("enter")
    };
    h.Md = function(a) {
        of(this, a.target) && a.relatedTarget && !of(this, a.relatedTarget) && this.dispatchEvent("leave")
    };
    h.Hd = function() {
        this.b && this.Ec && this.b && this.b.stop()
    };
    h.Kd = function() {
        this.b && this.Ec && jf(this)
    };
    h.Id = function() {
        gf(this);
        hf(this)
    };
    h.uc = function(a) {
        var b = xd(this) ? 39 : 37,
            c = xd(this) ? 37 : 39;
        a.keyCode == b ? (Y(this, X(this) - 1), this.dispatchEvent("keyprev")) : a.keyCode == c && (Y(this, X(this) + 1), this.dispatchEvent("keynext"))
    };
    h.ec = function() {
        Q(this).c(this.h.w, "keydown", this.uc)
    };
    h.ae = function() {
        Q(this).Sa(this.h.w, "keydown", this.uc)
    };

    function of(a, b) {
        return Boolean(a.h.cd(b, r(function(a) {
            return a == this.a
        }, a)))
    }

    function Z(a, b) {
        var c = a || {};
        Ye.call(this, c, b);
        this.md = x(c, "isCalculateWidth", !0)
    }
    u(Z, Ye);
    Z.prototype.J = function(a) {
        Z.i.J.call(this, a);
        this.vb = "slide";
        this.a && N(this.a, W(this, this.vb))
    };
    Z.prototype.$ = function() {
        Z.i.$.call(this);
        pf(this);
        var a = Q(this),
            b = this.ga,
            c = this.R,
            d = this.g;
        this.oa() && (this.Pa = new qf(0, b, d, X(this), I(c).width, this), this.Pa.Gc = 200, this.Pa.Hc = .01, Ge(this.Pa), Vd(b, Fe, r(function(a) {
            Y(this, a.sender.X)
        }, this)), a.c(this, ["clickprev", "clicknext", "clickdot"], r(function() {
            var a = this.Pa,
                b = X(this);
            a.Ua = d;
            He(a);
            Je(a, b)
        }, this)));
        a.c(this, "flip", this.Kc);
        a.c(jc(this.$a()), "resize", r(function() {
            this.Kc();
            this.oa() && this.Pa.resize(I(c).width)
        }, this))
    };
    Z.prototype.Lc = function() {
        if (this.md) {
            for (var a = I(this.R).width, b = this.g, c = 0, d = b.length; c < d; c++) b[c].style.width = pc(a);
            this.ga.style.width = pc(a * d)
        }
    };
    Z.prototype.Kc = function() {
        var a = X(this) * I(this.R).width,
            b = this.jd + this.yd * a,
            c = this.ga;
        this.pa && this.oa() ? lc(c, this.$d, "translateX(" + b + "px)") : lc(c, this.ud, -a + "px")
    };

    function pf(a) {
        var b = a.ga,
            c = "";
        a.yd = xd(a) ? 1 : -1;
        a.jd = xd(a) ? I(a.R).width - I(a.ga).width : 0;
        a.pa = !1;
        a.ud = xd(a) ? "margin-right" : "margin-left";
        switch (!0) {
            case n(b.style.MozTransform):
                a.pa = !0;
                c = "-moz-";
                break;
            case n(b.style.msTransform):
                a.pa = !0;
                c = "ms-";
                break;
            case n(b.style.OTransform):
                a.pa = !0;
                c = "-o-";
                break;
            case n(b.style.WebkitTransform):
                a.pa = !0;
                c = "-webkit-";
                break;
            case n(b.style.transform):
                a.pa = !0
        }
        a.$d = c + "transform"
    }

    function qf(a, b, c, d, e, f) {
        Ee.call(this, 0, b, c, d, e);
        this.Wd = f
    }
    u(qf, Ee);
    qf.prototype.Pb = function(a) {
        qf.i.Pb.call(this, a);
        a = this.Wd;
        parseInt(a.Ka, 10) > X(a) ? a.dispatchEvent("swipeprev") : a.dispatchEvent("swipenext");
        a.dispatchEvent("swipe")
    };

    function rf(a) {
        if (null != a) switch (a.yb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function sf() {
        Ad.call(this)
    }
    u(sf, Ad);
    sf.prototype.Bb = yd;

    function tf(a) {
        return null != a && a.Bb === yd ? a : a instanceof hb ? uf(A(a), a.ma()) : uf(oa(String(String(a))), rf(a))
    }
    var uf = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.yb = d);
            return e
        }
    }(sf);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = String(a);
            if (!e) return "";
            e = new b(e);
            void 0 !== d && (e.yb = d);
            return e
        }
    })(sf);

    function vf(a) {
        return '<div class="gallery-content"><a href="//www.youtube.com/watch?v=' + tf(a.key) + "&list=" + tf(a.Td) + '" data-key="' + tf(a.key) + '" data-description="' + tf(a.description) + '" class="cinema-stage-thumbnail" data-index="' + tf(a.index) + '"><img src="' + tf(a.src) + '" alt=""><p class="gallery-caption">' + tf(a.title) + "</a></div>"
    }
    vf.ke = "loon.cinema.thumbnail";

    function wf(a) {
        P.call(this, a);
        this.$b = "";
        this.Ca = [];
        this.Xa = this.gb = 0
    }
    u(wf, P);
    h = wf.prototype;
    h.J = function(a) {
        wf.i.J.call(this, a);
        this.a = a;
        this.gb = parseInt(R(this.A(), "animFrames"), 10);
        a = this.A().getElementsByTagName("img");
        if (!a.length) throw this.ka(), "An <img> element must be placed inside the container element.";
        this.Ca.push(a[0]);
        a = new Jd;
        for (var b = 2; b <= this.gb; b++) {
            var c = xf(this, b);
            (c = q(c) ? c : c.src) && (a.Ha["seq-" + b] = {
                src: c,
                ic: n(void 0) ? void 0 : null
            })
        }
        Q(this).c(a, "complete", this.Vd);
        a.start()
    };

    function xf(a, b) {
        a.$b || (a.$b = a.Ca[0].src.replace("-1.", "-%d."));
        return a.$b.replace("%d", b)
    }
    h.Vd = function() {
        var a = Q(this);
        yf(this, 1);
        for (var b = document.createDocumentFragment(), c = 2; c <= this.gb; c++) {
            var d = new Image;
            d.src = xf(this, c);
            b.insertBefore(d, b.childNodes[0] || null);
            this.Ca.push(d)
        }
        c = this.A();
        c.insertBefore(b, c.childNodes[0] || null);
        a.c(this.A(), "mouseover", this.start);
        a.c(this.A(), "mouseout", this.pause)
    };

    function yf(a, b) {
        a.Xa && Hd(a.Ca[a.Xa - 1]);
        Gd(a.Ca[b - 1]);
        a.Xa = b
    }
    h.Bd = function() {
        var a = this.Xa + 1;
        a > this.gb && (a = 1);
        yf(this, a)
    };
    h.start = function() {
        this.b || (this.b = new Vc(42), Q(this).c(this.b, Wc, this.Bd));
        this.b.start()
    };
    h.stop = function() {
        this.b && this.b.stop();
        yf(this, 1)
    };
    h.pause = function() {
        this.b && this.b.stop()
    };

    function zf(a) {
        if (this.element = a)
            if (this.frames = parseInt(R(this.element, "frames"), 10)) this.Yb = new Vc(80), this.bind()
    }
    h = zf.prototype;
    h.Y = 0;
    h.bind = function() {
        K(this.element, "mouseover", this.start, !1, this);
        K(this.element, "mouseout", this.stop, !1, this);
        K(this.Yb, Wc, this.Xc, !1, this)
    };
    h.start = function() {
        this.Yb.start()
    };
    h.stop = function() {
        this.Yb.stop();
        this.reset()
    };
    h.Xc = function() {
        var a = this.Y + 1,
            a = a > this.frames ? 1 : a;
        this.Y && O(this.element, "button-frame-" + this.Y);
        N(this.element, "button-frame-" + a);
        this.Y = a
    };
    h.reset = function() {
        this.Y && O(this.element, "button-frame-" + this.Y);
        this.Y = 0
    };

    function Af(a, b) {
        this.a = b;
        if (!this.a) throw "Cannot find the container element.";
        this.Db = {};
        this.xc = a;
        this.L = this.Ub = null;
        this.Qa = [];
        this.ob = null;
        this.nb = 0;
        this.Eb = this.yc = this.Za = null;
        window.googleApiClientReady = r(function() {
            gapi.client.load("youtube", "v3", r(function() {
                var a = this;
                gapi.client.youtube.playlistItems.list({
                    part: "snippet",
                    playlistId: this.xc,
                    maxResults: 50
                }).execute(function(b) {
                    a.Ld.call(a, b)
                })
            }, this));
            gapi.client.setApiKey("AIzaSyBQU22U20JOmcU4kmTWMBSEP-3jnHoq1Dw")
        }, this)
    }
    Af.prototype.Ld = function(a) {
        if (a && !a.error) {
            this.Db = a;
            dc(this.a);
            this.Ub = H("iframe");
            this.Dc = H("p", "cinema-stage-caption");
            a = H("div", "cinema-stage", H("div", "video", this.Ub), this.Dc);
            cc(this.a, a);
            a = document.createDocumentFragment();
            for (var b = this.Db.items, c = b.length - 1, d; d = b[c]; c--) {
                var e = d.snippet;
                d = e.resourceId.videoId;
                e = {
                    key: d,
                    title: e.title.replace("Ask Away: ", ""),
                    description: e.description.replace(/\n/, " "),
                    src: e.thumbnails.medium.url,
                    Td: this.xc,
                    index: c
                };
                a: {
                    var f = vf(e || Dd),
                        e = Rb().createElement("DIV"),
                        f = Bd(f);f.match(Cd);e.innerHTML = f;
                    if (1 == e.childNodes.length && (f = e.firstChild, 1 == f.nodeType)) {
                        e = f;
                        break a
                    }
                }
                f = e.getElementsByTagName("A")[0];
                this.Qa.push(f);
                "mcw6j-QWGMo" == d && (this.Eb = f);
                a.appendChild(e)
            }
            this.Za = H("div", "gallery");
            this.Za.appendChild(a);
            this.a.appendChild(this.Za);
            this.L = new Z({
                "class": "gallery",
                isDisplay: !0,
                isAutoRotate: !1,
                itemsPerPage: 4,
                isSupportTouches: !1
            });
            ud(this.L, this.Za);
            a = H("div", "cinema-progress", this.yc = H("span"), document.createTextNode(String("/" + this.Db.items.length)));
            this.L.hb.appendChild(a);
            Bf(this);
            Cf(this);
            Df(this)
        }
    };

    function Bf(a) {
        K(a.L.R, "click", function(a) {
            var c = a.target.parentNode;
            Fd(c, "cinema-stage-thumbnail") && (Ef(this, c), a.preventDefault())
        }, !1, a)
    }

    function Ef(a, b) {
        var c = R(b, "key"),
            d = R(b, "description");
        if (c && d && a.ob != b) {
            a.ob && Ff(a, a.ob, !1);
            var e = a.Ub,
                f = document.getElementsByTagName("html")[0].getAttribute("lang"),
                f = f.replace(/^en\-?\w*$/, "");
            e.src = "//www.youtube.com/embed/" + c + "?modestbranding=1&rel=0&showinfo=0&autohide=1" + (f ? "&hl=" + f + "&cc_load_policy=1&cc_lang_pref=" + f : "");
            gc(a.Dc, d);
            Ff(a, b, !0)
        }
    }

    function Ff(a, b, c) {
        a.ob = c ? b : null;
        c ? Gd(b) : Hd(b);
        c && (a.nb = parseInt(R(b, "index"), 10), gc(a.yc, (a.nb + 1).toString()))
    }

    function Cf(a) {
        var b = hc(a.Eb, function(b) {
                return Fd(b, W(a.L, "page"))
            }, !1, 2),
            c = Ga(a.L.g, function(a) {
                return a === b
            });
        Ef(a, a.Eb);
        Y(a.L, c)
    }

    function Df(a) {
        K(a.L.Na, "click", function() {
            if (1226 > $b().width) {
                var a = this.nb - 1,
                    a = 0 > a ? this.Qa.length - 1 : a;
                Ef(this, this.Qa[a])
            }
        }, !1, a);
        K(a.L.Ma, "click", function() {
            if (1226 > $b().width) {
                var a = this.nb + 1,
                    a = a > this.Qa.length - 1 ? 0 : a;
                Ef(this, this.Qa[a])
            }
        }, !1, a)
    }
    var Gf = Xb("ending");
    Gf && (Gf.innerHTML += '<img src="../images/globe-semi.png" alt="">');
    new function(a) {
        a = a || {};
        this.Xd = Vb(x(a, "cssNamespace", Le));
        this.Yd = [];
        for (var b = 0, c; c = this.Xd[b]; b++) {
            var d = new Ke(a);
            this.Yd.push(d);
            ud(d, c)
        }
    }({
        cssNamespace: "tabs"
    });
    for (var Hf = Vb("gallery"), If = [], Jf = 0, Kf; Kf = Hf[Jf]; Jf++) {
        var Lf = new Z({
            "class": "gallery",
            isAutoRotate: !1,
            isDisplay: !0,
            isTopNav: !0
        });
        ud(Lf, Kf);
        var Mf = Lf.P.length,
            Nf = Lf.P[Mf - 1].parentNode,
            Of = Mf;
        Id && Nf.dataset ? Nf.dataset.itemCount = Of : Nf.setAttribute("data-" + Aa("itemCount"), Of);
        If.push(Lf)
    }
    var Pf = document.createElement("script");
    Pf.src = "https://www.youtube.com/iframe_api";
    var Qf = document.getElementsByTagName("script")[0];
    Qf.parentNode.insertBefore(Pf, Qf);
    window.onYouTubeIframeAPIReady = function() {
        for (var a = 0, b; b = If[a]; a++) {
            for (var c = b.g, d = [], e = 0, f; f = c[e]; e++)(f = Xb("video", f)) && (d[e] = new window.YT.Player(f.getElementsByTagName("iframe")[0].id));
            K(b, "flip", function() {
                var a = d[parseInt(this.Ka, 10)];
                this.D && a && a.pauseVideo()
            })
        }
    };
    var Rf = Xb("header").getElementsByTagName("h1")[0],
        Sf = Xb("nav");
    K(Rf, "click", function(a) {
        "a" != a.target.nodeName.toLowerCase() && (Ha(qd(Sf), "active") ? O(Sf, "active") : N(Sf, "active"))
    });
    var Tf = Ub(document, "flightpath");
    if (Tf) {
        var Uf = Xb("button", Tf),
            Vf = R(Uf, "closeText"),
            Wf = H("span", "button", Vf),
            Xf = R(Uf, "closeFrames");
        Id && Wf.dataset ? Wf.dataset.frames = Xf : Wf.setAttribute("data-" + Aa("frames"), Xf);
        Uf.parentNode && Uf.parentNode.insertBefore(Wf, Uf.nextSibling);
        K(Uf, "click", function(a) {
            a.preventDefault();
            N(Tf, "active")
        });
        K(Wf, "click", function() {
            O(Tf, "active")
        })
    }
    new function() {
        for (var a = Vb("button"), b = 0, c; c = a[b]; b++) new zf(c)
    };
    if (767 < $b().width) {
        var Yf = Xb("where-globe");
        Yf && ud(new wf, Yf)
    }
    for (var Zf = Vb("video"), $f = /watch\?v\=([^\&]+)/, Jf = 0, ag; ag = Zf[Jf]; Jf++) {
        var bg = ag.getElementsByTagName("a")[0];
        if (bg) {
            var cg = bg.href.match($f);
            cg && cg[1] && function(a) {
                var b = R(bg, "cc"),
                    c = b ? "&hl=" + b + "&cc_load_policy=1&cc_lang_pref=" + b : "";
                K(bg, "click", function(b) {
                    b.preventDefault();
                    a.innerHTML = '<iframe src="//www.youtube.com/embed/' + cg[1] + "?modestbranding=1&rel=0&showinfo=0&autoplay=1&autohide=1&origin=" + location.protocol + "//" + location.host + c + '" allowfullscreen frameborder="0"></iframe>'
                });
                vb && bg.click()
            }(ag)
        }
    }
    var dg = document.getElementById("askaway");
    dg && new Af("PLi7C1_I60LN7Z_CEMhl2w0pKVlwzlwMrs", dg);
})();

(function() {
    var lastTime = 0;
    var vendors = ["ms", "moz", "webkit", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = (new Date).getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall)
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
        clearTimeout(id)
    };
}());

(function() {
    var DETECTION = new detectionClass;

    function detectionClass() {
        var self = this;
        self.isMobile = null;
        self.isTouchDevice = null;
        self.appVersion = null;
        self.browser = null;
        self.browserVersion = null;
        self.OS = null;
        self.has3d = null;
        self.hasCanvas = null;
        self.init = function() {
            browserDetect();
            self.isTouchDevice = isTouchDevice();
            self.has3d = _has3d()
        };
        self.isTouch = function() {
            return !!("ontouchstart" in window)
        };
        self.hasCanvas = function() {
            var elem = document.createElement("canvas");
            return !!(elem.getContext && elem.getContext("2d"))
        }();

        function isTouchDevice() {
            var is = false;
            if (self.isTouch()) is = true;
            return is
        }

        function _has3d() {
            var el = document.createElement("p"),
                has3d, transforms = {
                    "WebkitTransform": "-webkit-transform",
                    "OTransform": "-o-transform",
                    "msTransform": "-ms-transform",
                    "MozTransform": "-moz-transform",
                    "transform": "transform"
                };
            document.body.insertBefore(el, null);
            for (var t in transforms)
                if (el.style[t] !== undefined) {
                    el.style[t] = "translate3d(1px,1px,1px)";
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t])
                }
            document.body.removeChild(el);
            return has3d !== undefined &&
                has3d.length > 0 && has3d !== "none"
        }

        function browserDetect() {
            var BrowserDetect = {
                init: function() {
                    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
                    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
                    this.OS = this.searchString(this.dataOS) || "unknown";
                    self.appVersion = navigator.appVersion;
                    self.browser = this.browser;
                    self.browserVersion = this.version;
                    self.OS = this.OS
                },
                searchString: function(data) {
                    for (var i = 0; i < data.length; i++) {
                        var dataString =
                            data[i].string;
                        var dataProp = data[i].prop;
                        this.versionSearchString = data[i].versionSearch || data[i].identity;
                        if (dataString) {
                            if (dataString.indexOf(data[i].subString) != -1) return data[i].identity
                        } else if (dataProp) return data[i].identity
                    }
                },
                searchVersion: function(dataString) {
                    var index = dataString.indexOf(this.versionSearchString);
                    if (index == -1) return;
                    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1))
                },
                dataBrowser: [{
                    string: navigator.userAgent,
                    subString: "Chrome",
                    identity: "Chrome"
                }, {
                    string: navigator.userAgent,
                    subString: "OmniWeb",
                    versionSearch: "OmniWeb/",
                    identity: "OmniWeb"
                }, {
                    string: navigator.vendor,
                    subString: "Apple",
                    identity: "Safari",
                    versionSearch: "Version"
                }, {
                    prop: window.opera,
                    identity: "Opera",
                    versionSearch: "Version"
                }, {
                    string: navigator.vendor,
                    subString: "iCab",
                    identity: "iCab"
                }, {
                    string: navigator.vendor,
                    subString: "KDE",
                    identity: "Konqueror"
                }, {
                    string: navigator.userAgent,
                    subString: "Firefox",
                    identity: "Firefox"
                }, {
                    string: navigator.vendor,
                    subString: "Camino",
                    identity: "Camino"
                }, {
                    string: navigator.userAgent,
                    subString: "Netscape",
                    identity: "Netscape"
                }, {
                    string: navigator.userAgent,
                    subString: "MSIE",
                    identity: "Explorer",
                    versionSearch: "MSIE"
                }, {
                    string: navigator.userAgent,
                    subString: "Gecko",
                    identity: "Mozilla",
                    versionSearch: "rv"
                }, {
                    string: navigator.userAgent,
                    subString: "Mozilla",
                    identity: "Netscape",
                    versionSearch: "Mozilla"
                }],
                dataOS: [{
                    string: navigator.platform,
                    subString: "Win",
                    identity: "Windows"
                }, {
                    string: navigator.platform,
                    subString: "Mac",
                    identity: "Mac"
                }, {
                    string: navigator.userAgent,
                    subString: "iPhone",
                    identity: "iPhone/iPod"
                }, {
                    string: navigator.platform,
                    subString: "Linux",
                    identity: "Linux"
                }]
            };
            BrowserDetect.init()
        }
    }
    var SCROLL = new scrollClass;

    function scrollClass() {
        var self = this;
        var scrollRatio = null;
        var scrollOffsetCenter = null;
        var curNumRules = null;
        var ruleWidth = 6;
        var ruleDist = 15;
        var ruleHeight = 2;
        var numActive = 5;
        var ruleArray = [];
        var dataPoints = [.4, .8, 1];
        var trackingRatios = [.3, .6, .9];
        var activeScrollSection = null;
        self.init = function() {
            buildRuler()
        };
        self.scrollTo = function() {};
        self.getScrollRatio = function() {
            return scrollRatio
        };
        self.scrollChange = function(scroll) {
            var scrollVal = $(document).scrollTop();
            scrollRatio = scrollVal / (CONFIG.contentHeight -
                CONFIG.windowHeight);
            scrollOffsetCenter = CONFIG.windowHeight / CONFIG.contentHeight;
            for (var i = 0; i < trackingRatios.length; i++)
                if (scrollRatio > trackingRatios[i]) {
                    var perc = trackingRatios[i] * 100;
                    trackEvent("engagement", "scroll", perc + "%");
                    trackingRatios[i] = 200
                }
            STARS.scrollUpdate(scrollRatio);
            var curScrollSection = 0
        };
        self.animate = function() {};

        function buildRuler() {
            curNumRules = Math.floor(CONFIG.windowHeight / (ruleHeight + ruleDist));
            var rulerHeight = curNumRules * (ruleHeight + ruleDist) - ruleDist;
            var startHeight = (CONFIG.windowHeight -
                rulerHeight) / 2;
            for (var i = 0; i < curNumRules; i++) {
                var tempRule = $("<div>", {
                    "class": "rule"
                }).css({
                    "top": startHeight + (ruleHeight + ruleDist) * i + "px"
                }).appendTo("#rulerContainer");
                ruleArray.push(tempRule)
            }
        }

        function updateRuler() {
            $(".rule").css("opacity", .1);
            var inactiveRuleCss = {
                "height": ruleHeight
            };
            $(".rule").css(inactiveRuleCss);
            var dataOffset = .3;
            for (var i = 0; i < dataPoints.length; i++) {
                var min = dataPoints[i] - dataOffset;
                var max = dataPoints[i] + dataOffset;
                var ratio = (scrollRatio + scrollOffsetCenter - min) / (max - min);
                var closestPoint =
                    null;
                var smallestDist = CONFIG.contentHeight;
                for (var j = -10; j < ruleArray.length + 10; j++) {
                    var tempRuleRatio = j / ruleArray.length;
                    var tempDist = Math.abs(tempRuleRatio - ratio);
                    if (tempDist < smallestDist) {
                        smallestDist = tempDist;
                        closestPoint = ruleArray.length - j
                    }
                }
                changeRuler(closestPoint, i);
                moveDataPoint(i, closestPoint / ruleArray.length)
            }
        }

        function moveDataPoint(index, ratio) {}

        function changeRuler(index, dataIndex) {
            var numAffected = 50;
            for (var i = 0; i < ruleArray.length; i++)
                if (i >= index - numAffected && i <= index + numAffected) {
                    var scaleRatio =
                        1 - Math.abs(i - index) / numAffected;
                    var newWidth = scaleRatio * ruleWidth;
                    $(".rule").eq(i).css("opacity", .2 + .4 * scaleRatio);
                    if (i == index) moveDataPoint(dataIndex, $(".rule").eq(i).position().top)
                }
        }
        self.resize = function() {
            $("#rulerContainer").css({
                "width": 20,
                "height": CONFIG.windowHeight,
                "top": "50%",
                "margin-top": -CONFIG.windowHeight / 2
            });
            curNumRules = Math.floor(CONFIG.windowHeight / (ruleHeight + ruleDist));
            if ($("#bottom-globe").length > 0) {
                var globeImgH = $("#bottom-globe img").height();
                $("#end").css({
                    "padding-bottom": globeImgH
                })
            }
        }
    }
    var STARS = new starsClass;

    function starsClass() {
        var self = this;
        var starCanvasRef = null;
        var starCtxRef = null;
        var star1Ref = null;
        var star2Ref = null;
        var curImageData = null;
        var curScroll = 0;
        self.init = function() {
            if (DETECTION.has3d) {
                star1Ref = createStarField(CONFIG.contentWidth, CONFIG.contentHeight * .7, 0, 20, 1.1);
                star2Ref = createStarField(CONFIG.contentWidth, CONFIG.contentHeight * .7, 40, 5, 1)
            }
        };
        self.animate = function() {
            render()
        };
        self.scrollUpdate = function(scroll) {
            curScroll = scroll
        };

        function render() {
            var top = -curScroll * (CONFIG.contentHeight * .5 -
                CONFIG.windowHeight) * .3;
            var top2 = -curScroll * (CONFIG.contentHeight * .7 - CONFIG.windowHeight) * -.2;
            if (DETECTION.has3d) {
                $("#stars").css({
                    "width": CONFIG.windowWidth + "px"
                });
                var css = "translate3d(" + 0 + "px," + top + "px," + 0 + "px)";
                $("#stars-1").css({
                    "height": CONFIG.contentHeight + "px",
                    "transform": css,
                    "-webkit-transform": css,
                    "-moz-transform": css,
                    "-ms-transform": css,
                    "-o-transform": css
                });
                var css2 = "translate3d(" + 0 + "px," + top2 + "px," + 0 + "px)";
                $("#stars-2").css({
                    "height": CONFIG.contentHeight + "px",
                    "transform": css2,
                    "-webkit-transform": css2,
                    "-moz-transform": css2,
                    "-ms-transform": css2,
                    "-o-transform": css2
                })
            } else $("#stars-1").css("top", -top + "px")
        }

        function createStarField(w, h, starsStart, starsEnd, size) {
            var tempCanvas = document.createElement("canvas");
            var tempCtx = tempCanvas.getContext("2d");
            tempCtx.canvas.width = w;
            tempCtx.canvas.height = h;
            var numStarsLevels = 10;
            var sectionHeight = h / numStarsLevels;
            var sectionWidth = w;
            var numStarsStart = starsStart;
            var numStarsEnd = starsEnd;
            var dir = numStarsStart > numStarsEnd ? -1 : 1;
            var maxStars = !!(dir == 1) ? numStarsEnd : numStarsStart;
            var minStars = !!(dir == 1) ? numStarsStart : numStarsEnd;
            var starsInc = dir * Math.ceil(maxStars / numStarsLevels);
            for (var i = 0; i < numStarsLevels; i++) {
                var curNumStars = numStarsStart + starsInc * i;
                for (var j = 0; j < curNumStars; j++) {
                    var randX = sectionWidth * Math.random();
                    var randY = sectionHeight * Math.random();
                    var curX = randX;
                    var curY = i * sectionHeight + randY;
                    drawStar(curX, curY)
                }
            }

            function drawStar(x, y) {
                tempCtx.globalAlpha = .1 + .9 * Math.random();
                tempCtx.fillStyle = "#ffffff";
                tempCtx.beginPath();
                tempCtx.arc(x, y, size, 0, Math.PI * 2, true);
                tempCtx.closePath();
                tempCtx.fill()
            }
            var data = {};
            data.height = h;
            data.width = w;
            return {
                "canvasRef": tempCanvas,
                "data": data
            }
        }
        self.resize = function() {
            render()
        }
    }
    var GRAD = new navGrad;

    function navGrad() {
        var canvas, ctx, tmpcanvas, tmpctx, bg, pattern, gradient;
        var self = this;
        var ready = false;
        var curOffset = 0;
        targWidth = window.innerWidth;
        self.init = function() {
            canvas = $("<canvas/>", {
                "id": "header-canvas"
            });
            canvas.width = targWidth;
            canvas.height = 200;
            canvas[0].style.zIndex = -1;
            canvas[0].style.position = "absolute";
            canvas[0].style.top = "0";
            canvas[0].style.left = "0";
            canvas[0].style.width = targWidth + "px";
            canvas[0].style.height = "200px";
            $(".header").append(canvas).css("background", "transparent");
            $("#header-canvas").css({
                "-webkit-touch-callout": "none",
                "-webkit-transform": "translate3d(0,0,0)",
                "-webkit-user-select": "none",
                "-khtml-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                "user-select": "none",
                "pointer-events": "none"
            });
            ctx = canvas[0].getContext("2d");
            gradient = ctx.createLinearGradient(0, 0, 0, 150);
            gradient.addColorStop(0, "rgba(0,0,0,1)");
            gradient.addColorStop(.4, "rgba(0,0,0,1)");
            gradient.addColorStop(.8, "rgba(0,0,0,0)");
            gradient.addColorStop(1, "rgba(0,0,0,0)");
            bg = new Image;
            bg.onload = function() {
                setTimeout(function() {
                    curOffset =
                        $(window).scrollTop();
                    ready = true;
                    self.resize();
                    setTimeout(function() {
                        self.resize()
                    }, 1E3)
                }, 500)
            };
            bg.src = "images/sky.jpg"
        };
        self.render = function() {
            if (curOffset != Math.abs($(window).scrollTop())) curOffset = Math.abs($(window).scrollTop());
            if (ready) draw()
        };
        self.resize = function() {
            targWidth = window.innerWidth;
            draw()
        };

        function draw() {
            targWidth = window.innerWidth;
            if (canvas.width != targWidth) {
                canvas.width = targWidth;
                canvas[0].style.width = targWidth + "px"
            }
            var winRatio = bg.height / $("body").height();
            ctx.clearRect(0,
                0, targWidth, 150);
            ctx.drawImage(bg, 0, curOffset * winRatio, 1, 150 * winRatio, 0, 0, targWidth, 150);
            var pxl = ctx.getImageData(10, 0, 1, canvas.height).data;
            var st0 = pxl.length / 4 * .4;
            var st1 = pxl.length / 4 * .8;
            var st2 = pxl.length / 4 - 4;
            gradient = ctx.createLinearGradient(0, 0, 0, 150);
            gradient.addColorStop(0, "rgba(" + pxl[0] + "," + pxl[1] + "," + pxl[2] + ",1)");
            gradient.addColorStop(.4, "rgba(" + pxl[st0] + "," + pxl[st0 + 1] + "," + pxl[st0 + 2] + ",1)");
            gradient.addColorStop(.8, "rgba(" + pxl[st1 + 0] + "," + pxl[st1 + 1] + "," + pxl[st1 + 2] + ",0)");
            gradient.addColorStop(1,
                "rgba(" + pxl[st2 + 0] + "," + pxl[st2 + 1] + "," + pxl[st2 + 2] + ",0)");
            ctx.clearRect(0, 0, targWidth, 150);
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, targWidth, 150)
        }
    }
    CONFIG = {};
    CONFIG.pagePath = window.location.pathname;
    var useClipRect = true;
    CONFIG.useGlobe = false;
    CONFIG.useBalloons = false;
    var file, n;
    var currScroll = 0;
    var lastScroll = 0;
    var prevTouch = 0;

    
    $(document).ready(function() {
        getWidthHeight();
        animate();
        bindEvents();
        STARS.init();
        DETECTION.init();
        if (DETECTION.hasCanvas) {
            GRAD.init();
            if ($(".where #nz.enhanced").get().length) {
                CONFIG.useBalloons = true;
                particleShape.init()
            }
        }
        SCROLL.init();
        scrollChange($(window).scrollTop());
        $(window).resize()
    });
    $(window).load(function() {
        $("#stars-1, #stars-2").height($("body").height() - 550)
    });
    $(window).resize(function() {
        getWidthHeight();
        STARS.resize();
        SCROLL.resize();
        GRAD.resize()
    });

    function getWidthHeight() {
        CONFIG.windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        CONFIG.windowWidth = "innerHeight" in window ? window.innerWidth : document.documentElement.offsetWidth;
        CONFIG.contentHeight = $("body").height();
        CONFIG.contentWidth = $("html").width()
    }
    var requestAnimFrame = window.requestAnimationFrame;

    function renderLoop() {
        if (lastScroll != currScroll) {
            lastScroll = currScroll;
            SCROLL.scrollChange(scroll);
            STARS.animate();
            SCROLL.animate();
            if (DETECTION.hasCanvas) GRAD.render()
        }
        if (CONFIG.useBalloons) particleShape.render()
    }

    function animate() {
        requestAnimFrame(animate);
        renderLoop()
    }

    function bindEvents() {
        $("html").mousemove(function(e) {
            getMousePoints(e)
        }).mousedown(function(e) {
            getMousePoints(e)
        }).mouseup(function(e) {
            getMousePoints(e)
        });
        $(window).scroll(function() {
            scrollChange($(this).scrollTop())
        })
    }

    function scrollChange(scroll) {
        currScroll = scroll
    }

    function getMousePoints(e) {
        CONFIG.mouseX = e.pageX;
        CONFIG.mouseY = e.pageY
    };
})();