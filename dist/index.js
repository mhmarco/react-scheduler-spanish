var Ao = Object.defineProperty;
var Po = (e, r, t) => r in e ? Ao(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Zn = (e, r, t) => (Po(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as W, Fragment as Te } from "react/jsx-runtime";
import * as se from "react";
import at, { useRef as he, useContext as rt, useMemo as $e, useLayoutEffect as Jt, useDebugValue as Vn, createElement as Oo, createContext as Xr, useState as pe, useCallback as le, useEffect as ve, forwardRef as On, useImperativeHandle as Ur } from "react";
import { createPortal as Io } from "react-dom";
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pt = {}, Yo = {
  get exports() {
    return Pt;
  },
  set exports(e) {
    Pt = e;
  }
}, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function Ro() {
  if (Gn)
    return we;
  Gn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function $(p) {
    if (typeof p == "object" && p !== null) {
      var A = p.$$typeof;
      switch (A) {
        case e:
          switch (p = p.type, p) {
            case t:
            case o:
            case n:
            case a:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case i:
                case l:
                case g:
                case u:
                case s:
                  return p;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  return we.ContextConsumer = i, we.ContextProvider = s, we.Element = e, we.ForwardRef = l, we.Fragment = t, we.Lazy = g, we.Memo = u, we.Portal = r, we.Profiler = o, we.StrictMode = n, we.Suspense = a, we.SuspenseList = d, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(p) {
    return $(p) === i;
  }, we.isContextProvider = function(p) {
    return $(p) === s;
  }, we.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, we.isForwardRef = function(p) {
    return $(p) === l;
  }, we.isFragment = function(p) {
    return $(p) === t;
  }, we.isLazy = function(p) {
    return $(p) === g;
  }, we.isMemo = function(p) {
    return $(p) === u;
  }, we.isPortal = function(p) {
    return $(p) === r;
  }, we.isProfiler = function(p) {
    return $(p) === o;
  }, we.isStrictMode = function(p) {
    return $(p) === n;
  }, we.isSuspense = function(p) {
    return $(p) === a;
  }, we.isSuspenseList = function(p) {
    return $(p) === d;
  }, we.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === n || p === a || p === d || p === S || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === u || p.$$typeof === s || p.$$typeof === i || p.$$typeof === l || p.$$typeof === w || p.getModuleId !== void 0);
  }, we.typeOf = $, we;
}
var Se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function Lo() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), w = !1, $ = !1, p = !1, A = !1, U = !1, F;
    F = Symbol.for("react.module.reference");
    function E(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === t || D === o || U || D === n || D === a || D === d || A || D === S || w || $ || p || typeof D == "object" && D !== null && (D.$$typeof === g || D.$$typeof === u || D.$$typeof === s || D.$$typeof === i || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === F || D.getModuleId !== void 0));
    }
    function f(D) {
      if (typeof D == "object" && D !== null) {
        var V = D.$$typeof;
        switch (V) {
          case e:
            var ee = D.type;
            switch (ee) {
              case t:
              case o:
              case n:
              case a:
              case d:
                return ee;
              default:
                var X = ee && ee.$$typeof;
                switch (X) {
                  case c:
                  case i:
                  case l:
                  case g:
                  case u:
                  case s:
                    return X;
                  default:
                    return V;
                }
            }
          case r:
            return V;
        }
      }
    }
    var y = i, x = s, _ = e, b = l, k = t, j = g, J = u, I = r, M = o, P = n, N = a, Y = d, B = !1, q = !1;
    function ne(D) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(D) {
      return q || (q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(D) {
      return f(D) === i;
    }
    function z(D) {
      return f(D) === s;
    }
    function K(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function te(D) {
      return f(D) === l;
    }
    function C(D) {
      return f(D) === t;
    }
    function Z(D) {
      return f(D) === g;
    }
    function T(D) {
      return f(D) === u;
    }
    function Q(D) {
      return f(D) === r;
    }
    function H(D) {
      return f(D) === o;
    }
    function R(D) {
      return f(D) === n;
    }
    function m(D) {
      return f(D) === a;
    }
    function G(D) {
      return f(D) === d;
    }
    Se.ContextConsumer = y, Se.ContextProvider = x, Se.Element = _, Se.ForwardRef = b, Se.Fragment = k, Se.Lazy = j, Se.Memo = J, Se.Portal = I, Se.Profiler = M, Se.StrictMode = P, Se.Suspense = N, Se.SuspenseList = Y, Se.isAsyncMode = ne, Se.isConcurrentMode = ie, Se.isContextConsumer = L, Se.isContextProvider = z, Se.isElement = K, Se.isForwardRef = te, Se.isFragment = C, Se.isLazy = Z, Se.isMemo = T, Se.isPortal = Q, Se.isProfiler = H, Se.isStrictMode = R, Se.isSuspense = m, Se.isSuspenseList = G, Se.isValidElementType = E, Se.typeOf = f;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ro() : e.exports = Lo();
})(Yo);
function No(e) {
  function r(L, z, K, te, C) {
    for (var Z = 0, T = 0, Q = 0, H = 0, R, m, G = 0, D = 0, V, ee = V = R = 0, X = 0, ce = 0, ge = 0, ue = 0, xe = K.length, De = xe - 1, be, ae = "", me = "", Ae = "", Re = "", fe; X < xe; ) {
      if (m = K.charCodeAt(X), X === De && T + H + Q + Z !== 0 && (T !== 0 && (m = T === 47 ? 10 : 47), H = Q = Z = 0, xe++, De++), T + H + Q + Z === 0) {
        if (X === De && (0 < ce && (ae = ae.replace(g, "")), 0 < ae.trim().length)) {
          switch (m) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ae += K.charAt(X);
          }
          m = 59;
        }
        switch (m) {
          case 123:
            for (ae = ae.trim(), R = ae.charCodeAt(0), V = 1, ue = ++X; X < xe; ) {
              switch (m = K.charCodeAt(X)) {
                case 123:
                  V++;
                  break;
                case 125:
                  V--;
                  break;
                case 47:
                  switch (m = K.charCodeAt(X + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ee = X + 1; ee < De; ++ee)
                          switch (K.charCodeAt(ee)) {
                            case 47:
                              if (m === 42 && K.charCodeAt(ee - 1) === 42 && X + 2 !== ee) {
                                X = ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (m === 47) {
                                X = ee + 1;
                                break e;
                              }
                          }
                        X = ee;
                      }
                  }
                  break;
                case 91:
                  m++;
                case 40:
                  m++;
                case 34:
                case 39:
                  for (; X++ < De && K.charCodeAt(X) !== m; )
                    ;
              }
              if (V === 0)
                break;
              X++;
            }
            switch (V = K.substring(ue, X), R === 0 && (R = (ae = ae.replace(u, "").trim()).charCodeAt(0)), R) {
              case 64:
                switch (0 < ce && (ae = ae.replace(g, "")), m = ae.charCodeAt(1), m) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = z;
                    break;
                  default:
                    ce = N;
                }
                if (V = r(z, ce, V, m, C + 1), ue = V.length, 0 < B && (ce = t(N, ae, ge), fe = c(3, V, ce, z, I, J, ue, m, C, te), ae = ce.join(""), fe !== void 0 && (ue = (V = fe.trim()).length) === 0 && (m = 0, V = "")), 0 < ue)
                  switch (m) {
                    case 115:
                      ae = ae.replace(y, i);
                    case 100:
                    case 109:
                    case 45:
                      V = ae + "{" + V + "}";
                      break;
                    case 107:
                      ae = ae.replace(U, "$1 $2"), V = ae + "{" + V + "}", V = P === 1 || P === 2 && s("@" + V, 3) ? "@-webkit-" + V + "@" + V : "@" + V;
                      break;
                    default:
                      V = ae + V, te === 112 && (V = (me += V, ""));
                  }
                else
                  V = "";
                break;
              default:
                V = r(z, t(z, ae, ge), V, te, C + 1);
            }
            Ae += V, V = ge = ce = ee = R = 0, ae = "", m = K.charCodeAt(++X);
            break;
          case 125:
          case 59:
            if (ae = (0 < ce ? ae.replace(g, "") : ae).trim(), 1 < (ue = ae.length))
              switch (ee === 0 && (R = ae.charCodeAt(0), R === 45 || 96 < R && 123 > R) && (ue = (ae = ae.replace(" ", ":")).length), 0 < B && (fe = c(1, ae, z, L, I, J, me.length, te, C, te)) !== void 0 && (ue = (ae = fe.trim()).length) === 0 && (ae = "\0\0"), R = ae.charCodeAt(0), m = ae.charCodeAt(1), R) {
                case 0:
                  break;
                case 64:
                  if (m === 105 || m === 99) {
                    Re += ae + K.charAt(X);
                    break;
                  }
                default:
                  ae.charCodeAt(ue - 1) !== 58 && (me += o(ae, R, m, ae.charCodeAt(2)));
              }
            ge = ce = ee = R = 0, ae = "", m = K.charCodeAt(++X);
        }
      }
      switch (m) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + R === 0 && te !== 107 && 0 < ae.length && (ce = 1, ae += "\0"), 0 < B * ne && c(0, ae, z, L, I, J, me.length, te, C, te), J = 1, I++;
          break;
        case 59:
        case 125:
          if (T + H + Q + Z === 0) {
            J++;
            break;
          }
        default:
          switch (J++, be = K.charAt(X), m) {
            case 9:
            case 32:
              if (H + Z + T === 0)
                switch (G) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    be = "";
                    break;
                  default:
                    m !== 32 && (be = " ");
                }
              break;
            case 0:
              be = "\\0";
              break;
            case 12:
              be = "\\f";
              break;
            case 11:
              be = "\\v";
              break;
            case 38:
              H + T + Z === 0 && (ce = ge = 1, be = "\f" + be);
              break;
            case 108:
              if (H + T + Z + M === 0 && 0 < ee)
                switch (X - ee) {
                  case 2:
                    G === 112 && K.charCodeAt(X - 3) === 58 && (M = G);
                  case 8:
                    D === 111 && (M = D);
                }
              break;
            case 58:
              H + T + Z === 0 && (ee = X);
              break;
            case 44:
              T + Q + H + Z === 0 && (ce = 1, be += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (H = H === m ? 0 : H === 0 ? m : H);
              break;
            case 91:
              H + T + Q === 0 && Z++;
              break;
            case 93:
              H + T + Q === 0 && Z--;
              break;
            case 41:
              H + T + Z === 0 && Q--;
              break;
            case 40:
              if (H + T + Z === 0) {
                if (R === 0)
                  switch (2 * G + 3 * D) {
                    case 533:
                      break;
                    default:
                      R = 1;
                  }
                Q++;
              }
              break;
            case 64:
              T + Q + H + Z + ee + V === 0 && (V = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + Z + Q))
                switch (T) {
                  case 0:
                    switch (2 * m + 3 * K.charCodeAt(X + 1)) {
                      case 235:
                        T = 47;
                        break;
                      case 220:
                        ue = X, T = 42;
                    }
                    break;
                  case 42:
                    m === 47 && G === 42 && ue + 2 !== X && (K.charCodeAt(ue + 2) === 33 && (me += K.substring(ue, X + 1)), be = "", T = 0);
                }
          }
          T === 0 && (ae += be);
      }
      D = G, G = m, X++;
    }
    if (ue = me.length, 0 < ue) {
      if (ce = z, 0 < B && (fe = c(2, me, ce, L, I, J, ue, te, C, te), fe !== void 0 && (me = fe).length === 0))
        return Re + me + Ae;
      if (me = ce.join(",") + "{" + me + "}", P * M !== 0) {
        switch (P !== 2 || s(me, 2) || (M = 0), M) {
          case 111:
            me = me.replace(E, ":-moz-$1") + me;
            break;
          case 112:
            me = me.replace(F, "::-webkit-input-$1") + me.replace(F, "::-moz-$1") + me.replace(F, ":-ms-input-$1") + me;
        }
        M = 0;
      }
    }
    return Re + me + Ae;
  }
  function t(L, z, K) {
    var te = z.trim().split(p);
    z = te;
    var C = te.length, Z = L.length;
    switch (Z) {
      case 0:
      case 1:
        var T = 0;
        for (L = Z === 0 ? "" : L[0] + " "; T < C; ++T)
          z[T] = n(L, z[T], K).trim();
        break;
      default:
        var Q = T = 0;
        for (z = []; T < C; ++T)
          for (var H = 0; H < Z; ++H)
            z[Q++] = n(L[H] + " ", te[T], K).trim();
    }
    return z;
  }
  function n(L, z, K) {
    var te = z.charCodeAt(0);
    switch (33 > te && (te = (z = z.trim()).charCodeAt(0)), te) {
      case 38:
        return z.replace(A, "$1" + L.trim());
      case 58:
        return L.trim() + z.replace(A, "$1" + L.trim());
      default:
        if (0 < 1 * K && 0 < z.indexOf("\f"))
          return z.replace(A, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + z;
  }
  function o(L, z, K, te) {
    var C = L + ";", Z = 2 * z + 3 * K + 4 * te;
    if (Z === 944) {
      L = C.indexOf(":", 9) + 1;
      var T = C.substring(L, C.length - 1).trim();
      return T = C.substring(0, L).trim() + T + ";", P === 1 || P === 2 && s(T, 1) ? "-webkit-" + T + T : T;
    }
    if (P === 0 || P === 2 && !s(C, 1))
      return C;
    switch (Z) {
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
          return C.replace(j, "$1-webkit-$2") + C;
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
        return T = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + C + "-ms-flex-pack" + T + C;
      case 1005:
        return w.test(C) ? C.replace(S, ":-webkit-") + C.replace(S, ":-moz-") + C : C;
      case 1e3:
        switch (T = C.substring(13).trim(), z = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(z)) {
          case 226:
            T = C.replace(f, "tb");
            break;
          case 232:
            T = C.replace(f, "tb-rl");
            break;
          case 220:
            T = C.replace(f, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + T + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (z = (C = L).length - 10, T = (C.charCodeAt(z) === 33 ? C.substring(0, z) : C).substring(L.indexOf(":", 7) + 1).trim(), Z = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8))
              break;
          case 115:
            C = C.replace(T, "-webkit-" + T) + ";" + C;
            break;
          case 207:
          case 102:
            C = C.replace(T, "-webkit-" + (102 < Z ? "inline-" : "") + "box") + ";" + C.replace(T, "-webkit-" + T) + ";" + C.replace(T, "-ms-" + T + "box") + ";" + C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return T = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + T + "-ms-flex-" + T + C;
            case 115:
              return "-webkit-" + C + "-ms-flex-item-" + C.replace(_, "") + C;
            default:
              return "-webkit-" + C + "-ms-flex-line-pack" + C.replace("align-content", "").replace(_, "") + C;
          }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (k.test(L) === !0)
          return (T = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(L.replace("stretch", "fill-available"), z, K, te).replace(":fill-available", ":stretch") : C.replace(T, "-webkit-" + T) + C.replace(T, "-moz-" + T.replace("fill-", "")) + C;
        break;
      case 962:
        if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, K + te === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10))
          return C.substring(0, C.indexOf(";", 27) + 1).replace($, "$1-webkit-$2") + C;
    }
    return C;
  }
  function s(L, z) {
    var K = L.indexOf(z === 1 ? ":" : "{"), te = L.substring(0, z !== 3 ? K : 10);
    return K = L.substring(K + 1, L.length - 1), q(z !== 2 ? te : te.replace(b, "$1"), K, z);
  }
  function i(L, z) {
    var K = o(z, z.charCodeAt(0), z.charCodeAt(1), z.charCodeAt(2));
    return K !== z + ";" ? K.replace(x, " or ($1)").substring(4) : "(" + z + ")";
  }
  function c(L, z, K, te, C, Z, T, Q, H, R) {
    for (var m = 0, G = z, D; m < B; ++m)
      switch (D = Y[m].call(d, L, G, K, te, C, Z, T, Q, H, R)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          G = D;
      }
    if (G !== z)
      return G;
  }
  function l(L) {
    switch (L) {
      case void 0:
      case null:
        B = Y.length = 0;
        break;
      default:
        if (typeof L == "function")
          Y[B++] = L;
        else if (typeof L == "object")
          for (var z = 0, K = L.length; z < K; ++z)
            l(L[z]);
        else
          ne = !!L | 0;
    }
    return l;
  }
  function a(L) {
    return L = L.prefix, L !== void 0 && (q = null, L ? typeof L != "function" ? P = 1 : (P = 2, q = L) : P = 0), a;
  }
  function d(L, z) {
    var K = L;
    if (33 > K.charCodeAt(0) && (K = K.trim()), ie = K, K = [ie], 0 < B) {
      var te = c(-1, z, K, K, I, J, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (z = te);
    }
    var C = r(N, K, z, 0, 0);
    return 0 < B && (te = c(-2, C, K, K, I, J, C.length, 0, 0, 0), te !== void 0 && (C = te)), ie = "", M = 0, J = I = 1, C;
  }
  var u = /^\0+/g, g = /[\0\r\f]/g, S = /: */g, w = /zoo|gra/, $ = /([,: ])(transform)/g, p = /,\r+?/g, A = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, F = /::(place)/g, E = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, y = /\(\s*(.*)\s*\)/g, x = /([\s\S]*?);/g, _ = /-self|flex-/g, b = /[^]*?(:[rp][el]a[\w-]+)[^]*/, k = /stretch|:\s*\w+\-(?:conte|avail)/, j = /([^-])(image-set\()/, J = 1, I = 1, M = 0, P = 1, N = [], Y = [], B = 0, q = null, ne = 0, ie = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var Bo = {
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
function Fo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var zo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Un = /* @__PURE__ */ Fo(
  function(e) {
    return zo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), cn = {}, Ho = {
  get exports() {
    return cn;
  },
  set exports(e) {
    cn = e;
  }
}, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function Wo() {
  if (Kn)
    return Ce;
  Kn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function F(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case r:
          switch (f = f.type, f) {
            case l:
            case a:
            case n:
            case s:
            case o:
            case u:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case d:
                case w:
                case S:
                case i:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  function E(f) {
    return F(f) === a;
  }
  return Ce.AsyncMode = l, Ce.ConcurrentMode = a, Ce.ContextConsumer = c, Ce.ContextProvider = i, Ce.Element = r, Ce.ForwardRef = d, Ce.Fragment = n, Ce.Lazy = w, Ce.Memo = S, Ce.Portal = t, Ce.Profiler = s, Ce.StrictMode = o, Ce.Suspense = u, Ce.isAsyncMode = function(f) {
    return E(f) || F(f) === l;
  }, Ce.isConcurrentMode = E, Ce.isContextConsumer = function(f) {
    return F(f) === c;
  }, Ce.isContextProvider = function(f) {
    return F(f) === i;
  }, Ce.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, Ce.isForwardRef = function(f) {
    return F(f) === d;
  }, Ce.isFragment = function(f) {
    return F(f) === n;
  }, Ce.isLazy = function(f) {
    return F(f) === w;
  }, Ce.isMemo = function(f) {
    return F(f) === S;
  }, Ce.isPortal = function(f) {
    return F(f) === t;
  }, Ce.isProfiler = function(f) {
    return F(f) === s;
  }, Ce.isStrictMode = function(f) {
    return F(f) === o;
  }, Ce.isSuspense = function(f) {
    return F(f) === u;
  }, Ce.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === a || f === s || f === o || f === u || f === g || typeof f == "object" && f !== null && (f.$$typeof === w || f.$$typeof === S || f.$$typeof === i || f.$$typeof === c || f.$$typeof === d || f.$$typeof === p || f.$$typeof === A || f.$$typeof === U || f.$$typeof === $);
  }, Ce.typeOf = F, Ce;
}
var Me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function jo() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
    function F(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === a || m === s || m === o || m === u || m === g || typeof m == "object" && m !== null && (m.$$typeof === w || m.$$typeof === S || m.$$typeof === i || m.$$typeof === c || m.$$typeof === d || m.$$typeof === p || m.$$typeof === A || m.$$typeof === U || m.$$typeof === $);
    }
    function E(m) {
      if (typeof m == "object" && m !== null) {
        var G = m.$$typeof;
        switch (G) {
          case r:
            var D = m.type;
            switch (D) {
              case l:
              case a:
              case n:
              case s:
              case o:
              case u:
                return D;
              default:
                var V = D && D.$$typeof;
                switch (V) {
                  case c:
                  case d:
                  case w:
                  case S:
                  case i:
                    return V;
                  default:
                    return G;
                }
            }
          case t:
            return G;
        }
      }
    }
    var f = l, y = a, x = c, _ = i, b = r, k = d, j = n, J = w, I = S, M = t, P = s, N = o, Y = u, B = !1;
    function q(m) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(m) || E(m) === l;
    }
    function ne(m) {
      return E(m) === a;
    }
    function ie(m) {
      return E(m) === c;
    }
    function L(m) {
      return E(m) === i;
    }
    function z(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function K(m) {
      return E(m) === d;
    }
    function te(m) {
      return E(m) === n;
    }
    function C(m) {
      return E(m) === w;
    }
    function Z(m) {
      return E(m) === S;
    }
    function T(m) {
      return E(m) === t;
    }
    function Q(m) {
      return E(m) === s;
    }
    function H(m) {
      return E(m) === o;
    }
    function R(m) {
      return E(m) === u;
    }
    Me.AsyncMode = f, Me.ConcurrentMode = y, Me.ContextConsumer = x, Me.ContextProvider = _, Me.Element = b, Me.ForwardRef = k, Me.Fragment = j, Me.Lazy = J, Me.Memo = I, Me.Portal = M, Me.Profiler = P, Me.StrictMode = N, Me.Suspense = Y, Me.isAsyncMode = q, Me.isConcurrentMode = ne, Me.isContextConsumer = ie, Me.isContextProvider = L, Me.isElement = z, Me.isForwardRef = K, Me.isFragment = te, Me.isLazy = C, Me.isMemo = Z, Me.isPortal = T, Me.isProfiler = Q, Me.isStrictMode = H, Me.isSuspense = R, Me.isValidElementType = F, Me.typeOf = E;
  }()), Me;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Wo() : e.exports = jo();
})(Ho);
var In = cn, Zo = {
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
}, Vo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Go = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Kr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Yn = {};
Yn[In.ForwardRef] = Go;
Yn[In.Memo] = Kr;
function qn(e) {
  return In.isMemo(e) ? Kr : Yn[e.$$typeof] || Zo;
}
var Xo = Object.defineProperty, Uo = Object.getOwnPropertyNames, Qn = Object.getOwnPropertySymbols, Ko = Object.getOwnPropertyDescriptor, Jo = Object.getPrototypeOf, er = Object.prototype;
function Jr(e, r, t) {
  if (typeof r != "string") {
    if (er) {
      var n = Jo(r);
      n && n !== er && Jr(e, n, t);
    }
    var o = Uo(r);
    Qn && (o = o.concat(Qn(r)));
    for (var s = qn(e), i = qn(r), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!Vo[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = Ko(r, l);
        try {
          Xo(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var qo = Jr;
function We() {
  return (We = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var tr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, ln = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Pt.typeOf(e);
}, Zt = Object.freeze([]), nt = Object.freeze({});
function bt(e) {
  return typeof e == "function";
}
function dn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Rn(e) {
  return e && typeof e.styledComponentId == "string";
}
var wt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ln = typeof window < "u" && "HTMLElement" in window, Qo = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), es = {}, ts = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ns() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ke(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(ns.apply(void 0, [ts[e]].concat(t)).trim());
}
var rs = function() {
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
        (i <<= 1) < 0 && Ke(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = s; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), a = 0, d = n.length; a < d; a++)
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
}(), Wt = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), At = 1, Nt = function(e) {
  if (Wt.has(e))
    return Wt.get(e);
  for (; Vt.has(At); )
    At++;
  var r = At++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ke(16, "" + r), Wt.set(e, r), Vt.set(r, e), r;
}, os = function(e) {
  return Vt.get(e);
}, ss = function(e, r) {
  r >= At && (At = r + 1), Wt.set(e, r), Vt.set(r, e);
}, is = "style[" + wt + '][data-styled-version="5.3.8"]', as = new RegExp("^" + wt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), cs = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, ls = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(as);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (ss(a, l), cs(e, a, c[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, ds = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, qr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(wt))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(wt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = ds();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, us = function() {
  function e(t) {
    var n = this.element = qr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Ke(17);
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
}(), fs = function() {
  function e(t) {
    var n = this.element = qr(t);
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
}(), hs = function() {
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
}(), nr = Ln, ps = { isServer: !Ln, useCSSOMInjection: !Qo }, Gt = function() {
  function e(t, n, o) {
    t === void 0 && (t = nt), n === void 0 && (n = {}), this.options = We({}, ps, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Ln && nr && (nr = !1, function(s) {
      for (var i = document.querySelectorAll(is), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(wt) !== "active" && (ls(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Nt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(We({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new hs(i) : s ? new us(i) : new fs(i), new rs(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Nt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Nt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Nt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = os(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var d = wt + ".g" + i + '[id="' + c + '"]', u = "";
            l !== void 0 && l.forEach(function(g) {
              g.length > 0 && (u += g + ",");
            }), s += "" + a + d + '{content:"' + u + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ms = /(a)(d)/gi, rr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function un(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = rr(r % 52) + t;
  return (rr(r % 52) + t).replace(ms, "$1-$2");
}
var it = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Qr = function(e) {
  return it(5381, e);
};
function eo(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (bt(t) && !Rn(t))
      return !1;
  }
  return !0;
}
var gs = Qr("5.3.8"), ys = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && eo(r), this.componentId = t, this.baseHash = it(gs, t), this.baseStyle = n, Gt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ct(this.rules, r, t, n).join(""), c = un(it(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = it(this.baseHash, n.hash), u = "", g = 0; g < a; g++) {
        var S = this.rules[g];
        if (typeof S == "string")
          u += S, process.env.NODE_ENV !== "production" && (d = it(d, S + g));
        else if (S) {
          var w = ct(S, r, t, n), $ = Array.isArray(w) ? w.join("") : w;
          d = it(d, $ + g), u += $;
        }
      }
      if (u) {
        var p = un(d >>> 0);
        if (!t.hasNameForId(o, p)) {
          var A = n(u, "." + p, void 0, o);
          t.insertRules(o, p, A);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), vs = /^\s*\/\/.*$/gm, xs = [":", "[", ".", "#"];
function bs(e) {
  var r, t, n, o, s = e === void 0 ? nt : e, i = s.options, c = i === void 0 ? nt : i, l = s.plugins, a = l === void 0 ? Zt : l, d = new No(c), u = [], g = function($) {
    function p(A) {
      if (A)
        try {
          $(A + "}");
        } catch {
        }
    }
    return function(A, U, F, E, f, y, x, _, b, k) {
      switch (A) {
        case 1:
          if (b === 0 && U.charCodeAt(0) === 64)
            return $(U + ";"), "";
          break;
        case 2:
          if (_ === 0)
            return U + "/*|*/";
          break;
        case 3:
          switch (_) {
            case 102:
            case 112:
              return $(F[0] + U), "";
            default:
              return U + (k === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(p);
      }
    };
  }(function($) {
    u.push($);
  }), S = function($, p, A) {
    return p === 0 && xs.indexOf(A[t.length]) !== -1 || A.match(o) ? $ : "." + r;
  };
  function w($, p, A, U) {
    U === void 0 && (U = "&");
    var F = $.replace(vs, ""), E = p && A ? A + " " + p + " { " + F + " }" : F;
    return r = U, t = p, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(A || !p ? "" : p, E);
  }
  return d.use([].concat(a, [function($, p, A) {
    $ === 2 && A.length && A[0].lastIndexOf(t) > 0 && (A[0] = A[0].replace(n, S));
  }, g, function($) {
    if ($ === -2) {
      var p = u;
      return u = [], p;
    }
  }])), w.hash = a.length ? a.reduce(function($, p) {
    return p.name || Ke(15), it($, p.name);
  }, 5381).toString() : "", w;
}
var to = at.createContext();
to.Consumer;
var no = at.createContext(), ws = (no.Consumer, new Gt()), fn = bs();
function ro() {
  return rt(to) || ws;
}
function oo() {
  return rt(no) || fn;
}
var so = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = fn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ke(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = fn), this.name + r.hash;
  }, e;
}(), Ss = /([A-Z])/, Cs = /([A-Z])/g, Ms = /^ms-/, ks = function(e) {
  return "-" + e.toLowerCase();
};
function or(e) {
  return Ss.test(e) ? e.replace(Cs, ks).replace(Ms, "-ms-") : e;
}
var sr = function(e) {
  return e == null || e === !1 || e === "";
};
function ct(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = ct(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (sr(e))
    return "";
  if (Rn(e))
    return "." + e.styledComponentId;
  if (bt(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && Pt.isElement(l) && console.warn(dn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ct(l, r, t, n);
  }
  var a;
  return e instanceof so ? t ? (e.inject(t, n), e.getName(n)) : e : ln(e) ? function d(u, g) {
    var S, w, $ = [];
    for (var p in u)
      u.hasOwnProperty(p) && !sr(u[p]) && (Array.isArray(u[p]) && u[p].isCss || bt(u[p]) ? $.push(or(p) + ":", u[p], ";") : ln(u[p]) ? $.push.apply($, d(u[p], p)) : $.push(or(p) + ": " + (S = p, (w = u[p]) == null || typeof w == "boolean" || w === "" ? "" : typeof w != "number" || w === 0 || S in Bo ? String(w).trim() : w + "px") + ";"));
    return g ? [g + " {"].concat($, ["}"]) : $;
  }(e) : e.toString();
}
var ir = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function dt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return bt(e) || ln(e) ? ir(ct(tr(Zt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ir(ct(tr(e, t)));
}
var ar = /invalid hook call/i, Bt = /* @__PURE__ */ new Set(), io = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (ar.test(s))
          o = !1, Bt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(c));
        }
      }, he(), o && !Bt.has(t) && (console.warn(t), Bt.add(t));
    } catch (s) {
      ar.test(s.message) && Bt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, ao = function(e, r, t) {
  return t === void 0 && (t = nt), e.theme !== t.theme && e.theme || r || t.theme;
}, $s = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ds = /(^-|-$)/g;
function en(e) {
  return e.replace($s, "-").replace(Ds, "");
}
var Nn = function(e) {
  return un(Qr(e) >>> 0);
};
function Ft(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var hn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Es = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function _s(e, r, t) {
  var n = e[t];
  hn(r) && hn(n) ? co(n, r) : e[t] = r;
}
function co(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (hn(i))
      for (var c in i)
        Es(c) && _s(e, i[c], c);
  }
  return e;
}
var St = at.createContext();
St.Consumer;
function Ts(e) {
  var r = rt(St), t = $e(function() {
    return function(n, o) {
      if (!n)
        return Ke(14);
      if (bt(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ke(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Ke(8) : o ? We({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? at.createElement(St.Provider, { value: t }, e.children) : null;
}
var tn = {};
function lo(e, r, t) {
  var n = Rn(e), o = !Ft(e), s = r.attrs, i = s === void 0 ? Zt : s, c = r.componentId, l = c === void 0 ? function(U, F) {
    var E = typeof U != "string" ? "sc" : en(U);
    tn[E] = (tn[E] || 0) + 1;
    var f = E + "-" + Nn("5.3.8" + E + tn[E]);
    return F ? F + "-" + f : f;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(U) {
    return Ft(U) ? "styled." + U : "Styled(" + dn(U) + ")";
  }(e) : a, u = r.displayName && r.componentId ? en(r.displayName) + "-" + r.componentId : r.componentId || l, g = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, S = r.shouldForwardProp;
  n && e.shouldForwardProp && (S = r.shouldForwardProp ? function(U, F, E) {
    return e.shouldForwardProp(U, F, E) && r.shouldForwardProp(U, F, E);
  } : e.shouldForwardProp);
  var w, $ = new ys(t, u, n ? e.componentStyle : void 0), p = $.isStatic && i.length === 0, A = function(U, F) {
    return function(E, f, y, x) {
      var _ = E.attrs, b = E.componentStyle, k = E.defaultProps, j = E.foldedComponentIds, J = E.shouldForwardProp, I = E.styledComponentId, M = E.target;
      process.env.NODE_ENV !== "production" && Vn(I);
      var P = function(te, C, Z) {
        te === void 0 && (te = nt);
        var T = We({}, C, { theme: te }), Q = {};
        return Z.forEach(function(H) {
          var R, m, G, D = H;
          for (R in bt(D) && (D = D(T)), D)
            T[R] = Q[R] = R === "className" ? (m = Q[R], G = D[R], m && G ? m + " " + G : m || G) : D[R];
        }), [T, Q];
      }(ao(f, rt(St), k) || nt, f, _), N = P[0], Y = P[1], B = function(te, C, Z, T) {
        var Q = ro(), H = oo(), R = C ? te.generateAndInjectStyles(nt, Q, H) : te.generateAndInjectStyles(Z, Q, H);
        return process.env.NODE_ENV !== "production" && Vn(R), process.env.NODE_ENV !== "production" && !C && T && T(R), R;
      }(b, x, N, process.env.NODE_ENV !== "production" ? E.warnTooManyClasses : void 0), q = y, ne = Y.$as || f.$as || Y.as || f.as || M, ie = Ft(ne), L = Y !== f ? We({}, f, {}, Y) : f, z = {};
      for (var K in L)
        K[0] !== "$" && K !== "as" && (K === "forwardedAs" ? z.as = L[K] : (J ? J(K, Un, ne) : !ie || Un(K)) && (z[K] = L[K]));
      return f.style && Y.style !== f.style && (z.style = We({}, f.style, {}, Y.style)), z.className = Array.prototype.concat(j, I, B !== I ? B : null, f.className, Y.className).filter(Boolean).join(" "), z.ref = q, Oo(ne, z);
    }(w, U, F, p);
  };
  return A.displayName = d, (w = at.forwardRef(A)).attrs = g, w.componentStyle = $, w.displayName = d, w.shouldForwardProp = S, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Zt, w.styledComponentId = u, w.target = n ? e.target : e, w.withComponent = function(U) {
    var F = r.componentId, E = function(y, x) {
      if (y == null)
        return {};
      var _, b, k = {}, j = Object.keys(y);
      for (b = 0; b < j.length; b++)
        _ = j[b], x.indexOf(_) >= 0 || (k[_] = y[_]);
      return k;
    }(r, ["componentId"]), f = F && F + "-" + (Ft(U) ? U : en(dn(U)));
    return lo(U, We({}, E, { attrs: g, componentId: f }), t);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? co({}, e.defaultProps, U) : U;
  } }), process.env.NODE_ENV !== "production" && (io(d, u), w.warnTooManyClasses = function(U, F) {
    var E = {}, f = !1;
    return function(y) {
      if (!f && (E[y] = !0, Object.keys(E).length >= 200)) {
        var x = F ? ' with the id of "' + F + '"' : "";
        console.warn("Over 200 classes were generated for component " + U + x + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, E = {};
      }
    };
  }(d, u)), w.toString = function() {
    return "." + w.styledComponentId;
  }, o && qo(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var pn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = nt), !Pt.isValidElementType(n))
      return Ke(1, String(n));
    var s = function() {
      return t(n, o, dt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, We({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, We({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(lo, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  pn[e] = pn(e);
});
var As = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = eo(t), Gt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(ct(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && Gt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function Ps(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = dt.apply(void 0, [e].concat(t)), s = "sc-global-" + Nn(JSON.stringify(o)), i = new As(o, s);
  function c(a) {
    var d = ro(), u = oo(), g = rt(St), S = he(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && at.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(w) {
      return typeof w == "string" && w.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(S, a, d, g, u), Jt(function() {
      if (!d.server)
        return l(S, a, d, g, u), function() {
          return i.removeStyles(S, d);
        };
    }, [S, a, d, g, u]), null;
  }
  function l(a, d, u, g, S) {
    if (i.isStatic)
      i.renderStyles(a, es, u, S);
    else {
      var w = We({}, d, { theme: ao(d, g, c.defaultProps) });
      i.renderStyles(a, w, u, S);
    }
  }
  return process.env.NODE_ENV !== "production" && io(s), at.memo(c);
}
function Ve(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = dt.apply(void 0, [e].concat(t)).join(""), s = Nn(o);
  return new so(s, o);
}
var qt = function() {
  return rt(St);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const v = pn, Tt = "reactSchedulerOutsideWrapper", ze = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Os = Ps`

  #${Tt} {
    font-family: ${ze};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Tt} *,
 #${Tt} *:before,
 #${Tt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Is = {
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
}, Ys = {
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
}, kt = `
margin: 0;
padding: 0;
`, $t = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
v.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Ee = 50, je = 24, ut = 16, Ue = 40, Xt = Ue + ut + je, Ct = 84, ye = 56, Le = 196, Be = 12, Oe = 50, Mt = 24, Ot = 16, mn = 40, Rs = Mt + Ot + mn, cr = 24, lr = 52, Ze = {
  topRow: `600 14px ${ze}`,
  middleRow: `400 10px ${ze}`,
  bottomRow: {
    name: `600 14px ${ze}`,
    number: `600 10px ${ze}`,
    hoursInDay: `400 9px ${ze}`
  }
}, xt = 3, Ls = 1.6, Ns = 4.5, gn = 12, Ut = 24, Bs = "reactSchedulerCanvasHeaderWrapper", uo = "reactSchedulerCanvasWrapper", Je = Tt, Fs = 4, Bn = 48, tt = 5, zs = 40, dr = 8, Fn = je / 2 + 2, fo = ut / 2 + je + 1, ur = 2, _e = 60, Ne = 21, ho = 58, po = "reactSchedulerBody";
var lt = {}, Hs = {
  get exports() {
    return lt;
  },
  set exports(e) {
    lt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pe, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", u = "month", g = "quarter", S = "year", w = "date", $ = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, A = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, U = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
      var M = ["th", "st", "nd", "rd"], P = I % 100;
      return "[" + I + (M[(P - 20) % 10] || M[P] || M[0]) + "]";
    } }, F = function(I, M, P) {
      var N = String(I);
      return !N || N.length >= M ? I : "" + Array(M + 1 - N.length).join(P) + I;
    }, E = { s: F, z: function(I) {
      var M = -I.utcOffset(), P = Math.abs(M), N = Math.floor(P / 60), Y = P % 60;
      return (M <= 0 ? "+" : "-") + F(N, 2, "0") + ":" + F(Y, 2, "0");
    }, m: function I(M, P) {
      if (M.date() < P.date())
        return -I(P, M);
      var N = 12 * (P.year() - M.year()) + (P.month() - M.month()), Y = M.clone().add(N, u), B = P - Y < 0, q = M.clone().add(N + (B ? -1 : 1), u);
      return +(-(N + (P - Y) / (B ? Y - q : q - Y)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: u, y: S, w: d, d: a, D: w, h: l, m: c, s: i, ms: s, Q: g }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, f = "en", y = {};
    y[f] = U;
    var x = function(I) {
      return I instanceof j;
    }, _ = function I(M, P, N) {
      var Y;
      if (!M)
        return f;
      if (typeof M == "string") {
        var B = M.toLowerCase();
        y[B] && (Y = B), P && (y[B] = P, Y = B);
        var q = M.split("-");
        if (!Y && q.length > 1)
          return I(q[0]);
      } else {
        var ne = M.name;
        y[ne] = M, Y = ne;
      }
      return !N && Y && (f = Y), Y || !N && f;
    }, b = function(I, M) {
      if (x(I))
        return I.clone();
      var P = typeof M == "object" ? M : {};
      return P.date = I, P.args = arguments, new j(P);
    }, k = E;
    k.l = _, k.i = x, k.w = function(I, M) {
      return b(I, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var j = function() {
      function I(P) {
        this.$L = _(P.locale, null, !0), this.parse(P);
      }
      var M = I.prototype;
      return M.parse = function(P) {
        this.$d = function(N) {
          var Y = N.date, B = N.utc;
          if (Y === null)
            return new Date(NaN);
          if (k.u(Y))
            return new Date();
          if (Y instanceof Date)
            return new Date(Y);
          if (typeof Y == "string" && !/Z$/i.test(Y)) {
            var q = Y.match(p);
            if (q) {
              var ne = q[2] - 1 || 0, ie = (q[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(q[1], ne, q[3] || 1, q[4] || 0, q[5] || 0, q[6] || 0, ie)) : new Date(q[1], ne, q[3] || 1, q[4] || 0, q[5] || 0, q[6] || 0, ie);
            }
          }
          return new Date(Y);
        }(P), this.$x = P.x || {}, this.init();
      }, M.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, M.$utils = function() {
        return k;
      }, M.isValid = function() {
        return this.$d.toString() !== $;
      }, M.isSame = function(P, N) {
        var Y = b(P);
        return this.startOf(N) <= Y && Y <= this.endOf(N);
      }, M.isAfter = function(P, N) {
        return b(P) < this.startOf(N);
      }, M.isBefore = function(P, N) {
        return this.endOf(N) < b(P);
      }, M.$g = function(P, N, Y) {
        return k.u(P) ? this[N] : this.set(Y, P);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(P, N) {
        var Y = this, B = !!k.u(N) || N, q = k.p(P), ne = function(T, Q) {
          var H = k.w(Y.$u ? Date.UTC(Y.$y, Q, T) : new Date(Y.$y, Q, T), Y);
          return B ? H : H.endOf(a);
        }, ie = function(T, Q) {
          return k.w(Y.toDate()[T].apply(Y.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), Y);
        }, L = this.$W, z = this.$M, K = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (q) {
          case S:
            return B ? ne(1, 0) : ne(31, 11);
          case u:
            return B ? ne(1, z) : ne(0, z + 1);
          case d:
            var C = this.$locale().weekStart || 0, Z = (L < C ? L + 7 : L) - C;
            return ne(B ? K - Z : K + (6 - Z), z);
          case a:
          case w:
            return ie(te + "Hours", 0);
          case l:
            return ie(te + "Minutes", 1);
          case c:
            return ie(te + "Seconds", 2);
          case i:
            return ie(te + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(P) {
        return this.startOf(P, !1);
      }, M.$set = function(P, N) {
        var Y, B = k.p(P), q = "set" + (this.$u ? "UTC" : ""), ne = (Y = {}, Y[a] = q + "Date", Y[w] = q + "Date", Y[u] = q + "Month", Y[S] = q + "FullYear", Y[l] = q + "Hours", Y[c] = q + "Minutes", Y[i] = q + "Seconds", Y[s] = q + "Milliseconds", Y)[B], ie = B === a ? this.$D + (N - this.$W) : N;
        if (B === u || B === S) {
          var L = this.clone().set(w, 1);
          L.$d[ne](ie), L.init(), this.$d = L.set(w, Math.min(this.$D, L.daysInMonth())).$d;
        } else
          ne && this.$d[ne](ie);
        return this.init(), this;
      }, M.set = function(P, N) {
        return this.clone().$set(P, N);
      }, M.get = function(P) {
        return this[k.p(P)]();
      }, M.add = function(P, N) {
        var Y, B = this;
        P = Number(P);
        var q = k.p(N), ne = function(z) {
          var K = b(B);
          return k.w(K.date(K.date() + Math.round(z * P)), B);
        };
        if (q === u)
          return this.set(u, this.$M + P);
        if (q === S)
          return this.set(S, this.$y + P);
        if (q === a)
          return ne(1);
        if (q === d)
          return ne(7);
        var ie = (Y = {}, Y[c] = n, Y[l] = o, Y[i] = t, Y)[q] || 1, L = this.$d.getTime() + P * ie;
        return k.w(L, this);
      }, M.subtract = function(P, N) {
        return this.add(-1 * P, N);
      }, M.format = function(P) {
        var N = this, Y = this.$locale();
        if (!this.isValid())
          return Y.invalidDate || $;
        var B = P || "YYYY-MM-DDTHH:mm:ssZ", q = k.z(this), ne = this.$H, ie = this.$m, L = this.$M, z = Y.weekdays, K = Y.months, te = function(Q, H, R, m) {
          return Q && (Q[H] || Q(N, B)) || R[H].slice(0, m);
        }, C = function(Q) {
          return k.s(ne % 12 || 12, Q, "0");
        }, Z = Y.meridiem || function(Q, H, R) {
          var m = Q < 12 ? "AM" : "PM";
          return R ? m.toLowerCase() : m;
        }, T = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: L + 1, MM: k.s(L + 1, 2, "0"), MMM: te(Y.monthsShort, L, K, 3), MMMM: te(K, L), D: this.$D, DD: k.s(this.$D, 2, "0"), d: String(this.$W), dd: te(Y.weekdaysMin, this.$W, z, 2), ddd: te(Y.weekdaysShort, this.$W, z, 3), dddd: z[this.$W], H: String(ne), HH: k.s(ne, 2, "0"), h: C(1), hh: C(2), a: Z(ne, ie, !0), A: Z(ne, ie, !1), m: String(ie), mm: k.s(ie, 2, "0"), s: String(this.$s), ss: k.s(this.$s, 2, "0"), SSS: k.s(this.$ms, 3, "0"), Z: q };
        return B.replace(A, function(Q, H) {
          return H || T[Q] || q.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(P, N, Y) {
        var B, q = k.p(N), ne = b(P), ie = (ne.utcOffset() - this.utcOffset()) * n, L = this - ne, z = k.m(this, ne);
        return z = (B = {}, B[S] = z / 12, B[u] = z, B[g] = z / 3, B[d] = (L - ie) / 6048e5, B[a] = (L - ie) / 864e5, B[l] = L / o, B[c] = L / n, B[i] = L / t, B)[q] || L, Y ? z : k.a(z);
      }, M.daysInMonth = function() {
        return this.endOf(u).$D;
      }, M.$locale = function() {
        return y[this.$L];
      }, M.locale = function(P, N) {
        if (!P)
          return this.$L;
        var Y = this.clone(), B = _(P, N, !0);
        return B && (Y.$L = B), Y;
      }, M.clone = function() {
        return k.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, I;
    }(), J = j.prototype;
    return b.prototype = J, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", u], ["$y", S], ["$D", w]].forEach(function(I) {
      J[I[1]] = function(M) {
        return this.$g(M, I[0], I[1]);
      };
    }), b.extend = function(I, M) {
      return I.$i || (I(M, j, b), I.$i = !0), b;
    }, b.locale = _, b.isDayjs = x, b.unix = function(I) {
      return b(1e3 * I);
    }, b.en = y[f], b.Ls = y, b.p = {}, b;
  });
})(Hs);
const O = lt, fr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, zn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, mo = (e, r) => O(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), go = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: zn(e),
  isCurrentDay: e.isSame(O(), "day"),
  year: parseInt(e.format("YYYY"))
});
let zt = null;
const Ws = (e) => {
  if (zt)
    return zt;
  const r = document.createElement("canvas");
  r.width = 12, r.height = 12;
  const t = r.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), zt = e.createPattern(r, "repeat"), zt) : null;
}, Hn = (e, r, t, n, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ye), c && !s) {
    const l = Ws(e);
    l && (e.fillStyle = l, e.fillRect(r, t, n, ye));
  }
  e.strokeRect(r + 0.5, t + 0.5, n, ye);
}, Wn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Ne;
}, js = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Wn(i, s);
    for (let l = 0; l <= t; l++) {
      const a = O(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), d = a.isSame(O(), "day"), u = a.isBefore(O(), "day");
      Hn(
        e,
        l * Ee,
        i * ye + c,
        Ee,
        zn(a),
        d,
        o,
        u
      );
    }
  }
}, Zs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Vs = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Be;
  const l = r * ye + s.length * Ne;
  for (let a = 0; a <= t; a++) {
    const u = O(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(O(), "week");
    for (let g = 0; g < r; g++) {
      const S = Wn(g, s);
      Hn(e, i, g * ye + S, Ct, !0, u, o);
    }
    i += Ct;
  }
  for (let a = 0; a < t; a++) {
    const d = mo(n, a) * Be;
    Zs(e, c, l, o), c += d;
  }
}, Gs = (e, r, t, n, o, s = []) => {
  const i = O(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const l = Wn(c, s);
    for (let a = 0; a <= t; a++) {
      let d;
      a === Math.floor(t / 2) ? d = O() : a > Math.floor(t / 2) ? d = O().add(a - Math.floor(t / 2), "hours") : d = O().subtract(Math.floor(t / 2) - c, "hours");
      const u = i.isSame(O(), "day") && d.isSame(O(), "hour");
      Hn(
        e,
        a * Oe + Oe / 2 - 0.5,
        c * ye + l,
        Oe,
        zn(d),
        u,
        o
      );
    }
  }
}, Xs = (e, r, t, n, o = !1) => {
  const s = t * ye + r * Ne, i = e.canvas.width;
  e.fillStyle = o ? n.colors.subcontractBorder + "40" : n.mode === "dark" ? n.colors.primary + "80" : n.colors.primary, e.fillRect(0, s, i, Ne);
}, Us = (e, r, t, n, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(uo)) {
    switch (r) {
      case 0:
        Vs(e, t, n, o, s, i);
        break;
      case 1:
        js(e, t, n, o, s, i);
        break;
      case 2:
        Gs(e, t, n, o, s, i);
        break;
    }
    for (let a = 0; a < i.length; a++)
      Xs(e, a, i[a], s, i[a] === c);
  }
};
var yn = {}, Ks = {
  get exports() {
    return yn;
  },
  set exports(e) {
    yn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pe, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(n).add(1, n).date(a), u = i(this).endOf(t);
          if (d.isBefore(u))
            return 1;
        }
        var g = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), S = this.diff(g, t, !0);
        return S < 0 ? i(this).startOf("week").week() : Math.ceil(S);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Ks);
const Js = yn;
var vn = {}, qs = {
  get exports() {
    return vn;
  },
  set exports(e) {
    vn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pe, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(qs);
const Qs = vn;
var xn = {}, ei = {
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
  })(Pe, function() {
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
        var d, u, g, S, w = i(this), $ = (d = this.isoWeekYear(), u = this.$u, g = (u ? s.utc : s)().year(d).startOf("year"), S = 4 - g.isoWeekday(), g.isoWeekday() > 4 && (S += 7), g.add(S, t));
        return w.diff($, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, d) {
        var u = this.$utils(), g = !!u.u(d) || d;
        return u.p(a) === "isoweek" ? g ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, d);
      };
    };
  });
})(ei);
const ti = xn;
var bn = {}, ni = {
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
  })(Pe, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), d = o(i), u = (l = l || "()")[0] === "(", g = l[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (g ? this.isBefore(d, c) : !this.isAfter(d, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (g ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(ni);
const ri = bn;
var wn = {}, oi = {
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
  })(Pe, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, S = function(f) {
      return f instanceof E;
    }, w = function(f, y, x) {
      return new E(f, x, y.$l);
    }, $ = function(f) {
      return n.p(f) + "s";
    }, p = function(f) {
      return f < 0;
    }, A = function(f) {
      return p(f) ? Math.ceil(f) : Math.floor(f);
    }, U = function(f) {
      return Math.abs(f);
    }, F = function(f, y) {
      return f ? p(f) ? { negative: !0, format: "" + U(f) + y } : { negative: !1, format: "" + f + y } : { negative: !1, format: "" };
    }, E = function() {
      function f(x, _, b) {
        var k = this;
        if (this.$d = {}, this.$l = b, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), _)
          return w(x * g[$(_)], this);
        if (typeof x == "number")
          return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object")
          return Object.keys(x).forEach(function(I) {
            k.$d[$(I)] = x[I];
          }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var j = x.match(u);
          if (j) {
            var J = j.slice(2).map(function(I) {
              return I != null ? Number(I) : 0;
            });
            return this.$d.years = J[0], this.$d.months = J[1], this.$d.weeks = J[2], this.$d.days = J[3], this.$d.hours = J[4], this.$d.minutes = J[5], this.$d.seconds = J[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var y = f.prototype;
      return y.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(_, b) {
          return _ + (x.$d[b] || 0) * g[b];
        }, 0);
      }, y.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = A(x / a), x %= a, this.$d.months = A(x / d), x %= d, this.$d.days = A(x / c), x %= c, this.$d.hours = A(x / i), x %= i, this.$d.minutes = A(x / s), x %= s, this.$d.seconds = A(x / o), x %= o, this.$d.milliseconds = x;
      }, y.toISOString = function() {
        var x = F(this.$d.years, "Y"), _ = F(this.$d.months, "M"), b = +this.$d.days || 0;
        this.$d.weeks && (b += 7 * this.$d.weeks);
        var k = F(b, "D"), j = F(this.$d.hours, "H"), J = F(this.$d.minutes, "M"), I = this.$d.seconds || 0;
        this.$d.milliseconds && (I += this.$d.milliseconds / 1e3);
        var M = F(I, "S"), P = x.negative || _.negative || k.negative || j.negative || J.negative || M.negative, N = j.format || J.format || M.format ? "T" : "", Y = (P ? "-" : "") + "P" + x.format + _.format + k.format + N + j.format + J.format + M.format;
        return Y === "P" || Y === "-P" ? "P0D" : Y;
      }, y.toJSON = function() {
        return this.toISOString();
      }, y.format = function(x) {
        var _ = x || "YYYY-MM-DDTHH:mm:ss", b = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return _.replace(l, function(k, j) {
          return j || String(b[k]);
        });
      }, y.as = function(x) {
        return this.$ms / g[$(x)];
      }, y.get = function(x) {
        var _ = this.$ms, b = $(x);
        return b === "milliseconds" ? _ %= 1e3 : _ = b === "weeks" ? A(_ / g[b]) : this.$d[b], _ === 0 ? 0 : _;
      }, y.add = function(x, _, b) {
        var k;
        return k = _ ? x * g[$(_)] : S(x) ? x.$ms : w(x, this).$ms, w(this.$ms + k * (b ? -1 : 1), this);
      }, y.subtract = function(x, _) {
        return this.add(x, _, !0);
      }, y.locale = function(x) {
        var _ = this.clone();
        return _.$l = x, _;
      }, y.clone = function() {
        return w(this.$ms, this);
      }, y.humanize = function(x) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
      }, y.milliseconds = function() {
        return this.get("milliseconds");
      }, y.asMilliseconds = function() {
        return this.as("milliseconds");
      }, y.seconds = function() {
        return this.get("seconds");
      }, y.asSeconds = function() {
        return this.as("seconds");
      }, y.minutes = function() {
        return this.get("minutes");
      }, y.asMinutes = function() {
        return this.as("minutes");
      }, y.hours = function() {
        return this.get("hours");
      }, y.asHours = function() {
        return this.as("hours");
      }, y.days = function() {
        return this.get("days");
      }, y.asDays = function() {
        return this.as("days");
      }, y.weeks = function() {
        return this.get("weeks");
      }, y.asWeeks = function() {
        return this.as("weeks");
      }, y.months = function() {
        return this.get("months");
      }, y.asMonths = function() {
        return this.as("months");
      }, y.years = function() {
        return this.get("years");
      }, y.asYears = function() {
        return this.as("years");
      }, f;
    }();
    return function(f, y, x) {
      t = x, n = x().$utils(), x.duration = function(k, j) {
        var J = x.locale();
        return w(k, { $l: J }, j);
      }, x.isDuration = S;
      var _ = y.prototype.add, b = y.prototype.subtract;
      y.prototype.add = function(k, j) {
        return S(k) && (k = k.asMilliseconds()), _.bind(this)(k, j);
      }, y.prototype.subtract = function(k, j) {
        return S(k) && (k = k.asMilliseconds()), b.bind(this)(k, j);
      };
    };
  });
})(oi);
const si = wn;
var ii = "Expected a function", hr = 0 / 0, ai = "[object Symbol]", ci = /^\s+|\s+$/g, li = /^[-+]0x[0-9a-f]+$/i, di = /^0b[01]+$/i, ui = /^0o[0-7]+$/i, fi = parseInt, hi = typeof Pe == "object" && Pe && Pe.Object === Object && Pe, pi = typeof self == "object" && self && self.Object === Object && self, mi = hi || pi || Function("return this")(), gi = Object.prototype, yi = gi.toString, vi = Math.max, xi = Math.min, nn = function() {
  return mi.Date.now();
};
function bi(e, r, t) {
  var n, o, s, i, c, l, a = 0, d = !1, u = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ii);
  r = pr(r) || 0, Sn(t) && (d = !!t.leading, u = "maxWait" in t, s = u ? vi(pr(t.maxWait) || 0, r) : s, g = "trailing" in t ? !!t.trailing : g);
  function S(y) {
    var x = n, _ = o;
    return n = o = void 0, a = y, i = e.apply(_, x), i;
  }
  function w(y) {
    return a = y, c = setTimeout(A, r), d ? S(y) : i;
  }
  function $(y) {
    var x = y - l, _ = y - a, b = r - x;
    return u ? xi(b, s - _) : b;
  }
  function p(y) {
    var x = y - l, _ = y - a;
    return l === void 0 || x >= r || x < 0 || u && _ >= s;
  }
  function A() {
    var y = nn();
    if (p(y))
      return U(y);
    c = setTimeout(A, $(y));
  }
  function U(y) {
    return c = void 0, g && n ? S(y) : (n = o = void 0, i);
  }
  function F() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function E() {
    return c === void 0 ? i : U(nn());
  }
  function f() {
    var y = nn(), x = p(y);
    if (n = arguments, o = this, l = y, x) {
      if (c === void 0)
        return w(l);
      if (u)
        return c = setTimeout(A, r), S(l);
    }
    return c === void 0 && (c = setTimeout(A, r)), i;
  }
  return f.cancel = F, f.flush = E, f;
}
function Sn(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function wi(e) {
  return !!e && typeof e == "object";
}
function Si(e) {
  return typeof e == "symbol" || wi(e) && yi.call(e) == ai;
}
function pr(e) {
  if (typeof e == "number")
    return e;
  if (Si(e))
    return hr;
  if (Sn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Sn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ci, "");
  var t = di.test(e);
  return t || ui.test(e) ? fi(e.slice(2), t ? 2 : 8) : li.test(e) ? hr : +e;
}
var Cn = bi;
const jt = [0, 1, 2];
var It = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(It || {});
const yo = (e) => jt.includes(e), yt = (e) => {
  var n;
  const t = (((n = document.getElementById(Je)) == null ? void 0 : n.clientWidth) || 0) - Le;
  switch (e) {
    case 1:
      return Math.ceil(t / Ee) * xt;
    case 2:
      return Math.ceil(t / Oe) * xt;
    default:
      return Math.ceil(t / Ct) * xt;
  }
}, Ci = (e) => yt(e) / xt, Qt = (e, r) => {
  const t = yt(r) / 2;
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
}, Mi = (e, r) => {
  const t = Qt(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, jn = () => {
  var t;
  return ((((t = document.getElementById(Je)) == null ? void 0 : t.clientWidth) || 0) - Le) * xt;
}, vo = Xr({
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
  date: O(),
  jumpDate: null,
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
O.extend(Js);
O.extend(Qs);
O.extend(ti);
O.extend(ri);
O.extend(si);
const ki = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = O(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c,
  toolbarActions: l
}) => {
  const { zoom: a, maxRecordsPerPage: d = 50 } = n, [u, g] = pe(a), [S, w] = pe(O()), [$, p] = pe(null), [A, U] = pe(!1), [F, E] = pe(yt(u)), f = jt[u] !== jt[jt.length - 1], y = u !== 0, x = $e(() => Mi(S, u), [S, u]), _ = Qt(S, u).startDate, b = O(_).dayOfYear(), k = go(_), j = he(null), J = he(!1), I = he(null), [M, P] = pe([{ x: 0, y: 0 }]), N = le(
    (H, R = "auto") => {
      var G, D, V, ee;
      const m = jn();
      switch (H) {
        case "back":
          return (G = j.current) == null ? void 0 : G.scrollTo({
            behavior: R,
            left: m / 3
          });
        case "forward":
          return (D = j.current) == null ? void 0 : D.scrollTo({
            behavior: R,
            left: m / 3
          });
        case "middle": {
          const X = m / xt / 4;
          return (V = j.current) == null ? void 0 : V.scrollTo({
            behavior: R,
            left: m / 2 - X
          });
        }
        default:
          return (ee = j.current) == null ? void 0 : ee.scrollTo({
            behavior: R,
            left: m / 2
          });
      }
    },
    []
  ), Y = (H) => {
    P(H);
  }, B = le(
    (H) => {
      const R = Ci(u);
      let m;
      switch (u) {
        case 0:
          m = R * 7;
          break;
        case 1:
          m = R;
          break;
        case 2:
          m = Math.ceil(R / Ut);
          break;
      }
      Cn(() => {
        switch ((H === "forward" || H === "back") && (J.current = !0), I.current = H, H) {
          case "back":
            w((D) => D.subtract(m, "days"));
            break;
          case "forward":
            w((D) => D.add(m, "days"));
            break;
          case "middle":
            w(O());
            break;
        }
        s == null || s(x);
      }, 300)();
    },
    [s, x, u]
  );
  ve(() => {
    I.current && (N(I.current), I.current = null);
  }, [S, N]), ve(() => {
    j.current = document.getElementById(Je), E(yt(u));
  }, [u]), ve(() => {
    const H = () => E(yt(u));
    return window.addEventListener("resize", H), () => window.removeEventListener("resize", H);
  }, [u]), ve(() => {
    s == null || s(x);
  }, [s, x]), ve(() => {
    U(!1);
  }, [o]), ve(() => {
    A || (N("middle"), U(!0), w(o));
  }, [o, A, N]);
  const q = () => {
    t || (w(
      (H) => u === 2 ? H.add(cr, "hours") : H.add(ur, "weeks")
    ), s == null || s(x));
  }, ne = le(() => {
    t || B("forward");
  }, [t, B]), ie = () => {
    t || (w(
      (H) => u === 2 ? H.subtract(cr, "hours") : H.subtract(ur, "weeks")
    ), s == null || s(x));
  }, L = le(() => {
    !A || t || B("back");
  }, [A, t, B]), z = le(() => {
    t || (I.current = "middle", w(O()), p(null), s == null || s(x));
  }, [t, s, x]), K = le(
    (H) => {
      if (t)
        return;
      const R = O(H).startOf("day");
      R.isValid() && (I.current = "middle", w(R), p(R), s == null || s(x));
    },
    [t, s, x]
  ), te = () => Z(u + 1), C = () => Z(u - 1), Z = (H) => {
    yo(H) && (g(H), E(yt(H)), s == null || s(x));
  }, T = () => i == null ? void 0 : i(), { Provider: Q } = vo;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: q,
        handleScrollNext: ne,
        handleGoPrev: ie,
        handleScrollPrev: L,
        handleGoToday: z,
        goToDate: K,
        zoomIn: te,
        zoomOut: C,
        setZoom: Z,
        zoom: u,
        isNextZoom: f,
        isPrevZoom: y,
        date: S,
        jumpDate: $,
        isLoading: t,
        cols: F,
        startDate: k,
        dayOfYear: b,
        toggleDisplayActiveUnits: T,
        tilesCoords: M,
        updateTilesCoords: Y,
        recordsThreshold: d,
        onClearFilterData: c,
        suppressNextSlideRef: J,
        toolbarActions: l
      },
      children: r
    }
  );
}, Ge = () => rt(vo), xo = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, bo = () => {
  var e;
  return typeof window < "u" && !!((e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches);
}, wo = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ye + n * Ne;
    if (e >= s + Ne)
      n++;
    else if (e >= s)
      return o * ye + n * Ne - n * Ne;
  }
  return t - n * Ne;
}, $i = 5, mr = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > $i;
}, vt = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, Di = ({
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
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((Z) => ({ ...Z, data: [Z.data] })) : r : e, {
    enabled: d = !0,
    isDraggable: u,
    resourceOnly: g = !1,
    isValidDrop: S
  } = i, [w, $] = pe("idle"), [p, A] = pe(null), [U, F] = pe({ x: 0, y: 0 }), [E, f] = pe({ width: 0, height: 48 }), [y, x] = pe(null), [_, b] = pe(!0), k = he({ x: 0, y: 0 }), j = he({ x: 0, y: 0 }), J = he({ x: 0, y: 0 }), I = he(null), M = he(null), P = he(0), N = he(null), Y = le(
    (Z) => !d || Z.draggable === !1 ? !1 : u ? u(Z) : !0,
    [d, u]
  ), B = le(
    (Z, T) => {
      const Q = wo(T, l), H = Math.floor(Q / ye);
      let R;
      switch (t) {
        case 0:
          R = Be * 7;
          break;
        case 1:
          R = Ee;
          break;
        case 2:
          R = Oe;
          break;
        default:
          R = Ee;
      }
      const m = Math.floor(Z / R);
      let G;
      const D = O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          G = D.add(m * 7, "days").toDate();
          break;
        case 1:
          G = D.add(m, "days").toDate();
          break;
        case 2:
          G = D.add(m, "hours").toDate();
          break;
        default:
          G = D.toDate();
      }
      return { snappedDate: G, snappedResourceIndex: H };
    },
    [t, n, l]
  ), q = le(
    (Z, T, Q, H) => {
      const R = [], m = T.getTime(), G = Q.getTime(), D = a.find((ee) => ee.id === H);
      if (!D)
        return R;
      const V = [];
      for (const ee of D.data)
        Array.isArray(ee) ? V.push(...ee) : V.push(ee);
      for (const ee of V) {
        if (ee.segmentId === Z.segmentId)
          continue;
        const X = ee.startDate.getTime(), ce = ee.endDate.getTime();
        if (m >= X && m < ce || G > X && G <= ce || m <= X && G >= ce) {
          const ue = new Date(Math.max(m, X)), xe = new Date(Math.min(G, ce)), De = xe.getTime() - ue.getTime();
          R.push({
            event: ee,
            conflictStart: ue,
            conflictEnd: xe,
            overlapDuration: De
          });
        }
      }
      return R;
    },
    [a]
  ), ne = le(
    (Z, T, Q, H) => {
      const R = [], m = T.getTime(), G = Q.getTime(), D = O(T).format("YYYY-MM-DD"), V = a.find((X) => X.id === H);
      if (!V)
        return R;
      const ee = [];
      for (const X of V.data)
        Array.isArray(X) ? ee.push(...X) : ee.push(X);
      for (const X of ee) {
        if (X.segmentId === Z.segmentId)
          continue;
        const ce = X.startDate.getTime(), ge = X.endDate.getTime(), ue = O(X.startDate).format("YYYY-MM-DD"), xe = O(X.endDate).format("YYYY-MM-DD"), De = O(Q).format("YYYY-MM-DD");
        if (!(ue === D || xe === D || ue === De || xe === De || O(X.startDate).isBefore(T, "day") && O(X.endDate).isAfter(Q, "day")) || m >= ce && m < ge || G > ce && G <= ge || m <= ce && G >= ge)
          continue;
        let me, Ae;
        ge <= m ? (me = m - ge, Ae = "before") : (me = ce - G, Ae = "after"), R.push({
          event: X,
          timeGap: me,
          position: Ae
        });
      }
      return R.sort((X, ce) => X.timeGap - ce.timeGap);
    },
    [a]
  ), ie = le(
    (Z, T, Q) => {
      const H = B(T, Q);
      let R, m;
      if (g)
        R = Z.startDate, m = Z.endDate;
      else {
        const ge = O(Z.endDate).diff(Z.startDate);
        R = H.snappedDate, m = O(R).add(ge, "milliseconds").toDate();
      }
      let G = 0, D = "", V;
      for (const ge of e) {
        const ue = Math.max(ge.data.length, 1);
        if (H.snappedResourceIndex < G + ue) {
          D = ge.id, V = ge.capacity;
          break;
        }
        G += ue;
      }
      if (!D)
        return null;
      let ee = !0;
      V !== void 0 && Z.totalPassengers !== void 0 && (ee = Z.totalPassengers <= V);
      const X = q(Z, R, m, D), ce = X.length === 0 ? ne(Z, R, m, D) : [];
      return {
        startDate: R,
        endDate: m,
        resourceId: D,
        resourceIndex: H.snappedResourceIndex,
        resourceCapacity: V,
        hasCapacity: ee,
        conflicts: X,
        hasConflict: X.length > 0,
        nearbyEvents: ce
      };
    },
    [B, e, g, q, ne]
  ), L = le(
    (Z, T) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - P.current < 100)
        return;
      P.current = Q;
      const H = {
        event: Z,
        currentStartDate: T.startDate,
        currentEndDate: T.endDate,
        currentResourceId: T.resourceId,
        conflicts: T.conflicts
      };
      s(H);
    },
    [s]
  ), z = le(
    (Z, T) => {
      if (!Y(Z) || !c.current)
        return;
      T.preventDefault(), T.stopPropagation();
      const Q = T.target.closest('[style*="left"]');
      let H = 0, R = 0;
      Q && Q.style.left && Q.style.top && (H = parseInt(Q.style.left), R = parseInt(Q.style.top));
      const m = vt(
        T.clientX,
        T.clientY,
        c.current
      );
      k.current = { x: H, y: R }, j.current = { x: T.clientX, y: T.clientY }, J.current = {
        x: m.x - H,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, N.current = {
        startDate: Z.startDate,
        endDate: Z.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const V of e) {
        for (const ee of V.data)
          if (ee.some((X) => X.segmentId === Z.segmentId)) {
            N.current.resourceId = V.id;
            break;
          }
        if (N.current.resourceId)
          break;
      }
      A(Z), $("potential"), F({ x: H, y: R });
      let G = 100, D = 48;
      if (Q) {
        const V = Q.getBoundingClientRect();
        G = V.width, D = V.height;
      }
      f({ width: G, height: D });
    },
    [Y, c, e, t]
  ), K = le(
    (Z) => {
      if (!c.current)
        return;
      let T = c.current;
      for (; T && T !== document.body; ) {
        const X = window.getComputedStyle(T);
        if (T.scrollHeight > T.clientHeight && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflow === "auto" || X.overflow === "scroll"))
          break;
        T = T.parentElement;
      }
      (!T || T === document.body) && (T = document.documentElement);
      const Q = T.getBoundingClientRect(), H = Z.clientY, R = 50, m = 12, G = H - Q.top, D = Q.bottom - H;
      let V = !1, ee = 0;
      G < R && G > 0 ? (V = !0, ee = -m * (1 - G / R)) : D < R && D > 0 && (V = !0, ee = m * (1 - D / R)), V ? (M.current && cancelAnimationFrame(M.current), M.current = requestAnimationFrame(() => {
        T.scrollTop += ee, w === "dragging" && K(Z);
      })) : M.current && (cancelAnimationFrame(M.current), M.current = null);
    },
    [c, w]
  ), te = le(
    (Z) => {
      if (w === "idle" || w === "animating" || !p || !c.current)
        return;
      const T = { x: Z.clientX, y: Z.clientY };
      if (w === "potential")
        if (mr(j.current, T))
          $("dragging");
        else
          return;
      K(Z);
      const Q = vt(
        Z.clientX,
        Z.clientY,
        c.current
      );
      I.current && cancelAnimationFrame(I.current), I.current = requestAnimationFrame(() => {
        const H = {
          x: Q.x - J.current.x,
          y: Q.y - J.current.y
        };
        F(H);
        const R = ie(p, Q.x, Q.y);
        if (R && S) {
          const m = {
            event: p,
            currentStartDate: R.startDate,
            currentEndDate: R.endDate,
            currentResourceId: R.resourceId,
            conflicts: R.conflicts
          };
          R.hasConflict = !S(m);
        }
        if (x(R), R) {
          const m = R.hasCapacity !== !1;
          b(m), L(p, R);
        }
      });
    },
    [w, p, c, ie, L, S, K]
  ), C = le(
    async (Z) => {
      if (w === "idle" || w === "animating")
        return;
      const T = { x: Z.clientX, y: Z.clientY };
      if (!mr(j.current, T) || w === "potential") {
        $("idle"), A(null), x(null);
        return;
      }
      if (!p || !y || !N.current) {
        $("idle"), A(null), x(null);
        return;
      }
      if (y.hasCapacity === !1) {
        b(!1), $("animating"), F(k.current), setTimeout(() => {
          $("idle"), A(null), x(null), b(!0);
        }, 300);
        return;
      }
      const H = {
        event: p,
        originalStartDate: N.current.startDate,
        originalEndDate: N.current.endDate,
        originalResourceId: N.current.resourceId,
        newStartDate: y.startDate,
        newEndDate: y.endDate,
        newResourceId: y.resourceId,
        hasConflict: y.hasConflict,
        conflicts: y.conflicts
      };
      let R = !0;
      if (o)
        try {
          const m = o(H);
          R = m instanceof Promise ? await m : m;
        } catch {
          R = !1;
        }
      R ? (b(!0), $("idle"), A(null), x(null)) : (b(!1), $("animating"), F(k.current), setTimeout(() => {
        $("idle"), A(null), x(null), b(!0);
      }, 300));
    },
    [w, p, y, o, S]
  );
  return ve(() => {
    if (w === "potential" || w === "dragging") {
      const Z = (Q) => te(Q), T = (Q) => C(Q);
      return document.addEventListener("mousemove", Z), document.addEventListener("mouseup", T), () => {
        document.removeEventListener("mousemove", Z), document.removeEventListener("mouseup", T);
      };
    } else
      return () => {
      };
  }, [w, te, C]), ve(() => () => {
    I.current && (cancelAnimationFrame(I.current), I.current = null), M.current && (cancelAnimationFrame(M.current), M.current = null);
  }, []), ve(() => {
    (w === "idle" || w === "animating") && (I.current && (cancelAnimationFrame(I.current), I.current = null), M.current && (cancelAnimationFrame(M.current), M.current = null));
  }, [w]), ve(() => {
    (w === "dragging" || w === "potential") && (w === "dragging" ? ($("animating"), F(k.current), setTimeout(() => {
      $("idle"), A(null), x(null);
    }, 300)) : ($("idle"), A(null), x(null)));
  }, [t]), ve(() => {
    if ((w === "dragging" || w === "potential") && p) {
      let Z = !1;
      for (const T of e) {
        for (const Q of T.data)
          if (Q.some((H) => H.segmentId === p.segmentId)) {
            Z = !0;
            break;
          }
        if (Z)
          break;
      }
      Z || (w === "dragging" ? ($("animating"), F(k.current), setTimeout(() => {
        $("idle"), A(null), x(null);
      }, 300)) : ($("idle"), A(null), x(null)));
    }
  }, [e, w, p]), {
    dragState: w,
    draggedEvent: p,
    ghostPosition: U,
    ghostDimensions: E,
    dropTarget: y,
    isValidDrop: _,
    handleDragStart: z,
    isDraggable: Y,
    draggingEventId: (p == null ? void 0 : p.segmentId) || null,
    resourceOnly: g
  };
}, Ei = ({
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
  const { enabled: d = !1, isSelectable: u } = i, g = d && !!o, S = le((m) => {
    let G = 0;
    for (const D of a)
      D <= m && G++;
    return m * ye + G * Ne;
  }, [a]), [w, $] = pe("idle"), [p, A] = pe(null), [U, F] = pe(null), [E, f] = pe(null), [y, x] = pe(!1), [_, b] = pe([]), [k, j] = pe(!1), J = he(null), I = he(null), M = he(null), P = he(null), N = le(() => {
    switch (t) {
      case 0:
        return Be * 7;
      case 1:
        return Ee;
      case 2:
        return Oe;
      default:
        return Ee;
    }
  }, [t]), Y = le(
    (m) => {
      const G = N(), D = Math.floor(m / G), V = O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return V.add(D * 7, "days").toDate();
        case 1:
          return V.add(D, "days").toDate();
        case 2:
          return V.add(D, "hours").toDate();
        default:
          return V.toDate();
      }
    },
    [t, n, N]
  ), B = le(
    (m) => {
      const G = wo(m, a), D = Math.floor(G / ye);
      let V = 0;
      for (const ee of e) {
        const X = Math.max(ee.data.length, 1);
        if (D < V + X)
          return {
            resourceId: ee.id,
            resourceIndex: D,
            resourceLabel: ee.label
          };
        V += X;
      }
      return null;
    },
    [e, a]
  ), q = le(
    (m) => {
      const G = N();
      return Math.floor(m / G) * G;
    },
    [N]
  ), ne = le(
    (m, G, D, V = []) => {
      const ee = [], ce = (r || e).find((xe) => xe.id === m), ge = G.getTime(), ue = D.getTime();
      if (ce) {
        const xe = ce.data[0], De = xe && Array.isArray(xe) ? ce.data.flat() : ce.data;
        for (const be of De) {
          const ae = new Date(be.startDate).getTime(), me = new Date(be.endDate).getTime();
          if (ge < me && ue > ae) {
            const Ae = new Date(Math.max(ge, ae)), Re = new Date(Math.min(ue, me)), fe = Re.getTime() - Ae.getTime();
            ee.push({
              event: be,
              conflictStart: Ae,
              conflictEnd: Re,
              overlapDuration: fe
            });
          }
        }
      }
      for (const xe of V) {
        if (xe.resourceId !== m)
          continue;
        const De = xe.startDate.getTime(), be = xe.endDate.getTime();
        if (ge < be && ue > De) {
          const ae = new Date(Math.max(ge, De)), me = new Date(Math.min(ue, be)), Ae = me.getTime() - ae.getTime(), Re = {
            segmentId: `pending-${xe.startDate.getTime()}`,
            reservationId: `pending-${xe.startDate.getTime()}`,
            startDate: xe.startDate,
            endDate: xe.endDate,
            occupancy: 0,
            title: `New Event (${xe.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          ee.push({
            event: Re,
            conflictStart: ae,
            conflictEnd: me,
            overlapDuration: Ae
          });
        }
      }
      return ee;
    },
    [e, r]
  ), ie = le(
    (m) => {
      if (!g || l || !c.current || m.button !== 0)
        return;
      const G = m.target;
      if (G.closest("[data-segment-id]") || G.closest("[data-multi-select-ui]"))
        return;
      const D = vt(m.clientX, m.clientY, c.current), V = B(D.y);
      if (!V)
        return;
      J.current = { x: m.clientX, y: m.clientY }, I.current = V.resourceIndex;
      const ee = q(D.x), X = N(), ce = S(V.resourceIndex);
      A(D), F(D), f({
        x: ee,
        y: ce,
        width: X,
        height: ye
      }), $("selecting");
    },
    [g, l, c, B, q, N, S]
  ), L = le(
    (m) => {
      F(m);
      const G = N(), D = q((p == null ? void 0 : p.x) || 0), V = q(m.x), ee = S(I.current), X = Math.min(D, V), ce = Math.max(D, V) + G;
      f({ x: X, y: ee, width: ce - X, height: ye });
    },
    [p, N, q, S]
  ), z = le(() => {
    P.current && (cancelAnimationFrame(P.current), P.current = null);
  }, []), K = le(
    (m, G) => {
      const D = document.getElementById(Je);
      if (!D || !c.current)
        return;
      const V = D.getBoundingClientRect(), ee = 60, X = 12, ce = m - (V.left + Le), ge = V.right - m;
      let ue = 0;
      ce < ee ? ue = -X * (1 - Math.max(0, ce) / ee) : ge < ee && (ue = X * (1 - Math.max(0, ge) / ee)), z(), ue !== 0 && (P.current = requestAnimationFrame(() => {
        D.scrollLeft += ue, L(vt(m, G, c.current)), K(m, G);
      }));
    },
    [c, L, z]
  ), te = le(
    (m) => {
      if (w !== "selecting" || !c.current || I.current === null)
        return;
      const G = vt(m.clientX, m.clientY, c.current);
      M.current && cancelAnimationFrame(M.current), M.current = requestAnimationFrame(() => L(G)), K(m.clientX, m.clientY);
    },
    [w, c, L, K]
  ), C = le(
    (m) => {
      if (w !== "selecting")
        return;
      if (z(), !c.current || !p || !J.current) {
        $("idle"), A(null), F(null), f(null);
        return;
      }
      const G = vt(m.clientX, m.clientY, c.current), D = B(p.y);
      if (!D) {
        $("idle"), A(null), F(null), f(null);
        return;
      }
      const V = Math.min(p.x, G.x), ee = Math.max(p.x, G.x), X = Y(V), ce = Y(ee), ge = O(ce).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (u && !u(D.resourceId, X, ge)) {
        $("idle"), A(null), F(null), f(null);
        return;
      }
      const ue = ne(
        D.resourceId,
        X,
        ge,
        _
      ), xe = ue.length > 0, De = {
        startDate: X,
        endDate: ge,
        resourceId: D.resourceId,
        resourceLabel: D.resourceLabel,
        zoomLevel: t,
        hasConflict: xe,
        conflicts: xe ? ue : void 0
      };
      if (y)
        b((be) => [...be, De]), j(!0);
      else if (o) {
        const be = o(De), ae = (me) => {
          me != null && me.continueMultiSelect && (x(!0), b([De]), j(!0));
        };
        be instanceof Promise ? be.then(ae) : ae(be);
      }
      $("idle"), A(null), F(null), f(null), J.current = null, I.current = null;
    },
    [
      w,
      c,
      p,
      B,
      Y,
      u,
      o,
      t,
      y,
      ne,
      _,
      z
    ]
  ), Z = le(() => {
    if (_.length > 0 && s) {
      j(!1);
      const m = s(_), G = (D) => {
        D != null && D.continueMultiSelect ? j(!0) : (b([]), x(!1), j(!1));
      };
      m instanceof Promise ? m.then(G) : G(m);
      return;
    }
    b([]), x(!1), j(!1);
  }, [_, s]), T = le(() => {
    b([]), x(!1), j(!1);
  }, []), Q = le((m) => {
    b((G) => {
      const D = G.filter((V, ee) => ee !== m);
      return D.length === 0 && (x(!1), j(!1)), D;
    });
  }, []), H = le(
    (m, G) => {
      b((D) => D.map((V, ee) => {
        if (ee !== m)
          return V;
        const X = { ...V, ...G }, ce = D.filter((ue, xe) => xe !== m), ge = ne(
          X.resourceId,
          X.startDate,
          X.endDate,
          ce
        );
        return {
          ...X,
          hasConflict: ge.length > 0,
          conflicts: ge.length > 0 ? ge : void 0
        };
      }));
    },
    [ne]
  ), R = le(
    (m) => {
      m.key === "Escape" && (w === "selecting" ? (z(), $("idle"), A(null), F(null), f(null), J.current = null, I.current = null) : y && _.length > 0 && (b([]), x(!1), j(!1)));
    },
    [w, y, _.length, z]
  );
  return ve(() => {
    if (w === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", C), document.addEventListener("keydown", R), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", C), document.removeEventListener("keydown", R);
      };
  }, [w, te, C, R]), ve(() => {
    if (y && _.length > 0)
      return document.addEventListener("keydown", R), () => {
        document.removeEventListener("keydown", R);
      };
  }, [y, _.length, R]), ve(() => () => {
    M.current && (cancelAnimationFrame(M.current), M.current = null), z();
  }, [z]), ve(() => {
    l && w === "selecting" && (z(), $("idle"), A(null), F(null), f(null), J.current = null, I.current = null);
  }, [l, w, z]), {
    selectionState: w,
    selectionStart: p,
    selectionEnd: U,
    selectionBox: E,
    handleGridMouseDown: ie,
    isEnabled: g,
    pendingSelections: _,
    confirmSelections: Z,
    clearSelections: T,
    removeSelection: Q,
    updateSelection: H,
    isMultiSelectActive: y,
    hasUnconfirmedSelections: k
  };
}, _i = v.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, Ti = v.div`
  position: relative;
`, Ai = v.canvas``;
v.canvas``;
const Pi = v.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, gr = v.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Oi = On(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: l, onDragStateChange: a, onTimeRangeSelect: d, onMultiTimeRangeSelect: u, clickToAddConfig: g, separatorRowIndices: S = [], subcontractSeparatorRow: w = -1, fadingUnitIds: $ }, p) {
  const A = he(!1), { handleScrollNext: U, handleScrollPrev: F, date: E, isLoading: f, cols: y, startDate: x, suppressNextSlideRef: _, config: b } = Ge(), k = he(null), j = he(null), J = he(t), I = he(E), M = he(null), P = he(null), N = he(null), Y = he(null), [B, q] = pe(!1), ne = qt(), {
    dragState: ie,
    draggedEvent: L,
    ghostPosition: z,
    ghostDimensions: K,
    dropTarget: te,
    isValidDrop: C,
    handleDragStart: Z,
    isDraggable: T,
    draggingEventId: Q,
    resourceOnly: H
  } = Di({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: x,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: l,
    gridRef: Y,
    separatorRowIndices: S
  });
  ve(() => {
    const fe = ie === "dragging" || ie === "potential";
    q(fe), a && a(fe);
  }, [ie, a]);
  const R = he(!1), m = he(E), G = he(null);
  ve(() => {
    var Ie;
    const fe = m.current;
    if (m.current = E, !R.current) {
      R.current = !0;
      return;
    }
    if (_ != null && _.current) {
      _.current = !1;
      return;
    }
    const re = Y.current;
    if (!(re != null && re.animate))
      return;
    const de = E.isAfter(fe) ? 48 : -48;
    (Ie = G.current) == null || Ie.cancel(), re.style.willChange = "transform";
    const oe = re.animate(
      [
        { transform: `translateX(${de}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), ke = () => {
      re.style.willChange = "";
    };
    oe.onfinish = ke, oe.oncancel = ke, G.current = oe;
  }, [E, _]);
  const {
    selectionState: D,
    selectionBox: V,
    handleGridMouseDown: ee,
    pendingSelections: X,
    confirmSelections: ce,
    clearSelections: ge,
    removeSelection: ue,
    updateSelection: xe,
    isMultiSelectActive: De,
    hasUnconfirmedSelections: be
  } = Ei({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: x,
    onTimeRangeSelect: d,
    onMultiTimeRangeSelect: u,
    clickToAddConfig: g,
    gridRef: Y,
    isDragging: B,
    separatorRowIndices: S
  }), ae = le((fe) => {
    fe.preventDefault();
  }, []), me = le((fe) => {
    fe.preventDefault();
  }, []), Ae = S.length * Ne, Re = le(
    (fe) => {
      const re = jn(), de = t * ye + 1 + Ae;
      xo(fe, re, de), Us(fe, r, t, y, x, ne, S, w);
    },
    [y, x, t, r, ne, S, w, Ae]
  );
  return ve(() => {
    if (!k.current)
      return;
    const fe = k.current.getContext("2d");
    if (!fe)
      return;
    const re = () => Re(fe);
    return window.addEventListener("resize", re), () => window.removeEventListener("resize", re);
  }, [Re]), ve(() => {
    var Fe;
    const fe = J.current, re = I.current;
    if (J.current = t, I.current = E, fe === t || !E.isSame(re, "day") || bo())
      return;
    const de = k.current, oe = j.current;
    if (!de || !oe)
      return;
    const ke = oe.getContext("2d");
    if (!ke)
      return;
    oe.width = de.width, oe.height = de.height, oe.style.width = de.style.width, oe.style.height = de.style.height, ke.setTransform(1, 0, 0, 1, 0, 0), ke.clearRect(0, 0, oe.width, oe.height), ke.drawImage(de, 0, 0), (Fe = M.current) == null || Fe.cancel(), oe.style.opacity = "1";
    const Ie = oe.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    Ie.onfinish = () => {
      oe.style.opacity = "0";
    }, M.current = Ie;
  }, [t, E]), ve(() => {
    const fe = k.current;
    if (!fe)
      return;
    fe.style.letterSpacing = "1px";
    const re = fe.getContext("2d");
    re && Re(re);
  }, [E, t, r, Re]), ve(() => {
    if (!P.current)
      return;
    const fe = new IntersectionObserver(
      (re) => {
        re[0].isIntersecting && !A.current && (A.current = !0, U(), setTimeout(() => {
          A.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Je) }
    );
    return fe.observe(P.current), () => {
      fe.disconnect();
    };
  }, [U]), ve(() => {
    if (!N.current)
      return;
    const fe = new IntersectionObserver(
      (re) => {
        re[0].isIntersecting && !A.current && (A.current = !0, F(), setTimeout(() => {
          A.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Je),
        rootMargin: `0px 0px 0px -${Le}px`
      }
    );
    return fe.observe(N.current), () => {
      fe.disconnect();
    };
  }, [F]), /* @__PURE__ */ W(_i, { id: uo, children: [
    /* @__PURE__ */ W(
      Ti,
      {
        ref: (fe) => {
          typeof p == "function" ? p(fe) : p && (p.current = fe), Y.current = fe;
        },
        onMouseDown: ee,
        style: { cursor: d ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(gr, { position: "left", ref: N }),
          /* @__PURE__ */ h(An, { isLoading: f, position: "left" }),
          /* @__PURE__ */ h(
            Ai,
            {
              ref: k,
              onDragStart: ae,
              onDragOver: me,
              style: { userSelect: ie === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(Pi, { ref: j, "aria-hidden": !0 }),
          /* @__PURE__ */ h(Rd, { zoom: r, startDate: x }),
          /* @__PURE__ */ h(Bd, { zoom: r, startDate: x }),
          /* @__PURE__ */ h(
            Bl,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onDragStart: Z,
              isDraggable: T,
              draggingEventId: Q,
              separatorRowIndices: S,
              fadingUnitIds: $,
              highlightedSegmentId: (b == null ? void 0 : b.highlightedSegmentId) ?? null
            }
          ),
          /* @__PURE__ */ h(gr, { ref: P, position: "right" }),
          /* @__PURE__ */ h(An, { isLoading: f, position: "right" }),
          (ie === "dragging" || ie === "animating") && /* @__PURE__ */ h(
            hd,
            {
              draggedEvent: L,
              ghostPosition: z,
              ghostDimensions: K,
              dropTarget: te,
              isValidDrop: C,
              dragState: ie,
              zoom: r,
              data: n,
              resourceOnly: H,
              separatorRowIndices: S
            }
          ),
          /* @__PURE__ */ h(
            yd,
            {
              selectionBox: V,
              isSelecting: D === "selecting"
            }
          ),
          De && X.length > 0 && /* @__PURE__ */ h(
            Od,
            {
              selections: X,
              data: n,
              zoom: r,
              startDate: x,
              onRemove: ue,
              onUpdate: xe,
              separatorRowIndices: S
            }
          )
        ]
      }
    ),
    De && be && X.length > 0 && /* @__PURE__ */ h(
      $d,
      {
        selections: X,
        onConfirm: ce,
        onClear: ge,
        onRemove: ue
      }
    )
  ] });
}), So = (e) => {
  const r = O.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, Co = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / _e);
    t += o.hours + s, n += r % _e, n >= _e && (t++, n -= _e);
  }), { hours: t, minutes: n };
}, Mo = (e, r) => {
  let t = dr;
  switch (r) {
    case 0:
      t = zs;
      break;
    case 1:
      t = dr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = _e - e.minutes;
    return i === _e && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, Ii = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const d = O(a.startDate).isoWeek(), u = O(a.startDate).isoWeekday(), g = O(a.endDate).isoWeek(), S = O(a.endDate).isoWeekday(), { hours: w, minutes: $ } = So(a.occupancy);
    if (n === d) {
      const p = (tt + 1 - u) * w, A = (tt + 1 - u) * $;
      return { hours: Math.max(0, p), minutes: A };
    } else if (n === g) {
      const p = S > tt ? tt * w : S * w, A = S > tt ? tt * $ : S * $;
      return { hours: p, minutes: A };
    } else if (O(r).isBetween(a.startDate, a.endDate))
      return { hours: tt * w, minutes: tt * $ };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Co(o), { free: c, overtime: l } = Mo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, Yi = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: g } = So(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: g } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = Co(s), { free: l, overtime: a } = Mo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Ri = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = O(c.startDate).hour(), a = O(c.endDate).hour(), d = r.hour(), u = O(c.endDate).minute(), g = O(c.startDate).minute();
    l < d && a > d ? t += _e : l === d && a === d && g && u ? t += u ? u - g : _e - g : l === d && a >= d ? t += g ? _e - g : _e : a === d && u && (t += u);
  });
  const n = Math.floor(t / _e), o = t % _e, s = n || o ? 0 : 1, i = n ? 0 : o ? _e - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Li = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? O(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? O(t).isBetween(i.startDate, i.endDate, "hour", "[]") : O(i.startDate).isBetween(
    O(t),
    O(t).add(6, "days"),
    "day",
    "[]"
  ) || O(t).isBetween(O(i.startDate), O(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return Yi(s, t, n, o);
    case 2:
      return Ri(s, t);
    default:
      return Ii(s, t, n);
  }
}, Ni = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", l;
  switch (s) {
    case 0:
      c = "weeks", l = Ct;
      break;
    case 1:
      c = "days", l = Ee;
      break;
    case 2:
      c = "hours", l = Oe;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * l) / l : t.x / l), d = O(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), u = Math.ceil(t.y / ye), g = n.findIndex((A, U, F) => F.slice(0, U + 1).reduce((f, y) => f + y, 0) >= u), S = s === 2 ? (a + 1) * l : a * l, w = (u - 1) * ye + ye, $ = Li(
    o[g],
    g,
    d,
    s,
    i
  ), p = O(e.startDate).isSame(O(e.endDate), "day");
  return {
    coords: { x: S, y: w },
    mouseCoords: t,
    resourceIndex: g,
    disposition: $,
    reservationData: {
      startTime: O(e.startDate).format("hh:mm A"),
      startDate: O(e.startDate).format("MMM D, YYYY"),
      endTime: O(e.endDate).format("hh:mm A"),
      endDate: O(e.endDate).format("MMM D, YYYY"),
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
      isOneDayEvent: p,
      passengers: e.totalPassengers,
      readiness: e.readiness,
      subcontractConfirmed: e.subcontractConfirmed
    }
  };
};
function Bi(e, r) {
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
function Fi(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const d of e)
    !d.isSubcontract && d.capacity != null && t.add(d.capacity);
  const n = [...t].sort((d, u) => d - u);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Bi(n, o), i = [];
  let c = 0;
  for (const d of s)
    i.push({
      min: n[c],
      max: n[d - 1],
      values: n.slice(c, d)
    }), c = d;
  i.push({
    min: n[c],
    max: n[n.length - 1],
    values: n.slice(c)
  });
  const l = [], a = /* @__PURE__ */ new Map();
  return i.forEach((d, u) => {
    const g = "__auto_cat_" + u, S = d.min === d.max ? d.min + " pax" : d.min + "-" + d.max + " pax";
    l.push({ id: g, name: S, minPassengers: d.min, maxPassengers: d.max });
    for (const w of d.values)
      a.set(w, g);
  }), { categories: l, capacityToCategoryId: a };
}
const zi = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return r.length > n ? (r.forEach((l, a) => {
    const d = {
      id: e[a].id,
      label: e[a].label,
      data: l,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      categoryId: e[a].categoryId
    };
    c >= n && (o.push(i), s += i.length, i = [], c = 0), c++, i.push(d);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((l, a) => {
    const d = {
      id: e[a + s].id,
      label: e[a + s].label,
      data: l,
      capacity: e[a + s].capacity,
      isSubcontract: e[a + s].isSubcontract,
      categoryId: e[a + s].categoryId
    };
    i.push(d), a === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((l, a) => {
    const d = {
      id: e[a].id,
      label: e[a].label,
      data: l,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      categoryId: e[a].categoryId
    };
    i.push(d);
  }), o.push(i), o);
};
var Mn = {}, Hi = {
  get exports() {
    return Mn;
  },
  set exports(e) {
    Mn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pe, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Hi);
const Wi = Mn;
var kn = {}, ji = {
  get exports() {
    return kn;
  },
  set exports(e) {
    kn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pe, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(ji);
const Zi = kn, Vi = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = O(t.startDate).startOf("day"), l = O(t.endDate).startOf("day"), a = O(o[i].startDate).startOf("day"), d = O(o[i].endDate).startOf("day");
          if (c.isBetween(a, d, null, "[]") || l.isBetween(a, d, null, "[]") || c.isBefore(a, "minute") && l.isAfter(d, "minute") || c.isAfter(a, "minute") && l.isBefore(d, "minute")) {
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
O.extend(Wi);
O.extend(Zi);
const yr = /* @__PURE__ */ new WeakMap(), Gi = (e) => {
  const r = yr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = O(o.startDate), c = O(s.startDate), l = i.startOf("day").diff(c.startOf("day"), "day");
    return l !== 0 ? l : i.diff(c);
  }), n = Vi(t);
  return yr.set(e, n), n;
}, Xi = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = Gi(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Ui = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, Ki = (e) => {
  const { recordsThreshold: r } = Ge(), [t, n] = pe(0), [o, s] = pe(0), i = he(null);
  ve(() => {
    i.current = document.getElementById(Je);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = $e(() => Xi(e), [e]), a = $e(
    () => zi(e, c, l, r),
    [e, c, r, l]
  ), d = le(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = le(() => {
    a[o].length && (n((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), g = le(() => {
    n(0), s(0);
  }, []), S = t + a[o].length, w = $e(
    () => l.slice(t, S),
    [S, l, t]
  ), $ = $e(
    () => c.slice(t, S),
    [S, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: $,
    rowsPerItem: w,
    totalRowsPerPage: Ui(a[o]),
    next: d,
    previous: u,
    reset: g
  };
};
var $n = {}, Ji = {
  get exports() {
    return $n;
  },
  set exports(e) {
    $n = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pe, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Ji);
const qi = $n;
var Dn = {}, Qi = {
  get exports() {
    return Dn;
  },
  set exports(e) {
    Dn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(lt);
  })(Pe, function(t) {
    function n(g) {
      return g && typeof g == "object" && "default" in g ? g : { default: g };
    }
    var o = n(t);
    function s(g) {
      return g % 10 < 5 && g % 10 > 1 && ~~(g / 10) % 10 != 1;
    }
    function i(g, S, w) {
      var $ = g + " ";
      switch (w) {
        case "m":
          return S ? "minuta" : "minutę";
        case "mm":
          return $ + (s(g) ? "minuty" : "minut");
        case "h":
          return S ? "godzina" : "godzinę";
        case "hh":
          return $ + (s(g) ? "godziny" : "godzin");
        case "MM":
          return $ + (s(g) ? "miesiące" : "miesięcy");
        case "yy":
          return $ + (s(g) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(g, S) {
      return a.test(S) ? c[g.month()] : l[g.month()];
    };
    d.s = l, d.f = c;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(g) {
      return g + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(u, null, !0), u;
  });
})(Qi);
const ea = Dn;
var En = {}, ta = {
  get exports() {
    return En;
  },
  set exports(e) {
    En = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(lt);
  })(Pe, function(t) {
    function n(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(l, a, d) {
      var u = s[d];
      return Array.isArray(u) && (u = u[a ? 0 : 1]), u.replace("%d", l);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(ta);
const na = En;
var _n = {}, ra = {
  get exports() {
    return _n;
  },
  set exports(e) {
    _n = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(lt);
  })(Pe, function(t) {
    function n(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(d, u) {
      return c.test(u) ? s[d.month()] : i[d.month()];
    };
    l.s = i, l.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(ra);
const oa = _n;
var Tn = {}, sa = {
  get exports() {
    return Tn;
  },
  set exports(e) {
    Tn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(lt);
  })(Pe, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(sa);
const ia = Tn, aa = {
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
    oneDay: "One Day",
    passengers: "Pax"
  },
  subcontract: "Subcontrato"
}, ca = {
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
}, la = {
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
}, da = {
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
}, ua = {
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
}, fa = [
  {
    id: "en",
    lang: la,
    translateCode: "en-GB",
    dayjsTranslations: qi
  },
  {
    id: "pl",
    lang: ca,
    translateCode: "pl-PL",
    dayjsTranslations: ea
  },
  {
    id: "es",
    lang: aa,
    translateCode: "es-ES",
    dayjsTranslations: ia
  },
  {
    id: "lt",
    lang: ua,
    translateCode: "lt-LT",
    dayjsTranslations: oa
  },
  {
    id: "de",
    lang: da,
    translateCode: "de-DE",
    dayjsTranslations: na
  }
];
class ha {
  constructor() {
    Zn(this, "locales", fa);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const Kt = new ha(), ko = Xr({
  localesData: Kt.getLocales(),
  currentLocale: Kt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), pa = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = pe("en"), s = Kt.getLocales(), i = le(() => {
    const u = s.find((g) => g.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && O.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [c, l] = pe(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  ve(() => {
    t == null || t.forEach((u) => {
      s.find((S) => S.id === u.id) || Kt.addLocales(u);
    });
  }, [s, t]), ve(() => {
    const u = localStorage.getItem("locale"), g = r ?? u ?? "en";
    localStorage.setItem("locale", g), o(g), l(i());
  }, [i, r]);
  const { Provider: d } = ko;
  return /* @__PURE__ */ h(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, qe = () => rt(ko).currentLocale.lang, ma = (e) => /* @__PURE__ */ se.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ se.createElement("defs", null, /* @__PURE__ */ se.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ se.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ se.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ se.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ se.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ se.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ga = v.div`
  height: 440px;
  width: 514px;
  position: relative;
`, ya = v.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, va = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = qe();
  return /* @__PURE__ */ W(ga, { onClick: e, children: [
    /* @__PURE__ */ h(ma, {}),
    /* @__PURE__ */ h(ya, { children: r })
  ] });
}, xa = v.div`
  position: relative;
  display: flex;
`, ba = v.div`
  position: relative;
  margin-left: ${Le};
  display: flex;
  flex-direction: column;
  contain: paint;
`, wa = v.div`
  width: calc(${({ width: e }) => e}px - ${Le}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Le}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Sa = /* @__PURE__ */ new Set(), Ca = {
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
    reservationType: It.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function Ma(e, r) {
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
const ka = ({
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
  onTimeRangeSelect: d,
  onMultiTimeRangeSelect: u,
  clickToAddConfig: g
}) => {
  const [S, w] = pe(Ca), [$, p] = pe(e), [A, U] = pe(!1), [F, E] = pe(!1), [f, y] = pe(""), [x, _] = pe(/* @__PURE__ */ new Set()), [b, k] = pe(/* @__PURE__ */ new Set()), j = he([]);
  ve(() => () => j.current.forEach(clearTimeout), []);
  const {
    zoom: J,
    startDate: I,
    isLoading: M,
    config: { includeTakenHoursOnWeekendsInDayView: P, showTooltip: N, showThemeToggle: Y }
  } = Ge(), B = he(null), q = he(null), [ne, ie] = pe(124), {
    page: L,
    projectsPerPerson: z,
    rowsPerItem: K,
    currentPageNum: te,
    pagesAmount: C,
    next: Z,
    previous: T,
    reset: Q
  } = Ki($), { effectiveCategories: H, effectivePage: R } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: L };
    const re = Fi(L);
    if (re.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: L };
    const de = L.map((oe) => {
      if (oe.isSubcontract || oe.capacity == null)
        return oe;
      const ke = re.capacityToCategoryId.get(oe.capacity);
      return ke ? { ...oe, categoryId: ke } : oe;
    });
    return { effectiveCategories: re.categories, effectivePage: de };
  }, [t, L]), m = le(
    (re) => {
      if (x.has(re)) {
        _((oe) => {
          const ke = new Set(oe);
          return ke.delete(re), ke;
        });
        return;
      }
      if (bo()) {
        _((oe) => new Set(oe).add(re));
        return;
      }
      k((oe) => new Set(oe).add(re));
      const de = setTimeout(() => {
        _((oe) => new Set(oe).add(re)), k((oe) => {
          const ke = new Set(oe);
          return ke.delete(re), ke;
        });
      }, 190);
      j.current.push(de);
    },
    [x]
  ), G = $e(() => {
    const re = [], de = H ? [...H].sort((oe, ke) => oe.maxPassengers - ke.maxPassengers) : [];
    for (const oe of de)
      R.some((ke) => !ke.isSubcontract && ke.categoryId === oe.id) && re.push(oe.id);
    return R.some((oe) => oe.isSubcontract) && re.push("__subcontract__"), re;
  }, [H, R]), D = le(() => {
    _(/* @__PURE__ */ new Set());
  }, []), V = le(() => {
    _(new Set(G));
  }, [G]), ee = $e(() => {
    if (b.size === 0)
      return Sa;
    const re = /* @__PURE__ */ new Set();
    for (const de of R) {
      const oe = de.isSubcontract ? "__subcontract__" : de.categoryId;
      oe && b.has(oe) && re.add(de.id);
    }
    return re;
  }, [b, R]), {
    visiblePage: X,
    visibleRowsPerItem: ce,
    visibleTotalRows: ge,
    visibleProjectsPerPerson: ue,
    separatorRowIndices: xe,
    subcontractSeparatorRow: De
  } = $e(() => {
    const re = Ma(R, H), de = ((H == null ? void 0 : H.length) ?? 0) > 0, oe = /* @__PURE__ */ new Map();
    L.forEach((Ye, ft) => oe.set(Ye.id, ft));
    const ke = [], Ie = [], Fe = [], Xe = [];
    let ot = 0, Yt = -1;
    for (const Ye of re)
      if (Ye.type === "subcontract" || Ye.type === "category" && de) {
        const ht = Ye.type === "subcontract" ? "__subcontract__" : Ye.category.id, pt = x.has(ht);
        if (Xe.push(ot), Ye.type === "subcontract" && (Yt = ot), !pt)
          for (const st of Ye.items) {
            const Rt = oe.get(st.id) ?? 0, Lt = K[Rt];
            ke.push(st), Ie.push(Lt), Fe.push(z[Rt]), ot += Lt;
          }
      } else
        for (const ht of Ye.items) {
          const pt = oe.get(ht.id) ?? 0, st = K[pt];
          ke.push(ht), Ie.push(st), Fe.push(z[pt]), ot += st;
        }
    const et = Ie.reduce((Ye, ft) => Ye + ft, 0);
    return {
      visiblePage: ke,
      visibleRowsPerItem: Ie,
      visibleTotalRows: et,
      visibleProjectsPerPerson: Fe,
      separatorRowIndices: Xe,
      subcontractSeparatorRow: Yt
    };
  }, [R, H, L, x, K, z]), be = he(
    Cn(
      (re, de, oe, ke, Ie, Fe) => {
        if (!B.current)
          return;
        const { tile: Xe, segmentId: ot } = Ae(re);
        if (!ot || !Xe) {
          U(!1);
          return;
        }
        const Yt = me(ot, de), et = B.current.getBoundingClientRect(), Ye = Xe.getBoundingClientRect(), ft = { x: re.clientX - et.left, y: re.clientY - et.top }, ht = {
          x: re.clientX - et.left,
          y: re.clientY - et.top
        }, pt = {
          x: Ye.left - et.left,
          y: Ye.top - et.top,
          width: Ye.width,
          height: Ye.height
        }, {
          coords: { x: st, y: Rt },
          resourceIndex: Lt,
          disposition: _o,
          reservationData: To
        } = Ni(
          Yt,
          oe,
          ft,
          ke,
          Ie,
          Fe,
          P
        );
        w({
          coords: { x: st, y: Rt },
          mouseCoords: ht,
          resourceIndex: Lt,
          disposition: _o,
          reservationData: To,
          tileBounds: pt
        }), U(!0);
      },
      4
    )
  ), ae = he(
    Cn((re, de) => {
      Q(), p(
        re.map((oe) => ({
          ...oe,
          data: oe.data.filter((ke) => {
            const { title: Ie, description: Fe, subtitle: Xe } = ke;
            return (Ie == null ? void 0 : Ie.toLowerCase().includes(de.toLowerCase())) || (Xe == null ? void 0 : Xe.toLowerCase().includes(de.toLowerCase())) || (Fe == null ? void 0 : Fe.toLowerCase().includes(de.toLowerCase()));
          })
        })).filter((oe) => oe.data.length > 0)
      );
    }, 500)
  ), me = (re, de) => {
    if (re)
      return de.flatMap((oe) => oe.data).find((oe) => oe.segmentId === re);
  }, Ae = (re) => {
    if (!re.target)
      return { tile: null, segmentId: null };
    const de = re.target.closest("[data-segment-id]");
    return de ? { tile: de, segmentId: de.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, Re = (re) => {
    const de = re.target.value;
    y(de), ae.current.cancel(), de ? ae.current(e, de) : (Q(), p(e));
  }, fe = le(() => {
    be.current.cancel(), U(!1);
  }, []);
  return ve(() => {
    const re = (oe) => be.current(
      oe,
      e,
      I,
      ce,
      ue,
      J
    ), de = B.current;
    if (de)
      return de.addEventListener("mousemove", re), de.addEventListener("mouseleave", fe), () => {
        de.removeEventListener("mousemove", re), de.removeEventListener("mouseleave", fe);
      };
  }, [
    be,
    fe,
    ue,
    ce,
    I,
    J,
    e
  ]), ve(() => {
    f ? (ae.current.cancel(), ae.current(e, f)) : p(e);
  }, [e, f]), Jt(() => {
    const re = q.current;
    if (!re)
      return;
    const de = () => ie(re.offsetHeight);
    de();
    const oe = new ResizeObserver(de);
    return oe.observe(re), () => oe.disconnect();
  }, []), /* @__PURE__ */ W(xa, { children: [
    /* @__PURE__ */ h(
      Wc,
      {
        headerHeight: ne,
        data: R,
        categories: H,
        pageNum: te,
        pagesAmount: C,
        rows: K,
        onLoadNext: Z,
        onLoadPrevious: T,
        searchInputValue: f,
        onSearchInputChange: Re,
        onItemClick: o,
        collapsedGroups: x,
        fadingGroups: b,
        onToggleGroup: m,
        allGroupIds: G,
        onExpandAll: D,
        onCollapseAll: V
      }
    ),
    /* @__PURE__ */ W(ba, { children: [
      /* @__PURE__ */ h(
        vl,
        {
          ref: q,
          zoom: J,
          topBarWidth: i,
          showThemeToggle: Y,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Oi,
        {
          data: X,
          baseData: r || e,
          zoom: J,
          rows: ge,
          ref: B,
          onTileClick: n,
          onEventDrop: c,
          onEventDrag: l,
          draggableConfig: a,
          onDragStateChange: E,
          onTimeRangeSelect: d,
          onMultiTimeRangeSelect: u,
          clickToAddConfig: g,
          separatorRowIndices: xe,
          subcontractSeparatorRow: De,
          fadingUnitIds: ee
        }
      ) : /* @__PURE__ */ h(wa, { width: i, children: M ? /* @__PURE__ */ h(An, { isLoading: M, position: "left" }) : /* @__PURE__ */ h(va, {}) }),
      N && /* @__PURE__ */ h(td, { tooltipData: S, visible: A && !F })
    ] })
  ] });
}, $a = v.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Le + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.primary};
`, vr = v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, Da = v.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, Ea = v.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, xr = v.button`
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
`, _a = v.button`
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
`, Ta = v.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin-left: 4px;
  text-transform: capitalize;
  white-space: nowrap;
`, Aa = v.div`
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
`, br = v.button`
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
`, Pa = v.label`
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
`, Oa = v.button`
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
`, Ia = v.span`
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
`, mt = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), Ya = () => {
  var r, t;
  const e = document.getElementById(po);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Ra = () => {
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
  } = Ge();
  qe();
  const { filterButtonState: d = -1 } = e, u = () => {
    var g;
    (g = document.querySelector(`#${Je} input[placeholder]`)) == null || g.focus();
  };
  return /* @__PURE__ */ W($a, { width: 0, children: [
    /* @__PURE__ */ W(vr, { $at: "start", children: [
      /* @__PURE__ */ W(Ea, { children: [
        /* @__PURE__ */ h(xr, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ h(mt, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h(_a, { onClick: s, children: "Hoy" }),
        /* @__PURE__ */ h(xr, { onClick: n, "aria-label": "Siguiente", children: /* @__PURE__ */ h(mt, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      /* @__PURE__ */ h(Ta, { children: r.locale(O.locale()).format("MMMM YYYY") }),
      e.showViewSwitcher !== !1 && /* @__PURE__ */ W(Te, { children: [
        /* @__PURE__ */ h(Da, {}),
        /* @__PURE__ */ W(Aa, { children: [
          /* @__PURE__ */ h("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
          /* @__PURE__ */ h("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
          /* @__PURE__ */ h("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
        ] })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ W(Pa, { children: [
        /* @__PURE__ */ W(mt, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (g) => g.target.value && c(g.target.value) })
      ] }),
      /* @__PURE__ */ W(Oa, { onClick: u, children: [
        /* @__PURE__ */ W(mt, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] })
    ] }),
    /* @__PURE__ */ W(vr, { $at: "end", children: [
      e.showFilterButton !== !1 && d >= 0 && /* @__PURE__ */ W(br, { $primary: !!d, onClick: l, children: [
        /* @__PURE__ */ h(mt, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!d && /* @__PURE__ */ h(Ia, { children: d })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ W(br, { onClick: Ya, children: [
        /* @__PURE__ */ h(mt, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      a
    ] })
  ] });
}, La = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Na = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Ba = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Fa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), za = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ha = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Wa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), ja = (e) => /* @__PURE__ */ se.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Za = (e) => /* @__PURE__ */ se.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Va = (e) => /* @__PURE__ */ se.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Ga = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Xa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Ua = (e) => /* @__PURE__ */ se.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Ka = (e) => /* @__PURE__ */ se.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ se.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Ja = {
  add: La,
  subtract: Na,
  filter: Ba,
  arrowLeft: Fa,
  arrowRight: za,
  defaultAvatar: Ha,
  calendarWarning: Wa,
  calendarFree: ja,
  arrowDown: Va,
  arrowUp: Za,
  search: Ga,
  close: Xa,
  moon: Ua,
  sun: Ka
}, rn = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = qt(), i = Ja[e];
  return i ? /* @__PURE__ */ h(
    i,
    {
      style: { transition: ".5s ease" },
      fill: n ?? s.accent,
      width: r,
      height: t,
      className: o
    }
  ) : null;
}, qa = (e, r, t) => ({
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
v.button`
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
  ${({ theme: e, variant: r, disabled: t }) => qa(e, r, t)}
`;
const Qa = v.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${ho}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${ze};
`, ec = v.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, tc = v.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, nc = v.div`
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
`, rc = v.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, oc = v.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, sc = v.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`, ic = v.div`
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
`, ac = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, cc = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, lc = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, dc = v.div`
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
`, wr = "#cdd8d2", Sr = [178, 216, 195], uc = [15, 125, 102], fc = (e) => {
  const r = Math.min(1, Math.max(0, e)), t = (n) => Math.round(Sr[n] + (uc[n] - Sr[n]) * r);
  return `rgb(${t(0)}, ${t(1)}, ${t(2)})`;
}, hc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ge(), s = qe(), i = he(null), [c, l] = pe(null), a = $e(
    () => Array.from({ length: 12 }, (b, k) => O().month(k).format("MMM").toUpperCase()),
    [s]
  ), d = $e(() => O().startOf("day"), []), { domainStart: u, domainEnd: g, domainDays: S } = $e(() => {
    const b = d.subtract(3, "month").startOf("month"), k = d.add(9, "month").endOf("month");
    return { domainStart: b, domainEnd: k, domainDays: k.diff(b, "day") + 1 };
  }, [d]), w = (b) => b.diff(u, "day") / S * 100, $ = (b) => Math.min(100, Math.max(0, b)), p = $e(() => {
    const b = [];
    let k = u.startOf("month");
    for (; k.isBefore(g); )
      b.push(k), k = k.add(1, "month");
    return b;
  }, [u, g]), A = o == null ? void 0 : o.yearCounts, U = $e(() => {
    const b = Math.ceil(S / 7), k = new Array(b).fill(0), j = (B) => {
      const q = B.diff(u, "day");
      return q < 0 || q >= S ? -1 : Math.floor(q / 7);
    };
    if (A && A.length)
      for (const B of A) {
        const q = j(O(B.date));
        q >= 0 && (k[q] += B.count);
      }
    else
      for (const B of t ?? [])
        for (const q of B.data ?? []) {
          const ne = j(O(q.startDate));
          ne >= 0 && (k[ne] += 1);
        }
    const J = Math.max(0, ...k);
    if (J <= 0)
      return k.map(() => ({ h: 0, color: wr }));
    const I = k.filter((B) => B > 0).sort((B, q) => B - q), M = I.length >> 1, P = I.length % 2 ? I[M] : (I[M - 1] + I[M]) / 2, N = P > 0 ? J / P : 1, Y = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, N)))));
    return k.map(
      (B) => B > 0 ? { h: Math.min(100, 100 * Math.pow(B / J, Y)), color: fc(B / J) } : { h: 0, color: wr }
    );
  }, [t, A, u, S]), F = w(d), E = (b) => {
    const { startDate: k, endDate: j } = Qt(b, r), J = $(w(k));
    return { left: J, width: $(w(j)) - J, startDate: k, endDate: j };
  }, f = E(e), y = c ? E(c.d) : null, x = (b) => `${b.date()} ${a[b.month()]}`, _ = (b) => {
    var J;
    const k = (J = i.current) == null ? void 0 : J.getBoundingClientRect();
    if (!k)
      return null;
    const j = Math.min(1, Math.max(0, (b - k.left) / k.width));
    return { f: j, d: u.add(Math.round(j * (S - 1)), "day") };
  };
  return /* @__PURE__ */ W(Qa, { children: [
    /* @__PURE__ */ W(ec, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ W(
      tc,
      {
        ref: i,
        onClick: (b) => {
          const k = _(b.clientX);
          k && n(k.d.toDate());
        },
        onMouseMove: (b) => {
          const k = _(b.clientX);
          k && l({ left: k.f * 100, d: k.d });
        },
        onMouseLeave: () => l(null),
        children: [
          /* @__PURE__ */ h(nc, { children: p.map((b, k) => /* @__PURE__ */ h("span", { style: { left: `${w(b)}%` }, children: k === 0 || b.month() === 0 ? `${a[b.month()]} ${b.format("YY")}` : a[b.month()] }, k)) }),
          p.map(
            (b, k) => k === 0 ? null : /* @__PURE__ */ h(rc, { style: { left: `${w(b)}%` } }, k)
          ),
          /* @__PURE__ */ h(oc, { children: U.map((b, k) => /* @__PURE__ */ h(sc, { style: { height: `${b.h}%`, background: b.color } }, k)) }),
          /* @__PURE__ */ h(ac, { style: { left: `${f.left}%`, width: `${f.width}%` } }),
          /* @__PURE__ */ h(ic, { style: { left: `${$(F)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && y && /* @__PURE__ */ W(Te, { children: [
            /* @__PURE__ */ h(cc, { style: { left: `${y.left}%`, width: `${y.width}%` } }),
            /* @__PURE__ */ h(lc, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(dc, { style: { left: `${c.left}%` }, children: `Ir a ${x(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, pc = v.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, mc = v.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? ho : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, gc = v.div`
  position: relative;
`, yc = ({
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
  schedulerRef: d,
  onTimeRangeSelect: u,
  onMultiTimeRangeSelect: g,
  clickToAddConfig: S
}) => {
  const { goToDate: w, handleGoToday: $, zoomIn: p, zoomOut: A, zoom: U } = Ge();
  return Ur(
    d,
    () => ({
      goToDate: w,
      goToToday: $,
      setZoom: (F) => {
        if (!yo(F))
          return;
        const E = F - U;
        if (E > 0)
          for (let f = 0; f < E; f++)
            p();
        else
          for (let f = 0; f < Math.abs(E); f++)
            A();
      }
    }),
    [w, $, U, p, A]
  ), /* @__PURE__ */ h(
    ka,
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
      onTimeRangeSelect: u,
      onMultiTimeRangeSelect: g,
      clickToAddConfig: S
    }
  );
}, jd = On(function({
  data: r,
  categories: t,
  baseData: n,
  config: o,
  startDate: s,
  onRangeChange: i,
  onTileClick: c,
  handleToggleDisplayActiveUnits: l,
  onClearFilterData: a,
  toolbarActions: d,
  onItemClick: u,
  isLoading: g,
  onEventDrop: S,
  onEventDrag: w,
  draggableConfig: $,
  onTimeRangeSelect: p,
  onMultiTimeRangeSelect: A,
  clickToAddConfig: U
}, F) {
  var N;
  const E = $e(
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
  ), f = he(null), y = he(null), [x, _] = pe((N = f.current) == null ? void 0 : N.clientWidth), b = $e(() => O(s), [s]), [k, j] = pe(E.defaultTheme ?? "light"), J = () => {
    j(k === "light" ? "dark" : "light");
  }, I = k === "light" ? Is : Ys, M = E.theme ? E.theme[I.mode] : {}, P = {
    ...I,
    colors: {
      ...I.colors,
      ...M
    }
  };
  return Ur(
    F,
    () => ({
      goToDate: (Y) => {
        var B;
        return (B = y.current) == null ? void 0 : B.goToDate(Y);
      },
      goToToday: () => {
        var Y;
        return (Y = y.current) == null ? void 0 : Y.goToToday();
      },
      setZoom: (Y) => {
        var B;
        return (B = y.current) == null ? void 0 : B.setZoom(Y);
      }
    }),
    []
  ), Jt(() => {
    const Y = () => {
      f.current && _(f.current.clientWidth);
    };
    return Y(), window.addEventListener("resize", Y), () => window.removeEventListener("resize", Y);
  }, []), /* @__PURE__ */ W(Te, { children: [
    /* @__PURE__ */ h(Os, {}),
    /* @__PURE__ */ h(Ts, { theme: P, children: /* @__PURE__ */ h(pa, { lang: E.lang, translations: E.translations, children: /* @__PURE__ */ h(
      ki,
      {
        data: r,
        isLoading: !!g,
        config: E,
        onRangeChange: i,
        defaultStartDate: b,
        handleToggleDisplayActiveUnits: l,
        onClearFilterData: a,
        toolbarActions: d,
        children: /* @__PURE__ */ W(pc, { id: po, children: [
          /* @__PURE__ */ h(
            mc,
            {
              showScroll: !!r.length,
              $footer: E.showOverview !== !1 && !!r.length,
              id: Je,
              ref: f,
              children: /* @__PURE__ */ h(gc, { children: /* @__PURE__ */ h(
                yc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: x ?? 0,
                  onItemClick: u,
                  toggleTheme: J,
                  onEventDrop: S,
                  onEventDrag: w,
                  draggableConfig: $,
                  schedulerRef: y,
                  onTimeRangeSelect: p,
                  onMultiTimeRangeSelect: A,
                  clickToAddConfig: U
                }
              ) })
            }
          ),
          E.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(hc, {})
        ] })
      }
    ) }) })
  ] });
}), vc = v.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, xc = v.button`
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
`, bc = v.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, wc = v.p`
  ${kt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Cr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = qe(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(vc, { intent: e, children: /* @__PURE__ */ W(xc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(bc, { children: t }),
    /* @__PURE__ */ h(wc, { children: l })
  ] }) });
}, Sc = v.div`
  min-width: ${Le + "px"};
  max-width: ${Le + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Cc = v.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({ $height: e }) => e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Le}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Mc = v.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, kc = v.input`
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
`, $c = v.div`
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
`, Dc = Ve`
  from { opacity: 1; }
  to { opacity: 0; }
`, Mr = v.div`
  ${({ $fading: e }) => e && dt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Dc} 180ms ease forwards;
      }
    `}
`, Ec = v.button`
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
`, _c = Ve`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, Tc = v.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ye}px;
  height: calc(${ye}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBorder + "33" : e.colors.border};
  border-left: 3px solid
    ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBorder : "transparent"};
  background-color: ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBg : "transparent"};
  /* Scope the transition to paint-only props. It was transition:0.5s ease (= transition:all), which animated the row
     height (a LAYOUT property) for 500ms on every add/remove/collapse — layout thrash that made rowIn hitch. */
  transition: background-color 0.15s ease, border-color 0.15s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${_c} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Ac = v.div`
  display: flex;
  align-items: center;
`, Pc = v.div`
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
`, Oc = v.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Ic = v.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, kr = v.p`
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
`, Yc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Rc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Lc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Nc = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  Tc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ W(Ac, { children: [
      /* @__PURE__ */ h(Pc, { $provider: o, children: Yc(r.icon) ? /* @__PURE__ */ h(Oc, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Lc, {}) : /* @__PURE__ */ h(Rc, {}) }),
      /* @__PURE__ */ W(Ic, { children: [
        /* @__PURE__ */ h(kr, { isMain: !0, children: r.title }),
        /* @__PURE__ */ h(kr, { children: r.subtitle })
      ] })
    ] })
  }
), Bc = v.div`
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
`, Fc = v.span`
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
`, zc = v.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, Hc = v.div`
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
`, $r = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => /* @__PURE__ */ W(Bc, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ h(Hc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(Fc, { $variant: o, children: e }),
  /* @__PURE__ */ h(zc, { $variant: o, children: r })
] }), Wc = ({
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
  onItemClick: d,
  collapsedGroups: u,
  fadingGroups: g,
  onToggleGroup: S,
  allGroupIds: w,
  onExpandAll: $,
  onCollapseAll: p
}) => {
  const [A, U] = pe(!1), F = qe(), E = () => U((M) => !M), f = r ? [...r].sort((M, P) => M.maxPassengers - P.maxPassengers) : [], y = f.length > 0, x = w.length > 0, _ = x && u.size === w.length;
  x && u.size;
  const b = e.filter((M) => M.isSubcontract), k = F.subcontract ?? "Subcontract", j = (M) => {
    const P = e.indexOf(M);
    return /* @__PURE__ */ h(
      Nc,
      {
        id: M.id,
        item: M.label,
        rows: n[P],
        onItemClick: d,
        isSubcontract: M.isSubcontract
      },
      M.id
    );
  }, J = (M) => {
    const P = e.filter(
      (q) => !q.isSubcontract && q.categoryId === M.id
    );
    if (P.length === 0)
      return null;
    const N = u.has(M.id), Y = g.has(M.id), B = M.name;
    return /* @__PURE__ */ W("div", { children: [
      /* @__PURE__ */ h(
        $r,
        {
          label: B,
          count: P.length,
          isCollapsed: N || Y,
          onToggle: () => S(M.id),
          variant: "category"
        }
      ),
      !N && /* @__PURE__ */ h(Mr, { $fading: Y, children: P.map(j) })
    ] }, M.id);
  }, I = e.filter(
    (M) => !M.isSubcontract && (!M.categoryId || !y)
  );
  return /* @__PURE__ */ W(Sc, { children: [
    /* @__PURE__ */ W(Cc, { $height: t, children: [
      /* @__PURE__ */ W(Mc, { children: [
        /* @__PURE__ */ W($c, { isFocused: A, children: [
          /* @__PURE__ */ h(
            kc,
            {
              placeholder: F.search,
              value: l,
              onChange: a,
              onFocus: E,
              onBlur: E
            }
          ),
          /* @__PURE__ */ h(rn, { iconName: "search" })
        ] }),
        x && /* @__PURE__ */ h(
          Ec,
          {
            title: _ ? "Expand all" : "Collapse all",
            onClick: _ ? $ : p,
            $allCollapsed: _,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: _ ? /* @__PURE__ */ W(Te, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ W(Te, { children: [
              /* @__PURE__ */ h("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ h(
        Cr,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ h(rn, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    y ? f.map(J) : I.map(j),
    y && I.length > 0 && I.map(j),
    b.length > 0 && /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(
        $r,
        {
          label: k,
          count: b.length,
          isCollapsed: u.has("__subcontract__") || g.has("__subcontract__"),
          onToggle: () => S("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !u.has("__subcontract__") && /* @__PURE__ */ h(Mr, { $fading: g.has("__subcontract__"), children: b.map(j) })
    ] }),
    /* @__PURE__ */ h(
      Cr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(rn, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, jc = v.div`
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
`, Zc = Ve`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Vc = v.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Zc} 1s infinite;
`, Gc = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(jc, { position: r, children: /* @__PURE__ */ h(Vc, {}) }) : null, An = Gc, Qe = (e, r) => {
  const {
    ctx: t,
    x: n,
    y: o,
    width: s,
    height: i,
    textYPos: c,
    label: l,
    font: a,
    isBottomRow: d,
    fillStyle: u,
    topText: g,
    bottomText: S,
    strokeStyle: w,
    labelBetweenCells: $
  } = e;
  if (t.beginPath(), t.strokeStyle = w ?? r.colors.border, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), $ ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = a;
    const p = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.accent, t.fillText(l, p, c);
  }
  if (d && u && g && S) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = g.font;
    const p = n + s / 2 - t.measureText(g.label).width / 2;
    t.fillStyle = g.color, t.fillText(g.label, p, g.y), t.font = S.font;
    const A = n + s / 2 - t.measureText(S.label).width / 2;
    t.fillStyle = S.color, t.fillText(S.label, A, S.y);
  }
}, Pn = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Xc = (e, r, t, n, o = ut) => {
  const s = je + o + Ue, i = s - Ue / Ls, c = s - Ue / Ns, l = je + o;
  let a = 0;
  for (let d = 0; d < r; d++) {
    const u = go(
      O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    ), g = u.isCurrentDay;
    if (Qe(
      {
        ctx: e,
        x: a,
        y: l,
        width: Ee,
        height: Ue,
        isBottomRow: !0,
        // OPAQUE today fill (currentDay, same as the grid's today column) — the old `today+"26"` was 15% alpha, so
        // events scrolling under the header showed through the HOY cell.
        fillStyle: g ? n.colors.currentDay : u.isBusinessDay ? n.colors.gridBackground : n.colors.primary,
        topText: {
          y: i,
          label: g ? "" : u.dayName.toUpperCase(),
          font: Ze.bottomRow.name,
          color: Pn({ isCurrent: !1, isBusinessDay: u.isBusinessDay }, n)
        },
        bottomText: {
          y: c,
          label: `${u.dayOfMonth}`,
          font: g ? `700 10px ${ze}` : Ze.bottomRow.number,
          color: g ? n.colors.today : Pn(
            { isCurrent: !1, isBusinessDay: u.isBusinessDay, variant: "bottomRow" },
            n
          )
        }
      },
      n
    ), g) {
      const $ = a + Ee / 2, p = i - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect($ - 30 / 2, p, 30, 13, 5) : e.rect($ - 30 / 2, p, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${ze}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", $, p + 13 / 2 + 0.5), e.restore();
    }
    a += Ee;
  }
}, Uc = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Be;
  const s = je;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= gn && (c = 0);
    const a = mo(t, l) * Be;
    Qe(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: ut,
        textYPos: fo,
        label: O().month(c).format("MMMM").toUpperCase(),
        font: Ze.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, Kc = (e, r, t) => {
  let o = 0, s = 0, i = O(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * Ee + Ee;
  for (let c = 0; c < gn; c++)
    i > gn - 1 && (i = 0), s = O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * Ee, Qe(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: je,
        textYPos: Fn,
        label: O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: Ze.topRow
      },
      t
    ), o += s, i++;
}, Jc = (e, r, t, n) => {
  const o = 7 * Ee, s = je, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (c + a) % lr;
    u <= 0 && (u += lr), d !== 1 && a === 0 && (l = -d * Ee + Ee), Qe(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: ut,
        textYPos: fo,
        label: `${t.toUpperCase()} ${u}`,
        font: Ze.middleRow
      },
      n
    ), l += o;
  }
}, qc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, Qc = (e, r, t, n, o) => {
  const s = Xt - Ue / 1.6, i = Xt - Ue / 4.5, c = je + ut;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = d.isSame(O(), "week");
    Qe(
      {
        ctx: e,
        x: l,
        y: c,
        width: Ct,
        height: Ue,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: u ? o.colors.today + "26" : qc({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: u ? `700 14px ${ze}` : Ze.bottomRow.name,
          color: u ? o.colors.today : Pn({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: Ze.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Ct;
  }
}, el = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (fr(s) - t + 1) * Be, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = fr(s + l) * Be), d + a > i && l > 0 && (a = Math.ceil((i - d) / Be) * Be), Qe(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: je,
        textYPos: Fn,
        label: (s + l).toString(),
        font: Ze.topRow
      },
      n
    ), c += a, d += a, l++;
}, tl = (e, r, t, n) => {
  const o = Math.floor(r / Ut) + 2, s = Ut * Oe;
  let l = -O(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Oe + 0.5 * Oe;
  for (let a = 0; a < o; a++) {
    const d = O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Qe(
      {
        ctx: e,
        x: l,
        y: Mt,
        width: s,
        height: Ot,
        textYPos: Mt + Ot / 2 + 2,
        label: d,
        font: Ze.bottomRow.number
      },
      n
    ), l += s;
  }
}, nl = (e, r, t, n) => {
  const o = Math.ceil(r / Ut), s = O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * Oe;
  for (let u = 0; u < a; u++) {
    const g = O(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), w = O(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), $ = w.format("MMMM").toUpperCase(), p = w.diff(g, "hour") + 1, A = u === 0 ? p * Oe : r * Oe;
    Qe(
      {
        ctx: e,
        x: d,
        y: 0,
        width: A,
        height: Mt,
        textYPos: Fn,
        label: $,
        font: Ze.topRow
      },
      n
    ), d += A;
  }
}, rl = (e, r, t, n) => {
  let o = 0;
  const s = Mt + Ot, i = O(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Oe;
  for (let l = 0; l < r; l++) {
    const a = i.add(l, "hours").format("h:00a").toUpperCase();
    Qe(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: mn,
        label: a,
        font: Ze.bottomRow.hoursInDay,
        textYPos: Mt + Ot + mn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Oe;
  }
}, ol = (e, r, t, n, o, s, i, c = !0) => {
  switch (r) {
    case 0:
      el(e, n, s, i), Uc(e, t, n, i), Qc(e, t, n, o, i);
      break;
    case 1:
      Kc(e, n, i), c && Jc(e, n, o, i), Xc(e, t, n, i, c ? ut : 0);
      break;
    case 2:
      nl(e, t, n, i), tl(e, t, n, i), rl(e, t, n, i);
      break;
  }
}, sl = v.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, il = v.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, al = v.div`
  height: ${({ $height: e }) => e ?? Xt}px;
  display: block;
`, cl = v.canvas``, ll = {
  transfer: /* @__PURE__ */ W(Te, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ W(Te, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ W(Te, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ W(Te, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ W(Te, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ W(Te, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ h("path", { d: "M12 7.5V12l3 2" })
  ] })
}, He = ({
  name: e,
  className: r,
  strokeWidth: t = 2
}) => /* @__PURE__ */ h(
  "svg",
  {
    className: r,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: t,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: ll[e]
  }
), dl = v.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Le + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, Dr = v.span`
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
`, Ht = v.span`
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
`, ul = v.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, fl = v.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, hl = v.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, pl = v.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, ml = v.span`
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
`, gl = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], yl = () => /* @__PURE__ */ W(dl, { children: [
  /* @__PURE__ */ h(Dr, { children: "Leyenda" }),
  /* @__PURE__ */ W(Ht, { children: [
    /* @__PURE__ */ h(He, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ W(Ht, { children: [
    /* @__PURE__ */ h(He, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ W(Ht, { children: [
    /* @__PURE__ */ h(He, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ W(Ht, { children: [
    /* @__PURE__ */ h(ul, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(fl, {}),
  /* @__PURE__ */ W(Dr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  gl.map((e) => /* @__PURE__ */ W(hl, { children: [
    /* @__PURE__ */ h(pl, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(ml, { style: { color: e.color }, children: /* @__PURE__ */ h(He, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), vl = On(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = qe(), { date: c, cols: l, dayOfYear: a, startDate: d, config: u } = Ge(), g = he(null), S = qt(), w = u.showWeekRow !== !1, $ = r === 2 ? Rs : r === 1 && !w ? je + Ue : Xt, p = le(
    (A) => {
      const U = jn(), F = $ + 1;
      xo(A, U, F), ol(A, r, l, d, i, a, S, w);
    },
    [l, a, d, i, r, S, w, $]
  );
  return ve(() => {
    if (!g.current)
      return;
    const A = g.current.getContext("2d");
    if (!A)
      return;
    const U = () => p(A);
    return window.addEventListener("resize", U), () => window.removeEventListener("resize", U);
  }, [p]), ve(() => {
    const A = g.current;
    if (!A)
      return;
    A.style.letterSpacing = "1px";
    const U = A.getContext("2d");
    U && p(U);
  }, [c, r, p]), /* @__PURE__ */ W(sl, { ref: s, children: [
    (u.showTopbar !== !1 || u.showLegend !== !1) && /* @__PURE__ */ W(il, { $width: t, children: [
      u.showTopbar !== !1 && /* @__PURE__ */ h(Ra, { width: t, showThemeToggle: n, toggleTheme: o }),
      u.showLegend !== !1 && /* @__PURE__ */ h(yl, {})
    ] }),
    /* @__PURE__ */ h(al, { $height: $, id: Bs, children: /* @__PURE__ */ h(cl, { ref: g }) })
  ] });
}), xl = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Be;
      break;
    case 2:
      n = Oe;
      break;
    default:
      n = Ee;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), l = r.endDate.startOf("day"), a = () => {
    let d;
    switch (t) {
      case 2:
        d = (e.startDate.diff(r.startDate, "minute") / _e + 1) * n - n / 2;
        break;
      default:
        d = s.diff(c, "day") * n;
    }
    return Math.max(0, d);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let d;
    switch (t) {
      case 2:
        d = Math.max(
          e.endDate.diff(e.startDate, "minute") / _e * n,
          50
        );
        break;
      default:
        d = Math.max(
          i.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: d };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let d;
    switch (t) {
      case 2:
        d = Math.max(
          e.endDate.diff(r.startDate, "minute") / _e * n + 0.5 * n,
          50
        );
        break;
      default:
        d = Math.max(
          i.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: d };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let d;
    switch (t) {
      case 2:
        d = Math.max(
          r.endDate.diff(e.startDate, "minute") / _e * n,
          50
        );
        break;
      default:
        d = Math.max(
          l.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: d };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let d;
    switch (t) {
      case 2:
        d = Math.max(
          r.endDate.diff(r.startDate, "minute") / _e * n,
          50
        );
        break;
      default:
        d = Math.max(
          l.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: d };
  }
  return { x: a(), width: 50 };
}, bl = (e, r, t, n, o, s) => {
  const i = e * ye + Fs, c = r.hour(), l = t.hour();
  let a, d, u, g;
  switch (s) {
    case 2: {
      a = O(n), d = O(o), u = O(r).hour(c).minute(0), g = O(t).hour(l).minute(0);
      break;
    }
    default: {
      a = O(n).hour(0).minute(0), d = O(o).hour(23).minute(59), u = r, g = t;
      break;
    }
  }
  return {
    ...xl(
      { startDate: a, endDate: d },
      { startDate: u, endDate: g },
      s
    ),
    y: i
  };
}, $o = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, Do = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2", label: "Sin chofer" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22", label: "No notificado al chofer" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0", label: "Notificado" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63", label: "Confirmado" }
};
v.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
v.p`
  ${kt}
  ${$t}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const wl = Ve`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, Sl = Ve`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, Cl = v.button`
  ${kt}
  position: absolute;
  height: ${Bn}px;
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
    animation: ${wl} 180ms ease-out;
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
  ${({ $exiting: e }) => e && dt`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Sl} 190ms ease-out forwards;
      }
    `}
  /* Persistent green highlight for the event focused from a warning: a bold green ring + glow + an inset green wash
     over the tile bg (below the text, which stays readable). Lifted above neighbours so the ring isn't clipped. */
  ${({ $highlighted: e }) => e && `z-index: 9;
     box-shadow: 0 0 0 3px #0F7D66, 0 0 16px 3px rgba(15, 125, 102, 0.55), inset 0 0 0 200px rgba(15, 125, 102, 0.3);`}
`, Ml = v.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`, kl = v.div`
  position: sticky;
  left: ${Le + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, Er = v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, $l = v.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Dl = v.span`
  ${$t}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, El = v.span`
  ${$t}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, _l = v.span`
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
`, Tl = v.div`
  ${$t}
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
`, _r = v.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Tr = v.span`
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
`, Ar = v.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, Al = v.div`
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
`, Pr = v.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  white-space: nowrap;
  text-align: center;
  max-width: 100%;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, Pl = 34, Ol = "#3E8E5A", Il = "#D98A22", Or = ({
  row: e,
  data: r,
  zoom: t,
  isSubcontract: n = !1,
  onTileClick: o,
  onDragStart: s,
  isDragging: i = !1,
  isDraggable: c = !0,
  yOffset: l = 0,
  exiting: a = !1,
  highlighted: d = !1
}) => {
  const { date: u } = Ge(), g = Qt(u, t), { y: S, x: w, width: $ } = bl(
    e,
    g.startDate,
    g.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: p } = qt(), A = he(null), U = O(r.startDate).isSame(O(r.endDate), "day"), F = r.eventType === It.Tour, E = r.eventType === It.Transfer, f = U && (F || E), y = (I) => {
    A.current = { x: I.clientX, y: I.clientY }, c && s && (I.preventDefault(), s(r, I));
  }, x = (I) => {
    if (A.current) {
      const M = Math.abs(I.clientX - A.current.x), P = Math.abs(I.clientY - A.current.y);
      Math.sqrt(M * M + P * P) <= 5 && (o == null || o(r)), A.current = null;
    } else
      o == null || o(r);
  }, _ = {
    left: `${w}px`,
    top: `${S + l}px`,
    backgroundColor: `${r.bgColor ?? p.defaultTile}`,
    width: `${$}px`,
    color: $o(r.bgColor ?? "")
  }, b = !n && r.readiness ? Do[r.readiness] : null, k = n && r.subcontractConfirmed === !1, j = n ? k ? Il : Ol : b == null ? void 0 : b.stripe, J = (I) => /* @__PURE__ */ W(
    Cl,
    {
      "data-segment-id": r.segmentId,
      style: _,
      onClick: x,
      onMouseDown: y,
      onDragStart: (M) => M.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: k,
      $exiting: a,
      $highlighted: d,
      children: [
        j && /* @__PURE__ */ h(Ml, { style: { background: j } }),
        I
      ]
    }
  );
  return J(
    f ? /* @__PURE__ */ W(Te, { children: [
      (n || b) && /* @__PURE__ */ h(_r, { $sm: !0, children: n ? /* @__PURE__ */ h(Ar, { children: "SUB" }) : b && /* @__PURE__ */ h(Tr, { $sm: !0, style: { color: b.color }, children: /* @__PURE__ */ h(He, { name: b.icon, strokeWidth: b.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ W(Al, { $transfer: E, children: [
        /* @__PURE__ */ h(He, { name: E ? "transfer" : "sun", strokeWidth: 2.4 }),
        $ >= Pl && /* @__PURE__ */ W(Te, { children: [
          /* @__PURE__ */ h(Pr, { children: O(r.startDate).format("h:mm A") }),
          !E && /* @__PURE__ */ h(Pr, { $end: !0, children: O(r.endDate).format("h:mm A") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(_r, { children: n ? /* @__PURE__ */ h(Ar, { children: "SUB" }) : b && /* @__PURE__ */ h(Tr, { style: { color: b.color }, children: /* @__PURE__ */ h(He, { name: b.icon, strokeWidth: b.icon === "check" ? 2.6 : 2.2 }) }) }),
      r.bookingNumber && /* @__PURE__ */ h(_l, { children: r.bookingNumber }),
      /* @__PURE__ */ W(kl, { children: [
        /* @__PURE__ */ W(Er, { $pad: !0, children: [
          /* @__PURE__ */ h($l, { children: /* @__PURE__ */ h(He, { name: E ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(Dl, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(Er, { children: /* @__PURE__ */ h(El, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ W(Tl, { children: [
          /* @__PURE__ */ h(He, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Ir = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Ne;
}, Yl = Ve`
  from { opacity: 0; }
  to { opacity: 1; }
`, Rl = Ve`
  from { opacity: 1; }
  to { opacity: 0; }
`, Ll = v.div`
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
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Yl} 200ms ease-out;
  }
  ${({ $fading: e }) => e && dt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Rl} 180ms ease forwards;
      }
    `}
`, Nl = ({
  data: e,
  zoom: r,
  onTileClick: t,
  onDragStart: n,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = [],
  fadingUnitIds: c,
  highlightedSegmentId: l
}) => {
  const { nodes: a, liveMap: d } = $e(() => {
    const p = /* @__PURE__ */ new Map();
    let A = 0;
    return { nodes: e.map((F, E) => {
      E > 0 && (A += Math.max(e[E - 1].data.length, 1));
      const f = !!(c != null && c.has(F.id));
      if (!F.data.some((y) => y.length > 0)) {
        const y = Ir(A, i);
        return [
          /* @__PURE__ */ h(Ll, { $fading: f, style: { top: `${A * ye + y}px` }, children: "Disponible" }, `dispo-${F.id}`)
        ];
      }
      return F.data.map(
        (y, x) => y.map((_) => {
          const b = s === _.segmentId, k = o ? o(_) : !1, j = x + A, J = Ir(j, i);
          return p.set(_.segmentId, {
            project: _,
            absoluteRow: j,
            yOffset: J,
            isSubcontract: !!F.isSubcontract
          }), /* @__PURE__ */ h(
            Or,
            {
              row: j,
              data: _,
              zoom: r,
              isSubcontract: F.isSubcontract,
              onTileClick: t,
              onDragStart: n,
              isDragging: b,
              isDraggable: k,
              yOffset: J,
              exiting: f,
              highlighted: l != null && _.segmentId === l
            },
            _.segmentId
          );
        })
      );
    }).flat(2), liveMap: p };
  }, [e, t, r, n, o, s, i, c, l]), u = he(/* @__PURE__ */ new Map()), g = he([]), [S, w] = pe([]);
  ve(() => () => g.current.forEach(clearTimeout), []), ve(() => {
    const p = u.current;
    u.current = d;
    const A = [];
    if (p.forEach((E, f) => {
      d.has(f) || A.push(E);
    }), w((E) => {
      let f = E.filter((y) => !d.has(y.project.segmentId));
      for (const y of A)
        f.some((x) => x.project.segmentId === y.project.segmentId) || (f = [...f, y]);
      return f;
    }), !A.length)
      return;
    const U = new Set(A.map((E) => E.project.segmentId)), F = setTimeout(() => {
      w((E) => E.filter((f) => !U.has(f.project.segmentId)));
    }, 220);
    g.current.push(F);
  }, [d]);
  const $ = S.filter((p) => !d.has(p.project.segmentId)).map((p) => /* @__PURE__ */ h(
    Or,
    {
      row: p.absoluteRow,
      data: p.project,
      zoom: r,
      isSubcontract: p.isSubcontract,
      yOffset: p.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    p.project.segmentId
  ));
  return /* @__PURE__ */ h(Te, { children: [...a, ...$] });
}, Bl = Nl;
v.div`
  box-sizing: border-box;
  font-family: ${ze};
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
v.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
v.label`
  font-size: 14px;
`;
v.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
v.input`
  height: 18px;
  width: 18px;
`;
v.button`
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
v.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const Fl = v.div`
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
`, zl = v.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, Hl = v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, Wl = v.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, jl = v.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: #dcfce7;
  color: #166534;
  font-size: 9px;
  font-weight: 600;
  padding: 2px 7px 2px 5px;
  border-radius: 10px;
  text-transform: uppercase;
  svg {
    width: 11px;
    height: 11px;
  }
`, Zl = v.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 600;
  svg {
    width: 14px;
    height: 14px;
  }
`, Vl = v.div`
  ${kt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Gl = v.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, Xl = v.div`
  padding: 10px 12px;
`, Ul = v.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Yr = v.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Rr = v.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Lr = v.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Nr = v.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Br = v.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Kl = v.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Jl = v.div`
  min-width: 0;
`, ql = v.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Ql = v.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, Fr = v.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Dt = v.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Et = v.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, _t = v.div`
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
v.div``;
v.span``;
v.span``;
v.div``;
v.div``;
v.span``;
v.span``;
v.div``;
v.div``;
v.span``;
v.span``;
v.div``;
v.div``;
v.div``;
v.span``;
v.div``;
v.div``;
v.div``;
v.div``;
v.p``;
v.span``;
const ed = {
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
}, td = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = he(null), [s, i] = pe("below"), c = qe(), l = { ...ed, ...c.tooltip };
  Jt(() => {
    if (!o.current || !t)
      return;
    const $ = o.current, { width: p, height: A } = $.getBoundingClientRect(), U = $.parentElement;
    if (!U)
      return;
    const F = U.getBoundingClientRect(), E = 12, f = 4, y = F.height - t.y, x = F.width - t.x;
    let _ = t.x + E, b = t.y + E, k = "below";
    x < p + E && (_ = t.x - p - E), y < A + E && (b = t.y - A - E, k = "above"), _ = Math.max(f, Math.min(_, F.width - p - f)), b = Math.max(f, Math.min(b, F.height - A - f)), i(k), $.style.left = `${_}px`, $.style.top = `${b}px`;
  }, [t]);
  const a = n.reservationType === It.Tour, d = a && n.isOneDayEvent, u = a ? d ? "sun" : "tour" : "transfer", g = a ? d ? l.oneDay : l.tour : l.transfer, S = n.readiness ? Do[n.readiness] : null, w = [
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ W(Fl, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ W(zl, { children: [
      /* @__PURE__ */ W(Hl, { children: [
        /* @__PURE__ */ h(Wl, { children: n.bookingNumber }),
        /* @__PURE__ */ W(jl, { children: [
          /* @__PURE__ */ h(He, { name: u, strokeWidth: 2.4 }),
          g
        ] })
      ] }),
      /* @__PURE__ */ h(Vl, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(Gl, { children: n.client }),
      S && /* @__PURE__ */ W(Zl, { style: { color: S.color }, children: [
        /* @__PURE__ */ h(He, { name: S.icon, strokeWidth: S.icon === "check" ? 2.6 : 2.2 }),
        S.label
      ] })
    ] }),
    /* @__PURE__ */ W(Xl, { children: [
      /* @__PURE__ */ W(Ul, { children: [
        /* @__PURE__ */ W(Yr, { children: [
          /* @__PURE__ */ h(Rr, { children: l.startDate }),
          /* @__PURE__ */ W(Lr, { children: [
            /* @__PURE__ */ h(Nr, { children: n.startDate }),
            /* @__PURE__ */ h(Br, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ W(Yr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Rr, { children: l.endDate }),
          /* @__PURE__ */ W(Lr, { children: [
            /* @__PURE__ */ h(Nr, { children: n.endDate }),
            /* @__PURE__ */ h(Br, { children: n.endTime })
          ] })
        ] })
      ] }),
      w.length > 0 && /* @__PURE__ */ h(Kl, { children: w.map(($, p) => /* @__PURE__ */ W(Jl, { children: [
        /* @__PURE__ */ h(ql, { children: $.label }),
        /* @__PURE__ */ h(Ql, { children: $.value })
      ] }, p)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ W(Fr, { children: [
        n.departureAddress && /* @__PURE__ */ W(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.salida }),
          /* @__PURE__ */ h(_t, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ W(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.destino }),
          /* @__PURE__ */ h(_t, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ W(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.regreso }),
          /* @__PURE__ */ h(_t, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ W(Fr, { children: [
        n.serviceNotes && /* @__PURE__ */ W(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.serviceNotes }),
          /* @__PURE__ */ h(_t, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ W(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.reservationNotes }),
          /* @__PURE__ */ h(_t, { children: n.reservationNotes })
        ] })
      ] })
    ] })
  ] });
};
v.div`
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
v.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`;
v.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`;
const nd = v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, rd = v.div`
  position: absolute;
  height: ${Bn}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, od = v.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, zr = v.p`
  ${kt}
  ${$t}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, sd = v.p`
  ${kt}
  ${$t}
`, id = v.div`
  position: sticky;
  left: ${Le + 16}px;
  overflow: hidden;
`, ad = v.div`
  position: absolute;
  height: ${Bn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, cd = v.div`
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
`, ld = v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, dd = v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, ud = v.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Hr = v.div`
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
`, Wr = v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, jr = v.div`
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
`, Zr = v.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, on = v.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, sn = v.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, gt = v.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Vr = v.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, fd = ({
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
  const a = qe(), d = (E) => {
    let f = 0;
    for (const y of l)
      y <= E && f++;
    return E * ye + f * Ne;
  }, [u, g] = pe(null), [S, w] = pe(0), $ = le((E = 400, f = 300) => {
    const x = t.width, _ = 48, b = document.getElementById("react-scheduler");
    if (!b)
      return {
        x: r.x + x + 16,
        y: r.y
      };
    const k = b.scrollLeft, j = b.scrollTop, J = b.clientWidth, I = b.clientHeight, M = r.x - k, P = r.y - j, N = {
      left: Le + 16,
      // Avoid left column
      right: J - 16,
      top: 16,
      bottom: I - 16
    }, Y = N.right - (M + x), B = M - N.left, q = N.bottom - (P + _), ne = P - N.top;
    let ie, L;
    return Y >= E + 16 ? ie = M + x + 16 : B >= E + 16 ? ie = M - E - 16 : Y >= B ? (ie = M + x + 16, ie + E > N.right && (ie = N.right - E)) : (ie = M - E - 16, ie < N.left && (ie = N.left)), q >= f + 16 ? L = P + _ + 16 : ne >= f + 16 ? L = P - f - 16 : q >= ne ? (L = P + _ + 16, L + f > N.bottom && (L = N.bottom - f)) : (L = P - f - 16, L < N.top && (L = N.top)), ie = Math.max(N.left, Math.min(ie, N.right - E)), L = Math.max(N.top, Math.min(L, N.bottom - f)), {
      x: ie + k,
      y: L + j
    };
  }, [r.x, r.y, t.width]);
  ve(() => {
    s === "dragging" && e && S === 0 ? w(r.x) : s === "idle" && w(0);
  }, [s, e, r.x, S]), ve(() => {
    g(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const p = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const E = [];
    let f = 0;
    for (const y of i) {
      const x = Math.max(y.data.length, 1);
      if (y.capacity !== void 0 && e.totalPassengers > y.capacity)
        for (let _ = 0; _ < x; _++)
          E.push(f + _);
      f += x;
    }
    return E;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const A = s === "animating", U = $o(e.bgColor ?? ""), F = () => {
    if (!n)
      return "";
    const E = O(n.startDate).format("MMM D, HH:mm"), f = O(n.endDate).format("HH:mm");
    return `${E} - ${f}`;
  };
  return /* @__PURE__ */ W(nd, { children: [
    p.map((E) => /* @__PURE__ */ h(
      dd,
      {
        style: {
          top: `${d(E)}px`,
          height: `${ye}px`
        }
      },
      E
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      ld,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${d(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(
        ad,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ye - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ h(
        cd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ye - 48) / 2}px`
          },
          children: F()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      ud,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          left: "0px",
          top: `${d(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && o && n.hasConflict && n.conflicts && n.conflicts.length > 0 && s === "dragging" && (() => {
      const E = $(400, 300);
      return /* @__PURE__ */ W(
        Hr,
        {
          style: {
            left: `${E.x}px`,
            top: `${E.y}px`
          },
          children: [
            /* @__PURE__ */ W(Wr, { children: [
              /* @__PURE__ */ h(jr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Zr, { children: n.conflicts.map((f, y) => {
              const x = O(n.startDate).format("YYYY-MM-DD"), _ = O(n.endDate).format("YYYY-MM-DD"), b = O(f.event.startDate).format("YYYY-MM-DD"), k = O(f.event.endDate).format("YYYY-MM-DD"), j = O(f.conflictStart).format("YYYY-MM-DD"), J = O(f.conflictEnd).format("YYYY-MM-DD"), I = x !== _, M = b !== k, P = j !== J, N = I ? O(n.startDate).format("MMM D, h:mm A") : O(n.startDate).format("h:mm A"), Y = I ? O(n.endDate).format("MMM D, h:mm A") : O(n.endDate).format("h:mm A"), B = M ? O(f.event.startDate).format("MMM D, h:mm A") : O(f.event.startDate).format("h:mm A"), q = M ? O(f.event.endDate).format("MMM D, h:mm A") : O(f.event.endDate).format("h:mm A"), ne = P ? O(f.conflictStart).format("MMM D, h:mm A") : O(f.conflictStart).format("h:mm A"), ie = P ? O(f.conflictEnd).format("MMM D, h:mm A") : O(f.conflictEnd).format("h:mm A"), L = P ? "" : O(f.conflictStart).format("MMM D"), z = n.startDate.getTime(), K = n.endDate.getTime(), te = f.event.startDate.getTime(), C = f.event.endDate.getTime(), Z = z >= te && z < C, T = K > te && K <= C, Q = z <= te && K >= C, H = te <= z && C >= K;
              let R = !1, m = !1, G = !1, D = !1, V = "";
              return Q || H ? (R = !0, m = !0, G = !0, D = !0, V = `⚠️ ${a.conflicts.changeBoth}`) : Z && T ? (R = !0, m = !0, G = !0, D = !0, V = `⚠️ ${a.conflicts.changeBoth}`) : Z ? (R = !0, D = !0, V = `⚠️ ${a.conflicts.changeStart}`) : T && (m = !0, G = !0, V = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ W(on, { children: [
                /* @__PURE__ */ W(sn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ W(gt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  R ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: N }) : N,
                  " ",
                  a.conflicts.to,
                  " ",
                  m ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Y }) : Y
                ] }),
                /* @__PURE__ */ W(gt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  G ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: B }) : B,
                  " ",
                  a.conflicts.to,
                  " ",
                  D ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: q }) : q
                ] }),
                /* @__PURE__ */ W(Vr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  L && `${L}, `,
                  ne,
                  " - ",
                  ie
                ] }),
                V && /* @__PURE__ */ h(gt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: V })
              ] }, y);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const E = $(400, 400);
      return /* @__PURE__ */ W(
        Hr,
        {
          style: {
            left: `${E.x}px`,
            top: `${E.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ W(Wr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(jr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ W(Zr, { children: [
              (() => {
                const f = n.nearbyEvents.some((b) => b.position === "before"), y = n.nearbyEvents.some((b) => b.position === "after"), x = O(n.startDate).format("h:mm A"), _ = O(n.endDate).format("h:mm A");
                return /* @__PURE__ */ W(on, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ W(sn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(gt, { style: { fontWeight: 600 }, children: [
                    O(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: x }) : x,
                    " ",
                    a.conflicts.to,
                    " ",
                    y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: _ }) : _
                  ] }),
                  /* @__PURE__ */ h(gt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, y) => {
                const x = O(f.event.startDate).format("YYYY-MM-DD"), _ = O(f.event.endDate).format("YYYY-MM-DD"), b = x !== _, k = b ? O(f.event.startDate).format("MMM D, h:mm A") : O(f.event.startDate).format("h:mm A"), j = b ? O(f.event.endDate).format("MMM D, h:mm A") : O(f.event.endDate).format("h:mm A"), J = O(f.event.startDate).format("MMM D"), I = Math.floor(f.timeGap / (1e3 * 60 * 60)), M = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), P = I > 0 ? `${I}h ${M}m` : `${M}m`, N = f.position === "after", Y = f.position === "before";
                return /* @__PURE__ */ W(on, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ W(sn, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(gt, { children: [
                    !b && `${J}: `,
                    N ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: k }) : k,
                    " ",
                    a.conflicts.to,
                    " ",
                    Y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: j }) : j
                  ] }),
                  /* @__PURE__ */ W(Vr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    P,
                    " ",
                    f.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, y);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      rd,
      {
        $isAnimating: A,
        $animateToX: u == null ? void 0 : u.x,
        $animateToY: u == null ? void 0 : u.y,
        style: {
          left: A ? `${(u == null ? void 0 : u.x) ?? 0}px` : "0",
          top: A ? `${(u == null ? void 0 : u.y) ?? 0}px` : "0",
          transform: A ? void 0 : `translate3d(${c ? S : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: U
        },
        children: /* @__PURE__ */ h(od, { children: /* @__PURE__ */ W(id, { children: [
          /* @__PURE__ */ h(zr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(zr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(sd, { children: e.description })
        ] }) })
      }
    )
  ] });
}, hd = fd, pd = Ve`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, md = v.div`
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
  animation: ${pd} 1.5s ease-in-out infinite;
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
`, gd = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  md,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), yd = gd, vd = Ve`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, xd = v.div`
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
  animation: ${vd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, bd = v.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, wd = v.span`
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
`, Sd = v.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Cd = v.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;
v.div`
  display: none;
`;
v.div`
  display: none;
`;
v.button`
  display: none;
`;
const Md = v.div`
  display: flex;
  gap: 8px;
`, Gr = v.button`
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
`, kd = ({ selections: e, onConfirm: r, onClear: t }) => {
  var w;
  const o = qe().multiSelect, s = $e(() => e.filter(($) => $.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", d = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", u = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((w = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : w.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const g = s > 0, S = /* @__PURE__ */ W(xd, { $hasConflicts: g, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ W(bd, { children: [
      /* @__PURE__ */ W(wd, { $hasConflicts: g, children: [
        e.length,
        " ",
        i
      ] }),
      g && /* @__PURE__ */ W(Sd, { children: [
        "⚠️ ",
        u
      ] }),
      /* @__PURE__ */ h(Cd, { children: c })
    ] }),
    /* @__PURE__ */ W(Md, { children: [
      /* @__PURE__ */ W(Gr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ h(Gr, { variant: "primary", $hasConflicts: g, onClick: r, children: g ? `⚠️ ${d}` : `✓ ${a}` })
    ] })
  ] });
  return Io(S, document.body);
}, $d = kd, Dd = Ve`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Ed = v.div`
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
  animation: ${Dd} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && dt`
      border-style: dashed;
    `}
`, _d = v.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, Td = v.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Ad = v.button`
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
`, Pd = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, l] = pe(null), [a, d] = pe({ x: 0, y: 0 }), u = he(null), g = $e(() => {
    switch (t) {
      case 0:
        return Be * 7;
      case 1:
        return Ee;
      case 2:
        return Oe;
      default:
        return Ee;
    }
  }, [t]), S = $e(() => O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), w = $e(() => e.map((y, x) => {
    let _ = 0, b = !1;
    for (const B of r) {
      if (B.id === y.resourceId) {
        b = !0;
        break;
      }
      _ += Math.max(B.data.length, 1);
    }
    if (!b)
      return null;
    const k = O(y.startDate), j = O(y.endDate);
    let J, I;
    switch (t) {
      case 0:
        J = Math.floor(k.diff(S, "days") / 7), I = Math.max(1, Math.ceil(j.diff(k, "days") / 7) + 1);
        break;
      case 1:
        J = k.diff(S, "days"), I = Math.max(1, j.diff(k, "days") + 1);
        break;
      case 2:
        J = k.diff(S, "hours"), I = Math.max(1, j.diff(k, "hours") + 1);
        break;
      default:
        J = 0, I = 1;
    }
    const M = J * g;
    let P = 0;
    for (const B of i)
      B <= _ && P++;
    const N = _ * ye + P * Ne, Y = I * g;
    return {
      index: x,
      selection: y,
      x: M,
      y: N,
      width: Y,
      height: ye
    };
  }), [e, r, t, S, g]), $ = (y, x) => {
    const _ = O(y).format("MMM D"), b = O(x).format("MMM D");
    return _ === b ? _ : `${_} - ${b}`;
  }, p = (y) => !y.hasConflict || !y.conflicts ? "" : `⚠️ Conflicts with:
${y.conflicts.map((_) => {
    const b = (_.overlapDuration / 36e5).toFixed(1);
    return `• ${_.event.title} (${b}h overlap)`;
  }).join(`
`)}`, A = le(
    (y) => {
      let x = 0;
      for (const _ of r) {
        const b = Math.max(_.data.length, 1);
        if (y >= x * ye && y < (x + b) * ye)
          return {
            resourceId: _.id,
            resourceLabel: _.label
          };
        x += b;
      }
      return null;
    },
    [r]
  ), U = le(
    (y) => {
      const x = Math.floor(y / g);
      switch (t) {
        case 0:
          return S.add(x * 7, "days").toDate();
        case 1:
          return S.add(x, "days").toDate();
        case 2:
          return S.add(x, "hours").toDate();
        default:
          return S.toDate();
      }
    },
    [t, S, g]
  ), F = le(
    (y, x) => {
      !s || (y.preventDefault(), y.stopPropagation(), !w[x]) || (u.current = { x: y.clientX, y: y.clientY }, l(x), d({ x: 0, y: 0 }));
    },
    [s, w]
  ), E = le(
    (y) => {
      if (c === null || !u.current)
        return;
      const x = y.clientX - u.current.x, _ = y.clientY - u.current.y, b = Math.round(x / g) * g, k = Math.round(_ / ye) * ye;
      d({ x: b, y: k });
    },
    [c, g]
  ), f = le(() => {
    if (c === null || !s) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const y = w[c];
    if (!y) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const x = y.x + a.x, _ = y.y + a.y, b = A(_ + ye / 2);
    if (!b) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const k = U(x), j = e[c], J = j.endDate.getTime() - j.startDate.getTime(), I = new Date(k.getTime() + J);
    s(c, {
      startDate: k,
      endDate: I,
      resourceId: b.resourceId,
      resourceLabel: b.resourceLabel
    }), l(null), d({ x: 0, y: 0 }), u.current = null;
  }, [c, a, w, e, s, A, U]);
  return ve(() => {
    if (c !== null)
      return document.addEventListener("mousemove", E), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", f);
      };
  }, [c, E, f]), /* @__PURE__ */ h(Te, { children: w.map((y) => {
    if (!y)
      return null;
    const x = y.selection.hasConflict || !1, _ = c === y.index, b = _ ? y.x + a.x : y.x, k = _ ? y.y + a.y : y.y;
    return /* @__PURE__ */ W(
      Ed,
      {
        $hasConflict: x,
        $isDragging: _,
        style: {
          left: b,
          top: k,
          width: y.width,
          height: y.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (j) => F(j, y.index),
        children: [
          x && /* @__PURE__ */ h(Td, { title: p(y.selection), children: "⚠️" }),
          /* @__PURE__ */ h(_d, { $hasConflict: x, children: $(y.selection.startDate, y.selection.endDate) }),
          /* @__PURE__ */ h(
            Ad,
            {
              onClick: (j) => {
                j.stopPropagation(), o(y.index);
              },
              onMouseDown: (j) => j.stopPropagation(),
              title: x ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      y.index
    );
  }) });
}, Od = Pd, Eo = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? Be * 7 : Ee, s = O().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, Id = v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, Yd = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ge(), n = $e(
    () => Eo(O(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(Id, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, Rd = Yd, an = "#2f6fed", Ld = v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${an};
  border-right: 1px solid ${an}55;
  background: ${an}1c;
`, Nd = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = Ge(), o = $e(() => !n || n.isSame(O(), "day") ? null : Eo(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(Ld, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0 }) : null;
}, Bd = Nd;
export {
  jd as Scheduler
};
