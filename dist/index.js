var bo = Object.defineProperty;
var wo = (e, n, t) => n in e ? bo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Nn = (e, n, t) => (wo(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as h, jsxs as W, Fragment as _e } from "react/jsx-runtime";
import * as oe from "react";
import et, { useRef as me, useContext as Ke, useMemo as Me, useLayoutEffect as Bt, useDebugValue as Hn, createElement as So, createContext as Hr, useState as pe, useCallback as de, useEffect as ve, forwardRef as kn, useImperativeHandle as Br } from "react";
import { createPortal as Co } from "react-dom";
var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ct = {}, Mo = {
  get exports() {
    return Ct;
  },
  set exports(e) {
    Ct = e;
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
var Bn;
function ko() {
  if (Bn)
    return xe;
  Bn = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function M(p) {
    if (typeof p == "object" && p !== null) {
      var O = p.$$typeof;
      switch (O) {
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
                  return O;
              }
          }
        case n:
          return O;
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
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === r || p === a || p === l || p === x || typeof p == "object" && p !== null && (p.$$typeof === y || p.$$typeof === f || p.$$typeof === s || p.$$typeof === i || p.$$typeof === d || p.$$typeof === v || p.getModuleId !== void 0);
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
function $o() {
  return zn || (zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), v = !1, M = !1, p = !1, O = !1, z = !1, L;
    L = Symbol.for("react.module.reference");
    function k(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === t || D === o || z || D === r || D === a || D === l || O || D === x || v || M || p || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === f || D.$$typeof === s || D.$$typeof === i || D.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === L || D.getModuleId !== void 0));
    }
    function u(D) {
      if (typeof D == "object" && D !== null) {
        var j = D.$$typeof;
        switch (j) {
          case e:
            var ne = D.type;
            switch (ne) {
              case t:
              case o:
              case r:
              case a:
              case l:
                return ne;
              default:
                var U = ne && ne.$$typeof;
                switch (U) {
                  case c:
                  case i:
                  case d:
                  case y:
                  case f:
                  case s:
                    return U;
                  default:
                    return j;
                }
            }
          case n:
            return j;
        }
      }
    }
    var g = i, w = s, $ = e, P = d, Y = t, J = y, q = f, T = n, E = o, A = r, N = a, R = l, Q = !1, ee = !1;
    function se(D) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(D) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(D) {
      return u(D) === i;
    }
    function B(D) {
      return u(D) === s;
    }
    function X(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function te(D) {
      return u(D) === d;
    }
    function S(D) {
      return u(D) === t;
    }
    function I(D) {
      return u(D) === y;
    }
    function C(D) {
      return u(D) === f;
    }
    function Z(D) {
      return u(D) === n;
    }
    function K(D) {
      return u(D) === o;
    }
    function F(D) {
      return u(D) === r;
    }
    function m(D) {
      return u(D) === a;
    }
    function G(D) {
      return u(D) === l;
    }
    be.ContextConsumer = g, be.ContextProvider = w, be.Element = $, be.ForwardRef = P, be.Fragment = Y, be.Lazy = J, be.Memo = q, be.Portal = T, be.Profiler = E, be.StrictMode = A, be.Suspense = N, be.SuspenseList = R, be.isAsyncMode = se, be.isConcurrentMode = ae, be.isContextConsumer = H, be.isContextProvider = B, be.isElement = X, be.isForwardRef = te, be.isFragment = S, be.isLazy = I, be.isMemo = C, be.isPortal = Z, be.isProfiler = K, be.isStrictMode = F, be.isSuspense = m, be.isSuspenseList = G, be.isValidElementType = k, be.typeOf = u;
  }()), be;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ko() : e.exports = $o();
})(Mo);
function Do(e) {
  function n(H, B, X, te, S) {
    for (var I = 0, C = 0, Z = 0, K = 0, F, m, G = 0, D = 0, j, ne = j = F = 0, U = 0, ce = 0, fe = 0, ue = 0, ie = X.length, he = ie - 1, ye, V = "", re = "", le = "", Ce = "", ke; U < ie; ) {
      if (m = X.charCodeAt(U), U === he && C + K + Z + I !== 0 && (C !== 0 && (m = C === 47 ? 10 : 47), K = Z = I = 0, ie++, he++), C + K + Z + I === 0) {
        if (U === he && (0 < ce && (V = V.replace(y, "")), 0 < V.trim().length)) {
          switch (m) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              V += X.charAt(U);
          }
          m = 59;
        }
        switch (m) {
          case 123:
            for (V = V.trim(), F = V.charCodeAt(0), j = 1, ue = ++U; U < ie; ) {
              switch (m = X.charCodeAt(U)) {
                case 123:
                  j++;
                  break;
                case 125:
                  j--;
                  break;
                case 47:
                  switch (m = X.charCodeAt(U + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = U + 1; ne < he; ++ne)
                          switch (X.charCodeAt(ne)) {
                            case 47:
                              if (m === 42 && X.charCodeAt(ne - 1) === 42 && U + 2 !== ne) {
                                U = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (m === 47) {
                                U = ne + 1;
                                break e;
                              }
                          }
                        U = ne;
                      }
                  }
                  break;
                case 91:
                  m++;
                case 40:
                  m++;
                case 34:
                case 39:
                  for (; U++ < he && X.charCodeAt(U) !== m; )
                    ;
              }
              if (j === 0)
                break;
              U++;
            }
            switch (j = X.substring(ue, U), F === 0 && (F = (V = V.replace(f, "").trim()).charCodeAt(0)), F) {
              case 64:
                switch (0 < ce && (V = V.replace(y, "")), m = V.charCodeAt(1), m) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = B;
                    break;
                  default:
                    ce = N;
                }
                if (j = n(B, ce, j, m, S + 1), ue = j.length, 0 < Q && (ce = t(N, V, fe), ke = c(3, j, ce, B, T, q, ue, m, S, te), V = ce.join(""), ke !== void 0 && (ue = (j = ke.trim()).length) === 0 && (m = 0, j = "")), 0 < ue)
                  switch (m) {
                    case 115:
                      V = V.replace(g, i);
                    case 100:
                    case 109:
                    case 45:
                      j = V + "{" + j + "}";
                      break;
                    case 107:
                      V = V.replace(z, "$1 $2"), j = V + "{" + j + "}", j = A === 1 || A === 2 && s("@" + j, 3) ? "@-webkit-" + j + "@" + j : "@" + j;
                      break;
                    default:
                      j = V + j, te === 112 && (j = (re += j, ""));
                  }
                else
                  j = "";
                break;
              default:
                j = n(B, t(B, V, fe), j, te, S + 1);
            }
            le += j, j = fe = ce = ne = F = 0, V = "", m = X.charCodeAt(++U);
            break;
          case 125:
          case 59:
            if (V = (0 < ce ? V.replace(y, "") : V).trim(), 1 < (ue = V.length))
              switch (ne === 0 && (F = V.charCodeAt(0), F === 45 || 96 < F && 123 > F) && (ue = (V = V.replace(" ", ":")).length), 0 < Q && (ke = c(1, V, B, H, T, q, re.length, te, S, te)) !== void 0 && (ue = (V = ke.trim()).length) === 0 && (V = "\0\0"), F = V.charCodeAt(0), m = V.charCodeAt(1), F) {
                case 0:
                  break;
                case 64:
                  if (m === 105 || m === 99) {
                    Ce += V + X.charAt(U);
                    break;
                  }
                default:
                  V.charCodeAt(ue - 1) !== 58 && (re += o(V, F, m, V.charCodeAt(2)));
              }
            fe = ce = ne = F = 0, V = "", m = X.charCodeAt(++U);
        }
      }
      switch (m) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + F === 0 && te !== 107 && 0 < V.length && (ce = 1, V += "\0"), 0 < Q * se && c(0, V, B, H, T, q, re.length, te, S, te), q = 1, T++;
          break;
        case 59:
        case 125:
          if (C + K + Z + I === 0) {
            q++;
            break;
          }
        default:
          switch (q++, ye = X.charAt(U), m) {
            case 9:
            case 32:
              if (K + I + C === 0)
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
              K + C + I === 0 && (ce = fe = 1, ye = "\f" + ye);
              break;
            case 108:
              if (K + C + I + E === 0 && 0 < ne)
                switch (U - ne) {
                  case 2:
                    G === 112 && X.charCodeAt(U - 3) === 58 && (E = G);
                  case 8:
                    D === 111 && (E = D);
                }
              break;
            case 58:
              K + C + I === 0 && (ne = U);
              break;
            case 44:
              C + Z + K + I === 0 && (ce = 1, ye += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (K = K === m ? 0 : K === 0 ? m : K);
              break;
            case 91:
              K + C + Z === 0 && I++;
              break;
            case 93:
              K + C + Z === 0 && I--;
              break;
            case 41:
              K + C + I === 0 && Z--;
              break;
            case 40:
              if (K + C + I === 0) {
                if (F === 0)
                  switch (2 * G + 3 * D) {
                    case 533:
                      break;
                    default:
                      F = 1;
                  }
                Z++;
              }
              break;
            case 64:
              C + Z + K + I + ne + j === 0 && (j = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + I + Z))
                switch (C) {
                  case 0:
                    switch (2 * m + 3 * X.charCodeAt(U + 1)) {
                      case 235:
                        C = 47;
                        break;
                      case 220:
                        ue = U, C = 42;
                    }
                    break;
                  case 42:
                    m === 47 && G === 42 && ue + 2 !== U && (X.charCodeAt(ue + 2) === 33 && (re += X.substring(ue, U + 1)), ye = "", C = 0);
                }
          }
          C === 0 && (V += ye);
      }
      D = G, G = m, U++;
    }
    if (ue = re.length, 0 < ue) {
      if (ce = B, 0 < Q && (ke = c(2, re, ce, H, T, q, ue, te, S, te), ke !== void 0 && (re = ke).length === 0))
        return Ce + re + le;
      if (re = ce.join(",") + "{" + re + "}", A * E !== 0) {
        switch (A !== 2 || s(re, 2) || (E = 0), E) {
          case 111:
            re = re.replace(k, ":-moz-$1") + re;
            break;
          case 112:
            re = re.replace(L, "::-webkit-input-$1") + re.replace(L, "::-moz-$1") + re.replace(L, ":-ms-input-$1") + re;
        }
        E = 0;
      }
    }
    return Ce + re + le;
  }
  function t(H, B, X) {
    var te = B.trim().split(p);
    B = te;
    var S = te.length, I = H.length;
    switch (I) {
      case 0:
      case 1:
        var C = 0;
        for (H = I === 0 ? "" : H[0] + " "; C < S; ++C)
          B[C] = r(H, B[C], X).trim();
        break;
      default:
        var Z = C = 0;
        for (B = []; C < S; ++C)
          for (var K = 0; K < I; ++K)
            B[Z++] = r(H[K] + " ", te[C], X).trim();
    }
    return B;
  }
  function r(H, B, X) {
    var te = B.charCodeAt(0);
    switch (33 > te && (te = (B = B.trim()).charCodeAt(0)), te) {
      case 38:
        return B.replace(O, "$1" + H.trim());
      case 58:
        return H.trim() + B.replace(O, "$1" + H.trim());
      default:
        if (0 < 1 * X && 0 < B.indexOf("\f"))
          return B.replace(O, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + B;
  }
  function o(H, B, X, te) {
    var S = H + ";", I = 2 * B + 3 * X + 4 * te;
    if (I === 944) {
      H = S.indexOf(":", 9) + 1;
      var C = S.substring(H, S.length - 1).trim();
      return C = S.substring(0, H).trim() + C + ";", A === 1 || A === 2 && s(C, 1) ? "-webkit-" + C + C : C;
    }
    if (A === 0 || A === 2 && !s(S, 1))
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
          return S.replace(J, "$1-webkit-$2") + S;
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
        return v.test(S) ? S.replace(x, ":-webkit-") + S.replace(x, ":-moz-") + S : S;
      case 1e3:
        switch (C = S.substring(13).trim(), B = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(B)) {
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
        switch (B = (S = H).length - 10, C = (S.charCodeAt(B) === 33 ? S.substring(0, B) : S).substring(H.indexOf(":", 7) + 1).trim(), I = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8))
              break;
          case 115:
            S = S.replace(C, "-webkit-" + C) + ";" + S;
            break;
          case 207:
          case 102:
            S = S.replace(C, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + S.replace(C, "-webkit-" + C) + ";" + S.replace(C, "-ms-" + C + "box") + ";" + S;
        }
        return S + ";";
      case 938:
        if (S.charCodeAt(5) === 45)
          switch (S.charCodeAt(6)) {
            case 105:
              return C = S.replace("-items", ""), "-webkit-" + S + "-webkit-box-" + C + "-ms-flex-" + C + S;
            case 115:
              return "-webkit-" + S + "-ms-flex-item-" + S.replace($, "") + S;
            default:
              return "-webkit-" + S + "-ms-flex-line-pack" + S.replace("align-content", "").replace($, "") + S;
          }
        break;
      case 973:
      case 989:
        if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (Y.test(H) === !0)
          return (C = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(H.replace("stretch", "fill-available"), B, X, te).replace(":fill-available", ":stretch") : S.replace(C, "-webkit-" + C) + S.replace(C, "-moz-" + C.replace("fill-", "")) + S;
        break;
      case 962:
        if (S = "-webkit-" + S + (S.charCodeAt(5) === 102 ? "-ms-" + S : "") + S, X + te === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf("transform", 10))
          return S.substring(0, S.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + S;
    }
    return S;
  }
  function s(H, B) {
    var X = H.indexOf(B === 1 ? ":" : "{"), te = H.substring(0, B !== 3 ? X : 10);
    return X = H.substring(X + 1, H.length - 1), ee(B !== 2 ? te : te.replace(P, "$1"), X, B);
  }
  function i(H, B) {
    var X = o(B, B.charCodeAt(0), B.charCodeAt(1), B.charCodeAt(2));
    return X !== B + ";" ? X.replace(w, " or ($1)").substring(4) : "(" + B + ")";
  }
  function c(H, B, X, te, S, I, C, Z, K, F) {
    for (var m = 0, G = B, D; m < Q; ++m)
      switch (D = R[m].call(l, H, G, X, te, S, I, C, Z, K, F)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          G = D;
      }
    if (G !== B)
      return G;
  }
  function d(H) {
    switch (H) {
      case void 0:
      case null:
        Q = R.length = 0;
        break;
      default:
        if (typeof H == "function")
          R[Q++] = H;
        else if (typeof H == "object")
          for (var B = 0, X = H.length; B < X; ++B)
            d(H[B]);
        else
          se = !!H | 0;
    }
    return d;
  }
  function a(H) {
    return H = H.prefix, H !== void 0 && (ee = null, H ? typeof H != "function" ? A = 1 : (A = 2, ee = H) : A = 0), a;
  }
  function l(H, B) {
    var X = H;
    if (33 > X.charCodeAt(0) && (X = X.trim()), ae = X, X = [ae], 0 < Q) {
      var te = c(-1, B, X, X, T, q, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (B = te);
    }
    var S = n(N, X, B, 0, 0);
    return 0 < Q && (te = c(-2, S, X, X, T, q, S.length, 0, 0, 0), te !== void 0 && (S = te)), ae = "", E = 0, q = T = 1, S;
  }
  var f = /^\0+/g, y = /[\0\r\f]/g, x = /: */g, v = /zoo|gra/, M = /([,: ])(transform)/g, p = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, L = /::(place)/g, k = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, g = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, $ = /-self|flex-/g, P = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Y = /stretch|:\s*\w+\-(?:conte|avail)/, J = /([^-])(image-set\()/, q = 1, T = 1, E = 0, A = 1, N = [], R = [], Q = 0, ee = null, se = 0, ae = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
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
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var To = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fn = /* @__PURE__ */ _o(
  function(e) {
    return To.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qt = {}, Ao = {
  get exports() {
    return qt;
  },
  set exports(e) {
    qt = e;
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
var Wn;
function Po() {
  if (Wn)
    return we;
  Wn = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function L(u) {
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
                case x:
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
  function k(u) {
    return L(u) === a;
  }
  return we.AsyncMode = d, we.ConcurrentMode = a, we.ContextConsumer = c, we.ContextProvider = i, we.Element = n, we.ForwardRef = l, we.Fragment = r, we.Lazy = v, we.Memo = x, we.Portal = t, we.Profiler = s, we.StrictMode = o, we.Suspense = f, we.isAsyncMode = function(u) {
    return k(u) || L(u) === d;
  }, we.isConcurrentMode = k, we.isContextConsumer = function(u) {
    return L(u) === c;
  }, we.isContextProvider = function(u) {
    return L(u) === i;
  }, we.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, we.isForwardRef = function(u) {
    return L(u) === l;
  }, we.isFragment = function(u) {
    return L(u) === r;
  }, we.isLazy = function(u) {
    return L(u) === v;
  }, we.isMemo = function(u) {
    return L(u) === x;
  }, we.isPortal = function(u) {
    return L(u) === t;
  }, we.isProfiler = function(u) {
    return L(u) === s;
  }, we.isStrictMode = function(u) {
    return L(u) === o;
  }, we.isSuspense = function(u) {
    return L(u) === f;
  }, we.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === y || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === x || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === p || u.$$typeof === O || u.$$typeof === z || u.$$typeof === M);
  }, we.typeOf = L, we;
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
function Io() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function L(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === r || m === a || m === s || m === o || m === f || m === y || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === x || m.$$typeof === i || m.$$typeof === c || m.$$typeof === l || m.$$typeof === p || m.$$typeof === O || m.$$typeof === z || m.$$typeof === M);
    }
    function k(m) {
      if (typeof m == "object" && m !== null) {
        var G = m.$$typeof;
        switch (G) {
          case n:
            var D = m.type;
            switch (D) {
              case d:
              case a:
              case r:
              case s:
              case o:
              case f:
                return D;
              default:
                var j = D && D.$$typeof;
                switch (j) {
                  case c:
                  case l:
                  case v:
                  case x:
                  case i:
                    return j;
                  default:
                    return G;
                }
            }
          case t:
            return G;
        }
      }
    }
    var u = d, g = a, w = c, $ = i, P = n, Y = l, J = r, q = v, T = x, E = t, A = s, N = o, R = f, Q = !1;
    function ee(m) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(m) || k(m) === d;
    }
    function se(m) {
      return k(m) === a;
    }
    function ae(m) {
      return k(m) === c;
    }
    function H(m) {
      return k(m) === i;
    }
    function B(m) {
      return typeof m == "object" && m !== null && m.$$typeof === n;
    }
    function X(m) {
      return k(m) === l;
    }
    function te(m) {
      return k(m) === r;
    }
    function S(m) {
      return k(m) === v;
    }
    function I(m) {
      return k(m) === x;
    }
    function C(m) {
      return k(m) === t;
    }
    function Z(m) {
      return k(m) === s;
    }
    function K(m) {
      return k(m) === o;
    }
    function F(m) {
      return k(m) === f;
    }
    Se.AsyncMode = u, Se.ConcurrentMode = g, Se.ContextConsumer = w, Se.ContextProvider = $, Se.Element = P, Se.ForwardRef = Y, Se.Fragment = J, Se.Lazy = q, Se.Memo = T, Se.Portal = E, Se.Profiler = A, Se.StrictMode = N, Se.Suspense = R, Se.isAsyncMode = ee, Se.isConcurrentMode = se, Se.isContextConsumer = ae, Se.isContextProvider = H, Se.isElement = B, Se.isForwardRef = X, Se.isFragment = te, Se.isLazy = S, Se.isMemo = I, Se.isPortal = C, Se.isProfiler = Z, Se.isStrictMode = K, Se.isSuspense = F, Se.isValidElementType = L, Se.typeOf = k;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Po() : e.exports = Io();
})(Ao);
var $n = qt, Oo = {
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
}, Lo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, zr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Dn = {};
Dn[$n.ForwardRef] = Lo;
Dn[$n.Memo] = zr;
function Zn(e) {
  return $n.isMemo(e) ? zr : Dn[e.$$typeof] || Oo;
}
var Ro = Object.defineProperty, No = Object.getOwnPropertyNames, Vn = Object.getOwnPropertySymbols, Ho = Object.getOwnPropertyDescriptor, Bo = Object.getPrototypeOf, Gn = Object.prototype;
function Fr(e, n, t) {
  if (typeof n != "string") {
    if (Gn) {
      var r = Bo(n);
      r && r !== Gn && Fr(e, r, t);
    }
    var o = No(n);
    Vn && (o = o.concat(Vn(n)));
    for (var s = Zn(e), i = Zn(n), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!Yo[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = Ho(n, d);
        try {
          Ro(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var zo = Fr;
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
}, Yt = Object.freeze([]), Ue = Object.freeze({});
function ut(e) {
  return typeof e == "function";
}
function en(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function En(e) {
  return e && typeof e.styledComponentId == "string";
}
var ft = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", _n = typeof window < "u" && "HTMLElement" in window, Fo = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Wo = {}, jo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Fe(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Zo.apply(void 0, [jo[e]].concat(t)).trim());
}
var Vo = function() {
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
}(), It = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), St = 1, Et = function(e) {
  if (It.has(e))
    return It.get(e);
  for (; Lt.has(St); )
    St++;
  var n = St++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Fe(16, "" + n), It.set(e, n), Lt.set(n, e), n;
}, Go = function(e) {
  return Lt.get(e);
}, Xo = function(e, n) {
  n >= St && (St = n + 1), It.set(e, n), Lt.set(n, e);
}, Uo = "style[" + ft + '][data-styled-version="5.3.8"]', Ko = new RegExp("^" + ft + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Jo = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, qo = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Ko);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (Xo(a, d), Jo(e, a, c[3]), e.getTag().insertRules(d, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, Qo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Wr = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(ft))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ft, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = Qo();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, es = function() {
  function e(t) {
    var r = this.element = Wr(t);
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
}(), ts = function() {
  function e(t) {
    var r = this.element = Wr(t);
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
}(), ns = function() {
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
}(), Un = _n, rs = { isServer: !_n, useCSSOMInjection: !Fo }, Rt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ue), r === void 0 && (r = {}), this.options = Le({}, rs, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && _n && Un && (Un = !1, function(s) {
      for (var i = document.querySelectorAll(Uo), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(ft) !== "active" && (qo(s, a), a.parentNode && a.parentNode.removeChild(a));
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
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new ns(i) : s ? new es(i) : new ts(i), new Vo(t)));
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
        var c = Go(i);
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
}(), os = /(a)(d)/gi, Kn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function tn(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Kn(n % 52) + t;
  return (Kn(n % 52) + t).replace(os, "$1-$2");
}
var qe = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, jr = function(e) {
  return qe(5381, e);
};
function Zr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (ut(t) && !En(t))
      return !1;
  }
  return !0;
}
var ss = jr("5.3.8"), is = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Zr(n), this.componentId = t, this.baseHash = qe(ss, t), this.baseStyle = r, Rt.registerId(t);
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
      for (var a = this.rules.length, l = qe(this.baseHash, r.hash), f = "", y = 0; y < a; y++) {
        var x = this.rules[y];
        if (typeof x == "string")
          f += x, process.env.NODE_ENV !== "production" && (l = qe(l, x + y));
        else if (x) {
          var v = tt(x, n, t, r), M = Array.isArray(v) ? v.join("") : v;
          l = qe(l, M + y), f += M;
        }
      }
      if (f) {
        var p = tn(l >>> 0);
        if (!t.hasNameForId(o, p)) {
          var O = r(f, "." + p, void 0, o);
          t.insertRules(o, p, O);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), as = /^\s*\/\/.*$/gm, cs = [":", "[", ".", "#"];
function ls(e) {
  var n, t, r, o, s = e === void 0 ? Ue : e, i = s.options, c = i === void 0 ? Ue : i, d = s.plugins, a = d === void 0 ? Yt : d, l = new Do(c), f = [], y = function(M) {
    function p(O) {
      if (O)
        try {
          M(O + "}");
        } catch {
        }
    }
    return function(O, z, L, k, u, g, w, $, P, Y) {
      switch (O) {
        case 1:
          if (P === 0 && z.charCodeAt(0) === 64)
            return M(z + ";"), "";
          break;
        case 2:
          if ($ === 0)
            return z + "/*|*/";
          break;
        case 3:
          switch ($) {
            case 102:
            case 112:
              return M(L[0] + z), "";
            default:
              return z + (Y === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(p);
      }
    };
  }(function(M) {
    f.push(M);
  }), x = function(M, p, O) {
    return p === 0 && cs.indexOf(O[t.length]) !== -1 || O.match(o) ? M : "." + n;
  };
  function v(M, p, O, z) {
    z === void 0 && (z = "&");
    var L = M.replace(as, ""), k = p && O ? O + " " + p + " { " + L + " }" : L;
    return n = z, t = p, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(O || !p ? "" : p, k);
  }
  return l.use([].concat(a, [function(M, p, O) {
    M === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(r, x));
  }, y, function(M) {
    if (M === -2) {
      var p = f;
      return f = [], p;
    }
  }])), v.hash = a.length ? a.reduce(function(M, p) {
    return p.name || Fe(15), qe(M, p.name);
  }, 5381).toString() : "", v;
}
var Vr = et.createContext();
Vr.Consumer;
var Gr = et.createContext(), ds = (Gr.Consumer, new Rt()), nn = ls();
function Xr() {
  return Ke(Vr) || ds;
}
function Ur() {
  return Ke(Gr) || nn;
}
var Kr = function() {
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
}(), us = /([A-Z])/, fs = /([A-Z])/g, hs = /^ms-/, ps = function(e) {
  return "-" + e.toLowerCase();
};
function Jn(e) {
  return us.test(e) ? e.replace(fs, ps).replace(hs, "-ms-") : e;
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
  return e instanceof Kr ? t ? (e.inject(t, r), e.getName(r)) : e : Qt(e) ? function l(f, y) {
    var x, v, M = [];
    for (var p in f)
      f.hasOwnProperty(p) && !qn(f[p]) && (Array.isArray(f[p]) && f[p].isCss || ut(f[p]) ? M.push(Jn(p) + ":", f[p], ";") : Qt(f[p]) ? M.push.apply(M, l(f[p], p)) : M.push(Jn(p) + ": " + (x = p, (v = f[p]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || x in Eo ? String(v).trim() : v + "px") + ";"));
    return y ? [y + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var Qn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function zt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return ut(e) || Qt(e) ? Qn(tt(Xn(Yt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Qn(tt(Xn(e, t)));
}
var er = /invalid hook call/i, _t = /* @__PURE__ */ new Set(), Jr = function(e, n) {
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
}, qr = function(e, n, t) {
  return t === void 0 && (t = Ue), e.theme !== t.theme && e.theme || n || t.theme;
}, ms = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, gs = /(^-|-$)/g;
function jt(e) {
  return e.replace(ms, "-").replace(gs, "");
}
var Tn = function(e) {
  return tn(jr(e) >>> 0);
};
function Tt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var rn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ys = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function vs(e, n, t) {
  var r = e[t];
  rn(n) && rn(r) ? Qr(r, n) : e[t] = n;
}
function Qr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (rn(i))
      for (var c in i)
        ys(c) && vs(e, i[c], c);
  }
  return e;
}
var ht = et.createContext();
ht.Consumer;
function xs(e) {
  var n = Ke(ht), t = Me(function() {
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
function eo(e, n, t) {
  var r = En(e), o = !Tt(e), s = n.attrs, i = s === void 0 ? Yt : s, c = n.componentId, d = c === void 0 ? function(z, L) {
    var k = typeof z != "string" ? "sc" : jt(z);
    Zt[k] = (Zt[k] || 0) + 1;
    var u = k + "-" + Tn("5.3.8" + k + Zt[k]);
    return L ? L + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(z) {
    return Tt(z) ? "styled." + z : "Styled(" + en(z) + ")";
  }(e) : a, f = n.displayName && n.componentId ? jt(n.displayName) + "-" + n.componentId : n.componentId || d, y = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, x = n.shouldForwardProp;
  r && e.shouldForwardProp && (x = n.shouldForwardProp ? function(z, L, k) {
    return e.shouldForwardProp(z, L, k) && n.shouldForwardProp(z, L, k);
  } : e.shouldForwardProp);
  var v, M = new is(t, f, r ? e.componentStyle : void 0), p = M.isStatic && i.length === 0, O = function(z, L) {
    return function(k, u, g, w) {
      var $ = k.attrs, P = k.componentStyle, Y = k.defaultProps, J = k.foldedComponentIds, q = k.shouldForwardProp, T = k.styledComponentId, E = k.target;
      process.env.NODE_ENV !== "production" && Hn(T);
      var A = function(te, S, I) {
        te === void 0 && (te = Ue);
        var C = Le({}, S, { theme: te }), Z = {};
        return I.forEach(function(K) {
          var F, m, G, D = K;
          for (F in ut(D) && (D = D(C)), D)
            C[F] = Z[F] = F === "className" ? (m = Z[F], G = D[F], m && G ? m + " " + G : m || G) : D[F];
        }), [C, Z];
      }(qr(u, Ke(ht), Y) || Ue, u, $), N = A[0], R = A[1], Q = function(te, S, I, C) {
        var Z = Xr(), K = Ur(), F = S ? te.generateAndInjectStyles(Ue, Z, K) : te.generateAndInjectStyles(I, Z, K);
        return process.env.NODE_ENV !== "production" && Hn(F), process.env.NODE_ENV !== "production" && !S && C && C(F), F;
      }(P, w, N, process.env.NODE_ENV !== "production" ? k.warnTooManyClasses : void 0), ee = g, se = R.$as || u.$as || R.as || u.as || E, ae = Tt(se), H = R !== u ? Le({}, u, {}, R) : u, B = {};
      for (var X in H)
        X[0] !== "$" && X !== "as" && (X === "forwardedAs" ? B.as = H[X] : (q ? q(X, Fn, se) : !ae || Fn(X)) && (B[X] = H[X]));
      return u.style && R.style !== u.style && (B.style = Le({}, u.style, {}, R.style)), B.className = Array.prototype.concat(J, T, Q !== T ? Q : null, u.className, R.className).filter(Boolean).join(" "), B.ref = ee, So(se, B);
    }(v, z, L, p);
  };
  return O.displayName = l, (v = et.forwardRef(O)).attrs = y, v.componentStyle = M, v.displayName = l, v.shouldForwardProp = x, v.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Yt, v.styledComponentId = f, v.target = r ? e.target : e, v.withComponent = function(z) {
    var L = n.componentId, k = function(g, w) {
      if (g == null)
        return {};
      var $, P, Y = {}, J = Object.keys(g);
      for (P = 0; P < J.length; P++)
        $ = J[P], w.indexOf($) >= 0 || (Y[$] = g[$]);
      return Y;
    }(n, ["componentId"]), u = L && L + "-" + (Tt(z) ? z : jt(en(z)));
    return eo(z, Le({}, k, { attrs: y, componentId: u }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = r ? Qr({}, e.defaultProps, z) : z;
  } }), process.env.NODE_ENV !== "production" && (Jr(l, f), v.warnTooManyClasses = function(z, L) {
    var k = {}, u = !1;
    return function(g) {
      if (!u && (k[g] = !0, Object.keys(k).length >= 200)) {
        var w = L ? ' with the id of "' + L + '"' : "";
        console.warn("Over 200 classes were generated for component " + z + w + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, k = {};
      }
    };
  }(l, f)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && zo(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var on = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Ue), !Ct.isValidElementType(r))
      return Fe(1, String(r));
    var s = function() {
      return t(r, o, zt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Le({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Le({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(eo, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  on[e] = on(e);
});
var bs = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Zr(t), Rt.registerId(this.componentId + 1);
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
function ws(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = zt.apply(void 0, [e].concat(t)), s = "sc-global-" + Tn(JSON.stringify(o)), i = new bs(o, s);
  function c(a) {
    var l = Xr(), f = Ur(), y = Ke(ht), x = me(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && et.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(x, a, l, y, f), Bt(function() {
      if (!l.server)
        return d(x, a, l, y, f), function() {
          return i.removeStyles(x, l);
        };
    }, [x, a, l, y, f]), null;
  }
  function d(a, l, f, y, x) {
    if (i.isStatic)
      i.renderStyles(a, Wo, f, x);
    else {
      var v = Le({}, l, { theme: qr(l, y, c.defaultProps) });
      i.renderStyles(a, v, f, x);
    }
  }
  return process.env.NODE_ENV !== "production" && Jr(s), et.memo(c);
}
function yt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = zt.apply(void 0, [e].concat(t)).join(""), s = Tn(o);
  return new Kr(s, o);
}
var Ft = function() {
  return Ke(ht);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const b = on, wt = "reactSchedulerOutsideWrapper", Ye = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Ss = ws`

  #${wt} {
    font-family: ${Ye};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${wt} *,
 #${wt} *:before,
 #${wt} *:after {
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
}, vt = `
margin: 0;
padding: 0;
`, xt = `
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
const $e = 50, je = 24, bt = 16, Qe = 40, pt = Qe + bt + je, mt = 84, ge = 56, Ie = 196, Oe = 12, Ae = 50, gt = 24, Mt = 16, sn = 40, ks = gt + Mt + sn, tr = 24, nr = 52, Re = {
  topRow: `600 14px ${Ye}`,
  middleRow: `400 10px ${Ye}`,
  bottomRow: {
    name: `600 14px ${Ye}`,
    number: `600 10px ${Ye}`,
    hoursInDay: `400 9px ${Ye}`
  }
}, dt = 3, $s = 1.6, Ds = 4.5, an = 12, Nt = 24, Es = "reactSchedulerCanvasHeaderWrapper", to = "reactSchedulerCanvasWrapper", We = wt, _s = 4, An = 48, Xe = 5, Ts = 40, rr = 8, Pn = je / 2 + 2, no = bt / 2 + je + 1, or = 2, De = 60, Pe = 21, ro = 58, oo = "reactSchedulerBody";
var nt = {}, As = {
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
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", y = "quarter", x = "year", v = "date", M = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, z = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var E = ["th", "st", "nd", "rd"], A = T % 100;
      return "[" + T + (E[(A - 20) % 10] || E[A] || E[0]) + "]";
    } }, L = function(T, E, A) {
      var N = String(T);
      return !N || N.length >= E ? T : "" + Array(E + 1 - N.length).join(A) + T;
    }, k = { s: L, z: function(T) {
      var E = -T.utcOffset(), A = Math.abs(E), N = Math.floor(A / 60), R = A % 60;
      return (E <= 0 ? "+" : "-") + L(N, 2, "0") + ":" + L(R, 2, "0");
    }, m: function T(E, A) {
      if (E.date() < A.date())
        return -T(A, E);
      var N = 12 * (A.year() - E.year()) + (A.month() - E.month()), R = E.clone().add(N, f), Q = A - R < 0, ee = E.clone().add(N + (Q ? -1 : 1), f);
      return +(-(N + (A - R) / (Q ? R - ee : ee - R)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: f, y: x, w: l, d: a, D: v, h: d, m: c, s: i, ms: s, Q: y }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, u = "en", g = {};
    g[u] = z;
    var w = function(T) {
      return T instanceof J;
    }, $ = function T(E, A, N) {
      var R;
      if (!E)
        return u;
      if (typeof E == "string") {
        var Q = E.toLowerCase();
        g[Q] && (R = Q), A && (g[Q] = A, R = Q);
        var ee = E.split("-");
        if (!R && ee.length > 1)
          return T(ee[0]);
      } else {
        var se = E.name;
        g[se] = E, R = se;
      }
      return !N && R && (u = R), R || !N && u;
    }, P = function(T, E) {
      if (w(T))
        return T.clone();
      var A = typeof E == "object" ? E : {};
      return A.date = T, A.args = arguments, new J(A);
    }, Y = k;
    Y.l = $, Y.i = w, Y.w = function(T, E) {
      return P(T, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var J = function() {
      function T(A) {
        this.$L = $(A.locale, null, !0), this.parse(A);
      }
      var E = T.prototype;
      return E.parse = function(A) {
        this.$d = function(N) {
          var R = N.date, Q = N.utc;
          if (R === null)
            return new Date(NaN);
          if (Y.u(R))
            return new Date();
          if (R instanceof Date)
            return new Date(R);
          if (typeof R == "string" && !/Z$/i.test(R)) {
            var ee = R.match(p);
            if (ee) {
              var se = ee[2] - 1 || 0, ae = (ee[7] || "0").substring(0, 3);
              return Q ? new Date(Date.UTC(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, ae)) : new Date(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, ae);
            }
          }
          return new Date(R);
        }(A), this.$x = A.x || {}, this.init();
      }, E.init = function() {
        var A = this.$d;
        this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
      }, E.$utils = function() {
        return Y;
      }, E.isValid = function() {
        return this.$d.toString() !== M;
      }, E.isSame = function(A, N) {
        var R = P(A);
        return this.startOf(N) <= R && R <= this.endOf(N);
      }, E.isAfter = function(A, N) {
        return P(A) < this.startOf(N);
      }, E.isBefore = function(A, N) {
        return this.endOf(N) < P(A);
      }, E.$g = function(A, N, R) {
        return Y.u(A) ? this[N] : this.set(R, A);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function(A, N) {
        var R = this, Q = !!Y.u(N) || N, ee = Y.p(A), se = function(C, Z) {
          var K = Y.w(R.$u ? Date.UTC(R.$y, Z, C) : new Date(R.$y, Z, C), R);
          return Q ? K : K.endOf(a);
        }, ae = function(C, Z) {
          return Y.w(R.toDate()[C].apply(R.toDate("s"), (Q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), R);
        }, H = this.$W, B = this.$M, X = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case x:
            return Q ? se(1, 0) : se(31, 11);
          case f:
            return Q ? se(1, B) : se(0, B + 1);
          case l:
            var S = this.$locale().weekStart || 0, I = (H < S ? H + 7 : H) - S;
            return se(Q ? X - I : X + (6 - I), B);
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
      }, E.endOf = function(A) {
        return this.startOf(A, !1);
      }, E.$set = function(A, N) {
        var R, Q = Y.p(A), ee = "set" + (this.$u ? "UTC" : ""), se = (R = {}, R[a] = ee + "Date", R[v] = ee + "Date", R[f] = ee + "Month", R[x] = ee + "FullYear", R[d] = ee + "Hours", R[c] = ee + "Minutes", R[i] = ee + "Seconds", R[s] = ee + "Milliseconds", R)[Q], ae = Q === a ? this.$D + (N - this.$W) : N;
        if (Q === f || Q === x) {
          var H = this.clone().set(v, 1);
          H.$d[se](ae), H.init(), this.$d = H.set(v, Math.min(this.$D, H.daysInMonth())).$d;
        } else
          se && this.$d[se](ae);
        return this.init(), this;
      }, E.set = function(A, N) {
        return this.clone().$set(A, N);
      }, E.get = function(A) {
        return this[Y.p(A)]();
      }, E.add = function(A, N) {
        var R, Q = this;
        A = Number(A);
        var ee = Y.p(N), se = function(B) {
          var X = P(Q);
          return Y.w(X.date(X.date() + Math.round(B * A)), Q);
        };
        if (ee === f)
          return this.set(f, this.$M + A);
        if (ee === x)
          return this.set(x, this.$y + A);
        if (ee === a)
          return se(1);
        if (ee === l)
          return se(7);
        var ae = (R = {}, R[c] = r, R[d] = o, R[i] = t, R)[ee] || 1, H = this.$d.getTime() + A * ae;
        return Y.w(H, this);
      }, E.subtract = function(A, N) {
        return this.add(-1 * A, N);
      }, E.format = function(A) {
        var N = this, R = this.$locale();
        if (!this.isValid())
          return R.invalidDate || M;
        var Q = A || "YYYY-MM-DDTHH:mm:ssZ", ee = Y.z(this), se = this.$H, ae = this.$m, H = this.$M, B = R.weekdays, X = R.months, te = function(Z, K, F, m) {
          return Z && (Z[K] || Z(N, Q)) || F[K].slice(0, m);
        }, S = function(Z) {
          return Y.s(se % 12 || 12, Z, "0");
        }, I = R.meridiem || function(Z, K, F) {
          var m = Z < 12 ? "AM" : "PM";
          return F ? m.toLowerCase() : m;
        }, C = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: H + 1, MM: Y.s(H + 1, 2, "0"), MMM: te(R.monthsShort, H, X, 3), MMMM: te(X, H), D: this.$D, DD: Y.s(this.$D, 2, "0"), d: String(this.$W), dd: te(R.weekdaysMin, this.$W, B, 2), ddd: te(R.weekdaysShort, this.$W, B, 3), dddd: B[this.$W], H: String(se), HH: Y.s(se, 2, "0"), h: S(1), hh: S(2), a: I(se, ae, !0), A: I(se, ae, !1), m: String(ae), mm: Y.s(ae, 2, "0"), s: String(this.$s), ss: Y.s(this.$s, 2, "0"), SSS: Y.s(this.$ms, 3, "0"), Z: ee };
        return Q.replace(O, function(Z, K) {
          return K || C[Z] || ee.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function(A, N, R) {
        var Q, ee = Y.p(N), se = P(A), ae = (se.utcOffset() - this.utcOffset()) * r, H = this - se, B = Y.m(this, se);
        return B = (Q = {}, Q[x] = B / 12, Q[f] = B, Q[y] = B / 3, Q[l] = (H - ae) / 6048e5, Q[a] = (H - ae) / 864e5, Q[d] = H / o, Q[c] = H / r, Q[i] = H / t, Q)[ee] || H, R ? B : Y.a(B);
      }, E.daysInMonth = function() {
        return this.endOf(f).$D;
      }, E.$locale = function() {
        return g[this.$L];
      }, E.locale = function(A, N) {
        if (!A)
          return this.$L;
        var R = this.clone(), Q = $(A, N, !0);
        return Q && (R.$L = Q), R;
      }, E.clone = function() {
        return Y.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), q = J.prototype;
    return P.prototype = q, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", x], ["$D", v]].forEach(function(T) {
      q[T[1]] = function(E) {
        return this.$g(E, T[0], T[1]);
      };
    }), P.extend = function(T, E) {
      return T.$i || (T(E, J, P), T.$i = !0), P;
    }, P.locale = $, P.isDayjs = w, P.unix = function(T) {
      return P(1e3 * T);
    }, P.en = g[u], P.Ls = g, P.p = {}, P;
  });
})(As);
const _ = nt, sr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, In = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, so = (e, n) => _(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), io = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: In(e),
  isCurrentDay: e.isSame(_(), "day"),
  year: parseInt(e.format("YYYY"))
});
let At = null;
const Ps = (e) => {
  if (At)
    return At;
  const n = document.createElement("canvas");
  n.width = 12, n.height = 12;
  const t = n.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), At = e.createPattern(n, "repeat"), At) : null;
}, On = (e, n, t, r, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, ge), c && !s) {
    const d = Ps(e);
    d && (e.fillStyle = d, e.fillRect(n, t, r, ge));
  }
  e.strokeRect(n + 0.5, t + 0.5, r, ge);
}, Yn = (e, n) => {
  let t = 0;
  for (const r of n)
    r <= e && t++;
  return t * Pe;
}, Is = (e, n, t, r, o, s = []) => {
  for (let i = 0; i < n; i++) {
    const c = Yn(i, s);
    for (let d = 0; d <= t; d++) {
      const a = _(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(_(), "day"), f = a.isBefore(_(), "day");
      On(
        e,
        d * $e,
        i * ge + c,
        $e,
        In(a),
        l,
        o,
        f
      );
    }
  }
}, Os = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, Ys = (e, n, t, r, o, s = []) => {
  let i = 0, c = -(r.dayOfMonth - 1) * Oe;
  const d = n * ge + s.length * Pe;
  for (let a = 0; a <= t; a++) {
    const f = _(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(_(), "week");
    for (let y = 0; y < n; y++) {
      const x = Yn(y, s);
      On(e, i, y * ge + x, mt, !0, f, o);
    }
    i += mt;
  }
  for (let a = 0; a < t; a++) {
    const l = so(r, a) * Oe;
    Os(e, c, d, o), c += l;
  }
}, Ls = (e, n, t, r, o, s = []) => {
  const i = _(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let c = 0; c < n; c++) {
    const d = Yn(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = _() : a > Math.floor(t / 2) ? l = _().add(a - Math.floor(t / 2), "hours") : l = _().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(_(), "day") && l.isSame(_(), "hour");
      On(
        e,
        a * Ae + Ae / 2 - 0.5,
        c * ge + d,
        Ae,
        In(l),
        f,
        o
      );
    }
  }
}, Rs = (e, n, t, r) => {
  const o = t * ge + n * Pe, s = e.canvas.width, i = o + Pe / 2;
  e.fillStyle = r.mode === "dark" ? r.colors.primary + "80" : r.colors.primary, e.fillRect(0, o, s, Pe), e.strokeStyle = r.colors.border, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, i + 0.5), e.lineTo(s, i + 0.5), e.stroke();
}, Ns = (e, n, t, r, o, s, i = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(to)) {
    switch (n) {
      case 0:
        Ys(e, t, r, o, s, i);
        break;
      case 1:
        Is(e, t, r, o, s, i);
        break;
      case 2:
        Ls(e, t, r, o, s, i);
        break;
    }
    for (let d = 0; d < i.length; d++)
      Rs(e, d, i[d], s);
  }
};
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
        var y = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), x = this.diff(y, t, !0);
        return x < 0 ? i(this).startOf("week").week() : Math.ceil(x);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(Hs);
const Bs = cn;
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
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(zs);
const Fs = ln;
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
        var l, f, y, x, v = i(this), M = (l = this.isoWeekYear(), f = this.$u, y = (f ? s.utc : s)().year(l).startOf("year"), x = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (x += 7), y.add(x, t));
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
})(Ws);
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
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), f = (d = d || "()")[0] === "(", y = d[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(l, c) : !this.isAfter(l, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(Zs);
const Vs = un;
var fn = {}, Gs = {
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
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, x = function(u) {
      return u instanceof k;
    }, v = function(u, g, w) {
      return new k(u, w, g.$l);
    }, M = function(u) {
      return r.p(u) + "s";
    }, p = function(u) {
      return u < 0;
    }, O = function(u) {
      return p(u) ? Math.ceil(u) : Math.floor(u);
    }, z = function(u) {
      return Math.abs(u);
    }, L = function(u, g) {
      return u ? p(u) ? { negative: !0, format: "" + z(u) + g } : { negative: !1, format: "" + u + g } : { negative: !1, format: "" };
    }, k = function() {
      function u(w, $, P) {
        var Y = this;
        if (this.$d = {}, this.$l = P, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), $)
          return v(w * y[M($)], this);
        if (typeof w == "number")
          return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object")
          return Object.keys(w).forEach(function(T) {
            Y.$d[M(T)] = w[T];
          }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var J = w.match(f);
          if (J) {
            var q = J.slice(2).map(function(T) {
              return T != null ? Number(T) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var g = u.prototype;
      return g.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function($, P) {
          return $ + (w.$d[P] || 0) * y[P];
        }, 0);
      }, g.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = O(w / a), w %= a, this.$d.months = O(w / l), w %= l, this.$d.days = O(w / c), w %= c, this.$d.hours = O(w / i), w %= i, this.$d.minutes = O(w / s), w %= s, this.$d.seconds = O(w / o), w %= o, this.$d.milliseconds = w;
      }, g.toISOString = function() {
        var w = L(this.$d.years, "Y"), $ = L(this.$d.months, "M"), P = +this.$d.days || 0;
        this.$d.weeks && (P += 7 * this.$d.weeks);
        var Y = L(P, "D"), J = L(this.$d.hours, "H"), q = L(this.$d.minutes, "M"), T = this.$d.seconds || 0;
        this.$d.milliseconds && (T += this.$d.milliseconds / 1e3);
        var E = L(T, "S"), A = w.negative || $.negative || Y.negative || J.negative || q.negative || E.negative, N = J.format || q.format || E.format ? "T" : "", R = (A ? "-" : "") + "P" + w.format + $.format + Y.format + N + J.format + q.format + E.format;
        return R === "P" || R === "-P" ? "P0D" : R;
      }, g.toJSON = function() {
        return this.toISOString();
      }, g.format = function(w) {
        var $ = w || "YYYY-MM-DDTHH:mm:ss", P = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return $.replace(d, function(Y, J) {
          return J || String(P[Y]);
        });
      }, g.as = function(w) {
        return this.$ms / y[M(w)];
      }, g.get = function(w) {
        var $ = this.$ms, P = M(w);
        return P === "milliseconds" ? $ %= 1e3 : $ = P === "weeks" ? O($ / y[P]) : this.$d[P], $ === 0 ? 0 : $;
      }, g.add = function(w, $, P) {
        var Y;
        return Y = $ ? w * y[M($)] : x(w) ? w.$ms : v(w, this).$ms, v(this.$ms + Y * (P ? -1 : 1), this);
      }, g.subtract = function(w, $) {
        return this.add(w, $, !0);
      }, g.locale = function(w) {
        var $ = this.clone();
        return $.$l = w, $;
      }, g.clone = function() {
        return v(this.$ms, this);
      }, g.humanize = function(w) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
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
    return function(u, g, w) {
      t = w, r = w().$utils(), w.duration = function(Y, J) {
        var q = w.locale();
        return v(Y, { $l: q }, J);
      }, w.isDuration = x;
      var $ = g.prototype.add, P = g.prototype.subtract;
      g.prototype.add = function(Y, J) {
        return x(Y) && (Y = Y.asMilliseconds()), $.bind(this)(Y, J);
      }, g.prototype.subtract = function(Y, J) {
        return x(Y) && (Y = Y.asMilliseconds()), P.bind(this)(Y, J);
      };
    };
  });
})(Gs);
const Xs = fn;
var Us = "Expected a function", ir = 0 / 0, Ks = "[object Symbol]", Js = /^\s+|\s+$/g, qs = /^[-+]0x[0-9a-f]+$/i, Qs = /^0b[01]+$/i, ei = /^0o[0-7]+$/i, ti = parseInt, ni = typeof Te == "object" && Te && Te.Object === Object && Te, ri = typeof self == "object" && self && self.Object === Object && self, oi = ni || ri || Function("return this")(), si = Object.prototype, ii = si.toString, ai = Math.max, ci = Math.min, Vt = function() {
  return oi.Date.now();
};
function li(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(Us);
  n = ar(n) || 0, hn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? ai(ar(t.maxWait) || 0, n) : s, y = "trailing" in t ? !!t.trailing : y);
  function x(g) {
    var w = r, $ = o;
    return r = o = void 0, a = g, i = e.apply($, w), i;
  }
  function v(g) {
    return a = g, c = setTimeout(O, n), l ? x(g) : i;
  }
  function M(g) {
    var w = g - d, $ = g - a, P = n - w;
    return f ? ci(P, s - $) : P;
  }
  function p(g) {
    var w = g - d, $ = g - a;
    return d === void 0 || w >= n || w < 0 || f && $ >= s;
  }
  function O() {
    var g = Vt();
    if (p(g))
      return z(g);
    c = setTimeout(O, M(g));
  }
  function z(g) {
    return c = void 0, y && r ? x(g) : (r = o = void 0, i);
  }
  function L() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function k() {
    return c === void 0 ? i : z(Vt());
  }
  function u() {
    var g = Vt(), w = p(g);
    if (r = arguments, o = this, d = g, w) {
      if (c === void 0)
        return v(d);
      if (f)
        return c = setTimeout(O, n), x(d);
    }
    return c === void 0 && (c = setTimeout(O, n)), i;
  }
  return u.cancel = L, u.flush = k, u;
}
function hn(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function di(e) {
  return !!e && typeof e == "object";
}
function ui(e) {
  return typeof e == "symbol" || di(e) && ii.call(e) == Ks;
}
function ar(e) {
  if (typeof e == "number")
    return e;
  if (ui(e))
    return ir;
  if (hn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Js, "");
  var t = Qs.test(e);
  return t || ei.test(e) ? ti(e.slice(2), t ? 2 : 8) : qs.test(e) ? ir : +e;
}
var pn = li;
const Ot = [0, 1, 2];
var kt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(kt || {});
const ao = (e) => Ot.includes(e), ct = (e) => {
  var r;
  const t = (((r = document.getElementById(We)) == null ? void 0 : r.clientWidth) || 0) - Ie;
  switch (e) {
    case 1:
      return Math.ceil(t / $e) * dt;
    case 2:
      return Math.ceil(t / Ae) * dt;
    default:
      return Math.ceil(t / mt) * dt;
  }
}, mn = (e) => ct(e) / dt, Ln = (e, n) => {
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
}, fi = (e, n) => {
  const t = Ln(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Rn = () => {
  var t;
  return ((((t = document.getElementById(We)) == null ? void 0 : t.clientWidth) || 0) - Ie) * dt;
}, co = Hr({
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
_.extend(Bs);
_.extend(Fs);
_.extend(js);
_.extend(Vs);
_.extend(Xs);
const hi = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = _(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = pe(d), [y, x] = pe(_()), [v, M] = pe(!1), [p, O] = pe(ct(l)), z = Ot[l] !== Ot[Ot.length - 1], L = l !== 0, k = Me(() => fi(y, l), [y, l]), u = Ln(y, l).startDate, g = _(u).dayOfYear(), w = io(u), $ = me(null), P = me(!1), Y = me(null), [J, q] = pe([{ x: 0, y: 0 }]), T = de(
    (I, C = "auto") => {
      var K, F, m, G;
      const Z = Rn();
      switch (I) {
        case "back":
          return (K = $.current) == null ? void 0 : K.scrollTo({
            behavior: C,
            left: Z / 3
          });
        case "forward":
          return (F = $.current) == null ? void 0 : F.scrollTo({
            behavior: C,
            left: Z / 3
          });
        case "middle": {
          const D = Z / dt / 4;
          return (m = $.current) == null ? void 0 : m.scrollTo({
            behavior: C,
            left: Z / 2 - D
          });
        }
        default:
          return (G = $.current) == null ? void 0 : G.scrollTo({
            behavior: C,
            left: Z / 2
          });
      }
    },
    []
  ), E = (I) => {
    q(I);
  }, A = de(
    (I) => {
      const C = mn(l);
      let Z;
      switch (l) {
        case 0:
          Z = C * 7;
          break;
        case 1:
          Z = C;
          break;
        case 2:
          Z = Math.ceil(C / Nt);
          break;
      }
      pn(() => {
        switch ((I === "forward" || I === "back") && (P.current = !0), Y.current = I, I) {
          case "back":
            x((F) => F.subtract(Z, "days"));
            break;
          case "forward":
            x((F) => F.add(Z, "days"));
            break;
          case "middle":
            x(_());
            break;
        }
        s == null || s(k);
      }, 300)();
    },
    [s, k, l]
  );
  ve(() => {
    Y.current && (T(Y.current), Y.current = null);
  }, [y, T]), ve(() => {
    $.current = document.getElementById(We), O(ct(l));
  }, [l]), ve(() => {
    const I = () => O(ct(l));
    return window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
  }, [l]), ve(() => {
    s == null || s(k);
  }, [s, k]), ve(() => {
    M(!1);
  }, [o]), ve(() => {
    v || (T("middle"), M(!0), x(o));
  }, [o, v, T]);
  const N = () => {
    t || (x(
      (I) => l === 2 ? I.add(tr, "hours") : I.add(or, "weeks")
    ), s == null || s(k));
  }, R = de(() => {
    t || A("forward");
  }, [t, A]), Q = () => {
    t || (x(
      (I) => l === 2 ? I.subtract(tr, "hours") : I.subtract(or, "weeks")
    ), s == null || s(k));
  }, ee = de(() => {
    !v || t || A("back");
  }, [v, t, A]), se = de(() => {
    t || (Y.current = "middle", x(_()), s == null || s(k));
  }, [t, s, k]), ae = de(
    (I) => {
      if (t)
        return;
      const C = _(I).startOf("day");
      C.isValid() && (Y.current = "middle", x(C), s == null || s(k));
    },
    [t, s, k]
  ), H = () => X(l + 1), B = () => X(l - 1), X = (I) => {
    ao(I) && (f(I), O(ct(I)), s == null || s(k));
  }, te = () => i == null ? void 0 : i(), { Provider: S } = co;
  return /* @__PURE__ */ h(
    S,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: N,
        handleScrollNext: R,
        handleGoPrev: Q,
        handleScrollPrev: ee,
        handleGoToday: se,
        goToDate: ae,
        zoomIn: H,
        zoomOut: B,
        setZoom: X,
        zoom: l,
        isNextZoom: z,
        isPrevZoom: L,
        date: y,
        isLoading: t,
        cols: p,
        startDate: w,
        dayOfYear: g,
        toggleDisplayActiveUnits: te,
        tilesCoords: J,
        updateTilesCoords: E,
        recordsThreshold: a,
        onClearFilterData: c,
        suppressNextSlideRef: P
      },
      children: n
    }
  );
}, Ze = () => Ke(co), lo = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, uo = (e, n) => {
  if (n.length === 0)
    return e;
  let t = e, r = 0;
  for (const o of n) {
    const s = o * ge + r * Pe;
    if (e >= s + Pe)
      r++;
    else if (e >= s)
      return o * ge + r * Pe - r * Pe;
  }
  return t - r * Pe;
}, pi = 5, cr = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > pi;
}, lt = (e, n, t) => {
  const r = t.getBoundingClientRect();
  return {
    x: e - r.left + t.scrollLeft,
    y: n - r.top + t.scrollTop
  };
}, mi = ({
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
    resourceOnly: y = !1,
    isValidDrop: x
  } = i, [v, M] = pe("idle"), [p, O] = pe(null), [z, L] = pe({ x: 0, y: 0 }), [k, u] = pe({ width: 0, height: 48 }), [g, w] = pe(null), [$, P] = pe(!0), Y = me({ x: 0, y: 0 }), J = me({ x: 0, y: 0 }), q = me({ x: 0, y: 0 }), T = me(null), E = me(null), A = me(0), N = me(null), R = de(
    (I) => !l || I.draggable === !1 ? !1 : f ? f(I) : !0,
    [l, f]
  ), Q = de(
    (I, C) => {
      const Z = uo(C, d), K = Math.floor(Z / ge);
      let F;
      switch (t) {
        case 0:
          F = Oe * 7;
          break;
        case 1:
          F = $e;
          break;
        case 2:
          F = Ae;
          break;
        default:
          F = $e;
      }
      const m = Math.floor(I / F);
      let G;
      const D = _().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
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
      return { snappedDate: G, snappedResourceIndex: K };
    },
    [t, r, d]
  ), ee = de(
    (I, C, Z, K) => {
      const F = [], m = C.getTime(), G = Z.getTime(), D = a.find((ne) => ne.id === K);
      if (!D)
        return F;
      const j = [];
      for (const ne of D.data)
        Array.isArray(ne) ? j.push(...ne) : j.push(ne);
      for (const ne of j) {
        if (ne.segmentId === I.segmentId)
          continue;
        const U = ne.startDate.getTime(), ce = ne.endDate.getTime();
        if (m >= U && m < ce || G > U && G <= ce || m <= U && G >= ce) {
          const ue = new Date(Math.max(m, U)), ie = new Date(Math.min(G, ce)), he = ie.getTime() - ue.getTime();
          F.push({
            event: ne,
            conflictStart: ue,
            conflictEnd: ie,
            overlapDuration: he
          });
        }
      }
      return F;
    },
    [a]
  ), se = de(
    (I, C, Z, K) => {
      const F = [], m = C.getTime(), G = Z.getTime(), D = _(C).format("YYYY-MM-DD"), j = a.find((U) => U.id === K);
      if (!j)
        return F;
      const ne = [];
      for (const U of j.data)
        Array.isArray(U) ? ne.push(...U) : ne.push(U);
      for (const U of ne) {
        if (U.segmentId === I.segmentId)
          continue;
        const ce = U.startDate.getTime(), fe = U.endDate.getTime(), ue = _(U.startDate).format("YYYY-MM-DD"), ie = _(U.endDate).format("YYYY-MM-DD"), he = _(Z).format("YYYY-MM-DD");
        if (!(ue === D || ie === D || ue === he || ie === he || _(U.startDate).isBefore(C, "day") && _(U.endDate).isAfter(Z, "day")) || m >= ce && m < fe || G > ce && G <= fe || m <= ce && G >= fe)
          continue;
        let re, le;
        fe <= m ? (re = m - fe, le = "before") : (re = ce - G, le = "after"), F.push({
          event: U,
          timeGap: re,
          position: le
        });
      }
      return F.sort((U, ce) => U.timeGap - ce.timeGap);
    },
    [a]
  ), ae = de(
    (I, C, Z) => {
      const K = Q(C, Z);
      let F, m;
      if (y)
        F = I.startDate, m = I.endDate;
      else {
        const fe = _(I.endDate).diff(I.startDate);
        F = K.snappedDate, m = _(F).add(fe, "milliseconds").toDate();
      }
      let G = 0, D = "", j;
      for (const fe of e) {
        const ue = Math.max(fe.data.length, 1);
        if (K.snappedResourceIndex < G + ue) {
          D = fe.id, j = fe.capacity;
          break;
        }
        G += ue;
      }
      if (!D)
        return null;
      let ne = !0;
      j !== void 0 && I.totalPassengers !== void 0 && (ne = I.totalPassengers <= j);
      const U = ee(I, F, m, D), ce = U.length === 0 ? se(I, F, m, D) : [];
      return {
        startDate: F,
        endDate: m,
        resourceId: D,
        resourceIndex: K.snappedResourceIndex,
        resourceCapacity: j,
        hasCapacity: ne,
        conflicts: U,
        hasConflict: U.length > 0,
        nearbyEvents: ce
      };
    },
    [Q, e, y, ee, se]
  ), H = de(
    (I, C) => {
      if (!s)
        return;
      const Z = Date.now();
      if (Z - A.current < 100)
        return;
      A.current = Z;
      const K = {
        event: I,
        currentStartDate: C.startDate,
        currentEndDate: C.endDate,
        currentResourceId: C.resourceId,
        conflicts: C.conflicts
      };
      s(K);
    },
    [s]
  ), B = de(
    (I, C) => {
      if (!R(I) || !c.current)
        return;
      C.preventDefault(), C.stopPropagation();
      const Z = C.target.closest('[style*="left"]');
      let K = 0, F = 0;
      Z && Z.style.left && Z.style.top && (K = parseInt(Z.style.left), F = parseInt(Z.style.top));
      const m = lt(
        C.clientX,
        C.clientY,
        c.current
      );
      Y.current = { x: K, y: F }, J.current = { x: C.clientX, y: C.clientY }, q.current = {
        x: m.x - K,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, N.current = {
        startDate: I.startDate,
        endDate: I.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const j of e) {
        for (const ne of j.data)
          if (ne.some((U) => U.segmentId === I.segmentId)) {
            N.current.resourceId = j.id;
            break;
          }
        if (N.current.resourceId)
          break;
      }
      O(I), M("potential"), L({ x: K, y: F });
      let G = 100, D = 48;
      if (Z) {
        const j = Z.getBoundingClientRect();
        G = j.width, D = j.height;
      }
      u({ width: G, height: D });
    },
    [R, c, e, t]
  ), X = de(
    (I) => {
      if (!c.current)
        return;
      let C = c.current;
      for (; C && C !== document.body; ) {
        const U = window.getComputedStyle(C);
        if (C.scrollHeight > C.clientHeight && (U.overflowY === "auto" || U.overflowY === "scroll" || U.overflow === "auto" || U.overflow === "scroll"))
          break;
        C = C.parentElement;
      }
      (!C || C === document.body) && (C = document.documentElement);
      const Z = C.getBoundingClientRect(), K = I.clientY, F = 50, m = 12, G = K - Z.top, D = Z.bottom - K;
      let j = !1, ne = 0;
      G < F && G > 0 ? (j = !0, ne = -m * (1 - G / F)) : D < F && D > 0 && (j = !0, ne = m * (1 - D / F)), j ? (E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => {
        C.scrollTop += ne, v === "dragging" && X(I);
      })) : E.current && (cancelAnimationFrame(E.current), E.current = null);
    },
    [c, v]
  ), te = de(
    (I) => {
      if (v === "idle" || v === "animating" || !p || !c.current)
        return;
      const C = { x: I.clientX, y: I.clientY };
      if (v === "potential")
        if (cr(J.current, C))
          M("dragging");
        else
          return;
      X(I);
      const Z = lt(
        I.clientX,
        I.clientY,
        c.current
      );
      T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => {
        const K = {
          x: Z.x - q.current.x,
          y: Z.y - q.current.y
        };
        L(K);
        const F = ae(p, Z.x, Z.y);
        if (F && x) {
          const m = {
            event: p,
            currentStartDate: F.startDate,
            currentEndDate: F.endDate,
            currentResourceId: F.resourceId,
            conflicts: F.conflicts
          };
          F.hasConflict = !x(m);
        }
        if (w(F), F) {
          const m = F.hasCapacity !== !1;
          P(m), H(p, F);
        }
      });
    },
    [v, p, c, ae, H, x, X]
  ), S = de(
    async (I) => {
      if (v === "idle" || v === "animating")
        return;
      const C = { x: I.clientX, y: I.clientY };
      if (!cr(J.current, C) || v === "potential") {
        M("idle"), O(null), w(null);
        return;
      }
      if (!p || !g || !N.current) {
        M("idle"), O(null), w(null);
        return;
      }
      if (g.hasCapacity === !1) {
        P(!1), M("animating"), L(Y.current), setTimeout(() => {
          M("idle"), O(null), w(null), P(!0);
        }, 300);
        return;
      }
      const K = {
        event: p,
        originalStartDate: N.current.startDate,
        originalEndDate: N.current.endDate,
        originalResourceId: N.current.resourceId,
        newStartDate: g.startDate,
        newEndDate: g.endDate,
        newResourceId: g.resourceId,
        hasConflict: g.hasConflict,
        conflicts: g.conflicts
      };
      let F = !0;
      if (o)
        try {
          const m = o(K);
          F = m instanceof Promise ? await m : m;
        } catch {
          F = !1;
        }
      F ? (P(!0), M("idle"), O(null), w(null)) : (P(!1), M("animating"), L(Y.current), setTimeout(() => {
        M("idle"), O(null), w(null), P(!0);
      }, 300));
    },
    [v, p, g, o, x]
  );
  return ve(() => {
    if (v === "potential" || v === "dragging") {
      const I = (Z) => te(Z), C = (Z) => S(Z);
      return document.addEventListener("mousemove", I), document.addEventListener("mouseup", C), () => {
        document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", C);
      };
    } else
      return () => {
      };
  }, [v, te, S]), ve(() => () => {
    T.current && (cancelAnimationFrame(T.current), T.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null);
  }, []), ve(() => {
    (v === "idle" || v === "animating") && (T.current && (cancelAnimationFrame(T.current), T.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null));
  }, [v]), ve(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (M("animating"), L(Y.current), setTimeout(() => {
      M("idle"), O(null), w(null);
    }, 300)) : (M("idle"), O(null), w(null)));
  }, [t]), ve(() => {
    if ((v === "dragging" || v === "potential") && p) {
      let I = !1;
      for (const C of e) {
        for (const Z of C.data)
          if (Z.some((K) => K.segmentId === p.segmentId)) {
            I = !0;
            break;
          }
        if (I)
          break;
      }
      I || (v === "dragging" ? (M("animating"), L(Y.current), setTimeout(() => {
        M("idle"), O(null), w(null);
      }, 300)) : (M("idle"), O(null), w(null)));
    }
  }, [e, v, p]), {
    dragState: v,
    draggedEvent: p,
    ghostPosition: z,
    ghostDimensions: k,
    dropTarget: g,
    isValidDrop: $,
    handleDragStart: B,
    isDraggable: R,
    draggingEventId: (p == null ? void 0 : p.segmentId) || null,
    resourceOnly: y
  };
}, gi = ({
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
  const { enabled: l = !1, isSelectable: f } = i, y = l && !!o, x = de((m) => {
    let G = 0;
    for (const D of a)
      D <= m && G++;
    return m * ge + G * Pe;
  }, [a]), [v, M] = pe("idle"), [p, O] = pe(null), [z, L] = pe(null), [k, u] = pe(null), [g, w] = pe(!1), [$, P] = pe([]), [Y, J] = pe(!1), q = me(null), T = me(null), E = me(null), A = me(null), N = de(() => {
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
  }, [t]), R = de(
    (m) => {
      const G = N(), D = Math.floor(m / G), j = _().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return j.add(D * 7, "days").toDate();
        case 1:
          return j.add(D, "days").toDate();
        case 2:
          return j.add(D, "hours").toDate();
        default:
          return j.toDate();
      }
    },
    [t, r, N]
  ), Q = de(
    (m) => {
      const G = uo(m, a), D = Math.floor(G / ge);
      let j = 0;
      for (const ne of e) {
        const U = Math.max(ne.data.length, 1);
        if (D < j + U)
          return {
            resourceId: ne.id,
            resourceIndex: D,
            resourceLabel: ne.label
          };
        j += U;
      }
      return null;
    },
    [e, a]
  ), ee = de(
    (m) => {
      const G = N();
      return Math.floor(m / G) * G;
    },
    [N]
  ), se = de(
    (m, G, D, j = []) => {
      const ne = [], ce = (n || e).find((ie) => ie.id === m), fe = G.getTime(), ue = D.getTime();
      if (ce) {
        const ie = ce.data[0], he = ie && Array.isArray(ie) ? ce.data.flat() : ce.data;
        for (const ye of he) {
          const V = new Date(ye.startDate).getTime(), re = new Date(ye.endDate).getTime();
          if (fe < re && ue > V) {
            const le = new Date(Math.max(fe, V)), Ce = new Date(Math.min(ue, re)), ke = Ce.getTime() - le.getTime();
            ne.push({
              event: ye,
              conflictStart: le,
              conflictEnd: Ce,
              overlapDuration: ke
            });
          }
        }
      }
      for (const ie of j) {
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
      const D = lt(m.clientX, m.clientY, c.current), j = Q(D.y);
      if (!j)
        return;
      q.current = { x: m.clientX, y: m.clientY }, T.current = j.resourceIndex;
      const ne = ee(D.x), U = N(), ce = x(j.resourceIndex);
      O(D), L(D), u({
        x: ne,
        y: ce,
        width: U,
        height: ge
      }), M("selecting");
    },
    [y, d, c, Q, ee, N, x]
  ), H = de(
    (m) => {
      L(m);
      const G = N(), D = ee((p == null ? void 0 : p.x) || 0), j = ee(m.x), ne = x(T.current), U = Math.min(D, j), ce = Math.max(D, j) + G;
      u({ x: U, y: ne, width: ce - U, height: ge });
    },
    [p, N, ee, x]
  ), B = de(() => {
    A.current && (cancelAnimationFrame(A.current), A.current = null);
  }, []), X = de(
    (m, G) => {
      const D = document.getElementById(We);
      if (!D || !c.current)
        return;
      const j = D.getBoundingClientRect(), ne = 60, U = 12, ce = m - (j.left + Ie), fe = j.right - m;
      let ue = 0;
      ce < ne ? ue = -U * (1 - Math.max(0, ce) / ne) : fe < ne && (ue = U * (1 - Math.max(0, fe) / ne)), B(), ue !== 0 && (A.current = requestAnimationFrame(() => {
        D.scrollLeft += ue, H(lt(m, G, c.current)), X(m, G);
      }));
    },
    [c, H, B]
  ), te = de(
    (m) => {
      if (v !== "selecting" || !c.current || T.current === null)
        return;
      const G = lt(m.clientX, m.clientY, c.current);
      E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => H(G)), X(m.clientX, m.clientY);
    },
    [v, c, H, X]
  ), S = de(
    (m) => {
      if (v !== "selecting")
        return;
      if (B(), !c.current || !p || !q.current) {
        M("idle"), O(null), L(null), u(null);
        return;
      }
      const G = lt(m.clientX, m.clientY, c.current), D = Q(p.y);
      if (!D) {
        M("idle"), O(null), L(null), u(null);
        return;
      }
      const j = Math.min(p.x, G.x), ne = Math.max(p.x, G.x), U = R(j), ce = R(ne), fe = _(ce).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(D.resourceId, U, fe)) {
        M("idle"), O(null), L(null), u(null);
        return;
      }
      const ue = se(
        D.resourceId,
        U,
        fe,
        $
      ), ie = ue.length > 0, he = {
        startDate: U,
        endDate: fe,
        resourceId: D.resourceId,
        resourceLabel: D.resourceLabel,
        zoomLevel: t,
        hasConflict: ie,
        conflicts: ie ? ue : void 0
      };
      if (g)
        P((ye) => [...ye, he]), J(!0);
      else if (o) {
        const ye = o(he), V = (re) => {
          re != null && re.continueMultiSelect && (w(!0), P([he]), J(!0));
        };
        ye instanceof Promise ? ye.then(V) : V(ye);
      }
      M("idle"), O(null), L(null), u(null), q.current = null, T.current = null;
    },
    [
      v,
      c,
      p,
      Q,
      R,
      f,
      o,
      t,
      g,
      se,
      $,
      B
    ]
  ), I = de(() => {
    if ($.length > 0 && s) {
      J(!1);
      const m = s($), G = (D) => {
        D != null && D.continueMultiSelect ? J(!0) : (P([]), w(!1), J(!1));
      };
      m instanceof Promise ? m.then(G) : G(m);
      return;
    }
    P([]), w(!1), J(!1);
  }, [$, s]), C = de(() => {
    P([]), w(!1), J(!1);
  }, []), Z = de((m) => {
    P((G) => {
      const D = G.filter((j, ne) => ne !== m);
      return D.length === 0 && (w(!1), J(!1)), D;
    });
  }, []), K = de(
    (m, G) => {
      P((D) => D.map((j, ne) => {
        if (ne !== m)
          return j;
        const U = { ...j, ...G }, ce = D.filter((ue, ie) => ie !== m), fe = se(
          U.resourceId,
          U.startDate,
          U.endDate,
          ce
        );
        return {
          ...U,
          hasConflict: fe.length > 0,
          conflicts: fe.length > 0 ? fe : void 0
        };
      }));
    },
    [se]
  ), F = de(
    (m) => {
      m.key === "Escape" && (v === "selecting" ? (B(), M("idle"), O(null), L(null), u(null), q.current = null, T.current = null) : g && $.length > 0 && (P([]), w(!1), J(!1)));
    },
    [v, g, $.length, B]
  );
  return ve(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", S), document.addEventListener("keydown", F), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", S), document.removeEventListener("keydown", F);
      };
  }, [v, te, S, F]), ve(() => {
    if (g && $.length > 0)
      return document.addEventListener("keydown", F), () => {
        document.removeEventListener("keydown", F);
      };
  }, [g, $.length, F]), ve(() => () => {
    E.current && (cancelAnimationFrame(E.current), E.current = null), B();
  }, [B]), ve(() => {
    d && v === "selecting" && (B(), M("idle"), O(null), L(null), u(null), q.current = null, T.current = null);
  }, [d, v, B]), {
    selectionState: v,
    selectionStart: p,
    selectionEnd: z,
    selectionBox: k,
    handleGridMouseDown: ae,
    isEnabled: y,
    pendingSelections: $,
    confirmSelections: I,
    clearSelections: C,
    removeSelection: Z,
    updateSelection: K,
    isMultiSelectActive: g,
    hasUnconfirmedSelections: Y
  };
}, yi = b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, vi = b.div`
  position: relative;
`, xi = b.canvas``;
b.canvas``;
const lr = b.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, bi = kn(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: y, separatorRowIndices: x = [] }, v) {
  const M = me(!1), { handleScrollNext: p, handleScrollPrev: O, date: z, isLoading: L, cols: k, startDate: u, suppressNextSlideRef: g } = Ze(), w = me(null), $ = me(null), P = me(null), Y = me(null), [J, q] = pe(!1), T = Ft(), {
    dragState: E,
    draggedEvent: A,
    ghostPosition: N,
    ghostDimensions: R,
    dropTarget: Q,
    isValidDrop: ee,
    handleDragStart: se,
    isDraggable: ae,
    draggingEventId: H,
    resourceOnly: B
  } = mi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: Y,
    separatorRowIndices: x
  });
  ve(() => {
    const ie = E === "dragging" || E === "potential";
    q(ie), a && a(ie);
  }, [E, a]);
  const X = me(!1), te = me(z), S = me(null);
  ve(() => {
    var le;
    const ie = te.current;
    if (te.current = z, !X.current) {
      X.current = !0;
      return;
    }
    if (g != null && g.current) {
      g.current = !1;
      return;
    }
    const he = Y.current;
    if (!(he != null && he.animate))
      return;
    const ye = z.isAfter(ie) ? 48 : -48;
    (le = S.current) == null || le.cancel(), he.style.willChange = "transform";
    const V = he.animate(
      [
        { transform: `translateX(${ye}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), re = () => {
      he.style.willChange = "";
    };
    V.onfinish = re, V.oncancel = re, S.current = V;
  }, [z, g]);
  const {
    selectionState: I,
    selectionBox: C,
    handleGridMouseDown: Z,
    pendingSelections: K,
    confirmSelections: F,
    clearSelections: m,
    removeSelection: G,
    updateSelection: D,
    isMultiSelectActive: j,
    hasUnconfirmedSelections: ne
  } = gi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: y,
    gridRef: Y,
    isDragging: J,
    separatorRowIndices: x
  }), U = de((ie) => {
    ie.preventDefault();
  }, []), ce = de((ie) => {
    ie.preventDefault();
  }, []), fe = x.length * Pe, ue = de(
    (ie) => {
      const he = Rn(), ye = t * ge + 1 + fe;
      lo(ie, he, ye), Ns(ie, n, t, k, u, T, x);
    },
    [k, u, t, n, T, x, fe]
  );
  return ve(() => {
    if (!w.current)
      return;
    const ie = w.current.getContext("2d");
    if (!ie)
      return;
    const he = () => ue(ie);
    return window.addEventListener("resize", he), () => window.removeEventListener("resize", he);
  }, [ue]), ve(() => {
    const ie = w.current;
    if (!ie)
      return;
    ie.style.letterSpacing = "1px";
    const he = ie.getContext("2d");
    he && ue(he);
  }, [z, t, n, ue]), ve(() => {
    if (!$.current)
      return;
    const ie = new IntersectionObserver(
      (he) => {
        he[0].isIntersecting && !M.current && (M.current = !0, p(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(We) }
    );
    return ie.observe($.current), () => {
      ie.disconnect();
    };
  }, [p]), ve(() => {
    if (!P.current)
      return;
    const ie = new IntersectionObserver(
      (he) => {
        he[0].isIntersecting && !M.current && (M.current = !0, O(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(We),
        rootMargin: `0px 0px 0px -${Ie}px`
      }
    );
    return ie.observe(P.current), () => {
      ie.disconnect();
    };
  }, [O]), /* @__PURE__ */ W(yi, { id: to, children: [
    /* @__PURE__ */ W(
      vi,
      {
        ref: (ie) => {
          typeof v == "function" ? v(ie) : v && (v.current = ie), Y.current = ie;
        },
        onMouseDown: Z,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(lr, { position: "left", ref: P }),
          /* @__PURE__ */ h(Cn, { isLoading: L, position: "left" }),
          /* @__PURE__ */ h(
            xi,
            {
              ref: w,
              onDragStart: U,
              onDragOver: ce,
              style: { userSelect: E === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(pd, { zoom: n, startDate: u }),
          /* @__PURE__ */ h(
            yl,
            {
              data: r,
              zoom: n,
              onTileClick: s,
              onDragStart: se,
              isDraggable: ae,
              draggingEventId: H,
              separatorRowIndices: x
            }
          ),
          /* @__PURE__ */ h(lr, { ref: $, position: "right" }),
          /* @__PURE__ */ h(Cn, { isLoading: L, position: "right" }),
          (E === "dragging" || E === "animating") && /* @__PURE__ */ h(
            Zl,
            {
              draggedEvent: A,
              ghostPosition: N,
              ghostDimensions: R,
              dropTarget: Q,
              isValidDrop: ee,
              dragState: E,
              zoom: n,
              data: r,
              resourceOnly: B,
              separatorRowIndices: x
            }
          ),
          /* @__PURE__ */ h(
            Ul,
            {
              selectionBox: C,
              isSelecting: I === "selecting"
            }
          ),
          j && K.length > 0 && /* @__PURE__ */ h(
            ud,
            {
              selections: K,
              data: r,
              zoom: n,
              startDate: u,
              onRemove: G,
              onUpdate: D,
              separatorRowIndices: x
            }
          )
        ]
      }
    ),
    j && ne && K.length > 0 && /* @__PURE__ */ h(
      od,
      {
        selections: K,
        onConfirm: F,
        onClear: m,
        onRemove: G
      }
    )
  ] });
}), fo = (e) => {
  const n = _.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, ho = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / De);
    t += o.hours + s, r += n % De, r >= De && (t++, r -= De);
  }), { hours: t, minutes: r };
}, po = (e, n) => {
  let t = rr;
  switch (n) {
    case 0:
      t = Ts;
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
}, wi = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const l = _(a.startDate).isoWeek(), f = _(a.startDate).isoWeekday(), y = _(a.endDate).isoWeek(), x = _(a.endDate).isoWeekday(), { hours: v, minutes: M } = fo(a.occupancy);
    if (r === l) {
      const p = (Xe + 1 - f) * v, O = (Xe + 1 - f) * M;
      return { hours: Math.max(0, p), minutes: O };
    } else if (r === y) {
      const p = x > Xe ? Xe * v : x * v, O = x > Xe ? Xe * M : x * M;
      return { hours: p, minutes: O };
    } else if (_(n).isBetween(a.startDate, a.endDate))
      return { hours: Xe * v, minutes: Xe * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = ho(o), { free: c, overtime: d } = po({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, Si = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: y } = fo(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = ho(s), { free: d, overtime: a } = po({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, Ci = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const d = _(c.startDate).hour(), a = _(c.endDate).hour(), l = n.hour(), f = _(c.endDate).minute(), y = _(c.startDate).minute();
    d < l && a > l ? t += De : d === l && a === l && y && f ? t += f ? f - y : De - y : d === l && a >= l ? t += y ? De - y : De : a === l && f && (t += f);
  });
  const r = Math.floor(t / De), o = t % De, s = r || o ? 0 : 1, i = r ? 0 : o ? De - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Mi = (e, n, t, r, o = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => r === 1 ? _(t).isBetween(i.startDate, i.endDate, "day", "[]") : r === 2 ? _(t).isBetween(i.startDate, i.endDate, "hour", "[]") : _(i.startDate).isBetween(
    _(t),
    _(t).add(6, "days"),
    "day",
    "[]"
  ) || _(t).isBetween(_(i.startDate), _(i.endDate), "day", "[]"));
  switch (r) {
    case 1:
      return Si(s, t, r, o);
    case 2:
      return Ci(s, t);
    default:
      return wi(s, t, r);
  }
}, ki = (e, n, t, r, o, s, i = !1) => {
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
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = _(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / ge), y = r.findIndex((O, z, L) => L.slice(0, z + 1).reduce((u, g) => u + g, 0) >= f), x = s === 2 ? (a + 1) * d : a * d, v = (f - 1) * ge + ge, M = Mi(
    o[y],
    y,
    l,
    s,
    i
  ), p = _(e.startDate).isSame(_(e.endDate), "day");
  return {
    coords: { x, y: v },
    mouseCoords: t,
    resourceIndex: y,
    disposition: M,
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
      isOneDayEvent: p,
      passengers: e.totalPassengers
    }
  };
};
function $i(e, n) {
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
function Di(e) {
  const n = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const r = [...t].sort((l, f) => l - f);
  if (r.length < 2)
    return n;
  const o = Math.min(5, r.length), s = $i(r, o), i = [];
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
    const y = "__auto_cat_" + f, x = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: y, name: x, minPassengers: l.min, maxPassengers: l.max });
    for (const v of l.values)
      a.set(v, y);
  }), { categories: d, capacityToCategoryId: a };
}
const Ei = (e, n, t, r) => {
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
      r.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(_i);
const Ti = gn;
var yn = {}, Ai = {
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
    return function(t, r) {
      r.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Ai);
const Pi = yn, Ii = (e) => {
  const n = [];
  for (const t of e) {
    let r = !1;
    if (n.length)
      for (const o of n) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = _(t.startDate).startOf("day"), d = _(t.endDate).startOf("day"), a = _(o[i].startDate).startOf("day"), l = _(o[i].endDate).startOf("day");
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
_.extend(Ti);
_.extend(Pi);
const dr = /* @__PURE__ */ new WeakMap(), Oi = (e) => {
  const n = dr.get(e);
  if (n)
    return n;
  const t = [...e].sort((o, s) => {
    const i = _(o.startDate), c = _(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), r = Ii(t);
  return dr.set(e, r), r;
}, Yi = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = Oi(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, Li = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Ri = (e) => {
  const { recordsThreshold: n } = Ze(), [t, r] = pe(0), [o, s] = pe(0), i = me(null);
  ve(() => {
    i.current = document.getElementById(We);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = Me(() => Yi(e), [e]), a = Me(
    () => Ei(e, c, d, n),
    [e, c, n, d]
  ), l = de(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = de(() => {
    a[o].length && (r((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), y = de(() => {
    r(0), s(0);
  }, []), x = t + a[o].length, v = Me(
    () => d.slice(t, x),
    [x, d, t]
  ), M = Me(
    () => c.slice(t, x),
    [x, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: v,
    totalRowsPerPage: Li(a[o]),
    next: l,
    previous: f,
    reset: y
  };
};
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
    e.exports = r();
  })(Te, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(Ni);
const Hi = vn;
var xn = {}, Bi = {
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
    function r(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = r(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, x, v) {
      var M = y + " ";
      switch (v) {
        case "m":
          return x ? "minuta" : "minutę";
        case "mm":
          return M + (s(y) ? "minuty" : "minut");
        case "h":
          return x ? "godzina" : "godzinę";
        case "hh":
          return M + (s(y) ? "godziny" : "godzin");
        case "MM":
          return M + (s(y) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(y) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(y, x) {
      return a.test(x) ? c[y.month()] : d[y.month()];
    };
    l.s = d, l.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(y) {
      return y + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Bi);
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
})(Fi);
const Wi = bn;
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
})(ji);
const Zi = wn;
var Sn = {}, Vi = {
  get exports() {
    return Sn;
  },
  set exports(e) {
    Sn = e;
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
})(Vi);
const Gi = Sn, Xi = {
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
}, Ui = {
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
}, Ki = {
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
}, Ji = {
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
}, qi = {
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
}, Qi = [
  {
    id: "en",
    lang: Ki,
    translateCode: "en-GB",
    dayjsTranslations: Hi
  },
  {
    id: "pl",
    lang: Ui,
    translateCode: "pl-PL",
    dayjsTranslations: zi
  },
  {
    id: "es",
    lang: Xi,
    translateCode: "es-ES",
    dayjsTranslations: Gi
  },
  {
    id: "lt",
    lang: qi,
    translateCode: "lt-LT",
    dayjsTranslations: Zi
  },
  {
    id: "de",
    lang: Ji,
    translateCode: "de-DE",
    dayjsTranslations: Wi
  }
];
class ea {
  constructor() {
    Nn(this, "locales", Qi);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const Ht = new ea(), mo = Hr({
  localesData: Ht.getLocales(),
  currentLocale: Ht.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ta = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = pe("en"), s = Ht.getLocales(), i = de(() => {
    const f = s.find((y) => y.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && _.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = pe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  ve(() => {
    t == null || t.forEach((f) => {
      s.find((x) => x.id === f.id) || Ht.addLocales(f);
    });
  }, [s, t]), ve(() => {
    const f = localStorage.getItem("locale"), y = n ?? f ?? "en";
    localStorage.setItem("locale", y), o(y), d(i());
  }, [i, n]);
  const { Provider: l } = mo;
  return /* @__PURE__ */ h(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ve = () => Ke(mo).currentLocale.lang, na = (e) => /* @__PURE__ */ oe.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ oe.createElement("defs", null, /* @__PURE__ */ oe.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ oe.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ oe.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ oe.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ oe.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ra = b.div`
  height: 440px;
  width: 514px;
  position: relative;
`, oa = b.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, sa = ({ onTileClick: e }) => {
  const { feelingEmpty: n } = Ve();
  return /* @__PURE__ */ W(ra, { onClick: e, children: [
    /* @__PURE__ */ h(na, {}),
    /* @__PURE__ */ h(oa, { children: n })
  ] });
}, ia = b.div`
  position: relative;
  display: flex;
`, aa = b.div`
  position: relative;
  margin-left: ${Ie};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ca = b.div`
  width: calc(${({ width: e }) => e}px - ${Ie}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ie}px;
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
function la(e, n) {
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
const da = ({
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
  const [x, v] = pe(Gt), [M, p] = pe(e), [O, z] = pe(!1), [L, k] = pe(!1), [u, g] = pe(""), [w, $] = pe(/* @__PURE__ */ new Set()), {
    zoom: P,
    startDate: Y,
    isLoading: J,
    config: { includeTakenHoursOnWeekendsInDayView: q, showTooltip: T, showThemeToggle: E }
  } = Ze(), A = me(null), N = me(null), [R, Q] = pe(124), {
    page: ee,
    projectsPerPerson: se,
    rowsPerItem: ae,
    currentPageNum: H,
    pagesAmount: B,
    next: X,
    previous: te,
    reset: S
  } = Ri(M), { effectiveCategories: I, effectivePage: C } = Me(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: ee };
    const V = Di(ee);
    if (V.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: ee };
    const re = ee.map((le) => {
      if (le.isSubcontract || le.capacity == null)
        return le;
      const Ce = V.capacityToCategoryId.get(le.capacity);
      return Ce ? { ...le, categoryId: Ce } : le;
    });
    return { effectiveCategories: V.categories, effectivePage: re };
  }, [t, ee]), Z = de((V) => {
    $((re) => {
      const le = new Set(re);
      return le.has(V) ? le.delete(V) : le.add(V), le;
    });
  }, []), K = Me(() => {
    const V = [], re = I ? [...I].sort((le, Ce) => le.maxPassengers - Ce.maxPassengers) : [];
    for (const le of re)
      C.some((Ce) => !Ce.isSubcontract && Ce.categoryId === le.id) && V.push(le.id);
    return C.some((le) => le.isSubcontract) && V.push("__subcontract__"), V;
  }, [I, C]), F = de(() => {
    $(/* @__PURE__ */ new Set());
  }, []), m = de(() => {
    $(new Set(K));
  }, [K]), {
    visiblePage: G,
    visibleRowsPerItem: D,
    visibleTotalRows: j,
    visibleProjectsPerPerson: ne,
    separatorRowIndices: U
  } = Me(() => {
    const V = la(C, I), re = ((I == null ? void 0 : I.length) ?? 0) > 0, le = /* @__PURE__ */ new Map();
    ee.forEach((Ee, Be) => le.set(Ee.id, Be));
    const Ce = [], ke = [], Ne = [], He = [];
    let rt = 0;
    for (const Ee of V)
      if (Ee.type === "subcontract" || Ee.type === "category" && re) {
        const ot = Ee.type === "subcontract" ? "__subcontract__" : Ee.category.id, st = w.has(ot);
        if (He.push(rt), !st)
          for (const Je of Ee.items) {
            const $t = le.get(Je.id) ?? 0, Dt = ae[$t];
            Ce.push(Je), ke.push(Dt), Ne.push(se[$t]), rt += Dt;
          }
      } else
        for (const ot of Ee.items) {
          const st = le.get(ot.id) ?? 0, Je = ae[st];
          Ce.push(ot), ke.push(Je), Ne.push(se[st]), rt += Je;
        }
    const Wt = ke.reduce((Ee, Be) => Ee + Be, 0);
    return {
      visiblePage: Ce,
      visibleRowsPerItem: ke,
      visibleTotalRows: Wt,
      visibleProjectsPerPerson: Ne,
      separatorRowIndices: He
    };
  }, [C, I, ee, w, ae, se]), ce = me(
    pn(
      (V, re, le, Ce, ke, Ne) => {
        if (!A.current)
          return;
        const { tile: He, segmentId: rt } = ie(V);
        if (!rt || !He) {
          z(!1), v(Gt);
          return;
        }
        const Wt = ue(rt, re), Ee = A.current.getBoundingClientRect(), Be = He.getBoundingClientRect(), ot = { x: V.clientX - Ee.left, y: V.clientY - Ee.top }, st = {
          x: V.clientX - Ee.left,
          y: V.clientY - Ee.top
        }, Je = {
          x: Be.left - Ee.left,
          y: Be.top - Ee.top,
          width: Be.width,
          height: Be.height
        }, {
          coords: { x: $t, y: Dt },
          resourceIndex: yo,
          disposition: vo,
          reservationData: xo
        } = ki(
          Wt,
          le,
          ot,
          Ce,
          ke,
          Ne,
          q
        );
        v({
          coords: { x: $t, y: Dt },
          mouseCoords: st,
          resourceIndex: yo,
          disposition: vo,
          reservationData: xo,
          tileBounds: Je
        }), z(!0);
      },
      4
    )
  ), fe = me(
    pn((V, re) => {
      S(), p(
        V.map((le) => ({
          ...le,
          data: le.data.filter((Ce) => {
            const { title: ke, description: Ne, subtitle: He } = Ce;
            return (ke == null ? void 0 : ke.toLowerCase().includes(re.toLowerCase())) || (He == null ? void 0 : He.toLowerCase().includes(re.toLowerCase())) || (Ne == null ? void 0 : Ne.toLowerCase().includes(re.toLowerCase()));
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
    ce.current.cancel(), z(!1), v(Gt);
  }, []);
  return ve(() => {
    const V = (le) => ce.current(
      le,
      e,
      Y,
      D,
      ne,
      P
    ), re = A.current;
    if (re)
      return re.addEventListener("mousemove", V), re.addEventListener("mouseleave", ye), () => {
        re.removeEventListener("mousemove", V), re.removeEventListener("mouseleave", ye);
      };
  }, [
    ce,
    ye,
    ne,
    D,
    Y,
    P,
    e
  ]), ve(() => {
    u ? (fe.current.cancel(), fe.current(e, u)) : p(e);
  }, [e, u]), Bt(() => {
    const V = N.current;
    if (!V)
      return;
    const re = () => Q(V.offsetHeight);
    re();
    const le = new ResizeObserver(re);
    return le.observe(V), () => le.disconnect();
  }, []), /* @__PURE__ */ W(ia, { children: [
    /* @__PURE__ */ h(
      Cc,
      {
        headerHeight: R,
        data: C,
        categories: I,
        pageNum: H,
        pagesAmount: B,
        rows: ae,
        onLoadNext: X,
        onLoadPrevious: te,
        searchInputValue: u,
        onSearchInputChange: he,
        onItemClick: o,
        collapsedGroups: w,
        onToggleGroup: Z,
        allGroupIds: K,
        onExpandAll: F,
        onCollapseAll: m
      }
    ),
    /* @__PURE__ */ W(aa, { children: [
      /* @__PURE__ */ h(
        qc,
        {
          ref: N,
          zoom: P,
          topBarWidth: i,
          showThemeToggle: E,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        bi,
        {
          data: G,
          baseData: n || e,
          zoom: P,
          rows: j,
          ref: A,
          onTileClick: r,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: k,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: y,
          separatorRowIndices: U
        }
      ) : /* @__PURE__ */ h(ca, { width: i, children: J ? /* @__PURE__ */ h(Cn, { isLoading: J, position: "left" }) : /* @__PURE__ */ h(sa, {}) }),
      T && O && !L && (x == null ? void 0 : x.resourceIndex) > -1 && /* @__PURE__ */ h(Il, { tooltipData: x })
    ] })
  ] });
}, ua = b.div`
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
`, fa = b.div`
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
`, ha = b.button`
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
`, pa = b.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`, ma = b.div`
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
`, ga = b.label`
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
`, ya = b.button`
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
`, va = b.span`
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
`, it = ({ children: e, sw: n = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: n, strokeLinecap: "round", strokeLinejoin: "round", children: e }), xa = () => {
  var n, t;
  const e = document.getElementById(oo);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (n = e == null ? void 0 : e.requestFullscreen) == null || n.call(e);
}, ba = () => {
  const { config: e, date: n, zoom: t, handleGoNext: r, handleGoPrev: o, handleGoToday: s, setZoom: i, goToDate: c, toggleDisplayActiveUnits: d } = Ze();
  Ve();
  const { filterButtonState: a = -1 } = e, l = () => {
    var f;
    (f = document.querySelector(`#${We} input[placeholder]`)) == null || f.focus();
  };
  return /* @__PURE__ */ W(ua, { width: 0, children: [
    /* @__PURE__ */ W(Xt, { $at: "start", children: [
      /* @__PURE__ */ h(pa, { children: n.locale(_.locale()).format("MMMM YYYY") }),
      /* @__PURE__ */ W(ma, { children: [
        /* @__PURE__ */ h("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ h("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ h("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ W(ga, { children: [
        /* @__PURE__ */ W(it, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (f) => f.target.value && c(f.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ h(Xt, { $at: "center", children: /* @__PURE__ */ W(fa, { children: [
      /* @__PURE__ */ h(ur, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
      /* @__PURE__ */ h(ha, { onClick: s, children: "Hoy" }),
      /* @__PURE__ */ h(ur, { onClick: r, "aria-label": "Siguiente", children: /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
    ] }) }),
    /* @__PURE__ */ W(Xt, { $at: "end", children: [
      /* @__PURE__ */ W(ya, { onClick: l, children: [
        /* @__PURE__ */ W(it, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] }),
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ W(fr, { $primary: !!a, onClick: d, children: [
        /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(va, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ W(fr, { onClick: xa, children: [
        /* @__PURE__ */ h(it, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] })
    ] })
  ] });
}, wa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Sa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Ca = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Ma = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), ka = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), $a = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Da = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Ea = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), _a = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Ta = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Aa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Pa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Ia = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Oa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ oe.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Ya = {
  add: wa,
  subtract: Sa,
  filter: Ca,
  arrowLeft: Ma,
  arrowRight: ka,
  defaultAvatar: $a,
  calendarWarning: Da,
  calendarFree: Ea,
  arrowDown: Ta,
  arrowUp: _a,
  search: Aa,
  close: Pa,
  moon: Ia,
  sun: Oa
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
}, La = (e, n, t) => ({
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
  ${({ theme: e, variant: n, disabled: t }) => La(e, n, t)}
`;
const Ra = b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${ro}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ye};
`, Na = b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Ha = b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, Ba = b.div`
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
`, za = b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, Fa = b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, Wa = b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({ $sev: e }) => e === 2 ? "#c6483d" : e === 1 ? "#d98a22" : "#93b1a6"};
`, ja = b.div`
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
`, Za = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, Va = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, Ga = b.div`
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
`, Xa = () => {
  const { date: e, zoom: n, data: t, goToDate: r } = Ze(), o = Ve(), s = me(null), [i, c] = pe(null), d = Me(
    () => Array.from({ length: 12 }, (k, u) => _().month(u).format("MMM").toUpperCase()),
    [o]
  ), a = e.year(), l = Me(() => _(new Date(a, 0, 1)), [a]), f = Me(
    () => _(new Date(a + 1, 0, 1)).diff(l, "day"),
    [a, l]
  ), y = (k) => k.diff(l, "day") / f * 100, x = Me(() => {
    const k = Math.ceil(f / 7), u = new Array(k).fill(0), g = new Array(k).fill(0);
    for (const $ of t ?? [])
      for (const P of $.data ?? []) {
        const Y = _(P.startDate);
        if (Y.year() !== a)
          continue;
        const J = Math.floor(Y.diff(l, "day") / 7);
        if (J < 0 || J >= k)
          continue;
        u[J] += 1;
        const q = P.readiness === "sin_chofer" ? 2 : P.readiness === "sin_avisar" ? 1 : 0;
        q > g[J] && (g[J] = q);
      }
    const w = Math.max(1, ...u);
    return u.map(($, P) => ({ h: $ / w * 100, sev: g[P] }));
  }, [t, a, l, f]), v = _(), M = v.year() === a ? y(v) : null, p = n === 1 ? mn(1) / 2 : n === 0 ? mn(0) * 7 / 2 : 0.5, O = Math.max(0, y(e.subtract(p, "day"))), z = Math.min(100, y(e.add(p, "day"))) - O, L = (k) => {
    var w;
    const u = (w = s.current) == null ? void 0 : w.getBoundingClientRect();
    if (!u)
      return null;
    const g = Math.min(1, Math.max(0, (k - u.left) / u.width));
    return { f: g, d: l.add(Math.round(g * f), "day") };
  };
  return /* @__PURE__ */ W(Ra, { children: [
    /* @__PURE__ */ W(Na, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ W(
      Ha,
      {
        ref: s,
        onClick: (k) => {
          const u = L(k.clientX);
          u && r(u.d.toDate());
        },
        onMouseMove: (k) => {
          const u = L(k.clientX);
          u && c({ left: u.f * 100, label: `${u.d.date()} ${d[u.d.month()]}` });
        },
        onMouseLeave: () => c(null),
        children: [
          /* @__PURE__ */ h(Ba, { children: d.map((k, u) => /* @__PURE__ */ h("span", { style: { left: `${y(_(new Date(a, u, 1)))}%` }, children: k }, u)) }),
          d.map(
            (k, u) => u === 0 ? null : /* @__PURE__ */ h(za, { style: { left: `${y(_(new Date(a, u, 1)))}%` } }, u)
          ),
          /* @__PURE__ */ h(Fa, { children: x.map((k, u) => /* @__PURE__ */ h(Wa, { $sev: k.sev, style: { height: `${k.h}%` } }, u)) }),
          /* @__PURE__ */ h(Za, { style: { left: `${O}%`, width: `${z}%` } }),
          M !== null && /* @__PURE__ */ h(ja, { style: { left: `${M}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          i && /* @__PURE__ */ W(_e, { children: [
            /* @__PURE__ */ h(Va, { style: { left: `${i.left}%` } }),
            /* @__PURE__ */ h(Ga, { style: { left: `${i.left}%` }, children: i.label })
          ] })
        ]
      }
    )
  ] });
}, Ua = b.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Ka = b.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? ro : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Ja = b.div`
  position: relative;
`, qa = ({
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
  clickToAddConfig: x
}) => {
  const { goToDate: v, handleGoToday: M, zoomIn: p, zoomOut: O, zoom: z } = Ze();
  return Br(
    l,
    () => ({
      goToDate: v,
      goToToday: M,
      setZoom: (L) => {
        if (!ao(L))
          return;
        const k = L - z;
        if (k > 0)
          for (let u = 0; u < k; u++)
            p();
        else
          for (let u = 0; u < Math.abs(k); u++)
            O();
      }
    }),
    [v, M, z, p, O]
  ), /* @__PURE__ */ h(
    da,
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
      clickToAddConfig: x
    }
  );
}, xd = kn(function({
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
  onEventDrag: x,
  draggableConfig: v,
  onTimeRangeSelect: M,
  onMultiTimeRangeSelect: p,
  clickToAddConfig: O
}, z) {
  var A;
  const L = Me(
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
  ), k = me(null), u = me(null), [g, w] = pe((A = k.current) == null ? void 0 : A.clientWidth), $ = Me(() => _(s), [s]), [P, Y] = pe(L.defaultTheme ?? "light"), J = () => {
    Y(P === "light" ? "dark" : "light");
  }, q = P === "light" ? Cs : Ms, T = L.theme ? L.theme[q.mode] : {}, E = {
    ...q,
    colors: {
      ...q.colors,
      ...T
    }
  };
  return Br(
    z,
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
  ), Bt(() => {
    const N = () => {
      k.current && w(k.current.clientWidth);
    };
    return N(), window.addEventListener("resize", N), () => window.removeEventListener("resize", N);
  }, []), /* @__PURE__ */ W(_e, { children: [
    /* @__PURE__ */ h(Ss, {}),
    /* @__PURE__ */ h(xs, { theme: E, children: /* @__PURE__ */ h(ta, { lang: L.lang, translations: L.translations, children: /* @__PURE__ */ h(
      hi,
      {
        data: n,
        isLoading: !!f,
        config: L,
        onRangeChange: i,
        defaultStartDate: $,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: /* @__PURE__ */ W(Ua, { id: oo, children: [
          /* @__PURE__ */ h(
            Ka,
            {
              showScroll: !!n.length,
              $footer: L.showOverview !== !1 && !!n.length,
              id: We,
              ref: k,
              children: /* @__PURE__ */ h(Ja, { children: /* @__PURE__ */ h(
                qa,
                {
                  data: n,
                  baseData: r,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: g ?? 0,
                  onItemClick: l,
                  toggleTheme: J,
                  onEventDrop: y,
                  onEventDrag: x,
                  draggableConfig: v,
                  schedulerRef: u,
                  onTimeRangeSelect: M,
                  onMultiTimeRangeSelect: p,
                  clickToAddConfig: O
                }
              ) })
            }
          ),
          L.showOverview !== !1 && !!n.length && /* @__PURE__ */ h(Xa, {})
        ] })
      }
    ) }) })
  ] });
}), Qa = b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, ec = b.button`
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
`, tc = b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, nc = b.p`
  ${vt}
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
  return /* @__PURE__ */ h(Qa, { intent: e, children: /* @__PURE__ */ W(ec, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ h(tc, { children: t }),
    /* @__PURE__ */ h(nc, { children: d })
  ] }) });
}, rc = b.div`
  min-width: ${Ie + "px"};
  max-width: ${Ie + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, oc = b.div`
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
`, sc = b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, ic = b.input`
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
`, ac = b.div`
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
`, cc = b.button`
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
`, lc = yt`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, dc = b.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ge}px;
  height: calc(${ge}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBorder + "33" : e.colors.border};
  border-left: 3px solid
    ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBorder : "transparent"};
  background-color: ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBg : "transparent"};
  transition: 0.5s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${lc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, uc = b.div`
  display: flex;
  align-items: center;
`, fc = b.div`
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
`, hc = b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, pc = b.div`
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
`, mc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), gc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), yc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), vc = ({ id: e, item: n, rows: t, onItemClick: r, isSubcontract: o }) => /* @__PURE__ */ h(
  dc,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ W(uc, { children: [
      /* @__PURE__ */ h(fc, { $provider: o, children: mc(n.icon) ? /* @__PURE__ */ h(hc, { src: n.icon, alt: "" }) : o ? /* @__PURE__ */ h(yc, {}) : /* @__PURE__ */ h(gc, {}) }),
      /* @__PURE__ */ W(pc, { children: [
        /* @__PURE__ */ h(pr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ h(pr, { children: n.subtitle })
      ] })
    ] })
  }
), xc = b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder + "24" : e.colors.accent + "14"};
  border-left: 3px solid
    ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder : "transparent"};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder + "33" : e.colors.accent + "22"};
  }
`, bc = b.span`
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
`, wc = b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, Sc = b.div`
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
}) => /* @__PURE__ */ W(xc, { $variant: o, onClick: r, title: e, children: [
  /* @__PURE__ */ h(Sc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(bc, { $variant: o, children: e }),
  /* @__PURE__ */ h(wc, { $variant: o, children: n })
] }), Cc = ({
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
  allGroupIds: x,
  onExpandAll: v,
  onCollapseAll: M
}) => {
  const [p, O] = pe(!1), z = Ve(), L = () => O((T) => !T), k = n ? [...n].sort((T, E) => T.maxPassengers - E.maxPassengers) : [], u = k.length > 0, g = x.length > 0, w = g && f.size === x.length;
  g && f.size;
  const $ = e.filter((T) => T.isSubcontract), P = z.subcontract ?? "Subcontract", Y = (T) => {
    const E = e.indexOf(T);
    return /* @__PURE__ */ h(
      vc,
      {
        id: T.id,
        item: T.label,
        rows: r[E],
        onItemClick: l,
        isSubcontract: T.isSubcontract
      },
      T.id
    );
  }, J = (T) => {
    const E = e.filter(
      (R) => !R.isSubcontract && R.categoryId === T.id
    );
    if (E.length === 0)
      return null;
    const A = f.has(T.id), N = T.name;
    return /* @__PURE__ */ W("div", { children: [
      /* @__PURE__ */ h(
        mr,
        {
          label: N,
          count: E.length,
          isCollapsed: A,
          onToggle: () => y(T.id),
          variant: "category"
        }
      ),
      !A && E.map(Y)
    ] }, T.id);
  }, q = e.filter(
    (T) => !T.isSubcontract && (!T.categoryId || !u)
  );
  return /* @__PURE__ */ W(rc, { children: [
    /* @__PURE__ */ W(oc, { $height: t, children: [
      /* @__PURE__ */ W(sc, { children: [
        /* @__PURE__ */ W(ac, { isFocused: p, children: [
          /* @__PURE__ */ h(
            ic,
            {
              placeholder: z.search,
              value: d,
              onChange: a,
              onFocus: L,
              onBlur: L
            }
          ),
          /* @__PURE__ */ h(Ut, { iconName: "search" })
        ] }),
        g && /* @__PURE__ */ h(
          cc,
          {
            title: w ? "Expand all" : "Collapse all",
            onClick: w ? v : M,
            $allCollapsed: w,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: w ? /* @__PURE__ */ W(_e, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ W(_e, { children: [
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
    u ? k.map(J) : q.map(Y),
    u && q.length > 0 && q.map(Y),
    $.length > 0 && /* @__PURE__ */ W(_e, { children: [
      /* @__PURE__ */ h(
        mr,
        {
          label: P,
          count: $.length,
          isCollapsed: f.has("__subcontract__"),
          onToggle: () => y("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !f.has("__subcontract__") && $.map(Y)
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
}, Mc = b.div`
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
`, kc = yt`
from{
    left: -100%;
}
to{
    left: 100%;
}`, $c = b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${kc} 1s infinite;
`, Dc = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ h(Mc, { position: n, children: /* @__PURE__ */ h($c, {}) }) : null, Cn = Dc, Ge = (e, n) => {
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
    bottomText: x,
    strokeStyle: v,
    labelBetweenCells: M
  } = e;
  if (t.beginPath(), t.strokeStyle = v ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), M ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const p = r + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(d, p, c);
  }
  if (l && f && y && x) {
    t.fillStyle = f, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = y.font;
    const p = r + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, p, y.y), t.font = x.font;
    const O = r + s / 2 - t.measureText(x.label).width / 2;
    t.fillStyle = x.color, t.fillText(x.label, O, x.y);
  }
}, Mn = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, Ec = (e, n, t, r) => {
  const o = pt - Qe / $s, s = pt - Qe / Ds, i = je + bt;
  let c = 0;
  for (let d = 0; d < n; d++) {
    const a = io(
      _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    ), l = a.isCurrentDay;
    if (Ge(
      {
        ctx: e,
        x: c,
        y: i,
        width: $e,
        height: Qe,
        isBottomRow: !0,
        // OPAQUE today fill (currentDay, same as the grid's today column) — the old `today+"26"` was 15% alpha, so
        // events scrolling under the header showed through the HOY cell.
        fillStyle: l ? r.colors.currentDay : a.isBusinessDay ? r.colors.gridBackground : r.colors.primary,
        topText: {
          y: o,
          label: l ? "" : a.dayName.toUpperCase(),
          font: Re.bottomRow.name,
          color: Mn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: l ? `700 10px ${Ye}` : Re.bottomRow.number,
          color: l ? r.colors.today : Mn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            r
          )
        }
      },
      r
    ), l) {
      const x = c + $e / 2, v = o - 13 / 2;
      e.save(), e.fillStyle = r.colors.today, e.beginPath(), e.roundRect ? e.roundRect(x - 30 / 2, v, 30, 13, 5) : e.rect(x - 30 / 2, v, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${Ye}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", x, v + 13 / 2 + 0.5), e.restore();
    }
    c += $e;
  }
}, _c = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Oe;
  const s = je;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= an && (c = 0);
    const a = so(t, d) * Oe;
    Ge(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: bt,
        textYPos: no,
        label: _().month(c).format("MMMM").toUpperCase(),
        font: Re.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, Tc = (e, n, t) => {
  let o = 0, s = 0, i = _(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * $e + $e;
  for (let c = 0; c < an; c++)
    i > an - 1 && (i = 0), s = _(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * $e, Ge(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: je,
        textYPos: Pn,
        label: _(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${_(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: Re.topRow
      },
      t
    ), o += s, i++;
}, Ac = (e, n, t, r) => {
  const o = 7 * $e, s = je, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = _(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % nr;
    f <= 0 && (f += nr), l !== 1 && a === 0 && (d = -l * $e + $e), Ge(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: bt,
        textYPos: no,
        label: `${t.toUpperCase()} ${f}`,
        font: Re.middleRow
      },
      r
    ), d += o;
  }
}, Pc = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t ? n.colors.currentDay : r ? n.colors.primary : n.colors.secondary;
}, Ic = (e, n, t, r, o) => {
  const s = pt - Qe / 1.6, i = pt - Qe / 4.5, c = je + bt;
  let d = 0;
  for (let a = 0; a < n; a++) {
    const l = _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame(_(), "week");
    Ge(
      {
        ctx: e,
        x: d,
        y: c,
        width: mt,
        height: Qe,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : Pc({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: f ? `700 14px ${Ye}` : Re.bottomRow.name,
          color: f ? o.colors.today : Mn({ isCurrent: f }, o)
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
}, Oc = (e, n, t, r) => {
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
}, Yc = (e, n, t, r) => {
  const o = Math.floor(n / Nt) + 2, s = Nt * Ae;
  let d = -_(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ae + 0.5 * Ae;
  for (let a = 0; a < o; a++) {
    const l = _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
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
}, Lc = (e, n, t, r) => {
  const o = Math.ceil(n / Nt), s = _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Ae;
  for (let f = 0; f < a; f++) {
    const y = _(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = _(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), M = v.format("MMMM").toUpperCase(), p = v.diff(y, "hour") + 1, O = f === 0 ? p * Ae : n * Ae;
    Ge(
      {
        ctx: e,
        x: l,
        y: 0,
        width: O,
        height: gt,
        textYPos: Pn,
        label: M,
        font: Re.topRow
      },
      r
    ), l += O;
  }
}, Rc = (e, n, t, r) => {
  let o = 0;
  const s = gt + Mt, i = _(
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
}, Nc = (e, n, t, r, o, s, i) => {
  switch (n) {
    case 0:
      Oc(e, r, s, i), _c(e, t, r, i), Ic(e, t, r, o, i);
      break;
    case 1:
      Tc(e, r, i), Ac(e, r, o, i), Ec(e, t, r, i);
      break;
    case 2:
      Lc(e, t, r, i), Yc(e, t, r, i), Rc(e, t, r, i);
      break;
  }
}, Hc = b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, Bc = b.div`
  position: sticky;
  left: ${Ie}px;
  width: calc(${({ $width: e }) => e}px - ${Ie}px);
  z-index: 3;
`, zc = b.div`
  height: ${pt}px;
  display: block;
`, Fc = b.canvas``, Wc = {
  transfer: /* @__PURE__ */ W(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ W(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ W(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ W(_e, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ W(_e, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ W(_e, { children: [
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
    children: Wc[e]
  }
), jc = b.div`
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
`, Zc = b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, Vc = b.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, Gc = b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, Xc = b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, Uc = b.span`
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
`, Kc = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], Jc = () => /* @__PURE__ */ W(jc, { children: [
  /* @__PURE__ */ h(gr, { children: "Leyenda" }),
  /* @__PURE__ */ W(Pt, { children: [
    /* @__PURE__ */ h(ze, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ W(Pt, { children: [
    /* @__PURE__ */ h(ze, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ W(Pt, { children: [
    /* @__PURE__ */ h(ze, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ W(Pt, { children: [
    /* @__PURE__ */ h(Zc, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(Vc, {}),
  /* @__PURE__ */ W(gr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Kc.map((e) => /* @__PURE__ */ W(Gc, { children: [
    /* @__PURE__ */ h(Xc, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(Uc, { style: { color: e.color }, children: /* @__PURE__ */ h(ze, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), qc = kn(function({ zoom: n, topBarWidth: t, showThemeToggle: r, toggleTheme: o }, s) {
  const { week: i } = Ve(), { date: c, cols: d, dayOfYear: a, startDate: l, config: f } = Ze(), y = me(null), x = Ft(), v = de(
    (M) => {
      const p = Rn(), z = (n === 2 ? ks : pt) + 1;
      lo(M, p, z), Nc(M, n, d, l, i, a, x);
    },
    [d, a, l, i, n, x]
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
  }, [c, n, v]), /* @__PURE__ */ W(Hc, { ref: s, children: [
    (f.showTopbar !== !1 || f.showLegend !== !1) && /* @__PURE__ */ W(Bc, { $width: t, children: [
      f.showTopbar !== !1 && /* @__PURE__ */ h(ba, { width: t, showThemeToggle: r, toggleTheme: o }),
      f.showLegend !== !1 && /* @__PURE__ */ h(Jc, {})
    ] }),
    /* @__PURE__ */ h(zc, { id: Es, children: /* @__PURE__ */ h(Fc, { ref: y }) })
  ] });
}), Qc = (e, n, t) => {
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
}, el = (e, n, t, r, o, s) => {
  const i = e * ge + _s, c = n.hour(), d = t.hour();
  let a, l, f, y;
  switch (s) {
    case 2: {
      a = _(r), l = _(o), f = _(n).hour(c).minute(0), y = _(t).hour(d).minute(0);
      break;
    }
    default: {
      a = _(r).hour(0).minute(0), l = _(o).hour(23).minute(59), f = n, y = t;
      break;
    }
  }
  return {
    ...Qc(
      { startDate: a, endDate: l },
      { startDate: f, endDate: y },
      s
    ),
    y: i
  };
}, go = (e) => {
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
  ${vt}
  ${xt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const tl = yt`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, nl = b.button`
  ${vt}
  position: absolute;
  height: ${An}px;
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
  /* Motion (gated on reduced-motion): fade/scale a newly-mounted tile in, and glide survivors to a new row when a
     unit/group above them is added, removed, or collapsed. Transition ONLY top — left/width recompute on every
     horizontal scroll-load, so animating them would cause spurious sliding; top derives from row index alone. */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${tl} 180ms ease-out;
    transition: opacity 0.2s ease, top 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  ${({ $unconfirmed: e }) => e && `background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px #D98A22, 0 2px 5px -1px rgba(12,26,23,0.28);`}
  ${({ $exiting: e }) => e && "opacity: 0; transform: scale(0.96); pointer-events: none;"}
`, rl = b.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`, ol = b.div`
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
`, yr = b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, sl = b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, il = b.span`
  ${xt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, al = b.span`
  ${xt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, cl = b.span`
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
`, ll = b.div`
  ${xt}
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
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, dl = b.div`
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
`, wr = b.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, ul = 34, fl = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, hl = "#3E8E5A", pl = "#D98A22", Sr = ({
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
  const { date: l } = Ze(), f = Ln(l, t), { y, x, width: v } = el(
    e,
    f.startDate,
    f.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: M } = Ft(), p = me(null), O = _(n.startDate).isSame(_(n.endDate), "day"), z = n.eventType === kt.Tour, L = n.eventType === kt.Transfer, k = O && (z || L), u = (q) => {
    p.current = { x: q.clientX, y: q.clientY }, c && s && (q.preventDefault(), s(n, q));
  }, g = (q) => {
    if (p.current) {
      const T = Math.abs(q.clientX - p.current.x), E = Math.abs(q.clientY - p.current.y);
      Math.sqrt(T * T + E * E) <= 5 && (o == null || o(n)), p.current = null;
    } else
      o == null || o(n);
  }, w = {
    left: `${x}px`,
    top: `${y + d}px`,
    backgroundColor: `${n.bgColor ?? M.defaultTile}`,
    width: `${v}px`,
    color: go(n.bgColor ?? "")
  }, $ = !r && n.readiness ? fl[n.readiness] : null, P = r && n.subcontractConfirmed === !1, Y = r ? P ? pl : hl : $ == null ? void 0 : $.stripe, J = (q) => /* @__PURE__ */ W(
    nl,
    {
      "data-segment-id": n.segmentId,
      style: w,
      onClick: g,
      onMouseDown: u,
      onDragStart: (T) => T.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: P,
      $exiting: a,
      children: [
        Y && /* @__PURE__ */ h(rl, { style: { background: Y } }),
        q
      ]
    }
  );
  return J(
    k ? /* @__PURE__ */ W(_e, { children: [
      (r || $) && /* @__PURE__ */ h(vr, { $sm: !0, children: r ? /* @__PURE__ */ h(br, { children: "SUB" }) : $ && /* @__PURE__ */ h(xr, { $sm: !0, style: { color: $.color }, children: /* @__PURE__ */ h(ze, { name: $.icon, strokeWidth: $.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ W(dl, { $transfer: L, children: [
        /* @__PURE__ */ h(ze, { name: L ? "transfer" : "sun", strokeWidth: 2.4 }),
        v >= ul && /* @__PURE__ */ W(_e, { children: [
          /* @__PURE__ */ h(wr, { children: _(n.startDate).format("HH:mm") }),
          !L && /* @__PURE__ */ h(wr, { $end: !0, children: _(n.endDate).format("HH:mm") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ W(_e, { children: [
      /* @__PURE__ */ h(vr, { children: r ? /* @__PURE__ */ h(br, { children: "SUB" }) : $ && /* @__PURE__ */ h(xr, { style: { color: $.color }, children: /* @__PURE__ */ h(ze, { name: $.icon, strokeWidth: $.icon === "check" ? 2.6 : 2.2 }) }) }),
      n.bookingNumber && /* @__PURE__ */ h(cl, { children: n.bookingNumber }),
      /* @__PURE__ */ W(ol, { children: [
        /* @__PURE__ */ W(yr, { $pad: !0, children: [
          /* @__PURE__ */ h(sl, { children: /* @__PURE__ */ h(ze, { name: L ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(il, { children: n.title })
        ] }),
        n.subtitle && /* @__PURE__ */ h(yr, { children: /* @__PURE__ */ h(al, { children: n.subtitle }) }),
        n.driver && /* @__PURE__ */ W(ll, { children: [
          /* @__PURE__ */ h(ze, { name: "person" }),
          n.driver
        ] })
      ] })
    ] })
  );
}, Cr = (e, n) => {
  let t = 0;
  for (const r of n)
    e >= r && t++;
  return t * Pe;
}, ml = b.div`
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
  pointer-events: none;
`, gl = ({
  data: e,
  zoom: n,
  onTileClick: t,
  onDragStart: r,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = []
}) => {
  const { nodes: c, liveMap: d } = Me(() => {
    const x = /* @__PURE__ */ new Map();
    let v = 0;
    return { nodes: e.map((p, O) => {
      if (O > 0 && (v += Math.max(e[O - 1].data.length, 1)), !p.data.some((z) => z.length > 0)) {
        const z = Cr(v, i);
        return [
          /* @__PURE__ */ h(ml, { style: { top: `${v * ge + z}px` }, children: "Disponible" }, `dispo-${p.id}`)
        ];
      }
      return p.data.map(
        (z, L) => z.map((k) => {
          const u = s === k.segmentId, g = o ? o(k) : !1, w = L + v, $ = Cr(w, i);
          return x.set(k.segmentId, {
            project: k,
            absoluteRow: w,
            yOffset: $,
            isSubcontract: !!p.isSubcontract
          }), /* @__PURE__ */ h(
            Sr,
            {
              row: w,
              data: k,
              zoom: n,
              isSubcontract: p.isSubcontract,
              onTileClick: t,
              onDragStart: r,
              isDragging: u,
              isDraggable: g,
              yOffset: $
            },
            k.segmentId
          );
        })
      );
    }).flat(2), liveMap: x };
  }, [e, t, n, r, o, s, i]), a = me(/* @__PURE__ */ new Map()), l = me([]), [f, y] = pe([]);
  return ve(() => () => l.current.forEach(clearTimeout), []), ve(() => {
    const x = a.current;
    a.current = d;
    const v = [];
    if (x.forEach((O, z) => {
      d.has(z) || v.push(O);
    }), y((O) => {
      let z = O.filter((L) => !d.has(L.project.segmentId));
      for (const L of v)
        z.some((k) => k.project.segmentId === L.project.segmentId) || (z = [...z, L]);
      return z;
    }), !v.length)
      return;
    const M = new Set(v.map((O) => O.project.segmentId)), p = setTimeout(() => {
      y((O) => O.filter((z) => !M.has(z.project.segmentId)));
    }, 220);
    l.current.push(p);
  }, [d]), /* @__PURE__ */ W(_e, { children: [
    c,
    f.map((x) => /* @__PURE__ */ h(
      Sr,
      {
        row: x.absoluteRow,
        data: x.project,
        zoom: n,
        isSubcontract: x.isSubcontract,
        yOffset: x.yOffset,
        isDragging: !1,
        isDraggable: !1,
        exiting: !0
      },
      `exit-${x.project.segmentId}`
    ))
  ] });
}, yl = gl;
b.div`
  box-sizing: border-box;
  font-family: ${Ye};
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
const vl = b.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, xl = b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, bl = b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, wl = b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, Sl = b.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, Cl = b.div`
  ${vt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Ml = b.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, kl = b.div`
  padding: 10px 12px;
`, $l = b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Mr = b.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, kr = b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, $r = b.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Dr = b.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Er = b.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Dl = b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, El = b.div``, _l = b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Tl = b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Al = b.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, _r = b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Tr = b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Ar = b.div`
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
const Pl = {
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
}, Il = ({ tooltipData: e }) => {
  const { mouseCoords: n, reservationData: t } = e, r = me(null), [o, s] = pe("below"), i = Ve(), c = { ...Pl, ...i.tooltip };
  Bt(() => {
    if (!r.current || !n)
      return;
    const x = r.current, { width: v, height: M } = x.getBoundingClientRect(), p = x.parentElement;
    if (!p)
      return;
    const O = p.getBoundingClientRect(), z = 12, L = 4, k = O.height - n.y, u = O.width - n.x;
    let g = n.x + z, w = n.y + z, $ = "below";
    u < v + z && (g = n.x - v - z), k < M + z && (w = n.y - M - z, $ = "above"), g = Math.max(L, Math.min(g, O.width - v - L)), w = Math.max(L, Math.min(w, O.height - M - L)), s($), x.style.left = `${g}px`, x.style.top = `${w}px`;
  }, [n]);
  const d = t.reservationType === kt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, y = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ W(vl, { ref: r, $position: o, children: [
    /* @__PURE__ */ W(xl, { children: [
      /* @__PURE__ */ W(bl, { children: [
        /* @__PURE__ */ h(wl, { children: t.bookingNumber }),
        /* @__PURE__ */ h(Sl, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ h(Cl, { children: t.eventName }),
      t.client && /* @__PURE__ */ h(Ml, { children: t.client })
    ] }),
    /* @__PURE__ */ W(kl, { children: [
      /* @__PURE__ */ W($l, { children: [
        /* @__PURE__ */ W(Mr, { children: [
          /* @__PURE__ */ h(kr, { children: c.startDate }),
          /* @__PURE__ */ W($r, { children: [
            /* @__PURE__ */ h(Dr, { children: t.startDate }),
            " ",
            /* @__PURE__ */ h(Er, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ W(Mr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(kr, { children: c.endDate }),
          /* @__PURE__ */ W($r, { children: [
            /* @__PURE__ */ h(Dr, { children: t.endDate }),
            " ",
            /* @__PURE__ */ h(Er, { children: t.endTime })
          ] })
        ] })
      ] }),
      y.length > 0 && /* @__PURE__ */ h(Dl, { children: y.map((x, v) => /* @__PURE__ */ W(El, { children: [
        /* @__PURE__ */ h(_l, { children: x.label }),
        /* @__PURE__ */ h(Tl, { children: x.value })
      ] }, v)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ W(Al, { children: [
        t.serviceNotes && /* @__PURE__ */ W(_r, { children: [
          /* @__PURE__ */ h(Tr, { children: c.serviceNotes }),
          /* @__PURE__ */ h(Ar, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ W(_r, { children: [
          /* @__PURE__ */ h(Tr, { children: c.reservationNotes }),
          /* @__PURE__ */ h(Ar, { children: t.reservationNotes })
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
const Ol = b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Yl = b.div`
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
`, Ll = b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Pr = b.p`
  ${vt}
  ${xt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Rl = b.p`
  ${vt}
  ${xt}
`, Nl = b.div`
  position: sticky;
  left: ${Ie + 16}px;
  overflow: hidden;
`, Hl = b.div`
  position: absolute;
  height: ${An}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Bl = b.div`
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
`, zl = b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Fl = b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Wl = b.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Ir = b.div`
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
`, Or = b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Yr = b.div`
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
`, Lr = b.div`
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
`, Rr = b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, jl = ({
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
  const a = Ve(), l = (k) => {
    let u = 0;
    for (const g of d)
      g <= k && u++;
    return k * ge + u * Pe;
  }, [f, y] = pe(null), [x, v] = pe(0), M = de((k = 400, u = 300) => {
    const w = t.width, $ = 48, P = document.getElementById("react-scheduler");
    if (!P)
      return {
        x: n.x + w + 16,
        y: n.y
      };
    const Y = P.scrollLeft, J = P.scrollTop, q = P.clientWidth, T = P.clientHeight, E = n.x - Y, A = n.y - J, N = {
      left: Ie + 16,
      // Avoid left column
      right: q - 16,
      top: 16,
      bottom: T - 16
    }, R = N.right - (E + w), Q = E - N.left, ee = N.bottom - (A + $), se = A - N.top;
    let ae, H;
    return R >= k + 16 ? ae = E + w + 16 : Q >= k + 16 ? ae = E - k - 16 : R >= Q ? (ae = E + w + 16, ae + k > N.right && (ae = N.right - k)) : (ae = E - k - 16, ae < N.left && (ae = N.left)), ee >= u + 16 ? H = A + $ + 16 : se >= u + 16 ? H = A - u - 16 : ee >= se ? (H = A + $ + 16, H + u > N.bottom && (H = N.bottom - u)) : (H = A - u - 16, H < N.top && (H = N.top)), ae = Math.max(N.left, Math.min(ae, N.right - k)), H = Math.max(N.top, Math.min(H, N.bottom - u)), {
      x: ae + Y,
      y: H + J
    };
  }, [n.x, n.y, t.width]);
  ve(() => {
    s === "dragging" && e && x === 0 ? v(n.x) : s === "idle" && v(0);
  }, [s, e, n.x, x]), ve(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const p = Me(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const k = [];
    let u = 0;
    for (const g of i) {
      const w = Math.max(g.data.length, 1);
      if (g.capacity !== void 0 && e.totalPassengers > g.capacity)
        for (let $ = 0; $ < w; $++)
          k.push(u + $);
      u += w;
    }
    return k;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const O = s === "animating", z = go(e.bgColor ?? ""), L = () => {
    if (!r)
      return "";
    const k = _(r.startDate).format("MMM D, HH:mm"), u = _(r.endDate).format("HH:mm");
    return `${k} - ${u}`;
  };
  return /* @__PURE__ */ W(Ol, { children: [
    p.map((k) => /* @__PURE__ */ h(
      Fl,
      {
        style: {
          top: `${l(k)}px`,
          height: `${ge}px`
        }
      },
      k
    )),
    r && s === "dragging" && /* @__PURE__ */ h(
      zl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${ge}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ W(_e, { children: [
      /* @__PURE__ */ h(
        Hl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (ge - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ h(
        Bl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (ge - 48) / 2}px`
          },
          children: L()
        }
      )
    ] }),
    r && s === "dragging" && c && /* @__PURE__ */ h(
      Wl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          left: "0px",
          top: `${l(r.resourceIndex)}px`,
          height: `${ge}px`
        }
      }
    ),
    r && o && r.hasConflict && r.conflicts && r.conflicts.length > 0 && s === "dragging" && (() => {
      const k = M(400, 300);
      return /* @__PURE__ */ W(
        Ir,
        {
          style: {
            left: `${k.x}px`,
            top: `${k.y}px`
          },
          children: [
            /* @__PURE__ */ W(Or, { children: [
              /* @__PURE__ */ h(Yr, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Lr, { children: r.conflicts.map((u, g) => {
              const w = _(r.startDate).format("YYYY-MM-DD"), $ = _(r.endDate).format("YYYY-MM-DD"), P = _(u.event.startDate).format("YYYY-MM-DD"), Y = _(u.event.endDate).format("YYYY-MM-DD"), J = _(u.conflictStart).format("YYYY-MM-DD"), q = _(u.conflictEnd).format("YYYY-MM-DD"), T = w !== $, E = P !== Y, A = J !== q, N = T ? _(r.startDate).format("MMM D, h:mm A") : _(r.startDate).format("h:mm A"), R = T ? _(r.endDate).format("MMM D, h:mm A") : _(r.endDate).format("h:mm A"), Q = E ? _(u.event.startDate).format("MMM D, h:mm A") : _(u.event.startDate).format("h:mm A"), ee = E ? _(u.event.endDate).format("MMM D, h:mm A") : _(u.event.endDate).format("h:mm A"), se = A ? _(u.conflictStart).format("MMM D, h:mm A") : _(u.conflictStart).format("h:mm A"), ae = A ? _(u.conflictEnd).format("MMM D, h:mm A") : _(u.conflictEnd).format("h:mm A"), H = A ? "" : _(u.conflictStart).format("MMM D"), B = r.startDate.getTime(), X = r.endDate.getTime(), te = u.event.startDate.getTime(), S = u.event.endDate.getTime(), I = B >= te && B < S, C = X > te && X <= S, Z = B <= te && X >= S, K = te <= B && S >= X;
              let F = !1, m = !1, G = !1, D = !1, j = "";
              return Z || K ? (F = !0, m = !0, G = !0, D = !0, j = `⚠️ ${a.conflicts.changeBoth}`) : I && C ? (F = !0, m = !0, G = !0, D = !0, j = `⚠️ ${a.conflicts.changeBoth}`) : I ? (F = !0, D = !0, j = `⚠️ ${a.conflicts.changeStart}`) : C && (m = !0, G = !0, j = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ W(Kt, { children: [
                /* @__PURE__ */ W(Jt, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ W(at, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  F ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: N }) : N,
                  " ",
                  a.conflicts.to,
                  " ",
                  m ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: R }) : R
                ] }),
                /* @__PURE__ */ W(at, { children: [
                  /* @__PURE__ */ h("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  G ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Q }) : Q,
                  " ",
                  a.conflicts.to,
                  " ",
                  D ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ee }) : ee
                ] }),
                /* @__PURE__ */ W(Rr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  H && `${H}, `,
                  se,
                  " - ",
                  ae
                ] }),
                j && /* @__PURE__ */ h(at, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: j })
              ] }, g);
            }) })
          ]
        }
      );
    })(),
    r && o && !r.hasConflict && r.nearbyEvents && r.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const k = M(400, 400);
      return /* @__PURE__ */ W(
        Ir,
        {
          style: {
            left: `${k.x}px`,
            top: `${k.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ W(Or, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Yr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ W(Lr, { children: [
              (() => {
                const u = r.nearbyEvents.some((P) => P.position === "before"), g = r.nearbyEvents.some((P) => P.position === "after"), w = _(r.startDate).format("h:mm A"), $ = _(r.endDate).format("h:mm A");
                return /* @__PURE__ */ W(Kt, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ W(Jt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(at, { style: { fontWeight: 600 }, children: [
                    _(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    g ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: $ }) : $
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
                const w = _(u.event.startDate).format("YYYY-MM-DD"), $ = _(u.event.endDate).format("YYYY-MM-DD"), P = w !== $, Y = P ? _(u.event.startDate).format("MMM D, h:mm A") : _(u.event.startDate).format("h:mm A"), J = P ? _(u.event.endDate).format("MMM D, h:mm A") : _(u.event.endDate).format("h:mm A"), q = _(u.event.startDate).format("MMM D"), T = Math.floor(u.timeGap / (1e3 * 60 * 60)), E = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), A = T > 0 ? `${T}h ${E}m` : `${E}m`, N = u.position === "after", R = u.position === "before";
                return /* @__PURE__ */ W(Kt, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ W(Jt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(at, { children: [
                    !P && `${q}: `,
                    N ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: Y }) : Y,
                    " ",
                    a.conflicts.to,
                    " ",
                    R ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: J }) : J
                  ] }),
                  /* @__PURE__ */ W(Rr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    A,
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
      Yl,
      {
        $isAnimating: O,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: O ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: O ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: O ? void 0 : `translate3d(${c ? x : n.x}px, ${n.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: z
        },
        children: /* @__PURE__ */ h(Ll, { children: /* @__PURE__ */ W(Nl, { children: [
          /* @__PURE__ */ h(Pr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Pr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(Rl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Zl = jl, Vl = yt`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Gl = b.div`
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
  animation: ${Vl} 1.5s ease-in-out infinite;
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
`, Xl = ({ selectionBox: e, isSelecting: n }) => !e || !n ? null : /* @__PURE__ */ h(
  Gl,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Ul = Xl, Kl = yt`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Jl = b.div`
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
  animation: ${Kl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, ql = b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Ql = b.span`
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
`, ed = b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, td = b.span`
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
const nd = b.div`
  display: flex;
  gap: 8px;
`, Nr = b.button`
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
`, rd = ({ selections: e, onConfirm: n, onClear: t }) => {
  var v;
  const o = Ve().multiSelect, s = Me(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, x = /* @__PURE__ */ W(Jl, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ W(ql, { children: [
      /* @__PURE__ */ W(Ql, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ W(ed, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ h(td, { children: c })
    ] }),
    /* @__PURE__ */ W(nd, { children: [
      /* @__PURE__ */ W(Nr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ h(Nr, { variant: "primary", $hasConflicts: y, onClick: n, children: y ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return Co(x, document.body);
}, od = rd, sd = yt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, id = b.div`
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
  animation: ${sd} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && zt`
      border-style: dashed;
    `}
`, ad = b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, cd = b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, ld = b.button`
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
`, dd = ({
  selections: e,
  data: n,
  zoom: t,
  startDate: r,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = pe(null), [a, l] = pe({ x: 0, y: 0 }), f = me(null), y = Me(() => {
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
  }, [t]), x = Me(() => _().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), v = Me(() => e.map((g, w) => {
    let $ = 0, P = !1;
    for (const Q of n) {
      if (Q.id === g.resourceId) {
        P = !0;
        break;
      }
      $ += Math.max(Q.data.length, 1);
    }
    if (!P)
      return null;
    const Y = _(g.startDate), J = _(g.endDate);
    let q, T;
    switch (t) {
      case 0:
        q = Math.floor(Y.diff(x, "days") / 7), T = Math.max(1, Math.ceil(J.diff(Y, "days") / 7) + 1);
        break;
      case 1:
        q = Y.diff(x, "days"), T = Math.max(1, J.diff(Y, "days") + 1);
        break;
      case 2:
        q = Y.diff(x, "hours"), T = Math.max(1, J.diff(Y, "hours") + 1);
        break;
      default:
        q = 0, T = 1;
    }
    const E = q * y;
    let A = 0;
    for (const Q of i)
      Q <= $ && A++;
    const N = $ * ge + A * Pe, R = T * y;
    return {
      index: w,
      selection: g,
      x: E,
      y: N,
      width: R,
      height: ge
    };
  }), [e, n, t, x, y]), M = (g, w) => {
    const $ = _(g).format("MMM D"), P = _(w).format("MMM D");
    return $ === P ? $ : `${$} - ${P}`;
  }, p = (g) => !g.hasConflict || !g.conflicts ? "" : `⚠️ Conflicts with:
${g.conflicts.map(($) => {
    const P = ($.overlapDuration / 36e5).toFixed(1);
    return `• ${$.event.title} (${P}h overlap)`;
  }).join(`
`)}`, O = de(
    (g) => {
      let w = 0;
      for (const $ of n) {
        const P = Math.max($.data.length, 1);
        if (g >= w * ge && g < (w + P) * ge)
          return {
            resourceId: $.id,
            resourceLabel: $.label
          };
        w += P;
      }
      return null;
    },
    [n]
  ), z = de(
    (g) => {
      const w = Math.floor(g / y);
      switch (t) {
        case 0:
          return x.add(w * 7, "days").toDate();
        case 1:
          return x.add(w, "days").toDate();
        case 2:
          return x.add(w, "hours").toDate();
        default:
          return x.toDate();
      }
    },
    [t, x, y]
  ), L = de(
    (g, w) => {
      !s || (g.preventDefault(), g.stopPropagation(), !v[w]) || (f.current = { x: g.clientX, y: g.clientY }, d(w), l({ x: 0, y: 0 }));
    },
    [s, v]
  ), k = de(
    (g) => {
      if (c === null || !f.current)
        return;
      const w = g.clientX - f.current.x, $ = g.clientY - f.current.y, P = Math.round(w / y) * y, Y = Math.round($ / ge) * ge;
      l({ x: P, y: Y });
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
    const w = g.x + a.x, $ = g.y + a.y, P = O($ + ge / 2);
    if (!P) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const Y = z(w), J = e[c], q = J.endDate.getTime() - J.startDate.getTime(), T = new Date(Y.getTime() + q);
    s(c, {
      startDate: Y,
      endDate: T,
      resourceId: P.resourceId,
      resourceLabel: P.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, v, e, s, O, z]);
  return ve(() => {
    if (c !== null)
      return document.addEventListener("mousemove", k), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", u);
      };
  }, [c, k, u]), /* @__PURE__ */ h(_e, { children: v.map((g) => {
    if (!g)
      return null;
    const w = g.selection.hasConflict || !1, $ = c === g.index, P = $ ? g.x + a.x : g.x, Y = $ ? g.y + a.y : g.y;
    return /* @__PURE__ */ W(
      id,
      {
        $hasConflict: w,
        $isDragging: $,
        style: {
          left: P,
          top: Y,
          width: g.width,
          height: g.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (J) => L(J, g.index),
        children: [
          w && /* @__PURE__ */ h(cd, { title: p(g.selection), children: "⚠️" }),
          /* @__PURE__ */ h(ad, { $hasConflict: w, children: M(g.selection.startDate, g.selection.endDate) }),
          /* @__PURE__ */ h(
            ld,
            {
              onClick: (J) => {
                J.stopPropagation(), o(g.index);
              },
              onMouseDown: (J) => J.stopPropagation(),
              title: w ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      g.index
    );
  }) });
}, ud = dd, fd = b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, hd = ({ zoom: e, startDate: n }) => {
  const { cols: t } = Ze(), r = Me(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Oe * 7 : $e, s = _().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = _().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ h(fd, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, pd = hd;
export {
  xd as Scheduler
};
