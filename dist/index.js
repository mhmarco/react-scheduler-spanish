var Lo = Object.defineProperty;
var Yo = (e, r, t) => r in e ? Lo(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Kn = (e, r, t) => (Yo(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as B, Fragment as Te } from "react/jsx-runtime";
import * as oe from "react";
import at, { useRef as ue, useContext as Qe, useMemo as $e, useLayoutEffect as en, useDebugValue as Jn, createElement as Ro, createContext as Nn, useState as he, useCallback as de, useEffect as ge, forwardRef as Fn, useImperativeHandle as Kr } from "react";
import { createPortal as No } from "react-dom";
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yt = {}, Fo = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
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
var qn;
function zo() {
  if (qn)
    return be;
  qn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function M(g) {
    if (typeof g == "object" && g !== null) {
      var O = g.$$typeof;
      switch (O) {
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
                  return O;
              }
          }
        case r:
          return O;
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
    return typeof g == "string" || typeof g == "function" || g === t || g === o || g === n || g === a || g === l || g === C || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === u || g.$$typeof === s || g.$$typeof === i || g.$$typeof === d || g.$$typeof === b || g.getModuleId !== void 0);
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
var Qn;
function Bo() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), b = !1, M = !1, g = !1, O = !1, U = !1, W;
    W = Symbol.for("react.module.reference");
    function z($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === t || $ === o || U || $ === n || $ === a || $ === l || O || $ === C || b || M || g || typeof $ == "object" && $ !== null && ($.$$typeof === y || $.$$typeof === u || $.$$typeof === s || $.$$typeof === i || $.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === W || $.getModuleId !== void 0));
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
    var m = i, w = s, T = e, x = d, S = t, j = y, K = u, L = r, D = o, P = n, Y = a, E = l, A = !1, H = !1;
    function re($) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee($) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R($) {
      return f($) === i;
    }
    function N($) {
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
    function F($) {
      return f($) === n;
    }
    function p($) {
      return f($) === a;
    }
    function X($) {
      return f($) === l;
    }
    we.ContextConsumer = m, we.ContextProvider = w, we.Element = T, we.ForwardRef = x, we.Fragment = S, we.Lazy = j, we.Memo = K, we.Portal = L, we.Profiler = D, we.StrictMode = P, we.Suspense = Y, we.SuspenseList = E, we.isAsyncMode = re, we.isConcurrentMode = ee, we.isContextConsumer = R, we.isContextProvider = N, we.isElement = q, we.isForwardRef = te, we.isFragment = k, we.isLazy = G, we.isMemo = _, we.isPortal = Q, we.isProfiler = Z, we.isStrictMode = F, we.isSuspense = p, we.isSuspenseList = X, we.isValidElementType = z, we.typeOf = f;
  }()), we;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = zo() : e.exports = Bo();
})(Fo);
function Ho(e) {
  function r(R, N, q, te, k) {
    for (var G = 0, _ = 0, Q = 0, Z = 0, F, p, X = 0, $ = 0, V, ne = V = F = 0, J = 0, le = 0, pe = 0, fe = 0, ve = q.length, De = ve - 1, ke, se = "", me = "", Ae = "", Re = "", Ne; J < ve; ) {
      if (p = q.charCodeAt(J), J === De && _ + Z + Q + G !== 0 && (_ !== 0 && (p = _ === 47 ? 10 : 47), Z = Q = G = 0, ve++, De++), _ + Z + Q + G === 0) {
        if (J === De && (0 < le && (se = se.replace(y, "")), 0 < se.trim().length)) {
          switch (p) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += q.charAt(J);
          }
          p = 59;
        }
        switch (p) {
          case 123:
            for (se = se.trim(), F = se.charCodeAt(0), V = 1, fe = ++J; J < ve; ) {
              switch (p = q.charCodeAt(J)) {
                case 123:
                  V++;
                  break;
                case 125:
                  V--;
                  break;
                case 47:
                  switch (p = q.charCodeAt(J + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = J + 1; ne < De; ++ne)
                          switch (q.charCodeAt(ne)) {
                            case 47:
                              if (p === 42 && q.charCodeAt(ne - 1) === 42 && J + 2 !== ne) {
                                J = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (p === 47) {
                                J = ne + 1;
                                break e;
                              }
                          }
                        J = ne;
                      }
                  }
                  break;
                case 91:
                  p++;
                case 40:
                  p++;
                case 34:
                case 39:
                  for (; J++ < De && q.charCodeAt(J) !== p; )
                    ;
              }
              if (V === 0)
                break;
              J++;
            }
            switch (V = q.substring(fe, J), F === 0 && (F = (se = se.replace(u, "").trim()).charCodeAt(0)), F) {
              case 64:
                switch (0 < le && (se = se.replace(y, "")), p = se.charCodeAt(1), p) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = N;
                    break;
                  default:
                    le = Y;
                }
                if (V = r(N, le, V, p, k + 1), fe = V.length, 0 < A && (le = t(Y, se, pe), Ne = c(3, V, le, N, L, K, fe, p, k, te), se = le.join(""), Ne !== void 0 && (fe = (V = Ne.trim()).length) === 0 && (p = 0, V = "")), 0 < fe)
                  switch (p) {
                    case 115:
                      se = se.replace(m, i);
                    case 100:
                    case 109:
                    case 45:
                      V = se + "{" + V + "}";
                      break;
                    case 107:
                      se = se.replace(U, "$1 $2"), V = se + "{" + V + "}", V = P === 1 || P === 2 && s("@" + V, 3) ? "@-webkit-" + V + "@" + V : "@" + V;
                      break;
                    default:
                      V = se + V, te === 112 && (V = (me += V, ""));
                  }
                else
                  V = "";
                break;
              default:
                V = r(N, t(N, se, pe), V, te, k + 1);
            }
            Ae += V, V = pe = le = ne = F = 0, se = "", p = q.charCodeAt(++J);
            break;
          case 125:
          case 59:
            if (se = (0 < le ? se.replace(y, "") : se).trim(), 1 < (fe = se.length))
              switch (ne === 0 && (F = se.charCodeAt(0), F === 45 || 96 < F && 123 > F) && (fe = (se = se.replace(" ", ":")).length), 0 < A && (Ne = c(1, se, N, R, L, K, me.length, te, k, te)) !== void 0 && (fe = (se = Ne.trim()).length) === 0 && (se = "\0\0"), F = se.charCodeAt(0), p = se.charCodeAt(1), F) {
                case 0:
                  break;
                case 64:
                  if (p === 105 || p === 99) {
                    Re += se + q.charAt(J);
                    break;
                  }
                default:
                  se.charCodeAt(fe - 1) !== 58 && (me += o(se, F, p, se.charCodeAt(2)));
              }
            pe = le = ne = F = 0, se = "", p = q.charCodeAt(++J);
        }
      }
      switch (p) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + F === 0 && te !== 107 && 0 < se.length && (le = 1, se += "\0"), 0 < A * re && c(0, se, N, R, L, K, me.length, te, k, te), K = 1, L++;
          break;
        case 59:
        case 125:
          if (_ + Z + Q + G === 0) {
            K++;
            break;
          }
        default:
          switch (K++, ke = q.charAt(J), p) {
            case 9:
            case 32:
              if (Z + G + _ === 0)
                switch (X) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ke = "";
                    break;
                  default:
                    p !== 32 && (ke = " ");
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
              if (Z + _ + G + D === 0 && 0 < ne)
                switch (J - ne) {
                  case 2:
                    X === 112 && q.charCodeAt(J - 3) === 58 && (D = X);
                  case 8:
                    $ === 111 && (D = $);
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
              _ === 0 && (Z = Z === p ? 0 : Z === 0 ? p : Z);
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
                if (F === 0)
                  switch (2 * X + 3 * $) {
                    case 533:
                      break;
                    default:
                      F = 1;
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
                    switch (2 * p + 3 * q.charCodeAt(J + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        fe = J, _ = 42;
                    }
                    break;
                  case 42:
                    p === 47 && X === 42 && fe + 2 !== J && (q.charCodeAt(fe + 2) === 33 && (me += q.substring(fe, J + 1)), ke = "", _ = 0);
                }
          }
          _ === 0 && (se += ke);
      }
      $ = X, X = p, J++;
    }
    if (fe = me.length, 0 < fe) {
      if (le = N, 0 < A && (Ne = c(2, me, le, R, L, K, fe, te, k, te), Ne !== void 0 && (me = Ne).length === 0))
        return Re + me + Ae;
      if (me = le.join(",") + "{" + me + "}", P * D !== 0) {
        switch (P !== 2 || s(me, 2) || (D = 0), D) {
          case 111:
            me = me.replace(z, ":-moz-$1") + me;
            break;
          case 112:
            me = me.replace(W, "::-webkit-input-$1") + me.replace(W, "::-moz-$1") + me.replace(W, ":-ms-input-$1") + me;
        }
        D = 0;
      }
    }
    return Re + me + Ae;
  }
  function t(R, N, q) {
    var te = N.trim().split(g);
    N = te;
    var k = te.length, G = R.length;
    switch (G) {
      case 0:
      case 1:
        var _ = 0;
        for (R = G === 0 ? "" : R[0] + " "; _ < k; ++_)
          N[_] = n(R, N[_], q).trim();
        break;
      default:
        var Q = _ = 0;
        for (N = []; _ < k; ++_)
          for (var Z = 0; Z < G; ++Z)
            N[Q++] = n(R[Z] + " ", te[_], q).trim();
    }
    return N;
  }
  function n(R, N, q) {
    var te = N.charCodeAt(0);
    switch (33 > te && (te = (N = N.trim()).charCodeAt(0)), te) {
      case 38:
        return N.replace(O, "$1" + R.trim());
      case 58:
        return R.trim() + N.replace(O, "$1" + R.trim());
      default:
        if (0 < 1 * q && 0 < N.indexOf("\f"))
          return N.replace(O, (R.charCodeAt(0) === 58 ? "" : "$1") + R.trim());
    }
    return R + N;
  }
  function o(R, N, q, te) {
    var k = R + ";", G = 2 * N + 3 * q + 4 * te;
    if (G === 944) {
      R = k.indexOf(":", 9) + 1;
      var _ = k.substring(R, k.length - 1).trim();
      return _ = k.substring(0, R).trim() + _ + ";", P === 1 || P === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (P === 0 || P === 2 && !s(k, 1))
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
        return b.test(k) ? k.replace(C, ":-webkit-") + k.replace(C, ":-moz-") + k : k;
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
        switch (N = (k = R).length - 10, _ = (k.charCodeAt(N) === 33 ? k.substring(0, N) : k).substring(R.indexOf(":", 7) + 1).trim(), G = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
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
              return "-webkit-" + k + "-ms-flex-item-" + k.replace(T, "") + k;
            default:
              return "-webkit-" + k + "-ms-flex-line-pack" + k.replace("align-content", "").replace(T, "") + k;
          }
        break;
      case 973:
      case 989:
        if (k.charCodeAt(3) !== 45 || k.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (S.test(R) === !0)
          return (_ = R.substring(R.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(R.replace("stretch", "fill-available"), N, q, te).replace(":fill-available", ":stretch") : k.replace(_, "-webkit-" + _) + k.replace(_, "-moz-" + _.replace("fill-", "")) + k;
        break;
      case 962:
        if (k = "-webkit-" + k + (k.charCodeAt(5) === 102 ? "-ms-" + k : "") + k, q + te === 211 && k.charCodeAt(13) === 105 && 0 < k.indexOf("transform", 10))
          return k.substring(0, k.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + k;
    }
    return k;
  }
  function s(R, N) {
    var q = R.indexOf(N === 1 ? ":" : "{"), te = R.substring(0, N !== 3 ? q : 10);
    return q = R.substring(q + 1, R.length - 1), H(N !== 2 ? te : te.replace(x, "$1"), q, N);
  }
  function i(R, N) {
    var q = o(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return q !== N + ";" ? q.replace(w, " or ($1)").substring(4) : "(" + N + ")";
  }
  function c(R, N, q, te, k, G, _, Q, Z, F) {
    for (var p = 0, X = N, $; p < A; ++p)
      switch ($ = E[p].call(l, R, X, q, te, k, G, _, Q, Z, F)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          X = $;
      }
    if (X !== N)
      return X;
  }
  function d(R) {
    switch (R) {
      case void 0:
      case null:
        A = E.length = 0;
        break;
      default:
        if (typeof R == "function")
          E[A++] = R;
        else if (typeof R == "object")
          for (var N = 0, q = R.length; N < q; ++N)
            d(R[N]);
        else
          re = !!R | 0;
    }
    return d;
  }
  function a(R) {
    return R = R.prefix, R !== void 0 && (H = null, R ? typeof R != "function" ? P = 1 : (P = 2, H = R) : P = 0), a;
  }
  function l(R, N) {
    var q = R;
    if (33 > q.charCodeAt(0) && (q = q.trim()), ee = q, q = [ee], 0 < A) {
      var te = c(-1, N, q, q, L, K, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (N = te);
    }
    var k = r(Y, q, N, 0, 0);
    return 0 < A && (te = c(-2, k, q, q, L, K, k.length, 0, 0, 0), te !== void 0 && (k = te)), ee = "", D = 0, K = L = 1, k;
  }
  var u = /^\0+/g, y = /[\0\r\f]/g, C = /: */g, b = /zoo|gra/, M = /([,: ])(transform)/g, g = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, W = /::(place)/g, z = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, m = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, T = /-self|flex-/g, x = /[^]*?(:[rp][el]a[\w-]+)[^]*/, S = /stretch|:\s*\w+\-(?:conte|avail)/, j = /([^-])(image-set\()/, K = 1, L = 1, D = 0, P = 1, Y = [], E = [], A = 0, H = null, re = 0, ee = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var Wo = {
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
function jo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Zo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, er = /* @__PURE__ */ jo(
  function(e) {
    return Zo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), pn = {}, Vo = {
  get exports() {
    return pn;
  },
  set exports(e) {
    pn = e;
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
var tr;
function Go() {
  if (tr)
    return Se;
  tr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function W(f) {
    if (typeof f == "object" && f !== null) {
      var m = f.$$typeof;
      switch (m) {
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
                case b:
                case C:
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
  function z(f) {
    return W(f) === a;
  }
  return Se.AsyncMode = d, Se.ConcurrentMode = a, Se.ContextConsumer = c, Se.ContextProvider = i, Se.Element = r, Se.ForwardRef = l, Se.Fragment = n, Se.Lazy = b, Se.Memo = C, Se.Portal = t, Se.Profiler = s, Se.StrictMode = o, Se.Suspense = u, Se.isAsyncMode = function(f) {
    return z(f) || W(f) === d;
  }, Se.isConcurrentMode = z, Se.isContextConsumer = function(f) {
    return W(f) === c;
  }, Se.isContextProvider = function(f) {
    return W(f) === i;
  }, Se.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, Se.isForwardRef = function(f) {
    return W(f) === l;
  }, Se.isFragment = function(f) {
    return W(f) === n;
  }, Se.isLazy = function(f) {
    return W(f) === b;
  }, Se.isMemo = function(f) {
    return W(f) === C;
  }, Se.isPortal = function(f) {
    return W(f) === t;
  }, Se.isProfiler = function(f) {
    return W(f) === s;
  }, Se.isStrictMode = function(f) {
    return W(f) === o;
  }, Se.isSuspense = function(f) {
    return W(f) === u;
  }, Se.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === a || f === s || f === o || f === u || f === y || typeof f == "object" && f !== null && (f.$$typeof === b || f.$$typeof === C || f.$$typeof === i || f.$$typeof === c || f.$$typeof === l || f.$$typeof === g || f.$$typeof === O || f.$$typeof === U || f.$$typeof === M);
  }, Se.typeOf = W, Se;
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
var nr;
function Uo() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
    function W(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === a || p === s || p === o || p === u || p === y || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === C || p.$$typeof === i || p.$$typeof === c || p.$$typeof === l || p.$$typeof === g || p.$$typeof === O || p.$$typeof === U || p.$$typeof === M);
    }
    function z(p) {
      if (typeof p == "object" && p !== null) {
        var X = p.$$typeof;
        switch (X) {
          case r:
            var $ = p.type;
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
                  case b:
                  case C:
                  case i:
                    return V;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var f = d, m = a, w = c, T = i, x = r, S = l, j = n, K = b, L = C, D = t, P = s, Y = o, E = u, A = !1;
    function H(p) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), re(p) || z(p) === d;
    }
    function re(p) {
      return z(p) === a;
    }
    function ee(p) {
      return z(p) === c;
    }
    function R(p) {
      return z(p) === i;
    }
    function N(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function q(p) {
      return z(p) === l;
    }
    function te(p) {
      return z(p) === n;
    }
    function k(p) {
      return z(p) === b;
    }
    function G(p) {
      return z(p) === C;
    }
    function _(p) {
      return z(p) === t;
    }
    function Q(p) {
      return z(p) === s;
    }
    function Z(p) {
      return z(p) === o;
    }
    function F(p) {
      return z(p) === u;
    }
    Ce.AsyncMode = f, Ce.ConcurrentMode = m, Ce.ContextConsumer = w, Ce.ContextProvider = T, Ce.Element = x, Ce.ForwardRef = S, Ce.Fragment = j, Ce.Lazy = K, Ce.Memo = L, Ce.Portal = D, Ce.Profiler = P, Ce.StrictMode = Y, Ce.Suspense = E, Ce.isAsyncMode = H, Ce.isConcurrentMode = re, Ce.isContextConsumer = ee, Ce.isContextProvider = R, Ce.isElement = N, Ce.isForwardRef = q, Ce.isFragment = te, Ce.isLazy = k, Ce.isMemo = G, Ce.isPortal = _, Ce.isProfiler = Q, Ce.isStrictMode = Z, Ce.isSuspense = F, Ce.isValidElementType = W, Ce.typeOf = z;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Go() : e.exports = Uo();
})(Vo);
var zn = pn, Xo = {
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
}, Ko = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Jo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Jr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Bn = {};
Bn[zn.ForwardRef] = Jo;
Bn[zn.Memo] = Jr;
function rr(e) {
  return zn.isMemo(e) ? Jr : Bn[e.$$typeof] || Xo;
}
var qo = Object.defineProperty, Qo = Object.getOwnPropertyNames, or = Object.getOwnPropertySymbols, es = Object.getOwnPropertyDescriptor, ts = Object.getPrototypeOf, sr = Object.prototype;
function qr(e, r, t) {
  if (typeof r != "string") {
    if (sr) {
      var n = ts(r);
      n && n !== sr && qr(e, n, t);
    }
    var o = Qo(r);
    or && (o = o.concat(or(r)));
    for (var s = rr(e), i = rr(r), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!Ko[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = es(r, d);
        try {
          qo(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var ns = qr;
function Ve() {
  return (Ve = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ir = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, mn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Yt.typeOf(e);
}, Ut = Object.freeze([]), nt = Object.freeze({});
function Ct(e) {
  return typeof e == "function";
}
function gn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Hn(e) {
  return e && typeof e.styledComponentId == "string";
}
var kt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Wn = typeof window < "u" && "HTMLElement" in window, rs = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), os = {}, ss = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function is() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Je(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(is.apply(void 0, [ss[e]].concat(t)).trim());
}
var as = function() {
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
        (i <<= 1) < 0 && Je(16, "" + t);
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
}(), Vt = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Lt = 1, Ht = function(e) {
  if (Vt.has(e))
    return Vt.get(e);
  for (; Xt.has(Lt); )
    Lt++;
  var r = Lt++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Je(16, "" + r), Vt.set(e, r), Xt.set(r, e), r;
}, cs = function(e) {
  return Xt.get(e);
}, ls = function(e, r) {
  r >= Lt && (Lt = r + 1), Vt.set(e, r), Xt.set(r, e);
}, ds = "style[" + kt + '][data-styled-version="5.3.8"]', us = new RegExp("^" + kt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), fs = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, hs = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(us);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (ls(a, d), fs(e, a, c[3]), e.getTag().insertRules(d, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, ps = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Qr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(kt))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(kt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = ps();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, ms = function() {
  function e(t) {
    var n = this.element = Qr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var d = s[i];
        if (d.ownerNode === o)
          return d;
      }
      Je(17);
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
}(), gs = function() {
  function e(t) {
    var n = this.element = Qr(t);
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
}(), ys = function() {
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
}(), ar = Wn, vs = { isServer: !Wn, useCSSOMInjection: !rs }, Kt = function() {
  function e(t, n, o) {
    t === void 0 && (t = nt), n === void 0 && (n = {}), this.options = Ve({}, vs, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Wn && ar && (ar = !1, function(s) {
      for (var i = document.querySelectorAll(ds), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(kt) !== "active" && (hs(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ht(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ve({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new ys(i) : s ? new ms(i) : new gs(i), new as(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ht(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Ht(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ht(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = cs(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = n.getGroup(i);
          if (d && a && d.size) {
            var l = kt + ".g" + i + '[id="' + c + '"]', u = "";
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
}(), xs = /(a)(d)/gi, cr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function yn(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = cr(r % 52) + t;
  return (cr(r % 52) + t).replace(xs, "$1-$2");
}
var it = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, eo = function(e) {
  return it(5381, e);
};
function to(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Ct(t) && !Hn(t))
      return !1;
  }
  return !0;
}
var bs = eo("5.3.8"), ws = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && to(r), this.componentId = t, this.baseHash = it(bs, t), this.baseStyle = n, Kt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ct(this.rules, r, t, n).join(""), c = yn(it(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = n(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = it(this.baseHash, n.hash), u = "", y = 0; y < a; y++) {
        var C = this.rules[y];
        if (typeof C == "string")
          u += C, process.env.NODE_ENV !== "production" && (l = it(l, C + y));
        else if (C) {
          var b = ct(C, r, t, n), M = Array.isArray(b) ? b.join("") : b;
          l = it(l, M + y), u += M;
        }
      }
      if (u) {
        var g = yn(l >>> 0);
        if (!t.hasNameForId(o, g)) {
          var O = n(u, "." + g, void 0, o);
          t.insertRules(o, g, O);
        }
        s.push(g);
      }
    }
    return s.join(" ");
  }, e;
}(), Ss = /^\s*\/\/.*$/gm, Cs = [":", "[", ".", "#"];
function ks(e) {
  var r, t, n, o, s = e === void 0 ? nt : e, i = s.options, c = i === void 0 ? nt : i, d = s.plugins, a = d === void 0 ? Ut : d, l = new Ho(c), u = [], y = function(M) {
    function g(O) {
      if (O)
        try {
          M(O + "}");
        } catch {
        }
    }
    return function(O, U, W, z, f, m, w, T, x, S) {
      switch (O) {
        case 1:
          if (x === 0 && U.charCodeAt(0) === 64)
            return M(U + ";"), "";
          break;
        case 2:
          if (T === 0)
            return U + "/*|*/";
          break;
        case 3:
          switch (T) {
            case 102:
            case 112:
              return M(W[0] + U), "";
            default:
              return U + (S === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(g);
      }
    };
  }(function(M) {
    u.push(M);
  }), C = function(M, g, O) {
    return g === 0 && Cs.indexOf(O[t.length]) !== -1 || O.match(o) ? M : "." + r;
  };
  function b(M, g, O, U) {
    U === void 0 && (U = "&");
    var W = M.replace(Ss, ""), z = g && O ? O + " " + g + " { " + W + " }" : W;
    return r = U, t = g, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(O || !g ? "" : g, z);
  }
  return l.use([].concat(a, [function(M, g, O) {
    M === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(n, C));
  }, y, function(M) {
    if (M === -2) {
      var g = u;
      return u = [], g;
    }
  }])), b.hash = a.length ? a.reduce(function(M, g) {
    return g.name || Je(15), it(M, g.name);
  }, 5381).toString() : "", b;
}
var no = at.createContext();
no.Consumer;
var ro = at.createContext(), Ms = (ro.Consumer, new Kt()), vn = ks();
function oo() {
  return Qe(no) || Ms;
}
function so() {
  return Qe(ro) || vn;
}
var io = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = vn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Je(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = vn), this.name + r.hash;
  }, e;
}(), $s = /([A-Z])/, Ds = /([A-Z])/g, Es = /^ms-/, _s = function(e) {
  return "-" + e.toLowerCase();
};
function lr(e) {
  return $s.test(e) ? e.replace(Ds, _s).replace(Es, "-ms-") : e;
}
var dr = function(e) {
  return e == null || e === !1 || e === "";
};
function ct(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = ct(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (dr(e))
    return "";
  if (Hn(e))
    return "." + e.styledComponentId;
  if (Ct(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var d = e(r);
    return process.env.NODE_ENV !== "production" && Yt.isElement(d) && console.warn(gn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ct(d, r, t, n);
  }
  var a;
  return e instanceof io ? t ? (e.inject(t, n), e.getName(n)) : e : mn(e) ? function l(u, y) {
    var C, b, M = [];
    for (var g in u)
      u.hasOwnProperty(g) && !dr(u[g]) && (Array.isArray(u[g]) && u[g].isCss || Ct(u[g]) ? M.push(lr(g) + ":", u[g], ";") : mn(u[g]) ? M.push.apply(M, l(u[g], g)) : M.push(lr(g) + ": " + (C = g, (b = u[g]) == null || typeof b == "boolean" || b === "" ? "" : typeof b != "number" || b === 0 || C in Wo ? String(b).trim() : b + "px") + ";"));
    return y ? [y + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var ur = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Et(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return Ct(e) || mn(e) ? ur(ct(ir(Ut, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ur(ct(ir(e, t)));
}
var fr = /invalid hook call/i, Wt = /* @__PURE__ */ new Set(), ao = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (fr.test(s))
          o = !1, Wt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          n.apply(void 0, [s].concat(c));
        }
      }, ue(), o && !Wt.has(t) && (console.warn(t), Wt.add(t));
    } catch (s) {
      fr.test(s.message) && Wt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, co = function(e, r, t) {
  return t === void 0 && (t = nt), e.theme !== t.theme && e.theme || r || t.theme;
}, Ts = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, As = /(^-|-$)/g;
function on(e) {
  return e.replace(Ts, "-").replace(As, "");
}
var jn = function(e) {
  return yn(eo(e) >>> 0);
};
function jt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var xn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ps = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Is(e, r, t) {
  var n = e[t];
  xn(r) && xn(n) ? lo(n, r) : e[t] = r;
}
function lo(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (xn(i))
      for (var c in i)
        Ps(c) && Is(e, i[c], c);
  }
  return e;
}
var Mt = at.createContext();
Mt.Consumer;
function Os(e) {
  var r = Qe(Mt), t = $e(function() {
    return function(n, o) {
      if (!n)
        return Je(14);
      if (Ct(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Je(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Je(8) : o ? Ve({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? at.createElement(Mt.Provider, { value: t }, e.children) : null;
}
var sn = {};
function uo(e, r, t) {
  var n = Hn(e), o = !jt(e), s = r.attrs, i = s === void 0 ? Ut : s, c = r.componentId, d = c === void 0 ? function(U, W) {
    var z = typeof U != "string" ? "sc" : on(U);
    sn[z] = (sn[z] || 0) + 1;
    var f = z + "-" + jn("5.3.8" + z + sn[z]);
    return W ? W + "-" + f : f;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, l = a === void 0 ? function(U) {
    return jt(U) ? "styled." + U : "Styled(" + gn(U) + ")";
  }(e) : a, u = r.displayName && r.componentId ? on(r.displayName) + "-" + r.componentId : r.componentId || d, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, C = r.shouldForwardProp;
  n && e.shouldForwardProp && (C = r.shouldForwardProp ? function(U, W, z) {
    return e.shouldForwardProp(U, W, z) && r.shouldForwardProp(U, W, z);
  } : e.shouldForwardProp);
  var b, M = new ws(t, u, n ? e.componentStyle : void 0), g = M.isStatic && i.length === 0, O = function(U, W) {
    return function(z, f, m, w) {
      var T = z.attrs, x = z.componentStyle, S = z.defaultProps, j = z.foldedComponentIds, K = z.shouldForwardProp, L = z.styledComponentId, D = z.target;
      process.env.NODE_ENV !== "production" && Jn(L);
      var P = function(te, k, G) {
        te === void 0 && (te = nt);
        var _ = Ve({}, k, { theme: te }), Q = {};
        return G.forEach(function(Z) {
          var F, p, X, $ = Z;
          for (F in Ct($) && ($ = $(_)), $)
            _[F] = Q[F] = F === "className" ? (p = Q[F], X = $[F], p && X ? p + " " + X : p || X) : $[F];
        }), [_, Q];
      }(co(f, Qe(Mt), S) || nt, f, T), Y = P[0], E = P[1], A = function(te, k, G, _) {
        var Q = oo(), Z = so(), F = k ? te.generateAndInjectStyles(nt, Q, Z) : te.generateAndInjectStyles(G, Q, Z);
        return process.env.NODE_ENV !== "production" && Jn(F), process.env.NODE_ENV !== "production" && !k && _ && _(F), F;
      }(x, w, Y, process.env.NODE_ENV !== "production" ? z.warnTooManyClasses : void 0), H = m, re = E.$as || f.$as || E.as || f.as || D, ee = jt(re), R = E !== f ? Ve({}, f, {}, E) : f, N = {};
      for (var q in R)
        q[0] !== "$" && q !== "as" && (q === "forwardedAs" ? N.as = R[q] : (K ? K(q, er, re) : !ee || er(q)) && (N[q] = R[q]));
      return f.style && E.style !== f.style && (N.style = Ve({}, f.style, {}, E.style)), N.className = Array.prototype.concat(j, L, A !== L ? A : null, f.className, E.className).filter(Boolean).join(" "), N.ref = H, Ro(re, N);
    }(b, U, W, g);
  };
  return O.displayName = l, (b = at.forwardRef(O)).attrs = y, b.componentStyle = M, b.displayName = l, b.shouldForwardProp = C, b.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ut, b.styledComponentId = u, b.target = n ? e.target : e, b.withComponent = function(U) {
    var W = r.componentId, z = function(m, w) {
      if (m == null)
        return {};
      var T, x, S = {}, j = Object.keys(m);
      for (x = 0; x < j.length; x++)
        T = j[x], w.indexOf(T) >= 0 || (S[T] = m[T]);
      return S;
    }(r, ["componentId"]), f = W && W + "-" + (jt(U) ? U : on(gn(U)));
    return uo(U, Ve({}, z, { attrs: y, componentId: f }), t);
  }, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? lo({}, e.defaultProps, U) : U;
  } }), process.env.NODE_ENV !== "production" && (ao(l, u), b.warnTooManyClasses = function(U, W) {
    var z = {}, f = !1;
    return function(m) {
      if (!f && (z[m] = !0, Object.keys(z).length >= 200)) {
        var w = W ? ' with the id of "' + W + '"' : "";
        console.warn("Over 200 classes were generated for component " + U + w + `.
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
  }(l, u)), b.toString = function() {
    return "." + b.styledComponentId;
  }, o && ns(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), b;
}
var bn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = nt), !Yt.isValidElementType(n))
      return Je(1, String(n));
    var s = function() {
      return t(n, o, Et.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Ve({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Ve({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(uo, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  bn[e] = bn(e);
});
var Ls = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = to(t), Kt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(ct(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && Kt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function Ys(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Et.apply(void 0, [e].concat(t)), s = "sc-global-" + jn(JSON.stringify(o)), i = new Ls(o, s);
  function c(a) {
    var l = oo(), u = so(), y = Qe(Mt), C = ue(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && at.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(b) {
      return typeof b == "string" && b.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(C, a, l, y, u), en(function() {
      if (!l.server)
        return d(C, a, l, y, u), function() {
          return i.removeStyles(C, l);
        };
    }, [C, a, l, y, u]), null;
  }
  function d(a, l, u, y, C) {
    if (i.isStatic)
      i.renderStyles(a, os, u, C);
    else {
      var b = Ve({}, l, { theme: co(l, y, c.defaultProps) });
      i.renderStyles(a, b, u, C);
    }
  }
  return process.env.NODE_ENV !== "production" && ao(s), at.memo(c);
}
function je(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Et.apply(void 0, [e].concat(t)).join(""), s = jn(o);
  return new io(s, o);
}
var tn = function() {
  return Qe(Mt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const v = bn;
var lt = {}, Rs = {
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
  })(Ie, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", u = "month", y = "quarter", C = "year", b = "date", M = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, U = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
      var D = ["th", "st", "nd", "rd"], P = L % 100;
      return "[" + L + (D[(P - 20) % 10] || D[P] || D[0]) + "]";
    } }, W = function(L, D, P) {
      var Y = String(L);
      return !Y || Y.length >= D ? L : "" + Array(D + 1 - Y.length).join(P) + L;
    }, z = { s: W, z: function(L) {
      var D = -L.utcOffset(), P = Math.abs(D), Y = Math.floor(P / 60), E = P % 60;
      return (D <= 0 ? "+" : "-") + W(Y, 2, "0") + ":" + W(E, 2, "0");
    }, m: function L(D, P) {
      if (D.date() < P.date())
        return -L(P, D);
      var Y = 12 * (P.year() - D.year()) + (P.month() - D.month()), E = D.clone().add(Y, u), A = P - E < 0, H = D.clone().add(Y + (A ? -1 : 1), u);
      return +(-(Y + (P - E) / (A ? E - H : H - E)) || 0);
    }, a: function(L) {
      return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
    }, p: function(L) {
      return { M: u, y: C, w: l, d: a, D: b, h: d, m: c, s: i, ms: s, Q: y }[L] || String(L || "").toLowerCase().replace(/s$/, "");
    }, u: function(L) {
      return L === void 0;
    } }, f = "en", m = {};
    m[f] = U;
    var w = function(L) {
      return L instanceof j;
    }, T = function L(D, P, Y) {
      var E;
      if (!D)
        return f;
      if (typeof D == "string") {
        var A = D.toLowerCase();
        m[A] && (E = A), P && (m[A] = P, E = A);
        var H = D.split("-");
        if (!E && H.length > 1)
          return L(H[0]);
      } else {
        var re = D.name;
        m[re] = D, E = re;
      }
      return !Y && E && (f = E), E || !Y && f;
    }, x = function(L, D) {
      if (w(L))
        return L.clone();
      var P = typeof D == "object" ? D : {};
      return P.date = L, P.args = arguments, new j(P);
    }, S = z;
    S.l = T, S.i = w, S.w = function(L, D) {
      return x(L, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var j = function() {
      function L(P) {
        this.$L = T(P.locale, null, !0), this.parse(P);
      }
      var D = L.prototype;
      return D.parse = function(P) {
        this.$d = function(Y) {
          var E = Y.date, A = Y.utc;
          if (E === null)
            return new Date(NaN);
          if (S.u(E))
            return new Date();
          if (E instanceof Date)
            return new Date(E);
          if (typeof E == "string" && !/Z$/i.test(E)) {
            var H = E.match(g);
            if (H) {
              var re = H[2] - 1 || 0, ee = (H[7] || "0").substring(0, 3);
              return A ? new Date(Date.UTC(H[1], re, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, ee)) : new Date(H[1], re, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, ee);
            }
          }
          return new Date(E);
        }(P), this.$x = P.x || {}, this.init();
      }, D.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, D.$utils = function() {
        return S;
      }, D.isValid = function() {
        return this.$d.toString() !== M;
      }, D.isSame = function(P, Y) {
        var E = x(P);
        return this.startOf(Y) <= E && E <= this.endOf(Y);
      }, D.isAfter = function(P, Y) {
        return x(P) < this.startOf(Y);
      }, D.isBefore = function(P, Y) {
        return this.endOf(Y) < x(P);
      }, D.$g = function(P, Y, E) {
        return S.u(P) ? this[Y] : this.set(E, P);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(P, Y) {
        var E = this, A = !!S.u(Y) || Y, H = S.p(P), re = function(_, Q) {
          var Z = S.w(E.$u ? Date.UTC(E.$y, Q, _) : new Date(E.$y, Q, _), E);
          return A ? Z : Z.endOf(a);
        }, ee = function(_, Q) {
          return S.w(E.toDate()[_].apply(E.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), E);
        }, R = this.$W, N = this.$M, q = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (H) {
          case C:
            return A ? re(1, 0) : re(31, 11);
          case u:
            return A ? re(1, N) : re(0, N + 1);
          case l:
            var k = this.$locale().weekStart || 0, G = (R < k ? R + 7 : R) - k;
            return re(A ? q - G : q + (6 - G), N);
          case a:
          case b:
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
      }, D.endOf = function(P) {
        return this.startOf(P, !1);
      }, D.$set = function(P, Y) {
        var E, A = S.p(P), H = "set" + (this.$u ? "UTC" : ""), re = (E = {}, E[a] = H + "Date", E[b] = H + "Date", E[u] = H + "Month", E[C] = H + "FullYear", E[d] = H + "Hours", E[c] = H + "Minutes", E[i] = H + "Seconds", E[s] = H + "Milliseconds", E)[A], ee = A === a ? this.$D + (Y - this.$W) : Y;
        if (A === u || A === C) {
          var R = this.clone().set(b, 1);
          R.$d[re](ee), R.init(), this.$d = R.set(b, Math.min(this.$D, R.daysInMonth())).$d;
        } else
          re && this.$d[re](ee);
        return this.init(), this;
      }, D.set = function(P, Y) {
        return this.clone().$set(P, Y);
      }, D.get = function(P) {
        return this[S.p(P)]();
      }, D.add = function(P, Y) {
        var E, A = this;
        P = Number(P);
        var H = S.p(Y), re = function(N) {
          var q = x(A);
          return S.w(q.date(q.date() + Math.round(N * P)), A);
        };
        if (H === u)
          return this.set(u, this.$M + P);
        if (H === C)
          return this.set(C, this.$y + P);
        if (H === a)
          return re(1);
        if (H === l)
          return re(7);
        var ee = (E = {}, E[c] = n, E[d] = o, E[i] = t, E)[H] || 1, R = this.$d.getTime() + P * ee;
        return S.w(R, this);
      }, D.subtract = function(P, Y) {
        return this.add(-1 * P, Y);
      }, D.format = function(P) {
        var Y = this, E = this.$locale();
        if (!this.isValid())
          return E.invalidDate || M;
        var A = P || "YYYY-MM-DDTHH:mm:ssZ", H = S.z(this), re = this.$H, ee = this.$m, R = this.$M, N = E.weekdays, q = E.months, te = function(Q, Z, F, p) {
          return Q && (Q[Z] || Q(Y, A)) || F[Z].slice(0, p);
        }, k = function(Q) {
          return S.s(re % 12 || 12, Q, "0");
        }, G = E.meridiem || function(Q, Z, F) {
          var p = Q < 12 ? "AM" : "PM";
          return F ? p.toLowerCase() : p;
        }, _ = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: R + 1, MM: S.s(R + 1, 2, "0"), MMM: te(E.monthsShort, R, q, 3), MMMM: te(q, R), D: this.$D, DD: S.s(this.$D, 2, "0"), d: String(this.$W), dd: te(E.weekdaysMin, this.$W, N, 2), ddd: te(E.weekdaysShort, this.$W, N, 3), dddd: N[this.$W], H: String(re), HH: S.s(re, 2, "0"), h: k(1), hh: k(2), a: G(re, ee, !0), A: G(re, ee, !1), m: String(ee), mm: S.s(ee, 2, "0"), s: String(this.$s), ss: S.s(this.$s, 2, "0"), SSS: S.s(this.$ms, 3, "0"), Z: H };
        return A.replace(O, function(Q, Z) {
          return Z || _[Q] || H.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(P, Y, E) {
        var A, H = S.p(Y), re = x(P), ee = (re.utcOffset() - this.utcOffset()) * n, R = this - re, N = S.m(this, re);
        return N = (A = {}, A[C] = N / 12, A[u] = N, A[y] = N / 3, A[l] = (R - ee) / 6048e5, A[a] = (R - ee) / 864e5, A[d] = R / o, A[c] = R / n, A[i] = R / t, A)[H] || R, E ? N : S.a(N);
      }, D.daysInMonth = function() {
        return this.endOf(u).$D;
      }, D.$locale = function() {
        return m[this.$L];
      }, D.locale = function(P, Y) {
        if (!P)
          return this.$L;
        var E = this.clone(), A = T(P, Y, !0);
        return A && (E.$L = A), E;
      }, D.clone = function() {
        return S.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, L;
    }(), K = j.prototype;
    return x.prototype = K, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", u], ["$y", C], ["$D", b]].forEach(function(L) {
      K[L[1]] = function(D) {
        return this.$g(D, L[0], L[1]);
      };
    }), x.extend = function(L, D) {
      return L.$i || (L(D, j, x), L.$i = !0), x;
    }, x.locale = T, x.isDayjs = w, x.unix = function(L) {
      return x(1e3 * L);
    }, x.en = m[f], x.Ls = m, x.p = {}, x;
  });
})(Rs);
const I = lt, Ot = "reactSchedulerOutsideWrapper", ze = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Ns = Ys`

  #${Ot} {
    font-family: ${ze};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Ot} *,
 #${Ot} *:before,
 #${Ot} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Fs = {
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
}, zs = {
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
}, _t = `
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
const _e = 50, Ge = 24, ut = 16, wt = 40, Jt = wt + ut + Ge, $t = 84, ye = 56, Ye = 196, We = 12, Oe = 50, Dt = 24, Rt = 16, wn = 40, Bs = Dt + Rt + wn, hr = 24, pr = 52, rt = {
  topRow: `600 14px ${ze}`,
  middleRow: `400 10px ${ze}`,
  bottomRow: {
    name: `600 14px ${ze}`,
    number: `600 10px ${ze}`,
    hoursInDay: `400 9px ${ze}`
  }
}, St = 3, fo = 12, qt = 24, ho = "reactSchedulerCanvasHeaderWrapper", po = "reactSchedulerCanvasWrapper", qe = Ot, Hs = 4, nn = 48, tt = 5, Ws = 40, mr = 8, Zn = Ge / 2 + 2, mo = ut / 2 + Ge + 1, gr = 2, Pe = 60, Fe = 21, go = 58, yo = "reactSchedulerBody", yr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Vn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, vo = (e, r) => I(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), xo = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Vn(e),
  isCurrentDay: e.isSame(I(), "day"),
  year: parseInt(e.format("YYYY"))
}), Gn = (e, r, t, n, o, s, i, c = !1) => {
  s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.mode === "dark" ? i.colors.primary : "#F2F6F4", e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ye);
  const d = i.mode === "dark";
  e.strokeStyle = d ? i.colors.border : "#EEF3F0", e.beginPath(), e.moveTo(r + n - 0.5, t), e.lineTo(r + n - 0.5, t + ye), e.stroke(), e.strokeStyle = d ? i.colors.border : "#E4EAE7", e.beginPath(), e.moveTo(r, t + 0.5), e.lineTo(r + n, t + 0.5), e.stroke(), c && (e.strokeStyle = d ? i.colors.today : "#5C8374", e.beginPath(), e.moveTo(r + 0.5, t), e.lineTo(r + 0.5, t + ye), e.stroke());
}, Un = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Fe;
}, js = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Un(i, s);
    for (let d = 0; d <= t; d++) {
      const a = I(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(I(), "day"), u = a.date() === 1;
      Gn(
        e,
        d * _e,
        i * ye + c,
        _e,
        Vn(a),
        l,
        o,
        u
      );
    }
  }
}, Zs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Vs = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * We;
  const d = r * ye + s.length * Fe;
  for (let a = 0; a <= t; a++) {
    const u = I(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(I(), "week");
    for (let y = 0; y < r; y++) {
      const C = Un(y, s);
      Gn(e, i, y * ye + C, $t, !0, u, o);
    }
    i += $t;
  }
  for (let a = 0; a < t; a++) {
    const l = vo(n, a) * We;
    Zs(e, c, d, o), c += l;
  }
}, Gs = (e, r, t, n, o, s = []) => {
  const i = I(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const d = Un(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = I() : a > Math.floor(t / 2) ? l = I().add(a - Math.floor(t / 2), "hours") : l = I().subtract(Math.floor(t / 2) - c, "hours");
      const u = i.isSame(I(), "day") && l.isSame(I(), "hour");
      Gn(
        e,
        a * Oe + Oe / 2 - 0.5,
        c * ye + d,
        Oe,
        Vn(l),
        u,
        o
      );
    }
  }
}, Us = (e, r, t, n, o = "group") => {
  const s = t * ye + r * Fe, i = e.canvas.width;
  e.fillStyle = o === "subcontract" ? n.colors.subcontractBorder + "40" : o === "warning" ? n.colors.warning + "26" : n.mode === "dark" ? n.colors.primary + "80" : "#E9EFEC", e.fillRect(0, s, i, Fe);
}, Xs = (e, r, t, n, o, s, i = [], c = -1, d = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(po)) {
    switch (r) {
      case 0:
        Vs(e, t, n, o, s, i);
        break;
      case 1:
        js(e, t, n, o, s, i);
        break;
      case 2:
        Gs(e, t, n, o, s, i);
        break;
    }
    for (let l = 0; l < i.length; l++) {
      const u = l === c ? "subcontract" : l === d ? "warning" : "group";
      Us(e, l, i[l], s, u);
    }
    if (r === 1) {
      const l = I(`${o.year}-${o.month + 1}-${o.dayOfMonth}`), u = t * ye + i.length * Fe;
      e.strokeStyle = s.mode === "dark" ? s.colors.today : "#5C8374", e.setLineDash([]);
      for (let y = 0; y <= n; y++)
        if (l.add(y, "days").date() === 1) {
          const C = y * _e + 0.5;
          e.beginPath(), e.moveTo(C, 0), e.lineTo(C, u), e.stroke();
        }
    }
  }
};
var Sn = {}, Ks = {
  get exports() {
    return Sn;
  },
  set exports(e) {
    Sn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ie, function() {
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
})(Ks);
const Js = Sn;
var Cn = {}, qs = {
  get exports() {
    return Cn;
  },
  set exports(e) {
    Cn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ie, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(qs);
const Qs = Cn;
var kn = {}, ei = {
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
  })(Ie, function() {
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
        var l, u, y, C, b = i(this), M = (l = this.isoWeekYear(), u = this.$u, y = (u ? s.utc : s)().year(l).startOf("year"), C = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (C += 7), y.add(C, t));
        return b.diff(M, "week") + 1;
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
})(ei);
const ti = kn;
var Mn = {}, ni = {
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
  })(Ie, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), u = (d = d || "()")[0] === "(", y = d[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(l, c) : !this.isAfter(l, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(ni);
const ri = Mn;
var $n = {}, oi = {
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
  })(Ie, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, C = function(f) {
      return f instanceof z;
    }, b = function(f, m, w) {
      return new z(f, w, m.$l);
    }, M = function(f) {
      return n.p(f) + "s";
    }, g = function(f) {
      return f < 0;
    }, O = function(f) {
      return g(f) ? Math.ceil(f) : Math.floor(f);
    }, U = function(f) {
      return Math.abs(f);
    }, W = function(f, m) {
      return f ? g(f) ? { negative: !0, format: "" + U(f) + m } : { negative: !1, format: "" + f + m } : { negative: !1, format: "" };
    }, z = function() {
      function f(w, T, x) {
        var S = this;
        if (this.$d = {}, this.$l = x, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), T)
          return b(w * y[M(T)], this);
        if (typeof w == "number")
          return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object")
          return Object.keys(w).forEach(function(L) {
            S.$d[M(L)] = w[L];
          }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var j = w.match(u);
          if (j) {
            var K = j.slice(2).map(function(L) {
              return L != null ? Number(L) : 0;
            });
            return this.$d.years = K[0], this.$d.months = K[1], this.$d.weeks = K[2], this.$d.days = K[3], this.$d.hours = K[4], this.$d.minutes = K[5], this.$d.seconds = K[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var m = f.prototype;
      return m.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(T, x) {
          return T + (w.$d[x] || 0) * y[x];
        }, 0);
      }, m.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = O(w / a), w %= a, this.$d.months = O(w / l), w %= l, this.$d.days = O(w / c), w %= c, this.$d.hours = O(w / i), w %= i, this.$d.minutes = O(w / s), w %= s, this.$d.seconds = O(w / o), w %= o, this.$d.milliseconds = w;
      }, m.toISOString = function() {
        var w = W(this.$d.years, "Y"), T = W(this.$d.months, "M"), x = +this.$d.days || 0;
        this.$d.weeks && (x += 7 * this.$d.weeks);
        var S = W(x, "D"), j = W(this.$d.hours, "H"), K = W(this.$d.minutes, "M"), L = this.$d.seconds || 0;
        this.$d.milliseconds && (L += this.$d.milliseconds / 1e3);
        var D = W(L, "S"), P = w.negative || T.negative || S.negative || j.negative || K.negative || D.negative, Y = j.format || K.format || D.format ? "T" : "", E = (P ? "-" : "") + "P" + w.format + T.format + S.format + Y + j.format + K.format + D.format;
        return E === "P" || E === "-P" ? "P0D" : E;
      }, m.toJSON = function() {
        return this.toISOString();
      }, m.format = function(w) {
        var T = w || "YYYY-MM-DDTHH:mm:ss", x = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return T.replace(d, function(S, j) {
          return j || String(x[S]);
        });
      }, m.as = function(w) {
        return this.$ms / y[M(w)];
      }, m.get = function(w) {
        var T = this.$ms, x = M(w);
        return x === "milliseconds" ? T %= 1e3 : T = x === "weeks" ? O(T / y[x]) : this.$d[x], T === 0 ? 0 : T;
      }, m.add = function(w, T, x) {
        var S;
        return S = T ? w * y[M(T)] : C(w) ? w.$ms : b(w, this).$ms, b(this.$ms + S * (x ? -1 : 1), this);
      }, m.subtract = function(w, T) {
        return this.add(w, T, !0);
      }, m.locale = function(w) {
        var T = this.clone();
        return T.$l = w, T;
      }, m.clone = function() {
        return b(this.$ms, this);
      }, m.humanize = function(w) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
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
    return function(f, m, w) {
      t = w, n = w().$utils(), w.duration = function(S, j) {
        var K = w.locale();
        return b(S, { $l: K }, j);
      }, w.isDuration = C;
      var T = m.prototype.add, x = m.prototype.subtract;
      m.prototype.add = function(S, j) {
        return C(S) && (S = S.asMilliseconds()), T.bind(this)(S, j);
      }, m.prototype.subtract = function(S, j) {
        return C(S) && (S = S.asMilliseconds()), x.bind(this)(S, j);
      };
    };
  });
})(oi);
const si = $n;
var ii = "Expected a function", vr = 0 / 0, ai = "[object Symbol]", ci = /^\s+|\s+$/g, li = /^[-+]0x[0-9a-f]+$/i, di = /^0b[01]+$/i, ui = /^0o[0-7]+$/i, fi = parseInt, hi = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, pi = typeof self == "object" && self && self.Object === Object && self, mi = hi || pi || Function("return this")(), gi = Object.prototype, yi = gi.toString, vi = Math.max, xi = Math.min, an = function() {
  return mi.Date.now();
};
function bi(e, r, t) {
  var n, o, s, i, c, d, a = 0, l = !1, u = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(ii);
  r = xr(r) || 0, Dn(t) && (l = !!t.leading, u = "maxWait" in t, s = u ? vi(xr(t.maxWait) || 0, r) : s, y = "trailing" in t ? !!t.trailing : y);
  function C(m) {
    var w = n, T = o;
    return n = o = void 0, a = m, i = e.apply(T, w), i;
  }
  function b(m) {
    return a = m, c = setTimeout(O, r), l ? C(m) : i;
  }
  function M(m) {
    var w = m - d, T = m - a, x = r - w;
    return u ? xi(x, s - T) : x;
  }
  function g(m) {
    var w = m - d, T = m - a;
    return d === void 0 || w >= r || w < 0 || u && T >= s;
  }
  function O() {
    var m = an();
    if (g(m))
      return U(m);
    c = setTimeout(O, M(m));
  }
  function U(m) {
    return c = void 0, y && n ? C(m) : (n = o = void 0, i);
  }
  function W() {
    c !== void 0 && clearTimeout(c), a = 0, n = d = o = c = void 0;
  }
  function z() {
    return c === void 0 ? i : U(an());
  }
  function f() {
    var m = an(), w = g(m);
    if (n = arguments, o = this, d = m, w) {
      if (c === void 0)
        return b(d);
      if (u)
        return c = setTimeout(O, r), C(d);
    }
    return c === void 0 && (c = setTimeout(O, r)), i;
  }
  return f.cancel = W, f.flush = z, f;
}
function Dn(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function wi(e) {
  return !!e && typeof e == "object";
}
function Si(e) {
  return typeof e == "symbol" || wi(e) && yi.call(e) == ai;
}
function xr(e) {
  if (typeof e == "number")
    return e;
  if (Si(e))
    return vr;
  if (Dn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Dn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ci, "");
  var t = di.test(e);
  return t || ui.test(e) ? fi(e.slice(2), t ? 2 : 8) : li.test(e) ? vr : +e;
}
var En = bi;
const Gt = [0, 1, 2];
var Nt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Nt || {});
const bo = (e) => Gt.includes(e), xt = (e) => {
  var n;
  const t = (((n = document.getElementById(qe)) == null ? void 0 : n.clientWidth) || 0) - Ye;
  switch (e) {
    case 1:
      return Math.ceil(t / _e) * St;
    case 2:
      return Math.ceil(t / Oe) * St;
    default:
      return Math.ceil(t / $t) * St;
  }
}, Ci = (e) => xt(e) / St, rn = (e, r) => {
  const t = xt(r) / 2;
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
}, ki = (e, r) => {
  const t = rn(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Xn = () => {
  var t;
  const e = ((t = document.getElementById(qe)) == null ? void 0 : t.clientWidth) || 0;
  return Math.max(0, e - Ye) * St;
}, wo = Nn({
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
  date: I(),
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
I.extend(Js);
I.extend(Qs);
I.extend(ti);
I.extend(ri);
I.extend(si);
const Mi = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = I(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c,
  toolbarActions: d
}) => {
  const { zoom: a, maxRecordsPerPage: l = 50 } = n, [u, y] = he(a), [C, b] = he(I()), [M, g] = he(null), [O, U] = he(!1), [W, z] = he(xt(u)), f = Gt[u] !== Gt[Gt.length - 1], m = u !== 0, w = $e(() => ki(C, u), [C, u]), T = rn(C, u).startDate, x = I(T).dayOfYear(), S = xo(T), j = ue(null), K = ue(!1), L = ue(null), [D, P] = he([{ x: 0, y: 0 }]), Y = de(
    (Z, F = "auto") => {
      var X, $, V, ne;
      const p = Xn();
      switch (Z) {
        case "back":
          return (X = j.current) == null ? void 0 : X.scrollTo({
            behavior: F,
            left: p / 3
          });
        case "forward":
          return ($ = j.current) == null ? void 0 : $.scrollTo({
            behavior: F,
            left: p / 3
          });
        case "middle": {
          const J = p / St / 4;
          return (V = j.current) == null ? void 0 : V.scrollTo({
            behavior: F,
            left: p / 2 - J
          });
        }
        default:
          return (ne = j.current) == null ? void 0 : ne.scrollTo({
            behavior: F,
            left: p / 2
          });
      }
    },
    []
  ), E = (Z) => {
    P(Z);
  }, A = de(
    (Z) => {
      const F = Ci(u);
      let p;
      switch (u) {
        case 0:
          p = F * 7;
          break;
        case 1:
          p = F;
          break;
        case 2:
          p = Math.ceil(F / qt);
          break;
      }
      En(() => {
        switch ((Z === "forward" || Z === "back") && (K.current = !0), L.current = Z, Z) {
          case "back":
            b(($) => $.subtract(p, "days"));
            break;
          case "forward":
            b(($) => $.add(p, "days"));
            break;
          case "middle":
            b(I());
            break;
        }
        s == null || s(w);
      }, 300)();
    },
    [s, w, u]
  );
  ge(() => {
    L.current && (Y(L.current), L.current = null);
  }, [C, Y]), ge(() => {
    j.current = document.getElementById(qe), z(xt(u));
  }, [u]), ge(() => {
    const Z = () => z(xt(u));
    return window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
  }, [u]), ge(() => {
    s == null || s(w);
  }, [s, w]), ge(() => {
    U(!1);
  }, [o]), ge(() => {
    O || (Y("middle"), U(!0), b(o));
  }, [o, O, Y]);
  const H = () => {
    t || (b(
      (Z) => u === 2 ? Z.add(hr, "hours") : Z.add(gr, "weeks")
    ), s == null || s(w));
  }, re = de(() => {
    t || A("forward");
  }, [t, A]), ee = () => {
    t || (b(
      (Z) => u === 2 ? Z.subtract(hr, "hours") : Z.subtract(gr, "weeks")
    ), s == null || s(w));
  }, R = de(() => {
    !O || t || A("back");
  }, [O, t, A]), N = de(() => {
    t || (L.current = "middle", b(I()), g(null), s == null || s(w));
  }, [t, s, w]), q = de(
    (Z) => {
      if (t)
        return;
      const F = I(Z).startOf("day");
      F.isValid() && (L.current = "middle", b(F), g(F), s == null || s(w));
    },
    [t, s, w]
  );
  ge(() => {
    if (!M)
      return;
    const Z = () => g(null);
    return document.addEventListener("mousedown", Z, { once: !0 }), () => document.removeEventListener("mousedown", Z);
  }, [M]);
  const te = () => G(u + 1), k = () => G(u - 1), G = (Z) => {
    bo(Z) && (y(Z), z(xt(Z)), s == null || s(w));
  }, _ = () => i == null ? void 0 : i(), { Provider: Q } = wo;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: H,
        handleScrollNext: re,
        handleGoPrev: ee,
        handleScrollPrev: R,
        handleGoToday: N,
        goToDate: q,
        zoomIn: te,
        zoomOut: k,
        setZoom: G,
        zoom: u,
        isNextZoom: f,
        isPrevZoom: m,
        date: C,
        jumpDate: M,
        isLoading: t,
        cols: W,
        startDate: S,
        dayOfYear: x,
        toggleDisplayActiveUnits: _,
        tilesCoords: D,
        updateTilesCoords: E,
        recordsThreshold: l,
        onClearFilterData: c,
        suppressNextSlideRef: K,
        toolbarActions: d
      },
      children: r
    }
  );
}, Ue = () => Qe(wo), So = (e, r, t) => {
  const n = Math.max(0, r), o = Math.max(0, t);
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = o * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = o + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Co = () => {
  var e;
  return typeof window < "u" && !!((e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ko = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ye + n * Fe;
    if (e >= s + Fe)
      n++;
    else if (e >= s)
      return o * ye + n * Fe - n * Fe;
  }
  return t - n * Fe;
}, $i = 5, br = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > $i;
}, bt = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, Di = ({
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
  } = i, [b, M] = he("idle"), [g, O] = he(null), [U, W] = he({ x: 0, y: 0 }), [z, f] = he({ width: 0, height: 48 }), [m, w] = he(null), [T, x] = he(!0), S = ue({ x: 0, y: 0 }), j = ue({ x: 0, y: 0 }), K = ue({ x: 0, y: 0 }), L = ue(null), D = ue(null), P = ue(0), Y = ue(null), E = de(
    (G) => !l || G.draggable === !1 ? !1 : u ? u(G) : !0,
    [l, u]
  ), A = de(
    (G, _) => {
      const Q = ko(_, d), Z = Math.floor(Q / ye);
      let F;
      switch (t) {
        case 0:
          F = We * 7;
          break;
        case 1:
          F = _e;
          break;
        case 2:
          F = Oe;
          break;
        default:
          F = _e;
      }
      const p = Math.floor(G / F);
      let X;
      const $ = I().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          X = $.add(p * 7, "days").toDate();
          break;
        case 1:
          X = $.add(p, "days").toDate();
          break;
        case 2:
          X = $.add(p, "hours").toDate();
          break;
        default:
          X = $.toDate();
      }
      return { snappedDate: X, snappedResourceIndex: Z };
    },
    [t, n, d]
  ), H = de(
    (G, _, Q, Z) => {
      const F = [], p = _.getTime(), X = Q.getTime(), $ = a.find((ne) => ne.id === Z);
      if (!$)
        return F;
      const V = [];
      for (const ne of $.data)
        Array.isArray(ne) ? V.push(...ne) : V.push(ne);
      for (const ne of V) {
        if (ne.segmentId === G.segmentId)
          continue;
        const J = ne.startDate.getTime(), le = ne.endDate.getTime();
        if (p >= J && p < le || X > J && X <= le || p <= J && X >= le) {
          const fe = new Date(Math.max(p, J)), ve = new Date(Math.min(X, le)), De = ve.getTime() - fe.getTime();
          F.push({
            event: ne,
            conflictStart: fe,
            conflictEnd: ve,
            overlapDuration: De
          });
        }
      }
      return F;
    },
    [a]
  ), re = de(
    (G, _, Q, Z) => {
      const F = [], p = _.getTime(), X = Q.getTime(), $ = I(_).format("YYYY-MM-DD"), V = a.find((J) => J.id === Z);
      if (!V)
        return F;
      const ne = [];
      for (const J of V.data)
        Array.isArray(J) ? ne.push(...J) : ne.push(J);
      for (const J of ne) {
        if (J.segmentId === G.segmentId)
          continue;
        const le = J.startDate.getTime(), pe = J.endDate.getTime(), fe = I(J.startDate).format("YYYY-MM-DD"), ve = I(J.endDate).format("YYYY-MM-DD"), De = I(Q).format("YYYY-MM-DD");
        if (!(fe === $ || ve === $ || fe === De || ve === De || I(J.startDate).isBefore(_, "day") && I(J.endDate).isAfter(Q, "day")) || p >= le && p < pe || X > le && X <= pe || p <= le && X >= pe)
          continue;
        let me, Ae;
        pe <= p ? (me = p - pe, Ae = "before") : (me = le - X, Ae = "after"), F.push({
          event: J,
          timeGap: me,
          position: Ae
        });
      }
      return F.sort((J, le) => J.timeGap - le.timeGap);
    },
    [a]
  ), ee = de(
    (G, _, Q) => {
      const Z = A(_, Q);
      let F, p;
      if (y)
        F = G.startDate, p = G.endDate;
      else {
        const pe = I(G.endDate).diff(G.startDate);
        F = Z.snappedDate, p = I(F).add(pe, "milliseconds").toDate();
      }
      let X = 0, $ = "", V;
      for (const pe of e) {
        const fe = Math.max(pe.data.length, 1);
        if (Z.snappedResourceIndex < X + fe) {
          $ = pe.id, V = pe.capacity;
          break;
        }
        X += fe;
      }
      if (!$)
        return null;
      let ne = !0;
      V !== void 0 && G.totalPassengers !== void 0 && (ne = G.totalPassengers <= V);
      const J = H(G, F, p, $), le = J.length === 0 ? re(G, F, p, $) : [];
      return {
        startDate: F,
        endDate: p,
        resourceId: $,
        resourceIndex: Z.snappedResourceIndex,
        resourceCapacity: V,
        hasCapacity: ne,
        conflicts: J,
        hasConflict: J.length > 0,
        nearbyEvents: le
      };
    },
    [A, e, y, H, re]
  ), R = de(
    (G, _) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - P.current < 100)
        return;
      P.current = Q;
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
  ), N = de(
    (G, _) => {
      if (!E(G) || !c.current)
        return;
      _.preventDefault(), _.stopPropagation();
      const Q = _.target.closest('[style*="left"]');
      let Z = 0, F = 0;
      Q && Q.style.left && Q.style.top && (Z = parseInt(Q.style.left), F = parseInt(Q.style.top));
      const p = bt(
        _.clientX,
        _.clientY,
        c.current
      );
      S.current = { x: Z, y: F }, j.current = { x: _.clientX, y: _.clientY }, K.current = {
        x: p.x - Z,
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
      O(G), M("potential"), W({ x: Z, y: F });
      let X = 100, $ = 48;
      if (Q) {
        const V = Q.getBoundingClientRect();
        X = V.width, $ = V.height;
      }
      f({ width: X, height: $ });
    },
    [E, c, e, t]
  ), q = de(
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
      const Q = _.getBoundingClientRect(), Z = G.clientY, F = 50, p = 12, X = Z - Q.top, $ = Q.bottom - Z;
      let V = !1, ne = 0;
      X < F && X > 0 ? (V = !0, ne = -p * (1 - X / F)) : $ < F && $ > 0 && (V = !0, ne = p * (1 - $ / F)), V ? (D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => {
        _.scrollTop += ne, b === "dragging" && q(G);
      })) : D.current && (cancelAnimationFrame(D.current), D.current = null);
    },
    [c, b]
  ), te = de(
    (G) => {
      if (b === "idle" || b === "animating" || !g || !c.current)
        return;
      const _ = { x: G.clientX, y: G.clientY };
      if (b === "potential")
        if (br(j.current, _))
          M("dragging");
        else
          return;
      q(G);
      const Q = bt(
        G.clientX,
        G.clientY,
        c.current
      );
      L.current && cancelAnimationFrame(L.current), L.current = requestAnimationFrame(() => {
        const Z = {
          x: Q.x - K.current.x,
          y: Q.y - K.current.y
        };
        W(Z);
        const F = ee(g, Q.x, Q.y);
        if (F && C) {
          const p = {
            event: g,
            currentStartDate: F.startDate,
            currentEndDate: F.endDate,
            currentResourceId: F.resourceId,
            conflicts: F.conflicts
          };
          F.hasConflict = !C(p);
        }
        if (w(F), F) {
          const p = F.hasCapacity !== !1;
          x(p), R(g, F);
        }
      });
    },
    [b, g, c, ee, R, C, q]
  ), k = de(
    async (G) => {
      if (b === "idle" || b === "animating")
        return;
      const _ = { x: G.clientX, y: G.clientY };
      if (!br(j.current, _) || b === "potential") {
        M("idle"), O(null), w(null);
        return;
      }
      if (!g || !m || !Y.current) {
        M("idle"), O(null), w(null);
        return;
      }
      if (m.hasCapacity === !1) {
        x(!1), M("animating"), W(S.current), setTimeout(() => {
          M("idle"), O(null), w(null), x(!0);
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
      let F = !0;
      if (o)
        try {
          const p = o(Z);
          F = p instanceof Promise ? await p : p;
        } catch {
          F = !1;
        }
      F ? (x(!0), M("idle"), O(null), w(null)) : (x(!1), M("animating"), W(S.current), setTimeout(() => {
        M("idle"), O(null), w(null), x(!0);
      }, 300));
    },
    [b, g, m, o, C]
  );
  return ge(() => {
    if (b === "potential" || b === "dragging") {
      const G = (Q) => te(Q), _ = (Q) => k(Q);
      return document.addEventListener("mousemove", G), document.addEventListener("mouseup", _), () => {
        document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", _);
      };
    } else
      return () => {
      };
  }, [b, te, k]), ge(() => () => {
    L.current && (cancelAnimationFrame(L.current), L.current = null), D.current && (cancelAnimationFrame(D.current), D.current = null);
  }, []), ge(() => {
    (b === "idle" || b === "animating") && (L.current && (cancelAnimationFrame(L.current), L.current = null), D.current && (cancelAnimationFrame(D.current), D.current = null));
  }, [b]), ge(() => {
    (b === "dragging" || b === "potential") && (b === "dragging" ? (M("animating"), W(S.current), setTimeout(() => {
      M("idle"), O(null), w(null);
    }, 300)) : (M("idle"), O(null), w(null)));
  }, [t]), ge(() => {
    if ((b === "dragging" || b === "potential") && g) {
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
      G || (b === "dragging" ? (M("animating"), W(S.current), setTimeout(() => {
        M("idle"), O(null), w(null);
      }, 300)) : (M("idle"), O(null), w(null)));
    }
  }, [e, b, g]), {
    dragState: b,
    draggedEvent: g,
    ghostPosition: U,
    ghostDimensions: z,
    dropTarget: m,
    isValidDrop: T,
    handleDragStart: N,
    isDraggable: E,
    draggingEventId: (g == null ? void 0 : g.segmentId) || null,
    resourceOnly: y
  };
}, Ei = ({
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
  const { enabled: l = !1, isSelectable: u } = i, y = l && !!o, C = de((p) => {
    let X = 0;
    for (const $ of a)
      $ <= p && X++;
    return p * ye + X * Fe;
  }, [a]), [b, M] = he("idle"), [g, O] = he(null), [U, W] = he(null), [z, f] = he(null), [m, w] = he(!1), [T, x] = he([]), [S, j] = he(!1), K = ue(null), L = ue(null), D = ue(null), P = ue(null), Y = de(() => {
    switch (t) {
      case 0:
        return We * 7;
      case 1:
        return _e;
      case 2:
        return Oe;
      default:
        return _e;
    }
  }, [t]), E = de(
    (p) => {
      const X = Y(), $ = Math.floor(p / X), V = I().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
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
  ), A = de(
    (p) => {
      const X = ko(p, a), $ = Math.floor(X / ye);
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
  ), H = de(
    (p) => {
      const X = Y();
      return Math.floor(p / X) * X;
    },
    [Y]
  ), re = de(
    (p, X, $, V = []) => {
      const ne = [], le = (r || e).find((ve) => ve.id === p), pe = X.getTime(), fe = $.getTime();
      if (le) {
        const ve = le.data[0], De = ve && Array.isArray(ve) ? le.data.flat() : le.data;
        for (const ke of De) {
          const se = new Date(ke.startDate).getTime(), me = new Date(ke.endDate).getTime();
          if (pe < me && fe > se) {
            const Ae = new Date(Math.max(pe, se)), Re = new Date(Math.min(fe, me)), Ne = Re.getTime() - Ae.getTime();
            ne.push({
              event: ke,
              conflictStart: Ae,
              conflictEnd: Re,
              overlapDuration: Ne
            });
          }
        }
      }
      for (const ve of V) {
        if (ve.resourceId !== p)
          continue;
        const De = ve.startDate.getTime(), ke = ve.endDate.getTime();
        if (pe < ke && fe > De) {
          const se = new Date(Math.max(pe, De)), me = new Date(Math.min(fe, ke)), Ae = me.getTime() - se.getTime(), Re = {
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
            event: Re,
            conflictStart: se,
            conflictEnd: me,
            overlapDuration: Ae
          });
        }
      }
      return ne;
    },
    [e, r]
  ), ee = de(
    (p) => {
      if (!y || d || !c.current || p.button !== 0)
        return;
      const X = p.target;
      if (X.closest("[data-segment-id]") || X.closest("[data-multi-select-ui]"))
        return;
      const $ = bt(p.clientX, p.clientY, c.current), V = A($.y);
      if (!V)
        return;
      K.current = { x: p.clientX, y: p.clientY }, L.current = V.resourceIndex;
      const ne = H($.x), J = Y(), le = C(V.resourceIndex);
      O($), W($), f({
        x: ne,
        y: le,
        width: J,
        height: ye
      }), M("selecting");
    },
    [y, d, c, A, H, Y, C]
  ), R = de(
    (p) => {
      W(p);
      const X = Y(), $ = H((g == null ? void 0 : g.x) || 0), V = H(p.x), ne = C(L.current), J = Math.min($, V), le = Math.max($, V) + X;
      f({ x: J, y: ne, width: le - J, height: ye });
    },
    [g, Y, H, C]
  ), N = de(() => {
    P.current && (cancelAnimationFrame(P.current), P.current = null);
  }, []), q = de(
    (p, X) => {
      const $ = document.getElementById(qe);
      if (!$ || !c.current)
        return;
      const V = $.getBoundingClientRect(), ne = 60, J = 12, le = p - (V.left + Ye), pe = V.right - p;
      let fe = 0;
      le < ne ? fe = -J * (1 - Math.max(0, le) / ne) : pe < ne && (fe = J * (1 - Math.max(0, pe) / ne)), N(), fe !== 0 && (P.current = requestAnimationFrame(() => {
        $.scrollLeft += fe, R(bt(p, X, c.current)), q(p, X);
      }));
    },
    [c, R, N]
  ), te = de(
    (p) => {
      if (b !== "selecting" || !c.current || L.current === null)
        return;
      const X = bt(p.clientX, p.clientY, c.current);
      D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => R(X)), q(p.clientX, p.clientY);
    },
    [b, c, R, q]
  ), k = de(
    (p) => {
      if (b !== "selecting")
        return;
      if (N(), !c.current || !g || !K.current) {
        M("idle"), O(null), W(null), f(null);
        return;
      }
      const X = bt(p.clientX, p.clientY, c.current), $ = A(g.y);
      if (!$) {
        M("idle"), O(null), W(null), f(null);
        return;
      }
      const V = Math.min(g.x, X.x), ne = Math.max(g.x, X.x), J = E(V), le = E(ne), pe = I(le).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (u && !u($.resourceId, J, pe)) {
        M("idle"), O(null), W(null), f(null);
        return;
      }
      const fe = re(
        $.resourceId,
        J,
        pe,
        T
      ), ve = fe.length > 0, De = {
        startDate: J,
        endDate: pe,
        resourceId: $.resourceId,
        resourceLabel: $.resourceLabel,
        zoomLevel: t,
        hasConflict: ve,
        conflicts: ve ? fe : void 0
      };
      if (m)
        x((ke) => [...ke, De]), j(!0);
      else if (o) {
        const ke = o(De), se = (me) => {
          me != null && me.continueMultiSelect && (w(!0), x([De]), j(!0));
        };
        ke instanceof Promise ? ke.then(se) : se(ke);
      }
      M("idle"), O(null), W(null), f(null), K.current = null, L.current = null;
    },
    [
      b,
      c,
      g,
      A,
      E,
      u,
      o,
      t,
      m,
      re,
      T,
      N
    ]
  ), G = de(() => {
    if (T.length > 0 && s) {
      j(!1);
      const p = s(T), X = ($) => {
        $ != null && $.continueMultiSelect ? j(!0) : (x([]), w(!1), j(!1));
      };
      p instanceof Promise ? p.then(X) : X(p);
      return;
    }
    x([]), w(!1), j(!1);
  }, [T, s]), _ = de(() => {
    x([]), w(!1), j(!1);
  }, []), Q = de((p) => {
    x((X) => {
      const $ = X.filter((V, ne) => ne !== p);
      return $.length === 0 && (w(!1), j(!1)), $;
    });
  }, []), Z = de(
    (p, X) => {
      x(($) => $.map((V, ne) => {
        if (ne !== p)
          return V;
        const J = { ...V, ...X }, le = $.filter((fe, ve) => ve !== p), pe = re(
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
  ), F = de(
    (p) => {
      p.key === "Escape" && (b === "selecting" ? (N(), M("idle"), O(null), W(null), f(null), K.current = null, L.current = null) : m && T.length > 0 && (x([]), w(!1), j(!1)));
    },
    [b, m, T.length, N]
  );
  return ge(() => {
    if (b === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", k), document.addEventListener("keydown", F), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", k), document.removeEventListener("keydown", F);
      };
  }, [b, te, k, F]), ge(() => {
    if (m && T.length > 0)
      return document.addEventListener("keydown", F), () => {
        document.removeEventListener("keydown", F);
      };
  }, [m, T.length, F]), ge(() => () => {
    D.current && (cancelAnimationFrame(D.current), D.current = null), N();
  }, [N]), ge(() => {
    d && b === "selecting" && (N(), M("idle"), O(null), W(null), f(null), K.current = null, L.current = null);
  }, [d, b, N]), {
    selectionState: b,
    selectionStart: g,
    selectionEnd: U,
    selectionBox: z,
    handleGridMouseDown: ee,
    isEnabled: y,
    pendingSelections: T,
    confirmSelections: G,
    clearSelections: _,
    removeSelection: Q,
    updateSelection: Z,
    isMultiSelectActive: m,
    hasUnconfirmedSelections: S
  };
}, _i = v.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, Ti = v.div`
  position: relative;
`, Ai = v.canvas``;
v.canvas``;
const Pi = v.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, wr = v.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Ii = Fn(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onTileContextMenu: i, onEventDrop: c, onEventDrag: d, draggableConfig: a, onDragStateChange: l, onTimeRangeSelect: u, onMultiTimeRangeSelect: y, clickToAddConfig: C, separatorRowIndices: b = [], subcontractSeparatorIndex: M = -1, warningSeparatorIndex: g = -1, fadingUnitIds: O }, U) {
  const W = ue(!1), { handleScrollNext: z, handleScrollPrev: f, date: m, isLoading: w, cols: T, startDate: x, suppressNextSlideRef: S, config: j } = Ue(), K = ue(null), L = ue(null), D = ue(t), P = ue(m), Y = ue(null), E = ue(null), A = ue(null), H = ue(null), [re, ee] = he(!1), R = tn(), {
    dragState: N,
    draggedEvent: q,
    ghostPosition: te,
    ghostDimensions: k,
    dropTarget: G,
    isValidDrop: _,
    handleDragStart: Q,
    isDraggable: Z,
    draggingEventId: F,
    resourceOnly: p
  } = Di({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: x,
    onEventDrop: c,
    onEventDrag: d,
    draggableConfig: a,
    gridRef: H,
    separatorRowIndices: b
  });
  ge(() => {
    const xe = N === "dragging" || N === "potential";
    ee(xe), l && l(xe);
  }, [N, l]);
  const X = ue(!1), $ = ue(m), V = ue(null);
  ge(() => {
    var Me;
    const xe = $.current;
    if ($.current = m, !X.current) {
      X.current = !0;
      return;
    }
    if (S != null && S.current) {
      S.current = !1;
      return;
    }
    const Ee = H.current;
    if (!(Ee != null && Ee.animate))
      return;
    const ie = m.isAfter(xe) ? 48 : -48;
    (Me = V.current) == null || Me.cancel(), Ee.style.willChange = "transform";
    const ce = Ee.animate(
      [
        { transform: `translateX(${ie}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), ae = () => {
      Ee.style.willChange = "";
    };
    ce.onfinish = ae, ce.oncancel = ae, V.current = ce;
  }, [m, S]);
  const {
    selectionState: ne,
    selectionBox: J,
    handleGridMouseDown: le,
    pendingSelections: pe,
    confirmSelections: fe,
    clearSelections: ve,
    removeSelection: De,
    updateSelection: ke,
    isMultiSelectActive: se,
    hasUnconfirmedSelections: me
  } = Ei({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: x,
    onTimeRangeSelect: u,
    onMultiTimeRangeSelect: y,
    clickToAddConfig: C,
    gridRef: H,
    isDragging: re,
    separatorRowIndices: b
  }), Ae = de((xe) => {
    xe.preventDefault();
  }, []), Re = de((xe) => {
    xe.preventDefault();
  }, []), Ne = b.length * Fe, ft = de(
    (xe) => {
      const Ee = Xn(), ie = t * ye + 1 + Ne;
      So(xe, Ee, ie), Xs(xe, r, t, T, x, R, b, M, g);
    },
    [T, x, t, r, R, b, M, g, Ne]
  );
  return ge(() => {
    if (!K.current)
      return;
    const xe = K.current.getContext("2d");
    if (!xe)
      return;
    const Ee = () => ft(xe);
    return window.addEventListener("resize", Ee), () => window.removeEventListener("resize", Ee);
  }, [ft]), ge(() => {
    var Be;
    const xe = D.current, Ee = P.current;
    if (D.current = t, P.current = m, xe === t || !m.isSame(Ee, "day") || Co())
      return;
    const ie = K.current, ce = L.current;
    if (!ie || !ce || ie.width === 0 || ie.height === 0)
      return;
    const ae = ce.getContext("2d");
    if (!ae)
      return;
    ce.width = ie.width, ce.height = ie.height, ce.style.width = ie.style.width, ce.style.height = ie.style.height, ae.setTransform(1, 0, 0, 1, 0, 0), ae.clearRect(0, 0, ce.width, ce.height), ae.drawImage(ie, 0, 0), (Be = Y.current) == null || Be.cancel(), ce.style.opacity = "1";
    const Me = ce.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    Me.onfinish = () => {
      ce.style.opacity = "0";
    }, Y.current = Me;
  }, [t, m]), ge(() => {
    const xe = K.current;
    if (!xe)
      return;
    xe.style.letterSpacing = "1px";
    const Ee = xe.getContext("2d");
    Ee && ft(Ee);
  }, [m, t, r, ft]), ge(() => {
    if (!E.current)
      return;
    const xe = new IntersectionObserver(
      (Ee) => {
        Ee[0].isIntersecting && !W.current && (W.current = !0, z(), setTimeout(() => {
          W.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(qe) }
    );
    return xe.observe(E.current), () => {
      xe.disconnect();
    };
  }, [z]), ge(() => {
    if (!A.current)
      return;
    const xe = new IntersectionObserver(
      (Ee) => {
        Ee[0].isIntersecting && !W.current && (W.current = !0, f(), setTimeout(() => {
          W.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(qe),
        rootMargin: `0px 0px 0px -${Ye}px`
      }
    );
    return xe.observe(A.current), () => {
      xe.disconnect();
    };
  }, [f]), /* @__PURE__ */ B(_i, { id: po, children: [
    /* @__PURE__ */ B(
      Ti,
      {
        ref: (xe) => {
          typeof U == "function" ? U(xe) : U && (U.current = xe), H.current = xe;
        },
        onMouseDown: le,
        style: { cursor: u ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(wr, { position: "left", ref: A }),
          /* @__PURE__ */ h(Yn, { isLoading: w, position: "left" }),
          /* @__PURE__ */ h(
            Ai,
            {
              ref: K,
              onDragStart: Ae,
              onDragOver: Re,
              style: { userSelect: N === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(Pi, { ref: L, "aria-hidden": !0 }),
          /* @__PURE__ */ h(t1, { zoom: r, startDate: x }),
          /* @__PURE__ */ h(s1, { zoom: r, startDate: x }),
          /* @__PURE__ */ h(
            od,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onTileContextMenu: i,
              onDragStart: Q,
              isDraggable: Z,
              draggingEventId: F,
              separatorRowIndices: b,
              fadingUnitIds: O,
              highlightedSegmentId: (j == null ? void 0 : j.highlightedSegmentId) ?? null,
              focusedUnitIds: (j == null ? void 0 : j.focusedUnitIds) ?? null,
              leavingSegmentIds: (j == null ? void 0 : j.leavingSegmentIds) ?? null,
              ghostProject: (j == null ? void 0 : j.ghostProject) ?? null
            }
          ),
          /* @__PURE__ */ h(wr, { ref: E, position: "right" }),
          /* @__PURE__ */ h(Yn, { isLoading: w, position: "right" }),
          (N === "dragging" || N === "animating") && /* @__PURE__ */ h(
            Pd,
            {
              draggedEvent: q,
              ghostPosition: te,
              ghostDimensions: k,
              dropTarget: G,
              isValidDrop: _,
              dragState: N,
              zoom: r,
              data: n,
              resourceOnly: p,
              separatorRowIndices: b
            }
          ),
          /* @__PURE__ */ h(
            Yd,
            {
              selectionBox: J,
              isSelecting: ne === "selecting"
            }
          ),
          se && pe.length > 0 && /* @__PURE__ */ h(
            qd,
            {
              selections: pe,
              data: n,
              zoom: r,
              startDate: x,
              onRemove: De,
              onUpdate: ke,
              separatorRowIndices: b
            }
          )
        ]
      }
    ),
    se && me && pe.length > 0 && /* @__PURE__ */ h(
      Zd,
      {
        selections: pe,
        onConfirm: fe,
        onClear: ve,
        onRemove: De
      }
    )
  ] });
}), Mo = (e) => {
  const r = I.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, $o = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Pe);
    t += o.hours + s, n += r % Pe, n >= Pe && (t++, n -= Pe);
  }), { hours: t, minutes: n };
}, Do = (e, r) => {
  let t = mr;
  switch (r) {
    case 0:
      t = Ws;
      break;
    case 1:
      t = mr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = Pe - e.minutes;
    return i === Pe && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, Oi = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const l = I(a.startDate).isoWeek(), u = I(a.startDate).isoWeekday(), y = I(a.endDate).isoWeek(), C = I(a.endDate).isoWeekday(), { hours: b, minutes: M } = Mo(a.occupancy);
    if (n === l) {
      const g = (tt + 1 - u) * b, O = (tt + 1 - u) * M;
      return { hours: Math.max(0, g), minutes: O };
    } else if (n === y) {
      const g = C > tt ? tt * b : C * b, O = C > tt ? tt * M : C * M;
      return { hours: g, minutes: O };
    } else if (I(r).isBetween(a.startDate, a.endDate))
      return { hours: tt * b, minutes: tt * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = $o(o), { free: c, overtime: d } = Do({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, Li = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((l) => {
    const { hours: u, minutes: y } = Mo(l.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = $o(s), { free: d, overtime: a } = Do({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, Yi = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const d = I(c.startDate).hour(), a = I(c.endDate).hour(), l = r.hour(), u = I(c.endDate).minute(), y = I(c.startDate).minute();
    d < l && a > l ? t += Pe : d === l && a === l && y && u ? t += u ? u - y : Pe - y : d === l && a >= l ? t += y ? Pe - y : Pe : a === l && u && (t += u);
  });
  const n = Math.floor(t / Pe), o = t % Pe, s = n || o ? 0 : 1, i = n ? 0 : o ? Pe - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Ri = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? I(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? I(t).isBetween(i.startDate, i.endDate, "hour", "[]") : I(i.startDate).isBetween(
    I(t),
    I(t).add(6, "days"),
    "day",
    "[]"
  ) || I(t).isBetween(I(i.startDate), I(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return Li(s, t, n, o);
    case 2:
      return Yi(s, t);
    default:
      return Oi(s, t, n);
  }
}, Ni = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = $t;
      break;
    case 1:
      c = "days", d = _e;
      break;
    case 2:
      c = "hours", d = Oe;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = I(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), u = Math.ceil(t.y / ye), y = n.findIndex((O, U, W) => W.slice(0, U + 1).reduce((f, m) => f + m, 0) >= u), C = s === 2 ? (a + 1) * d : a * d, b = (u - 1) * ye + ye, M = Ri(
    o[y],
    y,
    l,
    s,
    i
  ), g = I(e.startDate).isSame(I(e.endDate), "day");
  return {
    coords: { x: C, y: b },
    mouseCoords: t,
    resourceIndex: y,
    disposition: M,
    reservationData: {
      startTime: I(e.startDate).format("hh:mm A"),
      startDate: I(e.startDate).format("MMM D, YYYY"),
      endTime: I(e.endDate).format("hh:mm A"),
      endDate: I(e.endDate).format("MMM D, YYYY"),
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
      subcontractConfirmed: e.subcontractConfirmed
    }
  };
};
function Fi(e, r) {
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
function zi(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && !l.isUnassigned && l.capacity != null && t.add(l.capacity);
  const n = [...t].sort((l, u) => l - u);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Fi(n, o), i = [];
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
    for (const b of l.values)
      a.set(b, y);
  }), { categories: d, capacityToCategoryId: a };
}
const Bi = (e, r, t, n) => {
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
var _n = {}, Hi = {
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
  })(Ie, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Hi);
const Wi = _n;
var Tn = {}, ji = {
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
  })(Ie, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(ji);
const Zi = Tn, Vi = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = I(t.startDate).startOf("day"), d = I(t.endDate).startOf("day"), a = I(o[i].startDate).startOf("day"), l = I(o[i].endDate).startOf("day");
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
I.extend(Wi);
I.extend(Zi);
const Sr = /* @__PURE__ */ new WeakMap(), Gi = (e) => {
  const r = Sr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = I(o.startDate), c = I(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), n = Vi(t);
  return Sr.set(e, n), n;
}, Ui = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = Gi(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Xi = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, Ki = (e) => {
  const { recordsThreshold: r } = Ue(), [t, n] = he(0), [o, s] = he(0), i = ue(null);
  ge(() => {
    i.current = document.getElementById(qe);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = $e(() => Ui(e), [e]), a = $e(
    () => Bi(e, c, d, r),
    [e, c, r, d]
  ), l = de(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((g) => g + a[Math.max(o, 0)].length), s((g) => Math.min(g + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = de(() => {
    a[o].length && (n((g) => Math.max(g - a[o - 1].length, 0)), s((g) => Math.max(g - 1, 0)));
  }, [o, a]), y = de(() => {
    n(0), s(0);
  }, []), C = t + a[o].length, b = $e(
    () => d.slice(t, C),
    [C, d, t]
  ), M = $e(
    () => c.slice(t, C),
    [C, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: b,
    totalRowsPerPage: Xi(a[o]),
    next: l,
    previous: u,
    reset: y
  };
};
var An = {}, Ji = {
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
  })(Ie, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Ji);
const qi = An;
var Pn = {}, Qi = {
  get exports() {
    return Pn;
  },
  set exports(e) {
    Pn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(lt);
  })(Ie, function(t) {
    function n(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = n(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, C, b) {
      var M = y + " ";
      switch (b) {
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
})(Qi);
const ea = Pn;
var In = {}, ta = {
  get exports() {
    return In;
  },
  set exports(e) {
    In = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(lt);
  })(Ie, function(t) {
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
})(ta);
const na = In;
var On = {}, ra = {
  get exports() {
    return On;
  },
  set exports(e) {
    On = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(lt);
  })(Ie, function(t) {
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
})(ra);
const oa = On;
var Ln = {}, sa = {
  get exports() {
    return Ln;
  },
  set exports(e) {
    Ln = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(lt);
  })(Ie, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(sa);
const ia = Ln, aa = {
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
}, ca = {
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
}, la = {
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
}, da = {
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
}, ua = {
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
}, fa = [
  {
    id: "en",
    lang: la,
    translateCode: "en-GB",
    dayjsTranslations: qi
  },
  {
    id: "pl",
    lang: ca,
    translateCode: "pl-PL",
    dayjsTranslations: ea
  },
  {
    id: "es",
    lang: aa,
    translateCode: "es-ES",
    dayjsTranslations: ia
  },
  {
    id: "lt",
    lang: ua,
    translateCode: "lt-LT",
    dayjsTranslations: oa
  },
  {
    id: "de",
    lang: da,
    translateCode: "de-DE",
    dayjsTranslations: na
  }
];
class ha {
  constructor() {
    Kn(this, "locales", fa);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const Qt = new ha(), Eo = Nn({
  localesData: Qt.getLocales(),
  currentLocale: Qt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), pa = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = he("en"), s = Qt.getLocales(), i = de(() => {
    const u = s.find((y) => y.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && I.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [c, d] = he(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), d(u);
  };
  ge(() => {
    t == null || t.forEach((u) => {
      s.find((C) => C.id === u.id) || Qt.addLocales(u);
    });
  }, [s, t]), ge(() => {
    const u = localStorage.getItem("locale"), y = r ?? u ?? "en";
    localStorage.setItem("locale", y), o(y), d(i());
  }, [i, r]);
  const { Provider: l } = Eo;
  return /* @__PURE__ */ h(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, ot = () => Qe(Eo).currentLocale.lang, ma = (e) => /* @__PURE__ */ oe.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ oe.createElement("defs", null, /* @__PURE__ */ oe.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ oe.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ oe.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ oe.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ oe.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ga = v.div`
  height: 440px;
  width: 514px;
  position: relative;
`, ya = v.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, va = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = ot();
  return /* @__PURE__ */ B(ga, { onClick: e, children: [
    /* @__PURE__ */ h(ma, {}),
    /* @__PURE__ */ h(ya, { children: r })
  ] });
}, xa = v.div`
  position: relative;
  display: flex;
`, ba = v.div`
  position: relative;
  margin-left: ${Ye};
  display: flex;
  flex-direction: column;
  contain: paint;
`, wa = v.div`
  width: calc(${({ width: e }) => e}px - ${Ye}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ye}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Sa = /* @__PURE__ */ new Set(), Ca = {
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
    reservationType: Nt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function ka(e, r) {
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
const Ma = ({
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
  const [b, M] = he(Ca), [g, O] = he(e), [U, W] = he(!1), [z, f] = he(!1), [m, w] = he(""), [T, x] = he(/* @__PURE__ */ new Set()), [S, j] = he(/* @__PURE__ */ new Set()), K = ue([]);
  ge(() => () => K.current.forEach(clearTimeout), []);
  const {
    zoom: L,
    startDate: D,
    isLoading: P,
    config: { includeTakenHoursOnWeekendsInDayView: Y, showTooltip: E, showThemeToggle: A }
  } = Ue(), H = ue(null), re = ue(null), [ee, R] = he(124), {
    page: N,
    projectsPerPerson: q,
    rowsPerItem: te,
    currentPageNum: k,
    pagesAmount: G,
    next: _,
    previous: Q,
    reset: Z
  } = Ki(g), { effectiveCategories: F, effectivePage: p } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: N };
    const ie = zi(N);
    if (ie.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: N };
    const ce = N.map((ae) => {
      if (ae.isSubcontract || ae.isUnassigned || ae.capacity == null)
        return ae;
      const Me = ie.capacityToCategoryId.get(ae.capacity);
      return Me ? { ...ae, categoryId: Me } : ae;
    });
    return { effectiveCategories: ie.categories, effectivePage: ce };
  }, [t, N]), X = de(
    (ie) => {
      if (T.has(ie)) {
        x((ae) => {
          const Me = new Set(ae);
          return Me.delete(ie), Me;
        });
        return;
      }
      if (Co()) {
        x((ae) => new Set(ae).add(ie));
        return;
      }
      j((ae) => new Set(ae).add(ie));
      const ce = setTimeout(() => {
        x((ae) => new Set(ae).add(ie)), j((ae) => {
          const Me = new Set(ae);
          return Me.delete(ie), Me;
        });
      }, 190);
      K.current.push(ce);
    },
    [T]
  ), $ = $e(() => {
    const ie = [];
    p.some((ae) => ae.isUnassigned) && ie.push("__unassigned__");
    const ce = F ? [...F].sort((ae, Me) => ae.maxPassengers - Me.maxPassengers) : [];
    for (const ae of ce)
      p.some((Me) => !Me.isSubcontract && Me.categoryId === ae.id) && ie.push(ae.id);
    return p.some((ae) => ae.isSubcontract) && ie.push("__subcontract__"), ie;
  }, [F, p]), V = de(() => {
    x(/* @__PURE__ */ new Set());
  }, []), ne = de(() => {
    x(new Set($));
  }, [$]), J = $e(() => {
    if (S.size === 0)
      return Sa;
    const ie = /* @__PURE__ */ new Set();
    for (const ce of p) {
      const ae = ce.isUnassigned ? "__unassigned__" : ce.isSubcontract ? "__subcontract__" : ce.categoryId;
      ae && S.has(ae) && ie.add(ce.id);
    }
    return ie;
  }, [S, p]), {
    visiblePage: le,
    visibleRowsPerItem: pe,
    visibleTotalRows: fe,
    visibleProjectsPerPerson: ve,
    separatorRowIndices: De,
    subcontractSeparatorIndex: ke,
    unassignedSeparatorIndex: se
  } = $e(() => {
    const ie = ka(p, F), ce = ((F == null ? void 0 : F.length) ?? 0) > 0, ae = /* @__PURE__ */ new Map();
    N.forEach((Le, mt) => ae.set(Le.id, mt));
    const Me = [], Be = [], Xe = [], Ze = [];
    let ht = 0, Ft = -1, Ke = -1;
    for (const Le of ie)
      if (Le.type === "unassigned" || Le.type === "subcontract" || Le.type === "category" && ce) {
        const gt = Le.type === "unassigned" ? "__unassigned__" : Le.type === "subcontract" ? "__subcontract__" : Le.category.id, yt = T.has(gt);
        if (Le.type === "subcontract" && (Ft = Ze.length), Le.type === "unassigned" && (Ke = Ze.length), Ze.push(ht), !yt)
          for (const st of Le.items) {
            const zt = ae.get(st.id) ?? 0, Bt = te[zt];
            Me.push(st), Be.push(Bt), Xe.push(q[zt]), ht += Bt;
          }
      } else
        for (const gt of Le.items) {
          const yt = ae.get(gt.id) ?? 0, st = te[yt];
          Me.push(gt), Be.push(st), Xe.push(q[yt]), ht += st;
        }
    const pt = Be.reduce((Le, mt) => Le + mt, 0);
    return {
      visiblePage: Me,
      visibleRowsPerItem: Be,
      visibleTotalRows: pt,
      visibleProjectsPerPerson: Xe,
      separatorRowIndices: Ze,
      subcontractSeparatorIndex: Ft,
      unassignedSeparatorIndex: Ke
    };
  }, [p, F, N, T, te, q]), me = $e(
    () => p.reduce(
      (ie, ce) => ce.isUnassigned ? ie + ce.data.reduce((ae, Me) => ae + Me.length, 0) : ie,
      0
    ),
    [p]
  ), Ae = ue(
    En(
      (ie, ce, ae, Me, Be, Xe) => {
        if (!H.current)
          return;
        const { tile: Ze, segmentId: ht } = ft(ie);
        if (!ht || !Ze) {
          W(!1);
          return;
        }
        const Ft = Ne(ht, ce), Ke = H.current.getBoundingClientRect(), pt = Ze.getBoundingClientRect(), Le = { x: ie.clientX - Ke.left, y: ie.clientY - Ke.top }, mt = {
          x: ie.clientX - Ke.left,
          y: ie.clientY - Ke.top
        }, gt = {
          x: pt.left - Ke.left,
          y: pt.top - Ke.top,
          width: pt.width,
          height: pt.height
        }, {
          coords: { x: yt, y: st },
          resourceIndex: zt,
          disposition: Bt,
          reservationData: Oo
        } = Ni(
          Ft,
          ae,
          Le,
          Me,
          Be,
          Xe,
          Y
        );
        M({
          coords: { x: yt, y: st },
          mouseCoords: mt,
          resourceIndex: zt,
          disposition: Bt,
          reservationData: Oo,
          tileBounds: gt
        }), W(!0);
      },
      4
    )
  ), Re = ue(
    En((ie, ce) => {
      Z(), O(
        ie.map((ae) => ({
          ...ae,
          data: ae.data.filter((Me) => {
            const { title: Be, description: Xe, subtitle: Ze } = Me;
            return (Be == null ? void 0 : Be.toLowerCase().includes(ce.toLowerCase())) || (Ze == null ? void 0 : Ze.toLowerCase().includes(ce.toLowerCase())) || (Xe == null ? void 0 : Xe.toLowerCase().includes(ce.toLowerCase()));
          })
        })).filter((ae) => ae.data.length > 0)
      );
    }, 500)
  ), Ne = (ie, ce) => {
    if (ie)
      return ce.flatMap((ae) => ae.data).find((ae) => ae.segmentId === ie);
  }, ft = (ie) => {
    if (!ie.target)
      return { tile: null, segmentId: null };
    const ce = ie.target.closest("[data-segment-id]");
    return ce ? { tile: ce, segmentId: ce.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, xe = (ie) => {
    const ce = ie.target.value;
    w(ce), Re.current.cancel(), ce ? Re.current(e, ce) : (Z(), O(e));
  }, Ee = de(() => {
    Ae.current.cancel(), W(!1);
  }, []);
  return ge(() => {
    const ie = (ae) => Ae.current(
      ae,
      e,
      D,
      pe,
      ve,
      L
    ), ce = H.current;
    if (ce)
      return ce.addEventListener("mousemove", ie), ce.addEventListener("mouseleave", Ee), () => {
        ce.removeEventListener("mousemove", ie), ce.removeEventListener("mouseleave", Ee);
      };
  }, [
    Ae,
    Ee,
    ve,
    pe,
    D,
    L,
    e
  ]), ge(() => {
    m ? (Re.current.cancel(), Re.current(e, m)) : O(e);
  }, [e, m]), en(() => {
    const ie = re.current;
    if (!ie)
      return;
    const ce = () => R(ie.offsetHeight);
    ce();
    const ae = new ResizeObserver(ce);
    return ae.observe(ie), () => ae.disconnect();
  }, []), /* @__PURE__ */ B(xa, { children: [
    /* @__PURE__ */ h(
      qc,
      {
        headerHeight: ee,
        data: p,
        categories: F,
        pageNum: k,
        pagesAmount: G,
        rows: te,
        onLoadNext: _,
        onLoadPrevious: Q,
        searchInputValue: m,
        onSearchInputChange: xe,
        onItemClick: s,
        collapsedGroups: T,
        fadingGroups: S,
        onToggleGroup: X,
        allGroupIds: $,
        onExpandAll: V,
        onCollapseAll: ne,
        unassignedCount: me
      }
    ),
    /* @__PURE__ */ B(ba, { children: [
      /* @__PURE__ */ h(
        _l,
        {
          ref: re,
          zoom: L,
          topBarWidth: c,
          showThemeToggle: A,
          toggleTheme: i
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Ii,
        {
          data: le,
          baseData: r || e,
          zoom: L,
          rows: fe,
          ref: H,
          onTileClick: n,
          onTileContextMenu: o,
          onEventDrop: d,
          onEventDrag: a,
          draggableConfig: l,
          onDragStateChange: f,
          onTimeRangeSelect: u,
          onMultiTimeRangeSelect: y,
          clickToAddConfig: C,
          separatorRowIndices: De,
          subcontractSeparatorIndex: ke,
          warningSeparatorIndex: me > 0 ? se : -1,
          fadingUnitIds: J
        }
      ) : /* @__PURE__ */ h(wa, { width: c, children: P ? /* @__PURE__ */ h(Yn, { isLoading: P, position: "left" }) : /* @__PURE__ */ h(va, {}) }),
      E && /* @__PURE__ */ h(bd, { tooltipData: b, visible: U && !z })
    ] })
  ] });
}, $a = v.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Ye + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.mode === "dark" ? e.colors.primary : "#fff"};
`, Cr = v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, Da = v.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, Ea = v.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, kr = v.button`
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
`, _a = v.button`
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
`, Ta = v.div`
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
`, Mr = v.button`
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
`, Aa = v.label`
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
`, Pa = v.span`
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
`, Tt = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), Ia = () => {
  var r, t;
  const e = document.getElementById(yo);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Oa = () => {
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
  } = Ue(), { filterButtonState: a = -1 } = e;
  return /* @__PURE__ */ B($a, { width: 0, children: [
    /* @__PURE__ */ B(Cr, { $at: "start", children: [
      /* @__PURE__ */ B(Ea, { children: [
        /* @__PURE__ */ h(kr, { onClick: n, "aria-label": "Anterior", children: /* @__PURE__ */ h(Tt, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h(_a, { onClick: o, children: "Hoy" }),
        /* @__PURE__ */ h(kr, { onClick: t, "aria-label": "Siguiente", children: /* @__PURE__ */ h(Tt, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      e.showViewSwitcher !== !1 && /* @__PURE__ */ B(Te, { children: [
        /* @__PURE__ */ h(Da, {}),
        /* @__PURE__ */ B(Ta, { children: [
          /* @__PURE__ */ h("button", { className: r === 2 ? "on" : "", onClick: () => s(2), children: "Día" }),
          /* @__PURE__ */ h("button", { className: r === 0 ? "on" : "", onClick: () => s(0), children: "Semana" }),
          /* @__PURE__ */ h("button", { className: r === 1 ? "on" : "", onClick: () => s(1), children: "Mes" })
        ] })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ B(Aa, { children: [
        /* @__PURE__ */ B(Tt, { children: [
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
    /* @__PURE__ */ B(Cr, { $at: "end", children: [
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ B(Mr, { $primary: !!a, onClick: c, children: [
        /* @__PURE__ */ h(Tt, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(Pa, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ B(Mr, { onClick: Ia, children: [
        /* @__PURE__ */ h(Tt, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      d
    ] })
  ] });
}, La = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ya = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Ra = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Na = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Fa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), za = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ba = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Ha = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Wa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), ja = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Za = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Va = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Ga = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Ua = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ oe.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Xa = {
  add: La,
  subtract: Ya,
  filter: Ra,
  arrowLeft: Na,
  arrowRight: Fa,
  defaultAvatar: za,
  calendarWarning: Ba,
  calendarFree: Ha,
  arrowDown: ja,
  arrowUp: Wa,
  search: Za,
  close: Va,
  moon: Ga,
  sun: Ua
}, cn = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = tn(), i = Xa[e];
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
}, Ka = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => Ka(e, r, t)}
`;
const Ja = v.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${go}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${ze};
`, qa = v.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Qa = v.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, ec = v.div`
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
`, tc = v.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, nc = v.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, rc = v.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`, oc = v.div`
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
`, sc = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, ic = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, ac = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, cc = v.div`
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
`, $r = "#cdd8d2", Dr = [178, 216, 195], lc = [15, 125, 102], dc = (e) => {
  const r = Math.min(1, Math.max(0, e)), t = (n) => Math.round(Dr[n] + (lc[n] - Dr[n]) * r);
  return `rgb(${t(0)}, ${t(1)}, ${t(2)})`;
}, uc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ue(), s = ot(), i = ue(null), [c, d] = he(null), a = $e(
    () => Array.from({ length: 12 }, (x, S) => I().month(S).format("MMM").toUpperCase()),
    [s]
  ), l = $e(() => I().startOf("day"), []), { domainStart: u, domainEnd: y, domainDays: C } = $e(() => {
    const x = l.subtract(3, "month").startOf("month"), S = l.add(9, "month").endOf("month");
    return { domainStart: x, domainEnd: S, domainDays: S.diff(x, "day") + 1 };
  }, [l]), b = (x) => x.diff(u, "day") / C * 100, M = (x) => Math.min(100, Math.max(0, x)), g = $e(() => {
    const x = [];
    let S = u.startOf("month");
    for (; S.isBefore(y); )
      x.push(S), S = S.add(1, "month");
    return x;
  }, [u, y]), O = o == null ? void 0 : o.yearCounts, U = $e(() => {
    const x = Math.ceil(C / 7), S = new Array(x).fill(0), j = (A) => {
      const H = A.diff(u, "day");
      return H < 0 || H >= C ? -1 : Math.floor(H / 7);
    };
    if (O && O.length)
      for (const A of O) {
        const H = j(I(A.date));
        H >= 0 && (S[H] += A.count);
      }
    else
      for (const A of t ?? [])
        for (const H of A.data ?? []) {
          const re = j(I(H.startDate));
          re >= 0 && (S[re] += 1);
        }
    const K = Math.max(0, ...S);
    if (K <= 0)
      return S.map(() => ({ h: 0, color: $r }));
    const L = S.filter((A) => A > 0).sort((A, H) => A - H), D = L.length >> 1, P = L.length % 2 ? L[D] : (L[D - 1] + L[D]) / 2, Y = P > 0 ? K / P : 1, E = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, Y)))));
    return S.map(
      (A) => A > 0 ? { h: Math.min(100, 100 * Math.pow(A / K, E)), color: dc(A / K) } : { h: 0, color: $r }
    );
  }, [t, O, u, C]), W = b(l), z = (x) => {
    const { startDate: S, endDate: j } = rn(x, r), K = M(b(S));
    return { left: K, width: M(b(j)) - K, startDate: S, endDate: j };
  }, f = z(e), m = c ? z(c.d) : null, w = (x) => `${x.date()} ${a[x.month()]}`, T = (x) => {
    var K;
    const S = (K = i.current) == null ? void 0 : K.getBoundingClientRect();
    if (!S)
      return null;
    const j = Math.min(1, Math.max(0, (x - S.left) / S.width));
    return { f: j, d: u.add(Math.round(j * (C - 1)), "day") };
  };
  return /* @__PURE__ */ B(Ja, { children: [
    /* @__PURE__ */ B(qa, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ B(
      Qa,
      {
        ref: i,
        onClick: (x) => {
          const S = T(x.clientX);
          S && n(S.d.toDate());
        },
        onMouseMove: (x) => {
          const S = T(x.clientX);
          S && d({ left: S.f * 100, d: S.d });
        },
        onMouseLeave: () => d(null),
        children: [
          /* @__PURE__ */ h(ec, { children: g.map((x, S) => /* @__PURE__ */ h("span", { style: { left: `${b(x)}%` }, children: S === 0 || x.month() === 0 ? `${a[x.month()]} ${x.format("YY")}` : a[x.month()] }, S)) }),
          g.map(
            (x, S) => S === 0 ? null : /* @__PURE__ */ h(tc, { style: { left: `${b(x)}%` } }, S)
          ),
          /* @__PURE__ */ h(nc, { children: U.map((x, S) => /* @__PURE__ */ h(rc, { style: { height: `${x.h}%`, background: x.color } }, S)) }),
          /* @__PURE__ */ h(sc, { style: { left: `${f.left}%`, width: `${f.width}%` } }),
          /* @__PURE__ */ h(oc, { style: { left: `${M(W)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && m && /* @__PURE__ */ B(Te, { children: [
            /* @__PURE__ */ h(ic, { style: { left: `${m.left}%`, width: `${m.width}%` } }),
            /* @__PURE__ */ h(ac, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(cc, { style: { left: `${c.left}%` }, children: `Ir a ${w(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, _o = Nn(/* @__PURE__ */ new Map()), fc = () => Qe(_o), hc = 10500, pc = 60, mc = 600, gc = (e) => {
  var d;
  const r = document.getElementById(qe), t = r == null ? void 0 : r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);
  if (!r || !t)
    return !1;
  const n = r.getBoundingClientRect(), o = (d = document.getElementById(ho)) == null ? void 0 : d.getBoundingClientRect(), s = t.getBoundingClientRect(), i = Math.max((o == null ? void 0 : o.bottom) ?? n.top, n.top, 0), c = Math.min(n.bottom, window.innerHeight);
  return s.width > 0 && s.right > n.left + Ye && s.left < n.right && s.bottom > i && s.top < c;
}, yc = () => {
  const [e, r] = he(() => /* @__PURE__ */ new Map()), t = ue(0), n = ue(/* @__PURE__ */ new Set());
  ge(() => {
    const s = n.current;
    return () => s.forEach(clearTimeout);
  }, []);
  const o = de((s) => {
    const i = s.filter((l) => gc(l.segmentId));
    if (!i.length)
      return [];
    const c = ++t.current, d = new Map(
      i.map((l, u) => [
        l.segmentId,
        { kind: l.kind, key: c, delayMs: Math.min(u * pc, mc) }
      ])
    );
    r((l) => new Map([...Array.from(l), ...Array.from(d)]));
    const a = setTimeout(() => {
      n.current.delete(a), r((l) => {
        const u = new Map(l);
        return d.forEach((y, C) => {
          var b;
          ((b = u.get(C)) == null ? void 0 : b.key) === c && u.delete(C);
        }), u;
      });
    }, hc);
    return n.current.add(a), i.map((l) => l.segmentId);
  }, []);
  return { pulses: e, pulseTiles: o };
}, vc = v.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, xc = v.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? go : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, bc = v.div`
  position: relative;
`, wc = ({
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
  clickToAddConfig: b
}) => {
  const { goToDate: M, handleGoToday: g, zoomIn: O, zoomOut: U, zoom: W } = Ue(), { pulses: z, pulseTiles: f } = yc();
  return Kr(
    u,
    () => ({
      goToDate: M,
      goToToday: g,
      setZoom: (m) => {
        if (!bo(m))
          return;
        const w = m - W;
        if (w > 0)
          for (let T = 0; T < w; T++)
            O();
        else
          for (let T = 0; T < Math.abs(w); T++)
            U();
      },
      pulseTiles: f
    }),
    [M, g, W, O, U, f]
  ), /* @__PURE__ */ h(_o.Provider, { value: z, children: /* @__PURE__ */ h(
    Ma,
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
      clickToAddConfig: b
    }
  ) });
}, d1 = Fn(function({
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
  onEventDrop: b,
  onEventDrag: M,
  draggableConfig: g,
  onTimeRangeSelect: O,
  onMultiTimeRangeSelect: U,
  clickToAddConfig: W
}, z) {
  var E;
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
  ), m = ue(null), w = ue(null), [T, x] = he((E = m.current) == null ? void 0 : E.clientWidth), S = $e(() => I(s), [s]), [j, K] = he(f.defaultTheme ?? "light"), L = () => {
    K(j === "light" ? "dark" : "light");
  }, D = j === "light" ? Fs : zs, P = f.theme ? f.theme[D.mode] : {}, Y = {
    ...D,
    colors: {
      ...D.colors,
      ...P
    }
  };
  return Kr(
    z,
    () => ({
      goToDate: (A) => {
        var H;
        return (H = w.current) == null ? void 0 : H.goToDate(A);
      },
      goToToday: () => {
        var A;
        return (A = w.current) == null ? void 0 : A.goToToday();
      },
      setZoom: (A) => {
        var H;
        return (H = w.current) == null ? void 0 : H.setZoom(A);
      },
      pulseTiles: (A) => {
        var H;
        return ((H = w.current) == null ? void 0 : H.pulseTiles(A)) ?? [];
      }
    }),
    []
  ), en(() => {
    const A = () => {
      m.current && x(m.current.clientWidth);
    };
    A(), window.addEventListener("resize", A);
    let H;
    const re = m.current;
    return re && typeof ResizeObserver < "u" && (H = new ResizeObserver(A), H.observe(re)), () => {
      window.removeEventListener("resize", A), H == null || H.disconnect();
    };
  }, []), /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h(Ns, {}),
    /* @__PURE__ */ h(Os, { theme: Y, children: /* @__PURE__ */ h(pa, { lang: f.lang, translations: f.translations, children: /* @__PURE__ */ h(
      Mi,
      {
        data: r,
        isLoading: !!C,
        config: f,
        onRangeChange: i,
        defaultStartDate: S,
        handleToggleDisplayActiveUnits: a,
        onClearFilterData: l,
        toolbarActions: u,
        children: /* @__PURE__ */ B(vc, { id: yo, children: [
          /* @__PURE__ */ h(
            xc,
            {
              showScroll: !!r.length,
              $footer: f.showOverview !== !1 && !!r.length,
              id: qe,
              ref: m,
              children: /* @__PURE__ */ h(bc, { children: /* @__PURE__ */ h(
                wc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  onTileContextMenu: d,
                  topBarWidth: T ?? 0,
                  onItemClick: y,
                  toggleTheme: L,
                  onEventDrop: b,
                  onEventDrag: M,
                  draggableConfig: g,
                  schedulerRef: w,
                  onTimeRangeSelect: O,
                  onMultiTimeRangeSelect: U,
                  clickToAddConfig: W
                }
              ) })
            }
          ),
          f.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(uc, {})
        ] })
      }
    ) }) })
  ] });
}), Sc = v.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, Cc = v.button`
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
`, kc = v.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Mc = v.p`
  ${_t}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Er = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = ot(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(Sc, { intent: e, children: /* @__PURE__ */ B(Cc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(kc, { children: t }),
    /* @__PURE__ */ h(Mc, { children: d })
  ] }) });
}, $c = v.div`
  min-width: ${Ye + "px"};
  max-width: ${Ye + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Dc = v.div`
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
`, Ec = v.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, _c = v.input`
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
`, Tc = v.div`
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
`, Ac = je`
  from { opacity: 1; }
  to { opacity: 0; }
`, ln = v.div`
  ${({ $fading: e }) => e && Et`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Ac} 180ms ease forwards;
      }
    `}
`, Pc = v.button`
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
`, Ic = je`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, Oc = v.div`
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
    animation: ${Ic} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Lc = v.div`
  display: flex;
  align-items: center;
`, Yc = v.div`
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
`, Rc = v.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Nc = v.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, _r = v.p`
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
`, Fc = v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`, zc = v.span`
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
`, Bc = v.span`
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
`, Hc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Wc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: [
  /* @__PURE__ */ h("circle", { cx: "9", cy: "8", r: "3.2" }),
  /* @__PURE__ */ h("path", { d: "M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z" }),
  /* @__PURE__ */ h("circle", { cx: "16.8", cy: "8.6", r: "2.5" }),
  /* @__PURE__ */ h("path", { d: "M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8" })
] }), jc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Zc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Vc = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  Oc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ B(Lc, { children: [
      /* @__PURE__ */ h(Yc, { $provider: o, children: Hc(r.icon) ? /* @__PURE__ */ h(Rc, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Zc, {}) : /* @__PURE__ */ h(jc, {}) }),
      /* @__PURE__ */ B(Nc, { children: [
        /* @__PURE__ */ h(_r, { isMain: !0, children: r.title }),
        r.capacity != null || r.plate ? /* @__PURE__ */ B(Fc, { children: [
          r.capacity != null && /* @__PURE__ */ B(zc, { title: `${r.capacity} pasajeros`, children: [
            /* @__PURE__ */ h(Wc, {}),
            r.capacity
          ] }),
          r.plate && /* @__PURE__ */ h(Bc, { title: r.plate, children: r.plate })
        ] }) : r.subtitle && /* @__PURE__ */ h(_r, { children: r.subtitle })
      ] })
    ] })
  }
), To = (e) => e.mode === "dark" ? "#FCA5A5" : "#B91C1C", Gc = v.div`
  display: flex;
  align-items: center;
  gap: ${({ $tone: e }) => e ? "4px" : "5px"};
  padding: ${({ $tone: e }) => e ? "0 7px 0 9px" : "0 11px 0 9px"};
  height: 21px;
  color: ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? To(e) : r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  background: ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.warning + "26" : r === "subcontract" ? e.colors.subcontractBorder + "24" : "#E9EFEC"};
  border-left: 3px solid
    ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.warning : r === "subcontract" ? e.colors.subcontractBorder : "transparent"};
  border-bottom: 1px solid
    ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.warning + "66" : r === "subcontract" ? e.colors.subcontractBorder : "#D4DFD9"};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? e.colors.warning + "38" : r === "subcontract" ? e.colors.subcontractBorder + "33" : "#DAE6E0"};
  }
`, Uc = v.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: ${({ $tone: e }) => e ? "0.03em" : "0.07em"};
  text-transform: uppercase;
  color: ${({ theme: e, $variant: r, $tone: t }) => t === "warning" ? To(e) : r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, Xc = v.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  flex-shrink: 0;
`, Kc = v.span`
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
  color: ${({ $tone: e }) => e === "warning" ? "#FFFFFF" : "#2E8B63"};
  background: ${({ theme: e, $tone: r }) => r === "warning" ? e.colors.warning : "#2E8B6324"};
`, Jc = v.div`
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
`, dn = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => {
  const s = o === "unassigned" ? r === 0 ? "ok" : "warning" : void 0;
  return /* @__PURE__ */ B(Gc, { $variant: o, $tone: s, onClick: n, title: e, children: [
    /* @__PURE__ */ h(Jc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
      "path",
      {
        d: "M3 4.5L6 7.5L9 4.5",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }),
    /* @__PURE__ */ h(Uc, { $variant: o, $tone: s, children: e }),
    s ? /* @__PURE__ */ B(Kc, { $tone: s, children: [
      /* @__PURE__ */ h("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: s === "ok" ? /* @__PURE__ */ h(
        "path",
        {
          d: "M2.5 6.5L5 9L9.5 3.5",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ) : /* @__PURE__ */ B(Te, { children: [
        /* @__PURE__ */ h("path", { d: "M6 1.5L11 10.5H1L6 1.5Z", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" }),
        /* @__PURE__ */ h("path", { d: "M6 5V7.2", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
        /* @__PURE__ */ h("circle", { cx: "6", cy: "8.9", r: "0.75", fill: "currentColor" })
      ] }) }),
      r
    ] }) : /* @__PURE__ */ h(Xc, { $variant: o, children: r })
  ] });
}, qc = ({
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
  allGroupIds: b,
  onExpandAll: M,
  onCollapseAll: g,
  unassignedCount: O
}) => {
  const [U, W] = he(!1), z = ot(), f = () => W((E) => !E), m = r ? [...r].sort((E, A) => E.maxPassengers - A.maxPassengers) : [], w = m.length > 0, T = b.length > 0, x = T && u.size === b.length;
  T && u.size;
  const S = e.filter((E) => E.isUnassigned), j = z.unassigned ?? "No unit assigned", K = e.filter((E) => E.isSubcontract), L = z.subcontract ?? "Subcontract", D = (E) => {
    const A = e.indexOf(E);
    return /* @__PURE__ */ h(
      Vc,
      {
        id: E.id,
        item: E.label,
        rows: n[A],
        onItemClick: l,
        isSubcontract: E.isSubcontract
      },
      E.id
    );
  }, P = (E) => {
    const A = e.filter(
      (R) => !R.isSubcontract && R.categoryId === E.id
    );
    if (A.length === 0)
      return null;
    const H = u.has(E.id), re = y.has(E.id), ee = E.name;
    return /* @__PURE__ */ B("div", { children: [
      /* @__PURE__ */ h(
        dn,
        {
          label: ee,
          count: A.length,
          isCollapsed: H || re,
          onToggle: () => C(E.id),
          variant: "category"
        }
      ),
      !H && /* @__PURE__ */ h(ln, { $fading: re, children: A.map(D) })
    ] }, E.id);
  }, Y = e.filter(
    (E) => !E.isSubcontract && !E.isUnassigned && (!E.categoryId || !w)
  );
  return /* @__PURE__ */ B($c, { children: [
    /* @__PURE__ */ B(Dc, { $height: t, children: [
      /* @__PURE__ */ B(Ec, { children: [
        /* @__PURE__ */ B(Tc, { isFocused: U, children: [
          /* @__PURE__ */ h(
            _c,
            {
              placeholder: z.search,
              value: d,
              onChange: a,
              onFocus: f,
              onBlur: f
            }
          ),
          /* @__PURE__ */ h(cn, { iconName: "search" })
        ] }),
        T && /* @__PURE__ */ h(
          Pc,
          {
            title: x ? "Expand all" : "Collapse all",
            onClick: x ? M : g,
            $allCollapsed: x,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: x ? /* @__PURE__ */ B(Te, { children: [
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
        Er,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ h(cn, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    S.length > 0 && /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(
        dn,
        {
          label: j,
          count: O,
          isCollapsed: u.has("__unassigned__") || y.has("__unassigned__"),
          onToggle: () => C("__unassigned__"),
          variant: "unassigned"
        }
      ),
      !u.has("__unassigned__") && /* @__PURE__ */ h(ln, { $fading: y.has("__unassigned__"), children: S.map(D) })
    ] }),
    w ? m.map(P) : Y.map(D),
    w && Y.length > 0 && Y.map(D),
    K.length > 0 && /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(
        dn,
        {
          label: L,
          count: K.length,
          isCollapsed: u.has("__subcontract__") || y.has("__subcontract__"),
          onToggle: () => C("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !u.has("__subcontract__") && /* @__PURE__ */ h(ln, { $fading: y.has("__subcontract__"), children: K.map(D) })
    ] }),
    /* @__PURE__ */ h(
      Er,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(cn, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, Qc = v.div`
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
`, el = je`
from{
    left: -100%;
}
to{
    left: 100%;
}`, tl = v.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${el} 1s infinite;
`, nl = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(Qc, { position: r, children: /* @__PURE__ */ h(tl, {}) }) : null, Yn = nl, et = (e, r) => {
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
    strokeStyle: b,
    labelBetweenCells: M
  } = e;
  t.beginPath();
  const g = b ?? (r.mode === "dark" ? r.colors.border : "#E4EAE7");
  if (t.strokeStyle = g, t.setLineDash([]), d && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), M ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : (t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke()), t.font = a;
    const O = n + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.mode === "dark" ? r.colors.textPrimary : "#183D3D", t.fillText(d, O, c);
  }
  if (l && u && y && C) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.beginPath(), t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke(), t.font = y.font;
    const O = n + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, O, y.y), t.font = C.font;
    const U = n + s / 2 - t.measureText(C.label).width / 2;
    t.fillStyle = C.color, t.fillText(C.label, U, C.y);
  }
}, rl = (e, r, t, n, o = ut) => {
  const s = Ge + o, i = s + 13, c = s + 27;
  let d = 0;
  for (let a = 0; a < r; a++) {
    const l = xo(
      I(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    ), u = l.isCurrentDay;
    if (et(
      {
        ctx: e,
        x: d,
        y: s,
        width: _e,
        height: wt,
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
          font: `600 10px ${ze}`,
          color: n.mode === "dark" ? n.colors.placeholder : "#74897F"
        },
        bottomText: {
          y: c,
          label: `${l.dayOfMonth}`,
          font: u ? `700 12px ${ze}` : `700 13px ${ze}`,
          color: u ? n.colors.today : n.mode === "dark" ? n.colors.textPrimary : "#183D3D"
        }
      },
      n
    ), u) {
      const b = d + _e / 2, M = i - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(b - 30 / 2, M, 30, 13, 5) : e.rect(b - 30 / 2, M, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${ze}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", b, M + 13 / 2 + 0.5), e.restore();
    }
    d += _e;
  }
}, ol = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * We;
  const s = Ge;
  let c = t.month;
  for (let d = 0; d < r; d++) {
    c >= fo && (c = 0);
    const a = vo(t, d) * We;
    et(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: ut,
        textYPos: mo,
        label: I().month(c).format("MMMM").toUpperCase(),
        font: rt.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, sl = " ".repeat(98), il = (e, r, t) => {
  const o = I(`${r.year}-${r.month + 1}-${r.dayOfMonth}`);
  let s = -r.dayOfMonth * _e + _e;
  for (let i = 0; i < fo; i++) {
    const c = o.add(i, "months"), d = c.daysInMonth() * _e, a = c.format("MMMM YYYY").toUpperCase();
    et(
      {
        ctx: e,
        x: s,
        y: 0,
        width: d,
        height: Ge,
        textYPos: Zn,
        label: `${a}${sl}${a}`,
        font: `800 12px ${ze}`
      },
      t
    ), s += d;
  }
}, al = (e, r, t, n) => {
  const o = 7 * _e, s = Ge, i = e.canvas.width / o + o, c = r.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = I(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (c + a) % pr;
    u <= 0 && (u += pr), l !== 1 && a === 0 && (d = -l * _e + _e), et(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: ut,
        textYPos: mo,
        label: `${t.toUpperCase()} ${u}`,
        font: rt.middleRow
      },
      n
    ), d += o;
  }
}, cl = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, ll = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, dl = (e, r, t, n, o) => {
  const s = Jt - wt / 1.6, i = Jt - wt / 4.5, c = Ge + ut;
  let d = 0;
  for (let a = 0; a < r; a++) {
    const l = I(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = l.isSame(I(), "week");
    et(
      {
        ctx: e,
        x: d,
        y: c,
        width: $t,
        height: wt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: u ? o.colors.today + "26" : cl({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: u ? `700 14px ${ze}` : rt.bottomRow.name,
          color: u ? o.colors.today : ll({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: rt.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += $t;
  }
}, ul = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (yr(s) - t + 1) * We, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = yr(s + d) * We), l + a > i && d > 0 && (a = Math.ceil((i - l) / We) * We), et(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Ge,
        textYPos: Zn,
        label: (s + d).toString(),
        font: rt.topRow
      },
      n
    ), c += a, l += a, d++;
}, fl = (e, r, t, n) => {
  const o = Math.floor(r / qt) + 2, s = qt * Oe;
  let d = -I(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Oe + 0.5 * Oe;
  for (let a = 0; a < o; a++) {
    const l = I(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    et(
      {
        ctx: e,
        x: d,
        y: Dt,
        width: s,
        height: Rt,
        textYPos: Dt + Rt / 2 + 2,
        label: l,
        font: rt.bottomRow.number
      },
      n
    ), d += s;
  }
}, hl = (e, r, t, n) => {
  const o = Math.ceil(r / qt), s = I(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Oe;
  for (let u = 0; u < a; u++) {
    const y = I(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), b = I(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), M = b.format("MMMM").toUpperCase(), g = b.diff(y, "hour") + 1, O = u === 0 ? g * Oe : r * Oe;
    et(
      {
        ctx: e,
        x: l,
        y: 0,
        width: O,
        height: Dt,
        textYPos: Zn,
        label: M,
        font: rt.topRow
      },
      n
    ), l += O;
  }
}, pl = (e, r, t, n) => {
  let o = 0;
  const s = Dt + Rt, i = I(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Oe;
  for (let d = 0; d < r; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    et(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: wn,
        label: a,
        font: rt.bottomRow.hoursInDay,
        textYPos: Dt + Rt + wn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Oe;
  }
}, ml = (e, r, t, n, o, s, i, c = !0) => {
  switch (r) {
    case 0:
      ul(e, n, s, i), ol(e, t, n, i), dl(e, t, n, o, i);
      break;
    case 1:
      il(e, n, i), c && al(e, n, o, i), rl(e, t, n, i, c ? ut : 0);
      break;
    case 2:
      hl(e, t, n, i), fl(e, t, n, i), pl(e, t, n, i);
      break;
  }
}, gl = v.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, yl = v.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, vl = v.div`
  height: ${({ $height: e }) => e ?? Jt}px;
  display: block;
`, xl = v.canvas``, bl = {
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
    children: bl[e]
  }
), wl = v.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Ye + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, Tr = v.span`
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
`, Zt = v.span`
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
`, Sl = v.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, Cl = v.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, kl = v.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, Ml = v.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, $l = v.span`
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
`, Dl = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], El = () => /* @__PURE__ */ B(wl, { children: [
  /* @__PURE__ */ h(Tr, { children: "Leyenda" }),
  /* @__PURE__ */ B(Zt, { children: [
    /* @__PURE__ */ h(He, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ B(Zt, { children: [
    /* @__PURE__ */ h(He, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ B(Zt, { children: [
    /* @__PURE__ */ h(He, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ B(Zt, { children: [
    /* @__PURE__ */ h(Sl, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(Cl, {}),
  /* @__PURE__ */ B(Tr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  Dl.map((e) => /* @__PURE__ */ B(kl, { children: [
    /* @__PURE__ */ h(Ml, { style: { background: e.stripe } }),
    /* @__PURE__ */ h($l, { style: { color: e.color }, children: /* @__PURE__ */ h(He, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), _l = Fn(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = ot(), { date: c, cols: d, dayOfYear: a, startDate: l, config: u } = Ue(), y = ue(null), C = tn(), b = u.showWeekRow !== !1, M = r === 2 ? Bs : r === 1 && !b ? Ge + wt : Jt, g = de(
    (O) => {
      const U = Xn(), W = M + 1;
      So(O, U, W), ml(O, r, d, l, i, a, C, b);
    },
    [d, a, l, i, r, C, b, M]
  );
  return ge(() => {
    if (!y.current)
      return;
    const O = y.current.getContext("2d");
    if (!O)
      return;
    const U = () => g(O);
    return window.addEventListener("resize", U), () => window.removeEventListener("resize", U);
  }, [g]), ge(() => {
    const O = y.current;
    if (!O)
      return;
    O.style.letterSpacing = "1px";
    const U = O.getContext("2d");
    U && g(U);
  }, [c, r, g]), /* @__PURE__ */ B(gl, { ref: s, children: [
    (u.showTopbar !== !1 || u.showLegend !== !1) && /* @__PURE__ */ B(yl, { $width: t, children: [
      u.showTopbar !== !1 && /* @__PURE__ */ h(Oa, { width: t, showThemeToggle: n, toggleTheme: o }),
      u.showLegend !== !1 && /* @__PURE__ */ h(El, {})
    ] }),
    /* @__PURE__ */ h(vl, { $height: M, id: ho, children: /* @__PURE__ */ h(xl, { ref: y }) })
  ] });
}), Tl = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = We;
      break;
    case 2:
      n = Oe;
      break;
    default:
      n = _e;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), d = r.endDate.startOf("day"), a = () => {
    let l;
    switch (t) {
      case 2:
        l = (e.startDate.diff(r.startDate, "minute") / Pe + 1) * n - n / 2;
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
          e.endDate.diff(e.startDate, "minute") / Pe * n,
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
          e.endDate.diff(r.startDate, "minute") / Pe * n + 0.5 * n,
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
          r.endDate.diff(e.startDate, "minute") / Pe * n,
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
          r.endDate.diff(r.startDate, "minute") / Pe * n,
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
}, Al = (e, r, t, n, o, s) => {
  const i = e * ye + Hs, c = r.hour(), d = t.hour();
  let a, l, u, y;
  switch (s) {
    case 2: {
      a = I(n), l = I(o), u = I(r).hour(c).minute(0), y = I(t).hour(d).minute(0);
      break;
    }
    default: {
      a = I(n).hour(0).minute(0), l = I(o).hour(23).minute(59), u = r, y = t;
      break;
    }
  }
  return {
    ...Tl(
      { startDate: a, endDate: l },
      { startDate: u, endDate: y },
      s
    ),
    y: i
  };
}, Ao = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, Po = {
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
  ${_t}
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
const Pl = je`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, Il = je`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, Ol = v.button`
  ${_t}
  position: absolute;
  height: ${nn}px;
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
    animation: ${Pl} 180ms ease-out;
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
  ${({ $exiting: e }) => e && Et`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Il} 190ms ease-out forwards;
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
`, Ll = v.div`
  position: sticky;
  left: ${Ye + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`, Ar = v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Yl = v.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Rl = v.span`
  ${dt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, Nl = v.span`
  ${dt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Fl = v.span`
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
`, zl = v.div`
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
`, Pr = v.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Ir = v.span`
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
`, Or = v.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, Rn = {
  confirmed: { ring: "#2E8B63", glow: "rgba(46, 139, 99, 0.45)" },
  notified: { ring: "#2C6BB0", glow: "rgba(44, 107, 176, 0.45)" },
  lost: { ring: "#C6483D", glow: "rgba(198, 72, 61, 0.45)" }
}, Bl = je`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`, Hl = je`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`, Wl = je`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`, jl = je`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`, Zl = v.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({ $kind: e }) => Rn[e].ring};
  --pulse-glow: ${({ $kind: e }) => Rn[e].glow};
  animation:
    ${Bl} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${Hl} 9600ms linear var(--pulse-delay, 0ms) both;
`, Vl = v.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({ $kind: e }) => Rn[e].ring};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Wl} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
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
      animation: ${jl} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`, Gl = v.div`
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
`, Lr = v.span`
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
`, Ul = je`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`, Xl = v.div`
  position: absolute;
  height: ${nn}px;
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
    animation: ${Ul} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`, Kl = v.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`, Jl = v.div`
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
`, ql = v.div`
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
`, Ql = v.span`
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
`, ed = v.span`
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
`, td = 34, un = ({
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
  ghost: b = !1,
  ghostBadge: M = "",
  pulse: g
}) => {
  const { date: O } = Ue(), U = rn(O, t), { y: W, x: z, width: f } = Al(
    e,
    U.startDate,
    U.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: m } = tn(), w = ue(null), T = I(r.startDate).isSame(I(r.endDate), "day"), x = r.eventType === Nt.Tour, S = r.eventType === Nt.Transfer, j = T && (x || S);
  if (b)
    return /* @__PURE__ */ B(Xl, { style: { left: `${z}px`, top: `${W + a}px`, width: `${f}px` }, children: [
      /* @__PURE__ */ B(Kl, { children: [
        /* @__PURE__ */ B(Jl, { children: [
          /* @__PURE__ */ h(He, { name: S ? "transfer" : "tour" }),
          r.title
        ] }),
        /* @__PURE__ */ B(ql, { children: [
          /* @__PURE__ */ h(He, { name: "check", strokeWidth: 2.6 }),
          "flota propia"
        ] })
      ] }),
      M && /* @__PURE__ */ h(Ql, { children: M })
    ] });
  const K = (ee) => {
    ee.button === 0 && (w.current = { x: ee.clientX, y: ee.clientY }, d && i && (ee.preventDefault(), i(r, ee)));
  }, L = (ee) => {
    s && (ee.preventDefault(), s(r, { x: ee.clientX, y: ee.clientY }));
  }, D = (ee) => {
    if (w.current) {
      const R = Math.abs(ee.clientX - w.current.x), N = Math.abs(ee.clientY - w.current.y);
      Math.sqrt(R * R + N * N) <= 5 && (o == null || o(r)), w.current = null;
    } else
      o == null || o(r);
  }, P = {
    left: `${z}px`,
    top: `${W + a}px`,
    backgroundColor: `${r.bgColor ?? m.defaultTile}`,
    width: `${f}px`,
    color: Ao(r.bgColor ?? "")
  }, Y = !n && r.readiness ? Po[r.readiness] : null, E = n && r.subcontractConfirmed === !1, A = g ? { "--pulse-delay": `${g.delayMs}ms` } : void 0, H = (ee) => g ? /* @__PURE__ */ h(
    Vl,
    {
      $kind: g.kind,
      style: A,
      children: ee
    },
    `${g.key}-${r.readiness ?? ""}-${String(r.subcontractConfirmed)}`
  ) : ee, re = (ee) => /* @__PURE__ */ B(
    Ol,
    {
      "data-segment-id": r.segmentId,
      style: P,
      onClick: D,
      onMouseDown: K,
      onContextMenu: L,
      onDragStart: (R) => R.preventDefault(),
      isDraggable: d,
      isDragging: c,
      $unconfirmed: E,
      $exiting: l,
      $highlighted: u,
      $dimmed: y,
      $leaving: C,
      $pulsing: !!g,
      children: [
        g && /* @__PURE__ */ h(Zl, { $kind: g.kind, style: A, "aria-hidden": !0 }, g.key),
        C && /* @__PURE__ */ h(ed, { children: "Sub" }),
        ee
      ]
    }
  );
  return re(
    j ? /* @__PURE__ */ B(Te, { children: [
      (n || Y) && /* @__PURE__ */ h(Pr, { $sm: !0, children: H(
        n ? /* @__PURE__ */ h(Or, { children: "SUB" }) : Y && /* @__PURE__ */ h(Ir, { $sm: !0, style: { color: Y.color }, children: /* @__PURE__ */ h(He, { name: Y.icon, strokeWidth: Y.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      /* @__PURE__ */ B(Gl, { $transfer: S, children: [
        /* @__PURE__ */ h(He, { name: S ? "transfer" : "sun", strokeWidth: 2.4 }),
        f >= td && /* @__PURE__ */ B(Te, { children: [
          /* @__PURE__ */ h(Lr, { children: I(r.startDate).format("h:mm A") }),
          !S && /* @__PURE__ */ h(Lr, { $end: !0, children: I(r.endDate).format("h:mm A") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(Pr, { children: (n || Y) && H(
        n ? /* @__PURE__ */ h(Or, { children: "SUB" }) : Y && /* @__PURE__ */ h(Ir, { style: { color: Y.color }, children: /* @__PURE__ */ h(He, { name: Y.icon, strokeWidth: Y.icon === "check" ? 2.6 : 2.2 }) })
      ) }),
      r.bookingNumber && /* @__PURE__ */ h(Fl, { children: r.bookingNumber }),
      /* @__PURE__ */ B(Ll, { children: [
        /* @__PURE__ */ B(Ar, { $pad: !0, children: [
          /* @__PURE__ */ h(Yl, { children: /* @__PURE__ */ h(He, { name: S ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(Rl, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(Ar, { children: /* @__PURE__ */ h(Nl, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ B(zl, { children: [
          /* @__PURE__ */ h(He, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Yr = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Fe;
}, nd = (e) => ({
  segmentId: e.segmentId,
  reservationId: e.reservationId,
  startDate: e.startDate,
  endDate: e.endDate,
  occupancy: 0,
  title: e.title,
  bookingNumber: "",
  eventType: e.eventType
}), rd = ({
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
  const C = fc(), { nodes: b, liveMap: M } = $e(() => {
    const f = /* @__PURE__ */ new Map(), m = !!l && l.length > 0;
    let w = 0;
    return { nodes: e.map((x, S) => {
      S > 0 && (w += Math.max(e[S - 1].data.length, 1));
      const j = !!(d != null && d.has(x.id)), K = m && !l.includes(x.id), L = Yr(w, c), D = y && x.id === y.targetUnitId ? /* @__PURE__ */ h(
        un,
        {
          row: w,
          data: nd(y),
          zoom: r,
          yOffset: L,
          isDragging: !1,
          isDraggable: !1,
          ghost: !0,
          ghostBadge: y.badge
        },
        `ghost-${x.id}`
      ) : null;
      if (!x.data.some((Y) => Y.length > 0))
        return D ? [D] : [];
      const P = x.data.map(
        (Y, E) => Y.map((A) => {
          const H = i === A.segmentId, re = s ? s(A) : !1, ee = E + w, R = Yr(ee, c);
          return f.set(A.segmentId, {
            project: A,
            absoluteRow: ee,
            yOffset: R,
            isSubcontract: !!x.isSubcontract
          }), /* @__PURE__ */ h(
            un,
            {
              row: ee,
              data: A,
              zoom: r,
              isSubcontract: x.isSubcontract,
              onTileClick: t,
              onTileContextMenu: n,
              onDragStart: o,
              isDragging: H,
              isDraggable: re,
              yOffset: R,
              exiting: j,
              highlighted: a != null && A.segmentId === a,
              dimmed: K,
              leaving: !!(u != null && u.includes(A.segmentId)),
              pulse: C.get(A.segmentId)
            },
            A.segmentId
          );
        })
      );
      return D ? [...P, [D]] : P;
    }).flat(2), liveMap: f };
  }, [e, t, n, r, o, s, i, c, d, a, l, u, y, C]), g = ue(/* @__PURE__ */ new Map()), O = ue([]), [U, W] = he([]);
  ge(() => () => O.current.forEach(clearTimeout), []), ge(() => {
    const f = g.current;
    g.current = M;
    const m = [];
    if (f.forEach((x, S) => {
      M.has(S) || m.push(x);
    }), W((x) => {
      let S = x.filter((j) => !M.has(j.project.segmentId));
      for (const j of m)
        S.some((K) => K.project.segmentId === j.project.segmentId) || (S = [...S, j]);
      return S;
    }), !m.length)
      return;
    const w = new Set(m.map((x) => x.project.segmentId)), T = setTimeout(() => {
      W((x) => x.filter((S) => !w.has(S.project.segmentId)));
    }, 220);
    O.current.push(T);
  }, [M]);
  const z = U.filter((f) => !M.has(f.project.segmentId)).map((f) => /* @__PURE__ */ h(
    un,
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
  return /* @__PURE__ */ h(Te, { children: [...b, ...z] });
}, od = rd;
v.div`
  box-sizing: border-box;
  font-family: ${ze};
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
const sd = v.div`
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
`, id = v.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, ad = v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, cd = v.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, ld = v.span`
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
`, dd = v.div`
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
`, ud = v.div`
  ${_t}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, fd = v.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, hd = v.div`
  padding: 10px 12px;
`, pd = v.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Rr = v.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Nr = v.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Fr = v.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, zr = v.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Br = v.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, md = v.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, gd = v.div`
  min-width: 0;
`, yd = v.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, vd = v.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, Hr = v.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, At = v.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Pt = v.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, It = v.div`
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
const xd = {
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
}, bd = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = ue(null), [s, i] = he("below"), c = ot(), d = { ...xd, ...c.tooltip };
  en(() => {
    if (!o.current || !t)
      return;
    const M = o.current, { width: g, height: O } = M.getBoundingClientRect(), U = M.parentElement;
    if (!U)
      return;
    const W = U.getBoundingClientRect(), z = 12, f = 4, m = W.height - t.y, w = W.width - t.x;
    let T = t.x + z, x = t.y + z, S = "below";
    w < g + z && (T = t.x - g - z), m < O + z && (x = t.y - O - z, S = "above"), T = Math.max(f, Math.min(T, W.width - g - f)), x = Math.max(f, Math.min(x, W.height - O - f)), i(S), M.style.left = `${T}px`, M.style.top = `${x}px`;
  }, [t]);
  const a = n.reservationType === Nt.Tour, l = a && n.isOneDayEvent, u = a ? l ? "sun" : "tour" : "transfer", y = a ? l ? d.oneDay : d.tour : d.transfer, C = n.readiness ? Po[n.readiness] : null, b = [
    n.groupName && { label: d.groupName, value: n.groupName },
    n.driver && { label: d.driver, value: n.driver },
    n.passengers && { label: d.passengers, value: String(n.passengers) },
    n.flightNumber && { label: d.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ B(sd, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ B(id, { children: [
      /* @__PURE__ */ B(ad, { children: [
        /* @__PURE__ */ h(cd, { children: n.bookingNumber }),
        /* @__PURE__ */ B(ld, { children: [
          /* @__PURE__ */ h(He, { name: u, strokeWidth: 2.4 }),
          y
        ] })
      ] }),
      /* @__PURE__ */ h(ud, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(fd, { children: n.client }),
      C && /* @__PURE__ */ B(dd, { style: { color: C.color }, children: [
        /* @__PURE__ */ h(He, { name: C.icon, strokeWidth: C.icon === "check" ? 2.6 : 2.2 }),
        n.readinessNote || C.label
      ] })
    ] }),
    /* @__PURE__ */ B(hd, { children: [
      /* @__PURE__ */ B(pd, { children: [
        /* @__PURE__ */ B(Rr, { children: [
          /* @__PURE__ */ h(Nr, { children: d.startDate }),
          /* @__PURE__ */ B(Fr, { children: [
            /* @__PURE__ */ h(zr, { children: n.startDate }),
            /* @__PURE__ */ h(Br, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ B(Rr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Nr, { children: d.endDate }),
          /* @__PURE__ */ B(Fr, { children: [
            /* @__PURE__ */ h(zr, { children: n.endDate }),
            /* @__PURE__ */ h(Br, { children: n.endTime })
          ] })
        ] })
      ] }),
      b.length > 0 && /* @__PURE__ */ h(md, { children: b.map((M, g) => /* @__PURE__ */ B(gd, { children: [
        /* @__PURE__ */ h(yd, { children: M.label }),
        /* @__PURE__ */ h(vd, { children: M.value })
      ] }, g)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ B(Hr, { children: [
        n.departureAddress && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ h(Pt, { children: d.salida }),
          /* @__PURE__ */ h(It, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ h(Pt, { children: d.destino }),
          /* @__PURE__ */ h(It, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ h(Pt, { children: d.regreso }),
          /* @__PURE__ */ h(It, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ B(Hr, { children: [
        n.serviceNotes && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ h(Pt, { children: d.serviceNotes }),
          /* @__PURE__ */ h(It, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ h(Pt, { children: d.reservationNotes }),
          /* @__PURE__ */ h(It, { children: n.reservationNotes })
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
const wd = v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Sd = v.div`
  position: absolute;
  height: ${nn}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, Cd = v.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Wr = v.p`
  ${_t}
  ${dt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, kd = v.p`
  ${_t}
  ${dt}
`, Md = v.div`
  position: sticky;
  left: ${Ye + 16}px;
  overflow: hidden;
`, $d = v.div`
  position: absolute;
  height: ${nn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Dd = v.div`
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
`, Ed = v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, _d = v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Td = v.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, jr = v.div`
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
`, Zr = v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Vr = v.div`
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
`, Gr = v.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, fn = v.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, hn = v.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, vt = v.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Ur = v.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Ad = ({
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
  const a = ot(), l = (z) => {
    let f = 0;
    for (const m of d)
      m <= z && f++;
    return z * ye + f * Fe;
  }, [u, y] = he(null), [C, b] = he(0), M = de((z = 400, f = 300) => {
    const w = t.width, T = 48, x = document.getElementById("react-scheduler");
    if (!x)
      return {
        x: r.x + w + 16,
        y: r.y
      };
    const S = x.scrollLeft, j = x.scrollTop, K = x.clientWidth, L = x.clientHeight, D = r.x - S, P = r.y - j, Y = {
      left: Ye + 16,
      // Avoid left column
      right: K - 16,
      top: 16,
      bottom: L - 16
    }, E = Y.right - (D + w), A = D - Y.left, H = Y.bottom - (P + T), re = P - Y.top;
    let ee, R;
    return E >= z + 16 ? ee = D + w + 16 : A >= z + 16 ? ee = D - z - 16 : E >= A ? (ee = D + w + 16, ee + z > Y.right && (ee = Y.right - z)) : (ee = D - z - 16, ee < Y.left && (ee = Y.left)), H >= f + 16 ? R = P + T + 16 : re >= f + 16 ? R = P - f - 16 : H >= re ? (R = P + T + 16, R + f > Y.bottom && (R = Y.bottom - f)) : (R = P - f - 16, R < Y.top && (R = Y.top)), ee = Math.max(Y.left, Math.min(ee, Y.right - z)), R = Math.max(Y.top, Math.min(R, Y.bottom - f)), {
      x: ee + S,
      y: R + j
    };
  }, [r.x, r.y, t.width]);
  ge(() => {
    s === "dragging" && e && C === 0 ? b(r.x) : s === "idle" && b(0);
  }, [s, e, r.x, C]), ge(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const g = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const z = [];
    let f = 0;
    for (const m of i) {
      const w = Math.max(m.data.length, 1);
      if (m.capacity !== void 0 && e.totalPassengers > m.capacity)
        for (let T = 0; T < w; T++)
          z.push(f + T);
      f += w;
    }
    return z;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const O = s === "animating", U = Ao(e.bgColor ?? ""), W = () => {
    if (!n)
      return "";
    const z = I(n.startDate).format("MMM D, HH:mm"), f = I(n.endDate).format("HH:mm");
    return `${z} - ${f}`;
  };
  return /* @__PURE__ */ B(wd, { children: [
    g.map((z) => /* @__PURE__ */ h(
      _d,
      {
        style: {
          top: `${l(z)}px`,
          height: `${ye}px`
        }
      },
      z
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      Ed,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${l(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(
        $d,
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
        Dd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${l(n.resourceIndex) + (ye - 48) / 2}px`
          },
          children: W()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      Td,
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
      return /* @__PURE__ */ B(
        jr,
        {
          style: {
            left: `${z.x}px`,
            top: `${z.y}px`
          },
          children: [
            /* @__PURE__ */ B(Zr, { children: [
              /* @__PURE__ */ h(Vr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Gr, { children: n.conflicts.map((f, m) => {
              const w = I(n.startDate).format("YYYY-MM-DD"), T = I(n.endDate).format("YYYY-MM-DD"), x = I(f.event.startDate).format("YYYY-MM-DD"), S = I(f.event.endDate).format("YYYY-MM-DD"), j = I(f.conflictStart).format("YYYY-MM-DD"), K = I(f.conflictEnd).format("YYYY-MM-DD"), L = w !== T, D = x !== S, P = j !== K, Y = L ? I(n.startDate).format("MMM D, h:mm A") : I(n.startDate).format("h:mm A"), E = L ? I(n.endDate).format("MMM D, h:mm A") : I(n.endDate).format("h:mm A"), A = D ? I(f.event.startDate).format("MMM D, h:mm A") : I(f.event.startDate).format("h:mm A"), H = D ? I(f.event.endDate).format("MMM D, h:mm A") : I(f.event.endDate).format("h:mm A"), re = P ? I(f.conflictStart).format("MMM D, h:mm A") : I(f.conflictStart).format("h:mm A"), ee = P ? I(f.conflictEnd).format("MMM D, h:mm A") : I(f.conflictEnd).format("h:mm A"), R = P ? "" : I(f.conflictStart).format("MMM D"), N = n.startDate.getTime(), q = n.endDate.getTime(), te = f.event.startDate.getTime(), k = f.event.endDate.getTime(), G = N >= te && N < k, _ = q > te && q <= k, Q = N <= te && q >= k, Z = te <= N && k >= q;
              let F = !1, p = !1, X = !1, $ = !1, V = "";
              return Q || Z ? (F = !0, p = !0, X = !0, $ = !0, V = `⚠️ ${a.conflicts.changeBoth}`) : G && _ ? (F = !0, p = !0, X = !0, $ = !0, V = `⚠️ ${a.conflicts.changeBoth}`) : G ? (F = !0, $ = !0, V = `⚠️ ${a.conflicts.changeStart}`) : _ && (p = !0, X = !0, V = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ B(fn, { children: [
                /* @__PURE__ */ B(hn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ B(vt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  F ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Y }) : Y,
                  " ",
                  a.conflicts.to,
                  " ",
                  p ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: E }) : E
                ] }),
                /* @__PURE__ */ B(vt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  X ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: A }) : A,
                  " ",
                  a.conflicts.to,
                  " ",
                  $ ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: H }) : H
                ] }),
                /* @__PURE__ */ B(Ur, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  R && `${R}, `,
                  re,
                  " - ",
                  ee
                ] }),
                V && /* @__PURE__ */ h(vt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: V })
              ] }, m);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const z = M(400, 400);
      return /* @__PURE__ */ B(
        jr,
        {
          style: {
            left: `${z.x}px`,
            top: `${z.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ B(Zr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Vr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ B(Gr, { children: [
              (() => {
                const f = n.nearbyEvents.some((x) => x.position === "before"), m = n.nearbyEvents.some((x) => x.position === "after"), w = I(n.startDate).format("h:mm A"), T = I(n.endDate).format("h:mm A");
                return /* @__PURE__ */ B(fn, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ B(hn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ B(vt, { style: { fontWeight: 600 }, children: [
                    I(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    m ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: T }) : T
                  ] }),
                  /* @__PURE__ */ h(vt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, m) => {
                const w = I(f.event.startDate).format("YYYY-MM-DD"), T = I(f.event.endDate).format("YYYY-MM-DD"), x = w !== T, S = x ? I(f.event.startDate).format("MMM D, h:mm A") : I(f.event.startDate).format("h:mm A"), j = x ? I(f.event.endDate).format("MMM D, h:mm A") : I(f.event.endDate).format("h:mm A"), K = I(f.event.startDate).format("MMM D"), L = Math.floor(f.timeGap / (1e3 * 60 * 60)), D = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), P = L > 0 ? `${L}h ${D}m` : `${D}m`, Y = f.position === "after", E = f.position === "before";
                return /* @__PURE__ */ B(fn, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ B(hn, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ B(vt, { children: [
                    !x && `${K}: `,
                    Y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: S }) : S,
                    " ",
                    a.conflicts.to,
                    " ",
                    E ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: j }) : j
                  ] }),
                  /* @__PURE__ */ B(Ur, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    P,
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
      Sd,
      {
        $isAnimating: O,
        $animateToX: u == null ? void 0 : u.x,
        $animateToY: u == null ? void 0 : u.y,
        style: {
          left: O ? `${(u == null ? void 0 : u.x) ?? 0}px` : "0",
          top: O ? `${(u == null ? void 0 : u.y) ?? 0}px` : "0",
          transform: O ? void 0 : `translate3d(${c ? C : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: U
        },
        children: /* @__PURE__ */ h(Cd, { children: /* @__PURE__ */ B(Md, { children: [
          /* @__PURE__ */ h(Wr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Wr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(kd, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Pd = Ad, Id = je`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Od = v.div`
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
  animation: ${Id} 1.5s ease-in-out infinite;
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
`, Ld = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  Od,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Yd = Ld, Rd = je`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Nd = v.div`
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
  animation: ${Rd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, Fd = v.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, zd = v.span`
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
`, Bd = v.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Hd = v.span`
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
const Wd = v.div`
  display: flex;
  gap: 8px;
`, Xr = v.button`
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
`, jd = ({ selections: e, onConfirm: r, onClear: t }) => {
  var b;
  const o = ot().multiSelect, s = $e(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", u = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((b = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : b.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, C = /* @__PURE__ */ B(Nd, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ B(Fd, { children: [
      /* @__PURE__ */ B(zd, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ B(Bd, { children: [
        "⚠️ ",
        u
      ] }),
      /* @__PURE__ */ h(Hd, { children: c })
    ] }),
    /* @__PURE__ */ B(Wd, { children: [
      /* @__PURE__ */ B(Xr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ h(Xr, { variant: "primary", $hasConflicts: y, onClick: r, children: y ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return No(C, document.body);
}, Zd = jd, Vd = je`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Gd = v.div`
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
  animation: ${Vd} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && Et`
      border-style: dashed;
    `}
`, Ud = v.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, Xd = v.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Kd = v.button`
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
`, Jd = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = he(null), [a, l] = he({ x: 0, y: 0 }), u = ue(null), y = $e(() => {
    switch (t) {
      case 0:
        return We * 7;
      case 1:
        return _e;
      case 2:
        return Oe;
      default:
        return _e;
    }
  }, [t]), C = $e(() => I().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), b = $e(() => e.map((m, w) => {
    let T = 0, x = !1;
    for (const A of r) {
      if (A.id === m.resourceId) {
        x = !0;
        break;
      }
      T += Math.max(A.data.length, 1);
    }
    if (!x)
      return null;
    const S = I(m.startDate), j = I(m.endDate);
    let K, L;
    switch (t) {
      case 0:
        K = Math.floor(S.diff(C, "days") / 7), L = Math.max(1, Math.ceil(j.diff(S, "days") / 7) + 1);
        break;
      case 1:
        K = S.diff(C, "days"), L = Math.max(1, j.diff(S, "days") + 1);
        break;
      case 2:
        K = S.diff(C, "hours"), L = Math.max(1, j.diff(S, "hours") + 1);
        break;
      default:
        K = 0, L = 1;
    }
    const D = K * y;
    let P = 0;
    for (const A of i)
      A <= T && P++;
    const Y = T * ye + P * Fe, E = L * y;
    return {
      index: w,
      selection: m,
      x: D,
      y: Y,
      width: E,
      height: ye
    };
  }), [e, r, t, C, y]), M = (m, w) => {
    const T = I(m).format("MMM D"), x = I(w).format("MMM D");
    return T === x ? T : `${T} - ${x}`;
  }, g = (m) => !m.hasConflict || !m.conflicts ? "" : `⚠️ Conflicts with:
${m.conflicts.map((T) => {
    const x = (T.overlapDuration / 36e5).toFixed(1);
    return `• ${T.event.title} (${x}h overlap)`;
  }).join(`
`)}`, O = de(
    (m) => {
      let w = 0;
      for (const T of r) {
        const x = Math.max(T.data.length, 1);
        if (m >= w * ye && m < (w + x) * ye)
          return {
            resourceId: T.id,
            resourceLabel: T.label
          };
        w += x;
      }
      return null;
    },
    [r]
  ), U = de(
    (m) => {
      const w = Math.floor(m / y);
      switch (t) {
        case 0:
          return C.add(w * 7, "days").toDate();
        case 1:
          return C.add(w, "days").toDate();
        case 2:
          return C.add(w, "hours").toDate();
        default:
          return C.toDate();
      }
    },
    [t, C, y]
  ), W = de(
    (m, w) => {
      !s || (m.preventDefault(), m.stopPropagation(), !b[w]) || (u.current = { x: m.clientX, y: m.clientY }, d(w), l({ x: 0, y: 0 }));
    },
    [s, b]
  ), z = de(
    (m) => {
      if (c === null || !u.current)
        return;
      const w = m.clientX - u.current.x, T = m.clientY - u.current.y, x = Math.round(w / y) * y, S = Math.round(T / ye) * ye;
      l({ x, y: S });
    },
    [c, y]
  ), f = de(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const m = b[c];
    if (!m) {
      d(null), l({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const w = m.x + a.x, T = m.y + a.y, x = O(T + ye / 2);
    if (!x) {
      d(null), l({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const S = U(w), j = e[c], K = j.endDate.getTime() - j.startDate.getTime(), L = new Date(S.getTime() + K);
    s(c, {
      startDate: S,
      endDate: L,
      resourceId: x.resourceId,
      resourceLabel: x.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), u.current = null;
  }, [c, a, b, e, s, O, U]);
  return ge(() => {
    if (c !== null)
      return document.addEventListener("mousemove", z), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", z), document.removeEventListener("mouseup", f);
      };
  }, [c, z, f]), /* @__PURE__ */ h(Te, { children: b.map((m) => {
    if (!m)
      return null;
    const w = m.selection.hasConflict || !1, T = c === m.index, x = T ? m.x + a.x : m.x, S = T ? m.y + a.y : m.y;
    return /* @__PURE__ */ B(
      Gd,
      {
        $hasConflict: w,
        $isDragging: T,
        style: {
          left: x,
          top: S,
          width: m.width,
          height: m.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (j) => W(j, m.index),
        children: [
          w && /* @__PURE__ */ h(Xd, { title: g(m.selection), children: "⚠️" }),
          /* @__PURE__ */ h(Ud, { $hasConflict: w, children: M(m.selection.startDate, m.selection.endDate) }),
          /* @__PURE__ */ h(
            Kd,
            {
              onClick: (j) => {
                j.stopPropagation(), o(m.index);
              },
              onMouseDown: (j) => j.stopPropagation(),
              title: w ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      m.index
    );
  }) });
}, qd = Jd, Io = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? We * 7 : _e, s = I().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, Qd = v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ theme: e }) => e.colors.today}12;
`, e1 = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ue(), n = $e(
    () => Io(I(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(Qd, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, t1 = e1, n1 = "#2f6fed", r1 = v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${n1}1c;
`, o1 = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = Ue(), o = $e(() => !n || n.isSame(I(), "day") ? null : Io(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(r1, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0 }) : null;
}, s1 = o1;
export {
  d1 as Scheduler
};
