var uo = Object.defineProperty;
var fo = (e, n, t) => n in e ? uo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Tn = (e, n, t) => (fo(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as y, jsxs as X, Fragment as De } from "react/jsx-runtime";
import * as re from "react";
import Je, { useRef as we, useContext as Ze, useMemo as $e, useLayoutEffect as _r, useDebugValue as Pn, createElement as ho, createContext as Tr, useState as fe, useCallback as le, useEffect as be, forwardRef as Pr, useImperativeHandle as Ar } from "react";
import { createPortal as po } from "react-dom";
var Ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bt = {}, mo = {
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
var An;
function go() {
  if (An)
    return ge;
  An = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
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
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === r || h === a || h === l || h === v || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === f || h.$$typeof === s || h.$$typeof === i || h.$$typeof === d || h.$$typeof === g || h.getModuleId !== void 0);
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
var In;
function yo() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, M = !1, h = !1, N = !1, J = !1, z;
    z = Symbol.for("react.module.reference");
    function P(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === t || O === o || J || O === r || O === a || O === l || N || O === v || g || M || h || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === f || O.$$typeof === s || O.$$typeof === i || O.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === z || O.getModuleId !== void 0));
    }
    function u(O) {
      if (typeof O == "object" && O !== null) {
        var K = O.$$typeof;
        switch (K) {
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
                    return K;
                }
            }
          case n:
            return K;
        }
      }
    }
    var m = i, w = s, _ = e, T = d, B = t, U = p, G = f, k = n, $ = o, D = r, L = a, I = l, q = !1, ee = !1;
    function se(O) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(O) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(O) {
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
    function x(O) {
      return u(O) === f;
    }
    function Y(O) {
      return u(O) === n;
    }
    function H(O) {
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
    ye.ContextConsumer = m, ye.ContextProvider = w, ye.Element = _, ye.ForwardRef = T, ye.Fragment = B, ye.Lazy = U, ye.Memo = G, ye.Portal = k, ye.Profiler = $, ye.StrictMode = D, ye.Suspense = L, ye.SuspenseList = I, ye.isAsyncMode = se, ye.isConcurrentMode = oe, ye.isContextConsumer = F, ye.isContextProvider = j, ye.isElement = Z, ye.isForwardRef = V, ye.isFragment = b, ye.isLazy = R, ye.isMemo = x, ye.isPortal = Y, ye.isProfiler = H, ye.isStrictMode = A, ye.isSuspense = S, ye.isSuspenseList = Q, ye.isValidElementType = P, ye.typeOf = u;
  }()), ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = go() : e.exports = yo();
})(mo);
function vo(e) {
  function n(F, j, Z, V, b) {
    for (var R = 0, x = 0, Y = 0, H = 0, A, S, Q = 0, O = 0, K, te = K = A = 0, W = 0, ie = 0, me = 0, ue = 0, ae = Z.length, de = ae - 1, ce, ne = "", pe = "", Me = "", Ae = "", Te; W < ae; ) {
      if (S = Z.charCodeAt(W), W === de && x + H + Y + R !== 0 && (x !== 0 && (S = x === 47 ? 10 : 47), H = Y = R = 0, ae++, de++), x + H + Y + R === 0) {
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
            for (ne = ne.trim(), A = ne.charCodeAt(0), K = 1, ue = ++W; W < ae; ) {
              switch (S = Z.charCodeAt(W)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
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
              if (K === 0)
                break;
              W++;
            }
            switch (K = Z.substring(ue, W), A === 0 && (A = (ne = ne.replace(f, "").trim()).charCodeAt(0)), A) {
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
                if (K = n(j, ie, K, S, b + 1), ue = K.length, 0 < q && (ie = t(L, ne, me), Te = c(3, K, ie, j, k, G, ue, S, b, V), ne = ie.join(""), Te !== void 0 && (ue = (K = Te.trim()).length) === 0 && (S = 0, K = "")), 0 < ue)
                  switch (S) {
                    case 115:
                      ne = ne.replace(m, i);
                    case 100:
                    case 109:
                    case 45:
                      K = ne + "{" + K + "}";
                      break;
                    case 107:
                      ne = ne.replace(J, "$1 $2"), K = ne + "{" + K + "}", K = D === 1 || D === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                      break;
                    default:
                      K = ne + K, V === 112 && (K = (pe += K, ""));
                  }
                else
                  K = "";
                break;
              default:
                K = n(j, t(j, ne, me), K, V, b + 1);
            }
            Me += K, K = me = ie = te = A = 0, ne = "", S = Z.charCodeAt(++W);
            break;
          case 125:
          case 59:
            if (ne = (0 < ie ? ne.replace(p, "") : ne).trim(), 1 < (ue = ne.length))
              switch (te === 0 && (A = ne.charCodeAt(0), A === 45 || 96 < A && 123 > A) && (ue = (ne = ne.replace(" ", ":")).length), 0 < q && (Te = c(1, ne, j, F, k, G, pe.length, V, b, V)) !== void 0 && (ue = (ne = Te.trim()).length) === 0 && (ne = "\0\0"), A = ne.charCodeAt(0), S = ne.charCodeAt(1), A) {
                case 0:
                  break;
                case 64:
                  if (S === 105 || S === 99) {
                    Ae += ne + Z.charAt(W);
                    break;
                  }
                default:
                  ne.charCodeAt(ue - 1) !== 58 && (pe += o(ne, A, S, ne.charCodeAt(2)));
              }
            me = ie = te = A = 0, ne = "", S = Z.charCodeAt(++W);
        }
      }
      switch (S) {
        case 13:
        case 10:
          x === 47 ? x = 0 : 1 + A === 0 && V !== 107 && 0 < ne.length && (ie = 1, ne += "\0"), 0 < q * se && c(0, ne, j, F, k, G, pe.length, V, b, V), G = 1, k++;
          break;
        case 59:
        case 125:
          if (x + H + Y + R === 0) {
            G++;
            break;
          }
        default:
          switch (G++, ce = Z.charAt(W), S) {
            case 9:
            case 32:
              if (H + R + x === 0)
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
              H + x + R === 0 && (ie = me = 1, ce = "\f" + ce);
              break;
            case 108:
              if (H + x + R + $ === 0 && 0 < te)
                switch (W - te) {
                  case 2:
                    Q === 112 && Z.charCodeAt(W - 3) === 58 && ($ = Q);
                  case 8:
                    O === 111 && ($ = O);
                }
              break;
            case 58:
              H + x + R === 0 && (te = W);
              break;
            case 44:
              x + Y + H + R === 0 && (ie = 1, ce += "\r");
              break;
            case 34:
            case 39:
              x === 0 && (H = H === S ? 0 : H === 0 ? S : H);
              break;
            case 91:
              H + x + Y === 0 && R++;
              break;
            case 93:
              H + x + Y === 0 && R--;
              break;
            case 41:
              H + x + R === 0 && Y--;
              break;
            case 40:
              if (H + x + R === 0) {
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
              x + Y + H + R + te + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + R + Y))
                switch (x) {
                  case 0:
                    switch (2 * S + 3 * Z.charCodeAt(W + 1)) {
                      case 235:
                        x = 47;
                        break;
                      case 220:
                        ue = W, x = 42;
                    }
                    break;
                  case 42:
                    S === 47 && Q === 42 && ue + 2 !== W && (Z.charCodeAt(ue + 2) === 33 && (pe += Z.substring(ue, W + 1)), ce = "", x = 0);
                }
          }
          x === 0 && (ne += ce);
      }
      O = Q, Q = S, W++;
    }
    if (ue = pe.length, 0 < ue) {
      if (ie = j, 0 < q && (Te = c(2, pe, ie, F, k, G, ue, V, b, V), Te !== void 0 && (pe = Te).length === 0))
        return Ae + pe + Me;
      if (pe = ie.join(",") + "{" + pe + "}", D * $ !== 0) {
        switch (D !== 2 || s(pe, 2) || ($ = 0), $) {
          case 111:
            pe = pe.replace(P, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(z, "::-webkit-input-$1") + pe.replace(z, "::-moz-$1") + pe.replace(z, ":-ms-input-$1") + pe;
        }
        $ = 0;
      }
    }
    return Ae + pe + Me;
  }
  function t(F, j, Z) {
    var V = j.trim().split(h);
    j = V;
    var b = V.length, R = F.length;
    switch (R) {
      case 0:
      case 1:
        var x = 0;
        for (F = R === 0 ? "" : F[0] + " "; x < b; ++x)
          j[x] = r(F, j[x], Z).trim();
        break;
      default:
        var Y = x = 0;
        for (j = []; x < b; ++x)
          for (var H = 0; H < R; ++H)
            j[Y++] = r(F[H] + " ", V[x], Z).trim();
    }
    return j;
  }
  function r(F, j, Z) {
    var V = j.charCodeAt(0);
    switch (33 > V && (V = (j = j.trim()).charCodeAt(0)), V) {
      case 38:
        return j.replace(N, "$1" + F.trim());
      case 58:
        return F.trim() + j.replace(N, "$1" + F.trim());
      default:
        if (0 < 1 * Z && 0 < j.indexOf("\f"))
          return j.replace(N, (F.charCodeAt(0) === 58 ? "" : "$1") + F.trim());
    }
    return F + j;
  }
  function o(F, j, Z, V) {
    var b = F + ";", R = 2 * j + 3 * Z + 4 * V;
    if (R === 944) {
      F = b.indexOf(":", 9) + 1;
      var x = b.substring(F, b.length - 1).trim();
      return x = b.substring(0, F).trim() + x + ";", D === 1 || D === 2 && s(x, 1) ? "-webkit-" + x + x : x;
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
          return b.replace(U, "$1-webkit-$2") + b;
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
        return x = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + x + "-webkit-" + b + "-ms-flex-pack" + x + b;
      case 1005:
        return g.test(b) ? b.replace(v, ":-webkit-") + b.replace(v, ":-moz-") + b : b;
      case 1e3:
        switch (x = b.substring(13).trim(), j = x.indexOf("-") + 1, x.charCodeAt(0) + x.charCodeAt(j)) {
          case 226:
            x = b.replace(u, "tb");
            break;
          case 232:
            x = b.replace(u, "tb-rl");
            break;
          case 220:
            x = b.replace(u, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + x + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (j = (b = F).length - 10, x = (b.charCodeAt(j) === 33 ? b.substring(0, j) : b).substring(F.indexOf(":", 7) + 1).trim(), R = x.charCodeAt(0) + (x.charCodeAt(7) | 0)) {
          case 203:
            if (111 > x.charCodeAt(8))
              break;
          case 115:
            b = b.replace(x, "-webkit-" + x) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(x, "-webkit-" + (102 < R ? "inline-" : "") + "box") + ";" + b.replace(x, "-webkit-" + x) + ";" + b.replace(x, "-ms-" + x + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return x = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + x + "-ms-flex-" + x + b;
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
        if (B.test(F) === !0)
          return (x = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(F.replace("stretch", "fill-available"), j, Z, V).replace(":fill-available", ":stretch") : b.replace(x, "-webkit-" + x) + b.replace(x, "-moz-" + x.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, Z + V === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(F, j) {
    var Z = F.indexOf(j === 1 ? ":" : "{"), V = F.substring(0, j !== 3 ? Z : 10);
    return Z = F.substring(Z + 1, F.length - 1), ee(j !== 2 ? V : V.replace(T, "$1"), Z, j);
  }
  function i(F, j) {
    var Z = o(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return Z !== j + ";" ? Z.replace(w, " or ($1)").substring(4) : "(" + j + ")";
  }
  function c(F, j, Z, V, b, R, x, Y, H, A) {
    for (var S = 0, Q = j, O; S < q; ++S)
      switch (O = I[S].call(l, F, Q, Z, V, b, R, x, Y, H, A)) {
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
  function d(F) {
    switch (F) {
      case void 0:
      case null:
        q = I.length = 0;
        break;
      default:
        if (typeof F == "function")
          I[q++] = F;
        else if (typeof F == "object")
          for (var j = 0, Z = F.length; j < Z; ++j)
            d(F[j]);
        else
          se = !!F | 0;
    }
    return d;
  }
  function a(F) {
    return F = F.prefix, F !== void 0 && (ee = null, F ? typeof F != "function" ? D = 1 : (D = 2, ee = F) : D = 0), a;
  }
  function l(F, j) {
    var Z = F;
    if (33 > Z.charCodeAt(0) && (Z = Z.trim()), oe = Z, Z = [oe], 0 < q) {
      var V = c(-1, j, Z, Z, k, G, 0, 0, 0, 0);
      V !== void 0 && typeof V == "string" && (j = V);
    }
    var b = n(L, Z, j, 0, 0);
    return 0 < q && (V = c(-2, b, Z, Z, k, G, b.length, 0, 0, 0), V !== void 0 && (b = V)), oe = "", $ = 0, G = k = 1, b;
  }
  var f = /^\0+/g, p = /[\0\r\f]/g, v = /: */g, g = /zoo|gra/, M = /([,: ])(transform)/g, h = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, J = /@(k\w+)\s*(\S*)\s*/, z = /::(place)/g, P = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, m = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, _ = /-self|flex-/g, T = /[^]*?(:[rp][el]a[\w-]+)[^]*/, B = /stretch|:\s*\w+\-(?:conte|avail)/, U = /([^-])(image-set\()/, G = 1, k = 1, $ = 0, D = 1, L = [], I = [], q = 0, ee = null, se = 0, oe = "";
  return l.use = d, l.set = a, e !== void 0 && a(e), l;
}
var xo = {
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
function bo(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var wo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yn = /* @__PURE__ */ bo(
  function(e) {
    return wo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Gt = {}, So = {
  get exports() {
    return Gt;
  },
  set exports(e) {
    Gt = e;
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
var On;
function Co() {
  if (On)
    return ve;
  On = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, J = e ? Symbol.for("react.scope") : 60119;
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
    return z(u) === a;
  }
  return ve.AsyncMode = d, ve.ConcurrentMode = a, ve.ContextConsumer = c, ve.ContextProvider = i, ve.Element = n, ve.ForwardRef = l, ve.Fragment = r, ve.Lazy = g, ve.Memo = v, ve.Portal = t, ve.Profiler = s, ve.StrictMode = o, ve.Suspense = f, ve.isAsyncMode = function(u) {
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
    return z(u) === v;
  }, ve.isPortal = function(u) {
    return z(u) === t;
  }, ve.isProfiler = function(u) {
    return z(u) === s;
  }, ve.isStrictMode = function(u) {
    return z(u) === o;
  }, ve.isSuspense = function(u) {
    return z(u) === f;
  }, ve.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === a || u === s || u === o || u === f || u === p || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === v || u.$$typeof === i || u.$$typeof === c || u.$$typeof === l || u.$$typeof === h || u.$$typeof === N || u.$$typeof === J || u.$$typeof === M);
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
var Ln;
function Mo() {
  return Ln || (Ln = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, J = e ? Symbol.for("react.scope") : 60119;
    function z(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === a || S === s || S === o || S === f || S === p || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === v || S.$$typeof === i || S.$$typeof === c || S.$$typeof === l || S.$$typeof === h || S.$$typeof === N || S.$$typeof === J || S.$$typeof === M);
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
                var K = O && O.$$typeof;
                switch (K) {
                  case c:
                  case l:
                  case g:
                  case v:
                  case i:
                    return K;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var u = d, m = a, w = c, _ = i, T = n, B = l, U = r, G = g, k = v, $ = t, D = s, L = o, I = f, q = !1;
    function ee(S) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(S) || P(S) === d;
    }
    function se(S) {
      return P(S) === a;
    }
    function oe(S) {
      return P(S) === c;
    }
    function F(S) {
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
      return P(S) === v;
    }
    function x(S) {
      return P(S) === t;
    }
    function Y(S) {
      return P(S) === s;
    }
    function H(S) {
      return P(S) === o;
    }
    function A(S) {
      return P(S) === f;
    }
    xe.AsyncMode = u, xe.ConcurrentMode = m, xe.ContextConsumer = w, xe.ContextProvider = _, xe.Element = T, xe.ForwardRef = B, xe.Fragment = U, xe.Lazy = G, xe.Memo = k, xe.Portal = $, xe.Profiler = D, xe.StrictMode = L, xe.Suspense = I, xe.isAsyncMode = ee, xe.isConcurrentMode = se, xe.isContextConsumer = oe, xe.isContextProvider = F, xe.isElement = j, xe.isForwardRef = Z, xe.isFragment = V, xe.isLazy = b, xe.isMemo = R, xe.isPortal = x, xe.isProfiler = Y, xe.isStrictMode = H, xe.isSuspense = A, xe.isValidElementType = z, xe.typeOf = P;
  }()), xe;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Co() : e.exports = Mo();
})(So);
var vn = Gt, ko = {
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
}, Do = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, $o = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ir = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, xn = {};
xn[vn.ForwardRef] = $o;
xn[vn.Memo] = Ir;
function Rn(e) {
  return vn.isMemo(e) ? Ir : xn[e.$$typeof] || ko;
}
var Eo = Object.defineProperty, _o = Object.getOwnPropertyNames, Nn = Object.getOwnPropertySymbols, To = Object.getOwnPropertyDescriptor, Po = Object.getPrototypeOf, Wn = Object.prototype;
function Yr(e, n, t) {
  if (typeof n != "string") {
    if (Wn) {
      var r = Po(n);
      r && r !== Wn && Yr(e, r, t);
    }
    var o = _o(n);
    Nn && (o = o.concat(Nn(n)));
    for (var s = Rn(e), i = Rn(n), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!Do[d] && !(t && t[d]) && !(i && i[d]) && !(s && s[d])) {
        var a = To(n, d);
        try {
          Eo(e, d, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ao = Yr;
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
var Hn = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Xt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !bt.typeOf(e);
}, At = Object.freeze([]), je = Object.freeze({});
function ct(e) {
  return typeof e == "function";
}
function Ut(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function bn(e) {
  return e && typeof e.styledComponentId == "string";
}
var lt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", wn = typeof window < "u" && "HTMLElement" in window, Io = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Yo = {}, Oo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Lo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ne(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Lo.apply(void 0, [Oo[e]].concat(t)).trim());
}
var Ro = function() {
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
}(), Tt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), vt = 1, kt = function(e) {
  if (Tt.has(e))
    return Tt.get(e);
  for (; It.has(vt); )
    vt++;
  var n = vt++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Ne(16, "" + n), Tt.set(e, n), It.set(n, e), n;
}, No = function(e) {
  return It.get(e);
}, Wo = function(e, n) {
  n >= vt && (vt = n + 1), Tt.set(e, n), It.set(n, e);
}, Ho = "style[" + lt + '][data-styled-version="5.3.8"]', Fo = new RegExp("^" + lt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Bo = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, zo = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Fo);
      if (c) {
        var d = 0 | parseInt(c[1], 10), a = c[2];
        d !== 0 && (Wo(a, d), Bo(e, a, c[3]), e.getTag().insertRules(d, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, jo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Or = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, a = d.length; a >= 0; a--) {
      var l = d[a];
      if (l && l.nodeType === 1 && l.hasAttribute(lt))
        return l;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(lt, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = jo();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, Zo = function() {
  function e(t) {
    var r = this.element = Or(t);
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
}(), Vo = function() {
  function e(t) {
    var r = this.element = Or(t);
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
}(), Go = function() {
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
}(), Fn = wn, Xo = { isServer: !wn, useCSSOMInjection: !Io }, Yt = function() {
  function e(t, r, o) {
    t === void 0 && (t = je), r === void 0 && (r = {}), this.options = Oe({}, Xo, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && wn && Fn && (Fn = !1, function(s) {
      for (var i = document.querySelectorAll(Ho), c = 0, d = i.length; c < d; c++) {
        var a = i[c];
        a && a.getAttribute(lt) !== "active" && (zo(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return kt(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Oe({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new Go(i) : s ? new Zo(i) : new Vo(i), new Ro(t)));
    var t, r, o, s, i;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (kt(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(kt(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(kt(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, s = "", i = 0; i < o; i++) {
        var c = No(i);
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
}(), Uo = /(a)(d)/gi, Bn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Kt(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Bn(n % 52) + t;
  return (Bn(n % 52) + t).replace(Uo, "$1-$2");
}
var Ue = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Lr = function(e) {
  return Ue(5381, e);
};
function Rr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (ct(t) && !bn(t))
      return !1;
  }
  return !0;
}
var Ko = Lr("5.3.8"), Jo = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Rr(n), this.componentId = t, this.baseHash = Ue(Ko, t), this.baseStyle = r, Yt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = qe(this.rules, n, t, r).join(""), c = Kt(Ue(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = r(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, l = Ue(this.baseHash, r.hash), f = "", p = 0; p < a; p++) {
        var v = this.rules[p];
        if (typeof v == "string")
          f += v, process.env.NODE_ENV !== "production" && (l = Ue(l, v + p));
        else if (v) {
          var g = qe(v, n, t, r), M = Array.isArray(g) ? g.join("") : g;
          l = Ue(l, M + p), f += M;
        }
      }
      if (f) {
        var h = Kt(l >>> 0);
        if (!t.hasNameForId(o, h)) {
          var N = r(f, "." + h, void 0, o);
          t.insertRules(o, h, N);
        }
        s.push(h);
      }
    }
    return s.join(" ");
  }, e;
}(), qo = /^\s*\/\/.*$/gm, Qo = [":", "[", ".", "#"];
function es(e) {
  var n, t, r, o, s = e === void 0 ? je : e, i = s.options, c = i === void 0 ? je : i, d = s.plugins, a = d === void 0 ? At : d, l = new vo(c), f = [], p = function(M) {
    function h(N) {
      if (N)
        try {
          M(N + "}");
        } catch {
        }
    }
    return function(N, J, z, P, u, m, w, _, T, B) {
      switch (N) {
        case 1:
          if (T === 0 && J.charCodeAt(0) === 64)
            return M(J + ";"), "";
          break;
        case 2:
          if (_ === 0)
            return J + "/*|*/";
          break;
        case 3:
          switch (_) {
            case 102:
            case 112:
              return M(z[0] + J), "";
            default:
              return J + (B === 0 ? "/*|*/" : "");
          }
        case -2:
          J.split("/*|*/}").forEach(h);
      }
    };
  }(function(M) {
    f.push(M);
  }), v = function(M, h, N) {
    return h === 0 && Qo.indexOf(N[t.length]) !== -1 || N.match(o) ? M : "." + n;
  };
  function g(M, h, N, J) {
    J === void 0 && (J = "&");
    var z = M.replace(qo, ""), P = h && N ? N + " " + h + " { " + z + " }" : z;
    return n = J, t = h, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(N || !h ? "" : h, P);
  }
  return l.use([].concat(a, [function(M, h, N) {
    M === 2 && N.length && N[0].lastIndexOf(t) > 0 && (N[0] = N[0].replace(r, v));
  }, p, function(M) {
    if (M === -2) {
      var h = f;
      return f = [], h;
    }
  }])), g.hash = a.length ? a.reduce(function(M, h) {
    return h.name || Ne(15), Ue(M, h.name);
  }, 5381).toString() : "", g;
}
var Nr = Je.createContext();
Nr.Consumer;
var Wr = Je.createContext(), ts = (Wr.Consumer, new Yt()), Jt = es();
function Hr() {
  return Ze(Nr) || ts;
}
function Fr() {
  return Ze(Wr) || Jt;
}
var Br = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Jt);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ne(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Jt), this.name + n.hash;
  }, e;
}(), ns = /([A-Z])/, rs = /([A-Z])/g, os = /^ms-/, ss = function(e) {
  return "-" + e.toLowerCase();
};
function zn(e) {
  return ns.test(e) ? e.replace(rs, ss).replace(os, "-ms-") : e;
}
var jn = function(e) {
  return e == null || e === !1 || e === "";
};
function qe(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = qe(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (jn(e))
    return "";
  if (bn(e))
    return "." + e.styledComponentId;
  if (ct(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var d = e(n);
    return process.env.NODE_ENV !== "production" && bt.isElement(d) && console.warn(Ut(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), qe(d, n, t, r);
  }
  var a;
  return e instanceof Br ? t ? (e.inject(t, r), e.getName(r)) : e : Xt(e) ? function l(f, p) {
    var v, g, M = [];
    for (var h in f)
      f.hasOwnProperty(h) && !jn(f[h]) && (Array.isArray(f[h]) && f[h].isCss || ct(f[h]) ? M.push(zn(h) + ":", f[h], ";") : Xt(f[h]) ? M.push.apply(M, l(f[h], h)) : M.push(zn(h) + ": " + (v = h, (g = f[h]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || v in xo ? String(g).trim() : g + "px") + ";"));
    return p ? [p + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var Zn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Rt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return ct(e) || Xt(e) ? Zn(qe(Hn(At, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Zn(qe(Hn(e, t)));
}
var Vn = /invalid hook call/i, Dt = /* @__PURE__ */ new Set(), zr = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (Vn.test(s))
          o = !1, Dt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          r.apply(void 0, [s].concat(c));
        }
      }, we(), o && !Dt.has(t) && (console.warn(t), Dt.add(t));
    } catch (s) {
      Vn.test(s.message) && Dt.delete(t);
    } finally {
      console.error = r;
    }
  }
}, jr = function(e, n, t) {
  return t === void 0 && (t = je), e.theme !== t.theme && e.theme || n || t.theme;
}, is = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, as = /(^-|-$)/g;
function Ht(e) {
  return e.replace(is, "-").replace(as, "");
}
var Sn = function(e) {
  return Kt(Lr(e) >>> 0);
};
function $t(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var qt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, cs = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ls(e, n, t) {
  var r = e[t];
  qt(n) && qt(r) ? Zr(r, n) : e[t] = n;
}
function Zr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (qt(i))
      for (var c in i)
        cs(c) && ls(e, i[c], c);
  }
  return e;
}
var dt = Je.createContext();
dt.Consumer;
function ds(e) {
  var n = Ze(dt), t = $e(function() {
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
  return e.children ? Je.createElement(dt.Provider, { value: t }, e.children) : null;
}
var Ft = {};
function Vr(e, n, t) {
  var r = bn(e), o = !$t(e), s = n.attrs, i = s === void 0 ? At : s, c = n.componentId, d = c === void 0 ? function(J, z) {
    var P = typeof J != "string" ? "sc" : Ht(J);
    Ft[P] = (Ft[P] || 0) + 1;
    var u = P + "-" + Sn("5.3.8" + P + Ft[P]);
    return z ? z + "-" + u : u;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, l = a === void 0 ? function(J) {
    return $t(J) ? "styled." + J : "Styled(" + Ut(J) + ")";
  }(e) : a, f = n.displayName && n.componentId ? Ht(n.displayName) + "-" + n.componentId : n.componentId || d, p = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, v = n.shouldForwardProp;
  r && e.shouldForwardProp && (v = n.shouldForwardProp ? function(J, z, P) {
    return e.shouldForwardProp(J, z, P) && n.shouldForwardProp(J, z, P);
  } : e.shouldForwardProp);
  var g, M = new Jo(t, f, r ? e.componentStyle : void 0), h = M.isStatic && i.length === 0, N = function(J, z) {
    return function(P, u, m, w) {
      var _ = P.attrs, T = P.componentStyle, B = P.defaultProps, U = P.foldedComponentIds, G = P.shouldForwardProp, k = P.styledComponentId, $ = P.target;
      process.env.NODE_ENV !== "production" && Pn(k);
      var D = function(V, b, R) {
        V === void 0 && (V = je);
        var x = Oe({}, b, { theme: V }), Y = {};
        return R.forEach(function(H) {
          var A, S, Q, O = H;
          for (A in ct(O) && (O = O(x)), O)
            x[A] = Y[A] = A === "className" ? (S = Y[A], Q = O[A], S && Q ? S + " " + Q : S || Q) : O[A];
        }), [x, Y];
      }(jr(u, Ze(dt), B) || je, u, _), L = D[0], I = D[1], q = function(V, b, R, x) {
        var Y = Hr(), H = Fr(), A = b ? V.generateAndInjectStyles(je, Y, H) : V.generateAndInjectStyles(R, Y, H);
        return process.env.NODE_ENV !== "production" && Pn(A), process.env.NODE_ENV !== "production" && !b && x && x(A), A;
      }(T, w, L, process.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), ee = m, se = I.$as || u.$as || I.as || u.as || $, oe = $t(se), F = I !== u ? Oe({}, u, {}, I) : u, j = {};
      for (var Z in F)
        Z[0] !== "$" && Z !== "as" && (Z === "forwardedAs" ? j.as = F[Z] : (G ? G(Z, Yn, se) : !oe || Yn(Z)) && (j[Z] = F[Z]));
      return u.style && I.style !== u.style && (j.style = Oe({}, u.style, {}, I.style)), j.className = Array.prototype.concat(U, k, q !== k ? q : null, u.className, I.className).filter(Boolean).join(" "), j.ref = ee, ho(se, j);
    }(g, J, z, h);
  };
  return N.displayName = l, (g = Je.forwardRef(N)).attrs = p, g.componentStyle = M, g.displayName = l, g.shouldForwardProp = v, g.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : At, g.styledComponentId = f, g.target = r ? e.target : e, g.withComponent = function(J) {
    var z = n.componentId, P = function(m, w) {
      if (m == null)
        return {};
      var _, T, B = {}, U = Object.keys(m);
      for (T = 0; T < U.length; T++)
        _ = U[T], w.indexOf(_) >= 0 || (B[_] = m[_]);
      return B;
    }(n, ["componentId"]), u = z && z + "-" + ($t(J) ? J : Ht(Ut(J)));
    return Vr(J, Oe({}, P, { attrs: p, componentId: u }), t);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(J) {
    this._foldedDefaultProps = r ? Zr({}, e.defaultProps, J) : J;
  } }), process.env.NODE_ENV !== "production" && (zr(l, f), g.warnTooManyClasses = function(J, z) {
    var P = {}, u = !1;
    return function(m) {
      if (!u && (P[m] = !0, Object.keys(P).length >= 200)) {
        var w = z ? ' with the id of "' + z + '"' : "";
        console.warn("Over 200 classes were generated for component " + J + w + `.
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
  }, o && Ao(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var Qt = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = je), !bt.isValidElementType(r))
      return Ne(1, String(r));
    var s = function() {
      return t(r, o, Rt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, Oe({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, Oe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Vr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Qt[e] = Qt(e);
});
var us = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Rr(t), Yt.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(qe(this.rules, r, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && Yt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function fs(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Rt.apply(void 0, [e].concat(t)), s = "sc-global-" + Sn(JSON.stringify(o)), i = new us(o, s);
  function c(a) {
    var l = Hr(), f = Fr(), p = Ze(dt), v = we(l.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Je.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(g) {
      return typeof g == "string" && g.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && d(v, a, l, p, f), _r(function() {
      if (!l.server)
        return d(v, a, l, p, f), function() {
          return i.removeStyles(v, l);
        };
    }, [v, a, l, p, f]), null;
  }
  function d(a, l, f, p, v) {
    if (i.isStatic)
      i.renderStyles(a, Yo, f, v);
    else {
      var g = Oe({}, l, { theme: jr(l, p, c.defaultProps) });
      i.renderStyles(a, g, f, v);
    }
  }
  return process.env.NODE_ENV !== "production" && zr(s), Je.memo(c);
}
function Nt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Rt.apply(void 0, [e].concat(t)).join(""), s = Sn(o);
  return new Br(s, o);
}
var tt = function() {
  return Ze(dt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const C = Qt, yt = "reactSchedulerOutsideWrapper", hs = fs`

  #${yt} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${yt} *,
 #${yt} *:before,
 #${yt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, ps = {
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
}, ms = {
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
}, pt = `
margin: 0;
padding: 0;
`, mt = `
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
const Se = 50, He = 24, gt = 16, Ke = 40, ut = Ke + gt + He, ft = 84, he = 56, Ye = 196, Ie = 12, _e = 50, ht = 24, wt = 16, en = 40, gs = ht + wt + en, Gn = 24, Xn = 52, Le = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter",
    hoursInDay: "400 9px Inter"
  }
}, at = 3, ys = 1.6, vs = 4.5, tn = 12, Ot = 24, xs = "reactSchedulerCanvasHeaderWrapper", Gr = "reactSchedulerCanvasWrapper", Qe = yt, bs = 4, Cn = 48, Be = 5, ws = 40, Un = 8, Mn = He / 2 + 2, Xr = gt / 2 + He + 1, Kn = 2, Ce = 60, Pe = 21;
var et = {}, Ss = {
  get exports() {
    return et;
  },
  set exports(e) {
    et = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Ee, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", d = "hour", a = "day", l = "week", f = "month", p = "quarter", v = "year", g = "date", M = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, N = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, J = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
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
      var L = 12 * (D.year() - $.year()) + (D.month() - $.month()), I = $.clone().add(L, f), q = D - I < 0, ee = $.clone().add(L + (q ? -1 : 1), f);
      return +(-(L + (D - I) / (q ? I - ee : ee - I)) || 0);
    }, a: function(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
    }, p: function(k) {
      return { M: f, y: v, w: l, d: a, D: g, h: d, m: c, s: i, ms: s, Q: p }[k] || String(k || "").toLowerCase().replace(/s$/, "");
    }, u: function(k) {
      return k === void 0;
    } }, u = "en", m = {};
    m[u] = J;
    var w = function(k) {
      return k instanceof U;
    }, _ = function k($, D, L) {
      var I;
      if (!$)
        return u;
      if (typeof $ == "string") {
        var q = $.toLowerCase();
        m[q] && (I = q), D && (m[q] = D, I = q);
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
      return D.date = k, D.args = arguments, new U(D);
    }, B = P;
    B.l = _, B.i = w, B.w = function(k, $) {
      return T(k, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var U = function() {
      function k(D) {
        this.$L = _(D.locale, null, !0), this.parse(D);
      }
      var $ = k.prototype;
      return $.parse = function(D) {
        this.$d = function(L) {
          var I = L.date, q = L.utc;
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
              return q ? new Date(Date.UTC(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe)) : new Date(ee[1], se, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, oe);
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
        var I = this, q = !!B.u(L) || L, ee = B.p(D), se = function(x, Y) {
          var H = B.w(I.$u ? Date.UTC(I.$y, Y, x) : new Date(I.$y, Y, x), I);
          return q ? H : H.endOf(a);
        }, oe = function(x, Y) {
          return B.w(I.toDate()[x].apply(I.toDate("s"), (q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), I);
        }, F = this.$W, j = this.$M, Z = this.$D, V = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case v:
            return q ? se(1, 0) : se(31, 11);
          case f:
            return q ? se(1, j) : se(0, j + 1);
          case l:
            var b = this.$locale().weekStart || 0, R = (F < b ? F + 7 : F) - b;
            return se(q ? Z - R : Z + (6 - R), j);
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
        var I, q = B.p(D), ee = "set" + (this.$u ? "UTC" : ""), se = (I = {}, I[a] = ee + "Date", I[g] = ee + "Date", I[f] = ee + "Month", I[v] = ee + "FullYear", I[d] = ee + "Hours", I[c] = ee + "Minutes", I[i] = ee + "Seconds", I[s] = ee + "Milliseconds", I)[q], oe = q === a ? this.$D + (L - this.$W) : L;
        if (q === f || q === v) {
          var F = this.clone().set(g, 1);
          F.$d[se](oe), F.init(), this.$d = F.set(g, Math.min(this.$D, F.daysInMonth())).$d;
        } else
          se && this.$d[se](oe);
        return this.init(), this;
      }, $.set = function(D, L) {
        return this.clone().$set(D, L);
      }, $.get = function(D) {
        return this[B.p(D)]();
      }, $.add = function(D, L) {
        var I, q = this;
        D = Number(D);
        var ee = B.p(L), se = function(j) {
          var Z = T(q);
          return B.w(Z.date(Z.date() + Math.round(j * D)), q);
        };
        if (ee === f)
          return this.set(f, this.$M + D);
        if (ee === v)
          return this.set(v, this.$y + D);
        if (ee === a)
          return se(1);
        if (ee === l)
          return se(7);
        var oe = (I = {}, I[c] = r, I[d] = o, I[i] = t, I)[ee] || 1, F = this.$d.getTime() + D * oe;
        return B.w(F, this);
      }, $.subtract = function(D, L) {
        return this.add(-1 * D, L);
      }, $.format = function(D) {
        var L = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || M;
        var q = D || "YYYY-MM-DDTHH:mm:ssZ", ee = B.z(this), se = this.$H, oe = this.$m, F = this.$M, j = I.weekdays, Z = I.months, V = function(Y, H, A, S) {
          return Y && (Y[H] || Y(L, q)) || A[H].slice(0, S);
        }, b = function(Y) {
          return B.s(se % 12 || 12, Y, "0");
        }, R = I.meridiem || function(Y, H, A) {
          var S = Y < 12 ? "AM" : "PM";
          return A ? S.toLowerCase() : S;
        }, x = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: F + 1, MM: B.s(F + 1, 2, "0"), MMM: V(I.monthsShort, F, Z, 3), MMMM: V(Z, F), D: this.$D, DD: B.s(this.$D, 2, "0"), d: String(this.$W), dd: V(I.weekdaysMin, this.$W, j, 2), ddd: V(I.weekdaysShort, this.$W, j, 3), dddd: j[this.$W], H: String(se), HH: B.s(se, 2, "0"), h: b(1), hh: b(2), a: R(se, oe, !0), A: R(se, oe, !1), m: String(oe), mm: B.s(oe, 2, "0"), s: String(this.$s), ss: B.s(this.$s, 2, "0"), SSS: B.s(this.$ms, 3, "0"), Z: ee };
        return q.replace(N, function(Y, H) {
          return H || x[Y] || ee.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(D, L, I) {
        var q, ee = B.p(L), se = T(D), oe = (se.utcOffset() - this.utcOffset()) * r, F = this - se, j = B.m(this, se);
        return j = (q = {}, q[v] = j / 12, q[f] = j, q[p] = j / 3, q[l] = (F - oe) / 6048e5, q[a] = (F - oe) / 864e5, q[d] = F / o, q[c] = F / r, q[i] = F / t, q)[ee] || F, I ? j : B.a(j);
      }, $.daysInMonth = function() {
        return this.endOf(f).$D;
      }, $.$locale = function() {
        return m[this.$L];
      }, $.locale = function(D, L) {
        if (!D)
          return this.$L;
        var I = this.clone(), q = _(D, L, !0);
        return q && (I.$L = q), I;
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
    }(), G = U.prototype;
    return T.prototype = G, [["$ms", s], ["$s", i], ["$m", c], ["$H", d], ["$W", a], ["$M", f], ["$y", v], ["$D", g]].forEach(function(k) {
      G[k[1]] = function($) {
        return this.$g($, k[0], k[1]);
      };
    }), T.extend = function(k, $) {
      return k.$i || (k($, U, T), k.$i = !0), T;
    }, T.locale = _, T.isDayjs = w, T.unix = function(k) {
      return T(1e3 * k);
    }, T.en = m[u], T.Ls = m, T.p = {}, T;
  });
})(Ss);
const E = et, Jn = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, kn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, Ur = (e, n) => E(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), Kr = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: kn(e),
  isCurrentDay: e.isSame(E(), "day"),
  year: parseInt(e.format("YYYY"))
});
let Et = null;
const Cs = (e) => {
  if (Et)
    return Et;
  const n = document.createElement("canvas");
  n.width = 12, n.height = 12;
  const t = n.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.11)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Et = e.createPattern(n, "repeat"), Et) : null;
}, Dn = (e, n, t, r, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, he), c && !s) {
    const d = Cs(e);
    d && (e.fillStyle = d, e.fillRect(n, t, r, he));
  }
  e.strokeRect(n + 0.5, t + 0.5, r, he);
}, $n = (e, n) => {
  let t = 0;
  for (const r of n)
    r <= e && t++;
  return t * Pe;
}, Ms = (e, n, t, r, o, s = []) => {
  for (let i = 0; i < n; i++) {
    const c = $n(i, s);
    for (let d = 0; d <= t; d++) {
      const a = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        d,
        "days"
      ), l = a.isSame(E(), "day"), f = a.isBefore(E(), "day");
      Dn(
        e,
        d * Se,
        i * he + c,
        Se,
        kn(a),
        l,
        o,
        f
      );
    }
  }
}, ks = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, Ds = (e, n, t, r, o, s = []) => {
  let i = 0, c = -(r.dayOfMonth - 1) * Ie;
  const d = n * he + s.length * Pe;
  for (let a = 0; a <= t; a++) {
    const f = E(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(E(), "week");
    for (let p = 0; p < n; p++) {
      const v = $n(p, s);
      Dn(e, i, p * he + v, ft, !0, f, o);
    }
    i += ft;
  }
  for (let a = 0; a < t; a++) {
    const l = Ur(r, a) * Ie;
    ks(e, c, d, o), c += l;
  }
}, $s = (e, n, t, r, o, s = []) => {
  const i = E(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let c = 0; c < n; c++) {
    const d = $n(c, s);
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = E() : a > Math.floor(t / 2) ? l = E().add(a - Math.floor(t / 2), "hours") : l = E().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(E(), "day") && l.isSame(E(), "hour");
      Dn(
        e,
        a * _e + _e / 2 - 0.5,
        c * he + d,
        _e,
        kn(l),
        f,
        o
      );
    }
  }
}, Es = (e, n, t, r) => {
  const o = t * he + n * Pe, s = e.canvas.width, i = o + Pe / 2;
  e.fillStyle = r.mode === "dark" ? r.colors.primary + "80" : r.colors.primary, e.fillRect(0, o, s, Pe), e.strokeStyle = r.colors.border, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), e.moveTo(0, i + 0.5), e.lineTo(s, i + 0.5), e.stroke();
}, _s = (e, n, t, r, o, s, i = []) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(Gr)) {
    switch (n) {
      case 0:
        Ds(e, t, r, o, s, i);
        break;
      case 1:
        Ms(e, t, r, o, s, i);
        break;
      case 2:
        $s(e, t, r, o, s, i);
        break;
    }
    for (let d = 0; d < i.length; d++)
      Es(e, d, i[d], s);
  }
};
var nn = {}, Ts = {
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
})(Ts);
const Ps = nn;
var rn = {}, As = {
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
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(As);
const Is = rn;
var on = {}, Ys = {
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
        var l, f, p, v, g = i(this), M = (l = this.isoWeekYear(), f = this.$u, p = (f ? s.utc : s)().year(l).startOf("year"), v = 4 - p.isoWeekday(), p.isoWeekday() > 4 && (v += 7), p.add(v, t));
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
})(Ys);
const Os = on;
var sn = {}, Ls = {
  get exports() {
    return sn;
  },
  set exports(e) {
    sn = e;
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
})(Ls);
const Rs = sn;
var an = {}, Ns = {
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
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, l = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, p = { years: a, months: l, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, v = function(u) {
      return u instanceof P;
    }, g = function(u, m, w) {
      return new P(u, w, m.$l);
    }, M = function(u) {
      return r.p(u) + "s";
    }, h = function(u) {
      return u < 0;
    }, N = function(u) {
      return h(u) ? Math.ceil(u) : Math.floor(u);
    }, J = function(u) {
      return Math.abs(u);
    }, z = function(u, m) {
      return u ? h(u) ? { negative: !0, format: "" + J(u) + m } : { negative: !1, format: "" + u + m } : { negative: !1, format: "" };
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
          var U = w.match(f);
          if (U) {
            var G = U.slice(2).map(function(k) {
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
        var B = z(T, "D"), U = z(this.$d.hours, "H"), G = z(this.$d.minutes, "M"), k = this.$d.seconds || 0;
        this.$d.milliseconds && (k += this.$d.milliseconds / 1e3);
        var $ = z(k, "S"), D = w.negative || _.negative || B.negative || U.negative || G.negative || $.negative, L = U.format || G.format || $.format ? "T" : "", I = (D ? "-" : "") + "P" + w.format + _.format + B.format + L + U.format + G.format + $.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, m.toJSON = function() {
        return this.toISOString();
      }, m.format = function(w) {
        var _ = w || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return _.replace(d, function(B, U) {
          return U || String(T[B]);
        });
      }, m.as = function(w) {
        return this.$ms / p[M(w)];
      }, m.get = function(w) {
        var _ = this.$ms, T = M(w);
        return T === "milliseconds" ? _ %= 1e3 : _ = T === "weeks" ? N(_ / p[T]) : this.$d[T], _ === 0 ? 0 : _;
      }, m.add = function(w, _, T) {
        var B;
        return B = _ ? w * p[M(_)] : v(w) ? w.$ms : g(w, this).$ms, g(this.$ms + B * (T ? -1 : 1), this);
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
      t = w, r = w().$utils(), w.duration = function(B, U) {
        var G = w.locale();
        return g(B, { $l: G }, U);
      }, w.isDuration = v;
      var _ = m.prototype.add, T = m.prototype.subtract;
      m.prototype.add = function(B, U) {
        return v(B) && (B = B.asMilliseconds()), _.bind(this)(B, U);
      }, m.prototype.subtract = function(B, U) {
        return v(B) && (B = B.asMilliseconds()), T.bind(this)(B, U);
      };
    };
  });
})(Ns);
const Ws = an;
var Hs = "Expected a function", qn = 0 / 0, Fs = "[object Symbol]", Bs = /^\s+|\s+$/g, zs = /^[-+]0x[0-9a-f]+$/i, js = /^0b[01]+$/i, Zs = /^0o[0-7]+$/i, Vs = parseInt, Gs = typeof Ee == "object" && Ee && Ee.Object === Object && Ee, Xs = typeof self == "object" && self && self.Object === Object && self, Us = Gs || Xs || Function("return this")(), Ks = Object.prototype, Js = Ks.toString, qs = Math.max, Qs = Math.min, Bt = function() {
  return Us.Date.now();
};
function ei(e, n, t) {
  var r, o, s, i, c, d, a = 0, l = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Hs);
  n = Qn(n) || 0, cn(t) && (l = !!t.leading, f = "maxWait" in t, s = f ? qs(Qn(t.maxWait) || 0, n) : s, p = "trailing" in t ? !!t.trailing : p);
  function v(m) {
    var w = r, _ = o;
    return r = o = void 0, a = m, i = e.apply(_, w), i;
  }
  function g(m) {
    return a = m, c = setTimeout(N, n), l ? v(m) : i;
  }
  function M(m) {
    var w = m - d, _ = m - a, T = n - w;
    return f ? Qs(T, s - _) : T;
  }
  function h(m) {
    var w = m - d, _ = m - a;
    return d === void 0 || w >= n || w < 0 || f && _ >= s;
  }
  function N() {
    var m = Bt();
    if (h(m))
      return J(m);
    c = setTimeout(N, M(m));
  }
  function J(m) {
    return c = void 0, p && r ? v(m) : (r = o = void 0, i);
  }
  function z() {
    c !== void 0 && clearTimeout(c), a = 0, r = d = o = c = void 0;
  }
  function P() {
    return c === void 0 ? i : J(Bt());
  }
  function u() {
    var m = Bt(), w = h(m);
    if (r = arguments, o = this, d = m, w) {
      if (c === void 0)
        return g(d);
      if (f)
        return c = setTimeout(N, n), v(d);
    }
    return c === void 0 && (c = setTimeout(N, n)), i;
  }
  return u.cancel = z, u.flush = P, u;
}
function cn(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function ti(e) {
  return !!e && typeof e == "object";
}
function ni(e) {
  return typeof e == "symbol" || ti(e) && Js.call(e) == Fs;
}
function Qn(e) {
  if (typeof e == "number")
    return e;
  if (ni(e))
    return qn;
  if (cn(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = cn(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Bs, "");
  var t = js.test(e);
  return t || Zs.test(e) ? Vs(e.slice(2), t ? 2 : 8) : zs.test(e) ? qn : +e;
}
var st = ei;
const Pt = [0, 1, 2];
var St = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(St || {});
const Jr = (e) => Pt.includes(e), it = (e) => {
  var r;
  const t = (((r = document.getElementById(Qe)) == null ? void 0 : r.clientWidth) || 0) - Ye;
  switch (e) {
    case 1:
      return Math.ceil(t / Se) * at;
    case 2:
      return Math.ceil(t / _e) * at;
    default:
      return Math.ceil(t / ft) * at;
  }
}, ri = (e) => it(e) / at, En = (e, n) => {
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
}, oi = (e, n) => {
  const t = En(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, _n = () => {
  var t;
  return ((((t = document.getElementById(Qe)) == null ? void 0 : t.clientWidth) || 0) - Ye) * at;
}, qr = Tr({
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
E.extend(Ps);
E.extend(Is);
E.extend(Os);
E.extend(Rs);
E.extend(Ws);
const si = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = E(),
  onRangeChange: s,
  handleToggleDisplayActiveUnits: i,
  onClearFilterData: c
}) => {
  const { zoom: d, maxRecordsPerPage: a = 50 } = r, [l, f] = fe(d), [p, v] = fe(E()), [g, M] = fe(!1), [h, N] = fe(it(l)), J = Pt[l] !== Pt[Pt.length - 1], z = l !== 0, P = $e(() => oi(p, l), [p, l]), u = En(p, l).startDate, m = E(u).dayOfYear(), w = Kr(u), _ = we(null), [T, B] = fe([{ x: 0, y: 0 }]), U = le(
    (V, b = "auto") => {
      var x, Y, H, A;
      const R = _n();
      switch (V) {
        case "back":
          return (x = _.current) == null ? void 0 : x.scrollTo({
            behavior: b,
            left: R / 3
          });
        case "forward":
          return (Y = _.current) == null ? void 0 : Y.scrollTo({
            behavior: b,
            left: R / 3
          });
        case "middle": {
          const S = R / at / 4;
          return (H = _.current) == null ? void 0 : H.scrollTo({
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
      const b = ri(l);
      let R;
      switch (l) {
        case 0:
          R = b * 7;
          break;
        case 1:
          R = b;
          break;
        case 2:
          R = Math.ceil(b / Ot);
          break;
      }
      st(() => {
        switch (V) {
          case "back":
            v((Y) => Y.subtract(R, "days"));
            break;
          case "forward":
            v((Y) => Y.add(R, "days"));
            break;
          case "middle":
            v(E());
            break;
        }
        s == null || s(P);
      }, 300)();
    },
    [s, P, l]
  );
  be(() => {
    _.current = document.getElementById(Qe), N(it(l));
  }, [l]), be(() => {
    const V = () => N(it(l));
    return window.addEventListener("resize", V), () => window.removeEventListener("resize", V);
  }, [l]), be(() => {
    s == null || s(P);
  }, [s, P]), be(() => {
    M(!1);
  }, [o]), be(() => {
    g || (U("middle"), M(!0), v(o));
  }, [o, g, U]);
  const $ = () => {
    t || (v(
      (V) => l === 2 ? V.add(Gn, "hours") : V.add(Kn, "weeks")
    ), s == null || s(P));
  }, D = le(() => {
    t || (k("forward"), st(() => {
      U("forward");
    }, 500)());
  }, [t, k, U]), L = () => {
    t || (v(
      (V) => l === 2 ? V.subtract(Gn, "hours") : V.subtract(Kn, "weeks")
    ), s == null || s(P));
  }, I = le(() => {
    !g || t || (k("back"), st(() => {
      U("back");
    }, 500)());
  }, [g, t, k, U]), q = le(() => {
    t || (k("middle"), st(() => {
      U("middle", "smooth");
    }, 300)());
  }, [t, k, U]), ee = le(
    (V) => {
      if (t)
        return;
      const b = E(V).startOf("day");
      b.isValid() && (v(b), s == null || s(P), setTimeout(() => {
        U("middle", "smooth");
      }, 300));
    },
    [t, U, s, P]
  ), se = () => F(l + 1), oe = () => F(l - 1), F = (V) => {
    Jr(V) && (f(V), N(it(V)), s == null || s(P));
  }, j = () => i == null ? void 0 : i(), { Provider: Z } = qr;
  return /* @__PURE__ */ y(
    Z,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: $,
        handleScrollNext: D,
        handleGoPrev: L,
        handleScrollPrev: I,
        handleGoToday: q,
        goToDate: ee,
        zoomIn: se,
        zoomOut: oe,
        zoom: l,
        isNextZoom: J,
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
}, Ve = () => Ze(qr), Qr = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, eo = (e, n) => {
  if (n.length === 0)
    return e;
  let t = e, r = 0;
  for (const o of n) {
    const s = o * he + r * Pe;
    if (e >= s + Pe)
      r++;
    else if (e >= s)
      return o * he + r * Pe - r * Pe;
  }
  return t - r * Pe;
}, ii = 5, er = (e, n) => {
  const t = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y);
  return Math.sqrt(t * t + r * r) > ii;
}, xt = (e, n, t) => {
  const r = t.getBoundingClientRect();
  return {
    x: e - r.left + t.scrollLeft,
    y: n - r.top + t.scrollTop
  };
}, ai = ({
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
  } = i, [g, M] = fe("idle"), [h, N] = fe(null), [J, z] = fe({ x: 0, y: 0 }), [P, u] = fe({ width: 0, height: 48 }), [m, w] = fe(null), [_, T] = fe(!0), B = we({ x: 0, y: 0 }), U = we({ x: 0, y: 0 }), G = we({ x: 0, y: 0 }), k = we(null), $ = we(null), D = we(0), L = we(null), I = le(
    (R) => !l || R.draggable === !1 ? !1 : f ? f(R) : !0,
    [l, f]
  ), q = le(
    (R, x) => {
      const Y = eo(x, d), H = Math.floor(Y / he);
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
      return { snappedDate: Q, snappedResourceIndex: H };
    },
    [t, r, d]
  ), ee = le(
    (R, x, Y, H) => {
      const A = [], S = x.getTime(), Q = Y.getTime(), O = a.find((te) => te.id === H);
      if (!O)
        return A;
      const K = [];
      for (const te of O.data)
        Array.isArray(te) ? K.push(...te) : K.push(te);
      for (const te of K) {
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
    (R, x, Y, H) => {
      const A = [], S = x.getTime(), Q = Y.getTime(), O = E(x).format("YYYY-MM-DD"), K = a.find((W) => W.id === H);
      if (!K)
        return A;
      const te = [];
      for (const W of K.data)
        Array.isArray(W) ? te.push(...W) : te.push(W);
      for (const W of te) {
        if (W.segmentId === R.segmentId)
          continue;
        const ie = W.startDate.getTime(), me = W.endDate.getTime(), ue = E(W.startDate).format("YYYY-MM-DD"), ae = E(W.endDate).format("YYYY-MM-DD"), de = E(Y).format("YYYY-MM-DD");
        if (!(ue === O || ae === O || ue === de || ae === de || E(W.startDate).isBefore(x, "day") && E(W.endDate).isAfter(Y, "day")) || S >= ie && S < me || Q > ie && Q <= me || S <= ie && Q >= me)
          continue;
        let pe, Me;
        me <= S ? (pe = S - me, Me = "before") : (pe = ie - Q, Me = "after"), A.push({
          event: W,
          timeGap: pe,
          position: Me
        });
      }
      return A.sort((W, ie) => W.timeGap - ie.timeGap);
    },
    [a]
  ), oe = le(
    (R, x, Y) => {
      const H = q(x, Y);
      let A, S;
      if (p)
        A = R.startDate, S = R.endDate;
      else {
        const me = E(R.endDate).diff(R.startDate);
        A = H.snappedDate, S = E(A).add(me, "milliseconds").toDate();
      }
      let Q = 0, O = "", K;
      for (const me of e) {
        const ue = Math.max(me.data.length, 1);
        if (H.snappedResourceIndex < Q + ue) {
          O = me.id, K = me.capacity;
          break;
        }
        Q += ue;
      }
      if (!O)
        return null;
      let te = !0;
      K !== void 0 && R.totalPassengers !== void 0 && (te = R.totalPassengers <= K);
      const W = ee(R, A, S, O), ie = W.length === 0 ? se(R, A, S, O) : [];
      return {
        startDate: A,
        endDate: S,
        resourceId: O,
        resourceIndex: H.snappedResourceIndex,
        resourceCapacity: K,
        hasCapacity: te,
        conflicts: W,
        hasConflict: W.length > 0,
        nearbyEvents: ie
      };
    },
    [q, e, p, ee, se]
  ), F = le(
    (R, x) => {
      if (!s)
        return;
      const Y = Date.now();
      if (Y - D.current < 100)
        return;
      D.current = Y;
      const H = {
        event: R,
        currentStartDate: x.startDate,
        currentEndDate: x.endDate,
        currentResourceId: x.resourceId,
        conflicts: x.conflicts
      };
      s(H);
    },
    [s]
  ), j = le(
    (R, x) => {
      if (!I(R) || !c.current)
        return;
      x.preventDefault(), x.stopPropagation();
      const Y = x.target.closest('[style*="left"]');
      let H = 0, A = 0;
      Y && Y.style.left && Y.style.top && (H = parseInt(Y.style.left), A = parseInt(Y.style.top));
      const S = xt(
        x.clientX,
        x.clientY,
        c.current
      );
      B.current = { x: H, y: A }, U.current = { x: x.clientX, y: x.clientY }, G.current = {
        x: S.x - H,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, L.current = {
        startDate: R.startDate,
        endDate: R.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const K of e) {
        for (const te of K.data)
          if (te.some((W) => W.segmentId === R.segmentId)) {
            L.current.resourceId = K.id;
            break;
          }
        if (L.current.resourceId)
          break;
      }
      N(R), M("potential"), z({ x: H, y: A });
      let Q = 100, O = 48;
      if (Y) {
        const K = Y.getBoundingClientRect();
        Q = K.width, O = K.height;
      }
      u({ width: Q, height: O });
    },
    [I, c, e, t]
  ), Z = le(
    (R) => {
      if (!c.current)
        return;
      let x = c.current;
      for (; x && x !== document.body; ) {
        const W = window.getComputedStyle(x);
        if (x.scrollHeight > x.clientHeight && (W.overflowY === "auto" || W.overflowY === "scroll" || W.overflow === "auto" || W.overflow === "scroll"))
          break;
        x = x.parentElement;
      }
      (!x || x === document.body) && (x = document.documentElement);
      const Y = x.getBoundingClientRect(), H = R.clientY, A = 50, S = 5, Q = H - Y.top, O = Y.bottom - H;
      let K = !1, te = 0;
      Q < A && Q > 0 ? (K = !0, te = -S * (1 - Q / A)) : O < A && O > 0 && (K = !0, te = S * (1 - O / A)), K ? ($.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
        x.scrollTop += te, g === "dragging" && Z(R);
      })) : $.current && (cancelAnimationFrame($.current), $.current = null);
    },
    [c, g]
  ), V = le(
    (R) => {
      if (g === "idle" || g === "animating" || !h || !c.current)
        return;
      const x = { x: R.clientX, y: R.clientY };
      if (g === "potential")
        if (er(U.current, x))
          M("dragging");
        else
          return;
      Z(R);
      const Y = xt(
        R.clientX,
        R.clientY,
        c.current
      );
      k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
        const H = {
          x: Y.x - G.current.x,
          y: Y.y - G.current.y
        };
        z(H);
        const A = oe(h, Y.x, Y.y);
        if (A && v) {
          const S = {
            event: h,
            currentStartDate: A.startDate,
            currentEndDate: A.endDate,
            currentResourceId: A.resourceId,
            conflicts: A.conflicts
          };
          A.hasConflict = !v(S);
        }
        if (w(A), A) {
          const S = A.hasCapacity !== !1;
          T(S), F(h, A);
        }
      });
    },
    [g, h, c, oe, F, v, Z]
  ), b = le(
    async (R) => {
      if (g === "idle" || g === "animating")
        return;
      const x = { x: R.clientX, y: R.clientY };
      if (!er(U.current, x) || g === "potential") {
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
      const H = {
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
          const S = o(H);
          A = S instanceof Promise ? await S : S;
        } catch {
          A = !1;
        }
      A ? (T(!0), M("idle"), N(null), w(null)) : (T(!1), M("animating"), z(B.current), setTimeout(() => {
        M("idle"), N(null), w(null), T(!0);
      }, 300));
    },
    [g, h, m, o, v]
  );
  return be(() => {
    if (g === "potential" || g === "dragging") {
      const R = (Y) => V(Y), x = (Y) => b(Y);
      return document.addEventListener("mousemove", R), document.addEventListener("mouseup", x), () => {
        document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", x);
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
      for (const x of e) {
        for (const Y of x.data)
          if (Y.some((H) => H.segmentId === h.segmentId)) {
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
    ghostPosition: J,
    ghostDimensions: P,
    dropTarget: m,
    isValidDrop: _,
    handleDragStart: j,
    isDraggable: I,
    draggingEventId: (h == null ? void 0 : h.segmentId) || null,
    resourceOnly: p
  };
}, ci = ({
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
  const { enabled: l = !1, isSelectable: f } = i, p = l && !!o, v = le((x) => {
    let Y = 0;
    for (const H of a)
      H <= x && Y++;
    return x * he + Y * Pe;
  }, [a]), [g, M] = fe("idle"), [h, N] = fe(null), [J, z] = fe(null), [P, u] = fe(null), [m, w] = fe(!1), [_, T] = fe([]), [B, U] = fe(!1), G = we(null), k = we(null), $ = we(null), D = le(() => {
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
    (x) => {
      const Y = D(), H = Math.floor(x / Y), A = E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return A.add(H * 7, "days").toDate();
        case 1:
          return A.add(H, "days").toDate();
        case 2:
          return A.add(H, "hours").toDate();
        default:
          return A.toDate();
      }
    },
    [t, r, D]
  ), I = le(
    (x) => {
      const Y = eo(x, a), H = Math.floor(Y / he);
      let A = 0;
      for (const S of e) {
        const Q = Math.max(S.data.length, 1);
        if (H < A + Q)
          return {
            resourceId: S.id,
            resourceIndex: H,
            resourceLabel: S.label
          };
        A += Q;
      }
      return null;
    },
    [e, a]
  ), q = le(
    (x) => {
      const Y = D();
      return Math.floor(x / Y) * Y;
    },
    [D]
  ), ee = le(
    (x, Y, H, A = []) => {
      const S = [], O = (n || e).find((W) => W.id === x), K = Y.getTime(), te = H.getTime();
      if (O) {
        const W = O.data[0], ie = W && Array.isArray(W) ? O.data.flat() : O.data;
        for (const me of ie) {
          const ue = new Date(me.startDate).getTime(), ae = new Date(me.endDate).getTime();
          if (K < ae && te > ue) {
            const de = new Date(Math.max(K, ue)), ce = new Date(Math.min(te, ae)), ne = ce.getTime() - de.getTime();
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
        if (W.resourceId !== x)
          continue;
        const ie = W.startDate.getTime(), me = W.endDate.getTime();
        if (K < me && te > ie) {
          const ue = new Date(Math.max(K, ie)), ae = new Date(Math.min(te, me)), de = ae.getTime() - ue.getTime(), ce = {
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
    (x) => {
      if (!p || d || !c.current || x.button !== 0)
        return;
      const Y = x.target;
      if (Y.closest("[data-segment-id]") || Y.closest("[data-multi-select-ui]"))
        return;
      const H = xt(x.clientX, x.clientY, c.current), A = I(H.y);
      if (!A)
        return;
      G.current = { x: x.clientX, y: x.clientY }, k.current = A.resourceIndex;
      const S = q(H.x), Q = D(), O = v(A.resourceIndex);
      N(H), z(H), u({
        x: S,
        y: O,
        width: Q,
        height: he
      }), M("selecting");
    },
    [p, d, c, I, q, D, v]
  ), oe = le(
    (x) => {
      if (g !== "selecting" || !c.current || k.current === null)
        return;
      const Y = xt(x.clientX, x.clientY, c.current);
      $.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
        z(Y);
        const H = D(), A = q((h == null ? void 0 : h.x) || 0), S = q(Y.x), Q = v(k.current), O = Math.min(A, S), K = Math.max(A, S) + H;
        u({
          x: O,
          y: Q,
          width: K - O,
          height: he
        });
      });
    },
    [g, c, h, D, q, v]
  ), F = le(
    (x) => {
      if (g !== "selecting")
        return;
      if (!c.current || !h || !G.current) {
        M("idle"), N(null), z(null), u(null);
        return;
      }
      const Y = xt(x.clientX, x.clientY, c.current), H = I(h.y);
      if (!H) {
        M("idle"), N(null), z(null), u(null);
        return;
      }
      const A = Math.min(h.x, Y.x), S = Math.max(h.x, Y.x), Q = L(A), O = L(S), K = E(O).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(H.resourceId, Q, K)) {
        M("idle"), N(null), z(null), u(null);
        return;
      }
      const te = ee(
        H.resourceId,
        Q,
        K,
        _
      ), W = te.length > 0, ie = {
        startDate: Q,
        endDate: K,
        resourceId: H.resourceId,
        resourceLabel: H.resourceLabel,
        zoomLevel: t,
        hasConflict: W,
        conflicts: W ? te : void 0
      };
      if (m)
        T((me) => [...me, ie]), U(!0);
      else if (o) {
        const me = o(ie), ue = (ae) => {
          ae != null && ae.continueMultiSelect && (w(!0), T([ie]), U(!0));
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
      U(!1);
      const x = s(_), Y = (H) => {
        H != null && H.continueMultiSelect ? U(!0) : (T([]), w(!1), U(!1));
      };
      x instanceof Promise ? x.then(Y) : Y(x);
      return;
    }
    T([]), w(!1), U(!1);
  }, [_, s]), Z = le(() => {
    T([]), w(!1), U(!1);
  }, []), V = le((x) => {
    T((Y) => {
      const H = Y.filter((A, S) => S !== x);
      return H.length === 0 && (w(!1), U(!1)), H;
    });
  }, []), b = le(
    (x, Y) => {
      T((H) => H.map((A, S) => {
        if (S !== x)
          return A;
        const Q = { ...A, ...Y }, O = H.filter((te, W) => W !== x), K = ee(
          Q.resourceId,
          Q.startDate,
          Q.endDate,
          O
        );
        return {
          ...Q,
          hasConflict: K.length > 0,
          conflicts: K.length > 0 ? K : void 0
        };
      }));
    },
    [ee]
  ), R = le(
    (x) => {
      x.key === "Escape" && (g === "selecting" ? (M("idle"), N(null), z(null), u(null), G.current = null, k.current = null) : m && _.length > 0 && (T([]), w(!1), U(!1)));
    },
    [g, m, _.length]
  );
  return be(() => {
    if (g === "selecting")
      return document.addEventListener("mousemove", oe), document.addEventListener("mouseup", F), document.addEventListener("keydown", R), () => {
        document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", F), document.removeEventListener("keydown", R);
      };
  }, [g, oe, F, R]), be(() => {
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
    selectionEnd: J,
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
}, li = C.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, di = C.div`
  position: relative;
`, ui = C.canvas``;
C.canvas``;
const tr = C.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, fi = Pr(function({ zoom: n, rows: t, data: r, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: d, onDragStateChange: a, onTimeRangeSelect: l, onMultiTimeRangeSelect: f, clickToAddConfig: p, separatorRowIndices: v = [] }, g) {
  const M = we(!1), { handleScrollNext: h, handleScrollPrev: N, date: J, isLoading: z, cols: P, startDate: u } = Ve(), m = we(null), w = we(null), _ = we(null), T = we(null), [B, U] = fe(!1), G = tt(), {
    dragState: k,
    draggedEvent: $,
    ghostPosition: D,
    ghostDimensions: L,
    dropTarget: I,
    isValidDrop: q,
    handleDragStart: ee,
    isDraggable: se,
    draggingEventId: oe,
    resourceOnly: F
  } = ai({
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
  be(() => {
    const W = k === "dragging" || k === "potential";
    U(W), a && a(W);
  }, [k, a]);
  const {
    selectionState: j,
    selectionBox: Z,
    handleGridMouseDown: V,
    pendingSelections: b,
    confirmSelections: R,
    clearSelections: x,
    removeSelection: Y,
    updateSelection: H,
    isMultiSelectActive: A,
    hasUnconfirmedSelections: S
  } = ci({
    data: r,
    baseData: o || r,
    zoom: n,
    startDate: u,
    onTimeRangeSelect: l,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: p,
    gridRef: T,
    isDragging: B,
    separatorRowIndices: v
  }), Q = le((W) => {
    W.preventDefault();
  }, []), O = le((W) => {
    W.preventDefault();
  }, []), K = v.length * Pe, te = le(
    (W) => {
      const ie = _n(), me = t * he + 1 + K;
      Qr(W, ie, me), _s(W, n, t, P, u, G, v);
    },
    [P, u, t, n, G, v, K]
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
  }, [J, t, n, te]), be(() => {
    if (!w.current)
      return;
    const W = new IntersectionObserver(
      (ie) => {
        ie[0].isIntersecting && !M.current && (M.current = !0, h(), setTimeout(() => {
          M.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Qe) }
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
        root: document.getElementById(Qe),
        rootMargin: `0px 0px 0px -${Ye}px`
      }
    );
    return W.observe(_.current), () => {
      W.disconnect();
    };
  }, [N]), /* @__PURE__ */ X(li, { id: Gr, children: [
    /* @__PURE__ */ X(
      di,
      {
        ref: (W) => {
          typeof g == "function" ? g(W) : g && (g.current = W), T.current = W;
        },
        onMouseDown: V,
        style: { cursor: l ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ y(tr, { position: "left", ref: _ }),
          /* @__PURE__ */ y(gn, { isLoading: z, position: "left" }),
          /* @__PURE__ */ y(
            ui,
            {
              ref: m,
              onDragStart: Q,
              onDragOver: O,
              style: { userSelect: k === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ y(Kl, { zoom: n, startDate: u }),
          /* @__PURE__ */ y(
            Uc,
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
          /* @__PURE__ */ y(tr, { ref: w, position: "right" }),
          /* @__PURE__ */ y(gn, { isLoading: z, position: "right" }),
          (k === "dragging" || k === "animating") && /* @__PURE__ */ y(
            $l,
            {
              draggedEvent: $,
              ghostPosition: D,
              ghostDimensions: L,
              dropTarget: I,
              isValidDrop: q,
              dragState: k,
              zoom: n,
              data: r,
              resourceOnly: F,
              separatorRowIndices: v
            }
          ),
          /* @__PURE__ */ y(
            Pl,
            {
              selectionBox: Z,
              isSelecting: j === "selecting"
            }
          ),
          A && b.length > 0 && /* @__PURE__ */ y(
            Gl,
            {
              selections: b,
              data: r,
              zoom: n,
              startDate: u,
              onRemove: Y,
              onUpdate: H,
              separatorRowIndices: v
            }
          )
        ]
      }
    ),
    A && S && b.length > 0 && /* @__PURE__ */ y(
      Hl,
      {
        selections: b,
        onConfirm: R,
        onClear: x,
        onRemove: Y
      }
    )
  ] });
}), to = (e) => {
  const n = E.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, no = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / Ce);
    t += o.hours + s, r += n % Ce, r >= Ce && (t++, r -= Ce);
  }), { hours: t, minutes: r };
}, ro = (e, n) => {
  let t = Un;
  switch (n) {
    case 0:
      t = ws;
      break;
    case 1:
      t = Un;
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
}, hi = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const l = E(a.startDate).isoWeek(), f = E(a.startDate).isoWeekday(), p = E(a.endDate).isoWeek(), v = E(a.endDate).isoWeekday(), { hours: g, minutes: M } = to(a.occupancy);
    if (r === l) {
      const h = (Be + 1 - f) * g, N = (Be + 1 - f) * M;
      return { hours: Math.max(0, h), minutes: N };
    } else if (r === p) {
      const h = v > Be ? Be * g : v * g, N = v > Be ? Be * M : v * M;
      return { hours: h, minutes: N };
    } else if (E(n).isBetween(a.startDate, a.endDate))
      return { hours: Be * g, minutes: Be * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = no(o), { free: c, overtime: d } = ro({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: d
  };
}, pi = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((l) => {
    const { hours: f, minutes: p } = to(l.occupancy);
    return o <= (r ? 7 : 5) ? { hours: f, minutes: p } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = no(s), { free: d, overtime: a } = ro({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: d,
    overtime: a
  };
}, mi = (e, n) => {
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
}, gi = (e, n, t, r, o = !1) => {
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
      return pi(s, t, r, o);
    case 2:
      return mi(s, t);
    default:
      return hi(s, t, r);
  }
}, yi = (e, n, t, r, o, s, i = !1) => {
  let c = "weeks", d;
  switch (s) {
    case 0:
      c = "weeks", d = ft;
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
  ).add(a - 1, c), f = Math.ceil(t.y / he), p = r.findIndex((N, J, z) => z.slice(0, J + 1).reduce((u, m) => u + m, 0) >= f), v = s === 2 ? (a + 1) * d : a * d, g = (f - 1) * he + he, M = gi(
    o[p],
    p,
    l,
    s,
    i
  ), h = E(e.startDate).isSame(E(e.endDate), "day");
  return {
    coords: { x: v, y: g },
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
function vi(e, n) {
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
function xi(e) {
  const n = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const l of e)
    !l.isSubcontract && l.capacity != null && t.add(l.capacity);
  const r = [...t].sort((l, f) => l - f);
  if (r.length < 2)
    return n;
  const o = Math.min(5, r.length), s = vi(r, o), i = [];
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
    for (const g of l.values)
      a.set(g, p);
  }), { categories: d, capacityToCategoryId: a };
}
const bi = (e, n, t, r) => {
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
var ln = {}, wi = {
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
    return function(t, r) {
      r.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(wi);
const Si = ln;
var dn = {}, Ci = {
  get exports() {
    return dn;
  },
  set exports(e) {
    dn = e;
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
})(Ci);
const Mi = dn, ki = (e) => {
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
E.extend(Si);
E.extend(Mi);
const nr = /* @__PURE__ */ new WeakMap(), Di = (e) => {
  const n = nr.get(e);
  if (n)
    return n;
  const t = [...e].sort((o, s) => {
    const i = E(o.startDate), c = E(s.startDate), d = i.startOf("day").diff(c.startOf("day"), "day");
    return d !== 0 ? d : i.diff(c);
  }), r = ki(t);
  return nr.set(e, r), r;
}, $i = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = Di(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, Ei = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, _i = (e) => {
  const { recordsThreshold: n } = Ve(), [t, r] = fe(0), [o, s] = fe(0), i = we(null);
  be(() => {
    i.current = document.getElementById(Qe);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: d } = $e(() => $i(e), [e]), a = $e(
    () => bi(e, c, d, n),
    [e, c, n, d]
  ), l = le(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((h) => h + a[Math.max(o, 0)].length), s((h) => Math.min(h + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = le(() => {
    a[o].length && (r((h) => Math.max(h - a[o - 1].length, 0)), s((h) => Math.max(h - 1, 0)));
  }, [o, a]), p = le(() => {
    r(0), s(0);
  }, []), v = t + a[o].length, g = $e(
    () => d.slice(t, v),
    [v, d, t]
  ), M = $e(
    () => c.slice(t, v),
    [v, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: g,
    totalRowsPerPage: Ei(a[o]),
    next: l,
    previous: f,
    reset: p
  };
};
var un = {}, Ti = {
  get exports() {
    return un;
  },
  set exports(e) {
    un = e;
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
})(Ti);
const Pi = un;
var fn = {}, Ai = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
  })(Ee, function(t) {
    function r(p) {
      return p && typeof p == "object" && "default" in p ? p : { default: p };
    }
    var o = r(t);
    function s(p) {
      return p % 10 < 5 && p % 10 > 1 && ~~(p / 10) % 10 != 1;
    }
    function i(p, v, g) {
      var M = p + " ";
      switch (g) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return M + (s(p) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return M + (s(p) ? "godziny" : "godzin");
        case "MM":
          return M + (s(p) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(p) ? "lata" : "lat");
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
})(Ai);
const Ii = fn;
var hn = {}, Yi = {
  get exports() {
    return hn;
  },
  set exports(e) {
    hn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
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
})(Yi);
const Oi = hn;
var pn = {}, Li = {
  get exports() {
    return pn;
  },
  set exports(e) {
    pn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
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
})(Li);
const Ri = pn;
var mn = {}, Ni = {
  get exports() {
    return mn;
  },
  set exports(e) {
    mn = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(et);
  })(Ee, function(t) {
    function r(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = r(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Ni);
const Wi = mn, Hi = {
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
}, Fi = {
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
}, Bi = {
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
}, zi = {
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
}, ji = {
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
}, Zi = [
  {
    id: "en",
    lang: Bi,
    translateCode: "en-GB",
    dayjsTranslations: Pi
  },
  {
    id: "pl",
    lang: Fi,
    translateCode: "pl-PL",
    dayjsTranslations: Ii
  },
  {
    id: "es",
    lang: Hi,
    translateCode: "es-ES",
    dayjsTranslations: Wi
  },
  {
    id: "lt",
    lang: ji,
    translateCode: "lt-LT",
    dayjsTranslations: Ri
  },
  {
    id: "de",
    lang: zi,
    translateCode: "de-DE",
    dayjsTranslations: Oi
  }
];
class Vi {
  constructor() {
    Tn(this, "locales", Zi);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const Lt = new Vi(), oo = Tr({
  localesData: Lt.getLocales(),
  currentLocale: Lt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Gi = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = fe("en"), s = Lt.getLocales(), i = le(() => {
    const f = s.find((p) => p.id === r);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && E.locale(f.dayjsTranslations), f || s[0];
  }, [r, s]), [c, d] = fe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), d(f);
  };
  be(() => {
    t == null || t.forEach((f) => {
      s.find((v) => v.id === f.id) || Lt.addLocales(f);
    });
  }, [s, t]), be(() => {
    const f = localStorage.getItem("locale"), p = n ?? f ?? "en";
    localStorage.setItem("locale", p), o(p), d(i());
  }, [i, n]);
  const { Provider: l } = oo;
  return /* @__PURE__ */ y(l, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ge = () => Ze(oo).currentLocale.lang, Xi = (e) => /* @__PURE__ */ re.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ re.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ re.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ re.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ re.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ re.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ re.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ re.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Ui = C.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Ki = C.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Ji = ({ onTileClick: e }) => {
  const { feelingEmpty: n } = Ge();
  return /* @__PURE__ */ X(Ui, { onClick: e, children: [
    /* @__PURE__ */ y(Xi, {}),
    /* @__PURE__ */ y(Ki, { children: n })
  ] });
}, qi = C.div`
  position: relative;
  display: flex;
`, Qi = C.div`
  position: relative;
  margin-left: ${Ye};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ea = C.div`
  width: calc(${({ width: e }) => e}px - ${Ye}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ye}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, zt = {
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
    reservationType: St.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function ta(e, n) {
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
const na = ({
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
  const [v, g] = fe(zt), [M, h] = fe(e), [N, J] = fe(!1), [z, P] = fe(!1), [u, m] = fe(""), [w, _] = fe(/* @__PURE__ */ new Set()), {
    zoom: T,
    startDate: B,
    isLoading: U,
    config: { includeTakenHoursOnWeekendsInDayView: G, showTooltip: k, showThemeToggle: $ }
  } = Ve(), D = we(null), {
    page: L,
    projectsPerPerson: I,
    rowsPerItem: q,
    currentPageNum: ee,
    pagesAmount: se,
    next: oe,
    previous: F,
    reset: j
  } = _i(M), { effectiveCategories: Z, effectivePage: V } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: L };
    const ae = xi(L);
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
  }, [Z, V]), x = le(() => {
    _(/* @__PURE__ */ new Set());
  }, []), Y = le(() => {
    _(new Set(R));
  }, [R]), {
    visiblePage: H,
    visibleRowsPerItem: A,
    visibleTotalRows: S,
    visibleProjectsPerPerson: Q,
    separatorRowIndices: O
  } = $e(() => {
    const ae = ta(V, Z), de = ((Z == null ? void 0 : Z.length) ?? 0) > 0, ce = /* @__PURE__ */ new Map();
    L.forEach((ke, Re) => ce.set(ke.id, Re));
    const ne = [], pe = [], Me = [], Ae = [];
    let Te = 0;
    for (const ke of ae)
      if (ke.type === "subcontract" || ke.type === "category" && de) {
        const nt = ke.type === "subcontract" ? "__subcontract__" : ke.category.id, rt = w.has(nt);
        if (Ae.push(Te), !rt)
          for (const Xe of ke.items) {
            const Ct = ce.get(Xe.id) ?? 0, Mt = q[Ct];
            ne.push(Xe), pe.push(Mt), Me.push(I[Ct]), Te += Mt;
          }
      } else
        for (const nt of ke.items) {
          const rt = ce.get(nt.id) ?? 0, Xe = q[rt];
          ne.push(nt), pe.push(Xe), Me.push(I[rt]), Te += Xe;
        }
    const Wt = pe.reduce((ke, Re) => ke + Re, 0);
    return {
      visiblePage: ne,
      visibleRowsPerItem: pe,
      visibleTotalRows: Wt,
      visibleProjectsPerPerson: Me,
      separatorRowIndices: Ae
    };
  }, [V, Z, L, w, q, I]), K = we(
    st(
      (ae, de, ce, ne, pe, Me) => {
        if (!D.current)
          return;
        const { tile: Ae, segmentId: Te } = ie(ae);
        if (!Te || !Ae) {
          J(!1), g(zt);
          return;
        }
        const Wt = W(Te, de), ke = D.current.getBoundingClientRect(), Re = Ae.getBoundingClientRect(), nt = { x: ae.clientX - ke.left, y: ae.clientY - ke.top }, rt = {
          x: ae.clientX - ke.left,
          y: ae.clientY - ke.top
        }, Xe = {
          x: Re.left - ke.left,
          y: Re.top - ke.top,
          width: Re.width,
          height: Re.height
        }, {
          coords: { x: Ct, y: Mt },
          resourceIndex: ao,
          disposition: co,
          reservationData: lo
        } = yi(
          Wt,
          ce,
          nt,
          ne,
          pe,
          Me,
          G
        );
        g({
          coords: { x: Ct, y: Mt },
          mouseCoords: rt,
          resourceIndex: ao,
          disposition: co,
          reservationData: lo,
          tileBounds: Xe
        }), J(!0);
      },
      4
    )
  ), te = we(
    st((ae, de) => {
      j(), h(
        ae.map((ce) => ({
          ...ce,
          data: ce.data.filter((ne) => {
            const { title: pe, description: Me, subtitle: Ae } = ne;
            return (pe == null ? void 0 : pe.toLowerCase().includes(de.toLowerCase())) || (Ae == null ? void 0 : Ae.toLowerCase().includes(de.toLowerCase())) || (Me == null ? void 0 : Me.toLowerCase().includes(de.toLowerCase()));
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
    K.current.cancel(), J(!1), g(zt);
  }, []);
  return be(() => {
    const ae = (ce) => K.current(
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
    K,
    ue,
    Q,
    A,
    B,
    T,
    e
  ]), be(() => {
    u ? (te.current.cancel(), te.current(e, u)) : h(e);
  }, [e, u]), /* @__PURE__ */ X(qi, { children: [
    /* @__PURE__ */ y(
      Qa,
      {
        data: V,
        categories: Z,
        pageNum: ee,
        pagesAmount: se,
        rows: q,
        onLoadNext: oe,
        onLoadPrevious: F,
        searchInputValue: u,
        onSearchInputChange: me,
        onItemClick: o,
        collapsedGroups: w,
        onToggleGroup: b,
        allGroupIds: R,
        onExpandAll: x,
        onCollapseAll: Y
      }
    ),
    /* @__PURE__ */ X(Qi, { children: [
      /* @__PURE__ */ y(
        $c,
        {
          zoom: T,
          topBarWidth: i,
          showThemeToggle: $,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ y(
        fi,
        {
          data: H,
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
      ) : /* @__PURE__ */ y(ea, { width: i, children: U ? /* @__PURE__ */ y(gn, { isLoading: U, position: "left" }) : /* @__PURE__ */ y(Ji, {}) }),
      k && N && !z && (v == null ? void 0 : v.resourceIndex) > -1 && /* @__PURE__ */ y(ul, { tooltipData: v })
    ] })
  ] });
}, so = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, ra = C.div`
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
`, oa = C.div`
  display: flex;
  gap: 1.875rem;
`, rr = C.button`
  ${so};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, sa = C.button`
  ${so};
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
`, ia = C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, aa = C.div`
  display: flex;
`, ca = C.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, la = ({ width: e, showThemeToggle: n, toggleTheme: t }) => {
  const { topbar: r } = Ge(), {
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
    onClearFilterData: g
  } = Ve(), { colors: M } = tt(), { filterButtonState: h = -1 } = s, N = (J) => {
    J.stopPropagation(), g == null || g();
  };
  return /* @__PURE__ */ X(ra, { width: e, children: [
    /* @__PURE__ */ y(aa, { children: h >= 0 && /* @__PURE__ */ X(
      jt,
      {
        variant: h ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: v,
        children: [
          r.filters,
          !!h && /* @__PURE__ */ y("span", { onClick: N, children: /* @__PURE__ */ y(We, { iconName: "close", height: "16", width: "16", fill: M.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ X(oa, { children: [
      /* @__PURE__ */ X(rr, { onClick: c, children: [
        /* @__PURE__ */ y(We, { iconName: "arrowLeft", height: "15", fill: M.textPrimary }),
        r.prev
      ] }),
      /* @__PURE__ */ y(sa, { onClick: d, children: r.today }),
      /* @__PURE__ */ X(rr, { onClick: i, children: [
        r.next,
        /* @__PURE__ */ y(We, { iconName: "arrowRight", height: "15", fill: M.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ X(ca, { children: [
      n && /* @__PURE__ */ y(ml, { toggleTheme: t }),
      /* @__PURE__ */ X(ia, { children: [
        r.view,
        /* @__PURE__ */ y(
          jt,
          {
            isDisabled: !p,
            onClick: l,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ y(
          jt,
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
}, da = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), ua = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), fa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), ha = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), pa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), ma = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ga = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), ya = (e) => /* @__PURE__ */ re.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), va = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), xa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), ba = (e) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), wa = (e) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Sa = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Ca = (e) => /* @__PURE__ */ re.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ re.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Ma = {
  add: da,
  subtract: ua,
  filter: fa,
  arrowLeft: ha,
  arrowRight: pa,
  defaultAvatar: ma,
  calendarWarning: ga,
  calendarFree: ya,
  arrowDown: xa,
  arrowUp: va,
  search: ba,
  close: wa,
  moon: Sa,
  sun: Ca
}, We = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = tt(), i = Ma[e];
  return i ? /* @__PURE__ */ y(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.accent,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, ka = (e, n, t) => ({
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
})[n], Da = C.button`
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
  ${({ theme: e, variant: n, disabled: t }) => ka(e, n, t)}
`, jt = ({
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
  const { colors: l } = tt();
  return /* @__PURE__ */ X(
    Da,
    {
      onClick: s,
      isFullRounded: c,
      hasChildren: !!i,
      disabled: d,
      variant: a,
      children: [
        /* @__PURE__ */ y(
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
}, $a = C.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Ea = C.div`
  position: relative;
`, _a = ({
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
  const { goToDate: g, handleGoToday: M, zoomIn: h, zoomOut: N, zoom: J } = Ve();
  return Ar(
    l,
    () => ({
      goToDate: g,
      goToToday: M,
      setZoom: (z) => {
        if (!Jr(z))
          return;
        const P = z - J;
        if (P > 0)
          for (let u = 0; u < P; u++)
            h();
        else
          for (let u = 0; u < Math.abs(P); u++)
            N();
      }
    }),
    [g, M, J, h, N]
  ), /* @__PURE__ */ y(
    na,
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
}, td = Pr(function({
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
  draggableConfig: g,
  onTimeRangeSelect: M,
  onMultiTimeRangeSelect: h,
  clickToAddConfig: N
}, J) {
  var D;
  const z = $e(
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
  ), P = we(null), u = we(null), [m, w] = fe((D = P.current) == null ? void 0 : D.clientWidth), _ = $e(() => E(s), [s]), [T, B] = fe(z.defaultTheme ?? "light"), U = () => {
    B(T === "light" ? "dark" : "light");
  }, G = T === "light" ? ps : ms, k = z.theme ? z.theme[G.mode] : {}, $ = {
    ...G,
    colors: {
      ...G.colors,
      ...k
    }
  };
  return Ar(
    J,
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
  }, []), P.current, /* @__PURE__ */ X(De, { children: [
    /* @__PURE__ */ y(hs, {}),
    /* @__PURE__ */ y(ds, { theme: $, children: /* @__PURE__ */ y(Gi, { lang: z.lang, translations: z.translations, children: /* @__PURE__ */ y(
      si,
      {
        data: n,
        isLoading: !!f,
        config: z,
        onRangeChange: i,
        defaultStartDate: _,
        handleToggleDisplayActiveUnits: d,
        onClearFilterData: a,
        children: /* @__PURE__ */ y(
          $a,
          {
            showScroll: !!n.length,
            id: Qe,
            ref: P,
            children: /* @__PURE__ */ y(Ea, { children: /* @__PURE__ */ y(
              _a,
              {
                data: n,
                baseData: r,
                categories: t,
                onTileClick: c,
                topBarWidth: m ?? 0,
                onItemClick: l,
                toggleTheme: U,
                onEventDrop: p,
                onEventDrag: v,
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
}), Ta = C.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, Pa = C.button`
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
`, Aa = C.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ia = C.p`
  ${pt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, or = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Ge(), d = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ y(Ta, { intent: e, children: /* @__PURE__ */ X(Pa, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ y(Aa, { children: t }),
    /* @__PURE__ */ y(Ia, { children: d })
  ] }) });
}, Ya = C.div`
  min-width: ${Ye + "px"};
  max-width: ${Ye + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Oa = C.div`
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
`, La = C.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, Ra = C.input`
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
`, Na = C.div`
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
`, Wa = C.button`
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
`, Ha = C.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${he}px;
  height: calc(${he}px * ${({ rows: e }) => e});
  border-top: 1px solid
    ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBorder + "33" : e.colors.border};
  background-color: ${({ theme: e, $isSubcontract: n }) => n ? e.colors.subcontractBg : "transparent"};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Fa = C.div`
  display: flex;
  align-items: center;
`, Ba = C.div`
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
`, za = C.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, ja = C.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, sr = C.p`
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
`, Za = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Va = () => /* @__PURE__ */ X("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ y("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ y("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ y("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ y("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ y("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Ga = () => /* @__PURE__ */ X("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ y("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ y("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), Xa = ({ id: e, item: n, rows: t, onItemClick: r, isSubcontract: o }) => /* @__PURE__ */ y(
  Ha,
  {
    title: n.title,
    clickable: typeof r == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ X(Fa, { children: [
      /* @__PURE__ */ y(Ba, { $provider: o, children: Za(n.icon) ? /* @__PURE__ */ y(za, { src: n.icon, alt: "" }) : o ? /* @__PURE__ */ y(Ga, {}) : /* @__PURE__ */ y(Va, {}) }),
      /* @__PURE__ */ X(ja, { children: [
        /* @__PURE__ */ y(sr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ y(sr, { children: n.subtitle })
      ] })
    ] })
  }
), Ua = C.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBg : e.colors.accent + "14"};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractBg : e.colors.accent + "22"};
  }
`, Ka = C.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`, Ja = C.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: n }) => n === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, qa = C.div`
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
`, ir = ({
  label: e,
  count: n,
  isCollapsed: t,
  onToggle: r,
  variant: o = "category"
}) => /* @__PURE__ */ X(Ua, { $variant: o, onClick: r, title: e, children: [
  /* @__PURE__ */ y(qa, { $collapsed: t, children: /* @__PURE__ */ y("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ y(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ y(Ka, { $variant: o, children: e }),
  /* @__PURE__ */ y(Ja, { $variant: o, children: n })
] }), Qa = ({
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
  onCollapseAll: g
}) => {
  const [M, h] = fe(!1), N = Ge(), J = () => h((G) => !G), z = n ? [...n].sort((G, k) => G.maxPassengers - k.maxPassengers) : [], P = z.length > 0, u = p.length > 0, m = u && l.size === p.length;
  u && l.size;
  const w = e.filter((G) => G.isSubcontract), _ = N.subcontract ?? "Subcontract", T = (G) => {
    const k = e.indexOf(G);
    return /* @__PURE__ */ y(
      Xa,
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
    return /* @__PURE__ */ X("div", { children: [
      /* @__PURE__ */ y(
        ir,
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
  }, U = e.filter(
    (G) => !G.isSubcontract && (!G.categoryId || !P)
  );
  return /* @__PURE__ */ X(Ya, { children: [
    /* @__PURE__ */ X(Oa, { children: [
      /* @__PURE__ */ X(La, { children: [
        /* @__PURE__ */ X(Na, { isFocused: M, children: [
          /* @__PURE__ */ y(
            Ra,
            {
              placeholder: N.search,
              value: c,
              onChange: d,
              onFocus: J,
              onBlur: J
            }
          ),
          /* @__PURE__ */ y(We, { iconName: "search" })
        ] }),
        u && /* @__PURE__ */ y(
          Wa,
          {
            title: m ? "Expand all" : "Collapse all",
            onClick: m ? v : g,
            $allCollapsed: m,
            children: /* @__PURE__ */ y("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: m ? /* @__PURE__ */ X(De, { children: [
              /* @__PURE__ */ y("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ y("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ X(De, { children: [
              /* @__PURE__ */ y("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ y("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ y(
        or,
        {
          intent: "previous",
          isVisible: s !== 0,
          onClick: o,
          icon: /* @__PURE__ */ y(We, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: s,
          pagesAmount: i
        }
      )
    ] }),
    P ? z.map(B) : U.map(T),
    P && U.length > 0 && U.map(T),
    w.length > 0 && /* @__PURE__ */ X(De, { children: [
      /* @__PURE__ */ y(
        ir,
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
    /* @__PURE__ */ y(
      or,
      {
        intent: "next",
        isVisible: s !== i - 1,
        onClick: r,
        icon: /* @__PURE__ */ y(We, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: s,
        pagesAmount: i
      }
    )
  ] });
}, ec = C.div`
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
`, tc = Nt`
from{
    left: -100%;
}
to{
    left: 100%;
}`, nc = C.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${tc} 1s infinite;
`, rc = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ y(ec, { position: n, children: /* @__PURE__ */ y(nc, {}) }) : null, gn = rc, Fe = (e, n) => {
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
    strokeStyle: g,
    labelBetweenCells: M
  } = e;
  if (t.beginPath(), t.strokeStyle = g ?? n.colors.border, t.setLineDash([]), d && a && c) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(r, o, s, i), M ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
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
}, yn = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, oc = (e, n, t, r) => {
  const o = ut - Ke / ys, s = ut - Ke / vs, i = He + gt;
  let c = 0;
  for (let d = 0; d < n; d++) {
    const a = Kr(
      E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(d, "days")
    ), l = a.isCurrentDay;
    if (Fe(
      {
        ctx: e,
        x: c,
        y: i,
        width: Se,
        height: Ke,
        isBottomRow: !0,
        fillStyle: l ? r.colors.today + "26" : a.isBusinessDay ? r.colors.gridBackground : r.colors.primary,
        topText: {
          y: o,
          label: l ? "" : a.dayName.toUpperCase(),
          font: Le.bottomRow.name,
          color: yn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, r)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: l ? "700 10px Inter" : Le.bottomRow.number,
          color: l ? r.colors.today : yn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            r
          )
        }
      },
      r
    ), l) {
      const v = c + Se / 2, g = o - 13 / 2;
      e.save(), e.fillStyle = r.colors.today, e.beginPath(), e.roundRect ? e.roundRect(v - 30 / 2, g, 30, 13, 5) : e.rect(v - 30 / 2, g, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = "800 8.5px Inter", e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", v, g + 13 / 2 + 0.5), e.restore();
    }
    c += Se;
  }
}, sc = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Ie;
  const s = He;
  let c = t.month;
  for (let d = 0; d < n; d++) {
    c >= tn && (c = 0);
    const a = Ur(t, d) * Ie;
    Fe(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: gt,
        textYPos: Xr,
        label: E().month(c).format("MMMM").toUpperCase(),
        font: Le.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, ic = (e, n, t) => {
  let o = 0, s = 0, i = E(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * Se + Se;
  for (let c = 0; c < tn; c++)
    i > tn - 1 && (i = 0), s = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * Se, Fe(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: He,
        textYPos: Mn,
        label: E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: Le.topRow
      },
      t
    ), o += s, i++;
}, ac = (e, n, t, r) => {
  const o = 7 * Se, s = He, i = e.canvas.width / o + o, c = n.weekOfYear;
  let d = 0;
  for (let a = 0; a < i; a++) {
    const l = E(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let f = (c + a) % Xn;
    f <= 0 && (f += Xn), l !== 1 && a === 0 && (d = -l * Se + Se), Fe(
      {
        ctx: e,
        x: d,
        y: s,
        width: o,
        height: gt,
        textYPos: Xr,
        label: `${t.toUpperCase()} ${f}`,
        font: Le.middleRow
      },
      r
    ), d += o;
  }
}, cc = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t ? n.colors.currentDay : r ? n.colors.primary : n.colors.secondary;
}, lc = (e, n, t, r, o) => {
  const s = ut - Ke / 1.6, i = ut - Ke / 4.5, c = He + gt;
  let d = 0;
  for (let a = 0; a < n; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = l.isSame(E(), "week");
    Fe(
      {
        ctx: e,
        x: d,
        y: c,
        width: ft,
        height: Ke,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : cc({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: l.isoWeek().toString(),
          font: f ? "700 14px Inter" : Le.bottomRow.name,
          color: f ? o.colors.today : yn({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: r.toUpperCase(),
          font: Le.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), d += ft;
  }
}, dc = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, d = 0, a = (Jn(s) - t + 1) * Ie, l = 0;
  for (; c + l <= i; )
    d > 0 && (a = Jn(s + d) * Ie), l + a > i && d > 0 && (a = Math.ceil((i - l) / Ie) * Ie), Fe(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: He,
        textYPos: Mn,
        label: (s + d).toString(),
        font: Le.topRow
      },
      r
    ), c += a, l += a, d++;
}, uc = (e, n, t, r) => {
  const o = Math.floor(n / Ot) + 2, s = Ot * _e;
  let d = -E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * _e + 0.5 * _e;
  for (let a = 0; a < o; a++) {
    const l = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Fe(
      {
        ctx: e,
        x: d,
        y: ht,
        width: s,
        height: wt,
        textYPos: ht + wt / 2 + 2,
        label: l,
        font: Le.bottomRow.number
      },
      r
    ), d += s;
  }
}, fc = (e, n, t, r) => {
  const o = Math.ceil(n / Ot), s = E(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), d = i.add(1, "day").month(), a = c === d ? 1 : 2;
  let l = 0.5 * _e;
  for (let f = 0; f < a; f++) {
    const p = E(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), g = E(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), M = g.format("MMMM").toUpperCase(), h = g.diff(p, "hour") + 1, N = f === 0 ? h * _e : n * _e;
    Fe(
      {
        ctx: e,
        x: l,
        y: 0,
        width: N,
        height: ht,
        textYPos: Mn,
        label: M,
        font: Le.topRow
      },
      r
    ), l += N;
  }
}, hc = (e, n, t, r) => {
  let o = 0;
  const s = ht + wt, i = E(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = _e;
  for (let d = 0; d < n; d++) {
    const a = i.add(d, "hours").format("h:00a").toUpperCase();
    Fe(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: en,
        label: a,
        font: Le.bottomRow.hoursInDay,
        textYPos: ht + wt + en / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += _e;
  }
}, pc = (e, n, t, r, o, s, i) => {
  switch (n) {
    case 0:
      dc(e, r, s, i), sc(e, t, r, i), lc(e, t, r, o, i);
      break;
    case 1:
      ic(e, r, i), ac(e, r, o, i), oc(e, t, r, i);
      break;
    case 2:
      fc(e, t, r, i), uc(e, t, r, i), hc(e, t, r, i);
      break;
  }
}, mc = C.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, gc = C.div`
  height: ${ut}px;
  display: block;
`, yc = C.canvas``, vc = {
  transfer: /* @__PURE__ */ X(De, { children: [
    /* @__PURE__ */ y("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ y("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ X(De, { children: [
    /* @__PURE__ */ y("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ y("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ X(De, { children: [
    /* @__PURE__ */ y("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ y("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ X(De, { children: [
    /* @__PURE__ */ y("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ y("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ y("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ X(De, { children: [
    /* @__PURE__ */ y("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ y("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ X(De, { children: [
    /* @__PURE__ */ y("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ y("path", { d: "M12 7.5V12l3 2" })
  ] })
}, ze = ({
  name: e,
  className: n,
  strokeWidth: t = 2
}) => /* @__PURE__ */ y(
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
), xc = C.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, ar = C.span`
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
`, _t = C.span`
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
`, bc = C.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: #b4791e;
  background: #fbf1de;
  border: 1px solid #e9d3a6;
  padding: 1px 5px;
  border-radius: 5px;
`, wc = C.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, Sc = C.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, Cc = C.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, Mc = C.span`
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
`, kc = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], Dc = () => /* @__PURE__ */ X(xc, { children: [
  /* @__PURE__ */ y(ar, { children: "Leyenda" }),
  /* @__PURE__ */ X(_t, { children: [
    /* @__PURE__ */ y(ze, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ X(_t, { children: [
    /* @__PURE__ */ y(ze, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ X(_t, { children: [
    /* @__PURE__ */ y(ze, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ X(_t, { children: [
    /* @__PURE__ */ y(bc, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ y(wc, {}),
  /* @__PURE__ */ X(ar, { children: [
    "Estado ",
    /* @__PURE__ */ y("em", { children: "franja izq. + punto esq." })
  ] }),
  kc.map((e) => /* @__PURE__ */ X(Sc, { children: [
    /* @__PURE__ */ y(Cc, { style: { background: e.stripe } }),
    /* @__PURE__ */ y(Mc, { style: { color: e.color }, children: /* @__PURE__ */ y(ze, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), $c = ({ zoom: e, topBarWidth: n, showThemeToggle: t, toggleTheme: r }) => {
  const { week: o } = Ge(), { date: s, cols: i, dayOfYear: c, startDate: d, config: a } = Ve(), l = we(null), f = tt(), p = le(
    (v) => {
      const g = _n(), h = (e === 2 ? gs : ut) + 1;
      Qr(v, g, h), pc(v, e, i, d, o, c, f);
    },
    [i, c, d, o, e, f]
  );
  return be(() => {
    if (!l.current)
      return;
    const v = l.current.getContext("2d");
    if (!v)
      return;
    const g = () => p(v);
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, [p]), be(() => {
    const v = l.current;
    if (!v)
      return;
    v.style.letterSpacing = "1px";
    const g = v.getContext("2d");
    g && p(g);
  }, [s, e, p]), /* @__PURE__ */ X(mc, { children: [
    a.showTopbar !== !1 && /* @__PURE__ */ y(la, { width: n, showThemeToggle: t, toggleTheme: r }),
    a.showLegend !== !1 && /* @__PURE__ */ y(Dc, {}),
    /* @__PURE__ */ y(gc, { id: xs, children: /* @__PURE__ */ y(yc, { ref: l }) })
  ] });
}, Ec = (e, n, t) => {
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
}, _c = (e, n, t, r, o, s) => {
  const i = e * he + bs, c = n.hour(), d = t.hour();
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
    ...Ec(
      { startDate: a, endDate: l },
      { startDate: f, endDate: p },
      s
    ),
    y: i
  };
}, io = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
};
C.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
C.p`
  ${pt}
  ${mt}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const Tc = C.button`
  ${pt}
  position: absolute;
  height: ${Cn}px;
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
`, Pc = C.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`, Ac = C.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, cr = C.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, Ic = C.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, Yc = C.span`
  ${mt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 750;
`, lr = C.span`
  ${mt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, Oc = C.span`
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
`, Lc = C.div`
  ${mt}
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
`, dr = C.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Rc = C.span`
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
`, ur = C.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, Nc = C.div`
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
`, fr = C.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, Wc = C.span`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid #fff;
`, Hc = 34, Fc = 156, Bc = 248, zc = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, jc = "#3E8E5A", Zc = "#D98A22", Vc = ({
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
  const { date: a } = Ve(), l = En(a, t), { y: f, x: p, width: v } = _c(
    e,
    l.startDate,
    l.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: g } = tt(), M = we(null), h = E(n.startDate).isSame(E(n.endDate), "day"), N = n.eventType === St.Tour, J = n.eventType === St.Transfer, z = h && (N || J), P = (k) => {
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
    width: `${v}px`,
    color: io(n.bgColor ?? "")
  }, w = !r && n.readiness ? zc[n.readiness] : null, _ = r && n.subcontractConfirmed === !1, T = r ? _ ? Zc : jc : w == null ? void 0 : w.stripe, B = (k) => /* @__PURE__ */ X(
    Tc,
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
        T && /* @__PURE__ */ y(Pc, { style: { background: T } }),
        k
      ]
    }
  );
  if (z)
    return B(
      /* @__PURE__ */ X(De, { children: [
        r && /* @__PURE__ */ y(dr, { $sm: !0, children: /* @__PURE__ */ y(ur, { children: "SUB" }) }),
        /* @__PURE__ */ X(Nc, { children: [
          /* @__PURE__ */ y(ze, { name: J ? "transfer" : "sun", strokeWidth: 2.4 }),
          v >= Hc && /* @__PURE__ */ X(De, { children: [
            /* @__PURE__ */ y(fr, { children: E(n.startDate).format("HH:mm") }),
            !J && /* @__PURE__ */ y(fr, { $end: !0, children: E(n.endDate).format("HH:mm") })
          ] }),
          w && /* @__PURE__ */ y(Wc, { style: { background: w.color } })
        ] })
      ] })
    );
  const U = v >= Bc, G = n.bookingNumber ? /* @__PURE__ */ y(Oc, { children: n.bookingNumber }) : null;
  return B(
    /* @__PURE__ */ X(De, { children: [
      /* @__PURE__ */ y(dr, { children: r ? /* @__PURE__ */ y(ur, { children: "SUB" }) : w && /* @__PURE__ */ y(Rc, { style: { color: w.color }, children: /* @__PURE__ */ y(ze, { name: w.icon, strokeWidth: w.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ X(Ac, { children: [
        /* @__PURE__ */ X(cr, { $pad: !0, children: [
          /* @__PURE__ */ y(Ic, { children: /* @__PURE__ */ y(ze, { name: J ? "transfer" : "tour" }) }),
          U ? /* @__PURE__ */ y(Yc, { children: n.title }) : /* @__PURE__ */ X(De, { children: [
            G,
            v >= Fc && n.subtitle && /* @__PURE__ */ y(lr, { children: n.subtitle })
          ] })
        ] }),
        U && /* @__PURE__ */ X(cr, { children: [
          G,
          n.subtitle && /* @__PURE__ */ y(lr, { children: n.subtitle })
        ] }),
        U && n.driver && /* @__PURE__ */ X(Lc, { children: [
          /* @__PURE__ */ y(ze, { name: "person" }),
          n.driver
        ] })
      ] })
    ] })
  );
}, hr = (e, n) => {
  let t = 0;
  for (const r of n)
    e >= r && t++;
  return t * Pe;
}, Gc = C.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${he}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  pointer-events: none;
`, Xc = ({
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
        const f = hr(d, i);
        return [
          /* @__PURE__ */ y(Gc, { style: { top: `${d * he + f}px` }, children: "Disponible" }, `dispo-${a.id}`)
        ];
      }
      return a.data.map(
        (f, p) => f.map((v) => {
          const g = s === v.segmentId, M = o ? o(v) : !1, h = p + d, N = hr(h, i);
          return /* @__PURE__ */ y(
            Vc,
            {
              row: h,
              data: v,
              zoom: n,
              isSubcontract: a.isSubcontract,
              onTileClick: t,
              onDragStart: r,
              isDragging: g,
              isDraggable: M,
              yOffset: N
            },
            v.segmentId
          );
        })
      );
    }).flat(2);
  }, [e, t, n, r, o, s, i]);
  return /* @__PURE__ */ y(De, { children: c() });
}, Uc = Xc;
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
const Kc = C.div`
  position: absolute;
  width: 240px;
  background: ${({ theme: e }) => e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`, Jc = C.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, qc = C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`, Qc = C.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
`, el = C.span`
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, tl = C.div`
  ${pt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, nl = C.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
`, rl = C.div`
  padding: 10px 12px;
`, ol = C.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, pr = C.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, mr = C.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, gr = C.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, yr = C.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, vr = C.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, sl = C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, il = C.div``, al = C.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, cl = C.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, ll = C.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, xr = C.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, br = C.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, wr = C.div`
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
const dl = {
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
}, ul = ({ tooltipData: e }) => {
  const { mouseCoords: n, reservationData: t } = e, r = we(null), [o, s] = fe("below"), i = Ge(), c = { ...dl, ...i.tooltip };
  _r(() => {
    if (!r.current || !n)
      return;
    const v = r.current, { width: g, height: M } = v.getBoundingClientRect(), h = v.parentElement;
    if (!h)
      return;
    const N = h.getBoundingClientRect(), J = 12, z = 4, P = N.height - n.y, u = N.width - n.x;
    let m = n.x + J, w = n.y + J, _ = "below";
    u < g + J && (m = n.x - g - J), P < M + J && (w = n.y - M - J, _ = "above"), m = Math.max(z, Math.min(m, N.width - g - z)), w = Math.max(z, Math.min(w, N.height - M - z)), s(_), v.style.left = `${m}px`, v.style.top = `${w}px`;
  }, [n]);
  const d = t.reservationType === St.Tour, a = d && t.isOneDayEvent, l = () => d ? a ? "oneday" : "tour" : "transfer", f = () => d ? a ? c.oneDay : c.tour : c.transfer, p = [
    t.groupName && { label: c.groupName, value: t.groupName },
    t.driver && { label: c.driver, value: t.driver },
    t.passengers && { label: c.passengers, value: String(t.passengers) },
    t.flightNumber && { label: c.flightNumber, value: t.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ X(Kc, { ref: r, $position: o, children: [
    /* @__PURE__ */ X(Jc, { children: [
      /* @__PURE__ */ X(qc, { children: [
        /* @__PURE__ */ y(Qc, { children: t.bookingNumber }),
        /* @__PURE__ */ y(el, { $type: l(), children: f() })
      ] }),
      /* @__PURE__ */ y(tl, { children: t.eventName }),
      t.client && /* @__PURE__ */ y(nl, { children: t.client })
    ] }),
    /* @__PURE__ */ X(rl, { children: [
      /* @__PURE__ */ X(ol, { children: [
        /* @__PURE__ */ X(pr, { children: [
          /* @__PURE__ */ y(mr, { children: c.startDate }),
          /* @__PURE__ */ X(gr, { children: [
            /* @__PURE__ */ y(yr, { children: t.startDate }),
            " ",
            /* @__PURE__ */ y(vr, { children: t.startTime })
          ] })
        ] }),
        d && t.endDate && /* @__PURE__ */ X(pr, { $isEnd: !0, children: [
          /* @__PURE__ */ y(mr, { children: c.endDate }),
          /* @__PURE__ */ X(gr, { children: [
            /* @__PURE__ */ y(yr, { children: t.endDate }),
            " ",
            /* @__PURE__ */ y(vr, { children: t.endTime })
          ] })
        ] })
      ] }),
      p.length > 0 && /* @__PURE__ */ y(sl, { children: p.map((v, g) => /* @__PURE__ */ X(il, { children: [
        /* @__PURE__ */ y(al, { children: v.label }),
        /* @__PURE__ */ y(cl, { children: v.value })
      ] }, g)) }),
      (t.serviceNotes || t.reservationNotes) && /* @__PURE__ */ X(ll, { children: [
        t.serviceNotes && /* @__PURE__ */ X(xr, { children: [
          /* @__PURE__ */ y(br, { children: c.serviceNotes }),
          /* @__PURE__ */ y(wr, { children: t.serviceNotes })
        ] }),
        t.reservationNotes && /* @__PURE__ */ X(xr, { children: [
          /* @__PURE__ */ y(br, { children: c.reservationNotes }),
          /* @__PURE__ */ y(wr, { children: t.reservationNotes })
        ] })
      ] })
    ] })
  ] });
}, fl = C.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, hl = C.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, pl = C.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, ml = ({ toggleTheme: e }) => {
  const n = tt();
  return /* @__PURE__ */ X(fl, { onClick: e, children: [
    /* @__PURE__ */ y(hl, {}),
    /* @__PURE__ */ y(pl, { children: n.mode === "light" ? /* @__PURE__ */ y(We, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ y(We, { iconName: "moon", height: "16", width: "16" }) })
  ] });
}, gl = C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, yl = C.div`
  position: absolute;
  height: ${Cn}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: n, $animateToY: t }) => e && n !== void 0 && t !== void 0 ? `transform: translate3d(${n}px, ${t}px, 0);` : ""}
`, vl = C.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Sr = C.p`
  ${pt}
  ${mt}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, xl = C.p`
  ${pt}
  ${mt}
`, bl = C.div`
  position: sticky;
  left: ${Ye + 16}px;
  overflow: hidden;
`, wl = C.div`
  position: absolute;
  height: ${Cn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Sl = C.div`
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
`, Cl = C.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Ml = C.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, kl = C.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: n }) => e ? n ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: n }) => e ? n ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Cr = C.div`
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
`, Mr = C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, kr = C.div`
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
`, Dr = C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, Zt = C.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, Vt = C.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, ot = C.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, $r = C.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Dl = ({
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
  const a = Ge(), l = (P) => {
    let u = 0;
    for (const m of d)
      m <= P && u++;
    return P * he + u * Pe;
  }, [f, p] = fe(null), [v, g] = fe(0), M = le((P = 400, u = 300) => {
    const w = t.width, _ = 48, T = document.getElementById("react-scheduler");
    if (!T)
      return {
        x: n.x + w + 16,
        y: n.y
      };
    const B = T.scrollLeft, U = T.scrollTop, G = T.clientWidth, k = T.clientHeight, $ = n.x - B, D = n.y - U, L = {
      left: Ye + 16,
      // Avoid left column
      right: G - 16,
      top: 16,
      bottom: k - 16
    }, I = L.right - ($ + w), q = $ - L.left, ee = L.bottom - (D + _), se = D - L.top;
    let oe, F;
    return I >= P + 16 ? oe = $ + w + 16 : q >= P + 16 ? oe = $ - P - 16 : I >= q ? (oe = $ + w + 16, oe + P > L.right && (oe = L.right - P)) : (oe = $ - P - 16, oe < L.left && (oe = L.left)), ee >= u + 16 ? F = D + _ + 16 : se >= u + 16 ? F = D - u - 16 : ee >= se ? (F = D + _ + 16, F + u > L.bottom && (F = L.bottom - u)) : (F = D - u - 16, F < L.top && (F = L.top)), oe = Math.max(L.left, Math.min(oe, L.right - P)), F = Math.max(L.top, Math.min(F, L.bottom - u)), {
      x: oe + B,
      y: F + U
    };
  }, [n.x, n.y, t.width]);
  be(() => {
    s === "dragging" && e && v === 0 ? g(n.x) : s === "idle" && g(0);
  }, [s, e, n.x, v]), be(() => {
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
  const N = s === "animating", J = io(e.bgColor ?? ""), z = () => {
    if (!r)
      return "";
    const P = E(r.startDate).format("MMM D, HH:mm"), u = E(r.endDate).format("HH:mm");
    return `${P} - ${u}`;
  };
  return /* @__PURE__ */ X(gl, { children: [
    h.map((P) => /* @__PURE__ */ y(
      Ml,
      {
        style: {
          top: `${l(P)}px`,
          height: `${he}px`
        }
      },
      P
    )),
    r && s === "dragging" && /* @__PURE__ */ y(
      Cl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          top: `${l(r.resourceIndex)}px`,
          height: `${he}px`
        }
      }
    ),
    r && s === "dragging" && !c && /* @__PURE__ */ X(De, { children: [
      /* @__PURE__ */ y(
        wl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (he - 48) / 2}px`,
            width: `${t.width}px`
          }
        }
      ),
      /* @__PURE__ */ y(
        Sl,
        {
          $isValid: o,
          $hasConflict: r.hasConflict,
          style: {
            left: `${n.x}px`,
            top: `${l(r.resourceIndex) + (he - 48) / 2}px`
          },
          children: z()
        }
      )
    ] }),
    r && s === "dragging" && c && /* @__PURE__ */ y(
      kl,
      {
        $isValid: o,
        $hasConflict: r.hasConflict,
        style: {
          left: "0px",
          top: `${l(r.resourceIndex)}px`,
          height: `${he}px`
        }
      }
    ),
    r && o && r.hasConflict && r.conflicts && r.conflicts.length > 0 && s === "dragging" && (() => {
      const P = M(400, 300);
      return /* @__PURE__ */ X(
        Cr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`
          },
          children: [
            /* @__PURE__ */ X(Mr, { children: [
              /* @__PURE__ */ y(kr, { children: "!" }),
              r.conflicts.length,
              " ",
              r.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ y(Dr, { children: r.conflicts.map((u, m) => {
              const w = E(r.startDate).format("YYYY-MM-DD"), _ = E(r.endDate).format("YYYY-MM-DD"), T = E(u.event.startDate).format("YYYY-MM-DD"), B = E(u.event.endDate).format("YYYY-MM-DD"), U = E(u.conflictStart).format("YYYY-MM-DD"), G = E(u.conflictEnd).format("YYYY-MM-DD"), k = w !== _, $ = T !== B, D = U !== G, L = k ? E(r.startDate).format("MMM D, h:mm A") : E(r.startDate).format("h:mm A"), I = k ? E(r.endDate).format("MMM D, h:mm A") : E(r.endDate).format("h:mm A"), q = $ ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), ee = $ ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), se = D ? E(u.conflictStart).format("MMM D, h:mm A") : E(u.conflictStart).format("h:mm A"), oe = D ? E(u.conflictEnd).format("MMM D, h:mm A") : E(u.conflictEnd).format("h:mm A"), F = D ? "" : E(u.conflictStart).format("MMM D"), j = r.startDate.getTime(), Z = r.endDate.getTime(), V = u.event.startDate.getTime(), b = u.event.endDate.getTime(), R = j >= V && j < b, x = Z > V && Z <= b, Y = j <= V && Z >= b, H = V <= j && b >= Z;
              let A = !1, S = !1, Q = !1, O = !1, K = "";
              return Y || H ? (A = !0, S = !0, Q = !0, O = !0, K = `⚠️ ${a.conflicts.changeBoth}`) : R && x ? (A = !0, S = !0, Q = !0, O = !0, K = `⚠️ ${a.conflicts.changeBoth}`) : R ? (A = !0, O = !0, K = `⚠️ ${a.conflicts.changeStart}`) : x && (S = !0, Q = !0, K = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ X(Zt, { children: [
                /* @__PURE__ */ X(Vt, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ X(ot, { children: [
                  /* @__PURE__ */ y("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  A ? /* @__PURE__ */ y("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: L }) : L,
                  " ",
                  a.conflicts.to,
                  " ",
                  S ? /* @__PURE__ */ y("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
                ] }),
                /* @__PURE__ */ X(ot, { children: [
                  /* @__PURE__ */ y("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  Q ? /* @__PURE__ */ y("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: q }) : q,
                  " ",
                  a.conflicts.to,
                  " ",
                  O ? /* @__PURE__ */ y("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: ee }) : ee
                ] }),
                /* @__PURE__ */ X($r, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  F && `${F}, `,
                  se,
                  " - ",
                  oe
                ] }),
                K && /* @__PURE__ */ y(ot, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: K })
              ] }, m);
            }) })
          ]
        }
      );
    })(),
    r && o && !r.hasConflict && r.nearbyEvents && r.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const P = M(400, 400);
      return /* @__PURE__ */ X(
        Cr,
        {
          style: {
            left: `${P.x}px`,
            top: `${P.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ X(Mr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ y(kr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              r.nearbyEvents.length,
              " ",
              r.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ X(Dr, { children: [
              (() => {
                const u = r.nearbyEvents.some((T) => T.position === "before"), m = r.nearbyEvents.some((T) => T.position === "after"), w = E(r.startDate).format("h:mm A"), _ = E(r.endDate).format("h:mm A");
                return /* @__PURE__ */ X(Zt, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ X(Vt, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ X(ot, { style: { fontWeight: 600 }, children: [
                    E(r.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ y("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    m ? /* @__PURE__ */ y("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: _ }) : _
                  ] }),
                  /* @__PURE__ */ y(ot, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              r.nearbyEvents.map((u, m) => {
                const w = E(u.event.startDate).format("YYYY-MM-DD"), _ = E(u.event.endDate).format("YYYY-MM-DD"), T = w !== _, B = T ? E(u.event.startDate).format("MMM D, h:mm A") : E(u.event.startDate).format("h:mm A"), U = T ? E(u.event.endDate).format("MMM D, h:mm A") : E(u.event.endDate).format("h:mm A"), G = E(u.event.startDate).format("MMM D"), k = Math.floor(u.timeGap / (1e3 * 60 * 60)), $ = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), D = k > 0 ? `${k}h ${$}m` : `${$}m`, L = u.position === "after", I = u.position === "before";
                return /* @__PURE__ */ X(Zt, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ X(Vt, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ X(ot, { children: [
                    !T && `${G}: `,
                    L ? /* @__PURE__ */ y("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: B }) : B,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ y("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: U }) : U
                  ] }),
                  /* @__PURE__ */ X($r, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
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
    /* @__PURE__ */ y(
      yl,
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
          color: J
        },
        children: /* @__PURE__ */ y(vl, { children: /* @__PURE__ */ X(bl, { children: [
          /* @__PURE__ */ y(Sr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ y(Sr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ y(xl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, $l = Dl, El = Nt`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, _l = C.div`
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
  animation: ${El} 1.5s ease-in-out infinite;
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
`, Tl = ({ selectionBox: e, isSelecting: n }) => !e || !n ? null : /* @__PURE__ */ y(
  _l,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), Pl = Tl, Al = Nt`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Il = C.div`
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
  animation: ${Al} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, Yl = C.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, Ol = C.span`
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
`, Ll = C.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, Rl = C.span`
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
const Nl = C.div`
  display: flex;
  gap: 8px;
`, Er = C.button`
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
`, Wl = ({ selections: e, onConfirm: n, onClear: t }) => {
  var g;
  const o = Ge().multiSelect, s = $e(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, d = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", l = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((g = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : g.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const p = s > 0, v = /* @__PURE__ */ X(Il, { $hasConflicts: p, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ X(Yl, { children: [
      /* @__PURE__ */ X(Ol, { $hasConflicts: p, children: [
        e.length,
        " ",
        i
      ] }),
      p && /* @__PURE__ */ X(Ll, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ y(Rl, { children: c })
    ] }),
    /* @__PURE__ */ X(Nl, { children: [
      /* @__PURE__ */ X(Er, { variant: "secondary", onClick: t, children: [
        "✕ ",
        d
      ] }),
      /* @__PURE__ */ y(Er, { variant: "primary", $hasConflicts: p, onClick: n, children: p ? `⚠️ ${l}` : `✓ ${a}` })
    ] })
  ] });
  return po(v, document.body);
}, Hl = Wl, Fl = Nt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, Bl = C.div`
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
  animation: ${Fl} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && Rt`
      border-style: dashed;
    `}
`, zl = C.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, jl = C.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, Zl = C.button`
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
`, Vl = ({
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
  }, [t]), v = $e(() => E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0), [r]), g = $e(() => e.map((m, w) => {
    let _ = 0, T = !1;
    for (const q of n) {
      if (q.id === m.resourceId) {
        T = !0;
        break;
      }
      _ += Math.max(q.data.length, 1);
    }
    if (!T)
      return null;
    const B = E(m.startDate), U = E(m.endDate);
    let G, k;
    switch (t) {
      case 0:
        G = Math.floor(B.diff(v, "days") / 7), k = Math.max(1, Math.ceil(U.diff(B, "days") / 7) + 1);
        break;
      case 1:
        G = B.diff(v, "days"), k = Math.max(1, U.diff(B, "days") + 1);
        break;
      case 2:
        G = B.diff(v, "hours"), k = Math.max(1, U.diff(B, "hours") + 1);
        break;
      default:
        G = 0, k = 1;
    }
    const $ = G * p;
    let D = 0;
    for (const q of i)
      q <= _ && D++;
    const L = _ * he + D * Pe, I = k * p;
    return {
      index: w,
      selection: m,
      x: $,
      y: L,
      width: I,
      height: he
    };
  }), [e, n, t, v, p]), M = (m, w) => {
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
        if (m >= w * he && m < (w + T) * he)
          return {
            resourceId: _.id,
            resourceLabel: _.label
          };
        w += T;
      }
      return null;
    },
    [n]
  ), J = le(
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
  ), z = le(
    (m, w) => {
      !s || (m.preventDefault(), m.stopPropagation(), !g[w]) || (f.current = { x: m.clientX, y: m.clientY }, d(w), l({ x: 0, y: 0 }));
    },
    [s, g]
  ), P = le(
    (m) => {
      if (c === null || !f.current)
        return;
      const w = m.clientX - f.current.x, _ = m.clientY - f.current.y, T = Math.round(w / p) * p, B = Math.round(_ / he) * he;
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
    const w = m.x + a.x, _ = m.y + a.y, T = N(_ + he / 2);
    if (!T) {
      d(null), l({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const B = J(w), U = e[c], G = U.endDate.getTime() - U.startDate.getTime(), k = new Date(B.getTime() + G);
    s(c, {
      startDate: B,
      endDate: k,
      resourceId: T.resourceId,
      resourceLabel: T.resourceLabel
    }), d(null), l({ x: 0, y: 0 }), f.current = null;
  }, [c, a, g, e, s, N, J]);
  return be(() => {
    if (c !== null)
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", u);
      };
  }, [c, P, u]), /* @__PURE__ */ y(De, { children: g.map((m) => {
    if (!m)
      return null;
    const w = m.selection.hasConflict || !1, _ = c === m.index, T = _ ? m.x + a.x : m.x, B = _ ? m.y + a.y : m.y;
    return /* @__PURE__ */ X(
      Bl,
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
        onMouseDown: (U) => z(U, m.index),
        children: [
          w && /* @__PURE__ */ y(jl, { title: h(m.selection), children: "⚠️" }),
          /* @__PURE__ */ y(zl, { $hasConflict: w, children: M(m.selection.startDate, m.selection.endDate) }),
          /* @__PURE__ */ y(
            Zl,
            {
              onClick: (U) => {
                U.stopPropagation(), o(m.index);
              },
              onMouseDown: (U) => U.stopPropagation(),
              title: w ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      m.index
    );
  }) });
}, Gl = Vl, Xl = C.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, Ul = ({ zoom: e, startDate: n }) => {
  const { cols: t } = Ve(), r = $e(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Ie * 7 : Se, s = E().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"), i = E().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, n, t]);
  return r ? /* @__PURE__ */ y(Xl, { style: { left: `${r.x}px`, width: `${r.width}px` }, "aria-hidden": !0 }) : null;
}, Kl = Ul;
export {
  td as Scheduler
};
