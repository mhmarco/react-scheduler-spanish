var co = Object.defineProperty;
var lo = (e, n, t) => n in e ? co(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var En = (e, n, t) => (lo(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as x, jsxs as q, Fragment as De } from "react/jsx-runtime";
import * as re from "react";
import Ke, { useRef as we, useContext as je, useMemo as $e, useLayoutEffect as Dr, useDebugValue as _n, createElement as uo, createContext as $r, useState as fe, useCallback as le, useEffect as be, forwardRef as Er, useImperativeHandle as _r } from "react";
import { createPortal as fo } from "react-dom";
var Ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xt = {}, ho = {
  get exports() {
    return xt;
  },
  set exports(e) {
    xt = e;
  }
}, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function po() {
  if (Tn)
    return ge;
  Tn = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function M(h) {
    if (typeof h == "object" && h !== null) {
      var N = h.$$typeof;
      switch (N) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case r:
            case a:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case i:
                case d:
                case p:
                case f:
                case s:
                  return h;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  return ge.ContextConsumer = i, ge.ContextProvider = s, ge.Element = e, ge.ForwardRef = d, ge.Fragment = t, ge.Lazy = p, ge.Memo = f, ge.Portal = n, ge.Profiler = o, ge.StrictMode = r, ge.Suspense = a, ge.SuspenseList = l, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(h) {
    return M(h) === i;
  }, ge.isContextProvider = function(h) {
    return M(h) === s;
  }, ge.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ge.isForwardRef = function(h) {
    return M(h) === d;
  }, ge.isFragment = function(h) {
    return M(h) === t;
  }, ge.isLazy = function(h) {
    return M(h) === p;
  }, ge.isMemo = function(h) {
    return M(h) === f;
  }, ge.isPortal = function(h) {
    return M(h) === n;
  }, ge.isProfiler = function(h) {
    return M(h) === o;
  }, ge.isStrictMode = function(h) {
    return M(h) === r;
  }, ge.isSuspense = function(h) {
    return M(h) === a;
  }, ge.isSuspenseList = function(h) {
    return M(h) === l;
  }, ge.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === r || h === a || h === l || h === y || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === f || h.$$typeof === s || h.$$typeof === i || h.$$typeof === d || h.$$typeof === g || h.getModuleId !== void 0);
  }, ge.typeOf = M, ge;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function mo() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = !1, M = !1, h = !1, N = !1, K = !1, z;
    z = Symbol.for("react.module.reference");
    function P(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === t || O === o || K || O === r || O === a || O === l || N || O === y || g || M || h || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === f || O.$$typeof === s || O.$$typeof === i || O.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === z || O.getModuleId !== void 0));
    }
    function u(O) {
      if (typeof O == "object" && O !== null) {
        var U = O.$$typeof;
        switch (U) {
          case e:
            var te = O.type;
            switch (te) {
              case t:
              case o:
              case r:
              case a:
              case l:
                return te;
              default:
                var W = te && te.$$typeof;
                switch (W) {
                  case c:
                  case i:
                  case d:
                  case p:
                  case f:
                  case s:
                    return W;
                  default:
                    return U;
                }
            }
          case n:
            return U;
        }
      }
    }
    var m = i, w = s, _ = e, T = d, B = t, X = p, G = f, k = n, $ = o, D = r, L = a, I = l, J = !1, ee = !1;
    function se(O) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(O) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(O) {
      return u(O) === i;
    }
    function j(O) {
      return u(O) === s;
    }
    function Z(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function V(O) {
      return u(O) === d;
    }
    function b(O) {
      return u(O) === t;
    }
    function R(O) {
      return u(O) === p;
    }
    function v(O) {
      return u(O) === f;
    }
    function Y(O) {
      return u(O) === n;
    }
    function F(O) {
      return u(O) === o;
    }
    function A(O) {
      return u(O) === r;
    }
    function S(O) {
      return u(O) === a;
    }
    function Q(O) {
      return u(O) === l;
    }
    ye.ContextConsumer = m, ye.ContextProvider = w, ye.Element = _, ye.ForwardRef = T, ye.Fragment = B, ye.Lazy = X, ye.Memo = G, ye.Portal = k, ye.Profiler = $, ye.StrictMode = D, ye.Suspense = L, ye.SuspenseList = I, ye.isAsyncMode = se, ye.isConcurrentMode = oe, ye.isContextConsumer = H, ye.isContextProvider = j, ye.isElement = Z, ye.isForwardRef = V, ye.isFragment = b, ye.isLazy = R, ye.isMemo = v, ye.isPortal = Y, ye.isProfiler = F, ye.isStrictMode = A, ye.isSuspense = S, ye.isSuspenseList = Q, ye.isValidElementType = P, ye.typeOf = u;
  }()), ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = po() : e.exports = mo();
})(ho);
function go(e) {
  function n(H, j, Z, V, b) {
    for (var R = 0, v = 0, Y = 0, F = 0, A, S, Q = 0, O = 0, U, te = U = A = 0, W = 0, ie = 0, me = 0, ue = 0, ae = Z.length, de = ae - 1, ce, ne = "", he = "", Me = "", Ae = "", Te; W < ae; ) {
      if (S = Z.charCodeAt(W), W === de && v + F + Y + R !== 0 && (v !== 0 && (S = v === 47 ? 10 : 47), F = Y = R = 0, ae++, de++), v + F + Y + R === 0) {
        if (W === de && (0 < ie && (ne = ne.replace(p, "")), 0 < ne.trim().length)) {
          switch (S) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ne += Z.charAt(W);
          }
          S = 59;
        }
        switch (S) {
          case 123:
            for (ne = ne.trim(), A = ne.charCodeAt(0), U = 1, ue = ++W; W < ae; ) {
              switch (S = Z.charCodeAt(W)) {
                case 123:
                  U++;
                  break;
                case 125:
                  U--;
                  break;
                case 47:
                  switch (S = Z.charCodeAt(W + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (te = W + 1; te < de; ++te)
                          switch (Z.charCodeAt(te)) {
                            case 47:
                              if (S === 42 && Z.charCodeAt(te - 1) === 42 && W + 2 !== te) {
                                W = te + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (S === 47) {
                                W = te + 1;
                                break e;
                              }
                          }
                        W = te;
                      }
                  }
                  break;
                case 91:
                  S++;
                case 40:
                  S++;
                case 34:
                case 39:
                  for (; W++ < de && Z.charCodeAt(W) !== S; )
                    ;
              }
              if (U === 0)
                break;
              W++;
            }
            switch (U = Z.substring(ue, W), A === 0 && (A = (ne = ne.replace(f, "").trim()).charCodeAt(0)), A) {
              case 64:
                switch (0 < ie && (ne = ne.replace(p, "")), S = ne.charCodeAt(1), S) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ie = j;
                    break;
                  default:
                    ie = L;
                }
                if (U = n(j, ie, U, S, b + 1), ue = U.length, 0 < J && (ie = t(L, ne, me), Te = c(3, U, ie, j, k, G, ue, S, b, V), ne = ie.join(""), Te !== void 0 && (ue = (U = Te.trim()).length) === 0 && (S = 0, U = "")), 0 < ue)
                  switch (S) {
                    case 115:
                      ne = ne.replace(m, i);
                    case 100:
                    case 109:
                    case 45:
                      U = ne + "{" + U + "}";
                      break;
                    case 107:
                      ne = ne.replace(K, "$1 $2"), U = ne + "{" + U + "}", U = D === 1 || D === 2 && s("@" + U, 3) ? "@-webkit-" + U + "@" + U : "@" + U;
                      break;
                    default:
                      U = ne + U, V === 112 && (U = (he += U, ""));
                  }
                else
                  U = "";
                break;
              default:
                U = n(j, t(j, ne, me), U, V, b + 1);
            }
            Me += U, U = me = ie = te = A = 0, ne = "", S = Z.charCodeAt(++W);
            break;
          case 125:
          case 59:
            if (ne = (0 < ie ? ne.replace(p, "") : ne).trim(), 1 < (ue = ne.length))
              switch (te === 0 && (A = ne.charCodeAt(0), A === 45 || 96 < A && 123 > A) && (ue = (ne = ne.replace(" ", ":")).length), 0 < J && (Te = c(1, ne, j, H, k, G, he.length, V, b, V)) !== void 0 && (ue = (ne = Te.trim()).length) === 0 && (ne = "\0\0"), A = ne.charCodeAt(0), S = ne.charCodeAt(1), A) {
                case 0:
                  break;
                case 64:
                  if (S === 105 || S === 99) {
                    Ae += ne + Z.charAt(W);
                    break;
                  }
                default:
                  ne.charCodeAt(ue - 1) !== 58 && (he += o(ne, A, S, ne.charCodeAt(2)));
              }
            me = ie = te = A = 0, ne = "", S = Z.charCodeAt(++W);
        }
      }
      switch (S) {
        case 13:
        case 10:
          v === 47 ? v = 0 : 1 + A === 0 && V !== 107 && 0 < ne.length && (ie = 1, ne += "\0"), 0 < J * se && c(0, ne, j, H, k, G, he.length, V, b, V), G = 1, k++;
          break;
        case 59:
        case 125:
          if (v + F + Y + R === 0) {
            G++;
            break;
          }
        default:
          switch (G++, ce = Z.charAt(W), S) {
            case 9:
            case 32:
              if (F + R + v === 0)
                switch (Q) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ce = "";
                    break;
                  default:
                    S !== 32 && (ce = " ");
                }
              break;
            case 0:
              ce = "\\0";
              break;
            case 12:
              ce = "\\f";
              break;
            case 11:
              ce = "\\v";
              break;
            case 38:
              F + v + R === 0 && (ie = me = 1, ce = "\f" + ce);
              break;
            case 108:
              if (F + v + R + $ === 0 && 0 < te)
                switch (W - te) {
                  case 2:
                    Q === 112 && Z.charCodeAt(W - 3) === 58 && ($ = Q);
                  case 8:
                    O === 111 && ($ = O);
                }
              break;
            case 58:
              F + v + R === 0 && (te = W);
              break;
            case 44:
              v + Y + F + R === 0 && (ie = 1, ce += "\r");
              break;
            case 34:
            case 39:
              v === 0 && (F = F === S ? 0 : F === 0 ? S : F);
              break;
            case 91:
              F + v + Y === 0 && R++;
              break;
            case 93:
              F + v + Y === 0 && R--;
              break;
            case 41:
              F + v + R === 0 && Y--;
              break;
            case 40:
              if (F + v + R === 0) {
                if (A === 0)
                  switch (2 * Q + 3 * O) {
                    case 533:
                      break;
                    default:
                      A = 1;
                  }
                Y++;
              }
              break;
            case 64:
              v + Y + F + R + te + U === 0 && (U = 1);
              break;
            case 42:
            case 47:
              if (!(0 < F + R + Y))
                switch (v) {
                  case 0:
                    switch (2 * S + 3 * Z.charCodeAt(W + 1)) {
                      case 235:
                        v = 47;
                        break;
                      case 220:
                        ue = W, v = 42;
                    }
                    break;
                  case 42:
                    S === 47 && Q === 42 && ue + 2 !== W && (Z.charCodeAt(ue + 2) === 33 && (he += Z.substring(ue, W + 1)), ce = "", v = 0);
                }
          }
          v === 0 && (ne += ce);
      }
      O = Q, Q = S, W++;
    }
    if (ue = he.length, 0 < ue) {
      if (ie = j, 0 < J && (Te = c(2, he, ie, H, k, G, ue, V, b, V), Te !== void 0 && (he = Te).length === 0))
        return Ae + he + Me;
      if (he = ie.join(",") + "{" + he + "}", D * $ !== 0) {
        switch (D !== 2 || s(he, 2) || ($ = 0), $) {
          case 111:
            he = he.replace(P, ":-moz-$1") + he;
            break;
          case 112:
            he = he.replace(z, "::-webkit-input-$1") + he.replace(z, "::-moz-$1") + he.replace(z, ":-ms-input-$1") + he;
        }
        $ = 0;
      }
    }
    return Ae + he + Me;
  }
  function t(H, j, Z) {
    var V = j.trim().split(h);
    j = V;
    var b = V.length, R = H.length;
    switch (R) {
      case 0:
      case 1:
        var v = 0;
        for (H = R === 0 ? "" : H[0] + " "; v < b; ++v)
          j[v] = r(H, j[v], Z).trim();
        break;
      default:
        var Y = v = 0;
        for (j = []; v < b; ++v)
          for (var F = 0; F < R; ++F)
            j[Y++] = r(H[F] + " ", V[v], Z).trim();
    }
    return j;
  }
  function r(H, j, Z) {
    var V = j.charCodeAt(0);
    switch (33 > V && (V = (j = j.trim()).charCodeAt(0)), V) {
      case 38:
        return j.replace(N, "$1" + H.trim());
      case 58:
        return H.trim() + j.replace(N, "$1" + H.trim());
      default:
        if (0 < 1 * Z && 0 < j.indexOf("\f"))
          return j.replace(N, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + j;
  }
  function o(H, j, Z, V) {
    var b = H + ";", R = 2 * j + 3 * Z + 4 * V;
    if (R === 944) {
      H = b.indexOf(":", 9) + 1;
      var v = b.substring(H, b.length - 1).trim();
      return v = b.substring(0, H).trim() + v + ";", D === 1 || D === 2 && s(v, 1) ? "-webkit-" + v + v : v;
    }
    if (D === 0 || D === 2 && !s(b, 1))
      return b;
    switch (R) {
      case 1015:
        return b.charCodeAt(10) === 97 ? "-webkit-" + b + b : b;
      case 951:
        return b.charCodeAt(3) === 116 ? "-webkit-" + b + b : b;
      case 963:
        return b.charCodeAt(5) === 110 ? "-webkit-" + b + b : b;
      case 1009:
        if (b.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + b + b;
      case 978:
        return "-webkit-" + b + "-moz-" + b + b;
      case 1019:
      case 983:
        return "-webkit-" + b + "-moz-" + b + "-ms-" + b + b;
      case 883:
        if (b.charCodeAt(8) === 45)
          return "-webkit-" + b + b;
        if (0 < b.indexOf("image-set(", 11))
          return b.replace(X, "$1-webkit-$2") + b;
        break;
      case 932:
        if (b.charCodeAt(4) === 45)
          switch (b.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + b.replace("-grow", "") + "-webkit-" + b + "-ms-" + b.replace("grow", "positive") + b;
            case 115:
              return "-webkit-" + b + "-ms-" + b.replace("shrink", "negative") + b;
            case 98:
              return "-webkit-" + b + "-ms-" + b.replace("basis", "preferred-size") + b;
          }
        return "-webkit-" + b + "-ms-" + b + b;
      case 964:
        return "-webkit-" + b + "-ms-flex-" + b + b;
      case 1023:
        if (b.charCodeAt(8) !== 99)
          break;
        return v = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + v + "-webkit-" + b + "-ms-flex-pack" + v + b;
      case 1005:
        return g.test(b) ? b.replace(y, ":-webkit-") + b.replace(y, ":-moz-") + b : b;
      case 1e3:
        switch (v = b.substring(13).trim(), j = v.indexOf("-") + 1, v.charCodeAt(0) + v.charCodeAt(j)) {
          case 226:
            v = b.replace(u, "tb");
            break;
          case 232:
            v = b.replace(u, "tb-rl");
            break;
          case 220:
            v = b.replace(u, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + v + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (j = (b = H).length - 10, v = (b.charCodeAt(j) === 33 ? b.substring(0, j) : b).substring(H.indexOf(":", 7) + 1).trim(), R = v.charCodeAt(0) + (v.charCodeAt(7) | 0)) {
          case 203:
            if (111 > v.charCodeAt(8))
              break;
          case 115:
            b = b.replace(v, "-webkit-" + v) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(v, "-webkit-" + (102 < R ? "inline-" : "") + "box") + ";" + b.replace(v, "-webkit-" + v) + ";" + b.replace(v, "-ms-" + v + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return v = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + v + "-ms-flex-" + v + b;
            case 115:
              return "-webkit-" + b + "-ms-flex-item-" + b.replace(_, "") + b;
            default:
              return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(_, "") + b;
          }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (B.test(H) === !0)
          return (v = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(H.replace("stretch", "fill-available"), j, Z, V).replace(":fill-available", ":stretch") : b.replace(v, "-webkit-" + v) + b.replace(v, "-moz-" + v.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, Z + V === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(H, j) {
    var Z = H.indexOf(j === 1 ? ":" : "{"), V = H.substring(0, j !== 3 ? Z : 10);
    return Z = H.substring(Z + 1, H.length - 1), ee(j !== 2 ? V : V.replace(T, "$1"), Z, j);
  }
  function i(H, j) {
    var Z = o(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return Z !== j + ";" ? Z.replace(w, " or ($1)").substring(4) : "(" + j + ")";
  }
  function c(H, j, Z, V, b, R, v, Y, F, A) {
    for (var S = 0, Q = j, O; S < J; ++S)
      switch (O = I[S].call(l, H, Q, Z, V, b, R, v, Y, F, A)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Q = O;
      }
    if (Q !== j)
      return Q;
  }
  function d(H) {
    switch (H) {
      case void 0:
      case null:
        J = I.length = 0;
        break;
      default:
        if (typeof H == "function")
          I[J++] = H;
        else if (typeof H == "object")
          for (var j = 0, Z = H.length; j < Z; ++j)
            d(H[j]);
        else
          se = !!H | 0;
    }
    return d;
  }
  function a(H) {
    return H = H.prefix, H !== void 0 && (ee = null, H ? typeof H != "function" ? D = 1 : (D = 2, ee = H) : D = 0), a;
  }
  function l(H, j) {
    var Z = H;
    if (33 > Z.charCodeAt(0) && (Z = Z.trim()), oe = Z, Z = [oe], 0 < J) {
      var V = c(-1, j, Z, Z, k, G, 0, 0, 0, 0);
      V !== void 0 && typeof V == "string" && (j = V);
    }
    var b = n(L, Z, j, 0, 0);
    return 0 < J && (V = c(-2, b, Z, Z, k, G, b.length, 0, 0, 0), V !== void 0 && (b = V)), oe = "", $ = 0, G = k = 1, b;
  }
  var f = /^\0+/g, p = /[\0\r\f]/g, y = /: */g, g = /zoo|gra/, M = /([,: ])(transform)/g, h = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, K = /@(k\w+)\s*(\S*)\s*/, z = /::(place)/g, P = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, m = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, _ = /-self|flex-/g, T = /[^]*?(:[rp][el]a[\w-]+)[^]*/, B = /stretch|:\s*\w+\-(?:conte|avail)/, X = /([^-])(image-set\()/, G = 1, k = 1, $ = 0, D = 1, L = [], I = [], J = 0, ee = null, se = 0, oe = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var yo = {
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
function vo(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var xo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, An = /* @__PURE__ */ vo(
  function(e) {
    return xo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Zt = {}, bo = {
  get exports() {
    return Zt;
  },
  set exports(e) {
    Zt = e;
  }
}, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function wo() {
  if (In)
    return ve;
  In = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
  function z(u) {
    if (typeof u == "object" && u !== null) {
      var m = u.$$typeof;
      switch (m) {
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
                case g:
                case y:
                case i:
                  return u;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  function P(u) {
    return z(u) === a;
  }
  return ve.AsyncMode = d, ve.ConcurrentMode = a, ve.ContextConsumer = c, ve.ContextProvider = i, ve.Element = n, ve.ForwardRef = l, ve.Fragment = r, ve.Lazy = g, ve.Memo = y, ve.Portal = t, ve.Profiler = s, ve.StrictMode = o, ve.Suspense = f, ve.isAsyncMode = function(u) {
    return P(u) || z(u) === d;
  }, ve.isConcurrentMode = P, ve.isContextConsumer = function(u) {
    return z(u) === c;
  }, ve.isContextProvider = function(u) {
    return z(u) === i;
  }, ve.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, ve.isForwardRef = function(u) {
    return z(u) === l;
  }, ve.isFragment = function(u) {
    return z(u) === r;
  }, ve.isLazy = function(u) {
    return z(u) === g;
  }, ve.isMemo = function(u) {
    return z(u) === y;
  }, ve.isPortal = function(u) {
    return z(u) === t;
  }, ve.isProfiler = function(u) {
    return z(u) === s;
  }, ve.isStrictMode = function(u) {
    return z(u) === o;
  }, ve.isSuspense = function(u) {
    return z(u) === f;
  }, ve.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === p || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === y || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === h || u.$$typeof === N || u.$$typeof === K || u.$$typeof === M);
  }, ve.typeOf = z, ve;
}
var xe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function So() {
  return Yn || (Yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
    function z(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === a || S === s || S === o || S === f || S === p || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === y || S.$$typeof === i || S.$$typeof === c || S.$$typeof === l || S.$$typeof === h || S.$$typeof === N || S.$$typeof === K || S.$$typeof === M);
    }
    function P(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case n:
            var O = S.type;
            switch (O) {
              case d:
              case a:
              case r:
              case s:
              case o:
              case f:
                return O;
              default:
                var U = O && O.$$typeof;
                switch (U) {
                  case c:
                  case l:
                  case g:
                  case y:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var u = d, m = a, w = c, _ = i, T = n, B = l, X = r, G = g, k = y, $ = t, D = s, L = o, I = f, J = !1;
    function ee(S) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(S) || P(S) === d;
    }
    function se(S) {
      return P(S) === a;
    }
    function oe(S) {
      return P(S) === c;
    }
    function H(S) {
      return P(S) === i;
    }
    function j(S) {
      return typeof S == "object" && S !== null && S.$$typeof === n;
    }
    function Z(S) {
      return P(S) === l;
    }
    function V(S) {
      return P(S) === r;
    }
    function b(S) {
      return P(S) === g;
    }
    function R(S) {
      return P(S) === y;
    }
    function v(S) {
      return P(S) === t;
    }
    function Y(S) {
      return P(S) === s;
    }
    function F(S) {
      return P(S) === o;
    }
    function A(S) {
      return P(S) === f;
    }
    xe.AsyncMode = u, xe.ConcurrentMode = m, xe.ContextConsumer = w, xe.ContextProvider = _, xe.Element = T, xe.ForwardRef = B, xe.Fragment = X, xe.Lazy = G, xe.Memo = k, xe.Portal = $, xe.Profiler = D, xe.StrictMode = L, xe.Suspense = I, xe.isAsyncMode = ee, xe.isConcurrentMode = se, xe.isContextConsumer = oe, xe.isContextProvider = H, xe.isElement = j, xe.isForwardRef = Z, xe.isFragment = V, xe.isLazy = b, xe.isMemo = R, xe.isPortal = v, xe.isProfiler = Y, xe.isStrictMode = F, xe.isSuspense = A, xe.isValidElementType = z, xe.typeOf = P;
  }()), xe;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = wo() : e.exports = So();
})(bo);
var gn = Zt, Co = {
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
}, Mo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ko = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Tr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yn = {};
yn[gn.ForwardRef] = ko;
yn[gn.Memo] = Tr;
function On(e) {
  return gn.isMemo(e) ? Tr : yn[e.$$typeof] || Co;
}
var Do = Object.defineProperty, $o = Object.getOwnPropertyNames, Ln = Object.getOwnPropertySymbols, Eo = Object.getOwnPropertyDescriptor, _o = Object.getPrototypeOf, Rn = Object.prototype;
function Pr(e, n, t) {
  if (typeof n != "string") {
    if (Rn) {
      var r = _o(n);
      r && r !== Rn && Pr(e, r, t);
    }
    var o = $o(n);
    Ln && (o = o.concat(Ln(n)));
    for (var s = On(e), i = On(n), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!Mo[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = Eo(n, d);
        try {
          Do(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var To = Pr;
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
var Nn = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Vt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !xt.typeOf(e);
}, Tt = Object.freeze([]), ze = Object.freeze({});
function at(e) {
  return typeof e == "function";
}
function Gt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function vn(e) {
  return e && typeof e.styledComponentId == "string";
}
var ct = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", xn = typeof window < "u" && "HTMLElement" in window, Po = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Ao = {}, Io = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Yo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ne(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Yo.apply(void 0, [Io[e]].concat(t)).trim());
}
var Oo = function() {
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
        (i <<= 1) < 0 && Ne(16, "" + t);
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
}(), Et = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), yt = 1, Mt = function(e) {
  if (Et.has(e))
    return Et.get(e);
  for (; Pt.has(yt); )
    yt++;
  var n = yt++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Ne(16, "" + n), Et.set(e, n), Pt.set(n, e), n;
}, Lo = function(e) {
  return Pt.get(e);
}, Ro = function(e, n) {
  n >= yt && (yt = n + 1), Et.set(e, n), Pt.set(n, e);
}, No = "style[" + ct + '][data-styled-version="5.3.8"]', Wo = new RegExp("^" + ct + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Fo = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, Ho = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Wo);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (Ro(a, d), Fo(e, a, c[3]), e.getTag().insertRules(d, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, Bo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ar = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(ct))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ct, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = Bo();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, zo = function() {
  function e(t) {
    var r = this.element = Ar(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var d = s[i];
        if (d.ownerNode === o)
          return d;
      }
      Ne(17);
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
}(), jo = function() {
  function e(t) {
    var r = this.element = Ar(t);
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
}(), Zo = function() {
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
}(), Wn = xn, Vo = { isServer: !xn, useCSSOMInjection: !Po }, At = function() {
  function e(t, r, o) {
    t === void 0 && (t = ze), r === void 0 && (r = {}), this.options = Oe({}, Vo, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && xn && Wn && (Wn = !1, function(s) {
      for (var i = document.querySelectorAll(No), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(ct) !== "active" && (Ho(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Mt(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Oe({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new Zo(i) : s ? new zo(i) : new jo(i), new Oo(t)));
    var t, r, o, s, i;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (Mt(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Mt(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(Mt(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, s = "", i = 0; i < o; i++) {
        var c = Lo(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = r.getGroup(i);
          if (d && a && d.size) {
            var l = ct + ".g" + i + '[id="' + c + '"]', f = "";
            d !== void 0 && d.forEach(function(p) {
              p.length > 0 && (f += p + ",");
            }), s += "" + a + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Go = /(a)(d)/gi, Fn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xt(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Fn(n % 52) + t;
  return (Fn(n % 52) + t).replace(Go, "$1-$2");
}
var Xe = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Ir = function(e) {
  return Xe(5381, e);
};
function Yr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (at(t) && !vn(t))
      return !1;
  }
  return !0;
}
var Xo = Ir("5.3.8"), Uo = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Yr(n), this.componentId = t, this.baseHash = Xe(Xo, t), this.baseStyle = r, At.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Je(this.rules, n, t, r).join(""), c = Xt(Xe(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = r(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = Xe(this.baseHash, r.hash), f = "", p = 0; p < a; p++) {
        var y = this.rules[p];
        if (typeof y == "string")
          f += y, process.env.NODE_ENV !== "production" && (l = Xe(l, y + p));
        else if (y) {
          var g = Je(y, n, t, r), M = Array.isArray(g) ? g.join("") : g;
          l = Xe(l, M + p), f += M;
        }
      }
      if (f) {
        var h = Xt(l >>> 0);
        if (!t.hasNameForId(o, h)) {
          var N = r(f, "." + h, void 0, o);
          t.insertRules(o, h, N);
        }
        s.push(h);
      }
    }
    return s.join(" ");
  }, e;
}(), Ko = /^\s*\/\/.*$/gm, Jo = [":", "[", ".", "#"];
function qo(e) {
  var n, t, r, o, s = e === void 0 ? ze : e, i = s.options, c = i === void 0 ? ze : i, d = s.plugins, a = d === void 0 ? Tt : d, l = new go(c), f = [], p = function(M) {
    function h(N) {
      if (N)
        try {
          M(N + "}");
        } catch {
        }
    }
    return function(N, K, z, P, u, m, w, _, T, B) {
      switch (N) {
        case 1:
          if (T === 0 && K.charCodeAt(0) === 64)
            return M(K + ";"), "";
          break;
        case 2:
          if (_ === 0)
            return K + "/*|*/";
          break;
        case 3:
          switch (_) {
            case 102:
            case 112:
              return M(z[0] + K), "";
            default:
              return K + (B === 0 ? "/*|*/" : "");
          }
        case -2:
          K.split("/*|*/}").forEach(h);
      }
    };
  }(function(M) {
    f.push(M);
  }), y = function(M, h, N) {
    return h === 0 && Jo.indexOf(N[t.length]) !== -1 || N.match(o) ? M : "." + n;
  };
  function g(M, h, N, K) {
    K === void 0 && (K = "&");
    var z = M.replace(Ko, ""), P = h && N ? N + " " + h + " { " + z + " }" : z;
    return n = K, t = h, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(N || !h ? "" : h, P);
  }
  return l.use([].concat(a, [function(M, h, N) {
    M === 2 && N.length && N[0].lastIndexOf(t) > 0 && (N[0] = N[0].replace(r, y));
  }, p, function(M) {
    if (M === -2) {
      var h = f;
      return f = [], h;
    }
  }])), g.hash = a.length ? a.reduce(function(M, h) {
    return h.name || Ne(15), Xe(M, h.name);
  }, 5381).toString() : "", g;
}
var Or = Ke.createContext();
Or.Consumer;
var Lr = Ke.createContext(), Qo = (Lr.Consumer, new At()), Ut = qo();
function Rr() {
  return je(Or) || Qo;
}
function Nr() {
  return je(Lr) || Ut;
}
var Wr = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Ut);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ne(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Ut), this.name + n.hash;
  }, e;
}(), es = /([A-Z])/, ts = /([A-Z])/g, ns = /^ms-/, rs = function(e) {
  return "-" + e.toLowerCase();
};
function Hn(e) {
  return es.test(e) ? e.replace(ts, rs).replace(ns, "-ms-") : e;
}
var Bn = function(e) {
  return e == null || e === !1 || e === "";
};
function Je(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = Je(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Bn(e))
    return "";
  if (vn(e))
    return "." + e.styledComponentId;
  if (at(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var d = e(n);
    return process.env.NODE_ENV !== "production" && xt.isElement(d) && console.warn(Gt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Je(d, n, t, r);
  }
  var a;
  return e instanceof Wr ? t ? (e.inject(t, r), e.getName(r)) : e : Vt(e) ? function l(f, p) {
    var y, g, M = [];
    for (var h in f)
      f.hasOwnProperty(h) && !Bn(f[h]) && (Array.isArray(f[h]) && f[h].isCss || at(f[h]) ? M.push(Hn(h) + ":", f[h], ";") : Vt(f[h]) ? M.push.apply(M, l(f[h], h)) : M.push(Hn(h) + ": " + (y = h, (g = f[h]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || y in yo ? String(g).trim() : g + "px") + ";"));
    return p ? [p + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var zn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ot(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return at(e) || Vt(e) ? zn(Je(Nn(Tt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : zn(Je(Nn(e, t)));
}
var jn = /invalid hook call/i, kt = /* @__PURE__ */ new Set(), Fr = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (jn.test(s))
          o = !1, kt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          r.apply(void 0, [s].concat(c));
        }
      }, we(), o && !kt.has(t) && (console.warn(t), kt.add(t));
    } catch (s) {
      jn.test(s.message) && kt.delete(t);
    } finally {
      console.error = r;
    }
  }
}, Hr = function(e, n, t) {
  return t === void 0 && (t = ze), e.theme !== t.theme && e.theme || n || t.theme;
}, os = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ss = /(^-|-$)/g;
function Nt(e) {
  return e.replace(os, "-").replace(ss, "");
}
var bn = function(e) {
  return Xt(Ir(e) >>> 0);
};
function Dt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Kt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, is = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function as(e, n, t) {
  var r = e[t];
  Kt(n) && Kt(r) ? Br(r, n) : e[t] = n;
}
function Br(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Kt(i))
      for (var c in i)
        is(c) && as(e, i[c], c);
  }
  return e;
}
var lt = Ke.createContext();
lt.Consumer;
function cs(e) {
  var n = je(lt), t = $e(function() {
    return function(r, o) {
      if (!r)
        return Ne(14);
      if (at(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ne(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Ne(8) : o ? Oe({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? Ke.createElement(lt.Provider, { value: t }, e.children) : null;
}
var Wt = {};
function zr(e, n, t) {
  var r = vn(e), o = !Dt(e), s = n.attrs, i = s === void 0 ? Tt : s, c = n.componentId, d = c === void 0 ? function(K, z) {
    var P = typeof K != "string" ? "sc" : Nt(K);
    Wt[P] = (Wt[P] || 0) + 1;
    var u = P + "-" + bn("5.3.8" + P + Wt[P]);
    return z ? z + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(K) {
    return Dt(K) ? "styled." + K : "Styled(" + Gt(K) + ")";
  }(e) : a, f = n.displayName && n.componentId ? Nt(n.displayName) + "-" + n.componentId : n.componentId || d, p = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, y = n.shouldForwardProp;
  r && e.shouldForwardProp && (y = n.shouldForwardProp ? function(K, z, P) {
    return e.shouldForwardProp(K, z, P) && n.shouldForwardProp(K, z, P);
  } : e.shouldForwardProp);
  var g, M = new Uo(t, f, r ? e.componentStyle : void 0), h = M.isStatic && i.length === 0, N = function(K, z) {
    return function(P, u, m, w) {
      var _ = P.attrs, T = P.componentStyle, B = P.defaultProps, X = P.foldedComponentIds, G = P.shouldForwardProp, k = P.styledComponentId, $ = P.target;
      process.env.NODE_ENV !== "production" && _n(k);
      var D = function(V, b, R) {
        V === void 0 && (V = ze);
        var v = Oe({}, b, { theme: V }), Y = {};
        return R.forEach(function(F) {
          var A, S, Q, O = F;
          for (A in at(O) && (O = O(v)), O)
            v[A] = Y[A] = A === "className" ? (S = Y[A], Q = O[A], S && Q ? S + " " + Q : S || Q) : O[A];
        }), [v, Y];
      }(Hr(u, je(lt), B) || ze, u, _), L = D[0], I = D[1], J = function(V, b, R, v) {
        var Y = Rr(), F = Nr(), A = b ? V.generateAndInjectStyles(ze, Y, F) : V.generateAndInjectStyles(R, Y, F);
        return process.env.NODE_ENV !== "production" && _n(A), process.env.NODE_ENV !== "production" && !b && v && v(A), A;
      }(T, w, L, process.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), ee = m, se = I.$as || u.$as || I.as || u.as || $, oe = Dt(se), H = I !== u ? Oe({}, u, {}, I) : u, j = {};
      for (var Z in H)
        Z[0] !== "$" && Z !== "as" && (Z === "forwardedAs" ? j.as = H[Z] : (G ? G(Z, An, se) : !oe || An(Z)) && (j[Z] = H[Z]));
      return u.style && I.style !== u.style && (j.style = Oe({}, u.style, {}, I.style)), j.className = Array.prototype.concat(X, k, J !== k ? J : null, u.className, I.className).filter(Boolean).join(" "), j.ref = ee, uo(se, j);
    }(g, K, z, h);
  };
  return N.displayName = l, (g = Ke.forwardRef(N)).attrs = p, g.componentStyle = M, g.displayName = l, g.shouldForwardProp = y, g.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Tt, g.styledComponentId = f, g.target = r ? e.target : e, g.withComponent = function(K) {
    var z = n.componentId, P = function(m, w) {
      if (m == null)
        return {};
      var _, T, B = {}, X = Object.keys(m);
      for (T = 0; T < X.length; T++)
        _ = X[T], w.indexOf(_) >= 0 || (B[_] = m[_]);
      return B;
    }(n, ["componentId"]), u = z && z + "-" + (Dt(K) ? K : Nt(Gt(K)));
    return zr(K, Oe({}, P, { attrs: p, componentId: u }), t);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(K) {
    this._foldedDefaultProps = r ? Br({}, e.defaultProps, K) : K;
  } }), process.env.NODE_ENV !== "production" && (Fr(l, f), g.warnTooManyClasses = function(K, z) {
    var P = {}, u = !1;
    return function(m) {
      if (!u && (P[m] = !0, Object.keys(P).length >= 200)) {
        var w = z ? ' with the id of "' + z + '"' : "";
        console.warn("Over 200 classes were generated for component " + K + w + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, P = {};
      }
    };
  }(l, f)), g.toString = function() {
    return "." + g.styledComponentId;
  }, o && To(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var Jt = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = ze), !xt.isValidElementType(r))
      return Ne(1, String(r));
    var s = function() {
      return t(r, o, Ot.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Oe({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Oe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(zr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Jt[e] = Jt(e);
});
var ls = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Yr(t), At.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(Je(this.rules, r, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && At.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function ds(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ot.apply(void 0, [e].concat(t)), s = "sc-global-" + bn(JSON.stringify(o)), i = new ls(o, s);
  function c(a) {
    var l = Rr(), f = Nr(), p = je(lt), y = we(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Ke.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(g) {
      return typeof g == "string" && g.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(y, a, l, p, f), Dr(function() {
      if (!l.server)
        return d(y, a, l, p, f), function() {
          return i.removeStyles(y, l);
        };
    }, [y, a, l, p, f]), null;
  }
  function d(a, l, f, p, y) {
    if (i.isStatic)
      i.renderStyles(a, Ao, f, y);
    else {
      var g = Oe({}, l, { theme: Hr(l, p, c.defaultProps) });
      i.renderStyles(a, g, f, y);
    }
  }
  return process.env.NODE_ENV !== "production" && Fr(s), Ke.memo(c);
}
function Lt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ot.apply(void 0, [e].concat(t)).join(""), s = bn(o);
  return new Wr(s, o);
}
var et = function() {
  return je(lt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const C = Jt, gt = "reactSchedulerOutsideWrapper", us = ds`

  #${gt} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${gt} *,
 #${gt} *:before,
 #${gt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, fs = {
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
}, hs = {
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
}, ht = `
margin: 0;
padding: 0;
`, pt = `
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
const Se = 50, Fe = 24, mt = 16, Ue = 40, dt = Ue + mt + Fe, ut = 84, pe = 56, Ye = 196, Ie = 12, _e = 50, ft = 24, bt = 16, qt = 40, ps = ft + bt + qt, Zn = 24, Vn = 52, Le = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter",
    hoursInDay: "400 9px Inter"
  }
}, it = 3, ms = 1.6, gs = 4.5, Qt = 12, It = 24, ys = "reactSchedulerCanvasHeaderWrapper", jr = "reactSchedulerCanvasWrapper", qe = gt, vs = 4, wn = 48, Be = 5, xs = 40, Gn = 8, Sn = Fe / 2 + 2, Zr = mt / 2 + Fe + 1, Xn = 2, Ce = 60, Pe = 21;
var Qe = {}, bs = {
  get exports() {
    return Qe;
  },
  set exports(e) {
    Qe = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Ee, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", p = "quarter", y = "year", g = "date", M = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, N = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
      var $ = ["th", "st", "nd", "rd"], D = k % 100;
      return "[" + k + ($[(D - 20) % 10] || $[D] || $[0]) + "]";
    } }, z = function(k, $, D) {
      var L = String(k);
      return !L || L.length >= $ ? k : "" + Array($ + 1 - L.length).join(D) + k;
    }, P = { s: z, z: function(k) {
      var $ = -k.utcOffset(), D = Math.abs($), L = Math.floor(D / 60), I = D % 60;
      return ($ <= 0 ? "+" : "-") + z(L, 2, "0") + ":" + z(I, 2, "0");
    }, m: function k($, D) {
      if ($.date() < D.date())
        return -k(D, $);
      var L = 12 * (D.year() - $.year()) + (D.month() - $.month()), I = $.clone().add(L, f), J = D - I < 0, ee = $.clone().add(L + (J ? -1 : 1), f);
      return +(-(L + (D - I) / (J ? I - ee : ee - I)) || 0);
    }, a: function(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
    }, p: function(k) {
      return { M: f, y, w: l, d: a, D: g, h: d, m: c, s: i, ms: s, Q: p }[k] || String(k || "").toLowerCase().replace(/s$/, "");
    }, u: function(k) {
      return k === void 0;
    } }, u = "en", m = {};
    m[u] = K;
    var w = function(k) {
      return k instanceof X;
    }, _ = function k($, D, L) {
      var I;
      if (!$)
        return u;
      if (typeof $ == "string") {
        var J = $.toLowerCase();
        m[J] && (I = J), D && (m[J] = D, I = J);
        var ee = $.split("-");
        if (!I && ee.length > 1)
          return k(ee[0]);
      } else {
        var se = $.name;
        m[se] = $, I = se;
      }
      return !L && I && (u = I), I || !L && u;
    }, T = function(k, $) {
      if (w(k))
        return k.clone();
      var D = typeof $ == "object" ? $ : {};
      return D.date = k, D.args = arguments, new X(D);
    }, B = P;
    B.l = _, B.i = w, B.w = function(k, $) {
      return T(k, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var X = function() {
      function k(D) {
        this.$L = _(D.locale, null, !0), this.parse(D);
      }
      var $ = k.prototype;
      return $.parse = function(D) {
        this.$d = function(L) {
          var I = L.date, J = L.utc;
          if (I === null)
            return new Date(NaN);
          if (B.u(I))
            return new Date();
          if (I instanceof Date)
            return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var ee = I.match(h);
            if (ee) {
              var se = ee[2] - 1 || 0, oe = (ee[7] || "0").substring(0, 3);
              return J ? new Date(Date.UTC(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe)) : new Date(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe);
            }
          }
          return new Date(I);
        }(D), this.$x = D.x || {}, this.init();
      }, $.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, $.$utils = function() {
        return B;
      }, $.isValid = function() {
        return this.$d.toString() !== M;
      }, $.isSame = function(D, L) {
        var I = T(D);
        return this.startOf(L) <= I && I <= this.endOf(L);
      }, $.isAfter = function(D, L) {
        return T(D) < this.startOf(L);
      }, $.isBefore = function(D, L) {
        return this.endOf(L) < T(D);
      }, $.$g = function(D, L, I) {
        return B.u(D) ? this[L] : this.set(I, D);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(D, L) {
        var I = this, J = !!B.u(L) || L, ee = B.p(D), se = function(v, Y) {
          var F = B.w(I.$u ? Date.UTC(I.$y, Y, v) : new Date(I.$y, Y, v), I);
          return J ? F : F.endOf(a);
        }, oe = function(v, Y) {
          return B.w(I.toDate()[v].apply(I.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), I);
        }, H = this.$W, j = this.$M, Z = this.$D, V = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case y:
            return J ? se(1, 0) : se(31, 11);
          case f:
            return J ? se(1, j) : se(0, j + 1);
          case l:
            var b = this.$locale().weekStart || 0, R = (H < b ? H + 7 : H) - b;
            return se(J ? Z - R : Z + (6 - R), j);
          case a:
          case g:
            return oe(V + "Hours", 0);
          case d:
            return oe(V + "Minutes", 1);
          case c:
            return oe(V + "Seconds", 2);
          case i:
            return oe(V + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(D) {
        return this.startOf(D, !1);
      }, $.$set = function(D, L) {
        var I, J = B.p(D), ee = "set" + (this.$u ? "UTC" : ""), se = (I = {}, I[a] = ee + "Date", I[g] = ee + "Date", I[f] = ee + "Month", I[y] = ee + "FullYear", I[d] = ee + "Hours", I[c] = ee + "Minutes", I[i] = ee + "Seconds", I[s] = ee + "Milliseconds", I)[J], oe = J === a ? this.$D + (L - this.$W) : L;
        if (J === f || J === y) {
          var H = this.clone().set(g, 1);
          H.$d[se](oe), H.init(), this.$d = H.set(g, Math.min(this.$D, H.daysInMonth())).$d;
        } else
          se && this.$d[se](oe);
        return this.init(), this;
      }, $.set = function(D, L) {
        return this.clone().$set(D, L);
      }, $.get = function(D) {
        return this[B.p(D)]();
      }, $.add = function(D, L) {
        var I, J = this;
        D = Number(D);
        var ee = B.p(L), se = function(j) {
          var Z = T(J);
          return B.w(Z.date(Z.date() + Math.round(j * D)), J);
        };
        if (ee === f)
          return this.set(f, this.$M + D);
        if (ee === y)
          return this.set(y, this.$y + D);
        if (ee === a)
          return se(1);
        if (ee === l)
          return se(7);
        var oe = (I = {}, I[c] = r, I[d] = o, I[i] = t, I)[ee] || 1, H = this.$d.getTime() + D * oe;
        return B.w(H, this);
      }, $.subtract = function(D, L) {
        return this.add(-1 * D, L);
      }, $.format = function(D) {
        var L = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || M;
        var J = D || "YYYY-MM-DDTHH:mm:ssZ", ee = B.z(this), se = this.$H, oe = this.$m, H = this.$M, j = I.weekdays, Z = I.months, V = function(Y, F, A, S) {
          return Y && (Y[F] || Y(L, J)) || A[F].slice(0, S);
        }, b = function(Y) {
          return B.s(se % 12 || 12, Y, "0");
        }, R = I.meridiem || function(Y, F, A) {
          var S = Y < 12 ? "AM" : "PM";
          return A ? S.toLowerCase() : S;
        }, v = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: H + 1, MM: B.s(H + 1, 2, "0"), MMM: V(I.monthsShort, H, Z, 3), MMMM: V(Z, H), D: this.$D, DD: B.s(this.$D, 2, "0"), d: String(this.$W), dd: V(I.weekdaysMin, this.$W, j, 2), ddd: V(I.weekdaysShort, this.$W, j, 3), dddd: j[this.$W], H: String(se), HH: B.s(se, 2, "0"), h: b(1), hh: b(2), a: R(se, oe, !0), A: R(se, oe, !1), m: String(oe), mm: B.s(oe, 2, "0"), s: String(this.$s), ss: B.s(this.$s, 2, "0"), SSS: B.s(this.$ms, 3, "0"), Z: ee };
        return J.replace(N, function(Y, F) {
          return F || v[Y] || ee.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(D, L, I) {
        var J, ee = B.p(L), se = T(D), oe = (se.utcOffset() - this.utcOffset()) * r, H = this - se, j = B.m(this, se);
        return j = (J = {}, J[y] = j / 12, J[f] = j, J[p] = j / 3, J[l] = (H - oe) / 6048e5, J[a] = (H - oe) / 864e5, J[d] = H / o, J[c] = H / r, J[i] = H / t, J)[ee] || H, I ? j : B.a(j);
      }, $.daysInMonth = function() {
        return this.endOf(f).$D;
      }, $.$locale = function() {
        return m[this.$L];
      }, $.locale = function(D, L) {
        if (!D)
          return this.$L;
        var I = this.clone(), J = _(D, L, !0);
        return J && (I.$L = J), I;
      }, $.clone = function() {
        return B.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, k;
    }(), G = X.prototype;
    return T.prototype = G, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", y], ["$D", g]].forEach(function(k) {
      G[k[1]] = function($) {
        return this.$g($, k[0], k[1]);
      };
    }), T.extend = function(k, $) {
      return k.$i || (k($, X, T), k.$i = !0), T;
    }, T.locale = _, T.isDayjs = w, T.unix = function(k) {
      return T(1e3 * k);
    }, T.en = m[u], T.Ls = m, T.p = {}, T;
  });
})(bs);
const E = Qe, Un = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Cn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, Vr = (e, n) => E(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), Gr = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Cn(e),
  isCurrentDay: e.isSame(E(), "day"),
  year: parseInt(e.format("YYYY"))
}), Mn = (e, n, t, r, o, s, i) => {
  e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, pe), e.strokeRect(n + 0.5, t + 0.5, r, pe);
}, kn = (e, n) => {
  let t = 0;
  for (const r of n)
    r <= e && t++;
  return t * Pe;
}, ws = (e, n, t, r, o, s = []) => {
  for (let i = 0; i < n; i++) {
    const c = kn(i, s);
    for (let d = 0; d <= t; d++) {
      const a = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(E(), "day");
      Mn(e, d * Se, i * pe + c, Se, Cn(a), l, o);
    }
  }
}, Ss = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, Cs = (e, n, t, r, o, s = []) => {
  let i = 0, c = -(r.dayOfMonth - 1) * Ie;
  const d = n * pe + s.length * Pe;
  for (let a = 0; a <= t; a++) {
    const f = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(E(), "week");
    for (let p = 0; p < n; p++) {
      const y = kn(p, s);
      Mn(e, i, p * pe + y, ut, !0, f, o);
    }
    i += ut;
  }
  for (let a = 0; a < t; a++) {
    const l = Vr(r, a) * Ie;
    Ss(e, c, d, o), c += l;
  }
}, Ms = (e, n, t, r, o, s = []) => {
  const i = E(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let c = 0; c < n; c++) {
    const d = kn(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = E() : a > Math.floor(t / 2) ? l = E().add(a - Math.floor(t / 2), "hours") : l = E().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(E(), "day") && l.isSame(E(), "hour");
      Mn(
        e,
        a * _e + _e / 2 - 0.5,
        c * pe + d,
        _e,
        Cn(l),
        f,
        o
      );
    }
  }
}, ks = (e, n, t, r) => {
  const o = t * pe + n * Pe, s = e.canvas.width, i = o + Pe / 2;
  e.fillStyle = r.mode === "dark" ? r.colors.primary + "80" : r.colors.primary, e.fillRect(0, o, s, Pe), e.strokeStyle = r.colors.border, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, i + 0.5), e.lineTo(s, i + 0.5), e.stroke();
}, Ds = (e, n, t, r, o, s, i = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(jr)) {
    switch (n) {
      case 0:
        Cs(e, t, r, o, s, i);
        break;
      case 1:
        ws(e, t, r, o, s, i);
        break;
      case 2:
        Ms(e, t, r, o, s, i);
        break;
    }
    for (let d = 0; d < i.length; d++)
      ks(e, d, i[d], s);
  }
};
var en = {}, $s = {
  get exports() {
    return en;
  },
  set exports(e) {
    en = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Ee, function() {
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
        var p = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), y = this.diff(p, t, !0);
        return y < 0 ? i(this).startOf("week").week() : Math.ceil(y);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})($s);
const Es = en;
var tn = {}, _s = {
  get exports() {
    return tn;
  },
  set exports(e) {
    tn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Ee, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(_s);
const Ts = tn;
var nn = {}, Ps = {
  get exports() {
    return nn;
  },
  set exports(e) {
    nn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Ee, function() {
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
        var l, f, p, y, g = i(this), M = (l = this.isoWeekYear(), f = this.$u, p = (f ? s.utc : s)().year(l).startOf("year"), y = 4 - p.isoWeekday(), p.isoWeekday() > 4 && (y += 7), p.add(y, t));
        return g.diff(M, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var d = c.startOf;
      c.startOf = function(a, l) {
        var f = this.$utils(), p = !!f.u(l) || l;
        return f.p(a) === "isoweek" ? p ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : d.bind(this)(a, l);
      };
    };
  });
})(Ps);
const As = nn;
var rn = {}, Is = {
  get exports() {
    return rn;
  },
  set exports(e) {
    rn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Ee, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), f = (d = d || "()")[0] === "(", p = d[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (p ? this.isBefore(l, c) : !this.isAfter(l, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (p ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(Is);
const Ys = rn;
var on = {}, Os = {
  get exports() {
    return on;
  },
  set exports(e) {
    on = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Ee, function() {
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, p = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, y = function(u) {
      return u instanceof P;
    }, g = function(u, m, w) {
      return new P(u, w, m.$l);
    }, M = function(u) {
      return r.p(u) + "s";
    }, h = function(u) {
      return u < 0;
    }, N = function(u) {
      return h(u) ? Math.ceil(u) : Math.floor(u);
    }, K = function(u) {
      return Math.abs(u);
    }, z = function(u, m) {
      return u ? h(u) ? { negative: !0, format: "" + K(u) + m } : { negative: !1, format: "" + u + m } : { negative: !1, format: "" };
    }, P = function() {
      function u(w, _, T) {
        var B = this;
        if (this.$d = {}, this.$l = T, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), _)
          return g(w * p[M(_)], this);
        if (typeof w == "number")
          return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object")
          return Object.keys(w).forEach(function(k) {
            B.$d[M(k)] = w[k];
          }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var X = w.match(f);
          if (X) {
            var G = X.slice(2).map(function(k) {
              return k != null ? Number(k) : 0;
            });
            return this.$d.years = G[0], this.$d.months = G[1], this.$d.weeks = G[2], this.$d.days = G[3], this.$d.hours = G[4], this.$d.minutes = G[5], this.$d.seconds = G[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var m = u.prototype;
      return m.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(_, T) {
          return _ + (w.$d[T] || 0) * p[T];
        }, 0);
      }, m.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = N(w / a), w %= a, this.$d.months = N(w / l), w %= l, this.$d.days = N(w / c), w %= c, this.$d.hours = N(w / i), w %= i, this.$d.minutes = N(w / s), w %= s, this.$d.seconds = N(w / o), w %= o, this.$d.milliseconds = w;
      }, m.toISOString = function() {
        var w = z(this.$d.years, "Y"), _ = z(this.$d.months, "M"), T = +this.$d.days || 0;
        this.$d.weeks && (T += 7 * this.$d.weeks);
        var B = z(T, "D"), X = z(this.$d.hours, "H"), G = z(this.$d.minutes, "M"), k = this.$d.seconds || 0;
        this.$d.milliseconds && (k += this.$d.milliseconds / 1e3);
        var $ = z(k, "S"), D = w.negative || _.negative || B.negative || X.negative || G.negative || $.negative, L = X.format || G.format || $.format ? "T" : "", I = (D ? "-" : "") + "P" + w.format + _.format + B.format + L + X.format + G.format + $.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, m.toJSON = function() {
        return this.toISOString();
      }, m.format = function(w) {
        var _ = w || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return _.replace(d, function(B, X) {
          return X || String(T[B]);
        });
      }, m.as = function(w) {
        return this.$ms / p[M(w)];
      }, m.get = function(w) {
        var _ = this.$ms, T = M(w);
        return T === "milliseconds" ? _ %= 1e3 : _ = T === "weeks" ? N(_ / p[T]) : this.$d[T], _ === 0 ? 0 : _;
      }, m.add = function(w, _, T) {
        var B;
        return B = _ ? w * p[M(_)] : y(w) ? w.$ms : g(w, this).$ms, g(this.$ms + B * (T ? -1 : 1), this);
      }, m.subtract = function(w, _) {
        return this.add(w, _, !0);
      }, m.locale = function(w) {
        var _ = this.clone();
        return _.$l = w, _;
      }, m.clone = function() {
        return g(this.$ms, this);
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
      }, u;
    }();
    return function(u, m, w) {
      t = w, r = w().$utils(), w.duration = function(B, X) {
        var G = w.locale();
        return g(B, { $l: G }, X);
      }, w.isDuration = y;
      var _ = m.prototype.add, T = m.prototype.subtract;
      m.prototype.add = function(B, X) {
        return y(B) && (B = B.asMilliseconds()), _.bind(this)(B, X);
      }, m.prototype.subtract = function(B, X) {
        return y(B) && (B = B.asMilliseconds()), T.bind(this)(B, X);
      };
    };
  });
})(Os);
const Ls = on;
var Rs = "Expected a function", Kn = 0 / 0, Ns = "[object Symbol]", Ws = /^\s+|\s+$/g, Fs = /^[-+]0x[0-9a-f]+$/i, Hs = /^0b[01]+$/i, Bs = /^0o[0-7]+$/i, zs = parseInt, js = typeof Ee == "object" && Ee && Ee.Object === Object && Ee, Zs = typeof self == "object" && self && self.Object === Object && self, Vs = js || Zs || Function("return this")(), Gs = Object.prototype, Xs = Gs.toString, Us = Math.max, Ks = Math.min, Ft = function() {
  return Vs.Date.now();
};
function Js(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Rs);
  n = Jn(n) || 0, sn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? Us(Jn(t.maxWait) || 0, n) : s, p = "trailing" in t ? !!t.trailing : p);
  function y(m) {
    var w = r, _ = o;
    return r = o = void 0, a = m, i = e.apply(_, w), i;
  }
  function g(m) {
    return a = m, c = setTimeout(N, n), l ? y(m) : i;
  }
  function M(m) {
    var w = m - d, _ = m - a, T = n - w;
    return f ? Ks(T, s - _) : T;
  }
  function h(m) {
    var w = m - d, _ = m - a;
    return d === void 0 || w >= n || w < 0 || f && _ >= s;
  }
  function N() {
    var m = Ft();
    if (h(m))
      return K(m);
    c = setTimeout(N, M(m));
  }
  function K(m) {
    return c = void 0, p && r ? y(m) : (r = o = void 0, i);
  }
  function z() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function P() {
    return c === void 0 ? i : K(Ft());
  }
  function u() {
    var m = Ft(), w = h(m);
    if (r = arguments, o = this, d = m, w) {
      if (c === void 0)
        return g(d);
      if (f)
        return c = setTimeout(N, n), y(d);
    }
    return c === void 0 && (c = setTimeout(N, n)), i;
  }
  return u.cancel = z, u.flush = P, u;
}
function sn(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function qs(e) {
  return !!e && typeof e == "object";
}
function Qs(e) {
  return typeof e == "symbol" || qs(e) && Xs.call(e) == Ns;
}
function Jn(e) {
  if (typeof e == "number")
    return e;
  if (Qs(e))
    return Kn;
  if (sn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = sn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Ws, "");
  var t = Hs.test(e);
  return t || Bs.test(e) ? zs(e.slice(2), t ? 2 : 8) : Fs.test(e) ? Kn : +e;
}
var ot = Js;
const _t = [0, 1, 2];
var wt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(wt || {});
const Xr = (e) => _t.includes(e), st = (e) => {
  var r;
  const t = (((r = document.getElementById(qe)) == null ? void 0 : r.clientWidth) || 0) - Ye;
  switch (e) {
    case 1:
      return Math.ceil(t / Se) * it;
    case 2:
      return Math.ceil(t / _e) * it;
    default:
      return Math.ceil(t / ut) * it;
  }
}, ei = (e) => st(e) / it, Dn = (e, n) => {
  const t = st(n) / 2;
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
}, ti = (e, n) => {
  const t = Dn(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, $n = () => {
  var t;
  return ((((t = document.getElementById(qe)) == null ? void 0 : t.clientWidth) || 0) - Ye) * it;
}, Ur = $r({
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
E.extend(Es);
E.extend(Ts);
E.extend(As);
E.extend(Ys);
E.extend(Ls);
const ni = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = E(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = fe(d), [p, y] = fe(E()), [g, M] = fe(!1), [h, N] = fe(st(l)), K = _t[l] !== _t[_t.length - 1], z = l !== 0, P = $e(() => ti(p, l), [p, l]), u = Dn(p, l).startDate, m = E(u).dayOfYear(), w = Gr(u), _ = we(null), [T, B] = fe([{ x: 0, y: 0 }]), X = le(
    (V, b = "auto") => {
      var v, Y, F, A;
      const R = $n();
      switch (V) {
        case "back":
          return (v = _.current) == null ? void 0 : v.scrollTo({
            behavior: b,
            left: R / 3
          });
        case "forward":
          return (Y = _.current) == null ? void 0 : Y.scrollTo({
            behavior: b,
            left: R / 3
          });
        case "middle": {
          const S = R / it / 4;
          return (F = _.current) == null ? void 0 : F.scrollTo({
            behavior: b,
            left: R / 2 - S
          });
        }
        default:
          return (A = _.current) == null ? void 0 : A.scrollTo({
            behavior: b,
            left: R / 2
          });
      }
    },
    []
  ), G = (V) => {
    B(V);
  }, k = le(
    (V) => {
      const b = ei(l);
      let R;
      switch (l) {
        case 0:
          R = b * 7;
          break;
        case 1:
          R = b;
          break;
        case 2:
          R = Math.ceil(b / It);
          break;
      }
      ot(() => {
        switch (V) {
          case "back":
            y((Y) => Y.subtract(R, "days"));
            break;
          case "forward":
            y((Y) => Y.add(R, "days"));
            break;
          case "middle":
            y(E());
            break;
        }
        s == null || s(P);
      }, 300)();
    },
    [s, P, l]
  );
  be(() => {
    _.current = document.getElementById(qe), N(st(l));
  }, [l]), be(() => {
    const V = () => N(st(l));
    return window.addEventListener("resize", V), () => window.removeEventListener("resize", V);
  }, [l]), be(() => {
    s == null || s(P);
  }, [s, P]), be(() => {
    M(!1);
  }, [o]), be(() => {
    g || (X("middle"), M(!0), y(o));
  }, [o, g, X]);
  const $ = () => {
    t || (y(
      (V) => l === 2 ? V.add(Zn, "hours") : V.add(Xn, "weeks")
    ), s == null || s(P));
  }, D = le(() => {
    t || (k("forward"), ot(() => {
      X("forward");
    }, 500)());
  }, [t, k, X]), L = () => {
    t || (y(
      (V) => l === 2 ? V.subtract(Zn, "hours") : V.subtract(Xn, "weeks")
    ), s == null || s(P));
  }, I = le(() => {
    !g || t || (k("back"), ot(() => {
      X("back");
    }, 500)());
  }, [g, t, k, X]), J = le(() => {
    t || (k("middle"), ot(() => {
      X("middle", "smooth");
    }, 300)());
  }, [t, k, X]), ee = le(
    (V) => {
      if (t)
        return;
      const b = E(V).startOf("day");
      b.isValid() && (y(b), s == null || s(P), setTimeout(() => {
        X("middle", "smooth");
      }, 300));
    },
    [t, X, s, P]
  ), se = () => H(l + 1), oe = () => H(l - 1), H = (V) => {
    Xr(V) && (f(V), N(st(V)), s == null || s(P));
  }, j = () => i == null ? void 0 : i(), { Provider: Z } = Ur;
  return /* @__PURE__ */ x(
    Z,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: $,
        handleScrollNext: D,
        handleGoPrev: L,
        handleScrollPrev: I,
        handleGoToday: J,
        goToDate: ee,
        zoomIn: se,
        zoomOut: oe,
        zoom: l,
        isNextZoom: K,
        isPrevZoom: z,
        date: p,
        isLoading: t,
        cols: h,
        startDate: w,
        dayOfYear: m,
        toggleDisplayActiveUnits: j,
        tilesCoords: T,
        updateTilesCoords: G,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: n
    }
  );
}, Ze = () => je(Ur), Kr = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Jr = (e, n) => {
  if (n.length === 0)
    return e;
  let t = e, r = 0;
  for (const o of n) {
    const s = o * pe + r * Pe;
    if (e >= s + Pe)
      r++;
    else if (e >= s)
      return o * pe + r * Pe - r * Pe;
  }
  return t - r * Pe;
}, ri = 5, qn = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > ri;
}, vt = (e, n, t) => {
  const r = t.getBoundingClientRect();
  return {
    x: e - r.left + t.scrollLeft,
    y: n - r.top + t.scrollTop
  };
}, oi = ({
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
  const a = n ? n.length > 0 && n[0].data.length > 0 && !Array.isArray(n[0].data[0]) ? n.map((R) => ({ ...R, data: [R.data] })) : n : e, {
    enabled: l = !0,
    isDraggable: f,
    resourceOnly: p = !1,
    isValidDrop: y
  } = i, [g, M] = fe("idle"), [h, N] = fe(null), [K, z] = fe({ x: 0, y: 0 }), [P, u] = fe({ width: 0, height: 48 }), [m, w] = fe(null), [_, T] = fe(!0), B = we({ x: 0, y: 0 }), X = we({ x: 0, y: 0 }), G = we({ x: 0, y: 0 }), k = we(null), $ = we(null), D = we(0), L = we(null), I = le(
    (R) => !l || R.draggable === !1 ? !1 : f ? f(R) : !0,
    [l, f]
  ), J = le(
    (R, v) => {
      const Y = Jr(v, d), F = Math.floor(Y / pe);
      let A;
      switch (t) {
        case 0:
          A = Ie * 7;
          break;
        case 1:
          A = Se;
          break;
        case 2:
          A = _e;
          break;
        default:
          A = Se;
      }
      const S = Math.floor(R / A);
      let Q;
      const O = E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          Q = O.add(S * 7, "days").toDate();
          break;
        case 1:
          Q = O.add(S, "days").toDate();
          break;
        case 2:
          Q = O.add(S, "hours").toDate();
          break;
        default:
          Q = O.toDate();
      }
      return { snappedDate: Q, snappedResourceIndex: F };
    },
    [t, r, d]
  ), ee = le(
    (R, v, Y, F) => {
      const A = [], S = v.getTime(), Q = Y.getTime(), O = a.find((te) => te.id === F);
      if (!O)
        return A;
      const U = [];
      for (const te of O.data)
        Array.isArray(te) ? U.push(...te) : U.push(te);
      for (const te of U) {
        if (te.segmentId === R.segmentId)
          continue;
        const W = te.startDate.getTime(), ie = te.endDate.getTime();
        if (S >= W && S < ie || Q > W && Q <= ie || S <= W && Q >= ie) {
          const ue = new Date(Math.max(S, W)), ae = new Date(Math.min(Q, ie)), de = ae.getTime() - ue.getTime();
          A.push({
            event: te,
            conflictStart: ue,
            conflictEnd: ae,
            overlapDuration: de
          });
        }
      }
      return A;
    },
    [a]
  ), se = le(
    (R, v, Y, F) => {
      const A = [], S = v.getTime(), Q = Y.getTime(), O = E(v).format("YYYY-MM-DD"), U = a.find((W) => W.id === F);
      if (!U)
        return A;
      const te = [];
      for (const W of U.data)
        Array.isArray(W) ? te.push(...W) : te.push(W);
      for (const W of te) {
        if (W.segmentId === R.segmentId)
          continue;
        const ie = W.startDate.getTime(), me = W.endDate.getTime(), ue = E(W.startDate).format("YYYY-MM-DD"), ae = E(W.endDate).format("YYYY-MM-DD"), de = E(Y).format("YYYY-MM-DD");
        if (!(ue === O || ae === O || ue === de || ae === de || E(W.startDate).isBefore(v, "day") && E(W.endDate).isAfter(Y, "day")) || S >= ie && S < me || Q > ie && Q <= me || S <= ie && Q >= me)
          continue;
        let he, Me;
        me <= S ? (he = S - me, Me = "before") : (he = ie - Q, Me = "after"), A.push({
          event: W,
          timeGap: he,
          position: Me
        });
      }
      return A.sort((W, ie) => W.timeGap - ie.timeGap);
    },
    [a]
  ), oe = le(
    (R, v, Y) => {
      const F = J(v, Y);
      let A, S;
      if (p)
        A = R.startDate, S = R.endDate;
      else {
        const me = E(R.endDate).diff(R.startDate);
        A = F.snappedDate, S = E(A).add(me, "milliseconds").toDate();
      }
      let Q = 0, O = "", U;
      for (const me of e) {
        const ue = Math.max(me.data.length, 1);
        if (F.snappedResourceIndex < Q + ue) {
          O = me.id, U = me.capacity;
          break;
        }
        Q += ue;
      }
      if (!O)
        return null;
      let te = !0;
      U !== void 0 && R.totalPassengers !== void 0 && (te = R.totalPassengers <= U);
      const W = ee(R, A, S, O), ie = W.length === 0 ? se(R, A, S, O) : [];
      return {
        startDate: A,
        endDate: S,
        resourceId: O,
        resourceIndex: F.snappedResourceIndex,
        resourceCapacity: U,
        hasCapacity: te,
        conflicts: W,
        hasConflict: W.length > 0,
        nearbyEvents: ie
      };
    },
    [J, e, p, ee, se]
  ), H = le(
    (R, v) => {
      if (!s)
        return;
      const Y = Date.now();
      if (Y - D.current < 100)
        return;
      D.current = Y;
      const F = {
        event: R,
        currentStartDate: v.startDate,
        currentEndDate: v.endDate,
        currentResourceId: v.resourceId,
        conflicts: v.conflicts
      };
      s(F);
    },
    [s]
  ), j = le(
    (R, v) => {
      if (!I(R) || !c.current)
        return;
      v.preventDefault(), v.stopPropagation();
      const Y = v.target.closest('[style*="left"]');
      let F = 0, A = 0;
      Y && Y.style.left && Y.style.top && (F = parseInt(Y.style.left), A = parseInt(Y.style.top));
      const S = vt(
        v.clientX,
        v.clientY,
        c.current
      );
      B.current = { x: F, y: A }, X.current = { x: v.clientX, y: v.clientY }, G.current = {
        x: S.x - F,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, L.current = {
        startDate: R.startDate,
        endDate: R.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const U of e) {
        for (const te of U.data)
          if (te.some((W) => W.segmentId === R.segmentId)) {
            L.current.resourceId = U.id;
            break;
          }
        if (L.current.resourceId)
          break;
      }
      N(R), M("potential"), z({ x: F, y: A });
      let Q = 100, O = 48;
      if (Y) {
        const U = Y.getBoundingClientRect();
        Q = U.width, O = U.height;
      }
      u({ width: Q, height: O });
    },
    [I, c, e, t]
  ), Z = le(
    (R) => {
      if (!c.current)
        return;
      let v = c.current;
      for (; v && v !== document.body; ) {
        const W = window.getComputedStyle(v);
        if (v.scrollHeight > v.clientHeight && (W.overflowY === "auto" || W.overflowY === "scroll" || W.overflow === "auto" || W.overflow === "scroll"))
          break;
        v = v.parentElement;
      }
      (!v || v === document.body) && (v = document.documentElement);
      const Y = v.getBoundingClientRect(), F = R.clientY, A = 50, S = 5, Q = F - Y.top, O = Y.bottom - F;
      let U = !1, te = 0;
      Q < A && Q > 0 ? (U = !0, te = -S * (1 - Q / A)) : O < A && O > 0 && (U = !0, te = S * (1 - O / A)), U ? ($.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
        v.scrollTop += te, g === "dragging" && Z(R);
      })) : $.current && (cancelAnimationFrame($.current), $.current = null);
    },
    [c, g]
  ), V = le(
    (R) => {
      if (g === "idle" || g === "animating" || !h || !c.current)
        return;
      const v = { x: R.clientX, y: R.clientY };
      if (g === "potential")
        if (qn(X.current, v))
          M("dragging");
        else
          return;
      Z(R);
      const Y = vt(
        R.clientX,
        R.clientY,
        c.current
      );
      k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
        const F = {
          x: Y.x - G.current.x,
          y: Y.y - G.current.y
        };
        z(F);
        const A = oe(h, Y.x, Y.y);
        if (A && y) {
          const S = {
            event: h,
            currentStartDate: A.startDate,
            currentEndDate: A.endDate,
            currentResourceId: A.resourceId,
            conflicts: A.conflicts
          };
          A.hasConflict = !y(S);
        }
        if (w(A), A) {
          const S = A.hasCapacity !== !1;
          T(S), H(h, A);
        }
      });
    },
    [g, h, c, oe, H, y, Z]
  ), b = le(
    async (R) => {
      if (g === "idle" || g === "animating")
        return;
      const v = { x: R.clientX, y: R.clientY };
      if (!qn(X.current, v) || g === "potential") {
        M("idle"), N(null), w(null);
        return;
      }
      if (!h || !m || !L.current) {
        M("idle"), N(null), w(null);
        return;
      }
      if (m.hasCapacity === !1) {
        T(!1), M("animating"), z(B.current), setTimeout(() => {
          M("idle"), N(null), w(null), T(!0);
        }, 300);
        return;
      }
      const F = {
        event: h,
        originalStartDate: L.current.startDate,
        originalEndDate: L.current.endDate,
        originalResourceId: L.current.resourceId,
        newStartDate: m.startDate,
        newEndDate: m.endDate,
        newResourceId: m.resourceId,
        hasConflict: m.hasConflict,
        conflicts: m.conflicts
      };
      let A = !0;
      if (o)
        try {
          const S = o(F);
          A = S instanceof Promise ? await S : S;
        } catch {
          A = !1;
        }
      A ? (T(!0), M("idle"), N(null), w(null)) : (T(!1), M("animating"), z(B.current), setTimeout(() => {
        M("idle"), N(null), w(null), T(!0);
      }, 300));
    },
    [g, h, m, o, y]
  );
  return be(() => {
    if (g === "potential" || g === "dragging") {
      const R = (Y) => V(Y), v = (Y) => b(Y);
      return document.addEventListener("mousemove", R), document.addEventListener("mouseup", v), () => {
        document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", v);
      };
    } else
      return () => {
      };
  }, [g, V, b]), be(() => () => {
    k.current && (cancelAnimationFrame(k.current), k.current = null), $.current && (cancelAnimationFrame($.current), $.current = null);
  }, []), be(() => {
    (g === "idle" || g === "animating") && (k.current && (cancelAnimationFrame(k.current), k.current = null), $.current && (cancelAnimationFrame($.current), $.current = null));
  }, [g]), be(() => {
    (g === "dragging" || g === "potential") && (g === "dragging" ? (M("animating"), z(B.current), setTimeout(() => {
      M("idle"), N(null), w(null);
    }, 300)) : (M("idle"), N(null), w(null)));
  }, [t]), be(() => {
    if ((g === "dragging" || g === "potential") && h) {
      let R = !1;
      for (const v of e) {
        for (const Y of v.data)
          if (Y.some((F) => F.segmentId === h.segmentId)) {
            R = !0;
            break;
          }
        if (R)
          break;
      }
      R || (g === "dragging" ? (M("animating"), z(B.current), setTimeout(() => {
        M("idle"), N(null), w(null);
      }, 300)) : (M("idle"), N(null), w(null)));
    }
  }, [e, g, h]), {
    dragState: g,
    draggedEvent: h,
    ghostPosition: K,
    ghostDimensions: P,
    dropTarget: m,
    isValidDrop: _,
    handleDragStart: j,
    isDraggable: I,
    draggingEventId: (h == null ? void 0 : h.segmentId) || null,
    resourceOnly: p
  };
}, si = ({
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
  const { enabled: l = !1, isSelectable: f } = i, p = l && !!o, y = le((v) => {
    let Y = 0;
    for (const F of a)
      F <= v && Y++;
    return v * pe + Y * Pe;
  }, [a]), [g, M] = fe("idle"), [h, N] = fe(null), [K, z] = fe(null), [P, u] = fe(null), [m, w] = fe(!1), [_, T] = fe([]), [B, X] = fe(!1), G = we(null), k = we(null), $ = we(null), D = le(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return _e;
      default:
        return Se;
    }
  }, [t]), L = le(
    (v) => {
      const Y = D(), F = Math.floor(v / Y), A = E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return A.add(F * 7, "days").toDate();
        case 1:
          return A.add(F, "days").toDate();
        case 2:
          return A.add(F, "hours").toDate();
        default:
          return A.toDate();
      }
    },
    [t, r, D]
  ), I = le(
    (v) => {
      const Y = Jr(v, a), F = Math.floor(Y / pe);
      let A = 0;
      for (const S of e) {
        const Q = Math.max(S.data.length, 1);
        if (F < A + Q)
          return {
            resourceId: S.id,
            resourceIndex: F,
            resourceLabel: S.label
          };
        A += Q;
      }
      return null;
    },
    [e, a]
  ), J = le(
    (v) => {
      const Y = D();
      return Math.floor(v / Y) * Y;
    },
    [D]
  ), ee = le(
    (v, Y, F, A = []) => {
      const S = [], O = (n || e).find((W) => W.id === v), U = Y.getTime(), te = F.getTime();
      if (O) {
        const W = O.data[0], ie = W && Array.isArray(W) ? O.data.flat() : O.data;
        for (const me of ie) {
          const ue = new Date(me.startDate).getTime(), ae = new Date(me.endDate).getTime();
          if (U < ae && te > ue) {
            const de = new Date(Math.max(U, ue)), ce = new Date(Math.min(te, ae)), ne = ce.getTime() - de.getTime();
            S.push({
              event: me,
              conflictStart: de,
              conflictEnd: ce,
              overlapDuration: ne
            });
          }
        }
      }
      for (const W of A) {
        if (W.resourceId !== v)
          continue;
        const ie = W.startDate.getTime(), me = W.endDate.getTime();
        if (U < me && te > ie) {
          const ue = new Date(Math.max(U, ie)), ae = new Date(Math.min(te, me)), de = ae.getTime() - ue.getTime(), ce = {
            segmentId: `pending-${W.startDate.getTime()}`,
            reservationId: `pending-${W.startDate.getTime()}`,
            startDate: W.startDate,
            endDate: W.endDate,
            occupancy: 0,
            title: `New Event (${W.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          S.push({
            event: ce,
            conflictStart: ue,
            conflictEnd: ae,
            overlapDuration: de
          });
        }
      }
      return S;
    },
    [e, n]
  ), se = le(
    (v) => {
      if (!p || d || !c.current || v.button !== 0)
        return;
      const Y = v.target;
      if (Y.closest("[data-segment-id]") || Y.closest("[data-multi-select-ui]"))
        return;
      const F = vt(v.clientX, v.clientY, c.current), A = I(F.y);
      if (!A)
        return;
      G.current = { x: v.clientX, y: v.clientY }, k.current = A.resourceIndex;
      const S = J(F.x), Q = D(), O = y(A.resourceIndex);
      N(F), z(F), u({
        x: S,
        y: O,
        width: Q,
        height: pe
      }), M("selecting");
    },
    [p, d, c, I, J, D, y]
  ), oe = le(
    (v) => {
      if (g !== "selecting" || !c.current || k.current === null)
        return;
      const Y = vt(v.clientX, v.clientY, c.current);
      $.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
        z(Y);
        const F = D(), A = J((h == null ? void 0 : h.x) || 0), S = J(Y.x), Q = y(k.current), O = Math.min(A, S), U = Math.max(A, S) + F;
        u({
          x: O,
          y: Q,
          width: U - O,
          height: pe
        });
      });
    },
    [g, c, h, D, J, y]
  ), H = le(
    (v) => {
      if (g !== "selecting")
        return;
      if (!c.current || !h || !G.current) {
        M("idle"), N(null), z(null), u(null);
        return;
      }
      const Y = vt(v.clientX, v.clientY, c.current), F = I(h.y);
      if (!F) {
        M("idle"), N(null), z(null), u(null);
        return;
      }
      const A = Math.min(h.x, Y.x), S = Math.max(h.x, Y.x), Q = L(A), O = L(S), U = E(O).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(F.resourceId, Q, U)) {
        M("idle"), N(null), z(null), u(null);
        return;
      }
      const te = ee(
        F.resourceId,
        Q,
        U,
        _
      ), W = te.length > 0, ie = {
        startDate: Q,
        endDate: U,
        resourceId: F.resourceId,
        resourceLabel: F.resourceLabel,
        zoomLevel: t,
        hasConflict: W,
        conflicts: W ? te : void 0
      };
      if (m)
        T((me) => [...me, ie]), X(!0);
      else if (o) {
        const me = o(ie), ue = (ae) => {
          ae != null && ae.continueMultiSelect && (w(!0), T([ie]), X(!0));
        };
        me instanceof Promise ? me.then(ue) : ue(me);
      }
      M("idle"), N(null), z(null), u(null), G.current = null, k.current = null;
    },
    [
      g,
      c,
      h,
      I,
      L,
      f,
      o,
      t,
      m,
      ee,
      _
    ]
  ), j = le(() => {
    if (_.length > 0 && s) {
      X(!1);
      const v = s(_), Y = (F) => {
        F != null && F.continueMultiSelect ? X(!0) : (T([]), w(!1), X(!1));
      };
      v instanceof Promise ? v.then(Y) : Y(v);
      return;
    }
    T([]), w(!1), X(!1);
  }, [_, s]), Z = le(() => {
    T([]), w(!1), X(!1);
  }, []), V = le((v) => {
    T((Y) => {
      const F = Y.filter((A, S) => S !== v);
      return F.length === 0 && (w(!1), X(!1)), F;
    });
  }, []), b = le(
    (v, Y) => {
      T((F) => F.map((A, S) => {
        if (S !== v)
          return A;
        const Q = { ...A, ...Y }, O = F.filter((te, W) => W !== v), U = ee(
          Q.resourceId,
          Q.startDate,
          Q.endDate,
          O
        );
        return {
          ...Q,
          hasConflict: U.length > 0,
          conflicts: U.length > 0 ? U : void 0
        };
      }));
    },
    [ee]
  ), R = le(
    (v) => {
      v.key === "Escape" && (g === "selecting" ? (M("idle"), N(null), z(null), u(null), G.current = null, k.current = null) : m && _.length > 0 && (T([]), w(!1), X(!1)));
    },
    [g, m, _.length]
  );
  return be(() => {
    if (g === "selecting")
      return document.addEventListener("mousemove", oe), document.addEventListener("mouseup", H), document.addEventListener("keydown", R), () => {
        document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", H), document.removeEventListener("keydown", R);
      };
  }, [g, oe, H, R]), be(() => {
    if (m && _.length > 0)
      return document.addEventListener("keydown", R), () => {
        document.removeEventListener("keydown", R);
      };
  }, [m, _.length, R]), be(() => () => {
    $.current && (cancelAnimationFrame($.current), $.current = null);
  }, []), be(() => {
    d && g === "selecting" && (M("idle"), N(null), z(null), u(null), G.current = null, k.current = null);
  }, [d, g]), {
    selectionState: g,
    selectionStart: h,
    selectionEnd: K,
    selectionBox: P,
    handleGridMouseDown: se,
    isEnabled: p,
    pendingSelections: _,
    confirmSelections: j,
    clearSelections: Z,
    removeSelection: V,
    updateSelection: b,
    isMultiSelectActive: m,
    hasUnconfirmedSelections: B
  };
}, ii = C.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, ai = C.div`
  position: relative;
`, ci = C.canvas``;
C.canvas``;
const Qn = C.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, li = Er(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: p, separatorRowIndices: y = [] }, g) {
  const M = we(!1), { handleScrollNext: h, handleScrollPrev: N, date: K, isLoading: z, cols: P, startDate: u } = Ze(), m = we(null), w = we(null), _ = we(null), T = we(null), [B, X] = fe(!1), G = et(), {
    dragState: k,
    draggedEvent: $,
    ghostPosition: D,
    ghostDimensions: L,
    dropTarget: I,
    isValidDrop: J,
    handleDragStart: ee,
    isDraggable: se,
    draggingEventId: oe,
    resourceOnly: H
  } = oi({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: T,
    separatorRowIndices: y
  });
  be(() => {
    const W = k === "dragging" || k === "potential";
    X(W), a && a(W);
  }, [k, a]);
  const {
    selectionState: j,
    selectionBox: Z,
    handleGridMouseDown: V,
    pendingSelections: b,
    confirmSelections: R,
    clearSelections: v,
    removeSelection: Y,
    updateSelection: F,
    isMultiSelectActive: A,
    hasUnconfirmedSelections: S
  } = si({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: p,
    gridRef: T,
    isDragging: B,
    separatorRowIndices: y
  }), Q = le((W) => {
    W.preventDefault();
  }, []), O = le((W) => {
    W.preventDefault();
  }, []), U = y.length * Pe, te = le(
    (W) => {
      const ie = $n(), me = t * pe + 1 + U;
      Kr(W, ie, me), Ds(W, n, t, P, u, G, y);
    },
    [P, u, t, n, G, y, U]
  );
  return be(() => {
    if (!m.current)
      return;
    const W = m.current.getContext("2d");
    if (!W)
      return;
    const ie = () => te(W);
    return window.addEventListener("resize", ie), () => window.removeEventListener("resize", ie);
  }, [te]), be(() => {
    const W = m.current;
    if (!W)
      return;
    W.style.letterSpacing = "1px";
    const ie = W.getContext("2d");
    ie && te(ie);
  }, [K, t, n, te]), be(() => {
    if (!w.current)
      return;
    const W = new IntersectionObserver(
      (ie) => {
        ie[0].isIntersecting && !M.current && (M.current = !0, h(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(qe) }
    );
    return W.observe(w.current), () => {
      W.disconnect();
    };
  }, [h]), be(() => {
    if (!_.current)
      return;
    const W = new IntersectionObserver(
      (ie) => {
        ie[0].isIntersecting && !M.current && (M.current = !0, N(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(qe),
        rootMargin: `0px 0px 0px -${Ye}px`
      }
    );
    return W.observe(_.current), () => {
      W.disconnect();
    };
  }, [N]), /* @__PURE__ */ q(ii, { id: jr, children: [
    /* @__PURE__ */ q(
      ai,
      {
        ref: (W) => {
          typeof g == "function" ? g(W) : g && (g.current = W), T.current = W;
        },
        onMouseDown: V,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ x(Qn, { position: "left", ref: _ }),
          /* @__PURE__ */ x(pn, { isLoading: z, position: "left" }),
          /* @__PURE__ */ x(
            ci,
            {
              ref: m,
              onDragStart: Q,
              onDragOver: O,
              style: { userSelect: k === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ x(Wl, { zoom: n, startDate: u }),
          /* @__PURE__ */ x(
            Nc,
            {
              data: r,
              zoom: n,
              onTileClick: s,
              onDragStart: ee,
              isDraggable: se,
              draggingEventId: oe,
              separatorRowIndices: y
            }
          ),
          /* @__PURE__ */ x(Qn, { ref: w, position: "right" }),
          /* @__PURE__ */ x(pn, { isLoading: z, position: "right" }),
          (k === "dragging" || k === "animating") && /* @__PURE__ */ x(
            gl,
            {
              draggedEvent: $,
              ghostPosition: D,
              ghostDimensions: L,
              dropTarget: I,
              isValidDrop: J,
              dragState: k,
              zoom: n,
              data: r,
              resourceOnly: H,
              separatorRowIndices: y
            }
          ),
          /* @__PURE__ */ x(
            bl,
            {
              selectionBox: Z,
              isSelecting: j === "selecting"
            }
          ),
          A && b.length > 0 && /* @__PURE__ */ x(
            Ll,
            {
              selections: b,
              data: r,
              zoom: n,
              startDate: u,
              onRemove: Y,
              onUpdate: F,
              separatorRowIndices: y
            }
          )
        ]
      }
    ),
    A && S && b.length > 0 && /* @__PURE__ */ x(
      _l,
      {
        selections: b,
        onConfirm: R,
        onClear: v,
        onRemove: Y
      }
    )
  ] });
}), qr = (e) => {
  const n = E.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, Qr = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / Ce);
    t += o.hours + s, r += n % Ce, r >= Ce && (t++, r -= Ce);
  }), { hours: t, minutes: r };
}, eo = (e, n) => {
  let t = Gn;
  switch (n) {
    case 0:
      t = xs;
      break;
    case 1:
      t = Gn;
      break;
    case 2:
      t = 1;
      break;
  }
  const r = () => {
    let s = t - e.hours - 1, i = Ce - e.minutes;
    return i === Ce && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: r(),
    overtime: o()
  };
}, di = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const l = E(a.startDate).isoWeek(), f = E(a.startDate).isoWeekday(), p = E(a.endDate).isoWeek(), y = E(a.endDate).isoWeekday(), { hours: g, minutes: M } = qr(a.occupancy);
    if (r === l) {
      const h = (Be + 1 - f) * g, N = (Be + 1 - f) * M;
      return { hours: Math.max(0, h), minutes: N };
    } else if (r === p) {
      const h = y > Be ? Be * g : y * g, N = y > Be ? Be * M : y * M;
      return { hours: h, minutes: N };
    } else if (E(n).isBetween(a.startDate, a.endDate))
      return { hours: Be * g, minutes: Be * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Qr(o), { free: c, overtime: d } = eo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, ui = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: p } = qr(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: p } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = Qr(s), { free: d, overtime: a } = eo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, fi = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const d = E(c.startDate).hour(), a = E(c.endDate).hour(), l = n.hour(), f = E(c.endDate).minute(), p = E(c.startDate).minute();
    d < l && a > l ? t += Ce : d === l && a === l && p && f ? t += f ? f - p : Ce - p : d === l && a >= l ? t += p ? Ce - p : Ce : a === l && f && (t += f);
  });
  const r = Math.floor(t / Ce), o = t % Ce, s = r || o ? 0 : 1, i = r ? 0 : o ? Ce - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, hi = (e, n, t, r, o = !1) => {
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
      return ui(s, t, r, o);
    case 2:
      return fi(s, t);
    default:
      return di(s, t, r);
  }
}, pi = (e, n, t, r, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = ut;
      break;
    case 1:
      c = "days", d = Se;
      break;
    case 2:
      c = "hours", d = _e;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = E(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / pe), p = r.findIndex((N, K, z) => z.slice(0, K + 1).reduce((u, m) => u + m, 0) >= f), y = s === 2 ? (a + 1) * d : a * d, g = (f - 1) * pe + pe, M = hi(
    o[p],
    p,
    l,
    s,
    i
  ), h = E(e.startDate).isSame(E(e.endDate), "day");
  return {
    coords: { x: y, y: g },
    mouseCoords: t,
    resourceIndex: p,
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
      isOneDayEvent: h,
      passengers: e.totalPassengers
    }
  };
};
function mi(e, n) {
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
function gi(e) {
  const n = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const r = [...t].sort((l, f) => l - f);
  if (r.length < 2)
    return n;
  const o = Math.min(5, r.length), s = mi(r, o), i = [];
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
    const p = "__auto_cat_" + f, y = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: p, name: y, minPassengers: l.min, maxPassengers: l.max });
    for (const g of l.values)
      a.set(g, p);
  }), { categories: d, capacityToCategoryId: a };
}
const yi = (e, n, t, r) => {
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
var an = {}, vi = {
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
  })(Ee, function() {
    return function(t, r) {
      r.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(vi);
const xi = an;
var cn = {}, bi = {
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
  })(Ee, function() {
    return function(t, r) {
      r.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(bi);
const wi = cn, Si = (e) => {
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
E.extend(xi);
E.extend(wi);
const er = /* @__PURE__ */ new WeakMap(), Ci = (e) => {
  const n = er.get(e);
  if (n)
    return n;
  const t = [...e].sort((o, s) => {
    const i = E(o.startDate), c = E(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), r = Si(t);
  return er.set(e, r), r;
}, Mi = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = Ci(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, ki = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Di = (e) => {
  const { recordsThreshold: n } = Ze(), [t, r] = fe(0), [o, s] = fe(0), i = we(null);
  be(() => {
    i.current = document.getElementById(qe);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = $e(() => Mi(e), [e]), a = $e(
    () => yi(e, c, d, n),
    [e, c, n, d]
  ), l = le(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((h) => h + a[Math.max(o, 0)].length), s((h) => Math.min(h + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = le(() => {
    a[o].length && (r((h) => Math.max(h - a[o - 1].length, 0)), s((h) => Math.max(h - 1, 0)));
  }, [o, a]), p = le(() => {
    r(0), s(0);
  }, []), y = t + a[o].length, g = $e(
    () => d.slice(t, y),
    [y, d, t]
  ), M = $e(
    () => c.slice(t, y),
    [y, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: g,
    totalRowsPerPage: ki(a[o]),
    next: l,
    previous: f,
    reset: p
  };
};
var ln = {}, $i = {
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
  })(Ee, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})($i);
const Ei = ln;
var dn = {}, _i = {
  get exports() {
    return dn;
  },
  set exports(e) {
    dn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Qe);
  })(Ee, function(t) {
    function r(p) {
      return p && typeof p == "object" && "default" in p ? p : { default: p };
    }
    var o = r(t);
    function s(p) {
      return p % 10 < 5 && p % 10 > 1 && ~~(p / 10) % 10 != 1;
    }
    function i(p, y, g) {
      var M = p + " ";
      switch (g) {
        case "m":
          return y ? "minuta" : "minutę";
        case "mm":
          return M + (s(p) ? "minuty" : "minut");
        case "h":
          return y ? "godzina" : "godzinę";
        case "hh":
          return M + (s(p) ? "godziny" : "godzin");
        case "MM":
          return M + (s(p) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(p) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(p, y) {
      return a.test(y) ? c[p.month()] : d[p.month()];
    };
    l.s = d, l.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(p) {
      return p + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(_i);
const Ti = dn;
var un = {}, Pi = {
  get exports() {
    return un;
  },
  set exports(e) {
    un = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Qe);
  })(Ee, function(t) {
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
})(Pi);
const Ai = un;
var fn = {}, Ii = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Qe);
  })(Ee, function(t) {
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
})(Ii);
const Yi = fn;
var hn = {}, Oi = {
  get exports() {
    return hn;
  },
  set exports(e) {
    hn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(Qe);
  })(Ee, function(t) {
    function r(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = r(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Oi);
const Li = hn, Ri = {
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
}, Ni = {
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
}, Wi = {
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
}, Fi = {
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
}, Hi = {
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
}, Bi = [
  {
    id: "en",
    lang: Wi,
    translateCode: "en-GB",
    dayjsTranslations: Ei
  },
  {
    id: "pl",
    lang: Ni,
    translateCode: "pl-PL",
    dayjsTranslations: Ti
  },
  {
    id: "es",
    lang: Ri,
    translateCode: "es-ES",
    dayjsTranslations: Li
  },
  {
    id: "lt",
    lang: Hi,
    translateCode: "lt-LT",
    dayjsTranslations: Yi
  },
  {
    id: "de",
    lang: Fi,
    translateCode: "de-DE",
    dayjsTranslations: Ai
  }
];
class zi {
  constructor() {
    En(this, "locales", Bi);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const Yt = new zi(), to = $r({
  localesData: Yt.getLocales(),
  currentLocale: Yt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ji = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = fe("en"), s = Yt.getLocales(), i = le(() => {
    const f = s.find((p) => p.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && E.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = fe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  be(() => {
    t == null || t.forEach((f) => {
      s.find((y) => y.id === f.id) || Yt.addLocales(f);
    });
  }, [s, t]), be(() => {
    const f = localStorage.getItem("locale"), p = n ?? f ?? "en";
    localStorage.setItem("locale", p), o(p), d(i());
  }, [i, n]);
  const { Provider: l } = to;
  return /* @__PURE__ */ x(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ve = () => je(to).currentLocale.lang, Zi = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Vi = C.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Gi = C.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Xi = ({ onTileClick: e }) => {
  const { feelingEmpty: n } = Ve();
  return /* @__PURE__ */ q(Vi, { onClick: e, children: [
    /* @__PURE__ */ x(Zi, {}),
    /* @__PURE__ */ x(Gi, { children: n })
  ] });
}, Ui = C.div`
  position: relative;
  display: flex;
`, Ki = C.div`
  position: relative;
  margin-left: ${Ye};
  display: flex;
  flex-direction: column;
  contain: paint;
`, Ji = C.div`
  width: calc(${({ width: e }) => e}px - ${Ye}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ye}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Ht = {
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
    reservationType: wt.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function qi(e, n) {
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
const Qi = ({
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
  clickToAddConfig: p
}) => {
  const [y, g] = fe(Ht), [M, h] = fe(e), [N, K] = fe(!1), [z, P] = fe(!1), [u, m] = fe(""), [w, _] = fe(/* @__PURE__ */ new Set()), {
    zoom: T,
    startDate: B,
    isLoading: X,
    config: { includeTakenHoursOnWeekendsInDayView: G, showTooltip: k, showThemeToggle: $ }
  } = Ze(), D = we(null), {
    page: L,
    projectsPerPerson: I,
    rowsPerItem: J,
    currentPageNum: ee,
    pagesAmount: se,
    next: oe,
    previous: H,
    reset: j
  } = Di(M), { effectiveCategories: Z, effectivePage: V } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: L };
    const ae = gi(L);
    if (ae.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: L };
    const de = L.map((ce) => {
      if (ce.isSubcontract || ce.capacity == null)
        return ce;
      const ne = ae.capacityToCategoryId.get(ce.capacity);
      return ne ? { ...ce, categoryId: ne } : ce;
    });
    return { effectiveCategories: ae.categories, effectivePage: de };
  }, [t, L]), b = le((ae) => {
    _((de) => {
      const ce = new Set(de);
      return ce.has(ae) ? ce.delete(ae) : ce.add(ae), ce;
    });
  }, []), R = $e(() => {
    const ae = [], de = Z ? [...Z].sort((ce, ne) => ce.maxPassengers - ne.maxPassengers) : [];
    for (const ce of de)
      V.some((ne) => !ne.isSubcontract && ne.categoryId === ce.id) && ae.push(ce.id);
    return V.some((ce) => ce.isSubcontract) && ae.push("__subcontract__"), ae;
  }, [Z, V]), v = le(() => {
    _(/* @__PURE__ */ new Set());
  }, []), Y = le(() => {
    _(new Set(R));
  }, [R]), {
    visiblePage: F,
    visibleRowsPerItem: A,
    visibleTotalRows: S,
    visibleProjectsPerPerson: Q,
    separatorRowIndices: O
  } = $e(() => {
    const ae = qi(V, Z), de = ((Z == null ? void 0 : Z.length) ?? 0) > 0, ce = /* @__PURE__ */ new Map();
    L.forEach((ke, Re) => ce.set(ke.id, Re));
    const ne = [], he = [], Me = [], Ae = [];
    let Te = 0;
    for (const ke of ae)
      if (ke.type === "subcontract" || ke.type === "category" && de) {
        const tt = ke.type === "subcontract" ? "__subcontract__" : ke.category.id, nt = w.has(tt);
        if (Ae.push(Te), !nt)
          for (const Ge of ke.items) {
            const St = ce.get(Ge.id) ?? 0, Ct = J[St];
            ne.push(Ge), he.push(Ct), Me.push(I[St]), Te += Ct;
          }
      } else
        for (const tt of ke.items) {
          const nt = ce.get(tt.id) ?? 0, Ge = J[nt];
          ne.push(tt), he.push(Ge), Me.push(I[nt]), Te += Ge;
        }
    const Rt = he.reduce((ke, Re) => ke + Re, 0);
    return {
      visiblePage: ne,
      visibleRowsPerItem: he,
      visibleTotalRows: Rt,
      visibleProjectsPerPerson: Me,
      separatorRowIndices: Ae
    };
  }, [V, Z, L, w, J, I]), U = we(
    ot(
      (ae, de, ce, ne, he, Me) => {
        if (!D.current)
          return;
        const { tile: Ae, segmentId: Te } = ie(ae);
        if (!Te || !Ae) {
          K(!1), g(Ht);
          return;
        }
        const Rt = W(Te, de), ke = D.current.getBoundingClientRect(), Re = Ae.getBoundingClientRect(), tt = { x: ae.clientX - ke.left, y: ae.clientY - ke.top }, nt = {
          x: ae.clientX - ke.left,
          y: ae.clientY - ke.top
        }, Ge = {
          x: Re.left - ke.left,
          y: Re.top - ke.top,
          width: Re.width,
          height: Re.height
        }, {
          coords: { x: St, y: Ct },
          resourceIndex: so,
          disposition: io,
          reservationData: ao
        } = pi(
          Rt,
          ce,
          tt,
          ne,
          he,
          Me,
          G
        );
        g({
          coords: { x: St, y: Ct },
          mouseCoords: nt,
          resourceIndex: so,
          disposition: io,
          reservationData: ao,
          tileBounds: Ge
        }), K(!0);
      },
      4
    )
  ), te = we(
    ot((ae, de) => {
      j(), h(
        ae.map((ce) => ({
          ...ce,
          data: ce.data.filter((ne) => {
            const { title: he, description: Me, subtitle: Ae } = ne;
            return (he == null ? void 0 : he.toLowerCase().includes(de.toLowerCase())) || (Ae == null ? void 0 : Ae.toLowerCase().includes(de.toLowerCase())) || (Me == null ? void 0 : Me.toLowerCase().includes(de.toLowerCase()));
          })
        })).filter((ce) => ce.data.length > 0)
      );
    }, 500)
  ), W = (ae, de) => {
    if (ae)
      return de.flatMap((ce) => ce.data).find((ce) => ce.segmentId === ae);
  }, ie = (ae) => {
    if (!ae.target)
      return { tile: null, segmentId: null };
    const de = ae.target.closest("[data-segment-id]");
    return de ? { tile: de, segmentId: de.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, me = (ae) => {
    const de = ae.target.value;
    m(de), te.current.cancel(), de ? te.current(e, de) : (j(), h(e));
  }, ue = le(() => {
    U.current.cancel(), K(!1), g(Ht);
  }, []);
  return be(() => {
    const ae = (ce) => U.current(
      ce,
      e,
      B,
      A,
      Q,
      T
    ), de = D.current;
    if (de)
      return de.addEventListener("mousemove", ae), de.addEventListener("mouseleave", ue), () => {
        de.removeEventListener("mousemove", ae), de.removeEventListener("mouseleave", ue);
      };
  }, [
    U,
    ue,
    Q,
    A,
    B,
    T,
    e
  ]), be(() => {
    u ? (te.current.cancel(), te.current(e, u)) : h(e);
  }, [e, u]), /* @__PURE__ */ q(Ui, { children: [
    /* @__PURE__ */ x(
      Ja,
      {
        data: V,
        categories: Z,
        pageNum: ee,
        pagesAmount: se,
        rows: J,
        onLoadNext: oe,
        onLoadPrevious: H,
        searchInputValue: u,
        onSearchInputChange: me,
        onItemClick: o,
        collapsedGroups: w,
        onToggleGroup: b,
        allGroupIds: R,
        onExpandAll: v,
        onCollapseAll: Y
      }
    ),
    /* @__PURE__ */ q(Ki, { children: [
      /* @__PURE__ */ x(
        mc,
        {
          zoom: T,
          topBarWidth: i,
          showThemeToggle: $,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ x(
        li,
        {
          data: F,
          baseData: n || e,
          zoom: T,
          rows: S,
          ref: D,
          onTileClick: r,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: P,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: p,
          separatorRowIndices: O
        }
      ) : /* @__PURE__ */ x(Ji, { width: i, children: X ? /* @__PURE__ */ x(pn, { isLoading: X, position: "left" }) : /* @__PURE__ */ x(Xi, {}) }),
      k && N && !z && (y == null ? void 0 : y.resourceIndex) > -1 && /* @__PURE__ */ x(el, { tooltipData: y })
    ] })
  ] });
}, no = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, ea = C.div`
  width: calc(${({ width: e }) => e}px - ${Ye}px);
  position: sticky;
  top: 0;
  left: ${Ye}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, ta = C.div`
  display: flex;
  gap: 1.875rem;
`, tr = C.button`
  ${no};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, na = C.button`
  ${no};
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
`, ra = C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, oa = C.div`
  display: flex;
`, sa = C.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, ia = ({ width: e, showThemeToggle: n, toggleTheme: t }) => {
  const { topbar: r } = Ve(), {
    data: o,
    config: s,
    handleGoNext: i,
    handleGoPrev: c,
    handleGoToday: d,
    zoomIn: a,
    zoomOut: l,
    isNextZoom: f,
    isPrevZoom: p,
    toggleDisplayActiveUnits: y,
    onClearFilterData: g
  } = Ze(), { colors: M } = et(), { filterButtonState: h = -1 } = s, N = (K) => {
    K.stopPropagation(), g == null || g();
  };
  return /* @__PURE__ */ q(ea, { width: e, children: [
    /* @__PURE__ */ x(oa, { children: h >= 0 && /* @__PURE__ */ q(
      Bt,
      {
        variant: h ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: y,
        children: [
          r.filters,
          !!h && /* @__PURE__ */ x("span", { onClick: N, children: /* @__PURE__ */ x(We, { iconName: "close", height: "16", width: "16", fill: M.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ q(ta, { children: [
      /* @__PURE__ */ q(tr, { onClick: c, children: [
        /* @__PURE__ */ x(We, { iconName: "arrowLeft", height: "15", fill: M.textPrimary }),
        r.prev
      ] }),
      /* @__PURE__ */ x(na, { onClick: d, children: r.today }),
      /* @__PURE__ */ q(tr, { onClick: i, children: [
        r.next,
        /* @__PURE__ */ x(We, { iconName: "arrowRight", height: "15", fill: M.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ q(sa, { children: [
      n && /* @__PURE__ */ x(ol, { toggleTheme: t }),
      /* @__PURE__ */ q(ra, { children: [
        r.view,
        /* @__PURE__ */ x(
          Bt,
          {
            isDisabled: !p,
            onClick: l,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ x(
          Bt,
          {
            isDisabled: !f,
            onClick: a,
            isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, aa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), ca = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), la = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), da = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), ua = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), fa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ha = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), pa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), ma = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), ga = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), ya = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), va = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), xa = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), ba = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), wa = {
  add: aa,
  subtract: ca,
  filter: la,
  arrowLeft: da,
  arrowRight: ua,
  defaultAvatar: fa,
  calendarWarning: ha,
  calendarFree: pa,
  arrowDown: ga,
  arrowUp: ma,
  search: ya,
  close: va,
  moon: xa,
  sun: ba
}, We = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = et(), i = wa[e];
  return i ? /* @__PURE__ */ x(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.accent,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, Sa = (e, n, t) => ({
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
})[n], Ca = C.button`
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
  ${({ theme: e, variant: n, disabled: t }) => Sa(e, n, t)}
`, Bt = ({
  iconName: e,
  width: n,
  height: t,
  fill: r,
  className: o,
  onClick: s,
  children: i,
  isFullRounded: c,
  isDisabled: d,
  variant: a = "outlined"
}) => {
  const { colors: l } = et();
  return /* @__PURE__ */ q(
    Ca,
    {
      onClick: s,
      isFullRounded: c,
      hasChildren: !!i,
      disabled: d,
      variant: a,
      children: [
        /* @__PURE__ */ x(
          We,
          {
            iconName: e,
            width: n,
            height: t,
            fill: d ? l.disabled : r,
            className: o
          }
        ),
        i
      ]
    }
  );
}, Ma = C.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, ka = C.div`
  position: relative;
`, Da = ({
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
  onMultiTimeRangeSelect: p,
  clickToAddConfig: y
}) => {
  const { goToDate: g, handleGoToday: M, zoomIn: h, zoomOut: N, zoom: K } = Ze();
  return _r(
    l,
    () => ({
      goToDate: g,
      goToToday: M,
      setZoom: (z) => {
        if (!Xr(z))
          return;
        const P = z - K;
        if (P > 0)
          for (let u = 0; u < P; u++)
            h();
        else
          for (let u = 0; u < Math.abs(P); u++)
            N();
      }
    }),
    [g, M, K, h, N]
  ), /* @__PURE__ */ x(
    Qi,
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
      onMultiTimeRangeSelect: p,
      clickToAddConfig: y
    }
  );
}, jl = Er(function({
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
  onEventDrop: p,
  onEventDrag: y,
  draggableConfig: g,
  onTimeRangeSelect: M,
  onMultiTimeRangeSelect: h,
  clickToAddConfig: N
}, K) {
  var D;
  const z = $e(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      showTopbar: !0,
      translations: void 0,
      ...o
    }),
    [o]
  ), P = we(null), u = we(null), [m, w] = fe((D = P.current) == null ? void 0 : D.clientWidth), _ = $e(() => E(s), [s]), [T, B] = fe(z.defaultTheme ?? "light"), X = () => {
    B(T === "light" ? "dark" : "light");
  }, G = T === "light" ? fs : hs, k = z.theme ? z.theme[G.mode] : {}, $ = {
    ...G,
    colors: {
      ...G.colors,
      ...k
    }
  };
  return _r(
    K,
    () => ({
      goToDate: (L) => {
        var I;
        return (I = u.current) == null ? void 0 : I.goToDate(L);
      },
      goToToday: () => {
        var L;
        return (L = u.current) == null ? void 0 : L.goToToday();
      },
      setZoom: (L) => {
        var I;
        return (I = u.current) == null ? void 0 : I.setZoom(L);
      }
    }),
    []
  ), be(() => {
    const L = () => {
      P.current && w(P.current.clientWidth);
    };
    return L(), window.addEventListener("resize", L), () => window.removeEventListener("resize", L);
  }, []), P.current, /* @__PURE__ */ q(De, { children: [
    /* @__PURE__ */ x(us, {}),
    /* @__PURE__ */ x(cs, { theme: $, children: /* @__PURE__ */ x(ji, { lang: z.lang, translations: z.translations, children: /* @__PURE__ */ x(
      ni,
      {
        data: n,
        isLoading: !!f,
        config: z,
        onRangeChange: i,
        defaultStartDate: _,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: /* @__PURE__ */ x(
          Ma,
          {
            showScroll: !!n.length,
            id: qe,
            ref: P,
            children: /* @__PURE__ */ x(ka, { children: /* @__PURE__ */ x(
              Da,
              {
                data: n,
                baseData: r,
                categories: t,
                onTileClick: c,
                topBarWidth: m ?? 0,
                onItemClick: l,
                toggleTheme: X,
                onEventDrop: p,
                onEventDrag: y,
                draggableConfig: g,
                schedulerRef: u,
                onTimeRangeSelect: M,
                onMultiTimeRangeSelect: h,
                clickToAddConfig: N
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}), $a = C.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, Ea = C.button`
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
`, _a = C.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ta = C.p`
  ${ht}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, nr = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Ve(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ x($a, { intent: e, children: /* @__PURE__ */ q(Ea, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ x(_a, { children: t }),
    /* @__PURE__ */ x(Ta, { children: d })
  ] }) });
}, Pa = C.div`
  min-width: ${Ye + "px"};
  max-width: ${Ye + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Aa = C.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ye}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Ia = C.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, Ya = C.input`
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
`, Oa = C.div`
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
`, La = C.button`
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
`, Ra = C.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${pe}px;
  height: calc(${pe}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBorder + "33" : e.colors.border};
  background-color: ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBg : "transparent"};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Na = C.div`
  display: flex;
  align-items: center;
`, Wa = C.div`
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
`, Fa = C.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Ha = C.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, rr = C.p`
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
`, Ba = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), za = () => /* @__PURE__ */ q("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ x("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ x("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ x("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ x("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ x("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), ja = () => /* @__PURE__ */ q("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ x("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ x("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Za = ({ id: e, item: n, rows: t, onItemClick: r, isSubcontract: o }) => /* @__PURE__ */ x(
  Ra,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ q(Na, { children: [
      /* @__PURE__ */ x(Wa, { $provider: o, children: Ba(n.icon) ? /* @__PURE__ */ x(Fa, { src: n.icon, alt: "" }) : o ? /* @__PURE__ */ x(ja, {}) : /* @__PURE__ */ x(za, {}) }),
      /* @__PURE__ */ q(Ha, { children: [
        /* @__PURE__ */ x(rr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ x(rr, { children: n.subtitle })
      ] })
    ] })
  }
), Va = C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px 0 0;
  height: 21px;
  background: ${({ theme: e }) => e.mode === "dark" ? `linear-gradient(90deg, ${e.colors.primary} 0%, ${e.colors.background} 100%)` : `linear-gradient(90deg, #F3F4F6 0%, ${e.colors.background} 100%)`};
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e }) => e.mode === "dark" ? e.colors.secondary : "#EBEDF0"};
  }
`, Ga = C.div`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder : e.colors.accent};
  border-radius: 0 2px 2px 0;
`, Xa = C.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, Ua = C.span`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder : e.colors.accent};
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder + "18" : e.colors.accent + "14"};
  padding: 1px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  line-height: 1.4;
`, Ka = C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme: e }) => e.colors.placeholder};
  transition: transform 0.2s ease;
  transform: rotate(${({ $collapsed: e }) => e ? "-90deg" : "0deg"});
`, or = ({
  label: e,
  count: n,
  isCollapsed: t,
  onToggle: r,
  variant: o = "category"
}) => /* @__PURE__ */ q(Va, { $variant: o, onClick: r, title: e, children: [
  /* @__PURE__ */ x(Ga, { $variant: o }),
  /* @__PURE__ */ x(Ka, { $collapsed: t, children: /* @__PURE__ */ x("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ x(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ x(Xa, { $variant: o, children: e }),
  /* @__PURE__ */ x(Ua, { $variant: o, children: n })
] }), Ja = ({
  data: e,
  categories: n,
  rows: t,
  onLoadNext: r,
  onLoadPrevious: o,
  pageNum: s,
  pagesAmount: i,
  searchInputValue: c,
  onSearchInputChange: d,
  onItemClick: a,
  collapsedGroups: l,
  onToggleGroup: f,
  allGroupIds: p,
  onExpandAll: y,
  onCollapseAll: g
}) => {
  const [M, h] = fe(!1), N = Ve(), K = () => h((G) => !G), z = n ? [...n].sort((G, k) => G.maxPassengers - k.maxPassengers) : [], P = z.length > 0, u = p.length > 0, m = u && l.size === p.length;
  u && l.size;
  const w = e.filter((G) => G.isSubcontract), _ = N.subcontract ?? "Subcontract", T = (G) => {
    const k = e.indexOf(G);
    return /* @__PURE__ */ x(
      Za,
      {
        id: G.id,
        item: G.label,
        rows: t[k],
        onItemClick: a,
        isSubcontract: G.isSubcontract
      },
      G.id
    );
  }, B = (G) => {
    const k = e.filter(
      (L) => !L.isSubcontract && L.categoryId === G.id
    );
    if (k.length === 0)
      return null;
    const $ = l.has(G.id), D = G.name;
    return /* @__PURE__ */ q("div", { children: [
      /* @__PURE__ */ x(
        or,
        {
          label: D,
          count: k.length,
          isCollapsed: $,
          onToggle: () => f(G.id),
          variant: "category"
        }
      ),
      !$ && k.map(T)
    ] }, G.id);
  }, X = e.filter(
    (G) => !G.isSubcontract && (!G.categoryId || !P)
  );
  return /* @__PURE__ */ q(Pa, { children: [
    /* @__PURE__ */ q(Aa, { children: [
      /* @__PURE__ */ q(Ia, { children: [
        /* @__PURE__ */ q(Oa, { isFocused: M, children: [
          /* @__PURE__ */ x(
            Ya,
            {
              placeholder: N.search,
              value: c,
              onChange: d,
              onFocus: K,
              onBlur: K
            }
          ),
          /* @__PURE__ */ x(We, { iconName: "search" })
        ] }),
        u && /* @__PURE__ */ x(
          La,
          {
            title: m ? "Expand all" : "Collapse all",
            onClick: m ? y : g,
            $allCollapsed: m,
            children: /* @__PURE__ */ x("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: m ? /* @__PURE__ */ q(De, { children: [
              /* @__PURE__ */ x("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ x("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ q(De, { children: [
              /* @__PURE__ */ x("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ x("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ x(
        nr,
        {
          intent: "previous",
          isVisible: s !== 0,
          onClick: o,
          icon: /* @__PURE__ */ x(We, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: s,
          pagesAmount: i
        }
      )
    ] }),
    P ? z.map(B) : X.map(T),
    P && X.length > 0 && X.map(T),
    w.length > 0 && /* @__PURE__ */ q(De, { children: [
      /* @__PURE__ */ x(
        or,
        {
          label: _,
          count: w.length,
          isCollapsed: l.has("__subcontract__"),
          onToggle: () => f("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !l.has("__subcontract__") && w.map(T)
    ] }),
    /* @__PURE__ */ x(
      nr,
      {
        intent: "next",
        isVisible: s !== i - 1,
        onClick: r,
        icon: /* @__PURE__ */ x(We, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: s,
        pagesAmount: i
      }
    )
  ] });
}, qa = C.div`
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
`, Qa = Lt`
from{
    left: -100%;
}
to{
    left: 100%;
}`, ec = C.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Qa} 1s infinite;
`, tc = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ x(qa, { position: n, children: /* @__PURE__ */ x(ec, {}) }) : null, pn = tc, He = (e, n) => {
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
    topText: p,
    bottomText: y,
    strokeStyle: g,
    labelBetweenCells: M
  } = e;
  if (t.beginPath(), t.strokeStyle = g ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), M ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const h = r + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(d, h, c);
  }
  if (l && f && p && y) {
    t.fillStyle = f, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = p.font;
    const h = r + s / 2 - t.measureText(p.label).width / 2;
    t.fillStyle = p.color, t.fillText(p.label, h, p.y), t.font = y.font;
    const N = r + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, N, y.y);
  }
}, ro = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t ? n.colors.currentDay : r ? n.colors.primary : n.colors.secondary;
}, mn = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, nc = (e, n, t, r) => {
  const o = dt - Ue / ms, s = dt - Ue / gs, i = Fe + mt;
  let c = 0;
  for (let d = 0; d < n; d++) {
    const a = Gr(
      E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    ), l = a.isCurrentDay;
    if (He(
      {
        ctx: e,
        x: c,
        y: i,
        width: Se,
        height: Ue,
        isBottomRow: !0,
        fillStyle: l ? r.colors.today + "26" : ro({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r),
        topText: {
          y: o,
          label: l ? "" : a.dayName.toUpperCase(),
          font: Le.bottomRow.name,
          color: mn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: l ? "700 10px Inter" : Le.bottomRow.number,
          color: l ? r.colors.today : mn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            r
          )
        }
      },
      r
    ), l) {
      const y = c + Se / 2, g = o - 13 / 2;
      e.save(), e.fillStyle = r.colors.today, e.beginPath(), e.roundRect ? e.roundRect(y - 30 / 2, g, 30, 13, 5) : e.rect(y - 30 / 2, g, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = "800 8.5px Inter", e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", y, g + 13 / 2 + 0.5), e.restore();
    }
    c += Se;
  }
}, rc = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Ie;
  const s = Fe;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= Qt && (c = 0);
    const a = Vr(t, d) * Ie;
    He(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: mt,
        textYPos: Zr,
        label: E().month(c).format("MMMM").toUpperCase(),
        font: Le.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, oc = (e, n, t) => {
  let o = 0, s = 0, i = E(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * Se + Se;
  for (let c = 0; c < Qt; c++)
    i > Qt - 1 && (i = 0), s = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * Se, He(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Fe,
        textYPos: Sn,
        label: E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: Le.topRow
      },
      t
    ), o += s, i++;
}, sc = (e, n, t, r) => {
  const o = 7 * Se, s = Fe, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % Vn;
    f <= 0 && (f += Vn), l !== 1 && a === 0 && (d = -l * Se + Se), He(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: mt,
        textYPos: Zr,
        label: `${t.toUpperCase()} ${f}`,
        font: Le.middleRow
      },
      r
    ), d += o;
  }
}, ic = (e, n, t, r, o) => {
  const s = dt - Ue / 1.6, i = dt - Ue / 4.5, c = Fe + mt;
  let d = 0;
  for (let a = 0; a < n; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame(E(), "week");
    He(
      {
        ctx: e,
        x: d,
        y: c,
        width: ut,
        height: Ue,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : ro({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: f ? "700 14px Inter" : Le.bottomRow.name,
          color: f ? o.colors.today : mn({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: r.toUpperCase(),
          font: Le.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += ut;
  }
}, ac = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (Un(s) - t + 1) * Ie, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = Un(s + d) * Ie), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ie) * Ie), He(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Fe,
        textYPos: Sn,
        label: (s + d).toString(),
        font: Le.topRow
      },
      r
    ), c += a, l += a, d++;
}, cc = (e, n, t, r) => {
  const o = Math.floor(n / It) + 2, s = It * _e;
  let d = -E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * _e + 0.5 * _e;
  for (let a = 0; a < o; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    He(
      {
        ctx: e,
        x: d,
        y: ft,
        width: s,
        height: bt,
        textYPos: ft + bt / 2 + 2,
        label: l,
        font: Le.bottomRow.number
      },
      r
    ), d += s;
  }
}, lc = (e, n, t, r) => {
  const o = Math.ceil(n / It), s = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * _e;
  for (let f = 0; f < a; f++) {
    const p = E(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), g = E(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), M = g.format("MMMM").toUpperCase(), h = g.diff(p, "hour") + 1, N = f === 0 ? h * _e : n * _e;
    He(
      {
        ctx: e,
        x: l,
        y: 0,
        width: N,
        height: ft,
        textYPos: Sn,
        label: M,
        font: Le.topRow
      },
      r
    ), l += N;
  }
}, dc = (e, n, t, r) => {
  let o = 0;
  const s = ft + bt, i = E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = _e;
  for (let d = 0; d < n; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    He(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: qt,
        label: a,
        font: Le.bottomRow.hoursInDay,
        textYPos: ft + bt + qt / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += _e;
  }
}, uc = (e, n, t, r, o, s, i) => {
  switch (n) {
    case 0:
      ac(e, r, s, i), rc(e, t, r, i), ic(e, t, r, o, i);
      break;
    case 1:
      oc(e, r, i), sc(e, r, o, i), nc(e, t, r, i);
      break;
    case 2:
      lc(e, t, r, i), cc(e, t, r, i), dc(e, t, r, i);
      break;
  }
}, fc = C.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, hc = C.div`
  height: ${dt}px;
  display: block;
`, pc = C.canvas``, mc = ({ zoom: e, topBarWidth: n, showThemeToggle: t, toggleTheme: r }) => {
  const { week: o } = Ve(), { date: s, cols: i, dayOfYear: c, startDate: d, config: a } = Ze(), l = we(null), f = et(), p = le(
    (y) => {
      const g = $n(), h = (e === 2 ? ps : dt) + 1;
      Kr(y, g, h), uc(y, e, i, d, o, c, f);
    },
    [i, c, d, o, e, f]
  );
  return be(() => {
    if (!l.current)
      return;
    const y = l.current.getContext("2d");
    if (!y)
      return;
    const g = () => p(y);
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, [p]), be(() => {
    const y = l.current;
    if (!y)
      return;
    y.style.letterSpacing = "1px";
    const g = y.getContext("2d");
    g && p(g);
  }, [s, e, p]), /* @__PURE__ */ q(fc, { children: [
    a.showTopbar !== !1 && /* @__PURE__ */ x(ia, { width: n, showThemeToggle: t, toggleTheme: r }),
    /* @__PURE__ */ x(hc, { id: ys, children: /* @__PURE__ */ x(pc, { ref: l }) })
  ] });
}, gc = (e, n, t) => {
  let r;
  switch (t) {
    case 0:
      r = Ie;
      break;
    case 2:
      r = _e;
      break;
    default:
      r = Se;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = n.startDate.startOf("day"), d = n.endDate.startOf("day"), a = () => {
    let l;
    switch (t) {
      case 2:
        l = (e.startDate.diff(n.startDate, "minute") / Ce + 1) * r - r / 2;
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
          e.endDate.diff(e.startDate, "minute") / Ce * r,
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
          e.endDate.diff(n.startDate, "minute") / Ce * r + 0.5 * r,
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
          n.endDate.diff(e.startDate, "minute") / Ce * r,
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
          n.endDate.diff(n.startDate, "minute") / Ce * r,
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
}, yc = (e, n, t, r, o, s) => {
  const i = e * pe + vs, c = n.hour(), d = t.hour();
  let a, l, f, p;
  switch (s) {
    case 2: {
      a = E(r), l = E(o), f = E(n).hour(c).minute(0), p = E(t).hour(d).minute(0);
      break;
    }
    default: {
      a = E(r).hour(0).minute(0), l = E(o).hour(23).minute(59), f = n, p = t;
      break;
    }
  }
  return {
    ...gc(
      { startDate: a, endDate: l },
      { startDate: f, endDate: p },
      s
    ),
    y: i
  };
}, oo = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, vc = {
  transfer: /* @__PURE__ */ q(De, { children: [
    /* @__PURE__ */ x("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ x("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ q(De, { children: [
    /* @__PURE__ */ x("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ x("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ q(De, { children: [
    /* @__PURE__ */ x("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ x("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ q(De, { children: [
    /* @__PURE__ */ x("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ x("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ x("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ q(De, { children: [
    /* @__PURE__ */ x("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ x("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ q(De, { children: [
    /* @__PURE__ */ x("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ x("path", { d: "M12 7.5V12l3 2" })
  ] })
}, $t = ({
  name: e,
  className: n,
  strokeWidth: t = 2
}) => /* @__PURE__ */ x(
  "svg",
  {
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: t,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: vc[e]
  }
);
C.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
C.p`
  ${ht}
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
const xc = C.button`
  ${ht}
  position: absolute;
  height: ${wn}px;
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
`, bc = C.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`, wc = C.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, sr = C.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Sc = C.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Cc = C.span`
  ${pt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 750;
`, ir = C.span`
  ${pt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Mc = C.span`
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
`, kc = C.div`
  ${pt}
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
`, ar = C.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Dc = C.span`
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
`, cr = C.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, $c = C.div`
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
`, lr = C.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, Ec = C.span`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid #fff;
`, _c = 34, Tc = 156, Pc = 248, Ac = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, Ic = "#3E8E5A", Yc = "#D98A22", Oc = ({
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
  const { date: a } = Ze(), l = Dn(a, t), { y: f, x: p, width: y } = yc(
    e,
    l.startDate,
    l.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: g } = et(), M = we(null), h = E(n.startDate).isSame(E(n.endDate), "day"), N = n.eventType === wt.Tour, K = n.eventType === wt.Transfer, z = h && (N || K), P = (k) => {
    M.current = { x: k.clientX, y: k.clientY }, c && s && (k.preventDefault(), s(n, k));
  }, u = (k) => {
    if (M.current) {
      const $ = Math.abs(k.clientX - M.current.x), D = Math.abs(k.clientY - M.current.y);
      Math.sqrt($ * $ + D * D) <= 5 && (o == null || o(n)), M.current = null;
    } else
      o == null || o(n);
  }, m = {
    left: `${p}px`,
    top: `${f + d}px`,
    backgroundColor: `${n.bgColor ?? g.defaultTile}`,
    width: `${y}px`,
    color: oo(n.bgColor ?? "")
  }, w = !r && n.readiness ? Ac[n.readiness] : null, _ = r && n.subcontractConfirmed === !1, T = r ? _ ? Yc : Ic : w == null ? void 0 : w.stripe, B = (k) => /* @__PURE__ */ q(
    xc,
    {
      "data-segment-id": n.segmentId,
      style: m,
      onClick: u,
      onMouseDown: P,
      onDragStart: ($) => $.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: _,
      children: [
        T && /* @__PURE__ */ x(bc, { style: { background: T } }),
        k
      ]
    }
  );
  if (z)
    return B(
      /* @__PURE__ */ q(De, { children: [
        r && /* @__PURE__ */ x(ar, { $sm: !0, children: /* @__PURE__ */ x(cr, { children: "SUB" }) }),
        /* @__PURE__ */ q($c, { children: [
          /* @__PURE__ */ x($t, { name: K ? "transfer" : "sun", strokeWidth: 2.4 }),
          y >= _c && /* @__PURE__ */ q(De, { children: [
            /* @__PURE__ */ x(lr, { children: E(n.startDate).format("HH:mm") }),
            !K && /* @__PURE__ */ x(lr, { $end: !0, children: E(n.endDate).format("HH:mm") })
          ] }),
          w && /* @__PURE__ */ x(Ec, { style: { background: w.color } })
        ] })
      ] })
    );
  const X = y >= Pc, G = n.bookingNumber ? /* @__PURE__ */ x(Mc, { children: n.bookingNumber }) : null;
  return B(
    /* @__PURE__ */ q(De, { children: [
      /* @__PURE__ */ x(ar, { children: r ? /* @__PURE__ */ x(cr, { children: "SUB" }) : w && /* @__PURE__ */ x(Dc, { style: { color: w.color }, children: /* @__PURE__ */ x($t, { name: w.icon, strokeWidth: w.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ q(wc, { children: [
        /* @__PURE__ */ q(sr, { $pad: !0, children: [
          /* @__PURE__ */ x(Sc, { children: /* @__PURE__ */ x($t, { name: K ? "transfer" : "tour" }) }),
          X ? /* @__PURE__ */ x(Cc, { children: n.title }) : /* @__PURE__ */ q(De, { children: [
            G,
            y >= Tc && n.subtitle && /* @__PURE__ */ x(ir, { children: n.subtitle })
          ] })
        ] }),
        X && /* @__PURE__ */ q(sr, { children: [
          G,
          n.subtitle && /* @__PURE__ */ x(ir, { children: n.subtitle })
        ] }),
        X && n.driver && /* @__PURE__ */ q(kc, { children: [
          /* @__PURE__ */ x($t, { name: "person" }),
          n.driver
        ] })
      ] })
    ] })
  );
}, dr = (e, n) => {
  let t = 0;
  for (const r of n)
    e >= r && t++;
  return t * Pe;
}, Lc = C.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${pe}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  pointer-events: none;
`, Rc = ({
  data: e,
  zoom: n,
  onTileClick: t,
  onDragStart: r,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = []
}) => {
  const c = le(() => {
    let d = 0;
    return e.map((a, l) => {
      if (l > 0 && (d += Math.max(e[l - 1].data.length, 1)), !a.data.some((f) => f.length > 0)) {
        const f = dr(d, i);
        return [
          /* @__PURE__ */ x(Lc, { style: { top: `${d * pe + f}px` }, children: "Disponible" }, `dispo-${a.id}`)
        ];
      }
      return a.data.map(
        (f, p) => f.map((y) => {
          const g = s === y.segmentId, M = o ? o(y) : !1, h = p + d, N = dr(h, i);
          return /* @__PURE__ */ x(
            Oc,
            {
              row: h,
              data: y,
              zoom: n,
              isSubcontract: a.isSubcontract,
              onTileClick: t,
              onDragStart: r,
              isDragging: g,
              isDraggable: M,
              yOffset: N
            },
            y.segmentId
          );
        })
      );
    }).flat(2);
  }, [e, t, n, r, o, s, i]);
  return /* @__PURE__ */ x(De, { children: c() });
}, Nc = Rc;
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
const Wc = C.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, Fc = C.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, Hc = C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, Bc = C.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, zc = C.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, jc = C.div`
  ${ht}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Zc = C.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, Vc = C.div`
  padding: 10px 12px;
`, Gc = C.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, ur = C.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, fr = C.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, hr = C.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, pr = C.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, mr = C.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Xc = C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Uc = C.div``, Kc = C.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Jc = C.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, qc = C.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, gr = C.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, yr = C.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, vr = C.div`
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
const Qc = {
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
}, el = ({ tooltipData: e }) => {
  const { mouseCoords: n, reservationData: t } = e, r = we(null), [o, s] = fe("below"), i = Ve(), c = { ...Qc, ...i.tooltip };
  Dr(() => {
    if (!r.current || !n)
      return;
    const y = r.current, { width: g, height: M } = y.getBoundingClientRect(), h = y.parentElement;
    if (!h)
      return;
    const N = h.getBoundingClientRect(), K = 12, z = 4, P = N.height - n.y, u = N.width - n.x;
    let m = n.x + K, w = n.y + K, _ = "below";
    u < g + K && (m = n.x - g - K), P < M + K && (w = n.y - M - K, _ = "above"), m = Math.max(z, Math.min(m, N.width - g - z)), w = Math.max(z, Math.min(w, N.height - M - z)), s(_), y.style.left = `${m}px`, y.style.top = `${w}px`;
  }, [n]);
  const d = t.reservationType === wt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, p = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ q(Wc, { ref: r, $position: o, children: [
    /* @__PURE__ */ q(Fc, { children: [
      /* @__PURE__ */ q(Hc, { children: [
        /* @__PURE__ */ x(Bc, { children: t.bookingNumber }),
        /* @__PURE__ */ x(zc, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ x(jc, { children: t.eventName }),
      t.client && /* @__PURE__ */ x(Zc, { children: t.client })
    ] }),
    /* @__PURE__ */ q(Vc, { children: [
      /* @__PURE__ */ q(Gc, { children: [
        /* @__PURE__ */ q(ur, { children: [
          /* @__PURE__ */ x(fr, { children: c.startDate }),
          /* @__PURE__ */ q(hr, { children: [
            /* @__PURE__ */ x(pr, { children: t.startDate }),
            " ",
            /* @__PURE__ */ x(mr, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ q(ur, { $isEnd: !0, children: [
          /* @__PURE__ */ x(fr, { children: c.endDate }),
          /* @__PURE__ */ q(hr, { children: [
            /* @__PURE__ */ x(pr, { children: t.endDate }),
            " ",
            /* @__PURE__ */ x(mr, { children: t.endTime })
          ] })
        ] })
      ] }),
      p.length > 0 && /* @__PURE__ */ x(Xc, { children: p.map((y, g) => /* @__PURE__ */ q(Uc, { children: [
        /* @__PURE__ */ x(Kc, { children: y.label }),
        /* @__PURE__ */ x(Jc, { children: y.value })
      ] }, g)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ q(qc, { children: [
        t.serviceNotes && /* @__PURE__ */ q(gr, { children: [
          /* @__PURE__ */ x(yr, { children: c.serviceNotes }),
          /* @__PURE__ */ x(vr, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ q(gr, { children: [
          /* @__PURE__ */ x(yr, { children: c.reservationNotes }),
          /* @__PURE__ */ x(vr, { children: t.reservationNotes })
        ] })
      ] })
    ] })
  ] });
}, tl = C.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, nl = C.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, rl = C.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, ol = ({ toggleTheme: e }) => {
  const n = et();
  return /* @__PURE__ */ q(tl, { onClick: e, children: [
    /* @__PURE__ */ x(nl, {}),
    /* @__PURE__ */ x(rl, { children: n.mode === "light" ? /* @__PURE__ */ x(We, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ x(We, { iconName: "moon", height: "16", width: "16" }) })
  ] });
}, sl = C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, il = C.div`
  position: absolute;
  height: ${wn}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: n, $animateToY: t }) => e && n !== void 0 && t !== void 0 ? `transform: translate3d(${n}px, ${t}px, 0);` : ""}
`, al = C.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, xr = C.p`
  ${ht}
  ${pt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, cl = C.p`
  ${ht}
  ${pt}
`, ll = C.div`
  position: sticky;
  left: ${Ye + 16}px;
  overflow: hidden;
`, dl = C.div`
  position: absolute;
  height: ${wn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, ul = C.div`
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
`, fl = C.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, hl = C.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, pl = C.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, br = C.div`
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
`, wr = C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Sr = C.div`
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
`, Cr = C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, zt = C.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, jt = C.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, rt = C.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Mr = C.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, ml = ({
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
  const a = Ve(), l = (P) => {
    let u = 0;
    for (const m of d)
      m <= P && u++;
    return P * pe + u * Pe;
  }, [f, p] = fe(null), [y, g] = fe(0), M = le((P = 400, u = 300) => {
    const w = t.width, _ = 48, T = document.getElementById("react-scheduler");
    if (!T)
      return {
        x: n.x + w + 16,
        y: n.y
      };
    const B = T.scrollLeft, X = T.scrollTop, G = T.clientWidth, k = T.clientHeight, $ = n.x - B, D = n.y - X, L = {
      left: Ye + 16,
      // Avoid left column
      right: G - 16,
      top: 16,
      bottom: k - 16
    }, I = L.right - ($ + w), J = $ - L.left, ee = L.bottom - (D + _), se = D - L.top;
    let oe, H;
    return I >= P + 16 ? oe = $ + w + 16 : J >= P + 16 ? oe = $ - P - 16 : I >= J ? (oe = $ + w + 16, oe + P > L.right && (oe = L.right - P)) : (oe = $ - P - 16, oe < L.left && (oe = L.left)), ee >= u + 16 ? H = D + _ + 16 : se >= u + 16 ? H = D - u - 16 : ee >= se ? (H = D + _ + 16, H + u > L.bottom && (H = L.bottom - u)) : (H = D - u - 16, H < L.top && (H = L.top)), oe = Math.max(L.left, Math.min(oe, L.right - P)), H = Math.max(L.top, Math.min(H, L.bottom - u)), {
      x: oe + B,
      y: H + X
    };
  }, [n.x, n.y, t.width]);
  be(() => {
    s === "dragging" && e && y === 0 ? g(n.x) : s === "idle" && g(0);
  }, [s, e, n.x, y]), be(() => {
    p(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const h = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const P = [];
    let u = 0;
    for (const m of i) {
      const w = Math.max(m.data.length, 1);
      if (m.capacity !== void 0 && e.totalPassengers > m.capacity)
        for (let _ = 0; _ < w; _++)
          P.push(u + _);
      u += w;
    }
    return P;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const N = s === "animating", K = oo(e.bgColor ?? ""), z = () => {
    if (!r)
      return "";
    const P = E(r.startDate).format("MMM D, HH:mm"), u = E(r.endDate).format("HH:mm");
    return `${P} - ${u}`;
  };
  return /* @__PURE__ */ q(sl, { children: [
    h.map((P) => /* @__PURE__ */ x(
      hl,
      {
        style: {
          top: `${l(P)}px`,
          height: `${pe}px`
        }
      },
      P
    )),
    r && s === "dragging" && /* @__PURE__ */ x(
      fl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${pe}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ q(De, { children: [
      /* @__PURE__ */ x(
        dl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (pe - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ x(
        ul,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (pe - 48) / 2}px`
          },
          children: z()
        }
      )
    ] }),
    r && s === "dragging" && c && /* @__PURE__ */ x(
      pl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          left: "0px",
          top: `${l(r.resourceIndex)}px`,
          height: `${pe}px`
        }
      }
    ),
    r && o && r.hasConflict && r.conflicts && r.conflicts.length > 0 && s === "dragging" && (() => {
      const P = M(400, 300);
      return /* @__PURE__ */ q(
        br,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`
          },
          children: [
            /* @__PURE__ */ q(wr, { children: [
              /* @__PURE__ */ x(Sr, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ x(Cr, { children: r.conflicts.map((u, m) => {
              const w = E(r.startDate).format("YYYY-MM-DD"), _ = E(r.endDate).format("YYYY-MM-DD"), T = E(u.event.startDate).format("YYYY-MM-DD"), B = E(u.event.endDate).format("YYYY-MM-DD"), X = E(u.conflictStart).format("YYYY-MM-DD"), G = E(u.conflictEnd).format("YYYY-MM-DD"), k = w !== _, $ = T !== B, D = X !== G, L = k ? E(r.startDate).format("MMM D, h:mm A") : E(r.startDate).format("h:mm A"), I = k ? E(r.endDate).format("MMM D, h:mm A") : E(r.endDate).format("h:mm A"), J = $ ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), ee = $ ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), se = D ? E(u.conflictStart).format("MMM D, h:mm A") : E(u.conflictStart).format("h:mm A"), oe = D ? E(u.conflictEnd).format("MMM D, h:mm A") : E(u.conflictEnd).format("h:mm A"), H = D ? "" : E(u.conflictStart).format("MMM D"), j = r.startDate.getTime(), Z = r.endDate.getTime(), V = u.event.startDate.getTime(), b = u.event.endDate.getTime(), R = j >= V && j < b, v = Z > V && Z <= b, Y = j <= V && Z >= b, F = V <= j && b >= Z;
              let A = !1, S = !1, Q = !1, O = !1, U = "";
              return Y || F ? (A = !0, S = !0, Q = !0, O = !0, U = `⚠️ ${a.conflicts.changeBoth}`) : R && v ? (A = !0, S = !0, Q = !0, O = !0, U = `⚠️ ${a.conflicts.changeBoth}`) : R ? (A = !0, O = !0, U = `⚠️ ${a.conflicts.changeStart}`) : v && (S = !0, Q = !0, U = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ q(zt, { children: [
                /* @__PURE__ */ q(jt, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ q(rt, { children: [
                  /* @__PURE__ */ x("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  A ? /* @__PURE__ */ x("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: L }) : L,
                  " ",
                  a.conflicts.to,
                  " ",
                  S ? /* @__PURE__ */ x("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
                ] }),
                /* @__PURE__ */ q(rt, { children: [
                  /* @__PURE__ */ x("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  Q ? /* @__PURE__ */ x("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: J }) : J,
                  " ",
                  a.conflicts.to,
                  " ",
                  O ? /* @__PURE__ */ x("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ee }) : ee
                ] }),
                /* @__PURE__ */ q(Mr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  H && `${H}, `,
                  se,
                  " - ",
                  oe
                ] }),
                U && /* @__PURE__ */ x(rt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: U })
              ] }, m);
            }) })
          ]
        }
      );
    })(),
    r && o && !r.hasConflict && r.nearbyEvents && r.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const P = M(400, 400);
      return /* @__PURE__ */ q(
        br,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ q(wr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ x(Sr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ q(Cr, { children: [
              (() => {
                const u = r.nearbyEvents.some((T) => T.position === "before"), m = r.nearbyEvents.some((T) => T.position === "after"), w = E(r.startDate).format("h:mm A"), _ = E(r.endDate).format("h:mm A");
                return /* @__PURE__ */ q(zt, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ q(jt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ q(rt, { style: { fontWeight: 600 }, children: [
                    E(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ x("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    m ? /* @__PURE__ */ x("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: _ }) : _
                  ] }),
                  /* @__PURE__ */ x(rt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              r.nearbyEvents.map((u, m) => {
                const w = E(u.event.startDate).format("YYYY-MM-DD"), _ = E(u.event.endDate).format("YYYY-MM-DD"), T = w !== _, B = T ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), X = T ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), G = E(u.event.startDate).format("MMM D"), k = Math.floor(u.timeGap / (1e3 * 60 * 60)), $ = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), D = k > 0 ? `${k}h ${$}m` : `${$}m`, L = u.position === "after", I = u.position === "before";
                return /* @__PURE__ */ q(zt, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ q(jt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ q(rt, { children: [
                    !T && `${G}: `,
                    L ? /* @__PURE__ */ x("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: B }) : B,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ x("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: X }) : X
                  ] }),
                  /* @__PURE__ */ q(Mr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    D,
                    " ",
                    u.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, m);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ x(
      il,
      {
        $isAnimating: N,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: N ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: N ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: N ? void 0 : `translate3d(${c ? y : n.x}px, ${n.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: K
        },
        children: /* @__PURE__ */ x(al, { children: /* @__PURE__ */ q(ll, { children: [
          /* @__PURE__ */ x(xr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ x(xr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ x(cl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, gl = ml, yl = Lt`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, vl = C.div`
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
  animation: ${yl} 1.5s ease-in-out infinite;
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
`, xl = ({ selectionBox: e, isSelecting: n }) => !e || !n ? null : /* @__PURE__ */ x(
  vl,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), bl = xl, wl = Lt`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Sl = C.div`
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
  animation: ${wl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, Cl = C.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Ml = C.span`
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
`, kl = C.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Dl = C.span`
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
const $l = C.div`
  display: flex;
  gap: 8px;
`, kr = C.button`
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
`, El = ({ selections: e, onConfirm: n, onClear: t }) => {
  var g;
  const o = Ve().multiSelect, s = $e(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((g = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : g.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const p = s > 0, y = /* @__PURE__ */ q(Sl, { $hasConflicts: p, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ q(Cl, { children: [
      /* @__PURE__ */ q(Ml, { $hasConflicts: p, children: [
        e.length,
        " ",
        i
      ] }),
      p && /* @__PURE__ */ q(kl, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ x(Dl, { children: c })
    ] }),
    /* @__PURE__ */ q($l, { children: [
      /* @__PURE__ */ q(kr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ x(kr, { variant: "primary", $hasConflicts: p, onClick: n, children: p ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return fo(y, document.body);
}, _l = El, Tl = Lt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Pl = C.div`
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
  animation: ${Tl} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && Ot`
      border-style: dashed;
    `}
`, Al = C.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, Il = C.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Yl = C.button`
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
`, Ol = ({
  selections: e,
  data: n,
  zoom: t,
  startDate: r,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = fe(null), [a, l] = fe({ x: 0, y: 0 }), f = we(null), p = $e(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return _e;
      default:
        return Se;
    }
  }, [t]), y = $e(() => E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), g = $e(() => e.map((m, w) => {
    let _ = 0, T = !1;
    for (const J of n) {
      if (J.id === m.resourceId) {
        T = !0;
        break;
      }
      _ += Math.max(J.data.length, 1);
    }
    if (!T)
      return null;
    const B = E(m.startDate), X = E(m.endDate);
    let G, k;
    switch (t) {
      case 0:
        G = Math.floor(B.diff(y, "days") / 7), k = Math.max(1, Math.ceil(X.diff(B, "days") / 7) + 1);
        break;
      case 1:
        G = B.diff(y, "days"), k = Math.max(1, X.diff(B, "days") + 1);
        break;
      case 2:
        G = B.diff(y, "hours"), k = Math.max(1, X.diff(B, "hours") + 1);
        break;
      default:
        G = 0, k = 1;
    }
    const $ = G * p;
    let D = 0;
    for (const J of i)
      J <= _ && D++;
    const L = _ * pe + D * Pe, I = k * p;
    return {
      index: w,
      selection: m,
      x: $,
      y: L,
      width: I,
      height: pe
    };
  }), [e, n, t, y, p]), M = (m, w) => {
    const _ = E(m).format("MMM D"), T = E(w).format("MMM D");
    return _ === T ? _ : `${_} - ${T}`;
  }, h = (m) => !m.hasConflict || !m.conflicts ? "" : `⚠️ Conflicts with:
${m.conflicts.map((_) => {
    const T = (_.overlapDuration / 36e5).toFixed(1);
    return `• ${_.event.title} (${T}h overlap)`;
  }).join(`
`)}`, N = le(
    (m) => {
      let w = 0;
      for (const _ of n) {
        const T = Math.max(_.data.length, 1);
        if (m >= w * pe && m < (w + T) * pe)
          return {
            resourceId: _.id,
            resourceLabel: _.label
          };
        w += T;
      }
      return null;
    },
    [n]
  ), K = le(
    (m) => {
      const w = Math.floor(m / p);
      switch (t) {
        case 0:
          return y.add(w * 7, "days").toDate();
        case 1:
          return y.add(w, "days").toDate();
        case 2:
          return y.add(w, "hours").toDate();
        default:
          return y.toDate();
      }
    },
    [t, y, p]
  ), z = le(
    (m, w) => {
      !s || (m.preventDefault(), m.stopPropagation(), !g[w]) || (f.current = { x: m.clientX, y: m.clientY }, d(w), l({ x: 0, y: 0 }));
    },
    [s, g]
  ), P = le(
    (m) => {
      if (c === null || !f.current)
        return;
      const w = m.clientX - f.current.x, _ = m.clientY - f.current.y, T = Math.round(w / p) * p, B = Math.round(_ / pe) * pe;
      l({ x: T, y: B });
    },
    [c, p]
  ), u = le(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const m = g[c];
    if (!m) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const w = m.x + a.x, _ = m.y + a.y, T = N(_ + pe / 2);
    if (!T) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const B = K(w), X = e[c], G = X.endDate.getTime() - X.startDate.getTime(), k = new Date(B.getTime() + G);
    s(c, {
      startDate: B,
      endDate: k,
      resourceId: T.resourceId,
      resourceLabel: T.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, g, e, s, N, K]);
  return be(() => {
    if (c !== null)
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", u);
      };
  }, [c, P, u]), /* @__PURE__ */ x(De, { children: g.map((m) => {
    if (!m)
      return null;
    const w = m.selection.hasConflict || !1, _ = c === m.index, T = _ ? m.x + a.x : m.x, B = _ ? m.y + a.y : m.y;
    return /* @__PURE__ */ q(
      Pl,
      {
        $hasConflict: w,
        $isDragging: _,
        style: {
          left: T,
          top: B,
          width: m.width,
          height: m.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (X) => z(X, m.index),
        children: [
          w && /* @__PURE__ */ x(Il, { title: h(m.selection), children: "⚠️" }),
          /* @__PURE__ */ x(Al, { $hasConflict: w, children: M(m.selection.startDate, m.selection.endDate) }),
          /* @__PURE__ */ x(
            Yl,
            {
              onClick: (X) => {
                X.stopPropagation(), o(m.index);
              },
              onMouseDown: (X) => X.stopPropagation(),
              title: w ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      m.index
    );
  }) });
}, Ll = Ol, Rl = C.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, Nl = ({ zoom: e, startDate: n }) => {
  const { cols: t } = Ze(), r = $e(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Ie * 7 : Se, s = E().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = E().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ x(Rl, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, Wl = Nl;
export {
  jl as Scheduler
};
