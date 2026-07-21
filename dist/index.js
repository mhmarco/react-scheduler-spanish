var So = Object.defineProperty;
var Co = (e, r, t) => r in e ? So(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Hn = (e, r, t) => (Co(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as W, Fragment as Te } from "react/jsx-runtime";
import * as ae from "react";
import rt, { useRef as fe, useContext as qe, useMemo as $e, useLayoutEffect as Vt, useDebugValue as zn, createElement as Mo, createContext as Fr, useState as pe, useCallback as de, useEffect as ye, forwardRef as En, useImperativeHandle as Wr } from "react";
import { createPortal as ko } from "react-dom";
var Ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _t = {}, $o = {
  get exports() {
    return _t;
  },
  set exports(e) {
    _t = e;
  }
}, xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function Do() {
  if (Fn)
    return xe;
  Fn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function M(p) {
    if (typeof p == "object" && p !== null) {
      var R = p.$$typeof;
      switch (R) {
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
                case v:
                case f:
                case s:
                  return p;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  return xe.ContextConsumer = i, xe.ContextProvider = s, xe.Element = e, xe.ForwardRef = l, xe.Fragment = t, xe.Lazy = v, xe.Memo = f, xe.Portal = r, xe.Profiler = o, xe.StrictMode = n, xe.Suspense = a, xe.SuspenseList = d, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(p) {
    return M(p) === i;
  }, xe.isContextProvider = function(p) {
    return M(p) === s;
  }, xe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, xe.isForwardRef = function(p) {
    return M(p) === l;
  }, xe.isFragment = function(p) {
    return M(p) === t;
  }, xe.isLazy = function(p) {
    return M(p) === v;
  }, xe.isMemo = function(p) {
    return M(p) === f;
  }, xe.isPortal = function(p) {
    return M(p) === r;
  }, xe.isProfiler = function(p) {
    return M(p) === o;
  }, xe.isStrictMode = function(p) {
    return M(p) === n;
  }, xe.isSuspense = function(p) {
    return M(p) === a;
  }, xe.isSuspenseList = function(p) {
    return M(p) === d;
  }, xe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === n || p === a || p === d || p === C || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === f || p.$$typeof === s || p.$$typeof === i || p.$$typeof === l || p.$$typeof === g || p.getModuleId !== void 0);
  }, xe.typeOf = M, xe;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function Eo() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), g = !1, M = !1, p = !1, R = !1, Z = !1, I;
    I = Symbol.for("react.module.reference");
    function O(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === t || _ === o || Z || _ === n || _ === a || _ === d || R || _ === C || g || M || p || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === f || _.$$typeof === s || _.$$typeof === i || _.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === I || _.getModuleId !== void 0));
    }
    function u(_) {
      if (typeof _ == "object" && _ !== null) {
        var F = _.$$typeof;
        switch (F) {
          case e:
            var oe = _.type;
            switch (oe) {
              case t:
              case o:
              case n:
              case a:
              case d:
                return oe;
              default:
                var q = oe && oe.$$typeof;
                switch (q) {
                  case c:
                  case i:
                  case l:
                  case v:
                  case f:
                  case s:
                    return q;
                  default:
                    return F;
                }
            }
          case r:
            return F;
        }
      }
    }
    var y = i, S = s, D = e, b = l, $ = t, G = v, J = f, T = r, E = o, P = n, N = a, Y = d, X = !1, j = !1;
    function ee(_) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(_) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(_) {
      return u(_) === i;
    }
    function B(_) {
      return u(_) === s;
    }
    function Q(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function re(_) {
      return u(_) === l;
    }
    function k(_) {
      return u(_) === t;
    }
    function H(_) {
      return u(_) === v;
    }
    function w(_) {
      return u(_) === f;
    }
    function V(_) {
      return u(_) === r;
    }
    function U(_) {
      return u(_) === o;
    }
    function z(_) {
      return u(_) === n;
    }
    function m(_) {
      return u(_) === a;
    }
    function K(_) {
      return u(_) === d;
    }
    be.ContextConsumer = y, be.ContextProvider = S, be.Element = D, be.ForwardRef = b, be.Fragment = $, be.Lazy = G, be.Memo = J, be.Portal = T, be.Profiler = E, be.StrictMode = P, be.Suspense = N, be.SuspenseList = Y, be.isAsyncMode = ee, be.isConcurrentMode = ie, be.isContextConsumer = L, be.isContextProvider = B, be.isElement = Q, be.isForwardRef = re, be.isFragment = k, be.isLazy = H, be.isMemo = w, be.isPortal = V, be.isProfiler = U, be.isStrictMode = z, be.isSuspense = m, be.isSuspenseList = K, be.isValidElementType = O, be.typeOf = u;
  }()), be;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Do() : e.exports = Eo();
})($o);
function _o(e) {
  function r(L, B, Q, re, k) {
    for (var H = 0, w = 0, V = 0, U = 0, z, m, K = 0, _ = 0, F, oe = F = z = 0, q = 0, le = 0, he = 0, ue = 0, ve = Q.length, ke = ve - 1, Ce, ce = "", te = "", ne = "", se = "", me; q < ve; ) {
      if (m = Q.charCodeAt(q), q === ke && w + U + V + H !== 0 && (w !== 0 && (m = w === 47 ? 10 : 47), U = V = H = 0, ve++, ke++), w + U + V + H === 0) {
        if (q === ke && (0 < le && (ce = ce.replace(v, "")), 0 < ce.trim().length)) {
          switch (m) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ce += Q.charAt(q);
          }
          m = 59;
        }
        switch (m) {
          case 123:
            for (ce = ce.trim(), z = ce.charCodeAt(0), F = 1, ue = ++q; q < ve; ) {
              switch (m = Q.charCodeAt(q)) {
                case 123:
                  F++;
                  break;
                case 125:
                  F--;
                  break;
                case 47:
                  switch (m = Q.charCodeAt(q + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (oe = q + 1; oe < ke; ++oe)
                          switch (Q.charCodeAt(oe)) {
                            case 47:
                              if (m === 42 && Q.charCodeAt(oe - 1) === 42 && q + 2 !== oe) {
                                q = oe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (m === 47) {
                                q = oe + 1;
                                break e;
                              }
                          }
                        q = oe;
                      }
                  }
                  break;
                case 91:
                  m++;
                case 40:
                  m++;
                case 34:
                case 39:
                  for (; q++ < ke && Q.charCodeAt(q) !== m; )
                    ;
              }
              if (F === 0)
                break;
              q++;
            }
            switch (F = Q.substring(ue, q), z === 0 && (z = (ce = ce.replace(f, "").trim()).charCodeAt(0)), z) {
              case 64:
                switch (0 < le && (ce = ce.replace(v, "")), m = ce.charCodeAt(1), m) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = B;
                    break;
                  default:
                    le = N;
                }
                if (F = r(B, le, F, m, k + 1), ue = F.length, 0 < X && (le = t(N, ce, he), me = c(3, F, le, B, T, J, ue, m, k, re), ce = le.join(""), me !== void 0 && (ue = (F = me.trim()).length) === 0 && (m = 0, F = "")), 0 < ue)
                  switch (m) {
                    case 115:
                      ce = ce.replace(y, i);
                    case 100:
                    case 109:
                    case 45:
                      F = ce + "{" + F + "}";
                      break;
                    case 107:
                      ce = ce.replace(Z, "$1 $2"), F = ce + "{" + F + "}", F = P === 1 || P === 2 && s("@" + F, 3) ? "@-webkit-" + F + "@" + F : "@" + F;
                      break;
                    default:
                      F = ce + F, re === 112 && (F = (te += F, ""));
                  }
                else
                  F = "";
                break;
              default:
                F = r(B, t(B, ce, he), F, re, k + 1);
            }
            ne += F, F = he = le = oe = z = 0, ce = "", m = Q.charCodeAt(++q);
            break;
          case 125:
          case 59:
            if (ce = (0 < le ? ce.replace(v, "") : ce).trim(), 1 < (ue = ce.length))
              switch (oe === 0 && (z = ce.charCodeAt(0), z === 45 || 96 < z && 123 > z) && (ue = (ce = ce.replace(" ", ":")).length), 0 < X && (me = c(1, ce, B, L, T, J, te.length, re, k, re)) !== void 0 && (ue = (ce = me.trim()).length) === 0 && (ce = "\0\0"), z = ce.charCodeAt(0), m = ce.charCodeAt(1), z) {
                case 0:
                  break;
                case 64:
                  if (m === 105 || m === 99) {
                    se += ce + Q.charAt(q);
                    break;
                  }
                default:
                  ce.charCodeAt(ue - 1) !== 58 && (te += o(ce, z, m, ce.charCodeAt(2)));
              }
            he = le = oe = z = 0, ce = "", m = Q.charCodeAt(++q);
        }
      }
      switch (m) {
        case 13:
        case 10:
          w === 47 ? w = 0 : 1 + z === 0 && re !== 107 && 0 < ce.length && (le = 1, ce += "\0"), 0 < X * ee && c(0, ce, B, L, T, J, te.length, re, k, re), J = 1, T++;
          break;
        case 59:
        case 125:
          if (w + U + V + H === 0) {
            J++;
            break;
          }
        default:
          switch (J++, Ce = Q.charAt(q), m) {
            case 9:
            case 32:
              if (U + H + w === 0)
                switch (K) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ce = "";
                    break;
                  default:
                    m !== 32 && (Ce = " ");
                }
              break;
            case 0:
              Ce = "\\0";
              break;
            case 12:
              Ce = "\\f";
              break;
            case 11:
              Ce = "\\v";
              break;
            case 38:
              U + w + H === 0 && (le = he = 1, Ce = "\f" + Ce);
              break;
            case 108:
              if (U + w + H + E === 0 && 0 < oe)
                switch (q - oe) {
                  case 2:
                    K === 112 && Q.charCodeAt(q - 3) === 58 && (E = K);
                  case 8:
                    _ === 111 && (E = _);
                }
              break;
            case 58:
              U + w + H === 0 && (oe = q);
              break;
            case 44:
              w + V + U + H === 0 && (le = 1, Ce += "\r");
              break;
            case 34:
            case 39:
              w === 0 && (U = U === m ? 0 : U === 0 ? m : U);
              break;
            case 91:
              U + w + V === 0 && H++;
              break;
            case 93:
              U + w + V === 0 && H--;
              break;
            case 41:
              U + w + H === 0 && V--;
              break;
            case 40:
              if (U + w + H === 0) {
                if (z === 0)
                  switch (2 * K + 3 * _) {
                    case 533:
                      break;
                    default:
                      z = 1;
                  }
                V++;
              }
              break;
            case 64:
              w + V + U + H + oe + F === 0 && (F = 1);
              break;
            case 42:
            case 47:
              if (!(0 < U + H + V))
                switch (w) {
                  case 0:
                    switch (2 * m + 3 * Q.charCodeAt(q + 1)) {
                      case 235:
                        w = 47;
                        break;
                      case 220:
                        ue = q, w = 42;
                    }
                    break;
                  case 42:
                    m === 47 && K === 42 && ue + 2 !== q && (Q.charCodeAt(ue + 2) === 33 && (te += Q.substring(ue, q + 1)), Ce = "", w = 0);
                }
          }
          w === 0 && (ce += Ce);
      }
      _ = K, K = m, q++;
    }
    if (ue = te.length, 0 < ue) {
      if (le = B, 0 < X && (me = c(2, te, le, L, T, J, ue, re, k, re), me !== void 0 && (te = me).length === 0))
        return se + te + ne;
      if (te = le.join(",") + "{" + te + "}", P * E !== 0) {
        switch (P !== 2 || s(te, 2) || (E = 0), E) {
          case 111:
            te = te.replace(O, ":-moz-$1") + te;
            break;
          case 112:
            te = te.replace(I, "::-webkit-input-$1") + te.replace(I, "::-moz-$1") + te.replace(I, ":-ms-input-$1") + te;
        }
        E = 0;
      }
    }
    return se + te + ne;
  }
  function t(L, B, Q) {
    var re = B.trim().split(p);
    B = re;
    var k = re.length, H = L.length;
    switch (H) {
      case 0:
      case 1:
        var w = 0;
        for (L = H === 0 ? "" : L[0] + " "; w < k; ++w)
          B[w] = n(L, B[w], Q).trim();
        break;
      default:
        var V = w = 0;
        for (B = []; w < k; ++w)
          for (var U = 0; U < H; ++U)
            B[V++] = n(L[U] + " ", re[w], Q).trim();
    }
    return B;
  }
  function n(L, B, Q) {
    var re = B.charCodeAt(0);
    switch (33 > re && (re = (B = B.trim()).charCodeAt(0)), re) {
      case 38:
        return B.replace(R, "$1" + L.trim());
      case 58:
        return L.trim() + B.replace(R, "$1" + L.trim());
      default:
        if (0 < 1 * Q && 0 < B.indexOf("\f"))
          return B.replace(R, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + B;
  }
  function o(L, B, Q, re) {
    var k = L + ";", H = 2 * B + 3 * Q + 4 * re;
    if (H === 944) {
      L = k.indexOf(":", 9) + 1;
      var w = k.substring(L, k.length - 1).trim();
      return w = k.substring(0, L).trim() + w + ";", P === 1 || P === 2 && s(w, 1) ? "-webkit-" + w + w : w;
    }
    if (P === 0 || P === 2 && !s(k, 1))
      return k;
    switch (H) {
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
          return k.replace(G, "$1-webkit-$2") + k;
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
        return w = k.substring(k.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + w + "-webkit-" + k + "-ms-flex-pack" + w + k;
      case 1005:
        return g.test(k) ? k.replace(C, ":-webkit-") + k.replace(C, ":-moz-") + k : k;
      case 1e3:
        switch (w = k.substring(13).trim(), B = w.indexOf("-") + 1, w.charCodeAt(0) + w.charCodeAt(B)) {
          case 226:
            w = k.replace(u, "tb");
            break;
          case 232:
            w = k.replace(u, "tb-rl");
            break;
          case 220:
            w = k.replace(u, "lr");
            break;
          default:
            return k;
        }
        return "-webkit-" + k + "-ms-" + w + k;
      case 1017:
        if (k.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (B = (k = L).length - 10, w = (k.charCodeAt(B) === 33 ? k.substring(0, B) : k).substring(L.indexOf(":", 7) + 1).trim(), H = w.charCodeAt(0) + (w.charCodeAt(7) | 0)) {
          case 203:
            if (111 > w.charCodeAt(8))
              break;
          case 115:
            k = k.replace(w, "-webkit-" + w) + ";" + k;
            break;
          case 207:
          case 102:
            k = k.replace(w, "-webkit-" + (102 < H ? "inline-" : "") + "box") + ";" + k.replace(w, "-webkit-" + w) + ";" + k.replace(w, "-ms-" + w + "box") + ";" + k;
        }
        return k + ";";
      case 938:
        if (k.charCodeAt(5) === 45)
          switch (k.charCodeAt(6)) {
            case 105:
              return w = k.replace("-items", ""), "-webkit-" + k + "-webkit-box-" + w + "-ms-flex-" + w + k;
            case 115:
              return "-webkit-" + k + "-ms-flex-item-" + k.replace(D, "") + k;
            default:
              return "-webkit-" + k + "-ms-flex-line-pack" + k.replace("align-content", "").replace(D, "") + k;
          }
        break;
      case 973:
      case 989:
        if (k.charCodeAt(3) !== 45 || k.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if ($.test(L) === !0)
          return (w = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(L.replace("stretch", "fill-available"), B, Q, re).replace(":fill-available", ":stretch") : k.replace(w, "-webkit-" + w) + k.replace(w, "-moz-" + w.replace("fill-", "")) + k;
        break;
      case 962:
        if (k = "-webkit-" + k + (k.charCodeAt(5) === 102 ? "-ms-" + k : "") + k, Q + re === 211 && k.charCodeAt(13) === 105 && 0 < k.indexOf("transform", 10))
          return k.substring(0, k.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + k;
    }
    return k;
  }
  function s(L, B) {
    var Q = L.indexOf(B === 1 ? ":" : "{"), re = L.substring(0, B !== 3 ? Q : 10);
    return Q = L.substring(Q + 1, L.length - 1), j(B !== 2 ? re : re.replace(b, "$1"), Q, B);
  }
  function i(L, B) {
    var Q = o(B, B.charCodeAt(0), B.charCodeAt(1), B.charCodeAt(2));
    return Q !== B + ";" ? Q.replace(S, " or ($1)").substring(4) : "(" + B + ")";
  }
  function c(L, B, Q, re, k, H, w, V, U, z) {
    for (var m = 0, K = B, _; m < X; ++m)
      switch (_ = Y[m].call(d, L, K, Q, re, k, H, w, V, U, z)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          K = _;
      }
    if (K !== B)
      return K;
  }
  function l(L) {
    switch (L) {
      case void 0:
      case null:
        X = Y.length = 0;
        break;
      default:
        if (typeof L == "function")
          Y[X++] = L;
        else if (typeof L == "object")
          for (var B = 0, Q = L.length; B < Q; ++B)
            l(L[B]);
        else
          ee = !!L | 0;
    }
    return l;
  }
  function a(L) {
    return L = L.prefix, L !== void 0 && (j = null, L ? typeof L != "function" ? P = 1 : (P = 2, j = L) : P = 0), a;
  }
  function d(L, B) {
    var Q = L;
    if (33 > Q.charCodeAt(0) && (Q = Q.trim()), ie = Q, Q = [ie], 0 < X) {
      var re = c(-1, B, Q, Q, T, J, 0, 0, 0, 0);
      re !== void 0 && typeof re == "string" && (B = re);
    }
    var k = r(N, Q, B, 0, 0);
    return 0 < X && (re = c(-2, k, Q, Q, T, J, k.length, 0, 0, 0), re !== void 0 && (k = re)), ie = "", E = 0, J = T = 1, k;
  }
  var f = /^\0+/g, v = /[\0\r\f]/g, C = /: */g, g = /zoo|gra/, M = /([,: ])(transform)/g, p = /,\r+?/g, R = /([\t\r\n ])*\f?&/g, Z = /@(k\w+)\s*(\S*)\s*/, I = /::(place)/g, O = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, y = /\(\s*(.*)\s*\)/g, S = /([\s\S]*?);/g, D = /-self|flex-/g, b = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $ = /stretch|:\s*\w+\-(?:conte|avail)/, G = /([^-])(image-set\()/, J = 1, T = 1, E = 0, P = 1, N = [], Y = [], X = 0, j = null, ee = 0, ie = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var To = {
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
function Ao(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Po = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jn = /* @__PURE__ */ Ao(
  function(e) {
    return Po.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), nn = {}, Io = {
  get exports() {
    return nn;
  },
  set exports(e) {
    nn = e;
  }
}, we = {};
/** @license React v16.13.1
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
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, Z = e ? Symbol.for("react.scope") : 60119;
  function I(u) {
    if (typeof u == "object" && u !== null) {
      var y = u.$$typeof;
      switch (y) {
        case r:
          switch (u = u.type, u) {
            case l:
            case a:
            case n:
            case s:
            case o:
            case f:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case c:
                case d:
                case g:
                case C:
                case i:
                  return u;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  function O(u) {
    return I(u) === a;
  }
  return we.AsyncMode = l, we.ConcurrentMode = a, we.ContextConsumer = c, we.ContextProvider = i, we.Element = r, we.ForwardRef = d, we.Fragment = n, we.Lazy = g, we.Memo = C, we.Portal = t, we.Profiler = s, we.StrictMode = o, we.Suspense = f, we.isAsyncMode = function(u) {
    return O(u) || I(u) === l;
  }, we.isConcurrentMode = O, we.isContextConsumer = function(u) {
    return I(u) === c;
  }, we.isContextProvider = function(u) {
    return I(u) === i;
  }, we.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === r;
  }, we.isForwardRef = function(u) {
    return I(u) === d;
  }, we.isFragment = function(u) {
    return I(u) === n;
  }, we.isLazy = function(u) {
    return I(u) === g;
  }, we.isMemo = function(u) {
    return I(u) === C;
  }, we.isPortal = function(u) {
    return I(u) === t;
  }, we.isProfiler = function(u) {
    return I(u) === s;
  }, we.isStrictMode = function(u) {
    return I(u) === o;
  }, we.isSuspense = function(u) {
    return I(u) === f;
  }, we.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === a || u === s || u === o || u === f || u === v || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === C || u.$$typeof === i || u.$$typeof === c || u.$$typeof === d || u.$$typeof === p || u.$$typeof === R || u.$$typeof === Z || u.$$typeof === M);
  }, we.typeOf = I, we;
}
var Se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Yo() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, Z = e ? Symbol.for("react.scope") : 60119;
    function I(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === a || m === s || m === o || m === f || m === v || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === C || m.$$typeof === i || m.$$typeof === c || m.$$typeof === d || m.$$typeof === p || m.$$typeof === R || m.$$typeof === Z || m.$$typeof === M);
    }
    function O(m) {
      if (typeof m == "object" && m !== null) {
        var K = m.$$typeof;
        switch (K) {
          case r:
            var _ = m.type;
            switch (_) {
              case l:
              case a:
              case n:
              case s:
              case o:
              case f:
                return _;
              default:
                var F = _ && _.$$typeof;
                switch (F) {
                  case c:
                  case d:
                  case g:
                  case C:
                  case i:
                    return F;
                  default:
                    return K;
                }
            }
          case t:
            return K;
        }
      }
    }
    var u = l, y = a, S = c, D = i, b = r, $ = d, G = n, J = g, T = C, E = t, P = s, N = o, Y = f, X = !1;
    function j(m) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ee(m) || O(m) === l;
    }
    function ee(m) {
      return O(m) === a;
    }
    function ie(m) {
      return O(m) === c;
    }
    function L(m) {
      return O(m) === i;
    }
    function B(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function Q(m) {
      return O(m) === d;
    }
    function re(m) {
      return O(m) === n;
    }
    function k(m) {
      return O(m) === g;
    }
    function H(m) {
      return O(m) === C;
    }
    function w(m) {
      return O(m) === t;
    }
    function V(m) {
      return O(m) === s;
    }
    function U(m) {
      return O(m) === o;
    }
    function z(m) {
      return O(m) === f;
    }
    Se.AsyncMode = u, Se.ConcurrentMode = y, Se.ContextConsumer = S, Se.ContextProvider = D, Se.Element = b, Se.ForwardRef = $, Se.Fragment = G, Se.Lazy = J, Se.Memo = T, Se.Portal = E, Se.Profiler = P, Se.StrictMode = N, Se.Suspense = Y, Se.isAsyncMode = j, Se.isConcurrentMode = ee, Se.isContextConsumer = ie, Se.isContextProvider = L, Se.isElement = B, Se.isForwardRef = Q, Se.isFragment = re, Se.isLazy = k, Se.isMemo = H, Se.isPortal = w, Se.isProfiler = V, Se.isStrictMode = U, Se.isSuspense = z, Se.isValidElementType = I, Se.typeOf = O;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Oo() : e.exports = Yo();
})(Io);
var _n = nn, Ro = {
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
}, Lo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, No = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, jr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Tn = {};
Tn[_n.ForwardRef] = No;
Tn[_n.Memo] = jr;
function Gn(e) {
  return _n.isMemo(e) ? jr : Tn[e.$$typeof] || Ro;
}
var Bo = Object.defineProperty, Ho = Object.getOwnPropertyNames, Xn = Object.getOwnPropertySymbols, zo = Object.getOwnPropertyDescriptor, Fo = Object.getPrototypeOf, Un = Object.prototype;
function Zr(e, r, t) {
  if (typeof r != "string") {
    if (Un) {
      var n = Fo(r);
      n && n !== Un && Zr(e, n, t);
    }
    var o = Ho(r);
    Xn && (o = o.concat(Xn(r)));
    for (var s = Gn(e), i = Gn(r), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!Lo[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = zo(r, l);
        try {
          Bo(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Wo = Zr;
function Be() {
  return (Be = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Kn = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, rn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !_t.typeOf(e);
}, zt = Object.freeze([]), Je = Object.freeze({});
function mt(e) {
  return typeof e == "function";
}
function on(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function An(e) {
  return e && typeof e.styledComponentId == "string";
}
var gt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Pn = typeof window < "u" && "HTMLElement" in window, jo = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Zo = {}, Vo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Go() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function We(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Go.apply(void 0, [Vo[e]].concat(t)).trim());
}
var Xo = function() {
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
        (i <<= 1) < 0 && We(16, "" + t);
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
}(), Bt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), Et = 1, Ot = function(e) {
  if (Bt.has(e))
    return Bt.get(e);
  for (; Ft.has(Et); )
    Et++;
  var r = Et++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && We(16, "" + r), Bt.set(e, r), Ft.set(r, e), r;
}, Uo = function(e) {
  return Ft.get(e);
}, Ko = function(e, r) {
  r >= Et && (Et = r + 1), Bt.set(e, r), Ft.set(r, e);
}, Jo = "style[" + gt + '][data-styled-version="5.3.8"]', qo = new RegExp("^" + gt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Qo = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, es = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(qo);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (Ko(a, l), Qo(e, a, c[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, ts = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Vr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(gt))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(gt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = ts();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, ns = function() {
  function e(t) {
    var n = this.element = Vr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      We(17);
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
}(), rs = function() {
  function e(t) {
    var n = this.element = Vr(t);
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
}(), os = function() {
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
}(), Jn = Pn, ss = { isServer: !Pn, useCSSOMInjection: !jo }, Wt = function() {
  function e(t, n, o) {
    t === void 0 && (t = Je), n === void 0 && (n = {}), this.options = Be({}, ss, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Pn && Jn && (Jn = !1, function(s) {
      for (var i = document.querySelectorAll(Jo), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(gt) !== "active" && (es(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ot(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Be({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new os(i) : s ? new ns(i) : new rs(i), new Xo(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ot(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Ot(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ot(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = Uo(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var d = gt + ".g" + i + '[id="' + c + '"]', f = "";
            l !== void 0 && l.forEach(function(v) {
              v.length > 0 && (f += v + ",");
            }), s += "" + a + d + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), is = /(a)(d)/gi, qn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function sn(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = qn(r % 52) + t;
  return (qn(r % 52) + t).replace(is, "$1-$2");
}
var tt = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Gr = function(e) {
  return tt(5381, e);
};
function Xr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (mt(t) && !An(t))
      return !1;
  }
  return !0;
}
var as = Gr("5.3.8"), cs = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Xr(r), this.componentId = t, this.baseHash = tt(as, t), this.baseStyle = n, Wt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ot(this.rules, r, t, n).join(""), c = sn(tt(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = tt(this.baseHash, n.hash), f = "", v = 0; v < a; v++) {
        var C = this.rules[v];
        if (typeof C == "string")
          f += C, process.env.NODE_ENV !== "production" && (d = tt(d, C + v));
        else if (C) {
          var g = ot(C, r, t, n), M = Array.isArray(g) ? g.join("") : g;
          d = tt(d, M + v), f += M;
        }
      }
      if (f) {
        var p = sn(d >>> 0);
        if (!t.hasNameForId(o, p)) {
          var R = n(f, "." + p, void 0, o);
          t.insertRules(o, p, R);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), ls = /^\s*\/\/.*$/gm, ds = [":", "[", ".", "#"];
function us(e) {
  var r, t, n, o, s = e === void 0 ? Je : e, i = s.options, c = i === void 0 ? Je : i, l = s.plugins, a = l === void 0 ? zt : l, d = new _o(c), f = [], v = function(M) {
    function p(R) {
      if (R)
        try {
          M(R + "}");
        } catch {
        }
    }
    return function(R, Z, I, O, u, y, S, D, b, $) {
      switch (R) {
        case 1:
          if (b === 0 && Z.charCodeAt(0) === 64)
            return M(Z + ";"), "";
          break;
        case 2:
          if (D === 0)
            return Z + "/*|*/";
          break;
        case 3:
          switch (D) {
            case 102:
            case 112:
              return M(I[0] + Z), "";
            default:
              return Z + ($ === 0 ? "/*|*/" : "");
          }
        case -2:
          Z.split("/*|*/}").forEach(p);
      }
    };
  }(function(M) {
    f.push(M);
  }), C = function(M, p, R) {
    return p === 0 && ds.indexOf(R[t.length]) !== -1 || R.match(o) ? M : "." + r;
  };
  function g(M, p, R, Z) {
    Z === void 0 && (Z = "&");
    var I = M.replace(ls, ""), O = p && R ? R + " " + p + " { " + I + " }" : I;
    return r = Z, t = p, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(R || !p ? "" : p, O);
  }
  return d.use([].concat(a, [function(M, p, R) {
    M === 2 && R.length && R[0].lastIndexOf(t) > 0 && (R[0] = R[0].replace(n, C));
  }, v, function(M) {
    if (M === -2) {
      var p = f;
      return f = [], p;
    }
  }])), g.hash = a.length ? a.reduce(function(M, p) {
    return p.name || We(15), tt(M, p.name);
  }, 5381).toString() : "", g;
}
var Ur = rt.createContext();
Ur.Consumer;
var Kr = rt.createContext(), fs = (Kr.Consumer, new Wt()), an = us();
function Jr() {
  return qe(Ur) || fs;
}
function qr() {
  return qe(Kr) || an;
}
var Qr = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = an);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return We(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = an), this.name + r.hash;
  }, e;
}(), hs = /([A-Z])/, ps = /([A-Z])/g, ms = /^ms-/, gs = function(e) {
  return "-" + e.toLowerCase();
};
function Qn(e) {
  return hs.test(e) ? e.replace(ps, gs).replace(ms, "-ms-") : e;
}
var er = function(e) {
  return e == null || e === !1 || e === "";
};
function ot(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = ot(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (er(e))
    return "";
  if (An(e))
    return "." + e.styledComponentId;
  if (mt(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && _t.isElement(l) && console.warn(on(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ot(l, r, t, n);
  }
  var a;
  return e instanceof Qr ? t ? (e.inject(t, n), e.getName(n)) : e : rn(e) ? function d(f, v) {
    var C, g, M = [];
    for (var p in f)
      f.hasOwnProperty(p) && !er(f[p]) && (Array.isArray(f[p]) && f[p].isCss || mt(f[p]) ? M.push(Qn(p) + ":", f[p], ";") : rn(f[p]) ? M.push.apply(M, d(f[p], p)) : M.push(Qn(p) + ": " + (C = p, (g = f[p]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || C in To ? String(g).trim() : g + "px") + ";"));
    return v ? [v + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var tr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Gt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return mt(e) || rn(e) ? tr(ot(Kn(zt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : tr(ot(Kn(e, t)));
}
var nr = /invalid hook call/i, Yt = /* @__PURE__ */ new Set(), eo = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (nr.test(s))
          o = !1, Yt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(c));
        }
      }, fe(), o && !Yt.has(t) && (console.warn(t), Yt.add(t));
    } catch (s) {
      nr.test(s.message) && Yt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, to = function(e, r, t) {
  return t === void 0 && (t = Je), e.theme !== t.theme && e.theme || r || t.theme;
}, ys = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vs = /(^-|-$)/g;
function Kt(e) {
  return e.replace(ys, "-").replace(vs, "");
}
var In = function(e) {
  return sn(Gr(e) >>> 0);
};
function Rt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var cn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, xs = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function bs(e, r, t) {
  var n = e[t];
  cn(r) && cn(n) ? no(n, r) : e[t] = r;
}
function no(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (cn(i))
      for (var c in i)
        xs(c) && bs(e, i[c], c);
  }
  return e;
}
var yt = rt.createContext();
yt.Consumer;
function ws(e) {
  var r = qe(yt), t = $e(function() {
    return function(n, o) {
      if (!n)
        return We(14);
      if (mt(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : We(7);
      }
      return Array.isArray(n) || typeof n != "object" ? We(8) : o ? Be({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? rt.createElement(yt.Provider, { value: t }, e.children) : null;
}
var Jt = {};
function ro(e, r, t) {
  var n = An(e), o = !Rt(e), s = r.attrs, i = s === void 0 ? zt : s, c = r.componentId, l = c === void 0 ? function(Z, I) {
    var O = typeof Z != "string" ? "sc" : Kt(Z);
    Jt[O] = (Jt[O] || 0) + 1;
    var u = O + "-" + In("5.3.8" + O + Jt[O]);
    return I ? I + "-" + u : u;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(Z) {
    return Rt(Z) ? "styled." + Z : "Styled(" + on(Z) + ")";
  }(e) : a, f = r.displayName && r.componentId ? Kt(r.displayName) + "-" + r.componentId : r.componentId || l, v = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, C = r.shouldForwardProp;
  n && e.shouldForwardProp && (C = r.shouldForwardProp ? function(Z, I, O) {
    return e.shouldForwardProp(Z, I, O) && r.shouldForwardProp(Z, I, O);
  } : e.shouldForwardProp);
  var g, M = new cs(t, f, n ? e.componentStyle : void 0), p = M.isStatic && i.length === 0, R = function(Z, I) {
    return function(O, u, y, S) {
      var D = O.attrs, b = O.componentStyle, $ = O.defaultProps, G = O.foldedComponentIds, J = O.shouldForwardProp, T = O.styledComponentId, E = O.target;
      process.env.NODE_ENV !== "production" && zn(T);
      var P = function(re, k, H) {
        re === void 0 && (re = Je);
        var w = Be({}, k, { theme: re }), V = {};
        return H.forEach(function(U) {
          var z, m, K, _ = U;
          for (z in mt(_) && (_ = _(w)), _)
            w[z] = V[z] = z === "className" ? (m = V[z], K = _[z], m && K ? m + " " + K : m || K) : _[z];
        }), [w, V];
      }(to(u, qe(yt), $) || Je, u, D), N = P[0], Y = P[1], X = function(re, k, H, w) {
        var V = Jr(), U = qr(), z = k ? re.generateAndInjectStyles(Je, V, U) : re.generateAndInjectStyles(H, V, U);
        return process.env.NODE_ENV !== "production" && zn(z), process.env.NODE_ENV !== "production" && !k && w && w(z), z;
      }(b, S, N, process.env.NODE_ENV !== "production" ? O.warnTooManyClasses : void 0), j = y, ee = Y.$as || u.$as || Y.as || u.as || E, ie = Rt(ee), L = Y !== u ? Be({}, u, {}, Y) : u, B = {};
      for (var Q in L)
        Q[0] !== "$" && Q !== "as" && (Q === "forwardedAs" ? B.as = L[Q] : (J ? J(Q, jn, ee) : !ie || jn(Q)) && (B[Q] = L[Q]));
      return u.style && Y.style !== u.style && (B.style = Be({}, u.style, {}, Y.style)), B.className = Array.prototype.concat(G, T, X !== T ? X : null, u.className, Y.className).filter(Boolean).join(" "), B.ref = j, Mo(ee, B);
    }(g, Z, I, p);
  };
  return R.displayName = d, (g = rt.forwardRef(R)).attrs = v, g.componentStyle = M, g.displayName = d, g.shouldForwardProp = C, g.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : zt, g.styledComponentId = f, g.target = n ? e.target : e, g.withComponent = function(Z) {
    var I = r.componentId, O = function(y, S) {
      if (y == null)
        return {};
      var D, b, $ = {}, G = Object.keys(y);
      for (b = 0; b < G.length; b++)
        D = G[b], S.indexOf(D) >= 0 || ($[D] = y[D]);
      return $;
    }(r, ["componentId"]), u = I && I + "-" + (Rt(Z) ? Z : Kt(on(Z)));
    return ro(Z, Be({}, O, { attrs: v, componentId: u }), t);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(Z) {
    this._foldedDefaultProps = n ? no({}, e.defaultProps, Z) : Z;
  } }), process.env.NODE_ENV !== "production" && (eo(d, f), g.warnTooManyClasses = function(Z, I) {
    var O = {}, u = !1;
    return function(y) {
      if (!u && (O[y] = !0, Object.keys(O).length >= 200)) {
        var S = I ? ' with the id of "' + I + '"' : "";
        console.warn("Over 200 classes were generated for component " + Z + S + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, O = {};
      }
    };
  }(d, f)), g.toString = function() {
    return "." + g.styledComponentId;
  }, o && Wo(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var ln = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Je), !_t.isValidElementType(n))
      return We(1, String(n));
    var s = function() {
      return t(n, o, Gt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Be({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Be({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(ro, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ln[e] = ln(e);
});
var Ss = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Xr(t), Wt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(ot(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && Wt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function Cs(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Gt.apply(void 0, [e].concat(t)), s = "sc-global-" + In(JSON.stringify(o)), i = new Ss(o, s);
  function c(a) {
    var d = Jr(), f = qr(), v = qe(yt), C = fe(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && rt.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(g) {
      return typeof g == "string" && g.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(C, a, d, v, f), Vt(function() {
      if (!d.server)
        return l(C, a, d, v, f), function() {
          return i.removeStyles(C, d);
        };
    }, [C, a, d, v, f]), null;
  }
  function l(a, d, f, v, C) {
    if (i.isStatic)
      i.renderStyles(a, Zo, f, C);
    else {
      var g = Be({}, d, { theme: to(d, v, c.defaultProps) });
      i.renderStyles(a, g, f, C);
    }
  }
  return process.env.NODE_ENV !== "production" && eo(s), rt.memo(c);
}
function it(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Gt.apply(void 0, [e].concat(t)).join(""), s = In(o);
  return new Qr(s, o);
}
var Xt = function() {
  return qe(yt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const x = ln, Dt = "reactSchedulerOutsideWrapper", Ne = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Ms = Cs`

  #${Dt} {
    font-family: ${Ne};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Dt} *,
 #${Dt} *:before,
 #${Dt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, ks = {
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
}, $s = {
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
}, wt = `
margin: 0;
padding: 0;
`, St = `
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
const De = 50, Ze = 24, Ct = 16, nt = 40, vt = nt + Ct + Ze, xt = 84, ge = 56, Ye = 196, Le = 12, Pe = 50, bt = 24, Tt = 16, dn = 40, Ds = bt + Tt + dn, rr = 24, or = 52, He = {
  topRow: `600 14px ${Ne}`,
  middleRow: `400 10px ${Ne}`,
  bottomRow: {
    name: `600 14px ${Ne}`,
    number: `600 10px ${Ne}`,
    hoursInDay: `400 9px ${Ne}`
  }
}, pt = 3, Es = 1.6, _s = 4.5, un = 12, jt = 24, Ts = "reactSchedulerCanvasHeaderWrapper", oo = "reactSchedulerCanvasWrapper", je = Dt, As = 4, On = 48, Ke = 5, Ps = 40, sr = 8, Yn = Ze / 2 + 2, so = Ct / 2 + Ze + 1, ir = 2, Ee = 60, Re = 21, io = 58, ao = "reactSchedulerBody";
var st = {}, Is = {
  get exports() {
    return st;
  },
  set exports(e) {
    st = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", f = "month", v = "quarter", C = "year", g = "date", M = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, R = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, Z = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var E = ["th", "st", "nd", "rd"], P = T % 100;
      return "[" + T + (E[(P - 20) % 10] || E[P] || E[0]) + "]";
    } }, I = function(T, E, P) {
      var N = String(T);
      return !N || N.length >= E ? T : "" + Array(E + 1 - N.length).join(P) + T;
    }, O = { s: I, z: function(T) {
      var E = -T.utcOffset(), P = Math.abs(E), N = Math.floor(P / 60), Y = P % 60;
      return (E <= 0 ? "+" : "-") + I(N, 2, "0") + ":" + I(Y, 2, "0");
    }, m: function T(E, P) {
      if (E.date() < P.date())
        return -T(P, E);
      var N = 12 * (P.year() - E.year()) + (P.month() - E.month()), Y = E.clone().add(N, f), X = P - Y < 0, j = E.clone().add(N + (X ? -1 : 1), f);
      return +(-(N + (P - Y) / (X ? Y - j : j - Y)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: f, y: C, w: d, d: a, D: g, h: l, m: c, s: i, ms: s, Q: v }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, u = "en", y = {};
    y[u] = Z;
    var S = function(T) {
      return T instanceof G;
    }, D = function T(E, P, N) {
      var Y;
      if (!E)
        return u;
      if (typeof E == "string") {
        var X = E.toLowerCase();
        y[X] && (Y = X), P && (y[X] = P, Y = X);
        var j = E.split("-");
        if (!Y && j.length > 1)
          return T(j[0]);
      } else {
        var ee = E.name;
        y[ee] = E, Y = ee;
      }
      return !N && Y && (u = Y), Y || !N && u;
    }, b = function(T, E) {
      if (S(T))
        return T.clone();
      var P = typeof E == "object" ? E : {};
      return P.date = T, P.args = arguments, new G(P);
    }, $ = O;
    $.l = D, $.i = S, $.w = function(T, E) {
      return b(T, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var G = function() {
      function T(P) {
        this.$L = D(P.locale, null, !0), this.parse(P);
      }
      var E = T.prototype;
      return E.parse = function(P) {
        this.$d = function(N) {
          var Y = N.date, X = N.utc;
          if (Y === null)
            return new Date(NaN);
          if ($.u(Y))
            return new Date();
          if (Y instanceof Date)
            return new Date(Y);
          if (typeof Y == "string" && !/Z$/i.test(Y)) {
            var j = Y.match(p);
            if (j) {
              var ee = j[2] - 1 || 0, ie = (j[7] || "0").substring(0, 3);
              return X ? new Date(Date.UTC(j[1], ee, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, ie)) : new Date(j[1], ee, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, ie);
            }
          }
          return new Date(Y);
        }(P), this.$x = P.x || {}, this.init();
      }, E.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, E.$utils = function() {
        return $;
      }, E.isValid = function() {
        return this.$d.toString() !== M;
      }, E.isSame = function(P, N) {
        var Y = b(P);
        return this.startOf(N) <= Y && Y <= this.endOf(N);
      }, E.isAfter = function(P, N) {
        return b(P) < this.startOf(N);
      }, E.isBefore = function(P, N) {
        return this.endOf(N) < b(P);
      }, E.$g = function(P, N, Y) {
        return $.u(P) ? this[N] : this.set(Y, P);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function(P, N) {
        var Y = this, X = !!$.u(N) || N, j = $.p(P), ee = function(w, V) {
          var U = $.w(Y.$u ? Date.UTC(Y.$y, V, w) : new Date(Y.$y, V, w), Y);
          return X ? U : U.endOf(a);
        }, ie = function(w, V) {
          return $.w(Y.toDate()[w].apply(Y.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), Y);
        }, L = this.$W, B = this.$M, Q = this.$D, re = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case C:
            return X ? ee(1, 0) : ee(31, 11);
          case f:
            return X ? ee(1, B) : ee(0, B + 1);
          case d:
            var k = this.$locale().weekStart || 0, H = (L < k ? L + 7 : L) - k;
            return ee(X ? Q - H : Q + (6 - H), B);
          case a:
          case g:
            return ie(re + "Hours", 0);
          case l:
            return ie(re + "Minutes", 1);
          case c:
            return ie(re + "Seconds", 2);
          case i:
            return ie(re + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, E.endOf = function(P) {
        return this.startOf(P, !1);
      }, E.$set = function(P, N) {
        var Y, X = $.p(P), j = "set" + (this.$u ? "UTC" : ""), ee = (Y = {}, Y[a] = j + "Date", Y[g] = j + "Date", Y[f] = j + "Month", Y[C] = j + "FullYear", Y[l] = j + "Hours", Y[c] = j + "Minutes", Y[i] = j + "Seconds", Y[s] = j + "Milliseconds", Y)[X], ie = X === a ? this.$D + (N - this.$W) : N;
        if (X === f || X === C) {
          var L = this.clone().set(g, 1);
          L.$d[ee](ie), L.init(), this.$d = L.set(g, Math.min(this.$D, L.daysInMonth())).$d;
        } else
          ee && this.$d[ee](ie);
        return this.init(), this;
      }, E.set = function(P, N) {
        return this.clone().$set(P, N);
      }, E.get = function(P) {
        return this[$.p(P)]();
      }, E.add = function(P, N) {
        var Y, X = this;
        P = Number(P);
        var j = $.p(N), ee = function(B) {
          var Q = b(X);
          return $.w(Q.date(Q.date() + Math.round(B * P)), X);
        };
        if (j === f)
          return this.set(f, this.$M + P);
        if (j === C)
          return this.set(C, this.$y + P);
        if (j === a)
          return ee(1);
        if (j === d)
          return ee(7);
        var ie = (Y = {}, Y[c] = n, Y[l] = o, Y[i] = t, Y)[j] || 1, L = this.$d.getTime() + P * ie;
        return $.w(L, this);
      }, E.subtract = function(P, N) {
        return this.add(-1 * P, N);
      }, E.format = function(P) {
        var N = this, Y = this.$locale();
        if (!this.isValid())
          return Y.invalidDate || M;
        var X = P || "YYYY-MM-DDTHH:mm:ssZ", j = $.z(this), ee = this.$H, ie = this.$m, L = this.$M, B = Y.weekdays, Q = Y.months, re = function(V, U, z, m) {
          return V && (V[U] || V(N, X)) || z[U].slice(0, m);
        }, k = function(V) {
          return $.s(ee % 12 || 12, V, "0");
        }, H = Y.meridiem || function(V, U, z) {
          var m = V < 12 ? "AM" : "PM";
          return z ? m.toLowerCase() : m;
        }, w = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: L + 1, MM: $.s(L + 1, 2, "0"), MMM: re(Y.monthsShort, L, Q, 3), MMMM: re(Q, L), D: this.$D, DD: $.s(this.$D, 2, "0"), d: String(this.$W), dd: re(Y.weekdaysMin, this.$W, B, 2), ddd: re(Y.weekdaysShort, this.$W, B, 3), dddd: B[this.$W], H: String(ee), HH: $.s(ee, 2, "0"), h: k(1), hh: k(2), a: H(ee, ie, !0), A: H(ee, ie, !1), m: String(ie), mm: $.s(ie, 2, "0"), s: String(this.$s), ss: $.s(this.$s, 2, "0"), SSS: $.s(this.$ms, 3, "0"), Z: j };
        return X.replace(R, function(V, U) {
          return U || w[V] || j.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function(P, N, Y) {
        var X, j = $.p(N), ee = b(P), ie = (ee.utcOffset() - this.utcOffset()) * n, L = this - ee, B = $.m(this, ee);
        return B = (X = {}, X[C] = B / 12, X[f] = B, X[v] = B / 3, X[d] = (L - ie) / 6048e5, X[a] = (L - ie) / 864e5, X[l] = L / o, X[c] = L / n, X[i] = L / t, X)[j] || L, Y ? B : $.a(B);
      }, E.daysInMonth = function() {
        return this.endOf(f).$D;
      }, E.$locale = function() {
        return y[this.$L];
      }, E.locale = function(P, N) {
        if (!P)
          return this.$L;
        var Y = this.clone(), X = D(P, N, !0);
        return X && (Y.$L = X), Y;
      }, E.clone = function() {
        return $.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), J = G.prototype;
    return b.prototype = J, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", f], ["$y", C], ["$D", g]].forEach(function(T) {
      J[T[1]] = function(E) {
        return this.$g(E, T[0], T[1]);
      };
    }), b.extend = function(T, E) {
      return T.$i || (T(E, G, b), T.$i = !0), b;
    }, b.locale = D, b.isDayjs = S, b.unix = function(T) {
      return b(1e3 * T);
    }, b.en = y[u], b.Ls = y, b.p = {}, b;
  });
})(Is);
const A = st, ar = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Rn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, co = (e, r) => A(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), lo = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Rn(e),
  isCurrentDay: e.isSame(A(), "day"),
  year: parseInt(e.format("YYYY"))
});
let Lt = null;
const Os = (e) => {
  if (Lt)
    return Lt;
  const r = document.createElement("canvas");
  r.width = 12, r.height = 12;
  const t = r.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Lt = e.createPattern(r, "repeat"), Lt) : null;
}, Ln = (e, r, t, n, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ge), c && !s) {
    const l = Os(e);
    l && (e.fillStyle = l, e.fillRect(r, t, n, ge));
  }
  e.strokeRect(r + 0.5, t + 0.5, n, ge);
}, Nn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Re;
}, Ys = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Nn(i, s);
    for (let l = 0; l <= t; l++) {
      const a = A(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), d = a.isSame(A(), "day"), f = a.isBefore(A(), "day");
      Ln(
        e,
        l * De,
        i * ge + c,
        De,
        Rn(a),
        d,
        o,
        f
      );
    }
  }
}, Rs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Ls = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Le;
  const l = r * ge + s.length * Re;
  for (let a = 0; a <= t; a++) {
    const f = A(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(A(), "week");
    for (let v = 0; v < r; v++) {
      const C = Nn(v, s);
      Ln(e, i, v * ge + C, xt, !0, f, o);
    }
    i += xt;
  }
  for (let a = 0; a < t; a++) {
    const d = co(n, a) * Le;
    Rs(e, c, l, o), c += d;
  }
}, Ns = (e, r, t, n, o, s = []) => {
  const i = A(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const l = Nn(c, s);
    for (let a = 0; a <= t; a++) {
      let d;
      a === Math.floor(t / 2) ? d = A() : a > Math.floor(t / 2) ? d = A().add(a - Math.floor(t / 2), "hours") : d = A().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(A(), "day") && d.isSame(A(), "hour");
      Ln(
        e,
        a * Pe + Pe / 2 - 0.5,
        c * ge + l,
        Pe,
        Rn(d),
        f,
        o
      );
    }
  }
}, Bs = (e, r, t, n, o = !1) => {
  const s = t * ge + r * Re, i = e.canvas.width;
  e.fillStyle = o ? n.colors.subcontractBorder + "40" : n.mode === "dark" ? n.colors.primary + "80" : n.colors.primary, e.fillRect(0, s, i, Re);
}, Hs = (e, r, t, n, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(oo)) {
    switch (r) {
      case 0:
        Ls(e, t, n, o, s, i);
        break;
      case 1:
        Ys(e, t, n, o, s, i);
        break;
      case 2:
        Ns(e, t, n, o, s, i);
        break;
    }
    for (let a = 0; a < i.length; a++)
      Bs(e, a, i[a], s, i[a] === c);
  }
};
var fn = {}, zs = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(n).add(1, n).date(a), f = i(this).endOf(t);
          if (d.isBefore(f))
            return 1;
        }
        var v = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), C = this.diff(v, t, !0);
        return C < 0 ? i(this).startOf("week").week() : Math.ceil(C);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(zs);
const Fs = fn;
var hn = {}, Ws = {
  get exports() {
    return hn;
  },
  set exports(e) {
    hn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Ws);
const js = hn;
var pn = {}, Zs = {
  get exports() {
    return pn;
  },
  set exports(e) {
    pn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
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
        var d, f, v, C, g = i(this), M = (d = this.isoWeekYear(), f = this.$u, v = (f ? s.utc : s)().year(d).startOf("year"), C = 4 - v.isoWeekday(), v.isoWeekday() > 4 && (C += 7), v.add(C, t));
        return g.diff(M, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, d) {
        var f = this.$utils(), v = !!f.u(d) || d;
        return f.p(a) === "isoweek" ? v ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, d);
      };
    };
  });
})(Zs);
const Vs = pn;
var mn = {}, Gs = {
  get exports() {
    return mn;
  },
  set exports(e) {
    mn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), d = o(i), f = (l = l || "()")[0] === "(", v = l[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (v ? this.isBefore(d, c) : !this.isAfter(d, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (v ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(Gs);
const Xs = mn;
var gn = {}, Us = {
  get exports() {
    return gn;
  },
  set exports(e) {
    gn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ae, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, v = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, C = function(u) {
      return u instanceof O;
    }, g = function(u, y, S) {
      return new O(u, S, y.$l);
    }, M = function(u) {
      return n.p(u) + "s";
    }, p = function(u) {
      return u < 0;
    }, R = function(u) {
      return p(u) ? Math.ceil(u) : Math.floor(u);
    }, Z = function(u) {
      return Math.abs(u);
    }, I = function(u, y) {
      return u ? p(u) ? { negative: !0, format: "" + Z(u) + y } : { negative: !1, format: "" + u + y } : { negative: !1, format: "" };
    }, O = function() {
      function u(S, D, b) {
        var $ = this;
        if (this.$d = {}, this.$l = b, S === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), D)
          return g(S * v[M(D)], this);
        if (typeof S == "number")
          return this.$ms = S, this.parseFromMilliseconds(), this;
        if (typeof S == "object")
          return Object.keys(S).forEach(function(T) {
            $.$d[M(T)] = S[T];
          }), this.calMilliseconds(), this;
        if (typeof S == "string") {
          var G = S.match(f);
          if (G) {
            var J = G.slice(2).map(function(T) {
              return T != null ? Number(T) : 0;
            });
            return this.$d.years = J[0], this.$d.months = J[1], this.$d.weeks = J[2], this.$d.days = J[3], this.$d.hours = J[4], this.$d.minutes = J[5], this.$d.seconds = J[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var y = u.prototype;
      return y.calMilliseconds = function() {
        var S = this;
        this.$ms = Object.keys(this.$d).reduce(function(D, b) {
          return D + (S.$d[b] || 0) * v[b];
        }, 0);
      }, y.parseFromMilliseconds = function() {
        var S = this.$ms;
        this.$d.years = R(S / a), S %= a, this.$d.months = R(S / d), S %= d, this.$d.days = R(S / c), S %= c, this.$d.hours = R(S / i), S %= i, this.$d.minutes = R(S / s), S %= s, this.$d.seconds = R(S / o), S %= o, this.$d.milliseconds = S;
      }, y.toISOString = function() {
        var S = I(this.$d.years, "Y"), D = I(this.$d.months, "M"), b = +this.$d.days || 0;
        this.$d.weeks && (b += 7 * this.$d.weeks);
        var $ = I(b, "D"), G = I(this.$d.hours, "H"), J = I(this.$d.minutes, "M"), T = this.$d.seconds || 0;
        this.$d.milliseconds && (T += this.$d.milliseconds / 1e3);
        var E = I(T, "S"), P = S.negative || D.negative || $.negative || G.negative || J.negative || E.negative, N = G.format || J.format || E.format ? "T" : "", Y = (P ? "-" : "") + "P" + S.format + D.format + $.format + N + G.format + J.format + E.format;
        return Y === "P" || Y === "-P" ? "P0D" : Y;
      }, y.toJSON = function() {
        return this.toISOString();
      }, y.format = function(S) {
        var D = S || "YYYY-MM-DDTHH:mm:ss", b = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return D.replace(l, function($, G) {
          return G || String(b[$]);
        });
      }, y.as = function(S) {
        return this.$ms / v[M(S)];
      }, y.get = function(S) {
        var D = this.$ms, b = M(S);
        return b === "milliseconds" ? D %= 1e3 : D = b === "weeks" ? R(D / v[b]) : this.$d[b], D === 0 ? 0 : D;
      }, y.add = function(S, D, b) {
        var $;
        return $ = D ? S * v[M(D)] : C(S) ? S.$ms : g(S, this).$ms, g(this.$ms + $ * (b ? -1 : 1), this);
      }, y.subtract = function(S, D) {
        return this.add(S, D, !0);
      }, y.locale = function(S) {
        var D = this.clone();
        return D.$l = S, D;
      }, y.clone = function() {
        return g(this.$ms, this);
      }, y.humanize = function(S) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!S);
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
      }, u;
    }();
    return function(u, y, S) {
      t = S, n = S().$utils(), S.duration = function($, G) {
        var J = S.locale();
        return g($, { $l: J }, G);
      }, S.isDuration = C;
      var D = y.prototype.add, b = y.prototype.subtract;
      y.prototype.add = function($, G) {
        return C($) && ($ = $.asMilliseconds()), D.bind(this)($, G);
      }, y.prototype.subtract = function($, G) {
        return C($) && ($ = $.asMilliseconds()), b.bind(this)($, G);
      };
    };
  });
})(Us);
const Ks = gn;
var Js = "Expected a function", cr = 0 / 0, qs = "[object Symbol]", Qs = /^\s+|\s+$/g, ei = /^[-+]0x[0-9a-f]+$/i, ti = /^0b[01]+$/i, ni = /^0o[0-7]+$/i, ri = parseInt, oi = typeof Ae == "object" && Ae && Ae.Object === Object && Ae, si = typeof self == "object" && self && self.Object === Object && self, ii = oi || si || Function("return this")(), ai = Object.prototype, ci = ai.toString, li = Math.max, di = Math.min, qt = function() {
  return ii.Date.now();
};
function ui(e, r, t) {
  var n, o, s, i, c, l, a = 0, d = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Js);
  r = lr(r) || 0, yn(t) && (d = !!t.leading, f = "maxWait" in t, s = f ? li(lr(t.maxWait) || 0, r) : s, v = "trailing" in t ? !!t.trailing : v);
  function C(y) {
    var S = n, D = o;
    return n = o = void 0, a = y, i = e.apply(D, S), i;
  }
  function g(y) {
    return a = y, c = setTimeout(R, r), d ? C(y) : i;
  }
  function M(y) {
    var S = y - l, D = y - a, b = r - S;
    return f ? di(b, s - D) : b;
  }
  function p(y) {
    var S = y - l, D = y - a;
    return l === void 0 || S >= r || S < 0 || f && D >= s;
  }
  function R() {
    var y = qt();
    if (p(y))
      return Z(y);
    c = setTimeout(R, M(y));
  }
  function Z(y) {
    return c = void 0, v && n ? C(y) : (n = o = void 0, i);
  }
  function I() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function O() {
    return c === void 0 ? i : Z(qt());
  }
  function u() {
    var y = qt(), S = p(y);
    if (n = arguments, o = this, l = y, S) {
      if (c === void 0)
        return g(l);
      if (f)
        return c = setTimeout(R, r), C(l);
    }
    return c === void 0 && (c = setTimeout(R, r)), i;
  }
  return u.cancel = I, u.flush = O, u;
}
function yn(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function fi(e) {
  return !!e && typeof e == "object";
}
function hi(e) {
  return typeof e == "symbol" || fi(e) && ci.call(e) == qs;
}
function lr(e) {
  if (typeof e == "number")
    return e;
  if (hi(e))
    return cr;
  if (yn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = yn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Qs, "");
  var t = ti.test(e);
  return t || ni.test(e) ? ri(e.slice(2), t ? 2 : 8) : ei.test(e) ? cr : +e;
}
var vn = ui;
const Ht = [0, 1, 2];
var At = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(At || {});
const uo = (e) => Ht.includes(e), ft = (e) => {
  var n;
  const t = (((n = document.getElementById(je)) == null ? void 0 : n.clientWidth) || 0) - Ye;
  switch (e) {
    case 1:
      return Math.ceil(t / De) * pt;
    case 2:
      return Math.ceil(t / Pe) * pt;
    default:
      return Math.ceil(t / xt) * pt;
  }
}, pi = (e) => ft(e) / pt, Ut = (e, r) => {
  const t = ft(r) / 2;
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
}, mi = (e, r) => {
  const t = Ut(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Bn = () => {
  var t;
  return ((((t = document.getElementById(je)) == null ? void 0 : t.clientWidth) || 0) - Ye) * pt;
}, fo = Fr({
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
A.extend(Fs);
A.extend(js);
A.extend(Vs);
A.extend(Xs);
A.extend(Ks);
const gi = ({
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
  const { zoom: a, maxRecordsPerPage: d = 50 } = n, [f, v] = pe(a), [C, g] = pe(A()), [M, p] = pe(!1), [R, Z] = pe(ft(f)), I = Ht[f] !== Ht[Ht.length - 1], O = f !== 0, u = $e(() => mi(C, f), [C, f]), y = Ut(C, f).startDate, S = A(y).dayOfYear(), D = lo(y), b = fe(null), $ = fe(!1), G = fe(null), [J, T] = pe([{ x: 0, y: 0 }]), E = de(
    (w, V = "auto") => {
      var z, m, K, _;
      const U = Bn();
      switch (w) {
        case "back":
          return (z = b.current) == null ? void 0 : z.scrollTo({
            behavior: V,
            left: U / 3
          });
        case "forward":
          return (m = b.current) == null ? void 0 : m.scrollTo({
            behavior: V,
            left: U / 3
          });
        case "middle": {
          const F = U / pt / 4;
          return (K = b.current) == null ? void 0 : K.scrollTo({
            behavior: V,
            left: U / 2 - F
          });
        }
        default:
          return (_ = b.current) == null ? void 0 : _.scrollTo({
            behavior: V,
            left: U / 2
          });
      }
    },
    []
  ), P = (w) => {
    T(w);
  }, N = de(
    (w) => {
      const V = pi(f);
      let U;
      switch (f) {
        case 0:
          U = V * 7;
          break;
        case 1:
          U = V;
          break;
        case 2:
          U = Math.ceil(V / jt);
          break;
      }
      vn(() => {
        switch ((w === "forward" || w === "back") && ($.current = !0), G.current = w, w) {
          case "back":
            g((m) => m.subtract(U, "days"));
            break;
          case "forward":
            g((m) => m.add(U, "days"));
            break;
          case "middle":
            g(A());
            break;
        }
        s == null || s(u);
      }, 300)();
    },
    [s, u, f]
  );
  ye(() => {
    G.current && (E(G.current), G.current = null);
  }, [C, E]), ye(() => {
    b.current = document.getElementById(je), Z(ft(f));
  }, [f]), ye(() => {
    const w = () => Z(ft(f));
    return window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, [f]), ye(() => {
    s == null || s(u);
  }, [s, u]), ye(() => {
    p(!1);
  }, [o]), ye(() => {
    M || (E("middle"), p(!0), g(o));
  }, [o, M, E]);
  const Y = () => {
    t || (g(
      (w) => f === 2 ? w.add(rr, "hours") : w.add(ir, "weeks")
    ), s == null || s(u));
  }, X = de(() => {
    t || N("forward");
  }, [t, N]), j = () => {
    t || (g(
      (w) => f === 2 ? w.subtract(rr, "hours") : w.subtract(ir, "weeks")
    ), s == null || s(u));
  }, ee = de(() => {
    !M || t || N("back");
  }, [M, t, N]), ie = de(() => {
    t || (G.current = "middle", g(A()), s == null || s(u));
  }, [t, s, u]), L = de(
    (w) => {
      if (t)
        return;
      const V = A(w).startOf("day");
      V.isValid() && (G.current = "middle", g(V), s == null || s(u));
    },
    [t, s, u]
  ), B = () => re(f + 1), Q = () => re(f - 1), re = (w) => {
    uo(w) && (v(w), Z(ft(w)), s == null || s(u));
  }, k = () => i == null ? void 0 : i(), { Provider: H } = fo;
  return /* @__PURE__ */ h(
    H,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: Y,
        handleScrollNext: X,
        handleGoPrev: j,
        handleScrollPrev: ee,
        handleGoToday: ie,
        goToDate: L,
        zoomIn: B,
        zoomOut: Q,
        setZoom: re,
        zoom: f,
        isNextZoom: I,
        isPrevZoom: O,
        date: C,
        isLoading: t,
        cols: R,
        startDate: D,
        dayOfYear: S,
        toggleDisplayActiveUnits: k,
        tilesCoords: J,
        updateTilesCoords: P,
        recordsThreshold: d,
        onClearFilterData: c,
        suppressNextSlideRef: $,
        toolbarActions: l
      },
      children: r
    }
  );
}, Ve = () => qe(fo), ho = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, po = (e, r) => {
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
}, yi = 5, dr = (e, r) => {
  const t = Math.abs(r.x - e.x), n = Math.abs(r.y - e.y);
  return Math.sqrt(t * t + n * n) > yi;
}, ht = (e, r, t) => {
  const n = t.getBoundingClientRect();
  return {
    x: e - n.left + t.scrollLeft,
    y: r - n.top + t.scrollTop
  };
}, vi = ({
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
  const a = r ? r.length > 0 && r[0].data.length > 0 && !Array.isArray(r[0].data[0]) ? r.map((H) => ({ ...H, data: [H.data] })) : r : e, {
    enabled: d = !0,
    isDraggable: f,
    resourceOnly: v = !1,
    isValidDrop: C
  } = i, [g, M] = pe("idle"), [p, R] = pe(null), [Z, I] = pe({ x: 0, y: 0 }), [O, u] = pe({ width: 0, height: 48 }), [y, S] = pe(null), [D, b] = pe(!0), $ = fe({ x: 0, y: 0 }), G = fe({ x: 0, y: 0 }), J = fe({ x: 0, y: 0 }), T = fe(null), E = fe(null), P = fe(0), N = fe(null), Y = de(
    (H) => !d || H.draggable === !1 ? !1 : f ? f(H) : !0,
    [d, f]
  ), X = de(
    (H, w) => {
      const V = po(w, l), U = Math.floor(V / ge);
      let z;
      switch (t) {
        case 0:
          z = Le * 7;
          break;
        case 1:
          z = De;
          break;
        case 2:
          z = Pe;
          break;
        default:
          z = De;
      }
      const m = Math.floor(H / z);
      let K;
      const _ = A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          K = _.add(m * 7, "days").toDate();
          break;
        case 1:
          K = _.add(m, "days").toDate();
          break;
        case 2:
          K = _.add(m, "hours").toDate();
          break;
        default:
          K = _.toDate();
      }
      return { snappedDate: K, snappedResourceIndex: U };
    },
    [t, n, l]
  ), j = de(
    (H, w, V, U) => {
      const z = [], m = w.getTime(), K = V.getTime(), _ = a.find((oe) => oe.id === U);
      if (!_)
        return z;
      const F = [];
      for (const oe of _.data)
        Array.isArray(oe) ? F.push(...oe) : F.push(oe);
      for (const oe of F) {
        if (oe.segmentId === H.segmentId)
          continue;
        const q = oe.startDate.getTime(), le = oe.endDate.getTime();
        if (m >= q && m < le || K > q && K <= le || m <= q && K >= le) {
          const ue = new Date(Math.max(m, q)), ve = new Date(Math.min(K, le)), ke = ve.getTime() - ue.getTime();
          z.push({
            event: oe,
            conflictStart: ue,
            conflictEnd: ve,
            overlapDuration: ke
          });
        }
      }
      return z;
    },
    [a]
  ), ee = de(
    (H, w, V, U) => {
      const z = [], m = w.getTime(), K = V.getTime(), _ = A(w).format("YYYY-MM-DD"), F = a.find((q) => q.id === U);
      if (!F)
        return z;
      const oe = [];
      for (const q of F.data)
        Array.isArray(q) ? oe.push(...q) : oe.push(q);
      for (const q of oe) {
        if (q.segmentId === H.segmentId)
          continue;
        const le = q.startDate.getTime(), he = q.endDate.getTime(), ue = A(q.startDate).format("YYYY-MM-DD"), ve = A(q.endDate).format("YYYY-MM-DD"), ke = A(V).format("YYYY-MM-DD");
        if (!(ue === _ || ve === _ || ue === ke || ve === ke || A(q.startDate).isBefore(w, "day") && A(q.endDate).isAfter(V, "day")) || m >= le && m < he || K > le && K <= he || m <= le && K >= he)
          continue;
        let te, ne;
        he <= m ? (te = m - he, ne = "before") : (te = le - K, ne = "after"), z.push({
          event: q,
          timeGap: te,
          position: ne
        });
      }
      return z.sort((q, le) => q.timeGap - le.timeGap);
    },
    [a]
  ), ie = de(
    (H, w, V) => {
      const U = X(w, V);
      let z, m;
      if (v)
        z = H.startDate, m = H.endDate;
      else {
        const he = A(H.endDate).diff(H.startDate);
        z = U.snappedDate, m = A(z).add(he, "milliseconds").toDate();
      }
      let K = 0, _ = "", F;
      for (const he of e) {
        const ue = Math.max(he.data.length, 1);
        if (U.snappedResourceIndex < K + ue) {
          _ = he.id, F = he.capacity;
          break;
        }
        K += ue;
      }
      if (!_)
        return null;
      let oe = !0;
      F !== void 0 && H.totalPassengers !== void 0 && (oe = H.totalPassengers <= F);
      const q = j(H, z, m, _), le = q.length === 0 ? ee(H, z, m, _) : [];
      return {
        startDate: z,
        endDate: m,
        resourceId: _,
        resourceIndex: U.snappedResourceIndex,
        resourceCapacity: F,
        hasCapacity: oe,
        conflicts: q,
        hasConflict: q.length > 0,
        nearbyEvents: le
      };
    },
    [X, e, v, j, ee]
  ), L = de(
    (H, w) => {
      if (!s)
        return;
      const V = Date.now();
      if (V - P.current < 100)
        return;
      P.current = V;
      const U = {
        event: H,
        currentStartDate: w.startDate,
        currentEndDate: w.endDate,
        currentResourceId: w.resourceId,
        conflicts: w.conflicts
      };
      s(U);
    },
    [s]
  ), B = de(
    (H, w) => {
      if (!Y(H) || !c.current)
        return;
      w.preventDefault(), w.stopPropagation();
      const V = w.target.closest('[style*="left"]');
      let U = 0, z = 0;
      V && V.style.left && V.style.top && (U = parseInt(V.style.left), z = parseInt(V.style.top));
      const m = ht(
        w.clientX,
        w.clientY,
        c.current
      );
      $.current = { x: U, y: z }, G.current = { x: w.clientX, y: w.clientY }, J.current = {
        x: m.x - U,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, N.current = {
        startDate: H.startDate,
        endDate: H.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const F of e) {
        for (const oe of F.data)
          if (oe.some((q) => q.segmentId === H.segmentId)) {
            N.current.resourceId = F.id;
            break;
          }
        if (N.current.resourceId)
          break;
      }
      R(H), M("potential"), I({ x: U, y: z });
      let K = 100, _ = 48;
      if (V) {
        const F = V.getBoundingClientRect();
        K = F.width, _ = F.height;
      }
      u({ width: K, height: _ });
    },
    [Y, c, e, t]
  ), Q = de(
    (H) => {
      if (!c.current)
        return;
      let w = c.current;
      for (; w && w !== document.body; ) {
        const q = window.getComputedStyle(w);
        if (w.scrollHeight > w.clientHeight && (q.overflowY === "auto" || q.overflowY === "scroll" || q.overflow === "auto" || q.overflow === "scroll"))
          break;
        w = w.parentElement;
      }
      (!w || w === document.body) && (w = document.documentElement);
      const V = w.getBoundingClientRect(), U = H.clientY, z = 50, m = 12, K = U - V.top, _ = V.bottom - U;
      let F = !1, oe = 0;
      K < z && K > 0 ? (F = !0, oe = -m * (1 - K / z)) : _ < z && _ > 0 && (F = !0, oe = m * (1 - _ / z)), F ? (E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => {
        w.scrollTop += oe, g === "dragging" && Q(H);
      })) : E.current && (cancelAnimationFrame(E.current), E.current = null);
    },
    [c, g]
  ), re = de(
    (H) => {
      if (g === "idle" || g === "animating" || !p || !c.current)
        return;
      const w = { x: H.clientX, y: H.clientY };
      if (g === "potential")
        if (dr(G.current, w))
          M("dragging");
        else
          return;
      Q(H);
      const V = ht(
        H.clientX,
        H.clientY,
        c.current
      );
      T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => {
        const U = {
          x: V.x - J.current.x,
          y: V.y - J.current.y
        };
        I(U);
        const z = ie(p, V.x, V.y);
        if (z && C) {
          const m = {
            event: p,
            currentStartDate: z.startDate,
            currentEndDate: z.endDate,
            currentResourceId: z.resourceId,
            conflicts: z.conflicts
          };
          z.hasConflict = !C(m);
        }
        if (S(z), z) {
          const m = z.hasCapacity !== !1;
          b(m), L(p, z);
        }
      });
    },
    [g, p, c, ie, L, C, Q]
  ), k = de(
    async (H) => {
      if (g === "idle" || g === "animating")
        return;
      const w = { x: H.clientX, y: H.clientY };
      if (!dr(G.current, w) || g === "potential") {
        M("idle"), R(null), S(null);
        return;
      }
      if (!p || !y || !N.current) {
        M("idle"), R(null), S(null);
        return;
      }
      if (y.hasCapacity === !1) {
        b(!1), M("animating"), I($.current), setTimeout(() => {
          M("idle"), R(null), S(null), b(!0);
        }, 300);
        return;
      }
      const U = {
        event: p,
        originalStartDate: N.current.startDate,
        originalEndDate: N.current.endDate,
        originalResourceId: N.current.resourceId,
        newStartDate: y.startDate,
        newEndDate: y.endDate,
        newResourceId: y.resourceId,
        hasConflict: y.hasConflict,
        conflicts: y.conflicts
      };
      let z = !0;
      if (o)
        try {
          const m = o(U);
          z = m instanceof Promise ? await m : m;
        } catch {
          z = !1;
        }
      z ? (b(!0), M("idle"), R(null), S(null)) : (b(!1), M("animating"), I($.current), setTimeout(() => {
        M("idle"), R(null), S(null), b(!0);
      }, 300));
    },
    [g, p, y, o, C]
  );
  return ye(() => {
    if (g === "potential" || g === "dragging") {
      const H = (V) => re(V), w = (V) => k(V);
      return document.addEventListener("mousemove", H), document.addEventListener("mouseup", w), () => {
        document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", w);
      };
    } else
      return () => {
      };
  }, [g, re, k]), ye(() => () => {
    T.current && (cancelAnimationFrame(T.current), T.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null);
  }, []), ye(() => {
    (g === "idle" || g === "animating") && (T.current && (cancelAnimationFrame(T.current), T.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null));
  }, [g]), ye(() => {
    (g === "dragging" || g === "potential") && (g === "dragging" ? (M("animating"), I($.current), setTimeout(() => {
      M("idle"), R(null), S(null);
    }, 300)) : (M("idle"), R(null), S(null)));
  }, [t]), ye(() => {
    if ((g === "dragging" || g === "potential") && p) {
      let H = !1;
      for (const w of e) {
        for (const V of w.data)
          if (V.some((U) => U.segmentId === p.segmentId)) {
            H = !0;
            break;
          }
        if (H)
          break;
      }
      H || (g === "dragging" ? (M("animating"), I($.current), setTimeout(() => {
        M("idle"), R(null), S(null);
      }, 300)) : (M("idle"), R(null), S(null)));
    }
  }, [e, g, p]), {
    dragState: g,
    draggedEvent: p,
    ghostPosition: Z,
    ghostDimensions: O,
    dropTarget: y,
    isValidDrop: D,
    handleDragStart: B,
    isDraggable: Y,
    draggingEventId: (p == null ? void 0 : p.segmentId) || null,
    resourceOnly: v
  };
}, xi = ({
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
  const { enabled: d = !1, isSelectable: f } = i, v = d && !!o, C = de((m) => {
    let K = 0;
    for (const _ of a)
      _ <= m && K++;
    return m * ge + K * Re;
  }, [a]), [g, M] = pe("idle"), [p, R] = pe(null), [Z, I] = pe(null), [O, u] = pe(null), [y, S] = pe(!1), [D, b] = pe([]), [$, G] = pe(!1), J = fe(null), T = fe(null), E = fe(null), P = fe(null), N = de(() => {
    switch (t) {
      case 0:
        return Le * 7;
      case 1:
        return De;
      case 2:
        return Pe;
      default:
        return De;
    }
  }, [t]), Y = de(
    (m) => {
      const K = N(), _ = Math.floor(m / K), F = A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return F.add(_ * 7, "days").toDate();
        case 1:
          return F.add(_, "days").toDate();
        case 2:
          return F.add(_, "hours").toDate();
        default:
          return F.toDate();
      }
    },
    [t, n, N]
  ), X = de(
    (m) => {
      const K = po(m, a), _ = Math.floor(K / ge);
      let F = 0;
      for (const oe of e) {
        const q = Math.max(oe.data.length, 1);
        if (_ < F + q)
          return {
            resourceId: oe.id,
            resourceIndex: _,
            resourceLabel: oe.label
          };
        F += q;
      }
      return null;
    },
    [e, a]
  ), j = de(
    (m) => {
      const K = N();
      return Math.floor(m / K) * K;
    },
    [N]
  ), ee = de(
    (m, K, _, F = []) => {
      const oe = [], le = (r || e).find((ve) => ve.id === m), he = K.getTime(), ue = _.getTime();
      if (le) {
        const ve = le.data[0], ke = ve && Array.isArray(ve) ? le.data.flat() : le.data;
        for (const Ce of ke) {
          const ce = new Date(Ce.startDate).getTime(), te = new Date(Ce.endDate).getTime();
          if (he < te && ue > ce) {
            const ne = new Date(Math.max(he, ce)), se = new Date(Math.min(ue, te)), me = se.getTime() - ne.getTime();
            oe.push({
              event: Ce,
              conflictStart: ne,
              conflictEnd: se,
              overlapDuration: me
            });
          }
        }
      }
      for (const ve of F) {
        if (ve.resourceId !== m)
          continue;
        const ke = ve.startDate.getTime(), Ce = ve.endDate.getTime();
        if (he < Ce && ue > ke) {
          const ce = new Date(Math.max(he, ke)), te = new Date(Math.min(ue, Ce)), ne = te.getTime() - ce.getTime(), se = {
            segmentId: `pending-${ve.startDate.getTime()}`,
            reservationId: `pending-${ve.startDate.getTime()}`,
            startDate: ve.startDate,
            endDate: ve.endDate,
            occupancy: 0,
            title: `New Event (${ve.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          oe.push({
            event: se,
            conflictStart: ce,
            conflictEnd: te,
            overlapDuration: ne
          });
        }
      }
      return oe;
    },
    [e, r]
  ), ie = de(
    (m) => {
      if (!v || l || !c.current || m.button !== 0)
        return;
      const K = m.target;
      if (K.closest("[data-segment-id]") || K.closest("[data-multi-select-ui]"))
        return;
      const _ = ht(m.clientX, m.clientY, c.current), F = X(_.y);
      if (!F)
        return;
      J.current = { x: m.clientX, y: m.clientY }, T.current = F.resourceIndex;
      const oe = j(_.x), q = N(), le = C(F.resourceIndex);
      R(_), I(_), u({
        x: oe,
        y: le,
        width: q,
        height: ge
      }), M("selecting");
    },
    [v, l, c, X, j, N, C]
  ), L = de(
    (m) => {
      I(m);
      const K = N(), _ = j((p == null ? void 0 : p.x) || 0), F = j(m.x), oe = C(T.current), q = Math.min(_, F), le = Math.max(_, F) + K;
      u({ x: q, y: oe, width: le - q, height: ge });
    },
    [p, N, j, C]
  ), B = de(() => {
    P.current && (cancelAnimationFrame(P.current), P.current = null);
  }, []), Q = de(
    (m, K) => {
      const _ = document.getElementById(je);
      if (!_ || !c.current)
        return;
      const F = _.getBoundingClientRect(), oe = 60, q = 12, le = m - (F.left + Ye), he = F.right - m;
      let ue = 0;
      le < oe ? ue = -q * (1 - Math.max(0, le) / oe) : he < oe && (ue = q * (1 - Math.max(0, he) / oe)), B(), ue !== 0 && (P.current = requestAnimationFrame(() => {
        _.scrollLeft += ue, L(ht(m, K, c.current)), Q(m, K);
      }));
    },
    [c, L, B]
  ), re = de(
    (m) => {
      if (g !== "selecting" || !c.current || T.current === null)
        return;
      const K = ht(m.clientX, m.clientY, c.current);
      E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => L(K)), Q(m.clientX, m.clientY);
    },
    [g, c, L, Q]
  ), k = de(
    (m) => {
      if (g !== "selecting")
        return;
      if (B(), !c.current || !p || !J.current) {
        M("idle"), R(null), I(null), u(null);
        return;
      }
      const K = ht(m.clientX, m.clientY, c.current), _ = X(p.y);
      if (!_) {
        M("idle"), R(null), I(null), u(null);
        return;
      }
      const F = Math.min(p.x, K.x), oe = Math.max(p.x, K.x), q = Y(F), le = Y(oe), he = A(le).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(_.resourceId, q, he)) {
        M("idle"), R(null), I(null), u(null);
        return;
      }
      const ue = ee(
        _.resourceId,
        q,
        he,
        D
      ), ve = ue.length > 0, ke = {
        startDate: q,
        endDate: he,
        resourceId: _.resourceId,
        resourceLabel: _.resourceLabel,
        zoomLevel: t,
        hasConflict: ve,
        conflicts: ve ? ue : void 0
      };
      if (y)
        b((Ce) => [...Ce, ke]), G(!0);
      else if (o) {
        const Ce = o(ke), ce = (te) => {
          te != null && te.continueMultiSelect && (S(!0), b([ke]), G(!0));
        };
        Ce instanceof Promise ? Ce.then(ce) : ce(Ce);
      }
      M("idle"), R(null), I(null), u(null), J.current = null, T.current = null;
    },
    [
      g,
      c,
      p,
      X,
      Y,
      f,
      o,
      t,
      y,
      ee,
      D,
      B
    ]
  ), H = de(() => {
    if (D.length > 0 && s) {
      G(!1);
      const m = s(D), K = (_) => {
        _ != null && _.continueMultiSelect ? G(!0) : (b([]), S(!1), G(!1));
      };
      m instanceof Promise ? m.then(K) : K(m);
      return;
    }
    b([]), S(!1), G(!1);
  }, [D, s]), w = de(() => {
    b([]), S(!1), G(!1);
  }, []), V = de((m) => {
    b((K) => {
      const _ = K.filter((F, oe) => oe !== m);
      return _.length === 0 && (S(!1), G(!1)), _;
    });
  }, []), U = de(
    (m, K) => {
      b((_) => _.map((F, oe) => {
        if (oe !== m)
          return F;
        const q = { ...F, ...K }, le = _.filter((ue, ve) => ve !== m), he = ee(
          q.resourceId,
          q.startDate,
          q.endDate,
          le
        );
        return {
          ...q,
          hasConflict: he.length > 0,
          conflicts: he.length > 0 ? he : void 0
        };
      }));
    },
    [ee]
  ), z = de(
    (m) => {
      m.key === "Escape" && (g === "selecting" ? (B(), M("idle"), R(null), I(null), u(null), J.current = null, T.current = null) : y && D.length > 0 && (b([]), S(!1), G(!1)));
    },
    [g, y, D.length, B]
  );
  return ye(() => {
    if (g === "selecting")
      return document.addEventListener("mousemove", re), document.addEventListener("mouseup", k), document.addEventListener("keydown", z), () => {
        document.removeEventListener("mousemove", re), document.removeEventListener("mouseup", k), document.removeEventListener("keydown", z);
      };
  }, [g, re, k, z]), ye(() => {
    if (y && D.length > 0)
      return document.addEventListener("keydown", z), () => {
        document.removeEventListener("keydown", z);
      };
  }, [y, D.length, z]), ye(() => () => {
    E.current && (cancelAnimationFrame(E.current), E.current = null), B();
  }, [B]), ye(() => {
    l && g === "selecting" && (B(), M("idle"), R(null), I(null), u(null), J.current = null, T.current = null);
  }, [l, g, B]), {
    selectionState: g,
    selectionStart: p,
    selectionEnd: Z,
    selectionBox: O,
    handleGridMouseDown: ie,
    isEnabled: v,
    pendingSelections: D,
    confirmSelections: H,
    clearSelections: w,
    removeSelection: V,
    updateSelection: U,
    isMultiSelectActive: y,
    hasUnconfirmedSelections: $
  };
}, bi = x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`, wi = x.div`
  position: relative;
`, Si = x.canvas``;
x.canvas``;
const Ci = x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`, ur = x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Mi = En(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: l, onDragStateChange: a, onTimeRangeSelect: d, onMultiTimeRangeSelect: f, clickToAddConfig: v, separatorRowIndices: C = [], subcontractSeparatorRow: g = -1 }, M) {
  const p = fe(!1), { handleScrollNext: R, handleScrollPrev: Z, date: I, isLoading: O, cols: u, startDate: y, suppressNextSlideRef: S } = Ve(), D = fe(null), b = fe(null), $ = fe(t), G = fe(I), J = fe(null), T = fe(null), E = fe(null), P = fe(null), [N, Y] = pe(!1), X = Xt(), {
    dragState: j,
    draggedEvent: ee,
    ghostPosition: ie,
    ghostDimensions: L,
    dropTarget: B,
    isValidDrop: Q,
    handleDragStart: re,
    isDraggable: k,
    draggingEventId: H,
    resourceOnly: w
  } = vi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: y,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: l,
    gridRef: P,
    separatorRowIndices: C
  });
  ye(() => {
    const ne = j === "dragging" || j === "potential";
    Y(ne), a && a(ne);
  }, [j, a]);
  const V = fe(!1), U = fe(I), z = fe(null);
  ye(() => {
    var Oe;
    const ne = U.current;
    if (U.current = I, !V.current) {
      V.current = !0;
      return;
    }
    if (S != null && S.current) {
      S.current = !1;
      return;
    }
    const se = P.current;
    if (!(se != null && se.animate))
      return;
    const me = I.isAfter(ne) ? 48 : -48;
    (Oe = z.current) == null || Oe.cancel(), se.style.willChange = "transform";
    const Me = se.animate(
      [
        { transform: `translateX(${me}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), _e = () => {
      se.style.willChange = "";
    };
    Me.onfinish = _e, Me.oncancel = _e, z.current = Me;
  }, [I, S]);
  const {
    selectionState: m,
    selectionBox: K,
    handleGridMouseDown: _,
    pendingSelections: F,
    confirmSelections: oe,
    clearSelections: q,
    removeSelection: le,
    updateSelection: he,
    isMultiSelectActive: ue,
    hasUnconfirmedSelections: ve
  } = xi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: y,
    onTimeRangeSelect: d,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: v,
    gridRef: P,
    isDragging: N,
    separatorRowIndices: C
  }), ke = de((ne) => {
    ne.preventDefault();
  }, []), Ce = de((ne) => {
    ne.preventDefault();
  }, []), ce = C.length * Re, te = de(
    (ne) => {
      const se = Bn(), me = t * ge + 1 + ce;
      ho(ne, se, me), Hs(ne, r, t, u, y, X, C, g);
    },
    [u, y, t, r, X, C, g, ce]
  );
  return ye(() => {
    if (!D.current)
      return;
    const ne = D.current.getContext("2d");
    if (!ne)
      return;
    const se = () => te(ne);
    return window.addEventListener("resize", se), () => window.removeEventListener("resize", se);
  }, [te]), ye(() => {
    var ze, Qe;
    const ne = $.current, se = G.current;
    if ($.current = t, G.current = I, ne === t || !I.isSame(se, "day") || (ze = window.matchMedia) != null && ze.call(window, "(prefers-reduced-motion: reduce)").matches)
      return;
    const me = D.current, Me = b.current;
    if (!me || !Me)
      return;
    const _e = Me.getContext("2d");
    if (!_e)
      return;
    Me.width = me.width, Me.height = me.height, Me.style.width = me.style.width, Me.style.height = me.style.height, _e.setTransform(1, 0, 0, 1, 0, 0), _e.clearRect(0, 0, Me.width, Me.height), _e.drawImage(me, 0, 0), (Qe = J.current) == null || Qe.cancel(), Me.style.opacity = "1";
    const Oe = Me.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    Oe.onfinish = () => {
      Me.style.opacity = "0";
    }, J.current = Oe;
  }, [t, I]), ye(() => {
    const ne = D.current;
    if (!ne)
      return;
    ne.style.letterSpacing = "1px";
    const se = ne.getContext("2d");
    se && te(se);
  }, [I, t, r, te]), ye(() => {
    if (!T.current)
      return;
    const ne = new IntersectionObserver(
      (se) => {
        se[0].isIntersecting && !p.current && (p.current = !0, R(), setTimeout(() => {
          p.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(je) }
    );
    return ne.observe(T.current), () => {
      ne.disconnect();
    };
  }, [R]), ye(() => {
    if (!E.current)
      return;
    const ne = new IntersectionObserver(
      (se) => {
        se[0].isIntersecting && !p.current && (p.current = !0, Z(), setTimeout(() => {
          p.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(je),
        rootMargin: `0px 0px 0px -${Ye}px`
      }
    );
    return ne.observe(E.current), () => {
      ne.disconnect();
    };
  }, [Z]), /* @__PURE__ */ W(bi, { id: oo, children: [
    /* @__PURE__ */ W(
      wi,
      {
        ref: (ne) => {
          typeof M == "function" ? M(ne) : M && (M.current = ne), P.current = ne;
        },
        onMouseDown: _,
        style: { cursor: d ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(ur, { position: "left", ref: E }),
          /* @__PURE__ */ h($n, { isLoading: O, position: "left" }),
          /* @__PURE__ */ h(
            Si,
            {
              ref: D,
              onDragStart: ke,
              onDragOver: Ce,
              style: { userSelect: j === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h(Ci, { ref: b, "aria-hidden": !0 }),
          /* @__PURE__ */ h(wd, { zoom: r, startDate: y }),
          /* @__PURE__ */ h(
            kl,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onDragStart: re,
              isDraggable: k,
              draggingEventId: H,
              separatorRowIndices: C
            }
          ),
          /* @__PURE__ */ h(ur, { ref: T, position: "right" }),
          /* @__PURE__ */ h($n, { isLoading: O, position: "right" }),
          (j === "dragging" || j === "animating") && /* @__PURE__ */ h(
            ql,
            {
              draggedEvent: ee,
              ghostPosition: ie,
              ghostDimensions: L,
              dropTarget: B,
              isValidDrop: Q,
              dragState: j,
              zoom: r,
              data: n,
              resourceOnly: w,
              separatorRowIndices: C
            }
          ),
          /* @__PURE__ */ h(
            nd,
            {
              selectionBox: K,
              isSelecting: m === "selecting"
            }
          ),
          ue && F.length > 0 && /* @__PURE__ */ h(
            vd,
            {
              selections: F,
              data: n,
              zoom: r,
              startDate: y,
              onRemove: le,
              onUpdate: he,
              separatorRowIndices: C
            }
          )
        ]
      }
    ),
    ue && ve && F.length > 0 && /* @__PURE__ */ h(
      ud,
      {
        selections: F,
        onConfirm: oe,
        onClear: q,
        onRemove: le
      }
    )
  ] });
}), mo = (e) => {
  const r = A.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, go = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Ee);
    t += o.hours + s, n += r % Ee, n >= Ee && (t++, n -= Ee);
  }), { hours: t, minutes: n };
}, yo = (e, r) => {
  let t = sr;
  switch (r) {
    case 0:
      t = Ps;
      break;
    case 1:
      t = sr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = Ee - e.minutes;
    return i === Ee && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, ki = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const d = A(a.startDate).isoWeek(), f = A(a.startDate).isoWeekday(), v = A(a.endDate).isoWeek(), C = A(a.endDate).isoWeekday(), { hours: g, minutes: M } = mo(a.occupancy);
    if (n === d) {
      const p = (Ke + 1 - f) * g, R = (Ke + 1 - f) * M;
      return { hours: Math.max(0, p), minutes: R };
    } else if (n === v) {
      const p = C > Ke ? Ke * g : C * g, R = C > Ke ? Ke * M : C * M;
      return { hours: p, minutes: R };
    } else if (A(r).isBetween(a.startDate, a.endDate))
      return { hours: Ke * g, minutes: Ke * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = go(o), { free: c, overtime: l } = yo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, $i = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: f, minutes: v } = mo(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: f, minutes: v } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = go(s), { free: l, overtime: a } = yo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Di = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = A(c.startDate).hour(), a = A(c.endDate).hour(), d = r.hour(), f = A(c.endDate).minute(), v = A(c.startDate).minute();
    l < d && a > d ? t += Ee : l === d && a === d && v && f ? t += f ? f - v : Ee - v : l === d && a >= d ? t += v ? Ee - v : Ee : a === d && f && (t += f);
  });
  const n = Math.floor(t / Ee), o = t % Ee, s = n || o ? 0 : 1, i = n ? 0 : o ? Ee - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Ei = (e, r, t, n, o = !1) => {
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
      return $i(s, t, n, o);
    case 2:
      return Di(s, t);
    default:
      return ki(s, t, n);
  }
}, _i = (e, r, t, n, o, s, i = !1) => {
  let c = "weeks", l;
  switch (s) {
    case 0:
      c = "weeks", l = xt;
      break;
    case 1:
      c = "days", l = De;
      break;
    case 2:
      c = "hours", l = Pe;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * l) / l : t.x / l), d = A(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / ge), v = n.findIndex((R, Z, I) => I.slice(0, Z + 1).reduce((u, y) => u + y, 0) >= f), C = s === 2 ? (a + 1) * l : a * l, g = (f - 1) * ge + ge, M = Ei(
    o[v],
    v,
    d,
    s,
    i
  ), p = A(e.startDate).isSame(A(e.endDate), "day");
  return {
    coords: { x: C, y: g },
    mouseCoords: t,
    resourceIndex: v,
    disposition: M,
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
function Ti(e, r) {
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
function Ai(e) {
  const r = { categories: [], capacityToCategoryId: /* @__PURE__ */ new Map() }, t = /* @__PURE__ */ new Set();
  for (const d of e)
    !d.isSubcontract && d.capacity != null && t.add(d.capacity);
  const n = [...t].sort((d, f) => d - f);
  if (n.length < 2)
    return r;
  const o = Math.min(5, n.length), s = Ti(n, o), i = [];
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
  return i.forEach((d, f) => {
    const v = "__auto_cat_" + f, C = d.min === d.max ? d.min + " pax" : d.min + "-" + d.max + " pax";
    l.push({ id: v, name: C, minPassengers: d.min, maxPassengers: d.max });
    for (const g of d.values)
      a.set(g, v);
  }), { categories: l, capacityToCategoryId: a };
}
const Pi = (e, r, t, n) => {
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
var xn = {}, Ii = {
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
  })(Ae, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Ii);
const Oi = xn;
var bn = {}, Yi = {
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
  })(Ae, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Yi);
const Ri = bn, Li = (e) => {
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
A.extend(Oi);
A.extend(Ri);
const fr = /* @__PURE__ */ new WeakMap(), Ni = (e) => {
  const r = fr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = A(o.startDate), c = A(s.startDate), l = i.startOf("day").diff(c.startOf("day"), "day");
    return l !== 0 ? l : i.diff(c);
  }), n = Li(t);
  return fr.set(e, n), n;
}, Bi = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = Ni(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Hi = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, zi = (e) => {
  const { recordsThreshold: r } = Ve(), [t, n] = pe(0), [o, s] = pe(0), i = fe(null);
  ye(() => {
    i.current = document.getElementById(je);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = $e(() => Bi(e), [e]), a = $e(
    () => Pi(e, c, l, r),
    [e, c, r, l]
  ), d = de(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = de(() => {
    a[o].length && (n((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), v = de(() => {
    n(0), s(0);
  }, []), C = t + a[o].length, g = $e(
    () => l.slice(t, C),
    [C, l, t]
  ), M = $e(
    () => c.slice(t, C),
    [C, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: M,
    rowsPerItem: g,
    totalRowsPerPage: Hi(a[o]),
    next: d,
    previous: f,
    reset: v
  };
};
var wn = {}, Fi = {
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
  })(Ae, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Fi);
const Wi = wn;
var Sn = {}, ji = {
  get exports() {
    return Sn;
  },
  set exports(e) {
    Sn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(st);
  })(Ae, function(t) {
    function n(v) {
      return v && typeof v == "object" && "default" in v ? v : { default: v };
    }
    var o = n(t);
    function s(v) {
      return v % 10 < 5 && v % 10 > 1 && ~~(v / 10) % 10 != 1;
    }
    function i(v, C, g) {
      var M = v + " ";
      switch (g) {
        case "m":
          return C ? "minuta" : "minutę";
        case "mm":
          return M + (s(v) ? "minuty" : "minut");
        case "h":
          return C ? "godzina" : "godzinę";
        case "hh":
          return M + (s(v) ? "godziny" : "godzin");
        case "MM":
          return M + (s(v) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(v) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(v, C) {
      return a.test(C) ? c[v.month()] : l[v.month()];
    };
    d.s = l, d.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(v) {
      return v + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(ji);
const Zi = Sn;
var Cn = {}, Vi = {
  get exports() {
    return Cn;
  },
  set exports(e) {
    Cn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(st);
  })(Ae, function(t) {
    function n(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(l, a, d) {
      var f = s[d];
      return Array.isArray(f) && (f = f[a ? 0 : 1]), f.replace("%d", l);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(Vi);
const Gi = Cn;
var Mn = {}, Xi = {
  get exports() {
    return Mn;
  },
  set exports(e) {
    Mn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(st);
  })(Ae, function(t) {
    function n(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(d, f) {
      return c.test(f) ? s[d.month()] : i[d.month()];
    };
    l.s = i, l.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(Xi);
const Ui = Mn;
var kn = {}, Ki = {
  get exports() {
    return kn;
  },
  set exports(e) {
    kn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(st);
  })(Ae, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Ki);
const Ji = kn, qi = {
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
}, Qi = {
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
}, ea = {
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
}, ta = {
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
}, na = {
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
}, ra = [
  {
    id: "en",
    lang: ea,
    translateCode: "en-GB",
    dayjsTranslations: Wi
  },
  {
    id: "pl",
    lang: Qi,
    translateCode: "pl-PL",
    dayjsTranslations: Zi
  },
  {
    id: "es",
    lang: qi,
    translateCode: "es-ES",
    dayjsTranslations: Ji
  },
  {
    id: "lt",
    lang: na,
    translateCode: "lt-LT",
    dayjsTranslations: Ui
  },
  {
    id: "de",
    lang: ta,
    translateCode: "de-DE",
    dayjsTranslations: Gi
  }
];
class oa {
  constructor() {
    Hn(this, "locales", ra);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const Zt = new oa(), vo = Fr({
  localesData: Zt.getLocales(),
  currentLocale: Zt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), sa = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = pe("en"), s = Zt.getLocales(), i = de(() => {
    const f = s.find((v) => v.id === n);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && A.locale(f.dayjsTranslations), f || s[0];
  }, [n, s]), [c, l] = pe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), l(f);
  };
  ye(() => {
    t == null || t.forEach((f) => {
      s.find((C) => C.id === f.id) || Zt.addLocales(f);
    });
  }, [s, t]), ye(() => {
    const f = localStorage.getItem("locale"), v = r ?? f ?? "en";
    localStorage.setItem("locale", v), o(v), l(i());
  }, [i, r]);
  const { Provider: d } = vo;
  return /* @__PURE__ */ h(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Ge = () => qe(vo).currentLocale.lang, ia = (e) => /* @__PURE__ */ ae.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ ae.createElement("defs", null, /* @__PURE__ */ ae.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ ae.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ ae.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ ae.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ ae.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ ae.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ ae.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ ae.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ ae.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ ae.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ ae.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ ae.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ ae.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ ae.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), aa = x.div`
  height: 440px;
  width: 514px;
  position: relative;
`, ca = x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, la = ({ onTileClick: e }) => {
  const { feelingEmpty: r } = Ge();
  return /* @__PURE__ */ W(aa, { onClick: e, children: [
    /* @__PURE__ */ h(ia, {}),
    /* @__PURE__ */ h(ca, { children: r })
  ] });
}, da = x.div`
  position: relative;
  display: flex;
`, ua = x.div`
  position: relative;
  margin-left: ${Ye};
  display: flex;
  flex-direction: column;
  contain: paint;
`, fa = x.div`
  width: calc(${({ width: e }) => e}px - ${Ye}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ye}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, ha = {
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
    reservationType: At.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};
function pa(e, r) {
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
const ma = ({
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
  onMultiTimeRangeSelect: f,
  clickToAddConfig: v
}) => {
  const [C, g] = pe(ha), [M, p] = pe(e), [R, Z] = pe(!1), [I, O] = pe(!1), [u, y] = pe(""), [S, D] = pe(/* @__PURE__ */ new Set()), {
    zoom: b,
    startDate: $,
    isLoading: G,
    config: { includeTakenHoursOnWeekendsInDayView: J, showTooltip: T, showThemeToggle: E }
  } = Ve(), P = fe(null), N = fe(null), [Y, X] = pe(124), {
    page: j,
    projectsPerPerson: ee,
    rowsPerItem: ie,
    currentPageNum: L,
    pagesAmount: B,
    next: Q,
    previous: re,
    reset: k
  } = zi(M), { effectiveCategories: H, effectivePage: w } = $e(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: j };
    const te = Ai(j);
    if (te.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: j };
    const ne = j.map((se) => {
      if (se.isSubcontract || se.capacity == null)
        return se;
      const me = te.capacityToCategoryId.get(se.capacity);
      return me ? { ...se, categoryId: me } : se;
    });
    return { effectiveCategories: te.categories, effectivePage: ne };
  }, [t, j]), V = de((te) => {
    D((ne) => {
      const se = new Set(ne);
      return se.has(te) ? se.delete(te) : se.add(te), se;
    });
  }, []), U = $e(() => {
    const te = [], ne = H ? [...H].sort((se, me) => se.maxPassengers - me.maxPassengers) : [];
    for (const se of ne)
      w.some((me) => !me.isSubcontract && me.categoryId === se.id) && te.push(se.id);
    return w.some((se) => se.isSubcontract) && te.push("__subcontract__"), te;
  }, [H, w]), z = de(() => {
    D(/* @__PURE__ */ new Set());
  }, []), m = de(() => {
    D(new Set(U));
  }, [U]), {
    visiblePage: K,
    visibleRowsPerItem: _,
    visibleTotalRows: F,
    visibleProjectsPerPerson: oe,
    separatorRowIndices: q,
    subcontractSeparatorRow: le
  } = $e(() => {
    const te = pa(w, H), ne = ((H == null ? void 0 : H.length) ?? 0) > 0, se = /* @__PURE__ */ new Map();
    j.forEach((Ie, at) => se.set(Ie.id, at));
    const me = [], Me = [], _e = [], Oe = [];
    let ze = 0, Qe = -1;
    for (const Ie of te)
      if (Ie.type === "subcontract" || Ie.type === "category" && ne) {
        const ct = Ie.type === "subcontract" ? "__subcontract__" : Ie.category.id, lt = S.has(ct);
        if (Oe.push(ze), Ie.type === "subcontract" && (Qe = ze), !lt)
          for (const et of Ie.items) {
            const Pt = se.get(et.id) ?? 0, It = ie[Pt];
            me.push(et), Me.push(It), _e.push(ee[Pt]), ze += It;
          }
      } else
        for (const ct of Ie.items) {
          const lt = se.get(ct.id) ?? 0, et = ie[lt];
          me.push(ct), Me.push(et), _e.push(ee[lt]), ze += et;
        }
    const Ue = Me.reduce((Ie, at) => Ie + at, 0);
    return {
      visiblePage: me,
      visibleRowsPerItem: Me,
      visibleTotalRows: Ue,
      visibleProjectsPerPerson: _e,
      separatorRowIndices: Oe,
      subcontractSeparatorRow: Qe
    };
  }, [w, H, j, S, ie, ee]), he = fe(
    vn(
      (te, ne, se, me, Me, _e) => {
        if (!P.current)
          return;
        const { tile: Oe, segmentId: ze } = ke(te);
        if (!ze || !Oe) {
          Z(!1);
          return;
        }
        const Qe = ve(ze, ne), Ue = P.current.getBoundingClientRect(), Ie = Oe.getBoundingClientRect(), at = { x: te.clientX - Ue.left, y: te.clientY - Ue.top }, ct = {
          x: te.clientX - Ue.left,
          y: te.clientY - Ue.top
        }, lt = {
          x: Ie.left - Ue.left,
          y: Ie.top - Ue.top,
          width: Ie.width,
          height: Ie.height
        }, {
          coords: { x: et, y: Pt },
          resourceIndex: It,
          disposition: bo,
          reservationData: wo
        } = _i(
          Qe,
          se,
          at,
          me,
          Me,
          _e,
          J
        );
        g({
          coords: { x: et, y: Pt },
          mouseCoords: ct,
          resourceIndex: It,
          disposition: bo,
          reservationData: wo,
          tileBounds: lt
        }), Z(!0);
      },
      4
    )
  ), ue = fe(
    vn((te, ne) => {
      k(), p(
        te.map((se) => ({
          ...se,
          data: se.data.filter((me) => {
            const { title: Me, description: _e, subtitle: Oe } = me;
            return (Me == null ? void 0 : Me.toLowerCase().includes(ne.toLowerCase())) || (Oe == null ? void 0 : Oe.toLowerCase().includes(ne.toLowerCase())) || (_e == null ? void 0 : _e.toLowerCase().includes(ne.toLowerCase()));
          })
        })).filter((se) => se.data.length > 0)
      );
    }, 500)
  ), ve = (te, ne) => {
    if (te)
      return ne.flatMap((se) => se.data).find((se) => se.segmentId === te);
  }, ke = (te) => {
    if (!te.target)
      return { tile: null, segmentId: null };
    const ne = te.target.closest("[data-segment-id]");
    return ne ? { tile: ne, segmentId: ne.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, Ce = (te) => {
    const ne = te.target.value;
    y(ne), ue.current.cancel(), ne ? ue.current(e, ne) : (k(), p(e));
  }, ce = de(() => {
    he.current.cancel(), Z(!1);
  }, []);
  return ye(() => {
    const te = (se) => he.current(
      se,
      e,
      $,
      _,
      oe,
      b
    ), ne = P.current;
    if (ne)
      return ne.addEventListener("mousemove", te), ne.addEventListener("mouseleave", ce), () => {
        ne.removeEventListener("mousemove", te), ne.removeEventListener("mouseleave", ce);
      };
  }, [
    he,
    ce,
    oe,
    _,
    $,
    b,
    e
  ]), ye(() => {
    u ? (ue.current.cancel(), ue.current(e, u)) : p(e);
  }, [e, u]), Vt(() => {
    const te = N.current;
    if (!te)
      return;
    const ne = () => X(te.offsetHeight);
    ne();
    const se = new ResizeObserver(ne);
    return se.observe(te), () => se.disconnect();
  }, []), /* @__PURE__ */ W(da, { children: [
    /* @__PURE__ */ h(
      Tc,
      {
        headerHeight: Y,
        data: w,
        categories: H,
        pageNum: L,
        pagesAmount: B,
        rows: ie,
        onLoadNext: Q,
        onLoadPrevious: re,
        searchInputValue: u,
        onSearchInputChange: Ce,
        onItemClick: o,
        collapsedGroups: S,
        onToggleGroup: V,
        allGroupIds: U,
        onExpandAll: z,
        onCollapseAll: m
      }
    ),
    /* @__PURE__ */ W(ua, { children: [
      /* @__PURE__ */ h(
        sl,
        {
          ref: N,
          zoom: b,
          topBarWidth: i,
          showThemeToggle: E,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Mi,
        {
          data: K,
          baseData: r || e,
          zoom: b,
          rows: F,
          ref: P,
          onTileClick: n,
          onEventDrop: c,
          onEventDrag: l,
          draggableConfig: a,
          onDragStateChange: O,
          onTimeRangeSelect: d,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: v,
          separatorRowIndices: q,
          subcontractSeparatorRow: le
        }
      ) : /* @__PURE__ */ h(fa, { width: i, children: G ? /* @__PURE__ */ h($n, { isLoading: G, position: "left" }) : /* @__PURE__ */ h(la, {}) }),
      T && /* @__PURE__ */ h(Hl, { tooltipData: C, visible: R && !I })
    ] })
  ] });
}, ga = x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Ye + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.primary};
`, hr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, ya = x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, va = x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, pr = x.button`
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
`, xa = x.button`
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
`, ba = x.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin-left: 4px;
  text-transform: capitalize;
  white-space: nowrap;
`, wa = x.div`
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
`, mr = x.button`
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
`, Sa = x.label`
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
`, Ca = x.button`
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
`, Ma = x.span`
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
`, dt = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), ka = () => {
  var r, t;
  const e = document.getElementById(ao);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, $a = () => {
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
  } = Ve();
  Ge();
  const { filterButtonState: d = -1 } = e, f = () => {
    var v;
    (v = document.querySelector(`#${je} input[placeholder]`)) == null || v.focus();
  };
  return /* @__PURE__ */ W(ga, { width: 0, children: [
    /* @__PURE__ */ W(hr, { $at: "start", children: [
      /* @__PURE__ */ W(va, { children: [
        /* @__PURE__ */ h(pr, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ h(dt, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h(xa, { onClick: s, children: "Hoy" }),
        /* @__PURE__ */ h(pr, { onClick: n, "aria-label": "Siguiente", children: /* @__PURE__ */ h(dt, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      /* @__PURE__ */ h(ba, { children: r.locale(A.locale()).format("MMMM YYYY") }),
      /* @__PURE__ */ h(ya, {}),
      /* @__PURE__ */ W(wa, { children: [
        /* @__PURE__ */ h("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ h("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ h("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ W(Sa, { children: [
        /* @__PURE__ */ W(dt, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (v) => v.target.value && c(v.target.value) })
      ] }),
      /* @__PURE__ */ W(Ca, { onClick: f, children: [
        /* @__PURE__ */ W(dt, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] })
    ] }),
    /* @__PURE__ */ W(hr, { $at: "end", children: [
      e.showFilterButton !== !1 && d >= 0 && /* @__PURE__ */ W(mr, { $primary: !!d, onClick: l, children: [
        /* @__PURE__ */ h(dt, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!d && /* @__PURE__ */ h(Ma, { children: d })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ W(mr, { onClick: ka, children: [
        /* @__PURE__ */ h(dt, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      a
    ] })
  ] });
}, Da = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ea = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), _a = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Ta = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Aa = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Pa = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ia = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Oa = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Ya = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Ra = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), La = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Na = (e) => /* @__PURE__ */ ae.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Ba = (e) => /* @__PURE__ */ ae.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Ha = (e) => /* @__PURE__ */ ae.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ae.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ ae.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), za = {
  add: Da,
  subtract: Ea,
  filter: _a,
  arrowLeft: Ta,
  arrowRight: Aa,
  defaultAvatar: Pa,
  calendarWarning: Ia,
  calendarFree: Oa,
  arrowDown: Ra,
  arrowUp: Ya,
  search: La,
  close: Na,
  moon: Ba,
  sun: Ha
}, Qt = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = Xt(), i = za[e];
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
}, Fa = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => Fa(e, r, t)}
`;
const Wa = x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${io}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ne};
`, ja = x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Za = x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, Va = x.div`
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
`, Ga = x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, Xa = x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, Ua = x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({ $sev: e }) => e === 2 ? "#c6483d" : e === 1 ? "#d98a22" : "#93b1a6"};
`, Ka = x.div`
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
`, Ja = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, qa = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, Qa = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, ec = x.div`
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
`, tc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ve(), s = Ge(), i = fe(null), [c, l] = pe(null), a = $e(
    () => Array.from({ length: 12 }, (b, $) => A().month($).format("MMM").toUpperCase()),
    [s]
  ), d = $e(() => A().startOf("day"), []), { domainStart: f, domainEnd: v, domainDays: C } = $e(() => {
    const b = d.subtract(3, "month").startOf("month"), $ = d.add(9, "month").endOf("month");
    return { domainStart: b, domainEnd: $, domainDays: $.diff(b, "day") + 1 };
  }, [d]), g = (b) => b.diff(f, "day") / C * 100, M = (b) => Math.min(100, Math.max(0, b)), p = $e(() => {
    const b = [];
    let $ = f.startOf("month");
    for (; $.isBefore(v); )
      b.push($), $ = $.add(1, "month");
    return b;
  }, [f, v]), R = o == null ? void 0 : o.yearCounts, Z = $e(() => {
    const b = Math.ceil(C / 7), $ = new Array(b).fill(0), G = new Array(b).fill(0), J = (j) => {
      const ee = j.diff(f, "day");
      return ee < 0 || ee >= C ? -1 : Math.floor(ee / 7);
    };
    if (R && R.length)
      for (const j of R) {
        const ee = J(A(j.date));
        ee < 0 || ee >= b || ($[ee] += j.count);
      }
    else
      for (const j of t ?? [])
        for (const ee of j.data ?? []) {
          const ie = J(A(ee.startDate));
          ie < 0 || ie >= b || ($[ie] += 1);
        }
    for (const j of t ?? [])
      for (const ee of j.data ?? []) {
        const ie = J(A(ee.startDate));
        if (ie < 0 || ie >= b)
          continue;
        const L = ee.readiness === "sin_chofer" ? 2 : ee.readiness === "sin_avisar" ? 1 : 0;
        L > G[ie] && (G[ie] = L);
      }
    const T = $.length ? Math.max(...$) : 0;
    if (T <= 0)
      return $.map((j, ee) => ({ h: 0, sev: G[ee] }));
    const E = $.filter((j) => j > 0).sort((j, ee) => j - ee), P = E.length >> 1, N = E.length % 2 ? E[P] : (E[P - 1] + E[P]) / 2, Y = N > 0 ? T / N : 1, X = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, Y)))));
    return $.map((j, ee) => ({ h: j > 0 ? Math.min(100, 100 * Math.pow(j / T, X)) : 0, sev: G[ee] }));
  }, [t, R, f, C]), I = g(d), O = (b) => {
    const { startDate: $, endDate: G } = Ut(b, r), J = M(g($));
    return { left: J, width: M(g(G)) - J, startDate: $, endDate: G };
  }, u = O(e), y = c ? O(c.d) : null, S = (b) => `${b.date()} ${a[b.month()]}`, D = (b) => {
    var J;
    const $ = (J = i.current) == null ? void 0 : J.getBoundingClientRect();
    if (!$)
      return null;
    const G = Math.min(1, Math.max(0, (b - $.left) / $.width));
    return { f: G, d: f.add(Math.round(G * (C - 1)), "day") };
  };
  return /* @__PURE__ */ W(Wa, { children: [
    /* @__PURE__ */ W(ja, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ W(
      Za,
      {
        ref: i,
        onClick: (b) => {
          const $ = D(b.clientX);
          $ && n($.d.toDate());
        },
        onMouseMove: (b) => {
          const $ = D(b.clientX);
          $ && l({ left: $.f * 100, d: $.d });
        },
        onMouseLeave: () => l(null),
        children: [
          /* @__PURE__ */ h(Va, { children: p.map((b, $) => /* @__PURE__ */ h("span", { style: { left: `${g(b)}%` }, children: $ === 0 || b.month() === 0 ? `${a[b.month()]} ${b.format("YY")}` : a[b.month()] }, $)) }),
          p.map(
            (b, $) => $ === 0 ? null : /* @__PURE__ */ h(Ga, { style: { left: `${g(b)}%` } }, $)
          ),
          /* @__PURE__ */ h(Xa, { children: Z.map((b, $) => /* @__PURE__ */ h(Ua, { $sev: b.sev, style: { height: `${b.h}%` } }, $)) }),
          /* @__PURE__ */ h(Ja, { style: { left: `${u.left}%`, width: `${u.width}%` } }),
          /* @__PURE__ */ h(Ka, { style: { left: `${M(I)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && y && /* @__PURE__ */ W(Te, { children: [
            /* @__PURE__ */ h(qa, { style: { left: `${y.left}%`, width: `${y.width}%` } }),
            /* @__PURE__ */ h(Qa, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(ec, { style: { left: `${c.left}%` }, children: `Ir a ${S(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, nc = x.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, rc = x.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? io : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, oc = x.div`
  position: relative;
`, sc = ({
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
  onTimeRangeSelect: f,
  onMultiTimeRangeSelect: v,
  clickToAddConfig: C
}) => {
  const { goToDate: g, handleGoToday: M, zoomIn: p, zoomOut: R, zoom: Z } = Ve();
  return Wr(
    d,
    () => ({
      goToDate: g,
      goToToday: M,
      setZoom: (I) => {
        if (!uo(I))
          return;
        const O = I - Z;
        if (O > 0)
          for (let u = 0; u < O; u++)
            p();
        else
          for (let u = 0; u < Math.abs(O); u++)
            R();
      }
    }),
    [g, M, Z, p, R]
  ), /* @__PURE__ */ h(
    ma,
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
      onTimeRangeSelect: f,
      onMultiTimeRangeSelect: v,
      clickToAddConfig: C
    }
  );
}, $d = En(function({
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
  onItemClick: f,
  isLoading: v,
  onEventDrop: C,
  onEventDrag: g,
  draggableConfig: M,
  onTimeRangeSelect: p,
  onMultiTimeRangeSelect: R,
  clickToAddConfig: Z
}, I) {
  var N;
  const O = $e(
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
  ), u = fe(null), y = fe(null), [S, D] = pe((N = u.current) == null ? void 0 : N.clientWidth), b = $e(() => A(s), [s]), [$, G] = pe(O.defaultTheme ?? "light"), J = () => {
    G($ === "light" ? "dark" : "light");
  }, T = $ === "light" ? ks : $s, E = O.theme ? O.theme[T.mode] : {}, P = {
    ...T,
    colors: {
      ...T.colors,
      ...E
    }
  };
  return Wr(
    I,
    () => ({
      goToDate: (Y) => {
        var X;
        return (X = y.current) == null ? void 0 : X.goToDate(Y);
      },
      goToToday: () => {
        var Y;
        return (Y = y.current) == null ? void 0 : Y.goToToday();
      },
      setZoom: (Y) => {
        var X;
        return (X = y.current) == null ? void 0 : X.setZoom(Y);
      }
    }),
    []
  ), Vt(() => {
    const Y = () => {
      u.current && D(u.current.clientWidth);
    };
    return Y(), window.addEventListener("resize", Y), () => window.removeEventListener("resize", Y);
  }, []), /* @__PURE__ */ W(Te, { children: [
    /* @__PURE__ */ h(Ms, {}),
    /* @__PURE__ */ h(ws, { theme: P, children: /* @__PURE__ */ h(sa, { lang: O.lang, translations: O.translations, children: /* @__PURE__ */ h(
      gi,
      {
        data: r,
        isLoading: !!v,
        config: O,
        onRangeChange: i,
        defaultStartDate: b,
        handleToggleDisplayActiveUnits: l,
        onClearFilterData: a,
        toolbarActions: d,
        children: /* @__PURE__ */ W(nc, { id: ao, children: [
          /* @__PURE__ */ h(
            rc,
            {
              showScroll: !!r.length,
              $footer: O.showOverview !== !1 && !!r.length,
              id: je,
              ref: u,
              children: /* @__PURE__ */ h(oc, { children: /* @__PURE__ */ h(
                sc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: S ?? 0,
                  onItemClick: f,
                  toggleTheme: J,
                  onEventDrop: C,
                  onEventDrag: g,
                  draggableConfig: M,
                  schedulerRef: y,
                  onTimeRangeSelect: p,
                  onMultiTimeRangeSelect: R,
                  clickToAddConfig: Z
                }
              ) })
            }
          ),
          O.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(tc, {})
        ] })
      }
    ) }) })
  ] });
}), ic = x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, ac = x.button`
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
`, cc = x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, lc = x.p`
  ${wt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, gr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Ge(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(ic, { intent: e, children: /* @__PURE__ */ W(ac, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(cc, { children: t }),
    /* @__PURE__ */ h(lc, { children: l })
  ] }) });
}, dc = x.div`
  min-width: ${Ye + "px"};
  max-width: ${Ye + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, uc = x.div`
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
`, fc = x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, hc = x.input`
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
`, pc = x.div`
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
`, yr = x.div`
  display: grid;
  grid-template-rows: ${({ $collapsed: e }) => e ? "0fr" : "1fr"};
  transition: grid-template-rows 200ms ease;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, vr = x.div`
  overflow: hidden;
  min-height: 0;
`, mc = x.button`
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
`, gc = it`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, yc = x.div`
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
    animation: ${gc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, vc = x.div`
  display: flex;
  align-items: center;
`, xc = x.div`
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
`, bc = x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, wc = x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, xr = x.p`
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
`, Sc = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Cc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Mc = () => /* @__PURE__ */ W("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), kc = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  yc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ W(vc, { children: [
      /* @__PURE__ */ h(xc, { $provider: o, children: Sc(r.icon) ? /* @__PURE__ */ h(bc, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Mc, {}) : /* @__PURE__ */ h(Cc, {}) }),
      /* @__PURE__ */ W(wc, { children: [
        /* @__PURE__ */ h(xr, { isMain: !0, children: r.title }),
        /* @__PURE__ */ h(xr, { children: r.subtitle })
      ] })
    ] })
  }
), $c = x.div`
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
`, Dc = x.span`
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
`, Ec = x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, _c = x.div`
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
`, br = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => /* @__PURE__ */ W($c, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ h(_c, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(Dc, { $variant: o, children: e }),
  /* @__PURE__ */ h(Ec, { $variant: o, children: r })
] }), Tc = ({
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
  collapsedGroups: f,
  onToggleGroup: v,
  allGroupIds: C,
  onExpandAll: g,
  onCollapseAll: M
}) => {
  const [p, R] = pe(!1), Z = Ge(), I = () => R((T) => !T), O = r ? [...r].sort((T, E) => T.maxPassengers - E.maxPassengers) : [], u = O.length > 0, y = C.length > 0, S = y && f.size === C.length;
  y && f.size;
  const D = e.filter((T) => T.isSubcontract), b = Z.subcontract ?? "Subcontract", $ = (T) => {
    const E = e.indexOf(T);
    return /* @__PURE__ */ h(
      kc,
      {
        id: T.id,
        item: T.label,
        rows: n[E],
        onItemClick: d,
        isSubcontract: T.isSubcontract
      },
      T.id
    );
  }, G = (T) => {
    const E = e.filter(
      (Y) => !Y.isSubcontract && Y.categoryId === T.id
    );
    if (E.length === 0)
      return null;
    const P = f.has(T.id), N = T.name;
    return /* @__PURE__ */ W("div", { children: [
      /* @__PURE__ */ h(
        br,
        {
          label: N,
          count: E.length,
          isCollapsed: P,
          onToggle: () => v(T.id),
          variant: "category"
        }
      ),
      /* @__PURE__ */ h(yr, { $collapsed: P, children: /* @__PURE__ */ h(vr, { children: E.map($) }) })
    ] }, T.id);
  }, J = e.filter(
    (T) => !T.isSubcontract && (!T.categoryId || !u)
  );
  return /* @__PURE__ */ W(dc, { children: [
    /* @__PURE__ */ W(uc, { $height: t, children: [
      /* @__PURE__ */ W(fc, { children: [
        /* @__PURE__ */ W(pc, { isFocused: p, children: [
          /* @__PURE__ */ h(
            hc,
            {
              placeholder: Z.search,
              value: l,
              onChange: a,
              onFocus: I,
              onBlur: I
            }
          ),
          /* @__PURE__ */ h(Qt, { iconName: "search" })
        ] }),
        y && /* @__PURE__ */ h(
          mc,
          {
            title: S ? "Expand all" : "Collapse all",
            onClick: S ? g : M,
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
        gr,
        {
          intent: "previous",
          isVisible: i !== 0,
          onClick: s,
          icon: /* @__PURE__ */ h(Qt, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: i,
          pagesAmount: c
        }
      )
    ] }),
    u ? O.map(G) : J.map($),
    u && J.length > 0 && J.map($),
    D.length > 0 && /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(
        br,
        {
          label: b,
          count: D.length,
          isCollapsed: f.has("__subcontract__"),
          onToggle: () => v("__subcontract__"),
          variant: "subcontract"
        }
      ),
      /* @__PURE__ */ h(yr, { $collapsed: f.has("__subcontract__"), children: /* @__PURE__ */ h(vr, { children: D.map($) }) })
    ] }),
    /* @__PURE__ */ h(
      gr,
      {
        intent: "next",
        isVisible: i !== c - 1,
        onClick: o,
        icon: /* @__PURE__ */ h(Qt, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: i,
        pagesAmount: c
      }
    )
  ] });
}, Ac = x.div`
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
`, Pc = it`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Ic = x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Pc} 1s infinite;
`, Oc = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(Ac, { position: r, children: /* @__PURE__ */ h(Ic, {}) }) : null, $n = Oc, Xe = (e, r) => {
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
    fillStyle: f,
    topText: v,
    bottomText: C,
    strokeStyle: g,
    labelBetweenCells: M
  } = e;
  if (t.beginPath(), t.strokeStyle = g ?? r.colors.border, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), M ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = a;
    const p = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.accent, t.fillText(l, p, c);
  }
  if (d && f && v && C) {
    t.fillStyle = f, t.fillRect(n, o, s, i), t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = v.font;
    const p = n + s / 2 - t.measureText(v.label).width / 2;
    t.fillStyle = v.color, t.fillText(v.label, p, v.y), t.font = C.font;
    const R = n + s / 2 - t.measureText(C.label).width / 2;
    t.fillStyle = C.color, t.fillText(C.label, R, C.y);
  }
}, Dn = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Yc = (e, r, t, n) => {
  const o = vt - nt / Es, s = vt - nt / _s, i = Ze + Ct;
  let c = 0;
  for (let l = 0; l < r; l++) {
    const a = lo(
      A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(l, "days")
    ), d = a.isCurrentDay;
    if (Xe(
      {
        ctx: e,
        x: c,
        y: i,
        width: De,
        height: nt,
        isBottomRow: !0,
        // OPAQUE today fill (currentDay, same as the grid's today column) — the old `today+"26"` was 15% alpha, so
        // events scrolling under the header showed through the HOY cell.
        fillStyle: d ? n.colors.currentDay : a.isBusinessDay ? n.colors.gridBackground : n.colors.primary,
        topText: {
          y: o,
          label: d ? "" : a.dayName.toUpperCase(),
          font: He.bottomRow.name,
          color: Dn({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, n)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: d ? `700 10px ${Ne}` : He.bottomRow.number,
          color: d ? n.colors.today : Dn(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            n
          )
        }
      },
      n
    ), d) {
      const C = c + De / 2, g = o - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(C - 30 / 2, g, 30, 13, 5) : e.rect(C - 30 / 2, g, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${Ne}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", C, g + 13 / 2 + 0.5), e.restore();
    }
    c += De;
  }
}, Rc = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Le;
  const s = Ze;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= un && (c = 0);
    const a = co(t, l) * Le;
    Xe(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: Ct,
        textYPos: so,
        label: A().month(c).format("MMMM").toUpperCase(),
        font: He.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, Lc = (e, r, t) => {
  let o = 0, s = 0, i = A(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * De + De;
  for (let c = 0; c < un; c++)
    i > un - 1 && (i = 0), s = A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * De, Xe(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Ze,
        textYPos: Yn,
        label: A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: He.topRow
      },
      t
    ), o += s, i++;
}, Nc = (e, r, t, n) => {
  const o = 7 * De, s = Ze, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let f = (c + a) % or;
    f <= 0 && (f += or), d !== 1 && a === 0 && (l = -d * De + De), Xe(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: Ct,
        textYPos: so,
        label: `${t.toUpperCase()} ${f}`,
        font: He.middleRow
      },
      n
    ), l += o;
  }
}, Bc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, Hc = (e, r, t, n, o) => {
  const s = vt - nt / 1.6, i = vt - nt / 4.5, c = Ze + Ct;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = d.isSame(A(), "week");
    Xe(
      {
        ctx: e,
        x: l,
        y: c,
        width: xt,
        height: nt,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : Bc({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: f ? `700 14px ${Ne}` : He.bottomRow.name,
          color: f ? o.colors.today : Dn({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: He.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += xt;
  }
}, zc = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (ar(s) - t + 1) * Le, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = ar(s + l) * Le), d + a > i && l > 0 && (a = Math.ceil((i - d) / Le) * Le), Xe(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Ze,
        textYPos: Yn,
        label: (s + l).toString(),
        font: He.topRow
      },
      n
    ), c += a, d += a, l++;
}, Fc = (e, r, t, n) => {
  const o = Math.floor(r / jt) + 2, s = jt * Pe;
  let l = -A(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Pe + 0.5 * Pe;
  for (let a = 0; a < o; a++) {
    const d = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    Xe(
      {
        ctx: e,
        x: l,
        y: bt,
        width: s,
        height: Tt,
        textYPos: bt + Tt / 2 + 2,
        label: d,
        font: He.bottomRow.number
      },
      n
    ), l += s;
  }
}, Wc = (e, r, t, n) => {
  const o = Math.ceil(r / jt), s = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * Pe;
  for (let f = 0; f < a; f++) {
    const v = A(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), g = A(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), M = g.format("MMMM").toUpperCase(), p = g.diff(v, "hour") + 1, R = f === 0 ? p * Pe : r * Pe;
    Xe(
      {
        ctx: e,
        x: d,
        y: 0,
        width: R,
        height: bt,
        textYPos: Yn,
        label: M,
        font: He.topRow
      },
      n
    ), d += R;
  }
}, jc = (e, r, t, n) => {
  let o = 0;
  const s = bt + Tt, i = A(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Pe;
  for (let l = 0; l < r; l++) {
    const a = i.add(l, "hours").format("h:00a").toUpperCase();
    Xe(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: dn,
        label: a,
        font: He.bottomRow.hoursInDay,
        textYPos: bt + Tt + dn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Pe;
  }
}, Zc = (e, r, t, n, o, s, i) => {
  switch (r) {
    case 0:
      zc(e, n, s, i), Rc(e, t, n, i), Hc(e, t, n, o, i);
      break;
    case 1:
      Lc(e, n, i), Nc(e, n, o, i), Yc(e, t, n, i);
      break;
    case 2:
      Wc(e, t, n, i), Fc(e, t, n, i), jc(e, t, n, i);
      break;
  }
}, Vc = x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, Gc = x.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, Xc = x.div`
  height: ${vt}px;
  display: block;
`, Uc = x.canvas``, Kc = {
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
    children: Kc[e]
  }
), Jc = x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Ye + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, wr = x.span`
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
`, Nt = x.span`
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
`, qc = x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, Qc = x.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, el = x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, tl = x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, nl = x.span`
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
`, rl = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], ol = () => /* @__PURE__ */ W(Jc, { children: [
  /* @__PURE__ */ h(wr, { children: "Leyenda" }),
  /* @__PURE__ */ W(Nt, { children: [
    /* @__PURE__ */ h(Fe, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ W(Nt, { children: [
    /* @__PURE__ */ h(Fe, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ W(Nt, { children: [
    /* @__PURE__ */ h(Fe, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ W(Nt, { children: [
    /* @__PURE__ */ h(qc, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(Qc, {}),
  /* @__PURE__ */ W(wr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  rl.map((e) => /* @__PURE__ */ W(el, { children: [
    /* @__PURE__ */ h(tl, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(nl, { style: { color: e.color }, children: /* @__PURE__ */ h(Fe, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), sl = En(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = Ge(), { date: c, cols: l, dayOfYear: a, startDate: d, config: f } = Ve(), v = fe(null), C = Xt(), g = de(
    (M) => {
      const p = Bn(), Z = (r === 2 ? Ds : vt) + 1;
      ho(M, p, Z), Zc(M, r, l, d, i, a, C);
    },
    [l, a, d, i, r, C]
  );
  return ye(() => {
    if (!v.current)
      return;
    const M = v.current.getContext("2d");
    if (!M)
      return;
    const p = () => g(M);
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [g]), ye(() => {
    const M = v.current;
    if (!M)
      return;
    M.style.letterSpacing = "1px";
    const p = M.getContext("2d");
    p && g(p);
  }, [c, r, g]), /* @__PURE__ */ W(Vc, { ref: s, children: [
    (f.showTopbar !== !1 || f.showLegend !== !1) && /* @__PURE__ */ W(Gc, { $width: t, children: [
      f.showTopbar !== !1 && /* @__PURE__ */ h($a, { width: t, showThemeToggle: n, toggleTheme: o }),
      f.showLegend !== !1 && /* @__PURE__ */ h(ol, {})
    ] }),
    /* @__PURE__ */ h(Xc, { id: Ts, children: /* @__PURE__ */ h(Uc, { ref: v }) })
  ] });
}), il = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Le;
      break;
    case 2:
      n = Pe;
      break;
    default:
      n = De;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), l = r.endDate.startOf("day"), a = () => {
    let d;
    switch (t) {
      case 2:
        d = (e.startDate.diff(r.startDate, "minute") / Ee + 1) * n - n / 2;
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
          e.endDate.diff(e.startDate, "minute") / Ee * n,
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
          e.endDate.diff(r.startDate, "minute") / Ee * n + 0.5 * n,
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
          r.endDate.diff(e.startDate, "minute") / Ee * n,
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
          r.endDate.diff(r.startDate, "minute") / Ee * n,
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
}, al = (e, r, t, n, o, s) => {
  const i = e * ge + As, c = r.hour(), l = t.hour();
  let a, d, f, v;
  switch (s) {
    case 2: {
      a = A(n), d = A(o), f = A(r).hour(c).minute(0), v = A(t).hour(l).minute(0);
      break;
    }
    default: {
      a = A(n).hour(0).minute(0), d = A(o).hour(23).minute(59), f = r, v = t;
      break;
    }
  }
  return {
    ...il(
      { startDate: a, endDate: d },
      { startDate: f, endDate: v },
      s
    ),
    y: i
  };
}, xo = (e) => {
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
x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;
x.p`
  ${wt}
  ${St}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;
const cl = it`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, ll = x.button`
  ${wt}
  position: absolute;
  height: ${On}px;
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
    animation: ${cl} 180ms ease-out;
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
  ${({ $exiting: e }) => e && "opacity: 0; transform: scale(0.96); pointer-events: none;"}
`, dl = x.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`, ul = x.div`
  position: sticky;
  left: ${Ye + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, Sr = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, fl = x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, hl = x.span`
  ${St}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, pl = x.span`
  ${St}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, ml = x.span`
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
`, gl = x.div`
  ${St}
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
`, Cr = x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Mr = x.span`
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
`, kr = x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, yl = x.div`
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
`, $r = x.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, vl = 34, xl = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, bl = "#3E8E5A", wl = "#D98A22", Dr = ({
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
  const { date: d } = Ve(), f = Ut(d, t), { y: v, x: C, width: g } = al(
    e,
    f.startDate,
    f.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: M } = Xt(), p = fe(null), R = A(r.startDate).isSame(A(r.endDate), "day"), Z = r.eventType === At.Tour, I = r.eventType === At.Transfer, O = R && (Z || I), u = (J) => {
    p.current = { x: J.clientX, y: J.clientY }, c && s && (J.preventDefault(), s(r, J));
  }, y = (J) => {
    if (p.current) {
      const T = Math.abs(J.clientX - p.current.x), E = Math.abs(J.clientY - p.current.y);
      Math.sqrt(T * T + E * E) <= 5 && (o == null || o(r)), p.current = null;
    } else
      o == null || o(r);
  }, S = {
    left: `${C}px`,
    top: `${v + l}px`,
    backgroundColor: `${r.bgColor ?? M.defaultTile}`,
    width: `${g}px`,
    color: xo(r.bgColor ?? "")
  }, D = !n && r.readiness ? xl[r.readiness] : null, b = n && r.subcontractConfirmed === !1, $ = n ? b ? wl : bl : D == null ? void 0 : D.stripe, G = (J) => /* @__PURE__ */ W(
    ll,
    {
      "data-segment-id": r.segmentId,
      style: S,
      onClick: y,
      onMouseDown: u,
      onDragStart: (T) => T.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: b,
      $exiting: a,
      children: [
        $ && /* @__PURE__ */ h(dl, { style: { background: $ } }),
        J
      ]
    }
  );
  return G(
    O ? /* @__PURE__ */ W(Te, { children: [
      (n || D) && /* @__PURE__ */ h(Cr, { $sm: !0, children: n ? /* @__PURE__ */ h(kr, { children: "SUB" }) : D && /* @__PURE__ */ h(Mr, { $sm: !0, style: { color: D.color }, children: /* @__PURE__ */ h(Fe, { name: D.icon, strokeWidth: D.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ W(yl, { $transfer: I, children: [
        /* @__PURE__ */ h(Fe, { name: I ? "transfer" : "sun", strokeWidth: 2.4 }),
        g >= vl && /* @__PURE__ */ W(Te, { children: [
          /* @__PURE__ */ h($r, { children: A(r.startDate).format("HH:mm") }),
          !I && /* @__PURE__ */ h($r, { $end: !0, children: A(r.endDate).format("HH:mm") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(Cr, { children: n ? /* @__PURE__ */ h(kr, { children: "SUB" }) : D && /* @__PURE__ */ h(Mr, { style: { color: D.color }, children: /* @__PURE__ */ h(Fe, { name: D.icon, strokeWidth: D.icon === "check" ? 2.6 : 2.2 }) }) }),
      r.bookingNumber && /* @__PURE__ */ h(ml, { children: r.bookingNumber }),
      /* @__PURE__ */ W(ul, { children: [
        /* @__PURE__ */ W(Sr, { $pad: !0, children: [
          /* @__PURE__ */ h(fl, { children: /* @__PURE__ */ h(Fe, { name: I ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(hl, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(Sr, { children: /* @__PURE__ */ h(pl, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ W(gl, { children: [
          /* @__PURE__ */ h(Fe, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Er = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Re;
}, Sl = it`
  from { opacity: 0; }
  to { opacity: 1; }
`, Cl = x.div`
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
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Sl} 200ms ease-out;
  }
  pointer-events: none;
`, Ml = ({
  data: e,
  zoom: r,
  onTileClick: t,
  onDragStart: n,
  isDraggable: o,
  draggingEventId: s,
  separatorRowIndices: i = []
}) => {
  const { nodes: c, liveMap: l } = $e(() => {
    const g = /* @__PURE__ */ new Map();
    let M = 0;
    return { nodes: e.map((R, Z) => {
      if (Z > 0 && (M += Math.max(e[Z - 1].data.length, 1)), !R.data.some((I) => I.length > 0)) {
        const I = Er(M, i);
        return [
          /* @__PURE__ */ h(Cl, { style: { top: `${M * ge + I}px` }, children: "Disponible" }, `dispo-${R.id}`)
        ];
      }
      return R.data.map(
        (I, O) => I.map((u) => {
          const y = s === u.segmentId, S = o ? o(u) : !1, D = O + M, b = Er(D, i);
          return g.set(u.segmentId, {
            project: u,
            absoluteRow: D,
            yOffset: b,
            isSubcontract: !!R.isSubcontract
          }), /* @__PURE__ */ h(
            Dr,
            {
              row: D,
              data: u,
              zoom: r,
              isSubcontract: R.isSubcontract,
              onTileClick: t,
              onDragStart: n,
              isDragging: y,
              isDraggable: S,
              yOffset: b
            },
            u.segmentId
          );
        })
      );
    }).flat(2), liveMap: g };
  }, [e, t, r, n, o, s, i]), a = fe(/* @__PURE__ */ new Map()), d = fe([]), [f, v] = pe([]);
  ye(() => () => d.current.forEach(clearTimeout), []), ye(() => {
    const g = a.current;
    a.current = l;
    const M = [];
    if (g.forEach((Z, I) => {
      l.has(I) || M.push(Z);
    }), v((Z) => {
      let I = Z.filter((O) => !l.has(O.project.segmentId));
      for (const O of M)
        I.some((u) => u.project.segmentId === O.project.segmentId) || (I = [...I, O]);
      return I;
    }), !M.length)
      return;
    const p = new Set(M.map((Z) => Z.project.segmentId)), R = setTimeout(() => {
      v((Z) => Z.filter((I) => !p.has(I.project.segmentId)));
    }, 220);
    d.current.push(R);
  }, [l]);
  const C = f.filter((g) => !l.has(g.project.segmentId)).map((g) => /* @__PURE__ */ h(
    Dr,
    {
      row: g.absoluteRow,
      data: g.project,
      zoom: r,
      isSubcontract: g.isSubcontract,
      yOffset: g.yOffset,
      isDragging: !1,
      isDraggable: !1,
      exiting: !0
    },
    g.project.segmentId
  ));
  return /* @__PURE__ */ h(Te, { children: [...c, ...C] });
}, kl = Ml;
x.div`
  box-sizing: border-box;
  font-family: ${Ne};
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
const $l = x.div`
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
`, Dl = x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, El = x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, _l = x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Tl = x.span`
  flex-shrink: 0;
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, Al = x.div`
  ${wt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Pl = x.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, Il = x.div`
  padding: 10px 12px;
`, Ol = x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`, _r = x.div`
  flex: 1;
  ${({ $isEnd: e }) => e && "opacity: 0.8;"}
`, Tr = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`, Ar = x.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Pr = x.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Ir = x.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Yl = x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, Rl = x.div`
  min-width: 0;
`, Ll = x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Nl = x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, Or = x.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Mt = x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, kt = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, $t = x.div`
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
const Bl = {
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
}, Hl = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = fe(null), [s, i] = pe("below"), c = Ge(), l = { ...Bl, ...c.tooltip };
  Vt(() => {
    if (!o.current || !t)
      return;
    const g = o.current, { width: M, height: p } = g.getBoundingClientRect(), R = g.parentElement;
    if (!R)
      return;
    const Z = R.getBoundingClientRect(), I = 12, O = 4, u = Z.height - t.y, y = Z.width - t.x;
    let S = t.x + I, D = t.y + I, b = "below";
    y < M + I && (S = t.x - M - I), u < p + I && (D = t.y - p - I, b = "above"), S = Math.max(O, Math.min(S, Z.width - M - O)), D = Math.max(O, Math.min(D, Z.height - p - O)), i(b), g.style.left = `${S}px`, g.style.top = `${D}px`;
  }, [t]);
  const a = n.reservationType === At.Tour, d = a && n.isOneDayEvent, f = () => a ? d ? "oneday" : "tour" : "transfer", v = () => a ? d ? l.oneDay : l.tour : l.transfer, C = [
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ W($l, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ W(Dl, { children: [
      /* @__PURE__ */ W(El, { children: [
        /* @__PURE__ */ h(_l, { children: n.bookingNumber }),
        /* @__PURE__ */ h(Tl, { $type: f(), children: v() })
      ] }),
      /* @__PURE__ */ h(Al, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(Pl, { children: n.client })
    ] }),
    /* @__PURE__ */ W(Il, { children: [
      /* @__PURE__ */ W(Ol, { children: [
        /* @__PURE__ */ W(_r, { children: [
          /* @__PURE__ */ h(Tr, { children: l.startDate }),
          /* @__PURE__ */ W(Ar, { children: [
            /* @__PURE__ */ h(Pr, { children: n.startDate }),
            " ",
            /* @__PURE__ */ h(Ir, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ W(_r, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Tr, { children: l.endDate }),
          /* @__PURE__ */ W(Ar, { children: [
            /* @__PURE__ */ h(Pr, { children: n.endDate }),
            " ",
            /* @__PURE__ */ h(Ir, { children: n.endTime })
          ] })
        ] })
      ] }),
      C.length > 0 && /* @__PURE__ */ h(Yl, { children: C.map((g, M) => /* @__PURE__ */ W(Rl, { children: [
        /* @__PURE__ */ h(Ll, { children: g.label }),
        /* @__PURE__ */ h(Nl, { children: g.value })
      ] }, M)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ W(Or, { children: [
        n.departureAddress && /* @__PURE__ */ W(Mt, { children: [
          /* @__PURE__ */ h(kt, { children: l.salida }),
          /* @__PURE__ */ h($t, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ W(Mt, { children: [
          /* @__PURE__ */ h(kt, { children: l.destino }),
          /* @__PURE__ */ h($t, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ W(Mt, { children: [
          /* @__PURE__ */ h(kt, { children: l.regreso }),
          /* @__PURE__ */ h($t, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ W(Or, { children: [
        n.serviceNotes && /* @__PURE__ */ W(Mt, { children: [
          /* @__PURE__ */ h(kt, { children: l.serviceNotes }),
          /* @__PURE__ */ h($t, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ W(Mt, { children: [
          /* @__PURE__ */ h(kt, { children: l.reservationNotes }),
          /* @__PURE__ */ h($t, { children: n.reservationNotes })
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
const zl = x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Fl = x.div`
  position: absolute;
  height: ${On}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, Wl = x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Yr = x.p`
  ${wt}
  ${St}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, jl = x.p`
  ${wt}
  ${St}
`, Zl = x.div`
  position: sticky;
  left: ${Ye + 16}px;
  overflow: hidden;
`, Vl = x.div`
  position: absolute;
  height: ${On}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Gl = x.div`
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
`, Xl = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, Ul = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, Kl = x.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Rr = x.div`
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
`, Lr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, Nr = x.div`
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
`, en = x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, tn = x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`, ut = x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`, Hr = x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`, Jl = ({
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
  const a = Ge(), d = (O) => {
    let u = 0;
    for (const y of l)
      y <= O && u++;
    return O * ge + u * Re;
  }, [f, v] = pe(null), [C, g] = pe(0), M = de((O = 400, u = 300) => {
    const S = t.width, D = 48, b = document.getElementById("react-scheduler");
    if (!b)
      return {
        x: r.x + S + 16,
        y: r.y
      };
    const $ = b.scrollLeft, G = b.scrollTop, J = b.clientWidth, T = b.clientHeight, E = r.x - $, P = r.y - G, N = {
      left: Ye + 16,
      // Avoid left column
      right: J - 16,
      top: 16,
      bottom: T - 16
    }, Y = N.right - (E + S), X = E - N.left, j = N.bottom - (P + D), ee = P - N.top;
    let ie, L;
    return Y >= O + 16 ? ie = E + S + 16 : X >= O + 16 ? ie = E - O - 16 : Y >= X ? (ie = E + S + 16, ie + O > N.right && (ie = N.right - O)) : (ie = E - O - 16, ie < N.left && (ie = N.left)), j >= u + 16 ? L = P + D + 16 : ee >= u + 16 ? L = P - u - 16 : j >= ee ? (L = P + D + 16, L + u > N.bottom && (L = N.bottom - u)) : (L = P - u - 16, L < N.top && (L = N.top)), ie = Math.max(N.left, Math.min(ie, N.right - O)), L = Math.max(N.top, Math.min(L, N.bottom - u)), {
      x: ie + $,
      y: L + G
    };
  }, [r.x, r.y, t.width]);
  ye(() => {
    s === "dragging" && e && C === 0 ? g(r.x) : s === "idle" && g(0);
  }, [s, e, r.x, C]), ye(() => {
    v(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const p = $e(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const O = [];
    let u = 0;
    for (const y of i) {
      const S = Math.max(y.data.length, 1);
      if (y.capacity !== void 0 && e.totalPassengers > y.capacity)
        for (let D = 0; D < S; D++)
          O.push(u + D);
      u += S;
    }
    return O;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const R = s === "animating", Z = xo(e.bgColor ?? ""), I = () => {
    if (!n)
      return "";
    const O = A(n.startDate).format("MMM D, HH:mm"), u = A(n.endDate).format("HH:mm");
    return `${O} - ${u}`;
  };
  return /* @__PURE__ */ W(zl, { children: [
    p.map((O) => /* @__PURE__ */ h(
      Ul,
      {
        style: {
          top: `${d(O)}px`,
          height: `${ge}px`
        }
      },
      O
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      Xl,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${d(n.resourceIndex)}px`,
          height: `${ge}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ W(Te, { children: [
      /* @__PURE__ */ h(
        Vl,
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
        Gl,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ge - 48) / 2}px`
          },
          children: I()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      Kl,
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
      const O = M(400, 300);
      return /* @__PURE__ */ W(
        Rr,
        {
          style: {
            left: `${O.x}px`,
            top: `${O.y}px`
          },
          children: [
            /* @__PURE__ */ W(Lr, { children: [
              /* @__PURE__ */ h(Nr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Br, { children: n.conflicts.map((u, y) => {
              const S = A(n.startDate).format("YYYY-MM-DD"), D = A(n.endDate).format("YYYY-MM-DD"), b = A(u.event.startDate).format("YYYY-MM-DD"), $ = A(u.event.endDate).format("YYYY-MM-DD"), G = A(u.conflictStart).format("YYYY-MM-DD"), J = A(u.conflictEnd).format("YYYY-MM-DD"), T = S !== D, E = b !== $, P = G !== J, N = T ? A(n.startDate).format("MMM D, h:mm A") : A(n.startDate).format("h:mm A"), Y = T ? A(n.endDate).format("MMM D, h:mm A") : A(n.endDate).format("h:mm A"), X = E ? A(u.event.startDate).format("MMM D, h:mm A") : A(u.event.startDate).format("h:mm A"), j = E ? A(u.event.endDate).format("MMM D, h:mm A") : A(u.event.endDate).format("h:mm A"), ee = P ? A(u.conflictStart).format("MMM D, h:mm A") : A(u.conflictStart).format("h:mm A"), ie = P ? A(u.conflictEnd).format("MMM D, h:mm A") : A(u.conflictEnd).format("h:mm A"), L = P ? "" : A(u.conflictStart).format("MMM D"), B = n.startDate.getTime(), Q = n.endDate.getTime(), re = u.event.startDate.getTime(), k = u.event.endDate.getTime(), H = B >= re && B < k, w = Q > re && Q <= k, V = B <= re && Q >= k, U = re <= B && k >= Q;
              let z = !1, m = !1, K = !1, _ = !1, F = "";
              return V || U ? (z = !0, m = !0, K = !0, _ = !0, F = `⚠️ ${a.conflicts.changeBoth}`) : H && w ? (z = !0, m = !0, K = !0, _ = !0, F = `⚠️ ${a.conflicts.changeBoth}`) : H ? (z = !0, _ = !0, F = `⚠️ ${a.conflicts.changeStart}`) : w && (m = !0, K = !0, F = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ W(en, { children: [
                /* @__PURE__ */ W(tn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ W(ut, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  z ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: N }) : N,
                  " ",
                  a.conflicts.to,
                  " ",
                  m ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: Y }) : Y
                ] }),
                /* @__PURE__ */ W(ut, { children: [
                  /* @__PURE__ */ h("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  K ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: X }) : X,
                  " ",
                  a.conflicts.to,
                  " ",
                  _ ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: j }) : j
                ] }),
                /* @__PURE__ */ W(Hr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  L && `${L}, `,
                  ee,
                  " - ",
                  ie
                ] }),
                F && /* @__PURE__ */ h(ut, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: F })
              ] }, y);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const O = M(400, 400);
      return /* @__PURE__ */ W(
        Rr,
        {
          style: {
            left: `${O.x}px`,
            top: `${O.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ W(Lr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(Nr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ W(Br, { children: [
              (() => {
                const u = n.nearbyEvents.some((b) => b.position === "before"), y = n.nearbyEvents.some((b) => b.position === "after"), S = A(n.startDate).format("h:mm A"), D = A(n.endDate).format("h:mm A");
                return /* @__PURE__ */ W(en, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ W(tn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(ut, { style: { fontWeight: 600 }, children: [
                    A(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: S }) : S,
                    " ",
                    a.conflicts.to,
                    " ",
                    y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: D }) : D
                  ] }),
                  /* @__PURE__ */ h(ut, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((u, y) => {
                const S = A(u.event.startDate).format("YYYY-MM-DD"), D = A(u.event.endDate).format("YYYY-MM-DD"), b = S !== D, $ = b ? A(u.event.startDate).format("MMM D, h:mm A") : A(u.event.startDate).format("h:mm A"), G = b ? A(u.event.endDate).format("MMM D, h:mm A") : A(u.event.endDate).format("h:mm A"), J = A(u.event.startDate).format("MMM D"), T = Math.floor(u.timeGap / (1e3 * 60 * 60)), E = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), P = T > 0 ? `${T}h ${E}m` : `${E}m`, N = u.position === "after", Y = u.position === "before";
                return /* @__PURE__ */ W(en, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ W(tn, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ W(ut, { children: [
                    !b && `${J}: `,
                    N ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: $ }) : $,
                    " ",
                    a.conflicts.to,
                    " ",
                    Y ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: G }) : G
                  ] }),
                  /* @__PURE__ */ W(Hr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    P,
                    " ",
                    u.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, y);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      Fl,
      {
        $isAnimating: R,
        $animateToX: f == null ? void 0 : f.x,
        $animateToY: f == null ? void 0 : f.y,
        style: {
          left: R ? `${(f == null ? void 0 : f.x) ?? 0}px` : "0",
          top: R ? `${(f == null ? void 0 : f.y) ?? 0}px` : "0",
          transform: R ? void 0 : `translate3d(${c ? C : r.x}px, ${r.y}px, 0)`,
          backgroundColor: e.bgColor ?? "rgb(114, 141, 226)",
          width: `${t.width}px`,
          color: Z
        },
        children: /* @__PURE__ */ h(Wl, { children: /* @__PURE__ */ W(Zl, { children: [
          /* @__PURE__ */ h(Yr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Yr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(jl, { children: e.description })
        ] }) })
      }
    )
  ] });
}, ql = Jl, Ql = it`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, ed = x.div`
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
  animation: ${Ql} 1.5s ease-in-out infinite;
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
`, td = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  ed,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), nd = td, rd = it`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, od = x.div`
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
  animation: ${rd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, sd = x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, id = x.span`
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
`, ad = x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, cd = x.span`
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
const ld = x.div`
  display: flex;
  gap: 8px;
`, zr = x.button`
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
`, dd = ({ selections: e, onConfirm: r, onClear: t }) => {
  var g;
  const o = Ge().multiSelect, s = $e(() => e.filter((M) => M.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", d = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((g = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : g.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const v = s > 0, C = /* @__PURE__ */ W(od, { $hasConflicts: v, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ W(sd, { children: [
      /* @__PURE__ */ W(id, { $hasConflicts: v, children: [
        e.length,
        " ",
        i
      ] }),
      v && /* @__PURE__ */ W(ad, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ h(cd, { children: c })
    ] }),
    /* @__PURE__ */ W(ld, { children: [
      /* @__PURE__ */ W(zr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ h(zr, { variant: "primary", $hasConflicts: v, onClick: r, children: v ? `⚠️ ${d}` : `✓ ${a}` })
    ] })
  ] });
  return ko(C, document.body);
}, ud = dd, fd = it`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, hd = x.div`
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
  animation: ${fd} 0.2s ease-out;
  z-index: ${({ $isDragging: e }) => e ? 100 : 5};
  cursor: ${({ $isDragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  transition: ${({ $isDragging: e }) => e ? "none" : "background 0.15s ease"};
  box-shadow: ${({ $isDragging: e }) => e ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${({ $hasConflict: e }) => e ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict: e }) => e && Gt`
      border-style: dashed;
    `}
`, pd = x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, md = x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, gd = x.button`
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
`, yd = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, l] = pe(null), [a, d] = pe({ x: 0, y: 0 }), f = fe(null), v = $e(() => {
    switch (t) {
      case 0:
        return Le * 7;
      case 1:
        return De;
      case 2:
        return Pe;
      default:
        return De;
    }
  }, [t]), C = $e(() => A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), g = $e(() => e.map((y, S) => {
    let D = 0, b = !1;
    for (const X of r) {
      if (X.id === y.resourceId) {
        b = !0;
        break;
      }
      D += Math.max(X.data.length, 1);
    }
    if (!b)
      return null;
    const $ = A(y.startDate), G = A(y.endDate);
    let J, T;
    switch (t) {
      case 0:
        J = Math.floor($.diff(C, "days") / 7), T = Math.max(1, Math.ceil(G.diff($, "days") / 7) + 1);
        break;
      case 1:
        J = $.diff(C, "days"), T = Math.max(1, G.diff($, "days") + 1);
        break;
      case 2:
        J = $.diff(C, "hours"), T = Math.max(1, G.diff($, "hours") + 1);
        break;
      default:
        J = 0, T = 1;
    }
    const E = J * v;
    let P = 0;
    for (const X of i)
      X <= D && P++;
    const N = D * ge + P * Re, Y = T * v;
    return {
      index: S,
      selection: y,
      x: E,
      y: N,
      width: Y,
      height: ge
    };
  }), [e, r, t, C, v]), M = (y, S) => {
    const D = A(y).format("MMM D"), b = A(S).format("MMM D");
    return D === b ? D : `${D} - ${b}`;
  }, p = (y) => !y.hasConflict || !y.conflicts ? "" : `⚠️ Conflicts with:
${y.conflicts.map((D) => {
    const b = (D.overlapDuration / 36e5).toFixed(1);
    return `• ${D.event.title} (${b}h overlap)`;
  }).join(`
`)}`, R = de(
    (y) => {
      let S = 0;
      for (const D of r) {
        const b = Math.max(D.data.length, 1);
        if (y >= S * ge && y < (S + b) * ge)
          return {
            resourceId: D.id,
            resourceLabel: D.label
          };
        S += b;
      }
      return null;
    },
    [r]
  ), Z = de(
    (y) => {
      const S = Math.floor(y / v);
      switch (t) {
        case 0:
          return C.add(S * 7, "days").toDate();
        case 1:
          return C.add(S, "days").toDate();
        case 2:
          return C.add(S, "hours").toDate();
        default:
          return C.toDate();
      }
    },
    [t, C, v]
  ), I = de(
    (y, S) => {
      !s || (y.preventDefault(), y.stopPropagation(), !g[S]) || (f.current = { x: y.clientX, y: y.clientY }, l(S), d({ x: 0, y: 0 }));
    },
    [s, g]
  ), O = de(
    (y) => {
      if (c === null || !f.current)
        return;
      const S = y.clientX - f.current.x, D = y.clientY - f.current.y, b = Math.round(S / v) * v, $ = Math.round(D / ge) * ge;
      d({ x: b, y: $ });
    },
    [c, v]
  ), u = de(() => {
    if (c === null || !s) {
      l(null), d({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const y = g[c];
    if (!y) {
      l(null), d({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const S = y.x + a.x, D = y.y + a.y, b = R(D + ge / 2);
    if (!b) {
      l(null), d({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const $ = Z(S), G = e[c], J = G.endDate.getTime() - G.startDate.getTime(), T = new Date($.getTime() + J);
    s(c, {
      startDate: $,
      endDate: T,
      resourceId: b.resourceId,
      resourceLabel: b.resourceLabel
    }), l(null), d({ x: 0, y: 0 }), f.current = null;
  }, [c, a, g, e, s, R, Z]);
  return ye(() => {
    if (c !== null)
      return document.addEventListener("mousemove", O), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", u);
      };
  }, [c, O, u]), /* @__PURE__ */ h(Te, { children: g.map((y) => {
    if (!y)
      return null;
    const S = y.selection.hasConflict || !1, D = c === y.index, b = D ? y.x + a.x : y.x, $ = D ? y.y + a.y : y.y;
    return /* @__PURE__ */ W(
      hd,
      {
        $hasConflict: S,
        $isDragging: D,
        style: {
          left: b,
          top: $,
          width: y.width,
          height: y.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (G) => I(G, y.index),
        children: [
          S && /* @__PURE__ */ h(md, { title: p(y.selection), children: "⚠️" }),
          /* @__PURE__ */ h(pd, { $hasConflict: S, children: M(y.selection.startDate, y.selection.endDate) }),
          /* @__PURE__ */ h(
            gd,
            {
              onClick: (G) => {
                G.stopPropagation(), o(y.index);
              },
              onMouseDown: (G) => G.stopPropagation(),
              title: S ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      y.index
    );
  }) });
}, vd = yd, xd = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, bd = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ve(), n = $e(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Le * 7 : De, s = A().year(r.year).month(r.month).date(r.dayOfMonth).startOf("day"), i = A().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, r, t]);
  return n ? /* @__PURE__ */ h(xd, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, wd = bd;
export {
  $d as Scheduler
};
