var To = Object.defineProperty;
var Ao = (e, r, t) => r in e ? To(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Zn = (e, r, t) => (Ao(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as H, Fragment as Pe } from "react/jsx-runtime";
import * as re from "react";
import ct, { useRef as he, useContext as rt, useMemo as $e, useLayoutEffect as qt, useDebugValue as Vn, createElement as Po, createContext as Gr, useState as me, useCallback as de, useEffect as ye, forwardRef as In, useImperativeHandle as Xr } from "react";
import { createPortal as Oo } from "react-dom";
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, It = {}, Io = {
  get exports() {
    return It;
  },
  set exports(e) {
    It = e;
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
var Gn;
function Yo() {
  if (Gn)
    return be;
  Gn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function $(g) {
    if (typeof g == "object" && g !== null) {
      var I = g.$$typeof;
      switch (I) {
        case e:
          switch (g = g.type, g) {
            case t:
            case o:
            case n:
            case a:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case i:
                case l:
                case v:
                case d:
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
  return be.ContextConsumer = i, be.ContextProvider = s, be.Element = e, be.ForwardRef = l, be.Fragment = t, be.Lazy = v, be.Memo = d, be.Portal = r, be.Profiler = o, be.StrictMode = n, be.Suspense = a, be.SuspenseList = u, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(g) {
    return $(g) === i;
  }, be.isContextProvider = function(g) {
    return $(g) === s;
  }, be.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, be.isForwardRef = function(g) {
    return $(g) === l;
  }, be.isFragment = function(g) {
    return $(g) === t;
  }, be.isLazy = function(g) {
    return $(g) === v;
  }, be.isMemo = function(g) {
    return $(g) === d;
  }, be.isPortal = function(g) {
    return $(g) === r;
  }, be.isProfiler = function(g) {
    return $(g) === o;
  }, be.isStrictMode = function(g) {
    return $(g) === n;
  }, be.isSuspense = function(g) {
    return $(g) === a;
  }, be.isSuspenseList = function(g) {
    return $(g) === u;
  }, be.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === t || g === o || g === n || g === a || g === u || g === S || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === d || g.$$typeof === s || g.$$typeof === i || g.$$typeof === l || g.$$typeof === b || g.getModuleId !== void 0);
  }, be.typeOf = $, be;
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
var Xn;
function Lo() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), b = !1, $ = !1, g = !1, I = !1, K = !1, Y;
    Y = Symbol.for("react.module.reference");
    function N(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === t || D === o || K || D === n || D === a || D === u || I || D === S || b || $ || g || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === d || D.$$typeof === s || D.$$typeof === i || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === Y || D.getModuleId !== void 0));
    }
    function y(D) {
      if (typeof D == "object" && D !== null) {
        var U = D.$$typeof;
        switch (U) {
          case e:
            var ee = D.type;
            switch (ee) {
              case t:
              case o:
              case n:
              case a:
              case u:
                return ee;
              default:
                var V = ee && ee.$$typeof;
                switch (V) {
                  case c:
                  case i:
                  case l:
                  case v:
                  case d:
                  case s:
                    return V;
                  default:
                    return U;
                }
            }
          case r:
            return U;
        }
      }
    }
    var m = i, f = s, E = e, w = l, C = t, W = v, q = d, O = r, k = o, T = n, z = a, P = u, A = !1, j = !1;
    function ne(D) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(D) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(D) {
      return y(D) === i;
    }
    function R(D) {
      return y(D) === s;
    }
    function X(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function te(D) {
      return y(D) === l;
    }
    function M(D) {
      return y(D) === t;
    }
    function Z(D) {
      return y(D) === v;
    }
    function _(D) {
      return y(D) === d;
    }
    function Q(D) {
      return y(D) === r;
    }
    function B(D) {
      return y(D) === o;
    }
    function F(D) {
      return y(D) === n;
    }
    function p(D) {
      return y(D) === a;
    }
    function J(D) {
      return y(D) === u;
    }
    we.ContextConsumer = m, we.ContextProvider = f, we.Element = E, we.ForwardRef = w, we.Fragment = C, we.Lazy = W, we.Memo = q, we.Portal = O, we.Profiler = k, we.StrictMode = T, we.Suspense = z, we.SuspenseList = P, we.isAsyncMode = ne, we.isConcurrentMode = ae, we.isContextConsumer = G, we.isContextProvider = R, we.isElement = X, we.isForwardRef = te, we.isFragment = M, we.isLazy = Z, we.isMemo = _, we.isPortal = Q, we.isProfiler = B, we.isStrictMode = F, we.isSuspense = p, we.isSuspenseList = J, we.isValidElementType = N, we.typeOf = y;
  }()), we;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Yo() : e.exports = Lo();
})(Io);
function Ro(e) {
  function r(G, R, X, te, M) {
    for (var Z = 0, _ = 0, Q = 0, B = 0, F, p, J = 0, D = 0, U, ee = U = F = 0, V = 0, ce = 0, ge = 0, ue = 0, xe = X.length, De = xe - 1, Me, oe = "", pe = "", Oe = "", Re = "", fe; V < xe; ) {
      if (p = X.charCodeAt(V), V === De && _ + B + Q + Z !== 0 && (_ !== 0 && (p = _ === 47 ? 10 : 47), B = Q = Z = 0, xe++, De++), _ + B + Q + Z === 0) {
        if (V === De && (0 < ce && (oe = oe.replace(v, "")), 0 < oe.trim().length)) {
          switch (p) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              oe += X.charAt(V);
          }
          p = 59;
        }
        switch (p) {
          case 123:
            for (oe = oe.trim(), F = oe.charCodeAt(0), U = 1, ue = ++V; V < xe; ) {
              switch (p = X.charCodeAt(V)) {
                case 123:
                  U++;
                  break;
                case 125:
                  U--;
                  break;
                case 47:
                  switch (p = X.charCodeAt(V + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ee = V + 1; ee < De; ++ee)
                          switch (X.charCodeAt(ee)) {
                            case 47:
                              if (p === 42 && X.charCodeAt(ee - 1) === 42 && V + 2 !== ee) {
                                V = ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (p === 47) {
                                V = ee + 1;
                                break e;
                              }
                          }
                        V = ee;
                      }
                  }
                  break;
                case 91:
                  p++;
                case 40:
                  p++;
                case 34:
                case 39:
                  for (; V++ < De && X.charCodeAt(V) !== p; )
                    ;
              }
              if (U === 0)
                break;
              V++;
            }
            switch (U = X.substring(ue, V), F === 0 && (F = (oe = oe.replace(d, "").trim()).charCodeAt(0)), F) {
              case 64:
                switch (0 < ce && (oe = oe.replace(v, "")), p = oe.charCodeAt(1), p) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = R;
                    break;
                  default:
                    ce = z;
                }
                if (U = r(R, ce, U, p, M + 1), ue = U.length, 0 < A && (ce = t(z, oe, ge), fe = c(3, U, ce, R, O, q, ue, p, M, te), oe = ce.join(""), fe !== void 0 && (ue = (U = fe.trim()).length) === 0 && (p = 0, U = "")), 0 < ue)
                  switch (p) {
                    case 115:
                      oe = oe.replace(m, i);
                    case 100:
                    case 109:
                    case 45:
                      U = oe + "{" + U + "}";
                      break;
                    case 107:
                      oe = oe.replace(K, "$1 $2"), U = oe + "{" + U + "}", U = T === 1 || T === 2 && s("@" + U, 3) ? "@-webkit-" + U + "@" + U : "@" + U;
                      break;
                    default:
                      U = oe + U, te === 112 && (U = (pe += U, ""));
                  }
                else
                  U = "";
                break;
              default:
                U = r(R, t(R, oe, ge), U, te, M + 1);
            }
            Oe += U, U = ge = ce = ee = F = 0, oe = "", p = X.charCodeAt(++V);
            break;
          case 125:
          case 59:
            if (oe = (0 < ce ? oe.replace(v, "") : oe).trim(), 1 < (ue = oe.length))
              switch (ee === 0 && (F = oe.charCodeAt(0), F === 45 || 96 < F && 123 > F) && (ue = (oe = oe.replace(" ", ":")).length), 0 < A && (fe = c(1, oe, R, G, O, q, pe.length, te, M, te)) !== void 0 && (ue = (oe = fe.trim()).length) === 0 && (oe = "\0\0"), F = oe.charCodeAt(0), p = oe.charCodeAt(1), F) {
                case 0:
                  break;
                case 64:
                  if (p === 105 || p === 99) {
                    Re += oe + X.charAt(V);
                    break;
                  }
                default:
                  oe.charCodeAt(ue - 1) !== 58 && (pe += o(oe, F, p, oe.charCodeAt(2)));
              }
            ge = ce = ee = F = 0, oe = "", p = X.charCodeAt(++V);
        }
      }
      switch (p) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + F === 0 && te !== 107 && 0 < oe.length && (ce = 1, oe += "\0"), 0 < A * ne && c(0, oe, R, G, O, q, pe.length, te, M, te), q = 1, O++;
          break;
        case 59:
        case 125:
          if (_ + B + Q + Z === 0) {
            q++;
            break;
          }
        default:
          switch (q++, Me = X.charAt(V), p) {
            case 9:
            case 32:
              if (B + Z + _ === 0)
                switch (J) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Me = "";
                    break;
                  default:
                    p !== 32 && (Me = " ");
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
              B + _ + Z === 0 && (ce = ge = 1, Me = "\f" + Me);
              break;
            case 108:
              if (B + _ + Z + k === 0 && 0 < ee)
                switch (V - ee) {
                  case 2:
                    J === 112 && X.charCodeAt(V - 3) === 58 && (k = J);
                  case 8:
                    D === 111 && (k = D);
                }
              break;
            case 58:
              B + _ + Z === 0 && (ee = V);
              break;
            case 44:
              _ + Q + B + Z === 0 && (ce = 1, Me += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (B = B === p ? 0 : B === 0 ? p : B);
              break;
            case 91:
              B + _ + Q === 0 && Z++;
              break;
            case 93:
              B + _ + Q === 0 && Z--;
              break;
            case 41:
              B + _ + Z === 0 && Q--;
              break;
            case 40:
              if (B + _ + Z === 0) {
                if (F === 0)
                  switch (2 * J + 3 * D) {
                    case 533:
                      break;
                    default:
                      F = 1;
                  }
                Q++;
              }
              break;
            case 64:
              _ + Q + B + Z + ee + U === 0 && (U = 1);
              break;
            case 42:
            case 47:
              if (!(0 < B + Z + Q))
                switch (_) {
                  case 0:
                    switch (2 * p + 3 * X.charCodeAt(V + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        ue = V, _ = 42;
                    }
                    break;
                  case 42:
                    p === 47 && J === 42 && ue + 2 !== V && (X.charCodeAt(ue + 2) === 33 && (pe += X.substring(ue, V + 1)), Me = "", _ = 0);
                }
          }
          _ === 0 && (oe += Me);
      }
      D = J, J = p, V++;
    }
    if (ue = pe.length, 0 < ue) {
      if (ce = R, 0 < A && (fe = c(2, pe, ce, G, O, q, ue, te, M, te), fe !== void 0 && (pe = fe).length === 0))
        return Re + pe + Oe;
      if (pe = ce.join(",") + "{" + pe + "}", T * k !== 0) {
        switch (T !== 2 || s(pe, 2) || (k = 0), k) {
          case 111:
            pe = pe.replace(N, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(Y, "::-webkit-input-$1") + pe.replace(Y, "::-moz-$1") + pe.replace(Y, ":-ms-input-$1") + pe;
        }
        k = 0;
      }
    }
    return Re + pe + Oe;
  }
  function t(G, R, X) {
    var te = R.trim().split(g);
    R = te;
    var M = te.length, Z = G.length;
    switch (Z) {
      case 0:
      case 1:
        var _ = 0;
        for (G = Z === 0 ? "" : G[0] + " "; _ < M; ++_)
          R[_] = n(G, R[_], X).trim();
        break;
      default:
        var Q = _ = 0;
        for (R = []; _ < M; ++_)
          for (var B = 0; B < Z; ++B)
            R[Q++] = n(G[B] + " ", te[_], X).trim();
    }
    return R;
  }
  function n(G, R, X) {
    var te = R.charCodeAt(0);
    switch (33 > te && (te = (R = R.trim()).charCodeAt(0)), te) {
      case 38:
        return R.replace(I, "$1" + G.trim());
      case 58:
        return G.trim() + R.replace(I, "$1" + G.trim());
      default:
        if (0 < 1 * X && 0 < R.indexOf("\f"))
          return R.replace(I, (G.charCodeAt(0) === 58 ? "" : "$1") + G.trim());
    }
    return G + R;
  }
  function o(G, R, X, te) {
    var M = G + ";", Z = 2 * R + 3 * X + 4 * te;
    if (Z === 944) {
      G = M.indexOf(":", 9) + 1;
      var _ = M.substring(G, M.length - 1).trim();
      return _ = M.substring(0, G).trim() + _ + ";", T === 1 || T === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (T === 0 || T === 2 && !s(M, 1))
      return M;
    switch (Z) {
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
          return M.replace(W, "$1-webkit-$2") + M;
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
        return b.test(M) ? M.replace(S, ":-webkit-") + M.replace(S, ":-moz-") + M : M;
      case 1e3:
        switch (_ = M.substring(13).trim(), R = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(R)) {
          case 226:
            _ = M.replace(y, "tb");
            break;
          case 232:
            _ = M.replace(y, "tb-rl");
            break;
          case 220:
            _ = M.replace(y, "lr");
            break;
          default:
            return M;
        }
        return "-webkit-" + M + "-ms-" + _ + M;
      case 1017:
        if (M.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (R = (M = G).length - 10, _ = (M.charCodeAt(R) === 33 ? M.substring(0, R) : M).substring(G.indexOf(":", 7) + 1).trim(), Z = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8))
              break;
          case 115:
            M = M.replace(_, "-webkit-" + _) + ";" + M;
            break;
          case 207:
          case 102:
            M = M.replace(_, "-webkit-" + (102 < Z ? "inline-" : "") + "box") + ";" + M.replace(_, "-webkit-" + _) + ";" + M.replace(_, "-ms-" + _ + "box") + ";" + M;
        }
        return M + ";";
      case 938:
        if (M.charCodeAt(5) === 45)
          switch (M.charCodeAt(6)) {
            case 105:
              return _ = M.replace("-items", ""), "-webkit-" + M + "-webkit-box-" + _ + "-ms-flex-" + _ + M;
            case 115:
              return "-webkit-" + M + "-ms-flex-item-" + M.replace(E, "") + M;
            default:
              return "-webkit-" + M + "-ms-flex-line-pack" + M.replace("align-content", "").replace(E, "") + M;
          }
        break;
      case 973:
      case 989:
        if (M.charCodeAt(3) !== 45 || M.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (C.test(G) === !0)
          return (_ = G.substring(G.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(G.replace("stretch", "fill-available"), R, X, te).replace(":fill-available", ":stretch") : M.replace(_, "-webkit-" + _) + M.replace(_, "-moz-" + _.replace("fill-", "")) + M;
        break;
      case 962:
        if (M = "-webkit-" + M + (M.charCodeAt(5) === 102 ? "-ms-" + M : "") + M, X + te === 211 && M.charCodeAt(13) === 105 && 0 < M.indexOf("transform", 10))
          return M.substring(0, M.indexOf(";", 27) + 1).replace($, "$1-webkit-$2") + M;
    }
    return M;
  }
  function s(G, R) {
    var X = G.indexOf(R === 1 ? ":" : "{"), te = G.substring(0, R !== 3 ? X : 10);
    return X = G.substring(X + 1, G.length - 1), j(R !== 2 ? te : te.replace(w, "$1"), X, R);
  }
  function i(G, R) {
    var X = o(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return X !== R + ";" ? X.replace(f, " or ($1)").substring(4) : "(" + R + ")";
  }
  function c(G, R, X, te, M, Z, _, Q, B, F) {
    for (var p = 0, J = R, D; p < A; ++p)
      switch (D = P[p].call(u, G, J, X, te, M, Z, _, Q, B, F)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          J = D;
      }
    if (J !== R)
      return J;
  }
  function l(G) {
    switch (G) {
      case void 0:
      case null:
        A = P.length = 0;
        break;
      default:
        if (typeof G == "function")
          P[A++] = G;
        else if (typeof G == "object")
          for (var R = 0, X = G.length; R < X; ++R)
            l(G[R]);
        else
          ne = !!G | 0;
    }
    return l;
  }
  function a(G) {
    return G = G.prefix, G !== void 0 && (j = null, G ? typeof G != "function" ? T = 1 : (T = 2, j = G) : T = 0), a;
  }
  function u(G, R) {
    var X = G;
    if (33 > X.charCodeAt(0) && (X = X.trim()), ae = X, X = [ae], 0 < A) {
      var te = c(-1, R, X, X, O, q, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (R = te);
    }
    var M = r(z, X, R, 0, 0);
    return 0 < A && (te = c(-2, M, X, X, O, q, M.length, 0, 0, 0), te !== void 0 && (M = te)), ae = "", k = 0, q = O = 1, M;
  }
  var d = /^\0+/g, v = /[\0\r\f]/g, S = /: */g, b = /zoo|gra/, $ = /([,: ])(transform)/g, g = /,\r+?/g, I = /([\t\r\n ])*\f?&/g, K = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, N = /:(read-only)/g, y = /[svh]\w+-[tblr]{2}/, m = /\(\s*(.*)\s*\)/g, f = /([\s\S]*?);/g, E = /-self|flex-/g, w = /[^]*?(:[rp][el]a[\w-]+)[^]*/, C = /stretch|:\s*\w+\-(?:conte|avail)/, W = /([^-])(image-set\()/, q = 1, O = 1, k = 0, T = 1, z = [], P = [], A = 0, j = null, ne = 0, ae = "";
  return u.use = l, u.set = a, e !== void 0 && a(e), u;
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
function Fo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var zo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Un = /* @__PURE__ */ Fo(
  function(e) {
    return zo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), dn = {}, Ho = {
  get exports() {
    return dn;
  },
  set exports(e) {
    dn = e;
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
var Kn;
function Bo() {
  if (Kn)
    return Se;
  Kn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
  function Y(y) {
    if (typeof y == "object" && y !== null) {
      var m = y.$$typeof;
      switch (m) {
        case r:
          switch (y = y.type, y) {
            case l:
            case a:
            case n:
            case s:
            case o:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case u:
                case b:
                case S:
                case i:
                  return y;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  function N(y) {
    return Y(y) === a;
  }
  return Se.AsyncMode = l, Se.ConcurrentMode = a, Se.ContextConsumer = c, Se.ContextProvider = i, Se.Element = r, Se.ForwardRef = u, Se.Fragment = n, Se.Lazy = b, Se.Memo = S, Se.Portal = t, Se.Profiler = s, Se.StrictMode = o, Se.Suspense = d, Se.isAsyncMode = function(y) {
    return N(y) || Y(y) === l;
  }, Se.isConcurrentMode = N, Se.isContextConsumer = function(y) {
    return Y(y) === c;
  }, Se.isContextProvider = function(y) {
    return Y(y) === i;
  }, Se.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === r;
  }, Se.isForwardRef = function(y) {
    return Y(y) === u;
  }, Se.isFragment = function(y) {
    return Y(y) === n;
  }, Se.isLazy = function(y) {
    return Y(y) === b;
  }, Se.isMemo = function(y) {
    return Y(y) === S;
  }, Se.isPortal = function(y) {
    return Y(y) === t;
  }, Se.isProfiler = function(y) {
    return Y(y) === s;
  }, Se.isStrictMode = function(y) {
    return Y(y) === o;
  }, Se.isSuspense = function(y) {
    return Y(y) === d;
  }, Se.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === a || y === s || y === o || y === d || y === v || typeof y == "object" && y !== null && (y.$$typeof === b || y.$$typeof === S || y.$$typeof === i || y.$$typeof === c || y.$$typeof === u || y.$$typeof === g || y.$$typeof === I || y.$$typeof === K || y.$$typeof === $);
  }, Se.typeOf = Y, Se;
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
var Jn;
function Wo() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
    function Y(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === a || p === s || p === o || p === d || p === v || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === S || p.$$typeof === i || p.$$typeof === c || p.$$typeof === u || p.$$typeof === g || p.$$typeof === I || p.$$typeof === K || p.$$typeof === $);
    }
    function N(p) {
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
              case d:
                return D;
              default:
                var U = D && D.$$typeof;
                switch (U) {
                  case c:
                  case u:
                  case b:
                  case S:
                  case i:
                    return U;
                  default:
                    return J;
                }
            }
          case t:
            return J;
        }
      }
    }
    var y = l, m = a, f = c, E = i, w = r, C = u, W = n, q = b, O = S, k = t, T = s, z = o, P = d, A = !1;
    function j(p) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(p) || N(p) === l;
    }
    function ne(p) {
      return N(p) === a;
    }
    function ae(p) {
      return N(p) === c;
    }
    function G(p) {
      return N(p) === i;
    }
    function R(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function X(p) {
      return N(p) === u;
    }
    function te(p) {
      return N(p) === n;
    }
    function M(p) {
      return N(p) === b;
    }
    function Z(p) {
      return N(p) === S;
    }
    function _(p) {
      return N(p) === t;
    }
    function Q(p) {
      return N(p) === s;
    }
    function B(p) {
      return N(p) === o;
    }
    function F(p) {
      return N(p) === d;
    }
    Ce.AsyncMode = y, Ce.ConcurrentMode = m, Ce.ContextConsumer = f, Ce.ContextProvider = E, Ce.Element = w, Ce.ForwardRef = C, Ce.Fragment = W, Ce.Lazy = q, Ce.Memo = O, Ce.Portal = k, Ce.Profiler = T, Ce.StrictMode = z, Ce.Suspense = P, Ce.isAsyncMode = j, Ce.isConcurrentMode = ne, Ce.isContextConsumer = ae, Ce.isContextProvider = G, Ce.isElement = R, Ce.isForwardRef = X, Ce.isFragment = te, Ce.isLazy = M, Ce.isMemo = Z, Ce.isPortal = _, Ce.isProfiler = Q, Ce.isStrictMode = B, Ce.isSuspense = F, Ce.isValidElementType = Y, Ce.typeOf = N;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Bo() : e.exports = Wo();
})(Ho);
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
function je() {
  return (je = Object.assign || function(e) {
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
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !It.typeOf(e);
}, Vt = Object.freeze([]), et = Object.freeze({});
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
function Ue(e) {
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
        (i <<= 1) < 0 && Ue(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = s; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), a = 0, u = n.length; a < u; a++)
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
}(), jt = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), Ot = 1, zt = function(e) {
  if (jt.has(e))
    return jt.get(e);
  for (; Gt.has(Ot); )
    Ot++;
  var r = Ot++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ue(16, "" + r), jt.set(e, r), Gt.set(r, e), r;
}, rs = function(e) {
  return Gt.get(e);
}, os = function(e, r) {
  r >= Ot && (Ot = r + 1), jt.set(e, r), Gt.set(r, e);
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
      var u = l[a];
      if (u && u.nodeType === 1 && u.hasAttribute(St))
        return u;
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
}(), nr = Nn, hs = { isServer: !Nn, useCSSOMInjection: !qo }, Xt = function() {
  function e(t, n, o) {
    t === void 0 && (t = et), n === void 0 && (n = {}), this.options = je({}, hs, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Nn && nr && (nr = !1, function(s) {
      for (var i = document.querySelectorAll(ss), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(St) !== "active" && (cs(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return zt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(je({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new fs(i) : s ? new ds(i) : new us(i), new ns(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (zt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(zt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(zt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = rs(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var u = St + ".g" + i + '[id="' + c + '"]', d = "";
            l !== void 0 && l.forEach(function(v) {
              v.length > 0 && (d += v + ",");
            }), s += "" + a + u + '{content:"' + d + `"}/*!sc*/
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
var at = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, qr = function(e) {
  return at(5381, e);
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
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Qr(r), this.componentId = t, this.baseHash = at(ms, t), this.baseStyle = n, Xt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = lt(this.rules, r, t, n).join(""), c = hn(at(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, u = at(this.baseHash, n.hash), d = "", v = 0; v < a; v++) {
        var S = this.rules[v];
        if (typeof S == "string")
          d += S, process.env.NODE_ENV !== "production" && (u = at(u, S + v));
        else if (S) {
          var b = lt(S, r, t, n), $ = Array.isArray(b) ? b.join("") : b;
          u = at(u, $ + v), d += $;
        }
      }
      if (d) {
        var g = hn(u >>> 0);
        if (!t.hasNameForId(o, g)) {
          var I = n(d, "." + g, void 0, o);
          t.insertRules(o, g, I);
        }
        s.push(g);
      }
    }
    return s.join(" ");
  }, e;
}(), ys = /^\s*\/\/.*$/gm, vs = [":", "[", ".", "#"];
function xs(e) {
  var r, t, n, o, s = e === void 0 ? et : e, i = s.options, c = i === void 0 ? et : i, l = s.plugins, a = l === void 0 ? Vt : l, u = new Ro(c), d = [], v = function($) {
    function g(I) {
      if (I)
        try {
          $(I + "}");
        } catch {
        }
    }
    return function(I, K, Y, N, y, m, f, E, w, C) {
      switch (I) {
        case 1:
          if (w === 0 && K.charCodeAt(0) === 64)
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
              return $(Y[0] + K), "";
            default:
              return K + (C === 0 ? "/*|*/" : "");
          }
        case -2:
          K.split("/*|*/}").forEach(g);
      }
    };
  }(function($) {
    d.push($);
  }), S = function($, g, I) {
    return g === 0 && vs.indexOf(I[t.length]) !== -1 || I.match(o) ? $ : "." + r;
  };
  function b($, g, I, K) {
    K === void 0 && (K = "&");
    var Y = $.replace(ys, ""), N = g && I ? I + " " + g + " { " + Y + " }" : Y;
    return r = K, t = g, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), u(I || !g ? "" : g, N);
  }
  return u.use([].concat(a, [function($, g, I) {
    $ === 2 && I.length && I[0].lastIndexOf(t) > 0 && (I[0] = I[0].replace(n, S));
  }, v, function($) {
    if ($ === -2) {
      var g = d;
      return d = [], g;
    }
  }])), b.hash = a.length ? a.reduce(function($, g) {
    return g.name || Ue(15), at($, g.name);
  }, 5381).toString() : "", b;
}
var eo = ct.createContext();
eo.Consumer;
var to = ct.createContext(), bs = (to.Consumer, new Xt()), pn = xs();
function no() {
  return rt(eo) || bs;
}
function ro() {
  return rt(to) || pn;
}
var oo = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = pn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ue(12, String(n.name));
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
function lt(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = lt(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
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
    return process.env.NODE_ENV !== "production" && It.isElement(l) && console.warn(fn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), lt(l, r, t, n);
  }
  var a;
  return e instanceof oo ? t ? (e.inject(t, n), e.getName(n)) : e : un(e) ? function u(d, v) {
    var S, b, $ = [];
    for (var g in d)
      d.hasOwnProperty(g) && !sr(d[g]) && (Array.isArray(d[g]) && d[g].isCss || wt(d[g]) ? $.push(or(g) + ":", d[g], ";") : un(d[g]) ? $.push.apply($, u(d[g], g)) : $.push(or(g) + ": " + (S = g, (b = d[g]) == null || typeof b == "boolean" || b === "" ? "" : typeof b != "number" || b === 0 || S in No ? String(b).trim() : b + "px") + ";"));
    return v ? [v + " {"].concat($, ["}"]) : $;
  }(e) : e.toString();
}
var ir = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function $t(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return wt(e) || un(e) ? ir(lt(tr(Vt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ir(lt(tr(e, t)));
}
var ar = /invalid hook call/i, Ht = /* @__PURE__ */ new Set(), so = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (ar.test(s))
          o = !1, Ht.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(c));
        }
      }, he(), o && !Ht.has(t) && (console.warn(t), Ht.add(t));
    } catch (s) {
      ar.test(s.message) && Ht.delete(t);
    } finally {
      console.error = n;
    }
  }
}, io = function(e, r, t) {
  return t === void 0 && (t = et), e.theme !== t.theme && e.theme || r || t.theme;
}, ks = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $s = /(^-|-$)/g;
function nn(e) {
  return e.replace(ks, "-").replace($s, "");
}
var Fn = function(e) {
  return hn(qr(e) >>> 0);
};
function Bt(e) {
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
var Ct = ct.createContext();
Ct.Consumer;
function _s(e) {
  var r = rt(Ct), t = $e(function() {
    return function(n, o) {
      if (!n)
        return Ue(14);
      if (wt(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ue(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Ue(8) : o ? je({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? ct.createElement(Ct.Provider, { value: t }, e.children) : null;
}
var rn = {};
function co(e, r, t) {
  var n = Rn(e), o = !Bt(e), s = r.attrs, i = s === void 0 ? Vt : s, c = r.componentId, l = c === void 0 ? function(K, Y) {
    var N = typeof K != "string" ? "sc" : nn(K);
    rn[N] = (rn[N] || 0) + 1;
    var y = N + "-" + Fn("5.3.8" + N + rn[N]);
    return Y ? Y + "-" + y : y;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, u = a === void 0 ? function(K) {
    return Bt(K) ? "styled." + K : "Styled(" + fn(K) + ")";
  }(e) : a, d = r.displayName && r.componentId ? nn(r.displayName) + "-" + r.componentId : r.componentId || l, v = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, S = r.shouldForwardProp;
  n && e.shouldForwardProp && (S = r.shouldForwardProp ? function(K, Y, N) {
    return e.shouldForwardProp(K, Y, N) && r.shouldForwardProp(K, Y, N);
  } : e.shouldForwardProp);
  var b, $ = new gs(t, d, n ? e.componentStyle : void 0), g = $.isStatic && i.length === 0, I = function(K, Y) {
    return function(N, y, m, f) {
      var E = N.attrs, w = N.componentStyle, C = N.defaultProps, W = N.foldedComponentIds, q = N.shouldForwardProp, O = N.styledComponentId, k = N.target;
      process.env.NODE_ENV !== "production" && Vn(O);
      var T = function(te, M, Z) {
        te === void 0 && (te = et);
        var _ = je({}, M, { theme: te }), Q = {};
        return Z.forEach(function(B) {
          var F, p, J, D = B;
          for (F in wt(D) && (D = D(_)), D)
            _[F] = Q[F] = F === "className" ? (p = Q[F], J = D[F], p && J ? p + " " + J : p || J) : D[F];
        }), [_, Q];
      }(io(y, rt(Ct), C) || et, y, E), z = T[0], P = T[1], A = function(te, M, Z, _) {
        var Q = no(), B = ro(), F = M ? te.generateAndInjectStyles(et, Q, B) : te.generateAndInjectStyles(Z, Q, B);
        return process.env.NODE_ENV !== "production" && Vn(F), process.env.NODE_ENV !== "production" && !M && _ && _(F), F;
      }(w, f, z, process.env.NODE_ENV !== "production" ? N.warnTooManyClasses : void 0), j = m, ne = P.$as || y.$as || P.as || y.as || k, ae = Bt(ne), G = P !== y ? je({}, y, {}, P) : y, R = {};
      for (var X in G)
        X[0] !== "$" && X !== "as" && (X === "forwardedAs" ? R.as = G[X] : (q ? q(X, Un, ne) : !ae || Un(X)) && (R[X] = G[X]));
      return y.style && P.style !== y.style && (R.style = je({}, y.style, {}, P.style)), R.className = Array.prototype.concat(W, O, A !== O ? A : null, y.className, P.className).filter(Boolean).join(" "), R.ref = j, Po(ne, R);
    }(b, K, Y, g);
  };
  return I.displayName = u, (b = ct.forwardRef(I)).attrs = v, b.componentStyle = $, b.displayName = u, b.shouldForwardProp = S, b.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Vt, b.styledComponentId = d, b.target = n ? e.target : e, b.withComponent = function(K) {
    var Y = r.componentId, N = function(m, f) {
      if (m == null)
        return {};
      var E, w, C = {}, W = Object.keys(m);
      for (w = 0; w < W.length; w++)
        E = W[w], f.indexOf(E) >= 0 || (C[E] = m[E]);
      return C;
    }(r, ["componentId"]), y = Y && Y + "-" + (Bt(K) ? K : nn(fn(K)));
    return co(K, je({}, N, { attrs: v, componentId: y }), t);
  }, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(K) {
    this._foldedDefaultProps = n ? ao({}, e.defaultProps, K) : K;
  } }), process.env.NODE_ENV !== "production" && (so(u, d), b.warnTooManyClasses = function(K, Y) {
    var N = {}, y = !1;
    return function(m) {
      if (!y && (N[m] = !0, Object.keys(N).length >= 200)) {
        var f = Y ? ' with the id of "' + Y + '"' : "";
        console.warn("Over 200 classes were generated for component " + K + f + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, N = {};
      }
    };
  }(u, d)), b.toString = function() {
    return "." + b.styledComponentId;
  }, o && Jo(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), b;
}
var gn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = et), !It.isValidElementType(n))
      return Ue(1, String(n));
    var s = function() {
      return t(n, o, $t.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, je({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, je({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(co, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  gn[e] = gn(e);
});
var Ts = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Qr(t), Xt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(lt(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && Xt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function As(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = $t.apply(void 0, [e].concat(t)), s = "sc-global-" + Fn(JSON.stringify(o)), i = new Ts(o, s);
  function c(a) {
    var u = no(), d = ro(), v = rt(Ct), S = he(u.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && ct.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(b) {
      return typeof b == "string" && b.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), u.server && l(S, a, u, v, d), qt(function() {
      if (!u.server)
        return l(S, a, u, v, d), function() {
          return i.removeStyles(S, u);
        };
    }, [S, a, u, v, d]), null;
  }
  function l(a, u, d, v, S) {
    if (i.isStatic)
      i.renderStyles(a, Qo, d, S);
    else {
      var b = je({}, u, { theme: io(u, v, c.defaultProps) });
      i.renderStyles(a, b, d, S);
    }
  }
  return process.env.NODE_ENV !== "production" && so(s), ct.memo(c);
}
function Ke(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = $t.apply(void 0, [e].concat(t)).join(""), s = Fn(o);
  return new oo(s, o);
}
var Qt = function() {
  return rt(Ct);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const x = gn;
var dt = {}, Ps = {
  get exports() {
    return dt;
  },
  set exports(e) {
    dt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ie, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", u = "week", d = "month", v = "quarter", S = "year", b = "date", $ = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var k = ["th", "st", "nd", "rd"], T = O % 100;
      return "[" + O + (k[(T - 20) % 10] || k[T] || k[0]) + "]";
    } }, Y = function(O, k, T) {
      var z = String(O);
      return !z || z.length >= k ? O : "" + Array(k + 1 - z.length).join(T) + O;
    }, N = { s: Y, z: function(O) {
      var k = -O.utcOffset(), T = Math.abs(k), z = Math.floor(T / 60), P = T % 60;
      return (k <= 0 ? "+" : "-") + Y(z, 2, "0") + ":" + Y(P, 2, "0");
    }, m: function O(k, T) {
      if (k.date() < T.date())
        return -O(T, k);
      var z = 12 * (T.year() - k.year()) + (T.month() - k.month()), P = k.clone().add(z, d), A = T - P < 0, j = k.clone().add(z + (A ? -1 : 1), d);
      return +(-(z + (T - P) / (A ? P - j : j - P)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: d, y: S, w: u, d: a, D: b, h: l, m: c, s: i, ms: s, Q: v }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, y = "en", m = {};
    m[y] = K;
    var f = function(O) {
      return O instanceof W;
    }, E = function O(k, T, z) {
      var P;
      if (!k)
        return y;
      if (typeof k == "string") {
        var A = k.toLowerCase();
        m[A] && (P = A), T && (m[A] = T, P = A);
        var j = k.split("-");
        if (!P && j.length > 1)
          return O(j[0]);
      } else {
        var ne = k.name;
        m[ne] = k, P = ne;
      }
      return !z && P && (y = P), P || !z && y;
    }, w = function(O, k) {
      if (f(O))
        return O.clone();
      var T = typeof k == "object" ? k : {};
      return T.date = O, T.args = arguments, new W(T);
    }, C = N;
    C.l = E, C.i = f, C.w = function(O, k) {
      return w(O, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
    };
    var W = function() {
      function O(T) {
        this.$L = E(T.locale, null, !0), this.parse(T);
      }
      var k = O.prototype;
      return k.parse = function(T) {
        this.$d = function(z) {
          var P = z.date, A = z.utc;
          if (P === null)
            return new Date(NaN);
          if (C.u(P))
            return new Date();
          if (P instanceof Date)
            return new Date(P);
          if (typeof P == "string" && !/Z$/i.test(P)) {
            var j = P.match(g);
            if (j) {
              var ne = j[2] - 1 || 0, ae = (j[7] || "0").substring(0, 3);
              return A ? new Date(Date.UTC(j[1], ne, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, ae)) : new Date(j[1], ne, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, ae);
            }
          }
          return new Date(P);
        }(T), this.$x = T.x || {}, this.init();
      }, k.init = function() {
        var T = this.$d;
        this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
      }, k.$utils = function() {
        return C;
      }, k.isValid = function() {
        return this.$d.toString() !== $;
      }, k.isSame = function(T, z) {
        var P = w(T);
        return this.startOf(z) <= P && P <= this.endOf(z);
      }, k.isAfter = function(T, z) {
        return w(T) < this.startOf(z);
      }, k.isBefore = function(T, z) {
        return this.endOf(z) < w(T);
      }, k.$g = function(T, z, P) {
        return C.u(T) ? this[z] : this.set(P, T);
      }, k.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, k.valueOf = function() {
        return this.$d.getTime();
      }, k.startOf = function(T, z) {
        var P = this, A = !!C.u(z) || z, j = C.p(T), ne = function(_, Q) {
          var B = C.w(P.$u ? Date.UTC(P.$y, Q, _) : new Date(P.$y, Q, _), P);
          return A ? B : B.endOf(a);
        }, ae = function(_, Q) {
          return C.w(P.toDate()[_].apply(P.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), P);
        }, G = this.$W, R = this.$M, X = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case S:
            return A ? ne(1, 0) : ne(31, 11);
          case d:
            return A ? ne(1, R) : ne(0, R + 1);
          case u:
            var M = this.$locale().weekStart || 0, Z = (G < M ? G + 7 : G) - M;
            return ne(A ? X - Z : X + (6 - Z), R);
          case a:
          case b:
            return ae(te + "Hours", 0);
          case l:
            return ae(te + "Minutes", 1);
          case c:
            return ae(te + "Seconds", 2);
          case i:
            return ae(te + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, k.endOf = function(T) {
        return this.startOf(T, !1);
      }, k.$set = function(T, z) {
        var P, A = C.p(T), j = "set" + (this.$u ? "UTC" : ""), ne = (P = {}, P[a] = j + "Date", P[b] = j + "Date", P[d] = j + "Month", P[S] = j + "FullYear", P[l] = j + "Hours", P[c] = j + "Minutes", P[i] = j + "Seconds", P[s] = j + "Milliseconds", P)[A], ae = A === a ? this.$D + (z - this.$W) : z;
        if (A === d || A === S) {
          var G = this.clone().set(b, 1);
          G.$d[ne](ae), G.init(), this.$d = G.set(b, Math.min(this.$D, G.daysInMonth())).$d;
        } else
          ne && this.$d[ne](ae);
        return this.init(), this;
      }, k.set = function(T, z) {
        return this.clone().$set(T, z);
      }, k.get = function(T) {
        return this[C.p(T)]();
      }, k.add = function(T, z) {
        var P, A = this;
        T = Number(T);
        var j = C.p(z), ne = function(R) {
          var X = w(A);
          return C.w(X.date(X.date() + Math.round(R * T)), A);
        };
        if (j === d)
          return this.set(d, this.$M + T);
        if (j === S)
          return this.set(S, this.$y + T);
        if (j === a)
          return ne(1);
        if (j === u)
          return ne(7);
        var ae = (P = {}, P[c] = n, P[l] = o, P[i] = t, P)[j] || 1, G = this.$d.getTime() + T * ae;
        return C.w(G, this);
      }, k.subtract = function(T, z) {
        return this.add(-1 * T, z);
      }, k.format = function(T) {
        var z = this, P = this.$locale();
        if (!this.isValid())
          return P.invalidDate || $;
        var A = T || "YYYY-MM-DDTHH:mm:ssZ", j = C.z(this), ne = this.$H, ae = this.$m, G = this.$M, R = P.weekdays, X = P.months, te = function(Q, B, F, p) {
          return Q && (Q[B] || Q(z, A)) || F[B].slice(0, p);
        }, M = function(Q) {
          return C.s(ne % 12 || 12, Q, "0");
        }, Z = P.meridiem || function(Q, B, F) {
          var p = Q < 12 ? "AM" : "PM";
          return F ? p.toLowerCase() : p;
        }, _ = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: G + 1, MM: C.s(G + 1, 2, "0"), MMM: te(P.monthsShort, G, X, 3), MMMM: te(X, G), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: te(P.weekdaysMin, this.$W, R, 2), ddd: te(P.weekdaysShort, this.$W, R, 3), dddd: R[this.$W], H: String(ne), HH: C.s(ne, 2, "0"), h: M(1), hh: M(2), a: Z(ne, ae, !0), A: Z(ne, ae, !1), m: String(ae), mm: C.s(ae, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: j };
        return A.replace(I, function(Q, B) {
          return B || _[Q] || j.replace(":", "");
        });
      }, k.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, k.diff = function(T, z, P) {
        var A, j = C.p(z), ne = w(T), ae = (ne.utcOffset() - this.utcOffset()) * n, G = this - ne, R = C.m(this, ne);
        return R = (A = {}, A[S] = R / 12, A[d] = R, A[v] = R / 3, A[u] = (G - ae) / 6048e5, A[a] = (G - ae) / 864e5, A[l] = G / o, A[c] = G / n, A[i] = G / t, A)[j] || G, P ? R : C.a(R);
      }, k.daysInMonth = function() {
        return this.endOf(d).$D;
      }, k.$locale = function() {
        return m[this.$L];
      }, k.locale = function(T, z) {
        if (!T)
          return this.$L;
        var P = this.clone(), A = E(T, z, !0);
        return A && (P.$L = A), P;
      }, k.clone = function() {
        return C.w(this.$d, this);
      }, k.toDate = function() {
        return new Date(this.valueOf());
      }, k.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, k.toISOString = function() {
        return this.$d.toISOString();
      }, k.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), q = W.prototype;
    return w.prototype = q, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", d], ["$y", S], ["$D", b]].forEach(function(O) {
      q[O[1]] = function(k) {
        return this.$g(k, O[0], O[1]);
      };
    }), w.extend = function(O, k) {
      return O.$i || (O(k, W, w), O.$i = !0), w;
    }, w.locale = E, w.isDayjs = f, w.unix = function(O) {
      return w(1e3 * O);
    }, w.en = m[y], w.Ls = m, w.p = {}, w;
  });
})(Ps);
const L = dt, Pt = "reactSchedulerOutsideWrapper", ze = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Os = As`

  #${Pt} {
    font-family: ${ze};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Pt} *,
 #${Pt} *:before,
 #${Pt} *:after {
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
}, Dt = `
margin: 0;
padding: 0;
`, ut = `
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
const Te = 50, Ve = 24, ft = 16, xt = 40, Ut = xt + ft + Ve, Mt = 84, ve = 56, Fe = 196, We = 12, Ye = 50, kt = 24, Yt = 16, yn = 40, Ls = kt + Yt + yn, cr = 24, lr = 52, tt = {
  topRow: `600 14px ${ze}`,
  middleRow: `400 10px ${ze}`,
  bottomRow: {
    name: `600 14px ${ze}`,
    number: `600 10px ${ze}`,
    hoursInDay: `400 9px ${ze}`
  }
}, bt = 3, vn = 12, Kt = 24, Rs = "reactSchedulerCanvasHeaderWrapper", lo = "reactSchedulerCanvasWrapper", nt = Pt, Ns = 4, en = 48, Qe = 5, Fs = 40, dr = 8, zn = Ve / 2 + 2, uo = ft / 2 + Ve + 1, ur = 2, Ae = 60, Ne = 21, fo = 58, ho = "reactSchedulerBody", fr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Hn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, po = (e, r) => L(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), mo = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Hn(e),
  isCurrentDay: e.isSame(L(), "day"),
  year: parseInt(e.format("YYYY"))
}), Bn = (e, r, t, n, o, s, i, c = !1) => {
  s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.mode === "dark" ? i.colors.primary : "#F2F6F4", e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ve);
  const l = i.mode === "dark";
  e.strokeStyle = l ? i.colors.border : "#EEF3F0", e.beginPath(), e.moveTo(r + n - 0.5, t), e.lineTo(r + n - 0.5, t + ve), e.stroke(), e.strokeStyle = l ? i.colors.border : "#E4EAE7", e.beginPath(), e.moveTo(r, t + 0.5), e.lineTo(r + n, t + 0.5), e.stroke(), c && (e.strokeStyle = l ? i.colors.today : "#5C8374", e.beginPath(), e.moveTo(r + 0.5, t), e.lineTo(r + 0.5, t + ve), e.stroke());
}, Wn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Ne;
}, zs = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Wn(i, s);
    for (let l = 0; l <= t; l++) {
      const a = L(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), u = a.isSame(L(), "day"), d = a.date() === 1;
      Bn(
        e,
        l * Te,
        i * ve + c,
        Te,
        Hn(a),
        u,
        o,
        d
      );
    }
  }
}, Hs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Bs = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * We;
  const l = r * ve + s.length * Ne;
  for (let a = 0; a <= t; a++) {
    const d = L(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(L(), "week");
    for (let v = 0; v < r; v++) {
      const S = Wn(v, s);
      Bn(e, i, v * ve + S, Mt, !0, d, o);
    }
    i += Mt;
  }
  for (let a = 0; a < t; a++) {
    const u = po(n, a) * We;
    Hs(e, c, l, o), c += u;
  }
}, Ws = (e, r, t, n, o, s = []) => {
  const i = L(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const l = Wn(c, s);
    for (let a = 0; a <= t; a++) {
      let u;
      a === Math.floor(t / 2) ? u = L() : a > Math.floor(t / 2) ? u = L().add(a - Math.floor(t / 2), "hours") : u = L().subtract(Math.floor(t / 2) - c, "hours");
      const d = i.isSame(L(), "day") && u.isSame(L(), "hour");
      Bn(
        e,
        a * Ye + Ye / 2 - 0.5,
        c * ve + l,
        Ye,
        Hn(u),
        d,
        o
      );
    }
  }
}, js = (e, r, t, n, o = !1) => {
  const s = t * ve + r * Ne, i = e.canvas.width;
  e.fillStyle = o ? n.colors.subcontractBorder + "40" : n.mode === "dark" ? n.colors.primary + "80" : "#E9EFEC", e.fillRect(0, s, i, Ne);
}, Zs = (e, r, t, n, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(lo)) {
    switch (r) {
      case 0:
        Bs(e, t, n, o, s, i);
        break;
      case 1:
        zs(e, t, n, o, s, i);
        break;
      case 2:
        Ws(e, t, n, o, s, i);
        break;
    }
    for (let a = 0; a < i.length; a++)
      js(e, a, i[a], s, i[a] === c);
    if (r === 1) {
      const a = L(`${o.year}-${o.month + 1}-${o.dayOfMonth}`), u = t * ve + i.length * Ne;
      e.strokeStyle = s.mode === "dark" ? s.colors.today : "#5C8374", e.setLineDash([]);
      for (let d = 0; d <= n; d++)
        if (a.add(d, "days").date() === 1) {
          const v = d * Te + 0.5;
          e.beginPath(), e.moveTo(v, 0), e.lineTo(v, u), e.stroke();
        }
    }
  }
};
var xn = {}, Vs = {
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
  })(Ie, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var u = i(this).startOf(n).add(1, n).date(a), d = i(this).endOf(t);
          if (u.isBefore(d))
            return 1;
        }
        var v = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), S = this.diff(v, t, !0);
        return S < 0 ? i(this).startOf("week").week() : Math.ceil(S);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Vs);
const Gs = xn;
var bn = {}, Xs = {
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
  })(Ie, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Xs);
const Us = bn;
var wn = {}, Ks = {
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
        var u, d, v, S, b = i(this), $ = (u = this.isoWeekYear(), d = this.$u, v = (d ? s.utc : s)().year(u).startOf("year"), S = 4 - v.isoWeekday(), v.isoWeekday() > 4 && (S += 7), v.add(S, t));
        return b.diff($, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, u) {
        var d = this.$utils(), v = !!d.u(u) || u;
        return d.p(a) === "isoweek" ? v ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, u);
      };
    };
  });
})(Ks);
const Js = wn;
var Sn = {}, qs = {
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
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), u = o(i), d = (l = l || "()")[0] === "(", v = l[1] === ")";
        return (d ? this.isAfter(a, c) : !this.isBefore(a, c)) && (v ? this.isBefore(u, c) : !this.isAfter(u, c)) || (d ? this.isBefore(a, c) : !this.isAfter(a, c)) && (v ? this.isAfter(u, c) : !this.isBefore(u, c));
      };
    };
  });
})(qs);
const Qs = Sn;
var Cn = {}, ei = {
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
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, u = 2592e6, d = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, v = { years: a, months: u, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, S = function(y) {
      return y instanceof N;
    }, b = function(y, m, f) {
      return new N(y, f, m.$l);
    }, $ = function(y) {
      return n.p(y) + "s";
    }, g = function(y) {
      return y < 0;
    }, I = function(y) {
      return g(y) ? Math.ceil(y) : Math.floor(y);
    }, K = function(y) {
      return Math.abs(y);
    }, Y = function(y, m) {
      return y ? g(y) ? { negative: !0, format: "" + K(y) + m } : { negative: !1, format: "" + y + m } : { negative: !1, format: "" };
    }, N = function() {
      function y(f, E, w) {
        var C = this;
        if (this.$d = {}, this.$l = w, f === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E)
          return b(f * v[$(E)], this);
        if (typeof f == "number")
          return this.$ms = f, this.parseFromMilliseconds(), this;
        if (typeof f == "object")
          return Object.keys(f).forEach(function(O) {
            C.$d[$(O)] = f[O];
          }), this.calMilliseconds(), this;
        if (typeof f == "string") {
          var W = f.match(d);
          if (W) {
            var q = W.slice(2).map(function(O) {
              return O != null ? Number(O) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var m = y.prototype;
      return m.calMilliseconds = function() {
        var f = this;
        this.$ms = Object.keys(this.$d).reduce(function(E, w) {
          return E + (f.$d[w] || 0) * v[w];
        }, 0);
      }, m.parseFromMilliseconds = function() {
        var f = this.$ms;
        this.$d.years = I(f / a), f %= a, this.$d.months = I(f / u), f %= u, this.$d.days = I(f / c), f %= c, this.$d.hours = I(f / i), f %= i, this.$d.minutes = I(f / s), f %= s, this.$d.seconds = I(f / o), f %= o, this.$d.milliseconds = f;
      }, m.toISOString = function() {
        var f = Y(this.$d.years, "Y"), E = Y(this.$d.months, "M"), w = +this.$d.days || 0;
        this.$d.weeks && (w += 7 * this.$d.weeks);
        var C = Y(w, "D"), W = Y(this.$d.hours, "H"), q = Y(this.$d.minutes, "M"), O = this.$d.seconds || 0;
        this.$d.milliseconds && (O += this.$d.milliseconds / 1e3);
        var k = Y(O, "S"), T = f.negative || E.negative || C.negative || W.negative || q.negative || k.negative, z = W.format || q.format || k.format ? "T" : "", P = (T ? "-" : "") + "P" + f.format + E.format + C.format + z + W.format + q.format + k.format;
        return P === "P" || P === "-P" ? "P0D" : P;
      }, m.toJSON = function() {
        return this.toISOString();
      }, m.format = function(f) {
        var E = f || "YYYY-MM-DDTHH:mm:ss", w = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return E.replace(l, function(C, W) {
          return W || String(w[C]);
        });
      }, m.as = function(f) {
        return this.$ms / v[$(f)];
      }, m.get = function(f) {
        var E = this.$ms, w = $(f);
        return w === "milliseconds" ? E %= 1e3 : E = w === "weeks" ? I(E / v[w]) : this.$d[w], E === 0 ? 0 : E;
      }, m.add = function(f, E, w) {
        var C;
        return C = E ? f * v[$(E)] : S(f) ? f.$ms : b(f, this).$ms, b(this.$ms + C * (w ? -1 : 1), this);
      }, m.subtract = function(f, E) {
        return this.add(f, E, !0);
      }, m.locale = function(f) {
        var E = this.clone();
        return E.$l = f, E;
      }, m.clone = function() {
        return b(this.$ms, this);
      }, m.humanize = function(f) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!f);
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
      }, y;
    }();
    return function(y, m, f) {
      t = f, n = f().$utils(), f.duration = function(C, W) {
        var q = f.locale();
        return b(C, { $l: q }, W);
      }, f.isDuration = S;
      var E = m.prototype.add, w = m.prototype.subtract;
      m.prototype.add = function(C, W) {
        return S(C) && (C = C.asMilliseconds()), E.bind(this)(C, W);
      }, m.prototype.subtract = function(C, W) {
        return S(C) && (C = C.asMilliseconds()), w.bind(this)(C, W);
      };
    };
  });
})(ei);
const ti = Cn;
var ni = "Expected a function", hr = 0 / 0, ri = "[object Symbol]", oi = /^\s+|\s+$/g, si = /^[-+]0x[0-9a-f]+$/i, ii = /^0b[01]+$/i, ai = /^0o[0-7]+$/i, ci = parseInt, li = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, di = typeof self == "object" && self && self.Object === Object && self, ui = li || di || Function("return this")(), fi = Object.prototype, hi = fi.toString, pi = Math.max, mi = Math.min, on = function() {
  return ui.Date.now();
};
function gi(e, r, t) {
  var n, o, s, i, c, l, a = 0, u = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(ni);
  r = pr(r) || 0, Mn(t) && (u = !!t.leading, d = "maxWait" in t, s = d ? pi(pr(t.maxWait) || 0, r) : s, v = "trailing" in t ? !!t.trailing : v);
  function S(m) {
    var f = n, E = o;
    return n = o = void 0, a = m, i = e.apply(E, f), i;
  }
  function b(m) {
    return a = m, c = setTimeout(I, r), u ? S(m) : i;
  }
  function $(m) {
    var f = m - l, E = m - a, w = r - f;
    return d ? mi(w, s - E) : w;
  }
  function g(m) {
    var f = m - l, E = m - a;
    return l === void 0 || f >= r || f < 0 || d && E >= s;
  }
  function I() {
    var m = on();
    if (g(m))
      return K(m);
    c = setTimeout(I, $(m));
  }
  function K(m) {
    return c = void 0, v && n ? S(m) : (n = o = void 0, i);
  }
  function Y() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function N() {
    return c === void 0 ? i : K(on());
  }
  function y() {
    var m = on(), f = g(m);
    if (n = arguments, o = this, l = m, f) {
      if (c === void 0)
        return b(l);
      if (d)
        return c = setTimeout(I, r), S(l);
    }
    return c === void 0 && (c = setTimeout(I, r)), i;
  }
  return y.cancel = Y, y.flush = N, y;
}
function Mn(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function yi(e) {
  return !!e && typeof e == "object";
}
function vi(e) {
  return typeof e == "symbol" || yi(e) && hi.call(e) == ri;
}
function pr(e) {
  if (typeof e == "number")
    return e;
  if (vi(e))
    return hr;
  if (Mn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Mn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(oi, "");
  var t = ii.test(e);
  return t || ai.test(e) ? ci(e.slice(2), t ? 2 : 8) : si.test(e) ? hr : +e;
}
var kn = gi;
const Zt = [0, 1, 2];
var Lt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Lt || {});
const go = (e) => Zt.includes(e), yt = (e) => {
  var n;
  const t = (((n = document.getElementById(nt)) == null ? void 0 : n.clientWidth) || 0) - Fe;
  switch (e) {
    case 1:
      return Math.ceil(t / Te) * bt;
    case 2:
      return Math.ceil(t / Ye) * bt;
    default:
      return Math.ceil(t / Mt) * bt;
  }
}, xi = (e) => yt(e) / bt, tn = (e, r) => {
  const t = yt(r) / 2;
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
}, bi = (e, r) => {
  const t = tn(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, jn = () => {
  var t;
  const e = ((t = document.getElementById(nt)) == null ? void 0 : t.clientWidth) || 0;
  return Math.max(0, e - Fe) * bt;
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
  date: L(),
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
L.extend(Gs);
L.extend(Us);
L.extend(Js);
L.extend(Qs);
L.extend(ti);
const wi = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = L(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c,
  toolbarActions: l
}) => {
  const { zoom: a, maxRecordsPerPage: u = 50 } = n, [d, v] = me(a), [S, b] = me(L()), [$, g] = me(null), [I, K] = me(!1), [Y, N] = me(yt(d)), y = Zt[d] !== Zt[Zt.length - 1], m = d !== 0, f = $e(() => bi(S, d), [S, d]), E = tn(S, d).startDate, w = L(E).dayOfYear(), C = mo(E), W = he(null), q = he(!1), O = he(null), [k, T] = me([{ x: 0, y: 0 }]), z = de(
    (B, F = "auto") => {
      var J, D, U, ee;
      const p = jn();
      switch (B) {
        case "back":
          return (J = W.current) == null ? void 0 : J.scrollTo({
            behavior: F,
            left: p / 3
          });
        case "forward":
          return (D = W.current) == null ? void 0 : D.scrollTo({
            behavior: F,
            left: p / 3
          });
        case "middle": {
          const V = p / bt / 4;
          return (U = W.current) == null ? void 0 : U.scrollTo({
            behavior: F,
            left: p / 2 - V
          });
        }
        default:
          return (ee = W.current) == null ? void 0 : ee.scrollTo({
            behavior: F,
            left: p / 2
          });
      }
    },
    []
  ), P = (B) => {
    T(B);
  }, A = de(
    (B) => {
      const F = xi(d);
      let p;
      switch (d) {
        case 0:
          p = F * 7;
          break;
        case 1:
          p = F;
          break;
        case 2:
          p = Math.ceil(F / Kt);
          break;
      }
      kn(() => {
        switch ((B === "forward" || B === "back") && (q.current = !0), O.current = B, B) {
          case "back":
            b((D) => D.subtract(p, "days"));
            break;
          case "forward":
            b((D) => D.add(p, "days"));
            break;
          case "middle":
            b(L());
            break;
        }
        s == null || s(f);
      }, 300)();
    },
    [s, f, d]
  );
  ye(() => {
    O.current && (z(O.current), O.current = null);
  }, [S, z]), ye(() => {
    W.current = document.getElementById(nt), N(yt(d));
  }, [d]), ye(() => {
    const B = () => N(yt(d));
    return window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, [d]), ye(() => {
    s == null || s(f);
  }, [s, f]), ye(() => {
    K(!1);
  }, [o]), ye(() => {
    I || (z("middle"), K(!0), b(o));
  }, [o, I, z]);
  const j = () => {
    t || (b(
      (B) => d === 2 ? B.add(cr, "hours") : B.add(ur, "weeks")
    ), s == null || s(f));
  }, ne = de(() => {
    t || A("forward");
  }, [t, A]), ae = () => {
    t || (b(
      (B) => d === 2 ? B.subtract(cr, "hours") : B.subtract(ur, "weeks")
    ), s == null || s(f));
  }, G = de(() => {
    !I || t || A("back");
  }, [I, t, A]), R = de(() => {
    t || (O.current = "middle", b(L()), g(null), s == null || s(f));
  }, [t, s, f]), X = de(
    (B) => {
      if (t)
        return;
      const F = L(B).startOf("day");
      F.isValid() && (O.current = "middle", b(F), g(F), s == null || s(f));
    },
    [t, s, f]
  );
  ye(() => {
    if (!$)
      return;
    const B = () => g(null);
    return document.addEventListener("mousedown", B, { once: !0 }), () => document.removeEventListener("mousedown", B);
  }, [$]);
  const te = () => Z(d + 1), M = () => Z(d - 1), Z = (B) => {
    go(B) && (v(B), N(yt(B)), s == null || s(f));
  }, _ = () => i == null ? void 0 : i(), { Provider: Q } = yo;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: j,
        handleScrollNext: ne,
        handleGoPrev: ae,
        handleScrollPrev: G,
        handleGoToday: R,
        goToDate: X,
        zoomIn: te,
        zoomOut: M,
        setZoom: Z,
        zoom: d,
        isNextZoom: y,
        isPrevZoom: m,
        date: S,
        jumpDate: $,
        isLoading: t,
        cols: Y,
        startDate: C,
        dayOfYear: w,
        toggleDisplayActiveUnits: _,
        tilesCoords: k,
        updateTilesCoords: P,
        recordsThreshold: u,
        onClearFilterData: c,
        suppressNextSlideRef: q,
        toolbarActions: l
      },
      children: r
    }
  );
}, Ze = () => rt(yo), vo = (e, r, t) => {
  const n = Math.max(0, r), o = Math.max(0, t);
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = o * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = o + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, xo = () => {
  var e;
  return typeof window < "u" && !!((e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches);
}, bo = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ve + n * Ne;
    if (e >= s + Ne)
      n++;
    else if (e >= s)
      return o * ve + n * Ne - n * Ne;
  }
  return t - n * Ne;
}, Si = 5, mr = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > Si;
}, vt = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, Ci = ({
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
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((Z) => ({ ...Z, data: [Z.data] })) : r : e, {
    enabled: u = !0,
    isDraggable: d,
    resourceOnly: v = !1,
    isValidDrop: S
  } = i, [b, $] = me("idle"), [g, I] = me(null), [K, Y] = me({ x: 0, y: 0 }), [N, y] = me({ width: 0, height: 48 }), [m, f] = me(null), [E, w] = me(!0), C = he({ x: 0, y: 0 }), W = he({ x: 0, y: 0 }), q = he({ x: 0, y: 0 }), O = he(null), k = he(null), T = he(0), z = he(null), P = de(
    (Z) => !u || Z.draggable === !1 ? !1 : d ? d(Z) : !0,
    [u, d]
  ), A = de(
    (Z, _) => {
      const Q = bo(_, l), B = Math.floor(Q / ve);
      let F;
      switch (t) {
        case 0:
          F = We * 7;
          break;
        case 1:
          F = Te;
          break;
        case 2:
          F = Ye;
          break;
        default:
          F = Te;
      }
      const p = Math.floor(Z / F);
      let J;
      const D = L().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
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
      return { snappedDate: J, snappedResourceIndex: B };
    },
    [t, n, l]
  ), j = de(
    (Z, _, Q, B) => {
      const F = [], p = _.getTime(), J = Q.getTime(), D = a.find((ee) => ee.id === B);
      if (!D)
        return F;
      const U = [];
      for (const ee of D.data)
        Array.isArray(ee) ? U.push(...ee) : U.push(ee);
      for (const ee of U) {
        if (ee.segmentId === Z.segmentId)
          continue;
        const V = ee.startDate.getTime(), ce = ee.endDate.getTime();
        if (p >= V && p < ce || J > V && J <= ce || p <= V && J >= ce) {
          const ue = new Date(Math.max(p, V)), xe = new Date(Math.min(J, ce)), De = xe.getTime() - ue.getTime();
          F.push({
            event: ee,
            conflictStart: ue,
            conflictEnd: xe,
            overlapDuration: De
          });
        }
      }
      return F;
    },
    [a]
  ), ne = de(
    (Z, _, Q, B) => {
      const F = [], p = _.getTime(), J = Q.getTime(), D = L(_).format("YYYY-MM-DD"), U = a.find((V) => V.id === B);
      if (!U)
        return F;
      const ee = [];
      for (const V of U.data)
        Array.isArray(V) ? ee.push(...V) : ee.push(V);
      for (const V of ee) {
        if (V.segmentId === Z.segmentId)
          continue;
        const ce = V.startDate.getTime(), ge = V.endDate.getTime(), ue = L(V.startDate).format("YYYY-MM-DD"), xe = L(V.endDate).format("YYYY-MM-DD"), De = L(Q).format("YYYY-MM-DD");
        if (!(ue === D || xe === D || ue === De || xe === De || L(V.startDate).isBefore(_, "day") && L(V.endDate).isAfter(Q, "day")) || p >= ce && p < ge || J > ce && J <= ge || p <= ce && J >= ge)
          continue;
        let pe, Oe;
        ge <= p ? (pe = p - ge, Oe = "before") : (pe = ce - J, Oe = "after"), F.push({
          event: V,
          timeGap: pe,
          position: Oe
        });
      }
      return F.sort((V, ce) => V.timeGap - ce.timeGap);
    },
    [a]
  ), ae = de(
    (Z, _, Q) => {
      const B = A(_, Q);
      let F, p;
      if (v)
        F = Z.startDate, p = Z.endDate;
      else {
        const ge = L(Z.endDate).diff(Z.startDate);
        F = B.snappedDate, p = L(F).add(ge, "milliseconds").toDate();
      }
      let J = 0, D = "", U;
      for (const ge of e) {
        const ue = Math.max(ge.data.length, 1);
        if (B.snappedResourceIndex < J + ue) {
          D = ge.id, U = ge.capacity;
          break;
        }
        J += ue;
      }
      if (!D)
        return null;
      let ee = !0;
      U !== void 0 && Z.totalPassengers !== void 0 && (ee = Z.totalPassengers <= U);
      const V = j(Z, F, p, D), ce = V.length === 0 ? ne(Z, F, p, D) : [];
      return {
        startDate: F,
        endDate: p,
        resourceId: D,
        resourceIndex: B.snappedResourceIndex,
        resourceCapacity: U,
        hasCapacity: ee,
        conflicts: V,
        hasConflict: V.length > 0,
        nearbyEvents: ce
      };
    },
    [A, e, v, j, ne]
  ), G = de(
    (Z, _) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - T.current < 100)
        return;
      T.current = Q;
      const B = {
        event: Z,
        currentStartDate: _.startDate,
        currentEndDate: _.endDate,
        currentResourceId: _.resourceId,
        conflicts: _.conflicts
      };
      s(B);
    },
    [s]
  ), R = de(
    (Z, _) => {
      if (!P(Z) || !c.current)
        return;
      _.preventDefault(), _.stopPropagation();
      const Q = _.target.closest('[style*="left"]');
      let B = 0, F = 0;
      Q && Q.style.left && Q.style.top && (B = parseInt(Q.style.left), F = parseInt(Q.style.top));
      const p = vt(
        _.clientX,
        _.clientY,
        c.current
      );
      C.current = { x: B, y: F }, W.current = { x: _.clientX, y: _.clientY }, q.current = {
        x: p.x - B,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, z.current = {
        startDate: Z.startDate,
        endDate: Z.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const U of e) {
        for (const ee of U.data)
          if (ee.some((V) => V.segmentId === Z.segmentId)) {
            z.current.resourceId = U.id;
            break;
          }
        if (z.current.resourceId)
          break;
      }
      I(Z), $("potential"), Y({ x: B, y: F });
      let J = 100, D = 48;
      if (Q) {
        const U = Q.getBoundingClientRect();
        J = U.width, D = U.height;
      }
      y({ width: J, height: D });
    },
    [P, c, e, t]
  ), X = de(
    (Z) => {
      if (!c.current)
        return;
      let _ = c.current;
      for (; _ && _ !== document.body; ) {
        const V = window.getComputedStyle(_);
        if (_.scrollHeight > _.clientHeight && (V.overflowY === "auto" || V.overflowY === "scroll" || V.overflow === "auto" || V.overflow === "scroll"))
          break;
        _ = _.parentElement;
      }
      (!_ || _ === document.body) && (_ = document.documentElement);
      const Q = _.getBoundingClientRect(), B = Z.clientY, F = 50, p = 12, J = B - Q.top, D = Q.bottom - B;
      let U = !1, ee = 0;
      J < F && J > 0 ? (U = !0, ee = -p * (1 - J / F)) : D < F && D > 0 && (U = !0, ee = p * (1 - D / F)), U ? (k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
        _.scrollTop += ee, b === "dragging" && X(Z);
      })) : k.current && (cancelAnimationFrame(k.current), k.current = null);
    },
    [c, b]
  ), te = de(
    (Z) => {
      if (b === "idle" || b === "animating" || !g || !c.current)
        return;
      const _ = { x: Z.clientX, y: Z.clientY };
      if (b === "potential")
        if (mr(W.current, _))
          $("dragging");
        else
          return;
      X(Z);
      const Q = vt(
        Z.clientX,
        Z.clientY,
        c.current
      );
      O.current && cancelAnimationFrame(O.current), O.current = requestAnimationFrame(() => {
        const B = {
          x: Q.x - q.current.x,
          y: Q.y - q.current.y
        };
        Y(B);
        const F = ae(g, Q.x, Q.y);
        if (F && S) {
          const p = {
            event: g,
            currentStartDate: F.startDate,
            currentEndDate: F.endDate,
            currentResourceId: F.resourceId,
            conflicts: F.conflicts
          };
          F.hasConflict = !S(p);
        }
        if (f(F), F) {
          const p = F.hasCapacity !== !1;
          w(p), G(g, F);
        }
      });
    },
    [b, g, c, ae, G, S, X]
  ), M = de(
    async (Z) => {
      if (b === "idle" || b === "animating")
        return;
      const _ = { x: Z.clientX, y: Z.clientY };
      if (!mr(W.current, _) || b === "potential") {
        $("idle"), I(null), f(null);
        return;
      }
      if (!g || !m || !z.current) {
        $("idle"), I(null), f(null);
        return;
      }
      if (m.hasCapacity === !1) {
        w(!1), $("animating"), Y(C.current), setTimeout(() => {
          $("idle"), I(null), f(null), w(!0);
        }, 300);
        return;
      }
      const B = {
        event: g,
        originalStartDate: z.current.startDate,
        originalEndDate: z.current.endDate,
        originalResourceId: z.current.resourceId,
        newStartDate: m.startDate,
        newEndDate: m.endDate,
        newResourceId: m.resourceId,
        hasConflict: m.hasConflict,
        conflicts: m.conflicts
      };
      let F = !0;
      if (o)
        try {
          const p = o(B);
          F = p instanceof Promise ? await p : p;
        } catch {
          F = !1;
        }
      F ? (w(!0), $("idle"), I(null), f(null)) : (w(!1), $("animating"), Y(C.current), setTimeout(() => {
        $("idle"), I(null), f(null), w(!0);
      }, 300));
    },
    [b, g, m, o, S]
  );
  return ye(() => {
    if (b === "potential" || b === "dragging") {
      const Z = (Q) => te(Q), _ = (Q) => M(Q);
      return document.addEventListener("mousemove", Z), document.addEventListener("mouseup", _), () => {
        document.removeEventListener("mousemove", Z), document.removeEventListener("mouseup", _);
      };
    } else
      return () => {
      };
  }, [b, te, M]), ye(() => () => {
    O.current && (cancelAnimationFrame(O.current), O.current = null), k.current && (cancelAnimationFrame(k.current), k.current = null);
  }, []), ye(() => {
    (b === "idle" || b === "animating") && (O.current && (cancelAnimationFrame(O.current), O.current = null), k.current && (cancelAnimationFrame(k.current), k.current = null));
  }, [b]), ye(() => {
    (b === "dragging" || b === "potential") && (b === "dragging" ? ($("animating"), Y(C.current), setTimeout(() => {
      $("idle"), I(null), f(null);
    }, 300)) : ($("idle"), I(null), f(null)));
  }, [t]), ye(() => {
    if ((b === "dragging" || b === "potential") && g) {
      let Z = !1;
      for (const _ of e) {
        for (const Q of _.data)
          if (Q.some((B) => B.segmentId === g.segmentId)) {
            Z = !0;
            break;
          }
        if (Z)
          break;
      }
      Z || (b === "dragging" ? ($("animating"), Y(C.current), setTimeout(() => {
        $("idle"), I(null), f(null);
      }, 300)) : ($("idle"), I(null), f(null)));
    }
  }, [e, b, g]), {
    dragState: b,
    draggedEvent: g,
    ghostPosition: K,
    ghostDimensions: N,
    dropTarget: m,
    isValidDrop: E,
    handleDragStart: R,
    isDraggable: P,
    draggingEventId: (g == null ? void 0 : g.segmentId) || null,
    resourceOnly: v
  };
}, Mi = ({
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
  const { enabled: u = !1, isSelectable: d } = i, v = u && !!o, S = de((p) => {
    let J = 0;
    for (const D of a)
      D <= p && J++;
    return p * ve + J * Ne;
  }, [a]), [b, $] = me("idle"), [g, I] = me(null), [K, Y] = me(null), [N, y] = me(null), [m, f] = me(!1), [E, w] = me([]), [C, W] = me(!1), q = he(null), O = he(null), k = he(null), T = he(null), z = de(() => {
    switch (t) {
      case 0:
        return We * 7;
      case 1:
        return Te;
      case 2:
        return Ye;
      default:
        return Te;
    }
  }, [t]), P = de(
    (p) => {
      const J = z(), D = Math.floor(p / J), U = L().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return U.add(D * 7, "days").toDate();
        case 1:
          return U.add(D, "days").toDate();
        case 2:
          return U.add(D, "hours").toDate();
        default:
          return U.toDate();
      }
    },
    [t, n, z]
  ), A = de(
    (p) => {
      const J = bo(p, a), D = Math.floor(J / ve);
      let U = 0;
      for (const ee of e) {
        const V = Math.max(ee.data.length, 1);
        if (D < U + V)
          return {
            resourceId: ee.id,
            resourceIndex: D,
            resourceLabel: ee.label
          };
        U += V;
      }
      return null;
    },
    [e, a]
  ), j = de(
    (p) => {
      const J = z();
      return Math.floor(p / J) * J;
    },
    [z]
  ), ne = de(
    (p, J, D, U = []) => {
      const ee = [], ce = (r || e).find((xe) => xe.id === p), ge = J.getTime(), ue = D.getTime();
      if (ce) {
        const xe = ce.data[0], De = xe && Array.isArray(xe) ? ce.data.flat() : ce.data;
        for (const Me of De) {
          const oe = new Date(Me.startDate).getTime(), pe = new Date(Me.endDate).getTime();
          if (ge < pe && ue > oe) {
            const Oe = new Date(Math.max(ge, oe)), Re = new Date(Math.min(ue, pe)), fe = Re.getTime() - Oe.getTime();
            ee.push({
              event: Me,
              conflictStart: Oe,
              conflictEnd: Re,
              overlapDuration: fe
            });
          }
        }
      }
      for (const xe of U) {
        if (xe.resourceId !== p)
          continue;
        const De = xe.startDate.getTime(), Me = xe.endDate.getTime();
        if (ge < Me && ue > De) {
          const oe = new Date(Math.max(ge, De)), pe = new Date(Math.min(ue, Me)), Oe = pe.getTime() - oe.getTime(), Re = {
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
            event: Re,
            conflictStart: oe,
            conflictEnd: pe,
            overlapDuration: Oe
          });
        }
      }
      return ee;
    },
    [e, r]
  ), ae = de(
    (p) => {
      if (!v || l || !c.current || p.button !== 0)
        return;
      const J = p.target;
      if (J.closest("[data-segment-id]") || J.closest("[data-multi-select-ui]"))
        return;
      const D = vt(p.clientX, p.clientY, c.current), U = A(D.y);
      if (!U)
        return;
      q.current = { x: p.clientX, y: p.clientY }, O.current = U.resourceIndex;
      const ee = j(D.x), V = z(), ce = S(U.resourceIndex);
      I(D), Y(D), y({
        x: ee,
        y: ce,
        width: V,
        height: ve
      }), $("selecting");
    },
    [v, l, c, A, j, z, S]
  ), G = de(
    (p) => {
      Y(p);
      const J = z(), D = j((g == null ? void 0 : g.x) || 0), U = j(p.x), ee = S(O.current), V = Math.min(D, U), ce = Math.max(D, U) + J;
      y({ x: V, y: ee, width: ce - V, height: ve });
    },
    [g, z, j, S]
  ), R = de(() => {
    T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), X = de(
    (p, J) => {
      const D = document.getElementById(nt);
      if (!D || !c.current)
        return;
      const U = D.getBoundingClientRect(), ee = 60, V = 12, ce = p - (U.left + Fe), ge = U.right - p;
      let ue = 0;
      ce < ee ? ue = -V * (1 - Math.max(0, ce) / ee) : ge < ee && (ue = V * (1 - Math.max(0, ge) / ee)), R(), ue !== 0 && (T.current = requestAnimationFrame(() => {
        D.scrollLeft += ue, G(vt(p, J, c.current)), X(p, J);
      }));
    },
    [c, G, R]
  ), te = de(
    (p) => {
      if (b !== "selecting" || !c.current || O.current === null)
        return;
      const J = vt(p.clientX, p.clientY, c.current);
      k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => G(J)), X(p.clientX, p.clientY);
    },
    [b, c, G, X]
  ), M = de(
    (p) => {
      if (b !== "selecting")
        return;
      if (R(), !c.current || !g || !q.current) {
        $("idle"), I(null), Y(null), y(null);
        return;
      }
      const J = vt(p.clientX, p.clientY, c.current), D = A(g.y);
      if (!D) {
        $("idle"), I(null), Y(null), y(null);
        return;
      }
      const U = Math.min(g.x, J.x), ee = Math.max(g.x, J.x), V = P(U), ce = P(ee), ge = L(ce).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (d && !d(D.resourceId, V, ge)) {
        $("idle"), I(null), Y(null), y(null);
        return;
      }
      const ue = ne(
        D.resourceId,
        V,
        ge,
        E
      ), xe = ue.length > 0, De = {
        startDate: V,
        endDate: ge,
        resourceId: D.resourceId,
        resourceLabel: D.resourceLabel,
        zoomLevel: t,
        hasConflict: xe,
        conflicts: xe ? ue : void 0
      };
      if (m)
        w((Me) => [...Me, De]), W(!0);
      else if (o) {
        const Me = o(De), oe = (pe) => {
          pe != null && pe.continueMultiSelect && (f(!0), w([De]), W(!0));
        };
        Me instanceof Promise ? Me.then(oe) : oe(Me);
      }
      $("idle"), I(null), Y(null), y(null), q.current = null, O.current = null;
    },
    [
      b,
      c,
      g,
      A,
      P,
      d,
      o,
      t,
      m,
      ne,
      E,
      R
    ]
  ), Z = de(() => {
    if (E.length > 0 && s) {
      W(!1);
      const p = s(E), J = (D) => {
        D != null && D.continueMultiSelect ? W(!0) : (w([]), f(!1), W(!1));
      };
      p instanceof Promise ? p.then(J) : J(p);
      return;
    }
    w([]), f(!1), W(!1);
  }, [E, s]), _ = de(() => {
    w([]), f(!1), W(!1);
  }, []), Q = de((p) => {
    w((J) => {
      const D = J.filter((U, ee) => ee !== p);
      return D.length === 0 && (f(!1), W(!1)), D;
    });
  }, []), B = de(
    (p, J) => {
      w((D) => D.map((U, ee) => {
        if (ee !== p)
          return U;
        const V = { ...U, ...J }, ce = D.filter((ue, xe) => xe !== p), ge = ne(
          V.resourceId,
          V.startDate,
          V.endDate,
          ce
        );
        return {
          ...V,
          hasConflict: ge.length > 0,
          conflicts: ge.length > 0 ? ge : void 0
        };
      }));
    },
    [ne]
  ), F = de(
    (p) => {
      p.key === "Escape" && (b === "selecting" ? (R(), $("idle"), I(null), Y(null), y(null), q.current = null, O.current = null) : m && E.length > 0 && (w([]), f(!1), W(!1)));
    },
    [b, m, E.length, R]
  );
  return ye(() => {
    if (b === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", M), document.addEventListener("keydown", F), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", M), document.removeEventListener("keydown", F);
      };
  }, [b, te, M, F]), ye(() => {
    if (m && E.length > 0)
      return document.addEventListener("keydown", F), () => {
        document.removeEventListener("keydown", F);
      };
  }, [m, E.length, F]), ye(() => () => {
    k.current && (cancelAnimationFrame(k.current), k.current = null), R();
  }, [R]), ye(() => {
    l && b === "selecting" && (R(), $("idle"), I(null), Y(null), y(null), q.current = null, O.current = null);
  }, [l, b, R]), {
    selectionState: b,
    selectionStart: g,
    selectionEnd: K,
    selectionBox: N,
    handleGridMouseDown: ae,
    isEnabled: v,
    pendingSelections: E,
    confirmSelections: Z,
    clearSelections: _,
    removeSelection: Q,
    updateSelection: B,
    isMultiSelectActive: m,
    hasUnconfirmedSelections: C
  };
}, ki = x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, $i = x.div`
  position: relative;
`, Di = x.canvas``;
x.canvas``;
const Ei = x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, gr = x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, _i = In(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: l, onDragStateChange: a, onTimeRangeSelect: u, onMultiTimeRangeSelect: d, clickToAddConfig: v, separatorRowIndices: S = [], subcontractSeparatorRow: b = -1, fadingUnitIds: $ }, g) {
  const I = he(!1), { handleScrollNext: K, handleScrollPrev: Y, date: N, isLoading: y, cols: m, startDate: f, suppressNextSlideRef: E, config: w } = Ze(), C = he(null), W = he(null), q = he(t), O = he(N), k = he(null), T = he(null), z = he(null), P = he(null), [A, j] = me(!1), ne = Qt(), {
    dragState: ae,
    draggedEvent: G,
    ghostPosition: R,
    ghostDimensions: X,
    dropTarget: te,
    isValidDrop: M,
    handleDragStart: Z,
    isDraggable: _,
    draggingEventId: Q,
    resourceOnly: B
  } = Ci({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: f,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: l,
    gridRef: P,
    separatorRowIndices: S
  });
  ye(() => {
    const fe = ae === "dragging" || ae === "potential";
    j(fe), a && a(fe);
  }, [ae, a]);
  const F = he(!1), p = he(N), J = he(null);
  ye(() => {
    var ke;
    const fe = p.current;
    if (p.current = N, !F.current) {
      F.current = !0;
      return;
    }
    if (E != null && E.current) {
      E.current = !1;
      return;
    }
    const Ee = P.current;
    if (!(Ee != null && Ee.animate))
      return;
    const se = N.isAfter(fe) ? 48 : -48;
    (ke = J.current) == null || ke.cancel(), Ee.style.willChange = "transform";
    const le = Ee.animate(
      [
        { transform: `translateX(${se}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), ie = () => {
      Ee.style.willChange = "";
    };
    le.onfinish = ie, le.oncancel = ie, J.current = le;
  }, [N, E]);
  const {
    selectionState: D,
    selectionBox: U,
    handleGridMouseDown: ee,
    pendingSelections: V,
    confirmSelections: ce,
    clearSelections: ge,
    removeSelection: ue,
    updateSelection: xe,
    isMultiSelectActive: De,
    hasUnconfirmedSelections: Me
  } = Mi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: f,
    onTimeRangeSelect: u,
    onMultiTimeRangeSelect: d,
    clickToAddConfig: v,
    gridRef: P,
    isDragging: A,
    separatorRowIndices: S
  }), oe = de((fe) => {
    fe.preventDefault();
  }, []), pe = de((fe) => {
    fe.preventDefault();
  }, []), Oe = S.length * Ne, Re = de(
    (fe) => {
      const Ee = jn(), se = t * ve + 1 + Oe;
      vo(fe, Ee, se), Zs(fe, r, t, m, f, ne, S, b);
    },
    [m, f, t, r, ne, S, b, Oe]
  );
  return ye(() => {
    if (!C.current)
      return;
    const fe = C.current.getContext("2d");
    if (!fe)
      return;
    const Ee = () => Re(fe);
    return window.addEventListener("resize", Ee), () => window.removeEventListener("resize", Ee);
  }, [Re]), ye(() => {
    var He;
    const fe = q.current, Ee = O.current;
    if (q.current = t, O.current = N, fe === t || !N.isSame(Ee, "day") || xo())
      return;
    const se = C.current, le = W.current;
    if (!se || !le || se.width === 0 || se.height === 0)
      return;
    const ie = le.getContext("2d");
    if (!ie)
      return;
    le.width = se.width, le.height = se.height, le.style.width = se.style.width, le.style.height = se.style.height, ie.setTransform(1, 0, 0, 1, 0, 0), ie.clearRect(0, 0, le.width, le.height), ie.drawImage(se, 0, 0), (He = k.current) == null || He.cancel(), le.style.opacity = "1";
    const ke = le.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    ke.onfinish = () => {
      le.style.opacity = "0";
    }, k.current = ke;
  }, [t, N]), ye(() => {
    const fe = C.current;
    if (!fe)
      return;
    fe.style.letterSpacing = "1px";
    const Ee = fe.getContext("2d");
    Ee && Re(Ee);
  }, [N, t, r, Re]), ye(() => {
    if (!T.current)
      return;
    const fe = new IntersectionObserver(
      (Ee) => {
        Ee[0].isIntersecting && !I.current && (I.current = !0, K(), setTimeout(() => {
          I.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(nt) }
    );
    return fe.observe(T.current), () => {
      fe.disconnect();
    };
  }, [K]), ye(() => {
    if (!z.current)
      return;
    const fe = new IntersectionObserver(
      (Ee) => {
        Ee[0].isIntersecting && !I.current && (I.current = !0, Y(), setTimeout(() => {
          I.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(nt),
        rootMargin: `0px 0px 0px -${Fe}px`
      }
    );
    return fe.observe(z.current), () => {
      fe.disconnect();
    };
  }, [Y]), /* @__PURE__ */ H(ki, { id: lo, children: [
    /* @__PURE__ */ H(
      $i,
      {
        ref: (fe) => {
          typeof g == "function" ? g(fe) : g && (g.current = fe), P.current = fe;
        },
        onMouseDown: ee,
        style: { cursor: u ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(gr, { position: "left", ref: z }),
          /* @__PURE__ */ h(On, { isLoading: y, position: "left" }),
          /* @__PURE__ */ h(
            Di,
            {
              ref: C,
              onDragStart: oe,
              onDragOver: pe,
              style: { userSelect: ae === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(Ei, { ref: W, "aria-hidden": !0 }),
          /* @__PURE__ */ h(Rd, { zoom: r, startDate: f }),
          /* @__PURE__ */ h(Hd, { zoom: r, startDate: f }),
          /* @__PURE__ */ h(
            zl,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onDragStart: Z,
              isDraggable: _,
              draggingEventId: Q,
              separatorRowIndices: S,
              fadingUnitIds: $,
              highlightedSegmentId: (w == null ? void 0 : w.highlightedSegmentId) ?? null,
              focusedUnitIds: (w == null ? void 0 : w.focusedUnitIds) ?? null,
              leavingSegmentIds: (w == null ? void 0 : w.leavingSegmentIds) ?? null,
              ghostProject: (w == null ? void 0 : w.ghostProject) ?? null
            }
          ),
          /* @__PURE__ */ h(gr, { ref: T, position: "right" }),
          /* @__PURE__ */ h(On, { isLoading: y, position: "right" }),
          (ae === "dragging" || ae === "animating") && /* @__PURE__ */ h(
            pd,
            {
              draggedEvent: G,
              ghostPosition: R,
              ghostDimensions: X,
              dropTarget: te,
              isValidDrop: M,
              dragState: ae,
              zoom: r,
              data: n,
              resourceOnly: B,
              separatorRowIndices: S
            }
          ),
          /* @__PURE__ */ h(
            vd,
            {
              selectionBox: U,
              isSelecting: D === "selecting"
            }
          ),
          De && V.length > 0 && /* @__PURE__ */ h(
            Id,
            {
              selections: V,
              data: n,
              zoom: r,
              startDate: f,
              onRemove: ue,
              onUpdate: xe,
              separatorRowIndices: S
            }
          )
        ]
      }
    ),
    De && Me && V.length > 0 && /* @__PURE__ */ h(
      Dd,
      {
        selections: V,
        onConfirm: ce,
        onClear: ge,
        onRemove: ue
      }
    )
  ] });
}), _e = (e, r = "12h") => L(e).format(r === "24h" ? "HH:mm" : "h:mm A"), wo = (e) => {
  const r = L.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, So = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Ae);
    t += o.hours + s, n += r % Ae, n >= Ae && (t++, n -= Ae);
  }), { hours: t, minutes: n };
}, Co = (e, r) => {
  let t = dr;
  switch (r) {
    case 0:
      t = Fs;
      break;
    case 1:
      t = dr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = Ae - e.minutes;
    return i === Ae && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, Ti = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const u = L(a.startDate).isoWeek(), d = L(a.startDate).isoWeekday(), v = L(a.endDate).isoWeek(), S = L(a.endDate).isoWeekday(), { hours: b, minutes: $ } = wo(a.occupancy);
    if (n === u) {
      const g = (Qe + 1 - d) * b, I = (Qe + 1 - d) * $;
      return { hours: Math.max(0, g), minutes: I };
    } else if (n === v) {
      const g = S > Qe ? Qe * b : S * b, I = S > Qe ? Qe * $ : S * $;
      return { hours: g, minutes: I };
    } else if (L(r).isBetween(a.startDate, a.endDate))
      return { hours: Qe * b, minutes: Qe * $ };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = So(o), { free: c, overtime: l } = Co({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, Ai = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((u) => {
    const { hours: d, minutes: v } = wo(u.occupancy);
    return o <= (n ? 7 : 5) ? { hours: d, minutes: v } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = So(s), { free: l, overtime: a } = Co({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Pi = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = L(c.startDate).hour(), a = L(c.endDate).hour(), u = r.hour(), d = L(c.endDate).minute(), v = L(c.startDate).minute();
    l < u && a > u ? t += Ae : l === u && a === u && v && d ? t += d ? d - v : Ae - v : l === u && a >= u ? t += v ? Ae - v : Ae : a === u && d && (t += d);
  });
  const n = Math.floor(t / Ae), o = t % Ae, s = n || o ? 0 : 1, i = n ? 0 : o ? Ae - o : 0;
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
  const s = e.flat(2).filter((i) => n === 1 ? L(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? L(t).isBetween(i.startDate, i.endDate, "hour", "[]") : L(i.startDate).isBetween(
    L(t),
    L(t).add(6, "days"),
    "day",
    "[]"
  ) || L(t).isBetween(L(i.startDate), L(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return Ai(s, t, n, o);
    case 2:
      return Pi(s, t);
    default:
      return Ti(s, t, n);
  }
}, Ii = (e, r, t, n, o, s, i = !1, c = "12h") => {
  let l = "weeks", a;
  switch (s) {
    case 0:
      l = "weeks", a = Mt;
      break;
    case 1:
      l = "days", a = Te;
      break;
    case 2:
      l = "hours", a = Ye;
      break;
  }
  const u = Math.ceil(s === 2 ? (t.x - 0.5 * a) / a : t.x / a), d = L(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(u - 1, l), v = Math.ceil(t.y / ve), S = n.findIndex((K, Y, N) => N.slice(0, Y + 1).reduce((m, f) => m + f, 0) >= v), b = s === 2 ? (u + 1) * a : u * a, $ = (v - 1) * ve + ve, g = Oi(
    o[S],
    S,
    d,
    s,
    i
  ), I = L(e.startDate).isSame(L(e.endDate), "day");
  return {
    coords: { x: b, y: $ },
    mouseCoords: t,
    resourceIndex: S,
    disposition: g,
    reservationData: {
      startTime: _e(e.startDate, c),
      startDate: L(e.startDate).format("MMM D, YYYY"),
      endTime: _e(e.endDate, c),
      endDate: L(e.endDate).format("MMM D, YYYY"),
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
      isOneDayEvent: I,
      passengers: e.totalPassengers,
      readiness: e.readiness,
      readinessNote: e.readinessNote,
      subcontractConfirmed: e.subcontractConfirmed
    }
  };
};
function Yi(e, r) {
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
function Li(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const u of e)
    !u.isSubcontract && u.capacity != null && t.add(u.capacity);
  const n = [...t].sort((u, d) => u - d);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Yi(n, o), i = [];
  let c = 0;
  for (const u of s)
    i.push({
      min: n[c],
      max: n[u - 1],
      values: n.slice(c, u)
    }), c = u;
  i.push({
    min: n[c],
    max: n[n.length - 1],
    values: n.slice(c)
  });
  const l = [], a = /* @__PURE__ */ new Map();
  return i.forEach((u, d) => {
    const v = "__auto_cat_" + d, S = u.min === u.max ? u.min + " pax" : u.min + "-" + u.max + " pax";
    l.push({ id: v, name: S, minPassengers: u.min, maxPassengers: u.max });
    for (const b of u.values)
      a.set(b, v);
  }), { categories: l, capacityToCategoryId: a };
}
const Ri = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return r.length > n ? (r.forEach((l, a) => {
    const u = {
      id: e[a].id,
      label: e[a].label,
      data: l,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      categoryId: e[a].categoryId
    };
    c >= n && (o.push(i), s += i.length, i = [], c = 0), c++, i.push(u);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((l, a) => {
    const u = {
      id: e[a + s].id,
      label: e[a + s].label,
      data: l,
      capacity: e[a + s].capacity,
      isSubcontract: e[a + s].isSubcontract,
      categoryId: e[a + s].categoryId
    };
    i.push(u), a === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((l, a) => {
    const u = {
      id: e[a].id,
      label: e[a].label,
      data: l,
      capacity: e[a].capacity,
      isSubcontract: e[a].isSubcontract,
      categoryId: e[a].categoryId
    };
    i.push(u);
  }), o.push(i), o);
};
var $n = {}, Ni = {
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
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Ni);
const Fi = $n;
var Dn = {}, zi = {
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
  })(Ie, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(zi);
const Hi = Dn, Bi = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = L(t.startDate).startOf("day"), l = L(t.endDate).startOf("day"), a = L(o[i].startDate).startOf("day"), u = L(o[i].endDate).startOf("day");
          if (c.isBetween(a, u, null, "[]") || l.isBetween(a, u, null, "[]") || c.isBefore(a, "minute") && l.isAfter(u, "minute") || c.isAfter(a, "minute") && l.isBefore(u, "minute")) {
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
L.extend(Fi);
L.extend(Hi);
const yr = /* @__PURE__ */ new WeakMap(), Wi = (e) => {
  const r = yr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = L(o.startDate), c = L(s.startDate), l = i.startOf("day").diff(c.startOf("day"), "day");
    return l !== 0 ? l : i.diff(c);
  }), n = Bi(t);
  return yr.set(e, n), n;
}, ji = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = Wi(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Zi = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, Vi = (e) => {
  const { recordsThreshold: r } = Ze(), [t, n] = me(0), [o, s] = me(0), i = he(null);
  ye(() => {
    i.current = document.getElementById(nt);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = $e(() => ji(e), [e]), a = $e(
    () => Ri(e, c, l, r),
    [e, c, r, l]
  ), u = de(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((g) => g + a[Math.max(o, 0)].length), s((g) => Math.min(g + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), d = de(() => {
    a[o].length && (n((g) => Math.max(g - a[o - 1].length, 0)), s((g) => Math.max(g - 1, 0)));
  }, [o, a]), v = de(() => {
    n(0), s(0);
  }, []), S = t + a[o].length, b = $e(
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
    rowsPerItem: b,
    totalRowsPerPage: Zi(a[o]),
    next: u,
    previous: d,
    reset: v
  };
};
var En = {}, Gi = {
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
  })(Ie, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Gi);
const Xi = En;
var _n = {}, Ui = {
  get exports() {
    return _n;
  },
  set exports(e) {
    _n = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(dt);
  })(Ie, function(t) {
    function n(v) {
      return v && typeof v == "object" && "default" in v ? v : { default: v };
    }
    var o = n(t);
    function s(v) {
      return v % 10 < 5 && v % 10 > 1 && ~~(v / 10) % 10 != 1;
    }
    function i(v, S, b) {
      var $ = v + " ";
      switch (b) {
        case "m":
          return S ? "minuta" : "minutę";
        case "mm":
          return $ + (s(v) ? "minuty" : "minut");
        case "h":
          return S ? "godzina" : "godzinę";
        case "hh":
          return $ + (s(v) ? "godziny" : "godzin");
        case "MM":
          return $ + (s(v) ? "miesiące" : "miesięcy");
        case "yy":
          return $ + (s(v) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, u = function(v, S) {
      return a.test(S) ? c[v.month()] : l[v.month()];
    };
    u.s = l, u.f = c;
    var d = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: u, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(v) {
      return v + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(d, null, !0), d;
  });
})(Ui);
const Ki = _n;
var Tn = {}, Ji = {
  get exports() {
    return Tn;
  },
  set exports(e) {
    Tn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(dt);
  })(Ie, function(t) {
    function n(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(l, a, u) {
      var d = s[u];
      return Array.isArray(d) && (d = d[a ? 0 : 1]), d.replace("%d", l);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(Ji);
const qi = Tn;
var An = {}, Qi = {
  get exports() {
    return An;
  },
  set exports(e) {
    An = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(dt);
  })(Ie, function(t) {
    function n(u) {
      return u && typeof u == "object" && "default" in u ? u : { default: u };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(u, d) {
      return c.test(d) ? s[u.month()] : i[u.month()];
    };
    l.s = i, l.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(u) {
      return u + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(Qi);
const ea = An;
var Pn = {}, ta = {
  get exports() {
    return Pn;
  },
  set exports(e) {
    Pn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(dt);
  })(Ie, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(ta);
const na = Pn, ra = {
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
}, oa = {
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
}, sa = {
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
}, ia = {
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
}, aa = {
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
}, ca = [
  {
    id: "en",
    lang: sa,
    translateCode: "en-GB",
    dayjsTranslations: Xi
  },
  {
    id: "pl",
    lang: oa,
    translateCode: "pl-PL",
    dayjsTranslations: Ki
  },
  {
    id: "es",
    lang: ra,
    translateCode: "es-ES",
    dayjsTranslations: na
  },
  {
    id: "lt",
    lang: aa,
    translateCode: "lt-LT",
    dayjsTranslations: ea
  },
  {
    id: "de",
    lang: ia,
    translateCode: "de-DE",
    dayjsTranslations: qi
  }
];
class la {
  constructor() {
    Zn(this, "locales", ca);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const Jt = new la(), Mo = Gr({
  localesData: Jt.getLocales(),
  currentLocale: Jt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), da = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = me("en"), s = Jt.getLocales(), i = de(() => {
    const d = s.find((v) => v.id === n);
    return typeof (d == null ? void 0 : d.dayjsTranslations) == "object" && L.locale(d.dayjsTranslations), d || s[0];
  }, [n, s]), [c, l] = me(i()), a = (d) => {
    localStorage.setItem("locale", d.translateCode), l(d);
  };
  ye(() => {
    t == null || t.forEach((d) => {
      s.find((S) => S.id === d.id) || Jt.addLocales(d);
    });
  }, [s, t]), ye(() => {
    const d = localStorage.getItem("locale"), v = r ?? d ?? "en";
    localStorage.setItem("locale", v), o(v), l(i());
  }, [i, r]);
  const { Provider: u } = Mo;
  return /* @__PURE__ */ h(u, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, ot = () => rt(Mo).currentLocale.lang, ua = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), fa = x.div`
  height: 440px;
  width: 514px;
  position: relative;
`, ha = x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, pa = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = ot();
  return /* @__PURE__ */ H(fa, { onClick: e, children: [
    /* @__PURE__ */ h(ua, {}),
    /* @__PURE__ */ h(ha, { children: r })
  ] });
}, ma = x.div`
  position: relative;
  display: flex;
`, ga = x.div`
  position: relative;
  margin-left: ${Fe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ya = x.div`
  width: calc(${({ width: e }) => e}px - ${Fe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Fe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, va = /* @__PURE__ */ new Set(), xa = {
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
    reservationType: Lt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function ba(e, r) {
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
const wa = ({
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
  onTimeRangeSelect: u,
  onMultiTimeRangeSelect: d,
  clickToAddConfig: v
}) => {
  const [S, b] = me(xa), [$, g] = me(e), [I, K] = me(!1), [Y, N] = me(!1), [y, m] = me(""), [f, E] = me(/* @__PURE__ */ new Set()), [w, C] = me(/* @__PURE__ */ new Set()), W = he([]);
  ye(() => () => W.current.forEach(clearTimeout), []);
  const {
    zoom: q,
    startDate: O,
    isLoading: k,
    config: { includeTakenHoursOnWeekendsInDayView: T, showTooltip: z, showThemeToggle: P, hourFormat: A }
  } = Ze(), j = he(null), ne = he(null), [ae, G] = me(124), {
    page: R,
    projectsPerPerson: X,
    rowsPerItem: te,
    currentPageNum: M,
    pagesAmount: Z,
    next: _,
    previous: Q,
    reset: B
  } = Vi($), { effectiveCategories: F, effectivePage: p } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: R };
    const se = Li(R);
    if (se.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: R };
    const le = R.map((ie) => {
      if (ie.isSubcontract || ie.capacity == null)
        return ie;
      const ke = se.capacityToCategoryId.get(ie.capacity);
      return ke ? { ...ie, categoryId: ke } : ie;
    });
    return { effectiveCategories: se.categories, effectivePage: le };
  }, [t, R]), J = de(
    (se) => {
      if (f.has(se)) {
        E((ie) => {
          const ke = new Set(ie);
          return ke.delete(se), ke;
        });
        return;
      }
      if (xo()) {
        E((ie) => new Set(ie).add(se));
        return;
      }
      C((ie) => new Set(ie).add(se));
      const le = setTimeout(() => {
        E((ie) => new Set(ie).add(se)), C((ie) => {
          const ke = new Set(ie);
          return ke.delete(se), ke;
        });
      }, 190);
      W.current.push(le);
    },
    [f]
  ), D = $e(() => {
    const se = [], le = F ? [...F].sort((ie, ke) => ie.maxPassengers - ke.maxPassengers) : [];
    for (const ie of le)
      p.some((ke) => !ke.isSubcontract && ke.categoryId === ie.id) && se.push(ie.id);
    return p.some((ie) => ie.isSubcontract) && se.push("__subcontract__"), se;
  }, [F, p]), U = de(() => {
    E(/* @__PURE__ */ new Set());
  }, []), ee = de(() => {
    E(new Set(D));
  }, [D]), V = $e(() => {
    if (w.size === 0)
      return va;
    const se = /* @__PURE__ */ new Set();
    for (const le of p) {
      const ie = le.isSubcontract ? "__subcontract__" : le.categoryId;
      ie && w.has(ie) && se.add(le.id);
    }
    return se;
  }, [w, p]), {
    visiblePage: ce,
    visibleRowsPerItem: ge,
    visibleTotalRows: ue,
    visibleProjectsPerPerson: xe,
    separatorRowIndices: De,
    subcontractSeparatorRow: Me
  } = $e(() => {
    const se = ba(p, F), le = ((F == null ? void 0 : F.length) ?? 0) > 0, ie = /* @__PURE__ */ new Map();
    R.forEach((Le, ht) => ie.set(Le.id, ht));
    const ke = [], He = [], Ge = [], Xe = [];
    let st = 0, Rt = -1;
    for (const Le of se)
      if (Le.type === "subcontract" || Le.type === "category" && le) {
        const pt = Le.type === "subcontract" ? "__subcontract__" : Le.category.id, mt = f.has(pt);
        if (Xe.push(st), Le.type === "subcontract" && (Rt = st), !mt)
          for (const it of Le.items) {
            const Nt = ie.get(it.id) ?? 0, Ft = te[Nt];
            ke.push(it), He.push(Ft), Ge.push(X[Nt]), st += Ft;
          }
      } else
        for (const pt of Le.items) {
          const mt = ie.get(pt.id) ?? 0, it = te[mt];
          ke.push(pt), He.push(it), Ge.push(X[mt]), st += it;
        }
    const qe = He.reduce((Le, ht) => Le + ht, 0);
    return {
      visiblePage: ke,
      visibleRowsPerItem: He,
      visibleTotalRows: qe,
      visibleProjectsPerPerson: Ge,
      separatorRowIndices: Xe,
      subcontractSeparatorRow: Rt
    };
  }, [p, F, R, f, te, X]), oe = he(
    kn(
      (se, le, ie, ke, He, Ge) => {
        if (!j.current)
          return;
        const { tile: Xe, segmentId: st } = Re(se);
        if (!st || !Xe) {
          K(!1);
          return;
        }
        const Rt = Oe(st, le), qe = j.current.getBoundingClientRect(), Le = Xe.getBoundingClientRect(), ht = { x: se.clientX - qe.left, y: se.clientY - qe.top }, pt = {
          x: se.clientX - qe.left,
          y: se.clientY - qe.top
        }, mt = {
          x: Le.left - qe.left,
          y: Le.top - qe.top,
          width: Le.width,
          height: Le.height
        }, {
          coords: { x: it, y: Nt },
          resourceIndex: Ft,
          disposition: Eo,
          reservationData: _o
        } = Ii(
          Rt,
          ie,
          ht,
          ke,
          He,
          Ge,
          T,
          A ?? "12h"
        );
        b({
          coords: { x: it, y: Nt },
          mouseCoords: pt,
          resourceIndex: Ft,
          disposition: Eo,
          reservationData: _o,
          tileBounds: mt
        }), K(!0);
      },
      4
    )
  ), pe = he(
    kn((se, le) => {
      B(), g(
        se.map((ie) => ({
          ...ie,
          data: ie.data.filter((ke) => {
            const { title: He, description: Ge, subtitle: Xe } = ke;
            return (He == null ? void 0 : He.toLowerCase().includes(le.toLowerCase())) || (Xe == null ? void 0 : Xe.toLowerCase().includes(le.toLowerCase())) || (Ge == null ? void 0 : Ge.toLowerCase().includes(le.toLowerCase()));
          })
        })).filter((ie) => ie.data.length > 0)
      );
    }, 500)
  ), Oe = (se, le) => {
    if (se)
      return le.flatMap((ie) => ie.data).find((ie) => ie.segmentId === se);
  }, Re = (se) => {
    if (!se.target)
      return { tile: null, segmentId: null };
    const le = se.target.closest("[data-segment-id]");
    return le ? { tile: le, segmentId: le.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, fe = (se) => {
    const le = se.target.value;
    m(le), pe.current.cancel(), le ? pe.current(e, le) : (B(), g(e));
  }, Ee = de(() => {
    oe.current.cancel(), K(!1);
  }, []);
  return ye(() => {
    const se = (ie) => oe.current(
      ie,
      e,
      O,
      ge,
      xe,
      q
    ), le = j.current;
    if (le)
      return le.addEventListener("mousemove", se), le.addEventListener("mouseleave", Ee), () => {
        le.removeEventListener("mousemove", se), le.removeEventListener("mouseleave", Ee);
      };
  }, [
    oe,
    Ee,
    xe,
    ge,
    O,
    q,
    e
  ]), ye(() => {
    y ? (pe.current.cancel(), pe.current(e, y)) : g(e);
  }, [e, y]), qt(() => {
    const se = ne.current;
    if (!se)
      return;
    const le = () => G(se.offsetHeight);
    le();
    const ie = new ResizeObserver(le);
    return ie.observe(se), () => ie.disconnect();
  }, []), /* @__PURE__ */ H(ma, { children: [
    /* @__PURE__ */ h(
      Hc,
      {
        headerHeight: ae,
        data: p,
        categories: F,
        pageNum: M,
        pagesAmount: Z,
        rows: te,
        onLoadNext: _,
        onLoadPrevious: Q,
        searchInputValue: y,
        onSearchInputChange: fe,
        onItemClick: o,
        collapsedGroups: f,
        fadingGroups: w,
        onToggleGroup: J,
        allGroupIds: D,
        onExpandAll: U,
        onCollapseAll: ee
      }
    ),
    /* @__PURE__ */ H(ga, { children: [
      /* @__PURE__ */ h(
        yl,
        {
          ref: ne,
          zoom: q,
          topBarWidth: i,
          showThemeToggle: P,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        _i,
        {
          data: ce,
          baseData: r || e,
          zoom: q,
          rows: ue,
          ref: j,
          onTileClick: n,
          onEventDrop: c,
          onEventDrag: l,
          draggableConfig: a,
          onDragStateChange: N,
          onTimeRangeSelect: u,
          onMultiTimeRangeSelect: d,
          clickToAddConfig: v,
          separatorRowIndices: De,
          subcontractSeparatorRow: Me,
          fadingUnitIds: V
        }
      ) : /* @__PURE__ */ h(ya, { width: i, children: k ? /* @__PURE__ */ h(On, { isLoading: k, position: "left" }) : /* @__PURE__ */ h(pa, {}) }),
      z && /* @__PURE__ */ h(nd, { tooltipData: S, visible: I && !Y })
    ] })
  ] });
}, Sa = x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Fe + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.mode === "dark" ? e.colors.primary : "#fff"};
`, vr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, Ca = x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, Ma = x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, xr = x.button`
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
`, ka = x.button`
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
`, $a = x.div`
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
`, br = x.button`
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
`, Da = x.label`
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
`, Ea = x.span`
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
`, Et = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), _a = () => {
  var r, t;
  const e = document.getElementById(ho);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Ta = () => {
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
  } = Ze(), { filterButtonState: a = -1 } = e;
  return /* @__PURE__ */ H(Sa, { width: 0, children: [
    /* @__PURE__ */ H(vr, { $at: "start", children: [
      /* @__PURE__ */ H(Ma, { children: [
        /* @__PURE__ */ h(xr, { onClick: n, "aria-label": "Anterior", children: /* @__PURE__ */ h(Et, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h(ka, { onClick: o, children: "Hoy" }),
        /* @__PURE__ */ h(xr, { onClick: t, "aria-label": "Siguiente", children: /* @__PURE__ */ h(Et, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      e.showViewSwitcher !== !1 && /* @__PURE__ */ H(Pe, { children: [
        /* @__PURE__ */ h(Ca, {}),
        /* @__PURE__ */ H($a, { children: [
          /* @__PURE__ */ h("button", { className: r === 2 ? "on" : "", onClick: () => s(2), children: "Día" }),
          /* @__PURE__ */ h("button", { className: r === 0 ? "on" : "", onClick: () => s(0), children: "Semana" }),
          /* @__PURE__ */ h("button", { className: r === 1 ? "on" : "", onClick: () => s(1), children: "Mes" })
        ] })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ H(Da, { children: [
        /* @__PURE__ */ H(Et, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h(
          "input",
          {
            type: "date",
            onClick: (u) => {
              var d, v;
              try {
                (v = (d = u.currentTarget).showPicker) == null || v.call(d);
              } catch {
              }
            },
            onChange: (u) => u.target.value && i(u.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ H(vr, { $at: "end", children: [
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ H(br, { $primary: !!a, onClick: c, children: [
        /* @__PURE__ */ h(Et, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h(Ea, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ H(br, { onClick: _a, children: [
        /* @__PURE__ */ h(Et, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      l
    ] })
  ] });
}, Aa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Pa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Oa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Ia = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Ya = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), La = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ra = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Na = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Fa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), za = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Ha = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ba = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Wa = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), ja = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Za = {
  add: Aa,
  subtract: Pa,
  filter: Oa,
  arrowLeft: Ia,
  arrowRight: Ya,
  defaultAvatar: La,
  calendarWarning: Ra,
  calendarFree: Na,
  arrowDown: za,
  arrowUp: Fa,
  search: Ha,
  close: Ba,
  moon: Wa,
  sun: ja
}, sn = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = Qt(), i = Za[e];
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
}, Va = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => Va(e, r, t)}
`;
const Ga = x.div`
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
`, Xa = x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Ua = x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, Ka = x.div`
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
`, Ja = x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, qa = x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, Qa = x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`, ec = x.div`
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
`, tc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, nc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, rc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, oc = x.div`
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
`, wr = "#cdd8d2", Sr = [178, 216, 195], sc = [15, 125, 102], ic = (e) => {
  const r = Math.min(1, Math.max(0, e)), t = (n) => Math.round(Sr[n] + (sc[n] - Sr[n]) * r);
  return `rgb(${t(0)}, ${t(1)}, ${t(2)})`;
}, ac = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ze(), s = ot(), i = he(null), [c, l] = me(null), a = $e(
    () => Array.from({ length: 12 }, (w, C) => L().month(C).format("MMM").toUpperCase()),
    [s]
  ), u = $e(() => L().startOf("day"), []), { domainStart: d, domainEnd: v, domainDays: S } = $e(() => {
    const w = u.subtract(3, "month").startOf("month"), C = u.add(9, "month").endOf("month");
    return { domainStart: w, domainEnd: C, domainDays: C.diff(w, "day") + 1 };
  }, [u]), b = (w) => w.diff(d, "day") / S * 100, $ = (w) => Math.min(100, Math.max(0, w)), g = $e(() => {
    const w = [];
    let C = d.startOf("month");
    for (; C.isBefore(v); )
      w.push(C), C = C.add(1, "month");
    return w;
  }, [d, v]), I = o == null ? void 0 : o.yearCounts, K = $e(() => {
    const w = Math.ceil(S / 7), C = new Array(w).fill(0), W = (A) => {
      const j = A.diff(d, "day");
      return j < 0 || j >= S ? -1 : Math.floor(j / 7);
    };
    if (I && I.length)
      for (const A of I) {
        const j = W(L(A.date));
        j >= 0 && (C[j] += A.count);
      }
    else
      for (const A of t ?? [])
        for (const j of A.data ?? []) {
          const ne = W(L(j.startDate));
          ne >= 0 && (C[ne] += 1);
        }
    const q = Math.max(0, ...C);
    if (q <= 0)
      return C.map(() => ({ h: 0, color: wr }));
    const O = C.filter((A) => A > 0).sort((A, j) => A - j), k = O.length >> 1, T = O.length % 2 ? O[k] : (O[k - 1] + O[k]) / 2, z = T > 0 ? q / T : 1, P = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, z)))));
    return C.map(
      (A) => A > 0 ? { h: Math.min(100, 100 * Math.pow(A / q, P)), color: ic(A / q) } : { h: 0, color: wr }
    );
  }, [t, I, d, S]), Y = b(u), N = (w) => {
    const { startDate: C, endDate: W } = tn(w, r), q = $(b(C));
    return { left: q, width: $(b(W)) - q, startDate: C, endDate: W };
  }, y = N(e), m = c ? N(c.d) : null, f = (w) => `${w.date()} ${a[w.month()]}`, E = (w) => {
    var q;
    const C = (q = i.current) == null ? void 0 : q.getBoundingClientRect();
    if (!C)
      return null;
    const W = Math.min(1, Math.max(0, (w - C.left) / C.width));
    return { f: W, d: d.add(Math.round(W * (S - 1)), "day") };
  };
  return /* @__PURE__ */ H(Ga, { children: [
    /* @__PURE__ */ H(Xa, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ H(
      Ua,
      {
        ref: i,
        onClick: (w) => {
          const C = E(w.clientX);
          C && n(C.d.toDate());
        },
        onMouseMove: (w) => {
          const C = E(w.clientX);
          C && l({ left: C.f * 100, d: C.d });
        },
        onMouseLeave: () => l(null),
        children: [
          /* @__PURE__ */ h(Ka, { children: g.map((w, C) => /* @__PURE__ */ h("span", { style: { left: `${b(w)}%` }, children: C === 0 || w.month() === 0 ? `${a[w.month()]} ${w.format("YY")}` : a[w.month()] }, C)) }),
          g.map(
            (w, C) => C === 0 ? null : /* @__PURE__ */ h(Ja, { style: { left: `${b(w)}%` } }, C)
          ),
          /* @__PURE__ */ h(qa, { children: K.map((w, C) => /* @__PURE__ */ h(Qa, { style: { height: `${w.h}%`, background: w.color } }, C)) }),
          /* @__PURE__ */ h(tc, { style: { left: `${y.left}%`, width: `${y.width}%` } }),
          /* @__PURE__ */ h(ec, { style: { left: `${$(Y)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && m && /* @__PURE__ */ H(Pe, { children: [
            /* @__PURE__ */ h(nc, { style: { left: `${m.left}%`, width: `${m.width}%` } }),
            /* @__PURE__ */ h(rc, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(oc, { style: { left: `${c.left}%` }, children: `Ir a ${f(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, cc = x.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, lc = x.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? fo : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, dc = x.div`
  position: relative;
`, uc = ({
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
  schedulerRef: u,
  onTimeRangeSelect: d,
  onMultiTimeRangeSelect: v,
  clickToAddConfig: S
}) => {
  const { goToDate: b, handleGoToday: $, zoomIn: g, zoomOut: I, zoom: K } = Ze();
  return Xr(
    u,
    () => ({
      goToDate: b,
      goToToday: $,
      setZoom: (Y) => {
        if (!go(Y))
          return;
        const N = Y - K;
        if (N > 0)
          for (let y = 0; y < N; y++)
            g();
        else
          for (let y = 0; y < Math.abs(N); y++)
            I();
      }
    }),
    [b, $, K, g, I]
  ), /* @__PURE__ */ h(
    wa,
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
      onTimeRangeSelect: d,
      onMultiTimeRangeSelect: v,
      clickToAddConfig: S
    }
  );
}, Vd = In(function({
  data: r,
  categories: t,
  baseData: n,
  config: o,
  startDate: s,
  onRangeChange: i,
  onTileClick: c,
  handleToggleDisplayActiveUnits: l,
  onClearFilterData: a,
  toolbarActions: u,
  onItemClick: d,
  isLoading: v,
  onEventDrop: S,
  onEventDrag: b,
  draggableConfig: $,
  onTimeRangeSelect: g,
  onMultiTimeRangeSelect: I,
  clickToAddConfig: K
}, Y) {
  var z;
  const N = $e(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      hourFormat: "12h",
      showTooltip: !0,
      showTopbar: !0,
      showLegend: !0,
      translations: void 0,
      ...o
    }),
    [o]
  ), y = he(null), m = he(null), [f, E] = me((z = y.current) == null ? void 0 : z.clientWidth), w = $e(() => L(s), [s]), [C, W] = me(N.defaultTheme ?? "light"), q = () => {
    W(C === "light" ? "dark" : "light");
  }, O = C === "light" ? Is : Ys, k = N.theme ? N.theme[O.mode] : {}, T = {
    ...O,
    colors: {
      ...O.colors,
      ...k
    }
  };
  return Xr(
    Y,
    () => ({
      goToDate: (P) => {
        var A;
        return (A = m.current) == null ? void 0 : A.goToDate(P);
      },
      goToToday: () => {
        var P;
        return (P = m.current) == null ? void 0 : P.goToToday();
      },
      setZoom: (P) => {
        var A;
        return (A = m.current) == null ? void 0 : A.setZoom(P);
      }
    }),
    []
  ), qt(() => {
    const P = () => {
      y.current && E(y.current.clientWidth);
    };
    P(), window.addEventListener("resize", P);
    let A;
    const j = y.current;
    return j && typeof ResizeObserver < "u" && (A = new ResizeObserver(P), A.observe(j)), () => {
      window.removeEventListener("resize", P), A == null || A.disconnect();
    };
  }, []), /* @__PURE__ */ H(Pe, { children: [
    /* @__PURE__ */ h(Os, {}),
    /* @__PURE__ */ h(_s, { theme: T, children: /* @__PURE__ */ h(da, { lang: N.lang, translations: N.translations, children: /* @__PURE__ */ h(
      wi,
      {
        data: r,
        isLoading: !!v,
        config: N,
        onRangeChange: i,
        defaultStartDate: w,
        handleToggleDisplayActiveUnits: l,
        onClearFilterData: a,
        toolbarActions: u,
        children: /* @__PURE__ */ H(cc, { id: ho, children: [
          /* @__PURE__ */ h(
            lc,
            {
              showScroll: !!r.length,
              $footer: N.showOverview !== !1 && !!r.length,
              id: nt,
              ref: y,
              children: /* @__PURE__ */ h(dc, { children: /* @__PURE__ */ h(
                uc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: f ?? 0,
                  onItemClick: d,
                  toggleTheme: q,
                  onEventDrop: S,
                  onEventDrag: b,
                  draggableConfig: $,
                  schedulerRef: m,
                  onTimeRangeSelect: g,
                  onMultiTimeRangeSelect: I,
                  clickToAddConfig: K
                }
              ) })
            }
          ),
          N.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(ac, {})
        ] })
      }
    ) }) })
  ] });
}), fc = x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, hc = x.button`
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
`, pc = x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, mc = x.p`
  ${Dt}
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
  const { loadNext: i, loadPrevious: c } = ot(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(fc, { intent: e, children: /* @__PURE__ */ H(hc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(pc, { children: t }),
    /* @__PURE__ */ h(mc, { children: l })
  ] }) });
}, gc = x.div`
  min-width: ${Fe + "px"};
  max-width: ${Fe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, yc = x.div`
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
`, vc = x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, xc = x.input`
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
`, bc = x.div`
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
`, wc = Ke`
  from { opacity: 1; }
  to { opacity: 0; }
`, Mr = x.div`
  ${({ $fading: e }) => e && $t`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${wc} 180ms ease forwards;
      }
    `}
`, Sc = x.button`
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
`, Cc = Ke`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, Mc = x.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ve}px;
  height: calc(${ve}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBorder + "33" : e.colors.border};
  border-left: 3px solid
    ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBorder : "transparent"};
  background-color: ${({ theme: e, $isSubcontract: r }) => r ? e.colors.subcontractBg : "transparent"};
  /* Scope the transition to paint-only props. It was transition:0.5s ease (= transition:all), which animated the row
     height (a LAYOUT property) for 500ms on every add/remove/collapse — layout thrash that made rowIn hitch. */
  transition: background-color 0.15s ease, border-color 0.15s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Cc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, kc = x.div`
  display: flex;
  align-items: center;
`, $c = x.div`
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
`, Dc = x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Ec = x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, kr = x.p`
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
`, _c = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`, Tc = x.span`
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
`, Ac = x.span`
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
`, Pc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Oc = () => /* @__PURE__ */ H("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: [
  /* @__PURE__ */ h("circle", { cx: "9", cy: "8", r: "3.2" }),
  /* @__PURE__ */ h("path", { d: "M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z" }),
  /* @__PURE__ */ h("circle", { cx: "16.8", cy: "8.6", r: "2.5" }),
  /* @__PURE__ */ h("path", { d: "M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8" })
] }), Ic = () => /* @__PURE__ */ H("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Yc = () => /* @__PURE__ */ H("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Lc = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  Mc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ H(kc, { children: [
      /* @__PURE__ */ h($c, { $provider: o, children: Pc(r.icon) ? /* @__PURE__ */ h(Dc, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Yc, {}) : /* @__PURE__ */ h(Ic, {}) }),
      /* @__PURE__ */ H(Ec, { children: [
        /* @__PURE__ */ h(kr, { isMain: !0, children: r.title }),
        r.capacity != null || r.plate ? /* @__PURE__ */ H(_c, { children: [
          r.capacity != null && /* @__PURE__ */ H(Tc, { title: `${r.capacity} pasajeros`, children: [
            /* @__PURE__ */ h(Oc, {}),
            r.capacity
          ] }),
          r.plate && /* @__PURE__ */ h(Ac, { title: r.plate, children: r.plate })
        ] }) : r.subtitle && /* @__PURE__ */ h(kr, { children: r.subtitle })
      ] })
    ] })
  }
), Rc = x.div`
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
`, Nc = x.span`
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
`, Fc = x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  flex-shrink: 0;
`, zc = x.div`
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
}) => /* @__PURE__ */ H(Rc, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ h(zc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(Nc, { $variant: o, children: e }),
  /* @__PURE__ */ h(Fc, { $variant: o, children: r })
] }), Hc = ({
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
  onItemClick: u,
  collapsedGroups: d,
  fadingGroups: v,
  onToggleGroup: S,
  allGroupIds: b,
  onExpandAll: $,
  onCollapseAll: g
}) => {
  const [I, K] = me(!1), Y = ot(), N = () => K((k) => !k), y = r ? [...r].sort((k, T) => k.maxPassengers - T.maxPassengers) : [], m = y.length > 0, f = b.length > 0, E = f && d.size === b.length;
  f && d.size;
  const w = e.filter((k) => k.isSubcontract), C = Y.subcontract ?? "Subcontract", W = (k) => {
    const T = e.indexOf(k);
    return /* @__PURE__ */ h(
      Lc,
      {
        id: k.id,
        item: k.label,
        rows: n[T],
        onItemClick: u,
        isSubcontract: k.isSubcontract
      },
      k.id
    );
  }, q = (k) => {
    const T = e.filter(
      (j) => !j.isSubcontract && j.categoryId === k.id
    );
    if (T.length === 0)
      return null;
    const z = d.has(k.id), P = v.has(k.id), A = k.name;
    return /* @__PURE__ */ H("div", { children: [
      /* @__PURE__ */ h(
        $r,
        {
          label: A,
          count: T.length,
          isCollapsed: z || P,
          onToggle: () => S(k.id),
          variant: "category"
        }
      ),
      !z && /* @__PURE__ */ h(Mr, { $fading: P, children: T.map(W) })
    ] }, k.id);
  }, O = e.filter(
    (k) => !k.isSubcontract && (!k.categoryId || !m)
  );
  return /* @__PURE__ */ H(gc, { children: [
    /* @__PURE__ */ H(yc, { $height: t, children: [
      /* @__PURE__ */ H(vc, { children: [
        /* @__PURE__ */ H(bc, { isFocused: I, children: [
          /* @__PURE__ */ h(
            xc,
            {
              placeholder: Y.search,
              value: l,
              onChange: a,
              onFocus: N,
              onBlur: N
            }
          ),
          /* @__PURE__ */ h(sn, { iconName: "search" })
        ] }),
        f && /* @__PURE__ */ h(
          Sc,
          {
            title: E ? "Expand all" : "Collapse all",
            onClick: E ? $ : g,
            $allCollapsed: E,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: E ? /* @__PURE__ */ H(Pe, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ H(Pe, { children: [
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
          icon: /* @__PURE__ */ h(sn, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    m ? y.map(q) : O.map(W),
    m && O.length > 0 && O.map(W),
    w.length > 0 && /* @__PURE__ */ H(Pe, { children: [
      /* @__PURE__ */ h(
        $r,
        {
          label: C,
          count: w.length,
          isCollapsed: d.has("__subcontract__") || v.has("__subcontract__"),
          onToggle: () => S("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !d.has("__subcontract__") && /* @__PURE__ */ h(Mr, { $fading: v.has("__subcontract__"), children: w.map(W) })
    ] }),
    /* @__PURE__ */ h(
      Cr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(sn, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, Bc = x.div`
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
`, Wc = Ke`
from{
    left: -100%;
}
to{
    left: 100%;
}`, jc = x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Wc} 1s infinite;
`, Zc = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(Bc, { position: r, children: /* @__PURE__ */ h(jc, {}) }) : null, On = Zc, Je = (e, r) => {
  const {
    ctx: t,
    x: n,
    y: o,
    width: s,
    height: i,
    textYPos: c,
    label: l,
    font: a,
    isBottomRow: u,
    fillStyle: d,
    topText: v,
    bottomText: S,
    strokeStyle: b,
    labelBetweenCells: $
  } = e;
  t.beginPath();
  const g = b ?? (r.mode === "dark" ? r.colors.border : "#E4EAE7");
  if (t.strokeStyle = g, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), $ ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : (t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke()), t.font = a;
    const I = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.mode === "dark" ? r.colors.textPrimary : "#183D3D", t.fillText(l, I, c);
  }
  if (u && d && v && S) {
    t.fillStyle = d, t.fillRect(n, o, s, i), t.beginPath(), t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke(), t.font = v.font;
    const I = n + s / 2 - t.measureText(v.label).width / 2;
    t.fillStyle = v.color, t.fillText(v.label, I, v.y), t.font = S.font;
    const K = n + s / 2 - t.measureText(S.label).width / 2;
    t.fillStyle = S.color, t.fillText(S.label, K, S.y);
  }
}, Vc = (e, r, t, n, o = ft) => {
  const s = Ve + o, i = s + 13, c = s + 27;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const u = mo(
      L(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    ), d = u.isCurrentDay;
    if (Je(
      {
        ctx: e,
        x: l,
        y: s,
        width: Te,
        height: xt,
        isBottomRow: !0,
        // Day headers stay UNIFORM across the week — weekends get no header tint (artifact: only the grid BODY washes
        // weekends, the header row never does). Today keeps its opaque currentDay fill so scrolling events don't bleed
        // through the HOY cell.
        fillStyle: d ? n.colors.currentDay : n.colors.gridBackground,
        // Reimagined hierarchy (artifact): the weekday name is the small muted label, the date number is the large
        // bold teal figure — the inverse of the old 14px-name / 10px-number. The trailing locale period is stripped.
        topText: {
          y: i,
          label: d ? "" : u.dayName.replace(/\./g, "").toUpperCase(),
          font: `600 10px ${ze}`,
          color: n.mode === "dark" ? n.colors.placeholder : "#74897F"
        },
        bottomText: {
          y: c,
          label: `${u.dayOfMonth}`,
          font: d ? `700 12px ${ze}` : `700 13px ${ze}`,
          color: d ? n.colors.today : n.mode === "dark" ? n.colors.textPrimary : "#183D3D"
        }
      },
      n
    ), d) {
      const b = l + Te / 2, $ = i - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(b - 30 / 2, $, 30, 13, 5) : e.rect(b - 30 / 2, $, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${ze}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", b, $ + 13 / 2 + 0.5), e.restore();
    }
    l += Te;
  }
}, Gc = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * We;
  const s = Ve;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= vn && (c = 0);
    const a = po(t, l) * We;
    Je(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: ft,
        textYPos: uo,
        label: L().month(c).format("MMMM").toUpperCase(),
        font: tt.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, Xc = (e, r, t) => {
  let o = 0, s = 0, i = L(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * Te + Te;
  for (let c = 0; c < vn; c++)
    i > vn - 1 && (i = 0), s = L(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * Te, Je(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Ve,
        textYPos: zn,
        label: L(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${L(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: `800 12px ${ze}`
      },
      t
    ), o += s, i++;
}, Uc = (e, r, t, n) => {
  const o = 7 * Te, s = Ve, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const u = L(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let d = (c + a) % lr;
    d <= 0 && (d += lr), u !== 1 && a === 0 && (l = -u * Te + Te), Je(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: ft,
        textYPos: uo,
        label: `${t.toUpperCase()} ${d}`,
        font: tt.middleRow
      },
      n
    ), l += o;
  }
}, Kc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, Jc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, qc = (e, r, t, n, o) => {
  const s = Ut - xt / 1.6, i = Ut - xt / 4.5, c = Ve + ft;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const u = L(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), d = u.isSame(L(), "week");
    Je(
      {
        ctx: e,
        x: l,
        y: c,
        width: Mt,
        height: xt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: d ? o.colors.today + "26" : Kc({ isCurrent: d, variant: "yearView" }, o),
        topText: {
          y: s,
          label: u.isoWeek().toString(),
          font: d ? `700 14px ${ze}` : tt.bottomRow.name,
          color: d ? o.colors.today : Jc({ isCurrent: d }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: tt.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Mt;
  }
}, Qc = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (fr(s) - t + 1) * We, u = 0;
  for (; c + u <= i; )
    l > 0 && (a = fr(s + l) * We), u + a > i && l > 0 && (a = Math.ceil((i - u) / We) * We), Je(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Ve,
        textYPos: zn,
        label: (s + l).toString(),
        font: tt.topRow
      },
      n
    ), c += a, u += a, l++;
}, el = (e, r, t, n) => {
  const o = Math.floor(r / Kt) + 2, s = Kt * Ye;
  let l = -L(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ye + 0.5 * Ye;
  for (let a = 0; a < o; a++) {
    const u = L(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Je(
      {
        ctx: e,
        x: l,
        y: kt,
        width: s,
        height: Yt,
        textYPos: kt + Yt / 2 + 2,
        label: u,
        font: tt.bottomRow.number
      },
      n
    ), l += s;
  }
}, tl = (e, r, t, n) => {
  const o = Math.ceil(r / Kt), s = L(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let u = 0.5 * Ye;
  for (let d = 0; d < a; d++) {
    const v = L(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), b = L(`${t.year}-${t.month + d + 1}-01T:23:59:59`).endOf("month"), $ = b.format("MMMM").toUpperCase(), g = b.diff(v, "hour") + 1, I = d === 0 ? g * Ye : r * Ye;
    Je(
      {
        ctx: e,
        x: u,
        y: 0,
        width: I,
        height: kt,
        textYPos: zn,
        label: $,
        font: tt.topRow
      },
      n
    ), u += I;
  }
}, nl = (e, r, t, n, o = "12h") => {
  let s = 0;
  const i = kt + Yt, c = L(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), l = Ye;
  for (let a = 0; a < r; a++) {
    const u = o === "24h" ? c.add(a, "hours").format("HH:00") : c.add(a, "hours").format("h:00a").toUpperCase();
    Je(
      {
        ctx: e,
        x: s,
        y: i,
        width: l,
        height: yn,
        label: u,
        font: tt.bottomRow.hoursInDay,
        textYPos: kt + Yt + yn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), s += Ye;
  }
}, rl = (e, r, t, n, o, s, i, c = !0, l = "12h") => {
  switch (r) {
    case 0:
      Qc(e, n, s, i), Gc(e, t, n, i), qc(e, t, n, o, i);
      break;
    case 1:
      Xc(e, n, i), c && Uc(e, n, o, i), Vc(e, t, n, i, c ? ft : 0);
      break;
    case 2:
      tl(e, t, n, i), el(e, t, n, i), nl(e, t, n, i, l);
      break;
  }
}, ol = x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, sl = x.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, il = x.div`
  height: ${({ $height: e }) => e ?? Ut}px;
  display: block;
`, al = x.canvas``, cl = {
  transfer: /* @__PURE__ */ H(Pe, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ H(Pe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ H(Pe, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ H(Pe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ H(Pe, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ H(Pe, { children: [
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
    children: cl[e]
  }
), ll = x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Fe + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, Dr = x.span`
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
`, Wt = x.span`
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
`, dl = x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, ul = x.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, fl = x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, hl = x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, pl = x.span`
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
`, ml = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], gl = () => /* @__PURE__ */ H(ll, { children: [
  /* @__PURE__ */ h(Dr, { children: "Leyenda" }),
  /* @__PURE__ */ H(Wt, { children: [
    /* @__PURE__ */ h(Be, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ H(Wt, { children: [
    /* @__PURE__ */ h(Be, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ H(Wt, { children: [
    /* @__PURE__ */ h(Be, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ H(Wt, { children: [
    /* @__PURE__ */ h(dl, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(ul, {}),
  /* @__PURE__ */ H(Dr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  ml.map((e) => /* @__PURE__ */ H(fl, { children: [
    /* @__PURE__ */ h(hl, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(pl, { style: { color: e.color }, children: /* @__PURE__ */ h(Be, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), yl = In(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = ot(), { date: c, cols: l, dayOfYear: a, startDate: u, config: d } = Ze(), v = he(null), S = Qt(), b = d.showWeekRow !== !1, $ = d.hourFormat ?? "12h", g = r === 2 ? Ls : r === 1 && !b ? Ve + xt : Ut, I = de(
    (K) => {
      const Y = jn(), N = g + 1;
      vo(K, Y, N), rl(K, r, l, u, i, a, S, b, $);
    },
    [l, a, u, i, r, S, b, $, g]
  );
  return ye(() => {
    if (!v.current)
      return;
    const K = v.current.getContext("2d");
    if (!K)
      return;
    const Y = () => I(K);
    return window.addEventListener("resize", Y), () => window.removeEventListener("resize", Y);
  }, [I]), ye(() => {
    const K = v.current;
    if (!K)
      return;
    K.style.letterSpacing = "1px";
    const Y = K.getContext("2d");
    Y && I(Y);
  }, [c, r, I]), /* @__PURE__ */ H(ol, { ref: s, children: [
    (d.showTopbar !== !1 || d.showLegend !== !1) && /* @__PURE__ */ H(sl, { $width: t, children: [
      d.showTopbar !== !1 && /* @__PURE__ */ h(Ta, { width: t, showThemeToggle: n, toggleTheme: o }),
      d.showLegend !== !1 && /* @__PURE__ */ h(gl, {})
    ] }),
    /* @__PURE__ */ h(il, { $height: g, id: Rs, children: /* @__PURE__ */ h(al, { ref: v }) })
  ] });
}), vl = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = We;
      break;
    case 2:
      n = Ye;
      break;
    default:
      n = Te;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), l = r.endDate.startOf("day"), a = () => {
    let u;
    switch (t) {
      case 2:
        u = (e.startDate.diff(r.startDate, "minute") / Ae + 1) * n - n / 2;
        break;
      default:
        u = s.diff(c, "day") * n;
    }
    return Math.max(0, u);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let u;
    switch (t) {
      case 2:
        u = Math.max(
          e.endDate.diff(e.startDate, "minute") / Ae * n,
          50
        );
        break;
      default:
        u = Math.max(
          i.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: u };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let u;
    switch (t) {
      case 2:
        u = Math.max(
          e.endDate.diff(r.startDate, "minute") / Ae * n + 0.5 * n,
          50
        );
        break;
      default:
        u = Math.max(
          i.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: u };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let u;
    switch (t) {
      case 2:
        u = Math.max(
          r.endDate.diff(e.startDate, "minute") / Ae * n,
          50
        );
        break;
      default:
        u = Math.max(
          l.diff(s, "day") * n + n,
          50
        );
    }
    return { x: a(), width: u };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let u;
    switch (t) {
      case 2:
        u = Math.max(
          r.endDate.diff(r.startDate, "minute") / Ae * n,
          50
        );
        break;
      default:
        u = Math.max(
          l.diff(c, "day") * n + n,
          50
        );
    }
    return { x: a(), width: u };
  }
  return { x: a(), width: 50 };
}, xl = (e, r, t, n, o, s) => {
  const i = e * ve + Ns, c = r.hour(), l = t.hour();
  let a, u, d, v;
  switch (s) {
    case 2: {
      a = L(n), u = L(o), d = L(r).hour(c).minute(0), v = L(t).hour(l).minute(0);
      break;
    }
    default: {
      a = L(n).hour(0).minute(0), u = L(o).hour(23).minute(59), d = r, v = t;
      break;
    }
  }
  return {
    ...vl(
      { startDate: a, endDate: u },
      { startDate: d, endDate: v },
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
  sin_chofer: { icon: "warn", color: "#9AA4B2", label: "Sin chofer" },
  sin_avisar: { icon: "warn", color: "#D98A22", label: "No notificado al chofer" },
  programado: { icon: "warn", color: "#C2A878", label: "Notificación programada" },
  notificado: { icon: "clock", color: "#2C6BB0", label: "Notificado" },
  confirmado: { icon: "check", color: "#2E8B63", label: "Confirmado" }
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
  ${Dt}
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
const bl = Ke`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, wl = Ke`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, Sl = x.button`
  ${Dt}
  position: absolute;
  height: ${en}px;
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
    animation: ${bl} 180ms ease-out;
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
  ${({ $exiting: e }) => e && $t`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${wl} 190ms ease-out forwards;
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
`, Cl = x.div`
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
`, Er = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Ml = x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, kl = x.span`
  ${ut}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, $l = x.span`
  ${ut}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Dl = x.span`
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
`, El = x.div`
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
`, _r = x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Tr = x.span`
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
`, Ar = x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, _l = x.div`
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
`, Pr = x.span`
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
`, Tl = Ke`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`, Al = x.div`
  position: absolute;
  height: ${en}px;
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
    animation: ${Tl} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`, Pl = x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`, Ol = x.div`
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
`, Il = x.div`
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
`, Yl = x.span`
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
`, Ll = x.span`
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
`, Rl = 34, an = ({
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
  highlighted: u = !1,
  dimmed: d = !1,
  leaving: v = !1,
  ghost: S = !1,
  ghostBadge: b = ""
}) => {
  const { date: $, config: g } = Ze(), I = g.hourFormat ?? "12h", K = tn($, t), { y: Y, x: N, width: y } = xl(
    e,
    K.startDate,
    K.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: m } = Qt(), f = he(null), E = L(r.startDate).isSame(L(r.endDate), "day"), w = r.eventType === Lt.Tour, C = r.eventType === Lt.Transfer, W = E && (w || C);
  if (S)
    return /* @__PURE__ */ H(Al, { style: { left: `${N}px`, top: `${Y + l}px`, width: `${y}px` }, children: [
      /* @__PURE__ */ H(Pl, { children: [
        /* @__PURE__ */ H(Ol, { children: [
          /* @__PURE__ */ h(Be, { name: C ? "transfer" : "tour" }),
          r.title
        ] }),
        /* @__PURE__ */ H(Il, { children: [
          /* @__PURE__ */ h(Be, { name: "check", strokeWidth: 2.6 }),
          "flota propia"
        ] })
      ] }),
      b && /* @__PURE__ */ h(Yl, { children: b })
    ] });
  const q = (A) => {
    f.current = { x: A.clientX, y: A.clientY }, c && s && (A.preventDefault(), s(r, A));
  }, O = (A) => {
    if (f.current) {
      const j = Math.abs(A.clientX - f.current.x), ne = Math.abs(A.clientY - f.current.y);
      Math.sqrt(j * j + ne * ne) <= 5 && (o == null || o(r)), f.current = null;
    } else
      o == null || o(r);
  }, k = {
    left: `${N}px`,
    top: `${Y + l}px`,
    backgroundColor: `${r.bgColor ?? m.defaultTile}`,
    width: `${y}px`,
    color: ko(r.bgColor ?? "")
  }, T = !n && r.readiness ? $o[r.readiness] : null, z = n && r.subcontractConfirmed === !1, P = (A) => /* @__PURE__ */ H(
    Sl,
    {
      "data-segment-id": r.segmentId,
      style: k,
      onClick: O,
      onMouseDown: q,
      onDragStart: (j) => j.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: z,
      $exiting: a,
      $highlighted: u,
      $dimmed: d,
      $leaving: v,
      children: [
        v && /* @__PURE__ */ h(Ll, { children: "Sub" }),
        A
      ]
    }
  );
  return P(
    W ? /* @__PURE__ */ H(Pe, { children: [
      (n || T) && /* @__PURE__ */ h(_r, { $sm: !0, children: n ? /* @__PURE__ */ h(Ar, { children: "SUB" }) : T && /* @__PURE__ */ h(Tr, { $sm: !0, style: { color: T.color }, children: /* @__PURE__ */ h(Be, { name: T.icon, strokeWidth: T.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ H(_l, { $transfer: C, children: [
        /* @__PURE__ */ h(Be, { name: C ? "transfer" : "sun", strokeWidth: 2.4 }),
        y >= Rl && /* @__PURE__ */ H(Pe, { children: [
          /* @__PURE__ */ h(Pr, { children: _e(r.startDate, I) }),
          !C && /* @__PURE__ */ h(Pr, { $end: !0, children: _e(r.endDate, I) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ H(Pe, { children: [
      /* @__PURE__ */ h(_r, { children: n ? /* @__PURE__ */ h(Ar, { children: "SUB" }) : T && /* @__PURE__ */ h(Tr, { style: { color: T.color }, children: /* @__PURE__ */ h(Be, { name: T.icon, strokeWidth: T.icon === "check" ? 2.6 : 2.2 }) }) }),
      r.bookingNumber && /* @__PURE__ */ h(Dl, { children: r.bookingNumber }),
      /* @__PURE__ */ H(Cl, { children: [
        /* @__PURE__ */ H(Er, { $pad: !0, children: [
          /* @__PURE__ */ h(Ml, { children: /* @__PURE__ */ h(Be, { name: C ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(kl, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(Er, { children: /* @__PURE__ */ h($l, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ H(El, { children: [
          /* @__PURE__ */ h(Be, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Or = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Ne;
}, Nl = (e) => ({
  segmentId: e.segmentId,
  reservationId: e.reservationId,
  startDate: e.startDate,
  endDate: e.endDate,
  occupancy: 0,
  title: e.title,
  bookingNumber: "",
  eventType: e.eventType
}), Fl = ({
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
  leavingSegmentIds: u,
  ghostProject: d
}) => {
  const { nodes: v, liveMap: S } = $e(() => {
    const Y = /* @__PURE__ */ new Map(), N = !!a && a.length > 0;
    let y = 0;
    return { nodes: e.map((f, E) => {
      E > 0 && (y += Math.max(e[E - 1].data.length, 1));
      const w = !!(c != null && c.has(f.id)), C = N && !a.includes(f.id), W = Or(y, i), q = d && f.id === d.targetUnitId ? /* @__PURE__ */ h(
        an,
        {
          row: y,
          data: Nl(d),
          zoom: r,
          yOffset: W,
          isDragging: !1,
          isDraggable: !1,
          ghost: !0,
          ghostBadge: d.badge
        },
        `ghost-${f.id}`
      ) : null;
      if (!f.data.some((k) => k.length > 0))
        return q ? [q] : [];
      const O = f.data.map(
        (k, T) => k.map((z) => {
          const P = s === z.segmentId, A = o ? o(z) : !1, j = T + y, ne = Or(j, i);
          return Y.set(z.segmentId, {
            project: z,
            absoluteRow: j,
            yOffset: ne,
            isSubcontract: !!f.isSubcontract
          }), /* @__PURE__ */ h(
            an,
            {
              row: j,
              data: z,
              zoom: r,
              isSubcontract: f.isSubcontract,
              onTileClick: t,
              onDragStart: n,
              isDragging: P,
              isDraggable: A,
              yOffset: ne,
              exiting: w,
              highlighted: l != null && z.segmentId === l,
              dimmed: C,
              leaving: !!(u != null && u.includes(z.segmentId))
            },
            z.segmentId
          );
        })
      );
      return q ? [...O, [q]] : O;
    }).flat(2), liveMap: Y };
  }, [e, t, r, n, o, s, i, c, l, a, u, d]), b = he(/* @__PURE__ */ new Map()), $ = he([]), [g, I] = me([]);
  ye(() => () => $.current.forEach(clearTimeout), []), ye(() => {
    const Y = b.current;
    b.current = S;
    const N = [];
    if (Y.forEach((f, E) => {
      S.has(E) || N.push(f);
    }), I((f) => {
      let E = f.filter((w) => !S.has(w.project.segmentId));
      for (const w of N)
        E.some((C) => C.project.segmentId === w.project.segmentId) || (E = [...E, w]);
      return E;
    }), !N.length)
      return;
    const y = new Set(N.map((f) => f.project.segmentId)), m = setTimeout(() => {
      I((f) => f.filter((E) => !y.has(E.project.segmentId)));
    }, 220);
    $.current.push(m);
  }, [S]);
  const K = g.filter((Y) => !S.has(Y.project.segmentId)).map((Y) => /* @__PURE__ */ h(
    an,
    {
      row: Y.absoluteRow,
      data: Y.project,
      zoom: r,
      isSubcontract: Y.isSubcontract,
      yOffset: Y.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    Y.project.segmentId
  ));
  return /* @__PURE__ */ h(Pe, { children: [...v, ...K] });
}, zl = Fl;
x.div`
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
const Hl = x.div`
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
`, Bl = x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, Wl = x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, jl = x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Zl = x.span`
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
`, Vl = x.div`
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
`, Gl = x.div`
  ${Dt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Xl = x.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, Ul = x.div`
  padding: 10px 12px;
`, Kl = x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Ir = x.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Yr = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Lr = x.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Rr = x.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Nr = x.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Jl = x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, ql = x.div`
  min-width: 0;
`, Ql = x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, ed = x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, Fr = x.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, _t = x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Tt = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, At = x.div`
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
const td = {
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
}, nd = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = he(null), [s, i] = me("below"), c = ot(), l = { ...td, ...c.tooltip };
  qt(() => {
    if (!o.current || !t)
      return;
    const $ = o.current, { width: g, height: I } = $.getBoundingClientRect(), K = $.parentElement;
    if (!K)
      return;
    const Y = K.getBoundingClientRect(), N = 12, y = 4, m = Y.height - t.y, f = Y.width - t.x;
    let E = t.x + N, w = t.y + N, C = "below";
    f < g + N && (E = t.x - g - N), m < I + N && (w = t.y - I - N, C = "above"), E = Math.max(y, Math.min(E, Y.width - g - y)), w = Math.max(y, Math.min(w, Y.height - I - y)), i(C), $.style.left = `${E}px`, $.style.top = `${w}px`;
  }, [t]);
  const a = n.reservationType === Lt.Tour, u = a && n.isOneDayEvent, d = a ? u ? "sun" : "tour" : "transfer", v = a ? u ? l.oneDay : l.tour : l.transfer, S = n.readiness ? $o[n.readiness] : null, b = [
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ H(Hl, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ H(Bl, { children: [
      /* @__PURE__ */ H(Wl, { children: [
        /* @__PURE__ */ h(jl, { children: n.bookingNumber }),
        /* @__PURE__ */ H(Zl, { children: [
          /* @__PURE__ */ h(Be, { name: d, strokeWidth: 2.4 }),
          v
        ] })
      ] }),
      /* @__PURE__ */ h(Gl, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(Xl, { children: n.client }),
      S && /* @__PURE__ */ H(Vl, { style: { color: S.color }, children: [
        /* @__PURE__ */ h(Be, { name: S.icon, strokeWidth: S.icon === "check" ? 2.6 : 2.2 }),
        n.readinessNote || S.label
      ] })
    ] }),
    /* @__PURE__ */ H(Ul, { children: [
      /* @__PURE__ */ H(Kl, { children: [
        /* @__PURE__ */ H(Ir, { children: [
          /* @__PURE__ */ h(Yr, { children: l.startDate }),
          /* @__PURE__ */ H(Lr, { children: [
            /* @__PURE__ */ h(Rr, { children: n.startDate }),
            /* @__PURE__ */ h(Nr, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ H(Ir, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Yr, { children: l.endDate }),
          /* @__PURE__ */ H(Lr, { children: [
            /* @__PURE__ */ h(Rr, { children: n.endDate }),
            /* @__PURE__ */ h(Nr, { children: n.endTime })
          ] })
        ] })
      ] }),
      b.length > 0 && /* @__PURE__ */ h(Jl, { children: b.map(($, g) => /* @__PURE__ */ H(ql, { children: [
        /* @__PURE__ */ h(Ql, { children: $.label }),
        /* @__PURE__ */ h(ed, { children: $.value })
      ] }, g)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ H(Fr, { children: [
        n.departureAddress && /* @__PURE__ */ H(_t, { children: [
          /* @__PURE__ */ h(Tt, { children: l.salida }),
          /* @__PURE__ */ h(At, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ H(_t, { children: [
          /* @__PURE__ */ h(Tt, { children: l.destino }),
          /* @__PURE__ */ h(At, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ H(_t, { children: [
          /* @__PURE__ */ h(Tt, { children: l.regreso }),
          /* @__PURE__ */ h(At, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ H(Fr, { children: [
        n.serviceNotes && /* @__PURE__ */ H(_t, { children: [
          /* @__PURE__ */ h(Tt, { children: l.serviceNotes }),
          /* @__PURE__ */ h(At, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ H(_t, { children: [
          /* @__PURE__ */ h(Tt, { children: l.reservationNotes }),
          /* @__PURE__ */ h(At, { children: n.reservationNotes })
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
const rd = x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, od = x.div`
  position: absolute;
  height: ${en}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, sd = x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, zr = x.p`
  ${Dt}
  ${ut}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, id = x.p`
  ${Dt}
  ${ut}
`, ad = x.div`
  position: sticky;
  left: ${Fe + 16}px;
  overflow: hidden;
`, cd = x.div`
  position: absolute;
  height: ${en}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, ld = x.div`
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
`, dd = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, ud = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, fd = x.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Hr = x.div`
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
`, Br = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Wr = x.div`
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
`, jr = x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, cn = x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, ln = x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, gt = x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Zr = x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, hd = ({
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
  const a = ot(), { config: u } = Ze(), d = u.hourFormat ?? "12h", v = (m) => {
    let f = 0;
    for (const E of l)
      E <= m && f++;
    return m * ve + f * Ne;
  }, [S, b] = me(null), [$, g] = me(0), I = de((m = 400, f = 300) => {
    const w = t.width, C = 48, W = document.getElementById("react-scheduler");
    if (!W)
      return {
        x: r.x + w + 16,
        y: r.y
      };
    const q = W.scrollLeft, O = W.scrollTop, k = W.clientWidth, T = W.clientHeight, z = r.x - q, P = r.y - O, A = {
      left: Fe + 16,
      // Avoid left column
      right: k - 16,
      top: 16,
      bottom: T - 16
    }, j = A.right - (z + w), ne = z - A.left, ae = A.bottom - (P + C), G = P - A.top;
    let R, X;
    return j >= m + 16 ? R = z + w + 16 : ne >= m + 16 ? R = z - m - 16 : j >= ne ? (R = z + w + 16, R + m > A.right && (R = A.right - m)) : (R = z - m - 16, R < A.left && (R = A.left)), ae >= f + 16 ? X = P + C + 16 : G >= f + 16 ? X = P - f - 16 : ae >= G ? (X = P + C + 16, X + f > A.bottom && (X = A.bottom - f)) : (X = P - f - 16, X < A.top && (X = A.top)), R = Math.max(A.left, Math.min(R, A.right - m)), X = Math.max(A.top, Math.min(X, A.bottom - f)), {
      x: R + q,
      y: X + O
    };
  }, [r.x, r.y, t.width]);
  ye(() => {
    s === "dragging" && e && $ === 0 ? g(r.x) : s === "idle" && g(0);
  }, [s, e, r.x, $]), ye(() => {
    b(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const K = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const m = [];
    let f = 0;
    for (const E of i) {
      const w = Math.max(E.data.length, 1);
      if (E.capacity !== void 0 && e.totalPassengers > E.capacity)
        for (let C = 0; C < w; C++)
          m.push(f + C);
      f += w;
    }
    return m;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const Y = s === "animating", N = ko(e.bgColor ?? ""), y = () => {
    if (!n)
      return "";
    const m = `${L(n.startDate).format("MMM D")}, ${_e(n.startDate, d)}`, f = _e(n.endDate, d);
    return `${m} - ${f}`;
  };
  return /* @__PURE__ */ H(rd, { children: [
    K.map((m) => /* @__PURE__ */ h(
      ud,
      {
        style: {
          top: `${v(m)}px`,
          height: `${ve}px`
        }
      },
      m
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      dd,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${v(n.resourceIndex)}px`,
          height: `${ve}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ H(Pe, { children: [
      /* @__PURE__ */ h(
        cd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${v(n.resourceIndex) + (ve - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ h(
        ld,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${v(n.resourceIndex) + (ve - 48) / 2}px`
          },
          children: y()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      fd,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          left: "0px",
          top: `${v(n.resourceIndex)}px`,
          height: `${ve}px`
        }
      }
    ),
    n && o && n.hasConflict && n.conflicts && n.conflicts.length > 0 && s === "dragging" && (() => {
      const m = I(400, 300);
      return /* @__PURE__ */ H(
        Hr,
        {
          style: {
            left: `${m.x}px`,
            top: `${m.y}px`
          },
          children: [
            /* @__PURE__ */ H(Br, { children: [
              /* @__PURE__ */ h(Wr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(jr, { children: n.conflicts.map((f, E) => {
              const w = L(n.startDate).format("YYYY-MM-DD"), C = L(n.endDate).format("YYYY-MM-DD"), W = L(f.event.startDate).format("YYYY-MM-DD"), q = L(f.event.endDate).format("YYYY-MM-DD"), O = L(f.conflictStart).format("YYYY-MM-DD"), k = L(f.conflictEnd).format("YYYY-MM-DD"), T = w !== C, z = W !== q, P = O !== k, A = T ? `${L(n.startDate).format("MMM D")}, ${_e(n.startDate, d)}` : _e(n.startDate, d), j = T ? `${L(n.endDate).format("MMM D")}, ${_e(n.endDate, d)}` : _e(n.endDate, d), ne = z ? `${L(f.event.startDate).format("MMM D")}, ${_e(f.event.startDate, d)}` : _e(f.event.startDate, d), ae = z ? `${L(f.event.endDate).format("MMM D")}, ${_e(f.event.endDate, d)}` : _e(f.event.endDate, d), G = P ? `${L(f.conflictStart).format("MMM D")}, ${_e(f.conflictStart, d)}` : _e(f.conflictStart, d), R = P ? `${L(f.conflictEnd).format("MMM D")}, ${_e(f.conflictEnd, d)}` : _e(f.conflictEnd, d), X = P ? "" : L(f.conflictStart).format("MMM D"), te = n.startDate.getTime(), M = n.endDate.getTime(), Z = f.event.startDate.getTime(), _ = f.event.endDate.getTime(), Q = te >= Z && te < _, B = M > Z && M <= _, F = te <= Z && M >= _, p = Z <= te && _ >= M;
              let J = !1, D = !1, U = !1, ee = !1, V = "";
              return F || p ? (J = !0, D = !0, U = !0, ee = !0, V = `⚠️ ${a.conflicts.changeBoth}`) : Q && B ? (J = !0, D = !0, U = !0, ee = !0, V = `⚠️ ${a.conflicts.changeBoth}`) : Q ? (J = !0, ee = !0, V = `⚠️ ${a.conflicts.changeStart}`) : B && (D = !0, U = !0, V = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ H(cn, { children: [
                /* @__PURE__ */ H(ln, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ H(gt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  J ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: A }) : A,
                  " ",
                  a.conflicts.to,
                  " ",
                  D ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: j }) : j
                ] }),
                /* @__PURE__ */ H(gt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  U ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ne }) : ne,
                  " ",
                  a.conflicts.to,
                  " ",
                  ee ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ae }) : ae
                ] }),
                /* @__PURE__ */ H(Zr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  X && `${X}, `,
                  G,
                  " - ",
                  R
                ] }),
                V && /* @__PURE__ */ h(gt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: V })
              ] }, E);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const m = I(400, 400);
      return /* @__PURE__ */ H(
        Hr,
        {
          style: {
            left: `${m.x}px`,
            top: `${m.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ H(Br, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Wr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ H(jr, { children: [
              (() => {
                const f = n.nearbyEvents.some((W) => W.position === "before"), E = n.nearbyEvents.some((W) => W.position === "after"), w = _e(n.startDate, d), C = _e(n.endDate, d);
                return /* @__PURE__ */ H(cn, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ H(ln, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ H(gt, { style: { fontWeight: 600 }, children: [
                    L(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    E ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: C }) : C
                  ] }),
                  /* @__PURE__ */ h(gt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, E) => {
                const w = L(f.event.startDate).format("YYYY-MM-DD"), C = L(f.event.endDate).format("YYYY-MM-DD"), W = w !== C, q = W ? `${L(f.event.startDate).format("MMM D")}, ${_e(f.event.startDate, d)}` : _e(f.event.startDate, d), O = W ? `${L(f.event.endDate).format("MMM D")}, ${_e(f.event.endDate, d)}` : _e(f.event.endDate, d), k = L(f.event.startDate).format("MMM D"), T = Math.floor(f.timeGap / (1e3 * 60 * 60)), z = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), P = T > 0 ? `${T}h ${z}m` : `${z}m`, A = f.position === "after", j = f.position === "before";
                return /* @__PURE__ */ H(cn, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ H(ln, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ H(gt, { children: [
                    !W && `${k}: `,
                    A ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: q }) : q,
                    " ",
                    a.conflicts.to,
                    " ",
                    j ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: O }) : O
                  ] }),
                  /* @__PURE__ */ H(Zr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    P,
                    " ",
                    f.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, E);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      od,
      {
        $isAnimating: Y,
        $animateToX: S == null ? void 0 : S.x,
        $animateToY: S == null ? void 0 : S.y,
        style: {
          left: Y ? `${(S == null ? void 0 : S.x) ?? 0}px` : "0",
          top: Y ? `${(S == null ? void 0 : S.y) ?? 0}px` : "0",
          transform: Y ? void 0 : `translate3d(${c ? $ : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: N
        },
        children: /* @__PURE__ */ h(sd, { children: /* @__PURE__ */ H(ad, { children: [
          /* @__PURE__ */ h(zr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(zr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(id, { children: e.description })
        ] }) })
      }
    )
  ] });
}, pd = hd, md = Ke`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, gd = x.div`
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
  animation: ${md} 1.5s ease-in-out infinite;
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
`, yd = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  gd,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), vd = yd, xd = Ke`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, bd = x.div`
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
  animation: ${xd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, wd = x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Sd = x.span`
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
`, Cd = x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Md = x.span`
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
const kd = x.div`
  display: flex;
  gap: 8px;
`, Vr = x.button`
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
`, $d = ({ selections: e, onConfirm: r, onClear: t }) => {
  var b;
  const o = ot().multiSelect, s = $e(() => e.filter(($) => $.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", u = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", d = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((b = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : b.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const v = s > 0, S = /* @__PURE__ */ H(bd, { $hasConflicts: v, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ H(wd, { children: [
      /* @__PURE__ */ H(Sd, { $hasConflicts: v, children: [
        e.length,
        " ",
        i
      ] }),
      v && /* @__PURE__ */ H(Cd, { children: [
        "⚠️ ",
        d
      ] }),
      /* @__PURE__ */ h(Md, { children: c })
    ] }),
    /* @__PURE__ */ H(kd, { children: [
      /* @__PURE__ */ H(Vr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ h(Vr, { variant: "primary", $hasConflicts: v, onClick: r, children: v ? `⚠️ ${u}` : `✓ ${a}` })
    ] })
  ] });
  return Oo(S, document.body);
}, Dd = $d, Ed = Ke`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, _d = x.div`
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
  animation: ${Ed} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && $t`
      border-style: dashed;
    `}
`, Td = x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, Ad = x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Pd = x.button`
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
`, Od = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, l] = me(null), [a, u] = me({ x: 0, y: 0 }), d = he(null), v = $e(() => {
    switch (t) {
      case 0:
        return We * 7;
      case 1:
        return Te;
      case 2:
        return Ye;
      default:
        return Te;
    }
  }, [t]), S = $e(() => L().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), b = $e(() => e.map((m, f) => {
    let E = 0, w = !1;
    for (const A of r) {
      if (A.id === m.resourceId) {
        w = !0;
        break;
      }
      E += Math.max(A.data.length, 1);
    }
    if (!w)
      return null;
    const C = L(m.startDate), W = L(m.endDate);
    let q, O;
    switch (t) {
      case 0:
        q = Math.floor(C.diff(S, "days") / 7), O = Math.max(1, Math.ceil(W.diff(C, "days") / 7) + 1);
        break;
      case 1:
        q = C.diff(S, "days"), O = Math.max(1, W.diff(C, "days") + 1);
        break;
      case 2:
        q = C.diff(S, "hours"), O = Math.max(1, W.diff(C, "hours") + 1);
        break;
      default:
        q = 0, O = 1;
    }
    const k = q * v;
    let T = 0;
    for (const A of i)
      A <= E && T++;
    const z = E * ve + T * Ne, P = O * v;
    return {
      index: f,
      selection: m,
      x: k,
      y: z,
      width: P,
      height: ve
    };
  }), [e, r, t, S, v]), $ = (m, f) => {
    const E = L(m).format("MMM D"), w = L(f).format("MMM D");
    return E === w ? E : `${E} - ${w}`;
  }, g = (m) => !m.hasConflict || !m.conflicts ? "" : `⚠️ Conflicts with:
${m.conflicts.map((E) => {
    const w = (E.overlapDuration / 36e5).toFixed(1);
    return `• ${E.event.title} (${w}h overlap)`;
  }).join(`
`)}`, I = de(
    (m) => {
      let f = 0;
      for (const E of r) {
        const w = Math.max(E.data.length, 1);
        if (m >= f * ve && m < (f + w) * ve)
          return {
            resourceId: E.id,
            resourceLabel: E.label
          };
        f += w;
      }
      return null;
    },
    [r]
  ), K = de(
    (m) => {
      const f = Math.floor(m / v);
      switch (t) {
        case 0:
          return S.add(f * 7, "days").toDate();
        case 1:
          return S.add(f, "days").toDate();
        case 2:
          return S.add(f, "hours").toDate();
        default:
          return S.toDate();
      }
    },
    [t, S, v]
  ), Y = de(
    (m, f) => {
      !s || (m.preventDefault(), m.stopPropagation(), !b[f]) || (d.current = { x: m.clientX, y: m.clientY }, l(f), u({ x: 0, y: 0 }));
    },
    [s, b]
  ), N = de(
    (m) => {
      if (c === null || !d.current)
        return;
      const f = m.clientX - d.current.x, E = m.clientY - d.current.y, w = Math.round(f / v) * v, C = Math.round(E / ve) * ve;
      u({ x: w, y: C });
    },
    [c, v]
  ), y = de(() => {
    if (c === null || !s) {
      l(null), u({ x: 0, y: 0 }), d.current = null;
      return;
    }
    const m = b[c];
    if (!m) {
      l(null), u({ x: 0, y: 0 }), d.current = null;
      return;
    }
    const f = m.x + a.x, E = m.y + a.y, w = I(E + ve / 2);
    if (!w) {
      l(null), u({ x: 0, y: 0 }), d.current = null;
      return;
    }
    const C = K(f), W = e[c], q = W.endDate.getTime() - W.startDate.getTime(), O = new Date(C.getTime() + q);
    s(c, {
      startDate: C,
      endDate: O,
      resourceId: w.resourceId,
      resourceLabel: w.resourceLabel
    }), l(null), u({ x: 0, y: 0 }), d.current = null;
  }, [c, a, b, e, s, I, K]);
  return ye(() => {
    if (c !== null)
      return document.addEventListener("mousemove", N), document.addEventListener("mouseup", y), () => {
        document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", y);
      };
  }, [c, N, y]), /* @__PURE__ */ h(Pe, { children: b.map((m) => {
    if (!m)
      return null;
    const f = m.selection.hasConflict || !1, E = c === m.index, w = E ? m.x + a.x : m.x, C = E ? m.y + a.y : m.y;
    return /* @__PURE__ */ H(
      _d,
      {
        $hasConflict: f,
        $isDragging: E,
        style: {
          left: w,
          top: C,
          width: m.width,
          height: m.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (W) => Y(W, m.index),
        children: [
          f && /* @__PURE__ */ h(Ad, { title: g(m.selection), children: "⚠️" }),
          /* @__PURE__ */ h(Td, { $hasConflict: f, children: $(m.selection.startDate, m.selection.endDate) }),
          /* @__PURE__ */ h(
            Pd,
            {
              onClick: (W) => {
                W.stopPropagation(), o(m.index);
              },
              onMouseDown: (W) => W.stopPropagation(),
              title: f ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      m.index
    );
  }) });
}, Id = Od, Do = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? We * 7 : Te, s = L().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, Yd = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ theme: e }) => e.colors.today}12;
`, Ld = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ze(), n = $e(
    () => Do(L(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(Yd, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, Rd = Ld, Nd = "#2f6fed", Fd = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${Nd}1c;
`, zd = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = Ze(), o = $e(() => !n || n.isSame(L(), "day") ? null : Do(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(Fd, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0 }) : null;
}, Hd = zd;
export {
  Vd as Scheduler
};
