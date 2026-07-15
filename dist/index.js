var wo = Object.defineProperty;
var So = (e, n, t) => n in e ? wo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Fn = (e, n, t) => (So(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as p, jsxs as W, Fragment as Ee } from "react/jsx-runtime";
import * as oe from "react";
import nt, { useRef as ge, useContext as Je, useMemo as ke, useLayoutEffect as Vt, useDebugValue as Wn, createElement as Co, createContext as zr, useState as me, useCallback as ce, useEffect as xe, forwardRef as Tn, useImperativeHandle as Fr } from "react";
import { createPortal as Mo } from "react-dom";
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Et = {}, ko = {
  get exports() {
    return Et;
  },
  set exports(e) {
    Et = e;
  }
}, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function $o() {
  if (jn)
    return be;
  jn = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function M(m) {
    if (typeof m == "object" && m !== null) {
      var L = m.$$typeof;
      switch (L) {
        case e:
          switch (m = m.type, m) {
            case t:
            case o:
            case r:
            case a:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case i:
                case d:
                case y:
                case f:
                case s:
                  return m;
                default:
                  return L;
              }
          }
        case n:
          return L;
      }
    }
  }
  return be.ContextConsumer = i, be.ContextProvider = s, be.Element = e, be.ForwardRef = d, be.Fragment = t, be.Lazy = y, be.Memo = f, be.Portal = n, be.Profiler = o, be.StrictMode = r, be.Suspense = a, be.SuspenseList = l, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(m) {
    return M(m) === i;
  }, be.isContextProvider = function(m) {
    return M(m) === s;
  }, be.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, be.isForwardRef = function(m) {
    return M(m) === d;
  }, be.isFragment = function(m) {
    return M(m) === t;
  }, be.isLazy = function(m) {
    return M(m) === y;
  }, be.isMemo = function(m) {
    return M(m) === f;
  }, be.isPortal = function(m) {
    return M(m) === n;
  }, be.isProfiler = function(m) {
    return M(m) === o;
  }, be.isStrictMode = function(m) {
    return M(m) === r;
  }, be.isSuspense = function(m) {
    return M(m) === a;
  }, be.isSuspenseList = function(m) {
    return M(m) === l;
  }, be.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === r || m === a || m === l || m === w || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === f || m.$$typeof === s || m.$$typeof === i || m.$$typeof === d || m.$$typeof === v || m.getModuleId !== void 0);
  }, be.typeOf = M, be;
}
var we = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function Do() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), v = !1, M = !1, m = !1, L = !1, F = !1, I;
    I = Symbol.for("react.module.reference");
    function P($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === t || $ === o || F || $ === r || $ === a || $ === l || L || $ === w || v || M || m || typeof $ == "object" && $ !== null && ($.$$typeof === y || $.$$typeof === f || $.$$typeof === s || $.$$typeof === i || $.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === I || $.getModuleId !== void 0));
    }
    function u($) {
      if (typeof $ == "object" && $ !== null) {
        var j = $.$$typeof;
        switch (j) {
          case e:
            var ne = $.type;
            switch (ne) {
              case t:
              case o:
              case r:
              case a:
              case l:
                return ne;
              default:
                var X = ne && ne.$$typeof;
                switch (X) {
                  case c:
                  case i:
                  case d:
                  case y:
                  case f:
                  case s:
                    return X;
                  default:
                    return j;
                }
            }
          case n:
            return j;
        }
      }
    }
    var h = i, b = s, k = e, A = d, O = t, K = y, U = f, E = n, T = o, _ = r, N = a, R = l, J = !1, Q = !1;
    function se($) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie($) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B($) {
      return u($) === i;
    }
    function z($) {
      return u($) === s;
    }
    function G($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function te($) {
      return u($) === d;
    }
    function S($) {
      return u($) === t;
    }
    function Y($) {
      return u($) === y;
    }
    function C($) {
      return u($) === f;
    }
    function Z($) {
      return u($) === n;
    }
    function q($) {
      return u($) === o;
    }
    function H($) {
      return u($) === r;
    }
    function g($) {
      return u($) === a;
    }
    function V($) {
      return u($) === l;
    }
    we.ContextConsumer = h, we.ContextProvider = b, we.Element = k, we.ForwardRef = A, we.Fragment = O, we.Lazy = K, we.Memo = U, we.Portal = E, we.Profiler = T, we.StrictMode = _, we.Suspense = N, we.SuspenseList = R, we.isAsyncMode = se, we.isConcurrentMode = ie, we.isContextConsumer = B, we.isContextProvider = z, we.isElement = G, we.isForwardRef = te, we.isFragment = S, we.isLazy = Y, we.isMemo = C, we.isPortal = Z, we.isProfiler = q, we.isStrictMode = H, we.isSuspense = g, we.isSuspenseList = V, we.isValidElementType = P, we.typeOf = u;
  }()), we;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = $o() : e.exports = Do();
})(ko);
function Eo(e) {
  function n(B, z, G, te, S) {
    for (var Y = 0, C = 0, Z = 0, q = 0, H, g, V = 0, $ = 0, j, ne = j = H = 0, X = 0, ae = 0, pe = 0, ue = 0, ve = G.length, le = ve - 1, he, re = "", ee = "", fe = "", de = "", Me; X < ve; ) {
      if (g = G.charCodeAt(X), X === le && C + q + Z + Y !== 0 && (C !== 0 && (g = C === 47 ? 10 : 47), q = Z = Y = 0, ve++, le++), C + q + Z + Y === 0) {
        if (X === le && (0 < ae && (re = re.replace(y, "")), 0 < re.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              re += G.charAt(X);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (re = re.trim(), H = re.charCodeAt(0), j = 1, ue = ++X; X < ve; ) {
              switch (g = G.charCodeAt(X)) {
                case 123:
                  j++;
                  break;
                case 125:
                  j--;
                  break;
                case 47:
                  switch (g = G.charCodeAt(X + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = X + 1; ne < le; ++ne)
                          switch (G.charCodeAt(ne)) {
                            case 47:
                              if (g === 42 && G.charCodeAt(ne - 1) === 42 && X + 2 !== ne) {
                                X = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                X = ne + 1;
                                break e;
                              }
                          }
                        X = ne;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; X++ < le && G.charCodeAt(X) !== g; )
                    ;
              }
              if (j === 0)
                break;
              X++;
            }
            switch (j = G.substring(ue, X), H === 0 && (H = (re = re.replace(f, "").trim()).charCodeAt(0)), H) {
              case 64:
                switch (0 < ae && (re = re.replace(y, "")), g = re.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ae = z;
                    break;
                  default:
                    ae = N;
                }
                if (j = n(z, ae, j, g, S + 1), ue = j.length, 0 < J && (ae = t(N, re, pe), Me = c(3, j, ae, z, E, U, ue, g, S, te), re = ae.join(""), Me !== void 0 && (ue = (j = Me.trim()).length) === 0 && (g = 0, j = "")), 0 < ue)
                  switch (g) {
                    case 115:
                      re = re.replace(h, i);
                    case 100:
                    case 109:
                    case 45:
                      j = re + "{" + j + "}";
                      break;
                    case 107:
                      re = re.replace(F, "$1 $2"), j = re + "{" + j + "}", j = _ === 1 || _ === 2 && s("@" + j, 3) ? "@-webkit-" + j + "@" + j : "@" + j;
                      break;
                    default:
                      j = re + j, te === 112 && (j = (ee += j, ""));
                  }
                else
                  j = "";
                break;
              default:
                j = n(z, t(z, re, pe), j, te, S + 1);
            }
            fe += j, j = pe = ae = ne = H = 0, re = "", g = G.charCodeAt(++X);
            break;
          case 125:
          case 59:
            if (re = (0 < ae ? re.replace(y, "") : re).trim(), 1 < (ue = re.length))
              switch (ne === 0 && (H = re.charCodeAt(0), H === 45 || 96 < H && 123 > H) && (ue = (re = re.replace(" ", ":")).length), 0 < J && (Me = c(1, re, z, B, E, U, ee.length, te, S, te)) !== void 0 && (ue = (re = Me.trim()).length) === 0 && (re = "\0\0"), H = re.charCodeAt(0), g = re.charCodeAt(1), H) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    de += re + G.charAt(X);
                    break;
                  }
                default:
                  re.charCodeAt(ue - 1) !== 58 && (ee += o(re, H, g, re.charCodeAt(2)));
              }
            pe = ae = ne = H = 0, re = "", g = G.charCodeAt(++X);
        }
      }
      switch (g) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + H === 0 && te !== 107 && 0 < re.length && (ae = 1, re += "\0"), 0 < J * se && c(0, re, z, B, E, U, ee.length, te, S, te), U = 1, E++;
          break;
        case 59:
        case 125:
          if (C + q + Z + Y === 0) {
            U++;
            break;
          }
        default:
          switch (U++, he = G.charAt(X), g) {
            case 9:
            case 32:
              if (q + Y + C === 0)
                switch (V) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    he = "";
                    break;
                  default:
                    g !== 32 && (he = " ");
                }
              break;
            case 0:
              he = "\\0";
              break;
            case 12:
              he = "\\f";
              break;
            case 11:
              he = "\\v";
              break;
            case 38:
              q + C + Y === 0 && (ae = pe = 1, he = "\f" + he);
              break;
            case 108:
              if (q + C + Y + T === 0 && 0 < ne)
                switch (X - ne) {
                  case 2:
                    V === 112 && G.charCodeAt(X - 3) === 58 && (T = V);
                  case 8:
                    $ === 111 && (T = $);
                }
              break;
            case 58:
              q + C + Y === 0 && (ne = X);
              break;
            case 44:
              C + Z + q + Y === 0 && (ae = 1, he += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (q = q === g ? 0 : q === 0 ? g : q);
              break;
            case 91:
              q + C + Z === 0 && Y++;
              break;
            case 93:
              q + C + Z === 0 && Y--;
              break;
            case 41:
              q + C + Y === 0 && Z--;
              break;
            case 40:
              if (q + C + Y === 0) {
                if (H === 0)
                  switch (2 * V + 3 * $) {
                    case 533:
                      break;
                    default:
                      H = 1;
                  }
                Z++;
              }
              break;
            case 64:
              C + Z + q + Y + ne + j === 0 && (j = 1);
              break;
            case 42:
            case 47:
              if (!(0 < q + Y + Z))
                switch (C) {
                  case 0:
                    switch (2 * g + 3 * G.charCodeAt(X + 1)) {
                      case 235:
                        C = 47;
                        break;
                      case 220:
                        ue = X, C = 42;
                    }
                    break;
                  case 42:
                    g === 47 && V === 42 && ue + 2 !== X && (G.charCodeAt(ue + 2) === 33 && (ee += G.substring(ue, X + 1)), he = "", C = 0);
                }
          }
          C === 0 && (re += he);
      }
      $ = V, V = g, X++;
    }
    if (ue = ee.length, 0 < ue) {
      if (ae = z, 0 < J && (Me = c(2, ee, ae, B, E, U, ue, te, S, te), Me !== void 0 && (ee = Me).length === 0))
        return de + ee + fe;
      if (ee = ae.join(",") + "{" + ee + "}", _ * T !== 0) {
        switch (_ !== 2 || s(ee, 2) || (T = 0), T) {
          case 111:
            ee = ee.replace(P, ":-moz-$1") + ee;
            break;
          case 112:
            ee = ee.replace(I, "::-webkit-input-$1") + ee.replace(I, "::-moz-$1") + ee.replace(I, ":-ms-input-$1") + ee;
        }
        T = 0;
      }
    }
    return de + ee + fe;
  }
  function t(B, z, G) {
    var te = z.trim().split(m);
    z = te;
    var S = te.length, Y = B.length;
    switch (Y) {
      case 0:
      case 1:
        var C = 0;
        for (B = Y === 0 ? "" : B[0] + " "; C < S; ++C)
          z[C] = r(B, z[C], G).trim();
        break;
      default:
        var Z = C = 0;
        for (z = []; C < S; ++C)
          for (var q = 0; q < Y; ++q)
            z[Z++] = r(B[q] + " ", te[C], G).trim();
    }
    return z;
  }
  function r(B, z, G) {
    var te = z.charCodeAt(0);
    switch (33 > te && (te = (z = z.trim()).charCodeAt(0)), te) {
      case 38:
        return z.replace(L, "$1" + B.trim());
      case 58:
        return B.trim() + z.replace(L, "$1" + B.trim());
      default:
        if (0 < 1 * G && 0 < z.indexOf("\f"))
          return z.replace(L, (B.charCodeAt(0) === 58 ? "" : "$1") + B.trim());
    }
    return B + z;
  }
  function o(B, z, G, te) {
    var S = B + ";", Y = 2 * z + 3 * G + 4 * te;
    if (Y === 944) {
      B = S.indexOf(":", 9) + 1;
      var C = S.substring(B, S.length - 1).trim();
      return C = S.substring(0, B).trim() + C + ";", _ === 1 || _ === 2 && s(C, 1) ? "-webkit-" + C + C : C;
    }
    if (_ === 0 || _ === 2 && !s(S, 1))
      return S;
    switch (Y) {
      case 1015:
        return S.charCodeAt(10) === 97 ? "-webkit-" + S + S : S;
      case 951:
        return S.charCodeAt(3) === 116 ? "-webkit-" + S + S : S;
      case 963:
        return S.charCodeAt(5) === 110 ? "-webkit-" + S + S : S;
      case 1009:
        if (S.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + S + S;
      case 978:
        return "-webkit-" + S + "-moz-" + S + S;
      case 1019:
      case 983:
        return "-webkit-" + S + "-moz-" + S + "-ms-" + S + S;
      case 883:
        if (S.charCodeAt(8) === 45)
          return "-webkit-" + S + S;
        if (0 < S.indexOf("image-set(", 11))
          return S.replace(K, "$1-webkit-$2") + S;
        break;
      case 932:
        if (S.charCodeAt(4) === 45)
          switch (S.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + S.replace("-grow", "") + "-webkit-" + S + "-ms-" + S.replace("grow", "positive") + S;
            case 115:
              return "-webkit-" + S + "-ms-" + S.replace("shrink", "negative") + S;
            case 98:
              return "-webkit-" + S + "-ms-" + S.replace("basis", "preferred-size") + S;
          }
        return "-webkit-" + S + "-ms-" + S + S;
      case 964:
        return "-webkit-" + S + "-ms-flex-" + S + S;
      case 1023:
        if (S.charCodeAt(8) !== 99)
          break;
        return C = S.substring(S.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + S + "-ms-flex-pack" + C + S;
      case 1005:
        return v.test(S) ? S.replace(w, ":-webkit-") + S.replace(w, ":-moz-") + S : S;
      case 1e3:
        switch (C = S.substring(13).trim(), z = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(z)) {
          case 226:
            C = S.replace(u, "tb");
            break;
          case 232:
            C = S.replace(u, "tb-rl");
            break;
          case 220:
            C = S.replace(u, "lr");
            break;
          default:
            return S;
        }
        return "-webkit-" + S + "-ms-" + C + S;
      case 1017:
        if (S.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (z = (S = B).length - 10, C = (S.charCodeAt(z) === 33 ? S.substring(0, z) : S).substring(B.indexOf(":", 7) + 1).trim(), Y = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8))
              break;
          case 115:
            S = S.replace(C, "-webkit-" + C) + ";" + S;
            break;
          case 207:
          case 102:
            S = S.replace(C, "-webkit-" + (102 < Y ? "inline-" : "") + "box") + ";" + S.replace(C, "-webkit-" + C) + ";" + S.replace(C, "-ms-" + C + "box") + ";" + S;
        }
        return S + ";";
      case 938:
        if (S.charCodeAt(5) === 45)
          switch (S.charCodeAt(6)) {
            case 105:
              return C = S.replace("-items", ""), "-webkit-" + S + "-webkit-box-" + C + "-ms-flex-" + C + S;
            case 115:
              return "-webkit-" + S + "-ms-flex-item-" + S.replace(k, "") + S;
            default:
              return "-webkit-" + S + "-ms-flex-line-pack" + S.replace("align-content", "").replace(k, "") + S;
          }
        break;
      case 973:
      case 989:
        if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (O.test(B) === !0)
          return (C = B.substring(B.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(B.replace("stretch", "fill-available"), z, G, te).replace(":fill-available", ":stretch") : S.replace(C, "-webkit-" + C) + S.replace(C, "-moz-" + C.replace("fill-", "")) + S;
        break;
      case 962:
        if (S = "-webkit-" + S + (S.charCodeAt(5) === 102 ? "-ms-" + S : "") + S, G + te === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf("transform", 10))
          return S.substring(0, S.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + S;
    }
    return S;
  }
  function s(B, z) {
    var G = B.indexOf(z === 1 ? ":" : "{"), te = B.substring(0, z !== 3 ? G : 10);
    return G = B.substring(G + 1, B.length - 1), Q(z !== 2 ? te : te.replace(A, "$1"), G, z);
  }
  function i(B, z) {
    var G = o(z, z.charCodeAt(0), z.charCodeAt(1), z.charCodeAt(2));
    return G !== z + ";" ? G.replace(b, " or ($1)").substring(4) : "(" + z + ")";
  }
  function c(B, z, G, te, S, Y, C, Z, q, H) {
    for (var g = 0, V = z, $; g < J; ++g)
      switch ($ = R[g].call(l, B, V, G, te, S, Y, C, Z, q, H)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          V = $;
      }
    if (V !== z)
      return V;
  }
  function d(B) {
    switch (B) {
      case void 0:
      case null:
        J = R.length = 0;
        break;
      default:
        if (typeof B == "function")
          R[J++] = B;
        else if (typeof B == "object")
          for (var z = 0, G = B.length; z < G; ++z)
            d(B[z]);
        else
          se = !!B | 0;
    }
    return d;
  }
  function a(B) {
    return B = B.prefix, B !== void 0 && (Q = null, B ? typeof B != "function" ? _ = 1 : (_ = 2, Q = B) : _ = 0), a;
  }
  function l(B, z) {
    var G = B;
    if (33 > G.charCodeAt(0) && (G = G.trim()), ie = G, G = [ie], 0 < J) {
      var te = c(-1, z, G, G, E, U, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (z = te);
    }
    var S = n(N, G, z, 0, 0);
    return 0 < J && (te = c(-2, S, G, G, E, U, S.length, 0, 0, 0), te !== void 0 && (S = te)), ie = "", T = 0, U = E = 1, S;
  }
  var f = /^\0+/g, y = /[\0\r\f]/g, w = /: */g, v = /zoo|gra/, M = /([,: ])(transform)/g, m = /,\r+?/g, L = /([\t\r\n ])*\f?&/g, F = /@(k\w+)\s*(\S*)\s*/, I = /::(place)/g, P = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, h = /\(\s*(.*)\s*\)/g, b = /([\s\S]*?);/g, k = /-self|flex-/g, A = /[^]*?(:[rp][el]a[\w-]+)[^]*/, O = /stretch|:\s*\w+\-(?:conte|avail)/, K = /([^-])(image-set\()/, U = 1, E = 1, T = 0, _ = 1, N = [], R = [], J = 0, Q = null, se = 0, ie = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var _o = {
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
function To(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var Ao = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vn = /* @__PURE__ */ To(
  function(e) {
    return Ao.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), on = {}, Po = {
  get exports() {
    return on;
  },
  set exports(e) {
    on = e;
  }
}, Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function Io() {
  if (Gn)
    return Se;
  Gn = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function I(u) {
    if (typeof u == "object" && u !== null) {
      var h = u.$$typeof;
      switch (h) {
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
                case v:
                case w:
                case i:
                  return u;
                default:
                  return h;
              }
          }
        case t:
          return h;
      }
    }
  }
  function P(u) {
    return I(u) === a;
  }
  return Se.AsyncMode = d, Se.ConcurrentMode = a, Se.ContextConsumer = c, Se.ContextProvider = i, Se.Element = n, Se.ForwardRef = l, Se.Fragment = r, Se.Lazy = v, Se.Memo = w, Se.Portal = t, Se.Profiler = s, Se.StrictMode = o, Se.Suspense = f, Se.isAsyncMode = function(u) {
    return P(u) || I(u) === d;
  }, Se.isConcurrentMode = P, Se.isContextConsumer = function(u) {
    return I(u) === c;
  }, Se.isContextProvider = function(u) {
    return I(u) === i;
  }, Se.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, Se.isForwardRef = function(u) {
    return I(u) === l;
  }, Se.isFragment = function(u) {
    return I(u) === r;
  }, Se.isLazy = function(u) {
    return I(u) === v;
  }, Se.isMemo = function(u) {
    return I(u) === w;
  }, Se.isPortal = function(u) {
    return I(u) === t;
  }, Se.isProfiler = function(u) {
    return I(u) === s;
  }, Se.isStrictMode = function(u) {
    return I(u) === o;
  }, Se.isSuspense = function(u) {
    return I(u) === f;
  }, Se.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === y || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === w || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === m || u.$$typeof === L || u.$$typeof === F || u.$$typeof === M);
  }, Se.typeOf = I, Se;
}
var Ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function Yo() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function I(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === r || g === a || g === s || g === o || g === f || g === y || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === w || g.$$typeof === i || g.$$typeof === c || g.$$typeof === l || g.$$typeof === m || g.$$typeof === L || g.$$typeof === F || g.$$typeof === M);
    }
    function P(g) {
      if (typeof g == "object" && g !== null) {
        var V = g.$$typeof;
        switch (V) {
          case n:
            var $ = g.type;
            switch ($) {
              case d:
              case a:
              case r:
              case s:
              case o:
              case f:
                return $;
              default:
                var j = $ && $.$$typeof;
                switch (j) {
                  case c:
                  case l:
                  case v:
                  case w:
                  case i:
                    return j;
                  default:
                    return V;
                }
            }
          case t:
            return V;
        }
      }
    }
    var u = d, h = a, b = c, k = i, A = n, O = l, K = r, U = v, E = w, T = t, _ = s, N = o, R = f, J = !1;
    function Q(g) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(g) || P(g) === d;
    }
    function se(g) {
      return P(g) === a;
    }
    function ie(g) {
      return P(g) === c;
    }
    function B(g) {
      return P(g) === i;
    }
    function z(g) {
      return typeof g == "object" && g !== null && g.$$typeof === n;
    }
    function G(g) {
      return P(g) === l;
    }
    function te(g) {
      return P(g) === r;
    }
    function S(g) {
      return P(g) === v;
    }
    function Y(g) {
      return P(g) === w;
    }
    function C(g) {
      return P(g) === t;
    }
    function Z(g) {
      return P(g) === s;
    }
    function q(g) {
      return P(g) === o;
    }
    function H(g) {
      return P(g) === f;
    }
    Ce.AsyncMode = u, Ce.ConcurrentMode = h, Ce.ContextConsumer = b, Ce.ContextProvider = k, Ce.Element = A, Ce.ForwardRef = O, Ce.Fragment = K, Ce.Lazy = U, Ce.Memo = E, Ce.Portal = T, Ce.Profiler = _, Ce.StrictMode = N, Ce.Suspense = R, Ce.isAsyncMode = Q, Ce.isConcurrentMode = se, Ce.isContextConsumer = ie, Ce.isContextProvider = B, Ce.isElement = z, Ce.isForwardRef = G, Ce.isFragment = te, Ce.isLazy = S, Ce.isMemo = Y, Ce.isPortal = C, Ce.isProfiler = Z, Ce.isStrictMode = q, Ce.isSuspense = H, Ce.isValidElementType = I, Ce.typeOf = P;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Io() : e.exports = Yo();
})(Po);
var An = on, Oo = {
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
}, Lo = {
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
}, Wr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Pn = {};
Pn[An.ForwardRef] = Ro;
Pn[An.Memo] = Wr;
function Un(e) {
  return An.isMemo(e) ? Wr : Pn[e.$$typeof] || Oo;
}
var No = Object.defineProperty, Bo = Object.getOwnPropertyNames, Kn = Object.getOwnPropertySymbols, Ho = Object.getOwnPropertyDescriptor, zo = Object.getPrototypeOf, Jn = Object.prototype;
function jr(e, n, t) {
  if (typeof n != "string") {
    if (Jn) {
      var r = zo(n);
      r && r !== Jn && jr(e, r, t);
    }
    var o = Bo(n);
    Kn && (o = o.concat(Kn(n)));
    for (var s = Un(e), i = Un(n), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!Lo[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = Ho(n, d);
        try {
          No(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Fo = jr;
function Le() {
  return (Le = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var qn = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, sn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Et.typeOf(e);
}, zt = Object.freeze([]), Ke = Object.freeze({});
function ht(e) {
  return typeof e == "function";
}
function an(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function In(e) {
  return e && typeof e.styledComponentId == "string";
}
var pt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Yn = typeof window < "u" && "HTMLElement" in window, Wo = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), jo = {}, Zo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Vo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Fe(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Vo.apply(void 0, [Zo[e]].concat(t)).trim());
}
var Go = function() {
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
}(), Bt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), Dt = 1, Yt = function(e) {
  if (Bt.has(e))
    return Bt.get(e);
  for (; Ft.has(Dt); )
    Dt++;
  var n = Dt++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Fe(16, "" + n), Bt.set(e, n), Ft.set(n, e), n;
}, Xo = function(e) {
  return Ft.get(e);
}, Uo = function(e, n) {
  n >= Dt && (Dt = n + 1), Bt.set(e, n), Ft.set(n, e);
}, Ko = "style[" + pt + '][data-styled-version="5.3.8"]', Jo = new RegExp("^" + pt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), qo = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, Qo = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Jo);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (Uo(a, d), qo(e, a, c[3]), e.getTag().insertRules(d, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, es = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Zr = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(pt))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(pt, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = es();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, ts = function() {
  function e(t) {
    var r = this.element = Zr(t);
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
}(), ns = function() {
  function e(t) {
    var r = this.element = Zr(t);
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
}(), rs = function() {
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
}(), Qn = Yn, os = { isServer: !Yn, useCSSOMInjection: !Wo }, Wt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ke), r === void 0 && (r = {}), this.options = Le({}, os, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Yn && Qn && (Qn = !1, function(s) {
      for (var i = document.querySelectorAll(Ko), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(pt) !== "active" && (Qo(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Yt(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Le({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new rs(i) : s ? new ts(i) : new ns(i), new Go(t)));
    var t, r, o, s, i;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (Yt(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Yt(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(Yt(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, s = "", i = 0; i < o; i++) {
        var c = Xo(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = r.getGroup(i);
          if (d && a && d.size) {
            var l = pt + ".g" + i + '[id="' + c + '"]', f = "";
            d !== void 0 && d.forEach(function(y) {
              y.length > 0 && (f += y + ",");
            }), s += "" + a + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ss = /(a)(d)/gi, er = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function cn(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = er(n % 52) + t;
  return (er(n % 52) + t).replace(ss, "$1-$2");
}
var et = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Vr = function(e) {
  return et(5381, e);
};
function Gr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (ht(t) && !In(t))
      return !1;
  }
  return !0;
}
var is = Vr("5.3.8"), as = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Gr(n), this.componentId = t, this.baseHash = et(is, t), this.baseStyle = r, Wt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = rt(this.rules, n, t, r).join(""), c = cn(et(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = r(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = et(this.baseHash, r.hash), f = "", y = 0; y < a; y++) {
        var w = this.rules[y];
        if (typeof w == "string")
          f += w, process.env.NODE_ENV !== "production" && (l = et(l, w + y));
        else if (w) {
          var v = rt(w, n, t, r), M = Array.isArray(v) ? v.join("") : v;
          l = et(l, M + y), f += M;
        }
      }
      if (f) {
        var m = cn(l >>> 0);
        if (!t.hasNameForId(o, m)) {
          var L = r(f, "." + m, void 0, o);
          t.insertRules(o, m, L);
        }
        s.push(m);
      }
    }
    return s.join(" ");
  }, e;
}(), cs = /^\s*\/\/.*$/gm, ls = [":", "[", ".", "#"];
function ds(e) {
  var n, t, r, o, s = e === void 0 ? Ke : e, i = s.options, c = i === void 0 ? Ke : i, d = s.plugins, a = d === void 0 ? zt : d, l = new Eo(c), f = [], y = function(M) {
    function m(L) {
      if (L)
        try {
          M(L + "}");
        } catch {
        }
    }
    return function(L, F, I, P, u, h, b, k, A, O) {
      switch (L) {
        case 1:
          if (A === 0 && F.charCodeAt(0) === 64)
            return M(F + ";"), "";
          break;
        case 2:
          if (k === 0)
            return F + "/*|*/";
          break;
        case 3:
          switch (k) {
            case 102:
            case 112:
              return M(I[0] + F), "";
            default:
              return F + (O === 0 ? "/*|*/" : "");
          }
        case -2:
          F.split("/*|*/}").forEach(m);
      }
    };
  }(function(M) {
    f.push(M);
  }), w = function(M, m, L) {
    return m === 0 && ls.indexOf(L[t.length]) !== -1 || L.match(o) ? M : "." + n;
  };
  function v(M, m, L, F) {
    F === void 0 && (F = "&");
    var I = M.replace(cs, ""), P = m && L ? L + " " + m + " { " + I + " }" : I;
    return n = F, t = m, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(L || !m ? "" : m, P);
  }
  return l.use([].concat(a, [function(M, m, L) {
    M === 2 && L.length && L[0].lastIndexOf(t) > 0 && (L[0] = L[0].replace(r, w));
  }, y, function(M) {
    if (M === -2) {
      var m = f;
      return f = [], m;
    }
  }])), v.hash = a.length ? a.reduce(function(M, m) {
    return m.name || Fe(15), et(M, m.name);
  }, 5381).toString() : "", v;
}
var Xr = nt.createContext();
Xr.Consumer;
var Ur = nt.createContext(), us = (Ur.Consumer, new Wt()), ln = ds();
function Kr() {
  return Je(Xr) || us;
}
function Jr() {
  return Je(Ur) || ln;
}
var qr = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = ln);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Fe(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = ln), this.name + n.hash;
  }, e;
}(), fs = /([A-Z])/, hs = /([A-Z])/g, ps = /^ms-/, ms = function(e) {
  return "-" + e.toLowerCase();
};
function tr(e) {
  return fs.test(e) ? e.replace(hs, ms).replace(ps, "-ms-") : e;
}
var nr = function(e) {
  return e == null || e === !1 || e === "";
};
function rt(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = rt(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (nr(e))
    return "";
  if (In(e))
    return "." + e.styledComponentId;
  if (ht(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var d = e(n);
    return process.env.NODE_ENV !== "production" && Et.isElement(d) && console.warn(an(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), rt(d, n, t, r);
  }
  var a;
  return e instanceof qr ? t ? (e.inject(t, r), e.getName(r)) : e : sn(e) ? function l(f, y) {
    var w, v, M = [];
    for (var m in f)
      f.hasOwnProperty(m) && !nr(f[m]) && (Array.isArray(f[m]) && f[m].isCss || ht(f[m]) ? M.push(tr(m) + ":", f[m], ";") : sn(f[m]) ? M.push.apply(M, l(f[m], m)) : M.push(tr(m) + ": " + (w = m, (v = f[m]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || w in _o ? String(v).trim() : v + "px") + ";"));
    return y ? [y + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var rr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Gt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return ht(e) || sn(e) ? rr(rt(qn(zt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : rr(rt(qn(e, t)));
}
var or = /invalid hook call/i, Ot = /* @__PURE__ */ new Set(), Qr = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (or.test(s))
          o = !1, Ot.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          r.apply(void 0, [s].concat(c));
        }
      }, ge(), o && !Ot.has(t) && (console.warn(t), Ot.add(t));
    } catch (s) {
      or.test(s.message) && Ot.delete(t);
    } finally {
      console.error = r;
    }
  }
}, eo = function(e, n, t) {
  return t === void 0 && (t = Ke), e.theme !== t.theme && e.theme || n || t.theme;
}, gs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ys = /(^-|-$)/g;
function Kt(e) {
  return e.replace(gs, "-").replace(ys, "");
}
var On = function(e) {
  return cn(Vr(e) >>> 0);
};
function Lt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var dn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, vs = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function xs(e, n, t) {
  var r = e[t];
  dn(n) && dn(r) ? to(r, n) : e[t] = n;
}
function to(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (dn(i))
      for (var c in i)
        vs(c) && xs(e, i[c], c);
  }
  return e;
}
var mt = nt.createContext();
mt.Consumer;
function bs(e) {
  var n = Je(mt), t = ke(function() {
    return function(r, o) {
      if (!r)
        return Fe(14);
      if (ht(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Fe(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Fe(8) : o ? Le({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? nt.createElement(mt.Provider, { value: t }, e.children) : null;
}
var Jt = {};
function no(e, n, t) {
  var r = In(e), o = !Lt(e), s = n.attrs, i = s === void 0 ? zt : s, c = n.componentId, d = c === void 0 ? function(F, I) {
    var P = typeof F != "string" ? "sc" : Kt(F);
    Jt[P] = (Jt[P] || 0) + 1;
    var u = P + "-" + On("5.3.8" + P + Jt[P]);
    return I ? I + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(F) {
    return Lt(F) ? "styled." + F : "Styled(" + an(F) + ")";
  }(e) : a, f = n.displayName && n.componentId ? Kt(n.displayName) + "-" + n.componentId : n.componentId || d, y = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, w = n.shouldForwardProp;
  r && e.shouldForwardProp && (w = n.shouldForwardProp ? function(F, I, P) {
    return e.shouldForwardProp(F, I, P) && n.shouldForwardProp(F, I, P);
  } : e.shouldForwardProp);
  var v, M = new as(t, f, r ? e.componentStyle : void 0), m = M.isStatic && i.length === 0, L = function(F, I) {
    return function(P, u, h, b) {
      var k = P.attrs, A = P.componentStyle, O = P.defaultProps, K = P.foldedComponentIds, U = P.shouldForwardProp, E = P.styledComponentId, T = P.target;
      process.env.NODE_ENV !== "production" && Wn(E);
      var _ = function(te, S, Y) {
        te === void 0 && (te = Ke);
        var C = Le({}, S, { theme: te }), Z = {};
        return Y.forEach(function(q) {
          var H, g, V, $ = q;
          for (H in ht($) && ($ = $(C)), $)
            C[H] = Z[H] = H === "className" ? (g = Z[H], V = $[H], g && V ? g + " " + V : g || V) : $[H];
        }), [C, Z];
      }(eo(u, Je(mt), O) || Ke, u, k), N = _[0], R = _[1], J = function(te, S, Y, C) {
        var Z = Kr(), q = Jr(), H = S ? te.generateAndInjectStyles(Ke, Z, q) : te.generateAndInjectStyles(Y, Z, q);
        return process.env.NODE_ENV !== "production" && Wn(H), process.env.NODE_ENV !== "production" && !S && C && C(H), H;
      }(A, b, N, process.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), Q = h, se = R.$as || u.$as || R.as || u.as || T, ie = Lt(se), B = R !== u ? Le({}, u, {}, R) : u, z = {};
      for (var G in B)
        G[0] !== "$" && G !== "as" && (G === "forwardedAs" ? z.as = B[G] : (U ? U(G, Vn, se) : !ie || Vn(G)) && (z[G] = B[G]));
      return u.style && R.style !== u.style && (z.style = Le({}, u.style, {}, R.style)), z.className = Array.prototype.concat(K, E, J !== E ? J : null, u.className, R.className).filter(Boolean).join(" "), z.ref = Q, Co(se, z);
    }(v, F, I, m);
  };
  return L.displayName = l, (v = nt.forwardRef(L)).attrs = y, v.componentStyle = M, v.displayName = l, v.shouldForwardProp = w, v.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : zt, v.styledComponentId = f, v.target = r ? e.target : e, v.withComponent = function(F) {
    var I = n.componentId, P = function(h, b) {
      if (h == null)
        return {};
      var k, A, O = {}, K = Object.keys(h);
      for (A = 0; A < K.length; A++)
        k = K[A], b.indexOf(k) >= 0 || (O[k] = h[k]);
      return O;
    }(n, ["componentId"]), u = I && I + "-" + (Lt(F) ? F : Kt(an(F)));
    return no(F, Le({}, P, { attrs: y, componentId: u }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(F) {
    this._foldedDefaultProps = r ? to({}, e.defaultProps, F) : F;
  } }), process.env.NODE_ENV !== "production" && (Qr(l, f), v.warnTooManyClasses = function(F, I) {
    var P = {}, u = !1;
    return function(h) {
      if (!u && (P[h] = !0, Object.keys(P).length >= 200)) {
        var b = I ? ' with the id of "' + I + '"' : "";
        console.warn("Over 200 classes were generated for component " + F + b + `.
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
  }(l, f)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && Fo(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var un = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Ke), !Et.isValidElementType(r))
      return Fe(1, String(r));
    var s = function() {
      return t(r, o, Gt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Le({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Le({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(no, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  un[e] = un(e);
});
var ws = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Gr(t), Wt.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(rt(this.rules, r, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && Wt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function Ss(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Gt.apply(void 0, [e].concat(t)), s = "sc-global-" + On(JSON.stringify(o)), i = new ws(o, s);
  function c(a) {
    var l = Kr(), f = Jr(), y = Je(mt), w = ge(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && nt.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(w, a, l, y, f), Vt(function() {
      if (!l.server)
        return d(w, a, l, y, f), function() {
          return i.removeStyles(w, l);
        };
    }, [w, a, l, y, f]), null;
  }
  function d(a, l, f, y, w) {
    if (i.isStatic)
      i.renderStyles(a, jo, f, w);
    else {
      var v = Le({}, l, { theme: eo(l, y, c.defaultProps) });
      i.renderStyles(a, v, f, w);
    }
  }
  return process.env.NODE_ENV !== "production" && Qr(s), nt.memo(c);
}
function xt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Gt.apply(void 0, [e].concat(t)).join(""), s = On(o);
  return new qr(s, o);
}
var Xt = function() {
  return Je(mt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const x = un, $t = "reactSchedulerOutsideWrapper", Oe = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Cs = Ss`

  #${$t} {
    font-family: ${Oe};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${$t} *,
 #${$t} *:before,
 #${$t} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Ms = {
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
}, ks = {
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
}, bt = `
margin: 0;
padding: 0;
`, wt = `
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
const $e = 50, je = 24, St = 16, tt = 40, gt = tt + St + je, yt = 84, ye = 56, Ie = 196, Ye = 12, Te = 50, vt = 24, _t = 16, fn = 40, $s = vt + _t + fn, sr = 24, ir = 52, Re = {
  topRow: `600 14px ${Oe}`,
  middleRow: `400 10px ${Oe}`,
  bottomRow: {
    name: `600 14px ${Oe}`,
    number: `600 10px ${Oe}`,
    hoursInDay: `400 9px ${Oe}`
  }
}, ft = 3, Ds = 1.6, Es = 4.5, hn = 12, jt = 24, _s = "reactSchedulerCanvasHeaderWrapper", ro = "reactSchedulerCanvasWrapper", We = $t, Ts = 4, Ln = 48, Ue = 5, As = 40, ar = 8, Rn = je / 2 + 2, oo = St / 2 + je + 1, cr = 2, De = 60, Pe = 21, so = 58, io = "reactSchedulerBody";
var ot = {}, Ps = {
  get exports() {
    return ot;
  },
  set exports(e) {
    ot = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(_e, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", y = "quarter", w = "year", v = "date", M = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, F = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
      var T = ["th", "st", "nd", "rd"], _ = E % 100;
      return "[" + E + (T[(_ - 20) % 10] || T[_] || T[0]) + "]";
    } }, I = function(E, T, _) {
      var N = String(E);
      return !N || N.length >= T ? E : "" + Array(T + 1 - N.length).join(_) + E;
    }, P = { s: I, z: function(E) {
      var T = -E.utcOffset(), _ = Math.abs(T), N = Math.floor(_ / 60), R = _ % 60;
      return (T <= 0 ? "+" : "-") + I(N, 2, "0") + ":" + I(R, 2, "0");
    }, m: function E(T, _) {
      if (T.date() < _.date())
        return -E(_, T);
      var N = 12 * (_.year() - T.year()) + (_.month() - T.month()), R = T.clone().add(N, f), J = _ - R < 0, Q = T.clone().add(N + (J ? -1 : 1), f);
      return +(-(N + (_ - R) / (J ? R - Q : Q - R)) || 0);
    }, a: function(E) {
      return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
    }, p: function(E) {
      return { M: f, y: w, w: l, d: a, D: v, h: d, m: c, s: i, ms: s, Q: y }[E] || String(E || "").toLowerCase().replace(/s$/, "");
    }, u: function(E) {
      return E === void 0;
    } }, u = "en", h = {};
    h[u] = F;
    var b = function(E) {
      return E instanceof K;
    }, k = function E(T, _, N) {
      var R;
      if (!T)
        return u;
      if (typeof T == "string") {
        var J = T.toLowerCase();
        h[J] && (R = J), _ && (h[J] = _, R = J);
        var Q = T.split("-");
        if (!R && Q.length > 1)
          return E(Q[0]);
      } else {
        var se = T.name;
        h[se] = T, R = se;
      }
      return !N && R && (u = R), R || !N && u;
    }, A = function(E, T) {
      if (b(E))
        return E.clone();
      var _ = typeof T == "object" ? T : {};
      return _.date = E, _.args = arguments, new K(_);
    }, O = P;
    O.l = k, O.i = b, O.w = function(E, T) {
      return A(E, { locale: T.$L, utc: T.$u, x: T.$x, $offset: T.$offset });
    };
    var K = function() {
      function E(_) {
        this.$L = k(_.locale, null, !0), this.parse(_);
      }
      var T = E.prototype;
      return T.parse = function(_) {
        this.$d = function(N) {
          var R = N.date, J = N.utc;
          if (R === null)
            return new Date(NaN);
          if (O.u(R))
            return new Date();
          if (R instanceof Date)
            return new Date(R);
          if (typeof R == "string" && !/Z$/i.test(R)) {
            var Q = R.match(m);
            if (Q) {
              var se = Q[2] - 1 || 0, ie = (Q[7] || "0").substring(0, 3);
              return J ? new Date(Date.UTC(Q[1], se, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, ie)) : new Date(Q[1], se, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, ie);
            }
          }
          return new Date(R);
        }(_), this.$x = _.x || {}, this.init();
      }, T.init = function() {
        var _ = this.$d;
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
      }, T.$utils = function() {
        return O;
      }, T.isValid = function() {
        return this.$d.toString() !== M;
      }, T.isSame = function(_, N) {
        var R = A(_);
        return this.startOf(N) <= R && R <= this.endOf(N);
      }, T.isAfter = function(_, N) {
        return A(_) < this.startOf(N);
      }, T.isBefore = function(_, N) {
        return this.endOf(N) < A(_);
      }, T.$g = function(_, N, R) {
        return O.u(_) ? this[N] : this.set(R, _);
      }, T.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, T.valueOf = function() {
        return this.$d.getTime();
      }, T.startOf = function(_, N) {
        var R = this, J = !!O.u(N) || N, Q = O.p(_), se = function(C, Z) {
          var q = O.w(R.$u ? Date.UTC(R.$y, Z, C) : new Date(R.$y, Z, C), R);
          return J ? q : q.endOf(a);
        }, ie = function(C, Z) {
          return O.w(R.toDate()[C].apply(R.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), R);
        }, B = this.$W, z = this.$M, G = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (Q) {
          case w:
            return J ? se(1, 0) : se(31, 11);
          case f:
            return J ? se(1, z) : se(0, z + 1);
          case l:
            var S = this.$locale().weekStart || 0, Y = (B < S ? B + 7 : B) - S;
            return se(J ? G - Y : G + (6 - Y), z);
          case a:
          case v:
            return ie(te + "Hours", 0);
          case d:
            return ie(te + "Minutes", 1);
          case c:
            return ie(te + "Seconds", 2);
          case i:
            return ie(te + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, T.endOf = function(_) {
        return this.startOf(_, !1);
      }, T.$set = function(_, N) {
        var R, J = O.p(_), Q = "set" + (this.$u ? "UTC" : ""), se = (R = {}, R[a] = Q + "Date", R[v] = Q + "Date", R[f] = Q + "Month", R[w] = Q + "FullYear", R[d] = Q + "Hours", R[c] = Q + "Minutes", R[i] = Q + "Seconds", R[s] = Q + "Milliseconds", R)[J], ie = J === a ? this.$D + (N - this.$W) : N;
        if (J === f || J === w) {
          var B = this.clone().set(v, 1);
          B.$d[se](ie), B.init(), this.$d = B.set(v, Math.min(this.$D, B.daysInMonth())).$d;
        } else
          se && this.$d[se](ie);
        return this.init(), this;
      }, T.set = function(_, N) {
        return this.clone().$set(_, N);
      }, T.get = function(_) {
        return this[O.p(_)]();
      }, T.add = function(_, N) {
        var R, J = this;
        _ = Number(_);
        var Q = O.p(N), se = function(z) {
          var G = A(J);
          return O.w(G.date(G.date() + Math.round(z * _)), J);
        };
        if (Q === f)
          return this.set(f, this.$M + _);
        if (Q === w)
          return this.set(w, this.$y + _);
        if (Q === a)
          return se(1);
        if (Q === l)
          return se(7);
        var ie = (R = {}, R[c] = r, R[d] = o, R[i] = t, R)[Q] || 1, B = this.$d.getTime() + _ * ie;
        return O.w(B, this);
      }, T.subtract = function(_, N) {
        return this.add(-1 * _, N);
      }, T.format = function(_) {
        var N = this, R = this.$locale();
        if (!this.isValid())
          return R.invalidDate || M;
        var J = _ || "YYYY-MM-DDTHH:mm:ssZ", Q = O.z(this), se = this.$H, ie = this.$m, B = this.$M, z = R.weekdays, G = R.months, te = function(Z, q, H, g) {
          return Z && (Z[q] || Z(N, J)) || H[q].slice(0, g);
        }, S = function(Z) {
          return O.s(se % 12 || 12, Z, "0");
        }, Y = R.meridiem || function(Z, q, H) {
          var g = Z < 12 ? "AM" : "PM";
          return H ? g.toLowerCase() : g;
        }, C = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: B + 1, MM: O.s(B + 1, 2, "0"), MMM: te(R.monthsShort, B, G, 3), MMMM: te(G, B), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: te(R.weekdaysMin, this.$W, z, 2), ddd: te(R.weekdaysShort, this.$W, z, 3), dddd: z[this.$W], H: String(se), HH: O.s(se, 2, "0"), h: S(1), hh: S(2), a: Y(se, ie, !0), A: Y(se, ie, !1), m: String(ie), mm: O.s(ie, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: Q };
        return J.replace(L, function(Z, q) {
          return q || C[Z] || Q.replace(":", "");
        });
      }, T.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, T.diff = function(_, N, R) {
        var J, Q = O.p(N), se = A(_), ie = (se.utcOffset() - this.utcOffset()) * r, B = this - se, z = O.m(this, se);
        return z = (J = {}, J[w] = z / 12, J[f] = z, J[y] = z / 3, J[l] = (B - ie) / 6048e5, J[a] = (B - ie) / 864e5, J[d] = B / o, J[c] = B / r, J[i] = B / t, J)[Q] || B, R ? z : O.a(z);
      }, T.daysInMonth = function() {
        return this.endOf(f).$D;
      }, T.$locale = function() {
        return h[this.$L];
      }, T.locale = function(_, N) {
        if (!_)
          return this.$L;
        var R = this.clone(), J = k(_, N, !0);
        return J && (R.$L = J), R;
      }, T.clone = function() {
        return O.w(this.$d, this);
      }, T.toDate = function() {
        return new Date(this.valueOf());
      }, T.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, T.toISOString = function() {
        return this.$d.toISOString();
      }, T.toString = function() {
        return this.$d.toUTCString();
      }, E;
    }(), U = K.prototype;
    return A.prototype = U, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", w], ["$D", v]].forEach(function(E) {
      U[E[1]] = function(T) {
        return this.$g(T, E[0], E[1]);
      };
    }), A.extend = function(E, T) {
      return E.$i || (E(T, K, A), E.$i = !0), A;
    }, A.locale = k, A.isDayjs = b, A.unix = function(E) {
      return A(1e3 * E);
    }, A.en = h[u], A.Ls = h, A.p = {}, A;
  });
})(Ps);
const D = ot, lr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Nn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, ao = (e, n) => D(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), co = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Nn(e),
  isCurrentDay: e.isSame(D(), "day"),
  year: parseInt(e.format("YYYY"))
});
let Rt = null;
const Is = (e) => {
  if (Rt)
    return Rt;
  const n = document.createElement("canvas");
  n.width = 12, n.height = 12;
  const t = n.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Rt = e.createPattern(n, "repeat"), Rt) : null;
}, Bn = (e, n, t, r, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, ye), c && !s) {
    const d = Is(e);
    d && (e.fillStyle = d, e.fillRect(n, t, r, ye));
  }
  e.strokeRect(n + 0.5, t + 0.5, r, ye);
}, Hn = (e, n) => {
  let t = 0;
  for (const r of n)
    r <= e && t++;
  return t * Pe;
}, Ys = (e, n, t, r, o, s = []) => {
  for (let i = 0; i < n; i++) {
    const c = Hn(i, s);
    for (let d = 0; d <= t; d++) {
      const a = D(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(D(), "day"), f = a.isBefore(D(), "day");
      Bn(
        e,
        d * $e,
        i * ye + c,
        $e,
        Nn(a),
        l,
        o,
        f
      );
    }
  }
}, Os = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, Ls = (e, n, t, r, o, s = []) => {
  let i = 0, c = -(r.dayOfMonth - 1) * Ye;
  const d = n * ye + s.length * Pe;
  for (let a = 0; a <= t; a++) {
    const f = D(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(D(), "week");
    for (let y = 0; y < n; y++) {
      const w = Hn(y, s);
      Bn(e, i, y * ye + w, yt, !0, f, o);
    }
    i += yt;
  }
  for (let a = 0; a < t; a++) {
    const l = ao(r, a) * Ye;
    Os(e, c, d, o), c += l;
  }
}, Rs = (e, n, t, r, o, s = []) => {
  const i = D(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let c = 0; c < n; c++) {
    const d = Hn(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = D() : a > Math.floor(t / 2) ? l = D().add(a - Math.floor(t / 2), "hours") : l = D().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(D(), "day") && l.isSame(D(), "hour");
      Bn(
        e,
        a * Te + Te / 2 - 0.5,
        c * ye + d,
        Te,
        Nn(l),
        f,
        o
      );
    }
  }
}, Ns = (e, n, t, r, o = !1) => {
  const s = t * ye + n * Pe, i = e.canvas.width, c = s + Pe / 2;
  e.fillStyle = r.mode === "dark" ? r.colors.primary + "80" : r.colors.primary, e.fillRect(0, s, i, Pe), e.strokeStyle = o ? r.colors.subcontractBorder : r.colors.border, e.lineWidth = o ? 2 : 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, c + 0.5), e.lineTo(i, c + 0.5), e.stroke();
}, Bs = (e, n, t, r, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(ro)) {
    switch (n) {
      case 0:
        Ls(e, t, r, o, s, i);
        break;
      case 1:
        Ys(e, t, r, o, s, i);
        break;
      case 2:
        Rs(e, t, r, o, s, i);
        break;
    }
    for (let a = 0; a < i.length; a++)
      Ns(e, a, i[a], s, i[a] === c);
  }
};
var pn = {}, Hs = {
  get exports() {
    return pn;
  },
  set exports(e) {
    pn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(_e, function() {
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
        var y = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), w = this.diff(y, t, !0);
        return w < 0 ? i(this).startOf("week").week() : Math.ceil(w);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(Hs);
const zs = pn;
var mn = {}, Fs = {
  get exports() {
    return mn;
  },
  set exports(e) {
    mn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(_e, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Fs);
const Ws = mn;
var gn = {}, js = {
  get exports() {
    return gn;
  },
  set exports(e) {
    gn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(_e, function() {
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
        var l, f, y, w, v = i(this), M = (l = this.isoWeekYear(), f = this.$u, y = (f ? s.utc : s)().year(l).startOf("year"), w = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (w += 7), y.add(w, t));
        return v.diff(M, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var d = c.startOf;
      c.startOf = function(a, l) {
        var f = this.$utils(), y = !!f.u(l) || l;
        return f.p(a) === "isoweek" ? y ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : d.bind(this)(a, l);
      };
    };
  });
})(js);
const Zs = gn;
var yn = {}, Vs = {
  get exports() {
    return yn;
  },
  set exports(e) {
    yn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(_e, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), f = (d = d || "()")[0] === "(", y = d[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(l, c) : !this.isAfter(l, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(Vs);
const Gs = yn;
var vn = {}, Xs = {
  get exports() {
    return vn;
  },
  set exports(e) {
    vn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(_e, function() {
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, w = function(u) {
      return u instanceof P;
    }, v = function(u, h, b) {
      return new P(u, b, h.$l);
    }, M = function(u) {
      return r.p(u) + "s";
    }, m = function(u) {
      return u < 0;
    }, L = function(u) {
      return m(u) ? Math.ceil(u) : Math.floor(u);
    }, F = function(u) {
      return Math.abs(u);
    }, I = function(u, h) {
      return u ? m(u) ? { negative: !0, format: "" + F(u) + h } : { negative: !1, format: "" + u + h } : { negative: !1, format: "" };
    }, P = function() {
      function u(b, k, A) {
        var O = this;
        if (this.$d = {}, this.$l = A, b === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), k)
          return v(b * y[M(k)], this);
        if (typeof b == "number")
          return this.$ms = b, this.parseFromMilliseconds(), this;
        if (typeof b == "object")
          return Object.keys(b).forEach(function(E) {
            O.$d[M(E)] = b[E];
          }), this.calMilliseconds(), this;
        if (typeof b == "string") {
          var K = b.match(f);
          if (K) {
            var U = K.slice(2).map(function(E) {
              return E != null ? Number(E) : 0;
            });
            return this.$d.years = U[0], this.$d.months = U[1], this.$d.weeks = U[2], this.$d.days = U[3], this.$d.hours = U[4], this.$d.minutes = U[5], this.$d.seconds = U[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var h = u.prototype;
      return h.calMilliseconds = function() {
        var b = this;
        this.$ms = Object.keys(this.$d).reduce(function(k, A) {
          return k + (b.$d[A] || 0) * y[A];
        }, 0);
      }, h.parseFromMilliseconds = function() {
        var b = this.$ms;
        this.$d.years = L(b / a), b %= a, this.$d.months = L(b / l), b %= l, this.$d.days = L(b / c), b %= c, this.$d.hours = L(b / i), b %= i, this.$d.minutes = L(b / s), b %= s, this.$d.seconds = L(b / o), b %= o, this.$d.milliseconds = b;
      }, h.toISOString = function() {
        var b = I(this.$d.years, "Y"), k = I(this.$d.months, "M"), A = +this.$d.days || 0;
        this.$d.weeks && (A += 7 * this.$d.weeks);
        var O = I(A, "D"), K = I(this.$d.hours, "H"), U = I(this.$d.minutes, "M"), E = this.$d.seconds || 0;
        this.$d.milliseconds && (E += this.$d.milliseconds / 1e3);
        var T = I(E, "S"), _ = b.negative || k.negative || O.negative || K.negative || U.negative || T.negative, N = K.format || U.format || T.format ? "T" : "", R = (_ ? "-" : "") + "P" + b.format + k.format + O.format + N + K.format + U.format + T.format;
        return R === "P" || R === "-P" ? "P0D" : R;
      }, h.toJSON = function() {
        return this.toISOString();
      }, h.format = function(b) {
        var k = b || "YYYY-MM-DDTHH:mm:ss", A = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return k.replace(d, function(O, K) {
          return K || String(A[O]);
        });
      }, h.as = function(b) {
        return this.$ms / y[M(b)];
      }, h.get = function(b) {
        var k = this.$ms, A = M(b);
        return A === "milliseconds" ? k %= 1e3 : k = A === "weeks" ? L(k / y[A]) : this.$d[A], k === 0 ? 0 : k;
      }, h.add = function(b, k, A) {
        var O;
        return O = k ? b * y[M(k)] : w(b) ? b.$ms : v(b, this).$ms, v(this.$ms + O * (A ? -1 : 1), this);
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
      }, u;
    }();
    return function(u, h, b) {
      t = b, r = b().$utils(), b.duration = function(O, K) {
        var U = b.locale();
        return v(O, { $l: U }, K);
      }, b.isDuration = w;
      var k = h.prototype.add, A = h.prototype.subtract;
      h.prototype.add = function(O, K) {
        return w(O) && (O = O.asMilliseconds()), k.bind(this)(O, K);
      }, h.prototype.subtract = function(O, K) {
        return w(O) && (O = O.asMilliseconds()), A.bind(this)(O, K);
      };
    };
  });
})(Xs);
const Us = vn;
var Ks = "Expected a function", dr = 0 / 0, Js = "[object Symbol]", qs = /^\s+|\s+$/g, Qs = /^[-+]0x[0-9a-f]+$/i, ei = /^0b[01]+$/i, ti = /^0o[0-7]+$/i, ni = parseInt, ri = typeof _e == "object" && _e && _e.Object === Object && _e, oi = typeof self == "object" && self && self.Object === Object && self, si = ri || oi || Function("return this")(), ii = Object.prototype, ai = ii.toString, ci = Math.max, li = Math.min, qt = function() {
  return si.Date.now();
};
function di(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(Ks);
  n = ur(n) || 0, xn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? ci(ur(t.maxWait) || 0, n) : s, y = "trailing" in t ? !!t.trailing : y);
  function w(h) {
    var b = r, k = o;
    return r = o = void 0, a = h, i = e.apply(k, b), i;
  }
  function v(h) {
    return a = h, c = setTimeout(L, n), l ? w(h) : i;
  }
  function M(h) {
    var b = h - d, k = h - a, A = n - b;
    return f ? li(A, s - k) : A;
  }
  function m(h) {
    var b = h - d, k = h - a;
    return d === void 0 || b >= n || b < 0 || f && k >= s;
  }
  function L() {
    var h = qt();
    if (m(h))
      return F(h);
    c = setTimeout(L, M(h));
  }
  function F(h) {
    return c = void 0, y && r ? w(h) : (r = o = void 0, i);
  }
  function I() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function P() {
    return c === void 0 ? i : F(qt());
  }
  function u() {
    var h = qt(), b = m(h);
    if (r = arguments, o = this, d = h, b) {
      if (c === void 0)
        return v(d);
      if (f)
        return c = setTimeout(L, n), w(d);
    }
    return c === void 0 && (c = setTimeout(L, n)), i;
  }
  return u.cancel = I, u.flush = P, u;
}
function xn(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function ui(e) {
  return !!e && typeof e == "object";
}
function fi(e) {
  return typeof e == "symbol" || ui(e) && ai.call(e) == Js;
}
function ur(e) {
  if (typeof e == "number")
    return e;
  if (fi(e))
    return dr;
  if (xn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(qs, "");
  var t = ei.test(e);
  return t || ti.test(e) ? ni(e.slice(2), t ? 2 : 8) : Qs.test(e) ? dr : +e;
}
var bn = di;
const Ht = [0, 1, 2];
var Tt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Tt || {});
const lo = (e) => Ht.includes(e), dt = (e) => {
  var r;
  const t = (((r = document.getElementById(We)) == null ? void 0 : r.clientWidth) || 0) - Ie;
  switch (e) {
    case 1:
      return Math.ceil(t / $e) * ft;
    case 2:
      return Math.ceil(t / Te) * ft;
    default:
      return Math.ceil(t / yt) * ft;
  }
}, hi = (e) => dt(e) / ft, Ut = (e, n) => {
  const t = dt(n) / 2;
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
}, pi = (e, n) => {
  const t = Ut(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, zn = () => {
  var t;
  return ((((t = document.getElementById(We)) == null ? void 0 : t.clientWidth) || 0) - Ie) * ft;
}, uo = zr({
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
  date: D(),
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
D.extend(zs);
D.extend(Ws);
D.extend(Zs);
D.extend(Gs);
D.extend(Us);
const mi = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = D(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = me(d), [y, w] = me(D()), [v, M] = me(!1), [m, L] = me(dt(l)), F = Ht[l] !== Ht[Ht.length - 1], I = l !== 0, P = ke(() => pi(y, l), [y, l]), u = Ut(y, l).startDate, h = D(u).dayOfYear(), b = co(u), k = ge(null), A = ge(!1), O = ge(null), [K, U] = me([{ x: 0, y: 0 }]), E = ce(
    (Y, C = "auto") => {
      var q, H, g, V;
      const Z = zn();
      switch (Y) {
        case "back":
          return (q = k.current) == null ? void 0 : q.scrollTo({
            behavior: C,
            left: Z / 3
          });
        case "forward":
          return (H = k.current) == null ? void 0 : H.scrollTo({
            behavior: C,
            left: Z / 3
          });
        case "middle": {
          const $ = Z / ft / 4;
          return (g = k.current) == null ? void 0 : g.scrollTo({
            behavior: C,
            left: Z / 2 - $
          });
        }
        default:
          return (V = k.current) == null ? void 0 : V.scrollTo({
            behavior: C,
            left: Z / 2
          });
      }
    },
    []
  ), T = (Y) => {
    U(Y);
  }, _ = ce(
    (Y) => {
      const C = hi(l);
      let Z;
      switch (l) {
        case 0:
          Z = C * 7;
          break;
        case 1:
          Z = C;
          break;
        case 2:
          Z = Math.ceil(C / jt);
          break;
      }
      bn(() => {
        switch ((Y === "forward" || Y === "back") && (A.current = !0), O.current = Y, Y) {
          case "back":
            w((H) => H.subtract(Z, "days"));
            break;
          case "forward":
            w((H) => H.add(Z, "days"));
            break;
          case "middle":
            w(D());
            break;
        }
        s == null || s(P);
      }, 300)();
    },
    [s, P, l]
  );
  xe(() => {
    O.current && (E(O.current), O.current = null);
  }, [y, E]), xe(() => {
    k.current = document.getElementById(We), L(dt(l));
  }, [l]), xe(() => {
    const Y = () => L(dt(l));
    return window.addEventListener("resize", Y), () => window.removeEventListener("resize", Y);
  }, [l]), xe(() => {
    s == null || s(P);
  }, [s, P]), xe(() => {
    M(!1);
  }, [o]), xe(() => {
    v || (E("middle"), M(!0), w(o));
  }, [o, v, E]);
  const N = () => {
    t || (w(
      (Y) => l === 2 ? Y.add(sr, "hours") : Y.add(cr, "weeks")
    ), s == null || s(P));
  }, R = ce(() => {
    t || _("forward");
  }, [t, _]), J = () => {
    t || (w(
      (Y) => l === 2 ? Y.subtract(sr, "hours") : Y.subtract(cr, "weeks")
    ), s == null || s(P));
  }, Q = ce(() => {
    !v || t || _("back");
  }, [v, t, _]), se = ce(() => {
    t || (O.current = "middle", w(D()), s == null || s(P));
  }, [t, s, P]), ie = ce(
    (Y) => {
      if (t)
        return;
      const C = D(Y).startOf("day");
      C.isValid() && (O.current = "middle", w(C), s == null || s(P));
    },
    [t, s, P]
  ), B = () => G(l + 1), z = () => G(l - 1), G = (Y) => {
    lo(Y) && (f(Y), L(dt(Y)), s == null || s(P));
  }, te = () => i == null ? void 0 : i(), { Provider: S } = uo;
  return /* @__PURE__ */ p(
    S,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: N,
        handleScrollNext: R,
        handleGoPrev: J,
        handleScrollPrev: Q,
        handleGoToday: se,
        goToDate: ie,
        zoomIn: B,
        zoomOut: z,
        setZoom: G,
        zoom: l,
        isNextZoom: F,
        isPrevZoom: I,
        date: y,
        isLoading: t,
        cols: m,
        startDate: b,
        dayOfYear: h,
        toggleDisplayActiveUnits: te,
        tilesCoords: K,
        updateTilesCoords: T,
        recordsThreshold: a,
        onClearFilterData: c,
        suppressNextSlideRef: A
      },
      children: n
    }
  );
}, Ze = () => Je(uo), fo = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, ho = (e, n) => {
  if (n.length === 0)
    return e;
  let t = e, r = 0;
  for (const o of n) {
    const s = o * ye + r * Pe;
    if (e >= s + Pe)
      r++;
    else if (e >= s)
      return o * ye + r * Pe - r * Pe;
  }
  return t - r * Pe;
}, gi = 5, fr = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > gi;
}, ut = (e, n, t) => {
  const r = t.getBoundingClientRect();
  return {
    x: e - r.left + t.scrollLeft,
    y: n - r.top + t.scrollTop
  };
}, yi = ({
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
  const a = n ? n.length > 0 && n[0].data.length > 0 && !Array.isArray(n[0].data[0]) ? n.map((Y) => ({ ...Y, data: [Y.data] })) : n : e, {
    enabled: l = !0,
    isDraggable: f,
    resourceOnly: y = !1,
    isValidDrop: w
  } = i, [v, M] = me("idle"), [m, L] = me(null), [F, I] = me({ x: 0, y: 0 }), [P, u] = me({ width: 0, height: 48 }), [h, b] = me(null), [k, A] = me(!0), O = ge({ x: 0, y: 0 }), K = ge({ x: 0, y: 0 }), U = ge({ x: 0, y: 0 }), E = ge(null), T = ge(null), _ = ge(0), N = ge(null), R = ce(
    (Y) => !l || Y.draggable === !1 ? !1 : f ? f(Y) : !0,
    [l, f]
  ), J = ce(
    (Y, C) => {
      const Z = ho(C, d), q = Math.floor(Z / ye);
      let H;
      switch (t) {
        case 0:
          H = Ye * 7;
          break;
        case 1:
          H = $e;
          break;
        case 2:
          H = Te;
          break;
        default:
          H = $e;
      }
      const g = Math.floor(Y / H);
      let V;
      const $ = D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          V = $.add(g * 7, "days").toDate();
          break;
        case 1:
          V = $.add(g, "days").toDate();
          break;
        case 2:
          V = $.add(g, "hours").toDate();
          break;
        default:
          V = $.toDate();
      }
      return { snappedDate: V, snappedResourceIndex: q };
    },
    [t, r, d]
  ), Q = ce(
    (Y, C, Z, q) => {
      const H = [], g = C.getTime(), V = Z.getTime(), $ = a.find((ne) => ne.id === q);
      if (!$)
        return H;
      const j = [];
      for (const ne of $.data)
        Array.isArray(ne) ? j.push(...ne) : j.push(ne);
      for (const ne of j) {
        if (ne.segmentId === Y.segmentId)
          continue;
        const X = ne.startDate.getTime(), ae = ne.endDate.getTime();
        if (g >= X && g < ae || V > X && V <= ae || g <= X && V >= ae) {
          const ue = new Date(Math.max(g, X)), ve = new Date(Math.min(V, ae)), le = ve.getTime() - ue.getTime();
          H.push({
            event: ne,
            conflictStart: ue,
            conflictEnd: ve,
            overlapDuration: le
          });
        }
      }
      return H;
    },
    [a]
  ), se = ce(
    (Y, C, Z, q) => {
      const H = [], g = C.getTime(), V = Z.getTime(), $ = D(C).format("YYYY-MM-DD"), j = a.find((X) => X.id === q);
      if (!j)
        return H;
      const ne = [];
      for (const X of j.data)
        Array.isArray(X) ? ne.push(...X) : ne.push(X);
      for (const X of ne) {
        if (X.segmentId === Y.segmentId)
          continue;
        const ae = X.startDate.getTime(), pe = X.endDate.getTime(), ue = D(X.startDate).format("YYYY-MM-DD"), ve = D(X.endDate).format("YYYY-MM-DD"), le = D(Z).format("YYYY-MM-DD");
        if (!(ue === $ || ve === $ || ue === le || ve === le || D(X.startDate).isBefore(C, "day") && D(X.endDate).isAfter(Z, "day")) || g >= ae && g < pe || V > ae && V <= pe || g <= ae && V >= pe)
          continue;
        let ee, fe;
        pe <= g ? (ee = g - pe, fe = "before") : (ee = ae - V, fe = "after"), H.push({
          event: X,
          timeGap: ee,
          position: fe
        });
      }
      return H.sort((X, ae) => X.timeGap - ae.timeGap);
    },
    [a]
  ), ie = ce(
    (Y, C, Z) => {
      const q = J(C, Z);
      let H, g;
      if (y)
        H = Y.startDate, g = Y.endDate;
      else {
        const pe = D(Y.endDate).diff(Y.startDate);
        H = q.snappedDate, g = D(H).add(pe, "milliseconds").toDate();
      }
      let V = 0, $ = "", j;
      for (const pe of e) {
        const ue = Math.max(pe.data.length, 1);
        if (q.snappedResourceIndex < V + ue) {
          $ = pe.id, j = pe.capacity;
          break;
        }
        V += ue;
      }
      if (!$)
        return null;
      let ne = !0;
      j !== void 0 && Y.totalPassengers !== void 0 && (ne = Y.totalPassengers <= j);
      const X = Q(Y, H, g, $), ae = X.length === 0 ? se(Y, H, g, $) : [];
      return {
        startDate: H,
        endDate: g,
        resourceId: $,
        resourceIndex: q.snappedResourceIndex,
        resourceCapacity: j,
        hasCapacity: ne,
        conflicts: X,
        hasConflict: X.length > 0,
        nearbyEvents: ae
      };
    },
    [J, e, y, Q, se]
  ), B = ce(
    (Y, C) => {
      if (!s)
        return;
      const Z = Date.now();
      if (Z - _.current < 100)
        return;
      _.current = Z;
      const q = {
        event: Y,
        currentStartDate: C.startDate,
        currentEndDate: C.endDate,
        currentResourceId: C.resourceId,
        conflicts: C.conflicts
      };
      s(q);
    },
    [s]
  ), z = ce(
    (Y, C) => {
      if (!R(Y) || !c.current)
        return;
      C.preventDefault(), C.stopPropagation();
      const Z = C.target.closest('[style*="left"]');
      let q = 0, H = 0;
      Z && Z.style.left && Z.style.top && (q = parseInt(Z.style.left), H = parseInt(Z.style.top));
      const g = ut(
        C.clientX,
        C.clientY,
        c.current
      );
      O.current = { x: q, y: H }, K.current = { x: C.clientX, y: C.clientY }, U.current = {
        x: g.x - q,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, N.current = {
        startDate: Y.startDate,
        endDate: Y.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const j of e) {
        for (const ne of j.data)
          if (ne.some((X) => X.segmentId === Y.segmentId)) {
            N.current.resourceId = j.id;
            break;
          }
        if (N.current.resourceId)
          break;
      }
      L(Y), M("potential"), I({ x: q, y: H });
      let V = 100, $ = 48;
      if (Z) {
        const j = Z.getBoundingClientRect();
        V = j.width, $ = j.height;
      }
      u({ width: V, height: $ });
    },
    [R, c, e, t]
  ), G = ce(
    (Y) => {
      if (!c.current)
        return;
      let C = c.current;
      for (; C && C !== document.body; ) {
        const X = window.getComputedStyle(C);
        if (C.scrollHeight > C.clientHeight && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflow === "auto" || X.overflow === "scroll"))
          break;
        C = C.parentElement;
      }
      (!C || C === document.body) && (C = document.documentElement);
      const Z = C.getBoundingClientRect(), q = Y.clientY, H = 50, g = 12, V = q - Z.top, $ = Z.bottom - q;
      let j = !1, ne = 0;
      V < H && V > 0 ? (j = !0, ne = -g * (1 - V / H)) : $ < H && $ > 0 && (j = !0, ne = g * (1 - $ / H)), j ? (T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => {
        C.scrollTop += ne, v === "dragging" && G(Y);
      })) : T.current && (cancelAnimationFrame(T.current), T.current = null);
    },
    [c, v]
  ), te = ce(
    (Y) => {
      if (v === "idle" || v === "animating" || !m || !c.current)
        return;
      const C = { x: Y.clientX, y: Y.clientY };
      if (v === "potential")
        if (fr(K.current, C))
          M("dragging");
        else
          return;
      G(Y);
      const Z = ut(
        Y.clientX,
        Y.clientY,
        c.current
      );
      E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => {
        const q = {
          x: Z.x - U.current.x,
          y: Z.y - U.current.y
        };
        I(q);
        const H = ie(m, Z.x, Z.y);
        if (H && w) {
          const g = {
            event: m,
            currentStartDate: H.startDate,
            currentEndDate: H.endDate,
            currentResourceId: H.resourceId,
            conflicts: H.conflicts
          };
          H.hasConflict = !w(g);
        }
        if (b(H), H) {
          const g = H.hasCapacity !== !1;
          A(g), B(m, H);
        }
      });
    },
    [v, m, c, ie, B, w, G]
  ), S = ce(
    async (Y) => {
      if (v === "idle" || v === "animating")
        return;
      const C = { x: Y.clientX, y: Y.clientY };
      if (!fr(K.current, C) || v === "potential") {
        M("idle"), L(null), b(null);
        return;
      }
      if (!m || !h || !N.current) {
        M("idle"), L(null), b(null);
        return;
      }
      if (h.hasCapacity === !1) {
        A(!1), M("animating"), I(O.current), setTimeout(() => {
          M("idle"), L(null), b(null), A(!0);
        }, 300);
        return;
      }
      const q = {
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
      let H = !0;
      if (o)
        try {
          const g = o(q);
          H = g instanceof Promise ? await g : g;
        } catch {
          H = !1;
        }
      H ? (A(!0), M("idle"), L(null), b(null)) : (A(!1), M("animating"), I(O.current), setTimeout(() => {
        M("idle"), L(null), b(null), A(!0);
      }, 300));
    },
    [v, m, h, o, w]
  );
  return xe(() => {
    if (v === "potential" || v === "dragging") {
      const Y = (Z) => te(Z), C = (Z) => S(Z);
      return document.addEventListener("mousemove", Y), document.addEventListener("mouseup", C), () => {
        document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", C);
      };
    } else
      return () => {
      };
  }, [v, te, S]), xe(() => () => {
    E.current && (cancelAnimationFrame(E.current), E.current = null), T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), xe(() => {
    (v === "idle" || v === "animating") && (E.current && (cancelAnimationFrame(E.current), E.current = null), T.current && (cancelAnimationFrame(T.current), T.current = null));
  }, [v]), xe(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (M("animating"), I(O.current), setTimeout(() => {
      M("idle"), L(null), b(null);
    }, 300)) : (M("idle"), L(null), b(null)));
  }, [t]), xe(() => {
    if ((v === "dragging" || v === "potential") && m) {
      let Y = !1;
      for (const C of e) {
        for (const Z of C.data)
          if (Z.some((q) => q.segmentId === m.segmentId)) {
            Y = !0;
            break;
          }
        if (Y)
          break;
      }
      Y || (v === "dragging" ? (M("animating"), I(O.current), setTimeout(() => {
        M("idle"), L(null), b(null);
      }, 300)) : (M("idle"), L(null), b(null)));
    }
  }, [e, v, m]), {
    dragState: v,
    draggedEvent: m,
    ghostPosition: F,
    ghostDimensions: P,
    dropTarget: h,
    isValidDrop: k,
    handleDragStart: z,
    isDraggable: R,
    draggingEventId: (m == null ? void 0 : m.segmentId) || null,
    resourceOnly: y
  };
}, vi = ({
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
  const { enabled: l = !1, isSelectable: f } = i, y = l && !!o, w = ce((g) => {
    let V = 0;
    for (const $ of a)
      $ <= g && V++;
    return g * ye + V * Pe;
  }, [a]), [v, M] = me("idle"), [m, L] = me(null), [F, I] = me(null), [P, u] = me(null), [h, b] = me(!1), [k, A] = me([]), [O, K] = me(!1), U = ge(null), E = ge(null), T = ge(null), _ = ge(null), N = ce(() => {
    switch (t) {
      case 0:
        return Ye * 7;
      case 1:
        return $e;
      case 2:
        return Te;
      default:
        return $e;
    }
  }, [t]), R = ce(
    (g) => {
      const V = N(), $ = Math.floor(g / V), j = D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return j.add($ * 7, "days").toDate();
        case 1:
          return j.add($, "days").toDate();
        case 2:
          return j.add($, "hours").toDate();
        default:
          return j.toDate();
      }
    },
    [t, r, N]
  ), J = ce(
    (g) => {
      const V = ho(g, a), $ = Math.floor(V / ye);
      let j = 0;
      for (const ne of e) {
        const X = Math.max(ne.data.length, 1);
        if ($ < j + X)
          return {
            resourceId: ne.id,
            resourceIndex: $,
            resourceLabel: ne.label
          };
        j += X;
      }
      return null;
    },
    [e, a]
  ), Q = ce(
    (g) => {
      const V = N();
      return Math.floor(g / V) * V;
    },
    [N]
  ), se = ce(
    (g, V, $, j = []) => {
      const ne = [], ae = (n || e).find((ve) => ve.id === g), pe = V.getTime(), ue = $.getTime();
      if (ae) {
        const ve = ae.data[0], le = ve && Array.isArray(ve) ? ae.data.flat() : ae.data;
        for (const he of le) {
          const re = new Date(he.startDate).getTime(), ee = new Date(he.endDate).getTime();
          if (pe < ee && ue > re) {
            const fe = new Date(Math.max(pe, re)), de = new Date(Math.min(ue, ee)), Me = de.getTime() - fe.getTime();
            ne.push({
              event: he,
              conflictStart: fe,
              conflictEnd: de,
              overlapDuration: Me
            });
          }
        }
      }
      for (const ve of j) {
        if (ve.resourceId !== g)
          continue;
        const le = ve.startDate.getTime(), he = ve.endDate.getTime();
        if (pe < he && ue > le) {
          const re = new Date(Math.max(pe, le)), ee = new Date(Math.min(ue, he)), fe = ee.getTime() - re.getTime(), de = {
            segmentId: `pending-${ve.startDate.getTime()}`,
            reservationId: `pending-${ve.startDate.getTime()}`,
            startDate: ve.startDate,
            endDate: ve.endDate,
            occupancy: 0,
            title: `New Event (${ve.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          ne.push({
            event: de,
            conflictStart: re,
            conflictEnd: ee,
            overlapDuration: fe
          });
        }
      }
      return ne;
    },
    [e, n]
  ), ie = ce(
    (g) => {
      if (!y || d || !c.current || g.button !== 0)
        return;
      const V = g.target;
      if (V.closest("[data-segment-id]") || V.closest("[data-multi-select-ui]"))
        return;
      const $ = ut(g.clientX, g.clientY, c.current), j = J($.y);
      if (!j)
        return;
      U.current = { x: g.clientX, y: g.clientY }, E.current = j.resourceIndex;
      const ne = Q($.x), X = N(), ae = w(j.resourceIndex);
      L($), I($), u({
        x: ne,
        y: ae,
        width: X,
        height: ye
      }), M("selecting");
    },
    [y, d, c, J, Q, N, w]
  ), B = ce(
    (g) => {
      I(g);
      const V = N(), $ = Q((m == null ? void 0 : m.x) || 0), j = Q(g.x), ne = w(E.current), X = Math.min($, j), ae = Math.max($, j) + V;
      u({ x: X, y: ne, width: ae - X, height: ye });
    },
    [m, N, Q, w]
  ), z = ce(() => {
    _.current && (cancelAnimationFrame(_.current), _.current = null);
  }, []), G = ce(
    (g, V) => {
      const $ = document.getElementById(We);
      if (!$ || !c.current)
        return;
      const j = $.getBoundingClientRect(), ne = 60, X = 12, ae = g - (j.left + Ie), pe = j.right - g;
      let ue = 0;
      ae < ne ? ue = -X * (1 - Math.max(0, ae) / ne) : pe < ne && (ue = X * (1 - Math.max(0, pe) / ne)), z(), ue !== 0 && (_.current = requestAnimationFrame(() => {
        $.scrollLeft += ue, B(ut(g, V, c.current)), G(g, V);
      }));
    },
    [c, B, z]
  ), te = ce(
    (g) => {
      if (v !== "selecting" || !c.current || E.current === null)
        return;
      const V = ut(g.clientX, g.clientY, c.current);
      T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => B(V)), G(g.clientX, g.clientY);
    },
    [v, c, B, G]
  ), S = ce(
    (g) => {
      if (v !== "selecting")
        return;
      if (z(), !c.current || !m || !U.current) {
        M("idle"), L(null), I(null), u(null);
        return;
      }
      const V = ut(g.clientX, g.clientY, c.current), $ = J(m.y);
      if (!$) {
        M("idle"), L(null), I(null), u(null);
        return;
      }
      const j = Math.min(m.x, V.x), ne = Math.max(m.x, V.x), X = R(j), ae = R(ne), pe = D(ae).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f($.resourceId, X, pe)) {
        M("idle"), L(null), I(null), u(null);
        return;
      }
      const ue = se(
        $.resourceId,
        X,
        pe,
        k
      ), ve = ue.length > 0, le = {
        startDate: X,
        endDate: pe,
        resourceId: $.resourceId,
        resourceLabel: $.resourceLabel,
        zoomLevel: t,
        hasConflict: ve,
        conflicts: ve ? ue : void 0
      };
      if (h)
        A((he) => [...he, le]), K(!0);
      else if (o) {
        const he = o(le), re = (ee) => {
          ee != null && ee.continueMultiSelect && (b(!0), A([le]), K(!0));
        };
        he instanceof Promise ? he.then(re) : re(he);
      }
      M("idle"), L(null), I(null), u(null), U.current = null, E.current = null;
    },
    [
      v,
      c,
      m,
      J,
      R,
      f,
      o,
      t,
      h,
      se,
      k,
      z
    ]
  ), Y = ce(() => {
    if (k.length > 0 && s) {
      K(!1);
      const g = s(k), V = ($) => {
        $ != null && $.continueMultiSelect ? K(!0) : (A([]), b(!1), K(!1));
      };
      g instanceof Promise ? g.then(V) : V(g);
      return;
    }
    A([]), b(!1), K(!1);
  }, [k, s]), C = ce(() => {
    A([]), b(!1), K(!1);
  }, []), Z = ce((g) => {
    A((V) => {
      const $ = V.filter((j, ne) => ne !== g);
      return $.length === 0 && (b(!1), K(!1)), $;
    });
  }, []), q = ce(
    (g, V) => {
      A(($) => $.map((j, ne) => {
        if (ne !== g)
          return j;
        const X = { ...j, ...V }, ae = $.filter((ue, ve) => ve !== g), pe = se(
          X.resourceId,
          X.startDate,
          X.endDate,
          ae
        );
        return {
          ...X,
          hasConflict: pe.length > 0,
          conflicts: pe.length > 0 ? pe : void 0
        };
      }));
    },
    [se]
  ), H = ce(
    (g) => {
      g.key === "Escape" && (v === "selecting" ? (z(), M("idle"), L(null), I(null), u(null), U.current = null, E.current = null) : h && k.length > 0 && (A([]), b(!1), K(!1)));
    },
    [v, h, k.length, z]
  );
  return xe(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", S), document.addEventListener("keydown", H), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", S), document.removeEventListener("keydown", H);
      };
  }, [v, te, S, H]), xe(() => {
    if (h && k.length > 0)
      return document.addEventListener("keydown", H), () => {
        document.removeEventListener("keydown", H);
      };
  }, [h, k.length, H]), xe(() => () => {
    T.current && (cancelAnimationFrame(T.current), T.current = null), z();
  }, [z]), xe(() => {
    d && v === "selecting" && (z(), M("idle"), L(null), I(null), u(null), U.current = null, E.current = null);
  }, [d, v, z]), {
    selectionState: v,
    selectionStart: m,
    selectionEnd: F,
    selectionBox: P,
    handleGridMouseDown: ie,
    isEnabled: y,
    pendingSelections: k,
    confirmSelections: Y,
    clearSelections: C,
    removeSelection: Z,
    updateSelection: q,
    isMultiSelectActive: h,
    hasUnconfirmedSelections: O
  };
}, xi = x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, bi = x.div`
  position: relative;
`, wi = x.canvas``;
x.canvas``;
const hr = x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Si = Tn(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: y, separatorRowIndices: w = [], subcontractSeparatorRow: v = -1 }, M) {
  const m = ge(!1), { handleScrollNext: L, handleScrollPrev: F, date: I, isLoading: P, cols: u, startDate: h, suppressNextSlideRef: b } = Ze(), k = ge(null), A = ge(null), O = ge(null), K = ge(null), [U, E] = me(!1), T = Xt(), {
    dragState: _,
    draggedEvent: N,
    ghostPosition: R,
    ghostDimensions: J,
    dropTarget: Q,
    isValidDrop: se,
    handleDragStart: ie,
    isDraggable: B,
    draggingEventId: z,
    resourceOnly: G
  } = yi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: h,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: K,
    separatorRowIndices: w
  });
  xe(() => {
    const le = _ === "dragging" || _ === "potential";
    E(le), a && a(le);
  }, [_, a]);
  const te = ge(!1), S = ge(I), Y = ge(null);
  xe(() => {
    var de;
    const le = S.current;
    if (S.current = I, !te.current) {
      te.current = !0;
      return;
    }
    if (b != null && b.current) {
      b.current = !1;
      return;
    }
    const he = K.current;
    if (!(he != null && he.animate))
      return;
    const re = I.isAfter(le) ? 48 : -48;
    (de = Y.current) == null || de.cancel(), he.style.willChange = "transform";
    const ee = he.animate(
      [
        { transform: `translateX(${re}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), fe = () => {
      he.style.willChange = "";
    };
    ee.onfinish = fe, ee.oncancel = fe, Y.current = ee;
  }, [I, b]);
  const {
    selectionState: C,
    selectionBox: Z,
    handleGridMouseDown: q,
    pendingSelections: H,
    confirmSelections: g,
    clearSelections: V,
    removeSelection: $,
    updateSelection: j,
    isMultiSelectActive: ne,
    hasUnconfirmedSelections: X
  } = vi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: h,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: y,
    gridRef: K,
    isDragging: U,
    separatorRowIndices: w
  }), ae = ce((le) => {
    le.preventDefault();
  }, []), pe = ce((le) => {
    le.preventDefault();
  }, []), ue = w.length * Pe, ve = ce(
    (le) => {
      const he = zn(), re = t * ye + 1 + ue;
      fo(le, he, re), Bs(le, n, t, u, h, T, w, v);
    },
    [u, h, t, n, T, w, v, ue]
  );
  return xe(() => {
    if (!k.current)
      return;
    const le = k.current.getContext("2d");
    if (!le)
      return;
    const he = () => ve(le);
    return window.addEventListener("resize", he), () => window.removeEventListener("resize", he);
  }, [ve]), xe(() => {
    const le = k.current;
    if (!le)
      return;
    le.style.letterSpacing = "1px";
    const he = le.getContext("2d");
    he && ve(he);
  }, [I, t, n, ve]), xe(() => {
    if (!A.current)
      return;
    const le = new IntersectionObserver(
      (he) => {
        he[0].isIntersecting && !m.current && (m.current = !0, L(), setTimeout(() => {
          m.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(We) }
    );
    return le.observe(A.current), () => {
      le.disconnect();
    };
  }, [L]), xe(() => {
    if (!O.current)
      return;
    const le = new IntersectionObserver(
      (he) => {
        he[0].isIntersecting && !m.current && (m.current = !0, F(), setTimeout(() => {
          m.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(We),
        rootMargin: `0px 0px 0px -${Ie}px`
      }
    );
    return le.observe(O.current), () => {
      le.disconnect();
    };
  }, [F]), /* @__PURE__ */ W(xi, { id: ro, children: [
    /* @__PURE__ */ W(
      bi,
      {
        ref: (le) => {
          typeof M == "function" ? M(le) : M && (M.current = le), K.current = le;
        },
        onMouseDown: q,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ p(hr, { position: "left", ref: O }),
          /* @__PURE__ */ p(En, { isLoading: P, position: "left" }),
          /* @__PURE__ */ p(
            wi,
            {
              ref: k,
              onDragStart: ae,
              onDragOver: pe,
              style: { userSelect: _ === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ p(gd, { zoom: n, startDate: h }),
          /* @__PURE__ */ p(
            bl,
            {
              data: r,
              zoom: n,
              onTileClick: s,
              onDragStart: ie,
              isDraggable: B,
              draggingEventId: z,
              separatorRowIndices: w
            }
          ),
          /* @__PURE__ */ p(hr, { ref: A, position: "right" }),
          /* @__PURE__ */ p(En, { isLoading: P, position: "right" }),
          (_ === "dragging" || _ === "animating") && /* @__PURE__ */ p(
            Gl,
            {
              draggedEvent: N,
              ghostPosition: R,
              ghostDimensions: J,
              dropTarget: Q,
              isValidDrop: se,
              dragState: _,
              zoom: n,
              data: r,
              resourceOnly: G,
              separatorRowIndices: w
            }
          ),
          /* @__PURE__ */ p(
            Jl,
            {
              selectionBox: Z,
              isSelecting: C === "selecting"
            }
          ),
          ne && H.length > 0 && /* @__PURE__ */ p(
            hd,
            {
              selections: H,
              data: r,
              zoom: n,
              startDate: h,
              onRemove: $,
              onUpdate: j,
              separatorRowIndices: w
            }
          )
        ]
      }
    ),
    ne && X && H.length > 0 && /* @__PURE__ */ p(
      id,
      {
        selections: H,
        onConfirm: g,
        onClear: V,
        onRemove: $
      }
    )
  ] });
}), po = (e) => {
  const n = D.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, mo = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / De);
    t += o.hours + s, r += n % De, r >= De && (t++, r -= De);
  }), { hours: t, minutes: r };
}, go = (e, n) => {
  let t = ar;
  switch (n) {
    case 0:
      t = As;
      break;
    case 1:
      t = ar;
      break;
    case 2:
      t = 1;
      break;
  }
  const r = () => {
    let s = t - e.hours - 1, i = De - e.minutes;
    return i === De && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: r(),
    overtime: o()
  };
}, Ci = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const l = D(a.startDate).isoWeek(), f = D(a.startDate).isoWeekday(), y = D(a.endDate).isoWeek(), w = D(a.endDate).isoWeekday(), { hours: v, minutes: M } = po(a.occupancy);
    if (r === l) {
      const m = (Ue + 1 - f) * v, L = (Ue + 1 - f) * M;
      return { hours: Math.max(0, m), minutes: L };
    } else if (r === y) {
      const m = w > Ue ? Ue * v : w * v, L = w > Ue ? Ue * M : w * M;
      return { hours: m, minutes: L };
    } else if (D(n).isBetween(a.startDate, a.endDate))
      return { hours: Ue * v, minutes: Ue * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = mo(o), { free: c, overtime: d } = go({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, Mi = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: y } = po(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = mo(s), { free: d, overtime: a } = go({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, ki = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const d = D(c.startDate).hour(), a = D(c.endDate).hour(), l = n.hour(), f = D(c.endDate).minute(), y = D(c.startDate).minute();
    d < l && a > l ? t += De : d === l && a === l && y && f ? t += f ? f - y : De - y : d === l && a >= l ? t += y ? De - y : De : a === l && f && (t += f);
  });
  const r = Math.floor(t / De), o = t % De, s = r || o ? 0 : 1, i = r ? 0 : o ? De - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, $i = (e, n, t, r, o = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => r === 1 ? D(t).isBetween(i.startDate, i.endDate, "day", "[]") : r === 2 ? D(t).isBetween(i.startDate, i.endDate, "hour", "[]") : D(i.startDate).isBetween(
    D(t),
    D(t).add(6, "days"),
    "day",
    "[]"
  ) || D(t).isBetween(D(i.startDate), D(i.endDate), "day", "[]"));
  switch (r) {
    case 1:
      return Mi(s, t, r, o);
    case 2:
      return ki(s, t);
    default:
      return Ci(s, t, r);
  }
}, Di = (e, n, t, r, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = yt;
      break;
    case 1:
      c = "days", d = $e;
      break;
    case 2:
      c = "hours", d = Te;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = D(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / ye), y = r.findIndex((L, F, I) => I.slice(0, F + 1).reduce((u, h) => u + h, 0) >= f), w = s === 2 ? (a + 1) * d : a * d, v = (f - 1) * ye + ye, M = $i(
    o[y],
    y,
    l,
    s,
    i
  ), m = D(e.startDate).isSame(D(e.endDate), "day");
  return {
    coords: { x: w, y: v },
    mouseCoords: t,
    resourceIndex: y,
    disposition: M,
    reservationData: {
      startTime: D(e.startDate).format("hh:mm A"),
      startDate: D(e.startDate).format("MMM D, YYYY"),
      endTime: D(e.endDate).format("hh:mm A"),
      endDate: D(e.endDate).format("MMM D, YYYY"),
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
function Ei(e, n) {
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
function _i(e) {
  const n = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const r = [...t].sort((l, f) => l - f);
  if (r.length < 2)
    return n;
  const o = Math.min(5, r.length), s = Ei(r, o), i = [];
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
    const y = "__auto_cat_" + f, w = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: y, name: w, minPassengers: l.min, maxPassengers: l.max });
    for (const v of l.values)
      a.set(v, y);
  }), { categories: d, capacityToCategoryId: a };
}
const Ti = (e, n, t, r) => {
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
var wn = {}, Ai = {
  get exports() {
    return wn;
  },
  set exports(e) {
    wn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(_e, function() {
    return function(t, r) {
      r.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Ai);
const Pi = wn;
var Sn = {}, Ii = {
  get exports() {
    return Sn;
  },
  set exports(e) {
    Sn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(_e, function() {
    return function(t, r) {
      r.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Ii);
const Yi = Sn, Oi = (e) => {
  const n = [];
  for (const t of e) {
    let r = !1;
    if (n.length)
      for (const o of n) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = D(t.startDate).startOf("day"), d = D(t.endDate).startOf("day"), a = D(o[i].startDate).startOf("day"), l = D(o[i].endDate).startOf("day");
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
D.extend(Pi);
D.extend(Yi);
const pr = /* @__PURE__ */ new WeakMap(), Li = (e) => {
  const n = pr.get(e);
  if (n)
    return n;
  const t = [...e].sort((o, s) => {
    const i = D(o.startDate), c = D(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), r = Oi(t);
  return pr.set(e, r), r;
}, Ri = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = Li(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, Ni = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Bi = (e) => {
  const { recordsThreshold: n } = Ze(), [t, r] = me(0), [o, s] = me(0), i = ge(null);
  xe(() => {
    i.current = document.getElementById(We);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = ke(() => Ri(e), [e]), a = ke(
    () => Ti(e, c, d, n),
    [e, c, n, d]
  ), l = ce(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((m) => m + a[Math.max(o, 0)].length), s((m) => Math.min(m + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = ce(() => {
    a[o].length && (r((m) => Math.max(m - a[o - 1].length, 0)), s((m) => Math.max(m - 1, 0)));
  }, [o, a]), y = ce(() => {
    r(0), s(0);
  }, []), w = t + a[o].length, v = ke(
    () => d.slice(t, w),
    [w, d, t]
  ), M = ke(
    () => c.slice(t, w),
    [w, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: v,
    totalRowsPerPage: Ni(a[o]),
    next: l,
    previous: f,
    reset: y
  };
};
var Cn = {}, Hi = {
  get exports() {
    return Cn;
  },
  set exports(e) {
    Cn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(_e, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(Hi);
const zi = Cn;
var Mn = {}, Fi = {
  get exports() {
    return Mn;
  },
  set exports(e) {
    Mn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(ot);
  })(_e, function(t) {
    function r(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = r(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, w, v) {
      var M = y + " ";
      switch (v) {
        case "m":
          return w ? "minuta" : "minutę";
        case "mm":
          return M + (s(y) ? "minuty" : "minut");
        case "h":
          return w ? "godzina" : "godzinę";
        case "hh":
          return M + (s(y) ? "godziny" : "godzin");
        case "MM":
          return M + (s(y) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(y) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(y, w) {
      return a.test(w) ? c[y.month()] : d[y.month()];
    };
    l.s = d, l.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(y) {
      return y + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Fi);
const Wi = Mn;
var kn = {}, ji = {
  get exports() {
    return kn;
  },
  set exports(e) {
    kn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(ot);
  })(_e, function(t) {
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
})(ji);
const Zi = kn;
var $n = {}, Vi = {
  get exports() {
    return $n;
  },
  set exports(e) {
    $n = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(ot);
  })(_e, function(t) {
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
})(Vi);
const Gi = $n;
var Dn = {}, Xi = {
  get exports() {
    return Dn;
  },
  set exports(e) {
    Dn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(ot);
  })(_e, function(t) {
    function r(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = r(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Xi);
const Ui = Dn, Ki = {
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
    Fn(this, "locales", ta);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const Zt = new na(), yo = zr({
  localesData: Zt.getLocales(),
  currentLocale: Zt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ra = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = me("en"), s = Zt.getLocales(), i = ce(() => {
    const f = s.find((y) => y.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && D.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = me(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  xe(() => {
    t == null || t.forEach((f) => {
      s.find((w) => w.id === f.id) || Zt.addLocales(f);
    });
  }, [s, t]), xe(() => {
    const f = localStorage.getItem("locale"), y = n ?? f ?? "en";
    localStorage.setItem("locale", y), o(y), d(i());
  }, [i, n]);
  const { Provider: l } = yo;
  return /* @__PURE__ */ p(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ve = () => Je(yo).currentLocale.lang, oa = (e) => /* @__PURE__ */ oe.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ oe.createElement("defs", null, /* @__PURE__ */ oe.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ oe.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ oe.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ oe.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ oe.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), sa = x.div`
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
  const { feelingEmpty: n } = Ve();
  return /* @__PURE__ */ W(sa, { onClick: e, children: [
    /* @__PURE__ */ p(oa, {}),
    /* @__PURE__ */ p(ia, { children: n })
  ] });
}, ca = x.div`
  position: relative;
  display: flex;
`, la = x.div`
  position: relative;
  margin-left: ${Ie};
  display: flex;
  flex-direction: column;
  contain: paint;
`, da = x.div`
  width: calc(${({ width: e }) => e}px - ${Ie}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ie}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Qt = {
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
    reservationType: Tt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function ua(e, n) {
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
const fa = ({
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
  clickToAddConfig: y
}) => {
  const [w, v] = me(Qt), [M, m] = me(e), [L, F] = me(!1), [I, P] = me(!1), [u, h] = me(""), [b, k] = me(/* @__PURE__ */ new Set()), {
    zoom: A,
    startDate: O,
    isLoading: K,
    config: { includeTakenHoursOnWeekendsInDayView: U, showTooltip: E, showThemeToggle: T }
  } = Ze(), _ = ge(null), N = ge(null), [R, J] = me(124), {
    page: Q,
    projectsPerPerson: se,
    rowsPerItem: ie,
    currentPageNum: B,
    pagesAmount: z,
    next: G,
    previous: te,
    reset: S
  } = Bi(M), { effectiveCategories: Y, effectivePage: C } = ke(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: Q };
    const ee = _i(Q);
    if (ee.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: Q };
    const fe = Q.map((de) => {
      if (de.isSubcontract || de.capacity == null)
        return de;
      const Me = ee.capacityToCategoryId.get(de.capacity);
      return Me ? { ...de, categoryId: Me } : de;
    });
    return { effectiveCategories: ee.categories, effectivePage: fe };
  }, [t, Q]), Z = ce((ee) => {
    k((fe) => {
      const de = new Set(fe);
      return de.has(ee) ? de.delete(ee) : de.add(ee), de;
    });
  }, []), q = ke(() => {
    const ee = [], fe = Y ? [...Y].sort((de, Me) => de.maxPassengers - Me.maxPassengers) : [];
    for (const de of fe)
      C.some((Me) => !Me.isSubcontract && Me.categoryId === de.id) && ee.push(de.id);
    return C.some((de) => de.isSubcontract) && ee.push("__subcontract__"), ee;
  }, [Y, C]), H = ce(() => {
    k(/* @__PURE__ */ new Set());
  }, []), g = ce(() => {
    k(new Set(q));
  }, [q]), {
    visiblePage: V,
    visibleRowsPerItem: $,
    visibleTotalRows: j,
    visibleProjectsPerPerson: ne,
    separatorRowIndices: X,
    subcontractSeparatorRow: ae
  } = ke(() => {
    const ee = ua(C, Y), fe = ((Y == null ? void 0 : Y.length) ?? 0) > 0, de = /* @__PURE__ */ new Map();
    Q.forEach((Ae, st) => de.set(Ae.id, st));
    const Me = [], Ne = [], Be = [], He = [];
    let qe = 0, At = -1;
    for (const Ae of ee)
      if (Ae.type === "subcontract" || Ae.type === "category" && fe) {
        const it = Ae.type === "subcontract" ? "__subcontract__" : Ae.category.id, at = b.has(it);
        if (He.push(qe), Ae.type === "subcontract" && (At = qe), !at)
          for (const Qe of Ae.items) {
            const Pt = de.get(Qe.id) ?? 0, It = ie[Pt];
            Me.push(Qe), Ne.push(It), Be.push(se[Pt]), qe += It;
          }
      } else
        for (const it of Ae.items) {
          const at = de.get(it.id) ?? 0, Qe = ie[at];
          Me.push(it), Ne.push(Qe), Be.push(se[at]), qe += Qe;
        }
    const Xe = Ne.reduce((Ae, st) => Ae + st, 0);
    return {
      visiblePage: Me,
      visibleRowsPerItem: Ne,
      visibleTotalRows: Xe,
      visibleProjectsPerPerson: Be,
      separatorRowIndices: He,
      subcontractSeparatorRow: At
    };
  }, [C, Y, Q, b, ie, se]), pe = ge(
    bn(
      (ee, fe, de, Me, Ne, Be) => {
        if (!_.current)
          return;
        const { tile: He, segmentId: qe } = le(ee);
        if (!qe || !He) {
          F(!1), v(Qt);
          return;
        }
        const At = ve(qe, fe), Xe = _.current.getBoundingClientRect(), Ae = He.getBoundingClientRect(), st = { x: ee.clientX - Xe.left, y: ee.clientY - Xe.top }, it = {
          x: ee.clientX - Xe.left,
          y: ee.clientY - Xe.top
        }, at = {
          x: Ae.left - Xe.left,
          y: Ae.top - Xe.top,
          width: Ae.width,
          height: Ae.height
        }, {
          coords: { x: Qe, y: Pt },
          resourceIndex: It,
          disposition: xo,
          reservationData: bo
        } = Di(
          At,
          de,
          st,
          Me,
          Ne,
          Be,
          U
        );
        v({
          coords: { x: Qe, y: Pt },
          mouseCoords: it,
          resourceIndex: It,
          disposition: xo,
          reservationData: bo,
          tileBounds: at
        }), F(!0);
      },
      4
    )
  ), ue = ge(
    bn((ee, fe) => {
      S(), m(
        ee.map((de) => ({
          ...de,
          data: de.data.filter((Me) => {
            const { title: Ne, description: Be, subtitle: He } = Me;
            return (Ne == null ? void 0 : Ne.toLowerCase().includes(fe.toLowerCase())) || (He == null ? void 0 : He.toLowerCase().includes(fe.toLowerCase())) || (Be == null ? void 0 : Be.toLowerCase().includes(fe.toLowerCase()));
          })
        })).filter((de) => de.data.length > 0)
      );
    }, 500)
  ), ve = (ee, fe) => {
    if (ee)
      return fe.flatMap((de) => de.data).find((de) => de.segmentId === ee);
  }, le = (ee) => {
    if (!ee.target)
      return { tile: null, segmentId: null };
    const fe = ee.target.closest("[data-segment-id]");
    return fe ? { tile: fe, segmentId: fe.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, he = (ee) => {
    const fe = ee.target.value;
    h(fe), ue.current.cancel(), fe ? ue.current(e, fe) : (S(), m(e));
  }, re = ce(() => {
    pe.current.cancel(), F(!1), v(Qt);
  }, []);
  return xe(() => {
    const ee = (de) => pe.current(
      de,
      e,
      O,
      $,
      ne,
      A
    ), fe = _.current;
    if (fe)
      return fe.addEventListener("mousemove", ee), fe.addEventListener("mouseleave", re), () => {
        fe.removeEventListener("mousemove", ee), fe.removeEventListener("mouseleave", re);
      };
  }, [
    pe,
    re,
    ne,
    $,
    O,
    A,
    e
  ]), xe(() => {
    u ? (ue.current.cancel(), ue.current(e, u)) : m(e);
  }, [e, u]), Vt(() => {
    const ee = N.current;
    if (!ee)
      return;
    const fe = () => J(ee.offsetHeight);
    fe();
    const de = new ResizeObserver(fe);
    return de.observe(ee), () => de.disconnect();
  }, []), /* @__PURE__ */ W(ca, { children: [
    /* @__PURE__ */ p(
      $c,
      {
        headerHeight: R,
        data: C,
        categories: Y,
        pageNum: B,
        pagesAmount: z,
        rows: ie,
        onLoadNext: G,
        onLoadPrevious: te,
        searchInputValue: u,
        onSearchInputChange: he,
        onItemClick: o,
        collapsedGroups: b,
        onToggleGroup: Z,
        allGroupIds: q,
        onExpandAll: H,
        onCollapseAll: g
      }
    ),
    /* @__PURE__ */ W(la, { children: [
      /* @__PURE__ */ p(
        tl,
        {
          ref: N,
          zoom: A,
          topBarWidth: i,
          showThemeToggle: T,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ p(
        Si,
        {
          data: V,
          baseData: n || e,
          zoom: A,
          rows: j,
          ref: _,
          onTileClick: r,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: P,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: y,
          separatorRowIndices: X,
          subcontractSeparatorRow: ae
        }
      ) : /* @__PURE__ */ p(da, { width: i, children: K ? /* @__PURE__ */ p(En, { isLoading: K, position: "left" }) : /* @__PURE__ */ p(aa, {}) }),
      E && L && !I && (w == null ? void 0 : w.resourceIndex) > -1 && /* @__PURE__ */ p(Ol, { tooltipData: w })
    ] })
  ] });
}, ha = x.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.primary};
`, en = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({ $at: e }) => e ?? "start"};
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : e === "center" ? "center" : "flex-start"};
`, pa = x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, mr = x.button`
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
`, ma = x.button`
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
`, ga = x.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`, ya = x.div`
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
`, gr = x.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 650;
  color: ${({ $primary: e }) => e ? "#fff" : "#3a4c46"};
  border: 1px solid ${({ $primary: e }) => e ? "transparent" : "#c8d5cd"};
  background: ${({ theme: e, $primary: n }) => n ? e.colors.accent : "#fff"};
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
`, va = x.label`
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
`, xa = x.button`
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
`, ba = x.span`
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
`, ct = ({ children: e, sw: n = 2 }) => /* @__PURE__ */ p("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: n, strokeLinecap: "round", strokeLinejoin: "round", children: e }), wa = () => {
  var n, t;
  const e = document.getElementById(io);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (n = e == null ? void 0 : e.requestFullscreen) == null || n.call(e);
}, Sa = () => {
  const { config: e, date: n, zoom: t, handleGoNext: r, handleGoPrev: o, handleGoToday: s, setZoom: i, goToDate: c, toggleDisplayActiveUnits: d } = Ze();
  Ve();
  const { filterButtonState: a = -1 } = e, l = () => {
    var f;
    (f = document.querySelector(`#${We} input[placeholder]`)) == null || f.focus();
  };
  return /* @__PURE__ */ W(ha, { width: 0, children: [
    /* @__PURE__ */ W(en, { $at: "start", children: [
      /* @__PURE__ */ p(ga, { children: n.locale(D.locale()).format("MMMM YYYY") }),
      /* @__PURE__ */ W(ya, { children: [
        /* @__PURE__ */ p("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ p("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ p("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ W(va, { children: [
        /* @__PURE__ */ W(ct, { children: [
          /* @__PURE__ */ p("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ p("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ p("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ p("input", { type: "date", onChange: (f) => f.target.value && c(f.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ p(en, { $at: "center", children: /* @__PURE__ */ W(pa, { children: [
      /* @__PURE__ */ p(mr, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ p(ct, { children: /* @__PURE__ */ p("path", { d: "m15 18-6-6 6-6" }) }) }),
      /* @__PURE__ */ p(ma, { onClick: s, children: "Hoy" }),
      /* @__PURE__ */ p(mr, { onClick: r, "aria-label": "Siguiente", children: /* @__PURE__ */ p(ct, { children: /* @__PURE__ */ p("path", { d: "m9 18 6-6-6-6" }) }) })
    ] }) }),
    /* @__PURE__ */ W(en, { $at: "end", children: [
      /* @__PURE__ */ W(xa, { onClick: l, children: [
        /* @__PURE__ */ W(ct, { children: [
          /* @__PURE__ */ p("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ p("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ p("span", { className: "k", children: "⌘K" })
      ] }),
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ W(gr, { $primary: !!a, onClick: d, children: [
        /* @__PURE__ */ p(ct, { children: /* @__PURE__ */ p("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ p(ba, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ W(gr, { onClick: wa, children: [
        /* @__PURE__ */ p(ct, { children: /* @__PURE__ */ p("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] })
    ] })
  ] });
}, Ca = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ma = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), ka = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), $a = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Da = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ea = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), _a = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Ta = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Aa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Pa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Ia = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ya = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Oa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), La = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ oe.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Ra = {
  add: Ca,
  subtract: Ma,
  filter: ka,
  arrowLeft: $a,
  arrowRight: Da,
  defaultAvatar: Ea,
  calendarWarning: _a,
  calendarFree: Ta,
  arrowDown: Pa,
  arrowUp: Aa,
  search: Ia,
  close: Ya,
  moon: Oa,
  sun: La
}, tn = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = Xt(), i = Ra[e];
  return i ? /* @__PURE__ */ p(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.accent,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, Na = (e, n, t) => ({
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
})[n];
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
  ${({ theme: e, variant: n, disabled: t }) => Na(e, n, t)}
`;
const Ba = x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${so}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Oe};
`, Ha = x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, za = x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, Fa = x.div`
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
`, Wa = x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, ja = x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, Za = x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({ $sev: e }) => e === 2 ? "#c6483d" : e === 1 ? "#d98a22" : "#93b1a6"};
`, Va = x.div`
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
`, Ga = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, Xa = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, Ua = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, Ka = x.div`
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
`, Ja = () => {
  const { date: e, zoom: n, data: t, goToDate: r } = Ze(), o = Ve(), s = ge(null), [i, c] = me(null), d = ke(
    () => Array.from({ length: 12 }, (u, h) => D().month(h).format("MMM").toUpperCase()),
    [o]
  ), a = e.year(), l = ke(() => D(new Date(a, 0, 1)), [a]), f = ke(
    () => D(new Date(a + 1, 0, 1)).diff(l, "day"),
    [a, l]
  ), y = (u) => u.diff(l, "day") / f * 100, w = ke(() => {
    const u = Math.ceil(f / 7), h = new Array(u).fill(0), b = new Array(u).fill(0);
    for (const A of t ?? [])
      for (const O of A.data ?? []) {
        const K = D(O.startDate);
        if (K.year() !== a)
          continue;
        const U = Math.floor(K.diff(l, "day") / 7);
        if (U < 0 || U >= u)
          continue;
        h[U] += 1;
        const E = O.readiness === "sin_chofer" ? 2 : O.readiness === "sin_avisar" ? 1 : 0;
        E > b[U] && (b[U] = E);
      }
    const k = Math.max(1, ...h);
    return h.map((A, O) => ({ h: A / k * 100, sev: b[O] }));
  }, [t, a, l, f]), v = D(), M = v.year() === a ? y(v) : null, m = (u) => {
    const { startDate: h, endDate: b } = Ut(u, n), k = Math.max(0, y(h));
    return { left: k, width: Math.min(100, y(b)) - k, startDate: h, endDate: b };
  }, L = m(e), F = i ? m(i.d) : null, I = (u) => `${u.date()} ${d[u.month()]}`, P = (u) => {
    var k;
    const h = (k = s.current) == null ? void 0 : k.getBoundingClientRect();
    if (!h)
      return null;
    const b = Math.min(1, Math.max(0, (u - h.left) / h.width));
    return { f: b, d: l.add(Math.round(b * f), "day") };
  };
  return /* @__PURE__ */ W(Ba, { children: [
    /* @__PURE__ */ W(Ha, { children: [
      "Navegar",
      /* @__PURE__ */ p("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ W(
      za,
      {
        ref: s,
        onClick: (u) => {
          const h = P(u.clientX);
          h && r(h.d.toDate());
        },
        onMouseMove: (u) => {
          const h = P(u.clientX);
          h && c({ left: h.f * 100, d: h.d });
        },
        onMouseLeave: () => c(null),
        children: [
          /* @__PURE__ */ p(Fa, { children: d.map((u, h) => /* @__PURE__ */ p("span", { style: { left: `${y(D(new Date(a, h, 1)))}%` }, children: u }, h)) }),
          d.map(
            (u, h) => h === 0 ? null : /* @__PURE__ */ p(Wa, { style: { left: `${y(D(new Date(a, h, 1)))}%` } }, h)
          ),
          /* @__PURE__ */ p(ja, { children: w.map((u, h) => /* @__PURE__ */ p(Za, { $sev: u.sev, style: { height: `${u.h}%` } }, h)) }),
          /* @__PURE__ */ p(Ga, { style: { left: `${L.left}%`, width: `${L.width}%` } }),
          M !== null && /* @__PURE__ */ p(Va, { style: { left: `${M}%` }, children: /* @__PURE__ */ p("span", { children: "HOY" }) }),
          i && F && /* @__PURE__ */ W(Ee, { children: [
            /* @__PURE__ */ p(Xa, { style: { left: `${F.left}%`, width: `${F.width}%` } }),
            /* @__PURE__ */ p(Ua, { style: { left: `${i.left}%` } }),
            /* @__PURE__ */ p(Ka, { style: { left: `${i.left}%` }, children: `${I(F.startDate)} – ${I(F.endDate)}` })
          ] })
        ]
      }
    )
  ] });
}, qa = x.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Qa = x.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? so : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, ec = x.div`
  position: relative;
`, tc = ({
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
  onMultiTimeRangeSelect: y,
  clickToAddConfig: w
}) => {
  const { goToDate: v, handleGoToday: M, zoomIn: m, zoomOut: L, zoom: F } = Ze();
  return Fr(
    l,
    () => ({
      goToDate: v,
      goToToday: M,
      setZoom: (I) => {
        if (!lo(I))
          return;
        const P = I - F;
        if (P > 0)
          for (let u = 0; u < P; u++)
            m();
        else
          for (let u = 0; u < Math.abs(P); u++)
            L();
      }
    }),
    [v, M, F, m, L]
  ), /* @__PURE__ */ p(
    fa,
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
      onMultiTimeRangeSelect: y,
      clickToAddConfig: w
    }
  );
}, wd = Tn(function({
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
  onEventDrop: y,
  onEventDrag: w,
  draggableConfig: v,
  onTimeRangeSelect: M,
  onMultiTimeRangeSelect: m,
  clickToAddConfig: L
}, F) {
  var _;
  const I = ke(
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
  ), P = ge(null), u = ge(null), [h, b] = me((_ = P.current) == null ? void 0 : _.clientWidth), k = ke(() => D(s), [s]), [A, O] = me(I.defaultTheme ?? "light"), K = () => {
    O(A === "light" ? "dark" : "light");
  }, U = A === "light" ? Ms : ks, E = I.theme ? I.theme[U.mode] : {}, T = {
    ...U,
    colors: {
      ...U.colors,
      ...E
    }
  };
  return Fr(
    F,
    () => ({
      goToDate: (N) => {
        var R;
        return (R = u.current) == null ? void 0 : R.goToDate(N);
      },
      goToToday: () => {
        var N;
        return (N = u.current) == null ? void 0 : N.goToToday();
      },
      setZoom: (N) => {
        var R;
        return (R = u.current) == null ? void 0 : R.setZoom(N);
      }
    }),
    []
  ), Vt(() => {
    const N = () => {
      P.current && b(P.current.clientWidth);
    };
    return N(), window.addEventListener("resize", N), () => window.removeEventListener("resize", N);
  }, []), /* @__PURE__ */ W(Ee, { children: [
    /* @__PURE__ */ p(Cs, {}),
    /* @__PURE__ */ p(bs, { theme: T, children: /* @__PURE__ */ p(ra, { lang: I.lang, translations: I.translations, children: /* @__PURE__ */ p(
      mi,
      {
        data: n,
        isLoading: !!f,
        config: I,
        onRangeChange: i,
        defaultStartDate: k,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: /* @__PURE__ */ W(qa, { id: io, children: [
          /* @__PURE__ */ p(
            Qa,
            {
              showScroll: !!n.length,
              $footer: I.showOverview !== !1 && !!n.length,
              id: We,
              ref: P,
              children: /* @__PURE__ */ p(ec, { children: /* @__PURE__ */ p(
                tc,
                {
                  data: n,
                  baseData: r,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: h ?? 0,
                  onItemClick: l,
                  toggleTheme: K,
                  onEventDrop: y,
                  onEventDrag: w,
                  draggableConfig: v,
                  schedulerRef: u,
                  onTimeRangeSelect: M,
                  onMultiTimeRangeSelect: m,
                  clickToAddConfig: L
                }
              ) })
            }
          ),
          I.showOverview !== !1 && !!n.length && /* @__PURE__ */ p(Ja, {})
        ] })
      }
    ) }) })
  ] });
}), nc = x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, rc = x.button`
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
`, oc = x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, sc = x.p`
  ${bt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, yr = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Ve(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ p(nc, { intent: e, children: /* @__PURE__ */ W(rc, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ p(oc, { children: t }),
    /* @__PURE__ */ p(sc, { children: d })
  ] }) });
}, ic = x.div`
  min-width: ${Ie + "px"};
  max-width: ${Ie + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, ac = x.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({ $height: e }) => e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ie}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, cc = x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, lc = x.input`
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
`, dc = x.div`
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
`, uc = x.button`
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
`, fc = xt`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, hc = x.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ye}px;
  height: calc(${ye}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBorder + "33" : e.colors.border};
  border-left: 3px solid
    ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBorder : "transparent"};
  background-color: ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBg : "transparent"};
  transition: 0.5s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${fc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, pc = x.div`
  display: flex;
  align-items: center;
`, mc = x.div`
  margin-right: 0.625rem;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: ${({ theme: e, $provider: n }) => n ? e.colors.subcontractBg : e.colors.accent + "1A"};
  color: ${({ theme: e, $provider: n }) => n ? e.colors.subcontractText : e.colors.accent};
  & svg {
    width: 17px;
    height: 17px;
  }
`, gc = x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, yc = x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, vr = x.p`
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
`, vc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), xc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ p("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ p("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ p("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ p("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ p("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), bc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ p("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ p("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), wc = ({ id: e, item: n, rows: t, onItemClick: r, isSubcontract: o }) => /* @__PURE__ */ p(
  hc,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ W(pc, { children: [
      /* @__PURE__ */ p(mc, { $provider: o, children: vc(n.icon) ? /* @__PURE__ */ p(gc, { src: n.icon, alt: "" }) : o ? /* @__PURE__ */ p(bc, {}) : /* @__PURE__ */ p(xc, {}) }),
      /* @__PURE__ */ W(yc, { children: [
        /* @__PURE__ */ p(vr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ p(vr, { children: n.subtitle })
      ] })
    ] })
  }
), Sc = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder + "24" : e.colors.accent + "14"};
  border-left: 3px solid
    ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder : "transparent"};
  border-bottom: 1px solid
    ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder : e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder + "33" : e.colors.accent + "22"};
  }
`, Cc = x.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, Mc = x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, kc = x.div`
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
`, xr = ({
  label: e,
  count: n,
  isCollapsed: t,
  onToggle: r,
  variant: o = "category"
}) => /* @__PURE__ */ W(Sc, { $variant: o, onClick: r, title: e, children: [
  /* @__PURE__ */ p(kc, { $collapsed: t, children: /* @__PURE__ */ p("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ p(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ p(Cc, { $variant: o, children: e }),
  /* @__PURE__ */ p(Mc, { $variant: o, children: n })
] }), $c = ({
  data: e,
  categories: n,
  headerHeight: t,
  rows: r,
  onLoadNext: o,
  onLoadPrevious: s,
  pageNum: i,
  pagesAmount: c,
  searchInputValue: d,
  onSearchInputChange: a,
  onItemClick: l,
  collapsedGroups: f,
  onToggleGroup: y,
  allGroupIds: w,
  onExpandAll: v,
  onCollapseAll: M
}) => {
  const [m, L] = me(!1), F = Ve(), I = () => L((E) => !E), P = n ? [...n].sort((E, T) => E.maxPassengers - T.maxPassengers) : [], u = P.length > 0, h = w.length > 0, b = h && f.size === w.length;
  h && f.size;
  const k = e.filter((E) => E.isSubcontract), A = F.subcontract ?? "Subcontract", O = (E) => {
    const T = e.indexOf(E);
    return /* @__PURE__ */ p(
      wc,
      {
        id: E.id,
        item: E.label,
        rows: r[T],
        onItemClick: l,
        isSubcontract: E.isSubcontract
      },
      E.id
    );
  }, K = (E) => {
    const T = e.filter(
      (R) => !R.isSubcontract && R.categoryId === E.id
    );
    if (T.length === 0)
      return null;
    const _ = f.has(E.id), N = E.name;
    return /* @__PURE__ */ W("div", { children: [
      /* @__PURE__ */ p(
        xr,
        {
          label: N,
          count: T.length,
          isCollapsed: _,
          onToggle: () => y(E.id),
          variant: "category"
        }
      ),
      !_ && T.map(O)
    ] }, E.id);
  }, U = e.filter(
    (E) => !E.isSubcontract && (!E.categoryId || !u)
  );
  return /* @__PURE__ */ W(ic, { children: [
    /* @__PURE__ */ W(ac, { $height: t, children: [
      /* @__PURE__ */ W(cc, { children: [
        /* @__PURE__ */ W(dc, { isFocused: m, children: [
          /* @__PURE__ */ p(
            lc,
            {
              placeholder: F.search,
              value: d,
              onChange: a,
              onFocus: I,
              onBlur: I
            }
          ),
          /* @__PURE__ */ p(tn, { iconName: "search" })
        ] }),
        h && /* @__PURE__ */ p(
          uc,
          {
            title: b ? "Expand all" : "Collapse all",
            onClick: b ? v : M,
            $allCollapsed: b,
            children: /* @__PURE__ */ p("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: b ? /* @__PURE__ */ W(Ee, { children: [
              /* @__PURE__ */ p("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ p("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ W(Ee, { children: [
              /* @__PURE__ */ p("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ p("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ p(
        yr,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ p(tn, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    u ? P.map(K) : U.map(O),
    u && U.length > 0 && U.map(O),
    k.length > 0 && /* @__PURE__ */ W(Ee, { children: [
      /* @__PURE__ */ p(
        xr,
        {
          label: A,
          count: k.length,
          isCollapsed: f.has("__subcontract__"),
          onToggle: () => y("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !f.has("__subcontract__") && k.map(O)
    ] }),
    /* @__PURE__ */ p(
      yr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ p(tn, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, Dc = x.div`
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
`, Ec = xt`
from{
    left: -100%;
}
to{
    left: 100%;
}`, _c = x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ec} 1s infinite;
`, Tc = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ p(Dc, { position: n, children: /* @__PURE__ */ p(_c, {}) }) : null, En = Tc, Ge = (e, n) => {
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
    topText: y,
    bottomText: w,
    strokeStyle: v,
    labelBetweenCells: M
  } = e;
  if (t.beginPath(), t.strokeStyle = v ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), M ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const m = r + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(d, m, c);
  }
  if (l && f && y && w) {
    t.fillStyle = f, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = y.font;
    const m = r + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, m, y.y), t.font = w.font;
    const L = r + s / 2 - t.measureText(w.label).width / 2;
    t.fillStyle = w.color, t.fillText(w.label, L, w.y);
  }
}, _n = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, Ac = (e, n, t, r) => {
  const o = gt - tt / Ds, s = gt - tt / Es, i = je + St;
  let c = 0;
  for (let d = 0; d < n; d++) {
    const a = co(
      D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    ), l = a.isCurrentDay;
    if (Ge(
      {
        ctx: e,
        x: c,
        y: i,
        width: $e,
        height: tt,
        isBottomRow: !0,
        // OPAQUE today fill (currentDay, same as the grid's today column) — the old `today+"26"` was 15% alpha, so
        // events scrolling under the header showed through the HOY cell.
        fillStyle: l ? r.colors.currentDay : a.isBusinessDay ? r.colors.gridBackground : r.colors.primary,
        topText: {
          y: o,
          label: l ? "" : a.dayName.toUpperCase(),
          font: Re.bottomRow.name,
          color: _n({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: l ? `700 10px ${Oe}` : Re.bottomRow.number,
          color: l ? r.colors.today : _n(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            r
          )
        }
      },
      r
    ), l) {
      const w = c + $e / 2, v = o - 13 / 2;
      e.save(), e.fillStyle = r.colors.today, e.beginPath(), e.roundRect ? e.roundRect(w - 30 / 2, v, 30, 13, 5) : e.rect(w - 30 / 2, v, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${Oe}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", w, v + 13 / 2 + 0.5), e.restore();
    }
    c += $e;
  }
}, Pc = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Ye;
  const s = je;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= hn && (c = 0);
    const a = ao(t, d) * Ye;
    Ge(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: St,
        textYPos: oo,
        label: D().month(c).format("MMMM").toUpperCase(),
        font: Re.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, Ic = (e, n, t) => {
  let o = 0, s = 0, i = D(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * $e + $e;
  for (let c = 0; c < hn; c++)
    i > hn - 1 && (i = 0), s = D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * $e, Ge(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: je,
        textYPos: Rn,
        label: D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: Re.topRow
      },
      t
    ), o += s, i++;
}, Yc = (e, n, t, r) => {
  const o = 7 * $e, s = je, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % ir;
    f <= 0 && (f += ir), l !== 1 && a === 0 && (d = -l * $e + $e), Ge(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: St,
        textYPos: oo,
        label: `${t.toUpperCase()} ${f}`,
        font: Re.middleRow
      },
      r
    ), d += o;
  }
}, Oc = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t ? n.colors.currentDay : r ? n.colors.primary : n.colors.secondary;
}, Lc = (e, n, t, r, o) => {
  const s = gt - tt / 1.6, i = gt - tt / 4.5, c = je + St;
  let d = 0;
  for (let a = 0; a < n; a++) {
    const l = D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame(D(), "week");
    Ge(
      {
        ctx: e,
        x: d,
        y: c,
        width: yt,
        height: tt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : Oc({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: f ? `700 14px ${Oe}` : Re.bottomRow.name,
          color: f ? o.colors.today : _n({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: r.toUpperCase(),
          font: Re.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += yt;
  }
}, Rc = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (lr(s) - t + 1) * Ye, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = lr(s + d) * Ye), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ye) * Ye), Ge(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: je,
        textYPos: Rn,
        label: (s + d).toString(),
        font: Re.topRow
      },
      r
    ), c += a, l += a, d++;
}, Nc = (e, n, t, r) => {
  const o = Math.floor(n / jt) + 2, s = jt * Te;
  let d = -D(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Te + 0.5 * Te;
  for (let a = 0; a < o; a++) {
    const l = D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Ge(
      {
        ctx: e,
        x: d,
        y: vt,
        width: s,
        height: _t,
        textYPos: vt + _t / 2 + 2,
        label: l,
        font: Re.bottomRow.number
      },
      r
    ), d += s;
  }
}, Bc = (e, n, t, r) => {
  const o = Math.ceil(n / jt), s = D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Te;
  for (let f = 0; f < a; f++) {
    const y = D(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = D(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), M = v.format("MMMM").toUpperCase(), m = v.diff(y, "hour") + 1, L = f === 0 ? m * Te : n * Te;
    Ge(
      {
        ctx: e,
        x: l,
        y: 0,
        width: L,
        height: vt,
        textYPos: Rn,
        label: M,
        font: Re.topRow
      },
      r
    ), l += L;
  }
}, Hc = (e, n, t, r) => {
  let o = 0;
  const s = vt + _t, i = D(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Te;
  for (let d = 0; d < n; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    Ge(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: fn,
        label: a,
        font: Re.bottomRow.hoursInDay,
        textYPos: vt + _t + fn / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += Te;
  }
}, zc = (e, n, t, r, o, s, i) => {
  switch (n) {
    case 0:
      Rc(e, r, s, i), Pc(e, t, r, i), Lc(e, t, r, o, i);
      break;
    case 1:
      Ic(e, r, i), Yc(e, r, o, i), Ac(e, t, r, i);
      break;
    case 2:
      Bc(e, t, r, i), Nc(e, t, r, i), Hc(e, t, r, i);
      break;
  }
}, Fc = x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, Wc = x.div`
  position: sticky;
  left: ${Ie}px;
  width: calc(${({ $width: e }) => e}px - ${Ie}px);
  z-index: 3;
`, jc = x.div`
  height: ${gt}px;
  display: block;
`, Zc = x.canvas``, Vc = {
  transfer: /* @__PURE__ */ W(Ee, { children: [
    /* @__PURE__ */ p("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ p("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ W(Ee, { children: [
    /* @__PURE__ */ p("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ p("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ W(Ee, { children: [
    /* @__PURE__ */ p("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ p("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ W(Ee, { children: [
    /* @__PURE__ */ p("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ p("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ p("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ W(Ee, { children: [
    /* @__PURE__ */ p("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ p("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ W(Ee, { children: [
    /* @__PURE__ */ p("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ p("path", { d: "M12 7.5V12l3 2" })
  ] })
}, ze = ({
  name: e,
  className: n,
  strokeWidth: t = 2
}) => /* @__PURE__ */ p(
  "svg",
  {
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: t,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: Vc[e]
  }
), Gc = x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, br = x.span`
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
`, Xc = x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, Uc = x.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, Kc = x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, Jc = x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, qc = x.span`
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
`, Qc = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], el = () => /* @__PURE__ */ W(Gc, { children: [
  /* @__PURE__ */ p(br, { children: "Leyenda" }),
  /* @__PURE__ */ W(Nt, { children: [
    /* @__PURE__ */ p(ze, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ W(Nt, { children: [
    /* @__PURE__ */ p(ze, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ W(Nt, { children: [
    /* @__PURE__ */ p(ze, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ W(Nt, { children: [
    /* @__PURE__ */ p(Xc, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ p(Uc, {}),
  /* @__PURE__ */ W(br, { children: [
    "Estado ",
    /* @__PURE__ */ p("em", { children: "franja izq. + punto esq." })
  ] }),
  Qc.map((e) => /* @__PURE__ */ W(Kc, { children: [
    /* @__PURE__ */ p(Jc, { style: { background: e.stripe } }),
    /* @__PURE__ */ p(qc, { style: { color: e.color }, children: /* @__PURE__ */ p(ze, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), tl = Tn(function({ zoom: n, topBarWidth: t, showThemeToggle: r, toggleTheme: o }, s) {
  const { week: i } = Ve(), { date: c, cols: d, dayOfYear: a, startDate: l, config: f } = Ze(), y = ge(null), w = Xt(), v = ce(
    (M) => {
      const m = zn(), F = (n === 2 ? $s : gt) + 1;
      fo(M, m, F), zc(M, n, d, l, i, a, w);
    },
    [d, a, l, i, n, w]
  );
  return xe(() => {
    if (!y.current)
      return;
    const M = y.current.getContext("2d");
    if (!M)
      return;
    const m = () => v(M);
    return window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [v]), xe(() => {
    const M = y.current;
    if (!M)
      return;
    M.style.letterSpacing = "1px";
    const m = M.getContext("2d");
    m && v(m);
  }, [c, n, v]), /* @__PURE__ */ W(Fc, { ref: s, children: [
    (f.showTopbar !== !1 || f.showLegend !== !1) && /* @__PURE__ */ W(Wc, { $width: t, children: [
      f.showTopbar !== !1 && /* @__PURE__ */ p(Sa, { width: t, showThemeToggle: r, toggleTheme: o }),
      f.showLegend !== !1 && /* @__PURE__ */ p(el, {})
    ] }),
    /* @__PURE__ */ p(jc, { id: _s, children: /* @__PURE__ */ p(Zc, { ref: y }) })
  ] });
}), nl = (e, n, t) => {
  let r;
  switch (t) {
    case 0:
      r = Ye;
      break;
    case 2:
      r = Te;
      break;
    default:
      r = $e;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = n.startDate.startOf("day"), d = n.endDate.startOf("day"), a = () => {
    let l;
    switch (t) {
      case 2:
        l = (e.startDate.diff(n.startDate, "minute") / De + 1) * r - r / 2;
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
          e.endDate.diff(e.startDate, "minute") / De * r,
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
          e.endDate.diff(n.startDate, "minute") / De * r + 0.5 * r,
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
          n.endDate.diff(e.startDate, "minute") / De * r,
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
          n.endDate.diff(n.startDate, "minute") / De * r,
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
}, rl = (e, n, t, r, o, s) => {
  const i = e * ye + Ts, c = n.hour(), d = t.hour();
  let a, l, f, y;
  switch (s) {
    case 2: {
      a = D(r), l = D(o), f = D(n).hour(c).minute(0), y = D(t).hour(d).minute(0);
      break;
    }
    default: {
      a = D(r).hour(0).minute(0), l = D(o).hour(23).minute(59), f = n, y = t;
      break;
    }
  }
  return {
    ...nl(
      { startDate: a, endDate: l },
      { startDate: f, endDate: y },
      s
    ),
    y: i
  };
}, vo = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
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
  ${bt}
  ${wt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const ol = xt`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, sl = x.button`
  ${bt}
  position: absolute;
  height: ${Ln}px;
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
  cursor: ${({ isDraggable: e, isDragging: n }) => e ? n ? "grabbing" : "grab" : "not-allowed"};
  opacity: ${({ isDragging: e }) => e ? 0.3 : 1};
  transition: opacity 0.2s ease;
  /* Motion (gated on reduced-motion): fade/scale a newly-mounted tile in; glide survivors to a new row when a
     unit/group above them is added/removed/collapsed (top only — left/width recompute on horizontal scroll-load);
     and a subtle lift + deeper shadow on hover. transform/box-shadow are transitioned so the hover lift and the
     exit shrink are smooth. translateY (not scale) on hover to avoid blurring the sticky floating text body. */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${ol} 180ms ease-out;
    transition: opacity 0.2s ease, top 220ms cubic-bezier(0.16, 1, 0.3, 1), transform 160ms ease,
      box-shadow 160ms ease;
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
`, il = x.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`, al = x.div`
  position: sticky;
  left: ${Ie + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, wr = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, cl = x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, ll = x.span`
  ${wt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, dl = x.span`
  ${wt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, ul = x.span`
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
`, fl = x.div`
  ${wt}
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
`, Sr = x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Cr = x.span`
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
`, Mr = x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, hl = x.div`
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
`, kr = x.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, pl = 34, ml = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, gl = "#3E8E5A", yl = "#D98A22", $r = ({
  row: e,
  data: n,
  zoom: t,
  isSubcontract: r = !1,
  onTileClick: o,
  onDragStart: s,
  isDragging: i = !1,
  isDraggable: c = !0,
  yOffset: d = 0,
  exiting: a = !1
}) => {
  const { date: l } = Ze(), f = Ut(l, t), { y, x: w, width: v } = rl(
    e,
    f.startDate,
    f.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: M } = Xt(), m = ge(null), L = D(n.startDate).isSame(D(n.endDate), "day"), F = n.eventType === Tt.Tour, I = n.eventType === Tt.Transfer, P = L && (F || I), u = (U) => {
    m.current = { x: U.clientX, y: U.clientY }, c && s && (U.preventDefault(), s(n, U));
  }, h = (U) => {
    if (m.current) {
      const E = Math.abs(U.clientX - m.current.x), T = Math.abs(U.clientY - m.current.y);
      Math.sqrt(E * E + T * T) <= 5 && (o == null || o(n)), m.current = null;
    } else
      o == null || o(n);
  }, b = {
    left: `${w}px`,
    top: `${y + d}px`,
    backgroundColor: `${n.bgColor ?? M.defaultTile}`,
    width: `${v}px`,
    color: vo(n.bgColor ?? "")
  }, k = !r && n.readiness ? ml[n.readiness] : null, A = r && n.subcontractConfirmed === !1, O = r ? A ? yl : gl : k == null ? void 0 : k.stripe, K = (U) => /* @__PURE__ */ W(
    sl,
    {
      "data-segment-id": n.segmentId,
      style: b,
      onClick: h,
      onMouseDown: u,
      onDragStart: (E) => E.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: A,
      $exiting: a,
      children: [
        O && /* @__PURE__ */ p(il, { style: { background: O } }),
        U
      ]
    }
  );
  return K(
    P ? /* @__PURE__ */ W(Ee, { children: [
      (r || k) && /* @__PURE__ */ p(Sr, { $sm: !0, children: r ? /* @__PURE__ */ p(Mr, { children: "SUB" }) : k && /* @__PURE__ */ p(Cr, { $sm: !0, style: { color: k.color }, children: /* @__PURE__ */ p(ze, { name: k.icon, strokeWidth: k.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ W(hl, { $transfer: I, children: [
        /* @__PURE__ */ p(ze, { name: I ? "transfer" : "sun", strokeWidth: 2.4 }),
        v >= pl && /* @__PURE__ */ W(Ee, { children: [
          /* @__PURE__ */ p(kr, { children: D(n.startDate).format("HH:mm") }),
          !I && /* @__PURE__ */ p(kr, { $end: !0, children: D(n.endDate).format("HH:mm") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ W(Ee, { children: [
      /* @__PURE__ */ p(Sr, { children: r ? /* @__PURE__ */ p(Mr, { children: "SUB" }) : k && /* @__PURE__ */ p(Cr, { style: { color: k.color }, children: /* @__PURE__ */ p(ze, { name: k.icon, strokeWidth: k.icon === "check" ? 2.6 : 2.2 }) }) }),
      n.bookingNumber && /* @__PURE__ */ p(ul, { children: n.bookingNumber }),
      /* @__PURE__ */ W(al, { children: [
        /* @__PURE__ */ W(wr, { $pad: !0, children: [
          /* @__PURE__ */ p(cl, { children: /* @__PURE__ */ p(ze, { name: I ? "transfer" : "tour" }) }),
          /* @__PURE__ */ p(ll, { children: n.title })
        ] }),
        n.subtitle && /* @__PURE__ */ p(wr, { children: /* @__PURE__ */ p(dl, { children: n.subtitle }) }),
        n.driver && /* @__PURE__ */ W(fl, { children: [
          /* @__PURE__ */ p(ze, { name: "person" }),
          n.driver
        ] })
      ] })
    ] })
  );
}, Dr = (e, n) => {
  let t = 0;
  for (const r of n)
    e >= r && t++;
  return t * Pe;
}, vl = x.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${ye}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  pointer-events: none;
`, xl = ({
  data: e,
  zoom: n,
  onTileClick: t,
  onDragStart: r,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = []
}) => {
  const { nodes: c, liveMap: d } = ke(() => {
    const v = /* @__PURE__ */ new Map();
    let M = 0;
    return { nodes: e.map((L, F) => {
      if (F > 0 && (M += Math.max(e[F - 1].data.length, 1)), !L.data.some((I) => I.length > 0)) {
        const I = Dr(M, i);
        return [
          /* @__PURE__ */ p(vl, { style: { top: `${M * ye + I}px` }, children: "Disponible" }, `dispo-${L.id}`)
        ];
      }
      return L.data.map(
        (I, P) => I.map((u) => {
          const h = s === u.segmentId, b = o ? o(u) : !1, k = P + M, A = Dr(k, i);
          return v.set(u.segmentId, {
            project: u,
            absoluteRow: k,
            yOffset: A,
            isSubcontract: !!L.isSubcontract
          }), /* @__PURE__ */ p(
            $r,
            {
              row: k,
              data: u,
              zoom: n,
              isSubcontract: L.isSubcontract,
              onTileClick: t,
              onDragStart: r,
              isDragging: h,
              isDraggable: b,
              yOffset: A
            },
            u.segmentId
          );
        })
      );
    }).flat(2), liveMap: v };
  }, [e, t, n, r, o, s, i]), a = ge(/* @__PURE__ */ new Map()), l = ge([]), [f, y] = me([]);
  xe(() => () => l.current.forEach(clearTimeout), []), xe(() => {
    const v = a.current;
    a.current = d;
    const M = [];
    if (v.forEach((F, I) => {
      d.has(I) || M.push(F);
    }), y((F) => {
      let I = F.filter((P) => !d.has(P.project.segmentId));
      for (const P of M)
        I.some((u) => u.project.segmentId === P.project.segmentId) || (I = [...I, P]);
      return I;
    }), !M.length)
      return;
    const m = new Set(M.map((F) => F.project.segmentId)), L = setTimeout(() => {
      y((F) => F.filter((I) => !m.has(I.project.segmentId)));
    }, 220);
    l.current.push(L);
  }, [d]);
  const w = f.filter((v) => !d.has(v.project.segmentId)).map((v) => /* @__PURE__ */ p(
    $r,
    {
      row: v.absoluteRow,
      data: v.project,
      zoom: n,
      isSubcontract: v.isSubcontract,
      yOffset: v.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    v.project.segmentId
  ));
  return /* @__PURE__ */ p(Ee, { children: [...c, ...w] });
}, bl = xl;
x.div`
  box-sizing: border-box;
  font-family: ${Oe};
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
const wl = x.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, Sl = x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, Cl = x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, Ml = x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, kl = x.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, $l = x.div`
  ${bt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Dl = x.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, El = x.div`
  padding: 10px 12px;
`, _l = x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Er = x.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, _r = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Tr = x.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Ar = x.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Pr = x.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Tl = x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Al = x.div``, Pl = x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Il = x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Ir = x.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Ct = x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Mt = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, kt = x.div`
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
const Yl = {
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
}, Ol = ({ tooltipData: e }) => {
  const { mouseCoords: n, reservationData: t } = e, r = ge(null), [o, s] = me("below"), i = Ve(), c = { ...Yl, ...i.tooltip };
  Vt(() => {
    if (!r.current || !n)
      return;
    const w = r.current, { width: v, height: M } = w.getBoundingClientRect(), m = w.parentElement;
    if (!m)
      return;
    const L = m.getBoundingClientRect(), F = 12, I = 4, P = L.height - n.y, u = L.width - n.x;
    let h = n.x + F, b = n.y + F, k = "below";
    u < v + F && (h = n.x - v - F), P < M + F && (b = n.y - M - F, k = "above"), h = Math.max(I, Math.min(h, L.width - v - I)), b = Math.max(I, Math.min(b, L.height - M - I)), s(k), w.style.left = `${h}px`, w.style.top = `${b}px`;
  }, [n]);
  const d = t.reservationType === Tt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, y = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ W(wl, { ref: r, $position: o, children: [
    /* @__PURE__ */ W(Sl, { children: [
      /* @__PURE__ */ W(Cl, { children: [
        /* @__PURE__ */ p(Ml, { children: t.bookingNumber }),
        /* @__PURE__ */ p(kl, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ p($l, { children: t.eventName }),
      t.client && /* @__PURE__ */ p(Dl, { children: t.client })
    ] }),
    /* @__PURE__ */ W(El, { children: [
      /* @__PURE__ */ W(_l, { children: [
        /* @__PURE__ */ W(Er, { children: [
          /* @__PURE__ */ p(_r, { children: c.startDate }),
          /* @__PURE__ */ W(Tr, { children: [
            /* @__PURE__ */ p(Ar, { children: t.startDate }),
            " ",
            /* @__PURE__ */ p(Pr, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ W(Er, { $isEnd: !0, children: [
          /* @__PURE__ */ p(_r, { children: c.endDate }),
          /* @__PURE__ */ W(Tr, { children: [
            /* @__PURE__ */ p(Ar, { children: t.endDate }),
            " ",
            /* @__PURE__ */ p(Pr, { children: t.endTime })
          ] })
        ] })
      ] }),
      y.length > 0 && /* @__PURE__ */ p(Tl, { children: y.map((w, v) => /* @__PURE__ */ W(Al, { children: [
        /* @__PURE__ */ p(Pl, { children: w.label }),
        /* @__PURE__ */ p(Il, { children: w.value })
      ] }, v)) }),
      (t.departureAddress || t.destinationAddress || t.returnAddress) && /* @__PURE__ */ W(Ir, { children: [
        t.departureAddress && /* @__PURE__ */ W(Ct, { children: [
          /* @__PURE__ */ p(Mt, { children: c.salida }),
          /* @__PURE__ */ p(kt, { children: t.departureAddress })
        ] }),
        t.destinationAddress && /* @__PURE__ */ W(Ct, { children: [
          /* @__PURE__ */ p(Mt, { children: c.destino }),
          /* @__PURE__ */ p(kt, { children: t.destinationAddress })
        ] }),
        t.returnAddress && /* @__PURE__ */ W(Ct, { children: [
          /* @__PURE__ */ p(Mt, { children: c.regreso }),
          /* @__PURE__ */ p(kt, { children: t.returnAddress })
        ] })
      ] }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ W(Ir, { children: [
        t.serviceNotes && /* @__PURE__ */ W(Ct, { children: [
          /* @__PURE__ */ p(Mt, { children: c.serviceNotes }),
          /* @__PURE__ */ p(kt, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ W(Ct, { children: [
          /* @__PURE__ */ p(Mt, { children: c.reservationNotes }),
          /* @__PURE__ */ p(kt, { children: t.reservationNotes })
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
const Ll = x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Rl = x.div`
  position: absolute;
  height: ${Ln}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: n, $animateToY: t }) => e && n !== void 0 && t !== void 0 ? `transform: translate3d(${n}px, ${t}px, 0);` : ""}
`, Nl = x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Yr = x.p`
  ${bt}
  ${wt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Bl = x.p`
  ${bt}
  ${wt}
`, Hl = x.div`
  position: sticky;
  left: ${Ie + 16}px;
  overflow: hidden;
`, zl = x.div`
  position: absolute;
  height: ${Ln}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Fl = x.div`
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
`, Wl = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, jl = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Zl = x.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
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
`, Lr = x.div`
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
`, Nr = x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, nn = x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, rn = x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, lt = x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Br = x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Vl = ({
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
    for (const h of d)
      h <= P && u++;
    return P * ye + u * Pe;
  }, [f, y] = me(null), [w, v] = me(0), M = ce((P = 400, u = 300) => {
    const b = t.width, k = 48, A = document.getElementById("react-scheduler");
    if (!A)
      return {
        x: n.x + b + 16,
        y: n.y
      };
    const O = A.scrollLeft, K = A.scrollTop, U = A.clientWidth, E = A.clientHeight, T = n.x - O, _ = n.y - K, N = {
      left: Ie + 16,
      // Avoid left column
      right: U - 16,
      top: 16,
      bottom: E - 16
    }, R = N.right - (T + b), J = T - N.left, Q = N.bottom - (_ + k), se = _ - N.top;
    let ie, B;
    return R >= P + 16 ? ie = T + b + 16 : J >= P + 16 ? ie = T - P - 16 : R >= J ? (ie = T + b + 16, ie + P > N.right && (ie = N.right - P)) : (ie = T - P - 16, ie < N.left && (ie = N.left)), Q >= u + 16 ? B = _ + k + 16 : se >= u + 16 ? B = _ - u - 16 : Q >= se ? (B = _ + k + 16, B + u > N.bottom && (B = N.bottom - u)) : (B = _ - u - 16, B < N.top && (B = N.top)), ie = Math.max(N.left, Math.min(ie, N.right - P)), B = Math.max(N.top, Math.min(B, N.bottom - u)), {
      x: ie + O,
      y: B + K
    };
  }, [n.x, n.y, t.width]);
  xe(() => {
    s === "dragging" && e && w === 0 ? v(n.x) : s === "idle" && v(0);
  }, [s, e, n.x, w]), xe(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const m = ke(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const P = [];
    let u = 0;
    for (const h of i) {
      const b = Math.max(h.data.length, 1);
      if (h.capacity !== void 0 && e.totalPassengers > h.capacity)
        for (let k = 0; k < b; k++)
          P.push(u + k);
      u += b;
    }
    return P;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const L = s === "animating", F = vo(e.bgColor ?? ""), I = () => {
    if (!r)
      return "";
    const P = D(r.startDate).format("MMM D, HH:mm"), u = D(r.endDate).format("HH:mm");
    return `${P} - ${u}`;
  };
  return /* @__PURE__ */ W(Ll, { children: [
    m.map((P) => /* @__PURE__ */ p(
      jl,
      {
        style: {
          top: `${l(P)}px`,
          height: `${ye}px`
        }
      },
      P
    )),
    r && s === "dragging" && /* @__PURE__ */ p(
      Wl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ W(Ee, { children: [
      /* @__PURE__ */ p(
        zl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (ye - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ p(
        Fl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (ye - 48) / 2}px`
          },
          children: I()
        }
      )
    ] }),
    r && s === "dragging" && c && /* @__PURE__ */ p(
      Zl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          left: "0px",
          top: `${l(r.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    r && o && r.hasConflict && r.conflicts && r.conflicts.length > 0 && s === "dragging" && (() => {
      const P = M(400, 300);
      return /* @__PURE__ */ W(
        Or,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`
          },
          children: [
            /* @__PURE__ */ W(Lr, { children: [
              /* @__PURE__ */ p(Rr, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ p(Nr, { children: r.conflicts.map((u, h) => {
              const b = D(r.startDate).format("YYYY-MM-DD"), k = D(r.endDate).format("YYYY-MM-DD"), A = D(u.event.startDate).format("YYYY-MM-DD"), O = D(u.event.endDate).format("YYYY-MM-DD"), K = D(u.conflictStart).format("YYYY-MM-DD"), U = D(u.conflictEnd).format("YYYY-MM-DD"), E = b !== k, T = A !== O, _ = K !== U, N = E ? D(r.startDate).format("MMM D, h:mm A") : D(r.startDate).format("h:mm A"), R = E ? D(r.endDate).format("MMM D, h:mm A") : D(r.endDate).format("h:mm A"), J = T ? D(u.event.startDate).format("MMM D, h:mm A") : D(u.event.startDate).format("h:mm A"), Q = T ? D(u.event.endDate).format("MMM D, h:mm A") : D(u.event.endDate).format("h:mm A"), se = _ ? D(u.conflictStart).format("MMM D, h:mm A") : D(u.conflictStart).format("h:mm A"), ie = _ ? D(u.conflictEnd).format("MMM D, h:mm A") : D(u.conflictEnd).format("h:mm A"), B = _ ? "" : D(u.conflictStart).format("MMM D"), z = r.startDate.getTime(), G = r.endDate.getTime(), te = u.event.startDate.getTime(), S = u.event.endDate.getTime(), Y = z >= te && z < S, C = G > te && G <= S, Z = z <= te && G >= S, q = te <= z && S >= G;
              let H = !1, g = !1, V = !1, $ = !1, j = "";
              return Z || q ? (H = !0, g = !0, V = !0, $ = !0, j = `⚠️ ${a.conflicts.changeBoth}`) : Y && C ? (H = !0, g = !0, V = !0, $ = !0, j = `⚠️ ${a.conflicts.changeBoth}`) : Y ? (H = !0, $ = !0, j = `⚠️ ${a.conflicts.changeStart}`) : C && (g = !0, V = !0, j = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ W(nn, { children: [
                /* @__PURE__ */ W(rn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ W(lt, { children: [
                  /* @__PURE__ */ p("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  H ? /* @__PURE__ */ p("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: N }) : N,
                  " ",
                  a.conflicts.to,
                  " ",
                  g ? /* @__PURE__ */ p("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: R }) : R
                ] }),
                /* @__PURE__ */ W(lt, { children: [
                  /* @__PURE__ */ p("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  V ? /* @__PURE__ */ p("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: J }) : J,
                  " ",
                  a.conflicts.to,
                  " ",
                  $ ? /* @__PURE__ */ p("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Q }) : Q
                ] }),
                /* @__PURE__ */ W(Br, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  B && `${B}, `,
                  se,
                  " - ",
                  ie
                ] }),
                j && /* @__PURE__ */ p(lt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: j })
              ] }, h);
            }) })
          ]
        }
      );
    })(),
    r && o && !r.hasConflict && r.nearbyEvents && r.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const P = M(400, 400);
      return /* @__PURE__ */ W(
        Or,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ W(Lr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ p(Rr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ W(Nr, { children: [
              (() => {
                const u = r.nearbyEvents.some((A) => A.position === "before"), h = r.nearbyEvents.some((A) => A.position === "after"), b = D(r.startDate).format("h:mm A"), k = D(r.endDate).format("h:mm A");
                return /* @__PURE__ */ W(nn, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ W(rn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(lt, { style: { fontWeight: 600 }, children: [
                    D(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ p("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: b }) : b,
                    " ",
                    a.conflicts.to,
                    " ",
                    h ? /* @__PURE__ */ p("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: k }) : k
                  ] }),
                  /* @__PURE__ */ p(lt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              r.nearbyEvents.map((u, h) => {
                const b = D(u.event.startDate).format("YYYY-MM-DD"), k = D(u.event.endDate).format("YYYY-MM-DD"), A = b !== k, O = A ? D(u.event.startDate).format("MMM D, h:mm A") : D(u.event.startDate).format("h:mm A"), K = A ? D(u.event.endDate).format("MMM D, h:mm A") : D(u.event.endDate).format("h:mm A"), U = D(u.event.startDate).format("MMM D"), E = Math.floor(u.timeGap / (1e3 * 60 * 60)), T = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), _ = E > 0 ? `${E}h ${T}m` : `${T}m`, N = u.position === "after", R = u.position === "before";
                return /* @__PURE__ */ W(nn, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ W(rn, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(lt, { children: [
                    !A && `${U}: `,
                    N ? /* @__PURE__ */ p("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: O }) : O,
                    " ",
                    a.conflicts.to,
                    " ",
                    R ? /* @__PURE__ */ p("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: K }) : K
                  ] }),
                  /* @__PURE__ */ W(Br, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    _,
                    " ",
                    u.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, h);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ p(
      Rl,
      {
        $isAnimating: L,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: L ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: L ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: L ? void 0 : `translate3d(${c ? w : n.x}px, ${n.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: F
        },
        children: /* @__PURE__ */ p(Nl, { children: /* @__PURE__ */ W(Hl, { children: [
          /* @__PURE__ */ p(Yr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ p(Yr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ p(Bl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Gl = Vl, Xl = xt`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Ul = x.div`
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
  animation: ${Xl} 1.5s ease-in-out infinite;
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
`, Kl = ({ selectionBox: e, isSelecting: n }) => !e || !n ? null : /* @__PURE__ */ p(
  Ul,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Jl = Kl, ql = xt`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Ql = x.div`
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
  animation: ${ql} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, ed = x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, td = x.span`
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
`, nd = x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, rd = x.span`
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
const od = x.div`
  display: flex;
  gap: 8px;
`, Hr = x.button`
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
`, sd = ({ selections: e, onConfirm: n, onClear: t }) => {
  var v;
  const o = Ve().multiSelect, s = ke(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, w = /* @__PURE__ */ W(Ql, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ W(ed, { children: [
      /* @__PURE__ */ W(td, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ W(nd, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ p(rd, { children: c })
    ] }),
    /* @__PURE__ */ W(od, { children: [
      /* @__PURE__ */ W(Hr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ p(Hr, { variant: "primary", $hasConflicts: y, onClick: n, children: y ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return Mo(w, document.body);
}, id = sd, ad = xt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, cd = x.div`
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
  animation: ${ad} 0.2s ease-out;
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
`, ld = x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, dd = x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, ud = x.button`
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
`, fd = ({
  selections: e,
  data: n,
  zoom: t,
  startDate: r,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = me(null), [a, l] = me({ x: 0, y: 0 }), f = ge(null), y = ke(() => {
    switch (t) {
      case 0:
        return Ye * 7;
      case 1:
        return $e;
      case 2:
        return Te;
      default:
        return $e;
    }
  }, [t]), w = ke(() => D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), v = ke(() => e.map((h, b) => {
    let k = 0, A = !1;
    for (const J of n) {
      if (J.id === h.resourceId) {
        A = !0;
        break;
      }
      k += Math.max(J.data.length, 1);
    }
    if (!A)
      return null;
    const O = D(h.startDate), K = D(h.endDate);
    let U, E;
    switch (t) {
      case 0:
        U = Math.floor(O.diff(w, "days") / 7), E = Math.max(1, Math.ceil(K.diff(O, "days") / 7) + 1);
        break;
      case 1:
        U = O.diff(w, "days"), E = Math.max(1, K.diff(O, "days") + 1);
        break;
      case 2:
        U = O.diff(w, "hours"), E = Math.max(1, K.diff(O, "hours") + 1);
        break;
      default:
        U = 0, E = 1;
    }
    const T = U * y;
    let _ = 0;
    for (const J of i)
      J <= k && _++;
    const N = k * ye + _ * Pe, R = E * y;
    return {
      index: b,
      selection: h,
      x: T,
      y: N,
      width: R,
      height: ye
    };
  }), [e, n, t, w, y]), M = (h, b) => {
    const k = D(h).format("MMM D"), A = D(b).format("MMM D");
    return k === A ? k : `${k} - ${A}`;
  }, m = (h) => !h.hasConflict || !h.conflicts ? "" : `⚠️ Conflicts with:
${h.conflicts.map((k) => {
    const A = (k.overlapDuration / 36e5).toFixed(1);
    return `• ${k.event.title} (${A}h overlap)`;
  }).join(`
`)}`, L = ce(
    (h) => {
      let b = 0;
      for (const k of n) {
        const A = Math.max(k.data.length, 1);
        if (h >= b * ye && h < (b + A) * ye)
          return {
            resourceId: k.id,
            resourceLabel: k.label
          };
        b += A;
      }
      return null;
    },
    [n]
  ), F = ce(
    (h) => {
      const b = Math.floor(h / y);
      switch (t) {
        case 0:
          return w.add(b * 7, "days").toDate();
        case 1:
          return w.add(b, "days").toDate();
        case 2:
          return w.add(b, "hours").toDate();
        default:
          return w.toDate();
      }
    },
    [t, w, y]
  ), I = ce(
    (h, b) => {
      !s || (h.preventDefault(), h.stopPropagation(), !v[b]) || (f.current = { x: h.clientX, y: h.clientY }, d(b), l({ x: 0, y: 0 }));
    },
    [s, v]
  ), P = ce(
    (h) => {
      if (c === null || !f.current)
        return;
      const b = h.clientX - f.current.x, k = h.clientY - f.current.y, A = Math.round(b / y) * y, O = Math.round(k / ye) * ye;
      l({ x: A, y: O });
    },
    [c, y]
  ), u = ce(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const h = v[c];
    if (!h) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const b = h.x + a.x, k = h.y + a.y, A = L(k + ye / 2);
    if (!A) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const O = F(b), K = e[c], U = K.endDate.getTime() - K.startDate.getTime(), E = new Date(O.getTime() + U);
    s(c, {
      startDate: O,
      endDate: E,
      resourceId: A.resourceId,
      resourceLabel: A.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, v, e, s, L, F]);
  return xe(() => {
    if (c !== null)
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", u);
      };
  }, [c, P, u]), /* @__PURE__ */ p(Ee, { children: v.map((h) => {
    if (!h)
      return null;
    const b = h.selection.hasConflict || !1, k = c === h.index, A = k ? h.x + a.x : h.x, O = k ? h.y + a.y : h.y;
    return /* @__PURE__ */ W(
      cd,
      {
        $hasConflict: b,
        $isDragging: k,
        style: {
          left: A,
          top: O,
          width: h.width,
          height: h.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (K) => I(K, h.index),
        children: [
          b && /* @__PURE__ */ p(dd, { title: m(h.selection), children: "⚠️" }),
          /* @__PURE__ */ p(ld, { $hasConflict: b, children: M(h.selection.startDate, h.selection.endDate) }),
          /* @__PURE__ */ p(
            ud,
            {
              onClick: (K) => {
                K.stopPropagation(), o(h.index);
              },
              onMouseDown: (K) => K.stopPropagation(),
              title: b ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      h.index
    );
  }) });
}, hd = fd, pd = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, md = ({ zoom: e, startDate: n }) => {
  const { cols: t } = Ze(), r = ke(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Ye * 7 : $e, s = D().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = D().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ p(pd, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, gd = md;
export {
  wd as Scheduler
};
