var Eo = Object.defineProperty;
var _o = (e, r, t) => r in e ? Eo(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Wn = (e, r, t) => (_o(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as B, Fragment as Te } from "react/jsx-runtime";
import * as se from "react";
import it, { useRef as he, useContext as tt, useMemo as $e, useLayoutEffect as Kt, useDebugValue as jn, createElement as To, createContext as Zr, useState as pe, useCallback as le, useEffect as ye, forwardRef as Pn, useImperativeHandle as Vr } from "react";
import { createPortal as Ao } from "react-dom";
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pt = {}, Po = {
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
var Zn;
function Oo() {
  if (Zn)
    return we;
  Zn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
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
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === n || m === a || m === d || m === S || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === u || m.$$typeof === s || m.$$typeof === i || m.$$typeof === l || m.$$typeof === b || m.getModuleId !== void 0);
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
var Vn;
function Io() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), b = !1, D = !1, m = !1, Y = !1, X = !1, z;
    z = Symbol.for("react.module.reference");
    function P(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === t || E === o || X || E === n || E === a || E === d || Y || E === S || b || D || m || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === u || E.$$typeof === s || E.$$typeof === i || E.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === z || E.getModuleId !== void 0));
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
                var U = ee && ee.$$typeof;
                switch (U) {
                  case c:
                  case i:
                  case l:
                  case y:
                  case u:
                  case s:
                    return U;
                  default:
                    return Z;
                }
            }
          case r:
            return Z;
        }
      }
    }
    var v = i, g = s, $ = e, w = l, k = t, V = y, q = u, A = r, C = o, T = n, L = a, I = d, R = !1, K = !1;
    function ne(E) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(E) {
      return K || (K = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(E) {
      return f(E) === i;
    }
    function W(E) {
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
    function H(E) {
      return f(E) === o;
    }
    function N(E) {
      return f(E) === n;
    }
    function p(E) {
      return f(E) === a;
    }
    function G(E) {
      return f(E) === d;
    }
    Se.ContextConsumer = v, Se.ContextProvider = g, Se.Element = $, Se.ForwardRef = w, Se.Fragment = k, Se.Lazy = V, Se.Memo = q, Se.Portal = A, Se.Profiler = C, Se.StrictMode = T, Se.Suspense = L, Se.SuspenseList = I, Se.isAsyncMode = ne, Se.isConcurrentMode = ie, Se.isContextConsumer = F, Se.isContextProvider = W, Se.isElement = J, Se.isForwardRef = te, Se.isFragment = M, Se.isLazy = j, Se.isMemo = _, Se.isPortal = Q, Se.isProfiler = H, Se.isStrictMode = N, Se.isSuspense = p, Se.isSuspenseList = G, Se.isValidElementType = P, Se.typeOf = f;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Oo() : e.exports = Io();
})(Po);
function Yo(e) {
  function r(F, W, J, te, M) {
    for (var j = 0, _ = 0, Q = 0, H = 0, N, p, G = 0, E = 0, Z, ee = Z = N = 0, U = 0, ce = 0, ge = 0, ue = 0, xe = J.length, De = xe - 1, be, ae = "", me = "", Ae = "", Le = "", fe; U < xe; ) {
      if (p = J.charCodeAt(U), U === De && _ + H + Q + j !== 0 && (_ !== 0 && (p = _ === 47 ? 10 : 47), H = Q = j = 0, xe++, De++), _ + H + Q + j === 0) {
        if (U === De && (0 < ce && (ae = ae.replace(y, "")), 0 < ae.trim().length)) {
          switch (p) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ae += J.charAt(U);
          }
          p = 59;
        }
        switch (p) {
          case 123:
            for (ae = ae.trim(), N = ae.charCodeAt(0), Z = 1, ue = ++U; U < xe; ) {
              switch (p = J.charCodeAt(U)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (p = J.charCodeAt(U + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ee = U + 1; ee < De; ++ee)
                          switch (J.charCodeAt(ee)) {
                            case 47:
                              if (p === 42 && J.charCodeAt(ee - 1) === 42 && U + 2 !== ee) {
                                U = ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (p === 47) {
                                U = ee + 1;
                                break e;
                              }
                          }
                        U = ee;
                      }
                  }
                  break;
                case 91:
                  p++;
                case 40:
                  p++;
                case 34:
                case 39:
                  for (; U++ < De && J.charCodeAt(U) !== p; )
                    ;
              }
              if (Z === 0)
                break;
              U++;
            }
            switch (Z = J.substring(ue, U), N === 0 && (N = (ae = ae.replace(u, "").trim()).charCodeAt(0)), N) {
              case 64:
                switch (0 < ce && (ae = ae.replace(y, "")), p = ae.charCodeAt(1), p) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = W;
                    break;
                  default:
                    ce = L;
                }
                if (Z = r(W, ce, Z, p, M + 1), ue = Z.length, 0 < R && (ce = t(L, ae, ge), fe = c(3, Z, ce, W, A, q, ue, p, M, te), ae = ce.join(""), fe !== void 0 && (ue = (Z = fe.trim()).length) === 0 && (p = 0, Z = "")), 0 < ue)
                  switch (p) {
                    case 115:
                      ae = ae.replace(v, i);
                    case 100:
                    case 109:
                    case 45:
                      Z = ae + "{" + Z + "}";
                      break;
                    case 107:
                      ae = ae.replace(X, "$1 $2"), Z = ae + "{" + Z + "}", Z = T === 1 || T === 2 && s("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                      break;
                    default:
                      Z = ae + Z, te === 112 && (Z = (me += Z, ""));
                  }
                else
                  Z = "";
                break;
              default:
                Z = r(W, t(W, ae, ge), Z, te, M + 1);
            }
            Ae += Z, Z = ge = ce = ee = N = 0, ae = "", p = J.charCodeAt(++U);
            break;
          case 125:
          case 59:
            if (ae = (0 < ce ? ae.replace(y, "") : ae).trim(), 1 < (ue = ae.length))
              switch (ee === 0 && (N = ae.charCodeAt(0), N === 45 || 96 < N && 123 > N) && (ue = (ae = ae.replace(" ", ":")).length), 0 < R && (fe = c(1, ae, W, F, A, q, me.length, te, M, te)) !== void 0 && (ue = (ae = fe.trim()).length) === 0 && (ae = "\0\0"), N = ae.charCodeAt(0), p = ae.charCodeAt(1), N) {
                case 0:
                  break;
                case 64:
                  if (p === 105 || p === 99) {
                    Le += ae + J.charAt(U);
                    break;
                  }
                default:
                  ae.charCodeAt(ue - 1) !== 58 && (me += o(ae, N, p, ae.charCodeAt(2)));
              }
            ge = ce = ee = N = 0, ae = "", p = J.charCodeAt(++U);
        }
      }
      switch (p) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + N === 0 && te !== 107 && 0 < ae.length && (ce = 1, ae += "\0"), 0 < R * ne && c(0, ae, W, F, A, q, me.length, te, M, te), q = 1, A++;
          break;
        case 59:
        case 125:
          if (_ + H + Q + j === 0) {
            q++;
            break;
          }
        default:
          switch (q++, be = J.charAt(U), p) {
            case 9:
            case 32:
              if (H + j + _ === 0)
                switch (G) {
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
              H + _ + j === 0 && (ce = ge = 1, be = "\f" + be);
              break;
            case 108:
              if (H + _ + j + C === 0 && 0 < ee)
                switch (U - ee) {
                  case 2:
                    G === 112 && J.charCodeAt(U - 3) === 58 && (C = G);
                  case 8:
                    E === 111 && (C = E);
                }
              break;
            case 58:
              H + _ + j === 0 && (ee = U);
              break;
            case 44:
              _ + Q + H + j === 0 && (ce = 1, be += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (H = H === p ? 0 : H === 0 ? p : H);
              break;
            case 91:
              H + _ + Q === 0 && j++;
              break;
            case 93:
              H + _ + Q === 0 && j--;
              break;
            case 41:
              H + _ + j === 0 && Q--;
              break;
            case 40:
              if (H + _ + j === 0) {
                if (N === 0)
                  switch (2 * G + 3 * E) {
                    case 533:
                      break;
                    default:
                      N = 1;
                  }
                Q++;
              }
              break;
            case 64:
              _ + Q + H + j + ee + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + j + Q))
                switch (_) {
                  case 0:
                    switch (2 * p + 3 * J.charCodeAt(U + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        ue = U, _ = 42;
                    }
                    break;
                  case 42:
                    p === 47 && G === 42 && ue + 2 !== U && (J.charCodeAt(ue + 2) === 33 && (me += J.substring(ue, U + 1)), be = "", _ = 0);
                }
          }
          _ === 0 && (ae += be);
      }
      E = G, G = p, U++;
    }
    if (ue = me.length, 0 < ue) {
      if (ce = W, 0 < R && (fe = c(2, me, ce, F, A, q, ue, te, M, te), fe !== void 0 && (me = fe).length === 0))
        return Le + me + Ae;
      if (me = ce.join(",") + "{" + me + "}", T * C !== 0) {
        switch (T !== 2 || s(me, 2) || (C = 0), C) {
          case 111:
            me = me.replace(P, ":-moz-$1") + me;
            break;
          case 112:
            me = me.replace(z, "::-webkit-input-$1") + me.replace(z, "::-moz-$1") + me.replace(z, ":-ms-input-$1") + me;
        }
        C = 0;
      }
    }
    return Le + me + Ae;
  }
  function t(F, W, J) {
    var te = W.trim().split(m);
    W = te;
    var M = te.length, j = F.length;
    switch (j) {
      case 0:
      case 1:
        var _ = 0;
        for (F = j === 0 ? "" : F[0] + " "; _ < M; ++_)
          W[_] = n(F, W[_], J).trim();
        break;
      default:
        var Q = _ = 0;
        for (W = []; _ < M; ++_)
          for (var H = 0; H < j; ++H)
            W[Q++] = n(F[H] + " ", te[_], J).trim();
    }
    return W;
  }
  function n(F, W, J) {
    var te = W.charCodeAt(0);
    switch (33 > te && (te = (W = W.trim()).charCodeAt(0)), te) {
      case 38:
        return W.replace(Y, "$1" + F.trim());
      case 58:
        return F.trim() + W.replace(Y, "$1" + F.trim());
      default:
        if (0 < 1 * J && 0 < W.indexOf("\f"))
          return W.replace(Y, (F.charCodeAt(0) === 58 ? "" : "$1") + F.trim());
    }
    return F + W;
  }
  function o(F, W, J, te) {
    var M = F + ";", j = 2 * W + 3 * J + 4 * te;
    if (j === 944) {
      F = M.indexOf(":", 9) + 1;
      var _ = M.substring(F, M.length - 1).trim();
      return _ = M.substring(0, F).trim() + _ + ";", T === 1 || T === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (T === 0 || T === 2 && !s(M, 1))
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
        return b.test(M) ? M.replace(S, ":-webkit-") + M.replace(S, ":-moz-") + M : M;
      case 1e3:
        switch (_ = M.substring(13).trim(), W = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(W)) {
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
        switch (W = (M = F).length - 10, _ = (M.charCodeAt(W) === 33 ? M.substring(0, W) : M).substring(F.indexOf(":", 7) + 1).trim(), j = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
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
        if (k.test(F) === !0)
          return (_ = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(F.replace("stretch", "fill-available"), W, J, te).replace(":fill-available", ":stretch") : M.replace(_, "-webkit-" + _) + M.replace(_, "-moz-" + _.replace("fill-", "")) + M;
        break;
      case 962:
        if (M = "-webkit-" + M + (M.charCodeAt(5) === 102 ? "-ms-" + M : "") + M, J + te === 211 && M.charCodeAt(13) === 105 && 0 < M.indexOf("transform", 10))
          return M.substring(0, M.indexOf(";", 27) + 1).replace(D, "$1-webkit-$2") + M;
    }
    return M;
  }
  function s(F, W) {
    var J = F.indexOf(W === 1 ? ":" : "{"), te = F.substring(0, W !== 3 ? J : 10);
    return J = F.substring(J + 1, F.length - 1), K(W !== 2 ? te : te.replace(w, "$1"), J, W);
  }
  function i(F, W) {
    var J = o(W, W.charCodeAt(0), W.charCodeAt(1), W.charCodeAt(2));
    return J !== W + ";" ? J.replace(g, " or ($1)").substring(4) : "(" + W + ")";
  }
  function c(F, W, J, te, M, j, _, Q, H, N) {
    for (var p = 0, G = W, E; p < R; ++p)
      switch (E = I[p].call(d, F, G, J, te, M, j, _, Q, H, N)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          G = E;
      }
    if (G !== W)
      return G;
  }
  function l(F) {
    switch (F) {
      case void 0:
      case null:
        R = I.length = 0;
        break;
      default:
        if (typeof F == "function")
          I[R++] = F;
        else if (typeof F == "object")
          for (var W = 0, J = F.length; W < J; ++W)
            l(F[W]);
        else
          ne = !!F | 0;
    }
    return l;
  }
  function a(F) {
    return F = F.prefix, F !== void 0 && (K = null, F ? typeof F != "function" ? T = 1 : (T = 2, K = F) : T = 0), a;
  }
  function d(F, W) {
    var J = F;
    if (33 > J.charCodeAt(0) && (J = J.trim()), ie = J, J = [ie], 0 < R) {
      var te = c(-1, W, J, J, A, q, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (W = te);
    }
    var M = r(L, J, W, 0, 0);
    return 0 < R && (te = c(-2, M, J, J, A, q, M.length, 0, 0, 0), te !== void 0 && (M = te)), ie = "", C = 0, q = A = 1, M;
  }
  var u = /^\0+/g, y = /[\0\r\f]/g, S = /: */g, b = /zoo|gra/, D = /([,: ])(transform)/g, m = /,\r+?/g, Y = /([\t\r\n ])*\f?&/g, X = /@(k\w+)\s*(\S*)\s*/, z = /::(place)/g, P = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, v = /\(\s*(.*)\s*\)/g, g = /([\s\S]*?);/g, $ = /-self|flex-/g, w = /[^]*?(:[rp][el]a[\w-]+)[^]*/, k = /stretch|:\s*\w+\-(?:conte|avail)/, V = /([^-])(image-set\()/, q = 1, A = 1, C = 0, T = 1, L = [], I = [], R = 0, K = null, ne = 0, ie = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var Lo = {
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
function Ro(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var No = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gn = /* @__PURE__ */ Ro(
  function(e) {
    return No.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), cn = {}, Fo = {
  get exports() {
    return cn;
  },
  set exports(e) {
    cn = e;
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
var Xn;
function zo() {
  if (Xn)
    return Ce;
  Xn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, X = e ? Symbol.for("react.scope") : 60119;
  function z(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
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
                case b:
                case S:
                case i:
                  return f;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  function P(f) {
    return z(f) === a;
  }
  return Ce.AsyncMode = l, Ce.ConcurrentMode = a, Ce.ContextConsumer = c, Ce.ContextProvider = i, Ce.Element = r, Ce.ForwardRef = d, Ce.Fragment = n, Ce.Lazy = b, Ce.Memo = S, Ce.Portal = t, Ce.Profiler = s, Ce.StrictMode = o, Ce.Suspense = u, Ce.isAsyncMode = function(f) {
    return P(f) || z(f) === l;
  }, Ce.isConcurrentMode = P, Ce.isContextConsumer = function(f) {
    return z(f) === c;
  }, Ce.isContextProvider = function(f) {
    return z(f) === i;
  }, Ce.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, Ce.isForwardRef = function(f) {
    return z(f) === d;
  }, Ce.isFragment = function(f) {
    return z(f) === n;
  }, Ce.isLazy = function(f) {
    return z(f) === b;
  }, Ce.isMemo = function(f) {
    return z(f) === S;
  }, Ce.isPortal = function(f) {
    return z(f) === t;
  }, Ce.isProfiler = function(f) {
    return z(f) === s;
  }, Ce.isStrictMode = function(f) {
    return z(f) === o;
  }, Ce.isSuspense = function(f) {
    return z(f) === u;
  }, Ce.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === a || f === s || f === o || f === u || f === y || typeof f == "object" && f !== null && (f.$$typeof === b || f.$$typeof === S || f.$$typeof === i || f.$$typeof === c || f.$$typeof === d || f.$$typeof === m || f.$$typeof === Y || f.$$typeof === X || f.$$typeof === D);
  }, Ce.typeOf = z, Ce;
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
var Un;
function Ho() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, X = e ? Symbol.for("react.scope") : 60119;
    function z(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === a || p === s || p === o || p === u || p === y || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === S || p.$$typeof === i || p.$$typeof === c || p.$$typeof === d || p.$$typeof === m || p.$$typeof === Y || p.$$typeof === X || p.$$typeof === D);
    }
    function P(p) {
      if (typeof p == "object" && p !== null) {
        var G = p.$$typeof;
        switch (G) {
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
                  case b:
                  case S:
                  case i:
                    return Z;
                  default:
                    return G;
                }
            }
          case t:
            return G;
        }
      }
    }
    var f = l, v = a, g = c, $ = i, w = r, k = d, V = n, q = b, A = S, C = t, T = s, L = o, I = u, R = !1;
    function K(p) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(p) || P(p) === l;
    }
    function ne(p) {
      return P(p) === a;
    }
    function ie(p) {
      return P(p) === c;
    }
    function F(p) {
      return P(p) === i;
    }
    function W(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function J(p) {
      return P(p) === d;
    }
    function te(p) {
      return P(p) === n;
    }
    function M(p) {
      return P(p) === b;
    }
    function j(p) {
      return P(p) === S;
    }
    function _(p) {
      return P(p) === t;
    }
    function Q(p) {
      return P(p) === s;
    }
    function H(p) {
      return P(p) === o;
    }
    function N(p) {
      return P(p) === u;
    }
    Me.AsyncMode = f, Me.ConcurrentMode = v, Me.ContextConsumer = g, Me.ContextProvider = $, Me.Element = w, Me.ForwardRef = k, Me.Fragment = V, Me.Lazy = q, Me.Memo = A, Me.Portal = C, Me.Profiler = T, Me.StrictMode = L, Me.Suspense = I, Me.isAsyncMode = K, Me.isConcurrentMode = ne, Me.isContextConsumer = ie, Me.isContextProvider = F, Me.isElement = W, Me.isForwardRef = J, Me.isFragment = te, Me.isLazy = M, Me.isMemo = j, Me.isPortal = _, Me.isProfiler = Q, Me.isStrictMode = H, Me.isSuspense = N, Me.isValidElementType = z, Me.typeOf = P;
  }()), Me;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = zo() : e.exports = Ho();
})(Fo);
var On = cn, Bo = {
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
}, Gr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, In = {};
In[On.ForwardRef] = jo;
In[On.Memo] = Gr;
function Kn(e) {
  return On.isMemo(e) ? Gr : In[e.$$typeof] || Bo;
}
var Zo = Object.defineProperty, Vo = Object.getOwnPropertyNames, Jn = Object.getOwnPropertySymbols, Go = Object.getOwnPropertyDescriptor, Xo = Object.getPrototypeOf, qn = Object.prototype;
function Xr(e, r, t) {
  if (typeof r != "string") {
    if (qn) {
      var n = Xo(r);
      n && n !== qn && Xr(e, n, t);
    }
    var o = Vo(r);
    Jn && (o = o.concat(Jn(r)));
    for (var s = Kn(e), i = Kn(r), c = 0; c < o.length; ++c) {
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
var Uo = Xr;
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
var Qn = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, ln = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Pt.typeOf(e);
}, jt = Object.freeze([]), qe = Object.freeze({});
function xt(e) {
  return typeof e == "function";
}
function dn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Yn(e) {
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
function Ge(e) {
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
        (i <<= 1) < 0 && Ge(16, "" + t);
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
}(), Bt = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Map(), At = 1, Nt = function(e) {
  if (Bt.has(e))
    return Bt.get(e);
  for (; Zt.has(At); )
    At++;
  var r = At++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ge(16, "" + r), Bt.set(e, r), Zt.set(r, e), r;
}, ts = function(e) {
  return Zt.get(e);
}, ns = function(e, r) {
  r >= At && (At = r + 1), Bt.set(e, r), Zt.set(r, e);
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
}, Ur = function(e) {
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
    var n = this.element = Ur(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Ge(17);
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
    var n = this.element = Ur(t);
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
}(), er = Ln, us = { isServer: !Ln, useCSSOMInjection: !Ko }, Vt = function() {
  function e(t, n, o) {
    t === void 0 && (t = qe), n === void 0 && (n = {}), this.options = We({}, us, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Ln && er && (er = !1, function(s) {
      for (var i = document.querySelectorAll(rs), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(bt) !== "active" && (is(s, a), a.parentNode && a.parentNode.removeChild(a));
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
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new ds(i) : s ? new cs(i) : new ls(i), new es(t)));
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
        var c = ts(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var d = bt + ".g" + i + '[id="' + c + '"]', u = "";
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
}(), fs = /(a)(d)/gi, tr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function un(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = tr(r % 52) + t;
  return (tr(r % 52) + t).replace(fs, "$1-$2");
}
var st = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Kr = function(e) {
  return st(5381, e);
};
function Jr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (xt(t) && !Yn(t))
      return !1;
  }
  return !0;
}
var hs = Kr("5.3.8"), ps = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Jr(r), this.componentId = t, this.baseHash = st(hs, t), this.baseStyle = n, Vt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = at(this.rules, r, t, n).join(""), c = un(st(this.baseHash, i) >>> 0);
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
          var b = at(S, r, t, n), D = Array.isArray(b) ? b.join("") : b;
          d = st(d, D + y), u += D;
        }
      }
      if (u) {
        var m = un(d >>> 0);
        if (!t.hasNameForId(o, m)) {
          var Y = n(u, "." + m, void 0, o);
          t.insertRules(o, m, Y);
        }
        s.push(m);
      }
    }
    return s.join(" ");
  }, e;
}(), ms = /^\s*\/\/.*$/gm, gs = [":", "[", ".", "#"];
function ys(e) {
  var r, t, n, o, s = e === void 0 ? qe : e, i = s.options, c = i === void 0 ? qe : i, l = s.plugins, a = l === void 0 ? jt : l, d = new Yo(c), u = [], y = function(D) {
    function m(Y) {
      if (Y)
        try {
          D(Y + "}");
        } catch {
        }
    }
    return function(Y, X, z, P, f, v, g, $, w, k) {
      switch (Y) {
        case 1:
          if (w === 0 && X.charCodeAt(0) === 64)
            return D(X + ";"), "";
          break;
        case 2:
          if ($ === 0)
            return X + "/*|*/";
          break;
        case 3:
          switch ($) {
            case 102:
            case 112:
              return D(z[0] + X), "";
            default:
              return X + (k === 0 ? "/*|*/" : "");
          }
        case -2:
          X.split("/*|*/}").forEach(m);
      }
    };
  }(function(D) {
    u.push(D);
  }), S = function(D, m, Y) {
    return m === 0 && gs.indexOf(Y[t.length]) !== -1 || Y.match(o) ? D : "." + r;
  };
  function b(D, m, Y, X) {
    X === void 0 && (X = "&");
    var z = D.replace(ms, ""), P = m && Y ? Y + " " + m + " { " + z + " }" : z;
    return r = X, t = m, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(Y || !m ? "" : m, P);
  }
  return d.use([].concat(a, [function(D, m, Y) {
    D === 2 && Y.length && Y[0].lastIndexOf(t) > 0 && (Y[0] = Y[0].replace(n, S));
  }, y, function(D) {
    if (D === -2) {
      var m = u;
      return u = [], m;
    }
  }])), b.hash = a.length ? a.reduce(function(D, m) {
    return m.name || Ge(15), st(D, m.name);
  }, 5381).toString() : "", b;
}
var qr = it.createContext();
qr.Consumer;
var Qr = it.createContext(), vs = (Qr.Consumer, new Vt()), fn = ys();
function eo() {
  return tt(qr) || vs;
}
function to() {
  return tt(Qr) || fn;
}
var no = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = fn);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ge(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = fn), this.name + r.hash;
  }, e;
}(), xs = /([A-Z])/, bs = /([A-Z])/g, ws = /^ms-/, Ss = function(e) {
  return "-" + e.toLowerCase();
};
function nr(e) {
  return xs.test(e) ? e.replace(bs, Ss).replace(ws, "-ms-") : e;
}
var rr = function(e) {
  return e == null || e === !1 || e === "";
};
function at(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = at(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (rr(e))
    return "";
  if (Yn(e))
    return "." + e.styledComponentId;
  if (xt(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && Pt.isElement(l) && console.warn(dn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), at(l, r, t, n);
  }
  var a;
  return e instanceof no ? t ? (e.inject(t, n), e.getName(n)) : e : ln(e) ? function d(u, y) {
    var S, b, D = [];
    for (var m in u)
      u.hasOwnProperty(m) && !rr(u[m]) && (Array.isArray(u[m]) && u[m].isCss || xt(u[m]) ? D.push(nr(m) + ":", u[m], ";") : ln(u[m]) ? D.push.apply(D, d(u[m], m)) : D.push(nr(m) + ": " + (S = m, (b = u[m]) == null || typeof b == "boolean" || b === "" ? "" : typeof b != "number" || b === 0 || S in Lo ? String(b).trim() : b + "px") + ";"));
    return y ? [y + " {"].concat(D, ["}"]) : D;
  }(e) : e.toString();
}
var or = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Mt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return xt(e) || ln(e) ? or(at(Qn(jt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : or(at(Qn(e, t)));
}
var sr = /invalid hook call/i, Ft = /* @__PURE__ */ new Set(), ro = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (sr.test(s))
          o = !1, Ft.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(c));
        }
      }, he(), o && !Ft.has(t) && (console.warn(t), Ft.add(t));
    } catch (s) {
      sr.test(s.message) && Ft.delete(t);
    } finally {
      console.error = n;
    }
  }
}, oo = function(e, r, t) {
  return t === void 0 && (t = qe), e.theme !== t.theme && e.theme || r || t.theme;
}, Cs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ms = /(^-|-$)/g;
function en(e) {
  return e.replace(Cs, "-").replace(Ms, "");
}
var Rn = function(e) {
  return un(Kr(e) >>> 0);
};
function zt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var hn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ks = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function $s(e, r, t) {
  var n = e[t];
  hn(r) && hn(n) ? so(n, r) : e[t] = r;
}
function so(e) {
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
var wt = it.createContext();
wt.Consumer;
function Ds(e) {
  var r = tt(wt), t = $e(function() {
    return function(n, o) {
      if (!n)
        return Ge(14);
      if (xt(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ge(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Ge(8) : o ? We({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? it.createElement(wt.Provider, { value: t }, e.children) : null;
}
var tn = {};
function io(e, r, t) {
  var n = Yn(e), o = !zt(e), s = r.attrs, i = s === void 0 ? jt : s, c = r.componentId, l = c === void 0 ? function(X, z) {
    var P = typeof X != "string" ? "sc" : en(X);
    tn[P] = (tn[P] || 0) + 1;
    var f = P + "-" + Rn("5.3.8" + P + tn[P]);
    return z ? z + "-" + f : f;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(X) {
    return zt(X) ? "styled." + X : "Styled(" + dn(X) + ")";
  }(e) : a, u = r.displayName && r.componentId ? en(r.displayName) + "-" + r.componentId : r.componentId || l, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, S = r.shouldForwardProp;
  n && e.shouldForwardProp && (S = r.shouldForwardProp ? function(X, z, P) {
    return e.shouldForwardProp(X, z, P) && r.shouldForwardProp(X, z, P);
  } : e.shouldForwardProp);
  var b, D = new ps(t, u, n ? e.componentStyle : void 0), m = D.isStatic && i.length === 0, Y = function(X, z) {
    return function(P, f, v, g) {
      var $ = P.attrs, w = P.componentStyle, k = P.defaultProps, V = P.foldedComponentIds, q = P.shouldForwardProp, A = P.styledComponentId, C = P.target;
      process.env.NODE_ENV !== "production" && jn(A);
      var T = function(te, M, j) {
        te === void 0 && (te = qe);
        var _ = We({}, M, { theme: te }), Q = {};
        return j.forEach(function(H) {
          var N, p, G, E = H;
          for (N in xt(E) && (E = E(_)), E)
            _[N] = Q[N] = N === "className" ? (p = Q[N], G = E[N], p && G ? p + " " + G : p || G) : E[N];
        }), [_, Q];
      }(oo(f, tt(wt), k) || qe, f, $), L = T[0], I = T[1], R = function(te, M, j, _) {
        var Q = eo(), H = to(), N = M ? te.generateAndInjectStyles(qe, Q, H) : te.generateAndInjectStyles(j, Q, H);
        return process.env.NODE_ENV !== "production" && jn(N), process.env.NODE_ENV !== "production" && !M && _ && _(N), N;
      }(w, g, L, process.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), K = v, ne = I.$as || f.$as || I.as || f.as || C, ie = zt(ne), F = I !== f ? We({}, f, {}, I) : f, W = {};
      for (var J in F)
        J[0] !== "$" && J !== "as" && (J === "forwardedAs" ? W.as = F[J] : (q ? q(J, Gn, ne) : !ie || Gn(J)) && (W[J] = F[J]));
      return f.style && I.style !== f.style && (W.style = We({}, f.style, {}, I.style)), W.className = Array.prototype.concat(V, A, R !== A ? R : null, f.className, I.className).filter(Boolean).join(" "), W.ref = K, To(ne, W);
    }(b, X, z, m);
  };
  return Y.displayName = d, (b = it.forwardRef(Y)).attrs = y, b.componentStyle = D, b.displayName = d, b.shouldForwardProp = S, b.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : jt, b.styledComponentId = u, b.target = n ? e.target : e, b.withComponent = function(X) {
    var z = r.componentId, P = function(v, g) {
      if (v == null)
        return {};
      var $, w, k = {}, V = Object.keys(v);
      for (w = 0; w < V.length; w++)
        $ = V[w], g.indexOf($) >= 0 || (k[$] = v[$]);
      return k;
    }(r, ["componentId"]), f = z && z + "-" + (zt(X) ? X : en(dn(X)));
    return io(X, We({}, P, { attrs: y, componentId: f }), t);
  }, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(X) {
    this._foldedDefaultProps = n ? so({}, e.defaultProps, X) : X;
  } }), process.env.NODE_ENV !== "production" && (ro(d, u), b.warnTooManyClasses = function(X, z) {
    var P = {}, f = !1;
    return function(v) {
      if (!f && (P[v] = !0, Object.keys(P).length >= 200)) {
        var g = z ? ' with the id of "' + z + '"' : "";
        console.warn("Over 200 classes were generated for component " + X + g + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, P = {};
      }
    };
  }(d, u)), b.toString = function() {
    return "." + b.styledComponentId;
  }, o && Uo(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), b;
}
var pn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = qe), !Pt.isValidElementType(n))
      return Ge(1, String(n));
    var s = function() {
      return t(n, o, Mt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, We({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, We({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(io, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  pn[e] = pn(e);
});
var Es = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Jr(t), Vt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(at(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && Vt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function _s(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Mt.apply(void 0, [e].concat(t)), s = "sc-global-" + Rn(JSON.stringify(o)), i = new Es(o, s);
  function c(a) {
    var d = eo(), u = to(), y = tt(wt), S = he(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && it.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(b) {
      return typeof b == "string" && b.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(S, a, d, y, u), Kt(function() {
      if (!d.server)
        return l(S, a, d, y, u), function() {
          return i.removeStyles(S, d);
        };
    }, [S, a, d, y, u]), null;
  }
  function l(a, d, u, y, S) {
    if (i.isStatic)
      i.renderStyles(a, Jo, u, S);
    else {
      var b = We({}, d, { theme: oo(d, y, c.defaultProps) });
      i.renderStyles(a, b, u, S);
    }
  }
  return process.env.NODE_ENV !== "production" && ro(s), it.memo(c);
}
function Xe(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Mt.apply(void 0, [e].concat(t)).join(""), s = Rn(o);
  return new no(s, o);
}
var Jt = function() {
  return tt(wt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const x = pn;
var ct = {}, Ts = {
  get exports() {
    return ct;
  },
  set exports(e) {
    ct = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pe, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", u = "month", y = "quarter", S = "year", b = "date", D = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, X = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var C = ["th", "st", "nd", "rd"], T = A % 100;
      return "[" + A + (C[(T - 20) % 10] || C[T] || C[0]) + "]";
    } }, z = function(A, C, T) {
      var L = String(A);
      return !L || L.length >= C ? A : "" + Array(C + 1 - L.length).join(T) + A;
    }, P = { s: z, z: function(A) {
      var C = -A.utcOffset(), T = Math.abs(C), L = Math.floor(T / 60), I = T % 60;
      return (C <= 0 ? "+" : "-") + z(L, 2, "0") + ":" + z(I, 2, "0");
    }, m: function A(C, T) {
      if (C.date() < T.date())
        return -A(T, C);
      var L = 12 * (T.year() - C.year()) + (T.month() - C.month()), I = C.clone().add(L, u), R = T - I < 0, K = C.clone().add(L + (R ? -1 : 1), u);
      return +(-(L + (T - I) / (R ? I - K : K - I)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: u, y: S, w: d, d: a, D: b, h: l, m: c, s: i, ms: s, Q: y }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, f = "en", v = {};
    v[f] = X;
    var g = function(A) {
      return A instanceof V;
    }, $ = function A(C, T, L) {
      var I;
      if (!C)
        return f;
      if (typeof C == "string") {
        var R = C.toLowerCase();
        v[R] && (I = R), T && (v[R] = T, I = R);
        var K = C.split("-");
        if (!I && K.length > 1)
          return A(K[0]);
      } else {
        var ne = C.name;
        v[ne] = C, I = ne;
      }
      return !L && I && (f = I), I || !L && f;
    }, w = function(A, C) {
      if (g(A))
        return A.clone();
      var T = typeof C == "object" ? C : {};
      return T.date = A, T.args = arguments, new V(T);
    }, k = P;
    k.l = $, k.i = g, k.w = function(A, C) {
      return w(A, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var V = function() {
      function A(T) {
        this.$L = $(T.locale, null, !0), this.parse(T);
      }
      var C = A.prototype;
      return C.parse = function(T) {
        this.$d = function(L) {
          var I = L.date, R = L.utc;
          if (I === null)
            return new Date(NaN);
          if (k.u(I))
            return new Date();
          if (I instanceof Date)
            return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var K = I.match(m);
            if (K) {
              var ne = K[2] - 1 || 0, ie = (K[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(K[1], ne, K[3] || 1, K[4] || 0, K[5] || 0, K[6] || 0, ie)) : new Date(K[1], ne, K[3] || 1, K[4] || 0, K[5] || 0, K[6] || 0, ie);
            }
          }
          return new Date(I);
        }(T), this.$x = T.x || {}, this.init();
      }, C.init = function() {
        var T = this.$d;
        this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
      }, C.$utils = function() {
        return k;
      }, C.isValid = function() {
        return this.$d.toString() !== D;
      }, C.isSame = function(T, L) {
        var I = w(T);
        return this.startOf(L) <= I && I <= this.endOf(L);
      }, C.isAfter = function(T, L) {
        return w(T) < this.startOf(L);
      }, C.isBefore = function(T, L) {
        return this.endOf(L) < w(T);
      }, C.$g = function(T, L, I) {
        return k.u(T) ? this[L] : this.set(I, T);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(T, L) {
        var I = this, R = !!k.u(L) || L, K = k.p(T), ne = function(_, Q) {
          var H = k.w(I.$u ? Date.UTC(I.$y, Q, _) : new Date(I.$y, Q, _), I);
          return R ? H : H.endOf(a);
        }, ie = function(_, Q) {
          return k.w(I.toDate()[_].apply(I.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), I);
        }, F = this.$W, W = this.$M, J = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (K) {
          case S:
            return R ? ne(1, 0) : ne(31, 11);
          case u:
            return R ? ne(1, W) : ne(0, W + 1);
          case d:
            var M = this.$locale().weekStart || 0, j = (F < M ? F + 7 : F) - M;
            return ne(R ? J - j : J + (6 - j), W);
          case a:
          case b:
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
      }, C.endOf = function(T) {
        return this.startOf(T, !1);
      }, C.$set = function(T, L) {
        var I, R = k.p(T), K = "set" + (this.$u ? "UTC" : ""), ne = (I = {}, I[a] = K + "Date", I[b] = K + "Date", I[u] = K + "Month", I[S] = K + "FullYear", I[l] = K + "Hours", I[c] = K + "Minutes", I[i] = K + "Seconds", I[s] = K + "Milliseconds", I)[R], ie = R === a ? this.$D + (L - this.$W) : L;
        if (R === u || R === S) {
          var F = this.clone().set(b, 1);
          F.$d[ne](ie), F.init(), this.$d = F.set(b, Math.min(this.$D, F.daysInMonth())).$d;
        } else
          ne && this.$d[ne](ie);
        return this.init(), this;
      }, C.set = function(T, L) {
        return this.clone().$set(T, L);
      }, C.get = function(T) {
        return this[k.p(T)]();
      }, C.add = function(T, L) {
        var I, R = this;
        T = Number(T);
        var K = k.p(L), ne = function(W) {
          var J = w(R);
          return k.w(J.date(J.date() + Math.round(W * T)), R);
        };
        if (K === u)
          return this.set(u, this.$M + T);
        if (K === S)
          return this.set(S, this.$y + T);
        if (K === a)
          return ne(1);
        if (K === d)
          return ne(7);
        var ie = (I = {}, I[c] = n, I[l] = o, I[i] = t, I)[K] || 1, F = this.$d.getTime() + T * ie;
        return k.w(F, this);
      }, C.subtract = function(T, L) {
        return this.add(-1 * T, L);
      }, C.format = function(T) {
        var L = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || D;
        var R = T || "YYYY-MM-DDTHH:mm:ssZ", K = k.z(this), ne = this.$H, ie = this.$m, F = this.$M, W = I.weekdays, J = I.months, te = function(Q, H, N, p) {
          return Q && (Q[H] || Q(L, R)) || N[H].slice(0, p);
        }, M = function(Q) {
          return k.s(ne % 12 || 12, Q, "0");
        }, j = I.meridiem || function(Q, H, N) {
          var p = Q < 12 ? "AM" : "PM";
          return N ? p.toLowerCase() : p;
        }, _ = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: F + 1, MM: k.s(F + 1, 2, "0"), MMM: te(I.monthsShort, F, J, 3), MMMM: te(J, F), D: this.$D, DD: k.s(this.$D, 2, "0"), d: String(this.$W), dd: te(I.weekdaysMin, this.$W, W, 2), ddd: te(I.weekdaysShort, this.$W, W, 3), dddd: W[this.$W], H: String(ne), HH: k.s(ne, 2, "0"), h: M(1), hh: M(2), a: j(ne, ie, !0), A: j(ne, ie, !1), m: String(ie), mm: k.s(ie, 2, "0"), s: String(this.$s), ss: k.s(this.$s, 2, "0"), SSS: k.s(this.$ms, 3, "0"), Z: K };
        return R.replace(Y, function(Q, H) {
          return H || _[Q] || K.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(T, L, I) {
        var R, K = k.p(L), ne = w(T), ie = (ne.utcOffset() - this.utcOffset()) * n, F = this - ne, W = k.m(this, ne);
        return W = (R = {}, R[S] = W / 12, R[u] = W, R[y] = W / 3, R[d] = (F - ie) / 6048e5, R[a] = (F - ie) / 864e5, R[l] = F / o, R[c] = F / n, R[i] = F / t, R)[K] || F, I ? W : k.a(W);
      }, C.daysInMonth = function() {
        return this.endOf(u).$D;
      }, C.$locale = function() {
        return v[this.$L];
      }, C.locale = function(T, L) {
        if (!T)
          return this.$L;
        var I = this.clone(), R = $(T, L, !0);
        return R && (I.$L = R), I;
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
      }, A;
    }(), q = V.prototype;
    return w.prototype = q, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", u], ["$y", S], ["$D", b]].forEach(function(A) {
      q[A[1]] = function(C) {
        return this.$g(C, A[0], A[1]);
      };
    }), w.extend = function(A, C) {
      return A.$i || (A(C, V, w), A.$i = !0), w;
    }, w.locale = $, w.isDayjs = g, w.unix = function(A) {
      return w(1e3 * A);
    }, w.en = v[f], w.Ls = v, w.p = {}, w;
  });
})(Ts);
const O = ct, Tt = "reactSchedulerOutsideWrapper", Fe = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", As = _s`

  #${Tt} {
    font-family: ${Fe};
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
`, Ps = {
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
}, Os = {
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
`, lt = `
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
const Ee = 50, je = 24, dt = 16, yt = 40, Gt = yt + dt + je, St = 84, ve = 56, Ne = 196, He = 12, Oe = 50, Ct = 24, Ot = 16, mn = 40, Is = Ct + Ot + mn, ir = 24, ar = 52, Qe = {
  topRow: `600 14px ${Fe}`,
  middleRow: `400 10px ${Fe}`,
  bottomRow: {
    name: `600 14px ${Fe}`,
    number: `600 10px ${Fe}`,
    hoursInDay: `400 9px ${Fe}`
  }
}, vt = 3, gn = 12, Xt = 24, Ys = "reactSchedulerCanvasHeaderWrapper", ao = "reactSchedulerCanvasWrapper", et = Tt, Ls = 4, qt = 48, Je = 5, Rs = 40, cr = 8, Nn = je / 2 + 2, co = dt / 2 + je + 1, lr = 2, _e = 60, Re = 21, lo = 58, uo = "reactSchedulerBody", dr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Fn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, fo = (e, r) => O(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), ho = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Fn(e),
  isCurrentDay: e.isSame(O(), "day"),
  year: parseInt(e.format("YYYY"))
}), zn = (e, r, t, n, o, s, i, c = !1) => {
  s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.mode === "dark" ? i.colors.primary : "#F2F6F4", e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ve);
  const l = i.mode === "dark";
  e.strokeStyle = l ? i.colors.border : "#EEF3F0", e.beginPath(), e.moveTo(r + n - 0.5, t), e.lineTo(r + n - 0.5, t + ve), e.stroke(), e.strokeStyle = l ? i.colors.border : "#E4EAE7", e.beginPath(), e.moveTo(r, t + 0.5), e.lineTo(r + n, t + 0.5), e.stroke(), c && (e.strokeStyle = l ? i.colors.today : "#5C8374", e.beginPath(), e.moveTo(r + 0.5, t), e.lineTo(r + 0.5, t + ve), e.stroke());
}, Hn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Re;
}, Ns = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Hn(i, s);
    for (let l = 0; l <= t; l++) {
      const a = O(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), d = a.isSame(O(), "day"), u = a.date() === 1;
      zn(
        e,
        l * Ee,
        i * ve + c,
        Ee,
        Fn(a),
        d,
        o,
        u
      );
    }
  }
}, Fs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, zs = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * He;
  const l = r * ve + s.length * Re;
  for (let a = 0; a <= t; a++) {
    const u = O(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(O(), "week");
    for (let y = 0; y < r; y++) {
      const S = Hn(y, s);
      zn(e, i, y * ve + S, St, !0, u, o);
    }
    i += St;
  }
  for (let a = 0; a < t; a++) {
    const d = fo(n, a) * He;
    Fs(e, c, l, o), c += d;
  }
}, Hs = (e, r, t, n, o, s = []) => {
  const i = O(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const l = Hn(c, s);
    for (let a = 0; a <= t; a++) {
      let d;
      a === Math.floor(t / 2) ? d = O() : a > Math.floor(t / 2) ? d = O().add(a - Math.floor(t / 2), "hours") : d = O().subtract(Math.floor(t / 2) - c, "hours");
      const u = i.isSame(O(), "day") && d.isSame(O(), "hour");
      zn(
        e,
        a * Oe + Oe / 2 - 0.5,
        c * ve + l,
        Oe,
        Fn(d),
        u,
        o
      );
    }
  }
}, Bs = (e, r, t, n, o = !1) => {
  const s = t * ve + r * Re, i = e.canvas.width;
  e.fillStyle = o ? n.colors.subcontractBorder + "40" : n.mode === "dark" ? n.colors.primary + "80" : "#E9EFEC", e.fillRect(0, s, i, Re);
}, Ws = (e, r, t, n, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(ao)) {
    switch (r) {
      case 0:
        zs(e, t, n, o, s, i);
        break;
      case 1:
        Ns(e, t, n, o, s, i);
        break;
      case 2:
        Hs(e, t, n, o, s, i);
        break;
    }
    for (let a = 0; a < i.length; a++)
      Bs(e, a, i[a], s, i[a] === c);
    if (r === 1) {
      const a = O(`${o.year}-${o.month + 1}-${o.dayOfMonth}`), d = t * ve + i.length * Re;
      e.strokeStyle = s.mode === "dark" ? s.colors.today : "#5C8374", e.setLineDash([]);
      for (let u = 0; u <= n; u++)
        if (a.add(u, "days").date() === 1) {
          const y = u * Ee + 0.5;
          e.beginPath(), e.moveTo(y, 0), e.lineTo(y, d), e.stroke();
        }
    }
  }
};
var yn = {}, js = {
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
        var y = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), S = this.diff(y, t, !0);
        return S < 0 ? i(this).startOf("week").week() : Math.ceil(S);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(js);
const Zs = yn;
var vn = {}, Vs = {
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
})(Vs);
const Gs = vn;
var xn = {}, Xs = {
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
        var d, u, y, S, b = i(this), D = (d = this.isoWeekYear(), u = this.$u, y = (u ? s.utc : s)().year(d).startOf("year"), S = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (S += 7), y.add(S, t));
        return b.diff(D, "week") + 1;
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
})(Xs);
const Us = xn;
var bn = {}, Ks = {
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
})(Ks);
const Js = bn;
var wn = {}, qs = {
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
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, S = function(f) {
      return f instanceof P;
    }, b = function(f, v, g) {
      return new P(f, g, v.$l);
    }, D = function(f) {
      return n.p(f) + "s";
    }, m = function(f) {
      return f < 0;
    }, Y = function(f) {
      return m(f) ? Math.ceil(f) : Math.floor(f);
    }, X = function(f) {
      return Math.abs(f);
    }, z = function(f, v) {
      return f ? m(f) ? { negative: !0, format: "" + X(f) + v } : { negative: !1, format: "" + f + v } : { negative: !1, format: "" };
    }, P = function() {
      function f(g, $, w) {
        var k = this;
        if (this.$d = {}, this.$l = w, g === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), $)
          return b(g * y[D($)], this);
        if (typeof g == "number")
          return this.$ms = g, this.parseFromMilliseconds(), this;
        if (typeof g == "object")
          return Object.keys(g).forEach(function(A) {
            k.$d[D(A)] = g[A];
          }), this.calMilliseconds(), this;
        if (typeof g == "string") {
          var V = g.match(u);
          if (V) {
            var q = V.slice(2).map(function(A) {
              return A != null ? Number(A) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var v = f.prototype;
      return v.calMilliseconds = function() {
        var g = this;
        this.$ms = Object.keys(this.$d).reduce(function($, w) {
          return $ + (g.$d[w] || 0) * y[w];
        }, 0);
      }, v.parseFromMilliseconds = function() {
        var g = this.$ms;
        this.$d.years = Y(g / a), g %= a, this.$d.months = Y(g / d), g %= d, this.$d.days = Y(g / c), g %= c, this.$d.hours = Y(g / i), g %= i, this.$d.minutes = Y(g / s), g %= s, this.$d.seconds = Y(g / o), g %= o, this.$d.milliseconds = g;
      }, v.toISOString = function() {
        var g = z(this.$d.years, "Y"), $ = z(this.$d.months, "M"), w = +this.$d.days || 0;
        this.$d.weeks && (w += 7 * this.$d.weeks);
        var k = z(w, "D"), V = z(this.$d.hours, "H"), q = z(this.$d.minutes, "M"), A = this.$d.seconds || 0;
        this.$d.milliseconds && (A += this.$d.milliseconds / 1e3);
        var C = z(A, "S"), T = g.negative || $.negative || k.negative || V.negative || q.negative || C.negative, L = V.format || q.format || C.format ? "T" : "", I = (T ? "-" : "") + "P" + g.format + $.format + k.format + L + V.format + q.format + C.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, v.toJSON = function() {
        return this.toISOString();
      }, v.format = function(g) {
        var $ = g || "YYYY-MM-DDTHH:mm:ss", w = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return $.replace(l, function(k, V) {
          return V || String(w[k]);
        });
      }, v.as = function(g) {
        return this.$ms / y[D(g)];
      }, v.get = function(g) {
        var $ = this.$ms, w = D(g);
        return w === "milliseconds" ? $ %= 1e3 : $ = w === "weeks" ? Y($ / y[w]) : this.$d[w], $ === 0 ? 0 : $;
      }, v.add = function(g, $, w) {
        var k;
        return k = $ ? g * y[D($)] : S(g) ? g.$ms : b(g, this).$ms, b(this.$ms + k * (w ? -1 : 1), this);
      }, v.subtract = function(g, $) {
        return this.add(g, $, !0);
      }, v.locale = function(g) {
        var $ = this.clone();
        return $.$l = g, $;
      }, v.clone = function() {
        return b(this.$ms, this);
      }, v.humanize = function(g) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!g);
      }, v.milliseconds = function() {
        return this.get("milliseconds");
      }, v.asMilliseconds = function() {
        return this.as("milliseconds");
      }, v.seconds = function() {
        return this.get("seconds");
      }, v.asSeconds = function() {
        return this.as("seconds");
      }, v.minutes = function() {
        return this.get("minutes");
      }, v.asMinutes = function() {
        return this.as("minutes");
      }, v.hours = function() {
        return this.get("hours");
      }, v.asHours = function() {
        return this.as("hours");
      }, v.days = function() {
        return this.get("days");
      }, v.asDays = function() {
        return this.as("days");
      }, v.weeks = function() {
        return this.get("weeks");
      }, v.asWeeks = function() {
        return this.as("weeks");
      }, v.months = function() {
        return this.get("months");
      }, v.asMonths = function() {
        return this.as("months");
      }, v.years = function() {
        return this.get("years");
      }, v.asYears = function() {
        return this.as("years");
      }, f;
    }();
    return function(f, v, g) {
      t = g, n = g().$utils(), g.duration = function(k, V) {
        var q = g.locale();
        return b(k, { $l: q }, V);
      }, g.isDuration = S;
      var $ = v.prototype.add, w = v.prototype.subtract;
      v.prototype.add = function(k, V) {
        return S(k) && (k = k.asMilliseconds()), $.bind(this)(k, V);
      }, v.prototype.subtract = function(k, V) {
        return S(k) && (k = k.asMilliseconds()), w.bind(this)(k, V);
      };
    };
  });
})(qs);
const Qs = wn;
var ei = "Expected a function", ur = 0 / 0, ti = "[object Symbol]", ni = /^\s+|\s+$/g, ri = /^[-+]0x[0-9a-f]+$/i, oi = /^0b[01]+$/i, si = /^0o[0-7]+$/i, ii = parseInt, ai = typeof Pe == "object" && Pe && Pe.Object === Object && Pe, ci = typeof self == "object" && self && self.Object === Object && self, li = ai || ci || Function("return this")(), di = Object.prototype, ui = di.toString, fi = Math.max, hi = Math.min, nn = function() {
  return li.Date.now();
};
function pi(e, r, t) {
  var n, o, s, i, c, l, a = 0, d = !1, u = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(ei);
  r = fr(r) || 0, Sn(t) && (d = !!t.leading, u = "maxWait" in t, s = u ? fi(fr(t.maxWait) || 0, r) : s, y = "trailing" in t ? !!t.trailing : y);
  function S(v) {
    var g = n, $ = o;
    return n = o = void 0, a = v, i = e.apply($, g), i;
  }
  function b(v) {
    return a = v, c = setTimeout(Y, r), d ? S(v) : i;
  }
  function D(v) {
    var g = v - l, $ = v - a, w = r - g;
    return u ? hi(w, s - $) : w;
  }
  function m(v) {
    var g = v - l, $ = v - a;
    return l === void 0 || g >= r || g < 0 || u && $ >= s;
  }
  function Y() {
    var v = nn();
    if (m(v))
      return X(v);
    c = setTimeout(Y, D(v));
  }
  function X(v) {
    return c = void 0, y && n ? S(v) : (n = o = void 0, i);
  }
  function z() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function P() {
    return c === void 0 ? i : X(nn());
  }
  function f() {
    var v = nn(), g = m(v);
    if (n = arguments, o = this, l = v, g) {
      if (c === void 0)
        return b(l);
      if (u)
        return c = setTimeout(Y, r), S(l);
    }
    return c === void 0 && (c = setTimeout(Y, r)), i;
  }
  return f.cancel = z, f.flush = P, f;
}
function Sn(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function mi(e) {
  return !!e && typeof e == "object";
}
function gi(e) {
  return typeof e == "symbol" || mi(e) && ui.call(e) == ti;
}
function fr(e) {
  if (typeof e == "number")
    return e;
  if (gi(e))
    return ur;
  if (Sn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Sn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ni, "");
  var t = oi.test(e);
  return t || si.test(e) ? ii(e.slice(2), t ? 2 : 8) : ri.test(e) ? ur : +e;
}
var Cn = pi;
const Wt = [0, 1, 2];
var It = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(It || {});
const po = (e) => Wt.includes(e), mt = (e) => {
  var n;
  const t = (((n = document.getElementById(et)) == null ? void 0 : n.clientWidth) || 0) - Ne;
  switch (e) {
    case 1:
      return Math.ceil(t / Ee) * vt;
    case 2:
      return Math.ceil(t / Oe) * vt;
    default:
      return Math.ceil(t / St) * vt;
  }
}, yi = (e) => mt(e) / vt, Qt = (e, r) => {
  const t = mt(r) / 2;
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
}, vi = (e, r) => {
  const t = Qt(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Bn = () => {
  var t;
  const e = ((t = document.getElementById(et)) == null ? void 0 : t.clientWidth) || 0;
  return Math.max(0, e - Ne) * vt;
}, mo = Zr({
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
O.extend(Zs);
O.extend(Gs);
O.extend(Us);
O.extend(Js);
O.extend(Qs);
const xi = ({
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
  const { zoom: a, maxRecordsPerPage: d = 50 } = n, [u, y] = pe(a), [S, b] = pe(O()), [D, m] = pe(null), [Y, X] = pe(!1), [z, P] = pe(mt(u)), f = Wt[u] !== Wt[Wt.length - 1], v = u !== 0, g = $e(() => vi(S, u), [S, u]), $ = Qt(S, u).startDate, w = O($).dayOfYear(), k = ho($), V = he(null), q = he(!1), A = he(null), [C, T] = pe([{ x: 0, y: 0 }]), L = le(
    (H, N = "auto") => {
      var G, E, Z, ee;
      const p = Bn();
      switch (H) {
        case "back":
          return (G = V.current) == null ? void 0 : G.scrollTo({
            behavior: N,
            left: p / 3
          });
        case "forward":
          return (E = V.current) == null ? void 0 : E.scrollTo({
            behavior: N,
            left: p / 3
          });
        case "middle": {
          const U = p / vt / 4;
          return (Z = V.current) == null ? void 0 : Z.scrollTo({
            behavior: N,
            left: p / 2 - U
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
  ), I = (H) => {
    T(H);
  }, R = le(
    (H) => {
      const N = yi(u);
      let p;
      switch (u) {
        case 0:
          p = N * 7;
          break;
        case 1:
          p = N;
          break;
        case 2:
          p = Math.ceil(N / Xt);
          break;
      }
      Cn(() => {
        switch ((H === "forward" || H === "back") && (q.current = !0), A.current = H, H) {
          case "back":
            b((E) => E.subtract(p, "days"));
            break;
          case "forward":
            b((E) => E.add(p, "days"));
            break;
          case "middle":
            b(O());
            break;
        }
        s == null || s(g);
      }, 300)();
    },
    [s, g, u]
  );
  ye(() => {
    A.current && (L(A.current), A.current = null);
  }, [S, L]), ye(() => {
    V.current = document.getElementById(et), P(mt(u));
  }, [u]), ye(() => {
    const H = () => P(mt(u));
    return window.addEventListener("resize", H), () => window.removeEventListener("resize", H);
  }, [u]), ye(() => {
    s == null || s(g);
  }, [s, g]), ye(() => {
    X(!1);
  }, [o]), ye(() => {
    Y || (L("middle"), X(!0), b(o));
  }, [o, Y, L]);
  const K = () => {
    t || (b(
      (H) => u === 2 ? H.add(ir, "hours") : H.add(lr, "weeks")
    ), s == null || s(g));
  }, ne = le(() => {
    t || R("forward");
  }, [t, R]), ie = () => {
    t || (b(
      (H) => u === 2 ? H.subtract(ir, "hours") : H.subtract(lr, "weeks")
    ), s == null || s(g));
  }, F = le(() => {
    !Y || t || R("back");
  }, [Y, t, R]), W = le(() => {
    t || (A.current = "middle", b(O()), m(null), s == null || s(g));
  }, [t, s, g]), J = le(
    (H) => {
      if (t)
        return;
      const N = O(H).startOf("day");
      N.isValid() && (A.current = "middle", b(N), m(N), s == null || s(g));
    },
    [t, s, g]
  );
  ye(() => {
    if (!D)
      return;
    const H = () => m(null);
    return document.addEventListener("mousedown", H, { once: !0 }), () => document.removeEventListener("mousedown", H);
  }, [D]);
  const te = () => j(u + 1), M = () => j(u - 1), j = (H) => {
    po(H) && (y(H), P(mt(H)), s == null || s(g));
  }, _ = () => i == null ? void 0 : i(), { Provider: Q } = mo;
  return /* @__PURE__ */ h(
    Q,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: K,
        handleScrollNext: ne,
        handleGoPrev: ie,
        handleScrollPrev: F,
        handleGoToday: W,
        goToDate: J,
        zoomIn: te,
        zoomOut: M,
        setZoom: j,
        zoom: u,
        isNextZoom: f,
        isPrevZoom: v,
        date: S,
        jumpDate: D,
        isLoading: t,
        cols: z,
        startDate: k,
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
}, Ze = () => tt(mo), go = (e, r, t) => {
  const n = Math.max(0, r), o = Math.max(0, t);
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = o * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = o + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, yo = () => {
  var e;
  return typeof window < "u" && !!((e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches);
}, vo = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ve + n * Re;
    if (e >= s + Re)
      n++;
    else if (e >= s)
      return o * ve + n * Re - n * Re;
  }
  return t - n * Re;
}, bi = 5, hr = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > bi;
}, gt = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, wi = ({
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
  } = i, [b, D] = pe("idle"), [m, Y] = pe(null), [X, z] = pe({ x: 0, y: 0 }), [P, f] = pe({ width: 0, height: 48 }), [v, g] = pe(null), [$, w] = pe(!0), k = he({ x: 0, y: 0 }), V = he({ x: 0, y: 0 }), q = he({ x: 0, y: 0 }), A = he(null), C = he(null), T = he(0), L = he(null), I = le(
    (j) => !d || j.draggable === !1 ? !1 : u ? u(j) : !0,
    [d, u]
  ), R = le(
    (j, _) => {
      const Q = vo(_, l), H = Math.floor(Q / ve);
      let N;
      switch (t) {
        case 0:
          N = He * 7;
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
      let G;
      const E = O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          G = E.add(p * 7, "days").toDate();
          break;
        case 1:
          G = E.add(p, "days").toDate();
          break;
        case 2:
          G = E.add(p, "hours").toDate();
          break;
        default:
          G = E.toDate();
      }
      return { snappedDate: G, snappedResourceIndex: H };
    },
    [t, n, l]
  ), K = le(
    (j, _, Q, H) => {
      const N = [], p = _.getTime(), G = Q.getTime(), E = a.find((ee) => ee.id === H);
      if (!E)
        return N;
      const Z = [];
      for (const ee of E.data)
        Array.isArray(ee) ? Z.push(...ee) : Z.push(ee);
      for (const ee of Z) {
        if (ee.segmentId === j.segmentId)
          continue;
        const U = ee.startDate.getTime(), ce = ee.endDate.getTime();
        if (p >= U && p < ce || G > U && G <= ce || p <= U && G >= ce) {
          const ue = new Date(Math.max(p, U)), xe = new Date(Math.min(G, ce)), De = xe.getTime() - ue.getTime();
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
    (j, _, Q, H) => {
      const N = [], p = _.getTime(), G = Q.getTime(), E = O(_).format("YYYY-MM-DD"), Z = a.find((U) => U.id === H);
      if (!Z)
        return N;
      const ee = [];
      for (const U of Z.data)
        Array.isArray(U) ? ee.push(...U) : ee.push(U);
      for (const U of ee) {
        if (U.segmentId === j.segmentId)
          continue;
        const ce = U.startDate.getTime(), ge = U.endDate.getTime(), ue = O(U.startDate).format("YYYY-MM-DD"), xe = O(U.endDate).format("YYYY-MM-DD"), De = O(Q).format("YYYY-MM-DD");
        if (!(ue === E || xe === E || ue === De || xe === De || O(U.startDate).isBefore(_, "day") && O(U.endDate).isAfter(Q, "day")) || p >= ce && p < ge || G > ce && G <= ge || p <= ce && G >= ge)
          continue;
        let me, Ae;
        ge <= p ? (me = p - ge, Ae = "before") : (me = ce - G, Ae = "after"), N.push({
          event: U,
          timeGap: me,
          position: Ae
        });
      }
      return N.sort((U, ce) => U.timeGap - ce.timeGap);
    },
    [a]
  ), ie = le(
    (j, _, Q) => {
      const H = R(_, Q);
      let N, p;
      if (y)
        N = j.startDate, p = j.endDate;
      else {
        const ge = O(j.endDate).diff(j.startDate);
        N = H.snappedDate, p = O(N).add(ge, "milliseconds").toDate();
      }
      let G = 0, E = "", Z;
      for (const ge of e) {
        const ue = Math.max(ge.data.length, 1);
        if (H.snappedResourceIndex < G + ue) {
          E = ge.id, Z = ge.capacity;
          break;
        }
        G += ue;
      }
      if (!E)
        return null;
      let ee = !0;
      Z !== void 0 && j.totalPassengers !== void 0 && (ee = j.totalPassengers <= Z);
      const U = K(j, N, p, E), ce = U.length === 0 ? ne(j, N, p, E) : [];
      return {
        startDate: N,
        endDate: p,
        resourceId: E,
        resourceIndex: H.snappedResourceIndex,
        resourceCapacity: Z,
        hasCapacity: ee,
        conflicts: U,
        hasConflict: U.length > 0,
        nearbyEvents: ce
      };
    },
    [R, e, y, K, ne]
  ), F = le(
    (j, _) => {
      if (!s)
        return;
      const Q = Date.now();
      if (Q - T.current < 100)
        return;
      T.current = Q;
      const H = {
        event: j,
        currentStartDate: _.startDate,
        currentEndDate: _.endDate,
        currentResourceId: _.resourceId,
        conflicts: _.conflicts
      };
      s(H);
    },
    [s]
  ), W = le(
    (j, _) => {
      if (!I(j) || !c.current)
        return;
      _.preventDefault(), _.stopPropagation();
      const Q = _.target.closest('[style*="left"]');
      let H = 0, N = 0;
      Q && Q.style.left && Q.style.top && (H = parseInt(Q.style.left), N = parseInt(Q.style.top));
      const p = gt(
        _.clientX,
        _.clientY,
        c.current
      );
      k.current = { x: H, y: N }, V.current = { x: _.clientX, y: _.clientY }, q.current = {
        x: p.x - H,
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
          if (ee.some((U) => U.segmentId === j.segmentId)) {
            L.current.resourceId = Z.id;
            break;
          }
        if (L.current.resourceId)
          break;
      }
      Y(j), D("potential"), z({ x: H, y: N });
      let G = 100, E = 48;
      if (Q) {
        const Z = Q.getBoundingClientRect();
        G = Z.width, E = Z.height;
      }
      f({ width: G, height: E });
    },
    [I, c, e, t]
  ), J = le(
    (j) => {
      if (!c.current)
        return;
      let _ = c.current;
      for (; _ && _ !== document.body; ) {
        const U = window.getComputedStyle(_);
        if (_.scrollHeight > _.clientHeight && (U.overflowY === "auto" || U.overflowY === "scroll" || U.overflow === "auto" || U.overflow === "scroll"))
          break;
        _ = _.parentElement;
      }
      (!_ || _ === document.body) && (_ = document.documentElement);
      const Q = _.getBoundingClientRect(), H = j.clientY, N = 50, p = 12, G = H - Q.top, E = Q.bottom - H;
      let Z = !1, ee = 0;
      G < N && G > 0 ? (Z = !0, ee = -p * (1 - G / N)) : E < N && E > 0 && (Z = !0, ee = p * (1 - E / N)), Z ? (C.current && cancelAnimationFrame(C.current), C.current = requestAnimationFrame(() => {
        _.scrollTop += ee, b === "dragging" && J(j);
      })) : C.current && (cancelAnimationFrame(C.current), C.current = null);
    },
    [c, b]
  ), te = le(
    (j) => {
      if (b === "idle" || b === "animating" || !m || !c.current)
        return;
      const _ = { x: j.clientX, y: j.clientY };
      if (b === "potential")
        if (hr(V.current, _))
          D("dragging");
        else
          return;
      J(j);
      const Q = gt(
        j.clientX,
        j.clientY,
        c.current
      );
      A.current && cancelAnimationFrame(A.current), A.current = requestAnimationFrame(() => {
        const H = {
          x: Q.x - q.current.x,
          y: Q.y - q.current.y
        };
        z(H);
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
          w(p), F(m, N);
        }
      });
    },
    [b, m, c, ie, F, S, J]
  ), M = le(
    async (j) => {
      if (b === "idle" || b === "animating")
        return;
      const _ = { x: j.clientX, y: j.clientY };
      if (!hr(V.current, _) || b === "potential") {
        D("idle"), Y(null), g(null);
        return;
      }
      if (!m || !v || !L.current) {
        D("idle"), Y(null), g(null);
        return;
      }
      if (v.hasCapacity === !1) {
        w(!1), D("animating"), z(k.current), setTimeout(() => {
          D("idle"), Y(null), g(null), w(!0);
        }, 300);
        return;
      }
      const H = {
        event: m,
        originalStartDate: L.current.startDate,
        originalEndDate: L.current.endDate,
        originalResourceId: L.current.resourceId,
        newStartDate: v.startDate,
        newEndDate: v.endDate,
        newResourceId: v.resourceId,
        hasConflict: v.hasConflict,
        conflicts: v.conflicts
      };
      let N = !0;
      if (o)
        try {
          const p = o(H);
          N = p instanceof Promise ? await p : p;
        } catch {
          N = !1;
        }
      N ? (w(!0), D("idle"), Y(null), g(null)) : (w(!1), D("animating"), z(k.current), setTimeout(() => {
        D("idle"), Y(null), g(null), w(!0);
      }, 300));
    },
    [b, m, v, o, S]
  );
  return ye(() => {
    if (b === "potential" || b === "dragging") {
      const j = (Q) => te(Q), _ = (Q) => M(Q);
      return document.addEventListener("mousemove", j), document.addEventListener("mouseup", _), () => {
        document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", _);
      };
    } else
      return () => {
      };
  }, [b, te, M]), ye(() => () => {
    A.current && (cancelAnimationFrame(A.current), A.current = null), C.current && (cancelAnimationFrame(C.current), C.current = null);
  }, []), ye(() => {
    (b === "idle" || b === "animating") && (A.current && (cancelAnimationFrame(A.current), A.current = null), C.current && (cancelAnimationFrame(C.current), C.current = null));
  }, [b]), ye(() => {
    (b === "dragging" || b === "potential") && (b === "dragging" ? (D("animating"), z(k.current), setTimeout(() => {
      D("idle"), Y(null), g(null);
    }, 300)) : (D("idle"), Y(null), g(null)));
  }, [t]), ye(() => {
    if ((b === "dragging" || b === "potential") && m) {
      let j = !1;
      for (const _ of e) {
        for (const Q of _.data)
          if (Q.some((H) => H.segmentId === m.segmentId)) {
            j = !0;
            break;
          }
        if (j)
          break;
      }
      j || (b === "dragging" ? (D("animating"), z(k.current), setTimeout(() => {
        D("idle"), Y(null), g(null);
      }, 300)) : (D("idle"), Y(null), g(null)));
    }
  }, [e, b, m]), {
    dragState: b,
    draggedEvent: m,
    ghostPosition: X,
    ghostDimensions: P,
    dropTarget: v,
    isValidDrop: $,
    handleDragStart: W,
    isDraggable: I,
    draggingEventId: (m == null ? void 0 : m.segmentId) || null,
    resourceOnly: y
  };
}, Si = ({
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
    let G = 0;
    for (const E of a)
      E <= p && G++;
    return p * ve + G * Re;
  }, [a]), [b, D] = pe("idle"), [m, Y] = pe(null), [X, z] = pe(null), [P, f] = pe(null), [v, g] = pe(!1), [$, w] = pe([]), [k, V] = pe(!1), q = he(null), A = he(null), C = he(null), T = he(null), L = le(() => {
    switch (t) {
      case 0:
        return He * 7;
      case 1:
        return Ee;
      case 2:
        return Oe;
      default:
        return Ee;
    }
  }, [t]), I = le(
    (p) => {
      const G = L(), E = Math.floor(p / G), Z = O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
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
      const G = vo(p, a), E = Math.floor(G / ve);
      let Z = 0;
      for (const ee of e) {
        const U = Math.max(ee.data.length, 1);
        if (E < Z + U)
          return {
            resourceId: ee.id,
            resourceIndex: E,
            resourceLabel: ee.label
          };
        Z += U;
      }
      return null;
    },
    [e, a]
  ), K = le(
    (p) => {
      const G = L();
      return Math.floor(p / G) * G;
    },
    [L]
  ), ne = le(
    (p, G, E, Z = []) => {
      const ee = [], ce = (r || e).find((xe) => xe.id === p), ge = G.getTime(), ue = E.getTime();
      if (ce) {
        const xe = ce.data[0], De = xe && Array.isArray(xe) ? ce.data.flat() : ce.data;
        for (const be of De) {
          const ae = new Date(be.startDate).getTime(), me = new Date(be.endDate).getTime();
          if (ge < me && ue > ae) {
            const Ae = new Date(Math.max(ge, ae)), Le = new Date(Math.min(ue, me)), fe = Le.getTime() - Ae.getTime();
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
        if (ge < be && ue > De) {
          const ae = new Date(Math.max(ge, De)), me = new Date(Math.min(ue, be)), Ae = me.getTime() - ae.getTime(), Le = {
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
      const G = p.target;
      if (G.closest("[data-segment-id]") || G.closest("[data-multi-select-ui]"))
        return;
      const E = gt(p.clientX, p.clientY, c.current), Z = R(E.y);
      if (!Z)
        return;
      q.current = { x: p.clientX, y: p.clientY }, A.current = Z.resourceIndex;
      const ee = K(E.x), U = L(), ce = S(Z.resourceIndex);
      Y(E), z(E), f({
        x: ee,
        y: ce,
        width: U,
        height: ve
      }), D("selecting");
    },
    [y, l, c, R, K, L, S]
  ), F = le(
    (p) => {
      z(p);
      const G = L(), E = K((m == null ? void 0 : m.x) || 0), Z = K(p.x), ee = S(A.current), U = Math.min(E, Z), ce = Math.max(E, Z) + G;
      f({ x: U, y: ee, width: ce - U, height: ve });
    },
    [m, L, K, S]
  ), W = le(() => {
    T.current && (cancelAnimationFrame(T.current), T.current = null);
  }, []), J = le(
    (p, G) => {
      const E = document.getElementById(et);
      if (!E || !c.current)
        return;
      const Z = E.getBoundingClientRect(), ee = 60, U = 12, ce = p - (Z.left + Ne), ge = Z.right - p;
      let ue = 0;
      ce < ee ? ue = -U * (1 - Math.max(0, ce) / ee) : ge < ee && (ue = U * (1 - Math.max(0, ge) / ee)), W(), ue !== 0 && (T.current = requestAnimationFrame(() => {
        E.scrollLeft += ue, F(gt(p, G, c.current)), J(p, G);
      }));
    },
    [c, F, W]
  ), te = le(
    (p) => {
      if (b !== "selecting" || !c.current || A.current === null)
        return;
      const G = gt(p.clientX, p.clientY, c.current);
      C.current && cancelAnimationFrame(C.current), C.current = requestAnimationFrame(() => F(G)), J(p.clientX, p.clientY);
    },
    [b, c, F, J]
  ), M = le(
    (p) => {
      if (b !== "selecting")
        return;
      if (W(), !c.current || !m || !q.current) {
        D("idle"), Y(null), z(null), f(null);
        return;
      }
      const G = gt(p.clientX, p.clientY, c.current), E = R(m.y);
      if (!E) {
        D("idle"), Y(null), z(null), f(null);
        return;
      }
      const Z = Math.min(m.x, G.x), ee = Math.max(m.x, G.x), U = I(Z), ce = I(ee), ge = O(ce).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (u && !u(E.resourceId, U, ge)) {
        D("idle"), Y(null), z(null), f(null);
        return;
      }
      const ue = ne(
        E.resourceId,
        U,
        ge,
        $
      ), xe = ue.length > 0, De = {
        startDate: U,
        endDate: ge,
        resourceId: E.resourceId,
        resourceLabel: E.resourceLabel,
        zoomLevel: t,
        hasConflict: xe,
        conflicts: xe ? ue : void 0
      };
      if (v)
        w((be) => [...be, De]), V(!0);
      else if (o) {
        const be = o(De), ae = (me) => {
          me != null && me.continueMultiSelect && (g(!0), w([De]), V(!0));
        };
        be instanceof Promise ? be.then(ae) : ae(be);
      }
      D("idle"), Y(null), z(null), f(null), q.current = null, A.current = null;
    },
    [
      b,
      c,
      m,
      R,
      I,
      u,
      o,
      t,
      v,
      ne,
      $,
      W
    ]
  ), j = le(() => {
    if ($.length > 0 && s) {
      V(!1);
      const p = s($), G = (E) => {
        E != null && E.continueMultiSelect ? V(!0) : (w([]), g(!1), V(!1));
      };
      p instanceof Promise ? p.then(G) : G(p);
      return;
    }
    w([]), g(!1), V(!1);
  }, [$, s]), _ = le(() => {
    w([]), g(!1), V(!1);
  }, []), Q = le((p) => {
    w((G) => {
      const E = G.filter((Z, ee) => ee !== p);
      return E.length === 0 && (g(!1), V(!1)), E;
    });
  }, []), H = le(
    (p, G) => {
      w((E) => E.map((Z, ee) => {
        if (ee !== p)
          return Z;
        const U = { ...Z, ...G }, ce = E.filter((ue, xe) => xe !== p), ge = ne(
          U.resourceId,
          U.startDate,
          U.endDate,
          ce
        );
        return {
          ...U,
          hasConflict: ge.length > 0,
          conflicts: ge.length > 0 ? ge : void 0
        };
      }));
    },
    [ne]
  ), N = le(
    (p) => {
      p.key === "Escape" && (b === "selecting" ? (W(), D("idle"), Y(null), z(null), f(null), q.current = null, A.current = null) : v && $.length > 0 && (w([]), g(!1), V(!1)));
    },
    [b, v, $.length, W]
  );
  return ye(() => {
    if (b === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", M), document.addEventListener("keydown", N), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", M), document.removeEventListener("keydown", N);
      };
  }, [b, te, M, N]), ye(() => {
    if (v && $.length > 0)
      return document.addEventListener("keydown", N), () => {
        document.removeEventListener("keydown", N);
      };
  }, [v, $.length, N]), ye(() => () => {
    C.current && (cancelAnimationFrame(C.current), C.current = null), W();
  }, [W]), ye(() => {
    l && b === "selecting" && (W(), D("idle"), Y(null), z(null), f(null), q.current = null, A.current = null);
  }, [l, b, W]), {
    selectionState: b,
    selectionStart: m,
    selectionEnd: X,
    selectionBox: P,
    handleGridMouseDown: ie,
    isEnabled: y,
    pendingSelections: $,
    confirmSelections: j,
    clearSelections: _,
    removeSelection: Q,
    updateSelection: H,
    isMultiSelectActive: v,
    hasUnconfirmedSelections: k
  };
}, Ci = x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, Mi = x.div`
  position: relative;
`, ki = x.canvas``;
x.canvas``;
const $i = x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, pr = x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Di = Pn(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: l, onDragStateChange: a, onTimeRangeSelect: d, onMultiTimeRangeSelect: u, clickToAddConfig: y, separatorRowIndices: S = [], subcontractSeparatorRow: b = -1, fadingUnitIds: D }, m) {
  const Y = he(!1), { handleScrollNext: X, handleScrollPrev: z, date: P, isLoading: f, cols: v, startDate: g, suppressNextSlideRef: $, config: w } = Ze(), k = he(null), V = he(null), q = he(t), A = he(P), C = he(null), T = he(null), L = he(null), I = he(null), [R, K] = pe(!1), ne = Jt(), {
    dragState: ie,
    draggedEvent: F,
    ghostPosition: W,
    ghostDimensions: J,
    dropTarget: te,
    isValidDrop: M,
    handleDragStart: j,
    isDraggable: _,
    draggingEventId: Q,
    resourceOnly: H
  } = wi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: g,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: l,
    gridRef: I,
    separatorRowIndices: S
  });
  ye(() => {
    const fe = ie === "dragging" || ie === "potential";
    K(fe), a && a(fe);
  }, [ie, a]);
  const N = he(!1), p = he(P), G = he(null);
  ye(() => {
    var Ie;
    const fe = p.current;
    if (p.current = P, !N.current) {
      N.current = !0;
      return;
    }
    if ($ != null && $.current) {
      $.current = !1;
      return;
    }
    const re = I.current;
    if (!(re != null && re.animate))
      return;
    const de = P.isAfter(fe) ? 48 : -48;
    (Ie = G.current) == null || Ie.cancel(), re.style.willChange = "transform";
    const oe = re.animate(
      [
        { transform: `translateX(${de}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), ke = () => {
      re.style.willChange = "";
    };
    oe.onfinish = ke, oe.oncancel = ke, G.current = oe;
  }, [P, $]);
  const {
    selectionState: E,
    selectionBox: Z,
    handleGridMouseDown: ee,
    pendingSelections: U,
    confirmSelections: ce,
    clearSelections: ge,
    removeSelection: ue,
    updateSelection: xe,
    isMultiSelectActive: De,
    hasUnconfirmedSelections: be
  } = Si({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: g,
    onTimeRangeSelect: d,
    onMultiTimeRangeSelect: u,
    clickToAddConfig: y,
    gridRef: I,
    isDragging: R,
    separatorRowIndices: S
  }), ae = le((fe) => {
    fe.preventDefault();
  }, []), me = le((fe) => {
    fe.preventDefault();
  }, []), Ae = S.length * Re, Le = le(
    (fe) => {
      const re = Bn(), de = t * ve + 1 + Ae;
      go(fe, re, de), Ws(fe, r, t, v, g, ne, S, b);
    },
    [v, g, t, r, ne, S, b, Ae]
  );
  return ye(() => {
    if (!k.current)
      return;
    const fe = k.current.getContext("2d");
    if (!fe)
      return;
    const re = () => Le(fe);
    return window.addEventListener("resize", re), () => window.removeEventListener("resize", re);
  }, [Le]), ye(() => {
    var Be;
    const fe = q.current, re = A.current;
    if (q.current = t, A.current = P, fe === t || !P.isSame(re, "day") || yo())
      return;
    const de = k.current, oe = V.current;
    if (!de || !oe || de.width === 0 || de.height === 0)
      return;
    const ke = oe.getContext("2d");
    if (!ke)
      return;
    oe.width = de.width, oe.height = de.height, oe.style.width = de.style.width, oe.style.height = de.style.height, ke.setTransform(1, 0, 0, 1, 0, 0), ke.clearRect(0, 0, oe.width, oe.height), ke.drawImage(de, 0, 0), (Be = C.current) == null || Be.cancel(), oe.style.opacity = "1";
    const Ie = oe.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    Ie.onfinish = () => {
      oe.style.opacity = "0";
    }, C.current = Ie;
  }, [t, P]), ye(() => {
    const fe = k.current;
    if (!fe)
      return;
    fe.style.letterSpacing = "1px";
    const re = fe.getContext("2d");
    re && Le(re);
  }, [P, t, r, Le]), ye(() => {
    if (!T.current)
      return;
    const fe = new IntersectionObserver(
      (re) => {
        re[0].isIntersecting && !Y.current && (Y.current = !0, X(), setTimeout(() => {
          Y.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(et) }
    );
    return fe.observe(T.current), () => {
      fe.disconnect();
    };
  }, [X]), ye(() => {
    if (!L.current)
      return;
    const fe = new IntersectionObserver(
      (re) => {
        re[0].isIntersecting && !Y.current && (Y.current = !0, z(), setTimeout(() => {
          Y.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(et),
        rootMargin: `0px 0px 0px -${Ne}px`
      }
    );
    return fe.observe(L.current), () => {
      fe.disconnect();
    };
  }, [z]), /* @__PURE__ */ B(Ci, { id: ao, children: [
    /* @__PURE__ */ B(
      Mi,
      {
        ref: (fe) => {
          typeof m == "function" ? m(fe) : m && (m.current = fe), I.current = fe;
        },
        onMouseDown: ee,
        style: { cursor: d ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(pr, { position: "left", ref: L }),
          /* @__PURE__ */ h(An, { isLoading: f, position: "left" }),
          /* @__PURE__ */ h(
            ki,
            {
              ref: k,
              onDragStart: ae,
              onDragOver: me,
              style: { userSelect: ie === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h($i, { ref: V, "aria-hidden": !0 }),
          /* @__PURE__ */ h(Yd, { zoom: r, startDate: g }),
          /* @__PURE__ */ h(Fd, { zoom: r, startDate: g }),
          /* @__PURE__ */ h(
            Nl,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onDragStart: j,
              isDraggable: _,
              draggingEventId: Q,
              separatorRowIndices: S,
              fadingUnitIds: D,
              highlightedSegmentId: (w == null ? void 0 : w.highlightedSegmentId) ?? null,
              focusedUnitIds: (w == null ? void 0 : w.focusedUnitIds) ?? null,
              leavingSegmentIds: (w == null ? void 0 : w.leavingSegmentIds) ?? null,
              ghostProject: (w == null ? void 0 : w.ghostProject) ?? null
            }
          ),
          /* @__PURE__ */ h(pr, { ref: T, position: "right" }),
          /* @__PURE__ */ h(An, { isLoading: f, position: "right" }),
          (ie === "dragging" || ie === "animating") && /* @__PURE__ */ h(
            fd,
            {
              draggedEvent: F,
              ghostPosition: W,
              ghostDimensions: J,
              dropTarget: te,
              isValidDrop: M,
              dragState: ie,
              zoom: r,
              data: n,
              resourceOnly: H,
              separatorRowIndices: S
            }
          ),
          /* @__PURE__ */ h(
            gd,
            {
              selectionBox: Z,
              isSelecting: E === "selecting"
            }
          ),
          De && U.length > 0 && /* @__PURE__ */ h(
            Pd,
            {
              selections: U,
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
    De && be && U.length > 0 && /* @__PURE__ */ h(
      kd,
      {
        selections: U,
        onConfirm: ce,
        onClear: ge,
        onRemove: ue
      }
    )
  ] });
}), xo = (e) => {
  const r = O.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, bo = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / _e);
    t += o.hours + s, n += r % _e, n >= _e && (t++, n -= _e);
  }), { hours: t, minutes: n };
}, wo = (e, r) => {
  let t = cr;
  switch (r) {
    case 0:
      t = Rs;
      break;
    case 1:
      t = cr;
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
}, Ei = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const d = O(a.startDate).isoWeek(), u = O(a.startDate).isoWeekday(), y = O(a.endDate).isoWeek(), S = O(a.endDate).isoWeekday(), { hours: b, minutes: D } = xo(a.occupancy);
    if (n === d) {
      const m = (Je + 1 - u) * b, Y = (Je + 1 - u) * D;
      return { hours: Math.max(0, m), minutes: Y };
    } else if (n === y) {
      const m = S > Je ? Je * b : S * b, Y = S > Je ? Je * D : S * D;
      return { hours: m, minutes: Y };
    } else if (O(r).isBetween(a.startDate, a.endDate))
      return { hours: Je * b, minutes: Je * D };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = bo(o), { free: c, overtime: l } = wo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, _i = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: y } = xo(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = bo(s), { free: l, overtime: a } = wo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Ti = (e, r) => {
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
}, Ai = (e, r, t, n, o = !1) => {
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
      return _i(s, t, n, o);
    case 2:
      return Ti(s, t);
    default:
      return Ei(s, t, n);
  }
}, Pi = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", l;
  switch (s) {
    case 0:
      c = "weeks", l = St;
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
  ).add(a - 1, c), u = Math.ceil(t.y / ve), y = n.findIndex((Y, X, z) => z.slice(0, X + 1).reduce((f, v) => f + v, 0) >= u), S = s === 2 ? (a + 1) * l : a * l, b = (u - 1) * ve + ve, D = Ai(
    o[y],
    y,
    d,
    s,
    i
  ), m = O(e.startDate).isSame(O(e.endDate), "day");
  return {
    coords: { x: S, y: b },
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
      readinessNote: e.readinessNote,
      subcontractConfirmed: e.subcontractConfirmed
    }
  };
};
function Oi(e, r) {
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
function Ii(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const d of e)
    !d.isSubcontract && d.capacity != null && t.add(d.capacity);
  const n = [...t].sort((d, u) => d - u);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Oi(n, o), i = [];
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
    for (const b of d.values)
      a.set(b, y);
  }), { categories: l, capacityToCategoryId: a };
}
const Yi = (e, r, t, n) => {
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
var Mn = {}, Li = {
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
})(Li);
const Ri = Mn;
var kn = {}, Ni = {
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
})(Ni);
const Fi = kn, zi = (e) => {
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
O.extend(Ri);
O.extend(Fi);
const mr = /* @__PURE__ */ new WeakMap(), Hi = (e) => {
  const r = mr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = O(o.startDate), c = O(s.startDate), l = i.startOf("day").diff(c.startOf("day"), "day");
    return l !== 0 ? l : i.diff(c);
  }), n = zi(t);
  return mr.set(e, n), n;
}, Bi = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = Hi(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Wi = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, ji = (e) => {
  const { recordsThreshold: r } = Ze(), [t, n] = pe(0), [o, s] = pe(0), i = he(null);
  ye(() => {
    i.current = document.getElementById(et);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = $e(() => Bi(e), [e]), a = $e(
    () => Yi(e, c, l, r),
    [e, c, r, l]
  ), d = le(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((m) => m + a[Math.max(o, 0)].length), s((m) => Math.min(m + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = le(() => {
    a[o].length && (n((m) => Math.max(m - a[o - 1].length, 0)), s((m) => Math.max(m - 1, 0)));
  }, [o, a]), y = le(() => {
    n(0), s(0);
  }, []), S = t + a[o].length, b = $e(
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
    rowsPerItem: b,
    totalRowsPerPage: Wi(a[o]),
    next: d,
    previous: u,
    reset: y
  };
};
var $n = {}, Zi = {
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
})(Zi);
const Vi = $n;
var Dn = {}, Gi = {
  get exports() {
    return Dn;
  },
  set exports(e) {
    Dn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ct);
  })(Pe, function(t) {
    function n(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = n(t);
    function s(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function i(y, S, b) {
      var D = y + " ";
      switch (b) {
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
})(Gi);
const Xi = Dn;
var En = {}, Ui = {
  get exports() {
    return En;
  },
  set exports(e) {
    En = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ct);
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
})(Ui);
const Ki = En;
var _n = {}, Ji = {
  get exports() {
    return _n;
  },
  set exports(e) {
    _n = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ct);
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
})(Ji);
const qi = _n;
var Tn = {}, Qi = {
  get exports() {
    return Tn;
  },
  set exports(e) {
    Tn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ct);
  })(Pe, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Qi);
const ea = Tn, ta = {
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
}, na = {
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
}, ra = {
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
}, oa = {
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
}, sa = {
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
}, ia = [
  {
    id: "en",
    lang: ra,
    translateCode: "en-GB",
    dayjsTranslations: Vi
  },
  {
    id: "pl",
    lang: na,
    translateCode: "pl-PL",
    dayjsTranslations: Xi
  },
  {
    id: "es",
    lang: ta,
    translateCode: "es-ES",
    dayjsTranslations: ea
  },
  {
    id: "lt",
    lang: sa,
    translateCode: "lt-LT",
    dayjsTranslations: qi
  },
  {
    id: "de",
    lang: oa,
    translateCode: "de-DE",
    dayjsTranslations: Ki
  }
];
class aa {
  constructor() {
    Wn(this, "locales", ia);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const Ut = new aa(), So = Zr({
  localesData: Ut.getLocales(),
  currentLocale: Ut.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ca = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = pe("en"), s = Ut.getLocales(), i = le(() => {
    const u = s.find((y) => y.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && O.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [c, l] = pe(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  ye(() => {
    t == null || t.forEach((u) => {
      s.find((S) => S.id === u.id) || Ut.addLocales(u);
    });
  }, [s, t]), ye(() => {
    const u = localStorage.getItem("locale"), y = r ?? u ?? "en";
    localStorage.setItem("locale", y), o(y), l(i());
  }, [i, r]);
  const { Provider: d } = So;
  return /* @__PURE__ */ h(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, nt = () => tt(So).currentLocale.lang, la = (e) => /* @__PURE__ */ se.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ se.createElement("defs", null, /* @__PURE__ */ se.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ se.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ se.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ se.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ se.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ se.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ se.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ se.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), da = x.div`
  height: 440px;
  width: 514px;
  position: relative;
`, ua = x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, fa = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = nt();
  return /* @__PURE__ */ B(da, { onClick: e, children: [
    /* @__PURE__ */ h(la, {}),
    /* @__PURE__ */ h(ua, { children: r })
  ] });
}, ha = x.div`
  position: relative;
  display: flex;
`, pa = x.div`
  position: relative;
  margin-left: ${Ne};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ma = x.div`
  width: calc(${({ width: e }) => e}px - ${Ne}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ne}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, ga = /* @__PURE__ */ new Set(), ya = {
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
function va(e, r) {
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
const xa = ({
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
  const [S, b] = pe(ya), [D, m] = pe(e), [Y, X] = pe(!1), [z, P] = pe(!1), [f, v] = pe(""), [g, $] = pe(/* @__PURE__ */ new Set()), [w, k] = pe(/* @__PURE__ */ new Set()), V = he([]);
  ye(() => () => V.current.forEach(clearTimeout), []);
  const {
    zoom: q,
    startDate: A,
    isLoading: C,
    config: { includeTakenHoursOnWeekendsInDayView: T, showTooltip: L, showThemeToggle: I }
  } = Ze(), R = he(null), K = he(null), [ne, ie] = pe(124), {
    page: F,
    projectsPerPerson: W,
    rowsPerItem: J,
    currentPageNum: te,
    pagesAmount: M,
    next: j,
    previous: _,
    reset: Q
  } = ji(D), { effectiveCategories: H, effectivePage: N } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: F };
    const re = Ii(F);
    if (re.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: F };
    const de = F.map((oe) => {
      if (oe.isSubcontract || oe.capacity == null)
        return oe;
      const ke = re.capacityToCategoryId.get(oe.capacity);
      return ke ? { ...oe, categoryId: ke } : oe;
    });
    return { effectiveCategories: re.categories, effectivePage: de };
  }, [t, F]), p = le(
    (re) => {
      if (g.has(re)) {
        $((oe) => {
          const ke = new Set(oe);
          return ke.delete(re), ke;
        });
        return;
      }
      if (yo()) {
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
  ), G = $e(() => {
    const re = [], de = H ? [...H].sort((oe, ke) => oe.maxPassengers - ke.maxPassengers) : [];
    for (const oe of de)
      N.some((ke) => !ke.isSubcontract && ke.categoryId === oe.id) && re.push(oe.id);
    return N.some((oe) => oe.isSubcontract) && re.push("__subcontract__"), re;
  }, [H, N]), E = le(() => {
    $(/* @__PURE__ */ new Set());
  }, []), Z = le(() => {
    $(new Set(G));
  }, [G]), ee = $e(() => {
    if (w.size === 0)
      return ga;
    const re = /* @__PURE__ */ new Set();
    for (const de of N) {
      const oe = de.isSubcontract ? "__subcontract__" : de.categoryId;
      oe && w.has(oe) && re.add(de.id);
    }
    return re;
  }, [w, N]), {
    visiblePage: U,
    visibleRowsPerItem: ce,
    visibleTotalRows: ge,
    visibleProjectsPerPerson: ue,
    separatorRowIndices: xe,
    subcontractSeparatorRow: De
  } = $e(() => {
    const re = va(N, H), de = ((H == null ? void 0 : H.length) ?? 0) > 0, oe = /* @__PURE__ */ new Map();
    F.forEach((Ye, ut) => oe.set(Ye.id, ut));
    const ke = [], Ie = [], Be = [], Ve = [];
    let rt = 0, Yt = -1;
    for (const Ye of re)
      if (Ye.type === "subcontract" || Ye.type === "category" && de) {
        const ft = Ye.type === "subcontract" ? "__subcontract__" : Ye.category.id, ht = g.has(ft);
        if (Ve.push(rt), Ye.type === "subcontract" && (Yt = rt), !ht)
          for (const ot of Ye.items) {
            const Lt = oe.get(ot.id) ?? 0, Rt = J[Lt];
            ke.push(ot), Ie.push(Rt), Be.push(W[Lt]), rt += Rt;
          }
      } else
        for (const ft of Ye.items) {
          const ht = oe.get(ft.id) ?? 0, ot = J[ht];
          ke.push(ft), Ie.push(ot), Be.push(W[ht]), rt += ot;
        }
    const Ke = Ie.reduce((Ye, ut) => Ye + ut, 0);
    return {
      visiblePage: ke,
      visibleRowsPerItem: Ie,
      visibleTotalRows: Ke,
      visibleProjectsPerPerson: Be,
      separatorRowIndices: Ve,
      subcontractSeparatorRow: Yt
    };
  }, [N, H, F, g, J, W]), be = he(
    Cn(
      (re, de, oe, ke, Ie, Be) => {
        if (!R.current)
          return;
        const { tile: Ve, segmentId: rt } = Ae(re);
        if (!rt || !Ve) {
          X(!1);
          return;
        }
        const Yt = me(rt, de), Ke = R.current.getBoundingClientRect(), Ye = Ve.getBoundingClientRect(), ut = { x: re.clientX - Ke.left, y: re.clientY - Ke.top }, ft = {
          x: re.clientX - Ke.left,
          y: re.clientY - Ke.top
        }, ht = {
          x: Ye.left - Ke.left,
          y: Ye.top - Ke.top,
          width: Ye.width,
          height: Ye.height
        }, {
          coords: { x: ot, y: Lt },
          resourceIndex: Rt,
          disposition: $o,
          reservationData: Do
        } = Pi(
          Yt,
          oe,
          ut,
          ke,
          Ie,
          Be,
          T
        );
        b({
          coords: { x: ot, y: Lt },
          mouseCoords: ft,
          resourceIndex: Rt,
          disposition: $o,
          reservationData: Do,
          tileBounds: ht
        }), X(!0);
      },
      4
    )
  ), ae = he(
    Cn((re, de) => {
      Q(), m(
        re.map((oe) => ({
          ...oe,
          data: oe.data.filter((ke) => {
            const { title: Ie, description: Be, subtitle: Ve } = ke;
            return (Ie == null ? void 0 : Ie.toLowerCase().includes(de.toLowerCase())) || (Ve == null ? void 0 : Ve.toLowerCase().includes(de.toLowerCase())) || (Be == null ? void 0 : Be.toLowerCase().includes(de.toLowerCase()));
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
    v(de), ae.current.cancel(), de ? ae.current(e, de) : (Q(), m(e));
  }, fe = le(() => {
    be.current.cancel(), X(!1);
  }, []);
  return ye(() => {
    const re = (oe) => be.current(
      oe,
      e,
      A,
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
    A,
    q,
    e
  ]), ye(() => {
    f ? (ae.current.cancel(), ae.current(e, f)) : m(e);
  }, [e, f]), Kt(() => {
    const re = K.current;
    if (!re)
      return;
    const de = () => ie(re.offsetHeight);
    de();
    const oe = new ResizeObserver(de);
    return oe.observe(re), () => oe.disconnect();
  }, []), /* @__PURE__ */ B(ha, { children: [
    /* @__PURE__ */ h(
      Fc,
      {
        headerHeight: ne,
        data: N,
        categories: H,
        pageNum: te,
        pagesAmount: M,
        rows: J,
        onLoadNext: j,
        onLoadPrevious: _,
        searchInputValue: f,
        onSearchInputChange: Le,
        onItemClick: o,
        collapsedGroups: g,
        fadingGroups: w,
        onToggleGroup: p,
        allGroupIds: G,
        onExpandAll: E,
        onCollapseAll: Z
      }
    ),
    /* @__PURE__ */ B(pa, { children: [
      /* @__PURE__ */ h(
        ml,
        {
          ref: K,
          zoom: q,
          topBarWidth: i,
          showThemeToggle: I,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Di,
        {
          data: U,
          baseData: r || e,
          zoom: q,
          rows: ge,
          ref: R,
          onTileClick: n,
          onEventDrop: c,
          onEventDrag: l,
          draggableConfig: a,
          onDragStateChange: P,
          onTimeRangeSelect: d,
          onMultiTimeRangeSelect: u,
          clickToAddConfig: y,
          separatorRowIndices: xe,
          subcontractSeparatorRow: De,
          fadingUnitIds: ee
        }
      ) : /* @__PURE__ */ h(ma, { width: i, children: C ? /* @__PURE__ */ h(An, { isLoading: C, position: "left" }) : /* @__PURE__ */ h(fa, {}) }),
      L && /* @__PURE__ */ h(ed, { tooltipData: S, visible: Y && !z })
    ] })
  ] });
}, ba = x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Ne + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.mode === "dark" ? e.colors.primary : "#fff"};
`, gr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, wa = x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, Sa = x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, yr = x.button`
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
`, Ca = x.button`
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
`, Ma = x.div`
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
`, vr = x.button`
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
`, ka = x.label`
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
`, $a = x.span`
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
`, $t = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), Da = () => {
  var r, t;
  const e = document.getElementById(uo);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, Ea = () => {
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
  return /* @__PURE__ */ B(ba, { width: 0, children: [
    /* @__PURE__ */ B(gr, { $at: "start", children: [
      /* @__PURE__ */ B(Sa, { children: [
        /* @__PURE__ */ h(yr, { onClick: n, "aria-label": "Anterior", children: /* @__PURE__ */ h($t, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h(Ca, { onClick: o, children: "Hoy" }),
        /* @__PURE__ */ h(yr, { onClick: t, "aria-label": "Siguiente", children: /* @__PURE__ */ h($t, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      e.showViewSwitcher !== !1 && /* @__PURE__ */ B(Te, { children: [
        /* @__PURE__ */ h(wa, {}),
        /* @__PURE__ */ B(Ma, { children: [
          /* @__PURE__ */ h("button", { className: r === 2 ? "on" : "", onClick: () => s(2), children: "Día" }),
          /* @__PURE__ */ h("button", { className: r === 0 ? "on" : "", onClick: () => s(0), children: "Semana" }),
          /* @__PURE__ */ h("button", { className: r === 1 ? "on" : "", onClick: () => s(1), children: "Mes" })
        ] })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ B(ka, { children: [
        /* @__PURE__ */ B($t, { children: [
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
    /* @__PURE__ */ B(gr, { $at: "end", children: [
      e.showFilterButton !== !1 && a >= 0 && /* @__PURE__ */ B(vr, { $primary: !!a, onClick: c, children: [
        /* @__PURE__ */ h($t, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!a && /* @__PURE__ */ h($a, { children: a })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ B(vr, { onClick: Da, children: [
        /* @__PURE__ */ h($t, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      l
    ] })
  ] });
}, _a = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ta = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Aa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Pa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Oa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ia = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ya = (e) => /* @__PURE__ */ se.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), La = (e) => /* @__PURE__ */ se.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Ra = (e) => /* @__PURE__ */ se.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Na = (e) => /* @__PURE__ */ se.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Fa = (e) => /* @__PURE__ */ se.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), za = (e) => /* @__PURE__ */ se.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Ha = (e) => /* @__PURE__ */ se.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Ba = (e) => /* @__PURE__ */ se.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ se.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ se.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ se.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Wa = {
  add: _a,
  subtract: Ta,
  filter: Aa,
  arrowLeft: Pa,
  arrowRight: Oa,
  defaultAvatar: Ia,
  calendarWarning: Ya,
  calendarFree: La,
  arrowDown: Na,
  arrowUp: Ra,
  search: Fa,
  close: za,
  moon: Ha,
  sun: Ba
}, rn = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = Jt(), i = Wa[e];
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
}, ja = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => ja(e, r, t)}
`;
const Za = x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${lo}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Fe};
`, Va = x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Ga = x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, Xa = x.div`
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
`, Ua = x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, Ka = x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, Ja = x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`, qa = x.div`
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
`, Qa = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, ec = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, tc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, nc = x.div`
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
`, xr = "#cdd8d2", br = [178, 216, 195], rc = [15, 125, 102], oc = (e) => {
  const r = Math.min(1, Math.max(0, e)), t = (n) => Math.round(br[n] + (rc[n] - br[n]) * r);
  return `rgb(${t(0)}, ${t(1)}, ${t(2)})`;
}, sc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ze(), s = nt(), i = he(null), [c, l] = pe(null), a = $e(
    () => Array.from({ length: 12 }, (w, k) => O().month(k).format("MMM").toUpperCase()),
    [s]
  ), d = $e(() => O().startOf("day"), []), { domainStart: u, domainEnd: y, domainDays: S } = $e(() => {
    const w = d.subtract(3, "month").startOf("month"), k = d.add(9, "month").endOf("month");
    return { domainStart: w, domainEnd: k, domainDays: k.diff(w, "day") + 1 };
  }, [d]), b = (w) => w.diff(u, "day") / S * 100, D = (w) => Math.min(100, Math.max(0, w)), m = $e(() => {
    const w = [];
    let k = u.startOf("month");
    for (; k.isBefore(y); )
      w.push(k), k = k.add(1, "month");
    return w;
  }, [u, y]), Y = o == null ? void 0 : o.yearCounts, X = $e(() => {
    const w = Math.ceil(S / 7), k = new Array(w).fill(0), V = (R) => {
      const K = R.diff(u, "day");
      return K < 0 || K >= S ? -1 : Math.floor(K / 7);
    };
    if (Y && Y.length)
      for (const R of Y) {
        const K = V(O(R.date));
        K >= 0 && (k[K] += R.count);
      }
    else
      for (const R of t ?? [])
        for (const K of R.data ?? []) {
          const ne = V(O(K.startDate));
          ne >= 0 && (k[ne] += 1);
        }
    const q = Math.max(0, ...k);
    if (q <= 0)
      return k.map(() => ({ h: 0, color: xr }));
    const A = k.filter((R) => R > 0).sort((R, K) => R - K), C = A.length >> 1, T = A.length % 2 ? A[C] : (A[C - 1] + A[C]) / 2, L = T > 0 ? q / T : 1, I = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, L)))));
    return k.map(
      (R) => R > 0 ? { h: Math.min(100, 100 * Math.pow(R / q, I)), color: oc(R / q) } : { h: 0, color: xr }
    );
  }, [t, Y, u, S]), z = b(d), P = (w) => {
    const { startDate: k, endDate: V } = Qt(w, r), q = D(b(k));
    return { left: q, width: D(b(V)) - q, startDate: k, endDate: V };
  }, f = P(e), v = c ? P(c.d) : null, g = (w) => `${w.date()} ${a[w.month()]}`, $ = (w) => {
    var q;
    const k = (q = i.current) == null ? void 0 : q.getBoundingClientRect();
    if (!k)
      return null;
    const V = Math.min(1, Math.max(0, (w - k.left) / k.width));
    return { f: V, d: u.add(Math.round(V * (S - 1)), "day") };
  };
  return /* @__PURE__ */ B(Za, { children: [
    /* @__PURE__ */ B(Va, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ B(
      Ga,
      {
        ref: i,
        onClick: (w) => {
          const k = $(w.clientX);
          k && n(k.d.toDate());
        },
        onMouseMove: (w) => {
          const k = $(w.clientX);
          k && l({ left: k.f * 100, d: k.d });
        },
        onMouseLeave: () => l(null),
        children: [
          /* @__PURE__ */ h(Xa, { children: m.map((w, k) => /* @__PURE__ */ h("span", { style: { left: `${b(w)}%` }, children: k === 0 || w.month() === 0 ? `${a[w.month()]} ${w.format("YY")}` : a[w.month()] }, k)) }),
          m.map(
            (w, k) => k === 0 ? null : /* @__PURE__ */ h(Ua, { style: { left: `${b(w)}%` } }, k)
          ),
          /* @__PURE__ */ h(Ka, { children: X.map((w, k) => /* @__PURE__ */ h(Ja, { style: { height: `${w.h}%`, background: w.color } }, k)) }),
          /* @__PURE__ */ h(Qa, { style: { left: `${f.left}%`, width: `${f.width}%` } }),
          /* @__PURE__ */ h(qa, { style: { left: `${D(z)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && v && /* @__PURE__ */ B(Te, { children: [
            /* @__PURE__ */ h(ec, { style: { left: `${v.left}%`, width: `${v.width}%` } }),
            /* @__PURE__ */ h(tc, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(nc, { style: { left: `${c.left}%` }, children: `Ir a ${g(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, ic = x.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, ac = x.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? lo : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, cc = x.div`
  position: relative;
`, lc = ({
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
  const { goToDate: b, handleGoToday: D, zoomIn: m, zoomOut: Y, zoom: X } = Ze();
  return Vr(
    d,
    () => ({
      goToDate: b,
      goToToday: D,
      setZoom: (z) => {
        if (!po(z))
          return;
        const P = z - X;
        if (P > 0)
          for (let f = 0; f < P; f++)
            m();
        else
          for (let f = 0; f < Math.abs(P); f++)
            Y();
      }
    }),
    [b, D, X, m, Y]
  ), /* @__PURE__ */ h(
    xa,
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
}, jd = Pn(function({
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
  onEventDrag: b,
  draggableConfig: D,
  onTimeRangeSelect: m,
  onMultiTimeRangeSelect: Y,
  clickToAddConfig: X
}, z) {
  var L;
  const P = $e(
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
  ), f = he(null), v = he(null), [g, $] = pe((L = f.current) == null ? void 0 : L.clientWidth), w = $e(() => O(s), [s]), [k, V] = pe(P.defaultTheme ?? "light"), q = () => {
    V(k === "light" ? "dark" : "light");
  }, A = k === "light" ? Ps : Os, C = P.theme ? P.theme[A.mode] : {}, T = {
    ...A,
    colors: {
      ...A.colors,
      ...C
    }
  };
  return Vr(
    z,
    () => ({
      goToDate: (I) => {
        var R;
        return (R = v.current) == null ? void 0 : R.goToDate(I);
      },
      goToToday: () => {
        var I;
        return (I = v.current) == null ? void 0 : I.goToToday();
      },
      setZoom: (I) => {
        var R;
        return (R = v.current) == null ? void 0 : R.setZoom(I);
      }
    }),
    []
  ), Kt(() => {
    const I = () => {
      f.current && $(f.current.clientWidth);
    };
    I(), window.addEventListener("resize", I);
    let R;
    const K = f.current;
    return K && typeof ResizeObserver < "u" && (R = new ResizeObserver(I), R.observe(K)), () => {
      window.removeEventListener("resize", I), R == null || R.disconnect();
    };
  }, []), /* @__PURE__ */ B(Te, { children: [
    /* @__PURE__ */ h(As, {}),
    /* @__PURE__ */ h(Ds, { theme: T, children: /* @__PURE__ */ h(ca, { lang: P.lang, translations: P.translations, children: /* @__PURE__ */ h(
      xi,
      {
        data: r,
        isLoading: !!y,
        config: P,
        onRangeChange: i,
        defaultStartDate: w,
        handleToggleDisplayActiveUnits: l,
        onClearFilterData: a,
        toolbarActions: d,
        children: /* @__PURE__ */ B(ic, { id: uo, children: [
          /* @__PURE__ */ h(
            ac,
            {
              showScroll: !!r.length,
              $footer: P.showOverview !== !1 && !!r.length,
              id: et,
              ref: f,
              children: /* @__PURE__ */ h(cc, { children: /* @__PURE__ */ h(
                lc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: g ?? 0,
                  onItemClick: u,
                  toggleTheme: q,
                  onEventDrop: S,
                  onEventDrag: b,
                  draggableConfig: D,
                  schedulerRef: v,
                  onTimeRangeSelect: m,
                  onMultiTimeRangeSelect: Y,
                  clickToAddConfig: X
                }
              ) })
            }
          ),
          P.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(sc, {})
        ] })
      }
    ) }) })
  ] });
}), dc = x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, uc = x.button`
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
`, fc = x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, hc = x.p`
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
  const { loadNext: i, loadPrevious: c } = nt(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(dc, { intent: e, children: /* @__PURE__ */ B(uc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(fc, { children: t }),
    /* @__PURE__ */ h(hc, { children: l })
  ] }) });
}, pc = x.div`
  min-width: ${Ne + "px"};
  max-width: ${Ne + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, mc = x.div`
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
`, gc = x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, yc = x.input`
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
`, vc = x.div`
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
`, xc = Xe`
  from { opacity: 1; }
  to { opacity: 0; }
`, Sr = x.div`
  ${({ $fading: e }) => e && Mt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${xc} 180ms ease forwards;
      }
    `}
`, bc = x.button`
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
`, wc = Xe`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, Sc = x.div`
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
    animation: ${wc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Cc = x.div`
  display: flex;
  align-items: center;
`, Mc = x.div`
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
`, kc = x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, $c = x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Cr = x.p`
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
`, Dc = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`, Ec = x.span`
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
`, _c = x.span`
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
`, Tc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Ac = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: [
  /* @__PURE__ */ h("circle", { cx: "9", cy: "8", r: "3.2" }),
  /* @__PURE__ */ h("path", { d: "M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z" }),
  /* @__PURE__ */ h("circle", { cx: "16.8", cy: "8.6", r: "2.5" }),
  /* @__PURE__ */ h("path", { d: "M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8" })
] }), Pc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Oc = () => /* @__PURE__ */ B("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Ic = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  Sc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ B(Cc, { children: [
      /* @__PURE__ */ h(Mc, { $provider: o, children: Tc(r.icon) ? /* @__PURE__ */ h(kc, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Oc, {}) : /* @__PURE__ */ h(Pc, {}) }),
      /* @__PURE__ */ B($c, { children: [
        /* @__PURE__ */ h(Cr, { isMain: !0, children: r.title }),
        r.capacity != null || r.plate ? /* @__PURE__ */ B(Dc, { children: [
          r.capacity != null && /* @__PURE__ */ B(Ec, { title: `${r.capacity} pasajeros`, children: [
            /* @__PURE__ */ h(Ac, {}),
            r.capacity
          ] }),
          r.plate && /* @__PURE__ */ h(_c, { title: r.plate, children: r.plate })
        ] }) : r.subtitle && /* @__PURE__ */ h(Cr, { children: r.subtitle })
      ] })
    ] })
  }
), Yc = x.div`
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
`, Lc = x.span`
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
`, Rc = x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : "#5C8374"};
  flex-shrink: 0;
`, Nc = x.div`
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
}) => /* @__PURE__ */ B(Yc, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ h(Nc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(Lc, { $variant: o, children: e }),
  /* @__PURE__ */ h(Rc, { $variant: o, children: r })
] }), Fc = ({
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
  allGroupIds: b,
  onExpandAll: D,
  onCollapseAll: m
}) => {
  const [Y, X] = pe(!1), z = nt(), P = () => X((C) => !C), f = r ? [...r].sort((C, T) => C.maxPassengers - T.maxPassengers) : [], v = f.length > 0, g = b.length > 0, $ = g && u.size === b.length;
  g && u.size;
  const w = e.filter((C) => C.isSubcontract), k = z.subcontract ?? "Subcontract", V = (C) => {
    const T = e.indexOf(C);
    return /* @__PURE__ */ h(
      Ic,
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
      (K) => !K.isSubcontract && K.categoryId === C.id
    );
    if (T.length === 0)
      return null;
    const L = u.has(C.id), I = y.has(C.id), R = C.name;
    return /* @__PURE__ */ B("div", { children: [
      /* @__PURE__ */ h(
        Mr,
        {
          label: R,
          count: T.length,
          isCollapsed: L || I,
          onToggle: () => S(C.id),
          variant: "category"
        }
      ),
      !L && /* @__PURE__ */ h(Sr, { $fading: I, children: T.map(V) })
    ] }, C.id);
  }, A = e.filter(
    (C) => !C.isSubcontract && (!C.categoryId || !v)
  );
  return /* @__PURE__ */ B(pc, { children: [
    /* @__PURE__ */ B(mc, { $height: t, children: [
      /* @__PURE__ */ B(gc, { children: [
        /* @__PURE__ */ B(vc, { isFocused: Y, children: [
          /* @__PURE__ */ h(
            yc,
            {
              placeholder: z.search,
              value: l,
              onChange: a,
              onFocus: P,
              onBlur: P
            }
          ),
          /* @__PURE__ */ h(rn, { iconName: "search" })
        ] }),
        g && /* @__PURE__ */ h(
          bc,
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
        wr,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ h(rn, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    v ? f.map(q) : A.map(V),
    v && A.length > 0 && A.map(V),
    w.length > 0 && /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(
        Mr,
        {
          label: k,
          count: w.length,
          isCollapsed: u.has("__subcontract__") || y.has("__subcontract__"),
          onToggle: () => S("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !u.has("__subcontract__") && /* @__PURE__ */ h(Sr, { $fading: y.has("__subcontract__"), children: w.map(V) })
    ] }),
    /* @__PURE__ */ h(
      wr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(rn, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, zc = x.div`
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
`, Hc = Xe`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Bc = x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Hc} 1s infinite;
`, Wc = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(zc, { position: r, children: /* @__PURE__ */ h(Bc, {}) }) : null, An = Wc, Ue = (e, r) => {
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
    strokeStyle: b,
    labelBetweenCells: D
  } = e;
  t.beginPath();
  const m = b ?? (r.mode === "dark" ? r.colors.border : "#E4EAE7");
  if (t.strokeStyle = m, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), D ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : (t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke()), t.font = a;
    const Y = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.mode === "dark" ? r.colors.textPrimary : "#183D3D", t.fillText(l, Y, c);
  }
  if (d && u && y && S) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.beginPath(), t.moveTo(n, o + i - 0.5), t.lineTo(n + s, o + i - 0.5), t.stroke(), t.font = y.font;
    const Y = n + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, Y, y.y), t.font = S.font;
    const X = n + s / 2 - t.measureText(S.label).width / 2;
    t.fillStyle = S.color, t.fillText(S.label, X, S.y);
  }
}, jc = (e, r, t, n, o = dt) => {
  const s = je + o, i = s + 13, c = s + 27;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = ho(
      O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    ), u = d.isCurrentDay;
    if (Ue(
      {
        ctx: e,
        x: l,
        y: s,
        width: Ee,
        height: yt,
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
      const b = l + Ee / 2, D = i - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(b - 30 / 2, D, 30, 13, 5) : e.rect(b - 30 / 2, D, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${Fe}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", b, D + 13 / 2 + 0.5), e.restore();
    }
    l += Ee;
  }
}, Zc = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * He;
  const s = je;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= gn && (c = 0);
    const a = fo(t, l) * He;
    Ue(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: dt,
        textYPos: co,
        label: O().month(c).format("MMMM").toUpperCase(),
        font: Qe.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, Vc = (e, r, t) => {
  let o = 0, s = 0, i = O(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * Ee + Ee;
  for (let c = 0; c < gn; c++)
    i > gn - 1 && (i = 0), s = O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * Ee, Ue(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: je,
        textYPos: Nn,
        label: O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: `800 12px ${Fe}`
      },
      t
    ), o += s, i++;
}, Gc = (e, r, t, n) => {
  const o = 7 * Ee, s = je, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = O(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (c + a) % ar;
    u <= 0 && (u += ar), d !== 1 && a === 0 && (l = -d * Ee + Ee), Ue(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: dt,
        textYPos: co,
        label: `${t.toUpperCase()} ${u}`,
        font: Qe.middleRow
      },
      n
    ), l += o;
  }
}, Xc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, Uc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Kc = (e, r, t, n, o) => {
  const s = Gt - yt / 1.6, i = Gt - yt / 4.5, c = je + dt;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = d.isSame(O(), "week");
    Ue(
      {
        ctx: e,
        x: l,
        y: c,
        width: St,
        height: yt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: u ? o.colors.today + "26" : Xc({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: u ? `700 14px ${Fe}` : Qe.bottomRow.name,
          color: u ? o.colors.today : Uc({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: Qe.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += St;
  }
}, Jc = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (dr(s) - t + 1) * He, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = dr(s + l) * He), d + a > i && l > 0 && (a = Math.ceil((i - d) / He) * He), Ue(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: je,
        textYPos: Nn,
        label: (s + l).toString(),
        font: Qe.topRow
      },
      n
    ), c += a, d += a, l++;
}, qc = (e, r, t, n) => {
  const o = Math.floor(r / Xt) + 2, s = Xt * Oe;
  let l = -O(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Oe + 0.5 * Oe;
  for (let a = 0; a < o; a++) {
    const d = O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Ue(
      {
        ctx: e,
        x: l,
        y: Ct,
        width: s,
        height: Ot,
        textYPos: Ct + Ot / 2 + 2,
        label: d,
        font: Qe.bottomRow.number
      },
      n
    ), l += s;
  }
}, Qc = (e, r, t, n) => {
  const o = Math.ceil(r / Xt), s = O(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * Oe;
  for (let u = 0; u < a; u++) {
    const y = O(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), b = O(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), D = b.format("MMMM").toUpperCase(), m = b.diff(y, "hour") + 1, Y = u === 0 ? m * Oe : r * Oe;
    Ue(
      {
        ctx: e,
        x: d,
        y: 0,
        width: Y,
        height: Ct,
        textYPos: Nn,
        label: D,
        font: Qe.topRow
      },
      n
    ), d += Y;
  }
}, el = (e, r, t, n) => {
  let o = 0;
  const s = Ct + Ot, i = O(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Oe;
  for (let l = 0; l < r; l++) {
    const a = i.add(l, "hours").format("h:00a").toUpperCase();
    Ue(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: mn,
        label: a,
        font: Qe.bottomRow.hoursInDay,
        textYPos: Ct + Ot + mn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Oe;
  }
}, tl = (e, r, t, n, o, s, i, c = !0) => {
  switch (r) {
    case 0:
      Jc(e, n, s, i), Zc(e, t, n, i), Kc(e, t, n, o, i);
      break;
    case 1:
      Vc(e, n, i), c && Gc(e, n, o, i), jc(e, t, n, i, c ? dt : 0);
      break;
    case 2:
      Qc(e, t, n, i), qc(e, t, n, i), el(e, t, n, i);
      break;
  }
}, nl = x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, rl = x.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, ol = x.div`
  height: ${({ $height: e }) => e ?? Gt}px;
  display: block;
`, sl = x.canvas``, il = {
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
}, ze = ({
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
    children: il[e]
  }
), al = x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Ne + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, kr = x.span`
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
`, Ht = x.span`
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
`, cl = x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, ll = x.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, dl = x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, ul = x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, fl = x.span`
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
`, hl = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], pl = () => /* @__PURE__ */ B(al, { children: [
  /* @__PURE__ */ h(kr, { children: "Leyenda" }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(ze, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(ze, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(ze, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ B(Ht, { children: [
    /* @__PURE__ */ h(cl, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(ll, {}),
  /* @__PURE__ */ B(kr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  hl.map((e) => /* @__PURE__ */ B(dl, { children: [
    /* @__PURE__ */ h(ul, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(fl, { style: { color: e.color }, children: /* @__PURE__ */ h(ze, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), ml = Pn(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = nt(), { date: c, cols: l, dayOfYear: a, startDate: d, config: u } = Ze(), y = he(null), S = Jt(), b = u.showWeekRow !== !1, D = r === 2 ? Is : r === 1 && !b ? je + yt : Gt, m = le(
    (Y) => {
      const X = Bn(), z = D + 1;
      go(Y, X, z), tl(Y, r, l, d, i, a, S, b);
    },
    [l, a, d, i, r, S, b, D]
  );
  return ye(() => {
    if (!y.current)
      return;
    const Y = y.current.getContext("2d");
    if (!Y)
      return;
    const X = () => m(Y);
    return window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
  }, [m]), ye(() => {
    const Y = y.current;
    if (!Y)
      return;
    Y.style.letterSpacing = "1px";
    const X = Y.getContext("2d");
    X && m(X);
  }, [c, r, m]), /* @__PURE__ */ B(nl, { ref: s, children: [
    (u.showTopbar !== !1 || u.showLegend !== !1) && /* @__PURE__ */ B(rl, { $width: t, children: [
      u.showTopbar !== !1 && /* @__PURE__ */ h(Ea, { width: t, showThemeToggle: n, toggleTheme: o }),
      u.showLegend !== !1 && /* @__PURE__ */ h(pl, {})
    ] }),
    /* @__PURE__ */ h(ol, { $height: D, id: Ys, children: /* @__PURE__ */ h(sl, { ref: y }) })
  ] });
}), gl = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = He;
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
}, yl = (e, r, t, n, o, s) => {
  const i = e * ve + Ls, c = r.hour(), l = t.hour();
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
    ...gl(
      { startDate: a, endDate: d },
      { startDate: u, endDate: y },
      s
    ),
    y: i
  };
}, Co = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, Mo = {
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
  ${kt}
  ${lt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const vl = Xe`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, xl = Xe`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, bl = x.button`
  ${kt}
  position: absolute;
  height: ${qt}px;
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
    animation: ${vl} 180ms ease-out;
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
  ${({ $exiting: e }) => e && Mt`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${xl} 190ms ease-out forwards;
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
`, wl = x.div`
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
`, $r = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Sl = x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Cl = x.span`
  ${lt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, Ml = x.span`
  ${lt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, kl = x.span`
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
`, $l = x.div`
  ${lt}
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
`, Dr = x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Er = x.span`
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
`, _r = x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, Dl = x.div`
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
`, Tr = x.span`
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
`, El = Xe`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`, _l = x.div`
  position: absolute;
  height: ${qt}px;
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
    animation: ${El} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`, Tl = x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`, Al = x.div`
  ${lt}
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
`, Pl = x.div`
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
`, Ol = x.span`
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
`, Il = x.span`
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
`, Yl = 34, on = ({
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
  ghostBadge: b = ""
}) => {
  const { date: D } = Ze(), m = Qt(D, t), { y: Y, x: X, width: z } = yl(
    e,
    m.startDate,
    m.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: P } = Jt(), f = he(null), v = O(r.startDate).isSame(O(r.endDate), "day"), g = r.eventType === It.Tour, $ = r.eventType === It.Transfer, w = v && (g || $);
  if (S)
    return /* @__PURE__ */ B(_l, { style: { left: `${X}px`, top: `${Y + l}px`, width: `${z}px` }, children: [
      /* @__PURE__ */ B(Tl, { children: [
        /* @__PURE__ */ B(Al, { children: [
          /* @__PURE__ */ h(ze, { name: $ ? "transfer" : "tour" }),
          r.title
        ] }),
        /* @__PURE__ */ B(Pl, { children: [
          /* @__PURE__ */ h(ze, { name: "check", strokeWidth: 2.6 }),
          "flota propia"
        ] })
      ] }),
      b && /* @__PURE__ */ h(Ol, { children: b })
    ] });
  const k = (L) => {
    f.current = { x: L.clientX, y: L.clientY }, c && s && (L.preventDefault(), s(r, L));
  }, V = (L) => {
    if (f.current) {
      const I = Math.abs(L.clientX - f.current.x), R = Math.abs(L.clientY - f.current.y);
      Math.sqrt(I * I + R * R) <= 5 && (o == null || o(r)), f.current = null;
    } else
      o == null || o(r);
  }, q = {
    left: `${X}px`,
    top: `${Y + l}px`,
    backgroundColor: `${r.bgColor ?? P.defaultTile}`,
    width: `${z}px`,
    color: Co(r.bgColor ?? "")
  }, A = !n && r.readiness ? Mo[r.readiness] : null, C = n && r.subcontractConfirmed === !1, T = (L) => /* @__PURE__ */ B(
    bl,
    {
      "data-segment-id": r.segmentId,
      style: q,
      onClick: V,
      onMouseDown: k,
      onDragStart: (I) => I.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: C,
      $exiting: a,
      $highlighted: d,
      $dimmed: u,
      $leaving: y,
      children: [
        y && /* @__PURE__ */ h(Il, { children: "Sub" }),
        L
      ]
    }
  );
  return T(
    w ? /* @__PURE__ */ B(Te, { children: [
      (n || A) && /* @__PURE__ */ h(Dr, { $sm: !0, children: n ? /* @__PURE__ */ h(_r, { children: "SUB" }) : A && /* @__PURE__ */ h(Er, { $sm: !0, style: { color: A.color }, children: /* @__PURE__ */ h(ze, { name: A.icon, strokeWidth: A.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ B(Dl, { $transfer: $, children: [
        /* @__PURE__ */ h(ze, { name: $ ? "transfer" : "sun", strokeWidth: 2.4 }),
        z >= Yl && /* @__PURE__ */ B(Te, { children: [
          /* @__PURE__ */ h(Tr, { children: O(r.startDate).format("h:mm A") }),
          !$ && /* @__PURE__ */ h(Tr, { $end: !0, children: O(r.endDate).format("h:mm A") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(Dr, { children: n ? /* @__PURE__ */ h(_r, { children: "SUB" }) : A && /* @__PURE__ */ h(Er, { style: { color: A.color }, children: /* @__PURE__ */ h(ze, { name: A.icon, strokeWidth: A.icon === "check" ? 2.6 : 2.2 }) }) }),
      r.bookingNumber && /* @__PURE__ */ h(kl, { children: r.bookingNumber }),
      /* @__PURE__ */ B(wl, { children: [
        /* @__PURE__ */ B($r, { $pad: !0, children: [
          /* @__PURE__ */ h(Sl, { children: /* @__PURE__ */ h(ze, { name: $ ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(Cl, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h($r, { children: /* @__PURE__ */ h(Ml, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ B($l, { children: [
          /* @__PURE__ */ h(ze, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Ar = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Re;
}, Ll = (e) => ({
  segmentId: e.segmentId,
  reservationId: e.reservationId,
  startDate: e.startDate,
  endDate: e.endDate,
  occupancy: 0,
  title: e.title,
  bookingNumber: "",
  eventType: e.eventType
}), Rl = ({
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
    const z = /* @__PURE__ */ new Map(), P = !!a && a.length > 0;
    let f = 0;
    return { nodes: e.map((g, $) => {
      $ > 0 && (f += Math.max(e[$ - 1].data.length, 1));
      const w = !!(c != null && c.has(g.id)), k = P && !a.includes(g.id), V = Ar(f, i), q = u && g.id === u.targetUnitId ? /* @__PURE__ */ h(
        on,
        {
          row: f,
          data: Ll(u),
          zoom: r,
          yOffset: V,
          isDragging: !1,
          isDraggable: !1,
          ghost: !0,
          ghostBadge: u.badge
        },
        `ghost-${g.id}`
      ) : null;
      if (!g.data.some((C) => C.length > 0))
        return q ? [q] : [];
      const A = g.data.map(
        (C, T) => C.map((L) => {
          const I = s === L.segmentId, R = o ? o(L) : !1, K = T + f, ne = Ar(K, i);
          return z.set(L.segmentId, {
            project: L,
            absoluteRow: K,
            yOffset: ne,
            isSubcontract: !!g.isSubcontract
          }), /* @__PURE__ */ h(
            on,
            {
              row: K,
              data: L,
              zoom: r,
              isSubcontract: g.isSubcontract,
              onTileClick: t,
              onDragStart: n,
              isDragging: I,
              isDraggable: R,
              yOffset: ne,
              exiting: w,
              highlighted: l != null && L.segmentId === l,
              dimmed: k,
              leaving: !!(d != null && d.includes(L.segmentId))
            },
            L.segmentId
          );
        })
      );
      return q ? [...A, [q]] : A;
    }).flat(2), liveMap: z };
  }, [e, t, r, n, o, s, i, c, l, a, d, u]), b = he(/* @__PURE__ */ new Map()), D = he([]), [m, Y] = pe([]);
  ye(() => () => D.current.forEach(clearTimeout), []), ye(() => {
    const z = b.current;
    b.current = S;
    const P = [];
    if (z.forEach((g, $) => {
      S.has($) || P.push(g);
    }), Y((g) => {
      let $ = g.filter((w) => !S.has(w.project.segmentId));
      for (const w of P)
        $.some((k) => k.project.segmentId === w.project.segmentId) || ($ = [...$, w]);
      return $;
    }), !P.length)
      return;
    const f = new Set(P.map((g) => g.project.segmentId)), v = setTimeout(() => {
      Y((g) => g.filter(($) => !f.has($.project.segmentId)));
    }, 220);
    D.current.push(v);
  }, [S]);
  const X = m.filter((z) => !S.has(z.project.segmentId)).map((z) => /* @__PURE__ */ h(
    on,
    {
      row: z.absoluteRow,
      data: z.project,
      zoom: r,
      isSubcontract: z.isSubcontract,
      yOffset: z.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    z.project.segmentId
  ));
  return /* @__PURE__ */ h(Te, { children: [...y, ...X] });
}, Nl = Rl;
x.div`
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
const Fl = x.div`
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
`, zl = x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, Hl = x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, Bl = x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Wl = x.span`
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
`, jl = x.div`
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
`, Zl = x.div`
  ${kt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Vl = x.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, Gl = x.div`
  padding: 10px 12px;
`, Xl = x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, Pr = x.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Or = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Ir = x.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Yr = x.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Lr = x.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Ul = x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Kl = x.div`
  min-width: 0;
`, Jl = x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, ql = x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, Rr = x.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Dt = x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, Et = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, _t = x.div`
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
const Ql = {
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
}, ed = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = he(null), [s, i] = pe("below"), c = nt(), l = { ...Ql, ...c.tooltip };
  Kt(() => {
    if (!o.current || !t)
      return;
    const D = o.current, { width: m, height: Y } = D.getBoundingClientRect(), X = D.parentElement;
    if (!X)
      return;
    const z = X.getBoundingClientRect(), P = 12, f = 4, v = z.height - t.y, g = z.width - t.x;
    let $ = t.x + P, w = t.y + P, k = "below";
    g < m + P && ($ = t.x - m - P), v < Y + P && (w = t.y - Y - P, k = "above"), $ = Math.max(f, Math.min($, z.width - m - f)), w = Math.max(f, Math.min(w, z.height - Y - f)), i(k), D.style.left = `${$}px`, D.style.top = `${w}px`;
  }, [t]);
  const a = n.reservationType === It.Tour, d = a && n.isOneDayEvent, u = a ? d ? "sun" : "tour" : "transfer", y = a ? d ? l.oneDay : l.tour : l.transfer, S = n.readiness ? Mo[n.readiness] : null, b = [
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ B(Fl, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ B(zl, { children: [
      /* @__PURE__ */ B(Hl, { children: [
        /* @__PURE__ */ h(Bl, { children: n.bookingNumber }),
        /* @__PURE__ */ B(Wl, { children: [
          /* @__PURE__ */ h(ze, { name: u, strokeWidth: 2.4 }),
          y
        ] })
      ] }),
      /* @__PURE__ */ h(Zl, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(Vl, { children: n.client }),
      S && /* @__PURE__ */ B(jl, { style: { color: S.color }, children: [
        /* @__PURE__ */ h(ze, { name: S.icon, strokeWidth: S.icon === "check" ? 2.6 : 2.2 }),
        n.readinessNote || S.label
      ] })
    ] }),
    /* @__PURE__ */ B(Gl, { children: [
      /* @__PURE__ */ B(Xl, { children: [
        /* @__PURE__ */ B(Pr, { children: [
          /* @__PURE__ */ h(Or, { children: l.startDate }),
          /* @__PURE__ */ B(Ir, { children: [
            /* @__PURE__ */ h(Yr, { children: n.startDate }),
            /* @__PURE__ */ h(Lr, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ B(Pr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Or, { children: l.endDate }),
          /* @__PURE__ */ B(Ir, { children: [
            /* @__PURE__ */ h(Yr, { children: n.endDate }),
            /* @__PURE__ */ h(Lr, { children: n.endTime })
          ] })
        ] })
      ] }),
      b.length > 0 && /* @__PURE__ */ h(Ul, { children: b.map((D, m) => /* @__PURE__ */ B(Kl, { children: [
        /* @__PURE__ */ h(Jl, { children: D.label }),
        /* @__PURE__ */ h(ql, { children: D.value })
      ] }, m)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ B(Rr, { children: [
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
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ B(Rr, { children: [
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
const td = x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, nd = x.div`
  position: absolute;
  height: ${qt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, rd = x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Nr = x.p`
  ${kt}
  ${lt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, od = x.p`
  ${kt}
  ${lt}
`, sd = x.div`
  position: sticky;
  left: ${Ne + 16}px;
  overflow: hidden;
`, id = x.div`
  position: absolute;
  height: ${qt}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, ad = x.div`
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
`, cd = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, ld = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, dd = x.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Fr = x.div`
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
`, zr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Hr = x.div`
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
`, Br = x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, sn = x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, an = x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, pt = x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Wr = x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, ud = ({
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
  const a = nt(), d = (P) => {
    let f = 0;
    for (const v of l)
      v <= P && f++;
    return P * ve + f * Re;
  }, [u, y] = pe(null), [S, b] = pe(0), D = le((P = 400, f = 300) => {
    const g = t.width, $ = 48, w = document.getElementById("react-scheduler");
    if (!w)
      return {
        x: r.x + g + 16,
        y: r.y
      };
    const k = w.scrollLeft, V = w.scrollTop, q = w.clientWidth, A = w.clientHeight, C = r.x - k, T = r.y - V, L = {
      left: Ne + 16,
      // Avoid left column
      right: q - 16,
      top: 16,
      bottom: A - 16
    }, I = L.right - (C + g), R = C - L.left, K = L.bottom - (T + $), ne = T - L.top;
    let ie, F;
    return I >= P + 16 ? ie = C + g + 16 : R >= P + 16 ? ie = C - P - 16 : I >= R ? (ie = C + g + 16, ie + P > L.right && (ie = L.right - P)) : (ie = C - P - 16, ie < L.left && (ie = L.left)), K >= f + 16 ? F = T + $ + 16 : ne >= f + 16 ? F = T - f - 16 : K >= ne ? (F = T + $ + 16, F + f > L.bottom && (F = L.bottom - f)) : (F = T - f - 16, F < L.top && (F = L.top)), ie = Math.max(L.left, Math.min(ie, L.right - P)), F = Math.max(L.top, Math.min(F, L.bottom - f)), {
      x: ie + k,
      y: F + V
    };
  }, [r.x, r.y, t.width]);
  ye(() => {
    s === "dragging" && e && S === 0 ? b(r.x) : s === "idle" && b(0);
  }, [s, e, r.x, S]), ye(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const m = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const P = [];
    let f = 0;
    for (const v of i) {
      const g = Math.max(v.data.length, 1);
      if (v.capacity !== void 0 && e.totalPassengers > v.capacity)
        for (let $ = 0; $ < g; $++)
          P.push(f + $);
      f += g;
    }
    return P;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const Y = s === "animating", X = Co(e.bgColor ?? ""), z = () => {
    if (!n)
      return "";
    const P = O(n.startDate).format("MMM D, HH:mm"), f = O(n.endDate).format("HH:mm");
    return `${P} - ${f}`;
  };
  return /* @__PURE__ */ B(td, { children: [
    m.map((P) => /* @__PURE__ */ h(
      ld,
      {
        style: {
          top: `${d(P)}px`,
          height: `${ve}px`
        }
      },
      P
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      cd,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${d(n.resourceIndex)}px`,
          height: `${ve}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ B(Te, { children: [
      /* @__PURE__ */ h(
        id,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ve - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ h(
        ad,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ve - 48) / 2}px`
          },
          children: z()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      dd,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          left: "0px",
          top: `${d(n.resourceIndex)}px`,
          height: `${ve}px`
        }
      }
    ),
    n && o && n.hasConflict && n.conflicts && n.conflicts.length > 0 && s === "dragging" && (() => {
      const P = D(400, 300);
      return /* @__PURE__ */ B(
        Fr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`
          },
          children: [
            /* @__PURE__ */ B(zr, { children: [
              /* @__PURE__ */ h(Hr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Br, { children: n.conflicts.map((f, v) => {
              const g = O(n.startDate).format("YYYY-MM-DD"), $ = O(n.endDate).format("YYYY-MM-DD"), w = O(f.event.startDate).format("YYYY-MM-DD"), k = O(f.event.endDate).format("YYYY-MM-DD"), V = O(f.conflictStart).format("YYYY-MM-DD"), q = O(f.conflictEnd).format("YYYY-MM-DD"), A = g !== $, C = w !== k, T = V !== q, L = A ? O(n.startDate).format("MMM D, h:mm A") : O(n.startDate).format("h:mm A"), I = A ? O(n.endDate).format("MMM D, h:mm A") : O(n.endDate).format("h:mm A"), R = C ? O(f.event.startDate).format("MMM D, h:mm A") : O(f.event.startDate).format("h:mm A"), K = C ? O(f.event.endDate).format("MMM D, h:mm A") : O(f.event.endDate).format("h:mm A"), ne = T ? O(f.conflictStart).format("MMM D, h:mm A") : O(f.conflictStart).format("h:mm A"), ie = T ? O(f.conflictEnd).format("MMM D, h:mm A") : O(f.conflictEnd).format("h:mm A"), F = T ? "" : O(f.conflictStart).format("MMM D"), W = n.startDate.getTime(), J = n.endDate.getTime(), te = f.event.startDate.getTime(), M = f.event.endDate.getTime(), j = W >= te && W < M, _ = J > te && J <= M, Q = W <= te && J >= M, H = te <= W && M >= J;
              let N = !1, p = !1, G = !1, E = !1, Z = "";
              return Q || H ? (N = !0, p = !0, G = !0, E = !0, Z = `⚠️ ${a.conflicts.changeBoth}`) : j && _ ? (N = !0, p = !0, G = !0, E = !0, Z = `⚠️ ${a.conflicts.changeBoth}`) : j ? (N = !0, E = !0, Z = `⚠️ ${a.conflicts.changeStart}`) : _ && (p = !0, G = !0, Z = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ B(sn, { children: [
                /* @__PURE__ */ B(an, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  f.event.title,
                  f.event.subtitle && ` - ${f.event.subtitle}`
                ] }),
                /* @__PURE__ */ B(pt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  N ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: L }) : L,
                  " ",
                  a.conflicts.to,
                  " ",
                  p ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
                ] }),
                /* @__PURE__ */ B(pt, { children: [
                  /* @__PURE__ */ h("strong", { children: f.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  G ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: R }) : R,
                  " ",
                  a.conflicts.to,
                  " ",
                  E ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: K }) : K
                ] }),
                /* @__PURE__ */ B(Wr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  F && `${F}, `,
                  ne,
                  " - ",
                  ie
                ] }),
                Z && /* @__PURE__ */ h(pt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: Z })
              ] }, v);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const P = D(400, 400);
      return /* @__PURE__ */ B(
        Fr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ B(zr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Hr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ B(Br, { children: [
              (() => {
                const f = n.nearbyEvents.some((w) => w.position === "before"), v = n.nearbyEvents.some((w) => w.position === "after"), g = O(n.startDate).format("h:mm A"), $ = O(n.endDate).format("h:mm A");
                return /* @__PURE__ */ B(sn, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ B(an, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ B(pt, { style: { fontWeight: 600 }, children: [
                    O(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    f ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: g }) : g,
                    " ",
                    a.conflicts.to,
                    " ",
                    v ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: $ }) : $
                  ] }),
                  /* @__PURE__ */ h(pt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((f, v) => {
                const g = O(f.event.startDate).format("YYYY-MM-DD"), $ = O(f.event.endDate).format("YYYY-MM-DD"), w = g !== $, k = w ? O(f.event.startDate).format("MMM D, h:mm A") : O(f.event.startDate).format("h:mm A"), V = w ? O(f.event.endDate).format("MMM D, h:mm A") : O(f.event.endDate).format("h:mm A"), q = O(f.event.startDate).format("MMM D"), A = Math.floor(f.timeGap / (1e3 * 60 * 60)), C = Math.floor(f.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), T = A > 0 ? `${A}h ${C}m` : `${C}m`, L = f.position === "after", I = f.position === "before";
                return /* @__PURE__ */ B(sn, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ B(an, { style: { color: "#1B5E20" }, children: [
                    f.event.title,
                    f.event.subtitle && ` - ${f.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ B(pt, { children: [
                    !w && `${q}: `,
                    L ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: k }) : k,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: V }) : V
                  ] }),
                  /* @__PURE__ */ B(Wr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    T,
                    " ",
                    f.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, v);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      nd,
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
          color: X
        },
        children: /* @__PURE__ */ h(rd, { children: /* @__PURE__ */ B(sd, { children: [
          /* @__PURE__ */ h(Nr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Nr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(od, { children: e.description })
        ] }) })
      }
    )
  ] });
}, fd = ud, hd = Xe`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, pd = x.div`
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
  animation: ${hd} 1.5s ease-in-out infinite;
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
`, md = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  pd,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), gd = md, yd = Xe`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, vd = x.div`
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
  animation: ${yd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, xd = x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, bd = x.span`
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
`, wd = x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Sd = x.span`
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
const Cd = x.div`
  display: flex;
  gap: 8px;
`, jr = x.button`
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
`, Md = ({ selections: e, onConfirm: r, onClear: t }) => {
  var b;
  const o = nt().multiSelect, s = $e(() => e.filter((D) => D.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", d = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", u = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((b = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : b.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, S = /* @__PURE__ */ B(vd, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ B(xd, { children: [
      /* @__PURE__ */ B(bd, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ B(wd, { children: [
        "⚠️ ",
        u
      ] }),
      /* @__PURE__ */ h(Sd, { children: c })
    ] }),
    /* @__PURE__ */ B(Cd, { children: [
      /* @__PURE__ */ B(jr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ h(jr, { variant: "primary", $hasConflicts: y, onClick: r, children: y ? `⚠️ ${d}` : `✓ ${a}` })
    ] })
  ] });
  return Ao(S, document.body);
}, kd = Md, $d = Xe`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Dd = x.div`
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
  animation: ${$d} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && Mt`
      border-style: dashed;
    `}
`, Ed = x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, _d = x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Td = x.button`
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
`, Ad = ({
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
        return He * 7;
      case 1:
        return Ee;
      case 2:
        return Oe;
      default:
        return Ee;
    }
  }, [t]), S = $e(() => O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), b = $e(() => e.map((v, g) => {
    let $ = 0, w = !1;
    for (const R of r) {
      if (R.id === v.resourceId) {
        w = !0;
        break;
      }
      $ += Math.max(R.data.length, 1);
    }
    if (!w)
      return null;
    const k = O(v.startDate), V = O(v.endDate);
    let q, A;
    switch (t) {
      case 0:
        q = Math.floor(k.diff(S, "days") / 7), A = Math.max(1, Math.ceil(V.diff(k, "days") / 7) + 1);
        break;
      case 1:
        q = k.diff(S, "days"), A = Math.max(1, V.diff(k, "days") + 1);
        break;
      case 2:
        q = k.diff(S, "hours"), A = Math.max(1, V.diff(k, "hours") + 1);
        break;
      default:
        q = 0, A = 1;
    }
    const C = q * y;
    let T = 0;
    for (const R of i)
      R <= $ && T++;
    const L = $ * ve + T * Re, I = A * y;
    return {
      index: g,
      selection: v,
      x: C,
      y: L,
      width: I,
      height: ve
    };
  }), [e, r, t, S, y]), D = (v, g) => {
    const $ = O(v).format("MMM D"), w = O(g).format("MMM D");
    return $ === w ? $ : `${$} - ${w}`;
  }, m = (v) => !v.hasConflict || !v.conflicts ? "" : `⚠️ Conflicts with:
${v.conflicts.map(($) => {
    const w = ($.overlapDuration / 36e5).toFixed(1);
    return `• ${$.event.title} (${w}h overlap)`;
  }).join(`
`)}`, Y = le(
    (v) => {
      let g = 0;
      for (const $ of r) {
        const w = Math.max($.data.length, 1);
        if (v >= g * ve && v < (g + w) * ve)
          return {
            resourceId: $.id,
            resourceLabel: $.label
          };
        g += w;
      }
      return null;
    },
    [r]
  ), X = le(
    (v) => {
      const g = Math.floor(v / y);
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
  ), z = le(
    (v, g) => {
      !s || (v.preventDefault(), v.stopPropagation(), !b[g]) || (u.current = { x: v.clientX, y: v.clientY }, l(g), d({ x: 0, y: 0 }));
    },
    [s, b]
  ), P = le(
    (v) => {
      if (c === null || !u.current)
        return;
      const g = v.clientX - u.current.x, $ = v.clientY - u.current.y, w = Math.round(g / y) * y, k = Math.round($ / ve) * ve;
      d({ x: w, y: k });
    },
    [c, y]
  ), f = le(() => {
    if (c === null || !s) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const v = b[c];
    if (!v) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const g = v.x + a.x, $ = v.y + a.y, w = Y($ + ve / 2);
    if (!w) {
      l(null), d({ x: 0, y: 0 }), u.current = null;
      return;
    }
    const k = X(g), V = e[c], q = V.endDate.getTime() - V.startDate.getTime(), A = new Date(k.getTime() + q);
    s(c, {
      startDate: k,
      endDate: A,
      resourceId: w.resourceId,
      resourceLabel: w.resourceLabel
    }), l(null), d({ x: 0, y: 0 }), u.current = null;
  }, [c, a, b, e, s, Y, X]);
  return ye(() => {
    if (c !== null)
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", f);
      };
  }, [c, P, f]), /* @__PURE__ */ h(Te, { children: b.map((v) => {
    if (!v)
      return null;
    const g = v.selection.hasConflict || !1, $ = c === v.index, w = $ ? v.x + a.x : v.x, k = $ ? v.y + a.y : v.y;
    return /* @__PURE__ */ B(
      Dd,
      {
        $hasConflict: g,
        $isDragging: $,
        style: {
          left: w,
          top: k,
          width: v.width,
          height: v.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (V) => z(V, v.index),
        children: [
          g && /* @__PURE__ */ h(_d, { title: m(v.selection), children: "⚠️" }),
          /* @__PURE__ */ h(Ed, { $hasConflict: g, children: D(v.selection.startDate, v.selection.endDate) }),
          /* @__PURE__ */ h(
            Td,
            {
              onClick: (V) => {
                V.stopPropagation(), o(v.index);
              },
              onMouseDown: (V) => V.stopPropagation(),
              title: g ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      v.index
    );
  }) });
}, Pd = Ad, ko = (e, r, t, n) => {
  if (r === 2)
    return null;
  const o = r === 0 ? He * 7 : Ee, s = O().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"), i = e.startOf("day"), c = r === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
  return c < 0 || c >= n ? null : { x: c * o, width: o };
}, Od = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ theme: e }) => e.colors.today}12;
`, Id = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ze(), n = $e(
    () => ko(O(), e, r, t),
    [e, r, t]
  );
  return n ? /* @__PURE__ */ h(Od, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, Yd = Id, Ld = "#2f6fed", Rd = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${Ld}1c;
`, Nd = ({ zoom: e, startDate: r }) => {
  const { cols: t, jumpDate: n } = Ze(), o = $e(() => !n || n.isSame(O(), "day") ? null : ko(n, e, r, t), [n, e, r, t]);
  return o ? /* @__PURE__ */ h(Rd, { style: { left: `${o.x}px`, width: `${o.width}px` }, "aria-hidden": !0 }) : null;
}, Fd = Nd;
export {
  jd as Scheduler
};
