var yo = Object.defineProperty;
var vo = (e, n, t) => n in e ? yo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Nn = (e, n, t) => (vo(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as h, jsxs as V, Fragment as _e } from "react/jsx-runtime";
import * as re from "react";
import qe, { useRef as ve, useContext as Xe, useMemo as Ce, useLayoutEffect as Mn, useDebugValue as Hn, createElement as xo, createContext as Nr, useState as de, useCallback as ce, useEffect as xe, forwardRef as kn, useImperativeHandle as Hr } from "react";
import { createPortal as bo } from "react-dom";
var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, St = {}, wo = {
  get exports() {
    return St;
  },
  set exports(e) {
    St = e;
  }
}, pe = {};
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
function So() {
  if (Wn)
    return pe;
  Wn = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function M(p) {
    if (typeof p == "object" && p !== null) {
      var N = p.$$typeof;
      switch (N) {
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
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  return pe.ContextConsumer = i, pe.ContextProvider = s, pe.Element = e, pe.ForwardRef = d, pe.Fragment = t, pe.Lazy = g, pe.Memo = f, pe.Portal = n, pe.Profiler = o, pe.StrictMode = r, pe.Suspense = a, pe.SuspenseList = l, pe.isAsyncMode = function() {
    return !1;
  }, pe.isConcurrentMode = function() {
    return !1;
  }, pe.isContextConsumer = function(p) {
    return M(p) === i;
  }, pe.isContextProvider = function(p) {
    return M(p) === s;
  }, pe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, pe.isForwardRef = function(p) {
    return M(p) === d;
  }, pe.isFragment = function(p) {
    return M(p) === t;
  }, pe.isLazy = function(p) {
    return M(p) === g;
  }, pe.isMemo = function(p) {
    return M(p) === f;
  }, pe.isPortal = function(p) {
    return M(p) === n;
  }, pe.isProfiler = function(p) {
    return M(p) === o;
  }, pe.isStrictMode = function(p) {
    return M(p) === r;
  }, pe.isSuspense = function(p) {
    return M(p) === a;
  }, pe.isSuspenseList = function(p) {
    return M(p) === l;
  }, pe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === r || p === a || p === l || p === b || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === f || p.$$typeof === s || p.$$typeof === i || p.$$typeof === d || p.$$typeof === v || p.getModuleId !== void 0);
  }, pe.typeOf = M, pe;
}
var me = {};
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
function Co() {
  return zn || (zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = !1, M = !1, p = !1, N = !1, j = !1, P;
    P = Symbol.for("react.module.reference");
    function A(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === t || R === o || j || R === r || R === a || R === l || N || R === b || v || M || p || typeof R == "object" && R !== null && (R.$$typeof === g || R.$$typeof === f || R.$$typeof === s || R.$$typeof === i || R.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === P || R.getModuleId !== void 0));
    }
    function u(R) {
      if (typeof R == "object" && R !== null) {
        var K = R.$$typeof;
        switch (K) {
          case e:
            var ne = R.type;
            switch (ne) {
              case t:
              case o:
              case r:
              case a:
              case l:
                return ne;
              default:
                var W = ne && ne.$$typeof;
                switch (W) {
                  case c:
                  case i:
                  case d:
                  case g:
                  case f:
                  case s:
                    return W;
                  default:
                    return K;
                }
            }
          case n:
            return K;
        }
      }
    }
    var m = i, x = s, E = e, T = d, z = t, G = g, Q = f, k = n, _ = o, D = r, F = a, O = l, J = !1, ee = !1;
    function se(R) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(R) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(R) {
      return u(R) === i;
    }
    function Z(R) {
      return u(R) === s;
    }
    function U(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function X(R) {
      return u(R) === d;
    }
    function S(R) {
      return u(R) === t;
    }
    function I(R) {
      return u(R) === g;
    }
    function y(R) {
      return u(R) === f;
    }
    function L(R) {
      return u(R) === n;
    }
    function H(R) {
      return u(R) === o;
    }
    function Y(R) {
      return u(R) === r;
    }
    function C(R) {
      return u(R) === a;
    }
    function te(R) {
      return u(R) === l;
    }
    me.ContextConsumer = m, me.ContextProvider = x, me.Element = E, me.ForwardRef = T, me.Fragment = z, me.Lazy = G, me.Memo = Q, me.Portal = k, me.Profiler = _, me.StrictMode = D, me.Suspense = F, me.SuspenseList = O, me.isAsyncMode = se, me.isConcurrentMode = oe, me.isContextConsumer = B, me.isContextProvider = Z, me.isElement = U, me.isForwardRef = X, me.isFragment = S, me.isLazy = I, me.isMemo = y, me.isPortal = L, me.isProfiler = H, me.isStrictMode = Y, me.isSuspense = C, me.isSuspenseList = te, me.isValidElementType = A, me.typeOf = u;
  }()), me;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = So() : e.exports = Co();
})(wo);
function Mo(e) {
  function n(B, Z, U, X, S) {
    for (var I = 0, y = 0, L = 0, H = 0, Y, C, te = 0, R = 0, K, ne = K = Y = 0, W = 0, ae = 0, ue = 0, fe = 0, be = U.length, De = be - 1, we, q = "", ie = "", le = "", Me = "", ke; W < be; ) {
      if (C = U.charCodeAt(W), W === De && y + H + L + I !== 0 && (y !== 0 && (C = y === 47 ? 10 : 47), H = L = I = 0, be++, De++), y + H + L + I === 0) {
        if (W === De && (0 < ae && (q = q.replace(g, "")), 0 < q.trim().length)) {
          switch (C) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += U.charAt(W);
          }
          C = 59;
        }
        switch (C) {
          case 123:
            for (q = q.trim(), Y = q.charCodeAt(0), K = 1, fe = ++W; W < be; ) {
              switch (C = U.charCodeAt(W)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (C = U.charCodeAt(W + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = W + 1; ne < De; ++ne)
                          switch (U.charCodeAt(ne)) {
                            case 47:
                              if (C === 42 && U.charCodeAt(ne - 1) === 42 && W + 2 !== ne) {
                                W = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (C === 47) {
                                W = ne + 1;
                                break e;
                              }
                          }
                        W = ne;
                      }
                  }
                  break;
                case 91:
                  C++;
                case 40:
                  C++;
                case 34:
                case 39:
                  for (; W++ < De && U.charCodeAt(W) !== C; )
                    ;
              }
              if (K === 0)
                break;
              W++;
            }
            switch (K = U.substring(fe, W), Y === 0 && (Y = (q = q.replace(f, "").trim()).charCodeAt(0)), Y) {
              case 64:
                switch (0 < ae && (q = q.replace(g, "")), C = q.charCodeAt(1), C) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ae = Z;
                    break;
                  default:
                    ae = F;
                }
                if (K = n(Z, ae, K, C, S + 1), fe = K.length, 0 < J && (ae = t(F, q, ue), ke = c(3, K, ae, Z, k, Q, fe, C, S, X), q = ae.join(""), ke !== void 0 && (fe = (K = ke.trim()).length) === 0 && (C = 0, K = "")), 0 < fe)
                  switch (C) {
                    case 115:
                      q = q.replace(m, i);
                    case 100:
                    case 109:
                    case 45:
                      K = q + "{" + K + "}";
                      break;
                    case 107:
                      q = q.replace(j, "$1 $2"), K = q + "{" + K + "}", K = D === 1 || D === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                      break;
                    default:
                      K = q + K, X === 112 && (K = (ie += K, ""));
                  }
                else
                  K = "";
                break;
              default:
                K = n(Z, t(Z, q, ue), K, X, S + 1);
            }
            le += K, K = ue = ae = ne = Y = 0, q = "", C = U.charCodeAt(++W);
            break;
          case 125:
          case 59:
            if (q = (0 < ae ? q.replace(g, "") : q).trim(), 1 < (fe = q.length))
              switch (ne === 0 && (Y = q.charCodeAt(0), Y === 45 || 96 < Y && 123 > Y) && (fe = (q = q.replace(" ", ":")).length), 0 < J && (ke = c(1, q, Z, B, k, Q, ie.length, X, S, X)) !== void 0 && (fe = (q = ke.trim()).length) === 0 && (q = "\0\0"), Y = q.charCodeAt(0), C = q.charCodeAt(1), Y) {
                case 0:
                  break;
                case 64:
                  if (C === 105 || C === 99) {
                    Me += q + U.charAt(W);
                    break;
                  }
                default:
                  q.charCodeAt(fe - 1) !== 58 && (ie += o(q, Y, C, q.charCodeAt(2)));
              }
            ue = ae = ne = Y = 0, q = "", C = U.charCodeAt(++W);
        }
      }
      switch (C) {
        case 13:
        case 10:
          y === 47 ? y = 0 : 1 + Y === 0 && X !== 107 && 0 < q.length && (ae = 1, q += "\0"), 0 < J * se && c(0, q, Z, B, k, Q, ie.length, X, S, X), Q = 1, k++;
          break;
        case 59:
        case 125:
          if (y + H + L + I === 0) {
            Q++;
            break;
          }
        default:
          switch (Q++, we = U.charAt(W), C) {
            case 9:
            case 32:
              if (H + I + y === 0)
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
              H + y + I === 0 && (ae = ue = 1, we = "\f" + we);
              break;
            case 108:
              if (H + y + I + _ === 0 && 0 < ne)
                switch (W - ne) {
                  case 2:
                    te === 112 && U.charCodeAt(W - 3) === 58 && (_ = te);
                  case 8:
                    R === 111 && (_ = R);
                }
              break;
            case 58:
              H + y + I === 0 && (ne = W);
              break;
            case 44:
              y + L + H + I === 0 && (ae = 1, we += "\r");
              break;
            case 34:
            case 39:
              y === 0 && (H = H === C ? 0 : H === 0 ? C : H);
              break;
            case 91:
              H + y + L === 0 && I++;
              break;
            case 93:
              H + y + L === 0 && I--;
              break;
            case 41:
              H + y + I === 0 && L--;
              break;
            case 40:
              if (H + y + I === 0) {
                if (Y === 0)
                  switch (2 * te + 3 * R) {
                    case 533:
                      break;
                    default:
                      Y = 1;
                  }
                L++;
              }
              break;
            case 64:
              y + L + H + I + ne + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + I + L))
                switch (y) {
                  case 0:
                    switch (2 * C + 3 * U.charCodeAt(W + 1)) {
                      case 235:
                        y = 47;
                        break;
                      case 220:
                        fe = W, y = 42;
                    }
                    break;
                  case 42:
                    C === 47 && te === 42 && fe + 2 !== W && (U.charCodeAt(fe + 2) === 33 && (ie += U.substring(fe, W + 1)), we = "", y = 0);
                }
          }
          y === 0 && (q += we);
      }
      R = te, te = C, W++;
    }
    if (fe = ie.length, 0 < fe) {
      if (ae = Z, 0 < J && (ke = c(2, ie, ae, B, k, Q, fe, X, S, X), ke !== void 0 && (ie = ke).length === 0))
        return Me + ie + le;
      if (ie = ae.join(",") + "{" + ie + "}", D * _ !== 0) {
        switch (D !== 2 || s(ie, 2) || (_ = 0), _) {
          case 111:
            ie = ie.replace(A, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(P, "::-webkit-input-$1") + ie.replace(P, "::-moz-$1") + ie.replace(P, ":-ms-input-$1") + ie;
        }
        _ = 0;
      }
    }
    return Me + ie + le;
  }
  function t(B, Z, U) {
    var X = Z.trim().split(p);
    Z = X;
    var S = X.length, I = B.length;
    switch (I) {
      case 0:
      case 1:
        var y = 0;
        for (B = I === 0 ? "" : B[0] + " "; y < S; ++y)
          Z[y] = r(B, Z[y], U).trim();
        break;
      default:
        var L = y = 0;
        for (Z = []; y < S; ++y)
          for (var H = 0; H < I; ++H)
            Z[L++] = r(B[H] + " ", X[y], U).trim();
    }
    return Z;
  }
  function r(B, Z, U) {
    var X = Z.charCodeAt(0);
    switch (33 > X && (X = (Z = Z.trim()).charCodeAt(0)), X) {
      case 38:
        return Z.replace(N, "$1" + B.trim());
      case 58:
        return B.trim() + Z.replace(N, "$1" + B.trim());
      default:
        if (0 < 1 * U && 0 < Z.indexOf("\f"))
          return Z.replace(N, (B.charCodeAt(0) === 58 ? "" : "$1") + B.trim());
    }
    return B + Z;
  }
  function o(B, Z, U, X) {
    var S = B + ";", I = 2 * Z + 3 * U + 4 * X;
    if (I === 944) {
      B = S.indexOf(":", 9) + 1;
      var y = S.substring(B, S.length - 1).trim();
      return y = S.substring(0, B).trim() + y + ";", D === 1 || D === 2 && s(y, 1) ? "-webkit-" + y + y : y;
    }
    if (D === 0 || D === 2 && !s(S, 1))
      return S;
    switch (I) {
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
          return S.replace(G, "$1-webkit-$2") + S;
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
        return v.test(S) ? S.replace(b, ":-webkit-") + S.replace(b, ":-moz-") + S : S;
      case 1e3:
        switch (y = S.substring(13).trim(), Z = y.indexOf("-") + 1, y.charCodeAt(0) + y.charCodeAt(Z)) {
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
        switch (Z = (S = B).length - 10, y = (S.charCodeAt(Z) === 33 ? S.substring(0, Z) : S).substring(B.indexOf(":", 7) + 1).trim(), I = y.charCodeAt(0) + (y.charCodeAt(7) | 0)) {
          case 203:
            if (111 > y.charCodeAt(8))
              break;
          case 115:
            S = S.replace(y, "-webkit-" + y) + ";" + S;
            break;
          case 207:
          case 102:
            S = S.replace(y, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + S.replace(y, "-webkit-" + y) + ";" + S.replace(y, "-ms-" + y + "box") + ";" + S;
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
        if (z.test(B) === !0)
          return (y = B.substring(B.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(B.replace("stretch", "fill-available"), Z, U, X).replace(":fill-available", ":stretch") : S.replace(y, "-webkit-" + y) + S.replace(y, "-moz-" + y.replace("fill-", "")) + S;
        break;
      case 962:
        if (S = "-webkit-" + S + (S.charCodeAt(5) === 102 ? "-ms-" + S : "") + S, U + X === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf("transform", 10))
          return S.substring(0, S.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + S;
    }
    return S;
  }
  function s(B, Z) {
    var U = B.indexOf(Z === 1 ? ":" : "{"), X = B.substring(0, Z !== 3 ? U : 10);
    return U = B.substring(U + 1, B.length - 1), ee(Z !== 2 ? X : X.replace(T, "$1"), U, Z);
  }
  function i(B, Z) {
    var U = o(Z, Z.charCodeAt(0), Z.charCodeAt(1), Z.charCodeAt(2));
    return U !== Z + ";" ? U.replace(x, " or ($1)").substring(4) : "(" + Z + ")";
  }
  function c(B, Z, U, X, S, I, y, L, H, Y) {
    for (var C = 0, te = Z, R; C < J; ++C)
      switch (R = O[C].call(l, B, te, U, X, S, I, y, L, H, Y)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          te = R;
      }
    if (te !== Z)
      return te;
  }
  function d(B) {
    switch (B) {
      case void 0:
      case null:
        J = O.length = 0;
        break;
      default:
        if (typeof B == "function")
          O[J++] = B;
        else if (typeof B == "object")
          for (var Z = 0, U = B.length; Z < U; ++Z)
            d(B[Z]);
        else
          se = !!B | 0;
    }
    return d;
  }
  function a(B) {
    return B = B.prefix, B !== void 0 && (ee = null, B ? typeof B != "function" ? D = 1 : (D = 2, ee = B) : D = 0), a;
  }
  function l(B, Z) {
    var U = B;
    if (33 > U.charCodeAt(0) && (U = U.trim()), oe = U, U = [oe], 0 < J) {
      var X = c(-1, Z, U, U, k, Q, 0, 0, 0, 0);
      X !== void 0 && typeof X == "string" && (Z = X);
    }
    var S = n(F, U, Z, 0, 0);
    return 0 < J && (X = c(-2, S, U, U, k, Q, S.length, 0, 0, 0), X !== void 0 && (S = X)), oe = "", _ = 0, Q = k = 1, S;
  }
  var f = /^\0+/g, g = /[\0\r\f]/g, b = /: */g, v = /zoo|gra/, M = /([,: ])(transform)/g, p = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, j = /@(k\w+)\s*(\S*)\s*/, P = /::(place)/g, A = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, m = /\(\s*(.*)\s*\)/g, x = /([\s\S]*?);/g, E = /-self|flex-/g, T = /[^]*?(:[rp][el]a[\w-]+)[^]*/, z = /stretch|:\s*\w+\-(?:conte|avail)/, G = /([^-])(image-set\()/, Q = 1, k = 1, _ = 0, D = 1, F = [], O = [], J = 0, ee = null, se = 0, oe = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var ko = {
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
function $o(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var Do = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bn = /* @__PURE__ */ $o(
  function(e) {
    return Do.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qt = {}, Eo = {
  get exports() {
    return qt;
  },
  set exports(e) {
    qt = e;
  }
}, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function _o() {
  if (Fn)
    return ge;
  Fn = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function P(u) {
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
                case b:
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
  function A(u) {
    return P(u) === a;
  }
  return ge.AsyncMode = d, ge.ConcurrentMode = a, ge.ContextConsumer = c, ge.ContextProvider = i, ge.Element = n, ge.ForwardRef = l, ge.Fragment = r, ge.Lazy = v, ge.Memo = b, ge.Portal = t, ge.Profiler = s, ge.StrictMode = o, ge.Suspense = f, ge.isAsyncMode = function(u) {
    return A(u) || P(u) === d;
  }, ge.isConcurrentMode = A, ge.isContextConsumer = function(u) {
    return P(u) === c;
  }, ge.isContextProvider = function(u) {
    return P(u) === i;
  }, ge.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, ge.isForwardRef = function(u) {
    return P(u) === l;
  }, ge.isFragment = function(u) {
    return P(u) === r;
  }, ge.isLazy = function(u) {
    return P(u) === v;
  }, ge.isMemo = function(u) {
    return P(u) === b;
  }, ge.isPortal = function(u) {
    return P(u) === t;
  }, ge.isProfiler = function(u) {
    return P(u) === s;
  }, ge.isStrictMode = function(u) {
    return P(u) === o;
  }, ge.isSuspense = function(u) {
    return P(u) === f;
  }, ge.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === g || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === b || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === p || u.$$typeof === N || u.$$typeof === j || u.$$typeof === M);
  }, ge.typeOf = P, ge;
}
var ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function To() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function P(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === r || C === a || C === s || C === o || C === f || C === g || typeof C == "object" && C !== null && (C.$$typeof === v || C.$$typeof === b || C.$$typeof === i || C.$$typeof === c || C.$$typeof === l || C.$$typeof === p || C.$$typeof === N || C.$$typeof === j || C.$$typeof === M);
    }
    function A(C) {
      if (typeof C == "object" && C !== null) {
        var te = C.$$typeof;
        switch (te) {
          case n:
            var R = C.type;
            switch (R) {
              case d:
              case a:
              case r:
              case s:
              case o:
              case f:
                return R;
              default:
                var K = R && R.$$typeof;
                switch (K) {
                  case c:
                  case l:
                  case v:
                  case b:
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
    var u = d, m = a, x = c, E = i, T = n, z = l, G = r, Q = v, k = b, _ = t, D = s, F = o, O = f, J = !1;
    function ee(C) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(C) || A(C) === d;
    }
    function se(C) {
      return A(C) === a;
    }
    function oe(C) {
      return A(C) === c;
    }
    function B(C) {
      return A(C) === i;
    }
    function Z(C) {
      return typeof C == "object" && C !== null && C.$$typeof === n;
    }
    function U(C) {
      return A(C) === l;
    }
    function X(C) {
      return A(C) === r;
    }
    function S(C) {
      return A(C) === v;
    }
    function I(C) {
      return A(C) === b;
    }
    function y(C) {
      return A(C) === t;
    }
    function L(C) {
      return A(C) === s;
    }
    function H(C) {
      return A(C) === o;
    }
    function Y(C) {
      return A(C) === f;
    }
    ye.AsyncMode = u, ye.ConcurrentMode = m, ye.ContextConsumer = x, ye.ContextProvider = E, ye.Element = T, ye.ForwardRef = z, ye.Fragment = G, ye.Lazy = Q, ye.Memo = k, ye.Portal = _, ye.Profiler = D, ye.StrictMode = F, ye.Suspense = O, ye.isAsyncMode = ee, ye.isConcurrentMode = se, ye.isContextConsumer = oe, ye.isContextProvider = B, ye.isElement = Z, ye.isForwardRef = U, ye.isFragment = X, ye.isLazy = S, ye.isMemo = I, ye.isPortal = y, ye.isProfiler = L, ye.isStrictMode = H, ye.isSuspense = Y, ye.isValidElementType = P, ye.typeOf = A;
  }()), ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = _o() : e.exports = To();
})(Eo);
var $n = qt, Ao = {
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
}, Po = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Io = {
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
Dn[$n.ForwardRef] = Io;
Dn[$n.Memo] = Wr;
function Zn(e) {
  return $n.isMemo(e) ? Wr : Dn[e.$$typeof] || Ao;
}
var Oo = Object.defineProperty, Yo = Object.getOwnPropertyNames, Vn = Object.getOwnPropertySymbols, Lo = Object.getOwnPropertyDescriptor, Ro = Object.getPrototypeOf, Gn = Object.prototype;
function zr(e, n, t) {
  if (typeof n != "string") {
    if (Gn) {
      var r = Ro(n);
      r && r !== Gn && zr(e, r, t);
    }
    var o = Yo(n);
    Vn && (o = o.concat(Vn(n)));
    for (var s = Zn(e), i = Zn(n), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!Po[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = Lo(n, d);
        try {
          Oo(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var No = zr;
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
var Xn = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Qt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !St.typeOf(e);
}, Ot = Object.freeze([]), Ge = Object.freeze({});
function dt(e) {
  return typeof e == "function";
}
function en(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function En(e) {
  return e && typeof e.styledComponentId == "string";
}
var ut = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", _n = typeof window < "u" && "HTMLElement" in window, Ho = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Wo = {}, zo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ze(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Bo.apply(void 0, [zo[e]].concat(t)).trim());
}
var Fo = function() {
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
        (i <<= 1) < 0 && ze(16, "" + t);
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
}(), Pt = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), bt = 1, Dt = function(e) {
  if (Pt.has(e))
    return Pt.get(e);
  for (; Yt.has(bt); )
    bt++;
  var n = bt++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && ze(16, "" + n), Pt.set(e, n), Yt.set(n, e), n;
}, jo = function(e) {
  return Yt.get(e);
}, Zo = function(e, n) {
  n >= bt && (bt = n + 1), Pt.set(e, n), Yt.set(n, e);
}, Vo = "style[" + ut + '][data-styled-version="5.3.8"]', Go = new RegExp("^" + ut + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Xo = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, Uo = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Go);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (Zo(a, d), Xo(e, a, c[3]), e.getTag().insertRules(d, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, Ko = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Br = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(ut))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ut, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = Ko();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, Jo = function() {
  function e(t) {
    var r = this.element = Br(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var d = s[i];
        if (d.ownerNode === o)
          return d;
      }
      ze(17);
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
}(), qo = function() {
  function e(t) {
    var r = this.element = Br(t);
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
}(), Qo = function() {
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
}(), Un = _n, es = { isServer: !_n, useCSSOMInjection: !Ho }, Lt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ge), r === void 0 && (r = {}), this.options = Ye({}, es, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && _n && Un && (Un = !1, function(s) {
      for (var i = document.querySelectorAll(Vo), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(ut) !== "active" && (Uo(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Dt(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Ye({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new Qo(i) : s ? new Jo(i) : new qo(i), new Fo(t)));
    var t, r, o, s, i;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (Dt(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Dt(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(Dt(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, s = "", i = 0; i < o; i++) {
        var c = jo(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = r.getGroup(i);
          if (d && a && d.size) {
            var l = ut + ".g" + i + '[id="' + c + '"]', f = "";
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
}(), ts = /(a)(d)/gi, Kn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function tn(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Kn(n % 52) + t;
  return (Kn(n % 52) + t).replace(ts, "$1-$2");
}
var Ke = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Fr = function(e) {
  return Ke(5381, e);
};
function jr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (dt(t) && !En(t))
      return !1;
  }
  return !0;
}
var ns = Fr("5.3.8"), rs = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && jr(n), this.componentId = t, this.baseHash = Ke(ns, t), this.baseStyle = r, Lt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Qe(this.rules, n, t, r).join(""), c = tn(Ke(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = r(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = Ke(this.baseHash, r.hash), f = "", g = 0; g < a; g++) {
        var b = this.rules[g];
        if (typeof b == "string")
          f += b, process.env.NODE_ENV !== "production" && (l = Ke(l, b + g));
        else if (b) {
          var v = Qe(b, n, t, r), M = Array.isArray(v) ? v.join("") : v;
          l = Ke(l, M + g), f += M;
        }
      }
      if (f) {
        var p = tn(l >>> 0);
        if (!t.hasNameForId(o, p)) {
          var N = r(f, "." + p, void 0, o);
          t.insertRules(o, p, N);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), os = /^\s*\/\/.*$/gm, ss = [":", "[", ".", "#"];
function is(e) {
  var n, t, r, o, s = e === void 0 ? Ge : e, i = s.options, c = i === void 0 ? Ge : i, d = s.plugins, a = d === void 0 ? Ot : d, l = new Mo(c), f = [], g = function(M) {
    function p(N) {
      if (N)
        try {
          M(N + "}");
        } catch {
        }
    }
    return function(N, j, P, A, u, m, x, E, T, z) {
      switch (N) {
        case 1:
          if (T === 0 && j.charCodeAt(0) === 64)
            return M(j + ";"), "";
          break;
        case 2:
          if (E === 0)
            return j + "/*|*/";
          break;
        case 3:
          switch (E) {
            case 102:
            case 112:
              return M(P[0] + j), "";
            default:
              return j + (z === 0 ? "/*|*/" : "");
          }
        case -2:
          j.split("/*|*/}").forEach(p);
      }
    };
  }(function(M) {
    f.push(M);
  }), b = function(M, p, N) {
    return p === 0 && ss.indexOf(N[t.length]) !== -1 || N.match(o) ? M : "." + n;
  };
  function v(M, p, N, j) {
    j === void 0 && (j = "&");
    var P = M.replace(os, ""), A = p && N ? N + " " + p + " { " + P + " }" : P;
    return n = j, t = p, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(N || !p ? "" : p, A);
  }
  return l.use([].concat(a, [function(M, p, N) {
    M === 2 && N.length && N[0].lastIndexOf(t) > 0 && (N[0] = N[0].replace(r, b));
  }, g, function(M) {
    if (M === -2) {
      var p = f;
      return f = [], p;
    }
  }])), v.hash = a.length ? a.reduce(function(M, p) {
    return p.name || ze(15), Ke(M, p.name);
  }, 5381).toString() : "", v;
}
var Zr = qe.createContext();
Zr.Consumer;
var Vr = qe.createContext(), as = (Vr.Consumer, new Lt()), nn = is();
function Gr() {
  return Xe(Zr) || as;
}
function Xr() {
  return Xe(Vr) || nn;
}
var Ur = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = nn);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return ze(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = nn), this.name + n.hash;
  }, e;
}(), cs = /([A-Z])/, ls = /([A-Z])/g, ds = /^ms-/, us = function(e) {
  return "-" + e.toLowerCase();
};
function Jn(e) {
  return cs.test(e) ? e.replace(ls, us).replace(ds, "-ms-") : e;
}
var qn = function(e) {
  return e == null || e === !1 || e === "";
};
function Qe(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = Qe(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (qn(e))
    return "";
  if (En(e))
    return "." + e.styledComponentId;
  if (dt(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var d = e(n);
    return process.env.NODE_ENV !== "production" && St.isElement(d) && console.warn(en(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Qe(d, n, t, r);
  }
  var a;
  return e instanceof Ur ? t ? (e.inject(t, r), e.getName(r)) : e : Qt(e) ? function l(f, g) {
    var b, v, M = [];
    for (var p in f)
      f.hasOwnProperty(p) && !qn(f[p]) && (Array.isArray(f[p]) && f[p].isCss || dt(f[p]) ? M.push(Jn(p) + ":", f[p], ";") : Qt(f[p]) ? M.push.apply(M, l(f[p], p)) : M.push(Jn(p) + ": " + (b = p, (v = f[p]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || b in ko ? String(v).trim() : v + "px") + ";"));
    return g ? [g + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var Qn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ht(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return dt(e) || Qt(e) ? Qn(Qe(Xn(Ot, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Qn(Qe(Xn(e, t)));
}
var er = /invalid hook call/i, Et = /* @__PURE__ */ new Set(), Kr = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (er.test(s))
          o = !1, Et.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          r.apply(void 0, [s].concat(c));
        }
      }, ve(), o && !Et.has(t) && (console.warn(t), Et.add(t));
    } catch (s) {
      er.test(s.message) && Et.delete(t);
    } finally {
      console.error = r;
    }
  }
}, Jr = function(e, n, t) {
  return t === void 0 && (t = Ge), e.theme !== t.theme && e.theme || n || t.theme;
}, fs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, hs = /(^-|-$)/g;
function Ft(e) {
  return e.replace(fs, "-").replace(hs, "");
}
var Tn = function(e) {
  return tn(Fr(e) >>> 0);
};
function _t(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var rn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ps = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ms(e, n, t) {
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
        ps(c) && ms(e, i[c], c);
  }
  return e;
}
var ft = qe.createContext();
ft.Consumer;
function gs(e) {
  var n = Xe(ft), t = Ce(function() {
    return function(r, o) {
      if (!r)
        return ze(14);
      if (dt(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : ze(7);
      }
      return Array.isArray(r) || typeof r != "object" ? ze(8) : o ? Ye({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? qe.createElement(ft.Provider, { value: t }, e.children) : null;
}
var jt = {};
function Qr(e, n, t) {
  var r = En(e), o = !_t(e), s = n.attrs, i = s === void 0 ? Ot : s, c = n.componentId, d = c === void 0 ? function(j, P) {
    var A = typeof j != "string" ? "sc" : Ft(j);
    jt[A] = (jt[A] || 0) + 1;
    var u = A + "-" + Tn("5.3.8" + A + jt[A]);
    return P ? P + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(j) {
    return _t(j) ? "styled." + j : "Styled(" + en(j) + ")";
  }(e) : a, f = n.displayName && n.componentId ? Ft(n.displayName) + "-" + n.componentId : n.componentId || d, g = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, b = n.shouldForwardProp;
  r && e.shouldForwardProp && (b = n.shouldForwardProp ? function(j, P, A) {
    return e.shouldForwardProp(j, P, A) && n.shouldForwardProp(j, P, A);
  } : e.shouldForwardProp);
  var v, M = new rs(t, f, r ? e.componentStyle : void 0), p = M.isStatic && i.length === 0, N = function(j, P) {
    return function(A, u, m, x) {
      var E = A.attrs, T = A.componentStyle, z = A.defaultProps, G = A.foldedComponentIds, Q = A.shouldForwardProp, k = A.styledComponentId, _ = A.target;
      process.env.NODE_ENV !== "production" && Hn(k);
      var D = function(X, S, I) {
        X === void 0 && (X = Ge);
        var y = Ye({}, S, { theme: X }), L = {};
        return I.forEach(function(H) {
          var Y, C, te, R = H;
          for (Y in dt(R) && (R = R(y)), R)
            y[Y] = L[Y] = Y === "className" ? (C = L[Y], te = R[Y], C && te ? C + " " + te : C || te) : R[Y];
        }), [y, L];
      }(Jr(u, Xe(ft), z) || Ge, u, E), F = D[0], O = D[1], J = function(X, S, I, y) {
        var L = Gr(), H = Xr(), Y = S ? X.generateAndInjectStyles(Ge, L, H) : X.generateAndInjectStyles(I, L, H);
        return process.env.NODE_ENV !== "production" && Hn(Y), process.env.NODE_ENV !== "production" && !S && y && y(Y), Y;
      }(T, x, F, process.env.NODE_ENV !== "production" ? A.warnTooManyClasses : void 0), ee = m, se = O.$as || u.$as || O.as || u.as || _, oe = _t(se), B = O !== u ? Ye({}, u, {}, O) : u, Z = {};
      for (var U in B)
        U[0] !== "$" && U !== "as" && (U === "forwardedAs" ? Z.as = B[U] : (Q ? Q(U, Bn, se) : !oe || Bn(U)) && (Z[U] = B[U]));
      return u.style && O.style !== u.style && (Z.style = Ye({}, u.style, {}, O.style)), Z.className = Array.prototype.concat(G, k, J !== k ? J : null, u.className, O.className).filter(Boolean).join(" "), Z.ref = ee, xo(se, Z);
    }(v, j, P, p);
  };
  return N.displayName = l, (v = qe.forwardRef(N)).attrs = g, v.componentStyle = M, v.displayName = l, v.shouldForwardProp = b, v.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ot, v.styledComponentId = f, v.target = r ? e.target : e, v.withComponent = function(j) {
    var P = n.componentId, A = function(m, x) {
      if (m == null)
        return {};
      var E, T, z = {}, G = Object.keys(m);
      for (T = 0; T < G.length; T++)
        E = G[T], x.indexOf(E) >= 0 || (z[E] = m[E]);
      return z;
    }(n, ["componentId"]), u = P && P + "-" + (_t(j) ? j : Ft(en(j)));
    return Qr(j, Ye({}, A, { attrs: g, componentId: u }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = r ? qr({}, e.defaultProps, j) : j;
  } }), process.env.NODE_ENV !== "production" && (Kr(l, f), v.warnTooManyClasses = function(j, P) {
    var A = {}, u = !1;
    return function(m) {
      if (!u && (A[m] = !0, Object.keys(A).length >= 200)) {
        var x = P ? ' with the id of "' + P + '"' : "";
        console.warn("Over 200 classes were generated for component " + j + x + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, A = {};
      }
    };
  }(l, f)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && No(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var on = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Ge), !St.isValidElementType(r))
      return ze(1, String(r));
    var s = function() {
      return t(r, o, Ht.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Ye({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Ye({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Qr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  on[e] = on(e);
});
var ys = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = jr(t), Lt.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(Qe(this.rules, r, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && Lt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function vs(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ht.apply(void 0, [e].concat(t)), s = "sc-global-" + Tn(JSON.stringify(o)), i = new ys(o, s);
  function c(a) {
    var l = Gr(), f = Xr(), g = Xe(ft), b = ve(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && qe.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(b, a, l, g, f), Mn(function() {
      if (!l.server)
        return d(b, a, l, g, f), function() {
          return i.removeStyles(b, l);
        };
    }, [b, a, l, g, f]), null;
  }
  function d(a, l, f, g, b) {
    if (i.isStatic)
      i.renderStyles(a, Wo, f, b);
    else {
      var v = Ye({}, l, { theme: Jr(l, g, c.defaultProps) });
      i.renderStyles(a, v, f, b);
    }
  }
  return process.env.NODE_ENV !== "production" && Kr(s), qe.memo(c);
}
function Wt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ht.apply(void 0, [e].concat(t)).join(""), s = Tn(o);
  return new Ur(s, o);
}
var zt = function() {
  return Xe(ft);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const w = on, xt = "reactSchedulerOutsideWrapper", xs = vs`

  #${xt} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${xt} *,
 #${xt} *:before,
 #${xt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, bs = {
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
}, ws = {
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
}, gt = `
margin: 0;
padding: 0;
`, yt = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
w.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Se = 50, Fe = 24, vt = 16, Je = 40, ht = Je + vt + Fe, pt = 84, he = 56, Oe = 196, Ie = 12, Ae = 50, mt = 24, Ct = 16, sn = 40, Ss = mt + Ct + sn, tr = 24, nr = 52, Le = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter",
    hoursInDay: "400 9px Inter"
  }
}, lt = 3, Cs = 1.6, Ms = 4.5, an = 12, Rt = 24, ks = "reactSchedulerCanvasHeaderWrapper", eo = "reactSchedulerCanvasWrapper", Be = xt, $s = 4, An = 48, Ve = 5, Ds = 40, rr = 8, Pn = Fe / 2 + 2, to = vt / 2 + Fe + 1, or = 2, $e = 60, Pe = 21;
var et = {}, Es = {
  get exports() {
    return et;
  },
  set exports(e) {
    et = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Te, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", g = "quarter", b = "year", v = "date", M = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, N = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, j = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
      var _ = ["th", "st", "nd", "rd"], D = k % 100;
      return "[" + k + (_[(D - 20) % 10] || _[D] || _[0]) + "]";
    } }, P = function(k, _, D) {
      var F = String(k);
      return !F || F.length >= _ ? k : "" + Array(_ + 1 - F.length).join(D) + k;
    }, A = { s: P, z: function(k) {
      var _ = -k.utcOffset(), D = Math.abs(_), F = Math.floor(D / 60), O = D % 60;
      return (_ <= 0 ? "+" : "-") + P(F, 2, "0") + ":" + P(O, 2, "0");
    }, m: function k(_, D) {
      if (_.date() < D.date())
        return -k(D, _);
      var F = 12 * (D.year() - _.year()) + (D.month() - _.month()), O = _.clone().add(F, f), J = D - O < 0, ee = _.clone().add(F + (J ? -1 : 1), f);
      return +(-(F + (D - O) / (J ? O - ee : ee - O)) || 0);
    }, a: function(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
    }, p: function(k) {
      return { M: f, y: b, w: l, d: a, D: v, h: d, m: c, s: i, ms: s, Q: g }[k] || String(k || "").toLowerCase().replace(/s$/, "");
    }, u: function(k) {
      return k === void 0;
    } }, u = "en", m = {};
    m[u] = j;
    var x = function(k) {
      return k instanceof G;
    }, E = function k(_, D, F) {
      var O;
      if (!_)
        return u;
      if (typeof _ == "string") {
        var J = _.toLowerCase();
        m[J] && (O = J), D && (m[J] = D, O = J);
        var ee = _.split("-");
        if (!O && ee.length > 1)
          return k(ee[0]);
      } else {
        var se = _.name;
        m[se] = _, O = se;
      }
      return !F && O && (u = O), O || !F && u;
    }, T = function(k, _) {
      if (x(k))
        return k.clone();
      var D = typeof _ == "object" ? _ : {};
      return D.date = k, D.args = arguments, new G(D);
    }, z = A;
    z.l = E, z.i = x, z.w = function(k, _) {
      return T(k, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var G = function() {
      function k(D) {
        this.$L = E(D.locale, null, !0), this.parse(D);
      }
      var _ = k.prototype;
      return _.parse = function(D) {
        this.$d = function(F) {
          var O = F.date, J = F.utc;
          if (O === null)
            return new Date(NaN);
          if (z.u(O))
            return new Date();
          if (O instanceof Date)
            return new Date(O);
          if (typeof O == "string" && !/Z$/i.test(O)) {
            var ee = O.match(p);
            if (ee) {
              var se = ee[2] - 1 || 0, oe = (ee[7] || "0").substring(0, 3);
              return J ? new Date(Date.UTC(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe)) : new Date(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe);
            }
          }
          return new Date(O);
        }(D), this.$x = D.x || {}, this.init();
      }, _.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, _.$utils = function() {
        return z;
      }, _.isValid = function() {
        return this.$d.toString() !== M;
      }, _.isSame = function(D, F) {
        var O = T(D);
        return this.startOf(F) <= O && O <= this.endOf(F);
      }, _.isAfter = function(D, F) {
        return T(D) < this.startOf(F);
      }, _.isBefore = function(D, F) {
        return this.endOf(F) < T(D);
      }, _.$g = function(D, F, O) {
        return z.u(D) ? this[F] : this.set(O, D);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(D, F) {
        var O = this, J = !!z.u(F) || F, ee = z.p(D), se = function(y, L) {
          var H = z.w(O.$u ? Date.UTC(O.$y, L, y) : new Date(O.$y, L, y), O);
          return J ? H : H.endOf(a);
        }, oe = function(y, L) {
          return z.w(O.toDate()[y].apply(O.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(L)), O);
        }, B = this.$W, Z = this.$M, U = this.$D, X = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case b:
            return J ? se(1, 0) : se(31, 11);
          case f:
            return J ? se(1, Z) : se(0, Z + 1);
          case l:
            var S = this.$locale().weekStart || 0, I = (B < S ? B + 7 : B) - S;
            return se(J ? U - I : U + (6 - I), Z);
          case a:
          case v:
            return oe(X + "Hours", 0);
          case d:
            return oe(X + "Minutes", 1);
          case c:
            return oe(X + "Seconds", 2);
          case i:
            return oe(X + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(D) {
        return this.startOf(D, !1);
      }, _.$set = function(D, F) {
        var O, J = z.p(D), ee = "set" + (this.$u ? "UTC" : ""), se = (O = {}, O[a] = ee + "Date", O[v] = ee + "Date", O[f] = ee + "Month", O[b] = ee + "FullYear", O[d] = ee + "Hours", O[c] = ee + "Minutes", O[i] = ee + "Seconds", O[s] = ee + "Milliseconds", O)[J], oe = J === a ? this.$D + (F - this.$W) : F;
        if (J === f || J === b) {
          var B = this.clone().set(v, 1);
          B.$d[se](oe), B.init(), this.$d = B.set(v, Math.min(this.$D, B.daysInMonth())).$d;
        } else
          se && this.$d[se](oe);
        return this.init(), this;
      }, _.set = function(D, F) {
        return this.clone().$set(D, F);
      }, _.get = function(D) {
        return this[z.p(D)]();
      }, _.add = function(D, F) {
        var O, J = this;
        D = Number(D);
        var ee = z.p(F), se = function(Z) {
          var U = T(J);
          return z.w(U.date(U.date() + Math.round(Z * D)), J);
        };
        if (ee === f)
          return this.set(f, this.$M + D);
        if (ee === b)
          return this.set(b, this.$y + D);
        if (ee === a)
          return se(1);
        if (ee === l)
          return se(7);
        var oe = (O = {}, O[c] = r, O[d] = o, O[i] = t, O)[ee] || 1, B = this.$d.getTime() + D * oe;
        return z.w(B, this);
      }, _.subtract = function(D, F) {
        return this.add(-1 * D, F);
      }, _.format = function(D) {
        var F = this, O = this.$locale();
        if (!this.isValid())
          return O.invalidDate || M;
        var J = D || "YYYY-MM-DDTHH:mm:ssZ", ee = z.z(this), se = this.$H, oe = this.$m, B = this.$M, Z = O.weekdays, U = O.months, X = function(L, H, Y, C) {
          return L && (L[H] || L(F, J)) || Y[H].slice(0, C);
        }, S = function(L) {
          return z.s(se % 12 || 12, L, "0");
        }, I = O.meridiem || function(L, H, Y) {
          var C = L < 12 ? "AM" : "PM";
          return Y ? C.toLowerCase() : C;
        }, y = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: B + 1, MM: z.s(B + 1, 2, "0"), MMM: X(O.monthsShort, B, U, 3), MMMM: X(U, B), D: this.$D, DD: z.s(this.$D, 2, "0"), d: String(this.$W), dd: X(O.weekdaysMin, this.$W, Z, 2), ddd: X(O.weekdaysShort, this.$W, Z, 3), dddd: Z[this.$W], H: String(se), HH: z.s(se, 2, "0"), h: S(1), hh: S(2), a: I(se, oe, !0), A: I(se, oe, !1), m: String(oe), mm: z.s(oe, 2, "0"), s: String(this.$s), ss: z.s(this.$s, 2, "0"), SSS: z.s(this.$ms, 3, "0"), Z: ee };
        return J.replace(N, function(L, H) {
          return H || y[L] || ee.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(D, F, O) {
        var J, ee = z.p(F), se = T(D), oe = (se.utcOffset() - this.utcOffset()) * r, B = this - se, Z = z.m(this, se);
        return Z = (J = {}, J[b] = Z / 12, J[f] = Z, J[g] = Z / 3, J[l] = (B - oe) / 6048e5, J[a] = (B - oe) / 864e5, J[d] = B / o, J[c] = B / r, J[i] = B / t, J)[ee] || B, O ? Z : z.a(Z);
      }, _.daysInMonth = function() {
        return this.endOf(f).$D;
      }, _.$locale = function() {
        return m[this.$L];
      }, _.locale = function(D, F) {
        if (!D)
          return this.$L;
        var O = this.clone(), J = E(D, F, !0);
        return J && (O.$L = J), O;
      }, _.clone = function() {
        return z.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, k;
    }(), Q = G.prototype;
    return T.prototype = Q, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", b], ["$D", v]].forEach(function(k) {
      Q[k[1]] = function(_) {
        return this.$g(_, k[0], k[1]);
      };
    }), T.extend = function(k, _) {
      return k.$i || (k(_, G, T), k.$i = !0), T;
    }, T.locale = E, T.isDayjs = x, T.unix = function(k) {
      return T(1e3 * k);
    }, T.en = m[u], T.Ls = m, T.p = {}, T;
  });
})(Es);
const $ = et, sr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, In = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, no = (e, n) => $(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), ro = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: In(e),
  isCurrentDay: e.isSame($(), "day"),
  year: parseInt(e.format("YYYY"))
});
let Tt = null;
const _s = (e) => {
  if (Tt)
    return Tt;
  const n = document.createElement("canvas");
  n.width = 12, n.height = 12;
  const t = n.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Tt = e.createPattern(n, "repeat"), Tt) : null;
}, On = (e, n, t, r, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, he), c && !s) {
    const d = _s(e);
    d && (e.fillStyle = d, e.fillRect(n, t, r, he));
  }
  e.strokeRect(n + 0.5, t + 0.5, r, he);
}, Yn = (e, n) => {
  let t = 0;
  for (const r of n)
    r <= e && t++;
  return t * Pe;
}, Ts = (e, n, t, r, o, s = []) => {
  for (let i = 0; i < n; i++) {
    const c = Yn(i, s);
    for (let d = 0; d <= t; d++) {
      const a = $(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame($(), "day"), f = a.isBefore($(), "day");
      On(
        e,
        d * Se,
        i * he + c,
        Se,
        In(a),
        l,
        o,
        f
      );
    }
  }
}, As = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, Ps = (e, n, t, r, o, s = []) => {
  let i = 0, c = -(r.dayOfMonth - 1) * Ie;
  const d = n * he + s.length * Pe;
  for (let a = 0; a <= t; a++) {
    const f = $(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame($(), "week");
    for (let g = 0; g < n; g++) {
      const b = Yn(g, s);
      On(e, i, g * he + b, pt, !0, f, o);
    }
    i += pt;
  }
  for (let a = 0; a < t; a++) {
    const l = no(r, a) * Ie;
    As(e, c, d, o), c += l;
  }
}, Is = (e, n, t, r, o, s = []) => {
  const i = $(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let c = 0; c < n; c++) {
    const d = Yn(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = $() : a > Math.floor(t / 2) ? l = $().add(a - Math.floor(t / 2), "hours") : l = $().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame($(), "day") && l.isSame($(), "hour");
      On(
        e,
        a * Ae + Ae / 2 - 0.5,
        c * he + d,
        Ae,
        In(l),
        f,
        o
      );
    }
  }
}, Os = (e, n, t, r) => {
  const o = t * he + n * Pe, s = e.canvas.width, i = o + Pe / 2;
  e.fillStyle = r.mode === "dark" ? r.colors.primary + "80" : r.colors.primary, e.fillRect(0, o, s, Pe), e.strokeStyle = r.colors.border, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, i + 0.5), e.lineTo(s, i + 0.5), e.stroke();
}, Ys = (e, n, t, r, o, s, i = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(eo)) {
    switch (n) {
      case 0:
        Ps(e, t, r, o, s, i);
        break;
      case 1:
        Ts(e, t, r, o, s, i);
        break;
      case 2:
        Is(e, t, r, o, s, i);
        break;
    }
    for (let d = 0; d < i.length; d++)
      Os(e, d, i[d], s);
  }
};
var cn = {}, Ls = {
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
        var g = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), b = this.diff(g, t, !0);
        return b < 0 ? i(this).startOf("week").week() : Math.ceil(b);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(Ls);
const Rs = cn;
var ln = {}, Ns = {
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
})(Ns);
const Hs = ln;
var dn = {}, Ws = {
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
        var l, f, g, b, v = i(this), M = (l = this.isoWeekYear(), f = this.$u, g = (f ? s.utc : s)().year(l).startOf("year"), b = 4 - g.isoWeekday(), g.isoWeekday() > 4 && (b += 7), g.add(b, t));
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
})(Ws);
const zs = dn;
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
const Fs = un;
var fn = {}, js = {
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
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, b = function(u) {
      return u instanceof A;
    }, v = function(u, m, x) {
      return new A(u, x, m.$l);
    }, M = function(u) {
      return r.p(u) + "s";
    }, p = function(u) {
      return u < 0;
    }, N = function(u) {
      return p(u) ? Math.ceil(u) : Math.floor(u);
    }, j = function(u) {
      return Math.abs(u);
    }, P = function(u, m) {
      return u ? p(u) ? { negative: !0, format: "" + j(u) + m } : { negative: !1, format: "" + u + m } : { negative: !1, format: "" };
    }, A = function() {
      function u(x, E, T) {
        var z = this;
        if (this.$d = {}, this.$l = T, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E)
          return v(x * g[M(E)], this);
        if (typeof x == "number")
          return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object")
          return Object.keys(x).forEach(function(k) {
            z.$d[M(k)] = x[k];
          }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var G = x.match(f);
          if (G) {
            var Q = G.slice(2).map(function(k) {
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
        this.$ms = Object.keys(this.$d).reduce(function(E, T) {
          return E + (x.$d[T] || 0) * g[T];
        }, 0);
      }, m.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = N(x / a), x %= a, this.$d.months = N(x / l), x %= l, this.$d.days = N(x / c), x %= c, this.$d.hours = N(x / i), x %= i, this.$d.minutes = N(x / s), x %= s, this.$d.seconds = N(x / o), x %= o, this.$d.milliseconds = x;
      }, m.toISOString = function() {
        var x = P(this.$d.years, "Y"), E = P(this.$d.months, "M"), T = +this.$d.days || 0;
        this.$d.weeks && (T += 7 * this.$d.weeks);
        var z = P(T, "D"), G = P(this.$d.hours, "H"), Q = P(this.$d.minutes, "M"), k = this.$d.seconds || 0;
        this.$d.milliseconds && (k += this.$d.milliseconds / 1e3);
        var _ = P(k, "S"), D = x.negative || E.negative || z.negative || G.negative || Q.negative || _.negative, F = G.format || Q.format || _.format ? "T" : "", O = (D ? "-" : "") + "P" + x.format + E.format + z.format + F + G.format + Q.format + _.format;
        return O === "P" || O === "-P" ? "P0D" : O;
      }, m.toJSON = function() {
        return this.toISOString();
      }, m.format = function(x) {
        var E = x || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return E.replace(d, function(z, G) {
          return G || String(T[z]);
        });
      }, m.as = function(x) {
        return this.$ms / g[M(x)];
      }, m.get = function(x) {
        var E = this.$ms, T = M(x);
        return T === "milliseconds" ? E %= 1e3 : E = T === "weeks" ? N(E / g[T]) : this.$d[T], E === 0 ? 0 : E;
      }, m.add = function(x, E, T) {
        var z;
        return z = E ? x * g[M(E)] : b(x) ? x.$ms : v(x, this).$ms, v(this.$ms + z * (T ? -1 : 1), this);
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
      t = x, r = x().$utils(), x.duration = function(z, G) {
        var Q = x.locale();
        return v(z, { $l: Q }, G);
      }, x.isDuration = b;
      var E = m.prototype.add, T = m.prototype.subtract;
      m.prototype.add = function(z, G) {
        return b(z) && (z = z.asMilliseconds()), E.bind(this)(z, G);
      }, m.prototype.subtract = function(z, G) {
        return b(z) && (z = z.asMilliseconds()), T.bind(this)(z, G);
      };
    };
  });
})(js);
const Zs = fn;
var Vs = "Expected a function", ir = 0 / 0, Gs = "[object Symbol]", Xs = /^\s+|\s+$/g, Us = /^[-+]0x[0-9a-f]+$/i, Ks = /^0b[01]+$/i, Js = /^0o[0-7]+$/i, qs = parseInt, Qs = typeof Te == "object" && Te && Te.Object === Object && Te, ei = typeof self == "object" && self && self.Object === Object && self, ti = Qs || ei || Function("return this")(), ni = Object.prototype, ri = ni.toString, oi = Math.max, si = Math.min, Zt = function() {
  return ti.Date.now();
};
function ii(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Vs);
  n = ar(n) || 0, hn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? oi(ar(t.maxWait) || 0, n) : s, g = "trailing" in t ? !!t.trailing : g);
  function b(m) {
    var x = r, E = o;
    return r = o = void 0, a = m, i = e.apply(E, x), i;
  }
  function v(m) {
    return a = m, c = setTimeout(N, n), l ? b(m) : i;
  }
  function M(m) {
    var x = m - d, E = m - a, T = n - x;
    return f ? si(T, s - E) : T;
  }
  function p(m) {
    var x = m - d, E = m - a;
    return d === void 0 || x >= n || x < 0 || f && E >= s;
  }
  function N() {
    var m = Zt();
    if (p(m))
      return j(m);
    c = setTimeout(N, M(m));
  }
  function j(m) {
    return c = void 0, g && r ? b(m) : (r = o = void 0, i);
  }
  function P() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function A() {
    return c === void 0 ? i : j(Zt());
  }
  function u() {
    var m = Zt(), x = p(m);
    if (r = arguments, o = this, d = m, x) {
      if (c === void 0)
        return v(d);
      if (f)
        return c = setTimeout(N, n), b(d);
    }
    return c === void 0 && (c = setTimeout(N, n)), i;
  }
  return u.cancel = P, u.flush = A, u;
}
function hn(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function ai(e) {
  return !!e && typeof e == "object";
}
function ci(e) {
  return typeof e == "symbol" || ai(e) && ri.call(e) == Gs;
}
function ar(e) {
  if (typeof e == "number")
    return e;
  if (ci(e))
    return ir;
  if (hn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Xs, "");
  var t = Ks.test(e);
  return t || Js.test(e) ? qs(e.slice(2), t ? 2 : 8) : Us.test(e) ? ir : +e;
}
var at = ii;
const It = [0, 1, 2];
var Mt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Mt || {});
const oo = (e) => It.includes(e), ct = (e) => {
  var r;
  const t = (((r = document.getElementById(Be)) == null ? void 0 : r.clientWidth) || 0) - Oe;
  switch (e) {
    case 1:
      return Math.ceil(t / Se) * lt;
    case 2:
      return Math.ceil(t / Ae) * lt;
    default:
      return Math.ceil(t / pt) * lt;
  }
}, pn = (e) => ct(e) / lt, Ln = (e, n) => {
  const t = ct(n) / 2;
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
}, li = (e, n) => {
  const t = Ln(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Rn = () => {
  var t;
  return ((((t = document.getElementById(Be)) == null ? void 0 : t.clientWidth) || 0) - Oe) * lt;
}, so = Nr({
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
$.extend(Rs);
$.extend(Hs);
$.extend(zs);
$.extend(Fs);
$.extend(Zs);
const di = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = $(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = de(d), [g, b] = de($()), [v, M] = de(!1), [p, N] = de(ct(l)), j = It[l] !== It[It.length - 1], P = l !== 0, A = Ce(() => li(g, l), [g, l]), u = Ln(g, l).startDate, m = $(u).dayOfYear(), x = ro(u), E = ve(null), [T, z] = de([{ x: 0, y: 0 }]), G = ce(
    (X, S = "auto") => {
      var y, L, H, Y;
      const I = Rn();
      switch (X) {
        case "back":
          return (y = E.current) == null ? void 0 : y.scrollTo({
            behavior: S,
            left: I / 3
          });
        case "forward":
          return (L = E.current) == null ? void 0 : L.scrollTo({
            behavior: S,
            left: I / 3
          });
        case "middle": {
          const C = I / lt / 4;
          return (H = E.current) == null ? void 0 : H.scrollTo({
            behavior: S,
            left: I / 2 - C
          });
        }
        default:
          return (Y = E.current) == null ? void 0 : Y.scrollTo({
            behavior: S,
            left: I / 2
          });
      }
    },
    []
  ), Q = (X) => {
    z(X);
  }, k = ce(
    (X) => {
      const S = pn(l);
      let I;
      switch (l) {
        case 0:
          I = S * 7;
          break;
        case 1:
          I = S;
          break;
        case 2:
          I = Math.ceil(S / Rt);
          break;
      }
      at(() => {
        switch (X) {
          case "back":
            b((L) => L.subtract(I, "days"));
            break;
          case "forward":
            b((L) => L.add(I, "days"));
            break;
          case "middle":
            b($());
            break;
        }
        s == null || s(A);
      }, 300)();
    },
    [s, A, l]
  );
  xe(() => {
    E.current = document.getElementById(Be), N(ct(l));
  }, [l]), xe(() => {
    const X = () => N(ct(l));
    return window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
  }, [l]), xe(() => {
    s == null || s(A);
  }, [s, A]), xe(() => {
    M(!1);
  }, [o]), xe(() => {
    v || (G("middle"), M(!0), b(o));
  }, [o, v, G]);
  const _ = () => {
    t || (b(
      (X) => l === 2 ? X.add(tr, "hours") : X.add(or, "weeks")
    ), s == null || s(A));
  }, D = ce(() => {
    t || (k("forward"), at(() => {
      G("forward");
    }, 500)());
  }, [t, k, G]), F = () => {
    t || (b(
      (X) => l === 2 ? X.subtract(tr, "hours") : X.subtract(or, "weeks")
    ), s == null || s(A));
  }, O = ce(() => {
    !v || t || (k("back"), at(() => {
      G("back");
    }, 500)());
  }, [v, t, k, G]), J = ce(() => {
    t || (k("middle"), at(() => {
      G("middle", "smooth");
    }, 300)());
  }, [t, k, G]), ee = ce(
    (X) => {
      if (t)
        return;
      const S = $(X).startOf("day");
      S.isValid() && (b(S), s == null || s(A), setTimeout(() => {
        G("middle", "smooth");
      }, 300));
    },
    [t, G, s, A]
  ), se = () => B(l + 1), oe = () => B(l - 1), B = (X) => {
    oo(X) && (f(X), N(ct(X)), s == null || s(A));
  }, Z = () => i == null ? void 0 : i(), { Provider: U } = so;
  return /* @__PURE__ */ h(
    U,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: _,
        handleScrollNext: D,
        handleGoPrev: F,
        handleScrollPrev: O,
        handleGoToday: J,
        goToDate: ee,
        zoomIn: se,
        zoomOut: oe,
        setZoom: B,
        zoom: l,
        isNextZoom: j,
        isPrevZoom: P,
        date: g,
        isLoading: t,
        cols: p,
        startDate: x,
        dayOfYear: m,
        toggleDisplayActiveUnits: Z,
        tilesCoords: T,
        updateTilesCoords: Q,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: n
    }
  );
}, je = () => Xe(so), io = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, ao = (e, n) => {
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
}, ui = 5, cr = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > ui;
}, wt = (e, n, t) => {
  const r = t.getBoundingClientRect();
  return {
    x: e - r.left + t.scrollLeft,
    y: n - r.top + t.scrollTop
  };
}, fi = ({
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
  const a = n ? n.length > 0 && n[0].data.length > 0 && !Array.isArray(n[0].data[0]) ? n.map((I) => ({ ...I, data: [I.data] })) : n : e, {
    enabled: l = !0,
    isDraggable: f,
    resourceOnly: g = !1,
    isValidDrop: b
  } = i, [v, M] = de("idle"), [p, N] = de(null), [j, P] = de({ x: 0, y: 0 }), [A, u] = de({ width: 0, height: 48 }), [m, x] = de(null), [E, T] = de(!0), z = ve({ x: 0, y: 0 }), G = ve({ x: 0, y: 0 }), Q = ve({ x: 0, y: 0 }), k = ve(null), _ = ve(null), D = ve(0), F = ve(null), O = ce(
    (I) => !l || I.draggable === !1 ? !1 : f ? f(I) : !0,
    [l, f]
  ), J = ce(
    (I, y) => {
      const L = ao(y, d), H = Math.floor(L / he);
      let Y;
      switch (t) {
        case 0:
          Y = Ie * 7;
          break;
        case 1:
          Y = Se;
          break;
        case 2:
          Y = Ae;
          break;
        default:
          Y = Se;
      }
      const C = Math.floor(I / Y);
      let te;
      const R = $().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          te = R.add(C * 7, "days").toDate();
          break;
        case 1:
          te = R.add(C, "days").toDate();
          break;
        case 2:
          te = R.add(C, "hours").toDate();
          break;
        default:
          te = R.toDate();
      }
      return { snappedDate: te, snappedResourceIndex: H };
    },
    [t, r, d]
  ), ee = ce(
    (I, y, L, H) => {
      const Y = [], C = y.getTime(), te = L.getTime(), R = a.find((ne) => ne.id === H);
      if (!R)
        return Y;
      const K = [];
      for (const ne of R.data)
        Array.isArray(ne) ? K.push(...ne) : K.push(ne);
      for (const ne of K) {
        if (ne.segmentId === I.segmentId)
          continue;
        const W = ne.startDate.getTime(), ae = ne.endDate.getTime();
        if (C >= W && C < ae || te > W && te <= ae || C <= W && te >= ae) {
          const fe = new Date(Math.max(C, W)), be = new Date(Math.min(te, ae)), De = be.getTime() - fe.getTime();
          Y.push({
            event: ne,
            conflictStart: fe,
            conflictEnd: be,
            overlapDuration: De
          });
        }
      }
      return Y;
    },
    [a]
  ), se = ce(
    (I, y, L, H) => {
      const Y = [], C = y.getTime(), te = L.getTime(), R = $(y).format("YYYY-MM-DD"), K = a.find((W) => W.id === H);
      if (!K)
        return Y;
      const ne = [];
      for (const W of K.data)
        Array.isArray(W) ? ne.push(...W) : ne.push(W);
      for (const W of ne) {
        if (W.segmentId === I.segmentId)
          continue;
        const ae = W.startDate.getTime(), ue = W.endDate.getTime(), fe = $(W.startDate).format("YYYY-MM-DD"), be = $(W.endDate).format("YYYY-MM-DD"), De = $(L).format("YYYY-MM-DD");
        if (!(fe === R || be === R || fe === De || be === De || $(W.startDate).isBefore(y, "day") && $(W.endDate).isAfter(L, "day")) || C >= ae && C < ue || te > ae && te <= ue || C <= ae && te >= ue)
          continue;
        let ie, le;
        ue <= C ? (ie = C - ue, le = "before") : (ie = ae - te, le = "after"), Y.push({
          event: W,
          timeGap: ie,
          position: le
        });
      }
      return Y.sort((W, ae) => W.timeGap - ae.timeGap);
    },
    [a]
  ), oe = ce(
    (I, y, L) => {
      const H = J(y, L);
      let Y, C;
      if (g)
        Y = I.startDate, C = I.endDate;
      else {
        const ue = $(I.endDate).diff(I.startDate);
        Y = H.snappedDate, C = $(Y).add(ue, "milliseconds").toDate();
      }
      let te = 0, R = "", K;
      for (const ue of e) {
        const fe = Math.max(ue.data.length, 1);
        if (H.snappedResourceIndex < te + fe) {
          R = ue.id, K = ue.capacity;
          break;
        }
        te += fe;
      }
      if (!R)
        return null;
      let ne = !0;
      K !== void 0 && I.totalPassengers !== void 0 && (ne = I.totalPassengers <= K);
      const W = ee(I, Y, C, R), ae = W.length === 0 ? se(I, Y, C, R) : [];
      return {
        startDate: Y,
        endDate: C,
        resourceId: R,
        resourceIndex: H.snappedResourceIndex,
        resourceCapacity: K,
        hasCapacity: ne,
        conflicts: W,
        hasConflict: W.length > 0,
        nearbyEvents: ae
      };
    },
    [J, e, g, ee, se]
  ), B = ce(
    (I, y) => {
      if (!s)
        return;
      const L = Date.now();
      if (L - D.current < 100)
        return;
      D.current = L;
      const H = {
        event: I,
        currentStartDate: y.startDate,
        currentEndDate: y.endDate,
        currentResourceId: y.resourceId,
        conflicts: y.conflicts
      };
      s(H);
    },
    [s]
  ), Z = ce(
    (I, y) => {
      if (!O(I) || !c.current)
        return;
      y.preventDefault(), y.stopPropagation();
      const L = y.target.closest('[style*="left"]');
      let H = 0, Y = 0;
      L && L.style.left && L.style.top && (H = parseInt(L.style.left), Y = parseInt(L.style.top));
      const C = wt(
        y.clientX,
        y.clientY,
        c.current
      );
      z.current = { x: H, y: Y }, G.current = { x: y.clientX, y: y.clientY }, Q.current = {
        x: C.x - H,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, F.current = {
        startDate: I.startDate,
        endDate: I.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const K of e) {
        for (const ne of K.data)
          if (ne.some((W) => W.segmentId === I.segmentId)) {
            F.current.resourceId = K.id;
            break;
          }
        if (F.current.resourceId)
          break;
      }
      N(I), M("potential"), P({ x: H, y: Y });
      let te = 100, R = 48;
      if (L) {
        const K = L.getBoundingClientRect();
        te = K.width, R = K.height;
      }
      u({ width: te, height: R });
    },
    [O, c, e, t]
  ), U = ce(
    (I) => {
      if (!c.current)
        return;
      let y = c.current;
      for (; y && y !== document.body; ) {
        const W = window.getComputedStyle(y);
        if (y.scrollHeight > y.clientHeight && (W.overflowY === "auto" || W.overflowY === "scroll" || W.overflow === "auto" || W.overflow === "scroll"))
          break;
        y = y.parentElement;
      }
      (!y || y === document.body) && (y = document.documentElement);
      const L = y.getBoundingClientRect(), H = I.clientY, Y = 50, C = 5, te = H - L.top, R = L.bottom - H;
      let K = !1, ne = 0;
      te < Y && te > 0 ? (K = !0, ne = -C * (1 - te / Y)) : R < Y && R > 0 && (K = !0, ne = C * (1 - R / Y)), K ? (_.current && cancelAnimationFrame(_.current), _.current = requestAnimationFrame(() => {
        y.scrollTop += ne, v === "dragging" && U(I);
      })) : _.current && (cancelAnimationFrame(_.current), _.current = null);
    },
    [c, v]
  ), X = ce(
    (I) => {
      if (v === "idle" || v === "animating" || !p || !c.current)
        return;
      const y = { x: I.clientX, y: I.clientY };
      if (v === "potential")
        if (cr(G.current, y))
          M("dragging");
        else
          return;
      U(I);
      const L = wt(
        I.clientX,
        I.clientY,
        c.current
      );
      k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
        const H = {
          x: L.x - Q.current.x,
          y: L.y - Q.current.y
        };
        P(H);
        const Y = oe(p, L.x, L.y);
        if (Y && b) {
          const C = {
            event: p,
            currentStartDate: Y.startDate,
            currentEndDate: Y.endDate,
            currentResourceId: Y.resourceId,
            conflicts: Y.conflicts
          };
          Y.hasConflict = !b(C);
        }
        if (x(Y), Y) {
          const C = Y.hasCapacity !== !1;
          T(C), B(p, Y);
        }
      });
    },
    [v, p, c, oe, B, b, U]
  ), S = ce(
    async (I) => {
      if (v === "idle" || v === "animating")
        return;
      const y = { x: I.clientX, y: I.clientY };
      if (!cr(G.current, y) || v === "potential") {
        M("idle"), N(null), x(null);
        return;
      }
      if (!p || !m || !F.current) {
        M("idle"), N(null), x(null);
        return;
      }
      if (m.hasCapacity === !1) {
        T(!1), M("animating"), P(z.current), setTimeout(() => {
          M("idle"), N(null), x(null), T(!0);
        }, 300);
        return;
      }
      const H = {
        event: p,
        originalStartDate: F.current.startDate,
        originalEndDate: F.current.endDate,
        originalResourceId: F.current.resourceId,
        newStartDate: m.startDate,
        newEndDate: m.endDate,
        newResourceId: m.resourceId,
        hasConflict: m.hasConflict,
        conflicts: m.conflicts
      };
      let Y = !0;
      if (o)
        try {
          const C = o(H);
          Y = C instanceof Promise ? await C : C;
        } catch {
          Y = !1;
        }
      Y ? (T(!0), M("idle"), N(null), x(null)) : (T(!1), M("animating"), P(z.current), setTimeout(() => {
        M("idle"), N(null), x(null), T(!0);
      }, 300));
    },
    [v, p, m, o, b]
  );
  return xe(() => {
    if (v === "potential" || v === "dragging") {
      const I = (L) => X(L), y = (L) => S(L);
      return document.addEventListener("mousemove", I), document.addEventListener("mouseup", y), () => {
        document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", y);
      };
    } else
      return () => {
      };
  }, [v, X, S]), xe(() => () => {
    k.current && (cancelAnimationFrame(k.current), k.current = null), _.current && (cancelAnimationFrame(_.current), _.current = null);
  }, []), xe(() => {
    (v === "idle" || v === "animating") && (k.current && (cancelAnimationFrame(k.current), k.current = null), _.current && (cancelAnimationFrame(_.current), _.current = null));
  }, [v]), xe(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (M("animating"), P(z.current), setTimeout(() => {
      M("idle"), N(null), x(null);
    }, 300)) : (M("idle"), N(null), x(null)));
  }, [t]), xe(() => {
    if ((v === "dragging" || v === "potential") && p) {
      let I = !1;
      for (const y of e) {
        for (const L of y.data)
          if (L.some((H) => H.segmentId === p.segmentId)) {
            I = !0;
            break;
          }
        if (I)
          break;
      }
      I || (v === "dragging" ? (M("animating"), P(z.current), setTimeout(() => {
        M("idle"), N(null), x(null);
      }, 300)) : (M("idle"), N(null), x(null)));
    }
  }, [e, v, p]), {
    dragState: v,
    draggedEvent: p,
    ghostPosition: j,
    ghostDimensions: A,
    dropTarget: m,
    isValidDrop: E,
    handleDragStart: Z,
    isDraggable: O,
    draggingEventId: (p == null ? void 0 : p.segmentId) || null,
    resourceOnly: g
  };
}, hi = ({
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
  const { enabled: l = !1, isSelectable: f } = i, g = l && !!o, b = ce((y) => {
    let L = 0;
    for (const H of a)
      H <= y && L++;
    return y * he + L * Pe;
  }, [a]), [v, M] = de("idle"), [p, N] = de(null), [j, P] = de(null), [A, u] = de(null), [m, x] = de(!1), [E, T] = de([]), [z, G] = de(!1), Q = ve(null), k = ve(null), _ = ve(null), D = ce(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return Ae;
      default:
        return Se;
    }
  }, [t]), F = ce(
    (y) => {
      const L = D(), H = Math.floor(y / L), Y = $().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return Y.add(H * 7, "days").toDate();
        case 1:
          return Y.add(H, "days").toDate();
        case 2:
          return Y.add(H, "hours").toDate();
        default:
          return Y.toDate();
      }
    },
    [t, r, D]
  ), O = ce(
    (y) => {
      const L = ao(y, a), H = Math.floor(L / he);
      let Y = 0;
      for (const C of e) {
        const te = Math.max(C.data.length, 1);
        if (H < Y + te)
          return {
            resourceId: C.id,
            resourceIndex: H,
            resourceLabel: C.label
          };
        Y += te;
      }
      return null;
    },
    [e, a]
  ), J = ce(
    (y) => {
      const L = D();
      return Math.floor(y / L) * L;
    },
    [D]
  ), ee = ce(
    (y, L, H, Y = []) => {
      const C = [], R = (n || e).find((W) => W.id === y), K = L.getTime(), ne = H.getTime();
      if (R) {
        const W = R.data[0], ae = W && Array.isArray(W) ? R.data.flat() : R.data;
        for (const ue of ae) {
          const fe = new Date(ue.startDate).getTime(), be = new Date(ue.endDate).getTime();
          if (K < be && ne > fe) {
            const De = new Date(Math.max(K, fe)), we = new Date(Math.min(ne, be)), q = we.getTime() - De.getTime();
            C.push({
              event: ue,
              conflictStart: De,
              conflictEnd: we,
              overlapDuration: q
            });
          }
        }
      }
      for (const W of Y) {
        if (W.resourceId !== y)
          continue;
        const ae = W.startDate.getTime(), ue = W.endDate.getTime();
        if (K < ue && ne > ae) {
          const fe = new Date(Math.max(K, ae)), be = new Date(Math.min(ne, ue)), De = be.getTime() - fe.getTime(), we = {
            segmentId: `pending-${W.startDate.getTime()}`,
            reservationId: `pending-${W.startDate.getTime()}`,
            startDate: W.startDate,
            endDate: W.endDate,
            occupancy: 0,
            title: `New Event (${W.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          C.push({
            event: we,
            conflictStart: fe,
            conflictEnd: be,
            overlapDuration: De
          });
        }
      }
      return C;
    },
    [e, n]
  ), se = ce(
    (y) => {
      if (!g || d || !c.current || y.button !== 0)
        return;
      const L = y.target;
      if (L.closest("[data-segment-id]") || L.closest("[data-multi-select-ui]"))
        return;
      const H = wt(y.clientX, y.clientY, c.current), Y = O(H.y);
      if (!Y)
        return;
      Q.current = { x: y.clientX, y: y.clientY }, k.current = Y.resourceIndex;
      const C = J(H.x), te = D(), R = b(Y.resourceIndex);
      N(H), P(H), u({
        x: C,
        y: R,
        width: te,
        height: he
      }), M("selecting");
    },
    [g, d, c, O, J, D, b]
  ), oe = ce(
    (y) => {
      if (v !== "selecting" || !c.current || k.current === null)
        return;
      const L = wt(y.clientX, y.clientY, c.current);
      _.current && cancelAnimationFrame(_.current), _.current = requestAnimationFrame(() => {
        P(L);
        const H = D(), Y = J((p == null ? void 0 : p.x) || 0), C = J(L.x), te = b(k.current), R = Math.min(Y, C), K = Math.max(Y, C) + H;
        u({
          x: R,
          y: te,
          width: K - R,
          height: he
        });
      });
    },
    [v, c, p, D, J, b]
  ), B = ce(
    (y) => {
      if (v !== "selecting")
        return;
      if (!c.current || !p || !Q.current) {
        M("idle"), N(null), P(null), u(null);
        return;
      }
      const L = wt(y.clientX, y.clientY, c.current), H = O(p.y);
      if (!H) {
        M("idle"), N(null), P(null), u(null);
        return;
      }
      const Y = Math.min(p.x, L.x), C = Math.max(p.x, L.x), te = F(Y), R = F(C), K = $(R).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(H.resourceId, te, K)) {
        M("idle"), N(null), P(null), u(null);
        return;
      }
      const ne = ee(
        H.resourceId,
        te,
        K,
        E
      ), W = ne.length > 0, ae = {
        startDate: te,
        endDate: K,
        resourceId: H.resourceId,
        resourceLabel: H.resourceLabel,
        zoomLevel: t,
        hasConflict: W,
        conflicts: W ? ne : void 0
      };
      if (m)
        T((ue) => [...ue, ae]), G(!0);
      else if (o) {
        const ue = o(ae), fe = (be) => {
          be != null && be.continueMultiSelect && (x(!0), T([ae]), G(!0));
        };
        ue instanceof Promise ? ue.then(fe) : fe(ue);
      }
      M("idle"), N(null), P(null), u(null), Q.current = null, k.current = null;
    },
    [
      v,
      c,
      p,
      O,
      F,
      f,
      o,
      t,
      m,
      ee,
      E
    ]
  ), Z = ce(() => {
    if (E.length > 0 && s) {
      G(!1);
      const y = s(E), L = (H) => {
        H != null && H.continueMultiSelect ? G(!0) : (T([]), x(!1), G(!1));
      };
      y instanceof Promise ? y.then(L) : L(y);
      return;
    }
    T([]), x(!1), G(!1);
  }, [E, s]), U = ce(() => {
    T([]), x(!1), G(!1);
  }, []), X = ce((y) => {
    T((L) => {
      const H = L.filter((Y, C) => C !== y);
      return H.length === 0 && (x(!1), G(!1)), H;
    });
  }, []), S = ce(
    (y, L) => {
      T((H) => H.map((Y, C) => {
        if (C !== y)
          return Y;
        const te = { ...Y, ...L }, R = H.filter((ne, W) => W !== y), K = ee(
          te.resourceId,
          te.startDate,
          te.endDate,
          R
        );
        return {
          ...te,
          hasConflict: K.length > 0,
          conflicts: K.length > 0 ? K : void 0
        };
      }));
    },
    [ee]
  ), I = ce(
    (y) => {
      y.key === "Escape" && (v === "selecting" ? (M("idle"), N(null), P(null), u(null), Q.current = null, k.current = null) : m && E.length > 0 && (T([]), x(!1), G(!1)));
    },
    [v, m, E.length]
  );
  return xe(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", oe), document.addEventListener("mouseup", B), document.addEventListener("keydown", I), () => {
        document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", B), document.removeEventListener("keydown", I);
      };
  }, [v, oe, B, I]), xe(() => {
    if (m && E.length > 0)
      return document.addEventListener("keydown", I), () => {
        document.removeEventListener("keydown", I);
      };
  }, [m, E.length, I]), xe(() => () => {
    _.current && (cancelAnimationFrame(_.current), _.current = null);
  }, []), xe(() => {
    d && v === "selecting" && (M("idle"), N(null), P(null), u(null), Q.current = null, k.current = null);
  }, [d, v]), {
    selectionState: v,
    selectionStart: p,
    selectionEnd: j,
    selectionBox: A,
    handleGridMouseDown: se,
    isEnabled: g,
    pendingSelections: E,
    confirmSelections: Z,
    clearSelections: U,
    removeSelection: X,
    updateSelection: S,
    isMultiSelectActive: m,
    hasUnconfirmedSelections: z
  };
}, pi = w.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, mi = w.div`
  position: relative;
`, gi = w.canvas``;
w.canvas``;
const lr = w.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, yi = kn(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: g, separatorRowIndices: b = [] }, v) {
  const M = ve(!1), { handleScrollNext: p, handleScrollPrev: N, date: j, isLoading: P, cols: A, startDate: u } = je(), m = ve(null), x = ve(null), E = ve(null), T = ve(null), [z, G] = de(!1), Q = zt(), {
    dragState: k,
    draggedEvent: _,
    ghostPosition: D,
    ghostDimensions: F,
    dropTarget: O,
    isValidDrop: J,
    handleDragStart: ee,
    isDraggable: se,
    draggingEventId: oe,
    resourceOnly: B
  } = fi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: T,
    separatorRowIndices: b
  });
  xe(() => {
    const W = k === "dragging" || k === "potential";
    G(W), a && a(W);
  }, [k, a]);
  const {
    selectionState: Z,
    selectionBox: U,
    handleGridMouseDown: X,
    pendingSelections: S,
    confirmSelections: I,
    clearSelections: y,
    removeSelection: L,
    updateSelection: H,
    isMultiSelectActive: Y,
    hasUnconfirmedSelections: C
  } = hi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: g,
    gridRef: T,
    isDragging: z,
    separatorRowIndices: b
  }), te = ce((W) => {
    W.preventDefault();
  }, []), R = ce((W) => {
    W.preventDefault();
  }, []), K = b.length * Pe, ne = ce(
    (W) => {
      const ae = Rn(), ue = t * he + 1 + K;
      io(W, ae, ue), Ys(W, n, t, A, u, Q, b);
    },
    [A, u, t, n, Q, b, K]
  );
  return xe(() => {
    if (!m.current)
      return;
    const W = m.current.getContext("2d");
    if (!W)
      return;
    const ae = () => ne(W);
    return window.addEventListener("resize", ae), () => window.removeEventListener("resize", ae);
  }, [ne]), xe(() => {
    const W = m.current;
    if (!W)
      return;
    W.style.letterSpacing = "1px";
    const ae = W.getContext("2d");
    ae && ne(ae);
  }, [j, t, n, ne]), xe(() => {
    if (!x.current)
      return;
    const W = new IntersectionObserver(
      (ae) => {
        ae[0].isIntersecting && !M.current && (M.current = !0, p(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Be) }
    );
    return W.observe(x.current), () => {
      W.disconnect();
    };
  }, [p]), xe(() => {
    if (!E.current)
      return;
    const W = new IntersectionObserver(
      (ae) => {
        ae[0].isIntersecting && !M.current && (M.current = !0, N(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Be),
        rootMargin: `0px 0px 0px -${Oe}px`
      }
    );
    return W.observe(E.current), () => {
      W.disconnect();
    };
  }, [N]), /* @__PURE__ */ V(pi, { id: eo, children: [
    /* @__PURE__ */ V(
      mi,
      {
        ref: (W) => {
          typeof v == "function" ? v(W) : v && (v.current = W), T.current = W;
        },
        onMouseDown: X,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(lr, { position: "left", ref: E }),
          /* @__PURE__ */ h(Sn, { isLoading: P, position: "left" }),
          /* @__PURE__ */ h(
            gi,
            {
              ref: m,
              onDragStart: te,
              onDragOver: R,
              style: { userSelect: k === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(ld, { zoom: n, startDate: u }),
          /* @__PURE__ */ h(
            fl,
            {
              data: r,
              zoom: n,
              onTileClick: s,
              onDragStart: ee,
              isDraggable: se,
              draggingEventId: oe,
              separatorRowIndices: b
            }
          ),
          /* @__PURE__ */ h(lr, { ref: x, position: "right" }),
          /* @__PURE__ */ h(Sn, { isLoading: P, position: "right" }),
          (k === "dragging" || k === "animating") && /* @__PURE__ */ h(
            Wl,
            {
              draggedEvent: _,
              ghostPosition: D,
              ghostDimensions: F,
              dropTarget: O,
              isValidDrop: J,
              dragState: k,
              zoom: n,
              data: r,
              resourceOnly: B,
              separatorRowIndices: b
            }
          ),
          /* @__PURE__ */ h(
            jl,
            {
              selectionBox: U,
              isSelecting: Z === "selecting"
            }
          ),
          Y && S.length > 0 && /* @__PURE__ */ h(
            id,
            {
              selections: S,
              data: r,
              zoom: n,
              startDate: u,
              onRemove: L,
              onUpdate: H,
              separatorRowIndices: b
            }
          )
        ]
      }
    ),
    Y && C && S.length > 0 && /* @__PURE__ */ h(
      Ql,
      {
        selections: S,
        onConfirm: I,
        onClear: y,
        onRemove: L
      }
    )
  ] });
}), co = (e) => {
  const n = $.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, lo = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / $e);
    t += o.hours + s, r += n % $e, r >= $e && (t++, r -= $e);
  }), { hours: t, minutes: r };
}, uo = (e, n) => {
  let t = rr;
  switch (n) {
    case 0:
      t = Ds;
      break;
    case 1:
      t = rr;
      break;
    case 2:
      t = 1;
      break;
  }
  const r = () => {
    let s = t - e.hours - 1, i = $e - e.minutes;
    return i === $e && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: r(),
    overtime: o()
  };
}, vi = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const l = $(a.startDate).isoWeek(), f = $(a.startDate).isoWeekday(), g = $(a.endDate).isoWeek(), b = $(a.endDate).isoWeekday(), { hours: v, minutes: M } = co(a.occupancy);
    if (r === l) {
      const p = (Ve + 1 - f) * v, N = (Ve + 1 - f) * M;
      return { hours: Math.max(0, p), minutes: N };
    } else if (r === g) {
      const p = b > Ve ? Ve * v : b * v, N = b > Ve ? Ve * M : b * M;
      return { hours: p, minutes: N };
    } else if ($(n).isBetween(a.startDate, a.endDate))
      return { hours: Ve * v, minutes: Ve * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = lo(o), { free: c, overtime: d } = uo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, xi = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: g } = co(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: g } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = lo(s), { free: d, overtime: a } = uo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, bi = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const d = $(c.startDate).hour(), a = $(c.endDate).hour(), l = n.hour(), f = $(c.endDate).minute(), g = $(c.startDate).minute();
    d < l && a > l ? t += $e : d === l && a === l && g && f ? t += f ? f - g : $e - g : d === l && a >= l ? t += g ? $e - g : $e : a === l && f && (t += f);
  });
  const r = Math.floor(t / $e), o = t % $e, s = r || o ? 0 : 1, i = r ? 0 : o ? $e - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, wi = (e, n, t, r, o = !1) => {
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
      return xi(s, t, r, o);
    case 2:
      return bi(s, t);
    default:
      return vi(s, t, r);
  }
}, Si = (e, n, t, r, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = pt;
      break;
    case 1:
      c = "days", d = Se;
      break;
    case 2:
      c = "hours", d = Ae;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = $(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / he), g = r.findIndex((N, j, P) => P.slice(0, j + 1).reduce((u, m) => u + m, 0) >= f), b = s === 2 ? (a + 1) * d : a * d, v = (f - 1) * he + he, M = wi(
    o[g],
    g,
    l,
    s,
    i
  ), p = $(e.startDate).isSame($(e.endDate), "day");
  return {
    coords: { x: b, y: v },
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
function Ci(e, n) {
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
function Mi(e) {
  const n = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const r = [...t].sort((l, f) => l - f);
  if (r.length < 2)
    return n;
  const o = Math.min(5, r.length), s = Ci(r, o), i = [];
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
    const g = "__auto_cat_" + f, b = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: g, name: b, minPassengers: l.min, maxPassengers: l.max });
    for (const v of l.values)
      a.set(v, g);
  }), { categories: d, capacityToCategoryId: a };
}
const ki = (e, n, t, r) => {
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
var mn = {}, $i = {
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
})($i);
const Di = mn;
var gn = {}, Ei = {
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
})(Ei);
const _i = gn, Ti = (e) => {
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
$.extend(Di);
$.extend(_i);
const dr = /* @__PURE__ */ new WeakMap(), Ai = (e) => {
  const n = dr.get(e);
  if (n)
    return n;
  const t = [...e].sort((o, s) => {
    const i = $(o.startDate), c = $(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), r = Ti(t);
  return dr.set(e, r), r;
}, Pi = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = Ai(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, Ii = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Oi = (e) => {
  const { recordsThreshold: n } = je(), [t, r] = de(0), [o, s] = de(0), i = ve(null);
  xe(() => {
    i.current = document.getElementById(Be);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = Ce(() => Pi(e), [e]), a = Ce(
    () => ki(e, c, d, n),
    [e, c, n, d]
  ), l = ce(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = ce(() => {
    a[o].length && (r((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), g = ce(() => {
    r(0), s(0);
  }, []), b = t + a[o].length, v = Ce(
    () => d.slice(t, b),
    [b, d, t]
  ), M = Ce(
    () => c.slice(t, b),
    [b, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: v,
    totalRowsPerPage: Ii(a[o]),
    next: l,
    previous: f,
    reset: g
  };
};
var yn = {}, Yi = {
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
})(Yi);
const Li = yn;
var vn = {}, Ri = {
  get exports() {
    return vn;
  },
  set exports(e) {
    vn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
  })(Te, function(t) {
    function r(g) {
      return g && typeof g == "object" && "default" in g ? g : { default: g };
    }
    var o = r(t);
    function s(g) {
      return g % 10 < 5 && g % 10 > 1 && ~~(g / 10) % 10 != 1;
    }
    function i(g, b, v) {
      var M = g + " ";
      switch (v) {
        case "m":
          return b ? "minuta" : "minutę";
        case "mm":
          return M + (s(g) ? "minuty" : "minut");
        case "h":
          return b ? "godzina" : "godzinę";
        case "hh":
          return M + (s(g) ? "godziny" : "godzin");
        case "MM":
          return M + (s(g) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(g) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(g, b) {
      return a.test(b) ? c[g.month()] : d[g.month()];
    };
    l.s = d, l.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(g) {
      return g + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Ri);
const Ni = vn;
var xn = {}, Hi = {
  get exports() {
    return xn;
  },
  set exports(e) {
    xn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
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
})(Hi);
const Wi = xn;
var bn = {}, zi = {
  get exports() {
    return bn;
  },
  set exports(e) {
    bn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
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
})(zi);
const Bi = bn;
var wn = {}, Fi = {
  get exports() {
    return wn;
  },
  set exports(e) {
    wn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
  })(Te, function(t) {
    function r(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = r(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Fi);
const ji = wn, Zi = {
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
}, Vi = {
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
}, Gi = {
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
}, Xi = {
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
}, Ui = {
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
}, Ki = [
  {
    id: "en",
    lang: Gi,
    translateCode: "en-GB",
    dayjsTranslations: Li
  },
  {
    id: "pl",
    lang: Vi,
    translateCode: "pl-PL",
    dayjsTranslations: Ni
  },
  {
    id: "es",
    lang: Zi,
    translateCode: "es-ES",
    dayjsTranslations: ji
  },
  {
    id: "lt",
    lang: Ui,
    translateCode: "lt-LT",
    dayjsTranslations: Bi
  },
  {
    id: "de",
    lang: Xi,
    translateCode: "de-DE",
    dayjsTranslations: Wi
  }
];
class Ji {
  constructor() {
    Nn(this, "locales", Ki);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const Nt = new Ji(), fo = Nr({
  localesData: Nt.getLocales(),
  currentLocale: Nt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), qi = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = de("en"), s = Nt.getLocales(), i = ce(() => {
    const f = s.find((g) => g.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && $.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = de(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  xe(() => {
    t == null || t.forEach((f) => {
      s.find((b) => b.id === f.id) || Nt.addLocales(f);
    });
  }, [s, t]), xe(() => {
    const f = localStorage.getItem("locale"), g = n ?? f ?? "en";
    localStorage.setItem("locale", g), o(g), d(i());
  }, [i, n]);
  const { Provider: l } = fo;
  return /* @__PURE__ */ h(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, tt = () => Xe(fo).currentLocale.lang, Qi = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ea = w.div`
  height: 440px;
  width: 514px;
  position: relative;
`, ta = w.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, na = ({ onTileClick: e }) => {
  const { feelingEmpty: n } = tt();
  return /* @__PURE__ */ V(ea, { onClick: e, children: [
    /* @__PURE__ */ h(Qi, {}),
    /* @__PURE__ */ h(ta, { children: n })
  ] });
}, ra = w.div`
  position: relative;
  display: flex;
`, oa = w.div`
  position: relative;
  margin-left: ${Oe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, sa = w.div`
  width: calc(${({ width: e }) => e}px - ${Oe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Oe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Vt = {
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
    reservationType: Mt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function ia(e, n) {
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
const aa = ({
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
  const [b, v] = de(Vt), [M, p] = de(e), [N, j] = de(!1), [P, A] = de(!1), [u, m] = de(""), [x, E] = de(/* @__PURE__ */ new Set()), {
    zoom: T,
    startDate: z,
    isLoading: G,
    config: { includeTakenHoursOnWeekendsInDayView: Q, showTooltip: k, showThemeToggle: _ }
  } = je(), D = ve(null), F = ve(null), [O, J] = de(124), {
    page: ee,
    projectsPerPerson: se,
    rowsPerItem: oe,
    currentPageNum: B,
    pagesAmount: Z,
    next: U,
    previous: X,
    reset: S
  } = Oi(M), { effectiveCategories: I, effectivePage: y } = Ce(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: ee };
    const q = Mi(ee);
    if (q.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: ee };
    const ie = ee.map((le) => {
      if (le.isSubcontract || le.capacity == null)
        return le;
      const Me = q.capacityToCategoryId.get(le.capacity);
      return Me ? { ...le, categoryId: Me } : le;
    });
    return { effectiveCategories: q.categories, effectivePage: ie };
  }, [t, ee]), L = ce((q) => {
    E((ie) => {
      const le = new Set(ie);
      return le.has(q) ? le.delete(q) : le.add(q), le;
    });
  }, []), H = Ce(() => {
    const q = [], ie = I ? [...I].sort((le, Me) => le.maxPassengers - Me.maxPassengers) : [];
    for (const le of ie)
      y.some((Me) => !Me.isSubcontract && Me.categoryId === le.id) && q.push(le.id);
    return y.some((le) => le.isSubcontract) && q.push("__subcontract__"), q;
  }, [I, y]), Y = ce(() => {
    E(/* @__PURE__ */ new Set());
  }, []), C = ce(() => {
    E(new Set(H));
  }, [H]), {
    visiblePage: te,
    visibleRowsPerItem: R,
    visibleTotalRows: K,
    visibleProjectsPerPerson: ne,
    separatorRowIndices: W
  } = Ce(() => {
    const q = ia(y, I), ie = ((I == null ? void 0 : I.length) ?? 0) > 0, le = /* @__PURE__ */ new Map();
    ee.forEach((Ee, He) => le.set(Ee.id, He));
    const Me = [], ke = [], Re = [], Ne = [];
    let nt = 0;
    for (const Ee of q)
      if (Ee.type === "subcontract" || Ee.type === "category" && ie) {
        const rt = Ee.type === "subcontract" ? "__subcontract__" : Ee.category.id, ot = x.has(rt);
        if (Ne.push(nt), !ot)
          for (const Ue of Ee.items) {
            const kt = le.get(Ue.id) ?? 0, $t = oe[kt];
            Me.push(Ue), ke.push($t), Re.push(se[kt]), nt += $t;
          }
      } else
        for (const rt of Ee.items) {
          const ot = le.get(rt.id) ?? 0, Ue = oe[ot];
          Me.push(rt), ke.push(Ue), Re.push(se[ot]), nt += Ue;
        }
    const Bt = ke.reduce((Ee, He) => Ee + He, 0);
    return {
      visiblePage: Me,
      visibleRowsPerItem: ke,
      visibleTotalRows: Bt,
      visibleProjectsPerPerson: Re,
      separatorRowIndices: Ne
    };
  }, [y, I, ee, x, oe, se]), ae = ve(
    at(
      (q, ie, le, Me, ke, Re) => {
        if (!D.current)
          return;
        const { tile: Ne, segmentId: nt } = be(q);
        if (!nt || !Ne) {
          j(!1), v(Vt);
          return;
        }
        const Bt = fe(nt, ie), Ee = D.current.getBoundingClientRect(), He = Ne.getBoundingClientRect(), rt = { x: q.clientX - Ee.left, y: q.clientY - Ee.top }, ot = {
          x: q.clientX - Ee.left,
          y: q.clientY - Ee.top
        }, Ue = {
          x: He.left - Ee.left,
          y: He.top - Ee.top,
          width: He.width,
          height: He.height
        }, {
          coords: { x: kt, y: $t },
          resourceIndex: po,
          disposition: mo,
          reservationData: go
        } = Si(
          Bt,
          le,
          rt,
          Me,
          ke,
          Re,
          Q
        );
        v({
          coords: { x: kt, y: $t },
          mouseCoords: ot,
          resourceIndex: po,
          disposition: mo,
          reservationData: go,
          tileBounds: Ue
        }), j(!0);
      },
      4
    )
  ), ue = ve(
    at((q, ie) => {
      S(), p(
        q.map((le) => ({
          ...le,
          data: le.data.filter((Me) => {
            const { title: ke, description: Re, subtitle: Ne } = Me;
            return (ke == null ? void 0 : ke.toLowerCase().includes(ie.toLowerCase())) || (Ne == null ? void 0 : Ne.toLowerCase().includes(ie.toLowerCase())) || (Re == null ? void 0 : Re.toLowerCase().includes(ie.toLowerCase()));
          })
        })).filter((le) => le.data.length > 0)
      );
    }, 500)
  ), fe = (q, ie) => {
    if (q)
      return ie.flatMap((le) => le.data).find((le) => le.segmentId === q);
  }, be = (q) => {
    if (!q.target)
      return { tile: null, segmentId: null };
    const ie = q.target.closest("[data-segment-id]");
    return ie ? { tile: ie, segmentId: ie.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, De = (q) => {
    const ie = q.target.value;
    m(ie), ue.current.cancel(), ie ? ue.current(e, ie) : (S(), p(e));
  }, we = ce(() => {
    ae.current.cancel(), j(!1), v(Vt);
  }, []);
  return xe(() => {
    const q = (le) => ae.current(
      le,
      e,
      z,
      R,
      ne,
      T
    ), ie = D.current;
    if (ie)
      return ie.addEventListener("mousemove", q), ie.addEventListener("mouseleave", we), () => {
        ie.removeEventListener("mousemove", q), ie.removeEventListener("mouseleave", we);
      };
  }, [
    ae,
    we,
    ne,
    R,
    z,
    T,
    e
  ]), xe(() => {
    u ? (ue.current.cancel(), ue.current(e, u)) : p(e);
  }, [e, u]), Mn(() => {
    const q = F.current;
    if (!q)
      return;
    const ie = () => J(q.offsetHeight);
    ie();
    const le = new ResizeObserver(ie);
    return le.observe(q), () => le.disconnect();
  }, []), /* @__PURE__ */ V(ra, { children: [
    /* @__PURE__ */ h(
      ic,
      {
        headerHeight: O,
        data: y,
        categories: I,
        pageNum: B,
        pagesAmount: Z,
        rows: oe,
        onLoadNext: U,
        onLoadPrevious: X,
        searchInputValue: u,
        onSearchInputChange: De,
        onItemClick: o,
        collapsedGroups: x,
        onToggleGroup: L,
        allGroupIds: H,
        onExpandAll: Y,
        onCollapseAll: C
      }
    ),
    /* @__PURE__ */ V(oa, { children: [
      /* @__PURE__ */ h(
        Gc,
        {
          ref: F,
          zoom: T,
          topBarWidth: i,
          showThemeToggle: _,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        yi,
        {
          data: te,
          baseData: n || e,
          zoom: T,
          rows: K,
          ref: D,
          onTileClick: r,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: A,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: g,
          separatorRowIndices: W
        }
      ) : /* @__PURE__ */ h(sa, { width: i, children: G ? /* @__PURE__ */ h(Sn, { isLoading: G, position: "left" }) : /* @__PURE__ */ h(na, {}) }),
      k && N && !P && (b == null ? void 0 : b.resourceIndex) > -1 && /* @__PURE__ */ h(El, { tooltipData: b })
    ] })
  ] });
}, ca = w.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.primary};
`, Gt = w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({ $at: e }) => e ?? "start"};
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : e === "center" ? "center" : "flex-start"};
`, la = w.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, ur = w.button`
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
`, da = w.button`
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
`, ua = w.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`, fa = w.div`
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
`, fr = w.button`
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
`, ha = w.label`
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
`, pa = w.button`
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
`, ma = w.span`
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
`, st = ({ children: e, sw: n = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: n, strokeLinecap: "round", strokeLinejoin: "round", children: e }), ga = () => {
  var n, t;
  const e = document.getElementById(Be);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (n = e == null ? void 0 : e.requestFullscreen) == null || n.call(e);
}, ya = () => {
  const { config: e, date: n, zoom: t, handleGoNext: r, handleGoPrev: o, handleGoToday: s, setZoom: i, goToDate: c, toggleDisplayActiveUnits: d } = je(), { filterButtonState: a = -1 } = e, l = () => {
    var f;
    (f = document.querySelector(`#${Be} input[placeholder]`)) == null || f.focus();
  };
  return /* @__PURE__ */ V(ca, { width: 0, children: [
    /* @__PURE__ */ V(Gt, { $at: "start", children: [
      /* @__PURE__ */ h(ua, { children: n.format("MMMM YYYY") }),
      /* @__PURE__ */ V(fa, { children: [
        /* @__PURE__ */ h("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ h("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ h("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      /* @__PURE__ */ V(ha, { children: [
        /* @__PURE__ */ V(st, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (f) => f.target.value && c(f.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ h(Gt, { $at: "center", children: /* @__PURE__ */ V(la, { children: [
      /* @__PURE__ */ h(ur, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ h(st, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
      /* @__PURE__ */ h(da, { onClick: s, children: "Hoy" }),
      /* @__PURE__ */ h(ur, { onClick: r, "aria-label": "Siguiente", children: /* @__PURE__ */ h(st, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
    ] }) }),
    /* @__PURE__ */ V(Gt, { $at: "end", children: [
      /* @__PURE__ */ V(pa, { onClick: l, children: [
        /* @__PURE__ */ V(st, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] }),
      a >= 0 && /* @__PURE__ */ V(fr, { $primary: !!a, onClick: d, children: [
        /* @__PURE__ */ h(st, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(ma, { children: a })
      ] }),
      /* @__PURE__ */ V(fr, { onClick: ga, children: [
        /* @__PURE__ */ h(st, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] })
    ] })
  ] });
}, va = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), xa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), ba = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), wa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Sa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ca = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ma = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), ka = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), $a = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Da = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Ea = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), _a = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Ta = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Aa = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Pa = {
  add: va,
  subtract: xa,
  filter: ba,
  arrowLeft: wa,
  arrowRight: Sa,
  defaultAvatar: Ca,
  calendarWarning: Ma,
  calendarFree: ka,
  arrowDown: Da,
  arrowUp: $a,
  search: Ea,
  close: _a,
  moon: Ta,
  sun: Aa
}, Xt = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = zt(), i = Pa[e];
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
}, Ia = (e, n, t) => ({
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
w.button`
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
  ${({ theme: e, variant: n, disabled: t }) => Ia(e, n, t)}
`;
const Oa = w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Ya = w.div`
  position: relative;
`, La = ({
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
  clickToAddConfig: b
}) => {
  const { goToDate: v, handleGoToday: M, zoomIn: p, zoomOut: N, zoom: j } = je();
  return Hr(
    l,
    () => ({
      goToDate: v,
      goToToday: M,
      setZoom: (P) => {
        if (!oo(P))
          return;
        const A = P - j;
        if (A > 0)
          for (let u = 0; u < A; u++)
            p();
        else
          for (let u = 0; u < Math.abs(A); u++)
            N();
      }
    }),
    [v, M, j, p, N]
  ), /* @__PURE__ */ h(
    aa,
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
      clickToAddConfig: b
    }
  );
}, pd = kn(function({
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
  onEventDrag: b,
  draggableConfig: v,
  onTimeRangeSelect: M,
  onMultiTimeRangeSelect: p,
  clickToAddConfig: N
}, j) {
  var D;
  const P = Ce(
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
  ), A = ve(null), u = ve(null), [m, x] = de((D = A.current) == null ? void 0 : D.clientWidth), E = Ce(() => $(s), [s]), [T, z] = de(P.defaultTheme ?? "light"), G = () => {
    z(T === "light" ? "dark" : "light");
  }, Q = T === "light" ? bs : ws, k = P.theme ? P.theme[Q.mode] : {}, _ = {
    ...Q,
    colors: {
      ...Q.colors,
      ...k
    }
  };
  return Hr(
    j,
    () => ({
      goToDate: (F) => {
        var O;
        return (O = u.current) == null ? void 0 : O.goToDate(F);
      },
      goToToday: () => {
        var F;
        return (F = u.current) == null ? void 0 : F.goToToday();
      },
      setZoom: (F) => {
        var O;
        return (O = u.current) == null ? void 0 : O.setZoom(F);
      }
    }),
    []
  ), xe(() => {
    const F = () => {
      A.current && x(A.current.clientWidth);
    };
    return F(), window.addEventListener("resize", F), () => window.removeEventListener("resize", F);
  }, []), A.current, /* @__PURE__ */ V(_e, { children: [
    /* @__PURE__ */ h(xs, {}),
    /* @__PURE__ */ h(gs, { theme: _, children: /* @__PURE__ */ h(qi, { lang: P.lang, translations: P.translations, children: /* @__PURE__ */ h(
      di,
      {
        data: n,
        isLoading: !!f,
        config: P,
        onRangeChange: i,
        defaultStartDate: E,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: /* @__PURE__ */ h(
          Oa,
          {
            showScroll: !!n.length,
            id: Be,
            ref: A,
            children: /* @__PURE__ */ h(Ya, { children: /* @__PURE__ */ h(
              La,
              {
                data: n,
                baseData: r,
                categories: t,
                onTileClick: c,
                topBarWidth: m ?? 0,
                onItemClick: l,
                toggleTheme: G,
                onEventDrop: g,
                onEventDrag: b,
                draggableConfig: v,
                schedulerRef: u,
                onTimeRangeSelect: M,
                onMultiTimeRangeSelect: p,
                clickToAddConfig: N
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}), Ra = w.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, Na = w.button`
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
`, Ha = w.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Wa = w.p`
  ${gt}
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
  const { loadNext: i, loadPrevious: c } = tt(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(Ra, { intent: e, children: /* @__PURE__ */ V(Na, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ h(Ha, { children: t }),
    /* @__PURE__ */ h(Wa, { children: d })
  ] }) });
}, za = w.div`
  min-width: ${Oe + "px"};
  max-width: ${Oe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Ba = w.div`
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
`, Fa = w.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, ja = w.input`
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
`, Za = w.div`
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
`, Va = w.button`
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
`, Ga = w.div`
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
`, Xa = w.div`
  display: flex;
  align-items: center;
`, Ua = w.div`
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
`, Ka = w.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Ja = w.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, pr = w.p`
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
`, qa = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Qa = () => /* @__PURE__ */ V("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), ec = () => /* @__PURE__ */ V("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), tc = ({ id: e, item: n, rows: t, onItemClick: r, isSubcontract: o }) => /* @__PURE__ */ h(
  Ga,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ V(Xa, { children: [
      /* @__PURE__ */ h(Ua, { $provider: o, children: qa(n.icon) ? /* @__PURE__ */ h(Ka, { src: n.icon, alt: "" }) : o ? /* @__PURE__ */ h(ec, {}) : /* @__PURE__ */ h(Qa, {}) }),
      /* @__PURE__ */ V(Ja, { children: [
        /* @__PURE__ */ h(pr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ h(pr, { children: n.subtitle })
      ] })
    ] })
  }
), nc = w.div`
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
`, rc = w.span`
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
`, oc = w.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, sc = w.div`
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
}) => /* @__PURE__ */ V(nc, { $variant: o, onClick: r, title: e, children: [
  /* @__PURE__ */ h(sc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(rc, { $variant: o, children: e }),
  /* @__PURE__ */ h(oc, { $variant: o, children: n })
] }), ic = ({
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
  allGroupIds: b,
  onExpandAll: v,
  onCollapseAll: M
}) => {
  const [p, N] = de(!1), j = tt(), P = () => N((k) => !k), A = n ? [...n].sort((k, _) => k.maxPassengers - _.maxPassengers) : [], u = A.length > 0, m = b.length > 0, x = m && f.size === b.length;
  m && f.size;
  const E = e.filter((k) => k.isSubcontract), T = j.subcontract ?? "Subcontract", z = (k) => {
    const _ = e.indexOf(k);
    return /* @__PURE__ */ h(
      tc,
      {
        id: k.id,
        item: k.label,
        rows: r[_],
        onItemClick: l,
        isSubcontract: k.isSubcontract
      },
      k.id
    );
  }, G = (k) => {
    const _ = e.filter(
      (O) => !O.isSubcontract && O.categoryId === k.id
    );
    if (_.length === 0)
      return null;
    const D = f.has(k.id), F = k.name;
    return /* @__PURE__ */ V("div", { children: [
      /* @__PURE__ */ h(
        mr,
        {
          label: F,
          count: _.length,
          isCollapsed: D,
          onToggle: () => g(k.id),
          variant: "category"
        }
      ),
      !D && _.map(z)
    ] }, k.id);
  }, Q = e.filter(
    (k) => !k.isSubcontract && (!k.categoryId || !u)
  );
  return /* @__PURE__ */ V(za, { children: [
    /* @__PURE__ */ V(Ba, { $height: t, children: [
      /* @__PURE__ */ V(Fa, { children: [
        /* @__PURE__ */ V(Za, { isFocused: p, children: [
          /* @__PURE__ */ h(
            ja,
            {
              placeholder: j.search,
              value: d,
              onChange: a,
              onFocus: P,
              onBlur: P
            }
          ),
          /* @__PURE__ */ h(Xt, { iconName: "search" })
        ] }),
        m && /* @__PURE__ */ h(
          Va,
          {
            title: x ? "Expand all" : "Collapse all",
            onClick: x ? v : M,
            $allCollapsed: x,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: x ? /* @__PURE__ */ V(_e, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ V(_e, { children: [
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
          icon: /* @__PURE__ */ h(Xt, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    u ? A.map(G) : Q.map(z),
    u && Q.length > 0 && Q.map(z),
    E.length > 0 && /* @__PURE__ */ V(_e, { children: [
      /* @__PURE__ */ h(
        mr,
        {
          label: T,
          count: E.length,
          isCollapsed: f.has("__subcontract__"),
          onToggle: () => g("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !f.has("__subcontract__") && E.map(z)
    ] }),
    /* @__PURE__ */ h(
      hr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(Xt, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, ac = w.div`
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
`, cc = Wt`
from{
    left: -100%;
}
to{
    left: 100%;
}`, lc = w.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${cc} 1s infinite;
`, dc = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ h(ac, { position: n, children: /* @__PURE__ */ h(lc, {}) }) : null, Sn = dc, Ze = (e, n) => {
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
    bottomText: b,
    strokeStyle: v,
    labelBetweenCells: M
  } = e;
  if (t.beginPath(), t.strokeStyle = v ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), M ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const p = r + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(d, p, c);
  }
  if (l && f && g && b) {
    t.fillStyle = f, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = g.font;
    const p = r + s / 2 - t.measureText(g.label).width / 2;
    t.fillStyle = g.color, t.fillText(g.label, p, g.y), t.font = b.font;
    const N = r + s / 2 - t.measureText(b.label).width / 2;
    t.fillStyle = b.color, t.fillText(b.label, N, b.y);
  }
}, Cn = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, uc = (e, n, t, r) => {
  const o = ht - Je / Cs, s = ht - Je / Ms, i = Fe + vt;
  let c = 0;
  for (let d = 0; d < n; d++) {
    const a = ro(
      $(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    ), l = a.isCurrentDay;
    if (Ze(
      {
        ctx: e,
        x: c,
        y: i,
        width: Se,
        height: Je,
        isBottomRow: !0,
        fillStyle: l ? r.colors.today + "26" : a.isBusinessDay ? r.colors.gridBackground : r.colors.primary,
        topText: {
          y: o,
          label: l ? "" : a.dayName.toUpperCase(),
          font: Le.bottomRow.name,
          color: Cn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: l ? "700 10px Inter" : Le.bottomRow.number,
          color: l ? r.colors.today : Cn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            r
          )
        }
      },
      r
    ), l) {
      const b = c + Se / 2, v = o - 13 / 2;
      e.save(), e.fillStyle = r.colors.today, e.beginPath(), e.roundRect ? e.roundRect(b - 30 / 2, v, 30, 13, 5) : e.rect(b - 30 / 2, v, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = "800 8.5px Inter", e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", b, v + 13 / 2 + 0.5), e.restore();
    }
    c += Se;
  }
}, fc = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Ie;
  const s = Fe;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= an && (c = 0);
    const a = no(t, d) * Ie;
    Ze(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: vt,
        textYPos: to,
        label: $().month(c).format("MMMM").toUpperCase(),
        font: Le.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, hc = (e, n, t) => {
  let o = 0, s = 0, i = $(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * Se + Se;
  for (let c = 0; c < an; c++)
    i > an - 1 && (i = 0), s = $(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * Se, Ze(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Fe,
        textYPos: Pn,
        label: $(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${$(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: Le.topRow
      },
      t
    ), o += s, i++;
}, pc = (e, n, t, r) => {
  const o = 7 * Se, s = Fe, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = $(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % nr;
    f <= 0 && (f += nr), l !== 1 && a === 0 && (d = -l * Se + Se), Ze(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: vt,
        textYPos: to,
        label: `${t.toUpperCase()} ${f}`,
        font: Le.middleRow
      },
      r
    ), d += o;
  }
}, mc = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t ? n.colors.currentDay : r ? n.colors.primary : n.colors.secondary;
}, gc = (e, n, t, r, o) => {
  const s = ht - Je / 1.6, i = ht - Je / 4.5, c = Fe + vt;
  let d = 0;
  for (let a = 0; a < n; a++) {
    const l = $(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame($(), "week");
    Ze(
      {
        ctx: e,
        x: d,
        y: c,
        width: pt,
        height: Je,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : mc({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: f ? "700 14px Inter" : Le.bottomRow.name,
          color: f ? o.colors.today : Cn({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: r.toUpperCase(),
          font: Le.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += pt;
  }
}, yc = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (sr(s) - t + 1) * Ie, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = sr(s + d) * Ie), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ie) * Ie), Ze(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Fe,
        textYPos: Pn,
        label: (s + d).toString(),
        font: Le.topRow
      },
      r
    ), c += a, l += a, d++;
}, vc = (e, n, t, r) => {
  const o = Math.floor(n / Rt) + 2, s = Rt * Ae;
  let d = -$(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ae + 0.5 * Ae;
  for (let a = 0; a < o; a++) {
    const l = $(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Ze(
      {
        ctx: e,
        x: d,
        y: mt,
        width: s,
        height: Ct,
        textYPos: mt + Ct / 2 + 2,
        label: l,
        font: Le.bottomRow.number
      },
      r
    ), d += s;
  }
}, xc = (e, n, t, r) => {
  const o = Math.ceil(n / Rt), s = $(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Ae;
  for (let f = 0; f < a; f++) {
    const g = $(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = $(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), M = v.format("MMMM").toUpperCase(), p = v.diff(g, "hour") + 1, N = f === 0 ? p * Ae : n * Ae;
    Ze(
      {
        ctx: e,
        x: l,
        y: 0,
        width: N,
        height: mt,
        textYPos: Pn,
        label: M,
        font: Le.topRow
      },
      r
    ), l += N;
  }
}, bc = (e, n, t, r) => {
  let o = 0;
  const s = mt + Ct, i = $(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Ae;
  for (let d = 0; d < n; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    Ze(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: sn,
        label: a,
        font: Le.bottomRow.hoursInDay,
        textYPos: mt + Ct + sn / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += Ae;
  }
}, wc = (e, n, t, r, o, s, i) => {
  switch (n) {
    case 0:
      yc(e, r, s, i), fc(e, t, r, i), gc(e, t, r, o, i);
      break;
    case 1:
      hc(e, r, i), pc(e, r, o, i), uc(e, t, r, i);
      break;
    case 2:
      xc(e, t, r, i), vc(e, t, r, i), bc(e, t, r, i);
      break;
  }
}, Sc = w.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, Cc = w.div`
  position: sticky;
  left: ${Oe}px;
  width: calc(${({ $width: e }) => e}px - ${Oe}px);
  z-index: 3;
`, Mc = w.div`
  height: ${ht}px;
  display: block;
`, kc = w.canvas``, $c = {
  transfer: /* @__PURE__ */ V(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ V(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ V(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ V(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ V(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ V(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ h("path", { d: "M12 7.5V12l3 2" })
  ] })
}, We = ({
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
    children: $c[e]
  }
), Dc = w.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, gr = w.span`
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
`, At = w.span`
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
`, Ec = w.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: #b4791e;
  background: #fbf1de;
  border: 1px solid #e9d3a6;
  padding: 1px 5px;
  border-radius: 5px;
`, _c = w.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, Tc = w.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, Ac = w.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, Pc = w.span`
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
`, Ic = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], Oc = () => /* @__PURE__ */ V(Dc, { children: [
  /* @__PURE__ */ h(gr, { children: "Leyenda" }),
  /* @__PURE__ */ V(At, { children: [
    /* @__PURE__ */ h(We, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ V(At, { children: [
    /* @__PURE__ */ h(We, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ V(At, { children: [
    /* @__PURE__ */ h(We, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ V(At, { children: [
    /* @__PURE__ */ h(Ec, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(_c, {}),
  /* @__PURE__ */ V(gr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Ic.map((e) => /* @__PURE__ */ V(Tc, { children: [
    /* @__PURE__ */ h(Ac, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(Pc, { style: { color: e.color }, children: /* @__PURE__ */ h(We, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), Yc = w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 16px 11px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
`, Lc = w.div`
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Rc = w.div`
  position: relative;
  flex: 1;
  height: 46px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 9px;
  overflow: hidden;
  cursor: pointer;
`, Nc = w.div`
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
`, Hc = w.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, Wc = w.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, zc = w.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({ $sev: e }) => e === 2 ? "#c6483d" : e === 1 ? "#d98a22" : "#93b1a6"};
`, Bc = w.div`
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
`, Fc = w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, jc = w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, Zc = w.div`
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
`, Ut = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"], Vc = () => {
  const { date: e, zoom: n, data: t, goToDate: r } = je(), o = ve(null), [s, i] = de(null), c = e.year(), d = Ce(() => $(new Date(c, 0, 1)), [c]), a = Ce(
    () => $(new Date(c + 1, 0, 1)).diff(d, "day"),
    [c, d]
  ), l = (j) => j.diff(d, "day") / a * 100, f = Ce(() => {
    const j = Math.ceil(a / 7), P = new Array(j).fill(0), A = new Array(j).fill(0);
    for (const m of t ?? [])
      for (const x of m.data ?? []) {
        const E = $(x.startDate);
        if (E.year() !== c)
          continue;
        const T = Math.floor(E.diff(d, "day") / 7);
        if (T < 0 || T >= j)
          continue;
        P[T] += 1;
        const z = x.readiness === "sin_chofer" ? 2 : x.readiness === "sin_avisar" ? 1 : 0;
        z > A[T] && (A[T] = z);
      }
    const u = Math.max(1, ...P);
    return P.map((m, x) => ({ h: m / u * 100, sev: A[x] }));
  }, [t, c, d, a]), g = $(), b = g.year() === c ? l(g) : null, v = n === 1 ? pn(1) / 2 : n === 0 ? pn(0) * 7 / 2 : 0.5, M = Math.max(0, l(e.subtract(v, "day"))), p = Math.min(100, l(e.add(v, "day"))) - M, N = (j) => {
    var u;
    const P = (u = o.current) == null ? void 0 : u.getBoundingClientRect();
    if (!P)
      return null;
    const A = Math.min(1, Math.max(0, (j - P.left) / P.width));
    return { f: A, d: d.add(Math.round(A * a), "day") };
  };
  return /* @__PURE__ */ V(Yc, { children: [
    /* @__PURE__ */ V(Lc, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ V(
      Rc,
      {
        ref: o,
        onClick: (j) => {
          const P = N(j.clientX);
          P && r(P.d.toDate());
        },
        onMouseMove: (j) => {
          const P = N(j.clientX);
          P && i({ left: P.f * 100, label: `${P.d.date()} ${Ut[P.d.month()]}` });
        },
        onMouseLeave: () => i(null),
        children: [
          /* @__PURE__ */ h(Nc, { children: Ut.map((j, P) => /* @__PURE__ */ h("span", { style: { left: `${l($(new Date(c, P, 1)))}%` }, children: j }, j)) }),
          Ut.map(
            (j, P) => P === 0 ? null : /* @__PURE__ */ h(Hc, { style: { left: `${l($(new Date(c, P, 1)))}%` } }, j)
          ),
          /* @__PURE__ */ h(Wc, { children: f.map((j, P) => /* @__PURE__ */ h(zc, { $sev: j.sev, style: { height: `${j.h}%` } }, P)) }),
          /* @__PURE__ */ h(Fc, { style: { left: `${M}%`, width: `${p}%` } }),
          b !== null && /* @__PURE__ */ h(Bc, { style: { left: `${b}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          s && /* @__PURE__ */ V(_e, { children: [
            /* @__PURE__ */ h(jc, { style: { left: `${s.left}%` } }),
            /* @__PURE__ */ h(Zc, { style: { left: `${s.left}%` }, children: s.label })
          ] })
        ]
      }
    )
  ] });
}, Gc = kn(function({ zoom: n, topBarWidth: t, showThemeToggle: r, toggleTheme: o }, s) {
  const { week: i } = tt(), { date: c, cols: d, dayOfYear: a, startDate: l, config: f } = je(), g = ve(null), b = zt(), v = ce(
    (M) => {
      const p = Rn(), j = (n === 2 ? Ss : ht) + 1;
      io(M, p, j), wc(M, n, d, l, i, a, b);
    },
    [d, a, l, i, n, b]
  );
  return xe(() => {
    if (!g.current)
      return;
    const M = g.current.getContext("2d");
    if (!M)
      return;
    const p = () => v(M);
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [v]), xe(() => {
    const M = g.current;
    if (!M)
      return;
    M.style.letterSpacing = "1px";
    const p = M.getContext("2d");
    p && v(p);
  }, [c, n, v]), /* @__PURE__ */ V(Sc, { ref: s, children: [
    (f.showTopbar !== !1 || f.showLegend !== !1 || f.showOverview !== !1) && /* @__PURE__ */ V(Cc, { $width: t, children: [
      f.showTopbar !== !1 && /* @__PURE__ */ h(ya, { width: t, showThemeToggle: r, toggleTheme: o }),
      f.showLegend !== !1 && /* @__PURE__ */ h(Oc, {}),
      f.showOverview !== !1 && /* @__PURE__ */ h(Vc, {})
    ] }),
    /* @__PURE__ */ h(Mc, { id: ks, children: /* @__PURE__ */ h(kc, { ref: g }) })
  ] });
}), Xc = (e, n, t) => {
  let r;
  switch (t) {
    case 0:
      r = Ie;
      break;
    case 2:
      r = Ae;
      break;
    default:
      r = Se;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = n.startDate.startOf("day"), d = n.endDate.startOf("day"), a = () => {
    let l;
    switch (t) {
      case 2:
        l = (e.startDate.diff(n.startDate, "minute") / $e + 1) * r - r / 2;
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
          e.endDate.diff(e.startDate, "minute") / $e * r,
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
          e.endDate.diff(n.startDate, "minute") / $e * r + 0.5 * r,
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
          n.endDate.diff(e.startDate, "minute") / $e * r,
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
          n.endDate.diff(n.startDate, "minute") / $e * r,
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
}, Uc = (e, n, t, r, o, s) => {
  const i = e * he + $s, c = n.hour(), d = t.hour();
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
    ...Xc(
      { startDate: a, endDate: l },
      { startDate: f, endDate: g },
      s
    ),
    y: i
  };
}, ho = (e) => {
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
w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
w.p`
  ${gt}
  ${yt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const Kc = w.button`
  ${gt}
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
`, Jc = w.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`, qc = w.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, yr = w.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Qc = w.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, el = w.span`
  ${yt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, tl = w.span`
  ${yt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, nl = w.span`
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
`, rl = w.div`
  ${yt}
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
`, vr = w.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, xr = w.span`
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
`, br = w.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, ol = w.div`
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
`, wr = w.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, sl = 34, il = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, al = "#3E8E5A", cl = "#D98A22", ll = ({
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
  const { date: a } = je(), l = Ln(a, t), { y: f, x: g, width: b } = Uc(
    e,
    l.startDate,
    l.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: v } = zt(), M = ve(null), p = $(n.startDate).isSame($(n.endDate), "day"), N = n.eventType === Mt.Tour, j = n.eventType === Mt.Transfer, P = p && (N || j), A = (G) => {
    M.current = { x: G.clientX, y: G.clientY }, c && s && (G.preventDefault(), s(n, G));
  }, u = (G) => {
    if (M.current) {
      const Q = Math.abs(G.clientX - M.current.x), k = Math.abs(G.clientY - M.current.y);
      Math.sqrt(Q * Q + k * k) <= 5 && (o == null || o(n)), M.current = null;
    } else
      o == null || o(n);
  }, m = {
    left: `${g}px`,
    top: `${f + d}px`,
    backgroundColor: `${n.bgColor ?? v.defaultTile}`,
    width: `${b}px`,
    color: ho(n.bgColor ?? "")
  }, x = !r && n.readiness ? il[n.readiness] : null, E = r && n.subcontractConfirmed === !1, T = r ? E ? cl : al : x == null ? void 0 : x.stripe, z = (G) => /* @__PURE__ */ V(
    Kc,
    {
      "data-segment-id": n.segmentId,
      style: m,
      onClick: u,
      onMouseDown: A,
      onDragStart: (Q) => Q.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: E,
      children: [
        T && /* @__PURE__ */ h(Jc, { style: { background: T } }),
        G
      ]
    }
  );
  return z(
    P ? /* @__PURE__ */ V(_e, { children: [
      (r || x) && /* @__PURE__ */ h(vr, { $sm: !0, children: r ? /* @__PURE__ */ h(br, { children: "SUB" }) : x && /* @__PURE__ */ h(xr, { $sm: !0, style: { color: x.color }, children: /* @__PURE__ */ h(We, { name: x.icon, strokeWidth: x.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ V(ol, { children: [
        /* @__PURE__ */ h(We, { name: j ? "transfer" : "sun", strokeWidth: 2.4 }),
        b >= sl && /* @__PURE__ */ V(_e, { children: [
          /* @__PURE__ */ h(wr, { children: $(n.startDate).format("HH:mm") }),
          !j && /* @__PURE__ */ h(wr, { $end: !0, children: $(n.endDate).format("HH:mm") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ V(_e, { children: [
      /* @__PURE__ */ h(vr, { children: r ? /* @__PURE__ */ h(br, { children: "SUB" }) : x && /* @__PURE__ */ h(xr, { style: { color: x.color }, children: /* @__PURE__ */ h(We, { name: x.icon, strokeWidth: x.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ V(qc, { children: [
        /* @__PURE__ */ V(yr, { $pad: !0, children: [
          /* @__PURE__ */ h(Qc, { children: /* @__PURE__ */ h(We, { name: j ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(el, { children: n.title })
        ] }),
        /* @__PURE__ */ V(yr, { children: [
          n.bookingNumber && /* @__PURE__ */ h(nl, { children: n.bookingNumber }),
          n.subtitle && /* @__PURE__ */ h(tl, { children: n.subtitle })
        ] }),
        n.driver && /* @__PURE__ */ V(rl, { children: [
          /* @__PURE__ */ h(We, { name: "person" }),
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
}, dl = w.div`
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
`, ul = ({
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
          /* @__PURE__ */ h(dl, { style: { top: `${d * he + f}px` }, children: "Disponible" }, `dispo-${a.id}`)
        ];
      }
      return a.data.map(
        (f, g) => f.map((b) => {
          const v = s === b.segmentId, M = o ? o(b) : !1, p = g + d, N = Sr(p, i);
          return /* @__PURE__ */ h(
            ll,
            {
              row: p,
              data: b,
              zoom: n,
              isSubcontract: a.isSubcontract,
              onTileClick: t,
              onDragStart: r,
              isDragging: v,
              isDraggable: M,
              yOffset: N
            },
            b.segmentId
          );
        })
      );
    }).flat(2);
  }, [e, t, n, r, o, s, i]);
  return /* @__PURE__ */ h(_e, { children: c() });
}, fl = ul;
w.div`
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
w.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
w.label`
  font-size: 14px;
`;
w.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
w.input`
  height: 18px;
  width: 18px;
`;
w.button`
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
w.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const hl = w.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, pl = w.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, ml = w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, gl = w.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, yl = w.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, vl = w.div`
  ${gt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, xl = w.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, bl = w.div`
  padding: 10px 12px;
`, wl = w.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Cr = w.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Mr = w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, kr = w.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, $r = w.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Dr = w.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Sl = w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Cl = w.div``, Ml = w.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, kl = w.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, $l = w.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Er = w.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, _r = w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Tr = w.div`
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
w.div``;
w.span``;
w.span``;
w.div``;
w.div``;
w.span``;
w.span``;
w.div``;
w.div``;
w.span``;
w.span``;
w.div``;
w.div``;
w.div``;
w.span``;
w.div``;
w.div``;
w.div``;
w.div``;
w.p``;
w.span``;
const Dl = {
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
}, El = ({ tooltipData: e }) => {
  const { mouseCoords: n, reservationData: t } = e, r = ve(null), [o, s] = de("below"), i = tt(), c = { ...Dl, ...i.tooltip };
  Mn(() => {
    if (!r.current || !n)
      return;
    const b = r.current, { width: v, height: M } = b.getBoundingClientRect(), p = b.parentElement;
    if (!p)
      return;
    const N = p.getBoundingClientRect(), j = 12, P = 4, A = N.height - n.y, u = N.width - n.x;
    let m = n.x + j, x = n.y + j, E = "below";
    u < v + j && (m = n.x - v - j), A < M + j && (x = n.y - M - j, E = "above"), m = Math.max(P, Math.min(m, N.width - v - P)), x = Math.max(P, Math.min(x, N.height - M - P)), s(E), b.style.left = `${m}px`, b.style.top = `${x}px`;
  }, [n]);
  const d = t.reservationType === Mt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, g = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ V(hl, { ref: r, $position: o, children: [
    /* @__PURE__ */ V(pl, { children: [
      /* @__PURE__ */ V(ml, { children: [
        /* @__PURE__ */ h(gl, { children: t.bookingNumber }),
        /* @__PURE__ */ h(yl, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ h(vl, { children: t.eventName }),
      t.client && /* @__PURE__ */ h(xl, { children: t.client })
    ] }),
    /* @__PURE__ */ V(bl, { children: [
      /* @__PURE__ */ V(wl, { children: [
        /* @__PURE__ */ V(Cr, { children: [
          /* @__PURE__ */ h(Mr, { children: c.startDate }),
          /* @__PURE__ */ V(kr, { children: [
            /* @__PURE__ */ h($r, { children: t.startDate }),
            " ",
            /* @__PURE__ */ h(Dr, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ V(Cr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Mr, { children: c.endDate }),
          /* @__PURE__ */ V(kr, { children: [
            /* @__PURE__ */ h($r, { children: t.endDate }),
            " ",
            /* @__PURE__ */ h(Dr, { children: t.endTime })
          ] })
        ] })
      ] }),
      g.length > 0 && /* @__PURE__ */ h(Sl, { children: g.map((b, v) => /* @__PURE__ */ V(Cl, { children: [
        /* @__PURE__ */ h(Ml, { children: b.label }),
        /* @__PURE__ */ h(kl, { children: b.value })
      ] }, v)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ V($l, { children: [
        t.serviceNotes && /* @__PURE__ */ V(Er, { children: [
          /* @__PURE__ */ h(_r, { children: c.serviceNotes }),
          /* @__PURE__ */ h(Tr, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ V(Er, { children: [
          /* @__PURE__ */ h(_r, { children: c.reservationNotes }),
          /* @__PURE__ */ h(Tr, { children: t.reservationNotes })
        ] })
      ] })
    ] })
  ] });
};
w.div`
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
w.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`;
w.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`;
const _l = w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Tl = w.div`
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
`, Al = w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Ar = w.p`
  ${gt}
  ${yt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Pl = w.p`
  ${gt}
  ${yt}
`, Il = w.div`
  position: sticky;
  left: ${Oe + 16}px;
  overflow: hidden;
`, Ol = w.div`
  position: absolute;
  height: ${An}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Yl = w.div`
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
`, Ll = w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Rl = w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Nl = w.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Pr = w.div`
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
`, Ir = w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Or = w.div`
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
`, Yr = w.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, Kt = w.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, Jt = w.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, it = w.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Lr = w.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Hl = ({
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
  const a = tt(), l = (A) => {
    let u = 0;
    for (const m of d)
      m <= A && u++;
    return A * he + u * Pe;
  }, [f, g] = de(null), [b, v] = de(0), M = ce((A = 400, u = 300) => {
    const x = t.width, E = 48, T = document.getElementById("react-scheduler");
    if (!T)
      return {
        x: n.x + x + 16,
        y: n.y
      };
    const z = T.scrollLeft, G = T.scrollTop, Q = T.clientWidth, k = T.clientHeight, _ = n.x - z, D = n.y - G, F = {
      left: Oe + 16,
      // Avoid left column
      right: Q - 16,
      top: 16,
      bottom: k - 16
    }, O = F.right - (_ + x), J = _ - F.left, ee = F.bottom - (D + E), se = D - F.top;
    let oe, B;
    return O >= A + 16 ? oe = _ + x + 16 : J >= A + 16 ? oe = _ - A - 16 : O >= J ? (oe = _ + x + 16, oe + A > F.right && (oe = F.right - A)) : (oe = _ - A - 16, oe < F.left && (oe = F.left)), ee >= u + 16 ? B = D + E + 16 : se >= u + 16 ? B = D - u - 16 : ee >= se ? (B = D + E + 16, B + u > F.bottom && (B = F.bottom - u)) : (B = D - u - 16, B < F.top && (B = F.top)), oe = Math.max(F.left, Math.min(oe, F.right - A)), B = Math.max(F.top, Math.min(B, F.bottom - u)), {
      x: oe + z,
      y: B + G
    };
  }, [n.x, n.y, t.width]);
  xe(() => {
    s === "dragging" && e && b === 0 ? v(n.x) : s === "idle" && v(0);
  }, [s, e, n.x, b]), xe(() => {
    g(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const p = Ce(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const A = [];
    let u = 0;
    for (const m of i) {
      const x = Math.max(m.data.length, 1);
      if (m.capacity !== void 0 && e.totalPassengers > m.capacity)
        for (let E = 0; E < x; E++)
          A.push(u + E);
      u += x;
    }
    return A;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const N = s === "animating", j = ho(e.bgColor ?? ""), P = () => {
    if (!r)
      return "";
    const A = $(r.startDate).format("MMM D, HH:mm"), u = $(r.endDate).format("HH:mm");
    return `${A} - ${u}`;
  };
  return /* @__PURE__ */ V(_l, { children: [
    p.map((A) => /* @__PURE__ */ h(
      Rl,
      {
        style: {
          top: `${l(A)}px`,
          height: `${he}px`
        }
      },
      A
    )),
    r && s === "dragging" && /* @__PURE__ */ h(
      Ll,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${he}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ V(_e, { children: [
      /* @__PURE__ */ h(
        Ol,
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
        Yl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (he - 48) / 2}px`
          },
          children: P()
        }
      )
    ] }),
    r && s === "dragging" && c && /* @__PURE__ */ h(
      Nl,
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
      const A = M(400, 300);
      return /* @__PURE__ */ V(
        Pr,
        {
          style: {
            left: `${A.x}px`,
            top: `${A.y}px`
          },
          children: [
            /* @__PURE__ */ V(Ir, { children: [
              /* @__PURE__ */ h(Or, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Yr, { children: r.conflicts.map((u, m) => {
              const x = $(r.startDate).format("YYYY-MM-DD"), E = $(r.endDate).format("YYYY-MM-DD"), T = $(u.event.startDate).format("YYYY-MM-DD"), z = $(u.event.endDate).format("YYYY-MM-DD"), G = $(u.conflictStart).format("YYYY-MM-DD"), Q = $(u.conflictEnd).format("YYYY-MM-DD"), k = x !== E, _ = T !== z, D = G !== Q, F = k ? $(r.startDate).format("MMM D, h:mm A") : $(r.startDate).format("h:mm A"), O = k ? $(r.endDate).format("MMM D, h:mm A") : $(r.endDate).format("h:mm A"), J = _ ? $(u.event.startDate).format("MMM D, h:mm A") : $(u.event.startDate).format("h:mm A"), ee = _ ? $(u.event.endDate).format("MMM D, h:mm A") : $(u.event.endDate).format("h:mm A"), se = D ? $(u.conflictStart).format("MMM D, h:mm A") : $(u.conflictStart).format("h:mm A"), oe = D ? $(u.conflictEnd).format("MMM D, h:mm A") : $(u.conflictEnd).format("h:mm A"), B = D ? "" : $(u.conflictStart).format("MMM D"), Z = r.startDate.getTime(), U = r.endDate.getTime(), X = u.event.startDate.getTime(), S = u.event.endDate.getTime(), I = Z >= X && Z < S, y = U > X && U <= S, L = Z <= X && U >= S, H = X <= Z && S >= U;
              let Y = !1, C = !1, te = !1, R = !1, K = "";
              return L || H ? (Y = !0, C = !0, te = !0, R = !0, K = `⚠️ ${a.conflicts.changeBoth}`) : I && y ? (Y = !0, C = !0, te = !0, R = !0, K = `⚠️ ${a.conflicts.changeBoth}`) : I ? (Y = !0, R = !0, K = `⚠️ ${a.conflicts.changeStart}`) : y && (C = !0, te = !0, K = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ V(Kt, { children: [
                /* @__PURE__ */ V(Jt, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ V(it, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  Y ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: F }) : F,
                  " ",
                  a.conflicts.to,
                  " ",
                  C ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: O }) : O
                ] }),
                /* @__PURE__ */ V(it, { children: [
                  /* @__PURE__ */ h("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  te ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: J }) : J,
                  " ",
                  a.conflicts.to,
                  " ",
                  R ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ee }) : ee
                ] }),
                /* @__PURE__ */ V(Lr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  B && `${B}, `,
                  se,
                  " - ",
                  oe
                ] }),
                K && /* @__PURE__ */ h(it, { style: {
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
      const A = M(400, 400);
      return /* @__PURE__ */ V(
        Pr,
        {
          style: {
            left: `${A.x}px`,
            top: `${A.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ V(Ir, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Or, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ V(Yr, { children: [
              (() => {
                const u = r.nearbyEvents.some((T) => T.position === "before"), m = r.nearbyEvents.some((T) => T.position === "after"), x = $(r.startDate).format("h:mm A"), E = $(r.endDate).format("h:mm A");
                return /* @__PURE__ */ V(Kt, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ V(Jt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ V(it, { style: { fontWeight: 600 }, children: [
                    $(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: x }) : x,
                    " ",
                    a.conflicts.to,
                    " ",
                    m ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: E }) : E
                  ] }),
                  /* @__PURE__ */ h(it, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              r.nearbyEvents.map((u, m) => {
                const x = $(u.event.startDate).format("YYYY-MM-DD"), E = $(u.event.endDate).format("YYYY-MM-DD"), T = x !== E, z = T ? $(u.event.startDate).format("MMM D, h:mm A") : $(u.event.startDate).format("h:mm A"), G = T ? $(u.event.endDate).format("MMM D, h:mm A") : $(u.event.endDate).format("h:mm A"), Q = $(u.event.startDate).format("MMM D"), k = Math.floor(u.timeGap / (1e3 * 60 * 60)), _ = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), D = k > 0 ? `${k}h ${_}m` : `${_}m`, F = u.position === "after", O = u.position === "before";
                return /* @__PURE__ */ V(Kt, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ V(Jt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ V(it, { children: [
                    !T && `${Q}: `,
                    F ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: z }) : z,
                    " ",
                    a.conflicts.to,
                    " ",
                    O ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: G }) : G
                  ] }),
                  /* @__PURE__ */ V(Lr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    D,
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
      Tl,
      {
        $isAnimating: N,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: N ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: N ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: N ? void 0 : `translate3d(${c ? b : n.x}px, ${n.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: j
        },
        children: /* @__PURE__ */ h(Al, { children: /* @__PURE__ */ V(Il, { children: [
          /* @__PURE__ */ h(Ar, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Ar, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(Pl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Wl = Hl, zl = Wt`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Bl = w.div`
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
  animation: ${zl} 1.5s ease-in-out infinite;
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
`, Fl = ({ selectionBox: e, isSelecting: n }) => !e || !n ? null : /* @__PURE__ */ h(
  Bl,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), jl = Fl, Zl = Wt`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Vl = w.div`
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
  animation: ${Zl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, Gl = w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Xl = w.span`
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
`, Ul = w.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Kl = w.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;
w.div`
  display: none;
`;
w.div`
  display: none;
`;
w.button`
  display: none;
`;
const Jl = w.div`
  display: flex;
  gap: 8px;
`, Rr = w.button`
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
`, ql = ({ selections: e, onConfirm: n, onClear: t }) => {
  var v;
  const o = tt().multiSelect, s = Ce(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const g = s > 0, b = /* @__PURE__ */ V(Vl, { $hasConflicts: g, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ V(Gl, { children: [
      /* @__PURE__ */ V(Xl, { $hasConflicts: g, children: [
        e.length,
        " ",
        i
      ] }),
      g && /* @__PURE__ */ V(Ul, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ h(Kl, { children: c })
    ] }),
    /* @__PURE__ */ V(Jl, { children: [
      /* @__PURE__ */ V(Rr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ h(Rr, { variant: "primary", $hasConflicts: g, onClick: n, children: g ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return bo(b, document.body);
}, Ql = ql, ed = Wt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, td = w.div`
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
  animation: ${ed} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && Ht`
      border-style: dashed;
    `}
`, nd = w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, rd = w.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, od = w.button`
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
`, sd = ({
  selections: e,
  data: n,
  zoom: t,
  startDate: r,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = de(null), [a, l] = de({ x: 0, y: 0 }), f = ve(null), g = Ce(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return Ae;
      default:
        return Se;
    }
  }, [t]), b = Ce(() => $().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), v = Ce(() => e.map((m, x) => {
    let E = 0, T = !1;
    for (const J of n) {
      if (J.id === m.resourceId) {
        T = !0;
        break;
      }
      E += Math.max(J.data.length, 1);
    }
    if (!T)
      return null;
    const z = $(m.startDate), G = $(m.endDate);
    let Q, k;
    switch (t) {
      case 0:
        Q = Math.floor(z.diff(b, "days") / 7), k = Math.max(1, Math.ceil(G.diff(z, "days") / 7) + 1);
        break;
      case 1:
        Q = z.diff(b, "days"), k = Math.max(1, G.diff(z, "days") + 1);
        break;
      case 2:
        Q = z.diff(b, "hours"), k = Math.max(1, G.diff(z, "hours") + 1);
        break;
      default:
        Q = 0, k = 1;
    }
    const _ = Q * g;
    let D = 0;
    for (const J of i)
      J <= E && D++;
    const F = E * he + D * Pe, O = k * g;
    return {
      index: x,
      selection: m,
      x: _,
      y: F,
      width: O,
      height: he
    };
  }), [e, n, t, b, g]), M = (m, x) => {
    const E = $(m).format("MMM D"), T = $(x).format("MMM D");
    return E === T ? E : `${E} - ${T}`;
  }, p = (m) => !m.hasConflict || !m.conflicts ? "" : `⚠️ Conflicts with:
${m.conflicts.map((E) => {
    const T = (E.overlapDuration / 36e5).toFixed(1);
    return `• ${E.event.title} (${T}h overlap)`;
  }).join(`
`)}`, N = ce(
    (m) => {
      let x = 0;
      for (const E of n) {
        const T = Math.max(E.data.length, 1);
        if (m >= x * he && m < (x + T) * he)
          return {
            resourceId: E.id,
            resourceLabel: E.label
          };
        x += T;
      }
      return null;
    },
    [n]
  ), j = ce(
    (m) => {
      const x = Math.floor(m / g);
      switch (t) {
        case 0:
          return b.add(x * 7, "days").toDate();
        case 1:
          return b.add(x, "days").toDate();
        case 2:
          return b.add(x, "hours").toDate();
        default:
          return b.toDate();
      }
    },
    [t, b, g]
  ), P = ce(
    (m, x) => {
      !s || (m.preventDefault(), m.stopPropagation(), !v[x]) || (f.current = { x: m.clientX, y: m.clientY }, d(x), l({ x: 0, y: 0 }));
    },
    [s, v]
  ), A = ce(
    (m) => {
      if (c === null || !f.current)
        return;
      const x = m.clientX - f.current.x, E = m.clientY - f.current.y, T = Math.round(x / g) * g, z = Math.round(E / he) * he;
      l({ x: T, y: z });
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
    const x = m.x + a.x, E = m.y + a.y, T = N(E + he / 2);
    if (!T) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const z = j(x), G = e[c], Q = G.endDate.getTime() - G.startDate.getTime(), k = new Date(z.getTime() + Q);
    s(c, {
      startDate: z,
      endDate: k,
      resourceId: T.resourceId,
      resourceLabel: T.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, v, e, s, N, j]);
  return xe(() => {
    if (c !== null)
      return document.addEventListener("mousemove", A), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", u);
      };
  }, [c, A, u]), /* @__PURE__ */ h(_e, { children: v.map((m) => {
    if (!m)
      return null;
    const x = m.selection.hasConflict || !1, E = c === m.index, T = E ? m.x + a.x : m.x, z = E ? m.y + a.y : m.y;
    return /* @__PURE__ */ V(
      td,
      {
        $hasConflict: x,
        $isDragging: E,
        style: {
          left: T,
          top: z,
          width: m.width,
          height: m.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (G) => P(G, m.index),
        children: [
          x && /* @__PURE__ */ h(rd, { title: p(m.selection), children: "⚠️" }),
          /* @__PURE__ */ h(nd, { $hasConflict: x, children: M(m.selection.startDate, m.selection.endDate) }),
          /* @__PURE__ */ h(
            od,
            {
              onClick: (G) => {
                G.stopPropagation(), o(m.index);
              },
              onMouseDown: (G) => G.stopPropagation(),
              title: x ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      m.index
    );
  }) });
}, id = sd, ad = w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, cd = ({ zoom: e, startDate: n }) => {
  const { cols: t } = je(), r = Ce(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Ie * 7 : Se, s = $().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = $().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ h(ad, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, ld = cd;
export {
  pd as Scheduler
};
