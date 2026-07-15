var bo = Object.defineProperty;
var wo = (e, r, t) => r in e ? bo(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Hn = (e, r, t) => (wo(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as p, jsxs as j, Fragment as Te } from "react/jsx-runtime";
import * as se from "react";
import rt, { useRef as fe, useContext as qe, useMemo as $e, useLayoutEffect as Vt, useDebugValue as zn, createElement as So, createContext as Hr, useState as pe, useCallback as de, useEffect as ye, forwardRef as En, useImperativeHandle as zr } from "react";
import { createPortal as Co } from "react-dom";
var Ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _t = {}, Mo = {
  get exports() {
    return _t;
  },
  set exports(e) {
    _t = e;
  }
}, xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function ko() {
  if (Fn)
    return xe;
  Fn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function S(m) {
    if (typeof m == "object" && m !== null) {
      var Y = m.$$typeof;
      switch (Y) {
        case e:
          switch (m = m.type, m) {
            case t:
            case o:
            case n:
            case a:
            case u:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case i:
                case l:
                case y:
                case f:
                case s:
                  return m;
                default:
                  return Y;
              }
          }
        case r:
          return Y;
      }
    }
  }
  return xe.ContextConsumer = i, xe.ContextProvider = s, xe.Element = e, xe.ForwardRef = l, xe.Fragment = t, xe.Lazy = y, xe.Memo = f, xe.Portal = r, xe.Profiler = o, xe.StrictMode = n, xe.Suspense = a, xe.SuspenseList = u, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(m) {
    return S(m) === i;
  }, xe.isContextProvider = function(m) {
    return S(m) === s;
  }, xe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, xe.isForwardRef = function(m) {
    return S(m) === l;
  }, xe.isFragment = function(m) {
    return S(m) === t;
  }, xe.isLazy = function(m) {
    return S(m) === y;
  }, xe.isMemo = function(m) {
    return S(m) === f;
  }, xe.isPortal = function(m) {
    return S(m) === r;
  }, xe.isProfiler = function(m) {
    return S(m) === o;
  }, xe.isStrictMode = function(m) {
    return S(m) === n;
  }, xe.isSuspense = function(m) {
    return S(m) === a;
  }, xe.isSuspenseList = function(m) {
    return S(m) === u;
  }, xe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === n || m === a || m === u || m === M || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === f || m.$$typeof === s || m.$$typeof === i || m.$$typeof === l || m.$$typeof === v || m.getModuleId !== void 0);
  }, xe.typeOf = S, xe;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function $o() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), v = !1, S = !1, m = !1, Y = !1, F = !1, P;
    P = Symbol.for("react.module.reference");
    function I($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === t || $ === o || F || $ === n || $ === a || $ === u || Y || $ === M || v || S || m || typeof $ == "object" && $ !== null && ($.$$typeof === y || $.$$typeof === f || $.$$typeof === s || $.$$typeof === i || $.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === P || $.getModuleId !== void 0));
    }
    function d($) {
      if (typeof $ == "object" && $ !== null) {
        var W = $.$$typeof;
        switch (W) {
          case e:
            var re = $.type;
            switch (re) {
              case t:
              case o:
              case n:
              case a:
              case u:
                return re;
              default:
                var U = re && re.$$typeof;
                switch (U) {
                  case c:
                  case i:
                  case l:
                  case y:
                  case f:
                  case s:
                    return U;
                  default:
                    return W;
                }
            }
          case r:
            return W;
        }
      }
    }
    var h = i, b = s, k = e, T = l, R = t, J = y, q = f, D = r, E = o, A = n, N = a, O = u, X = !1, Q = !1;
    function ie($) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ce($) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L($) {
      return d($) === i;
    }
    function B($) {
      return d($) === s;
    }
    function K($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function ne($) {
      return d($) === l;
    }
    function C($) {
      return d($) === t;
    }
    function H($) {
      return d($) === y;
    }
    function w($) {
      return d($) === f;
    }
    function Z($) {
      return d($) === r;
    }
    function V($) {
      return d($) === o;
    }
    function z($) {
      return d($) === n;
    }
    function g($) {
      return d($) === a;
    }
    function G($) {
      return d($) === u;
    }
    be.ContextConsumer = h, be.ContextProvider = b, be.Element = k, be.ForwardRef = T, be.Fragment = R, be.Lazy = J, be.Memo = q, be.Portal = D, be.Profiler = E, be.StrictMode = A, be.Suspense = N, be.SuspenseList = O, be.isAsyncMode = ie, be.isConcurrentMode = ce, be.isContextConsumer = L, be.isContextProvider = B, be.isElement = K, be.isForwardRef = ne, be.isFragment = C, be.isLazy = H, be.isMemo = w, be.isPortal = Z, be.isProfiler = V, be.isStrictMode = z, be.isSuspense = g, be.isSuspenseList = G, be.isValidElementType = I, be.typeOf = d;
  }()), be;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ko() : e.exports = $o();
})(Mo);
function Do(e) {
  function r(L, B, K, ne, C) {
    for (var H = 0, w = 0, Z = 0, V = 0, z, g, G = 0, $ = 0, W, re = W = z = 0, U = 0, le = 0, he = 0, ue = 0, ve = K.length, ke = ve - 1, Ce, ae = "", ee = "", te = "", oe = "", me; U < ve; ) {
      if (g = K.charCodeAt(U), U === ke && w + V + Z + H !== 0 && (w !== 0 && (g = w === 47 ? 10 : 47), V = Z = H = 0, ve++, ke++), w + V + Z + H === 0) {
        if (U === ke && (0 < le && (ae = ae.replace(y, "")), 0 < ae.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ae += K.charAt(U);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (ae = ae.trim(), z = ae.charCodeAt(0), W = 1, ue = ++U; U < ve; ) {
              switch (g = K.charCodeAt(U)) {
                case 123:
                  W++;
                  break;
                case 125:
                  W--;
                  break;
                case 47:
                  switch (g = K.charCodeAt(U + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (re = U + 1; re < ke; ++re)
                          switch (K.charCodeAt(re)) {
                            case 47:
                              if (g === 42 && K.charCodeAt(re - 1) === 42 && U + 2 !== re) {
                                U = re + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                U = re + 1;
                                break e;
                              }
                          }
                        U = re;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; U++ < ke && K.charCodeAt(U) !== g; )
                    ;
              }
              if (W === 0)
                break;
              U++;
            }
            switch (W = K.substring(ue, U), z === 0 && (z = (ae = ae.replace(f, "").trim()).charCodeAt(0)), z) {
              case 64:
                switch (0 < le && (ae = ae.replace(y, "")), g = ae.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = B;
                    break;
                  default:
                    le = N;
                }
                if (W = r(B, le, W, g, C + 1), ue = W.length, 0 < X && (le = t(N, ae, he), me = c(3, W, le, B, D, q, ue, g, C, ne), ae = le.join(""), me !== void 0 && (ue = (W = me.trim()).length) === 0 && (g = 0, W = "")), 0 < ue)
                  switch (g) {
                    case 115:
                      ae = ae.replace(h, i);
                    case 100:
                    case 109:
                    case 45:
                      W = ae + "{" + W + "}";
                      break;
                    case 107:
                      ae = ae.replace(F, "$1 $2"), W = ae + "{" + W + "}", W = A === 1 || A === 2 && s("@" + W, 3) ? "@-webkit-" + W + "@" + W : "@" + W;
                      break;
                    default:
                      W = ae + W, ne === 112 && (W = (ee += W, ""));
                  }
                else
                  W = "";
                break;
              default:
                W = r(B, t(B, ae, he), W, ne, C + 1);
            }
            te += W, W = he = le = re = z = 0, ae = "", g = K.charCodeAt(++U);
            break;
          case 125:
          case 59:
            if (ae = (0 < le ? ae.replace(y, "") : ae).trim(), 1 < (ue = ae.length))
              switch (re === 0 && (z = ae.charCodeAt(0), z === 45 || 96 < z && 123 > z) && (ue = (ae = ae.replace(" ", ":")).length), 0 < X && (me = c(1, ae, B, L, D, q, ee.length, ne, C, ne)) !== void 0 && (ue = (ae = me.trim()).length) === 0 && (ae = "\0\0"), z = ae.charCodeAt(0), g = ae.charCodeAt(1), z) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    oe += ae + K.charAt(U);
                    break;
                  }
                default:
                  ae.charCodeAt(ue - 1) !== 58 && (ee += o(ae, z, g, ae.charCodeAt(2)));
              }
            he = le = re = z = 0, ae = "", g = K.charCodeAt(++U);
        }
      }
      switch (g) {
        case 13:
        case 10:
          w === 47 ? w = 0 : 1 + z === 0 && ne !== 107 && 0 < ae.length && (le = 1, ae += "\0"), 0 < X * ie && c(0, ae, B, L, D, q, ee.length, ne, C, ne), q = 1, D++;
          break;
        case 59:
        case 125:
          if (w + V + Z + H === 0) {
            q++;
            break;
          }
        default:
          switch (q++, Ce = K.charAt(U), g) {
            case 9:
            case 32:
              if (V + H + w === 0)
                switch (G) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ce = "";
                    break;
                  default:
                    g !== 32 && (Ce = " ");
                }
              break;
            case 0:
              Ce = "\\0";
              break;
            case 12:
              Ce = "\\f";
              break;
            case 11:
              Ce = "\\v";
              break;
            case 38:
              V + w + H === 0 && (le = he = 1, Ce = "\f" + Ce);
              break;
            case 108:
              if (V + w + H + E === 0 && 0 < re)
                switch (U - re) {
                  case 2:
                    G === 112 && K.charCodeAt(U - 3) === 58 && (E = G);
                  case 8:
                    $ === 111 && (E = $);
                }
              break;
            case 58:
              V + w + H === 0 && (re = U);
              break;
            case 44:
              w + Z + V + H === 0 && (le = 1, Ce += "\r");
              break;
            case 34:
            case 39:
              w === 0 && (V = V === g ? 0 : V === 0 ? g : V);
              break;
            case 91:
              V + w + Z === 0 && H++;
              break;
            case 93:
              V + w + Z === 0 && H--;
              break;
            case 41:
              V + w + H === 0 && Z--;
              break;
            case 40:
              if (V + w + H === 0) {
                if (z === 0)
                  switch (2 * G + 3 * $) {
                    case 533:
                      break;
                    default:
                      z = 1;
                  }
                Z++;
              }
              break;
            case 64:
              w + Z + V + H + re + W === 0 && (W = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + H + Z))
                switch (w) {
                  case 0:
                    switch (2 * g + 3 * K.charCodeAt(U + 1)) {
                      case 235:
                        w = 47;
                        break;
                      case 220:
                        ue = U, w = 42;
                    }
                    break;
                  case 42:
                    g === 47 && G === 42 && ue + 2 !== U && (K.charCodeAt(ue + 2) === 33 && (ee += K.substring(ue, U + 1)), Ce = "", w = 0);
                }
          }
          w === 0 && (ae += Ce);
      }
      $ = G, G = g, U++;
    }
    if (ue = ee.length, 0 < ue) {
      if (le = B, 0 < X && (me = c(2, ee, le, L, D, q, ue, ne, C, ne), me !== void 0 && (ee = me).length === 0))
        return oe + ee + te;
      if (ee = le.join(",") + "{" + ee + "}", A * E !== 0) {
        switch (A !== 2 || s(ee, 2) || (E = 0), E) {
          case 111:
            ee = ee.replace(I, ":-moz-$1") + ee;
            break;
          case 112:
            ee = ee.replace(P, "::-webkit-input-$1") + ee.replace(P, "::-moz-$1") + ee.replace(P, ":-ms-input-$1") + ee;
        }
        E = 0;
      }
    }
    return oe + ee + te;
  }
  function t(L, B, K) {
    var ne = B.trim().split(m);
    B = ne;
    var C = ne.length, H = L.length;
    switch (H) {
      case 0:
      case 1:
        var w = 0;
        for (L = H === 0 ? "" : L[0] + " "; w < C; ++w)
          B[w] = n(L, B[w], K).trim();
        break;
      default:
        var Z = w = 0;
        for (B = []; w < C; ++w)
          for (var V = 0; V < H; ++V)
            B[Z++] = n(L[V] + " ", ne[w], K).trim();
    }
    return B;
  }
  function n(L, B, K) {
    var ne = B.charCodeAt(0);
    switch (33 > ne && (ne = (B = B.trim()).charCodeAt(0)), ne) {
      case 38:
        return B.replace(Y, "$1" + L.trim());
      case 58:
        return L.trim() + B.replace(Y, "$1" + L.trim());
      default:
        if (0 < 1 * K && 0 < B.indexOf("\f"))
          return B.replace(Y, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + B;
  }
  function o(L, B, K, ne) {
    var C = L + ";", H = 2 * B + 3 * K + 4 * ne;
    if (H === 944) {
      L = C.indexOf(":", 9) + 1;
      var w = C.substring(L, C.length - 1).trim();
      return w = C.substring(0, L).trim() + w + ";", A === 1 || A === 2 && s(w, 1) ? "-webkit-" + w + w : w;
    }
    if (A === 0 || A === 2 && !s(C, 1))
      return C;
    switch (H) {
      case 1015:
        return C.charCodeAt(10) === 97 ? "-webkit-" + C + C : C;
      case 951:
        return C.charCodeAt(3) === 116 ? "-webkit-" + C + C : C;
      case 963:
        return C.charCodeAt(5) === 110 ? "-webkit-" + C + C : C;
      case 1009:
        if (C.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + C + C;
      case 978:
        return "-webkit-" + C + "-moz-" + C + C;
      case 1019:
      case 983:
        return "-webkit-" + C + "-moz-" + C + "-ms-" + C + C;
      case 883:
        if (C.charCodeAt(8) === 45)
          return "-webkit-" + C + C;
        if (0 < C.indexOf("image-set(", 11))
          return C.replace(J, "$1-webkit-$2") + C;
        break;
      case 932:
        if (C.charCodeAt(4) === 45)
          switch (C.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + C.replace("-grow", "") + "-webkit-" + C + "-ms-" + C.replace("grow", "positive") + C;
            case 115:
              return "-webkit-" + C + "-ms-" + C.replace("shrink", "negative") + C;
            case 98:
              return "-webkit-" + C + "-ms-" + C.replace("basis", "preferred-size") + C;
          }
        return "-webkit-" + C + "-ms-" + C + C;
      case 964:
        return "-webkit-" + C + "-ms-flex-" + C + C;
      case 1023:
        if (C.charCodeAt(8) !== 99)
          break;
        return w = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + w + "-webkit-" + C + "-ms-flex-pack" + w + C;
      case 1005:
        return v.test(C) ? C.replace(M, ":-webkit-") + C.replace(M, ":-moz-") + C : C;
      case 1e3:
        switch (w = C.substring(13).trim(), B = w.indexOf("-") + 1, w.charCodeAt(0) + w.charCodeAt(B)) {
          case 226:
            w = C.replace(d, "tb");
            break;
          case 232:
            w = C.replace(d, "tb-rl");
            break;
          case 220:
            w = C.replace(d, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + w + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (B = (C = L).length - 10, w = (C.charCodeAt(B) === 33 ? C.substring(0, B) : C).substring(L.indexOf(":", 7) + 1).trim(), H = w.charCodeAt(0) + (w.charCodeAt(7) | 0)) {
          case 203:
            if (111 > w.charCodeAt(8))
              break;
          case 115:
            C = C.replace(w, "-webkit-" + w) + ";" + C;
            break;
          case 207:
          case 102:
            C = C.replace(w, "-webkit-" + (102 < H ? "inline-" : "") + "box") + ";" + C.replace(w, "-webkit-" + w) + ";" + C.replace(w, "-ms-" + w + "box") + ";" + C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return w = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + w + "-ms-flex-" + w + C;
            case 115:
              return "-webkit-" + C + "-ms-flex-item-" + C.replace(k, "") + C;
            default:
              return "-webkit-" + C + "-ms-flex-line-pack" + C.replace("align-content", "").replace(k, "") + C;
          }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (R.test(L) === !0)
          return (w = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(L.replace("stretch", "fill-available"), B, K, ne).replace(":fill-available", ":stretch") : C.replace(w, "-webkit-" + w) + C.replace(w, "-moz-" + w.replace("fill-", "")) + C;
        break;
      case 962:
        if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, K + ne === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10))
          return C.substring(0, C.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + C;
    }
    return C;
  }
  function s(L, B) {
    var K = L.indexOf(B === 1 ? ":" : "{"), ne = L.substring(0, B !== 3 ? K : 10);
    return K = L.substring(K + 1, L.length - 1), Q(B !== 2 ? ne : ne.replace(T, "$1"), K, B);
  }
  function i(L, B) {
    var K = o(B, B.charCodeAt(0), B.charCodeAt(1), B.charCodeAt(2));
    return K !== B + ";" ? K.replace(b, " or ($1)").substring(4) : "(" + B + ")";
  }
  function c(L, B, K, ne, C, H, w, Z, V, z) {
    for (var g = 0, G = B, $; g < X; ++g)
      switch ($ = O[g].call(u, L, G, K, ne, C, H, w, Z, V, z)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          G = $;
      }
    if (G !== B)
      return G;
  }
  function l(L) {
    switch (L) {
      case void 0:
      case null:
        X = O.length = 0;
        break;
      default:
        if (typeof L == "function")
          O[X++] = L;
        else if (typeof L == "object")
          for (var B = 0, K = L.length; B < K; ++B)
            l(L[B]);
        else
          ie = !!L | 0;
    }
    return l;
  }
  function a(L) {
    return L = L.prefix, L !== void 0 && (Q = null, L ? typeof L != "function" ? A = 1 : (A = 2, Q = L) : A = 0), a;
  }
  function u(L, B) {
    var K = L;
    if (33 > K.charCodeAt(0) && (K = K.trim()), ce = K, K = [ce], 0 < X) {
      var ne = c(-1, B, K, K, D, q, 0, 0, 0, 0);
      ne !== void 0 && typeof ne == "string" && (B = ne);
    }
    var C = r(N, K, B, 0, 0);
    return 0 < X && (ne = c(-2, C, K, K, D, q, C.length, 0, 0, 0), ne !== void 0 && (C = ne)), ce = "", E = 0, q = D = 1, C;
  }
  var f = /^\0+/g, y = /[\0\r\f]/g, M = /: */g, v = /zoo|gra/, S = /([,: ])(transform)/g, m = /,\r+?/g, Y = /([\t\r\n ])*\f?&/g, F = /@(k\w+)\s*(\S*)\s*/, P = /::(place)/g, I = /:(read-only)/g, d = /[svh]\w+-[tblr]{2}/, h = /\(\s*(.*)\s*\)/g, b = /([\s\S]*?);/g, k = /-self|flex-/g, T = /[^]*?(:[rp][el]a[\w-]+)[^]*/, R = /stretch|:\s*\w+\-(?:conte|avail)/, J = /([^-])(image-set\()/, q = 1, D = 1, E = 0, A = 1, N = [], O = [], X = 0, Q = null, ie = 0, ce = "";
  return u.use = l, u.set = a, e !== void 0 && a(e), u;
}
var Eo = {
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
function _o(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var To = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jn = /* @__PURE__ */ _o(
  function(e) {
    return To.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), nn = {}, Ao = {
  get exports() {
    return nn;
  },
  set exports(e) {
    nn = e;
  }
}, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function Po() {
  if (Zn)
    return we;
  Zn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function P(d) {
    if (typeof d == "object" && d !== null) {
      var h = d.$$typeof;
      switch (h) {
        case r:
          switch (d = d.type, d) {
            case l:
            case a:
            case n:
            case s:
            case o:
            case f:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case u:
                case v:
                case M:
                case i:
                  return d;
                default:
                  return h;
              }
          }
        case t:
          return h;
      }
    }
  }
  function I(d) {
    return P(d) === a;
  }
  return we.AsyncMode = l, we.ConcurrentMode = a, we.ContextConsumer = c, we.ContextProvider = i, we.Element = r, we.ForwardRef = u, we.Fragment = n, we.Lazy = v, we.Memo = M, we.Portal = t, we.Profiler = s, we.StrictMode = o, we.Suspense = f, we.isAsyncMode = function(d) {
    return I(d) || P(d) === l;
  }, we.isConcurrentMode = I, we.isContextConsumer = function(d) {
    return P(d) === c;
  }, we.isContextProvider = function(d) {
    return P(d) === i;
  }, we.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, we.isForwardRef = function(d) {
    return P(d) === u;
  }, we.isFragment = function(d) {
    return P(d) === n;
  }, we.isLazy = function(d) {
    return P(d) === v;
  }, we.isMemo = function(d) {
    return P(d) === M;
  }, we.isPortal = function(d) {
    return P(d) === t;
  }, we.isProfiler = function(d) {
    return P(d) === s;
  }, we.isStrictMode = function(d) {
    return P(d) === o;
  }, we.isSuspense = function(d) {
    return P(d) === f;
  }, we.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === a || d === s || d === o || d === f || d === y || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === M || d.$$typeof === i || d.$$typeof === c || d.$$typeof === u || d.$$typeof === m || d.$$typeof === Y || d.$$typeof === F || d.$$typeof === S);
  }, we.typeOf = P, we;
}
var Se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Io() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function P(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === a || g === s || g === o || g === f || g === y || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === M || g.$$typeof === i || g.$$typeof === c || g.$$typeof === u || g.$$typeof === m || g.$$typeof === Y || g.$$typeof === F || g.$$typeof === S);
    }
    function I(g) {
      if (typeof g == "object" && g !== null) {
        var G = g.$$typeof;
        switch (G) {
          case r:
            var $ = g.type;
            switch ($) {
              case l:
              case a:
              case n:
              case s:
              case o:
              case f:
                return $;
              default:
                var W = $ && $.$$typeof;
                switch (W) {
                  case c:
                  case u:
                  case v:
                  case M:
                  case i:
                    return W;
                  default:
                    return G;
                }
            }
          case t:
            return G;
        }
      }
    }
    var d = l, h = a, b = c, k = i, T = r, R = u, J = n, q = v, D = M, E = t, A = s, N = o, O = f, X = !1;
    function Q(g) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ie(g) || I(g) === l;
    }
    function ie(g) {
      return I(g) === a;
    }
    function ce(g) {
      return I(g) === c;
    }
    function L(g) {
      return I(g) === i;
    }
    function B(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function K(g) {
      return I(g) === u;
    }
    function ne(g) {
      return I(g) === n;
    }
    function C(g) {
      return I(g) === v;
    }
    function H(g) {
      return I(g) === M;
    }
    function w(g) {
      return I(g) === t;
    }
    function Z(g) {
      return I(g) === s;
    }
    function V(g) {
      return I(g) === o;
    }
    function z(g) {
      return I(g) === f;
    }
    Se.AsyncMode = d, Se.ConcurrentMode = h, Se.ContextConsumer = b, Se.ContextProvider = k, Se.Element = T, Se.ForwardRef = R, Se.Fragment = J, Se.Lazy = q, Se.Memo = D, Se.Portal = E, Se.Profiler = A, Se.StrictMode = N, Se.Suspense = O, Se.isAsyncMode = Q, Se.isConcurrentMode = ie, Se.isContextConsumer = ce, Se.isContextProvider = L, Se.isElement = B, Se.isForwardRef = K, Se.isFragment = ne, Se.isLazy = C, Se.isMemo = H, Se.isPortal = w, Se.isProfiler = Z, Se.isStrictMode = V, Se.isSuspense = z, Se.isValidElementType = P, Se.typeOf = I;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Po() : e.exports = Io();
})(Ao);
var _n = nn, Oo = {
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
}, Yo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ro = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Fr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Tn = {};
Tn[_n.ForwardRef] = Ro;
Tn[_n.Memo] = Fr;
function Gn(e) {
  return _n.isMemo(e) ? Fr : Tn[e.$$typeof] || Oo;
}
var Lo = Object.defineProperty, No = Object.getOwnPropertyNames, Xn = Object.getOwnPropertySymbols, Bo = Object.getOwnPropertyDescriptor, Ho = Object.getPrototypeOf, Un = Object.prototype;
function Wr(e, r, t) {
  if (typeof r != "string") {
    if (Un) {
      var n = Ho(r);
      n && n !== Un && Wr(e, n, t);
    }
    var o = No(r);
    Xn && (o = o.concat(Xn(r)));
    for (var s = Gn(e), i = Gn(r), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!Yo[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = Bo(r, l);
        try {
          Lo(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var zo = Wr;
function Be() {
  return (Be = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Kn = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, rn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !_t.typeOf(e);
}, zt = Object.freeze([]), Je = Object.freeze({});
function mt(e) {
  return typeof e == "function";
}
function on(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function An(e) {
  return e && typeof e.styledComponentId == "string";
}
var gt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Pn = typeof window < "u" && "HTMLElement" in window, Fo = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Wo = {}, jo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Zo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function We(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Zo.apply(void 0, [jo[e]].concat(t)).trim());
}
var Vo = function() {
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
        (i <<= 1) < 0 && We(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = s; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), a = 0, u = n.length; a < u; a++)
      this.tag.insertRule(l, n[a]) && (this.groupSizes[t]++, l++);
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
}(), Bt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), Et = 1, Ot = function(e) {
  if (Bt.has(e))
    return Bt.get(e);
  for (; Ft.has(Et); )
    Et++;
  var r = Et++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && We(16, "" + r), Bt.set(e, r), Ft.set(r, e), r;
}, Go = function(e) {
  return Ft.get(e);
}, Xo = function(e, r) {
  r >= Et && (Et = r + 1), Bt.set(e, r), Ft.set(r, e);
}, Uo = "style[" + gt + '][data-styled-version="5.3.8"]', Ko = new RegExp("^" + gt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Jo = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, qo = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Ko);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (Xo(a, l), Jo(e, a, c[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Qo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, jr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var u = l[a];
      if (u && u.nodeType === 1 && u.hasAttribute(gt))
        return u;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(gt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = Qo();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, es = function() {
  function e(t) {
    var n = this.element = jr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      We(17);
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
}(), ts = function() {
  function e(t) {
    var n = this.element = jr(t);
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
}(), ns = function() {
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
}(), Jn = Pn, rs = { isServer: !Pn, useCSSOMInjection: !Fo }, Wt = function() {
  function e(t, n, o) {
    t === void 0 && (t = Je), n === void 0 && (n = {}), this.options = Be({}, rs, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Pn && Jn && (Jn = !1, function(s) {
      for (var i = document.querySelectorAll(Uo), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(gt) !== "active" && (qo(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ot(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Be({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new ns(i) : s ? new es(i) : new ts(i), new Vo(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ot(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Ot(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ot(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = Go(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var u = gt + ".g" + i + '[id="' + c + '"]', f = "";
            l !== void 0 && l.forEach(function(y) {
              y.length > 0 && (f += y + ",");
            }), s += "" + a + u + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), os = /(a)(d)/gi, qn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function sn(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = qn(r % 52) + t;
  return (qn(r % 52) + t).replace(os, "$1-$2");
}
var tt = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Zr = function(e) {
  return tt(5381, e);
};
function Vr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (mt(t) && !An(t))
      return !1;
  }
  return !0;
}
var ss = Zr("5.3.8"), is = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Vr(r), this.componentId = t, this.baseHash = tt(ss, t), this.baseStyle = n, Wt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ot(this.rules, r, t, n).join(""), c = sn(tt(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, u = tt(this.baseHash, n.hash), f = "", y = 0; y < a; y++) {
        var M = this.rules[y];
        if (typeof M == "string")
          f += M, process.env.NODE_ENV !== "production" && (u = tt(u, M + y));
        else if (M) {
          var v = ot(M, r, t, n), S = Array.isArray(v) ? v.join("") : v;
          u = tt(u, S + y), f += S;
        }
      }
      if (f) {
        var m = sn(u >>> 0);
        if (!t.hasNameForId(o, m)) {
          var Y = n(f, "." + m, void 0, o);
          t.insertRules(o, m, Y);
        }
        s.push(m);
      }
    }
    return s.join(" ");
  }, e;
}(), as = /^\s*\/\/.*$/gm, cs = [":", "[", ".", "#"];
function ls(e) {
  var r, t, n, o, s = e === void 0 ? Je : e, i = s.options, c = i === void 0 ? Je : i, l = s.plugins, a = l === void 0 ? zt : l, u = new Do(c), f = [], y = function(S) {
    function m(Y) {
      if (Y)
        try {
          S(Y + "}");
        } catch {
        }
    }
    return function(Y, F, P, I, d, h, b, k, T, R) {
      switch (Y) {
        case 1:
          if (T === 0 && F.charCodeAt(0) === 64)
            return S(F + ";"), "";
          break;
        case 2:
          if (k === 0)
            return F + "/*|*/";
          break;
        case 3:
          switch (k) {
            case 102:
            case 112:
              return S(P[0] + F), "";
            default:
              return F + (R === 0 ? "/*|*/" : "");
          }
        case -2:
          F.split("/*|*/}").forEach(m);
      }
    };
  }(function(S) {
    f.push(S);
  }), M = function(S, m, Y) {
    return m === 0 && cs.indexOf(Y[t.length]) !== -1 || Y.match(o) ? S : "." + r;
  };
  function v(S, m, Y, F) {
    F === void 0 && (F = "&");
    var P = S.replace(as, ""), I = m && Y ? Y + " " + m + " { " + P + " }" : P;
    return r = F, t = m, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), u(Y || !m ? "" : m, I);
  }
  return u.use([].concat(a, [function(S, m, Y) {
    S === 2 && Y.length && Y[0].lastIndexOf(t) > 0 && (Y[0] = Y[0].replace(n, M));
  }, y, function(S) {
    if (S === -2) {
      var m = f;
      return f = [], m;
    }
  }])), v.hash = a.length ? a.reduce(function(S, m) {
    return m.name || We(15), tt(S, m.name);
  }, 5381).toString() : "", v;
}
var Gr = rt.createContext();
Gr.Consumer;
var Xr = rt.createContext(), ds = (Xr.Consumer, new Wt()), an = ls();
function Ur() {
  return qe(Gr) || ds;
}
function Kr() {
  return qe(Xr) || an;
}
var Jr = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = an);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return We(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = an), this.name + r.hash;
  }, e;
}(), us = /([A-Z])/, fs = /([A-Z])/g, hs = /^ms-/, ps = function(e) {
  return "-" + e.toLowerCase();
};
function Qn(e) {
  return us.test(e) ? e.replace(fs, ps).replace(hs, "-ms-") : e;
}
var er = function(e) {
  return e == null || e === !1 || e === "";
};
function ot(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = ot(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (er(e))
    return "";
  if (An(e))
    return "." + e.styledComponentId;
  if (mt(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && _t.isElement(l) && console.warn(on(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ot(l, r, t, n);
  }
  var a;
  return e instanceof Jr ? t ? (e.inject(t, n), e.getName(n)) : e : rn(e) ? function u(f, y) {
    var M, v, S = [];
    for (var m in f)
      f.hasOwnProperty(m) && !er(f[m]) && (Array.isArray(f[m]) && f[m].isCss || mt(f[m]) ? S.push(Qn(m) + ":", f[m], ";") : rn(f[m]) ? S.push.apply(S, u(f[m], m)) : S.push(Qn(m) + ": " + (M = m, (v = f[m]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || M in Eo ? String(v).trim() : v + "px") + ";"));
    return y ? [y + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var tr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Gt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return mt(e) || rn(e) ? tr(ot(Kn(zt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : tr(ot(Kn(e, t)));
}
var nr = /invalid hook call/i, Yt = /* @__PURE__ */ new Set(), qr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (nr.test(s))
          o = !1, Yt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(c));
        }
      }, fe(), o && !Yt.has(t) && (console.warn(t), Yt.add(t));
    } catch (s) {
      nr.test(s.message) && Yt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Qr = function(e, r, t) {
  return t === void 0 && (t = Je), e.theme !== t.theme && e.theme || r || t.theme;
}, ms = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, gs = /(^-|-$)/g;
function Kt(e) {
  return e.replace(ms, "-").replace(gs, "");
}
var In = function(e) {
  return sn(Zr(e) >>> 0);
};
function Rt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var cn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ys = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function vs(e, r, t) {
  var n = e[t];
  cn(r) && cn(n) ? eo(n, r) : e[t] = r;
}
function eo(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (cn(i))
      for (var c in i)
        ys(c) && vs(e, i[c], c);
  }
  return e;
}
var yt = rt.createContext();
yt.Consumer;
function xs(e) {
  var r = qe(yt), t = $e(function() {
    return function(n, o) {
      if (!n)
        return We(14);
      if (mt(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : We(7);
      }
      return Array.isArray(n) || typeof n != "object" ? We(8) : o ? Be({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? rt.createElement(yt.Provider, { value: t }, e.children) : null;
}
var Jt = {};
function to(e, r, t) {
  var n = An(e), o = !Rt(e), s = r.attrs, i = s === void 0 ? zt : s, c = r.componentId, l = c === void 0 ? function(F, P) {
    var I = typeof F != "string" ? "sc" : Kt(F);
    Jt[I] = (Jt[I] || 0) + 1;
    var d = I + "-" + In("5.3.8" + I + Jt[I]);
    return P ? P + "-" + d : d;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, u = a === void 0 ? function(F) {
    return Rt(F) ? "styled." + F : "Styled(" + on(F) + ")";
  }(e) : a, f = r.displayName && r.componentId ? Kt(r.displayName) + "-" + r.componentId : r.componentId || l, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, M = r.shouldForwardProp;
  n && e.shouldForwardProp && (M = r.shouldForwardProp ? function(F, P, I) {
    return e.shouldForwardProp(F, P, I) && r.shouldForwardProp(F, P, I);
  } : e.shouldForwardProp);
  var v, S = new is(t, f, n ? e.componentStyle : void 0), m = S.isStatic && i.length === 0, Y = function(F, P) {
    return function(I, d, h, b) {
      var k = I.attrs, T = I.componentStyle, R = I.defaultProps, J = I.foldedComponentIds, q = I.shouldForwardProp, D = I.styledComponentId, E = I.target;
      process.env.NODE_ENV !== "production" && zn(D);
      var A = function(ne, C, H) {
        ne === void 0 && (ne = Je);
        var w = Be({}, C, { theme: ne }), Z = {};
        return H.forEach(function(V) {
          var z, g, G, $ = V;
          for (z in mt($) && ($ = $(w)), $)
            w[z] = Z[z] = z === "className" ? (g = Z[z], G = $[z], g && G ? g + " " + G : g || G) : $[z];
        }), [w, Z];
      }(Qr(d, qe(yt), R) || Je, d, k), N = A[0], O = A[1], X = function(ne, C, H, w) {
        var Z = Ur(), V = Kr(), z = C ? ne.generateAndInjectStyles(Je, Z, V) : ne.generateAndInjectStyles(H, Z, V);
        return process.env.NODE_ENV !== "production" && zn(z), process.env.NODE_ENV !== "production" && !C && w && w(z), z;
      }(T, b, N, process.env.NODE_ENV !== "production" ? I.warnTooManyClasses : void 0), Q = h, ie = O.$as || d.$as || O.as || d.as || E, ce = Rt(ie), L = O !== d ? Be({}, d, {}, O) : d, B = {};
      for (var K in L)
        K[0] !== "$" && K !== "as" && (K === "forwardedAs" ? B.as = L[K] : (q ? q(K, jn, ie) : !ce || jn(K)) && (B[K] = L[K]));
      return d.style && O.style !== d.style && (B.style = Be({}, d.style, {}, O.style)), B.className = Array.prototype.concat(J, D, X !== D ? X : null, d.className, O.className).filter(Boolean).join(" "), B.ref = Q, So(ie, B);
    }(v, F, P, m);
  };
  return Y.displayName = u, (v = rt.forwardRef(Y)).attrs = y, v.componentStyle = S, v.displayName = u, v.shouldForwardProp = M, v.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : zt, v.styledComponentId = f, v.target = n ? e.target : e, v.withComponent = function(F) {
    var P = r.componentId, I = function(h, b) {
      if (h == null)
        return {};
      var k, T, R = {}, J = Object.keys(h);
      for (T = 0; T < J.length; T++)
        k = J[T], b.indexOf(k) >= 0 || (R[k] = h[k]);
      return R;
    }(r, ["componentId"]), d = P && P + "-" + (Rt(F) ? F : Kt(on(F)));
    return to(F, Be({}, I, { attrs: y, componentId: d }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(F) {
    this._foldedDefaultProps = n ? eo({}, e.defaultProps, F) : F;
  } }), process.env.NODE_ENV !== "production" && (qr(u, f), v.warnTooManyClasses = function(F, P) {
    var I = {}, d = !1;
    return function(h) {
      if (!d && (I[h] = !0, Object.keys(I).length >= 200)) {
        var b = P ? ' with the id of "' + P + '"' : "";
        console.warn("Over 200 classes were generated for component " + F + b + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), d = !0, I = {};
      }
    };
  }(u, f)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && zo(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var ln = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Je), !_t.isValidElementType(n))
      return We(1, String(n));
    var s = function() {
      return t(n, o, Gt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Be({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Be({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(to, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ln[e] = ln(e);
});
var bs = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Vr(t), Wt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(ot(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && Wt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function ws(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Gt.apply(void 0, [e].concat(t)), s = "sc-global-" + In(JSON.stringify(o)), i = new bs(o, s);
  function c(a) {
    var u = Ur(), f = Kr(), y = qe(yt), M = fe(u.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && rt.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), u.server && l(M, a, u, y, f), Vt(function() {
      if (!u.server)
        return l(M, a, u, y, f), function() {
          return i.removeStyles(M, u);
        };
    }, [M, a, u, y, f]), null;
  }
  function l(a, u, f, y, M) {
    if (i.isStatic)
      i.renderStyles(a, Wo, f, M);
    else {
      var v = Be({}, u, { theme: Qr(u, y, c.defaultProps) });
      i.renderStyles(a, v, f, M);
    }
  }
  return process.env.NODE_ENV !== "production" && qr(s), rt.memo(c);
}
function it(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Gt.apply(void 0, [e].concat(t)).join(""), s = In(o);
  return new Jr(s, o);
}
var Xt = function() {
  return qe(yt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const x = ln, Dt = "reactSchedulerOutsideWrapper", Ne = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Ss = ws`

  #${Dt} {
    font-family: ${Ne};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Dt} *,
 #${Dt} *:before,
 #${Dt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Cs = {
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
}, Ms = {
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
}, wt = `
margin: 0;
padding: 0;
`, St = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
x.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const De = 50, Ze = 24, Ct = 16, nt = 40, vt = nt + Ct + Ze, xt = 84, ge = 56, Ye = 196, Le = 12, Pe = 50, bt = 24, Tt = 16, dn = 40, ks = bt + Tt + dn, rr = 24, or = 52, He = {
  topRow: `600 14px ${Ne}`,
  middleRow: `400 10px ${Ne}`,
  bottomRow: {
    name: `600 14px ${Ne}`,
    number: `600 10px ${Ne}`,
    hoursInDay: `400 9px ${Ne}`
  }
}, pt = 3, $s = 1.6, Ds = 4.5, un = 12, jt = 24, Es = "reactSchedulerCanvasHeaderWrapper", no = "reactSchedulerCanvasWrapper", je = Dt, _s = 4, On = 48, Ke = 5, Ts = 40, sr = 8, Yn = Ze / 2 + 2, ro = Ct / 2 + Ze + 1, ir = 2, Ee = 60, Re = 21, oo = 58, so = "reactSchedulerBody";
var st = {}, As = {
  get exports() {
    return st;
  },
  set exports(e) {
    st = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", u = "week", f = "month", y = "quarter", M = "year", v = "date", S = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, F = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var E = ["th", "st", "nd", "rd"], A = D % 100;
      return "[" + D + (E[(A - 20) % 10] || E[A] || E[0]) + "]";
    } }, P = function(D, E, A) {
      var N = String(D);
      return !N || N.length >= E ? D : "" + Array(E + 1 - N.length).join(A) + D;
    }, I = { s: P, z: function(D) {
      var E = -D.utcOffset(), A = Math.abs(E), N = Math.floor(A / 60), O = A % 60;
      return (E <= 0 ? "+" : "-") + P(N, 2, "0") + ":" + P(O, 2, "0");
    }, m: function D(E, A) {
      if (E.date() < A.date())
        return -D(A, E);
      var N = 12 * (A.year() - E.year()) + (A.month() - E.month()), O = E.clone().add(N, f), X = A - O < 0, Q = E.clone().add(N + (X ? -1 : 1), f);
      return +(-(N + (A - O) / (X ? O - Q : Q - O)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: f, y: M, w: u, d: a, D: v, h: l, m: c, s: i, ms: s, Q: y }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, d = "en", h = {};
    h[d] = F;
    var b = function(D) {
      return D instanceof J;
    }, k = function D(E, A, N) {
      var O;
      if (!E)
        return d;
      if (typeof E == "string") {
        var X = E.toLowerCase();
        h[X] && (O = X), A && (h[X] = A, O = X);
        var Q = E.split("-");
        if (!O && Q.length > 1)
          return D(Q[0]);
      } else {
        var ie = E.name;
        h[ie] = E, O = ie;
      }
      return !N && O && (d = O), O || !N && d;
    }, T = function(D, E) {
      if (b(D))
        return D.clone();
      var A = typeof E == "object" ? E : {};
      return A.date = D, A.args = arguments, new J(A);
    }, R = I;
    R.l = k, R.i = b, R.w = function(D, E) {
      return T(D, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var J = function() {
      function D(A) {
        this.$L = k(A.locale, null, !0), this.parse(A);
      }
      var E = D.prototype;
      return E.parse = function(A) {
        this.$d = function(N) {
          var O = N.date, X = N.utc;
          if (O === null)
            return new Date(NaN);
          if (R.u(O))
            return new Date();
          if (O instanceof Date)
            return new Date(O);
          if (typeof O == "string" && !/Z$/i.test(O)) {
            var Q = O.match(m);
            if (Q) {
              var ie = Q[2] - 1 || 0, ce = (Q[7] || "0").substring(0, 3);
              return X ? new Date(Date.UTC(Q[1], ie, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, ce)) : new Date(Q[1], ie, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, ce);
            }
          }
          return new Date(O);
        }(A), this.$x = A.x || {}, this.init();
      }, E.init = function() {
        var A = this.$d;
        this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
      }, E.$utils = function() {
        return R;
      }, E.isValid = function() {
        return this.$d.toString() !== S;
      }, E.isSame = function(A, N) {
        var O = T(A);
        return this.startOf(N) <= O && O <= this.endOf(N);
      }, E.isAfter = function(A, N) {
        return T(A) < this.startOf(N);
      }, E.isBefore = function(A, N) {
        return this.endOf(N) < T(A);
      }, E.$g = function(A, N, O) {
        return R.u(A) ? this[N] : this.set(O, A);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function(A, N) {
        var O = this, X = !!R.u(N) || N, Q = R.p(A), ie = function(w, Z) {
          var V = R.w(O.$u ? Date.UTC(O.$y, Z, w) : new Date(O.$y, Z, w), O);
          return X ? V : V.endOf(a);
        }, ce = function(w, Z) {
          return R.w(O.toDate()[w].apply(O.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), O);
        }, L = this.$W, B = this.$M, K = this.$D, ne = "set" + (this.$u ? "UTC" : "");
        switch (Q) {
          case M:
            return X ? ie(1, 0) : ie(31, 11);
          case f:
            return X ? ie(1, B) : ie(0, B + 1);
          case u:
            var C = this.$locale().weekStart || 0, H = (L < C ? L + 7 : L) - C;
            return ie(X ? K - H : K + (6 - H), B);
          case a:
          case v:
            return ce(ne + "Hours", 0);
          case l:
            return ce(ne + "Minutes", 1);
          case c:
            return ce(ne + "Seconds", 2);
          case i:
            return ce(ne + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, E.endOf = function(A) {
        return this.startOf(A, !1);
      }, E.$set = function(A, N) {
        var O, X = R.p(A), Q = "set" + (this.$u ? "UTC" : ""), ie = (O = {}, O[a] = Q + "Date", O[v] = Q + "Date", O[f] = Q + "Month", O[M] = Q + "FullYear", O[l] = Q + "Hours", O[c] = Q + "Minutes", O[i] = Q + "Seconds", O[s] = Q + "Milliseconds", O)[X], ce = X === a ? this.$D + (N - this.$W) : N;
        if (X === f || X === M) {
          var L = this.clone().set(v, 1);
          L.$d[ie](ce), L.init(), this.$d = L.set(v, Math.min(this.$D, L.daysInMonth())).$d;
        } else
          ie && this.$d[ie](ce);
        return this.init(), this;
      }, E.set = function(A, N) {
        return this.clone().$set(A, N);
      }, E.get = function(A) {
        return this[R.p(A)]();
      }, E.add = function(A, N) {
        var O, X = this;
        A = Number(A);
        var Q = R.p(N), ie = function(B) {
          var K = T(X);
          return R.w(K.date(K.date() + Math.round(B * A)), X);
        };
        if (Q === f)
          return this.set(f, this.$M + A);
        if (Q === M)
          return this.set(M, this.$y + A);
        if (Q === a)
          return ie(1);
        if (Q === u)
          return ie(7);
        var ce = (O = {}, O[c] = n, O[l] = o, O[i] = t, O)[Q] || 1, L = this.$d.getTime() + A * ce;
        return R.w(L, this);
      }, E.subtract = function(A, N) {
        return this.add(-1 * A, N);
      }, E.format = function(A) {
        var N = this, O = this.$locale();
        if (!this.isValid())
          return O.invalidDate || S;
        var X = A || "YYYY-MM-DDTHH:mm:ssZ", Q = R.z(this), ie = this.$H, ce = this.$m, L = this.$M, B = O.weekdays, K = O.months, ne = function(Z, V, z, g) {
          return Z && (Z[V] || Z(N, X)) || z[V].slice(0, g);
        }, C = function(Z) {
          return R.s(ie % 12 || 12, Z, "0");
        }, H = O.meridiem || function(Z, V, z) {
          var g = Z < 12 ? "AM" : "PM";
          return z ? g.toLowerCase() : g;
        }, w = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: L + 1, MM: R.s(L + 1, 2, "0"), MMM: ne(O.monthsShort, L, K, 3), MMMM: ne(K, L), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: ne(O.weekdaysMin, this.$W, B, 2), ddd: ne(O.weekdaysShort, this.$W, B, 3), dddd: B[this.$W], H: String(ie), HH: R.s(ie, 2, "0"), h: C(1), hh: C(2), a: H(ie, ce, !0), A: H(ie, ce, !1), m: String(ce), mm: R.s(ce, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: Q };
        return X.replace(Y, function(Z, V) {
          return V || w[Z] || Q.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function(A, N, O) {
        var X, Q = R.p(N), ie = T(A), ce = (ie.utcOffset() - this.utcOffset()) * n, L = this - ie, B = R.m(this, ie);
        return B = (X = {}, X[M] = B / 12, X[f] = B, X[y] = B / 3, X[u] = (L - ce) / 6048e5, X[a] = (L - ce) / 864e5, X[l] = L / o, X[c] = L / n, X[i] = L / t, X)[Q] || L, O ? B : R.a(B);
      }, E.daysInMonth = function() {
        return this.endOf(f).$D;
      }, E.$locale = function() {
        return h[this.$L];
      }, E.locale = function(A, N) {
        if (!A)
          return this.$L;
        var O = this.clone(), X = k(A, N, !0);
        return X && (O.$L = X), O;
      }, E.clone = function() {
        return R.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), q = J.prototype;
    return T.prototype = q, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", f], ["$y", M], ["$D", v]].forEach(function(D) {
      q[D[1]] = function(E) {
        return this.$g(E, D[0], D[1]);
      };
    }), T.extend = function(D, E) {
      return D.$i || (D(E, J, T), D.$i = !0), T;
    }, T.locale = k, T.isDayjs = b, T.unix = function(D) {
      return T(1e3 * D);
    }, T.en = h[d], T.Ls = h, T.p = {}, T;
  });
})(As);
const _ = st, ar = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Rn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, io = (e, r) => _(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), ao = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Rn(e),
  isCurrentDay: e.isSame(_(), "day"),
  year: parseInt(e.format("YYYY"))
});
let Lt = null;
const Ps = (e) => {
  if (Lt)
    return Lt;
  const r = document.createElement("canvas");
  r.width = 12, r.height = 12;
  const t = r.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Lt = e.createPattern(r, "repeat"), Lt) : null;
}, Ln = (e, r, t, n, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ge), c && !s) {
    const l = Ps(e);
    l && (e.fillStyle = l, e.fillRect(r, t, n, ge));
  }
  e.strokeRect(r + 0.5, t + 0.5, n, ge);
}, Nn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Re;
}, Is = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Nn(i, s);
    for (let l = 0; l <= t; l++) {
      const a = _(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), u = a.isSame(_(), "day"), f = a.isBefore(_(), "day");
      Ln(
        e,
        l * De,
        i * ge + c,
        De,
        Rn(a),
        u,
        o,
        f
      );
    }
  }
}, Os = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Ys = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Le;
  const l = r * ge + s.length * Re;
  for (let a = 0; a <= t; a++) {
    const f = _(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(_(), "week");
    for (let y = 0; y < r; y++) {
      const M = Nn(y, s);
      Ln(e, i, y * ge + M, xt, !0, f, o);
    }
    i += xt;
  }
  for (let a = 0; a < t; a++) {
    const u = io(n, a) * Le;
    Os(e, c, l, o), c += u;
  }
}, Rs = (e, r, t, n, o, s = []) => {
  const i = _(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const l = Nn(c, s);
    for (let a = 0; a <= t; a++) {
      let u;
      a === Math.floor(t / 2) ? u = _() : a > Math.floor(t / 2) ? u = _().add(a - Math.floor(t / 2), "hours") : u = _().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(_(), "day") && u.isSame(_(), "hour");
      Ln(
        e,
        a * Pe + Pe / 2 - 0.5,
        c * ge + l,
        Pe,
        Rn(u),
        f,
        o
      );
    }
  }
}, Ls = (e, r, t, n, o = !1) => {
  const s = t * ge + r * Re, i = e.canvas.width;
  e.fillStyle = o ? n.colors.subcontractBorder + "40" : n.mode === "dark" ? n.colors.primary + "80" : n.colors.primary, e.fillRect(0, s, i, Re);
}, Ns = (e, r, t, n, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(no)) {
    switch (r) {
      case 0:
        Ys(e, t, n, o, s, i);
        break;
      case 1:
        Is(e, t, n, o, s, i);
        break;
      case 2:
        Rs(e, t, n, o, s, i);
        break;
    }
    for (let a = 0; a < i.length; a++)
      Ls(e, a, i[a], s, i[a] === c);
  }
};
var fn = {}, Bs = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var u = i(this).startOf(n).add(1, n).date(a), f = i(this).endOf(t);
          if (u.isBefore(f))
            return 1;
        }
        var y = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), M = this.diff(y, t, !0);
        return M < 0 ? i(this).startOf("week").week() : Math.ceil(M);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Bs);
const Hs = fn;
var hn = {}, zs = {
  get exports() {
    return hn;
  },
  set exports(e) {
    hn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(zs);
const Fs = hn;
var pn = {}, Ws = {
  get exports() {
    return pn;
  },
  set exports(e) {
    pn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
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
        var u, f, y, M, v = i(this), S = (u = this.isoWeekYear(), f = this.$u, y = (f ? s.utc : s)().year(u).startOf("year"), M = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (M += 7), y.add(M, t));
        return v.diff(S, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, u) {
        var f = this.$utils(), y = !!f.u(u) || u;
        return f.p(a) === "isoweek" ? y ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, u);
      };
    };
  });
})(Ws);
const js = pn;
var mn = {}, Zs = {
  get exports() {
    return mn;
  },
  set exports(e) {
    mn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), u = o(i), f = (l = l || "()")[0] === "(", y = l[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(u, c) : !this.isAfter(u, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(u, c) : !this.isBefore(u, c));
      };
    };
  });
})(Zs);
const Vs = mn;
var gn = {}, Gs = {
  get exports() {
    return gn;
  },
  set exports(e) {
    gn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, u = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: u, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, M = function(d) {
      return d instanceof I;
    }, v = function(d, h, b) {
      return new I(d, b, h.$l);
    }, S = function(d) {
      return n.p(d) + "s";
    }, m = function(d) {
      return d < 0;
    }, Y = function(d) {
      return m(d) ? Math.ceil(d) : Math.floor(d);
    }, F = function(d) {
      return Math.abs(d);
    }, P = function(d, h) {
      return d ? m(d) ? { negative: !0, format: "" + F(d) + h } : { negative: !1, format: "" + d + h } : { negative: !1, format: "" };
    }, I = function() {
      function d(b, k, T) {
        var R = this;
        if (this.$d = {}, this.$l = T, b === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), k)
          return v(b * y[S(k)], this);
        if (typeof b == "number")
          return this.$ms = b, this.parseFromMilliseconds(), this;
        if (typeof b == "object")
          return Object.keys(b).forEach(function(D) {
            R.$d[S(D)] = b[D];
          }), this.calMilliseconds(), this;
        if (typeof b == "string") {
          var J = b.match(f);
          if (J) {
            var q = J.slice(2).map(function(D) {
              return D != null ? Number(D) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var h = d.prototype;
      return h.calMilliseconds = function() {
        var b = this;
        this.$ms = Object.keys(this.$d).reduce(function(k, T) {
          return k + (b.$d[T] || 0) * y[T];
        }, 0);
      }, h.parseFromMilliseconds = function() {
        var b = this.$ms;
        this.$d.years = Y(b / a), b %= a, this.$d.months = Y(b / u), b %= u, this.$d.days = Y(b / c), b %= c, this.$d.hours = Y(b / i), b %= i, this.$d.minutes = Y(b / s), b %= s, this.$d.seconds = Y(b / o), b %= o, this.$d.milliseconds = b;
      }, h.toISOString = function() {
        var b = P(this.$d.years, "Y"), k = P(this.$d.months, "M"), T = +this.$d.days || 0;
        this.$d.weeks && (T += 7 * this.$d.weeks);
        var R = P(T, "D"), J = P(this.$d.hours, "H"), q = P(this.$d.minutes, "M"), D = this.$d.seconds || 0;
        this.$d.milliseconds && (D += this.$d.milliseconds / 1e3);
        var E = P(D, "S"), A = b.negative || k.negative || R.negative || J.negative || q.negative || E.negative, N = J.format || q.format || E.format ? "T" : "", O = (A ? "-" : "") + "P" + b.format + k.format + R.format + N + J.format + q.format + E.format;
        return O === "P" || O === "-P" ? "P0D" : O;
      }, h.toJSON = function() {
        return this.toISOString();
      }, h.format = function(b) {
        var k = b || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return k.replace(l, function(R, J) {
          return J || String(T[R]);
        });
      }, h.as = function(b) {
        return this.$ms / y[S(b)];
      }, h.get = function(b) {
        var k = this.$ms, T = S(b);
        return T === "milliseconds" ? k %= 1e3 : k = T === "weeks" ? Y(k / y[T]) : this.$d[T], k === 0 ? 0 : k;
      }, h.add = function(b, k, T) {
        var R;
        return R = k ? b * y[S(k)] : M(b) ? b.$ms : v(b, this).$ms, v(this.$ms + R * (T ? -1 : 1), this);
      }, h.subtract = function(b, k) {
        return this.add(b, k, !0);
      }, h.locale = function(b) {
        var k = this.clone();
        return k.$l = b, k;
      }, h.clone = function() {
        return v(this.$ms, this);
      }, h.humanize = function(b) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!b);
      }, h.milliseconds = function() {
        return this.get("milliseconds");
      }, h.asMilliseconds = function() {
        return this.as("milliseconds");
      }, h.seconds = function() {
        return this.get("seconds");
      }, h.asSeconds = function() {
        return this.as("seconds");
      }, h.minutes = function() {
        return this.get("minutes");
      }, h.asMinutes = function() {
        return this.as("minutes");
      }, h.hours = function() {
        return this.get("hours");
      }, h.asHours = function() {
        return this.as("hours");
      }, h.days = function() {
        return this.get("days");
      }, h.asDays = function() {
        return this.as("days");
      }, h.weeks = function() {
        return this.get("weeks");
      }, h.asWeeks = function() {
        return this.as("weeks");
      }, h.months = function() {
        return this.get("months");
      }, h.asMonths = function() {
        return this.as("months");
      }, h.years = function() {
        return this.get("years");
      }, h.asYears = function() {
        return this.as("years");
      }, d;
    }();
    return function(d, h, b) {
      t = b, n = b().$utils(), b.duration = function(R, J) {
        var q = b.locale();
        return v(R, { $l: q }, J);
      }, b.isDuration = M;
      var k = h.prototype.add, T = h.prototype.subtract;
      h.prototype.add = function(R, J) {
        return M(R) && (R = R.asMilliseconds()), k.bind(this)(R, J);
      }, h.prototype.subtract = function(R, J) {
        return M(R) && (R = R.asMilliseconds()), T.bind(this)(R, J);
      };
    };
  });
})(Gs);
const Xs = gn;
var Us = "Expected a function", cr = 0 / 0, Ks = "[object Symbol]", Js = /^\s+|\s+$/g, qs = /^[-+]0x[0-9a-f]+$/i, Qs = /^0b[01]+$/i, ei = /^0o[0-7]+$/i, ti = parseInt, ni = typeof Ae == "object" && Ae && Ae.Object === Object && Ae, ri = typeof self == "object" && self && self.Object === Object && self, oi = ni || ri || Function("return this")(), si = Object.prototype, ii = si.toString, ai = Math.max, ci = Math.min, qt = function() {
  return oi.Date.now();
};
function li(e, r, t) {
  var n, o, s, i, c, l, a = 0, u = !1, f = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(Us);
  r = lr(r) || 0, yn(t) && (u = !!t.leading, f = "maxWait" in t, s = f ? ai(lr(t.maxWait) || 0, r) : s, y = "trailing" in t ? !!t.trailing : y);
  function M(h) {
    var b = n, k = o;
    return n = o = void 0, a = h, i = e.apply(k, b), i;
  }
  function v(h) {
    return a = h, c = setTimeout(Y, r), u ? M(h) : i;
  }
  function S(h) {
    var b = h - l, k = h - a, T = r - b;
    return f ? ci(T, s - k) : T;
  }
  function m(h) {
    var b = h - l, k = h - a;
    return l === void 0 || b >= r || b < 0 || f && k >= s;
  }
  function Y() {
    var h = qt();
    if (m(h))
      return F(h);
    c = setTimeout(Y, S(h));
  }
  function F(h) {
    return c = void 0, y && n ? M(h) : (n = o = void 0, i);
  }
  function P() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function I() {
    return c === void 0 ? i : F(qt());
  }
  function d() {
    var h = qt(), b = m(h);
    if (n = arguments, o = this, l = h, b) {
      if (c === void 0)
        return v(l);
      if (f)
        return c = setTimeout(Y, r), M(l);
    }
    return c === void 0 && (c = setTimeout(Y, r)), i;
  }
  return d.cancel = P, d.flush = I, d;
}
function yn(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function di(e) {
  return !!e && typeof e == "object";
}
function ui(e) {
  return typeof e == "symbol" || di(e) && ii.call(e) == Ks;
}
function lr(e) {
  if (typeof e == "number")
    return e;
  if (ui(e))
    return cr;
  if (yn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = yn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Js, "");
  var t = Qs.test(e);
  return t || ei.test(e) ? ti(e.slice(2), t ? 2 : 8) : qs.test(e) ? cr : +e;
}
var vn = li;
const Ht = [0, 1, 2];
var At = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(At || {});
const co = (e) => Ht.includes(e), ft = (e) => {
  var n;
  const t = (((n = document.getElementById(je)) == null ? void 0 : n.clientWidth) || 0) - Ye;
  switch (e) {
    case 1:
      return Math.ceil(t / De) * pt;
    case 2:
      return Math.ceil(t / Pe) * pt;
    default:
      return Math.ceil(t / xt) * pt;
  }
}, fi = (e) => ft(e) / pt, Ut = (e, r) => {
  const t = ft(r) / 2;
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
}, hi = (e, r) => {
  const t = Ut(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Bn = () => {
  var t;
  return ((((t = document.getElementById(je)) == null ? void 0 : t.clientWidth) || 0) - Ye) * pt;
}, lo = Hr({
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
  setZoom: () => {
  },
  toggleDisplayActiveUnits: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: _(),
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
_.extend(Hs);
_.extend(Fs);
_.extend(js);
_.extend(Vs);
_.extend(Xs);
const pi = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = _(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c,
  toolbarActions: l
}) => {
  const { zoom: a, maxRecordsPerPage: u = 50 } = n, [f, y] = pe(a), [M, v] = pe(_()), [S, m] = pe(!1), [Y, F] = pe(ft(f)), P = Ht[f] !== Ht[Ht.length - 1], I = f !== 0, d = $e(() => hi(M, f), [M, f]), h = Ut(M, f).startDate, b = _(h).dayOfYear(), k = ao(h), T = fe(null), R = fe(!1), J = fe(null), [q, D] = pe([{ x: 0, y: 0 }]), E = de(
    (w, Z = "auto") => {
      var z, g, G, $;
      const V = Bn();
      switch (w) {
        case "back":
          return (z = T.current) == null ? void 0 : z.scrollTo({
            behavior: Z,
            left: V / 3
          });
        case "forward":
          return (g = T.current) == null ? void 0 : g.scrollTo({
            behavior: Z,
            left: V / 3
          });
        case "middle": {
          const W = V / pt / 4;
          return (G = T.current) == null ? void 0 : G.scrollTo({
            behavior: Z,
            left: V / 2 - W
          });
        }
        default:
          return ($ = T.current) == null ? void 0 : $.scrollTo({
            behavior: Z,
            left: V / 2
          });
      }
    },
    []
  ), A = (w) => {
    D(w);
  }, N = de(
    (w) => {
      const Z = fi(f);
      let V;
      switch (f) {
        case 0:
          V = Z * 7;
          break;
        case 1:
          V = Z;
          break;
        case 2:
          V = Math.ceil(Z / jt);
          break;
      }
      vn(() => {
        switch ((w === "forward" || w === "back") && (R.current = !0), J.current = w, w) {
          case "back":
            v((g) => g.subtract(V, "days"));
            break;
          case "forward":
            v((g) => g.add(V, "days"));
            break;
          case "middle":
            v(_());
            break;
        }
        s == null || s(d);
      }, 300)();
    },
    [s, d, f]
  );
  ye(() => {
    J.current && (E(J.current), J.current = null);
  }, [M, E]), ye(() => {
    T.current = document.getElementById(je), F(ft(f));
  }, [f]), ye(() => {
    const w = () => F(ft(f));
    return window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, [f]), ye(() => {
    s == null || s(d);
  }, [s, d]), ye(() => {
    m(!1);
  }, [o]), ye(() => {
    S || (E("middle"), m(!0), v(o));
  }, [o, S, E]);
  const O = () => {
    t || (v(
      (w) => f === 2 ? w.add(rr, "hours") : w.add(ir, "weeks")
    ), s == null || s(d));
  }, X = de(() => {
    t || N("forward");
  }, [t, N]), Q = () => {
    t || (v(
      (w) => f === 2 ? w.subtract(rr, "hours") : w.subtract(ir, "weeks")
    ), s == null || s(d));
  }, ie = de(() => {
    !S || t || N("back");
  }, [S, t, N]), ce = de(() => {
    t || (J.current = "middle", v(_()), s == null || s(d));
  }, [t, s, d]), L = de(
    (w) => {
      if (t)
        return;
      const Z = _(w).startOf("day");
      Z.isValid() && (J.current = "middle", v(Z), s == null || s(d));
    },
    [t, s, d]
  ), B = () => ne(f + 1), K = () => ne(f - 1), ne = (w) => {
    co(w) && (y(w), F(ft(w)), s == null || s(d));
  }, C = () => i == null ? void 0 : i(), { Provider: H } = lo;
  return /* @__PURE__ */ p(
    H,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: O,
        handleScrollNext: X,
        handleGoPrev: Q,
        handleScrollPrev: ie,
        handleGoToday: ce,
        goToDate: L,
        zoomIn: B,
        zoomOut: K,
        setZoom: ne,
        zoom: f,
        isNextZoom: P,
        isPrevZoom: I,
        date: M,
        isLoading: t,
        cols: Y,
        startDate: k,
        dayOfYear: b,
        toggleDisplayActiveUnits: C,
        tilesCoords: q,
        updateTilesCoords: A,
        recordsThreshold: u,
        onClearFilterData: c,
        suppressNextSlideRef: R,
        toolbarActions: l
      },
      children: r
    }
  );
}, Ve = () => qe(lo), uo = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, fo = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ge + n * Re;
    if (e >= s + Re)
      n++;
    else if (e >= s)
      return o * ge + n * Re - n * Re;
  }
  return t - n * Re;
}, mi = 5, dr = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > mi;
}, ht = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, gi = ({
  data: e,
  baseData: r,
  zoom: t,
  startDate: n,
  onEventDrop: o,
  onEventDrag: s,
  draggableConfig: i = {},
  gridRef: c,
  separatorRowIndices: l = []
}) => {
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((H) => ({ ...H, data: [H.data] })) : r : e, {
    enabled: u = !0,
    isDraggable: f,
    resourceOnly: y = !1,
    isValidDrop: M
  } = i, [v, S] = pe("idle"), [m, Y] = pe(null), [F, P] = pe({ x: 0, y: 0 }), [I, d] = pe({ width: 0, height: 48 }), [h, b] = pe(null), [k, T] = pe(!0), R = fe({ x: 0, y: 0 }), J = fe({ x: 0, y: 0 }), q = fe({ x: 0, y: 0 }), D = fe(null), E = fe(null), A = fe(0), N = fe(null), O = de(
    (H) => !u || H.draggable === !1 ? !1 : f ? f(H) : !0,
    [u, f]
  ), X = de(
    (H, w) => {
      const Z = fo(w, l), V = Math.floor(Z / ge);
      let z;
      switch (t) {
        case 0:
          z = Le * 7;
          break;
        case 1:
          z = De;
          break;
        case 2:
          z = Pe;
          break;
        default:
          z = De;
      }
      const g = Math.floor(H / z);
      let G;
      const $ = _().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          G = $.add(g * 7, "days").toDate();
          break;
        case 1:
          G = $.add(g, "days").toDate();
          break;
        case 2:
          G = $.add(g, "hours").toDate();
          break;
        default:
          G = $.toDate();
      }
      return { snappedDate: G, snappedResourceIndex: V };
    },
    [t, n, l]
  ), Q = de(
    (H, w, Z, V) => {
      const z = [], g = w.getTime(), G = Z.getTime(), $ = a.find((re) => re.id === V);
      if (!$)
        return z;
      const W = [];
      for (const re of $.data)
        Array.isArray(re) ? W.push(...re) : W.push(re);
      for (const re of W) {
        if (re.segmentId === H.segmentId)
          continue;
        const U = re.startDate.getTime(), le = re.endDate.getTime();
        if (g >= U && g < le || G > U && G <= le || g <= U && G >= le) {
          const ue = new Date(Math.max(g, U)), ve = new Date(Math.min(G, le)), ke = ve.getTime() - ue.getTime();
          z.push({
            event: re,
            conflictStart: ue,
            conflictEnd: ve,
            overlapDuration: ke
          });
        }
      }
      return z;
    },
    [a]
  ), ie = de(
    (H, w, Z, V) => {
      const z = [], g = w.getTime(), G = Z.getTime(), $ = _(w).format("YYYY-MM-DD"), W = a.find((U) => U.id === V);
      if (!W)
        return z;
      const re = [];
      for (const U of W.data)
        Array.isArray(U) ? re.push(...U) : re.push(U);
      for (const U of re) {
        if (U.segmentId === H.segmentId)
          continue;
        const le = U.startDate.getTime(), he = U.endDate.getTime(), ue = _(U.startDate).format("YYYY-MM-DD"), ve = _(U.endDate).format("YYYY-MM-DD"), ke = _(Z).format("YYYY-MM-DD");
        if (!(ue === $ || ve === $ || ue === ke || ve === ke || _(U.startDate).isBefore(w, "day") && _(U.endDate).isAfter(Z, "day")) || g >= le && g < he || G > le && G <= he || g <= le && G >= he)
          continue;
        let ee, te;
        he <= g ? (ee = g - he, te = "before") : (ee = le - G, te = "after"), z.push({
          event: U,
          timeGap: ee,
          position: te
        });
      }
      return z.sort((U, le) => U.timeGap - le.timeGap);
    },
    [a]
  ), ce = de(
    (H, w, Z) => {
      const V = X(w, Z);
      let z, g;
      if (y)
        z = H.startDate, g = H.endDate;
      else {
        const he = _(H.endDate).diff(H.startDate);
        z = V.snappedDate, g = _(z).add(he, "milliseconds").toDate();
      }
      let G = 0, $ = "", W;
      for (const he of e) {
        const ue = Math.max(he.data.length, 1);
        if (V.snappedResourceIndex < G + ue) {
          $ = he.id, W = he.capacity;
          break;
        }
        G += ue;
      }
      if (!$)
        return null;
      let re = !0;
      W !== void 0 && H.totalPassengers !== void 0 && (re = H.totalPassengers <= W);
      const U = Q(H, z, g, $), le = U.length === 0 ? ie(H, z, g, $) : [];
      return {
        startDate: z,
        endDate: g,
        resourceId: $,
        resourceIndex: V.snappedResourceIndex,
        resourceCapacity: W,
        hasCapacity: re,
        conflicts: U,
        hasConflict: U.length > 0,
        nearbyEvents: le
      };
    },
    [X, e, y, Q, ie]
  ), L = de(
    (H, w) => {
      if (!s)
        return;
      const Z = Date.now();
      if (Z - A.current < 100)
        return;
      A.current = Z;
      const V = {
        event: H,
        currentStartDate: w.startDate,
        currentEndDate: w.endDate,
        currentResourceId: w.resourceId,
        conflicts: w.conflicts
      };
      s(V);
    },
    [s]
  ), B = de(
    (H, w) => {
      if (!O(H) || !c.current)
        return;
      w.preventDefault(), w.stopPropagation();
      const Z = w.target.closest('[style*="left"]');
      let V = 0, z = 0;
      Z && Z.style.left && Z.style.top && (V = parseInt(Z.style.left), z = parseInt(Z.style.top));
      const g = ht(
        w.clientX,
        w.clientY,
        c.current
      );
      R.current = { x: V, y: z }, J.current = { x: w.clientX, y: w.clientY }, q.current = {
        x: g.x - V,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, N.current = {
        startDate: H.startDate,
        endDate: H.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const W of e) {
        for (const re of W.data)
          if (re.some((U) => U.segmentId === H.segmentId)) {
            N.current.resourceId = W.id;
            break;
          }
        if (N.current.resourceId)
          break;
      }
      Y(H), S("potential"), P({ x: V, y: z });
      let G = 100, $ = 48;
      if (Z) {
        const W = Z.getBoundingClientRect();
        G = W.width, $ = W.height;
      }
      d({ width: G, height: $ });
    },
    [O, c, e, t]
  ), K = de(
    (H) => {
      if (!c.current)
        return;
      let w = c.current;
      for (; w && w !== document.body; ) {
        const U = window.getComputedStyle(w);
        if (w.scrollHeight > w.clientHeight && (U.overflowY === "auto" || U.overflowY === "scroll" || U.overflow === "auto" || U.overflow === "scroll"))
          break;
        w = w.parentElement;
      }
      (!w || w === document.body) && (w = document.documentElement);
      const Z = w.getBoundingClientRect(), V = H.clientY, z = 50, g = 12, G = V - Z.top, $ = Z.bottom - V;
      let W = !1, re = 0;
      G < z && G > 0 ? (W = !0, re = -g * (1 - G / z)) : $ < z && $ > 0 && (W = !0, re = g * (1 - $ / z)), W ? (E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => {
        w.scrollTop += re, v === "dragging" && K(H);
      })) : E.current && (cancelAnimationFrame(E.current), E.current = null);
    },
    [c, v]
  ), ne = de(
    (H) => {
      if (v === "idle" || v === "animating" || !m || !c.current)
        return;
      const w = { x: H.clientX, y: H.clientY };
      if (v === "potential")
        if (dr(J.current, w))
          S("dragging");
        else
          return;
      K(H);
      const Z = ht(
        H.clientX,
        H.clientY,
        c.current
      );
      D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => {
        const V = {
          x: Z.x - q.current.x,
          y: Z.y - q.current.y
        };
        P(V);
        const z = ce(m, Z.x, Z.y);
        if (z && M) {
          const g = {
            event: m,
            currentStartDate: z.startDate,
            currentEndDate: z.endDate,
            currentResourceId: z.resourceId,
            conflicts: z.conflicts
          };
          z.hasConflict = !M(g);
        }
        if (b(z), z) {
          const g = z.hasCapacity !== !1;
          T(g), L(m, z);
        }
      });
    },
    [v, m, c, ce, L, M, K]
  ), C = de(
    async (H) => {
      if (v === "idle" || v === "animating")
        return;
      const w = { x: H.clientX, y: H.clientY };
      if (!dr(J.current, w) || v === "potential") {
        S("idle"), Y(null), b(null);
        return;
      }
      if (!m || !h || !N.current) {
        S("idle"), Y(null), b(null);
        return;
      }
      if (h.hasCapacity === !1) {
        T(!1), S("animating"), P(R.current), setTimeout(() => {
          S("idle"), Y(null), b(null), T(!0);
        }, 300);
        return;
      }
      const V = {
        event: m,
        originalStartDate: N.current.startDate,
        originalEndDate: N.current.endDate,
        originalResourceId: N.current.resourceId,
        newStartDate: h.startDate,
        newEndDate: h.endDate,
        newResourceId: h.resourceId,
        hasConflict: h.hasConflict,
        conflicts: h.conflicts
      };
      let z = !0;
      if (o)
        try {
          const g = o(V);
          z = g instanceof Promise ? await g : g;
        } catch {
          z = !1;
        }
      z ? (T(!0), S("idle"), Y(null), b(null)) : (T(!1), S("animating"), P(R.current), setTimeout(() => {
        S("idle"), Y(null), b(null), T(!0);
      }, 300));
    },
    [v, m, h, o, M]
  );
  return ye(() => {
    if (v === "potential" || v === "dragging") {
      const H = (Z) => ne(Z), w = (Z) => C(Z);
      return document.addEventListener("mousemove", H), document.addEventListener("mouseup", w), () => {
        document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", w);
      };
    } else
      return () => {
      };
  }, [v, ne, C]), ye(() => () => {
    D.current && (cancelAnimationFrame(D.current), D.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null);
  }, []), ye(() => {
    (v === "idle" || v === "animating") && (D.current && (cancelAnimationFrame(D.current), D.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null));
  }, [v]), ye(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (S("animating"), P(R.current), setTimeout(() => {
      S("idle"), Y(null), b(null);
    }, 300)) : (S("idle"), Y(null), b(null)));
  }, [t]), ye(() => {
    if ((v === "dragging" || v === "potential") && m) {
      let H = !1;
      for (const w of e) {
        for (const Z of w.data)
          if (Z.some((V) => V.segmentId === m.segmentId)) {
            H = !0;
            break;
          }
        if (H)
          break;
      }
      H || (v === "dragging" ? (S("animating"), P(R.current), setTimeout(() => {
        S("idle"), Y(null), b(null);
      }, 300)) : (S("idle"), Y(null), b(null)));
    }
  }, [e, v, m]), {
    dragState: v,
    draggedEvent: m,
    ghostPosition: F,
    ghostDimensions: I,
    dropTarget: h,
    isValidDrop: k,
    handleDragStart: B,
    isDraggable: O,
    draggingEventId: (m == null ? void 0 : m.segmentId) || null,
    resourceOnly: y
  };
}, yi = ({
  data: e,
  baseData: r,
  zoom: t,
  startDate: n,
  onTimeRangeSelect: o,
  onMultiTimeRangeSelect: s,
  clickToAddConfig: i = {},
  gridRef: c,
  isDragging: l,
  separatorRowIndices: a = []
}) => {
  const { enabled: u = !1, isSelectable: f } = i, y = u && !!o, M = de((g) => {
    let G = 0;
    for (const $ of a)
      $ <= g && G++;
    return g * ge + G * Re;
  }, [a]), [v, S] = pe("idle"), [m, Y] = pe(null), [F, P] = pe(null), [I, d] = pe(null), [h, b] = pe(!1), [k, T] = pe([]), [R, J] = pe(!1), q = fe(null), D = fe(null), E = fe(null), A = fe(null), N = de(() => {
    switch (t) {
      case 0:
        return Le * 7;
      case 1:
        return De;
      case 2:
        return Pe;
      default:
        return De;
    }
  }, [t]), O = de(
    (g) => {
      const G = N(), $ = Math.floor(g / G), W = _().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return W.add($ * 7, "days").toDate();
        case 1:
          return W.add($, "days").toDate();
        case 2:
          return W.add($, "hours").toDate();
        default:
          return W.toDate();
      }
    },
    [t, n, N]
  ), X = de(
    (g) => {
      const G = fo(g, a), $ = Math.floor(G / ge);
      let W = 0;
      for (const re of e) {
        const U = Math.max(re.data.length, 1);
        if ($ < W + U)
          return {
            resourceId: re.id,
            resourceIndex: $,
            resourceLabel: re.label
          };
        W += U;
      }
      return null;
    },
    [e, a]
  ), Q = de(
    (g) => {
      const G = N();
      return Math.floor(g / G) * G;
    },
    [N]
  ), ie = de(
    (g, G, $, W = []) => {
      const re = [], le = (r || e).find((ve) => ve.id === g), he = G.getTime(), ue = $.getTime();
      if (le) {
        const ve = le.data[0], ke = ve && Array.isArray(ve) ? le.data.flat() : le.data;
        for (const Ce of ke) {
          const ae = new Date(Ce.startDate).getTime(), ee = new Date(Ce.endDate).getTime();
          if (he < ee && ue > ae) {
            const te = new Date(Math.max(he, ae)), oe = new Date(Math.min(ue, ee)), me = oe.getTime() - te.getTime();
            re.push({
              event: Ce,
              conflictStart: te,
              conflictEnd: oe,
              overlapDuration: me
            });
          }
        }
      }
      for (const ve of W) {
        if (ve.resourceId !== g)
          continue;
        const ke = ve.startDate.getTime(), Ce = ve.endDate.getTime();
        if (he < Ce && ue > ke) {
          const ae = new Date(Math.max(he, ke)), ee = new Date(Math.min(ue, Ce)), te = ee.getTime() - ae.getTime(), oe = {
            segmentId: `pending-${ve.startDate.getTime()}`,
            reservationId: `pending-${ve.startDate.getTime()}`,
            startDate: ve.startDate,
            endDate: ve.endDate,
            occupancy: 0,
            title: `New Event (${ve.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          re.push({
            event: oe,
            conflictStart: ae,
            conflictEnd: ee,
            overlapDuration: te
          });
        }
      }
      return re;
    },
    [e, r]
  ), ce = de(
    (g) => {
      if (!y || l || !c.current || g.button !== 0)
        return;
      const G = g.target;
      if (G.closest("[data-segment-id]") || G.closest("[data-multi-select-ui]"))
        return;
      const $ = ht(g.clientX, g.clientY, c.current), W = X($.y);
      if (!W)
        return;
      q.current = { x: g.clientX, y: g.clientY }, D.current = W.resourceIndex;
      const re = Q($.x), U = N(), le = M(W.resourceIndex);
      Y($), P($), d({
        x: re,
        y: le,
        width: U,
        height: ge
      }), S("selecting");
    },
    [y, l, c, X, Q, N, M]
  ), L = de(
    (g) => {
      P(g);
      const G = N(), $ = Q((m == null ? void 0 : m.x) || 0), W = Q(g.x), re = M(D.current), U = Math.min($, W), le = Math.max($, W) + G;
      d({ x: U, y: re, width: le - U, height: ge });
    },
    [m, N, Q, M]
  ), B = de(() => {
    A.current && (cancelAnimationFrame(A.current), A.current = null);
  }, []), K = de(
    (g, G) => {
      const $ = document.getElementById(je);
      if (!$ || !c.current)
        return;
      const W = $.getBoundingClientRect(), re = 60, U = 12, le = g - (W.left + Ye), he = W.right - g;
      let ue = 0;
      le < re ? ue = -U * (1 - Math.max(0, le) / re) : he < re && (ue = U * (1 - Math.max(0, he) / re)), B(), ue !== 0 && (A.current = requestAnimationFrame(() => {
        $.scrollLeft += ue, L(ht(g, G, c.current)), K(g, G);
      }));
    },
    [c, L, B]
  ), ne = de(
    (g) => {
      if (v !== "selecting" || !c.current || D.current === null)
        return;
      const G = ht(g.clientX, g.clientY, c.current);
      E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => L(G)), K(g.clientX, g.clientY);
    },
    [v, c, L, K]
  ), C = de(
    (g) => {
      if (v !== "selecting")
        return;
      if (B(), !c.current || !m || !q.current) {
        S("idle"), Y(null), P(null), d(null);
        return;
      }
      const G = ht(g.clientX, g.clientY, c.current), $ = X(m.y);
      if (!$) {
        S("idle"), Y(null), P(null), d(null);
        return;
      }
      const W = Math.min(m.x, G.x), re = Math.max(m.x, G.x), U = O(W), le = O(re), he = _(le).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f($.resourceId, U, he)) {
        S("idle"), Y(null), P(null), d(null);
        return;
      }
      const ue = ie(
        $.resourceId,
        U,
        he,
        k
      ), ve = ue.length > 0, ke = {
        startDate: U,
        endDate: he,
        resourceId: $.resourceId,
        resourceLabel: $.resourceLabel,
        zoomLevel: t,
        hasConflict: ve,
        conflicts: ve ? ue : void 0
      };
      if (h)
        T((Ce) => [...Ce, ke]), J(!0);
      else if (o) {
        const Ce = o(ke), ae = (ee) => {
          ee != null && ee.continueMultiSelect && (b(!0), T([ke]), J(!0));
        };
        Ce instanceof Promise ? Ce.then(ae) : ae(Ce);
      }
      S("idle"), Y(null), P(null), d(null), q.current = null, D.current = null;
    },
    [
      v,
      c,
      m,
      X,
      O,
      f,
      o,
      t,
      h,
      ie,
      k,
      B
    ]
  ), H = de(() => {
    if (k.length > 0 && s) {
      J(!1);
      const g = s(k), G = ($) => {
        $ != null && $.continueMultiSelect ? J(!0) : (T([]), b(!1), J(!1));
      };
      g instanceof Promise ? g.then(G) : G(g);
      return;
    }
    T([]), b(!1), J(!1);
  }, [k, s]), w = de(() => {
    T([]), b(!1), J(!1);
  }, []), Z = de((g) => {
    T((G) => {
      const $ = G.filter((W, re) => re !== g);
      return $.length === 0 && (b(!1), J(!1)), $;
    });
  }, []), V = de(
    (g, G) => {
      T(($) => $.map((W, re) => {
        if (re !== g)
          return W;
        const U = { ...W, ...G }, le = $.filter((ue, ve) => ve !== g), he = ie(
          U.resourceId,
          U.startDate,
          U.endDate,
          le
        );
        return {
          ...U,
          hasConflict: he.length > 0,
          conflicts: he.length > 0 ? he : void 0
        };
      }));
    },
    [ie]
  ), z = de(
    (g) => {
      g.key === "Escape" && (v === "selecting" ? (B(), S("idle"), Y(null), P(null), d(null), q.current = null, D.current = null) : h && k.length > 0 && (T([]), b(!1), J(!1)));
    },
    [v, h, k.length, B]
  );
  return ye(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", ne), document.addEventListener("mouseup", C), document.addEventListener("keydown", z), () => {
        document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", C), document.removeEventListener("keydown", z);
      };
  }, [v, ne, C, z]), ye(() => {
    if (h && k.length > 0)
      return document.addEventListener("keydown", z), () => {
        document.removeEventListener("keydown", z);
      };
  }, [h, k.length, z]), ye(() => () => {
    E.current && (cancelAnimationFrame(E.current), E.current = null), B();
  }, [B]), ye(() => {
    l && v === "selecting" && (B(), S("idle"), Y(null), P(null), d(null), q.current = null, D.current = null);
  }, [l, v, B]), {
    selectionState: v,
    selectionStart: m,
    selectionEnd: F,
    selectionBox: I,
    handleGridMouseDown: ce,
    isEnabled: y,
    pendingSelections: k,
    confirmSelections: H,
    clearSelections: w,
    removeSelection: Z,
    updateSelection: V,
    isMultiSelectActive: h,
    hasUnconfirmedSelections: R
  };
}, vi = x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, xi = x.div`
  position: relative;
`, bi = x.canvas``;
x.canvas``;
const wi = x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, ur = x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Si = En(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: l, onDragStateChange: a, onTimeRangeSelect: u, onMultiTimeRangeSelect: f, clickToAddConfig: y, separatorRowIndices: M = [], subcontractSeparatorRow: v = -1 }, S) {
  const m = fe(!1), { handleScrollNext: Y, handleScrollPrev: F, date: P, isLoading: I, cols: d, startDate: h, suppressNextSlideRef: b } = Ve(), k = fe(null), T = fe(null), R = fe(t), J = fe(P), q = fe(null), D = fe(null), E = fe(null), A = fe(null), [N, O] = pe(!1), X = Xt(), {
    dragState: Q,
    draggedEvent: ie,
    ghostPosition: ce,
    ghostDimensions: L,
    dropTarget: B,
    isValidDrop: K,
    handleDragStart: ne,
    isDraggable: C,
    draggingEventId: H,
    resourceOnly: w
  } = gi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: h,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: l,
    gridRef: A,
    separatorRowIndices: M
  });
  ye(() => {
    const te = Q === "dragging" || Q === "potential";
    O(te), a && a(te);
  }, [Q, a]);
  const Z = fe(!1), V = fe(P), z = fe(null);
  ye(() => {
    var Oe;
    const te = V.current;
    if (V.current = P, !Z.current) {
      Z.current = !0;
      return;
    }
    if (b != null && b.current) {
      b.current = !1;
      return;
    }
    const oe = A.current;
    if (!(oe != null && oe.animate))
      return;
    const me = P.isAfter(te) ? 48 : -48;
    (Oe = z.current) == null || Oe.cancel(), oe.style.willChange = "transform";
    const Me = oe.animate(
      [
        { transform: `translateX(${me}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), _e = () => {
      oe.style.willChange = "";
    };
    Me.onfinish = _e, Me.oncancel = _e, z.current = Me;
  }, [P, b]);
  const {
    selectionState: g,
    selectionBox: G,
    handleGridMouseDown: $,
    pendingSelections: W,
    confirmSelections: re,
    clearSelections: U,
    removeSelection: le,
    updateSelection: he,
    isMultiSelectActive: ue,
    hasUnconfirmedSelections: ve
  } = yi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: h,
    onTimeRangeSelect: u,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: y,
    gridRef: A,
    isDragging: N,
    separatorRowIndices: M
  }), ke = de((te) => {
    te.preventDefault();
  }, []), Ce = de((te) => {
    te.preventDefault();
  }, []), ae = M.length * Re, ee = de(
    (te) => {
      const oe = Bn(), me = t * ge + 1 + ae;
      uo(te, oe, me), Ns(te, r, t, d, h, X, M, v);
    },
    [d, h, t, r, X, M, v, ae]
  );
  return ye(() => {
    if (!k.current)
      return;
    const te = k.current.getContext("2d");
    if (!te)
      return;
    const oe = () => ee(te);
    return window.addEventListener("resize", oe), () => window.removeEventListener("resize", oe);
  }, [ee]), ye(() => {
    var ze, Qe;
    const te = R.current, oe = J.current;
    if (R.current = t, J.current = P, te === t || !P.isSame(oe, "day") || (ze = window.matchMedia) != null && ze.call(window, "(prefers-reduced-motion: reduce)").matches)
      return;
    const me = k.current, Me = T.current;
    if (!me || !Me)
      return;
    const _e = Me.getContext("2d");
    if (!_e)
      return;
    Me.width = me.width, Me.height = me.height, Me.style.width = me.style.width, Me.style.height = me.style.height, _e.setTransform(1, 0, 0, 1, 0, 0), _e.clearRect(0, 0, Me.width, Me.height), _e.drawImage(me, 0, 0), (Qe = q.current) == null || Qe.cancel(), Me.style.opacity = "1";
    const Oe = Me.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    Oe.onfinish = () => {
      Me.style.opacity = "0";
    }, q.current = Oe;
  }, [t, P]), ye(() => {
    const te = k.current;
    if (!te)
      return;
    te.style.letterSpacing = "1px";
    const oe = te.getContext("2d");
    oe && ee(oe);
  }, [P, t, r, ee]), ye(() => {
    if (!D.current)
      return;
    const te = new IntersectionObserver(
      (oe) => {
        oe[0].isIntersecting && !m.current && (m.current = !0, Y(), setTimeout(() => {
          m.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(je) }
    );
    return te.observe(D.current), () => {
      te.disconnect();
    };
  }, [Y]), ye(() => {
    if (!E.current)
      return;
    const te = new IntersectionObserver(
      (oe) => {
        oe[0].isIntersecting && !m.current && (m.current = !0, F(), setTimeout(() => {
          m.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(je),
        rootMargin: `0px 0px 0px -${Ye}px`
      }
    );
    return te.observe(E.current), () => {
      te.disconnect();
    };
  }, [F]), /* @__PURE__ */ j(vi, { id: no, children: [
    /* @__PURE__ */ j(
      xi,
      {
        ref: (te) => {
          typeof S == "function" ? S(te) : S && (S.current = te), A.current = te;
        },
        onMouseDown: $,
        style: { cursor: u ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ p(ur, { position: "left", ref: E }),
          /* @__PURE__ */ p($n, { isLoading: I, position: "left" }),
          /* @__PURE__ */ p(
            bi,
            {
              ref: k,
              onDragStart: ke,
              onDragOver: Ce,
              style: { userSelect: Q === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ p(wi, { ref: T, "aria-hidden": !0 }),
          /* @__PURE__ */ p(xd, { zoom: r, startDate: h }),
          /* @__PURE__ */ p(
            Cl,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onDragStart: ne,
              isDraggable: C,
              draggingEventId: H,
              separatorRowIndices: M
            }
          ),
          /* @__PURE__ */ p(ur, { ref: D, position: "right" }),
          /* @__PURE__ */ p($n, { isLoading: I, position: "right" }),
          (Q === "dragging" || Q === "animating") && /* @__PURE__ */ p(
            Kl,
            {
              draggedEvent: ie,
              ghostPosition: ce,
              ghostDimensions: L,
              dropTarget: B,
              isValidDrop: K,
              dragState: Q,
              zoom: r,
              data: n,
              resourceOnly: w,
              separatorRowIndices: M
            }
          ),
          /* @__PURE__ */ p(
            ed,
            {
              selectionBox: G,
              isSelecting: g === "selecting"
            }
          ),
          ue && W.length > 0 && /* @__PURE__ */ p(
            gd,
            {
              selections: W,
              data: n,
              zoom: r,
              startDate: h,
              onRemove: le,
              onUpdate: he,
              separatorRowIndices: M
            }
          )
        ]
      }
    ),
    ue && ve && W.length > 0 && /* @__PURE__ */ p(
      ld,
      {
        selections: W,
        onConfirm: re,
        onClear: U,
        onRemove: le
      }
    )
  ] });
}), ho = (e) => {
  const r = _.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, po = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Ee);
    t += o.hours + s, n += r % Ee, n >= Ee && (t++, n -= Ee);
  }), { hours: t, minutes: n };
}, mo = (e, r) => {
  let t = sr;
  switch (r) {
    case 0:
      t = Ts;
      break;
    case 1:
      t = sr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = Ee - e.minutes;
    return i === Ee && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, Ci = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const u = _(a.startDate).isoWeek(), f = _(a.startDate).isoWeekday(), y = _(a.endDate).isoWeek(), M = _(a.endDate).isoWeekday(), { hours: v, minutes: S } = ho(a.occupancy);
    if (n === u) {
      const m = (Ke + 1 - f) * v, Y = (Ke + 1 - f) * S;
      return { hours: Math.max(0, m), minutes: Y };
    } else if (n === y) {
      const m = M > Ke ? Ke * v : M * v, Y = M > Ke ? Ke * S : M * S;
      return { hours: m, minutes: Y };
    } else if (_(r).isBetween(a.startDate, a.endDate))
      return { hours: Ke * v, minutes: Ke * S };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = po(o), { free: c, overtime: l } = mo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, Mi = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((u) => {
    const { hours: f, minutes: y } = ho(u.occupancy);
    return o <= (n ? 7 : 5) ? { hours: f, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = po(s), { free: l, overtime: a } = mo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, ki = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = _(c.startDate).hour(), a = _(c.endDate).hour(), u = r.hour(), f = _(c.endDate).minute(), y = _(c.startDate).minute();
    l < u && a > u ? t += Ee : l === u && a === u && y && f ? t += f ? f - y : Ee - y : l === u && a >= u ? t += y ? Ee - y : Ee : a === u && f && (t += f);
  });
  const n = Math.floor(t / Ee), o = t % Ee, s = n || o ? 0 : 1, i = n ? 0 : o ? Ee - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, $i = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? _(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? _(t).isBetween(i.startDate, i.endDate, "hour", "[]") : _(i.startDate).isBetween(
    _(t),
    _(t).add(6, "days"),
    "day",
    "[]"
  ) || _(t).isBetween(_(i.startDate), _(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return Mi(s, t, n, o);
    case 2:
      return ki(s, t);
    default:
      return Ci(s, t, n);
  }
}, Di = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", l;
  switch (s) {
    case 0:
      c = "weeks", l = xt;
      break;
    case 1:
      c = "days", l = De;
      break;
    case 2:
      c = "hours", l = Pe;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * l) / l : t.x / l), u = _(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / ge), y = n.findIndex((Y, F, P) => P.slice(0, F + 1).reduce((d, h) => d + h, 0) >= f), M = s === 2 ? (a + 1) * l : a * l, v = (f - 1) * ge + ge, S = $i(
    o[y],
    y,
    u,
    s,
    i
  ), m = _(e.startDate).isSame(_(e.endDate), "day");
  return {
    coords: { x: M, y: v },
    mouseCoords: t,
    resourceIndex: y,
    disposition: S,
    reservationData: {
      startTime: _(e.startDate).format("hh:mm A"),
      startDate: _(e.startDate).format("MMM D, YYYY"),
      endTime: _(e.endDate).format("hh:mm A"),
      endDate: _(e.endDate).format("MMM D, YYYY"),
      client: e.subtitle ?? "",
      eventName: e.title,
      reservationType: e.eventType,
      bookingNumber: e.bookingNumber,
      groupName: e.groupName,
      driver: e.driver,
      flightNumber: e.flightNumber,
      serviceNotes: e.serviceNotes,
      reservationNotes: e.reservationNotes,
      departureAddress: e.departureAddress,
      destinationAddress: e.destinationAddress,
      returnAddress: e.returnAddress,
      isOneDayEvent: m,
      passengers: e.totalPassengers
    }
  };
};
function Ei(e, r) {
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
function _i(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const u of e)
    !u.isSubcontract && u.capacity != null && t.add(u.capacity);
  const n = [...t].sort((u, f) => u - f);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Ei(n, o), i = [];
  let c = 0;
  for (const u of s)
    i.push({
      min: n[c],
      max: n[u - 1],
      values: n.slice(c, u)
    }), c = u;
  i.push({
    min: n[c],
    max: n[n.length - 1],
    values: n.slice(c)
  });
  const l = [], a = /* @__PURE__ */ new Map();
  return i.forEach((u, f) => {
    const y = "__auto_cat_" + f, M = u.min === u.max ? u.min + " pax" : u.min + "-" + u.max + " pax";
    l.push({ id: y, name: M, minPassengers: u.min, maxPassengers: u.max });
    for (const v of u.values)
      a.set(v, y);
  }), { categories: l, capacityToCategoryId: a };
}
const Ti = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return r.length > n ? (r.forEach((l, a) => {
    const u = {
      id: e[a].id,
      label: e[a].label,
      data: l,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      categoryId: e[a].categoryId
    };
    c >= n && (o.push(i), s += i.length, i = [], c = 0), c++, i.push(u);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((l, a) => {
    const u = {
      id: e[a + s].id,
      label: e[a + s].label,
      data: l,
      capacity: e[a + s].capacity,
      isSubcontract: e[a + s].isSubcontract,
      categoryId: e[a + s].categoryId
    };
    i.push(u), a === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((l, a) => {
    const u = {
      id: e[a].id,
      label: e[a].label,
      data: l,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      categoryId: e[a].categoryId
    };
    i.push(u);
  }), o.push(i), o);
};
var xn = {}, Ai = {
  get exports() {
    return xn;
  },
  set exports(e) {
    xn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Ai);
const Pi = xn;
var bn = {}, Ii = {
  get exports() {
    return bn;
  },
  set exports(e) {
    bn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Ii);
const Oi = bn, Yi = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = _(t.startDate).startOf("day"), l = _(t.endDate).startOf("day"), a = _(o[i].startDate).startOf("day"), u = _(o[i].endDate).startOf("day");
          if (c.isBetween(a, u, null, "[]") || l.isBetween(a, u, null, "[]") || c.isBefore(a, "minute") && l.isAfter(u, "minute") || c.isAfter(a, "minute") && l.isBefore(u, "minute")) {
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
_.extend(Pi);
_.extend(Oi);
const fr = /* @__PURE__ */ new WeakMap(), Ri = (e) => {
  const r = fr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = _(o.startDate), c = _(s.startDate), l = i.startOf("day").diff(c.startOf("day"), "day");
    return l !== 0 ? l : i.diff(c);
  }), n = Yi(t);
  return fr.set(e, n), n;
}, Li = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = Ri(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Ni = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, Bi = (e) => {
  const { recordsThreshold: r } = Ve(), [t, n] = pe(0), [o, s] = pe(0), i = fe(null);
  ye(() => {
    i.current = document.getElementById(je);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = $e(() => Li(e), [e]), a = $e(
    () => Ti(e, c, l, r),
    [e, c, r, l]
  ), u = de(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((m) => m + a[Math.max(o, 0)].length), s((m) => Math.min(m + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = de(() => {
    a[o].length && (n((m) => Math.max(m - a[o - 1].length, 0)), s((m) => Math.max(m - 1, 0)));
  }, [o, a]), y = de(() => {
    n(0), s(0);
  }, []), M = t + a[o].length, v = $e(
    () => l.slice(t, M),
    [M, l, t]
  ), S = $e(
    () => c.slice(t, M),
    [M, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: S,
    rowsPerItem: v,
    totalRowsPerPage: Ni(a[o]),
    next: u,
    previous: f,
    reset: y
  };
};
var wn = {}, Hi = {
  get exports() {
    return wn;
  },
  set exports(e) {
    wn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Hi);
const zi = wn;
var Sn = {}, Fi = {
  get exports() {
    return Sn;
  },
  set exports(e) {
    Sn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(st);
  })(Ae, function(t) {
    function n(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = n(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, M, v) {
      var S = y + " ";
      switch (v) {
        case "m":
          return M ? "minuta" : "minutę";
        case "mm":
          return S + (s(y) ? "minuty" : "minut");
        case "h":
          return M ? "godzina" : "godzinę";
        case "hh":
          return S + (s(y) ? "godziny" : "godzin");
        case "MM":
          return S + (s(y) ? "miesiące" : "miesięcy");
        case "yy":
          return S + (s(y) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, u = function(y, M) {
      return a.test(M) ? c[y.month()] : l[y.month()];
    };
    u.s = l, u.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: u, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(y) {
      return y + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Fi);
const Wi = Sn;
var Cn = {}, ji = {
  get exports() {
    return Cn;
  },
  set exports(e) {
    Cn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(st);
  })(Ae, function(t) {
    function n(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(l, a, u) {
      var f = s[u];
      return Array.isArray(f) && (f = f[a ? 0 : 1]), f.replace("%d", l);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(ji);
const Zi = Cn;
var Mn = {}, Vi = {
  get exports() {
    return Mn;
  },
  set exports(e) {
    Mn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(st);
  })(Ae, function(t) {
    function n(u) {
      return u && typeof u == "object" && "default" in u ? u : { default: u };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(u, f) {
      return c.test(f) ? s[u.month()] : i[u.month()];
    };
    l.s = i, l.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(u) {
      return u + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(Vi);
const Gi = Mn;
var kn = {}, Xi = {
  get exports() {
    return kn;
  },
  set exports(e) {
    kn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(st);
  })(Ae, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Xi);
const Ui = kn, Ki = {
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
}, Ji = {
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
}, qi = {
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
}, Qi = {
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
}, ea = {
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
}, ta = [
  {
    id: "en",
    lang: qi,
    translateCode: "en-GB",
    dayjsTranslations: zi
  },
  {
    id: "pl",
    lang: Ji,
    translateCode: "pl-PL",
    dayjsTranslations: Wi
  },
  {
    id: "es",
    lang: Ki,
    translateCode: "es-ES",
    dayjsTranslations: Ui
  },
  {
    id: "lt",
    lang: ea,
    translateCode: "lt-LT",
    dayjsTranslations: Gi
  },
  {
    id: "de",
    lang: Qi,
    translateCode: "de-DE",
    dayjsTranslations: Zi
  }
];
class na {
  constructor() {
    Hn(this, "locales", ta);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const Zt = new na(), go = Hr({
  localesData: Zt.getLocales(),
  currentLocale: Zt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ra = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = pe("en"), s = Zt.getLocales(), i = de(() => {
    const f = s.find((y) => y.id === n);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && _.locale(f.dayjsTranslations), f || s[0];
  }, [n, s]), [c, l] = pe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), l(f);
  };
  ye(() => {
    t == null || t.forEach((f) => {
      s.find((M) => M.id === f.id) || Zt.addLocales(f);
    });
  }, [s, t]), ye(() => {
    const f = localStorage.getItem("locale"), y = r ?? f ?? "en";
    localStorage.setItem("locale", y), o(y), l(i());
  }, [i, r]);
  const { Provider: u } = go;
  return /* @__PURE__ */ p(u, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ge = () => qe(go).currentLocale.lang, oa = (e) => /* @__PURE__ */ se.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ se.createElement("defs", null, /* @__PURE__ */ se.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ se.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ se.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ se.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ se.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ se.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), sa = x.div`
  height: 440px;
  width: 514px;
  position: relative;
`, ia = x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, aa = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = Ge();
  return /* @__PURE__ */ j(sa, { onClick: e, children: [
    /* @__PURE__ */ p(oa, {}),
    /* @__PURE__ */ p(ia, { children: r })
  ] });
}, ca = x.div`
  position: relative;
  display: flex;
`, la = x.div`
  position: relative;
  margin-left: ${Ye};
  display: flex;
  flex-direction: column;
  contain: paint;
`, da = x.div`
  width: calc(${({ width: e }) => e}px - ${Ye}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ye}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, ua = {
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
    reservationType: At.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function fa(e, r) {
  const t = r ? [...r].sort((c, l) => c.maxPassengers - l.maxPassengers) : [], n = [];
  for (const c of t) {
    const l = e.filter(
      (a) => !a.isSubcontract && a.categoryId === c.id
    );
    l.length > 0 && n.push({ type: "category", category: c, items: l });
  }
  const o = t.length > 0, s = e.filter(
    (c) => !c.isSubcontract && (!c.categoryId || !o)
  );
  s.length > 0 && o ? n.push({ type: "uncategorized", items: s }) : s.length > 0 && n.push({ type: "uncategorized", items: s });
  const i = e.filter((c) => c.isSubcontract);
  return i.length > 0 && n.push({ type: "subcontract", items: i }), n;
}
const ha = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  onItemClick: o,
  toggleTheme: s,
  topBarWidth: i,
  onEventDrop: c,
  onEventDrag: l,
  draggableConfig: a,
  onTimeRangeSelect: u,
  onMultiTimeRangeSelect: f,
  clickToAddConfig: y
}) => {
  const [M, v] = pe(ua), [S, m] = pe(e), [Y, F] = pe(!1), [P, I] = pe(!1), [d, h] = pe(""), [b, k] = pe(/* @__PURE__ */ new Set()), {
    zoom: T,
    startDate: R,
    isLoading: J,
    config: { includeTakenHoursOnWeekendsInDayView: q, showTooltip: D, showThemeToggle: E }
  } = Ve(), A = fe(null), N = fe(null), [O, X] = pe(124), {
    page: Q,
    projectsPerPerson: ie,
    rowsPerItem: ce,
    currentPageNum: L,
    pagesAmount: B,
    next: K,
    previous: ne,
    reset: C
  } = Bi(S), { effectiveCategories: H, effectivePage: w } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: Q };
    const ee = _i(Q);
    if (ee.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: Q };
    const te = Q.map((oe) => {
      if (oe.isSubcontract || oe.capacity == null)
        return oe;
      const me = ee.capacityToCategoryId.get(oe.capacity);
      return me ? { ...oe, categoryId: me } : oe;
    });
    return { effectiveCategories: ee.categories, effectivePage: te };
  }, [t, Q]), Z = de((ee) => {
    k((te) => {
      const oe = new Set(te);
      return oe.has(ee) ? oe.delete(ee) : oe.add(ee), oe;
    });
  }, []), V = $e(() => {
    const ee = [], te = H ? [...H].sort((oe, me) => oe.maxPassengers - me.maxPassengers) : [];
    for (const oe of te)
      w.some((me) => !me.isSubcontract && me.categoryId === oe.id) && ee.push(oe.id);
    return w.some((oe) => oe.isSubcontract) && ee.push("__subcontract__"), ee;
  }, [H, w]), z = de(() => {
    k(/* @__PURE__ */ new Set());
  }, []), g = de(() => {
    k(new Set(V));
  }, [V]), {
    visiblePage: G,
    visibleRowsPerItem: $,
    visibleTotalRows: W,
    visibleProjectsPerPerson: re,
    separatorRowIndices: U,
    subcontractSeparatorRow: le
  } = $e(() => {
    const ee = fa(w, H), te = ((H == null ? void 0 : H.length) ?? 0) > 0, oe = /* @__PURE__ */ new Map();
    Q.forEach((Ie, at) => oe.set(Ie.id, at));
    const me = [], Me = [], _e = [], Oe = [];
    let ze = 0, Qe = -1;
    for (const Ie of ee)
      if (Ie.type === "subcontract" || Ie.type === "category" && te) {
        const ct = Ie.type === "subcontract" ? "__subcontract__" : Ie.category.id, lt = b.has(ct);
        if (Oe.push(ze), Ie.type === "subcontract" && (Qe = ze), !lt)
          for (const et of Ie.items) {
            const Pt = oe.get(et.id) ?? 0, It = ce[Pt];
            me.push(et), Me.push(It), _e.push(ie[Pt]), ze += It;
          }
      } else
        for (const ct of Ie.items) {
          const lt = oe.get(ct.id) ?? 0, et = ce[lt];
          me.push(ct), Me.push(et), _e.push(ie[lt]), ze += et;
        }
    const Ue = Me.reduce((Ie, at) => Ie + at, 0);
    return {
      visiblePage: me,
      visibleRowsPerItem: Me,
      visibleTotalRows: Ue,
      visibleProjectsPerPerson: _e,
      separatorRowIndices: Oe,
      subcontractSeparatorRow: Qe
    };
  }, [w, H, Q, b, ce, ie]), he = fe(
    vn(
      (ee, te, oe, me, Me, _e) => {
        if (!A.current)
          return;
        const { tile: Oe, segmentId: ze } = ke(ee);
        if (!ze || !Oe) {
          F(!1);
          return;
        }
        const Qe = ve(ze, te), Ue = A.current.getBoundingClientRect(), Ie = Oe.getBoundingClientRect(), at = { x: ee.clientX - Ue.left, y: ee.clientY - Ue.top }, ct = {
          x: ee.clientX - Ue.left,
          y: ee.clientY - Ue.top
        }, lt = {
          x: Ie.left - Ue.left,
          y: Ie.top - Ue.top,
          width: Ie.width,
          height: Ie.height
        }, {
          coords: { x: et, y: Pt },
          resourceIndex: It,
          disposition: vo,
          reservationData: xo
        } = Di(
          Qe,
          oe,
          at,
          me,
          Me,
          _e,
          q
        );
        v({
          coords: { x: et, y: Pt },
          mouseCoords: ct,
          resourceIndex: It,
          disposition: vo,
          reservationData: xo,
          tileBounds: lt
        }), F(!0);
      },
      4
    )
  ), ue = fe(
    vn((ee, te) => {
      C(), m(
        ee.map((oe) => ({
          ...oe,
          data: oe.data.filter((me) => {
            const { title: Me, description: _e, subtitle: Oe } = me;
            return (Me == null ? void 0 : Me.toLowerCase().includes(te.toLowerCase())) || (Oe == null ? void 0 : Oe.toLowerCase().includes(te.toLowerCase())) || (_e == null ? void 0 : _e.toLowerCase().includes(te.toLowerCase()));
          })
        })).filter((oe) => oe.data.length > 0)
      );
    }, 500)
  ), ve = (ee, te) => {
    if (ee)
      return te.flatMap((oe) => oe.data).find((oe) => oe.segmentId === ee);
  }, ke = (ee) => {
    if (!ee.target)
      return { tile: null, segmentId: null };
    const te = ee.target.closest("[data-segment-id]");
    return te ? { tile: te, segmentId: te.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, Ce = (ee) => {
    const te = ee.target.value;
    h(te), ue.current.cancel(), te ? ue.current(e, te) : (C(), m(e));
  }, ae = de(() => {
    he.current.cancel(), F(!1);
  }, []);
  return ye(() => {
    const ee = (oe) => he.current(
      oe,
      e,
      R,
      $,
      re,
      T
    ), te = A.current;
    if (te)
      return te.addEventListener("mousemove", ee), te.addEventListener("mouseleave", ae), () => {
        te.removeEventListener("mousemove", ee), te.removeEventListener("mouseleave", ae);
      };
  }, [
    he,
    ae,
    re,
    $,
    R,
    T,
    e
  ]), ye(() => {
    d ? (ue.current.cancel(), ue.current(e, d)) : m(e);
  }, [e, d]), Vt(() => {
    const ee = N.current;
    if (!ee)
      return;
    const te = () => X(ee.offsetHeight);
    te();
    const oe = new ResizeObserver(te);
    return oe.observe(ee), () => oe.disconnect();
  }, []), /* @__PURE__ */ j(ca, { children: [
    /* @__PURE__ */ p(
      Ec,
      {
        headerHeight: O,
        data: w,
        categories: H,
        pageNum: L,
        pagesAmount: B,
        rows: ce,
        onLoadNext: K,
        onLoadPrevious: ne,
        searchInputValue: d,
        onSearchInputChange: Ce,
        onItemClick: o,
        collapsedGroups: b,
        onToggleGroup: Z,
        allGroupIds: V,
        onExpandAll: z,
        onCollapseAll: g
      }
    ),
    /* @__PURE__ */ j(la, { children: [
      /* @__PURE__ */ p(
        rl,
        {
          ref: N,
          zoom: T,
          topBarWidth: i,
          showThemeToggle: E,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ p(
        Si,
        {
          data: G,
          baseData: r || e,
          zoom: T,
          rows: W,
          ref: A,
          onTileClick: n,
          onEventDrop: c,
          onEventDrag: l,
          draggableConfig: a,
          onDragStateChange: I,
          onTimeRangeSelect: u,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: y,
          separatorRowIndices: U,
          subcontractSeparatorRow: le
        }
      ) : /* @__PURE__ */ p(da, { width: i, children: J ? /* @__PURE__ */ p($n, { isLoading: J, position: "left" }) : /* @__PURE__ */ p(aa, {}) }),
      D && /* @__PURE__ */ p(Nl, { tooltipData: M, visible: Y && !P })
    ] })
  ] });
}, pa = x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.primary};
`, hr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, ma = x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, ga = x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, pr = x.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #c8d5cd;
  background: #fff;
  border-radius: 8px;
  color: #3a4c46;
  cursor: pointer;
  & svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    background: ${({ theme: e }) => e.colors.hover};
  }
`, ya = x.button`
  font-size: 13px;
  font-weight: 700;
  color: #183d3d;
  border: 1px solid #c8d5cd;
  background: #fff;
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  &:hover {
    background: ${({ theme: e }) => e.colors.hover};
  }
`, va = x.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin-left: 4px;
  text-transform: capitalize;
  white-space: nowrap;
`, xa = x.div`
  display: inline-flex;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  & > button {
    font-size: 12px;
    font-weight: 650;
    color: #3a4c46;
    padding: 5px 11px;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
  & > button + button {
    border-left: 1px solid ${({ theme: e }) => e.colors.border};
  }
  & > button.on {
    background: ${({ theme: e }) => e.colors.accent};
    color: #fff;
  }
`, mr = x.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 650;
  color: ${({ $primary: e }) => e ? "#fff" : "#3a4c46"};
  border: 1px solid ${({ $primary: e }) => e ? "transparent" : "#c8d5cd"};
  background: ${({ theme: e, $primary: r }) => r ? e.colors.accent : "#fff"};
  border-radius: 8px;
  padding: 6px 11px;
  cursor: pointer;
  white-space: nowrap;
  & svg {
    width: 15px;
    height: 15px;
  }
  &:hover {
    filter: brightness(0.98);
  }
`, ba = x.label`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  position: relative;
  font-size: 12.5px;
  font-weight: 650;
  color: #3a4c46;
  border: 1px solid #c8d5cd;
  background: #fff;
  border-radius: 8px;
  padding: 6px 11px;
  cursor: pointer;
  white-space: nowrap;
  & svg {
    width: 15px;
    height: 15px;
  }
  & input {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
  }
`, wa = x.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 650;
  color: #3a4c46;
  border: 1px solid #c8d5cd;
  background: #fff;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  & svg {
    width: 14px;
    height: 14px;
  }
  & .k {
    font-family: ui-monospace, monospace;
    font-size: 11px;
    font-weight: 700;
    background: ${({ theme: e }) => e.colors.primary};
    border: 1px solid ${({ theme: e }) => e.colors.border};
    border-radius: 4px;
    padding: 0 5px;
  }
`, Sa = x.span`
  background: ${({ theme: e }) => e.colors.accent};
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  min-width: 16px;
  height: 16px;
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  margin-left: 2px;
`, dt = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ p("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), Ca = () => {
  var r, t;
  const e = document.getElementById(so);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Ma = () => {
  const {
    config: e,
    date: r,
    zoom: t,
    handleGoNext: n,
    handleGoPrev: o,
    handleGoToday: s,
    setZoom: i,
    goToDate: c,
    toggleDisplayActiveUnits: l,
    toolbarActions: a
  } = Ve();
  Ge();
  const { filterButtonState: u = -1 } = e, f = () => {
    var y;
    (y = document.querySelector(`#${je} input[placeholder]`)) == null || y.focus();
  };
  return /* @__PURE__ */ j(pa, { width: 0, children: [
    /* @__PURE__ */ j(hr, { $at: "start", children: [
      /* @__PURE__ */ j(ga, { children: [
        /* @__PURE__ */ p(pr, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ p(dt, { children: /* @__PURE__ */ p("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ p(ya, { onClick: s, children: "Hoy" }),
        /* @__PURE__ */ p(pr, { onClick: n, "aria-label": "Siguiente", children: /* @__PURE__ */ p(dt, { children: /* @__PURE__ */ p("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      /* @__PURE__ */ p(va, { children: r.locale(_.locale()).format("MMMM YYYY") }),
      /* @__PURE__ */ p(ma, {}),
      /* @__PURE__ */ j(xa, { children: [
        /* @__PURE__ */ p("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ p("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ p("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ j(ba, { children: [
        /* @__PURE__ */ j(dt, { children: [
          /* @__PURE__ */ p("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ p("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ p("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ p("input", { type: "date", onChange: (y) => y.target.value && c(y.target.value) })
      ] }),
      /* @__PURE__ */ j(wa, { onClick: f, children: [
        /* @__PURE__ */ j(dt, { children: [
          /* @__PURE__ */ p("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ p("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ p("span", { className: "k", children: "⌘K" })
      ] })
    ] }),
    /* @__PURE__ */ j(hr, { $at: "end", children: [
      e.showFilterButton !== !1 && u >= 0 && /* @__PURE__ */ j(mr, { $primary: !!u, onClick: l, children: [
        /* @__PURE__ */ p(dt, { children: /* @__PURE__ */ p("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!u && /* @__PURE__ */ p(Sa, { children: u })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ j(mr, { onClick: Ca, children: [
        /* @__PURE__ */ p(dt, { children: /* @__PURE__ */ p("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      a
    ] })
  ] });
}, ka = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), $a = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Da = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Ea = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), _a = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ta = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Aa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Pa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Ia = (e) => /* @__PURE__ */ se.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Oa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Ya = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ra = (e) => /* @__PURE__ */ se.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), La = (e) => /* @__PURE__ */ se.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Na = (e) => /* @__PURE__ */ se.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ se.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Ba = {
  add: ka,
  subtract: $a,
  filter: Da,
  arrowLeft: Ea,
  arrowRight: _a,
  defaultAvatar: Ta,
  calendarWarning: Aa,
  calendarFree: Pa,
  arrowDown: Oa,
  arrowUp: Ia,
  search: Ya,
  close: Ra,
  moon: La,
  sun: Na
}, Qt = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = Xt(), i = Ba[e];
  return i ? /* @__PURE__ */ p(
    i,
    {
      style: { transition: ".5s ease" },
      fill: n ?? s.accent,
      width: r,
      height: t,
      className: o
    }
  ) : null;
}, Ha = (e, r, t) => ({
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
})[r];
x.button`
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
  ${({ theme: e, variant: r, disabled: t }) => Ha(e, r, t)}
`;
const za = x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${oo}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ne};
`, Fa = x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Wa = x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, ja = x.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 16px;
  border-bottom: 1px solid #e0e8e3;
  & > span {
    position: absolute;
    top: 3.5px;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: #74897f;
    padding-left: 5px;
  }
`, Za = x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, Va = x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, Ga = x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({ $sev: e }) => e === 2 ? "#c6483d" : e === 1 ? "#d98a22" : "#93b1a6"};
`, Xa = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 2px;
  background: ${({ theme: e }) => e.colors.today};
  z-index: 2;
  pointer-events: none;
  & > span {
    position: absolute;
    top: -14.5px;
    left: 0;
    transform: translateX(-2px);
    font-size: 7.5px;
    font-weight: 800;
    color: #fff;
    background: ${({ theme: e }) => e.colors.today};
    padding: 0 3px;
    border-radius: 3px;
    letter-spacing: 0.03em;
  }
`, Ua = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, Ka = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, Ja = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, qa = x.div`
  position: absolute;
  top: 1px;
  transform: translateX(-50%);
  font-size: 9px;
  font-weight: 800;
  color: #fff;
  background: #0c1a17;
  padding: 1px 6px;
  border-radius: 5px;
  white-space: nowrap;
  z-index: 4;
  pointer-events: none;
`, Qa = () => {
  const { date: e, zoom: r, data: t, goToDate: n } = Ve(), o = Ge(), s = fe(null), [i, c] = pe(null), l = $e(
    () => Array.from({ length: 12 }, (d, h) => _().month(h).format("MMM").toUpperCase()),
    [o]
  ), a = e.year(), u = $e(() => _(new Date(a, 0, 1)), [a]), f = $e(
    () => _(new Date(a + 1, 0, 1)).diff(u, "day"),
    [a, u]
  ), y = (d) => d.diff(u, "day") / f * 100, M = $e(() => {
    const d = Math.ceil(f / 7), h = new Array(d).fill(0), b = new Array(d).fill(0);
    for (const T of t ?? [])
      for (const R of T.data ?? []) {
        const J = _(R.startDate);
        if (J.year() !== a)
          continue;
        const q = Math.floor(J.diff(u, "day") / 7);
        if (q < 0 || q >= d)
          continue;
        h[q] += 1;
        const D = R.readiness === "sin_chofer" ? 2 : R.readiness === "sin_avisar" ? 1 : 0;
        D > b[q] && (b[q] = D);
      }
    const k = Math.max(1, ...h);
    return h.map((T, R) => ({ h: T / k * 100, sev: b[R] }));
  }, [t, a, u, f]), v = _(), S = v.year() === a ? y(v) : null, m = (d) => {
    const { startDate: h, endDate: b } = Ut(d, r), k = Math.max(0, y(h));
    return { left: k, width: Math.min(100, y(b)) - k, startDate: h, endDate: b };
  }, Y = m(e), F = i ? m(i.d) : null, P = (d) => `${d.date()} ${l[d.month()]}`, I = (d) => {
    var k;
    const h = (k = s.current) == null ? void 0 : k.getBoundingClientRect();
    if (!h)
      return null;
    const b = Math.min(1, Math.max(0, (d - h.left) / h.width));
    return { f: b, d: u.add(Math.round(b * f), "day") };
  };
  return /* @__PURE__ */ j(za, { children: [
    /* @__PURE__ */ j(Fa, { children: [
      "Navegar",
      /* @__PURE__ */ p("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ j(
      Wa,
      {
        ref: s,
        onClick: (d) => {
          const h = I(d.clientX);
          h && n(h.d.toDate());
        },
        onMouseMove: (d) => {
          const h = I(d.clientX);
          h && c({ left: h.f * 100, d: h.d });
        },
        onMouseLeave: () => c(null),
        children: [
          /* @__PURE__ */ p(ja, { children: l.map((d, h) => /* @__PURE__ */ p("span", { style: { left: `${y(_(new Date(a, h, 1)))}%` }, children: d }, h)) }),
          l.map(
            (d, h) => h === 0 ? null : /* @__PURE__ */ p(Za, { style: { left: `${y(_(new Date(a, h, 1)))}%` } }, h)
          ),
          /* @__PURE__ */ p(Va, { children: M.map((d, h) => /* @__PURE__ */ p(Ga, { $sev: d.sev, style: { height: `${d.h}%` } }, h)) }),
          /* @__PURE__ */ p(Ua, { style: { left: `${Y.left}%`, width: `${Y.width}%` } }),
          S !== null && /* @__PURE__ */ p(Xa, { style: { left: `${S}%` }, children: /* @__PURE__ */ p("span", { children: "HOY" }) }),
          i && F && /* @__PURE__ */ j(Te, { children: [
            /* @__PURE__ */ p(Ka, { style: { left: `${F.left}%`, width: `${F.width}%` } }),
            /* @__PURE__ */ p(Ja, { style: { left: `${i.left}%` } }),
            /* @__PURE__ */ p(qa, { style: { left: `${i.left}%` }, children: `${P(F.startDate)} – ${P(F.endDate)}` })
          ] })
        ]
      }
    )
  ] });
}, ec = x.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, tc = x.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? oo : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, nc = x.div`
  position: relative;
`, rc = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  topBarWidth: o,
  onItemClick: s,
  toggleTheme: i,
  onEventDrop: c,
  onEventDrag: l,
  draggableConfig: a,
  schedulerRef: u,
  onTimeRangeSelect: f,
  onMultiTimeRangeSelect: y,
  clickToAddConfig: M
}) => {
  const { goToDate: v, handleGoToday: S, zoomIn: m, zoomOut: Y, zoom: F } = Ve();
  return zr(
    u,
    () => ({
      goToDate: v,
      goToToday: S,
      setZoom: (P) => {
        if (!co(P))
          return;
        const I = P - F;
        if (I > 0)
          for (let d = 0; d < I; d++)
            m();
        else
          for (let d = 0; d < Math.abs(I); d++)
            Y();
      }
    }),
    [v, S, F, m, Y]
  ), /* @__PURE__ */ p(
    ha,
    {
      data: e,
      baseData: r,
      categories: t,
      onTileClick: n,
      topBarWidth: o,
      onItemClick: s,
      toggleTheme: i,
      onEventDrop: c,
      onEventDrag: l,
      draggableConfig: a,
      onTimeRangeSelect: f,
      onMultiTimeRangeSelect: y,
      clickToAddConfig: M
    }
  );
}, Md = En(function({
  data: r,
  categories: t,
  baseData: n,
  config: o,
  startDate: s,
  onRangeChange: i,
  onTileClick: c,
  handleToggleDisplayActiveUnits: l,
  onClearFilterData: a,
  toolbarActions: u,
  onItemClick: f,
  isLoading: y,
  onEventDrop: M,
  onEventDrag: v,
  draggableConfig: S,
  onTimeRangeSelect: m,
  onMultiTimeRangeSelect: Y,
  clickToAddConfig: F
}, P) {
  var N;
  const I = $e(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      showTopbar: !0,
      showLegend: !0,
      translations: void 0,
      ...o
    }),
    [o]
  ), d = fe(null), h = fe(null), [b, k] = pe((N = d.current) == null ? void 0 : N.clientWidth), T = $e(() => _(s), [s]), [R, J] = pe(I.defaultTheme ?? "light"), q = () => {
    J(R === "light" ? "dark" : "light");
  }, D = R === "light" ? Cs : Ms, E = I.theme ? I.theme[D.mode] : {}, A = {
    ...D,
    colors: {
      ...D.colors,
      ...E
    }
  };
  return zr(
    P,
    () => ({
      goToDate: (O) => {
        var X;
        return (X = h.current) == null ? void 0 : X.goToDate(O);
      },
      goToToday: () => {
        var O;
        return (O = h.current) == null ? void 0 : O.goToToday();
      },
      setZoom: (O) => {
        var X;
        return (X = h.current) == null ? void 0 : X.setZoom(O);
      }
    }),
    []
  ), Vt(() => {
    const O = () => {
      d.current && k(d.current.clientWidth);
    };
    return O(), window.addEventListener("resize", O), () => window.removeEventListener("resize", O);
  }, []), /* @__PURE__ */ j(Te, { children: [
    /* @__PURE__ */ p(Ss, {}),
    /* @__PURE__ */ p(xs, { theme: A, children: /* @__PURE__ */ p(ra, { lang: I.lang, translations: I.translations, children: /* @__PURE__ */ p(
      pi,
      {
        data: r,
        isLoading: !!y,
        config: I,
        onRangeChange: i,
        defaultStartDate: T,
        handleToggleDisplayActiveUnits: l,
        onClearFilterData: a,
        toolbarActions: u,
        children: /* @__PURE__ */ j(ec, { id: so, children: [
          /* @__PURE__ */ p(
            tc,
            {
              showScroll: !!r.length,
              $footer: I.showOverview !== !1 && !!r.length,
              id: je,
              ref: d,
              children: /* @__PURE__ */ p(nc, { children: /* @__PURE__ */ p(
                rc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: b ?? 0,
                  onItemClick: f,
                  toggleTheme: q,
                  onEventDrop: M,
                  onEventDrag: v,
                  draggableConfig: S,
                  schedulerRef: h,
                  onTimeRangeSelect: m,
                  onMultiTimeRangeSelect: Y,
                  clickToAddConfig: F
                }
              ) })
            }
          ),
          I.showOverview !== !1 && !!r.length && /* @__PURE__ */ p(Qa, {})
        ] })
      }
    ) }) })
  ] });
}), oc = x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, sc = x.button`
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
`, ic = x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, ac = x.p`
  ${wt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, gr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Ge(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ p(oc, { intent: e, children: /* @__PURE__ */ j(sc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ p(ic, { children: t }),
    /* @__PURE__ */ p(ac, { children: l })
  ] }) });
}, cc = x.div`
  min-width: ${Ye + "px"};
  max-width: ${Ye + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, lc = x.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({ $height: e }) => e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ye}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, dc = x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, uc = x.input`
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
`, fc = x.div`
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
`, hc = x.button`
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
`, pc = it`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, mc = x.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ge}px;
  height: calc(${ge}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBorder + "33" : e.colors.border};
  border-left: 3px solid
    ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBorder : "transparent"};
  background-color: ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBg : "transparent"};
  /* Scope the transition to paint-only props. It was transition:0.5s ease (= transition:all), which animated the row
     height (a LAYOUT property) for 500ms on every add/remove/collapse — layout thrash that made rowIn hitch. */
  transition: background-color 0.15s ease, border-color 0.15s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${pc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, gc = x.div`
  display: flex;
  align-items: center;
`, yc = x.div`
  margin-right: 0.625rem;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: ${({ theme: e, $provider: r }) => r ? e.colors.subcontractBg : e.colors.accent + "1A"};
  color: ${({ theme: e, $provider: r }) => r ? e.colors.subcontractText : e.colors.accent};
  & svg {
    width: 17px;
    height: 17px;
  }
`, vc = x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, xc = x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, yr = x.p`
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
`, bc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), wc = () => /* @__PURE__ */ j("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ p("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ p("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ p("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ p("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ p("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Sc = () => /* @__PURE__ */ j("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ p("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ p("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Cc = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ p(
  mc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ j(gc, { children: [
      /* @__PURE__ */ p(yc, { $provider: o, children: bc(r.icon) ? /* @__PURE__ */ p(vc, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ p(Sc, {}) : /* @__PURE__ */ p(wc, {}) }),
      /* @__PURE__ */ j(xc, { children: [
        /* @__PURE__ */ p(yr, { isMain: !0, children: r.title }),
        /* @__PURE__ */ p(yr, { children: r.subtitle })
      ] })
    ] })
  }
), Mc = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  background: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder + "24" : e.colors.accent + "14"};
  border-left: 3px solid
    ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder : "transparent"};
  border-bottom: 1px solid
    ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder : e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder + "33" : e.colors.accent + "22"};
  }
`, kc = x.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, $c = x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, Dc = x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
  opacity: 0.85;
  transition: transform 0.2s ease;
  transform: rotate(${({ $collapsed: e }) => e ? "-90deg" : "0deg"});
  & svg {
    width: 11px;
    height: 11px;
  }
`, vr = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => /* @__PURE__ */ j(Mc, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ p(Dc, { $collapsed: t, children: /* @__PURE__ */ p("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ p(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ p(kc, { $variant: o, children: e }),
  /* @__PURE__ */ p($c, { $variant: o, children: r })
] }), Ec = ({
  data: e,
  categories: r,
  headerHeight: t,
  rows: n,
  onLoadNext: o,
  onLoadPrevious: s,
  pageNum: i,
  pagesAmount: c,
  searchInputValue: l,
  onSearchInputChange: a,
  onItemClick: u,
  collapsedGroups: f,
  onToggleGroup: y,
  allGroupIds: M,
  onExpandAll: v,
  onCollapseAll: S
}) => {
  const [m, Y] = pe(!1), F = Ge(), P = () => Y((D) => !D), I = r ? [...r].sort((D, E) => D.maxPassengers - E.maxPassengers) : [], d = I.length > 0, h = M.length > 0, b = h && f.size === M.length;
  h && f.size;
  const k = e.filter((D) => D.isSubcontract), T = F.subcontract ?? "Subcontract", R = (D) => {
    const E = e.indexOf(D);
    return /* @__PURE__ */ p(
      Cc,
      {
        id: D.id,
        item: D.label,
        rows: n[E],
        onItemClick: u,
        isSubcontract: D.isSubcontract
      },
      D.id
    );
  }, J = (D) => {
    const E = e.filter(
      (O) => !O.isSubcontract && O.categoryId === D.id
    );
    if (E.length === 0)
      return null;
    const A = f.has(D.id), N = D.name;
    return /* @__PURE__ */ j("div", { children: [
      /* @__PURE__ */ p(
        vr,
        {
          label: N,
          count: E.length,
          isCollapsed: A,
          onToggle: () => y(D.id),
          variant: "category"
        }
      ),
      !A && E.map(R)
    ] }, D.id);
  }, q = e.filter(
    (D) => !D.isSubcontract && (!D.categoryId || !d)
  );
  return /* @__PURE__ */ j(cc, { children: [
    /* @__PURE__ */ j(lc, { $height: t, children: [
      /* @__PURE__ */ j(dc, { children: [
        /* @__PURE__ */ j(fc, { isFocused: m, children: [
          /* @__PURE__ */ p(
            uc,
            {
              placeholder: F.search,
              value: l,
              onChange: a,
              onFocus: P,
              onBlur: P
            }
          ),
          /* @__PURE__ */ p(Qt, { iconName: "search" })
        ] }),
        h && /* @__PURE__ */ p(
          hc,
          {
            title: b ? "Expand all" : "Collapse all",
            onClick: b ? v : S,
            $allCollapsed: b,
            children: /* @__PURE__ */ p("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: b ? /* @__PURE__ */ j(Te, { children: [
              /* @__PURE__ */ p("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ p("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ j(Te, { children: [
              /* @__PURE__ */ p("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ p("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ p(
        gr,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ p(Qt, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    d ? I.map(J) : q.map(R),
    d && q.length > 0 && q.map(R),
    k.length > 0 && /* @__PURE__ */ j(Te, { children: [
      /* @__PURE__ */ p(
        vr,
        {
          label: T,
          count: k.length,
          isCollapsed: f.has("__subcontract__"),
          onToggle: () => y("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !f.has("__subcontract__") && k.map(R)
    ] }),
    /* @__PURE__ */ p(
      gr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ p(Qt, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, _c = x.div`
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
`, Tc = it`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Ac = x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Tc} 1s infinite;
`, Pc = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ p(_c, { position: r, children: /* @__PURE__ */ p(Ac, {}) }) : null, $n = Pc, Xe = (e, r) => {
  const {
    ctx: t,
    x: n,
    y: o,
    width: s,
    height: i,
    textYPos: c,
    label: l,
    font: a,
    isBottomRow: u,
    fillStyle: f,
    topText: y,
    bottomText: M,
    strokeStyle: v,
    labelBetweenCells: S
  } = e;
  if (t.beginPath(), t.strokeStyle = v ?? r.colors.border, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), S ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = a;
    const m = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.accent, t.fillText(l, m, c);
  }
  if (u && f && y && M) {
    t.fillStyle = f, t.fillRect(n, o, s, i), t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = y.font;
    const m = n + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, m, y.y), t.font = M.font;
    const Y = n + s / 2 - t.measureText(M.label).width / 2;
    t.fillStyle = M.color, t.fillText(M.label, Y, M.y);
  }
}, Dn = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Ic = (e, r, t, n) => {
  const o = vt - nt / $s, s = vt - nt / Ds, i = Ze + Ct;
  let c = 0;
  for (let l = 0; l < r; l++) {
    const a = ao(
      _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(l, "days")
    ), u = a.isCurrentDay;
    if (Xe(
      {
        ctx: e,
        x: c,
        y: i,
        width: De,
        height: nt,
        isBottomRow: !0,
        // OPAQUE today fill (currentDay, same as the grid's today column) — the old `today+"26"` was 15% alpha, so
        // events scrolling under the header showed through the HOY cell.
        fillStyle: u ? n.colors.currentDay : a.isBusinessDay ? n.colors.gridBackground : n.colors.primary,
        topText: {
          y: o,
          label: u ? "" : a.dayName.toUpperCase(),
          font: He.bottomRow.name,
          color: Dn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, n)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: u ? `700 10px ${Ne}` : He.bottomRow.number,
          color: u ? n.colors.today : Dn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            n
          )
        }
      },
      n
    ), u) {
      const M = c + De / 2, v = o - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(M - 30 / 2, v, 30, 13, 5) : e.rect(M - 30 / 2, v, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${Ne}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", M, v + 13 / 2 + 0.5), e.restore();
    }
    c += De;
  }
}, Oc = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Le;
  const s = Ze;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= un && (c = 0);
    const a = io(t, l) * Le;
    Xe(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: Ct,
        textYPos: ro,
        label: _().month(c).format("MMMM").toUpperCase(),
        font: He.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, Yc = (e, r, t) => {
  let o = 0, s = 0, i = _(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * De + De;
  for (let c = 0; c < un; c++)
    i > un - 1 && (i = 0), s = _(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * De, Xe(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Ze,
        textYPos: Yn,
        label: _(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${_(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: He.topRow
      },
      t
    ), o += s, i++;
}, Rc = (e, r, t, n) => {
  const o = 7 * De, s = Ze, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const u = _(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let f = (c + a) % or;
    f <= 0 && (f += or), u !== 1 && a === 0 && (l = -u * De + De), Xe(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: Ct,
        textYPos: ro,
        label: `${t.toUpperCase()} ${f}`,
        font: He.middleRow
      },
      n
    ), l += o;
  }
}, Lc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, Nc = (e, r, t, n, o) => {
  const s = vt - nt / 1.6, i = vt - nt / 4.5, c = Ze + Ct;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const u = _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = u.isSame(_(), "week");
    Xe(
      {
        ctx: e,
        x: l,
        y: c,
        width: xt,
        height: nt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : Lc({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: u.isoWeek().toString(),
          font: f ? `700 14px ${Ne}` : He.bottomRow.name,
          color: f ? o.colors.today : Dn({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: He.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += xt;
  }
}, Bc = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (ar(s) - t + 1) * Le, u = 0;
  for (; c + u <= i; )
    l > 0 && (a = ar(s + l) * Le), u + a > i && l > 0 && (a = Math.ceil((i - u) / Le) * Le), Xe(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Ze,
        textYPos: Yn,
        label: (s + l).toString(),
        font: He.topRow
      },
      n
    ), c += a, u += a, l++;
}, Hc = (e, r, t, n) => {
  const o = Math.floor(r / jt) + 2, s = jt * Pe;
  let l = -_(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Pe + 0.5 * Pe;
  for (let a = 0; a < o; a++) {
    const u = _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Xe(
      {
        ctx: e,
        x: l,
        y: bt,
        width: s,
        height: Tt,
        textYPos: bt + Tt / 2 + 2,
        label: u,
        font: He.bottomRow.number
      },
      n
    ), l += s;
  }
}, zc = (e, r, t, n) => {
  const o = Math.ceil(r / jt), s = _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let u = 0.5 * Pe;
  for (let f = 0; f < a; f++) {
    const y = _(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = _(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), S = v.format("MMMM").toUpperCase(), m = v.diff(y, "hour") + 1, Y = f === 0 ? m * Pe : r * Pe;
    Xe(
      {
        ctx: e,
        x: u,
        y: 0,
        width: Y,
        height: bt,
        textYPos: Yn,
        label: S,
        font: He.topRow
      },
      n
    ), u += Y;
  }
}, Fc = (e, r, t, n) => {
  let o = 0;
  const s = bt + Tt, i = _(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Pe;
  for (let l = 0; l < r; l++) {
    const a = i.add(l, "hours").format("h:00a").toUpperCase();
    Xe(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: dn,
        label: a,
        font: He.bottomRow.hoursInDay,
        textYPos: bt + Tt + dn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Pe;
  }
}, Wc = (e, r, t, n, o, s, i) => {
  switch (r) {
    case 0:
      Bc(e, n, s, i), Oc(e, t, n, i), Nc(e, t, n, o, i);
      break;
    case 1:
      Yc(e, n, i), Rc(e, n, o, i), Ic(e, t, n, i);
      break;
    case 2:
      zc(e, t, n, i), Hc(e, t, n, i), Fc(e, t, n, i);
      break;
  }
}, jc = x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, Zc = x.div`
  position: sticky;
  left: ${Ye}px;
  width: calc(${({ $width: e }) => e}px - ${Ye}px);
  z-index: 3;
`, Vc = x.div`
  height: ${vt}px;
  display: block;
`, Gc = x.canvas``, Xc = {
  transfer: /* @__PURE__ */ j(Te, { children: [
    /* @__PURE__ */ p("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ p("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ j(Te, { children: [
    /* @__PURE__ */ p("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ p("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ j(Te, { children: [
    /* @__PURE__ */ p("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ p("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ j(Te, { children: [
    /* @__PURE__ */ p("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ p("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ p("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ j(Te, { children: [
    /* @__PURE__ */ p("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ p("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ j(Te, { children: [
    /* @__PURE__ */ p("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ p("path", { d: "M12 7.5V12l3 2" })
  ] })
}, Fe = ({
  name: e,
  className: r,
  strokeWidth: t = 2
}) => /* @__PURE__ */ p(
  "svg",
  {
    className: r,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: t,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: Xc[e]
  }
), Uc = x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, xr = x.span`
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  flex: none;
  & em {
    font-style: normal;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0;
    color: #74897f;
    font-size: 9.5px;
    opacity: 0.85;
    margin-left: 3px;
  }
`, Nt = x.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
  & svg {
    width: 14px;
    height: 14px;
    color: ${({ theme: e }) => e.colors.accent};
  }
`, Kc = x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, Jc = x.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, qc = x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, Qc = x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, el = x.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.98);
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 1px ${({ theme: e }) => e.colors.border};
  flex: none;
  & svg {
    width: 9px;
    height: 9px;
  }
`, tl = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], nl = () => /* @__PURE__ */ j(Uc, { children: [
  /* @__PURE__ */ p(xr, { children: "Leyenda" }),
  /* @__PURE__ */ j(Nt, { children: [
    /* @__PURE__ */ p(Fe, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ j(Nt, { children: [
    /* @__PURE__ */ p(Fe, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ j(Nt, { children: [
    /* @__PURE__ */ p(Fe, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ j(Nt, { children: [
    /* @__PURE__ */ p(Kc, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ p(Jc, {}),
  /* @__PURE__ */ j(xr, { children: [
    "Estado ",
    /* @__PURE__ */ p("em", { children: "franja izq. + punto esq." })
  ] }),
  tl.map((e) => /* @__PURE__ */ j(qc, { children: [
    /* @__PURE__ */ p(Qc, { style: { background: e.stripe } }),
    /* @__PURE__ */ p(el, { style: { color: e.color }, children: /* @__PURE__ */ p(Fe, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), rl = En(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = Ge(), { date: c, cols: l, dayOfYear: a, startDate: u, config: f } = Ve(), y = fe(null), M = Xt(), v = de(
    (S) => {
      const m = Bn(), F = (r === 2 ? ks : vt) + 1;
      uo(S, m, F), Wc(S, r, l, u, i, a, M);
    },
    [l, a, u, i, r, M]
  );
  return ye(() => {
    if (!y.current)
      return;
    const S = y.current.getContext("2d");
    if (!S)
      return;
    const m = () => v(S);
    return window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [v]), ye(() => {
    const S = y.current;
    if (!S)
      return;
    S.style.letterSpacing = "1px";
    const m = S.getContext("2d");
    m && v(m);
  }, [c, r, v]), /* @__PURE__ */ j(jc, { ref: s, children: [
    (f.showTopbar !== !1 || f.showLegend !== !1) && /* @__PURE__ */ j(Zc, { $width: t, children: [
      f.showTopbar !== !1 && /* @__PURE__ */ p(Ma, { width: t, showThemeToggle: n, toggleTheme: o }),
      f.showLegend !== !1 && /* @__PURE__ */ p(nl, {})
    ] }),
    /* @__PURE__ */ p(Vc, { id: Es, children: /* @__PURE__ */ p(Gc, { ref: y }) })
  ] });
}), ol = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Le;
      break;
    case 2:
      n = Pe;
      break;
    default:
      n = De;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), l = r.endDate.startOf("day"), a = () => {
    let u;
    switch (t) {
      case 2:
        u = (e.startDate.diff(r.startDate, "minute") / Ee + 1) * n - n / 2;
        break;
      default:
        u = s.diff(c, "day") * n;
    }
    return Math.max(0, u);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let u;
    switch (t) {
      case 2:
        u = Math.max(
          e.endDate.diff(e.startDate, "minute") / Ee * n,
          50
        );
        break;
      default:
        u = Math.max(
          i.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: u };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let u;
    switch (t) {
      case 2:
        u = Math.max(
          e.endDate.diff(r.startDate, "minute") / Ee * n + 0.5 * n,
          50
        );
        break;
      default:
        u = Math.max(
          i.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: u };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let u;
    switch (t) {
      case 2:
        u = Math.max(
          r.endDate.diff(e.startDate, "minute") / Ee * n,
          50
        );
        break;
      default:
        u = Math.max(
          l.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: u };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let u;
    switch (t) {
      case 2:
        u = Math.max(
          r.endDate.diff(r.startDate, "minute") / Ee * n,
          50
        );
        break;
      default:
        u = Math.max(
          l.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: u };
  }
  return { x: a(), width: 50 };
}, sl = (e, r, t, n, o, s) => {
  const i = e * ge + _s, c = r.hour(), l = t.hour();
  let a, u, f, y;
  switch (s) {
    case 2: {
      a = _(n), u = _(o), f = _(r).hour(c).minute(0), y = _(t).hour(l).minute(0);
      break;
    }
    default: {
      a = _(n).hour(0).minute(0), u = _(o).hour(23).minute(59), f = r, y = t;
      break;
    }
  }
  return {
    ...ol(
      { startDate: a, endDate: u },
      { startDate: f, endDate: y },
      s
    ),
    y: i
  };
}, yo = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
};
x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
x.p`
  ${wt}
  ${St}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const il = it`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, al = x.button`
  ${wt}
  position: absolute;
  height: ${On}px;
  border-radius: 7px;
  /* NO overflow:hidden — it would make the tile the sticky scroll-container and break the floating text (the multi-day
     body sticks to the visible-left as a wide event scrolls). The rounded bg still clips the hatch; the stripe rounds
     its own left corners to sit inside the radius. */
  /* Isolate so the stripe (z 3) and top-right cluster (z 6) stay contained in the tile instead of escaping to the
     grid level and painting OVER the sticky day-header on vertical scroll. */
  isolation: isolate;
  outline: none;
  border: none;
  text-align: left;
  color: #fff;
  width: 100%;
  box-shadow: 0 2px 5px -1px rgba(12, 26, 23, 0.28), 0 0 0 0.5px rgba(12, 26, 23, 0.14);
  cursor: ${({ isDraggable: e, isDragging: r }) => e ? r ? "grabbing" : "grab" : "not-allowed"};
  opacity: ${({ isDragging: e }) => e ? 0.3 : 1};
  transition: opacity 0.2s ease;
  /* Motion (gated on reduced-motion): fade/scale a newly-mounted tile in, fade a removed one out, and a subtle lift
     on hover. Only transform/opacity/box-shadow are transitioned — NOT top: transitioning top animated a LAYOUT
     property on every displaced tile on unit add/remove (reflow+paint per frame across many nodes = the reported
     lag), and it made the tiles glide while the canvas grid lane snaps. Tiles now snap to their new row in lockstep
     with the canvas; the enter/exit fades + the left-column rowIn carry the motion. */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${il} 180ms ease-out;
    transition: opacity 0.2s ease, transform 160ms ease, box-shadow 160ms ease;
    &:hover:not(:active) {
      transform: translateY(-1.5px);
      box-shadow: 0 6px 13px -3px rgba(12, 26, 23, 0.42), 0 0 0 0.5px rgba(12, 26, 23, 0.16);
    }
  }
  ${({ $unconfirmed: e }) => e && `background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px #D98A22, 0 2px 5px -1px rgba(12,26,23,0.28);
     @media (prefers-reduced-motion: no-preference) {
       &:hover:not(:active) { box-shadow: 0 0 0 1.5px #D98A22, 0 6px 13px -3px rgba(12,26,23,0.42); }
     }`}
  ${({ $exiting: e }) => e && "opacity: 0; transform: scale(0.96); pointer-events: none;"}
`, cl = x.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`, ll = x.div`
  position: sticky;
  left: ${Ye + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, br = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, dl = x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, ul = x.span`
  ${St}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, fl = x.span`
  ${St}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, hl = x.span`
  position: absolute;
  bottom: 3px;
  right: 8px;
  z-index: 4;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.62);
  white-space: nowrap;
  pointer-events: none;
`, pl = x.div`
  ${St}
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  padding-right: 46px;
  opacity: 0.9;
  font-size: 9.5px;
  font-weight: 600;
  & svg {
    width: 11px;
    height: 11px;
    flex: none;
    opacity: 0.9;
  }
`, wr = x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Sr = x.span`
  width: ${({ $sm: e }) => e ? "14px" : "16px"};
  height: ${({ $sm: e }) => e ? "14px" : "16px"};
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.94);
  display: grid;
  place-items: center;
  flex: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  & svg {
    width: ${({ $sm: e }) => e ? "9px" : "11px"};
    height: ${({ $sm: e }) => e ? "9px" : "11px"};
  }
`, Cr = x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, ml = x.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 3px 2px;
  position: relative;
  & svg {
    width: ${({ $transfer: e }) => e ? "18px" : "12px"};
    height: ${({ $transfer: e }) => e ? "18px" : "12px"};
    color: #fff;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.32));
  }
`, Mr = x.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, gl = 34, yl = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, vl = "#3E8E5A", xl = "#D98A22", kr = ({
  row: e,
  data: r,
  zoom: t,
  isSubcontract: n = !1,
  onTileClick: o,
  onDragStart: s,
  isDragging: i = !1,
  isDraggable: c = !0,
  yOffset: l = 0,
  exiting: a = !1
}) => {
  const { date: u } = Ve(), f = Ut(u, t), { y, x: M, width: v } = sl(
    e,
    f.startDate,
    f.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: S } = Xt(), m = fe(null), Y = _(r.startDate).isSame(_(r.endDate), "day"), F = r.eventType === At.Tour, P = r.eventType === At.Transfer, I = Y && (F || P), d = (q) => {
    m.current = { x: q.clientX, y: q.clientY }, c && s && (q.preventDefault(), s(r, q));
  }, h = (q) => {
    if (m.current) {
      const D = Math.abs(q.clientX - m.current.x), E = Math.abs(q.clientY - m.current.y);
      Math.sqrt(D * D + E * E) <= 5 && (o == null || o(r)), m.current = null;
    } else
      o == null || o(r);
  }, b = {
    left: `${M}px`,
    top: `${y + l}px`,
    backgroundColor: `${r.bgColor ?? S.defaultTile}`,
    width: `${v}px`,
    color: yo(r.bgColor ?? "")
  }, k = !n && r.readiness ? yl[r.readiness] : null, T = n && r.subcontractConfirmed === !1, R = n ? T ? xl : vl : k == null ? void 0 : k.stripe, J = (q) => /* @__PURE__ */ j(
    al,
    {
      "data-segment-id": r.segmentId,
      style: b,
      onClick: h,
      onMouseDown: d,
      onDragStart: (D) => D.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: T,
      $exiting: a,
      children: [
        R && /* @__PURE__ */ p(cl, { style: { background: R } }),
        q
      ]
    }
  );
  return J(
    I ? /* @__PURE__ */ j(Te, { children: [
      (n || k) && /* @__PURE__ */ p(wr, { $sm: !0, children: n ? /* @__PURE__ */ p(Cr, { children: "SUB" }) : k && /* @__PURE__ */ p(Sr, { $sm: !0, style: { color: k.color }, children: /* @__PURE__ */ p(Fe, { name: k.icon, strokeWidth: k.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ j(ml, { $transfer: P, children: [
        /* @__PURE__ */ p(Fe, { name: P ? "transfer" : "sun", strokeWidth: 2.4 }),
        v >= gl && /* @__PURE__ */ j(Te, { children: [
          /* @__PURE__ */ p(Mr, { children: _(r.startDate).format("HH:mm") }),
          !P && /* @__PURE__ */ p(Mr, { $end: !0, children: _(r.endDate).format("HH:mm") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ j(Te, { children: [
      /* @__PURE__ */ p(wr, { children: n ? /* @__PURE__ */ p(Cr, { children: "SUB" }) : k && /* @__PURE__ */ p(Sr, { style: { color: k.color }, children: /* @__PURE__ */ p(Fe, { name: k.icon, strokeWidth: k.icon === "check" ? 2.6 : 2.2 }) }) }),
      r.bookingNumber && /* @__PURE__ */ p(hl, { children: r.bookingNumber }),
      /* @__PURE__ */ j(ll, { children: [
        /* @__PURE__ */ j(br, { $pad: !0, children: [
          /* @__PURE__ */ p(dl, { children: /* @__PURE__ */ p(Fe, { name: P ? "transfer" : "tour" }) }),
          /* @__PURE__ */ p(ul, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ p(br, { children: /* @__PURE__ */ p(fl, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ j(pl, { children: [
          /* @__PURE__ */ p(Fe, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, $r = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Re;
}, bl = it`
  from { opacity: 0; }
  to { opacity: 1; }
`, wl = x.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${ge}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${bl} 200ms ease-out;
  }
  pointer-events: none;
`, Sl = ({
  data: e,
  zoom: r,
  onTileClick: t,
  onDragStart: n,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = []
}) => {
  const { nodes: c, liveMap: l } = $e(() => {
    const v = /* @__PURE__ */ new Map();
    let S = 0;
    return { nodes: e.map((Y, F) => {
      if (F > 0 && (S += Math.max(e[F - 1].data.length, 1)), !Y.data.some((P) => P.length > 0)) {
        const P = $r(S, i);
        return [
          /* @__PURE__ */ p(wl, { style: { top: `${S * ge + P}px` }, children: "Disponible" }, `dispo-${Y.id}`)
        ];
      }
      return Y.data.map(
        (P, I) => P.map((d) => {
          const h = s === d.segmentId, b = o ? o(d) : !1, k = I + S, T = $r(k, i);
          return v.set(d.segmentId, {
            project: d,
            absoluteRow: k,
            yOffset: T,
            isSubcontract: !!Y.isSubcontract
          }), /* @__PURE__ */ p(
            kr,
            {
              row: k,
              data: d,
              zoom: r,
              isSubcontract: Y.isSubcontract,
              onTileClick: t,
              onDragStart: n,
              isDragging: h,
              isDraggable: b,
              yOffset: T
            },
            d.segmentId
          );
        })
      );
    }).flat(2), liveMap: v };
  }, [e, t, r, n, o, s, i]), a = fe(/* @__PURE__ */ new Map()), u = fe([]), [f, y] = pe([]);
  ye(() => () => u.current.forEach(clearTimeout), []), ye(() => {
    const v = a.current;
    a.current = l;
    const S = [];
    if (v.forEach((F, P) => {
      l.has(P) || S.push(F);
    }), y((F) => {
      let P = F.filter((I) => !l.has(I.project.segmentId));
      for (const I of S)
        P.some((d) => d.project.segmentId === I.project.segmentId) || (P = [...P, I]);
      return P;
    }), !S.length)
      return;
    const m = new Set(S.map((F) => F.project.segmentId)), Y = setTimeout(() => {
      y((F) => F.filter((P) => !m.has(P.project.segmentId)));
    }, 220);
    u.current.push(Y);
  }, [l]);
  const M = f.filter((v) => !l.has(v.project.segmentId)).map((v) => /* @__PURE__ */ p(
    kr,
    {
      row: v.absoluteRow,
      data: v.project,
      zoom: r,
      isSubcontract: v.isSubcontract,
      yOffset: v.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    v.project.segmentId
  ));
  return /* @__PURE__ */ p(Te, { children: [...c, ...M] });
}, Cl = Sl;
x.div`
  box-sizing: border-box;
  font-family: ${Ne};
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
x.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
x.label`
  font-size: 14px;
`;
x.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
x.input`
  height: 18px;
  width: 18px;
`;
x.button`
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
x.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const Ml = x.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
  /* Kept mounted (opacity-driven) so the fade plays BOTH directions. */
  opacity: ${({ $visible: e }) => e ? 1 : 0};
  transform: translateY(${({ $visible: e }) => e ? "0" : "3px"});
  transition: opacity 150ms ease, transform 150ms ease;
`, kl = x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, $l = x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, Dl = x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, El = x.span`
  flex-shrink: 0;
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, _l = x.div`
  ${wt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Tl = x.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, Al = x.div`
  padding: 10px 12px;
`, Pl = x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Dr = x.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Er = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, _r = x.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Tr = x.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Ar = x.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Il = x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Ol = x.div`
  min-width: 0;
`, Yl = x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Rl = x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, Pr = x.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Mt = x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, kt = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, $t = x.div`
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
x.div``;
x.span``;
x.span``;
x.div``;
x.div``;
x.span``;
x.span``;
x.div``;
x.div``;
x.span``;
x.span``;
x.div``;
x.div``;
x.div``;
x.span``;
x.div``;
x.div``;
x.div``;
x.div``;
x.p``;
x.span``;
const Ll = {
  client: "Client",
  startDate: "Start",
  endDate: "End",
  groupName: "Group",
  driver: "Driver",
  flightNumber: "Flight",
  serviceNotes: "Service Notes",
  reservationNotes: "Reservation Notes",
  salida: "Salida",
  destino: "Destino",
  regreso: "Regreso",
  tour: "Tour",
  transfer: "Transfer",
  oneDay: "One-day",
  passengers: "Pax"
}, Nl = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = fe(null), [s, i] = pe("below"), c = Ge(), l = { ...Ll, ...c.tooltip };
  Vt(() => {
    if (!o.current || !t)
      return;
    const v = o.current, { width: S, height: m } = v.getBoundingClientRect(), Y = v.parentElement;
    if (!Y)
      return;
    const F = Y.getBoundingClientRect(), P = 12, I = 4, d = F.height - t.y, h = F.width - t.x;
    let b = t.x + P, k = t.y + P, T = "below";
    h < S + P && (b = t.x - S - P), d < m + P && (k = t.y - m - P, T = "above"), b = Math.max(I, Math.min(b, F.width - S - I)), k = Math.max(I, Math.min(k, F.height - m - I)), i(T), v.style.left = `${b}px`, v.style.top = `${k}px`;
  }, [t]);
  const a = n.reservationType === At.Tour, u = a && n.isOneDayEvent, f = () => a ? u ? "oneday" : "tour" : "transfer", y = () => a ? u ? l.oneDay : l.tour : l.transfer, M = [
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ j(Ml, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ j(kl, { children: [
      /* @__PURE__ */ j($l, { children: [
        /* @__PURE__ */ p(Dl, { children: n.bookingNumber }),
        /* @__PURE__ */ p(El, { $type: f(), children: y() })
      ] }),
      /* @__PURE__ */ p(_l, { children: n.eventName }),
      n.client && /* @__PURE__ */ p(Tl, { children: n.client })
    ] }),
    /* @__PURE__ */ j(Al, { children: [
      /* @__PURE__ */ j(Pl, { children: [
        /* @__PURE__ */ j(Dr, { children: [
          /* @__PURE__ */ p(Er, { children: l.startDate }),
          /* @__PURE__ */ j(_r, { children: [
            /* @__PURE__ */ p(Tr, { children: n.startDate }),
            " ",
            /* @__PURE__ */ p(Ar, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ j(Dr, { $isEnd: !0, children: [
          /* @__PURE__ */ p(Er, { children: l.endDate }),
          /* @__PURE__ */ j(_r, { children: [
            /* @__PURE__ */ p(Tr, { children: n.endDate }),
            " ",
            /* @__PURE__ */ p(Ar, { children: n.endTime })
          ] })
        ] })
      ] }),
      M.length > 0 && /* @__PURE__ */ p(Il, { children: M.map((v, S) => /* @__PURE__ */ j(Ol, { children: [
        /* @__PURE__ */ p(Yl, { children: v.label }),
        /* @__PURE__ */ p(Rl, { children: v.value })
      ] }, S)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ j(Pr, { children: [
        n.departureAddress && /* @__PURE__ */ j(Mt, { children: [
          /* @__PURE__ */ p(kt, { children: l.salida }),
          /* @__PURE__ */ p($t, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ j(Mt, { children: [
          /* @__PURE__ */ p(kt, { children: l.destino }),
          /* @__PURE__ */ p($t, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ j(Mt, { children: [
          /* @__PURE__ */ p(kt, { children: l.regreso }),
          /* @__PURE__ */ p($t, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ j(Pr, { children: [
        n.serviceNotes && /* @__PURE__ */ j(Mt, { children: [
          /* @__PURE__ */ p(kt, { children: l.serviceNotes }),
          /* @__PURE__ */ p($t, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ j(Mt, { children: [
          /* @__PURE__ */ p(kt, { children: l.reservationNotes }),
          /* @__PURE__ */ p($t, { children: n.reservationNotes })
        ] })
      ] })
    ] })
  ] });
};
x.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`;
x.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`;
x.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`;
const Bl = x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Hl = x.div`
  position: absolute;
  height: ${On}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, zl = x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Ir = x.p`
  ${wt}
  ${St}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Fl = x.p`
  ${wt}
  ${St}
`, Wl = x.div`
  position: sticky;
  left: ${Ye + 16}px;
  overflow: hidden;
`, jl = x.div`
  position: absolute;
  height: ${On}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Zl = x.div`
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
`, Vl = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Gl = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Xl = x.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Or = x.div`
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
`, Yr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Rr = x.div`
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
`, Lr = x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, en = x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, tn = x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, ut = x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Nr = x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Ul = ({
  draggedEvent: e,
  ghostPosition: r,
  ghostDimensions: t,
  dropTarget: n,
  isValidDrop: o,
  dragState: s,
  data: i,
  resourceOnly: c,
  separatorRowIndices: l = []
}) => {
  const a = Ge(), u = (I) => {
    let d = 0;
    for (const h of l)
      h <= I && d++;
    return I * ge + d * Re;
  }, [f, y] = pe(null), [M, v] = pe(0), S = de((I = 400, d = 300) => {
    const b = t.width, k = 48, T = document.getElementById("react-scheduler");
    if (!T)
      return {
        x: r.x + b + 16,
        y: r.y
      };
    const R = T.scrollLeft, J = T.scrollTop, q = T.clientWidth, D = T.clientHeight, E = r.x - R, A = r.y - J, N = {
      left: Ye + 16,
      // Avoid left column
      right: q - 16,
      top: 16,
      bottom: D - 16
    }, O = N.right - (E + b), X = E - N.left, Q = N.bottom - (A + k), ie = A - N.top;
    let ce, L;
    return O >= I + 16 ? ce = E + b + 16 : X >= I + 16 ? ce = E - I - 16 : O >= X ? (ce = E + b + 16, ce + I > N.right && (ce = N.right - I)) : (ce = E - I - 16, ce < N.left && (ce = N.left)), Q >= d + 16 ? L = A + k + 16 : ie >= d + 16 ? L = A - d - 16 : Q >= ie ? (L = A + k + 16, L + d > N.bottom && (L = N.bottom - d)) : (L = A - d - 16, L < N.top && (L = N.top)), ce = Math.max(N.left, Math.min(ce, N.right - I)), L = Math.max(N.top, Math.min(L, N.bottom - d)), {
      x: ce + R,
      y: L + J
    };
  }, [r.x, r.y, t.width]);
  ye(() => {
    s === "dragging" && e && M === 0 ? v(r.x) : s === "idle" && v(0);
  }, [s, e, r.x, M]), ye(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const m = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const I = [];
    let d = 0;
    for (const h of i) {
      const b = Math.max(h.data.length, 1);
      if (h.capacity !== void 0 && e.totalPassengers > h.capacity)
        for (let k = 0; k < b; k++)
          I.push(d + k);
      d += b;
    }
    return I;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const Y = s === "animating", F = yo(e.bgColor ?? ""), P = () => {
    if (!n)
      return "";
    const I = _(n.startDate).format("MMM D, HH:mm"), d = _(n.endDate).format("HH:mm");
    return `${I} - ${d}`;
  };
  return /* @__PURE__ */ j(Bl, { children: [
    m.map((I) => /* @__PURE__ */ p(
      Gl,
      {
        style: {
          top: `${u(I)}px`,
          height: `${ge}px`
        }
      },
      I
    )),
    n && s === "dragging" && /* @__PURE__ */ p(
      Vl,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${u(n.resourceIndex)}px`,
          height: `${ge}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ j(Te, { children: [
      /* @__PURE__ */ p(
        jl,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${u(n.resourceIndex) + (ge - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ p(
        Zl,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${u(n.resourceIndex) + (ge - 48) / 2}px`
          },
          children: P()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ p(
      Xl,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          left: "0px",
          top: `${u(n.resourceIndex)}px`,
          height: `${ge}px`
        }
      }
    ),
    n && o && n.hasConflict && n.conflicts && n.conflicts.length > 0 && s === "dragging" && (() => {
      const I = S(400, 300);
      return /* @__PURE__ */ j(
        Or,
        {
          style: {
            left: `${I.x}px`,
            top: `${I.y}px`
          },
          children: [
            /* @__PURE__ */ j(Yr, { children: [
              /* @__PURE__ */ p(Rr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ p(Lr, { children: n.conflicts.map((d, h) => {
              const b = _(n.startDate).format("YYYY-MM-DD"), k = _(n.endDate).format("YYYY-MM-DD"), T = _(d.event.startDate).format("YYYY-MM-DD"), R = _(d.event.endDate).format("YYYY-MM-DD"), J = _(d.conflictStart).format("YYYY-MM-DD"), q = _(d.conflictEnd).format("YYYY-MM-DD"), D = b !== k, E = T !== R, A = J !== q, N = D ? _(n.startDate).format("MMM D, h:mm A") : _(n.startDate).format("h:mm A"), O = D ? _(n.endDate).format("MMM D, h:mm A") : _(n.endDate).format("h:mm A"), X = E ? _(d.event.startDate).format("MMM D, h:mm A") : _(d.event.startDate).format("h:mm A"), Q = E ? _(d.event.endDate).format("MMM D, h:mm A") : _(d.event.endDate).format("h:mm A"), ie = A ? _(d.conflictStart).format("MMM D, h:mm A") : _(d.conflictStart).format("h:mm A"), ce = A ? _(d.conflictEnd).format("MMM D, h:mm A") : _(d.conflictEnd).format("h:mm A"), L = A ? "" : _(d.conflictStart).format("MMM D"), B = n.startDate.getTime(), K = n.endDate.getTime(), ne = d.event.startDate.getTime(), C = d.event.endDate.getTime(), H = B >= ne && B < C, w = K > ne && K <= C, Z = B <= ne && K >= C, V = ne <= B && C >= K;
              let z = !1, g = !1, G = !1, $ = !1, W = "";
              return Z || V ? (z = !0, g = !0, G = !0, $ = !0, W = `⚠️ ${a.conflicts.changeBoth}`) : H && w ? (z = !0, g = !0, G = !0, $ = !0, W = `⚠️ ${a.conflicts.changeBoth}`) : H ? (z = !0, $ = !0, W = `⚠️ ${a.conflicts.changeStart}`) : w && (g = !0, G = !0, W = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ j(en, { children: [
                /* @__PURE__ */ j(tn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  d.event.title,
                  d.event.subtitle && ` - ${d.event.subtitle}`
                ] }),
                /* @__PURE__ */ j(ut, { children: [
                  /* @__PURE__ */ p("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  z ? /* @__PURE__ */ p("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: N }) : N,
                  " ",
                  a.conflicts.to,
                  " ",
                  g ? /* @__PURE__ */ p("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: O }) : O
                ] }),
                /* @__PURE__ */ j(ut, { children: [
                  /* @__PURE__ */ p("strong", { children: d.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  G ? /* @__PURE__ */ p("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: X }) : X,
                  " ",
                  a.conflicts.to,
                  " ",
                  $ ? /* @__PURE__ */ p("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Q }) : Q
                ] }),
                /* @__PURE__ */ j(Nr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  L && `${L}, `,
                  ie,
                  " - ",
                  ce
                ] }),
                W && /* @__PURE__ */ p(ut, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: W })
              ] }, h);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const I = S(400, 400);
      return /* @__PURE__ */ j(
        Or,
        {
          style: {
            left: `${I.x}px`,
            top: `${I.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ j(Yr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ p(Rr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ j(Lr, { children: [
              (() => {
                const d = n.nearbyEvents.some((T) => T.position === "before"), h = n.nearbyEvents.some((T) => T.position === "after"), b = _(n.startDate).format("h:mm A"), k = _(n.endDate).format("h:mm A");
                return /* @__PURE__ */ j(en, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ j(tn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ j(ut, { style: { fontWeight: 600 }, children: [
                    _(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    d ? /* @__PURE__ */ p("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: b }) : b,
                    " ",
                    a.conflicts.to,
                    " ",
                    h ? /* @__PURE__ */ p("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: k }) : k
                  ] }),
                  /* @__PURE__ */ p(ut, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((d, h) => {
                const b = _(d.event.startDate).format("YYYY-MM-DD"), k = _(d.event.endDate).format("YYYY-MM-DD"), T = b !== k, R = T ? _(d.event.startDate).format("MMM D, h:mm A") : _(d.event.startDate).format("h:mm A"), J = T ? _(d.event.endDate).format("MMM D, h:mm A") : _(d.event.endDate).format("h:mm A"), q = _(d.event.startDate).format("MMM D"), D = Math.floor(d.timeGap / (1e3 * 60 * 60)), E = Math.floor(d.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), A = D > 0 ? `${D}h ${E}m` : `${E}m`, N = d.position === "after", O = d.position === "before";
                return /* @__PURE__ */ j(en, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ j(tn, { style: { color: "#1B5E20" }, children: [
                    d.event.title,
                    d.event.subtitle && ` - ${d.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ j(ut, { children: [
                    !T && `${q}: `,
                    N ? /* @__PURE__ */ p("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: R }) : R,
                    " ",
                    a.conflicts.to,
                    " ",
                    O ? /* @__PURE__ */ p("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: J }) : J
                  ] }),
                  /* @__PURE__ */ j(Nr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    A,
                    " ",
                    d.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, h);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ p(
      Hl,
      {
        $isAnimating: Y,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: Y ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: Y ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: Y ? void 0 : `translate3d(${c ? M : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: F
        },
        children: /* @__PURE__ */ p(zl, { children: /* @__PURE__ */ j(Wl, { children: [
          /* @__PURE__ */ p(Ir, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ p(Ir, { children: e.subtitle }),
          e.description && /* @__PURE__ */ p(Fl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Kl = Ul, Jl = it`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, ql = x.div`
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
  animation: ${Jl} 1.5s ease-in-out infinite;
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
`, Ql = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ p(
  ql,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), ed = Ql, td = it`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, nd = x.div`
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
  animation: ${td} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, rd = x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, od = x.span`
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
`, sd = x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, id = x.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;
x.div`
  display: none;
`;
x.div`
  display: none;
`;
x.button`
  display: none;
`;
const ad = x.div`
  display: flex;
  gap: 8px;
`, Br = x.button`
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
`, cd = ({ selections: e, onConfirm: r, onClear: t }) => {
  var v;
  const o = Ge().multiSelect, s = $e(() => e.filter((S) => S.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", u = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, M = /* @__PURE__ */ j(nd, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ j(rd, { children: [
      /* @__PURE__ */ j(od, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ j(sd, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ p(id, { children: c })
    ] }),
    /* @__PURE__ */ j(ad, { children: [
      /* @__PURE__ */ j(Br, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ p(Br, { variant: "primary", $hasConflicts: y, onClick: r, children: y ? `⚠️ ${u}` : `✓ ${a}` })
    ] })
  ] });
  return Co(M, document.body);
}, ld = cd, dd = it`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, ud = x.div`
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
  animation: ${dd} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && Gt`
      border-style: dashed;
    `}
`, fd = x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, hd = x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, pd = x.button`
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
`, md = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, l] = pe(null), [a, u] = pe({ x: 0, y: 0 }), f = fe(null), y = $e(() => {
    switch (t) {
      case 0:
        return Le * 7;
      case 1:
        return De;
      case 2:
        return Pe;
      default:
        return De;
    }
  }, [t]), M = $e(() => _().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), v = $e(() => e.map((h, b) => {
    let k = 0, T = !1;
    for (const X of r) {
      if (X.id === h.resourceId) {
        T = !0;
        break;
      }
      k += Math.max(X.data.length, 1);
    }
    if (!T)
      return null;
    const R = _(h.startDate), J = _(h.endDate);
    let q, D;
    switch (t) {
      case 0:
        q = Math.floor(R.diff(M, "days") / 7), D = Math.max(1, Math.ceil(J.diff(R, "days") / 7) + 1);
        break;
      case 1:
        q = R.diff(M, "days"), D = Math.max(1, J.diff(R, "days") + 1);
        break;
      case 2:
        q = R.diff(M, "hours"), D = Math.max(1, J.diff(R, "hours") + 1);
        break;
      default:
        q = 0, D = 1;
    }
    const E = q * y;
    let A = 0;
    for (const X of i)
      X <= k && A++;
    const N = k * ge + A * Re, O = D * y;
    return {
      index: b,
      selection: h,
      x: E,
      y: N,
      width: O,
      height: ge
    };
  }), [e, r, t, M, y]), S = (h, b) => {
    const k = _(h).format("MMM D"), T = _(b).format("MMM D");
    return k === T ? k : `${k} - ${T}`;
  }, m = (h) => !h.hasConflict || !h.conflicts ? "" : `⚠️ Conflicts with:
${h.conflicts.map((k) => {
    const T = (k.overlapDuration / 36e5).toFixed(1);
    return `• ${k.event.title} (${T}h overlap)`;
  }).join(`
`)}`, Y = de(
    (h) => {
      let b = 0;
      for (const k of r) {
        const T = Math.max(k.data.length, 1);
        if (h >= b * ge && h < (b + T) * ge)
          return {
            resourceId: k.id,
            resourceLabel: k.label
          };
        b += T;
      }
      return null;
    },
    [r]
  ), F = de(
    (h) => {
      const b = Math.floor(h / y);
      switch (t) {
        case 0:
          return M.add(b * 7, "days").toDate();
        case 1:
          return M.add(b, "days").toDate();
        case 2:
          return M.add(b, "hours").toDate();
        default:
          return M.toDate();
      }
    },
    [t, M, y]
  ), P = de(
    (h, b) => {
      !s || (h.preventDefault(), h.stopPropagation(), !v[b]) || (f.current = { x: h.clientX, y: h.clientY }, l(b), u({ x: 0, y: 0 }));
    },
    [s, v]
  ), I = de(
    (h) => {
      if (c === null || !f.current)
        return;
      const b = h.clientX - f.current.x, k = h.clientY - f.current.y, T = Math.round(b / y) * y, R = Math.round(k / ge) * ge;
      u({ x: T, y: R });
    },
    [c, y]
  ), d = de(() => {
    if (c === null || !s) {
      l(null), u({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const h = v[c];
    if (!h) {
      l(null), u({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const b = h.x + a.x, k = h.y + a.y, T = Y(k + ge / 2);
    if (!T) {
      l(null), u({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const R = F(b), J = e[c], q = J.endDate.getTime() - J.startDate.getTime(), D = new Date(R.getTime() + q);
    s(c, {
      startDate: R,
      endDate: D,
      resourceId: T.resourceId,
      resourceLabel: T.resourceLabel
    }), l(null), u({ x: 0, y: 0 }), f.current = null;
  }, [c, a, v, e, s, Y, F]);
  return ye(() => {
    if (c !== null)
      return document.addEventListener("mousemove", I), document.addEventListener("mouseup", d), () => {
        document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", d);
      };
  }, [c, I, d]), /* @__PURE__ */ p(Te, { children: v.map((h) => {
    if (!h)
      return null;
    const b = h.selection.hasConflict || !1, k = c === h.index, T = k ? h.x + a.x : h.x, R = k ? h.y + a.y : h.y;
    return /* @__PURE__ */ j(
      ud,
      {
        $hasConflict: b,
        $isDragging: k,
        style: {
          left: T,
          top: R,
          width: h.width,
          height: h.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (J) => P(J, h.index),
        children: [
          b && /* @__PURE__ */ p(hd, { title: m(h.selection), children: "⚠️" }),
          /* @__PURE__ */ p(fd, { $hasConflict: b, children: S(h.selection.startDate, h.selection.endDate) }),
          /* @__PURE__ */ p(
            pd,
            {
              onClick: (J) => {
                J.stopPropagation(), o(h.index);
              },
              onMouseDown: (J) => J.stopPropagation(),
              title: b ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      h.index
    );
  }) });
}, gd = md, yd = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, vd = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ve(), n = $e(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Le * 7 : De, s = _().year(r.year).month(r.month).date(r.dayOfMonth).startOf("day"), i = _().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, r, t]);
  return n ? /* @__PURE__ */ p(yd, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, xd = vd;
export {
  Md as Scheduler
};
