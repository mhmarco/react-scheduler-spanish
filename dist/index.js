var so = Object.defineProperty;
var io = (e, n, t) => n in e ? so(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var En = (e, n, t) => (io(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as M, jsxs as q, Fragment as Le } from "react/jsx-runtime";
import * as re from "react";
import Ke, { useRef as we, useContext as je, useMemo as De, useLayoutEffect as Cr, useDebugValue as _n, createElement as ao, createContext as Mr, useState as fe, useCallback as le, useEffect as xe, forwardRef as kr, useImperativeHandle as Dr } from "react";
import { createPortal as co } from "react-dom";
var $e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bt = {}, lo = {
  get exports() {
    return bt;
  },
  set exports(e) {
    bt = e;
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
function uo() {
  if (Tn)
    return ge;
  Tn = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var N = h.$$typeof;
      switch (N) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case r:
            case a:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case i:
                case d:
                case m:
                case f:
                case s:
                  return h;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  return ge.ContextConsumer = i, ge.ContextProvider = s, ge.Element = e, ge.ForwardRef = d, ge.Fragment = t, ge.Lazy = m, ge.Memo = f, ge.Portal = n, ge.Profiler = o, ge.StrictMode = r, ge.Suspense = a, ge.SuspenseList = l, ge.isAsyncMode = function() {
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
    return C(h) === m;
  }, ge.isMemo = function(h) {
    return C(h) === f;
  }, ge.isPortal = function(h) {
    return C(h) === n;
  }, ge.isProfiler = function(h) {
    return C(h) === o;
  }, ge.isStrictMode = function(h) {
    return C(h) === r;
  }, ge.isSuspense = function(h) {
    return C(h) === a;
  }, ge.isSuspenseList = function(h) {
    return C(h) === l;
  }, ge.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === r || h === a || h === l || h === v || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === f || h.$$typeof === s || h.$$typeof === i || h.$$typeof === d || h.$$typeof === y || h.getModuleId !== void 0);
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
function fo() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, C = !1, h = !1, N = !1, K = !1, B;
    B = Symbol.for("react.module.reference");
    function P(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === t || L === o || K || L === r || L === a || L === l || N || L === v || y || C || h || typeof L == "object" && L !== null && (L.$$typeof === m || L.$$typeof === f || L.$$typeof === s || L.$$typeof === i || L.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === B || L.getModuleId !== void 0));
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
              case r:
              case a:
              case l:
                return te;
              default:
                var F = te && te.$$typeof;
                switch (F) {
                  case c:
                  case i:
                  case d:
                  case m:
                  case f:
                  case s:
                    return F;
                  default:
                    return X;
                }
            }
          case n:
            return X;
        }
      }
    }
    var p = i, w = s, _ = e, T = d, z = t, U = m, G = f, k = n, $ = o, D = r, O = a, I = l, J = !1, ee = !1;
    function se(L) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(L) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
    function R(L) {
      return u(L) === m;
    }
    function g(L) {
      return u(L) === f;
    }
    function Y(L) {
      return u(L) === n;
    }
    function W(L) {
      return u(L) === o;
    }
    function A(L) {
      return u(L) === r;
    }
    function x(L) {
      return u(L) === a;
    }
    function Q(L) {
      return u(L) === l;
    }
    ye.ContextConsumer = p, ye.ContextProvider = w, ye.Element = _, ye.ForwardRef = T, ye.Fragment = z, ye.Lazy = U, ye.Memo = G, ye.Portal = k, ye.Profiler = $, ye.StrictMode = D, ye.Suspense = O, ye.SuspenseList = I, ye.isAsyncMode = se, ye.isConcurrentMode = oe, ye.isContextConsumer = H, ye.isContextProvider = j, ye.isElement = Z, ye.isForwardRef = V, ye.isFragment = b, ye.isLazy = R, ye.isMemo = g, ye.isPortal = Y, ye.isProfiler = W, ye.isStrictMode = A, ye.isSuspense = x, ye.isSuspenseList = Q, ye.isValidElementType = P, ye.typeOf = u;
  }()), ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = uo() : e.exports = fo();
})(lo);
function ho(e) {
  function n(H, j, Z, V, b) {
    for (var R = 0, g = 0, Y = 0, W = 0, A, x, Q = 0, L = 0, X, te = X = A = 0, F = 0, ie = 0, pe = 0, ue = 0, ae = Z.length, de = ae - 1, ce, ne = "", he = "", Me = "", Pe = "", _e; F < ae; ) {
      if (x = Z.charCodeAt(F), F === de && g + W + Y + R !== 0 && (g !== 0 && (x = g === 47 ? 10 : 47), W = Y = R = 0, ae++, de++), g + W + Y + R === 0) {
        if (F === de && (0 < ie && (ne = ne.replace(m, "")), 0 < ne.trim().length)) {
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
                switch (0 < ie && (ne = ne.replace(m, "")), x = ne.charCodeAt(1), x) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ie = j;
                    break;
                  default:
                    ie = O;
                }
                if (X = n(j, ie, X, x, b + 1), ue = X.length, 0 < J && (ie = t(O, ne, pe), _e = c(3, X, ie, j, k, G, ue, x, b, V), ne = ie.join(""), _e !== void 0 && (ue = (X = _e.trim()).length) === 0 && (x = 0, X = "")), 0 < ue)
                  switch (x) {
                    case 115:
                      ne = ne.replace(p, i);
                    case 100:
                    case 109:
                    case 45:
                      X = ne + "{" + X + "}";
                      break;
                    case 107:
                      ne = ne.replace(K, "$1 $2"), X = ne + "{" + X + "}", X = D === 1 || D === 2 && s("@" + X, 3) ? "@-webkit-" + X + "@" + X : "@" + X;
                      break;
                    default:
                      X = ne + X, V === 112 && (X = (he += X, ""));
                  }
                else
                  X = "";
                break;
              default:
                X = n(j, t(j, ne, pe), X, V, b + 1);
            }
            Me += X, X = pe = ie = te = A = 0, ne = "", x = Z.charCodeAt(++F);
            break;
          case 125:
          case 59:
            if (ne = (0 < ie ? ne.replace(m, "") : ne).trim(), 1 < (ue = ne.length))
              switch (te === 0 && (A = ne.charCodeAt(0), A === 45 || 96 < A && 123 > A) && (ue = (ne = ne.replace(" ", ":")).length), 0 < J && (_e = c(1, ne, j, H, k, G, he.length, V, b, V)) !== void 0 && (ue = (ne = _e.trim()).length) === 0 && (ne = "\0\0"), A = ne.charCodeAt(0), x = ne.charCodeAt(1), A) {
                case 0:
                  break;
                case 64:
                  if (x === 105 || x === 99) {
                    Pe += ne + Z.charAt(F);
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
          g === 47 ? g = 0 : 1 + A === 0 && V !== 107 && 0 < ne.length && (ie = 1, ne += "\0"), 0 < J * se && c(0, ne, j, H, k, G, he.length, V, b, V), G = 1, k++;
          break;
        case 59:
        case 125:
          if (g + W + Y + R === 0) {
            G++;
            break;
          }
        default:
          switch (G++, ce = Z.charAt(F), x) {
            case 9:
            case 32:
              if (W + R + g === 0)
                switch (Q) {
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
              W + g + R === 0 && (ie = pe = 1, ce = "\f" + ce);
              break;
            case 108:
              if (W + g + R + $ === 0 && 0 < te)
                switch (F - te) {
                  case 2:
                    Q === 112 && Z.charCodeAt(F - 3) === 58 && ($ = Q);
                  case 8:
                    L === 111 && ($ = L);
                }
              break;
            case 58:
              W + g + R === 0 && (te = F);
              break;
            case 44:
              g + Y + W + R === 0 && (ie = 1, ce += "\r");
              break;
            case 34:
            case 39:
              g === 0 && (W = W === x ? 0 : W === 0 ? x : W);
              break;
            case 91:
              W + g + Y === 0 && R++;
              break;
            case 93:
              W + g + Y === 0 && R--;
              break;
            case 41:
              W + g + R === 0 && Y--;
              break;
            case 40:
              if (W + g + R === 0) {
                if (A === 0)
                  switch (2 * Q + 3 * L) {
                    case 533:
                      break;
                    default:
                      A = 1;
                  }
                Y++;
              }
              break;
            case 64:
              g + Y + W + R + te + X === 0 && (X = 1);
              break;
            case 42:
            case 47:
              if (!(0 < W + R + Y))
                switch (g) {
                  case 0:
                    switch (2 * x + 3 * Z.charCodeAt(F + 1)) {
                      case 235:
                        g = 47;
                        break;
                      case 220:
                        ue = F, g = 42;
                    }
                    break;
                  case 42:
                    x === 47 && Q === 42 && ue + 2 !== F && (Z.charCodeAt(ue + 2) === 33 && (he += Z.substring(ue, F + 1)), ce = "", g = 0);
                }
          }
          g === 0 && (ne += ce);
      }
      L = Q, Q = x, F++;
    }
    if (ue = he.length, 0 < ue) {
      if (ie = j, 0 < J && (_e = c(2, he, ie, H, k, G, ue, V, b, V), _e !== void 0 && (he = _e).length === 0))
        return Pe + he + Me;
      if (he = ie.join(",") + "{" + he + "}", D * $ !== 0) {
        switch (D !== 2 || s(he, 2) || ($ = 0), $) {
          case 111:
            he = he.replace(P, ":-moz-$1") + he;
            break;
          case 112:
            he = he.replace(B, "::-webkit-input-$1") + he.replace(B, "::-moz-$1") + he.replace(B, ":-ms-input-$1") + he;
        }
        $ = 0;
      }
    }
    return Pe + he + Me;
  }
  function t(H, j, Z) {
    var V = j.trim().split(h);
    j = V;
    var b = V.length, R = H.length;
    switch (R) {
      case 0:
      case 1:
        var g = 0;
        for (H = R === 0 ? "" : H[0] + " "; g < b; ++g)
          j[g] = r(H, j[g], Z).trim();
        break;
      default:
        var Y = g = 0;
        for (j = []; g < b; ++g)
          for (var W = 0; W < R; ++W)
            j[Y++] = r(H[W] + " ", V[g], Z).trim();
    }
    return j;
  }
  function r(H, j, Z) {
    var V = j.charCodeAt(0);
    switch (33 > V && (V = (j = j.trim()).charCodeAt(0)), V) {
      case 38:
        return j.replace(N, "$1" + H.trim());
      case 58:
        return H.trim() + j.replace(N, "$1" + H.trim());
      default:
        if (0 < 1 * Z && 0 < j.indexOf("\f"))
          return j.replace(N, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + j;
  }
  function o(H, j, Z, V) {
    var b = H + ";", R = 2 * j + 3 * Z + 4 * V;
    if (R === 944) {
      H = b.indexOf(":", 9) + 1;
      var g = b.substring(H, b.length - 1).trim();
      return g = b.substring(0, H).trim() + g + ";", D === 1 || D === 2 && s(g, 1) ? "-webkit-" + g + g : g;
    }
    if (D === 0 || D === 2 && !s(b, 1))
      return b;
    switch (R) {
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
          return b.replace(U, "$1-webkit-$2") + b;
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
        return g = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + g + "-webkit-" + b + "-ms-flex-pack" + g + b;
      case 1005:
        return y.test(b) ? b.replace(v, ":-webkit-") + b.replace(v, ":-moz-") + b : b;
      case 1e3:
        switch (g = b.substring(13).trim(), j = g.indexOf("-") + 1, g.charCodeAt(0) + g.charCodeAt(j)) {
          case 226:
            g = b.replace(u, "tb");
            break;
          case 232:
            g = b.replace(u, "tb-rl");
            break;
          case 220:
            g = b.replace(u, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + g + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (j = (b = H).length - 10, g = (b.charCodeAt(j) === 33 ? b.substring(0, j) : b).substring(H.indexOf(":", 7) + 1).trim(), R = g.charCodeAt(0) + (g.charCodeAt(7) | 0)) {
          case 203:
            if (111 > g.charCodeAt(8))
              break;
          case 115:
            b = b.replace(g, "-webkit-" + g) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(g, "-webkit-" + (102 < R ? "inline-" : "") + "box") + ";" + b.replace(g, "-webkit-" + g) + ";" + b.replace(g, "-ms-" + g + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return g = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + g + "-ms-flex-" + g + b;
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
        if (z.test(H) === !0)
          return (g = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(H.replace("stretch", "fill-available"), j, Z, V).replace(":fill-available", ":stretch") : b.replace(g, "-webkit-" + g) + b.replace(g, "-moz-" + g.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, Z + V === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(H, j) {
    var Z = H.indexOf(j === 1 ? ":" : "{"), V = H.substring(0, j !== 3 ? Z : 10);
    return Z = H.substring(Z + 1, H.length - 1), ee(j !== 2 ? V : V.replace(T, "$1"), Z, j);
  }
  function i(H, j) {
    var Z = o(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return Z !== j + ";" ? Z.replace(w, " or ($1)").substring(4) : "(" + j + ")";
  }
  function c(H, j, Z, V, b, R, g, Y, W, A) {
    for (var x = 0, Q = j, L; x < J; ++x)
      switch (L = I[x].call(l, H, Q, Z, V, b, R, g, Y, W, A)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Q = L;
      }
    if (Q !== j)
      return Q;
  }
  function d(H) {
    switch (H) {
      case void 0:
      case null:
        J = I.length = 0;
        break;
      default:
        if (typeof H == "function")
          I[J++] = H;
        else if (typeof H == "object")
          for (var j = 0, Z = H.length; j < Z; ++j)
            d(H[j]);
        else
          se = !!H | 0;
    }
    return d;
  }
  function a(H) {
    return H = H.prefix, H !== void 0 && (ee = null, H ? typeof H != "function" ? D = 1 : (D = 2, ee = H) : D = 0), a;
  }
  function l(H, j) {
    var Z = H;
    if (33 > Z.charCodeAt(0) && (Z = Z.trim()), oe = Z, Z = [oe], 0 < J) {
      var V = c(-1, j, Z, Z, k, G, 0, 0, 0, 0);
      V !== void 0 && typeof V == "string" && (j = V);
    }
    var b = n(O, Z, j, 0, 0);
    return 0 < J && (V = c(-2, b, Z, Z, k, G, b.length, 0, 0, 0), V !== void 0 && (b = V)), oe = "", $ = 0, G = k = 1, b;
  }
  var f = /^\0+/g, m = /[\0\r\f]/g, v = /: */g, y = /zoo|gra/, C = /([,: ])(transform)/g, h = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, K = /@(k\w+)\s*(\S*)\s*/, B = /::(place)/g, P = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, p = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, _ = /-self|flex-/g, T = /[^]*?(:[rp][el]a[\w-]+)[^]*/, z = /stretch|:\s*\w+\-(?:conte|avail)/, U = /([^-])(image-set\()/, G = 1, k = 1, $ = 0, D = 1, O = [], I = [], J = 0, ee = null, se = 0, oe = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var po = {
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
function mo(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var go = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, An = /* @__PURE__ */ mo(
  function(e) {
    return go.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Zt = {}, yo = {
  get exports() {
    return Zt;
  },
  set exports(e) {
    Zt = e;
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
function vo() {
  if (In)
    return ve;
  In = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
  function B(u) {
    if (typeof u == "object" && u !== null) {
      var p = u.$$typeof;
      switch (p) {
        case n:
          switch (u = u.type, u) {
            case d:
            case a:
            case r:
            case s:
            case o:
            case f:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case c:
                case l:
                case y:
                case v:
                case i:
                  return u;
                default:
                  return p;
              }
          }
        case t:
          return p;
      }
    }
  }
  function P(u) {
    return B(u) === a;
  }
  return ve.AsyncMode = d, ve.ConcurrentMode = a, ve.ContextConsumer = c, ve.ContextProvider = i, ve.Element = n, ve.ForwardRef = l, ve.Fragment = r, ve.Lazy = y, ve.Memo = v, ve.Portal = t, ve.Profiler = s, ve.StrictMode = o, ve.Suspense = f, ve.isAsyncMode = function(u) {
    return P(u) || B(u) === d;
  }, ve.isConcurrentMode = P, ve.isContextConsumer = function(u) {
    return B(u) === c;
  }, ve.isContextProvider = function(u) {
    return B(u) === i;
  }, ve.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, ve.isForwardRef = function(u) {
    return B(u) === l;
  }, ve.isFragment = function(u) {
    return B(u) === r;
  }, ve.isLazy = function(u) {
    return B(u) === y;
  }, ve.isMemo = function(u) {
    return B(u) === v;
  }, ve.isPortal = function(u) {
    return B(u) === t;
  }, ve.isProfiler = function(u) {
    return B(u) === s;
  }, ve.isStrictMode = function(u) {
    return B(u) === o;
  }, ve.isSuspense = function(u) {
    return B(u) === f;
  }, ve.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === m || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === v || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === h || u.$$typeof === N || u.$$typeof === K || u.$$typeof === C);
  }, ve.typeOf = B, ve;
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
function bo() {
  return Yn || (Yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
    function B(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === r || x === a || x === s || x === o || x === f || x === m || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === v || x.$$typeof === i || x.$$typeof === c || x.$$typeof === l || x.$$typeof === h || x.$$typeof === N || x.$$typeof === K || x.$$typeof === C);
    }
    function P(x) {
      if (typeof x == "object" && x !== null) {
        var Q = x.$$typeof;
        switch (Q) {
          case n:
            var L = x.type;
            switch (L) {
              case d:
              case a:
              case r:
              case s:
              case o:
              case f:
                return L;
              default:
                var X = L && L.$$typeof;
                switch (X) {
                  case c:
                  case l:
                  case y:
                  case v:
                  case i:
                    return X;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var u = d, p = a, w = c, _ = i, T = n, z = l, U = r, G = y, k = v, $ = t, D = s, O = o, I = f, J = !1;
    function ee(x) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(x) || P(x) === d;
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
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }
    function Z(x) {
      return P(x) === l;
    }
    function V(x) {
      return P(x) === r;
    }
    function b(x) {
      return P(x) === y;
    }
    function R(x) {
      return P(x) === v;
    }
    function g(x) {
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
    be.AsyncMode = u, be.ConcurrentMode = p, be.ContextConsumer = w, be.ContextProvider = _, be.Element = T, be.ForwardRef = z, be.Fragment = U, be.Lazy = G, be.Memo = k, be.Portal = $, be.Profiler = D, be.StrictMode = O, be.Suspense = I, be.isAsyncMode = ee, be.isConcurrentMode = se, be.isContextConsumer = oe, be.isContextProvider = H, be.isElement = j, be.isForwardRef = Z, be.isFragment = V, be.isLazy = b, be.isMemo = R, be.isPortal = g, be.isProfiler = Y, be.isStrictMode = W, be.isSuspense = A, be.isValidElementType = B, be.typeOf = P;
  }()), be;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = vo() : e.exports = bo();
})(yo);
var gn = Zt, xo = {
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
}, wo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, So = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, $r = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yn = {};
yn[gn.ForwardRef] = So;
yn[gn.Memo] = $r;
function On(e) {
  return gn.isMemo(e) ? $r : yn[e.$$typeof] || xo;
}
var Co = Object.defineProperty, Mo = Object.getOwnPropertyNames, Ln = Object.getOwnPropertySymbols, ko = Object.getOwnPropertyDescriptor, Do = Object.getPrototypeOf, Rn = Object.prototype;
function Er(e, n, t) {
  if (typeof n != "string") {
    if (Rn) {
      var r = Do(n);
      r && r !== Rn && Er(e, r, t);
    }
    var o = Mo(n);
    Ln && (o = o.concat(Ln(n)));
    for (var s = On(e), i = On(n), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!wo[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = ko(n, d);
        try {
          Co(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var $o = Er;
function Ye() {
  return (Ye = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Nn = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Vt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !bt.typeOf(e);
}, _t = Object.freeze([]), Be = Object.freeze({});
function at(e) {
  return typeof e == "function";
}
function Gt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function vn(e) {
  return e && typeof e.styledComponentId == "string";
}
var ct = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", bn = typeof window < "u" && "HTMLElement" in window, Eo = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), _o = {}, To = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Po() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Fe(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Po.apply(void 0, [To[e]].concat(t)).trim());
}
var Ao = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, n.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && Fe(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = s; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(t + 1), a = 0, l = r.length; a < l; a++)
      this.tag.insertRule(d, r[a]) && (this.groupSizes[t]++, d++);
  }, n.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, n.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, c = s; c < i; c++)
      r += this.tag.getRule(c) + `/*!sc*/
`;
    return r;
  }, e;
}(), $t = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), yt = 1, Mt = function(e) {
  if ($t.has(e))
    return $t.get(e);
  for (; Tt.has(yt); )
    yt++;
  var n = yt++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Fe(16, "" + n), $t.set(e, n), Tt.set(n, e), n;
}, Io = function(e) {
  return Tt.get(e);
}, Yo = function(e, n) {
  n >= yt && (yt = n + 1), $t.set(e, n), Tt.set(n, e);
}, Oo = "style[" + ct + '][data-styled-version="5.3.8"]', Lo = new RegExp("^" + ct + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ro = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, No = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Lo);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (Yo(a, d), Ro(e, a, c[3]), e.getTag().insertRules(d, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, Fo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, _r = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(ct))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ct, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = Fo();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, Wo = function() {
  function e(t) {
    var r = this.element = _r(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var d = s[i];
        if (d.ownerNode === o)
          return d;
      }
      Fe(17);
    }(r), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, n.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), Ho = function() {
  function e(t) {
    var r = this.element = _r(t);
    this.nodes = r.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), zo = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, n.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Fn = bn, Bo = { isServer: !bn, useCSSOMInjection: !Eo }, Pt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Be), r === void 0 && (r = {}), this.options = Ye({}, Bo, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && bn && Fn && (Fn = !1, function(s) {
      for (var i = document.querySelectorAll(Oo), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(ct) !== "active" && (No(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Mt(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Ye({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new zo(i) : s ? new Wo(i) : new Ho(i), new Ao(t)));
    var t, r, o, s, i;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (Mt(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Mt(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(Mt(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, s = "", i = 0; i < o; i++) {
        var c = Io(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = r.getGroup(i);
          if (d && a && d.size) {
            var l = ct + ".g" + i + '[id="' + c + '"]', f = "";
            d !== void 0 && d.forEach(function(m) {
              m.length > 0 && (f += m + ",");
            }), s += "" + a + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), jo = /(a)(d)/gi, Wn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xt(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Wn(n % 52) + t;
  return (Wn(n % 52) + t).replace(jo, "$1-$2");
}
var Xe = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Tr = function(e) {
  return Xe(5381, e);
};
function Pr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (at(t) && !vn(t))
      return !1;
  }
  return !0;
}
var Zo = Tr("5.3.8"), Vo = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Pr(n), this.componentId = t, this.baseHash = Xe(Zo, t), this.baseStyle = r, Pt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Je(this.rules, n, t, r).join(""), c = Xt(Xe(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = r(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = Xe(this.baseHash, r.hash), f = "", m = 0; m < a; m++) {
        var v = this.rules[m];
        if (typeof v == "string")
          f += v, process.env.NODE_ENV !== "production" && (l = Xe(l, v + m));
        else if (v) {
          var y = Je(v, n, t, r), C = Array.isArray(y) ? y.join("") : y;
          l = Xe(l, C + m), f += C;
        }
      }
      if (f) {
        var h = Xt(l >>> 0);
        if (!t.hasNameForId(o, h)) {
          var N = r(f, "." + h, void 0, o);
          t.insertRules(o, h, N);
        }
        s.push(h);
      }
    }
    return s.join(" ");
  }, e;
}(), Go = /^\s*\/\/.*$/gm, Xo = [":", "[", ".", "#"];
function Uo(e) {
  var n, t, r, o, s = e === void 0 ? Be : e, i = s.options, c = i === void 0 ? Be : i, d = s.plugins, a = d === void 0 ? _t : d, l = new ho(c), f = [], m = function(C) {
    function h(N) {
      if (N)
        try {
          C(N + "}");
        } catch {
        }
    }
    return function(N, K, B, P, u, p, w, _, T, z) {
      switch (N) {
        case 1:
          if (T === 0 && K.charCodeAt(0) === 64)
            return C(K + ";"), "";
          break;
        case 2:
          if (_ === 0)
            return K + "/*|*/";
          break;
        case 3:
          switch (_) {
            case 102:
            case 112:
              return C(B[0] + K), "";
            default:
              return K + (z === 0 ? "/*|*/" : "");
          }
        case -2:
          K.split("/*|*/}").forEach(h);
      }
    };
  }(function(C) {
    f.push(C);
  }), v = function(C, h, N) {
    return h === 0 && Xo.indexOf(N[t.length]) !== -1 || N.match(o) ? C : "." + n;
  };
  function y(C, h, N, K) {
    K === void 0 && (K = "&");
    var B = C.replace(Go, ""), P = h && N ? N + " " + h + " { " + B + " }" : B;
    return n = K, t = h, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(N || !h ? "" : h, P);
  }
  return l.use([].concat(a, [function(C, h, N) {
    C === 2 && N.length && N[0].lastIndexOf(t) > 0 && (N[0] = N[0].replace(r, v));
  }, m, function(C) {
    if (C === -2) {
      var h = f;
      return f = [], h;
    }
  }])), y.hash = a.length ? a.reduce(function(C, h) {
    return h.name || Fe(15), Xe(C, h.name);
  }, 5381).toString() : "", y;
}
var Ar = Ke.createContext();
Ar.Consumer;
var Ir = Ke.createContext(), Ko = (Ir.Consumer, new Pt()), Ut = Uo();
function Yr() {
  return je(Ar) || Ko;
}
function Or() {
  return je(Ir) || Ut;
}
var Lr = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Ut);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Fe(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Ut), this.name + n.hash;
  }, e;
}(), Jo = /([A-Z])/, qo = /([A-Z])/g, Qo = /^ms-/, es = function(e) {
  return "-" + e.toLowerCase();
};
function Hn(e) {
  return Jo.test(e) ? e.replace(qo, es).replace(Qo, "-ms-") : e;
}
var zn = function(e) {
  return e == null || e === !1 || e === "";
};
function Je(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = Je(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (zn(e))
    return "";
  if (vn(e))
    return "." + e.styledComponentId;
  if (at(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var d = e(n);
    return process.env.NODE_ENV !== "production" && bt.isElement(d) && console.warn(Gt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Je(d, n, t, r);
  }
  var a;
  return e instanceof Lr ? t ? (e.inject(t, r), e.getName(r)) : e : Vt(e) ? function l(f, m) {
    var v, y, C = [];
    for (var h in f)
      f.hasOwnProperty(h) && !zn(f[h]) && (Array.isArray(f[h]) && f[h].isCss || at(f[h]) ? C.push(Hn(h) + ":", f[h], ";") : Vt(f[h]) ? C.push.apply(C, l(f[h], h)) : C.push(Hn(h) + ": " + (v = h, (y = f[h]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || v in po ? String(y).trim() : y + "px") + ";"));
    return m ? [m + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var Bn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Yt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return at(e) || Vt(e) ? Bn(Je(Nn(_t, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Bn(Je(Nn(e, t)));
}
var jn = /invalid hook call/i, kt = /* @__PURE__ */ new Set(), Rr = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (jn.test(s))
          o = !1, kt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          r.apply(void 0, [s].concat(c));
        }
      }, we(), o && !kt.has(t) && (console.warn(t), kt.add(t));
    } catch (s) {
      jn.test(s.message) && kt.delete(t);
    } finally {
      console.error = r;
    }
  }
}, Nr = function(e, n, t) {
  return t === void 0 && (t = Be), e.theme !== t.theme && e.theme || n || t.theme;
}, ts = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ns = /(^-|-$)/g;
function Nt(e) {
  return e.replace(ts, "-").replace(ns, "");
}
var xn = function(e) {
  return Xt(Tr(e) >>> 0);
};
function Dt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Kt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, rs = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function os(e, n, t) {
  var r = e[t];
  Kt(n) && Kt(r) ? Fr(r, n) : e[t] = n;
}
function Fr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Kt(i))
      for (var c in i)
        rs(c) && os(e, i[c], c);
  }
  return e;
}
var lt = Ke.createContext();
lt.Consumer;
function ss(e) {
  var n = je(lt), t = De(function() {
    return function(r, o) {
      if (!r)
        return Fe(14);
      if (at(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Fe(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Fe(8) : o ? Ye({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? Ke.createElement(lt.Provider, { value: t }, e.children) : null;
}
var Ft = {};
function Wr(e, n, t) {
  var r = vn(e), o = !Dt(e), s = n.attrs, i = s === void 0 ? _t : s, c = n.componentId, d = c === void 0 ? function(K, B) {
    var P = typeof K != "string" ? "sc" : Nt(K);
    Ft[P] = (Ft[P] || 0) + 1;
    var u = P + "-" + xn("5.3.8" + P + Ft[P]);
    return B ? B + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(K) {
    return Dt(K) ? "styled." + K : "Styled(" + Gt(K) + ")";
  }(e) : a, f = n.displayName && n.componentId ? Nt(n.displayName) + "-" + n.componentId : n.componentId || d, m = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, v = n.shouldForwardProp;
  r && e.shouldForwardProp && (v = n.shouldForwardProp ? function(K, B, P) {
    return e.shouldForwardProp(K, B, P) && n.shouldForwardProp(K, B, P);
  } : e.shouldForwardProp);
  var y, C = new Vo(t, f, r ? e.componentStyle : void 0), h = C.isStatic && i.length === 0, N = function(K, B) {
    return function(P, u, p, w) {
      var _ = P.attrs, T = P.componentStyle, z = P.defaultProps, U = P.foldedComponentIds, G = P.shouldForwardProp, k = P.styledComponentId, $ = P.target;
      process.env.NODE_ENV !== "production" && _n(k);
      var D = function(V, b, R) {
        V === void 0 && (V = Be);
        var g = Ye({}, b, { theme: V }), Y = {};
        return R.forEach(function(W) {
          var A, x, Q, L = W;
          for (A in at(L) && (L = L(g)), L)
            g[A] = Y[A] = A === "className" ? (x = Y[A], Q = L[A], x && Q ? x + " " + Q : x || Q) : L[A];
        }), [g, Y];
      }(Nr(u, je(lt), z) || Be, u, _), O = D[0], I = D[1], J = function(V, b, R, g) {
        var Y = Yr(), W = Or(), A = b ? V.generateAndInjectStyles(Be, Y, W) : V.generateAndInjectStyles(R, Y, W);
        return process.env.NODE_ENV !== "production" && _n(A), process.env.NODE_ENV !== "production" && !b && g && g(A), A;
      }(T, w, O, process.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), ee = p, se = I.$as || u.$as || I.as || u.as || $, oe = Dt(se), H = I !== u ? Ye({}, u, {}, I) : u, j = {};
      for (var Z in H)
        Z[0] !== "$" && Z !== "as" && (Z === "forwardedAs" ? j.as = H[Z] : (G ? G(Z, An, se) : !oe || An(Z)) && (j[Z] = H[Z]));
      return u.style && I.style !== u.style && (j.style = Ye({}, u.style, {}, I.style)), j.className = Array.prototype.concat(U, k, J !== k ? J : null, u.className, I.className).filter(Boolean).join(" "), j.ref = ee, ao(se, j);
    }(y, K, B, h);
  };
  return N.displayName = l, (y = Ke.forwardRef(N)).attrs = m, y.componentStyle = C, y.displayName = l, y.shouldForwardProp = v, y.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : _t, y.styledComponentId = f, y.target = r ? e.target : e, y.withComponent = function(K) {
    var B = n.componentId, P = function(p, w) {
      if (p == null)
        return {};
      var _, T, z = {}, U = Object.keys(p);
      for (T = 0; T < U.length; T++)
        _ = U[T], w.indexOf(_) >= 0 || (z[_] = p[_]);
      return z;
    }(n, ["componentId"]), u = B && B + "-" + (Dt(K) ? K : Nt(Gt(K)));
    return Wr(K, Ye({}, P, { attrs: m, componentId: u }), t);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(K) {
    this._foldedDefaultProps = r ? Fr({}, e.defaultProps, K) : K;
  } }), process.env.NODE_ENV !== "production" && (Rr(l, f), y.warnTooManyClasses = function(K, B) {
    var P = {}, u = !1;
    return function(p) {
      if (!u && (P[p] = !0, Object.keys(P).length >= 200)) {
        var w = B ? ' with the id of "' + B + '"' : "";
        console.warn("Over 200 classes were generated for component " + K + w + `.
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
  }(l, f)), y.toString = function() {
    return "." + y.styledComponentId;
  }, o && $o(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var Jt = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Be), !bt.isValidElementType(r))
      return Fe(1, String(r));
    var s = function() {
      return t(r, o, Yt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Ye({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Ye({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Wr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Jt[e] = Jt(e);
});
var is = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Pr(t), Pt.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(Je(this.rules, r, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && Pt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function as(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Yt.apply(void 0, [e].concat(t)), s = "sc-global-" + xn(JSON.stringify(o)), i = new is(o, s);
  function c(a) {
    var l = Yr(), f = Or(), m = je(lt), v = we(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Ke.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(y) {
      return typeof y == "string" && y.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(v, a, l, m, f), Cr(function() {
      if (!l.server)
        return d(v, a, l, m, f), function() {
          return i.removeStyles(v, l);
        };
    }, [v, a, l, m, f]), null;
  }
  function d(a, l, f, m, v) {
    if (i.isStatic)
      i.renderStyles(a, _o, f, v);
    else {
      var y = Ye({}, l, { theme: Nr(l, m, c.defaultProps) });
      i.renderStyles(a, y, f, v);
    }
  }
  return process.env.NODE_ENV !== "production" && Rr(s), Ke.memo(c);
}
function Ot(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Yt.apply(void 0, [e].concat(t)).join(""), s = xn(o);
  return new Lr(s, o);
}
var et = function() {
  return je(lt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const S = Jt, gt = "reactSchedulerOutsideWrapper", cs = as`

  #${gt} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${gt} *,
 #${gt} *:before,
 #${gt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, ls = {
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
    today: "#0F7D66",
    subcontractBg: "#FFF7ED",
    subcontractBorder: "#F59E0B",
    subcontractText: "#92400E"
  }
}, ds = {
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
    today: "#2DD4BF",
    subcontractBg: "#422006",
    subcontractBorder: "#D97706",
    subcontractText: "#FCD34D"
  }
}, ht = `
margin: 0;
padding: 0;
`, Lt = `
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
const Se = 50, We = 24, pt = 16, Ue = 40, dt = Ue + pt + We, ut = 84, me = 56, Ie = 196, Ae = 12, Ee = 50, ft = 24, xt = 16, qt = 40, us = ft + xt + qt, Zn = 24, Vn = 52, Oe = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter",
    hoursInDay: "400 9px Inter"
  }
}, it = 3, fs = 1.6, hs = 4.5, Qt = 12, At = 24, ps = "reactSchedulerCanvasHeaderWrapper", Hr = "reactSchedulerCanvasWrapper", qe = gt, ms = 4, wn = 48, ze = 5, gs = 40, Gn = 8, Sn = We / 2 + 2, zr = pt / 2 + We + 1, Xn = 2, Ce = 60, Te = 21;
var Qe = {}, ys = {
  get exports() {
    return Qe;
  },
  set exports(e) {
    Qe = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })($e, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", m = "quarter", v = "year", y = "date", C = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, N = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
      var $ = ["th", "st", "nd", "rd"], D = k % 100;
      return "[" + k + ($[(D - 20) % 10] || $[D] || $[0]) + "]";
    } }, B = function(k, $, D) {
      var O = String(k);
      return !O || O.length >= $ ? k : "" + Array($ + 1 - O.length).join(D) + k;
    }, P = { s: B, z: function(k) {
      var $ = -k.utcOffset(), D = Math.abs($), O = Math.floor(D / 60), I = D % 60;
      return ($ <= 0 ? "+" : "-") + B(O, 2, "0") + ":" + B(I, 2, "0");
    }, m: function k($, D) {
      if ($.date() < D.date())
        return -k(D, $);
      var O = 12 * (D.year() - $.year()) + (D.month() - $.month()), I = $.clone().add(O, f), J = D - I < 0, ee = $.clone().add(O + (J ? -1 : 1), f);
      return +(-(O + (D - I) / (J ? I - ee : ee - I)) || 0);
    }, a: function(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
    }, p: function(k) {
      return { M: f, y: v, w: l, d: a, D: y, h: d, m: c, s: i, ms: s, Q: m }[k] || String(k || "").toLowerCase().replace(/s$/, "");
    }, u: function(k) {
      return k === void 0;
    } }, u = "en", p = {};
    p[u] = K;
    var w = function(k) {
      return k instanceof U;
    }, _ = function k($, D, O) {
      var I;
      if (!$)
        return u;
      if (typeof $ == "string") {
        var J = $.toLowerCase();
        p[J] && (I = J), D && (p[J] = D, I = J);
        var ee = $.split("-");
        if (!I && ee.length > 1)
          return k(ee[0]);
      } else {
        var se = $.name;
        p[se] = $, I = se;
      }
      return !O && I && (u = I), I || !O && u;
    }, T = function(k, $) {
      if (w(k))
        return k.clone();
      var D = typeof $ == "object" ? $ : {};
      return D.date = k, D.args = arguments, new U(D);
    }, z = P;
    z.l = _, z.i = w, z.w = function(k, $) {
      return T(k, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var U = function() {
      function k(D) {
        this.$L = _(D.locale, null, !0), this.parse(D);
      }
      var $ = k.prototype;
      return $.parse = function(D) {
        this.$d = function(O) {
          var I = O.date, J = O.utc;
          if (I === null)
            return new Date(NaN);
          if (z.u(I))
            return new Date();
          if (I instanceof Date)
            return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var ee = I.match(h);
            if (ee) {
              var se = ee[2] - 1 || 0, oe = (ee[7] || "0").substring(0, 3);
              return J ? new Date(Date.UTC(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe)) : new Date(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe);
            }
          }
          return new Date(I);
        }(D), this.$x = D.x || {}, this.init();
      }, $.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, $.$utils = function() {
        return z;
      }, $.isValid = function() {
        return this.$d.toString() !== C;
      }, $.isSame = function(D, O) {
        var I = T(D);
        return this.startOf(O) <= I && I <= this.endOf(O);
      }, $.isAfter = function(D, O) {
        return T(D) < this.startOf(O);
      }, $.isBefore = function(D, O) {
        return this.endOf(O) < T(D);
      }, $.$g = function(D, O, I) {
        return z.u(D) ? this[O] : this.set(I, D);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(D, O) {
        var I = this, J = !!z.u(O) || O, ee = z.p(D), se = function(g, Y) {
          var W = z.w(I.$u ? Date.UTC(I.$y, Y, g) : new Date(I.$y, Y, g), I);
          return J ? W : W.endOf(a);
        }, oe = function(g, Y) {
          return z.w(I.toDate()[g].apply(I.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), I);
        }, H = this.$W, j = this.$M, Z = this.$D, V = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case v:
            return J ? se(1, 0) : se(31, 11);
          case f:
            return J ? se(1, j) : se(0, j + 1);
          case l:
            var b = this.$locale().weekStart || 0, R = (H < b ? H + 7 : H) - b;
            return se(J ? Z - R : Z + (6 - R), j);
          case a:
          case y:
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
      }, $.endOf = function(D) {
        return this.startOf(D, !1);
      }, $.$set = function(D, O) {
        var I, J = z.p(D), ee = "set" + (this.$u ? "UTC" : ""), se = (I = {}, I[a] = ee + "Date", I[y] = ee + "Date", I[f] = ee + "Month", I[v] = ee + "FullYear", I[d] = ee + "Hours", I[c] = ee + "Minutes", I[i] = ee + "Seconds", I[s] = ee + "Milliseconds", I)[J], oe = J === a ? this.$D + (O - this.$W) : O;
        if (J === f || J === v) {
          var H = this.clone().set(y, 1);
          H.$d[se](oe), H.init(), this.$d = H.set(y, Math.min(this.$D, H.daysInMonth())).$d;
        } else
          se && this.$d[se](oe);
        return this.init(), this;
      }, $.set = function(D, O) {
        return this.clone().$set(D, O);
      }, $.get = function(D) {
        return this[z.p(D)]();
      }, $.add = function(D, O) {
        var I, J = this;
        D = Number(D);
        var ee = z.p(O), se = function(j) {
          var Z = T(J);
          return z.w(Z.date(Z.date() + Math.round(j * D)), J);
        };
        if (ee === f)
          return this.set(f, this.$M + D);
        if (ee === v)
          return this.set(v, this.$y + D);
        if (ee === a)
          return se(1);
        if (ee === l)
          return se(7);
        var oe = (I = {}, I[c] = r, I[d] = o, I[i] = t, I)[ee] || 1, H = this.$d.getTime() + D * oe;
        return z.w(H, this);
      }, $.subtract = function(D, O) {
        return this.add(-1 * D, O);
      }, $.format = function(D) {
        var O = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || C;
        var J = D || "YYYY-MM-DDTHH:mm:ssZ", ee = z.z(this), se = this.$H, oe = this.$m, H = this.$M, j = I.weekdays, Z = I.months, V = function(Y, W, A, x) {
          return Y && (Y[W] || Y(O, J)) || A[W].slice(0, x);
        }, b = function(Y) {
          return z.s(se % 12 || 12, Y, "0");
        }, R = I.meridiem || function(Y, W, A) {
          var x = Y < 12 ? "AM" : "PM";
          return A ? x.toLowerCase() : x;
        }, g = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: H + 1, MM: z.s(H + 1, 2, "0"), MMM: V(I.monthsShort, H, Z, 3), MMMM: V(Z, H), D: this.$D, DD: z.s(this.$D, 2, "0"), d: String(this.$W), dd: V(I.weekdaysMin, this.$W, j, 2), ddd: V(I.weekdaysShort, this.$W, j, 3), dddd: j[this.$W], H: String(se), HH: z.s(se, 2, "0"), h: b(1), hh: b(2), a: R(se, oe, !0), A: R(se, oe, !1), m: String(oe), mm: z.s(oe, 2, "0"), s: String(this.$s), ss: z.s(this.$s, 2, "0"), SSS: z.s(this.$ms, 3, "0"), Z: ee };
        return J.replace(N, function(Y, W) {
          return W || g[Y] || ee.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(D, O, I) {
        var J, ee = z.p(O), se = T(D), oe = (se.utcOffset() - this.utcOffset()) * r, H = this - se, j = z.m(this, se);
        return j = (J = {}, J[v] = j / 12, J[f] = j, J[m] = j / 3, J[l] = (H - oe) / 6048e5, J[a] = (H - oe) / 864e5, J[d] = H / o, J[c] = H / r, J[i] = H / t, J)[ee] || H, I ? j : z.a(j);
      }, $.daysInMonth = function() {
        return this.endOf(f).$D;
      }, $.$locale = function() {
        return p[this.$L];
      }, $.locale = function(D, O) {
        if (!D)
          return this.$L;
        var I = this.clone(), J = _(D, O, !0);
        return J && (I.$L = J), I;
      }, $.clone = function() {
        return z.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, k;
    }(), G = U.prototype;
    return T.prototype = G, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", v], ["$D", y]].forEach(function(k) {
      G[k[1]] = function($) {
        return this.$g($, k[0], k[1]);
      };
    }), T.extend = function(k, $) {
      return k.$i || (k($, U, T), k.$i = !0), T;
    }, T.locale = _, T.isDayjs = w, T.unix = function(k) {
      return T(1e3 * k);
    }, T.en = p[u], T.Ls = p, T.p = {}, T;
  });
})(ys);
const E = Qe, Un = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Cn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, Br = (e, n) => E(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), jr = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Cn(e),
  isCurrentDay: e.isSame(E(), "day"),
  year: parseInt(e.format("YYYY"))
}), Mn = (e, n, t, r, o, s, i) => {
  e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, me), e.strokeRect(n + 0.5, t + 0.5, r, me);
}, kn = (e, n) => {
  let t = 0;
  for (const r of n)
    r <= e && t++;
  return t * Te;
}, vs = (e, n, t, r, o, s = []) => {
  for (let i = 0; i < n; i++) {
    const c = kn(i, s);
    for (let d = 0; d <= t; d++) {
      const a = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(E(), "day");
      Mn(e, d * Se, i * me + c, Se, Cn(a), l, o);
    }
  }
}, bs = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, xs = (e, n, t, r, o, s = []) => {
  let i = 0, c = -(r.dayOfMonth - 1) * Ae;
  const d = n * me + s.length * Te;
  for (let a = 0; a <= t; a++) {
    const f = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(E(), "week");
    for (let m = 0; m < n; m++) {
      const v = kn(m, s);
      Mn(e, i, m * me + v, ut, !0, f, o);
    }
    i += ut;
  }
  for (let a = 0; a < t; a++) {
    const l = Br(r, a) * Ae;
    bs(e, c, d, o), c += l;
  }
}, ws = (e, n, t, r, o, s = []) => {
  const i = E(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let c = 0; c < n; c++) {
    const d = kn(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = E() : a > Math.floor(t / 2) ? l = E().add(a - Math.floor(t / 2), "hours") : l = E().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(E(), "day") && l.isSame(E(), "hour");
      Mn(
        e,
        a * Ee + Ee / 2 - 0.5,
        c * me + d,
        Ee,
        Cn(l),
        f,
        o
      );
    }
  }
}, Ss = (e, n, t, r) => {
  const o = t * me + n * Te, s = e.canvas.width, i = o + Te / 2;
  e.fillStyle = r.mode === "dark" ? r.colors.primary + "80" : r.colors.primary, e.fillRect(0, o, s, Te), e.strokeStyle = r.colors.border, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, i + 0.5), e.lineTo(s, i + 0.5), e.stroke();
}, Cs = (e, n, t, r, o, s, i = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(Hr)) {
    switch (n) {
      case 0:
        xs(e, t, r, o, s, i);
        break;
      case 1:
        vs(e, t, r, o, s, i);
        break;
      case 2:
        ws(e, t, r, o, s, i);
        break;
    }
    for (let d = 0; d < i.length; d++)
      Ss(e, d, i[d], s);
  }
};
var en = {}, Ms = {
  get exports() {
    return en;
  },
  set exports(e) {
    en = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })($e, function() {
    var t = "week", r = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(d) {
        if (d === void 0 && (d = null), d !== null)
          return this.add(7 * (d - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var l = i(this).startOf(r).add(1, r).date(a), f = i(this).endOf(t);
          if (l.isBefore(f))
            return 1;
        }
        var m = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), v = this.diff(m, t, !0);
        return v < 0 ? i(this).startOf("week").week() : Math.ceil(v);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(Ms);
const ks = en;
var tn = {}, Ds = {
  get exports() {
    return tn;
  },
  set exports(e) {
    tn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })($e, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Ds);
const $s = tn;
var nn = {}, Es = {
  get exports() {
    return nn;
  },
  set exports(e) {
    nn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })($e, function() {
    var t = "day";
    return function(r, o, s) {
      var i = function(a) {
        return a.add(4 - a.isoWeekday(), t);
      }, c = o.prototype;
      c.isoWeekYear = function() {
        return i(this).year();
      }, c.isoWeek = function(a) {
        if (!this.$utils().u(a))
          return this.add(7 * (a - this.isoWeek()), t);
        var l, f, m, v, y = i(this), C = (l = this.isoWeekYear(), f = this.$u, m = (f ? s.utc : s)().year(l).startOf("year"), v = 4 - m.isoWeekday(), m.isoWeekday() > 4 && (v += 7), m.add(v, t));
        return y.diff(C, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var d = c.startOf;
      c.startOf = function(a, l) {
        var f = this.$utils(), m = !!f.u(l) || l;
        return f.p(a) === "isoweek" ? m ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : d.bind(this)(a, l);
      };
    };
  });
})(Es);
const _s = nn;
var rn = {}, Ts = {
  get exports() {
    return rn;
  },
  set exports(e) {
    rn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })($e, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), f = (d = d || "()")[0] === "(", m = d[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (m ? this.isBefore(l, c) : !this.isAfter(l, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (m ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(Ts);
const Ps = rn;
var on = {}, As = {
  get exports() {
    return on;
  },
  set exports(e) {
    on = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })($e, function() {
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, m = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, v = function(u) {
      return u instanceof P;
    }, y = function(u, p, w) {
      return new P(u, w, p.$l);
    }, C = function(u) {
      return r.p(u) + "s";
    }, h = function(u) {
      return u < 0;
    }, N = function(u) {
      return h(u) ? Math.ceil(u) : Math.floor(u);
    }, K = function(u) {
      return Math.abs(u);
    }, B = function(u, p) {
      return u ? h(u) ? { negative: !0, format: "" + K(u) + p } : { negative: !1, format: "" + u + p } : { negative: !1, format: "" };
    }, P = function() {
      function u(w, _, T) {
        var z = this;
        if (this.$d = {}, this.$l = T, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), _)
          return y(w * m[C(_)], this);
        if (typeof w == "number")
          return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object")
          return Object.keys(w).forEach(function(k) {
            z.$d[C(k)] = w[k];
          }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var U = w.match(f);
          if (U) {
            var G = U.slice(2).map(function(k) {
              return k != null ? Number(k) : 0;
            });
            return this.$d.years = G[0], this.$d.months = G[1], this.$d.weeks = G[2], this.$d.days = G[3], this.$d.hours = G[4], this.$d.minutes = G[5], this.$d.seconds = G[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var p = u.prototype;
      return p.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(_, T) {
          return _ + (w.$d[T] || 0) * m[T];
        }, 0);
      }, p.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = N(w / a), w %= a, this.$d.months = N(w / l), w %= l, this.$d.days = N(w / c), w %= c, this.$d.hours = N(w / i), w %= i, this.$d.minutes = N(w / s), w %= s, this.$d.seconds = N(w / o), w %= o, this.$d.milliseconds = w;
      }, p.toISOString = function() {
        var w = B(this.$d.years, "Y"), _ = B(this.$d.months, "M"), T = +this.$d.days || 0;
        this.$d.weeks && (T += 7 * this.$d.weeks);
        var z = B(T, "D"), U = B(this.$d.hours, "H"), G = B(this.$d.minutes, "M"), k = this.$d.seconds || 0;
        this.$d.milliseconds && (k += this.$d.milliseconds / 1e3);
        var $ = B(k, "S"), D = w.negative || _.negative || z.negative || U.negative || G.negative || $.negative, O = U.format || G.format || $.format ? "T" : "", I = (D ? "-" : "") + "P" + w.format + _.format + z.format + O + U.format + G.format + $.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, p.toJSON = function() {
        return this.toISOString();
      }, p.format = function(w) {
        var _ = w || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return _.replace(d, function(z, U) {
          return U || String(T[z]);
        });
      }, p.as = function(w) {
        return this.$ms / m[C(w)];
      }, p.get = function(w) {
        var _ = this.$ms, T = C(w);
        return T === "milliseconds" ? _ %= 1e3 : _ = T === "weeks" ? N(_ / m[T]) : this.$d[T], _ === 0 ? 0 : _;
      }, p.add = function(w, _, T) {
        var z;
        return z = _ ? w * m[C(_)] : v(w) ? w.$ms : y(w, this).$ms, y(this.$ms + z * (T ? -1 : 1), this);
      }, p.subtract = function(w, _) {
        return this.add(w, _, !0);
      }, p.locale = function(w) {
        var _ = this.clone();
        return _.$l = w, _;
      }, p.clone = function() {
        return y(this.$ms, this);
      }, p.humanize = function(w) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, p.milliseconds = function() {
        return this.get("milliseconds");
      }, p.asMilliseconds = function() {
        return this.as("milliseconds");
      }, p.seconds = function() {
        return this.get("seconds");
      }, p.asSeconds = function() {
        return this.as("seconds");
      }, p.minutes = function() {
        return this.get("minutes");
      }, p.asMinutes = function() {
        return this.as("minutes");
      }, p.hours = function() {
        return this.get("hours");
      }, p.asHours = function() {
        return this.as("hours");
      }, p.days = function() {
        return this.get("days");
      }, p.asDays = function() {
        return this.as("days");
      }, p.weeks = function() {
        return this.get("weeks");
      }, p.asWeeks = function() {
        return this.as("weeks");
      }, p.months = function() {
        return this.get("months");
      }, p.asMonths = function() {
        return this.as("months");
      }, p.years = function() {
        return this.get("years");
      }, p.asYears = function() {
        return this.as("years");
      }, u;
    }();
    return function(u, p, w) {
      t = w, r = w().$utils(), w.duration = function(z, U) {
        var G = w.locale();
        return y(z, { $l: G }, U);
      }, w.isDuration = v;
      var _ = p.prototype.add, T = p.prototype.subtract;
      p.prototype.add = function(z, U) {
        return v(z) && (z = z.asMilliseconds()), _.bind(this)(z, U);
      }, p.prototype.subtract = function(z, U) {
        return v(z) && (z = z.asMilliseconds()), T.bind(this)(z, U);
      };
    };
  });
})(As);
const Is = on;
var Ys = "Expected a function", Kn = 0 / 0, Os = "[object Symbol]", Ls = /^\s+|\s+$/g, Rs = /^[-+]0x[0-9a-f]+$/i, Ns = /^0b[01]+$/i, Fs = /^0o[0-7]+$/i, Ws = parseInt, Hs = typeof $e == "object" && $e && $e.Object === Object && $e, zs = typeof self == "object" && self && self.Object === Object && self, Bs = Hs || zs || Function("return this")(), js = Object.prototype, Zs = js.toString, Vs = Math.max, Gs = Math.min, Wt = function() {
  return Bs.Date.now();
};
function Xs(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Ys);
  n = Jn(n) || 0, sn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? Vs(Jn(t.maxWait) || 0, n) : s, m = "trailing" in t ? !!t.trailing : m);
  function v(p) {
    var w = r, _ = o;
    return r = o = void 0, a = p, i = e.apply(_, w), i;
  }
  function y(p) {
    return a = p, c = setTimeout(N, n), l ? v(p) : i;
  }
  function C(p) {
    var w = p - d, _ = p - a, T = n - w;
    return f ? Gs(T, s - _) : T;
  }
  function h(p) {
    var w = p - d, _ = p - a;
    return d === void 0 || w >= n || w < 0 || f && _ >= s;
  }
  function N() {
    var p = Wt();
    if (h(p))
      return K(p);
    c = setTimeout(N, C(p));
  }
  function K(p) {
    return c = void 0, m && r ? v(p) : (r = o = void 0, i);
  }
  function B() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function P() {
    return c === void 0 ? i : K(Wt());
  }
  function u() {
    var p = Wt(), w = h(p);
    if (r = arguments, o = this, d = p, w) {
      if (c === void 0)
        return y(d);
      if (f)
        return c = setTimeout(N, n), v(d);
    }
    return c === void 0 && (c = setTimeout(N, n)), i;
  }
  return u.cancel = B, u.flush = P, u;
}
function sn(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function Us(e) {
  return !!e && typeof e == "object";
}
function Ks(e) {
  return typeof e == "symbol" || Us(e) && Zs.call(e) == Os;
}
function Jn(e) {
  if (typeof e == "number")
    return e;
  if (Ks(e))
    return Kn;
  if (sn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = sn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Ls, "");
  var t = Ns.test(e);
  return t || Fs.test(e) ? Ws(e.slice(2), t ? 2 : 8) : Rs.test(e) ? Kn : +e;
}
var ot = Xs;
const Et = [0, 1, 2];
var wt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(wt || {});
const Zr = (e) => Et.includes(e), st = (e) => {
  var r;
  const t = (((r = document.getElementById(qe)) == null ? void 0 : r.clientWidth) || 0) - Ie;
  switch (e) {
    case 1:
      return Math.ceil(t / Se) * it;
    case 2:
      return Math.ceil(t / Ee) * it;
    default:
      return Math.ceil(t / ut) * it;
  }
}, Js = (e) => st(e) / it, Dn = (e, n) => {
  const t = st(n) / 2;
  let r;
  switch (n) {
    case 1:
      r = e.subtract(t, "days");
      break;
    case 2:
      r = e.subtract(t, "hours");
      break;
    default:
      r = e.subtract(t, "weeks");
      break;
  }
  let o;
  switch (n) {
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
    startDate: r,
    endDate: o
  };
}, qs = (e, n) => {
  const t = Dn(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, $n = () => {
  var t;
  return ((((t = document.getElementById(qe)) == null ? void 0 : t.clientWidth) || 0) - Ie) * it;
}, Vr = Mr({
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
E.extend(ks);
E.extend($s);
E.extend(_s);
E.extend(Ps);
E.extend(Is);
const Qs = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = E(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = fe(d), [m, v] = fe(E()), [y, C] = fe(!1), [h, N] = fe(st(l)), K = Et[l] !== Et[Et.length - 1], B = l !== 0, P = De(() => qs(m, l), [m, l]), u = Dn(m, l).startDate, p = E(u).dayOfYear(), w = jr(u), _ = we(null), [T, z] = fe([{ x: 0, y: 0 }]), U = le(
    (V, b = "auto") => {
      var g, Y, W, A;
      const R = $n();
      switch (V) {
        case "back":
          return (g = _.current) == null ? void 0 : g.scrollTo({
            behavior: b,
            left: R / 3
          });
        case "forward":
          return (Y = _.current) == null ? void 0 : Y.scrollTo({
            behavior: b,
            left: R / 3
          });
        case "middle": {
          const x = R / it / 4;
          return (W = _.current) == null ? void 0 : W.scrollTo({
            behavior: b,
            left: R / 2 - x
          });
        }
        default:
          return (A = _.current) == null ? void 0 : A.scrollTo({
            behavior: b,
            left: R / 2
          });
      }
    },
    []
  ), G = (V) => {
    z(V);
  }, k = le(
    (V) => {
      const b = Js(l);
      let R;
      switch (l) {
        case 0:
          R = b * 7;
          break;
        case 1:
          R = b;
          break;
        case 2:
          R = Math.ceil(b / At);
          break;
      }
      ot(() => {
        switch (V) {
          case "back":
            v((Y) => Y.subtract(R, "days"));
            break;
          case "forward":
            v((Y) => Y.add(R, "days"));
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
    _.current = document.getElementById(qe), N(st(l));
  }, [l]), xe(() => {
    const V = () => N(st(l));
    return window.addEventListener("resize", V), () => window.removeEventListener("resize", V);
  }, [l]), xe(() => {
    s == null || s(P);
  }, [s, P]), xe(() => {
    C(!1);
  }, [o]), xe(() => {
    y || (U("middle"), C(!0), v(o));
  }, [o, y, U]);
  const $ = () => {
    t || (v(
      (V) => l === 2 ? V.add(Zn, "hours") : V.add(Xn, "weeks")
    ), s == null || s(P));
  }, D = le(() => {
    t || (k("forward"), ot(() => {
      U("forward");
    }, 500)());
  }, [t, k, U]), O = () => {
    t || (v(
      (V) => l === 2 ? V.subtract(Zn, "hours") : V.subtract(Xn, "weeks")
    ), s == null || s(P));
  }, I = le(() => {
    !y || t || (k("back"), ot(() => {
      U("back");
    }, 500)());
  }, [y, t, k, U]), J = le(() => {
    t || (k("middle"), ot(() => {
      U("middle", "smooth");
    }, 300)());
  }, [t, k, U]), ee = le(
    (V) => {
      if (t)
        return;
      const b = E(V).startOf("day");
      b.isValid() && (v(b), s == null || s(P), setTimeout(() => {
        U("middle", "smooth");
      }, 300));
    },
    [t, U, s, P]
  ), se = () => H(l + 1), oe = () => H(l - 1), H = (V) => {
    Zr(V) && (f(V), N(st(V)), s == null || s(P));
  }, j = () => i == null ? void 0 : i(), { Provider: Z } = Vr;
  return /* @__PURE__ */ M(
    Z,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: $,
        handleScrollNext: D,
        handleGoPrev: O,
        handleScrollPrev: I,
        handleGoToday: J,
        goToDate: ee,
        zoomIn: se,
        zoomOut: oe,
        zoom: l,
        isNextZoom: K,
        isPrevZoom: B,
        date: m,
        isLoading: t,
        cols: h,
        startDate: w,
        dayOfYear: p,
        toggleDisplayActiveUnits: j,
        tilesCoords: T,
        updateTilesCoords: G,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: n
    }
  );
}, Ze = () => je(Vr), Gr = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Xr = (e, n) => {
  if (n.length === 0)
    return e;
  let t = e, r = 0;
  for (const o of n) {
    const s = o * me + r * Te;
    if (e >= s + Te)
      r++;
    else if (e >= s)
      return o * me + r * Te - r * Te;
  }
  return t - r * Te;
}, ei = 5, qn = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > ei;
}, vt = (e, n, t) => {
  const r = t.getBoundingClientRect();
  return {
    x: e - r.left + t.scrollLeft,
    y: n - r.top + t.scrollTop
  };
}, ti = ({
  data: e,
  baseData: n,
  zoom: t,
  startDate: r,
  onEventDrop: o,
  onEventDrag: s,
  draggableConfig: i = {},
  gridRef: c,
  separatorRowIndices: d = []
}) => {
  const a = n ? n.length > 0 && n[0].data.length > 0 && !Array.isArray(n[0].data[0]) ? n.map((R) => ({ ...R, data: [R.data] })) : n : e, {
    enabled: l = !0,
    isDraggable: f,
    resourceOnly: m = !1,
    isValidDrop: v
  } = i, [y, C] = fe("idle"), [h, N] = fe(null), [K, B] = fe({ x: 0, y: 0 }), [P, u] = fe({ width: 0, height: 48 }), [p, w] = fe(null), [_, T] = fe(!0), z = we({ x: 0, y: 0 }), U = we({ x: 0, y: 0 }), G = we({ x: 0, y: 0 }), k = we(null), $ = we(null), D = we(0), O = we(null), I = le(
    (R) => !l || R.draggable === !1 ? !1 : f ? f(R) : !0,
    [l, f]
  ), J = le(
    (R, g) => {
      const Y = Xr(g, d), W = Math.floor(Y / me);
      let A;
      switch (t) {
        case 0:
          A = Ae * 7;
          break;
        case 1:
          A = Se;
          break;
        case 2:
          A = Ee;
          break;
        default:
          A = Se;
      }
      const x = Math.floor(R / A);
      let Q;
      const L = E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          Q = L.add(x * 7, "days").toDate();
          break;
        case 1:
          Q = L.add(x, "days").toDate();
          break;
        case 2:
          Q = L.add(x, "hours").toDate();
          break;
        default:
          Q = L.toDate();
      }
      return { snappedDate: Q, snappedResourceIndex: W };
    },
    [t, r, d]
  ), ee = le(
    (R, g, Y, W) => {
      const A = [], x = g.getTime(), Q = Y.getTime(), L = a.find((te) => te.id === W);
      if (!L)
        return A;
      const X = [];
      for (const te of L.data)
        Array.isArray(te) ? X.push(...te) : X.push(te);
      for (const te of X) {
        if (te.segmentId === R.segmentId)
          continue;
        const F = te.startDate.getTime(), ie = te.endDate.getTime();
        if (x >= F && x < ie || Q > F && Q <= ie || x <= F && Q >= ie) {
          const ue = new Date(Math.max(x, F)), ae = new Date(Math.min(Q, ie)), de = ae.getTime() - ue.getTime();
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
    (R, g, Y, W) => {
      const A = [], x = g.getTime(), Q = Y.getTime(), L = E(g).format("YYYY-MM-DD"), X = a.find((F) => F.id === W);
      if (!X)
        return A;
      const te = [];
      for (const F of X.data)
        Array.isArray(F) ? te.push(...F) : te.push(F);
      for (const F of te) {
        if (F.segmentId === R.segmentId)
          continue;
        const ie = F.startDate.getTime(), pe = F.endDate.getTime(), ue = E(F.startDate).format("YYYY-MM-DD"), ae = E(F.endDate).format("YYYY-MM-DD"), de = E(Y).format("YYYY-MM-DD");
        if (!(ue === L || ae === L || ue === de || ae === de || E(F.startDate).isBefore(g, "day") && E(F.endDate).isAfter(Y, "day")) || x >= ie && x < pe || Q > ie && Q <= pe || x <= ie && Q >= pe)
          continue;
        let he, Me;
        pe <= x ? (he = x - pe, Me = "before") : (he = ie - Q, Me = "after"), A.push({
          event: F,
          timeGap: he,
          position: Me
        });
      }
      return A.sort((F, ie) => F.timeGap - ie.timeGap);
    },
    [a]
  ), oe = le(
    (R, g, Y) => {
      const W = J(g, Y);
      let A, x;
      if (m)
        A = R.startDate, x = R.endDate;
      else {
        const pe = E(R.endDate).diff(R.startDate);
        A = W.snappedDate, x = E(A).add(pe, "milliseconds").toDate();
      }
      let Q = 0, L = "", X;
      for (const pe of e) {
        const ue = Math.max(pe.data.length, 1);
        if (W.snappedResourceIndex < Q + ue) {
          L = pe.id, X = pe.capacity;
          break;
        }
        Q += ue;
      }
      if (!L)
        return null;
      let te = !0;
      X !== void 0 && R.totalPassengers !== void 0 && (te = R.totalPassengers <= X);
      const F = ee(R, A, x, L), ie = F.length === 0 ? se(R, A, x, L) : [];
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
    [J, e, m, ee, se]
  ), H = le(
    (R, g) => {
      if (!s)
        return;
      const Y = Date.now();
      if (Y - D.current < 100)
        return;
      D.current = Y;
      const W = {
        event: R,
        currentStartDate: g.startDate,
        currentEndDate: g.endDate,
        currentResourceId: g.resourceId,
        conflicts: g.conflicts
      };
      s(W);
    },
    [s]
  ), j = le(
    (R, g) => {
      if (!I(R) || !c.current)
        return;
      g.preventDefault(), g.stopPropagation();
      const Y = g.target.closest('[style*="left"]');
      let W = 0, A = 0;
      Y && Y.style.left && Y.style.top && (W = parseInt(Y.style.left), A = parseInt(Y.style.top));
      const x = vt(
        g.clientX,
        g.clientY,
        c.current
      );
      z.current = { x: W, y: A }, U.current = { x: g.clientX, y: g.clientY }, G.current = {
        x: x.x - W,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, O.current = {
        startDate: R.startDate,
        endDate: R.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const X of e) {
        for (const te of X.data)
          if (te.some((F) => F.segmentId === R.segmentId)) {
            O.current.resourceId = X.id;
            break;
          }
        if (O.current.resourceId)
          break;
      }
      N(R), C("potential"), B({ x: W, y: A });
      let Q = 100, L = 48;
      if (Y) {
        const X = Y.getBoundingClientRect();
        Q = X.width, L = X.height;
      }
      u({ width: Q, height: L });
    },
    [I, c, e, t]
  ), Z = le(
    (R) => {
      if (!c.current)
        return;
      let g = c.current;
      for (; g && g !== document.body; ) {
        const F = window.getComputedStyle(g);
        if (g.scrollHeight > g.clientHeight && (F.overflowY === "auto" || F.overflowY === "scroll" || F.overflow === "auto" || F.overflow === "scroll"))
          break;
        g = g.parentElement;
      }
      (!g || g === document.body) && (g = document.documentElement);
      const Y = g.getBoundingClientRect(), W = R.clientY, A = 50, x = 5, Q = W - Y.top, L = Y.bottom - W;
      let X = !1, te = 0;
      Q < A && Q > 0 ? (X = !0, te = -x * (1 - Q / A)) : L < A && L > 0 && (X = !0, te = x * (1 - L / A)), X ? ($.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
        g.scrollTop += te, y === "dragging" && Z(R);
      })) : $.current && (cancelAnimationFrame($.current), $.current = null);
    },
    [c, y]
  ), V = le(
    (R) => {
      if (y === "idle" || y === "animating" || !h || !c.current)
        return;
      const g = { x: R.clientX, y: R.clientY };
      if (y === "potential")
        if (qn(U.current, g))
          C("dragging");
        else
          return;
      Z(R);
      const Y = vt(
        R.clientX,
        R.clientY,
        c.current
      );
      k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
        const W = {
          x: Y.x - G.current.x,
          y: Y.y - G.current.y
        };
        B(W);
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
    [y, h, c, oe, H, v, Z]
  ), b = le(
    async (R) => {
      if (y === "idle" || y === "animating")
        return;
      const g = { x: R.clientX, y: R.clientY };
      if (!qn(U.current, g) || y === "potential") {
        C("idle"), N(null), w(null);
        return;
      }
      if (!h || !p || !O.current) {
        C("idle"), N(null), w(null);
        return;
      }
      if (p.hasCapacity === !1) {
        T(!1), C("animating"), B(z.current), setTimeout(() => {
          C("idle"), N(null), w(null), T(!0);
        }, 300);
        return;
      }
      const W = {
        event: h,
        originalStartDate: O.current.startDate,
        originalEndDate: O.current.endDate,
        originalResourceId: O.current.resourceId,
        newStartDate: p.startDate,
        newEndDate: p.endDate,
        newResourceId: p.resourceId,
        hasConflict: p.hasConflict,
        conflicts: p.conflicts
      };
      let A = !0;
      if (o)
        try {
          const x = o(W);
          A = x instanceof Promise ? await x : x;
        } catch {
          A = !1;
        }
      A ? (T(!0), C("idle"), N(null), w(null)) : (T(!1), C("animating"), B(z.current), setTimeout(() => {
        C("idle"), N(null), w(null), T(!0);
      }, 300));
    },
    [y, h, p, o, v]
  );
  return xe(() => {
    if (y === "potential" || y === "dragging") {
      const R = (Y) => V(Y), g = (Y) => b(Y);
      return document.addEventListener("mousemove", R), document.addEventListener("mouseup", g), () => {
        document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", g);
      };
    } else
      return () => {
      };
  }, [y, V, b]), xe(() => () => {
    k.current && (cancelAnimationFrame(k.current), k.current = null), $.current && (cancelAnimationFrame($.current), $.current = null);
  }, []), xe(() => {
    (y === "idle" || y === "animating") && (k.current && (cancelAnimationFrame(k.current), k.current = null), $.current && (cancelAnimationFrame($.current), $.current = null));
  }, [y]), xe(() => {
    (y === "dragging" || y === "potential") && (y === "dragging" ? (C("animating"), B(z.current), setTimeout(() => {
      C("idle"), N(null), w(null);
    }, 300)) : (C("idle"), N(null), w(null)));
  }, [t]), xe(() => {
    if ((y === "dragging" || y === "potential") && h) {
      let R = !1;
      for (const g of e) {
        for (const Y of g.data)
          if (Y.some((W) => W.segmentId === h.segmentId)) {
            R = !0;
            break;
          }
        if (R)
          break;
      }
      R || (y === "dragging" ? (C("animating"), B(z.current), setTimeout(() => {
        C("idle"), N(null), w(null);
      }, 300)) : (C("idle"), N(null), w(null)));
    }
  }, [e, y, h]), {
    dragState: y,
    draggedEvent: h,
    ghostPosition: K,
    ghostDimensions: P,
    dropTarget: p,
    isValidDrop: _,
    handleDragStart: j,
    isDraggable: I,
    draggingEventId: (h == null ? void 0 : h.segmentId) || null,
    resourceOnly: m
  };
}, ni = ({
  data: e,
  baseData: n,
  zoom: t,
  startDate: r,
  onTimeRangeSelect: o,
  onMultiTimeRangeSelect: s,
  clickToAddConfig: i = {},
  gridRef: c,
  isDragging: d,
  separatorRowIndices: a = []
}) => {
  const { enabled: l = !1, isSelectable: f } = i, m = l && !!o, v = le((g) => {
    let Y = 0;
    for (const W of a)
      W <= g && Y++;
    return g * me + Y * Te;
  }, [a]), [y, C] = fe("idle"), [h, N] = fe(null), [K, B] = fe(null), [P, u] = fe(null), [p, w] = fe(!1), [_, T] = fe([]), [z, U] = fe(!1), G = we(null), k = we(null), $ = we(null), D = le(() => {
    switch (t) {
      case 0:
        return Ae * 7;
      case 1:
        return Se;
      case 2:
        return Ee;
      default:
        return Se;
    }
  }, [t]), O = le(
    (g) => {
      const Y = D(), W = Math.floor(g / Y), A = E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
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
    [t, r, D]
  ), I = le(
    (g) => {
      const Y = Xr(g, a), W = Math.floor(Y / me);
      let A = 0;
      for (const x of e) {
        const Q = Math.max(x.data.length, 1);
        if (W < A + Q)
          return {
            resourceId: x.id,
            resourceIndex: W,
            resourceLabel: x.label
          };
        A += Q;
      }
      return null;
    },
    [e, a]
  ), J = le(
    (g) => {
      const Y = D();
      return Math.floor(g / Y) * Y;
    },
    [D]
  ), ee = le(
    (g, Y, W, A = []) => {
      const x = [], L = (n || e).find((F) => F.id === g), X = Y.getTime(), te = W.getTime();
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
        if (F.resourceId !== g)
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
    [e, n]
  ), se = le(
    (g) => {
      if (!m || d || !c.current || g.button !== 0)
        return;
      const Y = g.target;
      if (Y.closest("[data-segment-id]") || Y.closest("[data-multi-select-ui]"))
        return;
      const W = vt(g.clientX, g.clientY, c.current), A = I(W.y);
      if (!A)
        return;
      G.current = { x: g.clientX, y: g.clientY }, k.current = A.resourceIndex;
      const x = J(W.x), Q = D(), L = v(A.resourceIndex);
      N(W), B(W), u({
        x,
        y: L,
        width: Q,
        height: me
      }), C("selecting");
    },
    [m, d, c, I, J, D, v]
  ), oe = le(
    (g) => {
      if (y !== "selecting" || !c.current || k.current === null)
        return;
      const Y = vt(g.clientX, g.clientY, c.current);
      $.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
        B(Y);
        const W = D(), A = J((h == null ? void 0 : h.x) || 0), x = J(Y.x), Q = v(k.current), L = Math.min(A, x), X = Math.max(A, x) + W;
        u({
          x: L,
          y: Q,
          width: X - L,
          height: me
        });
      });
    },
    [y, c, h, D, J, v]
  ), H = le(
    (g) => {
      if (y !== "selecting")
        return;
      if (!c.current || !h || !G.current) {
        C("idle"), N(null), B(null), u(null);
        return;
      }
      const Y = vt(g.clientX, g.clientY, c.current), W = I(h.y);
      if (!W) {
        C("idle"), N(null), B(null), u(null);
        return;
      }
      const A = Math.min(h.x, Y.x), x = Math.max(h.x, Y.x), Q = O(A), L = O(x), X = E(L).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(W.resourceId, Q, X)) {
        C("idle"), N(null), B(null), u(null);
        return;
      }
      const te = ee(
        W.resourceId,
        Q,
        X,
        _
      ), F = te.length > 0, ie = {
        startDate: Q,
        endDate: X,
        resourceId: W.resourceId,
        resourceLabel: W.resourceLabel,
        zoomLevel: t,
        hasConflict: F,
        conflicts: F ? te : void 0
      };
      if (p)
        T((pe) => [...pe, ie]), U(!0);
      else if (o) {
        const pe = o(ie), ue = (ae) => {
          ae != null && ae.continueMultiSelect && (w(!0), T([ie]), U(!0));
        };
        pe instanceof Promise ? pe.then(ue) : ue(pe);
      }
      C("idle"), N(null), B(null), u(null), G.current = null, k.current = null;
    },
    [
      y,
      c,
      h,
      I,
      O,
      f,
      o,
      t,
      p,
      ee,
      _
    ]
  ), j = le(() => {
    if (_.length > 0 && s) {
      U(!1);
      const g = s(_), Y = (W) => {
        W != null && W.continueMultiSelect ? U(!0) : (T([]), w(!1), U(!1));
      };
      g instanceof Promise ? g.then(Y) : Y(g);
      return;
    }
    T([]), w(!1), U(!1);
  }, [_, s]), Z = le(() => {
    T([]), w(!1), U(!1);
  }, []), V = le((g) => {
    T((Y) => {
      const W = Y.filter((A, x) => x !== g);
      return W.length === 0 && (w(!1), U(!1)), W;
    });
  }, []), b = le(
    (g, Y) => {
      T((W) => W.map((A, x) => {
        if (x !== g)
          return A;
        const Q = { ...A, ...Y }, L = W.filter((te, F) => F !== g), X = ee(
          Q.resourceId,
          Q.startDate,
          Q.endDate,
          L
        );
        return {
          ...Q,
          hasConflict: X.length > 0,
          conflicts: X.length > 0 ? X : void 0
        };
      }));
    },
    [ee]
  ), R = le(
    (g) => {
      g.key === "Escape" && (y === "selecting" ? (C("idle"), N(null), B(null), u(null), G.current = null, k.current = null) : p && _.length > 0 && (T([]), w(!1), U(!1)));
    },
    [y, p, _.length]
  );
  return xe(() => {
    if (y === "selecting")
      return document.addEventListener("mousemove", oe), document.addEventListener("mouseup", H), document.addEventListener("keydown", R), () => {
        document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", H), document.removeEventListener("keydown", R);
      };
  }, [y, oe, H, R]), xe(() => {
    if (p && _.length > 0)
      return document.addEventListener("keydown", R), () => {
        document.removeEventListener("keydown", R);
      };
  }, [p, _.length, R]), xe(() => () => {
    $.current && (cancelAnimationFrame($.current), $.current = null);
  }, []), xe(() => {
    d && y === "selecting" && (C("idle"), N(null), B(null), u(null), G.current = null, k.current = null);
  }, [d, y]), {
    selectionState: y,
    selectionStart: h,
    selectionEnd: K,
    selectionBox: P,
    handleGridMouseDown: se,
    isEnabled: m,
    pendingSelections: _,
    confirmSelections: j,
    clearSelections: Z,
    removeSelection: V,
    updateSelection: b,
    isMultiSelectActive: p,
    hasUnconfirmedSelections: z
  };
}, ri = S.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, oi = S.div`
  position: relative;
`, si = S.canvas``;
S.canvas``;
const Qn = S.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, ii = kr(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: m, separatorRowIndices: v = [] }, y) {
  const C = we(!1), { handleScrollNext: h, handleScrollPrev: N, date: K, isLoading: B, cols: P, startDate: u } = Ze(), p = we(null), w = we(null), _ = we(null), T = we(null), [z, U] = fe(!1), G = et(), {
    dragState: k,
    draggedEvent: $,
    ghostPosition: D,
    ghostDimensions: O,
    dropTarget: I,
    isValidDrop: J,
    handleDragStart: ee,
    isDraggable: se,
    draggingEventId: oe,
    resourceOnly: H
  } = ti({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: T,
    separatorRowIndices: v
  });
  xe(() => {
    const F = k === "dragging" || k === "potential";
    U(F), a && a(F);
  }, [k, a]);
  const {
    selectionState: j,
    selectionBox: Z,
    handleGridMouseDown: V,
    pendingSelections: b,
    confirmSelections: R,
    clearSelections: g,
    removeSelection: Y,
    updateSelection: W,
    isMultiSelectActive: A,
    hasUnconfirmedSelections: x
  } = ni({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: m,
    gridRef: T,
    isDragging: z,
    separatorRowIndices: v
  }), Q = le((F) => {
    F.preventDefault();
  }, []), L = le((F) => {
    F.preventDefault();
  }, []), X = v.length * Te, te = le(
    (F) => {
      const ie = $n(), pe = t * me + 1 + X;
      Gr(F, ie, pe), Cs(F, n, t, P, u, G, v);
    },
    [P, u, t, n, G, v, X]
  );
  return xe(() => {
    if (!p.current)
      return;
    const F = p.current.getContext("2d");
    if (!F)
      return;
    const ie = () => te(F);
    return window.addEventListener("resize", ie), () => window.removeEventListener("resize", ie);
  }, [te]), xe(() => {
    const F = p.current;
    if (!F)
      return;
    F.style.letterSpacing = "1px";
    const ie = F.getContext("2d");
    ie && te(ie);
  }, [K, t, n, te]), xe(() => {
    if (!w.current)
      return;
    const F = new IntersectionObserver(
      (ie) => {
        ie[0].isIntersecting && !C.current && (C.current = !0, h(), setTimeout(() => {
          C.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(qe) }
    );
    return F.observe(w.current), () => {
      F.disconnect();
    };
  }, [h]), xe(() => {
    if (!_.current)
      return;
    const F = new IntersectionObserver(
      (ie) => {
        ie[0].isIntersecting && !C.current && (C.current = !0, N(), setTimeout(() => {
          C.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(qe),
        rootMargin: `0px 0px 0px -${Ie}px`
      }
    );
    return F.observe(_.current), () => {
      F.disconnect();
    };
  }, [N]), /* @__PURE__ */ q(ri, { id: Hr, children: [
    /* @__PURE__ */ q(
      oi,
      {
        ref: (F) => {
          typeof y == "function" ? y(F) : y && (y.current = F), T.current = F;
        },
        onMouseDown: V,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ M(Qn, { position: "left", ref: _ }),
          /* @__PURE__ */ M(pn, { isLoading: B, position: "left" }),
          /* @__PURE__ */ M(
            si,
            {
              ref: p,
              onDragStart: Q,
              onDragOver: L,
              style: { userSelect: k === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ M(Pl, { zoom: n, startDate: u }),
          /* @__PURE__ */ M(
            Tc,
            {
              data: r,
              zoom: n,
              onTileClick: s,
              onDragStart: ee,
              isDraggable: se,
              draggingEventId: oe,
              separatorRowIndices: v
            }
          ),
          /* @__PURE__ */ M(Qn, { ref: w, position: "right" }),
          /* @__PURE__ */ M(pn, { isLoading: B, position: "right" }),
          (k === "dragging" || k === "animating") && /* @__PURE__ */ M(
            cl,
            {
              draggedEvent: $,
              ghostPosition: D,
              ghostDimensions: O,
              dropTarget: I,
              isValidDrop: J,
              dragState: k,
              zoom: n,
              data: r,
              resourceOnly: H,
              separatorRowIndices: v
            }
          ),
          /* @__PURE__ */ M(
            fl,
            {
              selectionBox: Z,
              isSelecting: j === "selecting"
            }
          ),
          A && b.length > 0 && /* @__PURE__ */ M(
            El,
            {
              selections: b,
              data: r,
              zoom: n,
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
      wl,
      {
        selections: b,
        onConfirm: R,
        onClear: g,
        onRemove: Y
      }
    )
  ] });
}), Ur = (e) => {
  const n = E.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, Kr = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / Ce);
    t += o.hours + s, r += n % Ce, r >= Ce && (t++, r -= Ce);
  }), { hours: t, minutes: r };
}, Jr = (e, n) => {
  let t = Gn;
  switch (n) {
    case 0:
      t = gs;
      break;
    case 1:
      t = Gn;
      break;
    case 2:
      t = 1;
      break;
  }
  const r = () => {
    let s = t - e.hours - 1, i = Ce - e.minutes;
    return i === Ce && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: r(),
    overtime: o()
  };
}, ai = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const l = E(a.startDate).isoWeek(), f = E(a.startDate).isoWeekday(), m = E(a.endDate).isoWeek(), v = E(a.endDate).isoWeekday(), { hours: y, minutes: C } = Ur(a.occupancy);
    if (r === l) {
      const h = (ze + 1 - f) * y, N = (ze + 1 - f) * C;
      return { hours: Math.max(0, h), minutes: N };
    } else if (r === m) {
      const h = v > ze ? ze * y : v * y, N = v > ze ? ze * C : v * C;
      return { hours: h, minutes: N };
    } else if (E(n).isBetween(a.startDate, a.endDate))
      return { hours: ze * y, minutes: ze * C };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Kr(o), { free: c, overtime: d } = Jr({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, ci = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: m } = Ur(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: m } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = Kr(s), { free: d, overtime: a } = Jr({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, li = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const d = E(c.startDate).hour(), a = E(c.endDate).hour(), l = n.hour(), f = E(c.endDate).minute(), m = E(c.startDate).minute();
    d < l && a > l ? t += Ce : d === l && a === l && m && f ? t += f ? f - m : Ce - m : d === l && a >= l ? t += m ? Ce - m : Ce : a === l && f && (t += f);
  });
  const r = Math.floor(t / Ce), o = t % Ce, s = r || o ? 0 : 1, i = r ? 0 : o ? Ce - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, di = (e, n, t, r, o = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => r === 1 ? E(t).isBetween(i.startDate, i.endDate, "day", "[]") : r === 2 ? E(t).isBetween(i.startDate, i.endDate, "hour", "[]") : E(i.startDate).isBetween(
    E(t),
    E(t).add(6, "days"),
    "day",
    "[]"
  ) || E(t).isBetween(E(i.startDate), E(i.endDate), "day", "[]"));
  switch (r) {
    case 1:
      return ci(s, t, r, o);
    case 2:
      return li(s, t);
    default:
      return ai(s, t, r);
  }
}, ui = (e, n, t, r, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = ut;
      break;
    case 1:
      c = "days", d = Se;
      break;
    case 2:
      c = "hours", d = Ee;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = E(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / me), m = r.findIndex((N, K, B) => B.slice(0, K + 1).reduce((u, p) => u + p, 0) >= f), v = s === 2 ? (a + 1) * d : a * d, y = (f - 1) * me + me, C = di(
    o[m],
    m,
    l,
    s,
    i
  ), h = E(e.startDate).isSame(E(e.endDate), "day");
  return {
    coords: { x: v, y },
    mouseCoords: t,
    resourceIndex: m,
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
function fi(e, n) {
  if (e.length <= 1)
    return [];
  if (e.length <= n) {
    const o = [];
    for (let s = 1; s < e.length; s++)
      o.push(s);
    return o;
  }
  const t = [];
  for (let o = 1; o < e.length; o++)
    t.push({ index: o, gap: e[o] - e[o - 1] });
  t.sort((o, s) => s.gap - o.gap);
  const r = Math.min(n - 1, t.length);
  return t.slice(0, r).map((o) => o.index).sort((o, s) => o - s);
}
function hi(e) {
  const n = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const r = [...t].sort((l, f) => l - f);
  if (r.length < 2)
    return n;
  const o = Math.min(5, r.length), s = fi(r, o), i = [];
  let c = 0;
  for (const l of s)
    i.push({
      min: r[c],
      max: r[l - 1],
      values: r.slice(c, l)
    }), c = l;
  i.push({
    min: r[c],
    max: r[r.length - 1],
    values: r.slice(c)
  });
  const d = [], a = /* @__PURE__ */ new Map();
  return i.forEach((l, f) => {
    const m = "__auto_cat_" + f, v = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: m, name: v, minPassengers: l.min, maxPassengers: l.max });
    for (const y of l.values)
      a.set(y, m);
  }), { categories: d, capacityToCategoryId: a };
}
const pi = (e, n, t, r) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return n.length > r ? (n.forEach((d, a) => {
    const l = {
      id: e[a].id,
      label: e[a].label,
      data: d,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      categoryId: e[a].categoryId
    };
    c >= r && (o.push(i), s += i.length, i = [], c = 0), c++, i.push(l);
  }), t.slice(s).length <= r && (i = [], n.slice(s).forEach((d, a) => {
    const l = {
      id: e[a + s].id,
      label: e[a + s].label,
      data: d,
      capacity: e[a + s].capacity,
      isSubcontract: e[a + s].isSubcontract,
      categoryId: e[a + s].categoryId
    };
    i.push(l), a === n.length - s - 1 && o.push(i);
  })), o) : (n.forEach((d, a) => {
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
var an = {}, mi = {
  get exports() {
    return an;
  },
  set exports(e) {
    an = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })($e, function() {
    return function(t, r) {
      r.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(mi);
const gi = an;
var cn = {}, yi = {
  get exports() {
    return cn;
  },
  set exports(e) {
    cn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })($e, function() {
    return function(t, r) {
      r.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(yi);
const vi = cn, bi = (e) => {
  const n = [];
  for (const t of e) {
    let r = !1;
    if (n.length)
      for (const o of n) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = E(t.startDate).startOf("day"), d = E(t.endDate).startOf("day"), a = E(o[i].startDate).startOf("day"), l = E(o[i].endDate).startOf("day");
          if (c.isBetween(a, l, null, "[]") || d.isBetween(a, l, null, "[]") || c.isBefore(a, "minute") && d.isAfter(l, "minute") || c.isAfter(a, "minute") && d.isBefore(l, "minute")) {
            s = !0;
            break;
          }
        }
        if (!s) {
          o.push(t), r = !0;
          break;
        }
      }
    r || n.push([t]);
  }
  return n;
};
E.extend(gi);
E.extend(vi);
const er = /* @__PURE__ */ new WeakMap(), xi = (e) => {
  const n = er.get(e);
  if (n)
    return n;
  const t = [...e].sort((o, s) => {
    const i = E(o.startDate), c = E(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), r = bi(t);
  return er.set(e, r), r;
}, wi = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = xi(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, Si = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Ci = (e) => {
  const { recordsThreshold: n } = Ze(), [t, r] = fe(0), [o, s] = fe(0), i = we(null);
  xe(() => {
    i.current = document.getElementById(qe);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = De(() => wi(e), [e]), a = De(
    () => pi(e, c, d, n),
    [e, c, n, d]
  ), l = le(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((h) => h + a[Math.max(o, 0)].length), s((h) => Math.min(h + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = le(() => {
    a[o].length && (r((h) => Math.max(h - a[o - 1].length, 0)), s((h) => Math.max(h - 1, 0)));
  }, [o, a]), m = le(() => {
    r(0), s(0);
  }, []), v = t + a[o].length, y = De(
    () => d.slice(t, v),
    [v, d, t]
  ), C = De(
    () => c.slice(t, v),
    [v, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: C,
    rowsPerItem: y,
    totalRowsPerPage: Si(a[o]),
    next: l,
    previous: f,
    reset: m
  };
};
var ln = {}, Mi = {
  get exports() {
    return ln;
  },
  set exports(e) {
    ln = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })($e, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(Mi);
const ki = ln;
var dn = {}, Di = {
  get exports() {
    return dn;
  },
  set exports(e) {
    dn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Qe);
  })($e, function(t) {
    function r(m) {
      return m && typeof m == "object" && "default" in m ? m : { default: m };
    }
    var o = r(t);
    function s(m) {
      return m % 10 < 5 && m % 10 > 1 && ~~(m / 10) % 10 != 1;
    }
    function i(m, v, y) {
      var C = m + " ";
      switch (y) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return C + (s(m) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return C + (s(m) ? "godziny" : "godzin");
        case "MM":
          return C + (s(m) ? "miesiące" : "miesięcy");
        case "yy":
          return C + (s(m) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(m, v) {
      return a.test(v) ? c[m.month()] : d[m.month()];
    };
    l.s = d, l.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(m) {
      return m + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Di);
const $i = dn;
var un = {}, Ei = {
  get exports() {
    return un;
  },
  set exports(e) {
    un = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Qe);
  })($e, function(t) {
    function r(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = r(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(d, a, l) {
      var f = s[l];
      return Array.isArray(f) && (f = f[a ? 0 : 1]), f.replace("%d", d);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(Ei);
const _i = un;
var fn = {}, Ti = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Qe);
  })($e, function(t) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = r(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, d = function(l, f) {
      return c.test(f) ? s[l.month()] : i[l.month()];
    };
    d.s = i, d.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: d, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(Ti);
const Pi = fn;
var hn = {}, Ai = {
  get exports() {
    return hn;
  },
  set exports(e) {
    hn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Qe);
  })($e, function(t) {
    function r(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = r(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Ai);
const Ii = hn, Yi = {
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
}, Oi = {
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
}, Li = {
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
}, Ri = {
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
}, Ni = {
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
}, Fi = [
  {
    id: "en",
    lang: Li,
    translateCode: "en-GB",
    dayjsTranslations: ki
  },
  {
    id: "pl",
    lang: Oi,
    translateCode: "pl-PL",
    dayjsTranslations: $i
  },
  {
    id: "es",
    lang: Yi,
    translateCode: "es-ES",
    dayjsTranslations: Ii
  },
  {
    id: "lt",
    lang: Ni,
    translateCode: "lt-LT",
    dayjsTranslations: Pi
  },
  {
    id: "de",
    lang: Ri,
    translateCode: "de-DE",
    dayjsTranslations: _i
  }
];
class Wi {
  constructor() {
    En(this, "locales", Fi);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const It = new Wi(), qr = Mr({
  localesData: It.getLocales(),
  currentLocale: It.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Hi = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = fe("en"), s = It.getLocales(), i = le(() => {
    const f = s.find((m) => m.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && E.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = fe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  xe(() => {
    t == null || t.forEach((f) => {
      s.find((v) => v.id === f.id) || It.addLocales(f);
    });
  }, [s, t]), xe(() => {
    const f = localStorage.getItem("locale"), m = n ?? f ?? "en";
    localStorage.setItem("locale", m), o(m), d(i());
  }, [i, n]);
  const { Provider: l } = qr;
  return /* @__PURE__ */ M(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ve = () => je(qr).currentLocale.lang, zi = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Bi = S.div`
  height: 440px;
  width: 514px;
  position: relative;
`, ji = S.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Zi = ({ onTileClick: e }) => {
  const { feelingEmpty: n } = Ve();
  return /* @__PURE__ */ q(Bi, { onClick: e, children: [
    /* @__PURE__ */ M(zi, {}),
    /* @__PURE__ */ M(ji, { children: n })
  ] });
}, Vi = S.div`
  position: relative;
  display: flex;
`, Gi = S.div`
  position: relative;
  margin-left: ${Ie};
  display: flex;
  flex-direction: column;
  contain: paint;
`, Xi = S.div`
  width: calc(${({ width: e }) => e}px - ${Ie}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ie}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Ht = {
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
    reservationType: wt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function Ui(e, n) {
  const t = n ? [...n].sort((c, d) => c.maxPassengers - d.maxPassengers) : [], r = [];
  for (const c of t) {
    const d = e.filter(
      (a) => !a.isSubcontract && a.categoryId === c.id
    );
    d.length > 0 && r.push({ type: "category", category: c, items: d });
  }
  const o = t.length > 0, s = e.filter(
    (c) => !c.isSubcontract && (!c.categoryId || !o)
  );
  s.length > 0 && o ? r.push({ type: "uncategorized", items: s }) : s.length > 0 && r.push({ type: "uncategorized", items: s });
  const i = e.filter((c) => c.isSubcontract);
  return i.length > 0 && r.push({ type: "subcontract", items: i }), r;
}
const Ki = ({
  data: e,
  baseData: n,
  categories: t,
  onTileClick: r,
  onItemClick: o,
  toggleTheme: s,
  topBarWidth: i,
  onEventDrop: c,
  onEventDrag: d,
  draggableConfig: a,
  onTimeRangeSelect: l,
  onMultiTimeRangeSelect: f,
  clickToAddConfig: m
}) => {
  const [v, y] = fe(Ht), [C, h] = fe(e), [N, K] = fe(!1), [B, P] = fe(!1), [u, p] = fe(""), [w, _] = fe(/* @__PURE__ */ new Set()), {
    zoom: T,
    startDate: z,
    isLoading: U,
    config: { includeTakenHoursOnWeekendsInDayView: G, showTooltip: k, showThemeToggle: $ }
  } = Ze(), D = we(null), {
    page: O,
    projectsPerPerson: I,
    rowsPerItem: J,
    currentPageNum: ee,
    pagesAmount: se,
    next: oe,
    previous: H,
    reset: j
  } = Ci(C), { effectiveCategories: Z, effectivePage: V } = De(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: O };
    const ae = hi(O);
    if (ae.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: O };
    const de = O.map((ce) => {
      if (ce.isSubcontract || ce.capacity == null)
        return ce;
      const ne = ae.capacityToCategoryId.get(ce.capacity);
      return ne ? { ...ce, categoryId: ne } : ce;
    });
    return { effectiveCategories: ae.categories, effectivePage: de };
  }, [t, O]), b = le((ae) => {
    _((de) => {
      const ce = new Set(de);
      return ce.has(ae) ? ce.delete(ae) : ce.add(ae), ce;
    });
  }, []), R = De(() => {
    const ae = [], de = Z ? [...Z].sort((ce, ne) => ce.maxPassengers - ne.maxPassengers) : [];
    for (const ce of de)
      V.some((ne) => !ne.isSubcontract && ne.categoryId === ce.id) && ae.push(ce.id);
    return V.some((ce) => ce.isSubcontract) && ae.push("__subcontract__"), ae;
  }, [Z, V]), g = le(() => {
    _(/* @__PURE__ */ new Set());
  }, []), Y = le(() => {
    _(new Set(R));
  }, [R]), {
    visiblePage: W,
    visibleRowsPerItem: A,
    visibleTotalRows: x,
    visibleProjectsPerPerson: Q,
    separatorRowIndices: L
  } = De(() => {
    const ae = Ui(V, Z), de = ((Z == null ? void 0 : Z.length) ?? 0) > 0, ce = /* @__PURE__ */ new Map();
    O.forEach((ke, Ne) => ce.set(ke.id, Ne));
    const ne = [], he = [], Me = [], Pe = [];
    let _e = 0;
    for (const ke of ae)
      if (ke.type === "subcontract" || ke.type === "category" && de) {
        const tt = ke.type === "subcontract" ? "__subcontract__" : ke.category.id, nt = w.has(tt);
        if (Pe.push(_e), !nt)
          for (const Ge of ke.items) {
            const St = ce.get(Ge.id) ?? 0, Ct = J[St];
            ne.push(Ge), he.push(Ct), Me.push(I[St]), _e += Ct;
          }
      } else
        for (const tt of ke.items) {
          const nt = ce.get(tt.id) ?? 0, Ge = J[nt];
          ne.push(tt), he.push(Ge), Me.push(I[nt]), _e += Ge;
        }
    const Rt = he.reduce((ke, Ne) => ke + Ne, 0);
    return {
      visiblePage: ne,
      visibleRowsPerItem: he,
      visibleTotalRows: Rt,
      visibleProjectsPerPerson: Me,
      separatorRowIndices: Pe
    };
  }, [V, Z, O, w, J, I]), X = we(
    ot(
      (ae, de, ce, ne, he, Me) => {
        if (!D.current)
          return;
        const { tile: Pe, segmentId: _e } = ie(ae);
        if (!_e || !Pe) {
          K(!1), y(Ht);
          return;
        }
        const Rt = F(_e, de), ke = D.current.getBoundingClientRect(), Ne = Pe.getBoundingClientRect(), tt = { x: ae.clientX - ke.left, y: ae.clientY - ke.top }, nt = {
          x: ae.clientX - ke.left,
          y: ae.clientY - ke.top
        }, Ge = {
          x: Ne.left - ke.left,
          y: Ne.top - ke.top,
          width: Ne.width,
          height: Ne.height
        }, {
          coords: { x: St, y: Ct },
          resourceIndex: no,
          disposition: ro,
          reservationData: oo
        } = ui(
          Rt,
          ce,
          tt,
          ne,
          he,
          Me,
          G
        );
        y({
          coords: { x: St, y: Ct },
          mouseCoords: nt,
          resourceIndex: no,
          disposition: ro,
          reservationData: oo,
          tileBounds: Ge
        }), K(!0);
      },
      4
    )
  ), te = we(
    ot((ae, de) => {
      j(), h(
        ae.map((ce) => ({
          ...ce,
          data: ce.data.filter((ne) => {
            const { title: he, description: Me, subtitle: Pe } = ne;
            return (he == null ? void 0 : he.toLowerCase().includes(de.toLowerCase())) || (Pe == null ? void 0 : Pe.toLowerCase().includes(de.toLowerCase())) || (Me == null ? void 0 : Me.toLowerCase().includes(de.toLowerCase()));
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
    p(de), te.current.cancel(), de ? te.current(e, de) : (j(), h(e));
  }, ue = le(() => {
    X.current.cancel(), K(!1), y(Ht);
  }, []);
  return xe(() => {
    const ae = (ce) => X.current(
      ce,
      e,
      z,
      A,
      Q,
      T
    ), de = D.current;
    if (de)
      return de.addEventListener("mousemove", ae), de.addEventListener("mouseleave", ue), () => {
        de.removeEventListener("mousemove", ae), de.removeEventListener("mouseleave", ue);
      };
  }, [
    X,
    ue,
    Q,
    A,
    z,
    T,
    e
  ]), xe(() => {
    u ? (te.current.cancel(), te.current(e, u)) : h(e);
  }, [e, u]), /* @__PURE__ */ q(Vi, { children: [
    /* @__PURE__ */ M(
      Za,
      {
        data: V,
        categories: Z,
        pageNum: ee,
        pagesAmount: se,
        rows: J,
        onLoadNext: oe,
        onLoadPrevious: H,
        searchInputValue: u,
        onSearchInputChange: pe,
        onItemClick: o,
        collapsedGroups: w,
        onToggleGroup: b,
        allGroupIds: R,
        onExpandAll: g,
        onCollapseAll: Y
      }
    ),
    /* @__PURE__ */ q(Gi, { children: [
      /* @__PURE__ */ M(
        lc,
        {
          zoom: T,
          topBarWidth: i,
          showThemeToggle: $,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ M(
        ii,
        {
          data: W,
          baseData: n || e,
          zoom: T,
          rows: x,
          ref: D,
          onTileClick: r,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: P,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: m,
          separatorRowIndices: L
        }
      ) : /* @__PURE__ */ M(Xi, { width: i, children: U ? /* @__PURE__ */ M(pn, { isLoading: U, position: "left" }) : /* @__PURE__ */ M(Zi, {}) }),
      k && N && !B && (v == null ? void 0 : v.resourceIndex) > -1 && /* @__PURE__ */ M(Vc, { tooltipData: v })
    ] })
  ] });
}, Qr = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, Ji = S.div`
  width: calc(${({ width: e }) => e}px - ${Ie}px);
  position: sticky;
  top: 0;
  left: ${Ie}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, qi = S.div`
  display: flex;
  gap: 1.875rem;
`, tr = S.button`
  ${Qr};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, Qi = S.button`
  ${Qr};
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
`, ea = S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ta = S.div`
  display: flex;
`, na = S.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, ra = ({ width: e, showThemeToggle: n, toggleTheme: t }) => {
  const { topbar: r } = Ve(), {
    data: o,
    config: s,
    handleGoNext: i,
    handleGoPrev: c,
    handleGoToday: d,
    zoomIn: a,
    zoomOut: l,
    isNextZoom: f,
    isPrevZoom: m,
    toggleDisplayActiveUnits: v,
    onClearFilterData: y
  } = Ze(), { colors: C } = et(), { filterButtonState: h = -1 } = s, N = (K) => {
    K.stopPropagation(), y == null || y();
  };
  return /* @__PURE__ */ q(Ji, { width: e, children: [
    /* @__PURE__ */ M(ta, { children: h >= 0 && /* @__PURE__ */ q(
      zt,
      {
        variant: h ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: v,
        children: [
          r.filters,
          !!h && /* @__PURE__ */ M("span", { onClick: N, children: /* @__PURE__ */ M(Re, { iconName: "close", height: "16", width: "16", fill: C.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ q(qi, { children: [
      /* @__PURE__ */ q(tr, { onClick: c, children: [
        /* @__PURE__ */ M(Re, { iconName: "arrowLeft", height: "15", fill: C.textPrimary }),
        r.prev
      ] }),
      /* @__PURE__ */ M(Qi, { onClick: d, children: r.today }),
      /* @__PURE__ */ q(tr, { onClick: i, children: [
        r.next,
        /* @__PURE__ */ M(Re, { iconName: "arrowRight", height: "15", fill: C.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ q(na, { children: [
      n && /* @__PURE__ */ M(Kc, { toggleTheme: t }),
      /* @__PURE__ */ q(ea, { children: [
        r.view,
        /* @__PURE__ */ M(
          zt,
          {
            isDisabled: !m,
            onClick: l,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ M(
          zt,
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
}, oa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), sa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), ia = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), aa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), ca = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), la = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), da = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), ua = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), fa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), ha = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), pa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), ma = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), ga = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), ya = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), va = {
  add: oa,
  subtract: sa,
  filter: ia,
  arrowLeft: aa,
  arrowRight: ca,
  defaultAvatar: la,
  calendarWarning: da,
  calendarFree: ua,
  arrowDown: ha,
  arrowUp: fa,
  search: pa,
  close: ma,
  moon: ga,
  sun: ya
}, Re = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = et(), i = va[e];
  return i ? /* @__PURE__ */ M(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.accent,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, ba = (e, n, t) => ({
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
})[n], xa = S.button`
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
  ${({ theme: e, variant: n, disabled: t }) => ba(e, n, t)}
`, zt = ({
  iconName: e,
  width: n,
  height: t,
  fill: r,
  className: o,
  onClick: s,
  children: i,
  isFullRounded: c,
  isDisabled: d,
  variant: a = "outlined"
}) => {
  const { colors: l } = et();
  return /* @__PURE__ */ q(
    xa,
    {
      onClick: s,
      isFullRounded: c,
      hasChildren: !!i,
      disabled: d,
      variant: a,
      children: [
        /* @__PURE__ */ M(
          Re,
          {
            iconName: e,
            width: n,
            height: t,
            fill: d ? l.disabled : r,
            className: o
          }
        ),
        i
      ]
    }
  );
}, wa = S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Sa = S.div`
  position: relative;
`, Ca = ({
  data: e,
  baseData: n,
  categories: t,
  onTileClick: r,
  topBarWidth: o,
  onItemClick: s,
  toggleTheme: i,
  onEventDrop: c,
  onEventDrag: d,
  draggableConfig: a,
  schedulerRef: l,
  onTimeRangeSelect: f,
  onMultiTimeRangeSelect: m,
  clickToAddConfig: v
}) => {
  const { goToDate: y, handleGoToday: C, zoomIn: h, zoomOut: N, zoom: K } = Ze();
  return Dr(
    l,
    () => ({
      goToDate: y,
      goToToday: C,
      setZoom: (B) => {
        if (!Zr(B))
          return;
        const P = B - K;
        if (P > 0)
          for (let u = 0; u < P; u++)
            h();
        else
          for (let u = 0; u < Math.abs(P); u++)
            N();
      }
    }),
    [y, C, K, h, N]
  ), /* @__PURE__ */ M(
    Ki,
    {
      data: e,
      baseData: n,
      categories: t,
      onTileClick: r,
      topBarWidth: o,
      onItemClick: s,
      toggleTheme: i,
      onEventDrop: c,
      onEventDrag: d,
      draggableConfig: a,
      onTimeRangeSelect: f,
      onMultiTimeRangeSelect: m,
      clickToAddConfig: v
    }
  );
}, Ll = kr(function({
  data: n,
  categories: t,
  baseData: r,
  config: o,
  startDate: s,
  onRangeChange: i,
  onTileClick: c,
  handleToggleDisplayActiveUnits: d,
  onClearFilterData: a,
  onItemClick: l,
  isLoading: f,
  onEventDrop: m,
  onEventDrag: v,
  draggableConfig: y,
  onTimeRangeSelect: C,
  onMultiTimeRangeSelect: h,
  clickToAddConfig: N
}, K) {
  var D;
  const B = De(
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
  ), P = we(null), u = we(null), [p, w] = fe((D = P.current) == null ? void 0 : D.clientWidth), _ = De(() => E(s), [s]), [T, z] = fe(B.defaultTheme ?? "light"), U = () => {
    z(T === "light" ? "dark" : "light");
  }, G = T === "light" ? ls : ds, k = B.theme ? B.theme[G.mode] : {}, $ = {
    ...G,
    colors: {
      ...G.colors,
      ...k
    }
  };
  return Dr(
    K,
    () => ({
      goToDate: (O) => {
        var I;
        return (I = u.current) == null ? void 0 : I.goToDate(O);
      },
      goToToday: () => {
        var O;
        return (O = u.current) == null ? void 0 : O.goToToday();
      },
      setZoom: (O) => {
        var I;
        return (I = u.current) == null ? void 0 : I.setZoom(O);
      }
    }),
    []
  ), xe(() => {
    const O = () => {
      P.current && w(P.current.clientWidth);
    };
    return O(), window.addEventListener("resize", O), () => window.removeEventListener("resize", O);
  }, []), P.current, /* @__PURE__ */ q(Le, { children: [
    /* @__PURE__ */ M(cs, {}),
    /* @__PURE__ */ M(ss, { theme: $, children: /* @__PURE__ */ M(Hi, { lang: B.lang, translations: B.translations, children: /* @__PURE__ */ M(
      Qs,
      {
        data: n,
        isLoading: !!f,
        config: B,
        onRangeChange: i,
        defaultStartDate: _,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: /* @__PURE__ */ M(
          wa,
          {
            showScroll: !!n.length,
            id: qe,
            ref: P,
            children: /* @__PURE__ */ M(Sa, { children: /* @__PURE__ */ M(
              Ca,
              {
                data: n,
                baseData: r,
                categories: t,
                onTileClick: c,
                topBarWidth: p ?? 0,
                onItemClick: l,
                toggleTheme: U,
                onEventDrop: m,
                onEventDrag: v,
                draggableConfig: y,
                schedulerRef: u,
                onTimeRangeSelect: C,
                onMultiTimeRangeSelect: h,
                clickToAddConfig: N
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}), Ma = S.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, ka = S.button`
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
`, Da = S.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, $a = S.p`
  ${ht}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, nr = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Ve(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ M(Ma, { intent: e, children: /* @__PURE__ */ q(ka, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ M(Da, { children: t }),
    /* @__PURE__ */ M($a, { children: d })
  ] }) });
}, Ea = S.div`
  min-width: ${Ie + "px"};
  max-width: ${Ie + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, _a = S.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ie}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Ta = S.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, Pa = S.input`
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
`, Aa = S.div`
  margin-left: 10px;
  height: 36px;
  flex: 1;
  min-width: 0;
  background-color: ${({ theme: e }) => e.colors.primary};
  border: 1px solid
    ${({ theme: e, isFocused: n }) => n ? e.colors.accent : e.colors.border};
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
`, Ia = S.button`
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
`, Ya = S.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${me}px;
  height: calc(${me}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBorder + "33" : e.colors.border};
  background-color: ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBg : "transparent"};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Oa = S.div`
  display: flex;
  align-items: center;
`, La = S.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Ra = S.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Na = S.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, rr = S.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e, theme: n }) => e ? n.colors.textPrimary : n.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, Fa = ({ id: e, item: n, rows: t, onItemClick: r, isSubcontract: o }) => /* @__PURE__ */ M(
  Ya,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ q(Oa, { children: [
      /* @__PURE__ */ M(La, { children: n.icon ? /* @__PURE__ */ M(Ra, { src: n.icon, alt: "Icon" }) : /* @__PURE__ */ M(Re, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ q(Na, { children: [
        /* @__PURE__ */ M(rr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ M(rr, { children: n.subtitle })
      ] })
    ] })
  }
), Wa = S.div`
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
`, Ha = S.div`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder : e.colors.accent};
  border-radius: 0 2px 2px 0;
`, za = S.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, Ba = S.span`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder : e.colors.accent};
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder + "18" : e.colors.accent + "14"};
  padding: 1px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  line-height: 1.4;
`, ja = S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme: e }) => e.colors.placeholder};
  transition: transform 0.2s ease;
  transform: rotate(${({ $collapsed: e }) => e ? "-90deg" : "0deg"});
`, or = ({
  label: e,
  count: n,
  isCollapsed: t,
  onToggle: r,
  variant: o = "category"
}) => /* @__PURE__ */ q(Wa, { $variant: o, onClick: r, title: e, children: [
  /* @__PURE__ */ M(Ha, { $variant: o }),
  /* @__PURE__ */ M(ja, { $collapsed: t, children: /* @__PURE__ */ M("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ M(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ M(za, { $variant: o, children: e }),
  /* @__PURE__ */ M(Ba, { $variant: o, children: n })
] }), Za = ({
  data: e,
  categories: n,
  rows: t,
  onLoadNext: r,
  onLoadPrevious: o,
  pageNum: s,
  pagesAmount: i,
  searchInputValue: c,
  onSearchInputChange: d,
  onItemClick: a,
  collapsedGroups: l,
  onToggleGroup: f,
  allGroupIds: m,
  onExpandAll: v,
  onCollapseAll: y
}) => {
  const [C, h] = fe(!1), N = Ve(), K = () => h((G) => !G), B = n ? [...n].sort((G, k) => G.maxPassengers - k.maxPassengers) : [], P = B.length > 0, u = m.length > 0, p = u && l.size === m.length;
  u && l.size;
  const w = e.filter((G) => G.isSubcontract), _ = N.subcontract ?? "Subcontract", T = (G) => {
    const k = e.indexOf(G);
    return /* @__PURE__ */ M(
      Fa,
      {
        id: G.id,
        item: G.label,
        rows: t[k],
        onItemClick: a,
        isSubcontract: G.isSubcontract
      },
      G.id
    );
  }, z = (G) => {
    const k = e.filter(
      (O) => !O.isSubcontract && O.categoryId === G.id
    );
    if (k.length === 0)
      return null;
    const $ = l.has(G.id), D = G.name;
    return /* @__PURE__ */ q("div", { children: [
      /* @__PURE__ */ M(
        or,
        {
          label: D,
          count: k.length,
          isCollapsed: $,
          onToggle: () => f(G.id),
          variant: "category"
        }
      ),
      !$ && k.map(T)
    ] }, G.id);
  }, U = e.filter(
    (G) => !G.isSubcontract && (!G.categoryId || !P)
  );
  return /* @__PURE__ */ q(Ea, { children: [
    /* @__PURE__ */ q(_a, { children: [
      /* @__PURE__ */ q(Ta, { children: [
        /* @__PURE__ */ q(Aa, { isFocused: C, children: [
          /* @__PURE__ */ M(
            Pa,
            {
              placeholder: N.search,
              value: c,
              onChange: d,
              onFocus: K,
              onBlur: K
            }
          ),
          /* @__PURE__ */ M(Re, { iconName: "search" })
        ] }),
        u && /* @__PURE__ */ M(
          Ia,
          {
            title: p ? "Expand all" : "Collapse all",
            onClick: p ? v : y,
            $allCollapsed: p,
            children: /* @__PURE__ */ M("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: p ? /* @__PURE__ */ q(Le, { children: [
              /* @__PURE__ */ M("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ M("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ q(Le, { children: [
              /* @__PURE__ */ M("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ M("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ M(
        nr,
        {
          intent: "previous",
          isVisible: s !== 0,
          onClick: o,
          icon: /* @__PURE__ */ M(Re, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: s,
          pagesAmount: i
        }
      )
    ] }),
    P ? B.map(z) : U.map(T),
    P && U.length > 0 && U.map(T),
    w.length > 0 && /* @__PURE__ */ q(Le, { children: [
      /* @__PURE__ */ M(
        or,
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
      nr,
      {
        intent: "next",
        isVisible: s !== i - 1,
        onClick: r,
        icon: /* @__PURE__ */ M(Re, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: s,
        pagesAmount: i
      }
    )
  ] });
}, Va = S.div`
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
`, Ga = Ot`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Xa = S.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ga} 1s infinite;
`, Ua = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ M(Va, { position: n, children: /* @__PURE__ */ M(Xa, {}) }) : null, pn = Ua, He = (e, n) => {
  const {
    ctx: t,
    x: r,
    y: o,
    width: s,
    height: i,
    textYPos: c,
    label: d,
    font: a,
    isBottomRow: l,
    fillStyle: f,
    topText: m,
    bottomText: v,
    strokeStyle: y,
    labelBetweenCells: C
  } = e;
  if (t.beginPath(), t.strokeStyle = y ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), C ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const h = r + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(d, h, c);
  }
  if (l && f && m && v) {
    t.fillStyle = f, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = m.font;
    const h = r + s / 2 - t.measureText(m.label).width / 2;
    t.fillStyle = m.color, t.fillText(m.label, h, m.y), t.font = v.font;
    const N = r + s / 2 - t.measureText(v.label).width / 2;
    t.fillStyle = v.color, t.fillText(v.label, N, v.y);
  }
}, eo = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t ? n.colors.currentDay : r ? n.colors.primary : n.colors.secondary;
}, mn = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, Ka = (e, n, t, r) => {
  const o = dt - Ue / fs, s = dt - Ue / hs, i = We + pt;
  let c = 0;
  for (let d = 0; d < n; d++) {
    const a = jr(
      E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    ), l = a.isCurrentDay;
    He(
      {
        ctx: e,
        x: c,
        y: i,
        width: Se,
        height: Ue,
        isBottomRow: !0,
        fillStyle: l ? r.colors.today + "26" : eo({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r),
        topText: {
          y: o,
          label: l ? "HOY" : a.dayName.toUpperCase(),
          font: l ? "700 14px Inter" : Oe.bottomRow.name,
          color: l ? r.colors.today : mn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: l ? "700 10px Inter" : Oe.bottomRow.number,
          color: l ? r.colors.today : mn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            r
          )
        }
      },
      r
    ), c += Se;
  }
}, Ja = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Ae;
  const s = We;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= Qt && (c = 0);
    const a = Br(t, d) * Ae;
    He(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: pt,
        textYPos: zr,
        label: E().month(c).format("MMMM").toUpperCase(),
        font: Oe.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, qa = (e, n, t) => {
  let o = 0, s = 0, i = E(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * Se + Se;
  for (let c = 0; c < Qt; c++)
    i > Qt - 1 && (i = 0), s = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * Se, He(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: We,
        textYPos: Sn,
        label: E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: Oe.topRow
      },
      t
    ), o += s, i++;
}, Qa = (e, n, t, r) => {
  const o = 7 * Se, s = We, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % Vn;
    f <= 0 && (f += Vn), l !== 1 && a === 0 && (d = -l * Se + Se), He(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: pt,
        textYPos: zr,
        label: `${t.toUpperCase()} ${f}`,
        font: Oe.middleRow
      },
      r
    ), d += o;
  }
}, ec = (e, n, t, r, o) => {
  const s = dt - Ue / 1.6, i = dt - Ue / 4.5, c = We + pt;
  let d = 0;
  for (let a = 0; a < n; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame(E(), "week");
    He(
      {
        ctx: e,
        x: d,
        y: c,
        width: ut,
        height: Ue,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : eo({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: f ? "700 14px Inter" : Oe.bottomRow.name,
          color: f ? o.colors.today : mn({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: r.toUpperCase(),
          font: Oe.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += ut;
  }
}, tc = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (Un(s) - t + 1) * Ae, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = Un(s + d) * Ae), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ae) * Ae), He(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: We,
        textYPos: Sn,
        label: (s + d).toString(),
        font: Oe.topRow
      },
      r
    ), c += a, l += a, d++;
}, nc = (e, n, t, r) => {
  const o = Math.floor(n / At) + 2, s = At * Ee;
  let d = -E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ee + 0.5 * Ee;
  for (let a = 0; a < o; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    He(
      {
        ctx: e,
        x: d,
        y: ft,
        width: s,
        height: xt,
        textYPos: ft + xt / 2 + 2,
        label: l,
        font: Oe.bottomRow.number
      },
      r
    ), d += s;
  }
}, rc = (e, n, t, r) => {
  const o = Math.ceil(n / At), s = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Ee;
  for (let f = 0; f < a; f++) {
    const m = E(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), y = E(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), C = y.format("MMMM").toUpperCase(), h = y.diff(m, "hour") + 1, N = f === 0 ? h * Ee : n * Ee;
    He(
      {
        ctx: e,
        x: l,
        y: 0,
        width: N,
        height: ft,
        textYPos: Sn,
        label: C,
        font: Oe.topRow
      },
      r
    ), l += N;
  }
}, oc = (e, n, t, r) => {
  let o = 0;
  const s = ft + xt, i = E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Ee;
  for (let d = 0; d < n; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    He(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: qt,
        label: a,
        font: Oe.bottomRow.hoursInDay,
        textYPos: ft + xt + qt / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += Ee;
  }
}, sc = (e, n, t, r, o, s, i) => {
  switch (n) {
    case 0:
      tc(e, r, s, i), Ja(e, t, r, i), ec(e, t, r, o, i);
      break;
    case 1:
      qa(e, r, i), Qa(e, r, o, i), Ka(e, t, r, i);
      break;
    case 2:
      rc(e, t, r, i), nc(e, t, r, i), oc(e, t, r, i);
      break;
  }
}, ic = S.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, ac = S.div`
  height: ${dt}px;
  display: block;
`, cc = S.canvas``, lc = ({ zoom: e, topBarWidth: n, showThemeToggle: t, toggleTheme: r }) => {
  const { week: o } = Ve(), { date: s, cols: i, dayOfYear: c, startDate: d, config: a } = Ze(), l = we(null), f = et(), m = le(
    (v) => {
      const y = $n(), h = (e === 2 ? us : dt) + 1;
      Gr(v, y, h), sc(v, e, i, d, o, c, f);
    },
    [i, c, d, o, e, f]
  );
  return xe(() => {
    if (!l.current)
      return;
    const v = l.current.getContext("2d");
    if (!v)
      return;
    const y = () => m(v);
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, [m]), xe(() => {
    const v = l.current;
    if (!v)
      return;
    v.style.letterSpacing = "1px";
    const y = v.getContext("2d");
    y && m(y);
  }, [s, e, m]), /* @__PURE__ */ q(ic, { children: [
    a.showTopbar !== !1 && /* @__PURE__ */ M(ra, { width: n, showThemeToggle: t, toggleTheme: r }),
    /* @__PURE__ */ M(ac, { id: ps, children: /* @__PURE__ */ M(cc, { ref: l }) })
  ] });
}, dc = (e, n, t) => {
  let r;
  switch (t) {
    case 0:
      r = Ae;
      break;
    case 2:
      r = Ee;
      break;
    default:
      r = Se;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = n.startDate.startOf("day"), d = n.endDate.startOf("day"), a = () => {
    let l;
    switch (t) {
      case 2:
        l = (e.startDate.diff(n.startDate, "minute") / Ce + 1) * r - r / 2;
        break;
      default:
        l = s.diff(c, "day") * r;
    }
    return Math.max(0, l);
  };
  if (e.startDate.isAfter(n.startDate) && e.endDate.isBefore(n.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          e.endDate.diff(e.startDate, "minute") / Ce * r,
          50
        );
        break;
      default:
        l = Math.max(
          i.diff(s, "day") * r + r,
          50
        );
    }
    return { x: a(), width: l };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isBefore(n.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          e.endDate.diff(n.startDate, "minute") / Ce * r + 0.5 * r,
          50
        );
        break;
      default:
        l = Math.max(
          i.diff(c, "day") * r + r,
          50
        );
    }
    return { x: a(), width: l };
  }
  if (e.startDate.isAfter(n.startDate) && e.endDate.isAfter(n.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          n.endDate.diff(e.startDate, "minute") / Ce * r,
          50
        );
        break;
      default:
        l = Math.max(
          d.diff(s, "day") * r + r,
          50
        );
    }
    return { x: a(), width: l };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isAfter(n.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          n.endDate.diff(n.startDate, "minute") / Ce * r,
          50
        );
        break;
      default:
        l = Math.max(
          d.diff(c, "day") * r + r,
          50
        );
    }
    return { x: a(), width: l };
  }
  return { x: a(), width: 50 };
}, uc = (e, n, t, r, o, s) => {
  const i = e * me + ms, c = n.hour(), d = t.hour();
  let a, l, f, m;
  switch (s) {
    case 2: {
      a = E(r), l = E(o), f = E(n).hour(c).minute(0), m = E(t).hour(d).minute(0);
      break;
    }
    default: {
      a = E(r).hour(0).minute(0), l = E(o).hour(23).minute(59), f = n, m = t;
      break;
    }
  }
  return {
    ...dc(
      { startDate: a, endDate: l },
      { startDate: f, endDate: m },
      s
    ),
    y: i
  };
}, to = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, sr = S.button`
  ${ht}
  height: ${wn}px;
  position: absolute;
  outline: none;
  border: ${({ $dashed: e }) => e ? "1.5px dashed rgba(255, 255, 255, 0.75)" : "none"};
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: e }) => e.colors.textPrimary};
  width: 100%;
  cursor: ${({ isDraggable: e, isDragging: n }) => e ? n ? "grabbing" : "grab" : "not-allowed"};
  opacity: ${({ isDragging: e }) => e ? 0.3 : 1};
  transition: opacity 0.2s ease;
`;
S.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
S.p`
  ${ht}
  ${Lt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const ir = S.span`
  font-size: 12px;
  line-height: 1;
  flex-shrink: 0;
  opacity: 0.95;
`, fc = S.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 4px 0 0 4px;
  pointer-events: none;
`, hc = S.div`
  position: absolute;
  top: 3px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 3px;
  pointer-events: none;
`, pc = S.span`
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.4px;
  line-height: 1;
  padding: 2px 3px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
`, mc = S.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 800;
  line-height: 1;
  color: #fff;
  box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.9);
`, gc = S.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  padding: 0 2px;
  overflow: hidden;
`, yc = S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.2px;
  font-variant-numeric: tabular-nums;
`, vc = S.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 8px;
  min-width: 0;
  overflow: hidden;
`, bc = S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  gap: 1px;
`, mt = S.span`
  ${Lt}
  font-size: ${({ bold: e }) => e ? "11px" : "9px"};
  font-weight: ${({ bold: e }) => e ? "700" : "500"};
  line-height: 1.25;
  letter-spacing: 0.2px;
  opacity: ${({ bold: e }) => e ? 1 : 0.9};
`, xc = S.span`
  display: inline-block;
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1;
  padding: 2px 4px;
  margin-right: 4px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.16);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  vertical-align: middle;
`, wc = 34, Sc = 156, Cc = 248, ar = {
  sin_chofer: "#9AA5A0",
  sin_avisar: "#E0A83C",
  notificado: "#3B82F6",
  confirmado: "#2FA36B"
}, Mc = {
  sin_chofer: "○",
  sin_avisar: "!",
  notificado: "→",
  confirmado: "✓"
}, kc = "#3E8E5A", Dc = "#9AA5A0", $c = ({
  row: e,
  data: n,
  zoom: t,
  isSubcontract: r = !1,
  onTileClick: o,
  onDragStart: s,
  isDragging: i = !1,
  isDraggable: c = !0,
  yOffset: d = 0
}) => {
  const { date: a } = Ze(), l = Dn(a, t), { y: f, x: m, width: v } = uc(
    e,
    l.startDate,
    l.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: y } = et(), C = we(null), h = E(n.startDate).isSame(E(n.endDate), "day"), N = n.eventType === wt.Tour, K = n.eventType === wt.Transfer, B = h && (N || K), P = K ? "⇄" : B ? "☀" : "▦", u = (k) => {
    C.current = { x: k.clientX, y: k.clientY }, c && s && (k.preventDefault(), s(n, k));
  }, p = (k) => {
    if (C.current) {
      const $ = Math.abs(k.clientX - C.current.x), D = Math.abs(k.clientY - C.current.y);
      Math.sqrt($ * $ + D * D) <= 5 && (o == null || o(n)), C.current = null;
    } else
      o == null || o(n);
  }, w = {
    left: `${m}px`,
    top: `${f + d}px`,
    backgroundColor: `${n.bgColor ?? y.defaultTile}`,
    width: `${v}px`,
    color: to(n.bgColor ?? "")
  }, _ = r && n.subcontractConfirmed === !1, T = r ? n.subcontractConfirmed === !1 ? Dc : kc : n.readiness ? ar[n.readiness] : void 0, z = /* @__PURE__ */ q(Le, { children: [
    T && /* @__PURE__ */ M(fc, { style: { background: T } }),
    /* @__PURE__ */ M(hc, { children: r ? /* @__PURE__ */ M(pc, { children: "SUB" }) : n.readiness && /* @__PURE__ */ M(mc, { style: { background: ar[n.readiness] }, children: Mc[n.readiness] }) })
  ] });
  if (B)
    return /* @__PURE__ */ q(
      sr,
      {
        "data-segment-id": n.segmentId,
        style: w,
        onClick: p,
        onMouseDown: u,
        onDragStart: (k) => k.preventDefault(),
        isDraggable: c,
        isDragging: i,
        $dashed: _,
        children: [
          z,
          /* @__PURE__ */ q(gc, { children: [
            /* @__PURE__ */ M(ir, { children: P }),
            v >= wc && /* @__PURE__ */ q(yc, { children: [
              /* @__PURE__ */ M("span", { children: E(n.startDate).format("HH:mm") }),
              !K && /* @__PURE__ */ M("span", { children: E(n.endDate).format("HH:mm") })
            ] })
          ] })
        ]
      }
    );
  const U = v >= Cc, G = n.bookingNumber ? /* @__PURE__ */ M(xc, { children: n.bookingNumber }) : null;
  return /* @__PURE__ */ q(
    sr,
    {
      "data-segment-id": n.segmentId,
      style: w,
      onClick: p,
      onMouseDown: u,
      onDragStart: (k) => k.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $dashed: _,
      children: [
        z,
        /* @__PURE__ */ q(vc, { children: [
          /* @__PURE__ */ M(ir, { children: P }),
          /* @__PURE__ */ M(bc, { children: U ? /* @__PURE__ */ q(Le, { children: [
            /* @__PURE__ */ M(mt, { bold: !0, children: n.title }),
            /* @__PURE__ */ q(mt, { children: [
              G,
              n.subtitle
            ] }),
            n.driver && /* @__PURE__ */ M(mt, { children: n.driver })
          ] }) : /* @__PURE__ */ q(Le, { children: [
            /* @__PURE__ */ M(mt, { children: G }),
            v >= Sc && n.subtitle && /* @__PURE__ */ M(mt, { children: n.subtitle })
          ] }) })
        ] })
      ]
    }
  );
}, Ec = (e, n) => {
  let t = 0;
  for (const r of n)
    e >= r && t++;
  return t * Te;
}, _c = ({
  data: e,
  zoom: n,
  onTileClick: t,
  onDragStart: r,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = []
}) => {
  const c = le(() => {
    let d = 0;
    return e.map((a, l) => (l > 0 && (d += Math.max(e[l - 1].data.length, 1)), a.data.map(
      (f, m) => f.map((v) => {
        const y = s === v.segmentId, C = o ? o(v) : !1, h = m + d, N = Ec(h, i);
        return /* @__PURE__ */ M(
          $c,
          {
            row: h,
            data: v,
            zoom: n,
            isSubcontract: a.isSubcontract,
            onTileClick: t,
            onDragStart: r,
            isDragging: y,
            isDraggable: C,
            yOffset: N
          },
          v.segmentId
        );
      })
    ))).flat(2);
  }, [e, t, n, r, o, s, i]);
  return /* @__PURE__ */ M(Le, { children: c() });
}, Tc = _c;
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
const Pc = S.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, Ac = S.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, Ic = S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, Yc = S.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, Oc = S.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, Lc = S.div`
  ${ht}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Rc = S.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, Nc = S.div`
  padding: 10px 12px;
`, Fc = S.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, cr = S.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, lr = S.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, dr = S.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ur = S.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, fr = S.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Wc = S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Hc = S.div``, zc = S.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Bc = S.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, jc = S.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, hr = S.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, pr = S.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, mr = S.div`
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
const Zc = {
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
}, Vc = ({ tooltipData: e }) => {
  const { mouseCoords: n, reservationData: t } = e, r = we(null), [o, s] = fe("below"), i = Ve(), c = { ...Zc, ...i.tooltip };
  Cr(() => {
    if (!r.current || !n)
      return;
    const v = r.current, { width: y, height: C } = v.getBoundingClientRect(), h = v.parentElement;
    if (!h)
      return;
    const N = h.getBoundingClientRect(), K = 12, B = 4, P = N.height - n.y, u = N.width - n.x;
    let p = n.x + K, w = n.y + K, _ = "below";
    u < y + K && (p = n.x - y - K), P < C + K && (w = n.y - C - K, _ = "above"), p = Math.max(B, Math.min(p, N.width - y - B)), w = Math.max(B, Math.min(w, N.height - C - B)), s(_), v.style.left = `${p}px`, v.style.top = `${w}px`;
  }, [n]);
  const d = t.reservationType === wt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, m = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ q(Pc, { ref: r, $position: o, children: [
    /* @__PURE__ */ q(Ac, { children: [
      /* @__PURE__ */ q(Ic, { children: [
        /* @__PURE__ */ M(Yc, { children: t.bookingNumber }),
        /* @__PURE__ */ M(Oc, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ M(Lc, { children: t.eventName }),
      t.client && /* @__PURE__ */ M(Rc, { children: t.client })
    ] }),
    /* @__PURE__ */ q(Nc, { children: [
      /* @__PURE__ */ q(Fc, { children: [
        /* @__PURE__ */ q(cr, { children: [
          /* @__PURE__ */ M(lr, { children: c.startDate }),
          /* @__PURE__ */ q(dr, { children: [
            /* @__PURE__ */ M(ur, { children: t.startDate }),
            " ",
            /* @__PURE__ */ M(fr, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ q(cr, { $isEnd: !0, children: [
          /* @__PURE__ */ M(lr, { children: c.endDate }),
          /* @__PURE__ */ q(dr, { children: [
            /* @__PURE__ */ M(ur, { children: t.endDate }),
            " ",
            /* @__PURE__ */ M(fr, { children: t.endTime })
          ] })
        ] })
      ] }),
      m.length > 0 && /* @__PURE__ */ M(Wc, { children: m.map((v, y) => /* @__PURE__ */ q(Hc, { children: [
        /* @__PURE__ */ M(zc, { children: v.label }),
        /* @__PURE__ */ M(Bc, { children: v.value })
      ] }, y)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ q(jc, { children: [
        t.serviceNotes && /* @__PURE__ */ q(hr, { children: [
          /* @__PURE__ */ M(pr, { children: c.serviceNotes }),
          /* @__PURE__ */ M(mr, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ q(hr, { children: [
          /* @__PURE__ */ M(pr, { children: c.reservationNotes }),
          /* @__PURE__ */ M(mr, { children: t.reservationNotes })
        ] })
      ] })
    ] })
  ] });
}, Gc = S.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, Xc = S.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, Uc = S.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, Kc = ({ toggleTheme: e }) => {
  const n = et();
  return /* @__PURE__ */ q(Gc, { onClick: e, children: [
    /* @__PURE__ */ M(Xc, {}),
    /* @__PURE__ */ M(Uc, { children: n.mode === "light" ? /* @__PURE__ */ M(Re, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ M(Re, { iconName: "moon", height: "16", width: "16" }) })
  ] });
}, Jc = S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, qc = S.div`
  position: absolute;
  height: ${wn}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: n, $animateToY: t }) => e && n !== void 0 && t !== void 0 ? `transform: translate3d(${n}px, ${t}px, 0);` : ""}
`, Qc = S.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, gr = S.p`
  ${ht}
  ${Lt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, el = S.p`
  ${ht}
  ${Lt}
`, tl = S.div`
  position: sticky;
  left: ${Ie + 16}px;
  overflow: hidden;
`, nl = S.div`
  position: absolute;
  height: ${wn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, rl = S.div`
  position: absolute;
  top: -24px;
  left: 0;
  padding: 4px 8px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
`, ol = S.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, sl = S.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, il = S.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, yr = S.div`
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
`, vr = S.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, br = S.div`
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
`, xr = S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, Bt = S.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, jt = S.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, rt = S.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, wr = S.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, al = ({
  draggedEvent: e,
  ghostPosition: n,
  ghostDimensions: t,
  dropTarget: r,
  isValidDrop: o,
  dragState: s,
  data: i,
  resourceOnly: c,
  separatorRowIndices: d = []
}) => {
  const a = Ve(), l = (P) => {
    let u = 0;
    for (const p of d)
      p <= P && u++;
    return P * me + u * Te;
  }, [f, m] = fe(null), [v, y] = fe(0), C = le((P = 400, u = 300) => {
    const w = t.width, _ = 48, T = document.getElementById("react-scheduler");
    if (!T)
      return {
        x: n.x + w + 16,
        y: n.y
      };
    const z = T.scrollLeft, U = T.scrollTop, G = T.clientWidth, k = T.clientHeight, $ = n.x - z, D = n.y - U, O = {
      left: Ie + 16,
      // Avoid left column
      right: G - 16,
      top: 16,
      bottom: k - 16
    }, I = O.right - ($ + w), J = $ - O.left, ee = O.bottom - (D + _), se = D - O.top;
    let oe, H;
    return I >= P + 16 ? oe = $ + w + 16 : J >= P + 16 ? oe = $ - P - 16 : I >= J ? (oe = $ + w + 16, oe + P > O.right && (oe = O.right - P)) : (oe = $ - P - 16, oe < O.left && (oe = O.left)), ee >= u + 16 ? H = D + _ + 16 : se >= u + 16 ? H = D - u - 16 : ee >= se ? (H = D + _ + 16, H + u > O.bottom && (H = O.bottom - u)) : (H = D - u - 16, H < O.top && (H = O.top)), oe = Math.max(O.left, Math.min(oe, O.right - P)), H = Math.max(O.top, Math.min(H, O.bottom - u)), {
      x: oe + z,
      y: H + U
    };
  }, [n.x, n.y, t.width]);
  xe(() => {
    s === "dragging" && e && v === 0 ? y(n.x) : s === "idle" && y(0);
  }, [s, e, n.x, v]), xe(() => {
    m(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const h = De(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const P = [];
    let u = 0;
    for (const p of i) {
      const w = Math.max(p.data.length, 1);
      if (p.capacity !== void 0 && e.totalPassengers > p.capacity)
        for (let _ = 0; _ < w; _++)
          P.push(u + _);
      u += w;
    }
    return P;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const N = s === "animating", K = to(e.bgColor ?? ""), B = () => {
    if (!r)
      return "";
    const P = E(r.startDate).format("MMM D, HH:mm"), u = E(r.endDate).format("HH:mm");
    return `${P} - ${u}`;
  };
  return /* @__PURE__ */ q(Jc, { children: [
    h.map((P) => /* @__PURE__ */ M(
      sl,
      {
        style: {
          top: `${l(P)}px`,
          height: `${me}px`
        }
      },
      P
    )),
    r && s === "dragging" && /* @__PURE__ */ M(
      ol,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${me}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ q(Le, { children: [
      /* @__PURE__ */ M(
        nl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (me - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ M(
        rl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (me - 48) / 2}px`
          },
          children: B()
        }
      )
    ] }),
    r && s === "dragging" && c && /* @__PURE__ */ M(
      il,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          left: "0px",
          top: `${l(r.resourceIndex)}px`,
          height: `${me}px`
        }
      }
    ),
    r && o && r.hasConflict && r.conflicts && r.conflicts.length > 0 && s === "dragging" && (() => {
      const P = C(400, 300);
      return /* @__PURE__ */ q(
        yr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`
          },
          children: [
            /* @__PURE__ */ q(vr, { children: [
              /* @__PURE__ */ M(br, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ M(xr, { children: r.conflicts.map((u, p) => {
              const w = E(r.startDate).format("YYYY-MM-DD"), _ = E(r.endDate).format("YYYY-MM-DD"), T = E(u.event.startDate).format("YYYY-MM-DD"), z = E(u.event.endDate).format("YYYY-MM-DD"), U = E(u.conflictStart).format("YYYY-MM-DD"), G = E(u.conflictEnd).format("YYYY-MM-DD"), k = w !== _, $ = T !== z, D = U !== G, O = k ? E(r.startDate).format("MMM D, h:mm A") : E(r.startDate).format("h:mm A"), I = k ? E(r.endDate).format("MMM D, h:mm A") : E(r.endDate).format("h:mm A"), J = $ ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), ee = $ ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), se = D ? E(u.conflictStart).format("MMM D, h:mm A") : E(u.conflictStart).format("h:mm A"), oe = D ? E(u.conflictEnd).format("MMM D, h:mm A") : E(u.conflictEnd).format("h:mm A"), H = D ? "" : E(u.conflictStart).format("MMM D"), j = r.startDate.getTime(), Z = r.endDate.getTime(), V = u.event.startDate.getTime(), b = u.event.endDate.getTime(), R = j >= V && j < b, g = Z > V && Z <= b, Y = j <= V && Z >= b, W = V <= j && b >= Z;
              let A = !1, x = !1, Q = !1, L = !1, X = "";
              return Y || W ? (A = !0, x = !0, Q = !0, L = !0, X = `⚠️ ${a.conflicts.changeBoth}`) : R && g ? (A = !0, x = !0, Q = !0, L = !0, X = `⚠️ ${a.conflicts.changeBoth}`) : R ? (A = !0, L = !0, X = `⚠️ ${a.conflicts.changeStart}`) : g && (x = !0, Q = !0, X = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ q(Bt, { children: [
                /* @__PURE__ */ q(jt, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ q(rt, { children: [
                  /* @__PURE__ */ M("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  A ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: O }) : O,
                  " ",
                  a.conflicts.to,
                  " ",
                  x ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
                ] }),
                /* @__PURE__ */ q(rt, { children: [
                  /* @__PURE__ */ M("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  Q ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: J }) : J,
                  " ",
                  a.conflicts.to,
                  " ",
                  L ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ee }) : ee
                ] }),
                /* @__PURE__ */ q(wr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  H && `${H}, `,
                  se,
                  " - ",
                  oe
                ] }),
                X && /* @__PURE__ */ M(rt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: X })
              ] }, p);
            }) })
          ]
        }
      );
    })(),
    r && o && !r.hasConflict && r.nearbyEvents && r.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const P = C(400, 400);
      return /* @__PURE__ */ q(
        yr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ q(vr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ M(br, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ q(xr, { children: [
              (() => {
                const u = r.nearbyEvents.some((T) => T.position === "before"), p = r.nearbyEvents.some((T) => T.position === "after"), w = E(r.startDate).format("h:mm A"), _ = E(r.endDate).format("h:mm A");
                return /* @__PURE__ */ q(Bt, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ q(jt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ q(rt, { style: { fontWeight: 600 }, children: [
                    E(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    p ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: _ }) : _
                  ] }),
                  /* @__PURE__ */ M(rt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              r.nearbyEvents.map((u, p) => {
                const w = E(u.event.startDate).format("YYYY-MM-DD"), _ = E(u.event.endDate).format("YYYY-MM-DD"), T = w !== _, z = T ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), U = T ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), G = E(u.event.startDate).format("MMM D"), k = Math.floor(u.timeGap / (1e3 * 60 * 60)), $ = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), D = k > 0 ? `${k}h ${$}m` : `${$}m`, O = u.position === "after", I = u.position === "before";
                return /* @__PURE__ */ q(Bt, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ q(jt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ q(rt, { children: [
                    !T && `${G}: `,
                    O ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: z }) : z,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: U }) : U
                  ] }),
                  /* @__PURE__ */ q(wr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    D,
                    " ",
                    u.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, p);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ M(
      qc,
      {
        $isAnimating: N,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: N ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: N ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: N ? void 0 : `translate3d(${c ? v : n.x}px, ${n.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: K
        },
        children: /* @__PURE__ */ M(Qc, { children: /* @__PURE__ */ q(tl, { children: [
          /* @__PURE__ */ M(gr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ M(gr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ M(el, { children: e.description })
        ] }) })
      }
    )
  ] });
}, cl = al, ll = Ot`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, dl = S.div`
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
  animation: ${ll} 1.5s ease-in-out infinite;
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
`, ul = ({ selectionBox: e, isSelecting: n }) => !e || !n ? null : /* @__PURE__ */ M(
  dl,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), fl = ul, hl = Ot`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, pl = S.div`
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
  animation: ${hl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, ml = S.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, gl = S.span`
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
`, yl = S.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, vl = S.span`
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
const bl = S.div`
  display: flex;
  gap: 8px;
`, Sr = S.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;

  ${({ variant: e, $hasConflicts: n }) => e === "primary" ? `
    background: white;
    color: ${n ? "#b45309" : "#15803d"};
    border: none;
    
    &:hover {
      background: ${n ? "#fef3c7" : "#f0fdf4"};
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
`, xl = ({ selections: e, onConfirm: n, onClear: t }) => {
  var y;
  const o = Ve().multiSelect, s = De(() => e.filter((C) => C.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((y = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : y.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const m = s > 0, v = /* @__PURE__ */ q(pl, { $hasConflicts: m, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ q(ml, { children: [
      /* @__PURE__ */ q(gl, { $hasConflicts: m, children: [
        e.length,
        " ",
        i
      ] }),
      m && /* @__PURE__ */ q(yl, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ M(vl, { children: c })
    ] }),
    /* @__PURE__ */ q(bl, { children: [
      /* @__PURE__ */ q(Sr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ M(Sr, { variant: "primary", $hasConflicts: m, onClick: n, children: m ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return co(v, document.body);
}, wl = xl, Sl = Ot`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Cl = S.div`
  position: absolute;
  background: ${({ $hasConflict: e, $isDragging: n }) => n ? e ? "rgba(245, 158, 11, 0.4)" : "rgba(34, 197, 94, 0.4)" : e ? "rgba(245, 158, 11, 0.2)" : "rgba(34, 197, 94, 0.2)"};
  border: 2px solid ${({ $hasConflict: e }) => e ? "#f59e0b" : "#22c55e"};
  border-radius: 4px;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  box-sizing: border-box;
  animation: ${Sl} 0.2s ease-out;
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
`, Ml = S.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, kl = S.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Dl = S.button`
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
`, $l = ({
  selections: e,
  data: n,
  zoom: t,
  startDate: r,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = fe(null), [a, l] = fe({ x: 0, y: 0 }), f = we(null), m = De(() => {
    switch (t) {
      case 0:
        return Ae * 7;
      case 1:
        return Se;
      case 2:
        return Ee;
      default:
        return Se;
    }
  }, [t]), v = De(() => E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), y = De(() => e.map((p, w) => {
    let _ = 0, T = !1;
    for (const J of n) {
      if (J.id === p.resourceId) {
        T = !0;
        break;
      }
      _ += Math.max(J.data.length, 1);
    }
    if (!T)
      return null;
    const z = E(p.startDate), U = E(p.endDate);
    let G, k;
    switch (t) {
      case 0:
        G = Math.floor(z.diff(v, "days") / 7), k = Math.max(1, Math.ceil(U.diff(z, "days") / 7) + 1);
        break;
      case 1:
        G = z.diff(v, "days"), k = Math.max(1, U.diff(z, "days") + 1);
        break;
      case 2:
        G = z.diff(v, "hours"), k = Math.max(1, U.diff(z, "hours") + 1);
        break;
      default:
        G = 0, k = 1;
    }
    const $ = G * m;
    let D = 0;
    for (const J of i)
      J <= _ && D++;
    const O = _ * me + D * Te, I = k * m;
    return {
      index: w,
      selection: p,
      x: $,
      y: O,
      width: I,
      height: me
    };
  }), [e, n, t, v, m]), C = (p, w) => {
    const _ = E(p).format("MMM D"), T = E(w).format("MMM D");
    return _ === T ? _ : `${_} - ${T}`;
  }, h = (p) => !p.hasConflict || !p.conflicts ? "" : `⚠️ Conflicts with:
${p.conflicts.map((_) => {
    const T = (_.overlapDuration / 36e5).toFixed(1);
    return `• ${_.event.title} (${T}h overlap)`;
  }).join(`
`)}`, N = le(
    (p) => {
      let w = 0;
      for (const _ of n) {
        const T = Math.max(_.data.length, 1);
        if (p >= w * me && p < (w + T) * me)
          return {
            resourceId: _.id,
            resourceLabel: _.label
          };
        w += T;
      }
      return null;
    },
    [n]
  ), K = le(
    (p) => {
      const w = Math.floor(p / m);
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
    [t, v, m]
  ), B = le(
    (p, w) => {
      !s || (p.preventDefault(), p.stopPropagation(), !y[w]) || (f.current = { x: p.clientX, y: p.clientY }, d(w), l({ x: 0, y: 0 }));
    },
    [s, y]
  ), P = le(
    (p) => {
      if (c === null || !f.current)
        return;
      const w = p.clientX - f.current.x, _ = p.clientY - f.current.y, T = Math.round(w / m) * m, z = Math.round(_ / me) * me;
      l({ x: T, y: z });
    },
    [c, m]
  ), u = le(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const p = y[c];
    if (!p) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const w = p.x + a.x, _ = p.y + a.y, T = N(_ + me / 2);
    if (!T) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const z = K(w), U = e[c], G = U.endDate.getTime() - U.startDate.getTime(), k = new Date(z.getTime() + G);
    s(c, {
      startDate: z,
      endDate: k,
      resourceId: T.resourceId,
      resourceLabel: T.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, y, e, s, N, K]);
  return xe(() => {
    if (c !== null)
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", u);
      };
  }, [c, P, u]), /* @__PURE__ */ M(Le, { children: y.map((p) => {
    if (!p)
      return null;
    const w = p.selection.hasConflict || !1, _ = c === p.index, T = _ ? p.x + a.x : p.x, z = _ ? p.y + a.y : p.y;
    return /* @__PURE__ */ q(
      Cl,
      {
        $hasConflict: w,
        $isDragging: _,
        style: {
          left: T,
          top: z,
          width: p.width,
          height: p.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (U) => B(U, p.index),
        children: [
          w && /* @__PURE__ */ M(kl, { title: h(p.selection), children: "⚠️" }),
          /* @__PURE__ */ M(Ml, { $hasConflict: w, children: C(p.selection.startDate, p.selection.endDate) }),
          /* @__PURE__ */ M(
            Dl,
            {
              onClick: (U) => {
                U.stopPropagation(), o(p.index);
              },
              onMouseDown: (U) => U.stopPropagation(),
              title: w ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      p.index
    );
  }) });
}, El = $l, _l = S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  background: ${({ theme: e }) => e.colors.today}12;
`, Tl = ({ zoom: e, startDate: n }) => {
  const { cols: t } = Ze(), r = De(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Ae * 7 : Se, s = E().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = E().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ M(_l, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, Pl = Tl;
export {
  Ll as Scheduler
};
