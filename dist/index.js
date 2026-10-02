var Wo = Object.defineProperty;
var jo = (e, r, t) => r in e ? Wo(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var sr = (e, r, t) => (jo(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as H, Fragment as Ae } from "react/jsx-runtime";
import * as oe from "react";
import pt, { useRef as fe, useContext as nt, useMemo as $e, useLayoutEffect as an, useDebugValue as ir, createElement as Zo, createContext as Vn, useState as he, useCallback as ae, useEffect as ge, forwardRef as Gn, useImperativeHandle as io } from "react";
import { createPortal as Vo } from "react-dom";
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zt = {}, Go = {
  get exports() {
    return zt;
  },
  set exports(e) {
    zt = e;
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
var ar;
function Uo() {
  if (ar)
    return Se;
  ar = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
  function $(g) {
    if (typeof g == "object" && g !== null) {
      var O = g.$$typeof;
      switch (O) {
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
                case l:
                case y:
                case u:
                case s:
                  return g;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  return Se.ContextConsumer = i, Se.ContextProvider = s, Se.Element = e, Se.ForwardRef = l, Se.Fragment = t, Se.Lazy = y, Se.Memo = u, Se.Portal = r, Se.Profiler = o, Se.StrictMode = n, Se.Suspense = a, Se.SuspenseList = d, Se.isAsyncMode = function() {
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
    return $(g) === l;
  }, Se.isFragment = function(g) {
    return $(g) === t;
  }, Se.isLazy = function(g) {
    return $(g) === y;
  }, Se.isMemo = function(g) {
    return $(g) === u;
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
    return typeof g == "string" || typeof g == "function" || g === t || g === o || g === n || g === a || g === d || g === S || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === u || g.$$typeof === s || g.$$typeof === i || g.$$typeof === l || g.$$typeof === x || g.getModuleId !== void 0);
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
var cr;
function Xo() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), x = !1, $ = !1, g = !1, O = !1, K = !1, j;
    j = Symbol.for("react.module.reference");
    function F(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === t || D === o || K || D === n || D === a || D === d || O || D === S || x || $ || g || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === u || D.$$typeof === s || D.$$typeof === i || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === j || D.getModuleId !== void 0));
    }
    function f(D) {
      if (typeof D == "object" && D !== null) {
        var G = D.$$typeof;
        switch (G) {
          case e:
            var ne = D.type;
            switch (ne) {
              case t:
              case o:
              case n:
              case a:
              case d:
                return ne;
              default:
                var q = ne && ne.$$typeof;
                switch (q) {
                  case c:
                  case i:
                  case l:
                  case y:
                  case u:
                  case s:
                    return q;
                  default:
                    return G;
                }
            }
          case r:
            return G;
        }
      }
    }
    var m = i, v = s, E = e, C = l, w = t, W = y, V = u, I = r, A = o, T = n, Y = a, R = d, M = !1, L = !1;
    function te(D) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(D) {
      return L || (L = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(D) {
      return f(D) === i;
    }
    function N(D) {
      return f(D) === s;
    }
    function X(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function re(D) {
      return f(D) === l;
    }
    function k(D) {
      return f(D) === t;
    }
    function U(D) {
      return f(D) === y;
    }
    function _(D) {
      return f(D) === u;
    }
    function Q(D) {
      return f(D) === r;
    }
    function Z(D) {
      return f(D) === o;
    }
    function z(D) {
      return f(D) === n;
    }
    function p(D) {
      return f(D) === a;
    }
    function J(D) {
      return f(D) === d;
    }
    Ce.ContextConsumer = m, Ce.ContextProvider = v, Ce.Element = E, Ce.ForwardRef = C, Ce.Fragment = w, Ce.Lazy = W, Ce.Memo = V, Ce.Portal = I, Ce.Profiler = A, Ce.StrictMode = T, Ce.Suspense = Y, Ce.SuspenseList = R, Ce.isAsyncMode = te, Ce.isConcurrentMode = ee, Ce.isContextConsumer = B, Ce.isContextProvider = N, Ce.isElement = X, Ce.isForwardRef = re, Ce.isFragment = k, Ce.isLazy = U, Ce.isMemo = _, Ce.isPortal = Q, Ce.isProfiler = Z, Ce.isStrictMode = z, Ce.isSuspense = p, Ce.isSuspenseList = J, Ce.isValidElementType = F, Ce.typeOf = f;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Uo() : e.exports = Xo();
})(Go);
function Ko(e) {
  function r(B, N, X, re, k) {
    for (var U = 0, _ = 0, Q = 0, Z = 0, z, p, J = 0, D = 0, G, ne = G = z = 0, q = 0, ce = 0, me = 0, de = 0, ve = X.length, De = ve - 1, be, se = "", pe = "", Oe = "", ze = "", Ne; q < ve; ) {
      if (p = X.charCodeAt(q), q === De && _ + Z + Q + U !== 0 && (_ !== 0 && (p = _ === 47 ? 10 : 47), Z = Q = U = 0, ve++, De++), _ + Z + Q + U === 0) {
        if (q === De && (0 < ce && (se = se.replace(y, "")), 0 < se.trim().length)) {
          switch (p) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += X.charAt(q);
          }
          p = 59;
        }
        switch (p) {
          case 123:
            for (se = se.trim(), z = se.charCodeAt(0), G = 1, de = ++q; q < ve; ) {
              switch (p = X.charCodeAt(q)) {
                case 123:
                  G++;
                  break;
                case 125:
                  G--;
                  break;
                case 47:
                  switch (p = X.charCodeAt(q + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = q + 1; ne < De; ++ne)
                          switch (X.charCodeAt(ne)) {
                            case 47:
                              if (p === 42 && X.charCodeAt(ne - 1) === 42 && q + 2 !== ne) {
                                q = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (p === 47) {
                                q = ne + 1;
                                break e;
                              }
                          }
                        q = ne;
                      }
                  }
                  break;
                case 91:
                  p++;
                case 40:
                  p++;
                case 34:
                case 39:
                  for (; q++ < De && X.charCodeAt(q) !== p; )
                    ;
              }
              if (G === 0)
                break;
              q++;
            }
            switch (G = X.substring(de, q), z === 0 && (z = (se = se.replace(u, "").trim()).charCodeAt(0)), z) {
              case 64:
                switch (0 < ce && (se = se.replace(y, "")), p = se.charCodeAt(1), p) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = N;
                    break;
                  default:
                    ce = Y;
                }
                if (G = r(N, ce, G, p, k + 1), de = G.length, 0 < M && (ce = t(Y, se, me), Ne = c(3, G, ce, N, I, V, de, p, k, re), se = ce.join(""), Ne !== void 0 && (de = (G = Ne.trim()).length) === 0 && (p = 0, G = "")), 0 < de)
                  switch (p) {
                    case 115:
                      se = se.replace(m, i);
                    case 100:
                    case 109:
                    case 45:
                      G = se + "{" + G + "}";
                      break;
                    case 107:
                      se = se.replace(K, "$1 $2"), G = se + "{" + G + "}", G = T === 1 || T === 2 && s("@" + G, 3) ? "@-webkit-" + G + "@" + G : "@" + G;
                      break;
                    default:
                      G = se + G, re === 112 && (G = (pe += G, ""));
                  }
                else
                  G = "";
                break;
              default:
                G = r(N, t(N, se, me), G, re, k + 1);
            }
            Oe += G, G = me = ce = ne = z = 0, se = "", p = X.charCodeAt(++q);
            break;
          case 125:
          case 59:
            if (se = (0 < ce ? se.replace(y, "") : se).trim(), 1 < (de = se.length))
              switch (ne === 0 && (z = se.charCodeAt(0), z === 45 || 96 < z && 123 > z) && (de = (se = se.replace(" ", ":")).length), 0 < M && (Ne = c(1, se, N, B, I, V, pe.length, re, k, re)) !== void 0 && (de = (se = Ne.trim()).length) === 0 && (se = "\0\0"), z = se.charCodeAt(0), p = se.charCodeAt(1), z) {
                case 0:
                  break;
                case 64:
                  if (p === 105 || p === 99) {
                    ze += se + X.charAt(q);
                    break;
                  }
                default:
                  se.charCodeAt(de - 1) !== 58 && (pe += o(se, z, p, se.charCodeAt(2)));
              }
            me = ce = ne = z = 0, se = "", p = X.charCodeAt(++q);
        }
      }
      switch (p) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + z === 0 && re !== 107 && 0 < se.length && (ce = 1, se += "\0"), 0 < M * te && c(0, se, N, B, I, V, pe.length, re, k, re), V = 1, I++;
          break;
        case 59:
        case 125:
          if (_ + Z + Q + U === 0) {
            V++;
            break;
          }
        default:
          switch (V++, be = X.charAt(q), p) {
            case 9:
            case 32:
              if (Z + U + _ === 0)
                switch (J) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    be = "";
                    break;
                  default:
                    p !== 32 && (be = " ");
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
              Z + _ + U === 0 && (ce = me = 1, be = "\f" + be);
              break;
            case 108:
              if (Z + _ + U + A === 0 && 0 < ne)
                switch (q - ne) {
                  case 2:
                    J === 112 && X.charCodeAt(q - 3) === 58 && (A = J);
                  case 8:
                    D === 111 && (A = D);
                }
              break;
            case 58:
              Z + _ + U === 0 && (ne = q);
              break;
            case 44:
              _ + Q + Z + U === 0 && (ce = 1, be += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (Z = Z === p ? 0 : Z === 0 ? p : Z);
              break;
            case 91:
              Z + _ + Q === 0 && U++;
              break;
            case 93:
              Z + _ + Q === 0 && U--;
              break;
            case 41:
              Z + _ + U === 0 && Q--;
              break;
            case 40:
              if (Z + _ + U === 0) {
                if (z === 0)
                  switch (2 * J + 3 * D) {
                    case 533:
                      break;
                    default:
                      z = 1;
                  }
                Q++;
              }
              break;
            case 64:
              _ + Q + Z + U + ne + G === 0 && (G = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Z + U + Q))
                switch (_) {
                  case 0:
                    switch (2 * p + 3 * X.charCodeAt(q + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        de = q, _ = 42;
                    }
                    break;
                  case 42:
                    p === 47 && J === 42 && de + 2 !== q && (X.charCodeAt(de + 2) === 33 && (pe += X.substring(de, q + 1)), be = "", _ = 0);
                }
          }
          _ === 0 && (se += be);
      }
      D = J, J = p, q++;
    }
    if (de = pe.length, 0 < de) {
      if (ce = N, 0 < M && (Ne = c(2, pe, ce, B, I, V, de, re, k, re), Ne !== void 0 && (pe = Ne).length === 0))
        return ze + pe + Oe;
      if (pe = ce.join(",") + "{" + pe + "}", T * A !== 0) {
        switch (T !== 2 || s(pe, 2) || (A = 0), A) {
          case 111:
            pe = pe.replace(F, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(j, "::-webkit-input-$1") + pe.replace(j, "::-moz-$1") + pe.replace(j, ":-ms-input-$1") + pe;
        }
        A = 0;
      }
    }
    return ze + pe + Oe;
  }
  function t(B, N, X) {
    var re = N.trim().split(g);
    N = re;
    var k = re.length, U = B.length;
    switch (U) {
      case 0:
      case 1:
        var _ = 0;
        for (B = U === 0 ? "" : B[0] + " "; _ < k; ++_)
          N[_] = n(B, N[_], X).trim();
        break;
      default:
        var Q = _ = 0;
        for (N = []; _ < k; ++_)
          for (var Z = 0; Z < U; ++Z)
            N[Q++] = n(B[Z] + " ", re[_], X).trim();
    }
    return N;
  }
  function n(B, N, X) {
    var re = N.charCodeAt(0);
    switch (33 > re && (re = (N = N.trim()).charCodeAt(0)), re) {
      case 38:
        return N.replace(O, "$1" + B.trim());
      case 58:
        return B.trim() + N.replace(O, "$1" + B.trim());
      default:
        if (0 < 1 * X && 0 < N.indexOf("\f"))
          return N.replace(O, (B.charCodeAt(0) === 58 ? "" : "$1") + B.trim());
    }
    return B + N;
  }
  function o(B, N, X, re) {
    var k = B + ";", U = 2 * N + 3 * X + 4 * re;
    if (U === 944) {
      B = k.indexOf(":", 9) + 1;
      var _ = k.substring(B, k.length - 1).trim();
      return _ = k.substring(0, B).trim() + _ + ";", T === 1 || T === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (T === 0 || T === 2 && !s(k, 1))
      return k;
    switch (U) {
      case 1015:
        return k.charCodeAt(10) === 97 ? "-webkit-" + k + k : k;
      case 951:
        return k.charCodeAt(3) === 116 ? "-webkit-" + k + k : k;
      case 963:
        return k.charCodeAt(5) === 110 ? "-webkit-" + k + k : k;
      case 1009:
        if (k.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + k + k;
      case 978:
        return "-webkit-" + k + "-moz-" + k + k;
      case 1019:
      case 983:
        return "-webkit-" + k + "-moz-" + k + "-ms-" + k + k;
      case 883:
        if (k.charCodeAt(8) === 45)
          return "-webkit-" + k + k;
        if (0 < k.indexOf("image-set(", 11))
          return k.replace(W, "$1-webkit-$2") + k;
        break;
      case 932:
        if (k.charCodeAt(4) === 45)
          switch (k.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + k.replace("-grow", "") + "-webkit-" + k + "-ms-" + k.replace("grow", "positive") + k;
            case 115:
              return "-webkit-" + k + "-ms-" + k.replace("shrink", "negative") + k;
            case 98:
              return "-webkit-" + k + "-ms-" + k.replace("basis", "preferred-size") + k;
          }
        return "-webkit-" + k + "-ms-" + k + k;
      case 964:
        return "-webkit-" + k + "-ms-flex-" + k + k;
      case 1023:
        if (k.charCodeAt(8) !== 99)
          break;
        return _ = k.substring(k.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + k + "-ms-flex-pack" + _ + k;
      case 1005:
        return x.test(k) ? k.replace(S, ":-webkit-") + k.replace(S, ":-moz-") + k : k;
      case 1e3:
        switch (_ = k.substring(13).trim(), N = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(N)) {
          case 226:
            _ = k.replace(f, "tb");
            break;
          case 232:
            _ = k.replace(f, "tb-rl");
            break;
          case 220:
            _ = k.replace(f, "lr");
            break;
          default:
            return k;
        }
        return "-webkit-" + k + "-ms-" + _ + k;
      case 1017:
        if (k.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (N = (k = B).length - 10, _ = (k.charCodeAt(N) === 33 ? k.substring(0, N) : k).substring(B.indexOf(":", 7) + 1).trim(), U = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8))
              break;
          case 115:
            k = k.replace(_, "-webkit-" + _) + ";" + k;
            break;
          case 207:
          case 102:
            k = k.replace(_, "-webkit-" + (102 < U ? "inline-" : "") + "box") + ";" + k.replace(_, "-webkit-" + _) + ";" + k.replace(_, "-ms-" + _ + "box") + ";" + k;
        }
        return k + ";";
      case 938:
        if (k.charCodeAt(5) === 45)
          switch (k.charCodeAt(6)) {
            case 105:
              return _ = k.replace("-items", ""), "-webkit-" + k + "-webkit-box-" + _ + "-ms-flex-" + _ + k;
            case 115:
              return "-webkit-" + k + "-ms-flex-item-" + k.replace(E, "") + k;
            default:
              return "-webkit-" + k + "-ms-flex-line-pack" + k.replace("align-content", "").replace(E, "") + k;
          }
        break;
      case 973:
      case 989:
        if (k.charCodeAt(3) !== 45 || k.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (w.test(B) === !0)
          return (_ = B.substring(B.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(B.replace("stretch", "fill-available"), N, X, re).replace(":fill-available", ":stretch") : k.replace(_, "-webkit-" + _) + k.replace(_, "-moz-" + _.replace("fill-", "")) + k;
        break;
      case 962:
        if (k = "-webkit-" + k + (k.charCodeAt(5) === 102 ? "-ms-" + k : "") + k, X + re === 211 && k.charCodeAt(13) === 105 && 0 < k.indexOf("transform", 10))
          return k.substring(0, k.indexOf(";", 27) + 1).replace($, "$1-webkit-$2") + k;
    }
    return k;
  }
  function s(B, N) {
    var X = B.indexOf(N === 1 ? ":" : "{"), re = B.substring(0, N !== 3 ? X : 10);
    return X = B.substring(X + 1, B.length - 1), L(N !== 2 ? re : re.replace(C, "$1"), X, N);
  }
  function i(B, N) {
    var X = o(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return X !== N + ";" ? X.replace(v, " or ($1)").substring(4) : "(" + N + ")";
  }
  function c(B, N, X, re, k, U, _, Q, Z, z) {
    for (var p = 0, J = N, D; p < M; ++p)
      switch (D = R[p].call(d, B, J, X, re, k, U, _, Q, Z, z)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          J = D;
      }
    if (J !== N)
      return J;
  }
  function l(B) {
    switch (B) {
      case void 0:
      case null:
        M = R.length = 0;
        break;
      default:
        if (typeof B == "function")
          R[M++] = B;
        else if (typeof B == "object")
          for (var N = 0, X = B.length; N < X; ++N)
            l(B[N]);
        else
          te = !!B | 0;
    }
    return l;
  }
  function a(B) {
    return B = B.prefix, B !== void 0 && (L = null, B ? typeof B != "function" ? T = 1 : (T = 2, L = B) : T = 0), a;
  }
  function d(B, N) {
    var X = B;
    if (33 > X.charCodeAt(0) && (X = X.trim()), ee = X, X = [ee], 0 < M) {
      var re = c(-1, N, X, X, I, V, 0, 0, 0, 0);
      re !== void 0 && typeof re == "string" && (N = re);
    }
    var k = r(Y, X, N, 0, 0);
    return 0 < M && (re = c(-2, k, X, X, I, V, k.length, 0, 0, 0), re !== void 0 && (k = re)), ee = "", A = 0, V = I = 1, k;
  }
  var u = /^\0+/g, y = /[\0\r\f]/g, S = /: */g, x = /zoo|gra/, $ = /([,: ])(transform)/g, g = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, K = /@(k\w+)\s*(\S*)\s*/, j = /::(place)/g, F = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, m = /\(\s*(.*)\s*\)/g, v = /([\s\S]*?);/g, E = /-self|flex-/g, C = /[^]*?(:[rp][el]a[\w-]+)[^]*/, w = /stretch|:\s*\w+\-(?:conte|avail)/, W = /([^-])(image-set\()/, V = 1, I = 1, A = 0, T = 1, Y = [], R = [], M = 0, L = null, te = 0, ee = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var Jo = {
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
function qo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Qo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, lr = /* @__PURE__ */ qo(
  function(e) {
    return Qo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wn = {}, es = {
  get exports() {
    return wn;
  },
  set exports(e) {
    wn = e;
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
var dr;
function ts() {
  if (dr)
    return ke;
  dr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
  function j(f) {
    if (typeof f == "object" && f !== null) {
      var m = f.$$typeof;
      switch (m) {
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
                case x:
                case S:
                case i:
                  return f;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  function F(f) {
    return j(f) === a;
  }
  return ke.AsyncMode = l, ke.ConcurrentMode = a, ke.ContextConsumer = c, ke.ContextProvider = i, ke.Element = r, ke.ForwardRef = d, ke.Fragment = n, ke.Lazy = x, ke.Memo = S, ke.Portal = t, ke.Profiler = s, ke.StrictMode = o, ke.Suspense = u, ke.isAsyncMode = function(f) {
    return F(f) || j(f) === l;
  }, ke.isConcurrentMode = F, ke.isContextConsumer = function(f) {
    return j(f) === c;
  }, ke.isContextProvider = function(f) {
    return j(f) === i;
  }, ke.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, ke.isForwardRef = function(f) {
    return j(f) === d;
  }, ke.isFragment = function(f) {
    return j(f) === n;
  }, ke.isLazy = function(f) {
    return j(f) === x;
  }, ke.isMemo = function(f) {
    return j(f) === S;
  }, ke.isPortal = function(f) {
    return j(f) === t;
  }, ke.isProfiler = function(f) {
    return j(f) === s;
  }, ke.isStrictMode = function(f) {
    return j(f) === o;
  }, ke.isSuspense = function(f) {
    return j(f) === u;
  }, ke.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === a || f === s || f === o || f === u || f === y || typeof f == "object" && f !== null && (f.$$typeof === x || f.$$typeof === S || f.$$typeof === i || f.$$typeof === c || f.$$typeof === d || f.$$typeof === g || f.$$typeof === O || f.$$typeof === K || f.$$typeof === $);
  }, ke.typeOf = j, ke;
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
var ur;
function ns() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
    function j(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === a || p === s || p === o || p === u || p === y || typeof p == "object" && p !== null && (p.$$typeof === x || p.$$typeof === S || p.$$typeof === i || p.$$typeof === c || p.$$typeof === d || p.$$typeof === g || p.$$typeof === O || p.$$typeof === K || p.$$typeof === $);
    }
    function F(p) {
      if (typeof p == "object" && p !== null) {
        var J = p.$$typeof;
        switch (J) {
          case r:
            var D = p.type;
            switch (D) {
              case l:
              case a:
              case n:
              case s:
              case o:
              case u:
                return D;
              default:
                var G = D && D.$$typeof;
                switch (G) {
                  case c:
                  case d:
                  case x:
                  case S:
                  case i:
                    return G;
                  default:
                    return J;
                }
            }
          case t:
            return J;
        }
      }
    }
    var f = l, m = a, v = c, E = i, C = r, w = d, W = n, V = x, I = S, A = t, T = s, Y = o, R = u, M = !1;
    function L(p) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), te(p) || F(p) === l;
    }
    function te(p) {
      return F(p) === a;
    }
    function ee(p) {
      return F(p) === c;
    }
    function B(p) {
      return F(p) === i;
    }
    function N(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function X(p) {
      return F(p) === d;
    }
    function re(p) {
      return F(p) === n;
    }
    function k(p) {
      return F(p) === x;
    }
    function U(p) {
      return F(p) === S;
    }
    function _(p) {
      return F(p) === t;
    }
    function Q(p) {
      return F(p) === s;
    }
    function Z(p) {
      return F(p) === o;
    }
    function z(p) {
      return F(p) === u;
    }
    Me.AsyncMode = f, Me.ConcurrentMode = m, Me.ContextConsumer = v, Me.ContextProvider = E, Me.Element = C, Me.ForwardRef = w, Me.Fragment = W, Me.Lazy = V, Me.Memo = I, Me.Portal = A, Me.Profiler = T, Me.StrictMode = Y, Me.Suspense = R, Me.isAsyncMode = L, Me.isConcurrentMode = te, Me.isContextConsumer = ee, Me.isContextProvider = B, Me.isElement = N, Me.isForwardRef = X, Me.isFragment = re, Me.isLazy = k, Me.isMemo = U, Me.isPortal = _, Me.isProfiler = Q, Me.isStrictMode = Z, Me.isSuspense = z, Me.isValidElementType = j, Me.typeOf = F;
  }()), Me;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ts() : e.exports = ns();
})(es);
var Un = wn, rs = {
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
}, os = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ss = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ao = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xn = {};
Xn[Un.ForwardRef] = ss;
Xn[Un.Memo] = ao;
function fr(e) {
  return Un.isMemo(e) ? ao : Xn[e.$$typeof] || rs;
}
var is = Object.defineProperty, as = Object.getOwnPropertyNames, hr = Object.getOwnPropertySymbols, cs = Object.getOwnPropertyDescriptor, ls = Object.getPrototypeOf, pr = Object.prototype;
function co(e, r, t) {
  if (typeof r != "string") {
    if (pr) {
      var n = ls(r);
      n && n !== pr && co(e, n, t);
    }
    var o = as(r);
    hr && (o = o.concat(hr(r)));
    for (var s = fr(e), i = fr(r), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!os[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = cs(r, l);
        try {
          is(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var ds = co;
function Ue() {
  return (Ue = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var mr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, Sn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !zt.typeOf(e);
}, en = Object.freeze([]), at = Object.freeze({});
function _t(e) {
  return typeof e == "function";
}
function Cn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Kn(e) {
  return e && typeof e.styledComponentId == "string";
}
var Tt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Jn = typeof window < "u" && "HTMLElement" in window, us = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), fs = {}, hs = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ps() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function et(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(ps.apply(void 0, [hs[e]].concat(t)).trim());
}
var ms = function() {
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
        (i <<= 1) < 0 && et(16, "" + t);
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
}(), Jt = /* @__PURE__ */ new Map(), tn = /* @__PURE__ */ new Map(), Bt = 1, Zt = function(e) {
  if (Jt.has(e))
    return Jt.get(e);
  for (; tn.has(Bt); )
    Bt++;
  var r = Bt++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && et(16, "" + r), Jt.set(e, r), tn.set(r, e), r;
}, gs = function(e) {
  return tn.get(e);
}, ys = function(e, r) {
  r >= Bt && (Bt = r + 1), Jt.set(e, r), tn.set(r, e);
}, vs = "style[" + Tt + '][data-styled-version="5.3.8"]', xs = new RegExp("^" + Tt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), bs = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, ws = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(xs);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (ys(a, l), bs(e, a, c[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Ss = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, lo = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(Tt))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Tt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = Ss();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, Cs = function() {
  function e(t) {
    var n = this.element = lo(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      et(17);
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
}(), ks = function() {
  function e(t) {
    var n = this.element = lo(t);
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
}(), Ms = function() {
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
}(), gr = Jn, $s = { isServer: !Jn, useCSSOMInjection: !us }, nn = function() {
  function e(t, n, o) {
    t === void 0 && (t = at), n === void 0 && (n = {}), this.options = Ue({}, $s, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Jn && gr && (gr = !1, function(s) {
      for (var i = document.querySelectorAll(vs), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(Tt) !== "active" && (ws(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Zt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ue({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new Ms(i) : s ? new Cs(i) : new ks(i), new ms(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Zt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Zt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Zt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = gs(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var d = Tt + ".g" + i + '[id="' + c + '"]', u = "";
            l !== void 0 && l.forEach(function(y) {
              y.length > 0 && (u += y + ",");
            }), s += "" + a + d + '{content:"' + u + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Ds = /(a)(d)/gi, yr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function kn(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = yr(r % 52) + t;
  return (yr(r % 52) + t).replace(Ds, "$1-$2");
}
var ft = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, uo = function(e) {
  return ft(5381, e);
};
function fo(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (_t(t) && !Kn(t))
      return !1;
  }
  return !0;
}
var Es = uo("5.3.8"), _s = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && fo(r), this.componentId = t, this.baseHash = ft(Es, t), this.baseStyle = n, nn.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = mt(this.rules, r, t, n).join(""), c = kn(ft(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = ft(this.baseHash, n.hash), u = "", y = 0; y < a; y++) {
        var S = this.rules[y];
        if (typeof S == "string")
          u += S, process.env.NODE_ENV !== "production" && (d = ft(d, S + y));
        else if (S) {
          var x = mt(S, r, t, n), $ = Array.isArray(x) ? x.join("") : x;
          d = ft(d, $ + y), u += $;
        }
      }
      if (u) {
        var g = kn(d >>> 0);
        if (!t.hasNameForId(o, g)) {
          var O = n(u, "." + g, void 0, o);
          t.insertRules(o, g, O);
        }
        s.push(g);
      }
    }
    return s.join(" ");
  }, e;
}(), Ts = /^\s*\/\/.*$/gm, As = [":", "[", ".", "#"];
function Ps(e) {
  var r, t, n, o, s = e === void 0 ? at : e, i = s.options, c = i === void 0 ? at : i, l = s.plugins, a = l === void 0 ? en : l, d = new Ko(c), u = [], y = function($) {
    function g(O) {
      if (O)
        try {
          $(O + "}");
        } catch {
        }
    }
    return function(O, K, j, F, f, m, v, E, C, w) {
      switch (O) {
        case 1:
          if (C === 0 && K.charCodeAt(0) === 64)
            return $(K + ";"), "";
          break;
        case 2:
          if (E === 0)
            return K + "/*|*/";
          break;
        case 3:
          switch (E) {
            case 102:
            case 112:
              return $(j[0] + K), "";
            default:
              return K + (w === 0 ? "/*|*/" : "");
          }
        case -2:
          K.split("/*|*/}").forEach(g);
      }
    };
  }(function($) {
    u.push($);
  }), S = function($, g, O) {
    return g === 0 && As.indexOf(O[t.length]) !== -1 || O.match(o) ? $ : "." + r;
  };
  function x($, g, O, K) {
    K === void 0 && (K = "&");
    var j = $.replace(Ts, ""), F = g && O ? O + " " + g + " { " + j + " }" : j;
    return r = K, t = g, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(O || !g ? "" : g, F);
  }
  return d.use([].concat(a, [function($, g, O) {
    $ === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(n, S));
  }, y, function($) {
    if ($ === -2) {
      var g = u;
      return u = [], g;
    }
  }])), x.hash = a.length ? a.reduce(function($, g) {
    return g.name || et(15), ft($, g.name);
  }, 5381).toString() : "", x;
}
var ho = pt.createContext();
ho.Consumer;
var po = pt.createContext(), Is = (po.Consumer, new nn()), Mn = Ps();
function mo() {
  return nt(ho) || Is;
}
function go() {
  return nt(po) || Mn;
}
var yo = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Mn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return et(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Mn), this.name + r.hash;
  }, e;
}(), Os = /([A-Z])/, Ls = /([A-Z])/g, Rs = /^ms-/, Ys = function(e) {
  return "-" + e.toLowerCase();
};
function vr(e) {
  return Os.test(e) ? e.replace(Ls, Ys).replace(Rs, "-ms-") : e;
}
var xr = function(e) {
  return e == null || e === !1 || e === "";
};
function mt(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = mt(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (xr(e))
    return "";
  if (Kn(e))
    return "." + e.styledComponentId;
  if (_t(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && zt.isElement(l) && console.warn(Cn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), mt(l, r, t, n);
  }
  var a;
  return e instanceof yo ? t ? (e.inject(t, n), e.getName(n)) : e : Sn(e) ? function d(u, y) {
    var S, x, $ = [];
    for (var g in u)
      u.hasOwnProperty(g) && !xr(u[g]) && (Array.isArray(u[g]) && u[g].isCss || _t(u[g]) ? $.push(vr(g) + ":", u[g], ";") : Sn(u[g]) ? $.push.apply($, d(u[g], g)) : $.push(vr(g) + ": " + (S = g, (x = u[g]) == null || typeof x == "boolean" || x === "" ? "" : typeof x != "number" || x === 0 || S in Jo ? String(x).trim() : x + "px") + ";"));
    return y ? [y + " {"].concat($, ["}"]) : $;
  }(e) : e.toString();
}
var br = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function yt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return _t(e) || Sn(e) ? br(mt(mr(en, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : br(mt(mr(e, t)));
}
var wr = /invalid hook call/i, Vt = /* @__PURE__ */ new Set(), vo = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (wr.test(s))
          o = !1, Vt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(c));
        }
      }, fe(), o && !Vt.has(t) && (console.warn(t), Vt.add(t));
    } catch (s) {
      wr.test(s.message) && Vt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, xo = function(e, r, t) {
  return t === void 0 && (t = at), e.theme !== t.theme && e.theme || r || t.theme;
}, Ns = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Fs = /(^-|-$)/g;
function pn(e) {
  return e.replace(Ns, "-").replace(Fs, "");
}
var qn = function(e) {
  return kn(uo(e) >>> 0);
};
function Gt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var $n = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Bs = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function zs(e, r, t) {
  var n = e[t];
  $n(r) && $n(n) ? bo(n, r) : e[t] = r;
}
function bo(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if ($n(i))
      for (var c in i)
        Bs(c) && zs(e, i[c], c);
  }
  return e;
}
var At = pt.createContext();
At.Consumer;
function Hs(e) {
  var r = nt(At), t = $e(function() {
    return function(n, o) {
      if (!n)
        return et(14);
      if (_t(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : et(7);
      }
      return Array.isArray(n) || typeof n != "object" ? et(8) : o ? Ue({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? pt.createElement(At.Provider, { value: t }, e.children) : null;
}
var mn = {};
function wo(e, r, t) {
  var n = Kn(e), o = !Gt(e), s = r.attrs, i = s === void 0 ? en : s, c = r.componentId, l = c === void 0 ? function(K, j) {
    var F = typeof K != "string" ? "sc" : pn(K);
    mn[F] = (mn[F] || 0) + 1;
    var f = F + "-" + qn("5.3.8" + F + mn[F]);
    return j ? j + "-" + f : f;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(K) {
    return Gt(K) ? "styled." + K : "Styled(" + Cn(K) + ")";
  }(e) : a, u = r.displayName && r.componentId ? pn(r.displayName) + "-" + r.componentId : r.componentId || l, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, S = r.shouldForwardProp;
  n && e.shouldForwardProp && (S = r.shouldForwardProp ? function(K, j, F) {
    return e.shouldForwardProp(K, j, F) && r.shouldForwardProp(K, j, F);
  } : e.shouldForwardProp);
  var x, $ = new _s(t, u, n ? e.componentStyle : void 0), g = $.isStatic && i.length === 0, O = function(K, j) {
    return function(F, f, m, v) {
      var E = F.attrs, C = F.componentStyle, w = F.defaultProps, W = F.foldedComponentIds, V = F.shouldForwardProp, I = F.styledComponentId, A = F.target;
      process.env.NODE_ENV !== "production" && ir(I);
      var T = function(re, k, U) {
        re === void 0 && (re = at);
        var _ = Ue({}, k, { theme: re }), Q = {};
        return U.forEach(function(Z) {
          var z, p, J, D = Z;
          for (z in _t(D) && (D = D(_)), D)
            _[z] = Q[z] = z === "className" ? (p = Q[z], J = D[z], p && J ? p + " " + J : p || J) : D[z];
        }), [_, Q];
      }(xo(f, nt(At), w) || at, f, E), Y = T[0], R = T[1], M = function(re, k, U, _) {
        var Q = mo(), Z = go(), z = k ? re.generateAndInjectStyles(at, Q, Z) : re.generateAndInjectStyles(U, Q, Z);
        return process.env.NODE_ENV !== "production" && ir(z), process.env.NODE_ENV !== "production" && !k && _ && _(z), z;
      }(C, v, Y, process.env.NODE_ENV !== "production" ? F.warnTooManyClasses : void 0), L = m, te = R.$as || f.$as || R.as || f.as || A, ee = Gt(te), B = R !== f ? Ue({}, f, {}, R) : f, N = {};
      for (var X in B)
        X[0] !== "$" && X !== "as" && (X === "forwardedAs" ? N.as = B[X] : (V ? V(X, lr, te) : !ee || lr(X)) && (N[X] = B[X]));
      return f.style && R.style !== f.style && (N.style = Ue({}, f.style, {}, R.style)), N.className = Array.prototype.concat(W, I, M !== I ? M : null, f.className, R.className).filter(Boolean).join(" "), N.ref = L, Zo(te, N);
    }(x, K, j, g);
  };
  return O.displayName = d, (x = pt.forwardRef(O)).attrs = y, x.componentStyle = $, x.displayName = d, x.shouldForwardProp = S, x.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : en, x.styledComponentId = u, x.target = n ? e.target : e, x.withComponent = function(K) {
    var j = r.componentId, F = function(m, v) {
      if (m == null)
        return {};
      var E, C, w = {}, W = Object.keys(m);
      for (C = 0; C < W.length; C++)
        E = W[C], v.indexOf(E) >= 0 || (w[E] = m[E]);
      return w;
    }(r, ["componentId"]), f = j && j + "-" + (Gt(K) ? K : pn(Cn(K)));
    return wo(K, Ue({}, F, { attrs: y, componentId: f }), t);
  }, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(K) {
    this._foldedDefaultProps = n ? bo({}, e.defaultProps, K) : K;
  } }), process.env.NODE_ENV !== "production" && (vo(d, u), x.warnTooManyClasses = function(K, j) {
    var F = {}, f = !1;
    return function(m) {
      if (!f && (F[m] = !0, Object.keys(F).length >= 200)) {
        var v = j ? ' with the id of "' + j + '"' : "";
        console.warn("Over 200 classes were generated for component " + K + v + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, F = {};
      }
    };
  }(d, u)), x.toString = function() {
    return "." + x.styledComponentId;
  }, o && ds(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), x;
}
var Dn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = at), !zt.isValidElementType(n))
      return et(1, String(n));
    var s = function() {
      return t(n, o, yt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Ue({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Ue({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(wo, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Dn[e] = Dn(e);
});
var Ws = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = fo(t), nn.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(mt(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && nn.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function js(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = yt.apply(void 0, [e].concat(t)), s = "sc-global-" + qn(JSON.stringify(o)), i = new Ws(o, s);
  function c(a) {
    var d = mo(), u = go(), y = nt(At), S = fe(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && pt.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(x) {
      return typeof x == "string" && x.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(S, a, d, y, u), an(function() {
      if (!d.server)
        return l(S, a, d, y, u), function() {
          return i.removeStyles(S, d);
        };
    }, [S, a, d, y, u]), null;
  }
  function l(a, d, u, y, S) {
    if (i.isStatic)
      i.renderStyles(a, fs, u, S);
    else {
      var x = Ue({}, d, { theme: xo(d, y, c.defaultProps) });
      i.renderStyles(a, x, u, S);
    }
  }
  return process.env.NODE_ENV !== "production" && vo(s), pt.memo(c);
}
function Ze(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = yt.apply(void 0, [e].concat(t)).join(""), s = qn(o);
  return new yo(s, o);
}
var cn = function() {
  return nt(At);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const b = Dn;
var gt = {}, Zs = {
  get exports() {
    return gt;
  },
  set exports(e) {
    gt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Re, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", u = "month", y = "quarter", S = "year", x = "date", $ = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
      var A = ["th", "st", "nd", "rd"], T = I % 100;
      return "[" + I + (A[(T - 20) % 10] || A[T] || A[0]) + "]";
    } }, j = function(I, A, T) {
      var Y = String(I);
      return !Y || Y.length >= A ? I : "" + Array(A + 1 - Y.length).join(T) + I;
    }, F = { s: j, z: function(I) {
      var A = -I.utcOffset(), T = Math.abs(A), Y = Math.floor(T / 60), R = T % 60;
      return (A <= 0 ? "+" : "-") + j(Y, 2, "0") + ":" + j(R, 2, "0");
    }, m: function I(A, T) {
      if (A.date() < T.date())
        return -I(T, A);
      var Y = 12 * (T.year() - A.year()) + (T.month() - A.month()), R = A.clone().add(Y, u), M = T - R < 0, L = A.clone().add(Y + (M ? -1 : 1), u);
      return +(-(Y + (T - R) / (M ? R - L : L - R)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: u, y: S, w: d, d: a, D: x, h: l, m: c, s: i, ms: s, Q: y }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, f = "en", m = {};
    m[f] = K;
    var v = function(I) {
      return I instanceof W;
    }, E = function I(A, T, Y) {
      var R;
      if (!A)
        return f;
      if (typeof A == "string") {
        var M = A.toLowerCase();
        m[M] && (R = M), T && (m[M] = T, R = M);
        var L = A.split("-");
        if (!R && L.length > 1)
          return I(L[0]);
      } else {
        var te = A.name;
        m[te] = A, R = te;
      }
      return !Y && R && (f = R), R || !Y && f;
    }, C = function(I, A) {
      if (v(I))
        return I.clone();
      var T = typeof A == "object" ? A : {};
      return T.date = I, T.args = arguments, new W(T);
    }, w = F;
    w.l = E, w.i = v, w.w = function(I, A) {
      return C(I, { locale: A.$L, utc: A.$u, x: A.$x, $offset: A.$offset });
    };
    var W = function() {
      function I(T) {
        this.$L = E(T.locale, null, !0), this.parse(T);
      }
      var A = I.prototype;
      return A.parse = function(T) {
        this.$d = function(Y) {
          var R = Y.date, M = Y.utc;
          if (R === null)
            return new Date(NaN);
          if (w.u(R))
            return new Date();
          if (R instanceof Date)
            return new Date(R);
          if (typeof R == "string" && !/Z$/i.test(R)) {
            var L = R.match(g);
            if (L) {
              var te = L[2] - 1 || 0, ee = (L[7] || "0").substring(0, 3);
              return M ? new Date(Date.UTC(L[1], te, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, ee)) : new Date(L[1], te, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, ee);
            }
          }
          return new Date(R);
        }(T), this.$x = T.x || {}, this.init();
      }, A.init = function() {
        var T = this.$d;
        this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
      }, A.$utils = function() {
        return w;
      }, A.isValid = function() {
        return this.$d.toString() !== $;
      }, A.isSame = function(T, Y) {
        var R = C(T);
        return this.startOf(Y) <= R && R <= this.endOf(Y);
      }, A.isAfter = function(T, Y) {
        return C(T) < this.startOf(Y);
      }, A.isBefore = function(T, Y) {
        return this.endOf(Y) < C(T);
      }, A.$g = function(T, Y, R) {
        return w.u(T) ? this[Y] : this.set(R, T);
      }, A.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, A.valueOf = function() {
        return this.$d.getTime();
      }, A.startOf = function(T, Y) {
        var R = this, M = !!w.u(Y) || Y, L = w.p(T), te = function(_, Q) {
          var Z = w.w(R.$u ? Date.UTC(R.$y, Q, _) : new Date(R.$y, Q, _), R);
          return M ? Z : Z.endOf(a);
        }, ee = function(_, Q) {
          return w.w(R.toDate()[_].apply(R.toDate("s"), (M ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), R);
        }, B = this.$W, N = this.$M, X = this.$D, re = "set" + (this.$u ? "UTC" : "");
        switch (L) {
          case S:
            return M ? te(1, 0) : te(31, 11);
          case u:
            return M ? te(1, N) : te(0, N + 1);
          case d:
            var k = this.$locale().weekStart || 0, U = (B < k ? B + 7 : B) - k;
            return te(M ? X - U : X + (6 - U), N);
          case a:
          case x:
            return ee(re + "Hours", 0);
          case l:
            return ee(re + "Minutes", 1);
          case c:
            return ee(re + "Seconds", 2);
          case i:
            return ee(re + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, A.endOf = function(T) {
        return this.startOf(T, !1);
      }, A.$set = function(T, Y) {
        var R, M = w.p(T), L = "set" + (this.$u ? "UTC" : ""), te = (R = {}, R[a] = L + "Date", R[x] = L + "Date", R[u] = L + "Month", R[S] = L + "FullYear", R[l] = L + "Hours", R[c] = L + "Minutes", R[i] = L + "Seconds", R[s] = L + "Milliseconds", R)[M], ee = M === a ? this.$D + (Y - this.$W) : Y;
        if (M === u || M === S) {
          var B = this.clone().set(x, 1);
          B.$d[te](ee), B.init(), this.$d = B.set(x, Math.min(this.$D, B.daysInMonth())).$d;
        } else
          te && this.$d[te](ee);
        return this.init(), this;
      }, A.set = function(T, Y) {
        return this.clone().$set(T, Y);
      }, A.get = function(T) {
        return this[w.p(T)]();
      }, A.add = function(T, Y) {
        var R, M = this;
        T = Number(T);
        var L = w.p(Y), te = function(N) {
          var X = C(M);
          return w.w(X.date(X.date() + Math.round(N * T)), M);
        };
        if (L === u)
          return this.set(u, this.$M + T);
        if (L === S)
          return this.set(S, this.$y + T);
        if (L === a)
          return te(1);
        if (L === d)
          return te(7);
        var ee = (R = {}, R[c] = n, R[l] = o, R[i] = t, R)[L] || 1, B = this.$d.getTime() + T * ee;
        return w.w(B, this);
      }, A.subtract = function(T, Y) {
        return this.add(-1 * T, Y);
      }, A.format = function(T) {
        var Y = this, R = this.$locale();
        if (!this.isValid())
          return R.invalidDate || $;
        var M = T || "YYYY-MM-DDTHH:mm:ssZ", L = w.z(this), te = this.$H, ee = this.$m, B = this.$M, N = R.weekdays, X = R.months, re = function(Q, Z, z, p) {
          return Q && (Q[Z] || Q(Y, M)) || z[Z].slice(0, p);
        }, k = function(Q) {
          return w.s(te % 12 || 12, Q, "0");
        }, U = R.meridiem || function(Q, Z, z) {
          var p = Q < 12 ? "AM" : "PM";
          return z ? p.toLowerCase() : p;
        }, _ = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: B + 1, MM: w.s(B + 1, 2, "0"), MMM: re(R.monthsShort, B, X, 3), MMMM: re(X, B), D: this.$D, DD: w.s(this.$D, 2, "0"), d: String(this.$W), dd: re(R.weekdaysMin, this.$W, N, 2), ddd: re(R.weekdaysShort, this.$W, N, 3), dddd: N[this.$W], H: String(te), HH: w.s(te, 2, "0"), h: k(1), hh: k(2), a: U(te, ee, !0), A: U(te, ee, !1), m: String(ee), mm: w.s(ee, 2, "0"), s: String(this.$s), ss: w.s(this.$s, 2, "0"), SSS: w.s(this.$ms, 3, "0"), Z: L };
        return M.replace(O, function(Q, Z) {
          return Z || _[Q] || L.replace(":", "");
        });
      }, A.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, A.diff = function(T, Y, R) {
        var M, L = w.p(Y), te = C(T), ee = (te.utcOffset() - this.utcOffset()) * n, B = this - te, N = w.m(this, te);
        return N = (M = {}, M[S] = N / 12, M[u] = N, M[y] = N / 3, M[d] = (B - ee) / 6048e5, M[a] = (B - ee) / 864e5, M[l] = B / o, M[c] = B / n, M[i] = B / t, M)[L] || B, R ? N : w.a(N);
      }, A.daysInMonth = function() {
        return this.endOf(u).$D;
      }, A.$locale = function() {
        return m[this.$L];
      }, A.locale = function(T, Y) {
        if (!T)
          return this.$L;
        var R = this.clone(), M = E(T, Y, !0);
        return M && (R.$L = M), R;
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
      }, I;
    }(), V = W.prototype;
    return C.prototype = V, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", u], ["$y", S], ["$D", x]].forEach(function(I) {
      V[I[1]] = function(A) {
        return this.$g(A, I[0], I[1]);
      };
    }), C.extend = function(I, A) {
      return I.$i || (I(A, W, C), I.$i = !0), C;
    }, C.locale = E, C.isDayjs = v, C.unix = function(I) {
      return C(1e3 * I);
    }, C.en = m[f], C.Ls = m, C.p = {}, C;
  });
})(Zs);
const P = gt, Ft = "reactSchedulerOutsideWrapper", je = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Vs = js`

  #${Ft} {
    font-family: ${je};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Ft} *,
 #${Ft} *:before,
 #${Ft} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Gs = {
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
}, Us = {
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
}, Ot = `
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
const _e = 50, Xe = 24, xt = 16, Dt = 40, rn = Dt + xt + Xe, Pt = 84, ye = 56, Fe = 196, Ge = 12, Ye = 50, It = 24, Ht = 16, En = 40, Xs = It + Ht + En, Sr = 24, Cr = 52, ct = {
  topRow: `600 14px ${je}`,
  middleRow: `400 10px ${je}`,
  bottomRow: {
    name: `600 14px ${je}`,
    number: `600 10px ${je}`,
    hoursInDay: `400 9px ${je}`
  }
}, Et = 3, So = 12, on = 24, Co = "reactSchedulerCanvasHeaderWrapper", ko = "reactSchedulerCanvasWrapper", tt = Ft, Ks = 4, ln = 48, it = 5, Js = 40, kr = 8, Qn = Xe / 2 + 2, Mo = xt / 2 + Xe + 1, Mr = 2, Ie = 60, Be = 21, $o = 58, Do = "reactSchedulerBody", $r = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, er = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, Eo = (e, r) => P(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), _o = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: er(e),
  isCurrentDay: e.isSame(P(), "day"),
  year: parseInt(e.format("YYYY"))
}), tr = (e, r, t, n, o, s, i, c = !1) => {
  s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.mode === "dark" ? i.colors.primary : "#F2F6F4", e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ye);
  const l = i.mode === "dark";
  e.strokeStyle = l ? i.colors.border : "#EEF3F0", e.beginPath(), e.moveTo(r + n - 0.5, t), e.lineTo(r + n - 0.5, t + ye), e.stroke(), e.strokeStyle = l ? i.colors.border : "#E4EAE7", e.beginPath(), e.moveTo(r, t + 0.5), e.lineTo(r + n, t + 0.5), e.stroke(), c && (e.strokeStyle = l ? i.colors.today : "#5C8374", e.beginPath(), e.moveTo(r + 0.5, t), e.lineTo(r + 0.5, t + ye), e.stroke());
}, nr = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Be;
}, qs = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = nr(i, s);
    for (let l = 0; l <= t; l++) {
      const a = P(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), d = a.isSame(P(), "day"), u = a.date() === 1;
      tr(
        e,
        l * _e,
        i * ye + c,
        _e,
        er(a),
        d,
        o,
        u
      );
    }
  }
}, Qs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, ei = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Ge;
  const l = r * ye + s.length * Be;
  for (let a = 0; a <= t; a++) {
    const u = P(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(P(), "week");
    for (let y = 0; y < r; y++) {
      const S = nr(y, s);
      tr(e, i, y * ye + S, Pt, !0, u, o);
    }
    i += Pt;
  }
  for (let a = 0; a < t; a++) {
    const d = Eo(n, a) * Ge;
    Qs(e, c, l, o), c += d;
  }
}, ti = (e, r, t, n, o, s = []) => {
  const i = P(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const l = nr(c, s);
    for (let a = 0; a <= t; a++) {
      let d;
      a === Math.floor(t / 2) ? d = P() : a > Math.floor(t / 2) ? d = P().add(a - Math.floor(t / 2), "hours") : d = P().subtract(Math.floor(t / 2) - c, "hours");
      const u = i.isSame(P(), "day") && d.isSame(P(), "hour");
      tr(
        e,
        a * Ye + Ye / 2 - 0.5,
        c * ye + l,
        Ye,
        er(d),
        u,
        o
      );
    }
  }
}, ni = (e, r, t, n, o = "group") => {
  const s = t * ye + r * Be, i = e.canvas.width;
  e.fillStyle = o === "subcontract" ? n.colors.subcontractBorder + "40" : o === "provider" ? n.colors.subcontractBorder + "2E" : o === "warning" ? n.colors.unassignedBorder + "26" : n.mode === "dark" ? n.colors.primary + "80" : "#E9EFEC", e.fillRect(0, s, i, Be);
}, ri = (e, r, t, n, o, s, i = [], c = -1, l = -1, a = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(ko)) {
    switch (r) {
      case 0:
        ei(e, t, n, o, s, i);
        break;
      case 1:
        qs(e, t, n, o, s, i);
        break;
      case 2:
        ti(e, t, n, o, s, i);
        break;
    }
    for (let u = 0; u < i.length; u++) {
      const y = u === c ? "subcontract" : u === l ? "warning" : a.includes(u) ? "provider" : "group";
      ni(e, u, i[u], s, y);
    }
    if (r === 1) {
      const u = P(`${o.year}-${o.month + 1}-${o.dayOfMonth}`), y = t * ye + i.length * Be;
      e.strokeStyle = s.mode === "dark" ? s.colors.today : "#5C8374", e.setLineDash([]);
      for (let S = 0; S <= n; S++)
        if (u.add(S, "days").date() === 1) {
          const x = S * _e + 0.5;
          e.beginPath(), e.moveTo(x, 0), e.lineTo(x, y), e.stroke();
        }
    }
  }
};
var _n = {}, oi = {
  get exports() {
    return _n;
  },
  set exports(e) {
    _n = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Re, function() {
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
        var y = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), S = this.diff(y, t, !0);
        return S < 0 ? i(this).startOf("week").week() : Math.ceil(S);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(oi);
const si = _n;
var Tn = {}, ii = {
  get exports() {
    return Tn;
  },
  set exports(e) {
    Tn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Re, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(ii);
const ai = Tn;
var An = {}, ci = {
  get exports() {
    return An;
  },
  set exports(e) {
    An = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Re, function() {
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
        var d, u, y, S, x = i(this), $ = (d = this.isoWeekYear(), u = this.$u, y = (u ? s.utc : s)().year(d).startOf("year"), S = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (S += 7), y.add(S, t));
        return x.diff($, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, d) {
        var u = this.$utils(), y = !!u.u(d) || d;
        return u.p(a) === "isoweek" ? y ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, d);
      };
    };
  });
})(ci);
const li = An;
var Pn = {}, di = {
  get exports() {
    return Pn;
  },
  set exports(e) {
    Pn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Re, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), d = o(i), u = (l = l || "()")[0] === "(", y = l[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(d, c) : !this.isAfter(d, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(di);
const ui = Pn;
var In = {}, fi = {
  get exports() {
    return In;
  },
  set exports(e) {
    In = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Re, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, S = function(f) {
      return f instanceof F;
    }, x = function(f, m, v) {
      return new F(f, v, m.$l);
    }, $ = function(f) {
      return n.p(f) + "s";
    }, g = function(f) {
      return f < 0;
    }, O = function(f) {
      return g(f) ? Math.ceil(f) : Math.floor(f);
    }, K = function(f) {
      return Math.abs(f);
    }, j = function(f, m) {
      return f ? g(f) ? { negative: !0, format: "" + K(f) + m } : { negative: !1, format: "" + f + m } : { negative: !1, format: "" };
    }, F = function() {
      function f(v, E, C) {
        var w = this;
        if (this.$d = {}, this.$l = C, v === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E)
          return x(v * y[$(E)], this);
        if (typeof v == "number")
          return this.$ms = v, this.parseFromMilliseconds(), this;
        if (typeof v == "object")
          return Object.keys(v).forEach(function(I) {
            w.$d[$(I)] = v[I];
          }), this.calMilliseconds(), this;
        if (typeof v == "string") {
          var W = v.match(u);
          if (W) {
            var V = W.slice(2).map(function(I) {
              return I != null ? Number(I) : 0;
            });
            return this.$d.years = V[0], this.$d.months = V[1], this.$d.weeks = V[2], this.$d.days = V[3], this.$d.hours = V[4], this.$d.minutes = V[5], this.$d.seconds = V[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var m = f.prototype;
      return m.calMilliseconds = function() {
        var v = this;
        this.$ms = Object.keys(this.$d).reduce(function(E, C) {
          return E + (v.$d[C] || 0) * y[C];
        }, 0);
      }, m.parseFromMilliseconds = function() {
        var v = this.$ms;
        this.$d.years = O(v / a), v %= a, this.$d.months = O(v / d), v %= d, this.$d.days = O(v / c), v %= c, this.$d.hours = O(v / i), v %= i, this.$d.minutes = O(v / s), v %= s, this.$d.seconds = O(v / o), v %= o, this.$d.milliseconds = v;
      }, m.toISOString = function() {
        var v = j(this.$d.years, "Y"), E = j(this.$d.months, "M"), C = +this.$d.days || 0;
        this.$d.weeks && (C += 7 * this.$d.weeks);
        var w = j(C, "D"), W = j(this.$d.hours, "H"), V = j(this.$d.minutes, "M"), I = this.$d.seconds || 0;
        this.$d.milliseconds && (I += this.$d.milliseconds / 1e3);
        var A = j(I, "S"), T = v.negative || E.negative || w.negative || W.negative || V.negative || A.negative, Y = W.format || V.format || A.format ? "T" : "", R = (T ? "-" : "") + "P" + v.format + E.format + w.format + Y + W.format + V.format + A.format;
        return R === "P" || R === "-P" ? "P0D" : R;
      }, m.toJSON = function() {
        return this.toISOString();
      }, m.format = function(v) {
        var E = v || "YYYY-MM-DDTHH:mm:ss", C = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return E.replace(l, function(w, W) {
          return W || String(C[w]);
        });
      }, m.as = function(v) {
        return this.$ms / y[$(v)];
      }, m.get = function(v) {
        var E = this.$ms, C = $(v);
        return C === "milliseconds" ? E %= 1e3 : E = C === "weeks" ? O(E / y[C]) : this.$d[C], E === 0 ? 0 : E;
      }, m.add = function(v, E, C) {
        var w;
        return w = E ? v * y[$(E)] : S(v) ? v.$ms : x(v, this).$ms, x(this.$ms + w * (C ? -1 : 1), this);
      }, m.subtract = function(v, E) {
        return this.add(v, E, !0);
      }, m.locale = function(v) {
        var E = this.clone();
        return E.$l = v, E;
      }, m.clone = function() {
        return x(this.$ms, this);
      }, m.humanize = function(v) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!v);
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
      }, f;
    }();
    return function(f, m, v) {
      t = v, n = v().$utils(), v.duration = function(w, W) {
        var V = v.locale();
        return x(w, { $l: V }, W);
      }, v.isDuration = S;
      var E = m.prototype.add, C = m.prototype.subtract;
      m.prototype.add = function(w, W) {
        return S(w) && (w = w.asMilliseconds()), E.bind(this)(w, W);
      }, m.prototype.subtract = function(w, W) {
        return S(w) && (w = w.asMilliseconds()), C.bind(this)(w, W);
      };
    };
  });
})(fi);
const hi = In;
var pi = "Expected a function", Dr = 0 / 0, mi = "[object Symbol]", gi = /^\s+|\s+$/g, yi = /^[-+]0x[0-9a-f]+$/i, vi = /^0b[01]+$/i, xi = /^0o[0-7]+$/i, bi = parseInt, wi = typeof Re == "object" && Re && Re.Object === Object && Re, Si = typeof self == "object" && self && self.Object === Object && self, Ci = wi || Si || Function("return this")(), ki = Object.prototype, Mi = ki.toString, $i = Math.max, Di = Math.min, gn = function() {
  return Ci.Date.now();
};
function Ei(e, r, t) {
  var n, o, s, i, c, l, a = 0, d = !1, u = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(pi);
  r = Er(r) || 0, On(t) && (d = !!t.leading, u = "maxWait" in t, s = u ? $i(Er(t.maxWait) || 0, r) : s, y = "trailing" in t ? !!t.trailing : y);
  function S(m) {
    var v = n, E = o;
    return n = o = void 0, a = m, i = e.apply(E, v), i;
  }
  function x(m) {
    return a = m, c = setTimeout(O, r), d ? S(m) : i;
  }
  function $(m) {
    var v = m - l, E = m - a, C = r - v;
    return u ? Di(C, s - E) : C;
  }
  function g(m) {
    var v = m - l, E = m - a;
    return l === void 0 || v >= r || v < 0 || u && E >= s;
  }
  function O() {
    var m = gn();
    if (g(m))
      return K(m);
    c = setTimeout(O, $(m));
  }
  function K(m) {
    return c = void 0, y && n ? S(m) : (n = o = void 0, i);
  }
  function j() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function F() {
    return c === void 0 ? i : K(gn());
  }
  function f() {
    var m = gn(), v = g(m);
    if (n = arguments, o = this, l = m, v) {
      if (c === void 0)
        return x(l);
      if (u)
        return c = setTimeout(O, r), S(l);
    }
    return c === void 0 && (c = setTimeout(O, r)), i;
  }
  return f.cancel = j, f.flush = F, f;
}
function On(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function _i(e) {
  return !!e && typeof e == "object";
}
function Ti(e) {
  return typeof e == "symbol" || _i(e) && Mi.call(e) == mi;
}
function Er(e) {
  if (typeof e == "number")
    return e;
  if (Ti(e))
    return Dr;
  if (On(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = On(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(gi, "");
  var t = vi.test(e);
  return t || xi.test(e) ? bi(e.slice(2), t ? 2 : 8) : yi.test(e) ? Dr : +e;
}
var Ln = Ei;
const qt = [0, 1, 2];
var Wt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Wt || {});
const To = (e) => qt.includes(e), Mt = (e) => {
  var n;
  const t = (((n = document.getElementById(tt)) == null ? void 0 : n.clientWidth) || 0) - Fe;
  switch (e) {
    case 1:
      return Math.ceil(t / _e) * Et;
    case 2:
      return Math.ceil(t / Ye) * Et;
    default:
      return Math.ceil(t / Pt) * Et;
  }
}, Ai = (e) => Mt(e) / Et, dn = (e, r) => {
  const t = Mt(r) / 2;
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
}, Pi = (e, r) => {
  const t = dn(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, rr = () => {
  var t;
  const e = ((t = document.getElementById(tt)) == null ? void 0 : t.clientWidth) || 0;
  return Math.max(0, e - Fe) * Et;
}, Ao = Vn({
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
  date: P(),
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
P.extend(si);
P.extend(ai);
P.extend(li);
P.extend(ui);
P.extend(hi);
const Ii = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = P(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c,
  toolbarActions: l
}) => {
  const { zoom: a, maxRecordsPerPage: d = 50 } = n, [u, y] = he(a), [S, x] = he(P()), [$, g] = he(null), [O, K] = he(!1), [j, F] = he(Mt(u)), f = qt[u] !== qt[qt.length - 1], m = u !== 0, v = $e(() => Pi(S, u), [S, u]), E = dn(S, u).startDate, C = P(E).dayOfYear(), w = _o(E), W = fe(null), V = fe(!1), I = fe(null), [A, T] = he([{ x: 0, y: 0 }]), Y = ae(
    (Z, z = "auto") => {
      var J, D, G, ne;
      const p = rr();
      switch (Z) {
        case "back":
          return (J = W.current) == null ? void 0 : J.scrollTo({
            behavior: z,
            left: p / 3
          });
        case "forward":
          return (D = W.current) == null ? void 0 : D.scrollTo({
            behavior: z,
            left: p / 3
          });
        case "middle": {
          const q = p / Et / 4;
          return (G = W.current) == null ? void 0 : G.scrollTo({
            behavior: z,
            left: p / 2 - q
          });
        }
        default:
          return (ne = W.current) == null ? void 0 : ne.scrollTo({
            behavior: z,
            left: p / 2
          });
      }
    },
    []
  ), R = (Z) => {
    T(Z);
  }, M = ae(
    (Z) => {
      const z = Ai(u);
      let p;
      switch (u) {
        case 0:
          p = z * 7;
          break;
        case 1:
          p = z;
          break;
        case 2:
          p = Math.ceil(z / on);
          break;
      }
      Ln(() => {
        switch ((Z === "forward" || Z === "back") && (V.current = !0), I.current = Z, Z) {
          case "back":
            x((D) => D.subtract(p, "days"));
            break;
          case "forward":
            x((D) => D.add(p, "days"));
            break;
          case "middle":
            x(P());
            break;
        }
        s == null || s(v);
      }, 300)();
    },
    [s, v, u]
  );
  ge(() => {
    I.current && (Y(I.current), I.current = null);
  }, [S, Y]), ge(() => {
    W.current = document.getElementById(tt), F(Mt(u));
  }, [u]), ge(() => {
    const Z = () => F(Mt(u));
    return window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
  }, [u]), ge(() => {
    s == null || s(v);
  }, [s, v]), ge(() => {
    K(!1);
  }, [o]), ge(() => {
    O || (Y("middle"), K(!0), x(o));
  }, [o, O, Y]);
  const L = () => {
    t || (x(
      (Z) => u === 2 ? Z.add(Sr, "hours") : Z.add(Mr, "weeks")
    ), s == null || s(v));
  }, te = ae(() => {
    t || M("forward");
  }, [t, M]), ee = () => {
    t || (x(
      (Z) => u === 2 ? Z.subtract(Sr, "hours") : Z.subtract(Mr, "weeks")
    ), s == null || s(v));
  }, B = ae(() => {
    !O || t || M("back");
  }, [O, t, M]), N = ae(() => {
    t || (I.current = "middle", x(P()), g(null), s == null || s(v));
  }, [t, s, v]), X = ae(
    (Z) => {
      if (t)
        return;
      const z = P(Z).startOf("day");
      z.isValid() && (I.current = "middle", x(z), g(z), s == null || s(v));
    },
    [t, s, v]
  );
  ge(() => {
    if (!$)
      return;
    const Z = () => g(null);
    return document.addEventListener("mousedown", Z, { once: !0 }), () => document.removeEventListener("mousedown", Z);
  }, [$]);
  const re = () => U(u + 1), k = () => U(u - 1), U = (Z) => {
    To(Z) && (y(Z), F(Mt(Z)), s == null || s(v));
  }, _ = () => i == null ? void 0 : i(), { Provider: Q } = Ao;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: L,
        handleScrollNext: te,
        handleGoPrev: ee,
        handleScrollPrev: B,
        handleGoToday: N,
        goToDate: X,
        zoomIn: re,
        zoomOut: k,
        setZoom: U,
        zoom: u,
        isNextZoom: f,
        isPrevZoom: m,
        date: S,
        jumpDate: $,
        isLoading: t,
        cols: j,
        startDate: w,
        dayOfYear: C,
        toggleDisplayActiveUnits: _,
        tilesCoords: A,
        updateTilesCoords: R,
        recordsThreshold: d,
        onClearFilterData: c,
        suppressNextSlideRef: V,
        toolbarActions: l
      },
      children: r
    }
  );
}, Ke = () => nt(Ao), Po = (e, r, t) => {
  const n = Math.max(0, r), o = Math.max(0, t);
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = o * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = o + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Io = () => {
  var e;
  return typeof window < "u" && !!((e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Oo = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ye + n * Be;
    if (e >= s + Be)
      n++;
    else if (e >= s)
      return o * ye + n * Be - n * Be;
  }
  return t - n * Be;
}, Oi = 5, _r = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > Oi;
}, $t = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, Li = ({
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
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((U) => ({ ...U, data: [U.data] })) : r : e, {
    enabled: d = !0,
    isDraggable: u,
    resourceOnly: y = !1,
    isValidDrop: S
  } = i, [x, $] = he("idle"), [g, O] = he(null), [K, j] = he({ x: 0, y: 0 }), [F, f] = he({ width: 0, height: 48 }), [m, v] = he(null), [E, C] = he(!0), w = fe({ x: 0, y: 0 }), W = fe({ x: 0, y: 0 }), V = fe({ x: 0, y: 0 }), I = fe(null), A = fe(null), T = fe(0), Y = fe(null), R = ae(
    (U) => !d || U.draggable === !1 ? !1 : u ? u(U) : !0,
    [d, u]
  ), M = ae(
    (U, _) => {
      const Q = Oo(_, l), Z = Math.floor(Q / ye);
      let z;
      switch (t) {
        case 0:
          z = Ge * 7;
          break;
        case 1:
          z = _e;
          break;
        case 2:
          z = Ye;
          break;
        default:
          z = _e;
      }
      const p = Math.floor(U / z);
      let J;
      const D = P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          J = D.add(p * 7, "days").toDate();
          break;
        case 1:
          J = D.add(p, "days").toDate();
          break;
        case 2:
          J = D.add(p, "hours").toDate();
          break;
        default:
          J = D.toDate();
      }
      return { snappedDate: J, snappedResourceIndex: Z };
    },
    [t, n, l]
  ), L = ae(
    (U, _, Q, Z) => {
      const z = [], p = _.getTime(), J = Q.getTime(), D = a.find((ne) => ne.id === Z);
      if (!D)
        return z;
      const G = [];
      for (const ne of D.data)
        Array.isArray(ne) ? G.push(...ne) : G.push(ne);
      for (const ne of G) {
        if (ne.segmentId === U.segmentId)
          continue;
        const q = ne.startDate.getTime(), ce = ne.endDate.getTime();
        if (p >= q && p < ce || J > q && J <= ce || p <= q && J >= ce) {
          const de = new Date(Math.max(p, q)), ve = new Date(Math.min(J, ce)), De = ve.getTime() - de.getTime();
          z.push({
            event: ne,
            conflictStart: de,
            conflictEnd: ve,
            overlapDuration: De
          });
        }
      }
      return z;
    },
    [a]
  ), te = ae(
    (U, _, Q, Z) => {
      const z = [], p = _.getTime(), J = Q.getTime(), D = P(_).format("YYYY-MM-DD"), G = a.find((q) => q.id === Z);
      if (!G)
        return z;
      const ne = [];
      for (const q of G.data)
        Array.isArray(q) ? ne.push(...q) : ne.push(q);
      for (const q of ne) {
        if (q.segmentId === U.segmentId)
          continue;
        const ce = q.startDate.getTime(), me = q.endDate.getTime(), de = P(q.startDate).format("YYYY-MM-DD"), ve = P(q.endDate).format("YYYY-MM-DD"), De = P(Q).format("YYYY-MM-DD");
        if (!(de === D || ve === D || de === De || ve === De || P(q.startDate).isBefore(_, "day") && P(q.endDate).isAfter(Q, "day")) || p >= ce && p < me || J > ce && J <= me || p <= ce && J >= me)
          continue;
        let pe, Oe;
        me <= p ? (pe = p - me, Oe = "before") : (pe = ce - J, Oe = "after"), z.push({
          event: q,
          timeGap: pe,
          position: Oe
        });
      }
      return z.sort((q, ce) => q.timeGap - ce.timeGap);
    },
    [a]
  ), ee = ae(
    (U, _, Q) => {
      const Z = M(_, Q);
      let z, p;
      if (y)
        z = U.startDate, p = U.endDate;
      else {
        const me = P(U.endDate).diff(U.startDate);
        z = Z.snappedDate, p = P(z).add(me, "milliseconds").toDate();
      }
      let J = 0, D = "", G;
      for (const me of e) {
        const de = Math.max(me.data.length, 1);
        if (Z.snappedResourceIndex < J + de) {
          D = me.id, G = me.capacity;
          break;
        }
        J += de;
      }
      if (!D)
        return null;
      let ne = !0;
      G !== void 0 && U.totalPassengers !== void 0 && (ne = U.totalPassengers <= G);
      const q = L(U, z, p, D), ce = q.length === 0 ? te(U, z, p, D) : [];
      return {
        startDate: z,
        endDate: p,
        resourceId: D,
        resourceIndex: Z.snappedResourceIndex,
        resourceCapacity: G,
        hasCapacity: ne,
        conflicts: q,
        hasConflict: q.length > 0,
        nearbyEvents: ce
      };
    },
    [M, e, y, L, te]
  ), B = ae(
    (U, _) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - T.current < 100)
        return;
      T.current = Q;
      const Z = {
        event: U,
        currentStartDate: _.startDate,
        currentEndDate: _.endDate,
        currentResourceId: _.resourceId,
        conflicts: _.conflicts
      };
      s(Z);
    },
    [s]
  ), N = ae(
    (U, _) => {
      if (!R(U) || !c.current)
        return;
      _.preventDefault(), _.stopPropagation();
      const Q = _.target.closest('[style*="left"]');
      let Z = 0, z = 0;
      Q && Q.style.left && Q.style.top && (Z = parseInt(Q.style.left), z = parseInt(Q.style.top));
      const p = $t(
        _.clientX,
        _.clientY,
        c.current
      );
      w.current = { x: Z, y: z }, W.current = { x: _.clientX, y: _.clientY }, V.current = {
        x: p.x - Z,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, Y.current = {
        startDate: U.startDate,
        endDate: U.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const G of e) {
        for (const ne of G.data)
          if (ne.some((q) => q.segmentId === U.segmentId)) {
            Y.current.resourceId = G.id;
            break;
          }
        if (Y.current.resourceId)
          break;
      }
      O(U), $("potential"), j({ x: Z, y: z });
      let J = 100, D = 48;
      if (Q) {
        const G = Q.getBoundingClientRect();
        J = G.width, D = G.height;
      }
      f({ width: J, height: D });
    },
    [R, c, e, t]
  ), X = ae(
    (U) => {
      if (!c.current)
        return;
      let _ = c.current;
      for (; _ && _ !== document.body; ) {
        const q = window.getComputedStyle(_);
        if (_.scrollHeight > _.clientHeight && (q.overflowY === "auto" || q.overflowY === "scroll" || q.overflow === "auto" || q.overflow === "scroll"))
          break;
        _ = _.parentElement;
      }
      (!_ || _ === document.body) && (_ = document.documentElement);
      const Q = _.getBoundingClientRect(), Z = U.clientY, z = 50, p = 12, J = Z - Q.top, D = Q.bottom - Z;
      let G = !1, ne = 0;
      J < z && J > 0 ? (G = !0, ne = -p * (1 - J / z)) : D < z && D > 0 && (G = !0, ne = p * (1 - D / z)), G ? (A.current && cancelAnimationFrame(A.current), A.current = requestAnimationFrame(() => {
        _.scrollTop += ne, x === "dragging" && X(U);
      })) : A.current && (cancelAnimationFrame(A.current), A.current = null);
    },
    [c, x]
  ), re = ae(
    (U) => {
      if (x === "idle" || x === "animating" || !g || !c.current)
        return;
      const _ = { x: U.clientX, y: U.clientY };
      if (x === "potential")
        if (_r(W.current, _))
          $("dragging");
        else
          return;
      X(U);
      const Q = $t(
        U.clientX,
        U.clientY,
        c.current
      );
      I.current && cancelAnimationFrame(I.current), I.current = requestAnimationFrame(() => {
        const Z = {
          x: Q.x - V.current.x,
          y: Q.y - V.current.y
        };
        j(Z);
        const z = ee(g, Q.x, Q.y);
        if (z && S) {
          const p = {
            event: g,
            currentStartDate: z.startDate,
            currentEndDate: z.endDate,
            currentResourceId: z.resourceId,
            conflicts: z.conflicts
          };
          z.hasConflict = !S(p);
        }
        if (v(z), z) {
          const p = z.hasCapacity !== !1;
          C(p), B(g, z);
        }
      });
    },
    [x, g, c, ee, B, S, X]
  ), k = ae(
    async (U) => {
      if (x === "idle" || x === "animating")
        return;
      const _ = { x: U.clientX, y: U.clientY };
      if (!_r(W.current, _) || x === "potential") {
        $("idle"), O(null), v(null);
        return;
      }
      if (!g || !m || !Y.current) {
        $("idle"), O(null), v(null);
        return;
      }
      if (m.hasCapacity === !1) {
        C(!1), $("animating"), j(w.current), setTimeout(() => {
          $("idle"), O(null), v(null), C(!0);
        }, 300);
        return;
      }
      const Z = {
        event: g,
        originalStartDate: Y.current.startDate,
        originalEndDate: Y.current.endDate,
        originalResourceId: Y.current.resourceId,
        newStartDate: m.startDate,
        newEndDate: m.endDate,
        newResourceId: m.resourceId,
        hasConflict: m.hasConflict,
        conflicts: m.conflicts
      };
      let z = !0;
      if (o)
        try {
          const p = o(Z);
          z = p instanceof Promise ? await p : p;
        } catch {
          z = !1;
        }
      z ? (C(!0), $("idle"), O(null), v(null)) : (C(!1), $("animating"), j(w.current), setTimeout(() => {
        $("idle"), O(null), v(null), C(!0);
      }, 300));
    },
    [x, g, m, o, S]
  );
  return ge(() => {
    if (x === "potential" || x === "dragging") {
      const U = (Q) => re(Q), _ = (Q) => k(Q);
      return document.addEventListener("mousemove", U), document.addEventListener("mouseup", _), () => {
        document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", _);
      };
    } else
      return () => {
      };
  }, [x, re, k]), ge(() => () => {
    I.current && (cancelAnimationFrame(I.current), I.current = null), A.current && (cancelAnimationFrame(A.current), A.current = null);
  }, []), ge(() => {
    (x === "idle" || x === "animating") && (I.current && (cancelAnimationFrame(I.current), I.current = null), A.current && (cancelAnimationFrame(A.current), A.current = null));
  }, [x]), ge(() => {
    (x === "dragging" || x === "potential") && (x === "dragging" ? ($("animating"), j(w.current), setTimeout(() => {
      $("idle"), O(null), v(null);
    }, 300)) : ($("idle"), O(null), v(null)));
  }, [t]), ge(() => {
    if ((x === "dragging" || x === "potential") && g) {
      let U = !1;
      for (const _ of e) {
        for (const Q of _.data)
          if (Q.some((Z) => Z.segmentId === g.segmentId)) {
            U = !0;
            break;
          }
        if (U)
          break;
      }
      U || (x === "dragging" ? ($("animating"), j(w.current), setTimeout(() => {
        $("idle"), O(null), v(null);
      }, 300)) : ($("idle"), O(null), v(null)));
    }
  }, [e, x, g]), {
    dragState: x,
    draggedEvent: g,
    ghostPosition: K,
    ghostDimensions: F,
    dropTarget: m,
    isValidDrop: E,
    handleDragStart: N,
    isDraggable: R,
    draggingEventId: (g == null ? void 0 : g.segmentId) || null,
    resourceOnly: y
  };
}, Ri = ({
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
  const { enabled: d = !1, isSelectable: u } = i, y = d && !!o, S = ae((p) => {
    let J = 0;
    for (const D of a)
      D <= p && J++;
    return p * ye + J * Be;
  }, [a]), [x, $] = he("idle"), [g, O] = he(null), [K, j] = he(null), [F, f] = he(null), [m, v] = he(!1), [E, C] = he([]), [w, W] = he(!1), V = fe(null), I = fe(null), A = fe(null), T = fe(null), Y = ae(() => {
    switch (t) {
      case 0:
        return Ge * 7;
      case 1:
        return _e;
      case 2:
        return Ye;
      default:
        return _e;
    }
  }, [t]), R = ae(
    (p) => {
      const J = Y(), D = Math.floor(p / J), G = P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return G.add(D * 7, "days").toDate();
        case 1:
          return G.add(D, "days").toDate();
        case 2:
          return G.add(D, "hours").toDate();
        default:
          return G.toDate();
      }
    },
    [t, n, Y]
  ), M = ae(
    (p) => {
      const J = Oo(p, a), D = Math.floor(J / ye);
      let G = 0;
      for (const ne of e) {
        const q = Math.max(ne.data.length, 1);
        if (D < G + q)
          return {
            resourceId: ne.id,
            resourceIndex: D,
            resourceLabel: ne.label
          };
        G += q;
      }
      return null;
    },
    [e, a]
  ), L = ae(
    (p) => {
      const J = Y();
      return Math.floor(p / J) * J;
    },
    [Y]
  ), te = ae(
    (p, J, D, G = []) => {
      const ne = [], ce = (r || e).find((ve) => ve.id === p), me = J.getTime(), de = D.getTime();
      if (ce) {
        const ve = ce.data[0], De = ve && Array.isArray(ve) ? ce.data.flat() : ce.data;
        for (const be of De) {
          const se = new Date(be.startDate).getTime(), pe = new Date(be.endDate).getTime();
          if (me < pe && de > se) {
            const Oe = new Date(Math.max(me, se)), ze = new Date(Math.min(de, pe)), Ne = ze.getTime() - Oe.getTime();
            ne.push({
              event: be,
              conflictStart: Oe,
              conflictEnd: ze,
              overlapDuration: Ne
            });
          }
        }
      }
      for (const ve of G) {
        if (ve.resourceId !== p)
          continue;
        const De = ve.startDate.getTime(), be = ve.endDate.getTime();
        if (me < be && de > De) {
          const se = new Date(Math.max(me, De)), pe = new Date(Math.min(de, be)), Oe = pe.getTime() - se.getTime(), ze = {
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
            event: ze,
            conflictStart: se,
            conflictEnd: pe,
            overlapDuration: Oe
          });
        }
      }
      return ne;
    },
    [e, r]
  ), ee = ae(
    (p) => {
      if (!y || l || !c.current || p.button !== 0)
        return;
      const J = p.target;
      if (J.closest("[data-segment-id]") || J.closest("[data-multi-select-ui]"))
        return;
      const D = $t(p.clientX, p.clientY, c.current), G = M(D.y);
      if (!G)
        return;
      V.current = { x: p.clientX, y: p.clientY }, I.current = G.resourceIndex;
      const ne = L(D.x), q = Y(), ce = S(G.resourceIndex);
      O(D), j(D), f({
        x: ne,
        y: ce,
        width: q,
        height: ye
      }), $("selecting");
    },
    [y, l, c, M, L, Y, S]
  ), B = ae(
    (p) => {
      j(p);
      const J = Y(), D = L((g == null ? void 0 : g.x) || 0), G = L(p.x), ne = S(I.current), q = Math.min(D, G), ce = Math.max(D, G) + J;
      f({ x: q, y: ne, width: ce - q, height: ye });
    },
    [g, Y, L, S]
  ), N = ae(() => {
    T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), X = ae(
    (p, J) => {
      const D = document.getElementById(tt);
      if (!D || !c.current)
        return;
      const G = D.getBoundingClientRect(), ne = 60, q = 12, ce = p - (G.left + Fe), me = G.right - p;
      let de = 0;
      ce < ne ? de = -q * (1 - Math.max(0, ce) / ne) : me < ne && (de = q * (1 - Math.max(0, me) / ne)), N(), de !== 0 && (T.current = requestAnimationFrame(() => {
        D.scrollLeft += de, B($t(p, J, c.current)), X(p, J);
      }));
    },
    [c, B, N]
  ), re = ae(
    (p) => {
      if (x !== "selecting" || !c.current || I.current === null)
        return;
      const J = $t(p.clientX, p.clientY, c.current);
      A.current && cancelAnimationFrame(A.current), A.current = requestAnimationFrame(() => B(J)), X(p.clientX, p.clientY);
    },
    [x, c, B, X]
  ), k = ae(
    (p) => {
      if (x !== "selecting")
        return;
      if (N(), !c.current || !g || !V.current) {
        $("idle"), O(null), j(null), f(null);
        return;
      }
      const J = $t(p.clientX, p.clientY, c.current), D = M(g.y);
      if (!D) {
        $("idle"), O(null), j(null), f(null);
        return;
      }
      const G = Math.min(g.x, J.x), ne = Math.max(g.x, J.x), q = R(G), ce = R(ne), me = P(ce).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (u && !u(D.resourceId, q, me)) {
        $("idle"), O(null), j(null), f(null);
        return;
      }
      const de = te(
        D.resourceId,
        q,
        me,
        E
      ), ve = de.length > 0, De = {
        startDate: q,
        endDate: me,
        resourceId: D.resourceId,
        resourceLabel: D.resourceLabel,
        zoomLevel: t,
        hasConflict: ve,
        conflicts: ve ? de : void 0
      };
      if (m)
        C((be) => [...be, De]), W(!0);
      else if (o) {
        const be = o(De), se = (pe) => {
          pe != null && pe.continueMultiSelect && (v(!0), C([De]), W(!0));
        };
        be instanceof Promise ? be.then(se) : se(be);
      }
      $("idle"), O(null), j(null), f(null), V.current = null, I.current = null;
    },
    [
      x,
      c,
      g,
      M,
      R,
      u,
      o,
      t,
      m,
      te,
      E,
      N
    ]
  ), U = ae(() => {
    if (E.length > 0 && s) {
      W(!1);
      const p = s(E), J = (D) => {
        D != null && D.continueMultiSelect ? W(!0) : (C([]), v(!1), W(!1));
      };
      p instanceof Promise ? p.then(J) : J(p);
      return;
    }
    C([]), v(!1), W(!1);
  }, [E, s]), _ = ae(() => {
    C([]), v(!1), W(!1);
  }, []), Q = ae((p) => {
    C((J) => {
      const D = J.filter((G, ne) => ne !== p);
      return D.length === 0 && (v(!1), W(!1)), D;
    });
  }, []), Z = ae(
    (p, J) => {
      C((D) => D.map((G, ne) => {
        if (ne !== p)
          return G;
        const q = { ...G, ...J }, ce = D.filter((de, ve) => ve !== p), me = te(
          q.resourceId,
          q.startDate,
          q.endDate,
          ce
        );
        return {
          ...q,
          hasConflict: me.length > 0,
          conflicts: me.length > 0 ? me : void 0
        };
      }));
    },
    [te]
  ), z = ae(
    (p) => {
      p.key === "Escape" && (x === "selecting" ? (N(), $("idle"), O(null), j(null), f(null), V.current = null, I.current = null) : m && E.length > 0 && (C([]), v(!1), W(!1)));
    },
    [x, m, E.length, N]
  );
  return ge(() => {
    if (x === "selecting")
      return document.addEventListener("mousemove", re), document.addEventListener("mouseup", k), document.addEventListener("keydown", z), () => {
        document.removeEventListener("mousemove", re), document.removeEventListener("mouseup", k), document.removeEventListener("keydown", z);
      };
  }, [x, re, k, z]), ge(() => {
    if (m && E.length > 0)
      return document.addEventListener("keydown", z), () => {
        document.removeEventListener("keydown", z);
      };
  }, [m, E.length, z]), ge(() => () => {
    A.current && (cancelAnimationFrame(A.current), A.current = null), N();
  }, [N]), ge(() => {
    l && x === "selecting" && (N(), $("idle"), O(null), j(null), f(null), V.current = null, I.current = null);
  }, [l, x, N]), {
    selectionState: x,
    selectionStart: g,
    selectionEnd: K,
    selectionBox: F,
    handleGridMouseDown: ee,
    isEnabled: y,
    pendingSelections: E,
    confirmSelections: U,
    clearSelections: _,
    removeSelection: Q,
    updateSelection: Z,
    isMultiSelectActive: m,
    hasUnconfirmedSelections: w
  };
}, Yi = b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, Ni = b.div`
  position: relative;
`, Fi = b.canvas``;
b.canvas``;
const Bi = b.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, Tr = b.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, zi = [], Hi = Gn(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onTileContextMenu: i, onEventDrop: c, onEventDrag: l, draggableConfig: a, onDragStateChange: d, onTimeRangeSelect: u, onMultiTimeRangeSelect: y, clickToAddConfig: S, separatorRowIndices: x = [], subcontractSeparatorIndex: $ = -1, warningSeparatorIndex: g = -1, providerSeparatorIndices: O = zi, fadingUnitIds: K }, j) {
  const F = fe(!1), { handleScrollNext: f, handleScrollPrev: m, date: v, isLoading: E, cols: C, startDate: w, suppressNextSlideRef: W, config: V } = Ke(), I = fe(null), A = fe(null), T = fe(t), Y = fe(v), R = fe(null), M = fe(null), L = fe(null), te = fe(null), [ee, B] = he(!1), N = cn(), {
    dragState: X,
    draggedEvent: re,
    ghostPosition: k,
    ghostDimensions: U,
    dropTarget: _,
    isValidDrop: Q,
    handleDragStart: Z,
    isDraggable: z,
    draggingEventId: p,
    resourceOnly: J
  } = Li({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: w,
    onEventDrop: c,
    onEventDrag: l,
    draggableConfig: a,
    gridRef: te,
    separatorRowIndices: x
  });
  ge(() => {
    const xe = X === "dragging" || X === "potential";
    B(xe), d && d(xe);
  }, [X, d]);
  const D = fe(!1), G = fe(v), ne = fe(null);
  ge(() => {
    var le;
    const xe = G.current;
    if (G.current = v, !D.current) {
      D.current = !0;
      return;
    }
    if (W != null && W.current) {
      W.current = !1;
      return;
    }
    const Ee = te.current;
    if (!(Ee != null && Ee.animate))
      return;
    const Pe = v.isAfter(xe) ? 48 : -48;
    (le = ne.current) == null || le.cancel(), Ee.style.willChange = "transform";
    const Le = Ee.animate(
      [
        { transform: `translateX(${Pe}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), ie = () => {
      Ee.style.willChange = "";
    };
    Le.onfinish = ie, Le.oncancel = ie, ne.current = Le;
  }, [v, W]);
  const {
    selectionState: q,
    selectionBox: ce,
    handleGridMouseDown: me,
    pendingSelections: de,
    confirmSelections: ve,
    clearSelections: De,
    removeSelection: be,
    updateSelection: se,
    isMultiSelectActive: pe,
    hasUnconfirmedSelections: Oe
  } = Ri({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: w,
    onTimeRangeSelect: u,
    onMultiTimeRangeSelect: y,
    clickToAddConfig: S,
    gridRef: te,
    isDragging: ee,
    separatorRowIndices: x
  }), ze = ae((xe) => {
    xe.preventDefault();
  }, []), Ne = ae((xe) => {
    xe.preventDefault();
  }, []), dt = x.length * Be, bt = ae(
    (xe) => {
      const Ee = rr(), Pe = t * ye + 1 + dt;
      Po(xe, Ee, Pe), ri(xe, r, t, C, w, N, x, $, g, O);
    },
    [C, w, t, r, N, x, $, g, O, dt]
  );
  return ge(() => {
    if (!I.current)
      return;
    const xe = I.current.getContext("2d");
    if (!xe)
      return;
    const Ee = () => bt(xe);
    return window.addEventListener("resize", Ee), () => window.removeEventListener("resize", Ee);
  }, [bt]), ge(() => {
    var ue;
    const xe = T.current, Ee = Y.current;
    if (T.current = t, Y.current = v, xe === t || !v.isSame(Ee, "day") || Io())
      return;
    const Pe = I.current, Le = A.current;
    if (!Pe || !Le || Pe.width === 0 || Pe.height === 0)
      return;
    const ie = Le.getContext("2d");
    if (!ie)
      return;
    Le.width = Pe.width, Le.height = Pe.height, Le.style.width = Pe.style.width, Le.style.height = Pe.style.height, ie.setTransform(1, 0, 0, 1, 0, 0), ie.clearRect(0, 0, Le.width, Le.height), ie.drawImage(Pe, 0, 0), (ue = R.current) == null || ue.cancel(), Le.style.opacity = "1";
    const le = Le.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    le.onfinish = () => {
      Le.style.opacity = "0";
    }, R.current = le;
  }, [t, v]), ge(() => {
    const xe = I.current;
    if (!xe)
      return;
    xe.style.letterSpacing = "1px";
    const Ee = xe.getContext("2d");
    Ee && bt(Ee);
  }, [v, t, r, bt]), ge(() => {
    if (!M.current)
      return;
    const xe = new IntersectionObserver(
      (Ee) => {
        Ee[0].isIntersecting && !F.current && (F.current = !0, f(), setTimeout(() => {
          F.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(tt) }
    );
    return xe.observe(M.current), () => {
      xe.disconnect();
    };
  }, [f]), ge(() => {
    if (!L.current)
      return;
    const xe = new IntersectionObserver(
      (Ee) => {
        Ee[0].isIntersecting && !F.current && (F.current = !0, m(), setTimeout(() => {
          F.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(tt),
        rootMargin: `0px 0px 0px -${Fe}px`
      }
    );
    return xe.observe(L.current), () => {
      xe.disconnect();
    };
  }, [m]), /* @__PURE__ */ H(Yi, { id: ko, children: [
    /* @__PURE__ */ H(
      Ni,
      {
        ref: (xe) => {
          typeof j == "function" ? j(xe) : j && (j.current = xe), te.current = xe;
        },
        onMouseDown: me,
        style: { cursor: u ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(Tr, { position: "left", ref: L }),
          /* @__PURE__ */ h(jn, { isLoading: E, position: "left" }),
          /* @__PURE__ */ h(
            Fi,
            {
              ref: I,
              onDragStart: ze,
              onDragOver: Ne,
              style: { userSelect: X === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(Bi, { ref: A, "aria-hidden": !0 }),
          /* @__PURE__ */ h(uu, { zoom: r, startDate: w }),
          /* @__PURE__ */ h(mu, { zoom: r, startDate: w }),
          /* @__PURE__ */ h(
            md,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onTileContextMenu: i,
              onDragStart: Z,
              isDraggable: z,
              draggingEventId: p,
              separatorRowIndices: x,
              fadingUnitIds: K,
              highlightedSegmentId: (V == null ? void 0 : V.highlightedSegmentId) ?? null,
              focusedUnitIds: (V == null ? void 0 : V.focusedUnitIds) ?? null,
              leavingSegmentIds: (V == null ? void 0 : V.leavingSegmentIds) ?? null,
              ghostProject: (V == null ? void 0 : V.ghostProject) ?? null
            }
          ),
          /* @__PURE__ */ h(Tr, { ref: M, position: "right" }),
          /* @__PURE__ */ h(jn, { isLoading: E, position: "right" }),
          (X === "dragging" || X === "animating") && /* @__PURE__ */ h(
            Hd,
            {
              draggedEvent: re,
              ghostPosition: k,
              ghostDimensions: U,
              dropTarget: _,
              isValidDrop: Q,
              dragState: X,
              zoom: r,
              data: n,
              resourceOnly: J,
              separatorRowIndices: x
            }
          ),
          /* @__PURE__ */ h(
            Vd,
            {
              selectionBox: ce,
              isSelecting: q === "selecting"
            }
          ),
          pe && de.length > 0 && /* @__PURE__ */ h(
            cu,
            {
              selections: de,
              data: n,
              zoom: r,
              startDate: w,
              onRemove: be,
              onUpdate: se,
              separatorRowIndices: x
            }
          )
        ]
      }
    ),
    pe && Oe && de.length > 0 && /* @__PURE__ */ h(
      tu,
      {
        selections: de,
        onConfirm: ve,
        onClear: De,
        onRemove: be
      }
    )
  ] });
}), Lo = (e) => {
  const r = P.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, Ro = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Ie);
    t += o.hours + s, n += r % Ie, n >= Ie && (t++, n -= Ie);
  }), { hours: t, minutes: n };
}, Yo = (e, r) => {
  let t = kr;
  switch (r) {
    case 0:
      t = Js;
      break;
    case 1:
      t = kr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = Ie - e.minutes;
    return i === Ie && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, Wi = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const d = P(a.startDate).isoWeek(), u = P(a.startDate).isoWeekday(), y = P(a.endDate).isoWeek(), S = P(a.endDate).isoWeekday(), { hours: x, minutes: $ } = Lo(a.occupancy);
    if (n === d) {
      const g = (it + 1 - u) * x, O = (it + 1 - u) * $;
      return { hours: Math.max(0, g), minutes: O };
    } else if (n === y) {
      const g = S > it ? it * x : S * x, O = S > it ? it * $ : S * $;
      return { hours: g, minutes: O };
    } else if (P(r).isBetween(a.startDate, a.endDate))
      return { hours: it * x, minutes: it * $ };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Ro(o), { free: c, overtime: l } = Yo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, ji = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: y } = Lo(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = Ro(s), { free: l, overtime: a } = Yo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Zi = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = P(c.startDate).hour(), a = P(c.endDate).hour(), d = r.hour(), u = P(c.endDate).minute(), y = P(c.startDate).minute();
    l < d && a > d ? t += Ie : l === d && a === d && y && u ? t += u ? u - y : Ie - y : l === d && a >= d ? t += y ? Ie - y : Ie : a === d && u && (t += u);
  });
  const n = Math.floor(t / Ie), o = t % Ie, s = n || o ? 0 : 1, i = n ? 0 : o ? Ie - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Vi = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? P(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? P(t).isBetween(i.startDate, i.endDate, "hour", "[]") : P(i.startDate).isBetween(
    P(t),
    P(t).add(6, "days"),
    "day",
    "[]"
  ) || P(t).isBetween(P(i.startDate), P(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return ji(s, t, n, o);
    case 2:
      return Zi(s, t);
    default:
      return Wi(s, t, n);
  }
}, Gi = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", l;
  switch (s) {
    case 0:
      c = "weeks", l = Pt;
      break;
    case 1:
      c = "days", l = _e;
      break;
    case 2:
      c = "hours", l = Ye;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * l) / l : t.x / l), d = P(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), u = Math.ceil(t.y / ye), y = n.findIndex((O, K, j) => j.slice(0, K + 1).reduce((f, m) => f + m, 0) >= u), S = s === 2 ? (a + 1) * l : a * l, x = (u - 1) * ye + ye, $ = Vi(
    o[y],
    y,
    d,
    s,
    i
  ), g = P(e.startDate).isSame(P(e.endDate), "day");
  return {
    coords: { x: S, y: x },
    mouseCoords: t,
    resourceIndex: y,
    disposition: $,
    reservationData: {
      startTime: P(e.startDate).format("hh:mm A"),
      startDate: P(e.startDate).format("MMM D, YYYY"),
      endTime: P(e.endDate).format("hh:mm A"),
      endDate: P(e.endDate).format("MMM D, YYYY"),
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
      isOneDayEvent: g,
      passengers: e.totalPassengers,
      readiness: e.readiness,
      readinessNote: e.readinessNote,
      subcontractConfirmed: e.subcontractConfirmed,
      subcontractDetails: e.subcontractDetails
    }
  };
};
function Ui(e, r) {
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
function Xi(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const d of e)
    !d.isSubcontract && !d.isUnassigned && d.capacity != null && t.add(d.capacity);
  const n = [...t].sort((d, u) => d - u);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Ui(n, o), i = [];
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
    const y = "__auto_cat_" + u, S = d.min === d.max ? d.min + " pax" : d.min + "-" + d.max + " pax";
    l.push({ id: y, name: S, minPassengers: d.min, maxPassengers: d.max });
    for (const x of d.values)
      a.set(x, y);
  }), { categories: l, capacityToCategoryId: a };
}
const Ki = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return r.length > n ? (r.forEach((l, a) => {
    const d = {
      id: e[a].id,
      label: e[a].label,
      data: l,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      isUnassigned: e[a].isUnassigned,
      provider: e[a].provider,
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
      isUnassigned: e[a + s].isUnassigned,
      provider: e[a + s].provider,
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
      isUnassigned: e[a].isUnassigned,
      provider: e[a].provider,
      categoryId: e[a].categoryId
    };
    i.push(d);
  }), o.push(i), o);
};
var Rn = {}, Ji = {
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
  })(Re, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Ji);
const qi = Rn;
var Yn = {}, Qi = {
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
  })(Re, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Qi);
const ea = Yn, ta = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = P(t.startDate).startOf("day"), l = P(t.endDate).startOf("day"), a = P(o[i].startDate).startOf("day"), d = P(o[i].endDate).startOf("day");
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
P.extend(qi);
P.extend(ea);
const Ar = /* @__PURE__ */ new WeakMap(), na = (e) => {
  const r = Ar.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = P(o.startDate), c = P(s.startDate), l = i.startOf("day").diff(c.startOf("day"), "day");
    return l !== 0 ? l : i.diff(c);
  }), n = ta(t);
  return Ar.set(e, n), n;
}, ra = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = na(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, oa = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, sa = (e) => {
  const { recordsThreshold: r } = Ke(), [t, n] = he(0), [o, s] = he(0), i = fe(null);
  ge(() => {
    i.current = document.getElementById(tt);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = $e(() => ra(e), [e]), a = $e(
    () => Ki(e, c, l, r),
    [e, c, r, l]
  ), d = ae(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((g) => g + a[Math.max(o, 0)].length), s((g) => Math.min(g + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = ae(() => {
    a[o].length && (n((g) => Math.max(g - a[o - 1].length, 0)), s((g) => Math.max(g - 1, 0)));
  }, [o, a]), y = ae(() => {
    n(0), s(0);
  }, []), S = t + a[o].length, x = $e(
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
    rowsPerItem: x,
    totalRowsPerPage: oa(a[o]),
    next: d,
    previous: u,
    reset: y
  };
}, Qe = "__subcontract__", Qt = (e) => `${Qe}:${e}`, Nn = (e) => {
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
var Fn = {}, ia = {
  get exports() {
    return Fn;
  },
  set exports(e) {
    Fn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Re, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(ia);
const aa = Fn;
var Bn = {}, ca = {
  get exports() {
    return Bn;
  },
  set exports(e) {
    Bn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(gt);
  })(Re, function(t) {
    function n(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = n(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, S, x) {
      var $ = y + " ";
      switch (x) {
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
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(y, S) {
      return a.test(S) ? c[y.month()] : l[y.month()];
    };
    d.s = l, d.f = c;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(y) {
      return y + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(u, null, !0), u;
  });
})(ca);
const la = Bn;
var zn = {}, da = {
  get exports() {
    return zn;
  },
  set exports(e) {
    zn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(gt);
  })(Re, function(t) {
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
})(da);
const ua = zn;
var Hn = {}, fa = {
  get exports() {
    return Hn;
  },
  set exports(e) {
    Hn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(gt);
  })(Re, function(t) {
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
})(fa);
const ha = Hn;
var Wn = {}, pa = {
  get exports() {
    return Wn;
  },
  set exports(e) {
    Wn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(gt);
  })(Re, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(pa);
const ma = Wn, ga = {
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
}, ya = {
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
}, va = {
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
}, xa = {
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
}, ba = {
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
}, wa = [
  {
    id: "en",
    lang: va,
    translateCode: "en-GB",
    dayjsTranslations: aa
  },
  {
    id: "pl",
    lang: ya,
    translateCode: "pl-PL",
    dayjsTranslations: la
  },
  {
    id: "es",
    lang: ga,
    translateCode: "es-ES",
    dayjsTranslations: ma
  },
  {
    id: "lt",
    lang: ba,
    translateCode: "lt-LT",
    dayjsTranslations: ha
  },
  {
    id: "de",
    lang: xa,
    translateCode: "de-DE",
    dayjsTranslations: ua
  }
];
class Sa {
  constructor() {
    sr(this, "locales", wa);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const sn = new Sa(), No = Vn({
  localesData: sn.getLocales(),
  currentLocale: sn.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Ca = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = he("en"), s = sn.getLocales(), i = ae(() => {
    const u = s.find((y) => y.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && P.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [c, l] = he(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  ge(() => {
    t == null || t.forEach((u) => {
      s.find((S) => S.id === u.id) || sn.addLocales(u);
    });
  }, [s, t]), ge(() => {
    const u = localStorage.getItem("locale"), y = r ?? u ?? "en";
    localStorage.setItem("locale", y), o(y), l(i());
  }, [i, r]);
  const { Provider: d } = No;
  return /* @__PURE__ */ h(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, lt = () => nt(No).currentLocale.lang, ka = (e) => /* @__PURE__ */ oe.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ oe.createElement("defs", null, /* @__PURE__ */ oe.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ oe.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ oe.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ oe.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ oe.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Ma = b.div`
  height: 440px;
  width: 514px;
  position: relative;
`, $a = b.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Da = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = lt();
  return /* @__PURE__ */ H(Ma, { onClick: e, children: [
    /* @__PURE__ */ h(ka, {}),
    /* @__PURE__ */ h($a, { children: r })
  ] });
}, Ea = b.div`
  position: relative;
  display: flex;
`, _a = b.div`
  position: relative;
  margin-left: ${Fe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, Ta = b.div`
  width: calc(${({ width: e }) => e}px - ${Fe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Fe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Aa = /* @__PURE__ */ new Set(), Pa = {
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
    reservationType: Wt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function Ia(e, r) {
  const t = r ? [...r].sort((a, d) => a.maxPassengers - d.maxPassengers) : [], n = [], o = e.filter((a) => a.isUnassigned);
  o.length > 0 && n.push({ type: "unassigned", items: o });
  const s = e.filter((a) => !a.isUnassigned);
  for (const a of t) {
    const d = s.filter(
      (u) => !u.isSubcontract && u.categoryId === a.id
    );
    d.length > 0 && n.push({ type: "category", category: a, items: d });
  }
  const i = t.length > 0, c = s.filter(
    (a) => !a.isSubcontract && (!a.categoryId || !i)
  );
  c.length > 0 && i ? n.push({ type: "uncategorized", items: c }) : c.length > 0 && n.push({ type: "uncategorized", items: c });
  const l = s.filter((a) => a.isSubcontract);
  return l.length > 0 && n.push({ type: "subcontract", items: l }), n;
}
const Oa = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  onTileContextMenu: o,
  onItemClick: s,
  toggleTheme: i,
  topBarWidth: c,
  onEventDrop: l,
  onEventDrag: a,
  draggableConfig: d,
  onTimeRangeSelect: u,
  onMultiTimeRangeSelect: y,
  clickToAddConfig: S
}) => {
  const [x, $] = he(Pa), [g, O] = he(e), [K, j] = he(!1), [F, f] = he(!1), [m, v] = he(""), [E, C] = he(/* @__PURE__ */ new Set()), [w, W] = he(/* @__PURE__ */ new Set()), V = fe([]);
  ge(() => () => V.current.forEach(clearTimeout), []);
  const {
    zoom: I,
    startDate: A,
    isLoading: T,
    config: { includeTakenHoursOnWeekendsInDayView: Y, showTooltip: R, showThemeToggle: M }
  } = Ke(), L = fe(null), te = fe(null), [ee, B] = he(124), {
    page: N,
    projectsPerPerson: X,
    rowsPerItem: re,
    currentPageNum: k,
    pagesAmount: U,
    next: _,
    previous: Q,
    reset: Z
  } = sa(g), { effectiveCategories: z, effectivePage: p } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: N };
    const ie = Xi(N);
    if (ie.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: N };
    const le = N.map((ue) => {
      if (ue.isSubcontract || ue.isUnassigned || ue.capacity == null)
        return ue;
      const we = ie.capacityToCategoryId.get(ue.capacity);
      return we ? { ...ue, categoryId: we } : ue;
    });
    return { effectiveCategories: ie.categories, effectivePage: le };
  }, [t, N]), J = ae(
    (ie) => {
      if (E.has(ie)) {
        C((ue) => {
          const we = new Set(ue);
          return we.delete(ie), we;
        });
        return;
      }
      if (Io()) {
        C((ue) => new Set(ue).add(ie));
        return;
      }
      W((ue) => new Set(ue).add(ie));
      const le = setTimeout(() => {
        C((ue) => new Set(ue).add(ie)), W((ue) => {
          const we = new Set(ue);
          return we.delete(ie), we;
        });
      }, 190);
      V.current.push(le);
    },
    [E]
  ), D = $e(() => {
    const ie = [];
    p.some((we) => we.isUnassigned) && ie.push("__unassigned__");
    const le = z ? [...z].sort((we, He) => we.maxPassengers - He.maxPassengers) : [];
    for (const we of le)
      p.some((He) => !He.isSubcontract && He.categoryId === we.id) && ie.push(we.id);
    const ue = p.filter((we) => we.isSubcontract);
    return ue.length > 0 && (ie.push(Qe), ie.push(...Nn(ue).providers.map((we) => Qt(we.id)))), ie;
  }, [z, p]), G = ae(() => {
    C(/* @__PURE__ */ new Set());
  }, []), ne = ae(() => {
    C(new Set(D));
  }, [D]), q = $e(() => {
    if (w.size === 0)
      return Aa;
    const ie = /* @__PURE__ */ new Set();
    for (const le of p) {
      const ue = le.isUnassigned ? "__unassigned__" : le.isSubcontract ? Qe : le.categoryId, we = !!le.provider && w.has(Qt(le.provider.id));
      (ue && w.has(ue) || we) && ie.add(le.id);
    }
    return ie;
  }, [w, p]), {
    visiblePage: ce,
    visibleRowsPerItem: me,
    visibleTotalRows: de,
    visibleProjectsPerPerson: ve,
    separatorRowIndices: De,
    subcontractSeparatorIndex: be,
    unassignedSeparatorIndex: se,
    providerSeparatorIndices: pe
  } = $e(() => {
    const ie = Ia(p, z), le = ((z == null ? void 0 : z.length) ?? 0) > 0, ue = /* @__PURE__ */ new Map();
    N.forEach((Te, qe) => ue.set(Te.id, qe));
    const we = [], He = [], ot = [], Ve = [];
    let st = 0, jt = -1, Je = -1;
    const ut = [], wt = (Te) => {
      for (const qe of Te) {
        const St = ue.get(qe.id) ?? 0, Ct = re[St];
        we.push(qe), He.push(Ct), ot.push(X[St]), st += Ct;
      }
    };
    for (const Te of ie)
      if (Te.type === "unassigned" || Te.type === "subcontract" || Te.type === "category" && le) {
        const St = Te.type === "unassigned" ? "__unassigned__" : Te.type === "subcontract" ? Qe : Te.category.id, Ct = E.has(St);
        if (Te.type === "subcontract" && (jt = Ve.length), Te.type === "unassigned" && (Je = Ve.length), Ve.push(st), Ct)
          continue;
        if (Te.type !== "subcontract") {
          wt(Te.items);
          continue;
        }
        const { loose: fn, providers: hn } = Nn(Te.items);
        wt(fn);
        for (const or of hn)
          ut.push(Ve.length), Ve.push(st), E.has(Qt(or.id)) || wt(or.items);
      } else
        wt(Te.items);
    const un = He.reduce((Te, qe) => Te + qe, 0);
    return {
      visiblePage: we,
      visibleRowsPerItem: He,
      visibleTotalRows: un,
      visibleProjectsPerPerson: ot,
      separatorRowIndices: Ve,
      subcontractSeparatorIndex: jt,
      unassignedSeparatorIndex: Je,
      providerSeparatorIndices: ut
    };
  }, [p, z, N, E, re, X]), Oe = $e(
    () => p.reduce(
      (ie, le) => le.isUnassigned ? ie + le.data.reduce((ue, we) => ue + we.length, 0) : ie,
      0
    ),
    [p]
  ), ze = fe(null), Ne = fe(
    Ln(
      (ie, le, ue, we, He, ot) => {
        if (!L.current)
          return;
        const { tile: Ve, segmentId: st } = xe(ie);
        if (st && st === ze.current)
          return;
        if (ze.current = null, !st || !Ve) {
          j(!1);
          return;
        }
        const jt = bt(st, le), Je = L.current.getBoundingClientRect(), ut = Ve.getBoundingClientRect(), wt = { x: ie.clientX - Je.left, y: ie.clientY - Je.top }, un = {
          x: ie.clientX - Je.left,
          y: ie.clientY - Je.top
        }, Te = {
          x: ut.left - Je.left,
          y: ut.top - Je.top,
          width: ut.width,
          height: ut.height
        }, {
          coords: { x: qe, y: St },
          resourceIndex: Ct,
          disposition: fn,
          reservationData: hn
        } = Gi(
          jt,
          ue,
          wt,
          we,
          He,
          ot,
          Y
        );
        $({
          coords: { x: qe, y: St },
          mouseCoords: un,
          resourceIndex: Ct,
          disposition: fn,
          reservationData: hn,
          tileBounds: Te
        }), j(!0);
      },
      4
    )
  ), dt = fe(
    Ln((ie, le) => {
      Z(), O(
        ie.map((ue) => ({
          ...ue,
          data: ue.data.filter((we) => {
            const { title: He, description: ot, subtitle: Ve } = we;
            return (He == null ? void 0 : He.toLowerCase().includes(le.toLowerCase())) || (Ve == null ? void 0 : Ve.toLowerCase().includes(le.toLowerCase())) || (ot == null ? void 0 : ot.toLowerCase().includes(le.toLowerCase()));
          })
        })).filter((ue) => ue.data.length > 0)
      );
    }, 500)
  ), bt = (ie, le) => {
    if (ie)
      return le.flatMap((ue) => ue.data).find((ue) => ue.segmentId === ie);
  }, xe = (ie) => {
    if (!ie.target)
      return { tile: null, segmentId: null };
    const le = ie.target.closest("[data-segment-id]");
    return le ? { tile: le, segmentId: le.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, Ee = (ie) => {
    const le = ie.target.value;
    v(le), dt.current.cancel(), le ? dt.current(e, le) : (Z(), O(e));
  }, Pe = ae(() => {
    Ne.current.cancel(), j(!1);
  }, []), Le = ae(
    (ie, le) => {
      ze.current = String(ie.segmentId), Pe(), o == null || o(ie, le);
    },
    [Pe, o]
  );
  return ge(() => {
    const ie = (ue) => Ne.current(
      ue,
      e,
      A,
      me,
      ve,
      I
    ), le = L.current;
    if (le)
      return le.addEventListener("mousemove", ie), le.addEventListener("mouseleave", Pe), () => {
        le.removeEventListener("mousemove", ie), le.removeEventListener("mouseleave", Pe);
      };
  }, [
    Ne,
    Pe,
    ve,
    me,
    A,
    I,
    e
  ]), ge(() => {
    m ? (dt.current.cancel(), dt.current(e, m)) : O(e);
  }, [e, m]), an(() => {
    const ie = te.current;
    if (!ie)
      return;
    const le = () => B(ie.offsetHeight);
    le();
    const ue = new ResizeObserver(le);
    return ue.observe(ie), () => ue.disconnect();
  }, []), /* @__PURE__ */ H(Ea, { children: [
    /* @__PURE__ */ h(
      cl,
      {
        headerHeight: ee,
        data: p,
        categories: z,
        pageNum: k,
        pagesAmount: U,
        rows: re,
        onLoadNext: _,
        onLoadPrevious: Q,
        searchInputValue: m,
        onSearchInputChange: Ee,
        onItemClick: s,
        collapsedGroups: E,
        fadingGroups: w,
        onToggleGroup: J,
        allGroupIds: D,
        onExpandAll: G,
        onCollapseAll: ne,
        unassignedCount: Oe
      }
    ),
    /* @__PURE__ */ H(_a, { children: [
      /* @__PURE__ */ h(
        Fl,
        {
          ref: te,
          zoom: I,
          topBarWidth: c,
          showThemeToggle: M,
          toggleTheme: i
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Hi,
        {
          data: ce,
          baseData: r || e,
          zoom: I,
          rows: de,
          ref: L,
          onTileClick: n,
          onTileContextMenu: o && Le,
          onEventDrop: l,
          onEventDrag: a,
          draggableConfig: d,
          onDragStateChange: f,
          onTimeRangeSelect: u,
          onMultiTimeRangeSelect: y,
          clickToAddConfig: S,
          separatorRowIndices: De,
          subcontractSeparatorIndex: be,
          warningSeparatorIndex: Oe > 0 ? se : -1,
          providerSeparatorIndices: pe,
          fadingUnitIds: q
        }
      ) : /* @__PURE__ */ h(Ta, { width: c, children: T ? /* @__PURE__ */ h(jn, { isLoading: T, position: "left" }) : /* @__PURE__ */ h(Da, {}) }),
      R && /* @__PURE__ */ h(Td, { tooltipData: x, visible: K && !F })
    ] })
  ] });
}, La = b.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Fe + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.mode === "dark" ? e.colors.primary : "#fff"};
`, Pr = b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, Ra = b.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, Ya = b.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, Ir = b.button`
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
`, Na = b.button`
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
`, Fa = b.div`
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
`, Or = b.button`
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
`, Ba = b.label`
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
`, za = b.span`
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
`, Lt = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), Ha = () => {
  var r, t;
  const e = document.getElementById(Do);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Wa = () => {
  const {
    config: e,
    zoom: r,
    handleGoNext: t,
    handleGoPrev: n,
    handleGoToday: o,
    setZoom: s,
    goToDate: i,
    toggleDisplayActiveUnits: c,
    toolbarActions: l
  } = Ke(), { filterButtonState: a = -1 } = e;
  return /* @__PURE__ */ H(La, { width: 0, children: [
    /* @__PURE__ */ H(Pr, { $at: "start", children: [
      /* @__PURE__ */ H(Ya, { children: [
        /* @__PURE__ */ h(Ir, { onClick: n, "aria-label": "Anterior", children: /* @__PURE__ */ h(Lt, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h(Na, { onClick: o, children: "Hoy" }),
        /* @__PURE__ */ h(Ir, { onClick: t, "aria-label": "Siguiente", children: /* @__PURE__ */ h(Lt, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      e.showViewSwitcher !== !1 && /* @__PURE__ */ H(Ae, { children: [
        /* @__PURE__ */ h(Ra, {}),
        /* @__PURE__ */ H(Fa, { children: [
          /* @__PURE__ */ h("button", { className: r === 2 ? "on" : "", onClick: () => s(2), children: "Día" }),
          /* @__PURE__ */ h("button", { className: r === 0 ? "on" : "", onClick: () => s(0), children: "Semana" }),
          /* @__PURE__ */ h("button", { className: r === 1 ? "on" : "", onClick: () => s(1), children: "Mes" })
        ] })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ H(Ba, { children: [
        /* @__PURE__ */ H(Lt, { children: [
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
              var u, y;
              try {
                (y = (u = d.currentTarget).showPicker) == null || y.call(u);
              } catch {
              }
            },
            onChange: (d) => d.target.value && i(d.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ H(Pr, { $at: "end", children: [
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ H(Or, { $primary: !!a, onClick: c, children: [
        /* @__PURE__ */ h(Lt, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(za, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ H(Or, { onClick: Ha, children: [
        /* @__PURE__ */ h(Lt, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      l
    ] })
  ] });
}, ja = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Za = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Va = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Ga = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Ua = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Xa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ka = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Ja = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), qa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Qa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), ec = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), tc = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), nc = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), rc = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ oe.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), oc = {
  add: ja,
  subtract: Za,
  filter: Va,
  arrowLeft: Ga,
  arrowRight: Ua,
  defaultAvatar: Xa,
  calendarWarning: Ka,
  calendarFree: Ja,
  arrowDown: Qa,
  arrowUp: qa,
  search: ec,
  close: tc,
  moon: nc,
  sun: rc
}, yn = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = cn(), i = oc[e];
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
}, sc = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => sc(e, r, t)}
`;
const ic = b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${$o}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${je};
`, ac = b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, cc = b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, lc = b.div`
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
`, dc = b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, uc = b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, fc = b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`, hc = b.div`
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
`, pc = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, mc = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, gc = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, yc = b.div`
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
`, Lr = "#cdd8d2", Rr = [178, 216, 195], vc = [15, 125, 102], xc = (e) => {
  const r = Math.min(1, Math.max(0, e)), t = (n) => Math.round(Rr[n] + (vc[n] - Rr[n]) * r);
  return `rgb(${t(0)}, ${t(1)}, ${t(2)})`;
}, bc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ke(), s = lt(), i = fe(null), [c, l] = he(null), a = $e(
    () => Array.from({ length: 12 }, (C, w) => P().month(w).format("MMM").toUpperCase()),
    [s]
  ), d = $e(() => P().startOf("day"), []), { domainStart: u, domainEnd: y, domainDays: S } = $e(() => {
    const C = d.subtract(3, "month").startOf("month"), w = d.add(9, "month").endOf("month");
    return { domainStart: C, domainEnd: w, domainDays: w.diff(C, "day") + 1 };
  }, [d]), x = (C) => C.diff(u, "day") / S * 100, $ = (C) => Math.min(100, Math.max(0, C)), g = $e(() => {
    const C = [];
    let w = u.startOf("month");
    for (; w.isBefore(y); )
      C.push(w), w = w.add(1, "month");
    return C;
  }, [u, y]), O = o == null ? void 0 : o.yearCounts, K = $e(() => {
    const C = Math.ceil(S / 7), w = new Array(C).fill(0), W = (M) => {
      const L = M.diff(u, "day");
      return L < 0 || L >= S ? -1 : Math.floor(L / 7);
    };
    if (O && O.length)
      for (const M of O) {
        const L = W(P(M.date));
        L >= 0 && (w[L] += M.count);
      }
    else
      for (const M of t ?? [])
        for (const L of M.data ?? []) {
          const te = W(P(L.startDate));
          te >= 0 && (w[te] += 1);
        }
    const V = Math.max(0, ...w);
    if (V <= 0)
      return w.map(() => ({ h: 0, color: Lr }));
    const I = w.filter((M) => M > 0).sort((M, L) => M - L), A = I.length >> 1, T = I.length % 2 ? I[A] : (I[A - 1] + I[A]) / 2, Y = T > 0 ? V / T : 1, R = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, Y)))));
    return w.map(
      (M) => M > 0 ? { h: Math.min(100, 100 * Math.pow(M / V, R)), color: xc(M / V) } : { h: 0, color: Lr }
    );
  }, [t, O, u, S]), j = x(d), F = (C) => {
    const { startDate: w, endDate: W } = dn(C, r), V = $(x(w));
    return { left: V, width: $(x(W)) - V, startDate: w, endDate: W };
  }, f = F(e), m = c ? F(c.d) : null, v = (C) => `${C.date()} ${a[C.month()]}`, E = (C) => {
    var V;
    const w = (V = i.current) == null ? void 0 : V.getBoundingClientRect();
    if (!w)
      return null;
    const W = Math.min(1, Math.max(0, (C - w.left) / w.width));
    return { f: W, d: u.add(Math.round(W * (S - 1)), "day") };
  };
  return /* @__PURE__ */ H(ic, { children: [
    /* @__PURE__ */ H(ac, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ H(
      cc,
      {
        ref: i,
        onClick: (C) => {
          const w = E(C.clientX);
          w && n(w.d.toDate());
        },
        onMouseMove: (C) => {
          const w = E(C.clientX);
          w && l({ left: w.f * 100, d: w.d });
        },
        onMouseLeave: () => l(null),
        children: [
          /* @__PURE__ */ h(lc, { children: g.map((C, w) => /* @__PURE__ */ h("span", { style: { left: `${x(C)}%` }, children: w === 0 || C.month() === 0 ? `${a[C.month()]} ${C.format("YY")}` : a[C.month()] }, w)) }),
          g.map(
            (C, w) => w === 0 ? null : /* @__PURE__ */ h(dc, { style: { left: `${x(C)}%` } }, w)
          ),
          /* @__PURE__ */ h(uc, { children: K.map((C, w) => /* @__PURE__ */ h(fc, { style: { height: `${C.h}%`, background: C.color } }, w)) }),
          /* @__PURE__ */ h(pc, { style: { left: `${f.left}%`, width: `${f.width}%` } }),
          /* @__PURE__ */ h(hc, { style: { left: `${$(j)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && m && /* @__PURE__ */ H(Ae, { children: [
            /* @__PURE__ */ h(mc, { style: { left: `${m.left}%`, width: `${m.width}%` } }),
            /* @__PURE__ */ h(gc, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(yc, { style: { left: `${c.left}%` }, children: `Ir a ${v(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, Fo = Vn(/* @__PURE__ */ new Map()), wc = () => nt(Fo), Sc = 10500, Cc = 60, kc = 600, Mc = (e) => {
  var l;
  const r = document.getElementById(tt), t = r == null ? void 0 : r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);
  if (!r || !t)
    return !1;
  const n = r.getBoundingClientRect(), o = (l = document.getElementById(Co)) == null ? void 0 : l.getBoundingClientRect(), s = t.getBoundingClientRect(), i = Math.max((o == null ? void 0 : o.bottom) ?? n.top, n.top, 0), c = Math.min(n.bottom, window.innerHeight);
  return s.width > 0 && s.right > n.left + Fe && s.left < n.right && s.bottom > i && s.top < c;
}, $c = () => {
  const [e, r] = he(() => /* @__PURE__ */ new Map()), t = fe(0), n = fe(/* @__PURE__ */ new Set());
  ge(() => {
    const s = n.current;
    return () => s.forEach(clearTimeout);
  }, []);
  const o = ae((s) => {
    const i = s.filter((d) => Mc(d.segmentId));
    if (!i.length)
      return [];
    const c = ++t.current, l = new Map(
      i.map((d, u) => [
        d.segmentId,
        { kind: d.kind, key: c, delayMs: Math.min(u * Cc, kc) }
      ])
    );
    r((d) => new Map([...Array.from(d), ...Array.from(l)]));
    const a = setTimeout(() => {
      n.current.delete(a), r((d) => {
        const u = new Map(d);
        return l.forEach((y, S) => {
          var x;
          ((x = u.get(S)) == null ? void 0 : x.key) === c && u.delete(S);
        }), u;
      });
    }, Sc);
    return n.current.add(a), i.map((d) => d.segmentId);
  }, []);
  return { pulses: e, pulseTiles: o };
}, Dc = b.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Ec = b.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? $o : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, _c = b.div`
  position: relative;
`, Tc = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  onTileContextMenu: o,
  topBarWidth: s,
  onItemClick: i,
  toggleTheme: c,
  onEventDrop: l,
  onEventDrag: a,
  draggableConfig: d,
  schedulerRef: u,
  onTimeRangeSelect: y,
  onMultiTimeRangeSelect: S,
  clickToAddConfig: x
}) => {
  const { goToDate: $, handleGoToday: g, zoomIn: O, zoomOut: K, zoom: j } = Ke(), { pulses: F, pulseTiles: f } = $c();
  return io(
    u,
    () => ({
      goToDate: $,
      goToToday: g,
      setZoom: (m) => {
        if (!To(m))
          return;
        const v = m - j;
        if (v > 0)
          for (let E = 0; E < v; E++)
            O();
        else
          for (let E = 0; E < Math.abs(v); E++)
            K();
      },
      pulseTiles: f
    }),
    [$, g, j, O, K, f]
  ), /* @__PURE__ */ h(Fo.Provider, { value: F, children: /* @__PURE__ */ h(
    Oa,
    {
      data: e,
      baseData: r,
      categories: t,
      onTileClick: n,
      onTileContextMenu: o,
      topBarWidth: s,
      onItemClick: i,
      toggleTheme: c,
      onEventDrop: l,
      onEventDrag: a,
      draggableConfig: d,
      onTimeRangeSelect: y,
      onMultiTimeRangeSelect: S,
      clickToAddConfig: x
    }
  ) });
}, bu = Gn(function({
  data: r,
  categories: t,
  baseData: n,
  config: o,
  startDate: s,
  onRangeChange: i,
  onTileClick: c,
  onTileContextMenu: l,
  handleToggleDisplayActiveUnits: a,
  onClearFilterData: d,
  toolbarActions: u,
  onItemClick: y,
  isLoading: S,
  onEventDrop: x,
  onEventDrag: $,
  draggableConfig: g,
  onTimeRangeSelect: O,
  onMultiTimeRangeSelect: K,
  clickToAddConfig: j
}, F) {
  var R;
  const f = $e(
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
  ), m = fe(null), v = fe(null), [E, C] = he((R = m.current) == null ? void 0 : R.clientWidth), w = $e(() => P(s), [s]), [W, V] = he(f.defaultTheme ?? "light"), I = () => {
    V(W === "light" ? "dark" : "light");
  }, A = W === "light" ? Gs : Us, T = f.theme ? f.theme[A.mode] : {}, Y = {
    ...A,
    colors: {
      ...A.colors,
      ...T
    }
  };
  return io(
    F,
    () => ({
      goToDate: (M) => {
        var L;
        return (L = v.current) == null ? void 0 : L.goToDate(M);
      },
      goToToday: () => {
        var M;
        return (M = v.current) == null ? void 0 : M.goToToday();
      },
      setZoom: (M) => {
        var L;
        return (L = v.current) == null ? void 0 : L.setZoom(M);
      },
      pulseTiles: (M) => {
        var L;
        return ((L = v.current) == null ? void 0 : L.pulseTiles(M)) ?? [];
      }
    }),
    []
  ), an(() => {
    const M = () => {
      m.current && C(m.current.clientWidth);
    };
    M(), window.addEventListener("resize", M);
    let L;
    const te = m.current;
    return te && typeof ResizeObserver < "u" && (L = new ResizeObserver(M), L.observe(te)), () => {
      window.removeEventListener("resize", M), L == null || L.disconnect();
    };
  }, []), /* @__PURE__ */ H(Ae, { children: [
    /* @__PURE__ */ h(Vs, {}),
    /* @__PURE__ */ h(Hs, { theme: Y, children: /* @__PURE__ */ h(Ca, { lang: f.lang, translations: f.translations, children: /* @__PURE__ */ h(
      Ii,
      {
        data: r,
        isLoading: !!S,
        config: f,
        onRangeChange: i,
        defaultStartDate: w,
        handleToggleDisplayActiveUnits: a,
        onClearFilterData: d,
        toolbarActions: u,
        children: /* @__PURE__ */ H(Dc, { id: Do, children: [
          /* @__PURE__ */ h(
            Ec,
            {
              showScroll: !!r.length,
              $footer: f.showOverview !== !1 && !!r.length,
              id: tt,
              ref: m,
              children: /* @__PURE__ */ h(_c, { children: /* @__PURE__ */ h(
                Tc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  onTileContextMenu: l,
                  topBarWidth: E ?? 0,
                  onItemClick: y,
                  toggleTheme: I,
                  onEventDrop: x,
                  onEventDrag: $,
                  draggableConfig: g,
                  schedulerRef: v,
                  onTimeRangeSelect: O,
                  onMultiTimeRangeSelect: K,
                  clickToAddConfig: j
                }
              ) })
            }
          ),
          f.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(bc, {})
        ] })
      }
    ) }) })
  ] });
}), Ac = b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, Pc = b.button`
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
`, Ic = b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Oc = b.p`
  ${Ot}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Yr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = lt(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(Ac, { intent: e, children: /* @__PURE__ */ H(Pc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(Ic, { children: t }),
    /* @__PURE__ */ h(Oc, { children: l })
  ] }) });
}, Lc = b.div`
  min-width: ${Fe + "px"};
  max-width: ${Fe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Rc = b.div`
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
`, Yc = b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, Nc = b.input`
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
`, Fc = b.div`
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
`, Bc = Ze`
  from { opacity: 1; }
  to { opacity: 0; }
`, Ut = b.div`
  ${({ $fading: e }) => e && yt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Bc} 180ms ease forwards;
      }
    `}
`, zc = b.button`
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
`, Hc = Ze`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, Wc = b.div`
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
    animation: ${Hc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, jc = b.div`
  display: flex;
  align-items: center;
`, Zc = b.div`
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
`, Vc = b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Gc = b.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Nr = b.p`
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
`, Uc = b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`, Xc = b.span`
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
`, Kc = b.span`
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
`, Jc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), qc = () => /* @__PURE__ */ H("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: [
  /* @__PURE__ */ h("circle", { cx: "9", cy: "8", r: "3.2" }),
  /* @__PURE__ */ h("path", { d: "M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z" }),
  /* @__PURE__ */ h("circle", { cx: "16.8", cy: "8.6", r: "2.5" }),
  /* @__PURE__ */ h("path", { d: "M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8" })
] }), Qc = () => /* @__PURE__ */ H("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), el = () => /* @__PURE__ */ H("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), tl = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o, nested: s }) => /* @__PURE__ */ h(
  Wc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    $nested: s,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ H(jc, { children: [
      /* @__PURE__ */ h(Zc, { $provider: o, children: Jc(r.icon) ? /* @__PURE__ */ h(Vc, { src: r.icon, alt: "" }) : o && !s ? /* @__PURE__ */ h(el, {}) : /* @__PURE__ */ h(Qc, {}) }),
      /* @__PURE__ */ H(Gc, { children: [
        /* @__PURE__ */ h(Nr, { isMain: !0, children: r.title }),
        r.capacity != null || r.plate ? /* @__PURE__ */ H(Uc, { children: [
          r.capacity != null && /* @__PURE__ */ H(Xc, { title: `${r.capacity} pasajeros`, children: [
            /* @__PURE__ */ h(qc, {}),
            r.capacity
          ] }),
          r.plate && /* @__PURE__ */ h(Kc, { title: r.plate, children: r.plate })
        ] }) : r.subtitle && /* @__PURE__ */ h(Nr, { children: r.subtitle })
      ] })
    ] })
  }
), nl = Ze`
  0% { box-shadow: 0 0 0 0 var(--attention-ring); }
  70%, 100% { box-shadow: 0 0 0 5px transparent; }
`, ht = (e, r, t) => {
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
}, rl = b.div`
  display: flex;
  align-items: center;
  gap: ${({ $tone: e }) => e ? "4px" : "5px"};
  padding: ${({ $tone: e, $variant: r }) => e ? "0 7px 0 9px" : r === "provider" ? "0 11px 0 20px" : "0 11px 0 9px"};
  height: 21px;
  color: ${({ theme: e, $variant: r, $tone: t }) => ht(e, r, t).text};
  background: ${({ theme: e, $variant: r, $tone: t }) => ht(e, r, t).bg};
  border-left: 3px solid ${({ theme: e, $variant: r, $tone: t }) => ht(e, r, t).edge};
  border-top: ${({ theme: e, $variant: r }) => r === "provider" ? `1px solid ${e.colors.subcontractBorder}` : "none"};
  border-bottom: 1px solid ${({ theme: e, $variant: r, $tone: t }) => ht(e, r, t).bottom};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: r, $tone: t }) => ht(e, r, t).hover};
  }
`, ol = b.span`
  font-size: ${({ $variant: e }) => e === "provider" ? "10.5px" : "9.5px"};
  font-weight: ${({ $variant: e }) => e === "provider" ? 700 : 750};
  letter-spacing: ${({ $tone: e, $variant: r }) => e ? "0.03em" : r === "provider" ? "0.01em" : "0.07em"};
  text-transform: ${({ $variant: e }) => e === "provider" ? "none" : "uppercase"};
  color: ${({ theme: e, $variant: r, $tone: t }) => ht(e, r, t).text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, sl = b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => ht(e, r).text};
  flex-shrink: 0;
`, il = b.span`
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
  ${({ $pulse: e }) => e && yt`
      animation: ${nl} 1.8s ease-out infinite;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
`, al = b.div`
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
`, Xt = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => {
  const s = o === "unassigned" ? r === 0 ? "ok" : "warning" : void 0;
  return /* @__PURE__ */ H(rl, { $variant: o, $tone: s, onClick: n, title: e, children: [
    /* @__PURE__ */ h(al, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
      "path",
      {
        d: "M3 4.5L6 7.5L9 4.5",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }),
    /* @__PURE__ */ h(ol, { $variant: o, $tone: s, children: e }),
    s ? /* @__PURE__ */ H(il, { $tone: s, $pulse: s === "warning" && t, children: [
      /* @__PURE__ */ h("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: s === "ok" ? /* @__PURE__ */ h(
        "path",
        {
          d: "M2.5 6.5L5 9L9.5 3.5",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ) : /* @__PURE__ */ H(Ae, { children: [
        /* @__PURE__ */ h("path", { d: "M6 1.5L11 10.5H1L6 1.5Z", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" }),
        /* @__PURE__ */ h("path", { d: "M6 5V7.2", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
        /* @__PURE__ */ h("circle", { cx: "6", cy: "8.9", r: "0.75", fill: "currentColor" })
      ] }) }),
      r
    ] }) : /* @__PURE__ */ h(sl, { $variant: o, children: r })
  ] });
}, cl = ({
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
  fadingGroups: y,
  onToggleGroup: S,
  allGroupIds: x,
  onExpandAll: $,
  onCollapseAll: g,
  unassignedCount: O
}) => {
  const [K, j] = he(!1), F = lt(), f = () => j((M) => !M), m = r ? [...r].sort((M, L) => M.maxPassengers - L.maxPassengers) : [], v = m.length > 0, E = x.length > 0, C = E && u.size === x.length;
  E && u.size;
  const w = e.filter((M) => M.isUnassigned), W = F.unassigned ?? "No unit assigned", V = e.filter((M) => M.isSubcontract), I = F.subcontract ?? "Subcontract", A = Nn(V), T = (M) => {
    const L = e.indexOf(M);
    return /* @__PURE__ */ h(
      tl,
      {
        id: M.id,
        item: M.label,
        rows: n[L],
        onItemClick: d,
        isSubcontract: M.isSubcontract,
        nested: !!M.provider
      },
      M.id
    );
  }, Y = (M) => {
    const L = e.filter(
      (N) => !N.isSubcontract && N.categoryId === M.id
    );
    if (L.length === 0)
      return null;
    const te = u.has(M.id), ee = y.has(M.id), B = M.name;
    return /* @__PURE__ */ H("div", { children: [
      /* @__PURE__ */ h(
        Xt,
        {
          label: B,
          count: L.length,
          isCollapsed: te || ee,
          onToggle: () => S(M.id),
          variant: "category"
        }
      ),
      !te && /* @__PURE__ */ h(Ut, { $fading: ee, children: L.map(T) })
    ] }, M.id);
  }, R = e.filter(
    (M) => !M.isSubcontract && !M.isUnassigned && (!M.categoryId || !v)
  );
  return /* @__PURE__ */ H(Lc, { children: [
    /* @__PURE__ */ H(Rc, { $height: t, children: [
      /* @__PURE__ */ H(Yc, { children: [
        /* @__PURE__ */ H(Fc, { isFocused: K, children: [
          /* @__PURE__ */ h(
            Nc,
            {
              placeholder: F.search,
              value: l,
              onChange: a,
              onFocus: f,
              onBlur: f
            }
          ),
          /* @__PURE__ */ h(yn, { iconName: "search" })
        ] }),
        E && /* @__PURE__ */ h(
          zc,
          {
            title: C ? "Expand all" : "Collapse all",
            onClick: C ? $ : g,
            $allCollapsed: C,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: C ? /* @__PURE__ */ H(Ae, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ H(Ae, { children: [
              /* @__PURE__ */ h("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ h(
        Yr,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ h(yn, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    w.length > 0 && /* @__PURE__ */ H(Ae, { children: [
      /* @__PURE__ */ h(
        Xt,
        {
          label: W,
          count: O,
          isCollapsed: u.has("__unassigned__") || y.has("__unassigned__"),
          onToggle: () => S("__unassigned__"),
          variant: "unassigned"
        }
      ),
      !u.has("__unassigned__") && /* @__PURE__ */ h(Ut, { $fading: y.has("__unassigned__"), children: w.map(T) })
    ] }),
    v ? m.map(Y) : R.map(T),
    v && R.length > 0 && R.map(T),
    V.length > 0 && /* @__PURE__ */ H(Ae, { children: [
      /* @__PURE__ */ h(
        Xt,
        {
          label: I,
          count: V.length,
          isCollapsed: u.has(Qe) || y.has(Qe),
          onToggle: () => S(Qe),
          variant: "subcontract"
        }
      ),
      !u.has(Qe) && /* @__PURE__ */ H(Ut, { $fading: y.has(Qe), children: [
        A.loose.map(T),
        A.providers.map((M) => {
          const L = Qt(M.id);
          return /* @__PURE__ */ H("div", { children: [
            /* @__PURE__ */ h(
              Xt,
              {
                label: M.name,
                count: M.items.length,
                isCollapsed: u.has(L) || y.has(L),
                onToggle: () => S(L),
                variant: "provider"
              }
            ),
            !u.has(L) && /* @__PURE__ */ h(Ut, { $fading: y.has(L), children: M.items.map(T) })
          ] }, L);
        })
      ] })
    ] }),
    /* @__PURE__ */ h(
      Yr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(yn, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, ll = b.div`
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
`, dl = Ze`
from{
    left: -100%;
}
to{
    left: 100%;
}`, ul = b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${dl} 1s infinite;
`, fl = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(ll, { position: r, children: /* @__PURE__ */ h(ul, {}) }) : null, jn = fl, rt = (e, r) => {
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
    topText: y,
    bottomText: S,
    strokeStyle: x,
    labelBetweenCells: $
  } = e;
  t.beginPath();
  const g = x ?? (r.mode === "dark" ? r.colors.border : "#E4EAE7");
  if (t.strokeStyle = g, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), $ ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : (t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke()), t.font = a;
    const O = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.mode === "dark" ? r.colors.textPrimary : "#183D3D", t.fillText(l, O, c);
  }
  if (d && u && y && S) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.beginPath(), t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke(), t.font = y.font;
    const O = n + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, O, y.y), t.font = S.font;
    const K = n + s / 2 - t.measureText(S.label).width / 2;
    t.fillStyle = S.color, t.fillText(S.label, K, S.y);
  }
}, hl = (e, r, t, n, o = xt) => {
  const s = Xe + o, i = s + 13, c = s + 27;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = _o(
      P(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    ), u = d.isCurrentDay;
    if (rt(
      {
        ctx: e,
        x: l,
        y: s,
        width: _e,
        height: Dt,
        isBottomRow: !0,
        // Day headers stay UNIFORM across the week — weekends get no header tint (artifact: only the grid BODY washes
        // weekends, the header row never does). Today keeps its opaque currentDay fill so scrolling events don't bleed
        // through the HOY cell.
        fillStyle: u ? n.colors.currentDay : n.colors.gridBackground,
        // Reimagined hierarchy (artifact): the weekday name is the small muted label, the date number is the large
        // bold teal figure — the inverse of the old 14px-name / 10px-number. The trailing locale period is stripped.
        topText: {
          y: i,
          label: u ? "" : d.dayName.replace(/\./g, "").toUpperCase(),
          font: `600 10px ${je}`,
          color: n.mode === "dark" ? n.colors.placeholder : "#74897F"
        },
        bottomText: {
          y: c,
          label: `${d.dayOfMonth}`,
          font: u ? `700 12px ${je}` : `700 13px ${je}`,
          color: u ? n.colors.today : n.mode === "dark" ? n.colors.textPrimary : "#183D3D"
        }
      },
      n
    ), u) {
      const x = l + _e / 2, $ = i - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(x - 30 / 2, $, 30, 13, 5) : e.rect(x - 30 / 2, $, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${je}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", x, $ + 13 / 2 + 0.5), e.restore();
    }
    l += _e;
  }
}, pl = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Ge;
  const s = Xe;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= So && (c = 0);
    const a = Eo(t, l) * Ge;
    rt(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: xt,
        textYPos: Mo,
        label: P().month(c).format("MMMM").toUpperCase(),
        font: ct.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, ml = " ".repeat(98), gl = (e, r, t) => {
  const o = P(`${r.year}-${r.month + 1}-${r.dayOfMonth}`);
  let s = -r.dayOfMonth * _e + _e;
  for (let i = 0; i < So; i++) {
    const c = o.add(i, "months"), l = c.daysInMonth() * _e, a = c.format("MMMM YYYY").toUpperCase();
    rt(
      {
        ctx: e,
        x: s,
        y: 0,
        width: l,
        height: Xe,
        textYPos: Qn,
        label: `${a}${ml}${a}`,
        font: `800 12px ${je}`
      },
      t
    ), s += l;
  }
}, yl = (e, r, t, n) => {
  const o = 7 * _e, s = Xe, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = P(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (c + a) % Cr;
    u <= 0 && (u += Cr), d !== 1 && a === 0 && (l = -d * _e + _e), rt(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: xt,
        textYPos: Mo,
        label: `${t.toUpperCase()} ${u}`,
        font: ct.middleRow
      },
      n
    ), l += o;
  }
}, vl = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, xl = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, bl = (e, r, t, n, o) => {
  const s = rn - Dt / 1.6, i = rn - Dt / 4.5, c = Xe + xt;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = P(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = d.isSame(P(), "week");
    rt(
      {
        ctx: e,
        x: l,
        y: c,
        width: Pt,
        height: Dt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: u ? o.colors.today + "26" : vl({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: u ? `700 14px ${je}` : ct.bottomRow.name,
          color: u ? o.colors.today : xl({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: ct.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Pt;
  }
}, wl = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = ($r(s) - t + 1) * Ge, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = $r(s + l) * Ge), d + a > i && l > 0 && (a = Math.ceil((i - d) / Ge) * Ge), rt(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Xe,
        textYPos: Qn,
        label: (s + l).toString(),
        font: ct.topRow
      },
      n
    ), c += a, d += a, l++;
}, Sl = (e, r, t, n) => {
  const o = Math.floor(r / on) + 2, s = on * Ye;
  let l = -P(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ye + 0.5 * Ye;
  for (let a = 0; a < o; a++) {
    const d = P(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    rt(
      {
        ctx: e,
        x: l,
        y: It,
        width: s,
        height: Ht,
        textYPos: It + Ht / 2 + 2,
        label: d,
        font: ct.bottomRow.number
      },
      n
    ), l += s;
  }
}, Cl = (e, r, t, n) => {
  const o = Math.ceil(r / on), s = P(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * Ye;
  for (let u = 0; u < a; u++) {
    const y = P(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), x = P(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), $ = x.format("MMMM").toUpperCase(), g = x.diff(y, "hour") + 1, O = u === 0 ? g * Ye : r * Ye;
    rt(
      {
        ctx: e,
        x: d,
        y: 0,
        width: O,
        height: It,
        textYPos: Qn,
        label: $,
        font: ct.topRow
      },
      n
    ), d += O;
  }
}, kl = (e, r, t, n) => {
  let o = 0;
  const s = It + Ht, i = P(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Ye;
  for (let l = 0; l < r; l++) {
    const a = i.add(l, "hours").format("h:00a").toUpperCase();
    rt(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: En,
        label: a,
        font: ct.bottomRow.hoursInDay,
        textYPos: It + Ht + En / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Ye;
  }
}, Ml = (e, r, t, n, o, s, i, c = !0) => {
  switch (r) {
    case 0:
      wl(e, n, s, i), pl(e, t, n, i), bl(e, t, n, o, i);
      break;
    case 1:
      gl(e, n, i), c && yl(e, n, o, i), hl(e, t, n, i, c ? xt : 0);
      break;
    case 2:
      Cl(e, t, n, i), Sl(e, t, n, i), kl(e, t, n, i);
      break;
  }
}, $l = b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, Dl = b.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, El = b.div`
  height: ${({ $height: e }) => e ?? rn}px;
  display: block;
`, _l = b.canvas``, Tl = {
  transfer: /* @__PURE__ */ H(Ae, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ H(Ae, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ H(Ae, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ H(Ae, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ H(Ae, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ H(Ae, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ h("path", { d: "M12 7.5V12l3 2" })
  ] })
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
    children: Tl[e]
  }
), Al = b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Fe + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, Fr = b.span`
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
`, Kt = b.span`
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
`, Pl = b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, Il = b.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, Ol = b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, Ll = b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, Rl = b.span`
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
`, Yl = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], Nl = () => /* @__PURE__ */ H(Al, { children: [
  /* @__PURE__ */ h(Fr, { children: "Leyenda" }),
  /* @__PURE__ */ H(Kt, { children: [
    /* @__PURE__ */ h(We, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ H(Kt, { children: [
    /* @__PURE__ */ h(We, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ H(Kt, { children: [
    /* @__PURE__ */ h(We, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ H(Kt, { children: [
    /* @__PURE__ */ h(Pl, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(Il, {}),
  /* @__PURE__ */ H(Fr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Yl.map((e) => /* @__PURE__ */ H(Ol, { children: [
    /* @__PURE__ */ h(Ll, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(Rl, { style: { color: e.color }, children: /* @__PURE__ */ h(We, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), Fl = Gn(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = lt(), { date: c, cols: l, dayOfYear: a, startDate: d, config: u } = Ke(), y = fe(null), S = cn(), x = u.showWeekRow !== !1, $ = r === 2 ? Xs : r === 1 && !x ? Xe + Dt : rn, g = ae(
    (O) => {
      const K = rr(), j = $ + 1;
      Po(O, K, j), Ml(O, r, l, d, i, a, S, x);
    },
    [l, a, d, i, r, S, x, $]
  );
  return ge(() => {
    if (!y.current)
      return;
    const O = y.current.getContext("2d");
    if (!O)
      return;
    const K = () => g(O);
    return window.addEventListener("resize", K), () => window.removeEventListener("resize", K);
  }, [g]), ge(() => {
    const O = y.current;
    if (!O)
      return;
    O.style.letterSpacing = "1px";
    const K = O.getContext("2d");
    K && g(K);
  }, [c, r, g]), /* @__PURE__ */ H($l, { ref: s, children: [
    (u.showTopbar !== !1 || u.showLegend !== !1) && /* @__PURE__ */ H(Dl, { $width: t, children: [
      u.showTopbar !== !1 && /* @__PURE__ */ h(Wa, { width: t, showThemeToggle: n, toggleTheme: o }),
      u.showLegend !== !1 && /* @__PURE__ */ h(Nl, {})
    ] }),
    /* @__PURE__ */ h(El, { $height: $, id: Co, children: /* @__PURE__ */ h(_l, { ref: y }) })
  ] });
}), Bl = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Ge;
      break;
    case 2:
      n = Ye;
      break;
    default:
      n = _e;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), l = r.endDate.startOf("day"), a = () => {
    let d;
    switch (t) {
      case 2:
        d = (e.startDate.diff(r.startDate, "minute") / Ie + 1) * n - n / 2;
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
          e.endDate.diff(e.startDate, "minute") / Ie * n,
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
          e.endDate.diff(r.startDate, "minute") / Ie * n + 0.5 * n,
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
          r.endDate.diff(e.startDate, "minute") / Ie * n,
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
          r.endDate.diff(r.startDate, "minute") / Ie * n,
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
}, zl = (e, r, t, n, o, s) => {
  const i = e * ye + Ks, c = r.hour(), l = t.hour();
  let a, d, u, y;
  switch (s) {
    case 2: {
      a = P(n), d = P(o), u = P(r).hour(c).minute(0), y = P(t).hour(l).minute(0);
      break;
    }
    default: {
      a = P(n).hour(0).minute(0), d = P(o).hour(23).minute(59), u = r, y = t;
      break;
    }
  }
  return {
    ...Bl(
      { startDate: a, endDate: d },
      { startDate: u, endDate: y },
      s
    ),
    y: i
  };
}, Bo = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, zo = {
  sin_chofer: { icon: "warn", color: "#9AA4B2", label: "Sin chofer" },
  sin_avisar: { icon: "warn", color: "#D98A22", label: "No notificado al chofer" },
  programado: { icon: "warn", color: "#C2A878", label: "Notificación programada" },
  notificado: { icon: "clock", color: "#2C6BB0", label: "Notificado" },
  confirmado: { icon: "check", color: "#2E8B63", label: "Confirmado" }
}, Hl = {
  confirmed: { icon: "check", color: "#2E8B63", label: "Subcontrato confirmado" },
  unconfirmed: { icon: "clock", color: "#D98A22", label: "Subcontrato sin confirmar" }
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
  ${Ot}
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
const Wl = Ze`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, jl = Ze`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, Zl = b.button`
  ${Ot}
  position: absolute;
  height: ${ln}px;
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
    animation: ${Wl} 180ms ease-out;
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
  ${({ $exiting: e }) => e && yt`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${jl} 190ms ease-out forwards;
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
`, Vl = b.div`
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
`, Br = b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Gl = b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Ul = b.span`
  ${vt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, Xl = b.span`
  ${vt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Kl = b.span`
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
`, Jl = b.div`
  ${vt}
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
`, zr = b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Hr = b.span`
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
`, Wr = b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, Zn = {
  confirmed: { ring: "#2E8B63", glow: "rgba(46, 139, 99, 0.45)" },
  notified: { ring: "#2C6BB0", glow: "rgba(44, 107, 176, 0.45)" },
  lost: { ring: "#C6483D", glow: "rgba(198, 72, 61, 0.45)" }
}, ql = Ze`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`, Ql = Ze`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`, ed = Ze`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`, td = Ze`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`, nd = b.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({ $kind: e }) => Zn[e].ring};
  --pulse-glow: ${({ $kind: e }) => Zn[e].glow};
  animation:
    ${ql} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${Ql} 9600ms linear var(--pulse-delay, 0ms) both;
`, rd = b.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({ $kind: e }) => Zn[e].ring};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${ed} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
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
      animation: ${td} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`, od = b.div`
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
`, jr = b.span`
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
`, sd = Ze`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`, id = b.div`
  position: absolute;
  height: ${ln}px;
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
    animation: ${sd} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`, ad = b.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`, cd = b.div`
  ${vt}
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
`, ld = b.div`
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
`, dd = b.span`
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
`, ud = b.span`
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
`, fd = 34, vn = ({
  row: e,
  data: r,
  zoom: t,
  isSubcontract: n = !1,
  onTileClick: o,
  onTileContextMenu: s,
  onDragStart: i,
  isDragging: c = !1,
  isDraggable: l = !0,
  yOffset: a = 0,
  exiting: d = !1,
  highlighted: u = !1,
  dimmed: y = !1,
  leaving: S = !1,
  ghost: x = !1,
  ghostBadge: $ = "",
  pulse: g
}) => {
  const { date: O } = Ke(), K = dn(O, t), { y: j, x: F, width: f } = zl(
    e,
    K.startDate,
    K.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: m } = cn(), v = fe(null), E = P(r.startDate).isSame(P(r.endDate), "day"), C = r.eventType === Wt.Tour, w = r.eventType === Wt.Transfer, W = E && (C || w);
  if (x)
    return /* @__PURE__ */ H(id, { style: { left: `${F}px`, top: `${j + a}px`, width: `${f}px` }, children: [
      /* @__PURE__ */ H(ad, { children: [
        /* @__PURE__ */ H(cd, { children: [
          /* @__PURE__ */ h(We, { name: w ? "transfer" : "tour" }),
          r.title
        ] }),
        /* @__PURE__ */ H(ld, { children: [
          /* @__PURE__ */ h(We, { name: "check", strokeWidth: 2.6 }),
          "flota propia"
        ] })
      ] }),
      $ && /* @__PURE__ */ h(dd, { children: $ })
    ] });
  const V = (ee) => {
    ee.button === 0 && (v.current = { x: ee.clientX, y: ee.clientY }, l && i && (ee.preventDefault(), i(r, ee)));
  }, I = (ee) => {
    s && (ee.preventDefault(), s(r, { x: ee.clientX, y: ee.clientY }));
  }, A = (ee) => {
    if (v.current) {
      const B = Math.abs(ee.clientX - v.current.x), N = Math.abs(ee.clientY - v.current.y);
      Math.sqrt(B * B + N * N) <= 5 && (o == null || o(r)), v.current = null;
    } else
      o == null || o(r);
  }, T = {
    left: `${F}px`,
    top: `${j + a}px`,
    backgroundColor: `${r.bgColor ?? m.defaultTile}`,
    width: `${f}px`,
    color: Bo(r.bgColor ?? "")
  }, Y = !n && r.readiness ? zo[r.readiness] : null, R = n && r.subcontractConfirmed === !1, M = g ? { "--pulse-delay": `${g.delayMs}ms` } : void 0, L = (ee) => g ? /* @__PURE__ */ h(
    rd,
    {
      $kind: g.kind,
      style: M,
      children: ee
    },
    `${g.key}-${r.readiness ?? ""}-${String(r.subcontractConfirmed)}`
  ) : ee, te = (ee) => /* @__PURE__ */ H(
    Zl,
    {
      "data-segment-id": r.segmentId,
      style: T,
      onClick: A,
      onMouseDown: V,
      onContextMenu: I,
      onDragStart: (B) => B.preventDefault(),
      isDraggable: l,
      isDragging: c,
      $unconfirmed: R,
      $exiting: d,
      $highlighted: u,
      $dimmed: y,
      $leaving: S,
      $pulsing: !!g,
      children: [
        g && /* @__PURE__ */ h(nd, { $kind: g.kind, style: M, "aria-hidden": !0 }, g.key),
        S && /* @__PURE__ */ h(ud, { children: "Sub" }),
        ee
      ]
    }
  );
  return te(
    W ? /* @__PURE__ */ H(Ae, { children: [
      (n || Y) && /* @__PURE__ */ h(zr, { $sm: !0, children: L(
        n ? /* @__PURE__ */ h(Wr, { children: "SUB" }) : Y && /* @__PURE__ */ h(Hr, { $sm: !0, style: { color: Y.color }, children: /* @__PURE__ */ h(We, { name: Y.icon, strokeWidth: Y.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      /* @__PURE__ */ H(od, { $transfer: w, children: [
        /* @__PURE__ */ h(We, { name: w ? "transfer" : "sun", strokeWidth: 2.4 }),
        f >= fd && /* @__PURE__ */ H(Ae, { children: [
          /* @__PURE__ */ h(jr, { children: P(r.startDate).format("h:mm A") }),
          !w && /* @__PURE__ */ h(jr, { $end: !0, children: P(r.endDate).format("h:mm A") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ H(Ae, { children: [
      /* @__PURE__ */ h(zr, { children: (n || Y) && L(
        n ? /* @__PURE__ */ h(Wr, { children: "SUB" }) : Y && /* @__PURE__ */ h(Hr, { style: { color: Y.color }, children: /* @__PURE__ */ h(We, { name: Y.icon, strokeWidth: Y.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      r.bookingNumber && /* @__PURE__ */ h(Kl, { children: r.bookingNumber }),
      /* @__PURE__ */ H(Vl, { children: [
        /* @__PURE__ */ H(Br, { $pad: !0, children: [
          /* @__PURE__ */ h(Gl, { children: /* @__PURE__ */ h(We, { name: w ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(Ul, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(Br, { children: /* @__PURE__ */ h(Xl, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ H(Jl, { children: [
          /* @__PURE__ */ h(We, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Zr = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Be;
}, hd = (e) => ({
  segmentId: e.segmentId,
  reservationId: e.reservationId,
  startDate: e.startDate,
  endDate: e.endDate,
  occupancy: 0,
  title: e.title,
  bookingNumber: "",
  eventType: e.eventType
}), pd = ({
  data: e,
  zoom: r,
  onTileClick: t,
  onTileContextMenu: n,
  onDragStart: o,
  isDraggable: s,
  draggingEventId: i,
  separatorRowIndices: c = [],
  fadingUnitIds: l,
  highlightedSegmentId: a,
  focusedUnitIds: d,
  leavingSegmentIds: u,
  ghostProject: y
}) => {
  const S = wc(), { nodes: x, liveMap: $ } = $e(() => {
    const m = /* @__PURE__ */ new Map(), v = !!d && d.length > 0;
    let E = 0;
    return { nodes: e.map((w, W) => {
      W > 0 && (E += Math.max(e[W - 1].data.length, 1));
      const V = !!(l != null && l.has(w.id)), I = v && !d.includes(w.id), A = Zr(E, c), T = y && w.id === y.targetUnitId ? /* @__PURE__ */ h(
        vn,
        {
          row: E,
          data: hd(y),
          zoom: r,
          yOffset: A,
          isDragging: !1,
          isDraggable: !1,
          ghost: !0,
          ghostBadge: y.badge
        },
        `ghost-${w.id}`
      ) : null;
      if (!w.data.some((R) => R.length > 0))
        return T ? [T] : [];
      const Y = w.data.map(
        (R, M) => R.map((L) => {
          const te = i === L.segmentId, ee = s ? s(L) : !1, B = M + E, N = Zr(B, c);
          return m.set(L.segmentId, {
            project: L,
            absoluteRow: B,
            yOffset: N,
            isSubcontract: !!w.isSubcontract,
            faded: V
          }), /* @__PURE__ */ h(
            vn,
            {
              row: B,
              data: L,
              zoom: r,
              isSubcontract: w.isSubcontract,
              onTileClick: t,
              onTileContextMenu: n,
              onDragStart: o,
              isDragging: te,
              isDraggable: ee,
              yOffset: N,
              exiting: V,
              highlighted: a != null && L.segmentId === a,
              dimmed: I,
              leaving: !!(u != null && u.includes(L.segmentId)),
              pulse: S.get(L.segmentId)
            },
            L.segmentId
          );
        })
      );
      return T ? [...Y, [T]] : Y;
    }).flat(2), liveMap: m };
  }, [e, t, n, r, o, s, i, c, l, a, d, u, y, S]), g = fe(/* @__PURE__ */ new Map()), O = fe([]), [K, j] = he([]);
  ge(() => () => O.current.forEach(clearTimeout), []), ge(() => {
    const m = g.current;
    g.current = $;
    const v = [];
    if (m.forEach((w, W) => {
      !$.has(W) && !w.faded && v.push(w);
    }), j((w) => {
      let W = w.filter((V) => !$.has(V.project.segmentId));
      for (const V of v)
        W.some((I) => I.project.segmentId === V.project.segmentId) || (W = [...W, V]);
      return W;
    }), !v.length)
      return;
    const E = new Set(v.map((w) => w.project.segmentId)), C = setTimeout(() => {
      j((w) => w.filter((W) => !E.has(W.project.segmentId)));
    }, 220);
    O.current.push(C);
  }, [$]);
  const F = [];
  g.current !== $ && g.current.forEach((m, v) => {
    !$.has(v) && !m.faded && !K.some((E) => E.project.segmentId === v) && F.push(m);
  });
  const f = [...K, ...F].filter((m) => !$.has(m.project.segmentId)).map((m) => /* @__PURE__ */ h(
    vn,
    {
      row: m.absoluteRow,
      data: m.project,
      zoom: r,
      isSubcontract: m.isSubcontract,
      yOffset: m.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    m.project.segmentId
  ));
  return /* @__PURE__ */ h(Ae, { children: [...x, ...f] });
}, md = pd;
b.div`
  box-sizing: border-box;
  font-family: ${je};
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
const gd = b.div`
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
`, yd = b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, vd = b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, xd = b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, bd = b.span`
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
`, Vr = b.div`
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
`, wd = b.div`
  ${Ot}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Sd = b.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, Cd = b.div`
  padding: 10px 12px;
`, kd = b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Gr = b.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Ur = b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Xr = b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Kr = b.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Jr = b.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Md = b.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, $d = b.div`
  min-width: 0;
`, Dd = b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Ed = b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, qr = b.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Rt = b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Yt = b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Nt = b.div`
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
const _d = {
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
}, Td = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = fe(null), [s, i] = he("below"), c = lt(), l = { ..._d, ...c.tooltip };
  an(() => {
    if (!o.current || !t)
      return;
    const g = o.current, { width: O, height: K } = g.getBoundingClientRect(), j = g.parentElement;
    if (!j)
      return;
    const F = j.getBoundingClientRect(), f = 12, m = 4, v = F.height - t.y, E = F.width - t.x;
    let C = t.x + f, w = t.y + f, W = "below";
    E < O + f && (C = t.x - O - f), v < K + f && (w = t.y - K - f, W = "above"), C = Math.max(m, Math.min(C, F.width - O - m)), w = Math.max(m, Math.min(w, F.height - K - m)), i(W), g.style.left = `${C}px`, g.style.top = `${w}px`;
  }, [t]);
  const a = n.reservationType === Wt.Tour, d = a && n.isOneDayEvent, u = a ? d ? "sun" : "tour" : "transfer", y = a ? d ? l.oneDay : l.tour : l.transfer, S = n.readiness ? zo[n.readiness] : null, x = n.subcontractConfirmed === void 0 ? null : Hl[n.subcontractConfirmed ? "confirmed" : "unconfirmed"], $ = [
    ...n.subcontractConfirmed ? n.subcontractDetails ?? [] : [],
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ H(gd, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ H(yd, { children: [
      /* @__PURE__ */ H(vd, { children: [
        /* @__PURE__ */ h(xd, { children: n.bookingNumber }),
        /* @__PURE__ */ H(bd, { children: [
          /* @__PURE__ */ h(We, { name: u, strokeWidth: 2.4 }),
          y
        ] })
      ] }),
      /* @__PURE__ */ h(wd, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(Sd, { children: n.client }),
      S && /* @__PURE__ */ H(Vr, { style: { color: S.color }, children: [
        /* @__PURE__ */ h(We, { name: S.icon, strokeWidth: S.icon === "check" ? 2.6 : 2.2 }),
        n.readinessNote || S.label
      ] }),
      x && /* @__PURE__ */ H(Vr, { style: { color: x.color }, children: [
        /* @__PURE__ */ h(We, { name: x.icon, strokeWidth: x.icon === "check" ? 2.6 : 2.2 }),
        x.label
      ] })
    ] }),
    /* @__PURE__ */ H(Cd, { children: [
      /* @__PURE__ */ H(kd, { children: [
        /* @__PURE__ */ H(Gr, { children: [
          /* @__PURE__ */ h(Ur, { children: l.startDate }),
          /* @__PURE__ */ H(Xr, { children: [
            /* @__PURE__ */ h(Kr, { children: n.startDate }),
            /* @__PURE__ */ h(Jr, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ H(Gr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Ur, { children: l.endDate }),
          /* @__PURE__ */ H(Xr, { children: [
            /* @__PURE__ */ h(Kr, { children: n.endDate }),
            /* @__PURE__ */ h(Jr, { children: n.endTime })
          ] })
        ] })
      ] }),
      $.length > 0 && /* @__PURE__ */ h(Md, { children: $.map((g, O) => /* @__PURE__ */ H($d, { children: [
        /* @__PURE__ */ h(Dd, { children: g.label }),
        /* @__PURE__ */ h(Ed, { children: g.value })
      ] }, O)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ H(qr, { children: [
        n.departureAddress && /* @__PURE__ */ H(Rt, { children: [
          /* @__PURE__ */ h(Yt, { children: l.salida }),
          /* @__PURE__ */ h(Nt, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ H(Rt, { children: [
          /* @__PURE__ */ h(Yt, { children: l.destino }),
          /* @__PURE__ */ h(Nt, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ H(Rt, { children: [
          /* @__PURE__ */ h(Yt, { children: l.regreso }),
          /* @__PURE__ */ h(Nt, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ H(qr, { children: [
        n.serviceNotes && /* @__PURE__ */ H(Rt, { children: [
          /* @__PURE__ */ h(Yt, { children: l.serviceNotes }),
          /* @__PURE__ */ h(Nt, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ H(Rt, { children: [
          /* @__PURE__ */ h(Yt, { children: l.reservationNotes }),
          /* @__PURE__ */ h(Nt, { children: n.reservationNotes })
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
const Ad = b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Pd = b.div`
  position: absolute;
  height: ${ln}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, Id = b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Qr = b.p`
  ${Ot}
  ${vt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Od = b.p`
  ${Ot}
  ${vt}
`, Ld = b.div`
  position: sticky;
  left: ${Fe + 16}px;
  overflow: hidden;
`, Rd = b.div`
  position: absolute;
  height: ${ln}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Yd = b.div`
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
`, Nd = b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Fd = b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Bd = b.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, eo = b.div`
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
`, to = b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, no = b.div`
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
`, ro = b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, xn = b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, bn = b.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, kt = b.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, oo = b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, zd = ({
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
  const a = lt(), d = (F) => {
    let f = 0;
    for (const m of l)
      m <= F && f++;
    return F * ye + f * Be;
  }, [u, y] = he(null), [S, x] = he(0), $ = ae((F = 400, f = 300) => {
    const v = t.width, E = 48, C = document.getElementById("react-scheduler");
    if (!C)
      return {
        x: r.x + v + 16,
        y: r.y
      };
    const w = C.scrollLeft, W = C.scrollTop, V = C.clientWidth, I = C.clientHeight, A = r.x - w, T = r.y - W, Y = {
      left: Fe + 16,
      // Avoid left column
      right: V - 16,
      top: 16,
      bottom: I - 16
    }, R = Y.right - (A + v), M = A - Y.left, L = Y.bottom - (T + E), te = T - Y.top;
    let ee, B;
    return R >= F + 16 ? ee = A + v + 16 : M >= F + 16 ? ee = A - F - 16 : R >= M ? (ee = A + v + 16, ee + F > Y.right && (ee = Y.right - F)) : (ee = A - F - 16, ee < Y.left && (ee = Y.left)), L >= f + 16 ? B = T + E + 16 : te >= f + 16 ? B = T - f - 16 : L >= te ? (B = T + E + 16, B + f > Y.bottom && (B = Y.bottom - f)) : (B = T - f - 16, B < Y.top && (B = Y.top)), ee = Math.max(Y.left, Math.min(ee, Y.right - F)), B = Math.max(Y.top, Math.min(B, Y.bottom - f)), {
      x: ee + w,
      y: B + W
    };
  }, [r.x, r.y, t.width]);
  ge(() => {
    s === "dragging" && e && S === 0 ? x(r.x) : s === "idle" && x(0);
  }, [s, e, r.x, S]), ge(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const g = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const F = [];
    let f = 0;
    for (const m of i) {
      const v = Math.max(m.data.length, 1);
      if (m.capacity !== void 0 && e.totalPassengers > m.capacity)
        for (let E = 0; E < v; E++)
          F.push(f + E);
      f += v;
    }
    return F;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const O = s === "animating", K = Bo(e.bgColor ?? ""), j = () => {
    if (!n)
      return "";
    const F = P(n.startDate).format("MMM D, HH:mm"), f = P(n.endDate).format("HH:mm");
    return `${F} - ${f}`;
  };
  return /* @__PURE__ */ H(Ad, { children: [
    g.map((F) => /* @__PURE__ */ h(
      Fd,
      {
        style: {
          top: `${d(F)}px`,
          height: `${ye}px`
        }
      },
      F
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      Nd,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${d(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ H(Ae, { children: [
      /* @__PURE__ */ h(
        Rd,
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
        Yd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ye - 48) / 2}px`
          },
          children: j()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      Bd,
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
      const F = $(400, 300);
      return /* @__PURE__ */ H(
        eo,
        {
          style: {
            left: `${F.x}px`,
            top: `${F.y}px`
          },
          children: [
            /* @__PURE__ */ H(to, { children: [
              /* @__PURE__ */ h(no, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(ro, { children: n.conflicts.map((f, m) => {
              const v = P(n.startDate).format("YYYY-MM-DD"), E = P(n.endDate).format("YYYY-MM-DD"), C = P(f.event.startDate).format("YYYY-MM-DD"), w = P(f.event.endDate).format("YYYY-MM-DD"), W = P(f.conflictStart).format("YYYY-MM-DD"), V = P(f.conflictEnd).format("YYYY-MM-DD"), I = v !== E, A = C !== w, T = W !== V, Y = I ? P(n.startDate).format("MMM D, h:mm A") : P(n.startDate).format("h:mm A"), R = I ? P(n.endDate).format("MMM D, h:mm A") : P(n.endDate).format("h:mm A"), M = A ? P(f.event.startDate).format("MMM D, h:mm A") : P(f.event.startDate).format("h:mm A"), L = A ? P(f.event.endDate).format("MMM D, h:mm A") : P(f.event.endDate).format("h:mm A"), te = T ? P(f.conflictStart).format("MMM D, h:mm A") : P(f.conflictStart).format("h:mm A"), ee = T ? P(f.conflictEnd).format("MMM D, h:mm A") : P(f.conflictEnd).format("h:mm A"), B = T ? "" : P(f.conflictStart).format("MMM D"), N = n.startDate.getTime(), X = n.endDate.getTime(), re = f.event.startDate.getTime(), k = f.event.endDate.getTime(), U = N >= re && N < k, _ = X > re && X <= k, Q = N <= re && X >= k, Z = re <= N && k >= X;
              let z = !1, p = !1, J = !1, D = !1, G = "";
              return Q || Z ? (z = !0, p = !0, J = !0, D = !0, G = `⚠️ ${a.conflicts.changeBoth}`) : U && _ ? (z = !0, p = !0, J = !0, D = !0, G = `⚠️ ${a.conflicts.changeBoth}`) : U ? (z = !0, D = !0, G = `⚠️ ${a.conflicts.changeStart}`) : _ && (p = !0, J = !0, G = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ H(xn, { children: [
                /* @__PURE__ */ H(bn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ H(kt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  z ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Y }) : Y,
                  " ",
                  a.conflicts.to,
                  " ",
                  p ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: R }) : R
                ] }),
                /* @__PURE__ */ H(kt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  J ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: M }) : M,
                  " ",
                  a.conflicts.to,
                  " ",
                  D ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: L }) : L
                ] }),
                /* @__PURE__ */ H(oo, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  B && `${B}, `,
                  te,
                  " - ",
                  ee
                ] }),
                G && /* @__PURE__ */ h(kt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: G })
              ] }, m);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const F = $(400, 400);
      return /* @__PURE__ */ H(
        eo,
        {
          style: {
            left: `${F.x}px`,
            top: `${F.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ H(to, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(no, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ H(ro, { children: [
              (() => {
                const f = n.nearbyEvents.some((C) => C.position === "before"), m = n.nearbyEvents.some((C) => C.position === "after"), v = P(n.startDate).format("h:mm A"), E = P(n.endDate).format("h:mm A");
                return /* @__PURE__ */ H(xn, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ H(bn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ H(kt, { style: { fontWeight: 600 }, children: [
                    P(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: v }) : v,
                    " ",
                    a.conflicts.to,
                    " ",
                    m ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: E }) : E
                  ] }),
                  /* @__PURE__ */ h(kt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, m) => {
                const v = P(f.event.startDate).format("YYYY-MM-DD"), E = P(f.event.endDate).format("YYYY-MM-DD"), C = v !== E, w = C ? P(f.event.startDate).format("MMM D, h:mm A") : P(f.event.startDate).format("h:mm A"), W = C ? P(f.event.endDate).format("MMM D, h:mm A") : P(f.event.endDate).format("h:mm A"), V = P(f.event.startDate).format("MMM D"), I = Math.floor(f.timeGap / (1e3 * 60 * 60)), A = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), T = I > 0 ? `${I}h ${A}m` : `${A}m`, Y = f.position === "after", R = f.position === "before";
                return /* @__PURE__ */ H(xn, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ H(bn, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ H(kt, { children: [
                    !C && `${V}: `,
                    Y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    R ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: W }) : W
                  ] }),
                  /* @__PURE__ */ H(oo, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    T,
                    " ",
                    f.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, m);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      Pd,
      {
        $isAnimating: O,
        $animateToX: u == null ? void 0 : u.x,
        $animateToY: u == null ? void 0 : u.y,
        style: {
          left: O ? `${(u == null ? void 0 : u.x) ?? 0}px` : "0",
          top: O ? `${(u == null ? void 0 : u.y) ?? 0}px` : "0",
          transform: O ? void 0 : `translate3d(${c ? S : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: K
        },
        children: /* @__PURE__ */ h(Id, { children: /* @__PURE__ */ H(Ld, { children: [
          /* @__PURE__ */ h(Qr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Qr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(Od, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Hd = zd, Wd = Ze`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, jd = b.div`
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
  animation: ${Wd} 1.5s ease-in-out infinite;
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
`, Zd = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  jd,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Vd = Zd, Gd = Ze`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Ud = b.div`
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
  animation: ${Gd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, Xd = b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Kd = b.span`
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
`, Jd = b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, qd = b.span`
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
const Qd = b.div`
  display: flex;
  gap: 8px;
`, so = b.button`
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
`, eu = ({ selections: e, onConfirm: r, onClear: t }) => {
  var x;
  const o = lt().multiSelect, s = $e(() => e.filter(($) => $.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", d = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", u = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((x = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : x.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, S = /* @__PURE__ */ H(Ud, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ H(Xd, { children: [
      /* @__PURE__ */ H(Kd, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ H(Jd, { children: [
        "⚠️ ",
        u
      ] }),
      /* @__PURE__ */ h(qd, { children: c })
    ] }),
    /* @__PURE__ */ H(Qd, { children: [
      /* @__PURE__ */ H(so, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ h(so, { variant: "primary", $hasConflicts: y, onClick: r, children: y ? `⚠️ ${d}` : `✓ ${a}` })
    ] })
  ] });
  return Vo(S, document.body);
}, tu = eu, nu = Ze`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, ru = b.div`
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
  animation: ${nu} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && yt`
      border-style: dashed;
    `}
`, ou = b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, su = b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, iu = b.button`
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
`, au = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, l] = he(null), [a, d] = he({ x: 0, y: 0 }), u = fe(null), y = $e(() => {
    switch (t) {
      case 0:
        return Ge * 7;
      case 1:
        return _e;
      case 2:
        return Ye;
      default:
        return _e;
    }
  }, [t]), S = $e(() => P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), x = $e(() => e.map((m, v) => {
    let E = 0, C = !1;
    for (const M of r) {
      if (M.id === m.resourceId) {
        C = !0;
        break;
      }
      E += Math.max(M.data.length, 1);
    }
    if (!C)
      return null;
    const w = P(m.startDate), W = P(m.endDate);
    let V, I;
    switch (t) {
      case 0:
        V = Math.floor(w.diff(S, "days") / 7), I = Math.max(1, Math.ceil(W.diff(w, "days") / 7) + 1);
        break;
      case 1:
        V = w.diff(S, "days"), I = Math.max(1, W.diff(w, "days") + 1);
        break;
      case 2:
        V = w.diff(S, "hours"), I = Math.max(1, W.diff(w, "hours") + 1);
        break;
      default:
        V = 0, I = 1;
    }
    const A = V * y;
    let T = 0;
    for (const M of i)
      M <= E && T++;
    const Y = E * ye + T * Be, R = I * y;
    return {
      index: v,
      selection: m,
      x: A,
      y: Y,
      width: R,
      height: ye
    };
  }), [e, r, t, S, y]), $ = (m, v) => {
    const E = P(m).format("MMM D"), C = P(v).format("MMM D");
    return E === C ? E : `${E} - ${C}`;
  }, g = (m) => !m.hasConflict || !m.conflicts ? "" : `⚠️ Conflicts with:
${m.conflicts.map((E) => {
    const C = (E.overlapDuration / 36e5).toFixed(1);
    return `• ${E.event.title} (${C}h overlap)`;
  }).join(`
`)}`, O = ae(
    (m) => {
      let v = 0;
      for (const E of r) {
        const C = Math.max(E.data.length, 1);
        if (m >= v * ye && m < (v + C) * ye)
          return {
            resourceId: E.id,
            resourceLabel: E.label
          };
        v += C;
      }
      return null;
    },
    [r]
  ), K = ae(
    (m) => {
      const v = Math.floor(m / y);
      switch (t) {
        case 0:
          return S.add(v * 7, "days").toDate();
        case 1:
          return S.add(v, "days").toDate();
        case 2:
          return S.add(v, "hours").toDate();
        default:
          return S.toDate();
      }
    },
    [t, S, y]
  ), j = ae(
    (m, v) => {
      !s || (m.preventDefault(), m.stopPropagation(), !x[v]) || (u.current = { x: m.clientX, y: m.clientY }, l(v), d({ x: 0, y: 0 }));
    },
    [s, x]
  ), F = ae(
    (m) => {
      if (c === null || !u.current)
        return;
      const v = m.clientX - u.current.x, E = m.clientY - u.current.y, C = Math.round(v / y) * y, w = Math.round(E / ye) * ye;
      d({ x: C, y: w });
    },
    [c, y]
  ), f = ae(() => {
    if (c === null || !s) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const m = x[c];
    if (!m) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const v = m.x + a.x, E = m.y + a.y, C = O(E + ye / 2);
    if (!C) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const w = K(v), W = e[c], V = W.endDate.getTime() - W.startDate.getTime(), I = new Date(w.getTime() + V);
    s(c, {
      startDate: w,
      endDate: I,
      resourceId: C.resourceId,
      resourceLabel: C.resourceLabel
    }), l(null), d({ x: 0, y: 0 }), u.current = null;
  }, [c, a, x, e, s, O, K]);
  return ge(() => {
    if (c !== null)
      return document.addEventListener("mousemove", F), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", f);
      };
  }, [c, F, f]), /* @__PURE__ */ h(Ae, { children: x.map((m) => {
    if (!m)
      return null;
    const v = m.selection.hasConflict || !1, E = c === m.index, C = E ? m.x + a.x : m.x, w = E ? m.y + a.y : m.y;
    return /* @__PURE__ */ H(
      ru,
      {
        $hasConflict: v,
        $isDragging: E,
        style: {
          left: C,
          top: w,
          width: m.width,
          height: m.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (W) => j(W, m.index),
        children: [
          v && /* @__PURE__ */ h(su, { title: g(m.selection), children: "⚠️" }),
          /* @__PURE__ */ h(ou, { $hasConflict: v, children: $(m.selection.startDate, m.selection.endDate) }),
          /* @__PURE__ */ h(
            iu,
            {
              onClick: (W) => {
                W.stopPropagation(), o(m.index);
              },
              onMouseDown: (W) => W.stopPropagation(),
              title: v ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      m.index
    );
  }) });
}, cu = au, Ho = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? Ge * 7 : _e, s = P().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, lu = b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ theme: e }) => e.colors.today}12;
`, du = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ke(), n = $e(
    () => Ho(P(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(lu, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, uu = du, fu = "#2f6fed", hu = b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${fu}1c;
`, pu = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = Ke(), o = $e(() => !n || n.isSame(P(), "day") ? null : Ho(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(hu, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0 }) : null;
}, mu = pu;
export {
  bu as Scheduler
};
