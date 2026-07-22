var To = Object.defineProperty;
var Ao = (e, r, t) => r in e ? To(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Zn = (e, r, t) => (Ao(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as B, Fragment as Te } from "react/jsx-runtime";
import * as se from "react";
import at, { useRef as he, useContext as tt, useMemo as $e, useLayoutEffect as Jt, useDebugValue as Vn, createElement as Po, createContext as Gr, useState as pe, useCallback as le, useEffect as ve, forwardRef as In, useImperativeHandle as Xr } from "react";
import { createPortal as Oo } from "react-dom";
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pt = {}, Io = {
  get exports() {
    return Pt;
  },
  set exports(e) {
    Pt = e;
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
function Yo() {
  if (Gn)
    return we;
  Gn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function D(m) {
    if (typeof m == "object" && m !== null) {
      var Y = m.$$typeof;
      switch (Y) {
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
                  return Y;
              }
          }
        case r:
          return Y;
      }
    }
  }
  return we.ContextConsumer = i, we.ContextProvider = s, we.Element = e, we.ForwardRef = l, we.Fragment = t, we.Lazy = y, we.Memo = u, we.Portal = r, we.Profiler = o, we.StrictMode = n, we.Suspense = a, we.SuspenseList = d, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(m) {
    return D(m) === i;
  }, we.isContextProvider = function(m) {
    return D(m) === s;
  }, we.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, we.isForwardRef = function(m) {
    return D(m) === l;
  }, we.isFragment = function(m) {
    return D(m) === t;
  }, we.isLazy = function(m) {
    return D(m) === y;
  }, we.isMemo = function(m) {
    return D(m) === u;
  }, we.isPortal = function(m) {
    return D(m) === r;
  }, we.isProfiler = function(m) {
    return D(m) === o;
  }, we.isStrictMode = function(m) {
    return D(m) === n;
  }, we.isSuspense = function(m) {
    return D(m) === a;
  }, we.isSuspenseList = function(m) {
    return D(m) === d;
  }, we.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === n || m === a || m === d || m === S || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === u || m.$$typeof === s || m.$$typeof === i || m.$$typeof === l || m.$$typeof === w || m.getModuleId !== void 0);
  }, we.typeOf = D, we;
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
function Lo() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), w = !1, D = !1, m = !1, Y = !1, U = !1, F;
    F = Symbol.for("react.module.reference");
    function I(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === t || E === o || U || E === n || E === a || E === d || Y || E === S || w || D || m || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === u || E.$$typeof === s || E.$$typeof === i || E.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === F || E.getModuleId !== void 0));
    }
    function f(E) {
      if (typeof E == "object" && E !== null) {
        var Z = E.$$typeof;
        switch (Z) {
          case e:
            var ee = E.type;
            switch (ee) {
              case t:
              case o:
              case n:
              case a:
              case d:
                return ee;
              default:
                var K = ee && ee.$$typeof;
                switch (K) {
                  case c:
                  case i:
                  case l:
                  case y:
                  case u:
                  case s:
                    return K;
                  default:
                    return Z;
                }
            }
          case r:
            return Z;
        }
      }
    }
    var x = i, g = s, $ = e, b = l, k = t, V = y, q = u, T = r, C = o, A = n, L = a, P = d, R = !1, G = !1;
    function ne(E) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(E) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(E) {
      return f(E) === i;
    }
    function H(E) {
      return f(E) === s;
    }
    function J(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function te(E) {
      return f(E) === l;
    }
    function M(E) {
      return f(E) === t;
    }
    function j(E) {
      return f(E) === y;
    }
    function _(E) {
      return f(E) === u;
    }
    function Q(E) {
      return f(E) === r;
    }
    function W(E) {
      return f(E) === o;
    }
    function N(E) {
      return f(E) === n;
    }
    function p(E) {
      return f(E) === a;
    }
    function X(E) {
      return f(E) === d;
    }
    Se.ContextConsumer = x, Se.ContextProvider = g, Se.Element = $, Se.ForwardRef = b, Se.Fragment = k, Se.Lazy = V, Se.Memo = q, Se.Portal = T, Se.Profiler = C, Se.StrictMode = A, Se.Suspense = L, Se.SuspenseList = P, Se.isAsyncMode = ne, Se.isConcurrentMode = ie, Se.isContextConsumer = z, Se.isContextProvider = H, Se.isElement = J, Se.isForwardRef = te, Se.isFragment = M, Se.isLazy = j, Se.isMemo = _, Se.isPortal = Q, Se.isProfiler = W, Se.isStrictMode = N, Se.isSuspense = p, Se.isSuspenseList = X, Se.isValidElementType = I, Se.typeOf = f;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Yo() : e.exports = Lo();
})(Io);
function Ro(e) {
  function r(z, H, J, te, M) {
    for (var j = 0, _ = 0, Q = 0, W = 0, N, p, X = 0, E = 0, Z, ee = Z = N = 0, K = 0, ce = 0, ye = 0, ue = 0, xe = J.length, De = xe - 1, be, ae = "", me = "", Ae = "", Le = "", fe; K < xe; ) {
      if (p = J.charCodeAt(K), K === De && _ + W + Q + j !== 0 && (_ !== 0 && (p = _ === 47 ? 10 : 47), W = Q = j = 0, xe++, De++), _ + W + Q + j === 0) {
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
            for (ae = ae.trim(), N = ae.charCodeAt(0), Z = 1, ue = ++K; K < xe; ) {
              switch (p = J.charCodeAt(K)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (p = J.charCodeAt(K + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ee = K + 1; ee < De; ++ee)
                          switch (J.charCodeAt(ee)) {
                            case 47:
                              if (p === 42 && J.charCodeAt(ee - 1) === 42 && K + 2 !== ee) {
                                K = ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (p === 47) {
                                K = ee + 1;
                                break e;
                              }
                          }
                        K = ee;
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
              if (Z === 0)
                break;
              K++;
            }
            switch (Z = J.substring(ue, K), N === 0 && (N = (ae = ae.replace(u, "").trim()).charCodeAt(0)), N) {
              case 64:
                switch (0 < ce && (ae = ae.replace(y, "")), p = ae.charCodeAt(1), p) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = H;
                    break;
                  default:
                    ce = L;
                }
                if (Z = r(H, ce, Z, p, M + 1), ue = Z.length, 0 < R && (ce = t(L, ae, ye), fe = c(3, Z, ce, H, T, q, ue, p, M, te), ae = ce.join(""), fe !== void 0 && (ue = (Z = fe.trim()).length) === 0 && (p = 0, Z = "")), 0 < ue)
                  switch (p) {
                    case 115:
                      ae = ae.replace(x, i);
                    case 100:
                    case 109:
                    case 45:
                      Z = ae + "{" + Z + "}";
                      break;
                    case 107:
                      ae = ae.replace(U, "$1 $2"), Z = ae + "{" + Z + "}", Z = A === 1 || A === 2 && s("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                      break;
                    default:
                      Z = ae + Z, te === 112 && (Z = (me += Z, ""));
                  }
                else
                  Z = "";
                break;
              default:
                Z = r(H, t(H, ae, ye), Z, te, M + 1);
            }
            Ae += Z, Z = ye = ce = ee = N = 0, ae = "", p = J.charCodeAt(++K);
            break;
          case 125:
          case 59:
            if (ae = (0 < ce ? ae.replace(y, "") : ae).trim(), 1 < (ue = ae.length))
              switch (ee === 0 && (N = ae.charCodeAt(0), N === 45 || 96 < N && 123 > N) && (ue = (ae = ae.replace(" ", ":")).length), 0 < R && (fe = c(1, ae, H, z, T, q, me.length, te, M, te)) !== void 0 && (ue = (ae = fe.trim()).length) === 0 && (ae = "\0\0"), N = ae.charCodeAt(0), p = ae.charCodeAt(1), N) {
                case 0:
                  break;
                case 64:
                  if (p === 105 || p === 99) {
                    Le += ae + J.charAt(K);
                    break;
                  }
                default:
                  ae.charCodeAt(ue - 1) !== 58 && (me += o(ae, N, p, ae.charCodeAt(2)));
              }
            ye = ce = ee = N = 0, ae = "", p = J.charCodeAt(++K);
        }
      }
      switch (p) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + N === 0 && te !== 107 && 0 < ae.length && (ce = 1, ae += "\0"), 0 < R * ne && c(0, ae, H, z, T, q, me.length, te, M, te), q = 1, T++;
          break;
        case 59:
        case 125:
          if (_ + W + Q + j === 0) {
            q++;
            break;
          }
        default:
          switch (q++, be = J.charAt(K), p) {
            case 9:
            case 32:
              if (W + j + _ === 0)
                switch (X) {
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
              W + _ + j === 0 && (ce = ye = 1, be = "\f" + be);
              break;
            case 108:
              if (W + _ + j + C === 0 && 0 < ee)
                switch (K - ee) {
                  case 2:
                    X === 112 && J.charCodeAt(K - 3) === 58 && (C = X);
                  case 8:
                    E === 111 && (C = E);
                }
              break;
            case 58:
              W + _ + j === 0 && (ee = K);
              break;
            case 44:
              _ + Q + W + j === 0 && (ce = 1, be += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (W = W === p ? 0 : W === 0 ? p : W);
              break;
            case 91:
              W + _ + Q === 0 && j++;
              break;
            case 93:
              W + _ + Q === 0 && j--;
              break;
            case 41:
              W + _ + j === 0 && Q--;
              break;
            case 40:
              if (W + _ + j === 0) {
                if (N === 0)
                  switch (2 * X + 3 * E) {
                    case 533:
                      break;
                    default:
                      N = 1;
                  }
                Q++;
              }
              break;
            case 64:
              _ + Q + W + j + ee + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < W + j + Q))
                switch (_) {
                  case 0:
                    switch (2 * p + 3 * J.charCodeAt(K + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        ue = K, _ = 42;
                    }
                    break;
                  case 42:
                    p === 47 && X === 42 && ue + 2 !== K && (J.charCodeAt(ue + 2) === 33 && (me += J.substring(ue, K + 1)), be = "", _ = 0);
                }
          }
          _ === 0 && (ae += be);
      }
      E = X, X = p, K++;
    }
    if (ue = me.length, 0 < ue) {
      if (ce = H, 0 < R && (fe = c(2, me, ce, z, T, q, ue, te, M, te), fe !== void 0 && (me = fe).length === 0))
        return Le + me + Ae;
      if (me = ce.join(",") + "{" + me + "}", A * C !== 0) {
        switch (A !== 2 || s(me, 2) || (C = 0), C) {
          case 111:
            me = me.replace(I, ":-moz-$1") + me;
            break;
          case 112:
            me = me.replace(F, "::-webkit-input-$1") + me.replace(F, "::-moz-$1") + me.replace(F, ":-ms-input-$1") + me;
        }
        C = 0;
      }
    }
    return Le + me + Ae;
  }
  function t(z, H, J) {
    var te = H.trim().split(m);
    H = te;
    var M = te.length, j = z.length;
    switch (j) {
      case 0:
      case 1:
        var _ = 0;
        for (z = j === 0 ? "" : z[0] + " "; _ < M; ++_)
          H[_] = n(z, H[_], J).trim();
        break;
      default:
        var Q = _ = 0;
        for (H = []; _ < M; ++_)
          for (var W = 0; W < j; ++W)
            H[Q++] = n(z[W] + " ", te[_], J).trim();
    }
    return H;
  }
  function n(z, H, J) {
    var te = H.charCodeAt(0);
    switch (33 > te && (te = (H = H.trim()).charCodeAt(0)), te) {
      case 38:
        return H.replace(Y, "$1" + z.trim());
      case 58:
        return z.trim() + H.replace(Y, "$1" + z.trim());
      default:
        if (0 < 1 * J && 0 < H.indexOf("\f"))
          return H.replace(Y, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + H;
  }
  function o(z, H, J, te) {
    var M = z + ";", j = 2 * H + 3 * J + 4 * te;
    if (j === 944) {
      z = M.indexOf(":", 9) + 1;
      var _ = M.substring(z, M.length - 1).trim();
      return _ = M.substring(0, z).trim() + _ + ";", A === 1 || A === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (A === 0 || A === 2 && !s(M, 1))
      return M;
    switch (j) {
      case 1015:
        return M.charCodeAt(10) === 97 ? "-webkit-" + M + M : M;
      case 951:
        return M.charCodeAt(3) === 116 ? "-webkit-" + M + M : M;
      case 963:
        return M.charCodeAt(5) === 110 ? "-webkit-" + M + M : M;
      case 1009:
        if (M.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + M + M;
      case 978:
        return "-webkit-" + M + "-moz-" + M + M;
      case 1019:
      case 983:
        return "-webkit-" + M + "-moz-" + M + "-ms-" + M + M;
      case 883:
        if (M.charCodeAt(8) === 45)
          return "-webkit-" + M + M;
        if (0 < M.indexOf("image-set(", 11))
          return M.replace(V, "$1-webkit-$2") + M;
        break;
      case 932:
        if (M.charCodeAt(4) === 45)
          switch (M.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + M.replace("-grow", "") + "-webkit-" + M + "-ms-" + M.replace("grow", "positive") + M;
            case 115:
              return "-webkit-" + M + "-ms-" + M.replace("shrink", "negative") + M;
            case 98:
              return "-webkit-" + M + "-ms-" + M.replace("basis", "preferred-size") + M;
          }
        return "-webkit-" + M + "-ms-" + M + M;
      case 964:
        return "-webkit-" + M + "-ms-flex-" + M + M;
      case 1023:
        if (M.charCodeAt(8) !== 99)
          break;
        return _ = M.substring(M.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + M + "-ms-flex-pack" + _ + M;
      case 1005:
        return w.test(M) ? M.replace(S, ":-webkit-") + M.replace(S, ":-moz-") + M : M;
      case 1e3:
        switch (_ = M.substring(13).trim(), H = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(H)) {
          case 226:
            _ = M.replace(f, "tb");
            break;
          case 232:
            _ = M.replace(f, "tb-rl");
            break;
          case 220:
            _ = M.replace(f, "lr");
            break;
          default:
            return M;
        }
        return "-webkit-" + M + "-ms-" + _ + M;
      case 1017:
        if (M.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (H = (M = z).length - 10, _ = (M.charCodeAt(H) === 33 ? M.substring(0, H) : M).substring(z.indexOf(":", 7) + 1).trim(), j = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8))
              break;
          case 115:
            M = M.replace(_, "-webkit-" + _) + ";" + M;
            break;
          case 207:
          case 102:
            M = M.replace(_, "-webkit-" + (102 < j ? "inline-" : "") + "box") + ";" + M.replace(_, "-webkit-" + _) + ";" + M.replace(_, "-ms-" + _ + "box") + ";" + M;
        }
        return M + ";";
      case 938:
        if (M.charCodeAt(5) === 45)
          switch (M.charCodeAt(6)) {
            case 105:
              return _ = M.replace("-items", ""), "-webkit-" + M + "-webkit-box-" + _ + "-ms-flex-" + _ + M;
            case 115:
              return "-webkit-" + M + "-ms-flex-item-" + M.replace($, "") + M;
            default:
              return "-webkit-" + M + "-ms-flex-line-pack" + M.replace("align-content", "").replace($, "") + M;
          }
        break;
      case 973:
      case 989:
        if (M.charCodeAt(3) !== 45 || M.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (k.test(z) === !0)
          return (_ = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(z.replace("stretch", "fill-available"), H, J, te).replace(":fill-available", ":stretch") : M.replace(_, "-webkit-" + _) + M.replace(_, "-moz-" + _.replace("fill-", "")) + M;
        break;
      case 962:
        if (M = "-webkit-" + M + (M.charCodeAt(5) === 102 ? "-ms-" + M : "") + M, J + te === 211 && M.charCodeAt(13) === 105 && 0 < M.indexOf("transform", 10))
          return M.substring(0, M.indexOf(";", 27) + 1).replace(D, "$1-webkit-$2") + M;
    }
    return M;
  }
  function s(z, H) {
    var J = z.indexOf(H === 1 ? ":" : "{"), te = z.substring(0, H !== 3 ? J : 10);
    return J = z.substring(J + 1, z.length - 1), G(H !== 2 ? te : te.replace(b, "$1"), J, H);
  }
  function i(z, H) {
    var J = o(H, H.charCodeAt(0), H.charCodeAt(1), H.charCodeAt(2));
    return J !== H + ";" ? J.replace(g, " or ($1)").substring(4) : "(" + H + ")";
  }
  function c(z, H, J, te, M, j, _, Q, W, N) {
    for (var p = 0, X = H, E; p < R; ++p)
      switch (E = P[p].call(d, z, X, J, te, M, j, _, Q, W, N)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          X = E;
      }
    if (X !== H)
      return X;
  }
  function l(z) {
    switch (z) {
      case void 0:
      case null:
        R = P.length = 0;
        break;
      default:
        if (typeof z == "function")
          P[R++] = z;
        else if (typeof z == "object")
          for (var H = 0, J = z.length; H < J; ++H)
            l(z[H]);
        else
          ne = !!z | 0;
    }
    return l;
  }
  function a(z) {
    return z = z.prefix, z !== void 0 && (G = null, z ? typeof z != "function" ? A = 1 : (A = 2, G = z) : A = 0), a;
  }
  function d(z, H) {
    var J = z;
    if (33 > J.charCodeAt(0) && (J = J.trim()), ie = J, J = [ie], 0 < R) {
      var te = c(-1, H, J, J, T, q, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (H = te);
    }
    var M = r(L, J, H, 0, 0);
    return 0 < R && (te = c(-2, M, J, J, T, q, M.length, 0, 0, 0), te !== void 0 && (M = te)), ie = "", C = 0, q = T = 1, M;
  }
  var u = /^\0+/g, y = /[\0\r\f]/g, S = /: */g, w = /zoo|gra/, D = /([,: ])(transform)/g, m = /,\r+?/g, Y = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, F = /::(place)/g, I = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, x = /\(\s*(.*)\s*\)/g, g = /([\s\S]*?);/g, $ = /-self|flex-/g, b = /[^]*?(:[rp][el]a[\w-]+)[^]*/, k = /stretch|:\s*\w+\-(?:conte|avail)/, V = /([^-])(image-set\()/, q = 1, T = 1, C = 0, A = 1, L = [], P = [], R = 0, G = null, ne = 0, ie = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var No = {
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
function zo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Fo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Un = /* @__PURE__ */ zo(
  function(e) {
    return Fo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), dn = {}, Bo = {
  get exports() {
    return dn;
  },
  set exports(e) {
    dn = e;
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
function Ho() {
  if (Kn)
    return Ce;
  Kn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function F(f) {
    if (typeof f == "object" && f !== null) {
      var x = f.$$typeof;
      switch (x) {
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
                case w:
                case S:
                case i:
                  return f;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  function I(f) {
    return F(f) === a;
  }
  return Ce.AsyncMode = l, Ce.ConcurrentMode = a, Ce.ContextConsumer = c, Ce.ContextProvider = i, Ce.Element = r, Ce.ForwardRef = d, Ce.Fragment = n, Ce.Lazy = w, Ce.Memo = S, Ce.Portal = t, Ce.Profiler = s, Ce.StrictMode = o, Ce.Suspense = u, Ce.isAsyncMode = function(f) {
    return I(f) || F(f) === l;
  }, Ce.isConcurrentMode = I, Ce.isContextConsumer = function(f) {
    return F(f) === c;
  }, Ce.isContextProvider = function(f) {
    return F(f) === i;
  }, Ce.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, Ce.isForwardRef = function(f) {
    return F(f) === d;
  }, Ce.isFragment = function(f) {
    return F(f) === n;
  }, Ce.isLazy = function(f) {
    return F(f) === w;
  }, Ce.isMemo = function(f) {
    return F(f) === S;
  }, Ce.isPortal = function(f) {
    return F(f) === t;
  }, Ce.isProfiler = function(f) {
    return F(f) === s;
  }, Ce.isStrictMode = function(f) {
    return F(f) === o;
  }, Ce.isSuspense = function(f) {
    return F(f) === u;
  }, Ce.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === a || f === s || f === o || f === u || f === y || typeof f == "object" && f !== null && (f.$$typeof === w || f.$$typeof === S || f.$$typeof === i || f.$$typeof === c || f.$$typeof === d || f.$$typeof === m || f.$$typeof === Y || f.$$typeof === U || f.$$typeof === D);
  }, Ce.typeOf = F, Ce;
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
function Wo() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
    function F(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === a || p === s || p === o || p === u || p === y || typeof p == "object" && p !== null && (p.$$typeof === w || p.$$typeof === S || p.$$typeof === i || p.$$typeof === c || p.$$typeof === d || p.$$typeof === m || p.$$typeof === Y || p.$$typeof === U || p.$$typeof === D);
    }
    function I(p) {
      if (typeof p == "object" && p !== null) {
        var X = p.$$typeof;
        switch (X) {
          case r:
            var E = p.type;
            switch (E) {
              case l:
              case a:
              case n:
              case s:
              case o:
              case u:
                return E;
              default:
                var Z = E && E.$$typeof;
                switch (Z) {
                  case c:
                  case d:
                  case w:
                  case S:
                  case i:
                    return Z;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var f = l, x = a, g = c, $ = i, b = r, k = d, V = n, q = w, T = S, C = t, A = s, L = o, P = u, R = !1;
    function G(p) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(p) || I(p) === l;
    }
    function ne(p) {
      return I(p) === a;
    }
    function ie(p) {
      return I(p) === c;
    }
    function z(p) {
      return I(p) === i;
    }
    function H(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function J(p) {
      return I(p) === d;
    }
    function te(p) {
      return I(p) === n;
    }
    function M(p) {
      return I(p) === w;
    }
    function j(p) {
      return I(p) === S;
    }
    function _(p) {
      return I(p) === t;
    }
    function Q(p) {
      return I(p) === s;
    }
    function W(p) {
      return I(p) === o;
    }
    function N(p) {
      return I(p) === u;
    }
    Me.AsyncMode = f, Me.ConcurrentMode = x, Me.ContextConsumer = g, Me.ContextProvider = $, Me.Element = b, Me.ForwardRef = k, Me.Fragment = V, Me.Lazy = q, Me.Memo = T, Me.Portal = C, Me.Profiler = A, Me.StrictMode = L, Me.Suspense = P, Me.isAsyncMode = G, Me.isConcurrentMode = ne, Me.isContextConsumer = ie, Me.isContextProvider = z, Me.isElement = H, Me.isForwardRef = J, Me.isFragment = te, Me.isLazy = M, Me.isMemo = j, Me.isPortal = _, Me.isProfiler = Q, Me.isStrictMode = W, Me.isSuspense = N, Me.isValidElementType = F, Me.typeOf = I;
  }()), Me;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ho() : e.exports = Wo();
})(Bo);
var Yn = dn, jo = {
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
}, Zo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Vo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ur = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ln = {};
Ln[Yn.ForwardRef] = Vo;
Ln[Yn.Memo] = Ur;
function qn(e) {
  return Yn.isMemo(e) ? Ur : Ln[e.$$typeof] || jo;
}
var Go = Object.defineProperty, Xo = Object.getOwnPropertyNames, Qn = Object.getOwnPropertySymbols, Uo = Object.getOwnPropertyDescriptor, Ko = Object.getPrototypeOf, er = Object.prototype;
function Kr(e, r, t) {
  if (typeof r != "string") {
    if (er) {
      var n = Ko(r);
      n && n !== er && Kr(e, n, t);
    }
    var o = Xo(r);
    Qn && (o = o.concat(Qn(r)));
    for (var s = qn(e), i = qn(r), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!Zo[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = Uo(r, l);
        try {
          Go(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Jo = Kr;
function We() {
  return (We = Object.assign || function(e) {
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
}, un = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Pt.typeOf(e);
}, Zt = Object.freeze([]), Qe = Object.freeze({});
function wt(e) {
  return typeof e == "function";
}
function fn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Rn(e) {
  return e && typeof e.styledComponentId == "string";
}
var St = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Nn = typeof window < "u" && "HTMLElement" in window, qo = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Qo = {}, es = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ts() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Xe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(ts.apply(void 0, [es[e]].concat(t)).trim());
}
var ns = function() {
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
        (i <<= 1) < 0 && Xe(16, "" + t);
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
}(), Wt = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), At = 1, Nt = function(e) {
  if (Wt.has(e))
    return Wt.get(e);
  for (; Vt.has(At); )
    At++;
  var r = At++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Xe(16, "" + r), Wt.set(e, r), Vt.set(r, e), r;
}, rs = function(e) {
  return Vt.get(e);
}, os = function(e, r) {
  r >= At && (At = r + 1), Wt.set(e, r), Vt.set(r, e);
}, ss = "style[" + St + '][data-styled-version="5.3.8"]', is = new RegExp("^" + St + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), as = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, cs = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(is);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (os(a, l), as(e, a, c[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, ls = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Jr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(St))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(St, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = ls();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, ds = function() {
  function e(t) {
    var n = this.element = Jr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Xe(17);
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
}(), us = function() {
  function e(t) {
    var n = this.element = Jr(t);
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
}(), fs = function() {
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
}(), nr = Nn, hs = { isServer: !Nn, useCSSOMInjection: !qo }, Gt = function() {
  function e(t, n, o) {
    t === void 0 && (t = Qe), n === void 0 && (n = {}), this.options = We({}, hs, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Nn && nr && (nr = !1, function(s) {
      for (var i = document.querySelectorAll(ss), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(St) !== "active" && (cs(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Nt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(We({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new fs(i) : s ? new ds(i) : new us(i), new ns(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Nt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Nt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Nt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = rs(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var d = St + ".g" + i + '[id="' + c + '"]', u = "";
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
}(), ps = /(a)(d)/gi, rr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function hn(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = rr(r % 52) + t;
  return (rr(r % 52) + t).replace(ps, "$1-$2");
}
var st = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, qr = function(e) {
  return st(5381, e);
};
function Qr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (wt(t) && !Rn(t))
      return !1;
  }
  return !0;
}
var ms = qr("5.3.8"), gs = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Qr(r), this.componentId = t, this.baseHash = st(ms, t), this.baseStyle = n, Gt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ct(this.rules, r, t, n).join(""), c = hn(st(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = st(this.baseHash, n.hash), u = "", y = 0; y < a; y++) {
        var S = this.rules[y];
        if (typeof S == "string")
          u += S, process.env.NODE_ENV !== "production" && (d = st(d, S + y));
        else if (S) {
          var w = ct(S, r, t, n), D = Array.isArray(w) ? w.join("") : w;
          d = st(d, D + y), u += D;
        }
      }
      if (u) {
        var m = hn(d >>> 0);
        if (!t.hasNameForId(o, m)) {
          var Y = n(u, "." + m, void 0, o);
          t.insertRules(o, m, Y);
        }
        s.push(m);
      }
    }
    return s.join(" ");
  }, e;
}(), ys = /^\s*\/\/.*$/gm, vs = [":", "[", ".", "#"];
function xs(e) {
  var r, t, n, o, s = e === void 0 ? Qe : e, i = s.options, c = i === void 0 ? Qe : i, l = s.plugins, a = l === void 0 ? Zt : l, d = new Ro(c), u = [], y = function(D) {
    function m(Y) {
      if (Y)
        try {
          D(Y + "}");
        } catch {
        }
    }
    return function(Y, U, F, I, f, x, g, $, b, k) {
      switch (Y) {
        case 1:
          if (b === 0 && U.charCodeAt(0) === 64)
            return D(U + ";"), "";
          break;
        case 2:
          if ($ === 0)
            return U + "/*|*/";
          break;
        case 3:
          switch ($) {
            case 102:
            case 112:
              return D(F[0] + U), "";
            default:
              return U + (k === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(m);
      }
    };
  }(function(D) {
    u.push(D);
  }), S = function(D, m, Y) {
    return m === 0 && vs.indexOf(Y[t.length]) !== -1 || Y.match(o) ? D : "." + r;
  };
  function w(D, m, Y, U) {
    U === void 0 && (U = "&");
    var F = D.replace(ys, ""), I = m && Y ? Y + " " + m + " { " + F + " }" : F;
    return r = U, t = m, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(Y || !m ? "" : m, I);
  }
  return d.use([].concat(a, [function(D, m, Y) {
    D === 2 && Y.length && Y[0].lastIndexOf(t) > 0 && (Y[0] = Y[0].replace(n, S));
  }, y, function(D) {
    if (D === -2) {
      var m = u;
      return u = [], m;
    }
  }])), w.hash = a.length ? a.reduce(function(D, m) {
    return m.name || Xe(15), st(D, m.name);
  }, 5381).toString() : "", w;
}
var eo = at.createContext();
eo.Consumer;
var to = at.createContext(), bs = (to.Consumer, new Gt()), pn = xs();
function no() {
  return tt(eo) || bs;
}
function ro() {
  return tt(to) || pn;
}
var oo = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = pn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Xe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = pn), this.name + r.hash;
  }, e;
}(), ws = /([A-Z])/, Ss = /([A-Z])/g, Cs = /^ms-/, Ms = function(e) {
  return "-" + e.toLowerCase();
};
function or(e) {
  return ws.test(e) ? e.replace(Ss, Ms).replace(Cs, "-ms-") : e;
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
  if (wt(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && Pt.isElement(l) && console.warn(fn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ct(l, r, t, n);
  }
  var a;
  return e instanceof oo ? t ? (e.inject(t, n), e.getName(n)) : e : un(e) ? function d(u, y) {
    var S, w, D = [];
    for (var m in u)
      u.hasOwnProperty(m) && !sr(u[m]) && (Array.isArray(u[m]) && u[m].isCss || wt(u[m]) ? D.push(or(m) + ":", u[m], ";") : un(u[m]) ? D.push.apply(D, d(u[m], m)) : D.push(or(m) + ": " + (S = m, (w = u[m]) == null || typeof w == "boolean" || w === "" ? "" : typeof w != "number" || w === 0 || S in No ? String(w).trim() : w + "px") + ";"));
    return y ? [y + " {"].concat(D, ["}"]) : D;
  }(e) : e.toString();
}
var ir = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function dt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return wt(e) || un(e) ? ir(ct(tr(Zt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ir(ct(tr(e, t)));
}
var ar = /invalid hook call/i, zt = /* @__PURE__ */ new Set(), so = function(e, r) {
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
      }, he(), o && !zt.has(t) && (console.warn(t), zt.add(t));
    } catch (s) {
      ar.test(s.message) && zt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, io = function(e, r, t) {
  return t === void 0 && (t = Qe), e.theme !== t.theme && e.theme || r || t.theme;
}, ks = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $s = /(^-|-$)/g;
function tn(e) {
  return e.replace(ks, "-").replace($s, "");
}
var zn = function(e) {
  return hn(qr(e) >>> 0);
};
function Ft(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var mn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ds = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Es(e, r, t) {
  var n = e[t];
  mn(r) && mn(n) ? ao(n, r) : e[t] = r;
}
function ao(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (mn(i))
      for (var c in i)
        Ds(c) && Es(e, i[c], c);
  }
  return e;
}
var Ct = at.createContext();
Ct.Consumer;
function _s(e) {
  var r = tt(Ct), t = $e(function() {
    return function(n, o) {
      if (!n)
        return Xe(14);
      if (wt(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Xe(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Xe(8) : o ? We({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? at.createElement(Ct.Provider, { value: t }, e.children) : null;
}
var nn = {};
function co(e, r, t) {
  var n = Rn(e), o = !Ft(e), s = r.attrs, i = s === void 0 ? Zt : s, c = r.componentId, l = c === void 0 ? function(U, F) {
    var I = typeof U != "string" ? "sc" : tn(U);
    nn[I] = (nn[I] || 0) + 1;
    var f = I + "-" + zn("5.3.8" + I + nn[I]);
    return F ? F + "-" + f : f;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(U) {
    return Ft(U) ? "styled." + U : "Styled(" + fn(U) + ")";
  }(e) : a, u = r.displayName && r.componentId ? tn(r.displayName) + "-" + r.componentId : r.componentId || l, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, S = r.shouldForwardProp;
  n && e.shouldForwardProp && (S = r.shouldForwardProp ? function(U, F, I) {
    return e.shouldForwardProp(U, F, I) && r.shouldForwardProp(U, F, I);
  } : e.shouldForwardProp);
  var w, D = new gs(t, u, n ? e.componentStyle : void 0), m = D.isStatic && i.length === 0, Y = function(U, F) {
    return function(I, f, x, g) {
      var $ = I.attrs, b = I.componentStyle, k = I.defaultProps, V = I.foldedComponentIds, q = I.shouldForwardProp, T = I.styledComponentId, C = I.target;
      process.env.NODE_ENV !== "production" && Vn(T);
      var A = function(te, M, j) {
        te === void 0 && (te = Qe);
        var _ = We({}, M, { theme: te }), Q = {};
        return j.forEach(function(W) {
          var N, p, X, E = W;
          for (N in wt(E) && (E = E(_)), E)
            _[N] = Q[N] = N === "className" ? (p = Q[N], X = E[N], p && X ? p + " " + X : p || X) : E[N];
        }), [_, Q];
      }(io(f, tt(Ct), k) || Qe, f, $), L = A[0], P = A[1], R = function(te, M, j, _) {
        var Q = no(), W = ro(), N = M ? te.generateAndInjectStyles(Qe, Q, W) : te.generateAndInjectStyles(j, Q, W);
        return process.env.NODE_ENV !== "production" && Vn(N), process.env.NODE_ENV !== "production" && !M && _ && _(N), N;
      }(b, g, L, process.env.NODE_ENV !== "production" ? I.warnTooManyClasses : void 0), G = x, ne = P.$as || f.$as || P.as || f.as || C, ie = Ft(ne), z = P !== f ? We({}, f, {}, P) : f, H = {};
      for (var J in z)
        J[0] !== "$" && J !== "as" && (J === "forwardedAs" ? H.as = z[J] : (q ? q(J, Un, ne) : !ie || Un(J)) && (H[J] = z[J]));
      return f.style && P.style !== f.style && (H.style = We({}, f.style, {}, P.style)), H.className = Array.prototype.concat(V, T, R !== T ? R : null, f.className, P.className).filter(Boolean).join(" "), H.ref = G, Po(ne, H);
    }(w, U, F, m);
  };
  return Y.displayName = d, (w = at.forwardRef(Y)).attrs = y, w.componentStyle = D, w.displayName = d, w.shouldForwardProp = S, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Zt, w.styledComponentId = u, w.target = n ? e.target : e, w.withComponent = function(U) {
    var F = r.componentId, I = function(x, g) {
      if (x == null)
        return {};
      var $, b, k = {}, V = Object.keys(x);
      for (b = 0; b < V.length; b++)
        $ = V[b], g.indexOf($) >= 0 || (k[$] = x[$]);
      return k;
    }(r, ["componentId"]), f = F && F + "-" + (Ft(U) ? U : tn(fn(U)));
    return co(U, We({}, I, { attrs: y, componentId: f }), t);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? ao({}, e.defaultProps, U) : U;
  } }), process.env.NODE_ENV !== "production" && (so(d, u), w.warnTooManyClasses = function(U, F) {
    var I = {}, f = !1;
    return function(x) {
      if (!f && (I[x] = !0, Object.keys(I).length >= 200)) {
        var g = F ? ' with the id of "' + F + '"' : "";
        console.warn("Over 200 classes were generated for component " + U + g + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, I = {};
      }
    };
  }(d, u)), w.toString = function() {
    return "." + w.styledComponentId;
  }, o && Jo(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var gn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Qe), !Pt.isValidElementType(n))
      return Xe(1, String(n));
    var s = function() {
      return t(n, o, dt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, We({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, We({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(co, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  gn[e] = gn(e);
});
var Ts = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Qr(t), Gt.registerId(this.componentId + 1);
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
function As(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = dt.apply(void 0, [e].concat(t)), s = "sc-global-" + zn(JSON.stringify(o)), i = new Ts(o, s);
  function c(a) {
    var d = no(), u = ro(), y = tt(Ct), S = he(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && at.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(w) {
      return typeof w == "string" && w.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(S, a, d, y, u), Jt(function() {
      if (!d.server)
        return l(S, a, d, y, u), function() {
          return i.removeStyles(S, d);
        };
    }, [S, a, d, y, u]), null;
  }
  function l(a, d, u, y, S) {
    if (i.isStatic)
      i.renderStyles(a, Qo, u, S);
    else {
      var w = We({}, d, { theme: io(d, y, c.defaultProps) });
      i.renderStyles(a, w, u, S);
    }
  }
  return process.env.NODE_ENV !== "production" && so(s), at.memo(c);
}
function je(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = dt.apply(void 0, [e].concat(t)).join(""), s = zn(o);
  return new oo(s, o);
}
var qt = function() {
  return tt(Ct);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const v = gn;
var lt = {}, Ps = {
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
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", u = "month", y = "quarter", S = "year", w = "date", D = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, U = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var C = ["th", "st", "nd", "rd"], A = T % 100;
      return "[" + T + (C[(A - 20) % 10] || C[A] || C[0]) + "]";
    } }, F = function(T, C, A) {
      var L = String(T);
      return !L || L.length >= C ? T : "" + Array(C + 1 - L.length).join(A) + T;
    }, I = { s: F, z: function(T) {
      var C = -T.utcOffset(), A = Math.abs(C), L = Math.floor(A / 60), P = A % 60;
      return (C <= 0 ? "+" : "-") + F(L, 2, "0") + ":" + F(P, 2, "0");
    }, m: function T(C, A) {
      if (C.date() < A.date())
        return -T(A, C);
      var L = 12 * (A.year() - C.year()) + (A.month() - C.month()), P = C.clone().add(L, u), R = A - P < 0, G = C.clone().add(L + (R ? -1 : 1), u);
      return +(-(L + (A - P) / (R ? P - G : G - P)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: u, y: S, w: d, d: a, D: w, h: l, m: c, s: i, ms: s, Q: y }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, f = "en", x = {};
    x[f] = U;
    var g = function(T) {
      return T instanceof V;
    }, $ = function T(C, A, L) {
      var P;
      if (!C)
        return f;
      if (typeof C == "string") {
        var R = C.toLowerCase();
        x[R] && (P = R), A && (x[R] = A, P = R);
        var G = C.split("-");
        if (!P && G.length > 1)
          return T(G[0]);
      } else {
        var ne = C.name;
        x[ne] = C, P = ne;
      }
      return !L && P && (f = P), P || !L && f;
    }, b = function(T, C) {
      if (g(T))
        return T.clone();
      var A = typeof C == "object" ? C : {};
      return A.date = T, A.args = arguments, new V(A);
    }, k = I;
    k.l = $, k.i = g, k.w = function(T, C) {
      return b(T, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var V = function() {
      function T(A) {
        this.$L = $(A.locale, null, !0), this.parse(A);
      }
      var C = T.prototype;
      return C.parse = function(A) {
        this.$d = function(L) {
          var P = L.date, R = L.utc;
          if (P === null)
            return new Date(NaN);
          if (k.u(P))
            return new Date();
          if (P instanceof Date)
            return new Date(P);
          if (typeof P == "string" && !/Z$/i.test(P)) {
            var G = P.match(m);
            if (G) {
              var ne = G[2] - 1 || 0, ie = (G[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(G[1], ne, G[3] || 1, G[4] || 0, G[5] || 0, G[6] || 0, ie)) : new Date(G[1], ne, G[3] || 1, G[4] || 0, G[5] || 0, G[6] || 0, ie);
            }
          }
          return new Date(P);
        }(A), this.$x = A.x || {}, this.init();
      }, C.init = function() {
        var A = this.$d;
        this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
      }, C.$utils = function() {
        return k;
      }, C.isValid = function() {
        return this.$d.toString() !== D;
      }, C.isSame = function(A, L) {
        var P = b(A);
        return this.startOf(L) <= P && P <= this.endOf(L);
      }, C.isAfter = function(A, L) {
        return b(A) < this.startOf(L);
      }, C.isBefore = function(A, L) {
        return this.endOf(L) < b(A);
      }, C.$g = function(A, L, P) {
        return k.u(A) ? this[L] : this.set(P, A);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(A, L) {
        var P = this, R = !!k.u(L) || L, G = k.p(A), ne = function(_, Q) {
          var W = k.w(P.$u ? Date.UTC(P.$y, Q, _) : new Date(P.$y, Q, _), P);
          return R ? W : W.endOf(a);
        }, ie = function(_, Q) {
          return k.w(P.toDate()[_].apply(P.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), P);
        }, z = this.$W, H = this.$M, J = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (G) {
          case S:
            return R ? ne(1, 0) : ne(31, 11);
          case u:
            return R ? ne(1, H) : ne(0, H + 1);
          case d:
            var M = this.$locale().weekStart || 0, j = (z < M ? z + 7 : z) - M;
            return ne(R ? J - j : J + (6 - j), H);
          case a:
          case w:
            return ie(te + "Hours", 0);
          case l:
            return ie(te + "Minutes", 1);
          case c:
            return ie(te + "Seconds", 2);
          case i:
            return ie(te + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, C.endOf = function(A) {
        return this.startOf(A, !1);
      }, C.$set = function(A, L) {
        var P, R = k.p(A), G = "set" + (this.$u ? "UTC" : ""), ne = (P = {}, P[a] = G + "Date", P[w] = G + "Date", P[u] = G + "Month", P[S] = G + "FullYear", P[l] = G + "Hours", P[c] = G + "Minutes", P[i] = G + "Seconds", P[s] = G + "Milliseconds", P)[R], ie = R === a ? this.$D + (L - this.$W) : L;
        if (R === u || R === S) {
          var z = this.clone().set(w, 1);
          z.$d[ne](ie), z.init(), this.$d = z.set(w, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          ne && this.$d[ne](ie);
        return this.init(), this;
      }, C.set = function(A, L) {
        return this.clone().$set(A, L);
      }, C.get = function(A) {
        return this[k.p(A)]();
      }, C.add = function(A, L) {
        var P, R = this;
        A = Number(A);
        var G = k.p(L), ne = function(H) {
          var J = b(R);
          return k.w(J.date(J.date() + Math.round(H * A)), R);
        };
        if (G === u)
          return this.set(u, this.$M + A);
        if (G === S)
          return this.set(S, this.$y + A);
        if (G === a)
          return ne(1);
        if (G === d)
          return ne(7);
        var ie = (P = {}, P[c] = n, P[l] = o, P[i] = t, P)[G] || 1, z = this.$d.getTime() + A * ie;
        return k.w(z, this);
      }, C.subtract = function(A, L) {
        return this.add(-1 * A, L);
      }, C.format = function(A) {
        var L = this, P = this.$locale();
        if (!this.isValid())
          return P.invalidDate || D;
        var R = A || "YYYY-MM-DDTHH:mm:ssZ", G = k.z(this), ne = this.$H, ie = this.$m, z = this.$M, H = P.weekdays, J = P.months, te = function(Q, W, N, p) {
          return Q && (Q[W] || Q(L, R)) || N[W].slice(0, p);
        }, M = function(Q) {
          return k.s(ne % 12 || 12, Q, "0");
        }, j = P.meridiem || function(Q, W, N) {
          var p = Q < 12 ? "AM" : "PM";
          return N ? p.toLowerCase() : p;
        }, _ = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: k.s(z + 1, 2, "0"), MMM: te(P.monthsShort, z, J, 3), MMMM: te(J, z), D: this.$D, DD: k.s(this.$D, 2, "0"), d: String(this.$W), dd: te(P.weekdaysMin, this.$W, H, 2), ddd: te(P.weekdaysShort, this.$W, H, 3), dddd: H[this.$W], H: String(ne), HH: k.s(ne, 2, "0"), h: M(1), hh: M(2), a: j(ne, ie, !0), A: j(ne, ie, !1), m: String(ie), mm: k.s(ie, 2, "0"), s: String(this.$s), ss: k.s(this.$s, 2, "0"), SSS: k.s(this.$ms, 3, "0"), Z: G };
        return R.replace(Y, function(Q, W) {
          return W || _[Q] || G.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(A, L, P) {
        var R, G = k.p(L), ne = b(A), ie = (ne.utcOffset() - this.utcOffset()) * n, z = this - ne, H = k.m(this, ne);
        return H = (R = {}, R[S] = H / 12, R[u] = H, R[y] = H / 3, R[d] = (z - ie) / 6048e5, R[a] = (z - ie) / 864e5, R[l] = z / o, R[c] = z / n, R[i] = z / t, R)[G] || z, P ? H : k.a(H);
      }, C.daysInMonth = function() {
        return this.endOf(u).$D;
      }, C.$locale = function() {
        return x[this.$L];
      }, C.locale = function(A, L) {
        if (!A)
          return this.$L;
        var P = this.clone(), R = $(A, L, !0);
        return R && (P.$L = R), P;
      }, C.clone = function() {
        return k.w(this.$d, this);
      }, C.toDate = function() {
        return new Date(this.valueOf());
      }, C.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, C.toISOString = function() {
        return this.$d.toISOString();
      }, C.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), q = V.prototype;
    return b.prototype = q, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", u], ["$y", S], ["$D", w]].forEach(function(T) {
      q[T[1]] = function(C) {
        return this.$g(C, T[0], T[1]);
      };
    }), b.extend = function(T, C) {
      return T.$i || (T(C, V, b), T.$i = !0), b;
    }, b.locale = $, b.isDayjs = g, b.unix = function(T) {
      return b(1e3 * T);
    }, b.en = x[f], b.Ls = x, b.p = {}, b;
  });
})(Ps);
const O = lt, Tt = "reactSchedulerOutsideWrapper", ze = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Os = As`

  #${Tt} {
    font-family: ${ze};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Tt} *,
 #${Tt} *:before,
 #${Tt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Is = {
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
}, Ys = {
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
`, ut = `
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
const Ee = 50, Ze = 24, ft = 16, it = 40, Xt = it + ft + Ze, Mt = 84, ge = 56, Ne = 196, Be = 12, Oe = 50, kt = 24, Ot = 16, yn = 40, Ls = kt + Ot + yn, cr = 24, lr = 52, et = {
  topRow: `600 14px ${ze}`,
  middleRow: `400 10px ${ze}`,
  bottomRow: {
    name: `600 14px ${ze}`,
    number: `600 10px ${ze}`,
    hoursInDay: `400 9px ${ze}`
  }
}, bt = 3, vn = 12, Ut = 24, Rs = "reactSchedulerCanvasHeaderWrapper", lo = "reactSchedulerCanvasWrapper", Ue = Tt, Ns = 4, Qt = 48, qe = 5, zs = 40, dr = 8, Fn = Ze / 2 + 2, uo = ft / 2 + Ze + 1, ur = 2, _e = 60, Re = 21, fo = 58, ho = "reactSchedulerBody", fr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Bn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, po = (e, r) => O(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), mo = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Bn(e),
  isCurrentDay: e.isSame(O(), "day"),
  year: parseInt(e.format("YYYY"))
});
let Bt = null;
const Fs = (e) => {
  if (Bt)
    return Bt;
  const r = document.createElement("canvas");
  r.width = 12, r.height = 12;
  const t = r.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Bt = e.createPattern(r, "repeat"), Bt) : null;
}, Hn = (e, r, t, n, o, s, i, c = !1, l = !1) => {
  if (s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.mode === "dark" ? i.colors.primary : "#E1ECE6", e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ge), c && !s) {
    const d = Fs(e);
    d && (e.fillStyle = d, e.fillRect(r, t, n, ge));
  }
  const a = i.mode === "dark";
  e.strokeStyle = a ? i.colors.border : "#EEF3F0", e.beginPath(), e.moveTo(r + n - 0.5, t), e.lineTo(r + n - 0.5, t + ge), e.stroke(), e.strokeStyle = a ? i.colors.border : "#E4EAE7", e.beginPath(), e.moveTo(r, t + 0.5), e.lineTo(r + n, t + 0.5), e.stroke(), l && (e.strokeStyle = a ? i.colors.today : "#5C8374", e.beginPath(), e.moveTo(r + 0.5, t), e.lineTo(r + 0.5, t + ge), e.stroke());
}, Wn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Re;
}, Bs = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Wn(i, s);
    for (let l = 0; l <= t; l++) {
      const a = O(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), d = a.isSame(O(), "day"), u = a.isBefore(O(), "day"), y = a.date() === 1;
      Hn(
        e,
        l * Ee,
        i * ge + c,
        Ee,
        Bn(a),
        d,
        o,
        u,
        y
      );
    }
  }
}, Hs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Ws = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Be;
  const l = r * ge + s.length * Re;
  for (let a = 0; a <= t; a++) {
    const u = O(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(O(), "week");
    for (let y = 0; y < r; y++) {
      const S = Wn(y, s);
      Hn(e, i, y * ge + S, Mt, !0, u, o);
    }
    i += Mt;
  }
  for (let a = 0; a < t; a++) {
    const d = po(n, a) * Be;
    Hs(e, c, l, o), c += d;
  }
}, js = (e, r, t, n, o, s = []) => {
  const i = O(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const l = Wn(c, s);
    for (let a = 0; a <= t; a++) {
      let d;
      a === Math.floor(t / 2) ? d = O() : a > Math.floor(t / 2) ? d = O().add(a - Math.floor(t / 2), "hours") : d = O().subtract(Math.floor(t / 2) - c, "hours");
      const u = i.isSame(O(), "day") && d.isSame(O(), "hour");
      Hn(
        e,
        a * Oe + Oe / 2 - 0.5,
        c * ge + l,
        Oe,
        Bn(d),
        u,
        o
      );
    }
  }
}, Zs = (e, r, t, n, o = !1) => {
  const s = t * ge + r * Re, i = e.canvas.width;
  e.fillStyle = o ? n.colors.subcontractBorder + "40" : n.mode === "dark" ? n.colors.primary + "80" : "#E1ECE6", e.fillRect(0, s, i, Re);
}, Vs = (e, r, t, n, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(lo)) {
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
      const a = O(`${o.year}-${o.month + 1}-${o.dayOfMonth}`), d = t * ge + i.length * Re;
      e.strokeStyle = s.mode === "dark" ? s.colors.today : "#5C8374", e.setLineDash([]);
      for (let u = 0; u <= n; u++)
        if (a.add(u, "days").date() === 1) {
          const y = u * Ee + 0.5;
          e.beginPath(), e.moveTo(y, 0), e.lineTo(y, d), e.stroke();
        }
    }
  }
};
var xn = {}, Gs = {
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
})(Gs);
const Xs = xn;
var bn = {}, Us = {
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
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Us);
const Ks = bn;
var wn = {}, Js = {
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
        var d, u, y, S, w = i(this), D = (d = this.isoWeekYear(), u = this.$u, y = (u ? s.utc : s)().year(d).startOf("year"), S = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (S += 7), y.add(S, t));
        return w.diff(D, "week") + 1;
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
const qs = wn;
var Sn = {}, Qs = {
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
  })(Pe, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), d = o(i), u = (l = l || "()")[0] === "(", y = l[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(d, c) : !this.isAfter(d, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(Qs);
const ei = Sn;
var Cn = {}, ti = {
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
  })(Pe, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, S = function(f) {
      return f instanceof I;
    }, w = function(f, x, g) {
      return new I(f, g, x.$l);
    }, D = function(f) {
      return n.p(f) + "s";
    }, m = function(f) {
      return f < 0;
    }, Y = function(f) {
      return m(f) ? Math.ceil(f) : Math.floor(f);
    }, U = function(f) {
      return Math.abs(f);
    }, F = function(f, x) {
      return f ? m(f) ? { negative: !0, format: "" + U(f) + x } : { negative: !1, format: "" + f + x } : { negative: !1, format: "" };
    }, I = function() {
      function f(g, $, b) {
        var k = this;
        if (this.$d = {}, this.$l = b, g === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), $)
          return w(g * y[D($)], this);
        if (typeof g == "number")
          return this.$ms = g, this.parseFromMilliseconds(), this;
        if (typeof g == "object")
          return Object.keys(g).forEach(function(T) {
            k.$d[D(T)] = g[T];
          }), this.calMilliseconds(), this;
        if (typeof g == "string") {
          var V = g.match(u);
          if (V) {
            var q = V.slice(2).map(function(T) {
              return T != null ? Number(T) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var x = f.prototype;
      return x.calMilliseconds = function() {
        var g = this;
        this.$ms = Object.keys(this.$d).reduce(function($, b) {
          return $ + (g.$d[b] || 0) * y[b];
        }, 0);
      }, x.parseFromMilliseconds = function() {
        var g = this.$ms;
        this.$d.years = Y(g / a), g %= a, this.$d.months = Y(g / d), g %= d, this.$d.days = Y(g / c), g %= c, this.$d.hours = Y(g / i), g %= i, this.$d.minutes = Y(g / s), g %= s, this.$d.seconds = Y(g / o), g %= o, this.$d.milliseconds = g;
      }, x.toISOString = function() {
        var g = F(this.$d.years, "Y"), $ = F(this.$d.months, "M"), b = +this.$d.days || 0;
        this.$d.weeks && (b += 7 * this.$d.weeks);
        var k = F(b, "D"), V = F(this.$d.hours, "H"), q = F(this.$d.minutes, "M"), T = this.$d.seconds || 0;
        this.$d.milliseconds && (T += this.$d.milliseconds / 1e3);
        var C = F(T, "S"), A = g.negative || $.negative || k.negative || V.negative || q.negative || C.negative, L = V.format || q.format || C.format ? "T" : "", P = (A ? "-" : "") + "P" + g.format + $.format + k.format + L + V.format + q.format + C.format;
        return P === "P" || P === "-P" ? "P0D" : P;
      }, x.toJSON = function() {
        return this.toISOString();
      }, x.format = function(g) {
        var $ = g || "YYYY-MM-DDTHH:mm:ss", b = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return $.replace(l, function(k, V) {
          return V || String(b[k]);
        });
      }, x.as = function(g) {
        return this.$ms / y[D(g)];
      }, x.get = function(g) {
        var $ = this.$ms, b = D(g);
        return b === "milliseconds" ? $ %= 1e3 : $ = b === "weeks" ? Y($ / y[b]) : this.$d[b], $ === 0 ? 0 : $;
      }, x.add = function(g, $, b) {
        var k;
        return k = $ ? g * y[D($)] : S(g) ? g.$ms : w(g, this).$ms, w(this.$ms + k * (b ? -1 : 1), this);
      }, x.subtract = function(g, $) {
        return this.add(g, $, !0);
      }, x.locale = function(g) {
        var $ = this.clone();
        return $.$l = g, $;
      }, x.clone = function() {
        return w(this.$ms, this);
      }, x.humanize = function(g) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!g);
      }, x.milliseconds = function() {
        return this.get("milliseconds");
      }, x.asMilliseconds = function() {
        return this.as("milliseconds");
      }, x.seconds = function() {
        return this.get("seconds");
      }, x.asSeconds = function() {
        return this.as("seconds");
      }, x.minutes = function() {
        return this.get("minutes");
      }, x.asMinutes = function() {
        return this.as("minutes");
      }, x.hours = function() {
        return this.get("hours");
      }, x.asHours = function() {
        return this.as("hours");
      }, x.days = function() {
        return this.get("days");
      }, x.asDays = function() {
        return this.as("days");
      }, x.weeks = function() {
        return this.get("weeks");
      }, x.asWeeks = function() {
        return this.as("weeks");
      }, x.months = function() {
        return this.get("months");
      }, x.asMonths = function() {
        return this.as("months");
      }, x.years = function() {
        return this.get("years");
      }, x.asYears = function() {
        return this.as("years");
      }, f;
    }();
    return function(f, x, g) {
      t = g, n = g().$utils(), g.duration = function(k, V) {
        var q = g.locale();
        return w(k, { $l: q }, V);
      }, g.isDuration = S;
      var $ = x.prototype.add, b = x.prototype.subtract;
      x.prototype.add = function(k, V) {
        return S(k) && (k = k.asMilliseconds()), $.bind(this)(k, V);
      }, x.prototype.subtract = function(k, V) {
        return S(k) && (k = k.asMilliseconds()), b.bind(this)(k, V);
      };
    };
  });
})(ti);
const ni = Cn;
var ri = "Expected a function", hr = 0 / 0, oi = "[object Symbol]", si = /^\s+|\s+$/g, ii = /^[-+]0x[0-9a-f]+$/i, ai = /^0b[01]+$/i, ci = /^0o[0-7]+$/i, li = parseInt, di = typeof Pe == "object" && Pe && Pe.Object === Object && Pe, ui = typeof self == "object" && self && self.Object === Object && self, fi = di || ui || Function("return this")(), hi = Object.prototype, pi = hi.toString, mi = Math.max, gi = Math.min, rn = function() {
  return fi.Date.now();
};
function yi(e, r, t) {
  var n, o, s, i, c, l, a = 0, d = !1, u = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(ri);
  r = pr(r) || 0, Mn(t) && (d = !!t.leading, u = "maxWait" in t, s = u ? mi(pr(t.maxWait) || 0, r) : s, y = "trailing" in t ? !!t.trailing : y);
  function S(x) {
    var g = n, $ = o;
    return n = o = void 0, a = x, i = e.apply($, g), i;
  }
  function w(x) {
    return a = x, c = setTimeout(Y, r), d ? S(x) : i;
  }
  function D(x) {
    var g = x - l, $ = x - a, b = r - g;
    return u ? gi(b, s - $) : b;
  }
  function m(x) {
    var g = x - l, $ = x - a;
    return l === void 0 || g >= r || g < 0 || u && $ >= s;
  }
  function Y() {
    var x = rn();
    if (m(x))
      return U(x);
    c = setTimeout(Y, D(x));
  }
  function U(x) {
    return c = void 0, y && n ? S(x) : (n = o = void 0, i);
  }
  function F() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function I() {
    return c === void 0 ? i : U(rn());
  }
  function f() {
    var x = rn(), g = m(x);
    if (n = arguments, o = this, l = x, g) {
      if (c === void 0)
        return w(l);
      if (u)
        return c = setTimeout(Y, r), S(l);
    }
    return c === void 0 && (c = setTimeout(Y, r)), i;
  }
  return f.cancel = F, f.flush = I, f;
}
function Mn(e) {
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
  if (Mn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Mn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(si, "");
  var t = ai.test(e);
  return t || ci.test(e) ? li(e.slice(2), t ? 2 : 8) : ii.test(e) ? hr : +e;
}
var kn = yi;
const jt = [0, 1, 2];
var It = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(It || {});
const go = (e) => jt.includes(e), vt = (e) => {
  var n;
  const t = (((n = document.getElementById(Ue)) == null ? void 0 : n.clientWidth) || 0) - Ne;
  switch (e) {
    case 1:
      return Math.ceil(t / Ee) * bt;
    case 2:
      return Math.ceil(t / Oe) * bt;
    default:
      return Math.ceil(t / Mt) * bt;
  }
}, bi = (e) => vt(e) / bt, en = (e, r) => {
  const t = vt(r) / 2;
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
  return ((((t = document.getElementById(Ue)) == null ? void 0 : t.clientWidth) || 0) - Ne) * bt;
}, yo = Gr({
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
  date: O(),
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
O.extend(Xs);
O.extend(Ks);
O.extend(qs);
O.extend(ei);
O.extend(ni);
const Si = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = O(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c,
  toolbarActions: l
}) => {
  const { zoom: a, maxRecordsPerPage: d = 50 } = n, [u, y] = pe(a), [S, w] = pe(O()), [D, m] = pe(null), [Y, U] = pe(!1), [F, I] = pe(vt(u)), f = jt[u] !== jt[jt.length - 1], x = u !== 0, g = $e(() => wi(S, u), [S, u]), $ = en(S, u).startDate, b = O($).dayOfYear(), k = mo($), V = he(null), q = he(!1), T = he(null), [C, A] = pe([{ x: 0, y: 0 }]), L = le(
    (W, N = "auto") => {
      var X, E, Z, ee;
      const p = jn();
      switch (W) {
        case "back":
          return (X = V.current) == null ? void 0 : X.scrollTo({
            behavior: N,
            left: p / 3
          });
        case "forward":
          return (E = V.current) == null ? void 0 : E.scrollTo({
            behavior: N,
            left: p / 3
          });
        case "middle": {
          const K = p / bt / 4;
          return (Z = V.current) == null ? void 0 : Z.scrollTo({
            behavior: N,
            left: p / 2 - K
          });
        }
        default:
          return (ee = V.current) == null ? void 0 : ee.scrollTo({
            behavior: N,
            left: p / 2
          });
      }
    },
    []
  ), P = (W) => {
    A(W);
  }, R = le(
    (W) => {
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
      kn(() => {
        switch ((W === "forward" || W === "back") && (q.current = !0), T.current = W, W) {
          case "back":
            w((E) => E.subtract(p, "days"));
            break;
          case "forward":
            w((E) => E.add(p, "days"));
            break;
          case "middle":
            w(O());
            break;
        }
        s == null || s(g);
      }, 300)();
    },
    [s, g, u]
  );
  ve(() => {
    T.current && (L(T.current), T.current = null);
  }, [S, L]), ve(() => {
    V.current = document.getElementById(Ue), I(vt(u));
  }, [u]), ve(() => {
    const W = () => I(vt(u));
    return window.addEventListener("resize", W), () => window.removeEventListener("resize", W);
  }, [u]), ve(() => {
    s == null || s(g);
  }, [s, g]), ve(() => {
    U(!1);
  }, [o]), ve(() => {
    Y || (L("middle"), U(!0), w(o));
  }, [o, Y, L]);
  const G = () => {
    t || (w(
      (W) => u === 2 ? W.add(cr, "hours") : W.add(ur, "weeks")
    ), s == null || s(g));
  }, ne = le(() => {
    t || R("forward");
  }, [t, R]), ie = () => {
    t || (w(
      (W) => u === 2 ? W.subtract(cr, "hours") : W.subtract(ur, "weeks")
    ), s == null || s(g));
  }, z = le(() => {
    !Y || t || R("back");
  }, [Y, t, R]), H = le(() => {
    t || (T.current = "middle", w(O()), m(null), s == null || s(g));
  }, [t, s, g]), J = le(
    (W) => {
      if (t)
        return;
      const N = O(W).startOf("day");
      N.isValid() && (T.current = "middle", w(N), m(N), s == null || s(g));
    },
    [t, s, g]
  ), te = () => j(u + 1), M = () => j(u - 1), j = (W) => {
    go(W) && (y(W), I(vt(W)), s == null || s(g));
  }, _ = () => i == null ? void 0 : i(), { Provider: Q } = yo;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: G,
        handleScrollNext: ne,
        handleGoPrev: ie,
        handleScrollPrev: z,
        handleGoToday: H,
        goToDate: J,
        zoomIn: te,
        zoomOut: M,
        setZoom: j,
        zoom: u,
        isNextZoom: f,
        isPrevZoom: x,
        date: S,
        jumpDate: D,
        isLoading: t,
        cols: F,
        startDate: k,
        dayOfYear: b,
        toggleDisplayActiveUnits: _,
        tilesCoords: C,
        updateTilesCoords: P,
        recordsThreshold: d,
        onClearFilterData: c,
        suppressNextSlideRef: q,
        toolbarActions: l
      },
      children: r
    }
  );
}, Ve = () => tt(yo), vo = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, xo = () => {
  var e;
  return typeof window < "u" && !!((e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches);
}, bo = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ge + n * Re;
    if (e >= s + Re)
      n++;
    else if (e >= s)
      return o * ge + n * Re - n * Re;
  }
  return t - n * Re;
}, Ci = 5, mr = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > Ci;
}, xt = (e, r, t) => {
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
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((j) => ({ ...j, data: [j.data] })) : r : e, {
    enabled: d = !0,
    isDraggable: u,
    resourceOnly: y = !1,
    isValidDrop: S
  } = i, [w, D] = pe("idle"), [m, Y] = pe(null), [U, F] = pe({ x: 0, y: 0 }), [I, f] = pe({ width: 0, height: 48 }), [x, g] = pe(null), [$, b] = pe(!0), k = he({ x: 0, y: 0 }), V = he({ x: 0, y: 0 }), q = he({ x: 0, y: 0 }), T = he(null), C = he(null), A = he(0), L = he(null), P = le(
    (j) => !d || j.draggable === !1 ? !1 : u ? u(j) : !0,
    [d, u]
  ), R = le(
    (j, _) => {
      const Q = bo(_, l), W = Math.floor(Q / ge);
      let N;
      switch (t) {
        case 0:
          N = Be * 7;
          break;
        case 1:
          N = Ee;
          break;
        case 2:
          N = Oe;
          break;
        default:
          N = Ee;
      }
      const p = Math.floor(j / N);
      let X;
      const E = O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          X = E.add(p * 7, "days").toDate();
          break;
        case 1:
          X = E.add(p, "days").toDate();
          break;
        case 2:
          X = E.add(p, "hours").toDate();
          break;
        default:
          X = E.toDate();
      }
      return { snappedDate: X, snappedResourceIndex: W };
    },
    [t, n, l]
  ), G = le(
    (j, _, Q, W) => {
      const N = [], p = _.getTime(), X = Q.getTime(), E = a.find((ee) => ee.id === W);
      if (!E)
        return N;
      const Z = [];
      for (const ee of E.data)
        Array.isArray(ee) ? Z.push(...ee) : Z.push(ee);
      for (const ee of Z) {
        if (ee.segmentId === j.segmentId)
          continue;
        const K = ee.startDate.getTime(), ce = ee.endDate.getTime();
        if (p >= K && p < ce || X > K && X <= ce || p <= K && X >= ce) {
          const ue = new Date(Math.max(p, K)), xe = new Date(Math.min(X, ce)), De = xe.getTime() - ue.getTime();
          N.push({
            event: ee,
            conflictStart: ue,
            conflictEnd: xe,
            overlapDuration: De
          });
        }
      }
      return N;
    },
    [a]
  ), ne = le(
    (j, _, Q, W) => {
      const N = [], p = _.getTime(), X = Q.getTime(), E = O(_).format("YYYY-MM-DD"), Z = a.find((K) => K.id === W);
      if (!Z)
        return N;
      const ee = [];
      for (const K of Z.data)
        Array.isArray(K) ? ee.push(...K) : ee.push(K);
      for (const K of ee) {
        if (K.segmentId === j.segmentId)
          continue;
        const ce = K.startDate.getTime(), ye = K.endDate.getTime(), ue = O(K.startDate).format("YYYY-MM-DD"), xe = O(K.endDate).format("YYYY-MM-DD"), De = O(Q).format("YYYY-MM-DD");
        if (!(ue === E || xe === E || ue === De || xe === De || O(K.startDate).isBefore(_, "day") && O(K.endDate).isAfter(Q, "day")) || p >= ce && p < ye || X > ce && X <= ye || p <= ce && X >= ye)
          continue;
        let me, Ae;
        ye <= p ? (me = p - ye, Ae = "before") : (me = ce - X, Ae = "after"), N.push({
          event: K,
          timeGap: me,
          position: Ae
        });
      }
      return N.sort((K, ce) => K.timeGap - ce.timeGap);
    },
    [a]
  ), ie = le(
    (j, _, Q) => {
      const W = R(_, Q);
      let N, p;
      if (y)
        N = j.startDate, p = j.endDate;
      else {
        const ye = O(j.endDate).diff(j.startDate);
        N = W.snappedDate, p = O(N).add(ye, "milliseconds").toDate();
      }
      let X = 0, E = "", Z;
      for (const ye of e) {
        const ue = Math.max(ye.data.length, 1);
        if (W.snappedResourceIndex < X + ue) {
          E = ye.id, Z = ye.capacity;
          break;
        }
        X += ue;
      }
      if (!E)
        return null;
      let ee = !0;
      Z !== void 0 && j.totalPassengers !== void 0 && (ee = j.totalPassengers <= Z);
      const K = G(j, N, p, E), ce = K.length === 0 ? ne(j, N, p, E) : [];
      return {
        startDate: N,
        endDate: p,
        resourceId: E,
        resourceIndex: W.snappedResourceIndex,
        resourceCapacity: Z,
        hasCapacity: ee,
        conflicts: K,
        hasConflict: K.length > 0,
        nearbyEvents: ce
      };
    },
    [R, e, y, G, ne]
  ), z = le(
    (j, _) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - A.current < 100)
        return;
      A.current = Q;
      const W = {
        event: j,
        currentStartDate: _.startDate,
        currentEndDate: _.endDate,
        currentResourceId: _.resourceId,
        conflicts: _.conflicts
      };
      s(W);
    },
    [s]
  ), H = le(
    (j, _) => {
      if (!P(j) || !c.current)
        return;
      _.preventDefault(), _.stopPropagation();
      const Q = _.target.closest('[style*="left"]');
      let W = 0, N = 0;
      Q && Q.style.left && Q.style.top && (W = parseInt(Q.style.left), N = parseInt(Q.style.top));
      const p = xt(
        _.clientX,
        _.clientY,
        c.current
      );
      k.current = { x: W, y: N }, V.current = { x: _.clientX, y: _.clientY }, q.current = {
        x: p.x - W,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, L.current = {
        startDate: j.startDate,
        endDate: j.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const Z of e) {
        for (const ee of Z.data)
          if (ee.some((K) => K.segmentId === j.segmentId)) {
            L.current.resourceId = Z.id;
            break;
          }
        if (L.current.resourceId)
          break;
      }
      Y(j), D("potential"), F({ x: W, y: N });
      let X = 100, E = 48;
      if (Q) {
        const Z = Q.getBoundingClientRect();
        X = Z.width, E = Z.height;
      }
      f({ width: X, height: E });
    },
    [P, c, e, t]
  ), J = le(
    (j) => {
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
      const Q = _.getBoundingClientRect(), W = j.clientY, N = 50, p = 12, X = W - Q.top, E = Q.bottom - W;
      let Z = !1, ee = 0;
      X < N && X > 0 ? (Z = !0, ee = -p * (1 - X / N)) : E < N && E > 0 && (Z = !0, ee = p * (1 - E / N)), Z ? (C.current && cancelAnimationFrame(C.current), C.current = requestAnimationFrame(() => {
        _.scrollTop += ee, w === "dragging" && J(j);
      })) : C.current && (cancelAnimationFrame(C.current), C.current = null);
    },
    [c, w]
  ), te = le(
    (j) => {
      if (w === "idle" || w === "animating" || !m || !c.current)
        return;
      const _ = { x: j.clientX, y: j.clientY };
      if (w === "potential")
        if (mr(V.current, _))
          D("dragging");
        else
          return;
      J(j);
      const Q = xt(
        j.clientX,
        j.clientY,
        c.current
      );
      T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => {
        const W = {
          x: Q.x - q.current.x,
          y: Q.y - q.current.y
        };
        F(W);
        const N = ie(m, Q.x, Q.y);
        if (N && S) {
          const p = {
            event: m,
            currentStartDate: N.startDate,
            currentEndDate: N.endDate,
            currentResourceId: N.resourceId,
            conflicts: N.conflicts
          };
          N.hasConflict = !S(p);
        }
        if (g(N), N) {
          const p = N.hasCapacity !== !1;
          b(p), z(m, N);
        }
      });
    },
    [w, m, c, ie, z, S, J]
  ), M = le(
    async (j) => {
      if (w === "idle" || w === "animating")
        return;
      const _ = { x: j.clientX, y: j.clientY };
      if (!mr(V.current, _) || w === "potential") {
        D("idle"), Y(null), g(null);
        return;
      }
      if (!m || !x || !L.current) {
        D("idle"), Y(null), g(null);
        return;
      }
      if (x.hasCapacity === !1) {
        b(!1), D("animating"), F(k.current), setTimeout(() => {
          D("idle"), Y(null), g(null), b(!0);
        }, 300);
        return;
      }
      const W = {
        event: m,
        originalStartDate: L.current.startDate,
        originalEndDate: L.current.endDate,
        originalResourceId: L.current.resourceId,
        newStartDate: x.startDate,
        newEndDate: x.endDate,
        newResourceId: x.resourceId,
        hasConflict: x.hasConflict,
        conflicts: x.conflicts
      };
      let N = !0;
      if (o)
        try {
          const p = o(W);
          N = p instanceof Promise ? await p : p;
        } catch {
          N = !1;
        }
      N ? (b(!0), D("idle"), Y(null), g(null)) : (b(!1), D("animating"), F(k.current), setTimeout(() => {
        D("idle"), Y(null), g(null), b(!0);
      }, 300));
    },
    [w, m, x, o, S]
  );
  return ve(() => {
    if (w === "potential" || w === "dragging") {
      const j = (Q) => te(Q), _ = (Q) => M(Q);
      return document.addEventListener("mousemove", j), document.addEventListener("mouseup", _), () => {
        document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", _);
      };
    } else
      return () => {
      };
  }, [w, te, M]), ve(() => () => {
    T.current && (cancelAnimationFrame(T.current), T.current = null), C.current && (cancelAnimationFrame(C.current), C.current = null);
  }, []), ve(() => {
    (w === "idle" || w === "animating") && (T.current && (cancelAnimationFrame(T.current), T.current = null), C.current && (cancelAnimationFrame(C.current), C.current = null));
  }, [w]), ve(() => {
    (w === "dragging" || w === "potential") && (w === "dragging" ? (D("animating"), F(k.current), setTimeout(() => {
      D("idle"), Y(null), g(null);
    }, 300)) : (D("idle"), Y(null), g(null)));
  }, [t]), ve(() => {
    if ((w === "dragging" || w === "potential") && m) {
      let j = !1;
      for (const _ of e) {
        for (const Q of _.data)
          if (Q.some((W) => W.segmentId === m.segmentId)) {
            j = !0;
            break;
          }
        if (j)
          break;
      }
      j || (w === "dragging" ? (D("animating"), F(k.current), setTimeout(() => {
        D("idle"), Y(null), g(null);
      }, 300)) : (D("idle"), Y(null), g(null)));
    }
  }, [e, w, m]), {
    dragState: w,
    draggedEvent: m,
    ghostPosition: U,
    ghostDimensions: I,
    dropTarget: x,
    isValidDrop: $,
    handleDragStart: H,
    isDraggable: P,
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
  const { enabled: d = !1, isSelectable: u } = i, y = d && !!o, S = le((p) => {
    let X = 0;
    for (const E of a)
      E <= p && X++;
    return p * ge + X * Re;
  }, [a]), [w, D] = pe("idle"), [m, Y] = pe(null), [U, F] = pe(null), [I, f] = pe(null), [x, g] = pe(!1), [$, b] = pe([]), [k, V] = pe(!1), q = he(null), T = he(null), C = he(null), A = he(null), L = le(() => {
    switch (t) {
      case 0:
        return Be * 7;
      case 1:
        return Ee;
      case 2:
        return Oe;
      default:
        return Ee;
    }
  }, [t]), P = le(
    (p) => {
      const X = L(), E = Math.floor(p / X), Z = O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return Z.add(E * 7, "days").toDate();
        case 1:
          return Z.add(E, "days").toDate();
        case 2:
          return Z.add(E, "hours").toDate();
        default:
          return Z.toDate();
      }
    },
    [t, n, L]
  ), R = le(
    (p) => {
      const X = bo(p, a), E = Math.floor(X / ge);
      let Z = 0;
      for (const ee of e) {
        const K = Math.max(ee.data.length, 1);
        if (E < Z + K)
          return {
            resourceId: ee.id,
            resourceIndex: E,
            resourceLabel: ee.label
          };
        Z += K;
      }
      return null;
    },
    [e, a]
  ), G = le(
    (p) => {
      const X = L();
      return Math.floor(p / X) * X;
    },
    [L]
  ), ne = le(
    (p, X, E, Z = []) => {
      const ee = [], ce = (r || e).find((xe) => xe.id === p), ye = X.getTime(), ue = E.getTime();
      if (ce) {
        const xe = ce.data[0], De = xe && Array.isArray(xe) ? ce.data.flat() : ce.data;
        for (const be of De) {
          const ae = new Date(be.startDate).getTime(), me = new Date(be.endDate).getTime();
          if (ye < me && ue > ae) {
            const Ae = new Date(Math.max(ye, ae)), Le = new Date(Math.min(ue, me)), fe = Le.getTime() - Ae.getTime();
            ee.push({
              event: be,
              conflictStart: Ae,
              conflictEnd: Le,
              overlapDuration: fe
            });
          }
        }
      }
      for (const xe of Z) {
        if (xe.resourceId !== p)
          continue;
        const De = xe.startDate.getTime(), be = xe.endDate.getTime();
        if (ye < be && ue > De) {
          const ae = new Date(Math.max(ye, De)), me = new Date(Math.min(ue, be)), Ae = me.getTime() - ae.getTime(), Le = {
            segmentId: `pending-${xe.startDate.getTime()}`,
            reservationId: `pending-${xe.startDate.getTime()}`,
            startDate: xe.startDate,
            endDate: xe.endDate,
            occupancy: 0,
            title: `New Event (${xe.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          ee.push({
            event: Le,
            conflictStart: ae,
            conflictEnd: me,
            overlapDuration: Ae
          });
        }
      }
      return ee;
    },
    [e, r]
  ), ie = le(
    (p) => {
      if (!y || l || !c.current || p.button !== 0)
        return;
      const X = p.target;
      if (X.closest("[data-segment-id]") || X.closest("[data-multi-select-ui]"))
        return;
      const E = xt(p.clientX, p.clientY, c.current), Z = R(E.y);
      if (!Z)
        return;
      q.current = { x: p.clientX, y: p.clientY }, T.current = Z.resourceIndex;
      const ee = G(E.x), K = L(), ce = S(Z.resourceIndex);
      Y(E), F(E), f({
        x: ee,
        y: ce,
        width: K,
        height: ge
      }), D("selecting");
    },
    [y, l, c, R, G, L, S]
  ), z = le(
    (p) => {
      F(p);
      const X = L(), E = G((m == null ? void 0 : m.x) || 0), Z = G(p.x), ee = S(T.current), K = Math.min(E, Z), ce = Math.max(E, Z) + X;
      f({ x: K, y: ee, width: ce - K, height: ge });
    },
    [m, L, G, S]
  ), H = le(() => {
    A.current && (cancelAnimationFrame(A.current), A.current = null);
  }, []), J = le(
    (p, X) => {
      const E = document.getElementById(Ue);
      if (!E || !c.current)
        return;
      const Z = E.getBoundingClientRect(), ee = 60, K = 12, ce = p - (Z.left + Ne), ye = Z.right - p;
      let ue = 0;
      ce < ee ? ue = -K * (1 - Math.max(0, ce) / ee) : ye < ee && (ue = K * (1 - Math.max(0, ye) / ee)), H(), ue !== 0 && (A.current = requestAnimationFrame(() => {
        E.scrollLeft += ue, z(xt(p, X, c.current)), J(p, X);
      }));
    },
    [c, z, H]
  ), te = le(
    (p) => {
      if (w !== "selecting" || !c.current || T.current === null)
        return;
      const X = xt(p.clientX, p.clientY, c.current);
      C.current && cancelAnimationFrame(C.current), C.current = requestAnimationFrame(() => z(X)), J(p.clientX, p.clientY);
    },
    [w, c, z, J]
  ), M = le(
    (p) => {
      if (w !== "selecting")
        return;
      if (H(), !c.current || !m || !q.current) {
        D("idle"), Y(null), F(null), f(null);
        return;
      }
      const X = xt(p.clientX, p.clientY, c.current), E = R(m.y);
      if (!E) {
        D("idle"), Y(null), F(null), f(null);
        return;
      }
      const Z = Math.min(m.x, X.x), ee = Math.max(m.x, X.x), K = P(Z), ce = P(ee), ye = O(ce).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (u && !u(E.resourceId, K, ye)) {
        D("idle"), Y(null), F(null), f(null);
        return;
      }
      const ue = ne(
        E.resourceId,
        K,
        ye,
        $
      ), xe = ue.length > 0, De = {
        startDate: K,
        endDate: ye,
        resourceId: E.resourceId,
        resourceLabel: E.resourceLabel,
        zoomLevel: t,
        hasConflict: xe,
        conflicts: xe ? ue : void 0
      };
      if (x)
        b((be) => [...be, De]), V(!0);
      else if (o) {
        const be = o(De), ae = (me) => {
          me != null && me.continueMultiSelect && (g(!0), b([De]), V(!0));
        };
        be instanceof Promise ? be.then(ae) : ae(be);
      }
      D("idle"), Y(null), F(null), f(null), q.current = null, T.current = null;
    },
    [
      w,
      c,
      m,
      R,
      P,
      u,
      o,
      t,
      x,
      ne,
      $,
      H
    ]
  ), j = le(() => {
    if ($.length > 0 && s) {
      V(!1);
      const p = s($), X = (E) => {
        E != null && E.continueMultiSelect ? V(!0) : (b([]), g(!1), V(!1));
      };
      p instanceof Promise ? p.then(X) : X(p);
      return;
    }
    b([]), g(!1), V(!1);
  }, [$, s]), _ = le(() => {
    b([]), g(!1), V(!1);
  }, []), Q = le((p) => {
    b((X) => {
      const E = X.filter((Z, ee) => ee !== p);
      return E.length === 0 && (g(!1), V(!1)), E;
    });
  }, []), W = le(
    (p, X) => {
      b((E) => E.map((Z, ee) => {
        if (ee !== p)
          return Z;
        const K = { ...Z, ...X }, ce = E.filter((ue, xe) => xe !== p), ye = ne(
          K.resourceId,
          K.startDate,
          K.endDate,
          ce
        );
        return {
          ...K,
          hasConflict: ye.length > 0,
          conflicts: ye.length > 0 ? ye : void 0
        };
      }));
    },
    [ne]
  ), N = le(
    (p) => {
      p.key === "Escape" && (w === "selecting" ? (H(), D("idle"), Y(null), F(null), f(null), q.current = null, T.current = null) : x && $.length > 0 && (b([]), g(!1), V(!1)));
    },
    [w, x, $.length, H]
  );
  return ve(() => {
    if (w === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", M), document.addEventListener("keydown", N), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", M), document.removeEventListener("keydown", N);
      };
  }, [w, te, M, N]), ve(() => {
    if (x && $.length > 0)
      return document.addEventListener("keydown", N), () => {
        document.removeEventListener("keydown", N);
      };
  }, [x, $.length, N]), ve(() => () => {
    C.current && (cancelAnimationFrame(C.current), C.current = null), H();
  }, [H]), ve(() => {
    l && w === "selecting" && (H(), D("idle"), Y(null), F(null), f(null), q.current = null, T.current = null);
  }, [l, w, H]), {
    selectionState: w,
    selectionStart: m,
    selectionEnd: U,
    selectionBox: I,
    handleGridMouseDown: ie,
    isEnabled: y,
    pendingSelections: $,
    confirmSelections: j,
    clearSelections: _,
    removeSelection: Q,
    updateSelection: W,
    isMultiSelectActive: x,
    hasUnconfirmedSelections: k
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
`, Ti = In(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: l, onDragStateChange: a, onTimeRangeSelect: d, onMultiTimeRangeSelect: u, clickToAddConfig: y, separatorRowIndices: S = [], subcontractSeparatorRow: w = -1, fadingUnitIds: D }, m) {
  const Y = he(!1), { handleScrollNext: U, handleScrollPrev: F, date: I, isLoading: f, cols: x, startDate: g, suppressNextSlideRef: $, config: b } = Ve(), k = he(null), V = he(null), q = he(t), T = he(I), C = he(null), A = he(null), L = he(null), P = he(null), [R, G] = pe(!1), ne = qt(), {
    dragState: ie,
    draggedEvent: z,
    ghostPosition: H,
    ghostDimensions: J,
    dropTarget: te,
    isValidDrop: M,
    handleDragStart: j,
    isDraggable: _,
    draggingEventId: Q,
    resourceOnly: W
  } = Mi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: g,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: l,
    gridRef: P,
    separatorRowIndices: S
  });
  ve(() => {
    const fe = ie === "dragging" || ie === "potential";
    G(fe), a && a(fe);
  }, [ie, a]);
  const N = he(!1), p = he(I), X = he(null);
  ve(() => {
    var Ie;
    const fe = p.current;
    if (p.current = I, !N.current) {
      N.current = !0;
      return;
    }
    if ($ != null && $.current) {
      $.current = !1;
      return;
    }
    const re = P.current;
    if (!(re != null && re.animate))
      return;
    const de = I.isAfter(fe) ? 48 : -48;
    (Ie = X.current) == null || Ie.cancel(), re.style.willChange = "transform";
    const oe = re.animate(
      [
        { transform: `translateX(${de}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), ke = () => {
      re.style.willChange = "";
    };
    oe.onfinish = ke, oe.oncancel = ke, X.current = oe;
  }, [I, $]);
  const {
    selectionState: E,
    selectionBox: Z,
    handleGridMouseDown: ee,
    pendingSelections: K,
    confirmSelections: ce,
    clearSelections: ye,
    removeSelection: ue,
    updateSelection: xe,
    isMultiSelectActive: De,
    hasUnconfirmedSelections: be
  } = ki({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: g,
    onTimeRangeSelect: d,
    onMultiTimeRangeSelect: u,
    clickToAddConfig: y,
    gridRef: P,
    isDragging: R,
    separatorRowIndices: S
  }), ae = le((fe) => {
    fe.preventDefault();
  }, []), me = le((fe) => {
    fe.preventDefault();
  }, []), Ae = S.length * Re, Le = le(
    (fe) => {
      const re = jn(), de = t * ge + 1 + Ae;
      vo(fe, re, de), Vs(fe, r, t, x, g, ne, S, w);
    },
    [x, g, t, r, ne, S, w, Ae]
  );
  return ve(() => {
    if (!k.current)
      return;
    const fe = k.current.getContext("2d");
    if (!fe)
      return;
    const re = () => Le(fe);
    return window.addEventListener("resize", re), () => window.removeEventListener("resize", re);
  }, [Le]), ve(() => {
    var He;
    const fe = q.current, re = T.current;
    if (q.current = t, T.current = I, fe === t || !I.isSame(re, "day") || xo())
      return;
    const de = k.current, oe = V.current;
    if (!de || !oe)
      return;
    const ke = oe.getContext("2d");
    if (!ke)
      return;
    oe.width = de.width, oe.height = de.height, oe.style.width = de.style.width, oe.style.height = de.style.height, ke.setTransform(1, 0, 0, 1, 0, 0), ke.clearRect(0, 0, oe.width, oe.height), ke.drawImage(de, 0, 0), (He = C.current) == null || He.cancel(), oe.style.opacity = "1";
    const Ie = oe.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    Ie.onfinish = () => {
      oe.style.opacity = "0";
    }, C.current = Ie;
  }, [t, I]), ve(() => {
    const fe = k.current;
    if (!fe)
      return;
    fe.style.letterSpacing = "1px";
    const re = fe.getContext("2d");
    re && Le(re);
  }, [I, t, r, Le]), ve(() => {
    if (!A.current)
      return;
    const fe = new IntersectionObserver(
      (re) => {
        re[0].isIntersecting && !Y.current && (Y.current = !0, U(), setTimeout(() => {
          Y.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Ue) }
    );
    return fe.observe(A.current), () => {
      fe.disconnect();
    };
  }, [U]), ve(() => {
    if (!L.current)
      return;
    const fe = new IntersectionObserver(
      (re) => {
        re[0].isIntersecting && !Y.current && (Y.current = !0, F(), setTimeout(() => {
          Y.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Ue),
        rootMargin: `0px 0px 0px -${Ne}px`
      }
    );
    return fe.observe(L.current), () => {
      fe.disconnect();
    };
  }, [F]), /* @__PURE__ */ B($i, { id: lo, children: [
    /* @__PURE__ */ B(
      Di,
      {
        ref: (fe) => {
          typeof m == "function" ? m(fe) : m && (m.current = fe), P.current = fe;
        },
        onMouseDown: ee,
        style: { cursor: d ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(gr, { position: "left", ref: L }),
          /* @__PURE__ */ h(On, { isLoading: f, position: "left" }),
          /* @__PURE__ */ h(
            Ei,
            {
              ref: k,
              onDragStart: ae,
              onDragOver: me,
              style: { userSelect: ie === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(_i, { ref: V, "aria-hidden": !0 }),
          /* @__PURE__ */ h(Zd, { zoom: r, startDate: g }),
          /* @__PURE__ */ h(Xd, { zoom: r, startDate: g }),
          /* @__PURE__ */ h(
            Xl,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onDragStart: j,
              isDraggable: _,
              draggingEventId: Q,
              separatorRowIndices: S,
              fadingUnitIds: D,
              highlightedSegmentId: (b == null ? void 0 : b.highlightedSegmentId) ?? null,
              focusedUnitIds: (b == null ? void 0 : b.focusedUnitIds) ?? null,
              leavingSegmentIds: (b == null ? void 0 : b.leavingSegmentIds) ?? null,
              ghostProject: (b == null ? void 0 : b.ghostProject) ?? null
            }
          ),
          /* @__PURE__ */ h(gr, { ref: A, position: "right" }),
          /* @__PURE__ */ h(On, { isLoading: f, position: "right" }),
          (ie === "dragging" || ie === "animating") && /* @__PURE__ */ h(
            Sd,
            {
              draggedEvent: z,
              ghostPosition: H,
              ghostDimensions: J,
              dropTarget: te,
              isValidDrop: M,
              dragState: ie,
              zoom: r,
              data: n,
              resourceOnly: W,
              separatorRowIndices: S
            }
          ),
          /* @__PURE__ */ h(
            $d,
            {
              selectionBox: Z,
              isSelecting: E === "selecting"
            }
          ),
          De && K.length > 0 && /* @__PURE__ */ h(
            Hd,
            {
              selections: K,
              data: n,
              zoom: r,
              startDate: g,
              onRemove: ue,
              onUpdate: xe,
              separatorRowIndices: S
            }
          )
        ]
      }
    ),
    De && be && K.length > 0 && /* @__PURE__ */ h(
      Yd,
      {
        selections: K,
        onConfirm: ce,
        onClear: ye,
        onRemove: ue
      }
    )
  ] });
}), wo = (e) => {
  const r = O.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, So = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / _e);
    t += o.hours + s, n += r % _e, n >= _e && (t++, n -= _e);
  }), { hours: t, minutes: n };
}, Co = (e, r) => {
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
    const d = O(a.startDate).isoWeek(), u = O(a.startDate).isoWeekday(), y = O(a.endDate).isoWeek(), S = O(a.endDate).isoWeekday(), { hours: w, minutes: D } = wo(a.occupancy);
    if (n === d) {
      const m = (qe + 1 - u) * w, Y = (qe + 1 - u) * D;
      return { hours: Math.max(0, m), minutes: Y };
    } else if (n === y) {
      const m = S > qe ? qe * w : S * w, Y = S > qe ? qe * D : S * D;
      return { hours: m, minutes: Y };
    } else if (O(r).isBetween(a.startDate, a.endDate))
      return { hours: qe * w, minutes: qe * D };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = So(o), { free: c, overtime: l } = Co({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, Pi = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: y } = wo(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = So(s), { free: l, overtime: a } = Co({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Oi = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = O(c.startDate).hour(), a = O(c.endDate).hour(), d = r.hour(), u = O(c.endDate).minute(), y = O(c.startDate).minute();
    l < d && a > d ? t += _e : l === d && a === d && y && u ? t += u ? u - y : _e - y : l === d && a >= d ? t += y ? _e - y : _e : a === d && u && (t += u);
  });
  const n = Math.floor(t / _e), o = t % _e, s = n || o ? 0 : 1, i = n ? 0 : o ? _e - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Ii = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? O(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? O(t).isBetween(i.startDate, i.endDate, "hour", "[]") : O(i.startDate).isBetween(
    O(t),
    O(t).add(6, "days"),
    "day",
    "[]"
  ) || O(t).isBetween(O(i.startDate), O(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return Pi(s, t, n, o);
    case 2:
      return Oi(s, t);
    default:
      return Ai(s, t, n);
  }
}, Yi = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", l;
  switch (s) {
    case 0:
      c = "weeks", l = Mt;
      break;
    case 1:
      c = "days", l = Ee;
      break;
    case 2:
      c = "hours", l = Oe;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * l) / l : t.x / l), d = O(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), u = Math.ceil(t.y / ge), y = n.findIndex((Y, U, F) => F.slice(0, U + 1).reduce((f, x) => f + x, 0) >= u), S = s === 2 ? (a + 1) * l : a * l, w = (u - 1) * ge + ge, D = Ii(
    o[y],
    y,
    d,
    s,
    i
  ), m = O(e.startDate).isSame(O(e.endDate), "day");
  return {
    coords: { x: S, y: w },
    mouseCoords: t,
    resourceIndex: y,
    disposition: D,
    reservationData: {
      startTime: O(e.startDate).format("hh:mm A"),
      startDate: O(e.startDate).format("MMM D, YYYY"),
      endTime: O(e.endDate).format("hh:mm A"),
      endDate: O(e.endDate).format("MMM D, YYYY"),
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
    const y = "__auto_cat_" + u, S = d.min === d.max ? d.min + " pax" : d.min + "-" + d.max + " pax";
    l.push({ id: y, name: S, minPassengers: d.min, maxPassengers: d.max });
    for (const w of d.values)
      a.set(w, y);
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
var $n = {}, zi = {
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
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(zi);
const Fi = $n;
var Dn = {}, Bi = {
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
  })(Pe, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Bi);
const Hi = Dn, Wi = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = O(t.startDate).startOf("day"), l = O(t.endDate).startOf("day"), a = O(o[i].startDate).startOf("day"), d = O(o[i].endDate).startOf("day");
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
O.extend(Fi);
O.extend(Hi);
const yr = /* @__PURE__ */ new WeakMap(), ji = (e) => {
  const r = yr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = O(o.startDate), c = O(s.startDate), l = i.startOf("day").diff(c.startOf("day"), "day");
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
  const { recordsThreshold: r } = Ve(), [t, n] = pe(0), [o, s] = pe(0), i = he(null);
  ve(() => {
    i.current = document.getElementById(Ue);
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
  }, []), S = t + a[o].length, w = $e(
    () => l.slice(t, S),
    [S, l, t]
  ), D = $e(
    () => c.slice(t, S),
    [S, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: D,
    rowsPerItem: w,
    totalRowsPerPage: Vi(a[o]),
    next: d,
    previous: u,
    reset: y
  };
};
var En = {}, Xi = {
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
  })(Pe, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Xi);
const Ui = En;
var _n = {}, Ki = {
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
    function n(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = n(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, S, w) {
      var D = y + " ";
      switch (w) {
        case "m":
          return S ? "minuta" : "minutę";
        case "mm":
          return D + (s(y) ? "minuty" : "minut");
        case "h":
          return S ? "godzina" : "godzinę";
        case "hh":
          return D + (s(y) ? "godziny" : "godzin");
        case "MM":
          return D + (s(y) ? "miesiące" : "miesięcy");
        case "yy":
          return D + (s(y) ? "lata" : "lat");
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
})(Ki);
const Ji = _n;
var Tn = {}, qi = {
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
const Qi = Tn;
var An = {}, ea = {
  get exports() {
    return An;
  },
  set exports(e) {
    An = e;
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
const ta = An;
var Pn = {}, na = {
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
const ra = Pn, oa = {
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
const Kt = new da(), Mo = Gr({
  localesData: Kt.getLocales(),
  currentLocale: Kt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ua = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = pe("en"), s = Kt.getLocales(), i = le(() => {
    const u = s.find((y) => y.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && O.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [c, l] = pe(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  ve(() => {
    t == null || t.forEach((u) => {
      s.find((S) => S.id === u.id) || Kt.addLocales(u);
    });
  }, [s, t]), ve(() => {
    const u = localStorage.getItem("locale"), y = r ?? u ?? "en";
    localStorage.setItem("locale", y), o(y), l(i());
  }, [i, r]);
  const { Provider: d } = Mo;
  return /* @__PURE__ */ h(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, nt = () => tt(Mo).currentLocale.lang, fa = (e) => /* @__PURE__ */ se.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ se.createElement("defs", null, /* @__PURE__ */ se.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ se.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ se.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ se.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ se.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ se.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ha = v.div`
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
  const { feelingEmpty: r } = nt();
  return /* @__PURE__ */ B(ha, { onClick: e, children: [
    /* @__PURE__ */ h(fa, {}),
    /* @__PURE__ */ h(pa, { children: r })
  ] });
}, ga = v.div`
  position: relative;
  display: flex;
`, ya = v.div`
  position: relative;
  margin-left: ${Ne};
  display: flex;
  flex-direction: column;
  contain: paint;
`, va = v.div`
  width: calc(${({ width: e }) => e}px - ${Ne}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ne}px;
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
    reservationType: It.Tour,
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
  onItemClick: o,
  toggleTheme: s,
  topBarWidth: i,
  onEventDrop: c,
  onEventDrag: l,
  draggableConfig: a,
  onTimeRangeSelect: d,
  onMultiTimeRangeSelect: u,
  clickToAddConfig: y
}) => {
  const [S, w] = pe(ba), [D, m] = pe(e), [Y, U] = pe(!1), [F, I] = pe(!1), [f, x] = pe(""), [g, $] = pe(/* @__PURE__ */ new Set()), [b, k] = pe(/* @__PURE__ */ new Set()), V = he([]);
  ve(() => () => V.current.forEach(clearTimeout), []);
  const {
    zoom: q,
    startDate: T,
    isLoading: C,
    config: { includeTakenHoursOnWeekendsInDayView: A, showTooltip: L, showThemeToggle: P }
  } = Ve(), R = he(null), G = he(null), [ne, ie] = pe(124), {
    page: z,
    projectsPerPerson: H,
    rowsPerItem: J,
    currentPageNum: te,
    pagesAmount: M,
    next: j,
    previous: _,
    reset: Q
  } = Gi(D), { effectiveCategories: W, effectivePage: N } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: z };
    const re = Ri(z);
    if (re.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: z };
    const de = z.map((oe) => {
      if (oe.isSubcontract || oe.capacity == null)
        return oe;
      const ke = re.capacityToCategoryId.get(oe.capacity);
      return ke ? { ...oe, categoryId: ke } : oe;
    });
    return { effectiveCategories: re.categories, effectivePage: de };
  }, [t, z]), p = le(
    (re) => {
      if (g.has(re)) {
        $((oe) => {
          const ke = new Set(oe);
          return ke.delete(re), ke;
        });
        return;
      }
      if (xo()) {
        $((oe) => new Set(oe).add(re));
        return;
      }
      k((oe) => new Set(oe).add(re));
      const de = setTimeout(() => {
        $((oe) => new Set(oe).add(re)), k((oe) => {
          const ke = new Set(oe);
          return ke.delete(re), ke;
        });
      }, 190);
      V.current.push(de);
    },
    [g]
  ), X = $e(() => {
    const re = [], de = W ? [...W].sort((oe, ke) => oe.maxPassengers - ke.maxPassengers) : [];
    for (const oe of de)
      N.some((ke) => !ke.isSubcontract && ke.categoryId === oe.id) && re.push(oe.id);
    return N.some((oe) => oe.isSubcontract) && re.push("__subcontract__"), re;
  }, [W, N]), E = le(() => {
    $(/* @__PURE__ */ new Set());
  }, []), Z = le(() => {
    $(new Set(X));
  }, [X]), ee = $e(() => {
    if (b.size === 0)
      return xa;
    const re = /* @__PURE__ */ new Set();
    for (const de of N) {
      const oe = de.isSubcontract ? "__subcontract__" : de.categoryId;
      oe && b.has(oe) && re.add(de.id);
    }
    return re;
  }, [b, N]), {
    visiblePage: K,
    visibleRowsPerItem: ce,
    visibleTotalRows: ye,
    visibleProjectsPerPerson: ue,
    separatorRowIndices: xe,
    subcontractSeparatorRow: De
  } = $e(() => {
    const re = wa(N, W), de = ((W == null ? void 0 : W.length) ?? 0) > 0, oe = /* @__PURE__ */ new Map();
    z.forEach((Ye, ht) => oe.set(Ye.id, ht));
    const ke = [], Ie = [], He = [], Ge = [];
    let rt = 0, Yt = -1;
    for (const Ye of re)
      if (Ye.type === "subcontract" || Ye.type === "category" && de) {
        const pt = Ye.type === "subcontract" ? "__subcontract__" : Ye.category.id, mt = g.has(pt);
        if (Ge.push(rt), Ye.type === "subcontract" && (Yt = rt), !mt)
          for (const ot of Ye.items) {
            const Lt = oe.get(ot.id) ?? 0, Rt = J[Lt];
            ke.push(ot), Ie.push(Rt), He.push(H[Lt]), rt += Rt;
          }
      } else
        for (const pt of Ye.items) {
          const mt = oe.get(pt.id) ?? 0, ot = J[mt];
          ke.push(pt), Ie.push(ot), He.push(H[mt]), rt += ot;
        }
    const Je = Ie.reduce((Ye, ht) => Ye + ht, 0);
    return {
      visiblePage: ke,
      visibleRowsPerItem: Ie,
      visibleTotalRows: Je,
      visibleProjectsPerPerson: He,
      separatorRowIndices: Ge,
      subcontractSeparatorRow: Yt
    };
  }, [N, W, z, g, J, H]), be = he(
    kn(
      (re, de, oe, ke, Ie, He) => {
        if (!R.current)
          return;
        const { tile: Ge, segmentId: rt } = Ae(re);
        if (!rt || !Ge) {
          U(!1);
          return;
        }
        const Yt = me(rt, de), Je = R.current.getBoundingClientRect(), Ye = Ge.getBoundingClientRect(), ht = { x: re.clientX - Je.left, y: re.clientY - Je.top }, pt = {
          x: re.clientX - Je.left,
          y: re.clientY - Je.top
        }, mt = {
          x: Ye.left - Je.left,
          y: Ye.top - Je.top,
          width: Ye.width,
          height: Ye.height
        }, {
          coords: { x: ot, y: Lt },
          resourceIndex: Rt,
          disposition: Eo,
          reservationData: _o
        } = Yi(
          Yt,
          oe,
          ht,
          ke,
          Ie,
          He,
          A
        );
        w({
          coords: { x: ot, y: Lt },
          mouseCoords: pt,
          resourceIndex: Rt,
          disposition: Eo,
          reservationData: _o,
          tileBounds: mt
        }), U(!0);
      },
      4
    )
  ), ae = he(
    kn((re, de) => {
      Q(), m(
        re.map((oe) => ({
          ...oe,
          data: oe.data.filter((ke) => {
            const { title: Ie, description: He, subtitle: Ge } = ke;
            return (Ie == null ? void 0 : Ie.toLowerCase().includes(de.toLowerCase())) || (Ge == null ? void 0 : Ge.toLowerCase().includes(de.toLowerCase())) || (He == null ? void 0 : He.toLowerCase().includes(de.toLowerCase()));
          })
        })).filter((oe) => oe.data.length > 0)
      );
    }, 500)
  ), me = (re, de) => {
    if (re)
      return de.flatMap((oe) => oe.data).find((oe) => oe.segmentId === re);
  }, Ae = (re) => {
    if (!re.target)
      return { tile: null, segmentId: null };
    const de = re.target.closest("[data-segment-id]");
    return de ? { tile: de, segmentId: de.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, Le = (re) => {
    const de = re.target.value;
    x(de), ae.current.cancel(), de ? ae.current(e, de) : (Q(), m(e));
  }, fe = le(() => {
    be.current.cancel(), U(!1);
  }, []);
  return ve(() => {
    const re = (oe) => be.current(
      oe,
      e,
      T,
      ce,
      ue,
      q
    ), de = R.current;
    if (de)
      return de.addEventListener("mousemove", re), de.addEventListener("mouseleave", fe), () => {
        de.removeEventListener("mousemove", re), de.removeEventListener("mouseleave", fe);
      };
  }, [
    be,
    fe,
    ue,
    ce,
    T,
    q,
    e
  ]), ve(() => {
    f ? (ae.current.cancel(), ae.current(e, f)) : m(e);
  }, [e, f]), Jt(() => {
    const re = G.current;
    if (!re)
      return;
    const de = () => ie(re.offsetHeight);
    de();
    const oe = new ResizeObserver(de);
    return oe.observe(re), () => oe.disconnect();
  }, []), /* @__PURE__ */ B(ga, { children: [
    /* @__PURE__ */ h(
      Wc,
      {
        headerHeight: ne,
        data: N,
        categories: W,
        pageNum: te,
        pagesAmount: M,
        rows: J,
        onLoadNext: j,
        onLoadPrevious: _,
        searchInputValue: f,
        onSearchInputChange: Le,
        onItemClick: o,
        collapsedGroups: g,
        fadingGroups: b,
        onToggleGroup: p,
        allGroupIds: X,
        onExpandAll: E,
        onCollapseAll: Z
      }
    ),
    /* @__PURE__ */ B(ya, { children: [
      /* @__PURE__ */ h(
        xl,
        {
          ref: G,
          zoom: q,
          topBarWidth: i,
          showThemeToggle: P,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Ti,
        {
          data: K,
          baseData: r || e,
          zoom: q,
          rows: ye,
          ref: R,
          onTileClick: n,
          onEventDrop: c,
          onEventDrag: l,
          draggableConfig: a,
          onDragStateChange: I,
          onTimeRangeSelect: d,
          onMultiTimeRangeSelect: u,
          clickToAddConfig: y,
          separatorRowIndices: xe,
          subcontractSeparatorRow: De,
          fadingUnitIds: ee
        }
      ) : /* @__PURE__ */ h(va, { width: i, children: C ? /* @__PURE__ */ h(On, { isLoading: C, position: "left" }) : /* @__PURE__ */ h(ma, {}) }),
      L && /* @__PURE__ */ h(dd, { tooltipData: S, visible: Y && !F })
    ] })
  ] });
}, Ca = v.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Ne + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.mode === "dark" ? e.colors.primary : "#E1ECE6"};
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
`, _a = v.button`
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
`, Ta = v.span`
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
`, gt = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), Aa = () => {
  var r, t;
  const e = document.getElementById(ho);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Pa = () => {
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
  } = Ve(), { filterButtonState: a = -1 } = e, d = () => {
    var u;
    (u = document.querySelector(`#${Ue} input[placeholder]`)) == null || u.focus();
  };
  return /* @__PURE__ */ B(Ca, { width: 0, children: [
    /* @__PURE__ */ B(vr, { $at: "start", children: [
      /* @__PURE__ */ B(ka, { children: [
        /* @__PURE__ */ h(xr, { onClick: n, "aria-label": "Anterior", children: /* @__PURE__ */ h(gt, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h($a, { onClick: o, children: "Hoy" }),
        /* @__PURE__ */ h(xr, { onClick: t, "aria-label": "Siguiente", children: /* @__PURE__ */ h(gt, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
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
        /* @__PURE__ */ B(gt, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (u) => u.target.value && i(u.target.value) })
      ] }),
      /* @__PURE__ */ B(_a, { onClick: d, children: [
        /* @__PURE__ */ B(gt, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] })
    ] }),
    /* @__PURE__ */ B(vr, { $at: "end", children: [
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ B(br, { $primary: !!a, onClick: c, children: [
        /* @__PURE__ */ h(gt, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(Ta, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ B(br, { onClick: Aa, children: [
        /* @__PURE__ */ h(gt, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      l
    ] })
  ] });
}, Oa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ia = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Ya = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), La = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Ra = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Na = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), za = (e) => /* @__PURE__ */ se.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Fa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Ba = (e) => /* @__PURE__ */ se.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Ha = (e) => /* @__PURE__ */ se.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Wa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), ja = (e) => /* @__PURE__ */ se.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Za = (e) => /* @__PURE__ */ se.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Va = (e) => /* @__PURE__ */ se.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ se.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Ga = {
  add: Oa,
  subtract: Ia,
  filter: Ya,
  arrowLeft: La,
  arrowRight: Ra,
  defaultAvatar: Na,
  calendarWarning: za,
  calendarFree: Fa,
  arrowDown: Ha,
  arrowUp: Ba,
  search: Wa,
  close: ja,
  moon: Za,
  sun: Va
}, on = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = qt(), i = Ga[e];
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
}, Xa = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => Xa(e, r, t)}
`;
const Ua = v.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${fo}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${ze};
`, Ka = v.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Ja = v.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, qa = v.div`
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
`, Qa = v.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, ec = v.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, tc = v.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`, nc = v.div`
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
`, rc = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, oc = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, sc = v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, ic = v.div`
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
`, wr = "#cdd8d2", Sr = [178, 216, 195], ac = [15, 125, 102], cc = (e) => {
  const r = Math.min(1, Math.max(0, e)), t = (n) => Math.round(Sr[n] + (ac[n] - Sr[n]) * r);
  return `rgb(${t(0)}, ${t(1)}, ${t(2)})`;
}, lc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ve(), s = nt(), i = he(null), [c, l] = pe(null), a = $e(
    () => Array.from({ length: 12 }, (b, k) => O().month(k).format("MMM").toUpperCase()),
    [s]
  ), d = $e(() => O().startOf("day"), []), { domainStart: u, domainEnd: y, domainDays: S } = $e(() => {
    const b = d.subtract(3, "month").startOf("month"), k = d.add(9, "month").endOf("month");
    return { domainStart: b, domainEnd: k, domainDays: k.diff(b, "day") + 1 };
  }, [d]), w = (b) => b.diff(u, "day") / S * 100, D = (b) => Math.min(100, Math.max(0, b)), m = $e(() => {
    const b = [];
    let k = u.startOf("month");
    for (; k.isBefore(y); )
      b.push(k), k = k.add(1, "month");
    return b;
  }, [u, y]), Y = o == null ? void 0 : o.yearCounts, U = $e(() => {
    const b = Math.ceil(S / 7), k = new Array(b).fill(0), V = (R) => {
      const G = R.diff(u, "day");
      return G < 0 || G >= S ? -1 : Math.floor(G / 7);
    };
    if (Y && Y.length)
      for (const R of Y) {
        const G = V(O(R.date));
        G >= 0 && (k[G] += R.count);
      }
    else
      for (const R of t ?? [])
        for (const G of R.data ?? []) {
          const ne = V(O(G.startDate));
          ne >= 0 && (k[ne] += 1);
        }
    const q = Math.max(0, ...k);
    if (q <= 0)
      return k.map(() => ({ h: 0, color: wr }));
    const T = k.filter((R) => R > 0).sort((R, G) => R - G), C = T.length >> 1, A = T.length % 2 ? T[C] : (T[C - 1] + T[C]) / 2, L = A > 0 ? q / A : 1, P = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, L)))));
    return k.map(
      (R) => R > 0 ? { h: Math.min(100, 100 * Math.pow(R / q, P)), color: cc(R / q) } : { h: 0, color: wr }
    );
  }, [t, Y, u, S]), F = w(d), I = (b) => {
    const { startDate: k, endDate: V } = en(b, r), q = D(w(k));
    return { left: q, width: D(w(V)) - q, startDate: k, endDate: V };
  }, f = I(e), x = c ? I(c.d) : null, g = (b) => `${b.date()} ${a[b.month()]}`, $ = (b) => {
    var q;
    const k = (q = i.current) == null ? void 0 : q.getBoundingClientRect();
    if (!k)
      return null;
    const V = Math.min(1, Math.max(0, (b - k.left) / k.width));
    return { f: V, d: u.add(Math.round(V * (S - 1)), "day") };
  };
  return /* @__PURE__ */ B(Ua, { children: [
    /* @__PURE__ */ B(Ka, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ B(
      Ja,
      {
        ref: i,
        onClick: (b) => {
          const k = $(b.clientX);
          k && n(k.d.toDate());
        },
        onMouseMove: (b) => {
          const k = $(b.clientX);
          k && l({ left: k.f * 100, d: k.d });
        },
        onMouseLeave: () => l(null),
        children: [
          /* @__PURE__ */ h(qa, { children: m.map((b, k) => /* @__PURE__ */ h("span", { style: { left: `${w(b)}%` }, children: k === 0 || b.month() === 0 ? `${a[b.month()]} ${b.format("YY")}` : a[b.month()] }, k)) }),
          m.map(
            (b, k) => k === 0 ? null : /* @__PURE__ */ h(Qa, { style: { left: `${w(b)}%` } }, k)
          ),
          /* @__PURE__ */ h(ec, { children: U.map((b, k) => /* @__PURE__ */ h(tc, { style: { height: `${b.h}%`, background: b.color } }, k)) }),
          /* @__PURE__ */ h(rc, { style: { left: `${f.left}%`, width: `${f.width}%` } }),
          /* @__PURE__ */ h(nc, { style: { left: `${D(F)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && x && /* @__PURE__ */ B(Te, { children: [
            /* @__PURE__ */ h(oc, { style: { left: `${x.left}%`, width: `${x.width}%` } }),
            /* @__PURE__ */ h(sc, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(ic, { style: { left: `${c.left}%` }, children: `Ir a ${g(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, dc = v.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, uc = v.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? fo : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, fc = v.div`
  position: relative;
`, hc = ({
  data: e,
  baseData: r,
  categories: t,
  onTileClick: n,
  topBarWidth: o,
  onItemClick: s,
  toggleTheme: i,
  onEventDrop: c,
  onEventDrag: l,
  draggableConfig: a,
  schedulerRef: d,
  onTimeRangeSelect: u,
  onMultiTimeRangeSelect: y,
  clickToAddConfig: S
}) => {
  const { goToDate: w, handleGoToday: D, zoomIn: m, zoomOut: Y, zoom: U } = Ve();
  return Xr(
    d,
    () => ({
      goToDate: w,
      goToToday: D,
      setZoom: (F) => {
        if (!go(F))
          return;
        const I = F - U;
        if (I > 0)
          for (let f = 0; f < I; f++)
            m();
        else
          for (let f = 0; f < Math.abs(I); f++)
            Y();
      }
    }),
    [w, D, U, m, Y]
  ), /* @__PURE__ */ h(
    Sa,
    {
      data: e,
      baseData: r,
      categories: t,
      onTileClick: n,
      topBarWidth: o,
      onItemClick: s,
      toggleTheme: i,
      onEventDrop: c,
      onEventDrag: l,
      draggableConfig: a,
      onTimeRangeSelect: u,
      onMultiTimeRangeSelect: y,
      clickToAddConfig: S
    }
  );
}, Qd = In(function({
  data: r,
  categories: t,
  baseData: n,
  config: o,
  startDate: s,
  onRangeChange: i,
  onTileClick: c,
  handleToggleDisplayActiveUnits: l,
  onClearFilterData: a,
  toolbarActions: d,
  onItemClick: u,
  isLoading: y,
  onEventDrop: S,
  onEventDrag: w,
  draggableConfig: D,
  onTimeRangeSelect: m,
  onMultiTimeRangeSelect: Y,
  clickToAddConfig: U
}, F) {
  var L;
  const I = $e(
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
  ), f = he(null), x = he(null), [g, $] = pe((L = f.current) == null ? void 0 : L.clientWidth), b = $e(() => O(s), [s]), [k, V] = pe(I.defaultTheme ?? "light"), q = () => {
    V(k === "light" ? "dark" : "light");
  }, T = k === "light" ? Is : Ys, C = I.theme ? I.theme[T.mode] : {}, A = {
    ...T,
    colors: {
      ...T.colors,
      ...C
    }
  };
  return Xr(
    F,
    () => ({
      goToDate: (P) => {
        var R;
        return (R = x.current) == null ? void 0 : R.goToDate(P);
      },
      goToToday: () => {
        var P;
        return (P = x.current) == null ? void 0 : P.goToToday();
      },
      setZoom: (P) => {
        var R;
        return (R = x.current) == null ? void 0 : R.setZoom(P);
      }
    }),
    []
  ), Jt(() => {
    const P = () => {
      f.current && $(f.current.clientWidth);
    };
    P(), window.addEventListener("resize", P);
    let R;
    const G = f.current;
    return G && typeof ResizeObserver < "u" && (R = new ResizeObserver(P), R.observe(G)), () => {
      window.removeEventListener("resize", P), R == null || R.disconnect();
    };
  }, []), /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h(Os, {}),
    /* @__PURE__ */ h(_s, { theme: A, children: /* @__PURE__ */ h(ua, { lang: I.lang, translations: I.translations, children: /* @__PURE__ */ h(
      Si,
      {
        data: r,
        isLoading: !!y,
        config: I,
        onRangeChange: i,
        defaultStartDate: b,
        handleToggleDisplayActiveUnits: l,
        onClearFilterData: a,
        toolbarActions: d,
        children: /* @__PURE__ */ B(dc, { id: ho, children: [
          /* @__PURE__ */ h(
            uc,
            {
              showScroll: !!r.length,
              $footer: I.showOverview !== !1 && !!r.length,
              id: Ue,
              ref: f,
              children: /* @__PURE__ */ h(fc, { children: /* @__PURE__ */ h(
                hc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: g ?? 0,
                  onItemClick: u,
                  toggleTheme: q,
                  onEventDrop: S,
                  onEventDrag: w,
                  draggableConfig: D,
                  schedulerRef: x,
                  onTimeRangeSelect: m,
                  onMultiTimeRangeSelect: Y,
                  clickToAddConfig: U
                }
              ) })
            }
          ),
          I.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(lc, {})
        ] })
      }
    ) }) })
  ] });
}), pc = v.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, mc = v.button`
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
`, gc = v.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, yc = v.p`
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
  const { loadNext: i, loadPrevious: c } = nt(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(pc, { intent: e, children: /* @__PURE__ */ B(mc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(gc, { children: t }),
    /* @__PURE__ */ h(yc, { children: l })
  ] }) });
}, vc = v.div`
  min-width: ${Ne + "px"};
  max-width: ${Ne + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, xc = v.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({ $height: e }) => e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ne}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, bc = v.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, wc = v.input`
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
`, Sc = v.div`
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
`, Cc = je`
  from { opacity: 1; }
  to { opacity: 0; }
`, Mr = v.div`
  ${({ $fading: e }) => e && dt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Cc} 180ms ease forwards;
      }
    `}
`, Mc = v.button`
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
`, kc = je`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, $c = v.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ge}px;
  height: calc(${ge}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBorder + "33" : e.colors.border};
  border-left: 3px solid
    ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBorder : "transparent"};
  background-color: ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBg : "transparent"};
  /* Scope the transition to paint-only props. It was transition:0.5s ease (= transition:all), which animated the row
     height (a LAYOUT property) for 500ms on every add/remove/collapse — layout thrash that made rowIn hitch. */
  transition: background-color 0.15s ease, border-color 0.15s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${kc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Dc = v.div`
  display: flex;
  align-items: center;
`, Ec = v.div`
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
`, _c = v.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Tc = v.div`
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
`, Ac = v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`, Pc = v.span`
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
`, Oc = v.span`
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
`, Ic = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Yc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: [
  /* @__PURE__ */ h("circle", { cx: "9", cy: "8", r: "3.2" }),
  /* @__PURE__ */ h("path", { d: "M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z" }),
  /* @__PURE__ */ h("circle", { cx: "16.8", cy: "8.6", r: "2.5" }),
  /* @__PURE__ */ h("path", { d: "M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8" })
] }), Lc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Rc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Nc = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  $c,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ B(Dc, { children: [
      /* @__PURE__ */ h(Ec, { $provider: o, children: Ic(r.icon) ? /* @__PURE__ */ h(_c, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Rc, {}) : /* @__PURE__ */ h(Lc, {}) }),
      /* @__PURE__ */ B(Tc, { children: [
        /* @__PURE__ */ h(kr, { isMain: !0, children: r.title }),
        r.capacity != null || r.plate ? /* @__PURE__ */ B(Ac, { children: [
          r.capacity != null && /* @__PURE__ */ B(Pc, { title: `${r.capacity} pasajeros`, children: [
            /* @__PURE__ */ h(Yc, {}),
            r.capacity
          ] }),
          r.plate && /* @__PURE__ */ h(Oc, { title: r.plate, children: r.plate })
        ] }) : r.subtitle && /* @__PURE__ */ h(kr, { children: r.subtitle })
      ] })
    ] })
  }
), zc = v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  background: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder + "24" : "#E1ECE6"};
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
`, Fc = v.span`
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
`, Bc = v.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  flex-shrink: 0;
`, Hc = v.div`
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
}) => /* @__PURE__ */ B(zc, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ h(Hc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(Fc, { $variant: o, children: e }),
  /* @__PURE__ */ h(Bc, { $variant: o, children: r })
] }), Wc = ({
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
  allGroupIds: w,
  onExpandAll: D,
  onCollapseAll: m
}) => {
  const [Y, U] = pe(!1), F = nt(), I = () => U((C) => !C), f = r ? [...r].sort((C, A) => C.maxPassengers - A.maxPassengers) : [], x = f.length > 0, g = w.length > 0, $ = g && u.size === w.length;
  g && u.size;
  const b = e.filter((C) => C.isSubcontract), k = F.subcontract ?? "Subcontract", V = (C) => {
    const A = e.indexOf(C);
    return /* @__PURE__ */ h(
      Nc,
      {
        id: C.id,
        item: C.label,
        rows: n[A],
        onItemClick: d,
        isSubcontract: C.isSubcontract
      },
      C.id
    );
  }, q = (C) => {
    const A = e.filter(
      (G) => !G.isSubcontract && G.categoryId === C.id
    );
    if (A.length === 0)
      return null;
    const L = u.has(C.id), P = y.has(C.id), R = C.name;
    return /* @__PURE__ */ B("div", { children: [
      /* @__PURE__ */ h(
        $r,
        {
          label: R,
          count: A.length,
          isCollapsed: L || P,
          onToggle: () => S(C.id),
          variant: "category"
        }
      ),
      !L && /* @__PURE__ */ h(Mr, { $fading: P, children: A.map(V) })
    ] }, C.id);
  }, T = e.filter(
    (C) => !C.isSubcontract && (!C.categoryId || !x)
  );
  return /* @__PURE__ */ B(vc, { children: [
    /* @__PURE__ */ B(xc, { $height: t, children: [
      /* @__PURE__ */ B(bc, { children: [
        /* @__PURE__ */ B(Sc, { isFocused: Y, children: [
          /* @__PURE__ */ h(
            wc,
            {
              placeholder: F.search,
              value: l,
              onChange: a,
              onFocus: I,
              onBlur: I
            }
          ),
          /* @__PURE__ */ h(on, { iconName: "search" })
        ] }),
        g && /* @__PURE__ */ h(
          Mc,
          {
            title: $ ? "Expand all" : "Collapse all",
            onClick: $ ? D : m,
            $allCollapsed: $,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: $ ? /* @__PURE__ */ B(Te, { children: [
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
    x ? f.map(q) : T.map(V),
    x && T.length > 0 && T.map(V),
    b.length > 0 && /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(
        $r,
        {
          label: k,
          count: b.length,
          isCollapsed: u.has("__subcontract__") || y.has("__subcontract__"),
          onToggle: () => S("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !u.has("__subcontract__") && /* @__PURE__ */ h(Mr, { $fading: y.has("__subcontract__"), children: b.map(V) })
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
}, jc = v.div`
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
`, Zc = je`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Vc = v.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Zc} 1s infinite;
`, Gc = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(jc, { position: r, children: /* @__PURE__ */ h(Vc, {}) }) : null, On = Gc, Ke = (e, r) => {
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
    strokeStyle: w,
    labelBetweenCells: D
  } = e;
  t.beginPath();
  const m = w ?? (r.mode === "dark" ? r.colors.border : "#E4EAE7");
  if (t.strokeStyle = m, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), D ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : (t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke()), t.font = a;
    const Y = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.mode === "dark" ? r.colors.textPrimary : "#183D3D", t.fillText(l, Y, c);
  }
  if (d && u && y && S) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.beginPath(), t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke(), t.font = y.font;
    const Y = n + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, Y, y.y), t.font = S.font;
    const U = n + s / 2 - t.measureText(S.label).width / 2;
    t.fillStyle = S.color, t.fillText(S.label, U, S.y);
  }
}, Xc = (e, r, t, n, o = ft) => {
  const s = Ze + o, i = s + 13, c = s + 27;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = mo(
      O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    ), u = d.isCurrentDay;
    if (Ke(
      {
        ctx: e,
        x: l,
        y: s,
        width: Ee,
        height: it,
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
          font: `600 10px ${ze}`,
          color: n.mode === "dark" ? n.colors.placeholder : "#74897F"
        },
        bottomText: {
          y: c,
          label: `${d.dayOfMonth}`,
          font: u ? `700 12px ${ze}` : `700 13px ${ze}`,
          color: u ? n.colors.today : n.mode === "dark" ? n.colors.textPrimary : "#183D3D"
        }
      },
      n
    ), u) {
      const w = l + Ee / 2, D = i - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(w - 30 / 2, D, 30, 13, 5) : e.rect(w - 30 / 2, D, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${ze}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", w, D + 13 / 2 + 0.5), e.restore();
    }
    d.dayOfMonth === 1 && (e.save(), e.strokeStyle = n.mode === "dark" ? n.colors.today : "#5C8374", e.setLineDash([]), e.beginPath(), e.moveTo(l + 0.5, 0), e.lineTo(l + 0.5, s + it), e.stroke(), e.restore()), l += Ee;
  }
}, Uc = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Be;
  const s = Ze;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= vn && (c = 0);
    const a = po(t, l) * Be;
    Ke(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: ft,
        textYPos: uo,
        label: O().month(c).format("MMMM").toUpperCase(),
        font: et.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, Kc = (e, r, t) => {
  let o = 0, s = 0, i = O(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * Ee + Ee;
  for (let c = 0; c < vn; c++)
    i > vn - 1 && (i = 0), s = O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * Ee, Ke(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Ze,
        textYPos: Fn,
        label: O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: `800 12px ${ze}`
      },
      t
    ), o += s, i++;
}, Jc = (e, r, t, n) => {
  const o = 7 * Ee, s = Ze, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (c + a) % lr;
    u <= 0 && (u += lr), d !== 1 && a === 0 && (l = -d * Ee + Ee), Ke(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: ft,
        textYPos: uo,
        label: `${t.toUpperCase()} ${u}`,
        font: et.middleRow
      },
      n
    ), l += o;
  }
}, qc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, Qc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, el = (e, r, t, n, o) => {
  const s = Xt - it / 1.6, i = Xt - it / 4.5, c = Ze + ft;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = d.isSame(O(), "week");
    Ke(
      {
        ctx: e,
        x: l,
        y: c,
        width: Mt,
        height: it,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: u ? o.colors.today + "26" : qc({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: u ? `700 14px ${ze}` : et.bottomRow.name,
          color: u ? o.colors.today : Qc({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: et.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Mt;
  }
}, tl = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (fr(s) - t + 1) * Be, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = fr(s + l) * Be), d + a > i && l > 0 && (a = Math.ceil((i - d) / Be) * Be), Ke(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Ze,
        textYPos: Fn,
        label: (s + l).toString(),
        font: et.topRow
      },
      n
    ), c += a, d += a, l++;
}, nl = (e, r, t, n) => {
  const o = Math.floor(r / Ut) + 2, s = Ut * Oe;
  let l = -O(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Oe + 0.5 * Oe;
  for (let a = 0; a < o; a++) {
    const d = O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Ke(
      {
        ctx: e,
        x: l,
        y: kt,
        width: s,
        height: Ot,
        textYPos: kt + Ot / 2 + 2,
        label: d,
        font: et.bottomRow.number
      },
      n
    ), l += s;
  }
}, rl = (e, r, t, n) => {
  const o = Math.ceil(r / Ut), s = O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * Oe;
  for (let u = 0; u < a; u++) {
    const y = O(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), w = O(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), D = w.format("MMMM").toUpperCase(), m = w.diff(y, "hour") + 1, Y = u === 0 ? m * Oe : r * Oe;
    Ke(
      {
        ctx: e,
        x: d,
        y: 0,
        width: Y,
        height: kt,
        textYPos: Fn,
        label: D,
        font: et.topRow
      },
      n
    ), d += Y;
  }
}, ol = (e, r, t, n) => {
  let o = 0;
  const s = kt + Ot, i = O(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Oe;
  for (let l = 0; l < r; l++) {
    const a = i.add(l, "hours").format("h:00a").toUpperCase();
    Ke(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: yn,
        label: a,
        font: et.bottomRow.hoursInDay,
        textYPos: kt + Ot + yn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Oe;
  }
}, sl = (e, r, t, n, o, s, i, c = !0) => {
  switch (r) {
    case 0:
      tl(e, n, s, i), Uc(e, t, n, i), el(e, t, n, o, i);
      break;
    case 1:
      Kc(e, n, i), c && Jc(e, n, o, i), Xc(e, t, n, i, c ? ft : 0);
      break;
    case 2:
      rl(e, t, n, i), nl(e, t, n, i), ol(e, t, n, i);
      break;
  }
}, il = v.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, al = v.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, cl = v.div`
  height: ${({ $height: e }) => e ?? Xt}px;
  display: block;
`, ll = v.canvas``, dl = {
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
}, Fe = ({
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
    children: dl[e]
  }
), ul = v.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Ne + 16}px;
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
`, fl = v.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, hl = v.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, pl = v.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, ml = v.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, gl = v.span`
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
`, yl = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], vl = () => /* @__PURE__ */ B(ul, { children: [
  /* @__PURE__ */ h(Dr, { children: "Leyenda" }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(Fe, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(Fe, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(Fe, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(fl, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(hl, {}),
  /* @__PURE__ */ B(Dr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  yl.map((e) => /* @__PURE__ */ B(pl, { children: [
    /* @__PURE__ */ h(ml, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(gl, { style: { color: e.color }, children: /* @__PURE__ */ h(Fe, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), xl = In(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = nt(), { date: c, cols: l, dayOfYear: a, startDate: d, config: u } = Ve(), y = he(null), S = qt(), w = u.showWeekRow !== !1, D = r === 2 ? Ls : r === 1 && !w ? Ze + it : Xt, m = le(
    (Y) => {
      const U = jn(), F = D + 1;
      vo(Y, U, F), sl(Y, r, l, d, i, a, S, w);
    },
    [l, a, d, i, r, S, w, D]
  );
  return ve(() => {
    if (!y.current)
      return;
    const Y = y.current.getContext("2d");
    if (!Y)
      return;
    const U = () => m(Y);
    return window.addEventListener("resize", U), () => window.removeEventListener("resize", U);
  }, [m]), ve(() => {
    const Y = y.current;
    if (!Y)
      return;
    Y.style.letterSpacing = "1px";
    const U = Y.getContext("2d");
    U && m(U);
  }, [c, r, m]), /* @__PURE__ */ B(il, { ref: s, children: [
    (u.showTopbar !== !1 || u.showLegend !== !1) && /* @__PURE__ */ B(al, { $width: t, children: [
      u.showTopbar !== !1 && /* @__PURE__ */ h(Pa, { width: t, showThemeToggle: n, toggleTheme: o }),
      u.showLegend !== !1 && /* @__PURE__ */ h(vl, {})
    ] }),
    /* @__PURE__ */ h(cl, { $height: D, id: Rs, children: /* @__PURE__ */ h(ll, { ref: y }) })
  ] });
}), bl = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Be;
      break;
    case 2:
      n = Oe;
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
}, wl = (e, r, t, n, o, s) => {
  const i = e * ge + Ns, c = r.hour(), l = t.hour();
  let a, d, u, y;
  switch (s) {
    case 2: {
      a = O(n), d = O(o), u = O(r).hour(c).minute(0), y = O(t).hour(l).minute(0);
      break;
    }
    default: {
      a = O(n).hour(0).minute(0), d = O(o).hour(23).minute(59), u = r, y = t;
      break;
    }
  }
  return {
    ...bl(
      { startDate: a, endDate: d },
      { startDate: u, endDate: y },
      s
    ),
    y: i
  };
}, ko = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, $o = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2", label: "Sin chofer" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22", label: "No notificado al chofer" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0", label: "Notificado" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63", label: "Confirmado" }
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
  ${ut}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const Sl = je`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, Cl = je`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, Ml = v.button`
  ${$t}
  position: absolute;
  height: ${Qt}px;
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
  cursor: ${({ isDraggable: e, isDragging: r }) => e ? r ? "grabbing" : "grab" : "not-allowed"};
  opacity: ${({ isDragging: e }) => e ? 0.3 : 1};
  transition: opacity 0.2s ease;
  /* Motion (gated on reduced-motion): fade/scale a newly-mounted tile in, fade a removed one out, and a subtle lift
     on hover. Only transform/opacity/box-shadow are transitioned — NOT top: transitioning top animated a LAYOUT
     property on every displaced tile on unit add/remove (reflow+paint per frame across many nodes = the reported
     lag), and it made the tiles glide while the canvas grid lane snaps. Tiles now snap to their new row in lockstep
     with the canvas; the enter/exit fades + the left-column rowIn carry the motion. */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Sl} 180ms ease-out;
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
  ${({ $exiting: e }) => e && dt`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Cl} 190ms ease-out forwards;
      }
    `}
  /* Persistent green highlight for the event focused from a warning: a bold green ring + glow + an inset green wash
     over the tile bg (below the text, which stays readable). Lifted above neighbours so the ring isn't clipped. */
  ${({ $highlighted: e }) => e && `z-index: 9;
     box-shadow: 0 0 0 3px #0F7D66, 0 0 16px 3px rgba(15, 125, 102, 0.55), inset 0 0 0 200px rgba(15, 125, 102, 0.3);`}
  /* Focus-mode: rows outside the focused set fade back and go inert. */
  ${({ $dimmed: e }) => e && "opacity: 0.26; filter: grayscale(0.45); pointer-events: none;"}
  /* Focus-mode: a blocking service that will vacate the target unit — amber dashed outline, faded. */
  ${({ $leaving: e }) => e && "opacity: 0.74; filter: grayscale(0.2); outline: 2px dashed #D98A22; outline-offset: -2px; z-index: 7;"}
`, kl = v.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`, $l = v.div`
  position: sticky;
  left: ${Ne + 4}px;
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
`, Dl = v.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, El = v.span`
  ${ut}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, _l = v.span`
  ${ut}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Tl = v.span`
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
`, Al = v.div`
  ${ut}
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
`, Pl = v.div`
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
`, Ol = je`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`, Il = v.div`
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
    animation: ${Ol} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`, Yl = v.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`, Ll = v.div`
  ${ut}
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
`, Rl = v.div`
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
`, Nl = v.span`
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
`, zl = v.span`
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
`, Fl = 34, Bl = "#3E8E5A", Hl = "#D98A22", sn = ({
  row: e,
  data: r,
  zoom: t,
  isSubcontract: n = !1,
  onTileClick: o,
  onDragStart: s,
  isDragging: i = !1,
  isDraggable: c = !0,
  yOffset: l = 0,
  exiting: a = !1,
  highlighted: d = !1,
  dimmed: u = !1,
  leaving: y = !1,
  ghost: S = !1,
  ghostBadge: w = ""
}) => {
  const { date: D } = Ve(), m = en(D, t), { y: Y, x: U, width: F } = wl(
    e,
    m.startDate,
    m.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: I } = qt(), f = he(null), x = O(r.startDate).isSame(O(r.endDate), "day"), g = r.eventType === It.Tour, $ = r.eventType === It.Transfer, b = x && (g || $);
  if (S)
    return /* @__PURE__ */ B(Il, { style: { left: `${U}px`, top: `${Y + l}px`, width: `${F}px` }, children: [
      /* @__PURE__ */ B(Yl, { children: [
        /* @__PURE__ */ B(Ll, { children: [
          /* @__PURE__ */ h(Fe, { name: $ ? "transfer" : "tour" }),
          r.title
        ] }),
        /* @__PURE__ */ B(Rl, { children: [
          /* @__PURE__ */ h(Fe, { name: "check", strokeWidth: 2.6 }),
          "flota propia"
        ] })
      ] }),
      w && /* @__PURE__ */ h(Nl, { children: w })
    ] });
  const k = (P) => {
    f.current = { x: P.clientX, y: P.clientY }, c && s && (P.preventDefault(), s(r, P));
  }, V = (P) => {
    if (f.current) {
      const R = Math.abs(P.clientX - f.current.x), G = Math.abs(P.clientY - f.current.y);
      Math.sqrt(R * R + G * G) <= 5 && (o == null || o(r)), f.current = null;
    } else
      o == null || o(r);
  }, q = {
    left: `${U}px`,
    top: `${Y + l}px`,
    backgroundColor: `${r.bgColor ?? I.defaultTile}`,
    width: `${F}px`,
    color: ko(r.bgColor ?? "")
  }, T = !n && r.readiness ? $o[r.readiness] : null, C = n && r.subcontractConfirmed === !1, A = n ? C ? Hl : Bl : T == null ? void 0 : T.stripe, L = (P) => /* @__PURE__ */ B(
    Ml,
    {
      "data-segment-id": r.segmentId,
      style: q,
      onClick: V,
      onMouseDown: k,
      onDragStart: (R) => R.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: C,
      $exiting: a,
      $highlighted: d,
      $dimmed: u,
      $leaving: y,
      children: [
        A && /* @__PURE__ */ h(kl, { style: { background: A } }),
        y && /* @__PURE__ */ h(zl, { children: "Sub" }),
        P
      ]
    }
  );
  return L(
    b ? /* @__PURE__ */ B(Te, { children: [
      (n || T) && /* @__PURE__ */ h(_r, { $sm: !0, children: n ? /* @__PURE__ */ h(Ar, { children: "SUB" }) : T && /* @__PURE__ */ h(Tr, { $sm: !0, style: { color: T.color }, children: /* @__PURE__ */ h(Fe, { name: T.icon, strokeWidth: T.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ B(Pl, { $transfer: $, children: [
        /* @__PURE__ */ h(Fe, { name: $ ? "transfer" : "sun", strokeWidth: 2.4 }),
        F >= Fl && /* @__PURE__ */ B(Te, { children: [
          /* @__PURE__ */ h(Pr, { children: O(r.startDate).format("h:mm A") }),
          !$ && /* @__PURE__ */ h(Pr, { $end: !0, children: O(r.endDate).format("h:mm A") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(_r, { children: n ? /* @__PURE__ */ h(Ar, { children: "SUB" }) : T && /* @__PURE__ */ h(Tr, { style: { color: T.color }, children: /* @__PURE__ */ h(Fe, { name: T.icon, strokeWidth: T.icon === "check" ? 2.6 : 2.2 }) }) }),
      r.bookingNumber && /* @__PURE__ */ h(Tl, { children: r.bookingNumber }),
      /* @__PURE__ */ B($l, { children: [
        /* @__PURE__ */ B(Er, { $pad: !0, children: [
          /* @__PURE__ */ h(Dl, { children: /* @__PURE__ */ h(Fe, { name: $ ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(El, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(Er, { children: /* @__PURE__ */ h(_l, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ B(Al, { children: [
          /* @__PURE__ */ h(Fe, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Or = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Re;
}, Wl = je`
  from { opacity: 0; }
  to { opacity: 1; }
`, jl = je`
  from { opacity: 1; }
  to { opacity: 0; }
`, Zl = v.div`
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
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Wl} 200ms ease-out;
  }
  ${({ $fading: e }) => e && dt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${jl} 180ms ease forwards;
      }
    `}
  ${({ $dimmed: e }) => e && "opacity: 0.28;"}
`, Vl = (e) => ({
  segmentId: e.segmentId,
  reservationId: e.reservationId,
  startDate: e.startDate,
  endDate: e.endDate,
  occupancy: 0,
  title: e.title,
  bookingNumber: "",
  eventType: e.eventType
}), Gl = ({
  data: e,
  zoom: r,
  onTileClick: t,
  onDragStart: n,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = [],
  fadingUnitIds: c,
  highlightedSegmentId: l,
  focusedUnitIds: a,
  leavingSegmentIds: d,
  ghostProject: u
}) => {
  const { nodes: y, liveMap: S } = $e(() => {
    const F = /* @__PURE__ */ new Map(), I = !!a && a.length > 0;
    let f = 0;
    return { nodes: e.map((g, $) => {
      $ > 0 && (f += Math.max(e[$ - 1].data.length, 1));
      const b = !!(c != null && c.has(g.id)), k = I && !a.includes(g.id), V = Or(f, i), q = u && g.id === u.targetUnitId ? /* @__PURE__ */ h(
        sn,
        {
          row: f,
          data: Vl(u),
          zoom: r,
          yOffset: V,
          isDragging: !1,
          isDraggable: !1,
          ghost: !0,
          ghostBadge: u.badge
        },
        `ghost-${g.id}`
      ) : null;
      if (!g.data.some((C) => C.length > 0)) {
        const C = [
          /* @__PURE__ */ h(
            Zl,
            {
              $fading: b,
              $dimmed: k,
              style: { top: `${f * ge + V}px` },
              children: "Disponible"
            },
            `dispo-${g.id}`
          )
        ];
        return q && C.push(q), C;
      }
      const T = g.data.map(
        (C, A) => C.map((L) => {
          const P = s === L.segmentId, R = o ? o(L) : !1, G = A + f, ne = Or(G, i);
          return F.set(L.segmentId, {
            project: L,
            absoluteRow: G,
            yOffset: ne,
            isSubcontract: !!g.isSubcontract
          }), /* @__PURE__ */ h(
            sn,
            {
              row: G,
              data: L,
              zoom: r,
              isSubcontract: g.isSubcontract,
              onTileClick: t,
              onDragStart: n,
              isDragging: P,
              isDraggable: R,
              yOffset: ne,
              exiting: b,
              highlighted: l != null && L.segmentId === l,
              dimmed: k,
              leaving: !!(d != null && d.includes(L.segmentId))
            },
            L.segmentId
          );
        })
      );
      return q ? [...T, [q]] : T;
    }).flat(2), liveMap: F };
  }, [e, t, r, n, o, s, i, c, l, a, d, u]), w = he(/* @__PURE__ */ new Map()), D = he([]), [m, Y] = pe([]);
  ve(() => () => D.current.forEach(clearTimeout), []), ve(() => {
    const F = w.current;
    w.current = S;
    const I = [];
    if (F.forEach((g, $) => {
      S.has($) || I.push(g);
    }), Y((g) => {
      let $ = g.filter((b) => !S.has(b.project.segmentId));
      for (const b of I)
        $.some((k) => k.project.segmentId === b.project.segmentId) || ($ = [...$, b]);
      return $;
    }), !I.length)
      return;
    const f = new Set(I.map((g) => g.project.segmentId)), x = setTimeout(() => {
      Y((g) => g.filter(($) => !f.has($.project.segmentId)));
    }, 220);
    D.current.push(x);
  }, [S]);
  const U = m.filter((F) => !S.has(F.project.segmentId)).map((F) => /* @__PURE__ */ h(
    sn,
    {
      row: F.absoluteRow,
      data: F.project,
      zoom: r,
      isSubcontract: F.isSubcontract,
      yOffset: F.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    F.project.segmentId
  ));
  return /* @__PURE__ */ h(Te, { children: [...y, ...U] });
}, Xl = Gl;
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
const Ul = v.div`
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
`, Kl = v.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, Jl = v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, ql = v.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Ql = v.span`
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
`, ed = v.div`
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
`, td = v.div`
  ${$t}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, nd = v.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, rd = v.div`
  padding: 10px 12px;
`, od = v.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Ir = v.div`
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
`, sd = v.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, id = v.div`
  min-width: 0;
`, ad = v.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, cd = v.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, zr = v.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Dt = v.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Et = v.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, _t = v.div`
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
const ld = {
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
}, dd = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = he(null), [s, i] = pe("below"), c = nt(), l = { ...ld, ...c.tooltip };
  Jt(() => {
    if (!o.current || !t)
      return;
    const D = o.current, { width: m, height: Y } = D.getBoundingClientRect(), U = D.parentElement;
    if (!U)
      return;
    const F = U.getBoundingClientRect(), I = 12, f = 4, x = F.height - t.y, g = F.width - t.x;
    let $ = t.x + I, b = t.y + I, k = "below";
    g < m + I && ($ = t.x - m - I), x < Y + I && (b = t.y - Y - I, k = "above"), $ = Math.max(f, Math.min($, F.width - m - f)), b = Math.max(f, Math.min(b, F.height - Y - f)), i(k), D.style.left = `${$}px`, D.style.top = `${b}px`;
  }, [t]);
  const a = n.reservationType === It.Tour, d = a && n.isOneDayEvent, u = a ? d ? "sun" : "tour" : "transfer", y = a ? d ? l.oneDay : l.tour : l.transfer, S = n.readiness ? $o[n.readiness] : null, w = [
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ B(Ul, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ B(Kl, { children: [
      /* @__PURE__ */ B(Jl, { children: [
        /* @__PURE__ */ h(ql, { children: n.bookingNumber }),
        /* @__PURE__ */ B(Ql, { children: [
          /* @__PURE__ */ h(Fe, { name: u, strokeWidth: 2.4 }),
          y
        ] })
      ] }),
      /* @__PURE__ */ h(td, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(nd, { children: n.client }),
      S && /* @__PURE__ */ B(ed, { style: { color: S.color }, children: [
        /* @__PURE__ */ h(Fe, { name: S.icon, strokeWidth: S.icon === "check" ? 2.6 : 2.2 }),
        S.label
      ] })
    ] }),
    /* @__PURE__ */ B(rd, { children: [
      /* @__PURE__ */ B(od, { children: [
        /* @__PURE__ */ B(Ir, { children: [
          /* @__PURE__ */ h(Yr, { children: l.startDate }),
          /* @__PURE__ */ B(Lr, { children: [
            /* @__PURE__ */ h(Rr, { children: n.startDate }),
            /* @__PURE__ */ h(Nr, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ B(Ir, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Yr, { children: l.endDate }),
          /* @__PURE__ */ B(Lr, { children: [
            /* @__PURE__ */ h(Rr, { children: n.endDate }),
            /* @__PURE__ */ h(Nr, { children: n.endTime })
          ] })
        ] })
      ] }),
      w.length > 0 && /* @__PURE__ */ h(sd, { children: w.map((D, m) => /* @__PURE__ */ B(id, { children: [
        /* @__PURE__ */ h(ad, { children: D.label }),
        /* @__PURE__ */ h(cd, { children: D.value })
      ] }, m)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ B(zr, { children: [
        n.departureAddress && /* @__PURE__ */ B(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.salida }),
          /* @__PURE__ */ h(_t, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ B(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.destino }),
          /* @__PURE__ */ h(_t, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ B(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.regreso }),
          /* @__PURE__ */ h(_t, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ B(zr, { children: [
        n.serviceNotes && /* @__PURE__ */ B(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.serviceNotes }),
          /* @__PURE__ */ h(_t, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ B(Dt, { children: [
          /* @__PURE__ */ h(Et, { children: l.reservationNotes }),
          /* @__PURE__ */ h(_t, { children: n.reservationNotes })
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
const ud = v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, fd = v.div`
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
`, hd = v.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Fr = v.p`
  ${$t}
  ${ut}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, pd = v.p`
  ${$t}
  ${ut}
`, md = v.div`
  position: sticky;
  left: ${Ne + 16}px;
  overflow: hidden;
`, gd = v.div`
  position: absolute;
  height: ${Qt}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, yd = v.div`
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
`, vd = v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, xd = v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, bd = v.div`
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
`, yt = v.div`
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
`, wd = ({
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
  const a = nt(), d = (I) => {
    let f = 0;
    for (const x of l)
      x <= I && f++;
    return I * ge + f * Re;
  }, [u, y] = pe(null), [S, w] = pe(0), D = le((I = 400, f = 300) => {
    const g = t.width, $ = 48, b = document.getElementById("react-scheduler");
    if (!b)
      return {
        x: r.x + g + 16,
        y: r.y
      };
    const k = b.scrollLeft, V = b.scrollTop, q = b.clientWidth, T = b.clientHeight, C = r.x - k, A = r.y - V, L = {
      left: Ne + 16,
      // Avoid left column
      right: q - 16,
      top: 16,
      bottom: T - 16
    }, P = L.right - (C + g), R = C - L.left, G = L.bottom - (A + $), ne = A - L.top;
    let ie, z;
    return P >= I + 16 ? ie = C + g + 16 : R >= I + 16 ? ie = C - I - 16 : P >= R ? (ie = C + g + 16, ie + I > L.right && (ie = L.right - I)) : (ie = C - I - 16, ie < L.left && (ie = L.left)), G >= f + 16 ? z = A + $ + 16 : ne >= f + 16 ? z = A - f - 16 : G >= ne ? (z = A + $ + 16, z + f > L.bottom && (z = L.bottom - f)) : (z = A - f - 16, z < L.top && (z = L.top)), ie = Math.max(L.left, Math.min(ie, L.right - I)), z = Math.max(L.top, Math.min(z, L.bottom - f)), {
      x: ie + k,
      y: z + V
    };
  }, [r.x, r.y, t.width]);
  ve(() => {
    s === "dragging" && e && S === 0 ? w(r.x) : s === "idle" && w(0);
  }, [s, e, r.x, S]), ve(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const m = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const I = [];
    let f = 0;
    for (const x of i) {
      const g = Math.max(x.data.length, 1);
      if (x.capacity !== void 0 && e.totalPassengers > x.capacity)
        for (let $ = 0; $ < g; $++)
          I.push(f + $);
      f += g;
    }
    return I;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const Y = s === "animating", U = ko(e.bgColor ?? ""), F = () => {
    if (!n)
      return "";
    const I = O(n.startDate).format("MMM D, HH:mm"), f = O(n.endDate).format("HH:mm");
    return `${I} - ${f}`;
  };
  return /* @__PURE__ */ B(ud, { children: [
    m.map((I) => /* @__PURE__ */ h(
      xd,
      {
        style: {
          top: `${d(I)}px`,
          height: `${ge}px`
        }
      },
      I
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      vd,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${d(n.resourceIndex)}px`,
          height: `${ge}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(
        gd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ge - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ h(
        yd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ge - 48) / 2}px`
          },
          children: F()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      bd,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          left: "0px",
          top: `${d(n.resourceIndex)}px`,
          height: `${ge}px`
        }
      }
    ),
    n && o && n.hasConflict && n.conflicts && n.conflicts.length > 0 && s === "dragging" && (() => {
      const I = D(400, 300);
      return /* @__PURE__ */ B(
        Br,
        {
          style: {
            left: `${I.x}px`,
            top: `${I.y}px`
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
            /* @__PURE__ */ h(jr, { children: n.conflicts.map((f, x) => {
              const g = O(n.startDate).format("YYYY-MM-DD"), $ = O(n.endDate).format("YYYY-MM-DD"), b = O(f.event.startDate).format("YYYY-MM-DD"), k = O(f.event.endDate).format("YYYY-MM-DD"), V = O(f.conflictStart).format("YYYY-MM-DD"), q = O(f.conflictEnd).format("YYYY-MM-DD"), T = g !== $, C = b !== k, A = V !== q, L = T ? O(n.startDate).format("MMM D, h:mm A") : O(n.startDate).format("h:mm A"), P = T ? O(n.endDate).format("MMM D, h:mm A") : O(n.endDate).format("h:mm A"), R = C ? O(f.event.startDate).format("MMM D, h:mm A") : O(f.event.startDate).format("h:mm A"), G = C ? O(f.event.endDate).format("MMM D, h:mm A") : O(f.event.endDate).format("h:mm A"), ne = A ? O(f.conflictStart).format("MMM D, h:mm A") : O(f.conflictStart).format("h:mm A"), ie = A ? O(f.conflictEnd).format("MMM D, h:mm A") : O(f.conflictEnd).format("h:mm A"), z = A ? "" : O(f.conflictStart).format("MMM D"), H = n.startDate.getTime(), J = n.endDate.getTime(), te = f.event.startDate.getTime(), M = f.event.endDate.getTime(), j = H >= te && H < M, _ = J > te && J <= M, Q = H <= te && J >= M, W = te <= H && M >= J;
              let N = !1, p = !1, X = !1, E = !1, Z = "";
              return Q || W ? (N = !0, p = !0, X = !0, E = !0, Z = `⚠️ ${a.conflicts.changeBoth}`) : j && _ ? (N = !0, p = !0, X = !0, E = !0, Z = `⚠️ ${a.conflicts.changeBoth}`) : j ? (N = !0, E = !0, Z = `⚠️ ${a.conflicts.changeStart}`) : _ && (p = !0, X = !0, Z = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ B(an, { children: [
                /* @__PURE__ */ B(cn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ B(yt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  N ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: L }) : L,
                  " ",
                  a.conflicts.to,
                  " ",
                  p ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: P }) : P
                ] }),
                /* @__PURE__ */ B(yt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  X ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: R }) : R,
                  " ",
                  a.conflicts.to,
                  " ",
                  E ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: G }) : G
                ] }),
                /* @__PURE__ */ B(Zr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  z && `${z}, `,
                  ne,
                  " - ",
                  ie
                ] }),
                Z && /* @__PURE__ */ h(yt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: Z })
              ] }, x);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const I = D(400, 400);
      return /* @__PURE__ */ B(
        Br,
        {
          style: {
            left: `${I.x}px`,
            top: `${I.y}px`,
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
                const f = n.nearbyEvents.some((b) => b.position === "before"), x = n.nearbyEvents.some((b) => b.position === "after"), g = O(n.startDate).format("h:mm A"), $ = O(n.endDate).format("h:mm A");
                return /* @__PURE__ */ B(an, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ B(cn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ B(yt, { style: { fontWeight: 600 }, children: [
                    O(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: g }) : g,
                    " ",
                    a.conflicts.to,
                    " ",
                    x ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: $ }) : $
                  ] }),
                  /* @__PURE__ */ h(yt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, x) => {
                const g = O(f.event.startDate).format("YYYY-MM-DD"), $ = O(f.event.endDate).format("YYYY-MM-DD"), b = g !== $, k = b ? O(f.event.startDate).format("MMM D, h:mm A") : O(f.event.startDate).format("h:mm A"), V = b ? O(f.event.endDate).format("MMM D, h:mm A") : O(f.event.endDate).format("h:mm A"), q = O(f.event.startDate).format("MMM D"), T = Math.floor(f.timeGap / (1e3 * 60 * 60)), C = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), A = T > 0 ? `${T}h ${C}m` : `${C}m`, L = f.position === "after", P = f.position === "before";
                return /* @__PURE__ */ B(an, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ B(cn, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ B(yt, { children: [
                    !b && `${q}: `,
                    L ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: k }) : k,
                    " ",
                    a.conflicts.to,
                    " ",
                    P ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: V }) : V
                  ] }),
                  /* @__PURE__ */ B(Zr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    A,
                    " ",
                    f.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, x);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      fd,
      {
        $isAnimating: Y,
        $animateToX: u == null ? void 0 : u.x,
        $animateToY: u == null ? void 0 : u.y,
        style: {
          left: Y ? `${(u == null ? void 0 : u.x) ?? 0}px` : "0",
          top: Y ? `${(u == null ? void 0 : u.y) ?? 0}px` : "0",
          transform: Y ? void 0 : `translate3d(${c ? S : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: U
        },
        children: /* @__PURE__ */ h(hd, { children: /* @__PURE__ */ B(md, { children: [
          /* @__PURE__ */ h(Fr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Fr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(pd, { children: e.description })
        ] }) })
      }
    )
  ] });
}, Sd = wd, Cd = je`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, Md = v.div`
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
  animation: ${Cd} 1.5s ease-in-out infinite;
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
`, kd = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  Md,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), $d = kd, Dd = je`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Ed = v.div`
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
  animation: ${Dd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, _d = v.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Td = v.span`
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
`, Ad = v.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Pd = v.span`
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
const Od = v.div`
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
`, Id = ({ selections: e, onConfirm: r, onClear: t }) => {
  var w;
  const o = nt().multiSelect, s = $e(() => e.filter((D) => D.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", d = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", u = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((w = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : w.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, S = /* @__PURE__ */ B(Ed, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ B(_d, { children: [
      /* @__PURE__ */ B(Td, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ B(Ad, { children: [
        "⚠️ ",
        u
      ] }),
      /* @__PURE__ */ h(Pd, { children: c })
    ] }),
    /* @__PURE__ */ B(Od, { children: [
      /* @__PURE__ */ B(Vr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ h(Vr, { variant: "primary", $hasConflicts: y, onClick: r, children: y ? `⚠️ ${d}` : `✓ ${a}` })
    ] })
  ] });
  return Oo(S, document.body);
}, Yd = Id, Ld = je`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Rd = v.div`
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
  animation: ${Ld} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && dt`
      border-style: dashed;
    `}
`, Nd = v.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, zd = v.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Fd = v.button`
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
`, Bd = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, l] = pe(null), [a, d] = pe({ x: 0, y: 0 }), u = he(null), y = $e(() => {
    switch (t) {
      case 0:
        return Be * 7;
      case 1:
        return Ee;
      case 2:
        return Oe;
      default:
        return Ee;
    }
  }, [t]), S = $e(() => O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), w = $e(() => e.map((x, g) => {
    let $ = 0, b = !1;
    for (const R of r) {
      if (R.id === x.resourceId) {
        b = !0;
        break;
      }
      $ += Math.max(R.data.length, 1);
    }
    if (!b)
      return null;
    const k = O(x.startDate), V = O(x.endDate);
    let q, T;
    switch (t) {
      case 0:
        q = Math.floor(k.diff(S, "days") / 7), T = Math.max(1, Math.ceil(V.diff(k, "days") / 7) + 1);
        break;
      case 1:
        q = k.diff(S, "days"), T = Math.max(1, V.diff(k, "days") + 1);
        break;
      case 2:
        q = k.diff(S, "hours"), T = Math.max(1, V.diff(k, "hours") + 1);
        break;
      default:
        q = 0, T = 1;
    }
    const C = q * y;
    let A = 0;
    for (const R of i)
      R <= $ && A++;
    const L = $ * ge + A * Re, P = T * y;
    return {
      index: g,
      selection: x,
      x: C,
      y: L,
      width: P,
      height: ge
    };
  }), [e, r, t, S, y]), D = (x, g) => {
    const $ = O(x).format("MMM D"), b = O(g).format("MMM D");
    return $ === b ? $ : `${$} - ${b}`;
  }, m = (x) => !x.hasConflict || !x.conflicts ? "" : `⚠️ Conflicts with:
${x.conflicts.map(($) => {
    const b = ($.overlapDuration / 36e5).toFixed(1);
    return `• ${$.event.title} (${b}h overlap)`;
  }).join(`
`)}`, Y = le(
    (x) => {
      let g = 0;
      for (const $ of r) {
        const b = Math.max($.data.length, 1);
        if (x >= g * ge && x < (g + b) * ge)
          return {
            resourceId: $.id,
            resourceLabel: $.label
          };
        g += b;
      }
      return null;
    },
    [r]
  ), U = le(
    (x) => {
      const g = Math.floor(x / y);
      switch (t) {
        case 0:
          return S.add(g * 7, "days").toDate();
        case 1:
          return S.add(g, "days").toDate();
        case 2:
          return S.add(g, "hours").toDate();
        default:
          return S.toDate();
      }
    },
    [t, S, y]
  ), F = le(
    (x, g) => {
      !s || (x.preventDefault(), x.stopPropagation(), !w[g]) || (u.current = { x: x.clientX, y: x.clientY }, l(g), d({ x: 0, y: 0 }));
    },
    [s, w]
  ), I = le(
    (x) => {
      if (c === null || !u.current)
        return;
      const g = x.clientX - u.current.x, $ = x.clientY - u.current.y, b = Math.round(g / y) * y, k = Math.round($ / ge) * ge;
      d({ x: b, y: k });
    },
    [c, y]
  ), f = le(() => {
    if (c === null || !s) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const x = w[c];
    if (!x) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const g = x.x + a.x, $ = x.y + a.y, b = Y($ + ge / 2);
    if (!b) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const k = U(g), V = e[c], q = V.endDate.getTime() - V.startDate.getTime(), T = new Date(k.getTime() + q);
    s(c, {
      startDate: k,
      endDate: T,
      resourceId: b.resourceId,
      resourceLabel: b.resourceLabel
    }), l(null), d({ x: 0, y: 0 }), u.current = null;
  }, [c, a, w, e, s, Y, U]);
  return ve(() => {
    if (c !== null)
      return document.addEventListener("mousemove", I), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", f);
      };
  }, [c, I, f]), /* @__PURE__ */ h(Te, { children: w.map((x) => {
    if (!x)
      return null;
    const g = x.selection.hasConflict || !1, $ = c === x.index, b = $ ? x.x + a.x : x.x, k = $ ? x.y + a.y : x.y;
    return /* @__PURE__ */ B(
      Rd,
      {
        $hasConflict: g,
        $isDragging: $,
        style: {
          left: b,
          top: k,
          width: x.width,
          height: x.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (V) => F(V, x.index),
        children: [
          g && /* @__PURE__ */ h(zd, { title: m(x.selection), children: "⚠️" }),
          /* @__PURE__ */ h(Nd, { $hasConflict: g, children: D(x.selection.startDate, x.selection.endDate) }),
          /* @__PURE__ */ h(
            Fd,
            {
              onClick: (V) => {
                V.stopPropagation(), o(x.index);
              },
              onMouseDown: (V) => V.stopPropagation(),
              title: g ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      x.index
    );
  }) });
}, Hd = Bd, Do = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? Be * 7 : Ee, s = O().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, Wd = v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, jd = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ve(), n = $e(
    () => Do(O(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(Wd, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, Zd = jd, ln = "#2f6fed", Vd = v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${ln};
  border-right: 1px solid ${ln}55;
  background: ${ln}1c;
`, Gd = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = Ve(), o = $e(() => !n || n.isSame(O(), "day") ? null : Do(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(Vd, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0 }) : null;
}, Xd = Gd;
export {
  Qd as Scheduler
};
