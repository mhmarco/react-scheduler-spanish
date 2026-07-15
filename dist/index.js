var vo = Object.defineProperty;
var xo = (e, n, t) => n in e ? vo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Nn = (e, n, t) => (xo(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as h, jsxs as Z, Fragment as _e } from "react/jsx-runtime";
import * as re from "react";
import et, { useRef as me, useContext as Ke, useMemo as Ce, useLayoutEffect as Mn, useDebugValue as Hn, createElement as bo, createContext as Nr, useState as fe, useCallback as ce, useEffect as ge, forwardRef as kn, useImperativeHandle as Hr } from "react";
import { createPortal as wo } from "react-dom";
var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ct = {}, So = {
  get exports() {
    return Ct;
  },
  set exports(e) {
    Ct = e;
  }
}, ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function Co() {
  if (Wn)
    return ye;
  Wn = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function M(p) {
    if (typeof p == "object" && p !== null) {
      var R = p.$$typeof;
      switch (R) {
        case e:
          switch (p = p.type, p) {
            case t:
            case o:
            case r:
            case a:
            case l:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case i:
                case d:
                case g:
                case f:
                case s:
                  return p;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  return ye.ContextConsumer = i, ye.ContextProvider = s, ye.Element = e, ye.ForwardRef = d, ye.Fragment = t, ye.Lazy = g, ye.Memo = f, ye.Portal = n, ye.Profiler = o, ye.StrictMode = r, ye.Suspense = a, ye.SuspenseList = l, ye.isAsyncMode = function() {
    return !1;
  }, ye.isConcurrentMode = function() {
    return !1;
  }, ye.isContextConsumer = function(p) {
    return M(p) === i;
  }, ye.isContextProvider = function(p) {
    return M(p) === s;
  }, ye.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ye.isForwardRef = function(p) {
    return M(p) === d;
  }, ye.isFragment = function(p) {
    return M(p) === t;
  }, ye.isLazy = function(p) {
    return M(p) === g;
  }, ye.isMemo = function(p) {
    return M(p) === f;
  }, ye.isPortal = function(p) {
    return M(p) === n;
  }, ye.isProfiler = function(p) {
    return M(p) === o;
  }, ye.isStrictMode = function(p) {
    return M(p) === r;
  }, ye.isSuspense = function(p) {
    return M(p) === a;
  }, ye.isSuspenseList = function(p) {
    return M(p) === l;
  }, ye.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === r || p === a || p === l || p === w || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === f || p.$$typeof === s || p.$$typeof === i || p.$$typeof === d || p.$$typeof === v || p.getModuleId !== void 0);
  }, ye.typeOf = M, ye;
}
var ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function Mo() {
  return zn || (zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), v = !1, M = !1, p = !1, R = !1, V = !1, F;
    F = Symbol.for("react.module.reference");
    function D(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === t || L === o || V || L === r || L === a || L === l || R || L === w || v || M || p || typeof L == "object" && L !== null && (L.$$typeof === g || L.$$typeof === f || L.$$typeof === s || L.$$typeof === i || L.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === F || L.getModuleId !== void 0));
    }
    function u(L) {
      if (typeof L == "object" && L !== null) {
        var K = L.$$typeof;
        switch (K) {
          case e:
            var se = L.type;
            switch (se) {
              case t:
              case o:
              case r:
              case a:
              case l:
                return se;
              default:
                var U = se && se.$$typeof;
                switch (U) {
                  case c:
                  case i:
                  case d:
                  case g:
                  case f:
                  case s:
                    return U;
                  default:
                    return K;
                }
            }
          case n:
            return K;
        }
      }
    }
    var m = i, x = s, E = e, A = d, H = t, B = g, Q = f, k = n, T = o, _ = r, z = a, O = l, q = !1, ee = !1;
    function ie(L) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(L) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(L) {
      return u(L) === i;
    }
    function j(L) {
      return u(L) === s;
    }
    function X(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function G(L) {
      return u(L) === d;
    }
    function S(L) {
      return u(L) === t;
    }
    function P(L) {
      return u(L) === g;
    }
    function y(L) {
      return u(L) === f;
    }
    function Y(L) {
      return u(L) === n;
    }
    function N(L) {
      return u(L) === o;
    }
    function I(L) {
      return u(L) === r;
    }
    function C(L) {
      return u(L) === a;
    }
    function te(L) {
      return u(L) === l;
    }
    ve.ContextConsumer = m, ve.ContextProvider = x, ve.Element = E, ve.ForwardRef = A, ve.Fragment = H, ve.Lazy = B, ve.Memo = Q, ve.Portal = k, ve.Profiler = T, ve.StrictMode = _, ve.Suspense = z, ve.SuspenseList = O, ve.isAsyncMode = ie, ve.isConcurrentMode = oe, ve.isContextConsumer = W, ve.isContextProvider = j, ve.isElement = X, ve.isForwardRef = G, ve.isFragment = S, ve.isLazy = P, ve.isMemo = y, ve.isPortal = Y, ve.isProfiler = N, ve.isStrictMode = I, ve.isSuspense = C, ve.isSuspenseList = te, ve.isValidElementType = D, ve.typeOf = u;
  }()), ve;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Co() : e.exports = Mo();
})(So);
function ko(e) {
  function n(W, j, X, G, S) {
    for (var P = 0, y = 0, Y = 0, N = 0, I, C, te = 0, L = 0, K, se = K = I = 0, U = 0, le = 0, ue = 0, ne = 0, pe = X.length, Se = pe - 1, we, J = "", ae = "", de = "", ke = "", $e; U < pe; ) {
      if (C = X.charCodeAt(U), U === Se && y + N + Y + P !== 0 && (y !== 0 && (C = y === 47 ? 10 : 47), N = Y = P = 0, pe++, Se++), y + N + Y + P === 0) {
        if (U === Se && (0 < le && (J = J.replace(g, "")), 0 < J.trim().length)) {
          switch (C) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += X.charAt(U);
          }
          C = 59;
        }
        switch (C) {
          case 123:
            for (J = J.trim(), I = J.charCodeAt(0), K = 1, ne = ++U; U < pe; ) {
              switch (C = X.charCodeAt(U)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (C = X.charCodeAt(U + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = U + 1; se < Se; ++se)
                          switch (X.charCodeAt(se)) {
                            case 47:
                              if (C === 42 && X.charCodeAt(se - 1) === 42 && U + 2 !== se) {
                                U = se + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (C === 47) {
                                U = se + 1;
                                break e;
                              }
                          }
                        U = se;
                      }
                  }
                  break;
                case 91:
                  C++;
                case 40:
                  C++;
                case 34:
                case 39:
                  for (; U++ < Se && X.charCodeAt(U) !== C; )
                    ;
              }
              if (K === 0)
                break;
              U++;
            }
            switch (K = X.substring(ne, U), I === 0 && (I = (J = J.replace(f, "").trim()).charCodeAt(0)), I) {
              case 64:
                switch (0 < le && (J = J.replace(g, "")), C = J.charCodeAt(1), C) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = j;
                    break;
                  default:
                    le = z;
                }
                if (K = n(j, le, K, C, S + 1), ne = K.length, 0 < q && (le = t(z, J, ue), $e = c(3, K, le, j, k, Q, ne, C, S, G), J = le.join(""), $e !== void 0 && (ne = (K = $e.trim()).length) === 0 && (C = 0, K = "")), 0 < ne)
                  switch (C) {
                    case 115:
                      J = J.replace(m, i);
                    case 100:
                    case 109:
                    case 45:
                      K = J + "{" + K + "}";
                      break;
                    case 107:
                      J = J.replace(V, "$1 $2"), K = J + "{" + K + "}", K = _ === 1 || _ === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                      break;
                    default:
                      K = J + K, G === 112 && (K = (ae += K, ""));
                  }
                else
                  K = "";
                break;
              default:
                K = n(j, t(j, J, ue), K, G, S + 1);
            }
            de += K, K = ue = le = se = I = 0, J = "", C = X.charCodeAt(++U);
            break;
          case 125:
          case 59:
            if (J = (0 < le ? J.replace(g, "") : J).trim(), 1 < (ne = J.length))
              switch (se === 0 && (I = J.charCodeAt(0), I === 45 || 96 < I && 123 > I) && (ne = (J = J.replace(" ", ":")).length), 0 < q && ($e = c(1, J, j, W, k, Q, ae.length, G, S, G)) !== void 0 && (ne = (J = $e.trim()).length) === 0 && (J = "\0\0"), I = J.charCodeAt(0), C = J.charCodeAt(1), I) {
                case 0:
                  break;
                case 64:
                  if (C === 105 || C === 99) {
                    ke += J + X.charAt(U);
                    break;
                  }
                default:
                  J.charCodeAt(ne - 1) !== 58 && (ae += o(J, I, C, J.charCodeAt(2)));
              }
            ue = le = se = I = 0, J = "", C = X.charCodeAt(++U);
        }
      }
      switch (C) {
        case 13:
        case 10:
          y === 47 ? y = 0 : 1 + I === 0 && G !== 107 && 0 < J.length && (le = 1, J += "\0"), 0 < q * ie && c(0, J, j, W, k, Q, ae.length, G, S, G), Q = 1, k++;
          break;
        case 59:
        case 125:
          if (y + N + Y + P === 0) {
            Q++;
            break;
          }
        default:
          switch (Q++, we = X.charAt(U), C) {
            case 9:
            case 32:
              if (N + P + y === 0)
                switch (te) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    we = "";
                    break;
                  default:
                    C !== 32 && (we = " ");
                }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              N + y + P === 0 && (le = ue = 1, we = "\f" + we);
              break;
            case 108:
              if (N + y + P + T === 0 && 0 < se)
                switch (U - se) {
                  case 2:
                    te === 112 && X.charCodeAt(U - 3) === 58 && (T = te);
                  case 8:
                    L === 111 && (T = L);
                }
              break;
            case 58:
              N + y + P === 0 && (se = U);
              break;
            case 44:
              y + Y + N + P === 0 && (le = 1, we += "\r");
              break;
            case 34:
            case 39:
              y === 0 && (N = N === C ? 0 : N === 0 ? C : N);
              break;
            case 91:
              N + y + Y === 0 && P++;
              break;
            case 93:
              N + y + Y === 0 && P--;
              break;
            case 41:
              N + y + P === 0 && Y--;
              break;
            case 40:
              if (N + y + P === 0) {
                if (I === 0)
                  switch (2 * te + 3 * L) {
                    case 533:
                      break;
                    default:
                      I = 1;
                  }
                Y++;
              }
              break;
            case 64:
              y + Y + N + P + se + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < N + P + Y))
                switch (y) {
                  case 0:
                    switch (2 * C + 3 * X.charCodeAt(U + 1)) {
                      case 235:
                        y = 47;
                        break;
                      case 220:
                        ne = U, y = 42;
                    }
                    break;
                  case 42:
                    C === 47 && te === 42 && ne + 2 !== U && (X.charCodeAt(ne + 2) === 33 && (ae += X.substring(ne, U + 1)), we = "", y = 0);
                }
          }
          y === 0 && (J += we);
      }
      L = te, te = C, U++;
    }
    if (ne = ae.length, 0 < ne) {
      if (le = j, 0 < q && ($e = c(2, ae, le, W, k, Q, ne, G, S, G), $e !== void 0 && (ae = $e).length === 0))
        return ke + ae + de;
      if (ae = le.join(",") + "{" + ae + "}", _ * T !== 0) {
        switch (_ !== 2 || s(ae, 2) || (T = 0), T) {
          case 111:
            ae = ae.replace(D, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(F, "::-webkit-input-$1") + ae.replace(F, "::-moz-$1") + ae.replace(F, ":-ms-input-$1") + ae;
        }
        T = 0;
      }
    }
    return ke + ae + de;
  }
  function t(W, j, X) {
    var G = j.trim().split(p);
    j = G;
    var S = G.length, P = W.length;
    switch (P) {
      case 0:
      case 1:
        var y = 0;
        for (W = P === 0 ? "" : W[0] + " "; y < S; ++y)
          j[y] = r(W, j[y], X).trim();
        break;
      default:
        var Y = y = 0;
        for (j = []; y < S; ++y)
          for (var N = 0; N < P; ++N)
            j[Y++] = r(W[N] + " ", G[y], X).trim();
    }
    return j;
  }
  function r(W, j, X) {
    var G = j.charCodeAt(0);
    switch (33 > G && (G = (j = j.trim()).charCodeAt(0)), G) {
      case 38:
        return j.replace(R, "$1" + W.trim());
      case 58:
        return W.trim() + j.replace(R, "$1" + W.trim());
      default:
        if (0 < 1 * X && 0 < j.indexOf("\f"))
          return j.replace(R, (W.charCodeAt(0) === 58 ? "" : "$1") + W.trim());
    }
    return W + j;
  }
  function o(W, j, X, G) {
    var S = W + ";", P = 2 * j + 3 * X + 4 * G;
    if (P === 944) {
      W = S.indexOf(":", 9) + 1;
      var y = S.substring(W, S.length - 1).trim();
      return y = S.substring(0, W).trim() + y + ";", _ === 1 || _ === 2 && s(y, 1) ? "-webkit-" + y + y : y;
    }
    if (_ === 0 || _ === 2 && !s(S, 1))
      return S;
    switch (P) {
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
          return S.replace(B, "$1-webkit-$2") + S;
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
        return y = S.substring(S.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + y + "-webkit-" + S + "-ms-flex-pack" + y + S;
      case 1005:
        return v.test(S) ? S.replace(w, ":-webkit-") + S.replace(w, ":-moz-") + S : S;
      case 1e3:
        switch (y = S.substring(13).trim(), j = y.indexOf("-") + 1, y.charCodeAt(0) + y.charCodeAt(j)) {
          case 226:
            y = S.replace(u, "tb");
            break;
          case 232:
            y = S.replace(u, "tb-rl");
            break;
          case 220:
            y = S.replace(u, "lr");
            break;
          default:
            return S;
        }
        return "-webkit-" + S + "-ms-" + y + S;
      case 1017:
        if (S.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (j = (S = W).length - 10, y = (S.charCodeAt(j) === 33 ? S.substring(0, j) : S).substring(W.indexOf(":", 7) + 1).trim(), P = y.charCodeAt(0) + (y.charCodeAt(7) | 0)) {
          case 203:
            if (111 > y.charCodeAt(8))
              break;
          case 115:
            S = S.replace(y, "-webkit-" + y) + ";" + S;
            break;
          case 207:
          case 102:
            S = S.replace(y, "-webkit-" + (102 < P ? "inline-" : "") + "box") + ";" + S.replace(y, "-webkit-" + y) + ";" + S.replace(y, "-ms-" + y + "box") + ";" + S;
        }
        return S + ";";
      case 938:
        if (S.charCodeAt(5) === 45)
          switch (S.charCodeAt(6)) {
            case 105:
              return y = S.replace("-items", ""), "-webkit-" + S + "-webkit-box-" + y + "-ms-flex-" + y + S;
            case 115:
              return "-webkit-" + S + "-ms-flex-item-" + S.replace(E, "") + S;
            default:
              return "-webkit-" + S + "-ms-flex-line-pack" + S.replace("align-content", "").replace(E, "") + S;
          }
        break;
      case 973:
      case 989:
        if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (H.test(W) === !0)
          return (y = W.substring(W.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(W.replace("stretch", "fill-available"), j, X, G).replace(":fill-available", ":stretch") : S.replace(y, "-webkit-" + y) + S.replace(y, "-moz-" + y.replace("fill-", "")) + S;
        break;
      case 962:
        if (S = "-webkit-" + S + (S.charCodeAt(5) === 102 ? "-ms-" + S : "") + S, X + G === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf("transform", 10))
          return S.substring(0, S.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + S;
    }
    return S;
  }
  function s(W, j) {
    var X = W.indexOf(j === 1 ? ":" : "{"), G = W.substring(0, j !== 3 ? X : 10);
    return X = W.substring(X + 1, W.length - 1), ee(j !== 2 ? G : G.replace(A, "$1"), X, j);
  }
  function i(W, j) {
    var X = o(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return X !== j + ";" ? X.replace(x, " or ($1)").substring(4) : "(" + j + ")";
  }
  function c(W, j, X, G, S, P, y, Y, N, I) {
    for (var C = 0, te = j, L; C < q; ++C)
      switch (L = O[C].call(l, W, te, X, G, S, P, y, Y, N, I)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          te = L;
      }
    if (te !== j)
      return te;
  }
  function d(W) {
    switch (W) {
      case void 0:
      case null:
        q = O.length = 0;
        break;
      default:
        if (typeof W == "function")
          O[q++] = W;
        else if (typeof W == "object")
          for (var j = 0, X = W.length; j < X; ++j)
            d(W[j]);
        else
          ie = !!W | 0;
    }
    return d;
  }
  function a(W) {
    return W = W.prefix, W !== void 0 && (ee = null, W ? typeof W != "function" ? _ = 1 : (_ = 2, ee = W) : _ = 0), a;
  }
  function l(W, j) {
    var X = W;
    if (33 > X.charCodeAt(0) && (X = X.trim()), oe = X, X = [oe], 0 < q) {
      var G = c(-1, j, X, X, k, Q, 0, 0, 0, 0);
      G !== void 0 && typeof G == "string" && (j = G);
    }
    var S = n(z, X, j, 0, 0);
    return 0 < q && (G = c(-2, S, X, X, k, Q, S.length, 0, 0, 0), G !== void 0 && (S = G)), oe = "", T = 0, Q = k = 1, S;
  }
  var f = /^\0+/g, g = /[\0\r\f]/g, w = /: */g, v = /zoo|gra/, M = /([,: ])(transform)/g, p = /,\r+?/g, R = /([\t\r\n ])*\f?&/g, V = /@(k\w+)\s*(\S*)\s*/, F = /::(place)/g, D = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, m = /\(\s*(.*)\s*\)/g, x = /([\s\S]*?);/g, E = /-self|flex-/g, A = /[^]*?(:[rp][el]a[\w-]+)[^]*/, H = /stretch|:\s*\w+\-(?:conte|avail)/, B = /([^-])(image-set\()/, Q = 1, k = 1, T = 0, _ = 1, z = [], O = [], q = 0, ee = null, ie = 0, oe = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var $o = {
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
function Do(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var Eo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fn = /* @__PURE__ */ Do(
  function(e) {
    return Eo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qt = {}, _o = {
  get exports() {
    return qt;
  },
  set exports(e) {
    qt = e;
  }
}, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function To() {
  if (Bn)
    return xe;
  Bn = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
  function F(u) {
    if (typeof u == "object" && u !== null) {
      var m = u.$$typeof;
      switch (m) {
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
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  function D(u) {
    return F(u) === a;
  }
  return xe.AsyncMode = d, xe.ConcurrentMode = a, xe.ContextConsumer = c, xe.ContextProvider = i, xe.Element = n, xe.ForwardRef = l, xe.Fragment = r, xe.Lazy = v, xe.Memo = w, xe.Portal = t, xe.Profiler = s, xe.StrictMode = o, xe.Suspense = f, xe.isAsyncMode = function(u) {
    return D(u) || F(u) === d;
  }, xe.isConcurrentMode = D, xe.isContextConsumer = function(u) {
    return F(u) === c;
  }, xe.isContextProvider = function(u) {
    return F(u) === i;
  }, xe.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, xe.isForwardRef = function(u) {
    return F(u) === l;
  }, xe.isFragment = function(u) {
    return F(u) === r;
  }, xe.isLazy = function(u) {
    return F(u) === v;
  }, xe.isMemo = function(u) {
    return F(u) === w;
  }, xe.isPortal = function(u) {
    return F(u) === t;
  }, xe.isProfiler = function(u) {
    return F(u) === s;
  }, xe.isStrictMode = function(u) {
    return F(u) === o;
  }, xe.isSuspense = function(u) {
    return F(u) === f;
  }, xe.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === g || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === w || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === p || u.$$typeof === R || u.$$typeof === V || u.$$typeof === M);
  }, xe.typeOf = F, xe;
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
var jn;
function Ao() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
    function F(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === r || C === a || C === s || C === o || C === f || C === g || typeof C == "object" && C !== null && (C.$$typeof === v || C.$$typeof === w || C.$$typeof === i || C.$$typeof === c || C.$$typeof === l || C.$$typeof === p || C.$$typeof === R || C.$$typeof === V || C.$$typeof === M);
    }
    function D(C) {
      if (typeof C == "object" && C !== null) {
        var te = C.$$typeof;
        switch (te) {
          case n:
            var L = C.type;
            switch (L) {
              case d:
              case a:
              case r:
              case s:
              case o:
              case f:
                return L;
              default:
                var K = L && L.$$typeof;
                switch (K) {
                  case c:
                  case l:
                  case v:
                  case w:
                  case i:
                    return K;
                  default:
                    return te;
                }
            }
          case t:
            return te;
        }
      }
    }
    var u = d, m = a, x = c, E = i, A = n, H = l, B = r, Q = v, k = w, T = t, _ = s, z = o, O = f, q = !1;
    function ee(C) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ie(C) || D(C) === d;
    }
    function ie(C) {
      return D(C) === a;
    }
    function oe(C) {
      return D(C) === c;
    }
    function W(C) {
      return D(C) === i;
    }
    function j(C) {
      return typeof C == "object" && C !== null && C.$$typeof === n;
    }
    function X(C) {
      return D(C) === l;
    }
    function G(C) {
      return D(C) === r;
    }
    function S(C) {
      return D(C) === v;
    }
    function P(C) {
      return D(C) === w;
    }
    function y(C) {
      return D(C) === t;
    }
    function Y(C) {
      return D(C) === s;
    }
    function N(C) {
      return D(C) === o;
    }
    function I(C) {
      return D(C) === f;
    }
    be.AsyncMode = u, be.ConcurrentMode = m, be.ContextConsumer = x, be.ContextProvider = E, be.Element = A, be.ForwardRef = H, be.Fragment = B, be.Lazy = Q, be.Memo = k, be.Portal = T, be.Profiler = _, be.StrictMode = z, be.Suspense = O, be.isAsyncMode = ee, be.isConcurrentMode = ie, be.isContextConsumer = oe, be.isContextProvider = W, be.isElement = j, be.isForwardRef = X, be.isFragment = G, be.isLazy = S, be.isMemo = P, be.isPortal = y, be.isProfiler = Y, be.isStrictMode = N, be.isSuspense = I, be.isValidElementType = F, be.typeOf = D;
  }()), be;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = To() : e.exports = Ao();
})(_o);
var $n = qt, Po = {
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
}, Oo = {
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
}, Dn = {};
Dn[$n.ForwardRef] = Oo;
Dn[$n.Memo] = Wr;
function Zn(e) {
  return $n.isMemo(e) ? Wr : Dn[e.$$typeof] || Po;
}
var Io = Object.defineProperty, Lo = Object.getOwnPropertyNames, Vn = Object.getOwnPropertySymbols, Ro = Object.getOwnPropertyDescriptor, No = Object.getPrototypeOf, Gn = Object.prototype;
function zr(e, n, t) {
  if (typeof n != "string") {
    if (Gn) {
      var r = No(n);
      r && r !== Gn && zr(e, r, t);
    }
    var o = Lo(n);
    Vn && (o = o.concat(Vn(n)));
    for (var s = Zn(e), i = Zn(n), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!Yo[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = Ro(n, d);
        try {
          Io(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ho = zr;
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
var Xn = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Qt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ct.typeOf(e);
}, It = Object.freeze([]), Ue = Object.freeze({});
function ut(e) {
  return typeof e == "function";
}
function en(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function En(e) {
  return e && typeof e.styledComponentId == "string";
}
var ft = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", _n = typeof window < "u" && "HTMLElement" in window, Wo = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), zo = {}, Fo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Bo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Fe(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Bo.apply(void 0, [Fo[e]].concat(t)).trim());
}
var jo = function() {
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
}(), Yt = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), wt = 1, Et = function(e) {
  if (Yt.has(e))
    return Yt.get(e);
  for (; Lt.has(wt); )
    wt++;
  var n = wt++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Fe(16, "" + n), Yt.set(e, n), Lt.set(n, e), n;
}, Zo = function(e) {
  return Lt.get(e);
}, Vo = function(e, n) {
  n >= wt && (wt = n + 1), Yt.set(e, n), Lt.set(n, e);
}, Go = "style[" + ft + '][data-styled-version="5.3.8"]', Xo = new RegExp("^" + ft + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Uo = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, Ko = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Xo);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (Vo(a, d), Uo(e, a, c[3]), e.getTag().insertRules(d, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, Jo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Fr = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(ft))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ft, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = Jo();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, qo = function() {
  function e(t) {
    var r = this.element = Fr(t);
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
}(), Qo = function() {
  function e(t) {
    var r = this.element = Fr(t);
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
}(), es = function() {
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
}(), Un = _n, ts = { isServer: !_n, useCSSOMInjection: !Wo }, Rt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ue), r === void 0 && (r = {}), this.options = Le({}, ts, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && _n && Un && (Un = !1, function(s) {
      for (var i = document.querySelectorAll(Go), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(ft) !== "active" && (Ko(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Et(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Le({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new es(i) : s ? new qo(i) : new Qo(i), new jo(t)));
    var t, r, o, s, i;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (Et(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Et(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(Et(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, s = "", i = 0; i < o; i++) {
        var c = Zo(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = r.getGroup(i);
          if (d && a && d.size) {
            var l = ft + ".g" + i + '[id="' + c + '"]', f = "";
            d !== void 0 && d.forEach(function(g) {
              g.length > 0 && (f += g + ",");
            }), s += "" + a + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ns = /(a)(d)/gi, Kn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function tn(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Kn(n % 52) + t;
  return (Kn(n % 52) + t).replace(ns, "$1-$2");
}
var qe = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Br = function(e) {
  return qe(5381, e);
};
function jr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (ut(t) && !En(t))
      return !1;
  }
  return !0;
}
var rs = Br("5.3.8"), os = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && jr(n), this.componentId = t, this.baseHash = qe(rs, t), this.baseStyle = r, Rt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = tt(this.rules, n, t, r).join(""), c = tn(qe(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = r(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = qe(this.baseHash, r.hash), f = "", g = 0; g < a; g++) {
        var w = this.rules[g];
        if (typeof w == "string")
          f += w, process.env.NODE_ENV !== "production" && (l = qe(l, w + g));
        else if (w) {
          var v = tt(w, n, t, r), M = Array.isArray(v) ? v.join("") : v;
          l = qe(l, M + g), f += M;
        }
      }
      if (f) {
        var p = tn(l >>> 0);
        if (!t.hasNameForId(o, p)) {
          var R = r(f, "." + p, void 0, o);
          t.insertRules(o, p, R);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), ss = /^\s*\/\/.*$/gm, is = [":", "[", ".", "#"];
function as(e) {
  var n, t, r, o, s = e === void 0 ? Ue : e, i = s.options, c = i === void 0 ? Ue : i, d = s.plugins, a = d === void 0 ? It : d, l = new ko(c), f = [], g = function(M) {
    function p(R) {
      if (R)
        try {
          M(R + "}");
        } catch {
        }
    }
    return function(R, V, F, D, u, m, x, E, A, H) {
      switch (R) {
        case 1:
          if (A === 0 && V.charCodeAt(0) === 64)
            return M(V + ";"), "";
          break;
        case 2:
          if (E === 0)
            return V + "/*|*/";
          break;
        case 3:
          switch (E) {
            case 102:
            case 112:
              return M(F[0] + V), "";
            default:
              return V + (H === 0 ? "/*|*/" : "");
          }
        case -2:
          V.split("/*|*/}").forEach(p);
      }
    };
  }(function(M) {
    f.push(M);
  }), w = function(M, p, R) {
    return p === 0 && is.indexOf(R[t.length]) !== -1 || R.match(o) ? M : "." + n;
  };
  function v(M, p, R, V) {
    V === void 0 && (V = "&");
    var F = M.replace(ss, ""), D = p && R ? R + " " + p + " { " + F + " }" : F;
    return n = V, t = p, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(R || !p ? "" : p, D);
  }
  return l.use([].concat(a, [function(M, p, R) {
    M === 2 && R.length && R[0].lastIndexOf(t) > 0 && (R[0] = R[0].replace(r, w));
  }, g, function(M) {
    if (M === -2) {
      var p = f;
      return f = [], p;
    }
  }])), v.hash = a.length ? a.reduce(function(M, p) {
    return p.name || Fe(15), qe(M, p.name);
  }, 5381).toString() : "", v;
}
var Zr = et.createContext();
Zr.Consumer;
var Vr = et.createContext(), cs = (Vr.Consumer, new Rt()), nn = as();
function Gr() {
  return Ke(Zr) || cs;
}
function Xr() {
  return Ke(Vr) || nn;
}
var Ur = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = nn);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Fe(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = nn), this.name + n.hash;
  }, e;
}(), ls = /([A-Z])/, ds = /([A-Z])/g, us = /^ms-/, fs = function(e) {
  return "-" + e.toLowerCase();
};
function Jn(e) {
  return ls.test(e) ? e.replace(ds, fs).replace(us, "-ms-") : e;
}
var qn = function(e) {
  return e == null || e === !1 || e === "";
};
function tt(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = tt(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (qn(e))
    return "";
  if (En(e))
    return "." + e.styledComponentId;
  if (ut(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var d = e(n);
    return process.env.NODE_ENV !== "production" && Ct.isElement(d) && console.warn(en(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), tt(d, n, t, r);
  }
  var a;
  return e instanceof Ur ? t ? (e.inject(t, r), e.getName(r)) : e : Qt(e) ? function l(f, g) {
    var w, v, M = [];
    for (var p in f)
      f.hasOwnProperty(p) && !qn(f[p]) && (Array.isArray(f[p]) && f[p].isCss || ut(f[p]) ? M.push(Jn(p) + ":", f[p], ";") : Qt(f[p]) ? M.push.apply(M, l(f[p], p)) : M.push(Jn(p) + ": " + (w = p, (v = f[p]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || w in $o ? String(v).trim() : v + "px") + ";"));
    return g ? [g + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var Qn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Wt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return ut(e) || Qt(e) ? Qn(tt(Xn(It, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Qn(tt(Xn(e, t)));
}
var er = /invalid hook call/i, _t = /* @__PURE__ */ new Set(), Kr = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (er.test(s))
          o = !1, _t.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          r.apply(void 0, [s].concat(c));
        }
      }, me(), o && !_t.has(t) && (console.warn(t), _t.add(t));
    } catch (s) {
      er.test(s.message) && _t.delete(t);
    } finally {
      console.error = r;
    }
  }
}, Jr = function(e, n, t) {
  return t === void 0 && (t = Ue), e.theme !== t.theme && e.theme || n || t.theme;
}, hs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ps = /(^-|-$)/g;
function jt(e) {
  return e.replace(hs, "-").replace(ps, "");
}
var Tn = function(e) {
  return tn(Br(e) >>> 0);
};
function Tt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var rn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ms = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function gs(e, n, t) {
  var r = e[t];
  rn(n) && rn(r) ? qr(r, n) : e[t] = n;
}
function qr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (rn(i))
      for (var c in i)
        ms(c) && gs(e, i[c], c);
  }
  return e;
}
var ht = et.createContext();
ht.Consumer;
function ys(e) {
  var n = Ke(ht), t = Ce(function() {
    return function(r, o) {
      if (!r)
        return Fe(14);
      if (ut(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Fe(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Fe(8) : o ? Le({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? et.createElement(ht.Provider, { value: t }, e.children) : null;
}
var Zt = {};
function Qr(e, n, t) {
  var r = En(e), o = !Tt(e), s = n.attrs, i = s === void 0 ? It : s, c = n.componentId, d = c === void 0 ? function(V, F) {
    var D = typeof V != "string" ? "sc" : jt(V);
    Zt[D] = (Zt[D] || 0) + 1;
    var u = D + "-" + Tn("5.3.8" + D + Zt[D]);
    return F ? F + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(V) {
    return Tt(V) ? "styled." + V : "Styled(" + en(V) + ")";
  }(e) : a, f = n.displayName && n.componentId ? jt(n.displayName) + "-" + n.componentId : n.componentId || d, g = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, w = n.shouldForwardProp;
  r && e.shouldForwardProp && (w = n.shouldForwardProp ? function(V, F, D) {
    return e.shouldForwardProp(V, F, D) && n.shouldForwardProp(V, F, D);
  } : e.shouldForwardProp);
  var v, M = new os(t, f, r ? e.componentStyle : void 0), p = M.isStatic && i.length === 0, R = function(V, F) {
    return function(D, u, m, x) {
      var E = D.attrs, A = D.componentStyle, H = D.defaultProps, B = D.foldedComponentIds, Q = D.shouldForwardProp, k = D.styledComponentId, T = D.target;
      process.env.NODE_ENV !== "production" && Hn(k);
      var _ = function(G, S, P) {
        G === void 0 && (G = Ue);
        var y = Le({}, S, { theme: G }), Y = {};
        return P.forEach(function(N) {
          var I, C, te, L = N;
          for (I in ut(L) && (L = L(y)), L)
            y[I] = Y[I] = I === "className" ? (C = Y[I], te = L[I], C && te ? C + " " + te : C || te) : L[I];
        }), [y, Y];
      }(Jr(u, Ke(ht), H) || Ue, u, E), z = _[0], O = _[1], q = function(G, S, P, y) {
        var Y = Gr(), N = Xr(), I = S ? G.generateAndInjectStyles(Ue, Y, N) : G.generateAndInjectStyles(P, Y, N);
        return process.env.NODE_ENV !== "production" && Hn(I), process.env.NODE_ENV !== "production" && !S && y && y(I), I;
      }(A, x, z, process.env.NODE_ENV !== "production" ? D.warnTooManyClasses : void 0), ee = m, ie = O.$as || u.$as || O.as || u.as || T, oe = Tt(ie), W = O !== u ? Le({}, u, {}, O) : u, j = {};
      for (var X in W)
        X[0] !== "$" && X !== "as" && (X === "forwardedAs" ? j.as = W[X] : (Q ? Q(X, Fn, ie) : !oe || Fn(X)) && (j[X] = W[X]));
      return u.style && O.style !== u.style && (j.style = Le({}, u.style, {}, O.style)), j.className = Array.prototype.concat(B, k, q !== k ? q : null, u.className, O.className).filter(Boolean).join(" "), j.ref = ee, bo(ie, j);
    }(v, V, F, p);
  };
  return R.displayName = l, (v = et.forwardRef(R)).attrs = g, v.componentStyle = M, v.displayName = l, v.shouldForwardProp = w, v.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : It, v.styledComponentId = f, v.target = r ? e.target : e, v.withComponent = function(V) {
    var F = n.componentId, D = function(m, x) {
      if (m == null)
        return {};
      var E, A, H = {}, B = Object.keys(m);
      for (A = 0; A < B.length; A++)
        E = B[A], x.indexOf(E) >= 0 || (H[E] = m[E]);
      return H;
    }(n, ["componentId"]), u = F && F + "-" + (Tt(V) ? V : jt(en(V)));
    return Qr(V, Le({}, D, { attrs: g, componentId: u }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(V) {
    this._foldedDefaultProps = r ? qr({}, e.defaultProps, V) : V;
  } }), process.env.NODE_ENV !== "production" && (Kr(l, f), v.warnTooManyClasses = function(V, F) {
    var D = {}, u = !1;
    return function(m) {
      if (!u && (D[m] = !0, Object.keys(D).length >= 200)) {
        var x = F ? ' with the id of "' + F + '"' : "";
        console.warn("Over 200 classes were generated for component " + V + x + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, D = {};
      }
    };
  }(l, f)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && Ho(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var on = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Ue), !Ct.isValidElementType(r))
      return Fe(1, String(r));
    var s = function() {
      return t(r, o, Wt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Le({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Le({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Qr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  on[e] = on(e);
});
var vs = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = jr(t), Rt.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(tt(this.rules, r, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && Rt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function xs(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Wt.apply(void 0, [e].concat(t)), s = "sc-global-" + Tn(JSON.stringify(o)), i = new vs(o, s);
  function c(a) {
    var l = Gr(), f = Xr(), g = Ke(ht), w = me(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && et.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(w, a, l, g, f), Mn(function() {
      if (!l.server)
        return d(w, a, l, g, f), function() {
          return i.removeStyles(w, l);
        };
    }, [w, a, l, g, f]), null;
  }
  function d(a, l, f, g, w) {
    if (i.isStatic)
      i.renderStyles(a, zo, f, w);
    else {
      var v = Le({}, l, { theme: Jr(l, g, c.defaultProps) });
      i.renderStyles(a, v, f, w);
    }
  }
  return process.env.NODE_ENV !== "production" && Kr(s), et.memo(c);
}
function zt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Wt.apply(void 0, [e].concat(t)).join(""), s = Tn(o);
  return new Ur(s, o);
}
var Ft = function() {
  return Ke(ht);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const b = on, bt = "reactSchedulerOutsideWrapper", Ie = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", bs = xs`

  #${bt} {
    font-family: ${Ie};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${bt} *,
 #${bt} *:before,
 #${bt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, ws = {
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
}, Ss = {
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
}, yt = `
margin: 0;
padding: 0;
`, vt = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
b.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Me = 50, je = 24, xt = 16, Qe = 40, pt = Qe + xt + je, mt = 84, he = 56, Oe = 196, Ye = 12, Ae = 50, gt = 24, Mt = 16, sn = 40, Cs = gt + Mt + sn, tr = 24, nr = 52, Re = {
  topRow: `600 14px ${Ie}`,
  middleRow: `400 10px ${Ie}`,
  bottomRow: {
    name: `600 14px ${Ie}`,
    number: `600 10px ${Ie}`,
    hoursInDay: `400 9px ${Ie}`
  }
}, dt = 3, Ms = 1.6, ks = 4.5, an = 12, Nt = 24, $s = "reactSchedulerCanvasHeaderWrapper", eo = "reactSchedulerCanvasWrapper", Be = bt, Ds = 4, An = 48, Xe = 5, Es = 40, rr = 8, Pn = je / 2 + 2, to = xt / 2 + je + 1, or = 2, De = 60, Pe = 21, no = 58;
var nt = {}, _s = {
  get exports() {
    return nt;
  },
  set exports(e) {
    nt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Te, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", g = "quarter", w = "year", v = "date", M = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, R = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, V = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
      var T = ["th", "st", "nd", "rd"], _ = k % 100;
      return "[" + k + (T[(_ - 20) % 10] || T[_] || T[0]) + "]";
    } }, F = function(k, T, _) {
      var z = String(k);
      return !z || z.length >= T ? k : "" + Array(T + 1 - z.length).join(_) + k;
    }, D = { s: F, z: function(k) {
      var T = -k.utcOffset(), _ = Math.abs(T), z = Math.floor(_ / 60), O = _ % 60;
      return (T <= 0 ? "+" : "-") + F(z, 2, "0") + ":" + F(O, 2, "0");
    }, m: function k(T, _) {
      if (T.date() < _.date())
        return -k(_, T);
      var z = 12 * (_.year() - T.year()) + (_.month() - T.month()), O = T.clone().add(z, f), q = _ - O < 0, ee = T.clone().add(z + (q ? -1 : 1), f);
      return +(-(z + (_ - O) / (q ? O - ee : ee - O)) || 0);
    }, a: function(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
    }, p: function(k) {
      return { M: f, y: w, w: l, d: a, D: v, h: d, m: c, s: i, ms: s, Q: g }[k] || String(k || "").toLowerCase().replace(/s$/, "");
    }, u: function(k) {
      return k === void 0;
    } }, u = "en", m = {};
    m[u] = V;
    var x = function(k) {
      return k instanceof B;
    }, E = function k(T, _, z) {
      var O;
      if (!T)
        return u;
      if (typeof T == "string") {
        var q = T.toLowerCase();
        m[q] && (O = q), _ && (m[q] = _, O = q);
        var ee = T.split("-");
        if (!O && ee.length > 1)
          return k(ee[0]);
      } else {
        var ie = T.name;
        m[ie] = T, O = ie;
      }
      return !z && O && (u = O), O || !z && u;
    }, A = function(k, T) {
      if (x(k))
        return k.clone();
      var _ = typeof T == "object" ? T : {};
      return _.date = k, _.args = arguments, new B(_);
    }, H = D;
    H.l = E, H.i = x, H.w = function(k, T) {
      return A(k, { locale: T.$L, utc: T.$u, x: T.$x, $offset: T.$offset });
    };
    var B = function() {
      function k(_) {
        this.$L = E(_.locale, null, !0), this.parse(_);
      }
      var T = k.prototype;
      return T.parse = function(_) {
        this.$d = function(z) {
          var O = z.date, q = z.utc;
          if (O === null)
            return new Date(NaN);
          if (H.u(O))
            return new Date();
          if (O instanceof Date)
            return new Date(O);
          if (typeof O == "string" && !/Z$/i.test(O)) {
            var ee = O.match(p);
            if (ee) {
              var ie = ee[2] - 1 || 0, oe = (ee[7] || "0").substring(0, 3);
              return q ? new Date(Date.UTC(ee[1], ie, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe)) : new Date(ee[1], ie, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe);
            }
          }
          return new Date(O);
        }(_), this.$x = _.x || {}, this.init();
      }, T.init = function() {
        var _ = this.$d;
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
      }, T.$utils = function() {
        return H;
      }, T.isValid = function() {
        return this.$d.toString() !== M;
      }, T.isSame = function(_, z) {
        var O = A(_);
        return this.startOf(z) <= O && O <= this.endOf(z);
      }, T.isAfter = function(_, z) {
        return A(_) < this.startOf(z);
      }, T.isBefore = function(_, z) {
        return this.endOf(z) < A(_);
      }, T.$g = function(_, z, O) {
        return H.u(_) ? this[z] : this.set(O, _);
      }, T.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, T.valueOf = function() {
        return this.$d.getTime();
      }, T.startOf = function(_, z) {
        var O = this, q = !!H.u(z) || z, ee = H.p(_), ie = function(y, Y) {
          var N = H.w(O.$u ? Date.UTC(O.$y, Y, y) : new Date(O.$y, Y, y), O);
          return q ? N : N.endOf(a);
        }, oe = function(y, Y) {
          return H.w(O.toDate()[y].apply(O.toDate("s"), (q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), O);
        }, W = this.$W, j = this.$M, X = this.$D, G = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case w:
            return q ? ie(1, 0) : ie(31, 11);
          case f:
            return q ? ie(1, j) : ie(0, j + 1);
          case l:
            var S = this.$locale().weekStart || 0, P = (W < S ? W + 7 : W) - S;
            return ie(q ? X - P : X + (6 - P), j);
          case a:
          case v:
            return oe(G + "Hours", 0);
          case d:
            return oe(G + "Minutes", 1);
          case c:
            return oe(G + "Seconds", 2);
          case i:
            return oe(G + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, T.endOf = function(_) {
        return this.startOf(_, !1);
      }, T.$set = function(_, z) {
        var O, q = H.p(_), ee = "set" + (this.$u ? "UTC" : ""), ie = (O = {}, O[a] = ee + "Date", O[v] = ee + "Date", O[f] = ee + "Month", O[w] = ee + "FullYear", O[d] = ee + "Hours", O[c] = ee + "Minutes", O[i] = ee + "Seconds", O[s] = ee + "Milliseconds", O)[q], oe = q === a ? this.$D + (z - this.$W) : z;
        if (q === f || q === w) {
          var W = this.clone().set(v, 1);
          W.$d[ie](oe), W.init(), this.$d = W.set(v, Math.min(this.$D, W.daysInMonth())).$d;
        } else
          ie && this.$d[ie](oe);
        return this.init(), this;
      }, T.set = function(_, z) {
        return this.clone().$set(_, z);
      }, T.get = function(_) {
        return this[H.p(_)]();
      }, T.add = function(_, z) {
        var O, q = this;
        _ = Number(_);
        var ee = H.p(z), ie = function(j) {
          var X = A(q);
          return H.w(X.date(X.date() + Math.round(j * _)), q);
        };
        if (ee === f)
          return this.set(f, this.$M + _);
        if (ee === w)
          return this.set(w, this.$y + _);
        if (ee === a)
          return ie(1);
        if (ee === l)
          return ie(7);
        var oe = (O = {}, O[c] = r, O[d] = o, O[i] = t, O)[ee] || 1, W = this.$d.getTime() + _ * oe;
        return H.w(W, this);
      }, T.subtract = function(_, z) {
        return this.add(-1 * _, z);
      }, T.format = function(_) {
        var z = this, O = this.$locale();
        if (!this.isValid())
          return O.invalidDate || M;
        var q = _ || "YYYY-MM-DDTHH:mm:ssZ", ee = H.z(this), ie = this.$H, oe = this.$m, W = this.$M, j = O.weekdays, X = O.months, G = function(Y, N, I, C) {
          return Y && (Y[N] || Y(z, q)) || I[N].slice(0, C);
        }, S = function(Y) {
          return H.s(ie % 12 || 12, Y, "0");
        }, P = O.meridiem || function(Y, N, I) {
          var C = Y < 12 ? "AM" : "PM";
          return I ? C.toLowerCase() : C;
        }, y = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: W + 1, MM: H.s(W + 1, 2, "0"), MMM: G(O.monthsShort, W, X, 3), MMMM: G(X, W), D: this.$D, DD: H.s(this.$D, 2, "0"), d: String(this.$W), dd: G(O.weekdaysMin, this.$W, j, 2), ddd: G(O.weekdaysShort, this.$W, j, 3), dddd: j[this.$W], H: String(ie), HH: H.s(ie, 2, "0"), h: S(1), hh: S(2), a: P(ie, oe, !0), A: P(ie, oe, !1), m: String(oe), mm: H.s(oe, 2, "0"), s: String(this.$s), ss: H.s(this.$s, 2, "0"), SSS: H.s(this.$ms, 3, "0"), Z: ee };
        return q.replace(R, function(Y, N) {
          return N || y[Y] || ee.replace(":", "");
        });
      }, T.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, T.diff = function(_, z, O) {
        var q, ee = H.p(z), ie = A(_), oe = (ie.utcOffset() - this.utcOffset()) * r, W = this - ie, j = H.m(this, ie);
        return j = (q = {}, q[w] = j / 12, q[f] = j, q[g] = j / 3, q[l] = (W - oe) / 6048e5, q[a] = (W - oe) / 864e5, q[d] = W / o, q[c] = W / r, q[i] = W / t, q)[ee] || W, O ? j : H.a(j);
      }, T.daysInMonth = function() {
        return this.endOf(f).$D;
      }, T.$locale = function() {
        return m[this.$L];
      }, T.locale = function(_, z) {
        if (!_)
          return this.$L;
        var O = this.clone(), q = E(_, z, !0);
        return q && (O.$L = q), O;
      }, T.clone = function() {
        return H.w(this.$d, this);
      }, T.toDate = function() {
        return new Date(this.valueOf());
      }, T.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, T.toISOString = function() {
        return this.$d.toISOString();
      }, T.toString = function() {
        return this.$d.toUTCString();
      }, k;
    }(), Q = B.prototype;
    return A.prototype = Q, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", w], ["$D", v]].forEach(function(k) {
      Q[k[1]] = function(T) {
        return this.$g(T, k[0], k[1]);
      };
    }), A.extend = function(k, T) {
      return k.$i || (k(T, B, A), k.$i = !0), A;
    }, A.locale = E, A.isDayjs = x, A.unix = function(k) {
      return A(1e3 * k);
    }, A.en = m[u], A.Ls = m, A.p = {}, A;
  });
})(_s);
const $ = nt, sr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Yn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, ro = (e, n) => $(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), oo = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Yn(e),
  isCurrentDay: e.isSame($(), "day"),
  year: parseInt(e.format("YYYY"))
});
let At = null;
const Ts = (e) => {
  if (At)
    return At;
  const n = document.createElement("canvas");
  n.width = 12, n.height = 12;
  const t = n.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), At = e.createPattern(n, "repeat"), At) : null;
}, On = (e, n, t, r, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, he), c && !s) {
    const d = Ts(e);
    d && (e.fillStyle = d, e.fillRect(n, t, r, he));
  }
  e.strokeRect(n + 0.5, t + 0.5, r, he);
}, In = (e, n) => {
  let t = 0;
  for (const r of n)
    r <= e && t++;
  return t * Pe;
}, As = (e, n, t, r, o, s = []) => {
  for (let i = 0; i < n; i++) {
    const c = In(i, s);
    for (let d = 0; d <= t; d++) {
      const a = $(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame($(), "day"), f = a.isBefore($(), "day");
      On(
        e,
        d * Me,
        i * he + c,
        Me,
        Yn(a),
        l,
        o,
        f
      );
    }
  }
}, Ps = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, Ys = (e, n, t, r, o, s = []) => {
  let i = 0, c = -(r.dayOfMonth - 1) * Ye;
  const d = n * he + s.length * Pe;
  for (let a = 0; a <= t; a++) {
    const f = $(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame($(), "week");
    for (let g = 0; g < n; g++) {
      const w = In(g, s);
      On(e, i, g * he + w, mt, !0, f, o);
    }
    i += mt;
  }
  for (let a = 0; a < t; a++) {
    const l = ro(r, a) * Ye;
    Ps(e, c, d, o), c += l;
  }
}, Os = (e, n, t, r, o, s = []) => {
  const i = $(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let c = 0; c < n; c++) {
    const d = In(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = $() : a > Math.floor(t / 2) ? l = $().add(a - Math.floor(t / 2), "hours") : l = $().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame($(), "day") && l.isSame($(), "hour");
      On(
        e,
        a * Ae + Ae / 2 - 0.5,
        c * he + d,
        Ae,
        Yn(l),
        f,
        o
      );
    }
  }
}, Is = (e, n, t, r) => {
  const o = t * he + n * Pe, s = e.canvas.width, i = o + Pe / 2;
  e.fillStyle = r.mode === "dark" ? r.colors.primary + "80" : r.colors.primary, e.fillRect(0, o, s, Pe), e.strokeStyle = r.colors.border, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, i + 0.5), e.lineTo(s, i + 0.5), e.stroke();
}, Ls = (e, n, t, r, o, s, i = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(eo)) {
    switch (n) {
      case 0:
        Ys(e, t, r, o, s, i);
        break;
      case 1:
        As(e, t, r, o, s, i);
        break;
      case 2:
        Os(e, t, r, o, s, i);
        break;
    }
    for (let d = 0; d < i.length; d++)
      Is(e, d, i[d], s);
  }
};
var cn = {}, Rs = {
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
  })(Te, function() {
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
        var g = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), w = this.diff(g, t, !0);
        return w < 0 ? i(this).startOf("week").week() : Math.ceil(w);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(Rs);
const Ns = cn;
var ln = {}, Hs = {
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
  })(Te, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Hs);
const Ws = ln;
var dn = {}, zs = {
  get exports() {
    return dn;
  },
  set exports(e) {
    dn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Te, function() {
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
        var l, f, g, w, v = i(this), M = (l = this.isoWeekYear(), f = this.$u, g = (f ? s.utc : s)().year(l).startOf("year"), w = 4 - g.isoWeekday(), g.isoWeekday() > 4 && (w += 7), g.add(w, t));
        return v.diff(M, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var d = c.startOf;
      c.startOf = function(a, l) {
        var f = this.$utils(), g = !!f.u(l) || l;
        return f.p(a) === "isoweek" ? g ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : d.bind(this)(a, l);
      };
    };
  });
})(zs);
const Fs = dn;
var un = {}, Bs = {
  get exports() {
    return un;
  },
  set exports(e) {
    un = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Te, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), f = (d = d || "()")[0] === "(", g = d[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (g ? this.isBefore(l, c) : !this.isAfter(l, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (g ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(Bs);
const js = un;
var fn = {}, Zs = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Te, function() {
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, w = function(u) {
      return u instanceof D;
    }, v = function(u, m, x) {
      return new D(u, x, m.$l);
    }, M = function(u) {
      return r.p(u) + "s";
    }, p = function(u) {
      return u < 0;
    }, R = function(u) {
      return p(u) ? Math.ceil(u) : Math.floor(u);
    }, V = function(u) {
      return Math.abs(u);
    }, F = function(u, m) {
      return u ? p(u) ? { negative: !0, format: "" + V(u) + m } : { negative: !1, format: "" + u + m } : { negative: !1, format: "" };
    }, D = function() {
      function u(x, E, A) {
        var H = this;
        if (this.$d = {}, this.$l = A, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E)
          return v(x * g[M(E)], this);
        if (typeof x == "number")
          return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object")
          return Object.keys(x).forEach(function(k) {
            H.$d[M(k)] = x[k];
          }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var B = x.match(f);
          if (B) {
            var Q = B.slice(2).map(function(k) {
              return k != null ? Number(k) : 0;
            });
            return this.$d.years = Q[0], this.$d.months = Q[1], this.$d.weeks = Q[2], this.$d.days = Q[3], this.$d.hours = Q[4], this.$d.minutes = Q[5], this.$d.seconds = Q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var m = u.prototype;
      return m.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(E, A) {
          return E + (x.$d[A] || 0) * g[A];
        }, 0);
      }, m.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = R(x / a), x %= a, this.$d.months = R(x / l), x %= l, this.$d.days = R(x / c), x %= c, this.$d.hours = R(x / i), x %= i, this.$d.minutes = R(x / s), x %= s, this.$d.seconds = R(x / o), x %= o, this.$d.milliseconds = x;
      }, m.toISOString = function() {
        var x = F(this.$d.years, "Y"), E = F(this.$d.months, "M"), A = +this.$d.days || 0;
        this.$d.weeks && (A += 7 * this.$d.weeks);
        var H = F(A, "D"), B = F(this.$d.hours, "H"), Q = F(this.$d.minutes, "M"), k = this.$d.seconds || 0;
        this.$d.milliseconds && (k += this.$d.milliseconds / 1e3);
        var T = F(k, "S"), _ = x.negative || E.negative || H.negative || B.negative || Q.negative || T.negative, z = B.format || Q.format || T.format ? "T" : "", O = (_ ? "-" : "") + "P" + x.format + E.format + H.format + z + B.format + Q.format + T.format;
        return O === "P" || O === "-P" ? "P0D" : O;
      }, m.toJSON = function() {
        return this.toISOString();
      }, m.format = function(x) {
        var E = x || "YYYY-MM-DDTHH:mm:ss", A = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return E.replace(d, function(H, B) {
          return B || String(A[H]);
        });
      }, m.as = function(x) {
        return this.$ms / g[M(x)];
      }, m.get = function(x) {
        var E = this.$ms, A = M(x);
        return A === "milliseconds" ? E %= 1e3 : E = A === "weeks" ? R(E / g[A]) : this.$d[A], E === 0 ? 0 : E;
      }, m.add = function(x, E, A) {
        var H;
        return H = E ? x * g[M(E)] : w(x) ? x.$ms : v(x, this).$ms, v(this.$ms + H * (A ? -1 : 1), this);
      }, m.subtract = function(x, E) {
        return this.add(x, E, !0);
      }, m.locale = function(x) {
        var E = this.clone();
        return E.$l = x, E;
      }, m.clone = function() {
        return v(this.$ms, this);
      }, m.humanize = function(x) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
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
    return function(u, m, x) {
      t = x, r = x().$utils(), x.duration = function(H, B) {
        var Q = x.locale();
        return v(H, { $l: Q }, B);
      }, x.isDuration = w;
      var E = m.prototype.add, A = m.prototype.subtract;
      m.prototype.add = function(H, B) {
        return w(H) && (H = H.asMilliseconds()), E.bind(this)(H, B);
      }, m.prototype.subtract = function(H, B) {
        return w(H) && (H = H.asMilliseconds()), A.bind(this)(H, B);
      };
    };
  });
})(Zs);
const Vs = fn;
var Gs = "Expected a function", ir = 0 / 0, Xs = "[object Symbol]", Us = /^\s+|\s+$/g, Ks = /^[-+]0x[0-9a-f]+$/i, Js = /^0b[01]+$/i, qs = /^0o[0-7]+$/i, Qs = parseInt, ei = typeof Te == "object" && Te && Te.Object === Object && Te, ti = typeof self == "object" && self && self.Object === Object && self, ni = ei || ti || Function("return this")(), ri = Object.prototype, oi = ri.toString, si = Math.max, ii = Math.min, Vt = function() {
  return ni.Date.now();
};
function ai(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Gs);
  n = ar(n) || 0, hn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? si(ar(t.maxWait) || 0, n) : s, g = "trailing" in t ? !!t.trailing : g);
  function w(m) {
    var x = r, E = o;
    return r = o = void 0, a = m, i = e.apply(E, x), i;
  }
  function v(m) {
    return a = m, c = setTimeout(R, n), l ? w(m) : i;
  }
  function M(m) {
    var x = m - d, E = m - a, A = n - x;
    return f ? ii(A, s - E) : A;
  }
  function p(m) {
    var x = m - d, E = m - a;
    return d === void 0 || x >= n || x < 0 || f && E >= s;
  }
  function R() {
    var m = Vt();
    if (p(m))
      return V(m);
    c = setTimeout(R, M(m));
  }
  function V(m) {
    return c = void 0, g && r ? w(m) : (r = o = void 0, i);
  }
  function F() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function D() {
    return c === void 0 ? i : V(Vt());
  }
  function u() {
    var m = Vt(), x = p(m);
    if (r = arguments, o = this, d = m, x) {
      if (c === void 0)
        return v(d);
      if (f)
        return c = setTimeout(R, n), w(d);
    }
    return c === void 0 && (c = setTimeout(R, n)), i;
  }
  return u.cancel = F, u.flush = D, u;
}
function hn(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function ci(e) {
  return !!e && typeof e == "object";
}
function li(e) {
  return typeof e == "symbol" || ci(e) && oi.call(e) == Xs;
}
function ar(e) {
  if (typeof e == "number")
    return e;
  if (li(e))
    return ir;
  if (hn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Us, "");
  var t = Js.test(e);
  return t || qs.test(e) ? Qs(e.slice(2), t ? 2 : 8) : Ks.test(e) ? ir : +e;
}
var ct = ai;
const Ot = [0, 1, 2];
var kt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(kt || {});
const so = (e) => Ot.includes(e), lt = (e) => {
  var r;
  const t = (((r = document.getElementById(Be)) == null ? void 0 : r.clientWidth) || 0) - Oe;
  switch (e) {
    case 1:
      return Math.ceil(t / Me) * dt;
    case 2:
      return Math.ceil(t / Ae) * dt;
    default:
      return Math.ceil(t / mt) * dt;
  }
}, pn = (e) => lt(e) / dt, Ln = (e, n) => {
  const t = lt(n) / 2;
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
}, di = (e, n) => {
  const t = Ln(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Rn = () => {
  var t;
  return ((((t = document.getElementById(Be)) == null ? void 0 : t.clientWidth) || 0) - Oe) * dt;
}, io = Nr({
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
  date: $(),
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
$.extend(Ns);
$.extend(Ws);
$.extend(Fs);
$.extend(js);
$.extend(Vs);
const ui = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = $(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = fe(d), [g, w] = fe($()), [v, M] = fe(!1), [p, R] = fe(lt(l)), V = Ot[l] !== Ot[Ot.length - 1], F = l !== 0, D = Ce(() => di(g, l), [g, l]), u = Ln(g, l).startDate, m = $(u).dayOfYear(), x = oo(u), E = me(null), [A, H] = fe([{ x: 0, y: 0 }]), B = ce(
    (G, S = "auto") => {
      var y, Y, N, I;
      const P = Rn();
      switch (G) {
        case "back":
          return (y = E.current) == null ? void 0 : y.scrollTo({
            behavior: S,
            left: P / 3
          });
        case "forward":
          return (Y = E.current) == null ? void 0 : Y.scrollTo({
            behavior: S,
            left: P / 3
          });
        case "middle": {
          const C = P / dt / 4;
          return (N = E.current) == null ? void 0 : N.scrollTo({
            behavior: S,
            left: P / 2 - C
          });
        }
        default:
          return (I = E.current) == null ? void 0 : I.scrollTo({
            behavior: S,
            left: P / 2
          });
      }
    },
    []
  ), Q = (G) => {
    H(G);
  }, k = ce(
    (G) => {
      const S = pn(l);
      let P;
      switch (l) {
        case 0:
          P = S * 7;
          break;
        case 1:
          P = S;
          break;
        case 2:
          P = Math.ceil(S / Nt);
          break;
      }
      ct(() => {
        switch (G) {
          case "back":
            w((Y) => Y.subtract(P, "days"));
            break;
          case "forward":
            w((Y) => Y.add(P, "days"));
            break;
          case "middle":
            w($());
            break;
        }
        s == null || s(D);
      }, 300)();
    },
    [s, D, l]
  );
  ge(() => {
    E.current = document.getElementById(Be), R(lt(l));
  }, [l]), ge(() => {
    const G = () => R(lt(l));
    return window.addEventListener("resize", G), () => window.removeEventListener("resize", G);
  }, [l]), ge(() => {
    s == null || s(D);
  }, [s, D]), ge(() => {
    M(!1);
  }, [o]), ge(() => {
    v || (B("middle"), M(!0), w(o));
  }, [o, v, B]);
  const T = () => {
    t || (w(
      (G) => l === 2 ? G.add(tr, "hours") : G.add(or, "weeks")
    ), s == null || s(D));
  }, _ = ce(() => {
    t || (k("forward"), ct(() => {
      B("forward");
    }, 500)());
  }, [t, k, B]), z = () => {
    t || (w(
      (G) => l === 2 ? G.subtract(tr, "hours") : G.subtract(or, "weeks")
    ), s == null || s(D));
  }, O = ce(() => {
    !v || t || (k("back"), ct(() => {
      B("back");
    }, 500)());
  }, [v, t, k, B]), q = ce(() => {
    t || (k("middle"), ct(() => {
      B("middle", "auto");
    }, 300)());
  }, [t, k, B]), ee = ce(
    (G) => {
      if (t)
        return;
      const S = $(G).startOf("day");
      S.isValid() && (w(S), s == null || s(D), setTimeout(() => {
        B("middle", "auto");
      }, 300));
    },
    [t, B, s, D]
  ), ie = () => W(l + 1), oe = () => W(l - 1), W = (G) => {
    so(G) && (f(G), R(lt(G)), s == null || s(D));
  }, j = () => i == null ? void 0 : i(), { Provider: X } = io;
  return /* @__PURE__ */ h(
    X,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: T,
        handleScrollNext: _,
        handleGoPrev: z,
        handleScrollPrev: O,
        handleGoToday: q,
        goToDate: ee,
        zoomIn: ie,
        zoomOut: oe,
        setZoom: W,
        zoom: l,
        isNextZoom: V,
        isPrevZoom: F,
        date: g,
        isLoading: t,
        cols: p,
        startDate: x,
        dayOfYear: m,
        toggleDisplayActiveUnits: j,
        tilesCoords: A,
        updateTilesCoords: Q,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: n
    }
  );
}, Ze = () => Ke(io), ao = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, co = (e, n) => {
  if (n.length === 0)
    return e;
  let t = e, r = 0;
  for (const o of n) {
    const s = o * he + r * Pe;
    if (e >= s + Pe)
      r++;
    else if (e >= s)
      return o * he + r * Pe - r * Pe;
  }
  return t - r * Pe;
}, fi = 5, cr = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > fi;
}, St = (e, n, t) => {
  const r = t.getBoundingClientRect();
  return {
    x: e - r.left + t.scrollLeft,
    y: n - r.top + t.scrollTop
  };
}, hi = ({
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
  const a = n ? n.length > 0 && n[0].data.length > 0 && !Array.isArray(n[0].data[0]) ? n.map((P) => ({ ...P, data: [P.data] })) : n : e, {
    enabled: l = !0,
    isDraggable: f,
    resourceOnly: g = !1,
    isValidDrop: w
  } = i, [v, M] = fe("idle"), [p, R] = fe(null), [V, F] = fe({ x: 0, y: 0 }), [D, u] = fe({ width: 0, height: 48 }), [m, x] = fe(null), [E, A] = fe(!0), H = me({ x: 0, y: 0 }), B = me({ x: 0, y: 0 }), Q = me({ x: 0, y: 0 }), k = me(null), T = me(null), _ = me(0), z = me(null), O = ce(
    (P) => !l || P.draggable === !1 ? !1 : f ? f(P) : !0,
    [l, f]
  ), q = ce(
    (P, y) => {
      const Y = co(y, d), N = Math.floor(Y / he);
      let I;
      switch (t) {
        case 0:
          I = Ye * 7;
          break;
        case 1:
          I = Me;
          break;
        case 2:
          I = Ae;
          break;
        default:
          I = Me;
      }
      const C = Math.floor(P / I);
      let te;
      const L = $().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          te = L.add(C * 7, "days").toDate();
          break;
        case 1:
          te = L.add(C, "days").toDate();
          break;
        case 2:
          te = L.add(C, "hours").toDate();
          break;
        default:
          te = L.toDate();
      }
      return { snappedDate: te, snappedResourceIndex: N };
    },
    [t, r, d]
  ), ee = ce(
    (P, y, Y, N) => {
      const I = [], C = y.getTime(), te = Y.getTime(), L = a.find((se) => se.id === N);
      if (!L)
        return I;
      const K = [];
      for (const se of L.data)
        Array.isArray(se) ? K.push(...se) : K.push(se);
      for (const se of K) {
        if (se.segmentId === P.segmentId)
          continue;
        const U = se.startDate.getTime(), le = se.endDate.getTime();
        if (C >= U && C < le || te > U && te <= le || C <= U && te >= le) {
          const ne = new Date(Math.max(C, U)), pe = new Date(Math.min(te, le)), Se = pe.getTime() - ne.getTime();
          I.push({
            event: se,
            conflictStart: ne,
            conflictEnd: pe,
            overlapDuration: Se
          });
        }
      }
      return I;
    },
    [a]
  ), ie = ce(
    (P, y, Y, N) => {
      const I = [], C = y.getTime(), te = Y.getTime(), L = $(y).format("YYYY-MM-DD"), K = a.find((U) => U.id === N);
      if (!K)
        return I;
      const se = [];
      for (const U of K.data)
        Array.isArray(U) ? se.push(...U) : se.push(U);
      for (const U of se) {
        if (U.segmentId === P.segmentId)
          continue;
        const le = U.startDate.getTime(), ue = U.endDate.getTime(), ne = $(U.startDate).format("YYYY-MM-DD"), pe = $(U.endDate).format("YYYY-MM-DD"), Se = $(Y).format("YYYY-MM-DD");
        if (!(ne === L || pe === L || ne === Se || pe === Se || $(U.startDate).isBefore(y, "day") && $(U.endDate).isAfter(Y, "day")) || C >= le && C < ue || te > le && te <= ue || C <= le && te >= ue)
          continue;
        let ae, de;
        ue <= C ? (ae = C - ue, de = "before") : (ae = le - te, de = "after"), I.push({
          event: U,
          timeGap: ae,
          position: de
        });
      }
      return I.sort((U, le) => U.timeGap - le.timeGap);
    },
    [a]
  ), oe = ce(
    (P, y, Y) => {
      const N = q(y, Y);
      let I, C;
      if (g)
        I = P.startDate, C = P.endDate;
      else {
        const ue = $(P.endDate).diff(P.startDate);
        I = N.snappedDate, C = $(I).add(ue, "milliseconds").toDate();
      }
      let te = 0, L = "", K;
      for (const ue of e) {
        const ne = Math.max(ue.data.length, 1);
        if (N.snappedResourceIndex < te + ne) {
          L = ue.id, K = ue.capacity;
          break;
        }
        te += ne;
      }
      if (!L)
        return null;
      let se = !0;
      K !== void 0 && P.totalPassengers !== void 0 && (se = P.totalPassengers <= K);
      const U = ee(P, I, C, L), le = U.length === 0 ? ie(P, I, C, L) : [];
      return {
        startDate: I,
        endDate: C,
        resourceId: L,
        resourceIndex: N.snappedResourceIndex,
        resourceCapacity: K,
        hasCapacity: se,
        conflicts: U,
        hasConflict: U.length > 0,
        nearbyEvents: le
      };
    },
    [q, e, g, ee, ie]
  ), W = ce(
    (P, y) => {
      if (!s)
        return;
      const Y = Date.now();
      if (Y - _.current < 100)
        return;
      _.current = Y;
      const N = {
        event: P,
        currentStartDate: y.startDate,
        currentEndDate: y.endDate,
        currentResourceId: y.resourceId,
        conflicts: y.conflicts
      };
      s(N);
    },
    [s]
  ), j = ce(
    (P, y) => {
      if (!O(P) || !c.current)
        return;
      y.preventDefault(), y.stopPropagation();
      const Y = y.target.closest('[style*="left"]');
      let N = 0, I = 0;
      Y && Y.style.left && Y.style.top && (N = parseInt(Y.style.left), I = parseInt(Y.style.top));
      const C = St(
        y.clientX,
        y.clientY,
        c.current
      );
      H.current = { x: N, y: I }, B.current = { x: y.clientX, y: y.clientY }, Q.current = {
        x: C.x - N,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, z.current = {
        startDate: P.startDate,
        endDate: P.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const K of e) {
        for (const se of K.data)
          if (se.some((U) => U.segmentId === P.segmentId)) {
            z.current.resourceId = K.id;
            break;
          }
        if (z.current.resourceId)
          break;
      }
      R(P), M("potential"), F({ x: N, y: I });
      let te = 100, L = 48;
      if (Y) {
        const K = Y.getBoundingClientRect();
        te = K.width, L = K.height;
      }
      u({ width: te, height: L });
    },
    [O, c, e, t]
  ), X = ce(
    (P) => {
      if (!c.current)
        return;
      let y = c.current;
      for (; y && y !== document.body; ) {
        const U = window.getComputedStyle(y);
        if (y.scrollHeight > y.clientHeight && (U.overflowY === "auto" || U.overflowY === "scroll" || U.overflow === "auto" || U.overflow === "scroll"))
          break;
        y = y.parentElement;
      }
      (!y || y === document.body) && (y = document.documentElement);
      const Y = y.getBoundingClientRect(), N = P.clientY, I = 50, C = 5, te = N - Y.top, L = Y.bottom - N;
      let K = !1, se = 0;
      te < I && te > 0 ? (K = !0, se = -C * (1 - te / I)) : L < I && L > 0 && (K = !0, se = C * (1 - L / I)), K ? (T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => {
        y.scrollTop += se, v === "dragging" && X(P);
      })) : T.current && (cancelAnimationFrame(T.current), T.current = null);
    },
    [c, v]
  ), G = ce(
    (P) => {
      if (v === "idle" || v === "animating" || !p || !c.current)
        return;
      const y = { x: P.clientX, y: P.clientY };
      if (v === "potential")
        if (cr(B.current, y))
          M("dragging");
        else
          return;
      X(P);
      const Y = St(
        P.clientX,
        P.clientY,
        c.current
      );
      k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
        const N = {
          x: Y.x - Q.current.x,
          y: Y.y - Q.current.y
        };
        F(N);
        const I = oe(p, Y.x, Y.y);
        if (I && w) {
          const C = {
            event: p,
            currentStartDate: I.startDate,
            currentEndDate: I.endDate,
            currentResourceId: I.resourceId,
            conflicts: I.conflicts
          };
          I.hasConflict = !w(C);
        }
        if (x(I), I) {
          const C = I.hasCapacity !== !1;
          A(C), W(p, I);
        }
      });
    },
    [v, p, c, oe, W, w, X]
  ), S = ce(
    async (P) => {
      if (v === "idle" || v === "animating")
        return;
      const y = { x: P.clientX, y: P.clientY };
      if (!cr(B.current, y) || v === "potential") {
        M("idle"), R(null), x(null);
        return;
      }
      if (!p || !m || !z.current) {
        M("idle"), R(null), x(null);
        return;
      }
      if (m.hasCapacity === !1) {
        A(!1), M("animating"), F(H.current), setTimeout(() => {
          M("idle"), R(null), x(null), A(!0);
        }, 300);
        return;
      }
      const N = {
        event: p,
        originalStartDate: z.current.startDate,
        originalEndDate: z.current.endDate,
        originalResourceId: z.current.resourceId,
        newStartDate: m.startDate,
        newEndDate: m.endDate,
        newResourceId: m.resourceId,
        hasConflict: m.hasConflict,
        conflicts: m.conflicts
      };
      let I = !0;
      if (o)
        try {
          const C = o(N);
          I = C instanceof Promise ? await C : C;
        } catch {
          I = !1;
        }
      I ? (A(!0), M("idle"), R(null), x(null)) : (A(!1), M("animating"), F(H.current), setTimeout(() => {
        M("idle"), R(null), x(null), A(!0);
      }, 300));
    },
    [v, p, m, o, w]
  );
  return ge(() => {
    if (v === "potential" || v === "dragging") {
      const P = (Y) => G(Y), y = (Y) => S(Y);
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", y), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", y);
      };
    } else
      return () => {
      };
  }, [v, G, S]), ge(() => () => {
    k.current && (cancelAnimationFrame(k.current), k.current = null), T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), ge(() => {
    (v === "idle" || v === "animating") && (k.current && (cancelAnimationFrame(k.current), k.current = null), T.current && (cancelAnimationFrame(T.current), T.current = null));
  }, [v]), ge(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (M("animating"), F(H.current), setTimeout(() => {
      M("idle"), R(null), x(null);
    }, 300)) : (M("idle"), R(null), x(null)));
  }, [t]), ge(() => {
    if ((v === "dragging" || v === "potential") && p) {
      let P = !1;
      for (const y of e) {
        for (const Y of y.data)
          if (Y.some((N) => N.segmentId === p.segmentId)) {
            P = !0;
            break;
          }
        if (P)
          break;
      }
      P || (v === "dragging" ? (M("animating"), F(H.current), setTimeout(() => {
        M("idle"), R(null), x(null);
      }, 300)) : (M("idle"), R(null), x(null)));
    }
  }, [e, v, p]), {
    dragState: v,
    draggedEvent: p,
    ghostPosition: V,
    ghostDimensions: D,
    dropTarget: m,
    isValidDrop: E,
    handleDragStart: j,
    isDraggable: O,
    draggingEventId: (p == null ? void 0 : p.segmentId) || null,
    resourceOnly: g
  };
}, pi = ({
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
  const { enabled: l = !1, isSelectable: f } = i, g = l && !!o, w = ce((y) => {
    let Y = 0;
    for (const N of a)
      N <= y && Y++;
    return y * he + Y * Pe;
  }, [a]), [v, M] = fe("idle"), [p, R] = fe(null), [V, F] = fe(null), [D, u] = fe(null), [m, x] = fe(!1), [E, A] = fe([]), [H, B] = fe(!1), Q = me(null), k = me(null), T = me(null), _ = ce(() => {
    switch (t) {
      case 0:
        return Ye * 7;
      case 1:
        return Me;
      case 2:
        return Ae;
      default:
        return Me;
    }
  }, [t]), z = ce(
    (y) => {
      const Y = _(), N = Math.floor(y / Y), I = $().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return I.add(N * 7, "days").toDate();
        case 1:
          return I.add(N, "days").toDate();
        case 2:
          return I.add(N, "hours").toDate();
        default:
          return I.toDate();
      }
    },
    [t, r, _]
  ), O = ce(
    (y) => {
      const Y = co(y, a), N = Math.floor(Y / he);
      let I = 0;
      for (const C of e) {
        const te = Math.max(C.data.length, 1);
        if (N < I + te)
          return {
            resourceId: C.id,
            resourceIndex: N,
            resourceLabel: C.label
          };
        I += te;
      }
      return null;
    },
    [e, a]
  ), q = ce(
    (y) => {
      const Y = _();
      return Math.floor(y / Y) * Y;
    },
    [_]
  ), ee = ce(
    (y, Y, N, I = []) => {
      const C = [], L = (n || e).find((U) => U.id === y), K = Y.getTime(), se = N.getTime();
      if (L) {
        const U = L.data[0], le = U && Array.isArray(U) ? L.data.flat() : L.data;
        for (const ue of le) {
          const ne = new Date(ue.startDate).getTime(), pe = new Date(ue.endDate).getTime();
          if (K < pe && se > ne) {
            const Se = new Date(Math.max(K, ne)), we = new Date(Math.min(se, pe)), J = we.getTime() - Se.getTime();
            C.push({
              event: ue,
              conflictStart: Se,
              conflictEnd: we,
              overlapDuration: J
            });
          }
        }
      }
      for (const U of I) {
        if (U.resourceId !== y)
          continue;
        const le = U.startDate.getTime(), ue = U.endDate.getTime();
        if (K < ue && se > le) {
          const ne = new Date(Math.max(K, le)), pe = new Date(Math.min(se, ue)), Se = pe.getTime() - ne.getTime(), we = {
            segmentId: `pending-${U.startDate.getTime()}`,
            reservationId: `pending-${U.startDate.getTime()}`,
            startDate: U.startDate,
            endDate: U.endDate,
            occupancy: 0,
            title: `New Event (${U.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          C.push({
            event: we,
            conflictStart: ne,
            conflictEnd: pe,
            overlapDuration: Se
          });
        }
      }
      return C;
    },
    [e, n]
  ), ie = ce(
    (y) => {
      if (!g || d || !c.current || y.button !== 0)
        return;
      const Y = y.target;
      if (Y.closest("[data-segment-id]") || Y.closest("[data-multi-select-ui]"))
        return;
      const N = St(y.clientX, y.clientY, c.current), I = O(N.y);
      if (!I)
        return;
      Q.current = { x: y.clientX, y: y.clientY }, k.current = I.resourceIndex;
      const C = q(N.x), te = _(), L = w(I.resourceIndex);
      R(N), F(N), u({
        x: C,
        y: L,
        width: te,
        height: he
      }), M("selecting");
    },
    [g, d, c, O, q, _, w]
  ), oe = ce(
    (y) => {
      if (v !== "selecting" || !c.current || k.current === null)
        return;
      const Y = St(y.clientX, y.clientY, c.current);
      T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => {
        F(Y);
        const N = _(), I = q((p == null ? void 0 : p.x) || 0), C = q(Y.x), te = w(k.current), L = Math.min(I, C), K = Math.max(I, C) + N;
        u({
          x: L,
          y: te,
          width: K - L,
          height: he
        });
      });
    },
    [v, c, p, _, q, w]
  ), W = ce(
    (y) => {
      if (v !== "selecting")
        return;
      if (!c.current || !p || !Q.current) {
        M("idle"), R(null), F(null), u(null);
        return;
      }
      const Y = St(y.clientX, y.clientY, c.current), N = O(p.y);
      if (!N) {
        M("idle"), R(null), F(null), u(null);
        return;
      }
      const I = Math.min(p.x, Y.x), C = Math.max(p.x, Y.x), te = z(I), L = z(C), K = $(L).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(N.resourceId, te, K)) {
        M("idle"), R(null), F(null), u(null);
        return;
      }
      const se = ee(
        N.resourceId,
        te,
        K,
        E
      ), U = se.length > 0, le = {
        startDate: te,
        endDate: K,
        resourceId: N.resourceId,
        resourceLabel: N.resourceLabel,
        zoomLevel: t,
        hasConflict: U,
        conflicts: U ? se : void 0
      };
      if (m)
        A((ue) => [...ue, le]), B(!0);
      else if (o) {
        const ue = o(le), ne = (pe) => {
          pe != null && pe.continueMultiSelect && (x(!0), A([le]), B(!0));
        };
        ue instanceof Promise ? ue.then(ne) : ne(ue);
      }
      M("idle"), R(null), F(null), u(null), Q.current = null, k.current = null;
    },
    [
      v,
      c,
      p,
      O,
      z,
      f,
      o,
      t,
      m,
      ee,
      E
    ]
  ), j = ce(() => {
    if (E.length > 0 && s) {
      B(!1);
      const y = s(E), Y = (N) => {
        N != null && N.continueMultiSelect ? B(!0) : (A([]), x(!1), B(!1));
      };
      y instanceof Promise ? y.then(Y) : Y(y);
      return;
    }
    A([]), x(!1), B(!1);
  }, [E, s]), X = ce(() => {
    A([]), x(!1), B(!1);
  }, []), G = ce((y) => {
    A((Y) => {
      const N = Y.filter((I, C) => C !== y);
      return N.length === 0 && (x(!1), B(!1)), N;
    });
  }, []), S = ce(
    (y, Y) => {
      A((N) => N.map((I, C) => {
        if (C !== y)
          return I;
        const te = { ...I, ...Y }, L = N.filter((se, U) => U !== y), K = ee(
          te.resourceId,
          te.startDate,
          te.endDate,
          L
        );
        return {
          ...te,
          hasConflict: K.length > 0,
          conflicts: K.length > 0 ? K : void 0
        };
      }));
    },
    [ee]
  ), P = ce(
    (y) => {
      y.key === "Escape" && (v === "selecting" ? (M("idle"), R(null), F(null), u(null), Q.current = null, k.current = null) : m && E.length > 0 && (A([]), x(!1), B(!1)));
    },
    [v, m, E.length]
  );
  return ge(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", oe), document.addEventListener("mouseup", W), document.addEventListener("keydown", P), () => {
        document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", W), document.removeEventListener("keydown", P);
      };
  }, [v, oe, W, P]), ge(() => {
    if (m && E.length > 0)
      return document.addEventListener("keydown", P), () => {
        document.removeEventListener("keydown", P);
      };
  }, [m, E.length, P]), ge(() => () => {
    T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), ge(() => {
    d && v === "selecting" && (M("idle"), R(null), F(null), u(null), Q.current = null, k.current = null);
  }, [d, v]), {
    selectionState: v,
    selectionStart: p,
    selectionEnd: V,
    selectionBox: D,
    handleGridMouseDown: ie,
    isEnabled: g,
    pendingSelections: E,
    confirmSelections: j,
    clearSelections: X,
    removeSelection: G,
    updateSelection: S,
    isMultiSelectActive: m,
    hasUnconfirmedSelections: H
  };
}, mi = b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, gi = b.div`
  position: relative;
`, yi = b.canvas``;
b.canvas``;
const lr = b.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, vi = kn(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: g, separatorRowIndices: w = [] }, v) {
  const M = me(!1), { handleScrollNext: p, handleScrollPrev: R, date: V, isLoading: F, cols: D, startDate: u } = Ze(), m = me(null), x = me(null), E = me(null), A = me(null), [H, B] = fe(!1), Q = Ft(), {
    dragState: k,
    draggedEvent: T,
    ghostPosition: _,
    ghostDimensions: z,
    dropTarget: O,
    isValidDrop: q,
    handleDragStart: ee,
    isDraggable: ie,
    draggingEventId: oe,
    resourceOnly: W
  } = hi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: A,
    separatorRowIndices: w
  });
  ge(() => {
    const ne = k === "dragging" || k === "potential";
    B(ne), a && a(ne);
  }, [k, a]);
  const j = me(!1), X = me(V), G = me(null);
  ge(() => {
    var Se, we, J;
    const ne = X.current;
    if (X.current = V, !j.current) {
      j.current = !0;
      return;
    }
    const pe = V.isAfter(ne) ? 34 : -34;
    (Se = G.current) == null || Se.cancel(), G.current = ((J = (we = A.current) == null ? void 0 : we.animate) == null ? void 0 : J.call(
      we,
      [
        { transform: `translateX(${pe}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 300, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    )) ?? null;
  }, [V]);
  const {
    selectionState: S,
    selectionBox: P,
    handleGridMouseDown: y,
    pendingSelections: Y,
    confirmSelections: N,
    clearSelections: I,
    removeSelection: C,
    updateSelection: te,
    isMultiSelectActive: L,
    hasUnconfirmedSelections: K
  } = pi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: g,
    gridRef: A,
    isDragging: H,
    separatorRowIndices: w
  }), se = ce((ne) => {
    ne.preventDefault();
  }, []), U = ce((ne) => {
    ne.preventDefault();
  }, []), le = w.length * Pe, ue = ce(
    (ne) => {
      const pe = Rn(), Se = t * he + 1 + le;
      ao(ne, pe, Se), Ls(ne, n, t, D, u, Q, w);
    },
    [D, u, t, n, Q, w, le]
  );
  return ge(() => {
    if (!m.current)
      return;
    const ne = m.current.getContext("2d");
    if (!ne)
      return;
    const pe = () => ue(ne);
    return window.addEventListener("resize", pe), () => window.removeEventListener("resize", pe);
  }, [ue]), ge(() => {
    const ne = m.current;
    if (!ne)
      return;
    ne.style.letterSpacing = "1px";
    const pe = ne.getContext("2d");
    pe && ue(pe);
  }, [V, t, n, ue]), ge(() => {
    if (!x.current)
      return;
    const ne = new IntersectionObserver(
      (pe) => {
        pe[0].isIntersecting && !M.current && (M.current = !0, p(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Be) }
    );
    return ne.observe(x.current), () => {
      ne.disconnect();
    };
  }, [p]), ge(() => {
    if (!E.current)
      return;
    const ne = new IntersectionObserver(
      (pe) => {
        pe[0].isIntersecting && !M.current && (M.current = !0, R(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Be),
        rootMargin: `0px 0px 0px -${Oe}px`
      }
    );
    return ne.observe(E.current), () => {
      ne.disconnect();
    };
  }, [R]), /* @__PURE__ */ Z(mi, { id: eo, children: [
    /* @__PURE__ */ Z(
      gi,
      {
        ref: (ne) => {
          typeof v == "function" ? v(ne) : v && (v.current = ne), A.current = ne;
        },
        onMouseDown: y,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(lr, { position: "left", ref: E }),
          /* @__PURE__ */ h(Sn, { isLoading: F, position: "left" }),
          /* @__PURE__ */ h(
            yi,
            {
              ref: m,
              onDragStart: se,
              onDragOver: U,
              style: { userSelect: k === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(dd, { zoom: n, startDate: u }),
          /* @__PURE__ */ h(
            hl,
            {
              data: r,
              zoom: n,
              onTileClick: s,
              onDragStart: ee,
              isDraggable: ie,
              draggingEventId: oe,
              separatorRowIndices: w
            }
          ),
          /* @__PURE__ */ h(lr, { ref: x, position: "right" }),
          /* @__PURE__ */ h(Sn, { isLoading: F, position: "right" }),
          (k === "dragging" || k === "animating") && /* @__PURE__ */ h(
            zl,
            {
              draggedEvent: T,
              ghostPosition: _,
              ghostDimensions: z,
              dropTarget: O,
              isValidDrop: q,
              dragState: k,
              zoom: n,
              data: r,
              resourceOnly: W,
              separatorRowIndices: w
            }
          ),
          /* @__PURE__ */ h(
            Zl,
            {
              selectionBox: P,
              isSelecting: S === "selecting"
            }
          ),
          L && Y.length > 0 && /* @__PURE__ */ h(
            ad,
            {
              selections: Y,
              data: r,
              zoom: n,
              startDate: u,
              onRemove: C,
              onUpdate: te,
              separatorRowIndices: w
            }
          )
        ]
      }
    ),
    L && K && Y.length > 0 && /* @__PURE__ */ h(
      ed,
      {
        selections: Y,
        onConfirm: N,
        onClear: I,
        onRemove: C
      }
    )
  ] });
}), lo = (e) => {
  const n = $.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, uo = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / De);
    t += o.hours + s, r += n % De, r >= De && (t++, r -= De);
  }), { hours: t, minutes: r };
}, fo = (e, n) => {
  let t = rr;
  switch (n) {
    case 0:
      t = Es;
      break;
    case 1:
      t = rr;
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
}, xi = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const l = $(a.startDate).isoWeek(), f = $(a.startDate).isoWeekday(), g = $(a.endDate).isoWeek(), w = $(a.endDate).isoWeekday(), { hours: v, minutes: M } = lo(a.occupancy);
    if (r === l) {
      const p = (Xe + 1 - f) * v, R = (Xe + 1 - f) * M;
      return { hours: Math.max(0, p), minutes: R };
    } else if (r === g) {
      const p = w > Xe ? Xe * v : w * v, R = w > Xe ? Xe * M : w * M;
      return { hours: p, minutes: R };
    } else if ($(n).isBetween(a.startDate, a.endDate))
      return { hours: Xe * v, minutes: Xe * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = uo(o), { free: c, overtime: d } = fo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, bi = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: g } = lo(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: g } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = uo(s), { free: d, overtime: a } = fo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, wi = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const d = $(c.startDate).hour(), a = $(c.endDate).hour(), l = n.hour(), f = $(c.endDate).minute(), g = $(c.startDate).minute();
    d < l && a > l ? t += De : d === l && a === l && g && f ? t += f ? f - g : De - g : d === l && a >= l ? t += g ? De - g : De : a === l && f && (t += f);
  });
  const r = Math.floor(t / De), o = t % De, s = r || o ? 0 : 1, i = r ? 0 : o ? De - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Si = (e, n, t, r, o = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => r === 1 ? $(t).isBetween(i.startDate, i.endDate, "day", "[]") : r === 2 ? $(t).isBetween(i.startDate, i.endDate, "hour", "[]") : $(i.startDate).isBetween(
    $(t),
    $(t).add(6, "days"),
    "day",
    "[]"
  ) || $(t).isBetween($(i.startDate), $(i.endDate), "day", "[]"));
  switch (r) {
    case 1:
      return bi(s, t, r, o);
    case 2:
      return wi(s, t);
    default:
      return xi(s, t, r);
  }
}, Ci = (e, n, t, r, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = mt;
      break;
    case 1:
      c = "days", d = Me;
      break;
    case 2:
      c = "hours", d = Ae;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = $(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / he), g = r.findIndex((R, V, F) => F.slice(0, V + 1).reduce((u, m) => u + m, 0) >= f), w = s === 2 ? (a + 1) * d : a * d, v = (f - 1) * he + he, M = Si(
    o[g],
    g,
    l,
    s,
    i
  ), p = $(e.startDate).isSame($(e.endDate), "day");
  return {
    coords: { x: w, y: v },
    mouseCoords: t,
    resourceIndex: g,
    disposition: M,
    reservationData: {
      startTime: $(e.startDate).format("hh:mm A"),
      startDate: $(e.startDate).format("MMM D, YYYY"),
      endTime: $(e.endDate).format("hh:mm A"),
      endDate: $(e.endDate).format("MMM D, YYYY"),
      client: e.subtitle ?? "",
      eventName: e.title,
      reservationType: e.eventType,
      bookingNumber: e.bookingNumber,
      groupName: e.groupName,
      driver: e.driver,
      flightNumber: e.flightNumber,
      serviceNotes: e.serviceNotes,
      reservationNotes: e.reservationNotes,
      isOneDayEvent: p,
      passengers: e.totalPassengers
    }
  };
};
function Mi(e, n) {
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
function ki(e) {
  const n = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const r = [...t].sort((l, f) => l - f);
  if (r.length < 2)
    return n;
  const o = Math.min(5, r.length), s = Mi(r, o), i = [];
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
    const g = "__auto_cat_" + f, w = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: g, name: w, minPassengers: l.min, maxPassengers: l.max });
    for (const v of l.values)
      a.set(v, g);
  }), { categories: d, capacityToCategoryId: a };
}
const $i = (e, n, t, r) => {
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
var mn = {}, Di = {
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
  })(Te, function() {
    return function(t, r) {
      r.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Di);
const Ei = mn;
var gn = {}, _i = {
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
  })(Te, function() {
    return function(t, r) {
      r.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(_i);
const Ti = gn, Ai = (e) => {
  const n = [];
  for (const t of e) {
    let r = !1;
    if (n.length)
      for (const o of n) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = $(t.startDate).startOf("day"), d = $(t.endDate).startOf("day"), a = $(o[i].startDate).startOf("day"), l = $(o[i].endDate).startOf("day");
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
$.extend(Ei);
$.extend(Ti);
const dr = /* @__PURE__ */ new WeakMap(), Pi = (e) => {
  const n = dr.get(e);
  if (n)
    return n;
  const t = [...e].sort((o, s) => {
    const i = $(o.startDate), c = $(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), r = Ai(t);
  return dr.set(e, r), r;
}, Yi = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = Pi(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, Oi = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Ii = (e) => {
  const { recordsThreshold: n } = Ze(), [t, r] = fe(0), [o, s] = fe(0), i = me(null);
  ge(() => {
    i.current = document.getElementById(Be);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = Ce(() => Yi(e), [e]), a = Ce(
    () => $i(e, c, d, n),
    [e, c, n, d]
  ), l = ce(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = ce(() => {
    a[o].length && (r((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), g = ce(() => {
    r(0), s(0);
  }, []), w = t + a[o].length, v = Ce(
    () => d.slice(t, w),
    [w, d, t]
  ), M = Ce(
    () => c.slice(t, w),
    [w, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: v,
    totalRowsPerPage: Oi(a[o]),
    next: l,
    previous: f,
    reset: g
  };
};
var yn = {}, Li = {
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
  })(Te, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(Li);
const Ri = yn;
var vn = {}, Ni = {
  get exports() {
    return vn;
  },
  set exports(e) {
    vn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(nt);
  })(Te, function(t) {
    function r(g) {
      return g && typeof g == "object" && "default" in g ? g : { default: g };
    }
    var o = r(t);
    function s(g) {
      return g % 10 < 5 && g % 10 > 1 && ~~(g / 10) % 10 != 1;
    }
    function i(g, w, v) {
      var M = g + " ";
      switch (v) {
        case "m":
          return w ? "minuta" : "minutę";
        case "mm":
          return M + (s(g) ? "minuty" : "minut");
        case "h":
          return w ? "godzina" : "godzinę";
        case "hh":
          return M + (s(g) ? "godziny" : "godzin");
        case "MM":
          return M + (s(g) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(g) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(g, w) {
      return a.test(w) ? c[g.month()] : d[g.month()];
    };
    l.s = d, l.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(g) {
      return g + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Ni);
const Hi = vn;
var xn = {}, Wi = {
  get exports() {
    return xn;
  },
  set exports(e) {
    xn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(nt);
  })(Te, function(t) {
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
})(Wi);
const zi = xn;
var bn = {}, Fi = {
  get exports() {
    return bn;
  },
  set exports(e) {
    bn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(nt);
  })(Te, function(t) {
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
})(Fi);
const Bi = bn;
var wn = {}, ji = {
  get exports() {
    return wn;
  },
  set exports(e) {
    wn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(nt);
  })(Te, function(t) {
    function r(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = r(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(ji);
const Zi = wn, Vi = {
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
}, Gi = {
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
}, Xi = {
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
}, Ui = {
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
}, Ki = {
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
}, Ji = [
  {
    id: "en",
    lang: Xi,
    translateCode: "en-GB",
    dayjsTranslations: Ri
  },
  {
    id: "pl",
    lang: Gi,
    translateCode: "pl-PL",
    dayjsTranslations: Hi
  },
  {
    id: "es",
    lang: Vi,
    translateCode: "es-ES",
    dayjsTranslations: Zi
  },
  {
    id: "lt",
    lang: Ki,
    translateCode: "lt-LT",
    dayjsTranslations: Bi
  },
  {
    id: "de",
    lang: Ui,
    translateCode: "de-DE",
    dayjsTranslations: zi
  }
];
class qi {
  constructor() {
    Nn(this, "locales", Ji);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const Ht = new qi(), ho = Nr({
  localesData: Ht.getLocales(),
  currentLocale: Ht.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Qi = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = fe("en"), s = Ht.getLocales(), i = ce(() => {
    const f = s.find((g) => g.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && $.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = fe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  ge(() => {
    t == null || t.forEach((f) => {
      s.find((w) => w.id === f.id) || Ht.addLocales(f);
    });
  }, [s, t]), ge(() => {
    const f = localStorage.getItem("locale"), g = n ?? f ?? "en";
    localStorage.setItem("locale", g), o(g), d(i());
  }, [i, n]);
  const { Provider: l } = ho;
  return /* @__PURE__ */ h(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ve = () => Ke(ho).currentLocale.lang, ea = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ta = b.div`
  height: 440px;
  width: 514px;
  position: relative;
`, na = b.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ra = ({ onTileClick: e }) => {
  const { feelingEmpty: n } = Ve();
  return /* @__PURE__ */ Z(ta, { onClick: e, children: [
    /* @__PURE__ */ h(ea, {}),
    /* @__PURE__ */ h(na, { children: n })
  ] });
}, oa = b.div`
  position: relative;
  display: flex;
`, sa = b.div`
  position: relative;
  margin-left: ${Oe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ia = b.div`
  width: calc(${({ width: e }) => e}px - ${Oe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Oe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Gt = {
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
    reservationType: kt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function aa(e, n) {
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
const ca = ({
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
  clickToAddConfig: g
}) => {
  const [w, v] = fe(Gt), [M, p] = fe(e), [R, V] = fe(!1), [F, D] = fe(!1), [u, m] = fe(""), [x, E] = fe(/* @__PURE__ */ new Set()), {
    zoom: A,
    startDate: H,
    isLoading: B,
    config: { includeTakenHoursOnWeekendsInDayView: Q, showTooltip: k, showThemeToggle: T }
  } = Ze(), _ = me(null), z = me(null), [O, q] = fe(124), {
    page: ee,
    projectsPerPerson: ie,
    rowsPerItem: oe,
    currentPageNum: W,
    pagesAmount: j,
    next: X,
    previous: G,
    reset: S
  } = Ii(M), { effectiveCategories: P, effectivePage: y } = Ce(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: ee };
    const J = ki(ee);
    if (J.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: ee };
    const ae = ee.map((de) => {
      if (de.isSubcontract || de.capacity == null)
        return de;
      const ke = J.capacityToCategoryId.get(de.capacity);
      return ke ? { ...de, categoryId: ke } : de;
    });
    return { effectiveCategories: J.categories, effectivePage: ae };
  }, [t, ee]), Y = ce((J) => {
    E((ae) => {
      const de = new Set(ae);
      return de.has(J) ? de.delete(J) : de.add(J), de;
    });
  }, []), N = Ce(() => {
    const J = [], ae = P ? [...P].sort((de, ke) => de.maxPassengers - ke.maxPassengers) : [];
    for (const de of ae)
      y.some((ke) => !ke.isSubcontract && ke.categoryId === de.id) && J.push(de.id);
    return y.some((de) => de.isSubcontract) && J.push("__subcontract__"), J;
  }, [P, y]), I = ce(() => {
    E(/* @__PURE__ */ new Set());
  }, []), C = ce(() => {
    E(new Set(N));
  }, [N]), {
    visiblePage: te,
    visibleRowsPerItem: L,
    visibleTotalRows: K,
    visibleProjectsPerPerson: se,
    separatorRowIndices: U
  } = Ce(() => {
    const J = aa(y, P), ae = ((P == null ? void 0 : P.length) ?? 0) > 0, de = /* @__PURE__ */ new Map();
    ee.forEach((Ee, We) => de.set(Ee.id, We));
    const ke = [], $e = [], Ne = [], He = [];
    let rt = 0;
    for (const Ee of J)
      if (Ee.type === "subcontract" || Ee.type === "category" && ae) {
        const ot = Ee.type === "subcontract" ? "__subcontract__" : Ee.category.id, st = x.has(ot);
        if (He.push(rt), !st)
          for (const Je of Ee.items) {
            const $t = de.get(Je.id) ?? 0, Dt = oe[$t];
            ke.push(Je), $e.push(Dt), Ne.push(ie[$t]), rt += Dt;
          }
      } else
        for (const ot of Ee.items) {
          const st = de.get(ot.id) ?? 0, Je = oe[st];
          ke.push(ot), $e.push(Je), Ne.push(ie[st]), rt += Je;
        }
    const Bt = $e.reduce((Ee, We) => Ee + We, 0);
    return {
      visiblePage: ke,
      visibleRowsPerItem: $e,
      visibleTotalRows: Bt,
      visibleProjectsPerPerson: Ne,
      separatorRowIndices: He
    };
  }, [y, P, ee, x, oe, ie]), le = me(
    ct(
      (J, ae, de, ke, $e, Ne) => {
        if (!_.current)
          return;
        const { tile: He, segmentId: rt } = pe(J);
        if (!rt || !He) {
          V(!1), v(Gt);
          return;
        }
        const Bt = ne(rt, ae), Ee = _.current.getBoundingClientRect(), We = He.getBoundingClientRect(), ot = { x: J.clientX - Ee.left, y: J.clientY - Ee.top }, st = {
          x: J.clientX - Ee.left,
          y: J.clientY - Ee.top
        }, Je = {
          x: We.left - Ee.left,
          y: We.top - Ee.top,
          width: We.width,
          height: We.height
        }, {
          coords: { x: $t, y: Dt },
          resourceIndex: mo,
          disposition: go,
          reservationData: yo
        } = Ci(
          Bt,
          de,
          ot,
          ke,
          $e,
          Ne,
          Q
        );
        v({
          coords: { x: $t, y: Dt },
          mouseCoords: st,
          resourceIndex: mo,
          disposition: go,
          reservationData: yo,
          tileBounds: Je
        }), V(!0);
      },
      4
    )
  ), ue = me(
    ct((J, ae) => {
      S(), p(
        J.map((de) => ({
          ...de,
          data: de.data.filter((ke) => {
            const { title: $e, description: Ne, subtitle: He } = ke;
            return ($e == null ? void 0 : $e.toLowerCase().includes(ae.toLowerCase())) || (He == null ? void 0 : He.toLowerCase().includes(ae.toLowerCase())) || (Ne == null ? void 0 : Ne.toLowerCase().includes(ae.toLowerCase()));
          })
        })).filter((de) => de.data.length > 0)
      );
    }, 500)
  ), ne = (J, ae) => {
    if (J)
      return ae.flatMap((de) => de.data).find((de) => de.segmentId === J);
  }, pe = (J) => {
    if (!J.target)
      return { tile: null, segmentId: null };
    const ae = J.target.closest("[data-segment-id]");
    return ae ? { tile: ae, segmentId: ae.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, Se = (J) => {
    const ae = J.target.value;
    m(ae), ue.current.cancel(), ae ? ue.current(e, ae) : (S(), p(e));
  }, we = ce(() => {
    le.current.cancel(), V(!1), v(Gt);
  }, []);
  return ge(() => {
    const J = (de) => le.current(
      de,
      e,
      H,
      L,
      se,
      A
    ), ae = _.current;
    if (ae)
      return ae.addEventListener("mousemove", J), ae.addEventListener("mouseleave", we), () => {
        ae.removeEventListener("mousemove", J), ae.removeEventListener("mouseleave", we);
      };
  }, [
    le,
    we,
    se,
    L,
    H,
    A,
    e
  ]), ge(() => {
    u ? (ue.current.cancel(), ue.current(e, u)) : p(e);
  }, [e, u]), Mn(() => {
    const J = z.current;
    if (!J)
      return;
    const ae = () => q(J.offsetHeight);
    ae();
    const de = new ResizeObserver(ae);
    return de.observe(J), () => de.disconnect();
  }, []), /* @__PURE__ */ Z(oa, { children: [
    /* @__PURE__ */ h(
      xc,
      {
        headerHeight: O,
        data: y,
        categories: P,
        pageNum: W,
        pagesAmount: j,
        rows: oe,
        onLoadNext: X,
        onLoadPrevious: G,
        searchInputValue: u,
        onSearchInputChange: Se,
        onItemClick: o,
        collapsedGroups: x,
        onToggleGroup: Y,
        allGroupIds: N,
        onExpandAll: I,
        onCollapseAll: C
      }
    ),
    /* @__PURE__ */ Z(sa, { children: [
      /* @__PURE__ */ h(
        Xc,
        {
          ref: z,
          zoom: A,
          topBarWidth: i,
          showThemeToggle: T,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        vi,
        {
          data: te,
          baseData: n || e,
          zoom: A,
          rows: K,
          ref: _,
          onTileClick: r,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: D,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: g,
          separatorRowIndices: U
        }
      ) : /* @__PURE__ */ h(ia, { width: i, children: B ? /* @__PURE__ */ h(Sn, { isLoading: B, position: "left" }) : /* @__PURE__ */ h(ra, {}) }),
      k && R && !F && (w == null ? void 0 : w.resourceIndex) > -1 && /* @__PURE__ */ h(_l, { tooltipData: w })
    ] })
  ] });
}, la = b.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.primary};
`, Xt = b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({ $at: e }) => e ?? "start"};
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : e === "center" ? "center" : "flex-start"};
`, da = b.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, ur = b.button`
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
`, ua = b.button`
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
`, fa = b.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`, ha = b.div`
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
`, fr = b.button`
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
`, pa = b.label`
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
`, ma = b.button`
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
`, ga = b.span`
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
`, it = ({ children: e, sw: n = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: n, strokeLinecap: "round", strokeLinejoin: "round", children: e }), ya = () => {
  var n, t;
  const e = document.getElementById(Be);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (n = e == null ? void 0 : e.requestFullscreen) == null || n.call(e);
}, va = () => {
  const { config: e, date: n, zoom: t, handleGoNext: r, handleGoPrev: o, handleGoToday: s, setZoom: i, goToDate: c, toggleDisplayActiveUnits: d } = Ze();
  Ve();
  const { filterButtonState: a = -1 } = e, l = () => {
    var f;
    (f = document.querySelector(`#${Be} input[placeholder]`)) == null || f.focus();
  };
  return /* @__PURE__ */ Z(la, { width: 0, children: [
    /* @__PURE__ */ Z(Xt, { $at: "start", children: [
      /* @__PURE__ */ h(fa, { children: n.locale($.locale()).format("MMMM YYYY") }),
      /* @__PURE__ */ Z(ha, { children: [
        /* @__PURE__ */ h("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ h("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ h("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      /* @__PURE__ */ Z(pa, { children: [
        /* @__PURE__ */ Z(it, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (f) => f.target.value && c(f.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ h(Xt, { $at: "center", children: /* @__PURE__ */ Z(da, { children: [
      /* @__PURE__ */ h(ur, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
      /* @__PURE__ */ h(ua, { onClick: s, children: "Hoy" }),
      /* @__PURE__ */ h(ur, { onClick: r, "aria-label": "Siguiente", children: /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
    ] }) }),
    /* @__PURE__ */ Z(Xt, { $at: "end", children: [
      /* @__PURE__ */ Z(ma, { onClick: l, children: [
        /* @__PURE__ */ Z(it, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] }),
      a >= 0 && /* @__PURE__ */ Z(fr, { $primary: !!a, onClick: d, children: [
        /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(ga, { children: a })
      ] }),
      /* @__PURE__ */ Z(fr, { onClick: ya, children: [
        /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] })
    ] })
  ] });
}, xa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), ba = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), wa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Sa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Ca = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ma = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ka = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), $a = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Da = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Ea = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), _a = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ta = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Aa = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Pa = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Ya = {
  add: xa,
  subtract: ba,
  filter: wa,
  arrowLeft: Sa,
  arrowRight: Ca,
  defaultAvatar: Ma,
  calendarWarning: ka,
  calendarFree: $a,
  arrowDown: Ea,
  arrowUp: Da,
  search: _a,
  close: Ta,
  moon: Aa,
  sun: Pa
}, Ut = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = Ft(), i = Ya[e];
  return i ? /* @__PURE__ */ h(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.accent,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, Oa = (e, n, t) => ({
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
b.button`
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
  ${({ theme: e, variant: n, disabled: t }) => Oa(e, n, t)}
`;
const Ia = b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${no}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ie};
`, La = b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Ra = b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, Na = b.div`
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
`, Ha = b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, Wa = b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, za = b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({ $sev: e }) => e === 2 ? "#c6483d" : e === 1 ? "#d98a22" : "#93b1a6"};
`, Fa = b.div`
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
`, Ba = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, ja = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, Za = b.div`
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
`, Va = () => {
  const { date: e, zoom: n, data: t, goToDate: r } = Ze(), o = Ve(), s = me(null), [i, c] = fe(null), d = Ce(
    () => Array.from({ length: 12 }, (D, u) => $().month(u).format("MMM").toUpperCase()),
    [o]
  ), a = e.year(), l = Ce(() => $(new Date(a, 0, 1)), [a]), f = Ce(
    () => $(new Date(a + 1, 0, 1)).diff(l, "day"),
    [a, l]
  ), g = (D) => D.diff(l, "day") / f * 100, w = Ce(() => {
    const D = Math.ceil(f / 7), u = new Array(D).fill(0), m = new Array(D).fill(0);
    for (const E of t ?? [])
      for (const A of E.data ?? []) {
        const H = $(A.startDate);
        if (H.year() !== a)
          continue;
        const B = Math.floor(H.diff(l, "day") / 7);
        if (B < 0 || B >= D)
          continue;
        u[B] += 1;
        const Q = A.readiness === "sin_chofer" ? 2 : A.readiness === "sin_avisar" ? 1 : 0;
        Q > m[B] && (m[B] = Q);
      }
    const x = Math.max(1, ...u);
    return u.map((E, A) => ({ h: E / x * 100, sev: m[A] }));
  }, [t, a, l, f]), v = $(), M = v.year() === a ? g(v) : null, p = n === 1 ? pn(1) / 2 : n === 0 ? pn(0) * 7 / 2 : 0.5, R = Math.max(0, g(e.subtract(p, "day"))), V = Math.min(100, g(e.add(p, "day"))) - R, F = (D) => {
    var x;
    const u = (x = s.current) == null ? void 0 : x.getBoundingClientRect();
    if (!u)
      return null;
    const m = Math.min(1, Math.max(0, (D - u.left) / u.width));
    return { f: m, d: l.add(Math.round(m * f), "day") };
  };
  return /* @__PURE__ */ Z(Ia, { children: [
    /* @__PURE__ */ Z(La, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ Z(
      Ra,
      {
        ref: s,
        onClick: (D) => {
          const u = F(D.clientX);
          u && r(u.d.toDate());
        },
        onMouseMove: (D) => {
          const u = F(D.clientX);
          u && c({ left: u.f * 100, label: `${u.d.date()} ${d[u.d.month()]}` });
        },
        onMouseLeave: () => c(null),
        children: [
          /* @__PURE__ */ h(Na, { children: d.map((D, u) => /* @__PURE__ */ h("span", { style: { left: `${g($(new Date(a, u, 1)))}%` }, children: D }, u)) }),
          d.map(
            (D, u) => u === 0 ? null : /* @__PURE__ */ h(Ha, { style: { left: `${g($(new Date(a, u, 1)))}%` } }, u)
          ),
          /* @__PURE__ */ h(Wa, { children: w.map((D, u) => /* @__PURE__ */ h(za, { $sev: D.sev, style: { height: `${D.h}%` } }, u)) }),
          /* @__PURE__ */ h(Ba, { style: { left: `${R}%`, width: `${V}%` } }),
          M !== null && /* @__PURE__ */ h(Fa, { style: { left: `${M}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          i && /* @__PURE__ */ Z(_e, { children: [
            /* @__PURE__ */ h(ja, { style: { left: `${i.left}%` } }),
            /* @__PURE__ */ h(Za, { style: { left: `${i.left}%` }, children: i.label })
          ] })
        ]
      }
    )
  ] });
}, Ga = b.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? no : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Xa = b.div`
  position: relative;
`, Ua = ({
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
  onMultiTimeRangeSelect: g,
  clickToAddConfig: w
}) => {
  const { goToDate: v, handleGoToday: M, zoomIn: p, zoomOut: R, zoom: V } = Ze();
  return Hr(
    l,
    () => ({
      goToDate: v,
      goToToday: M,
      setZoom: (F) => {
        if (!so(F))
          return;
        const D = F - V;
        if (D > 0)
          for (let u = 0; u < D; u++)
            p();
        else
          for (let u = 0; u < Math.abs(D); u++)
            R();
      }
    }),
    [v, M, V, p, R]
  ), /* @__PURE__ */ h(
    ca,
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
      onMultiTimeRangeSelect: g,
      clickToAddConfig: w
    }
  );
}, md = kn(function({
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
  onEventDrop: g,
  onEventDrag: w,
  draggableConfig: v,
  onTimeRangeSelect: M,
  onMultiTimeRangeSelect: p,
  clickToAddConfig: R
}, V) {
  var _;
  const F = Ce(
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
  ), D = me(null), u = me(null), [m, x] = fe((_ = D.current) == null ? void 0 : _.clientWidth), E = Ce(() => $(s), [s]), [A, H] = fe(F.defaultTheme ?? "light"), B = () => {
    H(A === "light" ? "dark" : "light");
  }, Q = A === "light" ? ws : Ss, k = F.theme ? F.theme[Q.mode] : {}, T = {
    ...Q,
    colors: {
      ...Q.colors,
      ...k
    }
  };
  return Hr(
    V,
    () => ({
      goToDate: (z) => {
        var O;
        return (O = u.current) == null ? void 0 : O.goToDate(z);
      },
      goToToday: () => {
        var z;
        return (z = u.current) == null ? void 0 : z.goToToday();
      },
      setZoom: (z) => {
        var O;
        return (O = u.current) == null ? void 0 : O.setZoom(z);
      }
    }),
    []
  ), ge(() => {
    const z = () => {
      D.current && x(D.current.clientWidth);
    };
    return z(), window.addEventListener("resize", z), () => window.removeEventListener("resize", z);
  }, []), D.current, /* @__PURE__ */ Z(_e, { children: [
    /* @__PURE__ */ h(bs, {}),
    /* @__PURE__ */ h(ys, { theme: T, children: /* @__PURE__ */ h(Qi, { lang: F.lang, translations: F.translations, children: /* @__PURE__ */ Z(
      ui,
      {
        data: n,
        isLoading: !!f,
        config: F,
        onRangeChange: i,
        defaultStartDate: E,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: [
          /* @__PURE__ */ h(
            Ga,
            {
              showScroll: !!n.length,
              $footer: F.showOverview !== !1 && !!n.length,
              id: Be,
              ref: D,
              children: /* @__PURE__ */ h(Xa, { children: /* @__PURE__ */ h(
                Ua,
                {
                  data: n,
                  baseData: r,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: m ?? 0,
                  onItemClick: l,
                  toggleTheme: B,
                  onEventDrop: g,
                  onEventDrag: w,
                  draggableConfig: v,
                  schedulerRef: u,
                  onTimeRangeSelect: M,
                  onMultiTimeRangeSelect: p,
                  clickToAddConfig: R
                }
              ) })
            }
          ),
          F.showOverview !== !1 && !!n.length && /* @__PURE__ */ h(Va, {})
        ]
      }
    ) }) })
  ] });
}), Ka = b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, Ja = b.button`
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
`, qa = b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Qa = b.p`
  ${yt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, hr = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Ve(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(Ka, { intent: e, children: /* @__PURE__ */ Z(Ja, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ h(qa, { children: t }),
    /* @__PURE__ */ h(Qa, { children: d })
  ] }) });
}, ec = b.div`
  min-width: ${Oe + "px"};
  max-width: ${Oe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, tc = b.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({ $height: e }) => e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Oe}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, nc = b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, rc = b.input`
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
`, oc = b.div`
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
`, sc = b.button`
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
`, ic = b.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${he}px;
  height: calc(${he}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBorder + "33" : e.colors.border};
  background-color: ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBg : "transparent"};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, ac = b.div`
  display: flex;
  align-items: center;
`, cc = b.div`
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
`, lc = b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, dc = b.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, pr = b.p`
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
`, uc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), fc = () => /* @__PURE__ */ Z("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), hc = () => /* @__PURE__ */ Z("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), pc = ({ id: e, item: n, rows: t, onItemClick: r, isSubcontract: o }) => /* @__PURE__ */ h(
  ic,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ Z(ac, { children: [
      /* @__PURE__ */ h(cc, { $provider: o, children: uc(n.icon) ? /* @__PURE__ */ h(lc, { src: n.icon, alt: "" }) : o ? /* @__PURE__ */ h(hc, {}) : /* @__PURE__ */ h(fc, {}) }),
      /* @__PURE__ */ Z(dc, { children: [
        /* @__PURE__ */ h(pr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ h(pr, { children: n.subtitle })
      ] })
    ] })
  }
), mc = b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBg : e.colors.accent + "14"};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBg : e.colors.accent + "22"};
  }
`, gc = b.span`
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
`, yc = b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, vc = b.div`
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
`, mr = ({
  label: e,
  count: n,
  isCollapsed: t,
  onToggle: r,
  variant: o = "category"
}) => /* @__PURE__ */ Z(mc, { $variant: o, onClick: r, title: e, children: [
  /* @__PURE__ */ h(vc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(gc, { $variant: o, children: e }),
  /* @__PURE__ */ h(yc, { $variant: o, children: n })
] }), xc = ({
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
  onToggleGroup: g,
  allGroupIds: w,
  onExpandAll: v,
  onCollapseAll: M
}) => {
  const [p, R] = fe(!1), V = Ve(), F = () => R((k) => !k), D = n ? [...n].sort((k, T) => k.maxPassengers - T.maxPassengers) : [], u = D.length > 0, m = w.length > 0, x = m && f.size === w.length;
  m && f.size;
  const E = e.filter((k) => k.isSubcontract), A = V.subcontract ?? "Subcontract", H = (k) => {
    const T = e.indexOf(k);
    return /* @__PURE__ */ h(
      pc,
      {
        id: k.id,
        item: k.label,
        rows: r[T],
        onItemClick: l,
        isSubcontract: k.isSubcontract
      },
      k.id
    );
  }, B = (k) => {
    const T = e.filter(
      (O) => !O.isSubcontract && O.categoryId === k.id
    );
    if (T.length === 0)
      return null;
    const _ = f.has(k.id), z = k.name;
    return /* @__PURE__ */ Z("div", { children: [
      /* @__PURE__ */ h(
        mr,
        {
          label: z,
          count: T.length,
          isCollapsed: _,
          onToggle: () => g(k.id),
          variant: "category"
        }
      ),
      !_ && T.map(H)
    ] }, k.id);
  }, Q = e.filter(
    (k) => !k.isSubcontract && (!k.categoryId || !u)
  );
  return /* @__PURE__ */ Z(ec, { children: [
    /* @__PURE__ */ Z(tc, { $height: t, children: [
      /* @__PURE__ */ Z(nc, { children: [
        /* @__PURE__ */ Z(oc, { isFocused: p, children: [
          /* @__PURE__ */ h(
            rc,
            {
              placeholder: V.search,
              value: d,
              onChange: a,
              onFocus: F,
              onBlur: F
            }
          ),
          /* @__PURE__ */ h(Ut, { iconName: "search" })
        ] }),
        m && /* @__PURE__ */ h(
          sc,
          {
            title: x ? "Expand all" : "Collapse all",
            onClick: x ? v : M,
            $allCollapsed: x,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: x ? /* @__PURE__ */ Z(_e, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ Z(_e, { children: [
              /* @__PURE__ */ h("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ h(
        hr,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ h(Ut, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    u ? D.map(B) : Q.map(H),
    u && Q.length > 0 && Q.map(H),
    E.length > 0 && /* @__PURE__ */ Z(_e, { children: [
      /* @__PURE__ */ h(
        mr,
        {
          label: A,
          count: E.length,
          isCollapsed: f.has("__subcontract__"),
          onToggle: () => g("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !f.has("__subcontract__") && E.map(H)
    ] }),
    /* @__PURE__ */ h(
      hr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(Ut, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, bc = b.div`
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
`, wc = zt`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Sc = b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${wc} 1s infinite;
`, Cc = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ h(bc, { position: n, children: /* @__PURE__ */ h(Sc, {}) }) : null, Sn = Cc, Ge = (e, n) => {
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
    topText: g,
    bottomText: w,
    strokeStyle: v,
    labelBetweenCells: M
  } = e;
  if (t.beginPath(), t.strokeStyle = v ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), M ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const p = r + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(d, p, c);
  }
  if (l && f && g && w) {
    t.fillStyle = f, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = g.font;
    const p = r + s / 2 - t.measureText(g.label).width / 2;
    t.fillStyle = g.color, t.fillText(g.label, p, g.y), t.font = w.font;
    const R = r + s / 2 - t.measureText(w.label).width / 2;
    t.fillStyle = w.color, t.fillText(w.label, R, w.y);
  }
}, Cn = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, Mc = (e, n, t, r) => {
  const o = pt - Qe / Ms, s = pt - Qe / ks, i = je + xt;
  let c = 0;
  for (let d = 0; d < n; d++) {
    const a = oo(
      $(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    ), l = a.isCurrentDay;
    if (Ge(
      {
        ctx: e,
        x: c,
        y: i,
        width: Me,
        height: Qe,
        isBottomRow: !0,
        fillStyle: l ? r.colors.today + "26" : a.isBusinessDay ? r.colors.gridBackground : r.colors.primary,
        topText: {
          y: o,
          label: l ? "" : a.dayName.toUpperCase(),
          font: Re.bottomRow.name,
          color: Cn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: l ? `700 10px ${Ie}` : Re.bottomRow.number,
          color: l ? r.colors.today : Cn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            r
          )
        }
      },
      r
    ), l) {
      const w = c + Me / 2, v = o - 13 / 2;
      e.save(), e.fillStyle = r.colors.today, e.beginPath(), e.roundRect ? e.roundRect(w - 30 / 2, v, 30, 13, 5) : e.rect(w - 30 / 2, v, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${Ie}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", w, v + 13 / 2 + 0.5), e.restore();
    }
    c += Me;
  }
}, kc = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Ye;
  const s = je;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= an && (c = 0);
    const a = ro(t, d) * Ye;
    Ge(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: xt,
        textYPos: to,
        label: $().month(c).format("MMMM").toUpperCase(),
        font: Re.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, $c = (e, n, t) => {
  let o = 0, s = 0, i = $(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * Me + Me;
  for (let c = 0; c < an; c++)
    i > an - 1 && (i = 0), s = $(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * Me, Ge(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: je,
        textYPos: Pn,
        label: $(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${$(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: Re.topRow
      },
      t
    ), o += s, i++;
}, Dc = (e, n, t, r) => {
  const o = 7 * Me, s = je, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = $(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % nr;
    f <= 0 && (f += nr), l !== 1 && a === 0 && (d = -l * Me + Me), Ge(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: xt,
        textYPos: to,
        label: `${t.toUpperCase()} ${f}`,
        font: Re.middleRow
      },
      r
    ), d += o;
  }
}, Ec = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t ? n.colors.currentDay : r ? n.colors.primary : n.colors.secondary;
}, _c = (e, n, t, r, o) => {
  const s = pt - Qe / 1.6, i = pt - Qe / 4.5, c = je + xt;
  let d = 0;
  for (let a = 0; a < n; a++) {
    const l = $(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame($(), "week");
    Ge(
      {
        ctx: e,
        x: d,
        y: c,
        width: mt,
        height: Qe,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : Ec({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: f ? `700 14px ${Ie}` : Re.bottomRow.name,
          color: f ? o.colors.today : Cn({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: r.toUpperCase(),
          font: Re.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += mt;
  }
}, Tc = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (sr(s) - t + 1) * Ye, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = sr(s + d) * Ye), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ye) * Ye), Ge(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: je,
        textYPos: Pn,
        label: (s + d).toString(),
        font: Re.topRow
      },
      r
    ), c += a, l += a, d++;
}, Ac = (e, n, t, r) => {
  const o = Math.floor(n / Nt) + 2, s = Nt * Ae;
  let d = -$(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ae + 0.5 * Ae;
  for (let a = 0; a < o; a++) {
    const l = $(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Ge(
      {
        ctx: e,
        x: d,
        y: gt,
        width: s,
        height: Mt,
        textYPos: gt + Mt / 2 + 2,
        label: l,
        font: Re.bottomRow.number
      },
      r
    ), d += s;
  }
}, Pc = (e, n, t, r) => {
  const o = Math.ceil(n / Nt), s = $(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Ae;
  for (let f = 0; f < a; f++) {
    const g = $(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = $(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), M = v.format("MMMM").toUpperCase(), p = v.diff(g, "hour") + 1, R = f === 0 ? p * Ae : n * Ae;
    Ge(
      {
        ctx: e,
        x: l,
        y: 0,
        width: R,
        height: gt,
        textYPos: Pn,
        label: M,
        font: Re.topRow
      },
      r
    ), l += R;
  }
}, Yc = (e, n, t, r) => {
  let o = 0;
  const s = gt + Mt, i = $(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Ae;
  for (let d = 0; d < n; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    Ge(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: sn,
        label: a,
        font: Re.bottomRow.hoursInDay,
        textYPos: gt + Mt + sn / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += Ae;
  }
}, Oc = (e, n, t, r, o, s, i) => {
  switch (n) {
    case 0:
      Tc(e, r, s, i), kc(e, t, r, i), _c(e, t, r, o, i);
      break;
    case 1:
      $c(e, r, i), Dc(e, r, o, i), Mc(e, t, r, i);
      break;
    case 2:
      Pc(e, t, r, i), Ac(e, t, r, i), Yc(e, t, r, i);
      break;
  }
}, Ic = b.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, Lc = b.div`
  position: sticky;
  left: ${Oe}px;
  width: calc(${({ $width: e }) => e}px - ${Oe}px);
  z-index: 3;
`, Rc = b.div`
  height: ${pt}px;
  display: block;
`, Nc = b.canvas``, Hc = {
  transfer: /* @__PURE__ */ Z(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ Z(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ Z(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ Z(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ Z(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ Z(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ h("path", { d: "M12 7.5V12l3 2" })
  ] })
}, ze = ({
  name: e,
  className: n,
  strokeWidth: t = 2
}) => /* @__PURE__ */ h(
  "svg",
  {
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: t,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: Hc[e]
  }
), Wc = b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, gr = b.span`
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
`, Pt = b.span`
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
`, zc = b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: #b4791e;
  background: #fbf1de;
  border: 1px solid #e9d3a6;
  padding: 1px 5px;
  border-radius: 5px;
`, Fc = b.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, Bc = b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, jc = b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, Zc = b.span`
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
`, Vc = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], Gc = () => /* @__PURE__ */ Z(Wc, { children: [
  /* @__PURE__ */ h(gr, { children: "Leyenda" }),
  /* @__PURE__ */ Z(Pt, { children: [
    /* @__PURE__ */ h(ze, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ Z(Pt, { children: [
    /* @__PURE__ */ h(ze, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ Z(Pt, { children: [
    /* @__PURE__ */ h(ze, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ Z(Pt, { children: [
    /* @__PURE__ */ h(zc, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(Fc, {}),
  /* @__PURE__ */ Z(gr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Vc.map((e) => /* @__PURE__ */ Z(Bc, { children: [
    /* @__PURE__ */ h(jc, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(Zc, { style: { color: e.color }, children: /* @__PURE__ */ h(ze, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), Xc = kn(function({ zoom: n, topBarWidth: t, showThemeToggle: r, toggleTheme: o }, s) {
  const { week: i } = Ve(), { date: c, cols: d, dayOfYear: a, startDate: l, config: f } = Ze(), g = me(null), w = Ft(), v = ce(
    (M) => {
      const p = Rn(), V = (n === 2 ? Cs : pt) + 1;
      ao(M, p, V), Oc(M, n, d, l, i, a, w);
    },
    [d, a, l, i, n, w]
  );
  return ge(() => {
    if (!g.current)
      return;
    const M = g.current.getContext("2d");
    if (!M)
      return;
    const p = () => v(M);
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [v]), ge(() => {
    const M = g.current;
    if (!M)
      return;
    M.style.letterSpacing = "1px";
    const p = M.getContext("2d");
    p && v(p);
  }, [c, n, v]), /* @__PURE__ */ Z(Ic, { ref: s, children: [
    (f.showTopbar !== !1 || f.showLegend !== !1) && /* @__PURE__ */ Z(Lc, { $width: t, children: [
      f.showTopbar !== !1 && /* @__PURE__ */ h(va, { width: t, showThemeToggle: r, toggleTheme: o }),
      f.showLegend !== !1 && /* @__PURE__ */ h(Gc, {})
    ] }),
    /* @__PURE__ */ h(Rc, { id: $s, children: /* @__PURE__ */ h(Nc, { ref: g }) })
  ] });
}), Uc = (e, n, t) => {
  let r;
  switch (t) {
    case 0:
      r = Ye;
      break;
    case 2:
      r = Ae;
      break;
    default:
      r = Me;
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
}, Kc = (e, n, t, r, o, s) => {
  const i = e * he + Ds, c = n.hour(), d = t.hour();
  let a, l, f, g;
  switch (s) {
    case 2: {
      a = $(r), l = $(o), f = $(n).hour(c).minute(0), g = $(t).hour(d).minute(0);
      break;
    }
    default: {
      a = $(r).hour(0).minute(0), l = $(o).hour(23).minute(59), f = n, g = t;
      break;
    }
  }
  return {
    ...Uc(
      { startDate: a, endDate: l },
      { startDate: f, endDate: g },
      s
    ),
    y: i
  };
}, po = (e) => {
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
b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
b.p`
  ${yt}
  ${vt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const Jc = b.button`
  ${yt}
  position: absolute;
  height: ${An}px;
  border-radius: 7px;
  overflow: hidden;
  outline: none;
  border: none;
  text-align: left;
  color: #fff;
  width: 100%;
  box-shadow: 0 2px 5px -1px rgba(12, 26, 23, 0.28), 0 0 0 0.5px rgba(12, 26, 23, 0.14);
  cursor: ${({ isDraggable: e, isDragging: n }) => e ? n ? "grabbing" : "grab" : "not-allowed"};
  opacity: ${({ isDragging: e }) => e ? 0.3 : 1};
  transition: opacity 0.2s ease;
  ${({ $unconfirmed: e }) => e && `background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px #D98A22, 0 2px 5px -1px rgba(12,26,23,0.28);`}
`, qc = b.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`, Qc = b.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, yr = b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, el = b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, tl = b.span`
  ${vt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, nl = b.span`
  ${vt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, rl = b.span`
  flex: none;
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 0 5px;
  border-radius: 4px;
  margin-right: 5px;
  white-space: nowrap;
`, ol = b.div`
  ${vt}
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  opacity: 0.9;
  font-size: 9.5px;
  font-weight: 600;
  & svg {
    width: 11px;
    height: 11px;
    flex: none;
    opacity: 0.9;
  }
`, vr = b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, xr = b.span`
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
`, br = b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, sl = b.div`
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
    width: 12px;
    height: 12px;
    color: #fff;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.32));
  }
`, wr = b.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, il = 34, al = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, cl = "#3E8E5A", ll = "#D98A22", dl = ({
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
  const { date: a } = Ze(), l = Ln(a, t), { y: f, x: g, width: w } = Kc(
    e,
    l.startDate,
    l.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: v } = Ft(), M = me(null), p = $(n.startDate).isSame($(n.endDate), "day"), R = n.eventType === kt.Tour, V = n.eventType === kt.Transfer, F = p && (R || V), D = (B) => {
    M.current = { x: B.clientX, y: B.clientY }, c && s && (B.preventDefault(), s(n, B));
  }, u = (B) => {
    if (M.current) {
      const Q = Math.abs(B.clientX - M.current.x), k = Math.abs(B.clientY - M.current.y);
      Math.sqrt(Q * Q + k * k) <= 5 && (o == null || o(n)), M.current = null;
    } else
      o == null || o(n);
  }, m = {
    left: `${g}px`,
    top: `${f + d}px`,
    backgroundColor: `${n.bgColor ?? v.defaultTile}`,
    width: `${w}px`,
    color: po(n.bgColor ?? "")
  }, x = !r && n.readiness ? al[n.readiness] : null, E = r && n.subcontractConfirmed === !1, A = r ? E ? ll : cl : x == null ? void 0 : x.stripe, H = (B) => /* @__PURE__ */ Z(
    Jc,
    {
      "data-segment-id": n.segmentId,
      style: m,
      onClick: u,
      onMouseDown: D,
      onDragStart: (Q) => Q.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: E,
      children: [
        A && /* @__PURE__ */ h(qc, { style: { background: A } }),
        B
      ]
    }
  );
  return H(
    F ? /* @__PURE__ */ Z(_e, { children: [
      (r || x) && /* @__PURE__ */ h(vr, { $sm: !0, children: r ? /* @__PURE__ */ h(br, { children: "SUB" }) : x && /* @__PURE__ */ h(xr, { $sm: !0, style: { color: x.color }, children: /* @__PURE__ */ h(ze, { name: x.icon, strokeWidth: x.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ Z(sl, { children: [
        /* @__PURE__ */ h(ze, { name: V ? "transfer" : "sun", strokeWidth: 2.4 }),
        w >= il && /* @__PURE__ */ Z(_e, { children: [
          /* @__PURE__ */ h(wr, { children: $(n.startDate).format("HH:mm") }),
          !V && /* @__PURE__ */ h(wr, { $end: !0, children: $(n.endDate).format("HH:mm") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ Z(_e, { children: [
      /* @__PURE__ */ h(vr, { children: r ? /* @__PURE__ */ h(br, { children: "SUB" }) : x && /* @__PURE__ */ h(xr, { style: { color: x.color }, children: /* @__PURE__ */ h(ze, { name: x.icon, strokeWidth: x.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ Z(Qc, { children: [
        /* @__PURE__ */ Z(yr, { $pad: !0, children: [
          /* @__PURE__ */ h(el, { children: /* @__PURE__ */ h(ze, { name: V ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(tl, { children: n.title })
        ] }),
        /* @__PURE__ */ Z(yr, { children: [
          n.bookingNumber && /* @__PURE__ */ h(rl, { children: n.bookingNumber }),
          n.subtitle && /* @__PURE__ */ h(nl, { children: n.subtitle })
        ] }),
        n.driver && /* @__PURE__ */ Z(ol, { children: [
          /* @__PURE__ */ h(ze, { name: "person" }),
          n.driver
        ] })
      ] })
    ] })
  );
}, Sr = (e, n) => {
  let t = 0;
  for (const r of n)
    e >= r && t++;
  return t * Pe;
}, ul = b.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${he}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  pointer-events: none;
`, fl = ({
  data: e,
  zoom: n,
  onTileClick: t,
  onDragStart: r,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = []
}) => {
  const c = ce(() => {
    let d = 0;
    return e.map((a, l) => {
      if (l > 0 && (d += Math.max(e[l - 1].data.length, 1)), !a.data.some((f) => f.length > 0)) {
        const f = Sr(d, i);
        return [
          /* @__PURE__ */ h(ul, { style: { top: `${d * he + f}px` }, children: "Disponible" }, `dispo-${a.id}`)
        ];
      }
      return a.data.map(
        (f, g) => f.map((w) => {
          const v = s === w.segmentId, M = o ? o(w) : !1, p = g + d, R = Sr(p, i);
          return /* @__PURE__ */ h(
            dl,
            {
              row: p,
              data: w,
              zoom: n,
              isSubcontract: a.isSubcontract,
              onTileClick: t,
              onDragStart: r,
              isDragging: v,
              isDraggable: M,
              yOffset: R
            },
            w.segmentId
          );
        })
      );
    }).flat(2);
  }, [e, t, n, r, o, s, i]);
  return /* @__PURE__ */ h(_e, { children: c() });
}, hl = fl;
b.div`
  box-sizing: border-box;
  font-family: ${Ie};
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
b.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
b.label`
  font-size: 14px;
`;
b.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
b.input`
  height: 18px;
  width: 18px;
`;
b.button`
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
b.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const pl = b.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, ml = b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, gl = b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, yl = b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, vl = b.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, xl = b.div`
  ${yt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, bl = b.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, wl = b.div`
  padding: 10px 12px;
`, Sl = b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Cr = b.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Mr = b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, kr = b.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, $r = b.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Dr = b.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Cl = b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Ml = b.div``, kl = b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, $l = b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Dl = b.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Er = b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, _r = b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Tr = b.div`
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
b.div``;
b.span``;
b.span``;
b.div``;
b.div``;
b.span``;
b.span``;
b.div``;
b.div``;
b.span``;
b.span``;
b.div``;
b.div``;
b.div``;
b.span``;
b.div``;
b.div``;
b.div``;
b.div``;
b.p``;
b.span``;
const El = {
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
}, _l = ({ tooltipData: e }) => {
  const { mouseCoords: n, reservationData: t } = e, r = me(null), [o, s] = fe("below"), i = Ve(), c = { ...El, ...i.tooltip };
  Mn(() => {
    if (!r.current || !n)
      return;
    const w = r.current, { width: v, height: M } = w.getBoundingClientRect(), p = w.parentElement;
    if (!p)
      return;
    const R = p.getBoundingClientRect(), V = 12, F = 4, D = R.height - n.y, u = R.width - n.x;
    let m = n.x + V, x = n.y + V, E = "below";
    u < v + V && (m = n.x - v - V), D < M + V && (x = n.y - M - V, E = "above"), m = Math.max(F, Math.min(m, R.width - v - F)), x = Math.max(F, Math.min(x, R.height - M - F)), s(E), w.style.left = `${m}px`, w.style.top = `${x}px`;
  }, [n]);
  const d = t.reservationType === kt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, g = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ Z(pl, { ref: r, $position: o, children: [
    /* @__PURE__ */ Z(ml, { children: [
      /* @__PURE__ */ Z(gl, { children: [
        /* @__PURE__ */ h(yl, { children: t.bookingNumber }),
        /* @__PURE__ */ h(vl, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ h(xl, { children: t.eventName }),
      t.client && /* @__PURE__ */ h(bl, { children: t.client })
    ] }),
    /* @__PURE__ */ Z(wl, { children: [
      /* @__PURE__ */ Z(Sl, { children: [
        /* @__PURE__ */ Z(Cr, { children: [
          /* @__PURE__ */ h(Mr, { children: c.startDate }),
          /* @__PURE__ */ Z(kr, { children: [
            /* @__PURE__ */ h($r, { children: t.startDate }),
            " ",
            /* @__PURE__ */ h(Dr, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ Z(Cr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Mr, { children: c.endDate }),
          /* @__PURE__ */ Z(kr, { children: [
            /* @__PURE__ */ h($r, { children: t.endDate }),
            " ",
            /* @__PURE__ */ h(Dr, { children: t.endTime })
          ] })
        ] })
      ] }),
      g.length > 0 && /* @__PURE__ */ h(Cl, { children: g.map((w, v) => /* @__PURE__ */ Z(Ml, { children: [
        /* @__PURE__ */ h(kl, { children: w.label }),
        /* @__PURE__ */ h($l, { children: w.value })
      ] }, v)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ Z(Dl, { children: [
        t.serviceNotes && /* @__PURE__ */ Z(Er, { children: [
          /* @__PURE__ */ h(_r, { children: c.serviceNotes }),
          /* @__PURE__ */ h(Tr, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ Z(Er, { children: [
          /* @__PURE__ */ h(_r, { children: c.reservationNotes }),
          /* @__PURE__ */ h(Tr, { children: t.reservationNotes })
        ] })
      ] })
    ] })
  ] });
};
b.div`
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
b.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`;
b.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`;
const Tl = b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Al = b.div`
  position: absolute;
  height: ${An}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: n, $animateToY: t }) => e && n !== void 0 && t !== void 0 ? `transform: translate3d(${n}px, ${t}px, 0);` : ""}
`, Pl = b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Ar = b.p`
  ${yt}
  ${vt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Yl = b.p`
  ${yt}
  ${vt}
`, Ol = b.div`
  position: sticky;
  left: ${Oe + 16}px;
  overflow: hidden;
`, Il = b.div`
  position: absolute;
  height: ${An}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Ll = b.div`
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
`, Rl = b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Nl = b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Hl = b.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Pr = b.div`
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
`, Yr = b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Or = b.div`
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
`, Ir = b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, Kt = b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, Jt = b.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, at = b.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Lr = b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Wl = ({
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
  const a = Ve(), l = (D) => {
    let u = 0;
    for (const m of d)
      m <= D && u++;
    return D * he + u * Pe;
  }, [f, g] = fe(null), [w, v] = fe(0), M = ce((D = 400, u = 300) => {
    const x = t.width, E = 48, A = document.getElementById("react-scheduler");
    if (!A)
      return {
        x: n.x + x + 16,
        y: n.y
      };
    const H = A.scrollLeft, B = A.scrollTop, Q = A.clientWidth, k = A.clientHeight, T = n.x - H, _ = n.y - B, z = {
      left: Oe + 16,
      // Avoid left column
      right: Q - 16,
      top: 16,
      bottom: k - 16
    }, O = z.right - (T + x), q = T - z.left, ee = z.bottom - (_ + E), ie = _ - z.top;
    let oe, W;
    return O >= D + 16 ? oe = T + x + 16 : q >= D + 16 ? oe = T - D - 16 : O >= q ? (oe = T + x + 16, oe + D > z.right && (oe = z.right - D)) : (oe = T - D - 16, oe < z.left && (oe = z.left)), ee >= u + 16 ? W = _ + E + 16 : ie >= u + 16 ? W = _ - u - 16 : ee >= ie ? (W = _ + E + 16, W + u > z.bottom && (W = z.bottom - u)) : (W = _ - u - 16, W < z.top && (W = z.top)), oe = Math.max(z.left, Math.min(oe, z.right - D)), W = Math.max(z.top, Math.min(W, z.bottom - u)), {
      x: oe + H,
      y: W + B
    };
  }, [n.x, n.y, t.width]);
  ge(() => {
    s === "dragging" && e && w === 0 ? v(n.x) : s === "idle" && v(0);
  }, [s, e, n.x, w]), ge(() => {
    g(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const p = Ce(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const D = [];
    let u = 0;
    for (const m of i) {
      const x = Math.max(m.data.length, 1);
      if (m.capacity !== void 0 && e.totalPassengers > m.capacity)
        for (let E = 0; E < x; E++)
          D.push(u + E);
      u += x;
    }
    return D;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const R = s === "animating", V = po(e.bgColor ?? ""), F = () => {
    if (!r)
      return "";
    const D = $(r.startDate).format("MMM D, HH:mm"), u = $(r.endDate).format("HH:mm");
    return `${D} - ${u}`;
  };
  return /* @__PURE__ */ Z(Tl, { children: [
    p.map((D) => /* @__PURE__ */ h(
      Nl,
      {
        style: {
          top: `${l(D)}px`,
          height: `${he}px`
        }
      },
      D
    )),
    r && s === "dragging" && /* @__PURE__ */ h(
      Rl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${he}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ Z(_e, { children: [
      /* @__PURE__ */ h(
        Il,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (he - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ h(
        Ll,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (he - 48) / 2}px`
          },
          children: F()
        }
      )
    ] }),
    r && s === "dragging" && c && /* @__PURE__ */ h(
      Hl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          left: "0px",
          top: `${l(r.resourceIndex)}px`,
          height: `${he}px`
        }
      }
    ),
    r && o && r.hasConflict && r.conflicts && r.conflicts.length > 0 && s === "dragging" && (() => {
      const D = M(400, 300);
      return /* @__PURE__ */ Z(
        Pr,
        {
          style: {
            left: `${D.x}px`,
            top: `${D.y}px`
          },
          children: [
            /* @__PURE__ */ Z(Yr, { children: [
              /* @__PURE__ */ h(Or, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Ir, { children: r.conflicts.map((u, m) => {
              const x = $(r.startDate).format("YYYY-MM-DD"), E = $(r.endDate).format("YYYY-MM-DD"), A = $(u.event.startDate).format("YYYY-MM-DD"), H = $(u.event.endDate).format("YYYY-MM-DD"), B = $(u.conflictStart).format("YYYY-MM-DD"), Q = $(u.conflictEnd).format("YYYY-MM-DD"), k = x !== E, T = A !== H, _ = B !== Q, z = k ? $(r.startDate).format("MMM D, h:mm A") : $(r.startDate).format("h:mm A"), O = k ? $(r.endDate).format("MMM D, h:mm A") : $(r.endDate).format("h:mm A"), q = T ? $(u.event.startDate).format("MMM D, h:mm A") : $(u.event.startDate).format("h:mm A"), ee = T ? $(u.event.endDate).format("MMM D, h:mm A") : $(u.event.endDate).format("h:mm A"), ie = _ ? $(u.conflictStart).format("MMM D, h:mm A") : $(u.conflictStart).format("h:mm A"), oe = _ ? $(u.conflictEnd).format("MMM D, h:mm A") : $(u.conflictEnd).format("h:mm A"), W = _ ? "" : $(u.conflictStart).format("MMM D"), j = r.startDate.getTime(), X = r.endDate.getTime(), G = u.event.startDate.getTime(), S = u.event.endDate.getTime(), P = j >= G && j < S, y = X > G && X <= S, Y = j <= G && X >= S, N = G <= j && S >= X;
              let I = !1, C = !1, te = !1, L = !1, K = "";
              return Y || N ? (I = !0, C = !0, te = !0, L = !0, K = `⚠️ ${a.conflicts.changeBoth}`) : P && y ? (I = !0, C = !0, te = !0, L = !0, K = `⚠️ ${a.conflicts.changeBoth}`) : P ? (I = !0, L = !0, K = `⚠️ ${a.conflicts.changeStart}`) : y && (C = !0, te = !0, K = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ Z(Kt, { children: [
                /* @__PURE__ */ Z(Jt, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ Z(at, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  I ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: z }) : z,
                  " ",
                  a.conflicts.to,
                  " ",
                  C ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: O }) : O
                ] }),
                /* @__PURE__ */ Z(at, { children: [
                  /* @__PURE__ */ h("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  te ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: q }) : q,
                  " ",
                  a.conflicts.to,
                  " ",
                  L ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ee }) : ee
                ] }),
                /* @__PURE__ */ Z(Lr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  W && `${W}, `,
                  ie,
                  " - ",
                  oe
                ] }),
                K && /* @__PURE__ */ h(at, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: K })
              ] }, m);
            }) })
          ]
        }
      );
    })(),
    r && o && !r.hasConflict && r.nearbyEvents && r.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const D = M(400, 400);
      return /* @__PURE__ */ Z(
        Pr,
        {
          style: {
            left: `${D.x}px`,
            top: `${D.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ Z(Yr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Or, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ Z(Ir, { children: [
              (() => {
                const u = r.nearbyEvents.some((A) => A.position === "before"), m = r.nearbyEvents.some((A) => A.position === "after"), x = $(r.startDate).format("h:mm A"), E = $(r.endDate).format("h:mm A");
                return /* @__PURE__ */ Z(Kt, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ Z(Jt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ Z(at, { style: { fontWeight: 600 }, children: [
                    $(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: x }) : x,
                    " ",
                    a.conflicts.to,
                    " ",
                    m ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: E }) : E
                  ] }),
                  /* @__PURE__ */ h(at, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              r.nearbyEvents.map((u, m) => {
                const x = $(u.event.startDate).format("YYYY-MM-DD"), E = $(u.event.endDate).format("YYYY-MM-DD"), A = x !== E, H = A ? $(u.event.startDate).format("MMM D, h:mm A") : $(u.event.startDate).format("h:mm A"), B = A ? $(u.event.endDate).format("MMM D, h:mm A") : $(u.event.endDate).format("h:mm A"), Q = $(u.event.startDate).format("MMM D"), k = Math.floor(u.timeGap / (1e3 * 60 * 60)), T = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), _ = k > 0 ? `${k}h ${T}m` : `${T}m`, z = u.position === "after", O = u.position === "before";
                return /* @__PURE__ */ Z(Kt, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ Z(Jt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ Z(at, { children: [
                    !A && `${Q}: `,
                    z ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: H }) : H,
                    " ",
                    a.conflicts.to,
                    " ",
                    O ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: B }) : B
                  ] }),
                  /* @__PURE__ */ Z(Lr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    _,
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
    /* @__PURE__ */ h(
      Al,
      {
        $isAnimating: R,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: R ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: R ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: R ? void 0 : `translate3d(${c ? w : n.x}px, ${n.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: V
        },
        children: /* @__PURE__ */ h(Pl, { children: /* @__PURE__ */ Z(Ol, { children: [
          /* @__PURE__ */ h(Ar, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Ar, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(Yl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, zl = Wl, Fl = zt`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Bl = b.div`
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
  animation: ${Fl} 1.5s ease-in-out infinite;
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
`, jl = ({ selectionBox: e, isSelecting: n }) => !e || !n ? null : /* @__PURE__ */ h(
  Bl,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Zl = jl, Vl = zt`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Gl = b.div`
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
  animation: ${Vl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, Xl = b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Ul = b.span`
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
`, Kl = b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Jl = b.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;
b.div`
  display: none;
`;
b.div`
  display: none;
`;
b.button`
  display: none;
`;
const ql = b.div`
  display: flex;
  gap: 8px;
`, Rr = b.button`
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
`, Ql = ({ selections: e, onConfirm: n, onClear: t }) => {
  var v;
  const o = Ve().multiSelect, s = Ce(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const g = s > 0, w = /* @__PURE__ */ Z(Gl, { $hasConflicts: g, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ Z(Xl, { children: [
      /* @__PURE__ */ Z(Ul, { $hasConflicts: g, children: [
        e.length,
        " ",
        i
      ] }),
      g && /* @__PURE__ */ Z(Kl, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ h(Jl, { children: c })
    ] }),
    /* @__PURE__ */ Z(ql, { children: [
      /* @__PURE__ */ Z(Rr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ h(Rr, { variant: "primary", $hasConflicts: g, onClick: n, children: g ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return wo(w, document.body);
}, ed = Ql, td = zt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, nd = b.div`
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
  animation: ${td} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && Wt`
      border-style: dashed;
    `}
`, rd = b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, od = b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, sd = b.button`
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
`, id = ({
  selections: e,
  data: n,
  zoom: t,
  startDate: r,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = fe(null), [a, l] = fe({ x: 0, y: 0 }), f = me(null), g = Ce(() => {
    switch (t) {
      case 0:
        return Ye * 7;
      case 1:
        return Me;
      case 2:
        return Ae;
      default:
        return Me;
    }
  }, [t]), w = Ce(() => $().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), v = Ce(() => e.map((m, x) => {
    let E = 0, A = !1;
    for (const q of n) {
      if (q.id === m.resourceId) {
        A = !0;
        break;
      }
      E += Math.max(q.data.length, 1);
    }
    if (!A)
      return null;
    const H = $(m.startDate), B = $(m.endDate);
    let Q, k;
    switch (t) {
      case 0:
        Q = Math.floor(H.diff(w, "days") / 7), k = Math.max(1, Math.ceil(B.diff(H, "days") / 7) + 1);
        break;
      case 1:
        Q = H.diff(w, "days"), k = Math.max(1, B.diff(H, "days") + 1);
        break;
      case 2:
        Q = H.diff(w, "hours"), k = Math.max(1, B.diff(H, "hours") + 1);
        break;
      default:
        Q = 0, k = 1;
    }
    const T = Q * g;
    let _ = 0;
    for (const q of i)
      q <= E && _++;
    const z = E * he + _ * Pe, O = k * g;
    return {
      index: x,
      selection: m,
      x: T,
      y: z,
      width: O,
      height: he
    };
  }), [e, n, t, w, g]), M = (m, x) => {
    const E = $(m).format("MMM D"), A = $(x).format("MMM D");
    return E === A ? E : `${E} - ${A}`;
  }, p = (m) => !m.hasConflict || !m.conflicts ? "" : `⚠️ Conflicts with:
${m.conflicts.map((E) => {
    const A = (E.overlapDuration / 36e5).toFixed(1);
    return `• ${E.event.title} (${A}h overlap)`;
  }).join(`
`)}`, R = ce(
    (m) => {
      let x = 0;
      for (const E of n) {
        const A = Math.max(E.data.length, 1);
        if (m >= x * he && m < (x + A) * he)
          return {
            resourceId: E.id,
            resourceLabel: E.label
          };
        x += A;
      }
      return null;
    },
    [n]
  ), V = ce(
    (m) => {
      const x = Math.floor(m / g);
      switch (t) {
        case 0:
          return w.add(x * 7, "days").toDate();
        case 1:
          return w.add(x, "days").toDate();
        case 2:
          return w.add(x, "hours").toDate();
        default:
          return w.toDate();
      }
    },
    [t, w, g]
  ), F = ce(
    (m, x) => {
      !s || (m.preventDefault(), m.stopPropagation(), !v[x]) || (f.current = { x: m.clientX, y: m.clientY }, d(x), l({ x: 0, y: 0 }));
    },
    [s, v]
  ), D = ce(
    (m) => {
      if (c === null || !f.current)
        return;
      const x = m.clientX - f.current.x, E = m.clientY - f.current.y, A = Math.round(x / g) * g, H = Math.round(E / he) * he;
      l({ x: A, y: H });
    },
    [c, g]
  ), u = ce(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const m = v[c];
    if (!m) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const x = m.x + a.x, E = m.y + a.y, A = R(E + he / 2);
    if (!A) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const H = V(x), B = e[c], Q = B.endDate.getTime() - B.startDate.getTime(), k = new Date(H.getTime() + Q);
    s(c, {
      startDate: H,
      endDate: k,
      resourceId: A.resourceId,
      resourceLabel: A.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, v, e, s, R, V]);
  return ge(() => {
    if (c !== null)
      return document.addEventListener("mousemove", D), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", u);
      };
  }, [c, D, u]), /* @__PURE__ */ h(_e, { children: v.map((m) => {
    if (!m)
      return null;
    const x = m.selection.hasConflict || !1, E = c === m.index, A = E ? m.x + a.x : m.x, H = E ? m.y + a.y : m.y;
    return /* @__PURE__ */ Z(
      nd,
      {
        $hasConflict: x,
        $isDragging: E,
        style: {
          left: A,
          top: H,
          width: m.width,
          height: m.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (B) => F(B, m.index),
        children: [
          x && /* @__PURE__ */ h(od, { title: p(m.selection), children: "⚠️" }),
          /* @__PURE__ */ h(rd, { $hasConflict: x, children: M(m.selection.startDate, m.selection.endDate) }),
          /* @__PURE__ */ h(
            sd,
            {
              onClick: (B) => {
                B.stopPropagation(), o(m.index);
              },
              onMouseDown: (B) => B.stopPropagation(),
              title: x ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      m.index
    );
  }) });
}, ad = id, cd = b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, ld = ({ zoom: e, startDate: n }) => {
  const { cols: t } = Ze(), r = Ce(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Ye * 7 : Me, s = $().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = $().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ h(cd, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, dd = ld;
export {
  md as Scheduler
};
