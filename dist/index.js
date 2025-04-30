var yn = Object.defineProperty;
var gn = (e, n, t) => n in e ? yn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var dr = (e, n, t) => (gn(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as E, jsxs as ae, Fragment as Wr } from "react/jsx-runtime";
import * as j from "react";
import He, { useRef as we, useContext as Ie, useLayoutEffect as Zr, useMemo as Ae, useDebugValue as ur, createElement as wn, createContext as Fr, useState as ve, useCallback as xe, useEffect as pe, forwardRef as bn } from "react";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, lt = {}, xn = {
  get exports() {
    return lt;
  },
  set exports(e) {
    lt = e;
  }
}, ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function Cn() {
  if (hr)
    return ne;
  hr = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function w(m) {
    if (typeof m == "object" && m !== null) {
      var D = m.$$typeof;
      switch (D) {
        case e:
          switch (m = m.type, m) {
            case t:
            case o:
            case r:
            case a:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case s:
                case l:
                case f:
                case u:
                case i:
                  return m;
                default:
                  return D;
              }
          }
        case n:
          return D;
      }
    }
  }
  return ne.ContextConsumer = s, ne.ContextProvider = i, ne.Element = e, ne.ForwardRef = l, ne.Fragment = t, ne.Lazy = f, ne.Memo = u, ne.Portal = n, ne.Profiler = o, ne.StrictMode = r, ne.Suspense = a, ne.SuspenseList = d, ne.isAsyncMode = function() {
    return !1;
  }, ne.isConcurrentMode = function() {
    return !1;
  }, ne.isContextConsumer = function(m) {
    return w(m) === s;
  }, ne.isContextProvider = function(m) {
    return w(m) === i;
  }, ne.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ne.isForwardRef = function(m) {
    return w(m) === l;
  }, ne.isFragment = function(m) {
    return w(m) === t;
  }, ne.isLazy = function(m) {
    return w(m) === f;
  }, ne.isMemo = function(m) {
    return w(m) === u;
  }, ne.isPortal = function(m) {
    return w(m) === n;
  }, ne.isProfiler = function(m) {
    return w(m) === o;
  }, ne.isStrictMode = function(m) {
    return w(m) === r;
  }, ne.isSuspense = function(m) {
    return w(m) === a;
  }, ne.isSuspenseList = function(m) {
    return w(m) === d;
  }, ne.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === r || m === a || m === d || m === v || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === u || m.$$typeof === i || m.$$typeof === s || m.$$typeof === l || m.$$typeof === y || m.getModuleId !== void 0);
  }, ne.typeOf = w, ne;
}
var oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function Sn() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, w = !1, m = !1, D = !1, O = !1, A;
    A = Symbol.for("react.module.reference");
    function I(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === t || N === o || O || N === r || N === a || N === d || D || N === v || y || w || m || typeof N == "object" && N !== null && (N.$$typeof === f || N.$$typeof === u || N.$$typeof === i || N.$$typeof === s || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === A || N.getModuleId !== void 0));
    }
    function p(N) {
      if (typeof N == "object" && N !== null) {
        var ee = N.$$typeof;
        switch (ee) {
          case e:
            var le = N.type;
            switch (le) {
              case t:
              case o:
              case r:
              case a:
              case d:
                return le;
              default:
                var re = le && le.$$typeof;
                switch (re) {
                  case c:
                  case s:
                  case l:
                  case f:
                  case u:
                  case i:
                    return re;
                  default:
                    return ee;
                }
            }
          case n:
            return ee;
        }
      }
    }
    var _ = s, T = i, B = e, z = l, H = t, Q = f, te = u, P = n, k = o, x = r, V = a, $ = d, W = !1, L = !1;
    function Z(N) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(N) {
      return L || (L = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function S(N) {
      return p(N) === s;
    }
    function M(N) {
      return p(N) === i;
    }
    function C(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function Y(N) {
      return p(N) === l;
    }
    function h(N) {
      return p(N) === t;
    }
    function X(N) {
      return p(N) === f;
    }
    function b(N) {
      return p(N) === u;
    }
    function J(N) {
      return p(N) === n;
    }
    function U(N) {
      return p(N) === o;
    }
    function K(N) {
      return p(N) === r;
    }
    function g(N) {
      return p(N) === a;
    }
    function ce(N) {
      return p(N) === d;
    }
    oe.ContextConsumer = _, oe.ContextProvider = T, oe.Element = B, oe.ForwardRef = z, oe.Fragment = H, oe.Lazy = Q, oe.Memo = te, oe.Portal = P, oe.Profiler = k, oe.StrictMode = x, oe.Suspense = V, oe.SuspenseList = $, oe.isAsyncMode = Z, oe.isConcurrentMode = G, oe.isContextConsumer = S, oe.isContextProvider = M, oe.isElement = C, oe.isForwardRef = Y, oe.isFragment = h, oe.isLazy = X, oe.isMemo = b, oe.isPortal = J, oe.isProfiler = U, oe.isStrictMode = K, oe.isSuspense = g, oe.isSuspenseList = ce, oe.isValidElementType = I, oe.typeOf = p;
  }()), oe;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Cn() : e.exports = Sn();
})(xn);
function Mn(e) {
  function n(S, M, C, Y, h) {
    for (var X = 0, b = 0, J = 0, U = 0, K, g, ce = 0, N = 0, ee, le = ee = K = 0, re = 0, ue = 0, ot = 0, fe = 0, ht = C.length, st = ht - 1, Me, q = "", de = "", St = "", Mt = "", Pe; re < ht; ) {
      if (g = C.charCodeAt(re), re === st && b + U + J + X !== 0 && (b !== 0 && (g = b === 47 ? 10 : 47), U = J = X = 0, ht++, st++), b + U + J + X === 0) {
        if (re === st && (0 < ue && (q = q.replace(f, "")), 0 < q.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += C.charAt(re);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (q = q.trim(), K = q.charCodeAt(0), ee = 1, fe = ++re; re < ht; ) {
              switch (g = C.charCodeAt(re)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (g = C.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (le = re + 1; le < st; ++le)
                          switch (C.charCodeAt(le)) {
                            case 47:
                              if (g === 42 && C.charCodeAt(le - 1) === 42 && re + 2 !== le) {
                                re = le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                re = le + 1;
                                break e;
                              }
                          }
                        re = le;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; re++ < st && C.charCodeAt(re) !== g; )
                    ;
              }
              if (ee === 0)
                break;
              re++;
            }
            switch (ee = C.substring(fe, re), K === 0 && (K = (q = q.replace(u, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < ue && (q = q.replace(f, "")), g = q.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ue = M;
                    break;
                  default:
                    ue = V;
                }
                if (ee = n(M, ue, ee, g, h + 1), fe = ee.length, 0 < W && (ue = t(V, q, ot), Pe = c(3, ee, ue, M, P, te, fe, g, h, Y), q = ue.join(""), Pe !== void 0 && (fe = (ee = Pe.trim()).length) === 0 && (g = 0, ee = "")), 0 < fe)
                  switch (g) {
                    case 115:
                      q = q.replace(_, s);
                    case 100:
                    case 109:
                    case 45:
                      ee = q + "{" + ee + "}";
                      break;
                    case 107:
                      q = q.replace(O, "$1 $2"), ee = q + "{" + ee + "}", ee = x === 1 || x === 2 && i("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                      break;
                    default:
                      ee = q + ee, Y === 112 && (ee = (de += ee, ""));
                  }
                else
                  ee = "";
                break;
              default:
                ee = n(M, t(M, q, ot), ee, Y, h + 1);
            }
            St += ee, ee = ot = ue = le = K = 0, q = "", g = C.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (q = (0 < ue ? q.replace(f, "") : q).trim(), 1 < (fe = q.length))
              switch (le === 0 && (K = q.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (fe = (q = q.replace(" ", ":")).length), 0 < W && (Pe = c(1, q, M, S, P, te, de.length, Y, h, Y)) !== void 0 && (fe = (q = Pe.trim()).length) === 0 && (q = "\0\0"), K = q.charCodeAt(0), g = q.charCodeAt(1), K) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    Mt += q + C.charAt(re);
                    break;
                  }
                default:
                  q.charCodeAt(fe - 1) !== 58 && (de += o(q, K, g, q.charCodeAt(2)));
              }
            ot = ue = le = K = 0, q = "", g = C.charCodeAt(++re);
        }
      }
      switch (g) {
        case 13:
        case 10:
          b === 47 ? b = 0 : 1 + K === 0 && Y !== 107 && 0 < q.length && (ue = 1, q += "\0"), 0 < W * Z && c(0, q, M, S, P, te, de.length, Y, h, Y), te = 1, P++;
          break;
        case 59:
        case 125:
          if (b + U + J + X === 0) {
            te++;
            break;
          }
        default:
          switch (te++, Me = C.charAt(re), g) {
            case 9:
            case 32:
              if (U + X + b === 0)
                switch (ce) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Me = "";
                    break;
                  default:
                    g !== 32 && (Me = " ");
                }
              break;
            case 0:
              Me = "\\0";
              break;
            case 12:
              Me = "\\f";
              break;
            case 11:
              Me = "\\v";
              break;
            case 38:
              U + b + X === 0 && (ue = ot = 1, Me = "\f" + Me);
              break;
            case 108:
              if (U + b + X + k === 0 && 0 < le)
                switch (re - le) {
                  case 2:
                    ce === 112 && C.charCodeAt(re - 3) === 58 && (k = ce);
                  case 8:
                    N === 111 && (k = N);
                }
              break;
            case 58:
              U + b + X === 0 && (le = re);
              break;
            case 44:
              b + J + U + X === 0 && (ue = 1, Me += "\r");
              break;
            case 34:
            case 39:
              b === 0 && (U = U === g ? 0 : U === 0 ? g : U);
              break;
            case 91:
              U + b + J === 0 && X++;
              break;
            case 93:
              U + b + J === 0 && X--;
              break;
            case 41:
              U + b + X === 0 && J--;
              break;
            case 40:
              if (U + b + X === 0) {
                if (K === 0)
                  switch (2 * ce + 3 * N) {
                    case 533:
                      break;
                    default:
                      K = 1;
                  }
                J++;
              }
              break;
            case 64:
              b + J + U + X + le + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < U + X + J))
                switch (b) {
                  case 0:
                    switch (2 * g + 3 * C.charCodeAt(re + 1)) {
                      case 235:
                        b = 47;
                        break;
                      case 220:
                        fe = re, b = 42;
                    }
                    break;
                  case 42:
                    g === 47 && ce === 42 && fe + 2 !== re && (C.charCodeAt(fe + 2) === 33 && (de += C.substring(fe, re + 1)), Me = "", b = 0);
                }
          }
          b === 0 && (q += Me);
      }
      N = ce, ce = g, re++;
    }
    if (fe = de.length, 0 < fe) {
      if (ue = M, 0 < W && (Pe = c(2, de, ue, S, P, te, fe, Y, h, Y), Pe !== void 0 && (de = Pe).length === 0))
        return Mt + de + St;
      if (de = ue.join(",") + "{" + de + "}", x * k !== 0) {
        switch (x !== 2 || i(de, 2) || (k = 0), k) {
          case 111:
            de = de.replace(I, ":-moz-$1") + de;
            break;
          case 112:
            de = de.replace(A, "::-webkit-input-$1") + de.replace(A, "::-moz-$1") + de.replace(A, ":-ms-input-$1") + de;
        }
        k = 0;
      }
    }
    return Mt + de + St;
  }
  function t(S, M, C) {
    var Y = M.trim().split(m);
    M = Y;
    var h = Y.length, X = S.length;
    switch (X) {
      case 0:
      case 1:
        var b = 0;
        for (S = X === 0 ? "" : S[0] + " "; b < h; ++b)
          M[b] = r(S, M[b], C).trim();
        break;
      default:
        var J = b = 0;
        for (M = []; b < h; ++b)
          for (var U = 0; U < X; ++U)
            M[J++] = r(S[U] + " ", Y[b], C).trim();
    }
    return M;
  }
  function r(S, M, C) {
    var Y = M.charCodeAt(0);
    switch (33 > Y && (Y = (M = M.trim()).charCodeAt(0)), Y) {
      case 38:
        return M.replace(D, "$1" + S.trim());
      case 58:
        return S.trim() + M.replace(D, "$1" + S.trim());
      default:
        if (0 < 1 * C && 0 < M.indexOf("\f"))
          return M.replace(D, (S.charCodeAt(0) === 58 ? "" : "$1") + S.trim());
    }
    return S + M;
  }
  function o(S, M, C, Y) {
    var h = S + ";", X = 2 * M + 3 * C + 4 * Y;
    if (X === 944) {
      S = h.indexOf(":", 9) + 1;
      var b = h.substring(S, h.length - 1).trim();
      return b = h.substring(0, S).trim() + b + ";", x === 1 || x === 2 && i(b, 1) ? "-webkit-" + b + b : b;
    }
    if (x === 0 || x === 2 && !i(h, 1))
      return h;
    switch (X) {
      case 1015:
        return h.charCodeAt(10) === 97 ? "-webkit-" + h + h : h;
      case 951:
        return h.charCodeAt(3) === 116 ? "-webkit-" + h + h : h;
      case 963:
        return h.charCodeAt(5) === 110 ? "-webkit-" + h + h : h;
      case 1009:
        if (h.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + h + h;
      case 978:
        return "-webkit-" + h + "-moz-" + h + h;
      case 1019:
      case 983:
        return "-webkit-" + h + "-moz-" + h + "-ms-" + h + h;
      case 883:
        if (h.charCodeAt(8) === 45)
          return "-webkit-" + h + h;
        if (0 < h.indexOf("image-set(", 11))
          return h.replace(Q, "$1-webkit-$2") + h;
        break;
      case 932:
        if (h.charCodeAt(4) === 45)
          switch (h.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + h.replace("-grow", "") + "-webkit-" + h + "-ms-" + h.replace("grow", "positive") + h;
            case 115:
              return "-webkit-" + h + "-ms-" + h.replace("shrink", "negative") + h;
            case 98:
              return "-webkit-" + h + "-ms-" + h.replace("basis", "preferred-size") + h;
          }
        return "-webkit-" + h + "-ms-" + h + h;
      case 964:
        return "-webkit-" + h + "-ms-flex-" + h + h;
      case 1023:
        if (h.charCodeAt(8) !== 99)
          break;
        return b = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + b + "-webkit-" + h + "-ms-flex-pack" + b + h;
      case 1005:
        return y.test(h) ? h.replace(v, ":-webkit-") + h.replace(v, ":-moz-") + h : h;
      case 1e3:
        switch (b = h.substring(13).trim(), M = b.indexOf("-") + 1, b.charCodeAt(0) + b.charCodeAt(M)) {
          case 226:
            b = h.replace(p, "tb");
            break;
          case 232:
            b = h.replace(p, "tb-rl");
            break;
          case 220:
            b = h.replace(p, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + b + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (M = (h = S).length - 10, b = (h.charCodeAt(M) === 33 ? h.substring(0, M) : h).substring(S.indexOf(":", 7) + 1).trim(), X = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8))
              break;
          case 115:
            h = h.replace(b, "-webkit-" + b) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(b, "-webkit-" + (102 < X ? "inline-" : "") + "box") + ";" + h.replace(b, "-webkit-" + b) + ";" + h.replace(b, "-ms-" + b + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45)
          switch (h.charCodeAt(6)) {
            case 105:
              return b = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + b + "-ms-flex-" + b + h;
            case 115:
              return "-webkit-" + h + "-ms-flex-item-" + h.replace(B, "") + h;
            default:
              return "-webkit-" + h + "-ms-flex-line-pack" + h.replace("align-content", "").replace(B, "") + h;
          }
        break;
      case 973:
      case 989:
        if (h.charCodeAt(3) !== 45 || h.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (H.test(S) === !0)
          return (b = S.substring(S.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(S.replace("stretch", "fill-available"), M, C, Y).replace(":fill-available", ":stretch") : h.replace(b, "-webkit-" + b) + h.replace(b, "-moz-" + b.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, C + Y === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10))
          return h.substring(0, h.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + h;
    }
    return h;
  }
  function i(S, M) {
    var C = S.indexOf(M === 1 ? ":" : "{"), Y = S.substring(0, M !== 3 ? C : 10);
    return C = S.substring(C + 1, S.length - 1), L(M !== 2 ? Y : Y.replace(z, "$1"), C, M);
  }
  function s(S, M) {
    var C = o(M, M.charCodeAt(0), M.charCodeAt(1), M.charCodeAt(2));
    return C !== M + ";" ? C.replace(T, " or ($1)").substring(4) : "(" + M + ")";
  }
  function c(S, M, C, Y, h, X, b, J, U, K) {
    for (var g = 0, ce = M, N; g < W; ++g)
      switch (N = $[g].call(d, S, ce, C, Y, h, X, b, J, U, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = N;
      }
    if (ce !== M)
      return ce;
  }
  function l(S) {
    switch (S) {
      case void 0:
      case null:
        W = $.length = 0;
        break;
      default:
        if (typeof S == "function")
          $[W++] = S;
        else if (typeof S == "object")
          for (var M = 0, C = S.length; M < C; ++M)
            l(S[M]);
        else
          Z = !!S | 0;
    }
    return l;
  }
  function a(S) {
    return S = S.prefix, S !== void 0 && (L = null, S ? typeof S != "function" ? x = 1 : (x = 2, L = S) : x = 0), a;
  }
  function d(S, M) {
    var C = S;
    if (33 > C.charCodeAt(0) && (C = C.trim()), G = C, C = [G], 0 < W) {
      var Y = c(-1, M, C, C, P, te, 0, 0, 0, 0);
      Y !== void 0 && typeof Y == "string" && (M = Y);
    }
    var h = n(V, C, M, 0, 0);
    return 0 < W && (Y = c(-2, h, C, C, P, te, h.length, 0, 0, 0), Y !== void 0 && (h = Y)), G = "", k = 0, te = P = 1, h;
  }
  var u = /^\0+/g, f = /[\0\r\f]/g, v = /: */g, y = /zoo|gra/, w = /([,: ])(transform)/g, m = /,\r+?/g, D = /([\t\r\n ])*\f?&/g, O = /@(k\w+)\s*(\S*)\s*/, A = /::(place)/g, I = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, _ = /\(\s*(.*)\s*\)/g, T = /([\s\S]*?);/g, B = /-self|flex-/g, z = /[^]*?(:[rp][el]a[\w-]+)[^]*/, H = /stretch|:\s*\w+\-(?:conte|avail)/, Q = /([^-])(image-set\()/, te = 1, P = 1, k = 0, x = 1, V = [], $ = [], W = 0, L = null, Z = 0, G = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var _n = {
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
function $n(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var kn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, pr = /* @__PURE__ */ $n(
  function(e) {
    return kn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Dt = {}, En = {
  get exports() {
    return Dt;
  },
  set exports(e) {
    Dt = e;
  }
}, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Tn() {
  if (mr)
    return se;
  mr = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function A(p) {
    if (typeof p == "object" && p !== null) {
      var _ = p.$$typeof;
      switch (_) {
        case n:
          switch (p = p.type, p) {
            case l:
            case a:
            case r:
            case i:
            case o:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case d:
                case y:
                case v:
                case s:
                  return p;
                default:
                  return _;
              }
          }
        case t:
          return _;
      }
    }
  }
  function I(p) {
    return A(p) === a;
  }
  return se.AsyncMode = l, se.ConcurrentMode = a, se.ContextConsumer = c, se.ContextProvider = s, se.Element = n, se.ForwardRef = d, se.Fragment = r, se.Lazy = y, se.Memo = v, se.Portal = t, se.Profiler = i, se.StrictMode = o, se.Suspense = u, se.isAsyncMode = function(p) {
    return I(p) || A(p) === l;
  }, se.isConcurrentMode = I, se.isContextConsumer = function(p) {
    return A(p) === c;
  }, se.isContextProvider = function(p) {
    return A(p) === s;
  }, se.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }, se.isForwardRef = function(p) {
    return A(p) === d;
  }, se.isFragment = function(p) {
    return A(p) === r;
  }, se.isLazy = function(p) {
    return A(p) === y;
  }, se.isMemo = function(p) {
    return A(p) === v;
  }, se.isPortal = function(p) {
    return A(p) === t;
  }, se.isProfiler = function(p) {
    return A(p) === i;
  }, se.isStrictMode = function(p) {
    return A(p) === o;
  }, se.isSuspense = function(p) {
    return A(p) === u;
  }, se.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === a || p === i || p === o || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === y || p.$$typeof === v || p.$$typeof === s || p.$$typeof === c || p.$$typeof === d || p.$$typeof === m || p.$$typeof === D || p.$$typeof === O || p.$$typeof === w);
  }, se.typeOf = A, se;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function Dn() {
  return vr || (vr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function A(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === r || g === a || g === i || g === o || g === u || g === f || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === v || g.$$typeof === s || g.$$typeof === c || g.$$typeof === d || g.$$typeof === m || g.$$typeof === D || g.$$typeof === O || g.$$typeof === w);
    }
    function I(g) {
      if (typeof g == "object" && g !== null) {
        var ce = g.$$typeof;
        switch (ce) {
          case n:
            var N = g.type;
            switch (N) {
              case l:
              case a:
              case r:
              case i:
              case o:
              case u:
                return N;
              default:
                var ee = N && N.$$typeof;
                switch (ee) {
                  case c:
                  case d:
                  case y:
                  case v:
                  case s:
                    return ee;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var p = l, _ = a, T = c, B = s, z = n, H = d, Q = r, te = y, P = v, k = t, x = i, V = o, $ = u, W = !1;
    function L(g) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Z(g) || I(g) === l;
    }
    function Z(g) {
      return I(g) === a;
    }
    function G(g) {
      return I(g) === c;
    }
    function S(g) {
      return I(g) === s;
    }
    function M(g) {
      return typeof g == "object" && g !== null && g.$$typeof === n;
    }
    function C(g) {
      return I(g) === d;
    }
    function Y(g) {
      return I(g) === r;
    }
    function h(g) {
      return I(g) === y;
    }
    function X(g) {
      return I(g) === v;
    }
    function b(g) {
      return I(g) === t;
    }
    function J(g) {
      return I(g) === i;
    }
    function U(g) {
      return I(g) === o;
    }
    function K(g) {
      return I(g) === u;
    }
    ie.AsyncMode = p, ie.ConcurrentMode = _, ie.ContextConsumer = T, ie.ContextProvider = B, ie.Element = z, ie.ForwardRef = H, ie.Fragment = Q, ie.Lazy = te, ie.Memo = P, ie.Portal = k, ie.Profiler = x, ie.StrictMode = V, ie.Suspense = $, ie.isAsyncMode = L, ie.isConcurrentMode = Z, ie.isContextConsumer = G, ie.isContextProvider = S, ie.isElement = M, ie.isForwardRef = C, ie.isFragment = Y, ie.isLazy = h, ie.isMemo = X, ie.isPortal = b, ie.isProfiler = J, ie.isStrictMode = U, ie.isSuspense = K, ie.isValidElementType = A, ie.typeOf = I;
  }()), ie;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Tn() : e.exports = Dn();
})(En);
var Qt = Dt, Pn = {
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
}, On = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, An = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, jr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, er = {};
er[Qt.ForwardRef] = An;
er[Qt.Memo] = jr;
function yr(e) {
  return Qt.isMemo(e) ? jr : er[e.$$typeof] || Pn;
}
var Rn = Object.defineProperty, Ln = Object.getOwnPropertyNames, gr = Object.getOwnPropertySymbols, In = Object.getOwnPropertyDescriptor, Yn = Object.getPrototypeOf, wr = Object.prototype;
function Br(e, n, t) {
  if (typeof n != "string") {
    if (wr) {
      var r = Yn(n);
      r && r !== wr && Br(e, r, t);
    }
    var o = Ln(n);
    gr && (o = o.concat(gr(n)));
    for (var i = yr(e), s = yr(n), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!On[l] && !(t && t[l]) && !(s && s[l]) && !(i && i[l])) {
        var a = In(n, l);
        try {
          Rn(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Nn = Br;
function _e() {
  return (_e = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var br = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Pt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !lt.typeOf(e);
}, gt = Object.freeze([]), Re = Object.freeze({});
function Xe(e) {
  return typeof e == "function";
}
function Ot(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function tr(e) {
  return e && typeof e.styledComponentId == "string";
}
var Je = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", rr = typeof window < "u" && "HTMLElement" in window, Hn = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Wn = {}, Zn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Fn() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ee(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Fn.apply(void 0, [Zn[e]].concat(t)).trim());
}
var jn = function() {
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
      for (var o = this.groupSizes, i = o.length, s = i; t >= s; )
        (s <<= 1) < 0 && Ee(16, "" + t);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var c = i; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), a = 0, d = r.length; a < d; a++)
      this.tag.insertRule(l, r[a]) && (this.groupSizes[t]++, l++);
  }, n.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r;
      this.groupSizes[t] = 0;
      for (var s = o; s < i; s++)
        this.tag.deleteRule(o);
    }
  }, n.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], i = this.indexOfGroup(t), s = i + o, c = i; c < s; c++)
      r += this.tag.getRule(c) + `/*!sc*/
`;
    return r;
  }, e;
}(), vt = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), ct = 1, ft = function(e) {
  if (vt.has(e))
    return vt.get(e);
  for (; wt.has(ct); )
    ct++;
  var n = ct++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Ee(16, "" + n), vt.set(e, n), wt.set(n, e), n;
}, Bn = function(e) {
  return wt.get(e);
}, zn = function(e, n) {
  n >= ct && (ct = n + 1), vt.set(e, n), wt.set(n, e);
}, Vn = "style[" + Je + '][data-styled-version="5.3.8"]', Gn = new RegExp("^" + Je + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Un = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(n, r);
}, Xn = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = t.length; o < i; o++) {
    var s = t[o].trim();
    if (s) {
      var c = s.match(Gn);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (zn(a, l), Un(e, a, c[3]), e.getTag().insertRules(l, r)), r.length = 0;
      } else
        r.push(s);
    }
  }
}, Jn = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, zr = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(Je))
        return d;
    }
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Je, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var s = Jn();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, qn = function() {
  function e(t) {
    var r = this.element = zr(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, s = 0, c = i.length; s < c; s++) {
        var l = i[s];
        if (l.ownerNode === o)
          return l;
      }
      Ee(17);
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
}(), Kn = function() {
  function e(t) {
    var r = this.element = zr(t);
    this.nodes = r.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r), i = this.nodes[t];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Qn = function() {
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
}(), xr = rr, eo = { isServer: !rr, useCSSOMInjection: !Hn }, bt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Re), r === void 0 && (r = {}), this.options = _e({}, eo, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && rr && xr && (xr = !1, function(i) {
      for (var s = document.querySelectorAll(Vn), c = 0, l = s.length; c < l; c++) {
        var a = s[c];
        a && a.getAttribute(Je) !== "active" && (Xn(i, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return ft(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(_e({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, s = r.target, t = o ? new Qn(s) : i ? new qn(s) : new Kn(s), new jn(t)));
    var t, r, o, i, s;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (ft(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(ft(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(ft(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, i = "", s = 0; s < o; s++) {
        var c = Bn(s);
        if (c !== void 0) {
          var l = t.names.get(c), a = r.getGroup(s);
          if (l && a && l.size) {
            var d = Je + ".g" + s + '[id="' + c + '"]', u = "";
            l !== void 0 && l.forEach(function(f) {
              f.length > 0 && (u += f + ",");
            }), i += "" + a + d + '{content:"' + u + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), to = /(a)(d)/gi, Cr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function At(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Cr(n % 52) + t;
  return (Cr(n % 52) + t).replace(to, "$1-$2");
}
var Ye = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Vr = function(e) {
  return Ye(5381, e);
};
function Gr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Xe(t) && !tr(t))
      return !1;
  }
  return !0;
}
var ro = Vr("5.3.8"), no = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Gr(n), this.componentId = t, this.baseHash = Ye(ro, t), this.baseStyle = r, bt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = We(this.rules, n, t, r).join(""), c = At(Ye(this.baseHash, s) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = r(s, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        i.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = Ye(this.baseHash, r.hash), u = "", f = 0; f < a; f++) {
        var v = this.rules[f];
        if (typeof v == "string")
          u += v, process.env.NODE_ENV !== "production" && (d = Ye(d, v + f));
        else if (v) {
          var y = We(v, n, t, r), w = Array.isArray(y) ? y.join("") : y;
          d = Ye(d, w + f), u += w;
        }
      }
      if (u) {
        var m = At(d >>> 0);
        if (!t.hasNameForId(o, m)) {
          var D = r(u, "." + m, void 0, o);
          t.insertRules(o, m, D);
        }
        i.push(m);
      }
    }
    return i.join(" ");
  }, e;
}(), oo = /^\s*\/\/.*$/gm, so = [":", "[", ".", "#"];
function io(e) {
  var n, t, r, o, i = e === void 0 ? Re : e, s = i.options, c = s === void 0 ? Re : s, l = i.plugins, a = l === void 0 ? gt : l, d = new Mn(c), u = [], f = function(w) {
    function m(D) {
      if (D)
        try {
          w(D + "}");
        } catch {
        }
    }
    return function(D, O, A, I, p, _, T, B, z, H) {
      switch (D) {
        case 1:
          if (z === 0 && O.charCodeAt(0) === 64)
            return w(O + ";"), "";
          break;
        case 2:
          if (B === 0)
            return O + "/*|*/";
          break;
        case 3:
          switch (B) {
            case 102:
            case 112:
              return w(A[0] + O), "";
            default:
              return O + (H === 0 ? "/*|*/" : "");
          }
        case -2:
          O.split("/*|*/}").forEach(m);
      }
    };
  }(function(w) {
    u.push(w);
  }), v = function(w, m, D) {
    return m === 0 && so.indexOf(D[t.length]) !== -1 || D.match(o) ? w : "." + n;
  };
  function y(w, m, D, O) {
    O === void 0 && (O = "&");
    var A = w.replace(oo, ""), I = m && D ? D + " " + m + " { " + A + " }" : A;
    return n = O, t = m, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(D || !m ? "" : m, I);
  }
  return d.use([].concat(a, [function(w, m, D) {
    w === 2 && D.length && D[0].lastIndexOf(t) > 0 && (D[0] = D[0].replace(r, v));
  }, f, function(w) {
    if (w === -2) {
      var m = u;
      return u = [], m;
    }
  }])), y.hash = a.length ? a.reduce(function(w, m) {
    return m.name || Ee(15), Ye(w, m.name);
  }, 5381).toString() : "", y;
}
var Ur = He.createContext();
Ur.Consumer;
var Xr = He.createContext(), ao = (Xr.Consumer, new bt()), Rt = io();
function Jr() {
  return Ie(Ur) || ao;
}
function qr() {
  return Ie(Xr) || Rt;
}
var Kr = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Rt);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Ee(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Rt), this.name + n.hash;
  }, e;
}(), co = /([A-Z])/, lo = /([A-Z])/g, uo = /^ms-/, ho = function(e) {
  return "-" + e.toLowerCase();
};
function Sr(e) {
  return co.test(e) ? e.replace(lo, ho).replace(uo, "-ms-") : e;
}
var Mr = function(e) {
  return e == null || e === !1 || e === "";
};
function We(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, c = e.length; s < c; s += 1)
      (o = We(e[s], n, t, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Mr(e))
    return "";
  if (tr(e))
    return "." + e.styledComponentId;
  if (Xe(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var l = e(n);
    return process.env.NODE_ENV !== "production" && lt.isElement(l) && console.warn(Ot(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), We(l, n, t, r);
  }
  var a;
  return e instanceof Kr ? t ? (e.inject(t, r), e.getName(r)) : e : Pt(e) ? function d(u, f) {
    var v, y, w = [];
    for (var m in u)
      u.hasOwnProperty(m) && !Mr(u[m]) && (Array.isArray(u[m]) && u[m].isCss || Xe(u[m]) ? w.push(Sr(m) + ":", u[m], ";") : Pt(u[m]) ? w.push.apply(w, d(u[m], m)) : w.push(Sr(m) + ": " + (v = m, (y = u[m]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || v in _n ? String(y).trim() : y + "px") + ";"));
    return f ? [f + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var _r = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function nr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return Xe(e) || Pt(e) ? _r(We(br(gt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : _r(We(br(e, t)));
}
var $r = /invalid hook call/i, pt = /* @__PURE__ */ new Set(), Qr = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if ($r.test(i))
          o = !1, pt.delete(t);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
            c[l - 1] = arguments[l];
          r.apply(void 0, [i].concat(c));
        }
      }, we(), o && !pt.has(t) && (console.warn(t), pt.add(t));
    } catch (i) {
      $r.test(i.message) && pt.delete(t);
    } finally {
      console.error = r;
    }
  }
}, en = function(e, n, t) {
  return t === void 0 && (t = Re), e.theme !== t.theme && e.theme || n || t.theme;
}, fo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, po = /(^-|-$)/g;
function _t(e) {
  return e.replace(fo, "-").replace(po, "");
}
var or = function(e) {
  return At(Vr(e) >>> 0);
};
function mt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Lt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, mo = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function vo(e, n, t) {
  var r = e[t];
  Lt(n) && Lt(r) ? tn(r, n) : e[t] = n;
}
function tn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, i = t; o < i.length; o++) {
    var s = i[o];
    if (Lt(s))
      for (var c in s)
        mo(c) && vo(e, s[c], c);
  }
  return e;
}
var qe = He.createContext();
qe.Consumer;
function yo(e) {
  var n = Ie(qe), t = Ae(function() {
    return function(r, o) {
      if (!r)
        return Ee(14);
      if (Xe(r)) {
        var i = r(o);
        return process.env.NODE_ENV === "production" || i !== null && !Array.isArray(i) && typeof i == "object" ? i : Ee(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Ee(8) : o ? _e({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? He.createElement(qe.Provider, { value: t }, e.children) : null;
}
var $t = {};
function rn(e, n, t) {
  var r = tr(e), o = !mt(e), i = n.attrs, s = i === void 0 ? gt : i, c = n.componentId, l = c === void 0 ? function(O, A) {
    var I = typeof O != "string" ? "sc" : _t(O);
    $t[I] = ($t[I] || 0) + 1;
    var p = I + "-" + or("5.3.8" + I + $t[I]);
    return A ? A + "-" + p : p;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, d = a === void 0 ? function(O) {
    return mt(O) ? "styled." + O : "Styled(" + Ot(O) + ")";
  }(e) : a, u = n.displayName && n.componentId ? _t(n.displayName) + "-" + n.componentId : n.componentId || l, f = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, v = n.shouldForwardProp;
  r && e.shouldForwardProp && (v = n.shouldForwardProp ? function(O, A, I) {
    return e.shouldForwardProp(O, A, I) && n.shouldForwardProp(O, A, I);
  } : e.shouldForwardProp);
  var y, w = new no(t, u, r ? e.componentStyle : void 0), m = w.isStatic && s.length === 0, D = function(O, A) {
    return function(I, p, _, T) {
      var B = I.attrs, z = I.componentStyle, H = I.defaultProps, Q = I.foldedComponentIds, te = I.shouldForwardProp, P = I.styledComponentId, k = I.target;
      process.env.NODE_ENV !== "production" && ur(P);
      var x = function(Y, h, X) {
        Y === void 0 && (Y = Re);
        var b = _e({}, h, { theme: Y }), J = {};
        return X.forEach(function(U) {
          var K, g, ce, N = U;
          for (K in Xe(N) && (N = N(b)), N)
            b[K] = J[K] = K === "className" ? (g = J[K], ce = N[K], g && ce ? g + " " + ce : g || ce) : N[K];
        }), [b, J];
      }(en(p, Ie(qe), H) || Re, p, B), V = x[0], $ = x[1], W = function(Y, h, X, b) {
        var J = Jr(), U = qr(), K = h ? Y.generateAndInjectStyles(Re, J, U) : Y.generateAndInjectStyles(X, J, U);
        return process.env.NODE_ENV !== "production" && ur(K), process.env.NODE_ENV !== "production" && !h && b && b(K), K;
      }(z, T, V, process.env.NODE_ENV !== "production" ? I.warnTooManyClasses : void 0), L = _, Z = $.$as || p.$as || $.as || p.as || k, G = mt(Z), S = $ !== p ? _e({}, p, {}, $) : p, M = {};
      for (var C in S)
        C[0] !== "$" && C !== "as" && (C === "forwardedAs" ? M.as = S[C] : (te ? te(C, pr, Z) : !G || pr(C)) && (M[C] = S[C]));
      return p.style && $.style !== p.style && (M.style = _e({}, p.style, {}, $.style)), M.className = Array.prototype.concat(Q, P, W !== P ? W : null, p.className, $.className).filter(Boolean).join(" "), M.ref = L, wn(Z, M);
    }(y, O, A, m);
  };
  return D.displayName = d, (y = He.forwardRef(D)).attrs = f, y.componentStyle = w, y.displayName = d, y.shouldForwardProp = v, y.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : gt, y.styledComponentId = u, y.target = r ? e.target : e, y.withComponent = function(O) {
    var A = n.componentId, I = function(_, T) {
      if (_ == null)
        return {};
      var B, z, H = {}, Q = Object.keys(_);
      for (z = 0; z < Q.length; z++)
        B = Q[z], T.indexOf(B) >= 0 || (H[B] = _[B]);
      return H;
    }(n, ["componentId"]), p = A && A + "-" + (mt(O) ? O : _t(Ot(O)));
    return rn(O, _e({}, I, { attrs: f, componentId: p }), t);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = r ? tn({}, e.defaultProps, O) : O;
  } }), process.env.NODE_ENV !== "production" && (Qr(d, u), y.warnTooManyClasses = function(O, A) {
    var I = {}, p = !1;
    return function(_) {
      if (!p && (I[_] = !0, Object.keys(I).length >= 200)) {
        var T = A ? ' with the id of "' + A + '"' : "";
        console.warn("Over 200 classes were generated for component " + O + T + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, I = {};
      }
    };
  }(d, u)), y.toString = function() {
    return "." + y.styledComponentId;
  }, o && Nn(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var It = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Re), !lt.isValidElementType(r))
      return Ee(1, String(r));
    var i = function() {
      return t(r, o, nr.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return n(t, r, _e({}, o, {}, s));
    }, i.attrs = function(s) {
      return n(t, r, _e({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, i;
  }(rn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  It[e] = It(e);
});
var go = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Gr(t), bt.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, i) {
    var s = i(We(this.rules, r, o, i).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, s);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, i) {
    t > 2 && bt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, i);
  }, e;
}();
function wo(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = nr.apply(void 0, [e].concat(t)), i = "sc-global-" + or(JSON.stringify(o)), s = new go(o, i);
  function c(a) {
    var d = Jr(), u = qr(), f = Ie(qe), v = we(d.allocateGSInstance(i)).current;
    return process.env.NODE_ENV !== "production" && He.Children.count(a.children) && console.warn("The global style component " + i + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(y) {
      return typeof y == "string" && y.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(v, a, d, f, u), Zr(function() {
      if (!d.server)
        return l(v, a, d, f, u), function() {
          return s.removeStyles(v, d);
        };
    }, [v, a, d, f, u]), null;
  }
  function l(a, d, u, f, v) {
    if (s.isStatic)
      s.renderStyles(a, Wn, u, v);
    else {
      var y = _e({}, d, { theme: en(d, f, c.defaultProps) });
      s.renderStyles(a, y, u, v);
    }
  }
  return process.env.NODE_ENV !== "production" && Qr(i), He.memo(c);
}
function bo(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = nr.apply(void 0, [e].concat(t)).join(""), i = or(o);
  return new Kr(i, o);
}
var je = function() {
  return Ie(qe);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const F = It, at = "reactSchedulerOutsideWrapper", xo = wo`

  #${at} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${at} *,
 #${at} *:before,
 #${at} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Co = {
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
    accent: "#0A11EB"
  }
}, So = {
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
    accent: "#1798c2"
  }
}, et = `
margin: 0;
padding: 0;
`, nn = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
F.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const be = 50, Te = 24, tt = 16, Ne = 40, Ke = Ne + tt + Te, Le = 84, Ce = 56, Se = 196, ke = 12, ge = 50, Qe = 24, dt = 16, Yt = 40, Mo = Qe + dt + Yt, kr = 24, Er = 52, $e = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter",
    hoursInDay: "400 9px Inter"
  }
}, Ue = 3, _o = 1.6, $o = 4.5, Nt = 12, xt = 24, ko = "reactSchedulerCanvasHeaderWrapper", on = "reactSchedulerCanvasWrapper", Ze = at, Eo = 4, To = 48, Oe = 5, Do = 40, Tr = 8, sr = Te / 2 + 2, sn = tt / 2 + Te + 1, Dr = 2, he = 60;
var Fe = {}, Po = {
  get exports() {
    return Fe;
  },
  set exports(e) {
    Fe = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(me, function() {
    var t = 1e3, r = 6e4, o = 36e5, i = "millisecond", s = "second", c = "minute", l = "hour", a = "day", d = "week", u = "month", f = "quarter", v = "year", y = "date", w = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, D = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, O = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(P) {
      var k = ["th", "st", "nd", "rd"], x = P % 100;
      return "[" + P + (k[(x - 20) % 10] || k[x] || k[0]) + "]";
    } }, A = function(P, k, x) {
      var V = String(P);
      return !V || V.length >= k ? P : "" + Array(k + 1 - V.length).join(x) + P;
    }, I = { s: A, z: function(P) {
      var k = -P.utcOffset(), x = Math.abs(k), V = Math.floor(x / 60), $ = x % 60;
      return (k <= 0 ? "+" : "-") + A(V, 2, "0") + ":" + A($, 2, "0");
    }, m: function P(k, x) {
      if (k.date() < x.date())
        return -P(x, k);
      var V = 12 * (x.year() - k.year()) + (x.month() - k.month()), $ = k.clone().add(V, u), W = x - $ < 0, L = k.clone().add(V + (W ? -1 : 1), u);
      return +(-(V + (x - $) / (W ? $ - L : L - $)) || 0);
    }, a: function(P) {
      return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
    }, p: function(P) {
      return { M: u, y: v, w: d, d: a, D: y, h: l, m: c, s, ms: i, Q: f }[P] || String(P || "").toLowerCase().replace(/s$/, "");
    }, u: function(P) {
      return P === void 0;
    } }, p = "en", _ = {};
    _[p] = O;
    var T = function(P) {
      return P instanceof Q;
    }, B = function P(k, x, V) {
      var $;
      if (!k)
        return p;
      if (typeof k == "string") {
        var W = k.toLowerCase();
        _[W] && ($ = W), x && (_[W] = x, $ = W);
        var L = k.split("-");
        if (!$ && L.length > 1)
          return P(L[0]);
      } else {
        var Z = k.name;
        _[Z] = k, $ = Z;
      }
      return !V && $ && (p = $), $ || !V && p;
    }, z = function(P, k) {
      if (T(P))
        return P.clone();
      var x = typeof k == "object" ? k : {};
      return x.date = P, x.args = arguments, new Q(x);
    }, H = I;
    H.l = B, H.i = T, H.w = function(P, k) {
      return z(P, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
    };
    var Q = function() {
      function P(x) {
        this.$L = B(x.locale, null, !0), this.parse(x);
      }
      var k = P.prototype;
      return k.parse = function(x) {
        this.$d = function(V) {
          var $ = V.date, W = V.utc;
          if ($ === null)
            return new Date(NaN);
          if (H.u($))
            return new Date();
          if ($ instanceof Date)
            return new Date($);
          if (typeof $ == "string" && !/Z$/i.test($)) {
            var L = $.match(m);
            if (L) {
              var Z = L[2] - 1 || 0, G = (L[7] || "0").substring(0, 3);
              return W ? new Date(Date.UTC(L[1], Z, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, G)) : new Date(L[1], Z, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, G);
            }
          }
          return new Date($);
        }(x), this.$x = x.x || {}, this.init();
      }, k.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, k.$utils = function() {
        return H;
      }, k.isValid = function() {
        return this.$d.toString() !== w;
      }, k.isSame = function(x, V) {
        var $ = z(x);
        return this.startOf(V) <= $ && $ <= this.endOf(V);
      }, k.isAfter = function(x, V) {
        return z(x) < this.startOf(V);
      }, k.isBefore = function(x, V) {
        return this.endOf(V) < z(x);
      }, k.$g = function(x, V, $) {
        return H.u(x) ? this[V] : this.set($, x);
      }, k.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, k.valueOf = function() {
        return this.$d.getTime();
      }, k.startOf = function(x, V) {
        var $ = this, W = !!H.u(V) || V, L = H.p(x), Z = function(b, J) {
          var U = H.w($.$u ? Date.UTC($.$y, J, b) : new Date($.$y, J, b), $);
          return W ? U : U.endOf(a);
        }, G = function(b, J) {
          return H.w($.toDate()[b].apply($.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), $);
        }, S = this.$W, M = this.$M, C = this.$D, Y = "set" + (this.$u ? "UTC" : "");
        switch (L) {
          case v:
            return W ? Z(1, 0) : Z(31, 11);
          case u:
            return W ? Z(1, M) : Z(0, M + 1);
          case d:
            var h = this.$locale().weekStart || 0, X = (S < h ? S + 7 : S) - h;
            return Z(W ? C - X : C + (6 - X), M);
          case a:
          case y:
            return G(Y + "Hours", 0);
          case l:
            return G(Y + "Minutes", 1);
          case c:
            return G(Y + "Seconds", 2);
          case s:
            return G(Y + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, k.endOf = function(x) {
        return this.startOf(x, !1);
      }, k.$set = function(x, V) {
        var $, W = H.p(x), L = "set" + (this.$u ? "UTC" : ""), Z = ($ = {}, $[a] = L + "Date", $[y] = L + "Date", $[u] = L + "Month", $[v] = L + "FullYear", $[l] = L + "Hours", $[c] = L + "Minutes", $[s] = L + "Seconds", $[i] = L + "Milliseconds", $)[W], G = W === a ? this.$D + (V - this.$W) : V;
        if (W === u || W === v) {
          var S = this.clone().set(y, 1);
          S.$d[Z](G), S.init(), this.$d = S.set(y, Math.min(this.$D, S.daysInMonth())).$d;
        } else
          Z && this.$d[Z](G);
        return this.init(), this;
      }, k.set = function(x, V) {
        return this.clone().$set(x, V);
      }, k.get = function(x) {
        return this[H.p(x)]();
      }, k.add = function(x, V) {
        var $, W = this;
        x = Number(x);
        var L = H.p(V), Z = function(M) {
          var C = z(W);
          return H.w(C.date(C.date() + Math.round(M * x)), W);
        };
        if (L === u)
          return this.set(u, this.$M + x);
        if (L === v)
          return this.set(v, this.$y + x);
        if (L === a)
          return Z(1);
        if (L === d)
          return Z(7);
        var G = ($ = {}, $[c] = r, $[l] = o, $[s] = t, $)[L] || 1, S = this.$d.getTime() + x * G;
        return H.w(S, this);
      }, k.subtract = function(x, V) {
        return this.add(-1 * x, V);
      }, k.format = function(x) {
        var V = this, $ = this.$locale();
        if (!this.isValid())
          return $.invalidDate || w;
        var W = x || "YYYY-MM-DDTHH:mm:ssZ", L = H.z(this), Z = this.$H, G = this.$m, S = this.$M, M = $.weekdays, C = $.months, Y = function(J, U, K, g) {
          return J && (J[U] || J(V, W)) || K[U].slice(0, g);
        }, h = function(J) {
          return H.s(Z % 12 || 12, J, "0");
        }, X = $.meridiem || function(J, U, K) {
          var g = J < 12 ? "AM" : "PM";
          return K ? g.toLowerCase() : g;
        }, b = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: S + 1, MM: H.s(S + 1, 2, "0"), MMM: Y($.monthsShort, S, C, 3), MMMM: Y(C, S), D: this.$D, DD: H.s(this.$D, 2, "0"), d: String(this.$W), dd: Y($.weekdaysMin, this.$W, M, 2), ddd: Y($.weekdaysShort, this.$W, M, 3), dddd: M[this.$W], H: String(Z), HH: H.s(Z, 2, "0"), h: h(1), hh: h(2), a: X(Z, G, !0), A: X(Z, G, !1), m: String(G), mm: H.s(G, 2, "0"), s: String(this.$s), ss: H.s(this.$s, 2, "0"), SSS: H.s(this.$ms, 3, "0"), Z: L };
        return W.replace(D, function(J, U) {
          return U || b[J] || L.replace(":", "");
        });
      }, k.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, k.diff = function(x, V, $) {
        var W, L = H.p(V), Z = z(x), G = (Z.utcOffset() - this.utcOffset()) * r, S = this - Z, M = H.m(this, Z);
        return M = (W = {}, W[v] = M / 12, W[u] = M, W[f] = M / 3, W[d] = (S - G) / 6048e5, W[a] = (S - G) / 864e5, W[l] = S / o, W[c] = S / r, W[s] = S / t, W)[L] || S, $ ? M : H.a(M);
      }, k.daysInMonth = function() {
        return this.endOf(u).$D;
      }, k.$locale = function() {
        return _[this.$L];
      }, k.locale = function(x, V) {
        if (!x)
          return this.$L;
        var $ = this.clone(), W = B(x, V, !0);
        return W && ($.$L = W), $;
      }, k.clone = function() {
        return H.w(this.$d, this);
      }, k.toDate = function() {
        return new Date(this.valueOf());
      }, k.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, k.toISOString = function() {
        return this.$d.toISOString();
      }, k.toString = function() {
        return this.$d.toUTCString();
      }, P;
    }(), te = Q.prototype;
    return z.prototype = te, [["$ms", i], ["$s", s], ["$m", c], ["$H", l], ["$W", a], ["$M", u], ["$y", v], ["$D", y]].forEach(function(P) {
      te[P[1]] = function(k) {
        return this.$g(k, P[0], P[1]);
      };
    }), z.extend = function(P, k) {
      return P.$i || (P(k, Q, z), P.$i = !0), z;
    }, z.locale = B, z.isDayjs = T, z.unix = function(P) {
      return z(1e3 * P);
    }, z.en = _[p], z.Ls = _, z.p = {}, z;
  });
})(Po);
const R = Fe, Pr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, ir = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, an = (e, n) => R(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), cn = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: ir(e),
  isCurrentDay: e.isSame(R(), "day"),
  year: parseInt(e.format("YYYY"))
}), ar = (e, n, t, r, o, i, s) => {
  e.strokeStyle = s.colors.border, i ? e.fillStyle = s.colors.secondary : o ? e.fillStyle = "transparent" : e.fillStyle = s.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, Ce), e.strokeRect(n + 0.5, t + 0.5, r, Ce);
}, Oo = (e, n, t, r, o) => {
  for (let i = 0; i < n; i++)
    for (let s = 0; s <= t; s++) {
      const c = R(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        s,
        "days"
      ), l = c.isSame(R(), "day");
      ar(
        e,
        s * be,
        i * Ce,
        be,
        ir(c),
        l,
        o
      );
    }
}, Ao = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, Ro = (e, n, t, r, o) => {
  let i = 0, s = -(r.dayOfMonth - 1) * ke;
  for (let c = 0; c <= t; c++) {
    const a = R(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      c,
      "weeks"
    ).isSame(R(), "week");
    for (let d = 0; d < n; d++)
      ar(e, i, d * Ce, Le, !0, a, o);
    i += Le;
  }
  for (let c = 0; c < t; c++) {
    const l = an(r, c) * ke;
    Ao(e, s, n * Ce, o), s += l;
  }
}, Lo = (e, n, t, r, o) => {
  const i = R(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let s = 0; s < n; s++)
    for (let c = 0; c <= t; c++) {
      let l;
      c === Math.floor(t / 2) ? l = R() : c > Math.floor(t / 2) ? l = R().add(c - Math.floor(t / 2), "hours") : l = R().subtract(Math.floor(t / 2) - s, "hours");
      const a = i.isSame(R(), "day") && l.isSame(R(), "hour");
      ar(
        e,
        c * ge + ge / 2 - 0.5,
        // -0.5 to make borders better aligned with hour axis
        s * Ce,
        ge,
        ir(l),
        a,
        o
      );
    }
}, Io = (e, n, t, r, o, i) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(on))
    switch (n) {
      case 0:
        Ro(e, t, r, o, i);
        break;
      case 1:
        Oo(e, t, r, o, i);
        break;
      case 2:
        Lo(e, t, r, o, i);
        break;
    }
};
var Ht = {}, Yo = {
  get exports() {
    return Ht;
  },
  set exports(e) {
    Ht = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(me, function() {
    var t = "week", r = "year";
    return function(o, i, s) {
      var c = i.prototype;
      c.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = s(this).startOf(r).add(1, r).date(a), u = s(this).endOf(t);
          if (d.isBefore(u))
            return 1;
        }
        var f = s(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), v = this.diff(f, t, !0);
        return v < 0 ? s(this).startOf("week").week() : Math.ceil(v);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Yo);
const No = Ht;
var Wt = {}, Ho = {
  get exports() {
    return Wt;
  },
  set exports(e) {
    Wt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(me, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(i) {
        var s = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return i == null ? s : this.add(i - s, "day");
      };
    };
  });
})(Ho);
const Wo = Wt;
var Zt = {}, Zo = {
  get exports() {
    return Zt;
  },
  set exports(e) {
    Zt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(me, function() {
    var t = "day";
    return function(r, o, i) {
      var s = function(a) {
        return a.add(4 - a.isoWeekday(), t);
      }, c = o.prototype;
      c.isoWeekYear = function() {
        return s(this).year();
      }, c.isoWeek = function(a) {
        if (!this.$utils().u(a))
          return this.add(7 * (a - this.isoWeek()), t);
        var d, u, f, v, y = s(this), w = (d = this.isoWeekYear(), u = this.$u, f = (u ? i.utc : i)().year(d).startOf("year"), v = 4 - f.isoWeekday(), f.isoWeekday() > 4 && (v += 7), f.add(v, t));
        return y.diff(w, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, d) {
        var u = this.$utils(), f = !!u.u(d) || d;
        return u.p(a) === "isoweek" ? f ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, d);
      };
    };
  });
})(Zo);
const Fo = Zt;
var Ft = {}, jo = {
  get exports() {
    return Ft;
  },
  set exports(e) {
    Ft = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(me, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(i, s, c, l) {
        var a = o(i), d = o(s), u = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (f ? this.isBefore(d, c) : !this.isAfter(d, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (f ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(jo);
const Bo = Ft;
var jt = {}, zo = {
  get exports() {
    return jt;
  },
  set exports(e) {
    jt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(me, function() {
    var t, r, o = 1e3, i = 6e4, s = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, f = { years: a, months: d, days: c, hours: s, minutes: i, seconds: o, milliseconds: 1, weeks: 6048e5 }, v = function(p) {
      return p instanceof I;
    }, y = function(p, _, T) {
      return new I(p, T, _.$l);
    }, w = function(p) {
      return r.p(p) + "s";
    }, m = function(p) {
      return p < 0;
    }, D = function(p) {
      return m(p) ? Math.ceil(p) : Math.floor(p);
    }, O = function(p) {
      return Math.abs(p);
    }, A = function(p, _) {
      return p ? m(p) ? { negative: !0, format: "" + O(p) + _ } : { negative: !1, format: "" + p + _ } : { negative: !1, format: "" };
    }, I = function() {
      function p(T, B, z) {
        var H = this;
        if (this.$d = {}, this.$l = z, T === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), B)
          return y(T * f[w(B)], this);
        if (typeof T == "number")
          return this.$ms = T, this.parseFromMilliseconds(), this;
        if (typeof T == "object")
          return Object.keys(T).forEach(function(P) {
            H.$d[w(P)] = T[P];
          }), this.calMilliseconds(), this;
        if (typeof T == "string") {
          var Q = T.match(u);
          if (Q) {
            var te = Q.slice(2).map(function(P) {
              return P != null ? Number(P) : 0;
            });
            return this.$d.years = te[0], this.$d.months = te[1], this.$d.weeks = te[2], this.$d.days = te[3], this.$d.hours = te[4], this.$d.minutes = te[5], this.$d.seconds = te[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var _ = p.prototype;
      return _.calMilliseconds = function() {
        var T = this;
        this.$ms = Object.keys(this.$d).reduce(function(B, z) {
          return B + (T.$d[z] || 0) * f[z];
        }, 0);
      }, _.parseFromMilliseconds = function() {
        var T = this.$ms;
        this.$d.years = D(T / a), T %= a, this.$d.months = D(T / d), T %= d, this.$d.days = D(T / c), T %= c, this.$d.hours = D(T / s), T %= s, this.$d.minutes = D(T / i), T %= i, this.$d.seconds = D(T / o), T %= o, this.$d.milliseconds = T;
      }, _.toISOString = function() {
        var T = A(this.$d.years, "Y"), B = A(this.$d.months, "M"), z = +this.$d.days || 0;
        this.$d.weeks && (z += 7 * this.$d.weeks);
        var H = A(z, "D"), Q = A(this.$d.hours, "H"), te = A(this.$d.minutes, "M"), P = this.$d.seconds || 0;
        this.$d.milliseconds && (P += this.$d.milliseconds / 1e3);
        var k = A(P, "S"), x = T.negative || B.negative || H.negative || Q.negative || te.negative || k.negative, V = Q.format || te.format || k.format ? "T" : "", $ = (x ? "-" : "") + "P" + T.format + B.format + H.format + V + Q.format + te.format + k.format;
        return $ === "P" || $ === "-P" ? "P0D" : $;
      }, _.toJSON = function() {
        return this.toISOString();
      }, _.format = function(T) {
        var B = T || "YYYY-MM-DDTHH:mm:ss", z = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return B.replace(l, function(H, Q) {
          return Q || String(z[H]);
        });
      }, _.as = function(T) {
        return this.$ms / f[w(T)];
      }, _.get = function(T) {
        var B = this.$ms, z = w(T);
        return z === "milliseconds" ? B %= 1e3 : B = z === "weeks" ? D(B / f[z]) : this.$d[z], B === 0 ? 0 : B;
      }, _.add = function(T, B, z) {
        var H;
        return H = B ? T * f[w(B)] : v(T) ? T.$ms : y(T, this).$ms, y(this.$ms + H * (z ? -1 : 1), this);
      }, _.subtract = function(T, B) {
        return this.add(T, B, !0);
      }, _.locale = function(T) {
        var B = this.clone();
        return B.$l = T, B;
      }, _.clone = function() {
        return y(this.$ms, this);
      }, _.humanize = function(T) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!T);
      }, _.milliseconds = function() {
        return this.get("milliseconds");
      }, _.asMilliseconds = function() {
        return this.as("milliseconds");
      }, _.seconds = function() {
        return this.get("seconds");
      }, _.asSeconds = function() {
        return this.as("seconds");
      }, _.minutes = function() {
        return this.get("minutes");
      }, _.asMinutes = function() {
        return this.as("minutes");
      }, _.hours = function() {
        return this.get("hours");
      }, _.asHours = function() {
        return this.as("hours");
      }, _.days = function() {
        return this.get("days");
      }, _.asDays = function() {
        return this.as("days");
      }, _.weeks = function() {
        return this.get("weeks");
      }, _.asWeeks = function() {
        return this.as("weeks");
      }, _.months = function() {
        return this.get("months");
      }, _.asMonths = function() {
        return this.as("months");
      }, _.years = function() {
        return this.get("years");
      }, _.asYears = function() {
        return this.as("years");
      }, p;
    }();
    return function(p, _, T) {
      t = T, r = T().$utils(), T.duration = function(H, Q) {
        var te = T.locale();
        return y(H, { $l: te }, Q);
      }, T.isDuration = v;
      var B = _.prototype.add, z = _.prototype.subtract;
      _.prototype.add = function(H, Q) {
        return v(H) && (H = H.asMilliseconds()), B.bind(this)(H, Q);
      }, _.prototype.subtract = function(H, Q) {
        return v(H) && (H = H.asMilliseconds()), z.bind(this)(H, Q);
      };
    };
  });
})(zo);
const Vo = jt;
var Go = "Expected a function", Or = 0 / 0, Uo = "[object Symbol]", Xo = /^\s+|\s+$/g, Jo = /^[-+]0x[0-9a-f]+$/i, qo = /^0b[01]+$/i, Ko = /^0o[0-7]+$/i, Qo = parseInt, es = typeof me == "object" && me && me.Object === Object && me, ts = typeof self == "object" && self && self.Object === Object && self, rs = es || ts || Function("return this")(), ns = Object.prototype, os = ns.toString, ss = Math.max, is = Math.min, kt = function() {
  return rs.Date.now();
};
function as(e, n, t) {
  var r, o, i, s, c, l, a = 0, d = !1, u = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Go);
  n = Ar(n) || 0, Bt(t) && (d = !!t.leading, u = "maxWait" in t, i = u ? ss(Ar(t.maxWait) || 0, n) : i, f = "trailing" in t ? !!t.trailing : f);
  function v(_) {
    var T = r, B = o;
    return r = o = void 0, a = _, s = e.apply(B, T), s;
  }
  function y(_) {
    return a = _, c = setTimeout(D, n), d ? v(_) : s;
  }
  function w(_) {
    var T = _ - l, B = _ - a, z = n - T;
    return u ? is(z, i - B) : z;
  }
  function m(_) {
    var T = _ - l, B = _ - a;
    return l === void 0 || T >= n || T < 0 || u && B >= i;
  }
  function D() {
    var _ = kt();
    if (m(_))
      return O(_);
    c = setTimeout(D, w(_));
  }
  function O(_) {
    return c = void 0, f && r ? v(_) : (r = o = void 0, s);
  }
  function A() {
    c !== void 0 && clearTimeout(c), a = 0, r = l = o = c = void 0;
  }
  function I() {
    return c === void 0 ? s : O(kt());
  }
  function p() {
    var _ = kt(), T = m(_);
    if (r = arguments, o = this, l = _, T) {
      if (c === void 0)
        return y(l);
      if (u)
        return c = setTimeout(D, n), v(l);
    }
    return c === void 0 && (c = setTimeout(D, n)), s;
  }
  return p.cancel = A, p.flush = I, p;
}
function Bt(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function cs(e) {
  return !!e && typeof e == "object";
}
function ls(e) {
  return typeof e == "symbol" || cs(e) && os.call(e) == Uo;
}
function Ar(e) {
  if (typeof e == "number")
    return e;
  if (ls(e))
    return Or;
  if (Bt(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Bt(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Xo, "");
  var t = qo.test(e);
  return t || Ko.test(e) ? Qo(e.slice(2), t ? 2 : 8) : Jo.test(e) ? Or : +e;
}
var Ve = as;
const yt = [0, 1, 2];
var ut = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(ut || {});
const ds = (e) => yt.includes(e), Ge = (e) => {
  var r;
  const t = (((r = document.getElementById(Ze)) == null ? void 0 : r.clientWidth) || 0) - Se;
  switch (e) {
    case 1:
      return Math.ceil(t / be) * Ue;
    case 2:
      return Math.ceil(t / ge) * Ue;
    default:
      return Math.ceil(t / Le) * Ue;
  }
}, us = (e) => Ge(e) / Ue, cr = (e, n) => {
  const t = Ge(n) / 2;
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
}, hs = (e, n) => {
  const t = cr(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, lr = () => {
  var t;
  return ((((t = document.getElementById(Ze)) == null ? void 0 : t.clientWidth) || 0) - Se) * Ue;
}, ln = Fr({
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
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: R(),
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
R.extend(No);
R.extend(Wo);
R.extend(Fo);
R.extend(Bo);
R.extend(Vo);
const fs = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = R(),
  onRangeChange: i,
  onFilterData: s,
  onClearFilterData: c
}) => {
  const { zoom: l, maxRecordsPerPage: a = 50 } = r, [d, u] = ve(l), [f, v] = ve(R()), [y, w] = ve(!1), [m, D] = ve(Ge(d)), O = yt[d] !== yt[yt.length - 1], A = d !== 0, I = Ae(() => hs(f, d), [f, d]), p = cr(f, d).startDate, _ = R(p).dayOfYear(), T = cn(p), B = we(null), [z, H] = ve([{ x: 0, y: 0 }]), Q = xe(
    (C, Y = "auto") => {
      var X, b, J, U;
      const h = lr();
      switch (C) {
        case "back":
          return (X = B.current) == null ? void 0 : X.scrollTo({
            behavior: Y,
            left: h / 3
          });
        case "forward":
          return (b = B.current) == null ? void 0 : b.scrollTo({
            behavior: Y,
            left: h / 3
          });
        case "middle": {
          const K = h / Ue / 4;
          return (J = B.current) == null ? void 0 : J.scrollTo({
            behavior: Y,
            left: h / 2 - K
          });
        }
        default:
          return (U = B.current) == null ? void 0 : U.scrollTo({
            behavior: Y,
            left: h / 2
          });
      }
    },
    []
  ), te = (C) => {
    H(C);
  }, P = xe(
    (C) => {
      const Y = us(d);
      let h;
      switch (d) {
        case 0:
          h = Y * 7;
          break;
        case 1:
          h = Y;
          break;
        case 2:
          h = Math.ceil(Y / xt);
          break;
      }
      Ve(() => {
        switch (C) {
          case "back":
            v((b) => b.subtract(h, "days"));
            break;
          case "forward":
            v((b) => b.add(h, "days"));
            break;
          case "middle":
            v(R());
            break;
        }
        i == null || i(I);
      }, 300)();
    },
    [i, I, d]
  );
  pe(() => {
    B.current = document.getElementById(Ze), D(Ge(d));
  }, [d]), pe(() => {
    const C = () => D(Ge(d));
    return window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, [d]), pe(() => {
    i == null || i(I);
  }, [i, I]), pe(() => {
    w(!1);
  }, [o]), pe(() => {
    y || (Q("middle"), w(!0), v(o));
  }, [o, y, Q]);
  const k = () => {
    t || (v(
      (C) => d === 2 ? C.add(kr, "hours") : C.add(Dr, "weeks")
    ), i == null || i(I));
  }, x = xe(() => {
    t || (P("forward"), Ve(() => {
      Q("forward");
    }, 500)());
  }, [t, P, Q]), V = () => {
    t || (v(
      (C) => d === 2 ? C.subtract(kr, "hours") : C.subtract(Dr, "weeks")
    ), i == null || i(I));
  }, $ = xe(() => {
    !y || t || (P("back"), Ve(() => {
      Q("back");
    }, 500)());
  }, [y, t, P, Q]), W = xe(() => {
    t || (P("middle"), Ve(() => {
      Q("middle", "smooth");
    }, 300)());
  }, [t, P, Q]), L = () => G(d + 1), Z = () => G(d - 1), G = (C) => {
    ds(C) && (u(C), D(Ge(C)), i == null || i(I));
  }, S = () => s == null ? void 0 : s(), { Provider: M } = ln;
  return /* @__PURE__ */ E(
    M,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: k,
        handleScrollNext: x,
        handleGoPrev: V,
        handleScrollPrev: $,
        handleGoToday: W,
        zoomIn: L,
        zoomOut: Z,
        zoom: d,
        isNextZoom: O,
        isPrevZoom: A,
        date: f,
        isLoading: t,
        cols: m,
        startDate: T,
        dayOfYear: _,
        handleFilterData: S,
        tilesCoords: z,
        updateTilesCoords: te,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: n
    }
  );
}, rt = () => Ie(ln), dn = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, ps = F.div`
  height: calc(100vh - headerHeight);
`, ms = F.div`
  position: relative;
`, vs = F.canvas``;
F.canvas``;
const Rr = F.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, ys = bn(function({ zoom: n, rows: t, data: r, onTileClick: o }, i) {
  const s = we(!1), { handleScrollNext: c, handleScrollPrev: l, date: a, isLoading: d, cols: u, startDate: f } = rt(), v = we(null), y = we(null), w = we(null), m = je(), D = xe(
    (O) => {
      const A = lr(), I = t * Ce + 1;
      dn(O, A, I), Io(O, n, t, u, f, m);
    },
    [u, f, t, n, m]
  );
  return pe(() => {
    if (!v.current)
      return;
    const O = v.current.getContext("2d");
    if (!O)
      return;
    const A = () => D(O);
    return window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, [D]), pe(() => {
    const O = v.current;
    if (!O)
      return;
    O.style.letterSpacing = "1px";
    const A = O.getContext("2d");
    A && D(A);
  }, [a, t, n, D]), pe(() => {
    if (!y.current)
      return;
    const O = new IntersectionObserver(
      (A) => {
        A[0].isIntersecting && !s.current && (s.current = !0, c(), setTimeout(() => {
          s.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Ze) }
    );
    return O.observe(y.current), () => {
      O.disconnect();
    };
  }, [c]), pe(() => {
    if (!w.current)
      return;
    const O = new IntersectionObserver(
      (A) => {
        A[0].isIntersecting && !s.current && (s.current = !0, l(), setTimeout(() => {
          s.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Ze),
        rootMargin: `0px 0px 0px -${Se}px`
      }
    );
    return O.observe(w.current), () => {
      O.disconnect();
    };
  }, [l]), /* @__PURE__ */ E(ps, { id: on, children: /* @__PURE__ */ ae(ms, { ref: i, children: [
    /* @__PURE__ */ E(Rr, { position: "left", ref: w }),
    /* @__PURE__ */ E(Nr, { isLoading: d, position: "left" }),
    /* @__PURE__ */ E(vs, { ref: v }),
    /* @__PURE__ */ E(ga, { data: r, zoom: n, onTileClick: o }),
    /* @__PURE__ */ E(Rr, { ref: y, position: "right" }),
    /* @__PURE__ */ E(Nr, { isLoading: d, position: "right" })
  ] }) });
}), un = (e) => {
  const n = R.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, hn = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const i = Math.floor(n / he);
    t += o.hours + i, r += n % he, r >= he && (t++, r -= he);
  }), { hours: t, minutes: r };
}, fn = (e, n) => {
  let t = Tr;
  switch (n) {
    case 0:
      t = Do;
      break;
    case 1:
      t = Tr;
      break;
    case 2:
      t = 1;
      break;
  }
  const r = () => {
    let i = t - e.hours - 1, s = he - e.minutes;
    return s === he && (i++, s = 0), { hours: Math.max(0, i), minutes: i < 0 ? 0 : s };
  }, o = () => {
    const i = e.hours - t, s = e.minutes;
    return { hours: Math.max(0, i), minutes: i < 0 ? 0 : s };
  };
  return {
    free: r(),
    overtime: o()
  };
}, gs = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const d = R(a.startDate).isoWeek(), u = R(a.startDate).isoWeekday(), f = R(a.endDate).isoWeek(), v = R(a.endDate).isoWeekday(), { hours: y, minutes: w } = un(a.occupancy);
    if (r === d) {
      const m = (Oe + 1 - u) * y, D = (Oe + 1 - u) * w;
      return { hours: Math.max(0, m), minutes: D };
    } else if (r === f) {
      const m = v > Oe ? Oe * y : v * y, D = v > Oe ? Oe * w : v * w;
      return { hours: m, minutes: D };
    } else if (R(n).isBetween(a.startDate, a.endDate))
      return { hours: Oe * y, minutes: Oe * w };
    return { hours: 0, minutes: 0 };
  }), { hours: i, minutes: s } = hn(o), { free: c, overtime: l } = fn({ hours: i, minutes: s }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, s) },
    free: c,
    overtime: l
  };
}, ws = (e, n, t, r) => {
  const o = n.isoWeekday(), i = e.map((d) => {
    const { hours: u, minutes: f } = un(d.occupancy);
    return o <= (r ? 7 : 5) ? { hours: u, minutes: f } : { hours: 0, minutes: 0 };
  }), { hours: s, minutes: c } = hn(i), { free: l, overtime: a } = fn({ hours: s, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, bs = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const l = R(c.startDate).hour(), a = R(c.endDate).hour(), d = n.hour(), u = R(c.endDate).minute(), f = R(c.startDate).minute();
    l < d && a > d ? t += he : l === d && a === d && f && u ? t += u ? u - f : he - f : l === d && a >= d ? t += f ? he - f : he : a === d && u && (t += u);
  });
  const r = Math.floor(t / he), o = t % he, i = r || o ? 0 : 1, s = r ? 0 : o ? he - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: i, minutes: s },
    overtime: { hours: 0, minutes: 0 }
  };
}, xs = (e, n, t, r, o = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const i = e.flat(2).filter((s) => r === 1 ? R(t).isBetween(s.startDate, s.endDate, "day", "[]") : r === 2 ? R(t).isBetween(s.startDate, s.endDate, "hour", "[]") : R(s.startDate).isBetween(
    R(t),
    R(t).add(6, "days"),
    "day",
    "[]"
  ) || R(t).isBetween(R(s.startDate), R(s.endDate), "day", "[]"));
  switch (r) {
    case 1:
      return ws(i, t, r, o);
    case 2:
      return bs(i, t);
    default:
      return gs(i, t, r);
  }
}, Cs = (e, n, t, r, o, i, s = !1) => {
  let c = "weeks", l;
  switch (i) {
    case 0:
      c = "weeks", l = Le;
      break;
    case 1:
      c = "days", l = be;
      break;
    case 2:
      c = "hours", l = ge;
      break;
  }
  const a = Math.ceil(i === 2 ? (t.x - 0.5 * l) / l : t.x / l), d = R(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), u = Math.ceil(t.y / Ce), f = r.findIndex((m, D, O) => O.slice(0, D + 1).reduce((I, p) => I + p, 0) >= u), v = i === 2 ? (a + 1) * l : a * l, y = (u - 1) * Ce + Ce, w = xs(
    o[f],
    f,
    d,
    i,
    s
  );
  return {
    coords: { x: v, y },
    resourceIndex: f,
    disposition: w,
    reservationData: {
      startTime: R(e.startDate).format("hh:mm A"),
      client: e.subtitle ?? "",
      eventName: e.title,
      reservationType: e.eventType,
      bookingNumber: e.bookingNumber,
      endDate: e.eventType == ut.Tour ? R(e.endDate).format("hh:mm A") : void 0,
      groupName: e.groupName
    }
  };
}, Ss = (e, n, t, r) => {
  const o = [];
  let i = 0, s = [], c = 0;
  return n.length > r ? (n.forEach((l, a) => {
    const d = { id: e[a].id, label: e[a].label, data: l };
    c >= r && (o.push(s), i += s.length, s = [], c = 0), c++, s.push(d);
  }), t.slice(i).length <= r && (s = [], n.slice(i).forEach((l, a) => {
    const d = {
      id: e[a + i].id,
      label: e[a + i].label,
      data: l
    };
    s.push(d), a === n.length - i - 1 && o.push(s);
  })), o) : (n.forEach((l, a) => {
    const d = { id: e[a].id, label: e[a].label, data: l };
    s.push(d);
  }), o.push(s), o);
};
var zt = {}, Ms = {
  get exports() {
    return zt;
  },
  set exports(e) {
    zt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(me, function() {
    return function(t, r) {
      r.prototype.isSameOrBefore = function(o, i) {
        return this.isSame(o, i) || this.isBefore(o, i);
      };
    };
  });
})(Ms);
const _s = zt;
var Vt = {}, $s = {
  get exports() {
    return Vt;
  },
  set exports(e) {
    Vt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(me, function() {
    return function(t, r) {
      r.prototype.isSameOrAfter = function(o, i) {
        return this.isSame(o, i) || this.isAfter(o, i);
      };
    };
  });
})($s);
const ks = Vt, Es = (e) => {
  const n = [];
  for (const t of e) {
    let r = !1;
    if (n.length)
      for (const o of n) {
        let i = !1;
        for (let s = 0; s < o.length; s++) {
          const c = R(t.startDate).startOf("day"), l = R(t.endDate).startOf("day"), a = R(o[s].startDate).startOf("day"), d = R(o[s].endDate).startOf("day");
          if (c.isBetween(a, d, null, "[]") || l.isBetween(a, d, null, "[]") || c.isBefore(a, "minute") && l.isAfter(d, "minute") || c.isAfter(a, "minute") && l.isBefore(d, "minute")) {
            i = !0;
            break;
          }
        }
        if (!i) {
          o.push(t), r = !0;
          break;
        }
      }
    r || n.push([t]);
  }
  return n;
};
R.extend(_s);
R.extend(ks);
const Ts = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, i) => {
    const s = [...i.data].sort((l, a) => {
      const d = R(l.startDate), u = R(a.startDate), f = d.startOf("day").diff(u.startOf("day"), "day");
      return f !== 0 ? f : d.diff(u);
    }), c = Es(s);
    return o[0].push(c), o[1].push(Math.max(c.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, Ds = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Ps = (e) => {
  const { recordsThreshold: n } = rt(), [t, r] = ve(0), [o, i] = ve(0), s = we(null);
  pe(() => {
    s.current = document.getElementById(Ze);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = Ae(() => Ts(e), [e]), a = Ae(
    () => Ss(e, c, l, n),
    [e, c, n, l]
  ), d = xe(() => {
    a[o].length && s.current && (s.current.scroll({ top: 0 }), r((m) => m + a[Math.max(o, 0)].length), i((m) => Math.min(m + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = xe(() => {
    a[o].length && (r((m) => Math.max(m - a[o - 1].length, 0)), i((m) => Math.max(m - 1, 0)));
  }, [o, a]), f = xe(() => {
    r(0), i(0);
  }, []), v = t + a[o].length, y = Ae(
    () => l.slice(t, v),
    [v, l, t]
  ), w = Ae(
    () => c.slice(t, v),
    [v, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: w,
    rowsPerItem: y,
    totalRowsPerPage: Ds(a[o]),
    next: d,
    previous: u,
    reset: f
  };
};
var Gt = {}, Os = {
  get exports() {
    return Gt;
  },
  set exports(e) {
    Gt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(me, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(Os);
const As = Gt;
var Ut = {}, Rs = {
  get exports() {
    return Ut;
  },
  set exports(e) {
    Ut = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Fe);
  })(me, function(t) {
    function r(f) {
      return f && typeof f == "object" && "default" in f ? f : { default: f };
    }
    var o = r(t);
    function i(f) {
      return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
    }
    function s(f, v, y) {
      var w = f + " ";
      switch (y) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return w + (i(f) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return w + (i(f) ? "godziny" : "godzin");
        case "MM":
          return w + (i(f) ? "miesiące" : "miesięcy");
        case "yy":
          return w + (i(f) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(f, v) {
      return a.test(v) ? c[f.month()] : l[f.month()];
    };
    d.s = l, d.f = c;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(f) {
      return f + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: s, mm: s, h: s, hh: s, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: s, y: "rok", yy: s }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(u, null, !0), u;
  });
})(Rs);
const Ls = Ut;
var Xt = {}, Is = {
  get exports() {
    return Xt;
  },
  set exports(e) {
    Xt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Fe);
  })(me, function(t) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = r(t), i = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function s(l, a, d) {
      var u = i[d];
      return Array.isArray(u) && (u = u[a ? 0 : 1]), u.replace("%d", l);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s, m: s, mm: s, h: s, hh: s, d: s, dd: s, M: s, MM: s, y: s, yy: s } };
    return o.default.locale(c, null, !0), c;
  });
})(Is);
const Ys = Xt;
var Jt = {}, Ns = {
  get exports() {
    return Jt;
  },
  set exports(e) {
    Jt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Fe);
  })(me, function(t) {
    function r(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = r(t), i = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), s = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(d, u) {
      return c.test(u) ? i[d.month()] : s[d.month()];
    };
    l.s = s, l.f = i;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(Ns);
const Hs = Jt;
var qt = {}, Ws = {
  get exports() {
    return qt;
  },
  set exports(e) {
    qt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Fe);
  })(me, function(t) {
    function r(s) {
      return s && typeof s == "object" && "default" in s ? s : { default: s };
    }
    var o = r(t), i = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(s) {
      return s + "º";
    } };
    return o.default.locale(i, null, !0), i;
  });
})(Ws);
const Zs = qt, Fs = {
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
  week: "tydzień"
}, js = {
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
  week: "week"
}, Bs = {
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
  week: "Woche"
}, zs = {
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
  week: "savaitė"
}, Vs = {
  feelingEmpty: "Cargando...",
  free: "Libre",
  loadNext: "Siguiente",
  loadPrevious: "Anterior",
  over: "terminado",
  taken: "Transcurrido",
  topbar: {
    filters: "Filtros",
    next: "siguiente",
    prev: "anterior",
    today: "Hoy",
    view: "Vista"
  },
  search: "buscar",
  week: "semana"
}, Gs = [
  {
    id: "en",
    lang: js,
    translateCode: "en-GB",
    dayjsTranslations: As
  },
  {
    id: "pl",
    lang: Fs,
    translateCode: "pl-PL",
    dayjsTranslations: Ls
  },
  {
    id: "es",
    lang: Vs,
    translateCode: "es-ES",
    dayjsTranslations: Zs
  },
  {
    id: "lt",
    lang: zs,
    translateCode: "lt-LT",
    dayjsTranslations: Hs
  },
  {
    id: "de",
    lang: Bs,
    translateCode: "de-DE",
    dayjsTranslations: Ys
  }
];
class Us {
  constructor() {
    dr(this, "locales", Gs);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const Ct = new Us(), pn = Fr({
  localesData: Ct.getLocales(),
  currentLocale: Ct.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Xs = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = ve("en"), i = Ct.getLocales(), s = xe(() => {
    const u = i.find((f) => f.id === r);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && R.locale(u.dayjsTranslations), u || i[0];
  }, [r, i]), [c, l] = ve(s()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  pe(() => {
    t == null || t.forEach((u) => {
      i.find((v) => v.id === u.id) || Ct.addLocales(u);
    });
  }, [i, t]), pe(() => {
    const u = localStorage.getItem("locale"), f = n ?? u ?? "en";
    localStorage.setItem("locale", f), o(f), l(s());
  }, [s, n]);
  const { Provider: d } = pn;
  return /* @__PURE__ */ E(d, { value: { currentLocale: c, localesData: i, setCurrentLocale: a }, children: e });
}, nt = () => Ie(pn).currentLocale.lang, Js = (e) => /* @__PURE__ */ j.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ j.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ j.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ j.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ j.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ j.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ j.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ j.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ j.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), qs = F.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Ks = F.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Qs = ({ onTileClick: e }) => {
  const { feelingEmpty: n } = nt();
  return /* @__PURE__ */ ae(qs, { onClick: e, children: [
    /* @__PURE__ */ E(Js, {}),
    /* @__PURE__ */ E(Ks, { children: n })
  ] });
}, ei = F.div`
  position: relative;
  display: flex;
`, ti = F.div`
  position: relative;
  margin-left: ${Se};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ri = F.div`
  width: calc(${({ width: e }) => e}px - ${Se}px);
  position: sticky;
  top: 0;
  height: 100%;
  left: ${Se}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Et = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  },
  reservationData: { startTime: "", client: "", eventName: "", reservationType: ut.Tour, bookingNumber: "" }
}, ni = ({
  data: e,
  onTileClick: n,
  onItemClick: t,
  toggleTheme: r,
  topBarWidth: o
}) => {
  const [i, s] = ve(Et), [c, l] = ve(e), [a, d] = ve(!1), [u, f] = ve(""), {
    zoom: v,
    startDate: y,
    config: { includeTakenHoursOnWeekendsInDayView: w, showTooltip: m, showThemeToggle: D }
  } = rt(), O = we(null), {
    page: A,
    projectsPerPerson: I,
    totalRowsPerPage: p,
    rowsPerItem: _,
    currentPageNum: T,
    pagesAmount: B,
    next: z,
    previous: H,
    reset: Q
  } = Ps(c), te = we(
    Ve(
      (L, Z, G, S, M, C) => {
        if (!O.current)
          return;
        const Y = x(L);
        if (!Y) {
          d(!1), s(Et);
          return;
        }
        const h = k(Y, Z), { left: X, top: b } = O.current.getBoundingClientRect(), J = { x: L.clientX - X, y: L.clientY - b }, {
          coords: { x: U, y: K },
          resourceIndex: g,
          disposition: ce,
          reservationData: { startTime: N, client: ee, eventName: le, endDate: re, groupName: ue }
        } = Cs(
          h,
          G,
          J,
          S,
          M,
          C,
          w
        );
        s({
          coords: { x: U, y: K },
          resourceIndex: g,
          disposition: ce,
          reservationData: { startTime: N, client: ee, eventName: le, reservationType: h.eventType, bookingNumber: Y, endDate: re, groupName: ue }
        }), d(!0);
      },
      300
    )
  ), P = we(
    Ve((L, Z) => {
      Q(), l(
        L.map((G) => ({
          ...G,
          data: G.data.filter((S) => {
            const { title: M, description: C, subtitle: Y } = S;
            return (M == null ? void 0 : M.toLowerCase().includes(Z.toLowerCase())) || (Y == null ? void 0 : Y.toLowerCase().includes(Z.toLowerCase())) || (C == null ? void 0 : C.toLowerCase().includes(Z.toLowerCase()));
          })
        })).filter((G) => G.data.length > 0)
      );
    }, 500)
  ), k = (L, Z) => {
    if (L)
      return Z.flatMap((G) => G.data).find((G) => G.description ? G.description.includes(L) : !1);
  }, x = (L) => {
    if (!L.target)
      return;
    const Z = L.target.closest("button");
    if (!Z)
      return;
    const G = Z.querySelectorAll("p");
    if (G.length < 3)
      return;
    const S = G[2].textContent;
    if (S)
      return V(S);
  }, V = (L) => {
    const Z = L.match(/Booking:\s*(.+)/);
    return Z ? Z[1] : null;
  }, $ = (L) => {
    const Z = L.target.value;
    f(Z), P.current.cancel(), P.current(e, Z);
  }, W = xe(() => {
    te.current.cancel(), d(!1), s(Et);
  }, []);
  return pe(() => {
    const L = (G) => te.current(G, e, y, _, I, v), Z = O.current;
    if (Z)
      return Z.addEventListener("mousemove", L), Z.addEventListener("mouseleave", W), () => {
        Z.removeEventListener("mousemove", L), Z.removeEventListener("mouseleave", W);
      };
  }, [
    te,
    W,
    I,
    _,
    y,
    v,
    e
  ]), pe(() => {
    u || l(e);
  }, [e, u]), /* @__PURE__ */ ae(ei, { children: [
    /* @__PURE__ */ E(
      Bi,
      {
        data: A,
        pageNum: T,
        pagesAmount: B,
        rows: _,
        onLoadNext: z,
        onLoadPrevious: H,
        searchInputValue: u,
        onSearchInputChange: $,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ ae(ti, { children: [
      /* @__PURE__ */ E(
        ca,
        {
          zoom: v,
          topBarWidth: o,
          showThemeToggle: D,
          toggleTheme: r
        }
      ),
      e.length ? /* @__PURE__ */ E(
        ys,
        {
          data: A,
          zoom: v,
          rows: p,
          ref: O,
          onTileClick: n
        }
      ) : /* @__PURE__ */ E(ri, { width: o, children: /* @__PURE__ */ E(Qs, {}) }),
      m && a && (i == null ? void 0 : i.resourceIndex) > -1 && /* @__PURE__ */ E(Sa, { tooltipData: i, zoom: v })
    ] })
  ] });
}, mn = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, oi = F.div`
  width: calc(${({ width: e }) => e}px - ${Se}px);
  position: sticky;
  top: 0;
  left: ${Se}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, si = F.div`
  display: flex;
  gap: 1.875rem;
`, Lr = F.button`
  ${mn};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, ii = F.button`
  ${mn};
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
`, ai = F.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ci = F.div`
  display: flex;
`, li = F.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, di = ({ width: e, showThemeToggle: n, toggleTheme: t }) => {
  const { topbar: r } = nt(), {
    data: o,
    config: i,
    handleGoNext: s,
    handleGoPrev: c,
    handleGoToday: l,
    zoomIn: a,
    zoomOut: d,
    isNextZoom: u,
    isPrevZoom: f,
    handleFilterData: v,
    onClearFilterData: y
  } = rt(), { colors: w } = je(), { filterButtonState: m = -1 } = i, D = (O) => {
    O.stopPropagation(), y == null || y();
  };
  return /* @__PURE__ */ ae(oi, { width: e, children: [
    /* @__PURE__ */ E(ci, { children: m >= 0 && /* @__PURE__ */ ae(
      Tt,
      {
        variant: m ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: v,
        children: [
          r.filters,
          !!m && /* @__PURE__ */ E("span", { onClick: D, children: /* @__PURE__ */ E(ye, { iconName: "close", height: "16", width: "16", fill: w.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ ae(si, { children: [
      /* @__PURE__ */ ae(Lr, { disabled: !(o != null && o.length), onClick: c, children: [
        /* @__PURE__ */ E(ye, { iconName: "arrowLeft", height: "15", fill: w.textPrimary }),
        r.prev
      ] }),
      /* @__PURE__ */ E(ii, { onClick: l, children: r.today }),
      /* @__PURE__ */ ae(Lr, { disabled: !(o != null && o.length), onClick: s, children: [
        r.next,
        /* @__PURE__ */ E(ye, { iconName: "arrowRight", height: "15", fill: w.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ ae(li, { children: [
      n && /* @__PURE__ */ E(ka, { toggleTheme: t }),
      /* @__PURE__ */ ae(ai, { children: [
        r.view,
        /* @__PURE__ */ E(
          Tt,
          {
            isDisabled: !f,
            onClick: d,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ E(
          Tt,
          {
            isDisabled: !u,
            onClick: a,
            isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, ui = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), hi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), fi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), pi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), mi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), vi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), yi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), gi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), wi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), bi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), xi = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ci = (e) => /* @__PURE__ */ j.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Si = (e) => /* @__PURE__ */ j.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Mi = (e) => /* @__PURE__ */ j.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ j.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ j.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ j.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ j.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ j.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ j.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ j.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ j.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), _i = {
  add: ui,
  subtract: hi,
  filter: fi,
  arrowLeft: pi,
  arrowRight: mi,
  defaultAvatar: vi,
  calendarWarning: yi,
  calendarFree: gi,
  arrowDown: bi,
  arrowUp: wi,
  search: xi,
  close: Ci,
  moon: Si,
  sun: Mi
}, ye = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: i } = je(), s = _i[e];
  return s ? /* @__PURE__ */ E(
    s,
    {
      style: { transition: ".5s ease" },
      fill: r ?? i.accent,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, $i = (e, n, t) => ({
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
})[n], ki = F.button`
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
  ${({ theme: e, variant: n, disabled: t }) => $i(e, n, t)}
`, Tt = ({
  iconName: e,
  width: n,
  height: t,
  fill: r,
  className: o,
  onClick: i,
  children: s,
  isFullRounded: c,
  isDisabled: l,
  variant: a = "outlined"
}) => {
  const { colors: d } = je();
  return /* @__PURE__ */ ae(
    ki,
    {
      onClick: i,
      isFullRounded: c,
      hasChildren: !!s,
      disabled: l,
      variant: a,
      children: [
        /* @__PURE__ */ E(
          ye,
          {
            iconName: e,
            width: n,
            height: t,
            fill: l ? d.disabled : r,
            className: o
          }
        ),
        s
      ]
    }
  );
}, Ei = F.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Ti = F.div`
  position: relative;
`, Pa = ({
  data: e,
  config: n,
  startDate: t,
  onRangeChange: r,
  onTileClick: o,
  onFilterData: i,
  onClearFilterData: s,
  onItemClick: c,
  isLoading: l
}) => {
  var I;
  const a = Ae(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      translations: void 0,
      ...n
    }),
    [n]
  ), d = we(null), [u, f] = ve((I = d.current) == null ? void 0 : I.clientWidth), v = Ae(() => R(t), [t]), [y, w] = ve(a.defaultTheme ?? "light"), m = () => {
    w(y === "light" ? "dark" : "light");
  }, D = y === "light" ? Co : So, O = a.theme ? a.theme[D.mode] : {}, A = {
    ...D,
    colors: {
      ...D.colors,
      ...O
    }
  };
  return pe(() => {
    const p = () => {
      d.current && f(d.current.clientWidth);
    };
    return p(), window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, []), d.current, /* @__PURE__ */ ae(Wr, { children: [
    /* @__PURE__ */ E(xo, {}),
    /* @__PURE__ */ E(yo, { theme: A, children: /* @__PURE__ */ E(Xs, { lang: a.lang, translations: a.translations, children: /* @__PURE__ */ E(
      fs,
      {
        data: e,
        isLoading: !!l,
        config: a,
        onRangeChange: r,
        defaultStartDate: v,
        onFilterData: i,
        onClearFilterData: s,
        children: /* @__PURE__ */ E(
          Ei,
          {
            showScroll: !!e.length,
            id: Ze,
            ref: d,
            children: /* @__PURE__ */ E(Ti, { children: /* @__PURE__ */ E(
              ni,
              {
                data: e,
                onTileClick: o,
                topBarWidth: u ?? 0,
                onItemClick: c,
                toggleTheme: m
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, Di = F.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, Pi = F.button`
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
`, Oi = F.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ai = F.p`
  ${et}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Ir = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: i
}) => {
  const { loadNext: s, loadPrevious: c } = nt(), l = e === "next" ? `${s} ${o + 2}/${i}` : `${c} ${o}/${i}`;
  return /* @__PURE__ */ E(Di, { intent: e, children: /* @__PURE__ */ ae(Pi, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ E(Oi, { children: t }),
    /* @__PURE__ */ E(Ai, { children: l })
  ] }) });
}, Ri = F.div`
  min-width: ${Se + "px"};
  max-width: ${Se + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Li = F.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Se}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Ii = F.input`
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
`, Yi = F.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
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
`, Ni = F.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${Ce}px;
  height: calc(${Ce}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Hi = F.div`
  display: flex;
  align-items: center;
`, Wi = F.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Zi = F.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Fi = F.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Yr = F.p`
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
`, ji = ({ id: e, item: n, rows: t, onItemClick: r }) => /* @__PURE__ */ E(
  Ni,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ ae(Hi, { children: [
      /* @__PURE__ */ E(Wi, { children: n.icon ? /* @__PURE__ */ E(Zi, { src: n.icon, alt: "Icon" }) : /* @__PURE__ */ E(ye, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ ae(Fi, { children: [
        /* @__PURE__ */ E(Yr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ E(Yr, { children: n.subtitle })
      ] })
    ] })
  }
), Bi = ({
  data: e,
  rows: n,
  onLoadNext: t,
  onLoadPrevious: r,
  pageNum: o,
  pagesAmount: i,
  searchInputValue: s,
  onSearchInputChange: c,
  onItemClick: l
}) => {
  const [a, d] = ve(!1), { search: u } = nt(), f = () => d((v) => !v);
  return /* @__PURE__ */ ae(Ri, { children: [
    /* @__PURE__ */ ae(Li, { children: [
      /* @__PURE__ */ ae(Yi, { isFocused: a, children: [
        /* @__PURE__ */ E(
          Ii,
          {
            placeholder: u,
            value: s,
            onChange: c,
            onFocus: f,
            onBlur: f
          }
        ),
        /* @__PURE__ */ E(ye, { iconName: "search" })
      ] }),
      /* @__PURE__ */ E(
        Ir,
        {
          intent: "previous",
          isVisible: o !== 0,
          onClick: r,
          icon: /* @__PURE__ */ E(ye, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: o,
          pagesAmount: i
        }
      )
    ] }),
    e.map((v, y) => /* @__PURE__ */ E(
      ji,
      {
        id: v.id,
        item: v.label,
        rows: n[y],
        onItemClick: l
      },
      v.id
    )),
    /* @__PURE__ */ E(
      Ir,
      {
        intent: "next",
        isVisible: o !== i - 1,
        onClick: t,
        icon: /* @__PURE__ */ E(ye, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: o,
        pagesAmount: i
      }
    )
  ] });
}, zi = F.div`
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
`, Vi = bo`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Gi = F.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Vi} 1s infinite;
`, Ui = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ E(zi, { position: n, children: /* @__PURE__ */ E(Gi, {}) }) : null, Nr = Ui, De = (e, n) => {
  const {
    ctx: t,
    x: r,
    y: o,
    width: i,
    height: s,
    textYPos: c,
    label: l,
    font: a,
    isBottomRow: d,
    fillStyle: u,
    topText: f,
    bottomText: v,
    strokeStyle: y,
    labelBetweenCells: w
  } = e;
  if (t.beginPath(), t.strokeStyle = y ?? n.colors.border, t.setLineDash([]), l && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, i, s), w ? (t.moveTo(r, o), t.lineTo(r + i, o), t.stroke(), t.moveTo(r, o + s), t.lineTo(r + i, o + s), t.stroke(), t.moveTo(r + i / 2, o + s), t.lineTo(r + i / 2, o + s - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, i, s), t.font = a;
    const m = r + i / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(l, m, c);
  }
  if (d && u && f && v) {
    t.fillStyle = u, t.fillRect(r, o, i, s), t.strokeRect(r + 0.5, o + 0.5, i, s), t.font = f.font;
    const m = r + i / 2 - t.measureText(f.label).width / 2;
    t.fillStyle = f.color, t.fillText(f.label, m, f.y), t.font = v.font;
    const D = r + i / 2 - t.measureText(v.label).width / 2;
    t.fillStyle = v.color, t.fillText(v.label, D, v.y);
  }
}, vn = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t || !r ? n.colors.secondary : n.colors.primary;
}, Kt = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, Xi = (e, n, t, r) => {
  const o = Ke - Ne / _o, i = Ke - Ne / $o, s = Te + tt;
  let c = 0;
  for (let l = 0; l < n; l++) {
    const a = cn(
      R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(l, "days")
    );
    De(
      {
        ctx: e,
        x: c,
        y: s,
        width: be,
        height: Ne,
        isBottomRow: !0,
        fillStyle: vn(
          {
            isCurrent: a.isCurrentDay,
            isBusinessDay: a.isBusinessDay
          },
          r
        ),
        topText: {
          y: o,
          label: a.dayName.toUpperCase(),
          font: $e.bottomRow.name,
          color: Kt(
            { isCurrent: a.isCurrentDay, isBusinessDay: a.isBusinessDay },
            r
          )
        },
        bottomText: {
          y: i,
          label: `${a.dayOfMonth}`,
          font: $e.bottomRow.number,
          color: Kt(
            {
              isCurrent: a.isCurrentDay,
              isBusinessDay: a.isBusinessDay,
              variant: "bottomRow"
            },
            r
          )
        }
      },
      r
    ), c += be;
  }
}, Ji = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * ke;
  const i = Te;
  let c = t.month;
  for (let l = 0; l < n; l++) {
    c >= Nt && (c = 0);
    const a = an(t, l) * ke;
    De(
      {
        ctx: e,
        x: o,
        y: i,
        width: a,
        height: tt,
        textYPos: sn,
        label: R().month(c).format("MMMM").toUpperCase(),
        font: $e.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, qi = (e, n, t) => {
  let o = 0, i = 0, s = R(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * be + be;
  for (let c = 0; c < Nt; c++)
    s > Nt - 1 && (s = 0), i = R(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * be, De(
      {
        ctx: e,
        x: o,
        y: 0,
        width: i,
        height: Te,
        textYPos: sr,
        label: R(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(s).format("MMMM").toUpperCase() + `                                                                                                  ${R(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(s).format("MMMM").toUpperCase()}`,
        font: $e.topRow
      },
      t
    ), o += i, s++;
}, Ki = (e, n, t, r) => {
  const o = 7 * be, i = Te, s = e.canvas.width / o + o, c = n.weekOfYear;
  let l = 0;
  for (let a = 0; a < s; a++) {
    const d = R(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let u = (c + a) % Er;
    u <= 0 && (u += Er), d !== 1 && a === 0 && (l = -d * be + be), De(
      {
        ctx: e,
        x: l,
        y: i,
        width: o,
        height: tt,
        textYPos: sn,
        label: `${t.toUpperCase()} ${u}`,
        font: $e.middleRow
      },
      r
    ), l += o;
  }
}, Qi = (e, n, t, r, o) => {
  const i = Ke - Ne / 1.6, s = Ke - Ne / 4.5, c = Te + tt;
  let l = 0;
  for (let a = 0; a < n; a++) {
    const d = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = d.isSame(R(), "week");
    De(
      {
        ctx: e,
        x: l,
        y: c,
        width: Le,
        height: Ne,
        isBottomRow: !0,
        fillStyle: vn({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: i,
          label: d.isoWeek().toString(),
          font: $e.bottomRow.name,
          color: Kt({ isCurrent: u }, o)
        },
        bottomText: {
          y: s,
          label: r.toUpperCase(),
          font: $e.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Le;
  }
}, ea = (e, n, t, r) => {
  const i = n.year, s = e.canvas.width * 2;
  let c = 0, l = 0, a = (Pr(i) - t + 1) * ke, d = 0;
  for (; c + d <= s; )
    l > 0 && (a = Pr(i + l) * ke), d + a > s && l > 0 && (a = Math.ceil((s - d) / ke) * ke), De(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Te,
        textYPos: sr,
        label: (i + l).toString(),
        font: $e.topRow
      },
      r
    ), c += a, d += a, l++;
}, ta = (e, n, t, r) => {
  const o = Math.floor(n / xt) + 2, i = xt * ge;
  let l = -R(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * ge + 0.5 * ge;
  for (let a = 0; a < o; a++) {
    const d = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    De(
      {
        ctx: e,
        x: l,
        y: Qe,
        width: i,
        height: dt,
        textYPos: Qe + dt / 2 + 2,
        label: d,
        font: $e.bottomRow.number
      },
      r
    ), l += i;
  }
}, ra = (e, n, t, r) => {
  const o = Math.ceil(n / xt), i = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), s = i.add(o - 1, "days"), c = i.month(), l = s.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * ge;
  for (let u = 0; u < a; u++) {
    const f = R(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), y = R(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), w = y.format("MMMM").toUpperCase(), m = y.diff(f, "hour") + 1, D = u === 0 ? m * ge : n * ge;
    De(
      {
        ctx: e,
        x: d,
        y: 0,
        width: D,
        height: Qe,
        textYPos: sr,
        label: w,
        font: $e.topRow
      },
      r
    ), d += D;
  }
}, na = (e, n, t, r) => {
  let o = 0;
  const i = Qe + dt, s = R(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = ge;
  for (let l = 0; l < n; l++) {
    const a = s.add(l, "hours").format("h:00a").toUpperCase();
    De(
      {
        ctx: e,
        x: o,
        y: i,
        width: c,
        height: Yt,
        label: a,
        font: $e.bottomRow.hoursInDay,
        textYPos: Qe + dt + Yt / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += ge;
  }
}, oa = (e, n, t, r, o, i, s) => {
  switch (n) {
    case 0:
      ea(e, r, i, s), Ji(e, t, r, s), Qi(e, t, r, o, s);
      break;
    case 1:
      qi(e, r, s), Ki(e, r, o, s), Xi(e, t, r, s);
      break;
    case 2:
      ra(e, t, r, s), ta(e, t, r, s), na(e, t, r, s);
      break;
  }
}, sa = F.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, ia = F.div`
  height: ${Ke}px;
  display: block;
`, aa = F.canvas``, ca = ({ zoom: e, topBarWidth: n, showThemeToggle: t, toggleTheme: r }) => {
  const { week: o } = nt(), { date: i, cols: s, dayOfYear: c, startDate: l } = rt(), a = we(null), d = je(), u = xe(
    (f) => {
      const v = lr(), w = (e === 2 ? Mo : Ke) + 1;
      dn(f, v, w), oa(f, e, s, l, o, c, d);
    },
    [s, c, l, o, e, d]
  );
  return pe(() => {
    if (!a.current)
      return;
    const f = a.current.getContext("2d");
    if (!f)
      return;
    const v = () => u(f);
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [u]), pe(() => {
    const f = a.current;
    if (!f)
      return;
    f.style.letterSpacing = "1px";
    const v = f.getContext("2d");
    v && u(v);
  }, [i, e, u]), /* @__PURE__ */ ae(sa, { children: [
    /* @__PURE__ */ E(di, { width: n, showThemeToggle: t, toggleTheme: r }),
    /* @__PURE__ */ E(ia, { id: ko, children: /* @__PURE__ */ E(aa, { ref: a }) })
  ] });
}, la = (e, n, t) => {
  let r;
  switch (t) {
    case 0:
      r = ke;
      break;
    case 2:
      r = ge;
      break;
    default:
      r = be;
  }
  const i = () => {
    let s;
    switch (t) {
      case 2:
        s = (e.startDate.diff(n.startDate, "minute") / he + 1) * r - r / 2;
        break;
      default:
        s = (e.startDate.diff(n.startDate, "day") + 1) * r;
    }
    return Math.max(0, s);
  };
  if (e.startDate.isAfter(n.startDate) && e.endDate.isBefore(n.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = Math.max(
          e.endDate.diff(e.startDate, "minute") / he * r,
          50
        );
        break;
      default:
        s = Math.max(
          e.endDate.diff(e.startDate, "day") * r + r,
          50
        );
    }
    return { x: i(), width: s };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isBefore(n.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = Math.max(
          e.endDate.diff(n.startDate, "minute") / he * r + 0.5 * r,
          50
        );
        break;
      default:
        s = Math.max(
          e.endDate.diff(n.startDate, "day") * r + r,
          50
        );
    }
    return { x: i(), width: s };
  }
  if (e.startDate.isAfter(n.startDate) && e.endDate.isAfter(n.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = Math.max(
          n.endDate.diff(e.startDate, "minute") / he * r,
          50
        );
        break;
      default:
        s = Math.max(
          n.endDate.diff(e.startDate, "day") * r + r,
          50
        );
    }
    return { x: i(), width: s };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isAfter(n.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = Math.max(
          n.endDate.diff(n.startDate, "minute") / he * r,
          50
        );
        break;
      default:
        s = Math.max(
          n.endDate.diff(n.startDate, "day") * r + r,
          50
        );
    }
    return { x: i(), width: s };
  }
  return { x: i(), width: 50 };
}, da = (e, n, t, r, o, i) => {
  const s = e * Ce + Eo, c = n.hour(), l = t.hour();
  let a, d, u, f;
  switch (i) {
    case 2: {
      a = R(r), d = R(o), u = R(n).hour(c).minute(0), f = R(t).hour(l).minute(0);
      break;
    }
    default: {
      a = R(r).hour(0).minute(0), d = R(o).hour(23).minute(59), u = n, f = t;
      break;
    }
  }
  return {
    ...la(
      { startDate: a, endDate: d },
      { startDate: u, endDate: f },
      i
    ),
    y: s
  };
}, ua = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, ha = F.button`
  ${et}
  height: ${To}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: e }) => e.colors.textPrimary};
  width: 100%;
  cursor: pointer;
`, fa = F.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Hr = F.p`
  ${et}
  ${nn}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, pa = F.p`
  ${et}
  ${nn}
`, ma = F.div`
  position: sticky;
  left: ${Se + 16}px;
  overflow: hidden;
`, va = ({ row: e, data: n, zoom: t, onTileClick: r }) => {
  const { date: o } = rt(), i = cr(o, t), { y: s, x: c, width: l } = da(
    e,
    i.startDate,
    i.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: a } = je();
  return /* @__PURE__ */ E(
    ha,
    {
      style: {
        left: `${c}px`,
        top: `${s}px`,
        backgroundColor: `${n.bgColor ?? a.defaultTile}`,
        width: `${l}px`,
        color: ua(n.bgColor ?? "")
      },
      onClick: () => r == null ? void 0 : r(n),
      children: /* @__PURE__ */ E(fa, { children: /* @__PURE__ */ ae(ma, { children: [
        /* @__PURE__ */ E(Hr, { bold: !0, children: n.title }),
        /* @__PURE__ */ E(Hr, { children: n.subtitle }),
        /* @__PURE__ */ E(pa, { children: n.description })
      ] }) })
    }
  );
}, ya = ({ data: e, zoom: n, onTileClick: t }) => {
  const r = xe(() => {
    let o = 0;
    return e.map((i, s) => (s > 0 && (o += Math.max(e[s - 1].data.length, 1)), i.data.map(
      (c, l) => c.map((a) => /* @__PURE__ */ E(
        va,
        {
          row: l + o,
          data: a,
          zoom: n,
          onTileClick: t
        },
        a.id
      ))
    ))).flat(2);
  }, [e, t, n]);
  return /* @__PURE__ */ E(Wr, { children: r() });
}, ga = ya;
F.div`
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
F.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
F.label`
  font-size: 14px;
`;
F.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
F.input`
  height: 18px;
  width: 18px;
`;
F.button`
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
F.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const wa = F.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.tooltip};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, ba = F.div`
  width: 100%;
`, xa = F.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.tooltip};
`, Ca = F.div``, it = F.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, Be = F.div`
  ${et}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSecondary};
  line-height: 12px;
  letter-spacing: 0.5px;
`, ze = F.p`
  ${et}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.textSecondary};
`;
F.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.warning};
`;
const Sa = ({ tooltipData: e, zoom: n }) => {
  nt();
  const { coords: t, disposition: r } = e, o = we(null);
  let i = Le;
  switch (n) {
    case 0:
      i = Le;
      break;
    case 1:
      i = be;
      break;
    case 2:
      i = ge;
      break;
  }
  return Zr(() => {
    if (!o.current)
      return;
    const { width: s } = o.current.getBoundingClientRect();
    let c;
    switch (n) {
      case 2:
        c = s / 2 + i;
        break;
      default:
        c = s / 2 + i / 2;
        break;
    }
    o.current.style.left = `${t.x - c}px`, o.current.style.top = `${t.y + 8}px`;
  }, [t.x, i, r.overtime, t.y, n]), /* @__PURE__ */ ae(wa, { ref: o, children: [
    /* @__PURE__ */ E(ba, { children: /* @__PURE__ */ ae(Ca, { children: [
      /* @__PURE__ */ ae(it, { children: [
        /* @__PURE__ */ E(ye, { iconName: "search", height: "12" }),
        /* @__PURE__ */ E(Be, { children: /* @__PURE__ */ E(ze, { children: `Booking: ${e.reservationData.bookingNumber}` }) })
      ] }),
      /* @__PURE__ */ ae(it, { children: [
        /* @__PURE__ */ E(ye, { iconName: "defaultAvatar", height: "12" }),
        /* @__PURE__ */ E(Be, { children: /* @__PURE__ */ E(ze, { children: `Cliente: ${e.reservationData.client}` }) })
      ] }),
      /* @__PURE__ */ ae(it, { children: [
        /* @__PURE__ */ E(ye, { iconName: "calendarFree", height: "12" }),
        /* @__PURE__ */ E(Be, { children: /* @__PURE__ */ E(ze, { children: `Inicio: ${e.reservationData.startTime}` }) }),
        e.reservationData.reservationType === ut.Tour && /* @__PURE__ */ E(Be, { children: /* @__PURE__ */ E(ze, { children: `Finaliza: ${e.reservationData.endDate}` }) })
      ] }),
      /* @__PURE__ */ ae(it, { children: [
        /* @__PURE__ */ E(ye, { iconName: "subtract", height: "12" }),
        /* @__PURE__ */ E(Be, { children: /* @__PURE__ */ E(ze, { children: e.reservationData.eventName }) })
      ] }),
      e.reservationData.reservationType === ut.Transfer && !!e.reservationData.groupName && /* @__PURE__ */ ae(it, { children: [
        /* @__PURE__ */ E(ye, { iconName: "subtract", height: "12" }),
        /* @__PURE__ */ E(Be, { children: /* @__PURE__ */ E(ze, { children: `Reserva a nombre de: ${e.reservationData.groupName}` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ E(xa, {})
  ] });
}, Ma = F.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, _a = F.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, $a = F.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, ka = ({ toggleTheme: e }) => {
  const n = je();
  return /* @__PURE__ */ ae(Ma, { onClick: e, children: [
    /* @__PURE__ */ E(_a, {}),
    /* @__PURE__ */ E($a, { children: n.mode === "light" ? /* @__PURE__ */ E(ye, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ E(ye, { iconName: "moon", height: "16", width: "16" }) })
  ] });
};
export {
  Pa as Scheduler
};
