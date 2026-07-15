var mo = Object.defineProperty;
var go = (e, n, t) => n in e ? mo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Ln = (e, n, t) => (go(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as h, jsxs as V, Fragment as Pe } from "react/jsx-runtime";
import * as re from "react";
import qe, { useRef as xe, useContext as Ge, useMemo as Ee, useLayoutEffect as Sn, useDebugValue as Rn, createElement as yo, createContext as Lr, useState as ue, useCallback as ce, useEffect as ve, forwardRef as Cn, useImperativeHandle as Rr } from "react";
import { createPortal as vo } from "react-dom";
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, St = {}, xo = {
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
var Nn;
function bo() {
  if (Nn)
    return pe;
  Nn = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function M(p) {
    if (typeof p == "object" && p !== null) {
      var H = p.$$typeof;
      switch (H) {
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
                  return H;
              }
          }
        case n:
          return H;
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
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === r || p === a || p === l || p === x || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === f || p.$$typeof === s || p.$$typeof === i || p.$$typeof === d || p.$$typeof === v || p.getModuleId !== void 0);
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
var Hn;
function wo() {
  return Hn || (Hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), v = !1, M = !1, p = !1, H = !1, X = !1, z;
    z = Symbol.for("react.module.reference");
    function A(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === t || L === o || X || L === r || L === a || L === l || H || L === x || v || M || p || typeof L == "object" && L !== null && (L.$$typeof === g || L.$$typeof === f || L.$$typeof === s || L.$$typeof === i || L.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === z || L.getModuleId !== void 0));
    }
    function u(L) {
      if (typeof L == "object" && L !== null) {
        var K = L.$$typeof;
        switch (K) {
          case e:
            var ne = L.type;
            switch (ne) {
              case t:
              case o:
              case r:
              case a:
              case l:
                return ne;
              default:
                var N = ne && ne.$$typeof;
                switch (N) {
                  case c:
                  case i:
                  case d:
                  case g:
                  case f:
                  case s:
                    return N;
                  default:
                    return K;
                }
            }
          case n:
            return K;
        }
      }
    }
    var y = i, b = s, _ = e, T = d, F = t, Z = g, Q = f, k = n, D = o, $ = r, B = a, I = l, J = !1, ee = !1;
    function se(L) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
    function U(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function G(L) {
      return u(L) === d;
    }
    function w(L) {
      return u(L) === t;
    }
    function P(L) {
      return u(L) === g;
    }
    function m(L) {
      return u(L) === f;
    }
    function O(L) {
      return u(L) === n;
    }
    function R(L) {
      return u(L) === o;
    }
    function Y(L) {
      return u(L) === r;
    }
    function S(L) {
      return u(L) === a;
    }
    function te(L) {
      return u(L) === l;
    }
    me.ContextConsumer = y, me.ContextProvider = b, me.Element = _, me.ForwardRef = T, me.Fragment = F, me.Lazy = Z, me.Memo = Q, me.Portal = k, me.Profiler = D, me.StrictMode = $, me.Suspense = B, me.SuspenseList = I, me.isAsyncMode = se, me.isConcurrentMode = oe, me.isContextConsumer = W, me.isContextProvider = j, me.isElement = U, me.isForwardRef = G, me.isFragment = w, me.isLazy = P, me.isMemo = m, me.isPortal = O, me.isProfiler = R, me.isStrictMode = Y, me.isSuspense = S, me.isSuspenseList = te, me.isValidElementType = A, me.typeOf = u;
  }()), me;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = bo() : e.exports = wo();
})(xo);
function So(e) {
  function n(W, j, U, G, w) {
    for (var P = 0, m = 0, O = 0, R = 0, Y, S, te = 0, L = 0, K, ne = K = Y = 0, N = 0, ae = 0, de = 0, fe = 0, be = U.length, $e = be - 1, we, q = "", ie = "", le = "", Ce = "", Me; N < be; ) {
      if (S = U.charCodeAt(N), N === $e && m + R + O + P !== 0 && (m !== 0 && (S = m === 47 ? 10 : 47), R = O = P = 0, be++, $e++), m + R + O + P === 0) {
        if (N === $e && (0 < ae && (q = q.replace(g, "")), 0 < q.trim().length)) {
          switch (S) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += U.charAt(N);
          }
          S = 59;
        }
        switch (S) {
          case 123:
            for (q = q.trim(), Y = q.charCodeAt(0), K = 1, fe = ++N; N < be; ) {
              switch (S = U.charCodeAt(N)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (S = U.charCodeAt(N + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = N + 1; ne < $e; ++ne)
                          switch (U.charCodeAt(ne)) {
                            case 47:
                              if (S === 42 && U.charCodeAt(ne - 1) === 42 && N + 2 !== ne) {
                                N = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (S === 47) {
                                N = ne + 1;
                                break e;
                              }
                          }
                        N = ne;
                      }
                  }
                  break;
                case 91:
                  S++;
                case 40:
                  S++;
                case 34:
                case 39:
                  for (; N++ < $e && U.charCodeAt(N) !== S; )
                    ;
              }
              if (K === 0)
                break;
              N++;
            }
            switch (K = U.substring(fe, N), Y === 0 && (Y = (q = q.replace(f, "").trim()).charCodeAt(0)), Y) {
              case 64:
                switch (0 < ae && (q = q.replace(g, "")), S = q.charCodeAt(1), S) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ae = j;
                    break;
                  default:
                    ae = B;
                }
                if (K = n(j, ae, K, S, w + 1), fe = K.length, 0 < J && (ae = t(B, q, de), Me = c(3, K, ae, j, k, Q, fe, S, w, G), q = ae.join(""), Me !== void 0 && (fe = (K = Me.trim()).length) === 0 && (S = 0, K = "")), 0 < fe)
                  switch (S) {
                    case 115:
                      q = q.replace(y, i);
                    case 100:
                    case 109:
                    case 45:
                      K = q + "{" + K + "}";
                      break;
                    case 107:
                      q = q.replace(X, "$1 $2"), K = q + "{" + K + "}", K = $ === 1 || $ === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                      break;
                    default:
                      K = q + K, G === 112 && (K = (ie += K, ""));
                  }
                else
                  K = "";
                break;
              default:
                K = n(j, t(j, q, de), K, G, w + 1);
            }
            le += K, K = de = ae = ne = Y = 0, q = "", S = U.charCodeAt(++N);
            break;
          case 125:
          case 59:
            if (q = (0 < ae ? q.replace(g, "") : q).trim(), 1 < (fe = q.length))
              switch (ne === 0 && (Y = q.charCodeAt(0), Y === 45 || 96 < Y && 123 > Y) && (fe = (q = q.replace(" ", ":")).length), 0 < J && (Me = c(1, q, j, W, k, Q, ie.length, G, w, G)) !== void 0 && (fe = (q = Me.trim()).length) === 0 && (q = "\0\0"), Y = q.charCodeAt(0), S = q.charCodeAt(1), Y) {
                case 0:
                  break;
                case 64:
                  if (S === 105 || S === 99) {
                    Ce += q + U.charAt(N);
                    break;
                  }
                default:
                  q.charCodeAt(fe - 1) !== 58 && (ie += o(q, Y, S, q.charCodeAt(2)));
              }
            de = ae = ne = Y = 0, q = "", S = U.charCodeAt(++N);
        }
      }
      switch (S) {
        case 13:
        case 10:
          m === 47 ? m = 0 : 1 + Y === 0 && G !== 107 && 0 < q.length && (ae = 1, q += "\0"), 0 < J * se && c(0, q, j, W, k, Q, ie.length, G, w, G), Q = 1, k++;
          break;
        case 59:
        case 125:
          if (m + R + O + P === 0) {
            Q++;
            break;
          }
        default:
          switch (Q++, we = U.charAt(N), S) {
            case 9:
            case 32:
              if (R + P + m === 0)
                switch (te) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    we = "";
                    break;
                  default:
                    S !== 32 && (we = " ");
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
              R + m + P === 0 && (ae = de = 1, we = "\f" + we);
              break;
            case 108:
              if (R + m + P + D === 0 && 0 < ne)
                switch (N - ne) {
                  case 2:
                    te === 112 && U.charCodeAt(N - 3) === 58 && (D = te);
                  case 8:
                    L === 111 && (D = L);
                }
              break;
            case 58:
              R + m + P === 0 && (ne = N);
              break;
            case 44:
              m + O + R + P === 0 && (ae = 1, we += "\r");
              break;
            case 34:
            case 39:
              m === 0 && (R = R === S ? 0 : R === 0 ? S : R);
              break;
            case 91:
              R + m + O === 0 && P++;
              break;
            case 93:
              R + m + O === 0 && P--;
              break;
            case 41:
              R + m + P === 0 && O--;
              break;
            case 40:
              if (R + m + P === 0) {
                if (Y === 0)
                  switch (2 * te + 3 * L) {
                    case 533:
                      break;
                    default:
                      Y = 1;
                  }
                O++;
              }
              break;
            case 64:
              m + O + R + P + ne + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < R + P + O))
                switch (m) {
                  case 0:
                    switch (2 * S + 3 * U.charCodeAt(N + 1)) {
                      case 235:
                        m = 47;
                        break;
                      case 220:
                        fe = N, m = 42;
                    }
                    break;
                  case 42:
                    S === 47 && te === 42 && fe + 2 !== N && (U.charCodeAt(fe + 2) === 33 && (ie += U.substring(fe, N + 1)), we = "", m = 0);
                }
          }
          m === 0 && (q += we);
      }
      L = te, te = S, N++;
    }
    if (fe = ie.length, 0 < fe) {
      if (ae = j, 0 < J && (Me = c(2, ie, ae, W, k, Q, fe, G, w, G), Me !== void 0 && (ie = Me).length === 0))
        return Ce + ie + le;
      if (ie = ae.join(",") + "{" + ie + "}", $ * D !== 0) {
        switch ($ !== 2 || s(ie, 2) || (D = 0), D) {
          case 111:
            ie = ie.replace(A, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(z, "::-webkit-input-$1") + ie.replace(z, "::-moz-$1") + ie.replace(z, ":-ms-input-$1") + ie;
        }
        D = 0;
      }
    }
    return Ce + ie + le;
  }
  function t(W, j, U) {
    var G = j.trim().split(p);
    j = G;
    var w = G.length, P = W.length;
    switch (P) {
      case 0:
      case 1:
        var m = 0;
        for (W = P === 0 ? "" : W[0] + " "; m < w; ++m)
          j[m] = r(W, j[m], U).trim();
        break;
      default:
        var O = m = 0;
        for (j = []; m < w; ++m)
          for (var R = 0; R < P; ++R)
            j[O++] = r(W[R] + " ", G[m], U).trim();
    }
    return j;
  }
  function r(W, j, U) {
    var G = j.charCodeAt(0);
    switch (33 > G && (G = (j = j.trim()).charCodeAt(0)), G) {
      case 38:
        return j.replace(H, "$1" + W.trim());
      case 58:
        return W.trim() + j.replace(H, "$1" + W.trim());
      default:
        if (0 < 1 * U && 0 < j.indexOf("\f"))
          return j.replace(H, (W.charCodeAt(0) === 58 ? "" : "$1") + W.trim());
    }
    return W + j;
  }
  function o(W, j, U, G) {
    var w = W + ";", P = 2 * j + 3 * U + 4 * G;
    if (P === 944) {
      W = w.indexOf(":", 9) + 1;
      var m = w.substring(W, w.length - 1).trim();
      return m = w.substring(0, W).trim() + m + ";", $ === 1 || $ === 2 && s(m, 1) ? "-webkit-" + m + m : m;
    }
    if ($ === 0 || $ === 2 && !s(w, 1))
      return w;
    switch (P) {
      case 1015:
        return w.charCodeAt(10) === 97 ? "-webkit-" + w + w : w;
      case 951:
        return w.charCodeAt(3) === 116 ? "-webkit-" + w + w : w;
      case 963:
        return w.charCodeAt(5) === 110 ? "-webkit-" + w + w : w;
      case 1009:
        if (w.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + w + w;
      case 978:
        return "-webkit-" + w + "-moz-" + w + w;
      case 1019:
      case 983:
        return "-webkit-" + w + "-moz-" + w + "-ms-" + w + w;
      case 883:
        if (w.charCodeAt(8) === 45)
          return "-webkit-" + w + w;
        if (0 < w.indexOf("image-set(", 11))
          return w.replace(Z, "$1-webkit-$2") + w;
        break;
      case 932:
        if (w.charCodeAt(4) === 45)
          switch (w.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + w.replace("-grow", "") + "-webkit-" + w + "-ms-" + w.replace("grow", "positive") + w;
            case 115:
              return "-webkit-" + w + "-ms-" + w.replace("shrink", "negative") + w;
            case 98:
              return "-webkit-" + w + "-ms-" + w.replace("basis", "preferred-size") + w;
          }
        return "-webkit-" + w + "-ms-" + w + w;
      case 964:
        return "-webkit-" + w + "-ms-flex-" + w + w;
      case 1023:
        if (w.charCodeAt(8) !== 99)
          break;
        return m = w.substring(w.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + m + "-webkit-" + w + "-ms-flex-pack" + m + w;
      case 1005:
        return v.test(w) ? w.replace(x, ":-webkit-") + w.replace(x, ":-moz-") + w : w;
      case 1e3:
        switch (m = w.substring(13).trim(), j = m.indexOf("-") + 1, m.charCodeAt(0) + m.charCodeAt(j)) {
          case 226:
            m = w.replace(u, "tb");
            break;
          case 232:
            m = w.replace(u, "tb-rl");
            break;
          case 220:
            m = w.replace(u, "lr");
            break;
          default:
            return w;
        }
        return "-webkit-" + w + "-ms-" + m + w;
      case 1017:
        if (w.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (j = (w = W).length - 10, m = (w.charCodeAt(j) === 33 ? w.substring(0, j) : w).substring(W.indexOf(":", 7) + 1).trim(), P = m.charCodeAt(0) + (m.charCodeAt(7) | 0)) {
          case 203:
            if (111 > m.charCodeAt(8))
              break;
          case 115:
            w = w.replace(m, "-webkit-" + m) + ";" + w;
            break;
          case 207:
          case 102:
            w = w.replace(m, "-webkit-" + (102 < P ? "inline-" : "") + "box") + ";" + w.replace(m, "-webkit-" + m) + ";" + w.replace(m, "-ms-" + m + "box") + ";" + w;
        }
        return w + ";";
      case 938:
        if (w.charCodeAt(5) === 45)
          switch (w.charCodeAt(6)) {
            case 105:
              return m = w.replace("-items", ""), "-webkit-" + w + "-webkit-box-" + m + "-ms-flex-" + m + w;
            case 115:
              return "-webkit-" + w + "-ms-flex-item-" + w.replace(_, "") + w;
            default:
              return "-webkit-" + w + "-ms-flex-line-pack" + w.replace("align-content", "").replace(_, "") + w;
          }
        break;
      case 973:
      case 989:
        if (w.charCodeAt(3) !== 45 || w.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (F.test(W) === !0)
          return (m = W.substring(W.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(W.replace("stretch", "fill-available"), j, U, G).replace(":fill-available", ":stretch") : w.replace(m, "-webkit-" + m) + w.replace(m, "-moz-" + m.replace("fill-", "")) + w;
        break;
      case 962:
        if (w = "-webkit-" + w + (w.charCodeAt(5) === 102 ? "-ms-" + w : "") + w, U + G === 211 && w.charCodeAt(13) === 105 && 0 < w.indexOf("transform", 10))
          return w.substring(0, w.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + w;
    }
    return w;
  }
  function s(W, j) {
    var U = W.indexOf(j === 1 ? ":" : "{"), G = W.substring(0, j !== 3 ? U : 10);
    return U = W.substring(U + 1, W.length - 1), ee(j !== 2 ? G : G.replace(T, "$1"), U, j);
  }
  function i(W, j) {
    var U = o(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return U !== j + ";" ? U.replace(b, " or ($1)").substring(4) : "(" + j + ")";
  }
  function c(W, j, U, G, w, P, m, O, R, Y) {
    for (var S = 0, te = j, L; S < J; ++S)
      switch (L = I[S].call(l, W, te, U, G, w, P, m, O, R, Y)) {
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
        J = I.length = 0;
        break;
      default:
        if (typeof W == "function")
          I[J++] = W;
        else if (typeof W == "object")
          for (var j = 0, U = W.length; j < U; ++j)
            d(W[j]);
        else
          se = !!W | 0;
    }
    return d;
  }
  function a(W) {
    return W = W.prefix, W !== void 0 && (ee = null, W ? typeof W != "function" ? $ = 1 : ($ = 2, ee = W) : $ = 0), a;
  }
  function l(W, j) {
    var U = W;
    if (33 > U.charCodeAt(0) && (U = U.trim()), oe = U, U = [oe], 0 < J) {
      var G = c(-1, j, U, U, k, Q, 0, 0, 0, 0);
      G !== void 0 && typeof G == "string" && (j = G);
    }
    var w = n(B, U, j, 0, 0);
    return 0 < J && (G = c(-2, w, U, U, k, Q, w.length, 0, 0, 0), G !== void 0 && (w = G)), oe = "", D = 0, Q = k = 1, w;
  }
  var f = /^\0+/g, g = /[\0\r\f]/g, x = /: */g, v = /zoo|gra/, M = /([,: ])(transform)/g, p = /,\r+?/g, H = /([\t\r\n ])*\f?&/g, X = /@(k\w+)\s*(\S*)\s*/, z = /::(place)/g, A = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, y = /\(\s*(.*)\s*\)/g, b = /([\s\S]*?);/g, _ = /-self|flex-/g, T = /[^]*?(:[rp][el]a[\w-]+)[^]*/, F = /stretch|:\s*\w+\-(?:conte|avail)/, Z = /([^-])(image-set\()/, Q = 1, k = 1, D = 0, $ = 1, B = [], I = [], J = 0, ee = null, se = 0, oe = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var Co = {
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
function Mo(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var ko = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Wn = /* @__PURE__ */ Mo(
  function(e) {
    return ko.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Jt = {}, $o = {
  get exports() {
    return Jt;
  },
  set exports(e) {
    Jt = e;
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
function Do() {
  if (Fn)
    return ge;
  Fn = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, X = e ? Symbol.for("react.scope") : 60119;
  function z(u) {
    if (typeof u == "object" && u !== null) {
      var y = u.$$typeof;
      switch (y) {
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
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  function A(u) {
    return z(u) === a;
  }
  return ge.AsyncMode = d, ge.ConcurrentMode = a, ge.ContextConsumer = c, ge.ContextProvider = i, ge.Element = n, ge.ForwardRef = l, ge.Fragment = r, ge.Lazy = v, ge.Memo = x, ge.Portal = t, ge.Profiler = s, ge.StrictMode = o, ge.Suspense = f, ge.isAsyncMode = function(u) {
    return A(u) || z(u) === d;
  }, ge.isConcurrentMode = A, ge.isContextConsumer = function(u) {
    return z(u) === c;
  }, ge.isContextProvider = function(u) {
    return z(u) === i;
  }, ge.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, ge.isForwardRef = function(u) {
    return z(u) === l;
  }, ge.isFragment = function(u) {
    return z(u) === r;
  }, ge.isLazy = function(u) {
    return z(u) === v;
  }, ge.isMemo = function(u) {
    return z(u) === x;
  }, ge.isPortal = function(u) {
    return z(u) === t;
  }, ge.isProfiler = function(u) {
    return z(u) === s;
  }, ge.isStrictMode = function(u) {
    return z(u) === o;
  }, ge.isSuspense = function(u) {
    return z(u) === f;
  }, ge.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === g || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === x || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === p || u.$$typeof === H || u.$$typeof === X || u.$$typeof === M);
  }, ge.typeOf = z, ge;
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
var Bn;
function Eo() {
  return Bn || (Bn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, X = e ? Symbol.for("react.scope") : 60119;
    function z(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === a || S === s || S === o || S === f || S === g || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === x || S.$$typeof === i || S.$$typeof === c || S.$$typeof === l || S.$$typeof === p || S.$$typeof === H || S.$$typeof === X || S.$$typeof === M);
    }
    function A(S) {
      if (typeof S == "object" && S !== null) {
        var te = S.$$typeof;
        switch (te) {
          case n:
            var L = S.type;
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
                  case x:
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
    var u = d, y = a, b = c, _ = i, T = n, F = l, Z = r, Q = v, k = x, D = t, $ = s, B = o, I = f, J = !1;
    function ee(S) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(S) || A(S) === d;
    }
    function se(S) {
      return A(S) === a;
    }
    function oe(S) {
      return A(S) === c;
    }
    function W(S) {
      return A(S) === i;
    }
    function j(S) {
      return typeof S == "object" && S !== null && S.$$typeof === n;
    }
    function U(S) {
      return A(S) === l;
    }
    function G(S) {
      return A(S) === r;
    }
    function w(S) {
      return A(S) === v;
    }
    function P(S) {
      return A(S) === x;
    }
    function m(S) {
      return A(S) === t;
    }
    function O(S) {
      return A(S) === s;
    }
    function R(S) {
      return A(S) === o;
    }
    function Y(S) {
      return A(S) === f;
    }
    ye.AsyncMode = u, ye.ConcurrentMode = y, ye.ContextConsumer = b, ye.ContextProvider = _, ye.Element = T, ye.ForwardRef = F, ye.Fragment = Z, ye.Lazy = Q, ye.Memo = k, ye.Portal = D, ye.Profiler = $, ye.StrictMode = B, ye.Suspense = I, ye.isAsyncMode = ee, ye.isConcurrentMode = se, ye.isContextConsumer = oe, ye.isContextProvider = W, ye.isElement = j, ye.isForwardRef = U, ye.isFragment = G, ye.isLazy = w, ye.isMemo = P, ye.isPortal = m, ye.isProfiler = O, ye.isStrictMode = R, ye.isSuspense = Y, ye.isValidElementType = z, ye.typeOf = A;
  }()), ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Do() : e.exports = Eo();
})($o);
var Mn = Jt, _o = {
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
}, To = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Po = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Nr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, kn = {};
kn[Mn.ForwardRef] = Po;
kn[Mn.Memo] = Nr;
function zn(e) {
  return Mn.isMemo(e) ? Nr : kn[e.$$typeof] || _o;
}
var Ao = Object.defineProperty, Io = Object.getOwnPropertyNames, jn = Object.getOwnPropertySymbols, Yo = Object.getOwnPropertyDescriptor, Oo = Object.getPrototypeOf, Zn = Object.prototype;
function Hr(e, n, t) {
  if (typeof n != "string") {
    if (Zn) {
      var r = Oo(n);
      r && r !== Zn && Hr(e, r, t);
    }
    var o = Io(n);
    jn && (o = o.concat(jn(n)));
    for (var s = zn(e), i = zn(n), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!To[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = Yo(n, d);
        try {
          Ao(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Lo = Hr;
function Oe() {
  return (Oe = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Vn = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, qt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !St.typeOf(e);
}, Yt = Object.freeze([]), Ve = Object.freeze({});
function dt(e) {
  return typeof e == "function";
}
function Qt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function $n(e) {
  return e && typeof e.styledComponentId == "string";
}
var ut = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Dn = typeof window < "u" && "HTMLElement" in window, Ro = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), No = {}, Ho = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Wo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Fe(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Wo.apply(void 0, [Ho[e]].concat(t)).trim());
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
}(), At = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), bt = 1, Dt = function(e) {
  if (At.has(e))
    return At.get(e);
  for (; Ot.has(bt); )
    bt++;
  var n = bt++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Fe(16, "" + n), At.set(e, n), Ot.set(n, e), n;
}, Bo = function(e) {
  return Ot.get(e);
}, zo = function(e, n) {
  n >= bt && (bt = n + 1), At.set(e, n), Ot.set(n, e);
}, jo = "style[" + ut + '][data-styled-version="5.3.8"]', Zo = new RegExp("^" + ut + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Vo = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, Go = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Zo);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (zo(a, d), Vo(e, a, c[3]), e.getTag().insertRules(d, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, Xo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Wr = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(ut))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ut, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = Xo();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, Uo = function() {
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
}(), Ko = function() {
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
}(), Jo = function() {
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
}(), Gn = Dn, qo = { isServer: !Dn, useCSSOMInjection: !Ro }, Lt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ve), r === void 0 && (r = {}), this.options = Oe({}, qo, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Dn && Gn && (Gn = !1, function(s) {
      for (var i = document.querySelectorAll(jo), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(ut) !== "active" && (Go(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Dt(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Oe({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new Jo(i) : s ? new Uo(i) : new Ko(i), new Fo(t)));
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
        var c = Bo(i);
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
}(), Qo = /(a)(d)/gi, Xn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function en(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Xn(n % 52) + t;
  return (Xn(n % 52) + t).replace(Qo, "$1-$2");
}
var Ke = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Fr = function(e) {
  return Ke(5381, e);
};
function Br(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (dt(t) && !$n(t))
      return !1;
  }
  return !0;
}
var es = Fr("5.3.8"), ts = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Br(n), this.componentId = t, this.baseHash = Ke(es, t), this.baseStyle = r, Lt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Qe(this.rules, n, t, r).join(""), c = en(Ke(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = r(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = Ke(this.baseHash, r.hash), f = "", g = 0; g < a; g++) {
        var x = this.rules[g];
        if (typeof x == "string")
          f += x, process.env.NODE_ENV !== "production" && (l = Ke(l, x + g));
        else if (x) {
          var v = Qe(x, n, t, r), M = Array.isArray(v) ? v.join("") : v;
          l = Ke(l, M + g), f += M;
        }
      }
      if (f) {
        var p = en(l >>> 0);
        if (!t.hasNameForId(o, p)) {
          var H = r(f, "." + p, void 0, o);
          t.insertRules(o, p, H);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), ns = /^\s*\/\/.*$/gm, rs = [":", "[", ".", "#"];
function os(e) {
  var n, t, r, o, s = e === void 0 ? Ve : e, i = s.options, c = i === void 0 ? Ve : i, d = s.plugins, a = d === void 0 ? Yt : d, l = new So(c), f = [], g = function(M) {
    function p(H) {
      if (H)
        try {
          M(H + "}");
        } catch {
        }
    }
    return function(H, X, z, A, u, y, b, _, T, F) {
      switch (H) {
        case 1:
          if (T === 0 && X.charCodeAt(0) === 64)
            return M(X + ";"), "";
          break;
        case 2:
          if (_ === 0)
            return X + "/*|*/";
          break;
        case 3:
          switch (_) {
            case 102:
            case 112:
              return M(z[0] + X), "";
            default:
              return X + (F === 0 ? "/*|*/" : "");
          }
        case -2:
          X.split("/*|*/}").forEach(p);
      }
    };
  }(function(M) {
    f.push(M);
  }), x = function(M, p, H) {
    return p === 0 && rs.indexOf(H[t.length]) !== -1 || H.match(o) ? M : "." + n;
  };
  function v(M, p, H, X) {
    X === void 0 && (X = "&");
    var z = M.replace(ns, ""), A = p && H ? H + " " + p + " { " + z + " }" : z;
    return n = X, t = p, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(H || !p ? "" : p, A);
  }
  return l.use([].concat(a, [function(M, p, H) {
    M === 2 && H.length && H[0].lastIndexOf(t) > 0 && (H[0] = H[0].replace(r, x));
  }, g, function(M) {
    if (M === -2) {
      var p = f;
      return f = [], p;
    }
  }])), v.hash = a.length ? a.reduce(function(M, p) {
    return p.name || Fe(15), Ke(M, p.name);
  }, 5381).toString() : "", v;
}
var zr = qe.createContext();
zr.Consumer;
var jr = qe.createContext(), ss = (jr.Consumer, new Lt()), tn = os();
function Zr() {
  return Ge(zr) || ss;
}
function Vr() {
  return Ge(jr) || tn;
}
var Gr = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = tn);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Fe(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = tn), this.name + n.hash;
  }, e;
}(), is = /([A-Z])/, as = /([A-Z])/g, cs = /^ms-/, ls = function(e) {
  return "-" + e.toLowerCase();
};
function Un(e) {
  return is.test(e) ? e.replace(as, ls).replace(cs, "-ms-") : e;
}
var Kn = function(e) {
  return e == null || e === !1 || e === "";
};
function Qe(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = Qe(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Kn(e))
    return "";
  if ($n(e))
    return "." + e.styledComponentId;
  if (dt(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var d = e(n);
    return process.env.NODE_ENV !== "production" && St.isElement(d) && console.warn(Qt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Qe(d, n, t, r);
  }
  var a;
  return e instanceof Gr ? t ? (e.inject(t, r), e.getName(r)) : e : qt(e) ? function l(f, g) {
    var x, v, M = [];
    for (var p in f)
      f.hasOwnProperty(p) && !Kn(f[p]) && (Array.isArray(f[p]) && f[p].isCss || dt(f[p]) ? M.push(Un(p) + ":", f[p], ";") : qt(f[p]) ? M.push.apply(M, l(f[p], p)) : M.push(Un(p) + ": " + (x = p, (v = f[p]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || x in Co ? String(v).trim() : v + "px") + ";"));
    return g ? [g + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var Jn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ht(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return dt(e) || qt(e) ? Jn(Qe(Vn(Yt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Jn(Qe(Vn(e, t)));
}
var qn = /invalid hook call/i, Et = /* @__PURE__ */ new Set(), Xr = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (qn.test(s))
          o = !1, Et.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          r.apply(void 0, [s].concat(c));
        }
      }, xe(), o && !Et.has(t) && (console.warn(t), Et.add(t));
    } catch (s) {
      qn.test(s.message) && Et.delete(t);
    } finally {
      console.error = r;
    }
  }
}, Ur = function(e, n, t) {
  return t === void 0 && (t = Ve), e.theme !== t.theme && e.theme || n || t.theme;
}, ds = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, us = /(^-|-$)/g;
function zt(e) {
  return e.replace(ds, "-").replace(us, "");
}
var En = function(e) {
  return en(Fr(e) >>> 0);
};
function _t(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var nn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, fs = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function hs(e, n, t) {
  var r = e[t];
  nn(n) && nn(r) ? Kr(r, n) : e[t] = n;
}
function Kr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (nn(i))
      for (var c in i)
        fs(c) && hs(e, i[c], c);
  }
  return e;
}
var ft = qe.createContext();
ft.Consumer;
function ps(e) {
  var n = Ge(ft), t = Ee(function() {
    return function(r, o) {
      if (!r)
        return Fe(14);
      if (dt(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Fe(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Fe(8) : o ? Oe({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? qe.createElement(ft.Provider, { value: t }, e.children) : null;
}
var jt = {};
function Jr(e, n, t) {
  var r = $n(e), o = !_t(e), s = n.attrs, i = s === void 0 ? Yt : s, c = n.componentId, d = c === void 0 ? function(X, z) {
    var A = typeof X != "string" ? "sc" : zt(X);
    jt[A] = (jt[A] || 0) + 1;
    var u = A + "-" + En("5.3.8" + A + jt[A]);
    return z ? z + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(X) {
    return _t(X) ? "styled." + X : "Styled(" + Qt(X) + ")";
  }(e) : a, f = n.displayName && n.componentId ? zt(n.displayName) + "-" + n.componentId : n.componentId || d, g = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, x = n.shouldForwardProp;
  r && e.shouldForwardProp && (x = n.shouldForwardProp ? function(X, z, A) {
    return e.shouldForwardProp(X, z, A) && n.shouldForwardProp(X, z, A);
  } : e.shouldForwardProp);
  var v, M = new ts(t, f, r ? e.componentStyle : void 0), p = M.isStatic && i.length === 0, H = function(X, z) {
    return function(A, u, y, b) {
      var _ = A.attrs, T = A.componentStyle, F = A.defaultProps, Z = A.foldedComponentIds, Q = A.shouldForwardProp, k = A.styledComponentId, D = A.target;
      process.env.NODE_ENV !== "production" && Rn(k);
      var $ = function(G, w, P) {
        G === void 0 && (G = Ve);
        var m = Oe({}, w, { theme: G }), O = {};
        return P.forEach(function(R) {
          var Y, S, te, L = R;
          for (Y in dt(L) && (L = L(m)), L)
            m[Y] = O[Y] = Y === "className" ? (S = O[Y], te = L[Y], S && te ? S + " " + te : S || te) : L[Y];
        }), [m, O];
      }(Ur(u, Ge(ft), F) || Ve, u, _), B = $[0], I = $[1], J = function(G, w, P, m) {
        var O = Zr(), R = Vr(), Y = w ? G.generateAndInjectStyles(Ve, O, R) : G.generateAndInjectStyles(P, O, R);
        return process.env.NODE_ENV !== "production" && Rn(Y), process.env.NODE_ENV !== "production" && !w && m && m(Y), Y;
      }(T, b, B, process.env.NODE_ENV !== "production" ? A.warnTooManyClasses : void 0), ee = y, se = I.$as || u.$as || I.as || u.as || D, oe = _t(se), W = I !== u ? Oe({}, u, {}, I) : u, j = {};
      for (var U in W)
        U[0] !== "$" && U !== "as" && (U === "forwardedAs" ? j.as = W[U] : (Q ? Q(U, Wn, se) : !oe || Wn(U)) && (j[U] = W[U]));
      return u.style && I.style !== u.style && (j.style = Oe({}, u.style, {}, I.style)), j.className = Array.prototype.concat(Z, k, J !== k ? J : null, u.className, I.className).filter(Boolean).join(" "), j.ref = ee, yo(se, j);
    }(v, X, z, p);
  };
  return H.displayName = l, (v = qe.forwardRef(H)).attrs = g, v.componentStyle = M, v.displayName = l, v.shouldForwardProp = x, v.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Yt, v.styledComponentId = f, v.target = r ? e.target : e, v.withComponent = function(X) {
    var z = n.componentId, A = function(y, b) {
      if (y == null)
        return {};
      var _, T, F = {}, Z = Object.keys(y);
      for (T = 0; T < Z.length; T++)
        _ = Z[T], b.indexOf(_) >= 0 || (F[_] = y[_]);
      return F;
    }(n, ["componentId"]), u = z && z + "-" + (_t(X) ? X : zt(Qt(X)));
    return Jr(X, Oe({}, A, { attrs: g, componentId: u }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(X) {
    this._foldedDefaultProps = r ? Kr({}, e.defaultProps, X) : X;
  } }), process.env.NODE_ENV !== "production" && (Xr(l, f), v.warnTooManyClasses = function(X, z) {
    var A = {}, u = !1;
    return function(y) {
      if (!u && (A[y] = !0, Object.keys(A).length >= 200)) {
        var b = z ? ' with the id of "' + z + '"' : "";
        console.warn("Over 200 classes were generated for component " + X + b + `.
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
  }, o && Lo(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var rn = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Ve), !St.isValidElementType(r))
      return Fe(1, String(r));
    var s = function() {
      return t(r, o, Ht.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Oe({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Oe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Jr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  rn[e] = rn(e);
});
var ms = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Br(t), Lt.registerId(this.componentId + 1);
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
function gs(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ht.apply(void 0, [e].concat(t)), s = "sc-global-" + En(JSON.stringify(o)), i = new ms(o, s);
  function c(a) {
    var l = Zr(), f = Vr(), g = Ge(ft), x = xe(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && qe.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(x, a, l, g, f), Sn(function() {
      if (!l.server)
        return d(x, a, l, g, f), function() {
          return i.removeStyles(x, l);
        };
    }, [x, a, l, g, f]), null;
  }
  function d(a, l, f, g, x) {
    if (i.isStatic)
      i.renderStyles(a, No, f, x);
    else {
      var v = Oe({}, l, { theme: Ur(l, g, c.defaultProps) });
      i.renderStyles(a, v, f, x);
    }
  }
  return process.env.NODE_ENV !== "production" && Xr(s), qe.memo(c);
}
function Wt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ht.apply(void 0, [e].concat(t)).join(""), s = En(o);
  return new Gr(s, o);
}
var Ft = function() {
  return Ge(ft);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const C = rn, xt = "reactSchedulerOutsideWrapper", ys = gs`

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
`, vs = {
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
}, xs = {
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
C.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Se = 50, ze = 24, vt = 16, Je = 40, ht = Je + vt + ze, pt = 84, he = 56, Ye = 196, Ie = 12, Te = 50, mt = 24, Ct = 16, on = 40, bs = mt + Ct + on, Qn = 24, er = 52, Le = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter",
    hoursInDay: "400 9px Inter"
  }
}, lt = 3, ws = 1.6, Ss = 4.5, sn = 12, Rt = 24, Cs = "reactSchedulerCanvasHeaderWrapper", qr = "reactSchedulerCanvasWrapper", Be = xt, Ms = 4, _n = 48, Ze = 5, ks = 40, tr = 8, Tn = ze / 2 + 2, Qr = vt / 2 + ze + 1, nr = 2, ke = 60, Ae = 21;
var et = {}, $s = {
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
  })(_e, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", g = "quarter", x = "year", v = "date", M = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, H = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, X = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
      var D = ["th", "st", "nd", "rd"], $ = k % 100;
      return "[" + k + (D[($ - 20) % 10] || D[$] || D[0]) + "]";
    } }, z = function(k, D, $) {
      var B = String(k);
      return !B || B.length >= D ? k : "" + Array(D + 1 - B.length).join($) + k;
    }, A = { s: z, z: function(k) {
      var D = -k.utcOffset(), $ = Math.abs(D), B = Math.floor($ / 60), I = $ % 60;
      return (D <= 0 ? "+" : "-") + z(B, 2, "0") + ":" + z(I, 2, "0");
    }, m: function k(D, $) {
      if (D.date() < $.date())
        return -k($, D);
      var B = 12 * ($.year() - D.year()) + ($.month() - D.month()), I = D.clone().add(B, f), J = $ - I < 0, ee = D.clone().add(B + (J ? -1 : 1), f);
      return +(-(B + ($ - I) / (J ? I - ee : ee - I)) || 0);
    }, a: function(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
    }, p: function(k) {
      return { M: f, y: x, w: l, d: a, D: v, h: d, m: c, s: i, ms: s, Q: g }[k] || String(k || "").toLowerCase().replace(/s$/, "");
    }, u: function(k) {
      return k === void 0;
    } }, u = "en", y = {};
    y[u] = X;
    var b = function(k) {
      return k instanceof Z;
    }, _ = function k(D, $, B) {
      var I;
      if (!D)
        return u;
      if (typeof D == "string") {
        var J = D.toLowerCase();
        y[J] && (I = J), $ && (y[J] = $, I = J);
        var ee = D.split("-");
        if (!I && ee.length > 1)
          return k(ee[0]);
      } else {
        var se = D.name;
        y[se] = D, I = se;
      }
      return !B && I && (u = I), I || !B && u;
    }, T = function(k, D) {
      if (b(k))
        return k.clone();
      var $ = typeof D == "object" ? D : {};
      return $.date = k, $.args = arguments, new Z($);
    }, F = A;
    F.l = _, F.i = b, F.w = function(k, D) {
      return T(k, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var Z = function() {
      function k($) {
        this.$L = _($.locale, null, !0), this.parse($);
      }
      var D = k.prototype;
      return D.parse = function($) {
        this.$d = function(B) {
          var I = B.date, J = B.utc;
          if (I === null)
            return new Date(NaN);
          if (F.u(I))
            return new Date();
          if (I instanceof Date)
            return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var ee = I.match(p);
            if (ee) {
              var se = ee[2] - 1 || 0, oe = (ee[7] || "0").substring(0, 3);
              return J ? new Date(Date.UTC(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe)) : new Date(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe);
            }
          }
          return new Date(I);
        }($), this.$x = $.x || {}, this.init();
      }, D.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, D.$utils = function() {
        return F;
      }, D.isValid = function() {
        return this.$d.toString() !== M;
      }, D.isSame = function($, B) {
        var I = T($);
        return this.startOf(B) <= I && I <= this.endOf(B);
      }, D.isAfter = function($, B) {
        return T($) < this.startOf(B);
      }, D.isBefore = function($, B) {
        return this.endOf(B) < T($);
      }, D.$g = function($, B, I) {
        return F.u($) ? this[B] : this.set(I, $);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function($, B) {
        var I = this, J = !!F.u(B) || B, ee = F.p($), se = function(m, O) {
          var R = F.w(I.$u ? Date.UTC(I.$y, O, m) : new Date(I.$y, O, m), I);
          return J ? R : R.endOf(a);
        }, oe = function(m, O) {
          return F.w(I.toDate()[m].apply(I.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(O)), I);
        }, W = this.$W, j = this.$M, U = this.$D, G = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case x:
            return J ? se(1, 0) : se(31, 11);
          case f:
            return J ? se(1, j) : se(0, j + 1);
          case l:
            var w = this.$locale().weekStart || 0, P = (W < w ? W + 7 : W) - w;
            return se(J ? U - P : U + (6 - P), j);
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
      }, D.endOf = function($) {
        return this.startOf($, !1);
      }, D.$set = function($, B) {
        var I, J = F.p($), ee = "set" + (this.$u ? "UTC" : ""), se = (I = {}, I[a] = ee + "Date", I[v] = ee + "Date", I[f] = ee + "Month", I[x] = ee + "FullYear", I[d] = ee + "Hours", I[c] = ee + "Minutes", I[i] = ee + "Seconds", I[s] = ee + "Milliseconds", I)[J], oe = J === a ? this.$D + (B - this.$W) : B;
        if (J === f || J === x) {
          var W = this.clone().set(v, 1);
          W.$d[se](oe), W.init(), this.$d = W.set(v, Math.min(this.$D, W.daysInMonth())).$d;
        } else
          se && this.$d[se](oe);
        return this.init(), this;
      }, D.set = function($, B) {
        return this.clone().$set($, B);
      }, D.get = function($) {
        return this[F.p($)]();
      }, D.add = function($, B) {
        var I, J = this;
        $ = Number($);
        var ee = F.p(B), se = function(j) {
          var U = T(J);
          return F.w(U.date(U.date() + Math.round(j * $)), J);
        };
        if (ee === f)
          return this.set(f, this.$M + $);
        if (ee === x)
          return this.set(x, this.$y + $);
        if (ee === a)
          return se(1);
        if (ee === l)
          return se(7);
        var oe = (I = {}, I[c] = r, I[d] = o, I[i] = t, I)[ee] || 1, W = this.$d.getTime() + $ * oe;
        return F.w(W, this);
      }, D.subtract = function($, B) {
        return this.add(-1 * $, B);
      }, D.format = function($) {
        var B = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || M;
        var J = $ || "YYYY-MM-DDTHH:mm:ssZ", ee = F.z(this), se = this.$H, oe = this.$m, W = this.$M, j = I.weekdays, U = I.months, G = function(O, R, Y, S) {
          return O && (O[R] || O(B, J)) || Y[R].slice(0, S);
        }, w = function(O) {
          return F.s(se % 12 || 12, O, "0");
        }, P = I.meridiem || function(O, R, Y) {
          var S = O < 12 ? "AM" : "PM";
          return Y ? S.toLowerCase() : S;
        }, m = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: W + 1, MM: F.s(W + 1, 2, "0"), MMM: G(I.monthsShort, W, U, 3), MMMM: G(U, W), D: this.$D, DD: F.s(this.$D, 2, "0"), d: String(this.$W), dd: G(I.weekdaysMin, this.$W, j, 2), ddd: G(I.weekdaysShort, this.$W, j, 3), dddd: j[this.$W], H: String(se), HH: F.s(se, 2, "0"), h: w(1), hh: w(2), a: P(se, oe, !0), A: P(se, oe, !1), m: String(oe), mm: F.s(oe, 2, "0"), s: String(this.$s), ss: F.s(this.$s, 2, "0"), SSS: F.s(this.$ms, 3, "0"), Z: ee };
        return J.replace(H, function(O, R) {
          return R || m[O] || ee.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function($, B, I) {
        var J, ee = F.p(B), se = T($), oe = (se.utcOffset() - this.utcOffset()) * r, W = this - se, j = F.m(this, se);
        return j = (J = {}, J[x] = j / 12, J[f] = j, J[g] = j / 3, J[l] = (W - oe) / 6048e5, J[a] = (W - oe) / 864e5, J[d] = W / o, J[c] = W / r, J[i] = W / t, J)[ee] || W, I ? j : F.a(j);
      }, D.daysInMonth = function() {
        return this.endOf(f).$D;
      }, D.$locale = function() {
        return y[this.$L];
      }, D.locale = function($, B) {
        if (!$)
          return this.$L;
        var I = this.clone(), J = _($, B, !0);
        return J && (I.$L = J), I;
      }, D.clone = function() {
        return F.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, k;
    }(), Q = Z.prototype;
    return T.prototype = Q, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", x], ["$D", v]].forEach(function(k) {
      Q[k[1]] = function(D) {
        return this.$g(D, k[0], k[1]);
      };
    }), T.extend = function(k, D) {
      return k.$i || (k(D, Z, T), k.$i = !0), T;
    }, T.locale = _, T.isDayjs = b, T.unix = function(k) {
      return T(1e3 * k);
    }, T.en = y[u], T.Ls = y, T.p = {}, T;
  });
})($s);
const E = et, rr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Pn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, eo = (e, n) => E(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), to = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Pn(e),
  isCurrentDay: e.isSame(E(), "day"),
  year: parseInt(e.format("YYYY"))
});
let Tt = null;
const Ds = (e) => {
  if (Tt)
    return Tt;
  const n = document.createElement("canvas");
  n.width = 12, n.height = 12;
  const t = n.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Tt = e.createPattern(n, "repeat"), Tt) : null;
}, An = (e, n, t, r, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, he), c && !s) {
    const d = Ds(e);
    d && (e.fillStyle = d, e.fillRect(n, t, r, he));
  }
  e.strokeRect(n + 0.5, t + 0.5, r, he);
}, In = (e, n) => {
  let t = 0;
  for (const r of n)
    r <= e && t++;
  return t * Ae;
}, Es = (e, n, t, r, o, s = []) => {
  for (let i = 0; i < n; i++) {
    const c = In(i, s);
    for (let d = 0; d <= t; d++) {
      const a = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(E(), "day"), f = a.isBefore(E(), "day");
      An(
        e,
        d * Se,
        i * he + c,
        Se,
        Pn(a),
        l,
        o,
        f
      );
    }
  }
}, _s = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, Ts = (e, n, t, r, o, s = []) => {
  let i = 0, c = -(r.dayOfMonth - 1) * Ie;
  const d = n * he + s.length * Ae;
  for (let a = 0; a <= t; a++) {
    const f = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(E(), "week");
    for (let g = 0; g < n; g++) {
      const x = In(g, s);
      An(e, i, g * he + x, pt, !0, f, o);
    }
    i += pt;
  }
  for (let a = 0; a < t; a++) {
    const l = eo(r, a) * Ie;
    _s(e, c, d, o), c += l;
  }
}, Ps = (e, n, t, r, o, s = []) => {
  const i = E(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let c = 0; c < n; c++) {
    const d = In(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = E() : a > Math.floor(t / 2) ? l = E().add(a - Math.floor(t / 2), "hours") : l = E().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(E(), "day") && l.isSame(E(), "hour");
      An(
        e,
        a * Te + Te / 2 - 0.5,
        c * he + d,
        Te,
        Pn(l),
        f,
        o
      );
    }
  }
}, As = (e, n, t, r) => {
  const o = t * he + n * Ae, s = e.canvas.width, i = o + Ae / 2;
  e.fillStyle = r.mode === "dark" ? r.colors.primary + "80" : r.colors.primary, e.fillRect(0, o, s, Ae), e.strokeStyle = r.colors.border, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, i + 0.5), e.lineTo(s, i + 0.5), e.stroke();
}, Is = (e, n, t, r, o, s, i = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(qr)) {
    switch (n) {
      case 0:
        Ts(e, t, r, o, s, i);
        break;
      case 1:
        Es(e, t, r, o, s, i);
        break;
      case 2:
        Ps(e, t, r, o, s, i);
        break;
    }
    for (let d = 0; d < i.length; d++)
      As(e, d, i[d], s);
  }
};
var an = {}, Ys = {
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
        var g = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), x = this.diff(g, t, !0);
        return x < 0 ? i(this).startOf("week").week() : Math.ceil(x);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(Ys);
const Os = an;
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
  })(_e, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
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
        var l, f, g, x, v = i(this), M = (l = this.isoWeekYear(), f = this.$u, g = (f ? s.utc : s)().year(l).startOf("year"), x = 4 - g.isoWeekday(), g.isoWeekday() > 4 && (x += 7), g.add(x, t));
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
  })(_e, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), f = (d = d || "()")[0] === "(", g = d[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (g ? this.isBefore(l, c) : !this.isAfter(l, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (g ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(Ws);
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
  })(_e, function() {
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, x = function(u) {
      return u instanceof A;
    }, v = function(u, y, b) {
      return new A(u, b, y.$l);
    }, M = function(u) {
      return r.p(u) + "s";
    }, p = function(u) {
      return u < 0;
    }, H = function(u) {
      return p(u) ? Math.ceil(u) : Math.floor(u);
    }, X = function(u) {
      return Math.abs(u);
    }, z = function(u, y) {
      return u ? p(u) ? { negative: !0, format: "" + X(u) + y } : { negative: !1, format: "" + u + y } : { negative: !1, format: "" };
    }, A = function() {
      function u(b, _, T) {
        var F = this;
        if (this.$d = {}, this.$l = T, b === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), _)
          return v(b * g[M(_)], this);
        if (typeof b == "number")
          return this.$ms = b, this.parseFromMilliseconds(), this;
        if (typeof b == "object")
          return Object.keys(b).forEach(function(k) {
            F.$d[M(k)] = b[k];
          }), this.calMilliseconds(), this;
        if (typeof b == "string") {
          var Z = b.match(f);
          if (Z) {
            var Q = Z.slice(2).map(function(k) {
              return k != null ? Number(k) : 0;
            });
            return this.$d.years = Q[0], this.$d.months = Q[1], this.$d.weeks = Q[2], this.$d.days = Q[3], this.$d.hours = Q[4], this.$d.minutes = Q[5], this.$d.seconds = Q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var y = u.prototype;
      return y.calMilliseconds = function() {
        var b = this;
        this.$ms = Object.keys(this.$d).reduce(function(_, T) {
          return _ + (b.$d[T] || 0) * g[T];
        }, 0);
      }, y.parseFromMilliseconds = function() {
        var b = this.$ms;
        this.$d.years = H(b / a), b %= a, this.$d.months = H(b / l), b %= l, this.$d.days = H(b / c), b %= c, this.$d.hours = H(b / i), b %= i, this.$d.minutes = H(b / s), b %= s, this.$d.seconds = H(b / o), b %= o, this.$d.milliseconds = b;
      }, y.toISOString = function() {
        var b = z(this.$d.years, "Y"), _ = z(this.$d.months, "M"), T = +this.$d.days || 0;
        this.$d.weeks && (T += 7 * this.$d.weeks);
        var F = z(T, "D"), Z = z(this.$d.hours, "H"), Q = z(this.$d.minutes, "M"), k = this.$d.seconds || 0;
        this.$d.milliseconds && (k += this.$d.milliseconds / 1e3);
        var D = z(k, "S"), $ = b.negative || _.negative || F.negative || Z.negative || Q.negative || D.negative, B = Z.format || Q.format || D.format ? "T" : "", I = ($ ? "-" : "") + "P" + b.format + _.format + F.format + B + Z.format + Q.format + D.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, y.toJSON = function() {
        return this.toISOString();
      }, y.format = function(b) {
        var _ = b || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return _.replace(d, function(F, Z) {
          return Z || String(T[F]);
        });
      }, y.as = function(b) {
        return this.$ms / g[M(b)];
      }, y.get = function(b) {
        var _ = this.$ms, T = M(b);
        return T === "milliseconds" ? _ %= 1e3 : _ = T === "weeks" ? H(_ / g[T]) : this.$d[T], _ === 0 ? 0 : _;
      }, y.add = function(b, _, T) {
        var F;
        return F = _ ? b * g[M(_)] : x(b) ? b.$ms : v(b, this).$ms, v(this.$ms + F * (T ? -1 : 1), this);
      }, y.subtract = function(b, _) {
        return this.add(b, _, !0);
      }, y.locale = function(b) {
        var _ = this.clone();
        return _.$l = b, _;
      }, y.clone = function() {
        return v(this.$ms, this);
      }, y.humanize = function(b) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!b);
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
      }, u;
    }();
    return function(u, y, b) {
      t = b, r = b().$utils(), b.duration = function(F, Z) {
        var Q = b.locale();
        return v(F, { $l: Q }, Z);
      }, b.isDuration = x;
      var _ = y.prototype.add, T = y.prototype.subtract;
      y.prototype.add = function(F, Z) {
        return x(F) && (F = F.asMilliseconds()), _.bind(this)(F, Z);
      }, y.prototype.subtract = function(F, Z) {
        return x(F) && (F = F.asMilliseconds()), T.bind(this)(F, Z);
      };
    };
  });
})(Bs);
const zs = un;
var js = "Expected a function", or = 0 / 0, Zs = "[object Symbol]", Vs = /^\s+|\s+$/g, Gs = /^[-+]0x[0-9a-f]+$/i, Xs = /^0b[01]+$/i, Us = /^0o[0-7]+$/i, Ks = parseInt, Js = typeof _e == "object" && _e && _e.Object === Object && _e, qs = typeof self == "object" && self && self.Object === Object && self, Qs = Js || qs || Function("return this")(), ei = Object.prototype, ti = ei.toString, ni = Math.max, ri = Math.min, Zt = function() {
  return Qs.Date.now();
};
function oi(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(js);
  n = sr(n) || 0, fn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? ni(sr(t.maxWait) || 0, n) : s, g = "trailing" in t ? !!t.trailing : g);
  function x(y) {
    var b = r, _ = o;
    return r = o = void 0, a = y, i = e.apply(_, b), i;
  }
  function v(y) {
    return a = y, c = setTimeout(H, n), l ? x(y) : i;
  }
  function M(y) {
    var b = y - d, _ = y - a, T = n - b;
    return f ? ri(T, s - _) : T;
  }
  function p(y) {
    var b = y - d, _ = y - a;
    return d === void 0 || b >= n || b < 0 || f && _ >= s;
  }
  function H() {
    var y = Zt();
    if (p(y))
      return X(y);
    c = setTimeout(H, M(y));
  }
  function X(y) {
    return c = void 0, g && r ? x(y) : (r = o = void 0, i);
  }
  function z() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function A() {
    return c === void 0 ? i : X(Zt());
  }
  function u() {
    var y = Zt(), b = p(y);
    if (r = arguments, o = this, d = y, b) {
      if (c === void 0)
        return v(d);
      if (f)
        return c = setTimeout(H, n), x(d);
    }
    return c === void 0 && (c = setTimeout(H, n)), i;
  }
  return u.cancel = z, u.flush = A, u;
}
function fn(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function si(e) {
  return !!e && typeof e == "object";
}
function ii(e) {
  return typeof e == "symbol" || si(e) && ti.call(e) == Zs;
}
function sr(e) {
  if (typeof e == "number")
    return e;
  if (ii(e))
    return or;
  if (fn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = fn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Vs, "");
  var t = Xs.test(e);
  return t || Us.test(e) ? Ks(e.slice(2), t ? 2 : 8) : Gs.test(e) ? or : +e;
}
var at = oi;
const It = [0, 1, 2];
var Mt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Mt || {});
const no = (e) => It.includes(e), ct = (e) => {
  var r;
  const t = (((r = document.getElementById(Be)) == null ? void 0 : r.clientWidth) || 0) - Ye;
  switch (e) {
    case 1:
      return Math.ceil(t / Se) * lt;
    case 2:
      return Math.ceil(t / Te) * lt;
    default:
      return Math.ceil(t / pt) * lt;
  }
}, ai = (e) => ct(e) / lt, Yn = (e, n) => {
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
}, ci = (e, n) => {
  const t = Yn(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, On = () => {
  var t;
  return ((((t = document.getElementById(Be)) == null ? void 0 : t.clientWidth) || 0) - Ye) * lt;
}, ro = Lr({
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
E.extend(Os);
E.extend(Rs);
E.extend(Hs);
E.extend(Fs);
E.extend(zs);
const li = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = E(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = ue(d), [g, x] = ue(E()), [v, M] = ue(!1), [p, H] = ue(ct(l)), X = It[l] !== It[It.length - 1], z = l !== 0, A = Ee(() => ci(g, l), [g, l]), u = Yn(g, l).startDate, y = E(u).dayOfYear(), b = to(u), _ = xe(null), [T, F] = ue([{ x: 0, y: 0 }]), Z = ce(
    (G, w = "auto") => {
      var m, O, R, Y;
      const P = On();
      switch (G) {
        case "back":
          return (m = _.current) == null ? void 0 : m.scrollTo({
            behavior: w,
            left: P / 3
          });
        case "forward":
          return (O = _.current) == null ? void 0 : O.scrollTo({
            behavior: w,
            left: P / 3
          });
        case "middle": {
          const S = P / lt / 4;
          return (R = _.current) == null ? void 0 : R.scrollTo({
            behavior: w,
            left: P / 2 - S
          });
        }
        default:
          return (Y = _.current) == null ? void 0 : Y.scrollTo({
            behavior: w,
            left: P / 2
          });
      }
    },
    []
  ), Q = (G) => {
    F(G);
  }, k = ce(
    (G) => {
      const w = ai(l);
      let P;
      switch (l) {
        case 0:
          P = w * 7;
          break;
        case 1:
          P = w;
          break;
        case 2:
          P = Math.ceil(w / Rt);
          break;
      }
      at(() => {
        switch (G) {
          case "back":
            x((O) => O.subtract(P, "days"));
            break;
          case "forward":
            x((O) => O.add(P, "days"));
            break;
          case "middle":
            x(E());
            break;
        }
        s == null || s(A);
      }, 300)();
    },
    [s, A, l]
  );
  ve(() => {
    _.current = document.getElementById(Be), H(ct(l));
  }, [l]), ve(() => {
    const G = () => H(ct(l));
    return window.addEventListener("resize", G), () => window.removeEventListener("resize", G);
  }, [l]), ve(() => {
    s == null || s(A);
  }, [s, A]), ve(() => {
    M(!1);
  }, [o]), ve(() => {
    v || (Z("middle"), M(!0), x(o));
  }, [o, v, Z]);
  const D = () => {
    t || (x(
      (G) => l === 2 ? G.add(Qn, "hours") : G.add(nr, "weeks")
    ), s == null || s(A));
  }, $ = ce(() => {
    t || (k("forward"), at(() => {
      Z("forward");
    }, 500)());
  }, [t, k, Z]), B = () => {
    t || (x(
      (G) => l === 2 ? G.subtract(Qn, "hours") : G.subtract(nr, "weeks")
    ), s == null || s(A));
  }, I = ce(() => {
    !v || t || (k("back"), at(() => {
      Z("back");
    }, 500)());
  }, [v, t, k, Z]), J = ce(() => {
    t || (k("middle"), at(() => {
      Z("middle", "smooth");
    }, 300)());
  }, [t, k, Z]), ee = ce(
    (G) => {
      if (t)
        return;
      const w = E(G).startOf("day");
      w.isValid() && (x(w), s == null || s(A), setTimeout(() => {
        Z("middle", "smooth");
      }, 300));
    },
    [t, Z, s, A]
  ), se = () => W(l + 1), oe = () => W(l - 1), W = (G) => {
    no(G) && (f(G), H(ct(G)), s == null || s(A));
  }, j = () => i == null ? void 0 : i(), { Provider: U } = ro;
  return /* @__PURE__ */ h(
    U,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: D,
        handleScrollNext: $,
        handleGoPrev: B,
        handleScrollPrev: I,
        handleGoToday: J,
        goToDate: ee,
        zoomIn: se,
        zoomOut: oe,
        setZoom: W,
        zoom: l,
        isNextZoom: X,
        isPrevZoom: z,
        date: g,
        isLoading: t,
        cols: p,
        startDate: b,
        dayOfYear: y,
        toggleDisplayActiveUnits: j,
        tilesCoords: T,
        updateTilesCoords: Q,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: n
    }
  );
}, Xe = () => Ge(ro), oo = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, so = (e, n) => {
  if (n.length === 0)
    return e;
  let t = e, r = 0;
  for (const o of n) {
    const s = o * he + r * Ae;
    if (e >= s + Ae)
      r++;
    else if (e >= s)
      return o * he + r * Ae - r * Ae;
  }
  return t - r * Ae;
}, di = 5, ir = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > di;
}, wt = (e, n, t) => {
  const r = t.getBoundingClientRect();
  return {
    x: e - r.left + t.scrollLeft,
    y: n - r.top + t.scrollTop
  };
}, ui = ({
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
    isValidDrop: x
  } = i, [v, M] = ue("idle"), [p, H] = ue(null), [X, z] = ue({ x: 0, y: 0 }), [A, u] = ue({ width: 0, height: 48 }), [y, b] = ue(null), [_, T] = ue(!0), F = xe({ x: 0, y: 0 }), Z = xe({ x: 0, y: 0 }), Q = xe({ x: 0, y: 0 }), k = xe(null), D = xe(null), $ = xe(0), B = xe(null), I = ce(
    (P) => !l || P.draggable === !1 ? !1 : f ? f(P) : !0,
    [l, f]
  ), J = ce(
    (P, m) => {
      const O = so(m, d), R = Math.floor(O / he);
      let Y;
      switch (t) {
        case 0:
          Y = Ie * 7;
          break;
        case 1:
          Y = Se;
          break;
        case 2:
          Y = Te;
          break;
        default:
          Y = Se;
      }
      const S = Math.floor(P / Y);
      let te;
      const L = E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          te = L.add(S * 7, "days").toDate();
          break;
        case 1:
          te = L.add(S, "days").toDate();
          break;
        case 2:
          te = L.add(S, "hours").toDate();
          break;
        default:
          te = L.toDate();
      }
      return { snappedDate: te, snappedResourceIndex: R };
    },
    [t, r, d]
  ), ee = ce(
    (P, m, O, R) => {
      const Y = [], S = m.getTime(), te = O.getTime(), L = a.find((ne) => ne.id === R);
      if (!L)
        return Y;
      const K = [];
      for (const ne of L.data)
        Array.isArray(ne) ? K.push(...ne) : K.push(ne);
      for (const ne of K) {
        if (ne.segmentId === P.segmentId)
          continue;
        const N = ne.startDate.getTime(), ae = ne.endDate.getTime();
        if (S >= N && S < ae || te > N && te <= ae || S <= N && te >= ae) {
          const fe = new Date(Math.max(S, N)), be = new Date(Math.min(te, ae)), $e = be.getTime() - fe.getTime();
          Y.push({
            event: ne,
            conflictStart: fe,
            conflictEnd: be,
            overlapDuration: $e
          });
        }
      }
      return Y;
    },
    [a]
  ), se = ce(
    (P, m, O, R) => {
      const Y = [], S = m.getTime(), te = O.getTime(), L = E(m).format("YYYY-MM-DD"), K = a.find((N) => N.id === R);
      if (!K)
        return Y;
      const ne = [];
      for (const N of K.data)
        Array.isArray(N) ? ne.push(...N) : ne.push(N);
      for (const N of ne) {
        if (N.segmentId === P.segmentId)
          continue;
        const ae = N.startDate.getTime(), de = N.endDate.getTime(), fe = E(N.startDate).format("YYYY-MM-DD"), be = E(N.endDate).format("YYYY-MM-DD"), $e = E(O).format("YYYY-MM-DD");
        if (!(fe === L || be === L || fe === $e || be === $e || E(N.startDate).isBefore(m, "day") && E(N.endDate).isAfter(O, "day")) || S >= ae && S < de || te > ae && te <= de || S <= ae && te >= de)
          continue;
        let ie, le;
        de <= S ? (ie = S - de, le = "before") : (ie = ae - te, le = "after"), Y.push({
          event: N,
          timeGap: ie,
          position: le
        });
      }
      return Y.sort((N, ae) => N.timeGap - ae.timeGap);
    },
    [a]
  ), oe = ce(
    (P, m, O) => {
      const R = J(m, O);
      let Y, S;
      if (g)
        Y = P.startDate, S = P.endDate;
      else {
        const de = E(P.endDate).diff(P.startDate);
        Y = R.snappedDate, S = E(Y).add(de, "milliseconds").toDate();
      }
      let te = 0, L = "", K;
      for (const de of e) {
        const fe = Math.max(de.data.length, 1);
        if (R.snappedResourceIndex < te + fe) {
          L = de.id, K = de.capacity;
          break;
        }
        te += fe;
      }
      if (!L)
        return null;
      let ne = !0;
      K !== void 0 && P.totalPassengers !== void 0 && (ne = P.totalPassengers <= K);
      const N = ee(P, Y, S, L), ae = N.length === 0 ? se(P, Y, S, L) : [];
      return {
        startDate: Y,
        endDate: S,
        resourceId: L,
        resourceIndex: R.snappedResourceIndex,
        resourceCapacity: K,
        hasCapacity: ne,
        conflicts: N,
        hasConflict: N.length > 0,
        nearbyEvents: ae
      };
    },
    [J, e, g, ee, se]
  ), W = ce(
    (P, m) => {
      if (!s)
        return;
      const O = Date.now();
      if (O - $.current < 100)
        return;
      $.current = O;
      const R = {
        event: P,
        currentStartDate: m.startDate,
        currentEndDate: m.endDate,
        currentResourceId: m.resourceId,
        conflicts: m.conflicts
      };
      s(R);
    },
    [s]
  ), j = ce(
    (P, m) => {
      if (!I(P) || !c.current)
        return;
      m.preventDefault(), m.stopPropagation();
      const O = m.target.closest('[style*="left"]');
      let R = 0, Y = 0;
      O && O.style.left && O.style.top && (R = parseInt(O.style.left), Y = parseInt(O.style.top));
      const S = wt(
        m.clientX,
        m.clientY,
        c.current
      );
      F.current = { x: R, y: Y }, Z.current = { x: m.clientX, y: m.clientY }, Q.current = {
        x: S.x - R,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, B.current = {
        startDate: P.startDate,
        endDate: P.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const K of e) {
        for (const ne of K.data)
          if (ne.some((N) => N.segmentId === P.segmentId)) {
            B.current.resourceId = K.id;
            break;
          }
        if (B.current.resourceId)
          break;
      }
      H(P), M("potential"), z({ x: R, y: Y });
      let te = 100, L = 48;
      if (O) {
        const K = O.getBoundingClientRect();
        te = K.width, L = K.height;
      }
      u({ width: te, height: L });
    },
    [I, c, e, t]
  ), U = ce(
    (P) => {
      if (!c.current)
        return;
      let m = c.current;
      for (; m && m !== document.body; ) {
        const N = window.getComputedStyle(m);
        if (m.scrollHeight > m.clientHeight && (N.overflowY === "auto" || N.overflowY === "scroll" || N.overflow === "auto" || N.overflow === "scroll"))
          break;
        m = m.parentElement;
      }
      (!m || m === document.body) && (m = document.documentElement);
      const O = m.getBoundingClientRect(), R = P.clientY, Y = 50, S = 5, te = R - O.top, L = O.bottom - R;
      let K = !1, ne = 0;
      te < Y && te > 0 ? (K = !0, ne = -S * (1 - te / Y)) : L < Y && L > 0 && (K = !0, ne = S * (1 - L / Y)), K ? (D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => {
        m.scrollTop += ne, v === "dragging" && U(P);
      })) : D.current && (cancelAnimationFrame(D.current), D.current = null);
    },
    [c, v]
  ), G = ce(
    (P) => {
      if (v === "idle" || v === "animating" || !p || !c.current)
        return;
      const m = { x: P.clientX, y: P.clientY };
      if (v === "potential")
        if (ir(Z.current, m))
          M("dragging");
        else
          return;
      U(P);
      const O = wt(
        P.clientX,
        P.clientY,
        c.current
      );
      k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
        const R = {
          x: O.x - Q.current.x,
          y: O.y - Q.current.y
        };
        z(R);
        const Y = oe(p, O.x, O.y);
        if (Y && x) {
          const S = {
            event: p,
            currentStartDate: Y.startDate,
            currentEndDate: Y.endDate,
            currentResourceId: Y.resourceId,
            conflicts: Y.conflicts
          };
          Y.hasConflict = !x(S);
        }
        if (b(Y), Y) {
          const S = Y.hasCapacity !== !1;
          T(S), W(p, Y);
        }
      });
    },
    [v, p, c, oe, W, x, U]
  ), w = ce(
    async (P) => {
      if (v === "idle" || v === "animating")
        return;
      const m = { x: P.clientX, y: P.clientY };
      if (!ir(Z.current, m) || v === "potential") {
        M("idle"), H(null), b(null);
        return;
      }
      if (!p || !y || !B.current) {
        M("idle"), H(null), b(null);
        return;
      }
      if (y.hasCapacity === !1) {
        T(!1), M("animating"), z(F.current), setTimeout(() => {
          M("idle"), H(null), b(null), T(!0);
        }, 300);
        return;
      }
      const R = {
        event: p,
        originalStartDate: B.current.startDate,
        originalEndDate: B.current.endDate,
        originalResourceId: B.current.resourceId,
        newStartDate: y.startDate,
        newEndDate: y.endDate,
        newResourceId: y.resourceId,
        hasConflict: y.hasConflict,
        conflicts: y.conflicts
      };
      let Y = !0;
      if (o)
        try {
          const S = o(R);
          Y = S instanceof Promise ? await S : S;
        } catch {
          Y = !1;
        }
      Y ? (T(!0), M("idle"), H(null), b(null)) : (T(!1), M("animating"), z(F.current), setTimeout(() => {
        M("idle"), H(null), b(null), T(!0);
      }, 300));
    },
    [v, p, y, o, x]
  );
  return ve(() => {
    if (v === "potential" || v === "dragging") {
      const P = (O) => G(O), m = (O) => w(O);
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", m), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", m);
      };
    } else
      return () => {
      };
  }, [v, G, w]), ve(() => () => {
    k.current && (cancelAnimationFrame(k.current), k.current = null), D.current && (cancelAnimationFrame(D.current), D.current = null);
  }, []), ve(() => {
    (v === "idle" || v === "animating") && (k.current && (cancelAnimationFrame(k.current), k.current = null), D.current && (cancelAnimationFrame(D.current), D.current = null));
  }, [v]), ve(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (M("animating"), z(F.current), setTimeout(() => {
      M("idle"), H(null), b(null);
    }, 300)) : (M("idle"), H(null), b(null)));
  }, [t]), ve(() => {
    if ((v === "dragging" || v === "potential") && p) {
      let P = !1;
      for (const m of e) {
        for (const O of m.data)
          if (O.some((R) => R.segmentId === p.segmentId)) {
            P = !0;
            break;
          }
        if (P)
          break;
      }
      P || (v === "dragging" ? (M("animating"), z(F.current), setTimeout(() => {
        M("idle"), H(null), b(null);
      }, 300)) : (M("idle"), H(null), b(null)));
    }
  }, [e, v, p]), {
    dragState: v,
    draggedEvent: p,
    ghostPosition: X,
    ghostDimensions: A,
    dropTarget: y,
    isValidDrop: _,
    handleDragStart: j,
    isDraggable: I,
    draggingEventId: (p == null ? void 0 : p.segmentId) || null,
    resourceOnly: g
  };
}, fi = ({
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
  const { enabled: l = !1, isSelectable: f } = i, g = l && !!o, x = ce((m) => {
    let O = 0;
    for (const R of a)
      R <= m && O++;
    return m * he + O * Ae;
  }, [a]), [v, M] = ue("idle"), [p, H] = ue(null), [X, z] = ue(null), [A, u] = ue(null), [y, b] = ue(!1), [_, T] = ue([]), [F, Z] = ue(!1), Q = xe(null), k = xe(null), D = xe(null), $ = ce(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return Te;
      default:
        return Se;
    }
  }, [t]), B = ce(
    (m) => {
      const O = $(), R = Math.floor(m / O), Y = E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return Y.add(R * 7, "days").toDate();
        case 1:
          return Y.add(R, "days").toDate();
        case 2:
          return Y.add(R, "hours").toDate();
        default:
          return Y.toDate();
      }
    },
    [t, r, $]
  ), I = ce(
    (m) => {
      const O = so(m, a), R = Math.floor(O / he);
      let Y = 0;
      for (const S of e) {
        const te = Math.max(S.data.length, 1);
        if (R < Y + te)
          return {
            resourceId: S.id,
            resourceIndex: R,
            resourceLabel: S.label
          };
        Y += te;
      }
      return null;
    },
    [e, a]
  ), J = ce(
    (m) => {
      const O = $();
      return Math.floor(m / O) * O;
    },
    [$]
  ), ee = ce(
    (m, O, R, Y = []) => {
      const S = [], L = (n || e).find((N) => N.id === m), K = O.getTime(), ne = R.getTime();
      if (L) {
        const N = L.data[0], ae = N && Array.isArray(N) ? L.data.flat() : L.data;
        for (const de of ae) {
          const fe = new Date(de.startDate).getTime(), be = new Date(de.endDate).getTime();
          if (K < be && ne > fe) {
            const $e = new Date(Math.max(K, fe)), we = new Date(Math.min(ne, be)), q = we.getTime() - $e.getTime();
            S.push({
              event: de,
              conflictStart: $e,
              conflictEnd: we,
              overlapDuration: q
            });
          }
        }
      }
      for (const N of Y) {
        if (N.resourceId !== m)
          continue;
        const ae = N.startDate.getTime(), de = N.endDate.getTime();
        if (K < de && ne > ae) {
          const fe = new Date(Math.max(K, ae)), be = new Date(Math.min(ne, de)), $e = be.getTime() - fe.getTime(), we = {
            segmentId: `pending-${N.startDate.getTime()}`,
            reservationId: `pending-${N.startDate.getTime()}`,
            startDate: N.startDate,
            endDate: N.endDate,
            occupancy: 0,
            title: `New Event (${N.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          S.push({
            event: we,
            conflictStart: fe,
            conflictEnd: be,
            overlapDuration: $e
          });
        }
      }
      return S;
    },
    [e, n]
  ), se = ce(
    (m) => {
      if (!g || d || !c.current || m.button !== 0)
        return;
      const O = m.target;
      if (O.closest("[data-segment-id]") || O.closest("[data-multi-select-ui]"))
        return;
      const R = wt(m.clientX, m.clientY, c.current), Y = I(R.y);
      if (!Y)
        return;
      Q.current = { x: m.clientX, y: m.clientY }, k.current = Y.resourceIndex;
      const S = J(R.x), te = $(), L = x(Y.resourceIndex);
      H(R), z(R), u({
        x: S,
        y: L,
        width: te,
        height: he
      }), M("selecting");
    },
    [g, d, c, I, J, $, x]
  ), oe = ce(
    (m) => {
      if (v !== "selecting" || !c.current || k.current === null)
        return;
      const O = wt(m.clientX, m.clientY, c.current);
      D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => {
        z(O);
        const R = $(), Y = J((p == null ? void 0 : p.x) || 0), S = J(O.x), te = x(k.current), L = Math.min(Y, S), K = Math.max(Y, S) + R;
        u({
          x: L,
          y: te,
          width: K - L,
          height: he
        });
      });
    },
    [v, c, p, $, J, x]
  ), W = ce(
    (m) => {
      if (v !== "selecting")
        return;
      if (!c.current || !p || !Q.current) {
        M("idle"), H(null), z(null), u(null);
        return;
      }
      const O = wt(m.clientX, m.clientY, c.current), R = I(p.y);
      if (!R) {
        M("idle"), H(null), z(null), u(null);
        return;
      }
      const Y = Math.min(p.x, O.x), S = Math.max(p.x, O.x), te = B(Y), L = B(S), K = E(L).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(R.resourceId, te, K)) {
        M("idle"), H(null), z(null), u(null);
        return;
      }
      const ne = ee(
        R.resourceId,
        te,
        K,
        _
      ), N = ne.length > 0, ae = {
        startDate: te,
        endDate: K,
        resourceId: R.resourceId,
        resourceLabel: R.resourceLabel,
        zoomLevel: t,
        hasConflict: N,
        conflicts: N ? ne : void 0
      };
      if (y)
        T((de) => [...de, ae]), Z(!0);
      else if (o) {
        const de = o(ae), fe = (be) => {
          be != null && be.continueMultiSelect && (b(!0), T([ae]), Z(!0));
        };
        de instanceof Promise ? de.then(fe) : fe(de);
      }
      M("idle"), H(null), z(null), u(null), Q.current = null, k.current = null;
    },
    [
      v,
      c,
      p,
      I,
      B,
      f,
      o,
      t,
      y,
      ee,
      _
    ]
  ), j = ce(() => {
    if (_.length > 0 && s) {
      Z(!1);
      const m = s(_), O = (R) => {
        R != null && R.continueMultiSelect ? Z(!0) : (T([]), b(!1), Z(!1));
      };
      m instanceof Promise ? m.then(O) : O(m);
      return;
    }
    T([]), b(!1), Z(!1);
  }, [_, s]), U = ce(() => {
    T([]), b(!1), Z(!1);
  }, []), G = ce((m) => {
    T((O) => {
      const R = O.filter((Y, S) => S !== m);
      return R.length === 0 && (b(!1), Z(!1)), R;
    });
  }, []), w = ce(
    (m, O) => {
      T((R) => R.map((Y, S) => {
        if (S !== m)
          return Y;
        const te = { ...Y, ...O }, L = R.filter((ne, N) => N !== m), K = ee(
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
    (m) => {
      m.key === "Escape" && (v === "selecting" ? (M("idle"), H(null), z(null), u(null), Q.current = null, k.current = null) : y && _.length > 0 && (T([]), b(!1), Z(!1)));
    },
    [v, y, _.length]
  );
  return ve(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", oe), document.addEventListener("mouseup", W), document.addEventListener("keydown", P), () => {
        document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", W), document.removeEventListener("keydown", P);
      };
  }, [v, oe, W, P]), ve(() => {
    if (y && _.length > 0)
      return document.addEventListener("keydown", P), () => {
        document.removeEventListener("keydown", P);
      };
  }, [y, _.length, P]), ve(() => () => {
    D.current && (cancelAnimationFrame(D.current), D.current = null);
  }, []), ve(() => {
    d && v === "selecting" && (M("idle"), H(null), z(null), u(null), Q.current = null, k.current = null);
  }, [d, v]), {
    selectionState: v,
    selectionStart: p,
    selectionEnd: X,
    selectionBox: A,
    handleGridMouseDown: se,
    isEnabled: g,
    pendingSelections: _,
    confirmSelections: j,
    clearSelections: U,
    removeSelection: G,
    updateSelection: w,
    isMultiSelectActive: y,
    hasUnconfirmedSelections: F
  };
}, hi = C.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, pi = C.div`
  position: relative;
`, mi = C.canvas``;
C.canvas``;
const ar = C.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, gi = Cn(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: g, separatorRowIndices: x = [] }, v) {
  const M = xe(!1), { handleScrollNext: p, handleScrollPrev: H, date: X, isLoading: z, cols: A, startDate: u } = Xe(), y = xe(null), b = xe(null), _ = xe(null), T = xe(null), [F, Z] = ue(!1), Q = Ft(), {
    dragState: k,
    draggedEvent: D,
    ghostPosition: $,
    ghostDimensions: B,
    dropTarget: I,
    isValidDrop: J,
    handleDragStart: ee,
    isDraggable: se,
    draggingEventId: oe,
    resourceOnly: W
  } = ui({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: T,
    separatorRowIndices: x
  });
  ve(() => {
    const N = k === "dragging" || k === "potential";
    Z(N), a && a(N);
  }, [k, a]);
  const {
    selectionState: j,
    selectionBox: U,
    handleGridMouseDown: G,
    pendingSelections: w,
    confirmSelections: P,
    clearSelections: m,
    removeSelection: O,
    updateSelection: R,
    isMultiSelectActive: Y,
    hasUnconfirmedSelections: S
  } = fi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: g,
    gridRef: T,
    isDragging: F,
    separatorRowIndices: x
  }), te = ce((N) => {
    N.preventDefault();
  }, []), L = ce((N) => {
    N.preventDefault();
  }, []), K = x.length * Ae, ne = ce(
    (N) => {
      const ae = On(), de = t * he + 1 + K;
      oo(N, ae, de), Is(N, n, t, A, u, Q, x);
    },
    [A, u, t, n, Q, x, K]
  );
  return ve(() => {
    if (!y.current)
      return;
    const N = y.current.getContext("2d");
    if (!N)
      return;
    const ae = () => ne(N);
    return window.addEventListener("resize", ae), () => window.removeEventListener("resize", ae);
  }, [ne]), ve(() => {
    const N = y.current;
    if (!N)
      return;
    N.style.letterSpacing = "1px";
    const ae = N.getContext("2d");
    ae && ne(ae);
  }, [X, t, n, ne]), ve(() => {
    if (!b.current)
      return;
    const N = new IntersectionObserver(
      (ae) => {
        ae[0].isIntersecting && !M.current && (M.current = !0, p(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Be) }
    );
    return N.observe(b.current), () => {
      N.disconnect();
    };
  }, [p]), ve(() => {
    if (!_.current)
      return;
    const N = new IntersectionObserver(
      (ae) => {
        ae[0].isIntersecting && !M.current && (M.current = !0, H(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Be),
        rootMargin: `0px 0px 0px -${Ye}px`
      }
    );
    return N.observe(_.current), () => {
      N.disconnect();
    };
  }, [H]), /* @__PURE__ */ V(hi, { id: qr, children: [
    /* @__PURE__ */ V(
      pi,
      {
        ref: (N) => {
          typeof v == "function" ? v(N) : v && (v.current = N), T.current = N;
        },
        onMouseDown: G,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(ar, { position: "left", ref: _ }),
          /* @__PURE__ */ h(bn, { isLoading: z, position: "left" }),
          /* @__PURE__ */ h(
            mi,
            {
              ref: y,
              onDragStart: te,
              onDragOver: L,
              style: { userSelect: k === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(Kl, { zoom: n, startDate: u }),
          /* @__PURE__ */ h(
            Qc,
            {
              data: r,
              zoom: n,
              onTileClick: s,
              onDragStart: ee,
              isDraggable: se,
              draggingEventId: oe,
              separatorRowIndices: x
            }
          ),
          /* @__PURE__ */ h(ar, { ref: b, position: "right" }),
          /* @__PURE__ */ h(bn, { isLoading: z, position: "right" }),
          (k === "dragging" || k === "animating") && /* @__PURE__ */ h(
            Dl,
            {
              draggedEvent: D,
              ghostPosition: $,
              ghostDimensions: B,
              dropTarget: I,
              isValidDrop: J,
              dragState: k,
              zoom: n,
              data: r,
              resourceOnly: W,
              separatorRowIndices: x
            }
          ),
          /* @__PURE__ */ h(
            Pl,
            {
              selectionBox: U,
              isSelecting: j === "selecting"
            }
          ),
          Y && w.length > 0 && /* @__PURE__ */ h(
            Gl,
            {
              selections: w,
              data: r,
              zoom: n,
              startDate: u,
              onRemove: O,
              onUpdate: R,
              separatorRowIndices: x
            }
          )
        ]
      }
    ),
    Y && S && w.length > 0 && /* @__PURE__ */ h(
      Wl,
      {
        selections: w,
        onConfirm: P,
        onClear: m,
        onRemove: O
      }
    )
  ] });
}), io = (e) => {
  const n = E.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, ao = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / ke);
    t += o.hours + s, r += n % ke, r >= ke && (t++, r -= ke);
  }), { hours: t, minutes: r };
}, co = (e, n) => {
  let t = tr;
  switch (n) {
    case 0:
      t = ks;
      break;
    case 1:
      t = tr;
      break;
    case 2:
      t = 1;
      break;
  }
  const r = () => {
    let s = t - e.hours - 1, i = ke - e.minutes;
    return i === ke && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: r(),
    overtime: o()
  };
}, yi = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const l = E(a.startDate).isoWeek(), f = E(a.startDate).isoWeekday(), g = E(a.endDate).isoWeek(), x = E(a.endDate).isoWeekday(), { hours: v, minutes: M } = io(a.occupancy);
    if (r === l) {
      const p = (Ze + 1 - f) * v, H = (Ze + 1 - f) * M;
      return { hours: Math.max(0, p), minutes: H };
    } else if (r === g) {
      const p = x > Ze ? Ze * v : x * v, H = x > Ze ? Ze * M : x * M;
      return { hours: p, minutes: H };
    } else if (E(n).isBetween(a.startDate, a.endDate))
      return { hours: Ze * v, minutes: Ze * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = ao(o), { free: c, overtime: d } = co({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, vi = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: g } = io(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: g } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = ao(s), { free: d, overtime: a } = co({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, xi = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const d = E(c.startDate).hour(), a = E(c.endDate).hour(), l = n.hour(), f = E(c.endDate).minute(), g = E(c.startDate).minute();
    d < l && a > l ? t += ke : d === l && a === l && g && f ? t += f ? f - g : ke - g : d === l && a >= l ? t += g ? ke - g : ke : a === l && f && (t += f);
  });
  const r = Math.floor(t / ke), o = t % ke, s = r || o ? 0 : 1, i = r ? 0 : o ? ke - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, bi = (e, n, t, r, o = !1) => {
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
      return vi(s, t, r, o);
    case 2:
      return xi(s, t);
    default:
      return yi(s, t, r);
  }
}, wi = (e, n, t, r, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = pt;
      break;
    case 1:
      c = "days", d = Se;
      break;
    case 2:
      c = "hours", d = Te;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = E(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / he), g = r.findIndex((H, X, z) => z.slice(0, X + 1).reduce((u, y) => u + y, 0) >= f), x = s === 2 ? (a + 1) * d : a * d, v = (f - 1) * he + he, M = bi(
    o[g],
    g,
    l,
    s,
    i
  ), p = E(e.startDate).isSame(E(e.endDate), "day");
  return {
    coords: { x, y: v },
    mouseCoords: t,
    resourceIndex: g,
    disposition: M,
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
      isOneDayEvent: p,
      passengers: e.totalPassengers
    }
  };
};
function Si(e, n) {
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
function Ci(e) {
  const n = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const r = [...t].sort((l, f) => l - f);
  if (r.length < 2)
    return n;
  const o = Math.min(5, r.length), s = Si(r, o), i = [];
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
    const g = "__auto_cat_" + f, x = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: g, name: x, minPassengers: l.min, maxPassengers: l.max });
    for (const v of l.values)
      a.set(v, g);
  }), { categories: d, capacityToCategoryId: a };
}
const Mi = (e, n, t, r) => {
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
var hn = {}, ki = {
  get exports() {
    return hn;
  },
  set exports(e) {
    hn = e;
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
})(ki);
const $i = hn;
var pn = {}, Di = {
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
    return function(t, r) {
      r.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Di);
const Ei = pn, _i = (e) => {
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
E.extend($i);
E.extend(Ei);
const cr = /* @__PURE__ */ new WeakMap(), Ti = (e) => {
  const n = cr.get(e);
  if (n)
    return n;
  const t = [...e].sort((o, s) => {
    const i = E(o.startDate), c = E(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), r = _i(t);
  return cr.set(e, r), r;
}, Pi = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = Ti(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, Ai = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Ii = (e) => {
  const { recordsThreshold: n } = Xe(), [t, r] = ue(0), [o, s] = ue(0), i = xe(null);
  ve(() => {
    i.current = document.getElementById(Be);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = Ee(() => Pi(e), [e]), a = Ee(
    () => Mi(e, c, d, n),
    [e, c, n, d]
  ), l = ce(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = ce(() => {
    a[o].length && (r((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), g = ce(() => {
    r(0), s(0);
  }, []), x = t + a[o].length, v = Ee(
    () => d.slice(t, x),
    [x, d, t]
  ), M = Ee(
    () => c.slice(t, x),
    [x, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: v,
    totalRowsPerPage: Ai(a[o]),
    next: l,
    previous: f,
    reset: g
  };
};
var mn = {}, Yi = {
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
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(Yi);
const Oi = mn;
var gn = {}, Li = {
  get exports() {
    return gn;
  },
  set exports(e) {
    gn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
  })(_e, function(t) {
    function r(g) {
      return g && typeof g == "object" && "default" in g ? g : { default: g };
    }
    var o = r(t);
    function s(g) {
      return g % 10 < 5 && g % 10 > 1 && ~~(g / 10) % 10 != 1;
    }
    function i(g, x, v) {
      var M = g + " ";
      switch (v) {
        case "m":
          return x ? "minuta" : "minutę";
        case "mm":
          return M + (s(g) ? "minuty" : "minut");
        case "h":
          return x ? "godzina" : "godzinę";
        case "hh":
          return M + (s(g) ? "godziny" : "godzin");
        case "MM":
          return M + (s(g) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(g) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(g, x) {
      return a.test(x) ? c[g.month()] : d[g.month()];
    };
    l.s = d, l.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(g) {
      return g + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Li);
const Ri = gn;
var yn = {}, Ni = {
  get exports() {
    return yn;
  },
  set exports(e) {
    yn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
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
})(Ni);
const Hi = yn;
var vn = {}, Wi = {
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
})(Wi);
const Fi = vn;
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
    e.exports = r(et);
  })(_e, function(t) {
    function r(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = r(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Bi);
const zi = xn, ji = {
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
}, Zi = {
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
}, Vi = {
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
}, Gi = {
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
}, Xi = {
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
}, Ui = [
  {
    id: "en",
    lang: Vi,
    translateCode: "en-GB",
    dayjsTranslations: Oi
  },
  {
    id: "pl",
    lang: Zi,
    translateCode: "pl-PL",
    dayjsTranslations: Ri
  },
  {
    id: "es",
    lang: ji,
    translateCode: "es-ES",
    dayjsTranslations: zi
  },
  {
    id: "lt",
    lang: Xi,
    translateCode: "lt-LT",
    dayjsTranslations: Fi
  },
  {
    id: "de",
    lang: Gi,
    translateCode: "de-DE",
    dayjsTranslations: Hi
  }
];
class Ki {
  constructor() {
    Ln(this, "locales", Ui);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const Nt = new Ki(), lo = Lr({
  localesData: Nt.getLocales(),
  currentLocale: Nt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Ji = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = ue("en"), s = Nt.getLocales(), i = ce(() => {
    const f = s.find((g) => g.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && E.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = ue(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  ve(() => {
    t == null || t.forEach((f) => {
      s.find((x) => x.id === f.id) || Nt.addLocales(f);
    });
  }, [s, t]), ve(() => {
    const f = localStorage.getItem("locale"), g = n ?? f ?? "en";
    localStorage.setItem("locale", g), o(g), d(i());
  }, [i, n]);
  const { Provider: l } = lo;
  return /* @__PURE__ */ h(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, tt = () => Ge(lo).currentLocale.lang, qi = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Qi = C.div`
  height: 440px;
  width: 514px;
  position: relative;
`, ea = C.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ta = ({ onTileClick: e }) => {
  const { feelingEmpty: n } = tt();
  return /* @__PURE__ */ V(Qi, { onClick: e, children: [
    /* @__PURE__ */ h(qi, {}),
    /* @__PURE__ */ h(ea, { children: n })
  ] });
}, na = C.div`
  position: relative;
  display: flex;
`, ra = C.div`
  position: relative;
  margin-left: ${Ye};
  display: flex;
  flex-direction: column;
  contain: paint;
`, oa = C.div`
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
function sa(e, n) {
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
const ia = ({
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
  const [x, v] = ue(Vt), [M, p] = ue(e), [H, X] = ue(!1), [z, A] = ue(!1), [u, y] = ue(""), [b, _] = ue(/* @__PURE__ */ new Set()), {
    zoom: T,
    startDate: F,
    isLoading: Z,
    config: { includeTakenHoursOnWeekendsInDayView: Q, showTooltip: k, showThemeToggle: D }
  } = Xe(), $ = xe(null), B = xe(null), [I, J] = ue(124), {
    page: ee,
    projectsPerPerson: se,
    rowsPerItem: oe,
    currentPageNum: W,
    pagesAmount: j,
    next: U,
    previous: G,
    reset: w
  } = Ii(M), { effectiveCategories: P, effectivePage: m } = Ee(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: ee };
    const q = Ci(ee);
    if (q.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: ee };
    const ie = ee.map((le) => {
      if (le.isSubcontract || le.capacity == null)
        return le;
      const Ce = q.capacityToCategoryId.get(le.capacity);
      return Ce ? { ...le, categoryId: Ce } : le;
    });
    return { effectiveCategories: q.categories, effectivePage: ie };
  }, [t, ee]), O = ce((q) => {
    _((ie) => {
      const le = new Set(ie);
      return le.has(q) ? le.delete(q) : le.add(q), le;
    });
  }, []), R = Ee(() => {
    const q = [], ie = P ? [...P].sort((le, Ce) => le.maxPassengers - Ce.maxPassengers) : [];
    for (const le of ie)
      m.some((Ce) => !Ce.isSubcontract && Ce.categoryId === le.id) && q.push(le.id);
    return m.some((le) => le.isSubcontract) && q.push("__subcontract__"), q;
  }, [P, m]), Y = ce(() => {
    _(/* @__PURE__ */ new Set());
  }, []), S = ce(() => {
    _(new Set(R));
  }, [R]), {
    visiblePage: te,
    visibleRowsPerItem: L,
    visibleTotalRows: K,
    visibleProjectsPerPerson: ne,
    separatorRowIndices: N
  } = Ee(() => {
    const q = sa(m, P), ie = ((P == null ? void 0 : P.length) ?? 0) > 0, le = /* @__PURE__ */ new Map();
    ee.forEach((De, He) => le.set(De.id, He));
    const Ce = [], Me = [], Re = [], Ne = [];
    let nt = 0;
    for (const De of q)
      if (De.type === "subcontract" || De.type === "category" && ie) {
        const rt = De.type === "subcontract" ? "__subcontract__" : De.category.id, ot = b.has(rt);
        if (Ne.push(nt), !ot)
          for (const Ue of De.items) {
            const kt = le.get(Ue.id) ?? 0, $t = oe[kt];
            Ce.push(Ue), Me.push($t), Re.push(se[kt]), nt += $t;
          }
      } else
        for (const rt of De.items) {
          const ot = le.get(rt.id) ?? 0, Ue = oe[ot];
          Ce.push(rt), Me.push(Ue), Re.push(se[ot]), nt += Ue;
        }
    const Bt = Me.reduce((De, He) => De + He, 0);
    return {
      visiblePage: Ce,
      visibleRowsPerItem: Me,
      visibleTotalRows: Bt,
      visibleProjectsPerPerson: Re,
      separatorRowIndices: Ne
    };
  }, [m, P, ee, b, oe, se]), ae = xe(
    at(
      (q, ie, le, Ce, Me, Re) => {
        if (!$.current)
          return;
        const { tile: Ne, segmentId: nt } = be(q);
        if (!nt || !Ne) {
          X(!1), v(Vt);
          return;
        }
        const Bt = fe(nt, ie), De = $.current.getBoundingClientRect(), He = Ne.getBoundingClientRect(), rt = { x: q.clientX - De.left, y: q.clientY - De.top }, ot = {
          x: q.clientX - De.left,
          y: q.clientY - De.top
        }, Ue = {
          x: He.left - De.left,
          y: He.top - De.top,
          width: He.width,
          height: He.height
        }, {
          coords: { x: kt, y: $t },
          resourceIndex: fo,
          disposition: ho,
          reservationData: po
        } = wi(
          Bt,
          le,
          rt,
          Ce,
          Me,
          Re,
          Q
        );
        v({
          coords: { x: kt, y: $t },
          mouseCoords: ot,
          resourceIndex: fo,
          disposition: ho,
          reservationData: po,
          tileBounds: Ue
        }), X(!0);
      },
      4
    )
  ), de = xe(
    at((q, ie) => {
      w(), p(
        q.map((le) => ({
          ...le,
          data: le.data.filter((Ce) => {
            const { title: Me, description: Re, subtitle: Ne } = Ce;
            return (Me == null ? void 0 : Me.toLowerCase().includes(ie.toLowerCase())) || (Ne == null ? void 0 : Ne.toLowerCase().includes(ie.toLowerCase())) || (Re == null ? void 0 : Re.toLowerCase().includes(ie.toLowerCase()));
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
  }, $e = (q) => {
    const ie = q.target.value;
    y(ie), de.current.cancel(), ie ? de.current(e, ie) : (w(), p(e));
  }, we = ce(() => {
    ae.current.cancel(), X(!1), v(Vt);
  }, []);
  return ve(() => {
    const q = (le) => ae.current(
      le,
      e,
      F,
      L,
      ne,
      T
    ), ie = $.current;
    if (ie)
      return ie.addEventListener("mousemove", q), ie.addEventListener("mouseleave", we), () => {
        ie.removeEventListener("mousemove", q), ie.removeEventListener("mouseleave", we);
      };
  }, [
    ae,
    we,
    ne,
    L,
    F,
    T,
    e
  ]), ve(() => {
    u ? (de.current.cancel(), de.current(e, u)) : p(e);
  }, [e, u]), Sn(() => {
    const q = B.current;
    if (!q)
      return;
    const ie = () => J(q.offsetHeight);
    ie();
    const le = new ResizeObserver(ie);
    return le.observe(q), () => le.disconnect();
  }, []), /* @__PURE__ */ V(na, { children: [
    /* @__PURE__ */ h(
      sc,
      {
        headerHeight: I,
        data: m,
        categories: P,
        pageNum: W,
        pagesAmount: j,
        rows: oe,
        onLoadNext: U,
        onLoadPrevious: G,
        searchInputValue: u,
        onSearchInputChange: $e,
        onItemClick: o,
        collapsedGroups: b,
        onToggleGroup: O,
        allGroupIds: R,
        onExpandAll: Y,
        onCollapseAll: S
      }
    ),
    /* @__PURE__ */ V(ra, { children: [
      /* @__PURE__ */ h(
        Yc,
        {
          ref: B,
          zoom: T,
          topBarWidth: i,
          showThemeToggle: D,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        gi,
        {
          data: te,
          baseData: n || e,
          zoom: T,
          rows: K,
          ref: $,
          onTileClick: r,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: A,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: g,
          separatorRowIndices: N
        }
      ) : /* @__PURE__ */ h(oa, { width: i, children: Z ? /* @__PURE__ */ h(bn, { isLoading: Z, position: "left" }) : /* @__PURE__ */ h(ta, {}) }),
      k && H && !z && (x == null ? void 0 : x.resourceIndex) > -1 && /* @__PURE__ */ h(ml, { tooltipData: x })
    ] })
  ] });
}, aa = C.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.primary};
`, Gt = C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({ $at: e }) => e ?? "start"};
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : e === "center" ? "center" : "flex-start"};
`, ca = C.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, lr = C.button`
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
`, la = C.button`
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
`, da = C.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`, ua = C.div`
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
`, dr = C.button`
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
`, fa = C.label`
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
`, ha = C.button`
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
`, pa = C.span`
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
`, st = ({ children: e, sw: n = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: n, strokeLinecap: "round", strokeLinejoin: "round", children: e }), ma = () => {
  var n, t;
  const e = document.getElementById(Be);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (n = e == null ? void 0 : e.requestFullscreen) == null || n.call(e);
}, ga = () => {
  const { config: e, date: n, zoom: t, handleGoNext: r, handleGoPrev: o, handleGoToday: s, setZoom: i, goToDate: c, toggleDisplayActiveUnits: d } = Xe(), { filterButtonState: a = -1 } = e, l = () => {
    var f;
    (f = document.querySelector(`#${Be} input[placeholder]`)) == null || f.focus();
  };
  return /* @__PURE__ */ V(aa, { width: 0, children: [
    /* @__PURE__ */ V(Gt, { $at: "start", children: [
      /* @__PURE__ */ h(da, { children: n.format("MMMM YYYY") }),
      /* @__PURE__ */ V(ua, { children: [
        /* @__PURE__ */ h("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ h("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ h("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      /* @__PURE__ */ V(fa, { children: [
        /* @__PURE__ */ V(st, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (f) => f.target.value && c(f.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ h(Gt, { $at: "center", children: /* @__PURE__ */ V(ca, { children: [
      /* @__PURE__ */ h(lr, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ h(st, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
      /* @__PURE__ */ h(la, { onClick: s, children: "Hoy" }),
      /* @__PURE__ */ h(lr, { onClick: r, "aria-label": "Siguiente", children: /* @__PURE__ */ h(st, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
    ] }) }),
    /* @__PURE__ */ V(Gt, { $at: "end", children: [
      /* @__PURE__ */ V(ha, { onClick: l, children: [
        /* @__PURE__ */ V(st, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] }),
      a >= 0 && /* @__PURE__ */ V(dr, { $primary: !!a, onClick: d, children: [
        /* @__PURE__ */ h(st, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(pa, { children: a })
      ] }),
      /* @__PURE__ */ V(dr, { onClick: ma, children: [
        /* @__PURE__ */ h(st, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] })
    ] })
  ] });
}, ya = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), va = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), xa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), ba = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), wa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Sa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ca = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Ma = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), ka = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), $a = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Da = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ea = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), _a = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Ta = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Pa = {
  add: ya,
  subtract: va,
  filter: xa,
  arrowLeft: ba,
  arrowRight: wa,
  defaultAvatar: Sa,
  calendarWarning: Ca,
  calendarFree: Ma,
  arrowDown: $a,
  arrowUp: ka,
  search: Da,
  close: Ea,
  moon: _a,
  sun: Ta
}, Xt = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = Ft(), i = Pa[e];
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
}, Aa = (e, n, t) => ({
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
C.button`
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
  ${({ theme: e, variant: n, disabled: t }) => Aa(e, n, t)}
`;
const Ia = C.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Ya = C.div`
  position: relative;
`, Oa = ({
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
  clickToAddConfig: x
}) => {
  const { goToDate: v, handleGoToday: M, zoomIn: p, zoomOut: H, zoom: X } = Xe();
  return Rr(
    l,
    () => ({
      goToDate: v,
      goToToday: M,
      setZoom: (z) => {
        if (!no(z))
          return;
        const A = z - X;
        if (A > 0)
          for (let u = 0; u < A; u++)
            p();
        else
          for (let u = 0; u < Math.abs(A); u++)
            H();
      }
    }),
    [v, M, X, p, H]
  ), /* @__PURE__ */ h(
    ia,
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
      clickToAddConfig: x
    }
  );
}, td = Cn(function({
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
  onEventDrag: x,
  draggableConfig: v,
  onTimeRangeSelect: M,
  onMultiTimeRangeSelect: p,
  clickToAddConfig: H
}, X) {
  var $;
  const z = Ee(
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
  ), A = xe(null), u = xe(null), [y, b] = ue(($ = A.current) == null ? void 0 : $.clientWidth), _ = Ee(() => E(s), [s]), [T, F] = ue(z.defaultTheme ?? "light"), Z = () => {
    F(T === "light" ? "dark" : "light");
  }, Q = T === "light" ? vs : xs, k = z.theme ? z.theme[Q.mode] : {}, D = {
    ...Q,
    colors: {
      ...Q.colors,
      ...k
    }
  };
  return Rr(
    X,
    () => ({
      goToDate: (B) => {
        var I;
        return (I = u.current) == null ? void 0 : I.goToDate(B);
      },
      goToToday: () => {
        var B;
        return (B = u.current) == null ? void 0 : B.goToToday();
      },
      setZoom: (B) => {
        var I;
        return (I = u.current) == null ? void 0 : I.setZoom(B);
      }
    }),
    []
  ), ve(() => {
    const B = () => {
      A.current && b(A.current.clientWidth);
    };
    return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, []), A.current, /* @__PURE__ */ V(Pe, { children: [
    /* @__PURE__ */ h(ys, {}),
    /* @__PURE__ */ h(ps, { theme: D, children: /* @__PURE__ */ h(Ji, { lang: z.lang, translations: z.translations, children: /* @__PURE__ */ h(
      li,
      {
        data: n,
        isLoading: !!f,
        config: z,
        onRangeChange: i,
        defaultStartDate: _,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: /* @__PURE__ */ h(
          Ia,
          {
            showScroll: !!n.length,
            id: Be,
            ref: A,
            children: /* @__PURE__ */ h(Ya, { children: /* @__PURE__ */ h(
              Oa,
              {
                data: n,
                baseData: r,
                categories: t,
                onTileClick: c,
                topBarWidth: y ?? 0,
                onItemClick: l,
                toggleTheme: Z,
                onEventDrop: g,
                onEventDrag: x,
                draggableConfig: v,
                schedulerRef: u,
                onTimeRangeSelect: M,
                onMultiTimeRangeSelect: p,
                clickToAddConfig: H
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}), La = C.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, Ra = C.button`
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
`, Na = C.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ha = C.p`
  ${gt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, ur = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = tt(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(La, { intent: e, children: /* @__PURE__ */ V(Ra, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ h(Na, { children: t }),
    /* @__PURE__ */ h(Ha, { children: d })
  ] }) });
}, Wa = C.div`
  min-width: ${Ye + "px"};
  max-width: ${Ye + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Fa = C.div`
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
`, Ba = C.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, za = C.input`
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
`, ja = C.div`
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
`, Za = C.button`
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
`, Va = C.div`
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
`, Ga = C.div`
  display: flex;
  align-items: center;
`, Xa = C.div`
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
`, Ua = C.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Ka = C.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, fr = C.p`
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
`, Ja = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), qa = () => /* @__PURE__ */ V("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Qa = () => /* @__PURE__ */ V("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), ec = ({ id: e, item: n, rows: t, onItemClick: r, isSubcontract: o }) => /* @__PURE__ */ h(
  Va,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ V(Ga, { children: [
      /* @__PURE__ */ h(Xa, { $provider: o, children: Ja(n.icon) ? /* @__PURE__ */ h(Ua, { src: n.icon, alt: "" }) : o ? /* @__PURE__ */ h(Qa, {}) : /* @__PURE__ */ h(qa, {}) }),
      /* @__PURE__ */ V(Ka, { children: [
        /* @__PURE__ */ h(fr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ h(fr, { children: n.subtitle })
      ] })
    ] })
  }
), tc = C.div`
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
`, nc = C.span`
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
`, rc = C.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, oc = C.div`
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
`, hr = ({
  label: e,
  count: n,
  isCollapsed: t,
  onToggle: r,
  variant: o = "category"
}) => /* @__PURE__ */ V(tc, { $variant: o, onClick: r, title: e, children: [
  /* @__PURE__ */ h(oc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(nc, { $variant: o, children: e }),
  /* @__PURE__ */ h(rc, { $variant: o, children: n })
] }), sc = ({
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
  allGroupIds: x,
  onExpandAll: v,
  onCollapseAll: M
}) => {
  const [p, H] = ue(!1), X = tt(), z = () => H((k) => !k), A = n ? [...n].sort((k, D) => k.maxPassengers - D.maxPassengers) : [], u = A.length > 0, y = x.length > 0, b = y && f.size === x.length;
  y && f.size;
  const _ = e.filter((k) => k.isSubcontract), T = X.subcontract ?? "Subcontract", F = (k) => {
    const D = e.indexOf(k);
    return /* @__PURE__ */ h(
      ec,
      {
        id: k.id,
        item: k.label,
        rows: r[D],
        onItemClick: l,
        isSubcontract: k.isSubcontract
      },
      k.id
    );
  }, Z = (k) => {
    const D = e.filter(
      (I) => !I.isSubcontract && I.categoryId === k.id
    );
    if (D.length === 0)
      return null;
    const $ = f.has(k.id), B = k.name;
    return /* @__PURE__ */ V("div", { children: [
      /* @__PURE__ */ h(
        hr,
        {
          label: B,
          count: D.length,
          isCollapsed: $,
          onToggle: () => g(k.id),
          variant: "category"
        }
      ),
      !$ && D.map(F)
    ] }, k.id);
  }, Q = e.filter(
    (k) => !k.isSubcontract && (!k.categoryId || !u)
  );
  return /* @__PURE__ */ V(Wa, { children: [
    /* @__PURE__ */ V(Fa, { $height: t, children: [
      /* @__PURE__ */ V(Ba, { children: [
        /* @__PURE__ */ V(ja, { isFocused: p, children: [
          /* @__PURE__ */ h(
            za,
            {
              placeholder: X.search,
              value: d,
              onChange: a,
              onFocus: z,
              onBlur: z
            }
          ),
          /* @__PURE__ */ h(Xt, { iconName: "search" })
        ] }),
        y && /* @__PURE__ */ h(
          Za,
          {
            title: b ? "Expand all" : "Collapse all",
            onClick: b ? v : M,
            $allCollapsed: b,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: b ? /* @__PURE__ */ V(Pe, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ V(Pe, { children: [
              /* @__PURE__ */ h("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ h(
        ur,
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
    u ? A.map(Z) : Q.map(F),
    u && Q.length > 0 && Q.map(F),
    _.length > 0 && /* @__PURE__ */ V(Pe, { children: [
      /* @__PURE__ */ h(
        hr,
        {
          label: T,
          count: _.length,
          isCollapsed: f.has("__subcontract__"),
          onToggle: () => g("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !f.has("__subcontract__") && _.map(F)
    ] }),
    /* @__PURE__ */ h(
      ur,
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
}, ic = C.div`
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
`, ac = Wt`
from{
    left: -100%;
}
to{
    left: 100%;
}`, cc = C.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${ac} 1s infinite;
`, lc = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ h(ic, { position: n, children: /* @__PURE__ */ h(cc, {}) }) : null, bn = lc, je = (e, n) => {
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
    bottomText: x,
    strokeStyle: v,
    labelBetweenCells: M
  } = e;
  if (t.beginPath(), t.strokeStyle = v ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), M ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const p = r + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(d, p, c);
  }
  if (l && f && g && x) {
    t.fillStyle = f, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = g.font;
    const p = r + s / 2 - t.measureText(g.label).width / 2;
    t.fillStyle = g.color, t.fillText(g.label, p, g.y), t.font = x.font;
    const H = r + s / 2 - t.measureText(x.label).width / 2;
    t.fillStyle = x.color, t.fillText(x.label, H, x.y);
  }
}, wn = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, dc = (e, n, t, r) => {
  const o = ht - Je / ws, s = ht - Je / Ss, i = ze + vt;
  let c = 0;
  for (let d = 0; d < n; d++) {
    const a = to(
      E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    ), l = a.isCurrentDay;
    if (je(
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
          color: wn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: l ? "700 10px Inter" : Le.bottomRow.number,
          color: l ? r.colors.today : wn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            r
          )
        }
      },
      r
    ), l) {
      const x = c + Se / 2, v = o - 13 / 2;
      e.save(), e.fillStyle = r.colors.today, e.beginPath(), e.roundRect ? e.roundRect(x - 30 / 2, v, 30, 13, 5) : e.rect(x - 30 / 2, v, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = "800 8.5px Inter", e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", x, v + 13 / 2 + 0.5), e.restore();
    }
    c += Se;
  }
}, uc = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Ie;
  const s = ze;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= sn && (c = 0);
    const a = eo(t, d) * Ie;
    je(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: vt,
        textYPos: Qr,
        label: E().month(c).format("MMMM").toUpperCase(),
        font: Le.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, fc = (e, n, t) => {
  let o = 0, s = 0, i = E(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * Se + Se;
  for (let c = 0; c < sn; c++)
    i > sn - 1 && (i = 0), s = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * Se, je(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: ze,
        textYPos: Tn,
        label: E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: Le.topRow
      },
      t
    ), o += s, i++;
}, hc = (e, n, t, r) => {
  const o = 7 * Se, s = ze, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % er;
    f <= 0 && (f += er), l !== 1 && a === 0 && (d = -l * Se + Se), je(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: vt,
        textYPos: Qr,
        label: `${t.toUpperCase()} ${f}`,
        font: Le.middleRow
      },
      r
    ), d += o;
  }
}, pc = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t ? n.colors.currentDay : r ? n.colors.primary : n.colors.secondary;
}, mc = (e, n, t, r, o) => {
  const s = ht - Je / 1.6, i = ht - Je / 4.5, c = ze + vt;
  let d = 0;
  for (let a = 0; a < n; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame(E(), "week");
    je(
      {
        ctx: e,
        x: d,
        y: c,
        width: pt,
        height: Je,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : pc({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: f ? "700 14px Inter" : Le.bottomRow.name,
          color: f ? o.colors.today : wn({ isCurrent: f }, o)
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
}, gc = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (rr(s) - t + 1) * Ie, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = rr(s + d) * Ie), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ie) * Ie), je(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: ze,
        textYPos: Tn,
        label: (s + d).toString(),
        font: Le.topRow
      },
      r
    ), c += a, l += a, d++;
}, yc = (e, n, t, r) => {
  const o = Math.floor(n / Rt) + 2, s = Rt * Te;
  let d = -E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Te + 0.5 * Te;
  for (let a = 0; a < o; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    je(
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
}, vc = (e, n, t, r) => {
  const o = Math.ceil(n / Rt), s = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Te;
  for (let f = 0; f < a; f++) {
    const g = E(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = E(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), M = v.format("MMMM").toUpperCase(), p = v.diff(g, "hour") + 1, H = f === 0 ? p * Te : n * Te;
    je(
      {
        ctx: e,
        x: l,
        y: 0,
        width: H,
        height: mt,
        textYPos: Tn,
        label: M,
        font: Le.topRow
      },
      r
    ), l += H;
  }
}, xc = (e, n, t, r) => {
  let o = 0;
  const s = mt + Ct, i = E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Te;
  for (let d = 0; d < n; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    je(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: on,
        label: a,
        font: Le.bottomRow.hoursInDay,
        textYPos: mt + Ct + on / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += Te;
  }
}, bc = (e, n, t, r, o, s, i) => {
  switch (n) {
    case 0:
      gc(e, r, s, i), uc(e, t, r, i), mc(e, t, r, o, i);
      break;
    case 1:
      fc(e, r, i), hc(e, r, o, i), dc(e, t, r, i);
      break;
    case 2:
      vc(e, t, r, i), yc(e, t, r, i), xc(e, t, r, i);
      break;
  }
}, wc = C.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, Sc = C.div`
  position: sticky;
  left: ${Ye}px;
  width: calc(${({ $width: e }) => e}px - ${Ye}px);
  z-index: 3;
`, Cc = C.div`
  height: ${ht}px;
  display: block;
`, Mc = C.canvas``, kc = {
  transfer: /* @__PURE__ */ V(Pe, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ V(Pe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ V(Pe, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ V(Pe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ V(Pe, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ V(Pe, { children: [
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
    children: kc[e]
  }
), $c = C.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, pr = C.span`
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
`, Pt = C.span`
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
`, Dc = C.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: #b4791e;
  background: #fbf1de;
  border: 1px solid #e9d3a6;
  padding: 1px 5px;
  border-radius: 5px;
`, Ec = C.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, _c = C.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, Tc = C.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, Pc = C.span`
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
`, Ac = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], Ic = () => /* @__PURE__ */ V($c, { children: [
  /* @__PURE__ */ h(pr, { children: "Leyenda" }),
  /* @__PURE__ */ V(Pt, { children: [
    /* @__PURE__ */ h(We, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ V(Pt, { children: [
    /* @__PURE__ */ h(We, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ V(Pt, { children: [
    /* @__PURE__ */ h(We, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ V(Pt, { children: [
    /* @__PURE__ */ h(Dc, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(Ec, {}),
  /* @__PURE__ */ V(pr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Ac.map((e) => /* @__PURE__ */ V(_c, { children: [
    /* @__PURE__ */ h(Tc, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(Pc, { style: { color: e.color }, children: /* @__PURE__ */ h(We, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), Yc = Cn(function({ zoom: n, topBarWidth: t, showThemeToggle: r, toggleTheme: o }, s) {
  const { week: i } = tt(), { date: c, cols: d, dayOfYear: a, startDate: l, config: f } = Xe(), g = xe(null), x = Ft(), v = ce(
    (M) => {
      const p = On(), X = (n === 2 ? bs : ht) + 1;
      oo(M, p, X), bc(M, n, d, l, i, a, x);
    },
    [d, a, l, i, n, x]
  );
  return ve(() => {
    if (!g.current)
      return;
    const M = g.current.getContext("2d");
    if (!M)
      return;
    const p = () => v(M);
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [v]), ve(() => {
    const M = g.current;
    if (!M)
      return;
    M.style.letterSpacing = "1px";
    const p = M.getContext("2d");
    p && v(p);
  }, [c, n, v]), /* @__PURE__ */ V(wc, { ref: s, children: [
    (f.showTopbar !== !1 || f.showLegend !== !1) && /* @__PURE__ */ V(Sc, { $width: t, children: [
      f.showTopbar !== !1 && /* @__PURE__ */ h(ga, { width: t, showThemeToggle: r, toggleTheme: o }),
      f.showLegend !== !1 && /* @__PURE__ */ h(Ic, {})
    ] }),
    /* @__PURE__ */ h(Cc, { id: Cs, children: /* @__PURE__ */ h(Mc, { ref: g }) })
  ] });
}), Oc = (e, n, t) => {
  let r;
  switch (t) {
    case 0:
      r = Ie;
      break;
    case 2:
      r = Te;
      break;
    default:
      r = Se;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = n.startDate.startOf("day"), d = n.endDate.startOf("day"), a = () => {
    let l;
    switch (t) {
      case 2:
        l = (e.startDate.diff(n.startDate, "minute") / ke + 1) * r - r / 2;
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
          e.endDate.diff(e.startDate, "minute") / ke * r,
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
          e.endDate.diff(n.startDate, "minute") / ke * r + 0.5 * r,
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
          n.endDate.diff(e.startDate, "minute") / ke * r,
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
          n.endDate.diff(n.startDate, "minute") / ke * r,
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
}, Lc = (e, n, t, r, o, s) => {
  const i = e * he + Ms, c = n.hour(), d = t.hour();
  let a, l, f, g;
  switch (s) {
    case 2: {
      a = E(r), l = E(o), f = E(n).hour(c).minute(0), g = E(t).hour(d).minute(0);
      break;
    }
    default: {
      a = E(r).hour(0).minute(0), l = E(o).hour(23).minute(59), f = n, g = t;
      break;
    }
  }
  return {
    ...Oc(
      { startDate: a, endDate: l },
      { startDate: f, endDate: g },
      s
    ),
    y: i
  };
}, uo = (e) => {
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
C.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
C.p`
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
const Rc = C.button`
  ${gt}
  position: absolute;
  height: ${_n}px;
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
`, Nc = C.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`, Hc = C.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, mr = C.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Wc = C.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Fc = C.span`
  ${yt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, Bc = C.span`
  ${yt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, zc = C.span`
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
`, jc = C.div`
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
`, gr = C.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, yr = C.span`
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
`, vr = C.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, Zc = C.div`
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
`, xr = C.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, Vc = 34, Gc = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, Xc = "#3E8E5A", Uc = "#D98A22", Kc = ({
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
  const { date: a } = Xe(), l = Yn(a, t), { y: f, x: g, width: x } = Lc(
    e,
    l.startDate,
    l.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: v } = Ft(), M = xe(null), p = E(n.startDate).isSame(E(n.endDate), "day"), H = n.eventType === Mt.Tour, X = n.eventType === Mt.Transfer, z = p && (H || X), A = (Z) => {
    M.current = { x: Z.clientX, y: Z.clientY }, c && s && (Z.preventDefault(), s(n, Z));
  }, u = (Z) => {
    if (M.current) {
      const Q = Math.abs(Z.clientX - M.current.x), k = Math.abs(Z.clientY - M.current.y);
      Math.sqrt(Q * Q + k * k) <= 5 && (o == null || o(n)), M.current = null;
    } else
      o == null || o(n);
  }, y = {
    left: `${g}px`,
    top: `${f + d}px`,
    backgroundColor: `${n.bgColor ?? v.defaultTile}`,
    width: `${x}px`,
    color: uo(n.bgColor ?? "")
  }, b = !r && n.readiness ? Gc[n.readiness] : null, _ = r && n.subcontractConfirmed === !1, T = r ? _ ? Uc : Xc : b == null ? void 0 : b.stripe, F = (Z) => /* @__PURE__ */ V(
    Rc,
    {
      "data-segment-id": n.segmentId,
      style: y,
      onClick: u,
      onMouseDown: A,
      onDragStart: (Q) => Q.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: _,
      children: [
        T && /* @__PURE__ */ h(Nc, { style: { background: T } }),
        Z
      ]
    }
  );
  return F(
    z ? /* @__PURE__ */ V(Pe, { children: [
      (r || b) && /* @__PURE__ */ h(gr, { $sm: !0, children: r ? /* @__PURE__ */ h(vr, { children: "SUB" }) : b && /* @__PURE__ */ h(yr, { $sm: !0, style: { color: b.color }, children: /* @__PURE__ */ h(We, { name: b.icon, strokeWidth: b.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ V(Zc, { children: [
        /* @__PURE__ */ h(We, { name: X ? "transfer" : "sun", strokeWidth: 2.4 }),
        x >= Vc && /* @__PURE__ */ V(Pe, { children: [
          /* @__PURE__ */ h(xr, { children: E(n.startDate).format("HH:mm") }),
          !X && /* @__PURE__ */ h(xr, { $end: !0, children: E(n.endDate).format("HH:mm") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ V(Pe, { children: [
      /* @__PURE__ */ h(gr, { children: r ? /* @__PURE__ */ h(vr, { children: "SUB" }) : b && /* @__PURE__ */ h(yr, { style: { color: b.color }, children: /* @__PURE__ */ h(We, { name: b.icon, strokeWidth: b.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ V(Hc, { children: [
        /* @__PURE__ */ V(mr, { $pad: !0, children: [
          /* @__PURE__ */ h(Wc, { children: /* @__PURE__ */ h(We, { name: X ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(Fc, { children: n.title })
        ] }),
        /* @__PURE__ */ V(mr, { children: [
          n.bookingNumber && /* @__PURE__ */ h(zc, { children: n.bookingNumber }),
          n.subtitle && /* @__PURE__ */ h(Bc, { children: n.subtitle })
        ] }),
        n.driver && /* @__PURE__ */ V(jc, { children: [
          /* @__PURE__ */ h(We, { name: "person" }),
          n.driver
        ] })
      ] })
    ] })
  );
}, br = (e, n) => {
  let t = 0;
  for (const r of n)
    e >= r && t++;
  return t * Ae;
}, Jc = C.div`
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
`, qc = ({
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
        const f = br(d, i);
        return [
          /* @__PURE__ */ h(Jc, { style: { top: `${d * he + f}px` }, children: "Disponible" }, `dispo-${a.id}`)
        ];
      }
      return a.data.map(
        (f, g) => f.map((x) => {
          const v = s === x.segmentId, M = o ? o(x) : !1, p = g + d, H = br(p, i);
          return /* @__PURE__ */ h(
            Kc,
            {
              row: p,
              data: x,
              zoom: n,
              isSubcontract: a.isSubcontract,
              onTileClick: t,
              onDragStart: r,
              isDragging: v,
              isDraggable: M,
              yOffset: H
            },
            x.segmentId
          );
        })
      );
    }).flat(2);
  }, [e, t, n, r, o, s, i]);
  return /* @__PURE__ */ h(Pe, { children: c() });
}, Qc = qc;
C.div`
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
C.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
C.label`
  font-size: 14px;
`;
C.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
C.input`
  height: 18px;
  width: 18px;
`;
C.button`
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
C.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const el = C.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, tl = C.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, nl = C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, rl = C.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, ol = C.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, sl = C.div`
  ${gt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, il = C.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, al = C.div`
  padding: 10px 12px;
`, cl = C.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, wr = C.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Sr = C.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Cr = C.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Mr = C.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, kr = C.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, ll = C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, dl = C.div``, ul = C.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, fl = C.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, hl = C.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, $r = C.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Dr = C.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Er = C.div`
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
C.div``;
C.span``;
C.span``;
C.div``;
C.div``;
C.span``;
C.span``;
C.div``;
C.div``;
C.span``;
C.span``;
C.div``;
C.div``;
C.div``;
C.span``;
C.div``;
C.div``;
C.div``;
C.div``;
C.p``;
C.span``;
const pl = {
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
}, ml = ({ tooltipData: e }) => {
  const { mouseCoords: n, reservationData: t } = e, r = xe(null), [o, s] = ue("below"), i = tt(), c = { ...pl, ...i.tooltip };
  Sn(() => {
    if (!r.current || !n)
      return;
    const x = r.current, { width: v, height: M } = x.getBoundingClientRect(), p = x.parentElement;
    if (!p)
      return;
    const H = p.getBoundingClientRect(), X = 12, z = 4, A = H.height - n.y, u = H.width - n.x;
    let y = n.x + X, b = n.y + X, _ = "below";
    u < v + X && (y = n.x - v - X), A < M + X && (b = n.y - M - X, _ = "above"), y = Math.max(z, Math.min(y, H.width - v - z)), b = Math.max(z, Math.min(b, H.height - M - z)), s(_), x.style.left = `${y}px`, x.style.top = `${b}px`;
  }, [n]);
  const d = t.reservationType === Mt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, g = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ V(el, { ref: r, $position: o, children: [
    /* @__PURE__ */ V(tl, { children: [
      /* @__PURE__ */ V(nl, { children: [
        /* @__PURE__ */ h(rl, { children: t.bookingNumber }),
        /* @__PURE__ */ h(ol, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ h(sl, { children: t.eventName }),
      t.client && /* @__PURE__ */ h(il, { children: t.client })
    ] }),
    /* @__PURE__ */ V(al, { children: [
      /* @__PURE__ */ V(cl, { children: [
        /* @__PURE__ */ V(wr, { children: [
          /* @__PURE__ */ h(Sr, { children: c.startDate }),
          /* @__PURE__ */ V(Cr, { children: [
            /* @__PURE__ */ h(Mr, { children: t.startDate }),
            " ",
            /* @__PURE__ */ h(kr, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ V(wr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Sr, { children: c.endDate }),
          /* @__PURE__ */ V(Cr, { children: [
            /* @__PURE__ */ h(Mr, { children: t.endDate }),
            " ",
            /* @__PURE__ */ h(kr, { children: t.endTime })
          ] })
        ] })
      ] }),
      g.length > 0 && /* @__PURE__ */ h(ll, { children: g.map((x, v) => /* @__PURE__ */ V(dl, { children: [
        /* @__PURE__ */ h(ul, { children: x.label }),
        /* @__PURE__ */ h(fl, { children: x.value })
      ] }, v)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ V(hl, { children: [
        t.serviceNotes && /* @__PURE__ */ V($r, { children: [
          /* @__PURE__ */ h(Dr, { children: c.serviceNotes }),
          /* @__PURE__ */ h(Er, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ V($r, { children: [
          /* @__PURE__ */ h(Dr, { children: c.reservationNotes }),
          /* @__PURE__ */ h(Er, { children: t.reservationNotes })
        ] })
      ] })
    ] })
  ] });
};
C.div`
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
C.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`;
C.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`;
const gl = C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, yl = C.div`
  position: absolute;
  height: ${_n}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: n, $animateToY: t }) => e && n !== void 0 && t !== void 0 ? `transform: translate3d(${n}px, ${t}px, 0);` : ""}
`, vl = C.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, _r = C.p`
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
`, xl = C.p`
  ${gt}
  ${yt}
`, bl = C.div`
  position: sticky;
  left: ${Ye + 16}px;
  overflow: hidden;
`, wl = C.div`
  position: absolute;
  height: ${_n}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Sl = C.div`
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
`, Cl = C.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Ml = C.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, kl = C.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Tr = C.div`
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
`, Pr = C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Ar = C.div`
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
`, Ir = C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, Ut = C.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, Kt = C.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, it = C.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Yr = C.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, $l = ({
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
    for (const y of d)
      y <= A && u++;
    return A * he + u * Ae;
  }, [f, g] = ue(null), [x, v] = ue(0), M = ce((A = 400, u = 300) => {
    const b = t.width, _ = 48, T = document.getElementById("react-scheduler");
    if (!T)
      return {
        x: n.x + b + 16,
        y: n.y
      };
    const F = T.scrollLeft, Z = T.scrollTop, Q = T.clientWidth, k = T.clientHeight, D = n.x - F, $ = n.y - Z, B = {
      left: Ye + 16,
      // Avoid left column
      right: Q - 16,
      top: 16,
      bottom: k - 16
    }, I = B.right - (D + b), J = D - B.left, ee = B.bottom - ($ + _), se = $ - B.top;
    let oe, W;
    return I >= A + 16 ? oe = D + b + 16 : J >= A + 16 ? oe = D - A - 16 : I >= J ? (oe = D + b + 16, oe + A > B.right && (oe = B.right - A)) : (oe = D - A - 16, oe < B.left && (oe = B.left)), ee >= u + 16 ? W = $ + _ + 16 : se >= u + 16 ? W = $ - u - 16 : ee >= se ? (W = $ + _ + 16, W + u > B.bottom && (W = B.bottom - u)) : (W = $ - u - 16, W < B.top && (W = B.top)), oe = Math.max(B.left, Math.min(oe, B.right - A)), W = Math.max(B.top, Math.min(W, B.bottom - u)), {
      x: oe + F,
      y: W + Z
    };
  }, [n.x, n.y, t.width]);
  ve(() => {
    s === "dragging" && e && x === 0 ? v(n.x) : s === "idle" && v(0);
  }, [s, e, n.x, x]), ve(() => {
    g(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const p = Ee(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const A = [];
    let u = 0;
    for (const y of i) {
      const b = Math.max(y.data.length, 1);
      if (y.capacity !== void 0 && e.totalPassengers > y.capacity)
        for (let _ = 0; _ < b; _++)
          A.push(u + _);
      u += b;
    }
    return A;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const H = s === "animating", X = uo(e.bgColor ?? ""), z = () => {
    if (!r)
      return "";
    const A = E(r.startDate).format("MMM D, HH:mm"), u = E(r.endDate).format("HH:mm");
    return `${A} - ${u}`;
  };
  return /* @__PURE__ */ V(gl, { children: [
    p.map((A) => /* @__PURE__ */ h(
      Ml,
      {
        style: {
          top: `${l(A)}px`,
          height: `${he}px`
        }
      },
      A
    )),
    r && s === "dragging" && /* @__PURE__ */ h(
      Cl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${he}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ V(Pe, { children: [
      /* @__PURE__ */ h(
        wl,
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
        Sl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (he - 48) / 2}px`
          },
          children: z()
        }
      )
    ] }),
    r && s === "dragging" && c && /* @__PURE__ */ h(
      kl,
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
        Tr,
        {
          style: {
            left: `${A.x}px`,
            top: `${A.y}px`
          },
          children: [
            /* @__PURE__ */ V(Pr, { children: [
              /* @__PURE__ */ h(Ar, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Ir, { children: r.conflicts.map((u, y) => {
              const b = E(r.startDate).format("YYYY-MM-DD"), _ = E(r.endDate).format("YYYY-MM-DD"), T = E(u.event.startDate).format("YYYY-MM-DD"), F = E(u.event.endDate).format("YYYY-MM-DD"), Z = E(u.conflictStart).format("YYYY-MM-DD"), Q = E(u.conflictEnd).format("YYYY-MM-DD"), k = b !== _, D = T !== F, $ = Z !== Q, B = k ? E(r.startDate).format("MMM D, h:mm A") : E(r.startDate).format("h:mm A"), I = k ? E(r.endDate).format("MMM D, h:mm A") : E(r.endDate).format("h:mm A"), J = D ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), ee = D ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), se = $ ? E(u.conflictStart).format("MMM D, h:mm A") : E(u.conflictStart).format("h:mm A"), oe = $ ? E(u.conflictEnd).format("MMM D, h:mm A") : E(u.conflictEnd).format("h:mm A"), W = $ ? "" : E(u.conflictStart).format("MMM D"), j = r.startDate.getTime(), U = r.endDate.getTime(), G = u.event.startDate.getTime(), w = u.event.endDate.getTime(), P = j >= G && j < w, m = U > G && U <= w, O = j <= G && U >= w, R = G <= j && w >= U;
              let Y = !1, S = !1, te = !1, L = !1, K = "";
              return O || R ? (Y = !0, S = !0, te = !0, L = !0, K = `⚠️ ${a.conflicts.changeBoth}`) : P && m ? (Y = !0, S = !0, te = !0, L = !0, K = `⚠️ ${a.conflicts.changeBoth}`) : P ? (Y = !0, L = !0, K = `⚠️ ${a.conflicts.changeStart}`) : m && (S = !0, te = !0, K = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ V(Ut, { children: [
                /* @__PURE__ */ V(Kt, { children: [
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
                  Y ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: B }) : B,
                  " ",
                  a.conflicts.to,
                  " ",
                  S ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
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
                  L ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ee }) : ee
                ] }),
                /* @__PURE__ */ V(Yr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  W && `${W}, `,
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
              ] }, y);
            }) })
          ]
        }
      );
    })(),
    r && o && !r.hasConflict && r.nearbyEvents && r.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const A = M(400, 400);
      return /* @__PURE__ */ V(
        Tr,
        {
          style: {
            left: `${A.x}px`,
            top: `${A.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ V(Pr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Ar, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ V(Ir, { children: [
              (() => {
                const u = r.nearbyEvents.some((T) => T.position === "before"), y = r.nearbyEvents.some((T) => T.position === "after"), b = E(r.startDate).format("h:mm A"), _ = E(r.endDate).format("h:mm A");
                return /* @__PURE__ */ V(Ut, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ V(Kt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ V(it, { style: { fontWeight: 600 }, children: [
                    E(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: b }) : b,
                    " ",
                    a.conflicts.to,
                    " ",
                    y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: _ }) : _
                  ] }),
                  /* @__PURE__ */ h(it, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              r.nearbyEvents.map((u, y) => {
                const b = E(u.event.startDate).format("YYYY-MM-DD"), _ = E(u.event.endDate).format("YYYY-MM-DD"), T = b !== _, F = T ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), Z = T ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), Q = E(u.event.startDate).format("MMM D"), k = Math.floor(u.timeGap / (1e3 * 60 * 60)), D = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), $ = k > 0 ? `${k}h ${D}m` : `${D}m`, B = u.position === "after", I = u.position === "before";
                return /* @__PURE__ */ V(Ut, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ V(Kt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ V(it, { children: [
                    !T && `${Q}: `,
                    B ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: F }) : F,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: Z }) : Z
                  ] }),
                  /* @__PURE__ */ V(Yr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    $,
                    " ",
                    u.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, y);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      yl,
      {
        $isAnimating: H,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: H ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: H ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: H ? void 0 : `translate3d(${c ? x : n.x}px, ${n.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: X
        },
        children: /* @__PURE__ */ h(vl, { children: /* @__PURE__ */ V(bl, { children: [
          /* @__PURE__ */ h(_r, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(_r, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(xl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Dl = $l, El = Wt`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, _l = C.div`
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
  animation: ${El} 1.5s ease-in-out infinite;
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
`, Tl = ({ selectionBox: e, isSelecting: n }) => !e || !n ? null : /* @__PURE__ */ h(
  _l,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Pl = Tl, Al = Wt`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Il = C.div`
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
  animation: ${Al} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, Yl = C.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Ol = C.span`
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
`, Ll = C.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Rl = C.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;
C.div`
  display: none;
`;
C.div`
  display: none;
`;
C.button`
  display: none;
`;
const Nl = C.div`
  display: flex;
  gap: 8px;
`, Or = C.button`
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
`, Hl = ({ selections: e, onConfirm: n, onClear: t }) => {
  var v;
  const o = tt().multiSelect, s = Ee(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const g = s > 0, x = /* @__PURE__ */ V(Il, { $hasConflicts: g, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ V(Yl, { children: [
      /* @__PURE__ */ V(Ol, { $hasConflicts: g, children: [
        e.length,
        " ",
        i
      ] }),
      g && /* @__PURE__ */ V(Ll, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ h(Rl, { children: c })
    ] }),
    /* @__PURE__ */ V(Nl, { children: [
      /* @__PURE__ */ V(Or, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ h(Or, { variant: "primary", $hasConflicts: g, onClick: n, children: g ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return vo(x, document.body);
}, Wl = Hl, Fl = Wt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Bl = C.div`
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
  animation: ${Fl} 0.2s ease-out;
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
`, zl = C.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, jl = C.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Zl = C.button`
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
`, Vl = ({
  selections: e,
  data: n,
  zoom: t,
  startDate: r,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = ue(null), [a, l] = ue({ x: 0, y: 0 }), f = xe(null), g = Ee(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return Te;
      default:
        return Se;
    }
  }, [t]), x = Ee(() => E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), v = Ee(() => e.map((y, b) => {
    let _ = 0, T = !1;
    for (const J of n) {
      if (J.id === y.resourceId) {
        T = !0;
        break;
      }
      _ += Math.max(J.data.length, 1);
    }
    if (!T)
      return null;
    const F = E(y.startDate), Z = E(y.endDate);
    let Q, k;
    switch (t) {
      case 0:
        Q = Math.floor(F.diff(x, "days") / 7), k = Math.max(1, Math.ceil(Z.diff(F, "days") / 7) + 1);
        break;
      case 1:
        Q = F.diff(x, "days"), k = Math.max(1, Z.diff(F, "days") + 1);
        break;
      case 2:
        Q = F.diff(x, "hours"), k = Math.max(1, Z.diff(F, "hours") + 1);
        break;
      default:
        Q = 0, k = 1;
    }
    const D = Q * g;
    let $ = 0;
    for (const J of i)
      J <= _ && $++;
    const B = _ * he + $ * Ae, I = k * g;
    return {
      index: b,
      selection: y,
      x: D,
      y: B,
      width: I,
      height: he
    };
  }), [e, n, t, x, g]), M = (y, b) => {
    const _ = E(y).format("MMM D"), T = E(b).format("MMM D");
    return _ === T ? _ : `${_} - ${T}`;
  }, p = (y) => !y.hasConflict || !y.conflicts ? "" : `⚠️ Conflicts with:
${y.conflicts.map((_) => {
    const T = (_.overlapDuration / 36e5).toFixed(1);
    return `• ${_.event.title} (${T}h overlap)`;
  }).join(`
`)}`, H = ce(
    (y) => {
      let b = 0;
      for (const _ of n) {
        const T = Math.max(_.data.length, 1);
        if (y >= b * he && y < (b + T) * he)
          return {
            resourceId: _.id,
            resourceLabel: _.label
          };
        b += T;
      }
      return null;
    },
    [n]
  ), X = ce(
    (y) => {
      const b = Math.floor(y / g);
      switch (t) {
        case 0:
          return x.add(b * 7, "days").toDate();
        case 1:
          return x.add(b, "days").toDate();
        case 2:
          return x.add(b, "hours").toDate();
        default:
          return x.toDate();
      }
    },
    [t, x, g]
  ), z = ce(
    (y, b) => {
      !s || (y.preventDefault(), y.stopPropagation(), !v[b]) || (f.current = { x: y.clientX, y: y.clientY }, d(b), l({ x: 0, y: 0 }));
    },
    [s, v]
  ), A = ce(
    (y) => {
      if (c === null || !f.current)
        return;
      const b = y.clientX - f.current.x, _ = y.clientY - f.current.y, T = Math.round(b / g) * g, F = Math.round(_ / he) * he;
      l({ x: T, y: F });
    },
    [c, g]
  ), u = ce(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const y = v[c];
    if (!y) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const b = y.x + a.x, _ = y.y + a.y, T = H(_ + he / 2);
    if (!T) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const F = X(b), Z = e[c], Q = Z.endDate.getTime() - Z.startDate.getTime(), k = new Date(F.getTime() + Q);
    s(c, {
      startDate: F,
      endDate: k,
      resourceId: T.resourceId,
      resourceLabel: T.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, v, e, s, H, X]);
  return ve(() => {
    if (c !== null)
      return document.addEventListener("mousemove", A), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", u);
      };
  }, [c, A, u]), /* @__PURE__ */ h(Pe, { children: v.map((y) => {
    if (!y)
      return null;
    const b = y.selection.hasConflict || !1, _ = c === y.index, T = _ ? y.x + a.x : y.x, F = _ ? y.y + a.y : y.y;
    return /* @__PURE__ */ V(
      Bl,
      {
        $hasConflict: b,
        $isDragging: _,
        style: {
          left: T,
          top: F,
          width: y.width,
          height: y.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (Z) => z(Z, y.index),
        children: [
          b && /* @__PURE__ */ h(jl, { title: p(y.selection), children: "⚠️" }),
          /* @__PURE__ */ h(zl, { $hasConflict: b, children: M(y.selection.startDate, y.selection.endDate) }),
          /* @__PURE__ */ h(
            Zl,
            {
              onClick: (Z) => {
                Z.stopPropagation(), o(y.index);
              },
              onMouseDown: (Z) => Z.stopPropagation(),
              title: b ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      y.index
    );
  }) });
}, Gl = Vl, Xl = C.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, Ul = ({ zoom: e, startDate: n }) => {
  const { cols: t } = Xe(), r = Ee(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Ie * 7 : Se, s = E().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = E().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ h(Xl, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, Kl = Ul;
export {
  td as Scheduler
};
