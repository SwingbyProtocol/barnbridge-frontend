(this["webpackJsonpbarnbridge-frontend"] = this["webpackJsonpbarnbridge-frontend"] || []).push([[9],{

/***/ 1334:
/***/ (function(module, exports, __webpack_require__) {

var _createForOfIteratorHelper = __webpack_require__(104).default;

var _assertThisInitialized = __webpack_require__(209).default;

var _get = __webpack_require__(639).default;

var _getPrototypeOf = __webpack_require__(321).default;

var _classCallCheck = __webpack_require__(40).default;

var _createClass = __webpack_require__(51).default;

var _inherits = __webpack_require__(87).default;

var _createSuper = __webpack_require__(88).default;

var _regeneratorRuntime = __webpack_require__(9);

var _asyncToGenerator = __webpack_require__(96).default;

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var i = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        r.d(n, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 278);
  }([function (e, t) {
    "function" == typeof Object.create ? e.exports = function (e, t) {
      t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }));
    } : e.exports = function (e, t) {
      if (t) {
        e.super_ = t;

        var r = function r() {};

        r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
      }
    };
  }, function (e, t, r) {
    "use strict";

    (function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var n = r(115),
          i = r(116),
          o = r(117);

      function a() {
        return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }

      function s(e, t) {
        if (a() < t) throw new RangeError("Invalid typed array length");
        return f.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = f.prototype : (null === e && (e = new f(t)), e.length = t), e;
      }

      function f(e, t, r) {
        if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(e, t, r);

        if ("number" == typeof e) {
          if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
          return h(this, e);
        }

        return u(this, e, t, r);
      }

      function u(e, t, r, n) {
        if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, n) {
          if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
          if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
          t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
          f.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = f.prototype : e = d(e, t);
          return e;
        }(e, t, r, n) : "string" == typeof t ? function (e, t, r) {
          "string" == typeof r && "" !== r || (r = "utf8");
          if (!f.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
          var n = 0 | p(t, r),
              i = (e = s(e, n)).write(t, r);
          i !== n && (e = e.slice(0, i));
          return e;
        }(e, t, r) : function (e, t) {
          if (f.isBuffer(t)) {
            var r = 0 | l(t.length);
            return 0 === (e = s(e, r)).length || t.copy(e, 0, 0, r), e;
          }

          if (t) {
            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : d(e, t);
            if ("Buffer" === t.type && o(t.data)) return d(e, t.data);
          }

          var n;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(e, t);
      }

      function c(e) {
        if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }

      function h(e, t) {
        if (c(t), e = s(e, t < 0 ? 0 : 0 | l(t)), !f.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) {
          e[r] = 0;
        }
        return e;
      }

      function d(e, t) {
        var r = t.length < 0 ? 0 : 0 | l(t.length);
        e = s(e, r);

        for (var n = 0; n < r; n += 1) {
          e[n] = 255 & t[n];
        }

        return e;
      }

      function l(e) {
        if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
        return 0 | e;
      }

      function p(e, t) {
        if (f.isBuffer(e)) return e.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var r = e.length;
        if (0 === r) return 0;

        for (var n = !1;;) {
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;

            case "utf8":
            case "utf-8":
            case void 0:
              return z(e).length;

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;

            case "hex":
              return r >>> 1;

            case "base64":
              return q(e).length;

            default:
              if (n) return z(e).length;
              t = ("" + t).toLowerCase(), n = !0;
          }
        }
      }

      function b(e, t, r) {
        var n = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";

        for (e || (e = "utf8");;) {
          switch (e) {
            case "hex":
              return I(this, t, r);

            case "utf8":
            case "utf-8":
              return k(this, t, r);

            case "ascii":
              return M(this, t, r);

            case "latin1":
            case "binary":
              return T(this, t, r);

            case "base64":
              return x(this, t, r);

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return R(this, t, r);

            default:
              if (n) throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), n = !0;
          }
        }
      }

      function y(e, t, r) {
        var n = e[t];
        e[t] = e[r], e[r] = n;
      }

      function g(e, t, r, n, i) {
        if (0 === e.length) return -1;

        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }

        if ("string" == typeof t && (t = f.from(t, n)), f.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, r, n, i);
        if ("number" == typeof t) return t &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : v(e, [t], r, n, i);
        throw new TypeError("val must be string, number or Buffer");
      }

      function v(e, t, r, n, i) {
        var o,
            a = 1,
            s = e.length,
            f = t.length;

        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
          if (e.length < 2 || t.length < 2) return -1;
          a = 2, s /= 2, f /= 2, r /= 2;
        }

        function u(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }

        if (i) {
          var c = -1;

          for (o = r; o < s; o++) {
            if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
              if (-1 === c && (c = o), o - c + 1 === f) return c * a;
            } else -1 !== c && (o -= o - c), c = -1;
          }
        } else for (r + f > s && (r = s - f), o = r; o >= 0; o--) {
          for (var h = !0, d = 0; d < f; d++) {
            if (u(e, o + d) !== u(t, d)) {
              h = !1;
              break;
            }
          }

          if (h) return o;
        }

        return -1;
      }

      function m(e, t, r, n) {
        r = Number(r) || 0;
        var i = e.length - r;
        n ? (n = Number(n)) > i && (n = i) : n = i;
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        n > o / 2 && (n = o / 2);

        for (var a = 0; a < n; ++a) {
          var s = parseInt(t.substr(2 * a, 2), 16);
          if (isNaN(s)) return a;
          e[r + a] = s;
        }

        return a;
      }

      function w(e, t, r, n) {
        return F(z(t, e.length - r), e, r, n);
      }

      function _(e, t, r, n) {
        return F(function (e) {
          for (var t = [], r = 0; r < e.length; ++r) {
            t.push(255 & e.charCodeAt(r));
          }

          return t;
        }(t), e, r, n);
      }

      function E(e, t, r, n) {
        return _(e, t, r, n);
      }

      function S(e, t, r, n) {
        return F(q(t), e, r, n);
      }

      function A(e, t, r, n) {
        return F(function (e, t) {
          for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
            r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
          }

          return o;
        }(t, e.length - r), e, r, n);
      }

      function x(e, t, r) {
        return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r));
      }

      function k(e, t, r) {
        r = Math.min(e.length, r);

        for (var n = [], i = t; i < r;) {
          var o,
              a,
              s,
              f,
              u = e[i],
              c = null,
              h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (i + h <= r) switch (h) {
            case 1:
              u < 128 && (c = u);
              break;

            case 2:
              128 == (192 & (o = e[i + 1])) && (f = (31 & u) << 6 | 63 & o) > 127 && (c = f);
              break;

            case 3:
              o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (f = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (f < 55296 || f > 57343) && (c = f);
              break;

            case 4:
              o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (f = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && f < 1114112 && (c = f);
          }
          null === c ? (c = 65533, h = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += h;
        }

        return function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          var r = "",
              n = 0;

          for (; n < t;) {
            r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
          }

          return r;
        }(n);
      }

      t.Buffer = f, t.SlowBuffer = function (e) {
        +e != e && (e = 0);
        return f.alloc(+e);
      }, t.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
        try {
          var e = new Uint8Array(1);
          return e.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function foo() {
              return 42;
            }
          }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
        } catch (e) {
          return !1;
        }
      }(), t.kMaxLength = a(), f.poolSize = 8192, f._augment = function (e) {
        return e.__proto__ = f.prototype, e;
      }, f.from = function (e, t, r) {
        return u(null, e, t, r);
      }, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
        value: null,
        configurable: !0
      })), f.alloc = function (e, t, r) {
        return function (e, t, r, n) {
          return c(t), t <= 0 ? s(e, t) : void 0 !== r ? "string" == typeof n ? s(e, t).fill(r, n) : s(e, t).fill(r) : s(e, t);
        }(null, e, t, r);
      }, f.allocUnsafe = function (e) {
        return h(null, e);
      }, f.allocUnsafeSlow = function (e) {
        return h(null, e);
      }, f.isBuffer = function (e) {
        return !(null == e || !e._isBuffer);
      }, f.compare = function (e, t) {
        if (!f.isBuffer(e) || !f.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
        if (e === t) return 0;

        for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i) {
          if (e[i] !== t[i]) {
            r = e[i], n = t[i];
            break;
          }
        }

        return r < n ? -1 : n < r ? 1 : 0;
      }, f.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;

          default:
            return !1;
        }
      }, f.concat = function (e, t) {
        if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return f.alloc(0);
        var r;
        if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) {
          t += e[r].length;
        }
        var n = f.allocUnsafe(t),
            i = 0;

        for (r = 0; r < e.length; ++r) {
          var a = e[r];
          if (!f.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
          a.copy(n, i), i += a.length;
        }

        return n;
      }, f.byteLength = p, f.prototype._isBuffer = !0, f.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

        for (var t = 0; t < e; t += 2) {
          y(this, t, t + 1);
        }

        return this;
      }, f.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

        for (var t = 0; t < e; t += 4) {
          y(this, t, t + 3), y(this, t + 1, t + 2);
        }

        return this;
      }, f.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

        for (var t = 0; t < e; t += 8) {
          y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
        }

        return this;
      }, f.prototype.toString = function () {
        var e = 0 | this.length;
        return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : b.apply(this, arguments);
      }, f.prototype.equals = function (e) {
        if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e || 0 === f.compare(this, e);
      }, f.prototype.inspect = function () {
        var e = "",
            r = t.INSPECT_MAX_BYTES;
        return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">";
      }, f.prototype.compare = function (e, t, r, n, i) {
        if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
        if (n >= i && t >= r) return 0;
        if (n >= i) return -1;
        if (t >= r) return 1;
        if (this === e) return 0;

        for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(o, a), u = this.slice(n, i), c = e.slice(t, r), h = 0; h < s; ++h) {
          if (u[h] !== c[h]) {
            o = u[h], a = c[h];
            break;
          }
        }

        return o < a ? -1 : a < o ? 1 : 0;
      }, f.prototype.includes = function (e, t, r) {
        return -1 !== this.indexOf(e, t, r);
      }, f.prototype.indexOf = function (e, t, r) {
        return g(this, e, t, r, !0);
      }, f.prototype.lastIndexOf = function (e, t, r) {
        return g(this, e, t, r, !1);
      }, f.prototype.write = function (e, t, r, n) {
        if (void 0 === t) n = "utf8", r = this.length, t = 0;else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;else {
          if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
        }
        var i = this.length - t;
        if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");

        for (var o = !1;;) {
          switch (n) {
            case "hex":
              return m(this, e, t, r);

            case "utf8":
            case "utf-8":
              return w(this, e, t, r);

            case "ascii":
              return _(this, e, t, r);

            case "latin1":
            case "binary":
              return E(this, e, t, r);

            case "base64":
              return S(this, e, t, r);

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return A(this, e, t, r);

            default:
              if (o) throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), o = !0;
          }
        }
      }, f.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };

      function M(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);

        for (var i = t; i < r; ++i) {
          n += String.fromCharCode(127 & e[i]);
        }

        return n;
      }

      function T(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);

        for (var i = t; i < r; ++i) {
          n += String.fromCharCode(e[i]);
        }

        return n;
      }

      function I(e, t, r) {
        var n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);

        for (var i = "", o = t; o < r; ++o) {
          i += U(e[o]);
        }

        return i;
      }

      function R(e, t, r) {
        for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) {
          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        }

        return i;
      }

      function P(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
      }

      function L(e, t, r, n, i, o) {
        if (!f.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }

      function B(e, t, r, n) {
        t < 0 && (t = 65535 + t + 1);

        for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) {
          e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
        }
      }

      function C(e, t, r, n) {
        t < 0 && (t = 4294967295 + t + 1);

        for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) {
          e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255;
        }
      }

      function O(e, t, r, n, i, o) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }

      function N(e, t, r, n, o) {
        return o || O(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
      }

      function j(e, t, r, n, o) {
        return o || O(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
      }

      f.prototype.slice = function (e, t) {
        var r,
            n = this.length;
        if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), f.TYPED_ARRAY_SUPPORT) (r = this.subarray(e, t)).__proto__ = f.prototype;else {
          var i = t - e;
          r = new f(i, void 0);

          for (var o = 0; o < i; ++o) {
            r[o] = this[o + e];
          }
        }
        return r;
      }, f.prototype.readUIntLE = function (e, t, r) {
        e |= 0, t |= 0, r || P(e, t, this.length);

        for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
          n += this[e + o] * i;
        }

        return n;
      }, f.prototype.readUIntBE = function (e, t, r) {
        e |= 0, t |= 0, r || P(e, t, this.length);

        for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) {
          n += this[e + --t] * i;
        }

        return n;
      }, f.prototype.readUInt8 = function (e, t) {
        return t || P(e, 1, this.length), this[e];
      }, f.prototype.readUInt16LE = function (e, t) {
        return t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
      }, f.prototype.readUInt16BE = function (e, t) {
        return t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
      }, f.prototype.readUInt32LE = function (e, t) {
        return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
      }, f.prototype.readUInt32BE = function (e, t) {
        return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      }, f.prototype.readIntLE = function (e, t, r) {
        e |= 0, t |= 0, r || P(e, t, this.length);

        for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
          n += this[e + o] * i;
        }

        return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
      }, f.prototype.readIntBE = function (e, t, r) {
        e |= 0, t |= 0, r || P(e, t, this.length);

        for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) {
          o += this[e + --n] * i;
        }

        return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
      }, f.prototype.readInt8 = function (e, t) {
        return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
      }, f.prototype.readInt16LE = function (e, t) {
        t || P(e, 2, this.length);
        var r = this[e] | this[e + 1] << 8;
        return 32768 & r ? 4294901760 | r : r;
      }, f.prototype.readInt16BE = function (e, t) {
        t || P(e, 2, this.length);
        var r = this[e + 1] | this[e] << 8;
        return 32768 & r ? 4294901760 | r : r;
      }, f.prototype.readInt32LE = function (e, t) {
        return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      }, f.prototype.readInt32BE = function (e, t) {
        return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      }, f.prototype.readFloatLE = function (e, t) {
        return t || P(e, 4, this.length), i.read(this, e, !0, 23, 4);
      }, f.prototype.readFloatBE = function (e, t) {
        return t || P(e, 4, this.length), i.read(this, e, !1, 23, 4);
      }, f.prototype.readDoubleLE = function (e, t) {
        return t || P(e, 8, this.length), i.read(this, e, !0, 52, 8);
      }, f.prototype.readDoubleBE = function (e, t) {
        return t || P(e, 8, this.length), i.read(this, e, !1, 52, 8);
      }, f.prototype.writeUIntLE = function (e, t, r, n) {
        (e = +e, t |= 0, r |= 0, n) || L(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
        var i = 1,
            o = 0;

        for (this[t] = 255 & e; ++o < r && (i *= 256);) {
          this[t + o] = e / i & 255;
        }

        return t + r;
      }, f.prototype.writeUIntBE = function (e, t, r, n) {
        (e = +e, t |= 0, r |= 0, n) || L(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
        var i = r - 1,
            o = 1;

        for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) {
          this[t + i] = e / o & 255;
        }

        return t + r;
      }, f.prototype.writeUInt8 = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
      }, f.prototype.writeUInt16LE = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2;
      }, f.prototype.writeUInt16BE = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2;
      }, f.prototype.writeUInt32LE = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : C(this, e, t, !0), t + 4;
      }, f.prototype.writeUInt32BE = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4;
      }, f.prototype.writeIntLE = function (e, t, r, n) {
        if (e = +e, t |= 0, !n) {
          var i = Math.pow(2, 8 * r - 1);
          L(this, e, t, r, i - 1, -i);
        }

        var o = 0,
            a = 1,
            s = 0;

        for (this[t] = 255 & e; ++o < r && (a *= 256);) {
          e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
        }

        return t + r;
      }, f.prototype.writeIntBE = function (e, t, r, n) {
        if (e = +e, t |= 0, !n) {
          var i = Math.pow(2, 8 * r - 1);
          L(this, e, t, r, i - 1, -i);
        }

        var o = r - 1,
            a = 1,
            s = 0;

        for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
          e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
        }

        return t + r;
      }, f.prototype.writeInt8 = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
      }, f.prototype.writeInt16LE = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2;
      }, f.prototype.writeInt16BE = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2;
      }, f.prototype.writeInt32LE = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : C(this, e, t, !0), t + 4;
      }, f.prototype.writeInt32BE = function (e, t, r) {
        return e = +e, t |= 0, r || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4;
      }, f.prototype.writeFloatLE = function (e, t, r) {
        return N(this, e, t, !0, r);
      }, f.prototype.writeFloatBE = function (e, t, r) {
        return N(this, e, t, !1, r);
      }, f.prototype.writeDoubleLE = function (e, t, r) {
        return j(this, e, t, !0, r);
      }, f.prototype.writeDoubleBE = function (e, t, r) {
        return j(this, e, t, !1, r);
      }, f.prototype.copy = function (e, t, r, n) {
        if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        var i,
            o = n - r;
        if (this === e && r < t && t < n) for (i = o - 1; i >= 0; --i) {
          e[i + t] = this[i + r];
        } else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) {
          e[i + t] = this[i + r];
        } else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
        return o;
      }, f.prototype.fill = function (e, t, r, n) {
        if ("string" == typeof e) {
          if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
            var i = e.charCodeAt(0);
            i < 256 && (e = i);
          }

          if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
          if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
        } else "number" == typeof e && (e &= 255);

        if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
        if (r <= t) return this;
        var o;
        if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < r; ++o) {
          this[o] = e;
        } else {
          var a = f.isBuffer(e) ? e : z(new f(e, n).toString()),
              s = a.length;

          for (o = 0; o < r - t; ++o) {
            this[o + t] = a[o % s];
          }
        }
        return this;
      };
      var D = /[^+\/0-9A-Za-z-_]/g;

      function U(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }

      function z(e, t) {
        var r;
        t = t || 1 / 0;

        for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
          if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }

              if (a + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }

              i = r;
              continue;
            }

            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), i = r;
              continue;
            }

            r = 65536 + (i - 55296 << 10 | r - 56320);
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);

          if (i = null, r < 128) {
            if ((t -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            o.push(r >> 6 | 192, 63 & r | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
          }
        }

        return o;
      }

      function q(e) {
        return n.toByteArray(function (e) {
          if ((e = function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          }(e).replace(D, "")).length < 2) return "";

          for (; e.length % 4 != 0;) {
            e += "=";
          }

          return e;
        }(e));
      }

      function F(e, t, r, n) {
        for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) {
          t[i + r] = e[i];
        }

        return i;
      }
    }).call(this, r(5));
  }, function (e, t, r) {
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var n = r(1),
        i = n.Buffer;

    function o(e, t) {
      for (var r in e) {
        t[r] = e[r];
      }
    }

    function a(e, t, r) {
      return i(e, t, r);
    }

    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), a.prototype = Object.create(i.prototype), o(i, a), a.from = function (e, t, r) {
      if ("number" == typeof e) throw new TypeError("Argument must not be a number");
      return i(e, t, r);
    }, a.alloc = function (e, t, r) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      var n = i(e);
      return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n;
    }, a.allocUnsafe = function (e) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      return i(e);
    }, a.allocUnsafeSlow = function (e) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      return n.SlowBuffer(e);
    };
  }, function (e, t) {
    var r,
        n,
        i = e.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined");
    }

    function a() {
      throw new Error("clearTimeout has not been defined");
    }

    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);

      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }

    !function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        r = o;
      }

      try {
        n = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        n = a;
      }
    }();
    var f,
        u = [],
        c = !1,
        h = -1;

    function d() {
      c && f && (c = !1, f.length ? u = f.concat(u) : h = -1, u.length && l());
    }

    function l() {
      if (!c) {
        var e = s(d);
        c = !0;

        for (var t = u.length; t;) {
          for (f = u, u = []; ++h < t;) {
            f && f[h].run();
          }

          h = -1, t = u.length;
        }

        f = null, c = !1, function (e) {
          if (n === clearTimeout) return clearTimeout(e);
          if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);

          try {
            n(e);
          } catch (t) {
            try {
              return n.call(null, e);
            } catch (t) {
              return n.call(this, e);
            }
          }
        }(e);
      }
    }

    function p(e, t) {
      this.fun = e, this.array = t;
    }

    function b() {}

    i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
        t[r - 1] = arguments[r];
      }
      u.push(new p(e, t)), 1 !== u.length || c || s(l);
    }, p.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = b, i.addListener = b, i.once = b, i.off = b, i.removeListener = b, i.removeAllListeners = b, i.emit = b, i.prependListener = b, i.prependOnceListener = b, i.listeners = function (e) {
      return [];
    }, i.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, i.cwd = function () {
      return "/";
    }, i.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, i.umask = function () {
      return 0;
    };
  }, function (e, t, r) {
    (function (e) {
      !function (e, t) {
        "use strict";

        function n(e, t) {
          if (!e) throw new Error(t || "Assertion failed");
        }

        function i(e, t) {
          e.super_ = t;

          var r = function r() {};

          r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
        }

        function o(e, t, r) {
          if (o.isBN(e)) return e;
          this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"));
        }

        var a;
        "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;

        try {
          a = r(153).Buffer;
        } catch (e) {}

        function s(e, t, r) {
          for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
            var a = e.charCodeAt(o) - 48;
            n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a;
          }

          return n;
        }

        function f(e, t, r, n) {
          for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
            var s = e.charCodeAt(a) - 48;
            i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s;
          }

          return i;
        }

        o.isBN = function (e) {
          return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words);
        }, o.max = function (e, t) {
          return e.cmp(t) > 0 ? e : t;
        }, o.min = function (e, t) {
          return e.cmp(t) < 0 ? e : t;
        }, o.prototype._init = function (e, t, r) {
          if ("number" == typeof e) return this._initNumber(e, t, r);
          if ("object" == typeof e) return this._initArray(e, t, r);
          "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
          var i = 0;
          "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), t, r);
        }, o.prototype._initNumber = function (e, t, r) {
          e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r);
        }, o.prototype._initArray = function (e, t, r) {
          if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
          this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);

          for (var i = 0; i < this.length; i++) {
            this.words[i] = 0;
          }

          var o,
              a,
              s = 0;
          if ("be" === r) for (i = e.length - 1, o = 0; i >= 0; i -= 3) {
            a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
          } else if ("le" === r) for (i = 0, o = 0; i < e.length; i += 3) {
            a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
          }
          return this.strip();
        }, o.prototype._parseHex = function (e, t) {
          this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);

          for (var r = 0; r < this.length; r++) {
            this.words[r] = 0;
          }

          var n,
              i,
              o = 0;

          for (r = e.length - 6, n = 0; r >= t; r -= 6) {
            i = s(e, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
          }

          r + 6 !== t && (i = s(e, t, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip();
        }, o.prototype._parseBase = function (e, t, r) {
          this.words = [0], this.length = 1;

          for (var n = 0, i = 1; i <= 67108863; i *= t) {
            n++;
          }

          n--, i = i / t | 0;

          for (var o = e.length - r, a = o % n, s = Math.min(o, o - a) + r, u = 0, c = r; c < s; c += n) {
            u = f(e, c, c + n, t), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
          }

          if (0 !== a) {
            var h = 1;

            for (u = f(e, c, e.length, t), c = 0; c < a; c++) {
              h *= t;
            }

            this.imuln(h), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
          }
        }, o.prototype.copy = function (e) {
          e.words = new Array(this.length);

          for (var t = 0; t < this.length; t++) {
            e.words[t] = this.words[t];
          }

          e.length = this.length, e.negative = this.negative, e.red = this.red;
        }, o.prototype.clone = function () {
          var e = new o(null);
          return this.copy(e), e;
        }, o.prototype._expand = function (e) {
          for (; this.length < e;) {
            this.words[this.length++] = 0;
          }

          return this;
        }, o.prototype.strip = function () {
          for (; this.length > 1 && 0 === this.words[this.length - 1];) {
            this.length--;
          }

          return this._normSign();
        }, o.prototype._normSign = function () {
          return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
        }, o.prototype.inspect = function () {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        };
        var u = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            h = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

        function d(e, t, r) {
          r.negative = t.negative ^ e.negative;
          var n = e.length + t.length | 0;
          r.length = n, n = n - 1 | 0;
          var i = 0 | e.words[0],
              o = 0 | t.words[0],
              a = i * o,
              s = 67108863 & a,
              f = a / 67108864 | 0;
          r.words[0] = s;

          for (var u = 1; u < n; u++) {
            for (var c = f >>> 26, h = 67108863 & f, d = Math.min(u, t.length - 1), l = Math.max(0, u - e.length + 1); l <= d; l++) {
              var p = u - l | 0;
              c += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[l]) + h) / 67108864 | 0, h = 67108863 & a;
            }

            r.words[u] = 0 | h, f = 0 | c;
          }

          return 0 !== f ? r.words[u] = 0 | f : r.length--, r.strip();
        }

        o.prototype.toString = function (e, t) {
          var r;

          if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
            r = "";

            for (var i = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                  f = (16777215 & (s << i | o)).toString(16);
              r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? u[6 - f.length] + f + r : f + r, (i += 2) >= 26 && (i -= 26, a--);
            }

            for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) {
              r = "0" + r;
            }

            return 0 !== this.negative && (r = "-" + r), r;
          }

          if (e === (0 | e) && e >= 2 && e <= 36) {
            var d = c[e],
                l = h[e];
            r = "";
            var p = this.clone();

            for (p.negative = 0; !p.isZero();) {
              var b = p.modn(l).toString(e);
              r = (p = p.idivn(l)).isZero() ? b + r : u[d - b.length] + b + r;
            }

            for (this.isZero() && (r = "0" + r); r.length % t != 0;) {
              r = "0" + r;
            }

            return 0 !== this.negative && (r = "-" + r), r;
          }

          n(!1, "Base should be between 2 and 36");
        }, o.prototype.toNumber = function () {
          var e = this.words[0];
          return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e;
        }, o.prototype.toJSON = function () {
          return this.toString(16);
        }, o.prototype.toBuffer = function (e, t) {
          return n(void 0 !== a), this.toArrayLike(a, e, t);
        }, o.prototype.toArray = function (e, t) {
          return this.toArrayLike(Array, e, t);
        }, o.prototype.toArrayLike = function (e, t, r) {
          var i = this.byteLength(),
              o = r || Math.max(1, i);
          n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
          var a,
              s,
              f = "le" === t,
              u = new e(o),
              c = this.clone();

          if (f) {
            for (s = 0; !c.isZero(); s++) {
              a = c.andln(255), c.iushrn(8), u[s] = a;
            }

            for (; s < o; s++) {
              u[s] = 0;
            }
          } else {
            for (s = 0; s < o - i; s++) {
              u[s] = 0;
            }

            for (s = 0; !c.isZero(); s++) {
              a = c.andln(255), c.iushrn(8), u[o - s - 1] = a;
            }
          }

          return u;
        }, Math.clz32 ? o.prototype._countBits = function (e) {
          return 32 - Math.clz32(e);
        } : o.prototype._countBits = function (e) {
          var t = e,
              r = 0;
          return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t;
        }, o.prototype._zeroBits = function (e) {
          if (0 === e) return 26;
          var t = e,
              r = 0;
          return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r;
        }, o.prototype.bitLength = function () {
          var e = this.words[this.length - 1],
              t = this._countBits(e);

          return 26 * (this.length - 1) + t;
        }, o.prototype.zeroBits = function () {
          if (this.isZero()) return 0;

          for (var e = 0, t = 0; t < this.length; t++) {
            var r = this._zeroBits(this.words[t]);

            if (e += r, 26 !== r) break;
          }

          return e;
        }, o.prototype.byteLength = function () {
          return Math.ceil(this.bitLength() / 8);
        }, o.prototype.toTwos = function (e) {
          return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone();
        }, o.prototype.fromTwos = function (e) {
          return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
        }, o.prototype.isNeg = function () {
          return 0 !== this.negative;
        }, o.prototype.neg = function () {
          return this.clone().ineg();
        }, o.prototype.ineg = function () {
          return this.isZero() || (this.negative ^= 1), this;
        }, o.prototype.iuor = function (e) {
          for (; this.length < e.length;) {
            this.words[this.length++] = 0;
          }

          for (var t = 0; t < e.length; t++) {
            this.words[t] = this.words[t] | e.words[t];
          }

          return this.strip();
        }, o.prototype.ior = function (e) {
          return n(0 == (this.negative | e.negative)), this.iuor(e);
        }, o.prototype.or = function (e) {
          return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
        }, o.prototype.uor = function (e) {
          return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
        }, o.prototype.iuand = function (e) {
          var t;
          t = this.length > e.length ? e : this;

          for (var r = 0; r < t.length; r++) {
            this.words[r] = this.words[r] & e.words[r];
          }

          return this.length = t.length, this.strip();
        }, o.prototype.iand = function (e) {
          return n(0 == (this.negative | e.negative)), this.iuand(e);
        }, o.prototype.and = function (e) {
          return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
        }, o.prototype.uand = function (e) {
          return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
        }, o.prototype.iuxor = function (e) {
          var t, r;
          this.length > e.length ? (t = this, r = e) : (t = e, r = this);

          for (var n = 0; n < r.length; n++) {
            this.words[n] = t.words[n] ^ r.words[n];
          }

          if (this !== t) for (; n < t.length; n++) {
            this.words[n] = t.words[n];
          }
          return this.length = t.length, this.strip();
        }, o.prototype.ixor = function (e) {
          return n(0 == (this.negative | e.negative)), this.iuxor(e);
        }, o.prototype.xor = function (e) {
          return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
        }, o.prototype.uxor = function (e) {
          return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
        }, o.prototype.inotn = function (e) {
          n("number" == typeof e && e >= 0);
          var t = 0 | Math.ceil(e / 26),
              r = e % 26;
          this._expand(t), r > 0 && t--;

          for (var i = 0; i < t; i++) {
            this.words[i] = 67108863 & ~this.words[i];
          }

          return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip();
        }, o.prototype.notn = function (e) {
          return this.clone().inotn(e);
        }, o.prototype.setn = function (e, t) {
          n("number" == typeof e && e >= 0);
          var r = e / 26 | 0,
              i = e % 26;
          return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip();
        }, o.prototype.iadd = function (e) {
          var t, r, n;
          if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
          if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
          this.length > e.length ? (r = this, n = e) : (r = e, n = this);

          for (var i = 0, o = 0; o < n.length; o++) {
            t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
          }

          for (; 0 !== i && o < r.length; o++) {
            t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
          }

          if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;else if (r !== this) for (; o < r.length; o++) {
            this.words[o] = r.words[o];
          }
          return this;
        }, o.prototype.add = function (e) {
          var t;
          return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
        }, o.prototype.isub = function (e) {
          if (0 !== e.negative) {
            e.negative = 0;
            var t = this.iadd(e);
            return e.negative = 1, t._normSign();
          }

          if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
          var r,
              n,
              i = this.cmp(e);
          if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          i > 0 ? (r = this, n = e) : (r = e, n = this);

          for (var o = 0, a = 0; a < n.length; a++) {
            o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
          }

          for (; 0 !== o && a < r.length; a++) {
            o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
          }

          if (0 === o && a < r.length && r !== this) for (; a < r.length; a++) {
            this.words[a] = r.words[a];
          }
          return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip();
        }, o.prototype.sub = function (e) {
          return this.clone().isub(e);
        };

        var l = function l(e, t, r) {
          var n,
              i,
              o,
              a = e.words,
              s = t.words,
              f = r.words,
              u = 0,
              c = 0 | a[0],
              h = 8191 & c,
              d = c >>> 13,
              l = 0 | a[1],
              p = 8191 & l,
              b = l >>> 13,
              y = 0 | a[2],
              g = 8191 & y,
              v = y >>> 13,
              m = 0 | a[3],
              w = 8191 & m,
              _ = m >>> 13,
              E = 0 | a[4],
              S = 8191 & E,
              A = E >>> 13,
              x = 0 | a[5],
              k = 8191 & x,
              M = x >>> 13,
              T = 0 | a[6],
              I = 8191 & T,
              R = T >>> 13,
              P = 0 | a[7],
              L = 8191 & P,
              B = P >>> 13,
              C = 0 | a[8],
              O = 8191 & C,
              N = C >>> 13,
              j = 0 | a[9],
              D = 8191 & j,
              U = j >>> 13,
              z = 0 | s[0],
              q = 8191 & z,
              F = z >>> 13,
              K = 0 | s[1],
              H = 8191 & K,
              V = K >>> 13,
              Y = 0 | s[2],
              W = 8191 & Y,
              G = Y >>> 13,
              Z = 0 | s[3],
              J = 8191 & Z,
              $ = Z >>> 13,
              X = 0 | s[4],
              Q = 8191 & X,
              ee = X >>> 13,
              te = 0 | s[5],
              re = 8191 & te,
              ne = te >>> 13,
              ie = 0 | s[6],
              oe = 8191 & ie,
              ae = ie >>> 13,
              se = 0 | s[7],
              fe = 8191 & se,
              ue = se >>> 13,
              ce = 0 | s[8],
              he = 8191 & ce,
              de = ce >>> 13,
              le = 0 | s[9],
              pe = 8191 & le,
              be = le >>> 13;

          r.negative = e.negative ^ t.negative, r.length = 19;
          var ye = (u + (n = Math.imul(h, q)) | 0) + ((8191 & (i = (i = Math.imul(h, F)) + Math.imul(d, q) | 0)) << 13) | 0;
          u = ((o = Math.imul(d, F)) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(p, q), i = (i = Math.imul(p, F)) + Math.imul(b, q) | 0, o = Math.imul(b, F);
          var ge = (u + (n = n + Math.imul(h, H) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, V) | 0) + Math.imul(d, H) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(d, V) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(g, q), i = (i = Math.imul(g, F)) + Math.imul(v, q) | 0, o = Math.imul(v, F), n = n + Math.imul(p, H) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(b, H) | 0, o = o + Math.imul(b, V) | 0;
          var ve = (u + (n = n + Math.imul(h, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, G) | 0) + Math.imul(d, W) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(d, G) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(w, q), i = (i = Math.imul(w, F)) + Math.imul(_, q) | 0, o = Math.imul(_, F), n = n + Math.imul(g, H) | 0, i = (i = i + Math.imul(g, V) | 0) + Math.imul(v, H) | 0, o = o + Math.imul(v, V) | 0, n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, G) | 0) + Math.imul(b, W) | 0, o = o + Math.imul(b, G) | 0;
          var me = (u + (n = n + Math.imul(h, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, $) | 0) + Math.imul(d, J) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(S, q), i = (i = Math.imul(S, F)) + Math.imul(A, q) | 0, o = Math.imul(A, F), n = n + Math.imul(w, H) | 0, i = (i = i + Math.imul(w, V) | 0) + Math.imul(_, H) | 0, o = o + Math.imul(_, V) | 0, n = n + Math.imul(g, W) | 0, i = (i = i + Math.imul(g, G) | 0) + Math.imul(v, W) | 0, o = o + Math.imul(v, G) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, $) | 0;
          var we = (u + (n = n + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(d, ee) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(k, q), i = (i = Math.imul(k, F)) + Math.imul(M, q) | 0, o = Math.imul(M, F), n = n + Math.imul(S, H) | 0, i = (i = i + Math.imul(S, V) | 0) + Math.imul(A, H) | 0, o = o + Math.imul(A, V) | 0, n = n + Math.imul(w, W) | 0, i = (i = i + Math.imul(w, G) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, G) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, $) | 0) + Math.imul(v, J) | 0, o = o + Math.imul(v, $) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, ee) | 0;

          var _e = (u + (n = n + Math.imul(h, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ne) | 0) + Math.imul(d, re) | 0)) << 13) | 0;

          u = ((o = o + Math.imul(d, ne) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(I, q), i = (i = Math.imul(I, F)) + Math.imul(R, q) | 0, o = Math.imul(R, F), n = n + Math.imul(k, H) | 0, i = (i = i + Math.imul(k, V) | 0) + Math.imul(M, H) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(S, W) | 0, i = (i = i + Math.imul(S, G) | 0) + Math.imul(A, W) | 0, o = o + Math.imul(A, G) | 0, n = n + Math.imul(w, J) | 0, i = (i = i + Math.imul(w, $) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, $) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, ee) | 0) + Math.imul(v, Q) | 0, o = o + Math.imul(v, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(b, re) | 0, o = o + Math.imul(b, ne) | 0;
          var Ee = (u + (n = n + Math.imul(h, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ae) | 0) + Math.imul(d, oe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(d, ae) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(L, q), i = (i = Math.imul(L, F)) + Math.imul(B, q) | 0, o = Math.imul(B, F), n = n + Math.imul(I, H) | 0, i = (i = i + Math.imul(I, V) | 0) + Math.imul(R, H) | 0, o = o + Math.imul(R, V) | 0, n = n + Math.imul(k, W) | 0, i = (i = i + Math.imul(k, G) | 0) + Math.imul(M, W) | 0, o = o + Math.imul(M, G) | 0, n = n + Math.imul(S, J) | 0, i = (i = i + Math.imul(S, $) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, ee) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, ee) | 0, n = n + Math.imul(g, re) | 0, i = (i = i + Math.imul(g, ne) | 0) + Math.imul(v, re) | 0, o = o + Math.imul(v, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, ae) | 0) + Math.imul(b, oe) | 0, o = o + Math.imul(b, ae) | 0;
          var Se = (u + (n = n + Math.imul(h, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ue) | 0) + Math.imul(d, fe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(d, ue) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(O, q), i = (i = Math.imul(O, F)) + Math.imul(N, q) | 0, o = Math.imul(N, F), n = n + Math.imul(L, H) | 0, i = (i = i + Math.imul(L, V) | 0) + Math.imul(B, H) | 0, o = o + Math.imul(B, V) | 0, n = n + Math.imul(I, W) | 0, i = (i = i + Math.imul(I, G) | 0) + Math.imul(R, W) | 0, o = o + Math.imul(R, G) | 0, n = n + Math.imul(k, J) | 0, i = (i = i + Math.imul(k, $) | 0) + Math.imul(M, J) | 0, o = o + Math.imul(M, $) | 0, n = n + Math.imul(S, Q) | 0, i = (i = i + Math.imul(S, ee) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, ee) | 0, n = n + Math.imul(w, re) | 0, i = (i = i + Math.imul(w, ne) | 0) + Math.imul(_, re) | 0, o = o + Math.imul(_, ne) | 0, n = n + Math.imul(g, oe) | 0, i = (i = i + Math.imul(g, ae) | 0) + Math.imul(v, oe) | 0, o = o + Math.imul(v, ae) | 0, n = n + Math.imul(p, fe) | 0, i = (i = i + Math.imul(p, ue) | 0) + Math.imul(b, fe) | 0, o = o + Math.imul(b, ue) | 0;
          var Ae = (u + (n = n + Math.imul(h, he) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, de) | 0) + Math.imul(d, he) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(d, de) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(D, q), i = (i = Math.imul(D, F)) + Math.imul(U, q) | 0, o = Math.imul(U, F), n = n + Math.imul(O, H) | 0, i = (i = i + Math.imul(O, V) | 0) + Math.imul(N, H) | 0, o = o + Math.imul(N, V) | 0, n = n + Math.imul(L, W) | 0, i = (i = i + Math.imul(L, G) | 0) + Math.imul(B, W) | 0, o = o + Math.imul(B, G) | 0, n = n + Math.imul(I, J) | 0, i = (i = i + Math.imul(I, $) | 0) + Math.imul(R, J) | 0, o = o + Math.imul(R, $) | 0, n = n + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, ee) | 0, n = n + Math.imul(S, re) | 0, i = (i = i + Math.imul(S, ne) | 0) + Math.imul(A, re) | 0, o = o + Math.imul(A, ne) | 0, n = n + Math.imul(w, oe) | 0, i = (i = i + Math.imul(w, ae) | 0) + Math.imul(_, oe) | 0, o = o + Math.imul(_, ae) | 0, n = n + Math.imul(g, fe) | 0, i = (i = i + Math.imul(g, ue) | 0) + Math.imul(v, fe) | 0, o = o + Math.imul(v, ue) | 0, n = n + Math.imul(p, he) | 0, i = (i = i + Math.imul(p, de) | 0) + Math.imul(b, he) | 0, o = o + Math.imul(b, de) | 0;
          var xe = (u + (n = n + Math.imul(h, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, be) | 0) + Math.imul(d, pe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(d, be) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(D, H), i = (i = Math.imul(D, V)) + Math.imul(U, H) | 0, o = Math.imul(U, V), n = n + Math.imul(O, W) | 0, i = (i = i + Math.imul(O, G) | 0) + Math.imul(N, W) | 0, o = o + Math.imul(N, G) | 0, n = n + Math.imul(L, J) | 0, i = (i = i + Math.imul(L, $) | 0) + Math.imul(B, J) | 0, o = o + Math.imul(B, $) | 0, n = n + Math.imul(I, Q) | 0, i = (i = i + Math.imul(I, ee) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(M, re) | 0, o = o + Math.imul(M, ne) | 0, n = n + Math.imul(S, oe) | 0, i = (i = i + Math.imul(S, ae) | 0) + Math.imul(A, oe) | 0, o = o + Math.imul(A, ae) | 0, n = n + Math.imul(w, fe) | 0, i = (i = i + Math.imul(w, ue) | 0) + Math.imul(_, fe) | 0, o = o + Math.imul(_, ue) | 0, n = n + Math.imul(g, he) | 0, i = (i = i + Math.imul(g, de) | 0) + Math.imul(v, he) | 0, o = o + Math.imul(v, de) | 0;
          var ke = (u + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(D, W), i = (i = Math.imul(D, G)) + Math.imul(U, W) | 0, o = Math.imul(U, G), n = n + Math.imul(O, J) | 0, i = (i = i + Math.imul(O, $) | 0) + Math.imul(N, J) | 0, o = o + Math.imul(N, $) | 0, n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(B, Q) | 0, o = o + Math.imul(B, ee) | 0, n = n + Math.imul(I, re) | 0, i = (i = i + Math.imul(I, ne) | 0) + Math.imul(R, re) | 0, o = o + Math.imul(R, ne) | 0, n = n + Math.imul(k, oe) | 0, i = (i = i + Math.imul(k, ae) | 0) + Math.imul(M, oe) | 0, o = o + Math.imul(M, ae) | 0, n = n + Math.imul(S, fe) | 0, i = (i = i + Math.imul(S, ue) | 0) + Math.imul(A, fe) | 0, o = o + Math.imul(A, ue) | 0, n = n + Math.imul(w, he) | 0, i = (i = i + Math.imul(w, de) | 0) + Math.imul(_, he) | 0, o = o + Math.imul(_, de) | 0;
          var Me = (u + (n = n + Math.imul(g, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, be) | 0) + Math.imul(v, pe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(v, be) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(D, J), i = (i = Math.imul(D, $)) + Math.imul(U, J) | 0, o = Math.imul(U, $), n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, ee) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, ee) | 0, n = n + Math.imul(L, re) | 0, i = (i = i + Math.imul(L, ne) | 0) + Math.imul(B, re) | 0, o = o + Math.imul(B, ne) | 0, n = n + Math.imul(I, oe) | 0, i = (i = i + Math.imul(I, ae) | 0) + Math.imul(R, oe) | 0, o = o + Math.imul(R, ae) | 0, n = n + Math.imul(k, fe) | 0, i = (i = i + Math.imul(k, ue) | 0) + Math.imul(M, fe) | 0, o = o + Math.imul(M, ue) | 0, n = n + Math.imul(S, he) | 0, i = (i = i + Math.imul(S, de) | 0) + Math.imul(A, he) | 0, o = o + Math.imul(A, de) | 0;
          var Te = (u + (n = n + Math.imul(w, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, be) | 0) + Math.imul(_, pe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(_, be) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(D, Q), i = (i = Math.imul(D, ee)) + Math.imul(U, Q) | 0, o = Math.imul(U, ee), n = n + Math.imul(O, re) | 0, i = (i = i + Math.imul(O, ne) | 0) + Math.imul(N, re) | 0, o = o + Math.imul(N, ne) | 0, n = n + Math.imul(L, oe) | 0, i = (i = i + Math.imul(L, ae) | 0) + Math.imul(B, oe) | 0, o = o + Math.imul(B, ae) | 0, n = n + Math.imul(I, fe) | 0, i = (i = i + Math.imul(I, ue) | 0) + Math.imul(R, fe) | 0, o = o + Math.imul(R, ue) | 0, n = n + Math.imul(k, he) | 0, i = (i = i + Math.imul(k, de) | 0) + Math.imul(M, he) | 0, o = o + Math.imul(M, de) | 0;
          var Ie = (u + (n = n + Math.imul(S, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, be) | 0) + Math.imul(A, pe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(A, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(D, re), i = (i = Math.imul(D, ne)) + Math.imul(U, re) | 0, o = Math.imul(U, ne), n = n + Math.imul(O, oe) | 0, i = (i = i + Math.imul(O, ae) | 0) + Math.imul(N, oe) | 0, o = o + Math.imul(N, ae) | 0, n = n + Math.imul(L, fe) | 0, i = (i = i + Math.imul(L, ue) | 0) + Math.imul(B, fe) | 0, o = o + Math.imul(B, ue) | 0, n = n + Math.imul(I, he) | 0, i = (i = i + Math.imul(I, de) | 0) + Math.imul(R, he) | 0, o = o + Math.imul(R, de) | 0;
          var Re = (u + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, be) | 0) + Math.imul(M, pe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(M, be) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(D, oe), i = (i = Math.imul(D, ae)) + Math.imul(U, oe) | 0, o = Math.imul(U, ae), n = n + Math.imul(O, fe) | 0, i = (i = i + Math.imul(O, ue) | 0) + Math.imul(N, fe) | 0, o = o + Math.imul(N, ue) | 0, n = n + Math.imul(L, he) | 0, i = (i = i + Math.imul(L, de) | 0) + Math.imul(B, he) | 0, o = o + Math.imul(B, de) | 0;
          var Pe = (u + (n = n + Math.imul(I, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, be) | 0) + Math.imul(R, pe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(R, be) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(D, fe), i = (i = Math.imul(D, ue)) + Math.imul(U, fe) | 0, o = Math.imul(U, ue), n = n + Math.imul(O, he) | 0, i = (i = i + Math.imul(O, de) | 0) + Math.imul(N, he) | 0, o = o + Math.imul(N, de) | 0;
          var Le = (u + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, be) | 0) + Math.imul(B, pe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(B, be) | 0) + (i >>> 13) | 0) + (Le >>> 26) | 0, Le &= 67108863, n = Math.imul(D, he), i = (i = Math.imul(D, de)) + Math.imul(U, he) | 0, o = Math.imul(U, de);
          var Be = (u + (n = n + Math.imul(O, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, be) | 0) + Math.imul(N, pe) | 0)) << 13) | 0;
          u = ((o = o + Math.imul(N, be) | 0) + (i >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863;
          var Ce = (u + (n = Math.imul(D, pe)) | 0) + ((8191 & (i = (i = Math.imul(D, be)) + Math.imul(U, pe) | 0)) << 13) | 0;
          return u = ((o = Math.imul(U, be)) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, f[0] = ye, f[1] = ge, f[2] = ve, f[3] = me, f[4] = we, f[5] = _e, f[6] = Ee, f[7] = Se, f[8] = Ae, f[9] = xe, f[10] = ke, f[11] = Me, f[12] = Te, f[13] = Ie, f[14] = Re, f[15] = Pe, f[16] = Le, f[17] = Be, f[18] = Ce, 0 !== u && (f[19] = u, r.length++), r;
        };

        function p(e, t, r) {
          return new b().mulp(e, t, r);
        }

        function b(e, t) {
          this.x = e, this.y = t;
        }

        Math.imul || (l = d), o.prototype.mulTo = function (e, t) {
          var r = this.length + e.length;
          return 10 === this.length && 10 === e.length ? l(this, e, t) : r < 63 ? d(this, e, t) : r < 1024 ? function (e, t, r) {
            r.negative = t.negative ^ e.negative, r.length = e.length + t.length;

            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var a = i;
              i = 0;

              for (var s = 67108863 & n, f = Math.min(o, t.length - 1), u = Math.max(0, o - e.length + 1); u <= f; u++) {
                var c = o - u,
                    h = (0 | e.words[c]) * (0 | t.words[u]),
                    d = 67108863 & h;
                s = 67108863 & (d = d + s | 0), i += (a = (a = a + (h / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, a &= 67108863;
              }

              r.words[o] = s, n = a, a = i;
            }

            return 0 !== n ? r.words[o] = n : r.length--, r.strip();
          }(this, e, t) : p(this, e, t);
        }, b.prototype.makeRBT = function (e) {
          for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) {
            t[n] = this.revBin(n, r, e);
          }

          return t;
        }, b.prototype.revBin = function (e, t, r) {
          if (0 === e || e === r - 1) return e;

          for (var n = 0, i = 0; i < t; i++) {
            n |= (1 & e) << t - i - 1, e >>= 1;
          }

          return n;
        }, b.prototype.permute = function (e, t, r, n, i, o) {
          for (var a = 0; a < o; a++) {
            n[a] = t[e[a]], i[a] = r[e[a]];
          }
        }, b.prototype.transform = function (e, t, r, n, i, o) {
          this.permute(o, e, t, r, n, i);

          for (var a = 1; a < i; a <<= 1) {
            for (var s = a << 1, f = Math.cos(2 * Math.PI / s), u = Math.sin(2 * Math.PI / s), c = 0; c < i; c += s) {
              for (var h = f, d = u, l = 0; l < a; l++) {
                var p = r[c + l],
                    b = n[c + l],
                    y = r[c + l + a],
                    g = n[c + l + a],
                    v = h * y - d * g;
                g = h * g + d * y, y = v, r[c + l] = p + y, n[c + l] = b + g, r[c + l + a] = p - y, n[c + l + a] = b - g, l !== s && (v = f * h - u * d, d = f * d + u * h, h = v);
              }
            }
          }
        }, b.prototype.guessLen13b = function (e, t) {
          var r = 1 | Math.max(t, e),
              n = 1 & r,
              i = 0;

          for (r = r / 2 | 0; r; r >>>= 1) {
            i++;
          }

          return 1 << i + 1 + n;
        }, b.prototype.conjugate = function (e, t, r) {
          if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
            var i = e[n];
            e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i;
          }
        }, b.prototype.normalize13b = function (e, t) {
          for (var r = 0, n = 0; n < t / 2; n++) {
            var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
            e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
          }

          return e;
        }, b.prototype.convert13b = function (e, t, r, i) {
          for (var o = 0, a = 0; a < t; a++) {
            o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
          }

          for (a = 2 * t; a < i; ++a) {
            r[a] = 0;
          }

          n(0 === o), n(0 == (-8192 & o));
        }, b.prototype.stub = function (e) {
          for (var t = new Array(e), r = 0; r < e; r++) {
            t[r] = 0;
          }

          return t;
        }, b.prototype.mulp = function (e, t, r) {
          var n = 2 * this.guessLen13b(e.length, t.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              a = new Array(n),
              s = new Array(n),
              f = new Array(n),
              u = new Array(n),
              c = new Array(n),
              h = new Array(n),
              d = r.words;
          d.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, u, n), this.transform(a, o, s, f, n, i), this.transform(u, o, c, h, n, i);

          for (var l = 0; l < n; l++) {
            var p = s[l] * c[l] - f[l] * h[l];
            f[l] = s[l] * h[l] + f[l] * c[l], s[l] = p;
          }

          return this.conjugate(s, f, n), this.transform(s, f, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip();
        }, o.prototype.mul = function (e) {
          var t = new o(null);
          return t.words = new Array(this.length + e.length), this.mulTo(e, t);
        }, o.prototype.mulf = function (e) {
          var t = new o(null);
          return t.words = new Array(this.length + e.length), p(this, e, t);
        }, o.prototype.imul = function (e) {
          return this.clone().mulTo(e, this);
        }, o.prototype.imuln = function (e) {
          n("number" == typeof e), n(e < 67108864);

          for (var t = 0, r = 0; r < this.length; r++) {
            var i = (0 | this.words[r]) * e,
                o = (67108863 & i) + (67108863 & t);
            t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o;
          }

          return 0 !== t && (this.words[r] = t, this.length++), this;
        }, o.prototype.muln = function (e) {
          return this.clone().imuln(e);
        }, o.prototype.sqr = function () {
          return this.mul(this);
        }, o.prototype.isqr = function () {
          return this.imul(this.clone());
        }, o.prototype.pow = function (e) {
          var t = function (e) {
            for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
              var n = r / 26 | 0,
                  i = r % 26;
              t[r] = (e.words[n] & 1 << i) >>> i;
            }

            return t;
          }(e);

          if (0 === t.length) return new o(1);

          for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr()) {
            ;
          }

          if (++n < t.length) for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) {
            0 !== t[n] && (r = r.mul(i));
          }
          return r;
        }, o.prototype.iushln = function (e) {
          n("number" == typeof e && e >= 0);
          var t,
              r = e % 26,
              i = (e - r) / 26,
              o = 67108863 >>> 26 - r << 26 - r;

          if (0 !== r) {
            var a = 0;

            for (t = 0; t < this.length; t++) {
              var s = this.words[t] & o,
                  f = (0 | this.words[t]) - s << r;
              this.words[t] = f | a, a = s >>> 26 - r;
            }

            a && (this.words[t] = a, this.length++);
          }

          if (0 !== i) {
            for (t = this.length - 1; t >= 0; t--) {
              this.words[t + i] = this.words[t];
            }

            for (t = 0; t < i; t++) {
              this.words[t] = 0;
            }

            this.length += i;
          }

          return this.strip();
        }, o.prototype.ishln = function (e) {
          return n(0 === this.negative), this.iushln(e);
        }, o.prototype.iushrn = function (e, t, r) {
          var i;
          n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
          var o = e % 26,
              a = Math.min((e - o) / 26, this.length),
              s = 67108863 ^ 67108863 >>> o << o,
              f = r;

          if (i -= a, i = Math.max(0, i), f) {
            for (var u = 0; u < a; u++) {
              f.words[u] = this.words[u];
            }

            f.length = a;
          }

          if (0 === a) ;else if (this.length > a) for (this.length -= a, u = 0; u < this.length; u++) {
            this.words[u] = this.words[u + a];
          } else this.words[0] = 0, this.length = 1;
          var c = 0;

          for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
            var h = 0 | this.words[u];
            this.words[u] = c << 26 - o | h >>> o, c = h & s;
          }

          return f && 0 !== c && (f.words[f.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
        }, o.prototype.ishrn = function (e, t, r) {
          return n(0 === this.negative), this.iushrn(e, t, r);
        }, o.prototype.shln = function (e) {
          return this.clone().ishln(e);
        }, o.prototype.ushln = function (e) {
          return this.clone().iushln(e);
        }, o.prototype.shrn = function (e) {
          return this.clone().ishrn(e);
        }, o.prototype.ushrn = function (e) {
          return this.clone().iushrn(e);
        }, o.prototype.testn = function (e) {
          n("number" == typeof e && e >= 0);
          var t = e % 26,
              r = (e - t) / 26,
              i = 1 << t;
          return !(this.length <= r) && !!(this.words[r] & i);
        }, o.prototype.imaskn = function (e) {
          n("number" == typeof e && e >= 0);
          var t = e % 26,
              r = (e - t) / 26;
          if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;

          if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
            var i = 67108863 ^ 67108863 >>> t << t;
            this.words[this.length - 1] &= i;
          }

          return this.strip();
        }, o.prototype.maskn = function (e) {
          return this.clone().imaskn(e);
        }, o.prototype.iaddn = function (e) {
          return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e);
        }, o.prototype._iaddn = function (e) {
          this.words[0] += e;

          for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) {
            this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
          }

          return this.length = Math.max(this.length, t + 1), this;
        }, o.prototype.isubn = function (e) {
          if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
          if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
          if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;else for (var t = 0; t < this.length && this.words[t] < 0; t++) {
            this.words[t] += 67108864, this.words[t + 1] -= 1;
          }
          return this.strip();
        }, o.prototype.addn = function (e) {
          return this.clone().iaddn(e);
        }, o.prototype.subn = function (e) {
          return this.clone().isubn(e);
        }, o.prototype.iabs = function () {
          return this.negative = 0, this;
        }, o.prototype.abs = function () {
          return this.clone().iabs();
        }, o.prototype._ishlnsubmul = function (e, t, r) {
          var i,
              o,
              a = e.length + r;

          this._expand(a);

          var s = 0;

          for (i = 0; i < e.length; i++) {
            o = (0 | this.words[i + r]) + s;
            var f = (0 | e.words[i]) * t;
            s = ((o -= 67108863 & f) >> 26) - (f / 67108864 | 0), this.words[i + r] = 67108863 & o;
          }

          for (; i < this.length - r; i++) {
            s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o;
          }

          if (0 === s) return this.strip();

          for (n(-1 === s), s = 0, i = 0; i < this.length; i++) {
            s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
          }

          return this.negative = 1, this.strip();
        }, o.prototype._wordDiv = function (e, t) {
          var r = (this.length, e.length),
              n = this.clone(),
              i = e,
              a = 0 | i.words[i.length - 1];
          0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
          var s,
              f = n.length - i.length;

          if ("mod" !== t) {
            (s = new o(null)).length = f + 1, s.words = new Array(s.length);

            for (var u = 0; u < s.length; u++) {
              s.words[u] = 0;
            }
          }

          var c = n.clone()._ishlnsubmul(i, 1, f);

          0 === c.negative && (n = c, s && (s.words[f] = 1));

          for (var h = f - 1; h >= 0; h--) {
            var d = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);

            for (d = Math.min(d / a | 0, 67108863), n._ishlnsubmul(i, d, h); 0 !== n.negative;) {
              d--, n.negative = 0, n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
            }

            s && (s.words[h] = d);
          }

          return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), {
            div: s || null,
            mod: n
          };
        }, o.prototype.divmod = function (e, t, r) {
          return n(!e.isZero()), this.isZero() ? {
            div: new o(0),
            mod: new o(0)
          } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(e)), {
            div: i,
            mod: a
          }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), {
            div: i,
            mod: s.mod
          }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(e)), {
            div: s.div,
            mod: a
          }) : e.length > this.length || this.cmp(e) < 0 ? {
            div: new o(0),
            mod: this
          } : 1 === e.length ? "div" === t ? {
            div: this.divn(e.words[0]),
            mod: null
          } : "mod" === t ? {
            div: null,
            mod: new o(this.modn(e.words[0]))
          } : {
            div: this.divn(e.words[0]),
            mod: new o(this.modn(e.words[0]))
          } : this._wordDiv(e, t);
          var i, a, s;
        }, o.prototype.div = function (e) {
          return this.divmod(e, "div", !1).div;
        }, o.prototype.mod = function (e) {
          return this.divmod(e, "mod", !1).mod;
        }, o.prototype.umod = function (e) {
          return this.divmod(e, "mod", !0).mod;
        }, o.prototype.divRound = function (e) {
          var t = this.divmod(e);
          if (t.mod.isZero()) return t.div;
          var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
              n = e.ushrn(1),
              i = e.andln(1),
              o = r.cmp(n);
          return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1);
        }, o.prototype.modn = function (e) {
          n(e <= 67108863);

          for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) {
            r = (t * r + (0 | this.words[i])) % e;
          }

          return r;
        }, o.prototype.idivn = function (e) {
          n(e <= 67108863);

          for (var t = 0, r = this.length - 1; r >= 0; r--) {
            var i = (0 | this.words[r]) + 67108864 * t;
            this.words[r] = i / e | 0, t = i % e;
          }

          return this.strip();
        }, o.prototype.divn = function (e) {
          return this.clone().idivn(e);
        }, o.prototype.egcd = function (e) {
          n(0 === e.negative), n(!e.isZero());
          var t = this,
              r = e.clone();
          t = 0 !== t.negative ? t.umod(e) : t.clone();

          for (var i = new o(1), a = new o(0), s = new o(0), f = new o(1), u = 0; t.isEven() && r.isEven();) {
            t.iushrn(1), r.iushrn(1), ++u;
          }

          for (var c = r.clone(), h = t.clone(); !t.isZero();) {
            for (var d = 0, l = 1; 0 == (t.words[0] & l) && d < 26; ++d, l <<= 1) {
              ;
            }

            if (d > 0) for (t.iushrn(d); d-- > 0;) {
              (i.isOdd() || a.isOdd()) && (i.iadd(c), a.isub(h)), i.iushrn(1), a.iushrn(1);
            }

            for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1) {
              ;
            }

            if (p > 0) for (r.iushrn(p); p-- > 0;) {
              (s.isOdd() || f.isOdd()) && (s.iadd(c), f.isub(h)), s.iushrn(1), f.iushrn(1);
            }
            t.cmp(r) >= 0 ? (t.isub(r), i.isub(s), a.isub(f)) : (r.isub(t), s.isub(i), f.isub(a));
          }

          return {
            a: s,
            b: f,
            gcd: r.iushln(u)
          };
        }, o.prototype._invmp = function (e) {
          n(0 === e.negative), n(!e.isZero());
          var t = this,
              r = e.clone();
          t = 0 !== t.negative ? t.umod(e) : t.clone();

          for (var i, a = new o(1), s = new o(0), f = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
            for (var u = 0, c = 1; 0 == (t.words[0] & c) && u < 26; ++u, c <<= 1) {
              ;
            }

            if (u > 0) for (t.iushrn(u); u-- > 0;) {
              a.isOdd() && a.iadd(f), a.iushrn(1);
            }

            for (var h = 0, d = 1; 0 == (r.words[0] & d) && h < 26; ++h, d <<= 1) {
              ;
            }

            if (h > 0) for (r.iushrn(h); h-- > 0;) {
              s.isOdd() && s.iadd(f), s.iushrn(1);
            }
            t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a));
          }

          return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i;
        }, o.prototype.gcd = function (e) {
          if (this.isZero()) return e.abs();
          if (e.isZero()) return this.abs();
          var t = this.clone(),
              r = e.clone();
          t.negative = 0, r.negative = 0;

          for (var n = 0; t.isEven() && r.isEven(); n++) {
            t.iushrn(1), r.iushrn(1);
          }

          for (;;) {
            for (; t.isEven();) {
              t.iushrn(1);
            }

            for (; r.isEven();) {
              r.iushrn(1);
            }

            var i = t.cmp(r);

            if (i < 0) {
              var o = t;
              t = r, r = o;
            } else if (0 === i || 0 === r.cmpn(1)) break;

            t.isub(r);
          }

          return r.iushln(n);
        }, o.prototype.invm = function (e) {
          return this.egcd(e).a.umod(e);
        }, o.prototype.isEven = function () {
          return 0 == (1 & this.words[0]);
        }, o.prototype.isOdd = function () {
          return 1 == (1 & this.words[0]);
        }, o.prototype.andln = function (e) {
          return this.words[0] & e;
        }, o.prototype.bincn = function (e) {
          n("number" == typeof e);
          var t = e % 26,
              r = (e - t) / 26,
              i = 1 << t;
          if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;

          for (var o = i, a = r; 0 !== o && a < this.length; a++) {
            var s = 0 | this.words[a];
            o = (s += o) >>> 26, s &= 67108863, this.words[a] = s;
          }

          return 0 !== o && (this.words[a] = o, this.length++), this;
        }, o.prototype.isZero = function () {
          return 1 === this.length && 0 === this.words[0];
        }, o.prototype.cmpn = function (e) {
          var t,
              r = e < 0;
          if (0 !== this.negative && !r) return -1;
          if (0 === this.negative && r) return 1;
          if (this.strip(), this.length > 1) t = 1;else {
            r && (e = -e), n(e <= 67108863, "Number is too big");
            var i = 0 | this.words[0];
            t = i === e ? 0 : i < e ? -1 : 1;
          }
          return 0 !== this.negative ? 0 | -t : t;
        }, o.prototype.cmp = function (e) {
          if (0 !== this.negative && 0 === e.negative) return -1;
          if (0 === this.negative && 0 !== e.negative) return 1;
          var t = this.ucmp(e);
          return 0 !== this.negative ? 0 | -t : t;
        }, o.prototype.ucmp = function (e) {
          if (this.length > e.length) return 1;
          if (this.length < e.length) return -1;

          for (var t = 0, r = this.length - 1; r >= 0; r--) {
            var n = 0 | this.words[r],
                i = 0 | e.words[r];

            if (n !== i) {
              n < i ? t = -1 : n > i && (t = 1);
              break;
            }
          }

          return t;
        }, o.prototype.gtn = function (e) {
          return 1 === this.cmpn(e);
        }, o.prototype.gt = function (e) {
          return 1 === this.cmp(e);
        }, o.prototype.gten = function (e) {
          return this.cmpn(e) >= 0;
        }, o.prototype.gte = function (e) {
          return this.cmp(e) >= 0;
        }, o.prototype.ltn = function (e) {
          return -1 === this.cmpn(e);
        }, o.prototype.lt = function (e) {
          return -1 === this.cmp(e);
        }, o.prototype.lten = function (e) {
          return this.cmpn(e) <= 0;
        }, o.prototype.lte = function (e) {
          return this.cmp(e) <= 0;
        }, o.prototype.eqn = function (e) {
          return 0 === this.cmpn(e);
        }, o.prototype.eq = function (e) {
          return 0 === this.cmp(e);
        }, o.red = function (e) {
          return new E(e);
        }, o.prototype.toRed = function (e) {
          return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e);
        }, o.prototype.fromRed = function () {
          return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, o.prototype._forceRed = function (e) {
          return this.red = e, this;
        }, o.prototype.forceRed = function (e) {
          return n(!this.red, "Already a number in reduction context"), this._forceRed(e);
        }, o.prototype.redAdd = function (e) {
          return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e);
        }, o.prototype.redIAdd = function (e) {
          return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e);
        }, o.prototype.redSub = function (e) {
          return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e);
        }, o.prototype.redISub = function (e) {
          return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e);
        }, o.prototype.redShl = function (e) {
          return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e);
        }, o.prototype.redMul = function (e) {
          return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e);
        }, o.prototype.redIMul = function (e) {
          return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e);
        }, o.prototype.redSqr = function () {
          return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, o.prototype.redISqr = function () {
          return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, o.prototype.redSqrt = function () {
          return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, o.prototype.redInvm = function () {
          return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, o.prototype.redNeg = function () {
          return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, o.prototype.redPow = function (e) {
          return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e);
        };
        var y = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };

        function g(e, t) {
          this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }

        function v() {
          g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }

        function m() {
          g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }

        function w() {
          g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }

        function _() {
          g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }

        function E(e) {
          if ("string" == typeof e) {
            var t = o._prime(e);

            this.m = t.p, this.prime = t;
          } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null;
        }

        function S(e) {
          E.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }

        g.prototype._tmp = function () {
          var e = new o(null);
          return e.words = new Array(Math.ceil(this.n / 13)), e;
        }, g.prototype.ireduce = function (e) {
          var t,
              r = e;

          do {
            this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
          } while (t > this.n);

          var n = t < this.n ? -1 : r.ucmp(this.p);
          return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r;
        }, g.prototype.split = function (e, t) {
          e.iushrn(this.n, 0, t);
        }, g.prototype.imulK = function (e) {
          return e.imul(this.k);
        }, i(v, g), v.prototype.split = function (e, t) {
          for (var r = Math.min(e.length, 9), n = 0; n < r; n++) {
            t.words[n] = e.words[n];
          }

          if (t.length = r, e.length <= 9) return e.words[0] = 0, void (e.length = 1);
          var i = e.words[9];

          for (t.words[t.length++] = 4194303 & i, n = 10; n < e.length; n++) {
            var o = 0 | e.words[n];
            e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o;
          }

          i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9;
        }, v.prototype.imulK = function (e) {
          e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;

          for (var t = 0, r = 0; r < e.length; r++) {
            var n = 0 | e.words[r];
            t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0);
          }

          return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
        }, i(m, g), i(w, g), i(_, g), _.prototype.imulK = function (e) {
          for (var t = 0, r = 0; r < e.length; r++) {
            var n = 19 * (0 | e.words[r]) + t,
                i = 67108863 & n;
            n >>>= 26, e.words[r] = i, t = n;
          }

          return 0 !== t && (e.words[e.length++] = t), e;
        }, o._prime = function (e) {
          if (y[e]) return y[e];
          var t;
          if ("k256" === e) t = new v();else if ("p224" === e) t = new m();else if ("p192" === e) t = new w();else {
            if ("p25519" !== e) throw new Error("Unknown prime " + e);
            t = new _();
          }
          return y[e] = t, t;
        }, E.prototype._verify1 = function (e) {
          n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers");
        }, E.prototype._verify2 = function (e, t) {
          n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers");
        }, E.prototype.imod = function (e) {
          return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this);
        }, E.prototype.neg = function (e) {
          return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
        }, E.prototype.add = function (e, t) {
          this._verify2(e, t);

          var r = e.add(t);
          return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
        }, E.prototype.iadd = function (e, t) {
          this._verify2(e, t);

          var r = e.iadd(t);
          return r.cmp(this.m) >= 0 && r.isub(this.m), r;
        }, E.prototype.sub = function (e, t) {
          this._verify2(e, t);

          var r = e.sub(t);
          return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
        }, E.prototype.isub = function (e, t) {
          this._verify2(e, t);

          var r = e.isub(t);
          return r.cmpn(0) < 0 && r.iadd(this.m), r;
        }, E.prototype.shl = function (e, t) {
          return this._verify1(e), this.imod(e.ushln(t));
        }, E.prototype.imul = function (e, t) {
          return this._verify2(e, t), this.imod(e.imul(t));
        }, E.prototype.mul = function (e, t) {
          return this._verify2(e, t), this.imod(e.mul(t));
        }, E.prototype.isqr = function (e) {
          return this.imul(e, e.clone());
        }, E.prototype.sqr = function (e) {
          return this.mul(e, e);
        }, E.prototype.sqrt = function (e) {
          if (e.isZero()) return e.clone();
          var t = this.m.andln(3);

          if (n(t % 2 == 1), 3 === t) {
            var r = this.m.add(new o(1)).iushrn(2);
            return this.pow(e, r);
          }

          for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) {
            a++, i.iushrn(1);
          }

          n(!i.isZero());
          var s = new o(1).toRed(this),
              f = s.redNeg(),
              u = this.m.subn(1).iushrn(1),
              c = this.m.bitLength();

          for (c = new o(2 * c * c).toRed(this); 0 !== this.pow(c, u).cmp(f);) {
            c.redIAdd(f);
          }

          for (var h = this.pow(c, i), d = this.pow(e, i.addn(1).iushrn(1)), l = this.pow(e, i), p = a; 0 !== l.cmp(s);) {
            for (var b = l, y = 0; 0 !== b.cmp(s); y++) {
              b = b.redSqr();
            }

            n(y < p);
            var g = this.pow(h, new o(1).iushln(p - y - 1));
            d = d.redMul(g), h = g.redSqr(), l = l.redMul(h), p = y;
          }

          return d;
        }, E.prototype.invm = function (e) {
          var t = e._invmp(this.m);

          return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t);
        }, E.prototype.pow = function (e, t) {
          if (t.isZero()) return new o(1).toRed(this);
          if (0 === t.cmpn(1)) return e.clone();
          var r = new Array(16);
          r[0] = new o(1).toRed(this), r[1] = e;

          for (var n = 2; n < r.length; n++) {
            r[n] = this.mul(r[n - 1], e);
          }

          var i = r[0],
              a = 0,
              s = 0,
              f = t.bitLength() % 26;

          for (0 === f && (f = 26), n = t.length - 1; n >= 0; n--) {
            for (var u = t.words[n], c = f - 1; c >= 0; c--) {
              var h = u >> c & 1;
              i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== a ? (a <<= 1, a |= h, (4 === ++s || 0 === n && 0 === c) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0;
            }

            f = 26;
          }

          return i;
        }, E.prototype.convertTo = function (e) {
          var t = e.umod(this.m);
          return t === e ? t.clone() : t;
        }, E.prototype.convertFrom = function (e) {
          var t = e.clone();
          return t.red = null, t;
        }, o.mont = function (e) {
          return new S(e);
        }, i(S, E), S.prototype.convertTo = function (e) {
          return this.imod(e.ushln(this.shift));
        }, S.prototype.convertFrom = function (e) {
          var t = this.imod(e.mul(this.rinv));
          return t.red = null, t;
        }, S.prototype.imul = function (e, t) {
          if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
          var r = e.imul(t),
              n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
          return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
        }, S.prototype.mul = function (e, t) {
          if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
          var r = e.mul(t),
              n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              a = i;
          return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this);
        }, S.prototype.invm = function (e) {
          return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
        };
      }(e, this);
    }).call(this, r(25)(e));
  }, function (e, t) {
    var r;

    r = function () {
      return this;
    }();

    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }

    e.exports = r;
  }, function (e, t, r) {
    "use strict";

    var n = t,
        i = r(4),
        o = r(12),
        a = r(72);
    n.assert = o, n.toArray = a.toArray, n.zero2 = a.zero2, n.toHex = a.toHex, n.encode = a.encode, n.getNAF = function (e, t, r) {
      var n = new Array(Math.max(e.bitLength(), r) + 1);
      n.fill(0);

      for (var i = 1 << t + 1, o = e.clone(), a = 0; a < n.length; a++) {
        var s,
            f = o.andln(i - 1);
        o.isOdd() ? (s = f > (i >> 1) - 1 ? (i >> 1) - f : f, o.isubn(s)) : s = 0, n[a] = s, o.iushrn(1);
      }

      return n;
    }, n.getJSF = function (e, t) {
      var r = [[], []];
      e = e.clone(), t = t.clone();

      for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0;) {
        var o,
            a,
            s,
            f = e.andln(3) + n & 3,
            u = t.andln(3) + i & 3;
        if (3 === f && (f = -1), 3 === u && (u = -1), 0 == (1 & f)) o = 0;else o = 3 !== (s = e.andln(7) + n & 7) && 5 !== s || 2 !== u ? f : -f;
        if (r[0].push(o), 0 == (1 & u)) a = 0;else a = 3 !== (s = t.andln(7) + i & 7) && 5 !== s || 2 !== f ? u : -u;
        r[1].push(a), 2 * n === o + 1 && (n = 1 - n), 2 * i === a + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1);
      }

      return r;
    }, n.cachedProperty = function (e, t, r) {
      var n = "_" + t;

      e.prototype[t] = function () {
        return void 0 !== this[n] ? this[n] : this[n] = r.call(this);
      };
    }, n.parseBytes = function (e) {
      return "string" == typeof e ? n.toArray(e, "hex") : e;
    }, n.intFromLE = function (e) {
      return new i(e, "hex", "le");
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(98),
        i = r(258),
        o = Object.prototype.toString;

    function a(e) {
      return "[object Array]" === o.call(e);
    }

    function s(e) {
      return null !== e && "object" == typeof e;
    }

    function f(e) {
      return "[object Function]" === o.call(e);
    }

    function u(e, t) {
      if (null != e) if ("object" != typeof e && (e = [e]), a(e)) for (var r = 0, n = e.length; r < n; r++) {
        t.call(null, e[r], r, e);
      } else for (var i in e) {
        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
      }
    }

    e.exports = {
      isArray: a,
      isArrayBuffer: function isArrayBuffer(e) {
        return "[object ArrayBuffer]" === o.call(e);
      },
      isBuffer: i,
      isFormData: function isFormData(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function isArrayBufferView(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function isString(e) {
        return "string" == typeof e;
      },
      isNumber: function isNumber(e) {
        return "number" == typeof e;
      },
      isObject: s,
      isUndefined: function isUndefined(e) {
        return void 0 === e;
      },
      isDate: function isDate(e) {
        return "[object Date]" === o.call(e);
      },
      isFile: function isFile(e) {
        return "[object File]" === o.call(e);
      },
      isBlob: function isBlob(e) {
        return "[object Blob]" === o.call(e);
      },
      isFunction: f,
      isStream: function isStream(e) {
        return s(e) && f(e.pipe);
      },
      isURLSearchParams: function isURLSearchParams(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
      },
      isStandardBrowserEnv: function isStandardBrowserEnv() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
      },
      forEach: u,
      merge: function e() {
        var t = {};

        function r(r, n) {
          "object" == typeof t[n] && "object" == typeof r ? t[n] = e(t[n], r) : t[n] = r;
        }

        for (var n = 0, i = arguments.length; n < i; n++) {
          u(arguments[n], r);
        }

        return t;
      },
      extend: function extend(e, t, r) {
        return u(t, function (t, i) {
          e[i] = r && "function" == typeof t ? n(t, r) : t;
        }), e;
      },
      trim: function trim(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(12),
        i = r(0);

    function o(e, t) {
      return 55296 == (64512 & e.charCodeAt(t)) && !(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1));
    }

    function a(e) {
      return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0;
    }

    function s(e) {
      return 1 === e.length ? "0" + e : e;
    }

    function f(e) {
      return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e;
    }

    t.inherits = i, t.toArray = function (e, t) {
      if (Array.isArray(e)) return e.slice();
      if (!e) return [];
      var r = [];
      if ("string" == typeof e) {
        if (t) {
          if ("hex" === t) for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) {
            r.push(parseInt(e[i] + e[i + 1], 16));
          }
        } else for (var n = 0, i = 0; i < e.length; i++) {
          var a = e.charCodeAt(i);
          a < 128 ? r[n++] = a : a < 2048 ? (r[n++] = a >> 6 | 192, r[n++] = 63 & a | 128) : o(e, i) ? (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = a >> 18 | 240, r[n++] = a >> 12 & 63 | 128, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128) : (r[n++] = a >> 12 | 224, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128);
        }
      } else for (i = 0; i < e.length; i++) {
        r[i] = 0 | e[i];
      }
      return r;
    }, t.toHex = function (e) {
      for (var t = "", r = 0; r < e.length; r++) {
        t += s(e[r].toString(16));
      }

      return t;
    }, t.htonl = a, t.toHex32 = function (e, t) {
      for (var r = "", n = 0; n < e.length; n++) {
        var i = e[n];
        "little" === t && (i = a(i)), r += f(i.toString(16));
      }

      return r;
    }, t.zero2 = s, t.zero8 = f, t.join32 = function (e, t, r, i) {
      var o = r - t;
      n(o % 4 == 0);

      for (var a = new Array(o / 4), s = 0, f = t; s < a.length; s++, f += 4) {
        var u;
        u = "big" === i ? e[f] << 24 | e[f + 1] << 16 | e[f + 2] << 8 | e[f + 3] : e[f + 3] << 24 | e[f + 2] << 16 | e[f + 1] << 8 | e[f], a[s] = u >>> 0;
      }

      return a;
    }, t.split32 = function (e, t) {
      for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
        var o = e[n];
        "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o);
      }

      return r;
    }, t.rotr32 = function (e, t) {
      return e >>> t | e << 32 - t;
    }, t.rotl32 = function (e, t) {
      return e << t | e >>> 32 - t;
    }, t.sum32 = function (e, t) {
      return e + t >>> 0;
    }, t.sum32_3 = function (e, t, r) {
      return e + t + r >>> 0;
    }, t.sum32_4 = function (e, t, r, n) {
      return e + t + r + n >>> 0;
    }, t.sum32_5 = function (e, t, r, n, i) {
      return e + t + r + n + i >>> 0;
    }, t.sum64 = function (e, t, r, n) {
      var i = e[t],
          o = n + e[t + 1] >>> 0,
          a = (o < n ? 1 : 0) + r + i;
      e[t] = a >>> 0, e[t + 1] = o;
    }, t.sum64_hi = function (e, t, r, n) {
      return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0;
    }, t.sum64_lo = function (e, t, r, n) {
      return t + n >>> 0;
    }, t.sum64_4_hi = function (e, t, r, n, i, o, a, s) {
      var f = 0,
          u = t;
      return f += (u = u + n >>> 0) < t ? 1 : 0, f += (u = u + o >>> 0) < o ? 1 : 0, e + r + i + a + (f += (u = u + s >>> 0) < s ? 1 : 0) >>> 0;
    }, t.sum64_4_lo = function (e, t, r, n, i, o, a, s) {
      return t + n + o + s >>> 0;
    }, t.sum64_5_hi = function (e, t, r, n, i, o, a, s, f, u) {
      var c = 0,
          h = t;
      return c += (h = h + n >>> 0) < t ? 1 : 0, c += (h = h + o >>> 0) < o ? 1 : 0, c += (h = h + s >>> 0) < s ? 1 : 0, e + r + i + a + f + (c += (h = h + u >>> 0) < u ? 1 : 0) >>> 0;
    }, t.sum64_5_lo = function (e, t, r, n, i, o, a, s, f, u) {
      return t + n + o + s + u >>> 0;
    }, t.rotr64_hi = function (e, t, r) {
      return (t << 32 - r | e >>> r) >>> 0;
    }, t.rotr64_lo = function (e, t, r) {
      return (e << 32 - r | t >>> r) >>> 0;
    }, t.shr64_hi = function (e, t, r) {
      return e >>> r;
    }, t.shr64_lo = function (e, t, r) {
      return (e << 32 - r | t >>> r) >>> 0;
    };
  }, function (e, t, r) {
    "use strict";

    var n,
        i = "object" == typeof Reflect ? Reflect : null,
        o = i && "function" == typeof i.apply ? i.apply : function (e, t, r) {
      return Function.prototype.apply.call(e, t, r);
    };
    n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function (e) {
      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : function (e) {
      return Object.getOwnPropertyNames(e);
    };

    var a = Number.isNaN || function (e) {
      return e != e;
    };

    function s() {
      s.init.call(this);
    }

    e.exports = s, e.exports.once = function (e, t) {
      return new Promise(function (r, n) {
        function i() {
          void 0 !== o && e.removeListener("error", o), r([].slice.call(arguments));
        }

        var o;
        "error" !== t && (o = function o(r) {
          e.removeListener(t, i), n(r);
        }, e.once("error", o)), e.once(t, i);
      });
    }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
    var f = 10;

    function u(e) {
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }

    function c(e) {
      return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
    }

    function h(e, t, r, n) {
      var i, o, a, s;
      if (u(r), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), a = o[t]), void 0 === a) a = o[t] = r, ++e._eventsCount;else if ("function" == typeof a ? a = o[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), (i = c(e)) > 0 && a.length > i && !a.warned) {
        a.warned = !0;
        var f = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        f.name = "MaxListenersExceededWarning", f.emitter = e, f.type = t, f.count = a.length, s = f, console && console.warn && console.warn(s);
      }
      return e;
    }

    function d() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }

    function l(e, t, r) {
      var n = {
        fired: !1,
        wrapFn: void 0,
        target: e,
        type: t,
        listener: r
      },
          i = d.bind(n);
      return i.listener = r, n.wrapFn = i, i;
    }

    function p(e, t, r) {
      var n = e._events;
      if (void 0 === n) return [];
      var i = n[t];
      return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function (e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) {
          t[r] = e[r].listener || e[r];
        }

        return t;
      }(i) : y(i, i.length);
    }

    function b(e) {
      var t = this._events;

      if (void 0 !== t) {
        var r = t[e];
        if ("function" == typeof r) return 1;
        if (void 0 !== r) return r.length;
      }

      return 0;
    }

    function y(e, t) {
      for (var r = new Array(t), n = 0; n < t; ++n) {
        r[n] = e[n];
      }

      return r;
    }

    Object.defineProperty(s, "defaultMaxListeners", {
      enumerable: !0,
      get: function get() {
        return f;
      },
      set: function set(e) {
        if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        f = e;
      }
    }), s.init = function () {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, s.prototype.setMaxListeners = function (e) {
      if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
      return this._maxListeners = e, this;
    }, s.prototype.getMaxListeners = function () {
      return c(this);
    }, s.prototype.emit = function (e) {
      for (var t = [], r = 1; r < arguments.length; r++) {
        t.push(arguments[r]);
      }

      var n = "error" === e,
          i = this._events;
      if (void 0 !== i) n = n && void 0 === i.error;else if (!n) return !1;

      if (n) {
        var a;
        if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
        var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
        throw s.context = a, s;
      }

      var f = i[e];
      if (void 0 === f) return !1;
      if ("function" == typeof f) o(f, this, t);else {
        var u = f.length,
            c = y(f, u);

        for (r = 0; r < u; ++r) {
          o(c[r], this, t);
        }
      }
      return !0;
    }, s.prototype.addListener = function (e, t) {
      return h(this, e, t, !1);
    }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function (e, t) {
      return h(this, e, t, !0);
    }, s.prototype.once = function (e, t) {
      return u(t), this.on(e, l(this, e, t)), this;
    }, s.prototype.prependOnceListener = function (e, t) {
      return u(t), this.prependListener(e, l(this, e, t)), this;
    }, s.prototype.removeListener = function (e, t) {
      var r, n, i, o, a;
      if (u(t), void 0 === (n = this._events)) return this;
      if (void 0 === (r = n[e])) return this;
      if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));else if ("function" != typeof r) {
        for (i = -1, o = r.length - 1; o >= 0; o--) {
          if (r[o] === t || r[o].listener === t) {
            a = r[o].listener, i = o;
            break;
          }
        }

        if (i < 0) return this;
        0 === i ? r.shift() : function (e, t) {
          for (; t + 1 < e.length; t++) {
            e[t] = e[t + 1];
          }

          e.pop();
        }(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, a || t);
      }
      return this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function (e) {
      var t, r, n;
      if (void 0 === (r = this._events)) return this;
      if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;

      if (0 === arguments.length) {
        var i,
            o = Object.keys(r);

        for (n = 0; n < o.length; ++n) {
          "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
        }

        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }

      if ("function" == typeof (t = r[e])) this.removeListener(e, t);else if (void 0 !== t) for (n = t.length - 1; n >= 0; n--) {
        this.removeListener(e, t[n]);
      }
      return this;
    }, s.prototype.listeners = function (e) {
      return p(this, e, !0);
    }, s.prototype.rawListeners = function (e) {
      return p(this, e, !1);
    }, s.listenerCount = function (e, t) {
      return "function" == typeof e.listenerCount ? e.listenerCount(t) : b.call(e, t);
    }, s.prototype.listenerCount = b, s.prototype.eventNames = function () {
      return this._eventsCount > 0 ? n(this._events) : [];
    };
  }, function (e, t, r) {
    (function (e) {
      var n = Object.getOwnPropertyDescriptors || function (e) {
        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
          r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
        }

        return r;
      },
          i = /%[sdj%]/g;

      t.format = function (e) {
        if (!g(e)) {
          for (var t = [], r = 0; r < arguments.length; r++) {
            t.push(s(arguments[r]));
          }

          return t.join(" ");
        }

        r = 1;

        for (var n = arguments, o = n.length, a = String(e).replace(i, function (e) {
          if ("%%" === e) return "%";
          if (r >= o) return e;

          switch (e) {
            case "%s":
              return String(n[r++]);

            case "%d":
              return Number(n[r++]);

            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (e) {
                return "[Circular]";
              }

            default:
              return e;
          }
        }), f = n[r]; r < o; f = n[++r]) {
          b(f) || !w(f) ? a += " " + f : a += " " + s(f);
        }

        return a;
      }, t.deprecate = function (r, n) {
        if (void 0 !== e && !0 === e.noDeprecation) return r;
        if (void 0 === e) return function () {
          return t.deprecate(r, n).apply(this, arguments);
        };
        var i = !1;
        return function () {
          if (!i) {
            if (e.throwDeprecation) throw new Error(n);
            e.traceDeprecation ? console.trace(n) : console.error(n), i = !0;
          }

          return r.apply(this, arguments);
        };
      };
      var o,
          a = {};

      function s(e, r) {
        var n = {
          seen: [],
          stylize: u
        };
        return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), p(r) ? n.showHidden = r : r && t._extend(n, r), v(n.showHidden) && (n.showHidden = !1), v(n.depth) && (n.depth = 2), v(n.colors) && (n.colors = !1), v(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = f), c(n, e, n.depth);
      }

      function f(e, t) {
        var r = s.styles[t];
        return r ? "[" + s.colors[r][0] + "m" + e + "[" + s.colors[r][1] + "m" : e;
      }

      function u(e, t) {
        return e;
      }

      function c(e, r, n) {
        if (e.customInspect && r && S(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
          var i = r.inspect(n, e);
          return g(i) || (i = c(e, i, n)), i;
        }

        var o = function (e, t) {
          if (v(t)) return e.stylize("undefined", "undefined");

          if (g(t)) {
            var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return e.stylize(r, "string");
          }

          if (y(t)) return e.stylize("" + t, "number");
          if (p(t)) return e.stylize("" + t, "boolean");
          if (b(t)) return e.stylize("null", "null");
        }(e, r);

        if (o) return o;

        var a = Object.keys(r),
            s = function (e) {
          var t = {};
          return e.forEach(function (e, r) {
            t[e] = !0;
          }), t;
        }(a);

        if (e.showHidden && (a = Object.getOwnPropertyNames(r)), E(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return h(r);

        if (0 === a.length) {
          if (S(r)) {
            var f = r.name ? ": " + r.name : "";
            return e.stylize("[Function" + f + "]", "special");
          }

          if (m(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
          if (_(r)) return e.stylize(Date.prototype.toString.call(r), "date");
          if (E(r)) return h(r);
        }

        var u,
            w = "",
            A = !1,
            x = ["{", "}"];
        (l(r) && (A = !0, x = ["[", "]"]), S(r)) && (w = " [Function" + (r.name ? ": " + r.name : "") + "]");
        return m(r) && (w = " " + RegExp.prototype.toString.call(r)), _(r) && (w = " " + Date.prototype.toUTCString.call(r)), E(r) && (w = " " + h(r)), 0 !== a.length || A && 0 != r.length ? n < 0 ? m(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), u = A ? function (e, t, r, n, i) {
          for (var o = [], a = 0, s = t.length; a < s; ++a) {
            T(t, String(a)) ? o.push(d(e, t, r, n, String(a), !0)) : o.push("");
          }

          return i.forEach(function (i) {
            i.match(/^\d+$/) || o.push(d(e, t, r, n, i, !0));
          }), o;
        }(e, r, n, s, a) : a.map(function (t) {
          return d(e, r, n, s, t, A);
        }), e.seen.pop(), function (e, t, r) {
          if (e.reduce(function (e, t) {
            return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0) > 60) return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
          return r[0] + t + " " + e.join(", ") + " " + r[1];
        }(u, w, x)) : x[0] + w + x[1];
      }

      function h(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }

      function d(e, t, r, n, i, o) {
        var a, s, f;

        if ((f = Object.getOwnPropertyDescriptor(t, i) || {
          value: t[i]
        }).get ? s = f.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : f.set && (s = e.stylize("[Setter]", "special")), T(n, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(f.value) < 0 ? (s = b(r) ? c(e, f.value, null) : c(e, f.value, r - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map(function (e) {
          return "  " + e;
        }).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) {
          return "   " + e;
        }).join("\n")) : s = e.stylize("[Circular]", "special")), v(a)) {
          if (o && i.match(/^\d+$/)) return s;
          (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"));
        }

        return a + ": " + s;
      }

      function l(e) {
        return Array.isArray(e);
      }

      function p(e) {
        return "boolean" == typeof e;
      }

      function b(e) {
        return null === e;
      }

      function y(e) {
        return "number" == typeof e;
      }

      function g(e) {
        return "string" == typeof e;
      }

      function v(e) {
        return void 0 === e;
      }

      function m(e) {
        return w(e) && "[object RegExp]" === A(e);
      }

      function w(e) {
        return "object" == typeof e && null !== e;
      }

      function _(e) {
        return w(e) && "[object Date]" === A(e);
      }

      function E(e) {
        return w(e) && ("[object Error]" === A(e) || e instanceof Error);
      }

      function S(e) {
        return "function" == typeof e;
      }

      function A(e) {
        return Object.prototype.toString.call(e);
      }

      function x(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }

      t.debuglog = function (r) {
        if (v(o) && (o = e.env.NODE_DEBUG || ""), r = r.toUpperCase(), !a[r]) if (new RegExp("\\b" + r + "\\b", "i").test(o)) {
          var n = e.pid;

          a[r] = function () {
            var e = t.format.apply(t, arguments);
            console.error("%s %d: %s", r, n, e);
          };
        } else a[r] = function () {};
        return a[r];
      }, t.inspect = s, s.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
      }, s.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      }, t.isArray = l, t.isBoolean = p, t.isNull = b, t.isNullOrUndefined = function (e) {
        return null == e;
      }, t.isNumber = y, t.isString = g, t.isSymbol = function (e) {
        return "symbol" == typeof e;
      }, t.isUndefined = v, t.isRegExp = m, t.isObject = w, t.isDate = _, t.isError = E, t.isFunction = S, t.isPrimitive = function (e) {
        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
      }, t.isBuffer = r(110);
      var k = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function M() {
        var e = new Date(),
            t = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(":");
        return [e.getDate(), k[e.getMonth()], t].join(" ");
      }

      function T(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      t.log = function () {
        console.log("%s - %s", M(), t.format.apply(t, arguments));
      }, t.inherits = r(111), t._extend = function (e, t) {
        if (!t || !w(t)) return e;

        for (var r = Object.keys(t), n = r.length; n--;) {
          e[r[n]] = t[r[n]];
        }

        return e;
      };
      var I = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

      function R(e, t) {
        if (!e) {
          var r = new Error("Promise was rejected with a falsy value");
          r.reason = e, e = r;
        }

        return t(e);
      }

      t.promisify = function (e) {
        if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');

        if (I && e[I]) {
          var t;
          if ("function" != typeof (t = e[I])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          return Object.defineProperty(t, I, {
            value: t,
            enumerable: !1,
            writable: !1,
            configurable: !0
          }), t;
        }

        function t() {
          for (var t, r, n = new Promise(function (e, n) {
            t = e, r = n;
          }), i = [], o = 0; o < arguments.length; o++) {
            i.push(arguments[o]);
          }

          i.push(function (e, n) {
            e ? r(e) : t(n);
          });

          try {
            e.apply(this, i);
          } catch (e) {
            r(e);
          }

          return n;
        }

        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), I && Object.defineProperty(t, I, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), Object.defineProperties(t, n(e));
      }, t.promisify.custom = I, t.callbackify = function (t) {
        if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

        function r() {
          for (var r = [], n = 0; n < arguments.length; n++) {
            r.push(arguments[n]);
          }

          var i = r.pop();
          if ("function" != typeof i) throw new TypeError("The last argument must be of type Function");

          var o = this,
              a = function a() {
            return i.apply(o, arguments);
          };

          t.apply(this, r).then(function (t) {
            e.nextTick(a, null, t);
          }, function (t) {
            e.nextTick(R, t, a);
          });
        }

        return Object.setPrototypeOf(r, Object.getPrototypeOf(t)), Object.defineProperties(r, n(t)), r;
      };
    }).call(this, r(3));
  }, function (e, t, r) {
    "use strict";

    var n = r(24),
        i = Object.keys || function (e) {
      var t = [];

      for (var r in e) {
        t.push(r);
      }

      return t;
    };

    e.exports = h;
    var o = Object.create(r(19));
    o.inherits = r(0);
    var a = r(57),
        s = r(32);
    o.inherits(h, a);

    for (var f = i(s.prototype), u = 0; u < f.length; u++) {
      var c = f[u];
      h.prototype[c] || (h.prototype[c] = s.prototype[c]);
    }

    function h(e) {
      if (!(this instanceof h)) return new h(e);
      a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", d);
    }

    function d() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(l, this);
    }

    function l(e) {
      e.end();
    }

    Object.defineProperty(h.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    }), Object.defineProperty(h.prototype, "destroyed", {
      get: function get() {
        return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set(e) {
        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
      }
    }), h.prototype._destroy = function (e, t) {
      this.push(null), this.end(), n.nextTick(t, e);
    };
  }, function (e, t) {
    function r(e, t) {
      if (!e) throw new Error(t || "Assertion failed");
    }

    e.exports = r, r.equal = function (e, t, r) {
      if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t);
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isAsync = void 0;
    var n,
        i = r(203),
        o = (n = i) && n.__esModule ? n : {
      default: n
    };
    var a = "function" == typeof Symbol;

    function s(e) {
      return a && "AsyncFunction" === e[Symbol.toStringTag];
    }

    t.default = function (e) {
      return s(e) ? (0, o.default)(e) : e;
    }, t.isAsync = s;
  }, function (e, t, r) {
    "use strict";

    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    },
        i = r(112),
        o = r(131),
        a = r(78),
        s = r(79),
        f = r(4),
        u = r(34),
        c = r(2).Buffer;
    Object.assign(t, r(174)), t.MAX_INTEGER = new f("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new f("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.SHA3_NULL_S = t.KECCAK256_NULL_S, t.KECCAK256_NULL = c.from(t.KECCAK256_NULL_S, "hex"), t.SHA3_NULL = t.KECCAK256_NULL, t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.SHA3_RLP_ARRAY_S = t.KECCAK256_RLP_ARRAY_S, t.KECCAK256_RLP_ARRAY = c.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.SHA3_RLP_ARRAY = t.KECCAK256_RLP_ARRAY, t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.SHA3_RLP_S = t.KECCAK256_RLP_S, t.KECCAK256_RLP = c.from(t.KECCAK256_RLP_S, "hex"), t.SHA3_RLP = t.KECCAK256_RLP, t.BN = f, t.rlp = s, t.secp256k1 = o, t.zeros = function (e) {
      return c.allocUnsafe(e).fill(0);
    }, t.zeroAddress = function () {
      var e = t.zeros(20);
      return t.bufferToHex(e);
    }, t.setLengthLeft = t.setLength = function (e, r, n) {
      var i = t.zeros(r);
      return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r);
    }, t.setLengthRight = function (e, r) {
      return t.setLength(e, r, !0);
    }, t.unpad = t.stripZeros = function (e) {
      for (var r = (e = t.stripHexPrefix(e))[0]; e.length > 0 && "0" === r.toString();) {
        r = (e = e.slice(1))[0];
      }

      return e;
    }, t.toBuffer = function (e) {
      if (!c.isBuffer(e)) if (Array.isArray(e)) e = c.from(e);else if ("string" == typeof e) e = t.isHexString(e) ? c.from(t.padToEven(t.stripHexPrefix(e)), "hex") : c.from(e);else if ("number" == typeof e) e = t.intToBuffer(e);else if (null == e) e = c.allocUnsafe(0);else if (f.isBN(e)) e = e.toArrayLike(c);else {
        if (!e.toArray) throw new Error("invalid type");
        e = c.from(e.toArray());
      }
      return e;
    }, t.bufferToInt = function (e) {
      return new f(t.toBuffer(e)).toNumber();
    }, t.bufferToHex = function (e) {
      return "0x" + (e = t.toBuffer(e)).toString("hex");
    }, t.fromSigned = function (e) {
      return new f(e).fromTwos(256);
    }, t.toUnsigned = function (e) {
      return c.from(e.toTwos(256).toArray());
    }, t.keccak = function (e, r) {
      return e = t.toBuffer(e), r || (r = 256), i("keccak" + r).update(e).digest();
    }, t.keccak256 = function (e) {
      return t.keccak(e);
    }, t.sha3 = t.keccak, t.sha256 = function (e) {
      return e = t.toBuffer(e), u("sha256").update(e).digest();
    }, t.ripemd160 = function (e, r) {
      e = t.toBuffer(e);
      var n = u("rmd160").update(e).digest();
      return !0 === r ? t.setLength(n, 32) : n;
    }, t.rlphash = function (e) {
      return t.keccak(s.encode(e));
    }, t.isValidPrivate = function (e) {
      return o.privateKeyVerify(e);
    }, t.isValidPublic = function (e, t) {
      return 64 === e.length ? o.publicKeyVerify(c.concat([c.from([4]), e])) : !!t && o.publicKeyVerify(e);
    }, t.pubToAddress = t.publicToAddress = function (e, r) {
      return e = t.toBuffer(e), r && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)), a(64 === e.length), t.keccak(e).slice(-20);
    };

    var h = t.privateToPublic = function (e) {
      return e = t.toBuffer(e), o.publicKeyCreate(e, !1).slice(1);
    };

    t.importPublic = function (e) {
      return 64 !== (e = t.toBuffer(e)).length && (e = o.publicKeyConvert(e, !1).slice(1)), e;
    }, t.ecsign = function (e, t) {
      var r = o.sign(e, t),
          n = {};
      return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n;
    }, t.hashPersonalMessage = function (e) {
      var r = t.toBuffer("Ethereum Signed Message:\n" + e.length.toString());
      return t.keccak(c.concat([r, e]));
    }, t.ecrecover = function (e, r, n, i) {
      var a = c.concat([t.setLength(n, 32), t.setLength(i, 32)], 64),
          s = r - 27;
      if (0 !== s && 1 !== s) throw new Error("Invalid signature v value");
      var f = o.recover(e, a, s);
      return o.publicKeyConvert(f, !1).slice(1);
    }, t.toRpcSig = function (e, r, n) {
      if (27 !== e && 28 !== e) throw new Error("Invalid recovery id");
      return t.bufferToHex(c.concat([t.setLengthLeft(r, 32), t.setLengthLeft(n, 32), t.toBuffer(e - 27)]));
    }, t.fromRpcSig = function (e) {
      if (65 !== (e = t.toBuffer(e)).length) throw new Error("Invalid signature length");
      var r = e[64];
      return r < 27 && (r += 27), {
        v: r,
        r: e.slice(0, 32),
        s: e.slice(32, 64)
      };
    }, t.privateToAddress = function (e) {
      return t.publicToAddress(h(e));
    }, t.isValidAddress = function (e) {
      return /^0x[0-9a-fA-F]{40}$/.test(e);
    }, t.isZeroAddress = function (e) {
      return t.zeroAddress() === t.addHexPrefix(e);
    }, t.toChecksumAddress = function (e) {
      e = t.stripHexPrefix(e).toLowerCase();

      for (var r = t.keccak(e).toString("hex"), n = "0x", i = 0; i < e.length; i++) {
        parseInt(r[i], 16) >= 8 ? n += e[i].toUpperCase() : n += e[i];
      }

      return n;
    }, t.isValidChecksumAddress = function (e) {
      return t.isValidAddress(e) && t.toChecksumAddress(e) === e;
    }, t.generateAddress = function (e, r) {
      return e = t.toBuffer(e), r = (r = new f(r)).isZero() ? null : c.from(r.toArray()), t.rlphash([e, r]).slice(-20);
    }, t.isPrecompiled = function (e) {
      var r = t.unpad(e);
      return 1 === r.length && r[0] >= 1 && r[0] <= 8;
    }, t.addHexPrefix = function (e) {
      return "string" != typeof e || t.isHexPrefixed(e) ? e : "0x" + e;
    }, t.isValidSignature = function (e, t, r, n) {
      var i = new f("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
          o = new f("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
      return 32 === t.length && 32 === r.length && (27 === e || 28 === e) && (t = new f(t), r = new f(r), !(t.isZero() || t.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new f(r).cmp(i)));
    }, t.baToJSON = function (e) {
      if (c.isBuffer(e)) return "0x" + e.toString("hex");

      if (e instanceof Array) {
        for (var r = [], n = 0; n < e.length; n++) {
          r.push(t.baToJSON(e[n]));
        }

        return r;
      }
    }, t.defineProperties = function (e, r, i) {
      if (e.raw = [], e._fields = [], e.toJSON = function (r) {
        if (r) {
          var n = {};
          return e._fields.forEach(function (t) {
            n[t] = "0x" + e[t].toString("hex");
          }), n;
        }

        return t.baToJSON(this.raw);
      }, e.serialize = function () {
        return s.encode(e.raw);
      }, r.forEach(function (r, n) {
        function i() {
          return e.raw[n];
        }

        function o(i) {
          "00" !== (i = t.toBuffer(i)).toString("hex") || r.allowZero || (i = c.allocUnsafe(0)), r.allowLess && r.length ? (i = t.stripZeros(i), a(r.length >= i.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === i.length || !r.length || a(r.length === i.length, "The field " + r.name + " must have byte length of " + r.length), e.raw[n] = i;
        }

        e._fields.push(r.name), Object.defineProperty(e, r.name, {
          enumerable: !0,
          configurable: !0,
          get: i,
          set: o
        }), r.default && (e[r.name] = r.default), r.alias && Object.defineProperty(e, r.alias, {
          enumerable: !1,
          configurable: !0,
          set: o,
          get: i
        });
      }), i) if ("string" == typeof i && (i = c.from(t.stripHexPrefix(i), "hex")), c.isBuffer(i) && (i = s.decode(i)), Array.isArray(i)) {
        if (i.length > e._fields.length) throw new Error("wrong number of fields in data");
        i.forEach(function (r, n) {
          e[e._fields[n]] = t.toBuffer(r);
        });
      } else {
        if ("object" !== (void 0 === i ? "undefined" : n(i))) throw new Error("invalid data");
        var o = Object.keys(i);
        r.forEach(function (t) {
          -1 !== o.indexOf(t.name) && (e[t.name] = i[t.name]), -1 !== o.indexOf(t.alias) && (e[t.alias] = i[t.alias]);
        });
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = {};

    function i(e, t, r) {
      r || (r = Error);

      var i = function (e) {
        var r, n;

        function i(r, n, i) {
          return e.call(this, function (e, r, n) {
            return "string" == typeof t ? t : t(e, r, n);
          }(r, n, i)) || this;
        }

        return n = e, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, i;
      }(r);

      i.prototype.name = r.name, i.prototype.code = e, n[e] = i;
    }

    function o(e, t) {
      if (Array.isArray(e)) {
        var r = e.length;
        return e = e.map(function (e) {
          return String(e);
        }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
      }

      return "of ".concat(t, " ").concat(String(e));
    }

    i("ERR_INVALID_OPT_VALUE", function (e, t) {
      return 'The value "' + t + '" is invalid for option "' + e + '"';
    }, TypeError), i("ERR_INVALID_ARG_TYPE", function (e, t, r) {
      var n, i, a, s;
      if ("string" == typeof t && (i = "not ", t.substr(!a || a < 0 ? 0 : +a, i.length) === i) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function (e, t, r) {
        return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
      }(e, " argument")) s = "The ".concat(e, " ").concat(n, " ").concat(o(t, "type"));else {
        var f = function (e, t, r) {
          return "number" != typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r);
        }(e, ".") ? "property" : "argument";
        s = 'The "'.concat(e, '" ').concat(f, " ").concat(n, " ").concat(o(t, "type"));
      }
      return s += ". Received type ".concat(typeof r);
    }, TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
      return "The " + e + " method is not implemented";
    }), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", function (e) {
      return "Cannot call " + e + " after a stream was destroyed";
    }), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", function (e) {
      return "Unknown encoding: " + e;
    }, TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.codes = n;
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      var n = Object.keys || function (e) {
        var t = [];

        for (var r in e) {
          t.push(r);
        }

        return t;
      };

      e.exports = u;
      var i = r(64),
          o = r(68);
      r(0)(u, i);

      for (var a = n(o.prototype), s = 0; s < a.length; s++) {
        var f = a[s];
        u.prototype[f] || (u.prototype[f] = o.prototype[f]);
      }

      function u(e) {
        if (!(this instanceof u)) return new u(e);
        i.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", c)));
      }

      function c() {
        this._writableState.ended || t.nextTick(h, this);
      }

      function h(e) {
        e.end();
      }

      Object.defineProperty(u.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      }), Object.defineProperty(u.prototype, "writableBuffer", {
        enumerable: !1,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      }), Object.defineProperty(u.prototype, "writableLength", {
        enumerable: !1,
        get: function get() {
          return this._writableState.length;
        }
      }), Object.defineProperty(u.prototype, "destroyed", {
        enumerable: !1,
        get: function get() {
          return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function set(e) {
          void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
        }
      });
    }).call(this, r(3));
  }, function (e, t, r) {
    var n = r(2).Buffer;

    function i(e, t) {
      this._block = n.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0;
    }

    i.prototype.update = function (e, t) {
      "string" == typeof e && (t = t || "utf8", e = n.from(e, t));

      for (var r = this._block, i = this._blockSize, o = e.length, a = this._len, s = 0; s < o;) {
        for (var f = a % i, u = Math.min(o - s, i - f), c = 0; c < u; c++) {
          r[f + c] = e[s + c];
        }

        s += u, (a += u) % i == 0 && this._update(r);
      }

      return this._len += o, this;
    }, i.prototype.digest = function (e) {
      var t = this._len % this._blockSize;
      this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
      var r = 8 * this._len;
      if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);else {
        var n = (4294967295 & r) >>> 0,
            i = (r - n) / 4294967296;
        this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4);
      }

      this._update(this._block);

      var o = this._hash();

      return e ? o.toString(e) : o;
    }, i.prototype._update = function () {
      throw new Error("_update must be implemented by subclass");
    }, e.exports = i;
  }, function (e, t, r) {
    e.exports = i;
    var n = r(9).EventEmitter;

    function i() {
      n.call(this);
    }

    r(0)(i, n), i.Readable = r(30), i.Writable = r(124), i.Duplex = r(125), i.Transform = r(126), i.PassThrough = r(127), i.Stream = i, i.prototype.pipe = function (e, t) {
      var r = this;

      function i(t) {
        e.writable && !1 === e.write(t) && r.pause && r.pause();
      }

      function o() {
        r.readable && r.resume && r.resume();
      }

      r.on("data", i), e.on("drain", o), e._isStdio || t && !1 === t.end || (r.on("end", s), r.on("close", f));
      var a = !1;

      function s() {
        a || (a = !0, e.end());
      }

      function f() {
        a || (a = !0, "function" == typeof e.destroy && e.destroy());
      }

      function u(e) {
        if (c(), 0 === n.listenerCount(this, "error")) throw e;
      }

      function c() {
        r.removeListener("data", i), e.removeListener("drain", o), r.removeListener("end", s), r.removeListener("close", f), r.removeListener("error", u), e.removeListener("error", u), r.removeListener("end", c), r.removeListener("close", c), e.removeListener("close", c);
      }

      return r.on("error", u), e.on("error", u), r.on("end", c), r.on("close", c), e.on("close", c), e.emit("pipe", r), e;
    };
  }, function (e, t, r) {
    (function (e) {
      function r(e) {
        return Object.prototype.toString.call(e);
      }

      t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e);
      }, t.isBoolean = function (e) {
        return "boolean" == typeof e;
      }, t.isNull = function (e) {
        return null === e;
      }, t.isNullOrUndefined = function (e) {
        return null == e;
      }, t.isNumber = function (e) {
        return "number" == typeof e;
      }, t.isString = function (e) {
        return "string" == typeof e;
      }, t.isSymbol = function (e) {
        return "symbol" == typeof e;
      }, t.isUndefined = function (e) {
        return void 0 === e;
      }, t.isRegExp = function (e) {
        return "[object RegExp]" === r(e);
      }, t.isObject = function (e) {
        return "object" == typeof e && null !== e;
      }, t.isDate = function (e) {
        return "[object Date]" === r(e);
      }, t.isError = function (e) {
        return "[object Error]" === r(e) || e instanceof Error;
      }, t.isFunction = function (e) {
        return "function" == typeof e;
      }, t.isPrimitive = function (e) {
        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
      }, t.isBuffer = e.isBuffer;
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    "use strict";

    var n = r(2).Buffer,
        i = n.isEncoding || function (e) {
      switch ((e = "" + e) && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return !0;

        default:
          return !1;
      }
    };

    function o(e) {
      var t;

      switch (this.encoding = function (e) {
        var t = function (e) {
          if (!e) return "utf8";

          for (var t;;) {
            switch (e) {
              case "utf8":
              case "utf-8":
                return "utf8";

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return "utf16le";

              case "latin1":
              case "binary":
                return "latin1";

              case "base64":
              case "ascii":
              case "hex":
                return e;

              default:
                if (t) return;
                e = ("" + e).toLowerCase(), t = !0;
            }
          }
        }(e);

        if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
        return t || e;
      }(e), this.encoding) {
        case "utf16le":
          this.text = f, this.end = u, t = 4;
          break;

        case "utf8":
          this.fillLast = s, t = 4;
          break;

        case "base64":
          this.text = c, this.end = h, t = 3;
          break;

        default:
          return this.write = d, void (this.end = l);
      }

      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t);
    }

    function a(e) {
      return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
    }

    function s(e) {
      var t = this.lastTotal - this.lastNeed,
          r = function (e, t, r) {
        if (128 != (192 & t[0])) return e.lastNeed = 0, "�";

        if (e.lastNeed > 1 && t.length > 1) {
          if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
          if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�";
        }
      }(this, e);

      return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length));
    }

    function f(e, t) {
      if ((e.length - t) % 2 == 0) {
        var r = e.toString("utf16le", t);

        if (r) {
          var n = r.charCodeAt(r.length - 1);
          if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
        }

        return r;
      }

      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
    }

    function u(e) {
      var t = e && e.length ? this.write(e) : "";

      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }

      return t;
    }

    function c(e, t) {
      var r = (e.length - t) % 3;
      return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
    }

    function h(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
    }

    function d(e) {
      return e.toString(this.encoding);
    }

    function l(e) {
      return e && e.length ? this.write(e) : "";
    }

    t.StringDecoder = o, o.prototype.write = function (e) {
      if (0 === e.length) return "";
      var t, r;

      if (this.lastNeed) {
        if (void 0 === (t = this.fillLast(e))) return "";
        r = this.lastNeed, this.lastNeed = 0;
      } else r = 0;

      return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
    }, o.prototype.end = function (e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + "�" : t;
    }, o.prototype.text = function (e, t) {
      var r = function (e, t, r) {
        var n = t.length - 1;
        if (n < r) return 0;
        var i = a(t[n]);
        if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
        if (--n < r || -2 === i) return 0;
        if ((i = a(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
        if (--n < r || -2 === i) return 0;
        if ((i = a(t[n])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
        return 0;
      }(this, e, t);

      if (!this.lastNeed) return e.toString("utf8", t);
      this.lastTotal = r;
      var n = e.length - (r - this.lastNeed);
      return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
    }, o.prototype.fillLast = function (e) {
      if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(8),
        i = r(12);

    function o() {
      this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
    }

    t.BlockHash = o, o.prototype.update = function (e, t) {
      if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
        var r = (e = this.pending).length % this._delta8;
        this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);

        for (var i = 0; i < e.length; i += this._delta32) {
          this._update(e, i, i + this._delta32);
        }
      }

      return this;
    }, o.prototype.digest = function (e) {
      return this.update(this._pad()), i(null === this.pending), this._digest(e);
    }, o.prototype._pad = function () {
      var e = this.pendingTotal,
          t = this._delta8,
          r = t - (e + this.padLength) % t,
          n = new Array(r + this.padLength);
      n[0] = 128;

      for (var i = 1; i < r; i++) {
        n[i] = 0;
      }

      if (e <<= 3, "big" === this.endian) {
        for (var o = 8; o < this.padLength; o++) {
          n[i++] = 0;
        }

        n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e;
      } else for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) {
        n[i++] = 0;
      }

      return n;
    };
  }, function (e, t) {
    e.exports = function () {};
  }, function (e, t) {
    function r(e) {
      return e.sort(function (e, t) {
        return "latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : n(e) - n(t);
      });
    }

    function n(e) {
      return null == e ? e : Number.parseInt(e, 16);
    }

    function i(e) {
      if (null == e) return e;
      var t = e.toString(16);
      return t.length % 2 && (t = "0" + t), "0x" + t;
    }

    function o() {
      return Math.floor(16 * Math.random()).toString(16);
    }

    e.exports = {
      minBlockRef: function minBlockRef() {
        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }

        return r(e)[0];
      },
      maxBlockRef: function maxBlockRef() {
        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }

        var t = r(e);
        return t[t.length - 1];
      },
      sortBlockRefs: r,
      bnToHex: function bnToHex(e) {
        return "0x" + e.toString(16);
      },
      blockRefIsNumber: function blockRefIsNumber(e) {
        return e && !["earliest", "latest", "pending"].includes(e);
      },
      hexToInt: n,
      incrementHexInt: function incrementHexInt(e) {
        if (null == e) return e;
        return i(n(e) + 1);
      },
      intToHex: i,
      unsafeRandomBytes: function unsafeRandomBytes(e) {
        var t = "0x";

        for (var _r = 0; _r < e; _r++) {
          t += o(), t += o();
        }

        return t;
      }
    };
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      void 0 === t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
        nextTick: function nextTick(e, r, n, i) {
          if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
          var o,
              a,
              s = arguments.length;

          switch (s) {
            case 0:
            case 1:
              return t.nextTick(e);

            case 2:
              return t.nextTick(function () {
                e.call(null, r);
              });

            case 3:
              return t.nextTick(function () {
                e.call(null, r, n);
              });

            case 4:
              return t.nextTick(function () {
                e.call(null, r, n, i);
              });

            default:
              for (o = new Array(s - 1), a = 0; a < o.length;) {
                o[a++] = arguments[a];
              }

              return t.nextTick(function () {
                e.apply(null, o);
              });
          }
        }
      } : e.exports = t;
    }).call(this, r(3));
  }, function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function get() {
          return e.l;
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function get() {
          return e.i;
        }
      }), e.webpackPolyfill = 1), e;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(4),
        i = r(6),
        o = i.getNAF,
        a = i.getJSF,
        s = i.assert;

    function f(e, t) {
      this.type = e, this.p = new n(t.p, 16), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = t.n && new n(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
      var r = this.n && this.p.div(this.n);
      !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
    }

    function u(e, t) {
      this.curve = e, this.type = t, this.precomputed = null;
    }

    e.exports = f, f.prototype.point = function () {
      throw new Error("Not implemented");
    }, f.prototype.validate = function () {
      throw new Error("Not implemented");
    }, f.prototype._fixedNafMul = function (e, t) {
      s(e.precomputed);

      var r = e._getDoubles(),
          n = o(t, 1, this._bitLength),
          i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);

      i /= 3;

      for (var a = [], f = 0; f < n.length; f += r.step) {
        var u = 0;

        for (t = f + r.step - 1; t >= f; t--) {
          u = (u << 1) + n[t];
        }

        a.push(u);
      }

      for (var c = this.jpoint(null, null, null), h = this.jpoint(null, null, null), d = i; d > 0; d--) {
        for (f = 0; f < a.length; f++) {
          (u = a[f]) === d ? h = h.mixedAdd(r.points[f]) : u === -d && (h = h.mixedAdd(r.points[f].neg()));
        }

        c = c.add(h);
      }

      return c.toP();
    }, f.prototype._wnafMul = function (e, t) {
      var r = 4,
          n = e._getNAFPoints(r);

      r = n.wnd;

      for (var i = n.points, a = o(t, r, this._bitLength), f = this.jpoint(null, null, null), u = a.length - 1; u >= 0; u--) {
        for (t = 0; u >= 0 && 0 === a[u]; u--) {
          t++;
        }

        if (u >= 0 && t++, f = f.dblp(t), u < 0) break;
        var c = a[u];
        s(0 !== c), f = "affine" === e.type ? c > 0 ? f.mixedAdd(i[c - 1 >> 1]) : f.mixedAdd(i[-c - 1 >> 1].neg()) : c > 0 ? f.add(i[c - 1 >> 1]) : f.add(i[-c - 1 >> 1].neg());
      }

      return "affine" === e.type ? f.toP() : f;
    }, f.prototype._wnafMulAdd = function (e, t, r, n, i) {
      for (var s = this._wnafT1, f = this._wnafT2, u = this._wnafT3, c = 0, h = 0; h < n; h++) {
        var d = (x = t[h])._getNAFPoints(e);

        s[h] = d.wnd, f[h] = d.points;
      }

      for (h = n - 1; h >= 1; h -= 2) {
        var l = h - 1,
            p = h;

        if (1 === s[l] && 1 === s[p]) {
          var b = [t[l], null, null, t[p]];
          0 === t[l].y.cmp(t[p].y) ? (b[1] = t[l].add(t[p]), b[2] = t[l].toJ().mixedAdd(t[p].neg())) : 0 === t[l].y.cmp(t[p].y.redNeg()) ? (b[1] = t[l].toJ().mixedAdd(t[p]), b[2] = t[l].add(t[p].neg())) : (b[1] = t[l].toJ().mixedAdd(t[p]), b[2] = t[l].toJ().mixedAdd(t[p].neg()));
          var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              g = a(r[l], r[p]);
          c = Math.max(g[0].length, c), u[l] = new Array(c), u[p] = new Array(c);

          for (var v = 0; v < c; v++) {
            var m = 0 | g[0][v],
                w = 0 | g[1][v];
            u[l][v] = y[3 * (m + 1) + (w + 1)], u[p][v] = 0, f[l] = b;
          }
        } else u[l] = o(r[l], s[l], this._bitLength), u[p] = o(r[p], s[p], this._bitLength), c = Math.max(u[l].length, c), c = Math.max(u[p].length, c);
      }

      var _ = this.jpoint(null, null, null),
          E = this._wnafT4;

      for (h = c; h >= 0; h--) {
        for (var S = 0; h >= 0;) {
          var A = !0;

          for (v = 0; v < n; v++) {
            E[v] = 0 | u[v][h], 0 !== E[v] && (A = !1);
          }

          if (!A) break;
          S++, h--;
        }

        if (h >= 0 && S++, _ = _.dblp(S), h < 0) break;

        for (v = 0; v < n; v++) {
          var x,
              k = E[v];
          0 !== k && (k > 0 ? x = f[v][k - 1 >> 1] : k < 0 && (x = f[v][-k - 1 >> 1].neg()), _ = "affine" === x.type ? _.mixedAdd(x) : _.add(x));
        }
      }

      for (h = 0; h < n; h++) {
        f[h] = null;
      }

      return i ? _ : _.toP();
    }, f.BasePoint = u, u.prototype.eq = function () {
      throw new Error("Not implemented");
    }, u.prototype.validate = function () {
      return this.curve.validate(this);
    }, f.prototype.decodePoint = function (e, t) {
      e = i.toArray(e, t);
      var r = this.p.byteLength();
      if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
      if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
      throw new Error("Unknown point format");
    }, u.prototype.encodeCompressed = function (e) {
      return this.encode(e, !0);
    }, u.prototype._encode = function (e) {
      var t = this.curve.p.byteLength(),
          r = this.getX().toArray("be", t);
      return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t));
    }, u.prototype.encode = function (e, t) {
      return i.encode(this._encode(t), e);
    }, u.prototype.precompute = function (e) {
      if (this.precomputed) return this;
      var t = {
        doubles: null,
        naf: null,
        beta: null
      };
      return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this;
    }, u.prototype._hasDoubles = function (e) {
      if (!this.precomputed) return !1;
      var t = this.precomputed.doubles;
      return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
    }, u.prototype._getDoubles = function (e, t) {
      if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;

      for (var r = [this], n = this, i = 0; i < t; i += e) {
        for (var o = 0; o < e; o++) {
          n = n.dbl();
        }

        r.push(n);
      }

      return {
        step: e,
        points: r
      };
    }, u.prototype._getNAFPoints = function (e) {
      if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;

      for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) {
        t[i] = t[i - 1].add(n);
      }

      return {
        wnd: e,
        points: t
      };
    }, u.prototype._getBeta = function () {
      return null;
    }, u.prototype.dblp = function (e) {
      for (var t = this, r = 0; r < e; r++) {
        t = t.dbl();
      }

      return t;
    };
  }, function (e, t, r) {
    var n = r(181),
        i = r(87);

    e.exports = function (e) {
      return null != e && i(e.length) && !n(e);
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e, t) {
      t |= 0;

      for (var r = Math.max(e.length - t, 0), n = Array(r), i = 0; i < r; i++) {
        n[i] = e[t + i];
      }

      return n;
    }, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    var n = r(46);

    function i() {}

    e.exports = i, i.prototype.setEngine = function (e) {
      var t = this;
      t.engine || (t.engine = e, e.on("block", function (e) {
        t.currentBlock = e;
      }), e.on("start", function () {
        t.start();
      }), e.on("stop", function () {
        t.stop();
      }));
    }, i.prototype.handleRequest = function (e, t, r) {
      throw new Error("Subproviders should override `handleRequest`.");
    }, i.prototype.emitPayload = function (e, t) {
      this.engine.sendAsync(n(e), t);
    }, i.prototype.stop = function () {}, i.prototype.start = function () {};
  }, function (e, t, r) {
    (t = e.exports = r(57)).Stream = t, t.Readable = t, t.Writable = r(32), t.Duplex = r(11), t.Transform = r(61), t.PassThrough = r(123);
  }, function (e, t, r) {
    var n = r(1),
        i = n.Buffer;

    function o(e, t) {
      for (var r in e) {
        t[r] = e[r];
      }
    }

    function a(e, t, r) {
      return i(e, t, r);
    }

    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), o(i, a), a.from = function (e, t, r) {
      if ("number" == typeof e) throw new TypeError("Argument must not be a number");
      return i(e, t, r);
    }, a.alloc = function (e, t, r) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      var n = i(e);
      return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n;
    }, a.allocUnsafe = function (e) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      return i(e);
    }, a.allocUnsafeSlow = function (e) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      return n.SlowBuffer(e);
    };
  }, function (e, t, r) {
    "use strict";

    (function (t, n, i) {
      var o = r(24);

      function a(e) {
        var t = this;
        this.next = null, this.entry = null, this.finish = function () {
          !function (e, t, r) {
            var n = e.entry;
            e.entry = null;

            for (; n;) {
              var i = n.callback;
              t.pendingcb--, i(r), n = n.next;
            }

            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e;
          }(t, e);
        };
      }

      e.exports = v;
      var s,
          f = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? n : o.nextTick;
      v.WritableState = g;
      var u = Object.create(r(19));
      u.inherits = r(0);

      var c = {
        deprecate: r(60)
      },
          h = r(58),
          d = r(31).Buffer,
          l = i.Uint8Array || function () {};

      var p,
          b = r(59);

      function y() {}

      function g(e, t) {
        s = s || r(11), e = e || {};
        var n = t instanceof s;
        this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var i = e.highWaterMark,
            u = e.writableHighWaterMark,
            c = this.objectMode ? 16 : 16384;
        this.highWaterMark = i || 0 === i ? i : n && (u || 0 === u) ? u : c, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var h = !1 === e.decodeStrings;
        this.decodeStrings = !h, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
          !function (e, t) {
            var r = e._writableState,
                n = r.sync,
                i = r.writecb;
            if (function (e) {
              e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
            }(r), t) !function (e, t, r, n, i) {
              --t.pendingcb, r ? (o.nextTick(i, n), o.nextTick(A, e, t), e._writableState.errorEmitted = !0, e.emit("error", n)) : (i(n), e._writableState.errorEmitted = !0, e.emit("error", n), A(e, t));
            }(e, r, n, t, i);else {
              var a = E(r);
              a || r.corked || r.bufferProcessing || !r.bufferedRequest || _(e, r), n ? f(w, e, r, a, i) : w(e, r, a, i);
            }
          }(t, e);
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this);
      }

      function v(e) {
        if (s = s || r(11), !(p.call(v, this) || this instanceof s)) return new v(e);
        this._writableState = new g(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), h.call(this);
      }

      function m(e, t, r, n, i, o, a) {
        t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1;
      }

      function w(e, t, r, n) {
        r || function (e, t) {
          0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
        }(e, t), t.pendingcb--, n(), A(e, t);
      }

      function _(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;

        if (e._writev && r && r.next) {
          var n = t.bufferedRequestCount,
              i = new Array(n),
              o = t.corkedRequestsFree;
          o.entry = r;

          for (var s = 0, f = !0; r;) {
            i[s] = r, r.isBuf || (f = !1), r = r.next, s += 1;
          }

          i.allBuffers = f, m(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0;
        } else {
          for (; r;) {
            var u = r.chunk,
                c = r.encoding,
                h = r.callback;
            if (m(e, t, !1, t.objectMode ? 1 : u.length, u, c, h), r = r.next, t.bufferedRequestCount--, t.writing) break;
          }

          null === r && (t.lastBufferedRequest = null);
        }

        t.bufferedRequest = r, t.bufferProcessing = !1;
      }

      function E(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
      }

      function S(e, t) {
        e._final(function (r) {
          t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), A(e, t);
        });
      }

      function A(e, t) {
        var r = E(t);
        return r && (!function (e, t) {
          t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, o.nextTick(S, e, t)) : (t.prefinished = !0, e.emit("prefinish")));
        }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), r;
      }

      u.inherits(v, h), g.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e;) {
          t.push(e), e = e.next;
        }

        return t;
      }, function () {
        try {
          Object.defineProperty(g.prototype, "buffer", {
            get: c.deprecate(function () {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          });
        } catch (e) {}
      }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(v, Symbol.hasInstance, {
        value: function value(e) {
          return !!p.call(this, e) || this === v && e && e._writableState instanceof g;
        }
      })) : p = function p(e) {
        return e instanceof this;
      }, v.prototype.pipe = function () {
        this.emit("error", new Error("Cannot pipe, not readable"));
      }, v.prototype.write = function (e, t, r) {
        var n,
            i = this._writableState,
            a = !1,
            s = !i.objectMode && (n = e, d.isBuffer(n) || n instanceof l);
        return s && !d.isBuffer(e) && (e = function (e) {
          return d.from(e);
        }(e)), "function" == typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof r && (r = y), i.ended ? function (e, t) {
          var r = new Error("write after end");
          e.emit("error", r), o.nextTick(t, r);
        }(this, r) : (s || function (e, t, r, n) {
          var i = !0,
              a = !1;
          return null === r ? a = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), o.nextTick(n, a), i = !1), i;
        }(this, i, e, r)) && (i.pendingcb++, a = function (e, t, r, n, i, o) {
          if (!r) {
            var a = function (e, t, r) {
              e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = d.from(t, r));
              return t;
            }(t, n, i);

            n !== a && (r = !0, i = "buffer", n = a);
          }

          var s = t.objectMode ? 1 : n.length;
          t.length += s;
          var f = t.length < t.highWaterMark;
          f || (t.needDrain = !0);

          if (t.writing || t.corked) {
            var u = t.lastBufferedRequest;
            t.lastBufferedRequest = {
              chunk: n,
              encoding: i,
              isBuf: r,
              callback: o,
              next: null
            }, u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
          } else m(e, t, !1, s, n, i, o);

          return f;
        }(this, i, s, e, t, r)), a;
      }, v.prototype.cork = function () {
        this._writableState.corked++;
      }, v.prototype.uncork = function () {
        var e = this._writableState;
        e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || _(this, e));
      }, v.prototype.setDefaultEncoding = function (e) {
        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
        return this._writableState.defaultEncoding = e, this;
      }, Object.defineProperty(v.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      }), v.prototype._write = function (e, t, r) {
        r(new Error("_write() is not implemented"));
      }, v.prototype._writev = null, v.prototype.end = function (e, t, r) {
        var n = this._writableState;
        "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function (e, t, r) {
          t.ending = !0, A(e, t), r && (t.finished ? o.nextTick(r) : e.once("finish", r));
          t.ended = !0, e.writable = !1;
        }(this, n, r);
      }, Object.defineProperty(v.prototype, "destroyed", {
        get: function get() {
          return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function set(e) {
          this._writableState && (this._writableState.destroyed = e);
        }
      }), v.prototype.destroy = b.destroy, v.prototype._undestroy = b.undestroy, v.prototype._destroy = function (e, t) {
        this.end(), t(e);
      };
    }).call(this, r(3), r(33).setImmediate, r(5));
  }, function (e, t, r) {
    (function (e) {
      var n = void 0 !== e && e || "undefined" != typeof self && self || window,
          i = Function.prototype.apply;

      function o(e, t) {
        this._id = e, this._clearFn = t;
      }

      t.setTimeout = function () {
        return new o(i.call(setTimeout, n, arguments), clearTimeout);
      }, t.setInterval = function () {
        return new o(i.call(setInterval, n, arguments), clearInterval);
      }, t.clearTimeout = t.clearInterval = function (e) {
        e && e.close();
      }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
        this._clearFn.call(n, this._id);
      }, t.enroll = function (e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
      }, t.unenroll = function (e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
      }, t._unrefActive = t.active = function (e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function () {
          e._onTimeout && e._onTimeout();
        }, t));
      }, r(122), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
    }).call(this, r(5));
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(137),
        o = r(146),
        a = r(147),
        s = r(152);

    function f(e) {
      s.call(this, "digest"), this._hash = e;
    }

    n(f, s), f.prototype._update = function (e) {
      this._hash.update(e);
    }, f.prototype._final = function () {
      return this._hash.digest();
    }, e.exports = function (e) {
      return "md5" === (e = e.toLowerCase()) ? new i() : "rmd160" === e || "ripemd160" === e ? new o() : new f(a(e));
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(15).codes.ERR_STREAM_PREMATURE_CLOSE;

    function i() {}

    e.exports = function e(t, r, o) {
      if ("function" == typeof r) return e(t, null, r);
      r || (r = {}), o = function (e) {
        var t = !1;
        return function () {
          if (!t) {
            t = !0;

            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) {
              n[i] = arguments[i];
            }

            e.apply(this, n);
          }
        };
      }(o || i);

      var a = r.readable || !1 !== r.readable && t.readable,
          s = r.writable || !1 !== r.writable && t.writable,
          f = function f() {
        t.writable || c();
      },
          u = t._writableState && t._writableState.finished,
          c = function c() {
        s = !1, u = !0, a || o.call(t);
      },
          h = t._readableState && t._readableState.endEmitted,
          d = function d() {
        a = !1, h = !0, s || o.call(t);
      },
          l = function l(e) {
        o.call(t, e);
      },
          p = function p() {
        var e;
        return a && !h ? (t._readableState && t._readableState.ended || (e = new n()), o.call(t, e)) : s && !u ? (t._writableState && t._writableState.ended || (e = new n()), o.call(t, e)) : void 0;
      },
          b = function b() {
        t.req.on("finish", c);
      };

      return !function (e) {
        return e.setHeader && "function" == typeof e.abort;
      }(t) ? s && !t._writableState && (t.on("end", f), t.on("close", f)) : (t.on("complete", c), t.on("abort", p), t.req ? b() : t.on("request", b)), t.on("end", d), t.on("finish", c), !1 !== r.error && t.on("error", l), t.on("close", p), function () {
        t.removeListener("complete", c), t.removeListener("abort", p), t.removeListener("request", b), t.req && t.req.removeListener("finish", c), t.removeListener("end", f), t.removeListener("close", f), t.removeListener("finish", c), t.removeListener("end", d), t.removeListener("error", l), t.removeListener("close", p);
      };
    };
  }, function (e, t, r) {
    "use strict";

    var n = t;
    n.version = r(154).version, n.utils = r(6), n.rand = r(73), n.curve = r(74), n.curves = r(37), n.ec = r(166), n.eddsa = r(170);
  }, function (e, t, r) {
    "use strict";

    var n,
        i = t,
        o = r(38),
        a = r(74),
        s = r(6).assert;

    function f(e) {
      "short" === e.type ? this.curve = new a.short(e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }

    function u(e, t) {
      Object.defineProperty(i, e, {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          var r = new f(t);
          return Object.defineProperty(i, e, {
            configurable: !0,
            enumerable: !0,
            value: r
          }), r;
        }
      });
    }

    i.PresetCurve = f, u("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: o.sha256,
      gRed: !1,
      g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
    }), u("p224", {
      type: "short",
      prime: "p224",
      p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
      b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
      n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
      hash: o.sha256,
      gRed: !1,
      g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
    }), u("p256", {
      type: "short",
      prime: null,
      p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
      a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
      b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
      n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
      hash: o.sha256,
      gRed: !1,
      g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
    }), u("p384", {
      type: "short",
      prime: null,
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
      a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
      b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
      n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
      hash: o.sha384,
      gRed: !1,
      g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
    }), u("p521", {
      type: "short",
      prime: null,
      p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
      a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
      b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
      n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
      hash: o.sha512,
      gRed: !1,
      g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
    }), u("curve25519", {
      type: "mont",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "76d06",
      b: "1",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: o.sha256,
      gRed: !1,
      g: ["9"]
    }), u("ed25519", {
      type: "edwards",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "-1",
      c: "1",
      d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: o.sha256,
      gRed: !1,
      g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
    });

    try {
      n = r(165);
    } catch (e) {
      n = void 0;
    }

    u("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: o.sha256,
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [{
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      }, {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }],
      gRed: !1,
      g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
    });
  }, function (e, t, r) {
    var n = t;
    n.utils = r(8), n.common = r(21), n.sha = r(159), n.ripemd = r(163), n.hmac = r(164), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160;
  }, function (e, t, r) {
    "use strict";

    var n = function n(e, t) {
      return function () {
        var _this = this;

        var r = t.promiseModule,
            n = new Array(arguments.length);

        for (var _e2 = 0; _e2 < arguments.length; _e2++) {
          n[_e2] = arguments[_e2];
        }

        return new r(function (r, i) {
          t.errorFirst ? n.push(function (e, n) {
            if (t.multiArgs) {
              var _t = new Array(arguments.length - 1);

              for (var _e3 = 1; _e3 < arguments.length; _e3++) {
                _t[_e3 - 1] = arguments[_e3];
              }

              e ? (_t.unshift(e), i(_t)) : r(_t);
            } else e ? i(e) : r(n);
          }) : n.push(function (e) {
            if (t.multiArgs) {
              var _e4 = new Array(arguments.length - 1);

              for (var _t2 = 0; _t2 < arguments.length; _t2++) {
                _e4[_t2] = arguments[_t2];
              }

              r(_e4);
            } else r(e);
          }), e.apply(_this, n);
        });
      };
    };

    e.exports = function (e, t) {
      t = Object.assign({
        exclude: [/.+(Sync|Stream)$/],
        errorFirst: !0,
        promiseModule: Promise
      }, t);

      var r = function r(e) {
        var r = function r(t) {
          return "string" == typeof t ? e === t : t.test(e);
        };

        return t.include ? t.include.some(r) : !t.exclude.some(r);
      };

      var i;
      i = "function" == typeof e ? function () {
        return t.excludeMain ? e.apply(this, arguments) : n(e, t).apply(this, arguments);
      } : Object.create(Object.getPrototypeOf(e));

      for (var o in e) {
        var a = e[o];
        i[o] = "function" == typeof a && r(o) ? n(a, t) : a;
      }

      return i;
    };
  }, function (e, t) {
    e.exports = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var n = arguments[t];

        for (var i in n) {
          r.call(n, i) && (e[i] = n[i]);
        }
      }

      return e;
    };

    var r = Object.prototype.hasOwnProperty;
  }, function (e, t, r) {
    var n = r(10),
        i = r(9);
    var o = "object" == typeof Reflect ? Reflect : null,
        a = o && "function" == typeof o.apply ? o.apply : function (e, t, r) {
      return Function.prototype.apply.call(e, t, r);
    };

    function s() {
      i.call(this);
    }

    function f(e, t, r) {
      try {
        a(e, t, r);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }

    function u(e, t) {
      for (var r = new Array(t), n = 0; n < t; ++n) {
        r[n] = e[n];
      }

      return r;
    }

    e.exports = s, n.inherits(s, i), s.prototype.emit = function (e) {
      for (var t = [], r = 1; r < arguments.length; r++) {
        t.push(arguments[r]);
      }

      var n = "error" === e,
          i = this._events;
      if (void 0 !== i) n = n && void 0 === i.error;else if (!n) return !1;

      if (n) {
        var o;
        if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
        var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
        throw a.context = o, a;
      }

      var s = i[e];
      if (void 0 === s) return !1;
      if ("function" == typeof s) f(s, this, t);else {
        var c = s.length,
            h = u(s, c);

        for (r = 0; r < c; ++r) {
          f(h[r], this, t);
        }
      }
      return !0;
    };
  }, function (e, t, r) {
    var n = r(83),
        i = r(182),
        o = r(183),
        a = n ? n.toStringTag : void 0;

    e.exports = function (e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      return function () {
        if (null !== e) {
          var t = e;
          e = null, t.apply(this, arguments);
        }
      };
    }, e.exports = t.default;
  }, function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e;
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      return function () {
        if (null === e) throw new Error("Callback was already called.");
        var t = e;
        e = null, t.apply(this, arguments);
      };
    }, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    var n = r(214),
        i = r(40);

    e.exports = function (e) {
      return i({
        id: n(),
        jsonrpc: "2.0",
        params: []
      }, e);
    };
  }, function (e, t, r) {
    "use strict";

    var n = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }

      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }();

    var i = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);

        var r = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));

        if (!e) throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");
        return r._constructorFn = e, r;
      }

      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e), n(t, [{
        key: "setEngine",
        value: function value(e) {
          if (this.middleware) throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");

          var t = e._blockTracker,
              r = this._constructorFn({
            engine: e,
            provider: e,
            blockTracker: t
          });

          if (!r) throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");
          if ("function" != typeof r) throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");
          this.middleware = r;
        }
      }, {
        key: "handleRequest",
        value: function value(e, t, r) {
          var n = {
            id: e.id
          };
          this.middleware(e, n, function (e) {
            t(function (t, r, i) {
              t ? (delete n.result, n.error = {
                message: t.message || t
              }) : n.result = r, e ? e(i) : i();
            });
          }, function (e) {
            if (e) return r(e);
            r(null, n.result);
          });
        }
      }]), t;
    }(r(29));

    e.exports = i;
  }, function (e, t) {
    e.exports = function (e) {
      return function (t, r, n, i) {
        var o;
        var a = new Promise(function (e) {
          o = e;
        });
        var s, f;
        e(t, r, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  f = !0;
                  n(function (e) {
                    s = e, o();
                  });
                  _context.next = 4;
                  return a;

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!f) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 3;
                  return a;

                case 3:
                  s(null);
                  _context2.next = 7;
                  break;

                case 6:
                  i(null);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))).catch(function (e) {
          s ? s(e) : i(e);
        });
      };
    };
  }, function (e, t, r) {
    var n = r(41);

    e.exports = /*#__PURE__*/function (_n) {
      "use strict";

      _inherits(_class, _n);

      var _super = _createSuper(_class);

      function _class() {
        var _this2;

        _classCallCheck(this, _class);

        _this2 = _super.call(this), _this2.updates = [];
        return _this2;
      }

      _createClass(_class, [{
        key: "initialize",
        value: function () {
          var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
            return _regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function initialize() {
            return _initialize.apply(this, arguments);
          }

          return initialize;
        }()
      }, {
        key: "update",
        value: function () {
          var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    throw new Error("BaseFilter - no update method specified");

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function update() {
            return _update.apply(this, arguments);
          }

          return update;
        }()
      }, {
        key: "addResults",
        value: function addResults(e) {
          var _this3 = this;

          this.updates = this.updates.concat(e), e.forEach(function (e) {
            return _this3.emit("update", e);
          });
        }
      }, {
        key: "addInitialResults",
        value: function addInitialResults(e) {}
      }, {
        key: "getChangesAndClear",
        value: function getChangesAndClear() {
          var e = this.updates;
          return this.updates = [], e;
        }
      }]);

      return _class;
    }(n);
  }, function (e, t) {
    function r(e) {
      return null == e ? e : Number.parseInt(e, 16);
    }

    function n(e) {
      if (null == e) return e;
      return "0x" + e.toString(16);
    }

    e.exports = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(_ref3) {
        var e, t, i, o, a, s;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                e = _ref3.provider, t = _ref3.fromBlock, i = _ref3.toBlock;
                t || (t = i);
                o = r(t), a = r(i), s = Array(a - o + 1).fill().map(function (e, t) {
                  return o + t;
                }).map(n);
                _context5.next = 5;
                return Promise.all(s.map(function (t) {
                  return function (e, t, r) {
                    return new Promise(function (n, i) {
                      e.sendAsync({
                        id: 1,
                        jsonrpc: "2.0",
                        method: t,
                        params: r
                      }, function (e, t) {
                        if (e) return i(e);
                        n(t.result);
                      });
                    });
                  }(e, "eth_getBlockByNumber", [t, !1]);
                }));

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }();
  }, function (e, t, r) {
    e.exports = r(257);
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      var n = r(7),
          i = r(260),
          o = {
        "Content-Type": "application/x-www-form-urlencoded"
      };

      function a(e, t) {
        !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
      }

      var s,
          f = {
        adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t) && (s = r(99)), s),
        transformRequest: [function (e, t) {
          return i(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
        }],
        transformResponse: [function (e) {
          if ("string" == typeof e) try {
            e = JSON.parse(e);
          } catch (e) {}
          return e;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function validateStatus(e) {
          return e >= 200 && e < 300;
        }
      };
      f.headers = {
        common: {
          Accept: "application/json, text/plain, */*"
        }
      }, n.forEach(["delete", "get", "head"], function (e) {
        f.headers[e] = {};
      }), n.forEach(["post", "put", "patch"], function (e) {
        f.headers[e] = n.merge(o);
      }), e.exports = f;
    }).call(this, r(3));
  }, function (e, t) {
    e.exports = {
      dispatchNodeURL: "https://dispatch.pokt.network",
      dispatchPath: "/v1/dispatch",
      reportPath: "/v1/report",
      relayPath: "/v1/relay/"
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(47),
        i = r(215),
        o = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, function (t) {
          var r = t.blockTracker;
          return i(Object.assign({
            blockTracker: r
          }, e));
        }));
      }

      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e), t;
    }(n);

    e.exports = o;
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      var n = r(10).inherits,
          i = r(252),
          o = r(14),
          a = r(29),
          s = r(92).blockTagForPayload;

      function f(e) {
        this.nonceCache = {};
      }

      e.exports = f, n(f, a), f.prototype.handleRequest = function (e, r, n) {
        var a = this;

        switch (e.method) {
          case "eth_getTransactionCount":
            var f = s(e),
                u = e.params[0].toLowerCase(),
                c = a.nonceCache[u];
            return void ("pending" === f ? c ? n(null, c) : r(function (e, t, r) {
              if (e) return r();
              void 0 === a.nonceCache[u] && (a.nonceCache[u] = t), r();
            }) : r());

          case "eth_sendRawTransaction":
            return void r(function (r, n, s) {
              if (r) return s();
              var f = e.params[0],
                  u = (o.stripHexPrefix(f), t.from(o.stripHexPrefix(f), "hex"), new i(t.from(o.stripHexPrefix(f), "hex"))),
                  c = "0x" + u.getSenderAddress().toString("hex").toLowerCase(),
                  h = o.bufferToInt(u.nonce),
                  d = (++h).toString(16);
              d.length % 2 && (d = "0" + d), d = "0x" + d, a.nonceCache[c] = d, s();
            });

          case "evm_revert":
            return a.nonceCache = {}, void r();

          default:
            return void r();
        }
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    var n = r(97),
        i = n.Wallet,
        o = n.Relay,
        a = r(277);
    e.exports = {
      Pocket: a,
      Wallet: i,
      Relay: o
    };
  }, function (e, t, r) {
    "use strict";

    (function (t, n) {
      var i = r(24);
      e.exports = m;
      var o,
          a = r(118);
      m.ReadableState = v;
      r(9).EventEmitter;

      var s = function s(e, t) {
        return e.listeners(t).length;
      },
          f = r(58),
          u = r(31).Buffer,
          c = t.Uint8Array || function () {};

      var h = Object.create(r(19));
      h.inherits = r(0);
      var d = r(119),
          l = void 0;
      l = d && d.debuglog ? d.debuglog("stream") : function () {};
      var p,
          b = r(120),
          y = r(59);
      h.inherits(m, f);
      var g = ["error", "close", "destroy", "pause", "resume"];

      function v(e, t) {
        e = e || {};
        var n = t instanceof (o = o || r(11));
        this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var i = e.highWaterMark,
            a = e.readableHighWaterMark,
            s = this.objectMode ? 16 : 16384;
        this.highWaterMark = i || 0 === i ? i : n && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new b(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (p || (p = r(20).StringDecoder), this.decoder = new p(e.encoding), this.encoding = e.encoding);
      }

      function m(e) {
        if (o = o || r(11), !(this instanceof m)) return new m(e);
        this._readableState = new v(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), f.call(this);
      }

      function w(e, t, r, n, i) {
        var o,
            a = e._readableState;
        null === t ? (a.reading = !1, function (e, t) {
          if (t.ended) return;

          if (t.decoder) {
            var r = t.decoder.end();
            r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
          }

          t.ended = !0, S(e);
        }(e, a)) : (i || (o = function (e, t) {
          var r;
          n = t, u.isBuffer(n) || n instanceof c || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
          var n;
          return r;
        }(a, t)), o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function (e) {
          return u.from(e);
        }(t)), n ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : _(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? _(e, a, t, !1) : x(e, a)) : _(e, a, t, !1))) : n || (a.reading = !1));
        return function (e) {
          return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
        }(a);
      }

      function _(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && S(e)), x(e, t);
      }

      Object.defineProperty(m.prototype, "destroyed", {
        get: function get() {
          return void 0 !== this._readableState && this._readableState.destroyed;
        },
        set: function set(e) {
          this._readableState && (this._readableState.destroyed = e);
        }
      }), m.prototype.destroy = y.destroy, m.prototype._undestroy = y.undestroy, m.prototype._destroy = function (e, t) {
        this.push(null), t(e);
      }, m.prototype.push = function (e, t) {
        var r,
            n = this._readableState;
        return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = u.from(e, t), t = ""), r = !0), w(this, e, t, !1, r);
      }, m.prototype.unshift = function (e) {
        return w(this, e, null, !0, !1);
      }, m.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
      }, m.prototype.setEncoding = function (e) {
        return p || (p = r(20).StringDecoder), this._readableState.decoder = new p(e), this._readableState.encoding = e, this;
      };

      function E(e, t) {
        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
          return e >= 8388608 ? e = 8388608 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
      }

      function S(e) {
        var t = e._readableState;
        t.needReadable = !1, t.emittedReadable || (l("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(A, e) : A(e));
      }

      function A(e) {
        l("emit readable"), e.emit("readable"), I(e);
      }

      function x(e, t) {
        t.readingMore || (t.readingMore = !0, i.nextTick(k, e, t));
      }

      function k(e, t) {
        for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (l("maybeReadMore read 0"), e.read(0), r !== t.length);) {
          r = t.length;
        }

        t.readingMore = !1;
      }

      function M(e) {
        l("readable nexttick read 0"), e.read(0);
      }

      function T(e, t) {
        t.reading || (l("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), I(e), t.flowing && !t.reading && e.read(0);
      }

      function I(e) {
        var t = e._readableState;

        for (l("flow", t.flowing); t.flowing && null !== e.read();) {
          ;
        }
      }

      function R(e, t) {
        return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function (e, t, r) {
          var n;
          e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function (e, t) {
            var r = t.head,
                n = 1,
                i = r.data;
            e -= i.length;

            for (; r = r.next;) {
              var o = r.data,
                  a = e > o.length ? o.length : e;

              if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
                a === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
                break;
              }

              ++n;
            }

            return t.length -= n, i;
          }(e, t) : function (e, t) {
            var r = u.allocUnsafe(e),
                n = t.head,
                i = 1;
            n.data.copy(r), e -= n.data.length;

            for (; n = n.next;) {
              var o = n.data,
                  a = e > o.length ? o.length : e;

              if (o.copy(r, r.length - e, 0, a), 0 === (e -= a)) {
                a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
                break;
              }

              ++i;
            }

            return t.length -= i, r;
          }(e, t);
          return n;
        }(e, t.buffer, t.decoder), r);
        var r;
      }

      function P(e) {
        var t = e._readableState;
        if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || (t.ended = !0, i.nextTick(L, t, e));
      }

      function L(e, t) {
        e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"));
      }

      function B(e, t) {
        for (var r = 0, n = e.length; r < n; r++) {
          if (e[r] === t) return r;
        }

        return -1;
      }

      m.prototype.read = function (e) {
        l("read", e), e = parseInt(e, 10);
        var t = this._readableState,
            r = e;
        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return l("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? P(this) : S(this), null;
        if (0 === (e = E(e, t)) && t.ended) return 0 === t.length && P(this), null;
        var n,
            i = t.needReadable;
        return l("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && l("length less than watermark", i = !0), t.ended || t.reading ? l("reading or ended", i = !1) : i && (l("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = E(r, t))), null === (n = e > 0 ? R(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && P(this)), null !== n && this.emit("data", n), n;
      }, m.prototype._read = function (e) {
        this.emit("error", new Error("_read() is not implemented"));
      }, m.prototype.pipe = function (e, t) {
        var r = this,
            o = this._readableState;

        switch (o.pipesCount) {
          case 0:
            o.pipes = e;
            break;

          case 1:
            o.pipes = [o.pipes, e];
            break;

          default:
            o.pipes.push(e);
        }

        o.pipesCount += 1, l("pipe count=%d opts=%j", o.pipesCount, t);
        var f = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? c : m;

        function u(t, n) {
          l("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, l("cleanup"), e.removeListener("close", g), e.removeListener("finish", v), e.removeListener("drain", h), e.removeListener("error", y), e.removeListener("unpipe", u), r.removeListener("end", c), r.removeListener("end", m), r.removeListener("data", b), d = !0, !o.awaitDrain || e._writableState && !e._writableState.needDrain || h());
        }

        function c() {
          l("onend"), e.end();
        }

        o.endEmitted ? i.nextTick(f) : r.once("end", f), e.on("unpipe", u);

        var h = function (e) {
          return function () {
            var t = e._readableState;
            l("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, I(e));
          };
        }(r);

        e.on("drain", h);
        var d = !1;
        var p = !1;

        function b(t) {
          l("ondata"), p = !1, !1 !== e.write(t) || p || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== B(o.pipes, e)) && !d && (l("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, p = !0), r.pause());
        }

        function y(t) {
          l("onerror", t), m(), e.removeListener("error", y), 0 === s(e, "error") && e.emit("error", t);
        }

        function g() {
          e.removeListener("finish", v), m();
        }

        function v() {
          l("onfinish"), e.removeListener("close", g), m();
        }

        function m() {
          l("unpipe"), r.unpipe(e);
        }

        return r.on("data", b), function (e, t, r) {
          if ("function" == typeof e.prependListener) return e.prependListener(t, r);
          e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r);
        }(e, "error", y), e.once("close", g), e.once("finish", v), e.emit("pipe", r), o.flowing || (l("pipe resume"), r.resume()), e;
      }, m.prototype.unpipe = function (e) {
        var t = this._readableState,
            r = {
          hasUnpiped: !1
        };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;

        if (!e) {
          var n = t.pipes,
              i = t.pipesCount;
          t.pipes = null, t.pipesCount = 0, t.flowing = !1;

          for (var o = 0; o < i; o++) {
            n[o].emit("unpipe", this, r);
          }

          return this;
        }

        var a = B(t.pipes, e);
        return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this;
      }, m.prototype.on = function (e, t) {
        var r = f.prototype.on.call(this, e, t);
        if ("data" === e) !1 !== this._readableState.flowing && this.resume();else if ("readable" === e) {
          var n = this._readableState;
          n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && S(this) : i.nextTick(M, this));
        }
        return r;
      }, m.prototype.addListener = m.prototype.on, m.prototype.resume = function () {
        var e = this._readableState;
        return e.flowing || (l("resume"), e.flowing = !0, function (e, t) {
          t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(T, e, t));
        }(this, e)), this;
      }, m.prototype.pause = function () {
        return l("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (l("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
      }, m.prototype.wrap = function (e) {
        var t = this,
            r = this._readableState,
            n = !1;

        for (var i in e.on("end", function () {
          if (l("wrapped end"), r.decoder && !r.ended) {
            var e = r.decoder.end();
            e && e.length && t.push(e);
          }

          t.push(null);
        }), e.on("data", function (i) {
          (l("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()));
        }), e) {
          void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
            return function () {
              return e[t].apply(e, arguments);
            };
          }(i));
        }

        for (var o = 0; o < g.length; o++) {
          e.on(g[o], this.emit.bind(this, g[o]));
        }

        return this._read = function (t) {
          l("wrapped _read", t), n && (n = !1, e.resume());
        }, this;
      }, Object.defineProperty(m.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function get() {
          return this._readableState.highWaterMark;
        }
      }), m._fromList = R;
    }).call(this, r(5), r(3));
  }, function (e, t, r) {
    e.exports = r(9).EventEmitter;
  }, function (e, t, r) {
    "use strict";

    var n = r(24);

    function i(e, t) {
      e.emit("error", t);
    }

    e.exports = {
      destroy: function destroy(e, t) {
        var r = this,
            o = this._readableState && this._readableState.destroyed,
            a = this._writableState && this._writableState.destroyed;
        return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
          !t && e ? (n.nextTick(i, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e);
        }), this);
      },
      undestroy: function undestroy() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
      }
    };
  }, function (e, t, r) {
    (function (t) {
      function r(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (e) {
          return !1;
        }

        var r = t.localStorage[e];
        return null != r && "true" === String(r).toLowerCase();
      }

      e.exports = function (e, t) {
        if (r("noDeprecation")) return e;
        var n = !1;
        return function () {
          if (!n) {
            if (r("throwDeprecation")) throw new Error(t);
            r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0;
          }

          return e.apply(this, arguments);
        };
      };
    }).call(this, r(5));
  }, function (e, t, r) {
    "use strict";

    e.exports = a;
    var n = r(11),
        i = Object.create(r(19));

    function o(e, t) {
      var r = this._transformState;
      r.transforming = !1;
      var n = r.writecb;
      if (!n) return this.emit("error", new Error("write callback called multiple times"));
      r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
      var i = this._readableState;
      i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }

    function a(e) {
      if (!(this instanceof a)) return new a(e);
      n.call(this, e), this._transformState = {
        afterTransform: o.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", s);
    }

    function s() {
      var e = this;
      "function" == typeof this._flush ? this._flush(function (t, r) {
        f(e, t, r);
      }) : f(this, null, null);
    }

    function f(e, t, r) {
      if (t) return e.emit("error", t);
      if (null != r && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
      if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }

    i.inherits = r(0), i.inherits(a, n), a.prototype.push = function (e, t) {
      return this._transformState.needTransform = !1, n.prototype.push.call(this, e, t);
    }, a.prototype._transform = function (e, t, r) {
      throw new Error("_transform() is not implemented");
    }, a.prototype._write = function (e, t, r) {
      var n = this._transformState;

      if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    }, a.prototype._read = function (e) {
      var t = this._transformState;
      null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
    }, a.prototype._destroy = function (e, t) {
      var r = this;

      n.prototype._destroy.call(this, e, function (e) {
        t(e), r.emit("close");
      });
    };
  }, function (e) {
    e.exports = {
      COMPRESSED_TYPE_INVALID: "compressed should be a boolean",
      EC_PRIVATE_KEY_TYPE_INVALID: "private key should be a Buffer",
      EC_PRIVATE_KEY_LENGTH_INVALID: "private key length is invalid",
      EC_PRIVATE_KEY_RANGE_INVALID: "private key range is invalid",
      EC_PRIVATE_KEY_TWEAK_ADD_FAIL: "tweak out of range or resulting private key is invalid",
      EC_PRIVATE_KEY_TWEAK_MUL_FAIL: "tweak out of range",
      EC_PRIVATE_KEY_EXPORT_DER_FAIL: "couldn't export to DER format",
      EC_PRIVATE_KEY_IMPORT_DER_FAIL: "couldn't import from DER format",
      EC_PUBLIC_KEYS_TYPE_INVALID: "public keys should be an Array",
      EC_PUBLIC_KEYS_LENGTH_INVALID: "public keys Array should have at least 1 element",
      EC_PUBLIC_KEY_TYPE_INVALID: "public key should be a Buffer",
      EC_PUBLIC_KEY_LENGTH_INVALID: "public key length is invalid",
      EC_PUBLIC_KEY_PARSE_FAIL: "the public key could not be parsed or is invalid",
      EC_PUBLIC_KEY_CREATE_FAIL: "private was invalid, try again",
      EC_PUBLIC_KEY_TWEAK_ADD_FAIL: "tweak out of range or resulting public key is invalid",
      EC_PUBLIC_KEY_TWEAK_MUL_FAIL: "tweak out of range",
      EC_PUBLIC_KEY_COMBINE_FAIL: "the sum of the public keys is not valid",
      ECDH_FAIL: "scalar was invalid (zero or overflow)",
      ECDSA_SIGNATURE_TYPE_INVALID: "signature should be a Buffer",
      ECDSA_SIGNATURE_LENGTH_INVALID: "signature length is invalid",
      ECDSA_SIGNATURE_PARSE_FAIL: "couldn't parse signature",
      ECDSA_SIGNATURE_PARSE_DER_FAIL: "couldn't parse DER signature",
      ECDSA_SIGNATURE_SERIALIZE_DER_FAIL: "couldn't serialize signature to DER format",
      ECDSA_SIGN_FAIL: "nonce generation function failed or private key is invalid",
      ECDSA_RECOVER_FAIL: "couldn't recover public key from signature",
      MSG32_TYPE_INVALID: "message should be a Buffer",
      MSG32_LENGTH_INVALID: "message length is invalid",
      OPTIONS_TYPE_INVALID: "options should be an Object",
      OPTIONS_DATA_TYPE_INVALID: "options.data should be a Buffer",
      OPTIONS_DATA_LENGTH_INVALID: "options.data length is invalid",
      OPTIONS_NONCEFN_TYPE_INVALID: "options.noncefn should be a Function",
      RECOVERY_ID_TYPE_INVALID: "recovery should be a Number",
      RECOVERY_ID_VALUE_INVALID: "recovery should have value between -1 and 4",
      TWEAK_TYPE_INVALID: "tweak should be a Buffer",
      TWEAK_LENGTH_INVALID: "tweak length is invalid"
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2).Buffer,
        i = r(138).Transform;

    function o(e) {
      i.call(this), this._block = n.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1;
    }

    r(0)(o, i), o.prototype._transform = function (e, t, r) {
      var n = null;

      try {
        this.update(e, t);
      } catch (e) {
        n = e;
      }

      r(n);
    }, o.prototype._flush = function (e) {
      var t = null;

      try {
        this.push(this.digest());
      } catch (e) {
        t = e;
      }

      e(t);
    }, o.prototype.update = function (e, t) {
      if (function (e, t) {
        if (!n.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer");
      }(e, "Data"), this._finalized) throw new Error("Digest already called");
      n.isBuffer(e) || (e = n.from(e, t));

      for (var r = this._block, i = 0; this._blockOffset + e.length - i >= this._blockSize;) {
        for (var o = this._blockOffset; o < this._blockSize;) {
          r[o++] = e[i++];
        }

        this._update(), this._blockOffset = 0;
      }

      for (; i < e.length;) {
        r[this._blockOffset++] = e[i++];
      }

      for (var a = 0, s = 8 * e.length; s > 0; ++a) {
        this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
      }

      return this;
    }, o.prototype._update = function () {
      throw new Error("_update is not implemented");
    }, o.prototype.digest = function (e) {
      if (this._finalized) throw new Error("Digest already called");
      this._finalized = !0;

      var t = this._digest();

      void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;

      for (var r = 0; r < 4; ++r) {
        this._length[r] = 0;
      }

      return t;
    }, o.prototype._digest = function () {
      throw new Error("_digest is not implemented");
    }, e.exports = o;
  }, function (e, t, r) {
    "use strict";

    (function (t, n) {
      var i;
      e.exports = x, x.ReadableState = A;
      r(9).EventEmitter;

      var o = function o(e, t) {
        return e.listeners(t).length;
      },
          a = r(65),
          s = r(1).Buffer,
          f = t.Uint8Array || function () {};

      var u,
          c = r(139);
      u = c && c.debuglog ? c.debuglog("stream") : function () {};
      var h,
          d,
          l,
          p = r(140),
          b = r(66),
          y = r(67).getHighWaterMark,
          g = r(15).codes,
          v = g.ERR_INVALID_ARG_TYPE,
          m = g.ERR_STREAM_PUSH_AFTER_EOF,
          w = g.ERR_METHOD_NOT_IMPLEMENTED,
          _ = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      r(0)(x, a);
      var E = b.errorOrDestroy,
          S = ["error", "close", "destroy", "pause", "resume"];

      function A(e, t, n) {
        i = i || r(16), e = e || {}, "boolean" != typeof n && (n = t instanceof i), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = y(this, e, "readableHighWaterMark", n), this.buffer = new p(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (h || (h = r(20).StringDecoder), this.decoder = new h(e.encoding), this.encoding = e.encoding);
      }

      function x(e) {
        if (i = i || r(16), !(this instanceof x)) return new x(e);
        var t = this instanceof i;
        this._readableState = new A(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), a.call(this);
      }

      function k(e, t, r, n, i) {
        u("readableAddChunk", t);
        var o,
            a = e._readableState;
        if (null === t) a.reading = !1, function (e, t) {
          if (u("onEofChunk"), t.ended) return;

          if (t.decoder) {
            var r = t.decoder.end();
            r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
          }

          t.ended = !0, t.sync ? I(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, R(e)));
        }(e, a);else if (i || (o = function (e, t) {
          var r;
          n = t, s.isBuffer(n) || n instanceof f || "string" == typeof t || void 0 === t || e.objectMode || (r = new v("chunk", ["string", "Buffer", "Uint8Array"], t));
          var n;
          return r;
        }(a, t)), o) E(e, o);else if (a.objectMode || t && t.length > 0) {
          if ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === s.prototype || (t = function (e) {
            return s.from(e);
          }(t)), n) a.endEmitted ? E(e, new _()) : M(e, a, t, !0);else if (a.ended) E(e, new m());else {
            if (a.destroyed) return !1;
            a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? M(e, a, t, !1) : P(e, a)) : M(e, a, t, !1);
          }
        } else n || (a.reading = !1, P(e, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }

      function M(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && I(e)), P(e, t);
      }

      Object.defineProperty(x.prototype, "destroyed", {
        enumerable: !1,
        get: function get() {
          return void 0 !== this._readableState && this._readableState.destroyed;
        },
        set: function set(e) {
          this._readableState && (this._readableState.destroyed = e);
        }
      }), x.prototype.destroy = b.destroy, x.prototype._undestroy = b.undestroy, x.prototype._destroy = function (e, t) {
        t(e);
      }, x.prototype.push = function (e, t) {
        var r,
            n = this._readableState;
        return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = s.from(e, t), t = ""), r = !0), k(this, e, t, !1, r);
      }, x.prototype.unshift = function (e) {
        return k(this, e, null, !0, !1);
      }, x.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
      }, x.prototype.setEncoding = function (e) {
        h || (h = r(20).StringDecoder);
        var t = new h(e);
        this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;

        for (var n = this._readableState.buffer.head, i = ""; null !== n;) {
          i += t.write(n.data), n = n.next;
        }

        return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this;
      };

      function T(e, t) {
        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
          return e >= 1073741824 ? e = 1073741824 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
      }

      function I(e) {
        var t = e._readableState;
        u("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (u("emitReadable", t.flowing), t.emittedReadable = !0, n.nextTick(R, e));
      }

      function R(e) {
        var t = e._readableState;
        u("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, N(e);
      }

      function P(e, t) {
        t.readingMore || (t.readingMore = !0, n.nextTick(L, e, t));
      }

      function L(e, t) {
        for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
          var r = t.length;
          if (u("maybeReadMore read 0"), e.read(0), r === t.length) break;
        }

        t.readingMore = !1;
      }

      function B(e) {
        var t = e._readableState;
        t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume();
      }

      function C(e) {
        u("readable nexttick read 0"), e.read(0);
      }

      function O(e, t) {
        u("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), N(e), t.flowing && !t.reading && e.read(0);
      }

      function N(e) {
        var t = e._readableState;

        for (u("flow", t.flowing); t.flowing && null !== e.read();) {
          ;
        }
      }

      function j(e, t) {
        return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r);
        var r;
      }

      function D(e) {
        var t = e._readableState;
        u("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, n.nextTick(U, t, e));
      }

      function U(e, t) {
        if (u("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
          var r = t._writableState;
          (!r || r.autoDestroy && r.finished) && t.destroy();
        }
      }

      function z(e, t) {
        for (var r = 0, n = e.length; r < n; r++) {
          if (e[r] === t) return r;
        }

        return -1;
      }

      x.prototype.read = function (e) {
        u("read", e), e = parseInt(e, 10);
        var t = this._readableState,
            r = e;
        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return u("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? D(this) : I(this), null;
        if (0 === (e = T(e, t)) && t.ended) return 0 === t.length && D(this), null;
        var n,
            i = t.needReadable;
        return u("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && u("length less than watermark", i = !0), t.ended || t.reading ? u("reading or ended", i = !1) : i && (u("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = T(r, t))), null === (n = e > 0 ? j(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && D(this)), null !== n && this.emit("data", n), n;
      }, x.prototype._read = function (e) {
        E(this, new w("_read()"));
      }, x.prototype.pipe = function (e, t) {
        var r = this,
            i = this._readableState;

        switch (i.pipesCount) {
          case 0:
            i.pipes = e;
            break;

          case 1:
            i.pipes = [i.pipes, e];
            break;

          default:
            i.pipes.push(e);
        }

        i.pipesCount += 1, u("pipe count=%d opts=%j", i.pipesCount, t);
        var a = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? f : y;

        function s(t, n) {
          u("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, u("cleanup"), e.removeListener("close", p), e.removeListener("finish", b), e.removeListener("drain", c), e.removeListener("error", l), e.removeListener("unpipe", s), r.removeListener("end", f), r.removeListener("end", y), r.removeListener("data", d), h = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || c());
        }

        function f() {
          u("onend"), e.end();
        }

        i.endEmitted ? n.nextTick(a) : r.once("end", a), e.on("unpipe", s);

        var c = function (e) {
          return function () {
            var t = e._readableState;
            u("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, N(e));
          };
        }(r);

        e.on("drain", c);
        var h = !1;

        function d(t) {
          u("ondata");
          var n = e.write(t);
          u("dest.write", n), !1 === n && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== z(i.pipes, e)) && !h && (u("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause());
        }

        function l(t) {
          u("onerror", t), y(), e.removeListener("error", l), 0 === o(e, "error") && E(e, t);
        }

        function p() {
          e.removeListener("finish", b), y();
        }

        function b() {
          u("onfinish"), e.removeListener("close", p), y();
        }

        function y() {
          u("unpipe"), r.unpipe(e);
        }

        return r.on("data", d), function (e, t, r) {
          if ("function" == typeof e.prependListener) return e.prependListener(t, r);
          e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r);
        }(e, "error", l), e.once("close", p), e.once("finish", b), e.emit("pipe", r), i.flowing || (u("pipe resume"), r.resume()), e;
      }, x.prototype.unpipe = function (e) {
        var t = this._readableState,
            r = {
          hasUnpiped: !1
        };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;

        if (!e) {
          var n = t.pipes,
              i = t.pipesCount;
          t.pipes = null, t.pipesCount = 0, t.flowing = !1;

          for (var o = 0; o < i; o++) {
            n[o].emit("unpipe", this, {
              hasUnpiped: !1
            });
          }

          return this;
        }

        var a = z(t.pipes, e);
        return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this;
      }, x.prototype.on = function (e, t) {
        var r = a.prototype.on.call(this, e, t),
            i = this._readableState;
        return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, u("on readable", i.length, i.reading), i.length ? I(this) : i.reading || n.nextTick(C, this))), r;
      }, x.prototype.addListener = x.prototype.on, x.prototype.removeListener = function (e, t) {
        var r = a.prototype.removeListener.call(this, e, t);
        return "readable" === e && n.nextTick(B, this), r;
      }, x.prototype.removeAllListeners = function (e) {
        var t = a.prototype.removeAllListeners.apply(this, arguments);
        return "readable" !== e && void 0 !== e || n.nextTick(B, this), t;
      }, x.prototype.resume = function () {
        var e = this._readableState;
        return e.flowing || (u("resume"), e.flowing = !e.readableListening, function (e, t) {
          t.resumeScheduled || (t.resumeScheduled = !0, n.nextTick(O, e, t));
        }(this, e)), e.paused = !1, this;
      }, x.prototype.pause = function () {
        return u("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (u("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
      }, x.prototype.wrap = function (e) {
        var t = this,
            r = this._readableState,
            n = !1;

        for (var i in e.on("end", function () {
          if (u("wrapped end"), r.decoder && !r.ended) {
            var e = r.decoder.end();
            e && e.length && t.push(e);
          }

          t.push(null);
        }), e.on("data", function (i) {
          (u("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()));
        }), e) {
          void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
            return function () {
              return e[t].apply(e, arguments);
            };
          }(i));
        }

        for (var o = 0; o < S.length; o++) {
          e.on(S[o], this.emit.bind(this, S[o]));
        }

        return this._read = function (t) {
          u("wrapped _read", t), n && (n = !1, e.resume());
        }, this;
      }, "function" == typeof Symbol && (x.prototype[Symbol.asyncIterator] = function () {
        return void 0 === d && (d = r(142)), d(this);
      }), Object.defineProperty(x.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function get() {
          return this._readableState.highWaterMark;
        }
      }), Object.defineProperty(x.prototype, "readableBuffer", {
        enumerable: !1,
        get: function get() {
          return this._readableState && this._readableState.buffer;
        }
      }), Object.defineProperty(x.prototype, "readableFlowing", {
        enumerable: !1,
        get: function get() {
          return this._readableState.flowing;
        },
        set: function set(e) {
          this._readableState && (this._readableState.flowing = e);
        }
      }), x._fromList = j, Object.defineProperty(x.prototype, "readableLength", {
        enumerable: !1,
        get: function get() {
          return this._readableState.length;
        }
      }), "function" == typeof Symbol && (x.from = function (e, t) {
        return void 0 === l && (l = r(143)), l(x, e, t);
      });
    }).call(this, r(5), r(3));
  }, function (e, t, r) {
    e.exports = r(9).EventEmitter;
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      function r(e, t) {
        i(e, t), n(e);
      }

      function n(e) {
        e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
      }

      function i(e, t) {
        e.emit("error", t);
      }

      e.exports = {
        destroy: function destroy(e, o) {
          var a = this,
              s = this._readableState && this._readableState.destroyed,
              f = this._writableState && this._writableState.destroyed;
          return s || f ? (o ? o(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, t.nextTick(i, this, e)) : t.nextTick(i, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
            !o && e ? a._writableState ? a._writableState.errorEmitted ? t.nextTick(n, a) : (a._writableState.errorEmitted = !0, t.nextTick(r, a, e)) : t.nextTick(r, a, e) : o ? (t.nextTick(n, a), o(e)) : t.nextTick(n, a);
          }), this);
        },
        undestroy: function undestroy() {
          this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
        },
        errorOrDestroy: function errorOrDestroy(e, t) {
          var r = e._readableState,
              n = e._writableState;
          r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t);
        }
      };
    }).call(this, r(3));
  }, function (e, t, r) {
    "use strict";

    var n = r(15).codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
      getHighWaterMark: function getHighWaterMark(e, t, r, i) {
        var o = function (e, t, r) {
          return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null;
        }(t, i, r);

        if (null != o) {
          if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o);
          return Math.floor(o);
        }

        return e.objectMode ? 16 : 16384;
      }
    };
  }, function (e, t, r) {
    "use strict";

    (function (t, n) {
      function i(e) {
        var t = this;
        this.next = null, this.entry = null, this.finish = function () {
          !function (e, t, r) {
            var n = e.entry;
            e.entry = null;

            for (; n;) {
              var i = n.callback;
              t.pendingcb--, i(r), n = n.next;
            }

            t.corkedRequestsFree.next = e;
          }(t, e);
        };
      }

      var o;
      e.exports = x, x.WritableState = A;

      var a = {
        deprecate: r(60)
      },
          s = r(65),
          f = r(1).Buffer,
          u = t.Uint8Array || function () {};

      var c,
          h = r(66),
          d = r(67).getHighWaterMark,
          l = r(15).codes,
          p = l.ERR_INVALID_ARG_TYPE,
          b = l.ERR_METHOD_NOT_IMPLEMENTED,
          y = l.ERR_MULTIPLE_CALLBACK,
          g = l.ERR_STREAM_CANNOT_PIPE,
          v = l.ERR_STREAM_DESTROYED,
          m = l.ERR_STREAM_NULL_VALUES,
          w = l.ERR_STREAM_WRITE_AFTER_END,
          _ = l.ERR_UNKNOWN_ENCODING,
          E = h.errorOrDestroy;

      function S() {}

      function A(e, t, a) {
        o = o || r(16), e = e || {}, "boolean" != typeof a && (a = t instanceof o), this.objectMode = !!e.objectMode, a && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = d(this, e, "writableHighWaterMark", a), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var s = !1 === e.decodeStrings;
        this.decodeStrings = !s, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
          !function (e, t) {
            var r = e._writableState,
                i = r.sync,
                o = r.writecb;
            if ("function" != typeof o) throw new y();
            if (function (e) {
              e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
            }(r), t) !function (e, t, r, i, o) {
              --t.pendingcb, r ? (n.nextTick(o, i), n.nextTick(P, e, t), e._writableState.errorEmitted = !0, E(e, i)) : (o(i), e._writableState.errorEmitted = !0, E(e, i), P(e, t));
            }(e, r, i, t, o);else {
              var a = I(r) || e.destroyed;
              a || r.corked || r.bufferProcessing || !r.bufferedRequest || T(e, r), i ? n.nextTick(M, e, r, a, o) : M(e, r, a, o);
            }
          }(t, e);
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this);
      }

      function x(e) {
        var t = this instanceof (o = o || r(16));
        if (!t && !c.call(x, this)) return new x(e);
        this._writableState = new A(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), s.call(this);
      }

      function k(e, t, r, n, i, o, a) {
        t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new v("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1;
      }

      function M(e, t, r, n) {
        r || function (e, t) {
          0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
        }(e, t), t.pendingcb--, n(), P(e, t);
      }

      function T(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;

        if (e._writev && r && r.next) {
          var n = t.bufferedRequestCount,
              o = new Array(n),
              a = t.corkedRequestsFree;
          a.entry = r;

          for (var s = 0, f = !0; r;) {
            o[s] = r, r.isBuf || (f = !1), r = r.next, s += 1;
          }

          o.allBuffers = f, k(e, t, !0, t.length, o, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0;
        } else {
          for (; r;) {
            var u = r.chunk,
                c = r.encoding,
                h = r.callback;
            if (k(e, t, !1, t.objectMode ? 1 : u.length, u, c, h), r = r.next, t.bufferedRequestCount--, t.writing) break;
          }

          null === r && (t.lastBufferedRequest = null);
        }

        t.bufferedRequest = r, t.bufferProcessing = !1;
      }

      function I(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
      }

      function R(e, t) {
        e._final(function (r) {
          t.pendingcb--, r && E(e, r), t.prefinished = !0, e.emit("prefinish"), P(e, t);
        });
      }

      function P(e, t) {
        var r = I(t);

        if (r && (function (e, t) {
          t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, n.nextTick(R, e, t)));
        }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
          var i = e._readableState;
          (!i || i.autoDestroy && i.endEmitted) && e.destroy();
        }

        return r;
      }

      r(0)(x, s), A.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e;) {
          t.push(e), e = e.next;
        }

        return t;
      }, function () {
        try {
          Object.defineProperty(A.prototype, "buffer", {
            get: a.deprecate(function () {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          });
        } catch (e) {}
      }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance], Object.defineProperty(x, Symbol.hasInstance, {
        value: function value(e) {
          return !!c.call(this, e) || this === x && e && e._writableState instanceof A;
        }
      })) : c = function c(e) {
        return e instanceof this;
      }, x.prototype.pipe = function () {
        E(this, new g());
      }, x.prototype.write = function (e, t, r) {
        var i,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && (i = e, f.isBuffer(i) || i instanceof u);
        return s && !f.isBuffer(e) && (e = function (e) {
          return f.from(e);
        }(e)), "function" == typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = o.defaultEncoding), "function" != typeof r && (r = S), o.ending ? function (e, t) {
          var r = new w();
          E(e, r), n.nextTick(t, r);
        }(this, r) : (s || function (e, t, r, i) {
          var o;
          return null === r ? o = new m() : "string" == typeof r || t.objectMode || (o = new p("chunk", ["string", "Buffer"], r)), !o || (E(e, o), n.nextTick(i, o), !1);
        }(this, o, e, r)) && (o.pendingcb++, a = function (e, t, r, n, i, o) {
          if (!r) {
            var a = function (e, t, r) {
              e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = f.from(t, r));
              return t;
            }(t, n, i);

            n !== a && (r = !0, i = "buffer", n = a);
          }

          var s = t.objectMode ? 1 : n.length;
          t.length += s;
          var u = t.length < t.highWaterMark;
          u || (t.needDrain = !0);

          if (t.writing || t.corked) {
            var c = t.lastBufferedRequest;
            t.lastBufferedRequest = {
              chunk: n,
              encoding: i,
              isBuf: r,
              callback: o,
              next: null
            }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
          } else k(e, t, !1, s, n, i, o);

          return u;
        }(this, o, s, e, t, r)), a;
      }, x.prototype.cork = function () {
        this._writableState.corked++;
      }, x.prototype.uncork = function () {
        var e = this._writableState;
        e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || T(this, e));
      }, x.prototype.setDefaultEncoding = function (e) {
        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new _(e);
        return this._writableState.defaultEncoding = e, this;
      }, Object.defineProperty(x.prototype, "writableBuffer", {
        enumerable: !1,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      }), Object.defineProperty(x.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      }), x.prototype._write = function (e, t, r) {
        r(new b("_write()"));
      }, x.prototype._writev = null, x.prototype.end = function (e, t, r) {
        var i = this._writableState;
        return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || function (e, t, r) {
          t.ending = !0, P(e, t), r && (t.finished ? n.nextTick(r) : e.once("finish", r));
          t.ended = !0, e.writable = !1;
        }(this, i, r), this;
      }, Object.defineProperty(x.prototype, "writableLength", {
        enumerable: !1,
        get: function get() {
          return this._writableState.length;
        }
      }), Object.defineProperty(x.prototype, "destroyed", {
        enumerable: !1,
        get: function get() {
          return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function set(e) {
          this._writableState && (this._writableState.destroyed = e);
        }
      }), x.prototype.destroy = h.destroy, x.prototype._undestroy = h.undestroy, x.prototype._destroy = function (e, t) {
        t(e);
      };
    }).call(this, r(5), r(3));
  }, function (e, t, r) {
    "use strict";

    e.exports = c;
    var n = r(15).codes,
        i = n.ERR_METHOD_NOT_IMPLEMENTED,
        o = n.ERR_MULTIPLE_CALLBACK,
        a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = n.ERR_TRANSFORM_WITH_LENGTH_0,
        f = r(16);

    function u(e, t) {
      var r = this._transformState;
      r.transforming = !1;
      var n = r.writecb;
      if (null === n) return this.emit("error", new o());
      r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
      var i = this._readableState;
      i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }

    function c(e) {
      if (!(this instanceof c)) return new c(e);
      f.call(this, e), this._transformState = {
        afterTransform: u.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", h);
    }

    function h() {
      var e = this;
      "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush(function (t, r) {
        d(e, t, r);
      });
    }

    function d(e, t, r) {
      if (t) return e.emit("error", t);
      if (null != r && e.push(r), e._writableState.length) throw new s();
      if (e._transformState.transforming) throw new a();
      return e.push(null);
    }

    r(0)(c, f), c.prototype.push = function (e, t) {
      return this._transformState.needTransform = !1, f.prototype.push.call(this, e, t);
    }, c.prototype._transform = function (e, t, r) {
      r(new i("_transform()"));
    }, c.prototype._write = function (e, t, r) {
      var n = this._transformState;

      if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    }, c.prototype._read = function (e) {
      var t = this._transformState;
      null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform));
    }, c.prototype._destroy = function (e, t) {
      f.prototype._destroy.call(this, e, function (e) {
        t(e);
      });
    };
  }, function (e, t, r) {
    var n = r(0),
        i = r(17),
        o = r(2).Buffer,
        a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        s = new Array(64);

    function f() {
      this.init(), this._w = s, i.call(this, 64, 56);
    }

    function u(e, t, r) {
      return r ^ e & (t ^ r);
    }

    function c(e, t, r) {
      return e & t | r & (e | t);
    }

    function h(e) {
      return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
    }

    function d(e) {
      return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
    }

    function l(e) {
      return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
    }

    n(f, i), f.prototype.init = function () {
      return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
    }, f.prototype._update = function (e) {
      for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, p = 0 | this._f, b = 0 | this._g, y = 0 | this._h, g = 0; g < 16; ++g) {
        r[g] = e.readInt32BE(4 * g);
      }

      for (; g < 64; ++g) {
        r[g] = 0 | (((t = r[g - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) + r[g - 7] + l(r[g - 15]) + r[g - 16];
      }

      for (var v = 0; v < 64; ++v) {
        var m = y + d(f) + u(f, p, b) + a[v] + r[v] | 0,
            w = h(n) + c(n, i, o) | 0;
        y = b, b = p, p = f, f = s + m | 0, s = o, o = i, i = n, n = m + w | 0;
      }

      this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = f + this._e | 0, this._f = p + this._f | 0, this._g = b + this._g | 0, this._h = y + this._h | 0;
    }, f.prototype._hash = function () {
      var e = o.allocUnsafe(32);
      return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
    }, e.exports = f;
  }, function (e, t, r) {
    var n = r(0),
        i = r(17),
        o = r(2).Buffer,
        a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        s = new Array(160);

    function f() {
      this.init(), this._w = s, i.call(this, 128, 112);
    }

    function u(e, t, r) {
      return r ^ e & (t ^ r);
    }

    function c(e, t, r) {
      return e & t | r & (e | t);
    }

    function h(e, t) {
      return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25);
    }

    function d(e, t) {
      return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23);
    }

    function l(e, t) {
      return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7;
    }

    function p(e, t) {
      return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25);
    }

    function b(e, t) {
      return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6;
    }

    function y(e, t) {
      return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26);
    }

    function g(e, t) {
      return e >>> 0 < t >>> 0 ? 1 : 0;
    }

    n(f, i), f.prototype.init = function () {
      return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
    }, f.prototype._update = function (e) {
      for (var t = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, f = 0 | this._fh, v = 0 | this._gh, m = 0 | this._hh, w = 0 | this._al, _ = 0 | this._bl, E = 0 | this._cl, S = 0 | this._dl, A = 0 | this._el, x = 0 | this._fl, k = 0 | this._gl, M = 0 | this._hl, T = 0; T < 32; T += 2) {
        t[T] = e.readInt32BE(4 * T), t[T + 1] = e.readInt32BE(4 * T + 4);
      }

      for (; T < 160; T += 2) {
        var I = t[T - 30],
            R = t[T - 30 + 1],
            P = l(I, R),
            L = p(R, I),
            B = b(I = t[T - 4], R = t[T - 4 + 1]),
            C = y(R, I),
            O = t[T - 14],
            N = t[T - 14 + 1],
            j = t[T - 32],
            D = t[T - 32 + 1],
            U = L + N | 0,
            z = P + O + g(U, L) | 0;
        z = (z = z + B + g(U = U + C | 0, C) | 0) + j + g(U = U + D | 0, D) | 0, t[T] = z, t[T + 1] = U;
      }

      for (var q = 0; q < 160; q += 2) {
        z = t[q], U = t[q + 1];
        var F = c(r, n, i),
            K = c(w, _, E),
            H = h(r, w),
            V = h(w, r),
            Y = d(s, A),
            W = d(A, s),
            G = a[q],
            Z = a[q + 1],
            J = u(s, f, v),
            $ = u(A, x, k),
            X = M + W | 0,
            Q = m + Y + g(X, M) | 0;
        Q = (Q = (Q = Q + J + g(X = X + $ | 0, $) | 0) + G + g(X = X + Z | 0, Z) | 0) + z + g(X = X + U | 0, U) | 0;
        var ee = V + K | 0,
            te = H + F + g(ee, V) | 0;
        m = v, M = k, v = f, k = x, f = s, x = A, s = o + Q + g(A = S + X | 0, S) | 0, o = i, S = E, i = n, E = _, n = r, _ = w, r = Q + te + g(w = X + ee | 0, X) | 0;
      }

      this._al = this._al + w | 0, this._bl = this._bl + _ | 0, this._cl = this._cl + E | 0, this._dl = this._dl + S | 0, this._el = this._el + A | 0, this._fl = this._fl + x | 0, this._gl = this._gl + k | 0, this._hl = this._hl + M | 0, this._ah = this._ah + r + g(this._al, w) | 0, this._bh = this._bh + n + g(this._bl, _) | 0, this._ch = this._ch + i + g(this._cl, E) | 0, this._dh = this._dh + o + g(this._dl, S) | 0, this._eh = this._eh + s + g(this._el, A) | 0, this._fh = this._fh + f + g(this._fl, x) | 0, this._gh = this._gh + v + g(this._gl, k) | 0, this._hh = this._hh + m + g(this._hl, M) | 0;
    }, f.prototype._hash = function () {
      var e = o.allocUnsafe(64);

      function t(t, r, n) {
        e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
      }

      return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e;
    }, e.exports = f;
  }, function (e, t, r) {
    "use strict";

    var n = t;

    function i(e) {
      return 1 === e.length ? "0" + e : e;
    }

    function o(e) {
      for (var t = "", r = 0; r < e.length; r++) {
        t += i(e[r].toString(16));
      }

      return t;
    }

    n.toArray = function (e, t) {
      if (Array.isArray(e)) return e.slice();
      if (!e) return [];
      var r = [];

      if ("string" != typeof e) {
        for (var n = 0; n < e.length; n++) {
          r[n] = 0 | e[n];
        }

        return r;
      }

      if ("hex" === t) {
        (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);

        for (n = 0; n < e.length; n += 2) {
          r.push(parseInt(e[n] + e[n + 1], 16));
        }
      } else for (n = 0; n < e.length; n++) {
        var i = e.charCodeAt(n),
            o = i >> 8,
            a = 255 & i;
        o ? r.push(o, a) : r.push(a);
      }

      return r;
    }, n.zero2 = i, n.toHex = o, n.encode = function (e, t) {
      return "hex" === t ? o(e) : e;
    };
  }, function (e, t, r) {
    var n;

    function i(e) {
      this.rand = e;
    }

    if (e.exports = function (e) {
      return n || (n = new i(null)), n.generate(e);
    }, e.exports.Rand = i, i.prototype.generate = function (e) {
      return this._rand(e);
    }, i.prototype._rand = function (e) {
      if (this.rand.getBytes) return this.rand.getBytes(e);

      for (var t = new Uint8Array(e), r = 0; r < t.length; r++) {
        t[r] = this.rand.getByte();
      }

      return t;
    }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function (e) {
      var t = new Uint8Array(e);
      return self.crypto.getRandomValues(t), t;
    } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function (e) {
      var t = new Uint8Array(e);
      return self.msCrypto.getRandomValues(t), t;
    } : "object" == typeof window && (i.prototype._rand = function () {
      throw new Error("Not implemented yet");
    });else try {
      var o = r(155);
      if ("function" != typeof o.randomBytes) throw new Error("Not supported");

      i.prototype._rand = function (e) {
        return o.randomBytes(e);
      };
    } catch (e) {}
  }, function (e, t, r) {
    "use strict";

    var n = t;
    n.base = r(26), n.short = r(156), n.mont = r(157), n.edwards = r(158);
  }, function (e, t, r) {
    "use strict";

    var n = r(8).rotr32;

    function i(e, t, r) {
      return e & t ^ ~e & r;
    }

    function o(e, t, r) {
      return e & t ^ e & r ^ t & r;
    }

    function a(e, t, r) {
      return e ^ t ^ r;
    }

    t.ft_1 = function (e, t, r, n) {
      return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? a(t, r, n) : 2 === e ? o(t, r, n) : void 0;
    }, t.ch32 = i, t.maj32 = o, t.p32 = a, t.s0_256 = function (e) {
      return n(e, 2) ^ n(e, 13) ^ n(e, 22);
    }, t.s1_256 = function (e) {
      return n(e, 6) ^ n(e, 11) ^ n(e, 25);
    }, t.g0_256 = function (e) {
      return n(e, 7) ^ n(e, 18) ^ e >>> 3;
    }, t.g1_256 = function (e) {
      return n(e, 17) ^ n(e, 19) ^ e >>> 10;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(8),
        i = r(21),
        o = r(75),
        a = r(12),
        s = n.sum32,
        f = n.sum32_4,
        u = n.sum32_5,
        c = o.ch32,
        h = o.maj32,
        d = o.s0_256,
        l = o.s1_256,
        p = o.g0_256,
        b = o.g1_256,
        y = i.BlockHash,
        g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

    function v() {
      if (!(this instanceof v)) return new v();
      y.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = g, this.W = new Array(64);
    }

    n.inherits(v, y), e.exports = v, v.blockSize = 512, v.outSize = 256, v.hmacStrength = 192, v.padLength = 64, v.prototype._update = function (e, t) {
      for (var r = this.W, n = 0; n < 16; n++) {
        r[n] = e[t + n];
      }

      for (; n < r.length; n++) {
        r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
      }

      var i = this.h[0],
          o = this.h[1],
          y = this.h[2],
          g = this.h[3],
          v = this.h[4],
          m = this.h[5],
          w = this.h[6],
          _ = this.h[7];

      for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
        var E = u(_, l(v), c(v, m, w), this.k[n], r[n]),
            S = s(d(i), h(i, o, y));
        _ = w, w = m, m = v, v = s(g, E), g = y, y = o, o = i, i = s(E, S);
      }

      this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], y), this.h[3] = s(this.h[3], g), this.h[4] = s(this.h[4], v), this.h[5] = s(this.h[5], m), this.h[6] = s(this.h[6], w), this.h[7] = s(this.h[7], _);
    }, v.prototype._digest = function (e) {
      return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(8),
        i = r(21),
        o = r(12),
        a = n.rotr64_hi,
        s = n.rotr64_lo,
        f = n.shr64_hi,
        u = n.shr64_lo,
        c = n.sum64,
        h = n.sum64_hi,
        d = n.sum64_lo,
        l = n.sum64_4_hi,
        p = n.sum64_4_lo,
        b = n.sum64_5_hi,
        y = n.sum64_5_lo,
        g = i.BlockHash,
        v = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

    function m() {
      if (!(this instanceof m)) return new m();
      g.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = v, this.W = new Array(160);
    }

    function w(e, t, r, n, i) {
      var o = e & r ^ ~e & i;
      return o < 0 && (o += 4294967296), o;
    }

    function _(e, t, r, n, i, o) {
      var a = t & n ^ ~t & o;
      return a < 0 && (a += 4294967296), a;
    }

    function E(e, t, r, n, i) {
      var o = e & r ^ e & i ^ r & i;
      return o < 0 && (o += 4294967296), o;
    }

    function S(e, t, r, n, i, o) {
      var a = t & n ^ t & o ^ n & o;
      return a < 0 && (a += 4294967296), a;
    }

    function A(e, t) {
      var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
      return r < 0 && (r += 4294967296), r;
    }

    function x(e, t) {
      var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
      return r < 0 && (r += 4294967296), r;
    }

    function k(e, t) {
      var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
      return r < 0 && (r += 4294967296), r;
    }

    function M(e, t) {
      var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
      return r < 0 && (r += 4294967296), r;
    }

    function T(e, t) {
      var r = a(e, t, 1) ^ a(e, t, 8) ^ f(e, t, 7);
      return r < 0 && (r += 4294967296), r;
    }

    function I(e, t) {
      var r = s(e, t, 1) ^ s(e, t, 8) ^ u(e, t, 7);
      return r < 0 && (r += 4294967296), r;
    }

    function R(e, t) {
      var r = a(e, t, 19) ^ a(t, e, 29) ^ f(e, t, 6);
      return r < 0 && (r += 4294967296), r;
    }

    function P(e, t) {
      var r = s(e, t, 19) ^ s(t, e, 29) ^ u(e, t, 6);
      return r < 0 && (r += 4294967296), r;
    }

    n.inherits(m, g), e.exports = m, m.blockSize = 1024, m.outSize = 512, m.hmacStrength = 192, m.padLength = 128, m.prototype._prepareBlock = function (e, t) {
      for (var r = this.W, n = 0; n < 32; n++) {
        r[n] = e[t + n];
      }

      for (; n < r.length; n += 2) {
        var i = R(r[n - 4], r[n - 3]),
            o = P(r[n - 4], r[n - 3]),
            a = r[n - 14],
            s = r[n - 13],
            f = T(r[n - 30], r[n - 29]),
            u = I(r[n - 30], r[n - 29]),
            c = r[n - 32],
            h = r[n - 31];
        r[n] = l(i, o, a, s, f, u, c, h), r[n + 1] = p(i, o, a, s, f, u, c, h);
      }
    }, m.prototype._update = function (e, t) {
      this._prepareBlock(e, t);

      var r = this.W,
          n = this.h[0],
          i = this.h[1],
          a = this.h[2],
          s = this.h[3],
          f = this.h[4],
          u = this.h[5],
          l = this.h[6],
          p = this.h[7],
          g = this.h[8],
          v = this.h[9],
          m = this.h[10],
          T = this.h[11],
          I = this.h[12],
          R = this.h[13],
          P = this.h[14],
          L = this.h[15];
      o(this.k.length === r.length);

      for (var B = 0; B < r.length; B += 2) {
        var C = P,
            O = L,
            N = k(g, v),
            j = M(g, v),
            D = w(g, v, m, T, I),
            U = _(g, v, m, T, I, R),
            z = this.k[B],
            q = this.k[B + 1],
            F = r[B],
            K = r[B + 1],
            H = b(C, O, N, j, D, U, z, q, F, K),
            V = y(C, O, N, j, D, U, z, q, F, K);

        C = A(n, i), O = x(n, i), N = E(n, i, a, s, f), j = S(n, i, a, s, f, u);
        var Y = h(C, O, N, j),
            W = d(C, O, N, j);
        P = I, L = R, I = m, R = T, m = g, T = v, g = h(l, p, H, V), v = d(p, p, H, V), l = f, p = u, f = a, u = s, a = n, s = i, n = h(H, V, Y, W), i = d(H, V, Y, W);
      }

      c(this.h, 0, n, i), c(this.h, 2, a, s), c(this.h, 4, f, u), c(this.h, 6, l, p), c(this.h, 8, g, v), c(this.h, 10, m, T), c(this.h, 12, I, R), c(this.h, 14, P, L);
    }, m.prototype._digest = function (e) {
      return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
    };
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      var n = r(173);
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */

      function i(e, t) {
        if (e === t) return 0;

        for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i) {
          if (e[i] !== t[i]) {
            r = e[i], n = t[i];
            break;
          }
        }

        return r < n ? -1 : n < r ? 1 : 0;
      }

      function o(e) {
        return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer);
      }

      var a = r(10),
          s = Object.prototype.hasOwnProperty,
          f = Array.prototype.slice,
          u = "foo" === function () {}.name;

      function c(e) {
        return Object.prototype.toString.call(e);
      }

      function h(e) {
        return !o(e) && "function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer)));
      }

      var d = e.exports = v,
          l = /\s*function\s+([^\(\s]*)\s*/;

      function p(e) {
        if (a.isFunction(e)) {
          if (u) return e.name;
          var t = e.toString().match(l);
          return t && t[1];
        }
      }

      function b(e, t) {
        return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e;
      }

      function y(e) {
        if (u || !a.isFunction(e)) return a.inspect(e);
        var t = p(e);
        return "[Function" + (t ? ": " + t : "") + "]";
      }

      function g(e, t, r, n, i) {
        throw new d.AssertionError({
          message: r,
          actual: e,
          expected: t,
          operator: n,
          stackStartFunction: i
        });
      }

      function v(e, t) {
        e || g(e, !0, t, "==", d.ok);
      }

      function m(e, t, r, n) {
        if (e === t) return !0;
        if (o(e) && o(t)) return 0 === i(e, t);
        if (a.isDate(e) && a.isDate(t)) return e.getTime() === t.getTime();
        if (a.isRegExp(e) && a.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;

        if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
          if (h(e) && h(t) && c(e) === c(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
          if (o(e) !== o(t)) return !1;
          var s = (n = n || {
            actual: [],
            expected: []
          }).actual.indexOf(e);
          return -1 !== s && s === n.expected.indexOf(t) || (n.actual.push(e), n.expected.push(t), function (e, t, r, n) {
            if (null == e || null == t) return !1;
            if (a.isPrimitive(e) || a.isPrimitive(t)) return e === t;
            if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
            var i = w(e),
                o = w(t);
            if (i && !o || !i && o) return !1;
            if (i) return e = f.call(e), t = f.call(t), m(e, t, r);
            var s,
                u,
                c = S(e),
                h = S(t);
            if (c.length !== h.length) return !1;

            for (c.sort(), h.sort(), u = c.length - 1; u >= 0; u--) {
              if (c[u] !== h[u]) return !1;
            }

            for (u = c.length - 1; u >= 0; u--) {
              if (s = c[u], !m(e[s], t[s], r, n)) return !1;
            }

            return !0;
          }(e, t, r, n));
        }

        return r ? e === t : e == t;
      }

      function w(e) {
        return "[object Arguments]" == Object.prototype.toString.call(e);
      }

      function _(e, t) {
        if (!e || !t) return !1;
        if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);

        try {
          if (e instanceof t) return !0;
        } catch (e) {}

        return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
      }

      function E(e, t, r, n) {
        var i;
        if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
        "string" == typeof r && (n = r, r = null), i = function (e) {
          var t;

          try {
            e();
          } catch (e) {
            t = e;
          }

          return t;
        }(t), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), e && !i && g(i, r, "Missing expected exception" + n);
        var o = "string" == typeof n,
            s = !e && i && !r;
        if ((!e && a.isError(i) && o && _(i, r) || s) && g(i, r, "Got unwanted exception" + n), e && i && r && !_(i, r) || !e && i) throw i;
      }

      d.AssertionError = function (e) {
        this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = function (e) {
          return b(y(e.actual), 128) + " " + e.operator + " " + b(y(e.expected), 128);
        }(this), this.generatedMessage = !0);
        var t = e.stackStartFunction || g;
        if (Error.captureStackTrace) Error.captureStackTrace(this, t);else {
          var r = new Error();

          if (r.stack) {
            var n = r.stack,
                i = p(t),
                o = n.indexOf("\n" + i);

            if (o >= 0) {
              var a = n.indexOf("\n", o + 1);
              n = n.substring(a + 1);
            }

            this.stack = n;
          }
        }
      }, a.inherits(d.AssertionError, Error), d.fail = g, d.ok = v, d.equal = function (e, t, r) {
        e != t && g(e, t, r, "==", d.equal);
      }, d.notEqual = function (e, t, r) {
        e == t && g(e, t, r, "!=", d.notEqual);
      }, d.deepEqual = function (e, t, r) {
        m(e, t, !1) || g(e, t, r, "deepEqual", d.deepEqual);
      }, d.deepStrictEqual = function (e, t, r) {
        m(e, t, !0) || g(e, t, r, "deepStrictEqual", d.deepStrictEqual);
      }, d.notDeepEqual = function (e, t, r) {
        m(e, t, !1) && g(e, t, r, "notDeepEqual", d.notDeepEqual);
      }, d.notDeepStrictEqual = function e(t, r, n) {
        m(t, r, !0) && g(t, r, n, "notDeepStrictEqual", e);
      }, d.strictEqual = function (e, t, r) {
        e !== t && g(e, t, r, "===", d.strictEqual);
      }, d.notStrictEqual = function (e, t, r) {
        e === t && g(e, t, r, "!==", d.notStrictEqual);
      }, d.throws = function (e, t, r) {
        E(!0, e, t, r);
      }, d.doesNotThrow = function (e, t, r) {
        E(!1, e, t, r);
      }, d.ifError = function (e) {
        if (e) throw e;
      }, d.strict = n(function e(t, r) {
        t || g(t, !0, r, "==", e);
      }, d, {
        equal: d.strictEqual,
        deepEqual: d.deepStrictEqual,
        notEqual: d.notStrictEqual,
        notDeepEqual: d.notDeepStrictEqual
      }), d.strict.strict = d.strict;

      var S = Object.keys || function (e) {
        var t = [];

        for (var r in e) {
          s.call(e, r) && t.push(r);
        }

        return t;
      };
    }).call(this, r(5));
  }, function (e, t, r) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getLength = t.decode = t.encode = void 0;
      var n = r(4);

      function i(e, t) {
        if ("00" === e.slice(0, 2)) throw new Error("invalid RLP: extra zeros");
        return parseInt(e, t);
      }

      function o(t, r) {
        if (t < 56) return e.from([t + r]);
        var n = s(t),
            i = s(r + 55 + n.length / 2);
        return e.from(i + n, "hex");
      }

      function a(e) {
        return "0x" === e.slice(0, 2);
      }

      function s(e) {
        if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!");
        var t = e.toString(16);
        return t.length % 2 ? "0" + t : t;
      }

      function f(t) {
        if (!e.isBuffer(t)) {
          if ("string" == typeof t) return a(t) ? e.from((i = "string" != typeof (o = t) ? o : a(o) ? o.slice(2) : o).length % 2 ? "0" + i : i, "hex") : e.from(t);
          if ("number" == typeof t || "bigint" == typeof t) return t ? (r = s(t), e.from(r, "hex")) : e.from([]);
          if (null == t) return e.from([]);
          if (t instanceof Uint8Array) return e.from(t);
          if (n.isBN(t)) return e.from(t.toArray());
          throw new Error("invalid type");
        }

        var r, i, o;
        return t;
      }

      t.encode = function t(r) {
        if (Array.isArray(r)) {
          for (var n = [], i = 0; i < r.length; i++) {
            n.push(t(r[i]));
          }

          var a = e.concat(n);
          return e.concat([o(a.length, 192), a]);
        }

        var s = f(r);
        return 1 === s.length && s[0] < 128 ? s : e.concat([o(s.length, 128), s]);
      }, t.decode = function (t, r) {
        if (void 0 === r && (r = !1), !t || 0 === t.length) return e.from([]);

        var n = function t(r) {
          var n,
              o,
              a,
              s,
              f,
              u = [],
              c = r[0];
          if (c <= 127) return {
            data: r.slice(0, 1),
            remainder: r.slice(1)
          };

          if (c <= 183) {
            if (n = c - 127, a = 128 === c ? e.from([]) : r.slice(1, n), 2 === n && a[0] < 128) throw new Error("invalid rlp encoding: byte must be less 0x80");
            return {
              data: a,
              remainder: r.slice(n)
            };
          }

          if (c <= 191) {
            if (o = c - 182, r.length - 1 < o) throw new Error("invalid RLP: not enough bytes for string length");
            if ((n = i(r.slice(1, o).toString("hex"), 16)) <= 55) throw new Error("invalid RLP: expected string length to be greater than 55");
            if ((a = r.slice(o, n + o)).length < n) throw new Error("invalid RLP: not enough bytes for string");
            return {
              data: a,
              remainder: r.slice(n + o)
            };
          }

          if (c <= 247) {
            for (n = c - 191, s = r.slice(1, n); s.length;) {
              f = t(s), u.push(f.data), s = f.remainder;
            }

            return {
              data: u,
              remainder: r.slice(n)
            };
          }

          o = c - 246, n = i(r.slice(1, o).toString("hex"), 16);
          var h = o + n;
          if (h > r.length) throw new Error("invalid rlp: total length is larger than the data");
          if (0 === (s = r.slice(o, h)).length) throw new Error("invalid rlp, List has a invalid length");

          for (; s.length;) {
            f = t(s), u.push(f.data), s = f.remainder;
          }

          return {
            data: u,
            remainder: r.slice(h)
          };
        }(f(t));

        if (r) return n;
        if (0 !== n.remainder.length) throw new Error("invalid remainder");
        return n.data;
      }, t.getLength = function (t) {
        if (!t || 0 === t.length) return e.from([]);
        var r = f(t),
            n = r[0];
        if (n <= 127) return r.length;
        if (n <= 183) return n - 127;
        if (n <= 191) return n - 182;
        if (n <= 247) return n - 191;
        var o = n - 246;
        return o + i(r.slice(1, o).toString("hex"), 16);
      };
    }).call(this, r(1).Buffer);
  }, function (e, t) {
    e.exports = function (e) {
      if ("string" != typeof e) throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof e + ", while checking isHexPrefixed.");
      return "0x" === e.slice(0, 2);
    };
  }, function (e, t, r) {
    var n = r(40),
        i = r(178)();

    function o(e) {
      this.currentProvider = e;
    }

    function a(e) {
      return function () {
        var t = this;
        var r = [].slice.call(arguments),
            n = r.pop();
        t.sendAsync({
          method: e,
          params: r
        }, n);
      };
    }

    function s(e, t) {
      return function () {
        var r = this;
        var n = [].slice.call(arguments),
            i = n.pop();
        n.length < e && n.push("latest"), r.sendAsync({
          method: t,
          params: n
        }, i);
      };
    }

    e.exports = o, o.prototype.getBalance = s(2, "eth_getBalance"), o.prototype.getCode = s(2, "eth_getCode"), o.prototype.getTransactionCount = s(2, "eth_getTransactionCount"), o.prototype.getStorageAt = s(3, "eth_getStorageAt"), o.prototype.call = s(2, "eth_call"), o.prototype.protocolVersion = a("eth_protocolVersion"), o.prototype.syncing = a("eth_syncing"), o.prototype.coinbase = a("eth_coinbase"), o.prototype.mining = a("eth_mining"), o.prototype.hashrate = a("eth_hashrate"), o.prototype.gasPrice = a("eth_gasPrice"), o.prototype.accounts = a("eth_accounts"), o.prototype.blockNumber = a("eth_blockNumber"), o.prototype.getBlockTransactionCountByHash = a("eth_getBlockTransactionCountByHash"), o.prototype.getBlockTransactionCountByNumber = a("eth_getBlockTransactionCountByNumber"), o.prototype.getUncleCountByBlockHash = a("eth_getUncleCountByBlockHash"), o.prototype.getUncleCountByBlockNumber = a("eth_getUncleCountByBlockNumber"), o.prototype.sign = a("eth_sign"), o.prototype.sendTransaction = a("eth_sendTransaction"), o.prototype.sendRawTransaction = a("eth_sendRawTransaction"), o.prototype.estimateGas = a("eth_estimateGas"), o.prototype.getBlockByHash = a("eth_getBlockByHash"), o.prototype.getBlockByNumber = a("eth_getBlockByNumber"), o.prototype.getTransactionByHash = a("eth_getTransactionByHash"), o.prototype.getTransactionByBlockHashAndIndex = a("eth_getTransactionByBlockHashAndIndex"), o.prototype.getTransactionByBlockNumberAndIndex = a("eth_getTransactionByBlockNumberAndIndex"), o.prototype.getTransactionReceipt = a("eth_getTransactionReceipt"), o.prototype.getUncleByBlockHashAndIndex = a("eth_getUncleByBlockHashAndIndex"), o.prototype.getUncleByBlockNumberAndIndex = a("eth_getUncleByBlockNumberAndIndex"), o.prototype.getCompilers = a("eth_getCompilers"), o.prototype.compileLLL = a("eth_compileLLL"), o.prototype.compileSolidity = a("eth_compileSolidity"), o.prototype.compileSerpent = a("eth_compileSerpent"), o.prototype.newFilter = a("eth_newFilter"), o.prototype.newBlockFilter = a("eth_newBlockFilter"), o.prototype.newPendingTransactionFilter = a("eth_newPendingTransactionFilter"), o.prototype.uninstallFilter = a("eth_uninstallFilter"), o.prototype.getFilterChanges = a("eth_getFilterChanges"), o.prototype.getFilterLogs = a("eth_getFilterLogs"), o.prototype.getLogs = a("eth_getLogs"), o.prototype.getWork = a("eth_getWork"), o.prototype.submitWork = a("eth_submitWork"), o.prototype.submitHashrate = a("eth_submitHashrate"), o.prototype.sendAsync = function (e, t) {
      var r;
      this.currentProvider.sendAsync((r = e, n({
        id: i(),
        jsonrpc: "2.0",
        params: []
      }, r)), function (e, r) {
        if (!e && r.error && (e = new Error("EthQuery - RPC Error - " + r.error.message)), e) return t(e);
        t(null, r.result);
      });
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e, t, r) {
      ((0, n.default)(e) ? d : l)(e, (0, c.default)(t), r);
    };
    var n = h(r(27)),
        i = h(r(88)),
        o = h(r(184)),
        a = h(r(91)),
        s = h(r(22)),
        f = h(r(43)),
        u = h(r(45)),
        c = h(r(13));

    function h(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function d(e, t, r) {
      r = (0, f.default)(r || s.default);
      var n = 0,
          o = 0,
          a = e.length;

      function c(e, t) {
        e ? r(e) : ++o !== a && t !== i.default || r(null);
      }

      for (0 === a && r(null); n < a; n++) {
        t(e[n], n, (0, u.default)(c));
      }
    }

    var l = (0, a.default)(o.default, 1 / 0);
    e.exports = t.default;
  }, function (e, t, r) {
    var n = r(84).Symbol;
    e.exports = n;
  }, function (e, t, r) {
    var n = r(85),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = n || i || Function("return this")();
    e.exports = o;
  }, function (e, t, r) {
    (function (t) {
      var r = "object" == typeof t && t && t.Object === Object && t;
      e.exports = r;
    }).call(this, r(5));
  }, function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  }, function (e, t) {
    e.exports = function (e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {}, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      return function (t, r, f) {
        if (f = (0, i.default)(f || n.default), e <= 0 || !t) return f(null);
        var u = (0, o.default)(t),
            c = !1,
            h = 0,
            d = !1;

        function l(e, t) {
          if (h -= 1, e) c = !0, f(e);else {
            if (t === s.default || c && h <= 0) return c = !0, f(null);
            d || p();
          }
        }

        function p() {
          for (d = !0; h < e && !c;) {
            var t = u();
            if (null === t) return c = !0, void (h <= 0 && f(null));
            h += 1, r(t.value, t.key, (0, a.default)(l));
          }

          d = !1;
        }

        p();
      };
    };
    var n = f(r(22)),
        i = f(r(43)),
        o = f(r(185)),
        a = f(r(45)),
        s = f(r(88));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = t.default;
  }, function (e, t) {
    var r = Array.isArray;
    e.exports = r;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e, t) {
      return function (r, n, i) {
        return e(r, t, n, i);
      };
    }, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    var n = r(93);

    function i(e) {
      return "never" !== s(e);
    }

    function o(e) {
      var t = a(e);
      return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t);
    }

    function a(e) {
      switch (e.method) {
        case "eth_getStorageAt":
          return 2;

        case "eth_getBalance":
        case "eth_getCode":
        case "eth_getTransactionCount":
        case "eth_call":
        case "eth_estimateGas":
          return 1;

        case "eth_getBlockByNumber":
          return 0;

        default:
          return;
      }
    }

    function s(e) {
      switch (e.method) {
        case "web3_clientVersion":
        case "web3_sha3":
        case "eth_protocolVersion":
        case "eth_getBlockTransactionCountByHash":
        case "eth_getUncleCountByBlockHash":
        case "eth_getCode":
        case "eth_getBlockByHash":
        case "eth_getTransactionByHash":
        case "eth_getTransactionByBlockHashAndIndex":
        case "eth_getTransactionReceipt":
        case "eth_getUncleByBlockHashAndIndex":
        case "eth_getCompilers":
        case "eth_compileLLL":
        case "eth_compileSolidity":
        case "eth_compileSerpent":
        case "shh_version":
          return "perma";

        case "eth_getBlockByNumber":
        case "eth_getBlockTransactionCountByNumber":
        case "eth_getUncleCountByBlockNumber":
        case "eth_getTransactionByBlockNumberAndIndex":
        case "eth_getUncleByBlockNumberAndIndex":
          return "fork";

        case "eth_gasPrice":
        case "eth_getBalance":
        case "eth_getStorageAt":
        case "eth_getTransactionCount":
        case "eth_call":
        case "eth_estimateGas":
        case "eth_getFilterLogs":
        case "eth_getLogs":
        case "eth_blockNumber":
          return "block";

        case "net_version":
        case "net_peerCount":
        case "net_listening":
        case "eth_syncing":
        case "eth_sign":
        case "eth_coinbase":
        case "eth_mining":
        case "eth_hashrate":
        case "eth_accounts":
        case "eth_sendTransaction":
        case "eth_sendRawTransaction":
        case "eth_newFilter":
        case "eth_newBlockFilter":
        case "eth_newPendingTransactionFilter":
        case "eth_uninstallFilter":
        case "eth_getFilterChanges":
        case "eth_getWork":
        case "eth_submitWork":
        case "eth_submitHashrate":
        case "db_putString":
        case "db_getString":
        case "db_putHex":
        case "db_getHex":
        case "shh_post":
        case "shh_newIdentity":
        case "shh_hasIdentity":
        case "shh_newGroup":
        case "shh_addToGroup":
        case "shh_newFilter":
        case "shh_uninstallFilter":
        case "shh_getFilterChanges":
        case "shh_getMessages":
          return "never";
      }
    }

    e.exports = {
      cacheIdentifierForPayload: function cacheIdentifierForPayload(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!i(e)) return null;
        var r = t.includeBlockRef,
            a = r ? e.params : o(e);
        return e.method + ":" + n(a);
      },
      canCache: i,
      blockTagForPayload: function blockTagForPayload(e) {
        var t = a(e);
        if (t >= e.params.length) return null;
        return e.params[t];
      },
      paramsWithoutBlockTag: o,
      blockTagParamIndex: a,
      cacheTypeForPayload: s
    };
  }, function (e, t, r) {
    var n = "undefined" != typeof JSON ? JSON : r(211);

    e.exports = function (e, t) {
      t || (t = {}), "function" == typeof t && (t = {
        cmp: t
      });
      var r = t.space || "";
      "number" == typeof r && (r = Array(r + 1).join(" "));

      var a,
          s = "boolean" == typeof t.cycles && t.cycles,
          f = t.replacer || function (e, t) {
        return t;
      },
          u = t.cmp && (a = t.cmp, function (e) {
        return function (t, r) {
          var n = {
            key: t,
            value: e[t]
          },
              i = {
            key: r,
            value: e[r]
          };
          return a(n, i);
        };
      }),
          c = [];

      return function e(t, a, h, d) {
        var l = r ? "\n" + new Array(d + 1).join(r) : "",
            p = r ? ": " : ":";

        if (h && h.toJSON && "function" == typeof h.toJSON && (h = h.toJSON()), void 0 !== (h = f.call(t, a, h))) {
          if ("object" != typeof h || null === h) return n.stringify(h);

          if (i(h)) {
            for (var b = [], y = 0; y < h.length; y++) {
              var g = e(h, y, h[y], d + 1) || n.stringify(null);
              b.push(l + r + g);
            }

            return "[" + b.join(",") + l + "]";
          }

          if (-1 !== c.indexOf(h)) {
            if (s) return n.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }

          c.push(h);
          var v = o(h).sort(u && u(h));

          for (b = [], y = 0; y < v.length; y++) {
            var m = e(h, a = v[y], h[a], d + 1);

            if (m) {
              var w = n.stringify(a) + p + m;
              b.push(l + r + w);
            }
          }

          return c.splice(c.indexOf(h), 1), "{" + b.join(",") + l + "}";
        }
      }({
        "": e
      }, "", e, 0);
    };

    var i = Array.isArray || function (e) {
      return "[object Array]" === {}.toString.call(e);
    },
        o = Object.keys || function (e) {
      var t = Object.prototype.hasOwnProperty || function () {
        return !0;
      },
          r = [];

      for (var n in e) {
        t.call(e, n) && r.push(n);
      }

      return r;
    };
  }, function (e, t, r) {
    var n = r(217).Mutex,
        i = r(48),
        o = r(95),
        a = r(219),
        s = r(221),
        f = r(222),
        _r2 = r(23),
        u = _r2.intToHex,
        c = _r2.hexToInt;

    function h(e) {
      return d( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
        var r,
            _args6 = arguments;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return e.apply(void 0, _args6);

              case 2:
                r = _context6.sent;
                return _context6.abrupt("return", u(r.id));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      })));
    }

    function d(e) {
      return i( /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(t, r) {
          var n;
          return _regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return e.apply(null, t.params);

                case 2:
                  n = _context7.sent;
                  r.result = n;

                case 4:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x2, _x3) {
          return _ref6.apply(this, arguments);
        };
      }());
    }

    function l(e, t) {
      var r = [];

      for (var _t3 in e) {
        r.push(e[_t3]);
      }

      return r;
    }

    e.exports = function (_ref7) {
      var e = _ref7.blockTracker,
          t = _ref7.provider;
      var r = 0,
          i = {};

      var p = new n(),
          b = function (_ref8) {
        var e = _ref8.mutex;
        return function (t) {
          return /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(r, n, i, o) {
              return _regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return e.acquire();

                    case 2:
                      _context8.t0 = _context8.sent;
                      (0, _context8.t0)();
                      t(r, n, i, o);

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));

            return function (_x4, _x5, _x6, _x7) {
              return _ref9.apply(this, arguments);
            };
          }();
        };
      }({
        mutex: p
      }),
          y = o({
        eth_newFilter: b(h(v)),
        eth_newBlockFilter: b(h(m)),
        eth_newPendingTransactionFilter: b(h(w)),
        eth_uninstallFilter: b(d(S)),
        eth_getFilterChanges: b(d(_)),
        eth_getFilterLogs: b(d(E))
      }),
          g = /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10(_ref10) {
          var e, t, r;
          return _regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  e = _ref10.oldBlock, t = _ref10.newBlock;

                  if (!(0 === i.length)) {
                    _context10.next = 3;
                    break;
                  }

                  return _context10.abrupt("return");

                case 3:
                  _context10.next = 5;
                  return p.acquire();

                case 5:
                  r = _context10.sent;
                  _context10.prev = 6;
                  _context10.next = 9;
                  return Promise.all(l(i).map( /*#__PURE__*/function () {
                    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9(r) {
                      return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                          switch (_context9.prev = _context9.next) {
                            case 0:
                              _context9.prev = 0;
                              _context9.next = 3;
                              return r.update({
                                oldBlock: e,
                                newBlock: t
                              });

                            case 3:
                              _context9.next = 8;
                              break;

                            case 5:
                              _context9.prev = 5;
                              _context9.t0 = _context9["catch"](0);
                              console.error(_context9.t0);

                            case 8:
                            case "end":
                              return _context9.stop();
                          }
                        }
                      }, _callee9, null, [[0, 5]]);
                    }));

                    return function (_x9) {
                      return _ref12.apply(this, arguments);
                    };
                  }()));

                case 9:
                  _context10.next = 14;
                  break;

                case 11:
                  _context10.prev = 11;
                  _context10.t0 = _context10["catch"](6);
                  console.error(_context10.t0);

                case 14:
                  r();

                case 15:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, null, [[6, 11]]);
        }));

        return function g(_x8) {
          return _ref11.apply(this, arguments);
        };
      }();

      return y.newLogFilter = v, y.newBlockFilter = m, y.newPendingTransactionFilter = w, y.uninstallFilter = S, y.getFilterChanges = _, y.getFilterLogs = E, y.destroy = function () {
        !_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11() {
          var e;
          return _regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  e = l(i).length;
                  i = {}, x({
                    prevFilterCount: e,
                    newFilterCount: 0
                  });

                case 2:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }))();
      }, y;

      function v(_x10) {
        return _v.apply(this, arguments);
      }

      function _v() {
        _v = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee12(e) {
          var r;
          return _regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  r = new a({
                    provider: t,
                    params: e
                  });
                  _context12.next = 3;
                  return A(r);

                case 3:
                  return _context12.abrupt("return", r);

                case 4:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));
        return _v.apply(this, arguments);
      }

      function m() {
        return _m.apply(this, arguments);
      }

      function _m() {
        _m = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee13() {
          var e;
          return _regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  e = new s({
                    provider: t
                  });
                  _context13.next = 3;
                  return A(e);

                case 3:
                  return _context13.abrupt("return", e);

                case 4:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));
        return _m.apply(this, arguments);
      }

      function w() {
        return _w.apply(this, arguments);
      }

      function _w() {
        _w = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee14() {
          var e;
          return _regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  e = new f({
                    provider: t
                  });
                  _context14.next = 3;
                  return A(e);

                case 3:
                  return _context14.abrupt("return", e);

                case 4:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));
        return _w.apply(this, arguments);
      }

      function _(_x11) {
        return _2.apply(this, arguments);
      }

      function _2() {
        _2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee15(e) {
          var t, r;
          return _regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  t = c(e), r = i[t];

                  if (r) {
                    _context15.next = 3;
                    break;
                  }

                  throw new Error("No filter for index \"".concat(t, "\""));

                case 3:
                  return _context15.abrupt("return", r.getChangesAndClear());

                case 4:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));
        return _2.apply(this, arguments);
      }

      function E(_x12) {
        return _E.apply(this, arguments);
      }

      function _E() {
        _E = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee16(e) {
          var t, r;
          return _regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  t = c(e), r = i[t];

                  if (r) {
                    _context16.next = 3;
                    break;
                  }

                  throw new Error("No filter for index \"".concat(t, "\""));

                case 3:
                  return _context16.abrupt("return", ("log" === r.type ? results = r.getAllResults() : results = [], results));

                case 4:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));
        return _E.apply(this, arguments);
      }

      function S(_x13) {
        return _S.apply(this, arguments);
      }

      function _S() {
        _S = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee18(e) {
          var t, r, n;
          return _regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  t = c(e), r = i[t], n = Boolean(r);
                  _context18.t0 = n;

                  if (!_context18.t0) {
                    _context18.next = 5;
                    break;
                  }

                  _context18.next = 5;
                  return function () {
                    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee17(e) {
                      var t, r;
                      return _regeneratorRuntime.wrap(function _callee17$(_context17) {
                        while (1) {
                          switch (_context17.prev = _context17.next) {
                            case 0:
                              t = l(i).length;
                              delete i[e];
                              r = l(i).length;
                              x({
                                prevFilterCount: t,
                                newFilterCount: r
                              });

                            case 4:
                            case "end":
                              return _context17.stop();
                          }
                        }
                      }, _callee17);
                    }));

                    return function (_x15) {
                      return _ref15.apply(this, arguments);
                    };
                  }()(t);

                case 5:
                  return _context18.abrupt("return", n);

                case 6:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));
        return _S.apply(this, arguments);
      }

      function A(_x14) {
        return _A.apply(this, arguments);
      }

      function _A() {
        _A = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee19(t) {
          var n, o;
          return _regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  n = l(i).length;
                  _context19.next = 3;
                  return e.getLatestBlock();

                case 3:
                  o = _context19.sent;
                  _context19.next = 6;
                  return t.initialize({
                    currentBlock: o
                  });

                case 6:
                  r++;
                  i[r] = t;
                  t.id = r;
                  t.idHex = u(r);
                  return _context19.abrupt("return", (x({
                    prevFilterCount: n,
                    newFilterCount: l(i).length
                  }), r));

                case 11:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19);
        }));
        return _A.apply(this, arguments);
      }

      function x(_ref14) {
        var t = _ref14.prevFilterCount,
            r = _ref14.newFilterCount;
        0 === t && r > 0 ? e.on("sync", g) : t > 0 && 0 === r && e.removeListener("sync", g);
      }
    };
  }, function (e, t, r) {
    e.exports = r(218);
  }, function (e, t, r) {
    e.exports = r(241)(r(242));
  }, function (e, t, r) {
    e.exports = Object.assign(e.exports, r(255), r(256), r(103), r(274), r(275), r(276));
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++) {
          r[n] = arguments[n];
        }

        return e.apply(t, r);
      };
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
        i = r(261),
        o = r(263),
        a = r(264),
        s = r(265),
        f = r(100);

    e.exports = function (e) {
      return new Promise(function (t, u) {
        var c = e.data,
            h = e.headers;
        n.isFormData(c) && delete h["Content-Type"];
        var d = new XMLHttpRequest();

        if (e.auth) {
          var l = e.auth.username || "",
              p = e.auth.password || "";
          h.Authorization = "Basic " + btoa(l + ":" + p);
        }

        if (d.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function () {
          if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
            var r = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null,
                n = {
              data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
              status: d.status,
              statusText: d.statusText,
              headers: r,
              config: e,
              request: d
            };
            i(t, u, n), d = null;
          }
        }, d.onerror = function () {
          u(f("Network Error", e, null, d)), d = null;
        }, d.ontimeout = function () {
          u(f("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null;
        }, n.isStandardBrowserEnv()) {
          var b = r(266),
              y = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
          y && (h[e.xsrfHeaderName] = y);
        }

        if ("setRequestHeader" in d && n.forEach(h, function (e, t) {
          void 0 === c && "content-type" === t.toLowerCase() ? delete h[t] : d.setRequestHeader(t, e);
        }), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
          d.responseType = e.responseType;
        } catch (t) {
          if ("json" !== e.responseType) throw t;
        }
        "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
          d && (d.abort(), u(e), d = null);
        }), void 0 === c && (c = null), d.send(c);
      });
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(262);

    e.exports = function (e, t, r, i, o) {
      var a = new Error(e);
      return n(a, t, r, i, o);
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      this.message = e;
    }

    n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }, n.prototype.__CANCEL__ = !0, e.exports = n;
  }, function (e, t, r) {
    var n = r(51),
        i = r(53);
    e.exports = {
      Node: /*#__PURE__*/function () {
        "use strict";

        function Node(e, t, r) {
          _classCallCheck(this, Node);

          this.network = e, this.netID = t;
          var n = r.split(":");
          this.ip = n[0], this.port = n[1], r.includes("https://") || r.includes("http://") ? this.ipPort = r : "443" === this.port || 443 === this.port ? this.ipPort = "https://" + r : this.ipPort = "http://" + r;
        }

        _createClass(Node, [{
          key: "isValid",
          value: function isValid() {
            for (var e in this) {
              if (!this.hasOwnProperty(e) || "" == this[e]) return !1;
            }

            return !0;
          }
        }, {
          key: "isEqual",
          value: function isEqual(e, t) {
            return this.netID == e.toString() && this.network == t.toString();
          }
        }, {
          key: "sendRelay",
          value: function () {
            var _sendRelay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee20(e, t) {
              var a, r, o;
              return _regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.prev = 0;
                      a = n.create({
                        baseURL: this.ipPort,
                        timeout: e.configuration.requestTimeOut,
                        headers: {
                          "Content-Type": "application/json"
                        }
                      });
                      _context20.next = 4;
                      return a.post(i.relayPath, e.toJSON());

                    case 4:
                      r = _context20.sent;

                      if (!(200 == r.status && null != r.data)) {
                        _context20.next = 8;
                        break;
                      }

                      o = r.data;
                      return _context20.abrupt("return", t ? void t(o, null) : o);

                    case 8:
                      return _context20.abrupt("return", t ? void t(null, new Error("Failed to send relay with error: " + r.data)) : new Error("Failed to send relay with error: " + r.data));

                    case 11:
                      _context20.prev = 11;
                      _context20.t0 = _context20["catch"](0);
                      return _context20.abrupt("return", t ? void t(null, new Error("Failed to send relay with error: " + _context20.t0)) : new Error("Failed to send relay with error: " + _context20.t0));

                    case 14:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this, [[0, 11]]);
            }));

            function sendRelay(_x16, _x17) {
              return _sendRelay.apply(this, arguments);
            }

            return sendRelay;
          }()
        }]);

        return Node;
      }()
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(9).EventEmitter,
        i = r(10).inherits,
        o = r(14),
        a = r(176),
        s = r(179),
        f = r(207),
        u = r(210),
        c = (r(92), r(46));

    function h(e) {
      n.call(this), this.setMaxListeners(30), e = e || {};
      var t = {
        sendAsync: this._handleAsync.bind(this)
      },
          r = e.blockTrackerProvider || t;
      this._blockTracker = e.blockTracker || new a({
        provider: r,
        pollingInterval: e.pollingInterval || 4e3,
        setSkipCacheFlag: !0
      }), this._ready = new u(), this.currentBlock = null, this._providers = [];
    }

    function d(e) {
      return {
        number: o.toBuffer(e.number),
        hash: o.toBuffer(e.hash),
        parentHash: o.toBuffer(e.parentHash),
        nonce: o.toBuffer(e.nonce),
        mixHash: o.toBuffer(e.mixHash),
        sha3Uncles: o.toBuffer(e.sha3Uncles),
        logsBloom: o.toBuffer(e.logsBloom),
        transactionsRoot: o.toBuffer(e.transactionsRoot),
        stateRoot: o.toBuffer(e.stateRoot),
        receiptsRoot: o.toBuffer(e.receiptRoot || e.receiptsRoot),
        miner: o.toBuffer(e.miner),
        difficulty: o.toBuffer(e.difficulty),
        totalDifficulty: o.toBuffer(e.totalDifficulty),
        size: o.toBuffer(e.size),
        extraData: o.toBuffer(e.extraData),
        gasLimit: o.toBuffer(e.gasLimit),
        gasUsed: o.toBuffer(e.gasUsed),
        timestamp: o.toBuffer(e.timestamp),
        transactions: e.transactions
      };
    }

    e.exports = h, i(h, n), Object.defineProperty(h, "name", {
      value: "HttpProvider"
    }), h.prototype.start = function () {
      var e = this,
          t = this;
      t._ready.go(), t._blockTracker.on("latest", function (r) {
        t._getBlockByNumber(r, function (r, n) {
          if (r) e.emit("error", r);else if (n) {
            var i = d(n);
            t._setCurrentBlock(i), t.emit("rawBlock", n), t.emit("latest", n);
          }
        });
      }), t._blockTracker.on("sync", t.emit.bind(t, "sync")), t._blockTracker.on("error", t.emit.bind(t, "error")), t._running = !0, t.emit("start");
    }, h.prototype.stop = function () {
      this._blockTracker.removeAllListeners(), this._running = !1, this.emit("stop");
    }, h.prototype.isRunning = function () {
      return this._running;
    }, h.prototype.addProvider = function (e, t) {
      "number" == typeof t ? this._providers.splice(t, 0, e) : this._providers.push(e), e.setEngine(this);
    }, h.prototype.removeProvider = function (e) {
      var t = this._providers.indexOf(e);

      if (t < 0) throw new Error("Provider not found.");

      this._providers.splice(t, 1);
    }, h.prototype.send = function (e) {
      throw new Error("Web3ProviderEngine does not support synchronous requests.");
    }, h.prototype.sendAsync = function (e, t) {
      var r = this;

      r._ready.await(function () {
        Array.isArray(e) ? s(e, r._handleAsync.bind(r), t) : r._handleAsync(e, t);
      });
    }, h.prototype._getBlockByNumber = function (e, t) {
      var r = c({
        method: "eth_getBlockByNumber",
        params: [e, !1],
        skipCache: !0
      });

      this._handleAsync(r, function (e, r) {
        return e ? t(e) : t(null, r.result);
      });
    }, h.prototype._handleAsync = function (e, t) {
      var r = this,
          n = -1,
          i = null,
          o = null,
          a = [];

      function s(r, n) {
        o = r, i = n, f(a, function (e, t) {
          e ? e(o, i, t) : t();
        }, function () {
          var r = {
            id: e.id,
            jsonrpc: e.jsonrpc,
            result: i
          };
          null != o ? (r.error = {
            message: o.stack || o.message || o,
            code: -32e3
          }, t(o, r)) : t(null, r);
        });
      }

      !function t(i) {
        if (n += 1, a.unshift(i), n >= r._providers.length) s(new Error('Request for method "' + e.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try {
          r._providers[n].handleRequest(e, t, s);
        } catch (e) {
          s(e);
        }
      }();
    }, h.prototype._setCurrentBlock = function (e) {
      this.currentBlock = e, this.emit("block", e);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(10).inherits,
        i = r(29);

    function o(e) {
      e = e || {}, this.staticResponses = e;
    }

    e.exports = o, n(o, i), o.prototype.handleRequest = function (e, t, r) {
      var n = this.staticResponses[e.method];
      "function" == typeof n ? n(e, t, r) : void 0 !== n ? setTimeout(function () {
        return r(null, n);
      }) : t();
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(47),
        i = r(94),
        o = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, function (e) {
          var t = e.blockTracker,
              r = e.provider;
          e.engine;
          return i({
            blockTracker: t,
            provider: r
          });
        }));
      }

      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e), t;
    }(n);

    e.exports = o;
  }, function (e, t, r) {
    "use strict";

    var n = r(224),
        i = r(225),
        o = r(10).inherits,
        a = r(14),
        s = r(227),
        f = r(40),
        u = r(250),
        c = r(29),
        h = r(251),
        d = /^[0-9A-Fa-f]+$/g;

    function l(e) {
      this.nonceLock = u(1), e.getAccounts && (this.getAccounts = e.getAccounts), e.processTransaction && (this.processTransaction = e.processTransaction), e.processMessage && (this.processMessage = e.processMessage), e.processPersonalMessage && (this.processPersonalMessage = e.processPersonalMessage), e.processTypedMessage && (this.processTypedMessage = e.processTypedMessage), e.processTypedMessageV3 && (this.processTypedMessageV3 = e.processTypedMessageV3), this.approveTransaction = e.approveTransaction || this.autoApprove, this.approveMessage = e.approveMessage || this.autoApprove, this.approvePersonalMessage = e.approvePersonalMessage || this.autoApprove, this.approveTypedMessage = e.approveTypedMessage || this.autoApprove, this.approveTypedMessageV3 = e.approveTypedMessageV3 || this.autoApprove, e.signTransaction && (this.signTransaction = e.signTransaction || v("signTransaction")), e.signMessage && (this.signMessage = e.signMessage || v("signMessage")), e.signPersonalMessage && (this.signPersonalMessage = e.signPersonalMessage || v("signPersonalMessage")), e.signTypedMessage && (this.signTypedMessage = e.signTypedMessage || v("signTypedMessage")), e.signTypedMessageV3 && (this.signTypedMessageV3 = e.signTypedMessageV3 || v("signTypedMessageV3")), e.recoverPersonalSignature && (this.recoverPersonalSignature = e.recoverPersonalSignature), e.publishTransaction && (this.publishTransaction = e.publishTransaction), this.estimateGas = e.estimateGas || this.estimateGas, this.getGasPrice = e.getGasPrice || this.getGasPrice;
    }

    function p(e) {
      return e.toLowerCase();
    }

    function b(e) {
      var t = a.addHexPrefix(e);
      return a.isValidAddress(t);
    }

    function y(e) {
      var t = a.addHexPrefix(e);
      return !a.isValidAddress(t) && g(e);
    }

    function g(e) {
      return "string" == typeof e && "0x" === e.slice(0, 2) && e.slice(2).match(d);
    }

    function v(e) {
      return function (t, r) {
        r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options'));
      };
    }

    e.exports = l, o(l, c), l.prototype.handleRequest = function (e, t, r) {
      var i = this;
      i._parityRequests = {}, i._parityRequestCount = 0;
      var o,
          a = void 0,
          s = void 0,
          u = void 0,
          c = void 0,
          h = void 0;

      switch (e.method) {
        case "eth_coinbase":
          return void i.getAccounts(function (e, t) {
            if (e) return r(e);
            var n = t[0] || null;
            r(null, n);
          });

        case "eth_accounts":
          return void i.getAccounts(function (e, t) {
            if (e) return r(e);
            r(null, t);
          });

        case "eth_sendTransaction":
          return a = e.params[0], void n([function (e) {
            return i.validateTransaction(a, e);
          }, function (e) {
            return i.processTransaction(a, e);
          }], r);

        case "eth_signTransaction":
          return a = e.params[0], void n([function (e) {
            return i.validateTransaction(a, e);
          }, function (e) {
            return i.processSignTransaction(a, e);
          }], r);

        case "eth_sign":
          return y(e.params[1]) && b(e.params[0]) ? (h = e.params[0], c = e.params[1]) : (c = e.params[0], h = e.params[1]), u = e.params[2] || {}, s = f(u, {
            from: h,
            data: c
          }), void n([function (e) {
            return i.validateMessage(s, e);
          }, function (e) {
            return i.processMessage(s, e);
          }], r);

        case "personal_sign":
          return function () {
            var t = e.params[0];

            if (y(e.params[1]) && b(t)) {
              "[message, address]. This was previously handled incorrectly, ", "and has been corrected automatically. ", "Please switch this param order for smooth behavior in the future.", console.warn("The eth_personalSign method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."), h = e.params[0], c = e.params[1];
            } else c = e.params[0], h = e.params[1];

            u = e.params[2] || {}, s = f(u, {
              from: h,
              data: c
            }), n([function (e) {
              return i.validatePersonalMessage(s, e);
            }, function (e) {
              return i.processPersonalMessage(s, e);
            }], r);
          }();

        case "personal_ecRecover":
          return function () {
            c = e.params[0];
            var t = e.params[1];
            u = e.params[2] || {}, s = f(u, {
              sig: t,
              data: c
            }), i.recoverPersonalSignature(s, r);
          }();

        case "eth_signTypedData":
          return !b(e.params[1]) && b(e.params[0]) ? (h = e.params[0], c = e.params[1]) : (c = e.params[0], h = e.params[1]), u = e.params[2] || {}, s = f(u, {
            from: h,
            data: c
          }), void n([function (e) {
            return i.validateTypedMessage(s, e);
          }, function (e) {
            return i.processTypedMessage(s, e);
          }], r);

        case "eth_signTypedData_v3":
          return !b(e.params[1]) && b(e.params[0]) ? (h = e.params[0], c = e.params[1]) : (c = e.params[0], h = e.params[1]), u = e.params[2] || {}, s = f(u, {
            from: h,
            data: c
          }), void n([function (e) {
            return i.validateTypedMessageV3(s, e);
          }, function (e) {
            return i.processTypedMessageV3(s, e);
          }], r);

        case "parity_postTransaction":
          return a = e.params[0], void i.parityPostTransaction(a, r);

        case "parity_postSign":
          return h = e.params[0], c = e.params[1], void i.parityPostSign(h, c, r);

        case "parity_checkRequest":
          return o = e.params[0], void i.parityCheckRequest(o, r);

        case "parity_defaultAccount":
          return void i.getAccounts(function (e, t) {
            if (e) return r(e);
            var n = t[0] || null;
            r(null, n);
          });

        default:
          return void t();
      }
    }, l.prototype.getAccounts = function (e) {
      e(null, []);
    }, l.prototype.processTransaction = function (e, t) {
      var r = this;
      n([function (t) {
        return r.approveTransaction(e, t);
      }, function (e, t) {
        return r.checkApproval("transaction", e, t);
      }, function (t) {
        return r.finalizeAndSubmitTx(e, t);
      }], t);
    }, l.prototype.processSignTransaction = function (e, t) {
      var r = this;
      n([function (t) {
        return r.approveTransaction(e, t);
      }, function (e, t) {
        return r.checkApproval("transaction", e, t);
      }, function (t) {
        return r.finalizeTx(e, t);
      }], t);
    }, l.prototype.processMessage = function (e, t) {
      var r = this;
      n([function (t) {
        return r.approveMessage(e, t);
      }, function (e, t) {
        return r.checkApproval("message", e, t);
      }, function (t) {
        return r.signMessage(e, t);
      }], t);
    }, l.prototype.processPersonalMessage = function (e, t) {
      var r = this;
      n([function (t) {
        return r.approvePersonalMessage(e, t);
      }, function (e, t) {
        return r.checkApproval("message", e, t);
      }, function (t) {
        return r.signPersonalMessage(e, t);
      }], t);
    }, l.prototype.processTypedMessage = function (e, t) {
      var r = this;
      n([function (t) {
        return r.approveTypedMessage(e, t);
      }, function (e, t) {
        return r.checkApproval("message", e, t);
      }, function (t) {
        return r.signTypedMessage(e, t);
      }], t);
    }, l.prototype.processTypedMessageV3 = function (e, t) {
      var r = this;
      n([function (t) {
        return r.approveTypedMessageV3(e, t);
      }, function (e, t) {
        return r.checkApproval("message", e, t);
      }, function (t) {
        return r.signTypedMessageV3(e, t);
      }], t);
    }, l.prototype.autoApprove = function (e, t) {
      t(null, !0);
    }, l.prototype.checkApproval = function (e, t, r) {
      r(t ? null : new Error("User denied " + e + " signature."));
    }, l.prototype.parityPostTransaction = function (e, t) {
      var r = this,
          n = "0x" + r._parityRequestCount.toString(16);

      r._parityRequestCount++, r.emitPayload({
        method: "eth_sendTransaction",
        params: [e]
      }, function (e, t) {
        if (e) r._parityRequests[n] = {
          error: e
        };else {
          var i = t.result;
          r._parityRequests[n] = i;
        }
      }), t(null, n);
    }, l.prototype.parityPostSign = function (e, t, r) {
      var n = this,
          i = "0x" + n._parityRequestCount.toString(16);

      n._parityRequestCount++, n.emitPayload({
        method: "eth_sign",
        params: [e, t]
      }, function (e, t) {
        if (e) n._parityRequests[i] = {
          error: e
        };else {
          var r = t.result;
          n._parityRequests[i] = r;
        }
      }), r(null, i);
    }, l.prototype.parityCheckRequest = function (e, t) {
      var r = this._parityRequests[e] || null;
      return r ? r.error ? t(r.error) : void t(null, r) : t(null, null);
    }, l.prototype.recoverPersonalSignature = function (e, t) {
      var r = void 0;

      try {
        r = s.recoverPersonalSignature(e);
      } catch (e) {
        return t(e);
      }

      t(null, r);
    }, l.prototype.validateTransaction = function (e, t) {
      if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign transaction."));
      this.validateSender(e.from, function (r, n) {
        return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign transaction for this address: "' + e.from + '"'));
      });
    }, l.prototype.validateMessage = function (e, t) {
      if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign message."));
      this.validateSender(e.from, function (r, n) {
        return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "' + e.from + '"'));
      });
    }, l.prototype.validatePersonalMessage = function (e, t) {
      return void 0 === e.from ? t(new Error("Undefined address - from address required to sign personal message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to sign personal message.")) : g(e.data) ? void this.validateSender(e.from, function (r, n) {
        return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "' + e.from + '"'));
      }) : t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."));
    }, l.prototype.validateTypedMessage = function (e, t) {
      return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, function (r, n) {
        return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "' + e.from + '"'));
      });
    }, l.prototype.validateTypedMessageV3 = function (e, t) {
      return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, function (r, n) {
        return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "' + e.from + '"'));
      });
    }, l.prototype.validateSender = function (e, t) {
      if (!e) return t(null, !1);
      this.getAccounts(function (r, n) {
        if (r) return t(r);
        var i = -1 !== n.map(p).indexOf(e.toLowerCase());
        t(null, i);
      });
    }, l.prototype.finalizeAndSubmitTx = function (e, t) {
      var r = this;
      r.nonceLock.take(function () {
        n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r), r.publishTransaction.bind(r)], function (e, n) {
          if (r.nonceLock.leave(), e) return t(e);
          t(null, n);
        });
      });
    }, l.prototype.finalizeTx = function (e, t) {
      var r = this;
      r.nonceLock.take(function () {
        n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r)], function (n, i) {
          if (r.nonceLock.leave(), n) return t(n);
          t(null, {
            raw: i,
            tx: e
          });
        });
      });
    }, l.prototype.publishTransaction = function (e, t) {
      this.emitPayload({
        method: "eth_sendRawTransaction",
        params: [e]
      }, function (e, r) {
        if (e) return t(e);
        t(null, r.result);
      });
    }, l.prototype.estimateGas = function (e, t) {
      h(this.engine, e, t);
    }, l.prototype.getGasPrice = function (e) {
      this.emitPayload({
        method: "eth_gasPrice",
        params: []
      }, function (t, r) {
        if (t) return e(t);
        e(null, r.result);
      });
    }, l.prototype.fillInTxExtras = function (e, t) {
      var r = e.from,
          n = {};
      void 0 === e.gasPrice && (n.gasPrice = this.getGasPrice.bind(this)), void 0 === e.nonce && (n.nonce = this.emitPayload.bind(this, {
        method: "eth_getTransactionCount",
        params: [r, "pending"]
      })), void 0 === e.gas && (n.gas = this.estimateGas.bind(this, function (e) {
        return {
          from: e.from,
          to: e.to,
          value: e.value,
          data: e.data,
          gas: e.gas,
          gasPrice: e.gasPrice,
          nonce: e.nonce
        };
      }(e))), i(n, function (r, n) {
        if (r) return t(r);
        var i = {};
        n.gasPrice && (i.gasPrice = n.gasPrice), n.nonce && (i.nonce = n.nonce.result), n.gas && (i.gas = n.gas), t(null, f(e, i));
      });
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(47),
        i = r(254),
        o = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, function (e) {
          var t = e.blockTracker,
              r = e.provider,
              n = e.engine,
              o = i({
            blockTracker: t,
            provider: r
          }),
              a = o.events,
              s = o.middleware;
          return a.on("notification", function (e) {
            return n.emit("data", null, e);
          }), s;
        }));
      }

      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e), t;
    }(n);

    e.exports = o;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = t.ERR_NOT_IN_IFRAME = t.ERR_CONNECTION_TIMEOUT = t.ERR_CONNECTION_DESTROYED = void 0;
    var n = "message";
    t.ERR_CONNECTION_DESTROYED = "ConnectionDestroyed";
    t.ERR_CONNECTION_TIMEOUT = "ConnectionTimeout";
    t.ERR_NOT_IN_IFRAME = "NotInIframe";

    var i,
        o = {
      "http:": "80",
      "https:": "443"
    },
        a = /^(https?:)?\/\/([^/:]+)(:(\d+))?/,
        s = {
      ERR_CONNECTION_DESTROYED: "ConnectionDestroyed",
      ERR_CONNECTION_TIMEOUT: "ConnectionTimeout",
      ERR_NOT_IN_IFRAME: "NotInIframe",
      Promise: function () {
        try {
          return window ? window.Promise : null;
        } catch (e) {
          return null;
        }
      }(),
      debug: !1
    },
        f = (i = 0, function () {
      return ++i;
    }),
        u = function u() {
      if (s.debug) {
        for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }

        (e = console).log.apply(e, ["[Penpal]"].concat(r));
      }
    },
        c = function c(e) {
      var t = [];
      return e(function () {
        t.forEach(function (e) {
          e();
        });
      }), {
        then: function then(e) {
          t.push(e);
        }
      };
    },
        h = function h(e) {
      return {
        name: e.name,
        message: e.message,
        stack: e.stack
      };
    },
        d = function d(e) {
      var t = new Error();
      return Object.keys(e).forEach(function (r) {
        return t[r] = e[r];
      }), t;
    },
        l = function l(e, t, r, i) {
      var o = t.localName,
          a = t.local,
          c = t.remote,
          h = t.remoteOrigin,
          l = !1;
      u("".concat(o, ": Connecting call sender"));
      i.then(function () {
        l = !0;
      }), r.reduce(function (e, t) {
        return e[t] = function (e) {
          return function () {
            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) {
              r[i] = arguments[i];
            }

            if (u("".concat(o, ": Sending ").concat(e, "() call")), l) {
              var p = new Error("Unable to send ".concat(e, "() call due ") + "to destroyed connection");
              throw p.code = "ConnectionDestroyed", p;
            }

            return new s.Promise(function (t, i) {
              var s = f();
              a.addEventListener(n, function r(f) {
                if (f.source === c && f.origin === h && "reply" === f.data.penpal && f.data.id === s) {
                  u("".concat(o, ": Received ").concat(e, "() reply")), a.removeEventListener(n, r);
                  var l = f.data.returnValue;
                  f.data.returnValueIsError && (l = d(l)), ("fulfilled" === f.data.resolution ? t : i)(l);
                }
              }), c.postMessage({
                penpal: "call",
                id: s,
                methodName: e,
                args: r
              }, h);
            });
          };
        }(t), e;
      }, e);
    },
        p = function p(e, t, r) {
      var i = e.localName,
          o = e.local,
          a = e.remote,
          f = e.remoteOrigin,
          c = !1;
      u("".concat(i, ": Connecting call receiver"));

      var d = function d(e) {
        if (e.source === a && e.origin === f && "call" === e.data.penpal) {
          var r = e.data,
              n = r.methodName,
              o = r.args,
              d = r.id;

          if (u("".concat(i, ": Received ").concat(n, "() call")), n in t) {
            var l = function l(e) {
              return function (t) {
                if (u("".concat(i, ": Sending ").concat(n, "() reply")), c) u("".concat(i, ": Unable to send ").concat(n, "() reply due to destroyed connection"));else {
                  var r = {
                    penpal: "reply",
                    id: d,
                    resolution: e,
                    returnValue: t
                  };
                  "rejected" === e && t instanceof Error && (r.returnValue = h(t), r.returnValueIsError = !0);

                  try {
                    a.postMessage(r, f);
                  } catch (e) {
                    throw "DataCloneError" === e.name && a.postMessage({
                      penpal: "reply",
                      id: d,
                      resolution: "rejected",
                      returnValue: h(e),
                      returnValueIsError: !0
                    }, f), e;
                  }
                }
              };
            };

            new s.Promise(function (e) {
              return e(t[n].apply(t, o));
            }).then(l("fulfilled"), l("rejected"));
          }
        }
      };

      o.addEventListener(n, d), r.then(function () {
        c = !0, o.removeEventListener(n, d);
      });
    };

    s.connectToChild = function (e) {
      var t,
          r = e.url,
          i = e.appendTo,
          f = e.methods,
          h = void 0 === f ? {} : f,
          d = e.timeout,
          b = new c(function (e) {
        t = e;
      }),
          y = window,
          g = document.createElement("iframe");
      (i || document.body).appendChild(g), b.then(function () {
        g.parentNode && g.parentNode.removeChild(g);
      });

      var v = g.contentWindow || g.contentDocument.parentWindow,
          m = function (e) {
        var t,
            r,
            n,
            i = document.location,
            s = a.exec(e);
        s ? (t = s[1] ? s[1] : i.protocol, r = s[2], n = s[4]) : (t = i.protocol, r = i.hostname, n = i.port);
        var f = n && n !== o[t] ? ":".concat(n) : "";
        return "".concat(t, "//").concat(r).concat(f);
      }(r);

      return {
        promise: new s.Promise(function (e, i) {
          var o;
          void 0 !== d && (o = setTimeout(function () {
            var e = new Error("Connection to child timed out after ".concat(d, "ms"));
            e.code = "ConnectionTimeout", i(e), t();
          }, d));

          var a,
              s,
              f = {},
              w = function w(t) {
            if (t.source === v && t.origin === m && "handshake" === t.data.penpal) {
              u("Parent: Received handshake, sending reply"), t.source.postMessage({
                penpal: "handshake-reply",
                methodNames: Object.keys(h)
              }, t.origin);
              var r = {
                localName: "Parent",
                local: y,
                remote: v,
                remoteOrigin: t.origin
              };
              s && s();
              var n = new c(function (e) {
                b.then(e), s = e;
              });
              p(r, h, n), a && a.forEach(function (e) {
                delete f[e];
              }), a = t.data.methodNames, l(f, r, a, b), clearTimeout(o), e(f);
            }
          };

          y.addEventListener(n, w), b.then(function () {
            y.removeEventListener(n, w);
            var e = new Error("Connection destroyed");
            e.code = "ConnectionDestroyed", i(e);
          }), u("Parent: Loading iframe"), g.src = r;
        }),
        iframe: g,
        destroy: t
      };
    }, s.connectToParent = function () {
      var e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = t.parentOrigin,
          i = void 0 === r ? "*" : r,
          o = t.methods,
          a = void 0 === o ? {} : o,
          f = t.timeout;

      if (window === window.top) {
        var h = new Error("connectToParent() must be called within an iframe");
        throw h.code = "NotInIframe", h;
      }

      var d = new c(function (t) {
        e = t;
      }),
          b = window,
          y = b.parent,
          g = new s.Promise(function (t, r) {
        var o;
        void 0 !== f && (o = setTimeout(function () {
          var t = new Error("Connection to parent timed out after ".concat(f, "ms"));
          t.code = "ConnectionTimeout", r(t), e();
        }, f));

        var s = function e(r) {
          if (("*" === i || i === r.origin) && r.source === y && "handshake-reply" === r.data.penpal) {
            u("Child: Received handshake reply"), b.removeEventListener(n, e);
            var s = {
              localName: "Child",
              local: b,
              remote: y,
              remoteOrigin: r.origin
            },
                f = {};
            p(s, a, d), l(f, s, r.data.methodNames, d), clearTimeout(o), t(f);
          }
        };

        b.addEventListener(n, s), d.then(function () {
          b.removeEventListener(n, s);
          var e = new Error("Connection destroyed");
          e.code = "ConnectionDestroyed", r(e);
        }), u("Child: Sending handshake"), y.postMessage({
          penpal: "handshake",
          methodNames: Object.keys(a)
        }, i);
      });
      return {
        promise: g,
        destroy: e
      };
    };
    var b = s;
    t.default = b;
  }, function (e, t) {
    e.exports = function (e) {
      return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
    };
  }, function (e, t) {
    "function" == typeof Object.create ? e.exports = function (e, t) {
      e.super_ = t, e.prototype = Object.create(t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    } : e.exports = function (e, t) {
      e.super_ = t;

      var r = function r() {};

      r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = r(113)(r(129));
  }, function (e, t, r) {
    "use strict";

    var n = r(114),
        i = r(128);

    e.exports = function (e) {
      var t = n(e),
          r = i(e);
      return function (e, n) {
        switch ("string" == typeof e ? e.toLowerCase() : e) {
          case "keccak224":
            return new t(1152, 448, null, 224, n);

          case "keccak256":
            return new t(1088, 512, null, 256, n);

          case "keccak384":
            return new t(832, 768, null, 384, n);

          case "keccak512":
            return new t(576, 1024, null, 512, n);

          case "sha3-224":
            return new t(1152, 448, 6, 224, n);

          case "sha3-256":
            return new t(1088, 512, 6, 256, n);

          case "sha3-384":
            return new t(832, 768, 6, 384, n);

          case "sha3-512":
            return new t(576, 1024, 6, 512, n);

          case "shake128":
            return new r(1344, 256, 31, n);

          case "shake256":
            return new r(1088, 512, 31, n);

          default:
            throw new Error("Invald algorithm: " + e);
        }
      };
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2).Buffer,
        i = r(18).Transform,
        o = r(0);

    e.exports = function (e) {
      function t(t, r, n, o, a) {
        i.call(this, a), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._hashBitLength = o, this._options = a, this._state = new e(), this._state.initialize(t, r), this._finalized = !1;
      }

      return o(t, i), t.prototype._transform = function (e, t, r) {
        var n = null;

        try {
          this.update(e, t);
        } catch (e) {
          n = e;
        }

        r(n);
      }, t.prototype._flush = function (e) {
        var t = null;

        try {
          this.push(this.digest());
        } catch (e) {
          t = e;
        }

        e(t);
      }, t.prototype.update = function (e, t) {
        if (!n.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer");
        if (this._finalized) throw new Error("Digest already called");
        return n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this;
      }, t.prototype.digest = function (e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);

        var t = this._state.squeeze(this._hashBitLength / 8);

        return void 0 !== e && (t = t.toString(e)), this._resetState(), t;
      }, t.prototype._resetState = function () {
        return this._state.initialize(this._rate, this._capacity), this;
      }, t.prototype._clone = function () {
        var e = new t(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
        return this._state.copy(e._state), e._finalized = this._finalized, e;
      }, t;
    };
  }, function (e, t, r) {
    "use strict";

    t.byteLength = function (e) {
      var t = u(e),
          r = t[0],
          n = t[1];
      return 3 * (r + n) / 4 - n;
    }, t.toByteArray = function (e) {
      var t,
          r,
          n = u(e),
          a = n[0],
          s = n[1],
          f = new o(function (e, t, r) {
        return 3 * (t + r) / 4 - r;
      }(0, a, s)),
          c = 0,
          h = s > 0 ? a - 4 : a;

      for (r = 0; r < h; r += 4) {
        t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], f[c++] = t >> 16 & 255, f[c++] = t >> 8 & 255, f[c++] = 255 & t;
      }

      2 === s && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, f[c++] = 255 & t);
      1 === s && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, f[c++] = t >> 8 & 255, f[c++] = 255 & t);
      return f;
    }, t.fromByteArray = function (e) {
      for (var t, r = e.length, i = r % 3, o = [], a = 0, s = r - i; a < s; a += 16383) {
        o.push(c(e, a, a + 16383 > s ? s : a + 16383));
      }

      1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
      return o.join("");
    };

    for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, f = a.length; s < f; ++s) {
      n[s] = a[s], i[a.charCodeAt(s)] = s;
    }

    function u(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4];
    }

    function c(e, t, r) {
      for (var i, o, a = [], s = t; s < r; s += 3) {
        i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
      }

      return a.join("");
    }

    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
  }, function (e, t) {
    t.read = function (e, t, r, n, i) {
      var o,
          a,
          s = 8 * i - n - 1,
          f = (1 << s) - 1,
          u = f >> 1,
          c = -7,
          h = r ? i - 1 : 0,
          d = r ? -1 : 1,
          l = e[t + h];

      for (h += d, o = l & (1 << -c) - 1, l >>= -c, c += s; c > 0; o = 256 * o + e[t + h], h += d, c -= 8) {
        ;
      }

      for (a = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; a = 256 * a + e[t + h], h += d, c -= 8) {
        ;
      }

      if (0 === o) o = 1 - u;else {
        if (o === f) return a ? NaN : 1 / 0 * (l ? -1 : 1);
        a += Math.pow(2, n), o -= u;
      }
      return (l ? -1 : 1) * a * Math.pow(2, o - n);
    }, t.write = function (e, t, r, n, i, o) {
      var a,
          s,
          f,
          u = 8 * o - i - 1,
          c = (1 << u) - 1,
          h = c >> 1,
          d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          l = n ? 0 : o - 1,
          p = n ? 1 : -1,
          b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), (t += a + h >= 1 ? d / f : d * Math.pow(2, 1 - h)) * f >= 2 && (a++, f /= 2), a + h >= c ? (s = 0, a = c) : a + h >= 1 ? (s = (t * f - 1) * Math.pow(2, i), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + l] = 255 & s, l += p, s /= 256, i -= 8) {
        ;
      }

      for (a = a << i | s, u += i; u > 0; e[r + l] = 255 & a, l += p, a /= 256, u -= 8) {
        ;
      }

      e[r + l - p] |= 128 * b;
    };
  }, function (e, t) {
    var r = {}.toString;

    e.exports = Array.isArray || function (e) {
      return "[object Array]" == r.call(e);
    };
  }, function (e, t) {
    var r = {}.toString;

    e.exports = Array.isArray || function (e) {
      return "[object Array]" == r.call(e);
    };
  }, function (e, t) {}, function (e, t, r) {
    "use strict";

    var n = r(31).Buffer,
        i = r(121);
    e.exports = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.head = null, this.tail = null, this.length = 0;
      }

      return e.prototype.push = function (e) {
        var t = {
          data: e,
          next: null
        };
        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
      }, e.prototype.unshift = function (e) {
        var t = {
          data: e,
          next: this.head
        };
        0 === this.length && (this.tail = t), this.head = t, ++this.length;
      }, e.prototype.shift = function () {
        if (0 !== this.length) {
          var e = this.head.data;
          return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
        }
      }, e.prototype.clear = function () {
        this.head = this.tail = null, this.length = 0;
      }, e.prototype.join = function (e) {
        if (0 === this.length) return "";

        for (var t = this.head, r = "" + t.data; t = t.next;) {
          r += e + t.data;
        }

        return r;
      }, e.prototype.concat = function (e) {
        if (0 === this.length) return n.alloc(0);
        if (1 === this.length) return this.head.data;

        for (var t, r, i, o = n.allocUnsafe(e >>> 0), a = this.head, s = 0; a;) {
          t = a.data, r = o, i = s, t.copy(r, i), s += a.data.length, a = a.next;
        }

        return o;
      }, e;
    }(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function () {
      var e = i.inspect({
        length: this.length
      });
      return this.constructor.name + " " + e;
    });
  }, function (e, t) {}, function (e, t, r) {
    (function (e, t) {
      !function (e, r) {
        "use strict";

        if (!e.setImmediate) {
          var n,
              i,
              o,
              a,
              s,
              f = 1,
              u = {},
              c = !1,
              h = e.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(e);
          d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? n = function n(e) {
            t.nextTick(function () {
              p(e);
            });
          } : !function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                  r = e.onmessage;
              return e.onmessage = function () {
                t = !1;
              }, e.postMessage("", "*"), e.onmessage = r, t;
            }
          }() ? e.MessageChannel ? ((o = new MessageChannel()).port1.onmessage = function (e) {
            p(e.data);
          }, n = function n(e) {
            o.port2.postMessage(e);
          }) : h && "onreadystatechange" in h.createElement("script") ? (i = h.documentElement, n = function n(e) {
            var t = h.createElement("script");
            t.onreadystatechange = function () {
              p(e), t.onreadystatechange = null, i.removeChild(t), t = null;
            }, i.appendChild(t);
          }) : n = function n(e) {
            setTimeout(p, 0, e);
          } : (a = "setImmediate$" + Math.random() + "$", s = function s(t) {
            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && p(+t.data.slice(a.length));
          }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), n = function n(t) {
            e.postMessage(a + t, "*");
          }), d.setImmediate = function (e) {
            "function" != typeof e && (e = new Function("" + e));

            for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) {
              t[r] = arguments[r + 1];
            }

            var i = {
              callback: e,
              args: t
            };
            return u[f] = i, n(f), f++;
          }, d.clearImmediate = l;
        }

        function l(e) {
          delete u[e];
        }

        function p(e) {
          if (c) setTimeout(p, 0, e);else {
            var t = u[e];

            if (t) {
              c = !0;

              try {
                !function (e) {
                  var t = e.callback,
                      r = e.args;

                  switch (r.length) {
                    case 0:
                      t();
                      break;

                    case 1:
                      t(r[0]);
                      break;

                    case 2:
                      t(r[0], r[1]);
                      break;

                    case 3:
                      t(r[0], r[1], r[2]);
                      break;

                    default:
                      t.apply(void 0, r);
                  }
                }(t);
              } finally {
                l(e), c = !1;
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self);
    }).call(this, r(5), r(3));
  }, function (e, t, r) {
    "use strict";

    e.exports = o;
    var n = r(61),
        i = Object.create(r(19));

    function o(e) {
      if (!(this instanceof o)) return new o(e);
      n.call(this, e);
    }

    i.inherits = r(0), i.inherits(o, n), o.prototype._transform = function (e, t, r) {
      r(null, e);
    };
  }, function (e, t, r) {
    e.exports = r(32);
  }, function (e, t, r) {
    e.exports = r(11);
  }, function (e, t, r) {
    e.exports = r(30).Transform;
  }, function (e, t, r) {
    e.exports = r(30).PassThrough;
  }, function (e, t, r) {
    "use strict";

    var n = r(2).Buffer,
        i = r(18).Transform,
        o = r(0);

    e.exports = function (e) {
      function t(t, r, n, o) {
        i.call(this, o), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._options = o, this._state = new e(), this._state.initialize(t, r), this._finalized = !1;
      }

      return o(t, i), t.prototype._transform = function (e, t, r) {
        var n = null;

        try {
          this.update(e, t);
        } catch (e) {
          n = e;
        }

        r(n);
      }, t.prototype._flush = function () {}, t.prototype._read = function (e) {
        this.push(this.squeeze(e));
      }, t.prototype.update = function (e, t) {
        if (!n.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer");
        if (this._finalized) throw new Error("Squeeze already called");
        return n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this;
      }, t.prototype.squeeze = function (e, t) {
        this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));

        var r = this._state.squeeze(e);

        return void 0 !== t && (r = r.toString(t)), r;
      }, t.prototype._resetState = function () {
        return this._state.initialize(this._rate, this._capacity), this;
      }, t.prototype._clone = function () {
        var e = new t(this._rate, this._capacity, this._delimitedSuffix, this._options);
        return this._state.copy(e._state), e._finalized = this._finalized, e;
      }, t;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2).Buffer,
        i = r(130);

    function o() {
      this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1;
    }

    o.prototype.initialize = function (e, t) {
      for (var r = 0; r < 50; ++r) {
        this.state[r] = 0;
      }

      this.blockSize = e / 8, this.count = 0, this.squeezing = !1;
    }, o.prototype.absorb = function (e) {
      for (var t = 0; t < e.length; ++t) {
        this.state[~~(this.count / 4)] ^= e[t] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (i.p1600(this.state), this.count = 0);
      }
    }, o.prototype.absorbLastFewBits = function (e) {
      this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8, 0 != (128 & e) && this.count === this.blockSize - 1 && i.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, i.p1600(this.state), this.count = 0, this.squeezing = !0;
    }, o.prototype.squeeze = function (e) {
      this.squeezing || this.absorbLastFewBits(1);

      for (var t = n.alloc(e), r = 0; r < e; ++r) {
        t[r] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (i.p1600(this.state), this.count = 0);
      }

      return t;
    }, o.prototype.copy = function (e) {
      for (var t = 0; t < 50; ++t) {
        e.state[t] = this.state[t];
      }

      e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing;
    }, e.exports = o;
  }, function (e, t, r) {
    "use strict";

    var n = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];

    t.p1600 = function (e) {
      for (var t = 0; t < 24; ++t) {
        var r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            c = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
            d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49],
            l = h ^ (o << 1 | a >>> 31),
            p = d ^ (a << 1 | o >>> 31),
            b = e[0] ^ l,
            y = e[1] ^ p,
            g = e[10] ^ l,
            v = e[11] ^ p,
            m = e[20] ^ l,
            w = e[21] ^ p,
            _ = e[30] ^ l,
            E = e[31] ^ p,
            S = e[40] ^ l,
            A = e[41] ^ p;

        l = r ^ (s << 1 | f >>> 31), p = i ^ (f << 1 | s >>> 31);
        var x = e[2] ^ l,
            k = e[3] ^ p,
            M = e[12] ^ l,
            T = e[13] ^ p,
            I = e[22] ^ l,
            R = e[23] ^ p,
            P = e[32] ^ l,
            L = e[33] ^ p,
            B = e[42] ^ l,
            C = e[43] ^ p;
        l = o ^ (u << 1 | c >>> 31), p = a ^ (c << 1 | u >>> 31);
        var O = e[4] ^ l,
            N = e[5] ^ p,
            j = e[14] ^ l,
            D = e[15] ^ p,
            U = e[24] ^ l,
            z = e[25] ^ p,
            q = e[34] ^ l,
            F = e[35] ^ p,
            K = e[44] ^ l,
            H = e[45] ^ p;
        l = s ^ (h << 1 | d >>> 31), p = f ^ (d << 1 | h >>> 31);
        var V = e[6] ^ l,
            Y = e[7] ^ p,
            W = e[16] ^ l,
            G = e[17] ^ p,
            Z = e[26] ^ l,
            J = e[27] ^ p,
            $ = e[36] ^ l,
            X = e[37] ^ p,
            Q = e[46] ^ l,
            ee = e[47] ^ p;
        l = u ^ (r << 1 | i >>> 31), p = c ^ (i << 1 | r >>> 31);

        var te = e[8] ^ l,
            re = e[9] ^ p,
            ne = e[18] ^ l,
            ie = e[19] ^ p,
            oe = e[28] ^ l,
            ae = e[29] ^ p,
            se = e[38] ^ l,
            fe = e[39] ^ p,
            ue = e[48] ^ l,
            ce = e[49] ^ p,
            he = b,
            de = y,
            le = v << 4 | g >>> 28,
            pe = g << 4 | v >>> 28,
            be = m << 3 | w >>> 29,
            ye = w << 3 | m >>> 29,
            ge = E << 9 | _ >>> 23,
            ve = _ << 9 | E >>> 23,
            me = S << 18 | A >>> 14,
            we = A << 18 | S >>> 14,
            _e = x << 1 | k >>> 31,
            Ee = k << 1 | x >>> 31,
            Se = T << 12 | M >>> 20,
            Ae = M << 12 | T >>> 20,
            xe = I << 10 | R >>> 22,
            ke = R << 10 | I >>> 22,
            Me = L << 13 | P >>> 19,
            Te = P << 13 | L >>> 19,
            Ie = B << 2 | C >>> 30,
            Re = C << 2 | B >>> 30,
            Pe = N << 30 | O >>> 2,
            Le = O << 30 | N >>> 2,
            Be = j << 6 | D >>> 26,
            Ce = D << 6 | j >>> 26,
            Oe = z << 11 | U >>> 21,
            Ne = U << 11 | z >>> 21,
            je = q << 15 | F >>> 17,
            De = F << 15 | q >>> 17,
            Ue = H << 29 | K >>> 3,
            ze = K << 29 | H >>> 3,
            qe = V << 28 | Y >>> 4,
            Fe = Y << 28 | V >>> 4,
            Ke = G << 23 | W >>> 9,
            He = W << 23 | G >>> 9,
            Ve = Z << 25 | J >>> 7,
            Ye = J << 25 | Z >>> 7,
            We = $ << 21 | X >>> 11,
            Ge = X << 21 | $ >>> 11,
            Ze = ee << 24 | Q >>> 8,
            Je = Q << 24 | ee >>> 8,
            $e = te << 27 | re >>> 5,
            Xe = re << 27 | te >>> 5,
            Qe = ne << 20 | ie >>> 12,
            et = ie << 20 | ne >>> 12,
            tt = ae << 7 | oe >>> 25,
            rt = oe << 7 | ae >>> 25,
            nt = se << 8 | fe >>> 24,
            it = fe << 8 | se >>> 24,
            ot = ue << 14 | ce >>> 18,
            at = ce << 14 | ue >>> 18;

        e[0] = he ^ ~Se & Oe, e[1] = de ^ ~Ae & Ne, e[10] = qe ^ ~Qe & be, e[11] = Fe ^ ~et & ye, e[20] = _e ^ ~Be & Ve, e[21] = Ee ^ ~Ce & Ye, e[30] = $e ^ ~le & xe, e[31] = Xe ^ ~pe & ke, e[40] = Pe ^ ~Ke & tt, e[41] = Le ^ ~He & rt, e[2] = Se ^ ~Oe & We, e[3] = Ae ^ ~Ne & Ge, e[12] = Qe ^ ~be & Me, e[13] = et ^ ~ye & Te, e[22] = Be ^ ~Ve & nt, e[23] = Ce ^ ~Ye & it, e[32] = le ^ ~xe & je, e[33] = pe ^ ~ke & De, e[42] = Ke ^ ~tt & ge, e[43] = He ^ ~rt & ve, e[4] = Oe ^ ~We & ot, e[5] = Ne ^ ~Ge & at, e[14] = be ^ ~Me & Ue, e[15] = ye ^ ~Te & ze, e[24] = Ve ^ ~nt & me, e[25] = Ye ^ ~it & we, e[34] = xe ^ ~je & Ze, e[35] = ke ^ ~De & Je, e[44] = tt ^ ~ge & Ie, e[45] = rt ^ ~ve & Re, e[6] = We ^ ~ot & he, e[7] = Ge ^ ~at & de, e[16] = Me ^ ~Ue & qe, e[17] = Te ^ ~ze & Fe, e[26] = nt ^ ~me & _e, e[27] = it ^ ~we & Ee, e[36] = je ^ ~Ze & $e, e[37] = De ^ ~Je & Xe, e[46] = ge ^ ~Ie & Pe, e[47] = ve ^ ~Re & Le, e[8] = ot ^ ~he & Se, e[9] = at ^ ~de & Ae, e[18] = Ue ^ ~qe & Qe, e[19] = ze ^ ~Fe & et, e[28] = me ^ ~_e & Be, e[29] = we ^ ~Ee & Ce, e[38] = Ze ^ ~$e & le, e[39] = Je ^ ~Xe & pe, e[48] = Ie ^ ~Pe & Ke, e[49] = Re ^ ~Le & He, e[0] ^= n[2 * t], e[1] ^= n[2 * t + 1];
      }
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = r(132)(r(136));
  }, function (e, t, r) {
    "use strict";

    var n = r(133),
        i = r(134),
        o = r(62);

    function a(e, t) {
      return void 0 === e ? t : (n.isBoolean(e, o.COMPRESSED_TYPE_INVALID), e);
    }

    e.exports = function (e) {
      return {
        privateKeyVerify: function privateKeyVerify(t) {
          return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), 32 === t.length && e.privateKeyVerify(t);
        },
        privateKeyExport: function privateKeyExport(t, r) {
          n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), r = a(r, !0);
          var s = e.privateKeyExport(t, r);
          return i.privateKeyExport(t, s, r);
        },
        privateKeyImport: function privateKeyImport(t) {
          if (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), (t = i.privateKeyImport(t)) && 32 === t.length && e.privateKeyVerify(t)) return t;
          throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL);
        },
        privateKeyNegate: function privateKeyNegate(t) {
          return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), e.privateKeyNegate(t);
        },
        privateKeyModInverse: function privateKeyModInverse(t) {
          return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), e.privateKeyModInverse(t);
        },
        privateKeyTweakAdd: function privateKeyTweakAdd(t, r) {
          return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), e.privateKeyTweakAdd(t, r);
        },
        privateKeyTweakMul: function privateKeyTweakMul(t, r) {
          return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), e.privateKeyTweakMul(t, r);
        },
        publicKeyCreate: function publicKeyCreate(t, r) {
          return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), r = a(r, !0), e.publicKeyCreate(t, r);
        },
        publicKeyConvert: function publicKeyConvert(t, r) {
          return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), r = a(r, !0), e.publicKeyConvert(t, r);
        },
        publicKeyVerify: function publicKeyVerify(t) {
          return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), e.publicKeyVerify(t);
        },
        publicKeyTweakAdd: function publicKeyTweakAdd(t, r, i) {
          return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), i = a(i, !0), e.publicKeyTweakAdd(t, r, i);
        },
        publicKeyTweakMul: function publicKeyTweakMul(t, r, i) {
          return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), i = a(i, !0), e.publicKeyTweakMul(t, r, i);
        },
        publicKeyCombine: function publicKeyCombine(t, r) {
          n.isArray(t, o.EC_PUBLIC_KEYS_TYPE_INVALID), n.isLengthGTZero(t, o.EC_PUBLIC_KEYS_LENGTH_INVALID);

          for (var i = 0; i < t.length; ++i) {
            n.isBuffer(t[i], o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t[i], 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID);
          }

          return r = a(r, !0), e.publicKeyCombine(t, r);
        },
        signatureNormalize: function signatureNormalize(t) {
          return n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), e.signatureNormalize(t);
        },
        signatureExport: function signatureExport(t) {
          n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID);
          var r = e.signatureExport(t);
          return i.signatureExport(r);
        },
        signatureImport: function signatureImport(t) {
          n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID);
          var r = i.signatureImport(t);
          if (r) return e.signatureImport(r);
          throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
        },
        signatureImportLax: function signatureImportLax(t) {
          n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID);
          var r = i.signatureImportLax(t);
          if (r) return e.signatureImport(r);
          throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
        },
        sign: function sign(t, r, i) {
          n.isBuffer(t, o.MSG32_TYPE_INVALID), n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID);
          var a = null,
              s = null;
          return void 0 !== i && (n.isObject(i, o.OPTIONS_TYPE_INVALID), void 0 !== i.data && (n.isBuffer(i.data, o.OPTIONS_DATA_TYPE_INVALID), n.isBufferLength(i.data, 32, o.OPTIONS_DATA_LENGTH_INVALID), a = i.data), void 0 !== i.noncefn && (n.isFunction(i.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID), s = i.noncefn)), e.sign(t, r, s, a);
        },
        verify: function verify(t, r, i) {
          return n.isBuffer(t, o.MSG32_TYPE_INVALID), n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), n.isBuffer(i, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(i, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), e.verify(t, r, i);
        },
        recover: function recover(t, r, i, s) {
          return n.isBuffer(t, o.MSG32_TYPE_INVALID), n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), n.isNumber(i, o.RECOVERY_ID_TYPE_INVALID), n.isNumberInInterval(i, -1, 4, o.RECOVERY_ID_VALUE_INVALID), s = a(s, !0), e.recover(t, r, i, s);
        },
        ecdh: function ecdh(t, r) {
          return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), e.ecdh(t, r);
        },
        ecdhUnsafe: function ecdhUnsafe(t, r, i) {
          return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), i = a(i, !0), e.ecdhUnsafe(t, r, i);
        }
      };
    };
  }, function (e, t, r) {
    "use strict";

    (function (e) {
      var r = Object.prototype.toString;
      t.isArray = function (e, t) {
        if (!Array.isArray(e)) throw TypeError(t);
      }, t.isBoolean = function (e, t) {
        if ("[object Boolean]" !== r.call(e)) throw TypeError(t);
      }, t.isBuffer = function (t, r) {
        if (!e.isBuffer(t)) throw TypeError(r);
      }, t.isFunction = function (e, t) {
        if ("[object Function]" !== r.call(e)) throw TypeError(t);
      }, t.isNumber = function (e, t) {
        if ("[object Number]" !== r.call(e)) throw TypeError(t);
      }, t.isObject = function (e, t) {
        if ("[object Object]" !== r.call(e)) throw TypeError(t);
      }, t.isBufferLength = function (e, t, r) {
        if (e.length !== t) throw RangeError(r);
      }, t.isBufferLength2 = function (e, t, r, n) {
        if (e.length !== t && e.length !== r) throw RangeError(n);
      }, t.isLengthGTZero = function (e, t) {
        if (0 === e.length) throw RangeError(t);
      }, t.isNumberInInterval = function (e, t, r, n) {
        if (e <= t || e >= r) throw RangeError(n);
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    "use strict";

    var n = r(2).Buffer,
        i = r(135),
        o = n.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        a = n.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    t.privateKeyExport = function (e, t, r) {
      var i = n.from(r ? o : a);
      return e.copy(i, r ? 8 : 9), t.copy(i, r ? 181 : 214), i;
    }, t.privateKeyImport = function (e) {
      var t = e.length,
          r = 0;

      if (!(t < r + 1 || 48 !== e[r]) && !(t < (r += 1) + 1) && 128 & e[r]) {
        var n = 127 & e[r];

        if (r += 1, !(n < 1 || n > 2 || t < r + n)) {
          var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
          if (!(t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1])) return e.slice(r + 2, r + 2 + e[r + 1]);
        }
      }
    }, t.signatureExport = function (e) {
      for (var t = n.concat([n.from([0]), e.r]), r = 33, o = 0; r > 1 && 0 === t[o] && !(128 & t[o + 1]); --r, ++o) {
        ;
      }

      for (var a = n.concat([n.from([0]), e.s]), s = 33, f = 0; s > 1 && 0 === a[f] && !(128 & a[f + 1]); --s, ++f) {
        ;
      }

      return i.encode(t.slice(o), a.slice(f));
    }, t.signatureImport = function (e) {
      var t = n.alloc(32, 0),
          r = n.alloc(32, 0);

      try {
        var o = i.decode(e);
        if (33 === o.r.length && 0 === o.r[0] && (o.r = o.r.slice(1)), o.r.length > 32) throw new Error("R length is too long");
        if (33 === o.s.length && 0 === o.s[0] && (o.s = o.s.slice(1)), o.s.length > 32) throw new Error("S length is too long");
      } catch (e) {
        return;
      }

      return o.r.copy(t, 32 - o.r.length), o.s.copy(r, 32 - o.s.length), {
        r: t,
        s: r
      };
    }, t.signatureImportLax = function (e) {
      var t = n.alloc(32, 0),
          r = n.alloc(32, 0),
          i = e.length,
          o = 0;

      if (48 === e[o++]) {
        var a = e[o++];

        if (!(128 & a && (o += a - 128) > i) && 2 === e[o++]) {
          var s = e[o++];

          if (128 & s) {
            if (o + (a = s - 128) > i) return;

            for (; a > 0 && 0 === e[o]; o += 1, a -= 1) {
              ;
            }

            for (s = 0; a > 0; o += 1, a -= 1) {
              s = (s << 8) + e[o];
            }
          }

          if (!(s > i - o)) {
            var f = o;

            if (o += s, 2 === e[o++]) {
              var u = e[o++];

              if (128 & u) {
                if (o + (a = u - 128) > i) return;

                for (; a > 0 && 0 === e[o]; o += 1, a -= 1) {
                  ;
                }

                for (u = 0; a > 0; o += 1, a -= 1) {
                  u = (u << 8) + e[o];
                }
              }

              if (!(u > i - o)) {
                var c = o;

                for (o += u; s > 0 && 0 === e[f]; s -= 1, f += 1) {
                  ;
                }

                if (!(s > 32)) {
                  var h = e.slice(f, f + s);

                  for (h.copy(t, 32 - h.length); u > 0 && 0 === e[c]; u -= 1, c += 1) {
                    ;
                  }

                  if (!(u > 32)) {
                    var d = e.slice(c, c + u);
                    return d.copy(r, 32 - d.length), {
                      r: t,
                      s: r
                    };
                  }
                }
              }
            }
          }
        }
      }
    };
  }, function (e, t, r) {
    var n = r(2).Buffer;
    e.exports = {
      check: function check(e) {
        if (e.length < 8) return !1;
        if (e.length > 72) return !1;
        if (48 !== e[0]) return !1;
        if (e[1] !== e.length - 2) return !1;
        if (2 !== e[2]) return !1;
        var t = e[3];
        if (0 === t) return !1;
        if (5 + t >= e.length) return !1;
        if (2 !== e[4 + t]) return !1;
        var r = e[5 + t];
        return 0 !== r && 6 + t + r === e.length && !(128 & e[4]) && !(t > 1 && 0 === e[4] && !(128 & e[5])) && !(128 & e[t + 6]) && !(r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]));
      },
      decode: function decode(e) {
        if (e.length < 8) throw new Error("DER sequence length is too short");
        if (e.length > 72) throw new Error("DER sequence length is too long");
        if (48 !== e[0]) throw new Error("Expected DER sequence");
        if (e[1] !== e.length - 2) throw new Error("DER sequence length is invalid");
        if (2 !== e[2]) throw new Error("Expected DER integer");
        var t = e[3];
        if (0 === t) throw new Error("R length is zero");
        if (5 + t >= e.length) throw new Error("R length is too long");
        if (2 !== e[4 + t]) throw new Error("Expected DER integer (2)");
        var r = e[5 + t];
        if (0 === r) throw new Error("S length is zero");
        if (6 + t + r !== e.length) throw new Error("S length is invalid");
        if (128 & e[4]) throw new Error("R value is negative");
        if (t > 1 && 0 === e[4] && !(128 & e[5])) throw new Error("R value excessively padded");
        if (128 & e[t + 6]) throw new Error("S value is negative");
        if (r > 1 && 0 === e[t + 6] && !(128 & e[t + 7])) throw new Error("S value excessively padded");
        return {
          r: e.slice(4, 4 + t),
          s: e.slice(6 + t)
        };
      },
      encode: function encode(e, t) {
        var r = e.length,
            i = t.length;
        if (0 === r) throw new Error("R length is zero");
        if (0 === i) throw new Error("S length is zero");
        if (r > 33) throw new Error("R length is too long");
        if (i > 33) throw new Error("S length is too long");
        if (128 & e[0]) throw new Error("R value is negative");
        if (128 & t[0]) throw new Error("S value is negative");
        if (r > 1 && 0 === e[0] && !(128 & e[1])) throw new Error("R value excessively padded");
        if (i > 1 && 0 === t[0] && !(128 & t[1])) throw new Error("S value excessively padded");
        var o = n.allocUnsafe(6 + r + i);
        return o[0] = 48, o[1] = o.length - 2, o[2] = 2, o[3] = e.length, e.copy(o, 4), o[4 + r] = 2, o[5 + r] = t.length, t.copy(o, 6 + r), o;
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2).Buffer,
        i = r(34),
        o = r(4),
        a = r(36).ec,
        s = r(62),
        f = new a("secp256k1"),
        u = f.curve;

    function c(e) {
      var t = e[0];

      switch (t) {
        case 2:
        case 3:
          return 33 !== e.length ? null : function (e, t) {
            var r = new o(t);
            if (r.cmp(u.p) >= 0) return null;
            var n = (r = r.toRed(u.red)).redSqr().redIMul(r).redIAdd(u.b).redSqrt();
            return 3 === e !== n.isOdd() && (n = n.redNeg()), f.keyPair({
              pub: {
                x: r,
                y: n
              }
            });
          }(t, e.slice(1, 33));

        case 4:
        case 6:
        case 7:
          return 65 !== e.length ? null : function (e, t, r) {
            var n = new o(t),
                i = new o(r);
            if (n.cmp(u.p) >= 0 || i.cmp(u.p) >= 0) return null;
            if (n = n.toRed(u.red), i = i.toRed(u.red), (6 === e || 7 === e) && i.isOdd() !== (7 === e)) return null;
            var a = n.redSqr().redIMul(n);
            return i.redSqr().redISub(a.redIAdd(u.b)).isZero() ? f.keyPair({
              pub: {
                x: n,
                y: i
              }
            }) : null;
          }(t, e.slice(1, 33), e.slice(33, 65));

        default:
          return null;
      }
    }

    t.privateKeyVerify = function (e) {
      var t = new o(e);
      return t.cmp(u.n) < 0 && !t.isZero();
    }, t.privateKeyExport = function (e, t) {
      var r = new o(e);
      if (r.cmp(u.n) >= 0 || r.isZero()) throw new Error(s.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
      return n.from(f.keyFromPrivate(e).getPublic(t, !0));
    }, t.privateKeyNegate = function (e) {
      var t = new o(e);
      return t.isZero() ? n.alloc(32) : u.n.sub(t).umod(u.n).toArrayLike(n, "be", 32);
    }, t.privateKeyModInverse = function (e) {
      var t = new o(e);
      if (t.cmp(u.n) >= 0 || t.isZero()) throw new Error(s.EC_PRIVATE_KEY_RANGE_INVALID);
      return t.invm(u.n).toArrayLike(n, "be", 32);
    }, t.privateKeyTweakAdd = function (e, t) {
      var r = new o(t);
      if (r.cmp(u.n) >= 0) throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
      if (r.iadd(new o(e)), r.cmp(u.n) >= 0 && r.isub(u.n), r.isZero()) throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
      return r.toArrayLike(n, "be", 32);
    }, t.privateKeyTweakMul = function (e, t) {
      var r = new o(t);
      if (r.cmp(u.n) >= 0 || r.isZero()) throw new Error(s.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
      return r.imul(new o(e)), r.cmp(u.n) && (r = r.umod(u.n)), r.toArrayLike(n, "be", 32);
    }, t.publicKeyCreate = function (e, t) {
      var r = new o(e);
      if (r.cmp(u.n) >= 0 || r.isZero()) throw new Error(s.EC_PUBLIC_KEY_CREATE_FAIL);
      return n.from(f.keyFromPrivate(e).getPublic(t, !0));
    }, t.publicKeyConvert = function (e, t) {
      var r = c(e);
      if (null === r) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
      return n.from(r.getPublic(t, !0));
    }, t.publicKeyVerify = function (e) {
      return null !== c(e);
    }, t.publicKeyTweakAdd = function (e, t, r) {
      var i = c(e);
      if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
      if ((t = new o(t)).cmp(u.n) >= 0) throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
      var a = u.g.mul(t).add(i.pub);
      if (a.isInfinity()) throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
      return n.from(a.encode(!0, r));
    }, t.publicKeyTweakMul = function (e, t, r) {
      var i = c(e);
      if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
      if ((t = new o(t)).cmp(u.n) >= 0 || t.isZero()) throw new Error(s.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
      return n.from(i.pub.mul(t).encode(!0, r));
    }, t.publicKeyCombine = function (e, t) {
      for (var r = new Array(e.length), i = 0; i < e.length; ++i) {
        if (r[i] = c(e[i]), null === r[i]) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
      }

      for (var o = r[0].pub, a = 1; a < r.length; ++a) {
        o = o.add(r[a].pub);
      }

      if (o.isInfinity()) throw new Error(s.EC_PUBLIC_KEY_COMBINE_FAIL);
      return n.from(o.encode(!0, t));
    }, t.signatureNormalize = function (e) {
      var t = new o(e.slice(0, 32)),
          r = new o(e.slice(32, 64));
      if (t.cmp(u.n) >= 0 || r.cmp(u.n) >= 0) throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
      var i = n.from(e);
      return 1 === r.cmp(f.nh) && u.n.sub(r).toArrayLike(n, "be", 32).copy(i, 32), i;
    }, t.signatureExport = function (e) {
      var t = e.slice(0, 32),
          r = e.slice(32, 64);
      if (new o(t).cmp(u.n) >= 0 || new o(r).cmp(u.n) >= 0) throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
      return {
        r: t,
        s: r
      };
    }, t.signatureImport = function (e) {
      var t = new o(e.r);
      t.cmp(u.n) >= 0 && (t = new o(0));
      var r = new o(e.s);
      return r.cmp(u.n) >= 0 && (r = new o(0)), n.concat([t.toArrayLike(n, "be", 32), r.toArrayLike(n, "be", 32)]);
    }, t.sign = function (e, t, r, i) {
      if ("function" == typeof r) {
        var a = r;

        r = function r(_r3) {
          var f = a(e, t, null, i, _r3);
          if (!n.isBuffer(f) || 32 !== f.length) throw new Error(s.ECDSA_SIGN_FAIL);
          return new o(f);
        };
      }

      var c = new o(t);
      if (c.cmp(u.n) >= 0 || c.isZero()) throw new Error(s.ECDSA_SIGN_FAIL);
      var h = f.sign(e, t, {
        canonical: !0,
        k: r,
        pers: i
      });
      return {
        signature: n.concat([h.r.toArrayLike(n, "be", 32), h.s.toArrayLike(n, "be", 32)]),
        recovery: h.recoveryParam
      };
    }, t.verify = function (e, t, r) {
      var n = {
        r: t.slice(0, 32),
        s: t.slice(32, 64)
      },
          i = new o(n.r),
          a = new o(n.s);
      if (i.cmp(u.n) >= 0 || a.cmp(u.n) >= 0) throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
      if (1 === a.cmp(f.nh) || i.isZero() || a.isZero()) return !1;
      var h = c(r);
      if (null === h) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
      return f.verify(e, n, {
        x: h.pub.x,
        y: h.pub.y
      });
    }, t.recover = function (e, t, r, i) {
      var a = {
        r: t.slice(0, 32),
        s: t.slice(32, 64)
      },
          c = new o(a.r),
          h = new o(a.s);
      if (c.cmp(u.n) >= 0 || h.cmp(u.n) >= 0) throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);

      try {
        if (c.isZero() || h.isZero()) throw new Error();
        var d = f.recoverPubKey(e, a, r);
        return n.from(d.encode(!0, i));
      } catch (e) {
        throw new Error(s.ECDSA_RECOVER_FAIL);
      }
    }, t.ecdh = function (e, r) {
      var n = t.ecdhUnsafe(e, r, !0);
      return i("sha256").update(n).digest();
    }, t.ecdhUnsafe = function (e, t, r) {
      var i = c(e);
      if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
      var a = new o(t);
      if (a.cmp(u.n) >= 0 || a.isZero()) throw new Error(s.ECDH_FAIL);
      return n.from(i.pub.mul(a).encode(!0, r));
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(63),
        o = r(2).Buffer,
        a = new Array(16);

    function s() {
      i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
    }

    function f(e, t) {
      return e << t | e >>> 32 - t;
    }

    function u(e, t, r, n, i, o, a) {
      return f(e + (t & r | ~t & n) + i + o | 0, a) + t | 0;
    }

    function c(e, t, r, n, i, o, a) {
      return f(e + (t & n | r & ~n) + i + o | 0, a) + t | 0;
    }

    function h(e, t, r, n, i, o, a) {
      return f(e + (t ^ r ^ n) + i + o | 0, a) + t | 0;
    }

    function d(e, t, r, n, i, o, a) {
      return f(e + (r ^ (t | ~n)) + i + o | 0, a) + t | 0;
    }

    n(s, i), s.prototype._update = function () {
      for (var e = a, t = 0; t < 16; ++t) {
        e[t] = this._block.readInt32LE(4 * t);
      }

      var r = this._a,
          n = this._b,
          i = this._c,
          o = this._d;
      r = u(r, n, i, o, e[0], 3614090360, 7), o = u(o, r, n, i, e[1], 3905402710, 12), i = u(i, o, r, n, e[2], 606105819, 17), n = u(n, i, o, r, e[3], 3250441966, 22), r = u(r, n, i, o, e[4], 4118548399, 7), o = u(o, r, n, i, e[5], 1200080426, 12), i = u(i, o, r, n, e[6], 2821735955, 17), n = u(n, i, o, r, e[7], 4249261313, 22), r = u(r, n, i, o, e[8], 1770035416, 7), o = u(o, r, n, i, e[9], 2336552879, 12), i = u(i, o, r, n, e[10], 4294925233, 17), n = u(n, i, o, r, e[11], 2304563134, 22), r = u(r, n, i, o, e[12], 1804603682, 7), o = u(o, r, n, i, e[13], 4254626195, 12), i = u(i, o, r, n, e[14], 2792965006, 17), r = c(r, n = u(n, i, o, r, e[15], 1236535329, 22), i, o, e[1], 4129170786, 5), o = c(o, r, n, i, e[6], 3225465664, 9), i = c(i, o, r, n, e[11], 643717713, 14), n = c(n, i, o, r, e[0], 3921069994, 20), r = c(r, n, i, o, e[5], 3593408605, 5), o = c(o, r, n, i, e[10], 38016083, 9), i = c(i, o, r, n, e[15], 3634488961, 14), n = c(n, i, o, r, e[4], 3889429448, 20), r = c(r, n, i, o, e[9], 568446438, 5), o = c(o, r, n, i, e[14], 3275163606, 9), i = c(i, o, r, n, e[3], 4107603335, 14), n = c(n, i, o, r, e[8], 1163531501, 20), r = c(r, n, i, o, e[13], 2850285829, 5), o = c(o, r, n, i, e[2], 4243563512, 9), i = c(i, o, r, n, e[7], 1735328473, 14), r = h(r, n = c(n, i, o, r, e[12], 2368359562, 20), i, o, e[5], 4294588738, 4), o = h(o, r, n, i, e[8], 2272392833, 11), i = h(i, o, r, n, e[11], 1839030562, 16), n = h(n, i, o, r, e[14], 4259657740, 23), r = h(r, n, i, o, e[1], 2763975236, 4), o = h(o, r, n, i, e[4], 1272893353, 11), i = h(i, o, r, n, e[7], 4139469664, 16), n = h(n, i, o, r, e[10], 3200236656, 23), r = h(r, n, i, o, e[13], 681279174, 4), o = h(o, r, n, i, e[0], 3936430074, 11), i = h(i, o, r, n, e[3], 3572445317, 16), n = h(n, i, o, r, e[6], 76029189, 23), r = h(r, n, i, o, e[9], 3654602809, 4), o = h(o, r, n, i, e[12], 3873151461, 11), i = h(i, o, r, n, e[15], 530742520, 16), r = d(r, n = h(n, i, o, r, e[2], 3299628645, 23), i, o, e[0], 4096336452, 6), o = d(o, r, n, i, e[7], 1126891415, 10), i = d(i, o, r, n, e[14], 2878612391, 15), n = d(n, i, o, r, e[5], 4237533241, 21), r = d(r, n, i, o, e[12], 1700485571, 6), o = d(o, r, n, i, e[3], 2399980690, 10), i = d(i, o, r, n, e[10], 4293915773, 15), n = d(n, i, o, r, e[1], 2240044497, 21), r = d(r, n, i, o, e[8], 1873313359, 6), o = d(o, r, n, i, e[15], 4264355552, 10), i = d(i, o, r, n, e[6], 2734768916, 15), n = d(n, i, o, r, e[13], 1309151649, 21), r = d(r, n, i, o, e[4], 4149444226, 6), o = d(o, r, n, i, e[11], 3174756917, 10), i = d(i, o, r, n, e[2], 718787259, 15), n = d(n, i, o, r, e[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + o | 0;
    }, s.prototype._digest = function () {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var e = o.allocUnsafe(16);
      return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e;
    }, e.exports = s;
  }, function (e, t, r) {
    (t = e.exports = r(64)).Stream = t, t.Readable = t, t.Writable = r(68), t.Duplex = r(16), t.Transform = r(69), t.PassThrough = r(144), t.finished = r(35), t.pipeline = r(145);
  }, function (e, t) {}, function (e, t, r) {
    "use strict";

    function n(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function i(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function o(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var a = r(1).Buffer,
        s = r(141).inspect,
        f = s && s.custom || "inspect";

    e.exports = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.head = null, this.tail = null, this.length = 0;
      }

      var t, r, u;
      return t = e, (r = [{
        key: "push",
        value: function value(e) {
          var t = {
            data: e,
            next: null
          };
          this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
        }
      }, {
        key: "unshift",
        value: function value(e) {
          var t = {
            data: e,
            next: this.head
          };
          0 === this.length && (this.tail = t), this.head = t, ++this.length;
        }
      }, {
        key: "shift",
        value: function value() {
          if (0 !== this.length) {
            var e = this.head.data;
            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
          }
        }
      }, {
        key: "clear",
        value: function value() {
          this.head = this.tail = null, this.length = 0;
        }
      }, {
        key: "join",
        value: function value(e) {
          if (0 === this.length) return "";

          for (var t = this.head, r = "" + t.data; t = t.next;) {
            r += e + t.data;
          }

          return r;
        }
      }, {
        key: "concat",
        value: function value(e) {
          if (0 === this.length) return a.alloc(0);

          for (var t, r, n, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0; o;) {
            t = o.data, r = i, n = s, a.prototype.copy.call(t, r, n), s += o.data.length, o = o.next;
          }

          return i;
        }
      }, {
        key: "consume",
        value: function value(e, t) {
          var r;
          return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r;
        }
      }, {
        key: "first",
        value: function value() {
          return this.head.data;
        }
      }, {
        key: "_getString",
        value: function value(e) {
          var t = this.head,
              r = 1,
              n = t.data;

          for (e -= n.length; t = t.next;) {
            var i = t.data,
                o = e > i.length ? i.length : e;

            if (o === i.length ? n += i : n += i.slice(0, e), 0 == (e -= o)) {
              o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
              break;
            }

            ++r;
          }

          return this.length -= r, n;
        }
      }, {
        key: "_getBuffer",
        value: function value(e) {
          var t = a.allocUnsafe(e),
              r = this.head,
              n = 1;

          for (r.data.copy(t), e -= r.data.length; r = r.next;) {
            var i = r.data,
                o = e > i.length ? i.length : e;

            if (i.copy(t, t.length - e, 0, o), 0 == (e -= o)) {
              o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
              break;
            }

            ++n;
          }

          return this.length -= n, t;
        }
      }, {
        key: f,
        value: function value(e, t) {
          return s(this, function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? n(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
            }

            return e;
          }({}, t, {
            depth: 0,
            customInspect: !1
          }));
        }
      }]) && o(t.prototype, r), u && o(t, u), e;
    }();
  }, function (e, t) {}, function (e, t, r) {
    "use strict";

    (function (t) {
      var n;

      function i(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e;
      }

      var o = r(35),
          a = Symbol("lastResolve"),
          s = Symbol("lastReject"),
          f = Symbol("error"),
          u = Symbol("ended"),
          c = Symbol("lastPromise"),
          h = Symbol("handlePromise"),
          d = Symbol("stream");

      function l(e, t) {
        return {
          value: e,
          done: t
        };
      }

      function p(e) {
        var t = e[a];

        if (null !== t) {
          var r = e[d].read();
          null !== r && (e[c] = null, e[a] = null, e[s] = null, t(l(r, !1)));
        }
      }

      function b(e) {
        t.nextTick(p, e);
      }

      var y = Object.getPrototypeOf(function () {}),
          g = Object.setPrototypeOf((i(n = {
        get stream() {
          return this[d];
        },

        next: function next() {
          var e = this,
              r = this[f];
          if (null !== r) return Promise.reject(r);
          if (this[u]) return Promise.resolve(l(void 0, !0));
          if (this[d].destroyed) return new Promise(function (r, n) {
            t.nextTick(function () {
              e[f] ? n(e[f]) : r(l(void 0, !0));
            });
          });
          var n,
              i = this[c];
          if (i) n = new Promise(function (e, t) {
            return function (r, n) {
              e.then(function () {
                t[u] ? r(l(void 0, !0)) : t[h](r, n);
              }, n);
            };
          }(i, this));else {
            var o = this[d].read();
            if (null !== o) return Promise.resolve(l(o, !1));
            n = new Promise(this[h]);
          }
          return this[c] = n, n;
        }
      }, Symbol.asyncIterator, function () {
        return this;
      }), i(n, "return", function () {
        var e = this;
        return new Promise(function (t, r) {
          e[d].destroy(null, function (e) {
            e ? r(e) : t(l(void 0, !0));
          });
        });
      }), n), y);

      e.exports = function (e) {
        var t,
            r = Object.create(g, (i(t = {}, d, {
          value: e,
          writable: !0
        }), i(t, a, {
          value: null,
          writable: !0
        }), i(t, s, {
          value: null,
          writable: !0
        }), i(t, f, {
          value: null,
          writable: !0
        }), i(t, u, {
          value: e._readableState.endEmitted,
          writable: !0
        }), i(t, h, {
          value: function value(e, t) {
            var n = r[d].read();
            n ? (r[c] = null, r[a] = null, r[s] = null, e(l(n, !1))) : (r[a] = e, r[s] = t);
          },
          writable: !0
        }), t));
        return r[c] = null, o(e, function (e) {
          if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
            var t = r[s];
            return null !== t && (r[c] = null, r[a] = null, r[s] = null, t(e)), void (r[f] = e);
          }

          var n = r[a];
          null !== n && (r[c] = null, r[a] = null, r[s] = null, n(l(void 0, !0))), r[u] = !0;
        }), e.on("readable", b.bind(null, r)), r;
      };
    }).call(this, r(3));
  }, function (e, t) {
    e.exports = function () {
      throw new Error("Readable.from is not available in the browser");
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = i;
    var n = r(69);

    function i(e) {
      if (!(this instanceof i)) return new i(e);
      n.call(this, e);
    }

    r(0)(i, n), i.prototype._transform = function (e, t, r) {
      r(null, e);
    };
  }, function (e, t, r) {
    "use strict";

    var n;
    var i = r(15).codes,
        o = i.ERR_MISSING_ARGS,
        a = i.ERR_STREAM_DESTROYED;

    function s(e) {
      if (e) throw e;
    }

    function f(e, t, i, o) {
      o = function (e) {
        var t = !1;
        return function () {
          t || (t = !0, e.apply(void 0, arguments));
        };
      }(o);

      var s = !1;
      e.on("close", function () {
        s = !0;
      }), void 0 === n && (n = r(35)), n(e, {
        readable: t,
        writable: i
      }, function (e) {
        if (e) return o(e);
        s = !0, o();
      });
      var f = !1;
      return function (t) {
        if (!s && !f) return f = !0, function (e) {
          return e.setHeader && "function" == typeof e.abort;
        }(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void o(t || new a("pipe"));
      };
    }

    function u(e) {
      e();
    }

    function c(e, t) {
      return e.pipe(t);
    }

    function h(e) {
      return e.length ? "function" != typeof e[e.length - 1] ? s : e.pop() : s;
    }

    e.exports = function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
      }

      var n,
          i = h(t);
      if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new o("streams");
      var a = t.map(function (e, r) {
        var o = r < t.length - 1;
        return f(e, o, r > 0, function (e) {
          n || (n = e), e && a.forEach(u), o || (a.forEach(u), i(n));
        });
      });
      return t.reduce(c);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(1).Buffer,
        i = r(0),
        o = r(63),
        a = new Array(16),
        s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        f = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        u = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        c = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
        h = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        d = [1352829926, 1548603684, 1836072691, 2053994217, 0];

    function l() {
      o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
    }

    function p(e, t) {
      return e << t | e >>> 32 - t;
    }

    function b(e, t, r, n, i, o, a, s) {
      return p(e + (t ^ r ^ n) + o + a | 0, s) + i | 0;
    }

    function y(e, t, r, n, i, o, a, s) {
      return p(e + (t & r | ~t & n) + o + a | 0, s) + i | 0;
    }

    function g(e, t, r, n, i, o, a, s) {
      return p(e + ((t | ~r) ^ n) + o + a | 0, s) + i | 0;
    }

    function v(e, t, r, n, i, o, a, s) {
      return p(e + (t & n | r & ~n) + o + a | 0, s) + i | 0;
    }

    function m(e, t, r, n, i, o, a, s) {
      return p(e + (t ^ (r | ~n)) + o + a | 0, s) + i | 0;
    }

    i(l, o), l.prototype._update = function () {
      for (var e = a, t = 0; t < 16; ++t) {
        e[t] = this._block.readInt32LE(4 * t);
      }

      for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, l = 0 | this._e, w = 0 | this._a, _ = 0 | this._b, E = 0 | this._c, S = 0 | this._d, A = 0 | this._e, x = 0; x < 80; x += 1) {
        var k, M;
        x < 16 ? (k = b(r, n, i, o, l, e[s[x]], h[0], u[x]), M = m(w, _, E, S, A, e[f[x]], d[0], c[x])) : x < 32 ? (k = y(r, n, i, o, l, e[s[x]], h[1], u[x]), M = v(w, _, E, S, A, e[f[x]], d[1], c[x])) : x < 48 ? (k = g(r, n, i, o, l, e[s[x]], h[2], u[x]), M = g(w, _, E, S, A, e[f[x]], d[2], c[x])) : x < 64 ? (k = v(r, n, i, o, l, e[s[x]], h[3], u[x]), M = y(w, _, E, S, A, e[f[x]], d[3], c[x])) : (k = m(r, n, i, o, l, e[s[x]], h[4], u[x]), M = b(w, _, E, S, A, e[f[x]], d[4], c[x])), r = l, l = o, o = p(i, 10), i = n, n = k, w = A, A = S, S = p(E, 10), E = _, _ = M;
      }

      var T = this._b + i + S | 0;
      this._b = this._c + o + A | 0, this._c = this._d + l + w | 0, this._d = this._e + r + _ | 0, this._e = this._a + n + E | 0, this._a = T;
    }, l.prototype._digest = function () {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var e = n.alloc ? n.alloc(20) : new n(20);
      return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e;
    }, e.exports = l;
  }, function (e, t, r) {
    (t = e.exports = function (e) {
      e = e.toLowerCase();
      var r = t[e];
      if (!r) throw new Error(e + " is not supported (we accept pull requests)");
      return new r();
    }).sha = r(148), t.sha1 = r(149), t.sha224 = r(150), t.sha256 = r(70), t.sha384 = r(151), t.sha512 = r(71);
  }, function (e, t, r) {
    var n = r(0),
        i = r(17),
        o = r(2).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);

    function f() {
      this.init(), this._w = s, i.call(this, 64, 56);
    }

    function u(e) {
      return e << 30 | e >>> 2;
    }

    function c(e, t, r, n) {
      return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n;
    }

    n(f, i), f.prototype.init = function () {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    }, f.prototype._update = function (e) {
      for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, h = 0; h < 16; ++h) {
        r[h] = e.readInt32BE(4 * h);
      }

      for (; h < 80; ++h) {
        r[h] = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16];
      }

      for (var d = 0; d < 80; ++d) {
        var l = ~~(d / 20),
            p = 0 | ((t = n) << 5 | t >>> 27) + c(l, i, o, s) + f + r[d] + a[l];
        f = s, s = o, o = u(i), i = n, n = p;
      }

      this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = f + this._e | 0;
    }, f.prototype._hash = function () {
      var e = o.allocUnsafe(20);
      return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e;
    }, e.exports = f;
  }, function (e, t, r) {
    var n = r(0),
        i = r(17),
        o = r(2).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);

    function f() {
      this.init(), this._w = s, i.call(this, 64, 56);
    }

    function u(e) {
      return e << 5 | e >>> 27;
    }

    function c(e) {
      return e << 30 | e >>> 2;
    }

    function h(e, t, r, n) {
      return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n;
    }

    n(f, i), f.prototype.init = function () {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    }, f.prototype._update = function (e) {
      for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, d = 0; d < 16; ++d) {
        r[d] = e.readInt32BE(4 * d);
      }

      for (; d < 80; ++d) {
        r[d] = (t = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]) << 1 | t >>> 31;
      }

      for (var l = 0; l < 80; ++l) {
        var p = ~~(l / 20),
            b = u(n) + h(p, i, o, s) + f + r[l] + a[p] | 0;
        f = s, s = o, o = c(i), i = n, n = b;
      }

      this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = f + this._e | 0;
    }, f.prototype._hash = function () {
      var e = o.allocUnsafe(20);
      return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e;
    }, e.exports = f;
  }, function (e, t, r) {
    var n = r(0),
        i = r(70),
        o = r(17),
        a = r(2).Buffer,
        s = new Array(64);

    function f() {
      this.init(), this._w = s, o.call(this, 64, 56);
    }

    n(f, i), f.prototype.init = function () {
      return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
    }, f.prototype._hash = function () {
      var e = a.allocUnsafe(28);
      return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e;
    }, e.exports = f;
  }, function (e, t, r) {
    var n = r(0),
        i = r(71),
        o = r(17),
        a = r(2).Buffer,
        s = new Array(160);

    function f() {
      this.init(), this._w = s, o.call(this, 128, 112);
    }

    n(f, i), f.prototype.init = function () {
      return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
    }, f.prototype._hash = function () {
      var e = a.allocUnsafe(48);

      function t(t, r, n) {
        e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
      }

      return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e;
    }, e.exports = f;
  }, function (e, t, r) {
    var n = r(2).Buffer,
        i = r(18).Transform,
        o = r(20).StringDecoder;

    function a(e) {
      i.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
    }

    r(0)(a, i), a.prototype.update = function (e, t, r) {
      "string" == typeof e && (e = n.from(e, t));

      var i = this._update(e);

      return this.hashMode ? this : (r && (i = this._toString(i, r)), i);
    }, a.prototype.setAutoPadding = function () {}, a.prototype.getAuthTag = function () {
      throw new Error("trying to get auth tag in unsupported state");
    }, a.prototype.setAuthTag = function () {
      throw new Error("trying to set auth tag in unsupported state");
    }, a.prototype.setAAD = function () {
      throw new Error("trying to set aad in unsupported state");
    }, a.prototype._transform = function (e, t, r) {
      var n;

      try {
        this.hashMode ? this._update(e) : this.push(this._update(e));
      } catch (e) {
        n = e;
      } finally {
        r(n);
      }
    }, a.prototype._flush = function (e) {
      var t;

      try {
        this.push(this.__final());
      } catch (e) {
        t = e;
      }

      e(t);
    }, a.prototype._finalOrDigest = function (e) {
      var t = this.__final() || n.alloc(0);
      return e && (t = this._toString(t, e, !0)), t;
    }, a.prototype._toString = function (e, t, r) {
      if (this._decoder || (this._decoder = new o(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");

      var n = this._decoder.write(e);

      return r && (n += this._decoder.end()), n;
    }, e.exports = a;
  }, function (e, t) {}, function (e) {
    e.exports = {
      _args: [["elliptic@6.5.3", "/Users/tom/Workspaces/sandbox/web-sdk/packages/portis-web3"]],
      _from: "elliptic@6.5.3",
      _id: "elliptic@6.5.3",
      _inBundle: !1,
      _integrity: "sha512-IMqzv5wNQf+E6aHeIqATs0tOLeOTwj1QKbRcS3jBbYkl5oLAserA8yJTT7/VyHUYG91PRmPyeQDObKLPpeS4dw==",
      _location: "/elliptic",
      _phantomChildren: {},
      _requested: {
        type: "version",
        registry: !0,
        raw: "elliptic@6.5.3",
        name: "elliptic",
        escapedName: "elliptic",
        rawSpec: "6.5.3",
        saveSpec: null,
        fetchSpec: "6.5.3"
      },
      _requiredBy: ["/browserify-sign", "/create-ecdh", "/eth-json-rpc-filters/ethereumjs-abi/ethereumjs-util", "/eth-json-rpc-middleware/ethereumjs-abi/ethereumjs-util", "/eth-sig-util", "/eth-sig-util/ethereumjs-abi/ethereumjs-util", "/ethereumjs-util/secp256k1", "/ethereumjs-vm/ethereumjs-block/ethereumjs-util", "/ethereumjs-vm/ethereumjs-util", "/secp256k1"],
      _resolved: "https://registry.npmjs.org/elliptic/-/elliptic-6.5.3.tgz",
      _spec: "6.5.3",
      _where: "/Users/tom/Workspaces/sandbox/web-sdk/packages/portis-web3",
      author: {
        name: "Fedor Indutny",
        email: "fedor@indutny.com"
      },
      bugs: {
        url: "https://github.com/indutny/elliptic/issues"
      },
      dependencies: {
        "bn.js": "^4.4.0",
        brorand: "^1.0.1",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.0",
        inherits: "^2.0.1",
        "minimalistic-assert": "^1.0.0",
        "minimalistic-crypto-utils": "^1.0.0"
      },
      description: "EC cryptography",
      devDependencies: {
        brfs: "^1.4.3",
        coveralls: "^3.0.8",
        grunt: "^1.0.4",
        "grunt-browserify": "^5.0.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-connect": "^1.0.0",
        "grunt-contrib-copy": "^1.0.0",
        "grunt-contrib-uglify": "^1.0.1",
        "grunt-mocha-istanbul": "^3.0.1",
        "grunt-saucelabs": "^9.0.1",
        istanbul: "^0.4.2",
        jscs: "^3.0.7",
        jshint: "^2.10.3",
        mocha: "^6.2.2"
      },
      files: ["lib"],
      homepage: "https://github.com/indutny/elliptic",
      keywords: ["EC", "Elliptic", "curve", "Cryptography"],
      license: "MIT",
      main: "lib/elliptic.js",
      name: "elliptic",
      repository: {
        type: "git",
        url: "git+ssh://git@github.com/indutny/elliptic.git"
      },
      scripts: {
        jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
        jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
        lint: "npm run jscs && npm run jshint",
        test: "npm run lint && npm run unit",
        unit: "istanbul test _mocha --reporter=spec test/index.js",
        version: "grunt dist && git add dist/"
      },
      version: "6.5.3"
    };
  }, function (e, t) {}, function (e, t, r) {
    "use strict";

    var n = r(6),
        i = r(4),
        o = r(0),
        a = r(26),
        s = n.assert;

    function f(e) {
      a.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
    }

    function u(e, t, r, n) {
      a.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
    }

    function c(e, t, r, n) {
      a.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
    }

    o(f, a), e.exports = f, f.prototype._getEndomorphism = function (e) {
      if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
        var t, r;
        if (e.beta) t = new i(e.beta, 16).toRed(this.red);else {
          var n = this._getEndoRoots(this.p);

          t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
        }
        if (e.lambda) r = new i(e.lambda, 16);else {
          var o = this._getEndoRoots(this.n);

          0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
        }
        return {
          beta: t,
          lambda: r,
          basis: e.basis ? e.basis.map(function (e) {
            return {
              a: new i(e.a, 16),
              b: new i(e.b, 16)
            };
          }) : this._getEndoBasis(r)
        };
      }
    }, f.prototype._getEndoRoots = function (e) {
      var t = e === this.p ? this.red : i.mont(e),
          r = new i(2).toRed(t).redInvm(),
          n = r.redNeg(),
          o = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
      return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
    }, f.prototype._getEndoBasis = function (e) {
      for (var t, r, n, o, a, s, f, u, c, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = e, l = this.n.clone(), p = new i(1), b = new i(0), y = new i(0), g = new i(1), v = 0; 0 !== d.cmpn(0);) {
        var m = l.div(d);
        u = l.sub(m.mul(d)), c = y.sub(m.mul(p));
        var w = g.sub(m.mul(b));
        if (!n && u.cmp(h) < 0) t = f.neg(), r = p, n = u.neg(), o = c;else if (n && 2 == ++v) break;
        f = u, l = d, d = u, y = p, p = c, g = b, b = w;
      }

      a = u.neg(), s = c;

      var _ = n.sqr().add(o.sqr());

      return a.sqr().add(s.sqr()).cmp(_) >= 0 && (a = t, s = r), n.negative && (n = n.neg(), o = o.neg()), a.negative && (a = a.neg(), s = s.neg()), [{
        a: n,
        b: o
      }, {
        a: a,
        b: s
      }];
    }, f.prototype._endoSplit = function (e) {
      var t = this.endo.basis,
          r = t[0],
          n = t[1],
          i = n.b.mul(e).divRound(this.n),
          o = r.b.neg().mul(e).divRound(this.n),
          a = i.mul(r.a),
          s = o.mul(n.a),
          f = i.mul(r.b),
          u = o.mul(n.b);
      return {
        k1: e.sub(a).sub(s),
        k2: f.add(u).neg()
      };
    }, f.prototype.pointFromX = function (e, t) {
      (e = new i(e, 16)).red || (e = e.toRed(this.red));
      var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
          n = r.redSqrt();
      if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
      var o = n.fromRed().isOdd();
      return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n);
    }, f.prototype.validate = function (e) {
      if (e.inf) return !0;
      var t = e.x,
          r = e.y,
          n = this.a.redMul(t),
          i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
      return 0 === r.redSqr().redISub(i).cmpn(0);
    }, f.prototype._endoWnafMulAdd = function (e, t, r) {
      for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
        var a = this._endoSplit(t[o]),
            s = e[o],
            f = s._getBeta();

        a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), f = f.neg(!0)), n[2 * o] = s, n[2 * o + 1] = f, i[2 * o] = a.k1, i[2 * o + 1] = a.k2;
      }

      for (var u = this._wnafMulAdd(1, n, i, 2 * o, r), c = 0; c < 2 * o; c++) {
        n[c] = null, i[c] = null;
      }

      return u;
    }, o(u, a.BasePoint), f.prototype.point = function (e, t, r) {
      return new u(this, e, t, r);
    }, f.prototype.pointFromJSON = function (e, t) {
      return u.fromJSON(this, e, t);
    }, u.prototype._getBeta = function () {
      if (this.curve.endo) {
        var e = this.precomputed;
        if (e && e.beta) return e.beta;
        var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);

        if (e) {
          var r = this.curve,
              n = function n(e) {
            return r.point(e.x.redMul(r.endo.beta), e.y);
          };

          e.beta = t, t.precomputed = {
            beta: null,
            naf: e.naf && {
              wnd: e.naf.wnd,
              points: e.naf.points.map(n)
            },
            doubles: e.doubles && {
              step: e.doubles.step,
              points: e.doubles.points.map(n)
            }
          };
        }

        return t;
      }
    }, u.prototype.toJSON = function () {
      return this.precomputed ? [this.x, this.y, this.precomputed && {
        doubles: this.precomputed.doubles && {
          step: this.precomputed.doubles.step,
          points: this.precomputed.doubles.points.slice(1)
        },
        naf: this.precomputed.naf && {
          wnd: this.precomputed.naf.wnd,
          points: this.precomputed.naf.points.slice(1)
        }
      }] : [this.x, this.y];
    }, u.fromJSON = function (e, t, r) {
      "string" == typeof t && (t = JSON.parse(t));
      var n = e.point(t[0], t[1], r);
      if (!t[2]) return n;

      function i(t) {
        return e.point(t[0], t[1], r);
      }

      var o = t[2];
      return n.precomputed = {
        beta: null,
        doubles: o.doubles && {
          step: o.doubles.step,
          points: [n].concat(o.doubles.points.map(i))
        },
        naf: o.naf && {
          wnd: o.naf.wnd,
          points: [n].concat(o.naf.points.map(i))
        }
      }, n;
    }, u.prototype.inspect = function () {
      return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
    }, u.prototype.isInfinity = function () {
      return this.inf;
    }, u.prototype.add = function (e) {
      if (this.inf) return e;
      if (e.inf) return this;
      if (this.eq(e)) return this.dbl();
      if (this.neg().eq(e)) return this.curve.point(null, null);
      if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
      var t = this.y.redSub(e.y);
      0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
      var r = t.redSqr().redISub(this.x).redISub(e.x),
          n = t.redMul(this.x.redSub(r)).redISub(this.y);
      return this.curve.point(r, n);
    }, u.prototype.dbl = function () {
      if (this.inf) return this;
      var e = this.y.redAdd(this.y);
      if (0 === e.cmpn(0)) return this.curve.point(null, null);
      var t = this.curve.a,
          r = this.x.redSqr(),
          n = e.redInvm(),
          i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
          o = i.redSqr().redISub(this.x.redAdd(this.x)),
          a = i.redMul(this.x.redSub(o)).redISub(this.y);
      return this.curve.point(o, a);
    }, u.prototype.getX = function () {
      return this.x.fromRed();
    }, u.prototype.getY = function () {
      return this.y.fromRed();
    }, u.prototype.mul = function (e) {
      return e = new i(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
    }, u.prototype.mulAdd = function (e, t, r) {
      var n = [this, t],
          i = [e, r];
      return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2);
    }, u.prototype.jmulAdd = function (e, t, r) {
      var n = [this, t],
          i = [e, r];
      return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0);
    }, u.prototype.eq = function (e) {
      return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y));
    }, u.prototype.neg = function (e) {
      if (this.inf) return this;
      var t = this.curve.point(this.x, this.y.redNeg());

      if (e && this.precomputed) {
        var r = this.precomputed,
            n = function n(e) {
          return e.neg();
        };

        t.precomputed = {
          naf: r.naf && {
            wnd: r.naf.wnd,
            points: r.naf.points.map(n)
          },
          doubles: r.doubles && {
            step: r.doubles.step,
            points: r.doubles.points.map(n)
          }
        };
      }

      return t;
    }, u.prototype.toJ = function () {
      return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
    }, o(c, a.BasePoint), f.prototype.jpoint = function (e, t, r) {
      return new c(this, e, t, r);
    }, c.prototype.toP = function () {
      if (this.isInfinity()) return this.curve.point(null, null);
      var e = this.z.redInvm(),
          t = e.redSqr(),
          r = this.x.redMul(t),
          n = this.y.redMul(t).redMul(e);
      return this.curve.point(r, n);
    }, c.prototype.neg = function () {
      return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    }, c.prototype.add = function (e) {
      if (this.isInfinity()) return e;
      if (e.isInfinity()) return this;
      var t = e.z.redSqr(),
          r = this.z.redSqr(),
          n = this.x.redMul(t),
          i = e.x.redMul(r),
          o = this.y.redMul(t.redMul(e.z)),
          a = e.y.redMul(r.redMul(this.z)),
          s = n.redSub(i),
          f = o.redSub(a);
      if (0 === s.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
      var u = s.redSqr(),
          c = u.redMul(s),
          h = n.redMul(u),
          d = f.redSqr().redIAdd(c).redISub(h).redISub(h),
          l = f.redMul(h.redISub(d)).redISub(o.redMul(c)),
          p = this.z.redMul(e.z).redMul(s);
      return this.curve.jpoint(d, l, p);
    }, c.prototype.mixedAdd = function (e) {
      if (this.isInfinity()) return e.toJ();
      if (e.isInfinity()) return this;
      var t = this.z.redSqr(),
          r = this.x,
          n = e.x.redMul(t),
          i = this.y,
          o = e.y.redMul(t).redMul(this.z),
          a = r.redSub(n),
          s = i.redSub(o);
      if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
      var f = a.redSqr(),
          u = f.redMul(a),
          c = r.redMul(f),
          h = s.redSqr().redIAdd(u).redISub(c).redISub(c),
          d = s.redMul(c.redISub(h)).redISub(i.redMul(u)),
          l = this.z.redMul(a);
      return this.curve.jpoint(h, d, l);
    }, c.prototype.dblp = function (e) {
      if (0 === e) return this;
      if (this.isInfinity()) return this;
      if (!e) return this.dbl();

      if (this.curve.zeroA || this.curve.threeA) {
        for (var t = this, r = 0; r < e; r++) {
          t = t.dbl();
        }

        return t;
      }

      var n = this.curve.a,
          i = this.curve.tinv,
          o = this.x,
          a = this.y,
          s = this.z,
          f = s.redSqr().redSqr(),
          u = a.redAdd(a);

      for (r = 0; r < e; r++) {
        var c = o.redSqr(),
            h = u.redSqr(),
            d = h.redSqr(),
            l = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(f)),
            p = o.redMul(h),
            b = l.redSqr().redISub(p.redAdd(p)),
            y = p.redISub(b),
            g = l.redMul(y);
        g = g.redIAdd(g).redISub(d);
        var v = u.redMul(s);
        r + 1 < e && (f = f.redMul(d)), o = b, s = v, u = g;
      }

      return this.curve.jpoint(o, u.redMul(i), s);
    }, c.prototype.dbl = function () {
      return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
    }, c.prototype._zeroDbl = function () {
      var e, t, r;

      if (this.zOne) {
        var n = this.x.redSqr(),
            i = this.y.redSqr(),
            o = i.redSqr(),
            a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
        a = a.redIAdd(a);
        var s = n.redAdd(n).redIAdd(n),
            f = s.redSqr().redISub(a).redISub(a),
            u = o.redIAdd(o);
        u = (u = u.redIAdd(u)).redIAdd(u), e = f, t = s.redMul(a.redISub(f)).redISub(u), r = this.y.redAdd(this.y);
      } else {
        var c = this.x.redSqr(),
            h = this.y.redSqr(),
            d = h.redSqr(),
            l = this.x.redAdd(h).redSqr().redISub(c).redISub(d);
        l = l.redIAdd(l);
        var p = c.redAdd(c).redIAdd(c),
            b = p.redSqr(),
            y = d.redIAdd(d);
        y = (y = y.redIAdd(y)).redIAdd(y), e = b.redISub(l).redISub(l), t = p.redMul(l.redISub(e)).redISub(y), r = (r = this.y.redMul(this.z)).redIAdd(r);
      }

      return this.curve.jpoint(e, t, r);
    }, c.prototype._threeDbl = function () {
      var e, t, r;

      if (this.zOne) {
        var n = this.x.redSqr(),
            i = this.y.redSqr(),
            o = i.redSqr(),
            a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
        a = a.redIAdd(a);
        var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
            f = s.redSqr().redISub(a).redISub(a);
        e = f;
        var u = o.redIAdd(o);
        u = (u = u.redIAdd(u)).redIAdd(u), t = s.redMul(a.redISub(f)).redISub(u), r = this.y.redAdd(this.y);
      } else {
        var c = this.z.redSqr(),
            h = this.y.redSqr(),
            d = this.x.redMul(h),
            l = this.x.redSub(c).redMul(this.x.redAdd(c));
        l = l.redAdd(l).redIAdd(l);
        var p = d.redIAdd(d),
            b = (p = p.redIAdd(p)).redAdd(p);
        e = l.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c);
        var y = h.redSqr();
        y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y), t = l.redMul(p.redISub(e)).redISub(y);
      }

      return this.curve.jpoint(e, t, r);
    }, c.prototype._dbl = function () {
      var e = this.curve.a,
          t = this.x,
          r = this.y,
          n = this.z,
          i = n.redSqr().redSqr(),
          o = t.redSqr(),
          a = r.redSqr(),
          s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
          f = t.redAdd(t),
          u = (f = f.redIAdd(f)).redMul(a),
          c = s.redSqr().redISub(u.redAdd(u)),
          h = u.redISub(c),
          d = a.redSqr();
      d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
      var l = s.redMul(h).redISub(d),
          p = r.redAdd(r).redMul(n);
      return this.curve.jpoint(c, l, p);
    }, c.prototype.trpl = function () {
      if (!this.curve.zeroA) return this.dbl().add(this);
      var e = this.x.redSqr(),
          t = this.y.redSqr(),
          r = this.z.redSqr(),
          n = t.redSqr(),
          i = e.redAdd(e).redIAdd(e),
          o = i.redSqr(),
          a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
          s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
          f = n.redIAdd(n);
      f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
      var u = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f),
          c = t.redMul(u);
      c = (c = c.redIAdd(c)).redIAdd(c);
      var h = this.x.redMul(s).redISub(c);
      h = (h = h.redIAdd(h)).redIAdd(h);
      var d = this.y.redMul(u.redMul(f.redISub(u)).redISub(a.redMul(s)));
      d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
      var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
      return this.curve.jpoint(h, d, l);
    }, c.prototype.mul = function (e, t) {
      return e = new i(e, t), this.curve._wnafMul(this, e);
    }, c.prototype.eq = function (e) {
      if ("affine" === e.type) return this.eq(e.toJ());
      if (this === e) return !0;
      var t = this.z.redSqr(),
          r = e.z.redSqr();
      if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
      var n = t.redMul(this.z),
          i = r.redMul(e.z);
      return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0);
    }, c.prototype.eqXToP = function (e) {
      var t = this.z.redSqr(),
          r = e.toRed(this.curve.red).redMul(t);
      if (0 === this.x.cmp(r)) return !0;

      for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
        if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0;
      }
    }, c.prototype.inspect = function () {
      return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
    }, c.prototype.isInfinity = function () {
      return 0 === this.z.cmpn(0);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(4),
        i = r(0),
        o = r(26),
        a = r(6);

    function s(e) {
      o.call(this, "mont", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
    }

    function f(e, t, r) {
      o.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(t, 16), this.z = new n(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
    }

    i(s, o), e.exports = s, s.prototype.validate = function (e) {
      var t = e.normalize().x,
          r = t.redSqr(),
          n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
      return 0 === n.redSqrt().redSqr().cmp(n);
    }, i(f, o.BasePoint), s.prototype.decodePoint = function (e, t) {
      return this.point(a.toArray(e, t), 1);
    }, s.prototype.point = function (e, t) {
      return new f(this, e, t);
    }, s.prototype.pointFromJSON = function (e) {
      return f.fromJSON(this, e);
    }, f.prototype.precompute = function () {}, f.prototype._encode = function () {
      return this.getX().toArray("be", this.curve.p.byteLength());
    }, f.fromJSON = function (e, t) {
      return new f(e, t[0], t[1] || e.one);
    }, f.prototype.inspect = function () {
      return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    }, f.prototype.isInfinity = function () {
      return 0 === this.z.cmpn(0);
    }, f.prototype.dbl = function () {
      var e = this.x.redAdd(this.z).redSqr(),
          t = this.x.redSub(this.z).redSqr(),
          r = e.redSub(t),
          n = e.redMul(t),
          i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
      return this.curve.point(n, i);
    }, f.prototype.add = function () {
      throw new Error("Not supported on Montgomery curve");
    }, f.prototype.diffAdd = function (e, t) {
      var r = this.x.redAdd(this.z),
          n = this.x.redSub(this.z),
          i = e.x.redAdd(e.z),
          o = e.x.redSub(e.z).redMul(r),
          a = i.redMul(n),
          s = t.z.redMul(o.redAdd(a).redSqr()),
          f = t.x.redMul(o.redISub(a).redSqr());
      return this.curve.point(s, f);
    }, f.prototype.mul = function (e) {
      for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) {
        i.push(t.andln(1));
      }

      for (var o = i.length - 1; o >= 0; o--) {
        0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
      }

      return n;
    }, f.prototype.mulAdd = function () {
      throw new Error("Not supported on Montgomery curve");
    }, f.prototype.jumlAdd = function () {
      throw new Error("Not supported on Montgomery curve");
    }, f.prototype.eq = function (e) {
      return 0 === this.getX().cmp(e.getX());
    }, f.prototype.normalize = function () {
      return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
    }, f.prototype.getX = function () {
      return this.normalize(), this.x.fromRed();
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(6),
        i = r(4),
        o = r(0),
        a = r(26),
        s = n.assert;

    function f(e) {
      this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, a.call(this, "edwards", e), this.a = new i(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c);
    }

    function u(e, t, r, n, o) {
      a.BasePoint.call(this, e, "projective"), null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = n ? new i(n, 16) : this.curve.one, this.t = o && new i(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
    }

    o(f, a), e.exports = f, f.prototype._mulA = function (e) {
      return this.mOneA ? e.redNeg() : this.a.redMul(e);
    }, f.prototype._mulC = function (e) {
      return this.oneC ? e : this.c.redMul(e);
    }, f.prototype.jpoint = function (e, t, r, n) {
      return this.point(e, t, r, n);
    }, f.prototype.pointFromX = function (e, t) {
      (e = new i(e, 16)).red || (e = e.toRed(this.red));
      var r = e.redSqr(),
          n = this.c2.redSub(this.a.redMul(r)),
          o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
          a = n.redMul(o.redInvm()),
          s = a.redSqrt();
      if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
      var f = s.fromRed().isOdd();
      return (t && !f || !t && f) && (s = s.redNeg()), this.point(e, s);
    }, f.prototype.pointFromY = function (e, t) {
      (e = new i(e, 16)).red || (e = e.toRed(this.red));
      var r = e.redSqr(),
          n = r.redSub(this.c2),
          o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
          a = n.redMul(o.redInvm());

      if (0 === a.cmp(this.zero)) {
        if (t) throw new Error("invalid point");
        return this.point(this.zero, e);
      }

      var s = a.redSqrt();
      if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
      return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e);
    }, f.prototype.validate = function (e) {
      if (e.isInfinity()) return !0;
      e.normalize();
      var t = e.x.redSqr(),
          r = e.y.redSqr(),
          n = t.redMul(this.a).redAdd(r),
          i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
      return 0 === n.cmp(i);
    }, o(u, a.BasePoint), f.prototype.pointFromJSON = function (e) {
      return u.fromJSON(this, e);
    }, f.prototype.point = function (e, t, r, n) {
      return new u(this, e, t, r, n);
    }, u.fromJSON = function (e, t) {
      return new u(e, t[0], t[1], t[2]);
    }, u.prototype.inspect = function () {
      return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    }, u.prototype.isInfinity = function () {
      return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c));
    }, u.prototype._extDbl = function () {
      var e = this.x.redSqr(),
          t = this.y.redSqr(),
          r = this.z.redSqr();
      r = r.redIAdd(r);

      var n = this.curve._mulA(e),
          i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
          o = n.redAdd(t),
          a = o.redSub(r),
          s = n.redSub(t),
          f = i.redMul(a),
          u = o.redMul(s),
          c = i.redMul(s),
          h = a.redMul(o);

      return this.curve.point(f, u, h, c);
    }, u.prototype._projDbl = function () {
      var e,
          t,
          r,
          n = this.x.redAdd(this.y).redSqr(),
          i = this.x.redSqr(),
          o = this.y.redSqr();

      if (this.curve.twisted) {
        var a = (u = this.curve._mulA(i)).redAdd(o);

        if (this.zOne) e = n.redSub(i).redSub(o).redMul(a.redSub(this.curve.two)), t = a.redMul(u.redSub(o)), r = a.redSqr().redSub(a).redSub(a);else {
          var s = this.z.redSqr(),
              f = a.redSub(s).redISub(s);
          e = n.redSub(i).redISub(o).redMul(f), t = a.redMul(u.redSub(o)), r = a.redMul(f);
        }
      } else {
        var u = i.redAdd(o);
        s = this.curve._mulC(this.z).redSqr(), f = u.redSub(s).redSub(s);
        e = this.curve._mulC(n.redISub(u)).redMul(f), t = this.curve._mulC(u).redMul(i.redISub(o)), r = u.redMul(f);
      }

      return this.curve.point(e, t, r);
    }, u.prototype.dbl = function () {
      return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
    }, u.prototype._extAdd = function (e) {
      var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
          r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
          n = this.t.redMul(this.curve.dd).redMul(e.t),
          i = this.z.redMul(e.z.redAdd(e.z)),
          o = r.redSub(t),
          a = i.redSub(n),
          s = i.redAdd(n),
          f = r.redAdd(t),
          u = o.redMul(a),
          c = s.redMul(f),
          h = o.redMul(f),
          d = a.redMul(s);
      return this.curve.point(u, c, d, h);
    }, u.prototype._projAdd = function (e) {
      var t,
          r,
          n = this.z.redMul(e.z),
          i = n.redSqr(),
          o = this.x.redMul(e.x),
          a = this.y.redMul(e.y),
          s = this.curve.d.redMul(o).redMul(a),
          f = i.redSub(s),
          u = i.redAdd(s),
          c = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
          h = n.redMul(f).redMul(c);
      return this.curve.twisted ? (t = n.redMul(u).redMul(a.redSub(this.curve._mulA(o))), r = f.redMul(u)) : (t = n.redMul(u).redMul(a.redSub(o)), r = this.curve._mulC(f).redMul(u)), this.curve.point(h, t, r);
    }, u.prototype.add = function (e) {
      return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
    }, u.prototype.mul = function (e) {
      return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
    }, u.prototype.mulAdd = function (e, t, r) {
      return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
    }, u.prototype.jmulAdd = function (e, t, r) {
      return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
    }, u.prototype.normalize = function () {
      if (this.zOne) return this;
      var e = this.z.redInvm();
      return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this;
    }, u.prototype.neg = function () {
      return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
    }, u.prototype.getX = function () {
      return this.normalize(), this.x.fromRed();
    }, u.prototype.getY = function () {
      return this.normalize(), this.y.fromRed();
    }, u.prototype.eq = function (e) {
      return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY());
    }, u.prototype.eqXToP = function (e) {
      var t = e.toRed(this.curve.red).redMul(this.z);
      if (0 === this.x.cmp(t)) return !0;

      for (var r = e.clone(), n = this.curve.redN.redMul(this.z);;) {
        if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
        if (t.redIAdd(n), 0 === this.x.cmp(t)) return !0;
      }
    }, u.prototype.toP = u.prototype.normalize, u.prototype.mixedAdd = u.prototype.add;
  }, function (e, t, r) {
    "use strict";

    t.sha1 = r(160), t.sha224 = r(161), t.sha256 = r(76), t.sha384 = r(162), t.sha512 = r(77);
  }, function (e, t, r) {
    "use strict";

    var n = r(8),
        i = r(21),
        o = r(75),
        a = n.rotl32,
        s = n.sum32,
        f = n.sum32_5,
        u = o.ft_1,
        c = i.BlockHash,
        h = [1518500249, 1859775393, 2400959708, 3395469782];

    function d() {
      if (!(this instanceof d)) return new d();
      c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
    }

    n.inherits(d, c), e.exports = d, d.blockSize = 512, d.outSize = 160, d.hmacStrength = 80, d.padLength = 64, d.prototype._update = function (e, t) {
      for (var r = this.W, n = 0; n < 16; n++) {
        r[n] = e[t + n];
      }

      for (; n < r.length; n++) {
        r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
      }

      var i = this.h[0],
          o = this.h[1],
          c = this.h[2],
          d = this.h[3],
          l = this.h[4];

      for (n = 0; n < r.length; n++) {
        var p = ~~(n / 20),
            b = f(a(i, 5), u(p, o, c, d), l, r[n], h[p]);
        l = d, d = c, c = a(o, 30), o = i, i = b;
      }

      this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], c), this.h[3] = s(this.h[3], d), this.h[4] = s(this.h[4], l);
    }, d.prototype._digest = function (e) {
      return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(8),
        i = r(76);

    function o() {
      if (!(this instanceof o)) return new o();
      i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
    }

    n.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function (e) {
      return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big");
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(8),
        i = r(77);

    function o() {
      if (!(this instanceof o)) return new o();
      i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
    }

    n.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function (e) {
      return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big");
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(8),
        i = r(21),
        o = n.rotl32,
        a = n.sum32,
        s = n.sum32_3,
        f = n.sum32_4,
        u = i.BlockHash;

    function c() {
      if (!(this instanceof c)) return new c();
      u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
    }

    function h(e, t, r, n) {
      return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n);
    }

    function d(e) {
      return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
    }

    function l(e) {
      return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
    }

    n.inherits(c, u), t.ripemd160 = c, c.blockSize = 512, c.outSize = 160, c.hmacStrength = 192, c.padLength = 64, c.prototype._update = function (e, t) {
      for (var r = this.h[0], n = this.h[1], i = this.h[2], u = this.h[3], c = this.h[4], v = r, m = n, w = i, _ = u, E = c, S = 0; S < 80; S++) {
        var A = a(o(f(r, h(S, n, i, u), e[p[S] + t], d(S)), y[S]), c);
        r = c, c = u, u = o(i, 10), i = n, n = A, A = a(o(f(v, h(79 - S, m, w, _), e[b[S] + t], l(S)), g[S]), E), v = E, E = _, _ = o(w, 10), w = m, m = A;
      }

      A = s(this.h[1], i, _), this.h[1] = s(this.h[2], u, E), this.h[2] = s(this.h[3], c, v), this.h[3] = s(this.h[4], r, m), this.h[4] = s(this.h[0], n, w), this.h[0] = A;
    }, c.prototype._digest = function (e) {
      return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little");
    };
    var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        y = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
  }, function (e, t, r) {
    "use strict";

    var n = r(8),
        i = r(12);

    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r));
    }

    e.exports = o, o.prototype._init = function (e) {
      e.length > this.blockSize && (e = new this.Hash().update(e).digest()), i(e.length <= this.blockSize);

      for (var t = e.length; t < this.blockSize; t++) {
        e.push(0);
      }

      for (t = 0; t < e.length; t++) {
        e[t] ^= 54;
      }

      for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++) {
        e[t] ^= 106;
      }

      this.outer = new this.Hash().update(e);
    }, o.prototype.update = function (e, t) {
      return this.inner.update(e, t), this;
    }, o.prototype.digest = function (e) {
      return this.outer.update(this.inner.digest()), this.outer.digest(e);
    };
  }, function (e, t) {
    e.exports = {
      doubles: {
        step: 4,
        points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
      },
      naf: {
        wnd: 7,
        points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(4),
        i = r(167),
        o = r(6),
        a = r(37),
        s = r(73),
        f = o.assert,
        u = r(168),
        c = r(169);

    function h(e) {
      if (!(this instanceof h)) return new h(e);
      "string" == typeof e && (f(a.hasOwnProperty(e), "Unknown curve " + e), e = a[e]), e instanceof a.PresetCurve && (e = {
        curve: e
      }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
    }

    e.exports = h, h.prototype.keyPair = function (e) {
      return new u(this, e);
    }, h.prototype.keyFromPrivate = function (e, t) {
      return u.fromPrivate(this, e, t);
    }, h.prototype.keyFromPublic = function (e, t) {
      return u.fromPublic(this, e, t);
    }, h.prototype.genKeyPair = function (e) {
      e || (e = {});

      for (var t = new i({
        hash: this.hash,
        pers: e.pers,
        persEnc: e.persEnc || "utf8",
        entropy: e.entropy || s(this.hash.hmacStrength),
        entropyEnc: e.entropy && e.entropyEnc || "utf8",
        nonce: this.n.toArray()
      }), r = this.n.byteLength(), o = this.n.sub(new n(2));;) {
        var a = new n(t.generate(r));
        if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a);
      }
    }, h.prototype._truncateToN = function (e, t) {
      var r = 8 * e.byteLength() - this.n.bitLength();
      return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
    }, h.prototype.sign = function (e, t, r, o) {
      "object" == typeof r && (o = r, r = null), o || (o = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new n(e, 16));

      for (var a = this.n.byteLength(), s = t.getPrivate().toArray("be", a), f = e.toArray("be", a), u = new i({
        hash: this.hash,
        entropy: s,
        nonce: f,
        pers: o.pers,
        persEnc: o.persEnc || "utf8"
      }), h = this.n.sub(new n(1)), d = 0;; d++) {
        var l = o.k ? o.k(d) : new n(u.generate(this.n.byteLength()));

        if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(h) >= 0)) {
          var p = this.g.mul(l);

          if (!p.isInfinity()) {
            var b = p.getX(),
                y = b.umod(this.n);

            if (0 !== y.cmpn(0)) {
              var g = l.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));

              if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                var v = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(y) ? 2 : 0);
                return o.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), v ^= 1), new c({
                  r: y,
                  s: g,
                  recoveryParam: v
                });
              }
            }
          }
        }
      }
    }, h.prototype.verify = function (e, t, r, i) {
      e = this._truncateToN(new n(e, 16)), r = this.keyFromPublic(r, i);
      var o = (t = new c(t, "hex")).r,
          a = t.s;
      if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
      if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
      var s,
          f = a.invm(this.n),
          u = f.mul(e).umod(this.n),
          h = f.mul(o).umod(this.n);
      return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(u, r.getPublic(), h)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(u, r.getPublic(), h)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o);
    }, h.prototype.recoverPubKey = function (e, t, r, i) {
      f((3 & r) === r, "The recovery param is more than two bits"), t = new c(t, i);
      var o = this.n,
          a = new n(e),
          s = t.r,
          u = t.s,
          h = 1 & r,
          d = r >> 1;
      if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d) throw new Error("Unable to find sencond key candinate");
      s = d ? this.curve.pointFromX(s.add(this.curve.n), h) : this.curve.pointFromX(s, h);
      var l = t.r.invm(o),
          p = o.sub(a).mul(l).umod(o),
          b = u.mul(l).umod(o);
      return this.g.mulAdd(p, s, b);
    }, h.prototype.getKeyRecoveryParam = function (e, t, r, n) {
      if (null !== (t = new c(t, n)).recoveryParam) return t.recoveryParam;

      for (var i = 0; i < 4; i++) {
        var o;

        try {
          o = this.recoverPubKey(e, t, i);
        } catch (e) {
          continue;
        }

        if (o.eq(r)) return i;
      }

      throw new Error("Unable to find valid recovery factor");
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(38),
        i = r(72),
        o = r(12);

    function a(e) {
      if (!(this instanceof a)) return new a(e);
      this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
      var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
          r = i.toArray(e.nonce, e.nonceEnc || "hex"),
          n = i.toArray(e.pers, e.persEnc || "hex");
      o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n);
    }

    e.exports = a, a.prototype._init = function (e, t, r) {
      var n = e.concat(t).concat(r);
      this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);

      for (var i = 0; i < this.V.length; i++) {
        this.K[i] = 0, this.V[i] = 1;
      }

      this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656;
    }, a.prototype._hmac = function () {
      return new n.hmac(this.hash, this.K);
    }, a.prototype._update = function (e) {
      var t = this._hmac().update(this.V).update([0]);

      e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
    }, a.prototype.reseed = function (e, t, r, n) {
      "string" != typeof t && (n = r, r = t, t = null), e = i.toArray(e, t), r = i.toArray(r, n), o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1;
    }, a.prototype.generate = function (e, t, r, n) {
      if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
      "string" != typeof t && (n = r, r = t, t = null), r && (r = i.toArray(r, n || "hex"), this._update(r));

      for (var o = []; o.length < e;) {
        this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
      }

      var a = o.slice(0, e);
      return this._update(r), this._reseed++, i.encode(a, t);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(4),
        i = r(6).assert;

    function o(e, t) {
      this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
    }

    e.exports = o, o.fromPublic = function (e, t, r) {
      return t instanceof o ? t : new o(e, {
        pub: t,
        pubEnc: r
      });
    }, o.fromPrivate = function (e, t, r) {
      return t instanceof o ? t : new o(e, {
        priv: t,
        privEnc: r
      });
    }, o.prototype.validate = function () {
      var e = this.getPublic();
      return e.isInfinity() ? {
        result: !1,
        reason: "Invalid public key"
      } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
        result: !0,
        reason: null
      } : {
        result: !1,
        reason: "Public key * N != O"
      } : {
        result: !1,
        reason: "Public key is not a point"
      };
    }, o.prototype.getPublic = function (e, t) {
      return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub;
    }, o.prototype.getPrivate = function (e) {
      return "hex" === e ? this.priv.toString(16, 2) : this.priv;
    }, o.prototype._importPrivate = function (e, t) {
      this.priv = new n(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n);
    }, o.prototype._importPublic = function (e, t) {
      if (e.x || e.y) return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(e.x, e.y));
      this.pub = this.ec.curve.decodePoint(e, t);
    }, o.prototype.derive = function (e) {
      return e.mul(this.priv).getX();
    }, o.prototype.sign = function (e, t, r) {
      return this.ec.sign(e, this, t, r);
    }, o.prototype.verify = function (e, t) {
      return this.ec.verify(e, t, this);
    }, o.prototype.inspect = function () {
      return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(4),
        i = r(6),
        o = i.assert;

    function a(e, t) {
      if (e instanceof a) return e;
      this._importDER(e, t) || (o(e.r && e.s, "Signature without r or s"), this.r = new n(e.r, 16), this.s = new n(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
    }

    function s() {
      this.place = 0;
    }

    function f(e, t) {
      var r = e[t.place++];
      if (!(128 & r)) return r;
      var n = 15 & r;
      if (0 === n || n > 4) return !1;

      for (var i = 0, o = 0, a = t.place; o < n; o++, a++) {
        i <<= 8, i |= e[a], i >>>= 0;
      }

      return !(i <= 127) && (t.place = a, i);
    }

    function u(e) {
      for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) {
        t++;
      }

      return 0 === t ? e : e.slice(t);
    }

    function c(e, t) {
      if (t < 128) e.push(t);else {
        var r = 1 + (Math.log(t) / Math.LN2 >>> 3);

        for (e.push(128 | r); --r;) {
          e.push(t >>> (r << 3) & 255);
        }

        e.push(t);
      }
    }

    e.exports = a, a.prototype._importDER = function (e, t) {
      e = i.toArray(e, t);
      var r = new s();
      if (48 !== e[r.place++]) return !1;
      var o = f(e, r);
      if (!1 === o) return !1;
      if (o + r.place !== e.length) return !1;
      if (2 !== e[r.place++]) return !1;
      var a = f(e, r);
      if (!1 === a) return !1;
      var u = e.slice(r.place, a + r.place);
      if (r.place += a, 2 !== e[r.place++]) return !1;
      var c = f(e, r);
      if (!1 === c) return !1;
      if (e.length !== c + r.place) return !1;
      var h = e.slice(r.place, c + r.place);

      if (0 === u[0]) {
        if (!(128 & u[1])) return !1;
        u = u.slice(1);
      }

      if (0 === h[0]) {
        if (!(128 & h[1])) return !1;
        h = h.slice(1);
      }

      return this.r = new n(u), this.s = new n(h), this.recoveryParam = null, !0;
    }, a.prototype.toDER = function (e) {
      var t = this.r.toArray(),
          r = this.s.toArray();

      for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = u(t), r = u(r); !(r[0] || 128 & r[1]);) {
        r = r.slice(1);
      }

      var n = [2];
      c(n, t.length), (n = n.concat(t)).push(2), c(n, r.length);
      var o = n.concat(r),
          a = [48];
      return c(a, o.length), a = a.concat(o), i.encode(a, e);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(38),
        i = r(37),
        o = r(6),
        a = o.assert,
        s = o.parseBytes,
        f = r(171),
        u = r(172);

    function c(e) {
      if (a("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof c)) return new c(e);
      e = i[e].curve;
      this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = n.sha512;
    }

    e.exports = c, c.prototype.sign = function (e, t) {
      e = s(e);
      var r = this.keyFromSecret(t),
          n = this.hashInt(r.messagePrefix(), e),
          i = this.g.mul(n),
          o = this.encodePoint(i),
          a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
          f = n.add(a).umod(this.curve.n);
      return this.makeSignature({
        R: i,
        S: f,
        Rencoded: o
      });
    }, c.prototype.verify = function (e, t, r) {
      e = s(e), t = this.makeSignature(t);
      var n = this.keyFromPublic(r),
          i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
          o = this.g.mul(t.S());
      return t.R().add(n.pub().mul(i)).eq(o);
    }, c.prototype.hashInt = function () {
      for (var e = this.hash(), t = 0; t < arguments.length; t++) {
        e.update(arguments[t]);
      }

      return o.intFromLE(e.digest()).umod(this.curve.n);
    }, c.prototype.keyFromPublic = function (e) {
      return f.fromPublic(this, e);
    }, c.prototype.keyFromSecret = function (e) {
      return f.fromSecret(this, e);
    }, c.prototype.makeSignature = function (e) {
      return e instanceof u ? e : new u(this, e);
    }, c.prototype.encodePoint = function (e) {
      var t = e.getY().toArray("le", this.encodingLength);
      return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t;
    }, c.prototype.decodePoint = function (e) {
      var t = (e = o.parseBytes(e)).length - 1,
          r = e.slice(0, t).concat(-129 & e[t]),
          n = 0 != (128 & e[t]),
          i = o.intFromLE(r);
      return this.curve.pointFromY(i, n);
    }, c.prototype.encodeInt = function (e) {
      return e.toArray("le", this.encodingLength);
    }, c.prototype.decodeInt = function (e) {
      return o.intFromLE(e);
    }, c.prototype.isPoint = function (e) {
      return e instanceof this.pointClass;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(6),
        i = n.assert,
        o = n.parseBytes,
        a = n.cachedProperty;

    function s(e, t) {
      this.eddsa = e, this._secret = o(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = o(t.pub);
    }

    s.fromPublic = function (e, t) {
      return t instanceof s ? t : new s(e, {
        pub: t
      });
    }, s.fromSecret = function (e, t) {
      return t instanceof s ? t : new s(e, {
        secret: t
      });
    }, s.prototype.secret = function () {
      return this._secret;
    }, a(s, "pubBytes", function () {
      return this.eddsa.encodePoint(this.pub());
    }), a(s, "pub", function () {
      return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
    }), a(s, "privBytes", function () {
      var e = this.eddsa,
          t = this.hash(),
          r = e.encodingLength - 1,
          n = t.slice(0, e.encodingLength);
      return n[0] &= 248, n[r] &= 127, n[r] |= 64, n;
    }), a(s, "priv", function () {
      return this.eddsa.decodeInt(this.privBytes());
    }), a(s, "hash", function () {
      return this.eddsa.hash().update(this.secret()).digest();
    }), a(s, "messagePrefix", function () {
      return this.hash().slice(this.eddsa.encodingLength);
    }), s.prototype.sign = function (e) {
      return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this);
    }, s.prototype.verify = function (e, t) {
      return this.eddsa.verify(e, t, this);
    }, s.prototype.getSecret = function (e) {
      return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), e);
    }, s.prototype.getPublic = function (e) {
      return n.encode(this.pubBytes(), e);
    }, e.exports = s;
  }, function (e, t, r) {
    "use strict";

    var n = r(4),
        i = r(6),
        o = i.assert,
        a = i.cachedProperty,
        s = i.parseBytes;

    function f(e, t) {
      this.eddsa = e, "object" != typeof t && (t = s(t)), Array.isArray(t) && (t = {
        R: t.slice(0, e.encodingLength),
        S: t.slice(e.encodingLength)
      }), o(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof n && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded;
    }

    a(f, "S", function () {
      return this.eddsa.decodeInt(this.Sencoded());
    }), a(f, "R", function () {
      return this.eddsa.decodePoint(this.Rencoded());
    }), a(f, "Rencoded", function () {
      return this.eddsa.encodePoint(this.R());
    }), a(f, "Sencoded", function () {
      return this.eddsa.encodeInt(this.S());
    }), f.prototype.toBytes = function () {
      return this.Rencoded().concat(this.Sencoded());
    }, f.prototype.toHex = function () {
      return i.encode(this.toBytes(), "hex").toUpperCase();
    }, e.exports = f;
  }, function (e, t, r) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */

    var n = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;

    function a(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e);
    }

    e.exports = function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;

        for (var t = {}, r = 0; r < 10; r++) {
          t["_" + String.fromCharCode(r)] = r;
        }

        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        }).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          n[e] = e;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
      } catch (e) {
        return !1;
      }
    }() ? Object.assign : function (e, t) {
      for (var r, s, f = a(e), u = 1; u < arguments.length; u++) {
        for (var c in r = Object(arguments[u])) {
          i.call(r, c) && (f[c] = r[c]);
        }

        if (n) {
          s = n(r);

          for (var h = 0; h < s.length; h++) {
            o.call(r, s[h]) && (f[s[h]] = r[s[h]]);
          }
        }
      }

      return f;
    };
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      var n = r(80),
          i = r(175);

      function o(e) {
        var t = e;
        if ("string" != typeof t) throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof t + ", while padToEven.");
        return t.length % 2 && (t = "0" + t), t;
      }

      function a(e) {
        return "0x" + e.toString(16);
      }

      e.exports = {
        arrayContainsArray: function arrayContainsArray(e, t, r) {
          if (!0 !== Array.isArray(e)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'");
          if (!0 !== Array.isArray(t)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof t + "'");
          return t[Boolean(r) ? "some" : "every"](function (t) {
            return e.indexOf(t) >= 0;
          });
        },
        intToBuffer: function intToBuffer(e) {
          var r = a(e);
          return new t(o(r.slice(2)), "hex");
        },
        getBinarySize: function getBinarySize(e) {
          if ("string" != typeof e) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
          return t.byteLength(e, "utf8");
        },
        isHexPrefixed: n,
        stripHexPrefix: i,
        padToEven: o,
        intToHex: a,
        fromAscii: function fromAscii(e) {
          for (var t = "", r = 0; r < e.length; r++) {
            var n = e.charCodeAt(r).toString(16);
            t += n.length < 2 ? "0" + n : n;
          }

          return "0x" + t;
        },
        fromUtf8: function fromUtf8(e) {
          return "0x" + o(new t(e, "utf8").toString("hex")).replace(/^0+|0+$/g, "");
        },
        toAscii: function toAscii(e) {
          var t = "",
              r = 0,
              n = e.length;

          for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) {
            var i = parseInt(e.substr(r, 2), 16);
            t += String.fromCharCode(i);
          }

          return t;
        },
        toUtf8: function toUtf8(e) {
          return new t(o(i(e).replace(/^0+|0+$/g, "")), "hex").toString("utf8");
        },
        getKeys: function getKeys(e, t, r) {
          if (!Array.isArray(e)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'");
          if ("string" != typeof t) throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'.");

          for (var n = [], i = 0; i < e.length; i++) {
            var o = e[i][t];
            if (r && !o) o = "";else if ("string" != typeof o) throw new Error("invalid abi");
            n.push(o);
          }

          return n;
        },
        isHexString: function isHexString(e, t) {
          return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t);
        }
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    var n = r(80);

    e.exports = function (e) {
      return "string" != typeof e ? e : n(e) ? e.slice(2) : e;
    };
  }, function (e, t, r) {
    var n = r(39),
        i = r(177);

    function o(e, t) {
      return new Promise(function (r) {
        var n = setTimeout(r, e);
        n.unref && t && n.unref();
      });
    }

    e.exports = /*#__PURE__*/function (_i) {
      "use strict";

      _inherits(_class2, _i);

      var _super2 = _createSuper(_class2);

      function _class2() {
        var _this4;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class2);

        if (!e.provider) throw new Error("PollingBlockTracker - no provider specified.");
        var t = e.pollingInterval || 2e4,
            r = e.retryTimeout || t / 10,
            n = void 0 === e.keepEventLoopActive || e.keepEventLoopActive,
            i = e.setSkipCacheFlag || !1;
        _this4 = _super2.call(this, Object.assign({
          blockResetDuration: t
        }, e)), _this4._provider = e.provider, _this4._pollingInterval = t, _this4._retryTimeout = r, _this4._keepEventLoopActive = n, _this4._setSkipCacheFlag = i;
        return _this4;
      }

      _createClass(_class2, [{
        key: "checkForLatestBlock",
        value: function () {
          var _checkForLatestBlock = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee21() {
            return _regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this._updateLatestBlock();

                  case 2:
                    _context21.next = 4;
                    return this.getLatestBlock();

                  case 4:
                    return _context21.abrupt("return", _context21.sent);

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));

          function checkForLatestBlock() {
            return _checkForLatestBlock.apply(this, arguments);
          }

          return checkForLatestBlock;
        }()
      }, {
        key: "_start",
        value: function _start() {
          var _this5 = this;

          this._performSync().catch(function (e) {
            return _this5.emit("error", e);
          });
        }
      }, {
        key: "_performSync",
        value: function () {
          var _performSync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee22() {
            var _t4;

            return _regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    if (!this._isRunning) {
                      _context22.next = 16;
                      break;
                    }

                    _context22.prev = 1;
                    _context22.next = 4;
                    return this._updateLatestBlock();

                  case 4:
                    _context22.next = 6;
                    return o(this._pollingInterval, !this._keepEventLoopActive);

                  case 6:
                    _context22.next = 14;
                    break;

                  case 8:
                    _context22.prev = 8;
                    _context22.t0 = _context22["catch"](1);
                    _t4 = new Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n" + _context22.t0.stack);

                    try {
                      this.emit("error", _t4);
                    } catch (e) {
                      console.error(_t4);
                    }

                    _context22.next = 14;
                    return o(this._retryTimeout, !this._keepEventLoopActive);

                  case 14:
                    _context22.next = 0;
                    break;

                  case 16:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this, [[1, 8]]);
          }));

          function _performSync() {
            return _performSync2.apply(this, arguments);
          }

          return _performSync;
        }()
      }, {
        key: "_updateLatestBlock",
        value: function () {
          var _updateLatestBlock2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee23() {
            var e;
            return _regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this._fetchLatestBlock();

                  case 2:
                    e = _context23.sent;

                    this._newPotentialLatest(e);

                  case 4:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));

          function _updateLatestBlock() {
            return _updateLatestBlock2.apply(this, arguments);
          }

          return _updateLatestBlock;
        }()
      }, {
        key: "_fetchLatestBlock",
        value: function () {
          var _fetchLatestBlock2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee24() {
            var _this6 = this;

            var e, t;
            return _regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    e = {
                      jsonrpc: "2.0",
                      id: 1,
                      method: "eth_blockNumber",
                      params: []
                    };
                    this._setSkipCacheFlag && (e.skipCache = !0);
                    _context24.next = 4;
                    return n(function (t) {
                      return _this6._provider.sendAsync(e, t);
                    })();

                  case 4:
                    t = _context24.sent;

                    if (!t.error) {
                      _context24.next = 7;
                      break;
                    }

                    throw new Error("PollingBlockTracker - encountered error fetching block:\n" + t.error);

                  case 7:
                    return _context24.abrupt("return", t.result);

                  case 8:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));

          function _fetchLatestBlock() {
            return _fetchLatestBlock2.apply(this, arguments);
          }

          return _fetchLatestBlock;
        }()
      }]);

      return _class2;
    }(i);
  }, function (e, t, r) {
    r(81), r(39);

    var n = r(41),
        i = function i(e, t) {
      return e + t;
    },
        o = ["sync", "latest"];

    function a(e) {
      return Number.parseInt(e, 16);
    }

    e.exports = /*#__PURE__*/function (_n2) {
      "use strict";

      _inherits(_class3, _n2);

      var _super3 = _createSuper(_class3);

      function _class3() {
        var _this7;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class3);

        _this7 = _super3.call(this), _this7._blockResetDuration = e.blockResetDuration || 2e4, _this7._blockResetTimeout, _this7._currentBlock = null, _this7._isRunning = !1, _this7._onNewListener = _this7._onNewListener.bind(_assertThisInitialized(_this7)), _this7._onRemoveListener = _this7._onRemoveListener.bind(_assertThisInitialized(_this7)), _this7._resetCurrentBlock = _this7._resetCurrentBlock.bind(_assertThisInitialized(_this7)), _this7._setupInternalEvents();
        return _this7;
      }

      _createClass(_class3, [{
        key: "isRunning",
        value: function isRunning() {
          return this._isRunning;
        }
      }, {
        key: "getCurrentBlock",
        value: function getCurrentBlock() {
          return this._currentBlock;
        }
      }, {
        key: "getLatestBlock",
        value: function () {
          var _getLatestBlock = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee25() {
            var _this8 = this;

            return _regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    if (!this._currentBlock) {
                      _context25.next = 2;
                      break;
                    }

                    return _context25.abrupt("return", this._currentBlock);

                  case 2:
                    _context25.next = 4;
                    return new Promise(function (e) {
                      return _this8.once("latest", e);
                    });

                  case 4:
                    return _context25.abrupt("return", _context25.sent);

                  case 5:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));

          function getLatestBlock() {
            return _getLatestBlock.apply(this, arguments);
          }

          return getLatestBlock;
        }()
      }, {
        key: "removeAllListeners",
        value: function removeAllListeners(e) {
          e ? _get(_getPrototypeOf(_class3.prototype), "removeAllListeners", this).call(this, e) : _get(_getPrototypeOf(_class3.prototype), "removeAllListeners", this).call(this), this._setupInternalEvents(), this._onRemoveListener();
        }
      }, {
        key: "_start",
        value: function _start() {}
      }, {
        key: "_end",
        value: function _end() {}
      }, {
        key: "_setupInternalEvents",
        value: function _setupInternalEvents() {
          this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener);
        }
      }, {
        key: "_onNewListener",
        value: function _onNewListener(e, t) {
          o.includes(e) && this._maybeStart();
        }
      }, {
        key: "_onRemoveListener",
        value: function _onRemoveListener(e, t) {
          this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
        }
      }, {
        key: "_maybeStart",
        value: function _maybeStart() {
          this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start());
        }
      }, {
        key: "_maybeEnd",
        value: function _maybeEnd() {
          this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), this._end());
        }
      }, {
        key: "_getBlockTrackerEventCount",
        value: function _getBlockTrackerEventCount() {
          var _this9 = this;

          return o.map(function (e) {
            return _this9.listenerCount(e);
          }).reduce(i);
        }
      }, {
        key: "_newPotentialLatest",
        value: function _newPotentialLatest(e) {
          var t = this._currentBlock;
          t && a(e) <= a(t) || this._setCurrentBlock(e);
        }
      }, {
        key: "_setCurrentBlock",
        value: function _setCurrentBlock(e) {
          var t = this._currentBlock;
          this._currentBlock = e, this.emit("latest", e), this.emit("sync", {
            oldBlock: t,
            newBlock: e
          });
        }
      }, {
        key: "_setupBlockResetTimeout",
        value: function _setupBlockResetTimeout() {
          this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref();
        }
      }, {
        key: "_cancelBlockResetTimeout",
        value: function _cancelBlockResetTimeout() {
          clearTimeout(this._blockResetTimeout);
        }
      }, {
        key: "_resetCurrentBlock",
        value: function _resetCurrentBlock() {
          this._currentBlock = null;
        }
      }]);

      return _class3;
    }(n);
  }, function (e, t) {
    e.exports = function (e) {
      var t = (e = e || {}).max || Number.MAX_SAFE_INTEGER,
          r = void 0 !== e.start ? e.start : Math.floor(Math.random() * t);
      return function () {
        return r %= t, r++;
      };
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(180)),
        i = o(r(206));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    t.default = (0, n.default)(i.default), e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      return function (t, r, o) {
        return e(n.default, t, (0, i.default)(r), o);
      };
    };
    var n = o(r(82)),
        i = o(r(13));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = t.default;
  }, function (e, t, r) {
    var n = r(42),
        i = r(86);

    e.exports = function (e) {
      if (!i(e)) return !1;
      var t = n(e);
      return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
    };
  }, function (e, t, r) {
    var n = r(83),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        s = n ? n.toStringTag : void 0;

    e.exports = function (e) {
      var t = o.call(e, s),
          r = e[s];

      try {
        e[s] = void 0;
        var n = !0;
      } catch (e) {}

      var i = a.call(e);
      return n && (t ? e[s] = r : delete e[s]), i;
    };
  }, function (e, t) {
    var r = Object.prototype.toString;

    e.exports = function (e) {
      return r.call(e);
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e, t, r, o) {
      (0, n.default)(t)(e, (0, i.default)(r), o);
    };
    var n = o(r(89)),
        i = o(r(13));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      if ((0, n.default)(e)) return function (e) {
        var t = -1,
            r = e.length;
        return function () {
          return ++t < r ? {
            value: e[t],
            key: t
          } : null;
        };
      }(e);
      var t = (0, i.default)(e);
      return t ? function (e) {
        var t = -1;
        return function () {
          var r = e.next();
          return r.done ? null : (t++, {
            value: r.value,
            key: t
          });
        };
      }(t) : (r = e, a = (0, o.default)(r), s = -1, f = a.length, function () {
        var e = a[++s];
        return s < f ? {
          value: r[e],
          key: e
        } : null;
      });
      var r, a, s, f;
    };
    var n = a(r(27)),
        i = a(r(186)),
        o = a(r(187));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      return n && e[n] && e[n]();
    };
    var n = "function" == typeof Symbol && Symbol.iterator;
    e.exports = t.default;
  }, function (e, t, r) {
    var n = r(188),
        i = r(199),
        o = r(27);

    e.exports = function (e) {
      return o(e) ? n(e) : i(e);
    };
  }, function (e, t, r) {
    var n = r(189),
        i = r(190),
        o = r(90),
        a = r(192),
        s = r(194),
        f = r(195),
        u = Object.prototype.hasOwnProperty;

    e.exports = function (e, t) {
      var r = o(e),
          c = !r && i(e),
          h = !r && !c && a(e),
          d = !r && !c && !h && f(e),
          l = r || c || h || d,
          p = l ? n(e.length, String) : [],
          b = p.length;

      for (var y in e) {
        !t && !u.call(e, y) || l && ("length" == y || h && ("offset" == y || "parent" == y) || d && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, b)) || p.push(y);
      }

      return p;
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var r = -1, n = Array(e); ++r < e;) {
        n[r] = t(r);
      }

      return n;
    };
  }, function (e, t, r) {
    var n = r(191),
        i = r(44),
        o = Object.prototype,
        a = o.hasOwnProperty,
        s = o.propertyIsEnumerable,
        f = n(function () {
      return arguments;
    }()) ? n : function (e) {
      return i(e) && a.call(e, "callee") && !s.call(e, "callee");
    };
    e.exports = f;
  }, function (e, t, r) {
    var n = r(42),
        i = r(44);

    e.exports = function (e) {
      return i(e) && "[object Arguments]" == n(e);
    };
  }, function (e, t, r) {
    (function (e) {
      var n = r(84),
          i = r(193),
          o = t && !t.nodeType && t,
          a = o && "object" == typeof e && e && !e.nodeType && e,
          s = a && a.exports === o ? n.Buffer : void 0,
          f = (s ? s.isBuffer : void 0) || i;
      e.exports = f;
    }).call(this, r(25)(e));
  }, function (e, t) {
    e.exports = function () {
      return !1;
    };
  }, function (e, t) {
    var r = /^(?:0|[1-9]\d*)$/;

    e.exports = function (e, t) {
      var n = typeof e;
      return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t;
    };
  }, function (e, t, r) {
    var n = r(196),
        i = r(197),
        o = r(198),
        a = o && o.isTypedArray,
        s = a ? i(a) : n;
    e.exports = s;
  }, function (e, t, r) {
    var n = r(42),
        i = r(87),
        o = r(44),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) {
      return o(e) && i(e.length) && !!a[n(e)];
    };
  }, function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return e(t);
      };
    };
  }, function (e, t, r) {
    (function (e) {
      var n = r(85),
          i = t && !t.nodeType && t,
          o = i && "object" == typeof e && e && !e.nodeType && e,
          a = o && o.exports === i && n.process,
          s = function () {
        try {
          var e = o && o.require && o.require("util").types;

          return e || a && a.binding && a.binding("util");
        } catch (e) {}
      }();

      e.exports = s;
    }).call(this, r(25)(e));
  }, function (e, t, r) {
    var n = r(200),
        i = r(201),
        o = Object.prototype.hasOwnProperty;

    e.exports = function (e) {
      if (!n(e)) return i(e);
      var t = [];

      for (var r in Object(e)) {
        o.call(e, r) && "constructor" != r && t.push(r);
      }

      return t;
    };
  }, function (e, t) {
    var r = Object.prototype;

    e.exports = function (e) {
      var t = e && e.constructor;
      return e === ("function" == typeof t && t.prototype || r);
    };
  }, function (e, t, r) {
    var n = r(202)(Object.keys, Object);
    e.exports = n;
  }, function (e, t) {
    e.exports = function (e, t) {
      return function (r) {
        return e(t(r));
      };
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      return (0, i.default)(function (t, r) {
        var i;

        try {
          i = e.apply(this, t);
        } catch (e) {
          return r(e);
        }

        (0, n.default)(i) && "function" == typeof i.then ? i.then(function (e) {
          s(r, null, e);
        }, function (e) {
          s(r, e.message ? e : new Error(e));
        }) : r(null, i);
      });
    };
    var n = a(r(86)),
        i = a(r(204)),
        o = a(r(205));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(e, t, r) {
      try {
        e(t, r);
      } catch (e) {
        (0, o.default)(f, e);
      }
    }

    function f(e) {
      throw e;
    }

    e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      return function () {
        var t = (0, o.default)(arguments),
            r = t.pop();
        e.call(this, t, r);
      };
    };
    var n,
        i = r(28),
        o = (n = i) && n.__esModule ? n : {
      default: n
    };
    e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    (function (e, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.hasNextTick = t.hasSetImmediate = void 0, t.fallback = c, t.wrap = h;
      var i,
          o = r(28),
          a = (i = o) && i.__esModule ? i : {
        default: i
      };
      var s,
          f = t.hasSetImmediate = "function" == typeof e && e,
          u = t.hasNextTick = "object" == typeof n && "function" == typeof n.nextTick;

      function c(e) {
        setTimeout(e, 0);
      }

      function h(e) {
        return function (t) {
          var r = (0, a.default)(arguments, 1);
          e(function () {
            t.apply(null, r);
          });
        };
      }

      s = f ? e : u ? n.nextTick : c, t.default = h(s);
    }).call(this, r(33).setImmediate, r(3));
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e, t, r, o) {
      o = o || n.default, t = t || [];
      var a = [],
          s = 0,
          f = (0, i.default)(r);
      e(t, function (e, t, r) {
        var n = s++;
        f(e, function (e, t) {
          a[n] = t, r(e);
        });
      }, function (e) {
        o(e, a);
      });
    };
    var n = o(r(22)),
        i = o(r(13));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(208)),
        i = o(r(91));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    t.default = (0, i.default)(n.default, 1), e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e, t, r, a) {
      (0, n.default)(t)(e, (0, i.default)((0, o.default)(r)), a);
    };
    var n = a(r(89)),
        i = a(r(209)),
        o = a(r(13));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      return function (t, r, n) {
        return e(t, n);
      };
    }, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    var n = r(9).EventEmitter,
        i = r(10).inherits;

    function o() {
      n.call(this), this.isLocked = !0;
    }

    e.exports = o, i(o, n), o.prototype.go = function () {
      this.isLocked = !1, this.emit("unlock");
    }, o.prototype.stop = function () {
      this.isLocked = !0, this.emit("lock");
    }, o.prototype.await = function (e) {
      this.isLocked ? this.once("unlock", e) : setTimeout(e);
    };
  }, function (e, t, r) {
    t.parse = r(212), t.stringify = r(213);
  }, function (e, t) {
    var r,
        n,
        i,
        _o,
        a = {
      '"': '"',
      "\\": "\\",
      "/": "/",
      b: "\b",
      f: "\f",
      n: "\n",
      r: "\r",
      t: "\t"
    },
        s = function s(e) {
      throw {
        name: "SyntaxError",
        message: e,
        at: r,
        text: i
      };
    },
        f = function f(e) {
      return e && e !== n && s("Expected '" + e + "' instead of '" + n + "'"), n = i.charAt(r), r += 1, n;
    },
        u = function u() {
      var e,
          t = "";

      for ("-" === n && (t = "-", f("-")); n >= "0" && n <= "9";) {
        t += n, f();
      }

      if ("." === n) for (t += "."; f() && n >= "0" && n <= "9";) {
        t += n;
      }
      if ("e" === n || "E" === n) for (t += n, f(), "-" !== n && "+" !== n || (t += n, f()); n >= "0" && n <= "9";) {
        t += n, f();
      }
      if (e = +t, isFinite(e)) return e;
      s("Bad number");
    },
        c = function c() {
      var e,
          t,
          r,
          i = "";
      if ('"' === n) for (; f();) {
        if ('"' === n) return f(), i;
        if ("\\" === n) {
          if (f(), "u" === n) {
            for (r = 0, t = 0; t < 4 && (e = parseInt(f(), 16), isFinite(e)); t += 1) {
              r = 16 * r + e;
            }

            i += String.fromCharCode(r);
          } else {
            if ("string" != typeof a[n]) break;
            i += a[n];
          }
        } else i += n;
      }
      s("Bad string");
    },
        h = function h() {
      for (; n && n <= " ";) {
        f();
      }
    };

    _o = function o() {
      switch (h(), n) {
        case "{":
          return function () {
            var e,
                t = {};

            if ("{" === n) {
              if (f("{"), h(), "}" === n) return f("}"), t;

              for (; n;) {
                if (e = c(), h(), f(":"), Object.hasOwnProperty.call(t, e) && s('Duplicate key "' + e + '"'), t[e] = _o(), h(), "}" === n) return f("}"), t;
                f(","), h();
              }
            }

            s("Bad object");
          }();

        case "[":
          return function () {
            var e = [];

            if ("[" === n) {
              if (f("["), h(), "]" === n) return f("]"), e;

              for (; n;) {
                if (e.push(_o()), h(), "]" === n) return f("]"), e;
                f(","), h();
              }
            }

            s("Bad array");
          }();

        case '"':
          return c();

        case "-":
          return u();

        default:
          return n >= "0" && n <= "9" ? u() : function () {
            switch (n) {
              case "t":
                return f("t"), f("r"), f("u"), f("e"), !0;

              case "f":
                return f("f"), f("a"), f("l"), f("s"), f("e"), !1;

              case "n":
                return f("n"), f("u"), f("l"), f("l"), null;
            }

            s("Unexpected '" + n + "'");
          }();
      }
    }, e.exports = function (e, t) {
      var a;
      return i = e, r = 0, n = " ", a = _o(), h(), n && s("Syntax error"), "function" == typeof t ? function e(r, n) {
        var i,
            o,
            a = r[n];
        if (a && "object" == typeof a) for (i in a) {
          Object.prototype.hasOwnProperty.call(a, i) && (void 0 !== (o = e(a, i)) ? a[i] = o : delete a[i]);
        }
        return t.call(r, n, a);
      }({
        "": a
      }, "") : a;
    };
  }, function (e, t) {
    var r,
        n,
        i,
        o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        a = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    };

    function s(e) {
      return o.lastIndex = 0, o.test(e) ? '"' + e.replace(o, function (e) {
        var t = a[e];
        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + e + '"';
    }

    e.exports = function (e, t, o) {
      var a;
      if (r = "", n = "", "number" == typeof o) for (a = 0; a < o; a += 1) {
        n += " ";
      } else "string" == typeof o && (n = o);
      if (i = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
      return function e(t, o) {
        var a,
            f,
            u,
            c,
            h,
            d = r,
            l = o[t];

        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof i && (l = i.call(o, t, l)), typeof l) {
          case "string":
            return s(l);

          case "number":
            return isFinite(l) ? String(l) : "null";

          case "boolean":
          case "null":
            return String(l);

          case "object":
            if (!l) return "null";

            if (r += n, h = [], "[object Array]" === Object.prototype.toString.apply(l)) {
              for (c = l.length, a = 0; a < c; a += 1) {
                h[a] = e(a, l) || "null";
              }

              return u = 0 === h.length ? "[]" : r ? "[\n" + r + h.join(",\n" + r) + "\n" + d + "]" : "[" + h.join(",") + "]", r = d, u;
            }

            if (i && "object" == typeof i) for (c = i.length, a = 0; a < c; a += 1) {
              "string" == typeof (f = i[a]) && (u = e(f, l)) && h.push(s(f) + (r ? ": " : ":") + u);
            } else for (f in l) {
              Object.prototype.hasOwnProperty.call(l, f) && (u = e(f, l)) && h.push(s(f) + (r ? ": " : ":") + u);
            }
            return u = 0 === h.length ? "{}" : r ? "{\n" + r + h.join(",\n" + r) + "\n" + d + "}" : "{" + h.join(",") + "}", r = d, u;
        }
      }("", {
        "": e
      });
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function () {
      var e = new Date().getTime() * Math.pow(10, 3),
          t = Math.floor(Math.random() * Math.pow(10, 3));
      return e + t;
    };
  }, function (e, t, r) {
    var n = r(216),
        i = r(48),
        o = [void 0, null, "<nil>"];

    e.exports = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.blockTracker;
      if (!t) throw new Error("createBlockCacheMiddleware - No BlockTracker specified");
      var r = new a(),
          o = {
        perma: r,
        block: r,
        fork: r
      };
      return i( /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee26(e, i, a) {
          var s, f, u, c, _e5, h;

          return _regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  if (!e.skipCache) {
                    _context26.next = 2;
                    break;
                  }

                  return _context26.abrupt("return", a());

                case 2:
                  s = n.cacheTypeForPayload(e), f = o[s];

                  if (f) {
                    _context26.next = 5;
                    break;
                  }

                  return _context26.abrupt("return", a());

                case 5:
                  if (f.canCacheRequest(e)) {
                    _context26.next = 7;
                    break;
                  }

                  return _context26.abrupt("return", a());

                case 7:
                  c = n.blockTagForPayload(e);

                  if (!(c || (c = "latest"), "earliest" === c)) {
                    _context26.next = 12;
                    break;
                  }

                  u = "0x00";
                  _context26.next = 20;
                  break;

                case 12:
                  if (!("latest" === c)) {
                    _context26.next = 19;
                    break;
                  }

                  _context26.next = 15;
                  return t.getLatestBlock();

                case 15:
                  _e5 = _context26.sent;
                  r.clearBefore(_e5), u = _e5;
                  _context26.next = 20;
                  break;

                case 19:
                  u = c;

                case 20:
                  _context26.next = 22;
                  return f.get(e, u);

                case 22:
                  h = _context26.sent;

                  if (!(void 0 === h)) {
                    _context26.next = 30;
                    break;
                  }

                  _context26.next = 26;
                  return a();

                case 26:
                  _context26.next = 28;
                  return f.set(e, u, i.result);

                case 28:
                  _context26.next = 31;
                  break;

                case 30:
                  i.result = h;

                case 31:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26);
        }));

        return function (_x18, _x19, _x20) {
          return _ref16.apply(this, arguments);
        };
      }());
    };

    var a = /*#__PURE__*/function () {
      "use strict";

      function a() {
        _classCallCheck(this, a);

        this.cache = {};
      }

      _createClass(a, [{
        key: "getBlockCacheForPayload",
        value: function getBlockCacheForPayload(e, t) {
          var r = Number.parseInt(t, 16);
          var n = this.cache[r];

          if (!n) {
            var _e6 = {};
            this.cache[r] = _e6, n = _e6;
          }

          return n;
        }
      }, {
        key: "get",
        value: function () {
          var _get2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee27(e, t) {
            var r;
            return _regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    r = this.getBlockCacheForPayload(e, t);

                    if (r) {
                      _context27.next = 3;
                      break;
                    }

                    return _context27.abrupt("return");

                  case 3:
                    return _context27.abrupt("return", r[n.cacheIdentifierForPayload(e, !0)]);

                  case 4:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));

          function get(_x21, _x22) {
            return _get2.apply(this, arguments);
          }

          return get;
        }()
      }, {
        key: "set",
        value: function () {
          var _set = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee28(e, t, r) {
            return _regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    if (this.canCacheResult(e, r)) {
                      _context28.next = 2;
                      break;
                    }

                    return _context28.abrupt("return");

                  case 2:
                    this.getBlockCacheForPayload(e, t)[n.cacheIdentifierForPayload(e, !0)] = r;

                  case 3:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));

          function set(_x23, _x24, _x25) {
            return _set.apply(this, arguments);
          }

          return set;
        }()
      }, {
        key: "canCacheRequest",
        value: function canCacheRequest(e) {
          if (!n.canCache(e)) return !1;
          return "pending" !== n.blockTagForPayload(e);
        }
      }, {
        key: "canCacheResult",
        value: function canCacheResult(e, t) {
          if (!o.includes(t)) return !!(!["eth_getTransactionByHash", "eth_getTransactionReceipt"].includes(e.method) || t && t.blockHash && "0x0000000000000000000000000000000000000000000000000000000000000000" !== t.blockHash);
        }
      }, {
        key: "clearBefore",
        value: function clearBefore(e) {
          var t = this,
              r = Number.parseInt(e, 16);
          Object.keys(t.cache).map(Number).filter(function (e) {
            return e < r;
          }).forEach(function (e) {
            return delete t.cache[e];
          });
        }
      }]);

      return a;
    }();
  }, function (e, t, r) {
    var n = r(93);

    function i(e) {
      return "never" !== s(e);
    }

    function o(e) {
      var t = a(e);
      return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t);
    }

    function a(e) {
      switch (e.method) {
        case "eth_getStorageAt":
          return 2;

        case "eth_getBalance":
        case "eth_getCode":
        case "eth_getTransactionCount":
        case "eth_call":
          return 1;

        case "eth_getBlockByNumber":
          return 0;

        default:
          return;
      }
    }

    function s(e) {
      switch (e.method) {
        case "web3_clientVersion":
        case "web3_sha3":
        case "eth_protocolVersion":
        case "eth_getBlockTransactionCountByHash":
        case "eth_getUncleCountByBlockHash":
        case "eth_getCode":
        case "eth_getBlockByHash":
        case "eth_getTransactionByHash":
        case "eth_getTransactionByBlockHashAndIndex":
        case "eth_getTransactionReceipt":
        case "eth_getUncleByBlockHashAndIndex":
        case "eth_getCompilers":
        case "eth_compileLLL":
        case "eth_compileSolidity":
        case "eth_compileSerpent":
        case "shh_version":
        case "test_permaCache":
          return "perma";

        case "eth_getBlockByNumber":
        case "eth_getBlockTransactionCountByNumber":
        case "eth_getUncleCountByBlockNumber":
        case "eth_getTransactionByBlockNumberAndIndex":
        case "eth_getUncleByBlockNumberAndIndex":
        case "test_forkCache":
          return "fork";

        case "eth_gasPrice":
        case "eth_blockNumber":
        case "eth_getBalance":
        case "eth_getStorageAt":
        case "eth_getTransactionCount":
        case "eth_call":
        case "eth_estimateGas":
        case "eth_getFilterLogs":
        case "eth_getLogs":
        case "test_blockCache":
          return "block";

        case "net_version":
        case "net_peerCount":
        case "net_listening":
        case "eth_syncing":
        case "eth_sign":
        case "eth_coinbase":
        case "eth_mining":
        case "eth_hashrate":
        case "eth_accounts":
        case "eth_sendTransaction":
        case "eth_sendRawTransaction":
        case "eth_newFilter":
        case "eth_newBlockFilter":
        case "eth_newPendingTransactionFilter":
        case "eth_uninstallFilter":
        case "eth_getFilterChanges":
        case "eth_getWork":
        case "eth_submitWork":
        case "eth_submitHashrate":
        case "db_putString":
        case "db_getString":
        case "db_putHex":
        case "db_getHex":
        case "shh_post":
        case "shh_newIdentity":
        case "shh_hasIdentity":
        case "shh_newGroup":
        case "shh_addToGroup":
        case "shh_newFilter":
        case "shh_uninstallFilter":
        case "shh_getFilterChanges":
        case "shh_getMessages":
        case "test_neverCache":
          return "never";
      }
    }

    e.exports = {
      cacheIdentifierForPayload: function cacheIdentifierForPayload(e, t) {
        var r = t ? o(e) : e.params;
        return i(e) ? e.method + ":" + n(r) : null;
      },
      canCache: i,
      blockTagForPayload: function blockTagForPayload(e) {
        var t = a(e);
        if (t >= e.params.length) return null;
        return e.params[t];
      },
      paramsWithoutBlockTag: o,
      blockTagParamIndex: a,
      cacheTypeForPayload: s
    };
  }, function (e, t, r) {
    "use strict";

    (function (e, r) {
      var n = /*#__PURE__*/function () {
        function n(e) {
          _classCallCheck(this, n);

          this.tasks = [], this.count = e;
        }

        _createClass(n, [{
          key: "sched",
          value: function sched() {
            if (this.count > 0 && this.tasks.length > 0) {
              this.count--;

              var _e7 = this.tasks.shift();

              if (void 0 === _e7) throw "Unexpected undefined value in tasks list";

              _e7();
            }
          }
        }, {
          key: "acquire",
          value: function acquire() {
            var _this10 = this;

            return new Promise(function (t, _n3) {
              _this10.tasks.push(function () {
                var e = !1;
                t(function () {
                  e || (e = !0, _this10.count++, _this10.sched());
                });
              }), e && e.nextTick ? e.nextTick(_this10.sched.bind(_this10)) : r(_this10.sched.bind(_this10));
            });
          }
        }, {
          key: "use",
          value: function use(e) {
            return this.acquire().then(function (t) {
              return e().then(function (e) {
                return t(), e;
              }).catch(function (e) {
                throw t(), e;
              });
            });
          }
        }]);

        return n;
      }();

      t.Semaphore = n;

      t.Mutex = /*#__PURE__*/function (_n4) {
        _inherits(_class4, _n4);

        var _super4 = _createSuper(_class4);

        function _class4() {
          _classCallCheck(this, _class4);

          return _super4.call(this, 1);
        }

        return _class4;
      }(n);
    }).call(this, r(3), r(33).setImmediate);
  }, function (e, t) {
    e.exports = function (e) {
      return function (t, r, n, i) {
        var o = e[t.method];
        return void 0 === o ? n() : "function" == typeof o ? o(t, r, n, i) : (r.result = o, i());
      };
    };
  }, function (e, t, r) {
    var n = r(81),
        i = r(39),
        o = r(220),
        _r4 = r(23),
        a = _r4.bnToHex,
        s = _r4.hexToInt,
        f = _r4.incrementHexInt,
        u = _r4.minBlockRef,
        c = _r4.blockRefIsNumber;

    e.exports = /*#__PURE__*/function (_o2) {
      "use strict";

      _inherits(_class5, _o2);

      var _super5 = _createSuper(_class5);

      function _class5(_ref17) {
        var _this11;

        var e = _ref17.provider,
            t = _ref17.params;

        _classCallCheck(this, _class5);

        _this11 = _super5.call(this), _this11.type = "log", _this11.ethQuery = new n(e), _this11.params = Object.assign({
          fromBlock: "latest",
          toBlock: "latest",
          address: void 0,
          topics: []
        }, t), _this11.params.address && (Array.isArray(_this11.params.address) || (_this11.params.address = [_this11.params.address]), _this11.params.address = _this11.params.address.map(function (e) {
          return e.toLowerCase();
        }));
        return _this11;
      }

      _createClass(_class5, [{
        key: "initialize",
        value: function () {
          var _initialize2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee29(_ref18) {
            var e, t, r, n, i;
            return _regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    e = _ref18.currentBlock;
                    t = this.params.fromBlock;
                    ["latest", "pending"].includes(t) && (t = e), "earliest" === t && (t = "0x0"), this.params.fromBlock = t;
                    r = u(this.params.toBlock, e);
                    n = Object.assign({}, this.params, {
                      toBlock: r
                    });
                    _context29.next = 7;
                    return this._fetchLogs(n);

                  case 7:
                    i = _context29.sent;
                    this.addInitialResults(i);

                  case 9:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));

          function initialize(_x26) {
            return _initialize2.apply(this, arguments);
          }

          return initialize;
        }()
      }, {
        key: "update",
        value: function () {
          var _update2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee30(_ref19) {
            var _this12 = this;

            var e, t, r, n, i, o;
            return _regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    e = _ref19.oldBlock, t = _ref19.newBlock;
                    r = t;
                    n = e ? f(e) : t;
                    i = Object.assign({}, this.params, {
                      fromBlock: n,
                      toBlock: r
                    });
                    _context30.next = 6;
                    return this._fetchLogs(i);

                  case 6:
                    o = _context30.sent.filter(function (e) {
                      return _this12.matchLog(e);
                    });
                    this.addResults(o);

                  case 8:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));

          function update(_x27) {
            return _update2.apply(this, arguments);
          }

          return update;
        }()
      }, {
        key: "_fetchLogs",
        value: function () {
          var _fetchLogs2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee31(e) {
            var _this13 = this;

            return _regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    _context31.next = 2;
                    return i(function (t) {
                      return _this13.ethQuery.getLogs(e, t);
                    })();

                  case 2:
                    return _context31.abrupt("return", _context31.sent);

                  case 3:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31);
          }));

          function _fetchLogs(_x28) {
            return _fetchLogs2.apply(this, arguments);
          }

          return _fetchLogs;
        }()
      }, {
        key: "matchLog",
        value: function matchLog(e) {
          if (s(this.params.fromBlock) >= s(e.blockNumber)) return !1;
          if (c(this.params.toBlock) && s(this.params.toBlock) <= s(e.blockNumber)) return !1;
          var t = e.address && e.address.toLowerCase();
          if (this.params.address && t && !this.params.address.includes(t)) return !1;
          return this.params.topics.every(function (t, r) {
            var n = e.topics[r];
            if (!n) return !1;
            n = n.toLowerCase();
            var i = Array.isArray(t) ? t : [t];
            if (i.includes(null)) return !0;
            i = i.map(function (e) {
              return e.toLowerCase();
            });
            return i.includes(n);
          });
        }
      }]);

      return _class5;
    }(o);
  }, function (e, t, r) {
    var n = r(49);

    e.exports = /*#__PURE__*/function (_n5) {
      "use strict";

      _inherits(_class6, _n5);

      var _super6 = _createSuper(_class6);

      function _class6() {
        var _this14;

        _classCallCheck(this, _class6);

        _this14 = _super6.call(this), _this14.allResults = [];
        return _this14;
      }

      _createClass(_class6, [{
        key: "update",
        value: function () {
          var _update3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee32() {
            return _regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    throw new Error("BaseFilterWithHistory - no update method specified");

                  case 1:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32);
          }));

          function update() {
            return _update3.apply(this, arguments);
          }

          return update;
        }()
      }, {
        key: "addResults",
        value: function addResults(e) {
          this.allResults = this.allResults.concat(e), _get(_getPrototypeOf(_class6.prototype), "addResults", this).call(this, e);
        }
      }, {
        key: "addInitialResults",
        value: function addInitialResults(e) {
          this.allResults = this.allResults.concat(e), _get(_getPrototypeOf(_class6.prototype), "addInitialResults", this).call(this, e);
        }
      }, {
        key: "getAllResults",
        value: function getAllResults() {
          return this.allResults;
        }
      }]);

      return _class6;
    }(n);
  }, function (e, t, r) {
    var n = r(49),
        i = r(50),
        _r5 = r(23),
        o = _r5.incrementHexInt;

    e.exports = /*#__PURE__*/function (_n6) {
      "use strict";

      _inherits(_class7, _n6);

      var _super7 = _createSuper(_class7);

      function _class7(_ref20) {
        var _this15;

        var e = _ref20.provider,
            t = _ref20.params;

        _classCallCheck(this, _class7);

        _this15 = _super7.call(this), _this15.type = "block", _this15.provider = e;
        return _this15;
      }

      _createClass(_class7, [{
        key: "update",
        value: function () {
          var _update4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee33(_ref21) {
            var e, t, r, n, a;
            return _regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    e = _ref21.oldBlock, t = _ref21.newBlock;
                    r = t;
                    n = o(e);
                    _context33.next = 5;
                    return i({
                      provider: this.provider,
                      fromBlock: n,
                      toBlock: r
                    });

                  case 5:
                    a = _context33.sent.map(function (e) {
                      return e.hash;
                    });
                    this.addResults(a);

                  case 7:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));

          function update(_x29) {
            return _update4.apply(this, arguments);
          }

          return update;
        }()
      }]);

      return _class7;
    }(n);
  }, function (e, t, r) {
    var n = r(223),
        i = r(49),
        o = r(50),
        _r6 = r(23),
        a = _r6.incrementHexInt;

    e.exports = /*#__PURE__*/function (_i2) {
      "use strict";

      _inherits(_class8, _i2);

      var _super8 = _createSuper(_class8);

      function _class8(_ref22) {
        var _this16;

        var e = _ref22.provider;

        _classCallCheck(this, _class8);

        _this16 = _super8.call(this), _this16.type = "tx", _this16.provider = e;
        return _this16;
      }

      _createClass(_class8, [{
        key: "update",
        value: function () {
          var _update5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee34(_ref23) {
            var e, t, r, i, s;
            return _regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    e = _ref23.oldBlock;
                    t = e;
                    r = a(e);
                    _context34.next = 5;
                    return o({
                      provider: this.provider,
                      fromBlock: r,
                      toBlock: t
                    });

                  case 5:
                    i = _context34.sent;
                    s = n(i, function (e) {
                      return e.transactions;
                    });
                    this.addResults(s);

                  case 8:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));

          function update(_x30) {
            return _update5.apply(this, arguments);
          }

          return update;
        }()
      }]);

      return _class8;
    }(i);
  }, function (e, t, r) {
    (function (e, r) {
      var n = "[object Arguments]",
          i = "[object Map]",
          o = "[object Object]",
          a = "[object Set]",
          s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          f = /^\w*$/,
          u = /^\./,
          c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          h = /\\(\\)?/g,
          d = /^\[object .+?Constructor\]$/,
          l = /^(?:0|[1-9]\d*)$/,
          p = {};
      p["[object Float32Array]"] = p["[object Float64Array]"] = p["[object Int8Array]"] = p["[object Int16Array]"] = p["[object Int32Array]"] = p["[object Uint8Array]"] = p["[object Uint8ClampedArray]"] = p["[object Uint16Array]"] = p["[object Uint32Array]"] = !0, p[n] = p["[object Array]"] = p["[object ArrayBuffer]"] = p["[object Boolean]"] = p["[object DataView]"] = p["[object Date]"] = p["[object Error]"] = p["[object Function]"] = p[i] = p["[object Number]"] = p[o] = p["[object RegExp]"] = p[a] = p["[object String]"] = p["[object WeakMap]"] = !1;

      var b = "object" == typeof e && e && e.Object === Object && e,
          y = "object" == typeof self && self && self.Object === Object && self,
          g = b || y || Function("return this")(),
          v = t && !t.nodeType && t,
          m = v && "object" == typeof r && r && !r.nodeType && r,
          w = m && m.exports === v && b.process,
          _ = function () {
        try {
          return w && w.binding("util");
        } catch (e) {}
      }(),
          E = _ && _.isTypedArray;

      function S(e, t) {
        for (var r = -1, n = e ? e.length : 0, i = Array(n); ++r < n;) {
          i[r] = t(e[r], r, e);
        }

        return i;
      }

      function A(e, t) {
        for (var r = -1, n = t.length, i = e.length; ++r < n;) {
          e[i + r] = t[r];
        }

        return e;
      }

      function x(e, t) {
        for (var r = -1, n = e ? e.length : 0; ++r < n;) {
          if (t(e[r], r, e)) return !0;
        }

        return !1;
      }

      function k(e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try {
          t = !!(e + "");
        } catch (e) {}
        return t;
      }

      function M(e) {
        var t = -1,
            r = Array(e.size);
        return e.forEach(function (e, n) {
          r[++t] = [n, e];
        }), r;
      }

      function T(e) {
        var t = -1,
            r = Array(e.size);
        return e.forEach(function (e) {
          r[++t] = e;
        }), r;
      }

      var I,
          R,
          P,
          L = Array.prototype,
          B = Function.prototype,
          C = Object.prototype,
          O = g["__core-js_shared__"],
          N = (I = /[^.]+$/.exec(O && O.keys && O.keys.IE_PROTO || "")) ? "Symbol(src)_1." + I : "",
          j = B.toString,
          D = C.hasOwnProperty,
          U = C.toString,
          z = RegExp("^" + j.call(D).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          q = g.Symbol,
          F = g.Uint8Array,
          K = C.propertyIsEnumerable,
          H = L.splice,
          V = q ? q.isConcatSpreadable : void 0,
          Y = (R = Object.keys, P = Object, function (e) {
        return R(P(e));
      }),
          W = Te(g, "DataView"),
          G = Te(g, "Map"),
          Z = Te(g, "Promise"),
          J = Te(g, "Set"),
          $ = Te(g, "WeakMap"),
          X = Te(Object, "create"),
          Q = je(W),
          ee = je(G),
          te = je(Z),
          re = je(J),
          ne = je($),
          ie = q ? q.prototype : void 0,
          oe = ie ? ie.valueOf : void 0,
          ae = ie ? ie.toString : void 0;

      function se(e) {
        var t = -1,
            r = e ? e.length : 0;

        for (this.clear(); ++t < r;) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }

      function fe(e) {
        var t = -1,
            r = e ? e.length : 0;

        for (this.clear(); ++t < r;) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }

      function ue(e) {
        var t = -1,
            r = e ? e.length : 0;

        for (this.clear(); ++t < r;) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }

      function ce(e) {
        var t = -1,
            r = e ? e.length : 0;

        for (this.__data__ = new ue(); ++t < r;) {
          this.add(e[t]);
        }
      }

      function he(e) {
        this.__data__ = new fe(e);
      }

      function de(e, t) {
        var r = qe(e) || ze(e) ? function (e, t) {
          for (var r = -1, n = Array(e); ++r < e;) {
            n[r] = t(r);
          }

          return n;
        }(e.length, String) : [],
            n = r.length,
            i = !!n;

        for (var o in e) {
          !t && !D.call(e, o) || i && ("length" == o || Pe(o, n)) || r.push(o);
        }

        return r;
      }

      function le(e, t) {
        for (var r = e.length; r--;) {
          if (Ue(e[r][0], t)) return r;
        }

        return -1;
      }

      se.prototype.clear = function () {
        this.__data__ = X ? X(null) : {};
      }, se.prototype.delete = function (e) {
        return this.has(e) && delete this.__data__[e];
      }, se.prototype.get = function (e) {
        var t = this.__data__;

        if (X) {
          var r = t[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }

        return D.call(t, e) ? t[e] : void 0;
      }, se.prototype.has = function (e) {
        var t = this.__data__;
        return X ? void 0 !== t[e] : D.call(t, e);
      }, se.prototype.set = function (e, t) {
        return this.__data__[e] = X && void 0 === t ? "__lodash_hash_undefined__" : t, this;
      }, fe.prototype.clear = function () {
        this.__data__ = [];
      }, fe.prototype.delete = function (e) {
        var t = this.__data__,
            r = le(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : H.call(t, r, 1), !0);
      }, fe.prototype.get = function (e) {
        var t = this.__data__,
            r = le(t, e);
        return r < 0 ? void 0 : t[r][1];
      }, fe.prototype.has = function (e) {
        return le(this.__data__, e) > -1;
      }, fe.prototype.set = function (e, t) {
        var r = this.__data__,
            n = le(r, e);
        return n < 0 ? r.push([e, t]) : r[n][1] = t, this;
      }, ue.prototype.clear = function () {
        this.__data__ = {
          hash: new se(),
          map: new (G || fe)(),
          string: new se()
        };
      }, ue.prototype.delete = function (e) {
        return Me(this, e).delete(e);
      }, ue.prototype.get = function (e) {
        return Me(this, e).get(e);
      }, ue.prototype.has = function (e) {
        return Me(this, e).has(e);
      }, ue.prototype.set = function (e, t) {
        return Me(this, e).set(e, t), this;
      }, ce.prototype.add = ce.prototype.push = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      }, ce.prototype.has = function (e) {
        return this.__data__.has(e);
      }, he.prototype.clear = function () {
        this.__data__ = new fe();
      }, he.prototype.delete = function (e) {
        return this.__data__.delete(e);
      }, he.prototype.get = function (e) {
        return this.__data__.get(e);
      }, he.prototype.has = function (e) {
        return this.__data__.has(e);
      }, he.prototype.set = function (e, t) {
        var r = this.__data__;

        if (r instanceof fe) {
          var n = r.__data__;
          if (!G || n.length < 199) return n.push([e, t]), this;
          r = this.__data__ = new ue(n);
        }

        return r.set(e, t), this;
      };
      var pe,
          be,
          ye = (pe = function pe(e, t) {
        return e && ge(e, t, Ze);
      }, function (e, t) {
        if (null == e) return e;
        if (!Fe(e)) return pe(e, t);

        for (var r = e.length, n = be ? r : -1, i = Object(e); (be ? n-- : ++n < r) && !1 !== t(i[n], n, i);) {
          ;
        }

        return e;
      });

      var ge = function (e) {
        return function (t, r, n) {
          for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
            var f = a[e ? s : ++i];
            if (!1 === r(o[f], f, o)) break;
          }

          return t;
        };
      }();

      function ve(e, t) {
        for (var r = 0, n = (t = Le(t, e) ? [t] : xe(t)).length; null != e && r < n;) {
          e = e[Ne(t[r++])];
        }

        return r && r == n ? e : void 0;
      }

      function me(e, t) {
        return null != e && t in Object(e);
      }

      function we(e, t, r, s, f) {
        return e === t || (null == e || null == t || !Ve(e) && !Ye(t) ? e != e && t != t : function (e, t, r, s, f, u) {
          var c = qe(e),
              h = qe(t),
              d = "[object Array]",
              l = "[object Array]";
          c || (d = (d = Ie(e)) == n ? o : d);
          h || (l = (l = Ie(t)) == n ? o : l);
          var p = d == o && !k(e),
              b = l == o && !k(t),
              y = d == l;
          if (y && !p) return u || (u = new he()), c || Ge(e) ? ke(e, t, r, s, f, u) : function (e, t, r, n, o, s, f) {
            switch (r) {
              case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;

              case "[object ArrayBuffer]":
                return !(e.byteLength != t.byteLength || !n(new F(e), new F(t)));

              case "[object Boolean]":
              case "[object Date]":
              case "[object Number]":
                return Ue(+e, +t);

              case "[object Error]":
                return e.name == t.name && e.message == t.message;

              case "[object RegExp]":
              case "[object String]":
                return e == t + "";

              case i:
                var u = M;

              case a:
                var c = 2 & s;
                if (u || (u = T), e.size != t.size && !c) return !1;
                var h = f.get(e);
                if (h) return h == t;
                s |= 1, f.set(e, t);
                var d = ke(u(e), u(t), n, o, s, f);
                return f.delete(e), d;

              case "[object Symbol]":
                if (oe) return oe.call(e) == oe.call(t);
            }

            return !1;
          }(e, t, d, r, s, f, u);

          if (!(2 & f)) {
            var g = p && D.call(e, "__wrapped__"),
                v = b && D.call(t, "__wrapped__");

            if (g || v) {
              var m = g ? e.value() : e,
                  w = v ? t.value() : t;
              return u || (u = new he()), r(m, w, s, f, u);
            }
          }

          if (!y) return !1;
          return u || (u = new he()), function (e, t, r, n, i, o) {
            var a = 2 & i,
                s = Ze(e),
                f = s.length,
                u = Ze(t).length;
            if (f != u && !a) return !1;
            var c = f;

            for (; c--;) {
              var h = s[c];
              if (!(a ? h in t : D.call(t, h))) return !1;
            }

            var d = o.get(e);
            if (d && o.get(t)) return d == t;
            var l = !0;
            o.set(e, t), o.set(t, e);
            var p = a;

            for (; ++c < f;) {
              h = s[c];
              var b = e[h],
                  y = t[h];
              if (n) var g = a ? n(y, b, h, t, e, o) : n(b, y, h, e, t, o);

              if (!(void 0 === g ? b === y || r(b, y, n, i, o) : g)) {
                l = !1;
                break;
              }

              p || (p = "constructor" == h);
            }

            if (l && !p) {
              var v = e.constructor,
                  m = t.constructor;
              v == m || !("constructor" in e) || !("constructor" in t) || "function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m || (l = !1);
            }

            return o.delete(e), o.delete(t), l;
          }(e, t, r, s, f, u);
        }(e, t, we, r, s, f));
      }

      function _e(e) {
        return !(!Ve(e) || function (e) {
          return !!N && N in e;
        }(e)) && (Ke(e) || k(e) ? z : d).test(je(e));
      }

      function Ee(e) {
        return "function" == typeof e ? e : null == e ? Je : "object" == typeof e ? qe(e) ? function (e, t) {
          if (Le(e) && Be(t)) return Ce(Ne(e), t);
          return function (r) {
            var n = function (e, t, r) {
              var n = null == e ? void 0 : ve(e, t);
              return void 0 === n ? r : n;
            }(r, e);

            return void 0 === n && n === t ? function (e, t) {
              return null != e && function (e, t, r) {
                t = Le(t, e) ? [t] : xe(t);
                var n,
                    i = -1,
                    o = t.length;

                for (; ++i < o;) {
                  var a = Ne(t[i]);
                  if (!(n = null != e && r(e, a))) break;
                  e = e[a];
                }

                if (n) return n;
                return !!(o = e ? e.length : 0) && He(o) && Pe(a, o) && (qe(e) || ze(e));
              }(e, t, me);
            }(r, e) : we(t, n, void 0, 3);
          };
        }(e[0], e[1]) : function (e) {
          var t = function (e) {
            var t = Ze(e),
                r = t.length;

            for (; r--;) {
              var n = t[r],
                  i = e[n];
              t[r] = [n, i, Be(i)];
            }

            return t;
          }(e);

          if (1 == t.length && t[0][2]) return Ce(t[0][0], t[0][1]);
          return function (r) {
            return r === e || function (e, t, r, n) {
              var i = r.length,
                  o = i,
                  a = !n;
              if (null == e) return !o;

              for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
              }

              for (; ++i < o;) {
                var f = (s = r[i])[0],
                    u = e[f],
                    c = s[1];

                if (a && s[2]) {
                  if (void 0 === u && !(f in e)) return !1;
                } else {
                  var h = new he();
                  if (n) var d = n(u, c, f, e, t, h);
                  if (!(void 0 === d ? we(c, u, n, 3, h) : d)) return !1;
                }
              }

              return !0;
            }(r, e, t);
          };
        }(e) : Le(t = e) ? (r = Ne(t), function (e) {
          return null == e ? void 0 : e[r];
        }) : function (e) {
          return function (t) {
            return ve(t, e);
          };
        }(t);
        var t, r;
      }

      function Se(e) {
        if (r = (t = e) && t.constructor, n = "function" == typeof r && r.prototype || C, t !== n) return Y(e);
        var t,
            r,
            n,
            i = [];

        for (var o in Object(e)) {
          D.call(e, o) && "constructor" != o && i.push(o);
        }

        return i;
      }

      function Ae(e, t) {
        var r = -1,
            n = Fe(e) ? Array(e.length) : [];
        return ye(e, function (e, i, o) {
          n[++r] = t(e, i, o);
        }), n;
      }

      function xe(e) {
        return qe(e) ? e : Oe(e);
      }

      function ke(e, t, r, n, i, o) {
        var a = 2 & i,
            s = e.length,
            f = t.length;
        if (s != f && !(a && f > s)) return !1;
        var u = o.get(e);
        if (u && o.get(t)) return u == t;
        var c = -1,
            h = !0,
            d = 1 & i ? new ce() : void 0;

        for (o.set(e, t), o.set(t, e); ++c < s;) {
          var l = e[c],
              p = t[c];
          if (n) var b = a ? n(p, l, c, t, e, o) : n(l, p, c, e, t, o);

          if (void 0 !== b) {
            if (b) continue;
            h = !1;
            break;
          }

          if (d) {
            if (!x(t, function (e, t) {
              if (!d.has(t) && (l === e || r(l, e, n, i, o))) return d.add(t);
            })) {
              h = !1;
              break;
            }
          } else if (l !== p && !r(l, p, n, i, o)) {
            h = !1;
            break;
          }
        }

        return o.delete(e), o.delete(t), h;
      }

      function Me(e, t) {
        var r,
            n,
            i = e.__data__;
        return ("string" == (n = typeof (r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map;
      }

      function Te(e, t) {
        var r = function (e, t) {
          return null == e ? void 0 : e[t];
        }(e, t);

        return _e(r) ? r : void 0;
      }

      var Ie = function Ie(e) {
        return U.call(e);
      };

      function Re(e) {
        return qe(e) || ze(e) || !!(V && e && e[V]);
      }

      function Pe(e, t) {
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || l.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }

      function Le(e, t) {
        if (qe(e)) return !1;
        var r = typeof e;
        return !("number" != r && "symbol" != r && "boolean" != r && null != e && !We(e)) || f.test(e) || !s.test(e) || null != t && e in Object(t);
      }

      function Be(e) {
        return e == e && !Ve(e);
      }

      function Ce(e, t) {
        return function (r) {
          return null != r && r[e] === t && (void 0 !== t || e in Object(r));
        };
      }

      (W && "[object DataView]" != Ie(new W(new ArrayBuffer(1))) || G && Ie(new G()) != i || Z && "[object Promise]" != Ie(Z.resolve()) || J && Ie(new J()) != a || $ && "[object WeakMap]" != Ie(new $())) && (Ie = function Ie(e) {
        var t = U.call(e),
            r = t == o ? e.constructor : void 0,
            n = r ? je(r) : void 0;
        if (n) switch (n) {
          case Q:
            return "[object DataView]";

          case ee:
            return i;

          case te:
            return "[object Promise]";

          case re:
            return a;

          case ne:
            return "[object WeakMap]";
        }
        return t;
      });
      var Oe = De(function (e) {
        var t;
        e = null == (t = e) ? "" : function (e) {
          if ("string" == typeof e) return e;
          if (We(e)) return ae ? ae.call(e) : "";
          var t = e + "";
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
        }(t);
        var r = [];
        return u.test(e) && r.push(""), e.replace(c, function (e, t, n, i) {
          r.push(n ? i.replace(h, "$1") : t || e);
        }), r;
      });

      function Ne(e) {
        if ("string" == typeof e || We(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }

      function je(e) {
        if (null != e) {
          try {
            return j.call(e);
          } catch (e) {}

          try {
            return e + "";
          } catch (e) {}
        }

        return "";
      }

      function De(e, t) {
        if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");

        var r = function r() {
          var n = arguments,
              i = t ? t.apply(this, n) : n[0],
              o = r.cache;
          if (o.has(i)) return o.get(i);
          var a = e.apply(this, n);
          return r.cache = o.set(i, a), a;
        };

        return r.cache = new (De.Cache || ue)(), r;
      }

      function Ue(e, t) {
        return e === t || e != e && t != t;
      }

      function ze(e) {
        return function (e) {
          return Ye(e) && Fe(e);
        }(e) && D.call(e, "callee") && (!K.call(e, "callee") || U.call(e) == n);
      }

      De.Cache = ue;
      var qe = Array.isArray;

      function Fe(e) {
        return null != e && He(e.length) && !Ke(e);
      }

      function Ke(e) {
        var t = Ve(e) ? U.call(e) : "";
        return "[object Function]" == t || "[object GeneratorFunction]" == t;
      }

      function He(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
      }

      function Ve(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }

      function Ye(e) {
        return !!e && "object" == typeof e;
      }

      function We(e) {
        return "symbol" == typeof e || Ye(e) && "[object Symbol]" == U.call(e);
      }

      var Ge = E ? function (e) {
        return function (t) {
          return e(t);
        };
      }(E) : function (e) {
        return Ye(e) && He(e.length) && !!p[U.call(e)];
      };

      function Ze(e) {
        return Fe(e) ? de(e) : Se(e);
      }

      function Je(e) {
        return e;
      }

      r.exports = function (e, t) {
        return function e(t, r, n, i, o) {
          var a = -1,
              s = t.length;

          for (n || (n = Re), o || (o = []); ++a < s;) {
            var f = t[a];
            r > 0 && n(f) ? r > 1 ? e(f, r - 1, n, i, o) : A(o, f) : i || (o[o.length] = f);
          }

          return o;
        }(function (e, t) {
          return (qe(e) ? S : Ae)(e, Ee(t));
        }(e, t), 1);
      };
    }).call(this, r(5), r(25)(e));
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e, t) {
      if (t = (0, o.default)(t || i.default), !(0, n.default)(e)) return t(new Error("First argument to waterfall must be an array of functions"));
      if (!e.length) return t();
      var r = 0;

      function u(t) {
        var n = (0, f.default)(e[r++]);
        t.push((0, s.default)(c)), n.apply(null, t);
      }

      function c(n) {
        if (n || r === e.length) return t.apply(null, arguments);
        u((0, a.default)(arguments, 1));
      }

      u([]);
    };
    var n = u(r(90)),
        i = u(r(22)),
        o = u(r(43)),
        a = u(r(28)),
        s = u(r(45)),
        f = u(r(13));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e, t) {
      (0, i.default)(n.default, e, t);
    };
    var n = o(r(82)),
        i = o(r(226));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e, t, r) {
      r = r || n.default;
      var s = (0, i.default)(t) ? [] : {};
      e(t, function (e, t, r) {
        (0, a.default)(e)(function (e, n) {
          arguments.length > 2 && (n = (0, o.default)(arguments, 1)), s[t] = n, r(e);
        });
      }, function (e) {
        r(e, s);
      });
    };
    var n = s(r(22)),
        i = s(r(27)),
        o = s(r(28)),
        a = s(r(13));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = t.default;
  }, function (e, t, r) {
    "use strict";

    (function (e) {
      var n = this && this.__assign || function () {
        return (n = Object.assign || function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            for (var i in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
          }

          return e;
        }).apply(this, arguments);
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = r(14),
          o = r(228),
          a = r(247),
          s = r(249),
          f = {
        type: "object",
        properties: {
          types: {
            type: "object",
            additionalProperties: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string"
                  },
                  type: {
                    type: "string"
                  }
                },
                required: ["name", "type"]
              }
            }
          },
          primaryType: {
            type: "string"
          },
          domain: {
            type: "object"
          },
          message: {
            type: "object"
          }
        },
        required: ["types", "primaryType", "domain", "message"]
      };
      t.TYPED_MESSAGE_SCHEMA = f;
      var u = {
        encodeData: function encodeData(t, r, n, a) {
          var s = this;
          void 0 === a && (a = !0);
          var f = ["bytes32"],
              u = [this.hashType(t, n)];
          if (a) for (var c = function c(t, r, f) {
            if (void 0 !== n[r]) return ["bytes32", null == f ? "0x0000000000000000000000000000000000000000000000000000000000000000" : i.sha3(s.encodeData(r, f, n, a))];
            if (void 0 === f) throw new Error("missing value for field " + t + " of type " + r);
            if ("bytes" === r) return ["bytes32", i.sha3(f)];
            if ("string" === r) return "string" == typeof f && (f = e.from(f, "utf8")), ["bytes32", i.sha3(f)];

            if (r.lastIndexOf("]") === r.length - 1) {
              var u = r.slice(0, r.lastIndexOf("[")),
                  h = f.map(function (e) {
                return c(t, u, e);
              });
              return ["bytes32", i.sha3(o.rawEncode(h.map(function (e) {
                return e[0];
              }), h.map(function (e) {
                return e[1];
              })))];
            }

            return [r, f];
          }, h = 0, d = n[t]; h < d.length; h++) {
            var l = d[h],
                p = c(l.name, l.type, r[l.name]),
                b = p[0],
                y = p[1];
            f.push(b), u.push(y);
          } else for (var g = 0, v = n[t]; g < v.length; g++) {
            if (void 0 !== (y = r[(l = v[g]).name])) if ("bytes" === l.type) f.push("bytes32"), y = i.sha3(y), u.push(y);else if ("string" === l.type) f.push("bytes32"), "string" == typeof y && (y = e.from(y, "utf8")), y = i.sha3(y), u.push(y);else if (void 0 !== n[l.type]) f.push("bytes32"), y = i.sha3(this.encodeData(l.type, y, n, a)), u.push(y);else {
              if (l.type.lastIndexOf("]") === l.type.length - 1) throw new Error("Arrays currently unimplemented in encodeData");
              f.push(l.type), u.push(y);
            }
          }
          return o.rawEncode(f, u);
        },
        encodeType: function encodeType(e, t) {
          for (var r = "", n = this.findTypeDependencies(e, t).filter(function (t) {
            return t !== e;
          }), i = 0, o = n = [e].concat(n.sort()); i < o.length; i++) {
            var a = o[i];
            if (!t[a]) throw new Error("No type definition specified: " + a);
            r += a + "(" + t[a].map(function (e) {
              var t = e.name;
              return e.type + " " + t;
            }).join(",") + ")";
          }

          return r;
        },
        findTypeDependencies: function findTypeDependencies(e, t, r) {
          if (void 0 === r && (r = []), e = e.match(/^[0-9A-Z_a-z]*/)[0], r.includes(e) || void 0 === t[e]) return r;
          r.push(e);

          for (var n = 0, i = t[e]; n < i.length; n++) {
            for (var o = i[n], a = 0, s = this.findTypeDependencies(o.type, t, r); a < s.length; a++) {
              var f = s[a];
              !r.includes(f) && r.push(f);
            }
          }

          return r;
        },
        hashStruct: function hashStruct(e, t, r, n) {
          return void 0 === n && (n = !0), i.sha3(this.encodeData(e, t, r, n));
        },
        hashType: function hashType(e, t) {
          return i.sha3(this.encodeType(e, t));
        },
        sanitizeData: function sanitizeData(e) {
          var t = {};

          for (var r in f.properties) {
            e[r] && (t[r] = e[r]);
          }

          return "types" in t && (t.types = n({
            EIP712Domain: []
          }, t.types)), t;
        },
        sign: function sign(t, r) {
          void 0 === r && (r = !0);
          var n = this.sanitizeData(t),
              o = [e.from("1901", "hex")];
          return o.push(this.hashStruct("EIP712Domain", n.domain, n.types, r)), "EIP712Domain" !== n.primaryType && o.push(this.hashStruct(n.primaryType, n.message, n.types, r)), i.sha3(e.concat(o));
        }
      };

      function c(e, t, r) {
        var n = i.fromSigned(t),
            o = i.fromSigned(r),
            a = i.bufferToInt(e),
            s = E(i.toUnsigned(n).toString("hex"), 64),
            f = E(i.toUnsigned(o).toString("hex"), 64),
            u = i.stripHexPrefix(i.intToHex(a));
        return i.addHexPrefix(s.concat(f, u)).toString("hex");
      }

      function h(e, t) {
        var r = m(t.data),
            n = i.ecsign(r, e);
        return i.bufferToHex(c(n.v, n.r, n.s));
      }

      function d(e) {
        var t = w(m(e.data), e.sig),
            r = i.publicToAddress(t);
        return i.bufferToHex(r);
      }

      function l(e, t, r) {
        switch (r) {
          case "x25519-xsalsa20-poly1305":
            if ("string" != typeof t.data) throw new Error('Cannot detect secret message, message params should be of the form {data: "secret message"} ');
            var n = a.box.keyPair(),
                i = void 0;

            try {
              i = s.decodeBase64(e);
            } catch (e) {
              throw new Error("Bad public key");
            }

            var o = s.decodeUTF8(t.data),
                f = a.randomBytes(a.box.nonceLength),
                u = a.box(o, f, i, n.secretKey);
            return {
              version: "x25519-xsalsa20-poly1305",
              nonce: s.encodeBase64(f),
              ephemPublicKey: s.encodeBase64(n.publicKey),
              ciphertext: s.encodeBase64(u)
            };

          default:
            throw new Error("Encryption type/version not supported");
        }
      }

      function p(e, t) {
        switch (e.version) {
          case "x25519-xsalsa20-poly1305":
            var r = S(t),
                n = a.box.keyPair.fromSecretKey(r).secretKey,
                i = s.decodeBase64(e.nonce),
                o = s.decodeBase64(e.ciphertext),
                f = s.decodeBase64(e.ephemPublicKey),
                u = a.box.open(o, i, f, n),
                c = void 0;

            try {
              c = s.encodeUTF8(u);
            } catch (e) {
              throw new Error("Decryption failed.");
            }

            if (c) return c;
            throw new Error("Decryption failed.");

          default:
            throw new Error("Encryption type/version not supported.");
        }
      }

      function b(e, t) {
        var r = u.sign(t.data, !1),
            n = i.ecsign(r, e);
        return i.bufferToHex(c(n.v, n.r, n.s));
      }

      function y(e, t) {
        var r = u.sign(t.data),
            n = i.ecsign(r, e);
        return i.bufferToHex(c(n.v, n.r, n.s));
      }

      function g(e) {
        var t = w(u.sign(e.data, !1), e.sig),
            r = i.publicToAddress(t);
        return i.bufferToHex(r);
      }

      function v(e) {
        var t = w(u.sign(e.data), e.sig),
            r = i.publicToAddress(t);
        return i.bufferToHex(r);
      }

      function m(e) {
        var t = new Error("Expect argument to be non-empty array");
        if ("object" != typeof e || !("length" in e) || !e.length) throw t;
        var r = e.map(function (e) {
          return "bytes" === e.type ? i.toBuffer(e.value) : e.value;
        }),
            n = e.map(function (e) {
          return e.type;
        }),
            a = e.map(function (e) {
          if (!e.name) throw t;
          return e.type + " " + e.name;
        });
        return o.soliditySHA3(["bytes32", "bytes32"], [o.soliditySHA3(new Array(e.length).fill("string"), a), o.soliditySHA3(n, r)]);
      }

      function w(e, t) {
        var r = i.toBuffer(t),
            n = i.fromRpcSig(r);
        return i.ecrecover(e, n.v, n.r, n.s);
      }

      function _(e) {
        var t = i.toBuffer(e.data);
        return w(i.hashPersonalMessage(t), e.sig);
      }

      function E(e, t) {
        for (var r = "" + e; r.length < t;) {
          r = "0" + r;
        }

        return r;
      }

      function S(t) {
        var r = e.from(t, "hex").toString("base64");
        return s.decodeBase64(r);
      }

      t.TypedDataUtils = u, t.concatSig = c, t.normalize = function (e) {
        if (e) {
          if ("number" == typeof e) {
            var t = i.toBuffer(e);
            e = i.bufferToHex(t);
          }

          if ("string" != typeof e) {
            var r = "eth-sig-util.normalize() requires hex string or integer input.";
            throw new Error(r += " received " + typeof e + ": " + e);
          }

          return i.addHexPrefix(e.toLowerCase());
        }
      }, t.personalSign = function (e, t) {
        var r = i.toBuffer(t.data),
            n = i.hashPersonalMessage(r),
            o = i.ecsign(n, e);
        return i.bufferToHex(c(o.v, o.r, o.s));
      }, t.recoverPersonalSignature = function (e) {
        var t = _(e),
            r = i.publicToAddress(t);

        return i.bufferToHex(r);
      }, t.extractPublicKey = function (e) {
        return "0x" + _(e).toString("hex");
      }, t.typedSignatureHash = function (e) {
        var t = m(e);
        return i.bufferToHex(t);
      }, t.signTypedDataLegacy = h, t.recoverTypedSignatureLegacy = d, t.encrypt = l, t.encryptSafely = function (t, r, n) {
        var i = Math.pow(2, 11),
            o = r.data;
        if (!o) throw new Error("Cannot encrypt empty msg.data");
        if ("object" == typeof o && "toJSON" in o) throw new Error("Cannot encrypt with toJSON property.  Please remove toJSON property");
        var a = {
          data: o,
          padding: ""
        },
            s = e.byteLength(JSON.stringify(a), "utf-8") % i,
            f = 0;
        return s > 0 && (f = i - s - 16), a.padding = "0".repeat(f), l(t, {
          data: JSON.stringify(a)
        }, n);
      }, t.decrypt = p, t.decryptSafely = function (e, t) {
        return JSON.parse(p(e, t)).data;
      }, t.getEncryptionPublicKey = function (e) {
        var t = S(e),
            r = a.box.keyPair.fromSecretKey(t).publicKey;
        return s.encodeBase64(r);
      }, t.signTypedMessage = function (e, t, r) {
        switch (void 0 === r && (r = "V4"), r) {
          case "V1":
            return h(e, t);

          case "V3":
            return b(e, t);

          case "V4":
          default:
            return y(e, t);
        }
      }, t.recoverTypedMessage = function (e, t) {
        switch (void 0 === t && (t = "V4"), t) {
          case "V1":
            return d(e);

          case "V3":
            return g(e);

          case "V4":
          default:
            return v(e);
        }
      }, t.signTypedData = b, t.signTypedData_v4 = y, t.recoverTypedSignature = g, t.recoverTypedSignature_v4 = v;
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    e.exports = r(229);
  }, function (e, t, r) {
    (function (t) {
      var n = r(230),
          i = r(4);

      var o = function o() {};

      function a(e) {
        return e.startsWith("int[") ? "int256" + e.slice(3) : "int" === e ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : "uint" === e ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : "fixed" === e ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : "ufixed" === e ? "ufixed128x128" : e;
      }

      function s(e) {
        return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }

      function f(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [parseInt(t[1], 10), parseInt(t[2], 10)];
      }

      function u(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null;
      }

      function c(e) {
        var t = typeof e;
        if ("string" === t) return n.isHexPrefixed(e) ? new i(n.stripHexPrefix(e), 16) : new i(e, 10);
        if ("number" === t) return new i(e);
        if (e.toArray) return e;
        throw new Error("Argument is not a number");
      }

      function h(e) {
        var t = /^(\w+)\((.+)\)$/.exec(e);
        if (3 !== t.length) throw new Error("Invalid method signature");
        var r = /^(.+)\):\((.+)$/.exec(t[2]);
        return null !== r && 3 === r.length ? {
          method: t[1],
          args: r[1].split(","),
          retargs: r[2].split(",")
        } : {
          method: t[1],
          args: t[2].split(",")
        };
      }

      function d(e, r) {
        var o, a, h, l;
        if ("address" === e) return d("uint160", c(r));
        if ("bool" === e) return d("uint8", r ? 1 : 0);
        if ("string" === e) return d("bytes", new t(r, "utf8"));

        if (y(e)) {
          if (void 0 === r.length) throw new Error("Not an array?");
          if ("dynamic" !== (o = u(e)) && 0 !== o && r.length > o) throw new Error("Elements exceed array size: " + o);

          for (l in h = [], e = e.slice(0, e.lastIndexOf("[")), "string" == typeof r && (r = JSON.parse(r)), r) {
            h.push(d(e, r[l]));
          }

          if ("dynamic" === o) {
            var p = d("uint256", r.length);
            h.unshift(p);
          }

          return t.concat(h);
        }

        if ("bytes" === e) return r = new t(r), h = t.concat([d("uint256", r.length), r]), r.length % 32 != 0 && (h = t.concat([h, n.zeros(32 - r.length % 32)])), h;

        if (e.startsWith("bytes")) {
          if ((o = s(e)) < 1 || o > 32) throw new Error("Invalid bytes<N> width: " + o);
          return n.setLengthRight(r, 32);
        }

        if (e.startsWith("uint")) {
          if ((o = s(e)) % 8 || o < 8 || o > 256) throw new Error("Invalid uint<N> width: " + o);
          if ((a = c(r)).bitLength() > o) throw new Error("Supplied uint exceeds width: " + o + " vs " + a.bitLength());
          if (a < 0) throw new Error("Supplied uint is negative");
          return a.toArrayLike(t, "be", 32);
        }

        if (e.startsWith("int")) {
          if ((o = s(e)) % 8 || o < 8 || o > 256) throw new Error("Invalid int<N> width: " + o);
          if ((a = c(r)).bitLength() > o) throw new Error("Supplied int exceeds width: " + o + " vs " + a.bitLength());
          return a.toTwos(256).toArrayLike(t, "be", 32);
        }

        if (e.startsWith("ufixed")) {
          if (o = f(e), (a = c(r)) < 0) throw new Error("Supplied ufixed is negative");
          return d("uint256", a.mul(new i(2).pow(new i(o[1]))));
        }

        if (e.startsWith("fixed")) return o = f(e), d("int256", c(r).mul(new i(2).pow(new i(o[1]))));
        throw new Error("Unsupported or invalid type: " + e);
      }

      function l(e, r, n) {
        var o, a, s, f;
        if ("string" == typeof e && (e = p(e)), "address" === e.name) return l(e.rawType, r, n).toArrayLike(t, "be", 20).toString("hex");
        if ("bool" === e.name) return l(e.rawType, r, n).toString() === new i(1).toString();

        if ("string" === e.name) {
          var u = l(e.rawType, r, n);
          return new t(u, "utf8").toString();
        }

        if (e.isArray) {
          for (s = [], o = e.size, "dynamic" === e.size && (n = l("uint256", r, n).toNumber(), o = l("uint256", r, n).toNumber(), n += 32), f = 0; f < o; f++) {
            var c = l(e.subArray, r, n);
            s.push(c), n += e.subArray.memoryUsage;
          }

          return s;
        }

        if ("bytes" === e.name) return n = l("uint256", r, n).toNumber(), o = l("uint256", r, n).toNumber(), r.slice(n + 32, n + 32 + o);
        if (e.name.startsWith("bytes")) return r.slice(n, n + e.size);

        if (e.name.startsWith("uint")) {
          if ((a = new i(r.slice(n, n + 32), 16, "be")).bitLength() > e.size) throw new Error("Decoded int exceeds width: " + e.size + " vs " + a.bitLength());
          return a;
        }

        if (e.name.startsWith("int")) {
          if ((a = new i(r.slice(n, n + 32), 16, "be").fromTwos(256)).bitLength() > e.size) throw new Error("Decoded uint exceeds width: " + e.size + " vs " + a.bitLength());
          return a;
        }

        if (e.name.startsWith("ufixed")) {
          if (o = new i(2).pow(new i(e.size[1])), !(a = l("uint256", r, n)).mod(o).isZero()) throw new Error("Decimals not supported yet");
          return a.div(o);
        }

        if (e.name.startsWith("fixed")) {
          if (o = new i(2).pow(new i(e.size[1])), !(a = l("int256", r, n)).mod(o).isZero()) throw new Error("Decimals not supported yet");
          return a.div(o);
        }

        throw new Error("Unsupported or invalid type: " + e.name);
      }

      function p(e) {
        var t, r, n;

        if (y(e)) {
          t = u(e);
          var i = e.slice(0, e.lastIndexOf("["));
          return i = p(i), r = {
            isArray: !0,
            name: e,
            size: t,
            memoryUsage: "dynamic" === t ? 32 : i.memoryUsage * t,
            subArray: i
          };
        }

        switch (e) {
          case "address":
            n = "uint160";
            break;

          case "bool":
            n = "uint8";
            break;

          case "string":
            n = "bytes";
        }

        if (r = {
          rawType: n,
          name: e,
          memoryUsage: 32
        }, e.startsWith("bytes") && "bytes" !== e || e.startsWith("uint") || e.startsWith("int") ? r.size = s(e) : (e.startsWith("ufixed") || e.startsWith("fixed")) && (r.size = f(e)), e.startsWith("bytes") && "bytes" !== e && (r.size < 1 || r.size > 32)) throw new Error("Invalid bytes<N> width: " + r.size);
        if ((e.startsWith("uint") || e.startsWith("int")) && (r.size % 8 || r.size < 8 || r.size > 256)) throw new Error("Invalid int/uint<N> width: " + r.size);
        return r;
      }

      function b(e) {
        return "string" === e || "bytes" === e || "dynamic" === u(e);
      }

      function y(e) {
        return e.lastIndexOf("]") === e.length - 1;
      }

      function g(e, t) {
        return e.startsWith("address") || e.startsWith("bytes") ? "0x" + t.toString("hex") : t.toString();
      }

      o.eventID = function (e, r) {
        var i = e + "(" + r.map(a).join(",") + ")";
        return n.sha3(new t(i));
      }, o.methodID = function (e, t) {
        return o.eventID(e, t).slice(0, 4);
      }, o.rawEncode = function (e, r) {
        var n = [],
            i = [],
            o = 32 * e.length;

        for (var s in e) {
          var f = a(e[s]),
              u = d(f, r[s]);
          b(f) ? (n.push(d("uint256", o)), i.push(u), o += u.length) : n.push(u);
        }

        return t.concat(n.concat(i));
      }, o.rawDecode = function (e, r) {
        var n = [];
        r = new t(r);
        var i = 0;

        for (var o in e) {
          var s = p(a(e[o])),
              f = l(s, r, i);
          i += s.memoryUsage, n.push(f);
        }

        return n;
      }, o.simpleEncode = function (e) {
        var r = Array.prototype.slice.call(arguments).slice(1),
            n = h(e);
        if (r.length !== n.args.length) throw new Error("Argument count mismatch");
        return t.concat([o.methodID(n.method, n.args), o.rawEncode(n.args, r)]);
      }, o.simpleDecode = function (e, t) {
        var r = h(e);
        if (!r.retargs) throw new Error("No return values in method");
        return o.rawDecode(r.retargs, t);
      }, o.stringify = function (e, t) {
        var r = [];

        for (var n in e) {
          var i = e[n],
              o = t[n];
          o = /^[^\[]+\[.*\]$/.test(i) ? o.map(function (e) {
            return g(i, e);
          }).join(", ") : g(i, o), r.push(o);
        }

        return r;
      }, o.solidityPack = function (e, r) {
        if (e.length !== r.length) throw new Error("Number of types are not matching the values");

        for (var i, o, f = [], u = 0; u < e.length; u++) {
          var h = a(e[u]),
              d = r[u];
          if ("bytes" === h) f.push(d);else if ("string" === h) f.push(new t(d, "utf8"));else if ("bool" === h) f.push(new t(d ? "01" : "00", "hex"));else if ("address" === h) f.push(n.setLengthLeft(d, 20));else if (h.startsWith("bytes")) {
            if ((i = s(h)) < 1 || i > 32) throw new Error("Invalid bytes<N> width: " + i);
            f.push(n.setLengthRight(d, i));
          } else if (h.startsWith("uint")) {
            if ((i = s(h)) % 8 || i < 8 || i > 256) throw new Error("Invalid uint<N> width: " + i);
            if ((o = c(d)).bitLength() > i) throw new Error("Supplied uint exceeds width: " + i + " vs " + o.bitLength());
            f.push(o.toArrayLike(t, "be", i / 8));
          } else {
            if (!h.startsWith("int")) throw new Error("Unsupported or invalid type: " + h);
            if ((i = s(h)) % 8 || i < 8 || i > 256) throw new Error("Invalid int<N> width: " + i);
            if ((o = c(d)).bitLength() > i) throw new Error("Supplied int exceeds width: " + i + " vs " + o.bitLength());
            f.push(o.toTwos(i).toArrayLike(t, "be", i / 8));
          }
        }

        return t.concat(f);
      }, o.soliditySHA3 = function (e, t) {
        return n.sha3(o.solidityPack(e, t));
      }, o.soliditySHA256 = function (e, t) {
        return n.sha256(o.solidityPack(e, t));
      }, o.solidityRIPEMD160 = function (e, t) {
        return n.ripemd160(o.solidityPack(e, t), !0);
      }, o.fromSerpent = function (e) {
        for (var t, r = [], n = 0; n < e.length; n++) {
          var i = e[n];
          if ("s" === i) r.push("bytes");else if ("b" === i) {
            for (var o = "bytes", a = n + 1; a < e.length && (t = e[a]) >= "0" && t <= "9";) {
              o += e[a] - "0", a++;
            }

            n = a - 1, r.push(o);
          } else if ("i" === i) r.push("int256");else {
            if ("a" !== i) throw new Error("Unsupported or invalid type: " + i);
            r.push("int256[]");
          }
        }

        return r;
      }, o.toSerpent = function (e) {
        for (var t = [], r = 0; r < e.length; r++) {
          var n = e[r];
          if ("bytes" === n) t.push("s");else if (n.startsWith("bytes")) t.push("b" + s(n));else if ("int256" === n) t.push("i");else {
            if ("int256[]" !== n) throw new Error("Unsupported or invalid type: " + n);
            t.push("a");
          }
        }

        return t.join("");
      }, e.exports = o;
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    "use strict";

    (function (e) {
      var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          i = r(231),
          o = i.keccak224,
          a = i.keccak384,
          s = i.keccak256,
          f = i.keccak512,
          u = r(239),
          c = r(78),
          h = r(79),
          d = r(4),
          l = r(34);
      t.MAX_INTEGER = new d("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new d("10000000000000000000000000000000000000000000000000000000000000000", 16), t.SHA3_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.SHA3_NULL = new e(t.SHA3_NULL_S, "hex"), t.SHA3_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.SHA3_RLP_ARRAY = new e(t.SHA3_RLP_ARRAY_S, "hex"), t.SHA3_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.SHA3_RLP = new e(t.SHA3_RLP_S, "hex"), t.BN = d, t.rlp = h, t.secp256k1 = u, t.zeros = function (t) {
        var r = new e(t);
        return r.fill(0), r;
      }, t.setLengthLeft = t.setLength = function (e, r, n) {
        var i = t.zeros(r);
        return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r);
      }, t.setLengthRight = function (e, r) {
        return t.setLength(e, r, !0);
      }, t.unpad = t.stripZeros = function (e) {
        for (var r = (e = t.stripHexPrefix(e))[0]; e.length > 0 && "0" === r.toString();) {
          r = (e = e.slice(1))[0];
        }

        return e;
      }, t.toBuffer = function (r) {
        if (!e.isBuffer(r)) if (Array.isArray(r)) r = new e(r);else if ("string" == typeof r) r = t.isHexPrefixed(r) ? new e(t.padToEven(t.stripHexPrefix(r)), "hex") : new e(r);else if ("number" == typeof r) r = t.intToBuffer(r);else if (null == r) r = new e([]);else {
          if (!r.toArray) throw new Error("invalid type");
          r = new e(r.toArray());
        }
        return r;
      }, t.intToHex = function (e) {
        c(e % 1 == 0, "number is not a integer"), c(e >= 0, "number must be positive");
        var t = e.toString(16);
        return t.length % 2 && (t = "0" + t), "0x" + t;
      }, t.intToBuffer = function (r) {
        var n = t.intToHex(r);
        return new e(n.slice(2), "hex");
      }, t.bufferToInt = function (e) {
        return parseInt(t.bufferToHex(e), 16);
      }, t.bufferToHex = function (e) {
        return 0 === (e = t.toBuffer(e)).length ? 0 : "0x" + e.toString("hex");
      }, t.fromSigned = function (e) {
        return new d(e).fromTwos(256);
      }, t.toUnsigned = function (t) {
        return new e(t.toTwos(256).toArray());
      }, t.sha3 = function (e, r) {
        switch (e = t.toBuffer(e), r || (r = 256), r) {
          case 224:
            return o(e);

          case 256:
            return s(e);

          case 384:
            return a(e);

          case 512:
            return f(e);

          default:
            throw new Error("Invalid algorithm: keccak" + r);
        }
      }, t.sha256 = function (e) {
        return e = t.toBuffer(e), l("sha256").update(e).digest();
      }, t.ripemd160 = function (e, r) {
        e = t.toBuffer(e);
        var n = l("rmd160").update(e).digest();
        return !0 === r ? t.setLength(n, 32) : n;
      }, t.rlphash = function (e) {
        return t.sha3(h.encode(e));
      }, t.isValidPrivate = function (e) {
        return u.privateKeyVerify(e);
      }, t.isValidPublic = function (t, r) {
        return 64 === t.length ? u.publicKeyVerify(e.concat([new e([4]), t])) : !!r && u.publicKeyVerify(t);
      }, t.pubToAddress = t.publicToAddress = function (e, r) {
        return e = t.toBuffer(e), r && 64 !== e.length && (e = u.publicKeyConvert(e, !1).slice(1)), c(64 === e.length), t.sha3(e).slice(-20);
      };

      var p = t.privateToPublic = function (e) {
        return e = t.toBuffer(e), u.publicKeyCreate(e, !1).slice(1);
      };

      t.importPublic = function (e) {
        return 64 !== (e = t.toBuffer(e)).length && (e = u.publicKeyConvert(e, !1).slice(1)), e;
      }, t.ecsign = function (e, t) {
        var r = u.sign(e, t),
            n = {};
        return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n;
      }, t.ecrecover = function (r, n, i, o) {
        var a = e.concat([t.setLength(i, 32), t.setLength(o, 32)], 64),
            s = t.bufferToInt(n) - 27;
        if (0 !== s && 1 !== s) throw new Error("Invalid signature v value");
        var f = u.recover(r, a, s);
        return u.publicKeyConvert(f, !1).slice(1);
      }, t.toRpcSig = function (r, n, i) {
        return t.bufferToHex(e.concat([n, i, t.toBuffer(r - 27)]));
      }, t.fromRpcSig = function (e) {
        var r = (e = t.toBuffer(e))[64];
        return r < 27 && (r += 27), {
          v: r,
          r: e.slice(0, 32),
          s: e.slice(32, 64)
        };
      }, t.privateToAddress = function (e) {
        return t.publicToAddress(p(e));
      }, t.isValidAddress = function (e) {
        return /^0x[0-9a-fA-F]{40}$/i.test(e);
      }, t.toChecksumAddress = function (e) {
        e = t.stripHexPrefix(e).toLowerCase();

        for (var r = t.sha3(e).toString("hex"), n = "0x", i = 0; i < e.length; i++) {
          parseInt(r[i], 16) >= 8 ? n += e[i].toUpperCase() : n += e[i];
        }

        return n;
      }, t.isValidChecksumAddress = function (e) {
        return t.isValidAddress(e) && t.toChecksumAddress(e) === e;
      }, t.generateAddress = function (r, n) {
        return r = t.toBuffer(r), n = (n = new d(n)).isZero() ? null : new e(n.toArray()), t.rlphash([r, n]).slice(-20);
      }, t.isPrecompiled = function (e) {
        var r = t.unpad(e);
        return 1 === r.length && r[0] > 0 && r[0] < 5;
      }, t.isHexPrefixed = function (e) {
        return "0x" === e.slice(0, 2);
      }, t.stripHexPrefix = function (e) {
        return "string" != typeof e ? e : t.isHexPrefixed(e) ? e.slice(2) : e;
      }, t.addHexPrefix = function (e) {
        return "string" != typeof e || t.isHexPrefixed(e) ? e : "0x" + e;
      }, t.padToEven = function (e) {
        return e.length % 2 && (e = "0" + e), e;
      }, t.baToJSON = function (r) {
        if (e.isBuffer(r)) return "0x" + r.toString("hex");

        if (r instanceof Array) {
          for (var n = [], i = 0; i < r.length; i++) {
            n.push(t.baToJSON(r[i]));
          }

          return n;
        }
      }, t.defineProperties = function (r, i, o) {
        if (r.raw = [], r._fields = [], r.toJSON = function (e) {
          if (e) {
            var n = {};
            return r._fields.forEach(function (e) {
              n[e] = "0x" + r[e].toString("hex");
            }), n;
          }

          return t.baToJSON(this.raw);
        }, r.serialize = function () {
          return h.encode(r.raw);
        }, i.forEach(function (n, i) {
          function o() {
            return r.raw[i];
          }

          function a(o) {
            "00" !== (o = t.toBuffer(o)).toString("hex") || n.allowZero || (o = new e([])), n.allowLess && n.length ? (o = t.stripZeros(o), c(n.length >= o.length, "The field " + n.name + " must not have more " + n.length + " bytes")) : n.allowZero && 0 === o.length || !n.length || c(n.length === o.length, "The field " + n.name + " must have byte length of " + n.length), r.raw[i] = o;
          }

          r._fields.push(n.name), Object.defineProperty(r, n.name, {
            enumerable: !0,
            configurable: !0,
            get: o,
            set: a
          }), n.default && (r[n.name] = n.default), n.alias && Object.defineProperty(r, n.alias, {
            enumerable: !1,
            configurable: !0,
            set: a,
            get: o
          });
        }), o) if ("string" == typeof o && (o = new e(t.stripHexPrefix(o), "hex")), e.isBuffer(o) && (o = h.decode(o)), Array.isArray(o)) {
          if (o.length > r._fields.length) throw new Error("wrong number of fields in data");
          o.forEach(function (e, n) {
            r[r._fields[n]] = t.toBuffer(e);
          });
        } else {
          if ("object" !== (void 0 === o ? "undefined" : n(o))) throw new Error("invalid data");

          for (var a in o) {
            -1 !== r._fields.indexOf(a) && (r[a] = o[a]);
          }
        }
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(232),
        i = r(233);
    t.keccak224 = n.createHashFunction(function () {
      return i("keccak224");
    }), t.keccak256 = n.createHashFunction(function () {
      return i("keccak256");
    }), t.keccak384 = n.createHashFunction(function () {
      return i("keccak384");
    }), t.keccak512 = n.createHashFunction(function () {
      return i("keccak512");
    });
  }, function (e, t, r) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createHashFunction = function (t) {
        return function (r) {
          var n = t();
          return n.update(r), e.from(n.digest());
        };
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    e.exports = r(234)(r(237));
  }, function (e, t, r) {
    var n = r(235),
        i = r(236);

    e.exports = function (e) {
      var t = n(e),
          r = i(e);
      return function (e, n) {
        switch ("string" == typeof e ? e.toLowerCase() : e) {
          case "keccak224":
            return new t(1152, 448, null, 224, n);

          case "keccak256":
            return new t(1088, 512, null, 256, n);

          case "keccak384":
            return new t(832, 768, null, 384, n);

          case "keccak512":
            return new t(576, 1024, null, 512, n);

          case "sha3-224":
            return new t(1152, 448, 6, 224, n);

          case "sha3-256":
            return new t(1088, 512, 6, 256, n);

          case "sha3-384":
            return new t(832, 768, 6, 384, n);

          case "sha3-512":
            return new t(576, 1024, 6, 512, n);

          case "shake128":
            return new r(1344, 256, 31, n);

          case "shake256":
            return new r(1088, 512, 31, n);

          default:
            throw new Error("Invald algorithm: " + e);
        }
      };
    };
  }, function (e, t, r) {
    (function (t) {
      var _r7 = r(18),
          n = _r7.Transform;

      e.exports = function (e) {
        return /*#__PURE__*/function (_n7) {
          "use strict";

          _inherits(r, _n7);

          var _super9 = _createSuper(r);

          function r(t, _r8, n, i, o) {
            var _this17;

            _classCallCheck(this, r);

            _this17 = _super9.call(this, o), _this17._rate = t, _this17._capacity = _r8, _this17._delimitedSuffix = n, _this17._hashBitLength = i, _this17._options = o, _this17._state = new e(), _this17._state.initialize(t, _r8), _this17._finalized = !1;
            return _this17;
          }

          _createClass(r, [{
            key: "_transform",
            value: function _transform(e, t, _r9) {
              var n = null;

              try {
                this.update(e, t);
              } catch (e) {
                n = e;
              }

              _r9(n);
            }
          }, {
            key: "_flush",
            value: function _flush(e) {
              var t = null;

              try {
                this.push(this.digest());
              } catch (e) {
                t = e;
              }

              e(t);
            }
          }, {
            key: "update",
            value: function update(e, _r10) {
              if (!t.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer");
              if (this._finalized) throw new Error("Digest already called");
              return t.isBuffer(e) || (e = t.from(e, _r10)), this._state.absorb(e), this;
            }
          }, {
            key: "digest",
            value: function digest(e) {
              if (this._finalized) throw new Error("Digest already called");
              this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);

              var t = this._state.squeeze(this._hashBitLength / 8);

              return void 0 !== e && (t = t.toString(e)), this._resetState(), t;
            }
          }, {
            key: "_resetState",
            value: function _resetState() {
              return this._state.initialize(this._rate, this._capacity), this;
            }
          }, {
            key: "_clone",
            value: function _clone() {
              var e = new r(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
              return this._state.copy(e._state), e._finalized = this._finalized, e;
            }
          }]);

          return r;
        }(n);
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    (function (t) {
      var _r11 = r(18),
          n = _r11.Transform;

      e.exports = function (e) {
        return /*#__PURE__*/function (_n8) {
          "use strict";

          _inherits(r, _n8);

          var _super10 = _createSuper(r);

          function r(t, _r12, n, i) {
            var _this18;

            _classCallCheck(this, r);

            _this18 = _super10.call(this, i), _this18._rate = t, _this18._capacity = _r12, _this18._delimitedSuffix = n, _this18._options = i, _this18._state = new e(), _this18._state.initialize(t, _r12), _this18._finalized = !1;
            return _this18;
          }

          _createClass(r, [{
            key: "_transform",
            value: function _transform(e, t, _r13) {
              var n = null;

              try {
                this.update(e, t);
              } catch (e) {
                n = e;
              }

              _r13(n);
            }
          }, {
            key: "_flush",
            value: function _flush() {}
          }, {
            key: "_read",
            value: function _read(e) {
              this.push(this.squeeze(e));
            }
          }, {
            key: "update",
            value: function update(e, _r14) {
              if (!t.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer");
              if (this._finalized) throw new Error("Squeeze already called");
              return t.isBuffer(e) || (e = t.from(e, _r14)), this._state.absorb(e), this;
            }
          }, {
            key: "squeeze",
            value: function squeeze(e, t) {
              this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));

              var _r15 = this._state.squeeze(e);

              return void 0 !== t && (_r15 = _r15.toString(t)), _r15;
            }
          }, {
            key: "_resetState",
            value: function _resetState() {
              return this._state.initialize(this._rate, this._capacity), this;
            }
          }, {
            key: "_clone",
            value: function _clone() {
              var e = new r(this._rate, this._capacity, this._delimitedSuffix, this._options);
              return this._state.copy(e._state), e._finalized = this._finalized, e;
            }
          }]);

          return r;
        }(n);
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    (function (t) {
      var n = r(238);

      function i() {
        this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1;
      }

      i.prototype.initialize = function (e, t) {
        for (var _e8 = 0; _e8 < 50; ++_e8) {
          this.state[_e8] = 0;
        }

        this.blockSize = e / 8, this.count = 0, this.squeezing = !1;
      }, i.prototype.absorb = function (e) {
        for (var _t5 = 0; _t5 < e.length; ++_t5) {
          this.state[~~(this.count / 4)] ^= e[_t5] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0);
        }
      }, i.prototype.absorbLastFewBits = function (e) {
        this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8, 0 != (128 & e) && this.count === this.blockSize - 1 && n.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, n.p1600(this.state), this.count = 0, this.squeezing = !0;
      }, i.prototype.squeeze = function (e) {
        this.squeezing || this.absorbLastFewBits(1);
        var r = t.alloc(e);

        for (var _t6 = 0; _t6 < e; ++_t6) {
          r[_t6] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0);
        }

        return r;
      }, i.prototype.copy = function (e) {
        for (var _t7 = 0; _t7 < 50; ++_t7) {
          e.state[_t7] = this.state[_t7];
        }

        e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing;
      }, e.exports = i;
    }).call(this, r(1).Buffer);
  }, function (e, t) {
    var r = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];

    t.p1600 = function (e) {
      for (var _t8 = 0; _t8 < 24; ++_t8) {
        var n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            c = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
            d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
        var l = h ^ (o << 1 | a >>> 31),
            p = d ^ (a << 1 | o >>> 31);

        var b = e[0] ^ l,
            y = e[1] ^ p,
            g = e[10] ^ l,
            v = e[11] ^ p,
            m = e[20] ^ l,
            w = e[21] ^ p,
            _ = e[30] ^ l,
            E = e[31] ^ p,
            S = e[40] ^ l,
            A = e[41] ^ p;

        l = n ^ (s << 1 | f >>> 31), p = i ^ (f << 1 | s >>> 31);
        var x = e[2] ^ l,
            k = e[3] ^ p,
            M = e[12] ^ l,
            T = e[13] ^ p,
            I = e[22] ^ l,
            R = e[23] ^ p,
            P = e[32] ^ l,
            L = e[33] ^ p,
            B = e[42] ^ l,
            C = e[43] ^ p;
        l = o ^ (u << 1 | c >>> 31), p = a ^ (c << 1 | u >>> 31);
        var O = e[4] ^ l,
            N = e[5] ^ p,
            j = e[14] ^ l,
            D = e[15] ^ p,
            U = e[24] ^ l,
            z = e[25] ^ p,
            q = e[34] ^ l,
            F = e[35] ^ p,
            K = e[44] ^ l,
            H = e[45] ^ p;
        l = s ^ (h << 1 | d >>> 31), p = f ^ (d << 1 | h >>> 31);
        var V = e[6] ^ l,
            Y = e[7] ^ p,
            W = e[16] ^ l,
            G = e[17] ^ p,
            Z = e[26] ^ l,
            J = e[27] ^ p,
            $ = e[36] ^ l,
            X = e[37] ^ p,
            Q = e[46] ^ l,
            ee = e[47] ^ p;
        l = u ^ (n << 1 | i >>> 31), p = c ^ (i << 1 | n >>> 31);

        var te = e[8] ^ l,
            re = e[9] ^ p,
            ne = e[18] ^ l,
            ie = e[19] ^ p,
            oe = e[28] ^ l,
            ae = e[29] ^ p,
            se = e[38] ^ l,
            fe = e[39] ^ p,
            ue = e[48] ^ l,
            ce = e[49] ^ p,
            he = b,
            de = y,
            le = v << 4 | g >>> 28,
            pe = g << 4 | v >>> 28,
            be = m << 3 | w >>> 29,
            ye = w << 3 | m >>> 29,
            ge = E << 9 | _ >>> 23,
            ve = _ << 9 | E >>> 23,
            me = S << 18 | A >>> 14,
            we = A << 18 | S >>> 14,
            _e = x << 1 | k >>> 31,
            Ee = k << 1 | x >>> 31,
            Se = T << 12 | M >>> 20,
            Ae = M << 12 | T >>> 20,
            xe = I << 10 | R >>> 22,
            ke = R << 10 | I >>> 22,
            Me = L << 13 | P >>> 19,
            Te = P << 13 | L >>> 19,
            Ie = B << 2 | C >>> 30,
            Re = C << 2 | B >>> 30,
            Pe = N << 30 | O >>> 2,
            Le = O << 30 | N >>> 2,
            Be = j << 6 | D >>> 26,
            Ce = D << 6 | j >>> 26,
            Oe = z << 11 | U >>> 21,
            Ne = U << 11 | z >>> 21,
            je = q << 15 | F >>> 17,
            De = F << 15 | q >>> 17,
            Ue = H << 29 | K >>> 3,
            ze = K << 29 | H >>> 3,
            qe = V << 28 | Y >>> 4,
            Fe = Y << 28 | V >>> 4,
            Ke = G << 23 | W >>> 9,
            He = W << 23 | G >>> 9,
            Ve = Z << 25 | J >>> 7,
            Ye = J << 25 | Z >>> 7,
            We = $ << 21 | X >>> 11,
            Ge = X << 21 | $ >>> 11,
            Ze = ee << 24 | Q >>> 8,
            Je = Q << 24 | ee >>> 8,
            $e = te << 27 | re >>> 5,
            Xe = re << 27 | te >>> 5,
            Qe = ne << 20 | ie >>> 12,
            et = ie << 20 | ne >>> 12,
            tt = ae << 7 | oe >>> 25,
            rt = oe << 7 | ae >>> 25,
            nt = se << 8 | fe >>> 24,
            it = fe << 8 | se >>> 24,
            ot = ue << 14 | ce >>> 18,
            at = ce << 14 | ue >>> 18;

        e[0] = he ^ ~Se & Oe, e[1] = de ^ ~Ae & Ne, e[10] = qe ^ ~Qe & be, e[11] = Fe ^ ~et & ye, e[20] = _e ^ ~Be & Ve, e[21] = Ee ^ ~Ce & Ye, e[30] = $e ^ ~le & xe, e[31] = Xe ^ ~pe & ke, e[40] = Pe ^ ~Ke & tt, e[41] = Le ^ ~He & rt, e[2] = Se ^ ~Oe & We, e[3] = Ae ^ ~Ne & Ge, e[12] = Qe ^ ~be & Me, e[13] = et ^ ~ye & Te, e[22] = Be ^ ~Ve & nt, e[23] = Ce ^ ~Ye & it, e[32] = le ^ ~xe & je, e[33] = pe ^ ~ke & De, e[42] = Ke ^ ~tt & ge, e[43] = He ^ ~rt & ve, e[4] = Oe ^ ~We & ot, e[5] = Ne ^ ~Ge & at, e[14] = be ^ ~Me & Ue, e[15] = ye ^ ~Te & ze, e[24] = Ve ^ ~nt & me, e[25] = Ye ^ ~it & we, e[34] = xe ^ ~je & Ze, e[35] = ke ^ ~De & Je, e[44] = tt ^ ~ge & Ie, e[45] = rt ^ ~ve & Re, e[6] = We ^ ~ot & he, e[7] = Ge ^ ~at & de, e[16] = Me ^ ~Ue & qe, e[17] = Te ^ ~ze & Fe, e[26] = nt ^ ~me & _e, e[27] = it ^ ~we & Ee, e[36] = je ^ ~Ze & $e, e[37] = De ^ ~Je & Xe, e[46] = ge ^ ~Ie & Pe, e[47] = ve ^ ~Re & Le, e[8] = ot ^ ~he & Se, e[9] = at ^ ~de & Ae, e[18] = Ue ^ ~qe & Qe, e[19] = ze ^ ~Fe & et, e[28] = me ^ ~_e & Be, e[29] = we ^ ~Ee & Ce, e[38] = Ze ^ ~$e & le, e[39] = Je ^ ~Xe & pe, e[48] = Ie ^ ~Pe & Ke, e[49] = Re ^ ~Le & He, e[0] ^= r[2 * _t8], e[1] ^= r[2 * _t8 + 1];
      }
    };
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      var n = r(240),
          i = r(245),
          o = r(246),
          a = function a(e) {
        return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e));
      };

      e.exports = {
        privateKeyVerify: a,
        privateKeyExport: function privateKeyExport(e, t) {
          if (32 !== e.length) throw new RangeError("private key length is invalid");
          var r = i.privateKeyExport(e, t);
          return o.privateKeyExport(e, r, t);
        },
        privateKeyImport: function privateKeyImport(e) {
          if (null !== (e = o.privateKeyImport(e)) && 32 === e.length && a(e)) return e;
          throw new Error("couldn't import from DER format");
        },
        privateKeyNegate: function privateKeyNegate(e) {
          return t.from(n.privateKeyNegate(Uint8Array.from(e)));
        },
        privateKeyModInverse: function privateKeyModInverse(e) {
          if (32 !== e.length) throw new Error("private key length is invalid");
          return t.from(i.privateKeyModInverse(Uint8Array.from(e)));
        },
        privateKeyTweakAdd: function privateKeyTweakAdd(e, r) {
          return t.from(n.privateKeyTweakAdd(Uint8Array.from(e), r));
        },
        privateKeyTweakMul: function privateKeyTweakMul(e, r) {
          return t.from(n.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r)));
        },
        publicKeyCreate: function publicKeyCreate(e, r) {
          return t.from(n.publicKeyCreate(Uint8Array.from(e), r));
        },
        publicKeyConvert: function publicKeyConvert(e, r) {
          return t.from(n.publicKeyConvert(Uint8Array.from(e), r));
        },
        publicKeyVerify: function publicKeyVerify(e) {
          return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e));
        },
        publicKeyTweakAdd: function publicKeyTweakAdd(e, r, i) {
          return t.from(n.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(r), i));
        },
        publicKeyTweakMul: function publicKeyTweakMul(e, r, i) {
          return t.from(n.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r), i));
        },
        publicKeyCombine: function publicKeyCombine(e, r) {
          var i = [];
          return e.forEach(function (e) {
            i.push(Uint8Array.from(e));
          }), t.from(n.publicKeyCombine(i, r));
        },
        signatureNormalize: function signatureNormalize(e) {
          return t.from(n.signatureNormalize(Uint8Array.from(e)));
        },
        signatureExport: function signatureExport(e) {
          return t.from(n.signatureExport(Uint8Array.from(e)));
        },
        signatureImport: function signatureImport(e) {
          return t.from(n.signatureImport(Uint8Array.from(e)));
        },
        signatureImportLax: function signatureImportLax(e) {
          if (0 === e.length) throw new RangeError("signature length is invalid");
          var t = o.signatureImportLax(e);
          if (null === t) throw new Error("couldn't parse DER signature");
          return i.signatureImport(t);
        },
        sign: function sign(e, r, i) {
          if (null === i) throw new TypeError("options should be an Object");
          var o = void 0;

          if (i) {
            if (o = {}, null === i.data) throw new TypeError("options.data should be a Buffer");

            if (i.data) {
              if (32 !== i.data.length) throw new RangeError("options.data length is invalid");
              o.data = new Uint8Array(i.data);
            }

            if (null === i.noncefn) throw new TypeError("options.noncefn should be a Function");
            i.noncefn && (o.noncefn = function (e, r, n, o, a) {
              var s = null != n ? t.from(n) : null,
                  f = null != o ? t.from(o) : null,
                  u = t.from("");
              return i.noncefn && (u = i.noncefn(t.from(e), t.from(r), s, f, a)), Uint8Array.from(u);
            });
          }

          var a = n.ecdsaSign(Uint8Array.from(e), Uint8Array.from(r), o);
          return {
            signature: t.from(a.signature),
            recovery: a.recid
          };
        },
        verify: function verify(e, t, r) {
          return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r);
        },
        recover: function recover(e, r, i, o) {
          return t.from(n.ecdsaRecover(Uint8Array.from(r), i, Uint8Array.from(e), o));
        },
        ecdh: function ecdh(e, r) {
          return t.from(n.ecdh(Uint8Array.from(e), Uint8Array.from(r), {}));
        },
        ecdhUnsafe: function ecdhUnsafe(e, r, n) {
          if (33 !== e.length && 65 !== e.length) throw new RangeError("public key length is invalid");
          if (32 !== r.length) throw new RangeError("private key length is invalid");
          return t.from(i.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(r), n));
        }
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    "use strict";

    var n = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        function a(e) {
          try {
            f(n.next(e));
          } catch (e) {
            o(e);
          }
        }

        function s(e) {
          try {
            f(n.throw(e));
          } catch (e) {
            o(e);
          }
        }

        function f(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(a, s);
        }

        f((n = n.apply(e, t || [])).next());
      });
    },
        i = this && this.__generator || function (e, t) {
      var r,
          n,
          i,
          o,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function s(o) {
        return function (s) {
          return function (o) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;

                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;

                  case 4:
                    return a.label++, {
                      value: o[1],
                      done: !1
                    };

                  case 5:
                    a.label++, n = o[1], o = [0];
                    continue;

                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                      a.label = o[1];
                      break;
                    }

                    if (6 === o[0] && a.label < i[1]) {
                      a.label = i[1], i = o;
                      break;
                    }

                    if (i && a.label < i[2]) {
                      a.label = i[2], a.ops.push(o);
                      break;
                    }

                    i[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                o = t.call(e, a);
              } catch (e) {
                o = [6, e], n = 0;
              } finally {
                r = i = 0;
              }
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, s]);
        };
      }
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(96),
        a = r(243);
    t.createPrivateKey = function () {
      return n(this, void 0, void 0, function () {
        var e;
        return i(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, a.getRandomBytes(32)];

            case 1:
              return e = t.sent(), o.privateKeyVerify(e) ? [2, e] : [3, 0];

            case 2:
              return [2];
          }
        });
      });
    }, t.createPrivateKeySync = function () {
      for (;;) {
        var e = a.getRandomBytesSync(32);
        if (o.privateKeyVerify(e)) return e;
      }
    }, function (e) {
      for (var r in e) {
        t.hasOwnProperty(r) || (t[r] = e[r]);
      }
    }(r(96));
  }, function (e, t) {
    var r = "Impossible case. Please create issue.",
        n = "The tweak was out of range or the resulted private key is invalid",
        i = "The tweak was out of range or equal to zero",
        o = "Unknow error on context randomization",
        a = "Private Key is invalid",
        s = "Public Key could not be parsed",
        f = "Public Key serialization error",
        u = "The sum of the public keys is not valid",
        c = "Signature could not be parsed",
        h = "The nonce generation function failed, or the private key was invalid",
        d = "Public key could not be recover",
        l = "Scalar was invalid (zero or overflow)";

    function p(e, t) {
      if (!e) throw new Error(t);
    }

    function b(e, t, r) {
      if (p(t instanceof Uint8Array, "Expected ".concat(e, " to be an Uint8Array")), void 0 !== r) if (Array.isArray(r)) {
        var _n9 = "Expected ".concat(e, " to be an Uint8Array with length [").concat(r.join(", "), "]");

        p(r.includes(t.length), _n9);
      } else {
        var _n10 = "Expected ".concat(e, " to be an Uint8Array with length ").concat(r);

        p(t.length === r, _n10);
      }
    }

    function y(e) {
      p("Boolean" === v(e), "Expected compressed to be a Boolean");
    }

    function g() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {
        return new Uint8Array(e);
      };
      var t = arguments.length > 1 ? arguments[1] : undefined;
      return "function" == typeof e && (e = e(t)), b("output", e, t), e;
    }

    function v(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }

    e.exports = function (e) {
      return {
        contextRandomize: function contextRandomize(t) {
          switch (p(null === t || t instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== t && b("seed", t, 32), e.contextRandomize(t)) {
            case 1:
              throw new Error(o);
          }
        },
        privateKeyVerify: function privateKeyVerify(t) {
          return b("private key", t, 32), 0 === e.privateKeyVerify(t);
        },
        privateKeyNegate: function privateKeyNegate(t) {
          switch (b("private key", t, 32), e.privateKeyNegate(t)) {
            case 0:
              return t;

            case 1:
              throw new Error(r);
          }
        },
        privateKeyTweakAdd: function privateKeyTweakAdd(t, r) {
          switch (b("private key", t, 32), b("tweak", r, 32), e.privateKeyTweakAdd(t, r)) {
            case 0:
              return t;

            case 1:
              throw new Error(n);
          }
        },
        privateKeyTweakMul: function privateKeyTweakMul(t, r) {
          switch (b("private key", t, 32), b("tweak", r, 32), e.privateKeyTweakMul(t, r)) {
            case 0:
              return t;

            case 1:
              throw new Error(i);
          }
        },
        publicKeyVerify: function publicKeyVerify(t) {
          return b("public key", t, [33, 65]), 0 === e.publicKeyVerify(t);
        },
        publicKeyCreate: function publicKeyCreate(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var n = arguments.length > 2 ? arguments[2] : undefined;

          switch (b("private key", t, 32), y(r), n = g(n, r ? 33 : 65), e.publicKeyCreate(n, t)) {
            case 0:
              return n;

            case 1:
              throw new Error(a);

            case 2:
              throw new Error(f);
          }
        },
        publicKeyConvert: function publicKeyConvert(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var n = arguments.length > 2 ? arguments[2] : undefined;

          switch (b("public key", t, [33, 65]), y(r), n = g(n, r ? 33 : 65), e.publicKeyConvert(n, t)) {
            case 0:
              return n;

            case 1:
              throw new Error(s);

            case 2:
              throw new Error(f);
          }
        },
        publicKeyNegate: function publicKeyNegate(t) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var i = arguments.length > 2 ? arguments[2] : undefined;

          switch (b("public key", t, [33, 65]), y(n), i = g(i, n ? 33 : 65), e.publicKeyNegate(i, t)) {
            case 0:
              return i;

            case 1:
              throw new Error(s);

            case 2:
              throw new Error(r);

            case 3:
              throw new Error(f);
          }
        },
        publicKeyCombine: function publicKeyCombine(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var n = arguments.length > 2 ? arguments[2] : undefined;
          p(Array.isArray(t), "Expected public keys to be an Array"), p(t.length > 0, "Expected public keys array will have more than zero items");

          var _iterator = _createForOfIteratorHelper(t),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _e9 = _step.value;
              b("public key", _e9, [33, 65]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          switch (y(r), n = g(n, r ? 33 : 65), e.publicKeyCombine(n, t)) {
            case 0:
              return n;

            case 1:
              throw new Error(s);

            case 2:
              throw new Error(u);

            case 3:
              throw new Error(f);
          }
        },
        publicKeyTweakAdd: function publicKeyTweakAdd(t, r) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var o = arguments.length > 3 ? arguments[3] : undefined;

          switch (b("public key", t, [33, 65]), b("tweak", r, 32), y(i), o = g(o, i ? 33 : 65), e.publicKeyTweakAdd(o, t, r)) {
            case 0:
              return o;

            case 1:
              throw new Error(s);

            case 2:
              throw new Error(n);
          }
        },
        publicKeyTweakMul: function publicKeyTweakMul(t, r) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var o = arguments.length > 3 ? arguments[3] : undefined;

          switch (b("public key", t, [33, 65]), b("tweak", r, 32), y(n), o = g(o, n ? 33 : 65), e.publicKeyTweakMul(o, t, r)) {
            case 0:
              return o;

            case 1:
              throw new Error(s);

            case 2:
              throw new Error(i);
          }
        },
        signatureNormalize: function signatureNormalize(t) {
          switch (b("signature", t, 64), e.signatureNormalize(t)) {
            case 0:
              return t;

            case 1:
              throw new Error(c);
          }
        },
        signatureExport: function signatureExport(t, n) {
          b("signature", t, 64);
          var i = {
            output: n = g(n, 72),
            outputlen: 72
          };

          switch (e.signatureExport(i, t)) {
            case 0:
              return n.slice(0, i.outputlen);

            case 1:
              throw new Error(c);

            case 2:
              throw new Error(r);
          }
        },
        signatureImport: function signatureImport(t, n) {
          switch (b("signature", t), n = g(n, 64), e.signatureImport(n, t)) {
            case 0:
              return n;

            case 1:
              throw new Error(c);

            case 2:
              throw new Error(r);
          }
        },
        ecdsaSign: function ecdsaSign(t, n) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var o = arguments.length > 3 ? arguments[3] : undefined;
          b("message", t, 32), b("private key", n, 32), p("Object" === v(i), "Expected options to be an Object"), void 0 !== i.data && b("options.data", i.data), void 0 !== i.noncefn && p("Function" === v(i.noncefn), "Expected options.noncefn to be a Function");
          var a = {
            signature: o = g(o, 64),
            recid: null
          };

          switch (e.ecdsaSign(a, t, n, i.data, i.noncefn)) {
            case 0:
              return a;

            case 1:
              throw new Error(h);

            case 2:
              throw new Error(r);
          }
        },
        ecdsaVerify: function ecdsaVerify(t, r, n) {
          switch (b("signature", t, 64), b("message", r, 32), b("public key", n, [33, 65]), e.ecdsaVerify(t, r, n)) {
            case 0:
              return !0;

            case 3:
              return !1;

            case 1:
              throw new Error(c);

            case 2:
              throw new Error(s);
          }
        },
        ecdsaRecover: function ecdsaRecover(t, n, i) {
          var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
          var a = arguments.length > 4 ? arguments[4] : undefined;

          switch (b("signature", t, 64), p("Number" === v(n) && n >= 0 && n <= 3, "Expected recovery id to be a Number within interval [0, 3]"), b("message", i, 32), y(o), a = g(a, o ? 33 : 65), e.ecdsaRecover(a, t, n, i)) {
            case 0:
              return a;

            case 1:
              throw new Error(c);

            case 2:
              throw new Error(d);

            case 3:
              throw new Error(r);
          }
        },
        ecdh: function ecdh(t, r) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var i = arguments.length > 3 ? arguments[3] : undefined;

          switch (b("public key", t, [33, 65]), b("private key", r, 32), p("Object" === v(n), "Expected options to be an Object"), void 0 !== n.data && b("options.data", n.data), void 0 !== n.hashfn ? (p("Function" === v(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && b("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && b("options.ybuf", n.ybuf, 32), b("output", i)) : i = g(i, 32), e.ecdh(i, t, r, n.data, n.hashfn, n.xbuf, n.ybuf)) {
            case 0:
              return i;

            case 1:
              throw new Error(s);

            case 2:
              throw new Error(l);
          }
        }
      };
    };
  }, function (e, t, r) {
    var n = new (0, r(36).ec)("secp256k1"),
        i = n.curve,
        o = i.n.constructor;

    function a(e) {
      var t = e[0];

      switch (t) {
        case 2:
        case 3:
          return 33 !== e.length ? null : function (e, t) {
            var r = new o(t);
            if (r.cmp(i.p) >= 0) return null;
            r = r.toRed(i.red);
            var a = r.redSqr().redIMul(r).redIAdd(i.b).redSqrt();
            return 3 === e !== a.isOdd() && (a = a.redNeg()), n.keyPair({
              pub: {
                x: r,
                y: a
              }
            });
          }(t, e.subarray(1, 33));

        case 4:
        case 6:
        case 7:
          return 65 !== e.length ? null : function (e, t, r) {
            var a = new o(t),
                s = new o(r);
            if (a.cmp(i.p) >= 0 || s.cmp(i.p) >= 0) return null;
            if (a = a.toRed(i.red), s = s.toRed(i.red), (6 === e || 7 === e) && s.isOdd() !== (7 === e)) return null;
            var f = a.redSqr().redIMul(a);
            return s.redSqr().redISub(f.redIAdd(i.b)).isZero() ? n.keyPair({
              pub: {
                x: a,
                y: s
              }
            }) : null;
          }(t, e.subarray(1, 33), e.subarray(33, 65));

        default:
          return null;
      }
    }

    function s(e, t) {
      var r = t.encode(null, 33 === e.length);

      for (var _t9 = 0; _t9 < e.length; ++_t9) {
        e[_t9] = r[_t9];
      }
    }

    e.exports = {
      contextRandomize: function contextRandomize() {
        return 0;
      },
      privateKeyVerify: function privateKeyVerify(e) {
        var t = new o(e);
        return t.cmp(i.n) < 0 && !t.isZero() ? 0 : 1;
      },
      privateKeyNegate: function privateKeyNegate(e) {
        var t = new o(e),
            r = i.n.sub(t).umod(i.n).toArrayLike(Uint8Array, "be", 32);
        return e.set(r), 0;
      },
      privateKeyTweakAdd: function privateKeyTweakAdd(e, t) {
        var r = new o(t);
        if (r.cmp(i.n) >= 0) return 1;
        if (r.iadd(new o(e)), r.cmp(i.n) >= 0 && r.isub(i.n), r.isZero()) return 1;
        var n = r.toArrayLike(Uint8Array, "be", 32);
        return e.set(n), 0;
      },
      privateKeyTweakMul: function privateKeyTweakMul(e, t) {
        var r = new o(t);
        if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
        r.imul(new o(e)), r.cmp(i.n) >= 0 && (r = r.umod(i.n));
        var n = r.toArrayLike(Uint8Array, "be", 32);
        return e.set(n), 0;
      },
      publicKeyVerify: function publicKeyVerify(e) {
        return null === a(e) ? 1 : 0;
      },
      publicKeyCreate: function publicKeyCreate(e, t) {
        var r = new o(t);
        if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
        return s(e, n.keyFromPrivate(t).getPublic()), 0;
      },
      publicKeyConvert: function publicKeyConvert(e, t) {
        var r = a(t);
        if (null === r) return 1;
        return s(e, r.getPublic()), 0;
      },
      publicKeyNegate: function publicKeyNegate(e, t) {
        var r = a(t);
        if (null === r) return 1;
        var n = r.getPublic();
        return n.y = n.y.redNeg(), s(e, n), 0;
      },
      publicKeyCombine: function publicKeyCombine(e, t) {
        var r = new Array(t.length);

        for (var _e10 = 0; _e10 < t.length; ++_e10) {
          if (r[_e10] = a(t[_e10]), null === r[_e10]) return 1;
        }

        var n = r[0].getPublic();

        for (var _e11 = 1; _e11 < r.length; ++_e11) {
          n = n.add(r[_e11].pub);
        }

        return n.isInfinity() ? 2 : (s(e, n), 0);
      },
      publicKeyTweakAdd: function publicKeyTweakAdd(e, t, r) {
        var n = a(t);
        if (null === n) return 1;
        if ((r = new o(r)).cmp(i.n) >= 0) return 2;
        var f = n.getPublic().add(i.g.mul(r));
        return f.isInfinity() ? 2 : (s(e, f), 0);
      },
      publicKeyTweakMul: function publicKeyTweakMul(e, t, r) {
        var n = a(t);
        if (null === n) return 1;
        if ((r = new o(r)).cmp(i.n) >= 0 || r.isZero()) return 2;
        return s(e, n.getPublic().mul(r)), 0;
      },
      signatureNormalize: function signatureNormalize(e) {
        var t = new o(e.subarray(0, 32)),
            r = new o(e.subarray(32, 64));
        return t.cmp(i.n) >= 0 || r.cmp(i.n) >= 0 ? 1 : (1 === r.cmp(n.nh) && e.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0);
      },
      signatureExport: function signatureExport(e, t) {
        var r = t.subarray(0, 32),
            n = t.subarray(32, 64);
        if (new o(r).cmp(i.n) >= 0) return 1;
        if (new o(n).cmp(i.n) >= 0) return 1;
        var a = e.output;
        var s = a.subarray(4, 37);
        s[0] = 0, s.set(r, 1);
        var f = 33,
            u = 0;

        for (; f > 1 && 0 === s[u] && !(128 & s[u + 1]); --f, ++u) {
          ;
        }

        if (s = s.subarray(u), 128 & s[0]) return 1;
        if (f > 1 && 0 === s[0] && !(128 & s[1])) return 1;
        var c = a.subarray(39, 72);
        c[0] = 0, c.set(n, 1);
        var h = 33,
            d = 0;

        for (; h > 1 && 0 === c[d] && !(128 & c[d + 1]); --h, ++d) {
          ;
        }

        return c = c.subarray(d), 128 & c[0] || h > 1 && 0 === c[0] && !(128 & c[1]) ? 1 : (e.outputlen = 6 + f + h, a[0] = 48, a[1] = e.outputlen - 2, a[2] = 2, a[3] = s.length, a.set(s, 4), a[4 + f] = 2, a[5 + f] = c.length, a.set(c, 6 + f), 0);
      },
      signatureImport: function signatureImport(e, t) {
        if (t.length < 8) return 1;
        if (t.length > 72) return 1;
        if (48 !== t[0]) return 1;
        if (t[1] !== t.length - 2) return 1;
        if (2 !== t[2]) return 1;
        var r = t[3];
        if (0 === r) return 1;
        if (5 + r >= t.length) return 1;
        if (2 !== t[4 + r]) return 1;
        var n = t[5 + r];
        if (0 === n) return 1;
        if (6 + r + n !== t.length) return 1;
        if (128 & t[4]) return 1;
        if (r > 1 && 0 === t[4] && !(128 & t[5])) return 1;
        if (128 & t[r + 6]) return 1;
        if (n > 1 && 0 === t[r + 6] && !(128 & t[r + 7])) return 1;
        var a = t.subarray(4, 4 + r);
        if (33 === a.length && 0 === a[0] && (a = a.subarray(1)), a.length > 32) return 1;
        var s = t.subarray(6 + r);
        if (33 === s.length && 0 === s[0] && (s = s.slice(1)), s.length > 32) throw new Error("S length is too long");
        var f = new o(a);
        f.cmp(i.n) >= 0 && (f = new o(0));
        var u = new o(t.subarray(6 + r));
        return u.cmp(i.n) >= 0 && (u = new o(0)), e.set(f.toArrayLike(Uint8Array, "be", 32), 0), e.set(u.toArrayLike(Uint8Array, "be", 32), 32), 0;
      },
      ecdsaSign: function ecdsaSign(e, t, r, a, s) {
        if (s) {
          var _e12 = s;

          s = function s(n) {
            var i = _e12(t, r, null, a, n);

            if (!(i instanceof Uint8Array && 32 === i.length)) throw new Error("This is the way");
            return new o(i);
          };
        }

        var f = new o(r);
        if (f.cmp(i.n) >= 0 || f.isZero()) return 1;
        var u;

        try {
          u = n.sign(t, r, {
            canonical: !0,
            k: s,
            pers: a
          });
        } catch (e) {
          return 1;
        }

        return e.signature.set(u.r.toArrayLike(Uint8Array, "be", 32), 0), e.signature.set(u.s.toArrayLike(Uint8Array, "be", 32), 32), e.recid = u.recoveryParam, 0;
      },
      ecdsaVerify: function ecdsaVerify(e, t, r) {
        var s = {
          r: e.subarray(0, 32),
          s: e.subarray(32, 64)
        },
            f = new o(s.r),
            u = new o(s.s);
        if (f.cmp(i.n) >= 0 || u.cmp(i.n) >= 0) return 1;
        if (1 === u.cmp(n.nh) || f.isZero() || u.isZero()) return 3;
        var c = a(r);
        if (null === c) return 2;
        var h = c.getPublic();
        return n.verify(t, s, h) ? 0 : 3;
      },
      ecdsaRecover: function ecdsaRecover(e, t, r, a) {
        var f = {
          r: t.slice(0, 32),
          s: t.slice(32, 64)
        },
            u = new o(f.r),
            c = new o(f.s);
        if (u.cmp(i.n) >= 0 || c.cmp(i.n) >= 0) return 1;
        if (u.isZero() || c.isZero()) return 2;
        var h;

        try {
          h = n.recoverPubKey(a, f, r);
        } catch (e) {
          return 2;
        }

        return s(e, h), 0;
      },
      ecdh: function ecdh(e, t, r, s, f, u, c) {
        var h = a(t);
        if (null === h) return 1;
        var d = new o(r);
        if (d.cmp(i.n) >= 0 || d.isZero()) return 2;
        var l = h.getPublic().mul(d);

        if (void 0 === f) {
          var _t10 = l.encode(null, !0),
              _r16 = n.hash().update(_t10).digest();

          for (var _t11 = 0; _t11 < 32; ++_t11) {
            e[_t11] = _r16[_t11];
          }
        } else {
          u || (u = new Uint8Array(32));

          var _t12 = l.getX().toArray("be", 32);

          for (var _e13 = 0; _e13 < 32; ++_e13) {
            u[_e13] = _t12[_e13];
          }

          c || (c = new Uint8Array(32));

          var _r17 = l.getY().toArray("be", 32);

          for (var _e14 = 0; _e14 < 32; ++_e14) {
            c[_e14] = _r17[_e14];
          }

          var _n11 = f(u, c, s);

          if (!(_n11 instanceof Uint8Array && _n11.length === e.length)) return 2;
          e.set(_n11);
        }

        return 0;
      }
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(244);
    t.getRandomBytes = function (e) {
      return new Promise(function (t, r) {
        n(e, function (e, n) {
          e ? r(e) : t(n);
        });
      });
    }, t.getRandomBytesSync = function (e) {
      return n(e);
    };
  }, function (e, t, r) {
    "use strict";

    (function (t, n) {
      var i = r(2).Buffer,
          o = t.crypto || t.msCrypto;
      o && o.getRandomValues ? e.exports = function (e, t) {
        if (e > 4294967295) throw new RangeError("requested too many random bytes");
        var r = i.allocUnsafe(e);
        if (e > 0) if (e > 65536) for (var a = 0; a < e; a += 65536) {
          o.getRandomValues(r.slice(a, a + 65536));
        } else o.getRandomValues(r);
        if ("function" == typeof t) return n.nextTick(function () {
          t(null, r);
        });
        return r;
      } : e.exports = function () {
        throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
      };
    }).call(this, r(5), r(3));
  }, function (e, t, r) {
    "use strict";

    (function (e) {
      var n = r(4),
          i = new (0, r(36).ec)("secp256k1"),
          o = i.curve;
      t.privateKeyExport = function (e, t) {
        var r = new n(e);
        if (r.ucmp(o.n) >= 0) throw new Error("couldn't export to DER format");
        var s = i.g.mul(r);
        return a(s.getX(), s.getY(), t);
      }, t.privateKeyModInverse = function (t) {
        var r = new n(t);
        if (r.ucmp(o.n) >= 0 || r.isZero()) throw new Error("private key range is invalid");
        return r.invm(o.n).toArrayLike(e, "be", 32);
      }, t.signatureImport = function (t) {
        var r = new n(t.r);
        r.ucmp(o.n) >= 0 && (r = new n(0));
        var i = new n(t.s);
        return i.ucmp(o.n) >= 0 && (i = new n(0)), e.concat([r.toArrayLike(e, "be", 32), i.toArrayLike(e, "be", 32)]);
      }, t.ecdhUnsafe = function (e, t, r) {
        var s = i.keyFromPublic(e),
            f = new n(t);
        if (f.ucmp(o.n) >= 0 || f.isZero()) throw new Error("scalar was invalid (zero or overflow)");
        var u = s.pub.mul(f);
        return a(u.getX(), u.getY(), r);
      };

      var a = function a(t, r, n) {
        var i = void 0;
        return n ? ((i = e.alloc(33))[0] = r.isOdd() ? 3 : 2, t.toArrayLike(e, "be", 32).copy(i, 1)) : ((i = e.alloc(65))[0] = 4, t.toArrayLike(e, "be", 32).copy(i, 1), r.toArrayLike(e, "be", 32).copy(i, 33)), i;
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    "use strict";

    (function (e) {
      var r = e.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          n = e.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      t.privateKeyExport = function (t, i, o) {
        var a = e.from(o ? r : n);
        return t.copy(a, o ? 8 : 9), i.copy(a, o ? 181 : 214), a;
      }, t.privateKeyImport = function (e) {
        var t = e.length,
            r = 0;
        if (t < r + 1 || 48 !== e[r]) return null;
        if (t < (r += 1) + 1 || !(128 & e[r])) return null;
        var n = 127 & e[r];
        if (n < 1 || n > 2) return null;
        if (t < (r += 1) + n) return null;
        var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
        return t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1] ? null : e.slice(r + 2, r + 2 + e[r + 1]);
      }, t.signatureImportLax = function (t) {
        var r = e.alloc(32, 0),
            n = e.alloc(32, 0),
            i = t.length,
            o = 0;
        if (48 !== t[o++]) return null;
        var a = t[o++];
        if (128 & a && (o += a - 128) > i) return null;
        if (2 !== t[o++]) return null;
        var s = t[o++];

        if (128 & s) {
          if (o + (a = s - 128) > i) return null;

          for (; a > 0 && 0 === t[o]; o += 1, a -= 1) {
            ;
          }

          for (s = 0; a > 0; o += 1, a -= 1) {
            s = (s << 8) + t[o];
          }
        }

        if (s > i - o) return null;
        var f = o;
        if (o += s, 2 !== t[o++]) return null;
        var u = t[o++];

        if (128 & u) {
          if (o + (a = u - 128) > i) return null;

          for (; a > 0 && 0 === t[o]; o += 1, a -= 1) {
            ;
          }

          for (u = 0; a > 0; o += 1, a -= 1) {
            u = (u << 8) + t[o];
          }
        }

        if (u > i - o) return null;
        var c = o;

        for (o += u; s > 0 && 0 === t[f]; s -= 1, f += 1) {
          ;
        }

        if (s > 32) return null;
        var h = t.slice(f, f + s);

        for (h.copy(r, 32 - h.length); u > 0 && 0 === t[c]; u -= 1, c += 1) {
          ;
        }

        if (u > 32) return null;
        var d = t.slice(c, c + u);
        return d.copy(n, 32 - d.length), {
          r: r,
          s: n
        };
      };
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    !function (e) {
      "use strict";

      var t = function t(e) {
        var t,
            r = new Float64Array(16);
        if (e) for (t = 0; t < e.length; t++) {
          r[t] = e[t];
        }
        return r;
      },
          n = function n() {
        throw new Error("no PRNG");
      },
          i = new Uint8Array(16),
          o = new Uint8Array(32);

      o[0] = 9;
      var a = t(),
          s = t([1]),
          f = t([56129, 1]),
          u = t([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
          c = t([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
          h = t([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
          d = t([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
          l = t([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

      function p(e, t, r, n) {
        e[t] = r >> 24 & 255, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r, e[t + 4] = n >> 24 & 255, e[t + 5] = n >> 16 & 255, e[t + 6] = n >> 8 & 255, e[t + 7] = 255 & n;
      }

      function b(e, t, r, n, i) {
        var o,
            a = 0;

        for (o = 0; o < i; o++) {
          a |= e[t + o] ^ r[n + o];
        }

        return (1 & a - 1 >>> 8) - 1;
      }

      function y(e, t, r, n) {
        return b(e, t, r, n, 16);
      }

      function g(e, t, r, n) {
        return b(e, t, r, n, 32);
      }

      function v(e, t, r, n) {
        !function (e, t, r, n) {
          for (var i, o = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, u = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, c = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, h = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, d = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, l = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, p = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, b = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, y = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, g = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, v = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, m = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, w = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, _ = o, E = a, S = s, A = f, x = u, k = c, M = h, T = d, I = l, R = p, P = b, L = y, B = g, C = v, O = m, N = w, j = 0; j < 20; j += 2) {
            _ ^= (i = (B ^= (i = (I ^= (i = (x ^= (i = _ + B | 0) << 7 | i >>> 25) + _ | 0) << 9 | i >>> 23) + x | 0) << 13 | i >>> 19) + I | 0) << 18 | i >>> 14, k ^= (i = (E ^= (i = (C ^= (i = (R ^= (i = k + E | 0) << 7 | i >>> 25) + k | 0) << 9 | i >>> 23) + R | 0) << 13 | i >>> 19) + C | 0) << 18 | i >>> 14, P ^= (i = (M ^= (i = (S ^= (i = (O ^= (i = P + M | 0) << 7 | i >>> 25) + P | 0) << 9 | i >>> 23) + O | 0) << 13 | i >>> 19) + S | 0) << 18 | i >>> 14, N ^= (i = (L ^= (i = (T ^= (i = (A ^= (i = N + L | 0) << 7 | i >>> 25) + N | 0) << 9 | i >>> 23) + A | 0) << 13 | i >>> 19) + T | 0) << 18 | i >>> 14, _ ^= (i = (A ^= (i = (S ^= (i = (E ^= (i = _ + A | 0) << 7 | i >>> 25) + _ | 0) << 9 | i >>> 23) + E | 0) << 13 | i >>> 19) + S | 0) << 18 | i >>> 14, k ^= (i = (x ^= (i = (T ^= (i = (M ^= (i = k + x | 0) << 7 | i >>> 25) + k | 0) << 9 | i >>> 23) + M | 0) << 13 | i >>> 19) + T | 0) << 18 | i >>> 14, P ^= (i = (R ^= (i = (I ^= (i = (L ^= (i = P + R | 0) << 7 | i >>> 25) + P | 0) << 9 | i >>> 23) + L | 0) << 13 | i >>> 19) + I | 0) << 18 | i >>> 14, N ^= (i = (O ^= (i = (C ^= (i = (B ^= (i = N + O | 0) << 7 | i >>> 25) + N | 0) << 9 | i >>> 23) + B | 0) << 13 | i >>> 19) + C | 0) << 18 | i >>> 14;
          }

          _ = _ + o | 0, E = E + a | 0, S = S + s | 0, A = A + f | 0, x = x + u | 0, k = k + c | 0, M = M + h | 0, T = T + d | 0, I = I + l | 0, R = R + p | 0, P = P + b | 0, L = L + y | 0, B = B + g | 0, C = C + v | 0, O = O + m | 0, N = N + w | 0, e[0] = _ >>> 0 & 255, e[1] = _ >>> 8 & 255, e[2] = _ >>> 16 & 255, e[3] = _ >>> 24 & 255, e[4] = E >>> 0 & 255, e[5] = E >>> 8 & 255, e[6] = E >>> 16 & 255, e[7] = E >>> 24 & 255, e[8] = S >>> 0 & 255, e[9] = S >>> 8 & 255, e[10] = S >>> 16 & 255, e[11] = S >>> 24 & 255, e[12] = A >>> 0 & 255, e[13] = A >>> 8 & 255, e[14] = A >>> 16 & 255, e[15] = A >>> 24 & 255, e[16] = x >>> 0 & 255, e[17] = x >>> 8 & 255, e[18] = x >>> 16 & 255, e[19] = x >>> 24 & 255, e[20] = k >>> 0 & 255, e[21] = k >>> 8 & 255, e[22] = k >>> 16 & 255, e[23] = k >>> 24 & 255, e[24] = M >>> 0 & 255, e[25] = M >>> 8 & 255, e[26] = M >>> 16 & 255, e[27] = M >>> 24 & 255, e[28] = T >>> 0 & 255, e[29] = T >>> 8 & 255, e[30] = T >>> 16 & 255, e[31] = T >>> 24 & 255, e[32] = I >>> 0 & 255, e[33] = I >>> 8 & 255, e[34] = I >>> 16 & 255, e[35] = I >>> 24 & 255, e[36] = R >>> 0 & 255, e[37] = R >>> 8 & 255, e[38] = R >>> 16 & 255, e[39] = R >>> 24 & 255, e[40] = P >>> 0 & 255, e[41] = P >>> 8 & 255, e[42] = P >>> 16 & 255, e[43] = P >>> 24 & 255, e[44] = L >>> 0 & 255, e[45] = L >>> 8 & 255, e[46] = L >>> 16 & 255, e[47] = L >>> 24 & 255, e[48] = B >>> 0 & 255, e[49] = B >>> 8 & 255, e[50] = B >>> 16 & 255, e[51] = B >>> 24 & 255, e[52] = C >>> 0 & 255, e[53] = C >>> 8 & 255, e[54] = C >>> 16 & 255, e[55] = C >>> 24 & 255, e[56] = O >>> 0 & 255, e[57] = O >>> 8 & 255, e[58] = O >>> 16 & 255, e[59] = O >>> 24 & 255, e[60] = N >>> 0 & 255, e[61] = N >>> 8 & 255, e[62] = N >>> 16 & 255, e[63] = N >>> 24 & 255;
        }(e, t, r, n);
      }

      function m(e, t, r, n) {
        !function (e, t, r, n) {
          for (var i, o = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, u = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, c = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, h = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, d = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, l = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, p = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, b = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, y = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, g = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, v = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, m = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, w = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, _ = 0; _ < 20; _ += 2) {
            o ^= (i = (g ^= (i = (l ^= (i = (u ^= (i = o + g | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + u | 0) << 13 | i >>> 19) + l | 0) << 18 | i >>> 14, c ^= (i = (a ^= (i = (v ^= (i = (p ^= (i = c + a | 0) << 7 | i >>> 25) + c | 0) << 9 | i >>> 23) + p | 0) << 13 | i >>> 19) + v | 0) << 18 | i >>> 14, b ^= (i = (h ^= (i = (s ^= (i = (m ^= (i = b + h | 0) << 7 | i >>> 25) + b | 0) << 9 | i >>> 23) + m | 0) << 13 | i >>> 19) + s | 0) << 18 | i >>> 14, w ^= (i = (y ^= (i = (d ^= (i = (f ^= (i = w + y | 0) << 7 | i >>> 25) + w | 0) << 9 | i >>> 23) + f | 0) << 13 | i >>> 19) + d | 0) << 18 | i >>> 14, o ^= (i = (f ^= (i = (s ^= (i = (a ^= (i = o + f | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + a | 0) << 13 | i >>> 19) + s | 0) << 18 | i >>> 14, c ^= (i = (u ^= (i = (d ^= (i = (h ^= (i = c + u | 0) << 7 | i >>> 25) + c | 0) << 9 | i >>> 23) + h | 0) << 13 | i >>> 19) + d | 0) << 18 | i >>> 14, b ^= (i = (p ^= (i = (l ^= (i = (y ^= (i = b + p | 0) << 7 | i >>> 25) + b | 0) << 9 | i >>> 23) + y | 0) << 13 | i >>> 19) + l | 0) << 18 | i >>> 14, w ^= (i = (m ^= (i = (v ^= (i = (g ^= (i = w + m | 0) << 7 | i >>> 25) + w | 0) << 9 | i >>> 23) + g | 0) << 13 | i >>> 19) + v | 0) << 18 | i >>> 14;
          }

          e[0] = o >>> 0 & 255, e[1] = o >>> 8 & 255, e[2] = o >>> 16 & 255, e[3] = o >>> 24 & 255, e[4] = c >>> 0 & 255, e[5] = c >>> 8 & 255, e[6] = c >>> 16 & 255, e[7] = c >>> 24 & 255, e[8] = b >>> 0 & 255, e[9] = b >>> 8 & 255, e[10] = b >>> 16 & 255, e[11] = b >>> 24 & 255, e[12] = w >>> 0 & 255, e[13] = w >>> 8 & 255, e[14] = w >>> 16 & 255, e[15] = w >>> 24 & 255, e[16] = h >>> 0 & 255, e[17] = h >>> 8 & 255, e[18] = h >>> 16 & 255, e[19] = h >>> 24 & 255, e[20] = d >>> 0 & 255, e[21] = d >>> 8 & 255, e[22] = d >>> 16 & 255, e[23] = d >>> 24 & 255, e[24] = l >>> 0 & 255, e[25] = l >>> 8 & 255, e[26] = l >>> 16 & 255, e[27] = l >>> 24 & 255, e[28] = p >>> 0 & 255, e[29] = p >>> 8 & 255, e[30] = p >>> 16 & 255, e[31] = p >>> 24 & 255;
        }(e, t, r, n);
      }

      var w = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

      function _(e, t, r, n, i, o, a) {
        var s,
            f,
            u = new Uint8Array(16),
            c = new Uint8Array(64);

        for (f = 0; f < 16; f++) {
          u[f] = 0;
        }

        for (f = 0; f < 8; f++) {
          u[f] = o[f];
        }

        for (; i >= 64;) {
          for (v(c, u, a, w), f = 0; f < 64; f++) {
            e[t + f] = r[n + f] ^ c[f];
          }

          for (s = 1, f = 8; f < 16; f++) {
            s = s + (255 & u[f]) | 0, u[f] = 255 & s, s >>>= 8;
          }

          i -= 64, t += 64, n += 64;
        }

        if (i > 0) for (v(c, u, a, w), f = 0; f < i; f++) {
          e[t + f] = r[n + f] ^ c[f];
        }
        return 0;
      }

      function E(e, t, r, n, i) {
        var o,
            a,
            s = new Uint8Array(16),
            f = new Uint8Array(64);

        for (a = 0; a < 16; a++) {
          s[a] = 0;
        }

        for (a = 0; a < 8; a++) {
          s[a] = n[a];
        }

        for (; r >= 64;) {
          for (v(f, s, i, w), a = 0; a < 64; a++) {
            e[t + a] = f[a];
          }

          for (o = 1, a = 8; a < 16; a++) {
            o = o + (255 & s[a]) | 0, s[a] = 255 & o, o >>>= 8;
          }

          r -= 64, t += 64;
        }

        if (r > 0) for (v(f, s, i, w), a = 0; a < r; a++) {
          e[t + a] = f[a];
        }
        return 0;
      }

      function S(e, t, r, n, i) {
        var o = new Uint8Array(32);
        m(o, n, i, w);

        for (var a = new Uint8Array(8), s = 0; s < 8; s++) {
          a[s] = n[s + 16];
        }

        return E(e, t, r, a, o);
      }

      function A(e, t, r, n, i, o, a) {
        var s = new Uint8Array(32);
        m(s, o, a, w);

        for (var f = new Uint8Array(8), u = 0; u < 8; u++) {
          f[u] = o[u + 16];
        }

        return _(e, t, r, n, i, f, s);
      }

      var x = function x(e) {
        var t, r, n, i, o, a, s, f;
        this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, t = 255 & e[0] | (255 & e[1]) << 8, this.r[0] = 8191 & t, r = 255 & e[2] | (255 & e[3]) << 8, this.r[1] = 8191 & (t >>> 13 | r << 3), n = 255 & e[4] | (255 & e[5]) << 8, this.r[2] = 7939 & (r >>> 10 | n << 6), i = 255 & e[6] | (255 & e[7]) << 8, this.r[3] = 8191 & (n >>> 7 | i << 9), o = 255 & e[8] | (255 & e[9]) << 8, this.r[4] = 255 & (i >>> 4 | o << 12), this.r[5] = o >>> 1 & 8190, a = 255 & e[10] | (255 & e[11]) << 8, this.r[6] = 8191 & (o >>> 14 | a << 2), s = 255 & e[12] | (255 & e[13]) << 8, this.r[7] = 8065 & (a >>> 11 | s << 5), f = 255 & e[14] | (255 & e[15]) << 8, this.r[8] = 8191 & (s >>> 8 | f << 8), this.r[9] = f >>> 5 & 127, this.pad[0] = 255 & e[16] | (255 & e[17]) << 8, this.pad[1] = 255 & e[18] | (255 & e[19]) << 8, this.pad[2] = 255 & e[20] | (255 & e[21]) << 8, this.pad[3] = 255 & e[22] | (255 & e[23]) << 8, this.pad[4] = 255 & e[24] | (255 & e[25]) << 8, this.pad[5] = 255 & e[26] | (255 & e[27]) << 8, this.pad[6] = 255 & e[28] | (255 & e[29]) << 8, this.pad[7] = 255 & e[30] | (255 & e[31]) << 8;
      };

      function k(e, t, r, n, i, o) {
        var a = new x(o);
        return a.update(r, n, i), a.finish(e, t), 0;
      }

      function M(e, t, r, n, i, o) {
        var a = new Uint8Array(16);
        return k(a, 0, r, n, i, o), y(e, t, a, 0);
      }

      function T(e, t, r, n, i) {
        var o;
        if (r < 32) return -1;

        for (A(e, 0, t, 0, r, n, i), k(e, 16, e, 32, r - 32, e), o = 0; o < 16; o++) {
          e[o] = 0;
        }

        return 0;
      }

      function I(e, t, r, n, i) {
        var o,
            a = new Uint8Array(32);
        if (r < 32) return -1;
        if (S(a, 0, 32, n, i), 0 !== M(t, 16, t, 32, r - 32, a)) return -1;

        for (A(e, 0, t, 0, r, n, i), o = 0; o < 32; o++) {
          e[o] = 0;
        }

        return 0;
      }

      function R(e, t) {
        var r;

        for (r = 0; r < 16; r++) {
          e[r] = 0 | t[r];
        }
      }

      function P(e) {
        var t,
            r,
            n = 1;

        for (t = 0; t < 16; t++) {
          r = e[t] + n + 65535, n = Math.floor(r / 65536), e[t] = r - 65536 * n;
        }

        e[0] += n - 1 + 37 * (n - 1);
      }

      function L(e, t, r) {
        for (var n, i = ~(r - 1), o = 0; o < 16; o++) {
          n = i & (e[o] ^ t[o]), e[o] ^= n, t[o] ^= n;
        }
      }

      function B(e, r) {
        var n,
            i,
            o,
            a = t(),
            s = t();

        for (n = 0; n < 16; n++) {
          s[n] = r[n];
        }

        for (P(s), P(s), P(s), i = 0; i < 2; i++) {
          for (a[0] = s[0] - 65517, n = 1; n < 15; n++) {
            a[n] = s[n] - 65535 - (a[n - 1] >> 16 & 1), a[n - 1] &= 65535;
          }

          a[15] = s[15] - 32767 - (a[14] >> 16 & 1), o = a[15] >> 16 & 1, a[14] &= 65535, L(s, a, 1 - o);
        }

        for (n = 0; n < 16; n++) {
          e[2 * n] = 255 & s[n], e[2 * n + 1] = s[n] >> 8;
        }
      }

      function C(e, t) {
        var r = new Uint8Array(32),
            n = new Uint8Array(32);
        return B(r, e), B(n, t), g(r, 0, n, 0);
      }

      function O(e) {
        var t = new Uint8Array(32);
        return B(t, e), 1 & t[0];
      }

      function N(e, t) {
        var r;

        for (r = 0; r < 16; r++) {
          e[r] = t[2 * r] + (t[2 * r + 1] << 8);
        }

        e[15] &= 32767;
      }

      function j(e, t, r) {
        for (var n = 0; n < 16; n++) {
          e[n] = t[n] + r[n];
        }
      }

      function D(e, t, r) {
        for (var n = 0; n < 16; n++) {
          e[n] = t[n] - r[n];
        }
      }

      function U(e, t, r) {
        var n,
            i,
            o = 0,
            a = 0,
            s = 0,
            f = 0,
            u = 0,
            c = 0,
            h = 0,
            d = 0,
            l = 0,
            p = 0,
            b = 0,
            y = 0,
            g = 0,
            v = 0,
            m = 0,
            w = 0,
            _ = 0,
            E = 0,
            S = 0,
            A = 0,
            x = 0,
            k = 0,
            M = 0,
            T = 0,
            I = 0,
            R = 0,
            P = 0,
            L = 0,
            B = 0,
            C = 0,
            O = 0,
            N = r[0],
            j = r[1],
            D = r[2],
            U = r[3],
            z = r[4],
            q = r[5],
            F = r[6],
            K = r[7],
            H = r[8],
            V = r[9],
            Y = r[10],
            W = r[11],
            G = r[12],
            Z = r[13],
            J = r[14],
            $ = r[15];
        o += (n = t[0]) * N, a += n * j, s += n * D, f += n * U, u += n * z, c += n * q, h += n * F, d += n * K, l += n * H, p += n * V, b += n * Y, y += n * W, g += n * G, v += n * Z, m += n * J, w += n * $, a += (n = t[1]) * N, s += n * j, f += n * D, u += n * U, c += n * z, h += n * q, d += n * F, l += n * K, p += n * H, b += n * V, y += n * Y, g += n * W, v += n * G, m += n * Z, w += n * J, _ += n * $, s += (n = t[2]) * N, f += n * j, u += n * D, c += n * U, h += n * z, d += n * q, l += n * F, p += n * K, b += n * H, y += n * V, g += n * Y, v += n * W, m += n * G, w += n * Z, _ += n * J, E += n * $, f += (n = t[3]) * N, u += n * j, c += n * D, h += n * U, d += n * z, l += n * q, p += n * F, b += n * K, y += n * H, g += n * V, v += n * Y, m += n * W, w += n * G, _ += n * Z, E += n * J, S += n * $, u += (n = t[4]) * N, c += n * j, h += n * D, d += n * U, l += n * z, p += n * q, b += n * F, y += n * K, g += n * H, v += n * V, m += n * Y, w += n * W, _ += n * G, E += n * Z, S += n * J, A += n * $, c += (n = t[5]) * N, h += n * j, d += n * D, l += n * U, p += n * z, b += n * q, y += n * F, g += n * K, v += n * H, m += n * V, w += n * Y, _ += n * W, E += n * G, S += n * Z, A += n * J, x += n * $, h += (n = t[6]) * N, d += n * j, l += n * D, p += n * U, b += n * z, y += n * q, g += n * F, v += n * K, m += n * H, w += n * V, _ += n * Y, E += n * W, S += n * G, A += n * Z, x += n * J, k += n * $, d += (n = t[7]) * N, l += n * j, p += n * D, b += n * U, y += n * z, g += n * q, v += n * F, m += n * K, w += n * H, _ += n * V, E += n * Y, S += n * W, A += n * G, x += n * Z, k += n * J, M += n * $, l += (n = t[8]) * N, p += n * j, b += n * D, y += n * U, g += n * z, v += n * q, m += n * F, w += n * K, _ += n * H, E += n * V, S += n * Y, A += n * W, x += n * G, k += n * Z, M += n * J, T += n * $, p += (n = t[9]) * N, b += n * j, y += n * D, g += n * U, v += n * z, m += n * q, w += n * F, _ += n * K, E += n * H, S += n * V, A += n * Y, x += n * W, k += n * G, M += n * Z, T += n * J, I += n * $, b += (n = t[10]) * N, y += n * j, g += n * D, v += n * U, m += n * z, w += n * q, _ += n * F, E += n * K, S += n * H, A += n * V, x += n * Y, k += n * W, M += n * G, T += n * Z, I += n * J, R += n * $, y += (n = t[11]) * N, g += n * j, v += n * D, m += n * U, w += n * z, _ += n * q, E += n * F, S += n * K, A += n * H, x += n * V, k += n * Y, M += n * W, T += n * G, I += n * Z, R += n * J, P += n * $, g += (n = t[12]) * N, v += n * j, m += n * D, w += n * U, _ += n * z, E += n * q, S += n * F, A += n * K, x += n * H, k += n * V, M += n * Y, T += n * W, I += n * G, R += n * Z, P += n * J, L += n * $, v += (n = t[13]) * N, m += n * j, w += n * D, _ += n * U, E += n * z, S += n * q, A += n * F, x += n * K, k += n * H, M += n * V, T += n * Y, I += n * W, R += n * G, P += n * Z, L += n * J, B += n * $, m += (n = t[14]) * N, w += n * j, _ += n * D, E += n * U, S += n * z, A += n * q, x += n * F, k += n * K, M += n * H, T += n * V, I += n * Y, R += n * W, P += n * G, L += n * Z, B += n * J, C += n * $, w += (n = t[15]) * N, a += 38 * (E += n * D), s += 38 * (S += n * U), f += 38 * (A += n * z), u += 38 * (x += n * q), c += 38 * (k += n * F), h += 38 * (M += n * K), d += 38 * (T += n * H), l += 38 * (I += n * V), p += 38 * (R += n * Y), b += 38 * (P += n * W), y += 38 * (L += n * G), g += 38 * (B += n * Z), v += 38 * (C += n * J), m += 38 * (O += n * $), o = (n = (o += 38 * (_ += n * j)) + (i = 1) + 65535) - 65536 * (i = Math.floor(n / 65536)), a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536)), s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536)), f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536)), u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536)), c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536)), h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536)), d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536)), l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536)), p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536)), b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536)), y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536)), g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536)), v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536)), m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536)), w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536)), o = (n = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) - 65536 * (i = Math.floor(n / 65536)), a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536)), s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536)), f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536)), u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536)), c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536)), h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536)), d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536)), l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536)), p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536)), b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536)), y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536)), g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536)), v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536)), m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536)), w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536)), o += i - 1 + 37 * (i - 1), e[0] = o, e[1] = a, e[2] = s, e[3] = f, e[4] = u, e[5] = c, e[6] = h, e[7] = d, e[8] = l, e[9] = p, e[10] = b, e[11] = y, e[12] = g, e[13] = v, e[14] = m, e[15] = w;
      }

      function z(e, t) {
        U(e, t, t);
      }

      function q(e, r) {
        var n,
            i = t();

        for (n = 0; n < 16; n++) {
          i[n] = r[n];
        }

        for (n = 253; n >= 0; n--) {
          z(i, i), 2 !== n && 4 !== n && U(i, i, r);
        }

        for (n = 0; n < 16; n++) {
          e[n] = i[n];
        }
      }

      function F(e, r) {
        var n,
            i = t();

        for (n = 0; n < 16; n++) {
          i[n] = r[n];
        }

        for (n = 250; n >= 0; n--) {
          z(i, i), 1 !== n && U(i, i, r);
        }

        for (n = 0; n < 16; n++) {
          e[n] = i[n];
        }
      }

      function K(e, r, n) {
        var i,
            o,
            a = new Uint8Array(32),
            s = new Float64Array(80),
            u = t(),
            c = t(),
            h = t(),
            d = t(),
            l = t(),
            p = t();

        for (o = 0; o < 31; o++) {
          a[o] = r[o];
        }

        for (a[31] = 127 & r[31] | 64, a[0] &= 248, N(s, n), o = 0; o < 16; o++) {
          c[o] = s[o], d[o] = u[o] = h[o] = 0;
        }

        for (u[0] = d[0] = 1, o = 254; o >= 0; --o) {
          L(u, c, i = a[o >>> 3] >>> (7 & o) & 1), L(h, d, i), j(l, u, h), D(u, u, h), j(h, c, d), D(c, c, d), z(d, l), z(p, u), U(u, h, u), U(h, c, l), j(l, u, h), D(u, u, h), z(c, u), D(h, d, p), U(u, h, f), j(u, u, d), U(h, h, u), U(u, d, p), U(d, c, s), z(c, l), L(u, c, i), L(h, d, i);
        }

        for (o = 0; o < 16; o++) {
          s[o + 16] = u[o], s[o + 32] = h[o], s[o + 48] = c[o], s[o + 64] = d[o];
        }

        var b = s.subarray(32),
            y = s.subarray(16);
        return q(b, b), U(y, y, b), B(e, y), 0;
      }

      function H(e, t) {
        return K(e, t, o);
      }

      function V(e, t) {
        return n(t, 32), H(e, t);
      }

      function Y(e, t, r) {
        var n = new Uint8Array(32);
        return K(n, r, t), m(e, i, n, w);
      }

      x.prototype.blocks = function (e, t, r) {
        for (var n, i, o, a, s, f, u, c, h, d, l, p, b, y, g, v, m, w, _, E = this.fin ? 0 : 2048, S = this.h[0], A = this.h[1], x = this.h[2], k = this.h[3], M = this.h[4], T = this.h[5], I = this.h[6], R = this.h[7], P = this.h[8], L = this.h[9], B = this.r[0], C = this.r[1], O = this.r[2], N = this.r[3], j = this.r[4], D = this.r[5], U = this.r[6], z = this.r[7], q = this.r[8], F = this.r[9]; r >= 16;) {
          d = h = 0, d += (S += 8191 & (n = 255 & e[t + 0] | (255 & e[t + 1]) << 8)) * B, d += (A += 8191 & (n >>> 13 | (i = 255 & e[t + 2] | (255 & e[t + 3]) << 8) << 3)) * (5 * F), d += (x += 8191 & (i >>> 10 | (o = 255 & e[t + 4] | (255 & e[t + 5]) << 8) << 6)) * (5 * q), d += (k += 8191 & (o >>> 7 | (a = 255 & e[t + 6] | (255 & e[t + 7]) << 8) << 9)) * (5 * z), h = (d += (M += 8191 & (a >>> 4 | (s = 255 & e[t + 8] | (255 & e[t + 9]) << 8) << 12)) * (5 * U)) >>> 13, d &= 8191, d += (T += s >>> 1 & 8191) * (5 * D), d += (I += 8191 & (s >>> 14 | (f = 255 & e[t + 10] | (255 & e[t + 11]) << 8) << 2)) * (5 * j), d += (R += 8191 & (f >>> 11 | (u = 255 & e[t + 12] | (255 & e[t + 13]) << 8) << 5)) * (5 * N), d += (P += 8191 & (u >>> 8 | (c = 255 & e[t + 14] | (255 & e[t + 15]) << 8) << 8)) * (5 * O), l = h += (d += (L += c >>> 5 | E) * (5 * C)) >>> 13, l += S * C, l += A * B, l += x * (5 * F), l += k * (5 * q), h = (l += M * (5 * z)) >>> 13, l &= 8191, l += T * (5 * U), l += I * (5 * D), l += R * (5 * j), l += P * (5 * N), h += (l += L * (5 * O)) >>> 13, l &= 8191, p = h, p += S * O, p += A * C, p += x * B, p += k * (5 * F), h = (p += M * (5 * q)) >>> 13, p &= 8191, p += T * (5 * z), p += I * (5 * U), p += R * (5 * D), p += P * (5 * j), b = h += (p += L * (5 * N)) >>> 13, b += S * N, b += A * O, b += x * C, b += k * B, h = (b += M * (5 * F)) >>> 13, b &= 8191, b += T * (5 * q), b += I * (5 * z), b += R * (5 * U), b += P * (5 * D), y = h += (b += L * (5 * j)) >>> 13, y += S * j, y += A * N, y += x * O, y += k * C, h = (y += M * B) >>> 13, y &= 8191, y += T * (5 * F), y += I * (5 * q), y += R * (5 * z), y += P * (5 * U), g = h += (y += L * (5 * D)) >>> 13, g += S * D, g += A * j, g += x * N, g += k * O, h = (g += M * C) >>> 13, g &= 8191, g += T * B, g += I * (5 * F), g += R * (5 * q), g += P * (5 * z), v = h += (g += L * (5 * U)) >>> 13, v += S * U, v += A * D, v += x * j, v += k * N, h = (v += M * O) >>> 13, v &= 8191, v += T * C, v += I * B, v += R * (5 * F), v += P * (5 * q), m = h += (v += L * (5 * z)) >>> 13, m += S * z, m += A * U, m += x * D, m += k * j, h = (m += M * N) >>> 13, m &= 8191, m += T * O, m += I * C, m += R * B, m += P * (5 * F), w = h += (m += L * (5 * q)) >>> 13, w += S * q, w += A * z, w += x * U, w += k * D, h = (w += M * j) >>> 13, w &= 8191, w += T * N, w += I * O, w += R * C, w += P * B, _ = h += (w += L * (5 * F)) >>> 13, _ += S * F, _ += A * q, _ += x * z, _ += k * U, h = (_ += M * D) >>> 13, _ &= 8191, _ += T * j, _ += I * N, _ += R * O, _ += P * C, S = d = 8191 & (h = (h = ((h += (_ += L * B) >>> 13) << 2) + h | 0) + (d &= 8191) | 0), A = l += h >>>= 13, x = p &= 8191, k = b &= 8191, M = y &= 8191, T = g &= 8191, I = v &= 8191, R = m &= 8191, P = w &= 8191, L = _ &= 8191, t += 16, r -= 16;
        }

        this.h[0] = S, this.h[1] = A, this.h[2] = x, this.h[3] = k, this.h[4] = M, this.h[5] = T, this.h[6] = I, this.h[7] = R, this.h[8] = P, this.h[9] = L;
      }, x.prototype.finish = function (e, t) {
        var r,
            n,
            i,
            o,
            a = new Uint16Array(10);

        if (this.leftover) {
          for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++) {
            this.buffer[o] = 0;
          }

          this.fin = 1, this.blocks(this.buffer, 0, 16);
        }

        for (r = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++) {
          this.h[o] += r, r = this.h[o] >>> 13, this.h[o] &= 8191;
        }

        for (this.h[0] += 5 * r, r = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r, r = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r, a[0] = this.h[0] + 5, r = a[0] >>> 13, a[0] &= 8191, o = 1; o < 10; o++) {
          a[o] = this.h[o] + r, r = a[o] >>> 13, a[o] &= 8191;
        }

        for (a[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++) {
          a[o] &= n;
        }

        for (n = ~n, o = 0; o < 10; o++) {
          this.h[o] = this.h[o] & n | a[o];
        }

        for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), i = this.h[0] + this.pad[0], this.h[0] = 65535 & i, o = 1; o < 8; o++) {
          i = (this.h[o] + this.pad[o] | 0) + (i >>> 16) | 0, this.h[o] = 65535 & i;
        }

        e[t + 0] = this.h[0] >>> 0 & 255, e[t + 1] = this.h[0] >>> 8 & 255, e[t + 2] = this.h[1] >>> 0 & 255, e[t + 3] = this.h[1] >>> 8 & 255, e[t + 4] = this.h[2] >>> 0 & 255, e[t + 5] = this.h[2] >>> 8 & 255, e[t + 6] = this.h[3] >>> 0 & 255, e[t + 7] = this.h[3] >>> 8 & 255, e[t + 8] = this.h[4] >>> 0 & 255, e[t + 9] = this.h[4] >>> 8 & 255, e[t + 10] = this.h[5] >>> 0 & 255, e[t + 11] = this.h[5] >>> 8 & 255, e[t + 12] = this.h[6] >>> 0 & 255, e[t + 13] = this.h[6] >>> 8 & 255, e[t + 14] = this.h[7] >>> 0 & 255, e[t + 15] = this.h[7] >>> 8 & 255;
      }, x.prototype.update = function (e, t, r) {
        var n, i;

        if (this.leftover) {
          for ((i = 16 - this.leftover) > r && (i = r), n = 0; n < i; n++) {
            this.buffer[this.leftover + n] = e[t + n];
          }

          if (r -= i, t += i, this.leftover += i, this.leftover < 16) return;
          this.blocks(this.buffer, 0, 16), this.leftover = 0;
        }

        if (r >= 16 && (i = r - r % 16, this.blocks(e, t, i), t += i, r -= i), r) {
          for (n = 0; n < r; n++) {
            this.buffer[this.leftover + n] = e[t + n];
          }

          this.leftover += r;
        }
      };
      var W = T,
          G = I;
      var Z = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

      function J(e, t, r, n) {
        for (var i, o, a, s, f, u, c, h, d, l, p, b, y, g, v, m, w, _, E, S, A, x, k, M, T, I, R = new Int32Array(16), P = new Int32Array(16), L = e[0], B = e[1], C = e[2], O = e[3], N = e[4], j = e[5], D = e[6], U = e[7], z = t[0], q = t[1], F = t[2], K = t[3], H = t[4], V = t[5], Y = t[6], W = t[7], G = 0; n >= 128;) {
          for (E = 0; E < 16; E++) {
            S = 8 * E + G, R[E] = r[S + 0] << 24 | r[S + 1] << 16 | r[S + 2] << 8 | r[S + 3], P[E] = r[S + 4] << 24 | r[S + 5] << 16 | r[S + 6] << 8 | r[S + 7];
          }

          for (E = 0; E < 80; E++) {
            if (i = L, o = B, a = C, s = O, f = N, u = j, c = D, U, d = z, l = q, p = F, b = K, y = H, g = V, v = Y, W, k = 65535 & (x = W), M = x >>> 16, T = 65535 & (A = U), I = A >>> 16, k += 65535 & (x = (H >>> 14 | N << 18) ^ (H >>> 18 | N << 14) ^ (N >>> 9 | H << 23)), M += x >>> 16, T += 65535 & (A = (N >>> 14 | H << 18) ^ (N >>> 18 | H << 14) ^ (H >>> 9 | N << 23)), I += A >>> 16, k += 65535 & (x = H & V ^ ~H & Y), M += x >>> 16, T += 65535 & (A = N & j ^ ~N & D), I += A >>> 16, k += 65535 & (x = Z[2 * E + 1]), M += x >>> 16, T += 65535 & (A = Z[2 * E]), I += A >>> 16, A = R[E % 16], M += (x = P[E % 16]) >>> 16, T += 65535 & A, I += A >>> 16, T += (M += (k += 65535 & x) >>> 16) >>> 16, k = 65535 & (x = _ = 65535 & k | M << 16), M = x >>> 16, T = 65535 & (A = w = 65535 & T | (I += T >>> 16) << 16), I = A >>> 16, k += 65535 & (x = (z >>> 28 | L << 4) ^ (L >>> 2 | z << 30) ^ (L >>> 7 | z << 25)), M += x >>> 16, T += 65535 & (A = (L >>> 28 | z << 4) ^ (z >>> 2 | L << 30) ^ (z >>> 7 | L << 25)), I += A >>> 16, M += (x = z & q ^ z & F ^ q & F) >>> 16, T += 65535 & (A = L & B ^ L & C ^ B & C), I += A >>> 16, h = 65535 & (T += (M += (k += 65535 & x) >>> 16) >>> 16) | (I += T >>> 16) << 16, m = 65535 & k | M << 16, k = 65535 & (x = b), M = x >>> 16, T = 65535 & (A = s), I = A >>> 16, M += (x = _) >>> 16, T += 65535 & (A = w), I += A >>> 16, B = i, C = o, O = a, N = s = 65535 & (T += (M += (k += 65535 & x) >>> 16) >>> 16) | (I += T >>> 16) << 16, j = f, D = u, U = c, L = h, q = d, F = l, K = p, H = b = 65535 & k | M << 16, V = y, Y = g, W = v, z = m, E % 16 == 15) for (S = 0; S < 16; S++) {
              A = R[S], k = 65535 & (x = P[S]), M = x >>> 16, T = 65535 & A, I = A >>> 16, A = R[(S + 9) % 16], k += 65535 & (x = P[(S + 9) % 16]), M += x >>> 16, T += 65535 & A, I += A >>> 16, w = R[(S + 1) % 16], k += 65535 & (x = ((_ = P[(S + 1) % 16]) >>> 1 | w << 31) ^ (_ >>> 8 | w << 24) ^ (_ >>> 7 | w << 25)), M += x >>> 16, T += 65535 & (A = (w >>> 1 | _ << 31) ^ (w >>> 8 | _ << 24) ^ w >>> 7), I += A >>> 16, w = R[(S + 14) % 16], M += (x = ((_ = P[(S + 14) % 16]) >>> 19 | w << 13) ^ (w >>> 29 | _ << 3) ^ (_ >>> 6 | w << 26)) >>> 16, T += 65535 & (A = (w >>> 19 | _ << 13) ^ (_ >>> 29 | w << 3) ^ w >>> 6), I += A >>> 16, I += (T += (M += (k += 65535 & x) >>> 16) >>> 16) >>> 16, R[S] = 65535 & T | I << 16, P[S] = 65535 & k | M << 16;
            }
          }

          k = 65535 & (x = z), M = x >>> 16, T = 65535 & (A = L), I = A >>> 16, A = e[0], M += (x = t[0]) >>> 16, T += 65535 & A, I += A >>> 16, I += (T += (M += (k += 65535 & x) >>> 16) >>> 16) >>> 16, e[0] = L = 65535 & T | I << 16, t[0] = z = 65535 & k | M << 16, k = 65535 & (x = q), M = x >>> 16, T = 65535 & (A = B), I = A >>> 16, A = e[1], M += (x = t[1]) >>> 16, T += 65535 & A, I += A >>> 16, I += (T += (M += (k += 65535 & x) >>> 16) >>> 16) >>> 16, e[1] = B = 65535 & T | I << 16, t[1] = q = 65535 & k | M << 16, k = 65535 & (x = F), M = x >>> 16, T = 65535 & (A = C), I = A >>> 16, A = e[2], M += (x = t[2]) >>> 16, T += 65535 & A, I += A >>> 16, I += (T += (M += (k += 65535 & x) >>> 16) >>> 16) >>> 16, e[2] = C = 65535 & T | I << 16, t[2] = F = 65535 & k | M << 16, k = 65535 & (x = K), M = x >>> 16, T = 65535 & (A = O), I = A >>> 16, A = e[3], M += (x = t[3]) >>> 16, T += 65535 & A, I += A >>> 16, I += (T += (M += (k += 65535 & x) >>> 16) >>> 16) >>> 16, e[3] = O = 65535 & T | I << 16, t[3] = K = 65535 & k | M << 16, k = 65535 & (x = H), M = x >>> 16, T = 65535 & (A = N), I = A >>> 16, A = e[4], M += (x = t[4]) >>> 16, T += 65535 & A, I += A >>> 16, I += (T += (M += (k += 65535 & x) >>> 16) >>> 16) >>> 16, e[4] = N = 65535 & T | I << 16, t[4] = H = 65535 & k | M << 16, k = 65535 & (x = V), M = x >>> 16, T = 65535 & (A = j), I = A >>> 16, A = e[5], M += (x = t[5]) >>> 16, T += 65535 & A, I += A >>> 16, I += (T += (M += (k += 65535 & x) >>> 16) >>> 16) >>> 16, e[5] = j = 65535 & T | I << 16, t[5] = V = 65535 & k | M << 16, k = 65535 & (x = Y), M = x >>> 16, T = 65535 & (A = D), I = A >>> 16, A = e[6], M += (x = t[6]) >>> 16, T += 65535 & A, I += A >>> 16, I += (T += (M += (k += 65535 & x) >>> 16) >>> 16) >>> 16, e[6] = D = 65535 & T | I << 16, t[6] = Y = 65535 & k | M << 16, k = 65535 & (x = W), M = x >>> 16, T = 65535 & (A = U), I = A >>> 16, A = e[7], M += (x = t[7]) >>> 16, T += 65535 & A, I += A >>> 16, I += (T += (M += (k += 65535 & x) >>> 16) >>> 16) >>> 16, e[7] = U = 65535 & T | I << 16, t[7] = W = 65535 & k | M << 16, G += 128, n -= 128;
        }

        return n;
      }

      function $(e, t, r) {
        var n,
            i = new Int32Array(8),
            o = new Int32Array(8),
            a = new Uint8Array(256),
            s = r;

        for (i[0] = 1779033703, i[1] = 3144134277, i[2] = 1013904242, i[3] = 2773480762, i[4] = 1359893119, i[5] = 2600822924, i[6] = 528734635, i[7] = 1541459225, o[0] = 4089235720, o[1] = 2227873595, o[2] = 4271175723, o[3] = 1595750129, o[4] = 2917565137, o[5] = 725511199, o[6] = 4215389547, o[7] = 327033209, J(i, o, t, r), r %= 128, n = 0; n < r; n++) {
          a[n] = t[s - r + n];
        }

        for (a[r] = 128, a[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0, p(a, r - 8, s / 536870912 | 0, s << 3), J(i, o, a, r), n = 0; n < 8; n++) {
          p(e, 8 * n, i[n], o[n]);
        }

        return 0;
      }

      function X(e, r) {
        var n = t(),
            i = t(),
            o = t(),
            a = t(),
            s = t(),
            f = t(),
            u = t(),
            h = t(),
            d = t();
        D(n, e[1], e[0]), D(d, r[1], r[0]), U(n, n, d), j(i, e[0], e[1]), j(d, r[0], r[1]), U(i, i, d), U(o, e[3], r[3]), U(o, o, c), U(a, e[2], r[2]), j(a, a, a), D(s, i, n), D(f, a, o), j(u, a, o), j(h, i, n), U(e[0], s, f), U(e[1], h, u), U(e[2], u, f), U(e[3], s, h);
      }

      function Q(e, t, r) {
        var n;

        for (n = 0; n < 4; n++) {
          L(e[n], t[n], r);
        }
      }

      function ee(e, r) {
        var n = t(),
            i = t(),
            o = t();
        q(o, r[2]), U(n, r[0], o), U(i, r[1], o), B(e, i), e[31] ^= O(n) << 7;
      }

      function te(e, t, r) {
        var n, i;

        for (R(e[0], a), R(e[1], s), R(e[2], s), R(e[3], a), i = 255; i >= 0; --i) {
          Q(e, t, n = r[i / 8 | 0] >> (7 & i) & 1), X(t, e), X(e, e), Q(e, t, n);
        }
      }

      function re(e, r) {
        var n = [t(), t(), t(), t()];
        R(n[0], h), R(n[1], d), R(n[2], s), U(n[3], h, d), te(e, n, r);
      }

      function ne(e, r, i) {
        var o,
            a = new Uint8Array(64),
            s = [t(), t(), t(), t()];

        for (i || n(r, 32), $(a, r, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64, re(s, a), ee(e, s), o = 0; o < 32; o++) {
          r[o + 32] = e[o];
        }

        return 0;
      }

      var ie = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

      function oe(e, t) {
        var r, n, i, o;

        for (n = 63; n >= 32; --n) {
          for (r = 0, i = n - 32, o = n - 12; i < o; ++i) {
            t[i] += r - 16 * t[n] * ie[i - (n - 32)], r = Math.floor((t[i] + 128) / 256), t[i] -= 256 * r;
          }

          t[i] += r, t[n] = 0;
        }

        for (r = 0, i = 0; i < 32; i++) {
          t[i] += r - (t[31] >> 4) * ie[i], r = t[i] >> 8, t[i] &= 255;
        }

        for (i = 0; i < 32; i++) {
          t[i] -= r * ie[i];
        }

        for (n = 0; n < 32; n++) {
          t[n + 1] += t[n] >> 8, e[n] = 255 & t[n];
        }
      }

      function ae(e) {
        var t,
            r = new Float64Array(64);

        for (t = 0; t < 64; t++) {
          r[t] = e[t];
        }

        for (t = 0; t < 64; t++) {
          e[t] = 0;
        }

        oe(e, r);
      }

      function se(e, r, n, i) {
        var o,
            a,
            s = new Uint8Array(64),
            f = new Uint8Array(64),
            u = new Uint8Array(64),
            c = new Float64Array(64),
            h = [t(), t(), t(), t()];
        $(s, i, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64;
        var d = n + 64;

        for (o = 0; o < n; o++) {
          e[64 + o] = r[o];
        }

        for (o = 0; o < 32; o++) {
          e[32 + o] = s[32 + o];
        }

        for ($(u, e.subarray(32), n + 32), ae(u), re(h, u), ee(e, h), o = 32; o < 64; o++) {
          e[o] = i[o];
        }

        for ($(f, e, n + 64), ae(f), o = 0; o < 64; o++) {
          c[o] = 0;
        }

        for (o = 0; o < 32; o++) {
          c[o] = u[o];
        }

        for (o = 0; o < 32; o++) {
          for (a = 0; a < 32; a++) {
            c[o + a] += f[o] * s[a];
          }
        }

        return oe(e.subarray(32), c), d;
      }

      function fe(e, r, n, i) {
        var o,
            f = new Uint8Array(32),
            c = new Uint8Array(64),
            h = [t(), t(), t(), t()],
            d = [t(), t(), t(), t()];
        if (n < 64) return -1;
        if (function (e, r) {
          var n = t(),
              i = t(),
              o = t(),
              f = t(),
              c = t(),
              h = t(),
              d = t();
          return R(e[2], s), N(e[1], r), z(o, e[1]), U(f, o, u), D(o, o, e[2]), j(f, e[2], f), z(c, f), z(h, c), U(d, h, c), U(n, d, o), U(n, n, f), F(n, n), U(n, n, o), U(n, n, f), U(n, n, f), U(e[0], n, f), z(i, e[0]), U(i, i, f), C(i, o) && U(e[0], e[0], l), z(i, e[0]), U(i, i, f), C(i, o) ? -1 : (O(e[0]) === r[31] >> 7 && D(e[0], a, e[0]), U(e[3], e[0], e[1]), 0);
        }(d, i)) return -1;

        for (o = 0; o < n; o++) {
          e[o] = r[o];
        }

        for (o = 0; o < 32; o++) {
          e[o + 32] = i[o];
        }

        if ($(c, e, n), ae(c), te(h, d, c), re(d, r.subarray(32)), X(h, d), ee(f, h), n -= 64, g(r, 0, f, 0)) {
          for (o = 0; o < n; o++) {
            e[o] = 0;
          }

          return -1;
        }

        for (o = 0; o < n; o++) {
          e[o] = r[o + 64];
        }

        return n;
      }

      function ue(e, t) {
        if (32 !== e.length) throw new Error("bad key size");
        if (24 !== t.length) throw new Error("bad nonce size");
      }

      function ce() {
        for (var e = 0; e < arguments.length; e++) {
          if (!(arguments[e] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
        }
      }

      function he(e) {
        for (var t = 0; t < e.length; t++) {
          e[t] = 0;
        }
      }

      e.lowlevel = {
        crypto_core_hsalsa20: m,
        crypto_stream_xor: A,
        crypto_stream: S,
        crypto_stream_salsa20_xor: _,
        crypto_stream_salsa20: E,
        crypto_onetimeauth: k,
        crypto_onetimeauth_verify: M,
        crypto_verify_16: y,
        crypto_verify_32: g,
        crypto_secretbox: T,
        crypto_secretbox_open: I,
        crypto_scalarmult: K,
        crypto_scalarmult_base: H,
        crypto_box_beforenm: Y,
        crypto_box_afternm: W,
        crypto_box: function crypto_box(e, t, r, n, i, o) {
          var a = new Uint8Array(32);
          return Y(a, i, o), W(e, t, r, n, a);
        },
        crypto_box_open: function crypto_box_open(e, t, r, n, i, o) {
          var a = new Uint8Array(32);
          return Y(a, i, o), G(e, t, r, n, a);
        },
        crypto_box_keypair: V,
        crypto_hash: $,
        crypto_sign: se,
        crypto_sign_keypair: ne,
        crypto_sign_open: fe,
        crypto_secretbox_KEYBYTES: 32,
        crypto_secretbox_NONCEBYTES: 24,
        crypto_secretbox_ZEROBYTES: 32,
        crypto_secretbox_BOXZEROBYTES: 16,
        crypto_scalarmult_BYTES: 32,
        crypto_scalarmult_SCALARBYTES: 32,
        crypto_box_PUBLICKEYBYTES: 32,
        crypto_box_SECRETKEYBYTES: 32,
        crypto_box_BEFORENMBYTES: 32,
        crypto_box_NONCEBYTES: 24,
        crypto_box_ZEROBYTES: 32,
        crypto_box_BOXZEROBYTES: 16,
        crypto_sign_BYTES: 64,
        crypto_sign_PUBLICKEYBYTES: 32,
        crypto_sign_SECRETKEYBYTES: 64,
        crypto_sign_SEEDBYTES: 32,
        crypto_hash_BYTES: 64,
        gf: t,
        D: u,
        L: ie,
        pack25519: B,
        unpack25519: N,
        M: U,
        A: j,
        S: z,
        Z: D,
        pow2523: F,
        add: X,
        set25519: R,
        modL: oe,
        scalarmult: te,
        scalarbase: re
      }, e.randomBytes = function (e) {
        var t = new Uint8Array(e);
        return n(t, e), t;
      }, e.secretbox = function (e, t, r) {
        ce(e, t, r), ue(r, t);

        for (var n = new Uint8Array(32 + e.length), i = new Uint8Array(n.length), o = 0; o < e.length; o++) {
          n[o + 32] = e[o];
        }

        return T(i, n, n.length, t, r), i.subarray(16);
      }, e.secretbox.open = function (e, t, r) {
        ce(e, t, r), ue(r, t);

        for (var n = new Uint8Array(16 + e.length), i = new Uint8Array(n.length), o = 0; o < e.length; o++) {
          n[o + 16] = e[o];
        }

        return n.length < 32 || 0 !== I(i, n, n.length, t, r) ? null : i.subarray(32);
      }, e.secretbox.keyLength = 32, e.secretbox.nonceLength = 24, e.secretbox.overheadLength = 16, e.scalarMult = function (e, t) {
        if (ce(e, t), 32 !== e.length) throw new Error("bad n size");
        if (32 !== t.length) throw new Error("bad p size");
        var r = new Uint8Array(32);
        return K(r, e, t), r;
      }, e.scalarMult.base = function (e) {
        if (ce(e), 32 !== e.length) throw new Error("bad n size");
        var t = new Uint8Array(32);
        return H(t, e), t;
      }, e.scalarMult.scalarLength = 32, e.scalarMult.groupElementLength = 32, e.box = function (t, r, n, i) {
        var o = e.box.before(n, i);
        return e.secretbox(t, r, o);
      }, e.box.before = function (e, t) {
        ce(e, t), function (e, t) {
          if (32 !== e.length) throw new Error("bad public key size");
          if (32 !== t.length) throw new Error("bad secret key size");
        }(e, t);
        var r = new Uint8Array(32);
        return Y(r, e, t), r;
      }, e.box.after = e.secretbox, e.box.open = function (t, r, n, i) {
        var o = e.box.before(n, i);
        return e.secretbox.open(t, r, o);
      }, e.box.open.after = e.secretbox.open, e.box.keyPair = function () {
        var e = new Uint8Array(32),
            t = new Uint8Array(32);
        return V(e, t), {
          publicKey: e,
          secretKey: t
        };
      }, e.box.keyPair.fromSecretKey = function (e) {
        if (ce(e), 32 !== e.length) throw new Error("bad secret key size");
        var t = new Uint8Array(32);
        return H(t, e), {
          publicKey: t,
          secretKey: new Uint8Array(e)
        };
      }, e.box.publicKeyLength = 32, e.box.secretKeyLength = 32, e.box.sharedKeyLength = 32, e.box.nonceLength = 24, e.box.overheadLength = e.secretbox.overheadLength, e.sign = function (e, t) {
        if (ce(e, t), 64 !== t.length) throw new Error("bad secret key size");
        var r = new Uint8Array(64 + e.length);
        return se(r, e, e.length, t), r;
      }, e.sign.open = function (e, t) {
        if (ce(e, t), 32 !== t.length) throw new Error("bad public key size");
        var r = new Uint8Array(e.length),
            n = fe(r, e, e.length, t);
        if (n < 0) return null;

        for (var i = new Uint8Array(n), o = 0; o < i.length; o++) {
          i[o] = r[o];
        }

        return i;
      }, e.sign.detached = function (t, r) {
        for (var n = e.sign(t, r), i = new Uint8Array(64), o = 0; o < i.length; o++) {
          i[o] = n[o];
        }

        return i;
      }, e.sign.detached.verify = function (e, t, r) {
        if (ce(e, t, r), 64 !== t.length) throw new Error("bad signature size");
        if (32 !== r.length) throw new Error("bad public key size");
        var n,
            i = new Uint8Array(64 + e.length),
            o = new Uint8Array(64 + e.length);

        for (n = 0; n < 64; n++) {
          i[n] = t[n];
        }

        for (n = 0; n < e.length; n++) {
          i[n + 64] = e[n];
        }

        return fe(o, i, i.length, r) >= 0;
      }, e.sign.keyPair = function () {
        var e = new Uint8Array(32),
            t = new Uint8Array(64);
        return ne(e, t), {
          publicKey: e,
          secretKey: t
        };
      }, e.sign.keyPair.fromSecretKey = function (e) {
        if (ce(e), 64 !== e.length) throw new Error("bad secret key size");

        for (var t = new Uint8Array(32), r = 0; r < t.length; r++) {
          t[r] = e[32 + r];
        }

        return {
          publicKey: t,
          secretKey: new Uint8Array(e)
        };
      }, e.sign.keyPair.fromSeed = function (e) {
        if (ce(e), 32 !== e.length) throw new Error("bad seed size");

        for (var t = new Uint8Array(32), r = new Uint8Array(64), n = 0; n < 32; n++) {
          r[n] = e[n];
        }

        return ne(t, r, !0), {
          publicKey: t,
          secretKey: r
        };
      }, e.sign.publicKeyLength = 32, e.sign.secretKeyLength = 64, e.sign.seedLength = 32, e.sign.signatureLength = 64, e.hash = function (e) {
        ce(e);
        var t = new Uint8Array(64);
        return $(t, e, e.length), t;
      }, e.hash.hashLength = 64, e.verify = function (e, t) {
        return ce(e, t), 0 !== e.length && 0 !== t.length && e.length === t.length && 0 === b(e, 0, t, 0, e.length);
      }, e.setPRNG = function (e) {
        n = e;
      }, function () {
        var t = "undefined" != typeof self ? self.crypto || self.msCrypto : null;

        if (t && t.getRandomValues) {
          e.setPRNG(function (e, r) {
            var n,
                i = new Uint8Array(r);

            for (n = 0; n < r; n += 65536) {
              t.getRandomValues(i.subarray(n, n + Math.min(r - n, 65536)));
            }

            for (n = 0; n < r; n++) {
              e[n] = i[n];
            }

            he(i);
          });
        } else (t = r(248)) && t.randomBytes && e.setPRNG(function (e, r) {
          var n,
              i = t.randomBytes(r);

          for (n = 0; n < r; n++) {
            e[n] = i[n];
          }

          he(i);
        });
      }();
    }(e.exports ? e.exports : self.nacl = self.nacl || {});
  }, function (e, t) {}, function (e, t, r) {
    (function (t) {
      !function (t, r) {
        "use strict";

        e.exports ? e.exports = r() : (t.nacl || (t.nacl = {}), t.nacl.util = r());
      }(this, function () {
        "use strict";

        var e = {};

        function r(e) {
          if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)) throw new TypeError("invalid encoding");
        }

        return e.decodeUTF8 = function (e) {
          if ("string" != typeof e) throw new TypeError("expected string");
          var t,
              r = unescape(encodeURIComponent(e)),
              n = new Uint8Array(r.length);

          for (t = 0; t < r.length; t++) {
            n[t] = r.charCodeAt(t);
          }

          return n;
        }, e.encodeUTF8 = function (e) {
          var t,
              r = [];

          for (t = 0; t < e.length; t++) {
            r.push(String.fromCharCode(e[t]));
          }

          return decodeURIComponent(escape(r.join("")));
        }, "undefined" == typeof atob ? void 0 !== t.from ? (e.encodeBase64 = function (e) {
          return t.from(e).toString("base64");
        }, e.decodeBase64 = function (e) {
          return r(e), new Uint8Array(Array.prototype.slice.call(t.from(e, "base64"), 0));
        }) : (e.encodeBase64 = function (e) {
          return new t(e).toString("base64");
        }, e.decodeBase64 = function (e) {
          return r(e), new Uint8Array(Array.prototype.slice.call(new t(e, "base64"), 0));
        }) : (e.encodeBase64 = function (e) {
          var t,
              r = [],
              n = e.length;

          for (t = 0; t < n; t++) {
            r.push(String.fromCharCode(e[t]));
          }

          return btoa(r.join(""));
        }, e.decodeBase64 = function (e) {
          r(e);
          var t,
              n = atob(e),
              i = new Uint8Array(n.length);

          for (t = 0; t < n.length; t++) {
            i[t] = n.charCodeAt(t);
          }

          return i;
        }), e;
      });
    }).call(this, r(1).Buffer);
  }, function (e, t, r) {
    (function (t) {
      !function (r) {
        "use strict";

        var n = function n(e) {
          setTimeout(e, 0);
        };

        void 0 !== t && t && "function" == typeof t.nextTick && (n = t.nextTick), e.exports = function (e) {
          var t = {
            capacity: e || 1,
            current: 0,
            queue: [],
            firstHere: !1,
            take: function take() {
              if (!1 === t.firstHere) {
                t.current++, t.firstHere = !0;
                var e = 1;
              } else e = 0;

              var r = {
                n: 1
              };
              "function" == typeof arguments[0] ? r.task = arguments[0] : r.n = arguments[0], arguments.length >= 2 && ("function" == typeof arguments[1] ? r.task = arguments[1] : r.n = arguments[1]);
              var n = r.task;
              if (r.task = function () {
                n(t.leave);
              }, t.current + r.n - e > t.capacity) return 1 === e && (t.current--, t.firstHere = !1), t.queue.push(r);
              t.current += r.n - e, r.task(t.leave), 1 === e && (t.firstHere = !1);
            },
            leave: function leave(e) {
              if (e = e || 1, t.current -= e, t.queue.length) {
                var r = t.queue[0];
                r.n + t.current > t.capacity || (t.queue.shift(), t.current += r.n, n(r.task));
              } else if (t.current < 0) throw new Error("leave called too many times.");
            },
            available: function available(e) {
              return e = e || 1, t.current + e <= t.capacity;
            }
          };
          return t;
        };
      }();
    }).call(this, r(3));
  }, function (e, t, r) {
    "use strict";

    var n = r(46);

    e.exports = function (e, t, r) {
      e.sendAsync(n({
        method: "eth_estimateGas",
        params: [t]
      }), function (e, t) {
        if (e) return "no contract code at given address" === e.message ? r(null, "0xcf08") : r(e);
        r(null, t.result);
      });
    };
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      var n = r(14),
          i = r(253),
          o = n.BN,
          a = new o("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
          s = function () {
        function e(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), r = r || {};
          var i = [{
            name: "nonce",
            length: 32,
            allowLess: !0,
            default: new t([])
          }, {
            name: "gasPrice",
            length: 32,
            allowLess: !0,
            default: new t([])
          }, {
            name: "gasLimit",
            alias: "gas",
            length: 32,
            allowLess: !0,
            default: new t([])
          }, {
            name: "to",
            allowZero: !0,
            length: 20,
            default: new t([])
          }, {
            name: "value",
            length: 32,
            allowLess: !0,
            default: new t([])
          }, {
            name: "data",
            alias: "input",
            allowZero: !0,
            default: new t([])
          }, {
            name: "v",
            allowZero: !0,
            default: new t([28])
          }, {
            name: "r",
            length: 32,
            allowZero: !0,
            allowLess: !0,
            default: new t([])
          }, {
            name: "s",
            length: 32,
            allowZero: !0,
            allowLess: !0,
            default: new t([])
          }];
          n.defineProperties(this, i, r), Object.defineProperty(this, "from", {
            enumerable: !0,
            configurable: !0,
            get: this.getSenderAddress.bind(this)
          });
          var o = n.bufferToInt(this.v),
              a = Math.floor((o - 35) / 2);
          a < 0 && (a = 0), this._chainId = a || r.chainId || 0, this._homestead = !0;
        }

        return e.prototype.toCreationAddress = function () {
          return "" === this.to.toString("hex");
        }, e.prototype.hash = function (e) {
          void 0 === e && (e = !0);
          var t = void 0;
          if (e) t = this.raw;else if (this._chainId > 0) {
            var r = this.raw.slice();
            this.v = this._chainId, this.r = 0, this.s = 0, t = this.raw, this.raw = r;
          } else t = this.raw.slice(0, 6);
          return n.rlphash(t);
        }, e.prototype.getChainId = function () {
          return this._chainId;
        }, e.prototype.getSenderAddress = function () {
          if (this._from) return this._from;
          var e = this.getSenderPublicKey();
          return this._from = n.publicToAddress(e), this._from;
        }, e.prototype.getSenderPublicKey = function () {
          if (!(this._senderPubKey && this._senderPubKey.length || this.verifySignature())) throw new Error("Invalid Signature");
          return this._senderPubKey;
        }, e.prototype.verifySignature = function () {
          var e = this.hash(!1);
          if (this._homestead && 1 === new o(this.s).cmp(a)) return !1;

          try {
            var t = n.bufferToInt(this.v);
            this._chainId > 0 && (t -= 2 * this._chainId + 8), this._senderPubKey = n.ecrecover(e, t, this.r, this.s);
          } catch (e) {
            return !1;
          }

          return !!this._senderPubKey;
        }, e.prototype.sign = function (e) {
          var t = this.hash(!1),
              r = n.ecsign(t, e);
          this._chainId > 0 && (r.v += 2 * this._chainId + 8), Object.assign(this, r);
        }, e.prototype.getDataFee = function () {
          for (var e = this.raw[5], t = new o(0), r = 0; r < e.length; r++) {
            0 === e[r] ? t.iaddn(i.txDataZeroGas.v) : t.iaddn(i.txDataNonZeroGas.v);
          }

          return t;
        }, e.prototype.getBaseFee = function () {
          var e = this.getDataFee().iaddn(i.txGas.v);
          return this._homestead && this.toCreationAddress() && e.iaddn(i.txCreation.v), e;
        }, e.prototype.getUpfrontCost = function () {
          return new o(this.gasLimit).imul(new o(this.gasPrice)).iadd(new o(this.value));
        }, e.prototype.validate = function (e) {
          var t = [];
          return this.verifySignature() || t.push("Invalid Signature"), this.getBaseFee().cmp(new o(this.gasLimit)) > 0 && t.push(["gas limit is too low. Need at least " + this.getBaseFee()]), void 0 === e || !1 === e ? 0 === t.length : t.join(" ");
        }, e;
      }();

      e.exports = s;
    }).call(this, r(1).Buffer);
  }, function (e) {
    e.exports = {
      genesisGasLimit: {
        v: 5e3,
        d: "Gas limit of the Genesis block."
      },
      genesisDifficulty: {
        v: 17179869184,
        d: "Difficulty of the Genesis block."
      },
      genesisNonce: {
        v: "0x0000000000000042",
        d: "the geneis nonce"
      },
      genesisExtraData: {
        v: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa",
        d: "extra data "
      },
      genesisHash: {
        v: "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
        d: "genesis hash"
      },
      genesisStateRoot: {
        v: "0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544",
        d: "the genesis state root"
      },
      minGasLimit: {
        v: 5e3,
        d: "Minimum the gas limit may ever be."
      },
      gasLimitBoundDivisor: {
        v: 1024,
        d: "The bound divisor of the gas limit, used in update calculations."
      },
      minimumDifficulty: {
        v: 131072,
        d: "The minimum that the difficulty may ever be."
      },
      difficultyBoundDivisor: {
        v: 2048,
        d: "The bound divisor of the difficulty, used in the update calculations."
      },
      durationLimit: {
        v: 13,
        d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."
      },
      maximumExtraDataSize: {
        v: 32,
        d: "Maximum size extra data may be after Genesis."
      },
      epochDuration: {
        v: 3e4,
        d: "Duration between proof-of-work epochs."
      },
      stackLimit: {
        v: 1024,
        d: "Maximum size of VM stack allowed."
      },
      callCreateDepth: {
        v: 1024,
        d: "Maximum depth of call/create stack."
      },
      tierStepGas: {
        v: [0, 2, 3, 5, 8, 10, 20],
        d: "Once per operation, for a selection of them."
      },
      expGas: {
        v: 10,
        d: "Once per EXP instuction."
      },
      expByteGas: {
        v: 10,
        d: "Times ceil(log256(exponent)) for the EXP instruction."
      },
      sha3Gas: {
        v: 30,
        d: "Once per SHA3 operation."
      },
      sha3WordGas: {
        v: 6,
        d: "Once per word of the SHA3 operation's data."
      },
      sloadGas: {
        v: 50,
        d: "Once per SLOAD operation."
      },
      sstoreSetGas: {
        v: 2e4,
        d: "Once per SSTORE operation if the zeroness changes from zero."
      },
      sstoreResetGas: {
        v: 5e3,
        d: "Once per SSTORE operation if the zeroness does not change from zero."
      },
      sstoreRefundGas: {
        v: 15e3,
        d: "Once per SSTORE operation if the zeroness changes to zero."
      },
      jumpdestGas: {
        v: 1,
        d: "Refunded gas, once per SSTORE operation if the zeroness changes to zero."
      },
      logGas: {
        v: 375,
        d: "Per LOG* operation."
      },
      logDataGas: {
        v: 8,
        d: "Per byte in a LOG* operation's data."
      },
      logTopicGas: {
        v: 375,
        d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."
      },
      createGas: {
        v: 32e3,
        d: "Once per CREATE operation & contract-creation transaction."
      },
      callGas: {
        v: 40,
        d: "Once per CALL operation & message call transaction."
      },
      callStipend: {
        v: 2300,
        d: "Free gas given at beginning of call."
      },
      callValueTransferGas: {
        v: 9e3,
        d: "Paid for CALL when the value transfor is non-zero."
      },
      callNewAccountGas: {
        v: 25e3,
        d: "Paid for CALL when the destination address didn't exist prior."
      },
      suicideRefundGas: {
        v: 24e3,
        d: "Refunded following a suicide operation."
      },
      memoryGas: {
        v: 3,
        d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."
      },
      quadCoeffDiv: {
        v: 512,
        d: "Divisor for the quadratic particle of the memory cost equation."
      },
      createDataGas: {
        v: 200,
        d: ""
      },
      txGas: {
        v: 21e3,
        d: "Per transaction. NOTE: Not payable on data of calls between transactions."
      },
      txCreation: {
        v: 32e3,
        d: "the cost of creating a contract via tx"
      },
      txDataZeroGas: {
        v: 4,
        d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."
      },
      txDataNonZeroGas: {
        v: 68,
        d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."
      },
      copyGas: {
        v: 3,
        d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."
      },
      ecrecoverGas: {
        v: 3e3,
        d: ""
      },
      sha256Gas: {
        v: 60,
        d: ""
      },
      sha256WordGas: {
        v: 12,
        d: ""
      },
      ripemd160Gas: {
        v: 600,
        d: ""
      },
      ripemd160WordGas: {
        v: 120,
        d: ""
      },
      identityGas: {
        v: 15,
        d: ""
      },
      identityWordGas: {
        v: 3,
        d: ""
      },
      minerReward: {
        v: "5000000000000000000",
        d: "the amount a miner get rewarded for mining a block"
      },
      ommerReward: {
        v: "625000000000000000",
        d: "The amount of wei a miner of an uncle block gets for being inculded in the blockchain"
      },
      niblingReward: {
        v: "156250000000000000",
        d: "the amount a miner gets for inculding a uncle"
      },
      homeSteadForkNumber: {
        v: 115e4,
        d: "the block that the Homestead fork started at"
      },
      homesteadRepriceForkNumber: {
        v: 2463e3,
        d: "the block that the Homestead Reprice (EIP150) fork started at"
      },
      timebombPeriod: {
        v: 1e5,
        d: "Exponential difficulty timebomb period"
      },
      freeBlockPeriod: {
        v: 2
      }
    };
  }, function (e, t, r) {
    var n = r(41),
        i = r(95),
        o = r(48),
        a = r(94),
        _r18 = r(23),
        s = _r18.unsafeRandomBytes,
        f = _r18.incrementHexInt,
        u = r(50);

    function c(e) {
      return {
        hash: e.hash,
        parentHash: e.parentHash,
        sha3Uncles: e.sha3Uncles,
        miner: e.miner,
        stateRoot: e.stateRoot,
        transactionsRoot: e.transactionsRoot,
        receiptsRoot: e.receiptsRoot,
        logsBloom: e.logsBloom,
        difficulty: e.difficulty,
        number: e.number,
        gasLimit: e.gasLimit,
        gasUsed: e.gasUsed,
        nonce: e.nonce,
        mixHash: e.mixHash,
        timestamp: e.timestamp,
        extraData: e.extraData
      };
    }

    e.exports = function (_ref24) {
      var e = _ref24.blockTracker,
          t = _ref24.provider;
      var r = {},
          h = a({
        blockTracker: e,
        provider: t
      });
      var d = !1;
      var l = new n(),
          p = i({
        eth_subscribe: o( /*#__PURE__*/function () {
          var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee38(n, i) {
            var o, a, l, _r19, _i3;

            return _regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    if (!d) {
                      _context38.next = 2;
                      break;
                    }

                    throw new Error("SubscriptionManager - attempting to use after destroying");

                  case 2:
                    o = n.params[0], a = s(16);
                    _context38.t0 = o;
                    _context38.next = _context38.t0 === "newHeads" ? 6 : _context38.t0 === "logs" ? 8 : 14;
                    break;

                  case 6:
                    l = function (_ref26) {
                      var r = _ref26.subId;
                      var n = {
                        type: o,
                        destroy: function () {
                          var _destroy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee35() {
                            return _regeneratorRuntime.wrap(function _callee35$(_context35) {
                              while (1) {
                                switch (_context35.prev = _context35.next) {
                                  case 0:
                                    e.removeListener("sync", n.update);

                                  case 1:
                                  case "end":
                                    return _context35.stop();
                                }
                              }
                            }, _callee35);
                          }));

                          function destroy() {
                            return _destroy.apply(this, arguments);
                          }

                          return destroy;
                        }(),
                        update: function () {
                          var _update6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee36(_ref27) {
                            var e, n, i, o;
                            return _regeneratorRuntime.wrap(function _callee36$(_context36) {
                              while (1) {
                                switch (_context36.prev = _context36.next) {
                                  case 0:
                                    e = _ref27.oldBlock, n = _ref27.newBlock;
                                    i = n, o = f(e);
                                    _context36.next = 4;
                                    return u({
                                      provider: t,
                                      fromBlock: o,
                                      toBlock: i
                                    });

                                  case 4:
                                    _context36.sent.map(c).forEach(function (e) {
                                      b(r, e);
                                    });

                                  case 5:
                                  case "end":
                                    return _context36.stop();
                                }
                              }
                            }, _callee36);
                          }));

                          function update(_x33) {
                            return _update6.apply(this, arguments);
                          }

                          return update;
                        }()
                      };
                      return e.on("sync", n.update), n;
                    }({
                      subId: a
                    });

                    return _context38.abrupt("break", 15);

                  case 8:
                    _r19 = n.params[1];
                    _context38.next = 11;
                    return h.newLogFilter(_r19);

                  case 11:
                    _i3 = _context38.sent;

                    l = function (_ref28) {
                      var e = _ref28.subId,
                          t = _ref28.filter;
                      t.on("update", function (t) {
                        return b(e, t);
                      });
                      return {
                        type: o,
                        destroy: function () {
                          var _destroy2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee37() {
                            return _regeneratorRuntime.wrap(function _callee37$(_context37) {
                              while (1) {
                                switch (_context37.prev = _context37.next) {
                                  case 0:
                                    _context37.next = 2;
                                    return h.uninstallFilter(t.idHex);

                                  case 2:
                                    return _context37.abrupt("return", _context37.sent);

                                  case 3:
                                  case "end":
                                    return _context37.stop();
                                }
                              }
                            }, _callee37);
                          }));

                          function destroy() {
                            return _destroy2.apply(this, arguments);
                          }

                          return destroy;
                        }()
                      };
                    }({
                      subId: a,
                      filter: _i3
                    });

                    return _context38.abrupt("break", 15);

                  case 14:
                    throw new Error("SubscriptionManager - unsupported subscription type \"".concat(o, "\""));

                  case 15:
                    return _context38.abrupt("return", (r[a] = l, void (i.result = a)));

                  case 16:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38);
          }));

          return function (_x31, _x32) {
            return _ref25.apply(this, arguments);
          };
        }()),
        eth_unsubscribe: o( /*#__PURE__*/function () {
          var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee39(e, t) {
            var n, i;
            return _regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    if (!d) {
                      _context39.next = 2;
                      break;
                    }

                    throw new Error("SubscriptionManager - attempting to use after destroying");

                  case 2:
                    n = e.params[0], i = r[n];

                    if (i) {
                      _context39.next = 5;
                      break;
                    }

                    return _context39.abrupt("return", void (t.result = !1));

                  case 5:
                    delete r[n];
                    _context39.next = 8;
                    return i.destroy();

                  case 8:
                    t.result = !0;

                  case 9:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39);
          }));

          return function (_x34, _x35) {
            return _ref29.apply(this, arguments);
          };
        }())
      });
      return p.destroy = function () {
        l.removeAllListeners();

        for (var _e15 in r) {
          r[_e15].destroy(), delete r[_e15];
        }

        d = !0;
      }, {
        events: l,
        middleware: p
      };

      function b(e, t) {
        l.emit("notification", {
          jsonrpc: "2.0",
          method: "eth_subscription",
          params: {
            subscription: e,
            result: t
          }
        });
      }
    };
  }, function (e, t) {
    e.exports = {
      Blockchain: /*#__PURE__*/function () {
        "use strict";

        function Blockchain(e, t) {
          _classCallCheck(this, Blockchain);

          this.name = e, this.netID = t;
        }

        _createClass(Blockchain, [{
          key: "toJSON",
          value: function toJSON() {
            return JSON.parse('{ "name":"' + this.name + '", "netID":"' + this.netID + '"}');
          }
        }]);

        return Blockchain;
      }()
    };
  }, function (e, t, r) {
    var n = r(51),
        i = r(103).Node,
        o = r(53);
    e.exports = {
      Dispatch: /*#__PURE__*/function () {
        "use strict";

        function Dispatch(e) {
          _classCallCheck(this, Dispatch);

          this.configuration = e, this.axiosInstance = n.create({
            baseURL: o.dispatchNodeURL,
            path: o.dispatchPath,
            timeout: this.configuration.requestTimeOut,
            headers: {
              "Content-Type": "application/json"
            }
          });
        }

        _createClass(Dispatch, [{
          key: "blockchainsJSON",
          value: function blockchainsJSON() {
            var e = [];
            return this.configuration.blockchains.forEach(function (t) {
              e.push(t);
            }), e;
          }
        }, {
          key: "retrieveServiceNodes",
          value: function () {
            var _retrieveServiceNodes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee40(e) {
              var t, r;
              return _regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.prev = 0;
                      _context40.next = 3;
                      return this.axiosInstance.post(o.dispatchPath, {
                        DevID: this.configuration.devID,
                        Blockchains: this.blockchainsJSON()
                      });

                    case 3:
                      _context40.t2 = t = _context40.sent;
                      _context40.t1 = null != _context40.t2;

                      if (!_context40.t1) {
                        _context40.next = 7;
                        break;
                      }

                      _context40.t1 = 200 == t.status;

                    case 7:
                      _context40.t0 = _context40.t1;

                      if (!_context40.t0) {
                        _context40.next = 10;
                        break;
                      }

                      _context40.t0 = null != t.data;

                    case 10:
                      if (!_context40.t0) {
                        _context40.next = 13;
                        break;
                      }

                      r = this.parseDispatchResponse(t.data);
                      return _context40.abrupt("return", e ? void e(r, null) : r);

                    case 13:
                      return _context40.abrupt("return", e ? void e(null, new Error("Failed to retrieve service nodes with error: " + t.data)) : new Error("Failed to retrieve service nodes with error: " + t.data));

                    case 16:
                      _context40.prev = 16;
                      _context40.t3 = _context40["catch"](0);
                      return _context40.abrupt("return", e ? void e(null, new Error("Failed to retrieve service nodes with error: " + _context40.t3)) : new Error("Failed to retrieve service nodes with error: " + _context40.t3));

                    case 19:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this, [[0, 16]]);
            }));

            function retrieveServiceNodes(_x36) {
              return _retrieveServiceNodes.apply(this, arguments);
            }

            return retrieveServiceNodes;
          }()
        }, {
          key: "parseDispatchResponse",
          value: function parseDispatchResponse(e) {
            try {
              var t = [];
              if (Array.isArray(e)) e.forEach(function (e) {
                var r = e.name,
                    n = e.netid;
                e.ips && e.ips.forEach(function (e) {
                  var o = new i(r, n, e);
                  t.push(o);
                });
              });else {
                var r = e.name,
                    n = e.netid;
                e.ips && e.ips.forEach(function (e) {
                  var o = new i(r, n, e);
                  t.push(o);
                });
              }
              return t;
            } catch (e) {
              return new Error("Failed to parsed service nodes with error: " + e);
            }
          }
        }]);

        return Dispatch;
      }()
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
        i = r(98),
        o = r(259),
        a = r(52);

    function s(e) {
      var t = new o(e),
          r = i(o.prototype.request, t);
      return n.extend(r, o.prototype, t), n.extend(r, t), r;
    }

    var f = s(a);
    f.Axios = o, f.create = function (e) {
      return s(n.merge(a, e));
    }, f.Cancel = r(102), f.CancelToken = r(272), f.isCancel = r(101), f.all = function (e) {
      return Promise.all(e);
    }, f.spread = r(273), e.exports = f, e.exports.default = f;
  }, function (e, t) {
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function (e) {
      return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(52),
        i = r(7),
        o = r(267),
        a = r(268);

    function s(e) {
      this.defaults = e, this.interceptors = {
        request: new o(),
        response: new o()
      };
    }

    s.prototype.request = function (e) {
      "string" == typeof e && (e = i.merge({
        url: arguments[0]
      }, arguments[1])), (e = i.merge(n, {
        method: "get"
      }, this.defaults, e)).method = e.method.toLowerCase();
      var t = [a, void 0],
          r = Promise.resolve(e);

      for (this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected);
      }), this.interceptors.response.forEach(function (e) {
        t.push(e.fulfilled, e.rejected);
      }); t.length;) {
        r = r.then(t.shift(), t.shift());
      }

      return r;
    }, i.forEach(["delete", "get", "head", "options"], function (e) {
      s.prototype[e] = function (t, r) {
        return this.request(i.merge(r || {}, {
          method: e,
          url: t
        }));
      };
    }), i.forEach(["post", "put", "patch"], function (e) {
      s.prototype[e] = function (t, r, n) {
        return this.request(i.merge(n || {}, {
          method: e,
          url: t,
          data: r
        }));
      };
    }), e.exports = s;
  }, function (e, t, r) {
    "use strict";

    var n = r(7);

    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]);
      });
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(100);

    e.exports = function (e, t, r) {
      var i = r.config.validateStatus;
      r.status && i && !i(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r);
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t, r, n, i) {
      return e.config = t, r && (e.code = r), e.request = n, e.response = i, e;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7);

    function i(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }

    e.exports = function (e, t, r) {
      if (!t) return e;
      var o;
      if (r) o = r(t);else if (n.isURLSearchParams(t)) o = t.toString();else {
        var a = [];
        n.forEach(t, function (e, t) {
          null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) {
            n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), a.push(i(t) + "=" + i(e));
          }));
        }), o = a.join("&");
      }
      return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
        i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

    e.exports = function (e) {
      var t,
          r,
          o,
          a = {};
      return e ? (n.forEach(e.split("\n"), function (e) {
        if (o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), r = n.trim(e.substr(o + 1)), t) {
          if (a[t] && i.indexOf(t) >= 0) return;
          a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([r]) : a[t] ? a[t] + ", " + r : r;
        }
      }), a) : a;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7);
    e.exports = n.isStandardBrowserEnv() ? function () {
      var e,
          t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement("a");

      function i(e) {
        var n = e;
        return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
          href: r.href,
          protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
          host: r.host,
          search: r.search ? r.search.replace(/^\?/, "") : "",
          hash: r.hash ? r.hash.replace(/^#/, "") : "",
          hostname: r.hostname,
          port: r.port,
          pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
        };
      }

      return e = i(window.location.href), function (t) {
        var r = n.isString(t) ? i(t) : t;
        return r.protocol === e.protocol && r.host === e.host;
      };
    }() : function () {
      return !0;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7);
    e.exports = n.isStandardBrowserEnv() ? {
      write: function write(e, t, r, i, o, a) {
        var s = [];
        s.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(i) && s.push("path=" + i), n.isString(o) && s.push("domain=" + o), !0 === a && s.push("secure"), document.cookie = s.join("; ");
      },
      read: function read(e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function remove(e) {
        this.write(e, "", Date.now() - 864e5);
      }
    } : {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7);

    function i() {
      this.handlers = [];
    }

    i.prototype.use = function (e, t) {
      return this.handlers.push({
        fulfilled: e,
        rejected: t
      }), this.handlers.length - 1;
    }, i.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }, i.prototype.forEach = function (e) {
      n.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }, e.exports = i;
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
        i = r(269),
        o = r(101),
        a = r(52),
        s = r(270),
        f = r(271);

    function u(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }

    e.exports = function (e) {
      return u(e), e.baseURL && !s(e.url) && (e.url = f(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
        delete e.headers[t];
      }), (e.adapter || a.adapter)(e).then(function (t) {
        return u(e), t.data = i(t.data, t.headers, e.transformResponse), t;
      }, function (t) {
        return o(t) || (u(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
      });
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7);

    e.exports = function (e, t, r) {
      return n.forEach(r, function (r) {
        e = r(e, t);
      }), e;
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(102);

    function i(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || (r.reason = new n(e), t(r.reason));
      });
    }

    i.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }, i.source = function () {
      var e;
      return {
        token: new i(function (t) {
          e = t;
        }),
        cancel: e
      };
    }, e.exports = i;
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }, function (e, t) {
    e.exports = {
      Relay: /*#__PURE__*/function () {
        "use strict";

        function Relay(e, t, r, n) {
          _classCallCheck(this, Relay);

          this.blockchain = e, this.netID = t, this.data = r, this.configuration = n;
        }

        _createClass(Relay, [{
          key: "toJSON",
          value: function toJSON() {
            return {
              Blockchain: this.blockchain,
              NetID: this.netID,
              Data: this.data,
              DevID: this.configuration.devID
            };
          }
        }, {
          key: "isValid",
          value: function isValid() {
            for (var e in this) {
              if (!this.hasOwnProperty(e) || "" == this[e]) return !1;
            }

            return !0;
          }
        }]);

        return Relay;
      }()
    };
  }, function (e, t, r) {
    var n = r(51),
        i = r(53);
    e.exports = {
      Report: /*#__PURE__*/function () {
        "use strict";

        function Report(e, t, r) {
          _classCallCheck(this, Report);

          this.ip = e, this.message = t, this.configuration = r;
        }

        _createClass(Report, [{
          key: "toJSON",
          value: function toJSON() {
            return {
              IP: this.ip,
              Message: this.message
            };
          }
        }, {
          key: "isValid",
          value: function isValid() {
            for (var e in this) {
              if (!this.hasOwnProperty(e) || "" == this[e]) return !1;
            }

            return !0;
          }
        }, {
          key: "send",
          value: function () {
            var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee41(e) {
              var t, r;
              return _regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      t = n.create({
                        baseURL: i.dispatchNodeURL,
                        timeout: this.configuration.requestTimeOut,
                        headers: {
                          "Content-Type": "application/json"
                        }
                      });
                      _context41.next = 3;
                      return t.post(i.reportPath, this.toJSON());

                    case 3:
                      r = _context41.sent;
                      return _context41.abrupt("return", 200 == r.status && null != r.data ? e ? void e(null, r.data) : r.data : e ? void e(new Error("Failed to send report with error: " + r.data)) : new Error("Failed to send report with error: " + r.data));

                    case 5:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));

            function send(_x37) {
              return _send.apply(this, arguments);
            }

            return send;
          }()
        }]);

        return Report;
      }()
    };
  }, function (e, t) {
    e.exports = {
      Wallet: function Wallet(e, t, r, n, i) {
        "use strict";

        _classCallCheck(this, Wallet);

        this.address = e, this.privateKey = t, this.network = r, this.networkID = n, this.data = i;
      }
    };
  }, function (e, t, r) {
    var n = r(97),
        i = n.Blockchain,
        o = n.Dispatch,
        a = n.Relay,
        s = n.Report;

    var f = /*#__PURE__*/function () {
      "use strict";

      function f(e, t, r, n) {
        _classCallCheck(this, f);

        this.devID = e, this.blockchains = t, this.maxNodes = r || 5, this.nodes = [], this.requestTimeOut = n || 1e4, this.dispatch = null;
      }

      _createClass(f, [{
        key: "nodesIsEmpty",
        value: function nodesIsEmpty() {
          return null == this.nodes || 0 == this.nodes.length;
        }
      }]);

      return f;
    }();

    e.exports = /*#__PURE__*/function () {
      "use strict";

      function _class9(e) {
        _classCallCheck(this, _class9);

        var t = [];
        if (null == e.devID || null == e.networkName || null == e.netIDs) return new Error("Invalid number of arguments");
        if (Array.isArray(e.netIDs)) e.netIDs.forEach(function (r) {
          var n = new i(e.networkName, r);
          t.push(n.toJSON());
        });else {
          var r = new i(e.networkName, e.netIDs);
          t.push(r.toJSON());
        }
        this.configuration = new f(e.devID, t, e.maxNodes || 5, e.requestTimeOut || 1e4);
      }

      _createClass(_class9, [{
        key: "createRelay",
        value: function createRelay(e, t, r) {
          return new a(e, t, "string" == typeof r ? r : JSON.stringify(r), this.configuration);
        }
      }, {
        key: "createReport",
        value: function createReport(e, t) {
          return new s(e, t, this.configuration);
        }
      }, {
        key: "getDispatch",
        value: function getDispatch() {
          return null == this.dispatch && (this.dispatch = new o(this.configuration)), this.dispatch;
        }
      }, {
        key: "getNode",
        value: function () {
          var _getNode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee42(e, t) {
            var r, n;
            return _regeneratorRuntime.wrap(function _callee42$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    _context42.prev = 0;
                    r = [];

                    if (!this.configuration.nodesIsEmpty()) {
                      _context42.next = 9;
                      break;
                    }

                    _context42.next = 5;
                    return this.retrieveNodes();

                  case 5:
                    n = _context42.sent;

                    if (!(n instanceof Error == 1)) {
                      _context42.next = 8;
                      break;
                    }

                    throw n;

                  case 8:
                    this.configuration.nodes = n;

                  case 9:
                    return _context42.abrupt("return", (this.configuration.nodes.forEach(function (n) {
                      n.isEqual(e, t) && r.push(n);
                    }), r.length <= 0 ? null : r[Math.floor(Math.random() * r.length)]));

                  case 12:
                    _context42.prev = 12;
                    _context42.t0 = _context42["catch"](0);
                    return _context42.abrupt("return", null);

                  case 15:
                  case "end":
                    return _context42.stop();
                }
              }
            }, _callee42, this, [[0, 12]]);
          }));

          function getNode(_x38, _x39) {
            return _getNode.apply(this, arguments);
          }

          return getNode;
        }()
      }, {
        key: "sendReport",
        value: function () {
          var _sendReport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee43(e, t) {
            var r;
            return _regeneratorRuntime.wrap(function _callee43$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    _context43.prev = 0;

                    if (!(null == e)) {
                      _context43.next = 3;
                      break;
                    }

                    throw new Error("Report is null");

                  case 3:
                    if (e.isValid()) {
                      _context43.next = 5;
                      break;
                    }

                    throw new Error("One or more Report properties are empty.");

                  case 5:
                    _context43.next = 7;
                    return e.send();

                  case 7:
                    r = _context43.sent;
                    return _context43.abrupt("return", r instanceof Error == 0 ? t ? void t(null, r) : r : t ? void t(r) : r);

                  case 11:
                    _context43.prev = 11;
                    _context43.t0 = _context43["catch"](0);
                    return _context43.abrupt("return", t ? void t(_context43.t0) : _context43.t0);

                  case 14:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee43, null, [[0, 11]]);
          }));

          function sendReport(_x40, _x41) {
            return _sendReport.apply(this, arguments);
          }

          return sendReport;
        }()
      }, {
        key: "sendRelay",
        value: function () {
          var _sendRelay2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee44(e, t) {
            var r, n;
            return _regeneratorRuntime.wrap(function _callee44$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    _context44.prev = 0;

                    if (!(null == e || null == e.data)) {
                      _context44.next = 3;
                      break;
                    }

                    return _context44.abrupt("return", t ? void t(new Error("Relay is null or data field is missing")) : new Error("Relay is null or data field is missing"));

                  case 3:
                    if (e.isValid()) {
                      _context44.next = 5;
                      break;
                    }

                    return _context44.abrupt("return", t ? void t(new Error("Relay is missing a property, please verify all properties.")) : new Error("Relay is missing a property, please verify all properties."));

                  case 5:
                    _context44.next = 7;
                    return this.getNode(e.netID, e.blockchain);

                  case 7:
                    r = _context44.sent;

                    if (!(null == r)) {
                      _context44.next = 10;
                      break;
                    }

                    return _context44.abrupt("return", t ? void t(new Error("Node is empty.")) : new Error("Node is empty."));

                  case 10:
                    _context44.next = 12;
                    return r.sendRelay(e);

                  case 12:
                    n = _context44.sent;
                    return _context44.abrupt("return", n instanceof Error == 0 ? t ? void t(null, n) : n : t ? void t(n) : n);

                  case 16:
                    _context44.prev = 16;
                    _context44.t0 = _context44["catch"](0);
                    return _context44.abrupt("return", t ? void t(new Error("Failed to send relay with error: " + _context44.t0)) : new Error("Failed to send relay with error: " + _context44.t0));

                  case 19:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee44, this, [[0, 16]]);
          }));

          function sendRelay(_x42, _x43) {
            return _sendRelay2.apply(this, arguments);
          }

          return sendRelay;
        }()
      }, {
        key: "retrieveNodes",
        value: function () {
          var _retrieveNodes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee45(e) {
            var t, r;
            return _regeneratorRuntime.wrap(function _callee45$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    _context45.prev = 0;
                    t = this.getDispatch();
                    _context45.next = 4;
                    return t.retrieveServiceNodes();

                  case 4:
                    r = _context45.sent;
                    return _context45.abrupt("return", r instanceof Error == 0 && 0 != r.length ? (this.configuration.nodes = r, e ? void e(null, r) : r) : e ? void e(new Error("Failed to retrieve a list of nodes."), null) : new Error("Failed to retrieve a list of nodes."));

                  case 8:
                    _context45.prev = 8;
                    _context45.t0 = _context45["catch"](0);
                    return _context45.abrupt("return", e ? void e(new Error("Failed to retrieve a list of nodes with error: " + _context45.t0), null) : new Error("Failed to retrieve a list of nodes with error: " + _context45.t0));

                  case 11:
                  case "end":
                    return _context45.stop();
                }
              }
            }, _callee45, this, [[0, 8]]);
          }));

          function retrieveNodes(_x44) {
            return _retrieveNodes.apply(this, arguments);
          }

          return retrieveNodes;
        }()
      }]);

      return _class9;
    }();
  }, function (e, t, r) {
    "use strict";

    r.r(t);
    var n = r(104),
        i = r.n(n),
        o = r(54),
        a = r.n(o),
        s = r(105),
        f = r.n(s),
        u = r(106),
        c = r.n(u),
        h = r(107),
        d = r.n(h),
        l = r(55),
        p = r.n(l),
        b = r(108),
        y = r.n(b),
        g = r(109),
        v = r.n(g);

    function m(e, t) {
      var r = "string" == typeof e ? Object.assign({}, w[e]) : e;
      if ("object" != typeof r) throw new Error("[Portis] illegal 'network' parameter. Read more about it here: https://docs.portis.io/#/configuration?id=network");
      if (!r.nodeUrl) throw new Error("[Portis] 'nodeUrl' is required. Read more about it here: https://docs.portis.io/#/configuration?id=network");
      if (t && !r.gasRelayHubAddress) throw new Error("[Portis] can't find default gas relay hub for " + e);
      return "string" != typeof e || t || delete r.gasRelayHubAddress, r;
    }

    var w = {
      mainnet: {
        nodeUrl: "https://mainnet.infura.io/v3/faa4639b090f46499f29d894da0551a0",
        chainId: "1",
        gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
      },
      ropsten: {
        nodeUrl: "https://ropsten.infura.io/v3/faa4639b090f46499f29d894da0551a0",
        chainId: "3",
        gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
      },
      rinkeby: {
        nodeUrl: "https://rinkeby.infura.io/v3/faa4639b090f46499f29d894da0551a0",
        chainId: "4",
        gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
      },
      goerli: {
        nodeUrl: "https://goerli.prylabs.net",
        chainId: "5"
      },
      ubiq: {
        nodeUrl: "https://rpc1.ubiqscan.io",
        chainId: "8"
      },
      thundercoreTestnet: {
        nodeUrl: "https://testnet-rpc.thundercore.com:8544",
        chainId: "18"
      },
      orchid: {
        nodeUrl: "https://public-node.rsk.co",
        chainId: "30"
      },
      orchidTestnet: {
        nodeUrl: "https://public-node.testnet.rsk.co",
        chainId: "31"
      },
      kovan: {
        nodeUrl: "https://kovan.infura.io/v3/faa4639b090f46499f29d894da0551a0",
        chainId: "42",
        gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
      },
      classic: {
        nodeUrl: "https://ethereumclassic.network",
        chainId: "61"
      },
      sokol: {
        nodeUrl: "https://sokol.poa.network",
        chainId: "77"
      },
      core: {
        nodeUrl: "https://core.poa.network",
        chainId: "99"
      },
      xdai: {
        nodeUrl: "https://dai.poa.network",
        chainId: "100",
        gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
      },
      thundercore: {
        nodeUrl: "https://mainnet-rpc.thundercore.com",
        chainId: "108"
      },
      fuse: {
        nodeUrl: "https://rpc.fusenet.io",
        chainId: "122"
      },
      lightstreams: {
        nodeUrl: "https://node.mainnet.lightstreams.io",
        chainId: "163"
      },
      matic: {
        nodeUrl: "https://rpc-mainnet.matic.network",
        chainId: "137"
      },
      maticMumbai: {
        nodeUrl: "https://rpc-mumbai.matic.today",
        chainId: "80001"
      },
      maticAlpha: {
        nodeUrl: "https://alpha.ethereum.matic.network",
        chainId: "4626"
      },
      maticTestnet: {
        nodeUrl: "https://testnet2.matic.network",
        chainId: "8995"
      }
    },
        _ = function _(e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        function a(e) {
          try {
            f(n.next(e));
          } catch (e) {
            o(e);
          }
        }

        function s(e) {
          try {
            f(n.throw(e));
          } catch (e) {
            o(e);
          }
        }

        function f(e) {
          e.done ? i(e.value) : new r(function (t) {
            t(e.value);
          }).then(a, s);
        }

        f((n = n.apply(e, t || [])).next());
      });
    },
        E = function E(e, t) {
      var r,
          n,
          i,
          o,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function s(o) {
        return function (s) {
          return function (o) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;

                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;

                  case 4:
                    return a.label++, {
                      value: o[1],
                      done: !1
                    };

                  case 5:
                    a.label++, n = o[1], o = [0];
                    continue;

                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                      a.label = o[1];
                      break;
                    }

                    if (6 === o[0] && a.label < i[1]) {
                      a.label = i[1], i = o;
                      break;
                    }

                    if (i && a.label < i[2]) {
                      a.label = i[2], a.ops.push(o);
                      break;
                    }

                    i[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                o = t.call(e, a);
              } catch (e) {
                o = [6, e], n = 0;
              } finally {
                r = i = 0;
              }
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, s]);
        };
      }
    },
        S = r(14),
        A = S.addHexPrefix,
        x = S.stripHexPrefix,
        k = S.BN;

    function M(e, t) {
      return _(this, void 0, void 0, function () {
        var r, n, i, o, a;
        return E(this, function (s) {
          switch (s.label) {
            case 0:
              return [4, e.getBlockByNumber("latest", !1)];

            case 1:
              return r = s.sent(), [4, T(e, t, r.gasLimit)];

            case 2:
              if (n = s.sent(), i = n.safeGas, o = n.simpleSend, a = n.gasLimitSpecified, o || a) return [2, i];
              s.label = 3;

            case 3:
              return s.trys.push([3, 5,, 6]), [4, I(e, t, r.gasLimit, i)];

            case 4:
              return [2, s.sent()];

            case 5:
              return s.sent(), [2, i];

            case 6:
              return [2];
          }
        });
      });
    }

    function T(e, t, r) {
      return _(this, void 0, void 0, function () {
        var n, i, o;
        return E(this, function (a) {
          switch (a.label) {
            case 0:
              return Boolean(t.gas) ? [2, {
                safeGas: t.gas,
                simpleSend: !1,
                gasLimitSpecified: !0
              }] : (n = t.to, Boolean(n) ? [4, e.getCode(n)] : [3, 2]);

            case 1:
              if (i = a.sent(), !i || "0x" === i || "0x0" === i) {
                if (t.data) throw new Error("Trying to call a function on a non-contract address");
                return [2, {
                  safeGas: "0x5208",
                  simpleSend: !0,
                  gasLimitSpecified: !1
                }];
              }

              a.label = 2;

            case 2:
              return o = P(r), s = o, f = 20, u = new k(19), c = new k(f), [2, {
                safeGas: L(s.mul(u).div(c)),
                simpleSend: !1,
                gasLimitSpecified: !1
              }];
          }

          var s, f, u, c;
        });
      });
    }

    function I(e, t, r, n) {
      return _(this, void 0, void 0, function () {
        var i;
        return E(this, function (o) {
          switch (o.label) {
            case 0:
              return t.gas = n, i = A, [4, e.estimateGas(t)];

            case 1:
              return [2, R(i.apply(void 0, [o.sent()]), r)];
          }
        });
      });
    }

    function R(e, t) {
      var r = P(e),
          n = P(t).muln(.9),
          i = r.muln(1.5);
      return r.gt(n) ? L(r) : i.lt(n) ? L(i) : L(n);
    }

    function P(e) {
      return new k(x(e), 16);
    }

    function L(e) {
      return A(e.toString(16));
    }

    var B = function () {
      function e(e) {
        this.provider = e;
      }

      return e.prototype.getBlockByNumber = function (e, t) {
        return this.sendAsync("eth_getBlockByNumber", e, t);
      }, e.prototype.getCode = function (e, t) {
        return void 0 === t && (t = "latest"), this.sendAsync("eth_getCode", e, t);
      }, e.prototype.estimateGas = function (e) {
        return this.sendAsync("eth_estimateGas", e);
      }, e.prototype.sendAsync = function (e) {
        for (var t = this, r = [], n = 1; n < arguments.length; n++) {
          r[n - 1] = arguments[n];
        }

        return new Promise(function (n, i) {
          t.provider.sendAsync({
            id: 42,
            jsonrpc: "2.0",
            method: e,
            params: r
          }, function (e, t) {
            e ? i(e) : n(t.result);
          });
        });
      }, e;
    }(),
        C = !1;

    function O() {
      return new Promise(function (e) {
        C ? e() : ["loaded", "interactive", "complete"].indexOf(document.readyState) > -1 ? (C = !0, e()) : window.addEventListener("load", function () {
          C = !0, e();
        }, !1);
      });
    }

    var N = r(56),
        j = r.n(N),
        D = function D(e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        function a(e) {
          try {
            f(n.next(e));
          } catch (e) {
            o(e);
          }
        }

        function s(e) {
          try {
            f(n.throw(e));
          } catch (e) {
            o(e);
          }
        }

        function f(e) {
          e.done ? i(e.value) : new r(function (t) {
            t(e.value);
          }).then(a, s);
        }

        f((n = n.apply(e, t || [])).next());
      });
    },
        U = function U(e, t) {
      var r,
          n,
          i,
          o,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function s(o) {
        return function (s) {
          return function (o) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;

                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;

                  case 4:
                    return a.label++, {
                      value: o[1],
                      done: !1
                    };

                  case 5:
                    a.label++, n = o[1], o = [0];
                    continue;

                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                      a.label = o[1];
                      break;
                    }

                    if (6 === o[0] && a.label < i[1]) {
                      a.label = i[1], i = o;
                      break;
                    }

                    if (i && a.label < i[2]) {
                      a.label = i[2], a.ops.push(o);
                      break;
                    }

                    i[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                o = t.call(e, a);
              } catch (e) {
                o = [6, e], n = 0;
              } finally {
                r = i = 0;
              }
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, s]);
        };
      }
    },
        z = ["email", "reputation"],
        q = document.createElement("iframe");

    q.className = "por_portis-iframe", q.style.width = "0", q.style.height = "0", q.style.border = "none", q.style.position = "absolute", q.style.top = "-999px", q.style.left = "-999px", q.src = "https://widget.portis.io", O().then(function () {
      document.getElementsByClassName("por_portis-iframe").length && console.warn("Portis script was already loaded. This might cause unexpected behavior. If loading with a <script> tag, please make sure that you only load it once."), document.body.appendChild(q);
    });

    var F = function () {
      function e(e, t, r) {
        void 0 === r && (r = {}), this._widgetUrl = "https://widget.portis.io", function () {
          var e = "localhost" === location.hostname || "127.0.0.1" === location.hostname,
              t = "https:" === location.protocol;
          if (!(e || t)) throw "[Portis] Access to the WebCrypto API is restricted to secure origins.\nIf this is a development environment please use http://localhost:" + location.port + " instead.\nOtherwise, please use an SSL certificate.";
        }(), this._checkIfWidgetAlreadyInitialized(), this._validateParams(e, t, r), this.config = {
          dappId: e,
          network: m(t, r.gasRelay),
          version: "2.0.0-beta.59",
          scope: r.scope,
          registerPageByDefault: r.registerPageByDefault
        }, this.widget = this._initWidget(), this.provider = this._initProvider(r);
      }

      return e.prototype.changeNetwork = function (e, t) {
        var r = m(e, t);
        this.clearSubprovider(p.a), this.clearSubprovider(a.a), this.config.network = r;
      }, e.prototype.setDefaultEmail = function (e) {
        this.config.defaultEmail = e;
      }, e.prototype.showPortis = function () {
        return D(this, void 0, void 0, function () {
          return U(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [2, e.sent().communication.showPortis(this.config)];
            }
          });
        });
      }, e.prototype.logout = function () {
        return D(this, void 0, void 0, function () {
          return U(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [2, e.sent().communication.logout()];
            }
          });
        });
      }, e.prototype.onLogin = function (e) {
        this._onLoginCallback = e;
      }, e.prototype.onLogout = function (e) {
        this._onLogoutCallback = e;
      }, e.prototype.onActiveWalletChanged = function (e) {
        this._onActiveWalletChangedCallback = e;
      }, e.prototype.onError = function (e) {
        this._onErrorCallback = e;
      }, e.prototype.getExtendedPublicKey = function (e, t) {
        return void 0 === e && (e = "m/44'/60'/0'/0/0"), void 0 === t && (t = "Ethereum"), D(this, void 0, void 0, function () {
          return U(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [2, r.sent().communication.getExtendedPublicKey(e, t, this.config)];
            }
          });
        });
      }, e.prototype.importWallet = function (e) {
        return D(this, void 0, void 0, function () {
          return U(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [2, t.sent().communication.importWallet(e, this.config)];
            }
          });
        });
      }, e.prototype.isLoggedIn = function () {
        return D(this, void 0, void 0, function () {
          return U(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [2, e.sent().communication.isLoggedIn()];
            }
          });
        });
      }, e.prototype.signBitcoinTransaction = function (e) {
        return D(this, void 0, void 0, function () {
          return U(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [2, t.sent().communication.signBitcoinTransaction(e, this.config)];
            }
          });
        });
      }, e.prototype.showBitcoinWallet = function (e) {
        return void 0 === e && (e = "m/49'/0'/0'/0/0"), D(this, void 0, void 0, function () {
          return U(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [2, t.sent().communication.showBitcoinWallet(e, this.config)];
            }
          });
        });
      }, e.prototype._checkIfWidgetAlreadyInitialized = function () {
        document.getElementsByClassName("por_portis-container").length && console.warn("An instance of Portis was already initialized. This is probably a mistake. Make sure that you use the same Portis instance throughout your app.");
      }, e.prototype._validateParams = function (e, t, r) {
        if (!e) throw new Error("[Portis] 'dappId' is required. Get your dappId here: https://dashboard.portis.io");
        if (!t) throw new Error("[Portis] 'network' is required. Read more about it here: https://docs.portis.io/#/configuration?id=network");

        if (r.scope) {
          if (!Array.isArray(r.scope)) throw new Error("[Portis] 'scope' must be an array. Read more about it here: https://docs.portis.io/#/configuration?id=scope");
          if (r.scope.filter(function (e) {
            return z.indexOf(e) < 0;
          }).length > 0) throw new Error("[Portis] invalid 'scope' parameter. Read more about it here: https://docs.portis.io/#/configuration?id=scope");
        }

        if (void 0 !== r.registerPageByDefault && "boolean" != typeof r.registerPageByDefault) throw new Error("[Portis] invalid 'registerPageByDefault' parameter, must be a boolean. Read more about it here: https://docs.portis.io/#/configuration?id=registerPageByDefault");
        r.staging && (console.warn("Please note: you are using the Portis STAGING environment."), this._widgetUrl = "https://widget-staging.portis.io");
      }, e.prototype._initWidget = function () {
        return D(this, void 0, void 0, function () {
          var e, t, r, n, i;
          return U(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, O()];

              case 1:
                return o.sent(), document.body.contains(q) && document.body.removeChild(q), (e = document.createElement("style")).innerHTML = "\n.por_portis-container {\n  position: fixed;\n  width: 0px;\n  height: 0px;\n  top: 0px;\n  right: 0px;\n  z-index: 2147483647;\n}\n\n@media (max-width: 576px) {\n  .por_portis-container {\n    bottom: 0;\n    top: auto;\n  }\n}\n\n.por_portis-widget-frame {\n  position: fixed;\n  width: 375px;\n  height: 0;\n  top: 20px;\n  right: 20px;\n  box-shadow: 0 5px 40px rgba(0,0,0,.16);\n  border-radius: 8px;\n  overflow: hidden;\n  z-index: 2147483000;\n}\n\n@media (max-width: 576px) {\n  .por_portis-widget-frame {\n    bottom: 0;\n    top: auto;\n    width: 100%;\n    right: 0;\n    left: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n", (t = document.createElement("div")).className = "por_portis-container", (r = document.createElement("div")).id = "portis-container-" + Date.now(), r.className = "por_portis-widget-frame", t.appendChild(r), document.body.appendChild(t), document.head.appendChild(e), (n = v.a.connectToChild({
                  url: this._widgetUrl,
                  appendTo: document.getElementById(r.id),
                  methods: {
                    setHeight: this._setHeight.bind(this),
                    getWindowSize: this._getWindowSize.bind(this),
                    onLogin: this._onLogin.bind(this),
                    onLogout: this._onLogout.bind(this),
                    onActiveWalletChanged: this._onActiveWalletChanged.bind(this),
                    onError: this._onError.bind(this)
                  }
                })).iframe.style.position = "absolute", n.iframe.style.height = "100%", n.iframe.style.width = "100%", n.iframe.style.border = "0 transparent", [4, n.promise];

              case 2:
                return (i = o.sent()).retrieveSession(this.config), [2, {
                  communication: i,
                  iframe: n.iframe,
                  widgetFrame: r
                }];
            }
          });
        });
      }, e.prototype._initProvider = function (e) {
        var t = this,
            r = new i.a(),
            n = new B(r);

        if (r.send = function (e, n) {
          if ("string" == typeof e) return new Promise(function (t, i) {
            r.sendAsync({
              jsonrpc: "2.0",
              id: 42,
              method: e,
              params: n || []
            }, function (e, r) {
              e ? i(e) : t(r.result);
            });
          });

          if (!n) {
            var i = null;

            switch (e.method) {
              case "eth_accounts":
              case "eth_coinbase":
                i = t._selectedAddress ? [t._selectedAddress] : [];
                break;

              case "net_version":
                i = t._network;
                break;

              case "eth_uninstallFilter":
                r.sendAsync(e, function (e) {
                  return e;
                }), i = !0;
                break;

              default:
                var o = "The Portis Web3 object does not support synchronous methods like " + e.method + " without a callback parameter.";
                throw new Error(o);
            }

            return {
              id: e.id,
              jsonrpc: e.jsonrpc,
              result: i
            };
          }

          r.sendAsync(e, n);
        }, r.addProvider(new f.a({
          web3_clientVersion: "Portis/v" + this.config.version + "/javascript",
          net_listening: !0,
          eth_hashrate: "0x00",
          eth_mining: !1,
          eth_syncing: !0
        })), r.addProvider(new a.a()), r.addProvider(new y.a()), r.addProvider(new c.a()), r.addProvider(new p.a()), r.addProvider({
          setEngine: function setEngine(e) {
            return e;
          },
          handleRequest: function handleRequest(e, r, n) {
            return D(t, void 0, void 0, function () {
              return U(this, function (t) {
                return e.id || (e.id = 42), r(), [2];
              });
            });
          }
        }), r.addProvider(new d.a({
          getAccounts: function getAccounts(e) {
            return D(t, void 0, void 0, function () {
              var t, r, n;
              return U(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.widget];

                  case 1:
                    return [4, i.sent().communication.getAccounts(this.config)];

                  case 2:
                    return t = i.sent(), r = t.error, n = t.result, !r && n && (this._selectedAddress = n[0]), e(r, n), [2];
                }
              });
            });
          },
          signTransaction: function signTransaction(e, r) {
            return D(t, void 0, void 0, function () {
              var t, n, i;
              return U(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, this.widget];

                  case 1:
                    return [4, o.sent().communication.signTransaction(e, this.config)];

                  case 2:
                    return t = o.sent(), n = t.error, i = t.result, r(n, i), [2];
                }
              });
            });
          },
          signMessage: function signMessage(e, r) {
            return D(t, void 0, void 0, function () {
              var t, n, i, o, a;
              return U(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [4, this.widget];

                  case 1:
                    return t = s.sent().communication, n = Object.assign({}, e, {
                      messageStandard: "signMessage"
                    }), [4, t.signMessage(n, this.config)];

                  case 2:
                    return i = s.sent(), o = i.error, a = i.result, r(o, a), [2];
                }
              });
            });
          },
          signPersonalMessage: function signPersonalMessage(e, r) {
            return D(t, void 0, void 0, function () {
              var t, n, i, o, a;
              return U(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [4, this.widget];

                  case 1:
                    return t = s.sent().communication, n = Object.assign({}, e, {
                      messageStandard: "signPersonalMessage"
                    }), [4, t.signMessage(n, this.config)];

                  case 2:
                    return i = s.sent(), o = i.error, a = i.result, r(o, a), [2];
                }
              });
            });
          },
          signTypedMessage: function signTypedMessage(e, r) {
            return D(t, void 0, void 0, function () {
              var t, n, i, o, a;
              return U(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [4, this.widget];

                  case 1:
                    return t = s.sent().communication, n = Object.assign({}, e, {
                      messageStandard: "signTypedMessage"
                    }), [4, t.signMessage(n, this.config)];

                  case 2:
                    return i = s.sent(), o = i.error, a = i.result, r(o, a), [2];
                }
              });
            });
          },
          signTypedMessageV3: function signTypedMessageV3(e, r) {
            return D(t, void 0, void 0, function () {
              var t, n, i, o, a;
              return U(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [4, this.widget];

                  case 1:
                    return t = s.sent().communication, n = Object.assign({}, e, {
                      messageStandard: "signTypedMessageV3"
                    }), [4, t.signMessage(n, this.config)];

                  case 2:
                    return i = s.sent(), o = i.error, a = i.result, r(o, a), [2];
                }
              });
            });
          },
          estimateGas: function estimateGas(e, r) {
            return D(t, void 0, void 0, function () {
              var t;
              return U(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, M(n, e)];

                  case 1:
                    return t = i.sent(), r(null, t), [2];
                }
              });
            });
          },
          getGasPrice: function getGasPrice(e) {
            return D(t, void 0, void 0, function () {
              return U(this, function (t) {
                return e(null, ""), [2];
              });
            });
          }
        })), e.pocketDevId) {
          var o = new j.a.Pocket({
            devID: e.pocketDevId,
            networkName: "ETH",
            netIDs: [this.config.network.chainId]
          });
          r.addProvider({
            setEngine: function setEngine(e) {
              return e;
            },
            handleRequest: function handleRequest(e, n, i) {
              return D(t, void 0, void 0, function () {
                var t, n, a;
                return U(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [4, o.sendRelay(new j.a.Relay("ETH", this.config.network.chainId, JSON.stringify(e), o.configuration))];

                    case 1:
                      if ((t = s.sent()) instanceof Error || !t) a = t || new Error("Unknown error"), n = null;else try {
                        n = JSON.parse(t).result, a = null;
                      } catch (e) {
                        n = null, a = e;
                      }
                      return "net_version" === e.method && (this._network = n, r.networkVersion = this._network), i(a, n), [2];
                  }
                });
              });
            }
          });
        } else r.addProvider({
          setEngine: function setEngine(e) {
            return e;
          },
          handleRequest: function handleRequest(e, n, i) {
            return D(t, void 0, void 0, function () {
              var t, n, o;
              return U(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, this.widget];

                  case 1:
                    return [4, a.sent().communication.relay(e, this.config)];

                  case 2:
                    return t = a.sent(), n = t.error, o = t.result, "net_version" === e.method && (this._network = o, r.networkVersion = this._network), i(n, o), [2];
                }
              });
            });
          }
        });

        return r.enable = function () {
          return new Promise(function (e, t) {
            r.sendAsync({
              method: "eth_accounts"
            }, function (r, n) {
              r ? t(r) : e(n.result);
            });
          });
        }, r.isConnected = function () {
          return !0;
        }, r.isPortis = !0, r.on("error", function (e) {
          e && e.message && e.message.includes("PollingBlockTracker") ? console.warn("If you see this warning constantly, there might be an error with your RPC node.") : console.error(e);
        }), r.start(), r;
      }, e.prototype._setHeight = function (e) {
        return D(this, void 0, void 0, function () {
          return U(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return t.sent().widgetFrame.style.height = e + "px", [2];
            }
          });
        });
      }, e.prototype._getWindowSize = function () {
        var e = document.getElementsByTagName("body")[0];
        return {
          width: window.innerWidth || document.documentElement.clientWidth || e.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight || e.clientHeight
        };
      }, e.prototype._onLogin = function (e, t, r) {
        this._onLoginCallback && this._onLoginCallback(e, t, r);
      }, e.prototype._onLogout = function () {
        this._selectedAddress = "", this._onLogoutCallback && this._onLogoutCallback();
      }, e.prototype._onActiveWalletChanged = function (e) {
        this._onActiveWalletChangedCallback && this._onActiveWalletChangedCallback(e);
      }, e.prototype._onError = function (e) {
        this._onErrorCallback && this._onErrorCallback(e);
      }, e.prototype.clearSubprovider = function (e) {
        var t = this.provider._providers.find(function (t) {
          return t instanceof e;
        });

        this.provider.removeProvider(t), this.provider.addProvider(new e());
      }, e;
    }();

    t.default = F;
  }]).default;
});

/***/ })

}]);