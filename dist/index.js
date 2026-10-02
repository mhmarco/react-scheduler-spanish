var Po = Object.defineProperty;
var Io = (e, r, t) => r in e ? Po(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Zn = (e, r, t) => (Io(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as B, Fragment as Te } from "react/jsx-runtime";
import * as ie from "react";
import at, { useRef as ue, useContext as Je, useMemo as $e, useLayoutEffect as Jt, useDebugValue as Vn, createElement as Oo, createContext as In, useState as he, useCallback as le, useEffect as ge, forwardRef as On, useImperativeHandle as Gr } from "react";
import { createPortal as Yo } from "react-dom";
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, It = {}, Lo = {
  get exports() {
    return It;
  },
  set exports(e) {
    It = e;
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
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
  function $(m) {
    if (typeof m == "object" && m !== null) {
      var P = m.$$typeof;
      switch (P) {
        case e:
          switch (m = m.type, m) {
            case t:
            case o:
            case n:
            case a:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case i:
                case l:
                case y:
                case u:
                case s:
                  return m;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  return we.ContextConsumer = i, we.ContextProvider = s, we.Element = e, we.ForwardRef = l, we.Fragment = t, we.Lazy = y, we.Memo = u, we.Portal = r, we.Profiler = o, we.StrictMode = n, we.Suspense = a, we.SuspenseList = d, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(m) {
    return $(m) === i;
  }, we.isContextProvider = function(m) {
    return $(m) === s;
  }, we.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, we.isForwardRef = function(m) {
    return $(m) === l;
  }, we.isFragment = function(m) {
    return $(m) === t;
  }, we.isLazy = function(m) {
    return $(m) === y;
  }, we.isMemo = function(m) {
    return $(m) === u;
  }, we.isPortal = function(m) {
    return $(m) === r;
  }, we.isProfiler = function(m) {
    return $(m) === o;
  }, we.isStrictMode = function(m) {
    return $(m) === n;
  }, we.isSuspense = function(m) {
    return $(m) === a;
  }, we.isSuspenseList = function(m) {
    return $(m) === d;
  }, we.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === n || m === a || m === d || m === M || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === u || m.$$typeof === s || m.$$typeof === i || m.$$typeof === l || m.$$typeof === x || m.getModuleId !== void 0);
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
function No() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), x = !1, $ = !1, m = !1, P = !1, X = !1, W;
    W = Symbol.for("react.module.reference");
    function F(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === t || D === o || X || D === n || D === a || D === d || P || D === M || x || $ || m || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === u || D.$$typeof === s || D.$$typeof === i || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === W || D.getModuleId !== void 0));
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
                var K = ne && ne.$$typeof;
                switch (K) {
                  case c:
                  case i:
                  case l:
                  case y:
                  case u:
                  case s:
                    return K;
                  default:
                    return G;
                }
            }
          case r:
            return G;
        }
      }
    }
    var g = i, b = s, E = e, w = l, S = t, j = y, q = u, O = r, C = o, T = n, Y = a, R = d, I = !1, H = !1;
    function re(D) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(D) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(D) {
      return f(D) === i;
    }
    function z(D) {
      return f(D) === s;
    }
    function J(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function te(D) {
      return f(D) === l;
    }
    function k(D) {
      return f(D) === t;
    }
    function V(D) {
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
    function N(D) {
      return f(D) === n;
    }
    function p(D) {
      return f(D) === a;
    }
    function U(D) {
      return f(D) === d;
    }
    Se.ContextConsumer = g, Se.ContextProvider = b, Se.Element = E, Se.ForwardRef = w, Se.Fragment = S, Se.Lazy = j, Se.Memo = q, Se.Portal = O, Se.Profiler = C, Se.StrictMode = T, Se.Suspense = Y, Se.SuspenseList = R, Se.isAsyncMode = re, Se.isConcurrentMode = ee, Se.isContextConsumer = L, Se.isContextProvider = z, Se.isElement = J, Se.isForwardRef = te, Se.isFragment = k, Se.isLazy = V, Se.isMemo = _, Se.isPortal = Q, Se.isProfiler = Z, Se.isStrictMode = N, Se.isSuspense = p, Se.isSuspenseList = U, Se.isValidElementType = F, Se.typeOf = f;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ro() : e.exports = No();
})(Lo);
function Fo(e) {
  function r(L, z, J, te, k) {
    for (var V = 0, _ = 0, Q = 0, Z = 0, N, p, U = 0, D = 0, G, ne = G = N = 0, K = 0, ce = 0, me = 0, fe = 0, ve = J.length, De = ve - 1, be, ae = "", pe = "", Oe = "", ze = "", Ae; K < ve; ) {
      if (p = J.charCodeAt(K), K === De && _ + Z + Q + V !== 0 && (_ !== 0 && (p = _ === 47 ? 10 : 47), Z = Q = V = 0, ve++, De++), _ + Z + Q + V === 0) {
        if (K === De && (0 < ce && (ae = ae.replace(y, "")), 0 < ae.trim().length)) {
          switch (p) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ae += J.charAt(K);
          }
          p = 59;
        }
        switch (p) {
          case 123:
            for (ae = ae.trim(), N = ae.charCodeAt(0), G = 1, fe = ++K; K < ve; ) {
              switch (p = J.charCodeAt(K)) {
                case 123:
                  G++;
                  break;
                case 125:
                  G--;
                  break;
                case 47:
                  switch (p = J.charCodeAt(K + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = K + 1; ne < De; ++ne)
                          switch (J.charCodeAt(ne)) {
                            case 47:
                              if (p === 42 && J.charCodeAt(ne - 1) === 42 && K + 2 !== ne) {
                                K = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (p === 47) {
                                K = ne + 1;
                                break e;
                              }
                          }
                        K = ne;
                      }
                  }
                  break;
                case 91:
                  p++;
                case 40:
                  p++;
                case 34:
                case 39:
                  for (; K++ < De && J.charCodeAt(K) !== p; )
                    ;
              }
              if (G === 0)
                break;
              K++;
            }
            switch (G = J.substring(fe, K), N === 0 && (N = (ae = ae.replace(u, "").trim()).charCodeAt(0)), N) {
              case 64:
                switch (0 < ce && (ae = ae.replace(y, "")), p = ae.charCodeAt(1), p) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = z;
                    break;
                  default:
                    ce = Y;
                }
                if (G = r(z, ce, G, p, k + 1), fe = G.length, 0 < I && (ce = t(Y, ae, me), Ae = c(3, G, ce, z, O, q, fe, p, k, te), ae = ce.join(""), Ae !== void 0 && (fe = (G = Ae.trim()).length) === 0 && (p = 0, G = "")), 0 < fe)
                  switch (p) {
                    case 115:
                      ae = ae.replace(g, i);
                    case 100:
                    case 109:
                    case 45:
                      G = ae + "{" + G + "}";
                      break;
                    case 107:
                      ae = ae.replace(X, "$1 $2"), G = ae + "{" + G + "}", G = T === 1 || T === 2 && s("@" + G, 3) ? "@-webkit-" + G + "@" + G : "@" + G;
                      break;
                    default:
                      G = ae + G, te === 112 && (G = (pe += G, ""));
                  }
                else
                  G = "";
                break;
              default:
                G = r(z, t(z, ae, me), G, te, k + 1);
            }
            Oe += G, G = me = ce = ne = N = 0, ae = "", p = J.charCodeAt(++K);
            break;
          case 125:
          case 59:
            if (ae = (0 < ce ? ae.replace(y, "") : ae).trim(), 1 < (fe = ae.length))
              switch (ne === 0 && (N = ae.charCodeAt(0), N === 45 || 96 < N && 123 > N) && (fe = (ae = ae.replace(" ", ":")).length), 0 < I && (Ae = c(1, ae, z, L, O, q, pe.length, te, k, te)) !== void 0 && (fe = (ae = Ae.trim()).length) === 0 && (ae = "\0\0"), N = ae.charCodeAt(0), p = ae.charCodeAt(1), N) {
                case 0:
                  break;
                case 64:
                  if (p === 105 || p === 99) {
                    ze += ae + J.charAt(K);
                    break;
                  }
                default:
                  ae.charCodeAt(fe - 1) !== 58 && (pe += o(ae, N, p, ae.charCodeAt(2)));
              }
            me = ce = ne = N = 0, ae = "", p = J.charCodeAt(++K);
        }
      }
      switch (p) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + N === 0 && te !== 107 && 0 < ae.length && (ce = 1, ae += "\0"), 0 < I * re && c(0, ae, z, L, O, q, pe.length, te, k, te), q = 1, O++;
          break;
        case 59:
        case 125:
          if (_ + Z + Q + V === 0) {
            q++;
            break;
          }
        default:
          switch (q++, be = J.charAt(K), p) {
            case 9:
            case 32:
              if (Z + V + _ === 0)
                switch (U) {
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
              Z + _ + V === 0 && (ce = me = 1, be = "\f" + be);
              break;
            case 108:
              if (Z + _ + V + C === 0 && 0 < ne)
                switch (K - ne) {
                  case 2:
                    U === 112 && J.charCodeAt(K - 3) === 58 && (C = U);
                  case 8:
                    D === 111 && (C = D);
                }
              break;
            case 58:
              Z + _ + V === 0 && (ne = K);
              break;
            case 44:
              _ + Q + Z + V === 0 && (ce = 1, be += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (Z = Z === p ? 0 : Z === 0 ? p : Z);
              break;
            case 91:
              Z + _ + Q === 0 && V++;
              break;
            case 93:
              Z + _ + Q === 0 && V--;
              break;
            case 41:
              Z + _ + V === 0 && Q--;
              break;
            case 40:
              if (Z + _ + V === 0) {
                if (N === 0)
                  switch (2 * U + 3 * D) {
                    case 533:
                      break;
                    default:
                      N = 1;
                  }
                Q++;
              }
              break;
            case 64:
              _ + Q + Z + V + ne + G === 0 && (G = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Z + V + Q))
                switch (_) {
                  case 0:
                    switch (2 * p + 3 * J.charCodeAt(K + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        fe = K, _ = 42;
                    }
                    break;
                  case 42:
                    p === 47 && U === 42 && fe + 2 !== K && (J.charCodeAt(fe + 2) === 33 && (pe += J.substring(fe, K + 1)), be = "", _ = 0);
                }
          }
          _ === 0 && (ae += be);
      }
      D = U, U = p, K++;
    }
    if (fe = pe.length, 0 < fe) {
      if (ce = z, 0 < I && (Ae = c(2, pe, ce, L, O, q, fe, te, k, te), Ae !== void 0 && (pe = Ae).length === 0))
        return ze + pe + Oe;
      if (pe = ce.join(",") + "{" + pe + "}", T * C !== 0) {
        switch (T !== 2 || s(pe, 2) || (C = 0), C) {
          case 111:
            pe = pe.replace(F, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(W, "::-webkit-input-$1") + pe.replace(W, "::-moz-$1") + pe.replace(W, ":-ms-input-$1") + pe;
        }
        C = 0;
      }
    }
    return ze + pe + Oe;
  }
  function t(L, z, J) {
    var te = z.trim().split(m);
    z = te;
    var k = te.length, V = L.length;
    switch (V) {
      case 0:
      case 1:
        var _ = 0;
        for (L = V === 0 ? "" : L[0] + " "; _ < k; ++_)
          z[_] = n(L, z[_], J).trim();
        break;
      default:
        var Q = _ = 0;
        for (z = []; _ < k; ++_)
          for (var Z = 0; Z < V; ++Z)
            z[Q++] = n(L[Z] + " ", te[_], J).trim();
    }
    return z;
  }
  function n(L, z, J) {
    var te = z.charCodeAt(0);
    switch (33 > te && (te = (z = z.trim()).charCodeAt(0)), te) {
      case 38:
        return z.replace(P, "$1" + L.trim());
      case 58:
        return L.trim() + z.replace(P, "$1" + L.trim());
      default:
        if (0 < 1 * J && 0 < z.indexOf("\f"))
          return z.replace(P, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + z;
  }
  function o(L, z, J, te) {
    var k = L + ";", V = 2 * z + 3 * J + 4 * te;
    if (V === 944) {
      L = k.indexOf(":", 9) + 1;
      var _ = k.substring(L, k.length - 1).trim();
      return _ = k.substring(0, L).trim() + _ + ";", T === 1 || T === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (T === 0 || T === 2 && !s(k, 1))
      return k;
    switch (V) {
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
          return k.replace(j, "$1-webkit-$2") + k;
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
        return x.test(k) ? k.replace(M, ":-webkit-") + k.replace(M, ":-moz-") + k : k;
      case 1e3:
        switch (_ = k.substring(13).trim(), z = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(z)) {
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
        switch (z = (k = L).length - 10, _ = (k.charCodeAt(z) === 33 ? k.substring(0, z) : k).substring(L.indexOf(":", 7) + 1).trim(), V = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8))
              break;
          case 115:
            k = k.replace(_, "-webkit-" + _) + ";" + k;
            break;
          case 207:
          case 102:
            k = k.replace(_, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + k.replace(_, "-webkit-" + _) + ";" + k.replace(_, "-ms-" + _ + "box") + ";" + k;
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
        if (S.test(L) === !0)
          return (_ = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(L.replace("stretch", "fill-available"), z, J, te).replace(":fill-available", ":stretch") : k.replace(_, "-webkit-" + _) + k.replace(_, "-moz-" + _.replace("fill-", "")) + k;
        break;
      case 962:
        if (k = "-webkit-" + k + (k.charCodeAt(5) === 102 ? "-ms-" + k : "") + k, J + te === 211 && k.charCodeAt(13) === 105 && 0 < k.indexOf("transform", 10))
          return k.substring(0, k.indexOf(";", 27) + 1).replace($, "$1-webkit-$2") + k;
    }
    return k;
  }
  function s(L, z) {
    var J = L.indexOf(z === 1 ? ":" : "{"), te = L.substring(0, z !== 3 ? J : 10);
    return J = L.substring(J + 1, L.length - 1), H(z !== 2 ? te : te.replace(w, "$1"), J, z);
  }
  function i(L, z) {
    var J = o(z, z.charCodeAt(0), z.charCodeAt(1), z.charCodeAt(2));
    return J !== z + ";" ? J.replace(b, " or ($1)").substring(4) : "(" + z + ")";
  }
  function c(L, z, J, te, k, V, _, Q, Z, N) {
    for (var p = 0, U = z, D; p < I; ++p)
      switch (D = R[p].call(d, L, U, J, te, k, V, _, Q, Z, N)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          U = D;
      }
    if (U !== z)
      return U;
  }
  function l(L) {
    switch (L) {
      case void 0:
      case null:
        I = R.length = 0;
        break;
      default:
        if (typeof L == "function")
          R[I++] = L;
        else if (typeof L == "object")
          for (var z = 0, J = L.length; z < J; ++z)
            l(L[z]);
        else
          re = !!L | 0;
    }
    return l;
  }
  function a(L) {
    return L = L.prefix, L !== void 0 && (H = null, L ? typeof L != "function" ? T = 1 : (T = 2, H = L) : T = 0), a;
  }
  function d(L, z) {
    var J = L;
    if (33 > J.charCodeAt(0) && (J = J.trim()), ee = J, J = [ee], 0 < I) {
      var te = c(-1, z, J, J, O, q, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (z = te);
    }
    var k = r(Y, J, z, 0, 0);
    return 0 < I && (te = c(-2, k, J, J, O, q, k.length, 0, 0, 0), te !== void 0 && (k = te)), ee = "", C = 0, q = O = 1, k;
  }
  var u = /^\0+/g, y = /[\0\r\f]/g, M = /: */g, x = /zoo|gra/, $ = /([,: ])(transform)/g, m = /,\r+?/g, P = /([\t\r\n ])*\f?&/g, X = /@(k\w+)\s*(\S*)\s*/, W = /::(place)/g, F = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, g = /\(\s*(.*)\s*\)/g, b = /([\s\S]*?);/g, E = /-self|flex-/g, w = /[^]*?(:[rp][el]a[\w-]+)[^]*/, S = /stretch|:\s*\w+\-(?:conte|avail)/, j = /([^-])(image-set\()/, q = 1, O = 1, C = 0, T = 1, Y = [], R = [], I = 0, H = null, re = 0, ee = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var zo = {
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
function Bo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ho = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Un = /* @__PURE__ */ Bo(
  function(e) {
    return Ho.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ln = {}, Wo = {
  get exports() {
    return ln;
  },
  set exports(e) {
    ln = e;
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
function jo() {
  if (Kn)
    return Ce;
  Kn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, X = e ? Symbol.for("react.scope") : 60119;
  function W(f) {
    if (typeof f == "object" && f !== null) {
      var g = f.$$typeof;
      switch (g) {
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
                case M:
                case i:
                  return f;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  function F(f) {
    return W(f) === a;
  }
  return Ce.AsyncMode = l, Ce.ConcurrentMode = a, Ce.ContextConsumer = c, Ce.ContextProvider = i, Ce.Element = r, Ce.ForwardRef = d, Ce.Fragment = n, Ce.Lazy = x, Ce.Memo = M, Ce.Portal = t, Ce.Profiler = s, Ce.StrictMode = o, Ce.Suspense = u, Ce.isAsyncMode = function(f) {
    return F(f) || W(f) === l;
  }, Ce.isConcurrentMode = F, Ce.isContextConsumer = function(f) {
    return W(f) === c;
  }, Ce.isContextProvider = function(f) {
    return W(f) === i;
  }, Ce.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, Ce.isForwardRef = function(f) {
    return W(f) === d;
  }, Ce.isFragment = function(f) {
    return W(f) === n;
  }, Ce.isLazy = function(f) {
    return W(f) === x;
  }, Ce.isMemo = function(f) {
    return W(f) === M;
  }, Ce.isPortal = function(f) {
    return W(f) === t;
  }, Ce.isProfiler = function(f) {
    return W(f) === s;
  }, Ce.isStrictMode = function(f) {
    return W(f) === o;
  }, Ce.isSuspense = function(f) {
    return W(f) === u;
  }, Ce.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === a || f === s || f === o || f === u || f === y || typeof f == "object" && f !== null && (f.$$typeof === x || f.$$typeof === M || f.$$typeof === i || f.$$typeof === c || f.$$typeof === d || f.$$typeof === m || f.$$typeof === P || f.$$typeof === X || f.$$typeof === $);
  }, Ce.typeOf = W, Ce;
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
function Zo() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, X = e ? Symbol.for("react.scope") : 60119;
    function W(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === a || p === s || p === o || p === u || p === y || typeof p == "object" && p !== null && (p.$$typeof === x || p.$$typeof === M || p.$$typeof === i || p.$$typeof === c || p.$$typeof === d || p.$$typeof === m || p.$$typeof === P || p.$$typeof === X || p.$$typeof === $);
    }
    function F(p) {
      if (typeof p == "object" && p !== null) {
        var U = p.$$typeof;
        switch (U) {
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
                  case M:
                  case i:
                    return G;
                  default:
                    return U;
                }
            }
          case t:
            return U;
        }
      }
    }
    var f = l, g = a, b = c, E = i, w = r, S = d, j = n, q = x, O = M, C = t, T = s, Y = o, R = u, I = !1;
    function H(p) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), re(p) || F(p) === l;
    }
    function re(p) {
      return F(p) === a;
    }
    function ee(p) {
      return F(p) === c;
    }
    function L(p) {
      return F(p) === i;
    }
    function z(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function J(p) {
      return F(p) === d;
    }
    function te(p) {
      return F(p) === n;
    }
    function k(p) {
      return F(p) === x;
    }
    function V(p) {
      return F(p) === M;
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
    function N(p) {
      return F(p) === u;
    }
    Me.AsyncMode = f, Me.ConcurrentMode = g, Me.ContextConsumer = b, Me.ContextProvider = E, Me.Element = w, Me.ForwardRef = S, Me.Fragment = j, Me.Lazy = q, Me.Memo = O, Me.Portal = C, Me.Profiler = T, Me.StrictMode = Y, Me.Suspense = R, Me.isAsyncMode = H, Me.isConcurrentMode = re, Me.isContextConsumer = ee, Me.isContextProvider = L, Me.isElement = z, Me.isForwardRef = J, Me.isFragment = te, Me.isLazy = k, Me.isMemo = V, Me.isPortal = _, Me.isProfiler = Q, Me.isStrictMode = Z, Me.isSuspense = N, Me.isValidElementType = W, Me.typeOf = F;
  }()), Me;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = jo() : e.exports = Zo();
})(Wo);
var Yn = ln, Vo = {
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
}, Go = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Xo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Xr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ln = {};
Ln[Yn.ForwardRef] = Xo;
Ln[Yn.Memo] = Xr;
function qn(e) {
  return Yn.isMemo(e) ? Xr : Ln[e.$$typeof] || Vo;
}
var Uo = Object.defineProperty, Ko = Object.getOwnPropertyNames, Qn = Object.getOwnPropertySymbols, Jo = Object.getOwnPropertyDescriptor, qo = Object.getPrototypeOf, er = Object.prototype;
function Ur(e, r, t) {
  if (typeof r != "string") {
    if (er) {
      var n = qo(r);
      n && n !== er && Ur(e, n, t);
    }
    var o = Ko(r);
    Qn && (o = o.concat(Qn(r)));
    for (var s = qn(e), i = qn(r), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!Go[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = Jo(r, l);
        try {
          Uo(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Qo = Ur;
function Ze() {
  return (Ze = Object.assign || function(e) {
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
}, dn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !It.typeOf(e);
}, Zt = Object.freeze([]), tt = Object.freeze({});
function bt(e) {
  return typeof e == "function";
}
function un(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Rn(e) {
  return e && typeof e.styledComponentId == "string";
}
var wt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Nn = typeof window < "u" && "HTMLElement" in window, es = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), ts = {}, ns = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function rs() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ue(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(rs.apply(void 0, [ns[e]].concat(t)).trim());
}
var os = function() {
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
        (i <<= 1) < 0 && Ue(16, "" + t);
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
}(), Wt = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), Pt = 1, Ft = function(e) {
  if (Wt.has(e))
    return Wt.get(e);
  for (; Vt.has(Pt); )
    Pt++;
  var r = Pt++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ue(16, "" + r), Wt.set(e, r), Vt.set(r, e), r;
}, ss = function(e) {
  return Vt.get(e);
}, is = function(e, r) {
  r >= Pt && (Pt = r + 1), Wt.set(e, r), Vt.set(r, e);
}, as = "style[" + wt + '][data-styled-version="5.3.8"]', cs = new RegExp("^" + wt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ls = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, ds = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(cs);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (is(a, l), ls(e, a, c[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, us = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Kr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(wt))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(wt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = us();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, fs = function() {
  function e(t) {
    var n = this.element = Kr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Ue(17);
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
}(), hs = function() {
  function e(t) {
    var n = this.element = Kr(t);
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
}(), ps = function() {
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
}(), nr = Nn, ms = { isServer: !Nn, useCSSOMInjection: !es }, Gt = function() {
  function e(t, n, o) {
    t === void 0 && (t = tt), n === void 0 && (n = {}), this.options = Ze({}, ms, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Nn && nr && (nr = !1, function(s) {
      for (var i = document.querySelectorAll(as), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(wt) !== "active" && (ds(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ft(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ze({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new ps(i) : s ? new fs(i) : new hs(i), new os(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ft(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Ft(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ft(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = ss(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var d = wt + ".g" + i + '[id="' + c + '"]', u = "";
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
}(), gs = /(a)(d)/gi, rr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function fn(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = rr(r % 52) + t;
  return (rr(r % 52) + t).replace(gs, "$1-$2");
}
var it = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Jr = function(e) {
  return it(5381, e);
};
function qr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (bt(t) && !Rn(t))
      return !1;
  }
  return !0;
}
var ys = Jr("5.3.8"), vs = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && qr(r), this.componentId = t, this.baseHash = it(ys, t), this.baseStyle = n, Gt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ct(this.rules, r, t, n).join(""), c = fn(it(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = it(this.baseHash, n.hash), u = "", y = 0; y < a; y++) {
        var M = this.rules[y];
        if (typeof M == "string")
          u += M, process.env.NODE_ENV !== "production" && (d = it(d, M + y));
        else if (M) {
          var x = ct(M, r, t, n), $ = Array.isArray(x) ? x.join("") : x;
          d = it(d, $ + y), u += $;
        }
      }
      if (u) {
        var m = fn(d >>> 0);
        if (!t.hasNameForId(o, m)) {
          var P = n(u, "." + m, void 0, o);
          t.insertRules(o, m, P);
        }
        s.push(m);
      }
    }
    return s.join(" ");
  }, e;
}(), xs = /^\s*\/\/.*$/gm, bs = [":", "[", ".", "#"];
function ws(e) {
  var r, t, n, o, s = e === void 0 ? tt : e, i = s.options, c = i === void 0 ? tt : i, l = s.plugins, a = l === void 0 ? Zt : l, d = new Fo(c), u = [], y = function($) {
    function m(P) {
      if (P)
        try {
          $(P + "}");
        } catch {
        }
    }
    return function(P, X, W, F, f, g, b, E, w, S) {
      switch (P) {
        case 1:
          if (w === 0 && X.charCodeAt(0) === 64)
            return $(X + ";"), "";
          break;
        case 2:
          if (E === 0)
            return X + "/*|*/";
          break;
        case 3:
          switch (E) {
            case 102:
            case 112:
              return $(W[0] + X), "";
            default:
              return X + (S === 0 ? "/*|*/" : "");
          }
        case -2:
          X.split("/*|*/}").forEach(m);
      }
    };
  }(function($) {
    u.push($);
  }), M = function($, m, P) {
    return m === 0 && bs.indexOf(P[t.length]) !== -1 || P.match(o) ? $ : "." + r;
  };
  function x($, m, P, X) {
    X === void 0 && (X = "&");
    var W = $.replace(xs, ""), F = m && P ? P + " " + m + " { " + W + " }" : W;
    return r = X, t = m, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(P || !m ? "" : m, F);
  }
  return d.use([].concat(a, [function($, m, P) {
    $ === 2 && P.length && P[0].lastIndexOf(t) > 0 && (P[0] = P[0].replace(n, M));
  }, y, function($) {
    if ($ === -2) {
      var m = u;
      return u = [], m;
    }
  }])), x.hash = a.length ? a.reduce(function($, m) {
    return m.name || Ue(15), it($, m.name);
  }, 5381).toString() : "", x;
}
var Qr = at.createContext();
Qr.Consumer;
var eo = at.createContext(), Ss = (eo.Consumer, new Gt()), hn = ws();
function to() {
  return Je(Qr) || Ss;
}
function no() {
  return Je(eo) || hn;
}
var ro = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = hn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ue(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = hn), this.name + r.hash;
  }, e;
}(), Cs = /([A-Z])/, Ms = /([A-Z])/g, ks = /^ms-/, $s = function(e) {
  return "-" + e.toLowerCase();
};
function or(e) {
  return Cs.test(e) ? e.replace(Ms, $s).replace(ks, "-ms-") : e;
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
    return process.env.NODE_ENV !== "production" && It.isElement(l) && console.warn(un(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ct(l, r, t, n);
  }
  var a;
  return e instanceof ro ? t ? (e.inject(t, n), e.getName(n)) : e : dn(e) ? function d(u, y) {
    var M, x, $ = [];
    for (var m in u)
      u.hasOwnProperty(m) && !sr(u[m]) && (Array.isArray(u[m]) && u[m].isCss || bt(u[m]) ? $.push(or(m) + ":", u[m], ";") : dn(u[m]) ? $.push.apply($, d(u[m], m)) : $.push(or(m) + ": " + (M = m, (x = u[m]) == null || typeof x == "boolean" || x === "" ? "" : typeof x != "number" || x === 0 || M in zo ? String(x).trim() : x + "px") + ";"));
    return y ? [y + " {"].concat($, ["}"]) : $;
  }(e) : e.toString();
}
var ir = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function kt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return bt(e) || dn(e) ? ir(ct(tr(Zt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ir(ct(tr(e, t)));
}
var ar = /invalid hook call/i, zt = /* @__PURE__ */ new Set(), oo = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (ar.test(s))
          o = !1, zt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(c));
        }
      }, ue(), o && !zt.has(t) && (console.warn(t), zt.add(t));
    } catch (s) {
      ar.test(s.message) && zt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, so = function(e, r, t) {
  return t === void 0 && (t = tt), e.theme !== t.theme && e.theme || r || t.theme;
}, Ds = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Es = /(^-|-$)/g;
function tn(e) {
  return e.replace(Ds, "-").replace(Es, "");
}
var Fn = function(e) {
  return fn(Jr(e) >>> 0);
};
function Bt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var pn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, _s = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ts(e, r, t) {
  var n = e[t];
  pn(r) && pn(n) ? io(n, r) : e[t] = r;
}
function io(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (pn(i))
      for (var c in i)
        _s(c) && Ts(e, i[c], c);
  }
  return e;
}
var St = at.createContext();
St.Consumer;
function As(e) {
  var r = Je(St), t = $e(function() {
    return function(n, o) {
      if (!n)
        return Ue(14);
      if (bt(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ue(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Ue(8) : o ? Ze({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? at.createElement(St.Provider, { value: t }, e.children) : null;
}
var nn = {};
function ao(e, r, t) {
  var n = Rn(e), o = !Bt(e), s = r.attrs, i = s === void 0 ? Zt : s, c = r.componentId, l = c === void 0 ? function(X, W) {
    var F = typeof X != "string" ? "sc" : tn(X);
    nn[F] = (nn[F] || 0) + 1;
    var f = F + "-" + Fn("5.3.8" + F + nn[F]);
    return W ? W + "-" + f : f;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(X) {
    return Bt(X) ? "styled." + X : "Styled(" + un(X) + ")";
  }(e) : a, u = r.displayName && r.componentId ? tn(r.displayName) + "-" + r.componentId : r.componentId || l, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, M = r.shouldForwardProp;
  n && e.shouldForwardProp && (M = r.shouldForwardProp ? function(X, W, F) {
    return e.shouldForwardProp(X, W, F) && r.shouldForwardProp(X, W, F);
  } : e.shouldForwardProp);
  var x, $ = new vs(t, u, n ? e.componentStyle : void 0), m = $.isStatic && i.length === 0, P = function(X, W) {
    return function(F, f, g, b) {
      var E = F.attrs, w = F.componentStyle, S = F.defaultProps, j = F.foldedComponentIds, q = F.shouldForwardProp, O = F.styledComponentId, C = F.target;
      process.env.NODE_ENV !== "production" && Vn(O);
      var T = function(te, k, V) {
        te === void 0 && (te = tt);
        var _ = Ze({}, k, { theme: te }), Q = {};
        return V.forEach(function(Z) {
          var N, p, U, D = Z;
          for (N in bt(D) && (D = D(_)), D)
            _[N] = Q[N] = N === "className" ? (p = Q[N], U = D[N], p && U ? p + " " + U : p || U) : D[N];
        }), [_, Q];
      }(so(f, Je(St), S) || tt, f, E), Y = T[0], R = T[1], I = function(te, k, V, _) {
        var Q = to(), Z = no(), N = k ? te.generateAndInjectStyles(tt, Q, Z) : te.generateAndInjectStyles(V, Q, Z);
        return process.env.NODE_ENV !== "production" && Vn(N), process.env.NODE_ENV !== "production" && !k && _ && _(N), N;
      }(w, b, Y, process.env.NODE_ENV !== "production" ? F.warnTooManyClasses : void 0), H = g, re = R.$as || f.$as || R.as || f.as || C, ee = Bt(re), L = R !== f ? Ze({}, f, {}, R) : f, z = {};
      for (var J in L)
        J[0] !== "$" && J !== "as" && (J === "forwardedAs" ? z.as = L[J] : (q ? q(J, Un, re) : !ee || Un(J)) && (z[J] = L[J]));
      return f.style && R.style !== f.style && (z.style = Ze({}, f.style, {}, R.style)), z.className = Array.prototype.concat(j, O, I !== O ? I : null, f.className, R.className).filter(Boolean).join(" "), z.ref = H, Oo(re, z);
    }(x, X, W, m);
  };
  return P.displayName = d, (x = at.forwardRef(P)).attrs = y, x.componentStyle = $, x.displayName = d, x.shouldForwardProp = M, x.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Zt, x.styledComponentId = u, x.target = n ? e.target : e, x.withComponent = function(X) {
    var W = r.componentId, F = function(g, b) {
      if (g == null)
        return {};
      var E, w, S = {}, j = Object.keys(g);
      for (w = 0; w < j.length; w++)
        E = j[w], b.indexOf(E) >= 0 || (S[E] = g[E]);
      return S;
    }(r, ["componentId"]), f = W && W + "-" + (Bt(X) ? X : tn(un(X)));
    return ao(X, Ze({}, F, { attrs: y, componentId: f }), t);
  }, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(X) {
    this._foldedDefaultProps = n ? io({}, e.defaultProps, X) : X;
  } }), process.env.NODE_ENV !== "production" && (oo(d, u), x.warnTooManyClasses = function(X, W) {
    var F = {}, f = !1;
    return function(g) {
      if (!f && (F[g] = !0, Object.keys(F).length >= 200)) {
        var b = W ? ' with the id of "' + W + '"' : "";
        console.warn("Over 200 classes were generated for component " + X + b + `.
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
  }, o && Qo(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), x;
}
var mn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = tt), !It.isValidElementType(n))
      return Ue(1, String(n));
    var s = function() {
      return t(n, o, kt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Ze({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Ze({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(ao, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  mn[e] = mn(e);
});
var Ps = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = qr(t), Gt.registerId(this.componentId + 1);
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
function Is(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = kt.apply(void 0, [e].concat(t)), s = "sc-global-" + Fn(JSON.stringify(o)), i = new Ps(o, s);
  function c(a) {
    var d = to(), u = no(), y = Je(St), M = ue(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && at.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(x) {
      return typeof x == "string" && x.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(M, a, d, y, u), Jt(function() {
      if (!d.server)
        return l(M, a, d, y, u), function() {
          return i.removeStyles(M, d);
        };
    }, [M, a, d, y, u]), null;
  }
  function l(a, d, u, y, M) {
    if (i.isStatic)
      i.renderStyles(a, ts, u, M);
    else {
      var x = Ze({}, d, { theme: so(d, y, c.defaultProps) });
      i.renderStyles(a, x, u, M);
    }
  }
  return process.env.NODE_ENV !== "production" && oo(s), at.memo(c);
}
function We(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = kt.apply(void 0, [e].concat(t)).join(""), s = Fn(o);
  return new ro(s, o);
}
var qt = function() {
  return Je(St);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const v = mn;
var lt = {}, Os = {
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
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", u = "month", y = "quarter", M = "year", x = "date", $ = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, X = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var C = ["th", "st", "nd", "rd"], T = O % 100;
      return "[" + O + (C[(T - 20) % 10] || C[T] || C[0]) + "]";
    } }, W = function(O, C, T) {
      var Y = String(O);
      return !Y || Y.length >= C ? O : "" + Array(C + 1 - Y.length).join(T) + O;
    }, F = { s: W, z: function(O) {
      var C = -O.utcOffset(), T = Math.abs(C), Y = Math.floor(T / 60), R = T % 60;
      return (C <= 0 ? "+" : "-") + W(Y, 2, "0") + ":" + W(R, 2, "0");
    }, m: function O(C, T) {
      if (C.date() < T.date())
        return -O(T, C);
      var Y = 12 * (T.year() - C.year()) + (T.month() - C.month()), R = C.clone().add(Y, u), I = T - R < 0, H = C.clone().add(Y + (I ? -1 : 1), u);
      return +(-(Y + (T - R) / (I ? R - H : H - R)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: u, y: M, w: d, d: a, D: x, h: l, m: c, s: i, ms: s, Q: y }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, f = "en", g = {};
    g[f] = X;
    var b = function(O) {
      return O instanceof j;
    }, E = function O(C, T, Y) {
      var R;
      if (!C)
        return f;
      if (typeof C == "string") {
        var I = C.toLowerCase();
        g[I] && (R = I), T && (g[I] = T, R = I);
        var H = C.split("-");
        if (!R && H.length > 1)
          return O(H[0]);
      } else {
        var re = C.name;
        g[re] = C, R = re;
      }
      return !Y && R && (f = R), R || !Y && f;
    }, w = function(O, C) {
      if (b(O))
        return O.clone();
      var T = typeof C == "object" ? C : {};
      return T.date = O, T.args = arguments, new j(T);
    }, S = F;
    S.l = E, S.i = b, S.w = function(O, C) {
      return w(O, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var j = function() {
      function O(T) {
        this.$L = E(T.locale, null, !0), this.parse(T);
      }
      var C = O.prototype;
      return C.parse = function(T) {
        this.$d = function(Y) {
          var R = Y.date, I = Y.utc;
          if (R === null)
            return new Date(NaN);
          if (S.u(R))
            return new Date();
          if (R instanceof Date)
            return new Date(R);
          if (typeof R == "string" && !/Z$/i.test(R)) {
            var H = R.match(m);
            if (H) {
              var re = H[2] - 1 || 0, ee = (H[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(H[1], re, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, ee)) : new Date(H[1], re, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, ee);
            }
          }
          return new Date(R);
        }(T), this.$x = T.x || {}, this.init();
      }, C.init = function() {
        var T = this.$d;
        this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
      }, C.$utils = function() {
        return S;
      }, C.isValid = function() {
        return this.$d.toString() !== $;
      }, C.isSame = function(T, Y) {
        var R = w(T);
        return this.startOf(Y) <= R && R <= this.endOf(Y);
      }, C.isAfter = function(T, Y) {
        return w(T) < this.startOf(Y);
      }, C.isBefore = function(T, Y) {
        return this.endOf(Y) < w(T);
      }, C.$g = function(T, Y, R) {
        return S.u(T) ? this[Y] : this.set(R, T);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(T, Y) {
        var R = this, I = !!S.u(Y) || Y, H = S.p(T), re = function(_, Q) {
          var Z = S.w(R.$u ? Date.UTC(R.$y, Q, _) : new Date(R.$y, Q, _), R);
          return I ? Z : Z.endOf(a);
        }, ee = function(_, Q) {
          return S.w(R.toDate()[_].apply(R.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), R);
        }, L = this.$W, z = this.$M, J = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (H) {
          case M:
            return I ? re(1, 0) : re(31, 11);
          case u:
            return I ? re(1, z) : re(0, z + 1);
          case d:
            var k = this.$locale().weekStart || 0, V = (L < k ? L + 7 : L) - k;
            return re(I ? J - V : J + (6 - V), z);
          case a:
          case x:
            return ee(te + "Hours", 0);
          case l:
            return ee(te + "Minutes", 1);
          case c:
            return ee(te + "Seconds", 2);
          case i:
            return ee(te + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, C.endOf = function(T) {
        return this.startOf(T, !1);
      }, C.$set = function(T, Y) {
        var R, I = S.p(T), H = "set" + (this.$u ? "UTC" : ""), re = (R = {}, R[a] = H + "Date", R[x] = H + "Date", R[u] = H + "Month", R[M] = H + "FullYear", R[l] = H + "Hours", R[c] = H + "Minutes", R[i] = H + "Seconds", R[s] = H + "Milliseconds", R)[I], ee = I === a ? this.$D + (Y - this.$W) : Y;
        if (I === u || I === M) {
          var L = this.clone().set(x, 1);
          L.$d[re](ee), L.init(), this.$d = L.set(x, Math.min(this.$D, L.daysInMonth())).$d;
        } else
          re && this.$d[re](ee);
        return this.init(), this;
      }, C.set = function(T, Y) {
        return this.clone().$set(T, Y);
      }, C.get = function(T) {
        return this[S.p(T)]();
      }, C.add = function(T, Y) {
        var R, I = this;
        T = Number(T);
        var H = S.p(Y), re = function(z) {
          var J = w(I);
          return S.w(J.date(J.date() + Math.round(z * T)), I);
        };
        if (H === u)
          return this.set(u, this.$M + T);
        if (H === M)
          return this.set(M, this.$y + T);
        if (H === a)
          return re(1);
        if (H === d)
          return re(7);
        var ee = (R = {}, R[c] = n, R[l] = o, R[i] = t, R)[H] || 1, L = this.$d.getTime() + T * ee;
        return S.w(L, this);
      }, C.subtract = function(T, Y) {
        return this.add(-1 * T, Y);
      }, C.format = function(T) {
        var Y = this, R = this.$locale();
        if (!this.isValid())
          return R.invalidDate || $;
        var I = T || "YYYY-MM-DDTHH:mm:ssZ", H = S.z(this), re = this.$H, ee = this.$m, L = this.$M, z = R.weekdays, J = R.months, te = function(Q, Z, N, p) {
          return Q && (Q[Z] || Q(Y, I)) || N[Z].slice(0, p);
        }, k = function(Q) {
          return S.s(re % 12 || 12, Q, "0");
        }, V = R.meridiem || function(Q, Z, N) {
          var p = Q < 12 ? "AM" : "PM";
          return N ? p.toLowerCase() : p;
        }, _ = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: L + 1, MM: S.s(L + 1, 2, "0"), MMM: te(R.monthsShort, L, J, 3), MMMM: te(J, L), D: this.$D, DD: S.s(this.$D, 2, "0"), d: String(this.$W), dd: te(R.weekdaysMin, this.$W, z, 2), ddd: te(R.weekdaysShort, this.$W, z, 3), dddd: z[this.$W], H: String(re), HH: S.s(re, 2, "0"), h: k(1), hh: k(2), a: V(re, ee, !0), A: V(re, ee, !1), m: String(ee), mm: S.s(ee, 2, "0"), s: String(this.$s), ss: S.s(this.$s, 2, "0"), SSS: S.s(this.$ms, 3, "0"), Z: H };
        return I.replace(P, function(Q, Z) {
          return Z || _[Q] || H.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(T, Y, R) {
        var I, H = S.p(Y), re = w(T), ee = (re.utcOffset() - this.utcOffset()) * n, L = this - re, z = S.m(this, re);
        return z = (I = {}, I[M] = z / 12, I[u] = z, I[y] = z / 3, I[d] = (L - ee) / 6048e5, I[a] = (L - ee) / 864e5, I[l] = L / o, I[c] = L / n, I[i] = L / t, I)[H] || L, R ? z : S.a(z);
      }, C.daysInMonth = function() {
        return this.endOf(u).$D;
      }, C.$locale = function() {
        return g[this.$L];
      }, C.locale = function(T, Y) {
        if (!T)
          return this.$L;
        var R = this.clone(), I = E(T, Y, !0);
        return I && (R.$L = I), R;
      }, C.clone = function() {
        return S.w(this.$d, this);
      }, C.toDate = function() {
        return new Date(this.valueOf());
      }, C.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, C.toISOString = function() {
        return this.$d.toISOString();
      }, C.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), q = j.prototype;
    return w.prototype = q, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", u], ["$y", M], ["$D", x]].forEach(function(O) {
      q[O[1]] = function(C) {
        return this.$g(C, O[0], O[1]);
      };
    }), w.extend = function(O, C) {
      return O.$i || (O(C, j, w), O.$i = !0), w;
    }, w.locale = E, w.isDayjs = b, w.unix = function(O) {
      return w(1e3 * O);
    }, w.en = g[f], w.Ls = g, w.p = {}, w;
  });
})(Os);
const A = lt, At = "reactSchedulerOutsideWrapper", Fe = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Ys = Is`

  #${At} {
    font-family: ${Fe};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${At} *,
 #${At} *:before,
 #${At} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Ls = {
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
}, Rs = {
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
}, $t = `
margin: 0;
padding: 0;
`, dt = `
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
const Ee = 50, Ve = 24, ut = 16, vt = 40, Xt = vt + ut + Ve, Ct = 84, ye = 56, Re = 196, He = 12, Ie = 50, Mt = 24, Ot = 16, gn = 40, Ns = Mt + Ot + gn, cr = 24, lr = 52, nt = {
  topRow: `600 14px ${Fe}`,
  middleRow: `400 10px ${Fe}`,
  bottomRow: {
    name: `600 14px ${Fe}`,
    number: `600 10px ${Fe}`,
    hoursInDay: `400 9px ${Fe}`
  }
}, xt = 3, co = 12, Ut = 24, lo = "reactSchedulerCanvasHeaderWrapper", uo = "reactSchedulerCanvasWrapper", Ke = At, Fs = 4, Qt = 48, et = 5, zs = 40, dr = 8, zn = Ve / 2 + 2, fo = ut / 2 + Ve + 1, ur = 2, _e = 60, Ne = 21, ho = 58, po = "reactSchedulerBody", fr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Bn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, mo = (e, r) => A(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), go = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Bn(e),
  isCurrentDay: e.isSame(A(), "day"),
  year: parseInt(e.format("YYYY"))
}), Hn = (e, r, t, n, o, s, i, c = !1) => {
  s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.mode === "dark" ? i.colors.primary : "#F2F6F4", e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ye);
  const l = i.mode === "dark";
  e.strokeStyle = l ? i.colors.border : "#EEF3F0", e.beginPath(), e.moveTo(r + n - 0.5, t), e.lineTo(r + n - 0.5, t + ye), e.stroke(), e.strokeStyle = l ? i.colors.border : "#E4EAE7", e.beginPath(), e.moveTo(r, t + 0.5), e.lineTo(r + n, t + 0.5), e.stroke(), c && (e.strokeStyle = l ? i.colors.today : "#5C8374", e.beginPath(), e.moveTo(r + 0.5, t), e.lineTo(r + 0.5, t + ye), e.stroke());
}, Wn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Ne;
}, Bs = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Wn(i, s);
    for (let l = 0; l <= t; l++) {
      const a = A(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), d = a.isSame(A(), "day"), u = a.date() === 1;
      Hn(
        e,
        l * Ee,
        i * ye + c,
        Ee,
        Bn(a),
        d,
        o,
        u
      );
    }
  }
}, Hs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Ws = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * He;
  const l = r * ye + s.length * Ne;
  for (let a = 0; a <= t; a++) {
    const u = A(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(A(), "week");
    for (let y = 0; y < r; y++) {
      const M = Wn(y, s);
      Hn(e, i, y * ye + M, Ct, !0, u, o);
    }
    i += Ct;
  }
  for (let a = 0; a < t; a++) {
    const d = mo(n, a) * He;
    Hs(e, c, l, o), c += d;
  }
}, js = (e, r, t, n, o, s = []) => {
  const i = A(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const l = Wn(c, s);
    for (let a = 0; a <= t; a++) {
      let d;
      a === Math.floor(t / 2) ? d = A() : a > Math.floor(t / 2) ? d = A().add(a - Math.floor(t / 2), "hours") : d = A().subtract(Math.floor(t / 2) - c, "hours");
      const u = i.isSame(A(), "day") && d.isSame(A(), "hour");
      Hn(
        e,
        a * Ie + Ie / 2 - 0.5,
        c * ye + l,
        Ie,
        Bn(d),
        u,
        o
      );
    }
  }
}, Zs = (e, r, t, n, o = !1) => {
  const s = t * ye + r * Ne, i = e.canvas.width;
  e.fillStyle = o ? n.colors.subcontractBorder + "40" : n.mode === "dark" ? n.colors.primary + "80" : "#E9EFEC", e.fillRect(0, s, i, Ne);
}, Vs = (e, r, t, n, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(uo)) {
    switch (r) {
      case 0:
        Ws(e, t, n, o, s, i);
        break;
      case 1:
        Bs(e, t, n, o, s, i);
        break;
      case 2:
        js(e, t, n, o, s, i);
        break;
    }
    for (let a = 0; a < i.length; a++)
      Zs(e, a, i[a], s, i[a] === c);
    if (r === 1) {
      const a = A(`${o.year}-${o.month + 1}-${o.dayOfMonth}`), d = t * ye + i.length * Ne;
      e.strokeStyle = s.mode === "dark" ? s.colors.today : "#5C8374", e.setLineDash([]);
      for (let u = 0; u <= n; u++)
        if (a.add(u, "days").date() === 1) {
          const y = u * Ee + 0.5;
          e.beginPath(), e.moveTo(y, 0), e.lineTo(y, d), e.stroke();
        }
    }
  }
};
var yn = {}, Gs = {
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
        var y = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), M = this.diff(y, t, !0);
        return M < 0 ? i(this).startOf("week").week() : Math.ceil(M);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Gs);
const Xs = yn;
var vn = {}, Us = {
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
})(Us);
const Ks = vn;
var xn = {}, Js = {
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
        var d, u, y, M, x = i(this), $ = (d = this.isoWeekYear(), u = this.$u, y = (u ? s.utc : s)().year(d).startOf("year"), M = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (M += 7), y.add(M, t));
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
})(Js);
const qs = xn;
var bn = {}, Qs = {
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
        var a = o(s), d = o(i), u = (l = l || "()")[0] === "(", y = l[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(d, c) : !this.isAfter(d, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(Qs);
const ei = bn;
var wn = {}, ti = {
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
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, M = function(f) {
      return f instanceof F;
    }, x = function(f, g, b) {
      return new F(f, b, g.$l);
    }, $ = function(f) {
      return n.p(f) + "s";
    }, m = function(f) {
      return f < 0;
    }, P = function(f) {
      return m(f) ? Math.ceil(f) : Math.floor(f);
    }, X = function(f) {
      return Math.abs(f);
    }, W = function(f, g) {
      return f ? m(f) ? { negative: !0, format: "" + X(f) + g } : { negative: !1, format: "" + f + g } : { negative: !1, format: "" };
    }, F = function() {
      function f(b, E, w) {
        var S = this;
        if (this.$d = {}, this.$l = w, b === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E)
          return x(b * y[$(E)], this);
        if (typeof b == "number")
          return this.$ms = b, this.parseFromMilliseconds(), this;
        if (typeof b == "object")
          return Object.keys(b).forEach(function(O) {
            S.$d[$(O)] = b[O];
          }), this.calMilliseconds(), this;
        if (typeof b == "string") {
          var j = b.match(u);
          if (j) {
            var q = j.slice(2).map(function(O) {
              return O != null ? Number(O) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var g = f.prototype;
      return g.calMilliseconds = function() {
        var b = this;
        this.$ms = Object.keys(this.$d).reduce(function(E, w) {
          return E + (b.$d[w] || 0) * y[w];
        }, 0);
      }, g.parseFromMilliseconds = function() {
        var b = this.$ms;
        this.$d.years = P(b / a), b %= a, this.$d.months = P(b / d), b %= d, this.$d.days = P(b / c), b %= c, this.$d.hours = P(b / i), b %= i, this.$d.minutes = P(b / s), b %= s, this.$d.seconds = P(b / o), b %= o, this.$d.milliseconds = b;
      }, g.toISOString = function() {
        var b = W(this.$d.years, "Y"), E = W(this.$d.months, "M"), w = +this.$d.days || 0;
        this.$d.weeks && (w += 7 * this.$d.weeks);
        var S = W(w, "D"), j = W(this.$d.hours, "H"), q = W(this.$d.minutes, "M"), O = this.$d.seconds || 0;
        this.$d.milliseconds && (O += this.$d.milliseconds / 1e3);
        var C = W(O, "S"), T = b.negative || E.negative || S.negative || j.negative || q.negative || C.negative, Y = j.format || q.format || C.format ? "T" : "", R = (T ? "-" : "") + "P" + b.format + E.format + S.format + Y + j.format + q.format + C.format;
        return R === "P" || R === "-P" ? "P0D" : R;
      }, g.toJSON = function() {
        return this.toISOString();
      }, g.format = function(b) {
        var E = b || "YYYY-MM-DDTHH:mm:ss", w = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return E.replace(l, function(S, j) {
          return j || String(w[S]);
        });
      }, g.as = function(b) {
        return this.$ms / y[$(b)];
      }, g.get = function(b) {
        var E = this.$ms, w = $(b);
        return w === "milliseconds" ? E %= 1e3 : E = w === "weeks" ? P(E / y[w]) : this.$d[w], E === 0 ? 0 : E;
      }, g.add = function(b, E, w) {
        var S;
        return S = E ? b * y[$(E)] : M(b) ? b.$ms : x(b, this).$ms, x(this.$ms + S * (w ? -1 : 1), this);
      }, g.subtract = function(b, E) {
        return this.add(b, E, !0);
      }, g.locale = function(b) {
        var E = this.clone();
        return E.$l = b, E;
      }, g.clone = function() {
        return x(this.$ms, this);
      }, g.humanize = function(b) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!b);
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
      }, f;
    }();
    return function(f, g, b) {
      t = b, n = b().$utils(), b.duration = function(S, j) {
        var q = b.locale();
        return x(S, { $l: q }, j);
      }, b.isDuration = M;
      var E = g.prototype.add, w = g.prototype.subtract;
      g.prototype.add = function(S, j) {
        return M(S) && (S = S.asMilliseconds()), E.bind(this)(S, j);
      }, g.prototype.subtract = function(S, j) {
        return M(S) && (S = S.asMilliseconds()), w.bind(this)(S, j);
      };
    };
  });
})(ti);
const ni = wn;
var ri = "Expected a function", hr = 0 / 0, oi = "[object Symbol]", si = /^\s+|\s+$/g, ii = /^[-+]0x[0-9a-f]+$/i, ai = /^0b[01]+$/i, ci = /^0o[0-7]+$/i, li = parseInt, di = typeof Pe == "object" && Pe && Pe.Object === Object && Pe, ui = typeof self == "object" && self && self.Object === Object && self, fi = di || ui || Function("return this")(), hi = Object.prototype, pi = hi.toString, mi = Math.max, gi = Math.min, rn = function() {
  return fi.Date.now();
};
function yi(e, r, t) {
  var n, o, s, i, c, l, a = 0, d = !1, u = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(ri);
  r = pr(r) || 0, Sn(t) && (d = !!t.leading, u = "maxWait" in t, s = u ? mi(pr(t.maxWait) || 0, r) : s, y = "trailing" in t ? !!t.trailing : y);
  function M(g) {
    var b = n, E = o;
    return n = o = void 0, a = g, i = e.apply(E, b), i;
  }
  function x(g) {
    return a = g, c = setTimeout(P, r), d ? M(g) : i;
  }
  function $(g) {
    var b = g - l, E = g - a, w = r - b;
    return u ? gi(w, s - E) : w;
  }
  function m(g) {
    var b = g - l, E = g - a;
    return l === void 0 || b >= r || b < 0 || u && E >= s;
  }
  function P() {
    var g = rn();
    if (m(g))
      return X(g);
    c = setTimeout(P, $(g));
  }
  function X(g) {
    return c = void 0, y && n ? M(g) : (n = o = void 0, i);
  }
  function W() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function F() {
    return c === void 0 ? i : X(rn());
  }
  function f() {
    var g = rn(), b = m(g);
    if (n = arguments, o = this, l = g, b) {
      if (c === void 0)
        return x(l);
      if (u)
        return c = setTimeout(P, r), M(l);
    }
    return c === void 0 && (c = setTimeout(P, r)), i;
  }
  return f.cancel = W, f.flush = F, f;
}
function Sn(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function vi(e) {
  return !!e && typeof e == "object";
}
function xi(e) {
  return typeof e == "symbol" || vi(e) && pi.call(e) == oi;
}
function pr(e) {
  if (typeof e == "number")
    return e;
  if (xi(e))
    return hr;
  if (Sn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Sn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(si, "");
  var t = ai.test(e);
  return t || ci.test(e) ? li(e.slice(2), t ? 2 : 8) : ii.test(e) ? hr : +e;
}
var Cn = yi;
const jt = [0, 1, 2];
var Yt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Yt || {});
const yo = (e) => jt.includes(e), gt = (e) => {
  var n;
  const t = (((n = document.getElementById(Ke)) == null ? void 0 : n.clientWidth) || 0) - Re;
  switch (e) {
    case 1:
      return Math.ceil(t / Ee) * xt;
    case 2:
      return Math.ceil(t / Ie) * xt;
    default:
      return Math.ceil(t / Ct) * xt;
  }
}, bi = (e) => gt(e) / xt, en = (e, r) => {
  const t = gt(r) / 2;
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
}, wi = (e, r) => {
  const t = en(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, jn = () => {
  var t;
  const e = ((t = document.getElementById(Ke)) == null ? void 0 : t.clientWidth) || 0;
  return Math.max(0, e - Re) * xt;
}, vo = In({
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
  date: A(),
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
A.extend(Xs);
A.extend(Ks);
A.extend(qs);
A.extend(ei);
A.extend(ni);
const Si = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = A(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c,
  toolbarActions: l
}) => {
  const { zoom: a, maxRecordsPerPage: d = 50 } = n, [u, y] = he(a), [M, x] = he(A()), [$, m] = he(null), [P, X] = he(!1), [W, F] = he(gt(u)), f = jt[u] !== jt[jt.length - 1], g = u !== 0, b = $e(() => wi(M, u), [M, u]), E = en(M, u).startDate, w = A(E).dayOfYear(), S = go(E), j = ue(null), q = ue(!1), O = ue(null), [C, T] = he([{ x: 0, y: 0 }]), Y = le(
    (Z, N = "auto") => {
      var U, D, G, ne;
      const p = jn();
      switch (Z) {
        case "back":
          return (U = j.current) == null ? void 0 : U.scrollTo({
            behavior: N,
            left: p / 3
          });
        case "forward":
          return (D = j.current) == null ? void 0 : D.scrollTo({
            behavior: N,
            left: p / 3
          });
        case "middle": {
          const K = p / xt / 4;
          return (G = j.current) == null ? void 0 : G.scrollTo({
            behavior: N,
            left: p / 2 - K
          });
        }
        default:
          return (ne = j.current) == null ? void 0 : ne.scrollTo({
            behavior: N,
            left: p / 2
          });
      }
    },
    []
  ), R = (Z) => {
    T(Z);
  }, I = le(
    (Z) => {
      const N = bi(u);
      let p;
      switch (u) {
        case 0:
          p = N * 7;
          break;
        case 1:
          p = N;
          break;
        case 2:
          p = Math.ceil(N / Ut);
          break;
      }
      Cn(() => {
        switch ((Z === "forward" || Z === "back") && (q.current = !0), O.current = Z, Z) {
          case "back":
            x((D) => D.subtract(p, "days"));
            break;
          case "forward":
            x((D) => D.add(p, "days"));
            break;
          case "middle":
            x(A());
            break;
        }
        s == null || s(b);
      }, 300)();
    },
    [s, b, u]
  );
  ge(() => {
    O.current && (Y(O.current), O.current = null);
  }, [M, Y]), ge(() => {
    j.current = document.getElementById(Ke), F(gt(u));
  }, [u]), ge(() => {
    const Z = () => F(gt(u));
    return window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
  }, [u]), ge(() => {
    s == null || s(b);
  }, [s, b]), ge(() => {
    X(!1);
  }, [o]), ge(() => {
    P || (Y("middle"), X(!0), x(o));
  }, [o, P, Y]);
  const H = () => {
    t || (x(
      (Z) => u === 2 ? Z.add(cr, "hours") : Z.add(ur, "weeks")
    ), s == null || s(b));
  }, re = le(() => {
    t || I("forward");
  }, [t, I]), ee = () => {
    t || (x(
      (Z) => u === 2 ? Z.subtract(cr, "hours") : Z.subtract(ur, "weeks")
    ), s == null || s(b));
  }, L = le(() => {
    !P || t || I("back");
  }, [P, t, I]), z = le(() => {
    t || (O.current = "middle", x(A()), m(null), s == null || s(b));
  }, [t, s, b]), J = le(
    (Z) => {
      if (t)
        return;
      const N = A(Z).startOf("day");
      N.isValid() && (O.current = "middle", x(N), m(N), s == null || s(b));
    },
    [t, s, b]
  );
  ge(() => {
    if (!$)
      return;
    const Z = () => m(null);
    return document.addEventListener("mousedown", Z, { once: !0 }), () => document.removeEventListener("mousedown", Z);
  }, [$]);
  const te = () => V(u + 1), k = () => V(u - 1), V = (Z) => {
    yo(Z) && (y(Z), F(gt(Z)), s == null || s(b));
  }, _ = () => i == null ? void 0 : i(), { Provider: Q } = vo;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: H,
        handleScrollNext: re,
        handleGoPrev: ee,
        handleScrollPrev: L,
        handleGoToday: z,
        goToDate: J,
        zoomIn: te,
        zoomOut: k,
        setZoom: V,
        zoom: u,
        isNextZoom: f,
        isPrevZoom: g,
        date: M,
        jumpDate: $,
        isLoading: t,
        cols: W,
        startDate: S,
        dayOfYear: w,
        toggleDisplayActiveUnits: _,
        tilesCoords: C,
        updateTilesCoords: R,
        recordsThreshold: d,
        onClearFilterData: c,
        suppressNextSlideRef: q,
        toolbarActions: l
      },
      children: r
    }
  );
}, Ge = () => Je(vo), xo = (e, r, t) => {
  const n = Math.max(0, r), o = Math.max(0, t);
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = o * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = o + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
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
}, Ci = 5, mr = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > Ci;
}, yt = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, Mi = ({
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
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((V) => ({ ...V, data: [V.data] })) : r : e, {
    enabled: d = !0,
    isDraggable: u,
    resourceOnly: y = !1,
    isValidDrop: M
  } = i, [x, $] = he("idle"), [m, P] = he(null), [X, W] = he({ x: 0, y: 0 }), [F, f] = he({ width: 0, height: 48 }), [g, b] = he(null), [E, w] = he(!0), S = ue({ x: 0, y: 0 }), j = ue({ x: 0, y: 0 }), q = ue({ x: 0, y: 0 }), O = ue(null), C = ue(null), T = ue(0), Y = ue(null), R = le(
    (V) => !d || V.draggable === !1 ? !1 : u ? u(V) : !0,
    [d, u]
  ), I = le(
    (V, _) => {
      const Q = wo(_, l), Z = Math.floor(Q / ye);
      let N;
      switch (t) {
        case 0:
          N = He * 7;
          break;
        case 1:
          N = Ee;
          break;
        case 2:
          N = Ie;
          break;
        default:
          N = Ee;
      }
      const p = Math.floor(V / N);
      let U;
      const D = A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          U = D.add(p * 7, "days").toDate();
          break;
        case 1:
          U = D.add(p, "days").toDate();
          break;
        case 2:
          U = D.add(p, "hours").toDate();
          break;
        default:
          U = D.toDate();
      }
      return { snappedDate: U, snappedResourceIndex: Z };
    },
    [t, n, l]
  ), H = le(
    (V, _, Q, Z) => {
      const N = [], p = _.getTime(), U = Q.getTime(), D = a.find((ne) => ne.id === Z);
      if (!D)
        return N;
      const G = [];
      for (const ne of D.data)
        Array.isArray(ne) ? G.push(...ne) : G.push(ne);
      for (const ne of G) {
        if (ne.segmentId === V.segmentId)
          continue;
        const K = ne.startDate.getTime(), ce = ne.endDate.getTime();
        if (p >= K && p < ce || U > K && U <= ce || p <= K && U >= ce) {
          const fe = new Date(Math.max(p, K)), ve = new Date(Math.min(U, ce)), De = ve.getTime() - fe.getTime();
          N.push({
            event: ne,
            conflictStart: fe,
            conflictEnd: ve,
            overlapDuration: De
          });
        }
      }
      return N;
    },
    [a]
  ), re = le(
    (V, _, Q, Z) => {
      const N = [], p = _.getTime(), U = Q.getTime(), D = A(_).format("YYYY-MM-DD"), G = a.find((K) => K.id === Z);
      if (!G)
        return N;
      const ne = [];
      for (const K of G.data)
        Array.isArray(K) ? ne.push(...K) : ne.push(K);
      for (const K of ne) {
        if (K.segmentId === V.segmentId)
          continue;
        const ce = K.startDate.getTime(), me = K.endDate.getTime(), fe = A(K.startDate).format("YYYY-MM-DD"), ve = A(K.endDate).format("YYYY-MM-DD"), De = A(Q).format("YYYY-MM-DD");
        if (!(fe === D || ve === D || fe === De || ve === De || A(K.startDate).isBefore(_, "day") && A(K.endDate).isAfter(Q, "day")) || p >= ce && p < me || U > ce && U <= me || p <= ce && U >= me)
          continue;
        let pe, Oe;
        me <= p ? (pe = p - me, Oe = "before") : (pe = ce - U, Oe = "after"), N.push({
          event: K,
          timeGap: pe,
          position: Oe
        });
      }
      return N.sort((K, ce) => K.timeGap - ce.timeGap);
    },
    [a]
  ), ee = le(
    (V, _, Q) => {
      const Z = I(_, Q);
      let N, p;
      if (y)
        N = V.startDate, p = V.endDate;
      else {
        const me = A(V.endDate).diff(V.startDate);
        N = Z.snappedDate, p = A(N).add(me, "milliseconds").toDate();
      }
      let U = 0, D = "", G;
      for (const me of e) {
        const fe = Math.max(me.data.length, 1);
        if (Z.snappedResourceIndex < U + fe) {
          D = me.id, G = me.capacity;
          break;
        }
        U += fe;
      }
      if (!D)
        return null;
      let ne = !0;
      G !== void 0 && V.totalPassengers !== void 0 && (ne = V.totalPassengers <= G);
      const K = H(V, N, p, D), ce = K.length === 0 ? re(V, N, p, D) : [];
      return {
        startDate: N,
        endDate: p,
        resourceId: D,
        resourceIndex: Z.snappedResourceIndex,
        resourceCapacity: G,
        hasCapacity: ne,
        conflicts: K,
        hasConflict: K.length > 0,
        nearbyEvents: ce
      };
    },
    [I, e, y, H, re]
  ), L = le(
    (V, _) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - T.current < 100)
        return;
      T.current = Q;
      const Z = {
        event: V,
        currentStartDate: _.startDate,
        currentEndDate: _.endDate,
        currentResourceId: _.resourceId,
        conflicts: _.conflicts
      };
      s(Z);
    },
    [s]
  ), z = le(
    (V, _) => {
      if (!R(V) || !c.current)
        return;
      _.preventDefault(), _.stopPropagation();
      const Q = _.target.closest('[style*="left"]');
      let Z = 0, N = 0;
      Q && Q.style.left && Q.style.top && (Z = parseInt(Q.style.left), N = parseInt(Q.style.top));
      const p = yt(
        _.clientX,
        _.clientY,
        c.current
      );
      S.current = { x: Z, y: N }, j.current = { x: _.clientX, y: _.clientY }, q.current = {
        x: p.x - Z,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, Y.current = {
        startDate: V.startDate,
        endDate: V.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const G of e) {
        for (const ne of G.data)
          if (ne.some((K) => K.segmentId === V.segmentId)) {
            Y.current.resourceId = G.id;
            break;
          }
        if (Y.current.resourceId)
          break;
      }
      P(V), $("potential"), W({ x: Z, y: N });
      let U = 100, D = 48;
      if (Q) {
        const G = Q.getBoundingClientRect();
        U = G.width, D = G.height;
      }
      f({ width: U, height: D });
    },
    [R, c, e, t]
  ), J = le(
    (V) => {
      if (!c.current)
        return;
      let _ = c.current;
      for (; _ && _ !== document.body; ) {
        const K = window.getComputedStyle(_);
        if (_.scrollHeight > _.clientHeight && (K.overflowY === "auto" || K.overflowY === "scroll" || K.overflow === "auto" || K.overflow === "scroll"))
          break;
        _ = _.parentElement;
      }
      (!_ || _ === document.body) && (_ = document.documentElement);
      const Q = _.getBoundingClientRect(), Z = V.clientY, N = 50, p = 12, U = Z - Q.top, D = Q.bottom - Z;
      let G = !1, ne = 0;
      U < N && U > 0 ? (G = !0, ne = -p * (1 - U / N)) : D < N && D > 0 && (G = !0, ne = p * (1 - D / N)), G ? (C.current && cancelAnimationFrame(C.current), C.current = requestAnimationFrame(() => {
        _.scrollTop += ne, x === "dragging" && J(V);
      })) : C.current && (cancelAnimationFrame(C.current), C.current = null);
    },
    [c, x]
  ), te = le(
    (V) => {
      if (x === "idle" || x === "animating" || !m || !c.current)
        return;
      const _ = { x: V.clientX, y: V.clientY };
      if (x === "potential")
        if (mr(j.current, _))
          $("dragging");
        else
          return;
      J(V);
      const Q = yt(
        V.clientX,
        V.clientY,
        c.current
      );
      O.current && cancelAnimationFrame(O.current), O.current = requestAnimationFrame(() => {
        const Z = {
          x: Q.x - q.current.x,
          y: Q.y - q.current.y
        };
        W(Z);
        const N = ee(m, Q.x, Q.y);
        if (N && M) {
          const p = {
            event: m,
            currentStartDate: N.startDate,
            currentEndDate: N.endDate,
            currentResourceId: N.resourceId,
            conflicts: N.conflicts
          };
          N.hasConflict = !M(p);
        }
        if (b(N), N) {
          const p = N.hasCapacity !== !1;
          w(p), L(m, N);
        }
      });
    },
    [x, m, c, ee, L, M, J]
  ), k = le(
    async (V) => {
      if (x === "idle" || x === "animating")
        return;
      const _ = { x: V.clientX, y: V.clientY };
      if (!mr(j.current, _) || x === "potential") {
        $("idle"), P(null), b(null);
        return;
      }
      if (!m || !g || !Y.current) {
        $("idle"), P(null), b(null);
        return;
      }
      if (g.hasCapacity === !1) {
        w(!1), $("animating"), W(S.current), setTimeout(() => {
          $("idle"), P(null), b(null), w(!0);
        }, 300);
        return;
      }
      const Z = {
        event: m,
        originalStartDate: Y.current.startDate,
        originalEndDate: Y.current.endDate,
        originalResourceId: Y.current.resourceId,
        newStartDate: g.startDate,
        newEndDate: g.endDate,
        newResourceId: g.resourceId,
        hasConflict: g.hasConflict,
        conflicts: g.conflicts
      };
      let N = !0;
      if (o)
        try {
          const p = o(Z);
          N = p instanceof Promise ? await p : p;
        } catch {
          N = !1;
        }
      N ? (w(!0), $("idle"), P(null), b(null)) : (w(!1), $("animating"), W(S.current), setTimeout(() => {
        $("idle"), P(null), b(null), w(!0);
      }, 300));
    },
    [x, m, g, o, M]
  );
  return ge(() => {
    if (x === "potential" || x === "dragging") {
      const V = (Q) => te(Q), _ = (Q) => k(Q);
      return document.addEventListener("mousemove", V), document.addEventListener("mouseup", _), () => {
        document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", _);
      };
    } else
      return () => {
      };
  }, [x, te, k]), ge(() => () => {
    O.current && (cancelAnimationFrame(O.current), O.current = null), C.current && (cancelAnimationFrame(C.current), C.current = null);
  }, []), ge(() => {
    (x === "idle" || x === "animating") && (O.current && (cancelAnimationFrame(O.current), O.current = null), C.current && (cancelAnimationFrame(C.current), C.current = null));
  }, [x]), ge(() => {
    (x === "dragging" || x === "potential") && (x === "dragging" ? ($("animating"), W(S.current), setTimeout(() => {
      $("idle"), P(null), b(null);
    }, 300)) : ($("idle"), P(null), b(null)));
  }, [t]), ge(() => {
    if ((x === "dragging" || x === "potential") && m) {
      let V = !1;
      for (const _ of e) {
        for (const Q of _.data)
          if (Q.some((Z) => Z.segmentId === m.segmentId)) {
            V = !0;
            break;
          }
        if (V)
          break;
      }
      V || (x === "dragging" ? ($("animating"), W(S.current), setTimeout(() => {
        $("idle"), P(null), b(null);
      }, 300)) : ($("idle"), P(null), b(null)));
    }
  }, [e, x, m]), {
    dragState: x,
    draggedEvent: m,
    ghostPosition: X,
    ghostDimensions: F,
    dropTarget: g,
    isValidDrop: E,
    handleDragStart: z,
    isDraggable: R,
    draggingEventId: (m == null ? void 0 : m.segmentId) || null,
    resourceOnly: y
  };
}, ki = ({
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
  const { enabled: d = !1, isSelectable: u } = i, y = d && !!o, M = le((p) => {
    let U = 0;
    for (const D of a)
      D <= p && U++;
    return p * ye + U * Ne;
  }, [a]), [x, $] = he("idle"), [m, P] = he(null), [X, W] = he(null), [F, f] = he(null), [g, b] = he(!1), [E, w] = he([]), [S, j] = he(!1), q = ue(null), O = ue(null), C = ue(null), T = ue(null), Y = le(() => {
    switch (t) {
      case 0:
        return He * 7;
      case 1:
        return Ee;
      case 2:
        return Ie;
      default:
        return Ee;
    }
  }, [t]), R = le(
    (p) => {
      const U = Y(), D = Math.floor(p / U), G = A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
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
  ), I = le(
    (p) => {
      const U = wo(p, a), D = Math.floor(U / ye);
      let G = 0;
      for (const ne of e) {
        const K = Math.max(ne.data.length, 1);
        if (D < G + K)
          return {
            resourceId: ne.id,
            resourceIndex: D,
            resourceLabel: ne.label
          };
        G += K;
      }
      return null;
    },
    [e, a]
  ), H = le(
    (p) => {
      const U = Y();
      return Math.floor(p / U) * U;
    },
    [Y]
  ), re = le(
    (p, U, D, G = []) => {
      const ne = [], ce = (r || e).find((ve) => ve.id === p), me = U.getTime(), fe = D.getTime();
      if (ce) {
        const ve = ce.data[0], De = ve && Array.isArray(ve) ? ce.data.flat() : ce.data;
        for (const be of De) {
          const ae = new Date(be.startDate).getTime(), pe = new Date(be.endDate).getTime();
          if (me < pe && fe > ae) {
            const Oe = new Date(Math.max(me, ae)), ze = new Date(Math.min(fe, pe)), Ae = ze.getTime() - Oe.getTime();
            ne.push({
              event: be,
              conflictStart: Oe,
              conflictEnd: ze,
              overlapDuration: Ae
            });
          }
        }
      }
      for (const ve of G) {
        if (ve.resourceId !== p)
          continue;
        const De = ve.startDate.getTime(), be = ve.endDate.getTime();
        if (me < be && fe > De) {
          const ae = new Date(Math.max(me, De)), pe = new Date(Math.min(fe, be)), Oe = pe.getTime() - ae.getTime(), ze = {
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
            conflictStart: ae,
            conflictEnd: pe,
            overlapDuration: Oe
          });
        }
      }
      return ne;
    },
    [e, r]
  ), ee = le(
    (p) => {
      if (!y || l || !c.current || p.button !== 0)
        return;
      const U = p.target;
      if (U.closest("[data-segment-id]") || U.closest("[data-multi-select-ui]"))
        return;
      const D = yt(p.clientX, p.clientY, c.current), G = I(D.y);
      if (!G)
        return;
      q.current = { x: p.clientX, y: p.clientY }, O.current = G.resourceIndex;
      const ne = H(D.x), K = Y(), ce = M(G.resourceIndex);
      P(D), W(D), f({
        x: ne,
        y: ce,
        width: K,
        height: ye
      }), $("selecting");
    },
    [y, l, c, I, H, Y, M]
  ), L = le(
    (p) => {
      W(p);
      const U = Y(), D = H((m == null ? void 0 : m.x) || 0), G = H(p.x), ne = M(O.current), K = Math.min(D, G), ce = Math.max(D, G) + U;
      f({ x: K, y: ne, width: ce - K, height: ye });
    },
    [m, Y, H, M]
  ), z = le(() => {
    T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), J = le(
    (p, U) => {
      const D = document.getElementById(Ke);
      if (!D || !c.current)
        return;
      const G = D.getBoundingClientRect(), ne = 60, K = 12, ce = p - (G.left + Re), me = G.right - p;
      let fe = 0;
      ce < ne ? fe = -K * (1 - Math.max(0, ce) / ne) : me < ne && (fe = K * (1 - Math.max(0, me) / ne)), z(), fe !== 0 && (T.current = requestAnimationFrame(() => {
        D.scrollLeft += fe, L(yt(p, U, c.current)), J(p, U);
      }));
    },
    [c, L, z]
  ), te = le(
    (p) => {
      if (x !== "selecting" || !c.current || O.current === null)
        return;
      const U = yt(p.clientX, p.clientY, c.current);
      C.current && cancelAnimationFrame(C.current), C.current = requestAnimationFrame(() => L(U)), J(p.clientX, p.clientY);
    },
    [x, c, L, J]
  ), k = le(
    (p) => {
      if (x !== "selecting")
        return;
      if (z(), !c.current || !m || !q.current) {
        $("idle"), P(null), W(null), f(null);
        return;
      }
      const U = yt(p.clientX, p.clientY, c.current), D = I(m.y);
      if (!D) {
        $("idle"), P(null), W(null), f(null);
        return;
      }
      const G = Math.min(m.x, U.x), ne = Math.max(m.x, U.x), K = R(G), ce = R(ne), me = A(ce).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (u && !u(D.resourceId, K, me)) {
        $("idle"), P(null), W(null), f(null);
        return;
      }
      const fe = re(
        D.resourceId,
        K,
        me,
        E
      ), ve = fe.length > 0, De = {
        startDate: K,
        endDate: me,
        resourceId: D.resourceId,
        resourceLabel: D.resourceLabel,
        zoomLevel: t,
        hasConflict: ve,
        conflicts: ve ? fe : void 0
      };
      if (g)
        w((be) => [...be, De]), j(!0);
      else if (o) {
        const be = o(De), ae = (pe) => {
          pe != null && pe.continueMultiSelect && (b(!0), w([De]), j(!0));
        };
        be instanceof Promise ? be.then(ae) : ae(be);
      }
      $("idle"), P(null), W(null), f(null), q.current = null, O.current = null;
    },
    [
      x,
      c,
      m,
      I,
      R,
      u,
      o,
      t,
      g,
      re,
      E,
      z
    ]
  ), V = le(() => {
    if (E.length > 0 && s) {
      j(!1);
      const p = s(E), U = (D) => {
        D != null && D.continueMultiSelect ? j(!0) : (w([]), b(!1), j(!1));
      };
      p instanceof Promise ? p.then(U) : U(p);
      return;
    }
    w([]), b(!1), j(!1);
  }, [E, s]), _ = le(() => {
    w([]), b(!1), j(!1);
  }, []), Q = le((p) => {
    w((U) => {
      const D = U.filter((G, ne) => ne !== p);
      return D.length === 0 && (b(!1), j(!1)), D;
    });
  }, []), Z = le(
    (p, U) => {
      w((D) => D.map((G, ne) => {
        if (ne !== p)
          return G;
        const K = { ...G, ...U }, ce = D.filter((fe, ve) => ve !== p), me = re(
          K.resourceId,
          K.startDate,
          K.endDate,
          ce
        );
        return {
          ...K,
          hasConflict: me.length > 0,
          conflicts: me.length > 0 ? me : void 0
        };
      }));
    },
    [re]
  ), N = le(
    (p) => {
      p.key === "Escape" && (x === "selecting" ? (z(), $("idle"), P(null), W(null), f(null), q.current = null, O.current = null) : g && E.length > 0 && (w([]), b(!1), j(!1)));
    },
    [x, g, E.length, z]
  );
  return ge(() => {
    if (x === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", k), document.addEventListener("keydown", N), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", k), document.removeEventListener("keydown", N);
      };
  }, [x, te, k, N]), ge(() => {
    if (g && E.length > 0)
      return document.addEventListener("keydown", N), () => {
        document.removeEventListener("keydown", N);
      };
  }, [g, E.length, N]), ge(() => () => {
    C.current && (cancelAnimationFrame(C.current), C.current = null), z();
  }, [z]), ge(() => {
    l && x === "selecting" && (z(), $("idle"), P(null), W(null), f(null), q.current = null, O.current = null);
  }, [l, x, z]), {
    selectionState: x,
    selectionStart: m,
    selectionEnd: X,
    selectionBox: F,
    handleGridMouseDown: ee,
    isEnabled: y,
    pendingSelections: E,
    confirmSelections: V,
    clearSelections: _,
    removeSelection: Q,
    updateSelection: Z,
    isMultiSelectActive: g,
    hasUnconfirmedSelections: S
  };
}, $i = v.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, Di = v.div`
  position: relative;
`, Ei = v.canvas``;
v.canvas``;
const _i = v.canvas`
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
`, Ti = On(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onTileContextMenu: i, onEventDrop: c, onEventDrag: l, draggableConfig: a, onDragStateChange: d, onTimeRangeSelect: u, onMultiTimeRangeSelect: y, clickToAddConfig: M, separatorRowIndices: x = [], subcontractSeparatorRow: $ = -1, fadingUnitIds: m }, P) {
  const X = ue(!1), { handleScrollNext: W, handleScrollPrev: F, date: f, isLoading: g, cols: b, startDate: E, suppressNextSlideRef: w, config: S } = Ge(), j = ue(null), q = ue(null), O = ue(t), C = ue(f), T = ue(null), Y = ue(null), R = ue(null), I = ue(null), [H, re] = he(!1), ee = qt(), {
    dragState: L,
    draggedEvent: z,
    ghostPosition: J,
    ghostDimensions: te,
    dropTarget: k,
    isValidDrop: V,
    handleDragStart: _,
    isDraggable: Q,
    draggingEventId: Z,
    resourceOnly: N
  } = Mi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: E,
    onEventDrop: c,
    onEventDrag: l,
    draggableConfig: a,
    gridRef: I,
    separatorRowIndices: x
  });
  ge(() => {
    const xe = L === "dragging" || L === "potential";
    re(xe), d && d(xe);
  }, [L, d]);
  const p = ue(!1), U = ue(f), D = ue(null);
  ge(() => {
    var Ye;
    const xe = U.current;
    if (U.current = f, !p.current) {
      p.current = !0;
      return;
    }
    if (w != null && w.current) {
      w.current = !1;
      return;
    }
    const oe = I.current;
    if (!(oe != null && oe.animate))
      return;
    const de = f.isAfter(xe) ? 48 : -48;
    (Ye = D.current) == null || Ye.cancel(), oe.style.willChange = "transform";
    const se = oe.animate(
      [
        { transform: `translateX(${de}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), ke = () => {
      oe.style.willChange = "";
    };
    se.onfinish = ke, se.oncancel = ke, D.current = se;
  }, [f, w]);
  const {
    selectionState: G,
    selectionBox: ne,
    handleGridMouseDown: K,
    pendingSelections: ce,
    confirmSelections: me,
    clearSelections: fe,
    removeSelection: ve,
    updateSelection: De,
    isMultiSelectActive: be,
    hasUnconfirmedSelections: ae
  } = ki({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: E,
    onTimeRangeSelect: u,
    onMultiTimeRangeSelect: y,
    clickToAddConfig: M,
    gridRef: I,
    isDragging: H,
    separatorRowIndices: x
  }), pe = le((xe) => {
    xe.preventDefault();
  }, []), Oe = le((xe) => {
    xe.preventDefault();
  }, []), ze = x.length * Ne, Ae = le(
    (xe) => {
      const oe = jn(), de = t * ye + 1 + ze;
      xo(xe, oe, de), Vs(xe, r, t, b, E, ee, x, $);
    },
    [b, E, t, r, ee, x, $, ze]
  );
  return ge(() => {
    if (!j.current)
      return;
    const xe = j.current.getContext("2d");
    if (!xe)
      return;
    const oe = () => Ae(xe);
    return window.addEventListener("resize", oe), () => window.removeEventListener("resize", oe);
  }, [Ae]), ge(() => {
    var je;
    const xe = O.current, oe = C.current;
    if (O.current = t, C.current = f, xe === t || !f.isSame(oe, "day") || bo())
      return;
    const de = j.current, se = q.current;
    if (!de || !se || de.width === 0 || de.height === 0)
      return;
    const ke = se.getContext("2d");
    if (!ke)
      return;
    se.width = de.width, se.height = de.height, se.style.width = de.style.width, se.style.height = de.style.height, ke.setTransform(1, 0, 0, 1, 0, 0), ke.clearRect(0, 0, se.width, se.height), ke.drawImage(de, 0, 0), (je = T.current) == null || je.cancel(), se.style.opacity = "1";
    const Ye = se.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    Ye.onfinish = () => {
      se.style.opacity = "0";
    }, T.current = Ye;
  }, [t, f]), ge(() => {
    const xe = j.current;
    if (!xe)
      return;
    xe.style.letterSpacing = "1px";
    const oe = xe.getContext("2d");
    oe && Ae(oe);
  }, [f, t, r, Ae]), ge(() => {
    if (!Y.current)
      return;
    const xe = new IntersectionObserver(
      (oe) => {
        oe[0].isIntersecting && !X.current && (X.current = !0, W(), setTimeout(() => {
          X.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Ke) }
    );
    return xe.observe(Y.current), () => {
      xe.disconnect();
    };
  }, [W]), ge(() => {
    if (!R.current)
      return;
    const xe = new IntersectionObserver(
      (oe) => {
        oe[0].isIntersecting && !X.current && (X.current = !0, F(), setTimeout(() => {
          X.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Ke),
        rootMargin: `0px 0px 0px -${Re}px`
      }
    );
    return xe.observe(R.current), () => {
      xe.disconnect();
    };
  }, [F]), /* @__PURE__ */ B($i, { id: uo, children: [
    /* @__PURE__ */ B(
      Di,
      {
        ref: (xe) => {
          typeof P == "function" ? P(xe) : P && (P.current = xe), I.current = xe;
        },
        onMouseDown: K,
        style: { cursor: u ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(gr, { position: "left", ref: R }),
          /* @__PURE__ */ h(An, { isLoading: g, position: "left" }),
          /* @__PURE__ */ h(
            Ei,
            {
              ref: j,
              onDragStart: pe,
              onDragOver: Oe,
              style: { userSelect: L === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(_i, { ref: q, "aria-hidden": !0 }),
          /* @__PURE__ */ h(Jd, { zoom: r, startDate: E }),
          /* @__PURE__ */ h(t1, { zoom: r, startDate: E }),
          /* @__PURE__ */ h(
            ed,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onTileContextMenu: i,
              onDragStart: _,
              isDraggable: Q,
              draggingEventId: Z,
              separatorRowIndices: x,
              fadingUnitIds: m,
              highlightedSegmentId: (S == null ? void 0 : S.highlightedSegmentId) ?? null,
              focusedUnitIds: (S == null ? void 0 : S.focusedUnitIds) ?? null,
              leavingSegmentIds: (S == null ? void 0 : S.leavingSegmentIds) ?? null,
              ghostProject: (S == null ? void 0 : S.ghostProject) ?? null
            }
          ),
          /* @__PURE__ */ h(gr, { ref: Y, position: "right" }),
          /* @__PURE__ */ h(An, { isLoading: g, position: "right" }),
          (L === "dragging" || L === "animating") && /* @__PURE__ */ h(
            Ed,
            {
              draggedEvent: z,
              ghostPosition: J,
              ghostDimensions: te,
              dropTarget: k,
              isValidDrop: V,
              dragState: L,
              zoom: r,
              data: n,
              resourceOnly: N,
              separatorRowIndices: x
            }
          ),
          /* @__PURE__ */ h(
            Pd,
            {
              selectionBox: ne,
              isSelecting: G === "selecting"
            }
          ),
          be && ce.length > 0 && /* @__PURE__ */ h(
            Xd,
            {
              selections: ce,
              data: n,
              zoom: r,
              startDate: E,
              onRemove: ve,
              onUpdate: De,
              separatorRowIndices: x
            }
          )
        ]
      }
    ),
    be && ae && ce.length > 0 && /* @__PURE__ */ h(
      Bd,
      {
        selections: ce,
        onConfirm: me,
        onClear: fe,
        onRemove: ve
      }
    )
  ] });
}), So = (e) => {
  const r = A.duration(e, "seconds"), t = r.hours(), n = r.minutes();
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
}, Ai = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const d = A(a.startDate).isoWeek(), u = A(a.startDate).isoWeekday(), y = A(a.endDate).isoWeek(), M = A(a.endDate).isoWeekday(), { hours: x, minutes: $ } = So(a.occupancy);
    if (n === d) {
      const m = (et + 1 - u) * x, P = (et + 1 - u) * $;
      return { hours: Math.max(0, m), minutes: P };
    } else if (n === y) {
      const m = M > et ? et * x : M * x, P = M > et ? et * $ : M * $;
      return { hours: m, minutes: P };
    } else if (A(r).isBetween(a.startDate, a.endDate))
      return { hours: et * x, minutes: et * $ };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Co(o), { free: c, overtime: l } = Mo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, Pi = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: y } = So(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = Co(s), { free: l, overtime: a } = Mo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Ii = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = A(c.startDate).hour(), a = A(c.endDate).hour(), d = r.hour(), u = A(c.endDate).minute(), y = A(c.startDate).minute();
    l < d && a > d ? t += _e : l === d && a === d && y && u ? t += u ? u - y : _e - y : l === d && a >= d ? t += y ? _e - y : _e : a === d && u && (t += u);
  });
  const n = Math.floor(t / _e), o = t % _e, s = n || o ? 0 : 1, i = n ? 0 : o ? _e - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Oi = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? A(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? A(t).isBetween(i.startDate, i.endDate, "hour", "[]") : A(i.startDate).isBetween(
    A(t),
    A(t).add(6, "days"),
    "day",
    "[]"
  ) || A(t).isBetween(A(i.startDate), A(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return Pi(s, t, n, o);
    case 2:
      return Ii(s, t);
    default:
      return Ai(s, t, n);
  }
}, Yi = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", l;
  switch (s) {
    case 0:
      c = "weeks", l = Ct;
      break;
    case 1:
      c = "days", l = Ee;
      break;
    case 2:
      c = "hours", l = Ie;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * l) / l : t.x / l), d = A(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), u = Math.ceil(t.y / ye), y = n.findIndex((P, X, W) => W.slice(0, X + 1).reduce((f, g) => f + g, 0) >= u), M = s === 2 ? (a + 1) * l : a * l, x = (u - 1) * ye + ye, $ = Oi(
    o[y],
    y,
    d,
    s,
    i
  ), m = A(e.startDate).isSame(A(e.endDate), "day");
  return {
    coords: { x: M, y: x },
    mouseCoords: t,
    resourceIndex: y,
    disposition: $,
    reservationData: {
      startTime: A(e.startDate).format("hh:mm A"),
      startDate: A(e.startDate).format("MMM D, YYYY"),
      endTime: A(e.endDate).format("hh:mm A"),
      endDate: A(e.endDate).format("MMM D, YYYY"),
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
      passengers: e.totalPassengers,
      readiness: e.readiness,
      readinessNote: e.readinessNote,
      subcontractConfirmed: e.subcontractConfirmed
    }
  };
};
function Li(e, r) {
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
function Ri(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const d of e)
    !d.isSubcontract && d.capacity != null && t.add(d.capacity);
  const n = [...t].sort((d, u) => d - u);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Li(n, o), i = [];
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
    const y = "__auto_cat_" + u, M = d.min === d.max ? d.min + " pax" : d.min + "-" + d.max + " pax";
    l.push({ id: y, name: M, minPassengers: d.min, maxPassengers: d.max });
    for (const x of d.values)
      a.set(x, y);
  }), { categories: l, capacityToCategoryId: a };
}
const Ni = (e, r, t, n) => {
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
var Mn = {}, Fi = {
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
})(Fi);
const zi = Mn;
var kn = {}, Bi = {
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
})(Bi);
const Hi = kn, Wi = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = A(t.startDate).startOf("day"), l = A(t.endDate).startOf("day"), a = A(o[i].startDate).startOf("day"), d = A(o[i].endDate).startOf("day");
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
A.extend(zi);
A.extend(Hi);
const yr = /* @__PURE__ */ new WeakMap(), ji = (e) => {
  const r = yr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = A(o.startDate), c = A(s.startDate), l = i.startOf("day").diff(c.startOf("day"), "day");
    return l !== 0 ? l : i.diff(c);
  }), n = Wi(t);
  return yr.set(e, n), n;
}, Zi = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = ji(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Vi = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, Gi = (e) => {
  const { recordsThreshold: r } = Ge(), [t, n] = he(0), [o, s] = he(0), i = ue(null);
  ge(() => {
    i.current = document.getElementById(Ke);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = $e(() => Zi(e), [e]), a = $e(
    () => Ni(e, c, l, r),
    [e, c, r, l]
  ), d = le(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((m) => m + a[Math.max(o, 0)].length), s((m) => Math.min(m + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = le(() => {
    a[o].length && (n((m) => Math.max(m - a[o - 1].length, 0)), s((m) => Math.max(m - 1, 0)));
  }, [o, a]), y = le(() => {
    n(0), s(0);
  }, []), M = t + a[o].length, x = $e(
    () => l.slice(t, M),
    [M, l, t]
  ), $ = $e(
    () => c.slice(t, M),
    [M, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: $,
    rowsPerItem: x,
    totalRowsPerPage: Vi(a[o]),
    next: d,
    previous: u,
    reset: y
  };
};
var $n = {}, Xi = {
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
})(Xi);
const Ui = $n;
var Dn = {}, Ki = {
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
    function n(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = n(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, M, x) {
      var $ = y + " ";
      switch (x) {
        case "m":
          return M ? "minuta" : "minutę";
        case "mm":
          return $ + (s(y) ? "minuty" : "minut");
        case "h":
          return M ? "godzina" : "godzinę";
        case "hh":
          return $ + (s(y) ? "godziny" : "godzin");
        case "MM":
          return $ + (s(y) ? "miesiące" : "miesięcy");
        case "yy":
          return $ + (s(y) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(y, M) {
      return a.test(M) ? c[y.month()] : l[y.month()];
    };
    d.s = l, d.f = c;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(y) {
      return y + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(u, null, !0), u;
  });
})(Ki);
const Ji = Dn;
var En = {}, qi = {
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
})(qi);
const Qi = En;
var _n = {}, ea = {
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
})(ea);
const ta = _n;
var Tn = {}, na = {
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
})(na);
const ra = Tn, oa = {
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
}, sa = {
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
}, ia = {
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
}, aa = {
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
}, ca = {
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
}, la = [
  {
    id: "en",
    lang: ia,
    translateCode: "en-GB",
    dayjsTranslations: Ui
  },
  {
    id: "pl",
    lang: sa,
    translateCode: "pl-PL",
    dayjsTranslations: Ji
  },
  {
    id: "es",
    lang: oa,
    translateCode: "es-ES",
    dayjsTranslations: ra
  },
  {
    id: "lt",
    lang: ca,
    translateCode: "lt-LT",
    dayjsTranslations: ta
  },
  {
    id: "de",
    lang: aa,
    translateCode: "de-DE",
    dayjsTranslations: Qi
  }
];
class da {
  constructor() {
    Zn(this, "locales", la);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const Kt = new da(), ko = In({
  localesData: Kt.getLocales(),
  currentLocale: Kt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ua = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = he("en"), s = Kt.getLocales(), i = le(() => {
    const u = s.find((y) => y.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && A.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [c, l] = he(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  ge(() => {
    t == null || t.forEach((u) => {
      s.find((M) => M.id === u.id) || Kt.addLocales(u);
    });
  }, [s, t]), ge(() => {
    const u = localStorage.getItem("locale"), y = r ?? u ?? "en";
    localStorage.setItem("locale", y), o(y), l(i());
  }, [i, r]);
  const { Provider: d } = ko;
  return /* @__PURE__ */ h(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, rt = () => Je(ko).currentLocale.lang, fa = (e) => /* @__PURE__ */ ie.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ ie.createElement("defs", null, /* @__PURE__ */ ie.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ ie.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ ie.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ ie.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ ie.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ ie.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ ie.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ ie.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ ie.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ ie.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ ie.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ ie.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ ie.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ ie.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ha = v.div`
  height: 440px;
  width: 514px;
  position: relative;
`, pa = v.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ma = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = rt();
  return /* @__PURE__ */ B(ha, { onClick: e, children: [
    /* @__PURE__ */ h(fa, {}),
    /* @__PURE__ */ h(pa, { children: r })
  ] });
}, ga = v.div`
  position: relative;
  display: flex;
`, ya = v.div`
  position: relative;
  margin-left: ${Re};
  display: flex;
  flex-direction: column;
  contain: paint;
`, va = v.div`
  width: calc(${({ width: e }) => e}px - ${Re}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Re}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, xa = /* @__PURE__ */ new Set(), ba = {
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
    reservationType: Yt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function wa(e, r) {
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
const Sa = ({
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
  clickToAddConfig: M
}) => {
  const [x, $] = he(ba), [m, P] = he(e), [X, W] = he(!1), [F, f] = he(!1), [g, b] = he(""), [E, w] = he(/* @__PURE__ */ new Set()), [S, j] = he(/* @__PURE__ */ new Set()), q = ue([]);
  ge(() => () => q.current.forEach(clearTimeout), []);
  const {
    zoom: O,
    startDate: C,
    isLoading: T,
    config: { includeTakenHoursOnWeekendsInDayView: Y, showTooltip: R, showThemeToggle: I }
  } = Ge(), H = ue(null), re = ue(null), [ee, L] = he(124), {
    page: z,
    projectsPerPerson: J,
    rowsPerItem: te,
    currentPageNum: k,
    pagesAmount: V,
    next: _,
    previous: Q,
    reset: Z
  } = Gi(m), { effectiveCategories: N, effectivePage: p } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: z };
    const oe = Ri(z);
    if (oe.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: z };
    const de = z.map((se) => {
      if (se.isSubcontract || se.capacity == null)
        return se;
      const ke = oe.capacityToCategoryId.get(se.capacity);
      return ke ? { ...se, categoryId: ke } : se;
    });
    return { effectiveCategories: oe.categories, effectivePage: de };
  }, [t, z]), U = le(
    (oe) => {
      if (E.has(oe)) {
        w((se) => {
          const ke = new Set(se);
          return ke.delete(oe), ke;
        });
        return;
      }
      if (bo()) {
        w((se) => new Set(se).add(oe));
        return;
      }
      j((se) => new Set(se).add(oe));
      const de = setTimeout(() => {
        w((se) => new Set(se).add(oe)), j((se) => {
          const ke = new Set(se);
          return ke.delete(oe), ke;
        });
      }, 190);
      q.current.push(de);
    },
    [E]
  ), D = $e(() => {
    const oe = [], de = N ? [...N].sort((se, ke) => se.maxPassengers - ke.maxPassengers) : [];
    for (const se of de)
      p.some((ke) => !ke.isSubcontract && ke.categoryId === se.id) && oe.push(se.id);
    return p.some((se) => se.isSubcontract) && oe.push("__subcontract__"), oe;
  }, [N, p]), G = le(() => {
    w(/* @__PURE__ */ new Set());
  }, []), ne = le(() => {
    w(new Set(D));
  }, [D]), K = $e(() => {
    if (S.size === 0)
      return xa;
    const oe = /* @__PURE__ */ new Set();
    for (const de of p) {
      const se = de.isSubcontract ? "__subcontract__" : de.categoryId;
      se && S.has(se) && oe.add(de.id);
    }
    return oe;
  }, [S, p]), {
    visiblePage: ce,
    visibleRowsPerItem: me,
    visibleTotalRows: fe,
    visibleProjectsPerPerson: ve,
    separatorRowIndices: De,
    subcontractSeparatorRow: be
  } = $e(() => {
    const oe = wa(p, N), de = ((N == null ? void 0 : N.length) ?? 0) > 0, se = /* @__PURE__ */ new Map();
    z.forEach((Le, ft) => se.set(Le.id, ft));
    const ke = [], Ye = [], je = [], Xe = [];
    let ot = 0, Lt = -1;
    for (const Le of oe)
      if (Le.type === "subcontract" || Le.type === "category" && de) {
        const ht = Le.type === "subcontract" ? "__subcontract__" : Le.category.id, pt = E.has(ht);
        if (Xe.push(ot), Le.type === "subcontract" && (Lt = ot), !pt)
          for (const st of Le.items) {
            const Rt = se.get(st.id) ?? 0, Nt = te[Rt];
            ke.push(st), Ye.push(Nt), je.push(J[Rt]), ot += Nt;
          }
      } else
        for (const ht of Le.items) {
          const pt = se.get(ht.id) ?? 0, st = te[pt];
          ke.push(ht), Ye.push(st), je.push(J[pt]), ot += st;
        }
    const Qe = Ye.reduce((Le, ft) => Le + ft, 0);
    return {
      visiblePage: ke,
      visibleRowsPerItem: Ye,
      visibleTotalRows: Qe,
      visibleProjectsPerPerson: je,
      separatorRowIndices: Xe,
      subcontractSeparatorRow: Lt
    };
  }, [p, N, z, E, te, J]), ae = ue(
    Cn(
      (oe, de, se, ke, Ye, je) => {
        if (!H.current)
          return;
        const { tile: Xe, segmentId: ot } = ze(oe);
        if (!ot || !Xe) {
          W(!1);
          return;
        }
        const Lt = Oe(ot, de), Qe = H.current.getBoundingClientRect(), Le = Xe.getBoundingClientRect(), ft = { x: oe.clientX - Qe.left, y: oe.clientY - Qe.top }, ht = {
          x: oe.clientX - Qe.left,
          y: oe.clientY - Qe.top
        }, pt = {
          x: Le.left - Qe.left,
          y: Le.top - Qe.top,
          width: Le.width,
          height: Le.height
        }, {
          coords: { x: st, y: Rt },
          resourceIndex: Nt,
          disposition: To,
          reservationData: Ao
        } = Yi(
          Lt,
          se,
          ft,
          ke,
          Ye,
          je,
          Y
        );
        $({
          coords: { x: st, y: Rt },
          mouseCoords: ht,
          resourceIndex: Nt,
          disposition: To,
          reservationData: Ao,
          tileBounds: pt
        }), W(!0);
      },
      4
    )
  ), pe = ue(
    Cn((oe, de) => {
      Z(), P(
        oe.map((se) => ({
          ...se,
          data: se.data.filter((ke) => {
            const { title: Ye, description: je, subtitle: Xe } = ke;
            return (Ye == null ? void 0 : Ye.toLowerCase().includes(de.toLowerCase())) || (Xe == null ? void 0 : Xe.toLowerCase().includes(de.toLowerCase())) || (je == null ? void 0 : je.toLowerCase().includes(de.toLowerCase()));
          })
        })).filter((se) => se.data.length > 0)
      );
    }, 500)
  ), Oe = (oe, de) => {
    if (oe)
      return de.flatMap((se) => se.data).find((se) => se.segmentId === oe);
  }, ze = (oe) => {
    if (!oe.target)
      return { tile: null, segmentId: null };
    const de = oe.target.closest("[data-segment-id]");
    return de ? { tile: de, segmentId: de.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, Ae = (oe) => {
    const de = oe.target.value;
    b(de), pe.current.cancel(), de ? pe.current(e, de) : (Z(), P(e));
  }, xe = le(() => {
    ae.current.cancel(), W(!1);
  }, []);
  return ge(() => {
    const oe = (se) => ae.current(
      se,
      e,
      C,
      me,
      ve,
      O
    ), de = H.current;
    if (de)
      return de.addEventListener("mousemove", oe), de.addEventListener("mouseleave", xe), () => {
        de.removeEventListener("mousemove", oe), de.removeEventListener("mouseleave", xe);
      };
  }, [
    ae,
    xe,
    ve,
    me,
    C,
    O,
    e
  ]), ge(() => {
    g ? (pe.current.cancel(), pe.current(e, g)) : P(e);
  }, [e, g]), Jt(() => {
    const oe = re.current;
    if (!oe)
      return;
    const de = () => L(oe.offsetHeight);
    de();
    const se = new ResizeObserver(de);
    return se.observe(oe), () => se.disconnect();
  }, []), /* @__PURE__ */ B(ga, { children: [
    /* @__PURE__ */ h(
      Xc,
      {
        headerHeight: ee,
        data: p,
        categories: N,
        pageNum: k,
        pagesAmount: V,
        rows: te,
        onLoadNext: _,
        onLoadPrevious: Q,
        searchInputValue: g,
        onSearchInputChange: Ae,
        onItemClick: s,
        collapsedGroups: E,
        fadingGroups: S,
        onToggleGroup: U,
        allGroupIds: D,
        onExpandAll: G,
        onCollapseAll: ne
      }
    ),
    /* @__PURE__ */ B(ya, { children: [
      /* @__PURE__ */ h(
        kl,
        {
          ref: re,
          zoom: O,
          topBarWidth: c,
          showThemeToggle: I,
          toggleTheme: i
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Ti,
        {
          data: ce,
          baseData: r || e,
          zoom: O,
          rows: fe,
          ref: H,
          onTileClick: n,
          onTileContextMenu: o,
          onEventDrop: l,
          onEventDrag: a,
          draggableConfig: d,
          onDragStateChange: f,
          onTimeRangeSelect: u,
          onMultiTimeRangeSelect: y,
          clickToAddConfig: M,
          separatorRowIndices: De,
          subcontractSeparatorRow: be,
          fadingUnitIds: K
        }
      ) : /* @__PURE__ */ h(va, { width: c, children: T ? /* @__PURE__ */ h(An, { isLoading: T, position: "left" }) : /* @__PURE__ */ h(ma, {}) }),
      R && /* @__PURE__ */ h(gd, { tooltipData: x, visible: X && !F })
    ] })
  ] });
}, Ca = v.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Re + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.mode === "dark" ? e.colors.primary : "#fff"};
`, vr = v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, Ma = v.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, ka = v.div`
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
`, $a = v.button`
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
`, Da = v.div`
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
`, br = v.button`
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
`, Ea = v.label`
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
`, _a = v.span`
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
`, Dt = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), Ta = () => {
  var r, t;
  const e = document.getElementById(po);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Aa = () => {
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
  } = Ge(), { filterButtonState: a = -1 } = e;
  return /* @__PURE__ */ B(Ca, { width: 0, children: [
    /* @__PURE__ */ B(vr, { $at: "start", children: [
      /* @__PURE__ */ B(ka, { children: [
        /* @__PURE__ */ h(xr, { onClick: n, "aria-label": "Anterior", children: /* @__PURE__ */ h(Dt, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h($a, { onClick: o, children: "Hoy" }),
        /* @__PURE__ */ h(xr, { onClick: t, "aria-label": "Siguiente", children: /* @__PURE__ */ h(Dt, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      e.showViewSwitcher !== !1 && /* @__PURE__ */ B(Te, { children: [
        /* @__PURE__ */ h(Ma, {}),
        /* @__PURE__ */ B(Da, { children: [
          /* @__PURE__ */ h("button", { className: r === 2 ? "on" : "", onClick: () => s(2), children: "Día" }),
          /* @__PURE__ */ h("button", { className: r === 0 ? "on" : "", onClick: () => s(0), children: "Semana" }),
          /* @__PURE__ */ h("button", { className: r === 1 ? "on" : "", onClick: () => s(1), children: "Mes" })
        ] })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ B(Ea, { children: [
        /* @__PURE__ */ B(Dt, { children: [
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
    /* @__PURE__ */ B(vr, { $at: "end", children: [
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ B(br, { $primary: !!a, onClick: c, children: [
        /* @__PURE__ */ h(Dt, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(_a, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ B(br, { onClick: Ta, children: [
        /* @__PURE__ */ h(Dt, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      l
    ] })
  ] });
}, Pa = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ia = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Oa = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Ya = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), La = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ra = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Na = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Fa = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), za = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Ba = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Ha = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Wa = (e) => /* @__PURE__ */ ie.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), ja = (e) => /* @__PURE__ */ ie.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Za = (e) => /* @__PURE__ */ ie.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ie.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ ie.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ie.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ie.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ie.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ie.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ie.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ie.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ie.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Va = {
  add: Pa,
  subtract: Ia,
  filter: Oa,
  arrowLeft: Ya,
  arrowRight: La,
  defaultAvatar: Ra,
  calendarWarning: Na,
  calendarFree: Fa,
  arrowDown: Ba,
  arrowUp: za,
  search: Ha,
  close: Wa,
  moon: ja,
  sun: Za
}, on = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = qt(), i = Va[e];
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
}, Ga = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => Ga(e, r, t)}
`;
const Xa = v.div`
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
  font-family: ${Fe};
`, Ua = v.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Ka = v.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, Ja = v.div`
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
`, qa = v.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, Qa = v.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, ec = v.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`, tc = v.div`
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
`, nc = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, rc = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, oc = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, sc = v.div`
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
`, wr = "#cdd8d2", Sr = [178, 216, 195], ic = [15, 125, 102], ac = (e) => {
  const r = Math.min(1, Math.max(0, e)), t = (n) => Math.round(Sr[n] + (ic[n] - Sr[n]) * r);
  return `rgb(${t(0)}, ${t(1)}, ${t(2)})`;
}, cc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ge(), s = rt(), i = ue(null), [c, l] = he(null), a = $e(
    () => Array.from({ length: 12 }, (w, S) => A().month(S).format("MMM").toUpperCase()),
    [s]
  ), d = $e(() => A().startOf("day"), []), { domainStart: u, domainEnd: y, domainDays: M } = $e(() => {
    const w = d.subtract(3, "month").startOf("month"), S = d.add(9, "month").endOf("month");
    return { domainStart: w, domainEnd: S, domainDays: S.diff(w, "day") + 1 };
  }, [d]), x = (w) => w.diff(u, "day") / M * 100, $ = (w) => Math.min(100, Math.max(0, w)), m = $e(() => {
    const w = [];
    let S = u.startOf("month");
    for (; S.isBefore(y); )
      w.push(S), S = S.add(1, "month");
    return w;
  }, [u, y]), P = o == null ? void 0 : o.yearCounts, X = $e(() => {
    const w = Math.ceil(M / 7), S = new Array(w).fill(0), j = (I) => {
      const H = I.diff(u, "day");
      return H < 0 || H >= M ? -1 : Math.floor(H / 7);
    };
    if (P && P.length)
      for (const I of P) {
        const H = j(A(I.date));
        H >= 0 && (S[H] += I.count);
      }
    else
      for (const I of t ?? [])
        for (const H of I.data ?? []) {
          const re = j(A(H.startDate));
          re >= 0 && (S[re] += 1);
        }
    const q = Math.max(0, ...S);
    if (q <= 0)
      return S.map(() => ({ h: 0, color: wr }));
    const O = S.filter((I) => I > 0).sort((I, H) => I - H), C = O.length >> 1, T = O.length % 2 ? O[C] : (O[C - 1] + O[C]) / 2, Y = T > 0 ? q / T : 1, R = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, Y)))));
    return S.map(
      (I) => I > 0 ? { h: Math.min(100, 100 * Math.pow(I / q, R)), color: ac(I / q) } : { h: 0, color: wr }
    );
  }, [t, P, u, M]), W = x(d), F = (w) => {
    const { startDate: S, endDate: j } = en(w, r), q = $(x(S));
    return { left: q, width: $(x(j)) - q, startDate: S, endDate: j };
  }, f = F(e), g = c ? F(c.d) : null, b = (w) => `${w.date()} ${a[w.month()]}`, E = (w) => {
    var q;
    const S = (q = i.current) == null ? void 0 : q.getBoundingClientRect();
    if (!S)
      return null;
    const j = Math.min(1, Math.max(0, (w - S.left) / S.width));
    return { f: j, d: u.add(Math.round(j * (M - 1)), "day") };
  };
  return /* @__PURE__ */ B(Xa, { children: [
    /* @__PURE__ */ B(Ua, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ B(
      Ka,
      {
        ref: i,
        onClick: (w) => {
          const S = E(w.clientX);
          S && n(S.d.toDate());
        },
        onMouseMove: (w) => {
          const S = E(w.clientX);
          S && l({ left: S.f * 100, d: S.d });
        },
        onMouseLeave: () => l(null),
        children: [
          /* @__PURE__ */ h(Ja, { children: m.map((w, S) => /* @__PURE__ */ h("span", { style: { left: `${x(w)}%` }, children: S === 0 || w.month() === 0 ? `${a[w.month()]} ${w.format("YY")}` : a[w.month()] }, S)) }),
          m.map(
            (w, S) => S === 0 ? null : /* @__PURE__ */ h(qa, { style: { left: `${x(w)}%` } }, S)
          ),
          /* @__PURE__ */ h(Qa, { children: X.map((w, S) => /* @__PURE__ */ h(ec, { style: { height: `${w.h}%`, background: w.color } }, S)) }),
          /* @__PURE__ */ h(nc, { style: { left: `${f.left}%`, width: `${f.width}%` } }),
          /* @__PURE__ */ h(tc, { style: { left: `${$(W)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && g && /* @__PURE__ */ B(Te, { children: [
            /* @__PURE__ */ h(rc, { style: { left: `${g.left}%`, width: `${g.width}%` } }),
            /* @__PURE__ */ h(oc, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(sc, { style: { left: `${c.left}%` }, children: `Ir a ${b(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, $o = In(/* @__PURE__ */ new Map()), lc = () => Je($o), dc = 10500, uc = 60, fc = 600, hc = (e) => {
  var l;
  const r = document.getElementById(Ke), t = r == null ? void 0 : r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);
  if (!r || !t)
    return !1;
  const n = r.getBoundingClientRect(), o = (l = document.getElementById(lo)) == null ? void 0 : l.getBoundingClientRect(), s = t.getBoundingClientRect(), i = Math.max((o == null ? void 0 : o.bottom) ?? n.top, n.top, 0), c = Math.min(n.bottom, window.innerHeight);
  return s.width > 0 && s.right > n.left + Re && s.left < n.right && s.bottom > i && s.top < c;
}, pc = () => {
  const [e, r] = he(() => /* @__PURE__ */ new Map()), t = ue(0), n = ue(/* @__PURE__ */ new Set());
  ge(() => {
    const s = n.current;
    return () => s.forEach(clearTimeout);
  }, []);
  const o = le((s) => {
    const i = s.filter((d) => hc(d.segmentId));
    if (!i.length)
      return [];
    const c = ++t.current, l = new Map(
      i.map((d, u) => [
        d.segmentId,
        { kind: d.kind, key: c, delayMs: Math.min(u * uc, fc) }
      ])
    );
    r((d) => new Map([...Array.from(d), ...Array.from(l)]));
    const a = setTimeout(() => {
      n.current.delete(a), r((d) => {
        const u = new Map(d);
        return l.forEach((y, M) => {
          var x;
          ((x = u.get(M)) == null ? void 0 : x.key) === c && u.delete(M);
        }), u;
      });
    }, dc);
    return n.current.add(a), i.map((d) => d.segmentId);
  }, []);
  return { pulses: e, pulseTiles: o };
}, mc = v.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, gc = v.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? ho : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, yc = v.div`
  position: relative;
`, vc = ({
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
  onMultiTimeRangeSelect: M,
  clickToAddConfig: x
}) => {
  const { goToDate: $, handleGoToday: m, zoomIn: P, zoomOut: X, zoom: W } = Ge(), { pulses: F, pulseTiles: f } = pc();
  return Gr(
    u,
    () => ({
      goToDate: $,
      goToToday: m,
      setZoom: (g) => {
        if (!yo(g))
          return;
        const b = g - W;
        if (b > 0)
          for (let E = 0; E < b; E++)
            P();
        else
          for (let E = 0; E < Math.abs(b); E++)
            X();
      },
      pulseTiles: f
    }),
    [$, m, W, P, X, f]
  ), /* @__PURE__ */ h($o.Provider, { value: F, children: /* @__PURE__ */ h(
    Sa,
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
      onMultiTimeRangeSelect: M,
      clickToAddConfig: x
    }
  ) });
}, i1 = On(function({
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
  isLoading: M,
  onEventDrop: x,
  onEventDrag: $,
  draggableConfig: m,
  onTimeRangeSelect: P,
  onMultiTimeRangeSelect: X,
  clickToAddConfig: W
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
  ), g = ue(null), b = ue(null), [E, w] = he((R = g.current) == null ? void 0 : R.clientWidth), S = $e(() => A(s), [s]), [j, q] = he(f.defaultTheme ?? "light"), O = () => {
    q(j === "light" ? "dark" : "light");
  }, C = j === "light" ? Ls : Rs, T = f.theme ? f.theme[C.mode] : {}, Y = {
    ...C,
    colors: {
      ...C.colors,
      ...T
    }
  };
  return Gr(
    F,
    () => ({
      goToDate: (I) => {
        var H;
        return (H = b.current) == null ? void 0 : H.goToDate(I);
      },
      goToToday: () => {
        var I;
        return (I = b.current) == null ? void 0 : I.goToToday();
      },
      setZoom: (I) => {
        var H;
        return (H = b.current) == null ? void 0 : H.setZoom(I);
      },
      pulseTiles: (I) => {
        var H;
        return ((H = b.current) == null ? void 0 : H.pulseTiles(I)) ?? [];
      }
    }),
    []
  ), Jt(() => {
    const I = () => {
      g.current && w(g.current.clientWidth);
    };
    I(), window.addEventListener("resize", I);
    let H;
    const re = g.current;
    return re && typeof ResizeObserver < "u" && (H = new ResizeObserver(I), H.observe(re)), () => {
      window.removeEventListener("resize", I), H == null || H.disconnect();
    };
  }, []), /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h(Ys, {}),
    /* @__PURE__ */ h(As, { theme: Y, children: /* @__PURE__ */ h(ua, { lang: f.lang, translations: f.translations, children: /* @__PURE__ */ h(
      Si,
      {
        data: r,
        isLoading: !!M,
        config: f,
        onRangeChange: i,
        defaultStartDate: S,
        handleToggleDisplayActiveUnits: a,
        onClearFilterData: d,
        toolbarActions: u,
        children: /* @__PURE__ */ B(mc, { id: po, children: [
          /* @__PURE__ */ h(
            gc,
            {
              showScroll: !!r.length,
              $footer: f.showOverview !== !1 && !!r.length,
              id: Ke,
              ref: g,
              children: /* @__PURE__ */ h(yc, { children: /* @__PURE__ */ h(
                vc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  onTileContextMenu: l,
                  topBarWidth: E ?? 0,
                  onItemClick: y,
                  toggleTheme: O,
                  onEventDrop: x,
                  onEventDrag: $,
                  draggableConfig: m,
                  schedulerRef: b,
                  onTimeRangeSelect: P,
                  onMultiTimeRangeSelect: X,
                  clickToAddConfig: W
                }
              ) })
            }
          ),
          f.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(cc, {})
        ] })
      }
    ) }) })
  ] });
}), xc = v.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, bc = v.button`
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
`, wc = v.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Sc = v.p`
  ${$t}
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
  const { loadNext: i, loadPrevious: c } = rt(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(xc, { intent: e, children: /* @__PURE__ */ B(bc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(wc, { children: t }),
    /* @__PURE__ */ h(Sc, { children: l })
  ] }) });
}, Cc = v.div`
  min-width: ${Re + "px"};
  max-width: ${Re + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Mc = v.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({ $height: e }) => e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Re}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, kc = v.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, $c = v.input`
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
`, Dc = v.div`
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
`, Ec = We`
  from { opacity: 1; }
  to { opacity: 0; }
`, Mr = v.div`
  ${({ $fading: e }) => e && kt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Ec} 180ms ease forwards;
      }
    `}
`, _c = v.button`
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
`, Tc = We`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, Ac = v.div`
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
    animation: ${Tc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Pc = v.div`
  display: flex;
  align-items: center;
`, Ic = v.div`
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
`, Yc = v.div`
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
`, Lc = v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`, Rc = v.span`
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
`, Nc = v.span`
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
`, Fc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), zc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: [
  /* @__PURE__ */ h("circle", { cx: "9", cy: "8", r: "3.2" }),
  /* @__PURE__ */ h("path", { d: "M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z" }),
  /* @__PURE__ */ h("circle", { cx: "16.8", cy: "8.6", r: "2.5" }),
  /* @__PURE__ */ h("path", { d: "M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8" })
] }), Bc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Hc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Wc = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  Ac,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ B(Pc, { children: [
      /* @__PURE__ */ h(Ic, { $provider: o, children: Fc(r.icon) ? /* @__PURE__ */ h(Oc, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Hc, {}) : /* @__PURE__ */ h(Bc, {}) }),
      /* @__PURE__ */ B(Yc, { children: [
        /* @__PURE__ */ h(kr, { isMain: !0, children: r.title }),
        r.capacity != null || r.plate ? /* @__PURE__ */ B(Lc, { children: [
          r.capacity != null && /* @__PURE__ */ B(Rc, { title: `${r.capacity} pasajeros`, children: [
            /* @__PURE__ */ h(zc, {}),
            r.capacity
          ] }),
          r.plate && /* @__PURE__ */ h(Nc, { title: r.plate, children: r.plate })
        ] }) : r.subtitle && /* @__PURE__ */ h(kr, { children: r.subtitle })
      ] })
    ] })
  }
), jc = v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  background: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder + "24" : "#E9EFEC"};
  border-left: 3px solid
    ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder : "transparent"};
  border-bottom: 1px solid
    ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder : "#D4DFD9"};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder + "33" : "#DAE6E0"};
  }
`, Zc = v.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, Vc = v.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  flex-shrink: 0;
`, Gc = v.div`
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
}) => /* @__PURE__ */ B(jc, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ h(Gc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(Zc, { $variant: o, children: e }),
  /* @__PURE__ */ h(Vc, { $variant: o, children: r })
] }), Xc = ({
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
  onToggleGroup: M,
  allGroupIds: x,
  onExpandAll: $,
  onCollapseAll: m
}) => {
  const [P, X] = he(!1), W = rt(), F = () => X((C) => !C), f = r ? [...r].sort((C, T) => C.maxPassengers - T.maxPassengers) : [], g = f.length > 0, b = x.length > 0, E = b && u.size === x.length;
  b && u.size;
  const w = e.filter((C) => C.isSubcontract), S = W.subcontract ?? "Subcontract", j = (C) => {
    const T = e.indexOf(C);
    return /* @__PURE__ */ h(
      Wc,
      {
        id: C.id,
        item: C.label,
        rows: n[T],
        onItemClick: d,
        isSubcontract: C.isSubcontract
      },
      C.id
    );
  }, q = (C) => {
    const T = e.filter(
      (H) => !H.isSubcontract && H.categoryId === C.id
    );
    if (T.length === 0)
      return null;
    const Y = u.has(C.id), R = y.has(C.id), I = C.name;
    return /* @__PURE__ */ B("div", { children: [
      /* @__PURE__ */ h(
        $r,
        {
          label: I,
          count: T.length,
          isCollapsed: Y || R,
          onToggle: () => M(C.id),
          variant: "category"
        }
      ),
      !Y && /* @__PURE__ */ h(Mr, { $fading: R, children: T.map(j) })
    ] }, C.id);
  }, O = e.filter(
    (C) => !C.isSubcontract && (!C.categoryId || !g)
  );
  return /* @__PURE__ */ B(Cc, { children: [
    /* @__PURE__ */ B(Mc, { $height: t, children: [
      /* @__PURE__ */ B(kc, { children: [
        /* @__PURE__ */ B(Dc, { isFocused: P, children: [
          /* @__PURE__ */ h(
            $c,
            {
              placeholder: W.search,
              value: l,
              onChange: a,
              onFocus: F,
              onBlur: F
            }
          ),
          /* @__PURE__ */ h(on, { iconName: "search" })
        ] }),
        b && /* @__PURE__ */ h(
          _c,
          {
            title: E ? "Expand all" : "Collapse all",
            onClick: E ? $ : m,
            $allCollapsed: E,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: E ? /* @__PURE__ */ B(Te, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ B(Te, { children: [
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
          icon: /* @__PURE__ */ h(on, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    g ? f.map(q) : O.map(j),
    g && O.length > 0 && O.map(j),
    w.length > 0 && /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(
        $r,
        {
          label: S,
          count: w.length,
          isCollapsed: u.has("__subcontract__") || y.has("__subcontract__"),
          onToggle: () => M("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !u.has("__subcontract__") && /* @__PURE__ */ h(Mr, { $fading: y.has("__subcontract__"), children: w.map(j) })
    ] }),
    /* @__PURE__ */ h(
      Cr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(on, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, Uc = v.div`
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
`, Kc = We`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Jc = v.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Kc} 1s infinite;
`, qc = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(Uc, { position: r, children: /* @__PURE__ */ h(Jc, {}) }) : null, An = qc, qe = (e, r) => {
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
    bottomText: M,
    strokeStyle: x,
    labelBetweenCells: $
  } = e;
  t.beginPath();
  const m = x ?? (r.mode === "dark" ? r.colors.border : "#E4EAE7");
  if (t.strokeStyle = m, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), $ ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : (t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke()), t.font = a;
    const P = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.mode === "dark" ? r.colors.textPrimary : "#183D3D", t.fillText(l, P, c);
  }
  if (d && u && y && M) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.beginPath(), t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke(), t.font = y.font;
    const P = n + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, P, y.y), t.font = M.font;
    const X = n + s / 2 - t.measureText(M.label).width / 2;
    t.fillStyle = M.color, t.fillText(M.label, X, M.y);
  }
}, Qc = (e, r, t, n, o = ut) => {
  const s = Ve + o, i = s + 13, c = s + 27;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = go(
      A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    ), u = d.isCurrentDay;
    if (qe(
      {
        ctx: e,
        x: l,
        y: s,
        width: Ee,
        height: vt,
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
          font: `600 10px ${Fe}`,
          color: n.mode === "dark" ? n.colors.placeholder : "#74897F"
        },
        bottomText: {
          y: c,
          label: `${d.dayOfMonth}`,
          font: u ? `700 12px ${Fe}` : `700 13px ${Fe}`,
          color: u ? n.colors.today : n.mode === "dark" ? n.colors.textPrimary : "#183D3D"
        }
      },
      n
    ), u) {
      const x = l + Ee / 2, $ = i - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(x - 30 / 2, $, 30, 13, 5) : e.rect(x - 30 / 2, $, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${Fe}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", x, $ + 13 / 2 + 0.5), e.restore();
    }
    l += Ee;
  }
}, el = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * He;
  const s = Ve;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= co && (c = 0);
    const a = mo(t, l) * He;
    qe(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: ut,
        textYPos: fo,
        label: A().month(c).format("MMMM").toUpperCase(),
        font: nt.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, tl = " ".repeat(98), nl = (e, r, t) => {
  const o = A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`);
  let s = -r.dayOfMonth * Ee + Ee;
  for (let i = 0; i < co; i++) {
    const c = o.add(i, "months"), l = c.daysInMonth() * Ee, a = c.format("MMMM YYYY").toUpperCase();
    qe(
      {
        ctx: e,
        x: s,
        y: 0,
        width: l,
        height: Ve,
        textYPos: zn,
        label: `${a}${tl}${a}`,
        font: `800 12px ${Fe}`
      },
      t
    ), s += l;
  }
}, rl = (e, r, t, n) => {
  const o = 7 * Ee, s = Ve, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (c + a) % lr;
    u <= 0 && (u += lr), d !== 1 && a === 0 && (l = -d * Ee + Ee), qe(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: ut,
        textYPos: fo,
        label: `${t.toUpperCase()} ${u}`,
        font: nt.middleRow
      },
      n
    ), l += o;
  }
}, ol = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, sl = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, il = (e, r, t, n, o) => {
  const s = Xt - vt / 1.6, i = Xt - vt / 4.5, c = Ve + ut;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = d.isSame(A(), "week");
    qe(
      {
        ctx: e,
        x: l,
        y: c,
        width: Ct,
        height: vt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: u ? o.colors.today + "26" : ol({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: u ? `700 14px ${Fe}` : nt.bottomRow.name,
          color: u ? o.colors.today : sl({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: nt.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Ct;
  }
}, al = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (fr(s) - t + 1) * He, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = fr(s + l) * He), d + a > i && l > 0 && (a = Math.ceil((i - d) / He) * He), qe(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Ve,
        textYPos: zn,
        label: (s + l).toString(),
        font: nt.topRow
      },
      n
    ), c += a, d += a, l++;
}, cl = (e, r, t, n) => {
  const o = Math.floor(r / Ut) + 2, s = Ut * Ie;
  let l = -A(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ie + 0.5 * Ie;
  for (let a = 0; a < o; a++) {
    const d = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    qe(
      {
        ctx: e,
        x: l,
        y: Mt,
        width: s,
        height: Ot,
        textYPos: Mt + Ot / 2 + 2,
        label: d,
        font: nt.bottomRow.number
      },
      n
    ), l += s;
  }
}, ll = (e, r, t, n) => {
  const o = Math.ceil(r / Ut), s = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * Ie;
  for (let u = 0; u < a; u++) {
    const y = A(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), x = A(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), $ = x.format("MMMM").toUpperCase(), m = x.diff(y, "hour") + 1, P = u === 0 ? m * Ie : r * Ie;
    qe(
      {
        ctx: e,
        x: d,
        y: 0,
        width: P,
        height: Mt,
        textYPos: zn,
        label: $,
        font: nt.topRow
      },
      n
    ), d += P;
  }
}, dl = (e, r, t, n) => {
  let o = 0;
  const s = Mt + Ot, i = A(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Ie;
  for (let l = 0; l < r; l++) {
    const a = i.add(l, "hours").format("h:00a").toUpperCase();
    qe(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: gn,
        label: a,
        font: nt.bottomRow.hoursInDay,
        textYPos: Mt + Ot + gn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Ie;
  }
}, ul = (e, r, t, n, o, s, i, c = !0) => {
  switch (r) {
    case 0:
      al(e, n, s, i), el(e, t, n, i), il(e, t, n, o, i);
      break;
    case 1:
      nl(e, n, i), c && rl(e, n, o, i), Qc(e, t, n, i, c ? ut : 0);
      break;
    case 2:
      ll(e, t, n, i), cl(e, t, n, i), dl(e, t, n, i);
      break;
  }
}, fl = v.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, hl = v.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, pl = v.div`
  height: ${({ $height: e }) => e ?? Xt}px;
  display: block;
`, ml = v.canvas``, gl = {
  transfer: /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ h("path", { d: "M12 7.5V12l3 2" })
  ] })
}, Be = ({
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
    children: gl[e]
  }
), yl = v.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Re + 16}px;
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
`, vl = v.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, xl = v.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, bl = v.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, wl = v.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, Sl = v.span`
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
`, Cl = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], Ml = () => /* @__PURE__ */ B(yl, { children: [
  /* @__PURE__ */ h(Dr, { children: "Leyenda" }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(Be, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(Be, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(Be, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(vl, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(xl, {}),
  /* @__PURE__ */ B(Dr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Cl.map((e) => /* @__PURE__ */ B(bl, { children: [
    /* @__PURE__ */ h(wl, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(Sl, { style: { color: e.color }, children: /* @__PURE__ */ h(Be, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), kl = On(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = rt(), { date: c, cols: l, dayOfYear: a, startDate: d, config: u } = Ge(), y = ue(null), M = qt(), x = u.showWeekRow !== !1, $ = r === 2 ? Ns : r === 1 && !x ? Ve + vt : Xt, m = le(
    (P) => {
      const X = jn(), W = $ + 1;
      xo(P, X, W), ul(P, r, l, d, i, a, M, x);
    },
    [l, a, d, i, r, M, x, $]
  );
  return ge(() => {
    if (!y.current)
      return;
    const P = y.current.getContext("2d");
    if (!P)
      return;
    const X = () => m(P);
    return window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
  }, [m]), ge(() => {
    const P = y.current;
    if (!P)
      return;
    P.style.letterSpacing = "1px";
    const X = P.getContext("2d");
    X && m(X);
  }, [c, r, m]), /* @__PURE__ */ B(fl, { ref: s, children: [
    (u.showTopbar !== !1 || u.showLegend !== !1) && /* @__PURE__ */ B(hl, { $width: t, children: [
      u.showTopbar !== !1 && /* @__PURE__ */ h(Aa, { width: t, showThemeToggle: n, toggleTheme: o }),
      u.showLegend !== !1 && /* @__PURE__ */ h(Ml, {})
    ] }),
    /* @__PURE__ */ h(pl, { $height: $, id: lo, children: /* @__PURE__ */ h(ml, { ref: y }) })
  ] });
}), $l = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = He;
      break;
    case 2:
      n = Ie;
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
}, Dl = (e, r, t, n, o, s) => {
  const i = e * ye + Fs, c = r.hour(), l = t.hour();
  let a, d, u, y;
  switch (s) {
    case 2: {
      a = A(n), d = A(o), u = A(r).hour(c).minute(0), y = A(t).hour(l).minute(0);
      break;
    }
    default: {
      a = A(n).hour(0).minute(0), d = A(o).hour(23).minute(59), u = r, y = t;
      break;
    }
  }
  return {
    ...$l(
      { startDate: a, endDate: d },
      { startDate: u, endDate: y },
      s
    ),
    y: i
  };
}, Do = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, Eo = {
  sin_chofer: { icon: "warn", color: "#9AA4B2", label: "Sin chofer" },
  sin_avisar: { icon: "warn", color: "#D98A22", label: "No notificado al chofer" },
  programado: { icon: "warn", color: "#C2A878", label: "Notificación programada" },
  notificado: { icon: "clock", color: "#2C6BB0", label: "Notificado" },
  confirmado: { icon: "check", color: "#2E8B63", label: "Confirmado" }
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
  ${$t}
  ${dt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const El = We`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, _l = We`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, Tl = v.button`
  ${$t}
  position: absolute;
  height: ${Qt}px;
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
    animation: ${El} 180ms ease-out;
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
  ${({ $exiting: e }) => e && kt`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${_l} 190ms ease-out forwards;
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
`, Al = v.div`
  position: sticky;
  left: ${Re + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`, Er = v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Pl = v.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Il = v.span`
  ${dt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, Ol = v.span`
  ${dt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Yl = v.span`
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
`, Ll = v.div`
  ${dt}
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
`, Pn = {
  confirmed: { ring: "#2E8B63", glow: "rgba(46, 139, 99, 0.45)" },
  notified: { ring: "#2C6BB0", glow: "rgba(44, 107, 176, 0.45)" },
  lost: { ring: "#C6483D", glow: "rgba(198, 72, 61, 0.45)" }
}, Rl = We`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`, Nl = We`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`, Fl = We`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`, zl = We`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`, Bl = v.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({ $kind: e }) => Pn[e].ring};
  --pulse-glow: ${({ $kind: e }) => Pn[e].glow};
  animation:
    ${Rl} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${Nl} 9600ms linear var(--pulse-delay, 0ms) both;
`, Hl = v.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({ $kind: e }) => Pn[e].ring};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Fl} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
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
      animation: ${zl} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`, Wl = v.div`
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
`, jl = We`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`, Zl = v.div`
  position: absolute;
  height: ${Qt}px;
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
    animation: ${jl} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`, Vl = v.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`, Gl = v.div`
  ${dt}
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
`, Xl = v.div`
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
`, Ul = v.span`
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
`, Kl = v.span`
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
`, Jl = 34, sn = ({
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
  leaving: M = !1,
  ghost: x = !1,
  ghostBadge: $ = "",
  pulse: m
}) => {
  const { date: P } = Ge(), X = en(P, t), { y: W, x: F, width: f } = Dl(
    e,
    X.startDate,
    X.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: g } = qt(), b = ue(null), E = A(r.startDate).isSame(A(r.endDate), "day"), w = r.eventType === Yt.Tour, S = r.eventType === Yt.Transfer, j = E && (w || S);
  if (x)
    return /* @__PURE__ */ B(Zl, { style: { left: `${F}px`, top: `${W + a}px`, width: `${f}px` }, children: [
      /* @__PURE__ */ B(Vl, { children: [
        /* @__PURE__ */ B(Gl, { children: [
          /* @__PURE__ */ h(Be, { name: S ? "transfer" : "tour" }),
          r.title
        ] }),
        /* @__PURE__ */ B(Xl, { children: [
          /* @__PURE__ */ h(Be, { name: "check", strokeWidth: 2.6 }),
          "flota propia"
        ] })
      ] }),
      $ && /* @__PURE__ */ h(Ul, { children: $ })
    ] });
  const q = (ee) => {
    ee.button === 0 && (b.current = { x: ee.clientX, y: ee.clientY }, l && i && (ee.preventDefault(), i(r, ee)));
  }, O = (ee) => {
    s && (ee.preventDefault(), s(r, { x: ee.clientX, y: ee.clientY }));
  }, C = (ee) => {
    if (b.current) {
      const L = Math.abs(ee.clientX - b.current.x), z = Math.abs(ee.clientY - b.current.y);
      Math.sqrt(L * L + z * z) <= 5 && (o == null || o(r)), b.current = null;
    } else
      o == null || o(r);
  }, T = {
    left: `${F}px`,
    top: `${W + a}px`,
    backgroundColor: `${r.bgColor ?? g.defaultTile}`,
    width: `${f}px`,
    color: Do(r.bgColor ?? "")
  }, Y = !n && r.readiness ? Eo[r.readiness] : null, R = n && r.subcontractConfirmed === !1, I = m ? { "--pulse-delay": `${m.delayMs}ms` } : void 0, H = (ee) => m ? /* @__PURE__ */ h(
    Hl,
    {
      $kind: m.kind,
      style: I,
      children: ee
    },
    `${m.key}-${r.readiness ?? ""}-${String(r.subcontractConfirmed)}`
  ) : ee, re = (ee) => /* @__PURE__ */ B(
    Tl,
    {
      "data-segment-id": r.segmentId,
      style: T,
      onClick: C,
      onMouseDown: q,
      onContextMenu: O,
      onDragStart: (L) => L.preventDefault(),
      isDraggable: l,
      isDragging: c,
      $unconfirmed: R,
      $exiting: d,
      $highlighted: u,
      $dimmed: y,
      $leaving: M,
      $pulsing: !!m,
      children: [
        m && /* @__PURE__ */ h(Bl, { $kind: m.kind, style: I, "aria-hidden": !0 }, m.key),
        M && /* @__PURE__ */ h(Kl, { children: "Sub" }),
        ee
      ]
    }
  );
  return re(
    j ? /* @__PURE__ */ B(Te, { children: [
      (n || Y) && /* @__PURE__ */ h(_r, { $sm: !0, children: H(
        n ? /* @__PURE__ */ h(Ar, { children: "SUB" }) : Y && /* @__PURE__ */ h(Tr, { $sm: !0, style: { color: Y.color }, children: /* @__PURE__ */ h(Be, { name: Y.icon, strokeWidth: Y.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      /* @__PURE__ */ B(Wl, { $transfer: S, children: [
        /* @__PURE__ */ h(Be, { name: S ? "transfer" : "sun", strokeWidth: 2.4 }),
        f >= Jl && /* @__PURE__ */ B(Te, { children: [
          /* @__PURE__ */ h(Pr, { children: A(r.startDate).format("h:mm A") }),
          !S && /* @__PURE__ */ h(Pr, { $end: !0, children: A(r.endDate).format("h:mm A") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(_r, { children: (n || Y) && H(
        n ? /* @__PURE__ */ h(Ar, { children: "SUB" }) : Y && /* @__PURE__ */ h(Tr, { style: { color: Y.color }, children: /* @__PURE__ */ h(Be, { name: Y.icon, strokeWidth: Y.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      r.bookingNumber && /* @__PURE__ */ h(Yl, { children: r.bookingNumber }),
      /* @__PURE__ */ B(Al, { children: [
        /* @__PURE__ */ B(Er, { $pad: !0, children: [
          /* @__PURE__ */ h(Pl, { children: /* @__PURE__ */ h(Be, { name: S ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(Il, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(Er, { children: /* @__PURE__ */ h(Ol, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ B(Ll, { children: [
          /* @__PURE__ */ h(Be, { name: "person" }),
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
}, ql = (e) => ({
  segmentId: e.segmentId,
  reservationId: e.reservationId,
  startDate: e.startDate,
  endDate: e.endDate,
  occupancy: 0,
  title: e.title,
  bookingNumber: "",
  eventType: e.eventType
}), Ql = ({
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
  const M = lc(), { nodes: x, liveMap: $ } = $e(() => {
    const f = /* @__PURE__ */ new Map(), g = !!d && d.length > 0;
    let b = 0;
    return { nodes: e.map((w, S) => {
      S > 0 && (b += Math.max(e[S - 1].data.length, 1));
      const j = !!(l != null && l.has(w.id)), q = g && !d.includes(w.id), O = Ir(b, c), C = y && w.id === y.targetUnitId ? /* @__PURE__ */ h(
        sn,
        {
          row: b,
          data: ql(y),
          zoom: r,
          yOffset: O,
          isDragging: !1,
          isDraggable: !1,
          ghost: !0,
          ghostBadge: y.badge
        },
        `ghost-${w.id}`
      ) : null;
      if (!w.data.some((Y) => Y.length > 0))
        return C ? [C] : [];
      const T = w.data.map(
        (Y, R) => Y.map((I) => {
          const H = i === I.segmentId, re = s ? s(I) : !1, ee = R + b, L = Ir(ee, c);
          return f.set(I.segmentId, {
            project: I,
            absoluteRow: ee,
            yOffset: L,
            isSubcontract: !!w.isSubcontract
          }), /* @__PURE__ */ h(
            sn,
            {
              row: ee,
              data: I,
              zoom: r,
              isSubcontract: w.isSubcontract,
              onTileClick: t,
              onTileContextMenu: n,
              onDragStart: o,
              isDragging: H,
              isDraggable: re,
              yOffset: L,
              exiting: j,
              highlighted: a != null && I.segmentId === a,
              dimmed: q,
              leaving: !!(u != null && u.includes(I.segmentId)),
              pulse: M.get(I.segmentId)
            },
            I.segmentId
          );
        })
      );
      return C ? [...T, [C]] : T;
    }).flat(2), liveMap: f };
  }, [e, t, n, r, o, s, i, c, l, a, d, u, y, M]), m = ue(/* @__PURE__ */ new Map()), P = ue([]), [X, W] = he([]);
  ge(() => () => P.current.forEach(clearTimeout), []), ge(() => {
    const f = m.current;
    m.current = $;
    const g = [];
    if (f.forEach((w, S) => {
      $.has(S) || g.push(w);
    }), W((w) => {
      let S = w.filter((j) => !$.has(j.project.segmentId));
      for (const j of g)
        S.some((q) => q.project.segmentId === j.project.segmentId) || (S = [...S, j]);
      return S;
    }), !g.length)
      return;
    const b = new Set(g.map((w) => w.project.segmentId)), E = setTimeout(() => {
      W((w) => w.filter((S) => !b.has(S.project.segmentId)));
    }, 220);
    P.current.push(E);
  }, [$]);
  const F = X.filter((f) => !$.has(f.project.segmentId)).map((f) => /* @__PURE__ */ h(
    sn,
    {
      row: f.absoluteRow,
      data: f.project,
      zoom: r,
      isSubcontract: f.isSubcontract,
      yOffset: f.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    f.project.segmentId
  ));
  return /* @__PURE__ */ h(Te, { children: [...x, ...F] });
}, ed = Ql;
v.div`
  box-sizing: border-box;
  font-family: ${Fe};
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
const td = v.div`
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
`, nd = v.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, rd = v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, od = v.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, sd = v.span`
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
`, id = v.div`
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
`, ad = v.div`
  ${$t}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, cd = v.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, ld = v.div`
  padding: 10px 12px;
`, dd = v.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Or = v.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Yr = v.div`
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
`, Rr = v.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Nr = v.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, ud = v.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, fd = v.div`
  min-width: 0;
`, hd = v.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, pd = v.div`
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
`, Et = v.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, _t = v.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Tt = v.div`
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
const md = {
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
}, gd = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = ue(null), [s, i] = he("below"), c = rt(), l = { ...md, ...c.tooltip };
  Jt(() => {
    if (!o.current || !t)
      return;
    const $ = o.current, { width: m, height: P } = $.getBoundingClientRect(), X = $.parentElement;
    if (!X)
      return;
    const W = X.getBoundingClientRect(), F = 12, f = 4, g = W.height - t.y, b = W.width - t.x;
    let E = t.x + F, w = t.y + F, S = "below";
    b < m + F && (E = t.x - m - F), g < P + F && (w = t.y - P - F, S = "above"), E = Math.max(f, Math.min(E, W.width - m - f)), w = Math.max(f, Math.min(w, W.height - P - f)), i(S), $.style.left = `${E}px`, $.style.top = `${w}px`;
  }, [t]);
  const a = n.reservationType === Yt.Tour, d = a && n.isOneDayEvent, u = a ? d ? "sun" : "tour" : "transfer", y = a ? d ? l.oneDay : l.tour : l.transfer, M = n.readiness ? Eo[n.readiness] : null, x = [
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ B(td, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ B(nd, { children: [
      /* @__PURE__ */ B(rd, { children: [
        /* @__PURE__ */ h(od, { children: n.bookingNumber }),
        /* @__PURE__ */ B(sd, { children: [
          /* @__PURE__ */ h(Be, { name: u, strokeWidth: 2.4 }),
          y
        ] })
      ] }),
      /* @__PURE__ */ h(ad, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(cd, { children: n.client }),
      M && /* @__PURE__ */ B(id, { style: { color: M.color }, children: [
        /* @__PURE__ */ h(Be, { name: M.icon, strokeWidth: M.icon === "check" ? 2.6 : 2.2 }),
        n.readinessNote || M.label
      ] })
    ] }),
    /* @__PURE__ */ B(ld, { children: [
      /* @__PURE__ */ B(dd, { children: [
        /* @__PURE__ */ B(Or, { children: [
          /* @__PURE__ */ h(Yr, { children: l.startDate }),
          /* @__PURE__ */ B(Lr, { children: [
            /* @__PURE__ */ h(Rr, { children: n.startDate }),
            /* @__PURE__ */ h(Nr, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ B(Or, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Yr, { children: l.endDate }),
          /* @__PURE__ */ B(Lr, { children: [
            /* @__PURE__ */ h(Rr, { children: n.endDate }),
            /* @__PURE__ */ h(Nr, { children: n.endTime })
          ] })
        ] })
      ] }),
      x.length > 0 && /* @__PURE__ */ h(ud, { children: x.map(($, m) => /* @__PURE__ */ B(fd, { children: [
        /* @__PURE__ */ h(hd, { children: $.label }),
        /* @__PURE__ */ h(pd, { children: $.value })
      ] }, m)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ B(Fr, { children: [
        n.departureAddress && /* @__PURE__ */ B(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.salida }),
          /* @__PURE__ */ h(Tt, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ B(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.destino }),
          /* @__PURE__ */ h(Tt, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ B(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.regreso }),
          /* @__PURE__ */ h(Tt, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ B(Fr, { children: [
        n.serviceNotes && /* @__PURE__ */ B(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.serviceNotes }),
          /* @__PURE__ */ h(Tt, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ B(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.reservationNotes }),
          /* @__PURE__ */ h(Tt, { children: n.reservationNotes })
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
const yd = v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, vd = v.div`
  position: absolute;
  height: ${Qt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, xd = v.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, zr = v.p`
  ${$t}
  ${dt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, bd = v.p`
  ${$t}
  ${dt}
`, wd = v.div`
  position: sticky;
  left: ${Re + 16}px;
  overflow: hidden;
`, Sd = v.div`
  position: absolute;
  height: ${Qt}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Cd = v.div`
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
`, Md = v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, kd = v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, $d = v.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Br = v.div`
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
`, Hr = v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Wr = v.div`
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
`, jr = v.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, an = v.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, cn = v.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, mt = v.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Zr = v.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Dd = ({
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
  const a = rt(), d = (F) => {
    let f = 0;
    for (const g of l)
      g <= F && f++;
    return F * ye + f * Ne;
  }, [u, y] = he(null), [M, x] = he(0), $ = le((F = 400, f = 300) => {
    const b = t.width, E = 48, w = document.getElementById("react-scheduler");
    if (!w)
      return {
        x: r.x + b + 16,
        y: r.y
      };
    const S = w.scrollLeft, j = w.scrollTop, q = w.clientWidth, O = w.clientHeight, C = r.x - S, T = r.y - j, Y = {
      left: Re + 16,
      // Avoid left column
      right: q - 16,
      top: 16,
      bottom: O - 16
    }, R = Y.right - (C + b), I = C - Y.left, H = Y.bottom - (T + E), re = T - Y.top;
    let ee, L;
    return R >= F + 16 ? ee = C + b + 16 : I >= F + 16 ? ee = C - F - 16 : R >= I ? (ee = C + b + 16, ee + F > Y.right && (ee = Y.right - F)) : (ee = C - F - 16, ee < Y.left && (ee = Y.left)), H >= f + 16 ? L = T + E + 16 : re >= f + 16 ? L = T - f - 16 : H >= re ? (L = T + E + 16, L + f > Y.bottom && (L = Y.bottom - f)) : (L = T - f - 16, L < Y.top && (L = Y.top)), ee = Math.max(Y.left, Math.min(ee, Y.right - F)), L = Math.max(Y.top, Math.min(L, Y.bottom - f)), {
      x: ee + S,
      y: L + j
    };
  }, [r.x, r.y, t.width]);
  ge(() => {
    s === "dragging" && e && M === 0 ? x(r.x) : s === "idle" && x(0);
  }, [s, e, r.x, M]), ge(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const m = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const F = [];
    let f = 0;
    for (const g of i) {
      const b = Math.max(g.data.length, 1);
      if (g.capacity !== void 0 && e.totalPassengers > g.capacity)
        for (let E = 0; E < b; E++)
          F.push(f + E);
      f += b;
    }
    return F;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const P = s === "animating", X = Do(e.bgColor ?? ""), W = () => {
    if (!n)
      return "";
    const F = A(n.startDate).format("MMM D, HH:mm"), f = A(n.endDate).format("HH:mm");
    return `${F} - ${f}`;
  };
  return /* @__PURE__ */ B(yd, { children: [
    m.map((F) => /* @__PURE__ */ h(
      kd,
      {
        style: {
          top: `${d(F)}px`,
          height: `${ye}px`
        }
      },
      F
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      Md,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${d(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(
        Sd,
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
        Cd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ye - 48) / 2}px`
          },
          children: W()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      $d,
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
      return /* @__PURE__ */ B(
        Br,
        {
          style: {
            left: `${F.x}px`,
            top: `${F.y}px`
          },
          children: [
            /* @__PURE__ */ B(Hr, { children: [
              /* @__PURE__ */ h(Wr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(jr, { children: n.conflicts.map((f, g) => {
              const b = A(n.startDate).format("YYYY-MM-DD"), E = A(n.endDate).format("YYYY-MM-DD"), w = A(f.event.startDate).format("YYYY-MM-DD"), S = A(f.event.endDate).format("YYYY-MM-DD"), j = A(f.conflictStart).format("YYYY-MM-DD"), q = A(f.conflictEnd).format("YYYY-MM-DD"), O = b !== E, C = w !== S, T = j !== q, Y = O ? A(n.startDate).format("MMM D, h:mm A") : A(n.startDate).format("h:mm A"), R = O ? A(n.endDate).format("MMM D, h:mm A") : A(n.endDate).format("h:mm A"), I = C ? A(f.event.startDate).format("MMM D, h:mm A") : A(f.event.startDate).format("h:mm A"), H = C ? A(f.event.endDate).format("MMM D, h:mm A") : A(f.event.endDate).format("h:mm A"), re = T ? A(f.conflictStart).format("MMM D, h:mm A") : A(f.conflictStart).format("h:mm A"), ee = T ? A(f.conflictEnd).format("MMM D, h:mm A") : A(f.conflictEnd).format("h:mm A"), L = T ? "" : A(f.conflictStart).format("MMM D"), z = n.startDate.getTime(), J = n.endDate.getTime(), te = f.event.startDate.getTime(), k = f.event.endDate.getTime(), V = z >= te && z < k, _ = J > te && J <= k, Q = z <= te && J >= k, Z = te <= z && k >= J;
              let N = !1, p = !1, U = !1, D = !1, G = "";
              return Q || Z ? (N = !0, p = !0, U = !0, D = !0, G = `⚠️ ${a.conflicts.changeBoth}`) : V && _ ? (N = !0, p = !0, U = !0, D = !0, G = `⚠️ ${a.conflicts.changeBoth}`) : V ? (N = !0, D = !0, G = `⚠️ ${a.conflicts.changeStart}`) : _ && (p = !0, U = !0, G = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ B(an, { children: [
                /* @__PURE__ */ B(cn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ B(mt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  N ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Y }) : Y,
                  " ",
                  a.conflicts.to,
                  " ",
                  p ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: R }) : R
                ] }),
                /* @__PURE__ */ B(mt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  U ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I,
                  " ",
                  a.conflicts.to,
                  " ",
                  D ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: H }) : H
                ] }),
                /* @__PURE__ */ B(Zr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  L && `${L}, `,
                  re,
                  " - ",
                  ee
                ] }),
                G && /* @__PURE__ */ h(mt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: G })
              ] }, g);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const F = $(400, 400);
      return /* @__PURE__ */ B(
        Br,
        {
          style: {
            left: `${F.x}px`,
            top: `${F.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ B(Hr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Wr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ B(jr, { children: [
              (() => {
                const f = n.nearbyEvents.some((w) => w.position === "before"), g = n.nearbyEvents.some((w) => w.position === "after"), b = A(n.startDate).format("h:mm A"), E = A(n.endDate).format("h:mm A");
                return /* @__PURE__ */ B(an, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ B(cn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ B(mt, { style: { fontWeight: 600 }, children: [
                    A(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: b }) : b,
                    " ",
                    a.conflicts.to,
                    " ",
                    g ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: E }) : E
                  ] }),
                  /* @__PURE__ */ h(mt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, g) => {
                const b = A(f.event.startDate).format("YYYY-MM-DD"), E = A(f.event.endDate).format("YYYY-MM-DD"), w = b !== E, S = w ? A(f.event.startDate).format("MMM D, h:mm A") : A(f.event.startDate).format("h:mm A"), j = w ? A(f.event.endDate).format("MMM D, h:mm A") : A(f.event.endDate).format("h:mm A"), q = A(f.event.startDate).format("MMM D"), O = Math.floor(f.timeGap / (1e3 * 60 * 60)), C = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), T = O > 0 ? `${O}h ${C}m` : `${C}m`, Y = f.position === "after", R = f.position === "before";
                return /* @__PURE__ */ B(an, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ B(cn, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ B(mt, { children: [
                    !w && `${q}: `,
                    Y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: S }) : S,
                    " ",
                    a.conflicts.to,
                    " ",
                    R ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: j }) : j
                  ] }),
                  /* @__PURE__ */ B(Zr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    T,
                    " ",
                    f.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, g);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      vd,
      {
        $isAnimating: P,
        $animateToX: u == null ? void 0 : u.x,
        $animateToY: u == null ? void 0 : u.y,
        style: {
          left: P ? `${(u == null ? void 0 : u.x) ?? 0}px` : "0",
          top: P ? `${(u == null ? void 0 : u.y) ?? 0}px` : "0",
          transform: P ? void 0 : `translate3d(${c ? M : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: X
        },
        children: /* @__PURE__ */ h(xd, { children: /* @__PURE__ */ B(wd, { children: [
          /* @__PURE__ */ h(zr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(zr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(bd, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Ed = Dd, _d = We`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Td = v.div`
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
  animation: ${_d} 1.5s ease-in-out infinite;
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
`, Ad = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  Td,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Pd = Ad, Id = We`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Od = v.div`
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
  animation: ${Id} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, Yd = v.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Ld = v.span`
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
`, Rd = v.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Nd = v.span`
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
const Fd = v.div`
  display: flex;
  gap: 8px;
`, Vr = v.button`
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
`, zd = ({ selections: e, onConfirm: r, onClear: t }) => {
  var x;
  const o = rt().multiSelect, s = $e(() => e.filter(($) => $.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", d = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", u = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((x = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : x.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, M = /* @__PURE__ */ B(Od, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ B(Yd, { children: [
      /* @__PURE__ */ B(Ld, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ B(Rd, { children: [
        "⚠️ ",
        u
      ] }),
      /* @__PURE__ */ h(Nd, { children: c })
    ] }),
    /* @__PURE__ */ B(Fd, { children: [
      /* @__PURE__ */ B(Vr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ h(Vr, { variant: "primary", $hasConflicts: y, onClick: r, children: y ? `⚠️ ${d}` : `✓ ${a}` })
    ] })
  ] });
  return Yo(M, document.body);
}, Bd = zd, Hd = We`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Wd = v.div`
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
  animation: ${Hd} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && kt`
      border-style: dashed;
    `}
`, jd = v.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, Zd = v.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Vd = v.button`
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
`, Gd = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, l] = he(null), [a, d] = he({ x: 0, y: 0 }), u = ue(null), y = $e(() => {
    switch (t) {
      case 0:
        return He * 7;
      case 1:
        return Ee;
      case 2:
        return Ie;
      default:
        return Ee;
    }
  }, [t]), M = $e(() => A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), x = $e(() => e.map((g, b) => {
    let E = 0, w = !1;
    for (const I of r) {
      if (I.id === g.resourceId) {
        w = !0;
        break;
      }
      E += Math.max(I.data.length, 1);
    }
    if (!w)
      return null;
    const S = A(g.startDate), j = A(g.endDate);
    let q, O;
    switch (t) {
      case 0:
        q = Math.floor(S.diff(M, "days") / 7), O = Math.max(1, Math.ceil(j.diff(S, "days") / 7) + 1);
        break;
      case 1:
        q = S.diff(M, "days"), O = Math.max(1, j.diff(S, "days") + 1);
        break;
      case 2:
        q = S.diff(M, "hours"), O = Math.max(1, j.diff(S, "hours") + 1);
        break;
      default:
        q = 0, O = 1;
    }
    const C = q * y;
    let T = 0;
    for (const I of i)
      I <= E && T++;
    const Y = E * ye + T * Ne, R = O * y;
    return {
      index: b,
      selection: g,
      x: C,
      y: Y,
      width: R,
      height: ye
    };
  }), [e, r, t, M, y]), $ = (g, b) => {
    const E = A(g).format("MMM D"), w = A(b).format("MMM D");
    return E === w ? E : `${E} - ${w}`;
  }, m = (g) => !g.hasConflict || !g.conflicts ? "" : `⚠️ Conflicts with:
${g.conflicts.map((E) => {
    const w = (E.overlapDuration / 36e5).toFixed(1);
    return `• ${E.event.title} (${w}h overlap)`;
  }).join(`
`)}`, P = le(
    (g) => {
      let b = 0;
      for (const E of r) {
        const w = Math.max(E.data.length, 1);
        if (g >= b * ye && g < (b + w) * ye)
          return {
            resourceId: E.id,
            resourceLabel: E.label
          };
        b += w;
      }
      return null;
    },
    [r]
  ), X = le(
    (g) => {
      const b = Math.floor(g / y);
      switch (t) {
        case 0:
          return M.add(b * 7, "days").toDate();
        case 1:
          return M.add(b, "days").toDate();
        case 2:
          return M.add(b, "hours").toDate();
        default:
          return M.toDate();
      }
    },
    [t, M, y]
  ), W = le(
    (g, b) => {
      !s || (g.preventDefault(), g.stopPropagation(), !x[b]) || (u.current = { x: g.clientX, y: g.clientY }, l(b), d({ x: 0, y: 0 }));
    },
    [s, x]
  ), F = le(
    (g) => {
      if (c === null || !u.current)
        return;
      const b = g.clientX - u.current.x, E = g.clientY - u.current.y, w = Math.round(b / y) * y, S = Math.round(E / ye) * ye;
      d({ x: w, y: S });
    },
    [c, y]
  ), f = le(() => {
    if (c === null || !s) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const g = x[c];
    if (!g) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const b = g.x + a.x, E = g.y + a.y, w = P(E + ye / 2);
    if (!w) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const S = X(b), j = e[c], q = j.endDate.getTime() - j.startDate.getTime(), O = new Date(S.getTime() + q);
    s(c, {
      startDate: S,
      endDate: O,
      resourceId: w.resourceId,
      resourceLabel: w.resourceLabel
    }), l(null), d({ x: 0, y: 0 }), u.current = null;
  }, [c, a, x, e, s, P, X]);
  return ge(() => {
    if (c !== null)
      return document.addEventListener("mousemove", F), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", f);
      };
  }, [c, F, f]), /* @__PURE__ */ h(Te, { children: x.map((g) => {
    if (!g)
      return null;
    const b = g.selection.hasConflict || !1, E = c === g.index, w = E ? g.x + a.x : g.x, S = E ? g.y + a.y : g.y;
    return /* @__PURE__ */ B(
      Wd,
      {
        $hasConflict: b,
        $isDragging: E,
        style: {
          left: w,
          top: S,
          width: g.width,
          height: g.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (j) => W(j, g.index),
        children: [
          b && /* @__PURE__ */ h(Zd, { title: m(g.selection), children: "⚠️" }),
          /* @__PURE__ */ h(jd, { $hasConflict: b, children: $(g.selection.startDate, g.selection.endDate) }),
          /* @__PURE__ */ h(
            Vd,
            {
              onClick: (j) => {
                j.stopPropagation(), o(g.index);
              },
              onMouseDown: (j) => j.stopPropagation(),
              title: b ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      g.index
    );
  }) });
}, Xd = Gd, _o = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? He * 7 : Ee, s = A().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, Ud = v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ theme: e }) => e.colors.today}12;
`, Kd = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ge(), n = $e(
    () => _o(A(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(Ud, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, Jd = Kd, qd = "#2f6fed", Qd = v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${qd}1c;
`, e1 = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = Ge(), o = $e(() => !n || n.isSame(A(), "day") ? null : _o(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(Qd, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0 }) : null;
}, t1 = e1;
export {
  i1 as Scheduler
};
