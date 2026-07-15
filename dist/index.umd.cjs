(function($e,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],a):($e=typeof globalThis<"u"?globalThis:$e||self,a($e["react-scheduler"]={},$e["react/jsx-runtime"],$e.React,$e.ReactDOM))})(this,function($e,a,p,oo){"use strict";var _l=Object.defineProperty;var Tl=($e,a,p)=>a in $e?_l($e,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):$e[a]=p;var ro=($e,a,p)=>(Tl($e,typeof a!="symbol"?a+"":a,p),p);function so(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const oe=so(p);var Ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pt={},io={get exports(){return pt},set exports(e){pt=e}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _n;function ao(){if(_n)return ge;_n=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function k(g){if(typeof g=="object"&&g!==null){var Y=g.$$typeof;switch(Y){case e:switch(g=g.type,g){case t:case o:case r:case c:case d:return g;default:switch(g=g&&g.$$typeof,g){case l:case i:case u:case v:case h:case s:return g;default:return Y}}case n:return Y}}}return ge.ContextConsumer=i,ge.ContextProvider=s,ge.Element=e,ge.ForwardRef=u,ge.Fragment=t,ge.Lazy=v,ge.Memo=h,ge.Portal=n,ge.Profiler=o,ge.StrictMode=r,ge.Suspense=c,ge.SuspenseList=d,ge.isAsyncMode=function(){return!1},ge.isConcurrentMode=function(){return!1},ge.isContextConsumer=function(g){return k(g)===i},ge.isContextProvider=function(g){return k(g)===s},ge.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},ge.isForwardRef=function(g){return k(g)===u},ge.isFragment=function(g){return k(g)===t},ge.isLazy=function(g){return k(g)===v},ge.isMemo=function(g){return k(g)===h},ge.isPortal=function(g){return k(g)===n},ge.isProfiler=function(g){return k(g)===o},ge.isStrictMode=function(g){return k(g)===r},ge.isSuspense=function(g){return k(g)===c},ge.isSuspenseList=function(g){return k(g)===d},ge.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===t||g===o||g===r||g===c||g===d||g===b||typeof g=="object"&&g!==null&&(g.$$typeof===v||g.$$typeof===h||g.$$typeof===s||g.$$typeof===i||g.$$typeof===u||g.$$typeof===x||g.getModuleId!==void 0)},ge.typeOf=k,ge}var me={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tn;function co(){return Tn||(Tn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),x=!1,k=!1,g=!1,Y=!1,W=!1,N;N=Symbol.for("react.module.reference");function $(E){return!!(typeof E=="string"||typeof E=="function"||E===t||E===o||W||E===r||E===c||E===d||Y||E===b||x||k||g||typeof E=="object"&&E!==null&&(E.$$typeof===v||E.$$typeof===h||E.$$typeof===s||E.$$typeof===i||E.$$typeof===u||E.$$typeof===N||E.getModuleId!==void 0))}function f(E){if(typeof E=="object"&&E!==null){var Z=E.$$typeof;switch(Z){case e:var ne=E.type;switch(ne){case t:case o:case r:case c:case d:return ne;default:var K=ne&&ne.$$typeof;switch(K){case l:case i:case u:case v:case h:case s:return K;default:return Z}}case n:return Z}}}var y=i,S=s,D=e,O=u,L=t,J=v,Q=h,A=n,_=o,P=r,H=c,F=d,R=!1,ee=!1;function se(E){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ae(E){return ee||(ee=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function z(E){return f(E)===i}function B(E){return f(E)===s}function U(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function te(E){return f(E)===u}function C(E){return f(E)===t}function I(E){return f(E)===v}function M(E){return f(E)===h}function V(E){return f(E)===n}function q(E){return f(E)===o}function j(E){return f(E)===r}function m(E){return f(E)===c}function X(E){return f(E)===d}me.ContextConsumer=y,me.ContextProvider=S,me.Element=D,me.ForwardRef=O,me.Fragment=L,me.Lazy=J,me.Memo=Q,me.Portal=A,me.Profiler=_,me.StrictMode=P,me.Suspense=H,me.SuspenseList=F,me.isAsyncMode=se,me.isConcurrentMode=ae,me.isContextConsumer=z,me.isContextProvider=B,me.isElement=U,me.isForwardRef=te,me.isFragment=C,me.isLazy=I,me.isMemo=M,me.isPortal=V,me.isProfiler=q,me.isStrictMode=j,me.isSuspense=m,me.isSuspenseList=X,me.isValidElementType=$,me.typeOf=f}()),me}(function(e){process.env.NODE_ENV==="production"?e.exports=ao():e.exports=co()})(io);function lo(e){function n(z,B,U,te,C){for(var I=0,M=0,V=0,q=0,j,m,X=0,E=0,Z,ne=Z=j=0,K=0,ce=0,ue=0,de=0,ie=U.length,fe=ie-1,pe,G="",re="",le="",xe="",we;K<ie;){if(m=U.charCodeAt(K),K===fe&&M+q+V+I!==0&&(M!==0&&(m=M===47?10:47),q=V=I=0,ie++,fe++),M+q+V+I===0){if(K===fe&&(0<ce&&(G=G.replace(v,"")),0<G.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:G+=U.charAt(K)}m=59}switch(m){case 123:for(G=G.trim(),j=G.charCodeAt(0),Z=1,de=++K;K<ie;){switch(m=U.charCodeAt(K)){case 123:Z++;break;case 125:Z--;break;case 47:switch(m=U.charCodeAt(K+1)){case 42:case 47:e:{for(ne=K+1;ne<fe;++ne)switch(U.charCodeAt(ne)){case 47:if(m===42&&U.charCodeAt(ne-1)===42&&K+2!==ne){K=ne+1;break e}break;case 10:if(m===47){K=ne+1;break e}}K=ne}}break;case 91:m++;case 40:m++;case 34:case 39:for(;K++<fe&&U.charCodeAt(K)!==m;);}if(Z===0)break;K++}switch(Z=U.substring(de,K),j===0&&(j=(G=G.replace(h,"").trim()).charCodeAt(0)),j){case 64:switch(0<ce&&(G=G.replace(v,"")),m=G.charCodeAt(1),m){case 100:case 109:case 115:case 45:ce=B;break;default:ce=H}if(Z=n(B,ce,Z,m,C+1),de=Z.length,0<R&&(ce=t(H,G,ue),we=l(3,Z,ce,B,A,Q,de,m,C,te),G=ce.join(""),we!==void 0&&(de=(Z=we.trim()).length)===0&&(m=0,Z="")),0<de)switch(m){case 115:G=G.replace(y,i);case 100:case 109:case 45:Z=G+"{"+Z+"}";break;case 107:G=G.replace(W,"$1 $2"),Z=G+"{"+Z+"}",Z=P===1||P===2&&s("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=G+Z,te===112&&(Z=(re+=Z,""))}else Z="";break;default:Z=n(B,t(B,G,ue),Z,te,C+1)}le+=Z,Z=ue=ce=ne=j=0,G="",m=U.charCodeAt(++K);break;case 125:case 59:if(G=(0<ce?G.replace(v,""):G).trim(),1<(de=G.length))switch(ne===0&&(j=G.charCodeAt(0),j===45||96<j&&123>j)&&(de=(G=G.replace(" ",":")).length),0<R&&(we=l(1,G,B,z,A,Q,re.length,te,C,te))!==void 0&&(de=(G=we.trim()).length)===0&&(G="\0\0"),j=G.charCodeAt(0),m=G.charCodeAt(1),j){case 0:break;case 64:if(m===105||m===99){xe+=G+U.charAt(K);break}default:G.charCodeAt(de-1)!==58&&(re+=o(G,j,m,G.charCodeAt(2)))}ue=ce=ne=j=0,G="",m=U.charCodeAt(++K)}}switch(m){case 13:case 10:M===47?M=0:1+j===0&&te!==107&&0<G.length&&(ce=1,G+="\0"),0<R*se&&l(0,G,B,z,A,Q,re.length,te,C,te),Q=1,A++;break;case 59:case 125:if(M+q+V+I===0){Q++;break}default:switch(Q++,pe=U.charAt(K),m){case 9:case 32:if(q+I+M===0)switch(X){case 44:case 58:case 9:case 32:pe="";break;default:m!==32&&(pe=" ")}break;case 0:pe="\\0";break;case 12:pe="\\f";break;case 11:pe="\\v";break;case 38:q+M+I===0&&(ce=ue=1,pe="\f"+pe);break;case 108:if(q+M+I+_===0&&0<ne)switch(K-ne){case 2:X===112&&U.charCodeAt(K-3)===58&&(_=X);case 8:E===111&&(_=E)}break;case 58:q+M+I===0&&(ne=K);break;case 44:M+V+q+I===0&&(ce=1,pe+="\r");break;case 34:case 39:M===0&&(q=q===m?0:q===0?m:q);break;case 91:q+M+V===0&&I++;break;case 93:q+M+V===0&&I--;break;case 41:q+M+I===0&&V--;break;case 40:if(q+M+I===0){if(j===0)switch(2*X+3*E){case 533:break;default:j=1}V++}break;case 64:M+V+q+I+ne+Z===0&&(Z=1);break;case 42:case 47:if(!(0<q+I+V))switch(M){case 0:switch(2*m+3*U.charCodeAt(K+1)){case 235:M=47;break;case 220:de=K,M=42}break;case 42:m===47&&X===42&&de+2!==K&&(U.charCodeAt(de+2)===33&&(re+=U.substring(de,K+1)),pe="",M=0)}}M===0&&(G+=pe)}E=X,X=m,K++}if(de=re.length,0<de){if(ce=B,0<R&&(we=l(2,re,ce,z,A,Q,de,te,C,te),we!==void 0&&(re=we).length===0))return xe+re+le;if(re=ce.join(",")+"{"+re+"}",P*_!==0){switch(P!==2||s(re,2)||(_=0),_){case 111:re=re.replace($,":-moz-$1")+re;break;case 112:re=re.replace(N,"::-webkit-input-$1")+re.replace(N,"::-moz-$1")+re.replace(N,":-ms-input-$1")+re}_=0}}return xe+re+le}function t(z,B,U){var te=B.trim().split(g);B=te;var C=te.length,I=z.length;switch(I){case 0:case 1:var M=0;for(z=I===0?"":z[0]+" ";M<C;++M)B[M]=r(z,B[M],U).trim();break;default:var V=M=0;for(B=[];M<C;++M)for(var q=0;q<I;++q)B[V++]=r(z[q]+" ",te[M],U).trim()}return B}function r(z,B,U){var te=B.charCodeAt(0);switch(33>te&&(te=(B=B.trim()).charCodeAt(0)),te){case 38:return B.replace(Y,"$1"+z.trim());case 58:return z.trim()+B.replace(Y,"$1"+z.trim());default:if(0<1*U&&0<B.indexOf("\f"))return B.replace(Y,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+B}function o(z,B,U,te){var C=z+";",I=2*B+3*U+4*te;if(I===944){z=C.indexOf(":",9)+1;var M=C.substring(z,C.length-1).trim();return M=C.substring(0,z).trim()+M+";",P===1||P===2&&s(M,1)?"-webkit-"+M+M:M}if(P===0||P===2&&!s(C,1))return C;switch(I){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(J,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return M=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+C+"-ms-flex-pack"+M+C;case 1005:return x.test(C)?C.replace(b,":-webkit-")+C.replace(b,":-moz-")+C:C;case 1e3:switch(M=C.substring(13).trim(),B=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(B)){case 226:M=C.replace(f,"tb");break;case 232:M=C.replace(f,"tb-rl");break;case 220:M=C.replace(f,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+M+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(B=(C=z).length-10,M=(C.charCodeAt(B)===33?C.substring(0,B):C).substring(z.indexOf(":",7)+1).trim(),I=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:C=C.replace(M,"-webkit-"+M)+";"+C;break;case 207:case 102:C=C.replace(M,"-webkit-"+(102<I?"inline-":"")+"box")+";"+C.replace(M,"-webkit-"+M)+";"+C.replace(M,"-ms-"+M+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return M=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+M+"-ms-flex-"+M+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(D,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(D,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(L.test(z)===!0)return(M=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?o(z.replace("stretch","fill-available"),B,U,te).replace(":fill-available",":stretch"):C.replace(M,"-webkit-"+M)+C.replace(M,"-moz-"+M.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,U+te===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+C}return C}function s(z,B){var U=z.indexOf(B===1?":":"{"),te=z.substring(0,B!==3?U:10);return U=z.substring(U+1,z.length-1),ee(B!==2?te:te.replace(O,"$1"),U,B)}function i(z,B){var U=o(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return U!==B+";"?U.replace(S," or ($1)").substring(4):"("+B+")"}function l(z,B,U,te,C,I,M,V,q,j){for(var m=0,X=B,E;m<R;++m)switch(E=F[m].call(d,z,X,U,te,C,I,M,V,q,j)){case void 0:case!1:case!0:case null:break;default:X=E}if(X!==B)return X}function u(z){switch(z){case void 0:case null:R=F.length=0;break;default:if(typeof z=="function")F[R++]=z;else if(typeof z=="object")for(var B=0,U=z.length;B<U;++B)u(z[B]);else se=!!z|0}return u}function c(z){return z=z.prefix,z!==void 0&&(ee=null,z?typeof z!="function"?P=1:(P=2,ee=z):P=0),c}function d(z,B){var U=z;if(33>U.charCodeAt(0)&&(U=U.trim()),ae=U,U=[ae],0<R){var te=l(-1,B,U,U,A,Q,0,0,0,0);te!==void 0&&typeof te=="string"&&(B=te)}var C=n(H,U,B,0,0);return 0<R&&(te=l(-2,C,U,U,A,Q,C.length,0,0,0),te!==void 0&&(C=te)),ae="",_=0,Q=A=1,C}var h=/^\0+/g,v=/[\0\r\f]/g,b=/: */g,x=/zoo|gra/,k=/([,: ])(transform)/g,g=/,\r+?/g,Y=/([\t\r\n ])*\f?&/g,W=/@(k\w+)\s*(\S*)\s*/,N=/::(place)/g,$=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,D=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,J=/([^-])(image-set\()/,Q=1,A=1,_=0,P=1,H=[],F=[],R=0,ee=null,se=0,ae="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var uo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function fo(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var ho=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,An=fo(function(e){return ho.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Yt={},po={get exports(){return Yt},set exports(e){Yt=e}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn;function go(){if(Pn)return ye;Pn=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,Y=e?Symbol.for("react.responder"):60118,W=e?Symbol.for("react.scope"):60119;function N(f){if(typeof f=="object"&&f!==null){var y=f.$$typeof;switch(y){case n:switch(f=f.type,f){case u:case c:case r:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case l:case d:case x:case b:case i:return f;default:return y}}case t:return y}}}function $(f){return N(f)===c}return ye.AsyncMode=u,ye.ConcurrentMode=c,ye.ContextConsumer=l,ye.ContextProvider=i,ye.Element=n,ye.ForwardRef=d,ye.Fragment=r,ye.Lazy=x,ye.Memo=b,ye.Portal=t,ye.Profiler=s,ye.StrictMode=o,ye.Suspense=h,ye.isAsyncMode=function(f){return $(f)||N(f)===u},ye.isConcurrentMode=$,ye.isContextConsumer=function(f){return N(f)===l},ye.isContextProvider=function(f){return N(f)===i},ye.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===n},ye.isForwardRef=function(f){return N(f)===d},ye.isFragment=function(f){return N(f)===r},ye.isLazy=function(f){return N(f)===x},ye.isMemo=function(f){return N(f)===b},ye.isPortal=function(f){return N(f)===t},ye.isProfiler=function(f){return N(f)===s},ye.isStrictMode=function(f){return N(f)===o},ye.isSuspense=function(f){return N(f)===h},ye.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===c||f===s||f===o||f===h||f===v||typeof f=="object"&&f!==null&&(f.$$typeof===x||f.$$typeof===b||f.$$typeof===i||f.$$typeof===l||f.$$typeof===d||f.$$typeof===g||f.$$typeof===Y||f.$$typeof===W||f.$$typeof===k)},ye.typeOf=N,ye}var ve={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var On;function mo(){return On||(On=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,Y=e?Symbol.for("react.responder"):60118,W=e?Symbol.for("react.scope"):60119;function N(m){return typeof m=="string"||typeof m=="function"||m===r||m===c||m===s||m===o||m===h||m===v||typeof m=="object"&&m!==null&&(m.$$typeof===x||m.$$typeof===b||m.$$typeof===i||m.$$typeof===l||m.$$typeof===d||m.$$typeof===g||m.$$typeof===Y||m.$$typeof===W||m.$$typeof===k)}function $(m){if(typeof m=="object"&&m!==null){var X=m.$$typeof;switch(X){case n:var E=m.type;switch(E){case u:case c:case r:case s:case o:case h:return E;default:var Z=E&&E.$$typeof;switch(Z){case l:case d:case x:case b:case i:return Z;default:return X}}case t:return X}}}var f=u,y=c,S=l,D=i,O=n,L=d,J=r,Q=x,A=b,_=t,P=s,H=o,F=h,R=!1;function ee(m){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(m)||$(m)===u}function se(m){return $(m)===c}function ae(m){return $(m)===l}function z(m){return $(m)===i}function B(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function U(m){return $(m)===d}function te(m){return $(m)===r}function C(m){return $(m)===x}function I(m){return $(m)===b}function M(m){return $(m)===t}function V(m){return $(m)===s}function q(m){return $(m)===o}function j(m){return $(m)===h}ve.AsyncMode=f,ve.ConcurrentMode=y,ve.ContextConsumer=S,ve.ContextProvider=D,ve.Element=O,ve.ForwardRef=L,ve.Fragment=J,ve.Lazy=Q,ve.Memo=A,ve.Portal=_,ve.Profiler=P,ve.StrictMode=H,ve.Suspense=F,ve.isAsyncMode=ee,ve.isConcurrentMode=se,ve.isContextConsumer=ae,ve.isContextProvider=z,ve.isElement=B,ve.isForwardRef=U,ve.isFragment=te,ve.isLazy=C,ve.isMemo=I,ve.isPortal=M,ve.isProfiler=V,ve.isStrictMode=q,ve.isSuspense=j,ve.isValidElementType=N,ve.typeOf=$}()),ve}(function(e){process.env.NODE_ENV==="production"?e.exports=go():e.exports=mo()})(po);var Lt=Yt,yo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},In={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nt={};Nt[Lt.ForwardRef]=xo,Nt[Lt.Memo]=In;function Yn(e){return Lt.isMemo(e)?In:Nt[e.$$typeof]||yo}var bo=Object.defineProperty,wo=Object.getOwnPropertyNames,Ln=Object.getOwnPropertySymbols,So=Object.getOwnPropertyDescriptor,Co=Object.getPrototypeOf,Nn=Object.prototype;function Fn(e,n,t){if(typeof n!="string"){if(Nn){var r=Co(n);r&&r!==Nn&&Fn(e,r,t)}var o=wo(n);Ln&&(o=o.concat(Ln(n)));for(var s=Yn(e),i=Yn(n),l=0;l<o.length;++l){var u=o[l];if(!vo[u]&&!(t&&t[u])&&!(i&&i[u])&&!(s&&s[u])){var c=So(n,u);try{bo(e,u,c)}catch{}}}}return e}var Mo=Fn;function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Hn=function(e,n){for(var t=[e[0]],r=0,o=n.length;r<o;r+=1)t.push(n[r],e[r+1]);return t},Ft=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!pt.typeOf(e)},xt=Object.freeze([]),je=Object.freeze({});function qe(e){return typeof e=="function"}function Ht(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function zt(e){return e&&typeof e.styledComponentId=="string"}var Je=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Bt=typeof window<"u"&&"HTMLElement"in window,ko=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),$o={},Do=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

`,2:`Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,3:`Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,4:`The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,5:`The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,6:`Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:`ThemeProvider: Please make your "theme" prop an object.

`,9:"Missing document `<head>`\n\n",10:`Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,11:`_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:`%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,14:`ThemeProvider: "theme" prop is required.

`,15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:`Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,17:`CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`}:{};function Eo(){for(var e=arguments.length<=0?void 0:arguments[0],n=[],t=1,r=arguments.length;t<r;t+=1)n.push(t<0||arguments.length<=t?void 0:arguments[t]);return n.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Oe(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(Eo.apply(void 0,[Do[e]].concat(t)).trim())}var _o=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},n.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Oe(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var l=s;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[t]++,u++)},n.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},n.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,l=s;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),bt=new Map,wt=new Map,gt=1,St=function(e){if(bt.has(e))return bt.get(e);for(;wt.has(gt);)gt++;var n=gt++;return process.env.NODE_ENV!=="production"&&((0|n)<0||n>1<<30)&&Oe(16,""+n),bt.set(e,n),wt.set(n,e),n},To=function(e){return wt.get(e)},Ao=function(e,n){n>=gt&&(gt=n+1),bt.set(e,n),wt.set(n,e)},Po="style["+Je+'][data-styled-version="5.3.8"]',Oo=new RegExp("^"+Je+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Io=function(e,n,t){for(var r,o=t.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(n,r)},Yo=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var l=i.match(Oo);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Ao(c,u),Io(e,c,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},Lo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},zn=function(e){var n=document.head,t=e||n,r=document.createElement("style"),o=function(l){for(var u=l.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(Je))return d}}(t),s=o!==void 0?o.nextSibling:null;r.setAttribute(Je,"active"),r.setAttribute("data-styled-version","5.3.8");var i=Lo();return i&&r.setAttribute("nonce",i),t.insertBefore(r,s),r},No=function(){function e(t){var r=this.element=zn(t);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,l=s.length;i<l;i++){var u=s[i];if(u.ownerNode===o)return u}Oe(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Fo=function(){function e(t){var r=this.element=zn(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ho=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Bn=Bt,zo={isServer:!Bt,useCSSOMInjection:!ko},Ct=function(){function e(t,r,o){t===void 0&&(t=je),r===void 0&&(r={}),this.options=Te({},zo,{},t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Bt&&Bn&&(Bn=!1,function(s){for(var i=document.querySelectorAll(Po),l=0,u=i.length;l<u;l++){var c=i[l];c&&c.getAttribute(Je)!=="active"&&(Yo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return St(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Te({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,s=r.useCSSOMInjection,i=r.target,t=o?new Ho(i):s?new No(i):new Fo(i),new _o(t)));var t,r,o,s,i},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(St(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},n.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(St(t),o)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(St(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),o=r.length,s="",i=0;i<o;i++){var l=To(i);if(l!==void 0){var u=t.names.get(l),c=r.getGroup(i);if(u&&c&&u.size){var d=Je+".g"+i+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(v){v.length>0&&(h+=v+",")}),s+=""+c+d+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Bo=/(a)(d)/gi,Wn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wt(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=Wn(n%52)+t;return(Wn(n%52)+t).replace(Bo,"$1-$2")}var Ve=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},jn=function(e){return Ve(5381,e)};function Zn(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(qe(t)&&!zt(t))return!1}return!0}var Wo=jn("5.3.8"),jo=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&Zn(n),this.componentId=t,this.baseHash=Ve(Wo,t),this.baseStyle=r,Ct.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=Ge(this.rules,n,t,r).join(""),l=Wt(Ve(this.baseHash,i)>>>0);if(!t.hasNameForId(o,l)){var u=r(i,"."+l,void 0,o);t.insertRules(o,l,u)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=Ve(this.baseHash,r.hash),h="",v=0;v<c;v++){var b=this.rules[v];if(typeof b=="string")h+=b,process.env.NODE_ENV!=="production"&&(d=Ve(d,b+v));else if(b){var x=Ge(b,n,t,r),k=Array.isArray(x)?x.join(""):x;d=Ve(d,k+v),h+=k}}if(h){var g=Wt(d>>>0);if(!t.hasNameForId(o,g)){var Y=r(h,"."+g,void 0,o);t.insertRules(o,g,Y)}s.push(g)}}return s.join(" ")},e}(),Zo=/^\s*\/\/.*$/gm,Vo=[":","[",".","#"];function Go(e){var n,t,r,o,s=e===void 0?je:e,i=s.options,l=i===void 0?je:i,u=s.plugins,c=u===void 0?xt:u,d=new lo(l),h=[],v=function(k){function g(Y){if(Y)try{k(Y+"}")}catch{}}return function(Y,W,N,$,f,y,S,D,O,L){switch(Y){case 1:if(O===0&&W.charCodeAt(0)===64)return k(W+";"),"";break;case 2:if(D===0)return W+"/*|*/";break;case 3:switch(D){case 102:case 112:return k(N[0]+W),"";default:return W+(L===0?"/*|*/":"")}case-2:W.split("/*|*/}").forEach(g)}}}(function(k){h.push(k)}),b=function(k,g,Y){return g===0&&Vo.indexOf(Y[t.length])!==-1||Y.match(o)?k:"."+n};function x(k,g,Y,W){W===void 0&&(W="&");var N=k.replace(Zo,""),$=g&&Y?Y+" "+g+" { "+N+" }":N;return n=W,t=g,r=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(Y||!g?"":g,$)}return d.use([].concat(c,[function(k,g,Y){k===2&&Y.length&&Y[0].lastIndexOf(t)>0&&(Y[0]=Y[0].replace(r,b))},v,function(k){if(k===-2){var g=h;return h=[],g}}])),x.hash=c.length?c.reduce(function(k,g){return g.name||Oe(15),Ve(k,g.name)},5381).toString():"",x}var Vn=p.createContext();Vn.Consumer;var Gn=p.createContext(),Xo=(Gn.Consumer,new Ct),jt=Go();function Xn(){return p.useContext(Vn)||Xo}function Un(){return p.useContext(Gn)||jt}var Kn=function(){function e(n,t){var r=this;this.inject=function(o,s){s===void 0&&(s=jt);var i=r.name+s.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,s(r.rules,i,"@keyframes"))},this.toString=function(){return Oe(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=jt),this.name+n.hash},e}(),Uo=/([A-Z])/,Ko=/([A-Z])/g,qo=/^ms-/,Jo=function(e){return"-"+e.toLowerCase()};function qn(e){return Uo.test(e)?e.replace(Ko,Jo).replace(qo,"-ms-"):e}var Jn=function(e){return e==null||e===!1||e===""};function Ge(e,n,t,r){if(Array.isArray(e)){for(var o,s=[],i=0,l=e.length;i<l;i+=1)(o=Ge(e[i],n,t,r))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(Jn(e))return"";if(zt(e))return"."+e.styledComponentId;if(qe(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!n)return e;var u=e(n);return process.env.NODE_ENV!=="production"&&pt.isElement(u)&&console.warn(Ht(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ge(u,n,t,r)}var c;return e instanceof Kn?t?(e.inject(t,r),e.getName(r)):e:Ft(e)?function d(h,v){var b,x,k=[];for(var g in h)h.hasOwnProperty(g)&&!Jn(h[g])&&(Array.isArray(h[g])&&h[g].isCss||qe(h[g])?k.push(qn(g)+":",h[g],";"):Ft(h[g])?k.push.apply(k,d(h[g],g)):k.push(qn(g)+": "+(b=g,(x=h[g])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||b in uo?String(x).trim():x+"px")+";"));return v?[v+" {"].concat(k,["}"]):k}(e):e.toString()}var Qn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Mt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return qe(e)||Ft(e)?Qn(Ge(Hn(xt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Qn(Ge(Hn(e,t)))}var Rn=/invalid hook call/i,kt=new Set,er=function(e,n){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(n?' with the id of "'+n+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,r=console.error;try{var o=!0;console.error=function(s){if(Rn.test(s))o=!1,kt.delete(t);else{for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];r.apply(void 0,[s].concat(l))}},p.useRef(),o&&!kt.has(t)&&(console.warn(t),kt.add(t))}catch(s){Rn.test(s.message)&&kt.delete(t)}finally{console.error=r}}},tr=function(e,n,t){return t===void 0&&(t=je),e.theme!==t.theme&&e.theme||n||t.theme},Qo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ro=/(^-|-$)/g;function Zt(e){return e.replace(Qo,"-").replace(Ro,"")}var Vt=function(e){return Wt(jn(e)>>>0)};function $t(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Gt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},es=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ts(e,n,t){var r=e[t];Gt(n)&&Gt(r)?nr(r,n):e[t]=n}function nr(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(Gt(i))for(var l in i)es(l)&&ts(e,i[l],l)}return e}var Qe=p.createContext();Qe.Consumer;function ns(e){var n=p.useContext(Qe),t=p.useMemo(function(){return function(r,o){if(!r)return Oe(14);if(qe(r)){var s=r(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Oe(7)}return Array.isArray(r)||typeof r!="object"?Oe(8):o?Te({},o,{},r):r}(e.theme,n)},[e.theme,n]);return e.children?p.createElement(Qe.Provider,{value:t},e.children):null}var Xt={};function rr(e,n,t){var r=zt(e),o=!$t(e),s=n.attrs,i=s===void 0?xt:s,l=n.componentId,u=l===void 0?function(W,N){var $=typeof W!="string"?"sc":Zt(W);Xt[$]=(Xt[$]||0)+1;var f=$+"-"+Vt("5.3.8"+$+Xt[$]);return N?N+"-"+f:f}(n.displayName,n.parentComponentId):l,c=n.displayName,d=c===void 0?function(W){return $t(W)?"styled."+W:"Styled("+Ht(W)+")"}(e):c,h=n.displayName&&n.componentId?Zt(n.displayName)+"-"+n.componentId:n.componentId||u,v=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,b=n.shouldForwardProp;r&&e.shouldForwardProp&&(b=n.shouldForwardProp?function(W,N,$){return e.shouldForwardProp(W,N,$)&&n.shouldForwardProp(W,N,$)}:e.shouldForwardProp);var x,k=new jo(t,h,r?e.componentStyle:void 0),g=k.isStatic&&i.length===0,Y=function(W,N){return function($,f,y,S){var D=$.attrs,O=$.componentStyle,L=$.defaultProps,J=$.foldedComponentIds,Q=$.shouldForwardProp,A=$.styledComponentId,_=$.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(A);var P=function(te,C,I){te===void 0&&(te=je);var M=Te({},C,{theme:te}),V={};return I.forEach(function(q){var j,m,X,E=q;for(j in qe(E)&&(E=E(M)),E)M[j]=V[j]=j==="className"?(m=V[j],X=E[j],m&&X?m+" "+X:m||X):E[j]}),[M,V]}(tr(f,p.useContext(Qe),L)||je,f,D),H=P[0],F=P[1],R=function(te,C,I,M){var V=Xn(),q=Un(),j=C?te.generateAndInjectStyles(je,V,q):te.generateAndInjectStyles(I,V,q);return process.env.NODE_ENV!=="production"&&p.useDebugValue(j),process.env.NODE_ENV!=="production"&&!C&&M&&M(j),j}(O,S,H,process.env.NODE_ENV!=="production"?$.warnTooManyClasses:void 0),ee=y,se=F.$as||f.$as||F.as||f.as||_,ae=$t(se),z=F!==f?Te({},f,{},F):f,B={};for(var U in z)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?B.as=z[U]:(Q?Q(U,An,se):!ae||An(U))&&(B[U]=z[U]));return f.style&&F.style!==f.style&&(B.style=Te({},f.style,{},F.style)),B.className=Array.prototype.concat(J,A,R!==A?R:null,f.className,F.className).filter(Boolean).join(" "),B.ref=ee,p.createElement(se,B)}(x,W,N,g)};return Y.displayName=d,(x=p.forwardRef(Y)).attrs=v,x.componentStyle=k,x.displayName=d,x.shouldForwardProp=b,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):xt,x.styledComponentId=h,x.target=r?e.target:e,x.withComponent=function(W){var N=n.componentId,$=function(y,S){if(y==null)return{};var D,O,L={},J=Object.keys(y);for(O=0;O<J.length;O++)D=J[O],S.indexOf(D)>=0||(L[D]=y[D]);return L}(n,["componentId"]),f=N&&N+"-"+($t(W)?W:Zt(Ht(W)));return rr(W,Te({},$,{attrs:v,componentId:f}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=r?nr({},e.defaultProps,W):W}}),process.env.NODE_ENV!=="production"&&(er(d,h),x.warnTooManyClasses=function(W,N){var $={},f=!1;return function(y){if(!f&&($[y]=!0,Object.keys($).length>=200)){var S=N?' with the id of "'+N+'"':"";console.warn("Over 200 classes were generated for component "+W+S+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,$={}}}}(d,h)),x.toString=function(){return"."+x.styledComponentId},o&&Mo(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var Ut=function(e){return function n(t,r,o){if(o===void 0&&(o=je),!pt.isValidElementType(r))return Oe(1,String(r));var s=function(){return t(r,o,Mt.apply(void 0,arguments))};return s.withConfig=function(i){return n(t,r,Te({},o,{},i))},s.attrs=function(i){return n(t,r,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(rr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ut[e]=Ut(e)});var rs=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Zn(t),Ct.registerId(this.componentId+1)}var n=e.prototype;return n.createStyles=function(t,r,o,s){var i=s(Ge(this.rules,r,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,i)},n.removeStyles=function(t,r){r.clearRules(this.componentId+t)},n.renderStyles=function(t,r,o,s){t>2&&Ct.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,s)},e}();function os(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Mt.apply(void 0,[e].concat(t)),s="sc-global-"+Vt(JSON.stringify(o)),i=new rs(o,s);function l(c){var d=Xn(),h=Un(),v=p.useContext(Qe),b=p.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(x){return typeof x=="string"&&x.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(b,c,d,v,h),p.useLayoutEffect(function(){if(!d.server)return u(b,c,d,v,h),function(){return i.removeStyles(b,d)}},[b,c,d,v,h]),null}function u(c,d,h,v,b){if(i.isStatic)i.renderStyles(c,$o,h,b);else{var x=Te({},d,{theme:tr(d,v,l.defaultProps)});i.renderStyles(c,x,h,b)}}return process.env.NODE_ENV!=="production"&&er(s),p.memo(l)}function Re(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Mt.apply(void 0,[e].concat(t)).join(""),s=Vt(o);return new Kn(s,o)}var Dt=function(){return p.useContext(Qe)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const w=Ut,mt="reactSchedulerOutsideWrapper",Ae="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",ss=os`

  #${mt} {
    font-family: ${Ae};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${mt} *,
 #${mt} *:before,
 #${mt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,is={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},as={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},et=`
margin: 0;
padding: 0;
`,tt=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;w.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const be=50,Ie=24,nt=16,Xe=40,rt=Xe+nt+Ie,ot=84,he=56,De=196,_e=12,Me=50,st=24,yt=16,Kt=40,cs=st+yt+Kt,or=24,sr=52,Pe={topRow:`600 14px ${Ae}`,middleRow:`400 10px ${Ae}`,bottomRow:{name:`600 14px ${Ae}`,number:`600 10px ${Ae}`,hoursInDay:`400 9px ${Ae}`}},it=3,ls=1.6,ds=4.5,qt=12,Et=24,us="reactSchedulerCanvasHeaderWrapper",ir="reactSchedulerCanvasWrapper",Ye=mt,fs=4,Jt=48,Ze=5,hs=40,ar=8,Qt=Ie/2+2,cr=nt/2+Ie+1,lr=2,Se=60,Ee=21,dr=58,ur="reactSchedulerBody";var Ue={},ps={get exports(){return Ue},set exports(e){Ue=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t=1e3,r=6e4,o=36e5,s="millisecond",i="second",l="minute",u="hour",c="day",d="week",h="month",v="quarter",b="year",x="date",k="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,W={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var _=["th","st","nd","rd"],P=A%100;return"["+A+(_[(P-20)%10]||_[P]||_[0])+"]"}},N=function(A,_,P){var H=String(A);return!H||H.length>=_?A:""+Array(_+1-H.length).join(P)+A},$={s:N,z:function(A){var _=-A.utcOffset(),P=Math.abs(_),H=Math.floor(P/60),F=P%60;return(_<=0?"+":"-")+N(H,2,"0")+":"+N(F,2,"0")},m:function A(_,P){if(_.date()<P.date())return-A(P,_);var H=12*(P.year()-_.year())+(P.month()-_.month()),F=_.clone().add(H,h),R=P-F<0,ee=_.clone().add(H+(R?-1:1),h);return+(-(H+(P-F)/(R?F-ee:ee-F))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:h,y:b,w:d,d:c,D:x,h:u,m:l,s:i,ms:s,Q:v}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},f="en",y={};y[f]=W;var S=function(A){return A instanceof J},D=function A(_,P,H){var F;if(!_)return f;if(typeof _=="string"){var R=_.toLowerCase();y[R]&&(F=R),P&&(y[R]=P,F=R);var ee=_.split("-");if(!F&&ee.length>1)return A(ee[0])}else{var se=_.name;y[se]=_,F=se}return!H&&F&&(f=F),F||!H&&f},O=function(A,_){if(S(A))return A.clone();var P=typeof _=="object"?_:{};return P.date=A,P.args=arguments,new J(P)},L=$;L.l=D,L.i=S,L.w=function(A,_){return O(A,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var J=function(){function A(P){this.$L=D(P.locale,null,!0),this.parse(P)}var _=A.prototype;return _.parse=function(P){this.$d=function(H){var F=H.date,R=H.utc;if(F===null)return new Date(NaN);if(L.u(F))return new Date;if(F instanceof Date)return new Date(F);if(typeof F=="string"&&!/Z$/i.test(F)){var ee=F.match(g);if(ee){var se=ee[2]-1||0,ae=(ee[7]||"0").substring(0,3);return R?new Date(Date.UTC(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,ae)):new Date(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,ae)}}return new Date(F)}(P),this.$x=P.x||{},this.init()},_.init=function(){var P=this.$d;this.$y=P.getFullYear(),this.$M=P.getMonth(),this.$D=P.getDate(),this.$W=P.getDay(),this.$H=P.getHours(),this.$m=P.getMinutes(),this.$s=P.getSeconds(),this.$ms=P.getMilliseconds()},_.$utils=function(){return L},_.isValid=function(){return this.$d.toString()!==k},_.isSame=function(P,H){var F=O(P);return this.startOf(H)<=F&&F<=this.endOf(H)},_.isAfter=function(P,H){return O(P)<this.startOf(H)},_.isBefore=function(P,H){return this.endOf(H)<O(P)},_.$g=function(P,H,F){return L.u(P)?this[H]:this.set(F,P)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(P,H){var F=this,R=!!L.u(H)||H,ee=L.p(P),se=function(M,V){var q=L.w(F.$u?Date.UTC(F.$y,V,M):new Date(F.$y,V,M),F);return R?q:q.endOf(c)},ae=function(M,V){return L.w(F.toDate()[M].apply(F.toDate("s"),(R?[0,0,0,0]:[23,59,59,999]).slice(V)),F)},z=this.$W,B=this.$M,U=this.$D,te="set"+(this.$u?"UTC":"");switch(ee){case b:return R?se(1,0):se(31,11);case h:return R?se(1,B):se(0,B+1);case d:var C=this.$locale().weekStart||0,I=(z<C?z+7:z)-C;return se(R?U-I:U+(6-I),B);case c:case x:return ae(te+"Hours",0);case u:return ae(te+"Minutes",1);case l:return ae(te+"Seconds",2);case i:return ae(te+"Milliseconds",3);default:return this.clone()}},_.endOf=function(P){return this.startOf(P,!1)},_.$set=function(P,H){var F,R=L.p(P),ee="set"+(this.$u?"UTC":""),se=(F={},F[c]=ee+"Date",F[x]=ee+"Date",F[h]=ee+"Month",F[b]=ee+"FullYear",F[u]=ee+"Hours",F[l]=ee+"Minutes",F[i]=ee+"Seconds",F[s]=ee+"Milliseconds",F)[R],ae=R===c?this.$D+(H-this.$W):H;if(R===h||R===b){var z=this.clone().set(x,1);z.$d[se](ae),z.init(),this.$d=z.set(x,Math.min(this.$D,z.daysInMonth())).$d}else se&&this.$d[se](ae);return this.init(),this},_.set=function(P,H){return this.clone().$set(P,H)},_.get=function(P){return this[L.p(P)]()},_.add=function(P,H){var F,R=this;P=Number(P);var ee=L.p(H),se=function(B){var U=O(R);return L.w(U.date(U.date()+Math.round(B*P)),R)};if(ee===h)return this.set(h,this.$M+P);if(ee===b)return this.set(b,this.$y+P);if(ee===c)return se(1);if(ee===d)return se(7);var ae=(F={},F[l]=r,F[u]=o,F[i]=t,F)[ee]||1,z=this.$d.getTime()+P*ae;return L.w(z,this)},_.subtract=function(P,H){return this.add(-1*P,H)},_.format=function(P){var H=this,F=this.$locale();if(!this.isValid())return F.invalidDate||k;var R=P||"YYYY-MM-DDTHH:mm:ssZ",ee=L.z(this),se=this.$H,ae=this.$m,z=this.$M,B=F.weekdays,U=F.months,te=function(V,q,j,m){return V&&(V[q]||V(H,R))||j[q].slice(0,m)},C=function(V){return L.s(se%12||12,V,"0")},I=F.meridiem||function(V,q,j){var m=V<12?"AM":"PM";return j?m.toLowerCase():m},M={YY:String(this.$y).slice(-2),YYYY:this.$y,M:z+1,MM:L.s(z+1,2,"0"),MMM:te(F.monthsShort,z,U,3),MMMM:te(U,z),D:this.$D,DD:L.s(this.$D,2,"0"),d:String(this.$W),dd:te(F.weekdaysMin,this.$W,B,2),ddd:te(F.weekdaysShort,this.$W,B,3),dddd:B[this.$W],H:String(se),HH:L.s(se,2,"0"),h:C(1),hh:C(2),a:I(se,ae,!0),A:I(se,ae,!1),m:String(ae),mm:L.s(ae,2,"0"),s:String(this.$s),ss:L.s(this.$s,2,"0"),SSS:L.s(this.$ms,3,"0"),Z:ee};return R.replace(Y,function(V,q){return q||M[V]||ee.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(P,H,F){var R,ee=L.p(H),se=O(P),ae=(se.utcOffset()-this.utcOffset())*r,z=this-se,B=L.m(this,se);return B=(R={},R[b]=B/12,R[h]=B,R[v]=B/3,R[d]=(z-ae)/6048e5,R[c]=(z-ae)/864e5,R[u]=z/o,R[l]=z/r,R[i]=z/t,R)[ee]||z,F?B:L.a(B)},_.daysInMonth=function(){return this.endOf(h).$D},_.$locale=function(){return y[this.$L]},_.locale=function(P,H){if(!P)return this.$L;var F=this.clone(),R=D(P,H,!0);return R&&(F.$L=R),F},_.clone=function(){return L.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},A}(),Q=J.prototype;return O.prototype=Q,[["$ms",s],["$s",i],["$m",l],["$H",u],["$W",c],["$M",h],["$y",b],["$D",x]].forEach(function(A){Q[A[1]]=function(_){return this.$g(_,A[0],A[1])}}),O.extend=function(A,_){return A.$i||(A(_,J,O),A.$i=!0),O},O.locale=D,O.isDayjs=S,O.unix=function(A){return O(1e3*A)},O.en=y[f],O.Ls=y,O.p={},O})})(ps);const T=Ue,fr=e=>e%4===0&&e%100>0||e%400===0?366:365,Rt=e=>{const n=e.day();return n!==0&&n!==6},hr=(e,n)=>T(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(n,"months").daysInMonth(),pr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:Rt(e),isCurrentDay:e.isSame(T(),"day"),year:parseInt(e.format("YYYY"))});let _t=null;const gs=e=>{if(_t)return _t;const n=document.createElement("canvas");n.width=12,n.height=12;const t=n.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),_t=e.createPattern(n,"repeat"),_t):null},en=(e,n,t,r,o,s,i,l=!1)=>{if(e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(n,t,r,he),l&&!s){const u=gs(e);u&&(e.fillStyle=u,e.fillRect(n,t,r,he))}e.strokeRect(n+.5,t+.5,r,he)},tn=(e,n)=>{let t=0;for(const r of n)r<=e&&t++;return t*Ee},ms=(e,n,t,r,o,s=[])=>{for(let i=0;i<n;i++){const l=tn(i,s);for(let u=0;u<=t;u++){const c=T(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(u,"days"),d=c.isSame(T(),"day"),h=c.isBefore(T(),"day");en(e,u*be,i*he+l,be,Rt(c),d,o,h)}}},ys=(e,n,t,r)=>{e.setLineDash([5,5]),e.strokeStyle=r.colors.border,e.moveTo(n+.5,.5),e.lineTo(n+.5,t+.5),e.stroke()},vs=(e,n,t,r,o,s=[])=>{let i=0,l=-(r.dayOfMonth-1)*_e;const u=n*he+s.length*Ee;for(let c=0;c<=t;c++){const h=T(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"weeks").isSame(T(),"week");for(let v=0;v<n;v++){const b=tn(v,s);en(e,i,v*he+b,ot,!0,h,o)}i+=ot}for(let c=0;c<t;c++){const d=hr(r,c)*_e;ys(e,l,u,o),l+=d}},xs=(e,n,t,r,o,s=[])=>{const i=T(`${r.year}-${r.month+1}-${r.dayOfMonth+1}`);for(let l=0;l<n;l++){const u=tn(l,s);for(let c=0;c<=t;c++){let d;c===Math.floor(t/2)?d=T():c>Math.floor(t/2)?d=T().add(c-Math.floor(t/2),"hours"):d=T().subtract(Math.floor(t/2)-l,"hours");const h=i.isSame(T(),"day")&&d.isSame(T(),"hour");en(e,c*Me+Me/2-.5,l*he+u,Me,Rt(d),h,o)}}},bs=(e,n,t,r)=>{const o=t*he+n*Ee,s=e.canvas.width,i=o+Ee/2;e.fillStyle=r.mode==="dark"?r.colors.primary+"80":r.colors.primary,e.fillRect(0,o,s,Ee),e.strokeStyle=r.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},ws=(e,n,t,r,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(ir)){switch(n){case 0:vs(e,t,r,o,s,i);break;case 1:ms(e,t,r,o,s,i);break;case 2:xs(e,t,r,o,s,i);break}for(let u=0;u<i.length;u++)bs(e,u,i[u],s)}};var nn={},Ss={get exports(){return nn},set exports(e){nn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t="week",r="year";return function(o,s,i){var l=s.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=i(this).startOf(r).add(1,r).date(c),h=i(this).endOf(t);if(d.isBefore(h))return 1}var v=i(this).startOf(r).date(c).startOf(t).subtract(1,"millisecond"),b=this.diff(v,t,!0);return b<0?i(this).startOf("week").week():Math.ceil(b)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(Ss);const Cs=nn;var rn={},Ms={get exports(){return rn},set exports(e){rn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r,o){r.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(Ms);const ks=rn;var on={},$s={get exports(){return on},set exports(e){on=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t="day";return function(r,o,s){var i=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return i(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var d,h,v,b,x=i(this),k=(d=this.isoWeekYear(),h=this.$u,v=(h?s.utc:s)().year(d).startOf("year"),b=4-v.isoWeekday(),v.isoWeekday()>4&&(b+=7),v.add(b,t));return x.diff(k,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var u=l.startOf;l.startOf=function(c,d){var h=this.$utils(),v=!!h.u(d)||d;return h.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(c,d)}}})})($s);const Ds=on;var sn={},Es={get exports(){return sn},set exports(e){sn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r,o){r.prototype.isBetween=function(s,i,l,u){var c=o(s),d=o(i),h=(u=u||"()")[0]==="(",v=u[1]===")";return(h?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(d,l):!this.isAfter(d,l))||(h?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(d,l):!this.isBefore(d,l))}}})})(Es);const _s=sn;var an={},Ts={get exports(){return an},set exports(e){an=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t,r,o=1e3,s=6e4,i=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,d=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:d,days:l,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},b=function(f){return f instanceof $},x=function(f,y,S){return new $(f,S,y.$l)},k=function(f){return r.p(f)+"s"},g=function(f){return f<0},Y=function(f){return g(f)?Math.ceil(f):Math.floor(f)},W=function(f){return Math.abs(f)},N=function(f,y){return f?g(f)?{negative:!0,format:""+W(f)+y}:{negative:!1,format:""+f+y}:{negative:!1,format:""}},$=function(){function f(S,D,O){var L=this;if(this.$d={},this.$l=O,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),D)return x(S*v[k(D)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(A){L.$d[k(A)]=S[A]}),this.calMilliseconds(),this;if(typeof S=="string"){var J=S.match(h);if(J){var Q=J.slice(2).map(function(A){return A!=null?Number(A):0});return this.$d.years=Q[0],this.$d.months=Q[1],this.$d.weeks=Q[2],this.$d.days=Q[3],this.$d.hours=Q[4],this.$d.minutes=Q[5],this.$d.seconds=Q[6],this.calMilliseconds(),this}}return this}var y=f.prototype;return y.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(D,O){return D+(S.$d[O]||0)*v[O]},0)},y.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=Y(S/c),S%=c,this.$d.months=Y(S/d),S%=d,this.$d.days=Y(S/l),S%=l,this.$d.hours=Y(S/i),S%=i,this.$d.minutes=Y(S/s),S%=s,this.$d.seconds=Y(S/o),S%=o,this.$d.milliseconds=S},y.toISOString=function(){var S=N(this.$d.years,"Y"),D=N(this.$d.months,"M"),O=+this.$d.days||0;this.$d.weeks&&(O+=7*this.$d.weeks);var L=N(O,"D"),J=N(this.$d.hours,"H"),Q=N(this.$d.minutes,"M"),A=this.$d.seconds||0;this.$d.milliseconds&&(A+=this.$d.milliseconds/1e3);var _=N(A,"S"),P=S.negative||D.negative||L.negative||J.negative||Q.negative||_.negative,H=J.format||Q.format||_.format?"T":"",F=(P?"-":"")+"P"+S.format+D.format+L.format+H+J.format+Q.format+_.format;return F==="P"||F==="-P"?"P0D":F},y.toJSON=function(){return this.toISOString()},y.format=function(S){var D=S||"YYYY-MM-DDTHH:mm:ss",O={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return D.replace(u,function(L,J){return J||String(O[L])})},y.as=function(S){return this.$ms/v[k(S)]},y.get=function(S){var D=this.$ms,O=k(S);return O==="milliseconds"?D%=1e3:D=O==="weeks"?Y(D/v[O]):this.$d[O],D===0?0:D},y.add=function(S,D,O){var L;return L=D?S*v[k(D)]:b(S)?S.$ms:x(S,this).$ms,x(this.$ms+L*(O?-1:1),this)},y.subtract=function(S,D){return this.add(S,D,!0)},y.locale=function(S){var D=this.clone();return D.$l=S,D},y.clone=function(){return x(this.$ms,this)},y.humanize=function(S){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},f}();return function(f,y,S){t=S,r=S().$utils(),S.duration=function(L,J){var Q=S.locale();return x(L,{$l:Q},J)},S.isDuration=b;var D=y.prototype.add,O=y.prototype.subtract;y.prototype.add=function(L,J){return b(L)&&(L=L.asMilliseconds()),D.bind(this)(L,J)},y.prototype.subtract=function(L,J){return b(L)&&(L=L.asMilliseconds()),O.bind(this)(L,J)}}})})(Ts);const As=an;var Ps="Expected a function",gr=0/0,Os="[object Symbol]",Is=/^\s+|\s+$/g,Ys=/^[-+]0x[0-9a-f]+$/i,Ls=/^0b[01]+$/i,Ns=/^0o[0-7]+$/i,Fs=parseInt,Hs=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,zs=typeof self=="object"&&self&&self.Object===Object&&self,Bs=Hs||zs||Function("return this")(),Ws=Object.prototype,js=Ws.toString,Zs=Math.max,Vs=Math.min,cn=function(){return Bs.Date.now()};function Gs(e,n,t){var r,o,s,i,l,u,c=0,d=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(Ps);n=mr(n)||0,ln(t)&&(d=!!t.leading,h="maxWait"in t,s=h?Zs(mr(t.maxWait)||0,n):s,v="trailing"in t?!!t.trailing:v);function b(y){var S=r,D=o;return r=o=void 0,c=y,i=e.apply(D,S),i}function x(y){return c=y,l=setTimeout(Y,n),d?b(y):i}function k(y){var S=y-u,D=y-c,O=n-S;return h?Vs(O,s-D):O}function g(y){var S=y-u,D=y-c;return u===void 0||S>=n||S<0||h&&D>=s}function Y(){var y=cn();if(g(y))return W(y);l=setTimeout(Y,k(y))}function W(y){return l=void 0,v&&r?b(y):(r=o=void 0,i)}function N(){l!==void 0&&clearTimeout(l),c=0,r=u=o=l=void 0}function $(){return l===void 0?i:W(cn())}function f(){var y=cn(),S=g(y);if(r=arguments,o=this,u=y,S){if(l===void 0)return x(u);if(h)return l=setTimeout(Y,n),b(u)}return l===void 0&&(l=setTimeout(Y,n)),i}return f.cancel=N,f.flush=$,f}function ln(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Xs(e){return!!e&&typeof e=="object"}function Us(e){return typeof e=="symbol"||Xs(e)&&js.call(e)==Os}function mr(e){if(typeof e=="number")return e;if(Us(e))return gr;if(ln(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ln(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(Is,"");var t=Ls.test(e);return t||Ns.test(e)?Fs(e.slice(2),t?2:8):Ys.test(e)?gr:+e}var dn=Gs;const Tt=[0,1,2];var vt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(vt||{});const yr=e=>Tt.includes(e),at=e=>{var r;const t=(((r=document.getElementById(Ye))==null?void 0:r.clientWidth)||0)-De;switch(e){case 1:return Math.ceil(t/be)*it;case 2:return Math.ceil(t/Me)*it;default:return Math.ceil(t/ot)*it}},un=e=>at(e)/it,fn=(e,n)=>{const t=at(n)/2;let r;switch(n){case 1:r=e.subtract(t,"days");break;case 2:r=e.subtract(t,"hours");break;default:r=e.subtract(t,"weeks");break}let o;switch(n){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:r,endDate:o}},Ks=(e,n)=>{const t=fn(e,n);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},hn=()=>{var t;return((((t=document.getElementById(Ye))==null?void 0:t.clientWidth)||0)-De)*it},vr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:T(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});T.extend(Cs),T.extend(ks),T.extend(Ds),T.extend(_s),T.extend(As);const qs=({data:e,children:n,isLoading:t,config:r,defaultStartDate:o=T(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:l})=>{const{zoom:u,maxRecordsPerPage:c=50}=r,[d,h]=p.useState(u),[v,b]=p.useState(T()),[x,k]=p.useState(!1),[g,Y]=p.useState(at(d)),W=Tt[d]!==Tt[Tt.length-1],N=d!==0,$=p.useMemo(()=>Ks(v,d),[v,d]),f=fn(v,d).startDate,y=T(f).dayOfYear(),S=pr(f),D=p.useRef(null),O=p.useRef(!1),L=p.useRef(null),[J,Q]=p.useState([{x:0,y:0}]),A=p.useCallback((I,M="auto")=>{var q,j,m,X;const V=hn();switch(I){case"back":return(q=D.current)==null?void 0:q.scrollTo({behavior:M,left:V/3});case"forward":return(j=D.current)==null?void 0:j.scrollTo({behavior:M,left:V/3});case"middle":{const E=V/it/4;return(m=D.current)==null?void 0:m.scrollTo({behavior:M,left:V/2-E})}default:return(X=D.current)==null?void 0:X.scrollTo({behavior:M,left:V/2})}},[]),_=I=>{Q(I)},P=p.useCallback(I=>{const M=un(d);let V;switch(d){case 0:V=M*7;break;case 1:V=M;break;case 2:V=Math.ceil(M/Et);break}dn(()=>{switch((I==="forward"||I==="back")&&(O.current=!0),L.current=I,I){case"back":b(j=>j.subtract(V,"days"));break;case"forward":b(j=>j.add(V,"days"));break;case"middle":b(T());break}s==null||s($)},300)()},[s,$,d]);p.useEffect(()=>{L.current&&(A(L.current),L.current=null)},[v,A]),p.useEffect(()=>{D.current=document.getElementById(Ye),Y(at(d))},[d]),p.useEffect(()=>{const I=()=>Y(at(d));return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[d]),p.useEffect(()=>{s==null||s($)},[s,$]),p.useEffect(()=>{k(!1)},[o]),p.useEffect(()=>{x||(A("middle"),k(!0),b(o))},[o,x,A]);const H=()=>{t||(b(I=>d===2?I.add(or,"hours"):I.add(lr,"weeks")),s==null||s($))},F=p.useCallback(()=>{t||P("forward")},[t,P]),R=()=>{t||(b(I=>d===2?I.subtract(or,"hours"):I.subtract(lr,"weeks")),s==null||s($))},ee=p.useCallback(()=>{!x||t||P("back")},[x,t,P]),se=p.useCallback(()=>{t||(L.current="middle",b(T()),s==null||s($))},[t,s,$]),ae=p.useCallback(I=>{if(t)return;const M=T(I).startOf("day");M.isValid()&&(L.current="middle",b(M),s==null||s($))},[t,s,$]),z=()=>U(d+1),B=()=>U(d-1),U=I=>{yr(I)&&(h(I),Y(at(I)),s==null||s($))},te=()=>i==null?void 0:i(),{Provider:C}=vr;return a.jsx(C,{value:{data:e,config:r,handleGoNext:H,handleScrollNext:F,handleGoPrev:R,handleScrollPrev:ee,handleGoToday:se,goToDate:ae,zoomIn:z,zoomOut:B,setZoom:U,zoom:d,isNextZoom:W,isPrevZoom:N,date:v,isLoading:t,cols:g,startDate:S,dayOfYear:y,toggleDisplayActiveUnits:te,tilesCoords:J,updateTilesCoords:_,recordsThreshold:c,onClearFilterData:l,suppressNextSlideRef:O},children:n})},Le=()=>p.useContext(vr),xr=(e,n,t)=>{e.canvas.width=n*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},br=(e,n)=>{if(n.length===0)return e;let t=e,r=0;for(const o of n){const s=o*he+r*Ee;if(e>=s+Ee)r++;else if(e>=s)return o*he+r*Ee-r*Ee}return t-r*Ee},Js=5,wr=(e,n)=>{const t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.sqrt(t*t+r*r)>Js},ct=(e,n,t)=>{const r=t.getBoundingClientRect();return{x:e-r.left+t.scrollLeft,y:n-r.top+t.scrollTop}},Qs=({data:e,baseData:n,zoom:t,startDate:r,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:l,separatorRowIndices:u=[]})=>{const c=n?n.length>0&&n[0].data.length>0&&!Array.isArray(n[0].data[0])?n.map(I=>({...I,data:[I.data]})):n:e,{enabled:d=!0,isDraggable:h,resourceOnly:v=!1,isValidDrop:b}=i,[x,k]=p.useState("idle"),[g,Y]=p.useState(null),[W,N]=p.useState({x:0,y:0}),[$,f]=p.useState({width:0,height:48}),[y,S]=p.useState(null),[D,O]=p.useState(!0),L=p.useRef({x:0,y:0}),J=p.useRef({x:0,y:0}),Q=p.useRef({x:0,y:0}),A=p.useRef(null),_=p.useRef(null),P=p.useRef(0),H=p.useRef(null),F=p.useCallback(I=>!d||I.draggable===!1?!1:h?h(I):!0,[d,h]),R=p.useCallback((I,M)=>{const V=br(M,u),q=Math.floor(V/he);let j;switch(t){case 0:j=_e*7;break;case 1:j=be;break;case 2:j=Me;break;default:j=be}const m=Math.floor(I/j);let X;const E=T().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:X=E.add(m*7,"days").toDate();break;case 1:X=E.add(m,"days").toDate();break;case 2:X=E.add(m,"hours").toDate();break;default:X=E.toDate()}return{snappedDate:X,snappedResourceIndex:q}},[t,r,u]),ee=p.useCallback((I,M,V,q)=>{const j=[],m=M.getTime(),X=V.getTime(),E=c.find(ne=>ne.id===q);if(!E)return j;const Z=[];for(const ne of E.data)Array.isArray(ne)?Z.push(...ne):Z.push(ne);for(const ne of Z){if(ne.segmentId===I.segmentId)continue;const K=ne.startDate.getTime(),ce=ne.endDate.getTime();if(m>=K&&m<ce||X>K&&X<=ce||m<=K&&X>=ce){const de=new Date(Math.max(m,K)),ie=new Date(Math.min(X,ce)),fe=ie.getTime()-de.getTime();j.push({event:ne,conflictStart:de,conflictEnd:ie,overlapDuration:fe})}}return j},[c]),se=p.useCallback((I,M,V,q)=>{const j=[],m=M.getTime(),X=V.getTime(),E=T(M).format("YYYY-MM-DD"),Z=c.find(K=>K.id===q);if(!Z)return j;const ne=[];for(const K of Z.data)Array.isArray(K)?ne.push(...K):ne.push(K);for(const K of ne){if(K.segmentId===I.segmentId)continue;const ce=K.startDate.getTime(),ue=K.endDate.getTime(),de=T(K.startDate).format("YYYY-MM-DD"),ie=T(K.endDate).format("YYYY-MM-DD"),fe=T(V).format("YYYY-MM-DD");if(!(de===E||ie===E||de===fe||ie===fe||T(K.startDate).isBefore(M,"day")&&T(K.endDate).isAfter(V,"day"))||m>=ce&&m<ue||X>ce&&X<=ue||m<=ce&&X>=ue)continue;let re,le;ue<=m?(re=m-ue,le="before"):(re=ce-X,le="after"),j.push({event:K,timeGap:re,position:le})}return j.sort((K,ce)=>K.timeGap-ce.timeGap)},[c]),ae=p.useCallback((I,M,V)=>{const q=R(M,V);let j,m;if(v)j=I.startDate,m=I.endDate;else{const ue=T(I.endDate).diff(I.startDate);j=q.snappedDate,m=T(j).add(ue,"milliseconds").toDate()}let X=0,E="",Z;for(const ue of e){const de=Math.max(ue.data.length,1);if(q.snappedResourceIndex<X+de){E=ue.id,Z=ue.capacity;break}X+=de}if(!E)return null;let ne=!0;Z!==void 0&&I.totalPassengers!==void 0&&(ne=I.totalPassengers<=Z);const K=ee(I,j,m,E),ce=K.length===0?se(I,j,m,E):[];return{startDate:j,endDate:m,resourceId:E,resourceIndex:q.snappedResourceIndex,resourceCapacity:Z,hasCapacity:ne,conflicts:K,hasConflict:K.length>0,nearbyEvents:ce}},[R,e,v,ee,se]),z=p.useCallback((I,M)=>{if(!s)return;const V=Date.now();if(V-P.current<100)return;P.current=V;const q={event:I,currentStartDate:M.startDate,currentEndDate:M.endDate,currentResourceId:M.resourceId,conflicts:M.conflicts};s(q)},[s]),B=p.useCallback((I,M)=>{if(!F(I)||!l.current)return;M.preventDefault(),M.stopPropagation();const V=M.target.closest('[style*="left"]');let q=0,j=0;V&&V.style.left&&V.style.top&&(q=parseInt(V.style.left),j=parseInt(V.style.top));const m=ct(M.clientX,M.clientY,l.current);L.current={x:q,y:j},J.current={x:M.clientX,y:M.clientY},Q.current={x:m.x-q,y:20},H.current={startDate:I.startDate,endDate:I.endDate,resourceId:""};for(const Z of e){for(const ne of Z.data)if(ne.some(K=>K.segmentId===I.segmentId)){H.current.resourceId=Z.id;break}if(H.current.resourceId)break}Y(I),k("potential"),N({x:q,y:j});let X=100,E=48;if(V){const Z=V.getBoundingClientRect();X=Z.width,E=Z.height}f({width:X,height:E})},[F,l,e,t]),U=p.useCallback(I=>{if(!l.current)return;let M=l.current;for(;M&&M!==document.body;){const K=window.getComputedStyle(M);if(M.scrollHeight>M.clientHeight&&(K.overflowY==="auto"||K.overflowY==="scroll"||K.overflow==="auto"||K.overflow==="scroll"))break;M=M.parentElement}(!M||M===document.body)&&(M=document.documentElement);const V=M.getBoundingClientRect(),q=I.clientY,j=50,m=12,X=q-V.top,E=V.bottom-q;let Z=!1,ne=0;X<j&&X>0?(Z=!0,ne=-m*(1-X/j)):E<j&&E>0&&(Z=!0,ne=m*(1-E/j)),Z?(_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{M.scrollTop+=ne,x==="dragging"&&U(I)})):_.current&&(cancelAnimationFrame(_.current),_.current=null)},[l,x]),te=p.useCallback(I=>{if(x==="idle"||x==="animating"||!g||!l.current)return;const M={x:I.clientX,y:I.clientY};if(x==="potential")if(wr(J.current,M))k("dragging");else return;U(I);const V=ct(I.clientX,I.clientY,l.current);A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{const q={x:V.x-Q.current.x,y:V.y-Q.current.y};N(q);const j=ae(g,V.x,V.y);if(j&&b){const m={event:g,currentStartDate:j.startDate,currentEndDate:j.endDate,currentResourceId:j.resourceId,conflicts:j.conflicts};j.hasConflict=!b(m)}if(S(j),j){const m=j.hasCapacity!==!1;O(m),z(g,j)}})},[x,g,l,ae,z,b,U]),C=p.useCallback(async I=>{if(x==="idle"||x==="animating")return;const M={x:I.clientX,y:I.clientY};if(!wr(J.current,M)||x==="potential"){k("idle"),Y(null),S(null);return}if(!g||!y||!H.current){k("idle"),Y(null),S(null);return}if(y.hasCapacity===!1){O(!1),k("animating"),N(L.current),setTimeout(()=>{k("idle"),Y(null),S(null),O(!0)},300);return}const q={event:g,originalStartDate:H.current.startDate,originalEndDate:H.current.endDate,originalResourceId:H.current.resourceId,newStartDate:y.startDate,newEndDate:y.endDate,newResourceId:y.resourceId,hasConflict:y.hasConflict,conflicts:y.conflicts};let j=!0;if(o)try{const m=o(q);j=m instanceof Promise?await m:m}catch{j=!1}j?(O(!0),k("idle"),Y(null),S(null)):(O(!1),k("animating"),N(L.current),setTimeout(()=>{k("idle"),Y(null),S(null),O(!0)},300))},[x,g,y,o,b]);return p.useEffect(()=>{if(x==="potential"||x==="dragging"){const I=V=>te(V),M=V=>C(V);return document.addEventListener("mousemove",I),document.addEventListener("mouseup",M),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",M)}}else return()=>{}},[x,te,C]),p.useEffect(()=>()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null)},[]),p.useEffect(()=>{(x==="idle"||x==="animating")&&(A.current&&(cancelAnimationFrame(A.current),A.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null))},[x]),p.useEffect(()=>{(x==="dragging"||x==="potential")&&(x==="dragging"?(k("animating"),N(L.current),setTimeout(()=>{k("idle"),Y(null),S(null)},300)):(k("idle"),Y(null),S(null)))},[t]),p.useEffect(()=>{if((x==="dragging"||x==="potential")&&g){let I=!1;for(const M of e){for(const V of M.data)if(V.some(q=>q.segmentId===g.segmentId)){I=!0;break}if(I)break}I||(x==="dragging"?(k("animating"),N(L.current),setTimeout(()=>{k("idle"),Y(null),S(null)},300)):(k("idle"),Y(null),S(null)))}},[e,x,g]),{dragState:x,draggedEvent:g,ghostPosition:W,ghostDimensions:$,dropTarget:y,isValidDrop:D,handleDragStart:B,isDraggable:F,draggingEventId:(g==null?void 0:g.segmentId)||null,resourceOnly:v}},Rs=({data:e,baseData:n,zoom:t,startDate:r,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:l,isDragging:u,separatorRowIndices:c=[]})=>{const{enabled:d=!1,isSelectable:h}=i,v=d&&!!o,b=p.useCallback(m=>{let X=0;for(const E of c)E<=m&&X++;return m*he+X*Ee},[c]),[x,k]=p.useState("idle"),[g,Y]=p.useState(null),[W,N]=p.useState(null),[$,f]=p.useState(null),[y,S]=p.useState(!1),[D,O]=p.useState([]),[L,J]=p.useState(!1),Q=p.useRef(null),A=p.useRef(null),_=p.useRef(null),P=p.useRef(null),H=p.useCallback(()=>{switch(t){case 0:return _e*7;case 1:return be;case 2:return Me;default:return be}},[t]),F=p.useCallback(m=>{const X=H(),E=Math.floor(m/X),Z=T().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return Z.add(E*7,"days").toDate();case 1:return Z.add(E,"days").toDate();case 2:return Z.add(E,"hours").toDate();default:return Z.toDate()}},[t,r,H]),R=p.useCallback(m=>{const X=br(m,c),E=Math.floor(X/he);let Z=0;for(const ne of e){const K=Math.max(ne.data.length,1);if(E<Z+K)return{resourceId:ne.id,resourceIndex:E,resourceLabel:ne.label};Z+=K}return null},[e,c]),ee=p.useCallback(m=>{const X=H();return Math.floor(m/X)*X},[H]),se=p.useCallback((m,X,E,Z=[])=>{const ne=[],ce=(n||e).find(ie=>ie.id===m),ue=X.getTime(),de=E.getTime();if(ce){const ie=ce.data[0],fe=ie&&Array.isArray(ie)?ce.data.flat():ce.data;for(const pe of fe){const G=new Date(pe.startDate).getTime(),re=new Date(pe.endDate).getTime();if(ue<re&&de>G){const le=new Date(Math.max(ue,G)),xe=new Date(Math.min(de,re)),we=xe.getTime()-le.getTime();ne.push({event:pe,conflictStart:le,conflictEnd:xe,overlapDuration:we})}}}for(const ie of Z){if(ie.resourceId!==m)continue;const fe=ie.startDate.getTime(),pe=ie.endDate.getTime();if(ue<pe&&de>fe){const G=new Date(Math.max(ue,fe)),re=new Date(Math.min(de,pe)),le=re.getTime()-G.getTime(),xe={segmentId:`pending-${ie.startDate.getTime()}`,reservationId:`pending-${ie.startDate.getTime()}`,startDate:ie.startDate,endDate:ie.endDate,occupancy:0,title:`New Event (${ie.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ne.push({event:xe,conflictStart:G,conflictEnd:re,overlapDuration:le})}}return ne},[e,n]),ae=p.useCallback(m=>{if(!v||u||!l.current||m.button!==0)return;const X=m.target;if(X.closest("[data-segment-id]")||X.closest("[data-multi-select-ui]"))return;const E=ct(m.clientX,m.clientY,l.current),Z=R(E.y);if(!Z)return;Q.current={x:m.clientX,y:m.clientY},A.current=Z.resourceIndex;const ne=ee(E.x),K=H(),ce=b(Z.resourceIndex);Y(E),N(E),f({x:ne,y:ce,width:K,height:he}),k("selecting")},[v,u,l,R,ee,H,b]),z=p.useCallback(m=>{N(m);const X=H(),E=ee((g==null?void 0:g.x)||0),Z=ee(m.x),ne=b(A.current),K=Math.min(E,Z),ce=Math.max(E,Z)+X;f({x:K,y:ne,width:ce-K,height:he})},[g,H,ee,b]),B=p.useCallback(()=>{P.current&&(cancelAnimationFrame(P.current),P.current=null)},[]),U=p.useCallback((m,X)=>{const E=document.getElementById(Ye);if(!E||!l.current)return;const Z=E.getBoundingClientRect(),ne=60,K=12,ce=m-(Z.left+De),ue=Z.right-m;let de=0;ce<ne?de=-K*(1-Math.max(0,ce)/ne):ue<ne&&(de=K*(1-Math.max(0,ue)/ne)),B(),de!==0&&(P.current=requestAnimationFrame(()=>{E.scrollLeft+=de,z(ct(m,X,l.current)),U(m,X)}))},[l,z,B]),te=p.useCallback(m=>{if(x!=="selecting"||!l.current||A.current===null)return;const X=ct(m.clientX,m.clientY,l.current);_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>z(X)),U(m.clientX,m.clientY)},[x,l,z,U]),C=p.useCallback(m=>{if(x!=="selecting")return;if(B(),!l.current||!g||!Q.current){k("idle"),Y(null),N(null),f(null);return}const X=ct(m.clientX,m.clientY,l.current),E=R(g.y);if(!E){k("idle"),Y(null),N(null),f(null);return}const Z=Math.min(g.x,X.x),ne=Math.max(g.x,X.x),K=F(Z),ce=F(ne),ue=T(ce).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(E.resourceId,K,ue)){k("idle"),Y(null),N(null),f(null);return}const de=se(E.resourceId,K,ue,D),ie=de.length>0,fe={startDate:K,endDate:ue,resourceId:E.resourceId,resourceLabel:E.resourceLabel,zoomLevel:t,hasConflict:ie,conflicts:ie?de:void 0};if(y)O(pe=>[...pe,fe]),J(!0);else if(o){const pe=o(fe),G=re=>{re!=null&&re.continueMultiSelect&&(S(!0),O([fe]),J(!0))};pe instanceof Promise?pe.then(G):G(pe)}k("idle"),Y(null),N(null),f(null),Q.current=null,A.current=null},[x,l,g,R,F,h,o,t,y,se,D,B]),I=p.useCallback(()=>{if(D.length>0&&s){J(!1);const m=s(D),X=E=>{E!=null&&E.continueMultiSelect?J(!0):(O([]),S(!1),J(!1))};m instanceof Promise?m.then(X):X(m);return}O([]),S(!1),J(!1)},[D,s]),M=p.useCallback(()=>{O([]),S(!1),J(!1)},[]),V=p.useCallback(m=>{O(X=>{const E=X.filter((Z,ne)=>ne!==m);return E.length===0&&(S(!1),J(!1)),E})},[]),q=p.useCallback((m,X)=>{O(E=>E.map((Z,ne)=>{if(ne!==m)return Z;const K={...Z,...X},ce=E.filter((de,ie)=>ie!==m),ue=se(K.resourceId,K.startDate,K.endDate,ce);return{...K,hasConflict:ue.length>0,conflicts:ue.length>0?ue:void 0}}))},[se]),j=p.useCallback(m=>{m.key==="Escape"&&(x==="selecting"?(B(),k("idle"),Y(null),N(null),f(null),Q.current=null,A.current=null):y&&D.length>0&&(O([]),S(!1),J(!1)))},[x,y,D.length,B]);return p.useEffect(()=>{if(x==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",C),document.addEventListener("keydown",j),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",C),document.removeEventListener("keydown",j)}},[x,te,C,j]),p.useEffect(()=>{if(y&&D.length>0)return document.addEventListener("keydown",j),()=>{document.removeEventListener("keydown",j)}},[y,D.length,j]),p.useEffect(()=>()=>{_.current&&(cancelAnimationFrame(_.current),_.current=null),B()},[B]),p.useEffect(()=>{u&&x==="selecting"&&(B(),k("idle"),Y(null),N(null),f(null),Q.current=null,A.current=null)},[u,x,B]),{selectionState:x,selectionStart:g,selectionEnd:W,selectionBox:$,handleGridMouseDown:ae,isEnabled:v,pendingSelections:D,confirmSelections:I,clearSelections:M,removeSelection:V,updateSelection:q,isMultiSelectActive:y,hasUnconfirmedSelections:L}},ei=w.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,ti=w.div`
  position: relative;
`,ni=w.canvas``;w.canvas``;const Sr=w.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,ri=p.forwardRef(function({zoom:n,rows:t,data:r,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:l,draggableConfig:u,onDragStateChange:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:b=[]},x){const k=p.useRef(!1),{handleScrollNext:g,handleScrollPrev:Y,date:W,isLoading:N,cols:$,startDate:f,suppressNextSlideRef:y}=Le(),S=p.useRef(null),D=p.useRef(null),O=p.useRef(null),L=p.useRef(null),[J,Q]=p.useState(!1),A=Dt(),{dragState:_,draggedEvent:P,ghostPosition:H,ghostDimensions:F,dropTarget:R,isValidDrop:ee,handleDragStart:se,isDraggable:ae,draggingEventId:z,resourceOnly:B}=Qs({data:r,baseData:o||r,zoom:n,startDate:f,onEventDrop:i,onEventDrag:l,draggableConfig:u,gridRef:L,separatorRowIndices:b});p.useEffect(()=>{const ie=_==="dragging"||_==="potential";Q(ie),c&&c(ie)},[_,c]);const U=p.useRef(!1),te=p.useRef(W),C=p.useRef(null);p.useEffect(()=>{var le;const ie=te.current;if(te.current=W,!U.current){U.current=!0;return}if(y!=null&&y.current){y.current=!1;return}const fe=L.current;if(!(fe!=null&&fe.animate))return;const pe=W.isAfter(ie)?48:-48;(le=C.current)==null||le.cancel(),fe.style.willChange="transform";const G=fe.animate([{transform:`translateX(${pe}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),re=()=>{fe.style.willChange=""};G.onfinish=re,G.oncancel=re,C.current=G},[W,y]);const{selectionState:I,selectionBox:M,handleGridMouseDown:V,pendingSelections:q,confirmSelections:j,clearSelections:m,removeSelection:X,updateSelection:E,isMultiSelectActive:Z,hasUnconfirmedSelections:ne}=Rs({data:r,baseData:o||r,zoom:n,startDate:f,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,gridRef:L,isDragging:J,separatorRowIndices:b}),K=p.useCallback(ie=>{ie.preventDefault()},[]),ce=p.useCallback(ie=>{ie.preventDefault()},[]),ue=b.length*Ee,de=p.useCallback(ie=>{const fe=hn(),pe=t*he+1+ue;xr(ie,fe,pe),ws(ie,n,t,$,f,A,b)},[$,f,t,n,A,b,ue]);return p.useEffect(()=>{if(!S.current)return;const ie=S.current.getContext("2d");if(!ie)return;const fe=()=>de(ie);return window.addEventListener("resize",fe),()=>window.removeEventListener("resize",fe)},[de]),p.useEffect(()=>{const ie=S.current;if(!ie)return;ie.style.letterSpacing="1px";const fe=ie.getContext("2d");fe&&de(fe)},[W,t,n,de]),p.useEffect(()=>{if(!D.current)return;const ie=new IntersectionObserver(fe=>{fe[0].isIntersecting&&!k.current&&(k.current=!0,g(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Ye)});return ie.observe(D.current),()=>{ie.disconnect()}},[g]),p.useEffect(()=>{if(!O.current)return;const ie=new IntersectionObserver(fe=>{fe[0].isIntersecting&&!k.current&&(k.current=!0,Y(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Ye),rootMargin:`0px 0px 0px -${De}px`});return ie.observe(O.current),()=>{ie.disconnect()}},[Y]),a.jsxs(ei,{id:ir,children:[a.jsxs(ti,{ref:ie=>{typeof x=="function"?x(ie):x&&(x.current=ie),L.current=ie},onMouseDown:V,style:{cursor:d?"crosshair":"default"},children:[a.jsx(Sr,{position:"left",ref:O}),a.jsx(Mn,{isLoading:N,position:"left"}),a.jsx(ni,{ref:S,onDragStart:K,onDragOver:ce,style:{userSelect:_==="dragging"?"none":"auto"}}),a.jsx(kl,{zoom:n,startDate:f}),a.jsx(Oc,{data:r,zoom:n,onTileClick:s,onDragStart:se,isDraggable:ae,draggingEventId:z,separatorRowIndices:b}),a.jsx(Sr,{ref:D,position:"right"}),a.jsx(Mn,{isLoading:N,position:"right"}),(_==="dragging"||_==="animating")&&a.jsx(il,{draggedEvent:P,ghostPosition:H,ghostDimensions:F,dropTarget:R,isValidDrop:ee,dragState:_,zoom:n,data:r,resourceOnly:B,separatorRowIndices:b}),a.jsx(ll,{selectionBox:M,isSelecting:I==="selecting"}),Z&&q.length>0&&a.jsx(Cl,{selections:q,data:r,zoom:n,startDate:f,onRemove:X,onUpdate:E,separatorRowIndices:b})]}),Z&&ne&&q.length>0&&a.jsx(yl,{selections:q,onConfirm:j,onClear:m,onRemove:X})]})}),Cr=e=>{const n=T.duration(e,"seconds"),t=n.hours(),r=n.minutes();return{hours:t,minutes:r}},Mr=e=>{let n=0,t=0,r=0;return e.forEach(o=>{n+=o.minutes;const s=Math.floor(n/Se);t+=o.hours+s,r+=n%Se,r>=Se&&(t++,r-=Se)}),{hours:t,minutes:r}},kr=(e,n)=>{let t=ar;switch(n){case 0:t=hs;break;case 1:t=ar;break;case 2:t=1;break}const r=()=>{let s=t-e.hours-1,i=Se-e.minutes;return i===Se&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:r(),overtime:o()}},oi=(e,n,t)=>{const r=n.isoWeek(),o=e.map(c=>{const d=T(c.startDate).isoWeek(),h=T(c.startDate).isoWeekday(),v=T(c.endDate).isoWeek(),b=T(c.endDate).isoWeekday(),{hours:x,minutes:k}=Cr(c.occupancy);if(r===d){const g=(Ze+1-h)*x,Y=(Ze+1-h)*k;return{hours:Math.max(0,g),minutes:Y}}else if(r===v){const g=b>Ze?Ze*x:b*x,Y=b>Ze?Ze*k:b*k;return{hours:g,minutes:Y}}else if(T(n).isBetween(c.startDate,c.endDate))return{hours:Ze*x,minutes:Ze*k};return{hours:0,minutes:0}}),{hours:s,minutes:i}=Mr(o),{free:l,overtime:u}=kr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:l,overtime:u}},si=(e,n,t,r)=>{const o=n.isoWeekday(),s=e.map(d=>{const{hours:h,minutes:v}=Cr(d.occupancy);return o<=(r?7:5)?{hours:h,minutes:v}:{hours:0,minutes:0}}),{hours:i,minutes:l}=Mr(s),{free:u,overtime:c}=kr({hours:i,minutes:l},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,l)},free:u,overtime:c}},ii=(e,n)=>{let t=0;e.forEach(l=>{const u=T(l.startDate).hour(),c=T(l.endDate).hour(),d=n.hour(),h=T(l.endDate).minute(),v=T(l.startDate).minute();u<d&&c>d?t+=Se:u===d&&c===d&&v&&h?t+=h?h-v:Se-v:u===d&&c>=d?t+=v?Se-v:Se:c===d&&h&&(t+=h)});const r=Math.floor(t/Se),o=t%Se,s=r||o?0:1,i=r?0:o?Se-o:0;return{taken:{hours:r,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},ai=(e,n,t,r,o=!1)=>{if(n<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>r===1?T(t).isBetween(i.startDate,i.endDate,"day","[]"):r===2?T(t).isBetween(i.startDate,i.endDate,"hour","[]"):T(i.startDate).isBetween(T(t),T(t).add(6,"days"),"day","[]")||T(t).isBetween(T(i.startDate),T(i.endDate),"day","[]"));switch(r){case 1:return si(s,t,r,o);case 2:return ii(s,t);default:return oi(s,t,r)}},ci=(e,n,t,r,o,s,i=!1)=>{let l="weeks",u;switch(s){case 0:l="weeks",u=ot;break;case 1:l="days",u=be;break;case 2:l="hours",u=Me;break}const c=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=T(`${n.year}-${n.month+1}-${n.dayOfMonth}T${n.hour}:00:00`).add(c-1,l),h=Math.ceil(t.y/he),v=r.findIndex((Y,W,N)=>N.slice(0,W+1).reduce((f,y)=>f+y,0)>=h),b=s===2?(c+1)*u:c*u,x=(h-1)*he+he,k=ai(o[v],v,d,s,i),g=T(e.startDate).isSame(T(e.endDate),"day");return{coords:{x:b,y:x},mouseCoords:t,resourceIndex:v,disposition:k,reservationData:{startTime:T(e.startDate).format("hh:mm A"),startDate:T(e.startDate).format("MMM D, YYYY"),endTime:T(e.endDate).format("hh:mm A"),endDate:T(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:g,passengers:e.totalPassengers}}};function li(e,n){if(e.length<=1)return[];if(e.length<=n){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const r=Math.min(n-1,t.length);return t.slice(0,r).map(o=>o.index).sort((o,s)=>o-s)}function di(e){const n={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&d.capacity!=null&&t.add(d.capacity);const r=[...t].sort((d,h)=>d-h);if(r.length<2)return n;const o=Math.min(5,r.length),s=li(r,o),i=[];let l=0;for(const d of s)i.push({min:r[l],max:r[d-1],values:r.slice(l,d)}),l=d;i.push({min:r[l],max:r[r.length-1],values:r.slice(l)});const u=[],c=new Map;return i.forEach((d,h)=>{const v="__auto_cat_"+h,b=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:v,name:b,minPassengers:d.min,maxPassengers:d.max});for(const x of d.values)c.set(x,v)}),{categories:u,capacityToCategoryId:c}}const ui=(e,n,t,r)=>{const o=[];let s=0,i=[],l=0;return n.length>r?(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=r&&(o.push(i),s+=i.length,i=[],l=0),l++,i.push(d)}),t.slice(s).length<=r&&(i=[],n.slice(s).forEach((u,c)=>{const d={id:e[c+s].id,label:e[c+s].label,data:u,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};i.push(d),c===n.length-s-1&&o.push(i)})),o):(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};i.push(d)}),o.push(i),o)};var pn={},fi={get exports(){return pn},set exports(e){pn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r){r.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(fi);const hi=pn;var gn={},pi={get exports(){return gn},set exports(e){gn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r){r.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(pi);const gi=gn,mi=e=>{const n=[];for(const t of e){let r=!1;if(n.length)for(const o of n){let s=!1;for(let i=0;i<o.length;i++){const l=T(t.startDate).startOf("day"),u=T(t.endDate).startOf("day"),c=T(o[i].startDate).startOf("day"),d=T(o[i].endDate).startOf("day");if(l.isBetween(c,d,null,"[]")||u.isBetween(c,d,null,"[]")||l.isBefore(c,"minute")&&u.isAfter(d,"minute")||l.isAfter(c,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),r=!0;break}}r||n.push([t])}return n};T.extend(hi),T.extend(gi);const $r=new WeakMap,yi=e=>{const n=$r.get(e);if(n)return n;const t=[...e].sort((o,s)=>{const i=T(o.startDate),l=T(s.startDate),u=i.startOf("day").diff(l.startOf("day"),"day");return u!==0?u:i.diff(l)}),r=mi(t);return $r.set(e,r),r},vi=e=>{const n=[[],[]],[t,r]=e.reduce((o,s)=>{const i=yi(s.data);return o[0].push(i),o[1].push(Math.max(i.length,1)),o},n);return{projectsPerPerson:t,rowsPerPerson:r}},xi=e=>e?e.map(n=>n.data.length).reduce((n,t)=>n+Math.max(t,1),0):0,bi=e=>{const{recordsThreshold:n}=Le(),[t,r]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Ye)},[]);const{projectsPerPerson:l,rowsPerPerson:u}=p.useMemo(()=>vi(e),[e]),c=p.useMemo(()=>ui(e,l,u,n),[e,l,n,u]),d=p.useCallback(()=>{c[o].length&&i.current&&(i.current.scroll({top:0}),r(g=>g+c[Math.max(o,0)].length),s(g=>Math.min(g+1,c.length-1)),window.scroll({top:0}))},[o,c]),h=p.useCallback(()=>{c[o].length&&(r(g=>Math.max(g-c[o-1].length,0)),s(g=>Math.max(g-1,0)))},[o,c]),v=p.useCallback(()=>{r(0),s(0)},[]),b=t+c[o].length,x=p.useMemo(()=>u.slice(t,b),[b,u,t]),k=p.useMemo(()=>l.slice(t,b),[b,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:k,rowsPerItem:x,totalRowsPerPage:xi(c[o]),next:d,previous:h,reset:v}};var mn={},wi={get exports(){return mn},set exports(e){mn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var r=["th","st","nd","rd"],o=t%100;return"["+t+(r[(o-20)%10]||r[o]||r[0])+"]"}}})})(wi);const Si=mn;var yn={},Ci={get exports(){return yn},set exports(e){yn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=r(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function i(v,b,x){var k=v+" ";switch(x){case"m":return b?"minuta":"minutę";case"mm":return k+(s(v)?"minuty":"minut");case"h":return b?"godzina":"godzinę";case"hh":return k+(s(v)?"godziny":"godzin");case"MM":return k+(s(v)?"miesiące":"miesięcy");case"yy":return k+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,d=function(v,b){return c.test(b)?l[v.month()]:u[v.month()]};d.s=u,d.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(Ci);const Mi=yn;var vn={},ki={get exports(){return vn},set exports(e){vn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=r(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(u,c,d){var h=s[d];return Array.isArray(h)&&(h=h[c?0:1]),h.replace("%d",u)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(l,null,!0),l})})(ki);const $i=vn;var xn={},Di={get exports(){return xn},set exports(e){xn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=r(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,h){return l.test(h)?s[d.month()]:i[d.month()]};u.s=i,u.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Di);const Ei=xn;var bn={},_i={get exports(){return bn},set exports(e){bn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=r(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(_i);const Ti=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Si},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Mi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:bn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:Ei},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:$i}];class Ai{constructor(){ro(this,"locales",Ti)}getLocales(){return this.locales}addLocales(n){this.locales.push(n)}}const At=new Ai,Dr=p.createContext({localesData:At.getLocales(),currentLocale:At.getLocales()[0],setCurrentLocale:()=>{}}),Pi=({children:e,lang:n,translations:t})=>{const[r,o]=p.useState("en"),s=At.getLocales(),i=p.useCallback(()=>{const h=s.find(v=>v.id===r);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&T.locale(h.dayjsTranslations),h||s[0]},[r,s]),[l,u]=p.useState(i()),c=h=>{localStorage.setItem("locale",h.translateCode),u(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(b=>b.id===h.id)||At.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),v=n??h??"en";localStorage.setItem("locale",v),o(v),u(i())},[i,n]);const{Provider:d}=Dr;return a.jsx(d,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Ne=()=>p.useContext(Dr).currentLocale.lang,Oi=e=>oe.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},oe.createElement("defs",null,oe.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),oe.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},oe.createElement("stop",{offset:.47,stopColor:"#ccc"}),oe.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),oe.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),oe.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),oe.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),oe.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),oe.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),oe.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),oe.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),oe.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),oe.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),oe.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Ii=w.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Yi=w.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Li=({onTileClick:e})=>{const{feelingEmpty:n}=Ne();return a.jsxs(Ii,{onClick:e,children:[a.jsx(Oi,{}),a.jsx(Yi,{children:n})]})},Ni=w.div`
  position: relative;
  display: flex;
`,Fi=w.div`
  position: relative;
  margin-left: ${De};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Hi=w.div`
  width: calc(${({width:e})=>e}px - ${De}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${De}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,wn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:vt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function zi(e,n){const t=n?[...n].sort((l,u)=>l.maxPassengers-u.maxPassengers):[],r=[];for(const l of t){const u=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);u.length>0&&r.push({type:"category",category:l,items:u})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?r.push({type:"uncategorized",items:s}):s.length>0&&r.push({type:"uncategorized",items:s});const i=e.filter(l=>l.isSubcontract);return i.length>0&&r.push({type:"subcontract",items:i}),r}const Bi=({data:e,baseData:n,categories:t,onTileClick:r,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v})=>{const[b,x]=p.useState(wn),[k,g]=p.useState(e),[Y,W]=p.useState(!1),[N,$]=p.useState(!1),[f,y]=p.useState(""),[S,D]=p.useState(new Set),{zoom:O,startDate:L,isLoading:J,config:{includeTakenHoursOnWeekendsInDayView:Q,showTooltip:A,showThemeToggle:_}}=Le(),P=p.useRef(null),H=p.useRef(null),[F,R]=p.useState(124),{page:ee,projectsPerPerson:se,rowsPerItem:ae,currentPageNum:z,pagesAmount:B,next:U,previous:te,reset:C}=bi(k),{effectiveCategories:I,effectivePage:M}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:ee};const G=di(ee);if(G.categories.length===0)return{effectiveCategories:void 0,effectivePage:ee};const re=ee.map(le=>{if(le.isSubcontract||le.capacity==null)return le;const xe=G.capacityToCategoryId.get(le.capacity);return xe?{...le,categoryId:xe}:le});return{effectiveCategories:G.categories,effectivePage:re}},[t,ee]),V=p.useCallback(G=>{D(re=>{const le=new Set(re);return le.has(G)?le.delete(G):le.add(G),le})},[]),q=p.useMemo(()=>{const G=[],re=I?[...I].sort((le,xe)=>le.maxPassengers-xe.maxPassengers):[];for(const le of re)M.some(xe=>!xe.isSubcontract&&xe.categoryId===le.id)&&G.push(le.id);return M.some(le=>le.isSubcontract)&&G.push("__subcontract__"),G},[I,M]),j=p.useCallback(()=>{D(new Set)},[]),m=p.useCallback(()=>{D(new Set(q))},[q]),{visiblePage:X,visibleRowsPerItem:E,visibleTotalRows:Z,visibleProjectsPerPerson:ne,separatorRowIndices:K}=p.useMemo(()=>{const G=zi(M,I),re=((I==null?void 0:I.length)??0)>0,le=new Map;ee.forEach((ke,We)=>le.set(ke.id,We));const xe=[],we=[],ze=[],Be=[];let ut=0;for(const ke of G)if(ke.type==="subcontract"||ke.type==="category"&&re){const ft=ke.type==="subcontract"?"__subcontract__":ke.category.id,ht=S.has(ft);if(Be.push(ut),!ht)for(const Ke of ke.items){const Ot=le.get(Ke.id)??0,It=ae[Ot];xe.push(Ke),we.push(It),ze.push(se[Ot]),ut+=It}}else for(const ft of ke.items){const ht=le.get(ft.id)??0,Ke=ae[ht];xe.push(ft),we.push(Ke),ze.push(se[ht]),ut+=Ke}const En=we.reduce((ke,We)=>ke+We,0);return{visiblePage:xe,visibleRowsPerItem:we,visibleTotalRows:En,visibleProjectsPerPerson:ze,separatorRowIndices:Be}},[M,I,ee,S,ae,se]),ce=p.useRef(dn((G,re,le,xe,we,ze)=>{if(!P.current)return;const{tile:Be,segmentId:ut}=ie(G);if(!ut||!Be){W(!1),x(wn);return}const En=de(ut,re),ke=P.current.getBoundingClientRect(),We=Be.getBoundingClientRect(),ft={x:G.clientX-ke.left,y:G.clientY-ke.top},ht={x:G.clientX-ke.left,y:G.clientY-ke.top},Ke={x:We.left-ke.left,y:We.top-ke.top,width:We.width,height:We.height},{coords:{x:Ot,y:It},resourceIndex:$l,disposition:Dl,reservationData:El}=ci(En,le,ft,xe,we,ze,Q);x({coords:{x:Ot,y:It},mouseCoords:ht,resourceIndex:$l,disposition:Dl,reservationData:El,tileBounds:Ke}),W(!0)},4)),ue=p.useRef(dn((G,re)=>{C(),g(G.map(le=>({...le,data:le.data.filter(xe=>{const{title:we,description:ze,subtitle:Be}=xe;return(we==null?void 0:we.toLowerCase().includes(re.toLowerCase()))||(Be==null?void 0:Be.toLowerCase().includes(re.toLowerCase()))||(ze==null?void 0:ze.toLowerCase().includes(re.toLowerCase()))})})).filter(le=>le.data.length>0))},500)),de=(G,re)=>{if(G)return re.flatMap(le=>le.data).find(le=>le.segmentId===G)},ie=G=>{if(!G.target)return{tile:null,segmentId:null};const re=G.target.closest("[data-segment-id]");return re?{tile:re,segmentId:re.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},fe=G=>{const re=G.target.value;y(re),ue.current.cancel(),re?ue.current(e,re):(C(),g(e))},pe=p.useCallback(()=>{ce.current.cancel(),W(!1),x(wn)},[]);return p.useEffect(()=>{const G=le=>ce.current(le,e,L,E,ne,O),re=P.current;if(re)return re.addEventListener("mousemove",G),re.addEventListener("mouseleave",pe),()=>{re.removeEventListener("mousemove",G),re.removeEventListener("mouseleave",pe)}},[ce,pe,ne,E,L,O,e]),p.useEffect(()=>{f?(ue.current.cancel(),ue.current(e,f)):g(e)},[e,f]),p.useLayoutEffect(()=>{const G=H.current;if(!G)return;const re=()=>R(G.offsetHeight);re();const le=new ResizeObserver(re);return le.observe(G),()=>le.disconnect()},[]),a.jsxs(Ni,{children:[a.jsx(Ba,{headerHeight:F,data:M,categories:I,pageNum:z,pagesAmount:B,rows:ae,onLoadNext:U,onLoadPrevious:te,searchInputValue:f,onSearchInputChange:fe,onItemClick:o,collapsedGroups:S,onToggleGroup:V,allGroupIds:q,onExpandAll:j,onCollapseAll:m}),a.jsxs(Fi,{children:[a.jsx(gc,{ref:H,zoom:O,topBarWidth:i,showThemeToggle:_,toggleTheme:s}),e.length?a.jsx(ri,{data:X,baseData:n||e,zoom:O,rows:Z,ref:P,onTileClick:r,onEventDrop:l,onEventDrag:u,draggableConfig:c,onDragStateChange:$,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:K}):a.jsx(Hi,{width:i,children:J?a.jsx(Mn,{isLoading:J,position:"left"}):a.jsx(Li,{})}),A&&Y&&!N&&(b==null?void 0:b.resourceIndex)>-1&&a.jsx(Kc,{tooltipData:b})]})]})},Wi=w.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
`,Sn=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({$at:e})=>e??"start"};
  justify-content: ${({$at:e})=>e==="end"?"flex-end":e==="center"?"center":"flex-start"};
`,ji=w.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Er=w.button`
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
    background: ${({theme:e})=>e.colors.hover};
  }
`,Zi=w.button`
  font-size: 13px;
  font-weight: 700;
  color: #183d3d;
  border: 1px solid #c8d5cd;
  background: #fff;
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  &:hover {
    background: ${({theme:e})=>e.colors.hover};
  }
`,Vi=w.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,Gi=w.div`
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
    border-left: 1px solid ${({theme:e})=>e.colors.border};
  }
  & > button.on {
    background: ${({theme:e})=>e.colors.accent};
    color: #fff;
  }
`,_r=w.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 650;
  color: ${({$primary:e})=>e?"#fff":"#3a4c46"};
  border: 1px solid ${({$primary:e})=>e?"transparent":"#c8d5cd"};
  background: ${({theme:e,$primary:n})=>n?e.colors.accent:"#fff"};
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
`,Xi=w.label`
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
`,Ui=w.button`
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
    background: ${({theme:e})=>e.colors.primary};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 4px;
    padding: 0 5px;
  }
`,Ki=w.span`
  background: ${({theme:e})=>e.colors.accent};
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
`,lt=({children:e,sw:n=2})=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:e}),qi=()=>{var n,t;const e=document.getElementById(ur);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(n=e==null?void 0:e.requestFullscreen)==null||n.call(e)},Ji=()=>{const{config:e,date:n,zoom:t,handleGoNext:r,handleGoPrev:o,handleGoToday:s,setZoom:i,goToDate:l,toggleDisplayActiveUnits:u}=Le();Ne();const{filterButtonState:c=-1}=e,d=()=>{var h;(h=document.querySelector(`#${Ye} input[placeholder]`))==null||h.focus()};return a.jsxs(Wi,{width:0,children:[a.jsxs(Sn,{$at:"start",children:[a.jsx(Vi,{children:n.locale(T.locale()).format("MMMM YYYY")}),a.jsxs(Gi,{children:[a.jsx("button",{className:t===2?"on":"",onClick:()=>i(2),children:"Día"}),a.jsx("button",{className:t===0?"on":"",onClick:()=>i(0),children:"Semana"}),a.jsx("button",{className:t===1?"on":"",onClick:()=>i(1),children:"Mes"})]}),e.showJumpToDate!==!1&&a.jsxs(Xi,{children:[a.jsxs(lt,{children:[a.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),a.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),a.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",a.jsx("input",{type:"date",onChange:h=>h.target.value&&l(h.target.value)})]})]}),a.jsx(Sn,{$at:"center",children:a.jsxs(ji,{children:[a.jsx(Er,{onClick:o,"aria-label":"Anterior",children:a.jsx(lt,{children:a.jsx("path",{d:"m15 18-6-6 6-6"})})}),a.jsx(Zi,{onClick:s,children:"Hoy"}),a.jsx(Er,{onClick:r,"aria-label":"Siguiente",children:a.jsx(lt,{children:a.jsx("path",{d:"m9 18 6-6-6-6"})})})]})}),a.jsxs(Sn,{$at:"end",children:[a.jsxs(Ui,{onClick:d,children:[a.jsxs(lt,{children:[a.jsx("circle",{cx:"11",cy:"11",r:"7"}),a.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",a.jsx("span",{className:"k",children:"⌘K"})]}),e.showFilterButton!==!1&&c>=0&&a.jsxs(_r,{$primary:!!c,onClick:u,children:[a.jsx(lt,{children:a.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&a.jsx(Ki,{children:c})]}),e.showFullscreenButton!==!1&&a.jsxs(_r,{onClick:qi,children:[a.jsx(lt,{children:a.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]})]})]})},Qi={add:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>oe.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),oe.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Cn=({iconName:e,width:n,height:t,fill:r,className:o})=>{const{colors:s}=Dt(),i=Qi[e];return i?a.jsx(i,{style:{transition:".5s ease"},fill:r??s.accent,width:n,height:t,className:o}):null},Ri=(e,n,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[n];w.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({isFullRounded:e})=>e?"50%":"4px"};
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  font-size: 14px;
  gap: 4px;
  padding: ${({hasChildren:e})=>e?"0 10px":"0"};
  transition: 0.5s ease;
  ${({theme:e,variant:n,disabled:t})=>Ri(e,n,t)}
`;const ea=w.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${dr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ae};
`,ta=w.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,na=w.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,ra=w.div`
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
`,oa=w.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,sa=w.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,ia=w.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({$sev:e})=>e===2?"#c6483d":e===1?"#d98a22":"#93b1a6"};
`,aa=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 2px;
  background: ${({theme:e})=>e.colors.today};
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
    background: ${({theme:e})=>e.colors.today};
    padding: 0 3px;
    border-radius: 3px;
    letter-spacing: 0.03em;
  }
`,ca=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,la=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,da=w.div`
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
`,ua=()=>{const{date:e,zoom:n,data:t,goToDate:r}=Le(),o=Ne(),s=p.useRef(null),[i,l]=p.useState(null),u=p.useMemo(()=>Array.from({length:12},($,f)=>T().month(f).format("MMM").toUpperCase()),[o]),c=e.year(),d=p.useMemo(()=>T(new Date(c,0,1)),[c]),h=p.useMemo(()=>T(new Date(c+1,0,1)).diff(d,"day"),[c,d]),v=$=>$.diff(d,"day")/h*100,b=p.useMemo(()=>{const $=Math.ceil(h/7),f=new Array($).fill(0),y=new Array($).fill(0);for(const D of t??[])for(const O of D.data??[]){const L=T(O.startDate);if(L.year()!==c)continue;const J=Math.floor(L.diff(d,"day")/7);if(J<0||J>=$)continue;f[J]+=1;const Q=O.readiness==="sin_chofer"?2:O.readiness==="sin_avisar"?1:0;Q>y[J]&&(y[J]=Q)}const S=Math.max(1,...f);return f.map((D,O)=>({h:D/S*100,sev:y[O]}))},[t,c,d,h]),x=T(),k=x.year()===c?v(x):null,g=n===1?un(1)/2:n===0?un(0)*7/2:.5,Y=Math.max(0,v(e.subtract(g,"day"))),W=Math.min(100,v(e.add(g,"day")))-Y,N=$=>{var S;const f=(S=s.current)==null?void 0:S.getBoundingClientRect();if(!f)return null;const y=Math.min(1,Math.max(0,($-f.left)/f.width));return{f:y,d:d.add(Math.round(y*h),"day")}};return a.jsxs(ea,{children:[a.jsxs(ta,{children:["Navegar",a.jsx("br",{}),"por fecha"]}),a.jsxs(na,{ref:s,onClick:$=>{const f=N($.clientX);f&&r(f.d.toDate())},onMouseMove:$=>{const f=N($.clientX);f&&l({left:f.f*100,label:`${f.d.date()} ${u[f.d.month()]}`})},onMouseLeave:()=>l(null),children:[a.jsx(ra,{children:u.map(($,f)=>a.jsx("span",{style:{left:`${v(T(new Date(c,f,1)))}%`},children:$},f))}),u.map(($,f)=>f===0?null:a.jsx(oa,{style:{left:`${v(T(new Date(c,f,1)))}%`}},f)),a.jsx(sa,{children:b.map(($,f)=>a.jsx(ia,{$sev:$.sev,style:{height:`${$.h}%`}},f))}),a.jsx(ca,{style:{left:`${Y}%`,width:`${W}%`}}),k!==null&&a.jsx(aa,{style:{left:`${k}%`},children:a.jsx("span",{children:"HOY"})}),i&&a.jsxs(a.Fragment,{children:[a.jsx(la,{style:{left:`${i.left}%`}}),a.jsx(da,{style:{left:`${i.left}%`},children:i.label})]})]})]})},fa=w.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,ha=w.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?dr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,pa=w.div`
  position: relative;
`,ga=({data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,schedulerRef:d,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:b})=>{const{goToDate:x,handleGoToday:k,zoomIn:g,zoomOut:Y,zoom:W}=Le();return p.useImperativeHandle(d,()=>({goToDate:x,goToToday:k,setZoom:N=>{if(!yr(N))return;const $=N-W;if($>0)for(let f=0;f<$;f++)g();else for(let f=0;f<Math.abs($);f++)Y()}}),[x,k,W,g,Y]),a.jsx(Bi,{data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:b})},ma=p.forwardRef(function({data:n,categories:t,baseData:r,config:o,startDate:s,onRangeChange:i,onTileClick:l,handleToggleDisplayActiveUnits:u,onClearFilterData:c,onItemClick:d,isLoading:h,onEventDrop:v,onEventDrag:b,draggableConfig:x,onTimeRangeSelect:k,onMultiTimeRangeSelect:g,clickToAddConfig:Y},W){var P;const N=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),$=p.useRef(null),f=p.useRef(null),[y,S]=p.useState((P=$.current)==null?void 0:P.clientWidth),D=p.useMemo(()=>T(s),[s]),[O,L]=p.useState(N.defaultTheme??"light"),J=()=>{L(O==="light"?"dark":"light")},Q=O==="light"?is:as,A=N.theme?N.theme[Q.mode]:{},_={...Q,colors:{...Q.colors,...A}};return p.useImperativeHandle(W,()=>({goToDate:H=>{var F;return(F=f.current)==null?void 0:F.goToDate(H)},goToToday:()=>{var H;return(H=f.current)==null?void 0:H.goToToday()},setZoom:H=>{var F;return(F=f.current)==null?void 0:F.setZoom(H)}}),[]),p.useLayoutEffect(()=>{const H=()=>{$.current&&S($.current.clientWidth)};return H(),window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[]),a.jsxs(a.Fragment,{children:[a.jsx(ss,{}),a.jsx(ns,{theme:_,children:a.jsx(Pi,{lang:N.lang,translations:N.translations,children:a.jsx(qs,{data:n,isLoading:!!h,config:N,onRangeChange:i,defaultStartDate:D,handleToggleDisplayActiveUnits:u,onClearFilterData:c,children:a.jsxs(fa,{id:ur,children:[a.jsx(ha,{showScroll:!!n.length,$footer:N.showOverview!==!1&&!!n.length,id:Ye,ref:$,children:a.jsx(pa,{children:a.jsx(ga,{data:n,baseData:r,categories:t,onTileClick:l,topBarWidth:y??0,onItemClick:d,toggleTheme:J,onEventDrop:v,onEventDrag:b,draggableConfig:x,schedulerRef:f,onTimeRangeSelect:k,onMultiTimeRangeSelect:g,clickToAddConfig:Y})})}),N.showOverview!==!1&&!!n.length&&a.jsx(ua,{})]})})})})]})}),ya=w.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:n})=>e==="next"?`1px solid ${n.colors.border}`:"none"};
`,va=w.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.colors.accent};
  border-radius: 4px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.accent};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({isVisible:e})=>e?"1":"0"};
  pointer-events: ${({isVisible:e})=>e?"auto":"none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,xa=w.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ba=w.p`
  ${et}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Tr=({intent:e,onClick:n,icon:t,isVisible:r,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:l}=Ne(),u=e==="next"?`${i} ${o+2}/${s}`:`${l} ${o}/${s}`;return a.jsx(ya,{intent:e,children:a.jsxs(va,{onClick:n,isVisible:r,children:[t&&a.jsx(xa,{children:t}),a.jsx(ba,{children:u})]})})},wa=w.div`
  min-width: ${De+"px"};
  max-width: ${De+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Sa=w.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({$height:e})=>e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${De}px;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,Ca=w.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Ma=w.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({theme:e})=>e.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({theme:e})=>e.colors.placeholder};
  }
`,ka=w.div`
  margin-left: 10px;
  height: 36px;
  flex: 1;
  min-width: 0;
  background-color: ${({theme:e})=>e.colors.primary};
  border: 1px solid
    ${({theme:e,isFocused:n})=>n?e.colors.accent:e.colors.border};
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
`,$a=w.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.primary};
  cursor: pointer;
  padding: 0;
  color: ${({theme:e})=>e.colors.placeholder};
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.hover};
    color: ${({theme:e})=>e.colors.textPrimary};
    border-color: ${({theme:e})=>e.colors.accent};
  }

  &:active {
    transform: scale(0.95);
  }
`,Da=Re`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,Ea=w.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${he}px;
  height: calc(${he}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBorder+"33":e.colors.border};
  border-left: 3px solid
    ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBorder:"transparent"};
  background-color: ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBg:"transparent"};
  transition: 0.5s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Da} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,_a=w.div`
  display: flex;
  align-items: center;
`,Ta=w.div`
  margin-right: 0.625rem;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: ${({theme:e,$provider:n})=>n?e.colors.subcontractBg:e.colors.accent+"1A"};
  color: ${({theme:e,$provider:n})=>n?e.colors.subcontractText:e.colors.accent};
  & svg {
    width: 17px;
    height: 17px;
  }
`,Aa=w.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Pa=w.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Ar=w.p`
  margin: 0;
  padding: 0;
  font-size: ${({isMain:e})=>e?.75+"rem":.625+"rem"};
  letter-spacing: ${({isMain:e})=>e?1+"px":.5+"px"};
  line-height: ${({isMain:e})=>e?1.125+"rem":.75+"rem"};
  color: ${({isMain:e,theme:n})=>e?n.colors.textPrimary:n.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`,Oa=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),Ia=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),a.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),a.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),Ya=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),a.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),La=({id:e,item:n,rows:t,onItemClick:r,isSubcontract:o})=>a.jsx(Ea,{title:n.title,clickable:typeof r=="function",rows:t,$isSubcontract:o,onClick:()=>r==null?void 0:r({id:e,label:n}),children:a.jsxs(_a,{children:[a.jsx(Ta,{$provider:o,children:Oa(n.icon)?a.jsx(Aa,{src:n.icon,alt:""}):o?a.jsx(Ya,{}):a.jsx(Ia,{})}),a.jsxs(Pa,{children:[a.jsx(Ar,{isMain:!0,children:n.title}),a.jsx(Ar,{children:n.subtitle})]})]})}),Na=w.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  background: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractBorder+"24":e.colors.accent+"14"};
  border-left: 3px solid
    ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractBorder:"transparent"};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractBorder+"33":e.colors.accent+"22"};
  }
`,Fa=w.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,Ha=w.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,za=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
  opacity: 0.85;
  transition: transform 0.2s ease;
  transform: rotate(${({$collapsed:e})=>e?"-90deg":"0deg"});
  & svg {
    width: 11px;
    height: 11px;
  }
`,Pr=({label:e,count:n,isCollapsed:t,onToggle:r,variant:o="category"})=>a.jsxs(Na,{$variant:o,onClick:r,title:e,children:[a.jsx(za,{$collapsed:t,children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx(Fa,{$variant:o,children:e}),a.jsx(Ha,{$variant:o,children:n})]}),Ba=({data:e,categories:n,headerHeight:t,rows:r,onLoadNext:o,onLoadPrevious:s,pageNum:i,pagesAmount:l,searchInputValue:u,onSearchInputChange:c,onItemClick:d,collapsedGroups:h,onToggleGroup:v,allGroupIds:b,onExpandAll:x,onCollapseAll:k})=>{const[g,Y]=p.useState(!1),W=Ne(),N=()=>Y(A=>!A),$=n?[...n].sort((A,_)=>A.maxPassengers-_.maxPassengers):[],f=$.length>0,y=b.length>0,S=y&&h.size===b.length;y&&h.size;const D=e.filter(A=>A.isSubcontract),O=W.subcontract??"Subcontract",L=A=>{const _=e.indexOf(A);return a.jsx(La,{id:A.id,item:A.label,rows:r[_],onItemClick:d,isSubcontract:A.isSubcontract},A.id)},J=A=>{const _=e.filter(F=>!F.isSubcontract&&F.categoryId===A.id);if(_.length===0)return null;const P=h.has(A.id),H=A.name;return a.jsxs("div",{children:[a.jsx(Pr,{label:H,count:_.length,isCollapsed:P,onToggle:()=>v(A.id),variant:"category"}),!P&&_.map(L)]},A.id)},Q=e.filter(A=>!A.isSubcontract&&(!A.categoryId||!f));return a.jsxs(wa,{children:[a.jsxs(Sa,{$height:t,children:[a.jsxs(Ca,{children:[a.jsxs(ka,{isFocused:g,children:[a.jsx(Ma,{placeholder:W.search,value:u,onChange:c,onFocus:N,onBlur:N}),a.jsx(Cn,{iconName:"search"})]}),y&&a.jsx($a,{title:S?"Expand all":"Collapse all",onClick:S?x:k,$allCollapsed:S,children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:S?a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),a.jsx(Tr,{intent:"previous",isVisible:i!==0,onClick:s,icon:a.jsx(Cn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]}),f?$.map(J):Q.map(L),f&&Q.length>0&&Q.map(L),D.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(Pr,{label:O,count:D.length,isCollapsed:h.has("__subcontract__"),onToggle:()=>v("__subcontract__"),variant:"subcontract"}),!h.has("__subcontract__")&&D.map(L)]}),a.jsx(Tr,{intent:"next",isVisible:i!==l-1,onClick:o,icon:a.jsx(Cn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]})},Wa=w.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
  background-color: ${({theme:e})=>e.colors.secondary};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`,ja=Re`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Za=w.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${ja} 1s infinite;
`,Mn=({isLoading:e,position:n})=>e?a.jsx(Wa,{position:n,children:a.jsx(Za,{})}):null,Fe=(e,n)=>{const{ctx:t,x:r,y:o,width:s,height:i,textYPos:l,label:u,font:c,isBottomRow:d,fillStyle:h,topText:v,bottomText:b,strokeStyle:x,labelBetweenCells:k}=e;if(t.beginPath(),t.strokeStyle=x??n.colors.border,t.setLineDash([]),u&&c&&l){t.fillStyle=n.colors.gridBackground,t.fillRect(r,o,s,i),k?(t.moveTo(r,o),t.lineTo(r+s,o),t.stroke(),t.moveTo(r,o+i),t.lineTo(r+s,o+i),t.stroke(),t.moveTo(r+s/2,o+i),t.lineTo(r+s/2,o+i-5),t.stroke()):t.strokeRect(r+.5,o+.5,s,i),t.font=c;const g=r+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=n.colors.accent,t.fillText(u,g,l)}if(d&&h&&v&&b){t.fillStyle=h,t.fillRect(r,o,s,i),t.strokeRect(r+.5,o+.5,s,i),t.font=v.font;const g=r+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,g,v.y),t.font=b.font;const Y=r+s/2-t.measureText(b.label).width/2;t.fillStyle=b.color,t.fillText(b.label,Y,b.y)}},kn=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return t?o==="bottomRow"?n.colors.placeholder:n.colors.accent:r?o==="bottomRow"?n.colors.placeholder:n.colors.textPrimary:n.colors.placeholder},Va=(e,n,t,r)=>{const o=rt-Xe/ls,s=rt-Xe/ds,i=Ie+nt;let l=0;for(let u=0;u<n;u++){const c=pr(T(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(u,"days")),d=c.isCurrentDay;if(Fe({ctx:e,x:l,y:i,width:be,height:Xe,isBottomRow:!0,fillStyle:d?r.colors.currentDay:c.isBusinessDay?r.colors.gridBackground:r.colors.primary,topText:{y:o,label:d?"":c.dayName.toUpperCase(),font:Pe.bottomRow.name,color:kn({isCurrent:!1,isBusinessDay:c.isBusinessDay},r)},bottomText:{y:s,label:`${c.dayOfMonth}`,font:d?`700 10px ${Ae}`:Pe.bottomRow.number,color:d?r.colors.today:kn({isCurrent:!1,isBusinessDay:c.isBusinessDay,variant:"bottomRow"},r)}},r),d){const b=l+be/2,x=o-13/2;e.save(),e.fillStyle=r.colors.today,e.beginPath(),e.roundRect?e.roundRect(b-30/2,x,30,13,5):e.rect(b-30/2,x,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ae}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",b,x+13/2+.5),e.restore()}l+=be}},Ga=(e,n,t,r)=>{let o=-(t.dayOfMonth-1)*_e;const s=Ie;let l=t.month;for(let u=0;u<n;u++){l>=qt&&(l=0);const c=hr(t,u)*_e;Fe({ctx:e,x:o,y:s,width:c,height:nt,textYPos:cr,label:T().month(l).format("MMMM").toUpperCase(),font:Pe.bottomRow.number},r),o+=c,l++}},Xa=(e,n,t)=>{let o=0,s=0,i=T(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month();o=-n.dayOfMonth*be+be;for(let l=0;l<qt;l++)i>qt-1&&(i=0),s=T(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(l,"months").daysInMonth()*be,Fe({ctx:e,x:o,y:0,width:s,height:Ie,textYPos:Qt,label:T(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${T(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,font:Pe.topRow},t),o+=s,i++},Ua=(e,n,t,r)=>{const o=7*be,s=Ie,i=e.canvas.width/o+o,l=n.weekOfYear;let u=0;for(let c=0;c<i;c++){const d=T(`${n.year}-${n.month+1}-${n.dayOfMonth}`).day();let h=(l+c)%sr;h<=0&&(h+=sr),d!==1&&c===0&&(u=-d*be+be),Fe({ctx:e,x:u,y:s,width:o,height:nt,textYPos:cr,label:`${t.toUpperCase()} ${h}`,font:Pe.middleRow},r),u+=o}},Ka=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return o==="yearView"?t?n.colors.tertiary:n.colors.gridBackground:t?n.colors.currentDay:r?n.colors.primary:n.colors.secondary},qa=(e,n,t,r,o)=>{const s=rt-Xe/1.6,i=rt-Xe/4.5,l=Ie+nt;let u=0;for(let c=0;c<n;c++){const d=T(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),h=d.isSame(T(),"week");Fe({ctx:e,x:u,y:l,width:ot,height:Xe,isBottomRow:!0,fillStyle:h?o.colors.today+"26":Ka({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:h?`700 14px ${Ae}`:Pe.bottomRow.name,color:h?o.colors.today:kn({isCurrent:h},o)},bottomText:{y:i,label:r.toUpperCase(),font:Pe.middleRow,color:o.colors.placeholder}},o),u+=ot}},Ja=(e,n,t,r)=>{const s=n.year,i=e.canvas.width*2;let l=0,u=0,c=(fr(s)-t+1)*_e,d=0;for(;l+d<=i;)u>0&&(c=fr(s+u)*_e),d+c>i&&u>0&&(c=Math.ceil((i-d)/_e)*_e),Fe({ctx:e,x:l,y:0,width:c,height:Ie,textYPos:Qt,label:(s+u).toString(),font:Pe.topRow},r),l+=c,d+=c,u++},Qa=(e,n,t,r)=>{const o=Math.floor(n/Et)+2,s=Et*Me;let u=-T(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Me+.5*Me;for(let c=0;c<o;c++){const d=T(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Fe({ctx:e,x:u,y:st,width:s,height:yt,textYPos:st+yt/2+2,label:d,font:Pe.bottomRow.number},r),u+=s}},Ra=(e,n,t,r)=>{const o=Math.ceil(n/Et),s=T(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),l=s.month(),u=i.add(1,"day").month(),c=l===u?1:2;let d=.5*Me;for(let h=0;h<c;h++){const v=T(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),x=T(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),k=x.format("MMMM").toUpperCase(),g=x.diff(v,"hour")+1,Y=h===0?g*Me:n*Me;Fe({ctx:e,x:d,y:0,width:Y,height:st,textYPos:Qt,label:k,font:Pe.topRow},r),d+=Y}},ec=(e,n,t,r)=>{let o=0;const s=st+yt,i=T(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=Me;for(let u=0;u<n;u++){const c=i.add(u,"hours").format("h:00a").toUpperCase();Fe({ctx:e,x:o,y:s,width:l,height:Kt,label:c,font:Pe.bottomRow.hoursInDay,textYPos:st+yt+Kt/2+2,labelBetweenCells:!0},r),o+=Me}},tc=(e,n,t,r,o,s,i)=>{switch(n){case 0:Ja(e,r,s,i),Ga(e,t,r,i),qa(e,t,r,o,i);break;case 1:Xa(e,r,i),Ua(e,r,o,i),Va(e,t,r,i);break;case 2:Ra(e,t,r,i),Qa(e,t,r,i),ec(e,t,r,i);break}},nc=w.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,rc=w.div`
  position: sticky;
  left: ${De}px;
  width: calc(${({$width:e})=>e}px - ${De}px);
  z-index: 3;
`,oc=w.div`
  height: ${rt}px;
  display: block;
`,sc=w.canvas``,ic={transfer:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 8h13l-3-3"}),a.jsx("path",{d:"M20 16H7l3 3"})]}),sun:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"4"}),a.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),a.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),a.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:a.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 3 2 20h20z"}),a.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),a.jsx("path",{d:"M12 7.5V12l3 2"})]})},He=({name:e,className:n,strokeWidth:t=2})=>a.jsx("svg",{className:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:ic[e]}),ac=w.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Or=w.span`
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
`,Pt=w.span`
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
    color: ${({theme:e})=>e.colors.accent};
  }
`,cc=w.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,lc=w.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,dc=w.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,uc=w.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,fc=w.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.98);
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 1px ${({theme:e})=>e.colors.border};
  flex: none;
  & svg {
    width: 9px;
    height: 9px;
  }
`,hc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],pc=()=>a.jsxs(ac,{children:[a.jsx(Or,{children:"Leyenda"}),a.jsxs(Pt,{children:[a.jsx(He,{name:"transfer"})," Transfer"]}),a.jsxs(Pt,{children:[a.jsx(He,{name:"sun"})," Gira 1 día"]}),a.jsxs(Pt,{children:[a.jsx(He,{name:"tour"})," Gira multidía"]}),a.jsxs(Pt,{children:[a.jsx(cc,{children:"SUB"})," Subcontrato"]}),a.jsx(lc,{}),a.jsxs(Or,{children:["Estado ",a.jsx("em",{children:"franja izq. + punto esq."})]}),hc.map(e=>a.jsxs(dc,{children:[a.jsx(uc,{style:{background:e.stripe}}),a.jsx(fc,{style:{color:e.color},children:a.jsx(He,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),gc=p.forwardRef(function({zoom:n,topBarWidth:t,showThemeToggle:r,toggleTheme:o},s){const{week:i}=Ne(),{date:l,cols:u,dayOfYear:c,startDate:d,config:h}=Le(),v=p.useRef(null),b=Dt(),x=p.useCallback(k=>{const g=hn(),W=(n===2?cs:rt)+1;xr(k,g,W),tc(k,n,u,d,i,c,b)},[u,c,d,i,n,b]);return p.useEffect(()=>{if(!v.current)return;const k=v.current.getContext("2d");if(!k)return;const g=()=>x(k);return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[x]),p.useEffect(()=>{const k=v.current;if(!k)return;k.style.letterSpacing="1px";const g=k.getContext("2d");g&&x(g)},[l,n,x]),a.jsxs(nc,{ref:s,children:[(h.showTopbar!==!1||h.showLegend!==!1)&&a.jsxs(rc,{$width:t,children:[h.showTopbar!==!1&&a.jsx(Ji,{width:t,showThemeToggle:r,toggleTheme:o}),h.showLegend!==!1&&a.jsx(pc,{})]}),a.jsx(oc,{id:us,children:a.jsx(sc,{ref:v})})]})}),mc=(e,n,t)=>{let r;switch(t){case 0:r=_e;break;case 2:r=Me;break;default:r=be}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),l=n.startDate.startOf("day"),u=n.endDate.startOf("day"),c=()=>{let d;switch(t){case 2:d=(e.startDate.diff(n.startDate,"minute")/Se+1)*r-r/2;break;default:d=s.diff(l,"day")*r}return Math.max(0,d)};if(e.startDate.isAfter(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/Se*r,50);break;default:d=Math.max(i.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(n.startDate,"minute")/Se*r+.5*r,50);break;default:d=Math.max(i.diff(l,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isAfter(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(e.startDate,"minute")/Se*r,50);break;default:d=Math.max(u.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(n.startDate,"minute")/Se*r,50);break;default:d=Math.max(u.diff(l,"day")*r+r,50)}return{x:c(),width:d}}return{x:c(),width:50}},yc=(e,n,t,r,o,s)=>{const i=e*he+fs,l=n.hour(),u=t.hour();let c,d,h,v;switch(s){case 2:{c=T(r),d=T(o),h=T(n).hour(l).minute(0),v=T(t).hour(u).minute(0);break}default:{c=T(r).hour(0).minute(0),d=T(o).hour(23).minute(59),h=n,v=t;break}}return{...mc({startDate:c,endDate:d},{startDate:h,endDate:v},s),y:i}},Ir=e=>{if(!e)return"white";const n=[];for(let o=1;o<6;o+=2)n.push(parseInt(e.slice(o,o+2),16)/255);const t=n.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,w.p`
  ${et}
  ${tt}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const vc=Re`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,xc=w.button`
  ${et}
  position: absolute;
  height: ${Jt}px;
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
  cursor: ${({isDraggable:e,isDragging:n})=>e?n?"grabbing":"grab":"not-allowed"};
  opacity: ${({isDragging:e})=>e?.3:1};
  transition: opacity 0.2s ease;
  /* Motion (gated on reduced-motion): fade/scale a newly-mounted tile in, and glide survivors to a new row when a
     unit/group above them is added, removed, or collapsed. Transition ONLY top — left/width recompute on every
     horizontal scroll-load, so animating them would cause spurious sliding; top derives from row index alone. */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${vc} 180ms ease-out;
    transition: opacity 0.2s ease, top 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  ${({$unconfirmed:e})=>e&&`background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px #D98A22, 0 2px 5px -1px rgba(12,26,23,0.28);`}
  ${({$exiting:e})=>e&&"opacity: 0; transform: scale(0.96); pointer-events: none;"}
`,bc=w.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`,wc=w.div`
  position: sticky;
  left: ${De+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,Yr=w.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Sc=w.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Cc=w.span`
  ${tt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,Mc=w.span`
  ${tt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,kc=w.span`
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
`,$c=w.div`
  ${tt}
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
`,Lr=w.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Nr=w.span`
  width: ${({$sm:e})=>e?"14px":"16px"};
  height: ${({$sm:e})=>e?"14px":"16px"};
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.94);
  display: grid;
  place-items: center;
  flex: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  & svg {
    width: ${({$sm:e})=>e?"9px":"11px"};
    height: ${({$sm:e})=>e?"9px":"11px"};
  }
`,Fr=w.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Dc=w.div`
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
    width: ${({$transfer:e})=>e?"18px":"12px"};
    height: ${({$transfer:e})=>e?"18px":"12px"};
    color: #fff;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.32));
  }
`,Hr=w.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,Ec=34,_c={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},Tc="#3E8E5A",Ac="#D98A22",zr=({row:e,data:n,zoom:t,isSubcontract:r=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:l=!0,yOffset:u=0,exiting:c=!1})=>{const{date:d}=Le(),h=fn(d,t),{y:v,x:b,width:x}=yc(e,h.startDate,h.endDate,n.startDate,n.endDate,t),{colors:k}=Dt(),g=p.useRef(null),Y=T(n.startDate).isSame(T(n.endDate),"day"),W=n.eventType===vt.Tour,N=n.eventType===vt.Transfer,$=Y&&(W||N),f=Q=>{g.current={x:Q.clientX,y:Q.clientY},l&&s&&(Q.preventDefault(),s(n,Q))},y=Q=>{if(g.current){const A=Math.abs(Q.clientX-g.current.x),_=Math.abs(Q.clientY-g.current.y);Math.sqrt(A*A+_*_)<=5&&(o==null||o(n)),g.current=null}else o==null||o(n)},S={left:`${b}px`,top:`${v+u}px`,backgroundColor:`${n.bgColor??k.defaultTile}`,width:`${x}px`,color:Ir(n.bgColor??"")},D=!r&&n.readiness?_c[n.readiness]:null,O=r&&n.subcontractConfirmed===!1,L=r?O?Ac:Tc:D==null?void 0:D.stripe,J=Q=>a.jsxs(xc,{"data-segment-id":n.segmentId,style:S,onClick:y,onMouseDown:f,onDragStart:A=>A.preventDefault(),isDraggable:l,isDragging:i,$unconfirmed:O,$exiting:c,children:[L&&a.jsx(bc,{style:{background:L}}),Q]});return J($?a.jsxs(a.Fragment,{children:[(r||D)&&a.jsx(Lr,{$sm:!0,children:r?a.jsx(Fr,{children:"SUB"}):D&&a.jsx(Nr,{$sm:!0,style:{color:D.color},children:a.jsx(He,{name:D.icon,strokeWidth:D.icon==="check"?2.6:2.2})})}),a.jsxs(Dc,{$transfer:N,children:[a.jsx(He,{name:N?"transfer":"sun",strokeWidth:2.4}),x>=Ec&&a.jsxs(a.Fragment,{children:[a.jsx(Hr,{children:T(n.startDate).format("HH:mm")}),!N&&a.jsx(Hr,{$end:!0,children:T(n.endDate).format("HH:mm")})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Lr,{children:r?a.jsx(Fr,{children:"SUB"}):D&&a.jsx(Nr,{style:{color:D.color},children:a.jsx(He,{name:D.icon,strokeWidth:D.icon==="check"?2.6:2.2})})}),n.bookingNumber&&a.jsx(kc,{children:n.bookingNumber}),a.jsxs(wc,{children:[a.jsxs(Yr,{$pad:!0,children:[a.jsx(Sc,{children:a.jsx(He,{name:N?"transfer":"tour"})}),a.jsx(Cc,{children:n.title})]}),n.subtitle&&a.jsx(Yr,{children:a.jsx(Mc,{children:n.subtitle})}),n.driver&&a.jsxs($c,{children:[a.jsx(He,{name:"person"}),n.driver]})]})]}))},Br=(e,n)=>{let t=0;for(const r of n)e>=r&&t++;return t*Ee},Pc=w.div`
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
`,Oc=({data:e,zoom:n,onTileClick:t,onDragStart:r,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const{nodes:l,liveMap:u}=p.useMemo(()=>{const b=new Map;let x=0;return{nodes:e.map((g,Y)=>{if(Y>0&&(x+=Math.max(e[Y-1].data.length,1)),!g.data.some(W=>W.length>0)){const W=Br(x,i);return[a.jsx(Pc,{style:{top:`${x*he+W}px`},children:"Disponible"},`dispo-${g.id}`)]}return g.data.map((W,N)=>W.map($=>{const f=s===$.segmentId,y=o?o($):!1,S=N+x,D=Br(S,i);return b.set($.segmentId,{project:$,absoluteRow:S,yOffset:D,isSubcontract:!!g.isSubcontract}),a.jsx(zr,{row:S,data:$,zoom:n,isSubcontract:g.isSubcontract,onTileClick:t,onDragStart:r,isDragging:f,isDraggable:y,yOffset:D},$.segmentId)}))}).flat(2),liveMap:b}},[e,t,n,r,o,s,i]),c=p.useRef(new Map),d=p.useRef([]),[h,v]=p.useState([]);return p.useEffect(()=>()=>d.current.forEach(clearTimeout),[]),p.useEffect(()=>{const b=c.current;c.current=u;const x=[];if(b.forEach((Y,W)=>{u.has(W)||x.push(Y)}),v(Y=>{let W=Y.filter(N=>!u.has(N.project.segmentId));for(const N of x)W.some($=>$.project.segmentId===N.project.segmentId)||(W=[...W,N]);return W}),!x.length)return;const k=new Set(x.map(Y=>Y.project.segmentId)),g=setTimeout(()=>{v(Y=>Y.filter(W=>!k.has(W.project.segmentId)))},220);d.current.push(g)},[u]),a.jsxs(a.Fragment,{children:[l,h.map(b=>a.jsx(zr,{row:b.absoluteRow,data:b.project,zoom:n,isSubcontract:b.isSubcontract,yOffset:b.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},`exit-${b.project.segmentId}`))]})};w.div`
  box-sizing: border-box;
  font-family: ${Ae};
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({isExpanded:e})=>e?0:"-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`,w.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`,w.label`
  font-size: 14px;
`,w.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`,w.input`
  height: 18px;
  width: 18px;
`,w.button`
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
`,w.form`
  background-color: rgba(255, 255, 255, 0.75);
`;const Ic=w.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,Yc=w.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Lc=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,Nc=w.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,Fc=w.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,Hc=w.div`
  ${et}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,zc=w.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,Bc=w.div`
  padding: 10px 12px;
`,Wc=w.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Wr=w.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,jr=w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Zr=w.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Vr=w.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Gr=w.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,jc=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Zc=w.div``,Vc=w.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Gc=w.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Xc=w.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Xr=w.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Ur=w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Kr=w.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.textPrimary};
  line-height: 1.4;
  background: ${({theme:e})=>e.colors.primary};
  padding: 6px 8px;
  border-radius: 4px;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 60px;
  overflow-y: auto;
`;w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.div``,w.span``,w.div``,w.div``,w.div``,w.div``,w.p``,w.span``;const Uc={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Kc=({tooltipData:e})=>{const{mouseCoords:n,reservationData:t}=e,r=p.useRef(null),[o,s]=p.useState("below"),i=Ne(),l={...Uc,...i.tooltip};p.useLayoutEffect(()=>{if(!r.current||!n)return;const b=r.current,{width:x,height:k}=b.getBoundingClientRect(),g=b.parentElement;if(!g)return;const Y=g.getBoundingClientRect(),W=12,N=4,$=Y.height-n.y,f=Y.width-n.x;let y=n.x+W,S=n.y+W,D="below";f<x+W&&(y=n.x-x-W),$<k+W&&(S=n.y-k-W,D="above"),y=Math.max(N,Math.min(y,Y.width-x-N)),S=Math.max(N,Math.min(S,Y.height-k-N)),s(D),b.style.left=`${y}px`,b.style.top=`${S}px`},[n]);const u=t.reservationType===vt.Tour,c=u&&t.isOneDayEvent,d=()=>u?c?"oneday":"tour":"transfer",h=()=>u?c?l.oneDay:l.tour:l.transfer,v=[t.groupName&&{label:l.groupName,value:t.groupName},t.driver&&{label:l.driver,value:t.driver},t.passengers&&{label:l.passengers,value:String(t.passengers)},t.flightNumber&&{label:l.flightNumber,value:t.flightNumber}].filter(Boolean);return a.jsxs(Ic,{ref:r,$position:o,children:[a.jsxs(Yc,{children:[a.jsxs(Lc,{children:[a.jsx(Nc,{children:t.bookingNumber}),a.jsx(Fc,{$type:d(),children:h()})]}),a.jsx(Hc,{children:t.eventName}),t.client&&a.jsx(zc,{children:t.client})]}),a.jsxs(Bc,{children:[a.jsxs(Wc,{children:[a.jsxs(Wr,{children:[a.jsx(jr,{children:l.startDate}),a.jsxs(Zr,{children:[a.jsx(Vr,{children:t.startDate})," ",a.jsx(Gr,{children:t.startTime})]})]}),u&&t.endDate&&a.jsxs(Wr,{$isEnd:!0,children:[a.jsx(jr,{children:l.endDate}),a.jsxs(Zr,{children:[a.jsx(Vr,{children:t.endDate})," ",a.jsx(Gr,{children:t.endTime})]})]})]}),v.length>0&&a.jsx(jc,{children:v.map((b,x)=>a.jsxs(Zc,{children:[a.jsx(Vc,{children:b.label}),a.jsx(Gc,{children:b.value})]},x))}),(t.serviceNotes||t.reservationNotes)&&a.jsxs(Xc,{children:[t.serviceNotes&&a.jsxs(Xr,{children:[a.jsx(Ur,{children:l.serviceNotes}),a.jsx(Kr,{children:t.serviceNotes})]}),t.reservationNotes&&a.jsxs(Xr,{children:[a.jsx(Ur,{children:l.reservationNotes}),a.jsx(Kr,{children:t.reservationNotes})]})]})]})]})};w.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,w.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,w.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`;const qc=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Jc=w.div`
  position: absolute;
  height: ${Jt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:n,$animateToY:t})=>e&&n!==void 0&&t!==void 0?`transform: translate3d(${n}px, ${t}px, 0);`:""}
`,Qc=w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,qr=w.p`
  ${et}
  ${tt}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Rc=w.p`
  ${et}
  ${tt}
`,el=w.div`
  position: sticky;
  left: ${De+16}px;
  overflow: hidden;
`,tl=w.div`
  position: absolute;
  height: ${Jt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,nl=w.div`
  position: absolute;
  top: -24px;
  left: 0;
  padding: 4px 8px;
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
`,rl=w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,ol=w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,sl=w.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Jr=w.div`
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
`,Qr=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,Rr=w.div`
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
`,eo=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,$n=w.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Dn=w.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,dt=w.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,to=w.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,il=({draggedEvent:e,ghostPosition:n,ghostDimensions:t,dropTarget:r,isValidDrop:o,dragState:s,data:i,resourceOnly:l,separatorRowIndices:u=[]})=>{const c=Ne(),d=$=>{let f=0;for(const y of u)y<=$&&f++;return $*he+f*Ee},[h,v]=p.useState(null),[b,x]=p.useState(0),k=p.useCallback(($=400,f=300)=>{const S=t.width,D=48,O=document.getElementById("react-scheduler");if(!O)return{x:n.x+S+16,y:n.y};const L=O.scrollLeft,J=O.scrollTop,Q=O.clientWidth,A=O.clientHeight,_=n.x-L,P=n.y-J,H={left:De+16,right:Q-16,top:16,bottom:A-16},F=H.right-(_+S),R=_-H.left,ee=H.bottom-(P+D),se=P-H.top;let ae,z;return F>=$+16?ae=_+S+16:R>=$+16?ae=_-$-16:F>=R?(ae=_+S+16,ae+$>H.right&&(ae=H.right-$)):(ae=_-$-16,ae<H.left&&(ae=H.left)),ee>=f+16?z=P+D+16:se>=f+16?z=P-f-16:ee>=se?(z=P+D+16,z+f>H.bottom&&(z=H.bottom-f)):(z=P-f-16,z<H.top&&(z=H.top)),ae=Math.max(H.left,Math.min(ae,H.right-$)),z=Math.max(H.top,Math.min(z,H.bottom-f)),{x:ae+L,y:z+J}},[n.x,n.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&b===0?x(n.x):s==="idle"&&x(0)},[s,e,n.x,b]),p.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const g=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const $=[];let f=0;for(const y of i){const S=Math.max(y.data.length,1);if(y.capacity!==void 0&&e.totalPassengers>y.capacity)for(let D=0;D<S;D++)$.push(f+D);f+=S}return $},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const Y=s==="animating",W=Ir(e.bgColor??""),N=()=>{if(!r)return"";const $=T(r.startDate).format("MMM D, HH:mm"),f=T(r.endDate).format("HH:mm");return`${$} - ${f}`};return a.jsxs(qc,{children:[g.map($=>a.jsx(ol,{style:{top:`${d($)}px`,height:`${he}px`}},$)),r&&s==="dragging"&&a.jsx(rl,{$isValid:o,$hasConflict:r.hasConflict,style:{top:`${d(r.resourceIndex)}px`,height:`${he}px`}}),r&&s==="dragging"&&!l&&a.jsxs(a.Fragment,{children:[a.jsx(tl,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),a.jsx(nl,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(he-48)/2}px`},children:N()})]}),r&&s==="dragging"&&l&&a.jsx(sl,{$isValid:o,$hasConflict:r.hasConflict,style:{left:"0px",top:`${d(r.resourceIndex)}px`,height:`${he}px`}}),r&&o&&r.hasConflict&&r.conflicts&&r.conflicts.length>0&&s==="dragging"&&(()=>{const $=k(400,300);return a.jsxs(Jr,{style:{left:`${$.x}px`,top:`${$.y}px`},children:[a.jsxs(Qr,{children:[a.jsx(Rr,{children:"!"}),r.conflicts.length," ",r.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),a.jsx(eo,{children:r.conflicts.map((f,y)=>{const S=T(r.startDate).format("YYYY-MM-DD"),D=T(r.endDate).format("YYYY-MM-DD"),O=T(f.event.startDate).format("YYYY-MM-DD"),L=T(f.event.endDate).format("YYYY-MM-DD"),J=T(f.conflictStart).format("YYYY-MM-DD"),Q=T(f.conflictEnd).format("YYYY-MM-DD"),A=S!==D,_=O!==L,P=J!==Q,H=A?T(r.startDate).format("MMM D, h:mm A"):T(r.startDate).format("h:mm A"),F=A?T(r.endDate).format("MMM D, h:mm A"):T(r.endDate).format("h:mm A"),R=_?T(f.event.startDate).format("MMM D, h:mm A"):T(f.event.startDate).format("h:mm A"),ee=_?T(f.event.endDate).format("MMM D, h:mm A"):T(f.event.endDate).format("h:mm A"),se=P?T(f.conflictStart).format("MMM D, h:mm A"):T(f.conflictStart).format("h:mm A"),ae=P?T(f.conflictEnd).format("MMM D, h:mm A"):T(f.conflictEnd).format("h:mm A"),z=P?"":T(f.conflictStart).format("MMM D"),B=r.startDate.getTime(),U=r.endDate.getTime(),te=f.event.startDate.getTime(),C=f.event.endDate.getTime(),I=B>=te&&B<C,M=U>te&&U<=C,V=B<=te&&U>=C,q=te<=B&&C>=U;let j=!1,m=!1,X=!1,E=!1,Z="";return V||q?(j=!0,m=!0,X=!0,E=!0,Z=`⚠️ ${c.conflicts.changeBoth}`):I&&M?(j=!0,m=!0,X=!0,E=!0,Z=`⚠️ ${c.conflicts.changeBoth}`):I?(j=!0,E=!0,Z=`⚠️ ${c.conflicts.changeStart}`):M&&(m=!0,X=!0,Z=`⚠️ ${c.conflicts.changeEnd}`),a.jsxs($n,{children:[a.jsxs(Dn,{children:[c.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(dt,{children:[a.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",j?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:H}):H," ",c.conflicts.to," ",m?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:F}):F]}),a.jsxs(dt,{children:[a.jsx("strong",{children:f.event.title})," ",c.conflicts.currentlyAt,":"," ",X?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:R}):R," ",c.conflicts.to," ",E?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ee}):ee]}),a.jsxs(to,{children:[c.conflicts.conflictTime,": ",z&&`${z}, `,se," - ",ae]}),Z&&a.jsx(dt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:Z})]},y)})})]})})(),r&&o&&!r.hasConflict&&r.nearbyEvents&&r.nearbyEvents.length>0&&s==="dragging"&&(()=>{const $=k(400,400);return a.jsxs(Jr,{style:{left:`${$.x}px`,top:`${$.y}px`,borderColor:"#4CAF50"},children:[a.jsxs(Qr,{style:{color:"#2E7D32"},children:[a.jsx(Rr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),r.nearbyEvents.length," ",r.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),a.jsxs(eo,{children:[(()=>{const f=r.nearbyEvents.some(O=>O.position==="before"),y=r.nearbyEvents.some(O=>O.position==="after"),S=T(r.startDate).format("h:mm A"),D=T(r.endDate).format("h:mm A");return a.jsxs($n,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[a.jsxs(Dn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),a.jsxs(dt,{style:{fontWeight:600},children:[T(r.startDate).format("MMM D"),":"," ",f?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",c.conflicts.to," ",y?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:D}):D]}),a.jsx(dt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),r.nearbyEvents.map((f,y)=>{const S=T(f.event.startDate).format("YYYY-MM-DD"),D=T(f.event.endDate).format("YYYY-MM-DD"),O=S!==D,L=O?T(f.event.startDate).format("MMM D, h:mm A"):T(f.event.startDate).format("h:mm A"),J=O?T(f.event.endDate).format("MMM D, h:mm A"):T(f.event.endDate).format("h:mm A"),Q=T(f.event.startDate).format("MMM D"),A=Math.floor(f.timeGap/(1e3*60*60)),_=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),P=A>0?`${A}h ${_}m`:`${_}m`,H=f.position==="after",F=f.position==="before";return a.jsxs($n,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[a.jsxs(Dn,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(dt,{children:[!O&&`${Q}: `,H?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:L}):L," ",c.conflicts.to," ",F?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:J}):J]}),a.jsxs(to,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[P," ",f.position==="before"?c.conflicts.before:c.conflicts.after]})]},y)})]})]})})(),a.jsx(Jc,{$isAnimating:Y,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:Y?`${(h==null?void 0:h.x)??0}px`:"0",top:Y?`${(h==null?void 0:h.y)??0}px`:"0",transform:Y?void 0:`translate3d(${l?b:n.x}px, ${n.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:W},children:a.jsx(Qc,{children:a.jsxs(el,{children:[a.jsx(qr,{$bold:!0,children:e.title}),e.subtitle&&a.jsx(qr,{children:e.subtitle}),e.description&&a.jsx(Rc,{children:e.description})]})})})]})},al=Re`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,cl=w.div`
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
  animation: ${al} 1.5s ease-in-out infinite;
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
`,ll=({selectionBox:e,isSelecting:n})=>!e||!n?null:a.jsx(cl,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),dl=Re`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ul=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({$hasConflicts:e})=>e?"linear-gradient(to right, rgba(245, 158, 11, 0.95), rgba(245, 158, 11, 0.9))":"linear-gradient(to right, rgba(34, 197, 94, 0.95), rgba(34, 197, 94, 0.9))"};
  border-bottom: 2px solid ${({$hasConflicts:e})=>e?"#d97706":"#16a34a"};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 9999;
  animation: ${dl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,fl=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,hl=w.span`
  font-weight: 600;
  font-size: 14px;
  color: white;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "${({$hasConflicts:e})=>e?"!":"✓"}";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: white;
    color: ${({$hasConflicts:e})=>e?"#f59e0b":"#22c55e"};
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
  }
`,pl=w.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,gl=w.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;w.div`
  display: none;
`,w.div`
  display: none;
`,w.button`
  display: none;
`;const ml=w.div`
  display: flex;
  gap: 8px;
`,no=w.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;

  ${({variant:e,$hasConflicts:n})=>e==="primary"?`
    background: white;
    color: ${n?"#b45309":"#15803d"};
    border: none;
    
    &:hover {
      background: ${n?"#fef3c7":"#f0fdf4"};
    }
  `:`
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.5);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
    }
  `}
`,yl=({selections:e,onConfirm:n,onClear:t})=>{var x;const o=Ne().multiSelect,s=p.useMemo(()=>e.filter(k=>k.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((x=o==null?void 0:o.conflictsWarning)==null?void 0:x.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,b=a.jsxs(ul,{$hasConflicts:v,"data-multi-select-ui":!0,children:[a.jsxs(fl,{children:[a.jsxs(hl,{$hasConflicts:v,children:[e.length," ",i]}),v&&a.jsxs(pl,{children:["⚠️ ",h]}),a.jsx(gl,{children:l})]}),a.jsxs(ml,{children:[a.jsxs(no,{variant:"secondary",onClick:t,children:["✕ ",u]}),a.jsx(no,{variant:"primary",$hasConflicts:v,onClick:n,children:v?`⚠️ ${d}`:`✓ ${c}`})]})]});return oo.createPortal(b,document.body)},vl=Re`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,xl=w.div`
  position: absolute;
  background: ${({$hasConflict:e,$isDragging:n})=>n?e?"rgba(245, 158, 11, 0.4)":"rgba(34, 197, 94, 0.4)":e?"rgba(245, 158, 11, 0.2)":"rgba(34, 197, 94, 0.2)"};
  border: 2px solid ${({$hasConflict:e})=>e?"#f59e0b":"#22c55e"};
  border-radius: 4px;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  box-sizing: border-box;
  animation: ${vl} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&Mt`
      border-style: dashed;
    `}
`,bl=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,wl=w.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Sl=w.button`
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
`,Cl=({selections:e,data:n,zoom:t,startDate:r,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[l,u]=p.useState(null),[c,d]=p.useState({x:0,y:0}),h=p.useRef(null),v=p.useMemo(()=>{switch(t){case 0:return _e*7;case 1:return be;case 2:return Me;default:return be}},[t]),b=p.useMemo(()=>T().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0),[r]),x=p.useMemo(()=>e.map((y,S)=>{let D=0,O=!1;for(const R of n){if(R.id===y.resourceId){O=!0;break}D+=Math.max(R.data.length,1)}if(!O)return null;const L=T(y.startDate),J=T(y.endDate);let Q,A;switch(t){case 0:Q=Math.floor(L.diff(b,"days")/7),A=Math.max(1,Math.ceil(J.diff(L,"days")/7)+1);break;case 1:Q=L.diff(b,"days"),A=Math.max(1,J.diff(L,"days")+1);break;case 2:Q=L.diff(b,"hours"),A=Math.max(1,J.diff(L,"hours")+1);break;default:Q=0,A=1}const _=Q*v;let P=0;for(const R of i)R<=D&&P++;const H=D*he+P*Ee,F=A*v;return{index:S,selection:y,x:_,y:H,width:F,height:he}}),[e,n,t,b,v]),k=(y,S)=>{const D=T(y).format("MMM D"),O=T(S).format("MMM D");return D===O?D:`${D} - ${O}`},g=y=>!y.hasConflict||!y.conflicts?"":`⚠️ Conflicts with:
${y.conflicts.map(D=>{const O=(D.overlapDuration/36e5).toFixed(1);return`• ${D.event.title} (${O}h overlap)`}).join(`
`)}`,Y=p.useCallback(y=>{let S=0;for(const D of n){const O=Math.max(D.data.length,1);if(y>=S*he&&y<(S+O)*he)return{resourceId:D.id,resourceLabel:D.label};S+=O}return null},[n]),W=p.useCallback(y=>{const S=Math.floor(y/v);switch(t){case 0:return b.add(S*7,"days").toDate();case 1:return b.add(S,"days").toDate();case 2:return b.add(S,"hours").toDate();default:return b.toDate()}},[t,b,v]),N=p.useCallback((y,S)=>{!s||(y.preventDefault(),y.stopPropagation(),!x[S])||(h.current={x:y.clientX,y:y.clientY},u(S),d({x:0,y:0}))},[s,x]),$=p.useCallback(y=>{if(l===null||!h.current)return;const S=y.clientX-h.current.x,D=y.clientY-h.current.y,O=Math.round(S/v)*v,L=Math.round(D/he)*he;d({x:O,y:L})},[l,v]),f=p.useCallback(()=>{if(l===null||!s){u(null),d({x:0,y:0}),h.current=null;return}const y=x[l];if(!y){u(null),d({x:0,y:0}),h.current=null;return}const S=y.x+c.x,D=y.y+c.y,O=Y(D+he/2);if(!O){u(null),d({x:0,y:0}),h.current=null;return}const L=W(S),J=e[l],Q=J.endDate.getTime()-J.startDate.getTime(),A=new Date(L.getTime()+Q);s(l,{startDate:L,endDate:A,resourceId:O.resourceId,resourceLabel:O.resourceLabel}),u(null),d({x:0,y:0}),h.current=null},[l,c,x,e,s,Y,W]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",$),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",f)}},[l,$,f]),a.jsx(a.Fragment,{children:x.map(y=>{if(!y)return null;const S=y.selection.hasConflict||!1,D=l===y.index,O=D?y.x+c.x:y.x,L=D?y.y+c.y:y.y;return a.jsxs(xl,{$hasConflict:S,$isDragging:D,style:{left:O,top:L,width:y.width,height:y.height},"data-multi-select-ui":!0,onMouseDown:J=>N(J,y.index),children:[S&&a.jsx(wl,{title:g(y.selection),children:"⚠️"}),a.jsx(bl,{$hasConflict:S,children:k(y.selection.startDate,y.selection.endDate)}),a.jsx(Sl,{onClick:J=>{J.stopPropagation(),o(y.index)},onMouseDown:J=>J.stopPropagation(),title:S?"Remove conflicting selection":"Remove selection",children:"×"})]},y.index)})})},Ml=w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,kl=({zoom:e,startDate:n})=>{const{cols:t}=Le(),r=p.useMemo(()=>{if(e===2)return null;const o=e===0?_e*7:be,s=T().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"),i=T().startOf("day"),l=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,n,t]);return r?a.jsx(Ml,{style:{left:`${r.x}px`,width:`${r.width}px`},"aria-hidden":!0}):null},od="";$e.Scheduler=ma,Object.defineProperty($e,Symbol.toStringTag,{value:"Module"})});
