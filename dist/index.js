var Eo = Object.defineProperty;
var _o = (e, r, t) => r in e ? Eo(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Zn = (e, r, t) => (_o(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as W, Fragment as Pe } from "react/jsx-runtime";
import * as oe from "react";
import at, { useRef as fe, useContext as nt, useMemo as De, useLayoutEffect as qt, useDebugValue as Vn, createElement as To, createContext as Vr, useState as he, useCallback as de, useEffect as xe, forwardRef as On, useImperativeHandle as Gr } from "react";
import { createPortal as Ao } from "react-dom";
var Oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ot = {}, Po = {
  get exports() {
    return Ot;
  },
  set exports(e) {
    Ot = e;
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
var Gn;
function Oo() {
  if (Gn)
    return Se;
  Gn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function k(p) {
    if (typeof p == "object" && p !== null) {
      var Y = p.$$typeof;
      switch (Y) {
        case e:
          switch (p = p.type, p) {
            case t:
            case o:
            case n:
            case a:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case i:
                case l:
                case g:
                case u:
                case s:
                  return p;
                default:
                  return Y;
              }
          }
        case r:
          return Y;
      }
    }
  }
  return Se.ContextConsumer = i, Se.ContextProvider = s, Se.Element = e, Se.ForwardRef = l, Se.Fragment = t, Se.Lazy = g, Se.Memo = u, Se.Portal = r, Se.Profiler = o, Se.StrictMode = n, Se.Suspense = a, Se.SuspenseList = d, Se.isAsyncMode = function() {
    return !1;
  }, Se.isConcurrentMode = function() {
    return !1;
  }, Se.isContextConsumer = function(p) {
    return k(p) === i;
  }, Se.isContextProvider = function(p) {
    return k(p) === s;
  }, Se.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Se.isForwardRef = function(p) {
    return k(p) === l;
  }, Se.isFragment = function(p) {
    return k(p) === t;
  }, Se.isLazy = function(p) {
    return k(p) === g;
  }, Se.isMemo = function(p) {
    return k(p) === u;
  }, Se.isPortal = function(p) {
    return k(p) === r;
  }, Se.isProfiler = function(p) {
    return k(p) === o;
  }, Se.isStrictMode = function(p) {
    return k(p) === n;
  }, Se.isSuspense = function(p) {
    return k(p) === a;
  }, Se.isSuspenseList = function(p) {
    return k(p) === d;
  }, Se.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === n || p === a || p === d || p === S || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === u || p.$$typeof === s || p.$$typeof === i || p.$$typeof === l || p.$$typeof === v || p.getModuleId !== void 0);
  }, Se.typeOf = k, Se;
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
var Xn;
function Io() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), v = !1, k = !1, p = !1, Y = !1, G = !1, N;
    N = Symbol.for("react.module.reference");
    function T(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === t || E === o || G || E === n || E === a || E === d || Y || E === S || v || k || p || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === u || E.$$typeof === s || E.$$typeof === i || E.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === N || E.getModuleId !== void 0));
    }
    function f(E) {
      if (typeof E == "object" && E !== null) {
        var Z = E.$$typeof;
        switch (Z) {
          case e:
            var te = E.type;
            switch (te) {
              case t:
              case o:
              case n:
              case a:
              case d:
                return te;
              default:
                var J = te && te.$$typeof;
                switch (J) {
                  case c:
                  case i:
                  case l:
                  case g:
                  case u:
                  case s:
                    return J;
                  default:
                    return Z;
                }
            }
          case r:
            return Z;
        }
      }
    }
    var y = i, x = s, D = e, w = l, $ = t, H = g, q = u, O = r, C = o, P = n, B = a, I = d, V = !1, U = !1;
    function ee(E) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(E) {
      return U || (U = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R(E) {
      return f(E) === i;
    }
    function F(E) {
      return f(E) === s;
    }
    function K(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function ne(E) {
      return f(E) === l;
    }
    function M(E) {
      return f(E) === t;
    }
    function j(E) {
      return f(E) === g;
    }
    function _(E) {
      return f(E) === u;
    }
    function Q(E) {
      return f(E) === r;
    }
    function z(E) {
      return f(E) === o;
    }
    function L(E) {
      return f(E) === n;
    }
    function m(E) {
      return f(E) === a;
    }
    function X(E) {
      return f(E) === d;
    }
    Ce.ContextConsumer = y, Ce.ContextProvider = x, Ce.Element = D, Ce.ForwardRef = w, Ce.Fragment = $, Ce.Lazy = H, Ce.Memo = q, Ce.Portal = O, Ce.Profiler = C, Ce.StrictMode = P, Ce.Suspense = B, Ce.SuspenseList = I, Ce.isAsyncMode = ee, Ce.isConcurrentMode = re, Ce.isContextConsumer = R, Ce.isContextProvider = F, Ce.isElement = K, Ce.isForwardRef = ne, Ce.isFragment = M, Ce.isLazy = j, Ce.isMemo = _, Ce.isPortal = Q, Ce.isProfiler = z, Ce.isStrictMode = L, Ce.isSuspense = m, Ce.isSuspenseList = X, Ce.isValidElementType = T, Ce.typeOf = f;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Oo() : e.exports = Io();
})(Po);
function Yo(e) {
  function r(R, F, K, ne, M) {
    for (var j = 0, _ = 0, Q = 0, z = 0, L, m, X = 0, E = 0, Z, te = Z = L = 0, J = 0, ae = 0, ge = 0, ue = 0, be = K.length, Ee = be - 1, we, se = "", me = "", Te = "", pe = "", ve; J < be; ) {
      if (m = K.charCodeAt(J), J === Ee && _ + z + Q + j !== 0 && (_ !== 0 && (m = _ === 47 ? 10 : 47), z = Q = j = 0, be++, Ee++), _ + z + Q + j === 0) {
        if (J === Ee && (0 < ae && (se = se.replace(g, "")), 0 < se.trim().length)) {
          switch (m) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += K.charAt(J);
          }
          m = 59;
        }
        switch (m) {
          case 123:
            for (se = se.trim(), L = se.charCodeAt(0), Z = 1, ue = ++J; J < be; ) {
              switch (m = K.charCodeAt(J)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (m = K.charCodeAt(J + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (te = J + 1; te < Ee; ++te)
                          switch (K.charCodeAt(te)) {
                            case 47:
                              if (m === 42 && K.charCodeAt(te - 1) === 42 && J + 2 !== te) {
                                J = te + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (m === 47) {
                                J = te + 1;
                                break e;
                              }
                          }
                        J = te;
                      }
                  }
                  break;
                case 91:
                  m++;
                case 40:
                  m++;
                case 34:
                case 39:
                  for (; J++ < Ee && K.charCodeAt(J) !== m; )
                    ;
              }
              if (Z === 0)
                break;
              J++;
            }
            switch (Z = K.substring(ue, J), L === 0 && (L = (se = se.replace(u, "").trim()).charCodeAt(0)), L) {
              case 64:
                switch (0 < ae && (se = se.replace(g, "")), m = se.charCodeAt(1), m) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ae = F;
                    break;
                  default:
                    ae = B;
                }
                if (Z = r(F, ae, Z, m, M + 1), ue = Z.length, 0 < V && (ae = t(B, se, ge), ve = c(3, Z, ae, F, O, q, ue, m, M, ne), se = ae.join(""), ve !== void 0 && (ue = (Z = ve.trim()).length) === 0 && (m = 0, Z = "")), 0 < ue)
                  switch (m) {
                    case 115:
                      se = se.replace(y, i);
                    case 100:
                    case 109:
                    case 45:
                      Z = se + "{" + Z + "}";
                      break;
                    case 107:
                      se = se.replace(G, "$1 $2"), Z = se + "{" + Z + "}", Z = P === 1 || P === 2 && s("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                      break;
                    default:
                      Z = se + Z, ne === 112 && (Z = (me += Z, ""));
                  }
                else
                  Z = "";
                break;
              default:
                Z = r(F, t(F, se, ge), Z, ne, M + 1);
            }
            Te += Z, Z = ge = ae = te = L = 0, se = "", m = K.charCodeAt(++J);
            break;
          case 125:
          case 59:
            if (se = (0 < ae ? se.replace(g, "") : se).trim(), 1 < (ue = se.length))
              switch (te === 0 && (L = se.charCodeAt(0), L === 45 || 96 < L && 123 > L) && (ue = (se = se.replace(" ", ":")).length), 0 < V && (ve = c(1, se, F, R, O, q, me.length, ne, M, ne)) !== void 0 && (ue = (se = ve.trim()).length) === 0 && (se = "\0\0"), L = se.charCodeAt(0), m = se.charCodeAt(1), L) {
                case 0:
                  break;
                case 64:
                  if (m === 105 || m === 99) {
                    pe += se + K.charAt(J);
                    break;
                  }
                default:
                  se.charCodeAt(ue - 1) !== 58 && (me += o(se, L, m, se.charCodeAt(2)));
              }
            ge = ae = te = L = 0, se = "", m = K.charCodeAt(++J);
        }
      }
      switch (m) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + L === 0 && ne !== 107 && 0 < se.length && (ae = 1, se += "\0"), 0 < V * ee && c(0, se, F, R, O, q, me.length, ne, M, ne), q = 1, O++;
          break;
        case 59:
        case 125:
          if (_ + z + Q + j === 0) {
            q++;
            break;
          }
        default:
          switch (q++, we = K.charAt(J), m) {
            case 9:
            case 32:
              if (z + j + _ === 0)
                switch (X) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    we = "";
                    break;
                  default:
                    m !== 32 && (we = " ");
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
              z + _ + j === 0 && (ae = ge = 1, we = "\f" + we);
              break;
            case 108:
              if (z + _ + j + C === 0 && 0 < te)
                switch (J - te) {
                  case 2:
                    X === 112 && K.charCodeAt(J - 3) === 58 && (C = X);
                  case 8:
                    E === 111 && (C = E);
                }
              break;
            case 58:
              z + _ + j === 0 && (te = J);
              break;
            case 44:
              _ + Q + z + j === 0 && (ae = 1, we += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (z = z === m ? 0 : z === 0 ? m : z);
              break;
            case 91:
              z + _ + Q === 0 && j++;
              break;
            case 93:
              z + _ + Q === 0 && j--;
              break;
            case 41:
              z + _ + j === 0 && Q--;
              break;
            case 40:
              if (z + _ + j === 0) {
                if (L === 0)
                  switch (2 * X + 3 * E) {
                    case 533:
                      break;
                    default:
                      L = 1;
                  }
                Q++;
              }
              break;
            case 64:
              _ + Q + z + j + te + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < z + j + Q))
                switch (_) {
                  case 0:
                    switch (2 * m + 3 * K.charCodeAt(J + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        ue = J, _ = 42;
                    }
                    break;
                  case 42:
                    m === 47 && X === 42 && ue + 2 !== J && (K.charCodeAt(ue + 2) === 33 && (me += K.substring(ue, J + 1)), we = "", _ = 0);
                }
          }
          _ === 0 && (se += we);
      }
      E = X, X = m, J++;
    }
    if (ue = me.length, 0 < ue) {
      if (ae = F, 0 < V && (ve = c(2, me, ae, R, O, q, ue, ne, M, ne), ve !== void 0 && (me = ve).length === 0))
        return pe + me + Te;
      if (me = ae.join(",") + "{" + me + "}", P * C !== 0) {
        switch (P !== 2 || s(me, 2) || (C = 0), C) {
          case 111:
            me = me.replace(T, ":-moz-$1") + me;
            break;
          case 112:
            me = me.replace(N, "::-webkit-input-$1") + me.replace(N, "::-moz-$1") + me.replace(N, ":-ms-input-$1") + me;
        }
        C = 0;
      }
    }
    return pe + me + Te;
  }
  function t(R, F, K) {
    var ne = F.trim().split(p);
    F = ne;
    var M = ne.length, j = R.length;
    switch (j) {
      case 0:
      case 1:
        var _ = 0;
        for (R = j === 0 ? "" : R[0] + " "; _ < M; ++_)
          F[_] = n(R, F[_], K).trim();
        break;
      default:
        var Q = _ = 0;
        for (F = []; _ < M; ++_)
          for (var z = 0; z < j; ++z)
            F[Q++] = n(R[z] + " ", ne[_], K).trim();
    }
    return F;
  }
  function n(R, F, K) {
    var ne = F.charCodeAt(0);
    switch (33 > ne && (ne = (F = F.trim()).charCodeAt(0)), ne) {
      case 38:
        return F.replace(Y, "$1" + R.trim());
      case 58:
        return R.trim() + F.replace(Y, "$1" + R.trim());
      default:
        if (0 < 1 * K && 0 < F.indexOf("\f"))
          return F.replace(Y, (R.charCodeAt(0) === 58 ? "" : "$1") + R.trim());
    }
    return R + F;
  }
  function o(R, F, K, ne) {
    var M = R + ";", j = 2 * F + 3 * K + 4 * ne;
    if (j === 944) {
      R = M.indexOf(":", 9) + 1;
      var _ = M.substring(R, M.length - 1).trim();
      return _ = M.substring(0, R).trim() + _ + ";", P === 1 || P === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (P === 0 || P === 2 && !s(M, 1))
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
          return M.replace(H, "$1-webkit-$2") + M;
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
        return v.test(M) ? M.replace(S, ":-webkit-") + M.replace(S, ":-moz-") + M : M;
      case 1e3:
        switch (_ = M.substring(13).trim(), F = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(F)) {
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
        switch (F = (M = R).length - 10, _ = (M.charCodeAt(F) === 33 ? M.substring(0, F) : M).substring(R.indexOf(":", 7) + 1).trim(), j = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
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
              return "-webkit-" + M + "-ms-flex-item-" + M.replace(D, "") + M;
            default:
              return "-webkit-" + M + "-ms-flex-line-pack" + M.replace("align-content", "").replace(D, "") + M;
          }
        break;
      case 973:
      case 989:
        if (M.charCodeAt(3) !== 45 || M.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if ($.test(R) === !0)
          return (_ = R.substring(R.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(R.replace("stretch", "fill-available"), F, K, ne).replace(":fill-available", ":stretch") : M.replace(_, "-webkit-" + _) + M.replace(_, "-moz-" + _.replace("fill-", "")) + M;
        break;
      case 962:
        if (M = "-webkit-" + M + (M.charCodeAt(5) === 102 ? "-ms-" + M : "") + M, K + ne === 211 && M.charCodeAt(13) === 105 && 0 < M.indexOf("transform", 10))
          return M.substring(0, M.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + M;
    }
    return M;
  }
  function s(R, F) {
    var K = R.indexOf(F === 1 ? ":" : "{"), ne = R.substring(0, F !== 3 ? K : 10);
    return K = R.substring(K + 1, R.length - 1), U(F !== 2 ? ne : ne.replace(w, "$1"), K, F);
  }
  function i(R, F) {
    var K = o(F, F.charCodeAt(0), F.charCodeAt(1), F.charCodeAt(2));
    return K !== F + ";" ? K.replace(x, " or ($1)").substring(4) : "(" + F + ")";
  }
  function c(R, F, K, ne, M, j, _, Q, z, L) {
    for (var m = 0, X = F, E; m < V; ++m)
      switch (E = I[m].call(d, R, X, K, ne, M, j, _, Q, z, L)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          X = E;
      }
    if (X !== F)
      return X;
  }
  function l(R) {
    switch (R) {
      case void 0:
      case null:
        V = I.length = 0;
        break;
      default:
        if (typeof R == "function")
          I[V++] = R;
        else if (typeof R == "object")
          for (var F = 0, K = R.length; F < K; ++F)
            l(R[F]);
        else
          ee = !!R | 0;
    }
    return l;
  }
  function a(R) {
    return R = R.prefix, R !== void 0 && (U = null, R ? typeof R != "function" ? P = 1 : (P = 2, U = R) : P = 0), a;
  }
  function d(R, F) {
    var K = R;
    if (33 > K.charCodeAt(0) && (K = K.trim()), re = K, K = [re], 0 < V) {
      var ne = c(-1, F, K, K, O, q, 0, 0, 0, 0);
      ne !== void 0 && typeof ne == "string" && (F = ne);
    }
    var M = r(B, K, F, 0, 0);
    return 0 < V && (ne = c(-2, M, K, K, O, q, M.length, 0, 0, 0), ne !== void 0 && (M = ne)), re = "", C = 0, q = O = 1, M;
  }
  var u = /^\0+/g, g = /[\0\r\f]/g, S = /: */g, v = /zoo|gra/, k = /([,: ])(transform)/g, p = /,\r+?/g, Y = /([\t\r\n ])*\f?&/g, G = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, T = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, y = /\(\s*(.*)\s*\)/g, x = /([\s\S]*?);/g, D = /-self|flex-/g, w = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $ = /stretch|:\s*\w+\-(?:conte|avail)/, H = /([^-])(image-set\()/, q = 1, O = 1, C = 0, P = 1, B = [], I = [], V = 0, U = null, ee = 0, re = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var Ro = {
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
function Lo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var No = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Un = /* @__PURE__ */ Lo(
  function(e) {
    return No.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), cn = {}, Bo = {
  get exports() {
    return cn;
  },
  set exports(e) {
    cn = e;
  }
}, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function zo() {
  if (Kn)
    return Me;
  Kn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
  function N(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
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
                case v:
                case S:
                case i:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  function T(f) {
    return N(f) === a;
  }
  return Me.AsyncMode = l, Me.ConcurrentMode = a, Me.ContextConsumer = c, Me.ContextProvider = i, Me.Element = r, Me.ForwardRef = d, Me.Fragment = n, Me.Lazy = v, Me.Memo = S, Me.Portal = t, Me.Profiler = s, Me.StrictMode = o, Me.Suspense = u, Me.isAsyncMode = function(f) {
    return T(f) || N(f) === l;
  }, Me.isConcurrentMode = T, Me.isContextConsumer = function(f) {
    return N(f) === c;
  }, Me.isContextProvider = function(f) {
    return N(f) === i;
  }, Me.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, Me.isForwardRef = function(f) {
    return N(f) === d;
  }, Me.isFragment = function(f) {
    return N(f) === n;
  }, Me.isLazy = function(f) {
    return N(f) === v;
  }, Me.isMemo = function(f) {
    return N(f) === S;
  }, Me.isPortal = function(f) {
    return N(f) === t;
  }, Me.isProfiler = function(f) {
    return N(f) === s;
  }, Me.isStrictMode = function(f) {
    return N(f) === o;
  }, Me.isSuspense = function(f) {
    return N(f) === u;
  }, Me.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === a || f === s || f === o || f === u || f === g || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === S || f.$$typeof === i || f.$$typeof === c || f.$$typeof === d || f.$$typeof === p || f.$$typeof === Y || f.$$typeof === G || f.$$typeof === k);
  }, Me.typeOf = N, Me;
}
var ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function Fo() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
    function N(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === a || m === s || m === o || m === u || m === g || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === S || m.$$typeof === i || m.$$typeof === c || m.$$typeof === d || m.$$typeof === p || m.$$typeof === Y || m.$$typeof === G || m.$$typeof === k);
    }
    function T(m) {
      if (typeof m == "object" && m !== null) {
        var X = m.$$typeof;
        switch (X) {
          case r:
            var E = m.type;
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
                  case v:
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
    var f = l, y = a, x = c, D = i, w = r, $ = d, H = n, q = v, O = S, C = t, P = s, B = o, I = u, V = !1;
    function U(m) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ee(m) || T(m) === l;
    }
    function ee(m) {
      return T(m) === a;
    }
    function re(m) {
      return T(m) === c;
    }
    function R(m) {
      return T(m) === i;
    }
    function F(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function K(m) {
      return T(m) === d;
    }
    function ne(m) {
      return T(m) === n;
    }
    function M(m) {
      return T(m) === v;
    }
    function j(m) {
      return T(m) === S;
    }
    function _(m) {
      return T(m) === t;
    }
    function Q(m) {
      return T(m) === s;
    }
    function z(m) {
      return T(m) === o;
    }
    function L(m) {
      return T(m) === u;
    }
    ke.AsyncMode = f, ke.ConcurrentMode = y, ke.ContextConsumer = x, ke.ContextProvider = D, ke.Element = w, ke.ForwardRef = $, ke.Fragment = H, ke.Lazy = q, ke.Memo = O, ke.Portal = C, ke.Profiler = P, ke.StrictMode = B, ke.Suspense = I, ke.isAsyncMode = U, ke.isConcurrentMode = ee, ke.isContextConsumer = re, ke.isContextProvider = R, ke.isElement = F, ke.isForwardRef = K, ke.isFragment = ne, ke.isLazy = M, ke.isMemo = j, ke.isPortal = _, ke.isProfiler = Q, ke.isStrictMode = z, ke.isSuspense = L, ke.isValidElementType = N, ke.typeOf = T;
  }()), ke;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = zo() : e.exports = Fo();
})(Bo);
var In = cn, Ho = {
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
}, Wo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, jo = {
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
}, Yn = {};
Yn[In.ForwardRef] = jo;
Yn[In.Memo] = Xr;
function qn(e) {
  return In.isMemo(e) ? Xr : Yn[e.$$typeof] || Ho;
}
var Zo = Object.defineProperty, Vo = Object.getOwnPropertyNames, Qn = Object.getOwnPropertySymbols, Go = Object.getOwnPropertyDescriptor, Xo = Object.getPrototypeOf, er = Object.prototype;
function Ur(e, r, t) {
  if (typeof r != "string") {
    if (er) {
      var n = Xo(r);
      n && n !== er && Ur(e, n, t);
    }
    var o = Vo(r);
    Qn && (o = o.concat(Qn(r)));
    for (var s = qn(e), i = qn(r), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!Wo[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = Go(r, l);
        try {
          Zo(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Uo = Ur;
function Fe() {
  return (Fe = Object.assign || function(e) {
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
}, ln = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ot.typeOf(e);
}, Gt = Object.freeze([]), tt = Object.freeze({});
function xt(e) {
  return typeof e == "function";
}
function dn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Rn(e) {
  return e && typeof e.styledComponentId == "string";
}
var bt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ln = typeof window < "u" && "HTMLElement" in window, Ko = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Jo = {}, qo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Qo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Xe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Qo.apply(void 0, [qo[e]].concat(t)).trim());
}
var es = function() {
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
}(), jt = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Pt = 1, Bt = function(e) {
  if (jt.has(e))
    return jt.get(e);
  for (; Xt.has(Pt); )
    Pt++;
  var r = Pt++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Xe(16, "" + r), jt.set(e, r), Xt.set(r, e), r;
}, ts = function(e) {
  return Xt.get(e);
}, ns = function(e, r) {
  r >= Pt && (Pt = r + 1), jt.set(e, r), Xt.set(r, e);
}, rs = "style[" + bt + '][data-styled-version="5.3.8"]', os = new RegExp("^" + bt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ss = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, is = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(os);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (ns(a, l), ss(e, a, c[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, as = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Kr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(bt))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(bt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = as();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, cs = function() {
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
}(), ls = function() {
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
}(), ds = function() {
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
}(), nr = Ln, us = { isServer: !Ln, useCSSOMInjection: !Ko }, Ut = function() {
  function e(t, n, o) {
    t === void 0 && (t = tt), n === void 0 && (n = {}), this.options = Fe({}, us, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Ln && nr && (nr = !1, function(s) {
      for (var i = document.querySelectorAll(rs), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(bt) !== "active" && (is(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Bt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Fe({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new ds(i) : s ? new cs(i) : new ls(i), new es(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Bt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Bt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Bt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = ts(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var d = bt + ".g" + i + '[id="' + c + '"]', u = "";
            l !== void 0 && l.forEach(function(g) {
              g.length > 0 && (u += g + ",");
            }), s += "" + a + d + '{content:"' + u + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), fs = /(a)(d)/gi, rr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function un(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = rr(r % 52) + t;
  return (rr(r % 52) + t).replace(fs, "$1-$2");
}
var st = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Jr = function(e) {
  return st(5381, e);
};
function qr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (xt(t) && !Rn(t))
      return !1;
  }
  return !0;
}
var hs = Jr("5.3.8"), ps = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && qr(r), this.componentId = t, this.baseHash = st(hs, t), this.baseStyle = n, Ut.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ct(this.rules, r, t, n).join(""), c = un(st(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = st(this.baseHash, n.hash), u = "", g = 0; g < a; g++) {
        var S = this.rules[g];
        if (typeof S == "string")
          u += S, process.env.NODE_ENV !== "production" && (d = st(d, S + g));
        else if (S) {
          var v = ct(S, r, t, n), k = Array.isArray(v) ? v.join("") : v;
          d = st(d, k + g), u += k;
        }
      }
      if (u) {
        var p = un(d >>> 0);
        if (!t.hasNameForId(o, p)) {
          var Y = n(u, "." + p, void 0, o);
          t.insertRules(o, p, Y);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), ms = /^\s*\/\/.*$/gm, gs = [":", "[", ".", "#"];
function ys(e) {
  var r, t, n, o, s = e === void 0 ? tt : e, i = s.options, c = i === void 0 ? tt : i, l = s.plugins, a = l === void 0 ? Gt : l, d = new Yo(c), u = [], g = function(k) {
    function p(Y) {
      if (Y)
        try {
          k(Y + "}");
        } catch {
        }
    }
    return function(Y, G, N, T, f, y, x, D, w, $) {
      switch (Y) {
        case 1:
          if (w === 0 && G.charCodeAt(0) === 64)
            return k(G + ";"), "";
          break;
        case 2:
          if (D === 0)
            return G + "/*|*/";
          break;
        case 3:
          switch (D) {
            case 102:
            case 112:
              return k(N[0] + G), "";
            default:
              return G + ($ === 0 ? "/*|*/" : "");
          }
        case -2:
          G.split("/*|*/}").forEach(p);
      }
    };
  }(function(k) {
    u.push(k);
  }), S = function(k, p, Y) {
    return p === 0 && gs.indexOf(Y[t.length]) !== -1 || Y.match(o) ? k : "." + r;
  };
  function v(k, p, Y, G) {
    G === void 0 && (G = "&");
    var N = k.replace(ms, ""), T = p && Y ? Y + " " + p + " { " + N + " }" : N;
    return r = G, t = p, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(Y || !p ? "" : p, T);
  }
  return d.use([].concat(a, [function(k, p, Y) {
    k === 2 && Y.length && Y[0].lastIndexOf(t) > 0 && (Y[0] = Y[0].replace(n, S));
  }, g, function(k) {
    if (k === -2) {
      var p = u;
      return u = [], p;
    }
  }])), v.hash = a.length ? a.reduce(function(k, p) {
    return p.name || Xe(15), st(k, p.name);
  }, 5381).toString() : "", v;
}
var Qr = at.createContext();
Qr.Consumer;
var eo = at.createContext(), vs = (eo.Consumer, new Ut()), fn = ys();
function to() {
  return nt(Qr) || vs;
}
function no() {
  return nt(eo) || fn;
}
var ro = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = fn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Xe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = fn), this.name + r.hash;
  }, e;
}(), xs = /([A-Z])/, bs = /([A-Z])/g, ws = /^ms-/, Ss = function(e) {
  return "-" + e.toLowerCase();
};
function or(e) {
  return xs.test(e) ? e.replace(bs, Ss).replace(ws, "-ms-") : e;
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
  if (xt(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && Ot.isElement(l) && console.warn(dn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ct(l, r, t, n);
  }
  var a;
  return e instanceof ro ? t ? (e.inject(t, n), e.getName(n)) : e : ln(e) ? function d(u, g) {
    var S, v, k = [];
    for (var p in u)
      u.hasOwnProperty(p) && !sr(u[p]) && (Array.isArray(u[p]) && u[p].isCss || xt(u[p]) ? k.push(or(p) + ":", u[p], ";") : ln(u[p]) ? k.push.apply(k, d(u[p], p)) : k.push(or(p) + ": " + (S = p, (v = u[p]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || S in Ro ? String(v).trim() : v + "px") + ";"));
    return g ? [g + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var ir = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function dt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return xt(e) || ln(e) ? ir(ct(tr(Gt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ir(ct(tr(e, t)));
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
      }, fe(), o && !zt.has(t) && (console.warn(t), zt.add(t));
    } catch (s) {
      ar.test(s.message) && zt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, so = function(e, r, t) {
  return t === void 0 && (t = tt), e.theme !== t.theme && e.theme || r || t.theme;
}, Cs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ms = /(^-|-$)/g;
function tn(e) {
  return e.replace(Cs, "-").replace(Ms, "");
}
var Nn = function(e) {
  return un(Jr(e) >>> 0);
};
function Ft(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var hn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ks = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function $s(e, r, t) {
  var n = e[t];
  hn(r) && hn(n) ? io(n, r) : e[t] = r;
}
function io(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (hn(i))
      for (var c in i)
        ks(c) && $s(e, i[c], c);
  }
  return e;
}
var wt = at.createContext();
wt.Consumer;
function Ds(e) {
  var r = nt(wt), t = De(function() {
    return function(n, o) {
      if (!n)
        return Xe(14);
      if (xt(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Xe(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Xe(8) : o ? Fe({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? at.createElement(wt.Provider, { value: t }, e.children) : null;
}
var nn = {};
function ao(e, r, t) {
  var n = Rn(e), o = !Ft(e), s = r.attrs, i = s === void 0 ? Gt : s, c = r.componentId, l = c === void 0 ? function(G, N) {
    var T = typeof G != "string" ? "sc" : tn(G);
    nn[T] = (nn[T] || 0) + 1;
    var f = T + "-" + Nn("5.3.8" + T + nn[T]);
    return N ? N + "-" + f : f;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(G) {
    return Ft(G) ? "styled." + G : "Styled(" + dn(G) + ")";
  }(e) : a, u = r.displayName && r.componentId ? tn(r.displayName) + "-" + r.componentId : r.componentId || l, g = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, S = r.shouldForwardProp;
  n && e.shouldForwardProp && (S = r.shouldForwardProp ? function(G, N, T) {
    return e.shouldForwardProp(G, N, T) && r.shouldForwardProp(G, N, T);
  } : e.shouldForwardProp);
  var v, k = new ps(t, u, n ? e.componentStyle : void 0), p = k.isStatic && i.length === 0, Y = function(G, N) {
    return function(T, f, y, x) {
      var D = T.attrs, w = T.componentStyle, $ = T.defaultProps, H = T.foldedComponentIds, q = T.shouldForwardProp, O = T.styledComponentId, C = T.target;
      process.env.NODE_ENV !== "production" && Vn(O);
      var P = function(ne, M, j) {
        ne === void 0 && (ne = tt);
        var _ = Fe({}, M, { theme: ne }), Q = {};
        return j.forEach(function(z) {
          var L, m, X, E = z;
          for (L in xt(E) && (E = E(_)), E)
            _[L] = Q[L] = L === "className" ? (m = Q[L], X = E[L], m && X ? m + " " + X : m || X) : E[L];
        }), [_, Q];
      }(so(f, nt(wt), $) || tt, f, D), B = P[0], I = P[1], V = function(ne, M, j, _) {
        var Q = to(), z = no(), L = M ? ne.generateAndInjectStyles(tt, Q, z) : ne.generateAndInjectStyles(j, Q, z);
        return process.env.NODE_ENV !== "production" && Vn(L), process.env.NODE_ENV !== "production" && !M && _ && _(L), L;
      }(w, x, B, process.env.NODE_ENV !== "production" ? T.warnTooManyClasses : void 0), U = y, ee = I.$as || f.$as || I.as || f.as || C, re = Ft(ee), R = I !== f ? Fe({}, f, {}, I) : f, F = {};
      for (var K in R)
        K[0] !== "$" && K !== "as" && (K === "forwardedAs" ? F.as = R[K] : (q ? q(K, Un, ee) : !re || Un(K)) && (F[K] = R[K]));
      return f.style && I.style !== f.style && (F.style = Fe({}, f.style, {}, I.style)), F.className = Array.prototype.concat(H, O, V !== O ? V : null, f.className, I.className).filter(Boolean).join(" "), F.ref = U, To(ee, F);
    }(v, G, N, p);
  };
  return Y.displayName = d, (v = at.forwardRef(Y)).attrs = g, v.componentStyle = k, v.displayName = d, v.shouldForwardProp = S, v.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Gt, v.styledComponentId = u, v.target = n ? e.target : e, v.withComponent = function(G) {
    var N = r.componentId, T = function(y, x) {
      if (y == null)
        return {};
      var D, w, $ = {}, H = Object.keys(y);
      for (w = 0; w < H.length; w++)
        D = H[w], x.indexOf(D) >= 0 || ($[D] = y[D]);
      return $;
    }(r, ["componentId"]), f = N && N + "-" + (Ft(G) ? G : tn(dn(G)));
    return ao(G, Fe({}, T, { attrs: g, componentId: f }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(G) {
    this._foldedDefaultProps = n ? io({}, e.defaultProps, G) : G;
  } }), process.env.NODE_ENV !== "production" && (oo(d, u), v.warnTooManyClasses = function(G, N) {
    var T = {}, f = !1;
    return function(y) {
      if (!f && (T[y] = !0, Object.keys(T).length >= 200)) {
        var x = N ? ' with the id of "' + N + '"' : "";
        console.warn("Over 200 classes were generated for component " + G + x + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, T = {};
      }
    };
  }(d, u)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && Uo(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var pn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = tt), !Ot.isValidElementType(n))
      return Xe(1, String(n));
    var s = function() {
      return t(n, o, dt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Fe({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Fe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(ao, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  pn[e] = pn(e);
});
var Es = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = qr(t), Ut.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(ct(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && Ut.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function _s(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = dt.apply(void 0, [e].concat(t)), s = "sc-global-" + Nn(JSON.stringify(o)), i = new Es(o, s);
  function c(a) {
    var d = to(), u = no(), g = nt(wt), S = fe(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && at.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(S, a, d, g, u), qt(function() {
      if (!d.server)
        return l(S, a, d, g, u), function() {
          return i.removeStyles(S, d);
        };
    }, [S, a, d, g, u]), null;
  }
  function l(a, d, u, g, S) {
    if (i.isStatic)
      i.renderStyles(a, Jo, u, S);
    else {
      var v = Fe({}, d, { theme: so(d, g, c.defaultProps) });
      i.renderStyles(a, v, u, S);
    }
  }
  return process.env.NODE_ENV !== "production" && oo(s), at.memo(c);
}
function We(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = dt.apply(void 0, [e].concat(t)).join(""), s = Nn(o);
  return new ro(s, o);
}
var Qt = function() {
  return nt(wt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const b = pn, At = "reactSchedulerOutsideWrapper", ze = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Ts = _s`

  #${At} {
    font-family: ${ze};
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
`, As = {
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
}, Ps = {
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
}, kt = `
margin: 0;
padding: 0;
`, $t = `
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
const _e = 50, Ke = 24, Dt = 16, it = 40, St = it + Dt + Ke, Ct = 84, ye = 56, Re = 196, Be = 12, Ie = 50, Mt = 24, It = 16, mn = 40, Os = Mt + It + mn, cr = 24, lr = 52, He = {
  topRow: `600 14px ${ze}`,
  middleRow: `400 10px ${ze}`,
  bottomRow: {
    name: `600 14px ${ze}`,
    number: `600 10px ${ze}`,
    hoursInDay: `400 9px ${ze}`
  }
}, vt = 3, Is = 1.6, Ys = 4.5, gn = 12, Kt = 24, Rs = "reactSchedulerCanvasHeaderWrapper", co = "reactSchedulerCanvasWrapper", Ue = At, Ls = 4, Bn = 48, et = 5, Ns = 40, dr = 8, zn = Ke / 2 + 2, lo = Dt / 2 + Ke + 1, ur = 2, Ae = 60, Le = 21, uo = 58, fo = "reactSchedulerBody";
var lt = {}, Bs = {
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
  })(Oe, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", u = "month", g = "quarter", S = "year", v = "date", k = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, G = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var C = ["th", "st", "nd", "rd"], P = O % 100;
      return "[" + O + (C[(P - 20) % 10] || C[P] || C[0]) + "]";
    } }, N = function(O, C, P) {
      var B = String(O);
      return !B || B.length >= C ? O : "" + Array(C + 1 - B.length).join(P) + O;
    }, T = { s: N, z: function(O) {
      var C = -O.utcOffset(), P = Math.abs(C), B = Math.floor(P / 60), I = P % 60;
      return (C <= 0 ? "+" : "-") + N(B, 2, "0") + ":" + N(I, 2, "0");
    }, m: function O(C, P) {
      if (C.date() < P.date())
        return -O(P, C);
      var B = 12 * (P.year() - C.year()) + (P.month() - C.month()), I = C.clone().add(B, u), V = P - I < 0, U = C.clone().add(B + (V ? -1 : 1), u);
      return +(-(B + (P - I) / (V ? I - U : U - I)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: u, y: S, w: d, d: a, D: v, h: l, m: c, s: i, ms: s, Q: g }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, f = "en", y = {};
    y[f] = G;
    var x = function(O) {
      return O instanceof H;
    }, D = function O(C, P, B) {
      var I;
      if (!C)
        return f;
      if (typeof C == "string") {
        var V = C.toLowerCase();
        y[V] && (I = V), P && (y[V] = P, I = V);
        var U = C.split("-");
        if (!I && U.length > 1)
          return O(U[0]);
      } else {
        var ee = C.name;
        y[ee] = C, I = ee;
      }
      return !B && I && (f = I), I || !B && f;
    }, w = function(O, C) {
      if (x(O))
        return O.clone();
      var P = typeof C == "object" ? C : {};
      return P.date = O, P.args = arguments, new H(P);
    }, $ = T;
    $.l = D, $.i = x, $.w = function(O, C) {
      return w(O, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var H = function() {
      function O(P) {
        this.$L = D(P.locale, null, !0), this.parse(P);
      }
      var C = O.prototype;
      return C.parse = function(P) {
        this.$d = function(B) {
          var I = B.date, V = B.utc;
          if (I === null)
            return new Date(NaN);
          if ($.u(I))
            return new Date();
          if (I instanceof Date)
            return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var U = I.match(p);
            if (U) {
              var ee = U[2] - 1 || 0, re = (U[7] || "0").substring(0, 3);
              return V ? new Date(Date.UTC(U[1], ee, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, re)) : new Date(U[1], ee, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, re);
            }
          }
          return new Date(I);
        }(P), this.$x = P.x || {}, this.init();
      }, C.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, C.$utils = function() {
        return $;
      }, C.isValid = function() {
        return this.$d.toString() !== k;
      }, C.isSame = function(P, B) {
        var I = w(P);
        return this.startOf(B) <= I && I <= this.endOf(B);
      }, C.isAfter = function(P, B) {
        return w(P) < this.startOf(B);
      }, C.isBefore = function(P, B) {
        return this.endOf(B) < w(P);
      }, C.$g = function(P, B, I) {
        return $.u(P) ? this[B] : this.set(I, P);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(P, B) {
        var I = this, V = !!$.u(B) || B, U = $.p(P), ee = function(_, Q) {
          var z = $.w(I.$u ? Date.UTC(I.$y, Q, _) : new Date(I.$y, Q, _), I);
          return V ? z : z.endOf(a);
        }, re = function(_, Q) {
          return $.w(I.toDate()[_].apply(I.toDate("s"), (V ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), I);
        }, R = this.$W, F = this.$M, K = this.$D, ne = "set" + (this.$u ? "UTC" : "");
        switch (U) {
          case S:
            return V ? ee(1, 0) : ee(31, 11);
          case u:
            return V ? ee(1, F) : ee(0, F + 1);
          case d:
            var M = this.$locale().weekStart || 0, j = (R < M ? R + 7 : R) - M;
            return ee(V ? K - j : K + (6 - j), F);
          case a:
          case v:
            return re(ne + "Hours", 0);
          case l:
            return re(ne + "Minutes", 1);
          case c:
            return re(ne + "Seconds", 2);
          case i:
            return re(ne + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, C.endOf = function(P) {
        return this.startOf(P, !1);
      }, C.$set = function(P, B) {
        var I, V = $.p(P), U = "set" + (this.$u ? "UTC" : ""), ee = (I = {}, I[a] = U + "Date", I[v] = U + "Date", I[u] = U + "Month", I[S] = U + "FullYear", I[l] = U + "Hours", I[c] = U + "Minutes", I[i] = U + "Seconds", I[s] = U + "Milliseconds", I)[V], re = V === a ? this.$D + (B - this.$W) : B;
        if (V === u || V === S) {
          var R = this.clone().set(v, 1);
          R.$d[ee](re), R.init(), this.$d = R.set(v, Math.min(this.$D, R.daysInMonth())).$d;
        } else
          ee && this.$d[ee](re);
        return this.init(), this;
      }, C.set = function(P, B) {
        return this.clone().$set(P, B);
      }, C.get = function(P) {
        return this[$.p(P)]();
      }, C.add = function(P, B) {
        var I, V = this;
        P = Number(P);
        var U = $.p(B), ee = function(F) {
          var K = w(V);
          return $.w(K.date(K.date() + Math.round(F * P)), V);
        };
        if (U === u)
          return this.set(u, this.$M + P);
        if (U === S)
          return this.set(S, this.$y + P);
        if (U === a)
          return ee(1);
        if (U === d)
          return ee(7);
        var re = (I = {}, I[c] = n, I[l] = o, I[i] = t, I)[U] || 1, R = this.$d.getTime() + P * re;
        return $.w(R, this);
      }, C.subtract = function(P, B) {
        return this.add(-1 * P, B);
      }, C.format = function(P) {
        var B = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || k;
        var V = P || "YYYY-MM-DDTHH:mm:ssZ", U = $.z(this), ee = this.$H, re = this.$m, R = this.$M, F = I.weekdays, K = I.months, ne = function(Q, z, L, m) {
          return Q && (Q[z] || Q(B, V)) || L[z].slice(0, m);
        }, M = function(Q) {
          return $.s(ee % 12 || 12, Q, "0");
        }, j = I.meridiem || function(Q, z, L) {
          var m = Q < 12 ? "AM" : "PM";
          return L ? m.toLowerCase() : m;
        }, _ = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: R + 1, MM: $.s(R + 1, 2, "0"), MMM: ne(I.monthsShort, R, K, 3), MMMM: ne(K, R), D: this.$D, DD: $.s(this.$D, 2, "0"), d: String(this.$W), dd: ne(I.weekdaysMin, this.$W, F, 2), ddd: ne(I.weekdaysShort, this.$W, F, 3), dddd: F[this.$W], H: String(ee), HH: $.s(ee, 2, "0"), h: M(1), hh: M(2), a: j(ee, re, !0), A: j(ee, re, !1), m: String(re), mm: $.s(re, 2, "0"), s: String(this.$s), ss: $.s(this.$s, 2, "0"), SSS: $.s(this.$ms, 3, "0"), Z: U };
        return V.replace(Y, function(Q, z) {
          return z || _[Q] || U.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(P, B, I) {
        var V, U = $.p(B), ee = w(P), re = (ee.utcOffset() - this.utcOffset()) * n, R = this - ee, F = $.m(this, ee);
        return F = (V = {}, V[S] = F / 12, V[u] = F, V[g] = F / 3, V[d] = (R - re) / 6048e5, V[a] = (R - re) / 864e5, V[l] = R / o, V[c] = R / n, V[i] = R / t, V)[U] || R, I ? F : $.a(F);
      }, C.daysInMonth = function() {
        return this.endOf(u).$D;
      }, C.$locale = function() {
        return y[this.$L];
      }, C.locale = function(P, B) {
        if (!P)
          return this.$L;
        var I = this.clone(), V = D(P, B, !0);
        return V && (I.$L = V), I;
      }, C.clone = function() {
        return $.w(this.$d, this);
      }, C.toDate = function() {
        return new Date(this.valueOf());
      }, C.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, C.toISOString = function() {
        return this.$d.toISOString();
      }, C.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), q = H.prototype;
    return w.prototype = q, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", u], ["$y", S], ["$D", v]].forEach(function(O) {
      q[O[1]] = function(C) {
        return this.$g(C, O[0], O[1]);
      };
    }), w.extend = function(O, C) {
      return O.$i || (O(C, H, w), O.$i = !0), w;
    }, w.locale = D, w.isDayjs = x, w.unix = function(O) {
      return w(1e3 * O);
    }, w.en = y[f], w.Ls = y, w.p = {}, w;
  });
})(Bs);
const A = lt, fr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Fn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, ho = (e, r) => A(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), po = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Fn(e),
  isCurrentDay: e.isSame(A(), "day"),
  year: parseInt(e.format("YYYY"))
});
let Ht = null;
const zs = (e) => {
  if (Ht)
    return Ht;
  const r = document.createElement("canvas");
  r.width = 12, r.height = 12;
  const t = r.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Ht = e.createPattern(r, "repeat"), Ht) : null;
}, Hn = (e, r, t, n, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ye), c && !s) {
    const l = zs(e);
    l && (e.fillStyle = l, e.fillRect(r, t, n, ye));
  }
  e.strokeRect(r + 0.5, t + 0.5, n, ye);
}, Wn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Le;
}, Fs = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Wn(i, s);
    for (let l = 0; l <= t; l++) {
      const a = A(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), d = a.isSame(A(), "day"), u = a.isBefore(A(), "day");
      Hn(
        e,
        l * _e,
        i * ye + c,
        _e,
        Fn(a),
        d,
        o,
        u
      );
    }
  }
}, Hs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Ws = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Be;
  const l = r * ye + s.length * Le;
  for (let a = 0; a <= t; a++) {
    const u = A(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(A(), "week");
    for (let g = 0; g < r; g++) {
      const S = Wn(g, s);
      Hn(e, i, g * ye + S, Ct, !0, u, o);
    }
    i += Ct;
  }
  for (let a = 0; a < t; a++) {
    const d = ho(n, a) * Be;
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
        Fn(d),
        u,
        o
      );
    }
  }
}, Zs = (e, r, t, n, o = !1) => {
  const s = t * ye + r * Le, i = e.canvas.width;
  e.fillStyle = o ? n.colors.subcontractBorder + "40" : n.mode === "dark" ? n.colors.primary + "80" : n.colors.primary, e.fillRect(0, s, i, Le);
}, Vs = (e, r, t, n, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(co)) {
    switch (r) {
      case 0:
        Ws(e, t, n, o, s, i);
        break;
      case 1:
        Fs(e, t, n, o, s, i);
        break;
      case 2:
        js(e, t, n, o, s, i);
        break;
    }
    for (let a = 0; a < i.length; a++)
      Zs(e, a, i[a], s, i[a] === c);
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
  })(Oe, function() {
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
        var g = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), S = this.diff(g, t, !0);
        return S < 0 ? i(this).startOf("week").week() : Math.ceil(S);
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
  })(Oe, function() {
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
  })(Oe, function() {
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
        var d, u, g, S, v = i(this), k = (d = this.isoWeekYear(), u = this.$u, g = (u ? s.utc : s)().year(d).startOf("year"), S = 4 - g.isoWeekday(), g.isoWeekday() > 4 && (S += 7), g.add(S, t));
        return v.diff(k, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, d) {
        var u = this.$utils(), g = !!u.u(d) || d;
        return u.p(a) === "isoweek" ? g ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, d);
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
  })(Oe, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), d = o(i), u = (l = l || "()")[0] === "(", g = l[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (g ? this.isBefore(d, c) : !this.isAfter(d, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (g ? this.isAfter(d, c) : !this.isBefore(d, c));
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
  })(Oe, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, S = function(f) {
      return f instanceof T;
    }, v = function(f, y, x) {
      return new T(f, x, y.$l);
    }, k = function(f) {
      return n.p(f) + "s";
    }, p = function(f) {
      return f < 0;
    }, Y = function(f) {
      return p(f) ? Math.ceil(f) : Math.floor(f);
    }, G = function(f) {
      return Math.abs(f);
    }, N = function(f, y) {
      return f ? p(f) ? { negative: !0, format: "" + G(f) + y } : { negative: !1, format: "" + f + y } : { negative: !1, format: "" };
    }, T = function() {
      function f(x, D, w) {
        var $ = this;
        if (this.$d = {}, this.$l = w, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), D)
          return v(x * g[k(D)], this);
        if (typeof x == "number")
          return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object")
          return Object.keys(x).forEach(function(O) {
            $.$d[k(O)] = x[O];
          }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var H = x.match(u);
          if (H) {
            var q = H.slice(2).map(function(O) {
              return O != null ? Number(O) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var y = f.prototype;
      return y.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(D, w) {
          return D + (x.$d[w] || 0) * g[w];
        }, 0);
      }, y.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = Y(x / a), x %= a, this.$d.months = Y(x / d), x %= d, this.$d.days = Y(x / c), x %= c, this.$d.hours = Y(x / i), x %= i, this.$d.minutes = Y(x / s), x %= s, this.$d.seconds = Y(x / o), x %= o, this.$d.milliseconds = x;
      }, y.toISOString = function() {
        var x = N(this.$d.years, "Y"), D = N(this.$d.months, "M"), w = +this.$d.days || 0;
        this.$d.weeks && (w += 7 * this.$d.weeks);
        var $ = N(w, "D"), H = N(this.$d.hours, "H"), q = N(this.$d.minutes, "M"), O = this.$d.seconds || 0;
        this.$d.milliseconds && (O += this.$d.milliseconds / 1e3);
        var C = N(O, "S"), P = x.negative || D.negative || $.negative || H.negative || q.negative || C.negative, B = H.format || q.format || C.format ? "T" : "", I = (P ? "-" : "") + "P" + x.format + D.format + $.format + B + H.format + q.format + C.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, y.toJSON = function() {
        return this.toISOString();
      }, y.format = function(x) {
        var D = x || "YYYY-MM-DDTHH:mm:ss", w = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return D.replace(l, function($, H) {
          return H || String(w[$]);
        });
      }, y.as = function(x) {
        return this.$ms / g[k(x)];
      }, y.get = function(x) {
        var D = this.$ms, w = k(x);
        return w === "milliseconds" ? D %= 1e3 : D = w === "weeks" ? Y(D / g[w]) : this.$d[w], D === 0 ? 0 : D;
      }, y.add = function(x, D, w) {
        var $;
        return $ = D ? x * g[k(D)] : S(x) ? x.$ms : v(x, this).$ms, v(this.$ms + $ * (w ? -1 : 1), this);
      }, y.subtract = function(x, D) {
        return this.add(x, D, !0);
      }, y.locale = function(x) {
        var D = this.clone();
        return D.$l = x, D;
      }, y.clone = function() {
        return v(this.$ms, this);
      }, y.humanize = function(x) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
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
      }, f;
    }();
    return function(f, y, x) {
      t = x, n = x().$utils(), x.duration = function($, H) {
        var q = x.locale();
        return v($, { $l: q }, H);
      }, x.isDuration = S;
      var D = y.prototype.add, w = y.prototype.subtract;
      y.prototype.add = function($, H) {
        return S($) && ($ = $.asMilliseconds()), D.bind(this)($, H);
      }, y.prototype.subtract = function($, H) {
        return S($) && ($ = $.asMilliseconds()), w.bind(this)($, H);
      };
    };
  });
})(ti);
const ni = wn;
var ri = "Expected a function", hr = 0 / 0, oi = "[object Symbol]", si = /^\s+|\s+$/g, ii = /^[-+]0x[0-9a-f]+$/i, ai = /^0b[01]+$/i, ci = /^0o[0-7]+$/i, li = parseInt, di = typeof Oe == "object" && Oe && Oe.Object === Object && Oe, ui = typeof self == "object" && self && self.Object === Object && self, fi = di || ui || Function("return this")(), hi = Object.prototype, pi = hi.toString, mi = Math.max, gi = Math.min, rn = function() {
  return fi.Date.now();
};
function yi(e, r, t) {
  var n, o, s, i, c, l, a = 0, d = !1, u = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ri);
  r = pr(r) || 0, Sn(t) && (d = !!t.leading, u = "maxWait" in t, s = u ? mi(pr(t.maxWait) || 0, r) : s, g = "trailing" in t ? !!t.trailing : g);
  function S(y) {
    var x = n, D = o;
    return n = o = void 0, a = y, i = e.apply(D, x), i;
  }
  function v(y) {
    return a = y, c = setTimeout(Y, r), d ? S(y) : i;
  }
  function k(y) {
    var x = y - l, D = y - a, w = r - x;
    return u ? gi(w, s - D) : w;
  }
  function p(y) {
    var x = y - l, D = y - a;
    return l === void 0 || x >= r || x < 0 || u && D >= s;
  }
  function Y() {
    var y = rn();
    if (p(y))
      return G(y);
    c = setTimeout(Y, k(y));
  }
  function G(y) {
    return c = void 0, g && n ? S(y) : (n = o = void 0, i);
  }
  function N() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function T() {
    return c === void 0 ? i : G(rn());
  }
  function f() {
    var y = rn(), x = p(y);
    if (n = arguments, o = this, l = y, x) {
      if (c === void 0)
        return v(l);
      if (u)
        return c = setTimeout(Y, r), S(l);
    }
    return c === void 0 && (c = setTimeout(Y, r)), i;
  }
  return f.cancel = N, f.flush = T, f;
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
const Zt = [0, 1, 2];
var Yt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Yt || {});
const mo = (e) => Zt.includes(e), gt = (e) => {
  var n;
  const t = (((n = document.getElementById(Ue)) == null ? void 0 : n.clientWidth) || 0) - Re;
  switch (e) {
    case 1:
      return Math.ceil(t / _e) * vt;
    case 2:
      return Math.ceil(t / Ie) * vt;
    default:
      return Math.ceil(t / Ct) * vt;
  }
}, bi = (e) => gt(e) / vt, en = (e, r) => {
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
  return ((((t = document.getElementById(Ue)) == null ? void 0 : t.clientWidth) || 0) - Re) * vt;
}, go = Vr({
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
  const { zoom: a, maxRecordsPerPage: d = 50 } = n, [u, g] = he(a), [S, v] = he(A()), [k, p] = he(null), [Y, G] = he(!1), [N, T] = he(gt(u)), f = Zt[u] !== Zt[Zt.length - 1], y = u !== 0, x = De(() => wi(S, u), [S, u]), D = en(S, u).startDate, w = A(D).dayOfYear(), $ = po(D), H = fe(null), q = fe(!1), O = fe(null), [C, P] = he([{ x: 0, y: 0 }]), B = de(
    (z, L = "auto") => {
      var X, E, Z, te;
      const m = jn();
      switch (z) {
        case "back":
          return (X = H.current) == null ? void 0 : X.scrollTo({
            behavior: L,
            left: m / 3
          });
        case "forward":
          return (E = H.current) == null ? void 0 : E.scrollTo({
            behavior: L,
            left: m / 3
          });
        case "middle": {
          const J = m / vt / 4;
          return (Z = H.current) == null ? void 0 : Z.scrollTo({
            behavior: L,
            left: m / 2 - J
          });
        }
        default:
          return (te = H.current) == null ? void 0 : te.scrollTo({
            behavior: L,
            left: m / 2
          });
      }
    },
    []
  ), I = (z) => {
    P(z);
  }, V = de(
    (z) => {
      const L = bi(u);
      let m;
      switch (u) {
        case 0:
          m = L * 7;
          break;
        case 1:
          m = L;
          break;
        case 2:
          m = Math.ceil(L / Kt);
          break;
      }
      Cn(() => {
        switch ((z === "forward" || z === "back") && (q.current = !0), O.current = z, z) {
          case "back":
            v((E) => E.subtract(m, "days"));
            break;
          case "forward":
            v((E) => E.add(m, "days"));
            break;
          case "middle":
            v(A());
            break;
        }
        s == null || s(x);
      }, 300)();
    },
    [s, x, u]
  );
  xe(() => {
    O.current && (B(O.current), O.current = null);
  }, [S, B]), xe(() => {
    H.current = document.getElementById(Ue), T(gt(u));
  }, [u]), xe(() => {
    const z = () => T(gt(u));
    return window.addEventListener("resize", z), () => window.removeEventListener("resize", z);
  }, [u]), xe(() => {
    s == null || s(x);
  }, [s, x]), xe(() => {
    G(!1);
  }, [o]), xe(() => {
    Y || (B("middle"), G(!0), v(o));
  }, [o, Y, B]);
  const U = () => {
    t || (v(
      (z) => u === 2 ? z.add(cr, "hours") : z.add(ur, "weeks")
    ), s == null || s(x));
  }, ee = de(() => {
    t || V("forward");
  }, [t, V]), re = () => {
    t || (v(
      (z) => u === 2 ? z.subtract(cr, "hours") : z.subtract(ur, "weeks")
    ), s == null || s(x));
  }, R = de(() => {
    !Y || t || V("back");
  }, [Y, t, V]), F = de(() => {
    t || (O.current = "middle", v(A()), p(null), s == null || s(x));
  }, [t, s, x]), K = de(
    (z) => {
      if (t)
        return;
      const L = A(z).startOf("day");
      L.isValid() && (O.current = "middle", v(L), p(L), s == null || s(x));
    },
    [t, s, x]
  ), ne = () => j(u + 1), M = () => j(u - 1), j = (z) => {
    mo(z) && (g(z), T(gt(z)), s == null || s(x));
  }, _ = () => i == null ? void 0 : i(), { Provider: Q } = go;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: U,
        handleScrollNext: ee,
        handleGoPrev: re,
        handleScrollPrev: R,
        handleGoToday: F,
        goToDate: K,
        zoomIn: ne,
        zoomOut: M,
        setZoom: j,
        zoom: u,
        isNextZoom: f,
        isPrevZoom: y,
        date: S,
        jumpDate: k,
        isLoading: t,
        cols: N,
        startDate: $,
        dayOfYear: w,
        toggleDisplayActiveUnits: _,
        tilesCoords: C,
        updateTilesCoords: I,
        recordsThreshold: d,
        onClearFilterData: c,
        suppressNextSlideRef: q,
        toolbarActions: l
      },
      children: r
    }
  );
}, je = () => nt(go), yo = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, vo = () => {
  var e;
  return typeof window < "u" && !!((e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches);
}, xo = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ye + n * Le;
    if (e >= s + Le)
      n++;
    else if (e >= s)
      return o * ye + n * Le - n * Le;
  }
  return t - n * Le;
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
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((j) => ({ ...j, data: [j.data] })) : r : e, {
    enabled: d = !0,
    isDraggable: u,
    resourceOnly: g = !1,
    isValidDrop: S
  } = i, [v, k] = he("idle"), [p, Y] = he(null), [G, N] = he({ x: 0, y: 0 }), [T, f] = he({ width: 0, height: 48 }), [y, x] = he(null), [D, w] = he(!0), $ = fe({ x: 0, y: 0 }), H = fe({ x: 0, y: 0 }), q = fe({ x: 0, y: 0 }), O = fe(null), C = fe(null), P = fe(0), B = fe(null), I = de(
    (j) => !d || j.draggable === !1 ? !1 : u ? u(j) : !0,
    [d, u]
  ), V = de(
    (j, _) => {
      const Q = xo(_, l), z = Math.floor(Q / ye);
      let L;
      switch (t) {
        case 0:
          L = Be * 7;
          break;
        case 1:
          L = _e;
          break;
        case 2:
          L = Ie;
          break;
        default:
          L = _e;
      }
      const m = Math.floor(j / L);
      let X;
      const E = A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          X = E.add(m * 7, "days").toDate();
          break;
        case 1:
          X = E.add(m, "days").toDate();
          break;
        case 2:
          X = E.add(m, "hours").toDate();
          break;
        default:
          X = E.toDate();
      }
      return { snappedDate: X, snappedResourceIndex: z };
    },
    [t, n, l]
  ), U = de(
    (j, _, Q, z) => {
      const L = [], m = _.getTime(), X = Q.getTime(), E = a.find((te) => te.id === z);
      if (!E)
        return L;
      const Z = [];
      for (const te of E.data)
        Array.isArray(te) ? Z.push(...te) : Z.push(te);
      for (const te of Z) {
        if (te.segmentId === j.segmentId)
          continue;
        const J = te.startDate.getTime(), ae = te.endDate.getTime();
        if (m >= J && m < ae || X > J && X <= ae || m <= J && X >= ae) {
          const ue = new Date(Math.max(m, J)), be = new Date(Math.min(X, ae)), Ee = be.getTime() - ue.getTime();
          L.push({
            event: te,
            conflictStart: ue,
            conflictEnd: be,
            overlapDuration: Ee
          });
        }
      }
      return L;
    },
    [a]
  ), ee = de(
    (j, _, Q, z) => {
      const L = [], m = _.getTime(), X = Q.getTime(), E = A(_).format("YYYY-MM-DD"), Z = a.find((J) => J.id === z);
      if (!Z)
        return L;
      const te = [];
      for (const J of Z.data)
        Array.isArray(J) ? te.push(...J) : te.push(J);
      for (const J of te) {
        if (J.segmentId === j.segmentId)
          continue;
        const ae = J.startDate.getTime(), ge = J.endDate.getTime(), ue = A(J.startDate).format("YYYY-MM-DD"), be = A(J.endDate).format("YYYY-MM-DD"), Ee = A(Q).format("YYYY-MM-DD");
        if (!(ue === E || be === E || ue === Ee || be === Ee || A(J.startDate).isBefore(_, "day") && A(J.endDate).isAfter(Q, "day")) || m >= ae && m < ge || X > ae && X <= ge || m <= ae && X >= ge)
          continue;
        let me, Te;
        ge <= m ? (me = m - ge, Te = "before") : (me = ae - X, Te = "after"), L.push({
          event: J,
          timeGap: me,
          position: Te
        });
      }
      return L.sort((J, ae) => J.timeGap - ae.timeGap);
    },
    [a]
  ), re = de(
    (j, _, Q) => {
      const z = V(_, Q);
      let L, m;
      if (g)
        L = j.startDate, m = j.endDate;
      else {
        const ge = A(j.endDate).diff(j.startDate);
        L = z.snappedDate, m = A(L).add(ge, "milliseconds").toDate();
      }
      let X = 0, E = "", Z;
      for (const ge of e) {
        const ue = Math.max(ge.data.length, 1);
        if (z.snappedResourceIndex < X + ue) {
          E = ge.id, Z = ge.capacity;
          break;
        }
        X += ue;
      }
      if (!E)
        return null;
      let te = !0;
      Z !== void 0 && j.totalPassengers !== void 0 && (te = j.totalPassengers <= Z);
      const J = U(j, L, m, E), ae = J.length === 0 ? ee(j, L, m, E) : [];
      return {
        startDate: L,
        endDate: m,
        resourceId: E,
        resourceIndex: z.snappedResourceIndex,
        resourceCapacity: Z,
        hasCapacity: te,
        conflicts: J,
        hasConflict: J.length > 0,
        nearbyEvents: ae
      };
    },
    [V, e, g, U, ee]
  ), R = de(
    (j, _) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - P.current < 100)
        return;
      P.current = Q;
      const z = {
        event: j,
        currentStartDate: _.startDate,
        currentEndDate: _.endDate,
        currentResourceId: _.resourceId,
        conflicts: _.conflicts
      };
      s(z);
    },
    [s]
  ), F = de(
    (j, _) => {
      if (!I(j) || !c.current)
        return;
      _.preventDefault(), _.stopPropagation();
      const Q = _.target.closest('[style*="left"]');
      let z = 0, L = 0;
      Q && Q.style.left && Q.style.top && (z = parseInt(Q.style.left), L = parseInt(Q.style.top));
      const m = yt(
        _.clientX,
        _.clientY,
        c.current
      );
      $.current = { x: z, y: L }, H.current = { x: _.clientX, y: _.clientY }, q.current = {
        x: m.x - z,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, B.current = {
        startDate: j.startDate,
        endDate: j.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const Z of e) {
        for (const te of Z.data)
          if (te.some((J) => J.segmentId === j.segmentId)) {
            B.current.resourceId = Z.id;
            break;
          }
        if (B.current.resourceId)
          break;
      }
      Y(j), k("potential"), N({ x: z, y: L });
      let X = 100, E = 48;
      if (Q) {
        const Z = Q.getBoundingClientRect();
        X = Z.width, E = Z.height;
      }
      f({ width: X, height: E });
    },
    [I, c, e, t]
  ), K = de(
    (j) => {
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
      const Q = _.getBoundingClientRect(), z = j.clientY, L = 50, m = 12, X = z - Q.top, E = Q.bottom - z;
      let Z = !1, te = 0;
      X < L && X > 0 ? (Z = !0, te = -m * (1 - X / L)) : E < L && E > 0 && (Z = !0, te = m * (1 - E / L)), Z ? (C.current && cancelAnimationFrame(C.current), C.current = requestAnimationFrame(() => {
        _.scrollTop += te, v === "dragging" && K(j);
      })) : C.current && (cancelAnimationFrame(C.current), C.current = null);
    },
    [c, v]
  ), ne = de(
    (j) => {
      if (v === "idle" || v === "animating" || !p || !c.current)
        return;
      const _ = { x: j.clientX, y: j.clientY };
      if (v === "potential")
        if (mr(H.current, _))
          k("dragging");
        else
          return;
      K(j);
      const Q = yt(
        j.clientX,
        j.clientY,
        c.current
      );
      O.current && cancelAnimationFrame(O.current), O.current = requestAnimationFrame(() => {
        const z = {
          x: Q.x - q.current.x,
          y: Q.y - q.current.y
        };
        N(z);
        const L = re(p, Q.x, Q.y);
        if (L && S) {
          const m = {
            event: p,
            currentStartDate: L.startDate,
            currentEndDate: L.endDate,
            currentResourceId: L.resourceId,
            conflicts: L.conflicts
          };
          L.hasConflict = !S(m);
        }
        if (x(L), L) {
          const m = L.hasCapacity !== !1;
          w(m), R(p, L);
        }
      });
    },
    [v, p, c, re, R, S, K]
  ), M = de(
    async (j) => {
      if (v === "idle" || v === "animating")
        return;
      const _ = { x: j.clientX, y: j.clientY };
      if (!mr(H.current, _) || v === "potential") {
        k("idle"), Y(null), x(null);
        return;
      }
      if (!p || !y || !B.current) {
        k("idle"), Y(null), x(null);
        return;
      }
      if (y.hasCapacity === !1) {
        w(!1), k("animating"), N($.current), setTimeout(() => {
          k("idle"), Y(null), x(null), w(!0);
        }, 300);
        return;
      }
      const z = {
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
      let L = !0;
      if (o)
        try {
          const m = o(z);
          L = m instanceof Promise ? await m : m;
        } catch {
          L = !1;
        }
      L ? (w(!0), k("idle"), Y(null), x(null)) : (w(!1), k("animating"), N($.current), setTimeout(() => {
        k("idle"), Y(null), x(null), w(!0);
      }, 300));
    },
    [v, p, y, o, S]
  );
  return xe(() => {
    if (v === "potential" || v === "dragging") {
      const j = (Q) => ne(Q), _ = (Q) => M(Q);
      return document.addEventListener("mousemove", j), document.addEventListener("mouseup", _), () => {
        document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", _);
      };
    } else
      return () => {
      };
  }, [v, ne, M]), xe(() => () => {
    O.current && (cancelAnimationFrame(O.current), O.current = null), C.current && (cancelAnimationFrame(C.current), C.current = null);
  }, []), xe(() => {
    (v === "idle" || v === "animating") && (O.current && (cancelAnimationFrame(O.current), O.current = null), C.current && (cancelAnimationFrame(C.current), C.current = null));
  }, [v]), xe(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (k("animating"), N($.current), setTimeout(() => {
      k("idle"), Y(null), x(null);
    }, 300)) : (k("idle"), Y(null), x(null)));
  }, [t]), xe(() => {
    if ((v === "dragging" || v === "potential") && p) {
      let j = !1;
      for (const _ of e) {
        for (const Q of _.data)
          if (Q.some((z) => z.segmentId === p.segmentId)) {
            j = !0;
            break;
          }
        if (j)
          break;
      }
      j || (v === "dragging" ? (k("animating"), N($.current), setTimeout(() => {
        k("idle"), Y(null), x(null);
      }, 300)) : (k("idle"), Y(null), x(null)));
    }
  }, [e, v, p]), {
    dragState: v,
    draggedEvent: p,
    ghostPosition: G,
    ghostDimensions: T,
    dropTarget: y,
    isValidDrop: D,
    handleDragStart: F,
    isDraggable: I,
    draggingEventId: (p == null ? void 0 : p.segmentId) || null,
    resourceOnly: g
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
  const { enabled: d = !1, isSelectable: u } = i, g = d && !!o, S = de((m) => {
    let X = 0;
    for (const E of a)
      E <= m && X++;
    return m * ye + X * Le;
  }, [a]), [v, k] = he("idle"), [p, Y] = he(null), [G, N] = he(null), [T, f] = he(null), [y, x] = he(!1), [D, w] = he([]), [$, H] = he(!1), q = fe(null), O = fe(null), C = fe(null), P = fe(null), B = de(() => {
    switch (t) {
      case 0:
        return Be * 7;
      case 1:
        return _e;
      case 2:
        return Ie;
      default:
        return _e;
    }
  }, [t]), I = de(
    (m) => {
      const X = B(), E = Math.floor(m / X), Z = A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
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
    [t, n, B]
  ), V = de(
    (m) => {
      const X = xo(m, a), E = Math.floor(X / ye);
      let Z = 0;
      for (const te of e) {
        const J = Math.max(te.data.length, 1);
        if (E < Z + J)
          return {
            resourceId: te.id,
            resourceIndex: E,
            resourceLabel: te.label
          };
        Z += J;
      }
      return null;
    },
    [e, a]
  ), U = de(
    (m) => {
      const X = B();
      return Math.floor(m / X) * X;
    },
    [B]
  ), ee = de(
    (m, X, E, Z = []) => {
      const te = [], ae = (r || e).find((be) => be.id === m), ge = X.getTime(), ue = E.getTime();
      if (ae) {
        const be = ae.data[0], Ee = be && Array.isArray(be) ? ae.data.flat() : ae.data;
        for (const we of Ee) {
          const se = new Date(we.startDate).getTime(), me = new Date(we.endDate).getTime();
          if (ge < me && ue > se) {
            const Te = new Date(Math.max(ge, se)), pe = new Date(Math.min(ue, me)), ve = pe.getTime() - Te.getTime();
            te.push({
              event: we,
              conflictStart: Te,
              conflictEnd: pe,
              overlapDuration: ve
            });
          }
        }
      }
      for (const be of Z) {
        if (be.resourceId !== m)
          continue;
        const Ee = be.startDate.getTime(), we = be.endDate.getTime();
        if (ge < we && ue > Ee) {
          const se = new Date(Math.max(ge, Ee)), me = new Date(Math.min(ue, we)), Te = me.getTime() - se.getTime(), pe = {
            segmentId: `pending-${be.startDate.getTime()}`,
            reservationId: `pending-${be.startDate.getTime()}`,
            startDate: be.startDate,
            endDate: be.endDate,
            occupancy: 0,
            title: `New Event (${be.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          te.push({
            event: pe,
            conflictStart: se,
            conflictEnd: me,
            overlapDuration: Te
          });
        }
      }
      return te;
    },
    [e, r]
  ), re = de(
    (m) => {
      if (!g || l || !c.current || m.button !== 0)
        return;
      const X = m.target;
      if (X.closest("[data-segment-id]") || X.closest("[data-multi-select-ui]"))
        return;
      const E = yt(m.clientX, m.clientY, c.current), Z = V(E.y);
      if (!Z)
        return;
      q.current = { x: m.clientX, y: m.clientY }, O.current = Z.resourceIndex;
      const te = U(E.x), J = B(), ae = S(Z.resourceIndex);
      Y(E), N(E), f({
        x: te,
        y: ae,
        width: J,
        height: ye
      }), k("selecting");
    },
    [g, l, c, V, U, B, S]
  ), R = de(
    (m) => {
      N(m);
      const X = B(), E = U((p == null ? void 0 : p.x) || 0), Z = U(m.x), te = S(O.current), J = Math.min(E, Z), ae = Math.max(E, Z) + X;
      f({ x: J, y: te, width: ae - J, height: ye });
    },
    [p, B, U, S]
  ), F = de(() => {
    P.current && (cancelAnimationFrame(P.current), P.current = null);
  }, []), K = de(
    (m, X) => {
      const E = document.getElementById(Ue);
      if (!E || !c.current)
        return;
      const Z = E.getBoundingClientRect(), te = 60, J = 12, ae = m - (Z.left + Re), ge = Z.right - m;
      let ue = 0;
      ae < te ? ue = -J * (1 - Math.max(0, ae) / te) : ge < te && (ue = J * (1 - Math.max(0, ge) / te)), F(), ue !== 0 && (P.current = requestAnimationFrame(() => {
        E.scrollLeft += ue, R(yt(m, X, c.current)), K(m, X);
      }));
    },
    [c, R, F]
  ), ne = de(
    (m) => {
      if (v !== "selecting" || !c.current || O.current === null)
        return;
      const X = yt(m.clientX, m.clientY, c.current);
      C.current && cancelAnimationFrame(C.current), C.current = requestAnimationFrame(() => R(X)), K(m.clientX, m.clientY);
    },
    [v, c, R, K]
  ), M = de(
    (m) => {
      if (v !== "selecting")
        return;
      if (F(), !c.current || !p || !q.current) {
        k("idle"), Y(null), N(null), f(null);
        return;
      }
      const X = yt(m.clientX, m.clientY, c.current), E = V(p.y);
      if (!E) {
        k("idle"), Y(null), N(null), f(null);
        return;
      }
      const Z = Math.min(p.x, X.x), te = Math.max(p.x, X.x), J = I(Z), ae = I(te), ge = A(ae).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (u && !u(E.resourceId, J, ge)) {
        k("idle"), Y(null), N(null), f(null);
        return;
      }
      const ue = ee(
        E.resourceId,
        J,
        ge,
        D
      ), be = ue.length > 0, Ee = {
        startDate: J,
        endDate: ge,
        resourceId: E.resourceId,
        resourceLabel: E.resourceLabel,
        zoomLevel: t,
        hasConflict: be,
        conflicts: be ? ue : void 0
      };
      if (y)
        w((we) => [...we, Ee]), H(!0);
      else if (o) {
        const we = o(Ee), se = (me) => {
          me != null && me.continueMultiSelect && (x(!0), w([Ee]), H(!0));
        };
        we instanceof Promise ? we.then(se) : se(we);
      }
      k("idle"), Y(null), N(null), f(null), q.current = null, O.current = null;
    },
    [
      v,
      c,
      p,
      V,
      I,
      u,
      o,
      t,
      y,
      ee,
      D,
      F
    ]
  ), j = de(() => {
    if (D.length > 0 && s) {
      H(!1);
      const m = s(D), X = (E) => {
        E != null && E.continueMultiSelect ? H(!0) : (w([]), x(!1), H(!1));
      };
      m instanceof Promise ? m.then(X) : X(m);
      return;
    }
    w([]), x(!1), H(!1);
  }, [D, s]), _ = de(() => {
    w([]), x(!1), H(!1);
  }, []), Q = de((m) => {
    w((X) => {
      const E = X.filter((Z, te) => te !== m);
      return E.length === 0 && (x(!1), H(!1)), E;
    });
  }, []), z = de(
    (m, X) => {
      w((E) => E.map((Z, te) => {
        if (te !== m)
          return Z;
        const J = { ...Z, ...X }, ae = E.filter((ue, be) => be !== m), ge = ee(
          J.resourceId,
          J.startDate,
          J.endDate,
          ae
        );
        return {
          ...J,
          hasConflict: ge.length > 0,
          conflicts: ge.length > 0 ? ge : void 0
        };
      }));
    },
    [ee]
  ), L = de(
    (m) => {
      m.key === "Escape" && (v === "selecting" ? (F(), k("idle"), Y(null), N(null), f(null), q.current = null, O.current = null) : y && D.length > 0 && (w([]), x(!1), H(!1)));
    },
    [v, y, D.length, F]
  );
  return xe(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", ne), document.addEventListener("mouseup", M), document.addEventListener("keydown", L), () => {
        document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", M), document.removeEventListener("keydown", L);
      };
  }, [v, ne, M, L]), xe(() => {
    if (y && D.length > 0)
      return document.addEventListener("keydown", L), () => {
        document.removeEventListener("keydown", L);
      };
  }, [y, D.length, L]), xe(() => () => {
    C.current && (cancelAnimationFrame(C.current), C.current = null), F();
  }, [F]), xe(() => {
    l && v === "selecting" && (F(), k("idle"), Y(null), N(null), f(null), q.current = null, O.current = null);
  }, [l, v, F]), {
    selectionState: v,
    selectionStart: p,
    selectionEnd: G,
    selectionBox: T,
    handleGridMouseDown: re,
    isEnabled: g,
    pendingSelections: D,
    confirmSelections: j,
    clearSelections: _,
    removeSelection: Q,
    updateSelection: z,
    isMultiSelectActive: y,
    hasUnconfirmedSelections: $
  };
}, $i = b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, Di = b.div`
  position: relative;
`, Ei = b.canvas``;
b.canvas``;
const _i = b.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, gr = b.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Ti = On(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: l, onDragStateChange: a, onTimeRangeSelect: d, onMultiTimeRangeSelect: u, clickToAddConfig: g, separatorRowIndices: S = [], subcontractSeparatorRow: v = -1, fadingUnitIds: k }, p) {
  const Y = fe(!1), { handleScrollNext: G, handleScrollPrev: N, date: T, isLoading: f, cols: y, startDate: x, suppressNextSlideRef: D } = je(), w = fe(null), $ = fe(null), H = fe(t), q = fe(T), O = fe(null), C = fe(null), P = fe(null), B = fe(null), [I, V] = he(!1), U = Qt(), {
    dragState: ee,
    draggedEvent: re,
    ghostPosition: R,
    ghostDimensions: F,
    dropTarget: K,
    isValidDrop: ne,
    handleDragStart: M,
    isDraggable: j,
    draggingEventId: _,
    resourceOnly: Q
  } = Mi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: x,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: l,
    gridRef: B,
    separatorRowIndices: S
  });
  xe(() => {
    const pe = ee === "dragging" || ee === "potential";
    V(pe), a && a(pe);
  }, [ee, a]);
  const z = fe(!1), L = fe(T), m = fe(null);
  xe(() => {
    var $e;
    const pe = L.current;
    if (L.current = T, !z.current) {
      z.current = !0;
      return;
    }
    if (D != null && D.current) {
      D.current = !1;
      return;
    }
    const ve = B.current;
    if (!(ve != null && ve.animate))
      return;
    const ce = T.isAfter(pe) ? 48 : -48;
    ($e = m.current) == null || $e.cancel(), ve.style.willChange = "transform";
    const le = ve.animate(
      [
        { transform: `translateX(${ce}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), ie = () => {
      ve.style.willChange = "";
    };
    le.onfinish = ie, le.oncancel = ie, m.current = le;
  }, [T, D]);
  const {
    selectionState: X,
    selectionBox: E,
    handleGridMouseDown: Z,
    pendingSelections: te,
    confirmSelections: J,
    clearSelections: ae,
    removeSelection: ge,
    updateSelection: ue,
    isMultiSelectActive: be,
    hasUnconfirmedSelections: Ee
  } = ki({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: x,
    onTimeRangeSelect: d,
    onMultiTimeRangeSelect: u,
    clickToAddConfig: g,
    gridRef: B,
    isDragging: I,
    separatorRowIndices: S
  }), we = de((pe) => {
    pe.preventDefault();
  }, []), se = de((pe) => {
    pe.preventDefault();
  }, []), me = S.length * Le, Te = de(
    (pe) => {
      const ve = jn(), ce = t * ye + 1 + me;
      yo(pe, ve, ce), Vs(pe, r, t, y, x, U, S, v);
    },
    [y, x, t, r, U, S, v, me]
  );
  return xe(() => {
    if (!w.current)
      return;
    const pe = w.current.getContext("2d");
    if (!pe)
      return;
    const ve = () => Te(pe);
    return window.addEventListener("resize", ve), () => window.removeEventListener("resize", ve);
  }, [Te]), xe(() => {
    var Ne;
    const pe = H.current, ve = q.current;
    if (H.current = t, q.current = T, pe === t || !T.isSame(ve, "day") || vo())
      return;
    const ce = w.current, le = $.current;
    if (!ce || !le)
      return;
    const ie = le.getContext("2d");
    if (!ie)
      return;
    le.width = ce.width, le.height = ce.height, le.style.width = ce.style.width, le.style.height = ce.style.height, ie.setTransform(1, 0, 0, 1, 0, 0), ie.clearRect(0, 0, le.width, le.height), ie.drawImage(ce, 0, 0), (Ne = O.current) == null || Ne.cancel(), le.style.opacity = "1";
    const $e = le.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    $e.onfinish = () => {
      le.style.opacity = "0";
    }, O.current = $e;
  }, [t, T]), xe(() => {
    const pe = w.current;
    if (!pe)
      return;
    pe.style.letterSpacing = "1px";
    const ve = pe.getContext("2d");
    ve && Te(ve);
  }, [T, t, r, Te]), xe(() => {
    if (!C.current)
      return;
    const pe = new IntersectionObserver(
      (ve) => {
        ve[0].isIntersecting && !Y.current && (Y.current = !0, G(), setTimeout(() => {
          Y.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Ue) }
    );
    return pe.observe(C.current), () => {
      pe.disconnect();
    };
  }, [G]), xe(() => {
    if (!P.current)
      return;
    const pe = new IntersectionObserver(
      (ve) => {
        ve[0].isIntersecting && !Y.current && (Y.current = !0, N(), setTimeout(() => {
          Y.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Ue),
        rootMargin: `0px 0px 0px -${Re}px`
      }
    );
    return pe.observe(P.current), () => {
      pe.disconnect();
    };
  }, [N]), /* @__PURE__ */ W($i, { id: co, children: [
    /* @__PURE__ */ W(
      Di,
      {
        ref: (pe) => {
          typeof p == "function" ? p(pe) : p && (p.current = pe), B.current = pe;
        },
        onMouseDown: Z,
        style: { cursor: d ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(gr, { position: "left", ref: P }),
          /* @__PURE__ */ h(An, { isLoading: f, position: "left" }),
          /* @__PURE__ */ h(
            Ei,
            {
              ref: w,
              onDragStart: we,
              onDragOver: se,
              style: { userSelect: ee === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(_i, { ref: $, "aria-hidden": !0 }),
          /* @__PURE__ */ h(Ad, { zoom: r, startDate: x }),
          /* @__PURE__ */ h(Yd, { zoom: r, startDate: x }),
          /* @__PURE__ */ h(
            Yl,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onDragStart: M,
              isDraggable: j,
              draggingEventId: _,
              separatorRowIndices: S,
              fadingUnitIds: k
            }
          ),
          /* @__PURE__ */ h(gr, { ref: C, position: "right" }),
          /* @__PURE__ */ h(An, { isLoading: f, position: "right" }),
          (ee === "dragging" || ee === "animating") && /* @__PURE__ */ h(
            cd,
            {
              draggedEvent: re,
              ghostPosition: R,
              ghostDimensions: F,
              dropTarget: K,
              isValidDrop: ne,
              dragState: ee,
              zoom: r,
              data: n,
              resourceOnly: Q,
              separatorRowIndices: S
            }
          ),
          /* @__PURE__ */ h(
            fd,
            {
              selectionBox: E,
              isSelecting: X === "selecting"
            }
          ),
          be && te.length > 0 && /* @__PURE__ */ h(
            Ed,
            {
              selections: te,
              data: n,
              zoom: r,
              startDate: x,
              onRemove: ge,
              onUpdate: ue,
              separatorRowIndices: S
            }
          )
        ]
      }
    ),
    be && Ee && te.length > 0 && /* @__PURE__ */ h(
      wd,
      {
        selections: te,
        onConfirm: J,
        onClear: ae,
        onRemove: ge
      }
    )
  ] });
}), bo = (e) => {
  const r = A.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, wo = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Ae);
    t += o.hours + s, n += r % Ae, n >= Ae && (t++, n -= Ae);
  }), { hours: t, minutes: n };
}, So = (e, r) => {
  let t = dr;
  switch (r) {
    case 0:
      t = Ns;
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
}, Ai = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const d = A(a.startDate).isoWeek(), u = A(a.startDate).isoWeekday(), g = A(a.endDate).isoWeek(), S = A(a.endDate).isoWeekday(), { hours: v, minutes: k } = bo(a.occupancy);
    if (n === d) {
      const p = (et + 1 - u) * v, Y = (et + 1 - u) * k;
      return { hours: Math.max(0, p), minutes: Y };
    } else if (n === g) {
      const p = S > et ? et * v : S * v, Y = S > et ? et * k : S * k;
      return { hours: p, minutes: Y };
    } else if (A(r).isBetween(a.startDate, a.endDate))
      return { hours: et * v, minutes: et * k };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = wo(o), { free: c, overtime: l } = So({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, Pi = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: g } = bo(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: g } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = wo(s), { free: l, overtime: a } = So({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Oi = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = A(c.startDate).hour(), a = A(c.endDate).hour(), d = r.hour(), u = A(c.endDate).minute(), g = A(c.startDate).minute();
    l < d && a > d ? t += Ae : l === d && a === d && g && u ? t += u ? u - g : Ae - g : l === d && a >= d ? t += g ? Ae - g : Ae : a === d && u && (t += u);
  });
  const n = Math.floor(t / Ae), o = t % Ae, s = n || o ? 0 : 1, i = n ? 0 : o ? Ae - o : 0;
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
      return Oi(s, t);
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
      c = "days", l = _e;
      break;
    case 2:
      c = "hours", l = Ie;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * l) / l : t.x / l), d = A(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), u = Math.ceil(t.y / ye), g = n.findIndex((Y, G, N) => N.slice(0, G + 1).reduce((f, y) => f + y, 0) >= u), S = s === 2 ? (a + 1) * l : a * l, v = (u - 1) * ye + ye, k = Ii(
    o[g],
    g,
    d,
    s,
    i
  ), p = A(e.startDate).isSame(A(e.endDate), "day");
  return {
    coords: { x: S, y: v },
    mouseCoords: t,
    resourceIndex: g,
    disposition: k,
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
      isOneDayEvent: p,
      passengers: e.totalPassengers
    }
  };
};
function Ri(e, r) {
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
  for (const d of e)
    !d.isSubcontract && d.capacity != null && t.add(d.capacity);
  const n = [...t].sort((d, u) => d - u);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Ri(n, o), i = [];
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
    const g = "__auto_cat_" + u, S = d.min === d.max ? d.min + " pax" : d.min + "-" + d.max + " pax";
    l.push({ id: g, name: S, minPassengers: d.min, maxPassengers: d.max });
    for (const v of d.values)
      a.set(v, g);
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
var Mn = {}, Bi = {
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
  })(Oe, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Bi);
const zi = Mn;
var kn = {}, Fi = {
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
  })(Oe, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Fi);
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
  const { recordsThreshold: r } = je(), [t, n] = he(0), [o, s] = he(0), i = fe(null);
  xe(() => {
    i.current = document.getElementById(Ue);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = De(() => Zi(e), [e]), a = De(
    () => Ni(e, c, l, r),
    [e, c, r, l]
  ), d = de(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = de(() => {
    a[o].length && (n((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), g = de(() => {
    n(0), s(0);
  }, []), S = t + a[o].length, v = De(
    () => l.slice(t, S),
    [S, l, t]
  ), k = De(
    () => c.slice(t, S),
    [S, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: k,
    rowsPerItem: v,
    totalRowsPerPage: Vi(a[o]),
    next: d,
    previous: u,
    reset: g
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
  })(Oe, function() {
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
  })(Oe, function(t) {
    function n(g) {
      return g && typeof g == "object" && "default" in g ? g : { default: g };
    }
    var o = n(t);
    function s(g) {
      return g % 10 < 5 && g % 10 > 1 && ~~(g / 10) % 10 != 1;
    }
    function i(g, S, v) {
      var k = g + " ";
      switch (v) {
        case "m":
          return S ? "minuta" : "minutę";
        case "mm":
          return k + (s(g) ? "minuty" : "minut");
        case "h":
          return S ? "godzina" : "godzinę";
        case "hh":
          return k + (s(g) ? "godziny" : "godzin");
        case "MM":
          return k + (s(g) ? "miesiące" : "miesięcy");
        case "yy":
          return k + (s(g) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(g, S) {
      return a.test(S) ? c[g.month()] : l[g.month()];
    };
    d.s = l, d.f = c;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(g) {
      return g + ".";
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
  })(Oe, function(t) {
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
  })(Oe, function(t) {
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
  })(Oe, function(t) {
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
    oneDay: "Un día",
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
const Jt = new da(), Co = Vr({
  localesData: Jt.getLocales(),
  currentLocale: Jt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ua = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = he("en"), s = Jt.getLocales(), i = de(() => {
    const u = s.find((g) => g.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && A.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [c, l] = he(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  xe(() => {
    t == null || t.forEach((u) => {
      s.find((S) => S.id === u.id) || Jt.addLocales(u);
    });
  }, [s, t]), xe(() => {
    const u = localStorage.getItem("locale"), g = r ?? u ?? "en";
    localStorage.setItem("locale", g), o(g), l(i());
  }, [i, r]);
  const { Provider: d } = Co;
  return /* @__PURE__ */ h(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Je = () => nt(Co).currentLocale.lang, fa = (e) => /* @__PURE__ */ oe.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ oe.createElement("defs", null, /* @__PURE__ */ oe.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ oe.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ oe.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ oe.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ oe.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ha = b.div`
  height: 440px;
  width: 514px;
  position: relative;
`, pa = b.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ma = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = Je();
  return /* @__PURE__ */ W(ha, { onClick: e, children: [
    /* @__PURE__ */ h(fa, {}),
    /* @__PURE__ */ h(pa, { children: r })
  ] });
}, ga = b.div`
  position: relative;
  display: flex;
`, ya = b.div`
  position: relative;
  margin-left: ${Re};
  display: flex;
  flex-direction: column;
  contain: paint;
`, va = b.div`
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
  onItemClick: o,
  toggleTheme: s,
  topBarWidth: i,
  onEventDrop: c,
  onEventDrag: l,
  draggableConfig: a,
  onTimeRangeSelect: d,
  onMultiTimeRangeSelect: u,
  clickToAddConfig: g
}) => {
  const [S, v] = he(ba), [k, p] = he(e), [Y, G] = he(!1), [N, T] = he(!1), [f, y] = he(""), [x, D] = he(/* @__PURE__ */ new Set()), [w, $] = he(/* @__PURE__ */ new Set()), H = fe([]);
  xe(() => () => H.current.forEach(clearTimeout), []);
  const {
    zoom: q,
    startDate: O,
    isLoading: C,
    config: { includeTakenHoursOnWeekendsInDayView: P, showTooltip: B, showThemeToggle: I }
  } = je(), V = fe(null), U = fe(null), [ee, re] = he(124), {
    page: R,
    projectsPerPerson: F,
    rowsPerItem: K,
    currentPageNum: ne,
    pagesAmount: M,
    next: j,
    previous: _,
    reset: Q
  } = Gi(k), { effectiveCategories: z, effectivePage: L } = De(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: R };
    const ce = Li(R);
    if (ce.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: R };
    const le = R.map((ie) => {
      if (ie.isSubcontract || ie.capacity == null)
        return ie;
      const $e = ce.capacityToCategoryId.get(ie.capacity);
      return $e ? { ...ie, categoryId: $e } : ie;
    });
    return { effectiveCategories: ce.categories, effectivePage: le };
  }, [t, R]), m = de(
    (ce) => {
      if (x.has(ce)) {
        D((ie) => {
          const $e = new Set(ie);
          return $e.delete(ce), $e;
        });
        return;
      }
      if (vo()) {
        D((ie) => new Set(ie).add(ce));
        return;
      }
      $((ie) => new Set(ie).add(ce));
      const le = setTimeout(() => {
        D((ie) => new Set(ie).add(ce)), $((ie) => {
          const $e = new Set(ie);
          return $e.delete(ce), $e;
        });
      }, 190);
      H.current.push(le);
    },
    [x]
  ), X = De(() => {
    const ce = [], le = z ? [...z].sort((ie, $e) => ie.maxPassengers - $e.maxPassengers) : [];
    for (const ie of le)
      L.some(($e) => !$e.isSubcontract && $e.categoryId === ie.id) && ce.push(ie.id);
    return L.some((ie) => ie.isSubcontract) && ce.push("__subcontract__"), ce;
  }, [z, L]), E = de(() => {
    D(/* @__PURE__ */ new Set());
  }, []), Z = de(() => {
    D(new Set(X));
  }, [X]), te = De(() => {
    if (w.size === 0)
      return xa;
    const ce = /* @__PURE__ */ new Set();
    for (const le of L) {
      const ie = le.isSubcontract ? "__subcontract__" : le.categoryId;
      ie && w.has(ie) && ce.add(le.id);
    }
    return ce;
  }, [w, L]), {
    visiblePage: J,
    visibleRowsPerItem: ae,
    visibleTotalRows: ge,
    visibleProjectsPerPerson: ue,
    separatorRowIndices: be,
    subcontractSeparatorRow: Ee
  } = De(() => {
    const ce = wa(L, z), le = ((z == null ? void 0 : z.length) ?? 0) > 0, ie = /* @__PURE__ */ new Map();
    R.forEach((Ye, ut) => ie.set(Ye.id, ut));
    const $e = [], Ne = [], Ze = [], Ve = [];
    let rt = 0, Rt = -1;
    for (const Ye of ce)
      if (Ye.type === "subcontract" || Ye.type === "category" && le) {
        const ft = Ye.type === "subcontract" ? "__subcontract__" : Ye.category.id, ht = x.has(ft);
        if (Ve.push(rt), Ye.type === "subcontract" && (Rt = rt), !ht)
          for (const ot of Ye.items) {
            const Lt = ie.get(ot.id) ?? 0, Nt = K[Lt];
            $e.push(ot), Ne.push(Nt), Ze.push(F[Lt]), rt += Nt;
          }
      } else
        for (const ft of Ye.items) {
          const ht = ie.get(ft.id) ?? 0, ot = K[ht];
          $e.push(ft), Ne.push(ot), Ze.push(F[ht]), rt += ot;
        }
    const Qe = Ne.reduce((Ye, ut) => Ye + ut, 0);
    return {
      visiblePage: $e,
      visibleRowsPerItem: Ne,
      visibleTotalRows: Qe,
      visibleProjectsPerPerson: Ze,
      separatorRowIndices: Ve,
      subcontractSeparatorRow: Rt
    };
  }, [L, z, R, x, K, F]), we = fe(
    Cn(
      (ce, le, ie, $e, Ne, Ze) => {
        if (!V.current)
          return;
        const { tile: Ve, segmentId: rt } = Te(ce);
        if (!rt || !Ve) {
          G(!1);
          return;
        }
        const Rt = me(rt, le), Qe = V.current.getBoundingClientRect(), Ye = Ve.getBoundingClientRect(), ut = { x: ce.clientX - Qe.left, y: ce.clientY - Qe.top }, ft = {
          x: ce.clientX - Qe.left,
          y: ce.clientY - Qe.top
        }, ht = {
          x: Ye.left - Qe.left,
          y: Ye.top - Qe.top,
          width: Ye.width,
          height: Ye.height
        }, {
          coords: { x: ot, y: Lt },
          resourceIndex: Nt,
          disposition: $o,
          reservationData: Do
        } = Yi(
          Rt,
          ie,
          ut,
          $e,
          Ne,
          Ze,
          P
        );
        v({
          coords: { x: ot, y: Lt },
          mouseCoords: ft,
          resourceIndex: Nt,
          disposition: $o,
          reservationData: Do,
          tileBounds: ht
        }), G(!0);
      },
      4
    )
  ), se = fe(
    Cn((ce, le) => {
      Q(), p(
        ce.map((ie) => ({
          ...ie,
          data: ie.data.filter(($e) => {
            const { title: Ne, description: Ze, subtitle: Ve } = $e;
            return (Ne == null ? void 0 : Ne.toLowerCase().includes(le.toLowerCase())) || (Ve == null ? void 0 : Ve.toLowerCase().includes(le.toLowerCase())) || (Ze == null ? void 0 : Ze.toLowerCase().includes(le.toLowerCase()));
          })
        })).filter((ie) => ie.data.length > 0)
      );
    }, 500)
  ), me = (ce, le) => {
    if (ce)
      return le.flatMap((ie) => ie.data).find((ie) => ie.segmentId === ce);
  }, Te = (ce) => {
    if (!ce.target)
      return { tile: null, segmentId: null };
    const le = ce.target.closest("[data-segment-id]");
    return le ? { tile: le, segmentId: le.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, pe = (ce) => {
    const le = ce.target.value;
    y(le), se.current.cancel(), le ? se.current(e, le) : (Q(), p(e));
  }, ve = de(() => {
    we.current.cancel(), G(!1);
  }, []);
  return xe(() => {
    const ce = (ie) => we.current(
      ie,
      e,
      O,
      ae,
      ue,
      q
    ), le = V.current;
    if (le)
      return le.addEventListener("mousemove", ce), le.addEventListener("mouseleave", ve), () => {
        le.removeEventListener("mousemove", ce), le.removeEventListener("mouseleave", ve);
      };
  }, [
    we,
    ve,
    ue,
    ae,
    O,
    q,
    e
  ]), xe(() => {
    f ? (se.current.cancel(), se.current(e, f)) : p(e);
  }, [e, f]), qt(() => {
    const ce = U.current;
    if (!ce)
      return;
    const le = () => re(ce.offsetHeight);
    le();
    const ie = new ResizeObserver(le);
    return ie.observe(ce), () => ie.disconnect();
  }, []), /* @__PURE__ */ W(ga, { children: [
    /* @__PURE__ */ h(
      Nc,
      {
        headerHeight: ee,
        data: L,
        categories: z,
        pageNum: ne,
        pagesAmount: M,
        rows: K,
        onLoadNext: j,
        onLoadPrevious: _,
        searchInputValue: f,
        onSearchInputChange: pe,
        onItemClick: o,
        collapsedGroups: x,
        fadingGroups: w,
        onToggleGroup: m,
        allGroupIds: X,
        onExpandAll: E,
        onCollapseAll: Z
      }
    ),
    /* @__PURE__ */ W(ya, { children: [
      /* @__PURE__ */ h(
        hl,
        {
          ref: U,
          zoom: q,
          topBarWidth: i,
          showThemeToggle: I,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Ti,
        {
          data: J,
          baseData: r || e,
          zoom: q,
          rows: ge,
          ref: V,
          onTileClick: n,
          onEventDrop: c,
          onEventDrag: l,
          draggableConfig: a,
          onDragStateChange: T,
          onTimeRangeSelect: d,
          onMultiTimeRangeSelect: u,
          clickToAddConfig: g,
          separatorRowIndices: be,
          subcontractSeparatorRow: Ee,
          fadingUnitIds: te
        }
      ) : /* @__PURE__ */ h(va, { width: i, children: C ? /* @__PURE__ */ h(An, { isLoading: C, position: "left" }) : /* @__PURE__ */ h(ma, {}) }),
      B && /* @__PURE__ */ h(Kl, { tooltipData: S, visible: Y && !N })
    ] })
  ] });
}, Ca = b.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Re + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.primary};
`, vr = b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, Ma = b.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, ka = b.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, xr = b.button`
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
`, $a = b.button`
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
`, Da = b.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin-left: 4px;
  text-transform: capitalize;
  white-space: nowrap;
`, Ea = b.div`
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
`, br = b.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 650;
  color: ${({ $primary: e }) => e ? "#fff" : "#3a4c46"};
  border: 1px solid ${({ $primary: e }) => e ? "transparent" : "#c8d5cd"};
  background: ${({ theme: e, $primary: r }) => r ? e.colors.accent : "#fff"};
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
`, _a = b.label`
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
`, Ta = b.button`
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
`, Aa = b.span`
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
`, pt = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), Pa = () => {
  var r, t;
  const e = document.getElementById(fo);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Oa = () => {
  const {
    config: e,
    date: r,
    zoom: t,
    handleGoNext: n,
    handleGoPrev: o,
    handleGoToday: s,
    setZoom: i,
    goToDate: c,
    toggleDisplayActiveUnits: l,
    toolbarActions: a
  } = je();
  Je();
  const { filterButtonState: d = -1 } = e, u = () => {
    var g;
    (g = document.querySelector(`#${Ue} input[placeholder]`)) == null || g.focus();
  };
  return /* @__PURE__ */ W(Ca, { width: 0, children: [
    /* @__PURE__ */ W(vr, { $at: "start", children: [
      /* @__PURE__ */ W(ka, { children: [
        /* @__PURE__ */ h(xr, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ h(pt, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h($a, { onClick: s, children: "Hoy" }),
        /* @__PURE__ */ h(xr, { onClick: n, "aria-label": "Siguiente", children: /* @__PURE__ */ h(pt, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      /* @__PURE__ */ h(Da, { children: r.locale(A.locale()).format("MMMM YYYY") }),
      /* @__PURE__ */ h(Ma, {}),
      /* @__PURE__ */ W(Ea, { children: [
        /* @__PURE__ */ h("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ h("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ h("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ W(_a, { children: [
        /* @__PURE__ */ W(pt, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (g) => g.target.value && c(g.target.value) })
      ] }),
      /* @__PURE__ */ W(Ta, { onClick: u, children: [
        /* @__PURE__ */ W(pt, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] })
    ] }),
    /* @__PURE__ */ W(vr, { $at: "end", children: [
      e.showFilterButton !== !1 && d >= 0 && /* @__PURE__ */ W(br, { $primary: !!d, onClick: l, children: [
        /* @__PURE__ */ h(pt, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!d && /* @__PURE__ */ h(Aa, { children: d })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ W(br, { onClick: Pa, children: [
        /* @__PURE__ */ h(pt, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      a
    ] })
  ] });
}, Ia = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ya = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Ra = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), La = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Na = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ba = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), za = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Fa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Ha = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Wa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), ja = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Za = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Va = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Ga = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ oe.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Xa = {
  add: Ia,
  subtract: Ya,
  filter: Ra,
  arrowLeft: La,
  arrowRight: Na,
  defaultAvatar: Ba,
  calendarWarning: za,
  calendarFree: Fa,
  arrowDown: Wa,
  arrowUp: Ha,
  search: ja,
  close: Za,
  moon: Va,
  sun: Ga
}, on = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = Qt(), i = Xa[e];
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
}, Ua = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => Ua(e, r, t)}
`;
const Ka = b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${uo}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${ze};
`, Ja = b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, qa = b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, Qa = b.div`
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
`, ec = b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, tc = b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, nc = b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({ $sev: e }) => e === 2 ? "#c6483d" : e === 1 ? "#d98a22" : "#93b1a6"};
`, rc = b.div`
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
`, oc = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, sc = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, ic = b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, ac = b.div`
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
`, cc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = je(), s = Je(), i = fe(null), [c, l] = he(null), a = De(
    () => Array.from({ length: 12 }, (w, $) => A().month($).format("MMM").toUpperCase()),
    [s]
  ), d = De(() => A().startOf("day"), []), { domainStart: u, domainEnd: g, domainDays: S } = De(() => {
    const w = d.subtract(3, "month").startOf("month"), $ = d.add(9, "month").endOf("month");
    return { domainStart: w, domainEnd: $, domainDays: $.diff(w, "day") + 1 };
  }, [d]), v = (w) => w.diff(u, "day") / S * 100, k = (w) => Math.min(100, Math.max(0, w)), p = De(() => {
    const w = [];
    let $ = u.startOf("month");
    for (; $.isBefore(g); )
      w.push($), $ = $.add(1, "month");
    return w;
  }, [u, g]), Y = o == null ? void 0 : o.yearCounts, G = De(() => {
    const w = Math.ceil(S / 7), $ = new Array(w).fill(0), H = new Array(w).fill(0), q = (U) => {
      const ee = U.diff(u, "day");
      return ee < 0 || ee >= S ? -1 : Math.floor(ee / 7);
    };
    if (Y && Y.length)
      for (const U of Y) {
        const ee = q(A(U.date));
        if (ee < 0)
          continue;
        $[ee] += U.count;
        const re = U.sev ?? 0;
        re > H[ee] && (H[ee] = re);
      }
    else
      for (const U of t ?? [])
        for (const ee of U.data ?? []) {
          const re = q(A(ee.startDate));
          if (re < 0)
            continue;
          $[re] += 1;
          const R = ee.readiness === "sin_chofer" ? 2 : ee.readiness === "sin_avisar" ? 1 : 0;
          R > H[re] && (H[re] = R);
        }
    const O = Math.max(0, ...$);
    if (O <= 0)
      return $.map((U, ee) => ({ h: 0, sev: H[ee] }));
    const C = $.filter((U) => U > 0).sort((U, ee) => U - ee), P = C.length >> 1, B = C.length % 2 ? C[P] : (C[P - 1] + C[P]) / 2, I = B > 0 ? O / B : 1, V = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, I)))));
    return $.map((U, ee) => ({ h: U > 0 ? Math.min(100, 100 * Math.pow(U / O, V)) : 0, sev: H[ee] }));
  }, [t, Y, u, S]), N = v(d), T = (w) => {
    const { startDate: $, endDate: H } = en(w, r), q = k(v($));
    return { left: q, width: k(v(H)) - q, startDate: $, endDate: H };
  }, f = T(e), y = c ? T(c.d) : null, x = (w) => `${w.date()} ${a[w.month()]}`, D = (w) => {
    var q;
    const $ = (q = i.current) == null ? void 0 : q.getBoundingClientRect();
    if (!$)
      return null;
    const H = Math.min(1, Math.max(0, (w - $.left) / $.width));
    return { f: H, d: u.add(Math.round(H * (S - 1)), "day") };
  };
  return /* @__PURE__ */ W(Ka, { children: [
    /* @__PURE__ */ W(Ja, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ W(
      qa,
      {
        ref: i,
        onClick: (w) => {
          const $ = D(w.clientX);
          $ && n($.d.toDate());
        },
        onMouseMove: (w) => {
          const $ = D(w.clientX);
          $ && l({ left: $.f * 100, d: $.d });
        },
        onMouseLeave: () => l(null),
        children: [
          /* @__PURE__ */ h(Qa, { children: p.map((w, $) => /* @__PURE__ */ h("span", { style: { left: `${v(w)}%` }, children: $ === 0 || w.month() === 0 ? `${a[w.month()]} ${w.format("YY")}` : a[w.month()] }, $)) }),
          p.map(
            (w, $) => $ === 0 ? null : /* @__PURE__ */ h(ec, { style: { left: `${v(w)}%` } }, $)
          ),
          /* @__PURE__ */ h(tc, { children: G.map((w, $) => /* @__PURE__ */ h(nc, { $sev: w.sev, style: { height: `${w.h}%` } }, $)) }),
          /* @__PURE__ */ h(oc, { style: { left: `${f.left}%`, width: `${f.width}%` } }),
          /* @__PURE__ */ h(rc, { style: { left: `${k(N)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && y && /* @__PURE__ */ W(Pe, { children: [
            /* @__PURE__ */ h(sc, { style: { left: `${y.left}%`, width: `${y.width}%` } }),
            /* @__PURE__ */ h(ic, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(ac, { style: { left: `${c.left}%` }, children: `Ir a ${x(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, lc = b.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, dc = b.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? uo : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, uc = b.div`
  position: relative;
`, fc = ({
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
  onMultiTimeRangeSelect: g,
  clickToAddConfig: S
}) => {
  const { goToDate: v, handleGoToday: k, zoomIn: p, zoomOut: Y, zoom: G } = je();
  return Gr(
    d,
    () => ({
      goToDate: v,
      goToToday: k,
      setZoom: (N) => {
        if (!mo(N))
          return;
        const T = N - G;
        if (T > 0)
          for (let f = 0; f < T; f++)
            p();
        else
          for (let f = 0; f < Math.abs(T); f++)
            Y();
      }
    }),
    [v, k, G, p, Y]
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
      onMultiTimeRangeSelect: g,
      clickToAddConfig: S
    }
  );
}, zd = On(function({
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
  isLoading: g,
  onEventDrop: S,
  onEventDrag: v,
  draggableConfig: k,
  onTimeRangeSelect: p,
  onMultiTimeRangeSelect: Y,
  clickToAddConfig: G
}, N) {
  var B;
  const T = De(
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
  ), f = fe(null), y = fe(null), [x, D] = he((B = f.current) == null ? void 0 : B.clientWidth), w = De(() => A(s), [s]), [$, H] = he(T.defaultTheme ?? "light"), q = () => {
    H($ === "light" ? "dark" : "light");
  }, O = $ === "light" ? As : Ps, C = T.theme ? T.theme[O.mode] : {}, P = {
    ...O,
    colors: {
      ...O.colors,
      ...C
    }
  };
  return Gr(
    N,
    () => ({
      goToDate: (I) => {
        var V;
        return (V = y.current) == null ? void 0 : V.goToDate(I);
      },
      goToToday: () => {
        var I;
        return (I = y.current) == null ? void 0 : I.goToToday();
      },
      setZoom: (I) => {
        var V;
        return (V = y.current) == null ? void 0 : V.setZoom(I);
      }
    }),
    []
  ), qt(() => {
    const I = () => {
      f.current && D(f.current.clientWidth);
    };
    return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
  }, []), /* @__PURE__ */ W(Pe, { children: [
    /* @__PURE__ */ h(Ts, {}),
    /* @__PURE__ */ h(Ds, { theme: P, children: /* @__PURE__ */ h(ua, { lang: T.lang, translations: T.translations, children: /* @__PURE__ */ h(
      Si,
      {
        data: r,
        isLoading: !!g,
        config: T,
        onRangeChange: i,
        defaultStartDate: w,
        handleToggleDisplayActiveUnits: l,
        onClearFilterData: a,
        toolbarActions: d,
        children: /* @__PURE__ */ W(lc, { id: fo, children: [
          /* @__PURE__ */ h(
            dc,
            {
              showScroll: !!r.length,
              $footer: T.showOverview !== !1 && !!r.length,
              id: Ue,
              ref: f,
              children: /* @__PURE__ */ h(uc, { children: /* @__PURE__ */ h(
                fc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: x ?? 0,
                  onItemClick: u,
                  toggleTheme: q,
                  onEventDrop: S,
                  onEventDrag: v,
                  draggableConfig: k,
                  schedulerRef: y,
                  onTimeRangeSelect: p,
                  onMultiTimeRangeSelect: Y,
                  clickToAddConfig: G
                }
              ) })
            }
          ),
          T.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(cc, {})
        ] })
      }
    ) }) })
  ] });
}), hc = b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, pc = b.button`
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
`, mc = b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, gc = b.p`
  ${kt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, wr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Je(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(hc, { intent: e, children: /* @__PURE__ */ W(pc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(mc, { children: t }),
    /* @__PURE__ */ h(gc, { children: l })
  ] }) });
}, yc = b.div`
  min-width: ${Re + "px"};
  max-width: ${Re + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, vc = b.div`
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
`, xc = b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, bc = b.input`
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
`, wc = b.div`
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
`, Sc = We`
  from { opacity: 1; }
  to { opacity: 0; }
`, Sr = b.div`
  ${({ $fading: e }) => e && dt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Sc} 180ms ease forwards;
      }
    `}
`, Cc = b.button`
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
`, Mc = We`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, kc = b.div`
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
    animation: ${Mc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, $c = b.div`
  display: flex;
  align-items: center;
`, Dc = b.div`
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
`, Ec = b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, _c = b.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Cr = b.p`
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
`, Tc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Ac = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Pc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Oc = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  kc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ W($c, { children: [
      /* @__PURE__ */ h(Dc, { $provider: o, children: Tc(r.icon) ? /* @__PURE__ */ h(Ec, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Pc, {}) : /* @__PURE__ */ h(Ac, {}) }),
      /* @__PURE__ */ W(_c, { children: [
        /* @__PURE__ */ h(Cr, { isMain: !0, children: r.title }),
        /* @__PURE__ */ h(Cr, { children: r.subtitle })
      ] })
    ] })
  }
), Ic = b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  background: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder + "24" : e.colors.accent + "14"};
  border-left: 3px solid
    ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder : "transparent"};
  border-bottom: 1px solid
    ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder : e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractBorder + "33" : e.colors.accent + "22"};
  }
`, Yc = b.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, Rc = b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, Lc = b.div`
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
`, Mr = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => /* @__PURE__ */ W(Ic, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ h(Lc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(Yc, { $variant: o, children: e }),
  /* @__PURE__ */ h(Rc, { $variant: o, children: r })
] }), Nc = ({
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
  fadingGroups: g,
  onToggleGroup: S,
  allGroupIds: v,
  onExpandAll: k,
  onCollapseAll: p
}) => {
  const [Y, G] = he(!1), N = Je(), T = () => G((C) => !C), f = r ? [...r].sort((C, P) => C.maxPassengers - P.maxPassengers) : [], y = f.length > 0, x = v.length > 0, D = x && u.size === v.length;
  x && u.size;
  const w = e.filter((C) => C.isSubcontract), $ = N.subcontract ?? "Subcontract", H = (C) => {
    const P = e.indexOf(C);
    return /* @__PURE__ */ h(
      Oc,
      {
        id: C.id,
        item: C.label,
        rows: n[P],
        onItemClick: d,
        isSubcontract: C.isSubcontract
      },
      C.id
    );
  }, q = (C) => {
    const P = e.filter(
      (U) => !U.isSubcontract && U.categoryId === C.id
    );
    if (P.length === 0)
      return null;
    const B = u.has(C.id), I = g.has(C.id), V = C.name;
    return /* @__PURE__ */ W("div", { children: [
      /* @__PURE__ */ h(
        Mr,
        {
          label: V,
          count: P.length,
          isCollapsed: B || I,
          onToggle: () => S(C.id),
          variant: "category"
        }
      ),
      !B && /* @__PURE__ */ h(Sr, { $fading: I, children: P.map(H) })
    ] }, C.id);
  }, O = e.filter(
    (C) => !C.isSubcontract && (!C.categoryId || !y)
  );
  return /* @__PURE__ */ W(yc, { children: [
    /* @__PURE__ */ W(vc, { $height: t, children: [
      /* @__PURE__ */ W(xc, { children: [
        /* @__PURE__ */ W(wc, { isFocused: Y, children: [
          /* @__PURE__ */ h(
            bc,
            {
              placeholder: N.search,
              value: l,
              onChange: a,
              onFocus: T,
              onBlur: T
            }
          ),
          /* @__PURE__ */ h(on, { iconName: "search" })
        ] }),
        x && /* @__PURE__ */ h(
          Cc,
          {
            title: D ? "Expand all" : "Collapse all",
            onClick: D ? k : p,
            $allCollapsed: D,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: D ? /* @__PURE__ */ W(Pe, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ W(Pe, { children: [
              /* @__PURE__ */ h("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ h(
        wr,
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
    y ? f.map(q) : O.map(H),
    y && O.length > 0 && O.map(H),
    w.length > 0 && /* @__PURE__ */ W(Pe, { children: [
      /* @__PURE__ */ h(
        Mr,
        {
          label: $,
          count: w.length,
          isCollapsed: u.has("__subcontract__") || g.has("__subcontract__"),
          onToggle: () => S("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !u.has("__subcontract__") && /* @__PURE__ */ h(Sr, { $fading: g.has("__subcontract__"), children: w.map(H) })
    ] }),
    /* @__PURE__ */ h(
      wr,
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
}, Bc = b.div`
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
`, zc = We`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Fc = b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${zc} 1s infinite;
`, Hc = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(Bc, { position: r, children: /* @__PURE__ */ h(Fc, {}) }) : null, An = Hc, qe = (e, r) => {
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
    topText: g,
    bottomText: S,
    strokeStyle: v,
    labelBetweenCells: k
  } = e;
  if (t.beginPath(), t.strokeStyle = v ?? r.colors.border, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), k ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = a;
    const p = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.accent, t.fillText(l, p, c);
  }
  if (d && u && g && S) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = g.font;
    const p = n + s / 2 - t.measureText(g.label).width / 2;
    t.fillStyle = g.color, t.fillText(g.label, p, g.y), t.font = S.font;
    const Y = n + s / 2 - t.measureText(S.label).width / 2;
    t.fillStyle = S.color, t.fillText(S.label, Y, S.y);
  }
}, Pn = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Wc = (e, r, t, n) => {
  const o = St - it / Is, s = St - it / Ys, i = Ke + Dt;
  let c = 0;
  for (let l = 0; l < r; l++) {
    const a = po(
      A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(l, "days")
    ), d = a.isCurrentDay;
    if (qe(
      {
        ctx: e,
        x: c,
        y: i,
        width: _e,
        height: it,
        isBottomRow: !0,
        // OPAQUE today fill (currentDay, same as the grid's today column) — the old `today+"26"` was 15% alpha, so
        // events scrolling under the header showed through the HOY cell.
        fillStyle: d ? n.colors.currentDay : a.isBusinessDay ? n.colors.gridBackground : n.colors.primary,
        topText: {
          y: o,
          label: d ? "" : a.dayName.toUpperCase(),
          font: He.bottomRow.name,
          color: Pn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, n)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: d ? `700 10px ${ze}` : He.bottomRow.number,
          color: d ? n.colors.today : Pn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            n
          )
        }
      },
      n
    ), d) {
      const S = c + _e / 2, v = o - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(S - 30 / 2, v, 30, 13, 5) : e.rect(S - 30 / 2, v, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${ze}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", S, v + 13 / 2 + 0.5), e.restore();
    }
    c += _e;
  }
}, jc = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Be;
  const s = Ke;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= gn && (c = 0);
    const a = ho(t, l) * Be;
    qe(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: Dt,
        textYPos: lo,
        label: A().month(c).format("MMMM").toUpperCase(),
        font: He.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, Zc = (e, r, t) => {
  let o = 0, s = 0, i = A(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * _e + _e;
  for (let c = 0; c < gn; c++)
    i > gn - 1 && (i = 0), s = A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * _e, qe(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Ke,
        textYPos: zn,
        label: A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: He.topRow
      },
      t
    ), o += s, i++;
}, Vc = (e, r, t, n) => {
  const o = 7 * _e, s = Ke, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (c + a) % lr;
    u <= 0 && (u += lr), d !== 1 && a === 0 && (l = -d * _e + _e), qe(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: Dt,
        textYPos: lo,
        label: `${t.toUpperCase()} ${u}`,
        font: He.middleRow
      },
      n
    ), l += o;
  }
}, Gc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, Xc = (e, r, t, n, o) => {
  const s = St - it / 1.6, i = St - it / 4.5, c = Ke + Dt;
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
        height: it,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: u ? o.colors.today + "26" : Gc({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: u ? `700 14px ${ze}` : He.bottomRow.name,
          color: u ? o.colors.today : Pn({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: He.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Ct;
  }
}, Uc = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (fr(s) - t + 1) * Be, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = fr(s + l) * Be), d + a > i && l > 0 && (a = Math.ceil((i - d) / Be) * Be), qe(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Ke,
        textYPos: zn,
        label: (s + l).toString(),
        font: He.topRow
      },
      n
    ), c += a, d += a, l++;
}, Kc = (e, r, t, n) => {
  const o = Math.floor(r / Kt) + 2, s = Kt * Ie;
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
        height: It,
        textYPos: Mt + It / 2 + 2,
        label: d,
        font: He.bottomRow.number
      },
      n
    ), l += s;
  }
}, Jc = (e, r, t, n) => {
  const o = Math.ceil(r / Kt), s = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * Ie;
  for (let u = 0; u < a; u++) {
    const g = A(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = A(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), k = v.format("MMMM").toUpperCase(), p = v.diff(g, "hour") + 1, Y = u === 0 ? p * Ie : r * Ie;
    qe(
      {
        ctx: e,
        x: d,
        y: 0,
        width: Y,
        height: Mt,
        textYPos: zn,
        label: k,
        font: He.topRow
      },
      n
    ), d += Y;
  }
}, qc = (e, r, t, n) => {
  let o = 0;
  const s = Mt + It, i = A(
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
        height: mn,
        label: a,
        font: He.bottomRow.hoursInDay,
        textYPos: Mt + It + mn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Ie;
  }
}, Qc = (e, r, t, n, o, s, i) => {
  switch (r) {
    case 0:
      Uc(e, n, s, i), jc(e, t, n, i), Xc(e, t, n, o, i);
      break;
    case 1:
      Zc(e, n, i), Vc(e, n, o, i), Wc(e, t, n, i);
      break;
    case 2:
      Jc(e, t, n, i), Kc(e, t, n, i), qc(e, t, n, i);
      break;
  }
}, el = b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, tl = b.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, nl = b.div`
  height: ${St}px;
  display: block;
`, rl = b.canvas``, ol = {
  transfer: /* @__PURE__ */ W(Pe, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ W(Pe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ W(Pe, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ W(Pe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ W(Pe, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ W(Pe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ h("path", { d: "M12 7.5V12l3 2" })
  ] })
}, Ge = ({
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
    children: ol[e]
  }
), sl = b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Re + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, kr = b.span`
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
`, Wt = b.span`
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
`, il = b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, al = b.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, cl = b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, ll = b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, dl = b.span`
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
`, ul = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], fl = () => /* @__PURE__ */ W(sl, { children: [
  /* @__PURE__ */ h(kr, { children: "Leyenda" }),
  /* @__PURE__ */ W(Wt, { children: [
    /* @__PURE__ */ h(Ge, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ W(Wt, { children: [
    /* @__PURE__ */ h(Ge, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ W(Wt, { children: [
    /* @__PURE__ */ h(Ge, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ W(Wt, { children: [
    /* @__PURE__ */ h(il, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(al, {}),
  /* @__PURE__ */ W(kr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  ul.map((e) => /* @__PURE__ */ W(cl, { children: [
    /* @__PURE__ */ h(ll, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(dl, { style: { color: e.color }, children: /* @__PURE__ */ h(Ge, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), hl = On(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = Je(), { date: c, cols: l, dayOfYear: a, startDate: d, config: u } = je(), g = fe(null), S = Qt(), v = de(
    (k) => {
      const p = jn(), G = (r === 2 ? Os : St) + 1;
      yo(k, p, G), Qc(k, r, l, d, i, a, S);
    },
    [l, a, d, i, r, S]
  );
  return xe(() => {
    if (!g.current)
      return;
    const k = g.current.getContext("2d");
    if (!k)
      return;
    const p = () => v(k);
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [v]), xe(() => {
    const k = g.current;
    if (!k)
      return;
    k.style.letterSpacing = "1px";
    const p = k.getContext("2d");
    p && v(p);
  }, [c, r, v]), /* @__PURE__ */ W(el, { ref: s, children: [
    (u.showTopbar !== !1 || u.showLegend !== !1) && /* @__PURE__ */ W(tl, { $width: t, children: [
      u.showTopbar !== !1 && /* @__PURE__ */ h(Oa, { width: t, showThemeToggle: n, toggleTheme: o }),
      u.showLegend !== !1 && /* @__PURE__ */ h(fl, {})
    ] }),
    /* @__PURE__ */ h(nl, { id: Rs, children: /* @__PURE__ */ h(rl, { ref: g }) })
  ] });
}), pl = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Be;
      break;
    case 2:
      n = Ie;
      break;
    default:
      n = _e;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), l = r.endDate.startOf("day"), a = () => {
    let d;
    switch (t) {
      case 2:
        d = (e.startDate.diff(r.startDate, "minute") / Ae + 1) * n - n / 2;
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
          e.endDate.diff(e.startDate, "minute") / Ae * n,
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
          e.endDate.diff(r.startDate, "minute") / Ae * n + 0.5 * n,
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
          r.endDate.diff(e.startDate, "minute") / Ae * n,
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
          r.endDate.diff(r.startDate, "minute") / Ae * n,
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
}, ml = (e, r, t, n, o, s) => {
  const i = e * ye + Ls, c = r.hour(), l = t.hour();
  let a, d, u, g;
  switch (s) {
    case 2: {
      a = A(n), d = A(o), u = A(r).hour(c).minute(0), g = A(t).hour(l).minute(0);
      break;
    }
    default: {
      a = A(n).hour(0).minute(0), d = A(o).hour(23).minute(59), u = r, g = t;
      break;
    }
  }
  return {
    ...pl(
      { startDate: a, endDate: d },
      { startDate: u, endDate: g },
      s
    ),
    y: i
  };
}, Mo = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
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
  ${kt}
  ${$t}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const gl = We`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, yl = We`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, vl = b.button`
  ${kt}
  position: absolute;
  height: ${Bn}px;
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
    animation: ${gl} 180ms ease-out;
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
        animation: ${yl} 190ms ease-out forwards;
      }
    `}
`, xl = b.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`, bl = b.div`
  position: sticky;
  left: ${Re + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, $r = b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, wl = b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Sl = b.span`
  ${$t}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, Cl = b.span`
  ${$t}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Ml = b.span`
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
`, kl = b.div`
  ${$t}
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
`, Dr = b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Er = b.span`
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
`, _r = b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, $l = b.div`
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
`, Tr = b.span`
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
`, Dl = 34, El = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, _l = "#3E8E5A", Tl = "#D98A22", Ar = ({
  row: e,
  data: r,
  zoom: t,
  isSubcontract: n = !1,
  onTileClick: o,
  onDragStart: s,
  isDragging: i = !1,
  isDraggable: c = !0,
  yOffset: l = 0,
  exiting: a = !1
}) => {
  const { date: d } = je(), u = en(d, t), { y: g, x: S, width: v } = ml(
    e,
    u.startDate,
    u.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: k } = Qt(), p = fe(null), Y = A(r.startDate).isSame(A(r.endDate), "day"), G = r.eventType === Yt.Tour, N = r.eventType === Yt.Transfer, T = Y && (G || N), f = (q) => {
    p.current = { x: q.clientX, y: q.clientY }, c && s && (q.preventDefault(), s(r, q));
  }, y = (q) => {
    if (p.current) {
      const O = Math.abs(q.clientX - p.current.x), C = Math.abs(q.clientY - p.current.y);
      Math.sqrt(O * O + C * C) <= 5 && (o == null || o(r)), p.current = null;
    } else
      o == null || o(r);
  }, x = {
    left: `${S}px`,
    top: `${g + l}px`,
    backgroundColor: `${r.bgColor ?? k.defaultTile}`,
    width: `${v}px`,
    color: Mo(r.bgColor ?? "")
  }, D = !n && r.readiness ? El[r.readiness] : null, w = n && r.subcontractConfirmed === !1, $ = n ? w ? Tl : _l : D == null ? void 0 : D.stripe, H = (q) => /* @__PURE__ */ W(
    vl,
    {
      "data-segment-id": r.segmentId,
      style: x,
      onClick: y,
      onMouseDown: f,
      onDragStart: (O) => O.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: w,
      $exiting: a,
      children: [
        $ && /* @__PURE__ */ h(xl, { style: { background: $ } }),
        q
      ]
    }
  );
  return H(
    T ? /* @__PURE__ */ W(Pe, { children: [
      (n || D) && /* @__PURE__ */ h(Dr, { $sm: !0, children: n ? /* @__PURE__ */ h(_r, { children: "SUB" }) : D && /* @__PURE__ */ h(Er, { $sm: !0, style: { color: D.color }, children: /* @__PURE__ */ h(Ge, { name: D.icon, strokeWidth: D.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ W($l, { $transfer: N, children: [
        /* @__PURE__ */ h(Ge, { name: N ? "transfer" : "sun", strokeWidth: 2.4 }),
        v >= Dl && /* @__PURE__ */ W(Pe, { children: [
          /* @__PURE__ */ h(Tr, { children: A(r.startDate).format("h:mm A") }),
          !N && /* @__PURE__ */ h(Tr, { $end: !0, children: A(r.endDate).format("h:mm A") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ W(Pe, { children: [
      /* @__PURE__ */ h(Dr, { children: n ? /* @__PURE__ */ h(_r, { children: "SUB" }) : D && /* @__PURE__ */ h(Er, { style: { color: D.color }, children: /* @__PURE__ */ h(Ge, { name: D.icon, strokeWidth: D.icon === "check" ? 2.6 : 2.2 }) }) }),
      r.bookingNumber && /* @__PURE__ */ h(Ml, { children: r.bookingNumber }),
      /* @__PURE__ */ W(bl, { children: [
        /* @__PURE__ */ W($r, { $pad: !0, children: [
          /* @__PURE__ */ h(wl, { children: /* @__PURE__ */ h(Ge, { name: N ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(Sl, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h($r, { children: /* @__PURE__ */ h(Cl, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ W(kl, { children: [
          /* @__PURE__ */ h(Ge, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Pr = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Le;
}, Al = We`
  from { opacity: 0; }
  to { opacity: 1; }
`, Pl = We`
  from { opacity: 1; }
  to { opacity: 0; }
`, Ol = b.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${ye}px;
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
    animation: ${Al} 200ms ease-out;
  }
  ${({ $fading: e }) => e && dt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Pl} 180ms ease forwards;
      }
    `}
`, Il = ({
  data: e,
  zoom: r,
  onTileClick: t,
  onDragStart: n,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = [],
  fadingUnitIds: c
}) => {
  const { nodes: l, liveMap: a } = De(() => {
    const k = /* @__PURE__ */ new Map();
    let p = 0;
    return { nodes: e.map((G, N) => {
      N > 0 && (p += Math.max(e[N - 1].data.length, 1));
      const T = !!(c != null && c.has(G.id));
      if (!G.data.some((f) => f.length > 0)) {
        const f = Pr(p, i);
        return [
          /* @__PURE__ */ h(Ol, { $fading: T, style: { top: `${p * ye + f}px` }, children: "Disponible" }, `dispo-${G.id}`)
        ];
      }
      return G.data.map(
        (f, y) => f.map((x) => {
          const D = s === x.segmentId, w = o ? o(x) : !1, $ = y + p, H = Pr($, i);
          return k.set(x.segmentId, {
            project: x,
            absoluteRow: $,
            yOffset: H,
            isSubcontract: !!G.isSubcontract
          }), /* @__PURE__ */ h(
            Ar,
            {
              row: $,
              data: x,
              zoom: r,
              isSubcontract: G.isSubcontract,
              onTileClick: t,
              onDragStart: n,
              isDragging: D,
              isDraggable: w,
              yOffset: H,
              exiting: T
            },
            x.segmentId
          );
        })
      );
    }).flat(2), liveMap: k };
  }, [e, t, r, n, o, s, i, c]), d = fe(/* @__PURE__ */ new Map()), u = fe([]), [g, S] = he([]);
  xe(() => () => u.current.forEach(clearTimeout), []), xe(() => {
    const k = d.current;
    d.current = a;
    const p = [];
    if (k.forEach((N, T) => {
      a.has(T) || p.push(N);
    }), S((N) => {
      let T = N.filter((f) => !a.has(f.project.segmentId));
      for (const f of p)
        T.some((y) => y.project.segmentId === f.project.segmentId) || (T = [...T, f]);
      return T;
    }), !p.length)
      return;
    const Y = new Set(p.map((N) => N.project.segmentId)), G = setTimeout(() => {
      S((N) => N.filter((T) => !Y.has(T.project.segmentId)));
    }, 220);
    u.current.push(G);
  }, [a]);
  const v = g.filter((k) => !a.has(k.project.segmentId)).map((k) => /* @__PURE__ */ h(
    Ar,
    {
      row: k.absoluteRow,
      data: k.project,
      zoom: r,
      isSubcontract: k.isSubcontract,
      yOffset: k.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    k.project.segmentId
  ));
  return /* @__PURE__ */ h(Pe, { children: [...l, ...v] });
}, Yl = Il;
b.div`
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
const Rl = b.div`
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
`, Ll = b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, Nl = b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, Bl = b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, zl = b.span`
  flex-shrink: 0;
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, Fl = b.div`
  ${kt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Hl = b.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, Wl = b.div`
  padding: 10px 12px;
`, jl = b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Or = b.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Ir = b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Yr = b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Rr = b.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Lr = b.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Zl = b.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Vl = b.div`
  min-width: 0;
`, Gl = b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Xl = b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, Nr = b.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Et = b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, _t = b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Tt = b.div`
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
const Ul = {
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
}, Kl = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = fe(null), [s, i] = he("below"), c = Je(), l = { ...Ul, ...c.tooltip };
  qt(() => {
    if (!o.current || !t)
      return;
    const v = o.current, { width: k, height: p } = v.getBoundingClientRect(), Y = v.parentElement;
    if (!Y)
      return;
    const G = Y.getBoundingClientRect(), N = 12, T = 4, f = G.height - t.y, y = G.width - t.x;
    let x = t.x + N, D = t.y + N, w = "below";
    y < k + N && (x = t.x - k - N), f < p + N && (D = t.y - p - N, w = "above"), x = Math.max(T, Math.min(x, G.width - k - T)), D = Math.max(T, Math.min(D, G.height - p - T)), i(w), v.style.left = `${x}px`, v.style.top = `${D}px`;
  }, [t]);
  const a = n.reservationType === Yt.Tour, d = a && n.isOneDayEvent, u = () => a ? d ? "oneday" : "tour" : "transfer", g = () => a ? d ? l.oneDay : l.tour : l.transfer, S = [
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ W(Rl, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ W(Ll, { children: [
      /* @__PURE__ */ W(Nl, { children: [
        /* @__PURE__ */ h(Bl, { children: n.bookingNumber }),
        /* @__PURE__ */ h(zl, { $type: u(), children: g() })
      ] }),
      /* @__PURE__ */ h(Fl, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(Hl, { children: n.client })
    ] }),
    /* @__PURE__ */ W(Wl, { children: [
      /* @__PURE__ */ W(jl, { children: [
        /* @__PURE__ */ W(Or, { children: [
          /* @__PURE__ */ h(Ir, { children: l.startDate }),
          /* @__PURE__ */ W(Yr, { children: [
            /* @__PURE__ */ h(Rr, { children: n.startDate }),
            /* @__PURE__ */ h(Lr, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ W(Or, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Ir, { children: l.endDate }),
          /* @__PURE__ */ W(Yr, { children: [
            /* @__PURE__ */ h(Rr, { children: n.endDate }),
            /* @__PURE__ */ h(Lr, { children: n.endTime })
          ] })
        ] })
      ] }),
      S.length > 0 && /* @__PURE__ */ h(Zl, { children: S.map((v, k) => /* @__PURE__ */ W(Vl, { children: [
        /* @__PURE__ */ h(Gl, { children: v.label }),
        /* @__PURE__ */ h(Xl, { children: v.value })
      ] }, k)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ W(Nr, { children: [
        n.departureAddress && /* @__PURE__ */ W(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.salida }),
          /* @__PURE__ */ h(Tt, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ W(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.destino }),
          /* @__PURE__ */ h(Tt, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ W(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.regreso }),
          /* @__PURE__ */ h(Tt, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ W(Nr, { children: [
        n.serviceNotes && /* @__PURE__ */ W(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.serviceNotes }),
          /* @__PURE__ */ h(Tt, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ W(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.reservationNotes }),
          /* @__PURE__ */ h(Tt, { children: n.reservationNotes })
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
const Jl = b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, ql = b.div`
  position: absolute;
  height: ${Bn}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, Ql = b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Br = b.p`
  ${kt}
  ${$t}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, ed = b.p`
  ${kt}
  ${$t}
`, td = b.div`
  position: sticky;
  left: ${Re + 16}px;
  overflow: hidden;
`, nd = b.div`
  position: absolute;
  height: ${Bn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, rd = b.div`
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
`, od = b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, sd = b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, id = b.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, zr = b.div`
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
`, Fr = b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Hr = b.div`
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
`, Wr = b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, sn = b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, an = b.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, mt = b.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, jr = b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, ad = ({
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
  const a = Je(), d = (T) => {
    let f = 0;
    for (const y of l)
      y <= T && f++;
    return T * ye + f * Le;
  }, [u, g] = he(null), [S, v] = he(0), k = de((T = 400, f = 300) => {
    const x = t.width, D = 48, w = document.getElementById("react-scheduler");
    if (!w)
      return {
        x: r.x + x + 16,
        y: r.y
      };
    const $ = w.scrollLeft, H = w.scrollTop, q = w.clientWidth, O = w.clientHeight, C = r.x - $, P = r.y - H, B = {
      left: Re + 16,
      // Avoid left column
      right: q - 16,
      top: 16,
      bottom: O - 16
    }, I = B.right - (C + x), V = C - B.left, U = B.bottom - (P + D), ee = P - B.top;
    let re, R;
    return I >= T + 16 ? re = C + x + 16 : V >= T + 16 ? re = C - T - 16 : I >= V ? (re = C + x + 16, re + T > B.right && (re = B.right - T)) : (re = C - T - 16, re < B.left && (re = B.left)), U >= f + 16 ? R = P + D + 16 : ee >= f + 16 ? R = P - f - 16 : U >= ee ? (R = P + D + 16, R + f > B.bottom && (R = B.bottom - f)) : (R = P - f - 16, R < B.top && (R = B.top)), re = Math.max(B.left, Math.min(re, B.right - T)), R = Math.max(B.top, Math.min(R, B.bottom - f)), {
      x: re + $,
      y: R + H
    };
  }, [r.x, r.y, t.width]);
  xe(() => {
    s === "dragging" && e && S === 0 ? v(r.x) : s === "idle" && v(0);
  }, [s, e, r.x, S]), xe(() => {
    g(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const p = De(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const T = [];
    let f = 0;
    for (const y of i) {
      const x = Math.max(y.data.length, 1);
      if (y.capacity !== void 0 && e.totalPassengers > y.capacity)
        for (let D = 0; D < x; D++)
          T.push(f + D);
      f += x;
    }
    return T;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const Y = s === "animating", G = Mo(e.bgColor ?? ""), N = () => {
    if (!n)
      return "";
    const T = A(n.startDate).format("MMM D, HH:mm"), f = A(n.endDate).format("HH:mm");
    return `${T} - ${f}`;
  };
  return /* @__PURE__ */ W(Jl, { children: [
    p.map((T) => /* @__PURE__ */ h(
      sd,
      {
        style: {
          top: `${d(T)}px`,
          height: `${ye}px`
        }
      },
      T
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      od,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${d(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ W(Pe, { children: [
      /* @__PURE__ */ h(
        nd,
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
        rd,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ye - 48) / 2}px`
          },
          children: N()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      id,
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
      const T = k(400, 300);
      return /* @__PURE__ */ W(
        zr,
        {
          style: {
            left: `${T.x}px`,
            top: `${T.y}px`
          },
          children: [
            /* @__PURE__ */ W(Fr, { children: [
              /* @__PURE__ */ h(Hr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Wr, { children: n.conflicts.map((f, y) => {
              const x = A(n.startDate).format("YYYY-MM-DD"), D = A(n.endDate).format("YYYY-MM-DD"), w = A(f.event.startDate).format("YYYY-MM-DD"), $ = A(f.event.endDate).format("YYYY-MM-DD"), H = A(f.conflictStart).format("YYYY-MM-DD"), q = A(f.conflictEnd).format("YYYY-MM-DD"), O = x !== D, C = w !== $, P = H !== q, B = O ? A(n.startDate).format("MMM D, h:mm A") : A(n.startDate).format("h:mm A"), I = O ? A(n.endDate).format("MMM D, h:mm A") : A(n.endDate).format("h:mm A"), V = C ? A(f.event.startDate).format("MMM D, h:mm A") : A(f.event.startDate).format("h:mm A"), U = C ? A(f.event.endDate).format("MMM D, h:mm A") : A(f.event.endDate).format("h:mm A"), ee = P ? A(f.conflictStart).format("MMM D, h:mm A") : A(f.conflictStart).format("h:mm A"), re = P ? A(f.conflictEnd).format("MMM D, h:mm A") : A(f.conflictEnd).format("h:mm A"), R = P ? "" : A(f.conflictStart).format("MMM D"), F = n.startDate.getTime(), K = n.endDate.getTime(), ne = f.event.startDate.getTime(), M = f.event.endDate.getTime(), j = F >= ne && F < M, _ = K > ne && K <= M, Q = F <= ne && K >= M, z = ne <= F && M >= K;
              let L = !1, m = !1, X = !1, E = !1, Z = "";
              return Q || z ? (L = !0, m = !0, X = !0, E = !0, Z = `⚠️ ${a.conflicts.changeBoth}`) : j && _ ? (L = !0, m = !0, X = !0, E = !0, Z = `⚠️ ${a.conflicts.changeBoth}`) : j ? (L = !0, E = !0, Z = `⚠️ ${a.conflicts.changeStart}`) : _ && (m = !0, X = !0, Z = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ W(sn, { children: [
                /* @__PURE__ */ W(an, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ W(mt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  L ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: B }) : B,
                  " ",
                  a.conflicts.to,
                  " ",
                  m ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
                ] }),
                /* @__PURE__ */ W(mt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  X ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: V }) : V,
                  " ",
                  a.conflicts.to,
                  " ",
                  E ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: U }) : U
                ] }),
                /* @__PURE__ */ W(jr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  R && `${R}, `,
                  ee,
                  " - ",
                  re
                ] }),
                Z && /* @__PURE__ */ h(mt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: Z })
              ] }, y);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const T = k(400, 400);
      return /* @__PURE__ */ W(
        zr,
        {
          style: {
            left: `${T.x}px`,
            top: `${T.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ W(Fr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Hr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ W(Wr, { children: [
              (() => {
                const f = n.nearbyEvents.some((w) => w.position === "before"), y = n.nearbyEvents.some((w) => w.position === "after"), x = A(n.startDate).format("h:mm A"), D = A(n.endDate).format("h:mm A");
                return /* @__PURE__ */ W(sn, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ W(an, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(mt, { style: { fontWeight: 600 }, children: [
                    A(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: x }) : x,
                    " ",
                    a.conflicts.to,
                    " ",
                    y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: D }) : D
                  ] }),
                  /* @__PURE__ */ h(mt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, y) => {
                const x = A(f.event.startDate).format("YYYY-MM-DD"), D = A(f.event.endDate).format("YYYY-MM-DD"), w = x !== D, $ = w ? A(f.event.startDate).format("MMM D, h:mm A") : A(f.event.startDate).format("h:mm A"), H = w ? A(f.event.endDate).format("MMM D, h:mm A") : A(f.event.endDate).format("h:mm A"), q = A(f.event.startDate).format("MMM D"), O = Math.floor(f.timeGap / (1e3 * 60 * 60)), C = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), P = O > 0 ? `${O}h ${C}m` : `${C}m`, B = f.position === "after", I = f.position === "before";
                return /* @__PURE__ */ W(sn, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ W(an, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(mt, { children: [
                    !w && `${q}: `,
                    B ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: $ }) : $,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: H }) : H
                  ] }),
                  /* @__PURE__ */ W(jr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    P,
                    " ",
                    f.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, y);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      ql,
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
          color: G
        },
        children: /* @__PURE__ */ h(Ql, { children: /* @__PURE__ */ W(td, { children: [
          /* @__PURE__ */ h(Br, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Br, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(ed, { children: e.description })
        ] }) })
      }
    )
  ] });
}, cd = ad, ld = We`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, dd = b.div`
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
  animation: ${ld} 1.5s ease-in-out infinite;
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
`, ud = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  dd,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), fd = ud, hd = We`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, pd = b.div`
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
  animation: ${hd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, md = b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, gd = b.span`
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
`, yd = b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, vd = b.span`
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
const xd = b.div`
  display: flex;
  gap: 8px;
`, Zr = b.button`
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
`, bd = ({ selections: e, onConfirm: r, onClear: t }) => {
  var v;
  const o = Je().multiSelect, s = De(() => e.filter((k) => k.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", d = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", u = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const g = s > 0, S = /* @__PURE__ */ W(pd, { $hasConflicts: g, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ W(md, { children: [
      /* @__PURE__ */ W(gd, { $hasConflicts: g, children: [
        e.length,
        " ",
        i
      ] }),
      g && /* @__PURE__ */ W(yd, { children: [
        "⚠️ ",
        u
      ] }),
      /* @__PURE__ */ h(vd, { children: c })
    ] }),
    /* @__PURE__ */ W(xd, { children: [
      /* @__PURE__ */ W(Zr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ h(Zr, { variant: "primary", $hasConflicts: g, onClick: r, children: g ? `⚠️ ${d}` : `✓ ${a}` })
    ] })
  ] });
  return Ao(S, document.body);
}, wd = bd, Sd = We`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Cd = b.div`
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
  animation: ${Sd} 0.2s ease-out;
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
`, Md = b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, kd = b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, $d = b.button`
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
`, Dd = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, l] = he(null), [a, d] = he({ x: 0, y: 0 }), u = fe(null), g = De(() => {
    switch (t) {
      case 0:
        return Be * 7;
      case 1:
        return _e;
      case 2:
        return Ie;
      default:
        return _e;
    }
  }, [t]), S = De(() => A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), v = De(() => e.map((y, x) => {
    let D = 0, w = !1;
    for (const V of r) {
      if (V.id === y.resourceId) {
        w = !0;
        break;
      }
      D += Math.max(V.data.length, 1);
    }
    if (!w)
      return null;
    const $ = A(y.startDate), H = A(y.endDate);
    let q, O;
    switch (t) {
      case 0:
        q = Math.floor($.diff(S, "days") / 7), O = Math.max(1, Math.ceil(H.diff($, "days") / 7) + 1);
        break;
      case 1:
        q = $.diff(S, "days"), O = Math.max(1, H.diff($, "days") + 1);
        break;
      case 2:
        q = $.diff(S, "hours"), O = Math.max(1, H.diff($, "hours") + 1);
        break;
      default:
        q = 0, O = 1;
    }
    const C = q * g;
    let P = 0;
    for (const V of i)
      V <= D && P++;
    const B = D * ye + P * Le, I = O * g;
    return {
      index: x,
      selection: y,
      x: C,
      y: B,
      width: I,
      height: ye
    };
  }), [e, r, t, S, g]), k = (y, x) => {
    const D = A(y).format("MMM D"), w = A(x).format("MMM D");
    return D === w ? D : `${D} - ${w}`;
  }, p = (y) => !y.hasConflict || !y.conflicts ? "" : `⚠️ Conflicts with:
${y.conflicts.map((D) => {
    const w = (D.overlapDuration / 36e5).toFixed(1);
    return `• ${D.event.title} (${w}h overlap)`;
  }).join(`
`)}`, Y = de(
    (y) => {
      let x = 0;
      for (const D of r) {
        const w = Math.max(D.data.length, 1);
        if (y >= x * ye && y < (x + w) * ye)
          return {
            resourceId: D.id,
            resourceLabel: D.label
          };
        x += w;
      }
      return null;
    },
    [r]
  ), G = de(
    (y) => {
      const x = Math.floor(y / g);
      switch (t) {
        case 0:
          return S.add(x * 7, "days").toDate();
        case 1:
          return S.add(x, "days").toDate();
        case 2:
          return S.add(x, "hours").toDate();
        default:
          return S.toDate();
      }
    },
    [t, S, g]
  ), N = de(
    (y, x) => {
      !s || (y.preventDefault(), y.stopPropagation(), !v[x]) || (u.current = { x: y.clientX, y: y.clientY }, l(x), d({ x: 0, y: 0 }));
    },
    [s, v]
  ), T = de(
    (y) => {
      if (c === null || !u.current)
        return;
      const x = y.clientX - u.current.x, D = y.clientY - u.current.y, w = Math.round(x / g) * g, $ = Math.round(D / ye) * ye;
      d({ x: w, y: $ });
    },
    [c, g]
  ), f = de(() => {
    if (c === null || !s) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const y = v[c];
    if (!y) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const x = y.x + a.x, D = y.y + a.y, w = Y(D + ye / 2);
    if (!w) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const $ = G(x), H = e[c], q = H.endDate.getTime() - H.startDate.getTime(), O = new Date($.getTime() + q);
    s(c, {
      startDate: $,
      endDate: O,
      resourceId: w.resourceId,
      resourceLabel: w.resourceLabel
    }), l(null), d({ x: 0, y: 0 }), u.current = null;
  }, [c, a, v, e, s, Y, G]);
  return xe(() => {
    if (c !== null)
      return document.addEventListener("mousemove", T), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", f);
      };
  }, [c, T, f]), /* @__PURE__ */ h(Pe, { children: v.map((y) => {
    if (!y)
      return null;
    const x = y.selection.hasConflict || !1, D = c === y.index, w = D ? y.x + a.x : y.x, $ = D ? y.y + a.y : y.y;
    return /* @__PURE__ */ W(
      Cd,
      {
        $hasConflict: x,
        $isDragging: D,
        style: {
          left: w,
          top: $,
          width: y.width,
          height: y.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (H) => N(H, y.index),
        children: [
          x && /* @__PURE__ */ h(kd, { title: p(y.selection), children: "⚠️" }),
          /* @__PURE__ */ h(Md, { $hasConflict: x, children: k(y.selection.startDate, y.selection.endDate) }),
          /* @__PURE__ */ h(
            $d,
            {
              onClick: (H) => {
                H.stopPropagation(), o(y.index);
              },
              onMouseDown: (H) => H.stopPropagation(),
              title: x ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      y.index
    );
  }) });
}, Ed = Dd, ko = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? Be * 7 : _e, s = A().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, _d = b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, Td = ({ zoom: e, startDate: r }) => {
  const { cols: t } = je(), n = De(
    () => ko(A(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(_d, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, Ad = Td, Vt = "#6b5fc7", Pd = b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px dashed ${Vt};
  border-right: 1px dashed ${Vt}55;
  background: ${Vt}12;
`, Od = b.span`
  position: absolute;
  top: 3px;
  left: 0;
  transform: translateX(-1px);
  font-size: 7.5px;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: #fff;
  background: ${Vt};
  padding: 0 3px;
  border-radius: 3px;
`, Id = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = je(), o = De(() => !n || n.isSame(A(), "day") ? null : ko(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(Pd, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0, children: /* @__PURE__ */ h(Od, { children: "IR" }) }) : null;
}, Yd = Id;
export {
  zd as Scheduler
};
