var Ro = Object.defineProperty;
var No = (e, r, t) => r in e ? Ro(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var qn = (e, r, t) => (No(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as W, Fragment as Te } from "react/jsx-runtime";
import * as oe from "react";
import dt, { useRef as ue, useContext as tt, useMemo as Me, useLayoutEffect as nn, useDebugValue as Qn, createElement as Fo, createContext as Bn, useState as he, useCallback as ce, useEffect as ge, forwardRef as zn, useImperativeHandle as Qr } from "react";
import { createPortal as Bo } from "react-dom";
var Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Nt = {}, zo = {
  get exports() {
    return Nt;
  },
  set exports(e) {
    Nt = e;
  }
}, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Ho() {
  if (er)
    return be;
  er = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function M(g) {
    if (typeof g == "object" && g !== null) {
      var I = g.$$typeof;
      switch (I) {
        case e:
          switch (g = g.type, g) {
            case t:
            case o:
            case n:
            case a:
            case l:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case i:
                case d:
                case y:
                case u:
                case s:
                  return g;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  return be.ContextConsumer = i, be.ContextProvider = s, be.Element = e, be.ForwardRef = d, be.Fragment = t, be.Lazy = y, be.Memo = u, be.Portal = r, be.Profiler = o, be.StrictMode = n, be.Suspense = a, be.SuspenseList = l, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(g) {
    return M(g) === i;
  }, be.isContextProvider = function(g) {
    return M(g) === s;
  }, be.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, be.isForwardRef = function(g) {
    return M(g) === d;
  }, be.isFragment = function(g) {
    return M(g) === t;
  }, be.isLazy = function(g) {
    return M(g) === y;
  }, be.isMemo = function(g) {
    return M(g) === u;
  }, be.isPortal = function(g) {
    return M(g) === r;
  }, be.isProfiler = function(g) {
    return M(g) === o;
  }, be.isStrictMode = function(g) {
    return M(g) === n;
  }, be.isSuspense = function(g) {
    return M(g) === a;
  }, be.isSuspenseList = function(g) {
    return M(g) === l;
  }, be.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === t || g === o || g === n || g === a || g === l || g === C || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === u || g.$$typeof === s || g.$$typeof === i || g.$$typeof === d || g.$$typeof === v || g.getModuleId !== void 0);
  }, be.typeOf = M, be;
}
var we = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Wo() {
  return tr || (tr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v = !1, M = !1, g = !1, I = !1, U = !1, j;
    j = Symbol.for("react.module.reference");
    function z($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === t || $ === o || U || $ === n || $ === a || $ === l || I || $ === C || v || M || g || typeof $ == "object" && $ !== null && ($.$$typeof === y || $.$$typeof === u || $.$$typeof === s || $.$$typeof === i || $.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === j || $.getModuleId !== void 0));
    }
    function f($) {
      if (typeof $ == "object" && $ !== null) {
        var V = $.$$typeof;
        switch (V) {
          case e:
            var ne = $.type;
            switch (ne) {
              case t:
              case o:
              case n:
              case a:
              case l:
                return ne;
              default:
                var J = ne && ne.$$typeof;
                switch (J) {
                  case c:
                  case i:
                  case d:
                  case y:
                  case u:
                  case s:
                    return J;
                  default:
                    return V;
                }
            }
          case r:
            return V;
        }
      }
    }
    var p = i, b = s, E = e, S = d, w = t, H = y, X = u, O = r, T = o, A = n, Y = a, D = l, L = !1, F = !1;
    function re($) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee($) {
      return F || (F = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function N($) {
      return f($) === i;
    }
    function R($) {
      return f($) === s;
    }
    function q($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function te($) {
      return f($) === d;
    }
    function k($) {
      return f($) === t;
    }
    function G($) {
      return f($) === y;
    }
    function _($) {
      return f($) === u;
    }
    function Q($) {
      return f($) === r;
    }
    function Z($) {
      return f($) === o;
    }
    function B($) {
      return f($) === n;
    }
    function m($) {
      return f($) === a;
    }
    function K($) {
      return f($) === l;
    }
    we.ContextConsumer = p, we.ContextProvider = b, we.Element = E, we.ForwardRef = S, we.Fragment = w, we.Lazy = H, we.Memo = X, we.Portal = O, we.Profiler = T, we.StrictMode = A, we.Suspense = Y, we.SuspenseList = D, we.isAsyncMode = re, we.isConcurrentMode = ee, we.isContextConsumer = N, we.isContextProvider = R, we.isElement = q, we.isForwardRef = te, we.isFragment = k, we.isLazy = G, we.isMemo = _, we.isPortal = Q, we.isProfiler = Z, we.isStrictMode = B, we.isSuspense = m, we.isSuspenseList = K, we.isValidElementType = z, we.typeOf = f;
  }()), we;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ho() : e.exports = Wo();
})(zo);
function jo(e) {
  function r(N, R, q, te, k) {
    for (var G = 0, _ = 0, Q = 0, Z = 0, B, m, K = 0, $ = 0, V, ne = V = B = 0, J = 0, le = 0, pe = 0, fe = 0, ve = q.length, $e = ve - 1, ke, se = "", me = "", Ae = "", ze = "", Pe; J < ve; ) {
      if (m = q.charCodeAt(J), J === $e && _ + Z + Q + G !== 0 && (_ !== 0 && (m = _ === 47 ? 10 : 47), Z = Q = G = 0, ve++, $e++), _ + Z + Q + G === 0) {
        if (J === $e && (0 < le && (se = se.replace(y, "")), 0 < se.trim().length)) {
          switch (m) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += q.charAt(J);
          }
          m = 59;
        }
        switch (m) {
          case 123:
            for (se = se.trim(), B = se.charCodeAt(0), V = 1, fe = ++J; J < ve; ) {
              switch (m = q.charCodeAt(J)) {
                case 123:
                  V++;
                  break;
                case 125:
                  V--;
                  break;
                case 47:
                  switch (m = q.charCodeAt(J + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = J + 1; ne < $e; ++ne)
                          switch (q.charCodeAt(ne)) {
                            case 47:
                              if (m === 42 && q.charCodeAt(ne - 1) === 42 && J + 2 !== ne) {
                                J = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (m === 47) {
                                J = ne + 1;
                                break e;
                              }
                          }
                        J = ne;
                      }
                  }
                  break;
                case 91:
                  m++;
                case 40:
                  m++;
                case 34:
                case 39:
                  for (; J++ < $e && q.charCodeAt(J) !== m; )
                    ;
              }
              if (V === 0)
                break;
              J++;
            }
            switch (V = q.substring(fe, J), B === 0 && (B = (se = se.replace(u, "").trim()).charCodeAt(0)), B) {
              case 64:
                switch (0 < le && (se = se.replace(y, "")), m = se.charCodeAt(1), m) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = R;
                    break;
                  default:
                    le = Y;
                }
                if (V = r(R, le, V, m, k + 1), fe = V.length, 0 < L && (le = t(Y, se, pe), Pe = c(3, V, le, R, O, X, fe, m, k, te), se = le.join(""), Pe !== void 0 && (fe = (V = Pe.trim()).length) === 0 && (m = 0, V = "")), 0 < fe)
                  switch (m) {
                    case 115:
                      se = se.replace(p, i);
                    case 100:
                    case 109:
                    case 45:
                      V = se + "{" + V + "}";
                      break;
                    case 107:
                      se = se.replace(U, "$1 $2"), V = se + "{" + V + "}", V = A === 1 || A === 2 && s("@" + V, 3) ? "@-webkit-" + V + "@" + V : "@" + V;
                      break;
                    default:
                      V = se + V, te === 112 && (V = (me += V, ""));
                  }
                else
                  V = "";
                break;
              default:
                V = r(R, t(R, se, pe), V, te, k + 1);
            }
            Ae += V, V = pe = le = ne = B = 0, se = "", m = q.charCodeAt(++J);
            break;
          case 125:
          case 59:
            if (se = (0 < le ? se.replace(y, "") : se).trim(), 1 < (fe = se.length))
              switch (ne === 0 && (B = se.charCodeAt(0), B === 45 || 96 < B && 123 > B) && (fe = (se = se.replace(" ", ":")).length), 0 < L && (Pe = c(1, se, R, N, O, X, me.length, te, k, te)) !== void 0 && (fe = (se = Pe.trim()).length) === 0 && (se = "\0\0"), B = se.charCodeAt(0), m = se.charCodeAt(1), B) {
                case 0:
                  break;
                case 64:
                  if (m === 105 || m === 99) {
                    ze += se + q.charAt(J);
                    break;
                  }
                default:
                  se.charCodeAt(fe - 1) !== 58 && (me += o(se, B, m, se.charCodeAt(2)));
              }
            pe = le = ne = B = 0, se = "", m = q.charCodeAt(++J);
        }
      }
      switch (m) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + B === 0 && te !== 107 && 0 < se.length && (le = 1, se += "\0"), 0 < L * re && c(0, se, R, N, O, X, me.length, te, k, te), X = 1, O++;
          break;
        case 59:
        case 125:
          if (_ + Z + Q + G === 0) {
            X++;
            break;
          }
        default:
          switch (X++, ke = q.charAt(J), m) {
            case 9:
            case 32:
              if (Z + G + _ === 0)
                switch (K) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ke = "";
                    break;
                  default:
                    m !== 32 && (ke = " ");
                }
              break;
            case 0:
              ke = "\\0";
              break;
            case 12:
              ke = "\\f";
              break;
            case 11:
              ke = "\\v";
              break;
            case 38:
              Z + _ + G === 0 && (le = pe = 1, ke = "\f" + ke);
              break;
            case 108:
              if (Z + _ + G + T === 0 && 0 < ne)
                switch (J - ne) {
                  case 2:
                    K === 112 && q.charCodeAt(J - 3) === 58 && (T = K);
                  case 8:
                    $ === 111 && (T = $);
                }
              break;
            case 58:
              Z + _ + G === 0 && (ne = J);
              break;
            case 44:
              _ + Q + Z + G === 0 && (le = 1, ke += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (Z = Z === m ? 0 : Z === 0 ? m : Z);
              break;
            case 91:
              Z + _ + Q === 0 && G++;
              break;
            case 93:
              Z + _ + Q === 0 && G--;
              break;
            case 41:
              Z + _ + G === 0 && Q--;
              break;
            case 40:
              if (Z + _ + G === 0) {
                if (B === 0)
                  switch (2 * K + 3 * $) {
                    case 533:
                      break;
                    default:
                      B = 1;
                  }
                Q++;
              }
              break;
            case 64:
              _ + Q + Z + G + ne + V === 0 && (V = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Z + G + Q))
                switch (_) {
                  case 0:
                    switch (2 * m + 3 * q.charCodeAt(J + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        fe = J, _ = 42;
                    }
                    break;
                  case 42:
                    m === 47 && K === 42 && fe + 2 !== J && (q.charCodeAt(fe + 2) === 33 && (me += q.substring(fe, J + 1)), ke = "", _ = 0);
                }
          }
          _ === 0 && (se += ke);
      }
      $ = K, K = m, J++;
    }
    if (fe = me.length, 0 < fe) {
      if (le = R, 0 < L && (Pe = c(2, me, le, N, O, X, fe, te, k, te), Pe !== void 0 && (me = Pe).length === 0))
        return ze + me + Ae;
      if (me = le.join(",") + "{" + me + "}", A * T !== 0) {
        switch (A !== 2 || s(me, 2) || (T = 0), T) {
          case 111:
            me = me.replace(z, ":-moz-$1") + me;
            break;
          case 112:
            me = me.replace(j, "::-webkit-input-$1") + me.replace(j, "::-moz-$1") + me.replace(j, ":-ms-input-$1") + me;
        }
        T = 0;
      }
    }
    return ze + me + Ae;
  }
  function t(N, R, q) {
    var te = R.trim().split(g);
    R = te;
    var k = te.length, G = N.length;
    switch (G) {
      case 0:
      case 1:
        var _ = 0;
        for (N = G === 0 ? "" : N[0] + " "; _ < k; ++_)
          R[_] = n(N, R[_], q).trim();
        break;
      default:
        var Q = _ = 0;
        for (R = []; _ < k; ++_)
          for (var Z = 0; Z < G; ++Z)
            R[Q++] = n(N[Z] + " ", te[_], q).trim();
    }
    return R;
  }
  function n(N, R, q) {
    var te = R.charCodeAt(0);
    switch (33 > te && (te = (R = R.trim()).charCodeAt(0)), te) {
      case 38:
        return R.replace(I, "$1" + N.trim());
      case 58:
        return N.trim() + R.replace(I, "$1" + N.trim());
      default:
        if (0 < 1 * q && 0 < R.indexOf("\f"))
          return R.replace(I, (N.charCodeAt(0) === 58 ? "" : "$1") + N.trim());
    }
    return N + R;
  }
  function o(N, R, q, te) {
    var k = N + ";", G = 2 * R + 3 * q + 4 * te;
    if (G === 944) {
      N = k.indexOf(":", 9) + 1;
      var _ = k.substring(N, k.length - 1).trim();
      return _ = k.substring(0, N).trim() + _ + ";", A === 1 || A === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (A === 0 || A === 2 && !s(k, 1))
      return k;
    switch (G) {
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
          return k.replace(H, "$1-webkit-$2") + k;
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
        return v.test(k) ? k.replace(C, ":-webkit-") + k.replace(C, ":-moz-") + k : k;
      case 1e3:
        switch (_ = k.substring(13).trim(), R = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(R)) {
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
        switch (R = (k = N).length - 10, _ = (k.charCodeAt(R) === 33 ? k.substring(0, R) : k).substring(N.indexOf(":", 7) + 1).trim(), G = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8))
              break;
          case 115:
            k = k.replace(_, "-webkit-" + _) + ";" + k;
            break;
          case 207:
          case 102:
            k = k.replace(_, "-webkit-" + (102 < G ? "inline-" : "") + "box") + ";" + k.replace(_, "-webkit-" + _) + ";" + k.replace(_, "-ms-" + _ + "box") + ";" + k;
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
        if (w.test(N) === !0)
          return (_ = N.substring(N.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(N.replace("stretch", "fill-available"), R, q, te).replace(":fill-available", ":stretch") : k.replace(_, "-webkit-" + _) + k.replace(_, "-moz-" + _.replace("fill-", "")) + k;
        break;
      case 962:
        if (k = "-webkit-" + k + (k.charCodeAt(5) === 102 ? "-ms-" + k : "") + k, q + te === 211 && k.charCodeAt(13) === 105 && 0 < k.indexOf("transform", 10))
          return k.substring(0, k.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + k;
    }
    return k;
  }
  function s(N, R) {
    var q = N.indexOf(R === 1 ? ":" : "{"), te = N.substring(0, R !== 3 ? q : 10);
    return q = N.substring(q + 1, N.length - 1), F(R !== 2 ? te : te.replace(S, "$1"), q, R);
  }
  function i(N, R) {
    var q = o(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return q !== R + ";" ? q.replace(b, " or ($1)").substring(4) : "(" + R + ")";
  }
  function c(N, R, q, te, k, G, _, Q, Z, B) {
    for (var m = 0, K = R, $; m < L; ++m)
      switch ($ = D[m].call(l, N, K, q, te, k, G, _, Q, Z, B)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          K = $;
      }
    if (K !== R)
      return K;
  }
  function d(N) {
    switch (N) {
      case void 0:
      case null:
        L = D.length = 0;
        break;
      default:
        if (typeof N == "function")
          D[L++] = N;
        else if (typeof N == "object")
          for (var R = 0, q = N.length; R < q; ++R)
            d(N[R]);
        else
          re = !!N | 0;
    }
    return d;
  }
  function a(N) {
    return N = N.prefix, N !== void 0 && (F = null, N ? typeof N != "function" ? A = 1 : (A = 2, F = N) : A = 0), a;
  }
  function l(N, R) {
    var q = N;
    if (33 > q.charCodeAt(0) && (q = q.trim()), ee = q, q = [ee], 0 < L) {
      var te = c(-1, R, q, q, O, X, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (R = te);
    }
    var k = r(Y, q, R, 0, 0);
    return 0 < L && (te = c(-2, k, q, q, O, X, k.length, 0, 0, 0), te !== void 0 && (k = te)), ee = "", T = 0, X = O = 1, k;
  }
  var u = /^\0+/g, y = /[\0\r\f]/g, C = /: */g, v = /zoo|gra/, M = /([,: ])(transform)/g, g = /,\r+?/g, I = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, j = /::(place)/g, z = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, p = /\(\s*(.*)\s*\)/g, b = /([\s\S]*?);/g, E = /-self|flex-/g, S = /[^]*?(:[rp][el]a[\w-]+)[^]*/, w = /stretch|:\s*\w+\-(?:conte|avail)/, H = /([^-])(image-set\()/, X = 1, O = 1, T = 0, A = 1, Y = [], D = [], L = 0, F = null, re = 0, ee = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var Zo = {
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
function Vo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Go = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, nr = /* @__PURE__ */ Vo(
  function(e) {
    return Go.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), gn = {}, Uo = {
  get exports() {
    return gn;
  },
  set exports(e) {
    gn = e;
  }
}, Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Xo() {
  if (rr)
    return Se;
  rr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function j(f) {
    if (typeof f == "object" && f !== null) {
      var p = f.$$typeof;
      switch (p) {
        case r:
          switch (f = f.type, f) {
            case d:
            case a:
            case n:
            case s:
            case o:
            case u:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case l:
                case v:
                case C:
                case i:
                  return f;
                default:
                  return p;
              }
          }
        case t:
          return p;
      }
    }
  }
  function z(f) {
    return j(f) === a;
  }
  return Se.AsyncMode = d, Se.ConcurrentMode = a, Se.ContextConsumer = c, Se.ContextProvider = i, Se.Element = r, Se.ForwardRef = l, Se.Fragment = n, Se.Lazy = v, Se.Memo = C, Se.Portal = t, Se.Profiler = s, Se.StrictMode = o, Se.Suspense = u, Se.isAsyncMode = function(f) {
    return z(f) || j(f) === d;
  }, Se.isConcurrentMode = z, Se.isContextConsumer = function(f) {
    return j(f) === c;
  }, Se.isContextProvider = function(f) {
    return j(f) === i;
  }, Se.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, Se.isForwardRef = function(f) {
    return j(f) === l;
  }, Se.isFragment = function(f) {
    return j(f) === n;
  }, Se.isLazy = function(f) {
    return j(f) === v;
  }, Se.isMemo = function(f) {
    return j(f) === C;
  }, Se.isPortal = function(f) {
    return j(f) === t;
  }, Se.isProfiler = function(f) {
    return j(f) === s;
  }, Se.isStrictMode = function(f) {
    return j(f) === o;
  }, Se.isSuspense = function(f) {
    return j(f) === u;
  }, Se.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === a || f === s || f === o || f === u || f === y || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === C || f.$$typeof === i || f.$$typeof === c || f.$$typeof === l || f.$$typeof === g || f.$$typeof === I || f.$$typeof === U || f.$$typeof === M);
  }, Se.typeOf = j, Se;
}
var Ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Ko() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
    function j(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === a || m === s || m === o || m === u || m === y || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === C || m.$$typeof === i || m.$$typeof === c || m.$$typeof === l || m.$$typeof === g || m.$$typeof === I || m.$$typeof === U || m.$$typeof === M);
    }
    function z(m) {
      if (typeof m == "object" && m !== null) {
        var K = m.$$typeof;
        switch (K) {
          case r:
            var $ = m.type;
            switch ($) {
              case d:
              case a:
              case n:
              case s:
              case o:
              case u:
                return $;
              default:
                var V = $ && $.$$typeof;
                switch (V) {
                  case c:
                  case l:
                  case v:
                  case C:
                  case i:
                    return V;
                  default:
                    return K;
                }
            }
          case t:
            return K;
        }
      }
    }
    var f = d, p = a, b = c, E = i, S = r, w = l, H = n, X = v, O = C, T = t, A = s, Y = o, D = u, L = !1;
    function F(m) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), re(m) || z(m) === d;
    }
    function re(m) {
      return z(m) === a;
    }
    function ee(m) {
      return z(m) === c;
    }
    function N(m) {
      return z(m) === i;
    }
    function R(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function q(m) {
      return z(m) === l;
    }
    function te(m) {
      return z(m) === n;
    }
    function k(m) {
      return z(m) === v;
    }
    function G(m) {
      return z(m) === C;
    }
    function _(m) {
      return z(m) === t;
    }
    function Q(m) {
      return z(m) === s;
    }
    function Z(m) {
      return z(m) === o;
    }
    function B(m) {
      return z(m) === u;
    }
    Ce.AsyncMode = f, Ce.ConcurrentMode = p, Ce.ContextConsumer = b, Ce.ContextProvider = E, Ce.Element = S, Ce.ForwardRef = w, Ce.Fragment = H, Ce.Lazy = X, Ce.Memo = O, Ce.Portal = T, Ce.Profiler = A, Ce.StrictMode = Y, Ce.Suspense = D, Ce.isAsyncMode = F, Ce.isConcurrentMode = re, Ce.isContextConsumer = ee, Ce.isContextProvider = N, Ce.isElement = R, Ce.isForwardRef = q, Ce.isFragment = te, Ce.isLazy = k, Ce.isMemo = G, Ce.isPortal = _, Ce.isProfiler = Q, Ce.isStrictMode = Z, Ce.isSuspense = B, Ce.isValidElementType = j, Ce.typeOf = z;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Xo() : e.exports = Ko();
})(Uo);
var Hn = gn, Jo = {
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
}, qo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Qo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, eo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wn = {};
Wn[Hn.ForwardRef] = Qo;
Wn[Hn.Memo] = eo;
function sr(e) {
  return Hn.isMemo(e) ? eo : Wn[e.$$typeof] || Jo;
}
var es = Object.defineProperty, ts = Object.getOwnPropertyNames, ir = Object.getOwnPropertySymbols, ns = Object.getOwnPropertyDescriptor, rs = Object.getPrototypeOf, ar = Object.prototype;
function to(e, r, t) {
  if (typeof r != "string") {
    if (ar) {
      var n = rs(r);
      n && n !== ar && to(e, n, t);
    }
    var o = ts(r);
    ir && (o = o.concat(ir(r)));
    for (var s = sr(e), i = sr(r), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!qo[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = ns(r, d);
        try {
          es(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var os = to;
function Ge() {
  return (Ge = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var cr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, yn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Nt.typeOf(e);
}, Kt = Object.freeze([]), st = Object.freeze({});
function $t(e) {
  return typeof e == "function";
}
function vn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function jn(e) {
  return e && typeof e.styledComponentId == "string";
}
var Dt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Zn = typeof window < "u" && "HTMLElement" in window, ss = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), is = {}, as = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function cs() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Qe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(cs.apply(void 0, [as[e]].concat(t)).trim());
}
var ls = function() {
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
        (i <<= 1) < 0 && Qe(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = s; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(t + 1), a = 0, l = n.length; a < l; a++)
      this.tag.insertRule(d, n[a]) && (this.groupSizes[t]++, d++);
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
}(), Ut = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map(), Rt = 1, jt = function(e) {
  if (Ut.has(e))
    return Ut.get(e);
  for (; Jt.has(Rt); )
    Rt++;
  var r = Rt++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Qe(16, "" + r), Ut.set(e, r), Jt.set(r, e), r;
}, ds = function(e) {
  return Jt.get(e);
}, us = function(e, r) {
  r >= Rt && (Rt = r + 1), Ut.set(e, r), Jt.set(r, e);
}, fs = "style[" + Dt + '][data-styled-version="5.3.8"]', hs = new RegExp("^" + Dt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ps = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, ms = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(hs);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (us(a, d), ps(e, a, c[3]), e.getTag().insertRules(d, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, gs = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, no = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(Dt))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Dt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = gs();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, ys = function() {
  function e(t) {
    var n = this.element = no(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var d = s[i];
        if (d.ownerNode === o)
          return d;
      }
      Qe(17);
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
}(), vs = function() {
  function e(t) {
    var n = this.element = no(t);
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
}(), xs = function() {
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
}(), lr = Zn, bs = { isServer: !Zn, useCSSOMInjection: !ss }, qt = function() {
  function e(t, n, o) {
    t === void 0 && (t = st), n === void 0 && (n = {}), this.options = Ge({}, bs, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Zn && lr && (lr = !1, function(s) {
      for (var i = document.querySelectorAll(fs), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(Dt) !== "active" && (ms(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return jt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ge({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new xs(i) : s ? new ys(i) : new vs(i), new ls(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (jt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(jt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(jt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = ds(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = n.getGroup(i);
          if (d && a && d.size) {
            var l = Dt + ".g" + i + '[id="' + c + '"]', u = "";
            d !== void 0 && d.forEach(function(y) {
              y.length > 0 && (u += y + ",");
            }), s += "" + a + l + '{content:"' + u + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ws = /(a)(d)/gi, dr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function xn(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = dr(r % 52) + t;
  return (dr(r % 52) + t).replace(ws, "$1-$2");
}
var lt = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, ro = function(e) {
  return lt(5381, e);
};
function oo(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if ($t(t) && !jn(t))
      return !1;
  }
  return !0;
}
var Ss = ro("5.3.8"), Cs = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && oo(r), this.componentId = t, this.baseHash = lt(Ss, t), this.baseStyle = n, qt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ut(this.rules, r, t, n).join(""), c = xn(lt(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = n(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = lt(this.baseHash, n.hash), u = "", y = 0; y < a; y++) {
        var C = this.rules[y];
        if (typeof C == "string")
          u += C, process.env.NODE_ENV !== "production" && (l = lt(l, C + y));
        else if (C) {
          var v = ut(C, r, t, n), M = Array.isArray(v) ? v.join("") : v;
          l = lt(l, M + y), u += M;
        }
      }
      if (u) {
        var g = xn(l >>> 0);
        if (!t.hasNameForId(o, g)) {
          var I = n(u, "." + g, void 0, o);
          t.insertRules(o, g, I);
        }
        s.push(g);
      }
    }
    return s.join(" ");
  }, e;
}(), ks = /^\s*\/\/.*$/gm, Ms = [":", "[", ".", "#"];
function $s(e) {
  var r, t, n, o, s = e === void 0 ? st : e, i = s.options, c = i === void 0 ? st : i, d = s.plugins, a = d === void 0 ? Kt : d, l = new jo(c), u = [], y = function(M) {
    function g(I) {
      if (I)
        try {
          M(I + "}");
        } catch {
        }
    }
    return function(I, U, j, z, f, p, b, E, S, w) {
      switch (I) {
        case 1:
          if (S === 0 && U.charCodeAt(0) === 64)
            return M(U + ";"), "";
          break;
        case 2:
          if (E === 0)
            return U + "/*|*/";
          break;
        case 3:
          switch (E) {
            case 102:
            case 112:
              return M(j[0] + U), "";
            default:
              return U + (w === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(g);
      }
    };
  }(function(M) {
    u.push(M);
  }), C = function(M, g, I) {
    return g === 0 && Ms.indexOf(I[t.length]) !== -1 || I.match(o) ? M : "." + r;
  };
  function v(M, g, I, U) {
    U === void 0 && (U = "&");
    var j = M.replace(ks, ""), z = g && I ? I + " " + g + " { " + j + " }" : j;
    return r = U, t = g, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(I || !g ? "" : g, z);
  }
  return l.use([].concat(a, [function(M, g, I) {
    M === 2 && I.length && I[0].lastIndexOf(t) > 0 && (I[0] = I[0].replace(n, C));
  }, y, function(M) {
    if (M === -2) {
      var g = u;
      return u = [], g;
    }
  }])), v.hash = a.length ? a.reduce(function(M, g) {
    return g.name || Qe(15), lt(M, g.name);
  }, 5381).toString() : "", v;
}
var so = dt.createContext();
so.Consumer;
var io = dt.createContext(), Ds = (io.Consumer, new qt()), bn = $s();
function ao() {
  return tt(so) || Ds;
}
function co() {
  return tt(io) || bn;
}
var lo = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = bn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Qe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = bn), this.name + r.hash;
  }, e;
}(), Es = /([A-Z])/, _s = /([A-Z])/g, Ts = /^ms-/, As = function(e) {
  return "-" + e.toLowerCase();
};
function ur(e) {
  return Es.test(e) ? e.replace(_s, As).replace(Ts, "-ms-") : e;
}
var fr = function(e) {
  return e == null || e === !1 || e === "";
};
function ut(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = ut(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (fr(e))
    return "";
  if (jn(e))
    return "." + e.styledComponentId;
  if ($t(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var d = e(r);
    return process.env.NODE_ENV !== "production" && Nt.isElement(d) && console.warn(vn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ut(d, r, t, n);
  }
  var a;
  return e instanceof lo ? t ? (e.inject(t, n), e.getName(n)) : e : yn(e) ? function l(u, y) {
    var C, v, M = [];
    for (var g in u)
      u.hasOwnProperty(g) && !fr(u[g]) && (Array.isArray(u[g]) && u[g].isCss || $t(u[g]) ? M.push(ur(g) + ":", u[g], ";") : yn(u[g]) ? M.push.apply(M, l(u[g], g)) : M.push(ur(g) + ": " + (C = g, (v = u[g]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || C in Zo ? String(v).trim() : v + "px") + ";"));
    return y ? [y + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var hr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ht(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return $t(e) || yn(e) ? hr(ut(cr(Kt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : hr(ut(cr(e, t)));
}
var pr = /invalid hook call/i, Zt = /* @__PURE__ */ new Set(), uo = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (pr.test(s))
          o = !1, Zt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          n.apply(void 0, [s].concat(c));
        }
      }, ue(), o && !Zt.has(t) && (console.warn(t), Zt.add(t));
    } catch (s) {
      pr.test(s.message) && Zt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, fo = function(e, r, t) {
  return t === void 0 && (t = st), e.theme !== t.theme && e.theme || r || t.theme;
}, Ps = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Is = /(^-|-$)/g;
function an(e) {
  return e.replace(Ps, "-").replace(Is, "");
}
var Vn = function(e) {
  return xn(ro(e) >>> 0);
};
function Vt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var wn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Os = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ls(e, r, t) {
  var n = e[t];
  wn(r) && wn(n) ? ho(n, r) : e[t] = r;
}
function ho(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (wn(i))
      for (var c in i)
        Os(c) && Ls(e, i[c], c);
  }
  return e;
}
var Et = dt.createContext();
Et.Consumer;
function Ys(e) {
  var r = tt(Et), t = Me(function() {
    return function(n, o) {
      if (!n)
        return Qe(14);
      if ($t(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Qe(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Qe(8) : o ? Ge({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? dt.createElement(Et.Provider, { value: t }, e.children) : null;
}
var cn = {};
function po(e, r, t) {
  var n = jn(e), o = !Vt(e), s = r.attrs, i = s === void 0 ? Kt : s, c = r.componentId, d = c === void 0 ? function(U, j) {
    var z = typeof U != "string" ? "sc" : an(U);
    cn[z] = (cn[z] || 0) + 1;
    var f = z + "-" + Vn("5.3.8" + z + cn[z]);
    return j ? j + "-" + f : f;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, l = a === void 0 ? function(U) {
    return Vt(U) ? "styled." + U : "Styled(" + vn(U) + ")";
  }(e) : a, u = r.displayName && r.componentId ? an(r.displayName) + "-" + r.componentId : r.componentId || d, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, C = r.shouldForwardProp;
  n && e.shouldForwardProp && (C = r.shouldForwardProp ? function(U, j, z) {
    return e.shouldForwardProp(U, j, z) && r.shouldForwardProp(U, j, z);
  } : e.shouldForwardProp);
  var v, M = new Cs(t, u, n ? e.componentStyle : void 0), g = M.isStatic && i.length === 0, I = function(U, j) {
    return function(z, f, p, b) {
      var E = z.attrs, S = z.componentStyle, w = z.defaultProps, H = z.foldedComponentIds, X = z.shouldForwardProp, O = z.styledComponentId, T = z.target;
      process.env.NODE_ENV !== "production" && Qn(O);
      var A = function(te, k, G) {
        te === void 0 && (te = st);
        var _ = Ge({}, k, { theme: te }), Q = {};
        return G.forEach(function(Z) {
          var B, m, K, $ = Z;
          for (B in $t($) && ($ = $(_)), $)
            _[B] = Q[B] = B === "className" ? (m = Q[B], K = $[B], m && K ? m + " " + K : m || K) : $[B];
        }), [_, Q];
      }(fo(f, tt(Et), w) || st, f, E), Y = A[0], D = A[1], L = function(te, k, G, _) {
        var Q = ao(), Z = co(), B = k ? te.generateAndInjectStyles(st, Q, Z) : te.generateAndInjectStyles(G, Q, Z);
        return process.env.NODE_ENV !== "production" && Qn(B), process.env.NODE_ENV !== "production" && !k && _ && _(B), B;
      }(S, b, Y, process.env.NODE_ENV !== "production" ? z.warnTooManyClasses : void 0), F = p, re = D.$as || f.$as || D.as || f.as || T, ee = Vt(re), N = D !== f ? Ge({}, f, {}, D) : f, R = {};
      for (var q in N)
        q[0] !== "$" && q !== "as" && (q === "forwardedAs" ? R.as = N[q] : (X ? X(q, nr, re) : !ee || nr(q)) && (R[q] = N[q]));
      return f.style && D.style !== f.style && (R.style = Ge({}, f.style, {}, D.style)), R.className = Array.prototype.concat(H, O, L !== O ? L : null, f.className, D.className).filter(Boolean).join(" "), R.ref = F, Fo(re, R);
    }(v, U, j, g);
  };
  return I.displayName = l, (v = dt.forwardRef(I)).attrs = y, v.componentStyle = M, v.displayName = l, v.shouldForwardProp = C, v.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Kt, v.styledComponentId = u, v.target = n ? e.target : e, v.withComponent = function(U) {
    var j = r.componentId, z = function(p, b) {
      if (p == null)
        return {};
      var E, S, w = {}, H = Object.keys(p);
      for (S = 0; S < H.length; S++)
        E = H[S], b.indexOf(E) >= 0 || (w[E] = p[E]);
      return w;
    }(r, ["componentId"]), f = j && j + "-" + (Vt(U) ? U : an(vn(U)));
    return po(U, Ge({}, z, { attrs: y, componentId: f }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? ho({}, e.defaultProps, U) : U;
  } }), process.env.NODE_ENV !== "production" && (uo(l, u), v.warnTooManyClasses = function(U, j) {
    var z = {}, f = !1;
    return function(p) {
      if (!f && (z[p] = !0, Object.keys(z).length >= 200)) {
        var b = j ? ' with the id of "' + j + '"' : "";
        console.warn("Over 200 classes were generated for component " + U + b + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, z = {};
      }
    };
  }(l, u)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && os(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var Sn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = st), !Nt.isValidElementType(n))
      return Qe(1, String(n));
    var s = function() {
      return t(n, o, ht.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Ge({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Ge({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(po, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Sn[e] = Sn(e);
});
var Rs = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = oo(t), qt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(ut(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && qt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function Ns(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = ht.apply(void 0, [e].concat(t)), s = "sc-global-" + Vn(JSON.stringify(o)), i = new Rs(o, s);
  function c(a) {
    var l = ao(), u = co(), y = tt(Et), C = ue(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && dt.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(C, a, l, y, u), nn(function() {
      if (!l.server)
        return d(C, a, l, y, u), function() {
          return i.removeStyles(C, l);
        };
    }, [C, a, l, y, u]), null;
  }
  function d(a, l, u, y, C) {
    if (i.isStatic)
      i.renderStyles(a, is, u, C);
    else {
      var v = Ge({}, l, { theme: fo(l, y, c.defaultProps) });
      i.renderStyles(a, v, u, C);
    }
  }
  return process.env.NODE_ENV !== "production" && uo(s), dt.memo(c);
}
function je(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = ht.apply(void 0, [e].concat(t)).join(""), s = Vn(o);
  return new lo(s, o);
}
var rn = function() {
  return tt(Et);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const x = Sn;
var ft = {}, Fs = {
  get exports() {
    return ft;
  },
  set exports(e) {
    ft = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ye, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", u = "month", y = "quarter", C = "year", v = "date", M = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, U = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var T = ["th", "st", "nd", "rd"], A = O % 100;
      return "[" + O + (T[(A - 20) % 10] || T[A] || T[0]) + "]";
    } }, j = function(O, T, A) {
      var Y = String(O);
      return !Y || Y.length >= T ? O : "" + Array(T + 1 - Y.length).join(A) + O;
    }, z = { s: j, z: function(O) {
      var T = -O.utcOffset(), A = Math.abs(T), Y = Math.floor(A / 60), D = A % 60;
      return (T <= 0 ? "+" : "-") + j(Y, 2, "0") + ":" + j(D, 2, "0");
    }, m: function O(T, A) {
      if (T.date() < A.date())
        return -O(A, T);
      var Y = 12 * (A.year() - T.year()) + (A.month() - T.month()), D = T.clone().add(Y, u), L = A - D < 0, F = T.clone().add(Y + (L ? -1 : 1), u);
      return +(-(Y + (A - D) / (L ? D - F : F - D)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: u, y: C, w: l, d: a, D: v, h: d, m: c, s: i, ms: s, Q: y }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, f = "en", p = {};
    p[f] = U;
    var b = function(O) {
      return O instanceof H;
    }, E = function O(T, A, Y) {
      var D;
      if (!T)
        return f;
      if (typeof T == "string") {
        var L = T.toLowerCase();
        p[L] && (D = L), A && (p[L] = A, D = L);
        var F = T.split("-");
        if (!D && F.length > 1)
          return O(F[0]);
      } else {
        var re = T.name;
        p[re] = T, D = re;
      }
      return !Y && D && (f = D), D || !Y && f;
    }, S = function(O, T) {
      if (b(O))
        return O.clone();
      var A = typeof T == "object" ? T : {};
      return A.date = O, A.args = arguments, new H(A);
    }, w = z;
    w.l = E, w.i = b, w.w = function(O, T) {
      return S(O, { locale: T.$L, utc: T.$u, x: T.$x, $offset: T.$offset });
    };
    var H = function() {
      function O(A) {
        this.$L = E(A.locale, null, !0), this.parse(A);
      }
      var T = O.prototype;
      return T.parse = function(A) {
        this.$d = function(Y) {
          var D = Y.date, L = Y.utc;
          if (D === null)
            return new Date(NaN);
          if (w.u(D))
            return new Date();
          if (D instanceof Date)
            return new Date(D);
          if (typeof D == "string" && !/Z$/i.test(D)) {
            var F = D.match(g);
            if (F) {
              var re = F[2] - 1 || 0, ee = (F[7] || "0").substring(0, 3);
              return L ? new Date(Date.UTC(F[1], re, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, ee)) : new Date(F[1], re, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, ee);
            }
          }
          return new Date(D);
        }(A), this.$x = A.x || {}, this.init();
      }, T.init = function() {
        var A = this.$d;
        this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
      }, T.$utils = function() {
        return w;
      }, T.isValid = function() {
        return this.$d.toString() !== M;
      }, T.isSame = function(A, Y) {
        var D = S(A);
        return this.startOf(Y) <= D && D <= this.endOf(Y);
      }, T.isAfter = function(A, Y) {
        return S(A) < this.startOf(Y);
      }, T.isBefore = function(A, Y) {
        return this.endOf(Y) < S(A);
      }, T.$g = function(A, Y, D) {
        return w.u(A) ? this[Y] : this.set(D, A);
      }, T.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, T.valueOf = function() {
        return this.$d.getTime();
      }, T.startOf = function(A, Y) {
        var D = this, L = !!w.u(Y) || Y, F = w.p(A), re = function(_, Q) {
          var Z = w.w(D.$u ? Date.UTC(D.$y, Q, _) : new Date(D.$y, Q, _), D);
          return L ? Z : Z.endOf(a);
        }, ee = function(_, Q) {
          return w.w(D.toDate()[_].apply(D.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), D);
        }, N = this.$W, R = this.$M, q = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (F) {
          case C:
            return L ? re(1, 0) : re(31, 11);
          case u:
            return L ? re(1, R) : re(0, R + 1);
          case l:
            var k = this.$locale().weekStart || 0, G = (N < k ? N + 7 : N) - k;
            return re(L ? q - G : q + (6 - G), R);
          case a:
          case v:
            return ee(te + "Hours", 0);
          case d:
            return ee(te + "Minutes", 1);
          case c:
            return ee(te + "Seconds", 2);
          case i:
            return ee(te + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, T.endOf = function(A) {
        return this.startOf(A, !1);
      }, T.$set = function(A, Y) {
        var D, L = w.p(A), F = "set" + (this.$u ? "UTC" : ""), re = (D = {}, D[a] = F + "Date", D[v] = F + "Date", D[u] = F + "Month", D[C] = F + "FullYear", D[d] = F + "Hours", D[c] = F + "Minutes", D[i] = F + "Seconds", D[s] = F + "Milliseconds", D)[L], ee = L === a ? this.$D + (Y - this.$W) : Y;
        if (L === u || L === C) {
          var N = this.clone().set(v, 1);
          N.$d[re](ee), N.init(), this.$d = N.set(v, Math.min(this.$D, N.daysInMonth())).$d;
        } else
          re && this.$d[re](ee);
        return this.init(), this;
      }, T.set = function(A, Y) {
        return this.clone().$set(A, Y);
      }, T.get = function(A) {
        return this[w.p(A)]();
      }, T.add = function(A, Y) {
        var D, L = this;
        A = Number(A);
        var F = w.p(Y), re = function(R) {
          var q = S(L);
          return w.w(q.date(q.date() + Math.round(R * A)), L);
        };
        if (F === u)
          return this.set(u, this.$M + A);
        if (F === C)
          return this.set(C, this.$y + A);
        if (F === a)
          return re(1);
        if (F === l)
          return re(7);
        var ee = (D = {}, D[c] = n, D[d] = o, D[i] = t, D)[F] || 1, N = this.$d.getTime() + A * ee;
        return w.w(N, this);
      }, T.subtract = function(A, Y) {
        return this.add(-1 * A, Y);
      }, T.format = function(A) {
        var Y = this, D = this.$locale();
        if (!this.isValid())
          return D.invalidDate || M;
        var L = A || "YYYY-MM-DDTHH:mm:ssZ", F = w.z(this), re = this.$H, ee = this.$m, N = this.$M, R = D.weekdays, q = D.months, te = function(Q, Z, B, m) {
          return Q && (Q[Z] || Q(Y, L)) || B[Z].slice(0, m);
        }, k = function(Q) {
          return w.s(re % 12 || 12, Q, "0");
        }, G = D.meridiem || function(Q, Z, B) {
          var m = Q < 12 ? "AM" : "PM";
          return B ? m.toLowerCase() : m;
        }, _ = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: N + 1, MM: w.s(N + 1, 2, "0"), MMM: te(D.monthsShort, N, q, 3), MMMM: te(q, N), D: this.$D, DD: w.s(this.$D, 2, "0"), d: String(this.$W), dd: te(D.weekdaysMin, this.$W, R, 2), ddd: te(D.weekdaysShort, this.$W, R, 3), dddd: R[this.$W], H: String(re), HH: w.s(re, 2, "0"), h: k(1), hh: k(2), a: G(re, ee, !0), A: G(re, ee, !1), m: String(ee), mm: w.s(ee, 2, "0"), s: String(this.$s), ss: w.s(this.$s, 2, "0"), SSS: w.s(this.$ms, 3, "0"), Z: F };
        return L.replace(I, function(Q, Z) {
          return Z || _[Q] || F.replace(":", "");
        });
      }, T.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, T.diff = function(A, Y, D) {
        var L, F = w.p(Y), re = S(A), ee = (re.utcOffset() - this.utcOffset()) * n, N = this - re, R = w.m(this, re);
        return R = (L = {}, L[C] = R / 12, L[u] = R, L[y] = R / 3, L[l] = (N - ee) / 6048e5, L[a] = (N - ee) / 864e5, L[d] = N / o, L[c] = N / n, L[i] = N / t, L)[F] || N, D ? R : w.a(R);
      }, T.daysInMonth = function() {
        return this.endOf(u).$D;
      }, T.$locale = function() {
        return p[this.$L];
      }, T.locale = function(A, Y) {
        if (!A)
          return this.$L;
        var D = this.clone(), L = E(A, Y, !0);
        return L && (D.$L = L), D;
      }, T.clone = function() {
        return w.w(this.$d, this);
      }, T.toDate = function() {
        return new Date(this.valueOf());
      }, T.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, T.toISOString = function() {
        return this.$d.toISOString();
      }, T.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), X = H.prototype;
    return S.prototype = X, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", u], ["$y", C], ["$D", v]].forEach(function(O) {
      X[O[1]] = function(T) {
        return this.$g(T, O[0], O[1]);
      };
    }), S.extend = function(O, T) {
      return O.$i || (O(T, H, S), O.$i = !0), S;
    }, S.locale = E, S.isDayjs = b, S.unix = function(O) {
      return S(1e3 * O);
    }, S.en = p[f], S.Ls = p, S.p = {}, S;
  });
})(Fs);
const P = ft, Yt = "reactSchedulerOutsideWrapper", We = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Bs = Ns`

  #${Yt} {
    font-family: ${We};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Yt} *,
 #${Yt} *:before,
 #${Yt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, zs = {
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
}, Hs = {
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
}, At = `
margin: 0;
padding: 0;
`, pt = `
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
const _e = 50, Xe = 24, mt = 16, kt = 40, Qt = kt + mt + Xe, _t = 84, ye = 56, Fe = 196, Ze = 12, Re = 50, Tt = 24, Ft = 16, Cn = 40, Ws = Tt + Ft + Cn, mr = 24, gr = 52, it = {
  topRow: `600 14px ${We}`,
  middleRow: `400 10px ${We}`,
  bottomRow: {
    name: `600 14px ${We}`,
    number: `600 10px ${We}`,
    hoursInDay: `400 9px ${We}`
  }
}, Mt = 3, mo = 12, en = 24, go = "reactSchedulerCanvasHeaderWrapper", yo = "reactSchedulerCanvasWrapper", et = Yt, js = 4, on = 48, ot = 5, Zs = 40, yr = 8, Gn = Xe / 2 + 2, vo = mt / 2 + Xe + 1, vr = 2, Oe = 60, Be = 21, xo = 58, bo = "reactSchedulerBody", xr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Un = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, wo = (e, r) => P(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), So = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Un(e),
  isCurrentDay: e.isSame(P(), "day"),
  year: parseInt(e.format("YYYY"))
}), Xn = (e, r, t, n, o, s, i, c = !1) => {
  s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.mode === "dark" ? i.colors.primary : "#F2F6F4", e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ye);
  const d = i.mode === "dark";
  e.strokeStyle = d ? i.colors.border : "#EEF3F0", e.beginPath(), e.moveTo(r + n - 0.5, t), e.lineTo(r + n - 0.5, t + ye), e.stroke(), e.strokeStyle = d ? i.colors.border : "#E4EAE7", e.beginPath(), e.moveTo(r, t + 0.5), e.lineTo(r + n, t + 0.5), e.stroke(), c && (e.strokeStyle = d ? i.colors.today : "#5C8374", e.beginPath(), e.moveTo(r + 0.5, t), e.lineTo(r + 0.5, t + ye), e.stroke());
}, Kn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Be;
}, Vs = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Kn(i, s);
    for (let d = 0; d <= t; d++) {
      const a = P(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(P(), "day"), u = a.date() === 1;
      Xn(
        e,
        d * _e,
        i * ye + c,
        _e,
        Un(a),
        l,
        o,
        u
      );
    }
  }
}, Gs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Us = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Ze;
  const d = r * ye + s.length * Be;
  for (let a = 0; a <= t; a++) {
    const u = P(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(P(), "week");
    for (let y = 0; y < r; y++) {
      const C = Kn(y, s);
      Xn(e, i, y * ye + C, _t, !0, u, o);
    }
    i += _t;
  }
  for (let a = 0; a < t; a++) {
    const l = wo(n, a) * Ze;
    Gs(e, c, d, o), c += l;
  }
}, Xs = (e, r, t, n, o, s = []) => {
  const i = P(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const d = Kn(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = P() : a > Math.floor(t / 2) ? l = P().add(a - Math.floor(t / 2), "hours") : l = P().subtract(Math.floor(t / 2) - c, "hours");
      const u = i.isSame(P(), "day") && l.isSame(P(), "hour");
      Xn(
        e,
        a * Re + Re / 2 - 0.5,
        c * ye + d,
        Re,
        Un(l),
        u,
        o
      );
    }
  }
}, Ks = (e, r, t, n, o = "group") => {
  const s = t * ye + r * Be, i = e.canvas.width;
  e.fillStyle = o === "subcontract" ? n.colors.subcontractBorder + "40" : o === "warning" ? n.colors.unassignedBorder + "26" : n.mode === "dark" ? n.colors.primary + "80" : "#E9EFEC", e.fillRect(0, s, i, Be);
}, Js = (e, r, t, n, o, s, i = [], c = -1, d = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(yo)) {
    switch (r) {
      case 0:
        Us(e, t, n, o, s, i);
        break;
      case 1:
        Vs(e, t, n, o, s, i);
        break;
      case 2:
        Xs(e, t, n, o, s, i);
        break;
    }
    for (let l = 0; l < i.length; l++) {
      const u = l === c ? "subcontract" : l === d ? "warning" : "group";
      Ks(e, l, i[l], s, u);
    }
    if (r === 1) {
      const l = P(`${o.year}-${o.month + 1}-${o.dayOfMonth}`), u = t * ye + i.length * Be;
      e.strokeStyle = s.mode === "dark" ? s.colors.today : "#5C8374", e.setLineDash([]);
      for (let y = 0; y <= n; y++)
        if (l.add(y, "days").date() === 1) {
          const C = y * _e + 0.5;
          e.beginPath(), e.moveTo(C, 0), e.lineTo(C, u), e.stroke();
        }
    }
  }
};
var kn = {}, qs = {
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
  })(Ye, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(d) {
        if (d === void 0 && (d = null), d !== null)
          return this.add(7 * (d - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var l = i(this).startOf(n).add(1, n).date(a), u = i(this).endOf(t);
          if (l.isBefore(u))
            return 1;
        }
        var y = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), C = this.diff(y, t, !0);
        return C < 0 ? i(this).startOf("week").week() : Math.ceil(C);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(qs);
const Qs = kn;
var Mn = {}, ei = {
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
  })(Ye, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(ei);
const ti = Mn;
var $n = {}, ni = {
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
  })(Ye, function() {
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
        var l, u, y, C, v = i(this), M = (l = this.isoWeekYear(), u = this.$u, y = (u ? s.utc : s)().year(l).startOf("year"), C = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (C += 7), y.add(C, t));
        return v.diff(M, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var d = c.startOf;
      c.startOf = function(a, l) {
        var u = this.$utils(), y = !!u.u(l) || l;
        return u.p(a) === "isoweek" ? y ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : d.bind(this)(a, l);
      };
    };
  });
})(ni);
const ri = $n;
var Dn = {}, oi = {
  get exports() {
    return Dn;
  },
  set exports(e) {
    Dn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ye, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), u = (d = d || "()")[0] === "(", y = d[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(l, c) : !this.isAfter(l, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(oi);
const si = Dn;
var En = {}, ii = {
  get exports() {
    return En;
  },
  set exports(e) {
    En = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ye, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, C = function(f) {
      return f instanceof z;
    }, v = function(f, p, b) {
      return new z(f, b, p.$l);
    }, M = function(f) {
      return n.p(f) + "s";
    }, g = function(f) {
      return f < 0;
    }, I = function(f) {
      return g(f) ? Math.ceil(f) : Math.floor(f);
    }, U = function(f) {
      return Math.abs(f);
    }, j = function(f, p) {
      return f ? g(f) ? { negative: !0, format: "" + U(f) + p } : { negative: !1, format: "" + f + p } : { negative: !1, format: "" };
    }, z = function() {
      function f(b, E, S) {
        var w = this;
        if (this.$d = {}, this.$l = S, b === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E)
          return v(b * y[M(E)], this);
        if (typeof b == "number")
          return this.$ms = b, this.parseFromMilliseconds(), this;
        if (typeof b == "object")
          return Object.keys(b).forEach(function(O) {
            w.$d[M(O)] = b[O];
          }), this.calMilliseconds(), this;
        if (typeof b == "string") {
          var H = b.match(u);
          if (H) {
            var X = H.slice(2).map(function(O) {
              return O != null ? Number(O) : 0;
            });
            return this.$d.years = X[0], this.$d.months = X[1], this.$d.weeks = X[2], this.$d.days = X[3], this.$d.hours = X[4], this.$d.minutes = X[5], this.$d.seconds = X[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var p = f.prototype;
      return p.calMilliseconds = function() {
        var b = this;
        this.$ms = Object.keys(this.$d).reduce(function(E, S) {
          return E + (b.$d[S] || 0) * y[S];
        }, 0);
      }, p.parseFromMilliseconds = function() {
        var b = this.$ms;
        this.$d.years = I(b / a), b %= a, this.$d.months = I(b / l), b %= l, this.$d.days = I(b / c), b %= c, this.$d.hours = I(b / i), b %= i, this.$d.minutes = I(b / s), b %= s, this.$d.seconds = I(b / o), b %= o, this.$d.milliseconds = b;
      }, p.toISOString = function() {
        var b = j(this.$d.years, "Y"), E = j(this.$d.months, "M"), S = +this.$d.days || 0;
        this.$d.weeks && (S += 7 * this.$d.weeks);
        var w = j(S, "D"), H = j(this.$d.hours, "H"), X = j(this.$d.minutes, "M"), O = this.$d.seconds || 0;
        this.$d.milliseconds && (O += this.$d.milliseconds / 1e3);
        var T = j(O, "S"), A = b.negative || E.negative || w.negative || H.negative || X.negative || T.negative, Y = H.format || X.format || T.format ? "T" : "", D = (A ? "-" : "") + "P" + b.format + E.format + w.format + Y + H.format + X.format + T.format;
        return D === "P" || D === "-P" ? "P0D" : D;
      }, p.toJSON = function() {
        return this.toISOString();
      }, p.format = function(b) {
        var E = b || "YYYY-MM-DDTHH:mm:ss", S = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return E.replace(d, function(w, H) {
          return H || String(S[w]);
        });
      }, p.as = function(b) {
        return this.$ms / y[M(b)];
      }, p.get = function(b) {
        var E = this.$ms, S = M(b);
        return S === "milliseconds" ? E %= 1e3 : E = S === "weeks" ? I(E / y[S]) : this.$d[S], E === 0 ? 0 : E;
      }, p.add = function(b, E, S) {
        var w;
        return w = E ? b * y[M(E)] : C(b) ? b.$ms : v(b, this).$ms, v(this.$ms + w * (S ? -1 : 1), this);
      }, p.subtract = function(b, E) {
        return this.add(b, E, !0);
      }, p.locale = function(b) {
        var E = this.clone();
        return E.$l = b, E;
      }, p.clone = function() {
        return v(this.$ms, this);
      }, p.humanize = function(b) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!b);
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
      }, f;
    }();
    return function(f, p, b) {
      t = b, n = b().$utils(), b.duration = function(w, H) {
        var X = b.locale();
        return v(w, { $l: X }, H);
      }, b.isDuration = C;
      var E = p.prototype.add, S = p.prototype.subtract;
      p.prototype.add = function(w, H) {
        return C(w) && (w = w.asMilliseconds()), E.bind(this)(w, H);
      }, p.prototype.subtract = function(w, H) {
        return C(w) && (w = w.asMilliseconds()), S.bind(this)(w, H);
      };
    };
  });
})(ii);
const ai = En;
var ci = "Expected a function", br = 0 / 0, li = "[object Symbol]", di = /^\s+|\s+$/g, ui = /^[-+]0x[0-9a-f]+$/i, fi = /^0b[01]+$/i, hi = /^0o[0-7]+$/i, pi = parseInt, mi = typeof Ye == "object" && Ye && Ye.Object === Object && Ye, gi = typeof self == "object" && self && self.Object === Object && self, yi = mi || gi || Function("return this")(), vi = Object.prototype, xi = vi.toString, bi = Math.max, wi = Math.min, ln = function() {
  return yi.Date.now();
};
function Si(e, r, t) {
  var n, o, s, i, c, d, a = 0, l = !1, u = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(ci);
  r = wr(r) || 0, _n(t) && (l = !!t.leading, u = "maxWait" in t, s = u ? bi(wr(t.maxWait) || 0, r) : s, y = "trailing" in t ? !!t.trailing : y);
  function C(p) {
    var b = n, E = o;
    return n = o = void 0, a = p, i = e.apply(E, b), i;
  }
  function v(p) {
    return a = p, c = setTimeout(I, r), l ? C(p) : i;
  }
  function M(p) {
    var b = p - d, E = p - a, S = r - b;
    return u ? wi(S, s - E) : S;
  }
  function g(p) {
    var b = p - d, E = p - a;
    return d === void 0 || b >= r || b < 0 || u && E >= s;
  }
  function I() {
    var p = ln();
    if (g(p))
      return U(p);
    c = setTimeout(I, M(p));
  }
  function U(p) {
    return c = void 0, y && n ? C(p) : (n = o = void 0, i);
  }
  function j() {
    c !== void 0 && clearTimeout(c), a = 0, n = d = o = c = void 0;
  }
  function z() {
    return c === void 0 ? i : U(ln());
  }
  function f() {
    var p = ln(), b = g(p);
    if (n = arguments, o = this, d = p, b) {
      if (c === void 0)
        return v(d);
      if (u)
        return c = setTimeout(I, r), C(d);
    }
    return c === void 0 && (c = setTimeout(I, r)), i;
  }
  return f.cancel = j, f.flush = z, f;
}
function _n(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Ci(e) {
  return !!e && typeof e == "object";
}
function ki(e) {
  return typeof e == "symbol" || Ci(e) && xi.call(e) == li;
}
function wr(e) {
  if (typeof e == "number")
    return e;
  if (ki(e))
    return br;
  if (_n(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = _n(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(di, "");
  var t = fi.test(e);
  return t || hi.test(e) ? pi(e.slice(2), t ? 2 : 8) : ui.test(e) ? br : +e;
}
var Tn = Si;
const Xt = [0, 1, 2];
var Bt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Bt || {});
const Co = (e) => Xt.includes(e), St = (e) => {
  var n;
  const t = (((n = document.getElementById(et)) == null ? void 0 : n.clientWidth) || 0) - Fe;
  switch (e) {
    case 1:
      return Math.ceil(t / _e) * Mt;
    case 2:
      return Math.ceil(t / Re) * Mt;
    default:
      return Math.ceil(t / _t) * Mt;
  }
}, Mi = (e) => St(e) / Mt, sn = (e, r) => {
  const t = St(r) / 2;
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
}, $i = (e, r) => {
  const t = sn(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Jn = () => {
  var t;
  const e = ((t = document.getElementById(et)) == null ? void 0 : t.clientWidth) || 0;
  return Math.max(0, e - Fe) * Mt;
}, ko = Bn({
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
P.extend(Qs);
P.extend(ti);
P.extend(ri);
P.extend(si);
P.extend(ai);
const Di = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = P(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c,
  toolbarActions: d
}) => {
  const { zoom: a, maxRecordsPerPage: l = 50 } = n, [u, y] = he(a), [C, v] = he(P()), [M, g] = he(null), [I, U] = he(!1), [j, z] = he(St(u)), f = Xt[u] !== Xt[Xt.length - 1], p = u !== 0, b = Me(() => $i(C, u), [C, u]), E = sn(C, u).startDate, S = P(E).dayOfYear(), w = So(E), H = ue(null), X = ue(!1), O = ue(null), [T, A] = he([{ x: 0, y: 0 }]), Y = ce(
    (Z, B = "auto") => {
      var K, $, V, ne;
      const m = Jn();
      switch (Z) {
        case "back":
          return (K = H.current) == null ? void 0 : K.scrollTo({
            behavior: B,
            left: m / 3
          });
        case "forward":
          return ($ = H.current) == null ? void 0 : $.scrollTo({
            behavior: B,
            left: m / 3
          });
        case "middle": {
          const J = m / Mt / 4;
          return (V = H.current) == null ? void 0 : V.scrollTo({
            behavior: B,
            left: m / 2 - J
          });
        }
        default:
          return (ne = H.current) == null ? void 0 : ne.scrollTo({
            behavior: B,
            left: m / 2
          });
      }
    },
    []
  ), D = (Z) => {
    A(Z);
  }, L = ce(
    (Z) => {
      const B = Mi(u);
      let m;
      switch (u) {
        case 0:
          m = B * 7;
          break;
        case 1:
          m = B;
          break;
        case 2:
          m = Math.ceil(B / en);
          break;
      }
      Tn(() => {
        switch ((Z === "forward" || Z === "back") && (X.current = !0), O.current = Z, Z) {
          case "back":
            v(($) => $.subtract(m, "days"));
            break;
          case "forward":
            v(($) => $.add(m, "days"));
            break;
          case "middle":
            v(P());
            break;
        }
        s == null || s(b);
      }, 300)();
    },
    [s, b, u]
  );
  ge(() => {
    O.current && (Y(O.current), O.current = null);
  }, [C, Y]), ge(() => {
    H.current = document.getElementById(et), z(St(u));
  }, [u]), ge(() => {
    const Z = () => z(St(u));
    return window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
  }, [u]), ge(() => {
    s == null || s(b);
  }, [s, b]), ge(() => {
    U(!1);
  }, [o]), ge(() => {
    I || (Y("middle"), U(!0), v(o));
  }, [o, I, Y]);
  const F = () => {
    t || (v(
      (Z) => u === 2 ? Z.add(mr, "hours") : Z.add(vr, "weeks")
    ), s == null || s(b));
  }, re = ce(() => {
    t || L("forward");
  }, [t, L]), ee = () => {
    t || (v(
      (Z) => u === 2 ? Z.subtract(mr, "hours") : Z.subtract(vr, "weeks")
    ), s == null || s(b));
  }, N = ce(() => {
    !I || t || L("back");
  }, [I, t, L]), R = ce(() => {
    t || (O.current = "middle", v(P()), g(null), s == null || s(b));
  }, [t, s, b]), q = ce(
    (Z) => {
      if (t)
        return;
      const B = P(Z).startOf("day");
      B.isValid() && (O.current = "middle", v(B), g(B), s == null || s(b));
    },
    [t, s, b]
  );
  ge(() => {
    if (!M)
      return;
    const Z = () => g(null);
    return document.addEventListener("mousedown", Z, { once: !0 }), () => document.removeEventListener("mousedown", Z);
  }, [M]);
  const te = () => G(u + 1), k = () => G(u - 1), G = (Z) => {
    Co(Z) && (y(Z), z(St(Z)), s == null || s(b));
  }, _ = () => i == null ? void 0 : i(), { Provider: Q } = ko;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: F,
        handleScrollNext: re,
        handleGoPrev: ee,
        handleScrollPrev: N,
        handleGoToday: R,
        goToDate: q,
        zoomIn: te,
        zoomOut: k,
        setZoom: G,
        zoom: u,
        isNextZoom: f,
        isPrevZoom: p,
        date: C,
        jumpDate: M,
        isLoading: t,
        cols: j,
        startDate: w,
        dayOfYear: S,
        toggleDisplayActiveUnits: _,
        tilesCoords: T,
        updateTilesCoords: D,
        recordsThreshold: l,
        onClearFilterData: c,
        suppressNextSlideRef: X,
        toolbarActions: d
      },
      children: r
    }
  );
}, Ke = () => tt(ko), Mo = (e, r, t) => {
  const n = Math.max(0, r), o = Math.max(0, t);
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = o * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = o + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, $o = () => {
  var e;
  return typeof window < "u" && !!((e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Do = (e, r) => {
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
}, Ei = 5, Sr = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > Ei;
}, Ct = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, _i = ({
  data: e,
  baseData: r,
  zoom: t,
  startDate: n,
  onEventDrop: o,
  onEventDrag: s,
  draggableConfig: i = {},
  gridRef: c,
  separatorRowIndices: d = []
}) => {
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((G) => ({ ...G, data: [G.data] })) : r : e, {
    enabled: l = !0,
    isDraggable: u,
    resourceOnly: y = !1,
    isValidDrop: C
  } = i, [v, M] = he("idle"), [g, I] = he(null), [U, j] = he({ x: 0, y: 0 }), [z, f] = he({ width: 0, height: 48 }), [p, b] = he(null), [E, S] = he(!0), w = ue({ x: 0, y: 0 }), H = ue({ x: 0, y: 0 }), X = ue({ x: 0, y: 0 }), O = ue(null), T = ue(null), A = ue(0), Y = ue(null), D = ce(
    (G) => !l || G.draggable === !1 ? !1 : u ? u(G) : !0,
    [l, u]
  ), L = ce(
    (G, _) => {
      const Q = Do(_, d), Z = Math.floor(Q / ye);
      let B;
      switch (t) {
        case 0:
          B = Ze * 7;
          break;
        case 1:
          B = _e;
          break;
        case 2:
          B = Re;
          break;
        default:
          B = _e;
      }
      const m = Math.floor(G / B);
      let K;
      const $ = P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          K = $.add(m * 7, "days").toDate();
          break;
        case 1:
          K = $.add(m, "days").toDate();
          break;
        case 2:
          K = $.add(m, "hours").toDate();
          break;
        default:
          K = $.toDate();
      }
      return { snappedDate: K, snappedResourceIndex: Z };
    },
    [t, n, d]
  ), F = ce(
    (G, _, Q, Z) => {
      const B = [], m = _.getTime(), K = Q.getTime(), $ = a.find((ne) => ne.id === Z);
      if (!$)
        return B;
      const V = [];
      for (const ne of $.data)
        Array.isArray(ne) ? V.push(...ne) : V.push(ne);
      for (const ne of V) {
        if (ne.segmentId === G.segmentId)
          continue;
        const J = ne.startDate.getTime(), le = ne.endDate.getTime();
        if (m >= J && m < le || K > J && K <= le || m <= J && K >= le) {
          const fe = new Date(Math.max(m, J)), ve = new Date(Math.min(K, le)), $e = ve.getTime() - fe.getTime();
          B.push({
            event: ne,
            conflictStart: fe,
            conflictEnd: ve,
            overlapDuration: $e
          });
        }
      }
      return B;
    },
    [a]
  ), re = ce(
    (G, _, Q, Z) => {
      const B = [], m = _.getTime(), K = Q.getTime(), $ = P(_).format("YYYY-MM-DD"), V = a.find((J) => J.id === Z);
      if (!V)
        return B;
      const ne = [];
      for (const J of V.data)
        Array.isArray(J) ? ne.push(...J) : ne.push(J);
      for (const J of ne) {
        if (J.segmentId === G.segmentId)
          continue;
        const le = J.startDate.getTime(), pe = J.endDate.getTime(), fe = P(J.startDate).format("YYYY-MM-DD"), ve = P(J.endDate).format("YYYY-MM-DD"), $e = P(Q).format("YYYY-MM-DD");
        if (!(fe === $ || ve === $ || fe === $e || ve === $e || P(J.startDate).isBefore(_, "day") && P(J.endDate).isAfter(Q, "day")) || m >= le && m < pe || K > le && K <= pe || m <= le && K >= pe)
          continue;
        let me, Ae;
        pe <= m ? (me = m - pe, Ae = "before") : (me = le - K, Ae = "after"), B.push({
          event: J,
          timeGap: me,
          position: Ae
        });
      }
      return B.sort((J, le) => J.timeGap - le.timeGap);
    },
    [a]
  ), ee = ce(
    (G, _, Q) => {
      const Z = L(_, Q);
      let B, m;
      if (y)
        B = G.startDate, m = G.endDate;
      else {
        const pe = P(G.endDate).diff(G.startDate);
        B = Z.snappedDate, m = P(B).add(pe, "milliseconds").toDate();
      }
      let K = 0, $ = "", V;
      for (const pe of e) {
        const fe = Math.max(pe.data.length, 1);
        if (Z.snappedResourceIndex < K + fe) {
          $ = pe.id, V = pe.capacity;
          break;
        }
        K += fe;
      }
      if (!$)
        return null;
      let ne = !0;
      V !== void 0 && G.totalPassengers !== void 0 && (ne = G.totalPassengers <= V);
      const J = F(G, B, m, $), le = J.length === 0 ? re(G, B, m, $) : [];
      return {
        startDate: B,
        endDate: m,
        resourceId: $,
        resourceIndex: Z.snappedResourceIndex,
        resourceCapacity: V,
        hasCapacity: ne,
        conflicts: J,
        hasConflict: J.length > 0,
        nearbyEvents: le
      };
    },
    [L, e, y, F, re]
  ), N = ce(
    (G, _) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - A.current < 100)
        return;
      A.current = Q;
      const Z = {
        event: G,
        currentStartDate: _.startDate,
        currentEndDate: _.endDate,
        currentResourceId: _.resourceId,
        conflicts: _.conflicts
      };
      s(Z);
    },
    [s]
  ), R = ce(
    (G, _) => {
      if (!D(G) || !c.current)
        return;
      _.preventDefault(), _.stopPropagation();
      const Q = _.target.closest('[style*="left"]');
      let Z = 0, B = 0;
      Q && Q.style.left && Q.style.top && (Z = parseInt(Q.style.left), B = parseInt(Q.style.top));
      const m = Ct(
        _.clientX,
        _.clientY,
        c.current
      );
      w.current = { x: Z, y: B }, H.current = { x: _.clientX, y: _.clientY }, X.current = {
        x: m.x - Z,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, Y.current = {
        startDate: G.startDate,
        endDate: G.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const V of e) {
        for (const ne of V.data)
          if (ne.some((J) => J.segmentId === G.segmentId)) {
            Y.current.resourceId = V.id;
            break;
          }
        if (Y.current.resourceId)
          break;
      }
      I(G), M("potential"), j({ x: Z, y: B });
      let K = 100, $ = 48;
      if (Q) {
        const V = Q.getBoundingClientRect();
        K = V.width, $ = V.height;
      }
      f({ width: K, height: $ });
    },
    [D, c, e, t]
  ), q = ce(
    (G) => {
      if (!c.current)
        return;
      let _ = c.current;
      for (; _ && _ !== document.body; ) {
        const J = window.getComputedStyle(_);
        if (_.scrollHeight > _.clientHeight && (J.overflowY === "auto" || J.overflowY === "scroll" || J.overflow === "auto" || J.overflow === "scroll"))
          break;
        _ = _.parentElement;
      }
      (!_ || _ === document.body) && (_ = document.documentElement);
      const Q = _.getBoundingClientRect(), Z = G.clientY, B = 50, m = 12, K = Z - Q.top, $ = Q.bottom - Z;
      let V = !1, ne = 0;
      K < B && K > 0 ? (V = !0, ne = -m * (1 - K / B)) : $ < B && $ > 0 && (V = !0, ne = m * (1 - $ / B)), V ? (T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => {
        _.scrollTop += ne, v === "dragging" && q(G);
      })) : T.current && (cancelAnimationFrame(T.current), T.current = null);
    },
    [c, v]
  ), te = ce(
    (G) => {
      if (v === "idle" || v === "animating" || !g || !c.current)
        return;
      const _ = { x: G.clientX, y: G.clientY };
      if (v === "potential")
        if (Sr(H.current, _))
          M("dragging");
        else
          return;
      q(G);
      const Q = Ct(
        G.clientX,
        G.clientY,
        c.current
      );
      O.current && cancelAnimationFrame(O.current), O.current = requestAnimationFrame(() => {
        const Z = {
          x: Q.x - X.current.x,
          y: Q.y - X.current.y
        };
        j(Z);
        const B = ee(g, Q.x, Q.y);
        if (B && C) {
          const m = {
            event: g,
            currentStartDate: B.startDate,
            currentEndDate: B.endDate,
            currentResourceId: B.resourceId,
            conflicts: B.conflicts
          };
          B.hasConflict = !C(m);
        }
        if (b(B), B) {
          const m = B.hasCapacity !== !1;
          S(m), N(g, B);
        }
      });
    },
    [v, g, c, ee, N, C, q]
  ), k = ce(
    async (G) => {
      if (v === "idle" || v === "animating")
        return;
      const _ = { x: G.clientX, y: G.clientY };
      if (!Sr(H.current, _) || v === "potential") {
        M("idle"), I(null), b(null);
        return;
      }
      if (!g || !p || !Y.current) {
        M("idle"), I(null), b(null);
        return;
      }
      if (p.hasCapacity === !1) {
        S(!1), M("animating"), j(w.current), setTimeout(() => {
          M("idle"), I(null), b(null), S(!0);
        }, 300);
        return;
      }
      const Z = {
        event: g,
        originalStartDate: Y.current.startDate,
        originalEndDate: Y.current.endDate,
        originalResourceId: Y.current.resourceId,
        newStartDate: p.startDate,
        newEndDate: p.endDate,
        newResourceId: p.resourceId,
        hasConflict: p.hasConflict,
        conflicts: p.conflicts
      };
      let B = !0;
      if (o)
        try {
          const m = o(Z);
          B = m instanceof Promise ? await m : m;
        } catch {
          B = !1;
        }
      B ? (S(!0), M("idle"), I(null), b(null)) : (S(!1), M("animating"), j(w.current), setTimeout(() => {
        M("idle"), I(null), b(null), S(!0);
      }, 300));
    },
    [v, g, p, o, C]
  );
  return ge(() => {
    if (v === "potential" || v === "dragging") {
      const G = (Q) => te(Q), _ = (Q) => k(Q);
      return document.addEventListener("mousemove", G), document.addEventListener("mouseup", _), () => {
        document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", _);
      };
    } else
      return () => {
      };
  }, [v, te, k]), ge(() => () => {
    O.current && (cancelAnimationFrame(O.current), O.current = null), T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), ge(() => {
    (v === "idle" || v === "animating") && (O.current && (cancelAnimationFrame(O.current), O.current = null), T.current && (cancelAnimationFrame(T.current), T.current = null));
  }, [v]), ge(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (M("animating"), j(w.current), setTimeout(() => {
      M("idle"), I(null), b(null);
    }, 300)) : (M("idle"), I(null), b(null)));
  }, [t]), ge(() => {
    if ((v === "dragging" || v === "potential") && g) {
      let G = !1;
      for (const _ of e) {
        for (const Q of _.data)
          if (Q.some((Z) => Z.segmentId === g.segmentId)) {
            G = !0;
            break;
          }
        if (G)
          break;
      }
      G || (v === "dragging" ? (M("animating"), j(w.current), setTimeout(() => {
        M("idle"), I(null), b(null);
      }, 300)) : (M("idle"), I(null), b(null)));
    }
  }, [e, v, g]), {
    dragState: v,
    draggedEvent: g,
    ghostPosition: U,
    ghostDimensions: z,
    dropTarget: p,
    isValidDrop: E,
    handleDragStart: R,
    isDraggable: D,
    draggingEventId: (g == null ? void 0 : g.segmentId) || null,
    resourceOnly: y
  };
}, Ti = ({
  data: e,
  baseData: r,
  zoom: t,
  startDate: n,
  onTimeRangeSelect: o,
  onMultiTimeRangeSelect: s,
  clickToAddConfig: i = {},
  gridRef: c,
  isDragging: d,
  separatorRowIndices: a = []
}) => {
  const { enabled: l = !1, isSelectable: u } = i, y = l && !!o, C = ce((m) => {
    let K = 0;
    for (const $ of a)
      $ <= m && K++;
    return m * ye + K * Be;
  }, [a]), [v, M] = he("idle"), [g, I] = he(null), [U, j] = he(null), [z, f] = he(null), [p, b] = he(!1), [E, S] = he([]), [w, H] = he(!1), X = ue(null), O = ue(null), T = ue(null), A = ue(null), Y = ce(() => {
    switch (t) {
      case 0:
        return Ze * 7;
      case 1:
        return _e;
      case 2:
        return Re;
      default:
        return _e;
    }
  }, [t]), D = ce(
    (m) => {
      const K = Y(), $ = Math.floor(m / K), V = P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return V.add($ * 7, "days").toDate();
        case 1:
          return V.add($, "days").toDate();
        case 2:
          return V.add($, "hours").toDate();
        default:
          return V.toDate();
      }
    },
    [t, n, Y]
  ), L = ce(
    (m) => {
      const K = Do(m, a), $ = Math.floor(K / ye);
      let V = 0;
      for (const ne of e) {
        const J = Math.max(ne.data.length, 1);
        if ($ < V + J)
          return {
            resourceId: ne.id,
            resourceIndex: $,
            resourceLabel: ne.label
          };
        V += J;
      }
      return null;
    },
    [e, a]
  ), F = ce(
    (m) => {
      const K = Y();
      return Math.floor(m / K) * K;
    },
    [Y]
  ), re = ce(
    (m, K, $, V = []) => {
      const ne = [], le = (r || e).find((ve) => ve.id === m), pe = K.getTime(), fe = $.getTime();
      if (le) {
        const ve = le.data[0], $e = ve && Array.isArray(ve) ? le.data.flat() : le.data;
        for (const ke of $e) {
          const se = new Date(ke.startDate).getTime(), me = new Date(ke.endDate).getTime();
          if (pe < me && fe > se) {
            const Ae = new Date(Math.max(pe, se)), ze = new Date(Math.min(fe, me)), Pe = ze.getTime() - Ae.getTime();
            ne.push({
              event: ke,
              conflictStart: Ae,
              conflictEnd: ze,
              overlapDuration: Pe
            });
          }
        }
      }
      for (const ve of V) {
        if (ve.resourceId !== m)
          continue;
        const $e = ve.startDate.getTime(), ke = ve.endDate.getTime();
        if (pe < ke && fe > $e) {
          const se = new Date(Math.max(pe, $e)), me = new Date(Math.min(fe, ke)), Ae = me.getTime() - se.getTime(), ze = {
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
            conflictEnd: me,
            overlapDuration: Ae
          });
        }
      }
      return ne;
    },
    [e, r]
  ), ee = ce(
    (m) => {
      if (!y || d || !c.current || m.button !== 0)
        return;
      const K = m.target;
      if (K.closest("[data-segment-id]") || K.closest("[data-multi-select-ui]"))
        return;
      const $ = Ct(m.clientX, m.clientY, c.current), V = L($.y);
      if (!V)
        return;
      X.current = { x: m.clientX, y: m.clientY }, O.current = V.resourceIndex;
      const ne = F($.x), J = Y(), le = C(V.resourceIndex);
      I($), j($), f({
        x: ne,
        y: le,
        width: J,
        height: ye
      }), M("selecting");
    },
    [y, d, c, L, F, Y, C]
  ), N = ce(
    (m) => {
      j(m);
      const K = Y(), $ = F((g == null ? void 0 : g.x) || 0), V = F(m.x), ne = C(O.current), J = Math.min($, V), le = Math.max($, V) + K;
      f({ x: J, y: ne, width: le - J, height: ye });
    },
    [g, Y, F, C]
  ), R = ce(() => {
    A.current && (cancelAnimationFrame(A.current), A.current = null);
  }, []), q = ce(
    (m, K) => {
      const $ = document.getElementById(et);
      if (!$ || !c.current)
        return;
      const V = $.getBoundingClientRect(), ne = 60, J = 12, le = m - (V.left + Fe), pe = V.right - m;
      let fe = 0;
      le < ne ? fe = -J * (1 - Math.max(0, le) / ne) : pe < ne && (fe = J * (1 - Math.max(0, pe) / ne)), R(), fe !== 0 && (A.current = requestAnimationFrame(() => {
        $.scrollLeft += fe, N(Ct(m, K, c.current)), q(m, K);
      }));
    },
    [c, N, R]
  ), te = ce(
    (m) => {
      if (v !== "selecting" || !c.current || O.current === null)
        return;
      const K = Ct(m.clientX, m.clientY, c.current);
      T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => N(K)), q(m.clientX, m.clientY);
    },
    [v, c, N, q]
  ), k = ce(
    (m) => {
      if (v !== "selecting")
        return;
      if (R(), !c.current || !g || !X.current) {
        M("idle"), I(null), j(null), f(null);
        return;
      }
      const K = Ct(m.clientX, m.clientY, c.current), $ = L(g.y);
      if (!$) {
        M("idle"), I(null), j(null), f(null);
        return;
      }
      const V = Math.min(g.x, K.x), ne = Math.max(g.x, K.x), J = D(V), le = D(ne), pe = P(le).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (u && !u($.resourceId, J, pe)) {
        M("idle"), I(null), j(null), f(null);
        return;
      }
      const fe = re(
        $.resourceId,
        J,
        pe,
        E
      ), ve = fe.length > 0, $e = {
        startDate: J,
        endDate: pe,
        resourceId: $.resourceId,
        resourceLabel: $.resourceLabel,
        zoomLevel: t,
        hasConflict: ve,
        conflicts: ve ? fe : void 0
      };
      if (p)
        S((ke) => [...ke, $e]), H(!0);
      else if (o) {
        const ke = o($e), se = (me) => {
          me != null && me.continueMultiSelect && (b(!0), S([$e]), H(!0));
        };
        ke instanceof Promise ? ke.then(se) : se(ke);
      }
      M("idle"), I(null), j(null), f(null), X.current = null, O.current = null;
    },
    [
      v,
      c,
      g,
      L,
      D,
      u,
      o,
      t,
      p,
      re,
      E,
      R
    ]
  ), G = ce(() => {
    if (E.length > 0 && s) {
      H(!1);
      const m = s(E), K = ($) => {
        $ != null && $.continueMultiSelect ? H(!0) : (S([]), b(!1), H(!1));
      };
      m instanceof Promise ? m.then(K) : K(m);
      return;
    }
    S([]), b(!1), H(!1);
  }, [E, s]), _ = ce(() => {
    S([]), b(!1), H(!1);
  }, []), Q = ce((m) => {
    S((K) => {
      const $ = K.filter((V, ne) => ne !== m);
      return $.length === 0 && (b(!1), H(!1)), $;
    });
  }, []), Z = ce(
    (m, K) => {
      S(($) => $.map((V, ne) => {
        if (ne !== m)
          return V;
        const J = { ...V, ...K }, le = $.filter((fe, ve) => ve !== m), pe = re(
          J.resourceId,
          J.startDate,
          J.endDate,
          le
        );
        return {
          ...J,
          hasConflict: pe.length > 0,
          conflicts: pe.length > 0 ? pe : void 0
        };
      }));
    },
    [re]
  ), B = ce(
    (m) => {
      m.key === "Escape" && (v === "selecting" ? (R(), M("idle"), I(null), j(null), f(null), X.current = null, O.current = null) : p && E.length > 0 && (S([]), b(!1), H(!1)));
    },
    [v, p, E.length, R]
  );
  return ge(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", k), document.addEventListener("keydown", B), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", k), document.removeEventListener("keydown", B);
      };
  }, [v, te, k, B]), ge(() => {
    if (p && E.length > 0)
      return document.addEventListener("keydown", B), () => {
        document.removeEventListener("keydown", B);
      };
  }, [p, E.length, B]), ge(() => () => {
    T.current && (cancelAnimationFrame(T.current), T.current = null), R();
  }, [R]), ge(() => {
    d && v === "selecting" && (R(), M("idle"), I(null), j(null), f(null), X.current = null, O.current = null);
  }, [d, v, R]), {
    selectionState: v,
    selectionStart: g,
    selectionEnd: U,
    selectionBox: z,
    handleGridMouseDown: ee,
    isEnabled: y,
    pendingSelections: E,
    confirmSelections: G,
    clearSelections: _,
    removeSelection: Q,
    updateSelection: Z,
    isMultiSelectActive: p,
    hasUnconfirmedSelections: w
  };
}, Ai = x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, Pi = x.div`
  position: relative;
`, Ii = x.canvas``;
x.canvas``;
const Oi = x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, Cr = x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Li = zn(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onTileContextMenu: i, onEventDrop: c, onEventDrag: d, draggableConfig: a, onDragStateChange: l, onTimeRangeSelect: u, onMultiTimeRangeSelect: y, clickToAddConfig: C, separatorRowIndices: v = [], subcontractSeparatorIndex: M = -1, warningSeparatorIndex: g = -1, fadingUnitIds: I }, U) {
  const j = ue(!1), { handleScrollNext: z, handleScrollPrev: f, date: p, isLoading: b, cols: E, startDate: S, suppressNextSlideRef: w, config: H } = Ke(), X = ue(null), O = ue(null), T = ue(t), A = ue(p), Y = ue(null), D = ue(null), L = ue(null), F = ue(null), [re, ee] = he(!1), N = rn(), {
    dragState: R,
    draggedEvent: q,
    ghostPosition: te,
    ghostDimensions: k,
    dropTarget: G,
    isValidDrop: _,
    handleDragStart: Q,
    isDraggable: Z,
    draggingEventId: B,
    resourceOnly: m
  } = _i({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: S,
    onEventDrop: c,
    onEventDrag: d,
    draggableConfig: a,
    gridRef: F,
    separatorRowIndices: v
  });
  ge(() => {
    const xe = R === "dragging" || R === "potential";
    ee(xe), l && l(xe);
  }, [R, l]);
  const K = ue(!1), $ = ue(p), V = ue(null);
  ge(() => {
    var de;
    const xe = $.current;
    if ($.current = p, !K.current) {
      K.current = !0;
      return;
    }
    if (w != null && w.current) {
      w.current = !1;
      return;
    }
    const Ee = F.current;
    if (!(Ee != null && Ee.animate))
      return;
    const Ie = p.isAfter(xe) ? 48 : -48;
    (de = V.current) == null || de.cancel(), Ee.style.willChange = "transform";
    const Le = Ee.animate(
      [
        { transform: `translateX(${Ie}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), ie = () => {
      Ee.style.willChange = "";
    };
    Le.onfinish = ie, Le.oncancel = ie, V.current = Le;
  }, [p, w]);
  const {
    selectionState: ne,
    selectionBox: J,
    handleGridMouseDown: le,
    pendingSelections: pe,
    confirmSelections: fe,
    clearSelections: ve,
    removeSelection: $e,
    updateSelection: ke,
    isMultiSelectActive: se,
    hasUnconfirmedSelections: me
  } = Ti({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: S,
    onTimeRangeSelect: u,
    onMultiTimeRangeSelect: y,
    clickToAddConfig: C,
    gridRef: F,
    isDragging: re,
    separatorRowIndices: v
  }), Ae = ce((xe) => {
    xe.preventDefault();
  }, []), ze = ce((xe) => {
    xe.preventDefault();
  }, []), Pe = v.length * Be, gt = ce(
    (xe) => {
      const Ee = Jn(), Ie = t * ye + 1 + Pe;
      Mo(xe, Ee, Ie), Js(xe, r, t, E, S, N, v, M, g);
    },
    [E, S, t, r, N, v, M, g, Pe]
  );
  return ge(() => {
    if (!X.current)
      return;
    const xe = X.current.getContext("2d");
    if (!xe)
      return;
    const Ee = () => gt(xe);
    return window.addEventListener("resize", Ee), () => window.removeEventListener("resize", Ee);
  }, [gt]), ge(() => {
    var ae;
    const xe = T.current, Ee = A.current;
    if (T.current = t, A.current = p, xe === t || !p.isSame(Ee, "day") || $o())
      return;
    const Ie = X.current, Le = O.current;
    if (!Ie || !Le || Ie.width === 0 || Ie.height === 0)
      return;
    const ie = Le.getContext("2d");
    if (!ie)
      return;
    Le.width = Ie.width, Le.height = Ie.height, Le.style.width = Ie.style.width, Le.style.height = Ie.style.height, ie.setTransform(1, 0, 0, 1, 0, 0), ie.clearRect(0, 0, Le.width, Le.height), ie.drawImage(Ie, 0, 0), (ae = Y.current) == null || ae.cancel(), Le.style.opacity = "1";
    const de = Le.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    de.onfinish = () => {
      Le.style.opacity = "0";
    }, Y.current = de;
  }, [t, p]), ge(() => {
    const xe = X.current;
    if (!xe)
      return;
    xe.style.letterSpacing = "1px";
    const Ee = xe.getContext("2d");
    Ee && gt(Ee);
  }, [p, t, r, gt]), ge(() => {
    if (!D.current)
      return;
    const xe = new IntersectionObserver(
      (Ee) => {
        Ee[0].isIntersecting && !j.current && (j.current = !0, z(), setTimeout(() => {
          j.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(et) }
    );
    return xe.observe(D.current), () => {
      xe.disconnect();
    };
  }, [z]), ge(() => {
    if (!L.current)
      return;
    const xe = new IntersectionObserver(
      (Ee) => {
        Ee[0].isIntersecting && !j.current && (j.current = !0, f(), setTimeout(() => {
          j.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(et),
        rootMargin: `0px 0px 0px -${Fe}px`
      }
    );
    return xe.observe(L.current), () => {
      xe.disconnect();
    };
  }, [f]), /* @__PURE__ */ W(Ai, { id: yo, children: [
    /* @__PURE__ */ W(
      Pi,
      {
        ref: (xe) => {
          typeof U == "function" ? U(xe) : U && (U.current = xe), F.current = xe;
        },
        onMouseDown: le,
        style: { cursor: u ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(Cr, { position: "left", ref: L }),
          /* @__PURE__ */ h(Nn, { isLoading: b, position: "left" }),
          /* @__PURE__ */ h(
            Ii,
            {
              ref: X,
              onDragStart: Ae,
              onDragOver: ze,
              style: { userSelect: R === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(Oi, { ref: O, "aria-hidden": !0 }),
          /* @__PURE__ */ h(ou, { zoom: r, startDate: S }),
          /* @__PURE__ */ h(cu, { zoom: r, startDate: S }),
          /* @__PURE__ */ h(
            cd,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onTileContextMenu: i,
              onDragStart: Q,
              isDraggable: Z,
              draggingEventId: B,
              separatorRowIndices: v,
              fadingUnitIds: I,
              highlightedSegmentId: (H == null ? void 0 : H.highlightedSegmentId) ?? null,
              focusedUnitIds: (H == null ? void 0 : H.focusedUnitIds) ?? null,
              leavingSegmentIds: (H == null ? void 0 : H.leavingSegmentIds) ?? null,
              ghostProject: (H == null ? void 0 : H.ghostProject) ?? null
            }
          ),
          /* @__PURE__ */ h(Cr, { ref: D, position: "right" }),
          /* @__PURE__ */ h(Nn, { isLoading: b, position: "right" }),
          (R === "dragging" || R === "animating") && /* @__PURE__ */ h(
            Ld,
            {
              draggedEvent: q,
              ghostPosition: te,
              ghostDimensions: k,
              dropTarget: G,
              isValidDrop: _,
              dragState: R,
              zoom: r,
              data: n,
              resourceOnly: m,
              separatorRowIndices: v
            }
          ),
          /* @__PURE__ */ h(
            Fd,
            {
              selectionBox: J,
              isSelecting: ne === "selecting"
            }
          ),
          se && pe.length > 0 && /* @__PURE__ */ h(
            tu,
            {
              selections: pe,
              data: n,
              zoom: r,
              startDate: S,
              onRemove: $e,
              onUpdate: ke,
              separatorRowIndices: v
            }
          )
        ]
      }
    ),
    se && me && pe.length > 0 && /* @__PURE__ */ h(
      Ud,
      {
        selections: pe,
        onConfirm: fe,
        onClear: ve,
        onRemove: $e
      }
    )
  ] });
}), Eo = (e) => {
  const r = P.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, _o = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Oe);
    t += o.hours + s, n += r % Oe, n >= Oe && (t++, n -= Oe);
  }), { hours: t, minutes: n };
}, To = (e, r) => {
  let t = yr;
  switch (r) {
    case 0:
      t = Zs;
      break;
    case 1:
      t = yr;
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
}, Yi = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const l = P(a.startDate).isoWeek(), u = P(a.startDate).isoWeekday(), y = P(a.endDate).isoWeek(), C = P(a.endDate).isoWeekday(), { hours: v, minutes: M } = Eo(a.occupancy);
    if (n === l) {
      const g = (ot + 1 - u) * v, I = (ot + 1 - u) * M;
      return { hours: Math.max(0, g), minutes: I };
    } else if (n === y) {
      const g = C > ot ? ot * v : C * v, I = C > ot ? ot * M : C * M;
      return { hours: g, minutes: I };
    } else if (P(r).isBetween(a.startDate, a.endDate))
      return { hours: ot * v, minutes: ot * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = _o(o), { free: c, overtime: d } = To({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, Ri = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((l) => {
    const { hours: u, minutes: y } = Eo(l.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = _o(s), { free: d, overtime: a } = To({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, Ni = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const d = P(c.startDate).hour(), a = P(c.endDate).hour(), l = r.hour(), u = P(c.endDate).minute(), y = P(c.startDate).minute();
    d < l && a > l ? t += Oe : d === l && a === l && y && u ? t += u ? u - y : Oe - y : d === l && a >= l ? t += y ? Oe - y : Oe : a === l && u && (t += u);
  });
  const n = Math.floor(t / Oe), o = t % Oe, s = n || o ? 0 : 1, i = n ? 0 : o ? Oe - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Fi = (e, r, t, n, o = !1) => {
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
      return Ri(s, t, n, o);
    case 2:
      return Ni(s, t);
    default:
      return Yi(s, t, n);
  }
}, Bi = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = _t;
      break;
    case 1:
      c = "days", d = _e;
      break;
    case 2:
      c = "hours", d = Re;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = P(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), u = Math.ceil(t.y / ye), y = n.findIndex((I, U, j) => j.slice(0, U + 1).reduce((f, p) => f + p, 0) >= u), C = s === 2 ? (a + 1) * d : a * d, v = (u - 1) * ye + ye, M = Fi(
    o[y],
    y,
    l,
    s,
    i
  ), g = P(e.startDate).isSame(P(e.endDate), "day");
  return {
    coords: { x: C, y: v },
    mouseCoords: t,
    resourceIndex: y,
    disposition: M,
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
function zi(e, r) {
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
function Hi(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && !l.isUnassigned && l.capacity != null && t.add(l.capacity);
  const n = [...t].sort((l, u) => l - u);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = zi(n, o), i = [];
  let c = 0;
  for (const l of s)
    i.push({
      min: n[c],
      max: n[l - 1],
      values: n.slice(c, l)
    }), c = l;
  i.push({
    min: n[c],
    max: n[n.length - 1],
    values: n.slice(c)
  });
  const d = [], a = /* @__PURE__ */ new Map();
  return i.forEach((l, u) => {
    const y = "__auto_cat_" + u, C = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: y, name: C, minPassengers: l.min, maxPassengers: l.max });
    for (const v of l.values)
      a.set(v, y);
  }), { categories: d, capacityToCategoryId: a };
}
const Wi = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return r.length > n ? (r.forEach((d, a) => {
    const l = {
      id: e[a].id,
      label: e[a].label,
      data: d,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      isUnassigned: e[a].isUnassigned,
      categoryId: e[a].categoryId
    };
    c >= n && (o.push(i), s += i.length, i = [], c = 0), c++, i.push(l);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((d, a) => {
    const l = {
      id: e[a + s].id,
      label: e[a + s].label,
      data: d,
      capacity: e[a + s].capacity,
      isSubcontract: e[a + s].isSubcontract,
      isUnassigned: e[a + s].isUnassigned,
      categoryId: e[a + s].categoryId
    };
    i.push(l), a === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((d, a) => {
    const l = {
      id: e[a].id,
      label: e[a].label,
      data: d,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      isUnassigned: e[a].isUnassigned,
      categoryId: e[a].categoryId
    };
    i.push(l);
  }), o.push(i), o);
};
var An = {}, ji = {
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
  })(Ye, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(ji);
const Zi = An;
var Pn = {}, Vi = {
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
  })(Ye, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Vi);
const Gi = Pn, Ui = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = P(t.startDate).startOf("day"), d = P(t.endDate).startOf("day"), a = P(o[i].startDate).startOf("day"), l = P(o[i].endDate).startOf("day");
          if (c.isBetween(a, l, null, "[]") || d.isBetween(a, l, null, "[]") || c.isBefore(a, "minute") && d.isAfter(l, "minute") || c.isAfter(a, "minute") && d.isBefore(l, "minute")) {
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
P.extend(Zi);
P.extend(Gi);
const kr = /* @__PURE__ */ new WeakMap(), Xi = (e) => {
  const r = kr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = P(o.startDate), c = P(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), n = Ui(t);
  return kr.set(e, n), n;
}, Ki = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = Xi(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Ji = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, qi = (e) => {
  const { recordsThreshold: r } = Ke(), [t, n] = he(0), [o, s] = he(0), i = ue(null);
  ge(() => {
    i.current = document.getElementById(et);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = Me(() => Ki(e), [e]), a = Me(
    () => Wi(e, c, d, r),
    [e, c, r, d]
  ), l = ce(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((g) => g + a[Math.max(o, 0)].length), s((g) => Math.min(g + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = ce(() => {
    a[o].length && (n((g) => Math.max(g - a[o - 1].length, 0)), s((g) => Math.max(g - 1, 0)));
  }, [o, a]), y = ce(() => {
    n(0), s(0);
  }, []), C = t + a[o].length, v = Me(
    () => d.slice(t, C),
    [C, d, t]
  ), M = Me(
    () => c.slice(t, C),
    [C, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: v,
    totalRowsPerPage: Ji(a[o]),
    next: l,
    previous: u,
    reset: y
  };
};
var In = {}, Qi = {
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
  })(Ye, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Qi);
const ea = In;
var On = {}, ta = {
  get exports() {
    return On;
  },
  set exports(e) {
    On = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ft);
  })(Ye, function(t) {
    function n(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = n(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, C, v) {
      var M = y + " ";
      switch (v) {
        case "m":
          return C ? "minuta" : "minutę";
        case "mm":
          return M + (s(y) ? "minuty" : "minut");
        case "h":
          return C ? "godzina" : "godzinę";
        case "hh":
          return M + (s(y) ? "godziny" : "godzin");
        case "MM":
          return M + (s(y) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(y) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(y, C) {
      return a.test(C) ? c[y.month()] : d[y.month()];
    };
    l.s = d, l.f = c;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(y) {
      return y + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(u, null, !0), u;
  });
})(ta);
const na = On;
var Ln = {}, ra = {
  get exports() {
    return Ln;
  },
  set exports(e) {
    Ln = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ft);
  })(Ye, function(t) {
    function n(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(d, a, l) {
      var u = s[l];
      return Array.isArray(u) && (u = u[a ? 0 : 1]), u.replace("%d", d);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(ra);
const oa = Ln;
var Yn = {}, sa = {
  get exports() {
    return Yn;
  },
  set exports(e) {
    Yn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ft);
  })(Ye, function(t) {
    function n(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, d = function(l, u) {
      return c.test(u) ? s[l.month()] : i[l.month()];
    };
    d.s = i, d.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: d, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(sa);
const ia = Yn;
var Rn = {}, aa = {
  get exports() {
    return Rn;
  },
  set exports(e) {
    Rn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ft);
  })(Ye, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(aa);
const ca = Rn, la = {
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
}, da = {
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
}, ua = {
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
}, fa = {
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
}, ha = {
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
}, pa = [
  {
    id: "en",
    lang: ua,
    translateCode: "en-GB",
    dayjsTranslations: ea
  },
  {
    id: "pl",
    lang: da,
    translateCode: "pl-PL",
    dayjsTranslations: na
  },
  {
    id: "es",
    lang: la,
    translateCode: "es-ES",
    dayjsTranslations: ca
  },
  {
    id: "lt",
    lang: ha,
    translateCode: "lt-LT",
    dayjsTranslations: ia
  },
  {
    id: "de",
    lang: fa,
    translateCode: "de-DE",
    dayjsTranslations: oa
  }
];
class ma {
  constructor() {
    qn(this, "locales", pa);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const tn = new ma(), Ao = Bn({
  localesData: tn.getLocales(),
  currentLocale: tn.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ga = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = he("en"), s = tn.getLocales(), i = ce(() => {
    const u = s.find((y) => y.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && P.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [c, d] = he(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), d(u);
  };
  ge(() => {
    t == null || t.forEach((u) => {
      s.find((C) => C.id === u.id) || tn.addLocales(u);
    });
  }, [s, t]), ge(() => {
    const u = localStorage.getItem("locale"), y = r ?? u ?? "en";
    localStorage.setItem("locale", y), o(y), d(i());
  }, [i, r]);
  const { Provider: l } = Ao;
  return /* @__PURE__ */ h(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, at = () => tt(Ao).currentLocale.lang, ya = (e) => /* @__PURE__ */ oe.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ oe.createElement("defs", null, /* @__PURE__ */ oe.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ oe.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ oe.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ oe.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ oe.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), va = x.div`
  height: 440px;
  width: 514px;
  position: relative;
`, xa = x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ba = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = at();
  return /* @__PURE__ */ W(va, { onClick: e, children: [
    /* @__PURE__ */ h(ya, {}),
    /* @__PURE__ */ h(xa, { children: r })
  ] });
}, wa = x.div`
  position: relative;
  display: flex;
`, Sa = x.div`
  position: relative;
  margin-left: ${Fe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, Ca = x.div`
  width: calc(${({ width: e }) => e}px - ${Fe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Fe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, ka = /* @__PURE__ */ new Set(), Ma = {
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
    reservationType: Bt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function $a(e, r) {
  const t = r ? [...r].sort((a, l) => a.maxPassengers - l.maxPassengers) : [], n = [], o = e.filter((a) => a.isUnassigned);
  o.length > 0 && n.push({ type: "unassigned", items: o });
  const s = e.filter((a) => !a.isUnassigned);
  for (const a of t) {
    const l = s.filter(
      (u) => !u.isSubcontract && u.categoryId === a.id
    );
    l.length > 0 && n.push({ type: "category", category: a, items: l });
  }
  const i = t.length > 0, c = s.filter(
    (a) => !a.isSubcontract && (!a.categoryId || !i)
  );
  c.length > 0 && i ? n.push({ type: "uncategorized", items: c }) : c.length > 0 && n.push({ type: "uncategorized", items: c });
  const d = s.filter((a) => a.isSubcontract);
  return d.length > 0 && n.push({ type: "subcontract", items: d }), n;
}
const Da = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  onTileContextMenu: o,
  onItemClick: s,
  toggleTheme: i,
  topBarWidth: c,
  onEventDrop: d,
  onEventDrag: a,
  draggableConfig: l,
  onTimeRangeSelect: u,
  onMultiTimeRangeSelect: y,
  clickToAddConfig: C
}) => {
  const [v, M] = he(Ma), [g, I] = he(e), [U, j] = he(!1), [z, f] = he(!1), [p, b] = he(""), [E, S] = he(/* @__PURE__ */ new Set()), [w, H] = he(/* @__PURE__ */ new Set()), X = ue([]);
  ge(() => () => X.current.forEach(clearTimeout), []);
  const {
    zoom: O,
    startDate: T,
    isLoading: A,
    config: { includeTakenHoursOnWeekendsInDayView: Y, showTooltip: D, showThemeToggle: L }
  } = Ke(), F = ue(null), re = ue(null), [ee, N] = he(124), {
    page: R,
    projectsPerPerson: q,
    rowsPerItem: te,
    currentPageNum: k,
    pagesAmount: G,
    next: _,
    previous: Q,
    reset: Z
  } = qi(g), { effectiveCategories: B, effectivePage: m } = Me(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: R };
    const ie = Hi(R);
    if (ie.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: R };
    const de = R.map((ae) => {
      if (ae.isSubcontract || ae.isUnassigned || ae.capacity == null)
        return ae;
      const De = ie.capacityToCategoryId.get(ae.capacity);
      return De ? { ...ae, categoryId: De } : ae;
    });
    return { effectiveCategories: ie.categories, effectivePage: de };
  }, [t, R]), K = ce(
    (ie) => {
      if (E.has(ie)) {
        S((ae) => {
          const De = new Set(ae);
          return De.delete(ie), De;
        });
        return;
      }
      if ($o()) {
        S((ae) => new Set(ae).add(ie));
        return;
      }
      H((ae) => new Set(ae).add(ie));
      const de = setTimeout(() => {
        S((ae) => new Set(ae).add(ie)), H((ae) => {
          const De = new Set(ae);
          return De.delete(ie), De;
        });
      }, 190);
      X.current.push(de);
    },
    [E]
  ), $ = Me(() => {
    const ie = [];
    m.some((ae) => ae.isUnassigned) && ie.push("__unassigned__");
    const de = B ? [...B].sort((ae, De) => ae.maxPassengers - De.maxPassengers) : [];
    for (const ae of de)
      m.some((De) => !De.isSubcontract && De.categoryId === ae.id) && ie.push(ae.id);
    return m.some((ae) => ae.isSubcontract) && ie.push("__subcontract__"), ie;
  }, [B, m]), V = ce(() => {
    S(/* @__PURE__ */ new Set());
  }, []), ne = ce(() => {
    S(new Set($));
  }, [$]), J = Me(() => {
    if (w.size === 0)
      return ka;
    const ie = /* @__PURE__ */ new Set();
    for (const de of m) {
      const ae = de.isUnassigned ? "__unassigned__" : de.isSubcontract ? "__subcontract__" : de.categoryId;
      ae && w.has(ae) && ie.add(de.id);
    }
    return ie;
  }, [w, m]), {
    visiblePage: le,
    visibleRowsPerItem: pe,
    visibleTotalRows: fe,
    visibleProjectsPerPerson: ve,
    separatorRowIndices: $e,
    subcontractSeparatorIndex: ke,
    unassignedSeparatorIndex: se
  } = Me(() => {
    const ie = $a(m, B), de = ((B == null ? void 0 : B.length) ?? 0) > 0, ae = /* @__PURE__ */ new Map();
    R.forEach((Ne, vt) => ae.set(Ne.id, vt));
    const De = [], Ue = [], Je = [], Ve = [];
    let rt = 0, zt = -1, qe = -1;
    for (const Ne of ie)
      if (Ne.type === "unassigned" || Ne.type === "subcontract" || Ne.type === "category" && de) {
        const xt = Ne.type === "unassigned" ? "__unassigned__" : Ne.type === "subcontract" ? "__subcontract__" : Ne.category.id, bt = E.has(xt);
        if (Ne.type === "subcontract" && (zt = Ve.length), Ne.type === "unassigned" && (qe = Ve.length), Ve.push(rt), !bt)
          for (const ct of Ne.items) {
            const Ht = ae.get(ct.id) ?? 0, Wt = te[Ht];
            De.push(ct), Ue.push(Wt), Je.push(q[Ht]), rt += Wt;
          }
      } else
        for (const xt of Ne.items) {
          const bt = ae.get(xt.id) ?? 0, ct = te[bt];
          De.push(xt), Ue.push(ct), Je.push(q[bt]), rt += ct;
        }
    const yt = Ue.reduce((Ne, vt) => Ne + vt, 0);
    return {
      visiblePage: De,
      visibleRowsPerItem: Ue,
      visibleTotalRows: yt,
      visibleProjectsPerPerson: Je,
      separatorRowIndices: Ve,
      subcontractSeparatorIndex: zt,
      unassignedSeparatorIndex: qe
    };
  }, [m, B, R, E, te, q]), me = Me(
    () => m.reduce(
      (ie, de) => de.isUnassigned ? ie + de.data.reduce((ae, De) => ae + De.length, 0) : ie,
      0
    ),
    [m]
  ), Ae = ue(null), ze = ue(
    Tn(
      (ie, de, ae, De, Ue, Je) => {
        if (!F.current)
          return;
        const { tile: Ve, segmentId: rt } = xe(ie);
        if (rt && rt === Ae.current)
          return;
        if (Ae.current = null, !rt || !Ve) {
          j(!1);
          return;
        }
        const zt = gt(rt, de), qe = F.current.getBoundingClientRect(), yt = Ve.getBoundingClientRect(), Ne = { x: ie.clientX - qe.left, y: ie.clientY - qe.top }, vt = {
          x: ie.clientX - qe.left,
          y: ie.clientY - qe.top
        }, xt = {
          x: yt.left - qe.left,
          y: yt.top - qe.top,
          width: yt.width,
          height: yt.height
        }, {
          coords: { x: bt, y: ct },
          resourceIndex: Ht,
          disposition: Wt,
          reservationData: Yo
        } = Bi(
          zt,
          ae,
          Ne,
          De,
          Ue,
          Je,
          Y
        );
        M({
          coords: { x: bt, y: ct },
          mouseCoords: vt,
          resourceIndex: Ht,
          disposition: Wt,
          reservationData: Yo,
          tileBounds: xt
        }), j(!0);
      },
      4
    )
  ), Pe = ue(
    Tn((ie, de) => {
      Z(), I(
        ie.map((ae) => ({
          ...ae,
          data: ae.data.filter((De) => {
            const { title: Ue, description: Je, subtitle: Ve } = De;
            return (Ue == null ? void 0 : Ue.toLowerCase().includes(de.toLowerCase())) || (Ve == null ? void 0 : Ve.toLowerCase().includes(de.toLowerCase())) || (Je == null ? void 0 : Je.toLowerCase().includes(de.toLowerCase()));
          })
        })).filter((ae) => ae.data.length > 0)
      );
    }, 500)
  ), gt = (ie, de) => {
    if (ie)
      return de.flatMap((ae) => ae.data).find((ae) => ae.segmentId === ie);
  }, xe = (ie) => {
    if (!ie.target)
      return { tile: null, segmentId: null };
    const de = ie.target.closest("[data-segment-id]");
    return de ? { tile: de, segmentId: de.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, Ee = (ie) => {
    const de = ie.target.value;
    b(de), Pe.current.cancel(), de ? Pe.current(e, de) : (Z(), I(e));
  }, Ie = ce(() => {
    ze.current.cancel(), j(!1);
  }, []), Le = ce(
    (ie, de) => {
      Ae.current = String(ie.segmentId), Ie(), o == null || o(ie, de);
    },
    [Ie, o]
  );
  return ge(() => {
    const ie = (ae) => ze.current(
      ae,
      e,
      T,
      pe,
      ve,
      O
    ), de = F.current;
    if (de)
      return de.addEventListener("mousemove", ie), de.addEventListener("mouseleave", Ie), () => {
        de.removeEventListener("mousemove", ie), de.removeEventListener("mouseleave", Ie);
      };
  }, [
    ze,
    Ie,
    ve,
    pe,
    T,
    O,
    e
  ]), ge(() => {
    p ? (Pe.current.cancel(), Pe.current(e, p)) : I(e);
  }, [e, p]), nn(() => {
    const ie = re.current;
    if (!ie)
      return;
    const de = () => N(ie.offsetHeight);
    de();
    const ae = new ResizeObserver(de);
    return ae.observe(ie), () => ae.disconnect();
  }, []), /* @__PURE__ */ W(wa, { children: [
    /* @__PURE__ */ h(
      tl,
      {
        headerHeight: ee,
        data: m,
        categories: B,
        pageNum: k,
        pagesAmount: G,
        rows: te,
        onLoadNext: _,
        onLoadPrevious: Q,
        searchInputValue: p,
        onSearchInputChange: Ee,
        onItemClick: s,
        collapsedGroups: E,
        fadingGroups: w,
        onToggleGroup: K,
        allGroupIds: $,
        onExpandAll: V,
        onCollapseAll: ne,
        unassignedCount: me
      }
    ),
    /* @__PURE__ */ W(Sa, { children: [
      /* @__PURE__ */ h(
        Pl,
        {
          ref: re,
          zoom: O,
          topBarWidth: c,
          showThemeToggle: L,
          toggleTheme: i
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Li,
        {
          data: le,
          baseData: r || e,
          zoom: O,
          rows: fe,
          ref: F,
          onTileClick: n,
          onTileContextMenu: o && Le,
          onEventDrop: d,
          onEventDrag: a,
          draggableConfig: l,
          onDragStateChange: f,
          onTimeRangeSelect: u,
          onMultiTimeRangeSelect: y,
          clickToAddConfig: C,
          separatorRowIndices: $e,
          subcontractSeparatorIndex: ke,
          warningSeparatorIndex: me > 0 ? se : -1,
          fadingUnitIds: J
        }
      ) : /* @__PURE__ */ h(Ca, { width: c, children: A ? /* @__PURE__ */ h(Nn, { isLoading: A, position: "left" }) : /* @__PURE__ */ h(ba, {}) }),
      D && /* @__PURE__ */ h(Cd, { tooltipData: v, visible: U && !z })
    ] })
  ] });
}, Ea = x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Fe + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.mode === "dark" ? e.colors.primary : "#fff"};
`, Mr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, _a = x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, Ta = x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, $r = x.button`
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
`, Aa = x.button`
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
`, Pa = x.div`
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
`, Dr = x.button`
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
`, Ia = x.label`
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
`, Oa = x.span`
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
`, Pt = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), La = () => {
  var r, t;
  const e = document.getElementById(bo);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Ya = () => {
  const {
    config: e,
    zoom: r,
    handleGoNext: t,
    handleGoPrev: n,
    handleGoToday: o,
    setZoom: s,
    goToDate: i,
    toggleDisplayActiveUnits: c,
    toolbarActions: d
  } = Ke(), { filterButtonState: a = -1 } = e;
  return /* @__PURE__ */ W(Ea, { width: 0, children: [
    /* @__PURE__ */ W(Mr, { $at: "start", children: [
      /* @__PURE__ */ W(Ta, { children: [
        /* @__PURE__ */ h($r, { onClick: n, "aria-label": "Anterior", children: /* @__PURE__ */ h(Pt, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h(Aa, { onClick: o, children: "Hoy" }),
        /* @__PURE__ */ h($r, { onClick: t, "aria-label": "Siguiente", children: /* @__PURE__ */ h(Pt, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      e.showViewSwitcher !== !1 && /* @__PURE__ */ W(Te, { children: [
        /* @__PURE__ */ h(_a, {}),
        /* @__PURE__ */ W(Pa, { children: [
          /* @__PURE__ */ h("button", { className: r === 2 ? "on" : "", onClick: () => s(2), children: "Día" }),
          /* @__PURE__ */ h("button", { className: r === 0 ? "on" : "", onClick: () => s(0), children: "Semana" }),
          /* @__PURE__ */ h("button", { className: r === 1 ? "on" : "", onClick: () => s(1), children: "Mes" })
        ] })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ W(Ia, { children: [
        /* @__PURE__ */ W(Pt, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h(
          "input",
          {
            type: "date",
            onClick: (l) => {
              var u, y;
              try {
                (y = (u = l.currentTarget).showPicker) == null || y.call(u);
              } catch {
              }
            },
            onChange: (l) => l.target.value && i(l.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ W(Mr, { $at: "end", children: [
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ W(Dr, { $primary: !!a, onClick: c, children: [
        /* @__PURE__ */ h(Pt, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(Oa, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ W(Dr, { onClick: La, children: [
        /* @__PURE__ */ h(Pt, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      d
    ] })
  ] });
}, Ra = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Na = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Fa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Ba = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), za = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ha = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Wa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), ja = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Za = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Va = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Ga = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ua = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Xa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Ka = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ oe.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Ja = {
  add: Ra,
  subtract: Na,
  filter: Fa,
  arrowLeft: Ba,
  arrowRight: za,
  defaultAvatar: Ha,
  calendarWarning: Wa,
  calendarFree: ja,
  arrowDown: Va,
  arrowUp: Za,
  search: Ga,
  close: Ua,
  moon: Xa,
  sun: Ka
}, dn = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = rn(), i = Ja[e];
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
  ${({ theme: e, variant: r, disabled: t }) => qa(e, r, t)}
`;
const Qa = x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${xo}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${We};
`, ec = x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, tc = x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, nc = x.div`
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
`, rc = x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, oc = x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, sc = x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`, ic = x.div`
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
`, ac = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, cc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, lc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, dc = x.div`
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
`, Er = "#cdd8d2", _r = [178, 216, 195], uc = [15, 125, 102], fc = (e) => {
  const r = Math.min(1, Math.max(0, e)), t = (n) => Math.round(_r[n] + (uc[n] - _r[n]) * r);
  return `rgb(${t(0)}, ${t(1)}, ${t(2)})`;
}, hc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ke(), s = at(), i = ue(null), [c, d] = he(null), a = Me(
    () => Array.from({ length: 12 }, (S, w) => P().month(w).format("MMM").toUpperCase()),
    [s]
  ), l = Me(() => P().startOf("day"), []), { domainStart: u, domainEnd: y, domainDays: C } = Me(() => {
    const S = l.subtract(3, "month").startOf("month"), w = l.add(9, "month").endOf("month");
    return { domainStart: S, domainEnd: w, domainDays: w.diff(S, "day") + 1 };
  }, [l]), v = (S) => S.diff(u, "day") / C * 100, M = (S) => Math.min(100, Math.max(0, S)), g = Me(() => {
    const S = [];
    let w = u.startOf("month");
    for (; w.isBefore(y); )
      S.push(w), w = w.add(1, "month");
    return S;
  }, [u, y]), I = o == null ? void 0 : o.yearCounts, U = Me(() => {
    const S = Math.ceil(C / 7), w = new Array(S).fill(0), H = (L) => {
      const F = L.diff(u, "day");
      return F < 0 || F >= C ? -1 : Math.floor(F / 7);
    };
    if (I && I.length)
      for (const L of I) {
        const F = H(P(L.date));
        F >= 0 && (w[F] += L.count);
      }
    else
      for (const L of t ?? [])
        for (const F of L.data ?? []) {
          const re = H(P(F.startDate));
          re >= 0 && (w[re] += 1);
        }
    const X = Math.max(0, ...w);
    if (X <= 0)
      return w.map(() => ({ h: 0, color: Er }));
    const O = w.filter((L) => L > 0).sort((L, F) => L - F), T = O.length >> 1, A = O.length % 2 ? O[T] : (O[T - 1] + O[T]) / 2, Y = A > 0 ? X / A : 1, D = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, Y)))));
    return w.map(
      (L) => L > 0 ? { h: Math.min(100, 100 * Math.pow(L / X, D)), color: fc(L / X) } : { h: 0, color: Er }
    );
  }, [t, I, u, C]), j = v(l), z = (S) => {
    const { startDate: w, endDate: H } = sn(S, r), X = M(v(w));
    return { left: X, width: M(v(H)) - X, startDate: w, endDate: H };
  }, f = z(e), p = c ? z(c.d) : null, b = (S) => `${S.date()} ${a[S.month()]}`, E = (S) => {
    var X;
    const w = (X = i.current) == null ? void 0 : X.getBoundingClientRect();
    if (!w)
      return null;
    const H = Math.min(1, Math.max(0, (S - w.left) / w.width));
    return { f: H, d: u.add(Math.round(H * (C - 1)), "day") };
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
        onClick: (S) => {
          const w = E(S.clientX);
          w && n(w.d.toDate());
        },
        onMouseMove: (S) => {
          const w = E(S.clientX);
          w && d({ left: w.f * 100, d: w.d });
        },
        onMouseLeave: () => d(null),
        children: [
          /* @__PURE__ */ h(nc, { children: g.map((S, w) => /* @__PURE__ */ h("span", { style: { left: `${v(S)}%` }, children: w === 0 || S.month() === 0 ? `${a[S.month()]} ${S.format("YY")}` : a[S.month()] }, w)) }),
          g.map(
            (S, w) => w === 0 ? null : /* @__PURE__ */ h(rc, { style: { left: `${v(S)}%` } }, w)
          ),
          /* @__PURE__ */ h(oc, { children: U.map((S, w) => /* @__PURE__ */ h(sc, { style: { height: `${S.h}%`, background: S.color } }, w)) }),
          /* @__PURE__ */ h(ac, { style: { left: `${f.left}%`, width: `${f.width}%` } }),
          /* @__PURE__ */ h(ic, { style: { left: `${M(j)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && p && /* @__PURE__ */ W(Te, { children: [
            /* @__PURE__ */ h(cc, { style: { left: `${p.left}%`, width: `${p.width}%` } }),
            /* @__PURE__ */ h(lc, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(dc, { style: { left: `${c.left}%` }, children: `Ir a ${b(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, Po = Bn(/* @__PURE__ */ new Map()), pc = () => tt(Po), mc = 10500, gc = 60, yc = 600, vc = (e) => {
  var d;
  const r = document.getElementById(et), t = r == null ? void 0 : r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);
  if (!r || !t)
    return !1;
  const n = r.getBoundingClientRect(), o = (d = document.getElementById(go)) == null ? void 0 : d.getBoundingClientRect(), s = t.getBoundingClientRect(), i = Math.max((o == null ? void 0 : o.bottom) ?? n.top, n.top, 0), c = Math.min(n.bottom, window.innerHeight);
  return s.width > 0 && s.right > n.left + Fe && s.left < n.right && s.bottom > i && s.top < c;
}, xc = () => {
  const [e, r] = he(() => /* @__PURE__ */ new Map()), t = ue(0), n = ue(/* @__PURE__ */ new Set());
  ge(() => {
    const s = n.current;
    return () => s.forEach(clearTimeout);
  }, []);
  const o = ce((s) => {
    const i = s.filter((l) => vc(l.segmentId));
    if (!i.length)
      return [];
    const c = ++t.current, d = new Map(
      i.map((l, u) => [
        l.segmentId,
        { kind: l.kind, key: c, delayMs: Math.min(u * gc, yc) }
      ])
    );
    r((l) => new Map([...Array.from(l), ...Array.from(d)]));
    const a = setTimeout(() => {
      n.current.delete(a), r((l) => {
        const u = new Map(l);
        return d.forEach((y, C) => {
          var v;
          ((v = u.get(C)) == null ? void 0 : v.key) === c && u.delete(C);
        }), u;
      });
    }, mc);
    return n.current.add(a), i.map((l) => l.segmentId);
  }, []);
  return { pulses: e, pulseTiles: o };
}, bc = x.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, wc = x.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? xo : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Sc = x.div`
  position: relative;
`, Cc = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  onTileContextMenu: o,
  topBarWidth: s,
  onItemClick: i,
  toggleTheme: c,
  onEventDrop: d,
  onEventDrag: a,
  draggableConfig: l,
  schedulerRef: u,
  onTimeRangeSelect: y,
  onMultiTimeRangeSelect: C,
  clickToAddConfig: v
}) => {
  const { goToDate: M, handleGoToday: g, zoomIn: I, zoomOut: U, zoom: j } = Ke(), { pulses: z, pulseTiles: f } = xc();
  return Qr(
    u,
    () => ({
      goToDate: M,
      goToToday: g,
      setZoom: (p) => {
        if (!Co(p))
          return;
        const b = p - j;
        if (b > 0)
          for (let E = 0; E < b; E++)
            I();
        else
          for (let E = 0; E < Math.abs(b); E++)
            U();
      },
      pulseTiles: f
    }),
    [M, g, j, I, U, f]
  ), /* @__PURE__ */ h(Po.Provider, { value: z, children: /* @__PURE__ */ h(
    Da,
    {
      data: e,
      baseData: r,
      categories: t,
      onTileClick: n,
      onTileContextMenu: o,
      topBarWidth: s,
      onItemClick: i,
      toggleTheme: c,
      onEventDrop: d,
      onEventDrag: a,
      draggableConfig: l,
      onTimeRangeSelect: y,
      onMultiTimeRangeSelect: C,
      clickToAddConfig: v
    }
  ) });
}, hu = zn(function({
  data: r,
  categories: t,
  baseData: n,
  config: o,
  startDate: s,
  onRangeChange: i,
  onTileClick: c,
  onTileContextMenu: d,
  handleToggleDisplayActiveUnits: a,
  onClearFilterData: l,
  toolbarActions: u,
  onItemClick: y,
  isLoading: C,
  onEventDrop: v,
  onEventDrag: M,
  draggableConfig: g,
  onTimeRangeSelect: I,
  onMultiTimeRangeSelect: U,
  clickToAddConfig: j
}, z) {
  var D;
  const f = Me(
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
  ), p = ue(null), b = ue(null), [E, S] = he((D = p.current) == null ? void 0 : D.clientWidth), w = Me(() => P(s), [s]), [H, X] = he(f.defaultTheme ?? "light"), O = () => {
    X(H === "light" ? "dark" : "light");
  }, T = H === "light" ? zs : Hs, A = f.theme ? f.theme[T.mode] : {}, Y = {
    ...T,
    colors: {
      ...T.colors,
      ...A
    }
  };
  return Qr(
    z,
    () => ({
      goToDate: (L) => {
        var F;
        return (F = b.current) == null ? void 0 : F.goToDate(L);
      },
      goToToday: () => {
        var L;
        return (L = b.current) == null ? void 0 : L.goToToday();
      },
      setZoom: (L) => {
        var F;
        return (F = b.current) == null ? void 0 : F.setZoom(L);
      },
      pulseTiles: (L) => {
        var F;
        return ((F = b.current) == null ? void 0 : F.pulseTiles(L)) ?? [];
      }
    }),
    []
  ), nn(() => {
    const L = () => {
      p.current && S(p.current.clientWidth);
    };
    L(), window.addEventListener("resize", L);
    let F;
    const re = p.current;
    return re && typeof ResizeObserver < "u" && (F = new ResizeObserver(L), F.observe(re)), () => {
      window.removeEventListener("resize", L), F == null || F.disconnect();
    };
  }, []), /* @__PURE__ */ W(Te, { children: [
    /* @__PURE__ */ h(Bs, {}),
    /* @__PURE__ */ h(Ys, { theme: Y, children: /* @__PURE__ */ h(ga, { lang: f.lang, translations: f.translations, children: /* @__PURE__ */ h(
      Di,
      {
        data: r,
        isLoading: !!C,
        config: f,
        onRangeChange: i,
        defaultStartDate: w,
        handleToggleDisplayActiveUnits: a,
        onClearFilterData: l,
        toolbarActions: u,
        children: /* @__PURE__ */ W(bc, { id: bo, children: [
          /* @__PURE__ */ h(
            wc,
            {
              showScroll: !!r.length,
              $footer: f.showOverview !== !1 && !!r.length,
              id: et,
              ref: p,
              children: /* @__PURE__ */ h(Sc, { children: /* @__PURE__ */ h(
                Cc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  onTileContextMenu: d,
                  topBarWidth: E ?? 0,
                  onItemClick: y,
                  toggleTheme: O,
                  onEventDrop: v,
                  onEventDrag: M,
                  draggableConfig: g,
                  schedulerRef: b,
                  onTimeRangeSelect: I,
                  onMultiTimeRangeSelect: U,
                  clickToAddConfig: j
                }
              ) })
            }
          ),
          f.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(hc, {})
        ] })
      }
    ) }) })
  ] });
}), kc = x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, Mc = x.button`
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
`, $c = x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Dc = x.p`
  ${At}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Tr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = at(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(kc, { intent: e, children: /* @__PURE__ */ W(Mc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h($c, { children: t }),
    /* @__PURE__ */ h(Dc, { children: d })
  ] }) });
}, Ec = x.div`
  min-width: ${Fe + "px"};
  max-width: ${Fe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, _c = x.div`
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
`, Tc = x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, Ac = x.input`
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
`, Pc = x.div`
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
`, Ic = je`
  from { opacity: 1; }
  to { opacity: 0; }
`, un = x.div`
  ${({ $fading: e }) => e && ht`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Ic} 180ms ease forwards;
      }
    `}
`, Oc = x.button`
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
`, Lc = je`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, Yc = x.div`
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
    animation: ${Lc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Rc = x.div`
  display: flex;
  align-items: center;
`, Nc = x.div`
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
`, Fc = x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Bc = x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Ar = x.p`
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
`, zc = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`, Hc = x.span`
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
`, Wc = x.span`
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
`, jc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Zc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: [
  /* @__PURE__ */ h("circle", { cx: "9", cy: "8", r: "3.2" }),
  /* @__PURE__ */ h("path", { d: "M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z" }),
  /* @__PURE__ */ h("circle", { cx: "16.8", cy: "8.6", r: "2.5" }),
  /* @__PURE__ */ h("path", { d: "M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8" })
] }), Vc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Gc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Uc = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  Yc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ W(Rc, { children: [
      /* @__PURE__ */ h(Nc, { $provider: o, children: jc(r.icon) ? /* @__PURE__ */ h(Fc, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Gc, {}) : /* @__PURE__ */ h(Vc, {}) }),
      /* @__PURE__ */ W(Bc, { children: [
        /* @__PURE__ */ h(Ar, { isMain: !0, children: r.title }),
        r.capacity != null || r.plate ? /* @__PURE__ */ W(zc, { children: [
          r.capacity != null && /* @__PURE__ */ W(Hc, { title: `${r.capacity} pasajeros`, children: [
            /* @__PURE__ */ h(Zc, {}),
            r.capacity
          ] }),
          r.plate && /* @__PURE__ */ h(Wc, { title: r.plate, children: r.plate })
        ] }) : r.subtitle && /* @__PURE__ */ h(Ar, { children: r.subtitle })
      ] })
    ] })
  }
), Xc = je`
  0% { box-shadow: 0 0 0 0 var(--attention-ring); }
  70%, 100% { box-shadow: 0 0 0 5px transparent; }
`, Kc = x.div`
  display: flex;
  align-items: center;
  gap: ${({ $tone: e }) => e ? "4px" : "5px"};
  padding: ${({ $tone: e }) => e ? "0 7px 0 9px" : "0 11px 0 9px"};
  height: 21px;
  color: ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.unassignedText : r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  background: ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.unassignedBorder + "26" : r === "subcontract" ? e.colors.subcontractBorder + "24" : "#E9EFEC"};
  border-left: 3px solid
    ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.unassignedBorder : r === "subcontract" ? e.colors.subcontractBorder : "transparent"};
  border-bottom: 1px solid
    ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.unassignedBorder + "66" : r === "subcontract" ? e.colors.subcontractBorder : "#D4DFD9"};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.unassignedBorder + "38" : r === "subcontract" ? e.colors.subcontractBorder + "33" : "#DAE6E0"};
  }
`, Jc = x.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: ${({ $tone: e }) => e ? "0.03em" : "0.07em"};
  text-transform: uppercase;
  color: ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.unassignedText : r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, qc = x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  flex-shrink: 0;
`, Qc = x.span`
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
  ${({ $pulse: e }) => e && ht`
      animation: ${Xc} 1.8s ease-out infinite;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
`, el = x.div`
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
`, fn = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => {
  const s = o === "unassigned" ? r === 0 ? "ok" : "warning" : void 0;
  return /* @__PURE__ */ W(Kc, { $variant: o, $tone: s, onClick: n, title: e, children: [
    /* @__PURE__ */ h(el, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
      "path",
      {
        d: "M3 4.5L6 7.5L9 4.5",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }),
    /* @__PURE__ */ h(Jc, { $variant: o, $tone: s, children: e }),
    s ? /* @__PURE__ */ W(Qc, { $tone: s, $pulse: s === "warning" && t, children: [
      /* @__PURE__ */ h("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: s === "ok" ? /* @__PURE__ */ h(
        "path",
        {
          d: "M2.5 6.5L5 9L9.5 3.5",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ) : /* @__PURE__ */ W(Te, { children: [
        /* @__PURE__ */ h("path", { d: "M6 1.5L11 10.5H1L6 1.5Z", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" }),
        /* @__PURE__ */ h("path", { d: "M6 5V7.2", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
        /* @__PURE__ */ h("circle", { cx: "6", cy: "8.9", r: "0.75", fill: "currentColor" })
      ] }) }),
      r
    ] }) : /* @__PURE__ */ h(qc, { $variant: o, children: r })
  ] });
}, tl = ({
  data: e,
  categories: r,
  headerHeight: t,
  rows: n,
  onLoadNext: o,
  onLoadPrevious: s,
  pageNum: i,
  pagesAmount: c,
  searchInputValue: d,
  onSearchInputChange: a,
  onItemClick: l,
  collapsedGroups: u,
  fadingGroups: y,
  onToggleGroup: C,
  allGroupIds: v,
  onExpandAll: M,
  onCollapseAll: g,
  unassignedCount: I
}) => {
  const [U, j] = he(!1), z = at(), f = () => j((D) => !D), p = r ? [...r].sort((D, L) => D.maxPassengers - L.maxPassengers) : [], b = p.length > 0, E = v.length > 0, S = E && u.size === v.length;
  E && u.size;
  const w = e.filter((D) => D.isUnassigned), H = z.unassigned ?? "No unit assigned", X = e.filter((D) => D.isSubcontract), O = z.subcontract ?? "Subcontract", T = (D) => {
    const L = e.indexOf(D);
    return /* @__PURE__ */ h(
      Uc,
      {
        id: D.id,
        item: D.label,
        rows: n[L],
        onItemClick: l,
        isSubcontract: D.isSubcontract
      },
      D.id
    );
  }, A = (D) => {
    const L = e.filter(
      (N) => !N.isSubcontract && N.categoryId === D.id
    );
    if (L.length === 0)
      return null;
    const F = u.has(D.id), re = y.has(D.id), ee = D.name;
    return /* @__PURE__ */ W("div", { children: [
      /* @__PURE__ */ h(
        fn,
        {
          label: ee,
          count: L.length,
          isCollapsed: F || re,
          onToggle: () => C(D.id),
          variant: "category"
        }
      ),
      !F && /* @__PURE__ */ h(un, { $fading: re, children: L.map(T) })
    ] }, D.id);
  }, Y = e.filter(
    (D) => !D.isSubcontract && !D.isUnassigned && (!D.categoryId || !b)
  );
  return /* @__PURE__ */ W(Ec, { children: [
    /* @__PURE__ */ W(_c, { $height: t, children: [
      /* @__PURE__ */ W(Tc, { children: [
        /* @__PURE__ */ W(Pc, { isFocused: U, children: [
          /* @__PURE__ */ h(
            Ac,
            {
              placeholder: z.search,
              value: d,
              onChange: a,
              onFocus: f,
              onBlur: f
            }
          ),
          /* @__PURE__ */ h(dn, { iconName: "search" })
        ] }),
        E && /* @__PURE__ */ h(
          Oc,
          {
            title: S ? "Expand all" : "Collapse all",
            onClick: S ? M : g,
            $allCollapsed: S,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: S ? /* @__PURE__ */ W(Te, { children: [
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
        Tr,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ h(dn, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    w.length > 0 && /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(
        fn,
        {
          label: H,
          count: I,
          isCollapsed: u.has("__unassigned__") || y.has("__unassigned__"),
          onToggle: () => C("__unassigned__"),
          variant: "unassigned"
        }
      ),
      !u.has("__unassigned__") && /* @__PURE__ */ h(un, { $fading: y.has("__unassigned__"), children: w.map(T) })
    ] }),
    b ? p.map(A) : Y.map(T),
    b && Y.length > 0 && Y.map(T),
    X.length > 0 && /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(
        fn,
        {
          label: O,
          count: X.length,
          isCollapsed: u.has("__subcontract__") || y.has("__subcontract__"),
          onToggle: () => C("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !u.has("__subcontract__") && /* @__PURE__ */ h(un, { $fading: y.has("__subcontract__"), children: X.map(T) })
    ] }),
    /* @__PURE__ */ h(
      Tr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(dn, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, nl = x.div`
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
`, rl = je`
from{
    left: -100%;
}
to{
    left: 100%;
}`, ol = x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${rl} 1s infinite;
`, sl = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(nl, { position: r, children: /* @__PURE__ */ h(ol, {}) }) : null, Nn = sl, nt = (e, r) => {
  const {
    ctx: t,
    x: n,
    y: o,
    width: s,
    height: i,
    textYPos: c,
    label: d,
    font: a,
    isBottomRow: l,
    fillStyle: u,
    topText: y,
    bottomText: C,
    strokeStyle: v,
    labelBetweenCells: M
  } = e;
  t.beginPath();
  const g = v ?? (r.mode === "dark" ? r.colors.border : "#E4EAE7");
  if (t.strokeStyle = g, t.setLineDash([]), d && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), M ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : (t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke()), t.font = a;
    const I = n + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.mode === "dark" ? r.colors.textPrimary : "#183D3D", t.fillText(d, I, c);
  }
  if (l && u && y && C) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.beginPath(), t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke(), t.font = y.font;
    const I = n + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, I, y.y), t.font = C.font;
    const U = n + s / 2 - t.measureText(C.label).width / 2;
    t.fillStyle = C.color, t.fillText(C.label, U, C.y);
  }
}, il = (e, r, t, n, o = mt) => {
  const s = Xe + o, i = s + 13, c = s + 27;
  let d = 0;
  for (let a = 0; a < r; a++) {
    const l = So(
      P(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    ), u = l.isCurrentDay;
    if (nt(
      {
        ctx: e,
        x: d,
        y: s,
        width: _e,
        height: kt,
        isBottomRow: !0,
        // Day headers stay UNIFORM across the week — weekends get no header tint (artifact: only the grid BODY washes
        // weekends, the header row never does). Today keeps its opaque currentDay fill so scrolling events don't bleed
        // through the HOY cell.
        fillStyle: u ? n.colors.currentDay : n.colors.gridBackground,
        // Reimagined hierarchy (artifact): the weekday name is the small muted label, the date number is the large
        // bold teal figure — the inverse of the old 14px-name / 10px-number. The trailing locale period is stripped.
        topText: {
          y: i,
          label: u ? "" : l.dayName.replace(/\./g, "").toUpperCase(),
          font: `600 10px ${We}`,
          color: n.mode === "dark" ? n.colors.placeholder : "#74897F"
        },
        bottomText: {
          y: c,
          label: `${l.dayOfMonth}`,
          font: u ? `700 12px ${We}` : `700 13px ${We}`,
          color: u ? n.colors.today : n.mode === "dark" ? n.colors.textPrimary : "#183D3D"
        }
      },
      n
    ), u) {
      const v = d + _e / 2, M = i - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(v - 30 / 2, M, 30, 13, 5) : e.rect(v - 30 / 2, M, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${We}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", v, M + 13 / 2 + 0.5), e.restore();
    }
    d += _e;
  }
}, al = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Ze;
  const s = Xe;
  let c = t.month;
  for (let d = 0; d < r; d++) {
    c >= mo && (c = 0);
    const a = wo(t, d) * Ze;
    nt(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: mt,
        textYPos: vo,
        label: P().month(c).format("MMMM").toUpperCase(),
        font: it.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, cl = " ".repeat(98), ll = (e, r, t) => {
  const o = P(`${r.year}-${r.month + 1}-${r.dayOfMonth}`);
  let s = -r.dayOfMonth * _e + _e;
  for (let i = 0; i < mo; i++) {
    const c = o.add(i, "months"), d = c.daysInMonth() * _e, a = c.format("MMMM YYYY").toUpperCase();
    nt(
      {
        ctx: e,
        x: s,
        y: 0,
        width: d,
        height: Xe,
        textYPos: Gn,
        label: `${a}${cl}${a}`,
        font: `800 12px ${We}`
      },
      t
    ), s += d;
  }
}, dl = (e, r, t, n) => {
  const o = 7 * _e, s = Xe, i = e.canvas.width / o + o, c = r.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = P(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (c + a) % gr;
    u <= 0 && (u += gr), l !== 1 && a === 0 && (d = -l * _e + _e), nt(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: mt,
        textYPos: vo,
        label: `${t.toUpperCase()} ${u}`,
        font: it.middleRow
      },
      n
    ), d += o;
  }
}, ul = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, fl = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, hl = (e, r, t, n, o) => {
  const s = Qt - kt / 1.6, i = Qt - kt / 4.5, c = Xe + mt;
  let d = 0;
  for (let a = 0; a < r; a++) {
    const l = P(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = l.isSame(P(), "week");
    nt(
      {
        ctx: e,
        x: d,
        y: c,
        width: _t,
        height: kt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: u ? o.colors.today + "26" : ul({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: u ? `700 14px ${We}` : it.bottomRow.name,
          color: u ? o.colors.today : fl({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: it.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += _t;
  }
}, pl = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (xr(s) - t + 1) * Ze, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = xr(s + d) * Ze), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ze) * Ze), nt(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Xe,
        textYPos: Gn,
        label: (s + d).toString(),
        font: it.topRow
      },
      n
    ), c += a, l += a, d++;
}, ml = (e, r, t, n) => {
  const o = Math.floor(r / en) + 2, s = en * Re;
  let d = -P(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Re + 0.5 * Re;
  for (let a = 0; a < o; a++) {
    const l = P(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    nt(
      {
        ctx: e,
        x: d,
        y: Tt,
        width: s,
        height: Ft,
        textYPos: Tt + Ft / 2 + 2,
        label: l,
        font: it.bottomRow.number
      },
      n
    ), d += s;
  }
}, gl = (e, r, t, n) => {
  const o = Math.ceil(r / en), s = P(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Re;
  for (let u = 0; u < a; u++) {
    const y = P(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = P(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), M = v.format("MMMM").toUpperCase(), g = v.diff(y, "hour") + 1, I = u === 0 ? g * Re : r * Re;
    nt(
      {
        ctx: e,
        x: l,
        y: 0,
        width: I,
        height: Tt,
        textYPos: Gn,
        label: M,
        font: it.topRow
      },
      n
    ), l += I;
  }
}, yl = (e, r, t, n) => {
  let o = 0;
  const s = Tt + Ft, i = P(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Re;
  for (let d = 0; d < r; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    nt(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: Cn,
        label: a,
        font: it.bottomRow.hoursInDay,
        textYPos: Tt + Ft + Cn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Re;
  }
}, vl = (e, r, t, n, o, s, i, c = !0) => {
  switch (r) {
    case 0:
      pl(e, n, s, i), al(e, t, n, i), hl(e, t, n, o, i);
      break;
    case 1:
      ll(e, n, i), c && dl(e, n, o, i), il(e, t, n, i, c ? mt : 0);
      break;
    case 2:
      gl(e, t, n, i), ml(e, t, n, i), yl(e, t, n, i);
      break;
  }
}, xl = x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, bl = x.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, wl = x.div`
  height: ${({ $height: e }) => e ?? Qt}px;
  display: block;
`, Sl = x.canvas``, Cl = {
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
    children: Cl[e]
  }
), kl = x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Fe + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, Pr = x.span`
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
`, Gt = x.span`
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
`, Ml = x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, $l = x.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, Dl = x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, El = x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, _l = x.span`
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
`, Tl = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], Al = () => /* @__PURE__ */ W(kl, { children: [
  /* @__PURE__ */ h(Pr, { children: "Leyenda" }),
  /* @__PURE__ */ W(Gt, { children: [
    /* @__PURE__ */ h(He, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ W(Gt, { children: [
    /* @__PURE__ */ h(He, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ W(Gt, { children: [
    /* @__PURE__ */ h(He, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ W(Gt, { children: [
    /* @__PURE__ */ h(Ml, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h($l, {}),
  /* @__PURE__ */ W(Pr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Tl.map((e) => /* @__PURE__ */ W(Dl, { children: [
    /* @__PURE__ */ h(El, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(_l, { style: { color: e.color }, children: /* @__PURE__ */ h(He, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), Pl = zn(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = at(), { date: c, cols: d, dayOfYear: a, startDate: l, config: u } = Ke(), y = ue(null), C = rn(), v = u.showWeekRow !== !1, M = r === 2 ? Ws : r === 1 && !v ? Xe + kt : Qt, g = ce(
    (I) => {
      const U = Jn(), j = M + 1;
      Mo(I, U, j), vl(I, r, d, l, i, a, C, v);
    },
    [d, a, l, i, r, C, v, M]
  );
  return ge(() => {
    if (!y.current)
      return;
    const I = y.current.getContext("2d");
    if (!I)
      return;
    const U = () => g(I);
    return window.addEventListener("resize", U), () => window.removeEventListener("resize", U);
  }, [g]), ge(() => {
    const I = y.current;
    if (!I)
      return;
    I.style.letterSpacing = "1px";
    const U = I.getContext("2d");
    U && g(U);
  }, [c, r, g]), /* @__PURE__ */ W(xl, { ref: s, children: [
    (u.showTopbar !== !1 || u.showLegend !== !1) && /* @__PURE__ */ W(bl, { $width: t, children: [
      u.showTopbar !== !1 && /* @__PURE__ */ h(Ya, { width: t, showThemeToggle: n, toggleTheme: o }),
      u.showLegend !== !1 && /* @__PURE__ */ h(Al, {})
    ] }),
    /* @__PURE__ */ h(wl, { $height: M, id: go, children: /* @__PURE__ */ h(Sl, { ref: y }) })
  ] });
}), Il = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Ze;
      break;
    case 2:
      n = Re;
      break;
    default:
      n = _e;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), d = r.endDate.startOf("day"), a = () => {
    let l;
    switch (t) {
      case 2:
        l = (e.startDate.diff(r.startDate, "minute") / Oe + 1) * n - n / 2;
        break;
      default:
        l = s.diff(c, "day") * n;
    }
    return Math.max(0, l);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          e.endDate.diff(e.startDate, "minute") / Oe * n,
          50
        );
        break;
      default:
        l = Math.max(
          i.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: l };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          e.endDate.diff(r.startDate, "minute") / Oe * n + 0.5 * n,
          50
        );
        break;
      default:
        l = Math.max(
          i.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: l };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          r.endDate.diff(e.startDate, "minute") / Oe * n,
          50
        );
        break;
      default:
        l = Math.max(
          d.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: l };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let l;
    switch (t) {
      case 2:
        l = Math.max(
          r.endDate.diff(r.startDate, "minute") / Oe * n,
          50
        );
        break;
      default:
        l = Math.max(
          d.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: l };
  }
  return { x: a(), width: 50 };
}, Ol = (e, r, t, n, o, s) => {
  const i = e * ye + js, c = r.hour(), d = t.hour();
  let a, l, u, y;
  switch (s) {
    case 2: {
      a = P(n), l = P(o), u = P(r).hour(c).minute(0), y = P(t).hour(d).minute(0);
      break;
    }
    default: {
      a = P(n).hour(0).minute(0), l = P(o).hour(23).minute(59), u = r, y = t;
      break;
    }
  }
  return {
    ...Il(
      { startDate: a, endDate: l },
      { startDate: u, endDate: y },
      s
    ),
    y: i
  };
}, Io = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, Oo = {
  sin_chofer: { icon: "warn", color: "#9AA4B2", label: "Sin chofer" },
  sin_avisar: { icon: "warn", color: "#D98A22", label: "No notificado al chofer" },
  programado: { icon: "warn", color: "#C2A878", label: "Notificación programada" },
  notificado: { icon: "clock", color: "#2C6BB0", label: "Notificado" },
  confirmado: { icon: "check", color: "#2E8B63", label: "Confirmado" }
}, Ll = {
  confirmed: { icon: "check", color: "#2E8B63", label: "Subcontrato confirmado" },
  unconfirmed: { icon: "clock", color: "#D98A22", label: "Subcontrato sin confirmar" }
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
  ${At}
  ${pt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const Yl = je`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, Rl = je`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, Nl = x.button`
  ${At}
  position: absolute;
  height: ${on}px;
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
    animation: ${Yl} 180ms ease-out;
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
  ${({ $exiting: e }) => e && ht`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Rl} 190ms ease-out forwards;
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
`, Fl = x.div`
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
`, Ir = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Bl = x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, zl = x.span`
  ${pt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, Hl = x.span`
  ${pt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Wl = x.span`
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
`, jl = x.div`
  ${pt}
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
`, Or = x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Lr = x.span`
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
`, Yr = x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, Fn = {
  confirmed: { ring: "#2E8B63", glow: "rgba(46, 139, 99, 0.45)" },
  notified: { ring: "#2C6BB0", glow: "rgba(44, 107, 176, 0.45)" },
  lost: { ring: "#C6483D", glow: "rgba(198, 72, 61, 0.45)" }
}, Zl = je`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`, Vl = je`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`, Gl = je`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`, Ul = je`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`, Xl = x.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({ $kind: e }) => Fn[e].ring};
  --pulse-glow: ${({ $kind: e }) => Fn[e].glow};
  animation:
    ${Zl} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${Vl} 9600ms linear var(--pulse-delay, 0ms) both;
`, Kl = x.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({ $kind: e }) => Fn[e].ring};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Gl} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
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
      animation: ${Ul} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`, Jl = x.div`
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
`, Rr = x.span`
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
`, ql = je`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`, Ql = x.div`
  position: absolute;
  height: ${on}px;
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
    animation: ${ql} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`, ed = x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`, td = x.div`
  ${pt}
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
`, nd = x.div`
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
`, rd = x.span`
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
`, od = x.span`
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
`, sd = 34, hn = ({
  row: e,
  data: r,
  zoom: t,
  isSubcontract: n = !1,
  onTileClick: o,
  onTileContextMenu: s,
  onDragStart: i,
  isDragging: c = !1,
  isDraggable: d = !0,
  yOffset: a = 0,
  exiting: l = !1,
  highlighted: u = !1,
  dimmed: y = !1,
  leaving: C = !1,
  ghost: v = !1,
  ghostBadge: M = "",
  pulse: g
}) => {
  const { date: I } = Ke(), U = sn(I, t), { y: j, x: z, width: f } = Ol(
    e,
    U.startDate,
    U.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: p } = rn(), b = ue(null), E = P(r.startDate).isSame(P(r.endDate), "day"), S = r.eventType === Bt.Tour, w = r.eventType === Bt.Transfer, H = E && (S || w);
  if (v)
    return /* @__PURE__ */ W(Ql, { style: { left: `${z}px`, top: `${j + a}px`, width: `${f}px` }, children: [
      /* @__PURE__ */ W(ed, { children: [
        /* @__PURE__ */ W(td, { children: [
          /* @__PURE__ */ h(He, { name: w ? "transfer" : "tour" }),
          r.title
        ] }),
        /* @__PURE__ */ W(nd, { children: [
          /* @__PURE__ */ h(He, { name: "check", strokeWidth: 2.6 }),
          "flota propia"
        ] })
      ] }),
      M && /* @__PURE__ */ h(rd, { children: M })
    ] });
  const X = (ee) => {
    ee.button === 0 && (b.current = { x: ee.clientX, y: ee.clientY }, d && i && (ee.preventDefault(), i(r, ee)));
  }, O = (ee) => {
    s && (ee.preventDefault(), s(r, { x: ee.clientX, y: ee.clientY }));
  }, T = (ee) => {
    if (b.current) {
      const N = Math.abs(ee.clientX - b.current.x), R = Math.abs(ee.clientY - b.current.y);
      Math.sqrt(N * N + R * R) <= 5 && (o == null || o(r)), b.current = null;
    } else
      o == null || o(r);
  }, A = {
    left: `${z}px`,
    top: `${j + a}px`,
    backgroundColor: `${r.bgColor ?? p.defaultTile}`,
    width: `${f}px`,
    color: Io(r.bgColor ?? "")
  }, Y = !n && r.readiness ? Oo[r.readiness] : null, D = n && r.subcontractConfirmed === !1, L = g ? { "--pulse-delay": `${g.delayMs}ms` } : void 0, F = (ee) => g ? /* @__PURE__ */ h(
    Kl,
    {
      $kind: g.kind,
      style: L,
      children: ee
    },
    `${g.key}-${r.readiness ?? ""}-${String(r.subcontractConfirmed)}`
  ) : ee, re = (ee) => /* @__PURE__ */ W(
    Nl,
    {
      "data-segment-id": r.segmentId,
      style: A,
      onClick: T,
      onMouseDown: X,
      onContextMenu: O,
      onDragStart: (N) => N.preventDefault(),
      isDraggable: d,
      isDragging: c,
      $unconfirmed: D,
      $exiting: l,
      $highlighted: u,
      $dimmed: y,
      $leaving: C,
      $pulsing: !!g,
      children: [
        g && /* @__PURE__ */ h(Xl, { $kind: g.kind, style: L, "aria-hidden": !0 }, g.key),
        C && /* @__PURE__ */ h(od, { children: "Sub" }),
        ee
      ]
    }
  );
  return re(
    H ? /* @__PURE__ */ W(Te, { children: [
      (n || Y) && /* @__PURE__ */ h(Or, { $sm: !0, children: F(
        n ? /* @__PURE__ */ h(Yr, { children: "SUB" }) : Y && /* @__PURE__ */ h(Lr, { $sm: !0, style: { color: Y.color }, children: /* @__PURE__ */ h(He, { name: Y.icon, strokeWidth: Y.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      /* @__PURE__ */ W(Jl, { $transfer: w, children: [
        /* @__PURE__ */ h(He, { name: w ? "transfer" : "sun", strokeWidth: 2.4 }),
        f >= sd && /* @__PURE__ */ W(Te, { children: [
          /* @__PURE__ */ h(Rr, { children: P(r.startDate).format("h:mm A") }),
          !w && /* @__PURE__ */ h(Rr, { $end: !0, children: P(r.endDate).format("h:mm A") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(Or, { children: (n || Y) && F(
        n ? /* @__PURE__ */ h(Yr, { children: "SUB" }) : Y && /* @__PURE__ */ h(Lr, { style: { color: Y.color }, children: /* @__PURE__ */ h(He, { name: Y.icon, strokeWidth: Y.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      r.bookingNumber && /* @__PURE__ */ h(Wl, { children: r.bookingNumber }),
      /* @__PURE__ */ W(Fl, { children: [
        /* @__PURE__ */ W(Ir, { $pad: !0, children: [
          /* @__PURE__ */ h(Bl, { children: /* @__PURE__ */ h(He, { name: w ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(zl, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(Ir, { children: /* @__PURE__ */ h(Hl, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ W(jl, { children: [
          /* @__PURE__ */ h(He, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Nr = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Be;
}, id = (e) => ({
  segmentId: e.segmentId,
  reservationId: e.reservationId,
  startDate: e.startDate,
  endDate: e.endDate,
  occupancy: 0,
  title: e.title,
  bookingNumber: "",
  eventType: e.eventType
}), ad = ({
  data: e,
  zoom: r,
  onTileClick: t,
  onTileContextMenu: n,
  onDragStart: o,
  isDraggable: s,
  draggingEventId: i,
  separatorRowIndices: c = [],
  fadingUnitIds: d,
  highlightedSegmentId: a,
  focusedUnitIds: l,
  leavingSegmentIds: u,
  ghostProject: y
}) => {
  const C = pc(), { nodes: v, liveMap: M } = Me(() => {
    const p = /* @__PURE__ */ new Map(), b = !!l && l.length > 0;
    let E = 0;
    return { nodes: e.map((w, H) => {
      H > 0 && (E += Math.max(e[H - 1].data.length, 1));
      const X = !!(d != null && d.has(w.id)), O = b && !l.includes(w.id), T = Nr(E, c), A = y && w.id === y.targetUnitId ? /* @__PURE__ */ h(
        hn,
        {
          row: E,
          data: id(y),
          zoom: r,
          yOffset: T,
          isDragging: !1,
          isDraggable: !1,
          ghost: !0,
          ghostBadge: y.badge
        },
        `ghost-${w.id}`
      ) : null;
      if (!w.data.some((D) => D.length > 0))
        return A ? [A] : [];
      const Y = w.data.map(
        (D, L) => D.map((F) => {
          const re = i === F.segmentId, ee = s ? s(F) : !1, N = L + E, R = Nr(N, c);
          return p.set(F.segmentId, {
            project: F,
            absoluteRow: N,
            yOffset: R,
            isSubcontract: !!w.isSubcontract,
            faded: X
          }), /* @__PURE__ */ h(
            hn,
            {
              row: N,
              data: F,
              zoom: r,
              isSubcontract: w.isSubcontract,
              onTileClick: t,
              onTileContextMenu: n,
              onDragStart: o,
              isDragging: re,
              isDraggable: ee,
              yOffset: R,
              exiting: X,
              highlighted: a != null && F.segmentId === a,
              dimmed: O,
              leaving: !!(u != null && u.includes(F.segmentId)),
              pulse: C.get(F.segmentId)
            },
            F.segmentId
          );
        })
      );
      return A ? [...Y, [A]] : Y;
    }).flat(2), liveMap: p };
  }, [e, t, n, r, o, s, i, c, d, a, l, u, y, C]), g = ue(/* @__PURE__ */ new Map()), I = ue([]), [U, j] = he([]);
  ge(() => () => I.current.forEach(clearTimeout), []), ge(() => {
    const p = g.current;
    g.current = M;
    const b = [];
    if (p.forEach((w, H) => {
      !M.has(H) && !w.faded && b.push(w);
    }), j((w) => {
      let H = w.filter((X) => !M.has(X.project.segmentId));
      for (const X of b)
        H.some((O) => O.project.segmentId === X.project.segmentId) || (H = [...H, X]);
      return H;
    }), !b.length)
      return;
    const E = new Set(b.map((w) => w.project.segmentId)), S = setTimeout(() => {
      j((w) => w.filter((H) => !E.has(H.project.segmentId)));
    }, 220);
    I.current.push(S);
  }, [M]);
  const z = [];
  g.current !== M && g.current.forEach((p, b) => {
    !M.has(b) && !p.faded && !U.some((E) => E.project.segmentId === b) && z.push(p);
  });
  const f = [...U, ...z].filter((p) => !M.has(p.project.segmentId)).map((p) => /* @__PURE__ */ h(
    hn,
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
  return /* @__PURE__ */ h(Te, { children: [...v, ...f] });
}, cd = ad;
x.div`
  box-sizing: border-box;
  font-family: ${We};
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
const ld = x.div`
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
`, dd = x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, ud = x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, fd = x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, hd = x.span`
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
`, Fr = x.div`
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
`, pd = x.div`
  ${At}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, md = x.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, gd = x.div`
  padding: 10px 12px;
`, yd = x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Br = x.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, zr = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Hr = x.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Wr = x.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, jr = x.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, vd = x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, xd = x.div`
  min-width: 0;
`, bd = x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, wd = x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, Zr = x.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, It = x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Ot = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Lt = x.div`
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
const Sd = {
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
}, Cd = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = ue(null), [s, i] = he("below"), c = at(), d = { ...Sd, ...c.tooltip };
  nn(() => {
    if (!o.current || !t)
      return;
    const g = o.current, { width: I, height: U } = g.getBoundingClientRect(), j = g.parentElement;
    if (!j)
      return;
    const z = j.getBoundingClientRect(), f = 12, p = 4, b = z.height - t.y, E = z.width - t.x;
    let S = t.x + f, w = t.y + f, H = "below";
    E < I + f && (S = t.x - I - f), b < U + f && (w = t.y - U - f, H = "above"), S = Math.max(p, Math.min(S, z.width - I - p)), w = Math.max(p, Math.min(w, z.height - U - p)), i(H), g.style.left = `${S}px`, g.style.top = `${w}px`;
  }, [t]);
  const a = n.reservationType === Bt.Tour, l = a && n.isOneDayEvent, u = a ? l ? "sun" : "tour" : "transfer", y = a ? l ? d.oneDay : d.tour : d.transfer, C = n.readiness ? Oo[n.readiness] : null, v = n.subcontractConfirmed === void 0 ? null : Ll[n.subcontractConfirmed ? "confirmed" : "unconfirmed"], M = [
    ...n.subcontractConfirmed ? n.subcontractDetails ?? [] : [],
    n.groupName && { label: d.groupName, value: n.groupName },
    n.driver && { label: d.driver, value: n.driver },
    n.passengers && { label: d.passengers, value: String(n.passengers) },
    n.flightNumber && { label: d.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ W(ld, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ W(dd, { children: [
      /* @__PURE__ */ W(ud, { children: [
        /* @__PURE__ */ h(fd, { children: n.bookingNumber }),
        /* @__PURE__ */ W(hd, { children: [
          /* @__PURE__ */ h(He, { name: u, strokeWidth: 2.4 }),
          y
        ] })
      ] }),
      /* @__PURE__ */ h(pd, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(md, { children: n.client }),
      C && /* @__PURE__ */ W(Fr, { style: { color: C.color }, children: [
        /* @__PURE__ */ h(He, { name: C.icon, strokeWidth: C.icon === "check" ? 2.6 : 2.2 }),
        n.readinessNote || C.label
      ] }),
      v && /* @__PURE__ */ W(Fr, { style: { color: v.color }, children: [
        /* @__PURE__ */ h(He, { name: v.icon, strokeWidth: v.icon === "check" ? 2.6 : 2.2 }),
        v.label
      ] })
    ] }),
    /* @__PURE__ */ W(gd, { children: [
      /* @__PURE__ */ W(yd, { children: [
        /* @__PURE__ */ W(Br, { children: [
          /* @__PURE__ */ h(zr, { children: d.startDate }),
          /* @__PURE__ */ W(Hr, { children: [
            /* @__PURE__ */ h(Wr, { children: n.startDate }),
            /* @__PURE__ */ h(jr, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ W(Br, { $isEnd: !0, children: [
          /* @__PURE__ */ h(zr, { children: d.endDate }),
          /* @__PURE__ */ W(Hr, { children: [
            /* @__PURE__ */ h(Wr, { children: n.endDate }),
            /* @__PURE__ */ h(jr, { children: n.endTime })
          ] })
        ] })
      ] }),
      M.length > 0 && /* @__PURE__ */ h(vd, { children: M.map((g, I) => /* @__PURE__ */ W(xd, { children: [
        /* @__PURE__ */ h(bd, { children: g.label }),
        /* @__PURE__ */ h(wd, { children: g.value })
      ] }, I)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ W(Zr, { children: [
        n.departureAddress && /* @__PURE__ */ W(It, { children: [
          /* @__PURE__ */ h(Ot, { children: d.salida }),
          /* @__PURE__ */ h(Lt, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ W(It, { children: [
          /* @__PURE__ */ h(Ot, { children: d.destino }),
          /* @__PURE__ */ h(Lt, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ W(It, { children: [
          /* @__PURE__ */ h(Ot, { children: d.regreso }),
          /* @__PURE__ */ h(Lt, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ W(Zr, { children: [
        n.serviceNotes && /* @__PURE__ */ W(It, { children: [
          /* @__PURE__ */ h(Ot, { children: d.serviceNotes }),
          /* @__PURE__ */ h(Lt, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ W(It, { children: [
          /* @__PURE__ */ h(Ot, { children: d.reservationNotes }),
          /* @__PURE__ */ h(Lt, { children: n.reservationNotes })
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
const kd = x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Md = x.div`
  position: absolute;
  height: ${on}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, $d = x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Vr = x.p`
  ${At}
  ${pt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Dd = x.p`
  ${At}
  ${pt}
`, Ed = x.div`
  position: sticky;
  left: ${Fe + 16}px;
  overflow: hidden;
`, _d = x.div`
  position: absolute;
  height: ${on}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Td = x.div`
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
`, Ad = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Pd = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Id = x.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Gr = x.div`
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
`, Ur = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Xr = x.div`
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
`, Kr = x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, pn = x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, mn = x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, wt = x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Jr = x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Od = ({
  draggedEvent: e,
  ghostPosition: r,
  ghostDimensions: t,
  dropTarget: n,
  isValidDrop: o,
  dragState: s,
  data: i,
  resourceOnly: c,
  separatorRowIndices: d = []
}) => {
  const a = at(), l = (z) => {
    let f = 0;
    for (const p of d)
      p <= z && f++;
    return z * ye + f * Be;
  }, [u, y] = he(null), [C, v] = he(0), M = ce((z = 400, f = 300) => {
    const b = t.width, E = 48, S = document.getElementById("react-scheduler");
    if (!S)
      return {
        x: r.x + b + 16,
        y: r.y
      };
    const w = S.scrollLeft, H = S.scrollTop, X = S.clientWidth, O = S.clientHeight, T = r.x - w, A = r.y - H, Y = {
      left: Fe + 16,
      // Avoid left column
      right: X - 16,
      top: 16,
      bottom: O - 16
    }, D = Y.right - (T + b), L = T - Y.left, F = Y.bottom - (A + E), re = A - Y.top;
    let ee, N;
    return D >= z + 16 ? ee = T + b + 16 : L >= z + 16 ? ee = T - z - 16 : D >= L ? (ee = T + b + 16, ee + z > Y.right && (ee = Y.right - z)) : (ee = T - z - 16, ee < Y.left && (ee = Y.left)), F >= f + 16 ? N = A + E + 16 : re >= f + 16 ? N = A - f - 16 : F >= re ? (N = A + E + 16, N + f > Y.bottom && (N = Y.bottom - f)) : (N = A - f - 16, N < Y.top && (N = Y.top)), ee = Math.max(Y.left, Math.min(ee, Y.right - z)), N = Math.max(Y.top, Math.min(N, Y.bottom - f)), {
      x: ee + w,
      y: N + H
    };
  }, [r.x, r.y, t.width]);
  ge(() => {
    s === "dragging" && e && C === 0 ? v(r.x) : s === "idle" && v(0);
  }, [s, e, r.x, C]), ge(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const g = Me(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const z = [];
    let f = 0;
    for (const p of i) {
      const b = Math.max(p.data.length, 1);
      if (p.capacity !== void 0 && e.totalPassengers > p.capacity)
        for (let E = 0; E < b; E++)
          z.push(f + E);
      f += b;
    }
    return z;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const I = s === "animating", U = Io(e.bgColor ?? ""), j = () => {
    if (!n)
      return "";
    const z = P(n.startDate).format("MMM D, HH:mm"), f = P(n.endDate).format("HH:mm");
    return `${z} - ${f}`;
  };
  return /* @__PURE__ */ W(kd, { children: [
    g.map((z) => /* @__PURE__ */ h(
      Pd,
      {
        style: {
          top: `${l(z)}px`,
          height: `${ye}px`
        }
      },
      z
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      Ad,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${l(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(
        _d,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${l(n.resourceIndex) + (ye - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ h(
        Td,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${l(n.resourceIndex) + (ye - 48) / 2}px`
          },
          children: j()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      Id,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          left: "0px",
          top: `${l(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && o && n.hasConflict && n.conflicts && n.conflicts.length > 0 && s === "dragging" && (() => {
      const z = M(400, 300);
      return /* @__PURE__ */ W(
        Gr,
        {
          style: {
            left: `${z.x}px`,
            top: `${z.y}px`
          },
          children: [
            /* @__PURE__ */ W(Ur, { children: [
              /* @__PURE__ */ h(Xr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Kr, { children: n.conflicts.map((f, p) => {
              const b = P(n.startDate).format("YYYY-MM-DD"), E = P(n.endDate).format("YYYY-MM-DD"), S = P(f.event.startDate).format("YYYY-MM-DD"), w = P(f.event.endDate).format("YYYY-MM-DD"), H = P(f.conflictStart).format("YYYY-MM-DD"), X = P(f.conflictEnd).format("YYYY-MM-DD"), O = b !== E, T = S !== w, A = H !== X, Y = O ? P(n.startDate).format("MMM D, h:mm A") : P(n.startDate).format("h:mm A"), D = O ? P(n.endDate).format("MMM D, h:mm A") : P(n.endDate).format("h:mm A"), L = T ? P(f.event.startDate).format("MMM D, h:mm A") : P(f.event.startDate).format("h:mm A"), F = T ? P(f.event.endDate).format("MMM D, h:mm A") : P(f.event.endDate).format("h:mm A"), re = A ? P(f.conflictStart).format("MMM D, h:mm A") : P(f.conflictStart).format("h:mm A"), ee = A ? P(f.conflictEnd).format("MMM D, h:mm A") : P(f.conflictEnd).format("h:mm A"), N = A ? "" : P(f.conflictStart).format("MMM D"), R = n.startDate.getTime(), q = n.endDate.getTime(), te = f.event.startDate.getTime(), k = f.event.endDate.getTime(), G = R >= te && R < k, _ = q > te && q <= k, Q = R <= te && q >= k, Z = te <= R && k >= q;
              let B = !1, m = !1, K = !1, $ = !1, V = "";
              return Q || Z ? (B = !0, m = !0, K = !0, $ = !0, V = `⚠️ ${a.conflicts.changeBoth}`) : G && _ ? (B = !0, m = !0, K = !0, $ = !0, V = `⚠️ ${a.conflicts.changeBoth}`) : G ? (B = !0, $ = !0, V = `⚠️ ${a.conflicts.changeStart}`) : _ && (m = !0, K = !0, V = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ W(pn, { children: [
                /* @__PURE__ */ W(mn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ W(wt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  B ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Y }) : Y,
                  " ",
                  a.conflicts.to,
                  " ",
                  m ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: D }) : D
                ] }),
                /* @__PURE__ */ W(wt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  K ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: L }) : L,
                  " ",
                  a.conflicts.to,
                  " ",
                  $ ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: F }) : F
                ] }),
                /* @__PURE__ */ W(Jr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  N && `${N}, `,
                  re,
                  " - ",
                  ee
                ] }),
                V && /* @__PURE__ */ h(wt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: V })
              ] }, p);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const z = M(400, 400);
      return /* @__PURE__ */ W(
        Gr,
        {
          style: {
            left: `${z.x}px`,
            top: `${z.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ W(Ur, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Xr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ W(Kr, { children: [
              (() => {
                const f = n.nearbyEvents.some((S) => S.position === "before"), p = n.nearbyEvents.some((S) => S.position === "after"), b = P(n.startDate).format("h:mm A"), E = P(n.endDate).format("h:mm A");
                return /* @__PURE__ */ W(pn, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ W(mn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(wt, { style: { fontWeight: 600 }, children: [
                    P(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: b }) : b,
                    " ",
                    a.conflicts.to,
                    " ",
                    p ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: E }) : E
                  ] }),
                  /* @__PURE__ */ h(wt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, p) => {
                const b = P(f.event.startDate).format("YYYY-MM-DD"), E = P(f.event.endDate).format("YYYY-MM-DD"), S = b !== E, w = S ? P(f.event.startDate).format("MMM D, h:mm A") : P(f.event.startDate).format("h:mm A"), H = S ? P(f.event.endDate).format("MMM D, h:mm A") : P(f.event.endDate).format("h:mm A"), X = P(f.event.startDate).format("MMM D"), O = Math.floor(f.timeGap / (1e3 * 60 * 60)), T = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), A = O > 0 ? `${O}h ${T}m` : `${T}m`, Y = f.position === "after", D = f.position === "before";
                return /* @__PURE__ */ W(pn, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ W(mn, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(wt, { children: [
                    !S && `${X}: `,
                    Y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    D ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: H }) : H
                  ] }),
                  /* @__PURE__ */ W(Jr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    A,
                    " ",
                    f.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, p);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      Md,
      {
        $isAnimating: I,
        $animateToX: u == null ? void 0 : u.x,
        $animateToY: u == null ? void 0 : u.y,
        style: {
          left: I ? `${(u == null ? void 0 : u.x) ?? 0}px` : "0",
          top: I ? `${(u == null ? void 0 : u.y) ?? 0}px` : "0",
          transform: I ? void 0 : `translate3d(${c ? C : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: U
        },
        children: /* @__PURE__ */ h($d, { children: /* @__PURE__ */ W(Ed, { children: [
          /* @__PURE__ */ h(Vr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Vr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(Dd, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Ld = Od, Yd = je`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Rd = x.div`
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
  animation: ${Yd} 1.5s ease-in-out infinite;
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
`, Nd = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  Rd,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Fd = Nd, Bd = je`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, zd = x.div`
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
  animation: ${Bd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, Hd = x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Wd = x.span`
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
`, jd = x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Zd = x.span`
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
const Vd = x.div`
  display: flex;
  gap: 8px;
`, qr = x.button`
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
`, Gd = ({ selections: e, onConfirm: r, onClear: t }) => {
  var v;
  const o = at().multiSelect, s = Me(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", u = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, C = /* @__PURE__ */ W(zd, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ W(Hd, { children: [
      /* @__PURE__ */ W(Wd, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ W(jd, { children: [
        "⚠️ ",
        u
      ] }),
      /* @__PURE__ */ h(Zd, { children: c })
    ] }),
    /* @__PURE__ */ W(Vd, { children: [
      /* @__PURE__ */ W(qr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ h(qr, { variant: "primary", $hasConflicts: y, onClick: r, children: y ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return Bo(C, document.body);
}, Ud = Gd, Xd = je`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Kd = x.div`
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
  animation: ${Xd} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && ht`
      border-style: dashed;
    `}
`, Jd = x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, qd = x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Qd = x.button`
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
`, eu = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = he(null), [a, l] = he({ x: 0, y: 0 }), u = ue(null), y = Me(() => {
    switch (t) {
      case 0:
        return Ze * 7;
      case 1:
        return _e;
      case 2:
        return Re;
      default:
        return _e;
    }
  }, [t]), C = Me(() => P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), v = Me(() => e.map((p, b) => {
    let E = 0, S = !1;
    for (const L of r) {
      if (L.id === p.resourceId) {
        S = !0;
        break;
      }
      E += Math.max(L.data.length, 1);
    }
    if (!S)
      return null;
    const w = P(p.startDate), H = P(p.endDate);
    let X, O;
    switch (t) {
      case 0:
        X = Math.floor(w.diff(C, "days") / 7), O = Math.max(1, Math.ceil(H.diff(w, "days") / 7) + 1);
        break;
      case 1:
        X = w.diff(C, "days"), O = Math.max(1, H.diff(w, "days") + 1);
        break;
      case 2:
        X = w.diff(C, "hours"), O = Math.max(1, H.diff(w, "hours") + 1);
        break;
      default:
        X = 0, O = 1;
    }
    const T = X * y;
    let A = 0;
    for (const L of i)
      L <= E && A++;
    const Y = E * ye + A * Be, D = O * y;
    return {
      index: b,
      selection: p,
      x: T,
      y: Y,
      width: D,
      height: ye
    };
  }), [e, r, t, C, y]), M = (p, b) => {
    const E = P(p).format("MMM D"), S = P(b).format("MMM D");
    return E === S ? E : `${E} - ${S}`;
  }, g = (p) => !p.hasConflict || !p.conflicts ? "" : `⚠️ Conflicts with:
${p.conflicts.map((E) => {
    const S = (E.overlapDuration / 36e5).toFixed(1);
    return `• ${E.event.title} (${S}h overlap)`;
  }).join(`
`)}`, I = ce(
    (p) => {
      let b = 0;
      for (const E of r) {
        const S = Math.max(E.data.length, 1);
        if (p >= b * ye && p < (b + S) * ye)
          return {
            resourceId: E.id,
            resourceLabel: E.label
          };
        b += S;
      }
      return null;
    },
    [r]
  ), U = ce(
    (p) => {
      const b = Math.floor(p / y);
      switch (t) {
        case 0:
          return C.add(b * 7, "days").toDate();
        case 1:
          return C.add(b, "days").toDate();
        case 2:
          return C.add(b, "hours").toDate();
        default:
          return C.toDate();
      }
    },
    [t, C, y]
  ), j = ce(
    (p, b) => {
      !s || (p.preventDefault(), p.stopPropagation(), !v[b]) || (u.current = { x: p.clientX, y: p.clientY }, d(b), l({ x: 0, y: 0 }));
    },
    [s, v]
  ), z = ce(
    (p) => {
      if (c === null || !u.current)
        return;
      const b = p.clientX - u.current.x, E = p.clientY - u.current.y, S = Math.round(b / y) * y, w = Math.round(E / ye) * ye;
      l({ x: S, y: w });
    },
    [c, y]
  ), f = ce(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const p = v[c];
    if (!p) {
      d(null), l({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const b = p.x + a.x, E = p.y + a.y, S = I(E + ye / 2);
    if (!S) {
      d(null), l({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const w = U(b), H = e[c], X = H.endDate.getTime() - H.startDate.getTime(), O = new Date(w.getTime() + X);
    s(c, {
      startDate: w,
      endDate: O,
      resourceId: S.resourceId,
      resourceLabel: S.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), u.current = null;
  }, [c, a, v, e, s, I, U]);
  return ge(() => {
    if (c !== null)
      return document.addEventListener("mousemove", z), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", z), document.removeEventListener("mouseup", f);
      };
  }, [c, z, f]), /* @__PURE__ */ h(Te, { children: v.map((p) => {
    if (!p)
      return null;
    const b = p.selection.hasConflict || !1, E = c === p.index, S = E ? p.x + a.x : p.x, w = E ? p.y + a.y : p.y;
    return /* @__PURE__ */ W(
      Kd,
      {
        $hasConflict: b,
        $isDragging: E,
        style: {
          left: S,
          top: w,
          width: p.width,
          height: p.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (H) => j(H, p.index),
        children: [
          b && /* @__PURE__ */ h(qd, { title: g(p.selection), children: "⚠️" }),
          /* @__PURE__ */ h(Jd, { $hasConflict: b, children: M(p.selection.startDate, p.selection.endDate) }),
          /* @__PURE__ */ h(
            Qd,
            {
              onClick: (H) => {
                H.stopPropagation(), o(p.index);
              },
              onMouseDown: (H) => H.stopPropagation(),
              title: b ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      p.index
    );
  }) });
}, tu = eu, Lo = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? Ze * 7 : _e, s = P().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, nu = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ theme: e }) => e.colors.today}12;
`, ru = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ke(), n = Me(
    () => Lo(P(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(nu, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, ou = ru, su = "#2f6fed", iu = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${su}1c;
`, au = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = Ke(), o = Me(() => !n || n.isSame(P(), "day") ? null : Lo(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(iu, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0 }) : null;
}, cu = au;
export {
  hu as Scheduler
};
