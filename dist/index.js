var ko = Object.defineProperty;
var $o = (e, r, t) => r in e ? ko(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var jn = (e, r, t) => ($o(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as h, jsxs as F, Fragment as Oe } from "react/jsx-runtime";
import * as oe from "react";
import at, { useRef as fe, useContext as nt, useMemo as De, useLayoutEffect as Jt, useDebugValue as Zn, createElement as Do, createContext as Zr, useState as pe, useCallback as le, useEffect as be, forwardRef as Pn, useImperativeHandle as Vr } from "react";
import { createPortal as Eo } from "react-dom";
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ot = {}, _o = {
  get exports() {
    return Ot;
  },
  set exports(e) {
    Ot = e;
  }
}, Ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function To() {
  if (Vn)
    return Ce;
  Vn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function k(p) {
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
                case y:
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
  return Ce.ContextConsumer = i, Ce.ContextProvider = s, Ce.Element = e, Ce.ForwardRef = l, Ce.Fragment = t, Ce.Lazy = y, Ce.Memo = f, Ce.Portal = r, Ce.Profiler = o, Ce.StrictMode = n, Ce.Suspense = a, Ce.SuspenseList = d, Ce.isAsyncMode = function() {
    return !1;
  }, Ce.isConcurrentMode = function() {
    return !1;
  }, Ce.isContextConsumer = function(p) {
    return k(p) === i;
  }, Ce.isContextProvider = function(p) {
    return k(p) === s;
  }, Ce.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ce.isForwardRef = function(p) {
    return k(p) === l;
  }, Ce.isFragment = function(p) {
    return k(p) === t;
  }, Ce.isLazy = function(p) {
    return k(p) === y;
  }, Ce.isMemo = function(p) {
    return k(p) === f;
  }, Ce.isPortal = function(p) {
    return k(p) === r;
  }, Ce.isProfiler = function(p) {
    return k(p) === o;
  }, Ce.isStrictMode = function(p) {
    return k(p) === n;
  }, Ce.isSuspense = function(p) {
    return k(p) === a;
  }, Ce.isSuspenseList = function(p) {
    return k(p) === d;
  }, Ce.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === n || p === a || p === d || p === C || typeof p == "object" && p !== null && (p.$$typeof === y || p.$$typeof === f || p.$$typeof === s || p.$$typeof === i || p.$$typeof === l || p.$$typeof === v || p.getModuleId !== void 0);
  }, Ce.typeOf = k, Ce;
}
var Me = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function Ao() {
  return Gn || (Gn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v = !1, k = !1, p = !1, R = !1, G = !1, L;
    L = Symbol.for("react.module.reference");
    function T(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === t || _ === o || G || _ === n || _ === a || _ === d || R || _ === C || v || k || p || typeof _ == "object" && _ !== null && (_.$$typeof === y || _.$$typeof === f || _.$$typeof === s || _.$$typeof === i || _.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === L || _.getModuleId !== void 0));
    }
    function u(_) {
      if (typeof _ == "object" && _ !== null) {
        var W = _.$$typeof;
        switch (W) {
          case e:
            var ne = _.type;
            switch (ne) {
              case t:
              case o:
              case n:
              case a:
              case d:
                return ne;
              default:
                var Q = ne && ne.$$typeof;
                switch (Q) {
                  case c:
                  case i:
                  case l:
                  case y:
                  case f:
                  case s:
                    return Q;
                  default:
                    return W;
                }
            }
          case r:
            return W;
        }
      }
    }
    var g = i, w = s, E = e, b = l, D = t, z = y, q = f, O = r, M = o, P = n, N = a, I = d, X = !1, U = !1;
    function ee(_) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(_) {
      return U || (U = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(_) {
      return u(_) === i;
    }
    function H(_) {
      return u(_) === s;
    }
    function J(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function te(_) {
      return u(_) === l;
    }
    function $(_) {
      return u(_) === t;
    }
    function j(_) {
      return u(_) === y;
    }
    function S(_) {
      return u(_) === f;
    }
    function V(_) {
      return u(_) === r;
    }
    function Z(_) {
      return u(_) === o;
    }
    function B(_) {
      return u(_) === n;
    }
    function m(_) {
      return u(_) === a;
    }
    function K(_) {
      return u(_) === d;
    }
    Me.ContextConsumer = g, Me.ContextProvider = w, Me.Element = E, Me.ForwardRef = b, Me.Fragment = D, Me.Lazy = z, Me.Memo = q, Me.Portal = O, Me.Profiler = M, Me.StrictMode = P, Me.Suspense = N, Me.SuspenseList = I, Me.isAsyncMode = ee, Me.isConcurrentMode = re, Me.isContextConsumer = Y, Me.isContextProvider = H, Me.isElement = J, Me.isForwardRef = te, Me.isFragment = $, Me.isLazy = j, Me.isMemo = S, Me.isPortal = V, Me.isProfiler = Z, Me.isStrictMode = B, Me.isSuspense = m, Me.isSuspenseList = K, Me.isValidElementType = T, Me.typeOf = u;
  }()), Me;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = To() : e.exports = Ao();
})(_o);
function Po(e) {
  function r(Y, H, J, te, $) {
    for (var j = 0, S = 0, V = 0, Z = 0, B, m, K = 0, _ = 0, W, ne = W = B = 0, Q = 0, ae = 0, ge = 0, ue = 0, we = J.length, Ee = we - 1, Se, se = "", me = "", Ae = "", he = "", ve; Q < we; ) {
      if (m = J.charCodeAt(Q), Q === Ee && S + Z + V + j !== 0 && (S !== 0 && (m = S === 47 ? 10 : 47), Z = V = j = 0, we++, Ee++), S + Z + V + j === 0) {
        if (Q === Ee && (0 < ae && (se = se.replace(y, "")), 0 < se.trim().length)) {
          switch (m) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += J.charAt(Q);
          }
          m = 59;
        }
        switch (m) {
          case 123:
            for (se = se.trim(), B = se.charCodeAt(0), W = 1, ue = ++Q; Q < we; ) {
              switch (m = J.charCodeAt(Q)) {
                case 123:
                  W++;
                  break;
                case 125:
                  W--;
                  break;
                case 47:
                  switch (m = J.charCodeAt(Q + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = Q + 1; ne < Ee; ++ne)
                          switch (J.charCodeAt(ne)) {
                            case 47:
                              if (m === 42 && J.charCodeAt(ne - 1) === 42 && Q + 2 !== ne) {
                                Q = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (m === 47) {
                                Q = ne + 1;
                                break e;
                              }
                          }
                        Q = ne;
                      }
                  }
                  break;
                case 91:
                  m++;
                case 40:
                  m++;
                case 34:
                case 39:
                  for (; Q++ < Ee && J.charCodeAt(Q) !== m; )
                    ;
              }
              if (W === 0)
                break;
              Q++;
            }
            switch (W = J.substring(ue, Q), B === 0 && (B = (se = se.replace(f, "").trim()).charCodeAt(0)), B) {
              case 64:
                switch (0 < ae && (se = se.replace(y, "")), m = se.charCodeAt(1), m) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ae = H;
                    break;
                  default:
                    ae = N;
                }
                if (W = r(H, ae, W, m, $ + 1), ue = W.length, 0 < X && (ae = t(N, se, ge), ve = c(3, W, ae, H, O, q, ue, m, $, te), se = ae.join(""), ve !== void 0 && (ue = (W = ve.trim()).length) === 0 && (m = 0, W = "")), 0 < ue)
                  switch (m) {
                    case 115:
                      se = se.replace(g, i);
                    case 100:
                    case 109:
                    case 45:
                      W = se + "{" + W + "}";
                      break;
                    case 107:
                      se = se.replace(G, "$1 $2"), W = se + "{" + W + "}", W = P === 1 || P === 2 && s("@" + W, 3) ? "@-webkit-" + W + "@" + W : "@" + W;
                      break;
                    default:
                      W = se + W, te === 112 && (W = (me += W, ""));
                  }
                else
                  W = "";
                break;
              default:
                W = r(H, t(H, se, ge), W, te, $ + 1);
            }
            Ae += W, W = ge = ae = ne = B = 0, se = "", m = J.charCodeAt(++Q);
            break;
          case 125:
          case 59:
            if (se = (0 < ae ? se.replace(y, "") : se).trim(), 1 < (ue = se.length))
              switch (ne === 0 && (B = se.charCodeAt(0), B === 45 || 96 < B && 123 > B) && (ue = (se = se.replace(" ", ":")).length), 0 < X && (ve = c(1, se, H, Y, O, q, me.length, te, $, te)) !== void 0 && (ue = (se = ve.trim()).length) === 0 && (se = "\0\0"), B = se.charCodeAt(0), m = se.charCodeAt(1), B) {
                case 0:
                  break;
                case 64:
                  if (m === 105 || m === 99) {
                    he += se + J.charAt(Q);
                    break;
                  }
                default:
                  se.charCodeAt(ue - 1) !== 58 && (me += o(se, B, m, se.charCodeAt(2)));
              }
            ge = ae = ne = B = 0, se = "", m = J.charCodeAt(++Q);
        }
      }
      switch (m) {
        case 13:
        case 10:
          S === 47 ? S = 0 : 1 + B === 0 && te !== 107 && 0 < se.length && (ae = 1, se += "\0"), 0 < X * ee && c(0, se, H, Y, O, q, me.length, te, $, te), q = 1, O++;
          break;
        case 59:
        case 125:
          if (S + Z + V + j === 0) {
            q++;
            break;
          }
        default:
          switch (q++, Se = J.charAt(Q), m) {
            case 9:
            case 32:
              if (Z + j + S === 0)
                switch (K) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Se = "";
                    break;
                  default:
                    m !== 32 && (Se = " ");
                }
              break;
            case 0:
              Se = "\\0";
              break;
            case 12:
              Se = "\\f";
              break;
            case 11:
              Se = "\\v";
              break;
            case 38:
              Z + S + j === 0 && (ae = ge = 1, Se = "\f" + Se);
              break;
            case 108:
              if (Z + S + j + M === 0 && 0 < ne)
                switch (Q - ne) {
                  case 2:
                    K === 112 && J.charCodeAt(Q - 3) === 58 && (M = K);
                  case 8:
                    _ === 111 && (M = _);
                }
              break;
            case 58:
              Z + S + j === 0 && (ne = Q);
              break;
            case 44:
              S + V + Z + j === 0 && (ae = 1, Se += "\r");
              break;
            case 34:
            case 39:
              S === 0 && (Z = Z === m ? 0 : Z === 0 ? m : Z);
              break;
            case 91:
              Z + S + V === 0 && j++;
              break;
            case 93:
              Z + S + V === 0 && j--;
              break;
            case 41:
              Z + S + j === 0 && V--;
              break;
            case 40:
              if (Z + S + j === 0) {
                if (B === 0)
                  switch (2 * K + 3 * _) {
                    case 533:
                      break;
                    default:
                      B = 1;
                  }
                V++;
              }
              break;
            case 64:
              S + V + Z + j + ne + W === 0 && (W = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Z + j + V))
                switch (S) {
                  case 0:
                    switch (2 * m + 3 * J.charCodeAt(Q + 1)) {
                      case 235:
                        S = 47;
                        break;
                      case 220:
                        ue = Q, S = 42;
                    }
                    break;
                  case 42:
                    m === 47 && K === 42 && ue + 2 !== Q && (J.charCodeAt(ue + 2) === 33 && (me += J.substring(ue, Q + 1)), Se = "", S = 0);
                }
          }
          S === 0 && (se += Se);
      }
      _ = K, K = m, Q++;
    }
    if (ue = me.length, 0 < ue) {
      if (ae = H, 0 < X && (ve = c(2, me, ae, Y, O, q, ue, te, $, te), ve !== void 0 && (me = ve).length === 0))
        return he + me + Ae;
      if (me = ae.join(",") + "{" + me + "}", P * M !== 0) {
        switch (P !== 2 || s(me, 2) || (M = 0), M) {
          case 111:
            me = me.replace(T, ":-moz-$1") + me;
            break;
          case 112:
            me = me.replace(L, "::-webkit-input-$1") + me.replace(L, "::-moz-$1") + me.replace(L, ":-ms-input-$1") + me;
        }
        M = 0;
      }
    }
    return he + me + Ae;
  }
  function t(Y, H, J) {
    var te = H.trim().split(p);
    H = te;
    var $ = te.length, j = Y.length;
    switch (j) {
      case 0:
      case 1:
        var S = 0;
        for (Y = j === 0 ? "" : Y[0] + " "; S < $; ++S)
          H[S] = n(Y, H[S], J).trim();
        break;
      default:
        var V = S = 0;
        for (H = []; S < $; ++S)
          for (var Z = 0; Z < j; ++Z)
            H[V++] = n(Y[Z] + " ", te[S], J).trim();
    }
    return H;
  }
  function n(Y, H, J) {
    var te = H.charCodeAt(0);
    switch (33 > te && (te = (H = H.trim()).charCodeAt(0)), te) {
      case 38:
        return H.replace(R, "$1" + Y.trim());
      case 58:
        return Y.trim() + H.replace(R, "$1" + Y.trim());
      default:
        if (0 < 1 * J && 0 < H.indexOf("\f"))
          return H.replace(R, (Y.charCodeAt(0) === 58 ? "" : "$1") + Y.trim());
    }
    return Y + H;
  }
  function o(Y, H, J, te) {
    var $ = Y + ";", j = 2 * H + 3 * J + 4 * te;
    if (j === 944) {
      Y = $.indexOf(":", 9) + 1;
      var S = $.substring(Y, $.length - 1).trim();
      return S = $.substring(0, Y).trim() + S + ";", P === 1 || P === 2 && s(S, 1) ? "-webkit-" + S + S : S;
    }
    if (P === 0 || P === 2 && !s($, 1))
      return $;
    switch (j) {
      case 1015:
        return $.charCodeAt(10) === 97 ? "-webkit-" + $ + $ : $;
      case 951:
        return $.charCodeAt(3) === 116 ? "-webkit-" + $ + $ : $;
      case 963:
        return $.charCodeAt(5) === 110 ? "-webkit-" + $ + $ : $;
      case 1009:
        if ($.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + $ + $;
      case 978:
        return "-webkit-" + $ + "-moz-" + $ + $;
      case 1019:
      case 983:
        return "-webkit-" + $ + "-moz-" + $ + "-ms-" + $ + $;
      case 883:
        if ($.charCodeAt(8) === 45)
          return "-webkit-" + $ + $;
        if (0 < $.indexOf("image-set(", 11))
          return $.replace(z, "$1-webkit-$2") + $;
        break;
      case 932:
        if ($.charCodeAt(4) === 45)
          switch ($.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + $.replace("-grow", "") + "-webkit-" + $ + "-ms-" + $.replace("grow", "positive") + $;
            case 115:
              return "-webkit-" + $ + "-ms-" + $.replace("shrink", "negative") + $;
            case 98:
              return "-webkit-" + $ + "-ms-" + $.replace("basis", "preferred-size") + $;
          }
        return "-webkit-" + $ + "-ms-" + $ + $;
      case 964:
        return "-webkit-" + $ + "-ms-flex-" + $ + $;
      case 1023:
        if ($.charCodeAt(8) !== 99)
          break;
        return S = $.substring($.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + S + "-webkit-" + $ + "-ms-flex-pack" + S + $;
      case 1005:
        return v.test($) ? $.replace(C, ":-webkit-") + $.replace(C, ":-moz-") + $ : $;
      case 1e3:
        switch (S = $.substring(13).trim(), H = S.indexOf("-") + 1, S.charCodeAt(0) + S.charCodeAt(H)) {
          case 226:
            S = $.replace(u, "tb");
            break;
          case 232:
            S = $.replace(u, "tb-rl");
            break;
          case 220:
            S = $.replace(u, "lr");
            break;
          default:
            return $;
        }
        return "-webkit-" + $ + "-ms-" + S + $;
      case 1017:
        if ($.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (H = ($ = Y).length - 10, S = ($.charCodeAt(H) === 33 ? $.substring(0, H) : $).substring(Y.indexOf(":", 7) + 1).trim(), j = S.charCodeAt(0) + (S.charCodeAt(7) | 0)) {
          case 203:
            if (111 > S.charCodeAt(8))
              break;
          case 115:
            $ = $.replace(S, "-webkit-" + S) + ";" + $;
            break;
          case 207:
          case 102:
            $ = $.replace(S, "-webkit-" + (102 < j ? "inline-" : "") + "box") + ";" + $.replace(S, "-webkit-" + S) + ";" + $.replace(S, "-ms-" + S + "box") + ";" + $;
        }
        return $ + ";";
      case 938:
        if ($.charCodeAt(5) === 45)
          switch ($.charCodeAt(6)) {
            case 105:
              return S = $.replace("-items", ""), "-webkit-" + $ + "-webkit-box-" + S + "-ms-flex-" + S + $;
            case 115:
              return "-webkit-" + $ + "-ms-flex-item-" + $.replace(E, "") + $;
            default:
              return "-webkit-" + $ + "-ms-flex-line-pack" + $.replace("align-content", "").replace(E, "") + $;
          }
        break;
      case 973:
      case 989:
        if ($.charCodeAt(3) !== 45 || $.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (D.test(Y) === !0)
          return (S = Y.substring(Y.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(Y.replace("stretch", "fill-available"), H, J, te).replace(":fill-available", ":stretch") : $.replace(S, "-webkit-" + S) + $.replace(S, "-moz-" + S.replace("fill-", "")) + $;
        break;
      case 962:
        if ($ = "-webkit-" + $ + ($.charCodeAt(5) === 102 ? "-ms-" + $ : "") + $, J + te === 211 && $.charCodeAt(13) === 105 && 0 < $.indexOf("transform", 10))
          return $.substring(0, $.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + $;
    }
    return $;
  }
  function s(Y, H) {
    var J = Y.indexOf(H === 1 ? ":" : "{"), te = Y.substring(0, H !== 3 ? J : 10);
    return J = Y.substring(J + 1, Y.length - 1), U(H !== 2 ? te : te.replace(b, "$1"), J, H);
  }
  function i(Y, H) {
    var J = o(H, H.charCodeAt(0), H.charCodeAt(1), H.charCodeAt(2));
    return J !== H + ";" ? J.replace(w, " or ($1)").substring(4) : "(" + H + ")";
  }
  function c(Y, H, J, te, $, j, S, V, Z, B) {
    for (var m = 0, K = H, _; m < X; ++m)
      switch (_ = I[m].call(d, Y, K, J, te, $, j, S, V, Z, B)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          K = _;
      }
    if (K !== H)
      return K;
  }
  function l(Y) {
    switch (Y) {
      case void 0:
      case null:
        X = I.length = 0;
        break;
      default:
        if (typeof Y == "function")
          I[X++] = Y;
        else if (typeof Y == "object")
          for (var H = 0, J = Y.length; H < J; ++H)
            l(Y[H]);
        else
          ee = !!Y | 0;
    }
    return l;
  }
  function a(Y) {
    return Y = Y.prefix, Y !== void 0 && (U = null, Y ? typeof Y != "function" ? P = 1 : (P = 2, U = Y) : P = 0), a;
  }
  function d(Y, H) {
    var J = Y;
    if (33 > J.charCodeAt(0) && (J = J.trim()), re = J, J = [re], 0 < X) {
      var te = c(-1, H, J, J, O, q, 0, 0, 0, 0);
      te !== void 0 && typeof te == "string" && (H = te);
    }
    var $ = r(N, J, H, 0, 0);
    return 0 < X && (te = c(-2, $, J, J, O, q, $.length, 0, 0, 0), te !== void 0 && ($ = te)), re = "", M = 0, q = O = 1, $;
  }
  var f = /^\0+/g, y = /[\0\r\f]/g, C = /: */g, v = /zoo|gra/, k = /([,: ])(transform)/g, p = /,\r+?/g, R = /([\t\r\n ])*\f?&/g, G = /@(k\w+)\s*(\S*)\s*/, L = /::(place)/g, T = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, g = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, E = /-self|flex-/g, b = /[^]*?(:[rp][el]a[\w-]+)[^]*/, D = /stretch|:\s*\w+\-(?:conte|avail)/, z = /([^-])(image-set\()/, q = 1, O = 1, M = 0, P = 1, N = [], I = [], X = 0, U = null, ee = 0, re = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var Oo = {
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
function Io(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Yo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Xn = /* @__PURE__ */ Io(
  function(e) {
    return Yo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), an = {}, Ro = {
  get exports() {
    return an;
  },
  set exports(e) {
    an = e;
  }
}, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function Lo() {
  if (Un)
    return ke;
  Un = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
  function L(u) {
    if (typeof u == "object" && u !== null) {
      var g = u.$$typeof;
      switch (g) {
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
                case v:
                case C:
                case i:
                  return u;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  function T(u) {
    return L(u) === a;
  }
  return ke.AsyncMode = l, ke.ConcurrentMode = a, ke.ContextConsumer = c, ke.ContextProvider = i, ke.Element = r, ke.ForwardRef = d, ke.Fragment = n, ke.Lazy = v, ke.Memo = C, ke.Portal = t, ke.Profiler = s, ke.StrictMode = o, ke.Suspense = f, ke.isAsyncMode = function(u) {
    return T(u) || L(u) === l;
  }, ke.isConcurrentMode = T, ke.isContextConsumer = function(u) {
    return L(u) === c;
  }, ke.isContextProvider = function(u) {
    return L(u) === i;
  }, ke.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === r;
  }, ke.isForwardRef = function(u) {
    return L(u) === d;
  }, ke.isFragment = function(u) {
    return L(u) === n;
  }, ke.isLazy = function(u) {
    return L(u) === v;
  }, ke.isMemo = function(u) {
    return L(u) === C;
  }, ke.isPortal = function(u) {
    return L(u) === t;
  }, ke.isProfiler = function(u) {
    return L(u) === s;
  }, ke.isStrictMode = function(u) {
    return L(u) === o;
  }, ke.isSuspense = function(u) {
    return L(u) === f;
  }, ke.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === a || u === s || u === o || u === f || u === y || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === C || u.$$typeof === i || u.$$typeof === c || u.$$typeof === d || u.$$typeof === p || u.$$typeof === R || u.$$typeof === G || u.$$typeof === k);
  }, ke.typeOf = L, ke;
}
var $e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function No() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
    function L(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === a || m === s || m === o || m === f || m === y || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === C || m.$$typeof === i || m.$$typeof === c || m.$$typeof === d || m.$$typeof === p || m.$$typeof === R || m.$$typeof === G || m.$$typeof === k);
    }
    function T(m) {
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
                var W = _ && _.$$typeof;
                switch (W) {
                  case c:
                  case d:
                  case v:
                  case C:
                  case i:
                    return W;
                  default:
                    return K;
                }
            }
          case t:
            return K;
        }
      }
    }
    var u = l, g = a, w = c, E = i, b = r, D = d, z = n, q = v, O = C, M = t, P = s, N = o, I = f, X = !1;
    function U(m) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ee(m) || T(m) === l;
    }
    function ee(m) {
      return T(m) === a;
    }
    function re(m) {
      return T(m) === c;
    }
    function Y(m) {
      return T(m) === i;
    }
    function H(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function J(m) {
      return T(m) === d;
    }
    function te(m) {
      return T(m) === n;
    }
    function $(m) {
      return T(m) === v;
    }
    function j(m) {
      return T(m) === C;
    }
    function S(m) {
      return T(m) === t;
    }
    function V(m) {
      return T(m) === s;
    }
    function Z(m) {
      return T(m) === o;
    }
    function B(m) {
      return T(m) === f;
    }
    $e.AsyncMode = u, $e.ConcurrentMode = g, $e.ContextConsumer = w, $e.ContextProvider = E, $e.Element = b, $e.ForwardRef = D, $e.Fragment = z, $e.Lazy = q, $e.Memo = O, $e.Portal = M, $e.Profiler = P, $e.StrictMode = N, $e.Suspense = I, $e.isAsyncMode = U, $e.isConcurrentMode = ee, $e.isContextConsumer = re, $e.isContextProvider = Y, $e.isElement = H, $e.isForwardRef = J, $e.isFragment = te, $e.isLazy = $, $e.isMemo = j, $e.isPortal = S, $e.isProfiler = V, $e.isStrictMode = Z, $e.isSuspense = B, $e.isValidElementType = L, $e.typeOf = T;
  }()), $e;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Lo() : e.exports = No();
})(Ro);
var On = an, Bo = {
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
}, Ho = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, zo = {
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
In[On.ForwardRef] = zo;
In[On.Memo] = Gr;
function Jn(e) {
  return On.isMemo(e) ? Gr : In[e.$$typeof] || Bo;
}
var Fo = Object.defineProperty, Wo = Object.getOwnPropertyNames, qn = Object.getOwnPropertySymbols, jo = Object.getOwnPropertyDescriptor, Zo = Object.getPrototypeOf, Qn = Object.prototype;
function Xr(e, r, t) {
  if (typeof r != "string") {
    if (Qn) {
      var n = Zo(r);
      n && n !== Qn && Xr(e, n, t);
    }
    var o = Wo(r);
    qn && (o = o.concat(qn(r)));
    for (var s = Jn(e), i = Jn(r), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!Ho[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = jo(r, l);
        try {
          Fo(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Vo = Xr;
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
var er = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, cn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ot.typeOf(e);
}, Vt = Object.freeze([]), tt = Object.freeze({});
function vt(e) {
  return typeof e == "function";
}
function ln(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Yn(e) {
  return e && typeof e.styledComponentId == "string";
}
var xt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Rn = typeof window < "u" && "HTMLElement" in window, Go = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Xo = {}, Uo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Ko() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ve(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Ko.apply(void 0, [Uo[e]].concat(t)).trim());
}
var Jo = function() {
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
        (i <<= 1) < 0 && Ve(16, "" + t);
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
}(), jt = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), Pt = 1, Bt = function(e) {
  if (jt.has(e))
    return jt.get(e);
  for (; Gt.has(Pt); )
    Pt++;
  var r = Pt++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ve(16, "" + r), jt.set(e, r), Gt.set(r, e), r;
}, qo = function(e) {
  return Gt.get(e);
}, Qo = function(e, r) {
  r >= Pt && (Pt = r + 1), jt.set(e, r), Gt.set(r, e);
}, es = "style[" + xt + '][data-styled-version="5.3.8"]', ts = new RegExp("^" + xt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ns = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, rs = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(ts);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (Qo(a, l), ns(e, a, c[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, os = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ur = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(xt))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(xt, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = os();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, ss = function() {
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
      Ve(17);
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
}(), is = function() {
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
}(), as = function() {
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
}(), tr = Rn, cs = { isServer: !Rn, useCSSOMInjection: !Go }, Xt = function() {
  function e(t, n, o) {
    t === void 0 && (t = tt), n === void 0 && (n = {}), this.options = Fe({}, cs, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Rn && tr && (tr = !1, function(s) {
      for (var i = document.querySelectorAll(es), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(xt) !== "active" && (rs(s, a), a.parentNode && a.parentNode.removeChild(a));
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
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new as(i) : s ? new ss(i) : new is(i), new Jo(t)));
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
        var c = qo(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var d = xt + ".g" + i + '[id="' + c + '"]', f = "";
            l !== void 0 && l.forEach(function(y) {
              y.length > 0 && (f += y + ",");
            }), s += "" + a + d + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ls = /(a)(d)/gi, nr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function dn(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = nr(r % 52) + t;
  return (nr(r % 52) + t).replace(ls, "$1-$2");
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
    if (vt(t) && !Yn(t))
      return !1;
  }
  return !0;
}
var ds = Kr("5.3.8"), us = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Jr(r), this.componentId = t, this.baseHash = st(ds, t), this.baseStyle = n, Xt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ct(this.rules, r, t, n).join(""), c = dn(st(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = st(this.baseHash, n.hash), f = "", y = 0; y < a; y++) {
        var C = this.rules[y];
        if (typeof C == "string")
          f += C, process.env.NODE_ENV !== "production" && (d = st(d, C + y));
        else if (C) {
          var v = ct(C, r, t, n), k = Array.isArray(v) ? v.join("") : v;
          d = st(d, k + y), f += k;
        }
      }
      if (f) {
        var p = dn(d >>> 0);
        if (!t.hasNameForId(o, p)) {
          var R = n(f, "." + p, void 0, o);
          t.insertRules(o, p, R);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), fs = /^\s*\/\/.*$/gm, hs = [":", "[", ".", "#"];
function ps(e) {
  var r, t, n, o, s = e === void 0 ? tt : e, i = s.options, c = i === void 0 ? tt : i, l = s.plugins, a = l === void 0 ? Vt : l, d = new Po(c), f = [], y = function(k) {
    function p(R) {
      if (R)
        try {
          k(R + "}");
        } catch {
        }
    }
    return function(R, G, L, T, u, g, w, E, b, D) {
      switch (R) {
        case 1:
          if (b === 0 && G.charCodeAt(0) === 64)
            return k(G + ";"), "";
          break;
        case 2:
          if (E === 0)
            return G + "/*|*/";
          break;
        case 3:
          switch (E) {
            case 102:
            case 112:
              return k(L[0] + G), "";
            default:
              return G + (D === 0 ? "/*|*/" : "");
          }
        case -2:
          G.split("/*|*/}").forEach(p);
      }
    };
  }(function(k) {
    f.push(k);
  }), C = function(k, p, R) {
    return p === 0 && hs.indexOf(R[t.length]) !== -1 || R.match(o) ? k : "." + r;
  };
  function v(k, p, R, G) {
    G === void 0 && (G = "&");
    var L = k.replace(fs, ""), T = p && R ? R + " " + p + " { " + L + " }" : L;
    return r = G, t = p, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(R || !p ? "" : p, T);
  }
  return d.use([].concat(a, [function(k, p, R) {
    k === 2 && R.length && R[0].lastIndexOf(t) > 0 && (R[0] = R[0].replace(n, C));
  }, y, function(k) {
    if (k === -2) {
      var p = f;
      return f = [], p;
    }
  }])), v.hash = a.length ? a.reduce(function(k, p) {
    return p.name || Ve(15), st(k, p.name);
  }, 5381).toString() : "", v;
}
var qr = at.createContext();
qr.Consumer;
var Qr = at.createContext(), ms = (Qr.Consumer, new Xt()), un = ps();
function eo() {
  return nt(qr) || ms;
}
function to() {
  return nt(Qr) || un;
}
var no = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = un);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ve(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = un), this.name + r.hash;
  }, e;
}(), gs = /([A-Z])/, ys = /([A-Z])/g, vs = /^ms-/, xs = function(e) {
  return "-" + e.toLowerCase();
};
function rr(e) {
  return gs.test(e) ? e.replace(ys, xs).replace(vs, "-ms-") : e;
}
var or = function(e) {
  return e == null || e === !1 || e === "";
};
function ct(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = ct(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (or(e))
    return "";
  if (Yn(e))
    return "." + e.styledComponentId;
  if (vt(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && Ot.isElement(l) && console.warn(ln(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ct(l, r, t, n);
  }
  var a;
  return e instanceof no ? t ? (e.inject(t, n), e.getName(n)) : e : cn(e) ? function d(f, y) {
    var C, v, k = [];
    for (var p in f)
      f.hasOwnProperty(p) && !or(f[p]) && (Array.isArray(f[p]) && f[p].isCss || vt(f[p]) ? k.push(rr(p) + ":", f[p], ";") : cn(f[p]) ? k.push.apply(k, d(f[p], p)) : k.push(rr(p) + ": " + (C = p, (v = f[p]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || C in Oo ? String(v).trim() : v + "px") + ";"));
    return y ? [y + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var sr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Mt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return vt(e) || cn(e) ? sr(ct(er(Vt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : sr(ct(er(e, t)));
}
var ir = /invalid hook call/i, Ht = /* @__PURE__ */ new Set(), ro = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (ir.test(s))
          o = !1, Ht.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(c));
        }
      }, fe(), o && !Ht.has(t) && (console.warn(t), Ht.add(t));
    } catch (s) {
      ir.test(s.message) && Ht.delete(t);
    } finally {
      console.error = n;
    }
  }
}, oo = function(e, r, t) {
  return t === void 0 && (t = tt), e.theme !== t.theme && e.theme || r || t.theme;
}, bs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ws = /(^-|-$)/g;
function en(e) {
  return e.replace(bs, "-").replace(ws, "");
}
var Ln = function(e) {
  return dn(Kr(e) >>> 0);
};
function zt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var fn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ss = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Cs(e, r, t) {
  var n = e[t];
  fn(r) && fn(n) ? so(n, r) : e[t] = r;
}
function so(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (fn(i))
      for (var c in i)
        Ss(c) && Cs(e, i[c], c);
  }
  return e;
}
var bt = at.createContext();
bt.Consumer;
function Ms(e) {
  var r = nt(bt), t = De(function() {
    return function(n, o) {
      if (!n)
        return Ve(14);
      if (vt(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ve(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Ve(8) : o ? Fe({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? at.createElement(bt.Provider, { value: t }, e.children) : null;
}
var tn = {};
function io(e, r, t) {
  var n = Yn(e), o = !zt(e), s = r.attrs, i = s === void 0 ? Vt : s, c = r.componentId, l = c === void 0 ? function(G, L) {
    var T = typeof G != "string" ? "sc" : en(G);
    tn[T] = (tn[T] || 0) + 1;
    var u = T + "-" + Ln("5.3.8" + T + tn[T]);
    return L ? L + "-" + u : u;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(G) {
    return zt(G) ? "styled." + G : "Styled(" + ln(G) + ")";
  }(e) : a, f = r.displayName && r.componentId ? en(r.displayName) + "-" + r.componentId : r.componentId || l, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, C = r.shouldForwardProp;
  n && e.shouldForwardProp && (C = r.shouldForwardProp ? function(G, L, T) {
    return e.shouldForwardProp(G, L, T) && r.shouldForwardProp(G, L, T);
  } : e.shouldForwardProp);
  var v, k = new us(t, f, n ? e.componentStyle : void 0), p = k.isStatic && i.length === 0, R = function(G, L) {
    return function(T, u, g, w) {
      var E = T.attrs, b = T.componentStyle, D = T.defaultProps, z = T.foldedComponentIds, q = T.shouldForwardProp, O = T.styledComponentId, M = T.target;
      process.env.NODE_ENV !== "production" && Zn(O);
      var P = function(te, $, j) {
        te === void 0 && (te = tt);
        var S = Fe({}, $, { theme: te }), V = {};
        return j.forEach(function(Z) {
          var B, m, K, _ = Z;
          for (B in vt(_) && (_ = _(S)), _)
            S[B] = V[B] = B === "className" ? (m = V[B], K = _[B], m && K ? m + " " + K : m || K) : _[B];
        }), [S, V];
      }(oo(u, nt(bt), D) || tt, u, E), N = P[0], I = P[1], X = function(te, $, j, S) {
        var V = eo(), Z = to(), B = $ ? te.generateAndInjectStyles(tt, V, Z) : te.generateAndInjectStyles(j, V, Z);
        return process.env.NODE_ENV !== "production" && Zn(B), process.env.NODE_ENV !== "production" && !$ && S && S(B), B;
      }(b, w, N, process.env.NODE_ENV !== "production" ? T.warnTooManyClasses : void 0), U = g, ee = I.$as || u.$as || I.as || u.as || M, re = zt(ee), Y = I !== u ? Fe({}, u, {}, I) : u, H = {};
      for (var J in Y)
        J[0] !== "$" && J !== "as" && (J === "forwardedAs" ? H.as = Y[J] : (q ? q(J, Xn, ee) : !re || Xn(J)) && (H[J] = Y[J]));
      return u.style && I.style !== u.style && (H.style = Fe({}, u.style, {}, I.style)), H.className = Array.prototype.concat(z, O, X !== O ? X : null, u.className, I.className).filter(Boolean).join(" "), H.ref = U, Do(ee, H);
    }(v, G, L, p);
  };
  return R.displayName = d, (v = at.forwardRef(R)).attrs = y, v.componentStyle = k, v.displayName = d, v.shouldForwardProp = C, v.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Vt, v.styledComponentId = f, v.target = n ? e.target : e, v.withComponent = function(G) {
    var L = r.componentId, T = function(g, w) {
      if (g == null)
        return {};
      var E, b, D = {}, z = Object.keys(g);
      for (b = 0; b < z.length; b++)
        E = z[b], w.indexOf(E) >= 0 || (D[E] = g[E]);
      return D;
    }(r, ["componentId"]), u = L && L + "-" + (zt(G) ? G : en(ln(G)));
    return io(G, Fe({}, T, { attrs: y, componentId: u }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(G) {
    this._foldedDefaultProps = n ? so({}, e.defaultProps, G) : G;
  } }), process.env.NODE_ENV !== "production" && (ro(d, f), v.warnTooManyClasses = function(G, L) {
    var T = {}, u = !1;
    return function(g) {
      if (!u && (T[g] = !0, Object.keys(T).length >= 200)) {
        var w = L ? ' with the id of "' + L + '"' : "";
        console.warn("Over 200 classes were generated for component " + G + w + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, T = {};
      }
    };
  }(d, f)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && Vo(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var hn = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = tt), !Ot.isValidElementType(n))
      return Ve(1, String(n));
    var s = function() {
      return t(n, o, Mt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Fe({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Fe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(io, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  hn[e] = hn(e);
});
var ks = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Jr(t), Xt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(ct(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && Xt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function $s(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Mt.apply(void 0, [e].concat(t)), s = "sc-global-" + Ln(JSON.stringify(o)), i = new ks(o, s);
  function c(a) {
    var d = eo(), f = to(), y = nt(bt), C = fe(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && at.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(C, a, d, y, f), Jt(function() {
      if (!d.server)
        return l(C, a, d, y, f), function() {
          return i.removeStyles(C, d);
        };
    }, [C, a, d, y, f]), null;
  }
  function l(a, d, f, y, C) {
    if (i.isStatic)
      i.renderStyles(a, Xo, f, C);
    else {
      var v = Fe({}, d, { theme: oo(d, y, c.defaultProps) });
      i.renderStyles(a, v, f, C);
    }
  }
  return process.env.NODE_ENV !== "production" && ro(s), at.memo(c);
}
function Xe(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Mt.apply(void 0, [e].concat(t)).join(""), s = Ln(o);
  return new no(s, o);
}
var qt = function() {
  return nt(bt);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const x = hn, At = "reactSchedulerOutsideWrapper", ze = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", Ds = $s`

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
`, Es = {
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
}, _s = {
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
x.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Te = 50, Ue = 24, Dt = 16, it = 40, wt = it + Dt + Ue, St = 84, ye = 56, Le = 196, Be = 12, Ye = 50, Ct = 24, It = 16, pn = 40, Ts = Ct + It + pn, ar = 24, cr = 52, We = {
  topRow: `600 14px ${ze}`,
  middleRow: `400 10px ${ze}`,
  bottomRow: {
    name: `600 14px ${ze}`,
    number: `600 10px ${ze}`,
    hoursInDay: `400 9px ${ze}`
  }
}, yt = 3, As = 1.6, Ps = 4.5, mn = 12, Ut = 24, Os = "reactSchedulerCanvasHeaderWrapper", ao = "reactSchedulerCanvasWrapper", Ge = At, Is = 4, Nn = 48, et = 5, Ys = 40, lr = 8, Bn = Ue / 2 + 2, co = Dt / 2 + Ue + 1, dr = 2, Pe = 60, Ne = 21, lo = 58, uo = "reactSchedulerBody";
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
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", f = "month", y = "quarter", C = "year", v = "date", k = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, R = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, G = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var M = ["th", "st", "nd", "rd"], P = O % 100;
      return "[" + O + (M[(P - 20) % 10] || M[P] || M[0]) + "]";
    } }, L = function(O, M, P) {
      var N = String(O);
      return !N || N.length >= M ? O : "" + Array(M + 1 - N.length).join(P) + O;
    }, T = { s: L, z: function(O) {
      var M = -O.utcOffset(), P = Math.abs(M), N = Math.floor(P / 60), I = P % 60;
      return (M <= 0 ? "+" : "-") + L(N, 2, "0") + ":" + L(I, 2, "0");
    }, m: function O(M, P) {
      if (M.date() < P.date())
        return -O(P, M);
      var N = 12 * (P.year() - M.year()) + (P.month() - M.month()), I = M.clone().add(N, f), X = P - I < 0, U = M.clone().add(N + (X ? -1 : 1), f);
      return +(-(N + (P - I) / (X ? I - U : U - I)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: f, y: C, w: d, d: a, D: v, h: l, m: c, s: i, ms: s, Q: y }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, u = "en", g = {};
    g[u] = G;
    var w = function(O) {
      return O instanceof z;
    }, E = function O(M, P, N) {
      var I;
      if (!M)
        return u;
      if (typeof M == "string") {
        var X = M.toLowerCase();
        g[X] && (I = X), P && (g[X] = P, I = X);
        var U = M.split("-");
        if (!I && U.length > 1)
          return O(U[0]);
      } else {
        var ee = M.name;
        g[ee] = M, I = ee;
      }
      return !N && I && (u = I), I || !N && u;
    }, b = function(O, M) {
      if (w(O))
        return O.clone();
      var P = typeof M == "object" ? M : {};
      return P.date = O, P.args = arguments, new z(P);
    }, D = T;
    D.l = E, D.i = w, D.w = function(O, M) {
      return b(O, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var z = function() {
      function O(P) {
        this.$L = E(P.locale, null, !0), this.parse(P);
      }
      var M = O.prototype;
      return M.parse = function(P) {
        this.$d = function(N) {
          var I = N.date, X = N.utc;
          if (I === null)
            return new Date(NaN);
          if (D.u(I))
            return new Date();
          if (I instanceof Date)
            return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var U = I.match(p);
            if (U) {
              var ee = U[2] - 1 || 0, re = (U[7] || "0").substring(0, 3);
              return X ? new Date(Date.UTC(U[1], ee, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, re)) : new Date(U[1], ee, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, re);
            }
          }
          return new Date(I);
        }(P), this.$x = P.x || {}, this.init();
      }, M.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, M.$utils = function() {
        return D;
      }, M.isValid = function() {
        return this.$d.toString() !== k;
      }, M.isSame = function(P, N) {
        var I = b(P);
        return this.startOf(N) <= I && I <= this.endOf(N);
      }, M.isAfter = function(P, N) {
        return b(P) < this.startOf(N);
      }, M.isBefore = function(P, N) {
        return this.endOf(N) < b(P);
      }, M.$g = function(P, N, I) {
        return D.u(P) ? this[N] : this.set(I, P);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(P, N) {
        var I = this, X = !!D.u(N) || N, U = D.p(P), ee = function(S, V) {
          var Z = D.w(I.$u ? Date.UTC(I.$y, V, S) : new Date(I.$y, V, S), I);
          return X ? Z : Z.endOf(a);
        }, re = function(S, V) {
          return D.w(I.toDate()[S].apply(I.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), I);
        }, Y = this.$W, H = this.$M, J = this.$D, te = "set" + (this.$u ? "UTC" : "");
        switch (U) {
          case C:
            return X ? ee(1, 0) : ee(31, 11);
          case f:
            return X ? ee(1, H) : ee(0, H + 1);
          case d:
            var $ = this.$locale().weekStart || 0, j = (Y < $ ? Y + 7 : Y) - $;
            return ee(X ? J - j : J + (6 - j), H);
          case a:
          case v:
            return re(te + "Hours", 0);
          case l:
            return re(te + "Minutes", 1);
          case c:
            return re(te + "Seconds", 2);
          case i:
            return re(te + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(P) {
        return this.startOf(P, !1);
      }, M.$set = function(P, N) {
        var I, X = D.p(P), U = "set" + (this.$u ? "UTC" : ""), ee = (I = {}, I[a] = U + "Date", I[v] = U + "Date", I[f] = U + "Month", I[C] = U + "FullYear", I[l] = U + "Hours", I[c] = U + "Minutes", I[i] = U + "Seconds", I[s] = U + "Milliseconds", I)[X], re = X === a ? this.$D + (N - this.$W) : N;
        if (X === f || X === C) {
          var Y = this.clone().set(v, 1);
          Y.$d[ee](re), Y.init(), this.$d = Y.set(v, Math.min(this.$D, Y.daysInMonth())).$d;
        } else
          ee && this.$d[ee](re);
        return this.init(), this;
      }, M.set = function(P, N) {
        return this.clone().$set(P, N);
      }, M.get = function(P) {
        return this[D.p(P)]();
      }, M.add = function(P, N) {
        var I, X = this;
        P = Number(P);
        var U = D.p(N), ee = function(H) {
          var J = b(X);
          return D.w(J.date(J.date() + Math.round(H * P)), X);
        };
        if (U === f)
          return this.set(f, this.$M + P);
        if (U === C)
          return this.set(C, this.$y + P);
        if (U === a)
          return ee(1);
        if (U === d)
          return ee(7);
        var re = (I = {}, I[c] = n, I[l] = o, I[i] = t, I)[U] || 1, Y = this.$d.getTime() + P * re;
        return D.w(Y, this);
      }, M.subtract = function(P, N) {
        return this.add(-1 * P, N);
      }, M.format = function(P) {
        var N = this, I = this.$locale();
        if (!this.isValid())
          return I.invalidDate || k;
        var X = P || "YYYY-MM-DDTHH:mm:ssZ", U = D.z(this), ee = this.$H, re = this.$m, Y = this.$M, H = I.weekdays, J = I.months, te = function(V, Z, B, m) {
          return V && (V[Z] || V(N, X)) || B[Z].slice(0, m);
        }, $ = function(V) {
          return D.s(ee % 12 || 12, V, "0");
        }, j = I.meridiem || function(V, Z, B) {
          var m = V < 12 ? "AM" : "PM";
          return B ? m.toLowerCase() : m;
        }, S = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: Y + 1, MM: D.s(Y + 1, 2, "0"), MMM: te(I.monthsShort, Y, J, 3), MMMM: te(J, Y), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: te(I.weekdaysMin, this.$W, H, 2), ddd: te(I.weekdaysShort, this.$W, H, 3), dddd: H[this.$W], H: String(ee), HH: D.s(ee, 2, "0"), h: $(1), hh: $(2), a: j(ee, re, !0), A: j(ee, re, !1), m: String(re), mm: D.s(re, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: U };
        return X.replace(R, function(V, Z) {
          return Z || S[V] || U.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(P, N, I) {
        var X, U = D.p(N), ee = b(P), re = (ee.utcOffset() - this.utcOffset()) * n, Y = this - ee, H = D.m(this, ee);
        return H = (X = {}, X[C] = H / 12, X[f] = H, X[y] = H / 3, X[d] = (Y - re) / 6048e5, X[a] = (Y - re) / 864e5, X[l] = Y / o, X[c] = Y / n, X[i] = Y / t, X)[U] || Y, I ? H : D.a(H);
      }, M.daysInMonth = function() {
        return this.endOf(f).$D;
      }, M.$locale = function() {
        return g[this.$L];
      }, M.locale = function(P, N) {
        if (!P)
          return this.$L;
        var I = this.clone(), X = E(P, N, !0);
        return X && (I.$L = X), I;
      }, M.clone = function() {
        return D.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), q = z.prototype;
    return b.prototype = q, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", f], ["$y", C], ["$D", v]].forEach(function(O) {
      q[O[1]] = function(M) {
        return this.$g(M, O[0], O[1]);
      };
    }), b.extend = function(O, M) {
      return O.$i || (O(M, z, b), O.$i = !0), b;
    }, b.locale = E, b.isDayjs = w, b.unix = function(O) {
      return b(1e3 * O);
    }, b.en = g[u], b.Ls = g, b.p = {}, b;
  });
})(Rs);
const A = lt, ur = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Hn = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, fo = (e, r) => A(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), ho = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Hn(e),
  isCurrentDay: e.isSame(A(), "day"),
  year: parseInt(e.format("YYYY"))
});
let Ft = null;
const Ls = (e) => {
  if (Ft)
    return Ft;
  const r = document.createElement("canvas");
  r.width = 12, r.height = 12;
  const t = r.getContext("2d");
  return t ? (t.strokeStyle = "rgba(120, 137, 127, 0.045)", t.lineWidth = 6, t.beginPath(), t.moveTo(-3, 15), t.lineTo(15, -3), t.stroke(), Ft = e.createPattern(r, "repeat"), Ft) : null;
}, zn = (e, r, t, n, o, s, i, c = !1) => {
  if (e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.currentDay : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, ye), c && !s) {
    const l = Ls(e);
    l && (e.fillStyle = l, e.fillRect(r, t, n, ye));
  }
  e.strokeRect(r + 0.5, t + 0.5, n, ye);
}, Fn = (e, r) => {
  let t = 0;
  for (const n of r)
    n <= e && t++;
  return t * Ne;
}, Ns = (e, r, t, n, o, s = []) => {
  for (let i = 0; i < r; i++) {
    const c = Fn(i, s);
    for (let l = 0; l <= t; l++) {
      const a = A(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        l,
        "days"
      ), d = a.isSame(A(), "day"), f = a.isBefore(A(), "day");
      zn(
        e,
        l * Te,
        i * ye + c,
        Te,
        Hn(a),
        d,
        o,
        f
      );
    }
  }
}, Bs = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Hs = (e, r, t, n, o, s = []) => {
  let i = 0, c = -(n.dayOfMonth - 1) * Be;
  const l = r * ye + s.length * Ne;
  for (let a = 0; a <= t; a++) {
    const f = A(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(A(), "week");
    for (let y = 0; y < r; y++) {
      const C = Fn(y, s);
      zn(e, i, y * ye + C, St, !0, f, o);
    }
    i += St;
  }
  for (let a = 0; a < t; a++) {
    const d = fo(n, a) * Be;
    Bs(e, c, l, o), c += d;
  }
}, zs = (e, r, t, n, o, s = []) => {
  const i = A(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let c = 0; c < r; c++) {
    const l = Fn(c, s);
    for (let a = 0; a <= t; a++) {
      let d;
      a === Math.floor(t / 2) ? d = A() : a > Math.floor(t / 2) ? d = A().add(a - Math.floor(t / 2), "hours") : d = A().subtract(Math.floor(t / 2) - c, "hours");
      const f = i.isSame(A(), "day") && d.isSame(A(), "hour");
      zn(
        e,
        a * Ye + Ye / 2 - 0.5,
        c * ye + l,
        Ye,
        Hn(d),
        f,
        o
      );
    }
  }
}, Fs = (e, r, t, n, o = !1) => {
  const s = t * ye + r * Ne, i = e.canvas.width;
  e.fillStyle = o ? n.colors.subcontractBorder + "40" : n.mode === "dark" ? n.colors.primary + "80" : n.colors.primary, e.fillRect(0, s, i, Ne);
}, Ws = (e, r, t, n, o, s, i = [], c = -1) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(ao)) {
    switch (r) {
      case 0:
        Hs(e, t, n, o, s, i);
        break;
      case 1:
        Ns(e, t, n, o, s, i);
        break;
      case 2:
        zs(e, t, n, o, s, i);
        break;
    }
    for (let a = 0; a < i.length; a++)
      Fs(e, a, i[a], s, i[a] === c);
  }
};
var gn = {}, js = {
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
  })(Ie, function() {
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
        var y = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), C = this.diff(y, t, !0);
        return C < 0 ? i(this).startOf("week").week() : Math.ceil(C);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(js);
const Zs = gn;
var yn = {}, Vs = {
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
  })(Ie, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Vs);
const Gs = yn;
var vn = {}, Xs = {
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
        var d, f, y, C, v = i(this), k = (d = this.isoWeekYear(), f = this.$u, y = (f ? s.utc : s)().year(d).startOf("year"), C = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (C += 7), y.add(C, t));
        return v.diff(k, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, d) {
        var f = this.$utils(), y = !!f.u(d) || d;
        return f.p(a) === "isoweek" ? y ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, d);
      };
    };
  });
})(Xs);
const Us = vn;
var xn = {}, Ks = {
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
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), d = o(i), f = (l = l || "()")[0] === "(", y = l[1] === ")";
        return (f ? this.isAfter(a, c) : !this.isBefore(a, c)) && (y ? this.isBefore(d, c) : !this.isAfter(d, c)) || (f ? this.isBefore(a, c) : !this.isAfter(a, c)) && (y ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(Ks);
const Js = xn;
var bn = {}, qs = {
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
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, C = function(u) {
      return u instanceof T;
    }, v = function(u, g, w) {
      return new T(u, w, g.$l);
    }, k = function(u) {
      return n.p(u) + "s";
    }, p = function(u) {
      return u < 0;
    }, R = function(u) {
      return p(u) ? Math.ceil(u) : Math.floor(u);
    }, G = function(u) {
      return Math.abs(u);
    }, L = function(u, g) {
      return u ? p(u) ? { negative: !0, format: "" + G(u) + g } : { negative: !1, format: "" + u + g } : { negative: !1, format: "" };
    }, T = function() {
      function u(w, E, b) {
        var D = this;
        if (this.$d = {}, this.$l = b, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E)
          return v(w * y[k(E)], this);
        if (typeof w == "number")
          return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object")
          return Object.keys(w).forEach(function(O) {
            D.$d[k(O)] = w[O];
          }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var z = w.match(f);
          if (z) {
            var q = z.slice(2).map(function(O) {
              return O != null ? Number(O) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var g = u.prototype;
      return g.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(E, b) {
          return E + (w.$d[b] || 0) * y[b];
        }, 0);
      }, g.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = R(w / a), w %= a, this.$d.months = R(w / d), w %= d, this.$d.days = R(w / c), w %= c, this.$d.hours = R(w / i), w %= i, this.$d.minutes = R(w / s), w %= s, this.$d.seconds = R(w / o), w %= o, this.$d.milliseconds = w;
      }, g.toISOString = function() {
        var w = L(this.$d.years, "Y"), E = L(this.$d.months, "M"), b = +this.$d.days || 0;
        this.$d.weeks && (b += 7 * this.$d.weeks);
        var D = L(b, "D"), z = L(this.$d.hours, "H"), q = L(this.$d.minutes, "M"), O = this.$d.seconds || 0;
        this.$d.milliseconds && (O += this.$d.milliseconds / 1e3);
        var M = L(O, "S"), P = w.negative || E.negative || D.negative || z.negative || q.negative || M.negative, N = z.format || q.format || M.format ? "T" : "", I = (P ? "-" : "") + "P" + w.format + E.format + D.format + N + z.format + q.format + M.format;
        return I === "P" || I === "-P" ? "P0D" : I;
      }, g.toJSON = function() {
        return this.toISOString();
      }, g.format = function(w) {
        var E = w || "YYYY-MM-DDTHH:mm:ss", b = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return E.replace(l, function(D, z) {
          return z || String(b[D]);
        });
      }, g.as = function(w) {
        return this.$ms / y[k(w)];
      }, g.get = function(w) {
        var E = this.$ms, b = k(w);
        return b === "milliseconds" ? E %= 1e3 : E = b === "weeks" ? R(E / y[b]) : this.$d[b], E === 0 ? 0 : E;
      }, g.add = function(w, E, b) {
        var D;
        return D = E ? w * y[k(E)] : C(w) ? w.$ms : v(w, this).$ms, v(this.$ms + D * (b ? -1 : 1), this);
      }, g.subtract = function(w, E) {
        return this.add(w, E, !0);
      }, g.locale = function(w) {
        var E = this.clone();
        return E.$l = w, E;
      }, g.clone = function() {
        return v(this.$ms, this);
      }, g.humanize = function(w) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, g.milliseconds = function() {
        return this.get("milliseconds");
      }, g.asMilliseconds = function() {
        return this.as("milliseconds");
      }, g.seconds = function() {
        return this.get("seconds");
      }, g.asSeconds = function() {
        return this.as("seconds");
      }, g.minutes = function() {
        return this.get("minutes");
      }, g.asMinutes = function() {
        return this.as("minutes");
      }, g.hours = function() {
        return this.get("hours");
      }, g.asHours = function() {
        return this.as("hours");
      }, g.days = function() {
        return this.get("days");
      }, g.asDays = function() {
        return this.as("days");
      }, g.weeks = function() {
        return this.get("weeks");
      }, g.asWeeks = function() {
        return this.as("weeks");
      }, g.months = function() {
        return this.get("months");
      }, g.asMonths = function() {
        return this.as("months");
      }, g.years = function() {
        return this.get("years");
      }, g.asYears = function() {
        return this.as("years");
      }, u;
    }();
    return function(u, g, w) {
      t = w, n = w().$utils(), w.duration = function(D, z) {
        var q = w.locale();
        return v(D, { $l: q }, z);
      }, w.isDuration = C;
      var E = g.prototype.add, b = g.prototype.subtract;
      g.prototype.add = function(D, z) {
        return C(D) && (D = D.asMilliseconds()), E.bind(this)(D, z);
      }, g.prototype.subtract = function(D, z) {
        return C(D) && (D = D.asMilliseconds()), b.bind(this)(D, z);
      };
    };
  });
})(qs);
const Qs = bn;
var ei = "Expected a function", fr = 0 / 0, ti = "[object Symbol]", ni = /^\s+|\s+$/g, ri = /^[-+]0x[0-9a-f]+$/i, oi = /^0b[01]+$/i, si = /^0o[0-7]+$/i, ii = parseInt, ai = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, ci = typeof self == "object" && self && self.Object === Object && self, li = ai || ci || Function("return this")(), di = Object.prototype, ui = di.toString, fi = Math.max, hi = Math.min, nn = function() {
  return li.Date.now();
};
function pi(e, r, t) {
  var n, o, s, i, c, l, a = 0, d = !1, f = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(ei);
  r = hr(r) || 0, wn(t) && (d = !!t.leading, f = "maxWait" in t, s = f ? fi(hr(t.maxWait) || 0, r) : s, y = "trailing" in t ? !!t.trailing : y);
  function C(g) {
    var w = n, E = o;
    return n = o = void 0, a = g, i = e.apply(E, w), i;
  }
  function v(g) {
    return a = g, c = setTimeout(R, r), d ? C(g) : i;
  }
  function k(g) {
    var w = g - l, E = g - a, b = r - w;
    return f ? hi(b, s - E) : b;
  }
  function p(g) {
    var w = g - l, E = g - a;
    return l === void 0 || w >= r || w < 0 || f && E >= s;
  }
  function R() {
    var g = nn();
    if (p(g))
      return G(g);
    c = setTimeout(R, k(g));
  }
  function G(g) {
    return c = void 0, y && n ? C(g) : (n = o = void 0, i);
  }
  function L() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function T() {
    return c === void 0 ? i : G(nn());
  }
  function u() {
    var g = nn(), w = p(g);
    if (n = arguments, o = this, l = g, w) {
      if (c === void 0)
        return v(l);
      if (f)
        return c = setTimeout(R, r), C(l);
    }
    return c === void 0 && (c = setTimeout(R, r)), i;
  }
  return u.cancel = L, u.flush = T, u;
}
function wn(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function mi(e) {
  return !!e && typeof e == "object";
}
function gi(e) {
  return typeof e == "symbol" || mi(e) && ui.call(e) == ti;
}
function hr(e) {
  if (typeof e == "number")
    return e;
  if (gi(e))
    return fr;
  if (wn(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wn(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ni, "");
  var t = oi.test(e);
  return t || si.test(e) ? ii(e.slice(2), t ? 2 : 8) : ri.test(e) ? fr : +e;
}
var Sn = pi;
const Zt = [0, 1, 2];
var Yt = /* @__PURE__ */ ((e) => (e[e.Tour = 0] = "Tour", e[e.Transfer = 1] = "Transfer", e))(Yt || {});
const po = (e) => Zt.includes(e), mt = (e) => {
  var n;
  const t = (((n = document.getElementById(Ge)) == null ? void 0 : n.clientWidth) || 0) - Le;
  switch (e) {
    case 1:
      return Math.ceil(t / Te) * yt;
    case 2:
      return Math.ceil(t / Ye) * yt;
    default:
      return Math.ceil(t / St) * yt;
  }
}, yi = (e) => mt(e) / yt, Qt = (e, r) => {
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
}, Wn = () => {
  var t;
  return ((((t = document.getElementById(Ge)) == null ? void 0 : t.clientWidth) || 0) - Le) * yt;
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
A.extend(Zs);
A.extend(Gs);
A.extend(Us);
A.extend(Js);
A.extend(Qs);
const xi = ({
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
  const { zoom: a, maxRecordsPerPage: d = 50 } = n, [f, y] = pe(a), [C, v] = pe(A()), [k, p] = pe(!1), [R, G] = pe(mt(f)), L = Zt[f] !== Zt[Zt.length - 1], T = f !== 0, u = De(() => vi(C, f), [C, f]), g = Qt(C, f).startDate, w = A(g).dayOfYear(), E = ho(g), b = fe(null), D = fe(!1), z = fe(null), [q, O] = pe([{ x: 0, y: 0 }]), M = le(
    (S, V = "auto") => {
      var B, m, K, _;
      const Z = Wn();
      switch (S) {
        case "back":
          return (B = b.current) == null ? void 0 : B.scrollTo({
            behavior: V,
            left: Z / 3
          });
        case "forward":
          return (m = b.current) == null ? void 0 : m.scrollTo({
            behavior: V,
            left: Z / 3
          });
        case "middle": {
          const W = Z / yt / 4;
          return (K = b.current) == null ? void 0 : K.scrollTo({
            behavior: V,
            left: Z / 2 - W
          });
        }
        default:
          return (_ = b.current) == null ? void 0 : _.scrollTo({
            behavior: V,
            left: Z / 2
          });
      }
    },
    []
  ), P = (S) => {
    O(S);
  }, N = le(
    (S) => {
      const V = yi(f);
      let Z;
      switch (f) {
        case 0:
          Z = V * 7;
          break;
        case 1:
          Z = V;
          break;
        case 2:
          Z = Math.ceil(V / Ut);
          break;
      }
      Sn(() => {
        switch ((S === "forward" || S === "back") && (D.current = !0), z.current = S, S) {
          case "back":
            v((m) => m.subtract(Z, "days"));
            break;
          case "forward":
            v((m) => m.add(Z, "days"));
            break;
          case "middle":
            v(A());
            break;
        }
        s == null || s(u);
      }, 300)();
    },
    [s, u, f]
  );
  be(() => {
    z.current && (M(z.current), z.current = null);
  }, [C, M]), be(() => {
    b.current = document.getElementById(Ge), G(mt(f));
  }, [f]), be(() => {
    const S = () => G(mt(f));
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [f]), be(() => {
    s == null || s(u);
  }, [s, u]), be(() => {
    p(!1);
  }, [o]), be(() => {
    k || (M("middle"), p(!0), v(o));
  }, [o, k, M]);
  const I = () => {
    t || (v(
      (S) => f === 2 ? S.add(ar, "hours") : S.add(dr, "weeks")
    ), s == null || s(u));
  }, X = le(() => {
    t || N("forward");
  }, [t, N]), U = () => {
    t || (v(
      (S) => f === 2 ? S.subtract(ar, "hours") : S.subtract(dr, "weeks")
    ), s == null || s(u));
  }, ee = le(() => {
    !k || t || N("back");
  }, [k, t, N]), re = le(() => {
    t || (z.current = "middle", v(A()), s == null || s(u));
  }, [t, s, u]), Y = le(
    (S) => {
      if (t)
        return;
      const V = A(S).startOf("day");
      V.isValid() && (z.current = "middle", v(V), s == null || s(u));
    },
    [t, s, u]
  ), H = () => te(f + 1), J = () => te(f - 1), te = (S) => {
    po(S) && (y(S), G(mt(S)), s == null || s(u));
  }, $ = () => i == null ? void 0 : i(), { Provider: j } = mo;
  return /* @__PURE__ */ h(
    j,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: I,
        handleScrollNext: X,
        handleGoPrev: U,
        handleScrollPrev: ee,
        handleGoToday: re,
        goToDate: Y,
        zoomIn: H,
        zoomOut: J,
        setZoom: te,
        zoom: f,
        isNextZoom: L,
        isPrevZoom: T,
        date: C,
        isLoading: t,
        cols: R,
        startDate: E,
        dayOfYear: w,
        toggleDisplayActiveUnits: $,
        tilesCoords: q,
        updateTilesCoords: P,
        recordsThreshold: d,
        onClearFilterData: c,
        suppressNextSlideRef: D,
        toolbarActions: l
      },
      children: r
    }
  );
}, Ke = () => nt(mo), go = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, yo = (e, r) => {
  if (r.length === 0)
    return e;
  let t = e, n = 0;
  for (const o of r) {
    const s = o * ye + n * Ne;
    if (e >= s + Ne)
      n++;
    else if (e >= s)
      return o * ye + n * Ne - n * Ne;
  }
  return t - n * Ne;
}, bi = 5, pr = (e, r) => {
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
    isDraggable: f,
    resourceOnly: y = !1,
    isValidDrop: C
  } = i, [v, k] = pe("idle"), [p, R] = pe(null), [G, L] = pe({ x: 0, y: 0 }), [T, u] = pe({ width: 0, height: 48 }), [g, w] = pe(null), [E, b] = pe(!0), D = fe({ x: 0, y: 0 }), z = fe({ x: 0, y: 0 }), q = fe({ x: 0, y: 0 }), O = fe(null), M = fe(null), P = fe(0), N = fe(null), I = le(
    (j) => !d || j.draggable === !1 ? !1 : f ? f(j) : !0,
    [d, f]
  ), X = le(
    (j, S) => {
      const V = yo(S, l), Z = Math.floor(V / ye);
      let B;
      switch (t) {
        case 0:
          B = Be * 7;
          break;
        case 1:
          B = Te;
          break;
        case 2:
          B = Ye;
          break;
        default:
          B = Te;
      }
      const m = Math.floor(j / B);
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
      return { snappedDate: K, snappedResourceIndex: Z };
    },
    [t, n, l]
  ), U = le(
    (j, S, V, Z) => {
      const B = [], m = S.getTime(), K = V.getTime(), _ = a.find((ne) => ne.id === Z);
      if (!_)
        return B;
      const W = [];
      for (const ne of _.data)
        Array.isArray(ne) ? W.push(...ne) : W.push(ne);
      for (const ne of W) {
        if (ne.segmentId === j.segmentId)
          continue;
        const Q = ne.startDate.getTime(), ae = ne.endDate.getTime();
        if (m >= Q && m < ae || K > Q && K <= ae || m <= Q && K >= ae) {
          const ue = new Date(Math.max(m, Q)), we = new Date(Math.min(K, ae)), Ee = we.getTime() - ue.getTime();
          B.push({
            event: ne,
            conflictStart: ue,
            conflictEnd: we,
            overlapDuration: Ee
          });
        }
      }
      return B;
    },
    [a]
  ), ee = le(
    (j, S, V, Z) => {
      const B = [], m = S.getTime(), K = V.getTime(), _ = A(S).format("YYYY-MM-DD"), W = a.find((Q) => Q.id === Z);
      if (!W)
        return B;
      const ne = [];
      for (const Q of W.data)
        Array.isArray(Q) ? ne.push(...Q) : ne.push(Q);
      for (const Q of ne) {
        if (Q.segmentId === j.segmentId)
          continue;
        const ae = Q.startDate.getTime(), ge = Q.endDate.getTime(), ue = A(Q.startDate).format("YYYY-MM-DD"), we = A(Q.endDate).format("YYYY-MM-DD"), Ee = A(V).format("YYYY-MM-DD");
        if (!(ue === _ || we === _ || ue === Ee || we === Ee || A(Q.startDate).isBefore(S, "day") && A(Q.endDate).isAfter(V, "day")) || m >= ae && m < ge || K > ae && K <= ge || m <= ae && K >= ge)
          continue;
        let me, Ae;
        ge <= m ? (me = m - ge, Ae = "before") : (me = ae - K, Ae = "after"), B.push({
          event: Q,
          timeGap: me,
          position: Ae
        });
      }
      return B.sort((Q, ae) => Q.timeGap - ae.timeGap);
    },
    [a]
  ), re = le(
    (j, S, V) => {
      const Z = X(S, V);
      let B, m;
      if (y)
        B = j.startDate, m = j.endDate;
      else {
        const ge = A(j.endDate).diff(j.startDate);
        B = Z.snappedDate, m = A(B).add(ge, "milliseconds").toDate();
      }
      let K = 0, _ = "", W;
      for (const ge of e) {
        const ue = Math.max(ge.data.length, 1);
        if (Z.snappedResourceIndex < K + ue) {
          _ = ge.id, W = ge.capacity;
          break;
        }
        K += ue;
      }
      if (!_)
        return null;
      let ne = !0;
      W !== void 0 && j.totalPassengers !== void 0 && (ne = j.totalPassengers <= W);
      const Q = U(j, B, m, _), ae = Q.length === 0 ? ee(j, B, m, _) : [];
      return {
        startDate: B,
        endDate: m,
        resourceId: _,
        resourceIndex: Z.snappedResourceIndex,
        resourceCapacity: W,
        hasCapacity: ne,
        conflicts: Q,
        hasConflict: Q.length > 0,
        nearbyEvents: ae
      };
    },
    [X, e, y, U, ee]
  ), Y = le(
    (j, S) => {
      if (!s)
        return;
      const V = Date.now();
      if (V - P.current < 100)
        return;
      P.current = V;
      const Z = {
        event: j,
        currentStartDate: S.startDate,
        currentEndDate: S.endDate,
        currentResourceId: S.resourceId,
        conflicts: S.conflicts
      };
      s(Z);
    },
    [s]
  ), H = le(
    (j, S) => {
      if (!I(j) || !c.current)
        return;
      S.preventDefault(), S.stopPropagation();
      const V = S.target.closest('[style*="left"]');
      let Z = 0, B = 0;
      V && V.style.left && V.style.top && (Z = parseInt(V.style.left), B = parseInt(V.style.top));
      const m = gt(
        S.clientX,
        S.clientY,
        c.current
      );
      D.current = { x: Z, y: B }, z.current = { x: S.clientX, y: S.clientY }, q.current = {
        x: m.x - Z,
        // Offset from mouse to tile's left edge
        y: 20
        // No Y offset - ghost follows mouse vertically
      }, N.current = {
        startDate: j.startDate,
        endDate: j.endDate,
        resourceId: ""
        // Will be determined from data structure
      };
      for (const W of e) {
        for (const ne of W.data)
          if (ne.some((Q) => Q.segmentId === j.segmentId)) {
            N.current.resourceId = W.id;
            break;
          }
        if (N.current.resourceId)
          break;
      }
      R(j), k("potential"), L({ x: Z, y: B });
      let K = 100, _ = 48;
      if (V) {
        const W = V.getBoundingClientRect();
        K = W.width, _ = W.height;
      }
      u({ width: K, height: _ });
    },
    [I, c, e, t]
  ), J = le(
    (j) => {
      if (!c.current)
        return;
      let S = c.current;
      for (; S && S !== document.body; ) {
        const Q = window.getComputedStyle(S);
        if (S.scrollHeight > S.clientHeight && (Q.overflowY === "auto" || Q.overflowY === "scroll" || Q.overflow === "auto" || Q.overflow === "scroll"))
          break;
        S = S.parentElement;
      }
      (!S || S === document.body) && (S = document.documentElement);
      const V = S.getBoundingClientRect(), Z = j.clientY, B = 50, m = 12, K = Z - V.top, _ = V.bottom - Z;
      let W = !1, ne = 0;
      K < B && K > 0 ? (W = !0, ne = -m * (1 - K / B)) : _ < B && _ > 0 && (W = !0, ne = m * (1 - _ / B)), W ? (M.current && cancelAnimationFrame(M.current), M.current = requestAnimationFrame(() => {
        S.scrollTop += ne, v === "dragging" && J(j);
      })) : M.current && (cancelAnimationFrame(M.current), M.current = null);
    },
    [c, v]
  ), te = le(
    (j) => {
      if (v === "idle" || v === "animating" || !p || !c.current)
        return;
      const S = { x: j.clientX, y: j.clientY };
      if (v === "potential")
        if (pr(z.current, S))
          k("dragging");
        else
          return;
      J(j);
      const V = gt(
        j.clientX,
        j.clientY,
        c.current
      );
      O.current && cancelAnimationFrame(O.current), O.current = requestAnimationFrame(() => {
        const Z = {
          x: V.x - q.current.x,
          y: V.y - q.current.y
        };
        L(Z);
        const B = re(p, V.x, V.y);
        if (B && C) {
          const m = {
            event: p,
            currentStartDate: B.startDate,
            currentEndDate: B.endDate,
            currentResourceId: B.resourceId,
            conflicts: B.conflicts
          };
          B.hasConflict = !C(m);
        }
        if (w(B), B) {
          const m = B.hasCapacity !== !1;
          b(m), Y(p, B);
        }
      });
    },
    [v, p, c, re, Y, C, J]
  ), $ = le(
    async (j) => {
      if (v === "idle" || v === "animating")
        return;
      const S = { x: j.clientX, y: j.clientY };
      if (!pr(z.current, S) || v === "potential") {
        k("idle"), R(null), w(null);
        return;
      }
      if (!p || !g || !N.current) {
        k("idle"), R(null), w(null);
        return;
      }
      if (g.hasCapacity === !1) {
        b(!1), k("animating"), L(D.current), setTimeout(() => {
          k("idle"), R(null), w(null), b(!0);
        }, 300);
        return;
      }
      const Z = {
        event: p,
        originalStartDate: N.current.startDate,
        originalEndDate: N.current.endDate,
        originalResourceId: N.current.resourceId,
        newStartDate: g.startDate,
        newEndDate: g.endDate,
        newResourceId: g.resourceId,
        hasConflict: g.hasConflict,
        conflicts: g.conflicts
      };
      let B = !0;
      if (o)
        try {
          const m = o(Z);
          B = m instanceof Promise ? await m : m;
        } catch {
          B = !1;
        }
      B ? (b(!0), k("idle"), R(null), w(null)) : (b(!1), k("animating"), L(D.current), setTimeout(() => {
        k("idle"), R(null), w(null), b(!0);
      }, 300));
    },
    [v, p, g, o, C]
  );
  return be(() => {
    if (v === "potential" || v === "dragging") {
      const j = (V) => te(V), S = (V) => $(V);
      return document.addEventListener("mousemove", j), document.addEventListener("mouseup", S), () => {
        document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", S);
      };
    } else
      return () => {
      };
  }, [v, te, $]), be(() => () => {
    O.current && (cancelAnimationFrame(O.current), O.current = null), M.current && (cancelAnimationFrame(M.current), M.current = null);
  }, []), be(() => {
    (v === "idle" || v === "animating") && (O.current && (cancelAnimationFrame(O.current), O.current = null), M.current && (cancelAnimationFrame(M.current), M.current = null));
  }, [v]), be(() => {
    (v === "dragging" || v === "potential") && (v === "dragging" ? (k("animating"), L(D.current), setTimeout(() => {
      k("idle"), R(null), w(null);
    }, 300)) : (k("idle"), R(null), w(null)));
  }, [t]), be(() => {
    if ((v === "dragging" || v === "potential") && p) {
      let j = !1;
      for (const S of e) {
        for (const V of S.data)
          if (V.some((Z) => Z.segmentId === p.segmentId)) {
            j = !0;
            break;
          }
        if (j)
          break;
      }
      j || (v === "dragging" ? (k("animating"), L(D.current), setTimeout(() => {
        k("idle"), R(null), w(null);
      }, 300)) : (k("idle"), R(null), w(null)));
    }
  }, [e, v, p]), {
    dragState: v,
    draggedEvent: p,
    ghostPosition: G,
    ghostDimensions: T,
    dropTarget: g,
    isValidDrop: E,
    handleDragStart: H,
    isDraggable: I,
    draggingEventId: (p == null ? void 0 : p.segmentId) || null,
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
  const { enabled: d = !1, isSelectable: f } = i, y = d && !!o, C = le((m) => {
    let K = 0;
    for (const _ of a)
      _ <= m && K++;
    return m * ye + K * Ne;
  }, [a]), [v, k] = pe("idle"), [p, R] = pe(null), [G, L] = pe(null), [T, u] = pe(null), [g, w] = pe(!1), [E, b] = pe([]), [D, z] = pe(!1), q = fe(null), O = fe(null), M = fe(null), P = fe(null), N = le(() => {
    switch (t) {
      case 0:
        return Be * 7;
      case 1:
        return Te;
      case 2:
        return Ye;
      default:
        return Te;
    }
  }, [t]), I = le(
    (m) => {
      const K = N(), _ = Math.floor(m / K), W = A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);
      switch (t) {
        case 0:
          return W.add(_ * 7, "days").toDate();
        case 1:
          return W.add(_, "days").toDate();
        case 2:
          return W.add(_, "hours").toDate();
        default:
          return W.toDate();
      }
    },
    [t, n, N]
  ), X = le(
    (m) => {
      const K = yo(m, a), _ = Math.floor(K / ye);
      let W = 0;
      for (const ne of e) {
        const Q = Math.max(ne.data.length, 1);
        if (_ < W + Q)
          return {
            resourceId: ne.id,
            resourceIndex: _,
            resourceLabel: ne.label
          };
        W += Q;
      }
      return null;
    },
    [e, a]
  ), U = le(
    (m) => {
      const K = N();
      return Math.floor(m / K) * K;
    },
    [N]
  ), ee = le(
    (m, K, _, W = []) => {
      const ne = [], ae = (r || e).find((we) => we.id === m), ge = K.getTime(), ue = _.getTime();
      if (ae) {
        const we = ae.data[0], Ee = we && Array.isArray(we) ? ae.data.flat() : ae.data;
        for (const Se of Ee) {
          const se = new Date(Se.startDate).getTime(), me = new Date(Se.endDate).getTime();
          if (ge < me && ue > se) {
            const Ae = new Date(Math.max(ge, se)), he = new Date(Math.min(ue, me)), ve = he.getTime() - Ae.getTime();
            ne.push({
              event: Se,
              conflictStart: Ae,
              conflictEnd: he,
              overlapDuration: ve
            });
          }
        }
      }
      for (const we of W) {
        if (we.resourceId !== m)
          continue;
        const Ee = we.startDate.getTime(), Se = we.endDate.getTime();
        if (ge < Se && ue > Ee) {
          const se = new Date(Math.max(ge, Ee)), me = new Date(Math.min(ue, Se)), Ae = me.getTime() - se.getTime(), he = {
            segmentId: `pending-${we.startDate.getTime()}`,
            reservationId: `pending-${we.startDate.getTime()}`,
            startDate: we.startDate,
            endDate: we.endDate,
            occupancy: 0,
            title: `New Event (${we.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };
          ne.push({
            event: he,
            conflictStart: se,
            conflictEnd: me,
            overlapDuration: Ae
          });
        }
      }
      return ne;
    },
    [e, r]
  ), re = le(
    (m) => {
      if (!y || l || !c.current || m.button !== 0)
        return;
      const K = m.target;
      if (K.closest("[data-segment-id]") || K.closest("[data-multi-select-ui]"))
        return;
      const _ = gt(m.clientX, m.clientY, c.current), W = X(_.y);
      if (!W)
        return;
      q.current = { x: m.clientX, y: m.clientY }, O.current = W.resourceIndex;
      const ne = U(_.x), Q = N(), ae = C(W.resourceIndex);
      R(_), L(_), u({
        x: ne,
        y: ae,
        width: Q,
        height: ye
      }), k("selecting");
    },
    [y, l, c, X, U, N, C]
  ), Y = le(
    (m) => {
      L(m);
      const K = N(), _ = U((p == null ? void 0 : p.x) || 0), W = U(m.x), ne = C(O.current), Q = Math.min(_, W), ae = Math.max(_, W) + K;
      u({ x: Q, y: ne, width: ae - Q, height: ye });
    },
    [p, N, U, C]
  ), H = le(() => {
    P.current && (cancelAnimationFrame(P.current), P.current = null);
  }, []), J = le(
    (m, K) => {
      const _ = document.getElementById(Ge);
      if (!_ || !c.current)
        return;
      const W = _.getBoundingClientRect(), ne = 60, Q = 12, ae = m - (W.left + Le), ge = W.right - m;
      let ue = 0;
      ae < ne ? ue = -Q * (1 - Math.max(0, ae) / ne) : ge < ne && (ue = Q * (1 - Math.max(0, ge) / ne)), H(), ue !== 0 && (P.current = requestAnimationFrame(() => {
        _.scrollLeft += ue, Y(gt(m, K, c.current)), J(m, K);
      }));
    },
    [c, Y, H]
  ), te = le(
    (m) => {
      if (v !== "selecting" || !c.current || O.current === null)
        return;
      const K = gt(m.clientX, m.clientY, c.current);
      M.current && cancelAnimationFrame(M.current), M.current = requestAnimationFrame(() => Y(K)), J(m.clientX, m.clientY);
    },
    [v, c, Y, J]
  ), $ = le(
    (m) => {
      if (v !== "selecting")
        return;
      if (H(), !c.current || !p || !q.current) {
        k("idle"), R(null), L(null), u(null);
        return;
      }
      const K = gt(m.clientX, m.clientY, c.current), _ = X(p.y);
      if (!_) {
        k("idle"), R(null), L(null), u(null);
        return;
      }
      const W = Math.min(p.x, K.x), ne = Math.max(p.x, K.x), Q = I(W), ae = I(ne), ge = A(ae).hour(23).minute(59).second(0).millisecond(0).toDate();
      if (f && !f(_.resourceId, Q, ge)) {
        k("idle"), R(null), L(null), u(null);
        return;
      }
      const ue = ee(
        _.resourceId,
        Q,
        ge,
        E
      ), we = ue.length > 0, Ee = {
        startDate: Q,
        endDate: ge,
        resourceId: _.resourceId,
        resourceLabel: _.resourceLabel,
        zoomLevel: t,
        hasConflict: we,
        conflicts: we ? ue : void 0
      };
      if (g)
        b((Se) => [...Se, Ee]), z(!0);
      else if (o) {
        const Se = o(Ee), se = (me) => {
          me != null && me.continueMultiSelect && (w(!0), b([Ee]), z(!0));
        };
        Se instanceof Promise ? Se.then(se) : se(Se);
      }
      k("idle"), R(null), L(null), u(null), q.current = null, O.current = null;
    },
    [
      v,
      c,
      p,
      X,
      I,
      f,
      o,
      t,
      g,
      ee,
      E,
      H
    ]
  ), j = le(() => {
    if (E.length > 0 && s) {
      z(!1);
      const m = s(E), K = (_) => {
        _ != null && _.continueMultiSelect ? z(!0) : (b([]), w(!1), z(!1));
      };
      m instanceof Promise ? m.then(K) : K(m);
      return;
    }
    b([]), w(!1), z(!1);
  }, [E, s]), S = le(() => {
    b([]), w(!1), z(!1);
  }, []), V = le((m) => {
    b((K) => {
      const _ = K.filter((W, ne) => ne !== m);
      return _.length === 0 && (w(!1), z(!1)), _;
    });
  }, []), Z = le(
    (m, K) => {
      b((_) => _.map((W, ne) => {
        if (ne !== m)
          return W;
        const Q = { ...W, ...K }, ae = _.filter((ue, we) => we !== m), ge = ee(
          Q.resourceId,
          Q.startDate,
          Q.endDate,
          ae
        );
        return {
          ...Q,
          hasConflict: ge.length > 0,
          conflicts: ge.length > 0 ? ge : void 0
        };
      }));
    },
    [ee]
  ), B = le(
    (m) => {
      m.key === "Escape" && (v === "selecting" ? (H(), k("idle"), R(null), L(null), u(null), q.current = null, O.current = null) : g && E.length > 0 && (b([]), w(!1), z(!1)));
    },
    [v, g, E.length, H]
  );
  return be(() => {
    if (v === "selecting")
      return document.addEventListener("mousemove", te), document.addEventListener("mouseup", $), document.addEventListener("keydown", B), () => {
        document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", $), document.removeEventListener("keydown", B);
      };
  }, [v, te, $, B]), be(() => {
    if (g && E.length > 0)
      return document.addEventListener("keydown", B), () => {
        document.removeEventListener("keydown", B);
      };
  }, [g, E.length, B]), be(() => () => {
    M.current && (cancelAnimationFrame(M.current), M.current = null), H();
  }, [H]), be(() => {
    l && v === "selecting" && (H(), k("idle"), R(null), L(null), u(null), q.current = null, O.current = null);
  }, [l, v, H]), {
    selectionState: v,
    selectionStart: p,
    selectionEnd: G,
    selectionBox: T,
    handleGridMouseDown: re,
    isEnabled: y,
    pendingSelections: E,
    confirmSelections: j,
    clearSelections: S,
    removeSelection: V,
    updateSelection: Z,
    isMultiSelectActive: g,
    hasUnconfirmedSelections: D
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
`, mr = x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Di = Pn(function({ zoom: r, rows: t, data: n, baseData: o, onTileClick: s, onEventDrop: i, onEventDrag: c, draggableConfig: l, onDragStateChange: a, onTimeRangeSelect: d, onMultiTimeRangeSelect: f, clickToAddConfig: y, separatorRowIndices: C = [], subcontractSeparatorRow: v = -1, fadingUnitIds: k }, p) {
  const R = fe(!1), { handleScrollNext: G, handleScrollPrev: L, date: T, isLoading: u, cols: g, startDate: w, suppressNextSlideRef: E } = Ke(), b = fe(null), D = fe(null), z = fe(t), q = fe(T), O = fe(null), M = fe(null), P = fe(null), N = fe(null), [I, X] = pe(!1), U = qt(), {
    dragState: ee,
    draggedEvent: re,
    ghostPosition: Y,
    ghostDimensions: H,
    dropTarget: J,
    isValidDrop: te,
    handleDragStart: $,
    isDraggable: j,
    draggingEventId: S,
    resourceOnly: V
  } = wi({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: w,
    onEventDrop: i,
    onEventDrag: c,
    draggableConfig: l,
    gridRef: N,
    separatorRowIndices: C
  });
  be(() => {
    const he = ee === "dragging" || ee === "potential";
    X(he), a && a(he);
  }, [ee, a]);
  const Z = fe(!1), B = fe(T), m = fe(null);
  be(() => {
    var xe;
    const he = B.current;
    if (B.current = T, !Z.current) {
      Z.current = !0;
      return;
    }
    if (E != null && E.current) {
      E.current = !1;
      return;
    }
    const ve = N.current;
    if (!(ve != null && ve.animate))
      return;
    const ie = T.isAfter(he) ? 48 : -48;
    (xe = m.current) == null || xe.cancel(), ve.style.willChange = "transform";
    const ce = ve.animate(
      [
        { transform: `translateX(${ie}px)`, opacity: 0.4 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    ), de = () => {
      ve.style.willChange = "";
    };
    ce.onfinish = de, ce.oncancel = de, m.current = ce;
  }, [T, E]);
  const {
    selectionState: K,
    selectionBox: _,
    handleGridMouseDown: W,
    pendingSelections: ne,
    confirmSelections: Q,
    clearSelections: ae,
    removeSelection: ge,
    updateSelection: ue,
    isMultiSelectActive: we,
    hasUnconfirmedSelections: Ee
  } = Si({
    data: n,
    baseData: o || n,
    zoom: r,
    startDate: w,
    onTimeRangeSelect: d,
    onMultiTimeRangeSelect: f,
    clickToAddConfig: y,
    gridRef: N,
    isDragging: I,
    separatorRowIndices: C
  }), Se = le((he) => {
    he.preventDefault();
  }, []), se = le((he) => {
    he.preventDefault();
  }, []), me = C.length * Ne, Ae = le(
    (he) => {
      const ve = Wn(), ie = t * ye + 1 + me;
      go(he, ve, ie), Ws(he, r, t, g, w, U, C, v);
    },
    [g, w, t, r, U, C, v, me]
  );
  return be(() => {
    if (!b.current)
      return;
    const he = b.current.getContext("2d");
    if (!he)
      return;
    const ve = () => Ae(he);
    return window.addEventListener("resize", ve), () => window.removeEventListener("resize", ve);
  }, [Ae]), be(() => {
    var _e, He;
    const he = z.current, ve = q.current;
    if (z.current = t, q.current = T, he === t || !T.isSame(ve, "day") || (_e = window.matchMedia) != null && _e.call(window, "(prefers-reduced-motion: reduce)").matches)
      return;
    const ie = b.current, ce = D.current;
    if (!ie || !ce)
      return;
    const de = ce.getContext("2d");
    if (!de)
      return;
    ce.width = ie.width, ce.height = ie.height, ce.style.width = ie.style.width, ce.style.height = ie.style.height, de.setTransform(1, 0, 0, 1, 0, 0), de.clearRect(0, 0, ce.width, ce.height), de.drawImage(ie, 0, 0), (He = O.current) == null || He.cancel(), ce.style.opacity = "1";
    const xe = ce.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease" });
    xe.onfinish = () => {
      ce.style.opacity = "0";
    }, O.current = xe;
  }, [t, T]), be(() => {
    const he = b.current;
    if (!he)
      return;
    he.style.letterSpacing = "1px";
    const ve = he.getContext("2d");
    ve && Ae(ve);
  }, [T, t, r, Ae]), be(() => {
    if (!M.current)
      return;
    const he = new IntersectionObserver(
      (ve) => {
        ve[0].isIntersecting && !R.current && (R.current = !0, G(), setTimeout(() => {
          R.current = !1;
        }, 1e3));
      },
      { root: document.getElementById(Ge) }
    );
    return he.observe(M.current), () => {
      he.disconnect();
    };
  }, [G]), be(() => {
    if (!P.current)
      return;
    const he = new IntersectionObserver(
      (ve) => {
        ve[0].isIntersecting && !R.current && (R.current = !0, L(), setTimeout(() => {
          R.current = !1;
        }, 1e3));
      },
      {
        root: document.getElementById(Ge),
        rootMargin: `0px 0px 0px -${Le}px`
      }
    );
    return he.observe(P.current), () => {
      he.disconnect();
    };
  }, [L]), /* @__PURE__ */ F(Ci, { id: ao, children: [
    /* @__PURE__ */ F(
      Mi,
      {
        ref: (he) => {
          typeof p == "function" ? p(he) : p && (p.current = he), N.current = he;
        },
        onMouseDown: W,
        style: { cursor: d ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ h(mr, { position: "left", ref: P }),
          /* @__PURE__ */ h(Tn, { isLoading: u, position: "left" }),
          /* @__PURE__ */ h(
            ki,
            {
              ref: b,
              onDragStart: Se,
              onDragOver: se,
              style: { userSelect: ee === "dragging" ? "none" : "auto" }
            }
          ),
          /* @__PURE__ */ h($i, { ref: D, "aria-hidden": !0 }),
          /* @__PURE__ */ h($d, { zoom: r, startDate: w }),
          /* @__PURE__ */ h(
            Tl,
            {
              data: n,
              zoom: r,
              onTileClick: s,
              onDragStart: $,
              isDraggable: j,
              draggingEventId: S,
              separatorRowIndices: C,
              fadingUnitIds: k
            }
          ),
          /* @__PURE__ */ h(mr, { ref: M, position: "right" }),
          /* @__PURE__ */ h(Tn, { isLoading: u, position: "right" }),
          (ee === "dragging" || ee === "animating") && /* @__PURE__ */ h(
            rd,
            {
              draggedEvent: re,
              ghostPosition: Y,
              ghostDimensions: H,
              dropTarget: J,
              isValidDrop: te,
              dragState: ee,
              zoom: r,
              data: n,
              resourceOnly: V,
              separatorRowIndices: C
            }
          ),
          /* @__PURE__ */ h(
            ad,
            {
              selectionBox: _,
              isSelecting: K === "selecting"
            }
          ),
          we && ne.length > 0 && /* @__PURE__ */ h(
            Cd,
            {
              selections: ne,
              data: n,
              zoom: r,
              startDate: w,
              onRemove: ge,
              onUpdate: ue,
              separatorRowIndices: C
            }
          )
        ]
      }
    ),
    we && Ee && ne.length > 0 && /* @__PURE__ */ h(
      gd,
      {
        selections: ne,
        onConfirm: Q,
        onClear: ae,
        onRemove: ge
      }
    )
  ] });
}), vo = (e) => {
  const r = A.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, xo = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Pe);
    t += o.hours + s, n += r % Pe, n >= Pe && (t++, n -= Pe);
  }), { hours: t, minutes: n };
}, bo = (e, r) => {
  let t = lr;
  switch (r) {
    case 0:
      t = Ys;
      break;
    case 1:
      t = lr;
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
}, Ei = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const d = A(a.startDate).isoWeek(), f = A(a.startDate).isoWeekday(), y = A(a.endDate).isoWeek(), C = A(a.endDate).isoWeekday(), { hours: v, minutes: k } = vo(a.occupancy);
    if (n === d) {
      const p = (et + 1 - f) * v, R = (et + 1 - f) * k;
      return { hours: Math.max(0, p), minutes: R };
    } else if (n === y) {
      const p = C > et ? et * v : C * v, R = C > et ? et * k : C * k;
      return { hours: p, minutes: R };
    } else if (A(r).isBetween(a.startDate, a.endDate))
      return { hours: et * v, minutes: et * k };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = xo(o), { free: c, overtime: l } = bo({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, _i = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: f, minutes: y } = vo(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: f, minutes: y } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = xo(s), { free: l, overtime: a } = bo({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Ti = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = A(c.startDate).hour(), a = A(c.endDate).hour(), d = r.hour(), f = A(c.endDate).minute(), y = A(c.startDate).minute();
    l < d && a > d ? t += Pe : l === d && a === d && y && f ? t += f ? f - y : Pe - y : l === d && a >= d ? t += y ? Pe - y : Pe : a === d && f && (t += f);
  });
  const n = Math.floor(t / Pe), o = t % Pe, s = n || o ? 0 : 1, i = n ? 0 : o ? Pe - o : 0;
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
  const s = e.flat(2).filter((i) => n === 1 ? A(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? A(t).isBetween(i.startDate, i.endDate, "hour", "[]") : A(i.startDate).isBetween(
    A(t),
    A(t).add(6, "days"),
    "day",
    "[]"
  ) || A(t).isBetween(A(i.startDate), A(i.endDate), "day", "[]"));
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
      c = "days", l = Te;
      break;
    case 2:
      c = "hours", l = Ye;
      break;
  }
  const a = Math.ceil(s === 2 ? (t.x - 0.5 * l) / l : t.x / l), d = A(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(a - 1, c), f = Math.ceil(t.y / ye), y = n.findIndex((R, G, L) => L.slice(0, G + 1).reduce((u, g) => u + g, 0) >= f), C = s === 2 ? (a + 1) * l : a * l, v = (f - 1) * ye + ye, k = Ai(
    o[y],
    y,
    d,
    s,
    i
  ), p = A(e.startDate).isSame(A(e.endDate), "day");
  return {
    coords: { x: C, y: v },
    mouseCoords: t,
    resourceIndex: y,
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
  const n = [...t].sort((d, f) => d - f);
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
  return i.forEach((d, f) => {
    const y = "__auto_cat_" + f, C = d.min === d.max ? d.min + " pax" : d.min + "-" + d.max + " pax";
    l.push({ id: y, name: C, minPassengers: d.min, maxPassengers: d.max });
    for (const v of d.values)
      a.set(v, y);
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
var Cn = {}, Ri = {
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
    return function(t, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Ri);
const Li = Cn;
var Mn = {}, Ni = {
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
    return function(t, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Ni);
const Bi = Mn, Hi = (e) => {
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
A.extend(Li);
A.extend(Bi);
const gr = /* @__PURE__ */ new WeakMap(), zi = (e) => {
  const r = gr.get(e);
  if (r)
    return r;
  const t = [...e].sort((o, s) => {
    const i = A(o.startDate), c = A(s.startDate), l = i.startOf("day").diff(c.startOf("day"), "day");
    return l !== 0 ? l : i.diff(c);
  }), n = Hi(t);
  return gr.set(e, n), n;
}, Fi = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = zi(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Wi = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, ji = (e) => {
  const { recordsThreshold: r } = Ke(), [t, n] = pe(0), [o, s] = pe(0), i = fe(null);
  be(() => {
    i.current = document.getElementById(Ge);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = De(() => Fi(e), [e]), a = De(
    () => Yi(e, c, l, r),
    [e, c, r, l]
  ), d = le(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), f = le(() => {
    a[o].length && (n((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), y = le(() => {
    n(0), s(0);
  }, []), C = t + a[o].length, v = De(
    () => l.slice(t, C),
    [C, l, t]
  ), k = De(
    () => c.slice(t, C),
    [C, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: k,
    rowsPerItem: v,
    totalRowsPerPage: Wi(a[o]),
    next: d,
    previous: f,
    reset: y
  };
};
var kn = {}, Zi = {
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
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Zi);
const Vi = kn;
var $n = {}, Gi = {
  get exports() {
    return $n;
  },
  set exports(e) {
    $n = e;
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
    function i(y, C, v) {
      var k = y + " ";
      switch (v) {
        case "m":
          return C ? "minuta" : "minutę";
        case "mm":
          return k + (s(y) ? "minuty" : "minut");
        case "h":
          return C ? "godzina" : "godzinę";
        case "hh":
          return k + (s(y) ? "godziny" : "godzin");
        case "MM":
          return k + (s(y) ? "miesiące" : "miesięcy");
        case "yy":
          return k + (s(y) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(y, C) {
      return a.test(C) ? c[y.month()] : l[y.month()];
    };
    d.s = l, d.f = c;
    var f = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(y) {
      return y + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(f, null, !0), f;
  });
})(Gi);
const Xi = $n;
var Dn = {}, Ui = {
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
  })(Ie, function(t) {
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
})(Ui);
const Ki = Dn;
var En = {}, Ji = {
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
  })(Ie, function(t) {
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
})(Ji);
const qi = En;
var _n = {}, Qi = {
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
  })(Ie, function(t) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var o = n(t), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(i) {
      return i + "º";
    } };
    return o.default.locale(s, null, !0), s;
  });
})(Qi);
const ea = _n, ta = {
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
    jn(this, "locales", ia);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const Kt = new aa(), wo = Zr({
  localesData: Kt.getLocales(),
  currentLocale: Kt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ca = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = pe("en"), s = Kt.getLocales(), i = le(() => {
    const f = s.find((y) => y.id === n);
    return typeof (f == null ? void 0 : f.dayjsTranslations) == "object" && A.locale(f.dayjsTranslations), f || s[0];
  }, [n, s]), [c, l] = pe(i()), a = (f) => {
    localStorage.setItem("locale", f.translateCode), l(f);
  };
  be(() => {
    t == null || t.forEach((f) => {
      s.find((C) => C.id === f.id) || Kt.addLocales(f);
    });
  }, [s, t]), be(() => {
    const f = localStorage.getItem("locale"), y = r ?? f ?? "en";
    localStorage.setItem("locale", y), o(y), l(i());
  }, [i, r]);
  const { Provider: d } = wo;
  return /* @__PURE__ */ h(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, Je = () => nt(wo).currentLocale.lang, la = (e) => /* @__PURE__ */ oe.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ oe.createElement("defs", null, /* @__PURE__ */ oe.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ oe.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ oe.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ oe.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ oe.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ oe.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ oe.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), da = x.div`
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
  const { feelingEmpty: r } = Je();
  return /* @__PURE__ */ F(da, { onClick: e, children: [
    /* @__PURE__ */ h(la, {}),
    /* @__PURE__ */ h(ua, { children: r })
  ] });
}, ha = x.div`
  position: relative;
  display: flex;
`, pa = x.div`
  position: relative;
  margin-left: ${Le};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ma = x.div`
  width: calc(${({ width: e }) => e}px - ${Le}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Le}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, ga = {
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
function ya(e, r) {
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
const va = ({
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
  clickToAddConfig: y
}) => {
  const [C, v] = pe(ga), [k, p] = pe(e), [R, G] = pe(!1), [L, T] = pe(!1), [u, g] = pe(""), [w, E] = pe(/* @__PURE__ */ new Set()), [b, D] = pe(/* @__PURE__ */ new Set()), z = fe([]);
  be(() => () => z.current.forEach(clearTimeout), []);
  const {
    zoom: q,
    startDate: O,
    isLoading: M,
    config: { includeTakenHoursOnWeekendsInDayView: P, showTooltip: N, showThemeToggle: I }
  } = Ke(), X = fe(null), U = fe(null), [ee, re] = pe(124), {
    page: Y,
    projectsPerPerson: H,
    rowsPerItem: J,
    currentPageNum: te,
    pagesAmount: $,
    next: j,
    previous: S,
    reset: V
  } = ji(k), { effectiveCategories: Z, effectivePage: B } = De(() => {
    if (t && t.length > 0)
      return { effectiveCategories: t, effectivePage: Y };
    const ie = Ii(Y);
    if (ie.categories.length === 0)
      return { effectiveCategories: void 0, effectivePage: Y };
    const ce = Y.map((de) => {
      if (de.isSubcontract || de.capacity == null)
        return de;
      const xe = ie.capacityToCategoryId.get(de.capacity);
      return xe ? { ...de, categoryId: xe } : de;
    });
    return { effectiveCategories: ie.categories, effectivePage: ce };
  }, [t, Y]), m = le(
    (ie) => {
      var de;
      if (w.has(ie)) {
        E((xe) => {
          const _e = new Set(xe);
          return _e.delete(ie), _e;
        }), D((xe) => {
          if (!xe.has(ie))
            return xe;
          const _e = new Set(xe);
          return _e.delete(ie), _e;
        });
        return;
      }
      if ((de = window.matchMedia) != null && de.call(window, "(prefers-reduced-motion: reduce)").matches) {
        E((xe) => new Set(xe).add(ie));
        return;
      }
      D((xe) => new Set(xe).add(ie));
      const ce = setTimeout(() => {
        E((xe) => new Set(xe).add(ie)), D((xe) => {
          const _e = new Set(xe);
          return _e.delete(ie), _e;
        });
      }, 190);
      z.current.push(ce);
    },
    [w]
  ), K = De(() => {
    const ie = [], ce = Z ? [...Z].sort((de, xe) => de.maxPassengers - xe.maxPassengers) : [];
    for (const de of ce)
      B.some((xe) => !xe.isSubcontract && xe.categoryId === de.id) && ie.push(de.id);
    return B.some((de) => de.isSubcontract) && ie.push("__subcontract__"), ie;
  }, [Z, B]), _ = le(() => {
    E(/* @__PURE__ */ new Set());
  }, []), W = le(() => {
    E(new Set(K));
  }, [K]), ne = De(() => {
    const ie = /* @__PURE__ */ new Set();
    if (b.size === 0)
      return ie;
    for (const ce of B) {
      const de = ce.isSubcontract ? "__subcontract__" : ce.categoryId;
      de && b.has(de) && ie.add(ce.id);
    }
    return ie;
  }, [b, B]), {
    visiblePage: Q,
    visibleRowsPerItem: ae,
    visibleTotalRows: ge,
    visibleProjectsPerPerson: ue,
    separatorRowIndices: we,
    subcontractSeparatorRow: Ee
  } = De(() => {
    const ie = ya(B, Z), ce = ((Z == null ? void 0 : Z.length) ?? 0) > 0, de = /* @__PURE__ */ new Map();
    Y.forEach((Re, dt) => de.set(Re.id, dt));
    const xe = [], _e = [], He = [], je = [];
    let rt = 0, Rt = -1;
    for (const Re of ie)
      if (Re.type === "subcontract" || Re.type === "category" && ce) {
        const ut = Re.type === "subcontract" ? "__subcontract__" : Re.category.id, ft = w.has(ut);
        if (je.push(rt), Re.type === "subcontract" && (Rt = rt), !ft)
          for (const ot of Re.items) {
            const Lt = de.get(ot.id) ?? 0, Nt = J[Lt];
            xe.push(ot), _e.push(Nt), He.push(H[Lt]), rt += Nt;
          }
      } else
        for (const ut of Re.items) {
          const ft = de.get(ut.id) ?? 0, ot = J[ft];
          xe.push(ut), _e.push(ot), He.push(H[ft]), rt += ot;
        }
    const Qe = _e.reduce((Re, dt) => Re + dt, 0);
    return {
      visiblePage: xe,
      visibleRowsPerItem: _e,
      visibleTotalRows: Qe,
      visibleProjectsPerPerson: He,
      separatorRowIndices: je,
      subcontractSeparatorRow: Rt
    };
  }, [B, Z, Y, w, J, H]), Se = fe(
    Sn(
      (ie, ce, de, xe, _e, He) => {
        if (!X.current)
          return;
        const { tile: je, segmentId: rt } = Ae(ie);
        if (!rt || !je) {
          G(!1);
          return;
        }
        const Rt = me(rt, ce), Qe = X.current.getBoundingClientRect(), Re = je.getBoundingClientRect(), dt = { x: ie.clientX - Qe.left, y: ie.clientY - Qe.top }, ut = {
          x: ie.clientX - Qe.left,
          y: ie.clientY - Qe.top
        }, ft = {
          x: Re.left - Qe.left,
          y: Re.top - Qe.top,
          width: Re.width,
          height: Re.height
        }, {
          coords: { x: ot, y: Lt },
          resourceIndex: Nt,
          disposition: Co,
          reservationData: Mo
        } = Pi(
          Rt,
          de,
          dt,
          xe,
          _e,
          He,
          P
        );
        v({
          coords: { x: ot, y: Lt },
          mouseCoords: ut,
          resourceIndex: Nt,
          disposition: Co,
          reservationData: Mo,
          tileBounds: ft
        }), G(!0);
      },
      4
    )
  ), se = fe(
    Sn((ie, ce) => {
      V(), p(
        ie.map((de) => ({
          ...de,
          data: de.data.filter((xe) => {
            const { title: _e, description: He, subtitle: je } = xe;
            return (_e == null ? void 0 : _e.toLowerCase().includes(ce.toLowerCase())) || (je == null ? void 0 : je.toLowerCase().includes(ce.toLowerCase())) || (He == null ? void 0 : He.toLowerCase().includes(ce.toLowerCase()));
          })
        })).filter((de) => de.data.length > 0)
      );
    }, 500)
  ), me = (ie, ce) => {
    if (ie)
      return ce.flatMap((de) => de.data).find((de) => de.segmentId === ie);
  }, Ae = (ie) => {
    if (!ie.target)
      return { tile: null, segmentId: null };
    const ce = ie.target.closest("[data-segment-id]");
    return ce ? { tile: ce, segmentId: ce.getAttribute("data-segment-id") } : { tile: null, segmentId: null };
  }, he = (ie) => {
    const ce = ie.target.value;
    g(ce), se.current.cancel(), ce ? se.current(e, ce) : (V(), p(e));
  }, ve = le(() => {
    Se.current.cancel(), G(!1);
  }, []);
  return be(() => {
    const ie = (de) => Se.current(
      de,
      e,
      O,
      ae,
      ue,
      q
    ), ce = X.current;
    if (ce)
      return ce.addEventListener("mousemove", ie), ce.addEventListener("mouseleave", ve), () => {
        ce.removeEventListener("mousemove", ie), ce.removeEventListener("mouseleave", ve);
      };
  }, [
    Se,
    ve,
    ue,
    ae,
    O,
    q,
    e
  ]), be(() => {
    u ? (se.current.cancel(), se.current(e, u)) : p(e);
  }, [e, u]), Jt(() => {
    const ie = U.current;
    if (!ie)
      return;
    const ce = () => re(ie.offsetHeight);
    ce();
    const de = new ResizeObserver(ce);
    return de.observe(ie), () => de.disconnect();
  }, []), /* @__PURE__ */ F(ha, { children: [
    /* @__PURE__ */ h(
      Ic,
      {
        headerHeight: ee,
        data: B,
        categories: Z,
        pageNum: te,
        pagesAmount: $,
        rows: J,
        onLoadNext: j,
        onLoadPrevious: S,
        searchInputValue: u,
        onSearchInputChange: he,
        onItemClick: o,
        collapsedGroups: w,
        fadingGroups: b,
        onToggleGroup: m,
        allGroupIds: K,
        onExpandAll: _,
        onCollapseAll: W
      }
    ),
    /* @__PURE__ */ F(pa, { children: [
      /* @__PURE__ */ h(
        ll,
        {
          ref: U,
          zoom: q,
          topBarWidth: i,
          showThemeToggle: I,
          toggleTheme: s
        }
      ),
      e.length ? /* @__PURE__ */ h(
        Di,
        {
          data: Q,
          baseData: r || e,
          zoom: q,
          rows: ge,
          ref: X,
          onTileClick: n,
          onEventDrop: c,
          onEventDrag: l,
          draggableConfig: a,
          onDragStateChange: T,
          onTimeRangeSelect: d,
          onMultiTimeRangeSelect: f,
          clickToAddConfig: y,
          separatorRowIndices: we,
          subcontractSeparatorRow: Ee,
          fadingUnitIds: ne
        }
      ) : /* @__PURE__ */ h(ma, { width: i, children: M ? /* @__PURE__ */ h(Tn, { isLoading: M, position: "left" }) : /* @__PURE__ */ h(fa, {}) }),
      N && /* @__PURE__ */ h(Zl, { tooltipData: C, visible: R && !L })
    ] })
  ] });
}, xa = x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Le + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.primary};
`, yr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({ $at: e }) => e === "end" ? "flex-end" : "flex-start"};
`, ba = x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`, wa = x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, vr = x.button`
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
`, Sa = x.button`
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
`, Ca = x.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin-left: 4px;
  text-transform: capitalize;
  white-space: nowrap;
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
    background: ${({ theme: e }) => e.colors.accent};
    color: #fff;
  }
`, xr = x.button`
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
`, $a = x.button`
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
`, Da = x.span`
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
`, ht = ({ children: e, sw: r = 2 }) => /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: r, strokeLinecap: "round", strokeLinejoin: "round", children: e }), Ea = () => {
  var r, t;
  const e = document.getElementById(uo);
  document.fullscreenElement ? (t = document.exitFullscreen) == null || t.call(document) : (r = e == null ? void 0 : e.requestFullscreen) == null || r.call(e);
}, _a = () => {
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
  } = Ke();
  Je();
  const { filterButtonState: d = -1 } = e, f = () => {
    var y;
    (y = document.querySelector(`#${Ge} input[placeholder]`)) == null || y.focus();
  };
  return /* @__PURE__ */ F(xa, { width: 0, children: [
    /* @__PURE__ */ F(yr, { $at: "start", children: [
      /* @__PURE__ */ F(wa, { children: [
        /* @__PURE__ */ h(vr, { onClick: o, "aria-label": "Anterior", children: /* @__PURE__ */ h(ht, { children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" }) }) }),
        /* @__PURE__ */ h(Sa, { onClick: s, children: "Hoy" }),
        /* @__PURE__ */ h(vr, { onClick: n, "aria-label": "Siguiente", children: /* @__PURE__ */ h(ht, { children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" }) }) })
      ] }),
      /* @__PURE__ */ h(Ca, { children: r.locale(A.locale()).format("MMMM YYYY") }),
      /* @__PURE__ */ h(ba, {}),
      /* @__PURE__ */ F(Ma, { children: [
        /* @__PURE__ */ h("button", { className: t === 2 ? "on" : "", onClick: () => i(2), children: "Día" }),
        /* @__PURE__ */ h("button", { className: t === 0 ? "on" : "", onClick: () => i(0), children: "Semana" }),
        /* @__PURE__ */ h("button", { className: t === 1 ? "on" : "", onClick: () => i(1), children: "Mes" })
      ] }),
      e.showJumpToDate !== !1 && /* @__PURE__ */ F(ka, { children: [
        /* @__PURE__ */ F(ht, { children: [
          /* @__PURE__ */ h("path", { d: "M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" }),
          /* @__PURE__ */ h("path", { d: "M3.5 9.5h17M8 3.5v3M16 3.5v3" }),
          /* @__PURE__ */ h("circle", { cx: "16.7", cy: "16.7", r: "2.7" })
        ] }),
        "Ir a fecha",
        /* @__PURE__ */ h("input", { type: "date", onChange: (y) => y.target.value && c(y.target.value) })
      ] }),
      /* @__PURE__ */ F($a, { onClick: f, children: [
        /* @__PURE__ */ F(ht, { children: [
          /* @__PURE__ */ h("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ h("path", { d: "m20 20-3.2-3.2" })
        ] }),
        "Buscar",
        /* @__PURE__ */ h("span", { className: "k", children: "⌘K" })
      ] })
    ] }),
    /* @__PURE__ */ F(yr, { $at: "end", children: [
      e.showFilterButton !== !1 && d >= 0 && /* @__PURE__ */ F(xr, { $primary: !!d, onClick: l, children: [
        /* @__PURE__ */ h(ht, { children: /* @__PURE__ */ h("path", { d: "M4 6.5h16l-6 7v4.5l-4 2v-6.5z" }) }),
        "Filtros",
        !!d && /* @__PURE__ */ h(Da, { children: d })
      ] }),
      e.showFullscreenButton !== !1 && /* @__PURE__ */ F(xr, { onClick: Ea, children: [
        /* @__PURE__ */ h(ht, { children: /* @__PURE__ */ h("path", { d: "M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" }) }),
        "Pantalla completa"
      ] }),
      a
    ] })
  ] });
}, Ta = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Aa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Pa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Oa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Ia = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ya = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ra = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), La = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Na = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Ba = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Ha = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), za = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Fa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Wa = (e) => /* @__PURE__ */ oe.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ oe.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ oe.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), ja = {
  add: Ta,
  subtract: Aa,
  filter: Pa,
  arrowLeft: Oa,
  arrowRight: Ia,
  defaultAvatar: Ya,
  calendarWarning: Ra,
  calendarFree: La,
  arrowDown: Ba,
  arrowUp: Na,
  search: Ha,
  close: za,
  moon: Fa,
  sun: Wa
}, rn = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = qt(), i = ja[e];
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
}, Za = (e, r, t) => ({
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
  ${({ theme: e, variant: r, disabled: t }) => Za(e, r, t)}
`;
const Va = x.div`
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
  font-family: ${ze};
`, Ga = x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`, Xa = x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`, Ua = x.div`
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
`, Ka = x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`, Ja = x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`, qa = x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({ $sev: e }) => e === 2 ? "#c6483d" : e === 1 ? "#d98a22" : "#93b1a6"};
`, Qa = x.div`
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
`, ec = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme: e }) => e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`, tc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`, nc = x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`, rc = x.div`
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
`, oc = () => {
  const { date: e, zoom: r, data: t, goToDate: n, config: o } = Ke(), s = Je(), i = fe(null), [c, l] = pe(null), a = De(
    () => Array.from({ length: 12 }, (b, D) => A().month(D).format("MMM").toUpperCase()),
    [s]
  ), d = De(() => A().startOf("day"), []), { domainStart: f, domainEnd: y, domainDays: C } = De(() => {
    const b = d.subtract(3, "month").startOf("month"), D = d.add(9, "month").endOf("month");
    return { domainStart: b, domainEnd: D, domainDays: D.diff(b, "day") + 1 };
  }, [d]), v = (b) => b.diff(f, "day") / C * 100, k = (b) => Math.min(100, Math.max(0, b)), p = De(() => {
    const b = [];
    let D = f.startOf("month");
    for (; D.isBefore(y); )
      b.push(D), D = D.add(1, "month");
    return b;
  }, [f, y]), R = o == null ? void 0 : o.yearCounts, G = De(() => {
    const b = Math.ceil(C / 7), D = new Array(b).fill(0), z = new Array(b).fill(0), q = (U) => {
      const ee = U.diff(f, "day");
      return ee < 0 || ee >= C ? -1 : Math.floor(ee / 7);
    };
    if (R && R.length)
      for (const U of R) {
        const ee = q(A(U.date));
        ee < 0 || ee >= b || (D[ee] += U.count);
      }
    else
      for (const U of t ?? [])
        for (const ee of U.data ?? []) {
          const re = q(A(ee.startDate));
          re < 0 || re >= b || (D[re] += 1);
        }
    for (const U of t ?? [])
      for (const ee of U.data ?? []) {
        const re = q(A(ee.startDate));
        if (re < 0 || re >= b)
          continue;
        const Y = ee.readiness === "sin_chofer" ? 2 : ee.readiness === "sin_avisar" ? 1 : 0;
        Y > z[re] && (z[re] = Y);
      }
    const O = D.length ? Math.max(...D) : 0;
    if (O <= 0)
      return D.map((U, ee) => ({ h: 0, sev: z[ee] }));
    const M = D.filter((U) => U > 0).sort((U, ee) => U - ee), P = M.length >> 1, N = M.length % 2 ? M[P] : (M[P - 1] + M[P]) / 2, I = N > 0 ? O / N : 1, X = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, I)))));
    return D.map((U, ee) => ({ h: U > 0 ? Math.min(100, 100 * Math.pow(U / O, X)) : 0, sev: z[ee] }));
  }, [t, R, f, C]), L = v(d), T = (b) => {
    const { startDate: D, endDate: z } = Qt(b, r), q = k(v(D));
    return { left: q, width: k(v(z)) - q, startDate: D, endDate: z };
  }, u = T(e), g = c ? T(c.d) : null, w = (b) => `${b.date()} ${a[b.month()]}`, E = (b) => {
    var q;
    const D = (q = i.current) == null ? void 0 : q.getBoundingClientRect();
    if (!D)
      return null;
    const z = Math.min(1, Math.max(0, (b - D.left) / D.width));
    return { f: z, d: f.add(Math.round(z * (C - 1)), "day") };
  };
  return /* @__PURE__ */ F(Va, { children: [
    /* @__PURE__ */ F(Ga, { children: [
      "Navegar",
      /* @__PURE__ */ h("br", {}),
      "por fecha"
    ] }),
    /* @__PURE__ */ F(
      Xa,
      {
        ref: i,
        onClick: (b) => {
          const D = E(b.clientX);
          D && n(D.d.toDate());
        },
        onMouseMove: (b) => {
          const D = E(b.clientX);
          D && l({ left: D.f * 100, d: D.d });
        },
        onMouseLeave: () => l(null),
        children: [
          /* @__PURE__ */ h(Ua, { children: p.map((b, D) => /* @__PURE__ */ h("span", { style: { left: `${v(b)}%` }, children: D === 0 || b.month() === 0 ? `${a[b.month()]} ${b.format("YY")}` : a[b.month()] }, D)) }),
          p.map(
            (b, D) => D === 0 ? null : /* @__PURE__ */ h(Ka, { style: { left: `${v(b)}%` } }, D)
          ),
          /* @__PURE__ */ h(Ja, { children: G.map((b, D) => /* @__PURE__ */ h(qa, { $sev: b.sev, style: { height: `${b.h}%` } }, D)) }),
          /* @__PURE__ */ h(ec, { style: { left: `${u.left}%`, width: `${u.width}%` } }),
          /* @__PURE__ */ h(Qa, { style: { left: `${k(L)}%` }, children: /* @__PURE__ */ h("span", { children: "HOY" }) }),
          c && g && /* @__PURE__ */ F(Oe, { children: [
            /* @__PURE__ */ h(tc, { style: { left: `${g.left}%`, width: `${g.width}%` } }),
            /* @__PURE__ */ h(nc, { style: { left: `${c.left}%` } }),
            /* @__PURE__ */ h(rc, { style: { left: `${c.left}%` }, children: `Ir a ${w(c.d)}` })
          ] })
        ]
      }
    )
  ] });
}, sc = x.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, ic = x.div`
  position: absolute;
  top: 0;
  bottom: ${({ $footer: e }) => e ? lo : 0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, ac = x.div`
  position: relative;
`, cc = ({
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
  onMultiTimeRangeSelect: y,
  clickToAddConfig: C
}) => {
  const { goToDate: v, handleGoToday: k, zoomIn: p, zoomOut: R, zoom: G } = Ke();
  return Vr(
    d,
    () => ({
      goToDate: v,
      goToToday: k,
      setZoom: (L) => {
        if (!po(L))
          return;
        const T = L - G;
        if (T > 0)
          for (let u = 0; u < T; u++)
            p();
        else
          for (let u = 0; u < Math.abs(T); u++)
            R();
      }
    }),
    [v, k, G, p, R]
  ), /* @__PURE__ */ h(
    va,
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
      onMultiTimeRangeSelect: y,
      clickToAddConfig: C
    }
  );
}, Ad = Pn(function({
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
  isLoading: y,
  onEventDrop: C,
  onEventDrag: v,
  draggableConfig: k,
  onTimeRangeSelect: p,
  onMultiTimeRangeSelect: R,
  clickToAddConfig: G
}, L) {
  var N;
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
  ), u = fe(null), g = fe(null), [w, E] = pe((N = u.current) == null ? void 0 : N.clientWidth), b = De(() => A(s), [s]), [D, z] = pe(T.defaultTheme ?? "light"), q = () => {
    z(D === "light" ? "dark" : "light");
  }, O = D === "light" ? Es : _s, M = T.theme ? T.theme[O.mode] : {}, P = {
    ...O,
    colors: {
      ...O.colors,
      ...M
    }
  };
  return Vr(
    L,
    () => ({
      goToDate: (I) => {
        var X;
        return (X = g.current) == null ? void 0 : X.goToDate(I);
      },
      goToToday: () => {
        var I;
        return (I = g.current) == null ? void 0 : I.goToToday();
      },
      setZoom: (I) => {
        var X;
        return (X = g.current) == null ? void 0 : X.setZoom(I);
      }
    }),
    []
  ), Jt(() => {
    const I = () => {
      u.current && E(u.current.clientWidth);
    };
    return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
  }, []), /* @__PURE__ */ F(Oe, { children: [
    /* @__PURE__ */ h(Ds, {}),
    /* @__PURE__ */ h(Ms, { theme: P, children: /* @__PURE__ */ h(ca, { lang: T.lang, translations: T.translations, children: /* @__PURE__ */ h(
      xi,
      {
        data: r,
        isLoading: !!y,
        config: T,
        onRangeChange: i,
        defaultStartDate: b,
        handleToggleDisplayActiveUnits: l,
        onClearFilterData: a,
        toolbarActions: d,
        children: /* @__PURE__ */ F(sc, { id: uo, children: [
          /* @__PURE__ */ h(
            ic,
            {
              showScroll: !!r.length,
              $footer: T.showOverview !== !1 && !!r.length,
              id: Ge,
              ref: u,
              children: /* @__PURE__ */ h(ac, { children: /* @__PURE__ */ h(
                cc,
                {
                  data: r,
                  baseData: n,
                  categories: t,
                  onTileClick: c,
                  topBarWidth: w ?? 0,
                  onItemClick: f,
                  toggleTheme: q,
                  onEventDrop: C,
                  onEventDrag: v,
                  draggableConfig: k,
                  schedulerRef: g,
                  onTimeRangeSelect: p,
                  onMultiTimeRangeSelect: R,
                  clickToAddConfig: G
                }
              ) })
            }
          ),
          T.showOverview !== !1 && !!r.length && /* @__PURE__ */ h(oc, {})
        ] })
      }
    ) }) })
  ] });
}), lc = x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, dc = x.button`
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
`, uc = x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, fc = x.p`
  ${kt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, br = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = Je(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ h(lc, { intent: e, children: /* @__PURE__ */ F(dc, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ h(uc, { children: t }),
    /* @__PURE__ */ h(fc, { children: l })
  ] }) });
}, hc = x.div`
  min-width: ${Le + "px"};
  max-width: ${Le + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, pc = x.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({ $height: e }) => e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Le}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, mc = x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`, gc = x.input`
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
`, yc = x.div`
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
`, vc = Xe`
  from { opacity: 1; }
  to { opacity: 0; }
`, wr = x.div`
  ${({ $fading: e }) => e && Mt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${vc} 180ms ease forwards;
      }
    `}
`, xc = x.button`
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
`, bc = Xe`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`, wc = x.div`
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
    animation: ${bc} 200ms ease-out;
  }
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Sc = x.div`
  display: flex;
  align-items: center;
`, Cc = x.div`
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
`, Mc = x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, kc = x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Sr = x.p`
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
`, $c = (e) => !!e && /^(https?:|data:|blob:|\/)/.test(e), Dc = () => /* @__PURE__ */ F("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ h("rect", { x: "4.5", y: "2.5", width: "15", height: "17.5", rx: "3.4" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "4.6", width: "10.8", height: "2.4", rx: ".7", fill: "#fff", fillOpacity: ".5" }),
  /* @__PURE__ */ h("rect", { x: "6.6", y: "8.6", width: "10.8", height: "5", rx: "1.3", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "7.4", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" }),
  /* @__PURE__ */ h("circle", { cx: "16.6", cy: "17.4", r: "1.05", fill: "#fff", fillOpacity: ".92" })
] }), Ec = () => /* @__PURE__ */ F("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ h("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "1.5" }),
  /* @__PURE__ */ h("path", { d: "M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" })
] }), _c = ({ id: e, item: r, rows: t, onItemClick: n, isSubcontract: o }) => /* @__PURE__ */ h(
  wc,
  {
    title: r.title,
    clickable: typeof n == "function",
    rows: t,
    $isSubcontract: o,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ F(Sc, { children: [
      /* @__PURE__ */ h(Cc, { $provider: o, children: $c(r.icon) ? /* @__PURE__ */ h(Mc, { src: r.icon, alt: "" }) : o ? /* @__PURE__ */ h(Ec, {}) : /* @__PURE__ */ h(Dc, {}) }),
      /* @__PURE__ */ F(kc, { children: [
        /* @__PURE__ */ h(Sr, { isMain: !0, children: r.title }),
        /* @__PURE__ */ h(Sr, { children: r.subtitle })
      ] })
    ] })
  }
), Tc = x.div`
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
`, Ac = x.span`
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
`, Pc = x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme: e, $variant: r }) => r === "subcontract" ? e.colors.subcontractText : e.colors.accent};
  flex-shrink: 0;
`, Oc = x.div`
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
`, Cr = ({
  label: e,
  count: r,
  isCollapsed: t,
  onToggle: n,
  variant: o = "category"
}) => /* @__PURE__ */ F(Tc, { $variant: o, onClick: n, title: e, children: [
  /* @__PURE__ */ h(Oc, { $collapsed: t, children: /* @__PURE__ */ h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ h(
    "path",
    {
      d: "M3 4.5L6 7.5L9 4.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }) }),
  /* @__PURE__ */ h(Ac, { $variant: o, children: e }),
  /* @__PURE__ */ h(Pc, { $variant: o, children: r })
] }), Ic = ({
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
  fadingGroups: y,
  onToggleGroup: C,
  allGroupIds: v,
  onExpandAll: k,
  onCollapseAll: p
}) => {
  const [R, G] = pe(!1), L = Je(), T = () => G((M) => !M), u = r ? [...r].sort((M, P) => M.maxPassengers - P.maxPassengers) : [], g = u.length > 0, w = v.length > 0, E = w && f.size === v.length;
  w && f.size;
  const b = e.filter((M) => M.isSubcontract), D = L.subcontract ?? "Subcontract", z = (M) => {
    const P = e.indexOf(M);
    return /* @__PURE__ */ h(
      _c,
      {
        id: M.id,
        item: M.label,
        rows: n[P],
        onItemClick: d,
        isSubcontract: M.isSubcontract
      },
      M.id
    );
  }, q = (M) => {
    const P = e.filter(
      (U) => !U.isSubcontract && U.categoryId === M.id
    );
    if (P.length === 0)
      return null;
    const N = f.has(M.id), I = y.has(M.id), X = M.name;
    return /* @__PURE__ */ F("div", { children: [
      /* @__PURE__ */ h(
        Cr,
        {
          label: X,
          count: P.length,
          isCollapsed: N || I,
          onToggle: () => C(M.id),
          variant: "category"
        }
      ),
      !N && /* @__PURE__ */ h(wr, { $fading: I, children: P.map(z) })
    ] }, M.id);
  }, O = e.filter(
    (M) => !M.isSubcontract && (!M.categoryId || !g)
  );
  return /* @__PURE__ */ F(hc, { children: [
    /* @__PURE__ */ F(pc, { $height: t, children: [
      /* @__PURE__ */ F(mc, { children: [
        /* @__PURE__ */ F(yc, { isFocused: R, children: [
          /* @__PURE__ */ h(
            gc,
            {
              placeholder: L.search,
              value: l,
              onChange: a,
              onFocus: T,
              onBlur: T
            }
          ),
          /* @__PURE__ */ h(rn, { iconName: "search" })
        ] }),
        w && /* @__PURE__ */ h(
          xc,
          {
            title: E ? "Expand all" : "Collapse all",
            onClick: E ? k : p,
            $allCollapsed: E,
            children: /* @__PURE__ */ h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: E ? /* @__PURE__ */ F(Oe, { children: [
              /* @__PURE__ */ h("path", { d: "M4 6.5L8 3L12 6.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 13L8 9.5L12 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) : /* @__PURE__ */ F(Oe, { children: [
              /* @__PURE__ */ h("path", { d: "M4 3L8 6.5L12 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ h("path", { d: "M4 9.5L8 13L12 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ h(
        br,
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
    g ? u.map(q) : O.map(z),
    g && O.length > 0 && O.map(z),
    b.length > 0 && /* @__PURE__ */ F(Oe, { children: [
      /* @__PURE__ */ h(
        Cr,
        {
          label: D,
          count: b.length,
          isCollapsed: f.has("__subcontract__") || y.has("__subcontract__"),
          onToggle: () => C("__subcontract__"),
          variant: "subcontract"
        }
      ),
      !f.has("__subcontract__") && /* @__PURE__ */ h(wr, { $fading: y.has("__subcontract__"), children: b.map(z) })
    ] }),
    /* @__PURE__ */ h(
      br,
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
}, Yc = x.div`
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
`, Rc = Xe`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Lc = x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Rc} 1s infinite;
`, Nc = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ h(Yc, { position: r, children: /* @__PURE__ */ h(Lc, {}) }) : null, Tn = Nc, qe = (e, r) => {
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
    topText: y,
    bottomText: C,
    strokeStyle: v,
    labelBetweenCells: k
  } = e;
  if (t.beginPath(), t.strokeStyle = v ?? r.colors.border, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), k ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = a;
    const p = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.accent, t.fillText(l, p, c);
  }
  if (d && f && y && C) {
    t.fillStyle = f, t.fillRect(n, o, s, i), t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = y.font;
    const p = n + s / 2 - t.measureText(y.label).width / 2;
    t.fillStyle = y.color, t.fillText(y.label, p, y.y), t.font = C.font;
    const R = n + s / 2 - t.measureText(C.label).width / 2;
    t.fillStyle = C.color, t.fillText(C.label, R, C.y);
  }
}, An = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Bc = (e, r, t, n) => {
  const o = wt - it / As, s = wt - it / Ps, i = Ue + Dt;
  let c = 0;
  for (let l = 0; l < r; l++) {
    const a = ho(
      A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(l, "days")
    ), d = a.isCurrentDay;
    if (qe(
      {
        ctx: e,
        x: c,
        y: i,
        width: Te,
        height: it,
        isBottomRow: !0,
        // OPAQUE today fill (currentDay, same as the grid's today column) — the old `today+"26"` was 15% alpha, so
        // events scrolling under the header showed through the HOY cell.
        fillStyle: d ? n.colors.currentDay : a.isBusinessDay ? n.colors.gridBackground : n.colors.primary,
        topText: {
          y: o,
          label: d ? "" : a.dayName.toUpperCase(),
          font: We.bottomRow.name,
          color: An({ isCurrent: !1, isBusinessDay: a.isBusinessDay }, n)
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: d ? `700 10px ${ze}` : We.bottomRow.number,
          color: d ? n.colors.today : An(
            { isCurrent: !1, isBusinessDay: a.isBusinessDay, variant: "bottomRow" },
            n
          )
        }
      },
      n
    ), d) {
      const C = c + Te / 2, v = o - 13 / 2;
      e.save(), e.fillStyle = n.colors.today, e.beginPath(), e.roundRect ? e.roundRect(C - 30 / 2, v, 30, 13, 5) : e.rect(C - 30 / 2, v, 30, 13), e.fill(), e.fillStyle = "#fff", e.font = `800 8.5px ${ze}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("HOY", C, v + 13 / 2 + 0.5), e.restore();
    }
    c += Te;
  }
}, Hc = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Be;
  const s = Ue;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= mn && (c = 0);
    const a = fo(t, l) * Be;
    qe(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: Dt,
        textYPos: co,
        label: A().month(c).format("MMMM").toUpperCase(),
        font: We.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, zc = (e, r, t) => {
  let o = 0, s = 0, i = A(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * Te + Te;
  for (let c = 0; c < mn; c++)
    i > mn - 1 && (i = 0), s = A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * Te, qe(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Ue,
        textYPos: Bn,
        label: A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase() + `                                                                                                  ${A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,
        font: We.topRow
      },
      t
    ), o += s, i++;
}, Fc = (e, r, t, n) => {
  const o = 7 * Te, s = Ue, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = A(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let f = (c + a) % cr;
    f <= 0 && (f += cr), d !== 1 && a === 0 && (l = -d * Te + Te), qe(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: Dt,
        textYPos: co,
        label: `${t.toUpperCase()} ${f}`,
        font: We.middleRow
      },
      n
    ), l += o;
  }
}, Wc = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.currentDay : n ? r.colors.primary : r.colors.secondary;
}, jc = (e, r, t, n, o) => {
  const s = wt - it / 1.6, i = wt - it / 4.5, c = Ue + Dt;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), f = d.isSame(A(), "week");
    qe(
      {
        ctx: e,
        x: l,
        y: c,
        width: St,
        height: it,
        isBottomRow: !0,
        // HOY marker (§22.3): a teal wash + bold teal week number, distinct from the sage/blue current-cell tint.
        fillStyle: f ? o.colors.today + "26" : Wc({ isCurrent: f, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: f ? `700 14px ${ze}` : We.bottomRow.name,
          color: f ? o.colors.today : An({ isCurrent: f }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: We.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += St;
  }
}, Zc = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (ur(s) - t + 1) * Be, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = ur(s + l) * Be), d + a > i && l > 0 && (a = Math.ceil((i - d) / Be) * Be), qe(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Ue,
        textYPos: Bn,
        label: (s + l).toString(),
        font: We.topRow
      },
      n
    ), c += a, d += a, l++;
}, Vc = (e, r, t, n) => {
  const o = Math.floor(r / Ut) + 2, s = Ut * Ye;
  let l = -A(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ye + 0.5 * Ye;
  for (let a = 0; a < o; a++) {
    const d = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD/MM/YYYY").toUpperCase();
    qe(
      {
        ctx: e,
        x: l,
        y: Ct,
        width: s,
        height: It,
        textYPos: Ct + It / 2 + 2,
        label: d,
        font: We.bottomRow.number
      },
      n
    ), l += s;
  }
}, Gc = (e, r, t, n) => {
  const o = Math.ceil(r / Ut), s = A(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * Ye;
  for (let f = 0; f < a; f++) {
    const y = A(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), v = A(`${t.year}-${t.month + f + 1}-01T:23:59:59`).endOf("month"), k = v.format("MMMM").toUpperCase(), p = v.diff(y, "hour") + 1, R = f === 0 ? p * Ye : r * Ye;
    qe(
      {
        ctx: e,
        x: d,
        y: 0,
        width: R,
        height: Ct,
        textYPos: Bn,
        label: k,
        font: We.topRow
      },
      n
    ), d += R;
  }
}, Xc = (e, r, t, n) => {
  let o = 0;
  const s = Ct + It, i = A(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Ye;
  for (let l = 0; l < r; l++) {
    const a = i.add(l, "hours").format("h:00a").toUpperCase();
    qe(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: pn,
        label: a,
        font: We.bottomRow.hoursInDay,
        textYPos: Ct + It + pn / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += Ye;
  }
}, Uc = (e, r, t, n, o, s, i) => {
  switch (r) {
    case 0:
      Zc(e, n, s, i), Hc(e, t, n, i), jc(e, t, n, o, i);
      break;
    case 1:
      zc(e, n, i), Fc(e, n, o, i), Bc(e, t, n, i);
      break;
    case 2:
      Gc(e, t, n, i), Vc(e, t, n, i), Xc(e, t, n, i);
      break;
  }
}, Kc = x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`, Jc = x.div`
  position: sticky;
  left: 0;
  width: ${({ $width: e }) => e}px;
  z-index: 3;
`, qc = x.div`
  height: ${wt}px;
  display: block;
`, Qc = x.canvas``, el = {
  transfer: /* @__PURE__ */ F(Oe, { children: [
    /* @__PURE__ */ h("path", { d: "M4 8h13l-3-3" }),
    /* @__PURE__ */ h("path", { d: "M20 16H7l3 3" })
  ] }),
  sun: /* @__PURE__ */ F(Oe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ h("path", { d: "M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" })
  ] }),
  tour: /* @__PURE__ */ F(Oe, { children: [
    /* @__PURE__ */ h("path", { d: "M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" }),
    /* @__PURE__ */ h("circle", { cx: "12", cy: "10", r: "2.4" })
  ] }),
  person: /* @__PURE__ */ F(Oe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "7.5", r: "3.4" }),
    /* @__PURE__ */ h("path", { d: "M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" })
  ] }),
  check: /* @__PURE__ */ h("path", { d: "M20 6 9 17l-5-5" }),
  warn: /* @__PURE__ */ F(Oe, { children: [
    /* @__PURE__ */ h("path", { d: "M12 3 2 20h20z" }),
    /* @__PURE__ */ h("path", { d: "M12 9v5M12 17h.01" })
  ] }),
  clock: /* @__PURE__ */ F(Oe, { children: [
    /* @__PURE__ */ h("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ h("path", { d: "M12 7.5V12l3 2" })
  ] })
}, Ze = ({
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
    children: el[e]
  }
), tl = x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Le + 16}px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
  background: ${({ theme: e }) => e.colors.gridBackground};
  overflow-x: auto;
`, Mr = x.span`
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
`, nl = x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme: e }) => e.colors.subcontractText};
  background: ${({ theme: e }) => e.colors.subcontractBg};
  border: 1px solid ${({ theme: e }) => e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`, rl = x.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.border};
  flex: none;
`, ol = x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`, sl = x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`, il = x.span`
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
`, al = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
], cl = () => /* @__PURE__ */ F(tl, { children: [
  /* @__PURE__ */ h(Mr, { children: "Leyenda" }),
  /* @__PURE__ */ F(Wt, { children: [
    /* @__PURE__ */ h(Ze, { name: "transfer" }),
    " Transfer"
  ] }),
  /* @__PURE__ */ F(Wt, { children: [
    /* @__PURE__ */ h(Ze, { name: "sun" }),
    " Gira 1 día"
  ] }),
  /* @__PURE__ */ F(Wt, { children: [
    /* @__PURE__ */ h(Ze, { name: "tour" }),
    " Gira multidía"
  ] }),
  /* @__PURE__ */ F(Wt, { children: [
    /* @__PURE__ */ h(nl, { children: "SUB" }),
    " Subcontrato"
  ] }),
  /* @__PURE__ */ h(rl, {}),
  /* @__PURE__ */ F(Mr, { children: [
    "Estado ",
    /* @__PURE__ */ h("em", { children: "franja izq. + punto esq." })
  ] }),
  al.map((e) => /* @__PURE__ */ F(ol, { children: [
    /* @__PURE__ */ h(sl, { style: { background: e.stripe } }),
    /* @__PURE__ */ h(il, { style: { color: e.color }, children: /* @__PURE__ */ h(Ze, { name: e.icon, strokeWidth: e.icon === "check" ? 2.6 : 2.2 }) }),
    e.label
  ] }, e.label))
] }), ll = Pn(function({ zoom: r, topBarWidth: t, showThemeToggle: n, toggleTheme: o }, s) {
  const { week: i } = Je(), { date: c, cols: l, dayOfYear: a, startDate: d, config: f } = Ke(), y = fe(null), C = qt(), v = le(
    (k) => {
      const p = Wn(), G = (r === 2 ? Ts : wt) + 1;
      go(k, p, G), Uc(k, r, l, d, i, a, C);
    },
    [l, a, d, i, r, C]
  );
  return be(() => {
    if (!y.current)
      return;
    const k = y.current.getContext("2d");
    if (!k)
      return;
    const p = () => v(k);
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [v]), be(() => {
    const k = y.current;
    if (!k)
      return;
    k.style.letterSpacing = "1px";
    const p = k.getContext("2d");
    p && v(p);
  }, [c, r, v]), /* @__PURE__ */ F(Kc, { ref: s, children: [
    (f.showTopbar !== !1 || f.showLegend !== !1) && /* @__PURE__ */ F(Jc, { $width: t, children: [
      f.showTopbar !== !1 && /* @__PURE__ */ h(_a, { width: t, showThemeToggle: n, toggleTheme: o }),
      f.showLegend !== !1 && /* @__PURE__ */ h(cl, {})
    ] }),
    /* @__PURE__ */ h(qc, { id: Os, children: /* @__PURE__ */ h(Qc, { ref: y }) })
  ] });
}), dl = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Be;
      break;
    case 2:
      n = Ye;
      break;
    default:
      n = Te;
  }
  const s = e.startDate.startOf("day"), i = e.endDate.startOf("day"), c = r.startDate.startOf("day"), l = r.endDate.startOf("day"), a = () => {
    let d;
    switch (t) {
      case 2:
        d = (e.startDate.diff(r.startDate, "minute") / Pe + 1) * n - n / 2;
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
          e.endDate.diff(e.startDate, "minute") / Pe * n,
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
          e.endDate.diff(r.startDate, "minute") / Pe * n + 0.5 * n,
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
          r.endDate.diff(e.startDate, "minute") / Pe * n,
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
          r.endDate.diff(r.startDate, "minute") / Pe * n,
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
}, ul = (e, r, t, n, o, s) => {
  const i = e * ye + Is, c = r.hour(), l = t.hour();
  let a, d, f, y;
  switch (s) {
    case 2: {
      a = A(n), d = A(o), f = A(r).hour(c).minute(0), y = A(t).hour(l).minute(0);
      break;
    }
    default: {
      a = A(n).hour(0).minute(0), d = A(o).hour(23).minute(59), f = r, y = t;
      break;
    }
  }
  return {
    ...dl(
      { startDate: a, endDate: d },
      { startDate: f, endDate: y },
      s
    ),
    y: i
  };
}, So = (e) => {
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
const fl = Xe`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`, hl = Xe`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`, pl = x.button`
  ${kt}
  position: absolute;
  height: ${Nn}px;
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
    animation: ${fl} 180ms ease-out;
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
        animation: ${hl} 190ms ease-out forwards;
      }
    `}
`, ml = x.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`, gl = x.div`
  position: sticky;
  left: ${Le + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`, kr = x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad: e }) => e && "padding-right: 24px;"}
`, yl = x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`, vl = x.span`
  ${$t}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`, xl = x.span`
  ${$t}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`, bl = x.span`
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
`, wl = x.div`
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
`, $r = x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm: e }) => e ? "3px" : "5px"};
  right: ${({ $sm: e }) => e ? "3px" : "6px"};
`, Dr = x.span`
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
`, Er = x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme: e }) => e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`, Sl = x.div`
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
`, _r = x.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end: e }) => e ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)"};
  color: ${({ $end: e }) => e ? "#3A4C46" : "#183D3D"};
`, Cl = 34, Ml = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
}, kl = "#3E8E5A", $l = "#D98A22", Tr = ({
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
  const { date: d } = Ke(), f = Qt(d, t), { y, x: C, width: v } = ul(
    e,
    f.startDate,
    f.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: k } = qt(), p = fe(null), R = A(r.startDate).isSame(A(r.endDate), "day"), G = r.eventType === Yt.Tour, L = r.eventType === Yt.Transfer, T = R && (G || L), u = (q) => {
    p.current = { x: q.clientX, y: q.clientY }, c && s && (q.preventDefault(), s(r, q));
  }, g = (q) => {
    if (p.current) {
      const O = Math.abs(q.clientX - p.current.x), M = Math.abs(q.clientY - p.current.y);
      Math.sqrt(O * O + M * M) <= 5 && (o == null || o(r)), p.current = null;
    } else
      o == null || o(r);
  }, w = {
    left: `${C}px`,
    top: `${y + l}px`,
    backgroundColor: `${r.bgColor ?? k.defaultTile}`,
    width: `${v}px`,
    color: So(r.bgColor ?? "")
  }, E = !n && r.readiness ? Ml[r.readiness] : null, b = n && r.subcontractConfirmed === !1, D = n ? b ? $l : kl : E == null ? void 0 : E.stripe, z = (q) => /* @__PURE__ */ F(
    pl,
    {
      "data-segment-id": r.segmentId,
      style: w,
      onClick: g,
      onMouseDown: u,
      onDragStart: (O) => O.preventDefault(),
      isDraggable: c,
      isDragging: i,
      $unconfirmed: b,
      $exiting: a,
      children: [
        D && /* @__PURE__ */ h(ml, { style: { background: D } }),
        q
      ]
    }
  );
  return z(
    T ? /* @__PURE__ */ F(Oe, { children: [
      (n || E) && /* @__PURE__ */ h($r, { $sm: !0, children: n ? /* @__PURE__ */ h(Er, { children: "SUB" }) : E && /* @__PURE__ */ h(Dr, { $sm: !0, style: { color: E.color }, children: /* @__PURE__ */ h(Ze, { name: E.icon, strokeWidth: E.icon === "check" ? 2.6 : 2.2 }) }) }),
      /* @__PURE__ */ F(Sl, { $transfer: L, children: [
        /* @__PURE__ */ h(Ze, { name: L ? "transfer" : "sun", strokeWidth: 2.4 }),
        v >= Cl && /* @__PURE__ */ F(Oe, { children: [
          /* @__PURE__ */ h(_r, { children: A(r.startDate).format("HH:mm") }),
          !L && /* @__PURE__ */ h(_r, { $end: !0, children: A(r.endDate).format("HH:mm") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ F(Oe, { children: [
      /* @__PURE__ */ h($r, { children: n ? /* @__PURE__ */ h(Er, { children: "SUB" }) : E && /* @__PURE__ */ h(Dr, { style: { color: E.color }, children: /* @__PURE__ */ h(Ze, { name: E.icon, strokeWidth: E.icon === "check" ? 2.6 : 2.2 }) }) }),
      r.bookingNumber && /* @__PURE__ */ h(bl, { children: r.bookingNumber }),
      /* @__PURE__ */ F(gl, { children: [
        /* @__PURE__ */ F(kr, { $pad: !0, children: [
          /* @__PURE__ */ h(yl, { children: /* @__PURE__ */ h(Ze, { name: L ? "transfer" : "tour" }) }),
          /* @__PURE__ */ h(vl, { children: r.title })
        ] }),
        r.subtitle && /* @__PURE__ */ h(kr, { children: /* @__PURE__ */ h(xl, { children: r.subtitle }) }),
        r.driver && /* @__PURE__ */ F(wl, { children: [
          /* @__PURE__ */ h(Ze, { name: "person" }),
          r.driver
        ] })
      ] })
    ] })
  );
}, Ar = (e, r) => {
  let t = 0;
  for (const n of r)
    e >= n && t++;
  return t * Ne;
}, Dl = Xe`
  from { opacity: 0; }
  to { opacity: 1; }
`, El = x.div`
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
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Dl} 200ms ease-out;
  }
  pointer-events: none;
`, _l = ({
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
    return { nodes: e.map((G, L) => {
      L > 0 && (p += Math.max(e[L - 1].data.length, 1));
      const T = !!(c != null && c.has(G.id));
      if (!G.data.some((u) => u.length > 0)) {
        const u = Ar(p, i);
        return [
          /* @__PURE__ */ h(
            El,
            {
              style: { top: `${p * ye + u}px`, opacity: T ? 0 : void 0, transition: "opacity 180ms ease" },
              children: "Disponible"
            },
            `dispo-${G.id}`
          )
        ];
      }
      return G.data.map(
        (u, g) => u.map((w) => {
          const E = s === w.segmentId, b = o ? o(w) : !1, D = g + p, z = Ar(D, i);
          return k.set(w.segmentId, {
            project: w,
            absoluteRow: D,
            yOffset: z,
            isSubcontract: !!G.isSubcontract
          }), /* @__PURE__ */ h(
            Tr,
            {
              row: D,
              data: w,
              zoom: r,
              isSubcontract: G.isSubcontract,
              onTileClick: t,
              onDragStart: n,
              isDragging: E,
              isDraggable: b,
              yOffset: z,
              exiting: T
            },
            w.segmentId
          );
        })
      );
    }).flat(2), liveMap: k };
  }, [e, t, r, n, o, s, i, c]), d = fe(/* @__PURE__ */ new Map()), f = fe([]), [y, C] = pe([]);
  be(() => () => f.current.forEach(clearTimeout), []), be(() => {
    const k = d.current;
    d.current = a;
    const p = [];
    if (k.forEach((L, T) => {
      a.has(T) || p.push(L);
    }), C((L) => {
      let T = L.filter((u) => !a.has(u.project.segmentId));
      for (const u of p)
        T.some((g) => g.project.segmentId === u.project.segmentId) || (T = [...T, u]);
      return T;
    }), !p.length)
      return;
    const R = new Set(p.map((L) => L.project.segmentId)), G = setTimeout(() => {
      C((L) => L.filter((T) => !R.has(T.project.segmentId)));
    }, 220);
    f.current.push(G);
  }, [a]);
  const v = y.filter((k) => !a.has(k.project.segmentId)).map((k) => /* @__PURE__ */ h(
    Tr,
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
  return /* @__PURE__ */ h(Oe, { children: [...l, ...v] });
}, Tl = _l;
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
const Al = x.div`
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
`, Pl = x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border};
`, Ol = x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`, Il = x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Yl = x.span`
  flex-shrink: 0;
  background: ${({ $type: e }) => e === "transfer" ? "#dbeafe" : "#dcfce7"};
  color: ${({ $type: e }) => e === "transfer" ? "#1e40af" : "#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`, Rl = x.div`
  ${kt}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Ll = x.div`
  font-size: 11px;
  color: ${({ theme: e }) => e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`, Nl = x.div`
  padding: 10px 12px;
`, Bl = x.div`
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
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Yr = x.span`
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Rr = x.span`
  color: ${({ theme: e }) => e.colors.accent};
  font-weight: 600;
`, Hl = x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
`, zl = x.div`
  min-width: 0;
`, Fl = x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`, Wl = x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme: e }) => e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`, Lr = x.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  margin-top: 8px;
`, Et = x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`, _t = x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`, Tt = x.div`
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
const jl = {
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
}, Zl = ({ tooltipData: e, visible: r = !0 }) => {
  const { mouseCoords: t, reservationData: n } = e, o = fe(null), [s, i] = pe("below"), c = Je(), l = { ...jl, ...c.tooltip };
  Jt(() => {
    if (!o.current || !t)
      return;
    const v = o.current, { width: k, height: p } = v.getBoundingClientRect(), R = v.parentElement;
    if (!R)
      return;
    const G = R.getBoundingClientRect(), L = 12, T = 4, u = G.height - t.y, g = G.width - t.x;
    let w = t.x + L, E = t.y + L, b = "below";
    g < k + L && (w = t.x - k - L), u < p + L && (E = t.y - p - L, b = "above"), w = Math.max(T, Math.min(w, G.width - k - T)), E = Math.max(T, Math.min(E, G.height - p - T)), i(b), v.style.left = `${w}px`, v.style.top = `${E}px`;
  }, [t]);
  const a = n.reservationType === Yt.Tour, d = a && n.isOneDayEvent, f = () => a ? d ? "oneday" : "tour" : "transfer", y = () => a ? d ? l.oneDay : l.tour : l.transfer, C = [
    n.groupName && { label: l.groupName, value: n.groupName },
    n.driver && { label: l.driver, value: n.driver },
    n.passengers && { label: l.passengers, value: String(n.passengers) },
    n.flightNumber && { label: l.flightNumber, value: n.flightNumber }
  ].filter(Boolean);
  return /* @__PURE__ */ F(Al, { ref: o, $position: s, $visible: r, children: [
    /* @__PURE__ */ F(Pl, { children: [
      /* @__PURE__ */ F(Ol, { children: [
        /* @__PURE__ */ h(Il, { children: n.bookingNumber }),
        /* @__PURE__ */ h(Yl, { $type: f(), children: y() })
      ] }),
      /* @__PURE__ */ h(Rl, { children: n.eventName }),
      n.client && /* @__PURE__ */ h(Ll, { children: n.client })
    ] }),
    /* @__PURE__ */ F(Nl, { children: [
      /* @__PURE__ */ F(Bl, { children: [
        /* @__PURE__ */ F(Pr, { children: [
          /* @__PURE__ */ h(Or, { children: l.startDate }),
          /* @__PURE__ */ F(Ir, { children: [
            /* @__PURE__ */ h(Yr, { children: n.startDate }),
            " ",
            /* @__PURE__ */ h(Rr, { children: n.startTime })
          ] })
        ] }),
        a && n.endDate && /* @__PURE__ */ F(Pr, { $isEnd: !0, children: [
          /* @__PURE__ */ h(Or, { children: l.endDate }),
          /* @__PURE__ */ F(Ir, { children: [
            /* @__PURE__ */ h(Yr, { children: n.endDate }),
            " ",
            /* @__PURE__ */ h(Rr, { children: n.endTime })
          ] })
        ] })
      ] }),
      C.length > 0 && /* @__PURE__ */ h(Hl, { children: C.map((v, k) => /* @__PURE__ */ F(zl, { children: [
        /* @__PURE__ */ h(Fl, { children: v.label }),
        /* @__PURE__ */ h(Wl, { children: v.value })
      ] }, k)) }),
      (n.departureAddress || n.destinationAddress || n.returnAddress) && /* @__PURE__ */ F(Lr, { children: [
        n.departureAddress && /* @__PURE__ */ F(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.salida }),
          /* @__PURE__ */ h(Tt, { children: n.departureAddress })
        ] }),
        n.destinationAddress && /* @__PURE__ */ F(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.destino }),
          /* @__PURE__ */ h(Tt, { children: n.destinationAddress })
        ] }),
        n.returnAddress && /* @__PURE__ */ F(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.regreso }),
          /* @__PURE__ */ h(Tt, { children: n.returnAddress })
        ] })
      ] }),
      (n.serviceNotes || n.reservationNotes) && /* @__PURE__ */ F(Lr, { children: [
        n.serviceNotes && /* @__PURE__ */ F(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.serviceNotes }),
          /* @__PURE__ */ h(Tt, { children: n.serviceNotes })
        ] }),
        n.reservationNotes && /* @__PURE__ */ F(Et, { children: [
          /* @__PURE__ */ h(_t, { children: l.reservationNotes }),
          /* @__PURE__ */ h(Tt, { children: n.reservationNotes })
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
const Vl = x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`, Gl = x.div`
  position: absolute;
  height: ${Nn}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating: e }) => e ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating: e, $animateToX: r, $animateToY: t }) => e && r !== void 0 && t !== void 0 ? `transform: translate3d(${r}px, ${t}px, 0);` : ""}
`, Xl = x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Nr = x.p`
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
`, Ul = x.p`
  ${kt}
  ${$t}
`, Kl = x.div`
  position: sticky;
  left: ${Le + 16}px;
  overflow: hidden;
`, Jl = x.div`
  position: absolute;
  height: ${Nn}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, ql = x.div`
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
`, Ql = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid: e = !0, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.4)" : "rgba(76, 175, 80, 0.4)" : "rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`, ed = x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`, td = x.div`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid: e, $hasConflict: r }) => e ? r ? "#F44336" : "#4CAF50" : "#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid: e, $hasConflict: r }) => e ? r ? "rgba(244, 67, 54, 0.8)" : "rgba(76, 175, 80, 0.8)" : "rgba(117, 117, 117, 0.8)"};
`, Br = x.div`
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
`, Hr = x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`, zr = x.div`
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
`, Fr = x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, on = x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`, sn = x.div`
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
`, nd = ({
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
    let u = 0;
    for (const g of l)
      g <= T && u++;
    return T * ye + u * Ne;
  }, [f, y] = pe(null), [C, v] = pe(0), k = le((T = 400, u = 300) => {
    const w = t.width, E = 48, b = document.getElementById("react-scheduler");
    if (!b)
      return {
        x: r.x + w + 16,
        y: r.y
      };
    const D = b.scrollLeft, z = b.scrollTop, q = b.clientWidth, O = b.clientHeight, M = r.x - D, P = r.y - z, N = {
      left: Le + 16,
      // Avoid left column
      right: q - 16,
      top: 16,
      bottom: O - 16
    }, I = N.right - (M + w), X = M - N.left, U = N.bottom - (P + E), ee = P - N.top;
    let re, Y;
    return I >= T + 16 ? re = M + w + 16 : X >= T + 16 ? re = M - T - 16 : I >= X ? (re = M + w + 16, re + T > N.right && (re = N.right - T)) : (re = M - T - 16, re < N.left && (re = N.left)), U >= u + 16 ? Y = P + E + 16 : ee >= u + 16 ? Y = P - u - 16 : U >= ee ? (Y = P + E + 16, Y + u > N.bottom && (Y = N.bottom - u)) : (Y = P - u - 16, Y < N.top && (Y = N.top)), re = Math.max(N.left, Math.min(re, N.right - T)), Y = Math.max(N.top, Math.min(Y, N.bottom - u)), {
      x: re + D,
      y: Y + z
    };
  }, [r.x, r.y, t.width]);
  be(() => {
    s === "dragging" && e && C === 0 ? v(r.x) : s === "idle" && v(0);
  }, [s, e, r.x, C]), be(() => {
    y(s === "animating" && e ? { x: 0, y: 0 } : null);
  }, [s, e]);
  const p = De(() => {
    if (!e || !e.totalPassengers || s === "idle" || s === "potential")
      return [];
    const T = [];
    let u = 0;
    for (const g of i) {
      const w = Math.max(g.data.length, 1);
      if (g.capacity !== void 0 && e.totalPassengers > g.capacity)
        for (let E = 0; E < w; E++)
          T.push(u + E);
      u += w;
    }
    return T;
  }, [e, i, s]);
  if (!e || s === "idle" || s === "potential")
    return null;
  const R = s === "animating", G = So(e.bgColor ?? ""), L = () => {
    if (!n)
      return "";
    const T = A(n.startDate).format("MMM D, HH:mm"), u = A(n.endDate).format("HH:mm");
    return `${T} - ${u}`;
  };
  return /* @__PURE__ */ F(Vl, { children: [
    p.map((T) => /* @__PURE__ */ h(
      ed,
      {
        style: {
          top: `${d(T)}px`,
          height: `${ye}px`
        }
      },
      T
    )),
    n && s === "dragging" && /* @__PURE__ */ h(
      Ql,
      {
        $isValid: o,
        $hasConflict: n.hasConflict,
        style: {
          top: `${d(n.resourceIndex)}px`,
          height: `${ye}px`
        }
      }
    ),
    n && s === "dragging" && !c && /* @__PURE__ */ F(Oe, { children: [
      /* @__PURE__ */ h(
        Jl,
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
        ql,
        {
          $isValid: o,
          $hasConflict: n.hasConflict,
          style: {
            left: `${r.x}px`,
            top: `${d(n.resourceIndex) + (ye - 48) / 2}px`
          },
          children: L()
        }
      )
    ] }),
    n && s === "dragging" && c && /* @__PURE__ */ h(
      td,
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
      return /* @__PURE__ */ F(
        Br,
        {
          style: {
            left: `${T.x}px`,
            top: `${T.y}px`
          },
          children: [
            /* @__PURE__ */ F(Hr, { children: [
              /* @__PURE__ */ h(zr, { children: "!" }),
              n.conflicts.length,
              " ",
              n.conflicts.length > 1 ? a.conflicts.detectedPlural : a.conflicts.detected,
              " ",
              a.conflicts.detectedSuffix
            ] }),
            /* @__PURE__ */ h(Fr, { children: n.conflicts.map((u, g) => {
              const w = A(n.startDate).format("YYYY-MM-DD"), E = A(n.endDate).format("YYYY-MM-DD"), b = A(u.event.startDate).format("YYYY-MM-DD"), D = A(u.event.endDate).format("YYYY-MM-DD"), z = A(u.conflictStart).format("YYYY-MM-DD"), q = A(u.conflictEnd).format("YYYY-MM-DD"), O = w !== E, M = b !== D, P = z !== q, N = O ? A(n.startDate).format("MMM D, h:mm A") : A(n.startDate).format("h:mm A"), I = O ? A(n.endDate).format("MMM D, h:mm A") : A(n.endDate).format("h:mm A"), X = M ? A(u.event.startDate).format("MMM D, h:mm A") : A(u.event.startDate).format("h:mm A"), U = M ? A(u.event.endDate).format("MMM D, h:mm A") : A(u.event.endDate).format("h:mm A"), ee = P ? A(u.conflictStart).format("MMM D, h:mm A") : A(u.conflictStart).format("h:mm A"), re = P ? A(u.conflictEnd).format("MMM D, h:mm A") : A(u.conflictEnd).format("h:mm A"), Y = P ? "" : A(u.conflictStart).format("MMM D"), H = n.startDate.getTime(), J = n.endDate.getTime(), te = u.event.startDate.getTime(), $ = u.event.endDate.getTime(), j = H >= te && H < $, S = J > te && J <= $, V = H <= te && J >= $, Z = te <= H && $ >= J;
              let B = !1, m = !1, K = !1, _ = !1, W = "";
              return V || Z ? (B = !0, m = !0, K = !0, _ = !0, W = `⚠️ ${a.conflicts.changeBoth}`) : j && S ? (B = !0, m = !0, K = !0, _ = !0, W = `⚠️ ${a.conflicts.changeBoth}`) : j ? (B = !0, _ = !0, W = `⚠️ ${a.conflicts.changeStart}`) : S && (m = !0, K = !0, W = `⚠️ ${a.conflicts.changeEnd}`), /* @__PURE__ */ F(on, { children: [
                /* @__PURE__ */ F(sn, { children: [
                  a.conflicts.conflictsWith,
                  ": ",
                  u.event.title,
                  u.event.subtitle && ` - ${u.event.subtitle}`
                ] }),
                /* @__PURE__ */ F(pt, { children: [
                  /* @__PURE__ */ h("strong", { children: e.title }),
                  " ",
                  a.conflicts.movingTo,
                  ":",
                  " ",
                  B ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: N }) : N,
                  " ",
                  a.conflicts.to,
                  " ",
                  m ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: I }) : I
                ] }),
                /* @__PURE__ */ F(pt, { children: [
                  /* @__PURE__ */ h("strong", { children: u.event.title }),
                  " ",
                  a.conflicts.currentlyAt,
                  ":",
                  " ",
                  K ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: X }) : X,
                  " ",
                  a.conflicts.to,
                  " ",
                  _ ? /* @__PURE__ */ h("span", { style: { color: "#D32F2F", fontWeight: 700 }, children: U }) : U
                ] }),
                /* @__PURE__ */ F(Wr, { children: [
                  a.conflicts.conflictTime,
                  ": ",
                  Y && `${Y}, `,
                  ee,
                  " - ",
                  re
                ] }),
                W && /* @__PURE__ */ h(pt, { style: {
                  backgroundColor: "#FFEBEE",
                  color: "#C62828",
                  fontWeight: 600,
                  marginTop: "6px",
                  border: "1px solid #EF5350"
                }, children: W })
              ] }, g);
            }) })
          ]
        }
      );
    })(),
    n && o && !n.hasConflict && n.nearbyEvents && n.nearbyEvents.length > 0 && s === "dragging" && (() => {
      const T = k(400, 400);
      return /* @__PURE__ */ F(
        Br,
        {
          style: {
            left: `${T.x}px`,
            top: `${T.y}px`,
            borderColor: "#4CAF50"
          },
          children: [
            /* @__PURE__ */ F(Hr, { style: { color: "#2E7D32" }, children: [
              /* @__PURE__ */ h(zr, { style: { backgroundColor: "#4CAF50" }, children: "✓" }),
              n.nearbyEvents.length,
              " ",
              n.nearbyEvents.length > 1 ? a.conflicts.nearbyEvents : a.conflicts.nearbyEvent
            ] }),
            /* @__PURE__ */ F(Fr, { children: [
              (() => {
                const u = n.nearbyEvents.some((b) => b.position === "before"), g = n.nearbyEvents.some((b) => b.position === "after"), w = A(n.startDate).format("h:mm A"), E = A(n.endDate).format("h:mm A");
                return /* @__PURE__ */ F(on, { style: { backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }, children: [
                  /* @__PURE__ */ F(sn, { style: { color: "#33691E" }, children: [
                    a.conflicts.yourEvent,
                    ": ",
                    e.title,
                    e.subtitle && ` - ${e.subtitle}`
                  ] }),
                  /* @__PURE__ */ F(pt, { style: { fontWeight: 600 }, children: [
                    A(n.startDate).format("MMM D"),
                    ":",
                    " ",
                    u ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: w }) : w,
                    " ",
                    a.conflicts.to,
                    " ",
                    g ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: E }) : E
                  ] }),
                  /* @__PURE__ */ h(pt, { style: {
                    backgroundColor: "#DCEDC8",
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }, children: a.conflicts.sameDay })
                ] });
              })(),
              n.nearbyEvents.map((u, g) => {
                const w = A(u.event.startDate).format("YYYY-MM-DD"), E = A(u.event.endDate).format("YYYY-MM-DD"), b = w !== E, D = b ? A(u.event.startDate).format("MMM D, h:mm A") : A(u.event.startDate).format("h:mm A"), z = b ? A(u.event.endDate).format("MMM D, h:mm A") : A(u.event.endDate).format("h:mm A"), q = A(u.event.startDate).format("MMM D"), O = Math.floor(u.timeGap / (1e3 * 60 * 60)), M = Math.floor(u.timeGap % (1e3 * 60 * 60) / (1e3 * 60)), P = O > 0 ? `${O}h ${M}m` : `${M}m`, N = u.position === "after", I = u.position === "before";
                return /* @__PURE__ */ F(on, { style: { backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }, children: [
                  /* @__PURE__ */ F(sn, { style: { color: "#1B5E20" }, children: [
                    u.event.title,
                    u.event.subtitle && ` - ${u.event.subtitle}`
                  ] }),
                  /* @__PURE__ */ F(pt, { children: [
                    !b && `${q}: `,
                    N ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: D }) : D,
                    " ",
                    a.conflicts.to,
                    " ",
                    I ? /* @__PURE__ */ h("span", { style: { color: "#2E7D32", fontWeight: 700 }, children: z }) : z
                  ] }),
                  /* @__PURE__ */ F(Wr, { style: { backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }, children: [
                    P,
                    " ",
                    u.position === "before" ? a.conflicts.before : a.conflicts.after
                  ] })
                ] }, g);
              })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ h(
      Gl,
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
          color: G
        },
        children: /* @__PURE__ */ h(Xl, { children: /* @__PURE__ */ F(Kl, { children: [
          /* @__PURE__ */ h(Nr, { $bold: !0, children: e.title }),
          e.subtitle && /* @__PURE__ */ h(Nr, { children: e.subtitle }),
          e.description && /* @__PURE__ */ h(Ul, { children: e.description })
        ] }) })
      }
    )
  ] });
}, rd = nd, od = Xe`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`, sd = x.div`
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
  animation: ${od} 1.5s ease-in-out infinite;
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
`, id = ({ selectionBox: e, isSelecting: r }) => !e || !r ? null : /* @__PURE__ */ h(
  sd,
  {
    style: {
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    }
  }
), ad = id, cd = Xe`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, ld = x.div`
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
  animation: ${cd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`, dd = x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`, ud = x.span`
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
`, fd = x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`, hd = x.span`
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
const pd = x.div`
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
`, md = ({ selections: e, onConfirm: r, onClear: t }) => {
  var v;
  const o = Je().multiSelect, s = De(() => e.filter((k) => k.hasConflict).length, [e]), i = e.length === 1 ? (o == null ? void 0 : o.selectionPending) || "selection pending" : (o == null ? void 0 : o.selectionsPending) || "selection(s) pending", c = `${(o == null ? void 0 : o.clickToRemove) || "Click × on selections to remove"} • ${(o == null ? void 0 : o.pressEscToClear) || "Press Esc to clear all"}`, l = (o == null ? void 0 : o.clearAll) || "Clear All", a = e.length === 1 ? (o == null ? void 0 : o.confirmSelection) || "Confirm Selection" : (o == null ? void 0 : o.confirmSelections) || "Confirm Selections", d = e.length === 1 ? (o == null ? void 0 : o.confirmWithConflict) || "Confirm with Conflict" : (o == null ? void 0 : o.confirmWithConflicts) || "Confirm with Conflicts", f = s === 1 ? (o == null ? void 0 : o.conflictWarning) || "1 selection has conflicts" : ((v = o == null ? void 0 : o.conflictsWarning) == null ? void 0 : v.replace("{count}", String(s))) || `${s} selections have conflicts`;
  if (e.length === 0)
    return null;
  const y = s > 0, C = /* @__PURE__ */ F(ld, { $hasConflicts: y, "data-multi-select-ui": !0, children: [
    /* @__PURE__ */ F(dd, { children: [
      /* @__PURE__ */ F(ud, { $hasConflicts: y, children: [
        e.length,
        " ",
        i
      ] }),
      y && /* @__PURE__ */ F(fd, { children: [
        "⚠️ ",
        f
      ] }),
      /* @__PURE__ */ h(hd, { children: c })
    ] }),
    /* @__PURE__ */ F(pd, { children: [
      /* @__PURE__ */ F(jr, { variant: "secondary", onClick: t, children: [
        "✕ ",
        l
      ] }),
      /* @__PURE__ */ h(jr, { variant: "primary", $hasConflicts: y, onClick: r, children: y ? `⚠️ ${d}` : `✓ ${a}` })
    ] })
  ] });
  return Eo(C, document.body);
}, gd = md, yd = Xe`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, vd = x.div`
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
  animation: ${yd} 0.2s ease-out;
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
`, xd = x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict: e }) => e ? "#b45309" : "#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`, bd = x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`, wd = x.button`
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
`, Sd = ({
  selections: e,
  data: r,
  zoom: t,
  startDate: n,
  onRemove: o,
  onUpdate: s,
  separatorRowIndices: i = []
}) => {
  const [c, l] = pe(null), [a, d] = pe({ x: 0, y: 0 }), f = fe(null), y = De(() => {
    switch (t) {
      case 0:
        return Be * 7;
      case 1:
        return Te;
      case 2:
        return Ye;
      default:
        return Te;
    }
  }, [t]), C = De(() => A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0), [n]), v = De(() => e.map((g, w) => {
    let E = 0, b = !1;
    for (const X of r) {
      if (X.id === g.resourceId) {
        b = !0;
        break;
      }
      E += Math.max(X.data.length, 1);
    }
    if (!b)
      return null;
    const D = A(g.startDate), z = A(g.endDate);
    let q, O;
    switch (t) {
      case 0:
        q = Math.floor(D.diff(C, "days") / 7), O = Math.max(1, Math.ceil(z.diff(D, "days") / 7) + 1);
        break;
      case 1:
        q = D.diff(C, "days"), O = Math.max(1, z.diff(D, "days") + 1);
        break;
      case 2:
        q = D.diff(C, "hours"), O = Math.max(1, z.diff(D, "hours") + 1);
        break;
      default:
        q = 0, O = 1;
    }
    const M = q * y;
    let P = 0;
    for (const X of i)
      X <= E && P++;
    const N = E * ye + P * Ne, I = O * y;
    return {
      index: w,
      selection: g,
      x: M,
      y: N,
      width: I,
      height: ye
    };
  }), [e, r, t, C, y]), k = (g, w) => {
    const E = A(g).format("MMM D"), b = A(w).format("MMM D");
    return E === b ? E : `${E} - ${b}`;
  }, p = (g) => !g.hasConflict || !g.conflicts ? "" : `⚠️ Conflicts with:
${g.conflicts.map((E) => {
    const b = (E.overlapDuration / 36e5).toFixed(1);
    return `• ${E.event.title} (${b}h overlap)`;
  }).join(`
`)}`, R = le(
    (g) => {
      let w = 0;
      for (const E of r) {
        const b = Math.max(E.data.length, 1);
        if (g >= w * ye && g < (w + b) * ye)
          return {
            resourceId: E.id,
            resourceLabel: E.label
          };
        w += b;
      }
      return null;
    },
    [r]
  ), G = le(
    (g) => {
      const w = Math.floor(g / y);
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
  ), L = le(
    (g, w) => {
      !s || (g.preventDefault(), g.stopPropagation(), !v[w]) || (f.current = { x: g.clientX, y: g.clientY }, l(w), d({ x: 0, y: 0 }));
    },
    [s, v]
  ), T = le(
    (g) => {
      if (c === null || !f.current)
        return;
      const w = g.clientX - f.current.x, E = g.clientY - f.current.y, b = Math.round(w / y) * y, D = Math.round(E / ye) * ye;
      d({ x: b, y: D });
    },
    [c, y]
  ), u = le(() => {
    if (c === null || !s) {
      l(null), d({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const g = v[c];
    if (!g) {
      l(null), d({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const w = g.x + a.x, E = g.y + a.y, b = R(E + ye / 2);
    if (!b) {
      l(null), d({ x: 0, y: 0 }), f.current = null;
      return;
    }
    const D = G(w), z = e[c], q = z.endDate.getTime() - z.startDate.getTime(), O = new Date(D.getTime() + q);
    s(c, {
      startDate: D,
      endDate: O,
      resourceId: b.resourceId,
      resourceLabel: b.resourceLabel
    }), l(null), d({ x: 0, y: 0 }), f.current = null;
  }, [c, a, v, e, s, R, G]);
  return be(() => {
    if (c !== null)
      return document.addEventListener("mousemove", T), document.addEventListener("mouseup", u), () => {
        document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", u);
      };
  }, [c, T, u]), /* @__PURE__ */ h(Oe, { children: v.map((g) => {
    if (!g)
      return null;
    const w = g.selection.hasConflict || !1, E = c === g.index, b = E ? g.x + a.x : g.x, D = E ? g.y + a.y : g.y;
    return /* @__PURE__ */ F(
      vd,
      {
        $hasConflict: w,
        $isDragging: E,
        style: {
          left: b,
          top: D,
          width: g.width,
          height: g.height
        },
        "data-multi-select-ui": !0,
        onMouseDown: (z) => L(z, g.index),
        children: [
          w && /* @__PURE__ */ h(bd, { title: p(g.selection), children: "⚠️" }),
          /* @__PURE__ */ h(xd, { $hasConflict: w, children: k(g.selection.startDate, g.selection.endDate) }),
          /* @__PURE__ */ h(
            wd,
            {
              onClick: (z) => {
                z.stopPropagation(), o(g.index);
              },
              onMouseDown: (z) => z.stopPropagation(),
              title: w ? "Remove conflicting selection" : "Remove selection",
              children: "×"
            }
          )
        ]
      },
      g.index
    );
  }) });
}, Cd = Sd, Md = x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme: e }) => e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme: e }) => e.colors.today}12;
`, kd = ({ zoom: e, startDate: r }) => {
  const { cols: t } = Ke(), n = De(() => {
    if (e === 2)
      return null;
    const o = e === 0 ? Be * 7 : Te, s = A().year(r.year).month(r.month).date(r.dayOfMonth).startOf("day"), i = A().startOf("day"), c = e === 0 ? i.startOf("week").diff(s.startOf("week"), "week") : i.diff(s, "days");
    return c < 0 || c >= t ? null : { x: c * o, width: o };
  }, [e, r, t]);
  return n ? /* @__PURE__ */ h(Md, { style: { left: `${n.x}px`, width: `${n.width}px` }, "aria-hidden": !0 }) : null;
}, $d = kd;
export {
  Ad as Scheduler
};
