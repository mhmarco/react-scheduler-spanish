var no = Object.defineProperty;
var ro = (e, r, t) => r in e ? no(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var En = (e, r, t) => (ro(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as M, jsxs as ee, Fragment as Ge } from "react/jsx-runtime";
import * as re from "react";
import Ue, { useRef as we, useContext as Be, useMemo as Ee, useLayoutEffect as wr, useDebugValue as _n, createElement as oo, createContext as Sr, useState as fe, useCallback as le, useEffect as xe, forwardRef as Cr, useImperativeHandle as Mr } from "react";
import { createPortal as so } from "react-dom";
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vt = {}, io = {
  get exports() {
    return vt;
  },
  set exports(e) {
    vt = e;
  }
}, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function ao() {
  if (Tn)
    return ge;
  Tn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var O = h.$$typeof;
      switch (O) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case n:
            case a:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case i:
                case d:
                case p:
                case f:
                case s:
                  return h;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  return ge.ContextConsumer = i, ge.ContextProvider = s, ge.Element = e, ge.ForwardRef = d, ge.Fragment = t, ge.Lazy = p, ge.Memo = f, ge.Portal = r, ge.Profiler = o, ge.StrictMode = n, ge.Suspense = a, ge.SuspenseList = l, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(h) {
    return C(h) === i;
  }, ge.isContextProvider = function(h) {
    return C(h) === s;
  }, ge.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ge.isForwardRef = function(h) {
    return C(h) === d;
  }, ge.isFragment = function(h) {
    return C(h) === t;
  }, ge.isLazy = function(h) {
    return C(h) === p;
  }, ge.isMemo = function(h) {
    return C(h) === f;
  }, ge.isPortal = function(h) {
    return C(h) === r;
  }, ge.isProfiler = function(h) {
    return C(h) === o;
  }, ge.isStrictMode = function(h) {
    return C(h) === n;
  }, ge.isSuspense = function(h) {
    return C(h) === a;
  }, ge.isSuspenseList = function(h) {
    return C(h) === l;
  }, ge.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === n || h === a || h === l || h === v || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === f || h.$$typeof === s || h.$$typeof === i || h.$$typeof === d || h.$$typeof === g || h.getModuleId !== void 0);
  }, ge.typeOf = C, ge;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function co() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, C = !1, h = !1, O = !1, J = !1, z;
    z = Symbol.for("react.module.reference");
    function P(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === t || L === o || J || L === n || L === a || L === l || O || L === v || g || C || h || typeof L == "object" && L !== null && (L.$$typeof === p || L.$$typeof === f || L.$$typeof === s || L.$$typeof === i || L.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === z || L.getModuleId !== void 0));
    }
    function u(L) {
      if (typeof L == "object" && L !== null) {
        var X = L.$$typeof;
        switch (X) {
          case e:
            var te = L.type;
            switch (te) {
              case t:
              case o:
              case n:
              case a:
              case l:
                return te;
              default:
                var F = te && te.$$typeof;
                switch (F) {
                  case c:
                  case i:
                  case d:
                  case p:
                  case f:
                  case s:
                    return F;
                  default:
                    return X;
                }
            }
          case r:
            return X;
        }
      }
    }
    var m = i, w = s, _ = e, T = d, B = t, K = p, G = f, $ = r, D = o, k = n, R = a, I = l, U = !1, Q = !1;
    function se(L) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(L) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(L) {
      return u(L) === i;
    }
    function j(L) {
      return u(L) === s;
    }
    function Z(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function V(L) {
      return u(L) === d;
    }
    function b(L) {
      return u(L) === t;
    }
    function N(L) {
      return u(L) === p;
    }
    function y(L) {
      return u(L) === f;
    }
    function Y(L) {
      return u(L) === r;
    }
    function W(L) {
      return u(L) === o;
    }
    function A(L) {
      return u(L) === n;
    }
    function x(L) {
      return u(L) === a;
    }
    function q(L) {
      return u(L) === l;
    }
    ye.ContextConsumer = m, ye.ContextProvider = w, ye.Element = _, ye.ForwardRef = T, ye.Fragment = B, ye.Lazy = K, ye.Memo = G, ye.Portal = $, ye.Profiler = D, ye.StrictMode = k, ye.Suspense = R, ye.SuspenseList = I, ye.isAsyncMode = se, ye.isConcurrentMode = oe, ye.isContextConsumer = H, ye.isContextProvider = j, ye.isElement = Z, ye.isForwardRef = V, ye.isFragment = b, ye.isLazy = N, ye.isMemo = y, ye.isPortal = Y, ye.isProfiler = W, ye.isStrictMode = A, ye.isSuspense = x, ye.isSuspenseList = q, ye.isValidElementType = P, ye.typeOf = u;
  }()), ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ao() : e.exports = co();
})(io);
function lo(e) {
  function r(H, j, Z, V, b) {
    for (var N = 0, y = 0, Y = 0, W = 0, A, x, q = 0, L = 0, X, te = X = A = 0, F = 0, ie = 0, pe = 0, ue = 0, ae = Z.length, de = ae - 1, ce, ne = "", he = "", Me = "", Ae = "", _e; F < ae; ) {
      if (x = Z.charCodeAt(F), F === de && y + W + Y + N !== 0 && (y !== 0 && (x = y === 47 ? 10 : 47), W = Y = N = 0, ae++, de++), y + W + Y + N === 0) {
        if (F === de && (0 < ie && (ne = ne.replace(p, "")), 0 < ne.trim().length)) {
          switch (x) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ne += Z.charAt(F);
          }
          x = 59;
        }
        switch (x) {
          case 123:
            for (ne = ne.trim(), A = ne.charCodeAt(0), X = 1, ue = ++F; F < ae; ) {
              switch (x = Z.charCodeAt(F)) {
                case 123:
                  X++;
                  break;
                case 125:
                  X--;
                  break;
                case 47:
                  switch (x = Z.charCodeAt(F + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (te = F + 1; te < de; ++te)
                          switch (Z.charCodeAt(te)) {
                            case 47:
                              if (x === 42 && Z.charCodeAt(te - 1) === 42 && F + 2 !== te) {
                                F = te + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (x === 47) {
                                F = te + 1;
                                break e;
                              }
                          }
                        F = te;
                      }
                  }
                  break;
                case 91:
                  x++;
                case 40:
                  x++;
                case 34:
                case 39:
                  for (; F++ < de && Z.charCodeAt(F) !== x; )
                    ;
              }
              if (X === 0)
                break;
              F++;
            }
            switch (X = Z.substring(ue, F), A === 0 && (A = (ne = ne.replace(f, "").trim()).charCodeAt(0)), A) {
              case 64:
                switch (0 < ie && (ne = ne.replace(p, "")), x = ne.charCodeAt(1), x) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ie = j;
                    break;
                  default:
                    ie = R;
                }
                if (X = r(j, ie, X, x, b + 1), ue = X.length, 0 < U && (ie = t(R, ne, pe), _e = c(3, X, ie, j, $, G, ue, x, b, V), ne = ie.join(""), _e !== void 0 && (ue = (X = _e.trim()).length) === 0 && (x = 0, X = "")), 0 < ue)
                  switch (x) {
                    case 115:
                      ne = ne.replace(m, i);
                    case 100:
                    case 109:
                    case 45:
                      X = ne + "{" + X + "}";
                      break;
                    case 107:
                      ne = ne.replace(J, "$1 $2"), X = ne + "{" + X + "}", X = k === 1 || k === 2 && s("@" + X, 3) ? "@-webkit-" + X + "@" + X : "@" + X;
                      break;
                    default:
                      X = ne + X, V === 112 && (X = (he += X, ""));
                  }
                else
                  X = "";
                break;
              default:
                X = r(j, t(j, ne, pe), X, V, b + 1);
            }
            Me += X, X = pe = ie = te = A = 0, ne = "", x = Z.charCodeAt(++F);
            break;
          case 125:
          case 59:
            if (ne = (0 < ie ? ne.replace(p, "") : ne).trim(), 1 < (ue = ne.length))
              switch (te === 0 && (A = ne.charCodeAt(0), A === 45 || 96 < A && 123 > A) && (ue = (ne = ne.replace(" ", ":")).length), 0 < U && (_e = c(1, ne, j, H, $, G, he.length, V, b, V)) !== void 0 && (ue = (ne = _e.trim()).length) === 0 && (ne = "\0\0"), A = ne.charCodeAt(0), x = ne.charCodeAt(1), A) {
                case 0:
                  break;
                case 64:
                  if (x === 105 || x === 99) {
                    Ae += ne + Z.charAt(F);
                    break;
                  }
                default:
                  ne.charCodeAt(ue - 1) !== 58 && (he += o(ne, A, x, ne.charCodeAt(2)));
              }
            pe = ie = te = A = 0, ne = "", x = Z.charCodeAt(++F);
        }
      }
      switch (x) {
        case 13:
        case 10:
          y === 47 ? y = 0 : 1 + A === 0 && V !== 107 && 0 < ne.length && (ie = 1, ne += "\0"), 0 < U * se && c(0, ne, j, H, $, G, he.length, V, b, V), G = 1, $++;
          break;
        case 59:
        case 125:
          if (y + W + Y + N === 0) {
            G++;
            break;
          }
        default:
          switch (G++, ce = Z.charAt(F), x) {
            case 9:
            case 32:
              if (W + N + y === 0)
                switch (q) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ce = "";
                    break;
                  default:
                    x !== 32 && (ce = " ");
                }
              break;
            case 0:
              ce = "\\0";
              break;
            case 12:
              ce = "\\f";
              break;
            case 11:
              ce = "\\v";
              break;
            case 38:
              W + y + N === 0 && (ie = pe = 1, ce = "\f" + ce);
              break;
            case 108:
              if (W + y + N + D === 0 && 0 < te)
                switch (F - te) {
                  case 2:
                    q === 112 && Z.charCodeAt(F - 3) === 58 && (D = q);
                  case 8:
                    L === 111 && (D = L);
                }
              break;
            case 58:
              W + y + N === 0 && (te = F);
              break;
            case 44:
              y + Y + W + N === 0 && (ie = 1, ce += "\r");
              break;
            case 34:
            case 39:
              y === 0 && (W = W === x ? 0 : W === 0 ? x : W);
              break;
            case 91:
              W + y + Y === 0 && N++;
              break;
            case 93:
              W + y + Y === 0 && N--;
              break;
            case 41:
              W + y + N === 0 && Y--;
              break;
            case 40:
              if (W + y + N === 0) {
                if (A === 0)
                  switch (2 * q + 3 * L) {
                    case 533:
                      break;
                    default:
                      A = 1;
                  }
                Y++;
              }
              break;
            case 64:
              y + Y + W + N + te + X === 0 && (X = 1);
              break;
            case 42:
            case 47:
              if (!(0 < W + N + Y))
                switch (y) {
                  case 0:
                    switch (2 * x + 3 * Z.charCodeAt(F + 1)) {
                      case 235:
                        y = 47;
                        break;
                      case 220:
                        ue = F, y = 42;
                    }
                    break;
                  case 42:
                    x === 47 && q === 42 && ue + 2 !== F && (Z.charCodeAt(ue + 2) === 33 && (he += Z.substring(ue, F + 1)), ce = "", y = 0);
                }
          }
          y === 0 && (ne += ce);
      }
      L = q, q = x, F++;
    }
    if (ue = he.length, 0 < ue) {
      if (ie = j, 0 < U && (_e = c(2, he, ie, H, $, G, ue, V, b, V), _e !== void 0 && (he = _e).length === 0))
        return Ae + he + Me;
      if (he = ie.join(",") + "{" + he + "}", k * D !== 0) {
        switch (k !== 2 || s(he, 2) || (D = 0), D) {
          case 111:
            he = he.replace(P, ":-moz-$1") + he;
            break;
          case 112:
            he = he.replace(z, "::-webkit-input-$1") + he.replace(z, "::-moz-$1") + he.replace(z, ":-ms-input-$1") + he;
        }
        D = 0;
      }
    }
    return Ae + he + Me;
  }
  function t(H, j, Z) {
    var V = j.trim().split(h);
    j = V;
    var b = V.length, N = H.length;
    switch (N) {
      case 0:
      case 1:
        var y = 0;
        for (H = N === 0 ? "" : H[0] + " "; y < b; ++y)
          j[y] = n(H, j[y], Z).trim();
        break;
      default:
        var Y = y = 0;
        for (j = []; y < b; ++y)
          for (var W = 0; W < N; ++W)
            j[Y++] = n(H[W] + " ", V[y], Z).trim();
    }
    return j;
  }
  function n(H, j, Z) {
    var V = j.charCodeAt(0);
    switch (33 > V && (V = (j = j.trim()).charCodeAt(0)), V) {
      case 38:
        return j.replace(O, "$1" + H.trim());
      case 58:
        return H.trim() + j.replace(O, "$1" + H.trim());
      default:
        if (0 < 1 * Z && 0 < j.indexOf("\f"))
          return j.replace(O, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + j;
  }
  function o(H, j, Z, V) {
    var b = H + ";", N = 2 * j + 3 * Z + 4 * V;
    if (N === 944) {
      H = b.indexOf(":", 9) + 1;
      var y = b.substring(H, b.length - 1).trim();
      return y = b.substring(0, H).trim() + y + ";", k === 1 || k === 2 && s(y, 1) ? "-webkit-" + y + y : y;
    }
    if (k === 0 || k === 2 && !s(b, 1))
      return b;
    switch (N) {
      case 1015:
        return b.charCodeAt(10) === 97 ? "-webkit-" + b + b : b;
      case 951:
        return b.charCodeAt(3) === 116 ? "-webkit-" + b + b : b;
      case 963:
        return b.charCodeAt(5) === 110 ? "-webkit-" + b + b : b;
      case 1009:
        if (b.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + b + b;
      case 978:
        return "-webkit-" + b + "-moz-" + b + b;
      case 1019:
      case 983:
        return "-webkit-" + b + "-moz-" + b + "-ms-" + b + b;
      case 883:
        if (b.charCodeAt(8) === 45)
          return "-webkit-" + b + b;
        if (0 < b.indexOf("image-set(", 11))
          return b.replace(K, "$1-webkit-$2") + b;
        break;
      case 932:
        if (b.charCodeAt(4) === 45)
          switch (b.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + b.replace("-grow", "") + "-webkit-" + b + "-ms-" + b.replace("grow", "positive") + b;
            case 115:
              return "-webkit-" + b + "-ms-" + b.replace("shrink", "negative") + b;
            case 98:
              return "-webkit-" + b + "-ms-" + b.replace("basis", "preferred-size") + b;
          }
        return "-webkit-" + b + "-ms-" + b + b;
      case 964:
        return "-webkit-" + b + "-ms-flex-" + b + b;
      case 1023:
        if (b.charCodeAt(8) !== 99)
          break;
        return y = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + y + "-webkit-" + b + "-ms-flex-pack" + y + b;
      case 1005:
        return g.test(b) ? b.replace(v, ":-webkit-") + b.replace(v, ":-moz-") + b : b;
      case 1e3:
        switch (y = b.substring(13).trim(), j = y.indexOf("-") + 1, y.charCodeAt(0) + y.charCodeAt(j)) {
          case 226:
            y = b.replace(u, "tb");
            break;
          case 232:
            y = b.replace(u, "tb-rl");
            break;
          case 220:
            y = b.replace(u, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + y + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (j = (b = H).length - 10, y = (b.charCodeAt(j) === 33 ? b.substring(0, j) : b).substring(H.indexOf(":", 7) + 1).trim(), N = y.charCodeAt(0) + (y.charCodeAt(7) | 0)) {
          case 203:
            if (111 > y.charCodeAt(8))
              break;
          case 115:
            b = b.replace(y, "-webkit-" + y) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(y, "-webkit-" + (102 < N ? "inline-" : "") + "box") + ";" + b.replace(y, "-webkit-" + y) + ";" + b.replace(y, "-ms-" + y + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return y = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + y + "-ms-flex-" + y + b;
            case 115:
              return "-webkit-" + b + "-ms-flex-item-" + b.replace(_, "") + b;
            default:
              return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(_, "") + b;
          }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (B.test(H) === !0)
          return (y = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(H.replace("stretch", "fill-available"), j, Z, V).replace(":fill-available", ":stretch") : b.replace(y, "-webkit-" + y) + b.replace(y, "-moz-" + y.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, Z + V === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(H, j) {
    var Z = H.indexOf(j === 1 ? ":" : "{"), V = H.substring(0, j !== 3 ? Z : 10);
    return Z = H.substring(Z + 1, H.length - 1), Q(j !== 2 ? V : V.replace(T, "$1"), Z, j);
  }
  function i(H, j) {
    var Z = o(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return Z !== j + ";" ? Z.replace(w, " or ($1)").substring(4) : "(" + j + ")";
  }
  function c(H, j, Z, V, b, N, y, Y, W, A) {
    for (var x = 0, q = j, L; x < U; ++x)
      switch (L = I[x].call(l, H, q, Z, V, b, N, y, Y, W, A)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          q = L;
      }
    if (q !== j)
      return q;
  }
  function d(H) {
    switch (H) {
      case void 0:
      case null:
        U = I.length = 0;
        break;
      default:
        if (typeof H == "function")
          I[U++] = H;
        else if (typeof H == "object")
          for (var j = 0, Z = H.length; j < Z; ++j)
            d(H[j]);
        else
          se = !!H | 0;
    }
    return d;
  }
  function a(H) {
    return H = H.prefix, H !== void 0 && (Q = null, H ? typeof H != "function" ? k = 1 : (k = 2, Q = H) : k = 0), a;
  }
  function l(H, j) {
    var Z = H;
    if (33 > Z.charCodeAt(0) && (Z = Z.trim()), oe = Z, Z = [oe], 0 < U) {
      var V = c(-1, j, Z, Z, $, G, 0, 0, 0, 0);
      V !== void 0 && typeof V == "string" && (j = V);
    }
    var b = r(R, Z, j, 0, 0);
    return 0 < U && (V = c(-2, b, Z, Z, $, G, b.length, 0, 0, 0), V !== void 0 && (b = V)), oe = "", D = 0, G = $ = 1, b;
  }
  var f = /^\0+/g, p = /[\0\r\f]/g, v = /: */g, g = /zoo|gra/, C = /([,: ])(transform)/g, h = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, J = /@(k\w+)\s*(\S*)\s*/, z = /::(place)/g, P = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, m = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, _ = /-self|flex-/g, T = /[^]*?(:[rp][el]a[\w-]+)[^]*/, B = /stretch|:\s*\w+\-(?:conte|avail)/, K = /([^-])(image-set\()/, G = 1, $ = 1, D = 0, k = 1, R = [], I = [], U = 0, Q = null, se = 0, oe = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var uo = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function fo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ho = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, An = /* @__PURE__ */ fo(
  function(e) {
    return ho.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), jt = {}, po = {
  get exports() {
    return jt;
  },
  set exports(e) {
    jt = e;
  }
}, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function mo() {
  if (In)
    return ve;
  In = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, J = e ? Symbol.for("react.scope") : 60119;
  function z(u) {
    if (typeof u == "object" && u !== null) {
      var m = u.$$typeof;
      switch (m) {
        case r:
          switch (u = u.type, u) {
            case d:
            case a:
            case n:
            case s:
            case o:
            case f:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case c:
                case l:
                case g:
                case v:
                case i:
                  return u;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  function P(u) {
    return z(u) === a;
  }
  return ve.AsyncMode = d, ve.ConcurrentMode = a, ve.ContextConsumer = c, ve.ContextProvider = i, ve.Element = r, ve.ForwardRef = l, ve.Fragment = n, ve.Lazy = g, ve.Memo = v, ve.Portal = t, ve.Profiler = s, ve.StrictMode = o, ve.Suspense = f, ve.isAsyncMode = function(u) {
    return P(u) || z(u) === d;
  }, ve.isConcurrentMode = P, ve.isContextConsumer = function(u) {
    return z(u) === c;
  }, ve.isContextProvider = function(u) {
    return z(u) === i;
  }, ve.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === r;
  }, ve.isForwardRef = function(u) {
    return z(u) === l;
  }, ve.isFragment = function(u) {
    return z(u) === n;
  }, ve.isLazy = function(u) {
    return z(u) === g;
  }, ve.isMemo = function(u) {
    return z(u) === v;
  }, ve.isPortal = function(u) {
    return z(u) === t;
  }, ve.isProfiler = function(u) {
    return z(u) === s;
  }, ve.isStrictMode = function(u) {
    return z(u) === o;
  }, ve.isSuspense = function(u) {
    return z(u) === f;
  }, ve.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === a || u === s || u === o || u === f || u === p || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === v || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === h || u.$$typeof === O || u.$$typeof === J || u.$$typeof === C);
  }, ve.typeOf = z, ve;
}
var be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function go() {
  return Yn || (Yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, J = e ? Symbol.for("react.scope") : 60119;
    function z(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === a || x === s || x === o || x === f || x === p || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === v || x.$$typeof === i || x.$$typeof === c || x.$$typeof === l || x.$$typeof === h || x.$$typeof === O || x.$$typeof === J || x.$$typeof === C);
    }
    function P(x) {
      if (typeof x == "object" && x !== null) {
        var q = x.$$typeof;
        switch (q) {
          case r:
            var L = x.type;
            switch (L) {
              case d:
              case a:
              case n:
              case s:
              case o:
              case f:
                return L;
              default:
                var X = L && L.$$typeof;
                switch (X) {
                  case c:
                  case l:
                  case g:
                  case v:
                  case i:
                    return X;
                  default:
                    return q;
                }
            }
          case t:
            return q;
        }
      }
    }
    var u = d, m = a, w = c, _ = i, T = r, B = l, K = n, G = g, $ = v, D = t, k = s, R = o, I = f, U = !1;
    function Q(x) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(x) || P(x) === d;
    }
    function se(x) {
      return P(x) === a;
    }
    function oe(x) {
      return P(x) === c;
    }
    function H(x) {
      return P(x) === i;
    }
    function j(x) {
      return typeof x == "object" && x !== null && x.$$typeof === r;
    }
    function Z(x) {
      return P(x) === l;
    }
    function V(x) {
      return P(x) === n;
    }
    function b(x) {
      return P(x) === g;
    }
    function N(x) {
      return P(x) === v;
    }
    function y(x) {
      return P(x) === t;
    }
    function Y(x) {
      return P(x) === s;
    }
    function W(x) {
      return P(x) === o;
    }
    function A(x) {
      return P(x) === f;
    }
    be.AsyncMode = u, be.ConcurrentMode = m, be.ContextConsumer = w, be.ContextProvider = _, be.Element = T, be.ForwardRef = B, be.Fragment = K, be.Lazy = G, be.Memo = $, be.Portal = D, be.Profiler = k, be.StrictMode = R, be.Suspense = I, be.isAsyncMode = Q, be.isConcurrentMode = se, be.isContextConsumer = oe, be.isContextProvider = H, be.isElement = j, be.isForwardRef = Z, be.isFragment = V, be.isLazy = b, be.isMemo = N, be.isPortal = y, be.isProfiler = Y, be.isStrictMode = W, be.isSuspense = A, be.isValidElementType = z, be.typeOf = P;
  }()), be;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = mo() : e.exports = go();
})(po);
var gn = jt, yo = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, vo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, bo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, kr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yn = {};
yn[gn.ForwardRef] = bo;
yn[gn.Memo] = kr;
function On(e) {
  return gn.isMemo(e) ? kr : yn[e.$$typeof] || yo;
}
var xo = Object.defineProperty, wo = Object.getOwnPropertyNames, Ln = Object.getOwnPropertySymbols, So = Object.getOwnPropertyDescriptor, Co = Object.getPrototypeOf, Rn = Object.prototype;
function Dr(e, r, t) {
  if (typeof r != "string") {
    if (Rn) {
      var n = Co(r);
      n && n !== Rn && Dr(e, n, t);
    }
    var o = wo(r);
    Ln && (o = o.concat(Ln(r)));
    for (var s = On(e), i = On(r), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!vo[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = So(r, d);
        try {
          xo(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Mo = Dr;
function Ye() {
  return (Ye = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Nn = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, Zt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !vt.typeOf(e);
}, _t = Object.freeze([]), ze = Object.freeze({});
function ct(e) {
  return typeof e == "function";
}
function Vt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function vn(e) {
  return e && typeof e.styledComponentId == "string";
}
var lt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", bn = typeof window < "u" && "HTMLElement" in window, ko = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Do = {}, $o = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Eo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ne(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Eo.apply(void 0, [$o[e]].concat(t)).trim());
}
var _o = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++)
      n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && Ne(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = s; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(t + 1), a = 0, l = n.length; a < l; a++)
      this.tag.insertRule(d, n[a]) && (this.groupSizes[t]++, d++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, c = s; c < i; c++)
      n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), $t = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), gt = 1, Mt = function(e) {
  if ($t.has(e))
    return $t.get(e);
  for (; Tt.has(gt); )
    gt++;
  var r = gt++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ne(16, "" + r), $t.set(e, r), Tt.set(r, e), r;
}, To = function(e) {
  return Tt.get(e);
}, Po = function(e, r) {
  r >= gt && (gt = r + 1), $t.set(e, r), Tt.set(r, e);
}, Ao = "style[" + lt + '][data-styled-version="5.3.8"]', Io = new RegExp("^" + lt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Yo = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, Oo = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Io);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (Po(a, d), Yo(e, a, c[3]), e.getTag().insertRules(d, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Lo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, $r = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(lt))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(lt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = Lo();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, Ro = function() {
  function e(t) {
    var n = this.element = $r(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var d = s[i];
        if (d.ownerNode === o)
          return d;
      }
      Ne(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), No = function() {
  function e(t) {
    var n = this.element = $r(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Fo = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Fn = bn, Wo = { isServer: !bn, useCSSOMInjection: !ko }, Pt = function() {
  function e(t, n, o) {
    t === void 0 && (t = ze), n === void 0 && (n = {}), this.options = Ye({}, Wo, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && bn && Fn && (Fn = !1, function(s) {
      for (var i = document.querySelectorAll(Ao), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(lt) !== "active" && (Oo(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Mt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ye({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new Fo(i) : s ? new Ro(i) : new No(i), new _o(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Mt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Mt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Mt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = To(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = n.getGroup(i);
          if (d && a && d.size) {
            var l = lt + ".g" + i + '[id="' + c + '"]', f = "";
            d !== void 0 && d.forEach(function(p) {
              p.length > 0 && (f += p + ",");
            }), s += "" + a + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Ho = /(a)(d)/gi, Wn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Gt(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Wn(r % 52) + t;
  return (Wn(r % 52) + t).replace(Ho, "$1-$2");
}
var Ve = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Er = function(e) {
  return Ve(5381, e);
};
function _r(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (ct(t) && !vn(t))
      return !1;
  }
  return !0;
}
var zo = Er("5.3.8"), Bo = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && _r(r), this.componentId = t, this.baseHash = Ve(zo, t), this.baseStyle = n, Pt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Ke(this.rules, r, t, n).join(""), c = Gt(Ve(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = n(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = Ve(this.baseHash, n.hash), f = "", p = 0; p < a; p++) {
        var v = this.rules[p];
        if (typeof v == "string")
          f += v, process.env.NODE_ENV !== "production" && (l = Ve(l, v + p));
        else if (v) {
          var g = Ke(v, r, t, n), C = Array.isArray(g) ? g.join("") : g;
          l = Ve(l, C + p), f += C;
        }
      }
      if (f) {
        var h = Gt(l >>> 0);
        if (!t.hasNameForId(o, h)) {
          var O = n(f, "." + h, void 0, o);
          t.insertRules(o, h, O);
        }
        s.push(h);
      }
    }
    return s.join(" ");
  }, e;
}(), jo = /^\s*\/\/.*$/gm, Zo = [":", "[", ".", "#"];
function Vo(e) {
  var r, t, n, o, s = e === void 0 ? ze : e, i = s.options, c = i === void 0 ? ze : i, d = s.plugins, a = d === void 0 ? _t : d, l = new lo(c), f = [], p = function(C) {
    function h(O) {
      if (O)
        try {
          C(O + "}");
        } catch {
        }
    }
    return function(O, J, z, P, u, m, w, _, T, B) {
      switch (O) {
        case 1:
          if (T === 0 && J.charCodeAt(0) === 64)
            return C(J + ";"), "";
          break;
        case 2:
          if (_ === 0)
            return J + "/*|*/";
          break;
        case 3:
          switch (_) {
            case 102:
            case 112:
              return C(z[0] + J), "";
            default:
              return J + (B === 0 ? "/*|*/" : "");
          }
        case -2:
          J.split("/*|*/}").forEach(h);
      }
    };
  }(function(C) {
    f.push(C);
  }), v = function(C, h, O) {
    return h === 0 && Zo.indexOf(O[t.length]) !== -1 || O.match(o) ? C : "." + r;
  };
  function g(C, h, O, J) {
    J === void 0 && (J = "&");
    var z = C.replace(jo, ""), P = h && O ? O + " " + h + " { " + z + " }" : z;
    return r = J, t = h, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(O || !h ? "" : h, P);
  }
  return l.use([].concat(a, [function(C, h, O) {
    C === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(n, v));
  }, p, function(C) {
    if (C === -2) {
      var h = f;
      return f = [], h;
    }
  }])), g.hash = a.length ? a.reduce(function(C, h) {
    return h.name || Ne(15), Ve(C, h.name);
  }, 5381).toString() : "", g;
}
var Tr = Ue.createContext();
Tr.Consumer;
var Pr = Ue.createContext(), Go = (Pr.Consumer, new Pt()), Xt = Vo();
function Ar() {
  return Be(Tr) || Go;
}
function Ir() {
  return Be(Pr) || Xt;
}
var Yr = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Xt);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ne(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Xt), this.name + r.hash;
  }, e;
}(), Xo = /([A-Z])/, Uo = /([A-Z])/g, Ko = /^ms-/, Jo = function(e) {
  return "-" + e.toLowerCase();
};
function Hn(e) {
  return Xo.test(e) ? e.replace(Uo, Jo).replace(Ko, "-ms-") : e;
}
var zn = function(e) {
  return e == null || e === !1 || e === "";
};
function Ke(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = Ke(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (zn(e))
    return "";
  if (vn(e))
    return "." + e.styledComponentId;
  if (ct(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var d = e(r);
    return process.env.NODE_ENV !== "production" && vt.isElement(d) && console.warn(Vt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ke(d, r, t, n);
  }
  var a;
  return e instanceof Yr ? t ? (e.inject(t, n), e.getName(n)) : e : Zt(e) ? function l(f, p) {
    var v, g, C = [];
    for (var h in f)
      f.hasOwnProperty(h) && !zn(f[h]) && (Array.isArray(f[h]) && f[h].isCss || ct(f[h]) ? C.push(Hn(h) + ":", f[h], ";") : Zt(f[h]) ? C.push.apply(C, l(f[h], h)) : C.push(Hn(h) + ": " + (v = h, (g = f[h]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || v in uo ? String(g).trim() : g + "px") + ";"));
    return p ? [p + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var Bn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Yt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return ct(e) || Zt(e) ? Bn(Ke(Nn(_t, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Bn(Ke(Nn(e, t)));
}
var jn = /invalid hook call/i, kt = /* @__PURE__ */ new Set(), Or = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (jn.test(s))
          o = !1, kt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          n.apply(void 0, [s].concat(c));
        }
      }, we(), o && !kt.has(t) && (console.warn(t), kt.add(t));
    } catch (s) {
      jn.test(s.message) && kt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Lr = function(e, r, t) {
  return t === void 0 && (t = ze), e.theme !== t.theme && e.theme || r || t.theme;
}, qo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Qo = /(^-|-$)/g;
function Rt(e) {
  return e.replace(qo, "-").replace(Qo, "");
}
var xn = function(e) {
  return Gt(Er(e) >>> 0);
};
function Dt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ut = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, es = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ts(e, r, t) {
  var n = e[t];
  Ut(r) && Ut(n) ? Rr(n, r) : e[t] = r;
}
function Rr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Ut(i))
      for (var c in i)
        es(c) && ts(e, i[c], c);
  }
  return e;
}
var dt = Ue.createContext();
dt.Consumer;
function ns(e) {
  var r = Be(dt), t = Ee(function() {
    return function(n, o) {
      if (!n)
        return Ne(14);
      if (ct(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ne(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Ne(8) : o ? Ye({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? Ue.createElement(dt.Provider, { value: t }, e.children) : null;
}
var Nt = {};
function Nr(e, r, t) {
  var n = vn(e), o = !Dt(e), s = r.attrs, i = s === void 0 ? _t : s, c = r.componentId, d = c === void 0 ? function(J, z) {
    var P = typeof J != "string" ? "sc" : Rt(J);
    Nt[P] = (Nt[P] || 0) + 1;
    var u = P + "-" + xn("5.3.8" + P + Nt[P]);
    return z ? z + "-" + u : u;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, l = a === void 0 ? function(J) {
    return Dt(J) ? "styled." + J : "Styled(" + Vt(J) + ")";
  }(e) : a, f = r.displayName && r.componentId ? Rt(r.displayName) + "-" + r.componentId : r.componentId || d, p = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, v = r.shouldForwardProp;
  n && e.shouldForwardProp && (v = r.shouldForwardProp ? function(J, z, P) {
    return e.shouldForwardProp(J, z, P) && r.shouldForwardProp(J, z, P);
  } : e.shouldForwardProp);
  var g, C = new Bo(t, f, n ? e.componentStyle : void 0), h = C.isStatic && i.length === 0, O = function(J, z) {
    return function(P, u, m, w) {
      var _ = P.attrs, T = P.componentStyle, B = P.defaultProps, K = P.foldedComponentIds, G = P.shouldForwardProp, $ = P.styledComponentId, D = P.target;
      process.env.NODE_ENV !== "production" && _n($);
      var k = function(V, b, N) {
        V === void 0 && (V = ze);
        var y = Ye({}, b, { theme: V }), Y = {};
        return N.forEach(function(W) {
          var A, x, q, L = W;
          for (A in ct(L) && (L = L(y)), L)
            y[A] = Y[A] = A === "className" ? (x = Y[A], q = L[A], x && q ? x + " " + q : x || q) : L[A];
        }), [y, Y];
      }(Lr(u, Be(dt), B) || ze, u, _), R = k[0], I = k[1], U = function(V, b, N, y) {
        var Y = Ar(), W = Ir(), A = b ? V.generateAndInjectStyles(ze, Y, W) : V.generateAndInjectStyles(N, Y, W);
        return process.env.NODE_ENV !== "production" && _n(A), process.env.NODE_ENV !== "production" && !b && y && y(A), A;
      }(T, w, R, process.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), Q = m, se = I.$as || u.$as || I.as || u.as || D, oe = Dt(se), H = I !== u ? Ye({}, u, {}, I) : u, j = {};
      for (var Z in H)
        Z[0] !== "$" && Z !== "as" && (Z === "forwardedAs" ? j.as = H[Z] : (G ? G(Z, An, se) : !oe || An(Z)) && (j[Z] = H[Z]));
      return u.style && I.style !== u.style && (j.style = Ye({}, u.style, {}, I.style)), j.className = Array.prototype.concat(K, $, U !== $ ? U : null, u.className, I.className).filter(Boolean).join(" "), j.ref = Q, oo(se, j);
    }(g, J, z, h);
  };
  return O.displayName = l, (g = Ue.forwardRef(O)).attrs = p, g.componentStyle = C, g.displayName = l, g.shouldForwardProp = v, g.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : _t, g.styledComponentId = f, g.target = n ? e.target : e, g.withComponent = function(J) {
    var z = r.componentId, P = function(m, w) {
      if (m == null)
        return {};
      var _, T, B = {}, K = Object.keys(m);
      for (T = 0; T < K.length; T++)
        _ = K[T], w.indexOf(_) >= 0 || (B[_] = m[_]);
      return B;
    }(r, ["componentId"]), u = z && z + "-" + (Dt(J) ? J : Rt(Vt(J)));
    return Nr(J, Ye({}, P, { attrs: p, componentId: u }), t);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(J) {
    this._foldedDefaultProps = n ? Rr({}, e.defaultProps, J) : J;
  } }), process.env.NODE_ENV !== "production" && (Or(l, f), g.warnTooManyClasses = function(J, z) {
    var P = {}, u = !1;
    return function(m) {
      if (!u && (P[m] = !0, Object.keys(P).length >= 200)) {
        var w = z ? ' with the id of "' + z + '"' : "";
        console.warn("Over 200 classes were generated for component " + J + w + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, P = {};
      }
    };
  }(l, f)), g.toString = function() {
    return "." + g.styledComponentId;
  }, o && Mo(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var Kt = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = ze), !vt.isValidElementType(n))
      return Ne(1, String(n));
    var s = function() {
      return t(n, o, Yt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Ye({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Ye({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Nr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Kt[e] = Kt(e);
});
var rs = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = _r(t), Pt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(Ke(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && Pt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function os(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Yt.apply(void 0, [e].concat(t)), s = "sc-global-" + xn(JSON.stringify(o)), i = new rs(o, s);
  function c(a) {
    var l = Ar(), f = Ir(), p = Be(dt), v = we(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Ue.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(g) {
      return typeof g == "string" && g.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(v, a, l, p, f), wr(function() {
      if (!l.server)
        return d(v, a, l, p, f), function() {
          return i.removeStyles(v, l);
        };
    }, [v, a, l, p, f]), null;
  }
  function d(a, l, f, p, v) {
    if (i.isStatic)
      i.renderStyles(a, Do, f, v);
    else {
      var g = Ye({}, l, { theme: Lr(l, p, c.defaultProps) });
      i.renderStyles(a, g, f, v);
    }
  }
  return process.env.NODE_ENV !== "production" && Or(s), Ue.memo(c);
}
function Ot(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Yt.apply(void 0, [e].concat(t)).join(""), s = xn(o);
  return new Yr(s, o);
}
var Qe = function() {
  return Be(dt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const S = Kt, mt = "reactSchedulerOutsideWrapper", ss = os`

  #${mt} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${mt} *,
 #${mt} *:before,
 #${mt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, is = {
  mode: "light",
  navHeight: "44px",
  colors: {
    background: "#FFFFFF",
    gridBackground: "#FFFFFF",
    primary: "#F8F8FD",
    secondary: "#E6F3FF",
    tertiary: "#C9E5FF",
    textPrimary: "#1C222F",
    textSecondary: "#FFFFFF",
    placeholder: "#777777",
    button: "#FFFFFF",
    border: "#D2D2D2",
    tooltip: "#3B3C5F",
    hover: "#E6F3FF",
    disabled: "#777777",
    warning: "#EF4444",
    defaultTile: "#728DE2",
    accent: "#0A11EB",
    currentDay: "#B3D9FF",
    subcontractBg: "#FFF7ED",
    subcontractBorder: "#F59E0B",
    subcontractText: "#92400E"
  }
}, as = {
  mode: "dark",
  navHeight: "44px",
  colors: {
    background: "#161B22",
    gridBackground: "#1E252E",
    primary: "#303b49",
    secondary: "#444e5b",
    tertiary: "#6E757F",
    textPrimary: "#DADCE0",
    textSecondary: "#EAEBED",
    placeholder: "#bbbbbb",
    button: "#60676f",
    border: "#2C333A",
    hover: "#303439",
    tooltip: "#3B3C5F",
    disabled: "#38414a",
    warning: "#FF4C4C",
    defaultTile: "#728DE2",
    accent: "#1798c2",
    currentDay: "#2A4A6B",
    subcontractBg: "#422006",
    subcontractBorder: "#D97706",
    subcontractText: "#FCD34D"
  }
}, et = `
margin: 0;
padding: 0;
`, wt = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
S.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Se = 50, Fe = 24, pt = 16, Xe = 40, ut = Xe + pt + Fe, ft = 84, me = 56, Pe = 196, Ie = 12, $e = 50, ht = 24, bt = 16, Jt = 40, cs = ht + bt + Jt, Zn = 24, Vn = 52, Oe = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter",
    hoursInDay: "400 9px Inter"
  }
}, at = 3, ls = 1.6, ds = 4.5, qt = 12, At = 24, us = "reactSchedulerCanvasHeaderWrapper", Fr = "reactSchedulerCanvasWrapper", Je = mt, fs = 4, wn = 48, He = 5, hs = 40, Gn = 8, Sn = Fe / 2 + 2, Wr = pt / 2 + Fe + 1, Xn = 2, Ce = 60, Te = 21;
var qe = {}, ps = {
  get exports() {
    return qe;
  },
  set exports(e) {
    qe = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(De, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", p = "quarter", v = "year", g = "date", C = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, J = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var D = ["th", "st", "nd", "rd"], k = $ % 100;
      return "[" + $ + (D[(k - 20) % 10] || D[k] || D[0]) + "]";
    } }, z = function($, D, k) {
      var R = String($);
      return !R || R.length >= D ? $ : "" + Array(D + 1 - R.length).join(k) + $;
    }, P = { s: z, z: function($) {
      var D = -$.utcOffset(), k = Math.abs(D), R = Math.floor(k / 60), I = k % 60;
      return (D <= 0 ? "+" : "-") + z(R, 2, "0") + ":" + z(I, 2, "0");
    }, m: function $(D, k) {
      if (D.date() < k.date())
        return -$(k, D);
      var R = 12 * (k.year() - D.year()) + (k.month() - D.month()), I = D.clone().add(R, f), U = k - I < 0, Q = D.clone().add(R + (U ? -1 : 1), f);
      return +(-(R + (k - I) / (U ? I - Q : Q - I)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: f, y: v, w: l, d: a, D: g, h: d, m: c, s: i, ms: s, Q: p }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, u = "en", m = {};
    m[u] = J;
    var w = function($) {
      return $ instanceof K;
    }, _ = function $(D, k, R) {
      var I;
      if (!D)
        return u;
      if (typeof D == "string") {
        var U = D.toLowerCase();
        m[U] && (I = U), k && (m[U] = k, I = U);
        var Q = D.split("-");
        if (!I && Q.length > 1)
          return $(Q[0]);
      } else {
        var se = D.name;
        m[se] = D, I = se;
      }
      return !R && I && (u = I), I || !R && u;
    }, T = function($, D) {
      if (w($))
        return $.clone();
      var k = typeof D == "object" ? D : {};
      return k.date = $, k.args = arguments, new K(k);
    }, B = P;
    B.l = _, B.i = w, B.w = function($, D) {
      return T($, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var K = function() {
      function $(k) {
        this.$L = _(k.locale, null, !0), this.parse(k);
      }
      var D = $.prototype;
      return D.parse = function(k) {
        this.$d = function(R) {
          var I = R.date, U = R.utc;
          if (I === null)
            return new Date(NaN);
          if (B.u(I))
            return new Date();
          if (I instanceof Date)
            return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var Q = I.match(h);
            if (Q) {
              var se = Q[2] - 1 || 0, oe = (Q[7] || "0").substring(0, 3);
              return U ? new Date(Date.UTC(Q[1], se, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, oe)) : new Date(Q[1], se, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, oe);
            }
          }
          return new Date(I);
        }(k), this.$x = k.x || {}, this.init();
      }, D.init = function() {
        var k = this.$d;
        this.$y = k.getFullYear(), this.$M = k.getMonth(), this.$D = k.getDate(), this.$W = k.getDay(), this.$H = k.getHours(), this.$m = k.getMinutes(), this.$s = k.getSeconds(), this.$ms = k.getMilliseconds();
      }, D.$utils = function() {
        return B;
      }, D.isValid = function() {
        return this.$d.toString() !== C;
      }, D.isSame = function(k, R) {
        var I = T(k);
        return this.startOf(R) <= I && I <= this.endOf(R);
      }, D.isAfter = function(k, R) {
        return T(k) < this.startOf(R);
      }, D.isBefore = function(k, R) {
        return this.endOf(R) < T(k);
      }, D.$g = function(k, R, I) {
        return B.u(k) ? this[R] : this.set(I, k);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(k, R) {
        var I = this, U = !!B.u(R) || R, Q = B.p(k), se = function(y, Y) {
          var W = B.w(I.$u ? Date.UTC(I.$y, Y, y) : new Date(I.$y, Y, y), I);
          return U ? W : W.endOf(a);
        }, oe = function(y, Y) {
          return B.w(I.toDate()[y].apply(I.toDate("s"), (U ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), I);
        }, H = this.$W, j = this.$M, Z = this.$D, V = "set" + (this.$u ? "UTC" : "");
        switch (Q) {
          case v:
            return U ? se(1, 0) : se(31, 11);
          case f:
            return U ? se(1, j) : se(0, j + 1);
          case l:
            var b = this.$locale().weekStart || 0, N = (H < b ? H + 7 : H) - b;
            return se(U ? Z - N : Z + (6 - N), j);
          case a:
          case g:
            return oe(V + "Hours", 0);
          case d:
            return oe(V + "Minutes", 1);
          case c:
            return oe(V + "Seconds", 2);
          case i:
            return oe(V + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, D.endOf = function(k) {
        return this.startOf(k, !1);
      }, D.$set = function(k, R) {
        var I, U = B.p(k), Q = "set" + (this.$u ? "UTC" : ""), se = (I = {}, I[a] = Q + "Date", I[g] = Q + "Date", I[f] = Q + "Month", I[v] = Q + "FullYear", I[d] = Q + "Hours", I[c] = Q + "Minutes", I[i] = Q + "Seconds", I[s] = Q + "Milliseconds", I)[U], oe = U === a ? this.$D + (R - this.$W) : R;
        if (U === f || U === v) {
          var H = this.clone().set(g, 1);
          H.$d[se](oe), H.init(), this.$d = H.set(g, Math.min(this.$D, H.daysInMonth())).$d;
        } else
          se && this.$d[se](oe);
        return this.init(), this;
      }, D.set = function(k, R) {
        return this.clone().$set(k, R);
      }, D.get = function(k) {
        return this[B.p(k)]();
      }, D.add = function(k, R) {
        var I, U = this;
        k = Number(k);
        var Q = B.p(R), se = function(j) {
          var Z = T(U);
          return B.w(Z.date(Z.date() + Math.round(j * k)), U);
        };
        if (Q === f)
          return this.set(f, this.$M + k);
        if (Q === v)
          return this.set(v, this.$y + k);
        if (Q === a)
          return se(1);
        if (Q === l)
          return se(7);
        var oe = (I = {}, I[c] = n, I[d] = o, I[i] = t, I)[Q] || 1, H = this.$d.getTime() + k * oe;
        return B.w(H, this);
      }, D.subtract = function(k, R) {
        return this.add(-1 * k, R);
      }, D.format = function(k) {
        var R = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || C;
        var U = k || "YYYY-MM-DDTHH:mm:ssZ", Q = B.z(this), se = this.$H, oe = this.$m, H = this.$M, j = I.weekdays, Z = I.months, V = function(Y, W, A, x) {
          return Y && (Y[W] || Y(R, U)) || A[W].slice(0, x);
        }, b = function(Y) {
          return B.s(se % 12 || 12, Y, "0");
        }, N = I.meridiem || function(Y, W, A) {
          var x = Y < 12 ? "AM" : "PM";
          return A ? x.toLowerCase() : x;
        }, y = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: H + 1, MM: B.s(H + 1, 2, "0"), MMM: V(I.monthsShort, H, Z, 3), MMMM: V(Z, H), D: this.$D, DD: B.s(this.$D, 2, "0"), d: String(this.$W), dd: V(I.weekdaysMin, this.$W, j, 2), ddd: V(I.weekdaysShort, this.$W, j, 3), dddd: j[this.$W], H: String(se), HH: B.s(se, 2, "0"), h: b(1), hh: b(2), a: N(se, oe, !0), A: N(se, oe, !1), m: String(oe), mm: B.s(oe, 2, "0"), s: String(this.$s), ss: B.s(this.$s, 2, "0"), SSS: B.s(this.$ms, 3, "0"), Z: Q };
        return U.replace(O, function(Y, W) {
          return W || y[Y] || Q.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(k, R, I) {
        var U, Q = B.p(R), se = T(k), oe = (se.utcOffset() - this.utcOffset()) * n, H = this - se, j = B.m(this, se);
        return j = (U = {}, U[v] = j / 12, U[f] = j, U[p] = j / 3, U[l] = (H - oe) / 6048e5, U[a] = (H - oe) / 864e5, U[d] = H / o, U[c] = H / n, U[i] = H / t, U)[Q] || H, I ? j : B.a(j);
      }, D.daysInMonth = function() {
        return this.endOf(f).$D;
      }, D.$locale = function() {
        return m[this.$L];
      }, D.locale = function(k, R) {
        if (!k)
          return this.$L;
        var I = this.clone(), U = _(k, R, !0);
        return U && (I.$L = U), I;
      }, D.clone = function() {
        return B.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), G = K.prototype;
    return T.prototype = G, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", v], ["$D", g]].forEach(function($) {
      G[$[1]] = function(D) {
        return this.$g(D, $[0], $[1]);
      };
    }), T.extend = function($, D) {
      return $.$i || ($(D, K, T), $.$i = !0), T;
    }, T.locale = _, T.isDayjs = w, T.unix = function($) {
      return T(1e3 * $);
    }, T.en = m[u], T.Ls = m, T.p = {}, T;
  });
})(ps);
const E = qe, Un = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Cn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, Hr = (e, r) => E(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), zr = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Cn(e),
  isCurrentDay: e.isSame(E(), "day"),
  year: parseInt(e.format("YYYY"))
}), Mn = (e, r, t, n, o, s, i) => {
  e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, me), e.strokeRect(r + 0.5, t + 0.5, n, me);
}, kn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Te;
}, ms = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = kn(i, s);
    for (let d = 0; d <= t; d++) {
      const a = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(E(), "day");
      Mn(e, d * Se, i * me + c, Se, Cn(a), l, o);
    }
  }
}, gs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, ys = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Ie;
  const d = r * me + s.length * Te;
  for (let a = 0; a <= t; a++) {
    const f = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(E(), "week");
    for (let p = 0; p < r; p++) {
      const v = kn(p, s);
      Mn(e, i, p * me + v, ft, !0, f, o);
    }
    i += ft;
  }
  for (let a = 0; a < t; a++) {
    const l = Hr(n, a) * Ie;
    gs(e, c, d, o), c += l;
  }
}, vs = (e, r, t, n, o, s = []) => {
  const i = E(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const d = kn(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = E() : a > Math.floor(t / 2) ? l = E().add(a - Math.floor(t / 2), "hours") : l = E().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(E(), "day") && l.isSame(E(), "hour");
      Mn(
        e,
        a * $e + $e / 2 - 0.5,
        c * me + d,
        $e,
        Cn(l),
        f,
        o
      );
    }
  }
}, bs = (e, r, t, n) => {
  const o = t * me + r * Te, s = e.canvas.width, i = o + Te / 2;
  e.fillStyle = n.mode === "dark" ? n.colors.primary + "80" : n.colors.primary, e.fillRect(0, o, s, Te), e.strokeStyle = n.colors.border, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, i + 0.5), e.lineTo(s, i + 0.5), e.stroke();
}, xs = (e, r, t, n, o, s, i = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(Fr)) {
    switch (r) {
      case 0:
        ys(e, t, n, o, s, i);
        break;
      case 1:
        ms(e, t, n, o, s, i);
        break;
      case 2:
        vs(e, t, n, o, s, i);
        break;
    }
    for (let d = 0; d < i.length; d++)
      bs(e, d, i[d], s);
  }
};
var Qt = {}, ws = {
  get exports() {
    return Qt;
  },
  set exports(e) {
    Qt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(De, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(d) {
        if (d === void 0 && (d = null), d !== null)
          return this.add(7 * (d - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var l = i(this).startOf(n).add(1, n).date(a), f = i(this).endOf(t);
          if (l.isBefore(f))
            return 1;
        }
        var p = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), v = this.diff(p, t, !0);
        return v < 0 ? i(this).startOf("week").week() : Math.ceil(v);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(ws);
const Ss = Qt;
var en = {}, Cs = {
  get exports() {
    return en;
  },
  set exports(e) {
    en = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(De, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Cs);
const Ms = en;
var tn = {}, ks = {
  get exports() {
    return tn;
  },
  set exports(e) {
    tn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(De, function() {
    var t = "day";
    return function(n, o, s) {
      var i = function(a) {
        return a.add(4 - a.isoWeekday(), t);
      }, c = o.prototype;
      c.isoWeekYear = function() {
        return i(this).year();
      }, c.isoWeek = function(a) {
        if (!this.$utils().u(a))
          return this.add(7 * (a - this.isoWeek()), t);
        var l, f, p, v, g = i(this), C = (l = this.isoWeekYear(), f = this.$u, p = (f ? s.utc : s)().year(l).startOf("year"), v = 4 - p.isoWeekday(), p.isoWeekday() > 4 && (v += 7), p.add(v, t));
        return g.diff(C, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var d = c.startOf;
      c.startOf = function(a, l) {
        var f = this.$utils(), p = !!f.u(l) || l;
        return f.p(a) === "isoweek" ? p ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : d.bind(this)(a, l);
      };
    };
  });
})(ks);
const Ds = tn;
var nn = {}, $s = {
  get exports() {
    return nn;
  },
  set exports(e) {
    nn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(De, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), f = (d = d || "()")[0] === "(", p = d[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (p ? this.isBefore(l, c) : !this.isAfter(l, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (p ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})($s);
const Es = nn;
var rn = {}, _s = {
  get exports() {
    return rn;
  },
  set exports(e) {
    rn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(De, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, p = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, v = function(u) {
      return u instanceof P;
    }, g = function(u, m, w) {
      return new P(u, w, m.$l);
    }, C = function(u) {
      return n.p(u) + "s";
    }, h = function(u) {
      return u < 0;
    }, O = function(u) {
      return h(u) ? Math.ceil(u) : Math.floor(u);
    }, J = function(u) {
      return Math.abs(u);
    }, z = function(u, m) {
      return u ? h(u) ? { negative: !0, format: "" + J(u) + m } : { negative: !1, format: "" + u + m } : { negative: !1, format: "" };
    }, P = function() {
      function u(w, _, T) {
        var B = this;
        if (this.$d = {}, this.$l = T, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), _)
          return g(w * p[C(_)], this);
        if (typeof w == "number")
          return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object")
          return Object.keys(w).forEach(function($) {
            B.$d[C($)] = w[$];
          }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var K = w.match(f);
          if (K) {
            var G = K.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = G[0], this.$d.months = G[1], this.$d.weeks = G[2], this.$d.days = G[3], this.$d.hours = G[4], this.$d.minutes = G[5], this.$d.seconds = G[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var m = u.prototype;
      return m.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(_, T) {
          return _ + (w.$d[T] || 0) * p[T];
        }, 0);
      }, m.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = O(w / a), w %= a, this.$d.months = O(w / l), w %= l, this.$d.days = O(w / c), w %= c, this.$d.hours = O(w / i), w %= i, this.$d.minutes = O(w / s), w %= s, this.$d.seconds = O(w / o), w %= o, this.$d.milliseconds = w;
      }, m.toISOString = function() {
        var w = z(this.$d.years, "Y"), _ = z(this.$d.months, "M"), T = +this.$d.days || 0;
        this.$d.weeks && (T += 7 * this.$d.weeks);
        var B = z(T, "D"), K = z(this.$d.hours, "H"), G = z(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3);
        var D = z($, "S"), k = w.negative || _.negative || B.negative || K.negative || G.negative || D.negative, R = K.format || G.format || D.format ? "T" : "", I = (k ? "-" : "") + "P" + w.format + _.format + B.format + R + K.format + G.format + D.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, m.toJSON = function() {
        return this.toISOString();
      }, m.format = function(w) {
        var _ = w || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return _.replace(d, function(B, K) {
          return K || String(T[B]);
        });
      }, m.as = function(w) {
        return this.$ms / p[C(w)];
      }, m.get = function(w) {
        var _ = this.$ms, T = C(w);
        return T === "milliseconds" ? _ %= 1e3 : _ = T === "weeks" ? O(_ / p[T]) : this.$d[T], _ === 0 ? 0 : _;
      }, m.add = function(w, _, T) {
        var B;
        return B = _ ? w * p[C(_)] : v(w) ? w.$ms : g(w, this).$ms, g(this.$ms + B * (T ? -1 : 1), this);
      }, m.subtract = function(w, _) {
        return this.add(w, _, !0);
      }, m.locale = function(w) {
        var _ = this.clone();
        return _.$l = w, _;
      }, m.clone = function() {
        return g(this.$ms, this);
      }, m.humanize = function(w) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, m.milliseconds = function() {
        return this.get("milliseconds");
      }, m.asMilliseconds = function() {
        return this.as("milliseconds");
      }, m.seconds = function() {
        return this.get("seconds");
      }, m.asSeconds = function() {
        return this.as("seconds");
      }, m.minutes = function() {
        return this.get("minutes");
      }, m.asMinutes = function() {
        return this.as("minutes");
      }, m.hours = function() {
        return this.get("hours");
      }, m.asHours = function() {
        return this.as("hours");
      }, m.days = function() {
        return this.get("days");
      }, m.asDays = function() {
        return this.as("days");
      }, m.weeks = function() {
        return this.get("weeks");
      }, m.asWeeks = function() {
        return this.as("weeks");
      }, m.months = function() {
        return this.get("months");
      }, m.asMonths = function() {
        return this.as("months");
      }, m.years = function() {
        return this.get("years");
      }, m.asYears = function() {
        return this.as("years");
      }, u;
    }();
    return function(u, m, w) {
      t = w, n = w().$utils(), w.duration = function(B, K) {
        var G = w.locale();
        return g(B, { $l: G }, K);
      }, w.isDuration = v;
      var _ = m.prototype.add, T = m.prototype.subtract;
      m.prototype.add = function(B, K) {
        return v(B) && (B = B.asMilliseconds()), _.bind(this)(B, K);
      }, m.prototype.subtract = function(B, K) {
        return v(B) && (B = B.asMilliseconds()), T.bind(this)(B, K);
      };
    };
  });
})(_s);
const Ts = rn;
var Ps = "Expected a function", Kn = 0 / 0, As = "[object Symbol]", Is = /^\s+|\s+$/g, Ys = /^[-+]0x[0-9a-f]+$/i, Os = /^0b[01]+$/i, Ls = /^0o[0-7]+$/i, Rs = parseInt, Ns = typeof De == "object" && De && De.Object === Object && De, Fs = typeof self == "object" && self && self.Object === Object && self, Ws = Ns || Fs || Function("return this")(), Hs = Object.prototype, zs = Hs.toString, Bs = Math.max, js = Math.min, Ft = function() {
  return Ws.Date.now();
};
function Zs(e, r, t) {
  var n, o, s, i, c, d, a = 0, l = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Ps);
  r = Jn(r) || 0, on(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? Bs(Jn(t.maxWait) || 0, r) : s, p = "trailing" in t ? !!t.trailing : p);
  function v(m) {
    var w = n, _ = o;
    return n = o = void 0, a = m, i = e.apply(_, w), i;
  }
  function g(m) {
    return a = m, c = setTimeout(O, r), l ? v(m) : i;
  }
  function C(m) {
    var w = m - d, _ = m - a, T = r - w;
    return f ? js(T, s - _) : T;
  }
  function h(m) {
    var w = m - d, _ = m - a;
    return d === void 0 || w >= r || w < 0 || f && _ >= s;
  }
  function O() {
    var m = Ft();
    if (h(m))
      return J(m);
    c = setTimeout(O, C(m));
  }
  function J(m) {
    return c = void 0, p && n ? v(m) : (n = o = void 0, i);
  }
  function z() {
    c !== void 0 && clearTimeout(c), a = 0, n = d = o = c = void 0;
  }
  function P() {
    return c === void 0 ? i : J(Ft());
  }
  function u() {
    var m = Ft(), w = h(m);
    if (n = arguments, o = this, d = m, w) {
      if (c === void 0)
        return g(d);
      if (f)
        return c = setTimeout(O, r), v(d);
    }
    return c === void 0 && (c = setTimeout(O, r)), i;
  }
  return u.cancel = z, u.flush = P, u;
}
function on(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Vs(e) {
  return !!e && typeof e == "object";
}
function Gs(e) {
  return typeof e == "symbol" || Vs(e) && zs.call(e) == As;
}
function Jn(e) {
  if (typeof e == "number")
    return e;
  if (Gs(e))
    return Kn;
  if (on(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = on(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Is, "");
  var t = Os.test(e);
  return t || Ls.test(e) ? Rs(e.slice(2), t ? 2 : 8) : Ys.test(e) ? Kn : +e;
}
var st = Zs;
const Et = [0, 1, 2];
var xt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(xt || {});
const Br = (e) => Et.includes(e), it = (e) => {
  var n;
  const t = (((n = document.getElementById(Je)) == null ? void 0 : n.clientWidth) || 0) - Pe;
  switch (e) {
    case 1:
      return Math.ceil(t / Se) * at;
    case 2:
      return Math.ceil(t / $e) * at;
    default:
      return Math.ceil(t / ft) * at;
  }
}, Xs = (e) => it(e) / at, Dn = (e, r) => {
  const t = it(r) / 2;
  let n;
  switch (r) {
    case 1:
      n = e.subtract(t, "days");
      break;
    case 2:
      n = e.subtract(t, "hours");
      break;
    default:
      n = e.subtract(t, "weeks");
      break;
  }
  let o;
  switch (r) {
    case 1:
      o = e.add(t, "days");
      break;
    case 2:
      o = e.add(t, "hours");
      break;
    default:
      o = e.add(t, "weeks");
      break;
  }
  return {
    startDate: n,
    endDate: o
  };
}, Us = (e, r) => {
  const t = Dn(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, $n = () => {
  var t;
  return ((((t = document.getElementById(Je)) == null ? void 0 : t.clientWidth) || 0) - Pe) * at;
}, jr = Sr({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  goToDate: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  toggleDisplayActiveUnits: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: E(),
  isLoading: !1,
  cols: 0,
  startDate: {
    hour: 0,
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
E.extend(Ss);
E.extend(Ms);
E.extend(Ds);
E.extend(Es);
E.extend(Ts);
const Ks = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = E(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = n, [l, f] = fe(d), [p, v] = fe(E()), [g, C] = fe(!1), [h, O] = fe(it(l)), J = Et[l] !== Et[Et.length - 1], z = l !== 0, P = Ee(() => Us(p, l), [p, l]), u = Dn(p, l).startDate, m = E(u).dayOfYear(), w = zr(u), _ = we(null), [T, B] = fe([{ x: 0, y: 0 }]), K = le(
    (V, b = "auto") => {
      var y, Y, W, A;
      const N = $n();
      switch (V) {
        case "back":
          return (y = _.current) == null ? void 0 : y.scrollTo({
            behavior: b,
            left: N / 3
          });
        case "forward":
          return (Y = _.current) == null ? void 0 : Y.scrollTo({
            behavior: b,
            left: N / 3
          });
        case "middle": {
          const x = N / at / 4;
          return (W = _.current) == null ? void 0 : W.scrollTo({
            behavior: b,
            left: N / 2 - x
          });
        }
        default:
          return (A = _.current) == null ? void 0 : A.scrollTo({
            behavior: b,
            left: N / 2
          });
      }
    },
    []
  ), G = (V) => {
    B(V);
  }, $ = le(
    (V) => {
      const b = Xs(l);
      let N;
      switch (l) {
        case 0:
          N = b * 7;
          break;
        case 1:
          N = b;
          break;
        case 2:
          N = Math.ceil(b / At);
          break;
      }
      st(() => {
        switch (V) {
          case "back":
            v((Y) => Y.subtract(N, "days"));
            break;
          case "forward":
            v((Y) => Y.add(N, "days"));
            break;
          case "middle":
            v(E());
            break;
        }
        s == null || s(P);
      }, 300)();
    },
    [s, P, l]
  );
  xe(() => {
    _.current = document.getElementById(Je), O(it(l));
  }, [l]), xe(() => {
    const V = () => O(it(l));
    return window.addEventListener("resize", V), () => window.removeEventListener("resize", V);
  }, [l]), xe(() => {
    s == null || s(P);
  }, [s, P]), xe(() => {
    C(!1);
  }, [o]), xe(() => {
    g || (K("middle"), C(!0), v(o));
  }, [o, g, K]);
  const D = () => {
    t || (v(
      (V) => l === 2 ? V.add(Zn, "hours") : V.add(Xn, "weeks")
    ), s == null || s(P));
  }, k = le(() => {
    t || ($("forward"), st(() => {
      K("forward");
    }, 500)());
  }, [t, $, K]), R = () => {
    t || (v(
      (V) => l === 2 ? V.subtract(Zn, "hours") : V.subtract(Xn, "weeks")
    ), s == null || s(P));
  }, I = le(() => {
    !g || t || ($("back"), st(() => {
      K("back");
    }, 500)());
  }, [g, t, $, K]), U = le(() => {
    t || ($("middle"), st(() => {
      K("middle", "smooth");
    }, 300)());
  }, [t, $, K]), Q = le(
    (V) => {
      if (t)
        return;
      const b = E(V).startOf("day");
      b.isValid() && (v(b), s == null || s(P), setTimeout(() => {
        K("middle", "smooth");
      }, 300));
    },
    [t, K, s, P]
  ), se = () => H(l + 1), oe = () => H(l - 1), H = (V) => {
    Br(V) && (f(V), O(it(V)), s == null || s(P));
  }, j = () => i == null ? void 0 : i(), { Provider: Z } = jr;
  return /* @__PURE__ */ M(
    Z,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: D,
        handleScrollNext: k,
        handleGoPrev: R,
        handleScrollPrev: I,
        handleGoToday: U,
        goToDate: Q,
        zoomIn: se,
        zoomOut: oe,
        zoom: l,
        isNextZoom: J,
        isPrevZoom: z,
        date: p,
        isLoading: t,
        cols: h,
        startDate: w,
        dayOfYear: m,
        toggleDisplayActiveUnits: j,
        tilesCoords: T,
        updateTilesCoords: G,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: r
    }
  );
}, tt = () => Be(jr), Zr = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Vr = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * me + n * Te;
    if (e >= s + Te)
      n++;
    else if (e >= s)
      return o * me + n * Te - n * Te;
  }
  return t - n * Te;
}, Js = 5, qn = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > Js;
}, yt = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, qs = ({
  data: e,
  baseData: r,
  zoom: t,
  startDate: n,
  onEventDrop: o,
  onEventDrag: s,
  draggableConfig: i = {},
  gridRef: c,
  separatorRowIndices: d = []
}) => {
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((N) => ({ ...N, data: [N.data] })) : r : e, {
    enabled: l = !0,
    isDraggable: f,
    resourceOnly: p = !1,
    isValidDrop: v
  } = i, [g, C] = fe("idle"), [h, O] = fe(null), [J, z] = fe({ x: 0, y: 0 }), [P, u] = fe({ width: 0, height: 48 }), [m, w] = fe(null), [_, T] = fe(!0), B = we({ x: 0, y: 0 }), K = we({ x: 0, y: 0 }), G = we({ x: 0, y: 0 }), $ = we(null), D = we(null), k = we(0), R = we(null), I = le(
    (N) => !l || N.draggable === !1 ? !1 : f ? f(N) : !0,
    [l, f]
  ), U = le(
    (N, y) => {
      const Y = Vr(y, d), W = Math.floor(Y / me);
      let A;
      switch (t) {
        case 0:
          A = Ie * 7;
          break;
        case 1:
          A = Se;
          break;
        case 2:
          A = $e;
          break;
        default:
          A = Se;
      }
      const x = Math.floor(N / A);
      let q;
      const L = E().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          q = L.add(x * 7, "days").toDate();
          break;
        case 1:
          q = L.add(x, "days").toDate();
          break;
        case 2:
          q = L.add(x, "hours").toDate();
          break;
        default:
          q = L.toDate();
      }
      return { snappedDate: q, snappedResourceIndex: W };
    },
    [t, n, d]
  ), Q = le(
    (N, y, Y, W) => {
      const A = [], x = y.getTime(), q = Y.getTime(), L = a.find((te) => te.id === W);
      if (!L)
        return A;
      const X = [];
      for (const te of L.data)
        Array.isArray(te) ? X.push(...te) : X.push(te);
      for (const te of X) {
        if (te.segmentId === N.segmentId)
          continue;
        const F = te.startDate.getTime(), ie = te.endDate.getTime();
        if (x >= F && x < ie || q > F && q <= ie || x <= F && q >= ie) {
          const ue = new Date(Math.max(x, F)), ae = new Date(Math.min(q, ie)), de = ae.getTime() - ue.getTime();
          A.push({
            event: te,
            conflictStart: ue,
            conflictEnd: ae,
            overlapDuration: de
          });
        }
      }
      return A;
    },
    [a]
  ), se = le(
    (N, y, Y, W) => {
      const A = [], x = y.getTime(), q = Y.getTime(), L = E(y).format("YYYY-MM-DD"), X = a.find((F) => F.id === W);
      if (!X)
        return A;
      const te = [];
      for (const F of X.data)
        Array.isArray(F) ? te.push(...F) : te.push(F);
      for (const F of te) {
        if (F.segmentId === N.segmentId)
          continue;
        const ie = F.startDate.getTime(), pe = F.endDate.getTime(), ue = E(F.startDate).format("YYYY-MM-DD"), ae = E(F.endDate).format("YYYY-MM-DD"), de = E(Y).format("YYYY-MM-DD");
        if (!(ue === L || ae === L || ue === de || ae === de || E(F.startDate).isBefore(y, "day") && E(F.endDate).isAfter(Y, "day")) || x >= ie && x < pe || q > ie && q <= pe || x <= ie && q >= pe)
          continue;
        let he, Me;
        pe <= x ? (he = x - pe, Me = "before") : (he = ie - q, Me = "after"), A.push({
          event: F,
          timeGap: he,
          position: Me
        });
      }
      return A.sort((F, ie) => F.timeGap - ie.timeGap);
    },
    [a]
  ), oe = le(
    (N, y, Y) => {
      const W = U(y, Y);
      let A, x;
      if (p)
        A = N.startDate, x = N.endDate;
      else {
        const pe = E(N.endDate).diff(N.startDate);
        A = W.snappedDate, x = E(A).add(pe, "milliseconds").toDate();
      }
      let q = 0, L = "", X;
      for (const pe of e) {
        const ue = Math.max(pe.data.length, 1);
        if (W.snappedResourceIndex < q + ue) {
          L = pe.id, X = pe.capacity;
          break;
        }
        q += ue;
      }
      if (!L)
        return null;
      let te = !0;
      X !== void 0 && N.totalPassengers !== void 0 && (te = N.totalPassengers <= X);
      const F = Q(N, A, x, L), ie = F.length === 0 ? se(N, A, x, L) : [];
      return {
        startDate: A,
        endDate: x,
        resourceId: L,
        resourceIndex: W.snappedResourceIndex,
        resourceCapacity: X,
        hasCapacity: te,
        conflicts: F,
        hasConflict: F.length > 0,
        nearbyEvents: ie
      };
    },
    [U, e, p, Q, se]
  ), H = le(
    (N, y) => {
      if (!s)
        return;
      const Y = Date.now();
      if (Y - k.current < 100)
        return;
      k.current = Y;
      const W = {
        event: N,
        currentStartDate: y.startDate,
        currentEndDate: y.endDate,
        currentResourceId: y.resourceId,
        conflicts: y.conflicts
      };
      s(W);
    },
    [s]
  ), j = le(
    (N, y) => {
      if (!I(N) || !c.current)
        return;
      y.preventDefault(), y.stopPropagation();
      const Y = y.target.closest('[style*="left"]');
      let W = 0, A = 0;
      Y && Y.style.left && Y.style.top && (W = parseInt(Y.style.left), A = parseInt(Y.style.top));
      const x = yt(
        y.clientX,
        y.clientY,
        c.current
      );
      B.current = { x: W, y: A }, K.current = { x: y.clientX, y: y.clientY }, G.current = {
        x: x.x - W,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, R.current = {
        startDate: N.startDate,
        endDate: N.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const X of e) {
        for (const te of X.data)
          if (te.some((F) => F.segmentId === N.segmentId)) {
            R.current.resourceId = X.id;
            break;
          }
        if (R.current.resourceId)
          break;
      }
      O(N), C("potential"), z({ x: W, y: A });
      let q = 100, L = 48;
      if (Y) {
        const X = Y.getBoundingClientRect();
        q = X.width, L = X.height;
      }
      u({ width: q, height: L });
    },
    [I, c, e, t]
  ), Z = le(
    (N) => {
      if (!c.current)
        return;
      let y = c.current;
      for (; y && y !== document.body; ) {
        const F = window.getComputedStyle(y);
        if (y.scrollHeight > y.clientHeight && (F.overflowY === "auto" || F.overflowY === "scroll" || F.overflow === "auto" || F.overflow === "scroll"))
          break;
        y = y.parentElement;
      }
      (!y || y === document.body) && (y = document.documentElement);
      const Y = y.getBoundingClientRect(), W = N.clientY, A = 50, x = 5, q = W - Y.top, L = Y.bottom - W;
      let X = !1, te = 0;
      q < A && q > 0 ? (X = !0, te = -x * (1 - q / A)) : L < A && L > 0 && (X = !0, te = x * (1 - L / A)), X ? (D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => {
        y.scrollTop += te, g === "dragging" && Z(N);
      })) : D.current && (cancelAnimationFrame(D.current), D.current = null);
    },
    [c, g]
  ), V = le(
    (N) => {
      if (g === "idle" || g === "animating" || !h || !c.current)
        return;
      const y = { x: N.clientX, y: N.clientY };
      if (g === "potential")
        if (qn(K.current, y))
          C("dragging");
        else
          return;
      Z(N);
      const Y = yt(
        N.clientX,
        N.clientY,
        c.current
      );
      $.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
        const W = {
          x: Y.x - G.current.x,
          y: Y.y - G.current.y
        };
        z(W);
        const A = oe(h, Y.x, Y.y);
        if (A && v) {
          const x = {
            event: h,
            currentStartDate: A.startDate,
            currentEndDate: A.endDate,
            currentResourceId: A.resourceId,
            conflicts: A.conflicts
          };
          A.hasConflict = !v(x);
        }
        if (w(A), A) {
          const x = A.hasCapacity !== !1;
          T(x), H(h, A);
        }
      });
    },
    [g, h, c, oe, H, v, Z]
  ), b = le(
    async (N) => {
      if (g === "idle" || g === "animating")
        return;
      const y = { x: N.clientX, y: N.clientY };
      if (!qn(K.current, y) || g === "potential") {
        C("idle"), O(null), w(null);
        return;
      }
      if (!h || !m || !R.current) {
        C("idle"), O(null), w(null);
        return;
      }
      if (m.hasCapacity === !1) {
        T(!1), C("animating"), z(B.current), setTimeout(() => {
          C("idle"), O(null), w(null), T(!0);
        }, 300);
        return;
      }
      const W = {
        event: h,
        originalStartDate: R.current.startDate,
        originalEndDate: R.current.endDate,
        originalResourceId: R.current.resourceId,
        newStartDate: m.startDate,
        newEndDate: m.endDate,
        newResourceId: m.resourceId,
        hasConflict: m.hasConflict,
        conflicts: m.conflicts
      };
      let A = !0;
      if (o)
        try {
          const x = o(W);
          A = x instanceof Promise ? await x : x;
        } catch {
          A = !1;
        }
      A ? (T(!0), C("idle"), O(null), w(null)) : (T(!1), C("animating"), z(B.current), setTimeout(() => {
        C("idle"), O(null), w(null), T(!0);
      }, 300));
    },
    [g, h, m, o, v]
  );
  return xe(() => {
    if (g === "potential" || g === "dragging") {
      const N = (Y) => V(Y), y = (Y) => b(Y);
      return document.addEventListener("mousemove", N), document.addEventListener("mouseup", y), () => {
        document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", y);
      };
    } else
      return () => {
      };
  }, [g, V, b]), xe(() => () => {
    $.current && (cancelAnimationFrame($.current), $.current = null), D.current && (cancelAnimationFrame(D.current), D.current = null);
  }, []), xe(() => {
    (g === "idle" || g === "animating") && ($.current && (cancelAnimationFrame($.current), $.current = null), D.current && (cancelAnimationFrame(D.current), D.current = null));
  }, [g]), xe(() => {
    (g === "dragging" || g === "potential") && (g === "dragging" ? (C("animating"), z(B.current), setTimeout(() => {
      C("idle"), O(null), w(null);
    }, 300)) : (C("idle"), O(null), w(null)));
  }, [t]), xe(() => {
    if ((g === "dragging" || g === "potential") && h) {
      let N = !1;
      for (const y of e) {
        for (const Y of y.data)
          if (Y.some((W) => W.segmentId === h.segmentId)) {
            N = !0;
            break;
          }
        if (N)
          break;
      }
      N || (g === "dragging" ? (C("animating"), z(B.current), setTimeout(() => {
        C("idle"), O(null), w(null);
      }, 300)) : (C("idle"), O(null), w(null)));
    }
  }, [e, g, h]), {
    dragState: g,
    draggedEvent: h,
    ghostPosition: J,
    ghostDimensions: P,
    dropTarget: m,
    isValidDrop: _,
    handleDragStart: j,
    isDraggable: I,
    draggingEventId: (h == null ? void 0 : h.segmentId) || null,
    resourceOnly: p
  };
}, Qs = ({
  data: e,
  baseData: r,
  zoom: t,
  startDate: n,
  onTimeRangeSelect: o,
  onMultiTimeRangeSelect: s,
  clickToAddConfig: i = {},
  gridRef: c,
  isDragging: d,
  separatorRowIndices: a = []
}) => {
  const { enabled: l = !1, isSelectable: f } = i, p = l && !!o, v = le((y) => {
    let Y = 0;
    for (const W of a)
      W <= y && Y++;
    return y * me + Y * Te;
  }, [a]), [g, C] = fe("idle"), [h, O] = fe(null), [J, z] = fe(null), [P, u] = fe(null), [m, w] = fe(!1), [_, T] = fe([]), [B, K] = fe(!1), G = we(null), $ = we(null), D = we(null), k = le(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return $e;
      default:
        return Se;
    }
  }, [t]), R = le(
    (y) => {
      const Y = k(), W = Math.floor(y / Y), A = E().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return A.add(W * 7, "days").toDate();
        case 1:
          return A.add(W, "days").toDate();
        case 2:
          return A.add(W, "hours").toDate();
        default:
          return A.toDate();
      }
    },
    [t, n, k]
  ), I = le(
    (y) => {
      const Y = Vr(y, a), W = Math.floor(Y / me);
      let A = 0;
      for (const x of e) {
        const q = Math.max(x.data.length, 1);
        if (W < A + q)
          return {
            resourceId: x.id,
            resourceIndex: W,
            resourceLabel: x.label
          };
        A += q;
      }
      return null;
    },
    [e, a]
  ), U = le(
    (y) => {
      const Y = k();
      return Math.floor(y / Y) * Y;
    },
    [k]
  ), Q = le(
    (y, Y, W, A = []) => {
      const x = [], L = (r || e).find((F) => F.id === y), X = Y.getTime(), te = W.getTime();
      if (L) {
        const F = L.data[0], ie = F && Array.isArray(F) ? L.data.flat() : L.data;
        for (const pe of ie) {
          const ue = new Date(pe.startDate).getTime(), ae = new Date(pe.endDate).getTime();
          if (X < ae && te > ue) {
            const de = new Date(Math.max(X, ue)), ce = new Date(Math.min(te, ae)), ne = ce.getTime() - de.getTime();
            x.push({
              event: pe,
              conflictStart: de,
              conflictEnd: ce,
              overlapDuration: ne
            });
          }
        }
      }
      for (const F of A) {
        if (F.resourceId !== y)
          continue;
        const ie = F.startDate.getTime(), pe = F.endDate.getTime();
        if (X < pe && te > ie) {
          const ue = new Date(Math.max(X, ie)), ae = new Date(Math.min(te, pe)), de = ae.getTime() - ue.getTime(), ce = {
            segmentId: `pending-${F.startDate.getTime()}`,
            reservationId: `pending-${F.startDate.getTime()}`,
            startDate: F.startDate,
            endDate: F.endDate,
            occupancy: 0,
            title: `New Event (${F.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          x.push({
            event: ce,
            conflictStart: ue,
            conflictEnd: ae,
            overlapDuration: de
          });
        }
      }
      return x;
    },
    [e, r]
  ), se = le(
    (y) => {
      if (!p || d || !c.current || y.button !== 0)
        return;
      const Y = y.target;
      if (Y.closest("[data-segment-id]") || Y.closest("[data-multi-select-ui]"))
        return;
      const W = yt(y.clientX, y.clientY, c.current), A = I(W.y);
      if (!A)
        return;
      G.current = { x: y.clientX, y: y.clientY }, $.current = A.resourceIndex;
      const x = U(W.x), q = k(), L = v(A.resourceIndex);
      O(W), z(W), u({
        x,
        y: L,
        width: q,
        height: me
      }), C("selecting");
    },
    [p, d, c, I, U, k, v]
  ), oe = le(
    (y) => {
      if (g !== "selecting" || !c.current || $.current === null)
        return;
      const Y = yt(y.clientX, y.clientY, c.current);
      D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => {
        z(Y);
        const W = k(), A = U((h == null ? void 0 : h.x) || 0), x = U(Y.x), q = v($.current), L = Math.min(A, x), X = Math.max(A, x) + W;
        u({
          x: L,
          y: q,
          width: X - L,
          height: me
        });
      });
    },
    [g, c, h, k, U, v]
  ), H = le(
    (y) => {
      if (g !== "selecting")
        return;
      if (!c.current || !h || !G.current) {
        C("idle"), O(null), z(null), u(null);
        return;
      }
      const Y = yt(y.clientX, y.clientY, c.current), W = I(h.y);
      if (!W) {
        C("idle"), O(null), z(null), u(null);
        return;
      }
      const A = Math.min(h.x, Y.x), x = Math.max(h.x, Y.x), q = R(A), L = R(x), X = E(L).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(W.resourceId, q, X)) {
        C("idle"), O(null), z(null), u(null);
        return;
      }
      const te = Q(
        W.resourceId,
        q,
        X,
        _
      ), F = te.length > 0, ie = {
        startDate: q,
        endDate: X,
        resourceId: W.resourceId,
        resourceLabel: W.resourceLabel,
        zoomLevel: t,
        hasConflict: F,
        conflicts: F ? te : void 0
      };
      if (m)
        T((pe) => [...pe, ie]), K(!0);
      else if (o) {
        const pe = o(ie), ue = (ae) => {
          ae != null && ae.continueMultiSelect && (w(!0), T([ie]), K(!0));
        };
        pe instanceof Promise ? pe.then(ue) : ue(pe);
      }
      C("idle"), O(null), z(null), u(null), G.current = null, $.current = null;
    },
    [
      g,
      c,
      h,
      I,
      R,
      f,
      o,
      t,
      m,
      Q,
      _
    ]
  ), j = le(() => {
    if (_.length > 0 && s) {
      K(!1);
      const y = s(_), Y = (W) => {
        W != null && W.continueMultiSelect ? K(!0) : (T([]), w(!1), K(!1));
      };
      y instanceof Promise ? y.then(Y) : Y(y);
      return;
    }
    T([]), w(!1), K(!1);
  }, [_, s]), Z = le(() => {
    T([]), w(!1), K(!1);
  }, []), V = le((y) => {
    T((Y) => {
      const W = Y.filter((A, x) => x !== y);
      return W.length === 0 && (w(!1), K(!1)), W;
    });
  }, []), b = le(
    (y, Y) => {
      T((W) => W.map((A, x) => {
        if (x !== y)
          return A;
        const q = { ...A, ...Y }, L = W.filter((te, F) => F !== y), X = Q(
          q.resourceId,
          q.startDate,
          q.endDate,
          L
        );
        return {
          ...q,
          hasConflict: X.length > 0,
          conflicts: X.length > 0 ? X : void 0
        };
      }));
    },
    [Q]
  ), N = le(
    (y) => {
      y.key === "Escape" && (g === "selecting" ? (C("idle"), O(null), z(null), u(null), G.current = null, $.current = null) : m && _.length > 0 && (T([]), w(!1), K(!1)));
    },
    [g, m, _.length]
  );
  return xe(() => {
    if (g === "selecting")
      return document.addEventListener("mousemove", oe), document.addEventListener("mouseup", H), document.addEventListener("keydown", N), () => {
        document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", H), document.removeEventListener("keydown", N);
      };
  }, [g, oe, H, N]), xe(() => {
    if (m && _.length > 0)
      return document.addEventListener("keydown", N), () => {
        document.removeEventListener("keydown", N);
      };
  }, [m, _.length, N]), xe(() => () => {
    D.current && (cancelAnimationFrame(D.current), D.current = null);
  }, []), xe(() => {
    d && g === "selecting" && (C("idle"), O(null), z(null), u(null), G.current = null, $.current = null);
  }, [d, g]), {
    selectionState: g,
    selectionStart: h,
    selectionEnd: J,
    selectionBox: P,
    handleGridMouseDown: se,
    isEnabled: p,
    pendingSelections: _,
    confirmSelections: j,
    clearSelections: Z,
    removeSelection: V,
    updateSelection: b,
    isMultiSelectActive: m,
    hasUnconfirmedSelections: B
  };
}, ei = S.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, ti = S.div`
  position: relative;
`, ni = S.canvas``;
S.canvas``;
const Qn = S.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, ri = Cr(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: p, separatorRowIndices: v = [] }, g) {
  const C = we(!1), { handleScrollNext: h, handleScrollPrev: O, date: J, isLoading: z, cols: P, startDate: u } = tt(), m = we(null), w = we(null), _ = we(null), T = we(null), [B, K] = fe(!1), G = Qe(), {
    dragState: $,
    draggedEvent: D,
    ghostPosition: k,
    ghostDimensions: R,
    dropTarget: I,
    isValidDrop: U,
    handleDragStart: Q,
    isDraggable: se,
    draggingEventId: oe,
    resourceOnly: H
  } = qs({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: u,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: T,
    separatorRowIndices: v
  });
  xe(() => {
    const F = $ === "dragging" || $ === "potential";
    K(F), a && a(F);
  }, [$, a]);
  const {
    selectionState: j,
    selectionBox: Z,
    handleGridMouseDown: V,
    pendingSelections: b,
    confirmSelections: N,
    clearSelections: y,
    removeSelection: Y,
    updateSelection: W,
    isMultiSelectActive: A,
    hasUnconfirmedSelections: x
  } = Qs({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: p,
    gridRef: T,
    isDragging: B,
    separatorRowIndices: v
  }), q = le((F) => {
    F.preventDefault();
  }, []), L = le((F) => {
    F.preventDefault();
  }, []), X = v.length * Te, te = le(
    (F) => {
      const ie = $n(), pe = t * me + 1 + X;
      Zr(F, ie, pe), xs(F, r, t, P, u, G, v);
    },
    [P, u, t, r, G, v, X]
  );
  return xe(() => {
    if (!m.current)
      return;
    const F = m.current.getContext("2d");
    if (!F)
      return;
    const ie = () => te(F);
    return window.addEventListener("resize", ie), () => window.removeEventListener("resize", ie);
  }, [te]), xe(() => {
    const F = m.current;
    if (!F)
      return;
    F.style.letterSpacing = "1px";
    const ie = F.getContext("2d");
    ie && te(ie);
  }, [J, t, r, te]), xe(() => {
    if (!w.current)
      return;
    const F = new IntersectionObserver(
      (ie) => {
        ie[0].isIntersecting && !C.current && (C.current = !0, h(), setTimeout(() => {
          C.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Je) }
    );
    return F.observe(w.current), () => {
      F.disconnect();
    };
  }, [h]), xe(() => {
    if (!_.current)
      return;
    const F = new IntersectionObserver(
      (ie) => {
        ie[0].isIntersecting && !C.current && (C.current = !0, O(), setTimeout(() => {
          C.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Je),
        rootMargin: `0px 0px 0px -${Pe}px`
      }
    );
    return F.observe(_.current), () => {
      F.disconnect();
    };
  }, [O]), /* @__PURE__ */ ee(ei, { id: Fr, children: [
    /* @__PURE__ */ ee(
      ti,
      {
        ref: (F) => {
          typeof g == "function" ? g(F) : g && (g.current = F), T.current = F;
        },
        onMouseDown: V,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ M(Qn, { position: "left", ref: _ }),
          /* @__PURE__ */ M(hn, { isLoading: z, position: "left" }),
          /* @__PURE__ */ M(
            ni,
            {
              ref: m,
              onDragStart: q,
              onDragOver: L,
              style: { userSelect: $ === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ M(
            gc,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onDragStart: Q,
              isDraggable: se,
              draggingEventId: oe,
              separatorRowIndices: v
            }
          ),
          /* @__PURE__ */ M(Qn, { ref: w, position: "right" }),
          /* @__PURE__ */ M(hn, { isLoading: z, position: "right" }),
          ($ === "dragging" || $ === "animating") && /* @__PURE__ */ M(
            Xc,
            {
              draggedEvent: D,
              ghostPosition: k,
              ghostDimensions: R,
              dropTarget: I,
              isValidDrop: U,
              dragState: $,
              zoom: r,
              data: n,
              resourceOnly: H,
              separatorRowIndices: v
            }
          ),
          /* @__PURE__ */ M(
            qc,
            {
              selectionBox: Z,
              isSelecting: j === "selecting"
            }
          ),
          A && b.length > 0 && /* @__PURE__ */ M(
            pl,
            {
              selections: b,
              data: n,
              zoom: r,
              startDate: u,
              onRemove: Y,
              onUpdate: W,
              separatorRowIndices: v
            }
          )
        ]
      }
    ),
    A && x && b.length > 0 && /* @__PURE__ */ M(
      al,
      {
        selections: b,
        onConfirm: N,
        onClear: y,
        onRemove: Y
      }
    )
  ] });
}), Gr = (e) => {
  const r = E.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, Xr = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Ce);
    t += o.hours + s, n += r % Ce, n >= Ce && (t++, n -= Ce);
  }), { hours: t, minutes: n };
}, Ur = (e, r) => {
  let t = Gn;
  switch (r) {
    case 0:
      t = hs;
      break;
    case 1:
      t = Gn;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = Ce - e.minutes;
    return i === Ce && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, oi = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const l = E(a.startDate).isoWeek(), f = E(a.startDate).isoWeekday(), p = E(a.endDate).isoWeek(), v = E(a.endDate).isoWeekday(), { hours: g, minutes: C } = Gr(a.occupancy);
    if (n === l) {
      const h = (He + 1 - f) * g, O = (He + 1 - f) * C;
      return { hours: Math.max(0, h), minutes: O };
    } else if (n === p) {
      const h = v > He ? He * g : v * g, O = v > He ? He * C : v * C;
      return { hours: h, minutes: O };
    } else if (E(r).isBetween(a.startDate, a.endDate))
      return { hours: He * g, minutes: He * C };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Xr(o), { free: c, overtime: d } = Ur({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, si = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: p } = Gr(l.occupancy);
    return o <= (n ? 7 : 5) ? { hours: f, minutes: p } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = Xr(s), { free: d, overtime: a } = Ur({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, ii = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const d = E(c.startDate).hour(), a = E(c.endDate).hour(), l = r.hour(), f = E(c.endDate).minute(), p = E(c.startDate).minute();
    d < l && a > l ? t += Ce : d === l && a === l && p && f ? t += f ? f - p : Ce - p : d === l && a >= l ? t += p ? Ce - p : Ce : a === l && f && (t += f);
  });
  const n = Math.floor(t / Ce), o = t % Ce, s = n || o ? 0 : 1, i = n ? 0 : o ? Ce - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, ai = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? E(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? E(t).isBetween(i.startDate, i.endDate, "hour", "[]") : E(i.startDate).isBetween(
    E(t),
    E(t).add(6, "days"),
    "day",
    "[]"
  ) || E(t).isBetween(E(i.startDate), E(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return si(s, t, n, o);
    case 2:
      return ii(s, t);
    default:
      return oi(s, t, n);
  }
}, ci = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = ft;
      break;
    case 1:
      c = "days", d = Se;
      break;
    case 2:
      c = "hours", d = $e;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = E(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / me), p = n.findIndex((O, J, z) => z.slice(0, J + 1).reduce((u, m) => u + m, 0) >= f), v = s === 2 ? (a + 1) * d : a * d, g = (f - 1) * me + me, C = ai(
    o[p],
    p,
    l,
    s,
    i
  ), h = E(e.startDate).isSame(E(e.endDate), "day");
  return {
    coords: { x: v, y: g },
    mouseCoords: t,
    resourceIndex: p,
    disposition: C,
    reservationData: {
      startTime: E(e.startDate).format("hh:mm A"),
      startDate: E(e.startDate).format("MMM D, YYYY"),
      endTime: E(e.endDate).format("hh:mm A"),
      endDate: E(e.endDate).format("MMM D, YYYY"),
      client: e.subtitle ?? "",
      eventName: e.title,
      reservationType: e.eventType,
      bookingNumber: e.bookingNumber,
      groupName: e.groupName,
      driver: e.driver,
      flightNumber: e.flightNumber,
      serviceNotes: e.serviceNotes,
      reservationNotes: e.reservationNotes,
      isOneDayEvent: h,
      passengers: e.totalPassengers
    }
  };
};
function li(e, r) {
  if (e.length <= 1)
    return [];
  if (e.length <= r) {
    const o = [];
    for (let s = 1; s < e.length; s++)
      o.push(s);
    return o;
  }
  const t = [];
  for (let o = 1; o < e.length; o++)
    t.push({ index: o, gap: e[o] - e[o - 1] });
  t.sort((o, s) => s.gap - o.gap);
  const n = Math.min(r - 1, t.length);
  return t.slice(0, n).map((o) => o.index).sort((o, s) => o - s);
}
function di(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const n = [...t].sort((l, f) => l - f);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = li(n, o), i = [];
  let c = 0;
  for (const l of s)
    i.push({
      min: n[c],
      max: n[l - 1],
      values: n.slice(c, l)
    }), c = l;
  i.push({
    min: n[c],
    max: n[n.length - 1],
    values: n.slice(c)
  });
  const d = [], a = /* @__PURE__ */ new Map();
  return i.forEach((l, f) => {
    const p = "__auto_cat_" + f, v = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: p, name: v, minPassengers: l.min, maxPassengers: l.max });
    for (const g of l.values)
      a.set(g, p);
  }), { categories: d, capacityToCategoryId: a };
}
const ui = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return r.length > n ? (r.forEach((d, a) => {
    const l = {
      id: e[a].id,
      label: e[a].label,
      data: d,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      categoryId: e[a].categoryId
    };
    c >= n && (o.push(i), s += i.length, i = [], c = 0), c++, i.push(l);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((d, a) => {
    const l = {
      id: e[a + s].id,
      label: e[a + s].label,
      data: d,
      capacity: e[a + s].capacity,
      isSubcontract: e[a + s].isSubcontract,
      categoryId: e[a + s].categoryId
    };
    i.push(l), a === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((d, a) => {
    const l = {
      id: e[a].id,
      label: e[a].label,
      data: d,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      categoryId: e[a].categoryId
    };
    i.push(l);
  }), o.push(i), o);
};
var sn = {}, fi = {
  get exports() {
    return sn;
  },
  set exports(e) {
    sn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(De, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(fi);
const hi = sn;
var an = {}, pi = {
  get exports() {
    return an;
  },
  set exports(e) {
    an = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(De, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(pi);
const mi = an, gi = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = E(t.startDate).startOf("day"), d = E(t.endDate).startOf("day"), a = E(o[i].startDate).startOf("day"), l = E(o[i].endDate).startOf("day");
          if (c.isBetween(a, l, null, "[]") || d.isBetween(a, l, null, "[]") || c.isBefore(a, "minute") && d.isAfter(l, "minute") || c.isAfter(a, "minute") && d.isBefore(l, "minute")) {
            s = !0;
            break;
          }
        }
        if (!s) {
          o.push(t), n = !0;
          break;
        }
      }
    n || r.push([t]);
  }
  return r;
};
E.extend(hi);
E.extend(mi);
const yi = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = [...s.data].sort((d, a) => {
      const l = E(d.startDate), f = E(a.startDate), p = l.startOf("day").diff(f.startOf("day"), "day");
      return p !== 0 ? p : l.diff(f);
    }), c = gi(i);
    return o[0].push(c), o[1].push(Math.max(c.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, vi = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, bi = (e) => {
  const { recordsThreshold: r } = tt(), [t, n] = fe(0), [o, s] = fe(0), i = we(null);
  xe(() => {
    i.current = document.getElementById(Je);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = Ee(() => yi(e), [e]), a = Ee(
    () => ui(e, c, d, r),
    [e, c, r, d]
  ), l = le(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((h) => h + a[Math.max(o, 0)].length), s((h) => Math.min(h + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = le(() => {
    a[o].length && (n((h) => Math.max(h - a[o - 1].length, 0)), s((h) => Math.max(h - 1, 0)));
  }, [o, a]), p = le(() => {
    n(0), s(0);
  }, []), v = t + a[o].length, g = Ee(
    () => d.slice(t, v),
    [v, d, t]
  ), C = Ee(
    () => c.slice(t, v),
    [v, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: C,
    rowsPerItem: g,
    totalRowsPerPage: vi(a[o]),
    next: l,
    previous: f,
    reset: p
  };
};
var cn = {}, xi = {
  get exports() {
    return cn;
  },
  set exports(e) {
    cn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(De, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(xi);
const wi = cn;
var ln = {}, Si = {
  get exports() {
    return ln;
  },
  set exports(e) {
    ln = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(De, function(t) {
    function n(p) {
      return p && typeof p == "object" && "default" in p ? p : { default: p };
    }
    var o = n(t);
    function s(p) {
      return p % 10 < 5 && p % 10 > 1 && ~~(p / 10) % 10 != 1;
    }
    function i(p, v, g) {
      var C = p + " ";
      switch (g) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return C + (s(p) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return C + (s(p) ? "godziny" : "godzin");
        case "MM":
          return C + (s(p) ? "miesiące" : "miesięcy");
        case "yy":
          return C + (s(p) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(p, v) {
      return a.test(v) ? c[p.month()] : d[p.month()];
    };
    l.s = d, l.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(p) {
      return p + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Si);
const Ci = ln;
var dn = {}, Mi = {
  get exports() {
    return dn;
  },
  set exports(e) {
    dn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(De, function(t) {
    function n(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(d, a, l) {
      var f = s[l];
      return Array.isArray(f) && (f = f[a ? 0 : 1]), f.replace("%d", d);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(Mi);
const ki = dn;
var un = {}, Di = {
  get exports() {
    return un;
  },
  set exports(e) {
    un = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(De, function(t) {
    function n(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, d = function(l, f) {
      return c.test(f) ? s[l.month()] : i[l.month()];
    };
    d.s = i, d.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: d, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(Di);
const $i = un;
var fn = {}, Ei = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(De, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Ei);
const _i = fn, Ti = {
  feelingEmpty: "Sin datos para mostrar",
  free: "Libre",
  loadNext: "Siguiente",
  loadPrevious: "Anterior",
  over: "terminado",
  taken: "Transcurrido",
  topbar: {
    filters: "Unidades con reservas",
    next: "siguiente",
    prev: "anterior",
    today: "Hoy",
    view: "Vista"
  },
  search: "buscar",
  week: "semana",
  conflicts: {
    detected: "Conflicto",
    detectedPlural: "Conflictos",
    detectedSuffix: "Detectado",
    conflictsWith: "Conflicto con",
    movingTo: "Moviendo a",
    currentlyAt: "Actualmente en",
    conflictTime: "Hora de conflicto",
    to: "a",
    nearbyEvent: "Evento Cercano",
    nearbyEvents: "Eventos Cercanos",
    before: "antes",
    after: "después",
    gap: "espacio",
    yourEvent: "Tu evento",
    sameDay: "Mismo día",
    changeStart: "Cambiar hora de inicio",
    changeEnd: "Cambiar hora de fin",
    changeBoth: "Cambiar horarios"
  },
  multiSelect: {
    selectionsPending: "selección(es) pendiente(s)",
    selectionPending: "selección pendiente",
    clickToRemove: "Haz clic en × para eliminar",
    pressEscToClear: "Presiona Esc para limpiar todo",
    clearAll: "Limpiar Todo",
    confirmSelection: "Revisar Selección",
    confirmSelections: "Revisar Selecciones",
    conflictWarning: "1 selección tiene conflictos",
    conflictsWarning: "{count} selecciones tienen conflictos",
    confirmWithConflict: "Revisar con Conflicto",
    confirmWithConflicts: "Revisar con Conflictos"
  },
  tooltip: {
    client: "Cliente",
    schedule: "Horario",
    startDate: "Inicio",
    endDate: "Fin",
    groupName: "Nombre del Grupo",
    driver: "Conductor",
    flightNumber: "Vuelo",
    serviceNotes: "Notas de Servicio",
    reservationNotes: "Notas de Reserva",
    tour: "Gira",
    transfer: "Transfer",
    oneDay: "Un día",
    passengers: "Pax"
  },
  subcontract: "Subcontrato"
}, Pi = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień",
  conflicts: {
    detected: "Konflikt",
    detectedPlural: "Konflikty",
    detectedSuffix: "Wykryto",
    conflictsWith: "Konflikt z",
    movingTo: "Przenoszenie do",
    currentlyAt: "Obecnie o",
    conflictTime: "Czas konfliktu",
    to: "do",
    nearbyEvent: "Bliskie wydarzenie",
    nearbyEvents: "Bliskie wydarzenia",
    before: "przed",
    after: "po",
    gap: "przerwa",
    yourEvent: "Twoje wydarzenie",
    sameDay: "Ten sam dzień",
    changeStart: "Zmień czas rozpoczęcia",
    changeEnd: "Zmień czas zakończenia",
    changeBoth: "Zmień czasy"
  },
  multiSelect: {
    selectionsPending: "wybór(y) oczekujące",
    selectionPending: "wybór oczekujący",
    clickToRemove: "Kliknij × aby usunąć",
    pressEscToClear: "Naciśnij Esc aby wyczyścić",
    clearAll: "Wyczyść Wszystko",
    confirmSelection: "Potwierdź Wybór",
    confirmSelections: "Potwierdź Wybory",
    conflictWarning: "1 wybór ma konflikty",
    conflictsWarning: "{count} wyborów ma konflikty",
    confirmWithConflict: "Potwierdź z Konfliktem",
    confirmWithConflicts: "Potwierdź z Konfliktami"
  },
  tooltip: {
    client: "Klient",
    schedule: "Harmonogram",
    startDate: "Początek",
    endDate: "Koniec",
    groupName: "Nazwa Grupy",
    driver: "Kierowca",
    flightNumber: "Lot",
    serviceNotes: "Uwagi Serwisowe",
    reservationNotes: "Uwagi Rezerwacji",
    tour: "Wycieczka",
    transfer: "Transfer",
    oneDay: "Jednodniowy",
    passengers: "Pax"
  },
  subcontract: "Podwykonawca"
}, Ai = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week",
  conflicts: {
    detected: "Conflict",
    detectedPlural: "Conflicts",
    detectedSuffix: "Detected",
    conflictsWith: "Conflicts with",
    movingTo: "Moving to",
    currentlyAt: "Currently at",
    conflictTime: "Conflict time",
    to: "to",
    nearbyEvent: "Nearby Event",
    nearbyEvents: "Nearby Events",
    before: "before",
    after: "after",
    gap: "gap",
    yourEvent: "Your event",
    sameDay: "Same day",
    changeStart: "Change start time",
    changeEnd: "Change end time",
    changeBoth: "Change times"
  },
  multiSelect: {
    selectionsPending: "selection(s) pending",
    selectionPending: "selection pending",
    clickToRemove: "Click × on selections to remove",
    pressEscToClear: "Press Esc to clear all",
    clearAll: "Clear All",
    confirmSelection: "Confirm Selection",
    confirmSelections: "Confirm Selections",
    conflictWarning: "1 selection has conflicts",
    conflictsWarning: "{count} selections have conflicts",
    confirmWithConflict: "Confirm with Conflict",
    confirmWithConflicts: "Confirm with Conflicts"
  },
  tooltip: {
    client: "Client",
    schedule: "Schedule",
    startDate: "Start",
    endDate: "End",
    groupName: "Group Name",
    driver: "Driver",
    flightNumber: "Flight",
    serviceNotes: "Service Notes",
    reservationNotes: "Reservation Notes",
    tour: "Tour",
    transfer: "Transfer",
    oneDay: "One-day",
    passengers: "Pax"
  },
  subcontract: "Subcontract"
}, Ii = {
  feelingEmpty: "Keine Ergebnisse...",
  free: "Frei",
  loadNext: "Weiter",
  loadPrevious: "Zurück",
  over: "über",
  taken: "Gebucht",
  topbar: {
    filters: "Filter",
    next: "vor",
    prev: "zurück",
    today: "Heute",
    view: "Ansicht"
  },
  search: "Suche",
  week: "Woche",
  conflicts: {
    detected: "Konflikt",
    detectedPlural: "Konflikte",
    detectedSuffix: "Erkannt",
    conflictsWith: "Konflikt mit",
    movingTo: "Verschieben nach",
    currentlyAt: "Derzeit um",
    conflictTime: "Konfliktzeit",
    to: "bis",
    nearbyEvent: "Nahes Ereignis",
    nearbyEvents: "Nahe Ereignisse",
    before: "vorher",
    after: "nachher",
    gap: "Abstand",
    yourEvent: "Ihr Ereignis",
    sameDay: "Gleicher Tag",
    changeStart: "Startzeit ändern",
    changeEnd: "Endzeit ändern",
    changeBoth: "Zeiten ändern"
  },
  multiSelect: {
    selectionsPending: "Auswahl(en) ausstehend",
    selectionPending: "Auswahl ausstehend",
    clickToRemove: "Klicken Sie auf × zum Entfernen",
    pressEscToClear: "Esc drücken zum Löschen",
    clearAll: "Alle Löschen",
    confirmSelection: "Auswahl Bestätigen",
    confirmSelections: "Auswahlen Bestätigen",
    conflictWarning: "1 Auswahl hat Konflikte",
    conflictsWarning: "{count} Auswahlen haben Konflikte",
    confirmWithConflict: "Mit Konflikt Bestätigen",
    confirmWithConflicts: "Mit Konflikten Bestätigen"
  },
  tooltip: {
    client: "Kunde",
    schedule: "Zeitplan",
    startDate: "Start",
    endDate: "Ende",
    groupName: "Gruppenname",
    driver: "Fahrer",
    flightNumber: "Flug",
    serviceNotes: "Servicehinweise",
    reservationNotes: "Reservierungshinweise",
    tour: "Tour",
    transfer: "Transfer",
    oneDay: "Eintägig",
    passengers: "Pax"
  },
  subcontract: "Subunternehmer"
}, Yi = {
  feelingEmpty: "Jaučiuosi toks tuščias...",
  free: "Laisva",
  loadNext: "Kitas",
  loadPrevious: "Ankstesnis",
  over: "virš",
  taken: "Užimta",
  topbar: {
    filters: "Filtras",
    next: "kitas",
    prev: "ankstesnis",
    today: "Šiandien",
    view: "Rodinys"
  },
  search: "ieškoti",
  week: "savaitė",
  conflicts: {
    detected: "Konfliktas",
    detectedPlural: "Konfliktai",
    detectedSuffix: "Aptikta",
    conflictsWith: "Konfliktas su",
    movingTo: "Perkeliama į",
    currentlyAt: "Šiuo metu",
    conflictTime: "Konflikto laikas",
    to: "iki",
    nearbyEvent: "Artimas įvykis",
    nearbyEvents: "Artimi įvykiai",
    before: "prieš",
    after: "po",
    gap: "tarpas",
    yourEvent: "Jūsų įvykis",
    sameDay: "Ta pati diena",
    changeStart: "Keisti pradžios laiką",
    changeEnd: "Keisti pabaigos laiką",
    changeBoth: "Keisti laikus"
  },
  multiSelect: {
    selectionsPending: "pasirinkimas(-ai) laukia",
    selectionPending: "pasirinkimas laukia",
    clickToRemove: "Spustelėkite × norėdami pašalinti",
    pressEscToClear: "Paspauskite Esc norėdami išvalyti",
    clearAll: "Išvalyti Viską",
    confirmSelection: "Patvirtinti Pasirinkimą",
    confirmSelections: "Patvirtinti Pasirinkimus",
    conflictWarning: "1 pasirinkimas turi konfliktų",
    conflictsWarning: "{count} pasirinkimai turi konfliktų",
    confirmWithConflict: "Patvirtinti su Konfliktu",
    confirmWithConflicts: "Patvirtinti su Konfliktais"
  },
  tooltip: {
    client: "Klientas",
    schedule: "Tvarkaraštis",
    startDate: "Pradžia",
    endDate: "Pabaiga",
    groupName: "Grupės Pavadinimas",
    driver: "Vairuotojas",
    flightNumber: "Skrydis",
    serviceNotes: "Paslaugų Pastabos",
    reservationNotes: "Rezervacijos Pastabos",
    tour: "Turas",
    transfer: "Pervežimas",
    oneDay: "Vienos dienos",
    passengers: "Pax"
  },
  subcontract: "Subrangovas"
}, Oi = [
  {
    id: "en",
    lang: Ai,
    translateCode: "en-GB",
    dayjsTranslations: wi
  },
  {
    id: "pl",
    lang: Pi,
    translateCode: "pl-PL",
    dayjsTranslations: Ci
  },
  {
    id: "es",
    lang: Ti,
    translateCode: "es-ES",
    dayjsTranslations: _i
  },
  {
    id: "lt",
    lang: Yi,
    translateCode: "lt-LT",
    dayjsTranslations: $i
  },
  {
    id: "de",
    lang: Ii,
    translateCode: "de-DE",
    dayjsTranslations: ki
  }
];
class Li {
  constructor() {
    En(this, "locales", Oi);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const It = new Li(), Kr = Sr({
  localesData: It.getLocales(),
  currentLocale: It.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Ri = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = fe("en"), s = It.getLocales(), i = le(() => {
    const f = s.find((p) => p.id === n);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && E.locale(f.dayjsTranslations), f || s[0];
  }, [n, s]), [c, d] = fe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  xe(() => {
    t == null || t.forEach((f) => {
      s.find((v) => v.id === f.id) || It.addLocales(f);
    });
  }, [s, t]), xe(() => {
    const f = localStorage.getItem("locale"), p = r ?? f ?? "en";
    localStorage.setItem("locale", p), o(p), d(i());
  }, [i, r]);
  const { Provider: l } = Kr;
  return /* @__PURE__ */ M(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, je = () => Be(Kr).currentLocale.lang, Ni = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Fi = S.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Wi = S.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Hi = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = je();
  return /* @__PURE__ */ ee(Fi, { onClick: e, children: [
    /* @__PURE__ */ M(Ni, {}),
    /* @__PURE__ */ M(Wi, { children: r })
  ] });
}, zi = S.div`
  position: relative;
  display: flex;
`, Bi = S.div`
  position: relative;
  margin-left: ${Pe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ji = S.div`
  width: calc(${({ width: e }) => e}px - ${Pe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Pe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Wt = {
  coords: { x: 0, y: 0 },
  mouseCoords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  },
  reservationData: {
    startTime: "",
    startDate: "",
    client: "",
    eventName: "",
    reservationType: xt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function Zi(e, r) {
  const t = r ? [...r].sort((c, d) => c.maxPassengers - d.maxPassengers) : [], n = [];
  for (const c of t) {
    const d = e.filter(
      (a) => !a.isSubcontract && a.categoryId === c.id
    );
    d.length > 0 && n.push({ type: "category", category: c, items: d });
  }
  const o = t.length > 0, s = e.filter(
    (c) => !c.isSubcontract && (!c.categoryId || !o)
  );
  s.length > 0 && o ? n.push({ type: "uncategorized", items: s }) : s.length > 0 && n.push({ type: "uncategorized", items: s });
  const i = e.filter((c) => c.isSubcontract);
  return i.length > 0 && n.push({ type: "subcontract", items: i }), n;
}
const Vi = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  onItemClick: o,
  toggleTheme: s,
  topBarWidth: i,
  onEventDrop: c,
  onEventDrag: d,
  draggableConfig: a,
  onTimeRangeSelect: l,
  onMultiTimeRangeSelect: f,
  clickToAddConfig: p
}) => {
  const [v, g] = fe(Wt), [C, h] = fe(e), [O, J] = fe(!1), [z, P] = fe(!1), [u, m] = fe(""), [w, _] = fe(/* @__PURE__ */ new Set()), {
    zoom: T,
    startDate: B,
    isLoading: K,
    config: { includeTakenHoursOnWeekendsInDayView: G, showTooltip: $, showThemeToggle: D }
  } = tt(), k = we(null), {
    page: R,
    projectsPerPerson: I,
    rowsPerItem: U,
    currentPageNum: Q,
    pagesAmount: se,
    next: oe,
    previous: H,
    reset: j
  } = bi(C), { effectiveCategories: Z, effectivePage: V } = Ee(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: R };
    const ae = di(R);
    if (ae.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: R };
    const de = R.map((ce) => {
      if (ce.isSubcontract || ce.capacity == null)
        return ce;
      const ne = ae.capacityToCategoryId.get(ce.capacity);
      return ne ? { ...ce, categoryId: ne } : ce;
    });
    return { effectiveCategories: ae.categories, effectivePage: de };
  }, [t, R]), b = le((ae) => {
    _((de) => {
      const ce = new Set(de);
      return ce.has(ae) ? ce.delete(ae) : ce.add(ae), ce;
    });
  }, []), N = Ee(() => {
    const ae = [], de = Z ? [...Z].sort((ce, ne) => ce.maxPassengers - ne.maxPassengers) : [];
    for (const ce of de)
      V.some((ne) => !ne.isSubcontract && ne.categoryId === ce.id) && ae.push(ce.id);
    return V.some((ce) => ce.isSubcontract) && ae.push("__subcontract__"), ae;
  }, [Z, V]), y = le(() => {
    _(/* @__PURE__ */ new Set());
  }, []), Y = le(() => {
    _(new Set(N));
  }, [N]), {
    visiblePage: W,
    visibleRowsPerItem: A,
    visibleTotalRows: x,
    visibleProjectsPerPerson: q,
    separatorRowIndices: L
  } = Ee(() => {
    const ae = Zi(V, Z), de = ((Z == null ? void 0 : Z.length) ?? 0) > 0, ce = /* @__PURE__ */ new Map();
    R.forEach((ke, Re) => ce.set(ke.id, Re));
    const ne = [], he = [], Me = [], Ae = [];
    let _e = 0;
    for (const ke of ae)
      if (ke.type === "subcontract" || ke.type === "category" && de) {
        const nt = ke.type === "subcontract" ? "__subcontract__" : ke.category.id, rt = w.has(nt);
        if (Ae.push(_e), !rt)
          for (const Ze of ke.items) {
            const St = ce.get(Ze.id) ?? 0, Ct = U[St];
            ne.push(Ze), he.push(Ct), Me.push(I[St]), _e += Ct;
          }
      } else
        for (const nt of ke.items) {
          const rt = ce.get(nt.id) ?? 0, Ze = U[rt];
          ne.push(nt), he.push(Ze), Me.push(I[rt]), _e += Ze;
        }
    const Lt = he.reduce((ke, Re) => ke + Re, 0);
    return {
      visiblePage: ne,
      visibleRowsPerItem: he,
      visibleTotalRows: Lt,
      visibleProjectsPerPerson: Me,
      separatorRowIndices: Ae
    };
  }, [V, Z, R, w, U, I]), X = we(
    st(
      (ae, de, ce, ne, he, Me) => {
        if (!k.current)
          return;
        const { tile: Ae, segmentId: _e } = ie(ae);
        if (!_e || !Ae) {
          J(!1), g(Wt);
          return;
        }
        const Lt = F(_e, de), ke = k.current.getBoundingClientRect(), Re = Ae.getBoundingClientRect(), nt = { x: ae.clientX - ke.left, y: ae.clientY - ke.top }, rt = {
          x: ae.clientX - ke.left,
          y: ae.clientY - ke.top
        }, Ze = {
          x: Re.left - ke.left,
          y: Re.top - ke.top,
          width: Re.width,
          height: Re.height
        }, {
          coords: { x: St, y: Ct },
          resourceIndex: Qr,
          disposition: eo,
          reservationData: to
        } = ci(
          Lt,
          ce,
          nt,
          ne,
          he,
          Me,
          G
        );
        g({
          coords: { x: St, y: Ct },
          mouseCoords: rt,
          resourceIndex: Qr,
          disposition: eo,
          reservationData: to,
          tileBounds: Ze
        }), J(!0);
      },
      4
    )
  ), te = we(
    st((ae, de) => {
      j(), h(
        ae.map((ce) => ({
          ...ce,
          data: ce.data.filter((ne) => {
            const { title: he, description: Me, subtitle: Ae } = ne;
            return (he == null ? void 0 : he.toLowerCase().includes(de.toLowerCase())) || (Ae == null ? void 0 : Ae.toLowerCase().includes(de.toLowerCase())) || (Me == null ? void 0 : Me.toLowerCase().includes(de.toLowerCase()));
          })
        })).filter((ce) => ce.data.length > 0)
      );
    }, 500)
  ), F = (ae, de) => {
    if (ae)
      return de.flatMap((ce) => ce.data).find((ce) => ce.segmentId === ae);
  }, ie = (ae) => {
    if (!ae.target)
      return { tile: null, segmentId: null };
    const de = ae.target.closest("[data-segment-id]");
    return de ? { tile: de, segmentId: de.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, pe = (ae) => {
    const de = ae.target.value;
    m(de), te.current.cancel(), de ? te.current(e, de) : (j(), h(e));
  }, ue = le(() => {
    X.current.cancel(), J(!1), g(Wt);
  }, []);
  return xe(() => {
    const ae = (ce) => X.current(
      ce,
      e,
      B,
      A,
      q,
      T
    ), de = k.current;
    if (de)
      return de.addEventListener("mousemove", ae), de.addEventListener("mouseleave", ue), () => {
        de.removeEventListener("mousemove", ae), de.removeEventListener("mouseleave", ue);
      };
  }, [
    X,
    ue,
    q,
    A,
    B,
    T,
    e
  ]), xe(() => {
    u ? (te.current.cancel(), te.current(e, u)) : h(e);
  }, [e, u]), /* @__PURE__ */ ee(zi, { children: [
    /* @__PURE__ */ M(
      Ha,
      {
        data: V,
        categories: Z,
        pageNum: Q,
        pagesAmount: se,
        rows: U,
        onLoadNext: oe,
        onLoadPrevious: H,
        searchInputValue: u,
        onSearchInputChange: pe,
        onItemClick: o,
        collapsedGroups: w,
        onToggleGroup: b,
        allGroupIds: N,
        onExpandAll: y,
        onCollapseAll: Y
      }
    ),
    /* @__PURE__ */ ee(Bi, { children: [
      /* @__PURE__ */ M(
        sc,
        {
          zoom: T,
          topBarWidth: i,
          showThemeToggle: D,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ M(
        ri,
        {
          data: W,
          baseData: r || e,
          zoom: T,
          rows: x,
          ref: k,
          onTileClick: n,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: P,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: p,
          separatorRowIndices: L
        }
      ) : /* @__PURE__ */ M(ji, { width: i, children: K ? /* @__PURE__ */ M(hn, { isLoading: K, position: "left" }) : /* @__PURE__ */ M(Hi, {}) }),
      $ && O && !z && (v == null ? void 0 : v.resourceIndex) > -1 && /* @__PURE__ */ M(Ac, { tooltipData: v })
    ] })
  ] });
}, Jr = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, Gi = S.div`
  width: calc(${({ width: e }) => e}px - ${Pe}px);
  position: sticky;
  top: 0;
  left: ${Pe}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Xi = S.div`
  display: flex;
  gap: 1.875rem;
`, er = S.button`
  ${Jr};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, Ui = S.button`
  ${Jr};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${({ theme: e }) => e.colors.textPrimary};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: e }) => e.colors.textPrimary};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`, Ki = S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Ji = S.div`
  display: flex;
`, qi = S.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, Qi = ({ width: e, showThemeToggle: r, toggleTheme: t }) => {
  const { topbar: n } = je(), {
    data: o,
    config: s,
    handleGoNext: i,
    handleGoPrev: c,
    handleGoToday: d,
    zoomIn: a,
    zoomOut: l,
    isNextZoom: f,
    isPrevZoom: p,
    toggleDisplayActiveUnits: v,
    onClearFilterData: g
  } = tt(), { colors: C } = Qe(), { filterButtonState: h = -1 } = s, O = (J) => {
    J.stopPropagation(), g == null || g();
  };
  return /* @__PURE__ */ ee(Gi, { width: e, children: [
    /* @__PURE__ */ M(Ji, { children: h >= 0 && /* @__PURE__ */ ee(
      Ht,
      {
        variant: h ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: v,
        children: [
          n.filters,
          !!h && /* @__PURE__ */ M("span", { onClick: O, children: /* @__PURE__ */ M(Le, { iconName: "close", height: "16", width: "16", fill: C.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ ee(Xi, { children: [
      /* @__PURE__ */ ee(er, { onClick: c, children: [
        /* @__PURE__ */ M(Le, { iconName: "arrowLeft", height: "15", fill: C.textPrimary }),
        n.prev
      ] }),
      /* @__PURE__ */ M(Ui, { onClick: d, children: n.today }),
      /* @__PURE__ */ ee(er, { onClick: i, children: [
        n.next,
        /* @__PURE__ */ M(Le, { iconName: "arrowRight", height: "15", fill: C.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ ee(qi, { children: [
      r && /* @__PURE__ */ M(Lc, { toggleTheme: t }),
      /* @__PURE__ */ ee(Ki, { children: [
        n.view,
        /* @__PURE__ */ M(
          Ht,
          {
            isDisabled: !p,
            onClick: l,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ M(
          Ht,
          {
            isDisabled: !f,
            onClick: a,
            isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, ea = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), ta = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), na = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), ra = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), oa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), sa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ia = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), aa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), ca = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), la = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), da = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), ua = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), fa = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), ha = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), pa = {
  add: ea,
  subtract: ta,
  filter: na,
  arrowLeft: ra,
  arrowRight: oa,
  defaultAvatar: sa,
  calendarWarning: ia,
  calendarFree: aa,
  arrowDown: la,
  arrowUp: ca,
  search: da,
  close: ua,
  moon: fa,
  sun: ha
}, Le = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = Qe(), i = pa[e];
  return i ? /* @__PURE__ */ M(
    i,
    {
      style: { transition: ".5s ease" },
      fill: n ?? s.accent,
      width: r,
      height: t,
      className: o
    }
  ) : null;
}, ma = (e, r, t) => ({
  outlined: {
    color: t ? e.colors.disabled : e.colors.accent,
    border: `1px solid ${t ? e.colors.disabled : e.colors.accent}`,
    background: "transparent"
  },
  filled: {
    color: t ? e.colors.primary : e.colors.textSecondary,
    background: t ? e.colors.disabled : e.colors.accent,
    border: "1px solid transparent"
  }
})[r], ga = S.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: ${({ disabled: e }) => e ? "auto" : "pointer"};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
  ${({ theme: e, variant: r, disabled: t }) => ma(e, r, t)}
`, Ht = ({
  iconName: e,
  width: r,
  height: t,
  fill: n,
  className: o,
  onClick: s,
  children: i,
  isFullRounded: c,
  isDisabled: d,
  variant: a = "outlined"
}) => {
  const { colors: l } = Qe();
  return /* @__PURE__ */ ee(
    ga,
    {
      onClick: s,
      isFullRounded: c,
      hasChildren: !!i,
      disabled: d,
      variant: a,
      children: [
        /* @__PURE__ */ M(
          Le,
          {
            iconName: e,
            width: r,
            height: t,
            fill: d ? l.disabled : n,
            className: o
          }
        ),
        i
      ]
    }
  );
}, ya = S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, va = S.div`
  position: relative;
`, ba = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  topBarWidth: o,
  onItemClick: s,
  toggleTheme: i,
  onEventDrop: c,
  onEventDrag: d,
  draggableConfig: a,
  schedulerRef: l,
  onTimeRangeSelect: f,
  onMultiTimeRangeSelect: p,
  clickToAddConfig: v
}) => {
  const { goToDate: g, handleGoToday: C, zoomIn: h, zoomOut: O, zoom: J } = tt();
  return Mr(
    l,
    () => ({
      goToDate: g,
      goToToday: C,
      setZoom: (z) => {
        if (!Br(z))
          return;
        const P = z - J;
        if (P > 0)
          for (let u = 0; u < P; u++)
            h();
        else
          for (let u = 0; u < Math.abs(P); u++)
            O();
      }
    }),
    [g, C, J, h, O]
  ), /* @__PURE__ */ M(
    Vi,
    {
      data: e,
      baseData: r,
      categories: t,
      onTileClick: n,
      topBarWidth: o,
      onItemClick: s,
      toggleTheme: i,
      onEventDrop: c,
      onEventDrag: d,
      draggableConfig: a,
      onTimeRangeSelect: f,
      onMultiTimeRangeSelect: p,
      clickToAddConfig: v
    }
  );
}, bl = Cr(function({
  data: r,
  categories: t,
  baseData: n,
  config: o,
  startDate: s,
  onRangeChange: i,
  onTileClick: c,
  handleToggleDisplayActiveUnits: d,
  onClearFilterData: a,
  onItemClick: l,
  isLoading: f,
  onEventDrop: p,
  onEventDrag: v,
  draggableConfig: g,
  onTimeRangeSelect: C,
  onMultiTimeRangeSelect: h,
  clickToAddConfig: O
}, J) {
  var k;
  const z = Ee(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      showTopbar: !0,
      translations: void 0,
      ...o
    }),
    [o]
  ), P = we(null), u = we(null), [m, w] = fe((k = P.current) == null ? void 0 : k.clientWidth), _ = Ee(() => E(s), [s]), [T, B] = fe(z.defaultTheme ?? "light"), K = () => {
    B(T === "light" ? "dark" : "light");
  }, G = T === "light" ? is : as, $ = z.theme ? z.theme[G.mode] : {}, D = {
    ...G,
    colors: {
      ...G.colors,
      ...$
    }
  };
  return Mr(
    J,
    () => ({
      goToDate: (R) => {
        var I;
        return (I = u.current) == null ? void 0 : I.goToDate(R);
      },
      goToToday: () => {
        var R;
        return (R = u.current) == null ? void 0 : R.goToToday();
      },
      setZoom: (R) => {
        var I;
        return (I = u.current) == null ? void 0 : I.setZoom(R);
      }
    }),
    []
  ), xe(() => {
    const R = () => {
      P.current && w(P.current.clientWidth);
    };
    return R(), window.addEventListener("resize", R), () => window.removeEventListener("resize", R);
  }, []), P.current, /* @__PURE__ */ ee(Ge, { children: [
    /* @__PURE__ */ M(ss, {}),
    /* @__PURE__ */ M(ns, { theme: D, children: /* @__PURE__ */ M(Ri, { lang: z.lang, translations: z.translations, children: /* @__PURE__ */ M(
      Ks,
      {
        data: r,
        isLoading: !!f,
        config: z,
        onRangeChange: i,
        defaultStartDate: _,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: /* @__PURE__ */ M(
          ya,
          {
            showScroll: !!r.length,
            id: Je,
            ref: P,
            children: /* @__PURE__ */ M(va, { children: /* @__PURE__ */ M(
              ba,
              {
                data: r,
                baseData: n,
                categories: t,
                onTileClick: c,
                topBarWidth: m ?? 0,
                onItemClick: l,
                toggleTheme: K,
                onEventDrop: p,
                onEventDrag: v,
                draggableConfig: g,
                schedulerRef: u,
                onTimeRangeSelect: C,
                onMultiTimeRangeSelect: h,
                clickToAddConfig: O
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}), xa = S.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, wa = S.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme: e }) => e.colors.accent};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.accent};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Sa = S.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ca = S.p`
  ${et}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, tr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = je(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ M(xa, { intent: e, children: /* @__PURE__ */ ee(wa, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ M(Sa, { children: t }),
    /* @__PURE__ */ M(Ca, { children: d })
  ] }) });
}, Ma = S.div`
  min-width: ${Pe + "px"};
  max-width: ${Pe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, ka = S.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Pe}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Da = S.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, $a = S.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({ theme: e }) => e.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.placeholder};
  }
`, Ea = S.div`
  margin-left: 10px;
  height: 36px;
  flex: 1;
  min-width: 0;
  background-color: ${({ theme: e }) => e.colors.primary};
  border: 1px solid
    ${({ theme: e, isFocused: r }) => r ? e.colors.accent : e.colors.border};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, _a = S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border: 1px solid ${({ theme: e }) => e.colors.border};
  border-radius: 4px;
  background: ${({ theme: e }) => e.colors.primary};
  cursor: pointer;
  padding: 0;
  color: ${({ theme: e }) => e.colors.placeholder};
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: ${({ theme: e }) => e.colors.hover};
    color: ${({ theme: e }) => e.colors.textPrimary};
    border-color: ${({ theme: e }) => e.colors.accent};
  }

  &:active {
    transform: scale(0.95);
  }
`, Ta = S.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${me}px;
  height: calc(${me}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBorder + "33" : e.colors.border};
  background-color: ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBg : "transparent"};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Pa = S.div`
  display: flex;
  align-items: center;
`, Aa = S.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Ia = S.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Ya = S.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, nr = S.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e, theme: r }) => e ? r.colors.textPrimary : r.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, Oa = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ M(
  Ta,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ ee(Pa, { children: [
      /* @__PURE__ */ M(Aa, { children: r.icon ? /* @__PURE__ */ M(Ia, { src: r.icon, alt: "Icon" }) : /* @__PURE__ */ M(Le, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ ee(Ya, { children: [
        /* @__PURE__ */ M(nr, { isMain: !0, children: r.title }),
        /* @__PURE__ */ M(nr, { children: r.subtitle })
      ] })
    ] })
  }
), La = S.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px 0 0;
  height: 21px;
  background: ${({ theme: e }) => e.mode === "dark" ? `linear-gradient(90deg, ${e.colors.primary} 0%, ${e.colors.background} 100%)` : `linear-gradient(90deg, #F3F4F6 0%, ${e.colors.background} 100%)`};
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e }) => e.mode === "dark" ? e.colors.secondary : "#EBEDF0"};
  }
`, Ra = S.div`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder : e.colors.accent};
  border-radius: 0 2px 2px 0;
`, Na = S.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, Fa = S.span`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder : e.colors.accent};
  background: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder + "18" : e.colors.accent + "14"};
  padding: 1px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  line-height: 1.4;
`, Wa = S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme: e }) => e.colors.placeholder};
  transition: transform 0.2s ease;
  transform: rotate(${({ $collapsed: e }) => e ? "-90deg" : "0deg"});
`, rr = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => /* @__PURE__ */ ee(La, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ M(Ra, { $variant: o }),
  /* @__PURE__ */ M(Wa, { $collapsed: t, children: /* @__PURE__ */ M("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ M(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ M(Na, { $variant: o, children: e }),
  /* @__PURE__ */ M(Fa, { $variant: o, children: r })
] }), Ha = ({
  data: e,
  categories: r,
  rows: t,
  onLoadNext: n,
  onLoadPrevious: o,
  pageNum: s,
  pagesAmount: i,
  searchInputValue: c,
  onSearchInputChange: d,
  onItemClick: a,
  collapsedGroups: l,
  onToggleGroup: f,
  allGroupIds: p,
  onExpandAll: v,
  onCollapseAll: g
}) => {
  const [C, h] = fe(!1), O = je(), J = () => h((G) => !G), z = r ? [...r].sort((G, $) => G.maxPassengers - $.maxPassengers) : [], P = z.length > 0, u = p.length > 0, m = u && l.size === p.length;
  u && l.size;
  const w = e.filter((G) => G.isSubcontract), _ = O.subcontract ?? "Subcontract", T = (G) => {
    const $ = e.indexOf(G);
    return /* @__PURE__ */ M(
      Oa,
      {
        id: G.id,
        item: G.label,
        rows: t[$],
        onItemClick: a,
        isSubcontract: G.isSubcontract
      },
      G.id
    );
  }, B = (G) => {
    const $ = e.filter(
      (R) => !R.isSubcontract && R.categoryId === G.id
    );
    if ($.length === 0)
      return null;
    const D = l.has(G.id), k = G.name;
    return /* @__PURE__ */ ee("div", { children: [
      /* @__PURE__ */ M(
        rr,
        {
          label: k,
          count: $.length,
          isCollapsed: D,
          onToggle: () => f(G.id),
          variant: "category"
        }
      ),
      !D && $.map(T)
    ] }, G.id);
  }, K = e.filter(
    (G) => !G.isSubcontract && (!G.categoryId || !P)
  );
  return /* @__PURE__ */ ee(Ma, { children: [
    /* @__PURE__ */ ee(ka, { children: [
      /* @__PURE__ */ ee(Da, { children: [
        /* @__PURE__ */ ee(Ea, { isFocused: C, children: [
          /* @__PURE__ */ M(
            $a,
            {
              placeholder: O.search,
              value: c,
              onChange: d,
              onFocus: J,
              onBlur: J
            }
          ),
          /* @__PURE__ */ M(Le, { iconName: "search" })
        ] }),
        u && /* @__PURE__ */ M(
          _a,
          {
            title: m ? "Expand all" : "Collapse all",
            onClick: m ? v : g,
            $allCollapsed: m,
            children: /* @__PURE__ */ M("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: m ? /* @__PURE__ */ ee(Ge, { children: [
              /* @__PURE__ */ M("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ M("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ ee(Ge, { children: [
              /* @__PURE__ */ M("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ M("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ M(
        tr,
        {
          intent: "previous",
          isVisible: s !== 0,
          onClick: o,
          icon: /* @__PURE__ */ M(Le, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: s,
          pagesAmount: i
        }
      )
    ] }),
    P ? z.map(B) : K.map(T),
    P && K.length > 0 && K.map(T),
    w.length > 0 && /* @__PURE__ */ ee(Ge, { children: [
      /* @__PURE__ */ M(
        rr,
        {
          label: _,
          count: w.length,
          isCollapsed: l.has("__subcontract__"),
          onToggle: () => f("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !l.has("__subcontract__") && w.map(T)
    ] }),
    /* @__PURE__ */ M(
      tr,
      {
        intent: "next",
        isVisible: s !== i - 1,
        onClick: n,
        icon: /* @__PURE__ */ M(Le, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: s,
        pagesAmount: i
      }
    )
  ] });
}, za = S.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.secondary};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, Ba = Ot`
from{
    left: -100%;
}
to{
    left: 100%;
}`, ja = S.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ba} 1s infinite;
`, Za = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ M(za, { position: r, children: /* @__PURE__ */ M(ja, {}) }) : null, hn = Za, We = (e, r) => {
  const {
    ctx: t,
    x: n,
    y: o,
    width: s,
    height: i,
    textYPos: c,
    label: d,
    font: a,
    isBottomRow: l,
    fillStyle: f,
    topText: p,
    bottomText: v,
    strokeStyle: g,
    labelBetweenCells: C
  } = e;
  if (t.beginPath(), t.strokeStyle = g ?? r.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), C ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = a;
    const h = n + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.accent, t.fillText(d, h, c);
  }
  if (l && f && p && v) {
    t.fillStyle = f, t.fillRect(n, o, s, i), t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = p.font;
    const h = n + s / 2 - t.measureText(p.label).width / 2;
    t.fillStyle = p.color, t.fillText(p.label, h, p.y), t.font = v.font;
    const O = n + s / 2 - t.measureText(v.label).width / 2;
    t.fillStyle = v.color, t.fillText(v.label, O, v.y);
  }
}, qr = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, pn = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Va = (e, r, t, n) => {
  const o = ut - Xe / ls, s = ut - Xe / ds, i = Fe + pt;
  let c = 0;
  for (let d = 0; d < r; d++) {
    const a = zr(
      E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    );
    We(
      {
        ctx: e,
        x: c,
        y: i,
        width: Se,
        height: Xe,
        isBottomRow: !0,
        fillStyle: qr(
          {
            isCurrent: a.isCurrentDay,
            isBusinessDay: a.isBusinessDay
          },
          n
        ),
        topText: {
          y: o,
          label: a.dayName.toUpperCase(),
          font: Oe.bottomRow.name,
          color: pn(
            { isCurrent: a.isCurrentDay, isBusinessDay: a.isBusinessDay },
            n
          )
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: Oe.bottomRow.number,
          color: pn(
            {
              isCurrent: a.isCurrentDay,
              isBusinessDay: a.isBusinessDay,
              variant: "bottomRow"
            },
            n
          )
        }
      },
      n
    ), c += Se;
  }
}, Ga = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Ie;
  const s = Fe;
  let c = t.month;
  for (let d = 0; d < r; d++) {
    c >= qt && (c = 0);
    const a = Hr(t, d) * Ie;
    We(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: pt,
        textYPos: Wr,
        label: E().month(c).format("MMMM").toUpperCase(),
        font: Oe.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, Xa = (e, r, t) => {
  let o = 0, s = 0, i = E(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * Se + Se;
  for (let c = 0; c < qt; c++)
    i > qt - 1 && (i = 0), s = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * Se, We(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Fe,
        textYPos: Sn,
        label: E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM").toUpperCase() + `                                                                                                  ${E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM").toUpperCase()}`,
        font: Oe.topRow
      },
      t
    ), o += s, i++;
}, Ua = (e, r, t, n) => {
  const o = 7 * Se, s = Fe, i = e.canvas.width / o + o, c = r.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let f = (c + a) % Vn;
    f <= 0 && (f += Vn), l !== 1 && a === 0 && (d = -l * Se + Se), We(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: pt,
        textYPos: Wr,
        label: `${t.toUpperCase()} ${f}`,
        font: Oe.middleRow
      },
      n
    ), d += o;
  }
}, Ka = (e, r, t, n, o) => {
  const s = ut - Xe / 1.6, i = ut - Xe / 4.5, c = Fe + pt;
  let d = 0;
  for (let a = 0; a < r; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame(E(), "week");
    We(
      {
        ctx: e,
        x: d,
        y: c,
        width: ft,
        height: Xe,
        isBottomRow: !0,
        fillStyle: qr({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: Oe.bottomRow.name,
          color: pn({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: Oe.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += ft;
  }
}, Ja = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (Un(s) - t + 1) * Ie, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = Un(s + d) * Ie), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ie) * Ie), We(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Fe,
        textYPos: Sn,
        label: (s + d).toString(),
        font: Oe.topRow
      },
      n
    ), c += a, l += a, d++;
}, qa = (e, r, t, n) => {
  const o = Math.floor(r / At) + 2, s = At * $e;
  let d = -E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * $e + 0.5 * $e;
  for (let a = 0; a < o; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    We(
      {
        ctx: e,
        x: d,
        y: ht,
        width: s,
        height: bt,
        textYPos: ht + bt / 2 + 2,
        label: l,
        font: Oe.bottomRow.number
      },
      n
    ), d += s;
  }
}, Qa = (e, r, t, n) => {
  const o = Math.ceil(r / At), s = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * $e;
  for (let f = 0; f < a; f++) {
    const p = E(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), g = E(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), C = g.format("MMMM").toUpperCase(), h = g.diff(p, "hour") + 1, O = f === 0 ? h * $e : r * $e;
    We(
      {
        ctx: e,
        x: l,
        y: 0,
        width: O,
        height: ht,
        textYPos: Sn,
        label: C,
        font: Oe.topRow
      },
      n
    ), l += O;
  }
}, ec = (e, r, t, n) => {
  let o = 0;
  const s = ht + bt, i = E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = $e;
  for (let d = 0; d < r; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    We(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: Jt,
        label: a,
        font: Oe.bottomRow.hoursInDay,
        textYPos: ht + bt + Jt / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += $e;
  }
}, tc = (e, r, t, n, o, s, i) => {
  switch (r) {
    case 0:
      Ja(e, n, s, i), Ga(e, t, n, i), Ka(e, t, n, o, i);
      break;
    case 1:
      Xa(e, n, i), Ua(e, n, o, i), Va(e, t, n, i);
      break;
    case 2:
      Qa(e, t, n, i), qa(e, t, n, i), ec(e, t, n, i);
      break;
  }
}, nc = S.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, rc = S.div`
  height: ${ut}px;
  display: block;
`, oc = S.canvas``, sc = ({ zoom: e, topBarWidth: r, showThemeToggle: t, toggleTheme: n }) => {
  const { week: o } = je(), { date: s, cols: i, dayOfYear: c, startDate: d, config: a } = tt(), l = we(null), f = Qe(), p = le(
    (v) => {
      const g = $n(), h = (e === 2 ? cs : ut) + 1;
      Zr(v, g, h), tc(v, e, i, d, o, c, f);
    },
    [i, c, d, o, e, f]
  );
  return xe(() => {
    if (!l.current)
      return;
    const v = l.current.getContext("2d");
    if (!v)
      return;
    const g = () => p(v);
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, [p]), xe(() => {
    const v = l.current;
    if (!v)
      return;
    v.style.letterSpacing = "1px";
    const g = v.getContext("2d");
    g && p(g);
  }, [s, e, p]), /* @__PURE__ */ ee(nc, { children: [
    a.showTopbar !== !1 && /* @__PURE__ */ M(Qi, { width: r, showThemeToggle: t, toggleTheme: n }),
    /* @__PURE__ */ M(rc, { id: us, children: /* @__PURE__ */ M(oc, { ref: l }) })
  ] });
}, ic = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Ie;
      break;
    case 2:
      n = $e;
      break;
    default:
      n = Se;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), d = r.endDate.startOf("day"), a = () => {
    let l;
    switch (t) {
      case 2:
        l = (e.startDate.diff(r.startDate, "minute") / Ce + 1) * n - n / 2;
        break;
      default:
        l = s.diff(c, "day") * n;
    }
    return Math.max(0, l);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          e.endDate.diff(e.startDate, "minute") / Ce * n,
          50
        );
        break;
      default:
        l = Math.max(
          i.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: l };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          e.endDate.diff(r.startDate, "minute") / Ce * n + 0.5 * n,
          50
        );
        break;
      default:
        l = Math.max(
          i.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: l };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          r.endDate.diff(e.startDate, "minute") / Ce * n,
          50
        );
        break;
      default:
        l = Math.max(
          d.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: l };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          r.endDate.diff(r.startDate, "minute") / Ce * n,
          50
        );
        break;
      default:
        l = Math.max(
          d.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: l };
  }
  return { x: a(), width: 50 };
}, ac = (e, r, t, n, o, s) => {
  const i = e * me + fs, c = r.hour(), d = t.hour();
  let a, l, f, p;
  switch (s) {
    case 2: {
      a = E(n), l = E(o), f = E(r).hour(c).minute(0), p = E(t).hour(d).minute(0);
      break;
    }
    default: {
      a = E(n).hour(0).minute(0), l = E(o).hour(23).minute(59), f = r, p = t;
      break;
    }
  }
  return {
    ...ic(
      { startDate: a, endDate: l },
      { startDate: f, endDate: p },
      s
    ),
    y: i
  };
}, mn = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, or = S.button`
  ${et}
  height: ${wn}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: e }) => e.colors.textPrimary};
  width: 100%;
  cursor: ${({ isDraggable: e, isDragging: r }) => e ? r ? "grabbing" : "grab" : "not-allowed"};
  opacity: ${({ isDragging: e }) => e ? 0.3 : 1};
  transition: opacity 0.2s ease;
`, cc = S.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, lc = S.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`, dc = S.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  color: ${({ $type: e }) => "#374151"};
  font-size: 9px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 3px;
  letter-spacing: 0.3px;
  line-height: 1;
  border-left: 2px solid ${({ $type: e }) => e === "tour" ? "#10b981" : "#3b82f6"};
  white-space: nowrap;
`, sr = S.p`
  ${et}
  ${wt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, uc = S.p`
  ${et}
  ${wt}
`, fc = S.div`
  position: sticky;
  left: ${Pe + 16}px;
  overflow: hidden;
`;
S.span`
  ${wt}
  font-size: 10px;
  font-weight: 600;
  min-width: 0;
  flex: 1;
`;
S.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ $type: e }) => e === "tour" ? "#15803d" : "#1d4ed8"};
  font-size: 9px;
  font-weight: 700;
  padding: 3px 5px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  flex-shrink: 0;
  line-height: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
`;
S.span`
  font-size: 10px;
  line-height: 1;
`;
S.div`
  display: flex;
  overflow: hidden;
  min-width: 0;
`;
const hc = ({
  row: e,
  data: r,
  zoom: t,
  onTileClick: n,
  onDragStart: o,
  isDragging: s = !1,
  isDraggable: i = !0,
  yOffset: c = 0
}) => {
  const { date: d } = tt(), a = Dn(d, t), { y: l, x: f, width: p } = ac(
    e,
    a.startDate,
    a.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: v } = Qe(), g = we(null), C = E(r.startDate).isSame(E(r.endDate), "day"), h = r.eventType === xt.Tour, O = r.eventType === xt.Transfer, J = C && (h || O), z = (u) => {
    g.current = { x: u.clientX, y: u.clientY }, i && o && (u.preventDefault(), o(r, u));
  }, P = (u) => {
    if (g.current) {
      const m = Math.abs(u.clientX - g.current.x), w = Math.abs(u.clientY - g.current.y);
      Math.sqrt(m * m + w * w) <= 5 && (n == null || n(r)), g.current = null;
    } else
      n == null || n(r);
  };
  return J ? /* @__PURE__ */ M(
    or,
    {
      "data-segment-id": r.segmentId,
      style: {
        left: `${f}px`,
        top: `${l + c}px`,
        backgroundColor: `${r.bgColor ?? v.defaultTile}`,
        width: `${p}px`,
        color: mn(r.bgColor ?? "")
      },
      onClick: P,
      onMouseDown: z,
      onDragStart: (u) => u.preventDefault(),
      isDraggable: i,
      isDragging: s,
      children: /* @__PURE__ */ M(lc, { children: /* @__PURE__ */ M(dc, { $type: O ? "transfer" : "tour", children: O ? "TRF" : "1-DAY" }) })
    }
  ) : /* @__PURE__ */ M(
    or,
    {
      "data-segment-id": r.segmentId,
      style: {
        left: `${f}px`,
        top: `${l + c}px`,
        backgroundColor: `${r.bgColor ?? v.defaultTile}`,
        width: `${p}px`,
        color: mn(r.bgColor ?? "")
      },
      onClick: P,
      onMouseDown: z,
      onDragStart: (u) => u.preventDefault(),
      isDraggable: i,
      isDragging: s,
      children: /* @__PURE__ */ M(cc, { children: /* @__PURE__ */ ee(fc, { children: [
        /* @__PURE__ */ M(sr, { bold: !0, children: r.title }),
        /* @__PURE__ */ M(sr, { children: r.subtitle }),
        /* @__PURE__ */ M(uc, { children: r.description })
      ] }) })
    }
  );
}, pc = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Te;
}, mc = ({
  data: e,
  zoom: r,
  onTileClick: t,
  onDragStart: n,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = []
}) => {
  const c = le(() => {
    let d = 0;
    return e.map((a, l) => (l > 0 && (d += Math.max(e[l - 1].data.length, 1)), a.data.map(
      (f, p) => f.map((v) => {
        const g = s === v.segmentId, C = o ? o(v) : !1, h = p + d, O = pc(h, i);
        return /* @__PURE__ */ M(
          hc,
          {
            row: h,
            data: v,
            zoom: r,
            onTileClick: t,
            onDragStart: n,
            isDragging: g,
            isDraggable: C,
            yOffset: O
          },
          v.segmentId
        );
      })
    ))).flat(2);
  }, [e, t, r, n, o, s, i]);
  return /* @__PURE__ */ M(Ge, { children: c() });
}, gc = mc;
S.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
S.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
S.label`
  font-size: 14px;
`;
S.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
S.input`
  height: 18px;
  width: 18px;
`;
S.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
S.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const yc = S.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, vc = S.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, bc = S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, xc = S.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, wc = S.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, Sc = S.div`
  ${et}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Cc = S.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, Mc = S.div`
  padding: 10px 12px;
`, kc = S.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, ir = S.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, ar = S.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, cr = S.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, lr = S.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, dr = S.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Dc = S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, $c = S.div``, Ec = S.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, _c = S.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Tc = S.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, ur = S.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, fr = S.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, hr = S.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.textPrimary};
  line-height: 1.4;
  background: ${({ theme: e }) => e.colors.primary};
  padding: 6px 8px;
  border-radius: 4px;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 60px;
  overflow-y: auto;
`;
S.div``;
S.span``;
S.span``;
S.div``;
S.div``;
S.span``;
S.span``;
S.div``;
S.div``;
S.span``;
S.span``;
S.div``;
S.div``;
S.div``;
S.span``;
S.div``;
S.div``;
S.div``;
S.div``;
S.p``;
S.span``;
const Pc = {
  client: "Client",
  startDate: "Start",
  endDate: "End",
  groupName: "Group",
  driver: "Driver",
  flightNumber: "Flight",
  serviceNotes: "Service Notes",
  reservationNotes: "Reservation Notes",
  tour: "Tour",
  transfer: "Transfer",
  oneDay: "One-day",
  passengers: "Pax"
}, Ac = ({ tooltipData: e }) => {
  const { mouseCoords: r, reservationData: t } = e, n = we(null), [o, s] = fe("below"), i = je(), c = { ...Pc, ...i.tooltip };
  wr(() => {
    if (!n.current || !r)
      return;
    const v = n.current, { width: g, height: C } = v.getBoundingClientRect(), h = v.parentElement;
    if (!h)
      return;
    const O = h.getBoundingClientRect(), J = 12, z = 4, P = O.height - r.y, u = O.width - r.x;
    let m = r.x + J, w = r.y + J, _ = "below";
    u < g + J && (m = r.x - g - J), P < C + J && (w = r.y - C - J, _ = "above"), m = Math.max(z, Math.min(m, O.width - g - z)), w = Math.max(z, Math.min(w, O.height - C - z)), s(_), v.style.left = `${m}px`, v.style.top = `${w}px`;
  }, [r]);
  const d = t.reservationType === xt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, p = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ ee(yc, { ref: n, $position: o, children: [
    /* @__PURE__ */ ee(vc, { children: [
      /* @__PURE__ */ ee(bc, { children: [
        /* @__PURE__ */ M(xc, { children: t.bookingNumber }),
        /* @__PURE__ */ M(wc, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ M(Sc, { children: t.eventName }),
      t.client && /* @__PURE__ */ M(Cc, { children: t.client })
    ] }),
    /* @__PURE__ */ ee(Mc, { children: [
      /* @__PURE__ */ ee(kc, { children: [
        /* @__PURE__ */ ee(ir, { children: [
          /* @__PURE__ */ M(ar, { children: c.startDate }),
          /* @__PURE__ */ ee(cr, { children: [
            /* @__PURE__ */ M(lr, { children: t.startDate }),
            " ",
            /* @__PURE__ */ M(dr, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ ee(ir, { $isEnd: !0, children: [
          /* @__PURE__ */ M(ar, { children: c.endDate }),
          /* @__PURE__ */ ee(cr, { children: [
            /* @__PURE__ */ M(lr, { children: t.endDate }),
            " ",
            /* @__PURE__ */ M(dr, { children: t.endTime })
          ] })
        ] })
      ] }),
      p.length > 0 && /* @__PURE__ */ M(Dc, { children: p.map((v, g) => /* @__PURE__ */ ee($c, { children: [
        /* @__PURE__ */ M(Ec, { children: v.label }),
        /* @__PURE__ */ M(_c, { children: v.value })
      ] }, g)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ ee(Tc, { children: [
        t.serviceNotes && /* @__PURE__ */ ee(ur, { children: [
          /* @__PURE__ */ M(fr, { children: c.serviceNotes }),
          /* @__PURE__ */ M(hr, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ ee(ur, { children: [
          /* @__PURE__ */ M(fr, { children: c.reservationNotes }),
          /* @__PURE__ */ M(hr, { children: t.reservationNotes })
        ] })
      ] })
    ] })
  ] });
}, Ic = S.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, Yc = S.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, Oc = S.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, Lc = ({ toggleTheme: e }) => {
  const r = Qe();
  return /* @__PURE__ */ ee(Ic, { onClick: e, children: [
    /* @__PURE__ */ M(Yc, {}),
    /* @__PURE__ */ M(Oc, { children: r.mode === "light" ? /* @__PURE__ */ M(Le, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ M(Le, { iconName: "moon", height: "16", width: "16" }) })
  ] });
}, Rc = S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Nc = S.div`
  position: absolute;
  height: ${wn}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, Fc = S.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, pr = S.p`
  ${et}
  ${wt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Wc = S.p`
  ${et}
  ${wt}
`, Hc = S.div`
  position: sticky;
  left: ${Pe + 16}px;
  overflow: hidden;
`, zc = S.div`
  position: absolute;
  height: ${wn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Bc = S.div`
  position: absolute;
  top: -24px;
  left: 0;
  padding: 4px 8px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
`, jc = S.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Zc = S.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Vc = S.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, mr = S.div`
  position: absolute;
  background-color: #fff;
  border: 2px solid #F44336;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  z-index: 1001;
  min-width: 280px;
  max-width: 400px;
  font-size: 12px;
  line-height: 1.5;
`, gr = S.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, yr = S.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #F44336;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`, vr = S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, zt = S.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, Bt = S.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, ot = S.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, br = S.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Gc = ({
  draggedEvent: e,
  ghostPosition: r,
  ghostDimensions: t,
  dropTarget: n,
  isValidDrop: o,
  dragState: s,
  data: i,
  resourceOnly: c,
  separatorRowIndices: d = []
}) => {
  const a = je(), l = (P) => {
    let u = 0;
    for (const m of d)
      m <= P && u++;
    return P * me + u * Te;
  }, [f, p] = fe(null), [v, g] = fe(0), C = le((P = 400, u = 300) => {
    const w = t.width, _ = 48, T = document.getElementById("react-scheduler");
    if (!T)
      return {
        x: r.x + w + 16,
        y: r.y
      };
    const B = T.scrollLeft, K = T.scrollTop, G = T.clientWidth, $ = T.clientHeight, D = r.x - B, k = r.y - K, R = {
      left: Pe + 16,
      // Avoid left column
      right: G - 16,
      top: 16,
      bottom: $ - 16
    }, I = R.right - (D + w), U = D - R.left, Q = R.bottom - (k + _), se = k - R.top;
    let oe, H;
    return I >= P + 16 ? oe = D + w + 16 : U >= P + 16 ? oe = D - P - 16 : I >= U ? (oe = D + w + 16, oe + P > R.right && (oe = R.right - P)) : (oe = D - P - 16, oe < R.left && (oe = R.left)), Q >= u + 16 ? H = k + _ + 16 : se >= u + 16 ? H = k - u - 16 : Q >= se ? (H = k + _ + 16, H + u > R.bottom && (H = R.bottom - u)) : (H = k - u - 16, H < R.top && (H = R.top)), oe = Math.max(R.left, Math.min(oe, R.right - P)), H = Math.max(R.top, Math.min(H, R.bottom - u)), {
      x: oe + B,
      y: H + K
    };
  }, [r.x, r.y, t.width]);
  xe(() => {
    s === "dragging" && e && v === 0 ? g(r.x) : s === "idle" && g(0);
  }, [s, e, r.x, v]), xe(() => {
    p(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const h = Ee(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const P = [];
    let u = 0;
    for (const m of i) {
      const w = Math.max(m.data.length, 1);
      if (m.capacity !== void 0 && e.totalPassengers > m.capacity)
        for (let _ = 0; _ < w; _++)
          P.push(u + _);
      u += w;
    }
    return P;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const O = s === "animating", J = mn(e.bgColor ?? ""), z = () => {
    if (!n)
      return "";
    const P = E(n.startDate).format("MMM D, HH:mm"), u = E(n.endDate).format("HH:mm");
    return `${P} - ${u}`;
  };
  return /* @__PURE__ */ ee(Rc, { children: [
    h.map((P) => /* @__PURE__ */ M(
      Zc,
      {
        style: {
          top: `${l(P)}px`,
          height: `${me}px`
        }
      },
      P
    )),
    n && s === "dragging" && /* @__PURE__ */ M(
      jc,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${l(n.resourceIndex)}px`,
          height: `${me}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ ee(Ge, { children: [
      /* @__PURE__ */ M(
        zc,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${l(n.resourceIndex) + (me - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ M(
        Bc,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${l(n.resourceIndex) + (me - 48) / 2}px`
          },
          children: z()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ M(
      Vc,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          left: "0px",
          top: `${l(n.resourceIndex)}px`,
          height: `${me}px`
        }
      }
    ),
    n && o && n.hasConflict && n.conflicts && n.conflicts.length > 0 && s === "dragging" && (() => {
      const P = C(400, 300);
      return /* @__PURE__ */ ee(
        mr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`
          },
          children: [
            /* @__PURE__ */ ee(gr, { children: [
              /* @__PURE__ */ M(yr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ M(vr, { children: n.conflicts.map((u, m) => {
              const w = E(n.startDate).format("YYYY-MM-DD"), _ = E(n.endDate).format("YYYY-MM-DD"), T = E(u.event.startDate).format("YYYY-MM-DD"), B = E(u.event.endDate).format("YYYY-MM-DD"), K = E(u.conflictStart).format("YYYY-MM-DD"), G = E(u.conflictEnd).format("YYYY-MM-DD"), $ = w !== _, D = T !== B, k = K !== G, R = $ ? E(n.startDate).format("MMM D, h:mm A") : E(n.startDate).format("h:mm A"), I = $ ? E(n.endDate).format("MMM D, h:mm A") : E(n.endDate).format("h:mm A"), U = D ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), Q = D ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), se = k ? E(u.conflictStart).format("MMM D, h:mm A") : E(u.conflictStart).format("h:mm A"), oe = k ? E(u.conflictEnd).format("MMM D, h:mm A") : E(u.conflictEnd).format("h:mm A"), H = k ? "" : E(u.conflictStart).format("MMM D"), j = n.startDate.getTime(), Z = n.endDate.getTime(), V = u.event.startDate.getTime(), b = u.event.endDate.getTime(), N = j >= V && j < b, y = Z > V && Z <= b, Y = j <= V && Z >= b, W = V <= j && b >= Z;
              let A = !1, x = !1, q = !1, L = !1, X = "";
              return Y || W ? (A = !0, x = !0, q = !0, L = !0, X = `⚠️ ${a.conflicts.changeBoth}`) : N && y ? (A = !0, x = !0, q = !0, L = !0, X = `⚠️ ${a.conflicts.changeBoth}`) : N ? (A = !0, L = !0, X = `⚠️ ${a.conflicts.changeStart}`) : y && (x = !0, q = !0, X = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ ee(zt, { children: [
                /* @__PURE__ */ ee(Bt, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ ee(ot, { children: [
                  /* @__PURE__ */ M("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  A ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: R }) : R,
                  " ",
                  a.conflicts.to,
                  " ",
                  x ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
                ] }),
                /* @__PURE__ */ ee(ot, { children: [
                  /* @__PURE__ */ M("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  q ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: U }) : U,
                  " ",
                  a.conflicts.to,
                  " ",
                  L ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Q }) : Q
                ] }),
                /* @__PURE__ */ ee(br, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  H && `${H}, `,
                  se,
                  " - ",
                  oe
                ] }),
                X && /* @__PURE__ */ M(ot, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: X })
              ] }, m);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const P = C(400, 400);
      return /* @__PURE__ */ ee(
        mr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ ee(gr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ M(yr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ ee(vr, { children: [
              (() => {
                const u = n.nearbyEvents.some((T) => T.position === "before"), m = n.nearbyEvents.some((T) => T.position === "after"), w = E(n.startDate).format("h:mm A"), _ = E(n.endDate).format("h:mm A");
                return /* @__PURE__ */ ee(zt, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ ee(Bt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ ee(ot, { style: { fontWeight: 600 }, children: [
                    E(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    m ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: _ }) : _
                  ] }),
                  /* @__PURE__ */ M(ot, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((u, m) => {
                const w = E(u.event.startDate).format("YYYY-MM-DD"), _ = E(u.event.endDate).format("YYYY-MM-DD"), T = w !== _, B = T ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), K = T ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), G = E(u.event.startDate).format("MMM D"), $ = Math.floor(u.timeGap / (1e3 * 60 * 60)), D = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), k = $ > 0 ? `${$}h ${D}m` : `${D}m`, R = u.position === "after", I = u.position === "before";
                return /* @__PURE__ */ ee(zt, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ ee(Bt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ ee(ot, { children: [
                    !T && `${G}: `,
                    R ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: B }) : B,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: K }) : K
                  ] }),
                  /* @__PURE__ */ ee(br, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    k,
                    " ",
                    u.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, m);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ M(
      Nc,
      {
        $isAnimating: O,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: O ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: O ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: O ? void 0 : `translate3d(${c ? v : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: J
        },
        children: /* @__PURE__ */ M(Fc, { children: /* @__PURE__ */ ee(Hc, { children: [
          /* @__PURE__ */ M(pr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ M(pr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ M(Wc, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Xc = Gc, Uc = Ot`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Kc = S.div`
  position: absolute;
  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.25) 0%,
    rgba(34, 197, 94, 0.15) 100%
  );
  border: 2px solid #22c55e;
  border-radius: 6px;
  pointer-events: none;
  z-index: 10;
  box-sizing: border-box;
  animation: ${Uc} 1.5s ease-in-out infinite;
  backdrop-filter: blur(1px);

  &::before {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    font-weight: 600;
    color: #16a34a;
    opacity: 0.8;
  }
`, Jc = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ M(
  Kc,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), qc = Jc, Qc = Ot`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, el = S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ $hasConflicts: e }) => e ? "linear-gradient(to right, rgba(245, 158, 11, 0.95), rgba(245, 158, 11, 0.9))" : "linear-gradient(to right, rgba(34, 197, 94, 0.95), rgba(34, 197, 94, 0.9))"};
  border-bottom: 2px solid ${({ $hasConflicts: e }) => e ? "#d97706" : "#16a34a"};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 9999;
  animation: ${Qc} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, tl = S.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, nl = S.span`
  font-weight: 600;
  font-size: 14px;
  color: white;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "${({ $hasConflicts: e }) => e ? "!" : "✓"}";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: white;
    color: ${({ $hasConflicts: e }) => e ? "#f59e0b" : "#22c55e"};
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
  }
`, rl = S.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, ol = S.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;
S.div`
  display: none;
`;
S.div`
  display: none;
`;
S.button`
  display: none;
`;
const sl = S.div`
  display: flex;
  gap: 8px;
`, xr = S.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;

  ${({ variant: e, $hasConflicts: r }) => e === "primary" ? `
    background: white;
    color: ${r ? "#b45309" : "#15803d"};
    border: none;
    
    &:hover {
      background: ${r ? "#fef3c7" : "#f0fdf4"};
    }
  ` : `
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.5);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
    }
  `}
`, il = ({ selections: e, onConfirm: r, onClear: t }) => {
  var g;
  const o = je().multiSelect, s = Ee(() => e.filter((C) => C.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((g = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : g.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const p = s > 0, v = /* @__PURE__ */ ee(el, { $hasConflicts: p, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ ee(tl, { children: [
      /* @__PURE__ */ ee(nl, { $hasConflicts: p, children: [
        e.length,
        " ",
        i
      ] }),
      p && /* @__PURE__ */ ee(rl, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ M(ol, { children: c })
    ] }),
    /* @__PURE__ */ ee(sl, { children: [
      /* @__PURE__ */ ee(xr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ M(xr, { variant: "primary", $hasConflicts: p, onClick: r, children: p ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return so(v, document.body);
}, al = il, cl = Ot`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, ll = S.div`
  position: absolute;
  background: ${({ $hasConflict: e, $isDragging: r }) => r ? e ? "rgba(245, 158, 11, 0.4)" : "rgba(34, 197, 94, 0.4)" : e ? "rgba(245, 158, 11, 0.2)" : "rgba(34, 197, 94, 0.2)"};
  border: 2px solid ${({ $hasConflict: e }) => e ? "#f59e0b" : "#22c55e"};
  border-radius: 4px;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  box-sizing: border-box;
  animation: ${cl} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && Yt`
      border-style: dashed;
    `}
`, dl = S.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, ul = S.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, fl = S.button`
  background: rgba(220, 38, 38, 0.1);
  border: none;
  color: #dc2626;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  padding: 2px 6px;
  border-radius: 4px;
  opacity: 0.7;
  flex-shrink: 0;
  margin-left: 4px;

  &:hover {
    opacity: 1;
    background: rgba(220, 38, 38, 0.2);
  }
`, hl = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = fe(null), [a, l] = fe({ x: 0, y: 0 }), f = we(null), p = Ee(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return $e;
      default:
        return Se;
    }
  }, [t]), v = Ee(() => E().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), g = Ee(() => e.map((m, w) => {
    let _ = 0, T = !1;
    for (const U of r) {
      if (U.id === m.resourceId) {
        T = !0;
        break;
      }
      _ += Math.max(U.data.length, 1);
    }
    if (!T)
      return null;
    const B = E(m.startDate), K = E(m.endDate);
    let G, $;
    switch (t) {
      case 0:
        G = Math.floor(B.diff(v, "days") / 7), $ = Math.max(1, Math.ceil(K.diff(B, "days") / 7) + 1);
        break;
      case 1:
        G = B.diff(v, "days"), $ = Math.max(1, K.diff(B, "days") + 1);
        break;
      case 2:
        G = B.diff(v, "hours"), $ = Math.max(1, K.diff(B, "hours") + 1);
        break;
      default:
        G = 0, $ = 1;
    }
    const D = G * p;
    let k = 0;
    for (const U of i)
      U <= _ && k++;
    const R = _ * me + k * Te, I = $ * p;
    return {
      index: w,
      selection: m,
      x: D,
      y: R,
      width: I,
      height: me
    };
  }), [e, r, t, v, p]), C = (m, w) => {
    const _ = E(m).format("MMM D"), T = E(w).format("MMM D");
    return _ === T ? _ : `${_} - ${T}`;
  }, h = (m) => !m.hasConflict || !m.conflicts ? "" : `⚠️ Conflicts with:
${m.conflicts.map((_) => {
    const T = (_.overlapDuration / 36e5).toFixed(1);
    return `• ${_.event.title} (${T}h overlap)`;
  }).join(`
`)}`, O = le(
    (m) => {
      let w = 0;
      for (const _ of r) {
        const T = Math.max(_.data.length, 1);
        if (m >= w * me && m < (w + T) * me)
          return {
            resourceId: _.id,
            resourceLabel: _.label
          };
        w += T;
      }
      return null;
    },
    [r]
  ), J = le(
    (m) => {
      const w = Math.floor(m / p);
      switch (t) {
        case 0:
          return v.add(w * 7, "days").toDate();
        case 1:
          return v.add(w, "days").toDate();
        case 2:
          return v.add(w, "hours").toDate();
        default:
          return v.toDate();
      }
    },
    [t, v, p]
  ), z = le(
    (m, w) => {
      !s || (m.preventDefault(), m.stopPropagation(), !g[w]) || (f.current = { x: m.clientX, y: m.clientY }, d(w), l({ x: 0, y: 0 }));
    },
    [s, g]
  ), P = le(
    (m) => {
      if (c === null || !f.current)
        return;
      const w = m.clientX - f.current.x, _ = m.clientY - f.current.y, T = Math.round(w / p) * p, B = Math.round(_ / me) * me;
      l({ x: T, y: B });
    },
    [c, p]
  ), u = le(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const m = g[c];
    if (!m) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const w = m.x + a.x, _ = m.y + a.y, T = O(_ + me / 2);
    if (!T) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const B = J(w), K = e[c], G = K.endDate.getTime() - K.startDate.getTime(), $ = new Date(B.getTime() + G);
    s(c, {
      startDate: B,
      endDate: $,
      resourceId: T.resourceId,
      resourceLabel: T.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, g, e, s, O, J]);
  return xe(() => {
    if (c !== null)
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", u);
      };
  }, [c, P, u]), /* @__PURE__ */ M(Ge, { children: g.map((m) => {
    if (!m)
      return null;
    const w = m.selection.hasConflict || !1, _ = c === m.index, T = _ ? m.x + a.x : m.x, B = _ ? m.y + a.y : m.y;
    return /* @__PURE__ */ ee(
      ll,
      {
        $hasConflict: w,
        $isDragging: _,
        style: {
          left: T,
          top: B,
          width: m.width,
          height: m.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (K) => z(K, m.index),
        children: [
          w && /* @__PURE__ */ M(ul, { title: h(m.selection), children: "⚠️" }),
          /* @__PURE__ */ M(dl, { $hasConflict: w, children: C(m.selection.startDate, m.selection.endDate) }),
          /* @__PURE__ */ M(
            fl,
            {
              onClick: (K) => {
                K.stopPropagation(), o(m.index);
              },
              onMouseDown: (K) => K.stopPropagation(),
              title: w ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      m.index
    );
  }) });
}, pl = hl;
export {
  bl as Scheduler
};
