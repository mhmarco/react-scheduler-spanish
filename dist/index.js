var vo = Object.defineProperty;
var xo = (e, n, t) => n in e ? vo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Nn = (e, n, t) => (xo(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as h, jsxs as F, Fragment as _e } from "react/jsx-runtime";
import * as oe from "react";
import et, { useRef as ge, useContext as Ke, useMemo as ke, useLayoutEffect as Mn, useDebugValue as Hn, createElement as bo, createContext as Nr, useState as pe, useCallback as de, useEffect as ve, forwardRef as kn, useImperativeHandle as Hr } from "react";
import { createPortal as wo } from "react-dom";
var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, St = {}, So = {
  get exports() {
    return St;
  },
  set exports(e) {
    St = e;
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
var Wn;
function Co() {
  if (Wn)
    return xe;
  Wn = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function M(p) {
    if (typeof p == "object" && p !== null) {
      var L = p.$$typeof;
      switch (L) {
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
                case y:
                case f:
                case s:
                  return p;
                default:
                  return L;
              }
          }
        case n:
          return L;
      }
    }
  }
  return xe.ContextConsumer = i, xe.ContextProvider = s, xe.Element = e, xe.ForwardRef = d, xe.Fragment = t, xe.Lazy = y, xe.Memo = f, xe.Portal = n, xe.Profiler = o, xe.StrictMode = r, xe.Suspense = a, xe.SuspenseList = l, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(p) {
    return M(p) === i;
  }, xe.isContextProvider = function(p) {
    return M(p) === s;
  }, xe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, xe.isForwardRef = function(p) {
    return M(p) === d;
  }, xe.isFragment = function(p) {
    return M(p) === t;
  }, xe.isLazy = function(p) {
    return M(p) === y;
  }, xe.isMemo = function(p) {
    return M(p) === f;
  }, xe.isPortal = function(p) {
    return M(p) === n;
  }, xe.isProfiler = function(p) {
    return M(p) === o;
  }, xe.isStrictMode = function(p) {
    return M(p) === r;
  }, xe.isSuspense = function(p) {
    return M(p) === a;
  }, xe.isSuspenseList = function(p) {
    return M(p) === l;
  }, xe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === r || p === a || p === l || p === w || typeof p == "object" && p !== null && (p.$$typeof === y || p.$$typeof === f || p.$$typeof === s || p.$$typeof === i || p.$$typeof === d || p.$$typeof === v || p.getModuleId !== void 0);
  }, xe.typeOf = M, xe;
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
var zn;
function Mo() {
  return zn || (zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), v = !1, M = !1, p = !1, L = !1, Z = !1, H;
    H = Symbol.for("react.module.reference");
    function E(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === t || k === o || Z || k === r || k === a || k === l || L || k === w || v || M || p || typeof k == "object" && k !== null && (k.$$typeof === y || k.$$typeof === f || k.$$typeof === s || k.$$typeof === i || k.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === H || k.getModuleId !== void 0));
    }
    function u(k) {
      if (typeof k == "object" && k !== null) {
        var B = k.$$typeof;
        switch (B) {
          case e:
            var ne = k.type;
            switch (ne) {
              case t:
              case o:
              case r:
              case a:
              case l:
                return ne;
              default:
                var K = ne && ne.$$typeof;
                switch (K) {
                  case c:
                  case i:
                  case d:
                  case y:
                  case f:
                  case s:
                    return K;
                  default:
                    return B;
                }
            }
          case n:
            return B;
        }
      }
    }
    var g = i, x = s, A = e, P = d, O = t, U = y, Q = f, _ = n, D = o, T = r, R = a, I = l, q = !1, ee = !1;
    function se(k) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(k) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function N(k) {
      return u(k) === i;
    }
    function W(k) {
      return u(k) === s;
    }
    function X(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function te(k) {
      return u(k) === d;
    }
    function S(k) {
      return u(k) === t;
    }
    function Y(k) {
      return u(k) === y;
    }
    function C(k) {
      return u(k) === f;
    }
    function j(k) {
      return u(k) === n;
    }
    function J(k) {
      return u(k) === o;
    }
    function z(k) {
      return u(k) === r;
    }
    function m(k) {
      return u(k) === a;
    }
    function G(k) {
      return u(k) === l;
    }
    be.ContextConsumer = g, be.ContextProvider = x, be.Element = A, be.ForwardRef = P, be.Fragment = O, be.Lazy = U, be.Memo = Q, be.Portal = _, be.Profiler = D, be.StrictMode = T, be.Suspense = R, be.SuspenseList = I, be.isAsyncMode = se, be.isConcurrentMode = ae, be.isContextConsumer = N, be.isContextProvider = W, be.isElement = X, be.isForwardRef = te, be.isFragment = S, be.isLazy = Y, be.isMemo = C, be.isPortal = j, be.isProfiler = J, be.isStrictMode = z, be.isSuspense = m, be.isSuspenseList = G, be.isValidElementType = E, be.typeOf = u;
  }()), be;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Co() : e.exports = Mo();
})(So);
function ko(e) {
  function n(N, W, X, te, S) {
    for (var Y = 0, C = 0, j = 0, J = 0, z, m, G = 0, k = 0, B, ne = B = z = 0, K = 0, ce = 0, fe = 0, ue = 0, ie = X.length, he = ie - 1, ye, V = "", re = "", le = "", Ce = "", Me; K < ie; ) {
      if (m = X.charCodeAt(K), K === he && C + J + j + Y !== 0 && (C !== 0 && (m = C === 47 ? 10 : 47), J = j = Y = 0, ie++, he++), C + J + j + Y === 0) {
        if (K === he && (0 < ce && (V = V.replace(y, "")), 0 < V.trim().length)) {
          switch (m) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              V += X.charAt(K);
          }
          m = 59;
        }
        switch (m) {
          case 123:
            for (V = V.trim(), z = V.charCodeAt(0), B = 1, ue = ++K; K < ie; ) {
              switch (m = X.charCodeAt(K)) {
                case 123:
                  B++;
                  break;
                case 125:
                  B--;
                  break;
                case 47:
                  switch (m = X.charCodeAt(K + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = K + 1; ne < he; ++ne)
                          switch (X.charCodeAt(ne)) {
                            case 47:
                              if (m === 42 && X.charCodeAt(ne - 1) === 42 && K + 2 !== ne) {
                                K = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (m === 47) {
                                K = ne + 1;
                                break e;
                              }
                          }
                        K = ne;
                      }
                  }
                  break;
                case 91:
                  m++;
                case 40:
                  m++;
                case 34:
                case 39:
                  for (; K++ < he && X.charCodeAt(K) !== m; )
                    ;
              }
              if (B === 0)
                break;
              K++;
            }
            switch (B = X.substring(ue, K), z === 0 && (z = (V = V.replace(f, "").trim()).charCodeAt(0)), z) {
              case 64:
                switch (0 < ce && (V = V.replace(y, "")), m = V.charCodeAt(1), m) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = W;
                    break;
                  default:
                    ce = R;
                }
                if (B = n(W, ce, B, m, S + 1), ue = B.length, 0 < q && (ce = t(R, V, fe), Me = c(3, B, ce, W, _, Q, ue, m, S, te), V = ce.join(""), Me !== void 0 && (ue = (B = Me.trim()).length) === 0 && (m = 0, B = "")), 0 < ue)
                  switch (m) {
                    case 115:
                      V = V.replace(g, i);
                    case 100:
                    case 109:
                    case 45:
                      B = V + "{" + B + "}";
                      break;
                    case 107:
                      V = V.replace(Z, "$1 $2"), B = V + "{" + B + "}", B = T === 1 || T === 2 && s("@" + B, 3) ? "@-webkit-" + B + "@" + B : "@" + B;
                      break;
                    default:
                      B = V + B, te === 112 && (B = (re += B, ""));
                  }
                else
                  B = "";
                break;
              default:
                B = n(W, t(W, V, fe), B, te, S + 1);
            }
            le += B, B = fe = ce = ne = z = 0, V = "", m = X.charCodeAt(++K);
            break;
          case 125:
          case 59:
            if (V = (0 < ce ? V.replace(y, "") : V).trim(), 1 < (ue = V.length))
              switch (ne === 0 && (z = V.charCodeAt(0), z === 45 || 96 < z && 123 > z) && (ue = (V = V.replace(" ", ":")).length), 0 < q && (Me = c(1, V, W, N, _, Q, re.length, te, S, te)) !== void 0 && (ue = (V = Me.trim()).length) === 0 && (V = "\0\0"), z = V.charCodeAt(0), m = V.charCodeAt(1), z) {
                case 0:
                  break;
                case 64:
                  if (m === 105 || m === 99) {
                    Ce += V + X.charAt(K);
                    break;
                  }
                default:
                  V.charCodeAt(ue - 1) !== 58 && (re += o(V, z, m, V.charCodeAt(2)));
              }
            fe = ce = ne = z = 0, V = "", m = X.charCodeAt(++K);
        }
      }
      switch (m) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + z === 0 && te !== 107 && 0 < V.length && (ce = 1, V += "\0"), 0 < q * se && c(0, V, W, N, _, Q, re.length, te, S, te), Q = 1, _++;
          break;
        case 59:
        case 125:
          if (C + J + j + Y === 0) {
            Q++;
            break;
          }
        default:
          switch (Q++, ye = X.charAt(K), m) {
            case 9:
            case 32:
              if (J + Y + C === 0)
                switch (G) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ye = "";
                    break;
                  default:
                    m !== 32 && (ye = " ");
                }
              break;
            case 0:
              ye = "\\0";
              break;
            case 12:
              ye = "\\f";
              break;
            case 11:
              ye = "\\v";
              break;
            case 38:
              J + C + Y === 0 && (ce = fe = 1, ye = "\f" + ye);
              break;
            case 108:
              if (J + C + Y + D === 0 && 0 < ne)
                switch (K - ne) {
                  case 2:
                    G === 112 && X.charCodeAt(K - 3) === 58 && (D = G);
                  case 8:
                    k === 111 && (D = k);
                }
              break;
            case 58:
              J + C + Y === 0 && (ne = K);
              break;
            case 44:
              C + j + J + Y === 0 && (ce = 1, ye += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (J = J === m ? 0 : J === 0 ? m : J);
              break;
            case 91:
              J + C + j === 0 && Y++;
              break;
            case 93:
              J + C + j === 0 && Y--;
              break;
            case 41:
              J + C + Y === 0 && j--;
              break;
            case 40:
              if (J + C + Y === 0) {
                if (z === 0)
                  switch (2 * G + 3 * k) {
                    case 533:
                      break;
                    default:
                      z = 1;
                  }
                j++;
              }
              break;
            case 64:
              C + j + J + Y + ne + B === 0 && (B = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + Y + j))
                switch (C) {
                  case 0:
                    switch (2 * m + 3 * X.charCodeAt(K + 1)) {
                      case 235:
                        C = 47;
                        break;
                      case 220:
                        ue = K, C = 42;
                    }
                    break;
                  case 42:
                    m === 47 && G === 42 && ue + 2 !== K && (X.charCodeAt(ue + 2) === 33 && (re += X.substring(ue, K + 1)), ye = "", C = 0);
                }
          }
          C === 0 && (V += ye);
      }
      k = G, G = m, K++;
    }
    if (ue = re.length, 0 < ue) {
      if (ce = W, 0 < q && (Me = c(2, re, ce, N, _, Q, ue, te, S, te), Me !== void 0 && (re = Me).length === 0))
        return Ce + re + le;
      if (re = ce.join(",") + "{" + re + "}", T * D !== 0) {
        switch (T !== 2 || s(re, 2) || (D = 0), D) {
          case 111:
            re = re.replace(E, ":-moz-$1") + re;
            break;
          case 112:
            re = re.replace(H, "::-webkit-input-$1") + re.replace(H, "::-moz-$1") + re.replace(H, ":-ms-input-$1") + re;
        }
        D = 0;
      }
    }
    return Ce + re + le;
  }
  function t(N, W, X) {
    var te = W.trim().split(p);
    W = te;
    var S = te.length, Y = N.length;
    switch (Y) {
      case 0:
      case 1:
        var C = 0;
        for (N = Y === 0 ? "" : N[0] + " "; C < S; ++C)
          W[C] = r(N, W[C], X).trim();
        break;
      default:
        var j = C = 0;
        for (W = []; C < S; ++C)
          for (var J = 0; J < Y; ++J)
            W[j++] = r(N[J] + " ", te[C], X).trim();
    }
    return W;
  }
  function r(N, W, X) {
    var te = W.charCodeAt(0);
    switch (33 > te && (te = (W = W.trim()).charCodeAt(0)), te) {
      case 38:
        return W.replace(L, "$1" + N.trim());
      case 58:
        return N.trim() + W.replace(L, "$1" + N.trim());
      default:
        if (0 < 1 * X && 0 < W.indexOf("\f"))
          return W.replace(L, (N.charCodeAt(0) === 58 ? "" : "$1") + N.trim());
    }
    return N + W;
  }
  function o(N, W, X, te) {
    var S = N + ";", Y = 2 * W + 3 * X + 4 * te;
    if (Y === 944) {
      N = S.indexOf(":", 9) + 1;
      var C = S.substring(N, S.length - 1).trim();
      return C = S.substring(0, N).trim() + C + ";", T === 1 || T === 2 && s(C, 1) ? "-webkit-" + C + C : C;
    }
    if (T === 0 || T === 2 && !s(S, 1))
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
          return S.replace(U, "$1-webkit-$2") + S;
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
        switch (C = S.substring(13).trim(), W = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(W)) {
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
        switch (W = (S = N).length - 10, C = (S.charCodeAt(W) === 33 ? S.substring(0, W) : S).substring(N.indexOf(":", 7) + 1).trim(), Y = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
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
              return "-webkit-" + S + "-ms-flex-item-" + S.replace(A, "") + S;
            default:
              return "-webkit-" + S + "-ms-flex-line-pack" + S.replace("align-content", "").replace(A, "") + S;
          }
        break;
      case 973:
      case 989:
        if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (O.test(N) === !0)
          return (C = N.substring(N.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(N.replace("stretch", "fill-available"), W, X, te).replace(":fill-available", ":stretch") : S.replace(C, "-webkit-" + C) + S.replace(C, "-moz-" + C.replace("fill-", "")) + S;
        break;
      case 962:
        if (S = "-webkit-" + S + (S.charCodeAt(5) === 102 ? "-ms-" + S : "") + S, X + te === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf("transform", 10))
          return S.substring(0, S.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + S;
    }
    return S;
  }
  function s(N, W) {
    var X = N.indexOf(W === 1 ? ":" : "{"), te = N.substring(0, W !== 3 ? X : 10);
    return X = N.substring(X + 1, N.length - 1), ee(W !== 2 ? te : te.replace(P, "$1"), X, W);
  }
  function i(N, W) {
    var X = o(W, W.charCodeAt(0), W.charCodeAt(1), W.charCodeAt(2));
    return X !== W + ";" ? X.replace(x, " or ($1)").substring(4) : "(" + W + ")";
  }
  function c(N, W, X, te, S, Y, C, j, J, z) {
    for (var m = 0, G = W, k; m < q; ++m)
      switch (k = I[m].call(l, N, G, X, te, S, Y, C, j, J, z)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          G = k;
      }
    if (G !== W)
      return G;
  }
  function d(N) {
    switch (N) {
      case void 0:
      case null:
        q = I.length = 0;
        break;
      default:
        if (typeof N == "function")
          I[q++] = N;
        else if (typeof N == "object")
          for (var W = 0, X = N.length; W < X; ++W)
            d(N[W]);
        else
          se = !!N | 0;
    }
    return d;
  }
  function a(N) {
    return N = N.prefix, N !== void 0 && (ee = null, N ? typeof N != "function" ? T = 1 : (T = 2, ee = N) : T = 0), a;
  }
  function l(N, W) {
    var X = N;
    if (33 > X.charCodeAt(0) && (X = X.trim()), ae = X, X = [ae], 0 < q) {
      var te = c(-1, W, X, X, _, Q, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (W = te);
    }
    var S = n(R, X, W, 0, 0);
    return 0 < q && (te = c(-2, S, X, X, _, Q, S.length, 0, 0, 0), te !== void 0 && (S = te)), ae = "", D = 0, Q = _ = 1, S;
  }
  var f = /^\0+/g, y = /[\0\r\f]/g, w = /: */g, v = /zoo|gra/, M = /([,: ])(transform)/g, p = /,\r+?/g, L = /([\t\r\n ])*\f?&/g, Z = /@(k\w+)\s*(\S*)\s*/, H = /::(place)/g, E = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, g = /\(\s*(.*)\s*\)/g, x = /([\s\S]*?);/g, A = /-self|flex-/g, P = /[^]*?(:[rp][el]a[\w-]+)[^]*/, O = /stretch|:\s*\w+\-(?:conte|avail)/, U = /([^-])(image-set\()/, Q = 1, _ = 1, D = 0, T = 1, R = [], I = [], q = 0, ee = null, se = 0, ae = "";
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
), Jt = {}, _o = {
  get exports() {
    return Jt;
  },
  set exports(e) {
    Jt = e;
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
var Bn;
function To() {
  if (Bn)
    return we;
  Bn = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, Z = e ? Symbol.for("react.scope") : 60119;
  function H(u) {
    if (typeof u == "object" && u !== null) {
      var g = u.$$typeof;
      switch (g) {
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
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  function E(u) {
    return H(u) === a;
  }
  return we.AsyncMode = d, we.ConcurrentMode = a, we.ContextConsumer = c, we.ContextProvider = i, we.Element = n, we.ForwardRef = l, we.Fragment = r, we.Lazy = v, we.Memo = w, we.Portal = t, we.Profiler = s, we.StrictMode = o, we.Suspense = f, we.isAsyncMode = function(u) {
    return E(u) || H(u) === d;
  }, we.isConcurrentMode = E, we.isContextConsumer = function(u) {
    return H(u) === c;
  }, we.isContextProvider = function(u) {
    return H(u) === i;
  }, we.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, we.isForwardRef = function(u) {
    return H(u) === l;
  }, we.isFragment = function(u) {
    return H(u) === r;
  }, we.isLazy = function(u) {
    return H(u) === v;
  }, we.isMemo = function(u) {
    return H(u) === w;
  }, we.isPortal = function(u) {
    return H(u) === t;
  }, we.isProfiler = function(u) {
    return H(u) === s;
  }, we.isStrictMode = function(u) {
    return H(u) === o;
  }, we.isSuspense = function(u) {
    return H(u) === f;
  }, we.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === y || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === w || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === p || u.$$typeof === L || u.$$typeof === Z || u.$$typeof === M);
  }, we.typeOf = H, we;
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
var jn;
function Ao() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, Z = e ? Symbol.for("react.scope") : 60119;
    function H(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === r || m === a || m === s || m === o || m === f || m === y || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === w || m.$$typeof === i || m.$$typeof === c || m.$$typeof === l || m.$$typeof === p || m.$$typeof === L || m.$$typeof === Z || m.$$typeof === M);
    }
    function E(m) {
      if (typeof m == "object" && m !== null) {
        var G = m.$$typeof;
        switch (G) {
          case n:
            var k = m.type;
            switch (k) {
              case d:
              case a:
              case r:
              case s:
              case o:
              case f:
                return k;
              default:
                var B = k && k.$$typeof;
                switch (B) {
                  case c:
                  case l:
                  case v:
                  case w:
                  case i:
                    return B;
                  default:
                    return G;
                }
            }
          case t:
            return G;
        }
      }
    }
    var u = d, g = a, x = c, A = i, P = n, O = l, U = r, Q = v, _ = w, D = t, T = s, R = o, I = f, q = !1;
    function ee(m) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(m) || E(m) === d;
    }
    function se(m) {
      return E(m) === a;
    }
    function ae(m) {
      return E(m) === c;
    }
    function N(m) {
      return E(m) === i;
    }
    function W(m) {
      return typeof m == "object" && m !== null && m.$$typeof === n;
    }
    function X(m) {
      return E(m) === l;
    }
    function te(m) {
      return E(m) === r;
    }
    function S(m) {
      return E(m) === v;
    }
    function Y(m) {
      return E(m) === w;
    }
    function C(m) {
      return E(m) === t;
    }
    function j(m) {
      return E(m) === s;
    }
    function J(m) {
      return E(m) === o;
    }
    function z(m) {
      return E(m) === f;
    }
    Se.AsyncMode = u, Se.ConcurrentMode = g, Se.ContextConsumer = x, Se.ContextProvider = A, Se.Element = P, Se.ForwardRef = O, Se.Fragment = U, Se.Lazy = Q, Se.Memo = _, Se.Portal = D, Se.Profiler = T, Se.StrictMode = R, Se.Suspense = I, Se.isAsyncMode = ee, Se.isConcurrentMode = se, Se.isContextConsumer = ae, Se.isContextProvider = N, Se.isElement = W, Se.isForwardRef = X, Se.isFragment = te, Se.isLazy = S, Se.isMemo = Y, Se.isPortal = C, Se.isProfiler = j, Se.isStrictMode = J, Se.isSuspense = z, Se.isValidElementType = H, Se.typeOf = E;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = To() : e.exports = Ao();
})(_o);
var $n = Jt, Po = {
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
}, qt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !St.typeOf(e);
}, Ot = Object.freeze([]), Ue = Object.freeze({});
function ut(e) {
  return typeof e == "function";
}
function Qt(e) {
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
function Be(e) {
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
        (i <<= 1) < 0 && Be(16, "" + t);
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
}(), Pt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), wt = 1, Dt = function(e) {
  if (Pt.has(e))
    return Pt.get(e);
  for (; It.has(wt); )
    wt++;
  var n = wt++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Be(16, "" + n), Pt.set(e, n), It.set(n, e), n;
}, Zo = function(e) {
  return It.get(e);
}, Vo = function(e, n) {
  n >= wt && (wt = n + 1), Pt.set(e, n), It.set(n, e);
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
      Be(17);
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
}(), Un = _n, ts = { isServer: !_n, useCSSOMInjection: !Wo }, Lt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ue), r === void 0 && (r = {}), this.options = Le({}, ts, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && _n && Un && (Un = !1, function(s) {
      for (var i = document.querySelectorAll(Go), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(ft) !== "active" && (Ko(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Dt(t);
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
        var c = Zo(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = r.getGroup(i);
          if (d && a && d.size) {
            var l = ft + ".g" + i + '[id="' + c + '"]', f = "";
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
}(), ns = /(a)(d)/gi, Kn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function en(e) {
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
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && jr(n), this.componentId = t, this.baseHash = qe(rs, t), this.baseStyle = r, Lt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = tt(this.rules, n, t, r).join(""), c = en(qe(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = r(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = qe(this.baseHash, r.hash), f = "", y = 0; y < a; y++) {
        var w = this.rules[y];
        if (typeof w == "string")
          f += w, process.env.NODE_ENV !== "production" && (l = qe(l, w + y));
        else if (w) {
          var v = tt(w, n, t, r), M = Array.isArray(v) ? v.join("") : v;
          l = qe(l, M + y), f += M;
        }
      }
      if (f) {
        var p = en(l >>> 0);
        if (!t.hasNameForId(o, p)) {
          var L = r(f, "." + p, void 0, o);
          t.insertRules(o, p, L);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), ss = /^\s*\/\/.*$/gm, is = [":", "[", ".", "#"];
function as(e) {
  var n, t, r, o, s = e === void 0 ? Ue : e, i = s.options, c = i === void 0 ? Ue : i, d = s.plugins, a = d === void 0 ? Ot : d, l = new ko(c), f = [], y = function(M) {
    function p(L) {
      if (L)
        try {
          M(L + "}");
        } catch {
        }
    }
    return function(L, Z, H, E, u, g, x, A, P, O) {
      switch (L) {
        case 1:
          if (P === 0 && Z.charCodeAt(0) === 64)
            return M(Z + ";"), "";
          break;
        case 2:
          if (A === 0)
            return Z + "/*|*/";
          break;
        case 3:
          switch (A) {
            case 102:
            case 112:
              return M(H[0] + Z), "";
            default:
              return Z + (O === 0 ? "/*|*/" : "");
          }
        case -2:
          Z.split("/*|*/}").forEach(p);
      }
    };
  }(function(M) {
    f.push(M);
  }), w = function(M, p, L) {
    return p === 0 && is.indexOf(L[t.length]) !== -1 || L.match(o) ? M : "." + n;
  };
  function v(M, p, L, Z) {
    Z === void 0 && (Z = "&");
    var H = M.replace(ss, ""), E = p && L ? L + " " + p + " { " + H + " }" : H;
    return n = Z, t = p, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(L || !p ? "" : p, E);
  }
  return l.use([].concat(a, [function(M, p, L) {
    M === 2 && L.length && L[0].lastIndexOf(t) > 0 && (L[0] = L[0].replace(r, w));
  }, y, function(M) {
    if (M === -2) {
      var p = f;
      return f = [], p;
    }
  }])), v.hash = a.length ? a.reduce(function(M, p) {
    return p.name || Be(15), qe(M, p.name);
  }, 5381).toString() : "", v;
}
var Zr = et.createContext();
Zr.Consumer;
var Vr = et.createContext(), cs = (Vr.Consumer, new Lt()), tn = as();
function Gr() {
  return Ke(Zr) || cs;
}
function Xr() {
  return Ke(Vr) || tn;
}
var Ur = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = tn);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Be(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = tn), this.name + n.hash;
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
    return process.env.NODE_ENV !== "production" && St.isElement(d) && console.warn(Qt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), tt(d, n, t, r);
  }
  var a;
  return e instanceof Ur ? t ? (e.inject(t, r), e.getName(r)) : e : qt(e) ? function l(f, y) {
    var w, v, M = [];
    for (var p in f)
      f.hasOwnProperty(p) && !qn(f[p]) && (Array.isArray(f[p]) && f[p].isCss || ut(f[p]) ? M.push(Jn(p) + ":", f[p], ";") : qt(f[p]) ? M.push.apply(M, l(f[p], p)) : M.push(Jn(p) + ": " + (w = p, (v = f[p]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || w in $o ? String(v).trim() : v + "px") + ";"));
    return y ? [y + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var Qn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ht(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return ut(e) || qt(e) ? Qn(tt(Xn(Ot, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Qn(tt(Xn(e, t)));
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
      }, ge(), o && !Et.has(t) && (console.warn(t), Et.add(t));
    } catch (s) {
      er.test(s.message) && Et.delete(t);
    } finally {
      console.error = r;
    }
  }
}, Jr = function(e, n, t) {
  return t === void 0 && (t = Ue), e.theme !== t.theme && e.theme || n || t.theme;
}, hs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ps = /(^-|-$)/g;
function Bt(e) {
  return e.replace(hs, "-").replace(ps, "");
}
var Tn = function(e) {
  return en(Br(e) >>> 0);
};
function _t(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var nn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ms = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function gs(e, n, t) {
  var r = e[t];
  nn(n) && nn(r) ? qr(r, n) : e[t] = n;
}
function qr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (nn(i))
      for (var c in i)
        ms(c) && gs(e, i[c], c);
  }
  return e;
}
var ht = et.createContext();
ht.Consumer;
function ys(e) {
  var n = Ke(ht), t = ke(function() {
    return function(r, o) {
      if (!r)
        return Be(14);
      if (ut(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Be(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Be(8) : o ? Le({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? et.createElement(ht.Provider, { value: t }, e.children) : null;
}
var jt = {};
function Qr(e, n, t) {
  var r = En(e), o = !_t(e), s = n.attrs, i = s === void 0 ? Ot : s, c = n.componentId, d = c === void 0 ? function(Z, H) {
    var E = typeof Z != "string" ? "sc" : Bt(Z);
    jt[E] = (jt[E] || 0) + 1;
    var u = E + "-" + Tn("5.3.8" + E + jt[E]);
    return H ? H + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(Z) {
    return _t(Z) ? "styled." + Z : "Styled(" + Qt(Z) + ")";
  }(e) : a, f = n.displayName && n.componentId ? Bt(n.displayName) + "-" + n.componentId : n.componentId || d, y = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, w = n.shouldForwardProp;
  r && e.shouldForwardProp && (w = n.shouldForwardProp ? function(Z, H, E) {
    return e.shouldForwardProp(Z, H, E) && n.shouldForwardProp(Z, H, E);
  } : e.shouldForwardProp);
  var v, M = new os(t, f, r ? e.componentStyle : void 0), p = M.isStatic && i.length === 0, L = function(Z, H) {
    return function(E, u, g, x) {
      var A = E.attrs, P = E.componentStyle, O = E.defaultProps, U = E.foldedComponentIds, Q = E.shouldForwardProp, _ = E.styledComponentId, D = E.target;
      process.env.NODE_ENV !== "production" && Hn(_);
      var T = function(te, S, Y) {
        te === void 0 && (te = Ue);
        var C = Le({}, S, { theme: te }), j = {};
        return Y.forEach(function(J) {
          var z, m, G, k = J;
          for (z in ut(k) && (k = k(C)), k)
            C[z] = j[z] = z === "className" ? (m = j[z], G = k[z], m && G ? m + " " + G : m || G) : k[z];
        }), [C, j];
      }(Jr(u, Ke(ht), O) || Ue, u, A), R = T[0], I = T[1], q = function(te, S, Y, C) {
        var j = Gr(), J = Xr(), z = S ? te.generateAndInjectStyles(Ue, j, J) : te.generateAndInjectStyles(Y, j, J);
        return process.env.NODE_ENV !== "production" && Hn(z), process.env.NODE_ENV !== "production" && !S && C && C(z), z;
      }(P, x, R, process.env.NODE_ENV !== "production" ? E.warnTooManyClasses : void 0), ee = g, se = I.$as || u.$as || I.as || u.as || D, ae = _t(se), N = I !== u ? Le({}, u, {}, I) : u, W = {};
      for (var X in N)
        X[0] !== "$" && X !== "as" && (X === "forwardedAs" ? W.as = N[X] : (Q ? Q(X, Fn, se) : !ae || Fn(X)) && (W[X] = N[X]));
      return u.style && I.style !== u.style && (W.style = Le({}, u.style, {}, I.style)), W.className = Array.prototype.concat(U, _, q !== _ ? q : null, u.className, I.className).filter(Boolean).join(" "), W.ref = ee, bo(se, W);
    }(v, Z, H, p);
  };
  return L.displayName = l, (v = et.forwardRef(L)).attrs = y, v.componentStyle = M, v.displayName = l, v.shouldForwardProp = w, v.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ot, v.styledComponentId = f, v.target = r ? e.target : e, v.withComponent = function(Z) {
    var H = n.componentId, E = function(g, x) {
      if (g == null)
        return {};
      var A, P, O = {}, U = Object.keys(g);
      for (P = 0; P < U.length; P++)
        A = U[P], x.indexOf(A) >= 0 || (O[A] = g[A]);
      return O;
    }(n, ["componentId"]), u = H && H + "-" + (_t(Z) ? Z : Bt(Qt(Z)));
    return Qr(Z, Le({}, E, { attrs: y, componentId: u }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(Z) {
    this._foldedDefaultProps = r ? qr({}, e.defaultProps, Z) : Z;
  } }), process.env.NODE_ENV !== "production" && (Kr(l, f), v.warnTooManyClasses = function(Z, H) {
    var E = {}, u = !1;
    return function(g) {
      if (!u && (E[g] = !0, Object.keys(E).length >= 200)) {
        var x = H ? ' with the id of "' + H + '"' : "";
        console.warn("Over 200 classes were generated for component " + Z + x + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, E = {};
      }
    };
  }(l, f)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && Ho(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var rn = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Ue), !St.isValidElementType(r))
      return Be(1, String(r));
    var s = function() {
      return t(r, o, Ht.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Le({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Le({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Qr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  rn[e] = rn(e);
});
var vs = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = jr(t), Lt.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(tt(this.rules, r, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && Lt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function xs(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ht.apply(void 0, [e].concat(t)), s = "sc-global-" + Tn(JSON.stringify(o)), i = new vs(o, s);
  function c(a) {
    var l = Gr(), f = Xr(), y = Ke(ht), w = ge(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && et.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(w, a, l, y, f), Mn(function() {
      if (!l.server)
        return d(w, a, l, y, f), function() {
          return i.removeStyles(w, l);
        };
    }, [w, a, l, y, f]), null;
  }
  function d(a, l, f, y, w) {
    if (i.isStatic)
      i.renderStyles(a, zo, f, w);
    else {
      var v = Le({}, l, { theme: Jr(l, y, c.defaultProps) });
      i.renderStyles(a, v, f, w);
    }
  }
  return process.env.NODE_ENV !== "production" && Kr(s), et.memo(c);
}
function Wt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ht.apply(void 0, [e].concat(t)).join(""), s = Tn(o);
  return new Ur(s, o);
}
var zt = function() {
  return Ke(ht);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const b = rn, bt = "reactSchedulerOutsideWrapper", Ie = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", bs = xs`

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
const $e = 50, je = 24, xt = 16, Qe = 40, pt = Qe + xt + je, mt = 84, me = 56, Ye = 196, Oe = 12, Ae = 50, gt = 24, Ct = 16, on = 40, Cs = gt + Ct + on, tr = 24, nr = 52, Re = {
  topRow: `600 14px ${Ie}`,
  middleRow: `400 10px ${Ie}`,
  bottomRow: {
    name: `600 14px ${Ie}`,
    number: `600 10px ${Ie}`,
    hoursInDay: `400 9px ${Ie}`
  }
}, dt = 3, Ms = 1.6, ks = 4.5, sn = 12, Rt = 24, $s = "reactSchedulerCanvasHeaderWrapper", eo = "reactSchedulerCanvasWrapper", Ne = bt, Ds = 4, An = 48, Xe = 5, Es = 40, rr = 8, Pn = je / 2 + 2, to = xt / 2 + je + 1, or = 2, De = 60, Pe = 21, no = 58;
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
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", y = "quarter", w = "year", v = "date", M = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, Z = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(_) {
      var D = ["th", "st", "nd", "rd"], T = _ % 100;
      return "[" + _ + (D[(T - 20) % 10] || D[T] || D[0]) + "]";
    } }, H = function(_, D, T) {
      var R = String(_);
      return !R || R.length >= D ? _ : "" + Array(D + 1 - R.length).join(T) + _;
    }, E = { s: H, z: function(_) {
      var D = -_.utcOffset(), T = Math.abs(D), R = Math.floor(T / 60), I = T % 60;
      return (D <= 0 ? "+" : "-") + H(R, 2, "0") + ":" + H(I, 2, "0");
    }, m: function _(D, T) {
      if (D.date() < T.date())
        return -_(T, D);
      var R = 12 * (T.year() - D.year()) + (T.month() - D.month()), I = D.clone().add(R, f), q = T - I < 0, ee = D.clone().add(R + (q ? -1 : 1), f);
      return +(-(R + (T - I) / (q ? I - ee : ee - I)) || 0);
    }, a: function(_) {
      return _ < 0 ? Math.ceil(_) || 0 : Math.floor(_);
    }, p: function(_) {
      return { M: f, y: w, w: l, d: a, D: v, h: d, m: c, s: i, ms: s, Q: y }[_] || String(_ || "").toLowerCase().replace(/s$/, "");
    }, u: function(_) {
      return _ === void 0;
    } }, u = "en", g = {};
    g[u] = Z;
    var x = function(_) {
      return _ instanceof U;
    }, A = function _(D, T, R) {
      var I;
      if (!D)
        return u;
      if (typeof D == "string") {
        var q = D.toLowerCase();
        g[q] && (I = q), T && (g[q] = T, I = q);
        var ee = D.split("-");
        if (!I && ee.length > 1)
          return _(ee[0]);
      } else {
        var se = D.name;
        g[se] = D, I = se;
      }
      return !R && I && (u = I), I || !R && u;
    }, P = function(_, D) {
      if (x(_))
        return _.clone();
      var T = typeof D == "object" ? D : {};
      return T.date = _, T.args = arguments, new U(T);
    }, O = E;
    O.l = A, O.i = x, O.w = function(_, D) {
      return P(_, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var U = function() {
      function _(T) {
        this.$L = A(T.locale, null, !0), this.parse(T);
      }
      var D = _.prototype;
      return D.parse = function(T) {
        this.$d = function(R) {
          var I = R.date, q = R.utc;
          if (I === null)
            return new Date(NaN);
          if (O.u(I))
            return new Date();
          if (I instanceof Date)
            return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var ee = I.match(p);
            if (ee) {
              var se = ee[2] - 1 || 0, ae = (ee[7] || "0").substring(0, 3);
              return q ? new Date(Date.UTC(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, ae)) : new Date(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, ae);
            }
          }
          return new Date(I);
        }(T), this.$x = T.x || {}, this.init();
      }, D.init = function() {
        var T = this.$d;
        this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
      }, D.$utils = function() {
        return O;
      }, D.isValid = function() {
        return this.$d.toString() !== M;
      }, D.isSame = function(T, R) {
        var I = P(T);
        return this.startOf(R) <= I && I <= this.endOf(R);
      }, D.isAfter = function(T, R) {
        return P(T) < this.startOf(R);
      }, D.isBefore = function(T, R) {
        return this.endOf(R) < P(T);
      }, D.$g = function(T, R, I) {
        return O.u(T) ? this[R] : this.set(I, T);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(T, R) {
        var I = this, q = !!O.u(R) || R, ee = O.p(T), se = function(C, j) {
          var J = O.w(I.$u ? Date.UTC(I.$y, j, C) : new Date(I.$y, j, C), I);
          return q ? J : J.endOf(a);
        }, ae = function(C, j) {
          return O.w(I.toDate()[C].apply(I.toDate("s"), (q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(j)), I);
        }, N = this.$W, W = this.$M, X = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case w:
            return q ? se(1, 0) : se(31, 11);
          case f:
            return q ? se(1, W) : se(0, W + 1);
          case l:
            var S = this.$locale().weekStart || 0, Y = (N < S ? N + 7 : N) - S;
            return se(q ? X - Y : X + (6 - Y), W);
          case a:
          case v:
            return ae(te + "Hours", 0);
          case d:
            return ae(te + "Minutes", 1);
          case c:
            return ae(te + "Seconds", 2);
          case i:
            return ae(te + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, D.endOf = function(T) {
        return this.startOf(T, !1);
      }, D.$set = function(T, R) {
        var I, q = O.p(T), ee = "set" + (this.$u ? "UTC" : ""), se = (I = {}, I[a] = ee + "Date", I[v] = ee + "Date", I[f] = ee + "Month", I[w] = ee + "FullYear", I[d] = ee + "Hours", I[c] = ee + "Minutes", I[i] = ee + "Seconds", I[s] = ee + "Milliseconds", I)[q], ae = q === a ? this.$D + (R - this.$W) : R;
        if (q === f || q === w) {
          var N = this.clone().set(v, 1);
          N.$d[se](ae), N.init(), this.$d = N.set(v, Math.min(this.$D, N.daysInMonth())).$d;
        } else
          se && this.$d[se](ae);
        return this.init(), this;
      }, D.set = function(T, R) {
        return this.clone().$set(T, R);
      }, D.get = function(T) {
        return this[O.p(T)]();
      }, D.add = function(T, R) {
        var I, q = this;
        T = Number(T);
        var ee = O.p(R), se = function(W) {
          var X = P(q);
          return O.w(X.date(X.date() + Math.round(W * T)), q);
        };
        if (ee === f)
          return this.set(f, this.$M + T);
        if (ee === w)
          return this.set(w, this.$y + T);
        if (ee === a)
          return se(1);
        if (ee === l)
          return se(7);
        var ae = (I = {}, I[c] = r, I[d] = o, I[i] = t, I)[ee] || 1, N = this.$d.getTime() + T * ae;
        return O.w(N, this);
      }, D.subtract = function(T, R) {
        return this.add(-1 * T, R);
      }, D.format = function(T) {
        var R = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || M;
        var q = T || "YYYY-MM-DDTHH:mm:ssZ", ee = O.z(this), se = this.$H, ae = this.$m, N = this.$M, W = I.weekdays, X = I.months, te = function(j, J, z, m) {
          return j && (j[J] || j(R, q)) || z[J].slice(0, m);
        }, S = function(j) {
          return O.s(se % 12 || 12, j, "0");
        }, Y = I.meridiem || function(j, J, z) {
          var m = j < 12 ? "AM" : "PM";
          return z ? m.toLowerCase() : m;
        }, C = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: N + 1, MM: O.s(N + 1, 2, "0"), MMM: te(I.monthsShort, N, X, 3), MMMM: te(X, N), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: te(I.weekdaysMin, this.$W, W, 2), ddd: te(I.weekdaysShort, this.$W, W, 3), dddd: W[this.$W], H: String(se), HH: O.s(se, 2, "0"), h: S(1), hh: S(2), a: Y(se, ae, !0), A: Y(se, ae, !1), m: String(ae), mm: O.s(ae, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: ee };
        return q.replace(L, function(j, J) {
          return J || C[j] || ee.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(T, R, I) {
        var q, ee = O.p(R), se = P(T), ae = (se.utcOffset() - this.utcOffset()) * r, N = this - se, W = O.m(this, se);
        return W = (q = {}, q[w] = W / 12, q[f] = W, q[y] = W / 3, q[l] = (N - ae) / 6048e5, q[a] = (N - ae) / 864e5, q[d] = N / o, q[c] = N / r, q[i] = N / t, q)[ee] || N, I ? W : O.a(W);
      }, D.daysInMonth = function() {
        return this.endOf(f).$D;
      }, D.$locale = function() {
        return g[this.$L];
      }, D.locale = function(T, R) {
        if (!T)
          return this.$L;
        var I = this.clone(), q = A(T, R, !0);
        return q && (I.$L = q), I;
      }, D.clone = function() {
        return O.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, _;
    }(), Q = U.prototype;
    return P.prototype = Q, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", w], ["$D", v]].forEach(function(_) {
      Q[_[1]] = function(D) {
        return this.$g(D, _[0], _[1]);
      };
    }), P.extend = function(_, D) {
      return _.$i || (_(D, U, P), _.$i = !0), P;
    }, P.locale = A, P.isDayjs = x, P.unix = function(_) {
      return P(1e3 * _);
    }, P.en = g[u], P.Ls = g, P.p = {}, P;
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
let Tt = null;
const Ts = (e) => {
  if (Tt)
    return Tt;
  const n = document.createElement("canvas");
  n.width = 12, n.height = 12;
  const t = n.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Tt = e.createPattern(n, "repeat"), Tt) : null;
}, On = (e, n, t, r, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, me), c && !s) {
    const d = Ts(e);
    d && (e.fillStyle = d, e.fillRect(n, t, r, me));
  }
  e.strokeRect(n + 0.5, t + 0.5, r, me);
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
        d * $e,
        i * me + c,
        $e,
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
  let i = 0, c = -(r.dayOfMonth - 1) * Oe;
  const d = n * me + s.length * Pe;
  for (let a = 0; a <= t; a++) {
    const f = $(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame($(), "week");
    for (let y = 0; y < n; y++) {
      const w = In(y, s);
      On(e, i, y * me + w, mt, !0, f, o);
    }
    i += mt;
  }
  for (let a = 0; a < t; a++) {
    const l = ro(r, a) * Oe;
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
        c * me + d,
        Ae,
        Yn(l),
        f,
        o
      );
    }
  }
}, Is = (e, n, t, r) => {
  const o = t * me + n * Pe, s = e.canvas.width, i = o + Pe / 2;
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
var an = {}, Rs = {
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
        var y = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), w = this.diff(y, t, !0);
        return w < 0 ? i(this).startOf("week").week() : Math.ceil(w);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(Rs);
const Ns = an;
var cn = {}, Hs = {
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
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Hs);
const Ws = cn;
var ln = {}, zs = {
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
})(zs);
const Fs = ln;
var dn = {}, Bs = {
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
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), f = (d = d || "()")[0] === "(", y = d[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(l, c) : !this.isAfter(l, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(Bs);
const js = dn;
var un = {}, Zs = {
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
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, w = function(u) {
      return u instanceof E;
    }, v = function(u, g, x) {
      return new E(u, x, g.$l);
    }, M = function(u) {
      return r.p(u) + "s";
    }, p = function(u) {
      return u < 0;
    }, L = function(u) {
      return p(u) ? Math.ceil(u) : Math.floor(u);
    }, Z = function(u) {
      return Math.abs(u);
    }, H = function(u, g) {
      return u ? p(u) ? { negative: !0, format: "" + Z(u) + g } : { negative: !1, format: "" + u + g } : { negative: !1, format: "" };
    }, E = function() {
      function u(x, A, P) {
        var O = this;
        if (this.$d = {}, this.$l = P, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), A)
          return v(x * y[M(A)], this);
        if (typeof x == "number")
          return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object")
          return Object.keys(x).forEach(function(_) {
            O.$d[M(_)] = x[_];
          }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var U = x.match(f);
          if (U) {
            var Q = U.slice(2).map(function(_) {
              return _ != null ? Number(_) : 0;
            });
            return this.$d.years = Q[0], this.$d.months = Q[1], this.$d.weeks = Q[2], this.$d.days = Q[3], this.$d.hours = Q[4], this.$d.minutes = Q[5], this.$d.seconds = Q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var g = u.prototype;
      return g.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(A, P) {
          return A + (x.$d[P] || 0) * y[P];
        }, 0);
      }, g.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = L(x / a), x %= a, this.$d.months = L(x / l), x %= l, this.$d.days = L(x / c), x %= c, this.$d.hours = L(x / i), x %= i, this.$d.minutes = L(x / s), x %= s, this.$d.seconds = L(x / o), x %= o, this.$d.milliseconds = x;
      }, g.toISOString = function() {
        var x = H(this.$d.years, "Y"), A = H(this.$d.months, "M"), P = +this.$d.days || 0;
        this.$d.weeks && (P += 7 * this.$d.weeks);
        var O = H(P, "D"), U = H(this.$d.hours, "H"), Q = H(this.$d.minutes, "M"), _ = this.$d.seconds || 0;
        this.$d.milliseconds && (_ += this.$d.milliseconds / 1e3);
        var D = H(_, "S"), T = x.negative || A.negative || O.negative || U.negative || Q.negative || D.negative, R = U.format || Q.format || D.format ? "T" : "", I = (T ? "-" : "") + "P" + x.format + A.format + O.format + R + U.format + Q.format + D.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, g.toJSON = function() {
        return this.toISOString();
      }, g.format = function(x) {
        var A = x || "YYYY-MM-DDTHH:mm:ss", P = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return A.replace(d, function(O, U) {
          return U || String(P[O]);
        });
      }, g.as = function(x) {
        return this.$ms / y[M(x)];
      }, g.get = function(x) {
        var A = this.$ms, P = M(x);
        return P === "milliseconds" ? A %= 1e3 : A = P === "weeks" ? L(A / y[P]) : this.$d[P], A === 0 ? 0 : A;
      }, g.add = function(x, A, P) {
        var O;
        return O = A ? x * y[M(A)] : w(x) ? x.$ms : v(x, this).$ms, v(this.$ms + O * (P ? -1 : 1), this);
      }, g.subtract = function(x, A) {
        return this.add(x, A, !0);
      }, g.locale = function(x) {
        var A = this.clone();
        return A.$l = x, A;
      }, g.clone = function() {
        return v(this.$ms, this);
      }, g.humanize = function(x) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
      }, g.milliseconds = function() {
        return this.get("milliseconds");
      }, g.asMilliseconds = function() {
        return this.as("milliseconds");
      }, g.seconds = function() {
        return this.get("seconds");
      }, g.asSeconds = function() {
        return this.as("seconds");
      }, g.minutes = function() {
        return this.get("minutes");
      }, g.asMinutes = function() {
        return this.as("minutes");
      }, g.hours = function() {
        return this.get("hours");
      }, g.asHours = function() {
        return this.as("hours");
      }, g.days = function() {
        return this.get("days");
      }, g.asDays = function() {
        return this.as("days");
      }, g.weeks = function() {
        return this.get("weeks");
      }, g.asWeeks = function() {
        return this.as("weeks");
      }, g.months = function() {
        return this.get("months");
      }, g.asMonths = function() {
        return this.as("months");
      }, g.years = function() {
        return this.get("years");
      }, g.asYears = function() {
        return this.as("years");
      }, u;
    }();
    return function(u, g, x) {
      t = x, r = x().$utils(), x.duration = function(O, U) {
        var Q = x.locale();
        return v(O, { $l: Q }, U);
      }, x.isDuration = w;
      var A = g.prototype.add, P = g.prototype.subtract;
      g.prototype.add = function(O, U) {
        return w(O) && (O = O.asMilliseconds()), A.bind(this)(O, U);
      }, g.prototype.subtract = function(O, U) {
        return w(O) && (O = O.asMilliseconds()), P.bind(this)(O, U);
      };
    };
  });
})(Zs);
const Vs = un;
var Gs = "Expected a function", ir = 0 / 0, Xs = "[object Symbol]", Us = /^\s+|\s+$/g, Ks = /^[-+]0x[0-9a-f]+$/i, Js = /^0b[01]+$/i, qs = /^0o[0-7]+$/i, Qs = parseInt, ei = typeof Te == "object" && Te && Te.Object === Object && Te, ti = typeof self == "object" && self && self.Object === Object && self, ni = ei || ti || Function("return this")(), ri = Object.prototype, oi = ri.toString, si = Math.max, ii = Math.min, Zt = function() {
  return ni.Date.now();
};
function ai(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(Gs);
  n = ar(n) || 0, fn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? si(ar(t.maxWait) || 0, n) : s, y = "trailing" in t ? !!t.trailing : y);
  function w(g) {
    var x = r, A = o;
    return r = o = void 0, a = g, i = e.apply(A, x), i;
  }
  function v(g) {
    return a = g, c = setTimeout(L, n), l ? w(g) : i;
  }
  function M(g) {
    var x = g - d, A = g - a, P = n - x;
    return f ? ii(P, s - A) : P;
  }
  function p(g) {
    var x = g - d, A = g - a;
    return d === void 0 || x >= n || x < 0 || f && A >= s;
  }
  function L() {
    var g = Zt();
    if (p(g))
      return Z(g);
    c = setTimeout(L, M(g));
  }
  function Z(g) {
    return c = void 0, y && r ? w(g) : (r = o = void 0, i);
  }
  function H() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function E() {
    return c === void 0 ? i : Z(Zt());
  }
  function u() {
    var g = Zt(), x = p(g);
    if (r = arguments, o = this, d = g, x) {
      if (c === void 0)
        return v(d);
      if (f)
        return c = setTimeout(L, n), w(d);
    }
    return c === void 0 && (c = setTimeout(L, n)), i;
  }
  return u.cancel = H, u.flush = E, u;
}
function fn(e) {
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
  if (fn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = fn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Us, "");
  var t = Js.test(e);
  return t || qs.test(e) ? Qs(e.slice(2), t ? 2 : 8) : Ks.test(e) ? ir : +e;
}
var hn = ai;
const Yt = [0, 1, 2];
var Mt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Mt || {});
const so = (e) => Yt.includes(e), ct = (e) => {
  var r;
  const t = (((r = document.getElementById(Ne)) == null ? void 0 : r.clientWidth) || 0) - Ye;
  switch (e) {
    case 1:
      return Math.ceil(t / $e) * dt;
    case 2:
      return Math.ceil(t / Ae) * dt;
    default:
      return Math.ceil(t / mt) * dt;
  }
}, pn = (e) => ct(e) / dt, Ln = (e, n) => {
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
}, di = (e, n) => {
  const t = Ln(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Rn = () => {
  var t;
  return ((((t = document.getElementById(Ne)) == null ? void 0 : t.clientWidth) || 0) - Ye) * dt;
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
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = pe(d), [y, w] = pe($()), [v, M] = pe(!1), [p, L] = pe(ct(l)), Z = Yt[l] !== Yt[Yt.length - 1], H = l !== 0, E = ke(() => di(y, l), [y, l]), u = Ln(y, l).startDate, g = $(u).dayOfYear(), x = oo(u), A = ge(null), P = ge(!1), O = ge(null), [U, Q] = pe([{ x: 0, y: 0 }]), _ = de(
    (Y, C = "auto") => {
      var J, z, m, G;
      const j = Rn();
      switch (Y) {
        case "back":
          return (J = A.current) == null ? void 0 : J.scrollTo({
            behavior: C,
            left: j / 3
          });
        case "forward":
          return (z = A.current) == null ? void 0 : z.scrollTo({
            behavior: C,
            left: j / 3
          });
        case "middle": {
          const k = j / dt / 4;
          return (m = A.current) == null ? void 0 : m.scrollTo({
            behavior: C,
            left: j / 2 - k
          });
        }
        default:
          return (G = A.current) == null ? void 0 : G.scrollTo({
            behavior: C,
            left: j / 2
          });
      }
    },
    []
  ), D = (Y) => {
    Q(Y);
  }, T = de(
    (Y) => {
      const C = pn(l);
      let j;
      switch (l) {
        case 0:
          j = C * 7;
          break;
        case 1:
          j = C;
          break;
        case 2:
          j = Math.ceil(C / Rt);
          break;
      }
      hn(() => {
        switch ((Y === "forward" || Y === "back") && (P.current = !0), O.current = Y, Y) {
          case "back":
            w((z) => z.subtract(j, "days"));
            break;
          case "forward":
            w((z) => z.add(j, "days"));
            break;
          case "middle":
            w($());
            break;
        }
        s == null || s(E);
      }, 300)();
    },
    [s, E, l]
  );
  ve(() => {
    O.current && (_(O.current), O.current = null);
  }, [y, _]), ve(() => {
    A.current = document.getElementById(Ne), L(ct(l));
  }, [l]), ve(() => {
    const Y = () => L(ct(l));
    return window.addEventListener("resize", Y), () => window.removeEventListener("resize", Y);
  }, [l]), ve(() => {
    s == null || s(E);
  }, [s, E]), ve(() => {
    M(!1);
  }, [o]), ve(() => {
    v || (_("middle"), M(!0), w(o));
  }, [o, v, _]);
  const R = () => {
    t || (w(
      (Y) => l === 2 ? Y.add(tr, "hours") : Y.add(or, "weeks")
    ), s == null || s(E));
  }, I = de(() => {
    t || T("forward");
  }, [t, T]), q = () => {
    t || (w(
      (Y) => l === 2 ? Y.subtract(tr, "hours") : Y.subtract(or, "weeks")
    ), s == null || s(E));
  }, ee = de(() => {
    !v || t || T("back");
  }, [v, t, T]), se = de(() => {
    t || T("middle");
  }, [t, T]), ae = de(
    (Y) => {
      if (t)
        return;
      const C = $(Y).startOf("day");
      C.isValid() && (O.current = "middle", w(C), s == null || s(E));
    },
    [t, s, E]
  ), N = () => X(l + 1), W = () => X(l - 1), X = (Y) => {
    so(Y) && (f(Y), L(ct(Y)), s == null || s(E));
  }, te = () => i == null ? void 0 : i(), { Provider: S } = io;
  return /* @__PURE__ */ h(
    S,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: R,
        handleScrollNext: I,
        handleGoPrev: q,
        handleScrollPrev: ee,
        handleGoToday: se,
        goToDate: ae,
        zoomIn: N,
        zoomOut: W,
        setZoom: X,
        zoom: l,
        isNextZoom: Z,
        isPrevZoom: H,
        date: y,
        isLoading: t,
        cols: p,
        startDate: x,
        dayOfYear: g,
        toggleDisplayActiveUnits: te,
        tilesCoords: U,
        updateTilesCoords: D,
        recordsThreshold: a,
        onClearFilterData: c,
        suppressNextSlideRef: P
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
    const s = o * me + r * Pe;
    if (e >= s + Pe)
      r++;
    else if (e >= s)
      return o * me + r * Pe - r * Pe;
  }
  return t - r * Pe;
}, fi = 5, cr = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > fi;
}, lt = (e, n, t) => {
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
  const a = n ? n.length > 0 && n[0].data.length > 0 && !Array.isArray(n[0].data[0]) ? n.map((Y) => ({ ...Y, data: [Y.data] })) : n : e, {
    enabled: l = !0,
    isDraggable: f,
    resourceOnly: y = !1,
    isValidDrop: w
  } = i, [v, M] = pe("idle"), [p, L] = pe(null), [Z, H] = pe({ x: 0, y: 0 }), [E, u] = pe({ width: 0, height: 48 }), [g, x] = pe(null), [A, P] = pe(!0), O = ge({ x: 0, y: 0 }), U = ge({ x: 0, y: 0 }), Q = ge({ x: 0, y: 0 }), _ = ge(null), D = ge(null), T = ge(0), R = ge(null), I = de(
    (Y) => !l || Y.draggable === !1 ? !1 : f ? f(Y) : !0,
    [l, f]
  ), q = de(
    (Y, C) => {
      const j = co(C, d), J = Math.floor(j / me);
      let z;
      switch (t) {
        case 0:
          z = Oe * 7;
          break;
        case 1:
          z = $e;
          break;
        case 2:
          z = Ae;
          break;
        default:
          z = $e;
      }
      const m = Math.floor(Y / z);
      let G;
      const k = $().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          G = k.add(m * 7, "days").toDate();
          break;
        case 1:
          G = k.add(m, "days").toDate();
          break;
        case 2:
          G = k.add(m, "hours").toDate();
          break;
        default:
          G = k.toDate();
      }
      return { snappedDate: G, snappedResourceIndex: J };
    },
    [t, r, d]
  ), ee = de(
    (Y, C, j, J) => {
      const z = [], m = C.getTime(), G = j.getTime(), k = a.find((ne) => ne.id === J);
      if (!k)
        return z;
      const B = [];
      for (const ne of k.data)
        Array.isArray(ne) ? B.push(...ne) : B.push(ne);
      for (const ne of B) {
        if (ne.segmentId === Y.segmentId)
          continue;
        const K = ne.startDate.getTime(), ce = ne.endDate.getTime();
        if (m >= K && m < ce || G > K && G <= ce || m <= K && G >= ce) {
          const ue = new Date(Math.max(m, K)), ie = new Date(Math.min(G, ce)), he = ie.getTime() - ue.getTime();
          z.push({
            event: ne,
            conflictStart: ue,
            conflictEnd: ie,
            overlapDuration: he
          });
        }
      }
      return z;
    },
    [a]
  ), se = de(
    (Y, C, j, J) => {
      const z = [], m = C.getTime(), G = j.getTime(), k = $(C).format("YYYY-MM-DD"), B = a.find((K) => K.id === J);
      if (!B)
        return z;
      const ne = [];
      for (const K of B.data)
        Array.isArray(K) ? ne.push(...K) : ne.push(K);
      for (const K of ne) {
        if (K.segmentId === Y.segmentId)
          continue;
        const ce = K.startDate.getTime(), fe = K.endDate.getTime(), ue = $(K.startDate).format("YYYY-MM-DD"), ie = $(K.endDate).format("YYYY-MM-DD"), he = $(j).format("YYYY-MM-DD");
        if (!(ue === k || ie === k || ue === he || ie === he || $(K.startDate).isBefore(C, "day") && $(K.endDate).isAfter(j, "day")) || m >= ce && m < fe || G > ce && G <= fe || m <= ce && G >= fe)
          continue;
        let re, le;
        fe <= m ? (re = m - fe, le = "before") : (re = ce - G, le = "after"), z.push({
          event: K,
          timeGap: re,
          position: le
        });
      }
      return z.sort((K, ce) => K.timeGap - ce.timeGap);
    },
    [a]
  ), ae = de(
    (Y, C, j) => {
      const J = q(C, j);
      let z, m;
      if (y)
        z = Y.startDate, m = Y.endDate;
      else {
        const fe = $(Y.endDate).diff(Y.startDate);
        z = J.snappedDate, m = $(z).add(fe, "milliseconds").toDate();
      }
      let G = 0, k = "", B;
      for (const fe of e) {
        const ue = Math.max(fe.data.length, 1);
        if (J.snappedResourceIndex < G + ue) {
          k = fe.id, B = fe.capacity;
          break;
        }
        G += ue;
      }
      if (!k)
        return null;
      let ne = !0;
      B !== void 0 && Y.totalPassengers !== void 0 && (ne = Y.totalPassengers <= B);
      const K = ee(Y, z, m, k), ce = K.length === 0 ? se(Y, z, m, k) : [];
      return {
        startDate: z,
        endDate: m,
        resourceId: k,
        resourceIndex: J.snappedResourceIndex,
        resourceCapacity: B,
        hasCapacity: ne,
        conflicts: K,
        hasConflict: K.length > 0,
        nearbyEvents: ce
      };
    },
    [q, e, y, ee, se]
  ), N = de(
    (Y, C) => {
      if (!s)
        return;
      const j = Date.now();
      if (j - T.current < 100)
        return;
      T.current = j;
      const J = {
        event: Y,
        currentStartDate: C.startDate,
        currentEndDate: C.endDate,
        currentResourceId: C.resourceId,
        conflicts: C.conflicts
      };
      s(J);
    },
    [s]
  ), W = de(
    (Y, C) => {
      if (!I(Y) || !c.current)
        return;
      C.preventDefault(), C.stopPropagation();
      const j = C.target.closest('[style*="left"]');
      let J = 0, z = 0;
      j && j.style.left && j.style.top && (J = parseInt(j.style.left), z = parseInt(j.style.top));
      const m = lt(
        C.clientX,
        C.clientY,
        c.current
      );
      O.current = { x: J, y: z }, U.current = { x: C.clientX, y: C.clientY }, Q.current = {
        x: m.x - J,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, R.current = {
        startDate: Y.startDate,
        endDate: Y.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const B of e) {
        for (const ne of B.data)
          if (ne.some((K) => K.segmentId === Y.segmentId)) {
            R.current.resourceId = B.id;
            break;
          }
        if (R.current.resourceId)
          break;
      }
      L(Y), M("potential"), H({ x: J, y: z });
      let G = 100, k = 48;
      if (j) {
        const B = j.getBoundingClientRect();
        G = B.width, k = B.height;
      }
      u({ width: G, height: k });
    },
    [I, c, e, t]
  ), X = de(
    (Y) => {
      if (!c.current)
        return;
      let C = c.current;
      for (; C && C !== document.body; ) {
        const K = window.getComputedStyle(C);
        if (C.scrollHeight > C.clientHeight && (K.overflowY === "auto" || K.overflowY === "scroll" || K.overflow === "auto" || K.overflow === "scroll"))
          break;
        C = C.parentElement;
      }
      (!C || C === document.body) && (C = document.documentElement);
      const j = C.getBoundingClientRect(), J = Y.clientY, z = 50, m = 12, G = J - j.top, k = j.bottom - J;
      let B = !1, ne = 0;
      G < z && G > 0 ? (B = !0, ne = -m * (1 - G / z)) : k < z && k > 0 && (B = !0, ne = m * (1 - k / z)), B ? (D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => {
        C.scrollTop += ne, v === "dragging" && X(Y);
      })) : D.current && (cancelAnimationFrame(D.current), D.current = null);
    },
    [c, v]
  ), te = de(
    (Y) => {
      if (v === "idle" || v === "animating" || !p || !c.current)
        return;
      const C = { x: Y.clientX, y: Y.clientY };
      if (v === "potential")
        if (cr(U.current, C))
          M("dragging");
        else
          return;
      X(Y);
      const j = lt(
        Y.clientX,
        Y.clientY,
        c.current
      );
      _.current && cancelAnimationFrame(_.current), _.current = requestAnimationFrame(() => {
        const J = {
          x: j.x - Q.current.x,
          y: j.y - Q.current.y
        };
        H(J);
        const z = ae(p, j.x, j.y);
        if (z && w) {
          const m = {
            event: p,
            currentStartDate: z.startDate,
            currentEndDate: z.endDate,
            currentResourceId: z.resourceId,
            conflicts: z.conflicts
          };
          z.hasConflict = !w(m);
        }
        if (x(z), z) {
          const m = z.hasCapacity !== !1;
          P(m), N(p, z);
        }
      });
    },
    [v, p, c, ae, N, w, X]
  ), S = de(
    async (Y) => {
      if (v === "idle" || v === "animating")
        return;
      const C = { x: Y.clientX, y: Y.clientY };
      if (!cr(U.current, C) || v === "potential") {
        M("idle"), L(null), x(null);
        return;
      }
      if (!p || !g || !R.current) {
        M("idle"), L(null), x(null);
        return;
      }
      if (g.hasCapacity === !1) {
        P(!1), M("animating"), H(O.current), setTimeout(() => {
          M("idle"), L(null), x(null), P(!0);
        }, 300);
        return;
      }
      const J = {
        event: p,
        originalStartDate: R.current.startDate,
        originalEndDate: R.current.endDate,
        originalResourceId: R.current.resourceId,
        newStartDate: g.startDate,
        newEndDate: g.endDate,
        newResourceId: g.resourceId,
        hasConflict: g.hasConflict,
        conflicts: g.conflicts
      };
      let z = !0;
      if (o)
        try {
          const m = o(J);
          z = m instanceof Promise ? await m : m;
        } catch {
          z = !1;
        }
      z ? (P(!0), M("idle"), L(null), x(null)) : (P(!1), M("animating"), H(O.current), setTimeout(() => {
        M("idle"), L(null), x(null), P(!0);
      }, 300));
    },
    [v, p, g, o, w]
  );
  return ve(() => {
    if (v === "potential" || v === "dragging") {
      const Y = (j) => te(j), C = (j) => S(j);
      return document.addEventListener("mousemove", Y), document.addEventListener("mouseup", C), () => {
        document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", C);
      };
    } else
      return () => {
      };
  }, [v, te, S]), ve(() => () => {
    _.current && (cancelAnimationFrame(_.current), _.current = null), D.current && (cancelAnimationFrame(D.current), D.current = null);
  }, []), ve(() => {
    (v === "idle" || v === "animating") && (_.current && (cancelAnimationFrame(_.current), _.current = null), D.current && (cancelAnimationFrame(D.current), D.current = null));
  }, [v]), ve(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (M("animating"), H(O.current), setTimeout(() => {
      M("idle"), L(null), x(null);
    }, 300)) : (M("idle"), L(null), x(null)));
  }, [t]), ve(() => {
    if ((v === "dragging" || v === "potential") && p) {
      let Y = !1;
      for (const C of e) {
        for (const j of C.data)
          if (j.some((J) => J.segmentId === p.segmentId)) {
            Y = !0;
            break;
          }
        if (Y)
          break;
      }
      Y || (v === "dragging" ? (M("animating"), H(O.current), setTimeout(() => {
        M("idle"), L(null), x(null);
      }, 300)) : (M("idle"), L(null), x(null)));
    }
  }, [e, v, p]), {
    dragState: v,
    draggedEvent: p,
    ghostPosition: Z,
    ghostDimensions: E,
    dropTarget: g,
    isValidDrop: A,
    handleDragStart: W,
    isDraggable: I,
    draggingEventId: (p == null ? void 0 : p.segmentId) || null,
    resourceOnly: y
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
  const { enabled: l = !1, isSelectable: f } = i, y = l && !!o, w = de((m) => {
    let G = 0;
    for (const k of a)
      k <= m && G++;
    return m * me + G * Pe;
  }, [a]), [v, M] = pe("idle"), [p, L] = pe(null), [Z, H] = pe(null), [E, u] = pe(null), [g, x] = pe(!1), [A, P] = pe([]), [O, U] = pe(!1), Q = ge(null), _ = ge(null), D = ge(null), T = ge(null), R = de(() => {
    switch (t) {
      case 0:
        return Oe * 7;
      case 1:
        return $e;
      case 2:
        return Ae;
      default:
        return $e;
    }
  }, [t]), I = de(
    (m) => {
      const G = R(), k = Math.floor(m / G), B = $().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return B.add(k * 7, "days").toDate();
        case 1:
          return B.add(k, "days").toDate();
        case 2:
          return B.add(k, "hours").toDate();
        default:
          return B.toDate();
      }
    },
    [t, r, R]
  ), q = de(
    (m) => {
      const G = co(m, a), k = Math.floor(G / me);
      let B = 0;
      for (const ne of e) {
        const K = Math.max(ne.data.length, 1);
        if (k < B + K)
          return {
            resourceId: ne.id,
            resourceIndex: k,
            resourceLabel: ne.label
          };
        B += K;
      }
      return null;
    },
    [e, a]
  ), ee = de(
    (m) => {
      const G = R();
      return Math.floor(m / G) * G;
    },
    [R]
  ), se = de(
    (m, G, k, B = []) => {
      const ne = [], ce = (n || e).find((ie) => ie.id === m), fe = G.getTime(), ue = k.getTime();
      if (ce) {
        const ie = ce.data[0], he = ie && Array.isArray(ie) ? ce.data.flat() : ce.data;
        for (const ye of he) {
          const V = new Date(ye.startDate).getTime(), re = new Date(ye.endDate).getTime();
          if (fe < re && ue > V) {
            const le = new Date(Math.max(fe, V)), Ce = new Date(Math.min(ue, re)), Me = Ce.getTime() - le.getTime();
            ne.push({
              event: ye,
              conflictStart: le,
              conflictEnd: Ce,
              overlapDuration: Me
            });
          }
        }
      }
      for (const ie of B) {
        if (ie.resourceId !== m)
          continue;
        const he = ie.startDate.getTime(), ye = ie.endDate.getTime();
        if (fe < ye && ue > he) {
          const V = new Date(Math.max(fe, he)), re = new Date(Math.min(ue, ye)), le = re.getTime() - V.getTime(), Ce = {
            segmentId: `pending-${ie.startDate.getTime()}`,
            reservationId: `pending-${ie.startDate.getTime()}`,
            startDate: ie.startDate,
            endDate: ie.endDate,
            occupancy: 0,
            title: `New Event (${ie.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          ne.push({
            event: Ce,
            conflictStart: V,
            conflictEnd: re,
            overlapDuration: le
          });
        }
      }
      return ne;
    },
    [e, n]
  ), ae = de(
    (m) => {
      if (!y || d || !c.current || m.button !== 0)
        return;
      const G = m.target;
      if (G.closest("[data-segment-id]") || G.closest("[data-multi-select-ui]"))
        return;
      const k = lt(m.clientX, m.clientY, c.current), B = q(k.y);
      if (!B)
        return;
      Q.current = { x: m.clientX, y: m.clientY }, _.current = B.resourceIndex;
      const ne = ee(k.x), K = R(), ce = w(B.resourceIndex);
      L(k), H(k), u({
        x: ne,
        y: ce,
        width: K,
        height: me
      }), M("selecting");
    },
    [y, d, c, q, ee, R, w]
  ), N = de(
    (m) => {
      H(m);
      const G = R(), k = ee((p == null ? void 0 : p.x) || 0), B = ee(m.x), ne = w(_.current), K = Math.min(k, B), ce = Math.max(k, B) + G;
      u({ x: K, y: ne, width: ce - K, height: me });
    },
    [p, R, ee, w]
  ), W = de(() => {
    T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), X = de(
    (m, G) => {
      const k = document.getElementById(Ne);
      if (!k || !c.current)
        return;
      const B = k.getBoundingClientRect(), ne = 60, K = 12, ce = m - (B.left + Ye), fe = B.right - m;
      let ue = 0;
      ce < ne ? ue = -K * (1 - Math.max(0, ce) / ne) : fe < ne && (ue = K * (1 - Math.max(0, fe) / ne)), W(), ue !== 0 && (T.current = requestAnimationFrame(() => {
        k.scrollLeft += ue, N(lt(m, G, c.current)), X(m, G);
      }));
    },
    [c, N, W]
  ), te = de(
    (m) => {
      if (v !== "selecting" || !c.current || _.current === null)
        return;
      const G = lt(m.clientX, m.clientY, c.current);
      D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => N(G)), X(m.clientX, m.clientY);
    },
    [v, c, N, X]
  ), S = de(
    (m) => {
      if (v !== "selecting")
        return;
      if (W(), !c.current || !p || !Q.current) {
        M("idle"), L(null), H(null), u(null);
        return;
      }
      const G = lt(m.clientX, m.clientY, c.current), k = q(p.y);
      if (!k) {
        M("idle"), L(null), H(null), u(null);
        return;
      }
      const B = Math.min(p.x, G.x), ne = Math.max(p.x, G.x), K = I(B), ce = I(ne), fe = $(ce).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(k.resourceId, K, fe)) {
        M("idle"), L(null), H(null), u(null);
        return;
      }
      const ue = se(
        k.resourceId,
        K,
        fe,
        A
      ), ie = ue.length > 0, he = {
        startDate: K,
        endDate: fe,
        resourceId: k.resourceId,
        resourceLabel: k.resourceLabel,
        zoomLevel: t,
        hasConflict: ie,
        conflicts: ie ? ue : void 0
      };
      if (g)
        P((ye) => [...ye, he]), U(!0);
      else if (o) {
        const ye = o(he), V = (re) => {
          re != null && re.continueMultiSelect && (x(!0), P([he]), U(!0));
        };
        ye instanceof Promise ? ye.then(V) : V(ye);
      }
      M("idle"), L(null), H(null), u(null), Q.current = null, _.current = null;
    },
    [
      v,
      c,
      p,
      q,
      I,
      f,
      o,
      t,
      g,
      se,
      A,
      W
    ]
  ), Y = de(() => {
    if (A.length > 0 && s) {
      U(!1);
      const m = s(A), G = (k) => {
        k != null && k.continueMultiSelect ? U(!0) : (P([]), x(!1), U(!1));
      };
      m instanceof Promise ? m.then(G) : G(m);
      return;
    }
    P([]), x(!1), U(!1);
  }, [A, s]), C = de(() => {
    P([]), x(!1), U(!1);
  }, []), j = de((m) => {
    P((G) => {
      const k = G.filter((B, ne) => ne !== m);
      return k.length === 0 && (x(!1), U(!1)), k;
    });
  }, []), J = de(
    (m, G) => {
      P((k) => k.map((B, ne) => {
        if (ne !== m)
          return B;
        const K = { ...B, ...G }, ce = k.filter((ue, ie) => ie !== m), fe = se(
          K.resourceId,
          K.startDate,
          K.endDate,
          ce
        );
        return {
          ...K,
          hasConflict: fe.length > 0,
          conflicts: fe.length > 0 ? fe : void 0
        };
      }));
    },
    [se]
  ), z = de(
    (m) => {
      m.key === "Escape" && (v === "selecting" ? (W(), M("idle"), L(null), H(null), u(null), Q.current = null, _.current = null) : g && A.length > 0 && (P([]), x(!1), U(!1)));
    },
    [v, g, A.length, W]
  );
  return ve(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", S), document.addEventListener("keydown", z), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", S), document.removeEventListener("keydown", z);
      };
  }, [v, te, S, z]), ve(() => {
    if (g && A.length > 0)
      return document.addEventListener("keydown", z), () => {
        document.removeEventListener("keydown", z);
      };
  }, [g, A.length, z]), ve(() => () => {
    D.current && (cancelAnimationFrame(D.current), D.current = null), W();
  }, [W]), ve(() => {
    d && v === "selecting" && (W(), M("idle"), L(null), H(null), u(null), Q.current = null, _.current = null);
  }, [d, v, W]), {
    selectionState: v,
    selectionStart: p,
    selectionEnd: Z,
    selectionBox: E,
    handleGridMouseDown: ae,
    isEnabled: y,
    pendingSelections: A,
    confirmSelections: Y,
    clearSelections: C,
    removeSelection: j,
    updateSelection: J,
    isMultiSelectActive: g,
    hasUnconfirmedSelections: O
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
`, vi = kn(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: y, separatorRowIndices: w = [] }, v) {
  const M = ge(!1), { handleScrollNext: p, handleScrollPrev: L, date: Z, isLoading: H, cols: E, startDate: u, suppressNextSlideRef: g } = Ze(), x = ge(null), A = ge(null), P = ge(null), O = ge(null), [U, Q] = pe(!1), _ = zt(), {
    dragState: D,
    draggedEvent: T,
    ghostPosition: R,
    ghostDimensions: I,
    dropTarget: q,
    isValidDrop: ee,
    handleDragStart: se,
    isDraggable: ae,
    draggingEventId: N,
    resourceOnly: W
  } = hi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: O,
    separatorRowIndices: w
  });
  ve(() => {
    const ie = D === "dragging" || D === "potential";
    Q(ie), a && a(ie);
  }, [D, a]);
  const X = ge(!1), te = ge(Z), S = ge(null);
  ve(() => {
    var le;
    const ie = te.current;
    if (te.current = Z, !X.current) {
      X.current = !0;
      return;
    }
    if (g != null && g.current) {
      g.current = !1;
      return;
    }
    const he = O.current;
    if (!(he != null && he.animate))
      return;
    const ye = Z.isAfter(ie) ? 34 : -34;
    (le = S.current) == null || le.cancel(), he.style.willChange = "transform";
    const V = he.animate(
      [
        { transform: `translateX(${ye}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 300, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), re = () => {
      he.style.willChange = "";
    };
    V.onfinish = re, V.oncancel = re, S.current = V;
  }, [Z, g]);
  const {
    selectionState: Y,
    selectionBox: C,
    handleGridMouseDown: j,
    pendingSelections: J,
    confirmSelections: z,
    clearSelections: m,
    removeSelection: G,
    updateSelection: k,
    isMultiSelectActive: B,
    hasUnconfirmedSelections: ne
  } = pi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: y,
    gridRef: O,
    isDragging: U,
    separatorRowIndices: w
  }), K = de((ie) => {
    ie.preventDefault();
  }, []), ce = de((ie) => {
    ie.preventDefault();
  }, []), fe = w.length * Pe, ue = de(
    (ie) => {
      const he = Rn(), ye = t * me + 1 + fe;
      ao(ie, he, ye), Ls(ie, n, t, E, u, _, w);
    },
    [E, u, t, n, _, w, fe]
  );
  return ve(() => {
    if (!x.current)
      return;
    const ie = x.current.getContext("2d");
    if (!ie)
      return;
    const he = () => ue(ie);
    return window.addEventListener("resize", he), () => window.removeEventListener("resize", he);
  }, [ue]), ve(() => {
    const ie = x.current;
    if (!ie)
      return;
    ie.style.letterSpacing = "1px";
    const he = ie.getContext("2d");
    he && ue(he);
  }, [Z, t, n, ue]), ve(() => {
    if (!A.current)
      return;
    const ie = new IntersectionObserver(
      (he) => {
        he[0].isIntersecting && !M.current && (M.current = !0, p(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Ne) }
    );
    return ie.observe(A.current), () => {
      ie.disconnect();
    };
  }, [p]), ve(() => {
    if (!P.current)
      return;
    const ie = new IntersectionObserver(
      (he) => {
        he[0].isIntersecting && !M.current && (M.current = !0, L(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Ne),
        rootMargin: `0px 0px 0px -${Ye}px`
      }
    );
    return ie.observe(P.current), () => {
      ie.disconnect();
    };
  }, [L]), /* @__PURE__ */ F(mi, { id: eo, children: [
    /* @__PURE__ */ F(
      gi,
      {
        ref: (ie) => {
          typeof v == "function" ? v(ie) : v && (v.current = ie), O.current = ie;
        },
        onMouseDown: j,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(lr, { position: "left", ref: P }),
          /* @__PURE__ */ h(Sn, { isLoading: H, position: "left" }),
          /* @__PURE__ */ h(
            yi,
            {
              ref: x,
              onDragStart: K,
              onDragOver: ce,
              style: { userSelect: D === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(dd, { zoom: n, startDate: u }),
          /* @__PURE__ */ h(
            hl,
            {
              data: r,
              zoom: n,
              onTileClick: s,
              onDragStart: se,
              isDraggable: ae,
              draggingEventId: N,
              separatorRowIndices: w
            }
          ),
          /* @__PURE__ */ h(lr, { ref: A, position: "right" }),
          /* @__PURE__ */ h(Sn, { isLoading: H, position: "right" }),
          (D === "dragging" || D === "animating") && /* @__PURE__ */ h(
            zl,
            {
              draggedEvent: T,
              ghostPosition: R,
              ghostDimensions: I,
              dropTarget: q,
              isValidDrop: ee,
              dragState: D,
              zoom: n,
              data: r,
              resourceOnly: W,
              separatorRowIndices: w
            }
          ),
          /* @__PURE__ */ h(
            Zl,
            {
              selectionBox: C,
              isSelecting: Y === "selecting"
            }
          ),
          B && J.length > 0 && /* @__PURE__ */ h(
            ad,
            {
              selections: J,
              data: r,
              zoom: n,
              startDate: u,
              onRemove: G,
              onUpdate: k,
              separatorRowIndices: w
            }
          )
        ]
      }
    ),
    B && ne && J.length > 0 && /* @__PURE__ */ h(
      ed,
      {
        selections: J,
        onConfirm: z,
        onClear: m,
        onRemove: G
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
    const l = $(a.startDate).isoWeek(), f = $(a.startDate).isoWeekday(), y = $(a.endDate).isoWeek(), w = $(a.endDate).isoWeekday(), { hours: v, minutes: M } = lo(a.occupancy);
    if (r === l) {
      const p = (Xe + 1 - f) * v, L = (Xe + 1 - f) * M;
      return { hours: Math.max(0, p), minutes: L };
    } else if (r === y) {
      const p = w > Xe ? Xe * v : w * v, L = w > Xe ? Xe * M : w * M;
      return { hours: p, minutes: L };
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
    const { hours: f, minutes: y } = lo(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = uo(s), { free: d, overtime: a } = fo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, wi = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const d = $(c.startDate).hour(), a = $(c.endDate).hour(), l = n.hour(), f = $(c.endDate).minute(), y = $(c.startDate).minute();
    d < l && a > l ? t += De : d === l && a === l && y && f ? t += f ? f - y : De - y : d === l && a >= l ? t += y ? De - y : De : a === l && f && (t += f);
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
      c = "days", d = $e;
      break;
    case 2:
      c = "hours", d = Ae;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = $(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / me), y = r.findIndex((L, Z, H) => H.slice(0, Z + 1).reduce((u, g) => u + g, 0) >= f), w = s === 2 ? (a + 1) * d : a * d, v = (f - 1) * me + me, M = Si(
    o[y],
    y,
    l,
    s,
    i
  ), p = $(e.startDate).isSame($(e.endDate), "day");
  return {
    coords: { x: w, y: v },
    mouseCoords: t,
    resourceIndex: y,
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
    const y = "__auto_cat_" + f, w = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: y, name: w, minPassengers: l.min, maxPassengers: l.max });
    for (const v of l.values)
      a.set(v, y);
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
  const { recordsThreshold: n } = Ze(), [t, r] = pe(0), [o, s] = pe(0), i = ge(null);
  ve(() => {
    i.current = document.getElementById(Ne);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = ke(() => Yi(e), [e]), a = ke(
    () => $i(e, c, d, n),
    [e, c, n, d]
  ), l = de(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = de(() => {
    a[o].length && (r((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), y = de(() => {
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
    totalRowsPerPage: Oi(a[o]),
    next: l,
    previous: f,
    reset: y
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
const Nt = new qi(), ho = Nr({
  localesData: Nt.getLocales(),
  currentLocale: Nt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Qi = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = pe("en"), s = Nt.getLocales(), i = de(() => {
    const f = s.find((y) => y.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && $.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = pe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  ve(() => {
    t == null || t.forEach((f) => {
      s.find((w) => w.id === f.id) || Nt.addLocales(f);
    });
  }, [s, t]), ve(() => {
    const f = localStorage.getItem("locale"), y = n ?? f ?? "en";
    localStorage.setItem("locale", y), o(y), d(i());
  }, [i, n]);
  const { Provider: l } = ho;
  return /* @__PURE__ */ h(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ve = () => Ke(ho).currentLocale.lang, ea = (e) => /* @__PURE__ */ oe.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ oe.createElement("defs", null, /* @__PURE__ */ oe.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ oe.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ oe.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ oe.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ oe.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ta = b.div`
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
  return /* @__PURE__ */ F(ta, { onClick: e, children: [
    /* @__PURE__ */ h(ea, {}),
    /* @__PURE__ */ h(na, { children: n })
  ] });
}, oa = b.div`
  position: relative;
  display: flex;
`, sa = b.div`
  position: relative;
  margin-left: ${Ye};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ia = b.div`
  width: calc(${({ width: e }) => e}px - ${Ye}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ye}px;
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
  clickToAddConfig: y
}) => {
  const [w, v] = pe(Vt), [M, p] = pe(e), [L, Z] = pe(!1), [H, E] = pe(!1), [u, g] = pe(""), [x, A] = pe(/* @__PURE__ */ new Set()), {
    zoom: P,
    startDate: O,
    isLoading: U,
    config: { includeTakenHoursOnWeekendsInDayView: Q, showTooltip: _, showThemeToggle: D }
  } = Ze(), T = ge(null), R = ge(null), [I, q] = pe(124), {
    page: ee,
    projectsPerPerson: se,
    rowsPerItem: ae,
    currentPageNum: N,
    pagesAmount: W,
    next: X,
    previous: te,
    reset: S
  } = Ii(M), { effectiveCategories: Y, effectivePage: C } = ke(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: ee };
    const V = ki(ee);
    if (V.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: ee };
    const re = ee.map((le) => {
      if (le.isSubcontract || le.capacity == null)
        return le;
      const Ce = V.capacityToCategoryId.get(le.capacity);
      return Ce ? { ...le, categoryId: Ce } : le;
    });
    return { effectiveCategories: V.categories, effectivePage: re };
  }, [t, ee]), j = de((V) => {
    A((re) => {
      const le = new Set(re);
      return le.has(V) ? le.delete(V) : le.add(V), le;
    });
  }, []), J = ke(() => {
    const V = [], re = Y ? [...Y].sort((le, Ce) => le.maxPassengers - Ce.maxPassengers) : [];
    for (const le of re)
      C.some((Ce) => !Ce.isSubcontract && Ce.categoryId === le.id) && V.push(le.id);
    return C.some((le) => le.isSubcontract) && V.push("__subcontract__"), V;
  }, [Y, C]), z = de(() => {
    A(/* @__PURE__ */ new Set());
  }, []), m = de(() => {
    A(new Set(J));
  }, [J]), {
    visiblePage: G,
    visibleRowsPerItem: k,
    visibleTotalRows: B,
    visibleProjectsPerPerson: ne,
    separatorRowIndices: K
  } = ke(() => {
    const V = aa(C, Y), re = ((Y == null ? void 0 : Y.length) ?? 0) > 0, le = /* @__PURE__ */ new Map();
    ee.forEach((Ee, ze) => le.set(Ee.id, ze));
    const Ce = [], Me = [], He = [], We = [];
    let rt = 0;
    for (const Ee of V)
      if (Ee.type === "subcontract" || Ee.type === "category" && re) {
        const ot = Ee.type === "subcontract" ? "__subcontract__" : Ee.category.id, st = x.has(ot);
        if (We.push(rt), !st)
          for (const Je of Ee.items) {
            const kt = le.get(Je.id) ?? 0, $t = ae[kt];
            Ce.push(Je), Me.push($t), He.push(se[kt]), rt += $t;
          }
      } else
        for (const ot of Ee.items) {
          const st = le.get(ot.id) ?? 0, Je = ae[st];
          Ce.push(ot), Me.push(Je), He.push(se[st]), rt += Je;
        }
    const Ft = Me.reduce((Ee, ze) => Ee + ze, 0);
    return {
      visiblePage: Ce,
      visibleRowsPerItem: Me,
      visibleTotalRows: Ft,
      visibleProjectsPerPerson: He,
      separatorRowIndices: We
    };
  }, [C, Y, ee, x, ae, se]), ce = ge(
    hn(
      (V, re, le, Ce, Me, He) => {
        if (!T.current)
          return;
        const { tile: We, segmentId: rt } = ie(V);
        if (!rt || !We) {
          Z(!1), v(Vt);
          return;
        }
        const Ft = ue(rt, re), Ee = T.current.getBoundingClientRect(), ze = We.getBoundingClientRect(), ot = { x: V.clientX - Ee.left, y: V.clientY - Ee.top }, st = {
          x: V.clientX - Ee.left,
          y: V.clientY - Ee.top
        }, Je = {
          x: ze.left - Ee.left,
          y: ze.top - Ee.top,
          width: ze.width,
          height: ze.height
        }, {
          coords: { x: kt, y: $t },
          resourceIndex: mo,
          disposition: go,
          reservationData: yo
        } = Ci(
          Ft,
          le,
          ot,
          Ce,
          Me,
          He,
          Q
        );
        v({
          coords: { x: kt, y: $t },
          mouseCoords: st,
          resourceIndex: mo,
          disposition: go,
          reservationData: yo,
          tileBounds: Je
        }), Z(!0);
      },
      4
    )
  ), fe = ge(
    hn((V, re) => {
      S(), p(
        V.map((le) => ({
          ...le,
          data: le.data.filter((Ce) => {
            const { title: Me, description: He, subtitle: We } = Ce;
            return (Me == null ? void 0 : Me.toLowerCase().includes(re.toLowerCase())) || (We == null ? void 0 : We.toLowerCase().includes(re.toLowerCase())) || (He == null ? void 0 : He.toLowerCase().includes(re.toLowerCase()));
          })
        })).filter((le) => le.data.length > 0)
      );
    }, 500)
  ), ue = (V, re) => {
    if (V)
      return re.flatMap((le) => le.data).find((le) => le.segmentId === V);
  }, ie = (V) => {
    if (!V.target)
      return { tile: null, segmentId: null };
    const re = V.target.closest("[data-segment-id]");
    return re ? { tile: re, segmentId: re.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, he = (V) => {
    const re = V.target.value;
    g(re), fe.current.cancel(), re ? fe.current(e, re) : (S(), p(e));
  }, ye = de(() => {
    ce.current.cancel(), Z(!1), v(Vt);
  }, []);
  return ve(() => {
    const V = (le) => ce.current(
      le,
      e,
      O,
      k,
      ne,
      P
    ), re = T.current;
    if (re)
      return re.addEventListener("mousemove", V), re.addEventListener("mouseleave", ye), () => {
        re.removeEventListener("mousemove", V), re.removeEventListener("mouseleave", ye);
      };
  }, [
    ce,
    ye,
    ne,
    k,
    O,
    P,
    e
  ]), ve(() => {
    u ? (fe.current.cancel(), fe.current(e, u)) : p(e);
  }, [e, u]), Mn(() => {
    const V = R.current;
    if (!V)
      return;
    const re = () => q(V.offsetHeight);
    re();
    const le = new ResizeObserver(re);
    return le.observe(V), () => le.disconnect();
  }, []), /* @__PURE__ */ F(oa, { children: [
    /* @__PURE__ */ h(
      xc,
      {
        headerHeight: I,
        data: C,
        categories: Y,
        pageNum: N,
        pagesAmount: W,
        rows: ae,
        onLoadNext: X,
        onLoadPrevious: te,
        searchInputValue: u,
        onSearchInputChange: he,
        onItemClick: o,
        collapsedGroups: x,
        onToggleGroup: j,
        allGroupIds: J,
        onExpandAll: z,
        onCollapseAll: m
      }
    ),
    /* @__PURE__ */ F(sa, { children: [
      /* @__PURE__ */ h(
        Xc,
        {
          ref: R,
          zoom: P,
          topBarWidth: i,
          showThemeToggle: D,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        vi,
        {
          data: G,
          baseData: n || e,
          zoom: P,
          rows: B,
          ref: T,
          onTileClick: r,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: E,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: y,
          separatorRowIndices: K
        }
      ) : /* @__PURE__ */ h(ia, { width: i, children: U ? /* @__PURE__ */ h(Sn, { isLoading: U, position: "left" }) : /* @__PURE__ */ h(ra, {}) }),
      _ && L && !H && (w == null ? void 0 : w.resourceIndex) > -1 && /* @__PURE__ */ h(_l, { tooltipData: w })
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
`, Gt = b.div`
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
  const e = document.getElementById(Ne);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (n = e == null ? void 0 : e.requestFullscreen) == null || n.call(e);
}, va = () => {
  const { config: e, date: n, zoom: t, handleGoNext: r, handleGoPrev: o, handleGoToday: s, setZoom: i, goToDate: c, toggleDisplayActiveUnits: d } = Ze();
  Ve();
  const { filterButtonState: a = -1 } = e, l = () => {
    var f;
    (f = document.querySelector(`#${Ne} input[placeholder]`)) == null || f.focus();
  };
  return /* @__PURE__ */ F(la, { width: 0, children: [
    /* @__PURE__ */ F(Gt, { $at: "start", children: [
      /* @__PURE__ */ h(fa, { children: n.locale($.locale()).format("MMMM YYYY") }),
      /* @__PURE__ */ F(ha, { children: [
        /* @__PURE__ */ h("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ h("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ h("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      /* @__PURE__ */ F(pa, { children: [
        /* @__PURE__ */ F(it, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (f) => f.target.value && c(f.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ h(Gt, { $at: "center", children: /* @__PURE__ */ F(da, { children: [
      /* @__PURE__ */ h(ur, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
      /* @__PURE__ */ h(ua, { onClick: s, children: "Hoy" }),
      /* @__PURE__ */ h(ur, { onClick: r, "aria-label": "Siguiente", children: /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
    ] }) }),
    /* @__PURE__ */ F(Gt, { $at: "end", children: [
      /* @__PURE__ */ F(ma, { onClick: l, children: [
        /* @__PURE__ */ F(it, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] }),
      a >= 0 && /* @__PURE__ */ F(fr, { $primary: !!a, onClick: d, children: [
        /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(ga, { children: a })
      ] }),
      /* @__PURE__ */ F(fr, { onClick: ya, children: [
        /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] })
    ] })
  ] });
}, xa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), ba = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), wa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Sa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Ca = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ma = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ka = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), $a = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Da = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Ea = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), _a = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ta = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Aa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Pa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ oe.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Ya = {
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
}, Xt = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = zt(), i = Ya[e];
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
  const { date: e, zoom: n, data: t, goToDate: r } = Ze(), o = Ve(), s = ge(null), [i, c] = pe(null), d = ke(
    () => Array.from({ length: 12 }, (E, u) => $().month(u).format("MMM").toUpperCase()),
    [o]
  ), a = e.year(), l = ke(() => $(new Date(a, 0, 1)), [a]), f = ke(
    () => $(new Date(a + 1, 0, 1)).diff(l, "day"),
    [a, l]
  ), y = (E) => E.diff(l, "day") / f * 100, w = ke(() => {
    const E = Math.ceil(f / 7), u = new Array(E).fill(0), g = new Array(E).fill(0);
    for (const A of t ?? [])
      for (const P of A.data ?? []) {
        const O = $(P.startDate);
        if (O.year() !== a)
          continue;
        const U = Math.floor(O.diff(l, "day") / 7);
        if (U < 0 || U >= E)
          continue;
        u[U] += 1;
        const Q = P.readiness === "sin_chofer" ? 2 : P.readiness === "sin_avisar" ? 1 : 0;
        Q > g[U] && (g[U] = Q);
      }
    const x = Math.max(1, ...u);
    return u.map((A, P) => ({ h: A / x * 100, sev: g[P] }));
  }, [t, a, l, f]), v = $(), M = v.year() === a ? y(v) : null, p = n === 1 ? pn(1) / 2 : n === 0 ? pn(0) * 7 / 2 : 0.5, L = Math.max(0, y(e.subtract(p, "day"))), Z = Math.min(100, y(e.add(p, "day"))) - L, H = (E) => {
    var x;
    const u = (x = s.current) == null ? void 0 : x.getBoundingClientRect();
    if (!u)
      return null;
    const g = Math.min(1, Math.max(0, (E - u.left) / u.width));
    return { f: g, d: l.add(Math.round(g * f), "day") };
  };
  return /* @__PURE__ */ F(Ia, { children: [
    /* @__PURE__ */ F(La, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ F(
      Ra,
      {
        ref: s,
        onClick: (E) => {
          const u = H(E.clientX);
          u && r(u.d.toDate());
        },
        onMouseMove: (E) => {
          const u = H(E.clientX);
          u && c({ left: u.f * 100, label: `${u.d.date()} ${d[u.d.month()]}` });
        },
        onMouseLeave: () => c(null),
        children: [
          /* @__PURE__ */ h(Na, { children: d.map((E, u) => /* @__PURE__ */ h("span", { style: { left: `${y($(new Date(a, u, 1)))}%` }, children: E }, u)) }),
          d.map(
            (E, u) => u === 0 ? null : /* @__PURE__ */ h(Ha, { style: { left: `${y($(new Date(a, u, 1)))}%` } }, u)
          ),
          /* @__PURE__ */ h(Wa, { children: w.map((E, u) => /* @__PURE__ */ h(za, { $sev: E.sev, style: { height: `${E.h}%` } }, u)) }),
          /* @__PURE__ */ h(Ba, { style: { left: `${L}%`, width: `${Z}%` } }),
          M !== null && /* @__PURE__ */ h(Fa, { style: { left: `${M}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          i && /* @__PURE__ */ F(_e, { children: [
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
  onMultiTimeRangeSelect: y,
  clickToAddConfig: w
}) => {
  const { goToDate: v, handleGoToday: M, zoomIn: p, zoomOut: L, zoom: Z } = Ze();
  return Hr(
    l,
    () => ({
      goToDate: v,
      goToToday: M,
      setZoom: (H) => {
        if (!so(H))
          return;
        const E = H - Z;
        if (E > 0)
          for (let u = 0; u < E; u++)
            p();
        else
          for (let u = 0; u < Math.abs(E); u++)
            L();
      }
    }),
    [v, M, Z, p, L]
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
      onMultiTimeRangeSelect: y,
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
  onEventDrop: y,
  onEventDrag: w,
  draggableConfig: v,
  onTimeRangeSelect: M,
  onMultiTimeRangeSelect: p,
  clickToAddConfig: L
}, Z) {
  var T;
  const H = ke(
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
  ), E = ge(null), u = ge(null), [g, x] = pe((T = E.current) == null ? void 0 : T.clientWidth), A = ke(() => $(s), [s]), [P, O] = pe(H.defaultTheme ?? "light"), U = () => {
    O(P === "light" ? "dark" : "light");
  }, Q = P === "light" ? ws : Ss, _ = H.theme ? H.theme[Q.mode] : {}, D = {
    ...Q,
    colors: {
      ...Q.colors,
      ..._
    }
  };
  return Hr(
    Z,
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
  ), ve(() => {
    const R = () => {
      E.current && x(E.current.clientWidth);
    };
    return R(), window.addEventListener("resize", R), () => window.removeEventListener("resize", R);
  }, []), E.current, /* @__PURE__ */ F(_e, { children: [
    /* @__PURE__ */ h(bs, {}),
    /* @__PURE__ */ h(ys, { theme: D, children: /* @__PURE__ */ h(Qi, { lang: H.lang, translations: H.translations, children: /* @__PURE__ */ F(
      ui,
      {
        data: n,
        isLoading: !!f,
        config: H,
        onRangeChange: i,
        defaultStartDate: A,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: [
          /* @__PURE__ */ h(
            Ga,
            {
              showScroll: !!n.length,
              $footer: H.showOverview !== !1 && !!n.length,
              id: Ne,
              ref: E,
              children: /* @__PURE__ */ h(Xa, { children: /* @__PURE__ */ h(
                Ua,
                {
                  data: n,
                  baseData: r,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: g ?? 0,
                  onItemClick: l,
                  toggleTheme: U,
                  onEventDrop: y,
                  onEventDrag: w,
                  draggableConfig: v,
                  schedulerRef: u,
                  onTimeRangeSelect: M,
                  onMultiTimeRangeSelect: p,
                  clickToAddConfig: L
                }
              ) })
            }
          ),
          H.showOverview !== !1 && !!n.length && /* @__PURE__ */ h(Va, {})
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
  return /* @__PURE__ */ h(Ka, { intent: e, children: /* @__PURE__ */ F(Ja, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ h(qa, { children: t }),
    /* @__PURE__ */ h(Qa, { children: d })
  ] }) });
}, ec = b.div`
  min-width: ${Ye + "px"};
  max-width: ${Ye + "px"};
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
  width: ${Ye}px;
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
`, uc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), fc = () => /* @__PURE__ */ F("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), hc = () => /* @__PURE__ */ F("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
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
    children: /* @__PURE__ */ F(ac, { children: [
      /* @__PURE__ */ h(cc, { $provider: o, children: uc(n.icon) ? /* @__PURE__ */ h(lc, { src: n.icon, alt: "" }) : o ? /* @__PURE__ */ h(hc, {}) : /* @__PURE__ */ h(fc, {}) }),
      /* @__PURE__ */ F(dc, { children: [
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
}) => /* @__PURE__ */ F(mc, { $variant: o, onClick: r, title: e, children: [
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
  onToggleGroup: y,
  allGroupIds: w,
  onExpandAll: v,
  onCollapseAll: M
}) => {
  const [p, L] = pe(!1), Z = Ve(), H = () => L((_) => !_), E = n ? [...n].sort((_, D) => _.maxPassengers - D.maxPassengers) : [], u = E.length > 0, g = w.length > 0, x = g && f.size === w.length;
  g && f.size;
  const A = e.filter((_) => _.isSubcontract), P = Z.subcontract ?? "Subcontract", O = (_) => {
    const D = e.indexOf(_);
    return /* @__PURE__ */ h(
      pc,
      {
        id: _.id,
        item: _.label,
        rows: r[D],
        onItemClick: l,
        isSubcontract: _.isSubcontract
      },
      _.id
    );
  }, U = (_) => {
    const D = e.filter(
      (I) => !I.isSubcontract && I.categoryId === _.id
    );
    if (D.length === 0)
      return null;
    const T = f.has(_.id), R = _.name;
    return /* @__PURE__ */ F("div", { children: [
      /* @__PURE__ */ h(
        mr,
        {
          label: R,
          count: D.length,
          isCollapsed: T,
          onToggle: () => y(_.id),
          variant: "category"
        }
      ),
      !T && D.map(O)
    ] }, _.id);
  }, Q = e.filter(
    (_) => !_.isSubcontract && (!_.categoryId || !u)
  );
  return /* @__PURE__ */ F(ec, { children: [
    /* @__PURE__ */ F(tc, { $height: t, children: [
      /* @__PURE__ */ F(nc, { children: [
        /* @__PURE__ */ F(oc, { isFocused: p, children: [
          /* @__PURE__ */ h(
            rc,
            {
              placeholder: Z.search,
              value: d,
              onChange: a,
              onFocus: H,
              onBlur: H
            }
          ),
          /* @__PURE__ */ h(Xt, { iconName: "search" })
        ] }),
        g && /* @__PURE__ */ h(
          sc,
          {
            title: x ? "Expand all" : "Collapse all",
            onClick: x ? v : M,
            $allCollapsed: x,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: x ? /* @__PURE__ */ F(_e, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ F(_e, { children: [
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
    u ? E.map(U) : Q.map(O),
    u && Q.length > 0 && Q.map(O),
    A.length > 0 && /* @__PURE__ */ F(_e, { children: [
      /* @__PURE__ */ h(
        mr,
        {
          label: P,
          count: A.length,
          isCollapsed: f.has("__subcontract__"),
          onToggle: () => y("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !f.has("__subcontract__") && A.map(O)
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
`, wc = Wt`
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
    topText: y,
    bottomText: w,
    strokeStyle: v,
    labelBetweenCells: M
  } = e;
  if (t.beginPath(), t.strokeStyle = v ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), M ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const p = r + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(d, p, c);
  }
  if (l && f && y && w) {
    t.fillStyle = f, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = y.font;
    const p = r + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, p, y.y), t.font = w.font;
    const L = r + s / 2 - t.measureText(w.label).width / 2;
    t.fillStyle = w.color, t.fillText(w.label, L, w.y);
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
        width: $e,
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
      const w = c + $e / 2, v = o - 13 / 2;
      e.save(), e.fillStyle = r.colors.today, e.beginPath(), e.roundRect ? e.roundRect(w - 30 / 2, v, 30, 13, 5) : e.rect(w - 30 / 2, v, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${Ie}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", w, v + 13 / 2 + 0.5), e.restore();
    }
    c += $e;
  }
}, kc = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Oe;
  const s = je;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= sn && (c = 0);
    const a = ro(t, d) * Oe;
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
  o = -n.dayOfMonth * $e + $e;
  for (let c = 0; c < sn; c++)
    i > sn - 1 && (i = 0), s = $(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * $e, Ge(
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
  const o = 7 * $e, s = je, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = $(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % nr;
    f <= 0 && (f += nr), l !== 1 && a === 0 && (d = -l * $e + $e), Ge(
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
  let c = 0, d = 0, a = (sr(s) - t + 1) * Oe, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = sr(s + d) * Oe), l + a > i && d > 0 && (a = Math.ceil((i - l) / Oe) * Oe), Ge(
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
  const o = Math.floor(n / Rt) + 2, s = Rt * Ae;
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
        height: Ct,
        textYPos: gt + Ct / 2 + 2,
        label: l,
        font: Re.bottomRow.number
      },
      r
    ), d += s;
  }
}, Pc = (e, n, t, r) => {
  const o = Math.ceil(n / Rt), s = $(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Ae;
  for (let f = 0; f < a; f++) {
    const y = $(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = $(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), M = v.format("MMMM").toUpperCase(), p = v.diff(y, "hour") + 1, L = f === 0 ? p * Ae : n * Ae;
    Ge(
      {
        ctx: e,
        x: l,
        y: 0,
        width: L,
        height: gt,
        textYPos: Pn,
        label: M,
        font: Re.topRow
      },
      r
    ), l += L;
  }
}, Yc = (e, n, t, r) => {
  let o = 0;
  const s = gt + Ct, i = $(
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
        height: on,
        label: a,
        font: Re.bottomRow.hoursInDay,
        textYPos: gt + Ct + on / 2 + 2,
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
  left: ${Ye}px;
  width: calc(${({ $width: e }) => e}px - ${Ye}px);
  z-index: 3;
`, Rc = b.div`
  height: ${pt}px;
  display: block;
`, Nc = b.canvas``, Hc = {
  transfer: /* @__PURE__ */ F(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ F(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ F(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ F(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ F(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ F(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ h("path", { d: "M12 7.5V12l3 2" })
  ] })
}, Fe = ({
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
`, At = b.span`
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
], Gc = () => /* @__PURE__ */ F(Wc, { children: [
  /* @__PURE__ */ h(gr, { children: "Leyenda" }),
  /* @__PURE__ */ F(At, { children: [
    /* @__PURE__ */ h(Fe, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ F(At, { children: [
    /* @__PURE__ */ h(Fe, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ F(At, { children: [
    /* @__PURE__ */ h(Fe, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ F(At, { children: [
    /* @__PURE__ */ h(zc, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(Fc, {}),
  /* @__PURE__ */ F(gr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Vc.map((e) => /* @__PURE__ */ F(Bc, { children: [
    /* @__PURE__ */ h(jc, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(Zc, { style: { color: e.color }, children: /* @__PURE__ */ h(Fe, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), Xc = kn(function({ zoom: n, topBarWidth: t, showThemeToggle: r, toggleTheme: o }, s) {
  const { week: i } = Ve(), { date: c, cols: d, dayOfYear: a, startDate: l, config: f } = Ze(), y = ge(null), w = zt(), v = de(
    (M) => {
      const p = Rn(), Z = (n === 2 ? Cs : pt) + 1;
      ao(M, p, Z), Oc(M, n, d, l, i, a, w);
    },
    [d, a, l, i, n, w]
  );
  return ve(() => {
    if (!y.current)
      return;
    const M = y.current.getContext("2d");
    if (!M)
      return;
    const p = () => v(M);
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [v]), ve(() => {
    const M = y.current;
    if (!M)
      return;
    M.style.letterSpacing = "1px";
    const p = M.getContext("2d");
    p && v(p);
  }, [c, n, v]), /* @__PURE__ */ F(Ic, { ref: s, children: [
    (f.showTopbar !== !1 || f.showLegend !== !1) && /* @__PURE__ */ F(Lc, { $width: t, children: [
      f.showTopbar !== !1 && /* @__PURE__ */ h(va, { width: t, showThemeToggle: r, toggleTheme: o }),
      f.showLegend !== !1 && /* @__PURE__ */ h(Gc, {})
    ] }),
    /* @__PURE__ */ h(Rc, { id: $s, children: /* @__PURE__ */ h(Nc, { ref: y }) })
  ] });
}), Uc = (e, n, t) => {
  let r;
  switch (t) {
    case 0:
      r = Oe;
      break;
    case 2:
      r = Ae;
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
}, Kc = (e, n, t, r, o, s) => {
  const i = e * me + Ds, c = n.hour(), d = t.hour();
  let a, l, f, y;
  switch (s) {
    case 2: {
      a = $(r), l = $(o), f = $(n).hour(c).minute(0), y = $(t).hour(d).minute(0);
      break;
    }
    default: {
      a = $(r).hour(0).minute(0), l = $(o).hour(23).minute(59), f = n, y = t;
      break;
    }
  }
  return {
    ...Uc(
      { startDate: a, endDate: l },
      { startDate: f, endDate: y },
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
  const { date: a } = Ze(), l = Ln(a, t), { y: f, x: y, width: w } = Kc(
    e,
    l.startDate,
    l.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: v } = zt(), M = ge(null), p = $(n.startDate).isSame($(n.endDate), "day"), L = n.eventType === Mt.Tour, Z = n.eventType === Mt.Transfer, H = p && (L || Z), E = (U) => {
    M.current = { x: U.clientX, y: U.clientY }, c && s && (U.preventDefault(), s(n, U));
  }, u = (U) => {
    if (M.current) {
      const Q = Math.abs(U.clientX - M.current.x), _ = Math.abs(U.clientY - M.current.y);
      Math.sqrt(Q * Q + _ * _) <= 5 && (o == null || o(n)), M.current = null;
    } else
      o == null || o(n);
  }, g = {
    left: `${y}px`,
    top: `${f + d}px`,
    backgroundColor: `${n.bgColor ?? v.defaultTile}`,
    width: `${w}px`,
    color: po(n.bgColor ?? "")
  }, x = !r && n.readiness ? al[n.readiness] : null, A = r && n.subcontractConfirmed === !1, P = r ? A ? ll : cl : x == null ? void 0 : x.stripe, O = (U) => /* @__PURE__ */ F(
    Jc,
    {
      "data-segment-id": n.segmentId,
      style: g,
      onClick: u,
      onMouseDown: E,
      onDragStart: (Q) => Q.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: A,
      children: [
        P && /* @__PURE__ */ h(qc, { style: { background: P } }),
        U
      ]
    }
  );
  return O(
    H ? /* @__PURE__ */ F(_e, { children: [
      (r || x) && /* @__PURE__ */ h(vr, { $sm: !0, children: r ? /* @__PURE__ */ h(br, { children: "SUB" }) : x && /* @__PURE__ */ h(xr, { $sm: !0, style: { color: x.color }, children: /* @__PURE__ */ h(Fe, { name: x.icon, strokeWidth: x.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ F(sl, { children: [
        /* @__PURE__ */ h(Fe, { name: Z ? "transfer" : "sun", strokeWidth: 2.4 }),
        w >= il && /* @__PURE__ */ F(_e, { children: [
          /* @__PURE__ */ h(wr, { children: $(n.startDate).format("HH:mm") }),
          !Z && /* @__PURE__ */ h(wr, { $end: !0, children: $(n.endDate).format("HH:mm") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ F(_e, { children: [
      /* @__PURE__ */ h(vr, { children: r ? /* @__PURE__ */ h(br, { children: "SUB" }) : x && /* @__PURE__ */ h(xr, { style: { color: x.color }, children: /* @__PURE__ */ h(Fe, { name: x.icon, strokeWidth: x.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ F(Qc, { children: [
        /* @__PURE__ */ F(yr, { $pad: !0, children: [
          /* @__PURE__ */ h(el, { children: /* @__PURE__ */ h(Fe, { name: Z ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(tl, { children: n.title })
        ] }),
        /* @__PURE__ */ F(yr, { children: [
          n.bookingNumber && /* @__PURE__ */ h(rl, { children: n.bookingNumber }),
          n.subtitle && /* @__PURE__ */ h(nl, { children: n.subtitle })
        ] }),
        n.driver && /* @__PURE__ */ F(ol, { children: [
          /* @__PURE__ */ h(Fe, { name: "person" }),
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
  height: ${me}px;
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
  const c = de(() => {
    let d = 0;
    return e.map((a, l) => {
      if (l > 0 && (d += Math.max(e[l - 1].data.length, 1)), !a.data.some((f) => f.length > 0)) {
        const f = Sr(d, i);
        return [
          /* @__PURE__ */ h(ul, { style: { top: `${d * me + f}px` }, children: "Disponible" }, `dispo-${a.id}`)
        ];
      }
      return a.data.map(
        (f, y) => f.map((w) => {
          const v = s === w.segmentId, M = o ? o(w) : !1, p = y + d, L = Sr(p, i);
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
              yOffset: L
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
  const { mouseCoords: n, reservationData: t } = e, r = ge(null), [o, s] = pe("below"), i = Ve(), c = { ...El, ...i.tooltip };
  Mn(() => {
    if (!r.current || !n)
      return;
    const w = r.current, { width: v, height: M } = w.getBoundingClientRect(), p = w.parentElement;
    if (!p)
      return;
    const L = p.getBoundingClientRect(), Z = 12, H = 4, E = L.height - n.y, u = L.width - n.x;
    let g = n.x + Z, x = n.y + Z, A = "below";
    u < v + Z && (g = n.x - v - Z), E < M + Z && (x = n.y - M - Z, A = "above"), g = Math.max(H, Math.min(g, L.width - v - H)), x = Math.max(H, Math.min(x, L.height - M - H)), s(A), w.style.left = `${g}px`, w.style.top = `${x}px`;
  }, [n]);
  const d = t.reservationType === Mt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, y = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ F(pl, { ref: r, $position: o, children: [
    /* @__PURE__ */ F(ml, { children: [
      /* @__PURE__ */ F(gl, { children: [
        /* @__PURE__ */ h(yl, { children: t.bookingNumber }),
        /* @__PURE__ */ h(vl, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ h(xl, { children: t.eventName }),
      t.client && /* @__PURE__ */ h(bl, { children: t.client })
    ] }),
    /* @__PURE__ */ F(wl, { children: [
      /* @__PURE__ */ F(Sl, { children: [
        /* @__PURE__ */ F(Cr, { children: [
          /* @__PURE__ */ h(Mr, { children: c.startDate }),
          /* @__PURE__ */ F(kr, { children: [
            /* @__PURE__ */ h($r, { children: t.startDate }),
            " ",
            /* @__PURE__ */ h(Dr, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ F(Cr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Mr, { children: c.endDate }),
          /* @__PURE__ */ F(kr, { children: [
            /* @__PURE__ */ h($r, { children: t.endDate }),
            " ",
            /* @__PURE__ */ h(Dr, { children: t.endTime })
          ] })
        ] })
      ] }),
      y.length > 0 && /* @__PURE__ */ h(Cl, { children: y.map((w, v) => /* @__PURE__ */ F(Ml, { children: [
        /* @__PURE__ */ h(kl, { children: w.label }),
        /* @__PURE__ */ h($l, { children: w.value })
      ] }, v)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ F(Dl, { children: [
        t.serviceNotes && /* @__PURE__ */ F(Er, { children: [
          /* @__PURE__ */ h(_r, { children: c.serviceNotes }),
          /* @__PURE__ */ h(Tr, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ F(Er, { children: [
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
  left: ${Ye + 16}px;
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
`, Ut = b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, Kt = b.div`
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
  const a = Ve(), l = (E) => {
    let u = 0;
    for (const g of d)
      g <= E && u++;
    return E * me + u * Pe;
  }, [f, y] = pe(null), [w, v] = pe(0), M = de((E = 400, u = 300) => {
    const x = t.width, A = 48, P = document.getElementById("react-scheduler");
    if (!P)
      return {
        x: n.x + x + 16,
        y: n.y
      };
    const O = P.scrollLeft, U = P.scrollTop, Q = P.clientWidth, _ = P.clientHeight, D = n.x - O, T = n.y - U, R = {
      left: Ye + 16,
      // Avoid left column
      right: Q - 16,
      top: 16,
      bottom: _ - 16
    }, I = R.right - (D + x), q = D - R.left, ee = R.bottom - (T + A), se = T - R.top;
    let ae, N;
    return I >= E + 16 ? ae = D + x + 16 : q >= E + 16 ? ae = D - E - 16 : I >= q ? (ae = D + x + 16, ae + E > R.right && (ae = R.right - E)) : (ae = D - E - 16, ae < R.left && (ae = R.left)), ee >= u + 16 ? N = T + A + 16 : se >= u + 16 ? N = T - u - 16 : ee >= se ? (N = T + A + 16, N + u > R.bottom && (N = R.bottom - u)) : (N = T - u - 16, N < R.top && (N = R.top)), ae = Math.max(R.left, Math.min(ae, R.right - E)), N = Math.max(R.top, Math.min(N, R.bottom - u)), {
      x: ae + O,
      y: N + U
    };
  }, [n.x, n.y, t.width]);
  ve(() => {
    s === "dragging" && e && w === 0 ? v(n.x) : s === "idle" && v(0);
  }, [s, e, n.x, w]), ve(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const p = ke(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const E = [];
    let u = 0;
    for (const g of i) {
      const x = Math.max(g.data.length, 1);
      if (g.capacity !== void 0 && e.totalPassengers > g.capacity)
        for (let A = 0; A < x; A++)
          E.push(u + A);
      u += x;
    }
    return E;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const L = s === "animating", Z = po(e.bgColor ?? ""), H = () => {
    if (!r)
      return "";
    const E = $(r.startDate).format("MMM D, HH:mm"), u = $(r.endDate).format("HH:mm");
    return `${E} - ${u}`;
  };
  return /* @__PURE__ */ F(Tl, { children: [
    p.map((E) => /* @__PURE__ */ h(
      Nl,
      {
        style: {
          top: `${l(E)}px`,
          height: `${me}px`
        }
      },
      E
    )),
    r && s === "dragging" && /* @__PURE__ */ h(
      Rl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${me}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ F(_e, { children: [
      /* @__PURE__ */ h(
        Il,
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
      /* @__PURE__ */ h(
        Ll,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (me - 48) / 2}px`
          },
          children: H()
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
          height: `${me}px`
        }
      }
    ),
    r && o && r.hasConflict && r.conflicts && r.conflicts.length > 0 && s === "dragging" && (() => {
      const E = M(400, 300);
      return /* @__PURE__ */ F(
        Pr,
        {
          style: {
            left: `${E.x}px`,
            top: `${E.y}px`
          },
          children: [
            /* @__PURE__ */ F(Yr, { children: [
              /* @__PURE__ */ h(Or, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Ir, { children: r.conflicts.map((u, g) => {
              const x = $(r.startDate).format("YYYY-MM-DD"), A = $(r.endDate).format("YYYY-MM-DD"), P = $(u.event.startDate).format("YYYY-MM-DD"), O = $(u.event.endDate).format("YYYY-MM-DD"), U = $(u.conflictStart).format("YYYY-MM-DD"), Q = $(u.conflictEnd).format("YYYY-MM-DD"), _ = x !== A, D = P !== O, T = U !== Q, R = _ ? $(r.startDate).format("MMM D, h:mm A") : $(r.startDate).format("h:mm A"), I = _ ? $(r.endDate).format("MMM D, h:mm A") : $(r.endDate).format("h:mm A"), q = D ? $(u.event.startDate).format("MMM D, h:mm A") : $(u.event.startDate).format("h:mm A"), ee = D ? $(u.event.endDate).format("MMM D, h:mm A") : $(u.event.endDate).format("h:mm A"), se = T ? $(u.conflictStart).format("MMM D, h:mm A") : $(u.conflictStart).format("h:mm A"), ae = T ? $(u.conflictEnd).format("MMM D, h:mm A") : $(u.conflictEnd).format("h:mm A"), N = T ? "" : $(u.conflictStart).format("MMM D"), W = r.startDate.getTime(), X = r.endDate.getTime(), te = u.event.startDate.getTime(), S = u.event.endDate.getTime(), Y = W >= te && W < S, C = X > te && X <= S, j = W <= te && X >= S, J = te <= W && S >= X;
              let z = !1, m = !1, G = !1, k = !1, B = "";
              return j || J ? (z = !0, m = !0, G = !0, k = !0, B = `⚠️ ${a.conflicts.changeBoth}`) : Y && C ? (z = !0, m = !0, G = !0, k = !0, B = `⚠️ ${a.conflicts.changeBoth}`) : Y ? (z = !0, k = !0, B = `⚠️ ${a.conflicts.changeStart}`) : C && (m = !0, G = !0, B = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ F(Ut, { children: [
                /* @__PURE__ */ F(Kt, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ F(at, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  z ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: R }) : R,
                  " ",
                  a.conflicts.to,
                  " ",
                  m ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
                ] }),
                /* @__PURE__ */ F(at, { children: [
                  /* @__PURE__ */ h("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  G ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: q }) : q,
                  " ",
                  a.conflicts.to,
                  " ",
                  k ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ee }) : ee
                ] }),
                /* @__PURE__ */ F(Lr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  N && `${N}, `,
                  se,
                  " - ",
                  ae
                ] }),
                B && /* @__PURE__ */ h(at, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: B })
              ] }, g);
            }) })
          ]
        }
      );
    })(),
    r && o && !r.hasConflict && r.nearbyEvents && r.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const E = M(400, 400);
      return /* @__PURE__ */ F(
        Pr,
        {
          style: {
            left: `${E.x}px`,
            top: `${E.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ F(Yr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Or, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ F(Ir, { children: [
              (() => {
                const u = r.nearbyEvents.some((P) => P.position === "before"), g = r.nearbyEvents.some((P) => P.position === "after"), x = $(r.startDate).format("h:mm A"), A = $(r.endDate).format("h:mm A");
                return /* @__PURE__ */ F(Ut, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ F(Kt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ F(at, { style: { fontWeight: 600 }, children: [
                    $(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: x }) : x,
                    " ",
                    a.conflicts.to,
                    " ",
                    g ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: A }) : A
                  ] }),
                  /* @__PURE__ */ h(at, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              r.nearbyEvents.map((u, g) => {
                const x = $(u.event.startDate).format("YYYY-MM-DD"), A = $(u.event.endDate).format("YYYY-MM-DD"), P = x !== A, O = P ? $(u.event.startDate).format("MMM D, h:mm A") : $(u.event.startDate).format("h:mm A"), U = P ? $(u.event.endDate).format("MMM D, h:mm A") : $(u.event.endDate).format("h:mm A"), Q = $(u.event.startDate).format("MMM D"), _ = Math.floor(u.timeGap / (1e3 * 60 * 60)), D = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), T = _ > 0 ? `${_}h ${D}m` : `${D}m`, R = u.position === "after", I = u.position === "before";
                return /* @__PURE__ */ F(Ut, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ F(Kt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ F(at, { children: [
                    !P && `${Q}: `,
                    R ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: O }) : O,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: U }) : U
                  ] }),
                  /* @__PURE__ */ F(Lr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    T,
                    " ",
                    u.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, g);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      Al,
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
          color: Z
        },
        children: /* @__PURE__ */ h(Pl, { children: /* @__PURE__ */ F(Ol, { children: [
          /* @__PURE__ */ h(Ar, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Ar, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(Yl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, zl = Wl, Fl = Wt`
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
), Zl = jl, Vl = Wt`
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
  const o = Ve().multiSelect, s = ke(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, w = /* @__PURE__ */ F(Gl, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ F(Xl, { children: [
      /* @__PURE__ */ F(Ul, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ F(Kl, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ h(Jl, { children: c })
    ] }),
    /* @__PURE__ */ F(ql, { children: [
      /* @__PURE__ */ F(Rr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ h(Rr, { variant: "primary", $hasConflicts: y, onClick: n, children: y ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return wo(w, document.body);
}, ed = Ql, td = Wt`
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

  ${({ $hasConflict: e }) => e && Ht`
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
  const [c, d] = pe(null), [a, l] = pe({ x: 0, y: 0 }), f = ge(null), y = ke(() => {
    switch (t) {
      case 0:
        return Oe * 7;
      case 1:
        return $e;
      case 2:
        return Ae;
      default:
        return $e;
    }
  }, [t]), w = ke(() => $().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), v = ke(() => e.map((g, x) => {
    let A = 0, P = !1;
    for (const q of n) {
      if (q.id === g.resourceId) {
        P = !0;
        break;
      }
      A += Math.max(q.data.length, 1);
    }
    if (!P)
      return null;
    const O = $(g.startDate), U = $(g.endDate);
    let Q, _;
    switch (t) {
      case 0:
        Q = Math.floor(O.diff(w, "days") / 7), _ = Math.max(1, Math.ceil(U.diff(O, "days") / 7) + 1);
        break;
      case 1:
        Q = O.diff(w, "days"), _ = Math.max(1, U.diff(O, "days") + 1);
        break;
      case 2:
        Q = O.diff(w, "hours"), _ = Math.max(1, U.diff(O, "hours") + 1);
        break;
      default:
        Q = 0, _ = 1;
    }
    const D = Q * y;
    let T = 0;
    for (const q of i)
      q <= A && T++;
    const R = A * me + T * Pe, I = _ * y;
    return {
      index: x,
      selection: g,
      x: D,
      y: R,
      width: I,
      height: me
    };
  }), [e, n, t, w, y]), M = (g, x) => {
    const A = $(g).format("MMM D"), P = $(x).format("MMM D");
    return A === P ? A : `${A} - ${P}`;
  }, p = (g) => !g.hasConflict || !g.conflicts ? "" : `⚠️ Conflicts with:
${g.conflicts.map((A) => {
    const P = (A.overlapDuration / 36e5).toFixed(1);
    return `• ${A.event.title} (${P}h overlap)`;
  }).join(`
`)}`, L = de(
    (g) => {
      let x = 0;
      for (const A of n) {
        const P = Math.max(A.data.length, 1);
        if (g >= x * me && g < (x + P) * me)
          return {
            resourceId: A.id,
            resourceLabel: A.label
          };
        x += P;
      }
      return null;
    },
    [n]
  ), Z = de(
    (g) => {
      const x = Math.floor(g / y);
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
    [t, w, y]
  ), H = de(
    (g, x) => {
      !s || (g.preventDefault(), g.stopPropagation(), !v[x]) || (f.current = { x: g.clientX, y: g.clientY }, d(x), l({ x: 0, y: 0 }));
    },
    [s, v]
  ), E = de(
    (g) => {
      if (c === null || !f.current)
        return;
      const x = g.clientX - f.current.x, A = g.clientY - f.current.y, P = Math.round(x / y) * y, O = Math.round(A / me) * me;
      l({ x: P, y: O });
    },
    [c, y]
  ), u = de(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const g = v[c];
    if (!g) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const x = g.x + a.x, A = g.y + a.y, P = L(A + me / 2);
    if (!P) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const O = Z(x), U = e[c], Q = U.endDate.getTime() - U.startDate.getTime(), _ = new Date(O.getTime() + Q);
    s(c, {
      startDate: O,
      endDate: _,
      resourceId: P.resourceId,
      resourceLabel: P.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, v, e, s, L, Z]);
  return ve(() => {
    if (c !== null)
      return document.addEventListener("mousemove", E), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", u);
      };
  }, [c, E, u]), /* @__PURE__ */ h(_e, { children: v.map((g) => {
    if (!g)
      return null;
    const x = g.selection.hasConflict || !1, A = c === g.index, P = A ? g.x + a.x : g.x, O = A ? g.y + a.y : g.y;
    return /* @__PURE__ */ F(
      nd,
      {
        $hasConflict: x,
        $isDragging: A,
        style: {
          left: P,
          top: O,
          width: g.width,
          height: g.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (U) => H(U, g.index),
        children: [
          x && /* @__PURE__ */ h(od, { title: p(g.selection), children: "⚠️" }),
          /* @__PURE__ */ h(rd, { $hasConflict: x, children: M(g.selection.startDate, g.selection.endDate) }),
          /* @__PURE__ */ h(
            sd,
            {
              onClick: (U) => {
                U.stopPropagation(), o(g.index);
              },
              onMouseDown: (U) => U.stopPropagation(),
              title: x ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      g.index
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
  const { cols: t } = Ze(), r = ke(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Oe * 7 : $e, s = $().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = $().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ h(cd, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, dd = ld;
export {
  md as Scheduler
};
