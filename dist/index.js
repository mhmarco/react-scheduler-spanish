var Zo = Object.defineProperty;
var Vo = (e, r, t) => r in e ? Zo(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var cr = (e, r, t) => (Vo(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as z, Fragment as Ie } from "react/jsx-runtime";
import * as re from "react";
import yt, { useRef as ue, useContext as at, useMemo as $e, useLayoutEffect as fn, useDebugValue as lr, createElement as Go, createContext as Kn, useState as he, useCallback as ae, useEffect as ge, forwardRef as Jn, useImperativeHandle as lo } from "react";
import { createPortal as Uo } from "react-dom";
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zt = {}, Xo = {
  get exports() {
    return Zt;
  },
  set exports(e) {
    Zt = e;
  }
}, Se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function Ko() {
  if (dr)
    return Se;
  dr = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function $(g) {
    if (typeof g == "object" && g !== null) {
      var R = g.$$typeof;
      switch (R) {
        case e:
          switch (g = g.type, g) {
            case t:
            case o:
            case n:
            case a:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case i:
                case u:
                case y:
                case l:
                case s:
                  return g;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  return Se.ContextConsumer = i, Se.ContextProvider = s, Se.Element = e, Se.ForwardRef = u, Se.Fragment = t, Se.Lazy = y, Se.Memo = l, Se.Portal = r, Se.Profiler = o, Se.StrictMode = n, Se.Suspense = a, Se.SuspenseList = d, Se.isAsyncMode = function() {
    return !1;
  }, Se.isConcurrentMode = function() {
    return !1;
  }, Se.isContextConsumer = function(g) {
    return $(g) === i;
  }, Se.isContextProvider = function(g) {
    return $(g) === s;
  }, Se.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Se.isForwardRef = function(g) {
    return $(g) === u;
  }, Se.isFragment = function(g) {
    return $(g) === t;
  }, Se.isLazy = function(g) {
    return $(g) === y;
  }, Se.isMemo = function(g) {
    return $(g) === l;
  }, Se.isPortal = function(g) {
    return $(g) === r;
  }, Se.isProfiler = function(g) {
    return $(g) === o;
  }, Se.isStrictMode = function(g) {
    return $(g) === n;
  }, Se.isSuspense = function(g) {
    return $(g) === a;
  }, Se.isSuspenseList = function(g) {
    return $(g) === d;
  }, Se.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === t || g === o || g === n || g === a || g === d || g === S || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === l || g.$$typeof === s || g.$$typeof === i || g.$$typeof === u || g.$$typeof === v || g.getModuleId !== void 0);
  }, Se.typeOf = $, Se;
}
var Ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Jo() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), v = !1, $ = !1, g = !1, R = !1, q = !1, B;
    B = Symbol.for("react.module.reference");
    function U(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === t || D === o || q || D === n || D === a || D === d || R || D === S || v || $ || g || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === l || D.$$typeof === s || D.$$typeof === i || D.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === B || D.getModuleId !== void 0));
    }
    function b(D) {
      if (typeof D == "object" && D !== null) {
        var K = D.$$typeof;
        switch (K) {
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
                var J = ee && ee.$$typeof;
                switch (J) {
                  case c:
                  case i:
                  case u:
                  case y:
                  case l:
                  case s:
                    return J;
                  default:
                    return K;
                }
            }
          case r:
            return K;
        }
      }
    }
    var p = i, f = s, _ = e, k = u, w = t, F = y, H = l, P = r, A = o, T = n, Z = a, I = d, C = !1, O = !1;
    function te(D) {
      return C || (C = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(D) {
      return O || (O = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(D) {
      return b(D) === i;
    }
    function Y(D) {
      return b(D) === s;
    }
    function L(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function ne(D) {
      return b(D) === u;
    }
    function M(D) {
      return b(D) === t;
    }
    function X(D) {
      return b(D) === y;
    }
    function E(D) {
      return b(D) === l;
    }
    function Q(D) {
      return b(D) === r;
    }
    function V(D) {
      return b(D) === o;
    }
    function j(D) {
      return b(D) === n;
    }
    function m(D) {
      return b(D) === a;
    }
    function G(D) {
      return b(D) === d;
    }
    Ce.ContextConsumer = p, Ce.ContextProvider = f, Ce.Element = _, Ce.ForwardRef = k, Ce.Fragment = w, Ce.Lazy = F, Ce.Memo = H, Ce.Portal = P, Ce.Profiler = A, Ce.StrictMode = T, Ce.Suspense = Z, Ce.SuspenseList = I, Ce.isAsyncMode = te, Ce.isConcurrentMode = se, Ce.isContextConsumer = W, Ce.isContextProvider = Y, Ce.isElement = L, Ce.isForwardRef = ne, Ce.isFragment = M, Ce.isLazy = X, Ce.isMemo = E, Ce.isPortal = Q, Ce.isProfiler = V, Ce.isStrictMode = j, Ce.isSuspense = m, Ce.isSuspenseList = G, Ce.isValidElementType = U, Ce.typeOf = b;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ko() : e.exports = Jo();
})(Xo);
function qo(e) {
  function r(W, Y, L, ne, M) {
    for (var X = 0, E = 0, Q = 0, V = 0, j, m, G = 0, D = 0, K, ee = K = j = 0, J = 0, ce = 0, me = 0, le = 0, ve = L.length, De = ve - 1, be, oe = "", pe = "", Ye = "", Ge = "", Ne; J < ve; ) {
      if (m = L.charCodeAt(J), J === De && E + V + Q + X !== 0 && (E !== 0 && (m = E === 47 ? 10 : 47), V = Q = X = 0, ve++, De++), E + V + Q + X === 0) {
        if (J === De && (0 < ce && (oe = oe.replace(y, "")), 0 < oe.trim().length)) {
          switch (m) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              oe += L.charAt(J);
          }
          m = 59;
        }
        switch (m) {
          case 123:
            for (oe = oe.trim(), j = oe.charCodeAt(0), K = 1, le = ++J; J < ve; ) {
              switch (m = L.charCodeAt(J)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (m = L.charCodeAt(J + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ee = J + 1; ee < De; ++ee)
                          switch (L.charCodeAt(ee)) {
                            case 47:
                              if (m === 42 && L.charCodeAt(ee - 1) === 42 && J + 2 !== ee) {
                                J = ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (m === 47) {
                                J = ee + 1;
                                break e;
                              }
                          }
                        J = ee;
                      }
                  }
                  break;
                case 91:
                  m++;
                case 40:
                  m++;
                case 34:
                case 39:
                  for (; J++ < De && L.charCodeAt(J) !== m; )
                    ;
              }
              if (K === 0)
                break;
              J++;
            }
            switch (K = L.substring(le, J), j === 0 && (j = (oe = oe.replace(l, "").trim()).charCodeAt(0)), j) {
              case 64:
                switch (0 < ce && (oe = oe.replace(y, "")), m = oe.charCodeAt(1), m) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = Y;
                    break;
                  default:
                    ce = Z;
                }
                if (K = r(Y, ce, K, m, M + 1), le = K.length, 0 < C && (ce = t(Z, oe, me), Ne = c(3, K, ce, Y, P, H, le, m, M, ne), oe = ce.join(""), Ne !== void 0 && (le = (K = Ne.trim()).length) === 0 && (m = 0, K = "")), 0 < le)
                  switch (m) {
                    case 115:
                      oe = oe.replace(p, i);
                    case 100:
                    case 109:
                    case 45:
                      K = oe + "{" + K + "}";
                      break;
                    case 107:
                      oe = oe.replace(q, "$1 $2"), K = oe + "{" + K + "}", K = T === 1 || T === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                      break;
                    default:
                      K = oe + K, ne === 112 && (K = (pe += K, ""));
                  }
                else
                  K = "";
                break;
              default:
                K = r(Y, t(Y, oe, me), K, ne, M + 1);
            }
            Ye += K, K = me = ce = ee = j = 0, oe = "", m = L.charCodeAt(++J);
            break;
          case 125:
          case 59:
            if (oe = (0 < ce ? oe.replace(y, "") : oe).trim(), 1 < (le = oe.length))
              switch (ee === 0 && (j = oe.charCodeAt(0), j === 45 || 96 < j && 123 > j) && (le = (oe = oe.replace(" ", ":")).length), 0 < C && (Ne = c(1, oe, Y, W, P, H, pe.length, ne, M, ne)) !== void 0 && (le = (oe = Ne.trim()).length) === 0 && (oe = "\0\0"), j = oe.charCodeAt(0), m = oe.charCodeAt(1), j) {
                case 0:
                  break;
                case 64:
                  if (m === 105 || m === 99) {
                    Ge += oe + L.charAt(J);
                    break;
                  }
                default:
                  oe.charCodeAt(le - 1) !== 58 && (pe += o(oe, j, m, oe.charCodeAt(2)));
              }
            me = ce = ee = j = 0, oe = "", m = L.charCodeAt(++J);
        }
      }
      switch (m) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + j === 0 && ne !== 107 && 0 < oe.length && (ce = 1, oe += "\0"), 0 < C * te && c(0, oe, Y, W, P, H, pe.length, ne, M, ne), H = 1, P++;
          break;
        case 59:
        case 125:
          if (E + V + Q + X === 0) {
            H++;
            break;
          }
        default:
          switch (H++, be = L.charAt(J), m) {
            case 9:
            case 32:
              if (V + X + E === 0)
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
              V + E + X === 0 && (ce = me = 1, be = "\f" + be);
              break;
            case 108:
              if (V + E + X + A === 0 && 0 < ee)
                switch (J - ee) {
                  case 2:
                    G === 112 && L.charCodeAt(J - 3) === 58 && (A = G);
                  case 8:
                    D === 111 && (A = D);
                }
              break;
            case 58:
              V + E + X === 0 && (ee = J);
              break;
            case 44:
              E + Q + V + X === 0 && (ce = 1, be += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (V = V === m ? 0 : V === 0 ? m : V);
              break;
            case 91:
              V + E + Q === 0 && X++;
              break;
            case 93:
              V + E + Q === 0 && X--;
              break;
            case 41:
              V + E + X === 0 && Q--;
              break;
            case 40:
              if (V + E + X === 0) {
                if (j === 0)
                  switch (2 * G + 3 * D) {
                    case 533:
                      break;
                    default:
                      j = 1;
                  }
                Q++;
              }
              break;
            case 64:
              E + Q + V + X + ee + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + X + Q))
                switch (E) {
                  case 0:
                    switch (2 * m + 3 * L.charCodeAt(J + 1)) {
                      case 235:
                        E = 47;
                        break;
                      case 220:
                        le = J, E = 42;
                    }
                    break;
                  case 42:
                    m === 47 && G === 42 && le + 2 !== J && (L.charCodeAt(le + 2) === 33 && (pe += L.substring(le, J + 1)), be = "", E = 0);
                }
          }
          E === 0 && (oe += be);
      }
      D = G, G = m, J++;
    }
    if (le = pe.length, 0 < le) {
      if (ce = Y, 0 < C && (Ne = c(2, pe, ce, W, P, H, le, ne, M, ne), Ne !== void 0 && (pe = Ne).length === 0))
        return Ge + pe + Ye;
      if (pe = ce.join(",") + "{" + pe + "}", T * A !== 0) {
        switch (T !== 2 || s(pe, 2) || (A = 0), A) {
          case 111:
            pe = pe.replace(U, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(B, "::-webkit-input-$1") + pe.replace(B, "::-moz-$1") + pe.replace(B, ":-ms-input-$1") + pe;
        }
        A = 0;
      }
    }
    return Ge + pe + Ye;
  }
  function t(W, Y, L) {
    var ne = Y.trim().split(g);
    Y = ne;
    var M = ne.length, X = W.length;
    switch (X) {
      case 0:
      case 1:
        var E = 0;
        for (W = X === 0 ? "" : W[0] + " "; E < M; ++E)
          Y[E] = n(W, Y[E], L).trim();
        break;
      default:
        var Q = E = 0;
        for (Y = []; E < M; ++E)
          for (var V = 0; V < X; ++V)
            Y[Q++] = n(W[V] + " ", ne[E], L).trim();
    }
    return Y;
  }
  function n(W, Y, L) {
    var ne = Y.charCodeAt(0);
    switch (33 > ne && (ne = (Y = Y.trim()).charCodeAt(0)), ne) {
      case 38:
        return Y.replace(R, "$1" + W.trim());
      case 58:
        return W.trim() + Y.replace(R, "$1" + W.trim());
      default:
        if (0 < 1 * L && 0 < Y.indexOf("\f"))
          return Y.replace(R, (W.charCodeAt(0) === 58 ? "" : "$1") + W.trim());
    }
    return W + Y;
  }
  function o(W, Y, L, ne) {
    var M = W + ";", X = 2 * Y + 3 * L + 4 * ne;
    if (X === 944) {
      W = M.indexOf(":", 9) + 1;
      var E = M.substring(W, M.length - 1).trim();
      return E = M.substring(0, W).trim() + E + ";", T === 1 || T === 2 && s(E, 1) ? "-webkit-" + E + E : E;
    }
    if (T === 0 || T === 2 && !s(M, 1))
      return M;
    switch (X) {
      case 1015:
        return M.charCodeAt(10) === 97 ? "-webkit-" + M + M : M;
      case 951:
        return M.charCodeAt(3) === 116 ? "-webkit-" + M + M : M;
      case 963:
        return M.charCodeAt(5) === 110 ? "-webkit-" + M + M : M;
      case 1009:
        if (M.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + M + M;
      case 978:
        return "-webkit-" + M + "-moz-" + M + M;
      case 1019:
      case 983:
        return "-webkit-" + M + "-moz-" + M + "-ms-" + M + M;
      case 883:
        if (M.charCodeAt(8) === 45)
          return "-webkit-" + M + M;
        if (0 < M.indexOf("image-set(", 11))
          return M.replace(F, "$1-webkit-$2") + M;
        break;
      case 932:
        if (M.charCodeAt(4) === 45)
          switch (M.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + M.replace("-grow", "") + "-webkit-" + M + "-ms-" + M.replace("grow", "positive") + M;
            case 115:
              return "-webkit-" + M + "-ms-" + M.replace("shrink", "negative") + M;
            case 98:
              return "-webkit-" + M + "-ms-" + M.replace("basis", "preferred-size") + M;
          }
        return "-webkit-" + M + "-ms-" + M + M;
      case 964:
        return "-webkit-" + M + "-ms-flex-" + M + M;
      case 1023:
        if (M.charCodeAt(8) !== 99)
          break;
        return E = M.substring(M.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + E + "-webkit-" + M + "-ms-flex-pack" + E + M;
      case 1005:
        return v.test(M) ? M.replace(S, ":-webkit-") + M.replace(S, ":-moz-") + M : M;
      case 1e3:
        switch (E = M.substring(13).trim(), Y = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(Y)) {
          case 226:
            E = M.replace(b, "tb");
            break;
          case 232:
            E = M.replace(b, "tb-rl");
            break;
          case 220:
            E = M.replace(b, "lr");
            break;
          default:
            return M;
        }
        return "-webkit-" + M + "-ms-" + E + M;
      case 1017:
        if (M.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (Y = (M = W).length - 10, E = (M.charCodeAt(Y) === 33 ? M.substring(0, Y) : M).substring(W.indexOf(":", 7) + 1).trim(), X = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8))
              break;
          case 115:
            M = M.replace(E, "-webkit-" + E) + ";" + M;
            break;
          case 207:
          case 102:
            M = M.replace(E, "-webkit-" + (102 < X ? "inline-" : "") + "box") + ";" + M.replace(E, "-webkit-" + E) + ";" + M.replace(E, "-ms-" + E + "box") + ";" + M;
        }
        return M + ";";
      case 938:
        if (M.charCodeAt(5) === 45)
          switch (M.charCodeAt(6)) {
            case 105:
              return E = M.replace("-items", ""), "-webkit-" + M + "-webkit-box-" + E + "-ms-flex-" + E + M;
            case 115:
              return "-webkit-" + M + "-ms-flex-item-" + M.replace(_, "") + M;
            default:
              return "-webkit-" + M + "-ms-flex-line-pack" + M.replace("align-content", "").replace(_, "") + M;
          }
        break;
      case 973:
      case 989:
        if (M.charCodeAt(3) !== 45 || M.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (w.test(W) === !0)
          return (E = W.substring(W.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(W.replace("stretch", "fill-available"), Y, L, ne).replace(":fill-available", ":stretch") : M.replace(E, "-webkit-" + E) + M.replace(E, "-moz-" + E.replace("fill-", "")) + M;
        break;
      case 962:
        if (M = "-webkit-" + M + (M.charCodeAt(5) === 102 ? "-ms-" + M : "") + M, L + ne === 211 && M.charCodeAt(13) === 105 && 0 < M.indexOf("transform", 10))
          return M.substring(0, M.indexOf(";", 27) + 1).replace($, "$1-webkit-$2") + M;
    }
    return M;
  }
  function s(W, Y) {
    var L = W.indexOf(Y === 1 ? ":" : "{"), ne = W.substring(0, Y !== 3 ? L : 10);
    return L = W.substring(L + 1, W.length - 1), O(Y !== 2 ? ne : ne.replace(k, "$1"), L, Y);
  }
  function i(W, Y) {
    var L = o(Y, Y.charCodeAt(0), Y.charCodeAt(1), Y.charCodeAt(2));
    return L !== Y + ";" ? L.replace(f, " or ($1)").substring(4) : "(" + Y + ")";
  }
  function c(W, Y, L, ne, M, X, E, Q, V, j) {
    for (var m = 0, G = Y, D; m < C; ++m)
      switch (D = I[m].call(d, W, G, L, ne, M, X, E, Q, V, j)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          G = D;
      }
    if (G !== Y)
      return G;
  }
  function u(W) {
    switch (W) {
      case void 0:
      case null:
        C = I.length = 0;
        break;
      default:
        if (typeof W == "function")
          I[C++] = W;
        else if (typeof W == "object")
          for (var Y = 0, L = W.length; Y < L; ++Y)
            u(W[Y]);
        else
          te = !!W | 0;
    }
    return u;
  }
  function a(W) {
    return W = W.prefix, W !== void 0 && (O = null, W ? typeof W != "function" ? T = 1 : (T = 2, O = W) : T = 0), a;
  }
  function d(W, Y) {
    var L = W;
    if (33 > L.charCodeAt(0) && (L = L.trim()), se = L, L = [se], 0 < C) {
      var ne = c(-1, Y, L, L, P, H, 0, 0, 0, 0);
      ne !== void 0 && typeof ne == "string" && (Y = ne);
    }
    var M = r(Z, L, Y, 0, 0);
    return 0 < C && (ne = c(-2, M, L, L, P, H, M.length, 0, 0, 0), ne !== void 0 && (M = ne)), se = "", A = 0, H = P = 1, M;
  }
  var l = /^\0+/g, y = /[\0\r\f]/g, S = /: */g, v = /zoo|gra/, $ = /([,: ])(transform)/g, g = /,\r+?/g, R = /([\t\r\n ])*\f?&/g, q = /@(k\w+)\s*(\S*)\s*/, B = /::(place)/g, U = /:(read-only)/g, b = /[svh]\w+-[tblr]{2}/, p = /\(\s*(.*)\s*\)/g, f = /([\s\S]*?);/g, _ = /-self|flex-/g, k = /[^]*?(:[rp][el]a[\w-]+)[^]*/, w = /stretch|:\s*\w+\-(?:conte|avail)/, F = /([^-])(image-set\()/, H = 1, P = 1, A = 0, T = 1, Z = [], I = [], C = 0, O = null, te = 0, se = "";
  return d.use = u, d.set = a, e !== void 0 && a(e), d;
}
var Qo = {
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
function es(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ts = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fr = /* @__PURE__ */ es(
  function(e) {
    return ts.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $n = {}, ns = {
  get exports() {
    return $n;
  },
  set exports(e) {
    $n = e;
  }
}, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function rs() {
  if (hr)
    return ke;
  hr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function B(b) {
    if (typeof b == "object" && b !== null) {
      var p = b.$$typeof;
      switch (p) {
        case r:
          switch (b = b.type, b) {
            case u:
            case a:
            case n:
            case s:
            case o:
            case l:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case d:
                case v:
                case S:
                case i:
                  return b;
                default:
                  return p;
              }
          }
        case t:
          return p;
      }
    }
  }
  function U(b) {
    return B(b) === a;
  }
  return ke.AsyncMode = u, ke.ConcurrentMode = a, ke.ContextConsumer = c, ke.ContextProvider = i, ke.Element = r, ke.ForwardRef = d, ke.Fragment = n, ke.Lazy = v, ke.Memo = S, ke.Portal = t, ke.Profiler = s, ke.StrictMode = o, ke.Suspense = l, ke.isAsyncMode = function(b) {
    return U(b) || B(b) === u;
  }, ke.isConcurrentMode = U, ke.isContextConsumer = function(b) {
    return B(b) === c;
  }, ke.isContextProvider = function(b) {
    return B(b) === i;
  }, ke.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === r;
  }, ke.isForwardRef = function(b) {
    return B(b) === d;
  }, ke.isFragment = function(b) {
    return B(b) === n;
  }, ke.isLazy = function(b) {
    return B(b) === v;
  }, ke.isMemo = function(b) {
    return B(b) === S;
  }, ke.isPortal = function(b) {
    return B(b) === t;
  }, ke.isProfiler = function(b) {
    return B(b) === s;
  }, ke.isStrictMode = function(b) {
    return B(b) === o;
  }, ke.isSuspense = function(b) {
    return B(b) === l;
  }, ke.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === a || b === s || b === o || b === l || b === y || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === S || b.$$typeof === i || b.$$typeof === c || b.$$typeof === d || b.$$typeof === g || b.$$typeof === R || b.$$typeof === q || b.$$typeof === $);
  }, ke.typeOf = B, ke;
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
var pr;
function os() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
    function B(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === a || m === s || m === o || m === l || m === y || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === S || m.$$typeof === i || m.$$typeof === c || m.$$typeof === d || m.$$typeof === g || m.$$typeof === R || m.$$typeof === q || m.$$typeof === $);
    }
    function U(m) {
      if (typeof m == "object" && m !== null) {
        var G = m.$$typeof;
        switch (G) {
          case r:
            var D = m.type;
            switch (D) {
              case u:
              case a:
              case n:
              case s:
              case o:
              case l:
                return D;
              default:
                var K = D && D.$$typeof;
                switch (K) {
                  case c:
                  case d:
                  case v:
                  case S:
                  case i:
                    return K;
                  default:
                    return G;
                }
            }
          case t:
            return G;
        }
      }
    }
    var b = u, p = a, f = c, _ = i, k = r, w = d, F = n, H = v, P = S, A = t, T = s, Z = o, I = l, C = !1;
    function O(m) {
      return C || (C = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), te(m) || U(m) === u;
    }
    function te(m) {
      return U(m) === a;
    }
    function se(m) {
      return U(m) === c;
    }
    function W(m) {
      return U(m) === i;
    }
    function Y(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function L(m) {
      return U(m) === d;
    }
    function ne(m) {
      return U(m) === n;
    }
    function M(m) {
      return U(m) === v;
    }
    function X(m) {
      return U(m) === S;
    }
    function E(m) {
      return U(m) === t;
    }
    function Q(m) {
      return U(m) === s;
    }
    function V(m) {
      return U(m) === o;
    }
    function j(m) {
      return U(m) === l;
    }
    Me.AsyncMode = b, Me.ConcurrentMode = p, Me.ContextConsumer = f, Me.ContextProvider = _, Me.Element = k, Me.ForwardRef = w, Me.Fragment = F, Me.Lazy = H, Me.Memo = P, Me.Portal = A, Me.Profiler = T, Me.StrictMode = Z, Me.Suspense = I, Me.isAsyncMode = O, Me.isConcurrentMode = te, Me.isContextConsumer = se, Me.isContextProvider = W, Me.isElement = Y, Me.isForwardRef = L, Me.isFragment = ne, Me.isLazy = M, Me.isMemo = X, Me.isPortal = E, Me.isProfiler = Q, Me.isStrictMode = V, Me.isSuspense = j, Me.isValidElementType = B, Me.typeOf = U;
  }()), Me;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = rs() : e.exports = os();
})(ns);
var qn = $n, ss = {
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
}, is = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, as = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, uo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qn = {};
Qn[qn.ForwardRef] = as;
Qn[qn.Memo] = uo;
function mr(e) {
  return qn.isMemo(e) ? uo : Qn[e.$$typeof] || ss;
}
var cs = Object.defineProperty, ls = Object.getOwnPropertyNames, gr = Object.getOwnPropertySymbols, ds = Object.getOwnPropertyDescriptor, us = Object.getPrototypeOf, yr = Object.prototype;
function fo(e, r, t) {
  if (typeof r != "string") {
    if (yr) {
      var n = us(r);
      n && n !== yr && fo(e, n, t);
    }
    var o = ls(r);
    gr && (o = o.concat(gr(r)));
    for (var s = mr(e), i = mr(r), c = 0; c < o.length; ++c) {
      var u = o[c];
      if (!is[u] && !(t && t[u]) && !(i && i[u]) && !(s && s[u])) {
        var a = ds(r, u);
        try {
          cs(e, u, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var fs = fo;
function Ke() {
  return (Ke = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var vr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, Dn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Zt.typeOf(e);
}, sn = Object.freeze([]), ut = Object.freeze({});
function It(e) {
  return typeof e == "function";
}
function En(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function er(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ot = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", tr = typeof window < "u" && "HTMLElement" in window, hs = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), ps = {}, ms = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function gs() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function st(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(gs.apply(void 0, [ms[e]].concat(t)).trim());
}
var ys = function() {
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
        (i <<= 1) < 0 && st(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = s; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), a = 0, d = n.length; a < d; a++)
      this.tag.insertRule(u, n[a]) && (this.groupSizes[t]++, u++);
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
}(), nn = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), jt = 1, Kt = function(e) {
  if (nn.has(e))
    return nn.get(e);
  for (; an.has(jt); )
    jt++;
  var r = jt++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && st(16, "" + r), nn.set(e, r), an.set(r, e), r;
}, vs = function(e) {
  return an.get(e);
}, xs = function(e, r) {
  r >= jt && (jt = r + 1), nn.set(e, r), an.set(r, e);
}, bs = "style[" + Ot + '][data-styled-version="5.3.8"]', ws = new RegExp("^" + Ot + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ss = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, Cs = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(ws);
      if (c) {
        var u = 0 | parseInt(c[1], 10), a = c[2];
        u !== 0 && (xs(a, u), Ss(e, a, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, ks = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ho = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var u = c.childNodes, a = u.length; a >= 0; a--) {
      var d = u[a];
      if (d && d.nodeType === 1 && d.hasAttribute(Ot))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ot, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = ks();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, Ms = function() {
  function e(t) {
    var n = this.element = ho(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var u = s[i];
        if (u.ownerNode === o)
          return u;
      }
      st(17);
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
}(), $s = function() {
  function e(t) {
    var n = this.element = ho(t);
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
}(), Ds = function() {
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
}(), xr = tr, Es = { isServer: !tr, useCSSOMInjection: !hs }, cn = function() {
  function e(t, n, o) {
    t === void 0 && (t = ut), n === void 0 && (n = {}), this.options = Ke({}, Es, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && tr && xr && (xr = !1, function(s) {
      for (var i = document.querySelectorAll(bs), c = 0, u = i.length; c < u; c++) {
        var a = i[c];
        a && a.getAttribute(Ot) !== "active" && (Cs(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Kt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ke({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new Ds(i) : s ? new Ms(i) : new $s(i), new ys(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Kt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Kt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Kt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = vs(i);
        if (c !== void 0) {
          var u = t.names.get(c), a = n.getGroup(i);
          if (u && a && u.size) {
            var d = Ot + ".g" + i + '[id="' + c + '"]', l = "";
            u !== void 0 && u.forEach(function(y) {
              y.length > 0 && (l += y + ",");
            }), s += "" + a + d + '{content:"' + l + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), _s = /(a)(d)/gi, br = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _n(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = br(r % 52) + t;
  return (br(r % 52) + t).replace(_s, "$1-$2");
}
var mt = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, po = function(e) {
  return mt(5381, e);
};
function mo(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (It(t) && !er(t))
      return !1;
  }
  return !0;
}
var Ts = po("5.3.8"), Ps = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && mo(r), this.componentId = t, this.baseHash = mt(Ts, t), this.baseStyle = n, cn.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = vt(this.rules, r, t, n).join(""), c = _n(mt(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var u = n(i, "." + c, void 0, o);
          t.insertRules(o, c, u);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = mt(this.baseHash, n.hash), l = "", y = 0; y < a; y++) {
        var S = this.rules[y];
        if (typeof S == "string")
          l += S, process.env.NODE_ENV !== "production" && (d = mt(d, S + y));
        else if (S) {
          var v = vt(S, r, t, n), $ = Array.isArray(v) ? v.join("") : v;
          d = mt(d, $ + y), l += $;
        }
      }
      if (l) {
        var g = _n(d >>> 0);
        if (!t.hasNameForId(o, g)) {
          var R = n(l, "." + g, void 0, o);
          t.insertRules(o, g, R);
        }
        s.push(g);
      }
    }
    return s.join(" ");
  }, e;
}(), As = /^\s*\/\/.*$/gm, Is = [":", "[", ".", "#"];
function Os(e) {
  var r, t, n, o, s = e === void 0 ? ut : e, i = s.options, c = i === void 0 ? ut : i, u = s.plugins, a = u === void 0 ? sn : u, d = new qo(c), l = [], y = function($) {
    function g(R) {
      if (R)
        try {
          $(R + "}");
        } catch {
        }
    }
    return function(R, q, B, U, b, p, f, _, k, w) {
      switch (R) {
        case 1:
          if (k === 0 && q.charCodeAt(0) === 64)
            return $(q + ";"), "";
          break;
        case 2:
          if (_ === 0)
            return q + "/*|*/";
          break;
        case 3:
          switch (_) {
            case 102:
            case 112:
              return $(B[0] + q), "";
            default:
              return q + (w === 0 ? "/*|*/" : "");
          }
        case -2:
          q.split("/*|*/}").forEach(g);
      }
    };
  }(function($) {
    l.push($);
  }), S = function($, g, R) {
    return g === 0 && Is.indexOf(R[t.length]) !== -1 || R.match(o) ? $ : "." + r;
  };
  function v($, g, R, q) {
    q === void 0 && (q = "&");
    var B = $.replace(As, ""), U = g && R ? R + " " + g + " { " + B + " }" : B;
    return r = q, t = g, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(R || !g ? "" : g, U);
  }
  return d.use([].concat(a, [function($, g, R) {
    $ === 2 && R.length && R[0].lastIndexOf(t) > 0 && (R[0] = R[0].replace(n, S));
  }, y, function($) {
    if ($ === -2) {
      var g = l;
      return l = [], g;
    }
  }])), v.hash = a.length ? a.reduce(function($, g) {
    return g.name || st(15), mt($, g.name);
  }, 5381).toString() : "", v;
}
var go = yt.createContext();
go.Consumer;
var yo = yt.createContext(), Ls = (yo.Consumer, new cn()), Tn = Os();
function vo() {
  return at(go) || Ls;
}
function xo() {
  return at(yo) || Tn;
}
var bo = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Tn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return st(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Tn), this.name + r.hash;
  }, e;
}(), Rs = /([A-Z])/, Ys = /([A-Z])/g, Ns = /^ms-/, Fs = function(e) {
  return "-" + e.toLowerCase();
};
function wr(e) {
  return Rs.test(e) ? e.replace(Ys, Fs).replace(Ns, "-ms-") : e;
}
var Sr = function(e) {
  return e == null || e === !1 || e === "";
};
function vt(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = vt(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Sr(e))
    return "";
  if (er(e))
    return "." + e.styledComponentId;
  if (It(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var u = e(r);
    return process.env.NODE_ENV !== "production" && Zt.isElement(u) && console.warn(En(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), vt(u, r, t, n);
  }
  var a;
  return e instanceof bo ? t ? (e.inject(t, n), e.getName(n)) : e : Dn(e) ? function d(l, y) {
    var S, v, $ = [];
    for (var g in l)
      l.hasOwnProperty(g) && !Sr(l[g]) && (Array.isArray(l[g]) && l[g].isCss || It(l[g]) ? $.push(wr(g) + ":", l[g], ";") : Dn(l[g]) ? $.push.apply($, d(l[g], g)) : $.push(wr(g) + ": " + (S = g, (v = l[g]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || S in Qo ? String(v).trim() : v + "px") + ";"));
    return y ? [y + " {"].concat($, ["}"]) : $;
  }(e) : e.toString();
}
var Cr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function bt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return It(e) || Dn(e) ? Cr(vt(vr(sn, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Cr(vt(vr(e, t)));
}
var kr = /invalid hook call/i, Jt = /* @__PURE__ */ new Set(), wo = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (kr.test(s))
          o = !1, Jt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
            c[u - 1] = arguments[u];
          n.apply(void 0, [s].concat(c));
        }
      }, ue(), o && !Jt.has(t) && (console.warn(t), Jt.add(t));
    } catch (s) {
      kr.test(s.message) && Jt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, So = function(e, r, t) {
  return t === void 0 && (t = ut), e.theme !== t.theme && e.theme || r || t.theme;
}, zs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Bs = /(^-|-$)/g;
function xn(e) {
  return e.replace(zs, "-").replace(Bs, "");
}
var nr = function(e) {
  return _n(po(e) >>> 0);
};
function qt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Pn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Hs = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ws(e, r, t) {
  var n = e[t];
  Pn(r) && Pn(n) ? Co(n, r) : e[t] = r;
}
function Co(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Pn(i))
      for (var c in i)
        Hs(c) && Ws(e, i[c], c);
  }
  return e;
}
var Lt = yt.createContext();
Lt.Consumer;
function js(e) {
  var r = at(Lt), t = $e(function() {
    return function(n, o) {
      if (!n)
        return st(14);
      if (It(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : st(7);
      }
      return Array.isArray(n) || typeof n != "object" ? st(8) : o ? Ke({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? yt.createElement(Lt.Provider, { value: t }, e.children) : null;
}
var bn = {};
function ko(e, r, t) {
  var n = er(e), o = !qt(e), s = r.attrs, i = s === void 0 ? sn : s, c = r.componentId, u = c === void 0 ? function(q, B) {
    var U = typeof q != "string" ? "sc" : xn(q);
    bn[U] = (bn[U] || 0) + 1;
    var b = U + "-" + nr("5.3.8" + U + bn[U]);
    return B ? B + "-" + b : b;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(q) {
    return qt(q) ? "styled." + q : "Styled(" + En(q) + ")";
  }(e) : a, l = r.displayName && r.componentId ? xn(r.displayName) + "-" + r.componentId : r.componentId || u, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, S = r.shouldForwardProp;
  n && e.shouldForwardProp && (S = r.shouldForwardProp ? function(q, B, U) {
    return e.shouldForwardProp(q, B, U) && r.shouldForwardProp(q, B, U);
  } : e.shouldForwardProp);
  var v, $ = new Ps(t, l, n ? e.componentStyle : void 0), g = $.isStatic && i.length === 0, R = function(q, B) {
    return function(U, b, p, f) {
      var _ = U.attrs, k = U.componentStyle, w = U.defaultProps, F = U.foldedComponentIds, H = U.shouldForwardProp, P = U.styledComponentId, A = U.target;
      process.env.NODE_ENV !== "production" && lr(P);
      var T = function(ne, M, X) {
        ne === void 0 && (ne = ut);
        var E = Ke({}, M, { theme: ne }), Q = {};
        return X.forEach(function(V) {
          var j, m, G, D = V;
          for (j in It(D) && (D = D(E)), D)
            E[j] = Q[j] = j === "className" ? (m = Q[j], G = D[j], m && G ? m + " " + G : m || G) : D[j];
        }), [E, Q];
      }(So(b, at(Lt), w) || ut, b, _), Z = T[0], I = T[1], C = function(ne, M, X, E) {
        var Q = vo(), V = xo(), j = M ? ne.generateAndInjectStyles(ut, Q, V) : ne.generateAndInjectStyles(X, Q, V);
        return process.env.NODE_ENV !== "production" && lr(j), process.env.NODE_ENV !== "production" && !M && E && E(j), j;
      }(k, f, Z, process.env.NODE_ENV !== "production" ? U.warnTooManyClasses : void 0), O = p, te = I.$as || b.$as || I.as || b.as || A, se = qt(te), W = I !== b ? Ke({}, b, {}, I) : b, Y = {};
      for (var L in W)
        L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? Y.as = W[L] : (H ? H(L, fr, te) : !se || fr(L)) && (Y[L] = W[L]));
      return b.style && I.style !== b.style && (Y.style = Ke({}, b.style, {}, I.style)), Y.className = Array.prototype.concat(F, P, C !== P ? C : null, b.className, I.className).filter(Boolean).join(" "), Y.ref = O, Go(te, Y);
    }(v, q, B, g);
  };
  return R.displayName = d, (v = yt.forwardRef(R)).attrs = y, v.componentStyle = $, v.displayName = d, v.shouldForwardProp = S, v.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : sn, v.styledComponentId = l, v.target = n ? e.target : e, v.withComponent = function(q) {
    var B = r.componentId, U = function(p, f) {
      if (p == null)
        return {};
      var _, k, w = {}, F = Object.keys(p);
      for (k = 0; k < F.length; k++)
        _ = F[k], f.indexOf(_) >= 0 || (w[_] = p[_]);
      return w;
    }(r, ["componentId"]), b = B && B + "-" + (qt(q) ? q : xn(En(q)));
    return ko(q, Ke({}, U, { attrs: y, componentId: b }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(q) {
    this._foldedDefaultProps = n ? Co({}, e.defaultProps, q) : q;
  } }), process.env.NODE_ENV !== "production" && (wo(d, l), v.warnTooManyClasses = function(q, B) {
    var U = {}, b = !1;
    return function(p) {
      if (!b && (U[p] = !0, Object.keys(U).length >= 200)) {
        var f = B ? ' with the id of "' + B + '"' : "";
        console.warn("Over 200 classes were generated for component " + q + f + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), b = !0, U = {};
      }
    };
  }(d, l)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && fs(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var An = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = ut), !Zt.isValidElementType(n))
      return st(1, String(n));
    var s = function() {
      return t(n, o, bt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Ke({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Ke({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(ko, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  An[e] = An(e);
});
var Zs = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = mo(t), cn.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(vt(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && cn.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function Vs(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = bt.apply(void 0, [e].concat(t)), s = "sc-global-" + nr(JSON.stringify(o)), i = new Zs(o, s);
  function c(a) {
    var d = vo(), l = xo(), y = at(Lt), S = ue(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && yt.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && u(S, a, d, y, l), fn(function() {
      if (!d.server)
        return u(S, a, d, y, l), function() {
          return i.removeStyles(S, d);
        };
    }, [S, a, d, y, l]), null;
  }
  function u(a, d, l, y, S) {
    if (i.isStatic)
      i.renderStyles(a, ps, l, S);
    else {
      var v = Ke({}, d, { theme: So(d, y, c.defaultProps) });
      i.renderStyles(a, v, l, S);
    }
  }
  return process.env.NODE_ENV !== "production" && wo(s), yt.memo(c);
}
function Ve(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = bt.apply(void 0, [e].concat(t)).join(""), s = nr(o);
  return new bo(s, o);
}
var hn = function() {
  return at(Lt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const x = An;
var xt = {}, Gs = {
  get exports() {
    return xt;
  },
  set exports(e) {
    xt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Le, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", u = "hour", a = "day", d = "week", l = "month", y = "quarter", S = "year", v = "date", $ = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, R = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, q = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(P) {
      var A = ["th", "st", "nd", "rd"], T = P % 100;
      return "[" + P + (A[(T - 20) % 10] || A[T] || A[0]) + "]";
    } }, B = function(P, A, T) {
      var Z = String(P);
      return !Z || Z.length >= A ? P : "" + Array(A + 1 - Z.length).join(T) + P;
    }, U = { s: B, z: function(P) {
      var A = -P.utcOffset(), T = Math.abs(A), Z = Math.floor(T / 60), I = T % 60;
      return (A <= 0 ? "+" : "-") + B(Z, 2, "0") + ":" + B(I, 2, "0");
    }, m: function P(A, T) {
      if (A.date() < T.date())
        return -P(T, A);
      var Z = 12 * (T.year() - A.year()) + (T.month() - A.month()), I = A.clone().add(Z, l), C = T - I < 0, O = A.clone().add(Z + (C ? -1 : 1), l);
      return +(-(Z + (T - I) / (C ? I - O : O - I)) || 0);
    }, a: function(P) {
      return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
    }, p: function(P) {
      return { M: l, y: S, w: d, d: a, D: v, h: u, m: c, s: i, ms: s, Q: y }[P] || String(P || "").toLowerCase().replace(/s$/, "");
    }, u: function(P) {
      return P === void 0;
    } }, b = "en", p = {};
    p[b] = q;
    var f = function(P) {
      return P instanceof F;
    }, _ = function P(A, T, Z) {
      var I;
      if (!A)
        return b;
      if (typeof A == "string") {
        var C = A.toLowerCase();
        p[C] && (I = C), T && (p[C] = T, I = C);
        var O = A.split("-");
        if (!I && O.length > 1)
          return P(O[0]);
      } else {
        var te = A.name;
        p[te] = A, I = te;
      }
      return !Z && I && (b = I), I || !Z && b;
    }, k = function(P, A) {
      if (f(P))
        return P.clone();
      var T = typeof A == "object" ? A : {};
      return T.date = P, T.args = arguments, new F(T);
    }, w = U;
    w.l = _, w.i = f, w.w = function(P, A) {
      return k(P, { locale: A.$L, utc: A.$u, x: A.$x, $offset: A.$offset });
    };
    var F = function() {
      function P(T) {
        this.$L = _(T.locale, null, !0), this.parse(T);
      }
      var A = P.prototype;
      return A.parse = function(T) {
        this.$d = function(Z) {
          var I = Z.date, C = Z.utc;
          if (I === null)
            return new Date(NaN);
          if (w.u(I))
            return new Date();
          if (I instanceof Date)
            return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var O = I.match(g);
            if (O) {
              var te = O[2] - 1 || 0, se = (O[7] || "0").substring(0, 3);
              return C ? new Date(Date.UTC(O[1], te, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, se)) : new Date(O[1], te, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, se);
            }
          }
          return new Date(I);
        }(T), this.$x = T.x || {}, this.init();
      }, A.init = function() {
        var T = this.$d;
        this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
      }, A.$utils = function() {
        return w;
      }, A.isValid = function() {
        return this.$d.toString() !== $;
      }, A.isSame = function(T, Z) {
        var I = k(T);
        return this.startOf(Z) <= I && I <= this.endOf(Z);
      }, A.isAfter = function(T, Z) {
        return k(T) < this.startOf(Z);
      }, A.isBefore = function(T, Z) {
        return this.endOf(Z) < k(T);
      }, A.$g = function(T, Z, I) {
        return w.u(T) ? this[Z] : this.set(I, T);
      }, A.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, A.valueOf = function() {
        return this.$d.getTime();
      }, A.startOf = function(T, Z) {
        var I = this, C = !!w.u(Z) || Z, O = w.p(T), te = function(E, Q) {
          var V = w.w(I.$u ? Date.UTC(I.$y, Q, E) : new Date(I.$y, Q, E), I);
          return C ? V : V.endOf(a);
        }, se = function(E, Q) {
          return w.w(I.toDate()[E].apply(I.toDate("s"), (C ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), I);
        }, W = this.$W, Y = this.$M, L = this.$D, ne = "set" + (this.$u ? "UTC" : "");
        switch (O) {
          case S:
            return C ? te(1, 0) : te(31, 11);
          case l:
            return C ? te(1, Y) : te(0, Y + 1);
          case d:
            var M = this.$locale().weekStart || 0, X = (W < M ? W + 7 : W) - M;
            return te(C ? L - X : L + (6 - X), Y);
          case a:
          case v:
            return se(ne + "Hours", 0);
          case u:
            return se(ne + "Minutes", 1);
          case c:
            return se(ne + "Seconds", 2);
          case i:
            return se(ne + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, A.endOf = function(T) {
        return this.startOf(T, !1);
      }, A.$set = function(T, Z) {
        var I, C = w.p(T), O = "set" + (this.$u ? "UTC" : ""), te = (I = {}, I[a] = O + "Date", I[v] = O + "Date", I[l] = O + "Month", I[S] = O + "FullYear", I[u] = O + "Hours", I[c] = O + "Minutes", I[i] = O + "Seconds", I[s] = O + "Milliseconds", I)[C], se = C === a ? this.$D + (Z - this.$W) : Z;
        if (C === l || C === S) {
          var W = this.clone().set(v, 1);
          W.$d[te](se), W.init(), this.$d = W.set(v, Math.min(this.$D, W.daysInMonth())).$d;
        } else
          te && this.$d[te](se);
        return this.init(), this;
      }, A.set = function(T, Z) {
        return this.clone().$set(T, Z);
      }, A.get = function(T) {
        return this[w.p(T)]();
      }, A.add = function(T, Z) {
        var I, C = this;
        T = Number(T);
        var O = w.p(Z), te = function(Y) {
          var L = k(C);
          return w.w(L.date(L.date() + Math.round(Y * T)), C);
        };
        if (O === l)
          return this.set(l, this.$M + T);
        if (O === S)
          return this.set(S, this.$y + T);
        if (O === a)
          return te(1);
        if (O === d)
          return te(7);
        var se = (I = {}, I[c] = n, I[u] = o, I[i] = t, I)[O] || 1, W = this.$d.getTime() + T * se;
        return w.w(W, this);
      }, A.subtract = function(T, Z) {
        return this.add(-1 * T, Z);
      }, A.format = function(T) {
        var Z = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || $;
        var C = T || "YYYY-MM-DDTHH:mm:ssZ", O = w.z(this), te = this.$H, se = this.$m, W = this.$M, Y = I.weekdays, L = I.months, ne = function(Q, V, j, m) {
          return Q && (Q[V] || Q(Z, C)) || j[V].slice(0, m);
        }, M = function(Q) {
          return w.s(te % 12 || 12, Q, "0");
        }, X = I.meridiem || function(Q, V, j) {
          var m = Q < 12 ? "AM" : "PM";
          return j ? m.toLowerCase() : m;
        }, E = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: W + 1, MM: w.s(W + 1, 2, "0"), MMM: ne(I.monthsShort, W, L, 3), MMMM: ne(L, W), D: this.$D, DD: w.s(this.$D, 2, "0"), d: String(this.$W), dd: ne(I.weekdaysMin, this.$W, Y, 2), ddd: ne(I.weekdaysShort, this.$W, Y, 3), dddd: Y[this.$W], H: String(te), HH: w.s(te, 2, "0"), h: M(1), hh: M(2), a: X(te, se, !0), A: X(te, se, !1), m: String(se), mm: w.s(se, 2, "0"), s: String(this.$s), ss: w.s(this.$s, 2, "0"), SSS: w.s(this.$ms, 3, "0"), Z: O };
        return C.replace(R, function(Q, V) {
          return V || E[Q] || O.replace(":", "");
        });
      }, A.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, A.diff = function(T, Z, I) {
        var C, O = w.p(Z), te = k(T), se = (te.utcOffset() - this.utcOffset()) * n, W = this - te, Y = w.m(this, te);
        return Y = (C = {}, C[S] = Y / 12, C[l] = Y, C[y] = Y / 3, C[d] = (W - se) / 6048e5, C[a] = (W - se) / 864e5, C[u] = W / o, C[c] = W / n, C[i] = W / t, C)[O] || W, I ? Y : w.a(Y);
      }, A.daysInMonth = function() {
        return this.endOf(l).$D;
      }, A.$locale = function() {
        return p[this.$L];
      }, A.locale = function(T, Z) {
        if (!T)
          return this.$L;
        var I = this.clone(), C = _(T, Z, !0);
        return C && (I.$L = C), I;
      }, A.clone = function() {
        return w.w(this.$d, this);
      }, A.toDate = function() {
        return new Date(this.valueOf());
      }, A.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, A.toISOString = function() {
        return this.$d.toISOString();
      }, A.toString = function() {
        return this.$d.toUTCString();
      }, P;
    }(), H = F.prototype;
    return k.prototype = H, [["$ms", s], ["$s", i], ["$m", c], ["$H", u], ["$W", a], ["$M", l], ["$y", S], ["$D", v]].forEach(function(P) {
      H[P[1]] = function(A) {
        return this.$g(A, P[0], P[1]);
      };
    }), k.extend = function(P, A) {
      return P.$i || (P(A, F, k), P.$i = !0), k;
    }, k.locale = _, k.isDayjs = f, k.unix = function(P) {
      return k(1e3 * P);
    }, k.en = p[b], k.Ls = p, k.p = {}, k;
  });
})(Gs);
const N = xt, Wt = "reactSchedulerOutsideWrapper", Ze = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Us = Vs`

  #${Wt} {
    font-family: ${Ze};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Wt} *,
 #${Wt} *:before,
 #${Wt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Xs = {
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
    subcontractText: "#92400E",
    unassignedBorder: "#F59E0B",
    unassignedText: "#92400E"
  }
}, Ks = {
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
    subcontractText: "#FCD34D",
    unassignedBorder: "#D97706",
    unassignedText: "#FCD34D"
  }
}, Nt = `
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
const Te = 50, qe = 24, St = 16, Pt = 40, ln = Pt + St + qe, Rt = 84, ye = 56, Fe = 196, Ue = 12, Re = 50, Yt = 24, Vt = 16, In = 40, Js = Yt + Vt + In, Mr = 24, $r = 52, ft = {
  topRow: `600 14px ${Ze}`,
  middleRow: `400 10px ${Ze}`,
  bottomRow: {
    name: `600 14px ${Ze}`,
    number: `600 10px ${Ze}`,
    hoursInDay: `400 9px ${Ze}`
  }
}, At = 3, Mo = 12, dn = 24, $o = "reactSchedulerCanvasHeaderWrapper", Do = "reactSchedulerCanvasWrapper", it = Wt, qs = 4, pn = 48, dt = 5, Qs = 40, Dr = 8, rr = qe / 2 + 2, Eo = St / 2 + qe + 1, Er = 2, Oe = 60, ze = 21, _o = 58, To = "reactSchedulerBody", _r = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, or = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, Po = (e, r) => N(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), Ao = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: or(e),
  isCurrentDay: e.isSame(N(), "day"),
  year: parseInt(e.format("YYYY"))
}), sr = (e, r, t, n, o, s, i, c = !1) => {
  s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.mode === "dark" ? i.colors.primary : "#F2F6F4", e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ye);
  const u = i.mode === "dark";
  e.strokeStyle = u ? i.colors.border : "#EEF3F0", e.beginPath(), e.moveTo(r + n - 0.5, t), e.lineTo(r + n - 0.5, t + ye), e.stroke(), e.strokeStyle = u ? i.colors.border : "#E4EAE7", e.beginPath(), e.moveTo(r, t + 0.5), e.lineTo(r + n, t + 0.5), e.stroke(), c && (e.strokeStyle = u ? i.colors.today : "#5C8374", e.beginPath(), e.moveTo(r + 0.5, t), e.lineTo(r + 0.5, t + ye), e.stroke());
}, ir = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * ze;
}, ei = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = ir(i, s);
    for (let u = 0; u <= t; u++) {
      const a = N(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        u,
        "days"
      ), d = a.isSame(N(), "day"), l = a.date() === 1;
      sr(
        e,
        u * Te,
        i * ye + c,
        Te,
        or(a),
        d,
        o,
        l
      );
    }
  }
}, ti = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, ni = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Ue;
  const u = r * ye + s.length * ze;
  for (let a = 0; a <= t; a++) {
    const l = N(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(N(), "week");
    for (let y = 0; y < r; y++) {
      const S = ir(y, s);
      sr(e, i, y * ye + S, Rt, !0, l, o);
    }
    i += Rt;
  }
  for (let a = 0; a < t; a++) {
    const d = Po(n, a) * Ue;
    ti(e, c, u, o), c += d;
  }
}, ri = (e, r, t, n, o, s = []) => {
  const i = N(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const u = ir(c, s);
    for (let a = 0; a <= t; a++) {
      let d;
      a === Math.floor(t / 2) ? d = N() : a > Math.floor(t / 2) ? d = N().add(a - Math.floor(t / 2), "hours") : d = N().subtract(Math.floor(t / 2) - c, "hours");
      const l = i.isSame(N(), "day") && d.isSame(N(), "hour");
      sr(
        e,
        a * Re + Re / 2 - 0.5,
        c * ye + u,
        Re,
        or(d),
        l,
        o
      );
    }
  }
}, oi = (e, r, t, n, o = "group") => {
  const s = t * ye + r * ze, i = e.canvas.width;
  e.fillStyle = o === "subcontract" ? n.colors.subcontractBorder + "40" : o === "provider" ? n.colors.subcontractBorder + "2E" : o === "warning" ? n.colors.unassignedBorder + "26" : n.mode === "dark" ? n.colors.primary + "80" : "#E9EFEC", e.fillRect(0, s, i, ze);
}, si = (e, r, t, n, o, s, i = [], c = -1, u = -1, a = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(Do)) {
    switch (r) {
      case 0:
        ni(e, t, n, o, s, i);
        break;
      case 1:
        ei(e, t, n, o, s, i);
        break;
      case 2:
        ri(e, t, n, o, s, i);
        break;
    }
    for (let l = 0; l < i.length; l++) {
      const y = l === c ? "subcontract" : l === u ? "warning" : a.includes(l) ? "provider" : "group";
      oi(e, l, i[l], s, y);
    }
    if (r === 1) {
      const l = N(`${o.year}-${o.month + 1}-${o.dayOfMonth}`), y = t * ye + i.length * ze;
      e.strokeStyle = s.mode === "dark" ? s.colors.today : "#5C8374", e.setLineDash([]);
      for (let S = 0; S <= n; S++)
        if (l.add(S, "days").date() === 1) {
          const v = S * Te + 0.5;
          e.beginPath(), e.moveTo(v, 0), e.lineTo(v, y), e.stroke();
        }
    }
  }
};
var On = {}, ii = {
  get exports() {
    return On;
  },
  set exports(e) {
    On = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Le, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(n).add(1, n).date(a), l = i(this).endOf(t);
          if (d.isBefore(l))
            return 1;
        }
        var y = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), S = this.diff(y, t, !0);
        return S < 0 ? i(this).startOf("week").week() : Math.ceil(S);
      }, c.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(ii);
const ai = On;
var Ln = {}, ci = {
  get exports() {
    return Ln;
  },
  set exports(e) {
    Ln = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Le, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(ci);
const li = Ln;
var Rn = {}, di = {
  get exports() {
    return Rn;
  },
  set exports(e) {
    Rn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Le, function() {
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
        var d, l, y, S, v = i(this), $ = (d = this.isoWeekYear(), l = this.$u, y = (l ? s.utc : s)().year(d).startOf("year"), S = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (S += 7), y.add(S, t));
        return v.diff($, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var u = c.startOf;
      c.startOf = function(a, d) {
        var l = this.$utils(), y = !!l.u(d) || d;
        return l.p(a) === "isoweek" ? y ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : u.bind(this)(a, d);
      };
    };
  });
})(di);
const ui = Rn;
var Yn = {}, fi = {
  get exports() {
    return Yn;
  },
  set exports(e) {
    Yn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Le, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, u) {
        var a = o(s), d = o(i), l = (u = u || "()")[0] === "(", y = u[1] === ")";
        return (l ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(d, c) : !this.isAfter(d, c)) || (l ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(fi);
const hi = Yn;
var Nn = {}, pi = {
  get exports() {
    return Nn;
  },
  set exports(e) {
    Nn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Le, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, l = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, S = function(b) {
      return b instanceof U;
    }, v = function(b, p, f) {
      return new U(b, f, p.$l);
    }, $ = function(b) {
      return n.p(b) + "s";
    }, g = function(b) {
      return b < 0;
    }, R = function(b) {
      return g(b) ? Math.ceil(b) : Math.floor(b);
    }, q = function(b) {
      return Math.abs(b);
    }, B = function(b, p) {
      return b ? g(b) ? { negative: !0, format: "" + q(b) + p } : { negative: !1, format: "" + b + p } : { negative: !1, format: "" };
    }, U = function() {
      function b(f, _, k) {
        var w = this;
        if (this.$d = {}, this.$l = k, f === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), _)
          return v(f * y[$(_)], this);
        if (typeof f == "number")
          return this.$ms = f, this.parseFromMilliseconds(), this;
        if (typeof f == "object")
          return Object.keys(f).forEach(function(P) {
            w.$d[$(P)] = f[P];
          }), this.calMilliseconds(), this;
        if (typeof f == "string") {
          var F = f.match(l);
          if (F) {
            var H = F.slice(2).map(function(P) {
              return P != null ? Number(P) : 0;
            });
            return this.$d.years = H[0], this.$d.months = H[1], this.$d.weeks = H[2], this.$d.days = H[3], this.$d.hours = H[4], this.$d.minutes = H[5], this.$d.seconds = H[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var p = b.prototype;
      return p.calMilliseconds = function() {
        var f = this;
        this.$ms = Object.keys(this.$d).reduce(function(_, k) {
          return _ + (f.$d[k] || 0) * y[k];
        }, 0);
      }, p.parseFromMilliseconds = function() {
        var f = this.$ms;
        this.$d.years = R(f / a), f %= a, this.$d.months = R(f / d), f %= d, this.$d.days = R(f / c), f %= c, this.$d.hours = R(f / i), f %= i, this.$d.minutes = R(f / s), f %= s, this.$d.seconds = R(f / o), f %= o, this.$d.milliseconds = f;
      }, p.toISOString = function() {
        var f = B(this.$d.years, "Y"), _ = B(this.$d.months, "M"), k = +this.$d.days || 0;
        this.$d.weeks && (k += 7 * this.$d.weeks);
        var w = B(k, "D"), F = B(this.$d.hours, "H"), H = B(this.$d.minutes, "M"), P = this.$d.seconds || 0;
        this.$d.milliseconds && (P += this.$d.milliseconds / 1e3);
        var A = B(P, "S"), T = f.negative || _.negative || w.negative || F.negative || H.negative || A.negative, Z = F.format || H.format || A.format ? "T" : "", I = (T ? "-" : "") + "P" + f.format + _.format + w.format + Z + F.format + H.format + A.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, p.toJSON = function() {
        return this.toISOString();
      }, p.format = function(f) {
        var _ = f || "YYYY-MM-DDTHH:mm:ss", k = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return _.replace(u, function(w, F) {
          return F || String(k[w]);
        });
      }, p.as = function(f) {
        return this.$ms / y[$(f)];
      }, p.get = function(f) {
        var _ = this.$ms, k = $(f);
        return k === "milliseconds" ? _ %= 1e3 : _ = k === "weeks" ? R(_ / y[k]) : this.$d[k], _ === 0 ? 0 : _;
      }, p.add = function(f, _, k) {
        var w;
        return w = _ ? f * y[$(_)] : S(f) ? f.$ms : v(f, this).$ms, v(this.$ms + w * (k ? -1 : 1), this);
      }, p.subtract = function(f, _) {
        return this.add(f, _, !0);
      }, p.locale = function(f) {
        var _ = this.clone();
        return _.$l = f, _;
      }, p.clone = function() {
        return v(this.$ms, this);
      }, p.humanize = function(f) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!f);
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
      }, b;
    }();
    return function(b, p, f) {
      t = f, n = f().$utils(), f.duration = function(w, F) {
        var H = f.locale();
        return v(w, { $l: H }, F);
      }, f.isDuration = S;
      var _ = p.prototype.add, k = p.prototype.subtract;
      p.prototype.add = function(w, F) {
        return S(w) && (w = w.asMilliseconds()), _.bind(this)(w, F);
      }, p.prototype.subtract = function(w, F) {
        return S(w) && (w = w.asMilliseconds()), k.bind(this)(w, F);
      };
    };
  });
})(pi);
const mi = Nn;
var gi = "Expected a function", Tr = 0 / 0, yi = "[object Symbol]", vi = /^\s+|\s+$/g, xi = /^[-+]0x[0-9a-f]+$/i, bi = /^0b[01]+$/i, wi = /^0o[0-7]+$/i, Si = parseInt, Ci = typeof Le == "object" && Le && Le.Object === Object && Le, ki = typeof self == "object" && self && self.Object === Object && self, Mi = Ci || ki || Function("return this")(), $i = Object.prototype, Di = $i.toString, Ei = Math.max, _i = Math.min, wn = function() {
  return Mi.Date.now();
};
function Ti(e, r, t) {
  var n, o, s, i, c, u, a = 0, d = !1, l = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(gi);
  r = Pr(r) || 0, Fn(t) && (d = !!t.leading, l = "maxWait" in t, s = l ? Ei(Pr(t.maxWait) || 0, r) : s, y = "trailing" in t ? !!t.trailing : y);
  function S(p) {
    var f = n, _ = o;
    return n = o = void 0, a = p, i = e.apply(_, f), i;
  }
  function v(p) {
    return a = p, c = setTimeout(R, r), d ? S(p) : i;
  }
  function $(p) {
    var f = p - u, _ = p - a, k = r - f;
    return l ? _i(k, s - _) : k;
  }
  function g(p) {
    var f = p - u, _ = p - a;
    return u === void 0 || f >= r || f < 0 || l && _ >= s;
  }
  function R() {
    var p = wn();
    if (g(p))
      return q(p);
    c = setTimeout(R, $(p));
  }
  function q(p) {
    return c = void 0, y && n ? S(p) : (n = o = void 0, i);
  }
  function B() {
    c !== void 0 && clearTimeout(c), a = 0, n = u = o = c = void 0;
  }
  function U() {
    return c === void 0 ? i : q(wn());
  }
  function b() {
    var p = wn(), f = g(p);
    if (n = arguments, o = this, u = p, f) {
      if (c === void 0)
        return v(u);
      if (l)
        return c = setTimeout(R, r), S(u);
    }
    return c === void 0 && (c = setTimeout(R, r)), i;
  }
  return b.cancel = B, b.flush = U, b;
}
function Fn(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Pi(e) {
  return !!e && typeof e == "object";
}
function Ai(e) {
  return typeof e == "symbol" || Pi(e) && Di.call(e) == yi;
}
function Pr(e) {
  if (typeof e == "number")
    return e;
  if (Ai(e))
    return Tr;
  if (Fn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Fn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(vi, "");
  var t = bi.test(e);
  return t || wi.test(e) ? Si(e.slice(2), t ? 2 : 8) : xi.test(e) ? Tr : +e;
}
var zn = Ti;
const rn = [0, 1, 2];
var Gt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Gt || {});
const Io = (e) => rn.includes(e), Et = (e) => {
  var n;
  const t = (((n = document.getElementById(it)) == null ? void 0 : n.clientWidth) || 0) - Fe;
  switch (e) {
    case 1:
      return Math.ceil(t / Te) * At;
    case 2:
      return Math.ceil(t / Re) * At;
    default:
      return Math.ceil(t / Rt) * At;
  }
}, Ii = (e) => Et(e) / At, mn = (e, r) => {
  const t = Et(r) / 2;
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
}, Oi = (e, r) => {
  const t = mn(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, ar = () => {
  var t;
  const e = ((t = document.getElementById(it)) == null ? void 0 : t.clientWidth) || 0;
  return Math.max(0, e - Fe) * At;
}, Oo = Kn({
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
  date: N(),
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
N.extend(ai);
N.extend(li);
N.extend(ui);
N.extend(hi);
N.extend(mi);
const Li = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = N(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c,
  toolbarActions: u
}) => {
  const { zoom: a, maxRecordsPerPage: d = 50 } = n, [l, y] = he(a), [S, v] = he(N()), [$, g] = he(null), [R, q] = he(!1), [B, U] = he(Et(l)), b = rn[l] !== rn[rn.length - 1], p = l !== 0, f = $e(() => Oi(S, l), [S, l]), _ = mn(S, l).startDate, k = N(_).dayOfYear(), w = Ao(_), F = ue(null), H = ue(!1), P = ue(null), [A, T] = he([{ x: 0, y: 0 }]), Z = ae(
    (V, j = "auto") => {
      var G, D, K, ee;
      const m = ar();
      switch (V) {
        case "back":
          return (G = F.current) == null ? void 0 : G.scrollTo({
            behavior: j,
            left: m / 3
          });
        case "forward":
          return (D = F.current) == null ? void 0 : D.scrollTo({
            behavior: j,
            left: m / 3
          });
        case "middle": {
          const J = m / At / 4;
          return (K = F.current) == null ? void 0 : K.scrollTo({
            behavior: j,
            left: m / 2 - J
          });
        }
        default:
          return (ee = F.current) == null ? void 0 : ee.scrollTo({
            behavior: j,
            left: m / 2
          });
      }
    },
    []
  ), I = (V) => {
    T(V);
  }, C = ae(
    (V) => {
      const j = Ii(l);
      let m;
      switch (l) {
        case 0:
          m = j * 7;
          break;
        case 1:
          m = j;
          break;
        case 2:
          m = Math.ceil(j / dn);
          break;
      }
      zn(() => {
        switch ((V === "forward" || V === "back") && (H.current = !0), P.current = V, V) {
          case "back":
            v((D) => D.subtract(m, "days"));
            break;
          case "forward":
            v((D) => D.add(m, "days"));
            break;
          case "middle":
            v(N());
            break;
        }
        s == null || s(f);
      }, 300)();
    },
    [s, f, l]
  );
  ge(() => {
    P.current && (Z(P.current), P.current = null);
  }, [S, Z]), ge(() => {
    F.current = document.getElementById(it), U(Et(l));
  }, [l]), ge(() => {
    const V = () => U(Et(l));
    return window.addEventListener("resize", V), () => window.removeEventListener("resize", V);
  }, [l]), ge(() => {
    s == null || s(f);
  }, [s, f]), ge(() => {
    q(!1);
  }, [o]), ge(() => {
    R || (Z("middle"), q(!0), v(o));
  }, [o, R, Z]);
  const O = () => {
    t || (v(
      (V) => l === 2 ? V.add(Mr, "hours") : V.add(Er, "weeks")
    ), s == null || s(f));
  }, te = ae(() => {
    t || C("forward");
  }, [t, C]), se = () => {
    t || (v(
      (V) => l === 2 ? V.subtract(Mr, "hours") : V.subtract(Er, "weeks")
    ), s == null || s(f));
  }, W = ae(() => {
    !R || t || C("back");
  }, [R, t, C]), Y = ae(() => {
    t || (P.current = "middle", v(N()), g(null), s == null || s(f));
  }, [t, s, f]), L = ae(
    (V) => {
      if (t)
        return;
      const j = N(V).startOf("day");
      j.isValid() && (P.current = "middle", v(j), g(j), s == null || s(f));
    },
    [t, s, f]
  );
  ge(() => {
    if (!$)
      return;
    const V = () => g(null);
    return document.addEventListener("mousedown", V, { once: !0 }), () => document.removeEventListener("mousedown", V);
  }, [$]);
  const ne = () => X(l + 1), M = () => X(l - 1), X = (V) => {
    Io(V) && (y(V), U(Et(V)), s == null || s(f));
  }, E = () => i == null ? void 0 : i(), { Provider: Q } = Oo;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: O,
        handleScrollNext: te,
        handleGoPrev: se,
        handleScrollPrev: W,
        handleGoToday: Y,
        goToDate: L,
        zoomIn: ne,
        zoomOut: M,
        setZoom: X,
        zoom: l,
        isNextZoom: b,
        isPrevZoom: p,
        date: S,
        jumpDate: $,
        isLoading: t,
        cols: B,
        startDate: w,
        dayOfYear: k,
        toggleDisplayActiveUnits: E,
        tilesCoords: A,
        updateTilesCoords: I,
        recordsThreshold: d,
        onClearFilterData: c,
        suppressNextSlideRef: H,
        toolbarActions: u
      },
      children: r
    }
  );
}, Je = () => at(Oo), Lo = (e, r, t) => {
  const n = Math.max(0, r), o = Math.max(0, t);
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = o * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = o + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Ro = () => {
  var e;
  return typeof window < "u" && !!((e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Yo = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ye + n * ze;
    if (e >= s + ze)
      n++;
    else if (e >= s)
      return o * ye + n * ze - n * ze;
  }
  return t - n * ze;
}, Ri = 5, Ar = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > Ri;
}, _t = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, Yi = ({
  data: e,
  baseData: r,
  zoom: t,
  startDate: n,
  onEventDrop: o,
  onEventDrag: s,
  draggableConfig: i = {},
  gridRef: c,
  separatorRowIndices: u = []
}) => {
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((X) => ({ ...X, data: [X.data] })) : r : e, {
    enabled: d = !0,
    isDraggable: l,
    resourceOnly: y = !1,
    isValidDrop: S
  } = i, [v, $] = he("idle"), [g, R] = he(null), [q, B] = he({ x: 0, y: 0 }), [U, b] = he({ width: 0, height: 48 }), [p, f] = he(null), [_, k] = he(!0), w = ue({ x: 0, y: 0 }), F = ue({ x: 0, y: 0 }), H = ue({ x: 0, y: 0 }), P = ue(null), A = ue(null), T = ue(0), Z = ue(null), I = ae(
    (X) => !d || X.draggable === !1 ? !1 : l ? l(X) : !0,
    [d, l]
  ), C = ae(
    (X, E) => {
      const Q = Yo(E, u), V = Math.floor(Q / ye);
      let j;
      switch (t) {
        case 0:
          j = Ue * 7;
          break;
        case 1:
          j = Te;
          break;
        case 2:
          j = Re;
          break;
        default:
          j = Te;
      }
      const m = Math.floor(X / j);
      let G;
      const D = N().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
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
      return { snappedDate: G, snappedResourceIndex: V };
    },
    [t, n, u]
  ), O = ae(
    (X, E, Q, V) => {
      const j = [], m = E.getTime(), G = Q.getTime(), D = a.find((ee) => ee.id === V);
      if (!D)
        return j;
      const K = [];
      for (const ee of D.data)
        Array.isArray(ee) ? K.push(...ee) : K.push(ee);
      for (const ee of K) {
        if (ee.segmentId === X.segmentId)
          continue;
        const J = ee.startDate.getTime(), ce = ee.endDate.getTime();
        if (m >= J && m < ce || G > J && G <= ce || m <= J && G >= ce) {
          const le = new Date(Math.max(m, J)), ve = new Date(Math.min(G, ce)), De = ve.getTime() - le.getTime();
          j.push({
            event: ee,
            conflictStart: le,
            conflictEnd: ve,
            overlapDuration: De
          });
        }
      }
      return j;
    },
    [a]
  ), te = ae(
    (X, E, Q, V) => {
      const j = [], m = E.getTime(), G = Q.getTime(), D = N(E).format("YYYY-MM-DD"), K = a.find((J) => J.id === V);
      if (!K)
        return j;
      const ee = [];
      for (const J of K.data)
        Array.isArray(J) ? ee.push(...J) : ee.push(J);
      for (const J of ee) {
        if (J.segmentId === X.segmentId)
          continue;
        const ce = J.startDate.getTime(), me = J.endDate.getTime(), le = N(J.startDate).format("YYYY-MM-DD"), ve = N(J.endDate).format("YYYY-MM-DD"), De = N(Q).format("YYYY-MM-DD");
        if (!(le === D || ve === D || le === De || ve === De || N(J.startDate).isBefore(E, "day") && N(J.endDate).isAfter(Q, "day")) || m >= ce && m < me || G > ce && G <= me || m <= ce && G >= me)
          continue;
        let pe, Ye;
        me <= m ? (pe = m - me, Ye = "before") : (pe = ce - G, Ye = "after"), j.push({
          event: J,
          timeGap: pe,
          position: Ye
        });
      }
      return j.sort((J, ce) => J.timeGap - ce.timeGap);
    },
    [a]
  ), se = ae(
    (X, E, Q) => {
      const V = C(E, Q);
      let j, m;
      if (y)
        j = X.startDate, m = X.endDate;
      else {
        const me = N(X.endDate).diff(X.startDate);
        j = V.snappedDate, m = N(j).add(me, "milliseconds").toDate();
      }
      let G = 0, D = "", K;
      for (const me of e) {
        const le = Math.max(me.data.length, 1);
        if (V.snappedResourceIndex < G + le) {
          D = me.id, K = me.capacity;
          break;
        }
        G += le;
      }
      if (!D)
        return null;
      let ee = !0;
      K !== void 0 && X.totalPassengers !== void 0 && (ee = X.totalPassengers <= K);
      const J = O(X, j, m, D), ce = J.length === 0 ? te(X, j, m, D) : [];
      return {
        startDate: j,
        endDate: m,
        resourceId: D,
        resourceIndex: V.snappedResourceIndex,
        resourceCapacity: K,
        hasCapacity: ee,
        conflicts: J,
        hasConflict: J.length > 0,
        nearbyEvents: ce
      };
    },
    [C, e, y, O, te]
  ), W = ae(
    (X, E) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - T.current < 100)
        return;
      T.current = Q;
      const V = {
        event: X,
        currentStartDate: E.startDate,
        currentEndDate: E.endDate,
        currentResourceId: E.resourceId,
        conflicts: E.conflicts
      };
      s(V);
    },
    [s]
  ), Y = ae(
    (X, E) => {
      if (!I(X) || !c.current)
        return;
      E.preventDefault(), E.stopPropagation();
      const Q = E.target.closest('[style*="left"]');
      let V = 0, j = 0;
      Q && Q.style.left && Q.style.top && (V = parseInt(Q.style.left), j = parseInt(Q.style.top));
      const m = _t(
        E.clientX,
        E.clientY,
        c.current
      );
      w.current = { x: V, y: j }, F.current = { x: E.clientX, y: E.clientY }, H.current = {
        x: m.x - V,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, Z.current = {
        startDate: X.startDate,
        endDate: X.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const K of e) {
        for (const ee of K.data)
          if (ee.some((J) => J.segmentId === X.segmentId)) {
            Z.current.resourceId = K.id;
            break;
          }
        if (Z.current.resourceId)
          break;
      }
      R(X), $("potential"), B({ x: V, y: j });
      let G = 100, D = 48;
      if (Q) {
        const K = Q.getBoundingClientRect();
        G = K.width, D = K.height;
      }
      b({ width: G, height: D });
    },
    [I, c, e, t]
  ), L = ae(
    (X) => {
      if (!c.current)
        return;
      let E = c.current;
      for (; E && E !== document.body; ) {
        const J = window.getComputedStyle(E);
        if (E.scrollHeight > E.clientHeight && (J.overflowY === "auto" || J.overflowY === "scroll" || J.overflow === "auto" || J.overflow === "scroll"))
          break;
        E = E.parentElement;
      }
      (!E || E === document.body) && (E = document.documentElement);
      const Q = E.getBoundingClientRect(), V = X.clientY, j = 50, m = 12, G = V - Q.top, D = Q.bottom - V;
      let K = !1, ee = 0;
      G < j && G > 0 ? (K = !0, ee = -m * (1 - G / j)) : D < j && D > 0 && (K = !0, ee = m * (1 - D / j)), K ? (A.current && cancelAnimationFrame(A.current), A.current = requestAnimationFrame(() => {
        E.scrollTop += ee, v === "dragging" && L(X);
      })) : A.current && (cancelAnimationFrame(A.current), A.current = null);
    },
    [c, v]
  ), ne = ae(
    (X) => {
      if (v === "idle" || v === "animating" || !g || !c.current)
        return;
      const E = { x: X.clientX, y: X.clientY };
      if (v === "potential")
        if (Ar(F.current, E))
          $("dragging");
        else
          return;
      L(X);
      const Q = _t(
        X.clientX,
        X.clientY,
        c.current
      );
      P.current && cancelAnimationFrame(P.current), P.current = requestAnimationFrame(() => {
        const V = {
          x: Q.x - H.current.x,
          y: Q.y - H.current.y
        };
        B(V);
        const j = se(g, Q.x, Q.y);
        if (j && S) {
          const m = {
            event: g,
            currentStartDate: j.startDate,
            currentEndDate: j.endDate,
            currentResourceId: j.resourceId,
            conflicts: j.conflicts
          };
          j.hasConflict = !S(m);
        }
        if (f(j), j) {
          const m = j.hasCapacity !== !1;
          k(m), W(g, j);
        }
      });
    },
    [v, g, c, se, W, S, L]
  ), M = ae(
    async (X) => {
      if (v === "idle" || v === "animating")
        return;
      const E = { x: X.clientX, y: X.clientY };
      if (!Ar(F.current, E) || v === "potential") {
        $("idle"), R(null), f(null);
        return;
      }
      if (!g || !p || !Z.current) {
        $("idle"), R(null), f(null);
        return;
      }
      if (p.hasCapacity === !1) {
        k(!1), $("animating"), B(w.current), setTimeout(() => {
          $("idle"), R(null), f(null), k(!0);
        }, 300);
        return;
      }
      const V = {
        event: g,
        originalStartDate: Z.current.startDate,
        originalEndDate: Z.current.endDate,
        originalResourceId: Z.current.resourceId,
        newStartDate: p.startDate,
        newEndDate: p.endDate,
        newResourceId: p.resourceId,
        hasConflict: p.hasConflict,
        conflicts: p.conflicts
      };
      let j = !0;
      if (o)
        try {
          const m = o(V);
          j = m instanceof Promise ? await m : m;
        } catch {
          j = !1;
        }
      j ? (k(!0), $("idle"), R(null), f(null)) : (k(!1), $("animating"), B(w.current), setTimeout(() => {
        $("idle"), R(null), f(null), k(!0);
      }, 300));
    },
    [v, g, p, o, S]
  );
  return ge(() => {
    if (v === "potential" || v === "dragging") {
      const X = (Q) => ne(Q), E = (Q) => M(Q);
      return document.addEventListener("mousemove", X), document.addEventListener("mouseup", E), () => {
        document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", E);
      };
    } else
      return () => {
      };
  }, [v, ne, M]), ge(() => () => {
    P.current && (cancelAnimationFrame(P.current), P.current = null), A.current && (cancelAnimationFrame(A.current), A.current = null);
  }, []), ge(() => {
    (v === "idle" || v === "animating") && (P.current && (cancelAnimationFrame(P.current), P.current = null), A.current && (cancelAnimationFrame(A.current), A.current = null));
  }, [v]), ge(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? ($("animating"), B(w.current), setTimeout(() => {
      $("idle"), R(null), f(null);
    }, 300)) : ($("idle"), R(null), f(null)));
  }, [t]), ge(() => {
    if ((v === "dragging" || v === "potential") && g) {
      let X = !1;
      for (const E of e) {
        for (const Q of E.data)
          if (Q.some((V) => V.segmentId === g.segmentId)) {
            X = !0;
            break;
          }
        if (X)
          break;
      }
      X || (v === "dragging" ? ($("animating"), B(w.current), setTimeout(() => {
        $("idle"), R(null), f(null);
      }, 300)) : ($("idle"), R(null), f(null)));
    }
  }, [e, v, g]), {
    dragState: v,
    draggedEvent: g,
    ghostPosition: q,
    ghostDimensions: U,
    dropTarget: p,
    isValidDrop: _,
    handleDragStart: Y,
    isDraggable: I,
    draggingEventId: (g == null ? void 0 : g.segmentId) || null,
    resourceOnly: y
  };
}, Ni = ({
  data: e,
  baseData: r,
  zoom: t,
  startDate: n,
  onTimeRangeSelect: o,
  onMultiTimeRangeSelect: s,
  clickToAddConfig: i = {},
  gridRef: c,
  isDragging: u,
  separatorRowIndices: a = []
}) => {
  const { enabled: d = !1, isSelectable: l } = i, y = d && !!o, S = ae((m) => {
    let G = 0;
    for (const D of a)
      D <= m && G++;
    return m * ye + G * ze;
  }, [a]), [v, $] = he("idle"), [g, R] = he(null), [q, B] = he(null), [U, b] = he(null), [p, f] = he(!1), [_, k] = he([]), [w, F] = he(!1), H = ue(null), P = ue(null), A = ue(null), T = ue(null), Z = ae(() => {
    switch (t) {
      case 0:
        return Ue * 7;
      case 1:
        return Te;
      case 2:
        return Re;
      default:
        return Te;
    }
  }, [t]), I = ae(
    (m) => {
      const G = Z(), D = Math.floor(m / G), K = N().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return K.add(D * 7, "days").toDate();
        case 1:
          return K.add(D, "days").toDate();
        case 2:
          return K.add(D, "hours").toDate();
        default:
          return K.toDate();
      }
    },
    [t, n, Z]
  ), C = ae(
    (m) => {
      const G = Yo(m, a), D = Math.floor(G / ye);
      let K = 0;
      for (const ee of e) {
        const J = Math.max(ee.data.length, 1);
        if (D < K + J)
          return {
            resourceId: ee.id,
            resourceIndex: D,
            resourceLabel: ee.label
          };
        K += J;
      }
      return null;
    },
    [e, a]
  ), O = ae(
    (m) => {
      const G = Z();
      return Math.floor(m / G) * G;
    },
    [Z]
  ), te = ae(
    (m, G, D, K = []) => {
      const ee = [], ce = (r || e).find((ve) => ve.id === m), me = G.getTime(), le = D.getTime();
      if (ce) {
        const ve = ce.data[0], De = ve && Array.isArray(ve) ? ce.data.flat() : ce.data;
        for (const be of De) {
          const oe = new Date(be.startDate).getTime(), pe = new Date(be.endDate).getTime();
          if (me < pe && le > oe) {
            const Ye = new Date(Math.max(me, oe)), Ge = new Date(Math.min(le, pe)), Ne = Ge.getTime() - Ye.getTime();
            ee.push({
              event: be,
              conflictStart: Ye,
              conflictEnd: Ge,
              overlapDuration: Ne
            });
          }
        }
      }
      for (const ve of K) {
        if (ve.resourceId !== m)
          continue;
        const De = ve.startDate.getTime(), be = ve.endDate.getTime();
        if (me < be && le > De) {
          const oe = new Date(Math.max(me, De)), pe = new Date(Math.min(le, be)), Ye = pe.getTime() - oe.getTime(), Ge = {
            segmentId: `pending-${ve.startDate.getTime()}`,
            reservationId: `pending-${ve.startDate.getTime()}`,
            startDate: ve.startDate,
            endDate: ve.endDate,
            occupancy: 0,
            title: `New Event (${ve.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          ee.push({
            event: Ge,
            conflictStart: oe,
            conflictEnd: pe,
            overlapDuration: Ye
          });
        }
      }
      return ee;
    },
    [e, r]
  ), se = ae(
    (m) => {
      if (!y || u || !c.current || m.button !== 0)
        return;
      const G = m.target;
      if (G.closest("[data-segment-id]") || G.closest("[data-multi-select-ui]"))
        return;
      const D = _t(m.clientX, m.clientY, c.current), K = C(D.y);
      if (!K)
        return;
      H.current = { x: m.clientX, y: m.clientY }, P.current = K.resourceIndex;
      const ee = O(D.x), J = Z(), ce = S(K.resourceIndex);
      R(D), B(D), b({
        x: ee,
        y: ce,
        width: J,
        height: ye
      }), $("selecting");
    },
    [y, u, c, C, O, Z, S]
  ), W = ae(
    (m) => {
      B(m);
      const G = Z(), D = O((g == null ? void 0 : g.x) || 0), K = O(m.x), ee = S(P.current), J = Math.min(D, K), ce = Math.max(D, K) + G;
      b({ x: J, y: ee, width: ce - J, height: ye });
    },
    [g, Z, O, S]
  ), Y = ae(() => {
    T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), L = ae(
    (m, G) => {
      const D = document.getElementById(it);
      if (!D || !c.current)
        return;
      const K = D.getBoundingClientRect(), ee = 60, J = 12, ce = m - (K.left + Fe), me = K.right - m;
      let le = 0;
      ce < ee ? le = -J * (1 - Math.max(0, ce) / ee) : me < ee && (le = J * (1 - Math.max(0, me) / ee)), Y(), le !== 0 && (T.current = requestAnimationFrame(() => {
        D.scrollLeft += le, W(_t(m, G, c.current)), L(m, G);
      }));
    },
    [c, W, Y]
  ), ne = ae(
    (m) => {
      if (v !== "selecting" || !c.current || P.current === null)
        return;
      const G = _t(m.clientX, m.clientY, c.current);
      A.current && cancelAnimationFrame(A.current), A.current = requestAnimationFrame(() => W(G)), L(m.clientX, m.clientY);
    },
    [v, c, W, L]
  ), M = ae(
    (m) => {
      if (v !== "selecting")
        return;
      if (Y(), !c.current || !g || !H.current) {
        $("idle"), R(null), B(null), b(null);
        return;
      }
      const G = _t(m.clientX, m.clientY, c.current), D = C(g.y);
      if (!D) {
        $("idle"), R(null), B(null), b(null);
        return;
      }
      const K = Math.min(g.x, G.x), ee = Math.max(g.x, G.x), J = I(K), ce = I(ee), me = N(ce).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (l && !l(D.resourceId, J, me)) {
        $("idle"), R(null), B(null), b(null);
        return;
      }
      const le = te(
        D.resourceId,
        J,
        me,
        _
      ), ve = le.length > 0, De = {
        startDate: J,
        endDate: me,
        resourceId: D.resourceId,
        resourceLabel: D.resourceLabel,
        zoomLevel: t,
        hasConflict: ve,
        conflicts: ve ? le : void 0
      };
      if (p)
        k((be) => [...be, De]), F(!0);
      else if (o) {
        const be = o(De), oe = (pe) => {
          pe != null && pe.continueMultiSelect && (f(!0), k([De]), F(!0));
        };
        be instanceof Promise ? be.then(oe) : oe(be);
      }
      $("idle"), R(null), B(null), b(null), H.current = null, P.current = null;
    },
    [
      v,
      c,
      g,
      C,
      I,
      l,
      o,
      t,
      p,
      te,
      _,
      Y
    ]
  ), X = ae(() => {
    if (_.length > 0 && s) {
      F(!1);
      const m = s(_), G = (D) => {
        D != null && D.continueMultiSelect ? F(!0) : (k([]), f(!1), F(!1));
      };
      m instanceof Promise ? m.then(G) : G(m);
      return;
    }
    k([]), f(!1), F(!1);
  }, [_, s]), E = ae(() => {
    k([]), f(!1), F(!1);
  }, []), Q = ae((m) => {
    k((G) => {
      const D = G.filter((K, ee) => ee !== m);
      return D.length === 0 && (f(!1), F(!1)), D;
    });
  }, []), V = ae(
    (m, G) => {
      k((D) => D.map((K, ee) => {
        if (ee !== m)
          return K;
        const J = { ...K, ...G }, ce = D.filter((le, ve) => ve !== m), me = te(
          J.resourceId,
          J.startDate,
          J.endDate,
          ce
        );
        return {
          ...J,
          hasConflict: me.length > 0,
          conflicts: me.length > 0 ? me : void 0
        };
      }));
    },
    [te]
  ), j = ae(
    (m) => {
      m.key === "Escape" && (v === "selecting" ? (Y(), $("idle"), R(null), B(null), b(null), H.current = null, P.current = null) : p && _.length > 0 && (k([]), f(!1), F(!1)));
    },
    [v, p, _.length, Y]
  );
  return ge(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", ne), document.addEventListener("mouseup", M), document.addEventListener("keydown", j), () => {
        document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", M), document.removeEventListener("keydown", j);
      };
  }, [v, ne, M, j]), ge(() => {
    if (p && _.length > 0)
      return document.addEventListener("keydown", j), () => {
        document.removeEventListener("keydown", j);
      };
  }, [p, _.length, j]), ge(() => () => {
    A.current && (cancelAnimationFrame(A.current), A.current = null), Y();
  }, [Y]), ge(() => {
    u && v === "selecting" && (Y(), $("idle"), R(null), B(null), b(null), H.current = null, P.current = null);
  }, [u, v, Y]), {
    selectionState: v,
    selectionStart: g,
    selectionEnd: q,
    selectionBox: U,
    handleGridMouseDown: se,
    isEnabled: y,
    pendingSelections: _,
    confirmSelections: X,
    clearSelections: E,
    removeSelection: Q,
    updateSelection: V,
    isMultiSelectActive: p,
    hasUnconfirmedSelections: w
  };
}, Fi = x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, zi = x.div`
  position: relative;
`, Bi = x.canvas``;
x.canvas``;
const Hi = x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, Ir = x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Wi = [], ji = Jn(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onTileContextMenu: i, onEventDrop: c, onEventDrag: u, draggableConfig: a, onDragStateChange: d, onTimeRangeSelect: l, onMultiTimeRangeSelect: y, clickToAddConfig: S, separatorRowIndices: v = [], subcontractSeparatorIndex: $ = -1, warningSeparatorIndex: g = -1, providerSeparatorIndices: R = Wi, fadingUnitIds: q }, B) {
  const U = ue(!1), { handleScrollNext: b, handleScrollPrev: p, date: f, isLoading: _, cols: k, startDate: w, suppressNextSlideRef: F, config: H } = Je(), P = ue(null), A = ue(null), T = ue(t), Z = ue(f), I = ue(null), C = ue(null), O = ue(null), te = ue(null), [se, W] = he(!1), Y = hn(), {
    dragState: L,
    draggedEvent: ne,
    ghostPosition: M,
    ghostDimensions: X,
    dropTarget: E,
    isValidDrop: Q,
    handleDragStart: V,
    isDraggable: j,
    draggingEventId: m,
    resourceOnly: G
  } = Yi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: w,
    onEventDrop: c,
    onEventDrag: u,
    draggableConfig: a,
    gridRef: te,
    separatorRowIndices: v
  });
  ge(() => {
    const xe = L === "dragging" || L === "potential";
    W(xe), d && d(xe);
  }, [L, d]);
  const D = ue(!1), K = ue(f), ee = ue(null);
  ge(() => {
    var ie;
    const xe = K.current;
    if (K.current = f, !D.current) {
      D.current = !0;
      return;
    }
    if (F != null && F.current) {
      F.current = !1;
      return;
    }
    const _e = te.current;
    if (!(_e != null && _e.animate))
      return;
    const Be = f.isAfter(xe) ? 48 : -48;
    (ie = ee.current) == null || ie.cancel(), _e.style.willChange = "transform";
    const Pe = _e.animate(
      [
        { transform: `translateX(${Be}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), et = () => {
      _e.style.willChange = "";
    };
    Pe.onfinish = et, Pe.oncancel = et, ee.current = Pe;
  }, [f, F]);
  const {
    selectionState: J,
    selectionBox: ce,
    handleGridMouseDown: me,
    pendingSelections: le,
    confirmSelections: ve,
    clearSelections: De,
    removeSelection: be,
    updateSelection: oe,
    isMultiSelectActive: pe,
    hasUnconfirmedSelections: Ye
  } = Ni({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: w,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: y,
    clickToAddConfig: S,
    gridRef: te,
    isDragging: se,
    separatorRowIndices: v
  }), Ge = ae((xe) => {
    xe.preventDefault();
  }, []), Ne = ae((xe) => {
    xe.preventDefault();
  }, []), Ct = v.length * ze, Qe = ae(
    (xe) => {
      const _e = ar(), Be = t * ye + 1 + Ct;
      Lo(xe, _e, Be), si(xe, r, t, k, w, Y, v, $, g, R);
    },
    [k, w, t, r, Y, v, $, g, R, Ct]
  );
  return ge(() => {
    if (!P.current)
      return;
    const xe = P.current.getContext("2d");
    if (!xe)
      return;
    const _e = () => Qe(xe);
    return window.addEventListener("resize", _e), () => window.removeEventListener("resize", _e);
  }, [Qe]), ge(() => {
    var de;
    const xe = T.current, _e = Z.current;
    if (T.current = t, Z.current = f, xe === t || !f.isSame(_e, "day") || Ro())
      return;
    const Be = P.current, Pe = A.current;
    if (!Be || !Pe || Be.width === 0 || Be.height === 0)
      return;
    const et = Pe.getContext("2d");
    if (!et)
      return;
    Pe.width = Be.width, Pe.height = Be.height, Pe.style.width = Be.style.width, Pe.style.height = Be.style.height, et.setTransform(1, 0, 0, 1, 0, 0), et.clearRect(0, 0, Pe.width, Pe.height), et.drawImage(Be, 0, 0), (de = I.current) == null || de.cancel(), Pe.style.opacity = "1";
    const ie = Pe.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    ie.onfinish = () => {
      Pe.style.opacity = "0";
    }, I.current = ie;
  }, [t, f]), ge(() => {
    const xe = P.current;
    if (!xe)
      return;
    xe.style.letterSpacing = "1px";
    const _e = xe.getContext("2d");
    _e && Qe(_e);
  }, [f, t, r, Qe]), ge(() => {
    if (!C.current)
      return;
    const xe = new IntersectionObserver(
      (_e) => {
        _e[0].isIntersecting && !U.current && (U.current = !0, b(), setTimeout(() => {
          U.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(it) }
    );
    return xe.observe(C.current), () => {
      xe.disconnect();
    };
  }, [b]), ge(() => {
    if (!O.current)
      return;
    const xe = new IntersectionObserver(
      (_e) => {
        _e[0].isIntersecting && !U.current && (U.current = !0, p(), setTimeout(() => {
          U.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(it),
        rootMargin: `0px 0px 0px -${Fe}px`
      }
    );
    return xe.observe(O.current), () => {
      xe.disconnect();
    };
  }, [p]), /* @__PURE__ */ z(Fi, { id: Do, children: [
    /* @__PURE__ */ z(
      zi,
      {
        ref: (xe) => {
          typeof B == "function" ? B(xe) : B && (B.current = xe), te.current = xe;
        },
        onMouseDown: me,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(Ir, { position: "left", ref: O }),
          /* @__PURE__ */ h(Xn, { isLoading: _, position: "left" }),
          /* @__PURE__ */ h(
            Bi,
            {
              ref: P,
              onDragStart: Ge,
              onDragOver: Ne,
              style: { userSelect: L === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(Hi, { ref: A, "aria-hidden": !0 }),
          /* @__PURE__ */ h(pu, { zoom: r, startDate: w }),
          /* @__PURE__ */ h(vu, { zoom: r, startDate: w }),
          /* @__PURE__ */ h(
            vd,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onTileContextMenu: i,
              onDragStart: V,
              isDraggable: j,
              draggingEventId: m,
              separatorRowIndices: v,
              fadingUnitIds: q,
              highlightedSegmentId: (H == null ? void 0 : H.highlightedSegmentId) ?? null,
              focusedUnitIds: (H == null ? void 0 : H.focusedUnitIds) ?? null,
              leavingSegmentIds: (H == null ? void 0 : H.leavingSegmentIds) ?? null,
              ghostProject: (H == null ? void 0 : H.ghostProject) ?? null
            }
          ),
          /* @__PURE__ */ h(Ir, { ref: C, position: "right" }),
          /* @__PURE__ */ h(Xn, { isLoading: _, position: "right" }),
          (L === "dragging" || L === "animating") && /* @__PURE__ */ h(
            Zd,
            {
              draggedEvent: ne,
              ghostPosition: M,
              ghostDimensions: X,
              dropTarget: E,
              isValidDrop: Q,
              dragState: L,
              zoom: r,
              data: n,
              resourceOnly: G,
              separatorRowIndices: v
            }
          ),
          /* @__PURE__ */ h(
            Xd,
            {
              selectionBox: ce,
              isSelecting: J === "selecting"
            }
          ),
          pe && le.length > 0 && /* @__PURE__ */ h(
            uu,
            {
              selections: le,
              data: n,
              zoom: r,
              startDate: w,
              onRemove: be,
              onUpdate: oe,
              separatorRowIndices: v
            }
          )
        ]
      }
    ),
    pe && Ye && le.length > 0 && /* @__PURE__ */ h(
      ou,
      {
        selections: le,
        onConfirm: ve,
        onClear: De,
        onRemove: be
      }
    )
  ] });
}), Ee = (e, r = "12h") => N(e).format(r === "24h" ? "HH:mm" : "h:mm A"), No = (e) => {
  const r = N.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, Fo = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Oe);
    t += o.hours + s, n += r % Oe, n >= Oe && (t++, n -= Oe);
  }), { hours: t, minutes: n };
}, zo = (e, r) => {
  let t = Dr;
  switch (r) {
    case 0:
      t = Qs;
      break;
    case 1:
      t = Dr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = Oe - e.minutes;
    return i === Oe && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, Zi = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const d = N(a.startDate).isoWeek(), l = N(a.startDate).isoWeekday(), y = N(a.endDate).isoWeek(), S = N(a.endDate).isoWeekday(), { hours: v, minutes: $ } = No(a.occupancy);
    if (n === d) {
      const g = (dt + 1 - l) * v, R = (dt + 1 - l) * $;
      return { hours: Math.max(0, g), minutes: R };
    } else if (n === y) {
      const g = S > dt ? dt * v : S * v, R = S > dt ? dt * $ : S * $;
      return { hours: g, minutes: R };
    } else if (N(r).isBetween(a.startDate, a.endDate))
      return { hours: dt * v, minutes: dt * $ };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Fo(o), { free: c, overtime: u } = zo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: u
  };
}, Vi = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: l, minutes: y } = No(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: l, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = Fo(s), { free: u, overtime: a } = zo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: u,
    overtime: a
  };
}, Gi = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const u = N(c.startDate).hour(), a = N(c.endDate).hour(), d = r.hour(), l = N(c.endDate).minute(), y = N(c.startDate).minute();
    u < d && a > d ? t += Oe : u === d && a === d && y && l ? t += l ? l - y : Oe - y : u === d && a >= d ? t += y ? Oe - y : Oe : a === d && l && (t += l);
  });
  const n = Math.floor(t / Oe), o = t % Oe, s = n || o ? 0 : 1, i = n ? 0 : o ? Oe - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Ui = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? N(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? N(t).isBetween(i.startDate, i.endDate, "hour", "[]") : N(i.startDate).isBetween(
    N(t),
    N(t).add(6, "days"),
    "day",
    "[]"
  ) || N(t).isBetween(N(i.startDate), N(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return Vi(s, t, n, o);
    case 2:
      return Gi(s, t);
    default:
      return Zi(s, t, n);
  }
}, Xi = (e, r, t, n, o, s, i = !1, c = "12h") => {
  let u = "weeks", a;
  switch (s) {
    case 0:
      u = "weeks", a = Rt;
      break;
    case 1:
      u = "days", a = Te;
      break;
    case 2:
      u = "hours", a = Re;
      break;
  }
  const d = Math.ceil(s === 2 ? (t.x - 0.5 * a) / a : t.x / a), l = N(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(d - 1, u), y = Math.ceil(t.y / ye), S = n.findIndex((q, B, U) => U.slice(0, B + 1).reduce((p, f) => p + f, 0) >= y), v = s === 2 ? (d + 1) * a : d * a, $ = (y - 1) * ye + ye, g = Ui(
    o[S],
    S,
    l,
    s,
    i
  ), R = N(e.startDate).isSame(N(e.endDate), "day");
  return {
    coords: { x: v, y: $ },
    mouseCoords: t,
    resourceIndex: S,
    disposition: g,
    reservationData: {
      startTime: Ee(e.startDate, c),
      startDate: N(e.startDate).format("MMM D, YYYY"),
      endTime: Ee(e.endDate, c),
      endDate: N(e.endDate).format("MMM D, YYYY"),
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
      isOneDayEvent: R,
      passengers: e.totalPassengers,
      readiness: e.readiness,
      readinessNote: e.readinessNote,
      subcontractConfirmed: e.subcontractConfirmed,
      subcontractDetails: e.subcontractDetails
    }
  };
};
function Ki(e, r) {
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
function Ji(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const d of e)
    !d.isSubcontract && !d.isUnassigned && d.capacity != null && t.add(d.capacity);
  const n = [...t].sort((d, l) => d - l);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Ki(n, o), i = [];
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
  const u = [], a = /* @__PURE__ */ new Map();
  return i.forEach((d, l) => {
    const y = "__auto_cat_" + l, S = d.min === d.max ? d.min + " pax" : d.min + "-" + d.max + " pax";
    u.push({ id: y, name: S, minPassengers: d.min, maxPassengers: d.max });
    for (const v of d.values)
      a.set(v, y);
  }), { categories: u, capacityToCategoryId: a };
}
const qi = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return r.length > n ? (r.forEach((u, a) => {
    const d = {
      id: e[a].id,
      label: e[a].label,
      data: u,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      isUnassigned: e[a].isUnassigned,
      provider: e[a].provider,
      categoryId: e[a].categoryId
    };
    c >= n && (o.push(i), s += i.length, i = [], c = 0), c++, i.push(d);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((u, a) => {
    const d = {
      id: e[a + s].id,
      label: e[a + s].label,
      data: u,
      capacity: e[a + s].capacity,
      isSubcontract: e[a + s].isSubcontract,
      isUnassigned: e[a + s].isUnassigned,
      provider: e[a + s].provider,
      categoryId: e[a + s].categoryId
    };
    i.push(d), a === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((u, a) => {
    const d = {
      id: e[a].id,
      label: e[a].label,
      data: u,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      isUnassigned: e[a].isUnassigned,
      provider: e[a].provider,
      categoryId: e[a].categoryId
    };
    i.push(d);
  }), o.push(i), o);
};
var Bn = {}, Qi = {
  get exports() {
    return Bn;
  },
  set exports(e) {
    Bn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Le, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Qi);
const ea = Bn;
var Hn = {}, ta = {
  get exports() {
    return Hn;
  },
  set exports(e) {
    Hn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Le, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(ta);
const na = Hn, ra = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = N(t.startDate).startOf("day"), u = N(t.endDate).startOf("day"), a = N(o[i].startDate).startOf("day"), d = N(o[i].endDate).startOf("day");
          if (c.isBetween(a, d, null, "[]") || u.isBetween(a, d, null, "[]") || c.isBefore(a, "minute") && u.isAfter(d, "minute") || c.isAfter(a, "minute") && u.isBefore(d, "minute")) {
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
N.extend(ea);
N.extend(na);
const Or = /* @__PURE__ */ new WeakMap(), oa = (e) => {
  const r = Or.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = N(o.startDate), c = N(s.startDate), u = i.startOf("day").diff(c.startOf("day"), "day");
    return u !== 0 ? u : i.diff(c);
  }), n = ra(t);
  return Or.set(e, n), n;
}, sa = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = oa(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, ia = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, aa = (e) => {
  const { recordsThreshold: r } = Je(), [t, n] = he(0), [o, s] = he(0), i = ue(null);
  ge(() => {
    i.current = document.getElementById(it);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: u } = $e(() => sa(e), [e]), a = $e(
    () => qi(e, c, u, r),
    [e, c, r, u]
  ), d = ae(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((g) => g + a[Math.max(o, 0)].length), s((g) => Math.min(g + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), l = ae(() => {
    a[o].length && (n((g) => Math.max(g - a[o - 1].length, 0)), s((g) => Math.max(g - 1, 0)));
  }, [o, a]), y = ae(() => {
    n(0), s(0);
  }, []), S = t + a[o].length, v = $e(
    () => u.slice(t, S),
    [S, u, t]
  ), $ = $e(
    () => c.slice(t, S),
    [S, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: $,
    rowsPerItem: v,
    totalRowsPerPage: ia(a[o]),
    next: d,
    previous: l,
    reset: y
  };
}, ot = "__subcontract__", on = (e) => `${ot}:${e}`, Wn = (e) => {
  const r = [], t = /* @__PURE__ */ new Map();
  for (const o of e) {
    if (!o.provider) {
      r.push(o);
      continue;
    }
    const s = t.get(o.provider.id) ?? { id: o.provider.id, name: o.provider.name, items: [] };
    s.items.push(o), t.set(o.provider.id, s);
  }
  const n = [...t.values()].sort((o, s) => o.name.localeCompare(s.name));
  return { loose: r, providers: n };
};
var jn = {}, ca = {
  get exports() {
    return jn;
  },
  set exports(e) {
    jn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Le, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(ca);
const la = jn;
var Zn = {}, da = {
  get exports() {
    return Zn;
  },
  set exports(e) {
    Zn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(xt);
  })(Le, function(t) {
    function n(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = n(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, S, v) {
      var $ = y + " ";
      switch (v) {
        case "m":
          return S ? "minuta" : "minutę";
        case "mm":
          return $ + (s(y) ? "minuty" : "minut");
        case "h":
          return S ? "godzina" : "godzinę";
        case "hh":
          return $ + (s(y) ? "godziny" : "godzin");
        case "MM":
          return $ + (s(y) ? "miesiące" : "miesięcy");
        case "yy":
          return $ + (s(y) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), u = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(y, S) {
      return a.test(S) ? c[y.month()] : u[y.month()];
    };
    d.s = u, d.f = c;
    var l = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(y) {
      return y + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(l, null, !0), l;
  });
})(da);
const ua = Zn;
var Vn = {}, fa = {
  get exports() {
    return Vn;
  },
  set exports(e) {
    Vn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(xt);
  })(Le, function(t) {
    function n(u) {
      return u && typeof u == "object" && "default" in u ? u : { default: u };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(u, a, d) {
      var l = s[d];
      return Array.isArray(l) && (l = l[a ? 0 : 1]), l.replace("%d", u);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(u) {
      return u + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(fa);
const ha = Vn;
var Gn = {}, pa = {
  get exports() {
    return Gn;
  },
  set exports(e) {
    Gn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(xt);
  })(Le, function(t) {
    function n(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, u = function(d, l) {
      return c.test(l) ? s[d.month()] : i[d.month()];
    };
    u.s = i, u.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: u, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(pa);
const ma = Gn;
var Un = {}, ga = {
  get exports() {
    return Un;
  },
  set exports(e) {
    Un = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(xt);
  })(Le, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(ga);
const ya = Un, va = {
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
  subcontract: "Subcontrato",
  unassigned: "Sin unidad asignada"
}, xa = {
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
  subcontract: "Podwykonawca",
  unassigned: "Nie przypisano pojazdu"
}, ba = {
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
  subcontract: "Subcontract",
  unassigned: "No unit assigned"
}, wa = {
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
  subcontract: "Subunternehmer",
  unassigned: "Kein Fahrzeug zugewiesen"
}, Sa = {
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
  subcontract: "Subrangovas",
  unassigned: "Nepriskirta transporto priemonė"
}, Ca = [
  {
    id: "en",
    lang: ba,
    translateCode: "en-GB",
    dayjsTranslations: la
  },
  {
    id: "pl",
    lang: xa,
    translateCode: "pl-PL",
    dayjsTranslations: ua
  },
  {
    id: "es",
    lang: va,
    translateCode: "es-ES",
    dayjsTranslations: ya
  },
  {
    id: "lt",
    lang: Sa,
    translateCode: "lt-LT",
    dayjsTranslations: ma
  },
  {
    id: "de",
    lang: wa,
    translateCode: "de-DE",
    dayjsTranslations: ha
  }
];
class ka {
  constructor() {
    cr(this, "locales", Ca);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const un = new ka(), Bo = Kn({
  localesData: un.getLocales(),
  currentLocale: un.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Ma = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = he("en"), s = un.getLocales(), i = ae(() => {
    const l = s.find((y) => y.id === n);
    return typeof (l == null ? void 0 : l.dayjsTranslations) == "object" && N.locale(l.dayjsTranslations), l || s[0];
  }, [n, s]), [c, u] = he(i()), a = (l) => {
    localStorage.setItem("locale", l.translateCode), u(l);
  };
  ge(() => {
    t == null || t.forEach((l) => {
      s.find((S) => S.id === l.id) || un.addLocales(l);
    });
  }, [s, t]), ge(() => {
    const l = localStorage.getItem("locale"), y = r ?? l ?? "en";
    localStorage.setItem("locale", y), o(y), u(i());
  }, [i, r]);
  const { Provider: d } = Bo;
  return /* @__PURE__ */ h(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, ht = () => at(Bo).currentLocale.lang, $a = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Da = x.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Ea = x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, _a = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = ht();
  return /* @__PURE__ */ z(Da, { onClick: e, children: [
    /* @__PURE__ */ h($a, {}),
    /* @__PURE__ */ h(Ea, { children: r })
  ] });
}, Ta = x.div`
  position: relative;
  display: flex;
`, Pa = x.div`
  position: relative;
  margin-left: ${Fe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, Aa = x.div`
  width: calc(${({ width: e }) => e}px - ${Fe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Fe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Ia = /* @__PURE__ */ new Set(), Oa = {
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
    reservationType: Gt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function La(e, r) {
  const t = r ? [...r].sort((a, d) => a.maxPassengers - d.maxPassengers) : [], n = [], o = e.filter((a) => a.isUnassigned);
  o.length > 0 && n.push({ type: "unassigned", items: o });
  const s = e.filter((a) => !a.isUnassigned);
  for (const a of t) {
    const d = s.filter(
      (l) => !l.isSubcontract && l.categoryId === a.id
    );
    d.length > 0 && n.push({ type: "category", category: a, items: d });
  }
  const i = t.length > 0, c = s.filter(
    (a) => !a.isSubcontract && (!a.categoryId || !i)
  );
  c.length > 0 && i ? n.push({ type: "uncategorized", items: c }) : c.length > 0 && n.push({ type: "uncategorized", items: c });
  const u = s.filter((a) => a.isSubcontract);
  return u.length > 0 && n.push({ type: "subcontract", items: u }), n;
}
const Ra = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  onTileContextMenu: o,
  onItemClick: s,
  toggleTheme: i,
  topBarWidth: c,
  onEventDrop: u,
  onEventDrag: a,
  draggableConfig: d,
  onTimeRangeSelect: l,
  onMultiTimeRangeSelect: y,
  clickToAddConfig: S
}) => {
  const [v, $] = he(Oa), [g, R] = he(e), [q, B] = he(!1), [U, b] = he(!1), [p, f] = he(""), [_, k] = he(/* @__PURE__ */ new Set()), [w, F] = he(/* @__PURE__ */ new Set()), H = ue([]);
  ge(() => () => H.current.forEach(clearTimeout), []);
  const {
    zoom: P,
    startDate: A,
    isLoading: T,
    config: { includeTakenHoursOnWeekendsInDayView: Z, showTooltip: I, showThemeToggle: C, hourFormat: O }
  } = Je(), te = ue(null), se = ue(null), [W, Y] = he(124), {
    page: L,
    projectsPerPerson: ne,
    rowsPerItem: M,
    currentPageNum: X,
    pagesAmount: E,
    next: Q,
    previous: V,
    reset: j
  } = aa(g), { effectiveCategories: m, effectivePage: G } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: L };
    const ie = Ji(L);
    if (ie.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: L };
    const de = L.map((fe) => {
      if (fe.isSubcontract || fe.isUnassigned || fe.capacity == null)
        return fe;
      const we = ie.capacityToCategoryId.get(fe.capacity);
      return we ? { ...fe, categoryId: we } : fe;
    });
    return { effectiveCategories: ie.categories, effectivePage: de };
  }, [t, L]), D = ae(
    (ie) => {
      if (_.has(ie)) {
        k((fe) => {
          const we = new Set(fe);
          return we.delete(ie), we;
        });
        return;
      }
      if (Ro()) {
        k((fe) => new Set(fe).add(ie));
        return;
      }
      F((fe) => new Set(fe).add(ie));
      const de = setTimeout(() => {
        k((fe) => new Set(fe).add(ie)), F((fe) => {
          const we = new Set(fe);
          return we.delete(ie), we;
        });
      }, 190);
      H.current.push(de);
    },
    [_]
  ), K = $e(() => {
    const ie = [];
    G.some((we) => we.isUnassigned) && ie.push("__unassigned__");
    const de = m ? [...m].sort((we, He) => we.maxPassengers - He.maxPassengers) : [];
    for (const we of de)
      G.some((He) => !He.isSubcontract && He.categoryId === we.id) && ie.push(we.id);
    const fe = G.filter((we) => we.isSubcontract);
    return fe.length > 0 && (ie.push(ot), ie.push(...Wn(fe).providers.map((we) => on(we.id)))), ie;
  }, [m, G]), ee = ae(() => {
    k(/* @__PURE__ */ new Set());
  }, []), J = ae(() => {
    k(new Set(K));
  }, [K]), ce = $e(() => {
    if (w.size === 0)
      return Ia;
    const ie = /* @__PURE__ */ new Set();
    for (const de of G) {
      const fe = de.isUnassigned ? "__unassigned__" : de.isSubcontract ? ot : de.categoryId, we = !!de.provider && w.has(on(de.provider.id));
      (fe && w.has(fe) || we) && ie.add(de.id);
    }
    return ie;
  }, [w, G]), {
    visiblePage: me,
    visibleRowsPerItem: le,
    visibleTotalRows: ve,
    visibleProjectsPerPerson: De,
    separatorRowIndices: be,
    subcontractSeparatorIndex: oe,
    unassignedSeparatorIndex: pe,
    providerSeparatorIndices: Ye
  } = $e(() => {
    const ie = La(G, m), de = ((m == null ? void 0 : m.length) ?? 0) > 0, fe = /* @__PURE__ */ new Map();
    L.forEach((Ae, rt) => fe.set(Ae.id, rt));
    const we = [], He = [], lt = [], Xe = [];
    let kt = 0, pt = -1, Ut = -1;
    const tt = [], nt = (Ae) => {
      for (const rt of Ae) {
        const Mt = fe.get(rt.id) ?? 0, $t = M[Mt];
        we.push(rt), He.push($t), lt.push(ne[Mt]), kt += $t;
      }
    };
    for (const Ae of ie)
      if (Ae.type === "unassigned" || Ae.type === "subcontract" || Ae.type === "category" && de) {
        const Mt = Ae.type === "unassigned" ? "__unassigned__" : Ae.type === "subcontract" ? ot : Ae.category.id, $t = _.has(Mt);
        if (Ae.type === "subcontract" && (pt = Xe.length), Ae.type === "unassigned" && (Ut = Xe.length), Xe.push(kt), $t)
          continue;
        if (Ae.type !== "subcontract") {
          nt(Ae.items);
          continue;
        }
        const { loose: yn, providers: vn } = Wn(Ae.items);
        nt(yn);
        for (const Xt of vn)
          tt.push(Xe.length), Xe.push(kt), _.has(on(Xt.id)) || nt(Xt.items);
      } else
        nt(Ae.items);
    const gn = He.reduce((Ae, rt) => Ae + rt, 0);
    return {
      visiblePage: we,
      visibleRowsPerItem: He,
      visibleTotalRows: gn,
      visibleProjectsPerPerson: lt,
      separatorRowIndices: Xe,
      subcontractSeparatorIndex: pt,
      unassignedSeparatorIndex: Ut,
      providerSeparatorIndices: tt
    };
  }, [G, m, L, _, M, ne]), Ge = $e(
    () => G.reduce(
      (ie, de) => de.isUnassigned ? ie + de.data.reduce((fe, we) => fe + we.length, 0) : ie,
      0
    ),
    [G]
  ), Ne = ue(null), Ct = ue(
    zn(
      (ie, de, fe, we, He, lt, Xe) => {
        if (!te.current)
          return;
        const { tile: kt, segmentId: pt } = _e(ie);
        if (pt && pt === Ne.current)
          return;
        if (Ne.current = null, !pt || !kt) {
          B(!1);
          return;
        }
        const Ut = xe(pt, de), tt = te.current.getBoundingClientRect(), nt = kt.getBoundingClientRect(), gn = { x: ie.clientX - tt.left, y: ie.clientY - tt.top }, Ae = {
          x: ie.clientX - tt.left,
          y: ie.clientY - tt.top
        }, rt = {
          x: nt.left - tt.left,
          y: nt.top - tt.top,
          width: nt.width,
          height: nt.height
        }, {
          coords: { x: Mt, y: $t },
          resourceIndex: yn,
          disposition: vn,
          reservationData: Xt
        } = Xi(
          Ut,
          fe,
          gn,
          we,
          He,
          lt,
          Z,
          Xe
        );
        $({
          coords: { x: Mt, y: $t },
          mouseCoords: Ae,
          resourceIndex: yn,
          disposition: vn,
          reservationData: Xt,
          tileBounds: rt
        }), B(!0);
      },
      4
    )
  ), Qe = ue(
    zn((ie, de) => {
      j(), R(
        ie.map((fe) => ({
          ...fe,
          data: fe.data.filter((we) => {
            const { title: He, description: lt, subtitle: Xe } = we;
            return (He == null ? void 0 : He.toLowerCase().includes(de.toLowerCase())) || (Xe == null ? void 0 : Xe.toLowerCase().includes(de.toLowerCase())) || (lt == null ? void 0 : lt.toLowerCase().includes(de.toLowerCase()));
          })
        })).filter((fe) => fe.data.length > 0)
      );
    }, 500)
  ), xe = (ie, de) => {
    if (ie)
      return de.flatMap((fe) => fe.data).find((fe) => fe.segmentId === ie);
  }, _e = (ie) => {
    if (!ie.target)
      return { tile: null, segmentId: null };
    const de = ie.target.closest("[data-segment-id]");
    return de ? { tile: de, segmentId: de.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, Be = (ie) => {
    const de = ie.target.value;
    f(de), Qe.current.cancel(), de ? Qe.current(e, de) : (j(), R(e));
  }, Pe = ae(() => {
    Ct.current.cancel(), B(!1);
  }, []), et = ae(
    (ie, de) => {
      Ne.current = String(ie.segmentId), Pe(), o == null || o(ie, de);
    },
    [Pe, o]
  );
  return ge(() => {
    const ie = (fe) => Ct.current(
      fe,
      e,
      A,
      le,
      De,
      P,
      O ?? "12h"
    ), de = te.current;
    if (de)
      return de.addEventListener("mousemove", ie), de.addEventListener("mouseleave", Pe), () => {
        de.removeEventListener("mousemove", ie), de.removeEventListener("mouseleave", Pe);
      };
  }, [
    Ct,
    Pe,
    De,
    le,
    A,
    P,
    O,
    e
  ]), ge(() => {
    p ? (Qe.current.cancel(), Qe.current(e, p)) : R(e);
  }, [e, p]), fn(() => {
    const ie = se.current;
    if (!ie)
      return;
    const de = () => Y(ie.offsetHeight);
    de();
    const fe = new ResizeObserver(de);
    return fe.observe(ie), () => fe.disconnect();
  }, []), /* @__PURE__ */ z(Ta, { children: [
    /* @__PURE__ */ h(
      dl,
      {
        headerHeight: W,
        data: G,
        categories: m,
        pageNum: X,
        pagesAmount: E,
        rows: M,
        onLoadNext: Q,
        onLoadPrevious: V,
        searchInputValue: p,
        onSearchInputChange: Be,
        onItemClick: s,
        collapsedGroups: _,
        fadingGroups: w,
        onToggleGroup: D,
        allGroupIds: K,
        onExpandAll: ee,
        onCollapseAll: J,
        unassignedCount: Ge
      }
    ),
    /* @__PURE__ */ z(Pa, { children: [
      /* @__PURE__ */ h(
        Wl,
        {
          ref: se,
          zoom: P,
          topBarWidth: c,
          showThemeToggle: C,
          toggleTheme: i
        }
      ),
      e.length ? /* @__PURE__ */ h(
        ji,
        {
          data: me,
          baseData: r || e,
          zoom: P,
          rows: ve,
          ref: te,
          onTileClick: n,
          onTileContextMenu: o && et,
          onEventDrop: u,
          onEventDrag: a,
          draggableConfig: d,
          onDragStateChange: b,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: y,
          clickToAddConfig: S,
          separatorRowIndices: be,
          subcontractSeparatorIndex: oe,
          warningSeparatorIndex: Ge > 0 ? pe : -1,
          providerSeparatorIndices: Ye,
          fadingUnitIds: ce
        }
      ) : /* @__PURE__ */ h(Aa, { width: c, children: T ? /* @__PURE__ */ h(Xn, { isLoading: T, position: "left" }) : /* @__PURE__ */ h(_a, {}) }),
      I && /* @__PURE__ */ h(Id, { tooltipData: v, visible: q && !U })
    ] })
  ] });
}, Ya = x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Fe + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.mode === "dark" ? e.colors.primary : "#fff"};
`, Lr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, Na = x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, Fa = x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, Rr = x.button`
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
`, za = x.button`
  font-size: 13px;
  font-weight: 700;
  color: #184546;
  border: 1px solid #c8d5cd;
  background: #fff;
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  &:hover {
    background: ${({ theme: e }) => e.colors.hover};
  }
`, Ba = x.div`
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
    background: #5c8374;
    color: #fff;
  }
`, Yr = x.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 650;
  color: ${({ $primary: e }) => e ? "#fff" : "#3a4c46"};
  border: 1px solid ${({ $primary: e }) => e ? "transparent" : "#c8d5cd"};
  background: ${({ $primary: e }) => e ? "#5c8374" : "#fff"};
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
`, Ha = x.label`
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
`, Wa = x.span`
  background: #5c8374;
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
`, Ft = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), ja = () => {
  var r, t;
  const e = document.getElementById(To);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Za = () => {
  const {
    config: e,
    zoom: r,
    handleGoNext: t,
    handleGoPrev: n,
    handleGoToday: o,
    setZoom: s,
    goToDate: i,
    toggleDisplayActiveUnits: c,
    toolbarActions: u
  } = Je(), { filterButtonState: a = -1 } = e;
  return /* @__PURE__ */ z(Ya, { width: 0, children: [
    /* @__PURE__ */ z(Lr, { $at: "start", children: [
      /* @__PURE__ */ z(Fa, { children: [
        /* @__PURE__ */ h(Rr, { onClick: n, "aria-label": "Anterior", children: /* @__PURE__ */ h(Ft, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h(za, { onClick: o, children: "Hoy" }),
        /* @__PURE__ */ h(Rr, { onClick: t, "aria-label": "Siguiente", children: /* @__PURE__ */ h(Ft, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      e.showViewSwitcher !== !1 && /* @__PURE__ */ z(Ie, { children: [
        /* @__PURE__ */ h(Na, {}),
        /* @__PURE__ */ z(Ba, { children: [
          /* @__PURE__ */ h("button", { className: r === 2 ? "on" : "", onClick: () => s(2), children: "Día" }),
          /* @__PURE__ */ h("button", { className: r === 0 ? "on" : "", onClick: () => s(0), children: "Semana" }),
          /* @__PURE__ */ h("button", { className: r === 1 ? "on" : "", onClick: () => s(1), children: "Mes" })
        ] })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ z(Ha, { children: [
        /* @__PURE__ */ z(Ft, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h(
          "input",
          {
            type: "date",
            onClick: (d) => {
              var l, y;
              try {
                (y = (l = d.currentTarget).showPicker) == null || y.call(l);
              } catch {
              }
            },
            onChange: (d) => d.target.value && i(d.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ z(Lr, { $at: "end", children: [
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ z(Yr, { $primary: !!a, onClick: c, children: [
        /* @__PURE__ */ h(Ft, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(Wa, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ z(Yr, { onClick: ja, children: [
        /* @__PURE__ */ h(Ft, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      u
    ] })
  ] });
}, Va = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ga = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Ua = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Xa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Ka = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ja = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), qa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Qa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), ec = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), tc = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), nc = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), rc = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), oc = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), sc = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), ic = {
  add: Va,
  subtract: Ga,
  filter: Ua,
  arrowLeft: Xa,
  arrowRight: Ka,
  defaultAvatar: Ja,
  calendarWarning: qa,
  calendarFree: Qa,
  arrowDown: tc,
  arrowUp: ec,
  search: nc,
  close: rc,
  moon: oc,
  sun: sc
}, Sn = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = hn(), i = ic[e];
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
}, ac = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => ac(e, r, t)}
`;
const cc = x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${_o}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ze};
`, lc = x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, dc = x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, uc = x.div`
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
`, fc = x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, hc = x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, pc = x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`, mc = x.div`
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
`, gc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, yc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, vc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, xc = x.div`
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
`, Nr = "#cdd8d2", Fr = [178, 216, 195], bc = [15, 125, 102], wc = (e) => {
  const r = Math.min(1, Math.max(0, e)), t = (n) => Math.round(Fr[n] + (bc[n] - Fr[n]) * r);
  return `rgb(${t(0)}, ${t(1)}, ${t(2)})`;
}, Sc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Je(), s = ht(), i = ue(null), [c, u] = he(null), a = $e(
    () => Array.from({ length: 12 }, (k, w) => N().month(w).format("MMM").toUpperCase()),
    [s]
  ), d = $e(() => N().startOf("day"), []), { domainStart: l, domainEnd: y, domainDays: S } = $e(() => {
    const k = d.subtract(3, "month").startOf("month"), w = d.add(9, "month").endOf("month");
    return { domainStart: k, domainEnd: w, domainDays: w.diff(k, "day") + 1 };
  }, [d]), v = (k) => k.diff(l, "day") / S * 100, $ = (k) => Math.min(100, Math.max(0, k)), g = $e(() => {
    const k = [];
    let w = l.startOf("month");
    for (; w.isBefore(y); )
      k.push(w), w = w.add(1, "month");
    return k;
  }, [l, y]), R = o == null ? void 0 : o.yearCounts, q = $e(() => {
    const k = Math.ceil(S / 7), w = new Array(k).fill(0), F = (C) => {
      const O = C.diff(l, "day");
      return O < 0 || O >= S ? -1 : Math.floor(O / 7);
    };
    if (R && R.length)
      for (const C of R) {
        const O = F(N(C.date));
        O >= 0 && (w[O] += C.count);
      }
    else
      for (const C of t ?? [])
        for (const O of C.data ?? []) {
          const te = F(N(O.startDate));
          te >= 0 && (w[te] += 1);
        }
    const H = Math.max(0, ...w);
    if (H <= 0)
      return w.map(() => ({ h: 0, color: Nr }));
    const P = w.filter((C) => C > 0).sort((C, O) => C - O), A = P.length >> 1, T = P.length % 2 ? P[A] : (P[A - 1] + P[A]) / 2, Z = T > 0 ? H / T : 1, I = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, Z)))));
    return w.map(
      (C) => C > 0 ? { h: Math.min(100, 100 * Math.pow(C / H, I)), color: wc(C / H) } : { h: 0, color: Nr }
    );
  }, [t, R, l, S]), B = v(d), U = (k) => {
    const { startDate: w, endDate: F } = mn(k, r), H = $(v(w));
    return { left: H, width: $(v(F)) - H, startDate: w, endDate: F };
  }, b = U(e), p = c ? U(c.d) : null, f = (k) => `${k.date()} ${a[k.month()]}`, _ = (k) => {
    var H;
    const w = (H = i.current) == null ? void 0 : H.getBoundingClientRect();
    if (!w)
      return null;
    const F = Math.min(1, Math.max(0, (k - w.left) / w.width));
    return { f: F, d: l.add(Math.round(F * (S - 1)), "day") };
  };
  return /* @__PURE__ */ z(cc, { children: [
    /* @__PURE__ */ z(lc, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ z(
      dc,
      {
        ref: i,
        onClick: (k) => {
          const w = _(k.clientX);
          w && n(w.d.toDate());
        },
        onMouseMove: (k) => {
          const w = _(k.clientX);
          w && u({ left: w.f * 100, d: w.d });
        },
        onMouseLeave: () => u(null),
        children: [
          /* @__PURE__ */ h(uc, { children: g.map((k, w) => /* @__PURE__ */ h("span", { style: { left: `${v(k)}%` }, children: w === 0 || k.month() === 0 ? `${a[k.month()]} ${k.format("YY")}` : a[k.month()] }, w)) }),
          g.map(
            (k, w) => w === 0 ? null : /* @__PURE__ */ h(fc, { style: { left: `${v(k)}%` } }, w)
          ),
          /* @__PURE__ */ h(hc, { children: q.map((k, w) => /* @__PURE__ */ h(pc, { style: { height: `${k.h}%`, background: k.color } }, w)) }),
          /* @__PURE__ */ h(gc, { style: { left: `${b.left}%`, width: `${b.width}%` } }),
          /* @__PURE__ */ h(mc, { style: { left: `${$(B)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && p && /* @__PURE__ */ z(Ie, { children: [
            /* @__PURE__ */ h(yc, { style: { left: `${p.left}%`, width: `${p.width}%` } }),
            /* @__PURE__ */ h(vc, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(xc, { style: { left: `${c.left}%` }, children: `Ir a ${f(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, Ho = Kn(/* @__PURE__ */ new Map()), Cc = () => at(Ho), kc = 10500, Mc = 60, $c = 600, Dc = (e) => {
  var u;
  const r = document.getElementById(it), t = r == null ? void 0 : r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);
  if (!r || !t)
    return !1;
  const n = r.getBoundingClientRect(), o = (u = document.getElementById($o)) == null ? void 0 : u.getBoundingClientRect(), s = t.getBoundingClientRect(), i = Math.max((o == null ? void 0 : o.bottom) ?? n.top, n.top, 0), c = Math.min(n.bottom, window.innerHeight);
  return s.width > 0 && s.right > n.left + Fe && s.left < n.right && s.bottom > i && s.top < c;
}, Ec = () => {
  const [e, r] = he(() => /* @__PURE__ */ new Map()), t = ue(0), n = ue(/* @__PURE__ */ new Set());
  ge(() => {
    const s = n.current;
    return () => s.forEach(clearTimeout);
  }, []);
  const o = ae((s) => {
    const i = s.filter((d) => Dc(d.segmentId));
    if (!i.length)
      return [];
    const c = ++t.current, u = new Map(
      i.map((d, l) => [
        d.segmentId,
        { kind: d.kind, key: c, delayMs: Math.min(l * Mc, $c) }
      ])
    );
    r((d) => new Map([...Array.from(d), ...Array.from(u)]));
    const a = setTimeout(() => {
      n.current.delete(a), r((d) => {
        const l = new Map(d);
        return u.forEach((y, S) => {
          var v;
          ((v = l.get(S)) == null ? void 0 : v.key) === c && l.delete(S);
        }), l;
      });
    }, kc);
    return n.current.add(a), i.map((d) => d.segmentId);
  }, []);
  return { pulses: e, pulseTiles: o };
}, _c = x.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Tc = x.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? _o : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Pc = x.div`
  position: relative;
`, Ac = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  onTileContextMenu: o,
  topBarWidth: s,
  onItemClick: i,
  toggleTheme: c,
  onEventDrop: u,
  onEventDrag: a,
  draggableConfig: d,
  schedulerRef: l,
  onTimeRangeSelect: y,
  onMultiTimeRangeSelect: S,
  clickToAddConfig: v
}) => {
  const { goToDate: $, handleGoToday: g, zoomIn: R, zoomOut: q, zoom: B } = Je(), { pulses: U, pulseTiles: b } = Ec();
  return lo(
    l,
    () => ({
      goToDate: $,
      goToToday: g,
      setZoom: (p) => {
        if (!Io(p))
          return;
        const f = p - B;
        if (f > 0)
          for (let _ = 0; _ < f; _++)
            R();
        else
          for (let _ = 0; _ < Math.abs(f); _++)
            q();
      },
      pulseTiles: b
    }),
    [$, g, B, R, q, b]
  ), /* @__PURE__ */ h(Ho.Provider, { value: U, children: /* @__PURE__ */ h(
    Ra,
    {
      data: e,
      baseData: r,
      categories: t,
      onTileClick: n,
      onTileContextMenu: o,
      topBarWidth: s,
      onItemClick: i,
      toggleTheme: c,
      onEventDrop: u,
      onEventDrag: a,
      draggableConfig: d,
      onTimeRangeSelect: y,
      onMultiTimeRangeSelect: S,
      clickToAddConfig: v
    }
  ) });
}, Cu = Jn(function({
  data: r,
  categories: t,
  baseData: n,
  config: o,
  startDate: s,
  onRangeChange: i,
  onTileClick: c,
  onTileContextMenu: u,
  handleToggleDisplayActiveUnits: a,
  onClearFilterData: d,
  toolbarActions: l,
  onItemClick: y,
  isLoading: S,
  onEventDrop: v,
  onEventDrag: $,
  draggableConfig: g,
  onTimeRangeSelect: R,
  onMultiTimeRangeSelect: q,
  clickToAddConfig: B
}, U) {
  var I;
  const b = $e(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      hourFormat: "12h",
      showTooltip: !0,
      showTopbar: !0,
      showLegend: !0,
      translations: void 0,
      ...o
    }),
    [o]
  ), p = ue(null), f = ue(null), [_, k] = he((I = p.current) == null ? void 0 : I.clientWidth), w = $e(() => N(s), [s]), [F, H] = he(b.defaultTheme ?? "light"), P = () => {
    H(F === "light" ? "dark" : "light");
  }, A = F === "light" ? Xs : Ks, T = b.theme ? b.theme[A.mode] : {}, Z = {
    ...A,
    colors: {
      ...A.colors,
      ...T
    }
  };
  return lo(
    U,
    () => ({
      goToDate: (C) => {
        var O;
        return (O = f.current) == null ? void 0 : O.goToDate(C);
      },
      goToToday: () => {
        var C;
        return (C = f.current) == null ? void 0 : C.goToToday();
      },
      setZoom: (C) => {
        var O;
        return (O = f.current) == null ? void 0 : O.setZoom(C);
      },
      pulseTiles: (C) => {
        var O;
        return ((O = f.current) == null ? void 0 : O.pulseTiles(C)) ?? [];
      }
    }),
    []
  ), fn(() => {
    const C = () => {
      p.current && k(p.current.clientWidth);
    };
    C(), window.addEventListener("resize", C);
    let O;
    const te = p.current;
    return te && typeof ResizeObserver < "u" && (O = new ResizeObserver(C), O.observe(te)), () => {
      window.removeEventListener("resize", C), O == null || O.disconnect();
    };
  }, []), /* @__PURE__ */ z(Ie, { children: [
    /* @__PURE__ */ h(Us, {}),
    /* @__PURE__ */ h(js, { theme: Z, children: /* @__PURE__ */ h(Ma, { lang: b.lang, translations: b.translations, children: /* @__PURE__ */ h(
      Li,
      {
        data: r,
        isLoading: !!S,
        config: b,
        onRangeChange: i,
        defaultStartDate: w,
        handleToggleDisplayActiveUnits: a,
        onClearFilterData: d,
        toolbarActions: l,
        children: /* @__PURE__ */ z(_c, { id: To, children: [
          /* @__PURE__ */ h(
            Tc,
            {
              showScroll: !!r.length,
              $footer: b.showOverview !== !1 && !!r.length,
              id: it,
              ref: p,
              children: /* @__PURE__ */ h(Pc, { children: /* @__PURE__ */ h(
                Ac,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  onTileContextMenu: u,
                  topBarWidth: _ ?? 0,
                  onItemClick: y,
                  toggleTheme: P,
                  onEventDrop: v,
                  onEventDrag: $,
                  draggableConfig: g,
                  schedulerRef: f,
                  onTimeRangeSelect: R,
                  onMultiTimeRangeSelect: q,
                  clickToAddConfig: B
                }
              ) })
            }
          ),
          b.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(Sc, {})
        ] })
      }
    ) }) })
  ] });
}), Ic = x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, Oc = x.button`
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
`, Lc = x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Rc = x.p`
  ${Nt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, zr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = ht(), u = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(Ic, { intent: e, children: /* @__PURE__ */ z(Oc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(Lc, { children: t }),
    /* @__PURE__ */ h(Rc, { children: u })
  ] }) });
}, Yc = x.div`
  min-width: ${Fe + "px"};
  max-width: ${Fe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Nc = x.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({ $height: e }) => e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Fe}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Fc = x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, zc = x.input`
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
`, Bc = x.div`
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
`, Hc = Ve`
  from { opacity: 1; }
  to { opacity: 0; }
`, Qt = x.div`
  ${({ $fading: e }) => e && bt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Hc} 180ms ease forwards;
      }
    `}
`, Wc = x.button`
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
`, jc = Ve`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, Zc = x.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem ${({ $nested: e }) => e ? "1.75rem" : "1rem"};
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
    animation: ${jc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Vc = x.div`
  display: flex;
  align-items: center;
`, Gc = x.div`
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
`, Uc = x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Xc = x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Br = x.p`
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
`, Kc = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`, Jc = x.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  flex: none;
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.accent};
  background: ${({ theme: e }) => e.colors.accent + "1A"};
  padding: 1px 6px;
  border-radius: 5px;
  & svg {
    width: 11px;
    height: 11px;
  }
`, qc = x.span`
  min-width: 0;
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({ theme: e }) => e.colors.placeholder};
  border: 1px solid ${({ theme: e }) => e.colors.border};
  padding: 1px 6px;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Qc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), el = () => /* @__PURE__ */ z("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: [
  /* @__PURE__ */ h("circle", { cx: "9", cy: "8", r: "3.2" }),
  /* @__PURE__ */ h("path", { d: "M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z" }),
  /* @__PURE__ */ h("circle", { cx: "16.8", cy: "8.6", r: "2.5" }),
  /* @__PURE__ */ h("path", { d: "M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8" })
] }), tl = () => /* @__PURE__ */ z("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), nl = () => /* @__PURE__ */ z("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), rl = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o, nested: s }) => /* @__PURE__ */ h(
  Zc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    $nested: s,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ z(Vc, { children: [
      /* @__PURE__ */ h(Gc, { $provider: o, children: Qc(r.icon) ? /* @__PURE__ */ h(Uc, { src: r.icon, alt: "" }) : o && !s ? /* @__PURE__ */ h(nl, {}) : /* @__PURE__ */ h(tl, {}) }),
      /* @__PURE__ */ z(Xc, { children: [
        /* @__PURE__ */ h(Br, { isMain: !0, children: r.title }),
        r.capacity != null || r.plate ? /* @__PURE__ */ z(Kc, { children: [
          r.capacity != null && /* @__PURE__ */ z(Jc, { title: `${r.capacity} pasajeros`, children: [
            /* @__PURE__ */ h(el, {}),
            r.capacity
          ] }),
          r.plate && /* @__PURE__ */ h(qc, { title: r.plate, children: r.plate })
        ] }) : r.subtitle && /* @__PURE__ */ h(Br, { children: r.subtitle })
      ] })
    ] })
  }
), ol = Ve`
  0% { box-shadow: 0 0 0 0 var(--attention-ring); }
  70%, 100% { box-shadow: 0 0 0 5px transparent; }
`, gt = (e, r, t) => {
  const { unassignedBorder: n, unassignedText: o, subcontractBorder: s, subcontractText: i, subcontractBg: c } = e.colors;
  return t === "warning" ? {
    text: o,
    bg: n + "26",
    edge: n,
    bottom: n + "66",
    hover: n + "38"
  } : r === "subcontract" ? {
    text: i,
    bg: s + "24",
    edge: s,
    bottom: s,
    hover: s + "33"
  } : r === "provider" ? {
    text: i,
    bg: s + "2E",
    edge: s,
    bottom: s + "55",
    hover: s + "40"
  } : { text: "#5C8374", bg: "#E9EFEC", edge: "transparent", bottom: "#D4DFD9", hover: "#DAE6E0" };
}, sl = x.div`
  display: flex;
  align-items: center;
  gap: ${({ $tone: e }) => e ? "4px" : "5px"};
  padding: ${({ $tone: e, $variant: r }) => e ? "0 7px 0 9px" : r === "provider" ? "0 11px 0 20px" : "0 11px 0 9px"};
  height: 21px;
  color: ${({ theme: e, $variant: r, $tone: t }) => gt(e, r, t).text};
  background: ${({ theme: e, $variant: r, $tone: t }) => gt(e, r, t).bg};
  border-left: 3px solid ${({ theme: e, $variant: r, $tone: t }) => gt(e, r, t).edge};
  border-top: ${({ theme: e, $variant: r }) => r === "provider" ? `1px solid ${e.colors.subcontractBorder}` : "none"};
  border-bottom: 1px solid ${({ theme: e, $variant: r, $tone: t }) => gt(e, r, t).bottom};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: r, $tone: t }) => gt(e, r, t).hover};
  }
`, il = x.span`
  font-size: ${({ $variant: e }) => e === "provider" ? "10.5px" : "9.5px"};
  font-weight: ${({ $variant: e }) => e === "provider" ? 700 : 750};
  letter-spacing: ${({ $tone: e, $variant: r }) => e ? "0.03em" : r === "provider" ? "0.01em" : "0.07em"};
  text-transform: ${({ $variant: e }) => e === "provider" ? "none" : "uppercase"};
  color: ${({ theme: e, $variant: r, $tone: t }) => gt(e, r, t).text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, al = x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => gt(e, r).text};
  flex-shrink: 0;
`, cl = x.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 15px;
  padding: 0 5px 0 4px;
  border-radius: 8px;
  font-size: 9.5px;
  font-weight: 750;
  line-height: 1;
  flex-shrink: 0;
  color: ${({ theme: e, $tone: r }) => r === "warning" ? e.mode === "dark" ? "#1C1917" : "#FFFFFF" : "#2E8B63"};
  background: ${({ theme: e, $tone: r }) => r === "warning" ? e.mode === "dark" ? e.colors.unassignedBorder : e.colors.unassignedText : "#2E8B6324"};
  --attention-ring: ${({ theme: e }) => e.colors.unassignedBorder}99;
  ${({ $pulse: e }) => e && bt`
      animation: ${ol} 1.8s ease-out infinite;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
`, ll = x.div`
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
`, en = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => {
  const s = o === "unassigned" ? r === 0 ? "ok" : "warning" : void 0;
  return /* @__PURE__ */ z(sl, { $variant: o, $tone: s, onClick: n, title: e, children: [
    /* @__PURE__ */ h(ll, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
      "path",
      {
        d: "M3 4.5L6 7.5L9 4.5",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }),
    /* @__PURE__ */ h(il, { $variant: o, $tone: s, children: e }),
    s ? /* @__PURE__ */ z(cl, { $tone: s, $pulse: s === "warning" && t, children: [
      /* @__PURE__ */ h("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: s === "ok" ? /* @__PURE__ */ h(
        "path",
        {
          d: "M2.5 6.5L5 9L9.5 3.5",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ) : /* @__PURE__ */ z(Ie, { children: [
        /* @__PURE__ */ h("path", { d: "M6 1.5L11 10.5H1L6 1.5Z", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" }),
        /* @__PURE__ */ h("path", { d: "M6 5V7.2", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
        /* @__PURE__ */ h("circle", { cx: "6", cy: "8.9", r: "0.75", fill: "currentColor" })
      ] }) }),
      r
    ] }) : /* @__PURE__ */ h(al, { $variant: o, children: r })
  ] });
}, dl = ({
  data: e,
  categories: r,
  headerHeight: t,
  rows: n,
  onLoadNext: o,
  onLoadPrevious: s,
  pageNum: i,
  pagesAmount: c,
  searchInputValue: u,
  onSearchInputChange: a,
  onItemClick: d,
  collapsedGroups: l,
  fadingGroups: y,
  onToggleGroup: S,
  allGroupIds: v,
  onExpandAll: $,
  onCollapseAll: g,
  unassignedCount: R
}) => {
  const [q, B] = he(!1), U = ht(), b = () => B((C) => !C), p = r ? [...r].sort((C, O) => C.maxPassengers - O.maxPassengers) : [], f = p.length > 0, _ = v.length > 0, k = _ && l.size === v.length;
  _ && l.size;
  const w = e.filter((C) => C.isUnassigned), F = U.unassigned ?? "No unit assigned", H = e.filter((C) => C.isSubcontract), P = U.subcontract ?? "Subcontract", A = Wn(H), T = (C) => {
    const O = e.indexOf(C);
    return /* @__PURE__ */ h(
      rl,
      {
        id: C.id,
        item: C.label,
        rows: n[O],
        onItemClick: d,
        isSubcontract: C.isSubcontract,
        nested: !!C.provider
      },
      C.id
    );
  }, Z = (C) => {
    const O = e.filter(
      (Y) => !Y.isSubcontract && Y.categoryId === C.id
    );
    if (O.length === 0)
      return null;
    const te = l.has(C.id), se = y.has(C.id), W = C.name;
    return /* @__PURE__ */ z("div", { children: [
      /* @__PURE__ */ h(
        en,
        {
          label: W,
          count: O.length,
          isCollapsed: te || se,
          onToggle: () => S(C.id),
          variant: "category"
        }
      ),
      !te && /* @__PURE__ */ h(Qt, { $fading: se, children: O.map(T) })
    ] }, C.id);
  }, I = e.filter(
    (C) => !C.isSubcontract && !C.isUnassigned && (!C.categoryId || !f)
  );
  return /* @__PURE__ */ z(Yc, { children: [
    /* @__PURE__ */ z(Nc, { $height: t, children: [
      /* @__PURE__ */ z(Fc, { children: [
        /* @__PURE__ */ z(Bc, { isFocused: q, children: [
          /* @__PURE__ */ h(
            zc,
            {
              placeholder: U.search,
              value: u,
              onChange: a,
              onFocus: b,
              onBlur: b
            }
          ),
          /* @__PURE__ */ h(Sn, { iconName: "search" })
        ] }),
        _ && /* @__PURE__ */ h(
          Wc,
          {
            title: k ? "Expand all" : "Collapse all",
            onClick: k ? $ : g,
            $allCollapsed: k,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: k ? /* @__PURE__ */ z(Ie, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ z(Ie, { children: [
              /* @__PURE__ */ h("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ h(
        zr,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ h(Sn, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    w.length > 0 && /* @__PURE__ */ z(Ie, { children: [
      /* @__PURE__ */ h(
        en,
        {
          label: F,
          count: R,
          isCollapsed: l.has("__unassigned__") || y.has("__unassigned__"),
          onToggle: () => S("__unassigned__"),
          variant: "unassigned"
        }
      ),
      !l.has("__unassigned__") && /* @__PURE__ */ h(Qt, { $fading: y.has("__unassigned__"), children: w.map(T) })
    ] }),
    f ? p.map(Z) : I.map(T),
    f && I.length > 0 && I.map(T),
    H.length > 0 && /* @__PURE__ */ z(Ie, { children: [
      /* @__PURE__ */ h(
        en,
        {
          label: P,
          count: H.length,
          isCollapsed: l.has(ot) || y.has(ot),
          onToggle: () => S(ot),
          variant: "subcontract"
        }
      ),
      !l.has(ot) && /* @__PURE__ */ z(Qt, { $fading: y.has(ot), children: [
        A.loose.map(T),
        A.providers.map((C) => {
          const O = on(C.id);
          return /* @__PURE__ */ z("div", { children: [
            /* @__PURE__ */ h(
              en,
              {
                label: C.name,
                count: C.items.length,
                isCollapsed: l.has(O) || y.has(O),
                onToggle: () => S(O),
                variant: "provider"
              }
            ),
            !l.has(O) && /* @__PURE__ */ h(Qt, { $fading: y.has(O), children: C.items.map(T) })
          ] }, O);
        })
      ] })
    ] }),
    /* @__PURE__ */ h(
      zr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(Sn, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, ul = x.div`
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
`, fl = Ve`
from{
    left: -100%;
}
to{
    left: 100%;
}`, hl = x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${fl} 1s infinite;
`, pl = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(ul, { position: r, children: /* @__PURE__ */ h(hl, {}) }) : null, Xn = pl, ct = (e, r) => {
  const {
    ctx: t,
    x: n,
    y: o,
    width: s,
    height: i,
    textYPos: c,
    label: u,
    font: a,
    isBottomRow: d,
    fillStyle: l,
    topText: y,
    bottomText: S,
    strokeStyle: v,
    labelBetweenCells: $
  } = e;
  t.beginPath();
  const g = v ?? (r.mode === "dark" ? r.colors.border : "#E4EAE7");
  if (t.strokeStyle = g, t.setLineDash([]), u && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), $ ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : (t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke()), t.font = a;
    const R = n + s / 2 - t.measureText(u).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.mode === "dark" ? r.colors.textPrimary : "#184546", t.fillText(u, R, c);
  }
  if (d && l && y && S) {
    t.fillStyle = l, t.fillRect(n, o, s, i), t.beginPath(), t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke(), t.font = y.font;
    const R = n + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, R, y.y), t.font = S.font;
    const q = n + s / 2 - t.measureText(S.label).width / 2;
    t.fillStyle = S.color, t.fillText(S.label, q, S.y);
  }
}, ml = (e, r, t, n, o = St) => {
  const s = qe + o, i = s + 13, c = s + 27;
  let u = 0;
  for (let a = 0; a < r; a++) {
    const d = Ao(
      N(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    ), l = d.isCurrentDay;
    if (ct(
      {
        ctx: e,
        x: u,
        y: s,
        width: Te,
        height: Pt,
        isBottomRow: !0,
        // Day headers stay UNIFORM across the week — weekends get no header tint (artifact: only the grid BODY washes
        // weekends, the header row never does). Today keeps its opaque currentDay fill so scrolling events don't bleed
        // through the HOY cell.
        fillStyle: l ? n.colors.currentDay : n.colors.gridBackground,
        // Reimagined hierarchy (artifact): the weekday name is the small muted label, the date number is the large
        // bold teal figure — the inverse of the old 14px-name / 10px-number. The trailing locale period is stripped.
        topText: {
          y: i,
          label: l ? "" : d.dayName.replace(/\./g, "").toUpperCase(),
          font: `600 10px ${Ze}`,
          color: n.mode === "dark" ? n.colors.placeholder : "#74897F"
        },
        bottomText: {
          y: c,
          label: `${d.dayOfMonth}`,
          font: l ? `700 12px ${Ze}` : `700 13px ${Ze}`,
          color: l ? n.colors.today : n.mode === "dark" ? n.colors.textPrimary : "#184546"
        }
      },
      n
    ), l) {
      const v = u + Te / 2, $ = i - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(v - 30 / 2, $, 30, 13, 5) : e.rect(v - 30 / 2, $, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${Ze}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", v, $ + 13 / 2 + 0.5), e.restore();
    }
    u += Te;
  }
}, gl = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Ue;
  const s = qe;
  let c = t.month;
  for (let u = 0; u < r; u++) {
    c >= Mo && (c = 0);
    const a = Po(t, u) * Ue;
    ct(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: St,
        textYPos: Eo,
        label: N().month(c).format("MMMM").toUpperCase(),
        font: ft.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, yl = " ".repeat(98), vl = (e, r, t) => {
  const o = N(`${r.year}-${r.month + 1}-${r.dayOfMonth}`);
  let s = -r.dayOfMonth * Te + Te;
  for (let i = 0; i < Mo; i++) {
    const c = o.add(i, "months"), u = c.daysInMonth() * Te, a = c.format("MMMM YYYY").toUpperCase();
    ct(
      {
        ctx: e,
        x: s,
        y: 0,
        width: u,
        height: qe,
        textYPos: rr,
        label: `${a}${yl}${a}`,
        font: `800 12px ${Ze}`
      },
      t
    ), s += u;
  }
}, xl = (e, r, t, n) => {
  const o = 7 * Te, s = qe, i = e.canvas.width / o + o, c = r.weekOfYear;
  let u = 0;
  for (let a = 0; a < i; a++) {
    const d = N(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let l = (c + a) % $r;
    l <= 0 && (l += $r), d !== 1 && a === 0 && (u = -d * Te + Te), ct(
      {
        ctx: e,
        x: u,
        y: s,
        width: o,
        height: St,
        textYPos: Eo,
        label: `${t.toUpperCase()} ${l}`,
        font: ft.middleRow
      },
      n
    ), u += o;
  }
}, bl = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, wl = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Sl = (e, r, t, n, o) => {
  const s = ln - Pt / 1.6, i = ln - Pt / 4.5, c = qe + St;
  let u = 0;
  for (let a = 0; a < r; a++) {
    const d = N(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), l = d.isSame(N(), "week");
    ct(
      {
        ctx: e,
        x: u,
        y: c,
        width: Rt,
        height: Pt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: l ? o.colors.today + "26" : bl({ isCurrent: l, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: l ? `700 14px ${Ze}` : ft.bottomRow.name,
          color: l ? o.colors.today : wl({ isCurrent: l }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: ft.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), u += Rt;
  }
}, Cl = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, u = 0, a = (_r(s) - t + 1) * Ue, d = 0;
  for (; c + d <= i; )
    u > 0 && (a = _r(s + u) * Ue), d + a > i && u > 0 && (a = Math.ceil((i - d) / Ue) * Ue), ct(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: qe,
        textYPos: rr,
        label: (s + u).toString(),
        font: ft.topRow
      },
      n
    ), c += a, d += a, u++;
}, kl = (e, r, t, n) => {
  const o = Math.floor(r / dn) + 2, s = dn * Re;
  let u = -N(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Re + 0.5 * Re;
  for (let a = 0; a < o; a++) {
    const d = N(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    ct(
      {
        ctx: e,
        x: u,
        y: Yt,
        width: s,
        height: Vt,
        textYPos: Yt + Vt / 2 + 2,
        label: d,
        font: ft.bottomRow.number
      },
      n
    ), u += s;
  }
}, Ml = (e, r, t, n) => {
  const o = Math.ceil(r / dn), s = N(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), u = i.add(1, "day").month(), a = c === u ? 1 : 2;
  let d = 0.5 * Re;
  for (let l = 0; l < a; l++) {
    const y = N(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = N(`${t.year}-${t.month + l + 1}-01T:23:59:59`).endOf("month"), $ = v.format("MMMM").toUpperCase(), g = v.diff(y, "hour") + 1, R = l === 0 ? g * Re : r * Re;
    ct(
      {
        ctx: e,
        x: d,
        y: 0,
        width: R,
        height: Yt,
        textYPos: rr,
        label: $,
        font: ft.topRow
      },
      n
    ), d += R;
  }
}, $l = (e, r, t, n, o = "12h") => {
  let s = 0;
  const i = Yt + Vt, c = N(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), u = Re;
  for (let a = 0; a < r; a++) {
    const d = o === "24h" ? c.add(a, "hours").format("HH:00") : c.add(a, "hours").format("h:00a").toUpperCase();
    ct(
      {
        ctx: e,
        x: s,
        y: i,
        width: u,
        height: In,
        label: d,
        font: ft.bottomRow.hoursInDay,
        textYPos: Yt + Vt + In / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), s += Re;
  }
}, Dl = (e, r, t, n, o, s, i, c = !0, u = "12h") => {
  switch (r) {
    case 0:
      Cl(e, n, s, i), gl(e, t, n, i), Sl(e, t, n, o, i);
      break;
    case 1:
      vl(e, n, i), c && xl(e, n, o, i), ml(e, t, n, i, c ? St : 0);
      break;
    case 2:
      Ml(e, t, n, i), kl(e, t, n, i), $l(e, t, n, i, u);
      break;
  }
}, El = x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, _l = x.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, Tl = x.div`
  height: ${({ $height: e }) => e ?? ln}px;
  display: block;
`, Pl = x.canvas``, Al = {
  transfer: /* @__PURE__ */ z(Ie, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ z(Ie, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ z(Ie, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ z(Ie, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ z(Ie, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ z(Ie, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ h("path", { d: "M12 7.5V12l3 2" })
  ] }),
  dash: /* @__PURE__ */ h("path", { d: "M6 12h12" })
}, We = ({
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
    children: Al[e]
  }
), je = {
  crit: "#C6483D",
  warn: "#D98A22",
  ok: "#2E8B63",
  info: "#2C6BB0",
  muted: "#9AA4B2"
}, Tt = {
  sin_chofer: { icon: "warn", color: je.muted, label: "Sin chofer" },
  sin_avisar: { icon: "warn", color: je.crit, label: "Pendiente de notificar" },
  programado: { icon: "dash", color: je.muted, label: "Pendiente de notificar" },
  por_confirmar: { icon: "clock", color: je.warn, label: "Notificado, esperando confirmación" },
  notificado: { icon: "clock", color: je.info, label: "Notificado" },
  confirmado: { icon: "check", color: je.ok, label: "Confirmado" }
}, Il = {
  confirmed: { icon: "check", color: je.ok, label: "Subcontrato confirmado" },
  unconfirmed: { icon: "clock", color: je.warn, label: "Subcontrato sin confirmar" }
}, Ol = (e, r) => e === "lost" ? je.crit : e === "confirmed" ? je.ok : r === "notificado" ? je.info : je.warn, Ll = x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Fe + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, Hr = x.span`
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
`, tn = x.span`
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
`, Rl = x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, Yl = x.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, Nl = x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, Fl = x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, zl = x.span`
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
`, Bl = [Tt.sin_chofer, Tt.sin_avisar, Tt.por_confirmar, Tt.confirmado], Hl = () => /* @__PURE__ */ z(Ll, { children: [
  /* @__PURE__ */ h(Hr, { children: "Leyenda" }),
  /* @__PURE__ */ z(tn, { children: [
    /* @__PURE__ */ h(We, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ z(tn, { children: [
    /* @__PURE__ */ h(We, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ z(tn, { children: [
    /* @__PURE__ */ h(We, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ z(tn, { children: [
    /* @__PURE__ */ h(Rl, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(Yl, {}),
  /* @__PURE__ */ z(Hr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Bl.map((e) => /* @__PURE__ */ z(Nl, { children: [
    /* @__PURE__ */ h(Fl, { style: { background: e.color } }),
    /* @__PURE__ */ h(zl, { style: { color: e.color }, children: /* @__PURE__ */ h(We, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), Wl = Jn(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = ht(), { date: c, cols: u, dayOfYear: a, startDate: d, config: l } = Je(), y = ue(null), S = hn(), v = l.showWeekRow !== !1, $ = l.hourFormat ?? "12h", g = r === 2 ? Js : r === 1 && !v ? qe + Pt : ln, R = ae(
    (q) => {
      const B = ar(), U = g + 1;
      Lo(q, B, U), Dl(q, r, u, d, i, a, S, v, $);
    },
    [u, a, d, i, r, S, v, $, g]
  );
  return ge(() => {
    if (!y.current)
      return;
    const q = y.current.getContext("2d");
    if (!q)
      return;
    const B = () => R(q);
    return window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, [R]), ge(() => {
    const q = y.current;
    if (!q)
      return;
    q.style.letterSpacing = "1px";
    const B = q.getContext("2d");
    B && R(B);
  }, [c, r, R]), /* @__PURE__ */ z(El, { ref: s, children: [
    (l.showTopbar !== !1 || l.showLegend !== !1) && /* @__PURE__ */ z(_l, { $width: t, children: [
      l.showTopbar !== !1 && /* @__PURE__ */ h(Za, { width: t, showThemeToggle: n, toggleTheme: o }),
      l.showLegend !== !1 && /* @__PURE__ */ h(Hl, {})
    ] }),
    /* @__PURE__ */ h(Tl, { $height: g, id: $o, children: /* @__PURE__ */ h(Pl, { ref: y }) })
  ] });
}), jl = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Ue;
      break;
    case 2:
      n = Re;
      break;
    default:
      n = Te;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), u = r.endDate.startOf("day"), a = () => {
    let d;
    switch (t) {
      case 2:
        d = (e.startDate.diff(r.startDate, "minute") / Oe + 1) * n - n / 2;
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
          e.endDate.diff(e.startDate, "minute") / Oe * n,
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
          e.endDate.diff(r.startDate, "minute") / Oe * n + 0.5 * n,
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
          r.endDate.diff(e.startDate, "minute") / Oe * n,
          50
        );
        break;
      default:
        d = Math.max(
          u.diff(s, "day") * n + n,
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
          r.endDate.diff(r.startDate, "minute") / Oe * n,
          50
        );
        break;
      default:
        d = Math.max(
          u.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: d };
  }
  return { x: a(), width: 50 };
}, Zl = (e, r, t, n, o, s) => {
  const i = e * ye + qs, c = r.hour(), u = t.hour();
  let a, d, l, y;
  switch (s) {
    case 2: {
      a = N(n), d = N(o), l = N(r).hour(c).minute(0), y = N(t).hour(u).minute(0);
      break;
    }
    default: {
      a = N(n).hour(0).minute(0), d = N(o).hour(23).minute(59), l = r, y = t;
      break;
    }
  }
  return {
    ...jl(
      { startDate: a, endDate: d },
      { startDate: l, endDate: y },
      s
    ),
    y: i
  };
}, Wo = (e) => {
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
  ${Nt}
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
const Vl = Ve`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, Gl = Ve`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, Ul = x.button`
  ${Nt}
  position: absolute;
  height: ${pn}px;
  border-radius: 7px;
  /* NO overflow:hidden — it would make the tile the sticky scroll-container and break the floating text (the multi-day
     body sticks to the visible-left as a wide event scrolls). */
  /* Isolate so the top-right status cluster (z 6) stays contained in the tile instead of escaping to the
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
    animation: ${Vl} 180ms ease-out;
    transition: opacity 0.2s ease, transform 160ms ease, box-shadow 160ms ease;
    &:hover:not(:active) {
      transform: translateY(-1.5px);
      box-shadow: 0 6px 13px -3px rgba(12, 26, 23, 0.42), 0 0 0 0.5px rgba(12, 26, 23, 0.16);
    }
  }
  ${({ $unconfirmed: e }) => e && `background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px ${je.warn}, 0 2px 5px -1px rgba(12,26,23,0.28);
     @media (prefers-reduced-motion: no-preference) {
       &:hover:not(:active) { box-shadow: 0 0 0 1.5px ${je.warn}, 0 6px 13px -3px rgba(12,26,23,0.42); }
     }`}
  ${({ $exiting: e }) => e && bt`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Gl} 190ms ease-out forwards;
      }
    `}
  /* A pulsing tile's flare and rings reach past its edges; lift it so neighbours don't cover them. */
  ${({ $pulsing: e }) => e && "z-index: 8;"}
  /* Persistent green highlight for the event focused from a warning: a bold green ring + glow + an inset green wash
     over the tile bg (below the text, which stays readable). Lifted above neighbours so the ring isn't clipped. */
  ${({ $highlighted: e }) => e && `z-index: 9;
     box-shadow: 0 0 0 3px #0F7D66, 0 0 16px 3px rgba(15, 125, 102, 0.55), inset 0 0 0 200px rgba(15, 125, 102, 0.3);`}
  /* Focus-mode: rows outside the focused set fade back and go inert. */
  ${({ $dimmed: e }) => e && "opacity: 0.26; filter: grayscale(0.45); pointer-events: none;"}
  /* Focus-mode: a blocking service that will vacate the target unit — amber dashed outline, faded. */
  ${({ $leaving: e }) => e && "opacity: 0.74; filter: grayscale(0.2); outline: 2px dashed #D98A22; outline-offset: -2px; z-index: 7;"}
`, Xl = x.div`
  position: sticky;
  left: ${Fe + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`, Wr = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Kl = x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Jl = x.span`
  ${wt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, ql = x.span`
  ${wt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Ql = x.span`
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
`, ed = x.div`
  ${wt}
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  padding-right: 46px;
  opacity: 0.9;
  font-size: 9.5px;
  font-weight: 600;
  line-height: 1.1;
  & svg {
    width: 10px;
    height: 10px;
    flex: none;
    opacity: 0.9;
  }
`, jr = x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Zr = x.span`
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
`, Vr = x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, td = Ve`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`, nd = Ve`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`, rd = Ve`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`, od = Ve`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`, sd = x.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({ $color: e }) => e};
  --pulse-glow: ${({ $color: e }) => `${e}73`};
  animation:
    ${td} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${nd} 9600ms linear var(--pulse-delay, 0ms) both;
`, id = x.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({ $color: e }) => e};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rd} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border-radius: 50%;
      border: 1.5px solid var(--pulse-ring);
      opacity: 0;
      pointer-events: none;
      animation: ${od} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`, ad = x.div`
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
`, Gr = x.span`
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
  color: ${({ $end: e }) => e ? "#3A4C46" : "#184546"};
`, cd = Ve`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`, ld = x.div`
  position: absolute;
  height: ${pn}px;
  border-radius: 7px;
  /* A clearly-green "this is the event that lands here" preview — nearly opaque so it doesn't muddy over the dark
     blocker underneath; the dashed light border + the "entra a…" badge keep it reading as a preview, not a real tile. */
  background: rgba(21, 133, 97, 0.74);
  border: 2px dashed rgba(255, 255, 255, 0.92);
  box-shadow: 0 0 0 3px rgba(15, 125, 102, 0.28), 0 3px 9px -2px rgba(12, 26, 23, 0.4);
  pointer-events: none;
  z-index: 8;
  overflow: visible;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${cd} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`, dd = x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`, ud = x.div`
  ${wt}
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  line-height: 1.15;
  & svg {
    width: 14px;
    height: 14px;
    flex: none;
    color: #fff;
  }
`, fd = x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.1;
  & svg {
    width: 11px;
    height: 11px;
    flex: none;
    color: #fff;
  }
`, hd = x.span`
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: #2e8b63;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  border-radius: 6px;
  padding: 2px 8px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.22);
  z-index: 9;
`, pd = x.span`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: #d98a22;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  border-radius: 6px;
  padding: 1px 7px;
  z-index: 8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`, md = 34, Cn = ({
  row: e,
  data: r,
  zoom: t,
  isSubcontract: n = !1,
  onTileClick: o,
  onTileContextMenu: s,
  onDragStart: i,
  isDragging: c = !1,
  isDraggable: u = !0,
  yOffset: a = 0,
  exiting: d = !1,
  highlighted: l = !1,
  dimmed: y = !1,
  leaving: S = !1,
  ghost: v = !1,
  ghostBadge: $ = "",
  pulse: g
}) => {
  const { date: R, config: q } = Je(), B = q.hourFormat ?? "12h", U = mn(R, t), { y: b, x: p, width: f } = Zl(
    e,
    U.startDate,
    U.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: _ } = hn(), k = ue(null), w = N(r.startDate).isSame(N(r.endDate), "day"), F = r.eventType === Gt.Tour, H = r.eventType === Gt.Transfer, P = w && (F || H);
  if (v)
    return /* @__PURE__ */ z(ld, { style: { left: `${p}px`, top: `${b + a}px`, width: `${f}px` }, children: [
      /* @__PURE__ */ z(dd, { children: [
        /* @__PURE__ */ z(ud, { children: [
          /* @__PURE__ */ h(We, { name: H ? "transfer" : "tour" }),
          r.title
        ] }),
        /* @__PURE__ */ z(fd, { children: [
          /* @__PURE__ */ h(We, { name: "check", strokeWidth: 2.6 }),
          "flota propia"
        ] })
      ] }),
      $ && /* @__PURE__ */ h(hd, { children: $ })
    ] });
  const A = (L) => {
    L.button === 0 && (k.current = { x: L.clientX, y: L.clientY }, u && i && (L.preventDefault(), i(r, L)));
  }, T = (L) => {
    s && (L.preventDefault(), s(r, { x: L.clientX, y: L.clientY }));
  }, Z = (L) => {
    if (k.current) {
      const ne = Math.abs(L.clientX - k.current.x), M = Math.abs(L.clientY - k.current.y);
      Math.sqrt(ne * ne + M * M) <= 5 && (o == null || o(r)), k.current = null;
    } else
      o == null || o(r);
  }, I = {
    left: `${p}px`,
    top: `${b + a}px`,
    backgroundColor: `${r.bgColor ?? _.defaultTile}`,
    width: `${f}px`,
    color: Wo(r.bgColor ?? "")
  }, C = !n && r.readiness ? Tt[r.readiness] : null, O = n && r.subcontractConfirmed === !1, te = g ? { "--pulse-delay": `${g.delayMs}ms` } : void 0, se = g ? Ol(g.kind, n ? void 0 : r.readiness) : "", W = (L) => g ? /* @__PURE__ */ h(
    id,
    {
      $color: se,
      style: te,
      children: L
    },
    `${g.key}-${r.readiness ?? ""}-${String(r.subcontractConfirmed)}`
  ) : L, Y = (L) => /* @__PURE__ */ z(
    Ul,
    {
      "data-segment-id": r.segmentId,
      style: I,
      onClick: Z,
      onMouseDown: A,
      onContextMenu: T,
      onDragStart: (ne) => ne.preventDefault(),
      isDraggable: u,
      isDragging: c,
      $unconfirmed: O,
      $exiting: d,
      $highlighted: l,
      $dimmed: y,
      $leaving: S,
      $pulsing: !!g,
      children: [
        g && /* @__PURE__ */ h(sd, { $color: se, style: te, "aria-hidden": !0 }, g.key),
        S && /* @__PURE__ */ h(pd, { children: "Sub" }),
        L
      ]
    }
  );
  return Y(
    P ? /* @__PURE__ */ z(Ie, { children: [
      (n || C) && /* @__PURE__ */ h(jr, { $sm: !0, children: W(
        n ? /* @__PURE__ */ h(Vr, { children: "SUB" }) : C && /* @__PURE__ */ h(Zr, { $sm: !0, style: { color: C.color }, children: /* @__PURE__ */ h(We, { name: C.icon, strokeWidth: C.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      /* @__PURE__ */ z(ad, { $transfer: H, children: [
        /* @__PURE__ */ h(We, { name: H ? "transfer" : "sun", strokeWidth: 2.4 }),
        f >= md && /* @__PURE__ */ z(Ie, { children: [
          /* @__PURE__ */ h(Gr, { children: Ee(r.startDate, B) }),
          !H && /* @__PURE__ */ h(Gr, { $end: !0, children: Ee(r.endDate, B) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ z(Ie, { children: [
      /* @__PURE__ */ h(jr, { children: (n || C) && W(
        n ? /* @__PURE__ */ h(Vr, { children: "SUB" }) : C && /* @__PURE__ */ h(Zr, { style: { color: C.color }, children: /* @__PURE__ */ h(We, { name: C.icon, strokeWidth: C.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      r.bookingNumber && /* @__PURE__ */ h(Ql, { children: r.bookingNumber }),
      /* @__PURE__ */ z(Xl, { children: [
        /* @__PURE__ */ z(Wr, { $pad: !0, children: [
          /* @__PURE__ */ h(Kl, { children: /* @__PURE__ */ h(We, { name: H ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(Jl, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(Wr, { children: /* @__PURE__ */ h(ql, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ z(ed, { children: [
          /* @__PURE__ */ h(We, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Ur = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * ze;
}, gd = (e) => ({
  segmentId: e.segmentId,
  reservationId: e.reservationId,
  startDate: e.startDate,
  endDate: e.endDate,
  occupancy: 0,
  title: e.title,
  bookingNumber: "",
  eventType: e.eventType
}), yd = ({
  data: e,
  zoom: r,
  onTileClick: t,
  onTileContextMenu: n,
  onDragStart: o,
  isDraggable: s,
  draggingEventId: i,
  separatorRowIndices: c = [],
  fadingUnitIds: u,
  highlightedSegmentId: a,
  focusedUnitIds: d,
  leavingSegmentIds: l,
  ghostProject: y
}) => {
  const S = Cc(), { nodes: v, liveMap: $ } = $e(() => {
    const p = /* @__PURE__ */ new Map(), f = !!d && d.length > 0;
    let _ = 0;
    return { nodes: e.map((w, F) => {
      F > 0 && (_ += Math.max(e[F - 1].data.length, 1));
      const H = !!(u != null && u.has(w.id)), P = f && !d.includes(w.id), A = Ur(_, c), T = y && w.id === y.targetUnitId ? /* @__PURE__ */ h(
        Cn,
        {
          row: _,
          data: gd(y),
          zoom: r,
          yOffset: A,
          isDragging: !1,
          isDraggable: !1,
          ghost: !0,
          ghostBadge: y.badge
        },
        `ghost-${w.id}`
      ) : null;
      if (!w.data.some((I) => I.length > 0))
        return T ? [T] : [];
      const Z = w.data.map(
        (I, C) => I.map((O) => {
          const te = i === O.segmentId, se = s ? s(O) : !1, W = C + _, Y = Ur(W, c);
          return p.set(O.segmentId, {
            project: O,
            absoluteRow: W,
            yOffset: Y,
            isSubcontract: !!w.isSubcontract,
            faded: H
          }), /* @__PURE__ */ h(
            Cn,
            {
              row: W,
              data: O,
              zoom: r,
              isSubcontract: w.isSubcontract,
              onTileClick: t,
              onTileContextMenu: n,
              onDragStart: o,
              isDragging: te,
              isDraggable: se,
              yOffset: Y,
              exiting: H,
              highlighted: a != null && O.segmentId === a,
              dimmed: P,
              leaving: !!(l != null && l.includes(O.segmentId)),
              pulse: S.get(O.segmentId)
            },
            O.segmentId
          );
        })
      );
      return T ? [...Z, [T]] : Z;
    }).flat(2), liveMap: p };
  }, [e, t, n, r, o, s, i, c, u, a, d, l, y, S]), g = ue(/* @__PURE__ */ new Map()), R = ue([]), [q, B] = he([]);
  ge(() => () => R.current.forEach(clearTimeout), []), ge(() => {
    const p = g.current;
    g.current = $;
    const f = [];
    if (p.forEach((w, F) => {
      !$.has(F) && !w.faded && f.push(w);
    }), B((w) => {
      let F = w.filter((H) => !$.has(H.project.segmentId));
      for (const H of f)
        F.some((P) => P.project.segmentId === H.project.segmentId) || (F = [...F, H]);
      return F;
    }), !f.length)
      return;
    const _ = new Set(f.map((w) => w.project.segmentId)), k = setTimeout(() => {
      B((w) => w.filter((F) => !_.has(F.project.segmentId)));
    }, 220);
    R.current.push(k);
  }, [$]);
  const U = [];
  g.current !== $ && g.current.forEach((p, f) => {
    !$.has(f) && !p.faded && !q.some((_) => _.project.segmentId === f) && U.push(p);
  });
  const b = [...q, ...U].filter((p) => !$.has(p.project.segmentId)).map((p) => /* @__PURE__ */ h(
    Cn,
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
  return /* @__PURE__ */ h(Ie, { children: [...v, ...b] });
}, vd = yd;
x.div`
  box-sizing: border-box;
  font-family: ${Ze};
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
const xd = x.div`
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
`, bd = x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, wd = x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, Sd = x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Cd = x.span`
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
`, Xr = x.div`
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
`, kd = x.div`
  ${Nt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Md = x.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, $d = x.div`
  padding: 10px 12px;
`, Dd = x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Kr = x.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Jr = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, qr = x.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Qr = x.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, eo = x.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Ed = x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, _d = x.div`
  min-width: 0;
`, Td = x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Pd = x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, to = x.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, zt = x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Bt = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Ht = x.div`
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
const Ad = {
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
}, Id = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = ue(null), [s, i] = he("below"), c = ht(), u = { ...Ad, ...c.tooltip };
  fn(() => {
    if (!o.current || !t)
      return;
    const g = o.current, { width: R, height: q } = g.getBoundingClientRect(), B = g.parentElement;
    if (!B)
      return;
    const U = B.getBoundingClientRect(), b = 12, p = 4, f = U.height - t.y, _ = U.width - t.x;
    let k = t.x + b, w = t.y + b, F = "below";
    _ < R + b && (k = t.x - R - b), f < q + b && (w = t.y - q - b, F = "above"), k = Math.max(p, Math.min(k, U.width - R - p)), w = Math.max(p, Math.min(w, U.height - q - p)), i(F), g.style.left = `${k}px`, g.style.top = `${w}px`;
  }, [t]);
  const a = n.reservationType === Gt.Tour, d = a && n.isOneDayEvent, l = a ? d ? "sun" : "tour" : "transfer", y = a ? d ? u.oneDay : u.tour : u.transfer, S = n.readiness ? Tt[n.readiness] : null, v = n.subcontractConfirmed === void 0 ? null : Il[n.subcontractConfirmed ? "confirmed" : "unconfirmed"], $ = [
    ...n.subcontractConfirmed ? n.subcontractDetails ?? [] : [],
    n.groupName && { label: u.groupName, value: n.groupName },
    n.driver && { label: u.driver, value: n.driver },
    n.passengers && { label: u.passengers, value: String(n.passengers) },
    n.flightNumber && { label: u.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ z(xd, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ z(bd, { children: [
      /* @__PURE__ */ z(wd, { children: [
        /* @__PURE__ */ h(Sd, { children: n.bookingNumber }),
        /* @__PURE__ */ z(Cd, { children: [
          /* @__PURE__ */ h(We, { name: l, strokeWidth: 2.4 }),
          y
        ] })
      ] }),
      /* @__PURE__ */ h(kd, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(Md, { children: n.client }),
      S && /* @__PURE__ */ z(Xr, { style: { color: S.color }, children: [
        /* @__PURE__ */ h(We, { name: S.icon, strokeWidth: S.icon === "check" ? 2.6 : 2.2 }),
        n.readinessNote || S.label
      ] }),
      v && /* @__PURE__ */ z(Xr, { style: { color: v.color }, children: [
        /* @__PURE__ */ h(We, { name: v.icon, strokeWidth: v.icon === "check" ? 2.6 : 2.2 }),
        v.label
      ] })
    ] }),
    /* @__PURE__ */ z($d, { children: [
      /* @__PURE__ */ z(Dd, { children: [
        /* @__PURE__ */ z(Kr, { children: [
          /* @__PURE__ */ h(Jr, { children: u.startDate }),
          /* @__PURE__ */ z(qr, { children: [
            /* @__PURE__ */ h(Qr, { children: n.startDate }),
            /* @__PURE__ */ h(eo, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ z(Kr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Jr, { children: u.endDate }),
          /* @__PURE__ */ z(qr, { children: [
            /* @__PURE__ */ h(Qr, { children: n.endDate }),
            /* @__PURE__ */ h(eo, { children: n.endTime })
          ] })
        ] })
      ] }),
      $.length > 0 && /* @__PURE__ */ h(Ed, { children: $.map((g, R) => /* @__PURE__ */ z(_d, { children: [
        /* @__PURE__ */ h(Td, { children: g.label }),
        /* @__PURE__ */ h(Pd, { children: g.value })
      ] }, R)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ z(to, { children: [
        n.departureAddress && /* @__PURE__ */ z(zt, { children: [
          /* @__PURE__ */ h(Bt, { children: u.salida }),
          /* @__PURE__ */ h(Ht, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ z(zt, { children: [
          /* @__PURE__ */ h(Bt, { children: u.destino }),
          /* @__PURE__ */ h(Ht, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ z(zt, { children: [
          /* @__PURE__ */ h(Bt, { children: u.regreso }),
          /* @__PURE__ */ h(Ht, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ z(to, { children: [
        n.serviceNotes && /* @__PURE__ */ z(zt, { children: [
          /* @__PURE__ */ h(Bt, { children: u.serviceNotes }),
          /* @__PURE__ */ h(Ht, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ z(zt, { children: [
          /* @__PURE__ */ h(Bt, { children: u.reservationNotes }),
          /* @__PURE__ */ h(Ht, { children: n.reservationNotes })
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
const Od = x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Ld = x.div`
  position: absolute;
  height: ${pn}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, Rd = x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, no = x.p`
  ${Nt}
  ${wt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Yd = x.p`
  ${Nt}
  ${wt}
`, Nd = x.div`
  position: sticky;
  left: ${Fe + 16}px;
  overflow: hidden;
`, Fd = x.div`
  position: absolute;
  height: ${pn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, zd = x.div`
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
`, Bd = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Hd = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Wd = x.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, ro = x.div`
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
`, oo = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, so = x.div`
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
`, io = x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, kn = x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, Mn = x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, Dt = x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, ao = x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, jd = ({
  draggedEvent: e,
  ghostPosition: r,
  ghostDimensions: t,
  dropTarget: n,
  isValidDrop: o,
  dragState: s,
  data: i,
  resourceOnly: c,
  separatorRowIndices: u = []
}) => {
  const a = ht(), { config: d } = Je(), l = d.hourFormat ?? "12h", y = (p) => {
    let f = 0;
    for (const _ of u)
      _ <= p && f++;
    return p * ye + f * ze;
  }, [S, v] = he(null), [$, g] = he(0), R = ae((p = 400, f = 300) => {
    const k = t.width, w = 48, F = document.getElementById("react-scheduler");
    if (!F)
      return {
        x: r.x + k + 16,
        y: r.y
      };
    const H = F.scrollLeft, P = F.scrollTop, A = F.clientWidth, T = F.clientHeight, Z = r.x - H, I = r.y - P, C = {
      left: Fe + 16,
      // Avoid left column
      right: A - 16,
      top: 16,
      bottom: T - 16
    }, O = C.right - (Z + k), te = Z - C.left, se = C.bottom - (I + w), W = I - C.top;
    let Y, L;
    return O >= p + 16 ? Y = Z + k + 16 : te >= p + 16 ? Y = Z - p - 16 : O >= te ? (Y = Z + k + 16, Y + p > C.right && (Y = C.right - p)) : (Y = Z - p - 16, Y < C.left && (Y = C.left)), se >= f + 16 ? L = I + w + 16 : W >= f + 16 ? L = I - f - 16 : se >= W ? (L = I + w + 16, L + f > C.bottom && (L = C.bottom - f)) : (L = I - f - 16, L < C.top && (L = C.top)), Y = Math.max(C.left, Math.min(Y, C.right - p)), L = Math.max(C.top, Math.min(L, C.bottom - f)), {
      x: Y + H,
      y: L + P
    };
  }, [r.x, r.y, t.width]);
  ge(() => {
    s === "dragging" && e && $ === 0 ? g(r.x) : s === "idle" && g(0);
  }, [s, e, r.x, $]), ge(() => {
    v(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const q = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const p = [];
    let f = 0;
    for (const _ of i) {
      const k = Math.max(_.data.length, 1);
      if (_.capacity !== void 0 && e.totalPassengers > _.capacity)
        for (let w = 0; w < k; w++)
          p.push(f + w);
      f += k;
    }
    return p;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const B = s === "animating", U = Wo(e.bgColor ?? ""), b = () => {
    if (!n)
      return "";
    const p = `${N(n.startDate).format("MMM D")}, ${Ee(n.startDate, l)}`, f = Ee(n.endDate, l);
    return `${p} - ${f}`;
  };
  return /* @__PURE__ */ z(Od, { children: [
    q.map((p) => /* @__PURE__ */ h(
      Hd,
      {
        style: {
          top: `${y(p)}px`,
          height: `${ye}px`
        }
      },
      p
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      Bd,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${y(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ z(Ie, { children: [
      /* @__PURE__ */ h(
        Fd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${y(n.resourceIndex) + (ye - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ h(
        zd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${y(n.resourceIndex) + (ye - 48) / 2}px`
          },
          children: b()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      Wd,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          left: "0px",
          top: `${y(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && o && n.hasConflict && n.conflicts && n.conflicts.length > 0 && s === "dragging" && (() => {
      const p = R(400, 300);
      return /* @__PURE__ */ z(
        ro,
        {
          style: {
            left: `${p.x}px`,
            top: `${p.y}px`
          },
          children: [
            /* @__PURE__ */ z(oo, { children: [
              /* @__PURE__ */ h(so, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(io, { children: n.conflicts.map((f, _) => {
              const k = N(n.startDate).format("YYYY-MM-DD"), w = N(n.endDate).format("YYYY-MM-DD"), F = N(f.event.startDate).format("YYYY-MM-DD"), H = N(f.event.endDate).format("YYYY-MM-DD"), P = N(f.conflictStart).format("YYYY-MM-DD"), A = N(f.conflictEnd).format("YYYY-MM-DD"), T = k !== w, Z = F !== H, I = P !== A, C = T ? `${N(n.startDate).format("MMM D")}, ${Ee(n.startDate, l)}` : Ee(n.startDate, l), O = T ? `${N(n.endDate).format("MMM D")}, ${Ee(n.endDate, l)}` : Ee(n.endDate, l), te = Z ? `${N(f.event.startDate).format("MMM D")}, ${Ee(f.event.startDate, l)}` : Ee(f.event.startDate, l), se = Z ? `${N(f.event.endDate).format("MMM D")}, ${Ee(f.event.endDate, l)}` : Ee(f.event.endDate, l), W = I ? `${N(f.conflictStart).format("MMM D")}, ${Ee(f.conflictStart, l)}` : Ee(f.conflictStart, l), Y = I ? `${N(f.conflictEnd).format("MMM D")}, ${Ee(f.conflictEnd, l)}` : Ee(f.conflictEnd, l), L = I ? "" : N(f.conflictStart).format("MMM D"), ne = n.startDate.getTime(), M = n.endDate.getTime(), X = f.event.startDate.getTime(), E = f.event.endDate.getTime(), Q = ne >= X && ne < E, V = M > X && M <= E, j = ne <= X && M >= E, m = X <= ne && E >= M;
              let G = !1, D = !1, K = !1, ee = !1, J = "";
              return j || m ? (G = !0, D = !0, K = !0, ee = !0, J = `⚠️ ${a.conflicts.changeBoth}`) : Q && V ? (G = !0, D = !0, K = !0, ee = !0, J = `⚠️ ${a.conflicts.changeBoth}`) : Q ? (G = !0, ee = !0, J = `⚠️ ${a.conflicts.changeStart}`) : V && (D = !0, K = !0, J = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ z(kn, { children: [
                /* @__PURE__ */ z(Mn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ z(Dt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  G ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: C }) : C,
                  " ",
                  a.conflicts.to,
                  " ",
                  D ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: O }) : O
                ] }),
                /* @__PURE__ */ z(Dt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  K ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: te }) : te,
                  " ",
                  a.conflicts.to,
                  " ",
                  ee ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: se }) : se
                ] }),
                /* @__PURE__ */ z(ao, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  L && `${L}, `,
                  W,
                  " - ",
                  Y
                ] }),
                J && /* @__PURE__ */ h(Dt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: J })
              ] }, _);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const p = R(400, 400);
      return /* @__PURE__ */ z(
        ro,
        {
          style: {
            left: `${p.x}px`,
            top: `${p.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ z(oo, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(so, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ z(io, { children: [
              (() => {
                const f = n.nearbyEvents.some((F) => F.position === "before"), _ = n.nearbyEvents.some((F) => F.position === "after"), k = Ee(n.startDate, l), w = Ee(n.endDate, l);
                return /* @__PURE__ */ z(kn, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ z(Mn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ z(Dt, { style: { fontWeight: 600 }, children: [
                    N(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: k }) : k,
                    " ",
                    a.conflicts.to,
                    " ",
                    _ ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w
                  ] }),
                  /* @__PURE__ */ h(Dt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, _) => {
                const k = N(f.event.startDate).format("YYYY-MM-DD"), w = N(f.event.endDate).format("YYYY-MM-DD"), F = k !== w, H = F ? `${N(f.event.startDate).format("MMM D")}, ${Ee(f.event.startDate, l)}` : Ee(f.event.startDate, l), P = F ? `${N(f.event.endDate).format("MMM D")}, ${Ee(f.event.endDate, l)}` : Ee(f.event.endDate, l), A = N(f.event.startDate).format("MMM D"), T = Math.floor(f.timeGap / (1e3 * 60 * 60)), Z = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), I = T > 0 ? `${T}h ${Z}m` : `${Z}m`, C = f.position === "after", O = f.position === "before";
                return /* @__PURE__ */ z(kn, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ z(Mn, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ z(Dt, { children: [
                    !F && `${A}: `,
                    C ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: H }) : H,
                    " ",
                    a.conflicts.to,
                    " ",
                    O ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: P }) : P
                  ] }),
                  /* @__PURE__ */ z(ao, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    I,
                    " ",
                    f.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, _);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      Ld,
      {
        $isAnimating: B,
        $animateToX: S == null ? void 0 : S.x,
        $animateToY: S == null ? void 0 : S.y,
        style: {
          left: B ? `${(S == null ? void 0 : S.x) ?? 0}px` : "0",
          top: B ? `${(S == null ? void 0 : S.y) ?? 0}px` : "0",
          transform: B ? void 0 : `translate3d(${c ? $ : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: U
        },
        children: /* @__PURE__ */ h(Rd, { children: /* @__PURE__ */ z(Nd, { children: [
          /* @__PURE__ */ h(no, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(no, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(Yd, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Zd = jd, Vd = Ve`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Gd = x.div`
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
  animation: ${Vd} 1.5s ease-in-out infinite;
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
`, Ud = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  Gd,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Xd = Ud, Kd = Ve`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Jd = x.div`
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
  animation: ${Kd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, qd = x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Qd = x.span`
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
`, eu = x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, tu = x.span`
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
const nu = x.div`
  display: flex;
  gap: 8px;
`, co = x.button`
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
`, ru = ({ selections: e, onConfirm: r, onClear: t }) => {
  var v;
  const o = ht().multiSelect, s = $e(() => e.filter(($) => $.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, u = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", d = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", l = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, S = /* @__PURE__ */ z(Jd, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ z(qd, { children: [
      /* @__PURE__ */ z(Qd, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ z(eu, { children: [
        "⚠️ ",
        l
      ] }),
      /* @__PURE__ */ h(tu, { children: c })
    ] }),
    /* @__PURE__ */ z(nu, { children: [
      /* @__PURE__ */ z(co, { variant: "secondary", onClick: t, children: [
        "✕ ",
        u
      ] }),
      /* @__PURE__ */ h(co, { variant: "primary", $hasConflicts: y, onClick: r, children: y ? `⚠️ ${d}` : `✓ ${a}` })
    ] })
  ] });
  return Uo(S, document.body);
}, ou = ru, su = Ve`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, iu = x.div`
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
  animation: ${su} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && bt`
      border-style: dashed;
    `}
`, au = x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, cu = x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, lu = x.button`
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
`, du = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, u] = he(null), [a, d] = he({ x: 0, y: 0 }), l = ue(null), y = $e(() => {
    switch (t) {
      case 0:
        return Ue * 7;
      case 1:
        return Te;
      case 2:
        return Re;
      default:
        return Te;
    }
  }, [t]), S = $e(() => N().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), v = $e(() => e.map((p, f) => {
    let _ = 0, k = !1;
    for (const C of r) {
      if (C.id === p.resourceId) {
        k = !0;
        break;
      }
      _ += Math.max(C.data.length, 1);
    }
    if (!k)
      return null;
    const w = N(p.startDate), F = N(p.endDate);
    let H, P;
    switch (t) {
      case 0:
        H = Math.floor(w.diff(S, "days") / 7), P = Math.max(1, Math.ceil(F.diff(w, "days") / 7) + 1);
        break;
      case 1:
        H = w.diff(S, "days"), P = Math.max(1, F.diff(w, "days") + 1);
        break;
      case 2:
        H = w.diff(S, "hours"), P = Math.max(1, F.diff(w, "hours") + 1);
        break;
      default:
        H = 0, P = 1;
    }
    const A = H * y;
    let T = 0;
    for (const C of i)
      C <= _ && T++;
    const Z = _ * ye + T * ze, I = P * y;
    return {
      index: f,
      selection: p,
      x: A,
      y: Z,
      width: I,
      height: ye
    };
  }), [e, r, t, S, y]), $ = (p, f) => {
    const _ = N(p).format("MMM D"), k = N(f).format("MMM D");
    return _ === k ? _ : `${_} - ${k}`;
  }, g = (p) => !p.hasConflict || !p.conflicts ? "" : `⚠️ Conflicts with:
${p.conflicts.map((_) => {
    const k = (_.overlapDuration / 36e5).toFixed(1);
    return `• ${_.event.title} (${k}h overlap)`;
  }).join(`
`)}`, R = ae(
    (p) => {
      let f = 0;
      for (const _ of r) {
        const k = Math.max(_.data.length, 1);
        if (p >= f * ye && p < (f + k) * ye)
          return {
            resourceId: _.id,
            resourceLabel: _.label
          };
        f += k;
      }
      return null;
    },
    [r]
  ), q = ae(
    (p) => {
      const f = Math.floor(p / y);
      switch (t) {
        case 0:
          return S.add(f * 7, "days").toDate();
        case 1:
          return S.add(f, "days").toDate();
        case 2:
          return S.add(f, "hours").toDate();
        default:
          return S.toDate();
      }
    },
    [t, S, y]
  ), B = ae(
    (p, f) => {
      !s || (p.preventDefault(), p.stopPropagation(), !v[f]) || (l.current = { x: p.clientX, y: p.clientY }, u(f), d({ x: 0, y: 0 }));
    },
    [s, v]
  ), U = ae(
    (p) => {
      if (c === null || !l.current)
        return;
      const f = p.clientX - l.current.x, _ = p.clientY - l.current.y, k = Math.round(f / y) * y, w = Math.round(_ / ye) * ye;
      d({ x: k, y: w });
    },
    [c, y]
  ), b = ae(() => {
    if (c === null || !s) {
      u(null), d({ x: 0, y: 0 }), l.current = null;
      return;
    }
    const p = v[c];
    if (!p) {
      u(null), d({ x: 0, y: 0 }), l.current = null;
      return;
    }
    const f = p.x + a.x, _ = p.y + a.y, k = R(_ + ye / 2);
    if (!k) {
      u(null), d({ x: 0, y: 0 }), l.current = null;
      return;
    }
    const w = q(f), F = e[c], H = F.endDate.getTime() - F.startDate.getTime(), P = new Date(w.getTime() + H);
    s(c, {
      startDate: w,
      endDate: P,
      resourceId: k.resourceId,
      resourceLabel: k.resourceLabel
    }), u(null), d({ x: 0, y: 0 }), l.current = null;
  }, [c, a, v, e, s, R, q]);
  return ge(() => {
    if (c !== null)
      return document.addEventListener("mousemove", U), document.addEventListener("mouseup", b), () => {
        document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", b);
      };
  }, [c, U, b]), /* @__PURE__ */ h(Ie, { children: v.map((p) => {
    if (!p)
      return null;
    const f = p.selection.hasConflict || !1, _ = c === p.index, k = _ ? p.x + a.x : p.x, w = _ ? p.y + a.y : p.y;
    return /* @__PURE__ */ z(
      iu,
      {
        $hasConflict: f,
        $isDragging: _,
        style: {
          left: k,
          top: w,
          width: p.width,
          height: p.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (F) => B(F, p.index),
        children: [
          f && /* @__PURE__ */ h(cu, { title: g(p.selection), children: "⚠️" }),
          /* @__PURE__ */ h(au, { $hasConflict: f, children: $(p.selection.startDate, p.selection.endDate) }),
          /* @__PURE__ */ h(
            lu,
            {
              onClick: (F) => {
                F.stopPropagation(), o(p.index);
              },
              onMouseDown: (F) => F.stopPropagation(),
              title: f ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      p.index
    );
  }) });
}, uu = du, jo = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? Ue * 7 : Te, s = N().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, fu = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ theme: e }) => e.colors.today}12;
`, hu = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Je(), n = $e(
    () => jo(N(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(fu, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, pu = hu, mu = "#2f6fed", gu = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${mu}1c;
`, yu = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = Je(), o = $e(() => !n || n.isSame(N(), "day") ? null : jo(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(gu, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0 }) : null;
}, vu = yu;
export {
  Tt as READINESS,
  Cu as Scheduler,
  We as TileIcon,
  Ol as tilePulseColor
};
