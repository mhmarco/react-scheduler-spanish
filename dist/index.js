var oo = Object.defineProperty;
var so = (e, n, t) => n in e ? oo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var En = (e, n, t) => (so(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as M, jsxs as Q, Fragment as ze } from "react/jsx-runtime";
import * as re from "react";
import Ke, { useRef as we, useContext as je, useMemo as De, useLayoutEffect as Sr, useDebugValue as _n, createElement as io, createContext as Cr, useState as fe, useCallback as le, useEffect as xe, forwardRef as Mr, useImperativeHandle as kr } from "react";
import { createPortal as ao } from "react-dom";
var $e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bt = {}, co = {
  get exports() {
    return bt;
  },
  set exports(e) {
    bt = e;
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
function lo() {
  if (Tn)
    return ge;
  Tn = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function C(h) {
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
    return C(h) === i;
  }, ge.isContextProvider = function(h) {
    return C(h) === s;
  }, ge.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ge.isForwardRef = function(h) {
    return C(h) === d;
  }, ge.isFragment = function(h) {
    return C(h) === t;
  }, ge.isLazy = function(h) {
    return C(h) === p;
  }, ge.isMemo = function(h) {
    return C(h) === f;
  }, ge.isPortal = function(h) {
    return C(h) === n;
  }, ge.isProfiler = function(h) {
    return C(h) === o;
  }, ge.isStrictMode = function(h) {
    return C(h) === r;
  }, ge.isSuspense = function(h) {
    return C(h) === a;
  }, ge.isSuspenseList = function(h) {
    return C(h) === l;
  }, ge.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === r || h === a || h === l || h === v || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === f || h.$$typeof === s || h.$$typeof === i || h.$$typeof === d || h.$$typeof === y || h.getModuleId !== void 0);
  }, ge.typeOf = C, ge;
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
function uo() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, C = !1, h = !1, N = !1, K = !1, B;
    B = Symbol.for("react.module.reference");
    function P(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === t || Y === o || K || Y === r || Y === a || Y === l || N || Y === v || y || C || h || typeof Y == "object" && Y !== null && (Y.$$typeof === p || Y.$$typeof === f || Y.$$typeof === s || Y.$$typeof === i || Y.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Y.$$typeof === B || Y.getModuleId !== void 0));
    }
    function u(Y) {
      if (typeof Y == "object" && Y !== null) {
        var U = Y.$$typeof;
        switch (U) {
          case e:
            var te = Y.type;
            switch (te) {
              case t:
              case o:
              case r:
              case a:
              case l:
                return te;
              default:
                var F = te && te.$$typeof;
                switch (F) {
                  case c:
                  case i:
                  case d:
                  case p:
                  case f:
                  case s:
                    return F;
                  default:
                    return U;
                }
            }
          case n:
            return U;
        }
      }
    }
    var m = i, w = s, _ = e, T = d, z = t, Z = p, X = f, $ = n, E = o, k = r, L = a, I = l, J = !1, ee = !1;
    function se(Y) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(Y) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(Y) {
      return u(Y) === i;
    }
    function j(Y) {
      return u(Y) === s;
    }
    function V(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === e;
    }
    function G(Y) {
      return u(Y) === d;
    }
    function b(Y) {
      return u(Y) === t;
    }
    function R(Y) {
      return u(Y) === p;
    }
    function g(Y) {
      return u(Y) === f;
    }
    function O(Y) {
      return u(Y) === n;
    }
    function W(Y) {
      return u(Y) === o;
    }
    function A(Y) {
      return u(Y) === r;
    }
    function x(Y) {
      return u(Y) === a;
    }
    function q(Y) {
      return u(Y) === l;
    }
    ye.ContextConsumer = m, ye.ContextProvider = w, ye.Element = _, ye.ForwardRef = T, ye.Fragment = z, ye.Lazy = Z, ye.Memo = X, ye.Portal = $, ye.Profiler = E, ye.StrictMode = k, ye.Suspense = L, ye.SuspenseList = I, ye.isAsyncMode = se, ye.isConcurrentMode = oe, ye.isContextConsumer = H, ye.isContextProvider = j, ye.isElement = V, ye.isForwardRef = G, ye.isFragment = b, ye.isLazy = R, ye.isMemo = g, ye.isPortal = O, ye.isProfiler = W, ye.isStrictMode = A, ye.isSuspense = x, ye.isSuspenseList = q, ye.isValidElementType = P, ye.typeOf = u;
  }()), ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = lo() : e.exports = uo();
})(co);
function fo(e) {
  function n(H, j, V, G, b) {
    for (var R = 0, g = 0, O = 0, W = 0, A, x, q = 0, Y = 0, U, te = U = A = 0, F = 0, ie = 0, pe = 0, ue = 0, ae = V.length, de = ae - 1, ce, ne = "", he = "", Me = "", Ae = "", _e; F < ae; ) {
      if (x = V.charCodeAt(F), F === de && g + W + O + R !== 0 && (g !== 0 && (x = g === 47 ? 10 : 47), W = O = R = 0, ae++, de++), g + W + O + R === 0) {
        if (F === de && (0 < ie && (ne = ne.replace(p, "")), 0 < ne.trim().length)) {
          switch (x) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ne += V.charAt(F);
          }
          x = 59;
        }
        switch (x) {
          case 123:
            for (ne = ne.trim(), A = ne.charCodeAt(0), U = 1, ue = ++F; F < ae; ) {
              switch (x = V.charCodeAt(F)) {
                case 123:
                  U++;
                  break;
                case 125:
                  U--;
                  break;
                case 47:
                  switch (x = V.charCodeAt(F + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (te = F + 1; te < de; ++te)
                          switch (V.charCodeAt(te)) {
                            case 47:
                              if (x === 42 && V.charCodeAt(te - 1) === 42 && F + 2 !== te) {
                                F = te + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (x === 47) {
                                F = te + 1;
                                break e;
                              }
                          }
                        F = te;
                      }
                  }
                  break;
                case 91:
                  x++;
                case 40:
                  x++;
                case 34:
                case 39:
                  for (; F++ < de && V.charCodeAt(F) !== x; )
                    ;
              }
              if (U === 0)
                break;
              F++;
            }
            switch (U = V.substring(ue, F), A === 0 && (A = (ne = ne.replace(f, "").trim()).charCodeAt(0)), A) {
              case 64:
                switch (0 < ie && (ne = ne.replace(p, "")), x = ne.charCodeAt(1), x) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ie = j;
                    break;
                  default:
                    ie = L;
                }
                if (U = n(j, ie, U, x, b + 1), ue = U.length, 0 < J && (ie = t(L, ne, pe), _e = c(3, U, ie, j, $, X, ue, x, b, G), ne = ie.join(""), _e !== void 0 && (ue = (U = _e.trim()).length) === 0 && (x = 0, U = "")), 0 < ue)
                  switch (x) {
                    case 115:
                      ne = ne.replace(m, i);
                    case 100:
                    case 109:
                    case 45:
                      U = ne + "{" + U + "}";
                      break;
                    case 107:
                      ne = ne.replace(K, "$1 $2"), U = ne + "{" + U + "}", U = k === 1 || k === 2 && s("@" + U, 3) ? "@-webkit-" + U + "@" + U : "@" + U;
                      break;
                    default:
                      U = ne + U, G === 112 && (U = (he += U, ""));
                  }
                else
                  U = "";
                break;
              default:
                U = n(j, t(j, ne, pe), U, G, b + 1);
            }
            Me += U, U = pe = ie = te = A = 0, ne = "", x = V.charCodeAt(++F);
            break;
          case 125:
          case 59:
            if (ne = (0 < ie ? ne.replace(p, "") : ne).trim(), 1 < (ue = ne.length))
              switch (te === 0 && (A = ne.charCodeAt(0), A === 45 || 96 < A && 123 > A) && (ue = (ne = ne.replace(" ", ":")).length), 0 < J && (_e = c(1, ne, j, H, $, X, he.length, G, b, G)) !== void 0 && (ue = (ne = _e.trim()).length) === 0 && (ne = "\0\0"), A = ne.charCodeAt(0), x = ne.charCodeAt(1), A) {
                case 0:
                  break;
                case 64:
                  if (x === 105 || x === 99) {
                    Ae += ne + V.charAt(F);
                    break;
                  }
                default:
                  ne.charCodeAt(ue - 1) !== 58 && (he += o(ne, A, x, ne.charCodeAt(2)));
              }
            pe = ie = te = A = 0, ne = "", x = V.charCodeAt(++F);
        }
      }
      switch (x) {
        case 13:
        case 10:
          g === 47 ? g = 0 : 1 + A === 0 && G !== 107 && 0 < ne.length && (ie = 1, ne += "\0"), 0 < J * se && c(0, ne, j, H, $, X, he.length, G, b, G), X = 1, $++;
          break;
        case 59:
        case 125:
          if (g + W + O + R === 0) {
            X++;
            break;
          }
        default:
          switch (X++, ce = V.charAt(F), x) {
            case 9:
            case 32:
              if (W + R + g === 0)
                switch (q) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ce = "";
                    break;
                  default:
                    x !== 32 && (ce = " ");
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
              W + g + R === 0 && (ie = pe = 1, ce = "\f" + ce);
              break;
            case 108:
              if (W + g + R + E === 0 && 0 < te)
                switch (F - te) {
                  case 2:
                    q === 112 && V.charCodeAt(F - 3) === 58 && (E = q);
                  case 8:
                    Y === 111 && (E = Y);
                }
              break;
            case 58:
              W + g + R === 0 && (te = F);
              break;
            case 44:
              g + O + W + R === 0 && (ie = 1, ce += "\r");
              break;
            case 34:
            case 39:
              g === 0 && (W = W === x ? 0 : W === 0 ? x : W);
              break;
            case 91:
              W + g + O === 0 && R++;
              break;
            case 93:
              W + g + O === 0 && R--;
              break;
            case 41:
              W + g + R === 0 && O--;
              break;
            case 40:
              if (W + g + R === 0) {
                if (A === 0)
                  switch (2 * q + 3 * Y) {
                    case 533:
                      break;
                    default:
                      A = 1;
                  }
                O++;
              }
              break;
            case 64:
              g + O + W + R + te + U === 0 && (U = 1);
              break;
            case 42:
            case 47:
              if (!(0 < W + R + O))
                switch (g) {
                  case 0:
                    switch (2 * x + 3 * V.charCodeAt(F + 1)) {
                      case 235:
                        g = 47;
                        break;
                      case 220:
                        ue = F, g = 42;
                    }
                    break;
                  case 42:
                    x === 47 && q === 42 && ue + 2 !== F && (V.charCodeAt(ue + 2) === 33 && (he += V.substring(ue, F + 1)), ce = "", g = 0);
                }
          }
          g === 0 && (ne += ce);
      }
      Y = q, q = x, F++;
    }
    if (ue = he.length, 0 < ue) {
      if (ie = j, 0 < J && (_e = c(2, he, ie, H, $, X, ue, G, b, G), _e !== void 0 && (he = _e).length === 0))
        return Ae + he + Me;
      if (he = ie.join(",") + "{" + he + "}", k * E !== 0) {
        switch (k !== 2 || s(he, 2) || (E = 0), E) {
          case 111:
            he = he.replace(P, ":-moz-$1") + he;
            break;
          case 112:
            he = he.replace(B, "::-webkit-input-$1") + he.replace(B, "::-moz-$1") + he.replace(B, ":-ms-input-$1") + he;
        }
        E = 0;
      }
    }
    return Ae + he + Me;
  }
  function t(H, j, V) {
    var G = j.trim().split(h);
    j = G;
    var b = G.length, R = H.length;
    switch (R) {
      case 0:
      case 1:
        var g = 0;
        for (H = R === 0 ? "" : H[0] + " "; g < b; ++g)
          j[g] = r(H, j[g], V).trim();
        break;
      default:
        var O = g = 0;
        for (j = []; g < b; ++g)
          for (var W = 0; W < R; ++W)
            j[O++] = r(H[W] + " ", G[g], V).trim();
    }
    return j;
  }
  function r(H, j, V) {
    var G = j.charCodeAt(0);
    switch (33 > G && (G = (j = j.trim()).charCodeAt(0)), G) {
      case 38:
        return j.replace(N, "$1" + H.trim());
      case 58:
        return H.trim() + j.replace(N, "$1" + H.trim());
      default:
        if (0 < 1 * V && 0 < j.indexOf("\f"))
          return j.replace(N, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + j;
  }
  function o(H, j, V, G) {
    var b = H + ";", R = 2 * j + 3 * V + 4 * G;
    if (R === 944) {
      H = b.indexOf(":", 9) + 1;
      var g = b.substring(H, b.length - 1).trim();
      return g = b.substring(0, H).trim() + g + ";", k === 1 || k === 2 && s(g, 1) ? "-webkit-" + g + g : g;
    }
    if (k === 0 || k === 2 && !s(b, 1))
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
          return b.replace(Z, "$1-webkit-$2") + b;
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
        return g = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + g + "-webkit-" + b + "-ms-flex-pack" + g + b;
      case 1005:
        return y.test(b) ? b.replace(v, ":-webkit-") + b.replace(v, ":-moz-") + b : b;
      case 1e3:
        switch (g = b.substring(13).trim(), j = g.indexOf("-") + 1, g.charCodeAt(0) + g.charCodeAt(j)) {
          case 226:
            g = b.replace(u, "tb");
            break;
          case 232:
            g = b.replace(u, "tb-rl");
            break;
          case 220:
            g = b.replace(u, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + g + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (j = (b = H).length - 10, g = (b.charCodeAt(j) === 33 ? b.substring(0, j) : b).substring(H.indexOf(":", 7) + 1).trim(), R = g.charCodeAt(0) + (g.charCodeAt(7) | 0)) {
          case 203:
            if (111 > g.charCodeAt(8))
              break;
          case 115:
            b = b.replace(g, "-webkit-" + g) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(g, "-webkit-" + (102 < R ? "inline-" : "") + "box") + ";" + b.replace(g, "-webkit-" + g) + ";" + b.replace(g, "-ms-" + g + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return g = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + g + "-ms-flex-" + g + b;
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
        if (z.test(H) === !0)
          return (g = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(H.replace("stretch", "fill-available"), j, V, G).replace(":fill-available", ":stretch") : b.replace(g, "-webkit-" + g) + b.replace(g, "-moz-" + g.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, V + G === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(H, j) {
    var V = H.indexOf(j === 1 ? ":" : "{"), G = H.substring(0, j !== 3 ? V : 10);
    return V = H.substring(V + 1, H.length - 1), ee(j !== 2 ? G : G.replace(T, "$1"), V, j);
  }
  function i(H, j) {
    var V = o(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return V !== j + ";" ? V.replace(w, " or ($1)").substring(4) : "(" + j + ")";
  }
  function c(H, j, V, G, b, R, g, O, W, A) {
    for (var x = 0, q = j, Y; x < J; ++x)
      switch (Y = I[x].call(l, H, q, V, G, b, R, g, O, W, A)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          q = Y;
      }
    if (q !== j)
      return q;
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
          for (var j = 0, V = H.length; j < V; ++j)
            d(H[j]);
        else
          se = !!H | 0;
    }
    return d;
  }
  function a(H) {
    return H = H.prefix, H !== void 0 && (ee = null, H ? typeof H != "function" ? k = 1 : (k = 2, ee = H) : k = 0), a;
  }
  function l(H, j) {
    var V = H;
    if (33 > V.charCodeAt(0) && (V = V.trim()), oe = V, V = [oe], 0 < J) {
      var G = c(-1, j, V, V, $, X, 0, 0, 0, 0);
      G !== void 0 && typeof G == "string" && (j = G);
    }
    var b = n(L, V, j, 0, 0);
    return 0 < J && (G = c(-2, b, V, V, $, X, b.length, 0, 0, 0), G !== void 0 && (b = G)), oe = "", E = 0, X = $ = 1, b;
  }
  var f = /^\0+/g, p = /[\0\r\f]/g, v = /: */g, y = /zoo|gra/, C = /([,: ])(transform)/g, h = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, K = /@(k\w+)\s*(\S*)\s*/, B = /::(place)/g, P = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, m = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, _ = /-self|flex-/g, T = /[^]*?(:[rp][el]a[\w-]+)[^]*/, z = /stretch|:\s*\w+\-(?:conte|avail)/, Z = /([^-])(image-set\()/, X = 1, $ = 1, E = 0, k = 1, L = [], I = [], J = 0, ee = null, se = 0, oe = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var ho = {
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
function po(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var mo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, An = /* @__PURE__ */ po(
  function(e) {
    return mo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Zt = {}, go = {
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
function yo() {
  if (In)
    return ve;
  In = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
  function B(u) {
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
                case y:
                case v:
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
    return B(u) === a;
  }
  return ve.AsyncMode = d, ve.ConcurrentMode = a, ve.ContextConsumer = c, ve.ContextProvider = i, ve.Element = n, ve.ForwardRef = l, ve.Fragment = r, ve.Lazy = y, ve.Memo = v, ve.Portal = t, ve.Profiler = s, ve.StrictMode = o, ve.Suspense = f, ve.isAsyncMode = function(u) {
    return P(u) || B(u) === d;
  }, ve.isConcurrentMode = P, ve.isContextConsumer = function(u) {
    return B(u) === c;
  }, ve.isContextProvider = function(u) {
    return B(u) === i;
  }, ve.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, ve.isForwardRef = function(u) {
    return B(u) === l;
  }, ve.isFragment = function(u) {
    return B(u) === r;
  }, ve.isLazy = function(u) {
    return B(u) === y;
  }, ve.isMemo = function(u) {
    return B(u) === v;
  }, ve.isPortal = function(u) {
    return B(u) === t;
  }, ve.isProfiler = function(u) {
    return B(u) === s;
  }, ve.isStrictMode = function(u) {
    return B(u) === o;
  }, ve.isSuspense = function(u) {
    return B(u) === f;
  }, ve.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === p || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === v || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === h || u.$$typeof === N || u.$$typeof === K || u.$$typeof === C);
  }, ve.typeOf = B, ve;
}
var be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function vo() {
  return On || (On = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
    function B(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === r || x === a || x === s || x === o || x === f || x === p || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === v || x.$$typeof === i || x.$$typeof === c || x.$$typeof === l || x.$$typeof === h || x.$$typeof === N || x.$$typeof === K || x.$$typeof === C);
    }
    function P(x) {
      if (typeof x == "object" && x !== null) {
        var q = x.$$typeof;
        switch (q) {
          case n:
            var Y = x.type;
            switch (Y) {
              case d:
              case a:
              case r:
              case s:
              case o:
              case f:
                return Y;
              default:
                var U = Y && Y.$$typeof;
                switch (U) {
                  case c:
                  case l:
                  case y:
                  case v:
                  case i:
                    return U;
                  default:
                    return q;
                }
            }
          case t:
            return q;
        }
      }
    }
    var u = d, m = a, w = c, _ = i, T = n, z = l, Z = r, X = y, $ = v, E = t, k = s, L = o, I = f, J = !1;
    function ee(x) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(x) || P(x) === d;
    }
    function se(x) {
      return P(x) === a;
    }
    function oe(x) {
      return P(x) === c;
    }
    function H(x) {
      return P(x) === i;
    }
    function j(x) {
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }
    function V(x) {
      return P(x) === l;
    }
    function G(x) {
      return P(x) === r;
    }
    function b(x) {
      return P(x) === y;
    }
    function R(x) {
      return P(x) === v;
    }
    function g(x) {
      return P(x) === t;
    }
    function O(x) {
      return P(x) === s;
    }
    function W(x) {
      return P(x) === o;
    }
    function A(x) {
      return P(x) === f;
    }
    be.AsyncMode = u, be.ConcurrentMode = m, be.ContextConsumer = w, be.ContextProvider = _, be.Element = T, be.ForwardRef = z, be.Fragment = Z, be.Lazy = X, be.Memo = $, be.Portal = E, be.Profiler = k, be.StrictMode = L, be.Suspense = I, be.isAsyncMode = ee, be.isConcurrentMode = se, be.isContextConsumer = oe, be.isContextProvider = H, be.isElement = j, be.isForwardRef = V, be.isFragment = G, be.isLazy = b, be.isMemo = R, be.isPortal = g, be.isProfiler = O, be.isStrictMode = W, be.isSuspense = A, be.isValidElementType = B, be.typeOf = P;
  }()), be;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = yo() : e.exports = vo();
})(go);
var gn = Zt, bo = {
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
}, xo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, wo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Dr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yn = {};
yn[gn.ForwardRef] = wo;
yn[gn.Memo] = Dr;
function Yn(e) {
  return gn.isMemo(e) ? Dr : yn[e.$$typeof] || bo;
}
var So = Object.defineProperty, Co = Object.getOwnPropertyNames, Ln = Object.getOwnPropertySymbols, Mo = Object.getOwnPropertyDescriptor, ko = Object.getPrototypeOf, Rn = Object.prototype;
function $r(e, n, t) {
  if (typeof n != "string") {
    if (Rn) {
      var r = ko(n);
      r && r !== Rn && $r(e, r, t);
    }
    var o = Co(n);
    Ln && (o = o.concat(Ln(n)));
    for (var s = Yn(e), i = Yn(n), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!xo[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = Mo(n, d);
        try {
          So(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Do = $r;
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
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !bt.typeOf(e);
}, _t = Object.freeze([]), Be = Object.freeze({});
function ct(e) {
  return typeof e == "function";
}
function Gt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function vn(e) {
  return e && typeof e.styledComponentId == "string";
}
var lt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", bn = typeof window < "u" && "HTMLElement" in window, $o = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Eo = {}, _o = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function To() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ne(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(To.apply(void 0, [_o[e]].concat(t)).trim());
}
var Po = function() {
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
}(), $t = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), yt = 1, Mt = function(e) {
  if ($t.has(e))
    return $t.get(e);
  for (; Tt.has(yt); )
    yt++;
  var n = yt++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Ne(16, "" + n), $t.set(e, n), Tt.set(n, e), n;
}, Ao = function(e) {
  return Tt.get(e);
}, Io = function(e, n) {
  n >= yt && (yt = n + 1), $t.set(e, n), Tt.set(n, e);
}, Oo = "style[" + lt + '][data-styled-version="5.3.8"]', Yo = new RegExp("^" + lt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Lo = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, Ro = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Yo);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (Io(a, d), Lo(e, a, c[3]), e.getTag().insertRules(d, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, No = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Er = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(lt))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(lt, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = No();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, Fo = function() {
  function e(t) {
    var r = this.element = Er(t);
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
}(), Wo = function() {
  function e(t) {
    var r = this.element = Er(t);
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
}(), Ho = function() {
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
}(), Fn = bn, zo = { isServer: !bn, useCSSOMInjection: !$o }, Pt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Be), r === void 0 && (r = {}), this.options = Oe({}, zo, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && bn && Fn && (Fn = !1, function(s) {
      for (var i = document.querySelectorAll(Oo), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(lt) !== "active" && (Ro(s, a), a.parentNode && a.parentNode.removeChild(a));
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
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new Ho(i) : s ? new Fo(i) : new Wo(i), new Po(t)));
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
        var c = Ao(i);
        if (c !== void 0) {
          var d = t.names.get(c), a = r.getGroup(i);
          if (d && a && d.size) {
            var l = lt + ".g" + i + '[id="' + c + '"]', f = "";
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
}(), Bo = /(a)(d)/gi, Wn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xt(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Wn(n % 52) + t;
  return (Wn(n % 52) + t).replace(Bo, "$1-$2");
}
var Xe = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, _r = function(e) {
  return Xe(5381, e);
};
function Tr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (ct(t) && !vn(t))
      return !1;
  }
  return !0;
}
var jo = _r("5.3.8"), Zo = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Tr(n), this.componentId = t, this.baseHash = Xe(jo, t), this.baseStyle = r, Pt.registerId(t);
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
        var v = this.rules[p];
        if (typeof v == "string")
          f += v, process.env.NODE_ENV !== "production" && (l = Xe(l, v + p));
        else if (v) {
          var y = Je(v, n, t, r), C = Array.isArray(y) ? y.join("") : y;
          l = Xe(l, C + p), f += C;
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
}(), Vo = /^\s*\/\/.*$/gm, Go = [":", "[", ".", "#"];
function Xo(e) {
  var n, t, r, o, s = e === void 0 ? Be : e, i = s.options, c = i === void 0 ? Be : i, d = s.plugins, a = d === void 0 ? _t : d, l = new fo(c), f = [], p = function(C) {
    function h(N) {
      if (N)
        try {
          C(N + "}");
        } catch {
        }
    }
    return function(N, K, B, P, u, m, w, _, T, z) {
      switch (N) {
        case 1:
          if (T === 0 && K.charCodeAt(0) === 64)
            return C(K + ";"), "";
          break;
        case 2:
          if (_ === 0)
            return K + "/*|*/";
          break;
        case 3:
          switch (_) {
            case 102:
            case 112:
              return C(B[0] + K), "";
            default:
              return K + (z === 0 ? "/*|*/" : "");
          }
        case -2:
          K.split("/*|*/}").forEach(h);
      }
    };
  }(function(C) {
    f.push(C);
  }), v = function(C, h, N) {
    return h === 0 && Go.indexOf(N[t.length]) !== -1 || N.match(o) ? C : "." + n;
  };
  function y(C, h, N, K) {
    K === void 0 && (K = "&");
    var B = C.replace(Vo, ""), P = h && N ? N + " " + h + " { " + B + " }" : B;
    return n = K, t = h, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(N || !h ? "" : h, P);
  }
  return l.use([].concat(a, [function(C, h, N) {
    C === 2 && N.length && N[0].lastIndexOf(t) > 0 && (N[0] = N[0].replace(r, v));
  }, p, function(C) {
    if (C === -2) {
      var h = f;
      return f = [], h;
    }
  }])), y.hash = a.length ? a.reduce(function(C, h) {
    return h.name || Ne(15), Xe(C, h.name);
  }, 5381).toString() : "", y;
}
var Pr = Ke.createContext();
Pr.Consumer;
var Ar = Ke.createContext(), Uo = (Ar.Consumer, new Pt()), Ut = Xo();
function Ir() {
  return je(Pr) || Uo;
}
function Or() {
  return je(Ar) || Ut;
}
var Yr = function() {
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
}(), Ko = /([A-Z])/, Jo = /([A-Z])/g, qo = /^ms-/, Qo = function(e) {
  return "-" + e.toLowerCase();
};
function Hn(e) {
  return Ko.test(e) ? e.replace(Jo, Qo).replace(qo, "-ms-") : e;
}
var zn = function(e) {
  return e == null || e === !1 || e === "";
};
function Je(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = Je(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (zn(e))
    return "";
  if (vn(e))
    return "." + e.styledComponentId;
  if (ct(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var d = e(n);
    return process.env.NODE_ENV !== "production" && bt.isElement(d) && console.warn(Gt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Je(d, n, t, r);
  }
  var a;
  return e instanceof Yr ? t ? (e.inject(t, r), e.getName(r)) : e : Vt(e) ? function l(f, p) {
    var v, y, C = [];
    for (var h in f)
      f.hasOwnProperty(h) && !zn(f[h]) && (Array.isArray(f[h]) && f[h].isCss || ct(f[h]) ? C.push(Hn(h) + ":", f[h], ";") : Vt(f[h]) ? C.push.apply(C, l(f[h], h)) : C.push(Hn(h) + ": " + (v = h, (y = f[h]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || v in ho ? String(y).trim() : y + "px") + ";"));
    return p ? [p + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var Bn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ot(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return ct(e) || Vt(e) ? Bn(Je(Nn(_t, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Bn(Je(Nn(e, t)));
}
var jn = /invalid hook call/i, kt = /* @__PURE__ */ new Set(), Lr = function(e, n) {
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
}, Rr = function(e, n, t) {
  return t === void 0 && (t = Be), e.theme !== t.theme && e.theme || n || t.theme;
}, es = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ts = /(^-|-$)/g;
function Rt(e) {
  return e.replace(es, "-").replace(ts, "");
}
var xn = function(e) {
  return Xt(_r(e) >>> 0);
};
function Dt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Kt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ns = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function rs(e, n, t) {
  var r = e[t];
  Kt(n) && Kt(r) ? Nr(r, n) : e[t] = n;
}
function Nr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Kt(i))
      for (var c in i)
        ns(c) && rs(e, i[c], c);
  }
  return e;
}
var dt = Ke.createContext();
dt.Consumer;
function os(e) {
  var n = je(dt), t = De(function() {
    return function(r, o) {
      if (!r)
        return Ne(14);
      if (ct(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ne(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Ne(8) : o ? Oe({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? Ke.createElement(dt.Provider, { value: t }, e.children) : null;
}
var Nt = {};
function Fr(e, n, t) {
  var r = vn(e), o = !Dt(e), s = n.attrs, i = s === void 0 ? _t : s, c = n.componentId, d = c === void 0 ? function(K, B) {
    var P = typeof K != "string" ? "sc" : Rt(K);
    Nt[P] = (Nt[P] || 0) + 1;
    var u = P + "-" + xn("5.3.8" + P + Nt[P]);
    return B ? B + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(K) {
    return Dt(K) ? "styled." + K : "Styled(" + Gt(K) + ")";
  }(e) : a, f = n.displayName && n.componentId ? Rt(n.displayName) + "-" + n.componentId : n.componentId || d, p = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, v = n.shouldForwardProp;
  r && e.shouldForwardProp && (v = n.shouldForwardProp ? function(K, B, P) {
    return e.shouldForwardProp(K, B, P) && n.shouldForwardProp(K, B, P);
  } : e.shouldForwardProp);
  var y, C = new Zo(t, f, r ? e.componentStyle : void 0), h = C.isStatic && i.length === 0, N = function(K, B) {
    return function(P, u, m, w) {
      var _ = P.attrs, T = P.componentStyle, z = P.defaultProps, Z = P.foldedComponentIds, X = P.shouldForwardProp, $ = P.styledComponentId, E = P.target;
      process.env.NODE_ENV !== "production" && _n($);
      var k = function(G, b, R) {
        G === void 0 && (G = Be);
        var g = Oe({}, b, { theme: G }), O = {};
        return R.forEach(function(W) {
          var A, x, q, Y = W;
          for (A in ct(Y) && (Y = Y(g)), Y)
            g[A] = O[A] = A === "className" ? (x = O[A], q = Y[A], x && q ? x + " " + q : x || q) : Y[A];
        }), [g, O];
      }(Rr(u, je(dt), z) || Be, u, _), L = k[0], I = k[1], J = function(G, b, R, g) {
        var O = Ir(), W = Or(), A = b ? G.generateAndInjectStyles(Be, O, W) : G.generateAndInjectStyles(R, O, W);
        return process.env.NODE_ENV !== "production" && _n(A), process.env.NODE_ENV !== "production" && !b && g && g(A), A;
      }(T, w, L, process.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), ee = m, se = I.$as || u.$as || I.as || u.as || E, oe = Dt(se), H = I !== u ? Oe({}, u, {}, I) : u, j = {};
      for (var V in H)
        V[0] !== "$" && V !== "as" && (V === "forwardedAs" ? j.as = H[V] : (X ? X(V, An, se) : !oe || An(V)) && (j[V] = H[V]));
      return u.style && I.style !== u.style && (j.style = Oe({}, u.style, {}, I.style)), j.className = Array.prototype.concat(Z, $, J !== $ ? J : null, u.className, I.className).filter(Boolean).join(" "), j.ref = ee, io(se, j);
    }(y, K, B, h);
  };
  return N.displayName = l, (y = Ke.forwardRef(N)).attrs = p, y.componentStyle = C, y.displayName = l, y.shouldForwardProp = v, y.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : _t, y.styledComponentId = f, y.target = r ? e.target : e, y.withComponent = function(K) {
    var B = n.componentId, P = function(m, w) {
      if (m == null)
        return {};
      var _, T, z = {}, Z = Object.keys(m);
      for (T = 0; T < Z.length; T++)
        _ = Z[T], w.indexOf(_) >= 0 || (z[_] = m[_]);
      return z;
    }(n, ["componentId"]), u = B && B + "-" + (Dt(K) ? K : Rt(Gt(K)));
    return Fr(K, Oe({}, P, { attrs: p, componentId: u }), t);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(K) {
    this._foldedDefaultProps = r ? Nr({}, e.defaultProps, K) : K;
  } }), process.env.NODE_ENV !== "production" && (Lr(l, f), y.warnTooManyClasses = function(K, B) {
    var P = {}, u = !1;
    return function(m) {
      if (!u && (P[m] = !0, Object.keys(P).length >= 200)) {
        var w = B ? ' with the id of "' + B + '"' : "";
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
  }(l, f)), y.toString = function() {
    return "." + y.styledComponentId;
  }, o && Do(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var Jt = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Be), !bt.isValidElementType(r))
      return Ne(1, String(r));
    var s = function() {
      return t(r, o, Ot.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Oe({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Oe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Fr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Jt[e] = Jt(e);
});
var ss = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Tr(t), Pt.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(Je(this.rules, r, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && Pt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function is(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ot.apply(void 0, [e].concat(t)), s = "sc-global-" + xn(JSON.stringify(o)), i = new ss(o, s);
  function c(a) {
    var l = Ir(), f = Or(), p = je(dt), v = we(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Ke.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(y) {
      return typeof y == "string" && y.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(v, a, l, p, f), Sr(function() {
      if (!l.server)
        return d(v, a, l, p, f), function() {
          return i.removeStyles(v, l);
        };
    }, [v, a, l, p, f]), null;
  }
  function d(a, l, f, p, v) {
    if (i.isStatic)
      i.renderStyles(a, Eo, f, v);
    else {
      var y = Oe({}, l, { theme: Rr(l, p, c.defaultProps) });
      i.renderStyles(a, y, f, v);
    }
  }
  return process.env.NODE_ENV !== "production" && Lr(s), Ke.memo(c);
}
function Yt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ot.apply(void 0, [e].concat(t)).join(""), s = xn(o);
  return new Yr(s, o);
}
var et = function() {
  return je(dt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const S = Jt, gt = "reactSchedulerOutsideWrapper", as = is`

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
`, cs = {
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
}, ls = {
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
}, tt = `
margin: 0;
padding: 0;
`, pt = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
S.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Se = 50, Fe = 24, mt = 16, Ue = 40, ut = Ue + mt + Fe, ft = 84, me = 56, Pe = 196, Ie = 12, Ee = 50, ht = 24, xt = 16, qt = 40, ds = ht + xt + qt, Zn = 24, Vn = 52, Ye = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter",
    hoursInDay: "400 9px Inter"
  }
}, at = 3, us = 1.6, fs = 4.5, Qt = 12, At = 24, hs = "reactSchedulerCanvasHeaderWrapper", Wr = "reactSchedulerCanvasWrapper", qe = gt, ps = 4, wn = 48, He = 5, ms = 40, Gn = 8, Sn = Fe / 2 + 2, Hr = mt / 2 + Fe + 1, Xn = 2, Ce = 60, Te = 21;
var Qe = {}, gs = {
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
  })($e, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", p = "quarter", v = "year", y = "date", C = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, N = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var E = ["th", "st", "nd", "rd"], k = $ % 100;
      return "[" + $ + (E[(k - 20) % 10] || E[k] || E[0]) + "]";
    } }, B = function($, E, k) {
      var L = String($);
      return !L || L.length >= E ? $ : "" + Array(E + 1 - L.length).join(k) + $;
    }, P = { s: B, z: function($) {
      var E = -$.utcOffset(), k = Math.abs(E), L = Math.floor(k / 60), I = k % 60;
      return (E <= 0 ? "+" : "-") + B(L, 2, "0") + ":" + B(I, 2, "0");
    }, m: function $(E, k) {
      if (E.date() < k.date())
        return -$(k, E);
      var L = 12 * (k.year() - E.year()) + (k.month() - E.month()), I = E.clone().add(L, f), J = k - I < 0, ee = E.clone().add(L + (J ? -1 : 1), f);
      return +(-(L + (k - I) / (J ? I - ee : ee - I)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: f, y: v, w: l, d: a, D: y, h: d, m: c, s: i, ms: s, Q: p }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, u = "en", m = {};
    m[u] = K;
    var w = function($) {
      return $ instanceof Z;
    }, _ = function $(E, k, L) {
      var I;
      if (!E)
        return u;
      if (typeof E == "string") {
        var J = E.toLowerCase();
        m[J] && (I = J), k && (m[J] = k, I = J);
        var ee = E.split("-");
        if (!I && ee.length > 1)
          return $(ee[0]);
      } else {
        var se = E.name;
        m[se] = E, I = se;
      }
      return !L && I && (u = I), I || !L && u;
    }, T = function($, E) {
      if (w($))
        return $.clone();
      var k = typeof E == "object" ? E : {};
      return k.date = $, k.args = arguments, new Z(k);
    }, z = P;
    z.l = _, z.i = w, z.w = function($, E) {
      return T($, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var Z = function() {
      function $(k) {
        this.$L = _(k.locale, null, !0), this.parse(k);
      }
      var E = $.prototype;
      return E.parse = function(k) {
        this.$d = function(L) {
          var I = L.date, J = L.utc;
          if (I === null)
            return new Date(NaN);
          if (z.u(I))
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
        }(k), this.$x = k.x || {}, this.init();
      }, E.init = function() {
        var k = this.$d;
        this.$y = k.getFullYear(), this.$M = k.getMonth(), this.$D = k.getDate(), this.$W = k.getDay(), this.$H = k.getHours(), this.$m = k.getMinutes(), this.$s = k.getSeconds(), this.$ms = k.getMilliseconds();
      }, E.$utils = function() {
        return z;
      }, E.isValid = function() {
        return this.$d.toString() !== C;
      }, E.isSame = function(k, L) {
        var I = T(k);
        return this.startOf(L) <= I && I <= this.endOf(L);
      }, E.isAfter = function(k, L) {
        return T(k) < this.startOf(L);
      }, E.isBefore = function(k, L) {
        return this.endOf(L) < T(k);
      }, E.$g = function(k, L, I) {
        return z.u(k) ? this[L] : this.set(I, k);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function(k, L) {
        var I = this, J = !!z.u(L) || L, ee = z.p(k), se = function(g, O) {
          var W = z.w(I.$u ? Date.UTC(I.$y, O, g) : new Date(I.$y, O, g), I);
          return J ? W : W.endOf(a);
        }, oe = function(g, O) {
          return z.w(I.toDate()[g].apply(I.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(O)), I);
        }, H = this.$W, j = this.$M, V = this.$D, G = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case v:
            return J ? se(1, 0) : se(31, 11);
          case f:
            return J ? se(1, j) : se(0, j + 1);
          case l:
            var b = this.$locale().weekStart || 0, R = (H < b ? H + 7 : H) - b;
            return se(J ? V - R : V + (6 - R), j);
          case a:
          case y:
            return oe(G + "Hours", 0);
          case d:
            return oe(G + "Minutes", 1);
          case c:
            return oe(G + "Seconds", 2);
          case i:
            return oe(G + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, E.endOf = function(k) {
        return this.startOf(k, !1);
      }, E.$set = function(k, L) {
        var I, J = z.p(k), ee = "set" + (this.$u ? "UTC" : ""), se = (I = {}, I[a] = ee + "Date", I[y] = ee + "Date", I[f] = ee + "Month", I[v] = ee + "FullYear", I[d] = ee + "Hours", I[c] = ee + "Minutes", I[i] = ee + "Seconds", I[s] = ee + "Milliseconds", I)[J], oe = J === a ? this.$D + (L - this.$W) : L;
        if (J === f || J === v) {
          var H = this.clone().set(y, 1);
          H.$d[se](oe), H.init(), this.$d = H.set(y, Math.min(this.$D, H.daysInMonth())).$d;
        } else
          se && this.$d[se](oe);
        return this.init(), this;
      }, E.set = function(k, L) {
        return this.clone().$set(k, L);
      }, E.get = function(k) {
        return this[z.p(k)]();
      }, E.add = function(k, L) {
        var I, J = this;
        k = Number(k);
        var ee = z.p(L), se = function(j) {
          var V = T(J);
          return z.w(V.date(V.date() + Math.round(j * k)), J);
        };
        if (ee === f)
          return this.set(f, this.$M + k);
        if (ee === v)
          return this.set(v, this.$y + k);
        if (ee === a)
          return se(1);
        if (ee === l)
          return se(7);
        var oe = (I = {}, I[c] = r, I[d] = o, I[i] = t, I)[ee] || 1, H = this.$d.getTime() + k * oe;
        return z.w(H, this);
      }, E.subtract = function(k, L) {
        return this.add(-1 * k, L);
      }, E.format = function(k) {
        var L = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || C;
        var J = k || "YYYY-MM-DDTHH:mm:ssZ", ee = z.z(this), se = this.$H, oe = this.$m, H = this.$M, j = I.weekdays, V = I.months, G = function(O, W, A, x) {
          return O && (O[W] || O(L, J)) || A[W].slice(0, x);
        }, b = function(O) {
          return z.s(se % 12 || 12, O, "0");
        }, R = I.meridiem || function(O, W, A) {
          var x = O < 12 ? "AM" : "PM";
          return A ? x.toLowerCase() : x;
        }, g = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: H + 1, MM: z.s(H + 1, 2, "0"), MMM: G(I.monthsShort, H, V, 3), MMMM: G(V, H), D: this.$D, DD: z.s(this.$D, 2, "0"), d: String(this.$W), dd: G(I.weekdaysMin, this.$W, j, 2), ddd: G(I.weekdaysShort, this.$W, j, 3), dddd: j[this.$W], H: String(se), HH: z.s(se, 2, "0"), h: b(1), hh: b(2), a: R(se, oe, !0), A: R(se, oe, !1), m: String(oe), mm: z.s(oe, 2, "0"), s: String(this.$s), ss: z.s(this.$s, 2, "0"), SSS: z.s(this.$ms, 3, "0"), Z: ee };
        return J.replace(N, function(O, W) {
          return W || g[O] || ee.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function(k, L, I) {
        var J, ee = z.p(L), se = T(k), oe = (se.utcOffset() - this.utcOffset()) * r, H = this - se, j = z.m(this, se);
        return j = (J = {}, J[v] = j / 12, J[f] = j, J[p] = j / 3, J[l] = (H - oe) / 6048e5, J[a] = (H - oe) / 864e5, J[d] = H / o, J[c] = H / r, J[i] = H / t, J)[ee] || H, I ? j : z.a(j);
      }, E.daysInMonth = function() {
        return this.endOf(f).$D;
      }, E.$locale = function() {
        return m[this.$L];
      }, E.locale = function(k, L) {
        if (!k)
          return this.$L;
        var I = this.clone(), J = _(k, L, !0);
        return J && (I.$L = J), I;
      }, E.clone = function() {
        return z.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), X = Z.prototype;
    return T.prototype = X, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", v], ["$D", y]].forEach(function($) {
      X[$[1]] = function(E) {
        return this.$g(E, $[0], $[1]);
      };
    }), T.extend = function($, E) {
      return $.$i || ($(E, Z, T), $.$i = !0), T;
    }, T.locale = _, T.isDayjs = w, T.unix = function($) {
      return T(1e3 * $);
    }, T.en = m[u], T.Ls = m, T.p = {}, T;
  });
})(gs);
const D = Qe, Un = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Cn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, zr = (e, n) => D(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), Br = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Cn(e),
  isCurrentDay: e.isSame(D(), "day"),
  year: parseInt(e.format("YYYY"))
}), Mn = (e, n, t, r, o, s, i) => {
  e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, me), e.strokeRect(n + 0.5, t + 0.5, r, me);
}, kn = (e, n) => {
  let t = 0;
  for (const r of n)
    r <= e && t++;
  return t * Te;
}, ys = (e, n, t, r, o, s = []) => {
  for (let i = 0; i < n; i++) {
    const c = kn(i, s);
    for (let d = 0; d <= t; d++) {
      const a = D(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(D(), "day");
      Mn(e, d * Se, i * me + c, Se, Cn(a), l, o);
    }
  }
}, vs = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, bs = (e, n, t, r, o, s = []) => {
  let i = 0, c = -(r.dayOfMonth - 1) * Ie;
  const d = n * me + s.length * Te;
  for (let a = 0; a <= t; a++) {
    const f = D(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(D(), "week");
    for (let p = 0; p < n; p++) {
      const v = kn(p, s);
      Mn(e, i, p * me + v, ft, !0, f, o);
    }
    i += ft;
  }
  for (let a = 0; a < t; a++) {
    const l = zr(r, a) * Ie;
    vs(e, c, d, o), c += l;
  }
}, xs = (e, n, t, r, o, s = []) => {
  const i = D(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let c = 0; c < n; c++) {
    const d = kn(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = D() : a > Math.floor(t / 2) ? l = D().add(a - Math.floor(t / 2), "hours") : l = D().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(D(), "day") && l.isSame(D(), "hour");
      Mn(
        e,
        a * Ee + Ee / 2 - 0.5,
        c * me + d,
        Ee,
        Cn(l),
        f,
        o
      );
    }
  }
}, ws = (e, n, t, r) => {
  const o = t * me + n * Te, s = e.canvas.width, i = o + Te / 2;
  e.fillStyle = r.mode === "dark" ? r.colors.primary + "80" : r.colors.primary, e.fillRect(0, o, s, Te), e.strokeStyle = r.colors.border, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, i + 0.5), e.lineTo(s, i + 0.5), e.stroke();
}, Ss = (e, n, t, r, o, s, i = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(Wr)) {
    switch (n) {
      case 0:
        bs(e, t, r, o, s, i);
        break;
      case 1:
        ys(e, t, r, o, s, i);
        break;
      case 2:
        xs(e, t, r, o, s, i);
        break;
    }
    for (let d = 0; d < i.length; d++)
      ws(e, d, i[d], s);
  }
};
var en = {}, Cs = {
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
  })($e, function() {
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
        var p = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), v = this.diff(p, t, !0);
        return v < 0 ? i(this).startOf("week").week() : Math.ceil(v);
      }, c.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(Cs);
const Ms = en;
var tn = {}, ks = {
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
  })($e, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(ks);
const Ds = tn;
var nn = {}, $s = {
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
  })($e, function() {
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
        var l, f, p, v, y = i(this), C = (l = this.isoWeekYear(), f = this.$u, p = (f ? s.utc : s)().year(l).startOf("year"), v = 4 - p.isoWeekday(), p.isoWeekday() > 4 && (v += 7), p.add(v, t));
        return y.diff(C, "week") + 1;
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
})($s);
const Es = nn;
var rn = {}, _s = {
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
  })($e, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, c, d) {
        var a = o(s), l = o(i), f = (d = d || "()")[0] === "(", p = d[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (p ? this.isBefore(l, c) : !this.isAfter(l, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (p ? this.isAfter(l, c) : !this.isBefore(l, c));
      };
    };
  });
})(_s);
const Ts = rn;
var on = {}, Ps = {
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
  })($e, function() {
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, p = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, v = function(u) {
      return u instanceof P;
    }, y = function(u, m, w) {
      return new P(u, w, m.$l);
    }, C = function(u) {
      return r.p(u) + "s";
    }, h = function(u) {
      return u < 0;
    }, N = function(u) {
      return h(u) ? Math.ceil(u) : Math.floor(u);
    }, K = function(u) {
      return Math.abs(u);
    }, B = function(u, m) {
      return u ? h(u) ? { negative: !0, format: "" + K(u) + m } : { negative: !1, format: "" + u + m } : { negative: !1, format: "" };
    }, P = function() {
      function u(w, _, T) {
        var z = this;
        if (this.$d = {}, this.$l = T, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), _)
          return y(w * p[C(_)], this);
        if (typeof w == "number")
          return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object")
          return Object.keys(w).forEach(function($) {
            z.$d[C($)] = w[$];
          }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var Z = w.match(f);
          if (Z) {
            var X = Z.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = X[0], this.$d.months = X[1], this.$d.weeks = X[2], this.$d.days = X[3], this.$d.hours = X[4], this.$d.minutes = X[5], this.$d.seconds = X[6], this.calMilliseconds(), this;
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
        var w = B(this.$d.years, "Y"), _ = B(this.$d.months, "M"), T = +this.$d.days || 0;
        this.$d.weeks && (T += 7 * this.$d.weeks);
        var z = B(T, "D"), Z = B(this.$d.hours, "H"), X = B(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3);
        var E = B($, "S"), k = w.negative || _.negative || z.negative || Z.negative || X.negative || E.negative, L = Z.format || X.format || E.format ? "T" : "", I = (k ? "-" : "") + "P" + w.format + _.format + z.format + L + Z.format + X.format + E.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, m.toJSON = function() {
        return this.toISOString();
      }, m.format = function(w) {
        var _ = w || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return _.replace(d, function(z, Z) {
          return Z || String(T[z]);
        });
      }, m.as = function(w) {
        return this.$ms / p[C(w)];
      }, m.get = function(w) {
        var _ = this.$ms, T = C(w);
        return T === "milliseconds" ? _ %= 1e3 : _ = T === "weeks" ? N(_ / p[T]) : this.$d[T], _ === 0 ? 0 : _;
      }, m.add = function(w, _, T) {
        var z;
        return z = _ ? w * p[C(_)] : v(w) ? w.$ms : y(w, this).$ms, y(this.$ms + z * (T ? -1 : 1), this);
      }, m.subtract = function(w, _) {
        return this.add(w, _, !0);
      }, m.locale = function(w) {
        var _ = this.clone();
        return _.$l = w, _;
      }, m.clone = function() {
        return y(this.$ms, this);
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
      t = w, r = w().$utils(), w.duration = function(z, Z) {
        var X = w.locale();
        return y(z, { $l: X }, Z);
      }, w.isDuration = v;
      var _ = m.prototype.add, T = m.prototype.subtract;
      m.prototype.add = function(z, Z) {
        return v(z) && (z = z.asMilliseconds()), _.bind(this)(z, Z);
      }, m.prototype.subtract = function(z, Z) {
        return v(z) && (z = z.asMilliseconds()), T.bind(this)(z, Z);
      };
    };
  });
})(Ps);
const As = on;
var Is = "Expected a function", Kn = 0 / 0, Os = "[object Symbol]", Ys = /^\s+|\s+$/g, Ls = /^[-+]0x[0-9a-f]+$/i, Rs = /^0b[01]+$/i, Ns = /^0o[0-7]+$/i, Fs = parseInt, Ws = typeof $e == "object" && $e && $e.Object === Object && $e, Hs = typeof self == "object" && self && self.Object === Object && self, zs = Ws || Hs || Function("return this")(), Bs = Object.prototype, js = Bs.toString, Zs = Math.max, Vs = Math.min, Ft = function() {
  return zs.Date.now();
};
function Gs(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Is);
  n = Jn(n) || 0, sn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? Zs(Jn(t.maxWait) || 0, n) : s, p = "trailing" in t ? !!t.trailing : p);
  function v(m) {
    var w = r, _ = o;
    return r = o = void 0, a = m, i = e.apply(_, w), i;
  }
  function y(m) {
    return a = m, c = setTimeout(N, n), l ? v(m) : i;
  }
  function C(m) {
    var w = m - d, _ = m - a, T = n - w;
    return f ? Vs(T, s - _) : T;
  }
  function h(m) {
    var w = m - d, _ = m - a;
    return d === void 0 || w >= n || w < 0 || f && _ >= s;
  }
  function N() {
    var m = Ft();
    if (h(m))
      return K(m);
    c = setTimeout(N, C(m));
  }
  function K(m) {
    return c = void 0, p && r ? v(m) : (r = o = void 0, i);
  }
  function B() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function P() {
    return c === void 0 ? i : K(Ft());
  }
  function u() {
    var m = Ft(), w = h(m);
    if (r = arguments, o = this, d = m, w) {
      if (c === void 0)
        return y(d);
      if (f)
        return c = setTimeout(N, n), v(d);
    }
    return c === void 0 && (c = setTimeout(N, n)), i;
  }
  return u.cancel = B, u.flush = P, u;
}
function sn(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function Xs(e) {
  return !!e && typeof e == "object";
}
function Us(e) {
  return typeof e == "symbol" || Xs(e) && js.call(e) == Os;
}
function Jn(e) {
  if (typeof e == "number")
    return e;
  if (Us(e))
    return Kn;
  if (sn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = sn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Ys, "");
  var t = Rs.test(e);
  return t || Ns.test(e) ? Fs(e.slice(2), t ? 2 : 8) : Ls.test(e) ? Kn : +e;
}
var st = Gs;
const Et = [0, 1, 2];
var wt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(wt || {});
const jr = (e) => Et.includes(e), it = (e) => {
  var r;
  const t = (((r = document.getElementById(qe)) == null ? void 0 : r.clientWidth) || 0) - Pe;
  switch (e) {
    case 1:
      return Math.ceil(t / Se) * at;
    case 2:
      return Math.ceil(t / Ee) * at;
    default:
      return Math.ceil(t / ft) * at;
  }
}, Ks = (e) => it(e) / at, Dn = (e, n) => {
  const t = it(n) / 2;
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
}, Js = (e, n) => {
  const t = Dn(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, $n = () => {
  var t;
  return ((((t = document.getElementById(qe)) == null ? void 0 : t.clientWidth) || 0) - Pe) * at;
}, Zr = Cr({
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
  date: D(),
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
D.extend(Ms);
D.extend(Ds);
D.extend(Es);
D.extend(Ts);
D.extend(As);
const qs = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = D(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = fe(d), [p, v] = fe(D()), [y, C] = fe(!1), [h, N] = fe(it(l)), K = Et[l] !== Et[Et.length - 1], B = l !== 0, P = De(() => Js(p, l), [p, l]), u = Dn(p, l).startDate, m = D(u).dayOfYear(), w = Br(u), _ = we(null), [T, z] = fe([{ x: 0, y: 0 }]), Z = le(
    (G, b = "auto") => {
      var g, O, W, A;
      const R = $n();
      switch (G) {
        case "back":
          return (g = _.current) == null ? void 0 : g.scrollTo({
            behavior: b,
            left: R / 3
          });
        case "forward":
          return (O = _.current) == null ? void 0 : O.scrollTo({
            behavior: b,
            left: R / 3
          });
        case "middle": {
          const x = R / at / 4;
          return (W = _.current) == null ? void 0 : W.scrollTo({
            behavior: b,
            left: R / 2 - x
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
  ), X = (G) => {
    z(G);
  }, $ = le(
    (G) => {
      const b = Ks(l);
      let R;
      switch (l) {
        case 0:
          R = b * 7;
          break;
        case 1:
          R = b;
          break;
        case 2:
          R = Math.ceil(b / At);
          break;
      }
      st(() => {
        switch (G) {
          case "back":
            v((O) => O.subtract(R, "days"));
            break;
          case "forward":
            v((O) => O.add(R, "days"));
            break;
          case "middle":
            v(D());
            break;
        }
        s == null || s(P);
      }, 300)();
    },
    [s, P, l]
  );
  xe(() => {
    _.current = document.getElementById(qe), N(it(l));
  }, [l]), xe(() => {
    const G = () => N(it(l));
    return window.addEventListener("resize", G), () => window.removeEventListener("resize", G);
  }, [l]), xe(() => {
    s == null || s(P);
  }, [s, P]), xe(() => {
    C(!1);
  }, [o]), xe(() => {
    y || (Z("middle"), C(!0), v(o));
  }, [o, y, Z]);
  const E = () => {
    t || (v(
      (G) => l === 2 ? G.add(Zn, "hours") : G.add(Xn, "weeks")
    ), s == null || s(P));
  }, k = le(() => {
    t || ($("forward"), st(() => {
      Z("forward");
    }, 500)());
  }, [t, $, Z]), L = () => {
    t || (v(
      (G) => l === 2 ? G.subtract(Zn, "hours") : G.subtract(Xn, "weeks")
    ), s == null || s(P));
  }, I = le(() => {
    !y || t || ($("back"), st(() => {
      Z("back");
    }, 500)());
  }, [y, t, $, Z]), J = le(() => {
    t || ($("middle"), st(() => {
      Z("middle", "smooth");
    }, 300)());
  }, [t, $, Z]), ee = le(
    (G) => {
      if (t)
        return;
      const b = D(G).startOf("day");
      b.isValid() && (v(b), s == null || s(P), setTimeout(() => {
        Z("middle", "smooth");
      }, 300));
    },
    [t, Z, s, P]
  ), se = () => H(l + 1), oe = () => H(l - 1), H = (G) => {
    jr(G) && (f(G), N(it(G)), s == null || s(P));
  }, j = () => i == null ? void 0 : i(), { Provider: V } = Zr;
  return /* @__PURE__ */ M(
    V,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: E,
        handleScrollNext: k,
        handleGoPrev: L,
        handleScrollPrev: I,
        handleGoToday: J,
        goToDate: ee,
        zoomIn: se,
        zoomOut: oe,
        zoom: l,
        isNextZoom: K,
        isPrevZoom: B,
        date: p,
        isLoading: t,
        cols: h,
        startDate: w,
        dayOfYear: m,
        toggleDisplayActiveUnits: j,
        tilesCoords: T,
        updateTilesCoords: X,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: n
    }
  );
}, Ze = () => je(Zr), Vr = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Gr = (e, n) => {
  if (n.length === 0)
    return e;
  let t = e, r = 0;
  for (const o of n) {
    const s = o * me + r * Te;
    if (e >= s + Te)
      r++;
    else if (e >= s)
      return o * me + r * Te - r * Te;
  }
  return t - r * Te;
}, Qs = 5, qn = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > Qs;
}, vt = (e, n, t) => {
  const r = t.getBoundingClientRect();
  return {
    x: e - r.left + t.scrollLeft,
    y: n - r.top + t.scrollTop
  };
}, ei = ({
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
    isValidDrop: v
  } = i, [y, C] = fe("idle"), [h, N] = fe(null), [K, B] = fe({ x: 0, y: 0 }), [P, u] = fe({ width: 0, height: 48 }), [m, w] = fe(null), [_, T] = fe(!0), z = we({ x: 0, y: 0 }), Z = we({ x: 0, y: 0 }), X = we({ x: 0, y: 0 }), $ = we(null), E = we(null), k = we(0), L = we(null), I = le(
    (R) => !l || R.draggable === !1 ? !1 : f ? f(R) : !0,
    [l, f]
  ), J = le(
    (R, g) => {
      const O = Gr(g, d), W = Math.floor(O / me);
      let A;
      switch (t) {
        case 0:
          A = Ie * 7;
          break;
        case 1:
          A = Se;
          break;
        case 2:
          A = Ee;
          break;
        default:
          A = Se;
      }
      const x = Math.floor(R / A);
      let q;
      const Y = D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          q = Y.add(x * 7, "days").toDate();
          break;
        case 1:
          q = Y.add(x, "days").toDate();
          break;
        case 2:
          q = Y.add(x, "hours").toDate();
          break;
        default:
          q = Y.toDate();
      }
      return { snappedDate: q, snappedResourceIndex: W };
    },
    [t, r, d]
  ), ee = le(
    (R, g, O, W) => {
      const A = [], x = g.getTime(), q = O.getTime(), Y = a.find((te) => te.id === W);
      if (!Y)
        return A;
      const U = [];
      for (const te of Y.data)
        Array.isArray(te) ? U.push(...te) : U.push(te);
      for (const te of U) {
        if (te.segmentId === R.segmentId)
          continue;
        const F = te.startDate.getTime(), ie = te.endDate.getTime();
        if (x >= F && x < ie || q > F && q <= ie || x <= F && q >= ie) {
          const ue = new Date(Math.max(x, F)), ae = new Date(Math.min(q, ie)), de = ae.getTime() - ue.getTime();
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
    (R, g, O, W) => {
      const A = [], x = g.getTime(), q = O.getTime(), Y = D(g).format("YYYY-MM-DD"), U = a.find((F) => F.id === W);
      if (!U)
        return A;
      const te = [];
      for (const F of U.data)
        Array.isArray(F) ? te.push(...F) : te.push(F);
      for (const F of te) {
        if (F.segmentId === R.segmentId)
          continue;
        const ie = F.startDate.getTime(), pe = F.endDate.getTime(), ue = D(F.startDate).format("YYYY-MM-DD"), ae = D(F.endDate).format("YYYY-MM-DD"), de = D(O).format("YYYY-MM-DD");
        if (!(ue === Y || ae === Y || ue === de || ae === de || D(F.startDate).isBefore(g, "day") && D(F.endDate).isAfter(O, "day")) || x >= ie && x < pe || q > ie && q <= pe || x <= ie && q >= pe)
          continue;
        let he, Me;
        pe <= x ? (he = x - pe, Me = "before") : (he = ie - q, Me = "after"), A.push({
          event: F,
          timeGap: he,
          position: Me
        });
      }
      return A.sort((F, ie) => F.timeGap - ie.timeGap);
    },
    [a]
  ), oe = le(
    (R, g, O) => {
      const W = J(g, O);
      let A, x;
      if (p)
        A = R.startDate, x = R.endDate;
      else {
        const pe = D(R.endDate).diff(R.startDate);
        A = W.snappedDate, x = D(A).add(pe, "milliseconds").toDate();
      }
      let q = 0, Y = "", U;
      for (const pe of e) {
        const ue = Math.max(pe.data.length, 1);
        if (W.snappedResourceIndex < q + ue) {
          Y = pe.id, U = pe.capacity;
          break;
        }
        q += ue;
      }
      if (!Y)
        return null;
      let te = !0;
      U !== void 0 && R.totalPassengers !== void 0 && (te = R.totalPassengers <= U);
      const F = ee(R, A, x, Y), ie = F.length === 0 ? se(R, A, x, Y) : [];
      return {
        startDate: A,
        endDate: x,
        resourceId: Y,
        resourceIndex: W.snappedResourceIndex,
        resourceCapacity: U,
        hasCapacity: te,
        conflicts: F,
        hasConflict: F.length > 0,
        nearbyEvents: ie
      };
    },
    [J, e, p, ee, se]
  ), H = le(
    (R, g) => {
      if (!s)
        return;
      const O = Date.now();
      if (O - k.current < 100)
        return;
      k.current = O;
      const W = {
        event: R,
        currentStartDate: g.startDate,
        currentEndDate: g.endDate,
        currentResourceId: g.resourceId,
        conflicts: g.conflicts
      };
      s(W);
    },
    [s]
  ), j = le(
    (R, g) => {
      if (!I(R) || !c.current)
        return;
      g.preventDefault(), g.stopPropagation();
      const O = g.target.closest('[style*="left"]');
      let W = 0, A = 0;
      O && O.style.left && O.style.top && (W = parseInt(O.style.left), A = parseInt(O.style.top));
      const x = vt(
        g.clientX,
        g.clientY,
        c.current
      );
      z.current = { x: W, y: A }, Z.current = { x: g.clientX, y: g.clientY }, X.current = {
        x: x.x - W,
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
          if (te.some((F) => F.segmentId === R.segmentId)) {
            L.current.resourceId = U.id;
            break;
          }
        if (L.current.resourceId)
          break;
      }
      N(R), C("potential"), B({ x: W, y: A });
      let q = 100, Y = 48;
      if (O) {
        const U = O.getBoundingClientRect();
        q = U.width, Y = U.height;
      }
      u({ width: q, height: Y });
    },
    [I, c, e, t]
  ), V = le(
    (R) => {
      if (!c.current)
        return;
      let g = c.current;
      for (; g && g !== document.body; ) {
        const F = window.getComputedStyle(g);
        if (g.scrollHeight > g.clientHeight && (F.overflowY === "auto" || F.overflowY === "scroll" || F.overflow === "auto" || F.overflow === "scroll"))
          break;
        g = g.parentElement;
      }
      (!g || g === document.body) && (g = document.documentElement);
      const O = g.getBoundingClientRect(), W = R.clientY, A = 50, x = 5, q = W - O.top, Y = O.bottom - W;
      let U = !1, te = 0;
      q < A && q > 0 ? (U = !0, te = -x * (1 - q / A)) : Y < A && Y > 0 && (U = !0, te = x * (1 - Y / A)), U ? (E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => {
        g.scrollTop += te, y === "dragging" && V(R);
      })) : E.current && (cancelAnimationFrame(E.current), E.current = null);
    },
    [c, y]
  ), G = le(
    (R) => {
      if (y === "idle" || y === "animating" || !h || !c.current)
        return;
      const g = { x: R.clientX, y: R.clientY };
      if (y === "potential")
        if (qn(Z.current, g))
          C("dragging");
        else
          return;
      V(R);
      const O = vt(
        R.clientX,
        R.clientY,
        c.current
      );
      $.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
        const W = {
          x: O.x - X.current.x,
          y: O.y - X.current.y
        };
        B(W);
        const A = oe(h, O.x, O.y);
        if (A && v) {
          const x = {
            event: h,
            currentStartDate: A.startDate,
            currentEndDate: A.endDate,
            currentResourceId: A.resourceId,
            conflicts: A.conflicts
          };
          A.hasConflict = !v(x);
        }
        if (w(A), A) {
          const x = A.hasCapacity !== !1;
          T(x), H(h, A);
        }
      });
    },
    [y, h, c, oe, H, v, V]
  ), b = le(
    async (R) => {
      if (y === "idle" || y === "animating")
        return;
      const g = { x: R.clientX, y: R.clientY };
      if (!qn(Z.current, g) || y === "potential") {
        C("idle"), N(null), w(null);
        return;
      }
      if (!h || !m || !L.current) {
        C("idle"), N(null), w(null);
        return;
      }
      if (m.hasCapacity === !1) {
        T(!1), C("animating"), B(z.current), setTimeout(() => {
          C("idle"), N(null), w(null), T(!0);
        }, 300);
        return;
      }
      const W = {
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
          const x = o(W);
          A = x instanceof Promise ? await x : x;
        } catch {
          A = !1;
        }
      A ? (T(!0), C("idle"), N(null), w(null)) : (T(!1), C("animating"), B(z.current), setTimeout(() => {
        C("idle"), N(null), w(null), T(!0);
      }, 300));
    },
    [y, h, m, o, v]
  );
  return xe(() => {
    if (y === "potential" || y === "dragging") {
      const R = (O) => G(O), g = (O) => b(O);
      return document.addEventListener("mousemove", R), document.addEventListener("mouseup", g), () => {
        document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", g);
      };
    } else
      return () => {
      };
  }, [y, G, b]), xe(() => () => {
    $.current && (cancelAnimationFrame($.current), $.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null);
  }, []), xe(() => {
    (y === "idle" || y === "animating") && ($.current && (cancelAnimationFrame($.current), $.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null));
  }, [y]), xe(() => {
    (y === "dragging" || y === "potential") && (y === "dragging" ? (C("animating"), B(z.current), setTimeout(() => {
      C("idle"), N(null), w(null);
    }, 300)) : (C("idle"), N(null), w(null)));
  }, [t]), xe(() => {
    if ((y === "dragging" || y === "potential") && h) {
      let R = !1;
      for (const g of e) {
        for (const O of g.data)
          if (O.some((W) => W.segmentId === h.segmentId)) {
            R = !0;
            break;
          }
        if (R)
          break;
      }
      R || (y === "dragging" ? (C("animating"), B(z.current), setTimeout(() => {
        C("idle"), N(null), w(null);
      }, 300)) : (C("idle"), N(null), w(null)));
    }
  }, [e, y, h]), {
    dragState: y,
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
}, ti = ({
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
  const { enabled: l = !1, isSelectable: f } = i, p = l && !!o, v = le((g) => {
    let O = 0;
    for (const W of a)
      W <= g && O++;
    return g * me + O * Te;
  }, [a]), [y, C] = fe("idle"), [h, N] = fe(null), [K, B] = fe(null), [P, u] = fe(null), [m, w] = fe(!1), [_, T] = fe([]), [z, Z] = fe(!1), X = we(null), $ = we(null), E = we(null), k = le(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return Ee;
      default:
        return Se;
    }
  }, [t]), L = le(
    (g) => {
      const O = k(), W = Math.floor(g / O), A = D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return A.add(W * 7, "days").toDate();
        case 1:
          return A.add(W, "days").toDate();
        case 2:
          return A.add(W, "hours").toDate();
        default:
          return A.toDate();
      }
    },
    [t, r, k]
  ), I = le(
    (g) => {
      const O = Gr(g, a), W = Math.floor(O / me);
      let A = 0;
      for (const x of e) {
        const q = Math.max(x.data.length, 1);
        if (W < A + q)
          return {
            resourceId: x.id,
            resourceIndex: W,
            resourceLabel: x.label
          };
        A += q;
      }
      return null;
    },
    [e, a]
  ), J = le(
    (g) => {
      const O = k();
      return Math.floor(g / O) * O;
    },
    [k]
  ), ee = le(
    (g, O, W, A = []) => {
      const x = [], Y = (n || e).find((F) => F.id === g), U = O.getTime(), te = W.getTime();
      if (Y) {
        const F = Y.data[0], ie = F && Array.isArray(F) ? Y.data.flat() : Y.data;
        for (const pe of ie) {
          const ue = new Date(pe.startDate).getTime(), ae = new Date(pe.endDate).getTime();
          if (U < ae && te > ue) {
            const de = new Date(Math.max(U, ue)), ce = new Date(Math.min(te, ae)), ne = ce.getTime() - de.getTime();
            x.push({
              event: pe,
              conflictStart: de,
              conflictEnd: ce,
              overlapDuration: ne
            });
          }
        }
      }
      for (const F of A) {
        if (F.resourceId !== g)
          continue;
        const ie = F.startDate.getTime(), pe = F.endDate.getTime();
        if (U < pe && te > ie) {
          const ue = new Date(Math.max(U, ie)), ae = new Date(Math.min(te, pe)), de = ae.getTime() - ue.getTime(), ce = {
            segmentId: `pending-${F.startDate.getTime()}`,
            reservationId: `pending-${F.startDate.getTime()}`,
            startDate: F.startDate,
            endDate: F.endDate,
            occupancy: 0,
            title: `New Event (${F.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          x.push({
            event: ce,
            conflictStart: ue,
            conflictEnd: ae,
            overlapDuration: de
          });
        }
      }
      return x;
    },
    [e, n]
  ), se = le(
    (g) => {
      if (!p || d || !c.current || g.button !== 0)
        return;
      const O = g.target;
      if (O.closest("[data-segment-id]") || O.closest("[data-multi-select-ui]"))
        return;
      const W = vt(g.clientX, g.clientY, c.current), A = I(W.y);
      if (!A)
        return;
      X.current = { x: g.clientX, y: g.clientY }, $.current = A.resourceIndex;
      const x = J(W.x), q = k(), Y = v(A.resourceIndex);
      N(W), B(W), u({
        x,
        y: Y,
        width: q,
        height: me
      }), C("selecting");
    },
    [p, d, c, I, J, k, v]
  ), oe = le(
    (g) => {
      if (y !== "selecting" || !c.current || $.current === null)
        return;
      const O = vt(g.clientX, g.clientY, c.current);
      E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => {
        B(O);
        const W = k(), A = J((h == null ? void 0 : h.x) || 0), x = J(O.x), q = v($.current), Y = Math.min(A, x), U = Math.max(A, x) + W;
        u({
          x: Y,
          y: q,
          width: U - Y,
          height: me
        });
      });
    },
    [y, c, h, k, J, v]
  ), H = le(
    (g) => {
      if (y !== "selecting")
        return;
      if (!c.current || !h || !X.current) {
        C("idle"), N(null), B(null), u(null);
        return;
      }
      const O = vt(g.clientX, g.clientY, c.current), W = I(h.y);
      if (!W) {
        C("idle"), N(null), B(null), u(null);
        return;
      }
      const A = Math.min(h.x, O.x), x = Math.max(h.x, O.x), q = L(A), Y = L(x), U = D(Y).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(W.resourceId, q, U)) {
        C("idle"), N(null), B(null), u(null);
        return;
      }
      const te = ee(
        W.resourceId,
        q,
        U,
        _
      ), F = te.length > 0, ie = {
        startDate: q,
        endDate: U,
        resourceId: W.resourceId,
        resourceLabel: W.resourceLabel,
        zoomLevel: t,
        hasConflict: F,
        conflicts: F ? te : void 0
      };
      if (m)
        T((pe) => [...pe, ie]), Z(!0);
      else if (o) {
        const pe = o(ie), ue = (ae) => {
          ae != null && ae.continueMultiSelect && (w(!0), T([ie]), Z(!0));
        };
        pe instanceof Promise ? pe.then(ue) : ue(pe);
      }
      C("idle"), N(null), B(null), u(null), X.current = null, $.current = null;
    },
    [
      y,
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
      Z(!1);
      const g = s(_), O = (W) => {
        W != null && W.continueMultiSelect ? Z(!0) : (T([]), w(!1), Z(!1));
      };
      g instanceof Promise ? g.then(O) : O(g);
      return;
    }
    T([]), w(!1), Z(!1);
  }, [_, s]), V = le(() => {
    T([]), w(!1), Z(!1);
  }, []), G = le((g) => {
    T((O) => {
      const W = O.filter((A, x) => x !== g);
      return W.length === 0 && (w(!1), Z(!1)), W;
    });
  }, []), b = le(
    (g, O) => {
      T((W) => W.map((A, x) => {
        if (x !== g)
          return A;
        const q = { ...A, ...O }, Y = W.filter((te, F) => F !== g), U = ee(
          q.resourceId,
          q.startDate,
          q.endDate,
          Y
        );
        return {
          ...q,
          hasConflict: U.length > 0,
          conflicts: U.length > 0 ? U : void 0
        };
      }));
    },
    [ee]
  ), R = le(
    (g) => {
      g.key === "Escape" && (y === "selecting" ? (C("idle"), N(null), B(null), u(null), X.current = null, $.current = null) : m && _.length > 0 && (T([]), w(!1), Z(!1)));
    },
    [y, m, _.length]
  );
  return xe(() => {
    if (y === "selecting")
      return document.addEventListener("mousemove", oe), document.addEventListener("mouseup", H), document.addEventListener("keydown", R), () => {
        document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", H), document.removeEventListener("keydown", R);
      };
  }, [y, oe, H, R]), xe(() => {
    if (m && _.length > 0)
      return document.addEventListener("keydown", R), () => {
        document.removeEventListener("keydown", R);
      };
  }, [m, _.length, R]), xe(() => () => {
    E.current && (cancelAnimationFrame(E.current), E.current = null);
  }, []), xe(() => {
    d && y === "selecting" && (C("idle"), N(null), B(null), u(null), X.current = null, $.current = null);
  }, [d, y]), {
    selectionState: y,
    selectionStart: h,
    selectionEnd: K,
    selectionBox: P,
    handleGridMouseDown: se,
    isEnabled: p,
    pendingSelections: _,
    confirmSelections: j,
    clearSelections: V,
    removeSelection: G,
    updateSelection: b,
    isMultiSelectActive: m,
    hasUnconfirmedSelections: z
  };
}, ni = S.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, ri = S.div`
  position: relative;
`, oi = S.canvas``;
S.canvas``;
const Qn = S.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, si = Mr(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: p, separatorRowIndices: v = [] }, y) {
  const C = we(!1), { handleScrollNext: h, handleScrollPrev: N, date: K, isLoading: B, cols: P, startDate: u } = Ze(), m = we(null), w = we(null), _ = we(null), T = we(null), [z, Z] = fe(!1), X = et(), {
    dragState: $,
    draggedEvent: E,
    ghostPosition: k,
    ghostDimensions: L,
    dropTarget: I,
    isValidDrop: J,
    handleDragStart: ee,
    isDraggable: se,
    draggingEventId: oe,
    resourceOnly: H
  } = ei({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: d,
    gridRef: T,
    separatorRowIndices: v
  });
  xe(() => {
    const F = $ === "dragging" || $ === "potential";
    Z(F), a && a(F);
  }, [$, a]);
  const {
    selectionState: j,
    selectionBox: V,
    handleGridMouseDown: G,
    pendingSelections: b,
    confirmSelections: R,
    clearSelections: g,
    removeSelection: O,
    updateSelection: W,
    isMultiSelectActive: A,
    hasUnconfirmedSelections: x
  } = ti({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: p,
    gridRef: T,
    isDragging: z,
    separatorRowIndices: v
  }), q = le((F) => {
    F.preventDefault();
  }, []), Y = le((F) => {
    F.preventDefault();
  }, []), U = v.length * Te, te = le(
    (F) => {
      const ie = $n(), pe = t * me + 1 + U;
      Vr(F, ie, pe), Ss(F, n, t, P, u, X, v);
    },
    [P, u, t, n, X, v, U]
  );
  return xe(() => {
    if (!m.current)
      return;
    const F = m.current.getContext("2d");
    if (!F)
      return;
    const ie = () => te(F);
    return window.addEventListener("resize", ie), () => window.removeEventListener("resize", ie);
  }, [te]), xe(() => {
    const F = m.current;
    if (!F)
      return;
    F.style.letterSpacing = "1px";
    const ie = F.getContext("2d");
    ie && te(ie);
  }, [K, t, n, te]), xe(() => {
    if (!w.current)
      return;
    const F = new IntersectionObserver(
      (ie) => {
        ie[0].isIntersecting && !C.current && (C.current = !0, h(), setTimeout(() => {
          C.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(qe) }
    );
    return F.observe(w.current), () => {
      F.disconnect();
    };
  }, [h]), xe(() => {
    if (!_.current)
      return;
    const F = new IntersectionObserver(
      (ie) => {
        ie[0].isIntersecting && !C.current && (C.current = !0, N(), setTimeout(() => {
          C.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(qe),
        rootMargin: `0px 0px 0px -${Pe}px`
      }
    );
    return F.observe(_.current), () => {
      F.disconnect();
    };
  }, [N]), /* @__PURE__ */ Q(ni, { id: Wr, children: [
    /* @__PURE__ */ Q(
      ri,
      {
        ref: (F) => {
          typeof y == "function" ? y(F) : y && (y.current = F), T.current = F;
        },
        onMouseDown: G,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ M(Qn, { position: "left", ref: _ }),
          /* @__PURE__ */ M(pn, { isLoading: B, position: "left" }),
          /* @__PURE__ */ M(
            oi,
            {
              ref: m,
              onDragStart: q,
              onDragOver: Y,
              style: { userSelect: $ === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ M($l, { zoom: n, startDate: u }),
          /* @__PURE__ */ M(
            Dc,
            {
              data: r,
              zoom: n,
              onTileClick: s,
              onDragStart: ee,
              isDraggable: se,
              draggingEventId: oe,
              separatorRowIndices: v
            }
          ),
          /* @__PURE__ */ M(Qn, { ref: w, position: "right" }),
          /* @__PURE__ */ M(pn, { isLoading: B, position: "right" }),
          ($ === "dragging" || $ === "animating") && /* @__PURE__ */ M(
            ol,
            {
              draggedEvent: E,
              ghostPosition: k,
              ghostDimensions: L,
              dropTarget: I,
              isValidDrop: J,
              dragState: $,
              zoom: n,
              data: r,
              resourceOnly: H,
              separatorRowIndices: v
            }
          ),
          /* @__PURE__ */ M(
            cl,
            {
              selectionBox: V,
              isSelecting: j === "selecting"
            }
          ),
          A && b.length > 0 && /* @__PURE__ */ M(
            Ml,
            {
              selections: b,
              data: r,
              zoom: n,
              startDate: u,
              onRemove: O,
              onUpdate: W,
              separatorRowIndices: v
            }
          )
        ]
      }
    ),
    A && x && b.length > 0 && /* @__PURE__ */ M(
      yl,
      {
        selections: b,
        onConfirm: R,
        onClear: g,
        onRemove: O
      }
    )
  ] });
}), Xr = (e) => {
  const n = D.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, Ur = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / Ce);
    t += o.hours + s, r += n % Ce, r >= Ce && (t++, r -= Ce);
  }), { hours: t, minutes: r };
}, Kr = (e, n) => {
  let t = Gn;
  switch (n) {
    case 0:
      t = ms;
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
}, ii = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const l = D(a.startDate).isoWeek(), f = D(a.startDate).isoWeekday(), p = D(a.endDate).isoWeek(), v = D(a.endDate).isoWeekday(), { hours: y, minutes: C } = Xr(a.occupancy);
    if (r === l) {
      const h = (He + 1 - f) * y, N = (He + 1 - f) * C;
      return { hours: Math.max(0, h), minutes: N };
    } else if (r === p) {
      const h = v > He ? He * y : v * y, N = v > He ? He * C : v * C;
      return { hours: h, minutes: N };
    } else if (D(n).isBetween(a.startDate, a.endDate))
      return { hours: He * y, minutes: He * C };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Ur(o), { free: c, overtime: d } = Kr({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, ai = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: p } = Xr(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: p } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = Ur(s), { free: d, overtime: a } = Kr({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, ci = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const d = D(c.startDate).hour(), a = D(c.endDate).hour(), l = n.hour(), f = D(c.endDate).minute(), p = D(c.startDate).minute();
    d < l && a > l ? t += Ce : d === l && a === l && p && f ? t += f ? f - p : Ce - p : d === l && a >= l ? t += p ? Ce - p : Ce : a === l && f && (t += f);
  });
  const r = Math.floor(t / Ce), o = t % Ce, s = r || o ? 0 : 1, i = r ? 0 : o ? Ce - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, li = (e, n, t, r, o = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => r === 1 ? D(t).isBetween(i.startDate, i.endDate, "day", "[]") : r === 2 ? D(t).isBetween(i.startDate, i.endDate, "hour", "[]") : D(i.startDate).isBetween(
    D(t),
    D(t).add(6, "days"),
    "day",
    "[]"
  ) || D(t).isBetween(D(i.startDate), D(i.endDate), "day", "[]"));
  switch (r) {
    case 1:
      return ai(s, t, r, o);
    case 2:
      return ci(s, t);
    default:
      return ii(s, t, r);
  }
}, di = (e, n, t, r, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = ft;
      break;
    case 1:
      c = "days", d = Se;
      break;
    case 2:
      c = "hours", d = Ee;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * d) / d : t.x / d), l = D(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / me), p = r.findIndex((N, K, B) => B.slice(0, K + 1).reduce((u, m) => u + m, 0) >= f), v = s === 2 ? (a + 1) * d : a * d, y = (f - 1) * me + me, C = li(
    o[p],
    p,
    l,
    s,
    i
  ), h = D(e.startDate).isSame(D(e.endDate), "day");
  return {
    coords: { x: v, y },
    mouseCoords: t,
    resourceIndex: p,
    disposition: C,
    reservationData: {
      startTime: D(e.startDate).format("hh:mm A"),
      startDate: D(e.startDate).format("MMM D, YYYY"),
      endTime: D(e.endDate).format("hh:mm A"),
      endDate: D(e.endDate).format("MMM D, YYYY"),
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
function ui(e, n) {
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
function fi(e) {
  const n = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const r = [...t].sort((l, f) => l - f);
  if (r.length < 2)
    return n;
  const o = Math.min(5, r.length), s = ui(r, o), i = [];
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
    const p = "__auto_cat_" + f, v = l.min === l.max ? l.min + " pax" : l.min + "-" + l.max + " pax";
    d.push({ id: p, name: v, minPassengers: l.min, maxPassengers: l.max });
    for (const y of l.values)
      a.set(y, p);
  }), { categories: d, capacityToCategoryId: a };
}
const hi = (e, n, t, r) => {
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
var an = {}, pi = {
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
  })($e, function() {
    return function(t, r) {
      r.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(pi);
const mi = an;
var cn = {}, gi = {
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
  })($e, function() {
    return function(t, r) {
      r.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(gi);
const yi = cn, vi = (e) => {
  const n = [];
  for (const t of e) {
    let r = !1;
    if (n.length)
      for (const o of n) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          const c = D(t.startDate).startOf("day"), d = D(t.endDate).startOf("day"), a = D(o[i].startDate).startOf("day"), l = D(o[i].endDate).startOf("day");
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
D.extend(mi);
D.extend(yi);
const bi = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = [...s.data].sort((d, a) => {
      const l = D(d.startDate), f = D(a.startDate), p = l.startOf("day").diff(f.startOf("day"), "day");
      return p !== 0 ? p : l.diff(f);
    }), c = vi(i);
    return o[0].push(c), o[1].push(Math.max(c.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, xi = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, wi = (e) => {
  const { recordsThreshold: n } = Ze(), [t, r] = fe(0), [o, s] = fe(0), i = we(null);
  xe(() => {
    i.current = document.getElementById(qe);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = De(() => bi(e), [e]), a = De(
    () => hi(e, c, d, n),
    [e, c, n, d]
  ), l = le(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((h) => h + a[Math.max(o, 0)].length), s((h) => Math.min(h + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = le(() => {
    a[o].length && (r((h) => Math.max(h - a[o - 1].length, 0)), s((h) => Math.max(h - 1, 0)));
  }, [o, a]), p = le(() => {
    r(0), s(0);
  }, []), v = t + a[o].length, y = De(
    () => d.slice(t, v),
    [v, d, t]
  ), C = De(
    () => c.slice(t, v),
    [v, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: C,
    rowsPerItem: y,
    totalRowsPerPage: xi(a[o]),
    next: l,
    previous: f,
    reset: p
  };
};
var ln = {}, Si = {
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
  })($e, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(Si);
const Ci = ln;
var dn = {}, Mi = {
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
  })($e, function(t) {
    function r(p) {
      return p && typeof p == "object" && "default" in p ? p : { default: p };
    }
    var o = r(t);
    function s(p) {
      return p % 10 < 5 && p % 10 > 1 && ~~(p / 10) % 10 != 1;
    }
    function i(p, v, y) {
      var C = p + " ";
      switch (y) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return C + (s(p) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return C + (s(p) ? "godziny" : "godzin");
        case "MM":
          return C + (s(p) ? "miesiące" : "miesięcy");
        case "yy":
          return C + (s(p) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, l = function(p, v) {
      return a.test(v) ? c[p.month()] : d[p.month()];
    };
    l.s = d, l.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: l, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(p) {
      return p + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Mi);
const ki = dn;
var un = {}, Di = {
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
  })($e, function(t) {
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
})(Di);
const $i = un;
var fn = {}, Ei = {
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
  })($e, function(t) {
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
})(Ei);
const _i = fn;
var hn = {}, Ti = {
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
  })($e, function(t) {
    function r(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = r(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Ti);
const Pi = hn, Ai = {
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
}, Ii = {
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
}, Oi = {
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
}, Yi = {
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
}, Li = {
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
}, Ri = [
  {
    id: "en",
    lang: Oi,
    translateCode: "en-GB",
    dayjsTranslations: Ci
  },
  {
    id: "pl",
    lang: Ii,
    translateCode: "pl-PL",
    dayjsTranslations: ki
  },
  {
    id: "es",
    lang: Ai,
    translateCode: "es-ES",
    dayjsTranslations: Pi
  },
  {
    id: "lt",
    lang: Li,
    translateCode: "lt-LT",
    dayjsTranslations: _i
  },
  {
    id: "de",
    lang: Yi,
    translateCode: "de-DE",
    dayjsTranslations: $i
  }
];
class Ni {
  constructor() {
    En(this, "locales", Ri);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const It = new Ni(), Jr = Cr({
  localesData: It.getLocales(),
  currentLocale: It.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Fi = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = fe("en"), s = It.getLocales(), i = le(() => {
    const f = s.find((p) => p.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && D.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = fe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  xe(() => {
    t == null || t.forEach((f) => {
      s.find((v) => v.id === f.id) || It.addLocales(f);
    });
  }, [s, t]), xe(() => {
    const f = localStorage.getItem("locale"), p = n ?? f ?? "en";
    localStorage.setItem("locale", p), o(p), d(i());
  }, [i, n]);
  const { Provider: l } = Jr;
  return /* @__PURE__ */ M(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ve = () => je(Jr).currentLocale.lang, Wi = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Hi = S.div`
  height: 440px;
  width: 514px;
  position: relative;
`, zi = S.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Bi = ({ onTileClick: e }) => {
  const { feelingEmpty: n } = Ve();
  return /* @__PURE__ */ Q(Hi, { onClick: e, children: [
    /* @__PURE__ */ M(Wi, {}),
    /* @__PURE__ */ M(zi, { children: n })
  ] });
}, ji = S.div`
  position: relative;
  display: flex;
`, Zi = S.div`
  position: relative;
  margin-left: ${Pe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, Vi = S.div`
  width: calc(${({ width: e }) => e}px - ${Pe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Pe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Wt = {
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
function Gi(e, n) {
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
const Xi = ({
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
  const [v, y] = fe(Wt), [C, h] = fe(e), [N, K] = fe(!1), [B, P] = fe(!1), [u, m] = fe(""), [w, _] = fe(/* @__PURE__ */ new Set()), {
    zoom: T,
    startDate: z,
    isLoading: Z,
    config: { includeTakenHoursOnWeekendsInDayView: X, showTooltip: $, showThemeToggle: E }
  } = Ze(), k = we(null), {
    page: L,
    projectsPerPerson: I,
    rowsPerItem: J,
    currentPageNum: ee,
    pagesAmount: se,
    next: oe,
    previous: H,
    reset: j
  } = wi(C), { effectiveCategories: V, effectivePage: G } = De(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: L };
    const ae = fi(L);
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
  }, []), R = De(() => {
    const ae = [], de = V ? [...V].sort((ce, ne) => ce.maxPassengers - ne.maxPassengers) : [];
    for (const ce of de)
      G.some((ne) => !ne.isSubcontract && ne.categoryId === ce.id) && ae.push(ce.id);
    return G.some((ce) => ce.isSubcontract) && ae.push("__subcontract__"), ae;
  }, [V, G]), g = le(() => {
    _(/* @__PURE__ */ new Set());
  }, []), O = le(() => {
    _(new Set(R));
  }, [R]), {
    visiblePage: W,
    visibleRowsPerItem: A,
    visibleTotalRows: x,
    visibleProjectsPerPerson: q,
    separatorRowIndices: Y
  } = De(() => {
    const ae = Gi(G, V), de = ((V == null ? void 0 : V.length) ?? 0) > 0, ce = /* @__PURE__ */ new Map();
    L.forEach((ke, Re) => ce.set(ke.id, Re));
    const ne = [], he = [], Me = [], Ae = [];
    let _e = 0;
    for (const ke of ae)
      if (ke.type === "subcontract" || ke.type === "category" && de) {
        const nt = ke.type === "subcontract" ? "__subcontract__" : ke.category.id, rt = w.has(nt);
        if (Ae.push(_e), !rt)
          for (const Ge of ke.items) {
            const St = ce.get(Ge.id) ?? 0, Ct = J[St];
            ne.push(Ge), he.push(Ct), Me.push(I[St]), _e += Ct;
          }
      } else
        for (const nt of ke.items) {
          const rt = ce.get(nt.id) ?? 0, Ge = J[rt];
          ne.push(nt), he.push(Ge), Me.push(I[rt]), _e += Ge;
        }
    const Lt = he.reduce((ke, Re) => ke + Re, 0);
    return {
      visiblePage: ne,
      visibleRowsPerItem: he,
      visibleTotalRows: Lt,
      visibleProjectsPerPerson: Me,
      separatorRowIndices: Ae
    };
  }, [G, V, L, w, J, I]), U = we(
    st(
      (ae, de, ce, ne, he, Me) => {
        if (!k.current)
          return;
        const { tile: Ae, segmentId: _e } = ie(ae);
        if (!_e || !Ae) {
          K(!1), y(Wt);
          return;
        }
        const Lt = F(_e, de), ke = k.current.getBoundingClientRect(), Re = Ae.getBoundingClientRect(), nt = { x: ae.clientX - ke.left, y: ae.clientY - ke.top }, rt = {
          x: ae.clientX - ke.left,
          y: ae.clientY - ke.top
        }, Ge = {
          x: Re.left - ke.left,
          y: Re.top - ke.top,
          width: Re.width,
          height: Re.height
        }, {
          coords: { x: St, y: Ct },
          resourceIndex: to,
          disposition: no,
          reservationData: ro
        } = di(
          Lt,
          ce,
          nt,
          ne,
          he,
          Me,
          X
        );
        y({
          coords: { x: St, y: Ct },
          mouseCoords: rt,
          resourceIndex: to,
          disposition: no,
          reservationData: ro,
          tileBounds: Ge
        }), K(!0);
      },
      4
    )
  ), te = we(
    st((ae, de) => {
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
  ), F = (ae, de) => {
    if (ae)
      return de.flatMap((ce) => ce.data).find((ce) => ce.segmentId === ae);
  }, ie = (ae) => {
    if (!ae.target)
      return { tile: null, segmentId: null };
    const de = ae.target.closest("[data-segment-id]");
    return de ? { tile: de, segmentId: de.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, pe = (ae) => {
    const de = ae.target.value;
    m(de), te.current.cancel(), de ? te.current(e, de) : (j(), h(e));
  }, ue = le(() => {
    U.current.cancel(), K(!1), y(Wt);
  }, []);
  return xe(() => {
    const ae = (ce) => U.current(
      ce,
      e,
      z,
      A,
      q,
      T
    ), de = k.current;
    if (de)
      return de.addEventListener("mousemove", ae), de.addEventListener("mouseleave", ue), () => {
        de.removeEventListener("mousemove", ae), de.removeEventListener("mouseleave", ue);
      };
  }, [
    U,
    ue,
    q,
    A,
    z,
    T,
    e
  ]), xe(() => {
    u ? (te.current.cancel(), te.current(e, u)) : h(e);
  }, [e, u]), /* @__PURE__ */ Q(ji, { children: [
    /* @__PURE__ */ M(
      Ba,
      {
        data: G,
        categories: V,
        pageNum: ee,
        pagesAmount: se,
        rows: J,
        onLoadNext: oe,
        onLoadPrevious: H,
        searchInputValue: u,
        onSearchInputChange: pe,
        onItemClick: o,
        collapsedGroups: w,
        onToggleGroup: b,
        allGroupIds: R,
        onExpandAll: g,
        onCollapseAll: O
      }
    ),
    /* @__PURE__ */ Q(Zi, { children: [
      /* @__PURE__ */ M(
        ac,
        {
          zoom: T,
          topBarWidth: i,
          showThemeToggle: E,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ M(
        si,
        {
          data: W,
          baseData: n || e,
          zoom: T,
          rows: x,
          ref: k,
          onTileClick: r,
          onEventDrop: c,
          onEventDrag: d,
          draggableConfig: a,
          onDragStateChange: P,
          onTimeRangeSelect: l,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: p,
          separatorRowIndices: Y
        }
      ) : /* @__PURE__ */ M(Vi, { width: i, children: Z ? /* @__PURE__ */ M(pn, { isLoading: Z, position: "left" }) : /* @__PURE__ */ M(Bi, {}) }),
      $ && N && !B && (v == null ? void 0 : v.resourceIndex) > -1 && /* @__PURE__ */ M(zc, { tooltipData: v })
    ] })
  ] });
}, qr = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, Ui = S.div`
  width: calc(${({ width: e }) => e}px - ${Pe}px);
  position: sticky;
  top: 0;
  left: ${Pe}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Ki = S.div`
  display: flex;
  gap: 1.875rem;
`, er = S.button`
  ${qr};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, Ji = S.button`
  ${qr};
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
`, qi = S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Qi = S.div`
  display: flex;
`, ea = S.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, ta = ({ width: e, showThemeToggle: n, toggleTheme: t }) => {
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
    toggleDisplayActiveUnits: v,
    onClearFilterData: y
  } = Ze(), { colors: C } = et(), { filterButtonState: h = -1 } = s, N = (K) => {
    K.stopPropagation(), y == null || y();
  };
  return /* @__PURE__ */ Q(Ui, { width: e, children: [
    /* @__PURE__ */ M(Qi, { children: h >= 0 && /* @__PURE__ */ Q(
      Ht,
      {
        variant: h ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: v,
        children: [
          r.filters,
          !!h && /* @__PURE__ */ M("span", { onClick: N, children: /* @__PURE__ */ M(Le, { iconName: "close", height: "16", width: "16", fill: C.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ Q(Ki, { children: [
      /* @__PURE__ */ Q(er, { onClick: c, children: [
        /* @__PURE__ */ M(Le, { iconName: "arrowLeft", height: "15", fill: C.textPrimary }),
        r.prev
      ] }),
      /* @__PURE__ */ M(Ji, { onClick: d, children: r.today }),
      /* @__PURE__ */ Q(er, { onClick: i, children: [
        r.next,
        /* @__PURE__ */ M(Le, { iconName: "arrowRight", height: "15", fill: C.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ Q(ea, { children: [
      n && /* @__PURE__ */ M(Vc, { toggleTheme: t }),
      /* @__PURE__ */ Q(qi, { children: [
        r.view,
        /* @__PURE__ */ M(
          Ht,
          {
            isDisabled: !p,
            onClick: l,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ M(
          Ht,
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
}, na = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), ra = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), oa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), sa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), ia = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), aa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ca = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), la = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), da = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), ua = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), fa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), ha = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), pa = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), ma = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), ga = {
  add: na,
  subtract: ra,
  filter: oa,
  arrowLeft: sa,
  arrowRight: ia,
  defaultAvatar: aa,
  calendarWarning: ca,
  calendarFree: la,
  arrowDown: ua,
  arrowUp: da,
  search: fa,
  close: ha,
  moon: pa,
  sun: ma
}, Le = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = et(), i = ga[e];
  return i ? /* @__PURE__ */ M(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.accent,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, ya = (e, n, t) => ({
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
})[n], va = S.button`
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
  ${({ theme: e, variant: n, disabled: t }) => ya(e, n, t)}
`, Ht = ({
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
  return /* @__PURE__ */ Q(
    va,
    {
      onClick: s,
      isFullRounded: c,
      hasChildren: !!i,
      disabled: d,
      variant: a,
      children: [
        /* @__PURE__ */ M(
          Le,
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
}, ba = S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, xa = S.div`
  position: relative;
`, wa = ({
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
  clickToAddConfig: v
}) => {
  const { goToDate: y, handleGoToday: C, zoomIn: h, zoomOut: N, zoom: K } = Ze();
  return kr(
    l,
    () => ({
      goToDate: y,
      goToToday: C,
      setZoom: (B) => {
        if (!jr(B))
          return;
        const P = B - K;
        if (P > 0)
          for (let u = 0; u < P; u++)
            h();
        else
          for (let u = 0; u < Math.abs(P); u++)
            N();
      }
    }),
    [y, C, K, h, N]
  ), /* @__PURE__ */ M(
    Xi,
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
      clickToAddConfig: v
    }
  );
}, Al = Mr(function({
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
  onEventDrag: v,
  draggableConfig: y,
  onTimeRangeSelect: C,
  onMultiTimeRangeSelect: h,
  clickToAddConfig: N
}, K) {
  var k;
  const B = De(
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
  ), P = we(null), u = we(null), [m, w] = fe((k = P.current) == null ? void 0 : k.clientWidth), _ = De(() => D(s), [s]), [T, z] = fe(B.defaultTheme ?? "light"), Z = () => {
    z(T === "light" ? "dark" : "light");
  }, X = T === "light" ? cs : ls, $ = B.theme ? B.theme[X.mode] : {}, E = {
    ...X,
    colors: {
      ...X.colors,
      ...$
    }
  };
  return kr(
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
  ), xe(() => {
    const L = () => {
      P.current && w(P.current.clientWidth);
    };
    return L(), window.addEventListener("resize", L), () => window.removeEventListener("resize", L);
  }, []), P.current, /* @__PURE__ */ Q(ze, { children: [
    /* @__PURE__ */ M(as, {}),
    /* @__PURE__ */ M(os, { theme: E, children: /* @__PURE__ */ M(Fi, { lang: B.lang, translations: B.translations, children: /* @__PURE__ */ M(
      qs,
      {
        data: n,
        isLoading: !!f,
        config: B,
        onRangeChange: i,
        defaultStartDate: _,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: /* @__PURE__ */ M(
          ba,
          {
            showScroll: !!n.length,
            id: qe,
            ref: P,
            children: /* @__PURE__ */ M(xa, { children: /* @__PURE__ */ M(
              wa,
              {
                data: n,
                baseData: r,
                categories: t,
                onTileClick: c,
                topBarWidth: m ?? 0,
                onItemClick: l,
                toggleTheme: Z,
                onEventDrop: p,
                onEventDrag: v,
                draggableConfig: y,
                schedulerRef: u,
                onTimeRangeSelect: C,
                onMultiTimeRangeSelect: h,
                clickToAddConfig: N
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}), Sa = S.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, Ca = S.button`
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
`, Ma = S.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, ka = S.p`
  ${tt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, tr = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Ve(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ M(Sa, { intent: e, children: /* @__PURE__ */ Q(Ca, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ M(Ma, { children: t }),
    /* @__PURE__ */ M(ka, { children: d })
  ] }) });
}, Da = S.div`
  min-width: ${Pe + "px"};
  max-width: ${Pe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, $a = S.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Pe}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Ea = S.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, _a = S.input`
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
`, Ta = S.div`
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
`, Pa = S.button`
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
`, Aa = S.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${me}px;
  height: calc(${me}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBorder + "33" : e.colors.border};
  background-color: ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBg : "transparent"};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Ia = S.div`
  display: flex;
  align-items: center;
`, Oa = S.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Ya = S.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, La = S.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, nr = S.p`
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
`, Ra = ({ id: e, item: n, rows: t, onItemClick: r, isSubcontract: o }) => /* @__PURE__ */ M(
  Aa,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ Q(Ia, { children: [
      /* @__PURE__ */ M(Oa, { children: n.icon ? /* @__PURE__ */ M(Ya, { src: n.icon, alt: "Icon" }) : /* @__PURE__ */ M(Le, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ Q(La, { children: [
        /* @__PURE__ */ M(nr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ M(nr, { children: n.subtitle })
      ] })
    ] })
  }
), Na = S.div`
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
`, Fa = S.div`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder : e.colors.accent};
  border-radius: 0 2px 2px 0;
`, Wa = S.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, Ha = S.span`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder : e.colors.accent};
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBorder + "18" : e.colors.accent + "14"};
  padding: 1px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  line-height: 1.4;
`, za = S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme: e }) => e.colors.placeholder};
  transition: transform 0.2s ease;
  transform: rotate(${({ $collapsed: e }) => e ? "-90deg" : "0deg"});
`, rr = ({
  label: e,
  count: n,
  isCollapsed: t,
  onToggle: r,
  variant: o = "category"
}) => /* @__PURE__ */ Q(Na, { $variant: o, onClick: r, title: e, children: [
  /* @__PURE__ */ M(Fa, { $variant: o }),
  /* @__PURE__ */ M(za, { $collapsed: t, children: /* @__PURE__ */ M("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ M(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ M(Wa, { $variant: o, children: e }),
  /* @__PURE__ */ M(Ha, { $variant: o, children: n })
] }), Ba = ({
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
  onExpandAll: v,
  onCollapseAll: y
}) => {
  const [C, h] = fe(!1), N = Ve(), K = () => h((X) => !X), B = n ? [...n].sort((X, $) => X.maxPassengers - $.maxPassengers) : [], P = B.length > 0, u = p.length > 0, m = u && l.size === p.length;
  u && l.size;
  const w = e.filter((X) => X.isSubcontract), _ = N.subcontract ?? "Subcontract", T = (X) => {
    const $ = e.indexOf(X);
    return /* @__PURE__ */ M(
      Ra,
      {
        id: X.id,
        item: X.label,
        rows: t[$],
        onItemClick: a,
        isSubcontract: X.isSubcontract
      },
      X.id
    );
  }, z = (X) => {
    const $ = e.filter(
      (L) => !L.isSubcontract && L.categoryId === X.id
    );
    if ($.length === 0)
      return null;
    const E = l.has(X.id), k = X.name;
    return /* @__PURE__ */ Q("div", { children: [
      /* @__PURE__ */ M(
        rr,
        {
          label: k,
          count: $.length,
          isCollapsed: E,
          onToggle: () => f(X.id),
          variant: "category"
        }
      ),
      !E && $.map(T)
    ] }, X.id);
  }, Z = e.filter(
    (X) => !X.isSubcontract && (!X.categoryId || !P)
  );
  return /* @__PURE__ */ Q(Da, { children: [
    /* @__PURE__ */ Q($a, { children: [
      /* @__PURE__ */ Q(Ea, { children: [
        /* @__PURE__ */ Q(Ta, { isFocused: C, children: [
          /* @__PURE__ */ M(
            _a,
            {
              placeholder: N.search,
              value: c,
              onChange: d,
              onFocus: K,
              onBlur: K
            }
          ),
          /* @__PURE__ */ M(Le, { iconName: "search" })
        ] }),
        u && /* @__PURE__ */ M(
          Pa,
          {
            title: m ? "Expand all" : "Collapse all",
            onClick: m ? v : y,
            $allCollapsed: m,
            children: /* @__PURE__ */ M("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: m ? /* @__PURE__ */ Q(ze, { children: [
              /* @__PURE__ */ M("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ M("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ Q(ze, { children: [
              /* @__PURE__ */ M("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ M("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ M(
        tr,
        {
          intent: "previous",
          isVisible: s !== 0,
          onClick: o,
          icon: /* @__PURE__ */ M(Le, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: s,
          pagesAmount: i
        }
      )
    ] }),
    P ? B.map(z) : Z.map(T),
    P && Z.length > 0 && Z.map(T),
    w.length > 0 && /* @__PURE__ */ Q(ze, { children: [
      /* @__PURE__ */ M(
        rr,
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
    /* @__PURE__ */ M(
      tr,
      {
        intent: "next",
        isVisible: s !== i - 1,
        onClick: r,
        icon: /* @__PURE__ */ M(Le, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: s,
        pagesAmount: i
      }
    )
  ] });
}, ja = S.div`
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
`, Za = Yt`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Va = S.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Za} 1s infinite;
`, Ga = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ M(ja, { position: n, children: /* @__PURE__ */ M(Va, {}) }) : null, pn = Ga, We = (e, n) => {
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
    bottomText: v,
    strokeStyle: y,
    labelBetweenCells: C
  } = e;
  if (t.beginPath(), t.strokeStyle = y ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), C ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const h = r + s / 2 - t.measureText(d).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.accent, t.fillText(d, h, c);
  }
  if (l && f && p && v) {
    t.fillStyle = f, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = p.font;
    const h = r + s / 2 - t.measureText(p.label).width / 2;
    t.fillStyle = p.color, t.fillText(p.label, h, p.y), t.font = v.font;
    const N = r + s / 2 - t.measureText(v.label).width / 2;
    t.fillStyle = v.color, t.fillText(v.label, N, v.y);
  }
}, Qr = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t ? n.colors.currentDay : r ? n.colors.primary : n.colors.secondary;
}, mn = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, Xa = (e, n, t, r) => {
  const o = ut - Ue / us, s = ut - Ue / fs, i = Fe + mt;
  let c = 0;
  for (let d = 0; d < n; d++) {
    const a = Br(
      D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    );
    We(
      {
        ctx: e,
        x: c,
        y: i,
        width: Se,
        height: Ue,
        isBottomRow: !0,
        fillStyle: Qr(
          {
            isCurrent: a.isCurrentDay,
            isBusinessDay: a.isBusinessDay
          },
          r
        ),
        topText: {
          y: o,
          label: a.dayName.toUpperCase(),
          font: Ye.bottomRow.name,
          color: mn(
            { isCurrent: a.isCurrentDay, isBusinessDay: a.isBusinessDay },
            r
          )
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: Ye.bottomRow.number,
          color: mn(
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
    ), c += Se;
  }
}, Ua = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Ie;
  const s = Fe;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= Qt && (c = 0);
    const a = zr(t, d) * Ie;
    We(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: mt,
        textYPos: Hr,
        label: D().month(c).format("MMMM").toUpperCase(),
        font: Ye.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, Ka = (e, n, t) => {
  let o = 0, s = 0, i = D(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * Se + Se;
  for (let c = 0; c < Qt; c++)
    i > Qt - 1 && (i = 0), s = D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * Se, We(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Fe,
        textYPos: Sn,
        label: D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM").toUpperCase() + `                                                                                                  ${D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM").toUpperCase()}`,
        font: Ye.topRow
      },
      t
    ), o += s, i++;
}, Ja = (e, n, t, r) => {
  const o = 7 * Se, s = Fe, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % Vn;
    f <= 0 && (f += Vn), l !== 1 && a === 0 && (d = -l * Se + Se), We(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: mt,
        textYPos: Hr,
        label: `${t.toUpperCase()} ${f}`,
        font: Ye.middleRow
      },
      r
    ), d += o;
  }
}, qa = (e, n, t, r, o) => {
  const s = ut - Ue / 1.6, i = ut - Ue / 4.5, c = Fe + mt;
  let d = 0;
  for (let a = 0; a < n; a++) {
    const l = D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame(D(), "week");
    We(
      {
        ctx: e,
        x: d,
        y: c,
        width: ft,
        height: Ue,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : Qr({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: f ? "700 14px Inter" : Ye.bottomRow.name,
          color: f ? o.colors.today : mn({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: r.toUpperCase(),
          font: Ye.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += ft;
  }
}, Qa = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (Un(s) - t + 1) * Ie, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = Un(s + d) * Ie), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ie) * Ie), We(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Fe,
        textYPos: Sn,
        label: (s + d).toString(),
        font: Ye.topRow
      },
      r
    ), c += a, l += a, d++;
}, ec = (e, n, t, r) => {
  const o = Math.floor(n / At) + 2, s = At * Ee;
  let d = -D(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ee + 0.5 * Ee;
  for (let a = 0; a < o; a++) {
    const l = D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    We(
      {
        ctx: e,
        x: d,
        y: ht,
        width: s,
        height: xt,
        textYPos: ht + xt / 2 + 2,
        label: l,
        font: Ye.bottomRow.number
      },
      r
    ), d += s;
  }
}, tc = (e, n, t, r) => {
  const o = Math.ceil(n / At), s = D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * Ee;
  for (let f = 0; f < a; f++) {
    const p = D(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), y = D(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), C = y.format("MMMM").toUpperCase(), h = y.diff(p, "hour") + 1, N = f === 0 ? h * Ee : n * Ee;
    We(
      {
        ctx: e,
        x: l,
        y: 0,
        width: N,
        height: ht,
        textYPos: Sn,
        label: C,
        font: Ye.topRow
      },
      r
    ), l += N;
  }
}, nc = (e, n, t, r) => {
  let o = 0;
  const s = ht + xt, i = D(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Ee;
  for (let d = 0; d < n; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    We(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: qt,
        label: a,
        font: Ye.bottomRow.hoursInDay,
        textYPos: ht + xt + qt / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += Ee;
  }
}, rc = (e, n, t, r, o, s, i) => {
  switch (n) {
    case 0:
      Qa(e, r, s, i), Ua(e, t, r, i), qa(e, t, r, o, i);
      break;
    case 1:
      Ka(e, r, i), Ja(e, r, o, i), Xa(e, t, r, i);
      break;
    case 2:
      tc(e, t, r, i), ec(e, t, r, i), nc(e, t, r, i);
      break;
  }
}, oc = S.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, sc = S.div`
  height: ${ut}px;
  display: block;
`, ic = S.canvas``, ac = ({ zoom: e, topBarWidth: n, showThemeToggle: t, toggleTheme: r }) => {
  const { week: o } = Ve(), { date: s, cols: i, dayOfYear: c, startDate: d, config: a } = Ze(), l = we(null), f = et(), p = le(
    (v) => {
      const y = $n(), h = (e === 2 ? ds : ut) + 1;
      Vr(v, y, h), rc(v, e, i, d, o, c, f);
    },
    [i, c, d, o, e, f]
  );
  return xe(() => {
    if (!l.current)
      return;
    const v = l.current.getContext("2d");
    if (!v)
      return;
    const y = () => p(v);
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, [p]), xe(() => {
    const v = l.current;
    if (!v)
      return;
    v.style.letterSpacing = "1px";
    const y = v.getContext("2d");
    y && p(y);
  }, [s, e, p]), /* @__PURE__ */ Q(oc, { children: [
    a.showTopbar !== !1 && /* @__PURE__ */ M(ta, { width: n, showThemeToggle: t, toggleTheme: r }),
    /* @__PURE__ */ M(sc, { id: hs, children: /* @__PURE__ */ M(ic, { ref: l }) })
  ] });
}, cc = (e, n, t) => {
  let r;
  switch (t) {
    case 0:
      r = Ie;
      break;
    case 2:
      r = Ee;
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
}, lc = (e, n, t, r, o, s) => {
  const i = e * me + ps, c = n.hour(), d = t.hour();
  let a, l, f, p;
  switch (s) {
    case 2: {
      a = D(r), l = D(o), f = D(n).hour(c).minute(0), p = D(t).hour(d).minute(0);
      break;
    }
    default: {
      a = D(r).hour(0).minute(0), l = D(o).hour(23).minute(59), f = n, p = t;
      break;
    }
  }
  return {
    ...cc(
      { startDate: a, endDate: l },
      { startDate: f, endDate: p },
      s
    ),
    y: i
  };
}, eo = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, or = S.button`
  ${tt}
  height: ${wn}px;
  position: absolute;
  outline: none;
  border: ${({ $dashed: e }) => e ? "1.5px dashed rgba(255, 255, 255, 0.75)" : "none"};
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: e }) => e.colors.textPrimary};
  width: 100%;
  cursor: ${({ isDraggable: e, isDragging: n }) => e ? n ? "grabbing" : "grab" : "not-allowed"};
  opacity: ${({ isDragging: e }) => e ? 0.3 : 1};
  transition: opacity 0.2s ease;
`;
S.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
S.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;
S.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  color: ${({ $type: e }) => "#374151"};
  font-size: 9px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 3px;
  letter-spacing: 0.3px;
  line-height: 1;
  border-left: 2px solid ${({ $type: e }) => e === "tour" ? "#10b981" : "#3b82f6"};
  white-space: nowrap;
`;
S.p`
  ${tt}
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
S.p`
  ${tt}
  ${pt}
`;
S.div`
  position: sticky;
  left: ${Pe + 16}px;
  overflow: hidden;
`;
const sr = S.span`
  font-size: 12px;
  line-height: 1;
  flex-shrink: 0;
  opacity: 0.95;
`, dc = S.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 4px 0 0 4px;
  pointer-events: none;
`, uc = S.div`
  position: absolute;
  top: 3px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 3px;
  pointer-events: none;
`, fc = S.span`
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.4px;
  line-height: 1;
  padding: 2px 3px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
`, hc = S.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.9);
`, pc = S.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  padding: 0 2px;
  overflow: hidden;
`, mc = S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.2px;
  font-variant-numeric: tabular-nums;
`, gc = S.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 8px;
  min-width: 0;
  overflow: hidden;
`, yc = S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  gap: 1px;
`, zt = S.span`
  ${pt}
  font-size: ${({ bold: e }) => e ? "11px" : "9px"};
  font-weight: ${({ bold: e }) => e ? "700" : "500"};
  line-height: 1.25;
  letter-spacing: 0.2px;
  opacity: ${({ bold: e }) => e ? 1 : 0.9};
`;
S.span`
  ${pt}
  font-size: 10px;
  font-weight: 600;
  min-width: 0;
  flex: 1;
`;
S.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ $type: e }) => e === "tour" ? "#15803d" : "#1d4ed8"};
  font-size: 9px;
  font-weight: 700;
  padding: 3px 5px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  flex-shrink: 0;
  line-height: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
`;
S.span`
  font-size: 10px;
  line-height: 1;
`;
S.div`
  display: flex;
  overflow: hidden;
  min-width: 0;
`;
const vc = 34, bc = 90, xc = 150, ir = {
  sin_chofer: "#9AA5A0",
  sin_avisar: "#E0A83C",
  notificado: "#3B82F6",
  confirmado: "#2FA36B"
}, wc = "#3E8E5A", Sc = "#9AA5A0", Cc = ({
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
  const { date: a } = Ze(), l = Dn(a, t), { y: f, x: p, width: v } = lc(
    e,
    l.startDate,
    l.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: y } = et(), C = we(null), h = D(n.startDate).isSame(D(n.endDate), "day"), N = n.eventType === wt.Tour, K = n.eventType === wt.Transfer, B = h && (N || K), P = K ? "⇄" : B ? "☀" : "▦", u = (Z) => {
    C.current = { x: Z.clientX, y: Z.clientY }, c && s && (Z.preventDefault(), s(n, Z));
  }, m = (Z) => {
    if (C.current) {
      const X = Math.abs(Z.clientX - C.current.x), $ = Math.abs(Z.clientY - C.current.y);
      Math.sqrt(X * X + $ * $) <= 5 && (o == null || o(n)), C.current = null;
    } else
      o == null || o(n);
  }, w = {
    left: `${p}px`,
    top: `${f + d}px`,
    backgroundColor: `${n.bgColor ?? y.defaultTile}`,
    width: `${v}px`,
    color: eo(n.bgColor ?? "")
  }, _ = r && n.subcontractConfirmed === !1, T = r ? n.subcontractConfirmed === !1 ? Sc : wc : n.readiness ? ir[n.readiness] : void 0, z = /* @__PURE__ */ Q(ze, { children: [
    T && /* @__PURE__ */ M(dc, { style: { background: T } }),
    /* @__PURE__ */ M(uc, { children: r ? /* @__PURE__ */ M(fc, { children: "SUB" }) : n.readiness && /* @__PURE__ */ M(hc, { style: { background: ir[n.readiness] } }) })
  ] });
  return B ? /* @__PURE__ */ Q(
    or,
    {
      "data-segment-id": n.segmentId,
      style: w,
      onClick: m,
      onMouseDown: u,
      onDragStart: (Z) => Z.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $dashed: _,
      children: [
        z,
        /* @__PURE__ */ Q(pc, { children: [
          /* @__PURE__ */ M(sr, { children: P }),
          v >= vc && /* @__PURE__ */ Q(mc, { children: [
            /* @__PURE__ */ M("span", { children: D(n.startDate).format("HH:mm") }),
            !K && /* @__PURE__ */ M("span", { children: D(n.endDate).format("HH:mm") })
          ] })
        ] })
      ]
    }
  ) : /* @__PURE__ */ Q(
    or,
    {
      "data-segment-id": n.segmentId,
      style: w,
      onClick: m,
      onMouseDown: u,
      onDragStart: (Z) => Z.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $dashed: _,
      children: [
        z,
        /* @__PURE__ */ Q(gc, { children: [
          /* @__PURE__ */ M(sr, { children: P }),
          /* @__PURE__ */ Q(yc, { children: [
            /* @__PURE__ */ M(zt, { bold: !0, children: n.title }),
            v >= bc && n.subtitle && /* @__PURE__ */ M(zt, { children: n.subtitle }),
            v >= xc && n.driver && /* @__PURE__ */ M(zt, { children: n.driver })
          ] })
        ] })
      ]
    }
  );
}, Mc = (e, n) => {
  let t = 0;
  for (const r of n)
    e >= r && t++;
  return t * Te;
}, kc = ({
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
    return e.map((a, l) => (l > 0 && (d += Math.max(e[l - 1].data.length, 1)), a.data.map(
      (f, p) => f.map((v) => {
        const y = s === v.segmentId, C = o ? o(v) : !1, h = p + d, N = Mc(h, i);
        return /* @__PURE__ */ M(
          Cc,
          {
            row: h,
            data: v,
            zoom: n,
            isSubcontract: a.isSubcontract,
            onTileClick: t,
            onDragStart: r,
            isDragging: y,
            isDraggable: C,
            yOffset: N
          },
          v.segmentId
        );
      })
    ))).flat(2);
  }, [e, t, n, r, o, s, i]);
  return /* @__PURE__ */ M(ze, { children: c() });
}, Dc = kc;
S.div`
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
S.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
S.label`
  font-size: 14px;
`;
S.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
S.input`
  height: 18px;
  width: 18px;
`;
S.button`
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
S.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const $c = S.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, Ec = S.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, _c = S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, Tc = S.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, Pc = S.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, Ac = S.div`
  ${tt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Ic = S.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, Oc = S.div`
  padding: 10px 12px;
`, Yc = S.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, ar = S.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, cr = S.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, lr = S.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, dr = S.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ur = S.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Lc = S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Rc = S.div``, Nc = S.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Fc = S.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Wc = S.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, fr = S.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, hr = S.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, pr = S.div`
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
S.div``;
S.span``;
S.span``;
S.div``;
S.div``;
S.span``;
S.span``;
S.div``;
S.div``;
S.span``;
S.span``;
S.div``;
S.div``;
S.div``;
S.span``;
S.div``;
S.div``;
S.div``;
S.div``;
S.p``;
S.span``;
const Hc = {
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
}, zc = ({ tooltipData: e }) => {
  const { mouseCoords: n, reservationData: t } = e, r = we(null), [o, s] = fe("below"), i = Ve(), c = { ...Hc, ...i.tooltip };
  Sr(() => {
    if (!r.current || !n)
      return;
    const v = r.current, { width: y, height: C } = v.getBoundingClientRect(), h = v.parentElement;
    if (!h)
      return;
    const N = h.getBoundingClientRect(), K = 12, B = 4, P = N.height - n.y, u = N.width - n.x;
    let m = n.x + K, w = n.y + K, _ = "below";
    u < y + K && (m = n.x - y - K), P < C + K && (w = n.y - C - K, _ = "above"), m = Math.max(B, Math.min(m, N.width - y - B)), w = Math.max(B, Math.min(w, N.height - C - B)), s(_), v.style.left = `${m}px`, v.style.top = `${w}px`;
  }, [n]);
  const d = t.reservationType === wt.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, p = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ Q($c, { ref: r, $position: o, children: [
    /* @__PURE__ */ Q(Ec, { children: [
      /* @__PURE__ */ Q(_c, { children: [
        /* @__PURE__ */ M(Tc, { children: t.bookingNumber }),
        /* @__PURE__ */ M(Pc, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ M(Ac, { children: t.eventName }),
      t.client && /* @__PURE__ */ M(Ic, { children: t.client })
    ] }),
    /* @__PURE__ */ Q(Oc, { children: [
      /* @__PURE__ */ Q(Yc, { children: [
        /* @__PURE__ */ Q(ar, { children: [
          /* @__PURE__ */ M(cr, { children: c.startDate }),
          /* @__PURE__ */ Q(lr, { children: [
            /* @__PURE__ */ M(dr, { children: t.startDate }),
            " ",
            /* @__PURE__ */ M(ur, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ Q(ar, { $isEnd: !0, children: [
          /* @__PURE__ */ M(cr, { children: c.endDate }),
          /* @__PURE__ */ Q(lr, { children: [
            /* @__PURE__ */ M(dr, { children: t.endDate }),
            " ",
            /* @__PURE__ */ M(ur, { children: t.endTime })
          ] })
        ] })
      ] }),
      p.length > 0 && /* @__PURE__ */ M(Lc, { children: p.map((v, y) => /* @__PURE__ */ Q(Rc, { children: [
        /* @__PURE__ */ M(Nc, { children: v.label }),
        /* @__PURE__ */ M(Fc, { children: v.value })
      ] }, y)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ Q(Wc, { children: [
        t.serviceNotes && /* @__PURE__ */ Q(fr, { children: [
          /* @__PURE__ */ M(hr, { children: c.serviceNotes }),
          /* @__PURE__ */ M(pr, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ Q(fr, { children: [
          /* @__PURE__ */ M(hr, { children: c.reservationNotes }),
          /* @__PURE__ */ M(pr, { children: t.reservationNotes })
        ] })
      ] })
    ] })
  ] });
}, Bc = S.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, jc = S.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, Zc = S.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, Vc = ({ toggleTheme: e }) => {
  const n = et();
  return /* @__PURE__ */ Q(Bc, { onClick: e, children: [
    /* @__PURE__ */ M(jc, {}),
    /* @__PURE__ */ M(Zc, { children: n.mode === "light" ? /* @__PURE__ */ M(Le, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ M(Le, { iconName: "moon", height: "16", width: "16" }) })
  ] });
}, Gc = S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Xc = S.div`
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
`, Uc = S.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, mr = S.p`
  ${tt}
  ${pt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Kc = S.p`
  ${tt}
  ${pt}
`, Jc = S.div`
  position: sticky;
  left: ${Pe + 16}px;
  overflow: hidden;
`, qc = S.div`
  position: absolute;
  height: ${wn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Qc = S.div`
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
`, el = S.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, tl = S.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, nl = S.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, gr = S.div`
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
`, yr = S.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, vr = S.div`
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
`, br = S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, Bt = S.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, jt = S.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, ot = S.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, xr = S.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, rl = ({
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
    return P * me + u * Te;
  }, [f, p] = fe(null), [v, y] = fe(0), C = le((P = 400, u = 300) => {
    const w = t.width, _ = 48, T = document.getElementById("react-scheduler");
    if (!T)
      return {
        x: n.x + w + 16,
        y: n.y
      };
    const z = T.scrollLeft, Z = T.scrollTop, X = T.clientWidth, $ = T.clientHeight, E = n.x - z, k = n.y - Z, L = {
      left: Pe + 16,
      // Avoid left column
      right: X - 16,
      top: 16,
      bottom: $ - 16
    }, I = L.right - (E + w), J = E - L.left, ee = L.bottom - (k + _), se = k - L.top;
    let oe, H;
    return I >= P + 16 ? oe = E + w + 16 : J >= P + 16 ? oe = E - P - 16 : I >= J ? (oe = E + w + 16, oe + P > L.right && (oe = L.right - P)) : (oe = E - P - 16, oe < L.left && (oe = L.left)), ee >= u + 16 ? H = k + _ + 16 : se >= u + 16 ? H = k - u - 16 : ee >= se ? (H = k + _ + 16, H + u > L.bottom && (H = L.bottom - u)) : (H = k - u - 16, H < L.top && (H = L.top)), oe = Math.max(L.left, Math.min(oe, L.right - P)), H = Math.max(L.top, Math.min(H, L.bottom - u)), {
      x: oe + z,
      y: H + Z
    };
  }, [n.x, n.y, t.width]);
  xe(() => {
    s === "dragging" && e && v === 0 ? y(n.x) : s === "idle" && y(0);
  }, [s, e, n.x, v]), xe(() => {
    p(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const h = De(() => {
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
  const N = s === "animating", K = eo(e.bgColor ?? ""), B = () => {
    if (!r)
      return "";
    const P = D(r.startDate).format("MMM D, HH:mm"), u = D(r.endDate).format("HH:mm");
    return `${P} - ${u}`;
  };
  return /* @__PURE__ */ Q(Gc, { children: [
    h.map((P) => /* @__PURE__ */ M(
      tl,
      {
        style: {
          top: `${l(P)}px`,
          height: `${me}px`
        }
      },
      P
    )),
    r && s === "dragging" && /* @__PURE__ */ M(
      el,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${me}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ Q(ze, { children: [
      /* @__PURE__ */ M(
        qc,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (me - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ M(
        Qc,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (me - 48) / 2}px`
          },
          children: B()
        }
      )
    ] }),
    r && s === "dragging" && c && /* @__PURE__ */ M(
      nl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          left: "0px",
          top: `${l(r.resourceIndex)}px`,
          height: `${me}px`
        }
      }
    ),
    r && o && r.hasConflict && r.conflicts && r.conflicts.length > 0 && s === "dragging" && (() => {
      const P = C(400, 300);
      return /* @__PURE__ */ Q(
        gr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`
          },
          children: [
            /* @__PURE__ */ Q(yr, { children: [
              /* @__PURE__ */ M(vr, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ M(br, { children: r.conflicts.map((u, m) => {
              const w = D(r.startDate).format("YYYY-MM-DD"), _ = D(r.endDate).format("YYYY-MM-DD"), T = D(u.event.startDate).format("YYYY-MM-DD"), z = D(u.event.endDate).format("YYYY-MM-DD"), Z = D(u.conflictStart).format("YYYY-MM-DD"), X = D(u.conflictEnd).format("YYYY-MM-DD"), $ = w !== _, E = T !== z, k = Z !== X, L = $ ? D(r.startDate).format("MMM D, h:mm A") : D(r.startDate).format("h:mm A"), I = $ ? D(r.endDate).format("MMM D, h:mm A") : D(r.endDate).format("h:mm A"), J = E ? D(u.event.startDate).format("MMM D, h:mm A") : D(u.event.startDate).format("h:mm A"), ee = E ? D(u.event.endDate).format("MMM D, h:mm A") : D(u.event.endDate).format("h:mm A"), se = k ? D(u.conflictStart).format("MMM D, h:mm A") : D(u.conflictStart).format("h:mm A"), oe = k ? D(u.conflictEnd).format("MMM D, h:mm A") : D(u.conflictEnd).format("h:mm A"), H = k ? "" : D(u.conflictStart).format("MMM D"), j = r.startDate.getTime(), V = r.endDate.getTime(), G = u.event.startDate.getTime(), b = u.event.endDate.getTime(), R = j >= G && j < b, g = V > G && V <= b, O = j <= G && V >= b, W = G <= j && b >= V;
              let A = !1, x = !1, q = !1, Y = !1, U = "";
              return O || W ? (A = !0, x = !0, q = !0, Y = !0, U = `⚠️ ${a.conflicts.changeBoth}`) : R && g ? (A = !0, x = !0, q = !0, Y = !0, U = `⚠️ ${a.conflicts.changeBoth}`) : R ? (A = !0, Y = !0, U = `⚠️ ${a.conflicts.changeStart}`) : g && (x = !0, q = !0, U = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ Q(Bt, { children: [
                /* @__PURE__ */ Q(jt, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ Q(ot, { children: [
                  /* @__PURE__ */ M("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  A ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: L }) : L,
                  " ",
                  a.conflicts.to,
                  " ",
                  x ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
                ] }),
                /* @__PURE__ */ Q(ot, { children: [
                  /* @__PURE__ */ M("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  q ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: J }) : J,
                  " ",
                  a.conflicts.to,
                  " ",
                  Y ? /* @__PURE__ */ M("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ee }) : ee
                ] }),
                /* @__PURE__ */ Q(xr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  H && `${H}, `,
                  se,
                  " - ",
                  oe
                ] }),
                U && /* @__PURE__ */ M(ot, { style: {
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
      const P = C(400, 400);
      return /* @__PURE__ */ Q(
        gr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ Q(yr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ M(vr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ Q(br, { children: [
              (() => {
                const u = r.nearbyEvents.some((T) => T.position === "before"), m = r.nearbyEvents.some((T) => T.position === "after"), w = D(r.startDate).format("h:mm A"), _ = D(r.endDate).format("h:mm A");
                return /* @__PURE__ */ Q(Bt, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ Q(jt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ Q(ot, { style: { fontWeight: 600 }, children: [
                    D(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    m ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: _ }) : _
                  ] }),
                  /* @__PURE__ */ M(ot, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              r.nearbyEvents.map((u, m) => {
                const w = D(u.event.startDate).format("YYYY-MM-DD"), _ = D(u.event.endDate).format("YYYY-MM-DD"), T = w !== _, z = T ? D(u.event.startDate).format("MMM D, h:mm A") : D(u.event.startDate).format("h:mm A"), Z = T ? D(u.event.endDate).format("MMM D, h:mm A") : D(u.event.endDate).format("h:mm A"), X = D(u.event.startDate).format("MMM D"), $ = Math.floor(u.timeGap / (1e3 * 60 * 60)), E = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), k = $ > 0 ? `${$}h ${E}m` : `${E}m`, L = u.position === "after", I = u.position === "before";
                return /* @__PURE__ */ Q(Bt, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ Q(jt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ Q(ot, { children: [
                    !T && `${X}: `,
                    L ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: z }) : z,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ M("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: Z }) : Z
                  ] }),
                  /* @__PURE__ */ Q(xr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    k,
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
    /* @__PURE__ */ M(
      Xc,
      {
        $isAnimating: N,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: N ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: N ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: N ? void 0 : `translate3d(${c ? v : n.x}px, ${n.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: K
        },
        children: /* @__PURE__ */ M(Uc, { children: /* @__PURE__ */ Q(Jc, { children: [
          /* @__PURE__ */ M(mr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ M(mr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ M(Kc, { children: e.description })
        ] }) })
      }
    )
  ] });
}, ol = rl, sl = Yt`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, il = S.div`
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
  animation: ${sl} 1.5s ease-in-out infinite;
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
`, al = ({ selectionBox: e, isSelecting: n }) => !e || !n ? null : /* @__PURE__ */ M(
  il,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), cl = al, ll = Yt`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, dl = S.div`
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
  animation: ${ll} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, ul = S.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, fl = S.span`
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
`, hl = S.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, pl = S.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;
S.div`
  display: none;
`;
S.div`
  display: none;
`;
S.button`
  display: none;
`;
const ml = S.div`
  display: flex;
  gap: 8px;
`, wr = S.button`
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
`, gl = ({ selections: e, onConfirm: n, onClear: t }) => {
  var y;
  const o = Ve().multiSelect, s = De(() => e.filter((C) => C.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((y = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : y.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const p = s > 0, v = /* @__PURE__ */ Q(dl, { $hasConflicts: p, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ Q(ul, { children: [
      /* @__PURE__ */ Q(fl, { $hasConflicts: p, children: [
        e.length,
        " ",
        i
      ] }),
      p && /* @__PURE__ */ Q(hl, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ M(pl, { children: c })
    ] }),
    /* @__PURE__ */ Q(ml, { children: [
      /* @__PURE__ */ Q(wr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ M(wr, { variant: "primary", $hasConflicts: p, onClick: n, children: p ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return ao(v, document.body);
}, yl = gl, vl = Yt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, bl = S.div`
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
  animation: ${vl} 0.2s ease-out;
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
`, xl = S.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, wl = S.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Sl = S.button`
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
`, Cl = ({
  selections: e,
  data: n,
  zoom: t,
  startDate: r,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, d] = fe(null), [a, l] = fe({ x: 0, y: 0 }), f = we(null), p = De(() => {
    switch (t) {
      case 0:
        return Ie * 7;
      case 1:
        return Se;
      case 2:
        return Ee;
      default:
        return Se;
    }
  }, [t]), v = De(() => D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), y = De(() => e.map((m, w) => {
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
    const z = D(m.startDate), Z = D(m.endDate);
    let X, $;
    switch (t) {
      case 0:
        X = Math.floor(z.diff(v, "days") / 7), $ = Math.max(1, Math.ceil(Z.diff(z, "days") / 7) + 1);
        break;
      case 1:
        X = z.diff(v, "days"), $ = Math.max(1, Z.diff(z, "days") + 1);
        break;
      case 2:
        X = z.diff(v, "hours"), $ = Math.max(1, Z.diff(z, "hours") + 1);
        break;
      default:
        X = 0, $ = 1;
    }
    const E = X * p;
    let k = 0;
    for (const J of i)
      J <= _ && k++;
    const L = _ * me + k * Te, I = $ * p;
    return {
      index: w,
      selection: m,
      x: E,
      y: L,
      width: I,
      height: me
    };
  }), [e, n, t, v, p]), C = (m, w) => {
    const _ = D(m).format("MMM D"), T = D(w).format("MMM D");
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
        if (m >= w * me && m < (w + T) * me)
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
          return v.add(w * 7, "days").toDate();
        case 1:
          return v.add(w, "days").toDate();
        case 2:
          return v.add(w, "hours").toDate();
        default:
          return v.toDate();
      }
    },
    [t, v, p]
  ), B = le(
    (m, w) => {
      !s || (m.preventDefault(), m.stopPropagation(), !y[w]) || (f.current = { x: m.clientX, y: m.clientY }, d(w), l({ x: 0, y: 0 }));
    },
    [s, y]
  ), P = le(
    (m) => {
      if (c === null || !f.current)
        return;
      const w = m.clientX - f.current.x, _ = m.clientY - f.current.y, T = Math.round(w / p) * p, z = Math.round(_ / me) * me;
      l({ x: T, y: z });
    },
    [c, p]
  ), u = le(() => {
    if (c === null || !s) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const m = y[c];
    if (!m) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const w = m.x + a.x, _ = m.y + a.y, T = N(_ + me / 2);
    if (!T) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const z = K(w), Z = e[c], X = Z.endDate.getTime() - Z.startDate.getTime(), $ = new Date(z.getTime() + X);
    s(c, {
      startDate: z,
      endDate: $,
      resourceId: T.resourceId,
      resourceLabel: T.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, y, e, s, N, K]);
  return xe(() => {
    if (c !== null)
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", u);
      };
  }, [c, P, u]), /* @__PURE__ */ M(ze, { children: y.map((m) => {
    if (!m)
      return null;
    const w = m.selection.hasConflict || !1, _ = c === m.index, T = _ ? m.x + a.x : m.x, z = _ ? m.y + a.y : m.y;
    return /* @__PURE__ */ Q(
      bl,
      {
        $hasConflict: w,
        $isDragging: _,
        style: {
          left: T,
          top: z,
          width: m.width,
          height: m.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (Z) => B(Z, m.index),
        children: [
          w && /* @__PURE__ */ M(wl, { title: h(m.selection), children: "⚠️" }),
          /* @__PURE__ */ M(xl, { $hasConflict: w, children: C(m.selection.startDate, m.selection.endDate) }),
          /* @__PURE__ */ M(
            Sl,
            {
              onClick: (Z) => {
                Z.stopPropagation(), o(m.index);
              },
              onMouseDown: (Z) => Z.stopPropagation(),
              title: w ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      m.index
    );
  }) });
}, Ml = Cl, kl = S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 2px solid ${({ theme: e }) => e.colors.today};
  box-shadow: inset 0 3px 0 0 ${({ theme: e }) => e.colors.today}, 0 0 10px ${({ theme: e }) => e.colors.today}33;
  background: ${({ theme: e }) => e.colors.today}12;
  border-radius: 0 0 2px 2px;
`, Dl = ({ zoom: e, startDate: n }) => {
  const { cols: t } = Ze(), r = De(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Ie * 7 : Se, s = D().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = D().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ M(kl, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, $l = Dl;
export {
  Al as Scheduler
};
