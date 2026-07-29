(function(Ae,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Ae=typeof globalThis<"u"?globalThis:Ae||self,i(Ae["react-scheduler"]={},Ae["react/jsx-runtime"],Ae.React,Ae.ReactDOM))})(this,function(Ae,i,p,vo){"use strict";var ud=Object.defineProperty;var fd=(Ae,i,p)=>i in Ae?ud(Ae,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):Ae[i]=p;var yo=(Ae,i,p)=>(fd(Ae,typeof i!="symbol"?i+"":i,p),p);function xo(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const re=xo(p);var De=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},St={},bo={get exports(){return St},set exports(e){St=e}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn;function wo(){if(Nn)return me;Nn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),w;w=Symbol.for("react.module.reference");function E(v){if(typeof v=="object"&&v!==null){var Y=v.$$typeof;switch(Y){case e:switch(v=v.type,v){case t:case o:case n:case c:case f:return v;default:switch(v=v&&v.$$typeof,v){case l:case a:case d:case x:case u:case s:return v;default:return Y}}case r:return Y}}}return me.ContextConsumer=a,me.ContextProvider=s,me.Element=e,me.ForwardRef=d,me.Fragment=t,me.Lazy=x,me.Memo=u,me.Portal=r,me.Profiler=o,me.StrictMode=n,me.Suspense=c,me.SuspenseList=f,me.isAsyncMode=function(){return!1},me.isConcurrentMode=function(){return!1},me.isContextConsumer=function(v){return E(v)===a},me.isContextProvider=function(v){return E(v)===s},me.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===e},me.isForwardRef=function(v){return E(v)===d},me.isFragment=function(v){return E(v)===t},me.isLazy=function(v){return E(v)===x},me.isMemo=function(v){return E(v)===u},me.isPortal=function(v){return E(v)===r},me.isProfiler=function(v){return E(v)===o},me.isStrictMode=function(v){return E(v)===n},me.isSuspense=function(v){return E(v)===c},me.isSuspenseList=function(v){return E(v)===f},me.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===t||v===o||v===n||v===c||v===f||v===C||typeof v=="object"&&v!==null&&(v.$$typeof===x||v.$$typeof===u||v.$$typeof===s||v.$$typeof===a||v.$$typeof===d||v.$$typeof===w||v.getModuleId!==void 0)},me.typeOf=E,me}var ye={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fn;function So(){return Fn||(Fn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),w=!1,E=!1,v=!1,Y=!1,J=!1,L;L=Symbol.for("react.module.reference");function z(D){return!!(typeof D=="string"||typeof D=="function"||D===t||D===o||J||D===n||D===c||D===f||Y||D===C||w||E||v||typeof D=="object"&&D!==null&&(D.$$typeof===x||D.$$typeof===u||D.$$typeof===s||D.$$typeof===a||D.$$typeof===d||D.$$typeof===L||D.getModuleId!==void 0))}function y(D){if(typeof D=="object"&&D!==null){var K=D.$$typeof;switch(K){case e:var ee=D.type;switch(ee){case t:case o:case n:case c:case f:return ee;default:var G=ee&&ee.$$typeof;switch(G){case l:case a:case d:case x:case u:case s:return G;default:return K}}case r:return K}}}var m=a,h=s,_=e,S=d,k=t,j=x,Q=u,I=r,$=o,T=n,H=c,P=f,O=!1,W=!1;function ne(D){return O||(O=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function se(D){return W||(W=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function X(D){return y(D)===a}function F(D){return y(D)===s}function U(D){return typeof D=="object"&&D!==null&&D.$$typeof===e}function te(D){return y(D)===d}function M(D){return y(D)===t}function V(D){return y(D)===x}function A(D){return y(D)===u}function R(D){return y(D)===r}function Z(D){return y(D)===o}function B(D){return y(D)===n}function g(D){return y(D)===c}function q(D){return y(D)===f}ye.ContextConsumer=m,ye.ContextProvider=h,ye.Element=_,ye.ForwardRef=S,ye.Fragment=k,ye.Lazy=j,ye.Memo=Q,ye.Portal=I,ye.Profiler=$,ye.StrictMode=T,ye.Suspense=H,ye.SuspenseList=P,ye.isAsyncMode=ne,ye.isConcurrentMode=se,ye.isContextConsumer=X,ye.isContextProvider=F,ye.isElement=U,ye.isForwardRef=te,ye.isFragment=M,ye.isLazy=V,ye.isMemo=A,ye.isPortal=R,ye.isProfiler=Z,ye.isStrictMode=B,ye.isSuspense=g,ye.isSuspenseList=q,ye.isValidElementType=z,ye.typeOf=y}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=wo():e.exports=So()})(bo);function Co(e){function r(X,F,U,te,M){for(var V=0,A=0,R=0,Z=0,B,g,q=0,D=0,K,ee=K=B=0,G=0,ce=0,pe=0,de=0,ge=U.length,Ce=ge-1,be,oe="",fe="",_e="",Ie="",ue;G<ge;){if(g=U.charCodeAt(G),G===Ce&&A+Z+R+V!==0&&(A!==0&&(g=A===47?10:47),Z=R=V=0,ge++,Ce++),A+Z+R+V===0){if(G===Ce&&(0<ce&&(oe=oe.replace(x,"")),0<oe.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:oe+=U.charAt(G)}g=59}switch(g){case 123:for(oe=oe.trim(),B=oe.charCodeAt(0),K=1,de=++G;G<ge;){switch(g=U.charCodeAt(G)){case 123:K++;break;case 125:K--;break;case 47:switch(g=U.charCodeAt(G+1)){case 42:case 47:e:{for(ee=G+1;ee<Ce;++ee)switch(U.charCodeAt(ee)){case 47:if(g===42&&U.charCodeAt(ee-1)===42&&G+2!==ee){G=ee+1;break e}break;case 10:if(g===47){G=ee+1;break e}}G=ee}}break;case 91:g++;case 40:g++;case 34:case 39:for(;G++<Ce&&U.charCodeAt(G)!==g;);}if(K===0)break;G++}switch(K=U.substring(de,G),B===0&&(B=(oe=oe.replace(u,"").trim()).charCodeAt(0)),B){case 64:switch(0<ce&&(oe=oe.replace(x,"")),g=oe.charCodeAt(1),g){case 100:case 109:case 115:case 45:ce=F;break;default:ce=H}if(K=r(F,ce,K,g,M+1),de=K.length,0<O&&(ce=t(H,oe,pe),ue=l(3,K,ce,F,I,Q,de,g,M,te),oe=ce.join(""),ue!==void 0&&(de=(K=ue.trim()).length)===0&&(g=0,K="")),0<de)switch(g){case 115:oe=oe.replace(m,a);case 100:case 109:case 45:K=oe+"{"+K+"}";break;case 107:oe=oe.replace(J,"$1 $2"),K=oe+"{"+K+"}",K=T===1||T===2&&s("@"+K,3)?"@-webkit-"+K+"@"+K:"@"+K;break;default:K=oe+K,te===112&&(K=(fe+=K,""))}else K="";break;default:K=r(F,t(F,oe,pe),K,te,M+1)}_e+=K,K=pe=ce=ee=B=0,oe="",g=U.charCodeAt(++G);break;case 125:case 59:if(oe=(0<ce?oe.replace(x,""):oe).trim(),1<(de=oe.length))switch(ee===0&&(B=oe.charCodeAt(0),B===45||96<B&&123>B)&&(de=(oe=oe.replace(" ",":")).length),0<O&&(ue=l(1,oe,F,X,I,Q,fe.length,te,M,te))!==void 0&&(de=(oe=ue.trim()).length)===0&&(oe="\0\0"),B=oe.charCodeAt(0),g=oe.charCodeAt(1),B){case 0:break;case 64:if(g===105||g===99){Ie+=oe+U.charAt(G);break}default:oe.charCodeAt(de-1)!==58&&(fe+=o(oe,B,g,oe.charCodeAt(2)))}pe=ce=ee=B=0,oe="",g=U.charCodeAt(++G)}}switch(g){case 13:case 10:A===47?A=0:1+B===0&&te!==107&&0<oe.length&&(ce=1,oe+="\0"),0<O*ne&&l(0,oe,F,X,I,Q,fe.length,te,M,te),Q=1,I++;break;case 59:case 125:if(A+Z+R+V===0){Q++;break}default:switch(Q++,be=U.charAt(G),g){case 9:case 32:if(Z+V+A===0)switch(q){case 44:case 58:case 9:case 32:be="";break;default:g!==32&&(be=" ")}break;case 0:be="\\0";break;case 12:be="\\f";break;case 11:be="\\v";break;case 38:Z+A+V===0&&(ce=pe=1,be="\f"+be);break;case 108:if(Z+A+V+$===0&&0<ee)switch(G-ee){case 2:q===112&&U.charCodeAt(G-3)===58&&($=q);case 8:D===111&&($=D)}break;case 58:Z+A+V===0&&(ee=G);break;case 44:A+R+Z+V===0&&(ce=1,be+="\r");break;case 34:case 39:A===0&&(Z=Z===g?0:Z===0?g:Z);break;case 91:Z+A+R===0&&V++;break;case 93:Z+A+R===0&&V--;break;case 41:Z+A+V===0&&R--;break;case 40:if(Z+A+V===0){if(B===0)switch(2*q+3*D){case 533:break;default:B=1}R++}break;case 64:A+R+Z+V+ee+K===0&&(K=1);break;case 42:case 47:if(!(0<Z+V+R))switch(A){case 0:switch(2*g+3*U.charCodeAt(G+1)){case 235:A=47;break;case 220:de=G,A=42}break;case 42:g===47&&q===42&&de+2!==G&&(U.charCodeAt(de+2)===33&&(fe+=U.substring(de,G+1)),be="",A=0)}}A===0&&(oe+=be)}D=q,q=g,G++}if(de=fe.length,0<de){if(ce=F,0<O&&(ue=l(2,fe,ce,X,I,Q,de,te,M,te),ue!==void 0&&(fe=ue).length===0))return Ie+fe+_e;if(fe=ce.join(",")+"{"+fe+"}",T*$!==0){switch(T!==2||s(fe,2)||($=0),$){case 111:fe=fe.replace(z,":-moz-$1")+fe;break;case 112:fe=fe.replace(L,"::-webkit-input-$1")+fe.replace(L,"::-moz-$1")+fe.replace(L,":-ms-input-$1")+fe}$=0}}return Ie+fe+_e}function t(X,F,U){var te=F.trim().split(v);F=te;var M=te.length,V=X.length;switch(V){case 0:case 1:var A=0;for(X=V===0?"":X[0]+" ";A<M;++A)F[A]=n(X,F[A],U).trim();break;default:var R=A=0;for(F=[];A<M;++A)for(var Z=0;Z<V;++Z)F[R++]=n(X[Z]+" ",te[A],U).trim()}return F}function n(X,F,U){var te=F.charCodeAt(0);switch(33>te&&(te=(F=F.trim()).charCodeAt(0)),te){case 38:return F.replace(Y,"$1"+X.trim());case 58:return X.trim()+F.replace(Y,"$1"+X.trim());default:if(0<1*U&&0<F.indexOf("\f"))return F.replace(Y,(X.charCodeAt(0)===58?"":"$1")+X.trim())}return X+F}function o(X,F,U,te){var M=X+";",V=2*F+3*U+4*te;if(V===944){X=M.indexOf(":",9)+1;var A=M.substring(X,M.length-1).trim();return A=M.substring(0,X).trim()+A+";",T===1||T===2&&s(A,1)?"-webkit-"+A+A:A}if(T===0||T===2&&!s(M,1))return M;switch(V){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(j,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return A=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+M+"-ms-flex-pack"+A+M;case 1005:return w.test(M)?M.replace(C,":-webkit-")+M.replace(C,":-moz-")+M:M;case 1e3:switch(A=M.substring(13).trim(),F=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(F)){case 226:A=M.replace(y,"tb");break;case 232:A=M.replace(y,"tb-rl");break;case 220:A=M.replace(y,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+A+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(F=(M=X).length-10,A=(M.charCodeAt(F)===33?M.substring(0,F):M).substring(X.indexOf(":",7)+1).trim(),V=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:M=M.replace(A,"-webkit-"+A)+";"+M;break;case 207:case 102:M=M.replace(A,"-webkit-"+(102<V?"inline-":"")+"box")+";"+M.replace(A,"-webkit-"+A)+";"+M.replace(A,"-ms-"+A+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return A=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+A+"-ms-flex-"+A+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(_,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(_,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(k.test(X)===!0)return(A=X.substring(X.indexOf(":")+1)).charCodeAt(0)===115?o(X.replace("stretch","fill-available"),F,U,te).replace(":fill-available",":stretch"):M.replace(A,"-webkit-"+A)+M.replace(A,"-moz-"+A.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,U+te===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+M}return M}function s(X,F){var U=X.indexOf(F===1?":":"{"),te=X.substring(0,F!==3?U:10);return U=X.substring(U+1,X.length-1),W(F!==2?te:te.replace(S,"$1"),U,F)}function a(X,F){var U=o(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return U!==F+";"?U.replace(h," or ($1)").substring(4):"("+F+")"}function l(X,F,U,te,M,V,A,R,Z,B){for(var g=0,q=F,D;g<O;++g)switch(D=P[g].call(f,X,q,U,te,M,V,A,R,Z,B)){case void 0:case!1:case!0:case null:break;default:q=D}if(q!==F)return q}function d(X){switch(X){case void 0:case null:O=P.length=0;break;default:if(typeof X=="function")P[O++]=X;else if(typeof X=="object")for(var F=0,U=X.length;F<U;++F)d(X[F]);else ne=!!X|0}return d}function c(X){return X=X.prefix,X!==void 0&&(W=null,X?typeof X!="function"?T=1:(T=2,W=X):T=0),c}function f(X,F){var U=X;if(33>U.charCodeAt(0)&&(U=U.trim()),se=U,U=[se],0<O){var te=l(-1,F,U,U,I,Q,0,0,0,0);te!==void 0&&typeof te=="string"&&(F=te)}var M=r(H,U,F,0,0);return 0<O&&(te=l(-2,M,U,U,I,Q,M.length,0,0,0),te!==void 0&&(M=te)),se="",$=0,Q=I=1,M}var u=/^\0+/g,x=/[\0\r\f]/g,C=/: */g,w=/zoo|gra/,E=/([,: ])(transform)/g,v=/,\r+?/g,Y=/([\t\r\n ])*\f?&/g,J=/@(k\w+)\s*(\S*)\s*/,L=/::(place)/g,z=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,m=/\(\s*(.*)\s*\)/g,h=/([\s\S]*?);/g,_=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,k=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,Q=1,I=1,$=0,T=1,H=[],P=[],O=0,W=null,ne=0,se="";return f.use=d,f.set=c,e!==void 0&&c(e),f}var ko={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mo(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var $o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,zn=Mo(function(e){return $o.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Kt={},Do={get exports(){return Kt},set exports(e){Kt=e}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bn;function Eo(){if(Bn)return ve;Bn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,x=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,Y=e?Symbol.for("react.responder"):60118,J=e?Symbol.for("react.scope"):60119;function L(y){if(typeof y=="object"&&y!==null){var m=y.$$typeof;switch(m){case r:switch(y=y.type,y){case d:case c:case n:case s:case o:case u:return y;default:switch(y=y&&y.$$typeof,y){case l:case f:case w:case C:case a:return y;default:return m}}case t:return m}}}function z(y){return L(y)===c}return ve.AsyncMode=d,ve.ConcurrentMode=c,ve.ContextConsumer=l,ve.ContextProvider=a,ve.Element=r,ve.ForwardRef=f,ve.Fragment=n,ve.Lazy=w,ve.Memo=C,ve.Portal=t,ve.Profiler=s,ve.StrictMode=o,ve.Suspense=u,ve.isAsyncMode=function(y){return z(y)||L(y)===d},ve.isConcurrentMode=z,ve.isContextConsumer=function(y){return L(y)===l},ve.isContextProvider=function(y){return L(y)===a},ve.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===r},ve.isForwardRef=function(y){return L(y)===f},ve.isFragment=function(y){return L(y)===n},ve.isLazy=function(y){return L(y)===w},ve.isMemo=function(y){return L(y)===C},ve.isPortal=function(y){return L(y)===t},ve.isProfiler=function(y){return L(y)===s},ve.isStrictMode=function(y){return L(y)===o},ve.isSuspense=function(y){return L(y)===u},ve.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===n||y===c||y===s||y===o||y===u||y===x||typeof y=="object"&&y!==null&&(y.$$typeof===w||y.$$typeof===C||y.$$typeof===a||y.$$typeof===l||y.$$typeof===f||y.$$typeof===v||y.$$typeof===Y||y.$$typeof===J||y.$$typeof===E)},ve.typeOf=L,ve}var xe={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hn;function _o(){return Hn||(Hn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,x=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,Y=e?Symbol.for("react.responder"):60118,J=e?Symbol.for("react.scope"):60119;function L(g){return typeof g=="string"||typeof g=="function"||g===n||g===c||g===s||g===o||g===u||g===x||typeof g=="object"&&g!==null&&(g.$$typeof===w||g.$$typeof===C||g.$$typeof===a||g.$$typeof===l||g.$$typeof===f||g.$$typeof===v||g.$$typeof===Y||g.$$typeof===J||g.$$typeof===E)}function z(g){if(typeof g=="object"&&g!==null){var q=g.$$typeof;switch(q){case r:var D=g.type;switch(D){case d:case c:case n:case s:case o:case u:return D;default:var K=D&&D.$$typeof;switch(K){case l:case f:case w:case C:case a:return K;default:return q}}case t:return q}}}var y=d,m=c,h=l,_=a,S=r,k=f,j=n,Q=w,I=C,$=t,T=s,H=o,P=u,O=!1;function W(g){return O||(O=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ne(g)||z(g)===d}function ne(g){return z(g)===c}function se(g){return z(g)===l}function X(g){return z(g)===a}function F(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function U(g){return z(g)===f}function te(g){return z(g)===n}function M(g){return z(g)===w}function V(g){return z(g)===C}function A(g){return z(g)===t}function R(g){return z(g)===s}function Z(g){return z(g)===o}function B(g){return z(g)===u}xe.AsyncMode=y,xe.ConcurrentMode=m,xe.ContextConsumer=h,xe.ContextProvider=_,xe.Element=S,xe.ForwardRef=k,xe.Fragment=j,xe.Lazy=Q,xe.Memo=I,xe.Portal=$,xe.Profiler=T,xe.StrictMode=H,xe.Suspense=P,xe.isAsyncMode=W,xe.isConcurrentMode=ne,xe.isContextConsumer=se,xe.isContextProvider=X,xe.isElement=F,xe.isForwardRef=U,xe.isFragment=te,xe.isLazy=M,xe.isMemo=V,xe.isPortal=A,xe.isProfiler=R,xe.isStrictMode=Z,xe.isSuspense=B,xe.isValidElementType=L,xe.typeOf=z}()),xe}(function(e){process.env.NODE_ENV==="production"?e.exports=Eo():e.exports=_o()})(Do);var Jt=Kt,To={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ao={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Po={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qt={};qt[Jt.ForwardRef]=Po,qt[Jt.Memo]=Wn;function jn(e){return Jt.isMemo(e)?Wn:qt[e.$$typeof]||To}var Oo=Object.defineProperty,Io=Object.getOwnPropertyNames,Zn=Object.getOwnPropertySymbols,Yo=Object.getOwnPropertyDescriptor,Lo=Object.getPrototypeOf,Vn=Object.prototype;function Gn(e,r,t){if(typeof r!="string"){if(Vn){var n=Lo(r);n&&n!==Vn&&Gn(e,n,t)}var o=Io(r);Zn&&(o=o.concat(Zn(r)));for(var s=jn(e),a=jn(r),l=0;l<o.length;++l){var d=o[l];if(!Ao[d]&&!(t&&t[d])&&!(a&&a[d])&&!(s&&s[d])){var c=Yo(r,d);try{Oo(e,d,c)}catch{}}}}return e}var No=Gn;function ze(){return(ze=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Xn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},Qt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!St.typeOf(e)},Tt=Object.freeze([]),Ue=Object.freeze({});function ct(e){return typeof e=="function"}function Rt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function en(e){return e&&typeof e.styledComponentId=="string"}var lt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",tn=typeof window<"u"&&"HTMLElement"in window,Fo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),zo={},Bo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function Ho(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function je(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(Ho.apply(void 0,[Bo[e]].concat(t)).trim())}var Wo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&je(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(t+1),c=0,f=n.length;c<f;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),At=new Map,Pt=new Map,Ct=1,Ot=function(e){if(At.has(e))return At.get(e);for(;Pt.has(Ct);)Ct++;var r=Ct++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&je(16,""+r),At.set(e,r),Pt.set(r,e),r},jo=function(e){return Pt.get(e)},Zo=function(e,r){r>=Ct&&(Ct=r+1),At.set(e,r),Pt.set(r,e)},Vo="style["+lt+'][data-styled-version="5.3.8"]',Go=new RegExp("^"+lt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Xo=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},Uo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Go);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(Zo(c,d),Xo(e,c,l[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(a)}}},Ko=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Un=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var f=d[c];if(f&&f.nodeType===1&&f.hasAttribute(lt))return f}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(lt,"active"),n.setAttribute("data-styled-version","5.3.8");var a=Ko();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},Jo=function(){function e(t){var n=this.element=Un(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var d=s[a];if(d.ownerNode===o)return d}je(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),qo=function(){function e(t){var n=this.element=Un(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Qo=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Kn=tn,Ro={isServer:!tn,useCSSOMInjection:!Fo},It=function(){function e(t,n,o){t===void 0&&(t=Ue),n===void 0&&(n={}),this.options=ze({},Ro,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&tn&&Kn&&(Kn=!1,function(s){for(var a=document.querySelectorAll(Vo),l=0,d=a.length;l<d;l++){var c=a[l];c&&c.getAttribute(lt)!=="active"&&(Uo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return Ot(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new Qo(a):s?new Jo(a):new qo(a),new Wo(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(Ot(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(Ot(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Ot(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=jo(a);if(l!==void 0){var d=t.names.get(l),c=n.getGroup(a);if(d&&c&&d.size){var f=lt+".g"+a+'[id="'+l+'"]',u="";d!==void 0&&d.forEach(function(x){x.length>0&&(u+=x+",")}),s+=""+c+f+'{content:"'+u+`"}/*!sc*/
`}}}return s}(this)},e}(),es=/(a)(d)/gi,Jn=function(e){return String.fromCharCode(e+(e>25?39:97))};function nn(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Jn(r%52)+t;return(Jn(r%52)+t).replace(es,"$1-$2")}var Re=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},qn=function(e){return Re(5381,e)};function Qn(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(ct(t)&&!en(t))return!1}return!0}var ts=qn("5.3.8"),ns=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&Qn(r),this.componentId=t,this.baseHash=Re(ts,t),this.baseStyle=n,It.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=et(this.rules,r,t,n).join(""),l=nn(Re(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var d=n(a,"."+l,void 0,o);t.insertRules(o,l,d)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,f=Re(this.baseHash,n.hash),u="",x=0;x<c;x++){var C=this.rules[x];if(typeof C=="string")u+=C,process.env.NODE_ENV!=="production"&&(f=Re(f,C+x));else if(C){var w=et(C,r,t,n),E=Array.isArray(w)?w.join(""):w;f=Re(f,E+x),u+=E}}if(u){var v=nn(f>>>0);if(!t.hasNameForId(o,v)){var Y=n(u,"."+v,void 0,o);t.insertRules(o,v,Y)}s.push(v)}}return s.join(" ")},e}(),rs=/^\s*\/\/.*$/gm,os=[":","[",".","#"];function ss(e){var r,t,n,o,s=e===void 0?Ue:e,a=s.options,l=a===void 0?Ue:a,d=s.plugins,c=d===void 0?Tt:d,f=new Co(l),u=[],x=function(E){function v(Y){if(Y)try{E(Y+"}")}catch{}}return function(Y,J,L,z,y,m,h,_,S,k){switch(Y){case 1:if(S===0&&J.charCodeAt(0)===64)return E(J+";"),"";break;case 2:if(_===0)return J+"/*|*/";break;case 3:switch(_){case 102:case 112:return E(L[0]+J),"";default:return J+(k===0?"/*|*/":"")}case-2:J.split("/*|*/}").forEach(v)}}}(function(E){u.push(E)}),C=function(E,v,Y){return v===0&&os.indexOf(Y[t.length])!==-1||Y.match(o)?E:"."+r};function w(E,v,Y,J){J===void 0&&(J="&");var L=E.replace(rs,""),z=v&&Y?Y+" "+v+" { "+L+" }":L;return r=J,t=v,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),f(Y||!v?"":v,z)}return f.use([].concat(c,[function(E,v,Y){E===2&&Y.length&&Y[0].lastIndexOf(t)>0&&(Y[0]=Y[0].replace(n,C))},x,function(E){if(E===-2){var v=u;return u=[],v}}])),w.hash=c.length?c.reduce(function(E,v){return v.name||je(15),Re(E,v.name)},5381).toString():"",w}var Rn=p.createContext();Rn.Consumer;var er=p.createContext(),is=(er.Consumer,new It),rn=ss();function tr(){return p.useContext(Rn)||is}function nr(){return p.useContext(er)||rn}var rr=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=rn);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return je(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=rn),this.name+r.hash},e}(),as=/([A-Z])/,cs=/([A-Z])/g,ls=/^ms-/,ds=function(e){return"-"+e.toLowerCase()};function or(e){return as.test(e)?e.replace(cs,ds).replace(ls,"-ms-"):e}var sr=function(e){return e==null||e===!1||e===""};function et(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=et(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(sr(e))return"";if(en(e))return"."+e.styledComponentId;if(ct(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&St.isElement(d)&&console.warn(Rt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),et(d,r,t,n)}var c;return e instanceof rr?t?(e.inject(t,n),e.getName(n)):e:Qt(e)?function f(u,x){var C,w,E=[];for(var v in u)u.hasOwnProperty(v)&&!sr(u[v])&&(Array.isArray(u[v])&&u[v].isCss||ct(u[v])?E.push(or(v)+":",u[v],";"):Qt(u[v])?E.push.apply(E,f(u[v],v)):E.push(or(v)+": "+(C=v,(w=u[v])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||C in ko?String(w).trim():w+"px")+";"));return x?[x+" {"].concat(E,["}"]):E}(e):e.toString()}var ir=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function tt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return ct(e)||Qt(e)?ir(et(Xn(Tt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:ir(et(Xn(e,t)))}var ar=/invalid hook call/i,Yt=new Set,cr=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(ar.test(s))o=!1,Yt.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];n.apply(void 0,[s].concat(l))}},p.useRef(),o&&!Yt.has(t)&&(console.warn(t),Yt.add(t))}catch(s){ar.test(s.message)&&Yt.delete(t)}finally{console.error=n}}},lr=function(e,r,t){return t===void 0&&(t=Ue),e.theme!==t.theme&&e.theme||r||t.theme},us=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fs=/(^-|-$)/g;function on(e){return e.replace(us,"-").replace(fs,"")}var sn=function(e){return nn(qn(e)>>>0)};function Lt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var an=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},hs=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ps(e,r,t){var n=e[t];an(r)&&an(n)?dr(n,r):e[t]=r}function dr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(an(a))for(var l in a)hs(l)&&ps(e,a[l],l)}return e}var dt=p.createContext();dt.Consumer;function gs(e){var r=p.useContext(dt),t=p.useMemo(function(){return function(n,o){if(!n)return je(14);if(ct(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:je(7)}return Array.isArray(n)||typeof n!="object"?je(8):o?ze({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(dt.Provider,{value:t},e.children):null}var cn={};function ur(e,r,t){var n=en(e),o=!Lt(e),s=r.attrs,a=s===void 0?Tt:s,l=r.componentId,d=l===void 0?function(J,L){var z=typeof J!="string"?"sc":on(J);cn[z]=(cn[z]||0)+1;var y=z+"-"+sn("5.3.8"+z+cn[z]);return L?L+"-"+y:y}(r.displayName,r.parentComponentId):l,c=r.displayName,f=c===void 0?function(J){return Lt(J)?"styled."+J:"Styled("+Rt(J)+")"}(e):c,u=r.displayName&&r.componentId?on(r.displayName)+"-"+r.componentId:r.componentId||d,x=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,C=r.shouldForwardProp;n&&e.shouldForwardProp&&(C=r.shouldForwardProp?function(J,L,z){return e.shouldForwardProp(J,L,z)&&r.shouldForwardProp(J,L,z)}:e.shouldForwardProp);var w,E=new ns(t,u,n?e.componentStyle:void 0),v=E.isStatic&&a.length===0,Y=function(J,L){return function(z,y,m,h){var _=z.attrs,S=z.componentStyle,k=z.defaultProps,j=z.foldedComponentIds,Q=z.shouldForwardProp,I=z.styledComponentId,$=z.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(I);var T=function(te,M,V){te===void 0&&(te=Ue);var A=ze({},M,{theme:te}),R={};return V.forEach(function(Z){var B,g,q,D=Z;for(B in ct(D)&&(D=D(A)),D)A[B]=R[B]=B==="className"?(g=R[B],q=D[B],g&&q?g+" "+q:g||q):D[B]}),[A,R]}(lr(y,p.useContext(dt),k)||Ue,y,_),H=T[0],P=T[1],O=function(te,M,V,A){var R=tr(),Z=nr(),B=M?te.generateAndInjectStyles(Ue,R,Z):te.generateAndInjectStyles(V,R,Z);return process.env.NODE_ENV!=="production"&&p.useDebugValue(B),process.env.NODE_ENV!=="production"&&!M&&A&&A(B),B}(S,h,H,process.env.NODE_ENV!=="production"?z.warnTooManyClasses:void 0),W=m,ne=P.$as||y.$as||P.as||y.as||$,se=Lt(ne),X=P!==y?ze({},y,{},P):y,F={};for(var U in X)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?F.as=X[U]:(Q?Q(U,zn,ne):!se||zn(U))&&(F[U]=X[U]));return y.style&&P.style!==y.style&&(F.style=ze({},y.style,{},P.style)),F.className=Array.prototype.concat(j,I,O!==I?O:null,y.className,P.className).filter(Boolean).join(" "),F.ref=W,p.createElement(ne,F)}(w,J,L,v)};return Y.displayName=f,(w=p.forwardRef(Y)).attrs=x,w.componentStyle=E,w.displayName=f,w.shouldForwardProp=C,w.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Tt,w.styledComponentId=u,w.target=n?e.target:e,w.withComponent=function(J){var L=r.componentId,z=function(m,h){if(m==null)return{};var _,S,k={},j=Object.keys(m);for(S=0;S<j.length;S++)_=j[S],h.indexOf(_)>=0||(k[_]=m[_]);return k}(r,["componentId"]),y=L&&L+"-"+(Lt(J)?J:on(Rt(J)));return ur(J,ze({},z,{attrs:x,componentId:y}),t)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=n?dr({},e.defaultProps,J):J}}),process.env.NODE_ENV!=="production"&&(cr(f,u),w.warnTooManyClasses=function(J,L){var z={},y=!1;return function(m){if(!y&&(z[m]=!0,Object.keys(z).length>=200)){var h=L?' with the id of "'+L+'"':"";console.warn("Over 200 classes were generated for component "+J+h+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),y=!0,z={}}}}(f,u)),w.toString=function(){return"."+w.styledComponentId},o&&No(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var ln=function(e){return function r(t,n,o){if(o===void 0&&(o=Ue),!St.isValidElementType(n))return je(1,String(n));var s=function(){return t(n,o,tt.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,ze({},o,{},a))},s.attrs=function(a){return r(t,n,ze({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(ur,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ln[e]=ln(e)});var ms=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Qn(t),It.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(et(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&It.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function ys(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=tt.apply(void 0,[e].concat(t)),s="sc-global-"+sn(JSON.stringify(o)),a=new ms(o,s);function l(c){var f=tr(),u=nr(),x=p.useContext(dt),C=p.useRef(f.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(w){return typeof w=="string"&&w.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),f.server&&d(C,c,f,x,u),p.useLayoutEffect(function(){if(!f.server)return d(C,c,f,x,u),function(){return a.removeStyles(C,f)}},[C,c,f,x,u]),null}function d(c,f,u,x,C){if(a.isStatic)a.renderStyles(c,zo,u,C);else{var w=ze({},f,{theme:lr(f,x,l.defaultProps)});a.renderStyles(c,w,u,C)}}return process.env.NODE_ENV!=="production"&&cr(s),p.memo(l)}function Be(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=tt.apply(void 0,[e].concat(t)).join(""),s=sn(o);return new rr(s,o)}var Nt=function(){return p.useContext(dt)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const b=ln;var nt={},vs={get exports(){return nt},set exports(e){nt=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",d="hour",c="day",f="week",u="month",x="quarter",C="year",w="date",E="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,J={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(I){var $=["th","st","nd","rd"],T=I%100;return"["+I+($[(T-20)%10]||$[T]||$[0])+"]"}},L=function(I,$,T){var H=String(I);return!H||H.length>=$?I:""+Array($+1-H.length).join(T)+I},z={s:L,z:function(I){var $=-I.utcOffset(),T=Math.abs($),H=Math.floor(T/60),P=T%60;return($<=0?"+":"-")+L(H,2,"0")+":"+L(P,2,"0")},m:function I($,T){if($.date()<T.date())return-I(T,$);var H=12*(T.year()-$.year())+(T.month()-$.month()),P=$.clone().add(H,u),O=T-P<0,W=$.clone().add(H+(O?-1:1),u);return+(-(H+(T-P)/(O?P-W:W-P))||0)},a:function(I){return I<0?Math.ceil(I)||0:Math.floor(I)},p:function(I){return{M:u,y:C,w:f,d:c,D:w,h:d,m:l,s:a,ms:s,Q:x}[I]||String(I||"").toLowerCase().replace(/s$/,"")},u:function(I){return I===void 0}},y="en",m={};m[y]=J;var h=function(I){return I instanceof j},_=function I($,T,H){var P;if(!$)return y;if(typeof $=="string"){var O=$.toLowerCase();m[O]&&(P=O),T&&(m[O]=T,P=O);var W=$.split("-");if(!P&&W.length>1)return I(W[0])}else{var ne=$.name;m[ne]=$,P=ne}return!H&&P&&(y=P),P||!H&&y},S=function(I,$){if(h(I))return I.clone();var T=typeof $=="object"?$:{};return T.date=I,T.args=arguments,new j(T)},k=z;k.l=_,k.i=h,k.w=function(I,$){return S(I,{locale:$.$L,utc:$.$u,x:$.$x,$offset:$.$offset})};var j=function(){function I(T){this.$L=_(T.locale,null,!0),this.parse(T)}var $=I.prototype;return $.parse=function(T){this.$d=function(H){var P=H.date,O=H.utc;if(P===null)return new Date(NaN);if(k.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var W=P.match(v);if(W){var ne=W[2]-1||0,se=(W[7]||"0").substring(0,3);return O?new Date(Date.UTC(W[1],ne,W[3]||1,W[4]||0,W[5]||0,W[6]||0,se)):new Date(W[1],ne,W[3]||1,W[4]||0,W[5]||0,W[6]||0,se)}}return new Date(P)}(T),this.$x=T.x||{},this.init()},$.init=function(){var T=this.$d;this.$y=T.getFullYear(),this.$M=T.getMonth(),this.$D=T.getDate(),this.$W=T.getDay(),this.$H=T.getHours(),this.$m=T.getMinutes(),this.$s=T.getSeconds(),this.$ms=T.getMilliseconds()},$.$utils=function(){return k},$.isValid=function(){return this.$d.toString()!==E},$.isSame=function(T,H){var P=S(T);return this.startOf(H)<=P&&P<=this.endOf(H)},$.isAfter=function(T,H){return S(T)<this.startOf(H)},$.isBefore=function(T,H){return this.endOf(H)<S(T)},$.$g=function(T,H,P){return k.u(T)?this[H]:this.set(P,T)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(T,H){var P=this,O=!!k.u(H)||H,W=k.p(T),ne=function(A,R){var Z=k.w(P.$u?Date.UTC(P.$y,R,A):new Date(P.$y,R,A),P);return O?Z:Z.endOf(c)},se=function(A,R){return k.w(P.toDate()[A].apply(P.toDate("s"),(O?[0,0,0,0]:[23,59,59,999]).slice(R)),P)},X=this.$W,F=this.$M,U=this.$D,te="set"+(this.$u?"UTC":"");switch(W){case C:return O?ne(1,0):ne(31,11);case u:return O?ne(1,F):ne(0,F+1);case f:var M=this.$locale().weekStart||0,V=(X<M?X+7:X)-M;return ne(O?U-V:U+(6-V),F);case c:case w:return se(te+"Hours",0);case d:return se(te+"Minutes",1);case l:return se(te+"Seconds",2);case a:return se(te+"Milliseconds",3);default:return this.clone()}},$.endOf=function(T){return this.startOf(T,!1)},$.$set=function(T,H){var P,O=k.p(T),W="set"+(this.$u?"UTC":""),ne=(P={},P[c]=W+"Date",P[w]=W+"Date",P[u]=W+"Month",P[C]=W+"FullYear",P[d]=W+"Hours",P[l]=W+"Minutes",P[a]=W+"Seconds",P[s]=W+"Milliseconds",P)[O],se=O===c?this.$D+(H-this.$W):H;if(O===u||O===C){var X=this.clone().set(w,1);X.$d[ne](se),X.init(),this.$d=X.set(w,Math.min(this.$D,X.daysInMonth())).$d}else ne&&this.$d[ne](se);return this.init(),this},$.set=function(T,H){return this.clone().$set(T,H)},$.get=function(T){return this[k.p(T)]()},$.add=function(T,H){var P,O=this;T=Number(T);var W=k.p(H),ne=function(F){var U=S(O);return k.w(U.date(U.date()+Math.round(F*T)),O)};if(W===u)return this.set(u,this.$M+T);if(W===C)return this.set(C,this.$y+T);if(W===c)return ne(1);if(W===f)return ne(7);var se=(P={},P[l]=n,P[d]=o,P[a]=t,P)[W]||1,X=this.$d.getTime()+T*se;return k.w(X,this)},$.subtract=function(T,H){return this.add(-1*T,H)},$.format=function(T){var H=this,P=this.$locale();if(!this.isValid())return P.invalidDate||E;var O=T||"YYYY-MM-DDTHH:mm:ssZ",W=k.z(this),ne=this.$H,se=this.$m,X=this.$M,F=P.weekdays,U=P.months,te=function(R,Z,B,g){return R&&(R[Z]||R(H,O))||B[Z].slice(0,g)},M=function(R){return k.s(ne%12||12,R,"0")},V=P.meridiem||function(R,Z,B){var g=R<12?"AM":"PM";return B?g.toLowerCase():g},A={YY:String(this.$y).slice(-2),YYYY:this.$y,M:X+1,MM:k.s(X+1,2,"0"),MMM:te(P.monthsShort,X,U,3),MMMM:te(U,X),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:te(P.weekdaysMin,this.$W,F,2),ddd:te(P.weekdaysShort,this.$W,F,3),dddd:F[this.$W],H:String(ne),HH:k.s(ne,2,"0"),h:M(1),hh:M(2),a:V(ne,se,!0),A:V(ne,se,!1),m:String(se),mm:k.s(se,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:W};return O.replace(Y,function(R,Z){return Z||A[R]||W.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(T,H,P){var O,W=k.p(H),ne=S(T),se=(ne.utcOffset()-this.utcOffset())*n,X=this-ne,F=k.m(this,ne);return F=(O={},O[C]=F/12,O[u]=F,O[x]=F/3,O[f]=(X-se)/6048e5,O[c]=(X-se)/864e5,O[d]=X/o,O[l]=X/n,O[a]=X/t,O)[W]||X,P?F:k.a(F)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return m[this.$L]},$.locale=function(T,H){if(!T)return this.$L;var P=this.clone(),O=_(T,H,!0);return O&&(P.$L=O),P},$.clone=function(){return k.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},I}(),Q=j.prototype;return S.prototype=Q,[["$ms",s],["$s",a],["$m",l],["$H",d],["$W",c],["$M",u],["$y",C],["$D",w]].forEach(function(I){Q[I[1]]=function($){return this.$g($,I[0],I[1])}}),S.extend=function(I,$){return I.$i||(I($,j,S),I.$i=!0),S},S.locale=_,S.isDayjs=h,S.unix=function(I){return S(1e3*I)},S.en=m[y],S.Ls=m,S.p={},S})})(vs);const N=nt,kt="reactSchedulerOutsideWrapper",Ye="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",xs=ys`

  #${kt} {
    font-family: ${Ye};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${kt} *,
 #${kt} *:before,
 #${kt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,bs={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},ws={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},ut=`
margin: 0;
padding: 0;
`,rt=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;b.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const Me=50,We=24,ot=16,st=40,Ft=st+ot+We,ft=84,he=56,Pe=196,Le=12,Ee=50,ht=24,Mt=16,dn=40,Ss=ht+Mt+dn,fr=24,hr=52,Ke={topRow:`600 14px ${Ye}`,middleRow:`400 10px ${Ye}`,bottomRow:{name:`600 14px ${Ye}`,number:`600 10px ${Ye}`,hoursInDay:`400 9px ${Ye}`}},pt=3,pr=12,zt=24,Cs="reactSchedulerCanvasHeaderWrapper",gr="reactSchedulerCanvasWrapper",Ze=kt,ks=4,Bt=48,Je=5,Ms=40,mr=8,un=We/2+2,yr=ot/2+We+1,vr=2,$e=60,Oe=21,xr=58,br="reactSchedulerBody",wr=e=>e%4===0&&e%100>0||e%400===0?366:365,fn=e=>{const r=e.day();return r!==0&&r!==6},Sr=(e,r)=>N(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),Cr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:fn(e),isCurrentDay:e.isSame(N(),"day"),year:parseInt(e.format("YYYY"))});let Ht=null;const $s=e=>{if(Ht)return Ht;const r=document.createElement("canvas");r.width=12,r.height=12;const t=r.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),Ht=e.createPattern(r,"repeat"),Ht):null},hn=(e,r,t,n,o,s,a,l=!1,d=!1)=>{if(s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.mode==="dark"?a.colors.primary:"#E1ECE6",e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,he),l&&!s){const f=$s(e);f&&(e.fillStyle=f,e.fillRect(r,t,n,he))}const c=a.mode==="dark";e.strokeStyle=c?a.colors.border:"#EEF3F0",e.beginPath(),e.moveTo(r+n-.5,t),e.lineTo(r+n-.5,t+he),e.stroke(),e.strokeStyle=c?a.colors.border:"#E4EAE7",e.beginPath(),e.moveTo(r,t+.5),e.lineTo(r+n,t+.5),e.stroke(),d&&(e.strokeStyle=c?a.colors.today:"#5C8374",e.beginPath(),e.moveTo(r+.5,t),e.lineTo(r+.5,t+he),e.stroke())},pn=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Oe},Ds=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=pn(a,s);for(let d=0;d<=t;d++){const c=N(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),f=c.isSame(N(),"day"),u=c.isBefore(N(),"day"),x=c.date()===1;hn(e,d*Me,a*he+l,Me,fn(c),f,o,u,x)}}},Es=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},_s=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*Le;const d=r*he+s.length*Oe;for(let c=0;c<=t;c++){const u=N(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(N(),"week");for(let x=0;x<r;x++){const C=pn(x,s);hn(e,a,x*he+C,ft,!0,u,o)}a+=ft}for(let c=0;c<t;c++){const f=Sr(n,c)*Le;Es(e,l,d,o),l+=f}},Ts=(e,r,t,n,o,s=[])=>{const a=N(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const d=pn(l,s);for(let c=0;c<=t;c++){let f;c===Math.floor(t/2)?f=N():c>Math.floor(t/2)?f=N().add(c-Math.floor(t/2),"hours"):f=N().subtract(Math.floor(t/2)-l,"hours");const u=a.isSame(N(),"day")&&f.isSame(N(),"hour");hn(e,c*Ee+Ee/2-.5,l*he+d,Ee,fn(f),u,o)}}},As=(e,r,t,n,o=!1)=>{const s=t*he+r*Oe,a=e.canvas.width;e.fillStyle=o?n.colors.subcontractBorder+"40":n.mode==="dark"?n.colors.primary+"80":"#E1ECE6",e.fillRect(0,s,a,Oe)},Ps=(e,r,t,n,o,s,a=[],l=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(gr)){switch(r){case 0:_s(e,t,n,o,s,a);break;case 1:Ds(e,t,n,o,s,a);break;case 2:Ts(e,t,n,o,s,a);break}for(let c=0;c<a.length;c++)As(e,c,a[c],s,a[c]===l);if(r===1){const c=N(`${o.year}-${o.month+1}-${o.dayOfMonth}`),f=t*he+a.length*Oe;e.strokeStyle=s.mode==="dark"?s.colors.today:"#5C8374",e.setLineDash([]);for(let u=0;u<=n;u++)if(c.add(u,"days").date()===1){const x=u*Me+.5;e.beginPath(),e.moveTo(x,0),e.lineTo(x,f),e.stroke()}}}};var gn={},Os={get exports(){return gn},set exports(e){gn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var f=a(this).startOf(n).add(1,n).date(c),u=a(this).endOf(t);if(f.isBefore(u))return 1}var x=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),C=this.diff(x,t,!0);return C<0?a(this).startOf("week").week():Math.ceil(C)},l.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(Os);const Is=gn;var mn={},Ys={get exports(){return mn},set exports(e){mn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Ys);const Ls=mn;var yn={},Ns={get exports(){return yn},set exports(e){yn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var f,u,x,C,w=a(this),E=(f=this.isoWeekYear(),u=this.$u,x=(u?s.utc:s)().year(f).startOf("year"),C=4-x.isoWeekday(),x.isoWeekday()>4&&(C+=7),x.add(C,t));return w.diff(E,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var d=l.startOf;l.startOf=function(c,f){var u=this.$utils(),x=!!u.u(f)||f;return u.p(c)==="isoweek"?x?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(c,f)}}})})(Ns);const Fs=yn;var vn={},zs={get exports(){return vn},set exports(e){vn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,d){var c=o(s),f=o(a),u=(d=d||"()")[0]==="(",x=d[1]===")";return(u?this.isAfter(c,l):!this.isBefore(c,l))&&(x?this.isBefore(f,l):!this.isAfter(f,l))||(u?this.isBefore(c,l):!this.isAfter(c,l))&&(x?this.isAfter(f,l):!this.isBefore(f,l))}}})})(zs);const Bs=vn;var xn={},Hs={get exports(){return xn},set exports(e){xn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,f=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,x={years:c,months:f,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},C=function(y){return y instanceof z},w=function(y,m,h){return new z(y,h,m.$l)},E=function(y){return n.p(y)+"s"},v=function(y){return y<0},Y=function(y){return v(y)?Math.ceil(y):Math.floor(y)},J=function(y){return Math.abs(y)},L=function(y,m){return y?v(y)?{negative:!0,format:""+J(y)+m}:{negative:!1,format:""+y+m}:{negative:!1,format:""}},z=function(){function y(h,_,S){var k=this;if(this.$d={},this.$l=S,h===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return w(h*x[E(_)],this);if(typeof h=="number")return this.$ms=h,this.parseFromMilliseconds(),this;if(typeof h=="object")return Object.keys(h).forEach(function(I){k.$d[E(I)]=h[I]}),this.calMilliseconds(),this;if(typeof h=="string"){var j=h.match(u);if(j){var Q=j.slice(2).map(function(I){return I!=null?Number(I):0});return this.$d.years=Q[0],this.$d.months=Q[1],this.$d.weeks=Q[2],this.$d.days=Q[3],this.$d.hours=Q[4],this.$d.minutes=Q[5],this.$d.seconds=Q[6],this.calMilliseconds(),this}}return this}var m=y.prototype;return m.calMilliseconds=function(){var h=this;this.$ms=Object.keys(this.$d).reduce(function(_,S){return _+(h.$d[S]||0)*x[S]},0)},m.parseFromMilliseconds=function(){var h=this.$ms;this.$d.years=Y(h/c),h%=c,this.$d.months=Y(h/f),h%=f,this.$d.days=Y(h/l),h%=l,this.$d.hours=Y(h/a),h%=a,this.$d.minutes=Y(h/s),h%=s,this.$d.seconds=Y(h/o),h%=o,this.$d.milliseconds=h},m.toISOString=function(){var h=L(this.$d.years,"Y"),_=L(this.$d.months,"M"),S=+this.$d.days||0;this.$d.weeks&&(S+=7*this.$d.weeks);var k=L(S,"D"),j=L(this.$d.hours,"H"),Q=L(this.$d.minutes,"M"),I=this.$d.seconds||0;this.$d.milliseconds&&(I+=this.$d.milliseconds/1e3);var $=L(I,"S"),T=h.negative||_.negative||k.negative||j.negative||Q.negative||$.negative,H=j.format||Q.format||$.format?"T":"",P=(T?"-":"")+"P"+h.format+_.format+k.format+H+j.format+Q.format+$.format;return P==="P"||P==="-P"?"P0D":P},m.toJSON=function(){return this.toISOString()},m.format=function(h){var _=h||"YYYY-MM-DDTHH:mm:ss",S={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return _.replace(d,function(k,j){return j||String(S[k])})},m.as=function(h){return this.$ms/x[E(h)]},m.get=function(h){var _=this.$ms,S=E(h);return S==="milliseconds"?_%=1e3:_=S==="weeks"?Y(_/x[S]):this.$d[S],_===0?0:_},m.add=function(h,_,S){var k;return k=_?h*x[E(_)]:C(h)?h.$ms:w(h,this).$ms,w(this.$ms+k*(S?-1:1),this)},m.subtract=function(h,_){return this.add(h,_,!0)},m.locale=function(h){var _=this.clone();return _.$l=h,_},m.clone=function(){return w(this.$ms,this)},m.humanize=function(h){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!h)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},y}();return function(y,m,h){t=h,n=h().$utils(),h.duration=function(k,j){var Q=h.locale();return w(k,{$l:Q},j)},h.isDuration=C;var _=m.prototype.add,S=m.prototype.subtract;m.prototype.add=function(k,j){return C(k)&&(k=k.asMilliseconds()),_.bind(this)(k,j)},m.prototype.subtract=function(k,j){return C(k)&&(k=k.asMilliseconds()),S.bind(this)(k,j)}}})})(Hs);const Ws=xn;var js="Expected a function",kr=0/0,Zs="[object Symbol]",Vs=/^\s+|\s+$/g,Gs=/^[-+]0x[0-9a-f]+$/i,Xs=/^0b[01]+$/i,Us=/^0o[0-7]+$/i,Ks=parseInt,Js=typeof De=="object"&&De&&De.Object===Object&&De,qs=typeof self=="object"&&self&&self.Object===Object&&self,Qs=Js||qs||Function("return this")(),Rs=Object.prototype,ei=Rs.toString,ti=Math.max,ni=Math.min,bn=function(){return Qs.Date.now()};function ri(e,r,t){var n,o,s,a,l,d,c=0,f=!1,u=!1,x=!0;if(typeof e!="function")throw new TypeError(js);r=Mr(r)||0,wn(t)&&(f=!!t.leading,u="maxWait"in t,s=u?ti(Mr(t.maxWait)||0,r):s,x="trailing"in t?!!t.trailing:x);function C(m){var h=n,_=o;return n=o=void 0,c=m,a=e.apply(_,h),a}function w(m){return c=m,l=setTimeout(Y,r),f?C(m):a}function E(m){var h=m-d,_=m-c,S=r-h;return u?ni(S,s-_):S}function v(m){var h=m-d,_=m-c;return d===void 0||h>=r||h<0||u&&_>=s}function Y(){var m=bn();if(v(m))return J(m);l=setTimeout(Y,E(m))}function J(m){return l=void 0,x&&n?C(m):(n=o=void 0,a)}function L(){l!==void 0&&clearTimeout(l),c=0,n=d=o=l=void 0}function z(){return l===void 0?a:J(bn())}function y(){var m=bn(),h=v(m);if(n=arguments,o=this,d=m,h){if(l===void 0)return w(d);if(u)return l=setTimeout(Y,r),C(d)}return l===void 0&&(l=setTimeout(Y,r)),a}return y.cancel=L,y.flush=z,y}function wn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function oi(e){return!!e&&typeof e=="object"}function si(e){return typeof e=="symbol"||oi(e)&&ei.call(e)==Zs}function Mr(e){if(typeof e=="number")return e;if(si(e))return kr;if(wn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=wn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(Vs,"");var t=Xs.test(e);return t||Us.test(e)?Ks(e.slice(2),t?2:8):Gs.test(e)?kr:+e}var Sn=ri;const Wt=[0,1,2];var $t=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))($t||{});const $r=e=>Wt.includes(e),gt=e=>{var n;const t=(((n=document.getElementById(Ze))==null?void 0:n.clientWidth)||0)-Pe;switch(e){case 1:return Math.ceil(t/Me)*pt;case 2:return Math.ceil(t/Ee)*pt;default:return Math.ceil(t/ft)*pt}},ii=e=>gt(e)/pt,jt=(e,r)=>{const t=gt(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},ai=(e,r)=>{const t=jt(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},Cn=()=>{var t;return((((t=document.getElementById(Ze))==null?void 0:t.clientWidth)||0)-Pe)*pt},Dr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:N(),jumpDate:null,isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});N.extend(Is),N.extend(Ls),N.extend(Fs),N.extend(Bs),N.extend(Ws);const ci=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=N(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:d})=>{const{zoom:c,maxRecordsPerPage:f=50}=n,[u,x]=p.useState(c),[C,w]=p.useState(N()),[E,v]=p.useState(null),[Y,J]=p.useState(!1),[L,z]=p.useState(gt(u)),y=Wt[u]!==Wt[Wt.length-1],m=u!==0,h=p.useMemo(()=>ai(C,u),[C,u]),_=jt(C,u).startDate,S=N(_).dayOfYear(),k=Cr(_),j=p.useRef(null),Q=p.useRef(!1),I=p.useRef(null),[$,T]=p.useState([{x:0,y:0}]),H=p.useCallback((Z,B="auto")=>{var q,D,K,ee;const g=Cn();switch(Z){case"back":return(q=j.current)==null?void 0:q.scrollTo({behavior:B,left:g/3});case"forward":return(D=j.current)==null?void 0:D.scrollTo({behavior:B,left:g/3});case"middle":{const G=g/pt/4;return(K=j.current)==null?void 0:K.scrollTo({behavior:B,left:g/2-G})}default:return(ee=j.current)==null?void 0:ee.scrollTo({behavior:B,left:g/2})}},[]),P=Z=>{T(Z)},O=p.useCallback(Z=>{const B=ii(u);let g;switch(u){case 0:g=B*7;break;case 1:g=B;break;case 2:g=Math.ceil(B/zt);break}Sn(()=>{switch((Z==="forward"||Z==="back")&&(Q.current=!0),I.current=Z,Z){case"back":w(D=>D.subtract(g,"days"));break;case"forward":w(D=>D.add(g,"days"));break;case"middle":w(N());break}s==null||s(h)},300)()},[s,h,u]);p.useEffect(()=>{I.current&&(H(I.current),I.current=null)},[C,H]),p.useEffect(()=>{j.current=document.getElementById(Ze),z(gt(u))},[u]),p.useEffect(()=>{const Z=()=>z(gt(u));return window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)},[u]),p.useEffect(()=>{s==null||s(h)},[s,h]),p.useEffect(()=>{J(!1)},[o]),p.useEffect(()=>{Y||(H("middle"),J(!0),w(o))},[o,Y,H]);const W=()=>{t||(w(Z=>u===2?Z.add(fr,"hours"):Z.add(vr,"weeks")),s==null||s(h))},ne=p.useCallback(()=>{t||O("forward")},[t,O]),se=()=>{t||(w(Z=>u===2?Z.subtract(fr,"hours"):Z.subtract(vr,"weeks")),s==null||s(h))},X=p.useCallback(()=>{!Y||t||O("back")},[Y,t,O]),F=p.useCallback(()=>{t||(I.current="middle",w(N()),v(null),s==null||s(h))},[t,s,h]),U=p.useCallback(Z=>{if(t)return;const B=N(Z).startOf("day");B.isValid()&&(I.current="middle",w(B),v(B),s==null||s(h))},[t,s,h]),te=()=>V(u+1),M=()=>V(u-1),V=Z=>{$r(Z)&&(x(Z),z(gt(Z)),s==null||s(h))},A=()=>a==null?void 0:a(),{Provider:R}=Dr;return i.jsx(R,{value:{data:e,config:n,handleGoNext:W,handleScrollNext:ne,handleGoPrev:se,handleScrollPrev:X,handleGoToday:F,goToDate:U,zoomIn:te,zoomOut:M,setZoom:V,zoom:u,isNextZoom:y,isPrevZoom:m,date:C,jumpDate:E,isLoading:t,cols:L,startDate:k,dayOfYear:S,toggleDisplayActiveUnits:A,tilesCoords:$,updateTilesCoords:P,recordsThreshold:f,onClearFilterData:l,suppressNextSlideRef:Q,toolbarActions:d},children:r})},He=()=>p.useContext(Dr),Er=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},_r=()=>{var e;return typeof window<"u"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)},Tr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*he+n*Oe;if(e>=s+Oe)n++;else if(e>=s)return o*he+n*Oe-n*Oe}return t-n*Oe},li=5,Ar=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>li},mt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},di=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:d=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(V=>({...V,data:[V.data]})):r:e,{enabled:f=!0,isDraggable:u,resourceOnly:x=!1,isValidDrop:C}=a,[w,E]=p.useState("idle"),[v,Y]=p.useState(null),[J,L]=p.useState({x:0,y:0}),[z,y]=p.useState({width:0,height:48}),[m,h]=p.useState(null),[_,S]=p.useState(!0),k=p.useRef({x:0,y:0}),j=p.useRef({x:0,y:0}),Q=p.useRef({x:0,y:0}),I=p.useRef(null),$=p.useRef(null),T=p.useRef(0),H=p.useRef(null),P=p.useCallback(V=>!f||V.draggable===!1?!1:u?u(V):!0,[f,u]),O=p.useCallback((V,A)=>{const R=Tr(A,d),Z=Math.floor(R/he);let B;switch(t){case 0:B=Le*7;break;case 1:B=Me;break;case 2:B=Ee;break;default:B=Me}const g=Math.floor(V/B);let q;const D=N().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:q=D.add(g*7,"days").toDate();break;case 1:q=D.add(g,"days").toDate();break;case 2:q=D.add(g,"hours").toDate();break;default:q=D.toDate()}return{snappedDate:q,snappedResourceIndex:Z}},[t,n,d]),W=p.useCallback((V,A,R,Z)=>{const B=[],g=A.getTime(),q=R.getTime(),D=c.find(ee=>ee.id===Z);if(!D)return B;const K=[];for(const ee of D.data)Array.isArray(ee)?K.push(...ee):K.push(ee);for(const ee of K){if(ee.segmentId===V.segmentId)continue;const G=ee.startDate.getTime(),ce=ee.endDate.getTime();if(g>=G&&g<ce||q>G&&q<=ce||g<=G&&q>=ce){const de=new Date(Math.max(g,G)),ge=new Date(Math.min(q,ce)),Ce=ge.getTime()-de.getTime();B.push({event:ee,conflictStart:de,conflictEnd:ge,overlapDuration:Ce})}}return B},[c]),ne=p.useCallback((V,A,R,Z)=>{const B=[],g=A.getTime(),q=R.getTime(),D=N(A).format("YYYY-MM-DD"),K=c.find(G=>G.id===Z);if(!K)return B;const ee=[];for(const G of K.data)Array.isArray(G)?ee.push(...G):ee.push(G);for(const G of ee){if(G.segmentId===V.segmentId)continue;const ce=G.startDate.getTime(),pe=G.endDate.getTime(),de=N(G.startDate).format("YYYY-MM-DD"),ge=N(G.endDate).format("YYYY-MM-DD"),Ce=N(R).format("YYYY-MM-DD");if(!(de===D||ge===D||de===Ce||ge===Ce||N(G.startDate).isBefore(A,"day")&&N(G.endDate).isAfter(R,"day"))||g>=ce&&g<pe||q>ce&&q<=pe||g<=ce&&q>=pe)continue;let fe,_e;pe<=g?(fe=g-pe,_e="before"):(fe=ce-q,_e="after"),B.push({event:G,timeGap:fe,position:_e})}return B.sort((G,ce)=>G.timeGap-ce.timeGap)},[c]),se=p.useCallback((V,A,R)=>{const Z=O(A,R);let B,g;if(x)B=V.startDate,g=V.endDate;else{const pe=N(V.endDate).diff(V.startDate);B=Z.snappedDate,g=N(B).add(pe,"milliseconds").toDate()}let q=0,D="",K;for(const pe of e){const de=Math.max(pe.data.length,1);if(Z.snappedResourceIndex<q+de){D=pe.id,K=pe.capacity;break}q+=de}if(!D)return null;let ee=!0;K!==void 0&&V.totalPassengers!==void 0&&(ee=V.totalPassengers<=K);const G=W(V,B,g,D),ce=G.length===0?ne(V,B,g,D):[];return{startDate:B,endDate:g,resourceId:D,resourceIndex:Z.snappedResourceIndex,resourceCapacity:K,hasCapacity:ee,conflicts:G,hasConflict:G.length>0,nearbyEvents:ce}},[O,e,x,W,ne]),X=p.useCallback((V,A)=>{if(!s)return;const R=Date.now();if(R-T.current<100)return;T.current=R;const Z={event:V,currentStartDate:A.startDate,currentEndDate:A.endDate,currentResourceId:A.resourceId,conflicts:A.conflicts};s(Z)},[s]),F=p.useCallback((V,A)=>{if(!P(V)||!l.current)return;A.preventDefault(),A.stopPropagation();const R=A.target.closest('[style*="left"]');let Z=0,B=0;R&&R.style.left&&R.style.top&&(Z=parseInt(R.style.left),B=parseInt(R.style.top));const g=mt(A.clientX,A.clientY,l.current);k.current={x:Z,y:B},j.current={x:A.clientX,y:A.clientY},Q.current={x:g.x-Z,y:20},H.current={startDate:V.startDate,endDate:V.endDate,resourceId:""};for(const K of e){for(const ee of K.data)if(ee.some(G=>G.segmentId===V.segmentId)){H.current.resourceId=K.id;break}if(H.current.resourceId)break}Y(V),E("potential"),L({x:Z,y:B});let q=100,D=48;if(R){const K=R.getBoundingClientRect();q=K.width,D=K.height}y({width:q,height:D})},[P,l,e,t]),U=p.useCallback(V=>{if(!l.current)return;let A=l.current;for(;A&&A!==document.body;){const G=window.getComputedStyle(A);if(A.scrollHeight>A.clientHeight&&(G.overflowY==="auto"||G.overflowY==="scroll"||G.overflow==="auto"||G.overflow==="scroll"))break;A=A.parentElement}(!A||A===document.body)&&(A=document.documentElement);const R=A.getBoundingClientRect(),Z=V.clientY,B=50,g=12,q=Z-R.top,D=R.bottom-Z;let K=!1,ee=0;q<B&&q>0?(K=!0,ee=-g*(1-q/B)):D<B&&D>0&&(K=!0,ee=g*(1-D/B)),K?($.current&&cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>{A.scrollTop+=ee,w==="dragging"&&U(V)})):$.current&&(cancelAnimationFrame($.current),$.current=null)},[l,w]),te=p.useCallback(V=>{if(w==="idle"||w==="animating"||!v||!l.current)return;const A={x:V.clientX,y:V.clientY};if(w==="potential")if(Ar(j.current,A))E("dragging");else return;U(V);const R=mt(V.clientX,V.clientY,l.current);I.current&&cancelAnimationFrame(I.current),I.current=requestAnimationFrame(()=>{const Z={x:R.x-Q.current.x,y:R.y-Q.current.y};L(Z);const B=se(v,R.x,R.y);if(B&&C){const g={event:v,currentStartDate:B.startDate,currentEndDate:B.endDate,currentResourceId:B.resourceId,conflicts:B.conflicts};B.hasConflict=!C(g)}if(h(B),B){const g=B.hasCapacity!==!1;S(g),X(v,B)}})},[w,v,l,se,X,C,U]),M=p.useCallback(async V=>{if(w==="idle"||w==="animating")return;const A={x:V.clientX,y:V.clientY};if(!Ar(j.current,A)||w==="potential"){E("idle"),Y(null),h(null);return}if(!v||!m||!H.current){E("idle"),Y(null),h(null);return}if(m.hasCapacity===!1){S(!1),E("animating"),L(k.current),setTimeout(()=>{E("idle"),Y(null),h(null),S(!0)},300);return}const Z={event:v,originalStartDate:H.current.startDate,originalEndDate:H.current.endDate,originalResourceId:H.current.resourceId,newStartDate:m.startDate,newEndDate:m.endDate,newResourceId:m.resourceId,hasConflict:m.hasConflict,conflicts:m.conflicts};let B=!0;if(o)try{const g=o(Z);B=g instanceof Promise?await g:g}catch{B=!1}B?(S(!0),E("idle"),Y(null),h(null)):(S(!1),E("animating"),L(k.current),setTimeout(()=>{E("idle"),Y(null),h(null),S(!0)},300))},[w,v,m,o,C]);return p.useEffect(()=>{if(w==="potential"||w==="dragging"){const V=R=>te(R),A=R=>M(R);return document.addEventListener("mousemove",V),document.addEventListener("mouseup",A),()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",A)}}else return()=>{}},[w,te,M]),p.useEffect(()=>()=>{I.current&&(cancelAnimationFrame(I.current),I.current=null),$.current&&(cancelAnimationFrame($.current),$.current=null)},[]),p.useEffect(()=>{(w==="idle"||w==="animating")&&(I.current&&(cancelAnimationFrame(I.current),I.current=null),$.current&&(cancelAnimationFrame($.current),$.current=null))},[w]),p.useEffect(()=>{(w==="dragging"||w==="potential")&&(w==="dragging"?(E("animating"),L(k.current),setTimeout(()=>{E("idle"),Y(null),h(null)},300)):(E("idle"),Y(null),h(null)))},[t]),p.useEffect(()=>{if((w==="dragging"||w==="potential")&&v){let V=!1;for(const A of e){for(const R of A.data)if(R.some(Z=>Z.segmentId===v.segmentId)){V=!0;break}if(V)break}V||(w==="dragging"?(E("animating"),L(k.current),setTimeout(()=>{E("idle"),Y(null),h(null)},300)):(E("idle"),Y(null),h(null)))}},[e,w,v]),{dragState:w,draggedEvent:v,ghostPosition:J,ghostDimensions:z,dropTarget:m,isValidDrop:_,handleDragStart:F,isDraggable:P,draggingEventId:(v==null?void 0:v.segmentId)||null,resourceOnly:x}},ui=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:d,separatorRowIndices:c=[]})=>{const{enabled:f=!1,isSelectable:u}=a,x=f&&!!o,C=p.useCallback(g=>{let q=0;for(const D of c)D<=g&&q++;return g*he+q*Oe},[c]),[w,E]=p.useState("idle"),[v,Y]=p.useState(null),[J,L]=p.useState(null),[z,y]=p.useState(null),[m,h]=p.useState(!1),[_,S]=p.useState([]),[k,j]=p.useState(!1),Q=p.useRef(null),I=p.useRef(null),$=p.useRef(null),T=p.useRef(null),H=p.useCallback(()=>{switch(t){case 0:return Le*7;case 1:return Me;case 2:return Ee;default:return Me}},[t]),P=p.useCallback(g=>{const q=H(),D=Math.floor(g/q),K=N().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return K.add(D*7,"days").toDate();case 1:return K.add(D,"days").toDate();case 2:return K.add(D,"hours").toDate();default:return K.toDate()}},[t,n,H]),O=p.useCallback(g=>{const q=Tr(g,c),D=Math.floor(q/he);let K=0;for(const ee of e){const G=Math.max(ee.data.length,1);if(D<K+G)return{resourceId:ee.id,resourceIndex:D,resourceLabel:ee.label};K+=G}return null},[e,c]),W=p.useCallback(g=>{const q=H();return Math.floor(g/q)*q},[H]),ne=p.useCallback((g,q,D,K=[])=>{const ee=[],ce=(r||e).find(ge=>ge.id===g),pe=q.getTime(),de=D.getTime();if(ce){const ge=ce.data[0],Ce=ge&&Array.isArray(ge)?ce.data.flat():ce.data;for(const be of Ce){const oe=new Date(be.startDate).getTime(),fe=new Date(be.endDate).getTime();if(pe<fe&&de>oe){const _e=new Date(Math.max(pe,oe)),Ie=new Date(Math.min(de,fe)),ue=Ie.getTime()-_e.getTime();ee.push({event:be,conflictStart:_e,conflictEnd:Ie,overlapDuration:ue})}}}for(const ge of K){if(ge.resourceId!==g)continue;const Ce=ge.startDate.getTime(),be=ge.endDate.getTime();if(pe<be&&de>Ce){const oe=new Date(Math.max(pe,Ce)),fe=new Date(Math.min(de,be)),_e=fe.getTime()-oe.getTime(),Ie={segmentId:`pending-${ge.startDate.getTime()}`,reservationId:`pending-${ge.startDate.getTime()}`,startDate:ge.startDate,endDate:ge.endDate,occupancy:0,title:`New Event (${ge.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ee.push({event:Ie,conflictStart:oe,conflictEnd:fe,overlapDuration:_e})}}return ee},[e,r]),se=p.useCallback(g=>{if(!x||d||!l.current||g.button!==0)return;const q=g.target;if(q.closest("[data-segment-id]")||q.closest("[data-multi-select-ui]"))return;const D=mt(g.clientX,g.clientY,l.current),K=O(D.y);if(!K)return;Q.current={x:g.clientX,y:g.clientY},I.current=K.resourceIndex;const ee=W(D.x),G=H(),ce=C(K.resourceIndex);Y(D),L(D),y({x:ee,y:ce,width:G,height:he}),E("selecting")},[x,d,l,O,W,H,C]),X=p.useCallback(g=>{L(g);const q=H(),D=W((v==null?void 0:v.x)||0),K=W(g.x),ee=C(I.current),G=Math.min(D,K),ce=Math.max(D,K)+q;y({x:G,y:ee,width:ce-G,height:he})},[v,H,W,C]),F=p.useCallback(()=>{T.current&&(cancelAnimationFrame(T.current),T.current=null)},[]),U=p.useCallback((g,q)=>{const D=document.getElementById(Ze);if(!D||!l.current)return;const K=D.getBoundingClientRect(),ee=60,G=12,ce=g-(K.left+Pe),pe=K.right-g;let de=0;ce<ee?de=-G*(1-Math.max(0,ce)/ee):pe<ee&&(de=G*(1-Math.max(0,pe)/ee)),F(),de!==0&&(T.current=requestAnimationFrame(()=>{D.scrollLeft+=de,X(mt(g,q,l.current)),U(g,q)}))},[l,X,F]),te=p.useCallback(g=>{if(w!=="selecting"||!l.current||I.current===null)return;const q=mt(g.clientX,g.clientY,l.current);$.current&&cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>X(q)),U(g.clientX,g.clientY)},[w,l,X,U]),M=p.useCallback(g=>{if(w!=="selecting")return;if(F(),!l.current||!v||!Q.current){E("idle"),Y(null),L(null),y(null);return}const q=mt(g.clientX,g.clientY,l.current),D=O(v.y);if(!D){E("idle"),Y(null),L(null),y(null);return}const K=Math.min(v.x,q.x),ee=Math.max(v.x,q.x),G=P(K),ce=P(ee),pe=N(ce).hour(23).minute(59).second(0).millisecond(0).toDate();if(u&&!u(D.resourceId,G,pe)){E("idle"),Y(null),L(null),y(null);return}const de=ne(D.resourceId,G,pe,_),ge=de.length>0,Ce={startDate:G,endDate:pe,resourceId:D.resourceId,resourceLabel:D.resourceLabel,zoomLevel:t,hasConflict:ge,conflicts:ge?de:void 0};if(m)S(be=>[...be,Ce]),j(!0);else if(o){const be=o(Ce),oe=fe=>{fe!=null&&fe.continueMultiSelect&&(h(!0),S([Ce]),j(!0))};be instanceof Promise?be.then(oe):oe(be)}E("idle"),Y(null),L(null),y(null),Q.current=null,I.current=null},[w,l,v,O,P,u,o,t,m,ne,_,F]),V=p.useCallback(()=>{if(_.length>0&&s){j(!1);const g=s(_),q=D=>{D!=null&&D.continueMultiSelect?j(!0):(S([]),h(!1),j(!1))};g instanceof Promise?g.then(q):q(g);return}S([]),h(!1),j(!1)},[_,s]),A=p.useCallback(()=>{S([]),h(!1),j(!1)},[]),R=p.useCallback(g=>{S(q=>{const D=q.filter((K,ee)=>ee!==g);return D.length===0&&(h(!1),j(!1)),D})},[]),Z=p.useCallback((g,q)=>{S(D=>D.map((K,ee)=>{if(ee!==g)return K;const G={...K,...q},ce=D.filter((de,ge)=>ge!==g),pe=ne(G.resourceId,G.startDate,G.endDate,ce);return{...G,hasConflict:pe.length>0,conflicts:pe.length>0?pe:void 0}}))},[ne]),B=p.useCallback(g=>{g.key==="Escape"&&(w==="selecting"?(F(),E("idle"),Y(null),L(null),y(null),Q.current=null,I.current=null):m&&_.length>0&&(S([]),h(!1),j(!1)))},[w,m,_.length,F]);return p.useEffect(()=>{if(w==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",M),document.addEventListener("keydown",B),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",M),document.removeEventListener("keydown",B)}},[w,te,M,B]),p.useEffect(()=>{if(m&&_.length>0)return document.addEventListener("keydown",B),()=>{document.removeEventListener("keydown",B)}},[m,_.length,B]),p.useEffect(()=>()=>{$.current&&(cancelAnimationFrame($.current),$.current=null),F()},[F]),p.useEffect(()=>{d&&w==="selecting"&&(F(),E("idle"),Y(null),L(null),y(null),Q.current=null,I.current=null)},[d,w,F]),{selectionState:w,selectionStart:v,selectionEnd:J,selectionBox:z,handleGridMouseDown:se,isEnabled:x,pendingSelections:_,confirmSelections:V,clearSelections:A,removeSelection:R,updateSelection:Z,isMultiSelectActive:m,hasUnconfirmedSelections:k}},fi=b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,hi=b.div`
  position: relative;
`,pi=b.canvas``;b.canvas``;const gi=b.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Pr=b.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,mi=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:a,onEventDrag:l,draggableConfig:d,onDragStateChange:c,onTimeRangeSelect:f,onMultiTimeRangeSelect:u,clickToAddConfig:x,separatorRowIndices:C=[],subcontractSeparatorRow:w=-1,fadingUnitIds:E},v){const Y=p.useRef(!1),{handleScrollNext:J,handleScrollPrev:L,date:z,isLoading:y,cols:m,startDate:h,suppressNextSlideRef:_,config:S}=He(),k=p.useRef(null),j=p.useRef(null),Q=p.useRef(t),I=p.useRef(z),$=p.useRef(null),T=p.useRef(null),H=p.useRef(null),P=p.useRef(null),[O,W]=p.useState(!1),ne=Nt(),{dragState:se,draggedEvent:X,ghostPosition:F,ghostDimensions:U,dropTarget:te,isValidDrop:M,handleDragStart:V,isDraggable:A,draggingEventId:R,resourceOnly:Z}=di({data:n,baseData:o||n,zoom:r,startDate:h,onEventDrop:a,onEventDrag:l,draggableConfig:d,gridRef:P,separatorRowIndices:C});p.useEffect(()=>{const ue=se==="dragging"||se==="potential";W(ue),c&&c(ue)},[se,c]);const B=p.useRef(!1),g=p.useRef(z),q=p.useRef(null);p.useEffect(()=>{var we;const ue=g.current;if(g.current=z,!B.current){B.current=!0;return}if(_!=null&&_.current){_.current=!1;return}const ke=P.current;if(!(ke!=null&&ke.animate))return;const ae=z.isAfter(ue)?48:-48;(we=q.current)==null||we.cancel(),ke.style.willChange="transform";const le=ke.animate([{transform:`translateX(${ae}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),ie=()=>{ke.style.willChange=""};le.onfinish=ie,le.oncancel=ie,q.current=le},[z,_]);const{selectionState:D,selectionBox:K,handleGridMouseDown:ee,pendingSelections:G,confirmSelections:ce,clearSelections:pe,removeSelection:de,updateSelection:ge,isMultiSelectActive:Ce,hasUnconfirmedSelections:be}=ui({data:n,baseData:o||n,zoom:r,startDate:h,onTimeRangeSelect:f,onMultiTimeRangeSelect:u,clickToAddConfig:x,gridRef:P,isDragging:O,separatorRowIndices:C}),oe=p.useCallback(ue=>{ue.preventDefault()},[]),fe=p.useCallback(ue=>{ue.preventDefault()},[]),_e=C.length*Oe,Ie=p.useCallback(ue=>{const ke=Cn(),ae=t*he+1+_e;Er(ue,ke,ae),Ps(ue,r,t,m,h,ne,C,w)},[m,h,t,r,ne,C,w,_e]);return p.useEffect(()=>{if(!k.current)return;const ue=k.current.getContext("2d");if(!ue)return;const ke=()=>Ie(ue);return window.addEventListener("resize",ke),()=>window.removeEventListener("resize",ke)},[Ie]),p.useEffect(()=>{var Fe;const ue=Q.current,ke=I.current;if(Q.current=t,I.current=z,ue===t||!z.isSame(ke,"day")||_r())return;const ae=k.current,le=j.current;if(!ae||!le)return;const ie=le.getContext("2d");if(!ie)return;le.width=ae.width,le.height=ae.height,le.style.width=ae.style.width,le.style.height=ae.style.height,ie.setTransform(1,0,0,1,0,0),ie.clearRect(0,0,le.width,le.height),ie.drawImage(ae,0,0),(Fe=$.current)==null||Fe.cancel(),le.style.opacity="1";const we=le.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});we.onfinish=()=>{le.style.opacity="0"},$.current=we},[t,z]),p.useEffect(()=>{const ue=k.current;if(!ue)return;ue.style.letterSpacing="1px";const ke=ue.getContext("2d");ke&&Ie(ke)},[z,t,r,Ie]),p.useEffect(()=>{if(!T.current)return;const ue=new IntersectionObserver(ke=>{ke[0].isIntersecting&&!Y.current&&(Y.current=!0,J(),setTimeout(()=>{Y.current=!1},1e3))},{root:document.getElementById(Ze)});return ue.observe(T.current),()=>{ue.disconnect()}},[J]),p.useEffect(()=>{if(!H.current)return;const ue=new IntersectionObserver(ke=>{ke[0].isIntersecting&&!Y.current&&(Y.current=!0,L(),setTimeout(()=>{Y.current=!1},1e3))},{root:document.getElementById(Ze),rootMargin:`0px 0px 0px -${Pe}px`});return ue.observe(H.current),()=>{ue.disconnect()}},[L]),i.jsxs(fi,{id:gr,children:[i.jsxs(hi,{ref:ue=>{typeof v=="function"?v(ue):v&&(v.current=ue),P.current=ue},onMouseDown:ee,style:{cursor:f?"crosshair":"default"},children:[i.jsx(Pr,{position:"left",ref:H}),i.jsx(Pn,{isLoading:y,position:"left"}),i.jsx(pi,{ref:k,onDragStart:oe,onDragOver:fe,style:{userSelect:se==="dragging"?"none":"auto"}}),i.jsx(gi,{ref:j,"aria-hidden":!0}),i.jsx(id,{zoom:r,startDate:h}),i.jsx(cd,{zoom:r,startDate:h}),i.jsx(pl,{data:n,zoom:r,onTileClick:s,onDragStart:V,isDraggable:A,draggingEventId:R,separatorRowIndices:C,fadingUnitIds:E,highlightedSegmentId:(S==null?void 0:S.highlightedSegmentId)??null,focusedUnitIds:(S==null?void 0:S.focusedUnitIds)??null,leavingSegmentIds:(S==null?void 0:S.leavingSegmentIds)??null,ghostProject:(S==null?void 0:S.ghostProject)??null}),i.jsx(Pr,{ref:T,position:"right"}),i.jsx(Pn,{isLoading:y,position:"right"}),(se==="dragging"||se==="animating")&&i.jsx(Hl,{draggedEvent:X,ghostPosition:F,ghostDimensions:U,dropTarget:te,isValidDrop:M,dragState:se,zoom:r,data:n,resourceOnly:Z,separatorRowIndices:C}),i.jsx(Zl,{selectionBox:K,isSelecting:D==="selecting"}),Ce&&G.length>0&&i.jsx(od,{selections:G,data:n,zoom:r,startDate:h,onRemove:de,onUpdate:ge,separatorRowIndices:C})]}),Ce&&be&&G.length>0&&i.jsx(Ql,{selections:G,onConfirm:ce,onClear:pe,onRemove:de})]})}),Se=(e,r="12h")=>N(e).format(r==="24h"?"HH:mm":"h:mm A"),Or=e=>{const r=N.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Ir=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/$e);t+=o.hours+s,n+=r%$e,n>=$e&&(t++,n-=$e)}),{hours:t,minutes:n}},Yr=(e,r)=>{let t=mr;switch(r){case 0:t=Ms;break;case 1:t=mr;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=$e-e.minutes;return a===$e&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},yi=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const f=N(c.startDate).isoWeek(),u=N(c.startDate).isoWeekday(),x=N(c.endDate).isoWeek(),C=N(c.endDate).isoWeekday(),{hours:w,minutes:E}=Or(c.occupancy);if(n===f){const v=(Je+1-u)*w,Y=(Je+1-u)*E;return{hours:Math.max(0,v),minutes:Y}}else if(n===x){const v=C>Je?Je*w:C*w,Y=C>Je?Je*E:C*E;return{hours:v,minutes:Y}}else if(N(r).isBetween(c.startDate,c.endDate))return{hours:Je*w,minutes:Je*E};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Ir(o),{free:l,overtime:d}=Yr({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:d}},vi=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(f=>{const{hours:u,minutes:x}=Or(f.occupancy);return o<=(n?7:5)?{hours:u,minutes:x}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Ir(s),{free:d,overtime:c}=Yr({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:d,overtime:c}},xi=(e,r)=>{let t=0;e.forEach(l=>{const d=N(l.startDate).hour(),c=N(l.endDate).hour(),f=r.hour(),u=N(l.endDate).minute(),x=N(l.startDate).minute();d<f&&c>f?t+=$e:d===f&&c===f&&x&&u?t+=u?u-x:$e-x:d===f&&c>=f?t+=x?$e-x:$e:c===f&&u&&(t+=u)});const n=Math.floor(t/$e),o=t%$e,s=n||o?0:1,a=n?0:o?$e-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},bi=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?N(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?N(t).isBetween(a.startDate,a.endDate,"hour","[]"):N(a.startDate).isBetween(N(t),N(t).add(6,"days"),"day","[]")||N(t).isBetween(N(a.startDate),N(a.endDate),"day","[]"));switch(n){case 1:return vi(s,t,n,o);case 2:return xi(s,t);default:return yi(s,t,n)}},wi=(e,r,t,n,o,s,a=!1,l="12h")=>{let d="weeks",c;switch(s){case 0:d="weeks",c=ft;break;case 1:d="days",c=Me;break;case 2:d="hours",c=Ee;break}const f=Math.ceil(s===2?(t.x-.5*c)/c:t.x/c),u=N(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(f-1,d),x=Math.ceil(t.y/he),C=n.findIndex((J,L,z)=>z.slice(0,L+1).reduce((m,h)=>m+h,0)>=x),w=s===2?(f+1)*c:f*c,E=(x-1)*he+he,v=bi(o[C],C,u,s,a),Y=N(e.startDate).isSame(N(e.endDate),"day");return{coords:{x:w,y:E},mouseCoords:t,resourceIndex:C,disposition:v,reservationData:{startTime:Se(e.startDate,l),startDate:N(e.startDate).format("MMM D, YYYY"),endTime:Se(e.endDate,l),endDate:N(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:Y,passengers:e.totalPassengers,readiness:e.readiness,subcontractConfirmed:e.subcontractConfirmed}}};function Si(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Ci(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const f of e)!f.isSubcontract&&f.capacity!=null&&t.add(f.capacity);const n=[...t].sort((f,u)=>f-u);if(n.length<2)return r;const o=Math.min(5,n.length),s=Si(n,o),a=[];let l=0;for(const f of s)a.push({min:n[l],max:n[f-1],values:n.slice(l,f)}),l=f;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const d=[],c=new Map;return a.forEach((f,u)=>{const x="__auto_cat_"+u,C=f.min===f.max?f.min+" pax":f.min+"-"+f.max+" pax";d.push({id:x,name:C,minPassengers:f.min,maxPassengers:f.max});for(const w of f.values)c.set(w,x)}),{categories:d,capacityToCategoryId:c}}const ki=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((d,c)=>{const f={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(f)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((d,c)=>{const f={id:e[c+s].id,label:e[c+s].label,data:d,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};a.push(f),c===r.length-s-1&&o.push(a)})),o):(r.forEach((d,c)=>{const f={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};a.push(f)}),o.push(a),o)};var kn={},Mi={get exports(){return kn},set exports(e){kn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(Mi);const $i=kn;var Mn={},Di={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Di);const Ei=Mn,_i=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=N(t.startDate).startOf("day"),d=N(t.endDate).startOf("day"),c=N(o[a].startDate).startOf("day"),f=N(o[a].endDate).startOf("day");if(l.isBetween(c,f,null,"[]")||d.isBetween(c,f,null,"[]")||l.isBefore(c,"minute")&&d.isAfter(f,"minute")||l.isAfter(c,"minute")&&d.isBefore(f,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};N.extend($i),N.extend(Ei);const Lr=new WeakMap,Ti=e=>{const r=Lr.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=N(o.startDate),l=N(s.startDate),d=a.startOf("day").diff(l.startOf("day"),"day");return d!==0?d:a.diff(l)}),n=_i(t);return Lr.set(e,n),n},Ai=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Ti(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Pi=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Oi=e=>{const{recordsThreshold:r}=He(),[t,n]=p.useState(0),[o,s]=p.useState(0),a=p.useRef(null);p.useEffect(()=>{a.current=document.getElementById(Ze)},[]);const{projectsPerPerson:l,rowsPerPerson:d}=p.useMemo(()=>Ai(e),[e]),c=p.useMemo(()=>ki(e,l,d,r),[e,l,r,d]),f=p.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(v=>v+c[Math.max(o,0)].length),s(v=>Math.min(v+1,c.length-1)),window.scroll({top:0}))},[o,c]),u=p.useCallback(()=>{c[o].length&&(n(v=>Math.max(v-c[o-1].length,0)),s(v=>Math.max(v-1,0)))},[o,c]),x=p.useCallback(()=>{n(0),s(0)},[]),C=t+c[o].length,w=p.useMemo(()=>d.slice(t,C),[C,d,t]),E=p.useMemo(()=>l.slice(t,C),[C,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:E,rowsPerItem:w,totalRowsPerPage:Pi(c[o]),next:f,previous:u,reset:x}};var $n={},Ii={get exports(){return $n},set exports(e){$n=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(Ii);const Yi=$n;var Dn={},Li={get exports(){return Dn},set exports(e){Dn=e}};(function(e,r){(function(t,n){e.exports=n(nt)})(De,function(t){function n(x){return x&&typeof x=="object"&&"default"in x?x:{default:x}}var o=n(t);function s(x){return x%10<5&&x%10>1&&~~(x/10)%10!=1}function a(x,C,w){var E=x+" ";switch(w){case"m":return C?"minuta":"minutę";case"mm":return E+(s(x)?"minuty":"minut");case"h":return C?"godzina":"godzinę";case"hh":return E+(s(x)?"godziny":"godzin");case"MM":return E+(s(x)?"miesiące":"miesięcy");case"yy":return E+(s(x)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,f=function(x,C){return c.test(C)?l[x.month()]:d[x.month()]};f.s=d,f.f=l;var u={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:f,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(x){return x+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(u,null,!0),u})})(Li);const Ni=Dn;var En={},Fi={get exports(){return En},set exports(e){En=e}};(function(e,r){(function(t,n){e.exports=n(nt)})(De,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(d,c,f){var u=s[f];return Array.isArray(u)&&(u=u[c?0:1]),u.replace("%d",d)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Fi);const zi=En;var _n={},Bi={get exports(){return _n},set exports(e){_n=e}};(function(e,r){(function(t,n){e.exports=n(nt)})(De,function(t){function n(f){return f&&typeof f=="object"&&"default"in f?f:{default:f}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(f,u){return l.test(u)?s[f.month()]:a[f.month()]};d.s=a,d.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(f){return f+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Bi);const Hi=_n;var Tn={},Wi={get exports(){return Tn},set exports(e){Tn=e}};(function(e,r){(function(t,n){e.exports=n(nt)})(De,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(Wi);const ji=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Yi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Ni},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"One Day",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:Tn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:Hi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:zi}];class Zi{constructor(){yo(this,"locales",ji)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Zt=new Zi,Nr=p.createContext({localesData:Zt.getLocales(),currentLocale:Zt.getLocales()[0],setCurrentLocale:()=>{}}),Vi=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Zt.getLocales(),a=p.useCallback(()=>{const u=s.find(x=>x.id===n);return typeof(u==null?void 0:u.dayjsTranslations)=="object"&&N.locale(u.dayjsTranslations),u||s[0]},[n,s]),[l,d]=p.useState(a()),c=u=>{localStorage.setItem("locale",u.translateCode),d(u)};p.useEffect(()=>{t==null||t.forEach(u=>{s.find(C=>C.id===u.id)||Zt.addLocales(u)})},[s,t]),p.useEffect(()=>{const u=localStorage.getItem("locale"),x=r??u??"en";localStorage.setItem("locale",x),o(x),d(a())},[a,r]);const{Provider:f}=Nr;return i.jsx(f,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},qe=()=>p.useContext(Nr).currentLocale.lang,Gi=e=>re.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},re.createElement("defs",null,re.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),re.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},re.createElement("stop",{offset:.47,stopColor:"#ccc"}),re.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),re.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),re.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),re.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),re.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),re.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),re.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),re.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),re.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),re.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),re.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Xi=b.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Ui=b.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Ki=({onTileClick:e})=>{const{feelingEmpty:r}=qe();return i.jsxs(Xi,{onClick:e,children:[i.jsx(Gi,{}),i.jsx(Ui,{children:r})]})},Ji=b.div`
  position: relative;
  display: flex;
`,qi=b.div`
  position: relative;
  margin-left: ${Pe};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Qi=b.div`
  width: calc(${({width:e})=>e}px - ${Pe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Pe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ri=new Set,ea={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:$t.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function ta(e,r){const t=r?[...r].sort((l,d)=>l.maxPassengers-d.maxPassengers):[],n=[];for(const l of t){const d=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);d.length>0&&n.push({type:"category",category:l,items:d})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const a=e.filter(l=>l.isSubcontract);return a.length>0&&n.push({type:"subcontract",items:a}),n}const na=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:f,onMultiTimeRangeSelect:u,clickToAddConfig:x})=>{const[C,w]=p.useState(ea),[E,v]=p.useState(e),[Y,J]=p.useState(!1),[L,z]=p.useState(!1),[y,m]=p.useState(""),[h,_]=p.useState(new Set),[S,k]=p.useState(new Set),j=p.useRef([]);p.useEffect(()=>()=>j.current.forEach(clearTimeout),[]);const{zoom:Q,startDate:I,isLoading:$,config:{includeTakenHoursOnWeekendsInDayView:T,showTooltip:H,showThemeToggle:P,hourFormat:O}}=He(),W=p.useRef(null),ne=p.useRef(null),[se,X]=p.useState(124),{page:F,projectsPerPerson:U,rowsPerItem:te,currentPageNum:M,pagesAmount:V,next:A,previous:R,reset:Z}=Oi(E),{effectiveCategories:B,effectivePage:g}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:F};const ae=Ci(F);if(ae.categories.length===0)return{effectiveCategories:void 0,effectivePage:F};const le=F.map(ie=>{if(ie.isSubcontract||ie.capacity==null)return ie;const we=ae.capacityToCategoryId.get(ie.capacity);return we?{...ie,categoryId:we}:ie});return{effectiveCategories:ae.categories,effectivePage:le}},[t,F]),q=p.useCallback(ae=>{if(h.has(ae)){_(ie=>{const we=new Set(ie);return we.delete(ae),we});return}if(_r()){_(ie=>new Set(ie).add(ae));return}k(ie=>new Set(ie).add(ae));const le=setTimeout(()=>{_(ie=>new Set(ie).add(ae)),k(ie=>{const we=new Set(ie);return we.delete(ae),we})},190);j.current.push(le)},[h]),D=p.useMemo(()=>{const ae=[],le=B?[...B].sort((ie,we)=>ie.maxPassengers-we.maxPassengers):[];for(const ie of le)g.some(we=>!we.isSubcontract&&we.categoryId===ie.id)&&ae.push(ie.id);return g.some(ie=>ie.isSubcontract)&&ae.push("__subcontract__"),ae},[B,g]),K=p.useCallback(()=>{_(new Set)},[]),ee=p.useCallback(()=>{_(new Set(D))},[D]),G=p.useMemo(()=>{if(S.size===0)return Ri;const ae=new Set;for(const le of g){const ie=le.isSubcontract?"__subcontract__":le.categoryId;ie&&S.has(ie)&&ae.add(le.id)}return ae},[S,g]),{visiblePage:ce,visibleRowsPerItem:pe,visibleTotalRows:de,visibleProjectsPerPerson:ge,separatorRowIndices:Ce,subcontractSeparatorRow:be}=p.useMemo(()=>{const ae=ta(g,B),le=((B==null?void 0:B.length)??0)>0,ie=new Map;F.forEach((Te,xt)=>ie.set(Te.id,xt));const we=[],Fe=[],Ge=[],Xe=[];let it=0,Gt=-1;for(const Te of ae)if(Te.type==="subcontract"||Te.type==="category"&&le){const bt=Te.type==="subcontract"?"__subcontract__":Te.category.id,wt=h.has(bt);if(Xe.push(it),Te.type==="subcontract"&&(Gt=it),!wt)for(const at of Te.items){const Xt=ie.get(at.id)??0,Ut=te[Xt];we.push(at),Fe.push(Ut),Ge.push(U[Xt]),it+=Ut}}else for(const bt of Te.items){const wt=ie.get(bt.id)??0,at=te[wt];we.push(bt),Fe.push(at),Ge.push(U[wt]),it+=at}const Qe=Fe.reduce((Te,xt)=>Te+xt,0);return{visiblePage:we,visibleRowsPerItem:Fe,visibleTotalRows:Qe,visibleProjectsPerPerson:Ge,separatorRowIndices:Xe,subcontractSeparatorRow:Gt}},[g,B,F,h,te,U]),oe=p.useRef(Sn((ae,le,ie,we,Fe,Ge)=>{if(!W.current)return;const{tile:Xe,segmentId:it}=Ie(ae);if(!it||!Xe){J(!1);return}const Gt=_e(it,le),Qe=W.current.getBoundingClientRect(),Te=Xe.getBoundingClientRect(),xt={x:ae.clientX-Qe.left,y:ae.clientY-Qe.top},bt={x:ae.clientX-Qe.left,y:ae.clientY-Qe.top},wt={x:Te.left-Qe.left,y:Te.top-Qe.top,width:Te.width,height:Te.height},{coords:{x:at,y:Xt},resourceIndex:Ut,disposition:ld,reservationData:dd}=wi(Gt,ie,xt,we,Fe,Ge,T,O??"12h");w({coords:{x:at,y:Xt},mouseCoords:bt,resourceIndex:Ut,disposition:ld,reservationData:dd,tileBounds:wt}),J(!0)},4)),fe=p.useRef(Sn((ae,le)=>{Z(),v(ae.map(ie=>({...ie,data:ie.data.filter(we=>{const{title:Fe,description:Ge,subtitle:Xe}=we;return(Fe==null?void 0:Fe.toLowerCase().includes(le.toLowerCase()))||(Xe==null?void 0:Xe.toLowerCase().includes(le.toLowerCase()))||(Ge==null?void 0:Ge.toLowerCase().includes(le.toLowerCase()))})})).filter(ie=>ie.data.length>0))},500)),_e=(ae,le)=>{if(ae)return le.flatMap(ie=>ie.data).find(ie=>ie.segmentId===ae)},Ie=ae=>{if(!ae.target)return{tile:null,segmentId:null};const le=ae.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},ue=ae=>{const le=ae.target.value;m(le),fe.current.cancel(),le?fe.current(e,le):(Z(),v(e))},ke=p.useCallback(()=>{oe.current.cancel(),J(!1)},[]);return p.useEffect(()=>{const ae=ie=>oe.current(ie,e,I,pe,ge,Q),le=W.current;if(le)return le.addEventListener("mousemove",ae),le.addEventListener("mouseleave",ke),()=>{le.removeEventListener("mousemove",ae),le.removeEventListener("mouseleave",ke)}},[oe,ke,ge,pe,I,Q,e]),p.useEffect(()=>{y?(fe.current.cancel(),fe.current(e,y)):v(e)},[e,y]),p.useLayoutEffect(()=>{const ae=ne.current;if(!ae)return;const le=()=>X(ae.offsetHeight);le();const ie=new ResizeObserver(le);return ie.observe(ae),()=>ie.disconnect()},[]),i.jsxs(Ji,{children:[i.jsx(dc,{headerHeight:se,data:g,categories:B,pageNum:M,pagesAmount:V,rows:te,onLoadNext:A,onLoadPrevious:R,searchInputValue:y,onSearchInputChange:ue,onItemClick:o,collapsedGroups:h,fadingGroups:S,onToggleGroup:q,allGroupIds:D,onExpandAll:K,onCollapseAll:ee}),i.jsxs(qi,{children:[i.jsx(Bc,{ref:ne,zoom:Q,topBarWidth:a,showThemeToggle:P,toggleTheme:s}),e.length?i.jsx(mi,{data:ce,baseData:r||e,zoom:Q,rows:de,ref:W,onTileClick:n,onEventDrop:l,onEventDrag:d,draggableConfig:c,onDragStateChange:z,onTimeRangeSelect:f,onMultiTimeRangeSelect:u,clickToAddConfig:x,separatorRowIndices:Ce,subcontractSeparatorRow:be,fadingUnitIds:G}):i.jsx(Qi,{width:a,children:$?i.jsx(Pn,{isLoading:$,position:"left"}):i.jsx(Ki,{})}),H&&i.jsx(Tl,{tooltipData:C,visible:Y&&!L})]})]})},ra=b.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Pe+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.mode==="dark"?e.colors.primary:"#E1ECE6"};
`,Fr=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,oa=b.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,sa=b.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,zr=b.button`
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
`,ia=b.button`
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
`,aa=b.div`
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
    background: #5c8374;
    color: #fff;
  }
`,Br=b.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 650;
  color: ${({$primary:e})=>e?"#fff":"#3a4c46"};
  border: 1px solid ${({$primary:e})=>e?"transparent":"#c8d5cd"};
  background: ${({$primary:e})=>e?"#5c8374":"#fff"};
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
`,ca=b.label`
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
`,la=b.button`
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
`,da=b.span`
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
`,yt=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),ua=()=>{var r,t;const e=document.getElementById(br);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},fa=()=>{const{config:e,zoom:r,handleGoNext:t,handleGoPrev:n,handleGoToday:o,setZoom:s,goToDate:a,toggleDisplayActiveUnits:l,toolbarActions:d}=He(),{filterButtonState:c=-1}=e,f=()=>{var u;(u=document.querySelector(`#${Ze} input[placeholder]`))==null||u.focus()};return i.jsxs(ra,{width:0,children:[i.jsxs(Fr,{$at:"start",children:[i.jsxs(sa,{children:[i.jsx(zr,{onClick:n,"aria-label":"Anterior",children:i.jsx(yt,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(ia,{onClick:o,children:"Hoy"}),i.jsx(zr,{onClick:t,"aria-label":"Siguiente",children:i.jsx(yt,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),e.showViewSwitcher!==!1&&i.jsxs(i.Fragment,{children:[i.jsx(oa,{}),i.jsxs(aa,{children:[i.jsx("button",{className:r===2?"on":"",onClick:()=>s(2),children:"Día"}),i.jsx("button",{className:r===0?"on":"",onClick:()=>s(0),children:"Semana"}),i.jsx("button",{className:r===1?"on":"",onClick:()=>s(1),children:"Mes"})]})]}),e.showJumpToDate!==!1&&i.jsxs(ca,{children:[i.jsxs(yt,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onChange:u=>u.target.value&&a(u.target.value)})]}),i.jsxs(la,{onClick:f,children:[i.jsxs(yt,{children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",i.jsx("span",{className:"k",children:"⌘K"})]})]}),i.jsxs(Fr,{$at:"end",children:[e.showFilterButton!==!1&&c>=0&&i.jsxs(Br,{$primary:!!c,onClick:l,children:[i.jsx(yt,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&i.jsx(da,{children:c})]}),e.showFullscreenButton!==!1&&i.jsxs(Br,{onClick:ua,children:[i.jsx(yt,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),d]})]})},ha={add:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>re.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),re.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},An=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Nt(),a=ha[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},pa=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];b.button`
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
  ${({theme:e,variant:r,disabled:t})=>pa(e,r,t)}
`;const ga=b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${xr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ye};
`,ma=b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,ya=b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,va=b.div`
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
`,xa=b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,ba=b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,wa=b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`,Sa=b.div`
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
`,Ca=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,ka=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,Ma=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,$a=b.div`
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
`,Hr="#cdd8d2",Wr=[178,216,195],Da=[15,125,102],Ea=e=>{const r=Math.min(1,Math.max(0,e)),t=n=>Math.round(Wr[n]+(Da[n]-Wr[n])*r);return`rgb(${t(0)}, ${t(1)}, ${t(2)})`},_a=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=He(),s=qe(),a=p.useRef(null),[l,d]=p.useState(null),c=p.useMemo(()=>Array.from({length:12},(S,k)=>N().month(k).format("MMM").toUpperCase()),[s]),f=p.useMemo(()=>N().startOf("day"),[]),{domainStart:u,domainEnd:x,domainDays:C}=p.useMemo(()=>{const S=f.subtract(3,"month").startOf("month"),k=f.add(9,"month").endOf("month");return{domainStart:S,domainEnd:k,domainDays:k.diff(S,"day")+1}},[f]),w=S=>S.diff(u,"day")/C*100,E=S=>Math.min(100,Math.max(0,S)),v=p.useMemo(()=>{const S=[];let k=u.startOf("month");for(;k.isBefore(x);)S.push(k),k=k.add(1,"month");return S},[u,x]),Y=o==null?void 0:o.yearCounts,J=p.useMemo(()=>{const S=Math.ceil(C/7),k=new Array(S).fill(0),j=O=>{const W=O.diff(u,"day");return W<0||W>=C?-1:Math.floor(W/7)};if(Y&&Y.length)for(const O of Y){const W=j(N(O.date));W>=0&&(k[W]+=O.count)}else for(const O of t??[])for(const W of O.data??[]){const ne=j(N(W.startDate));ne>=0&&(k[ne]+=1)}const Q=Math.max(0,...k);if(Q<=0)return k.map(()=>({h:0,color:Hr}));const I=k.filter(O=>O>0).sort((O,W)=>O-W),$=I.length>>1,T=I.length%2?I[$]:(I[$-1]+I[$])/2,H=T>0?Q/T:1,P=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,H)))));return k.map(O=>O>0?{h:Math.min(100,100*Math.pow(O/Q,P)),color:Ea(O/Q)}:{h:0,color:Hr})},[t,Y,u,C]),L=w(f),z=S=>{const{startDate:k,endDate:j}=jt(S,r),Q=E(w(k));return{left:Q,width:E(w(j))-Q,startDate:k,endDate:j}},y=z(e),m=l?z(l.d):null,h=S=>`${S.date()} ${c[S.month()]}`,_=S=>{var Q;const k=(Q=a.current)==null?void 0:Q.getBoundingClientRect();if(!k)return null;const j=Math.min(1,Math.max(0,(S-k.left)/k.width));return{f:j,d:u.add(Math.round(j*(C-1)),"day")}};return i.jsxs(ga,{children:[i.jsxs(ma,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(ya,{ref:a,onClick:S=>{const k=_(S.clientX);k&&n(k.d.toDate())},onMouseMove:S=>{const k=_(S.clientX);k&&d({left:k.f*100,d:k.d})},onMouseLeave:()=>d(null),children:[i.jsx(va,{children:v.map((S,k)=>i.jsx("span",{style:{left:`${w(S)}%`},children:k===0||S.month()===0?`${c[S.month()]} ${S.format("YY")}`:c[S.month()]},k))}),v.map((S,k)=>k===0?null:i.jsx(xa,{style:{left:`${w(S)}%`}},k)),i.jsx(ba,{children:J.map((S,k)=>i.jsx(wa,{style:{height:`${S.h}%`,background:S.color}},k))}),i.jsx(Ca,{style:{left:`${y.left}%`,width:`${y.width}%`}}),i.jsx(Sa,{style:{left:`${E(L)}%`},children:i.jsx("span",{children:"HOY"})}),l&&m&&i.jsxs(i.Fragment,{children:[i.jsx(ka,{style:{left:`${m.left}%`,width:`${m.width}%`}}),i.jsx(Ma,{style:{left:`${l.left}%`}}),i.jsx($a,{style:{left:`${l.left}%`},children:`Ir a ${h(l.d)}`})]})]})]})},Ta=b.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Aa=b.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?xr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Pa=b.div`
  position: relative;
`,Oa=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,schedulerRef:f,onTimeRangeSelect:u,onMultiTimeRangeSelect:x,clickToAddConfig:C})=>{const{goToDate:w,handleGoToday:E,zoomIn:v,zoomOut:Y,zoom:J}=He();return p.useImperativeHandle(f,()=>({goToDate:w,goToToday:E,setZoom:L=>{if(!$r(L))return;const z=L-J;if(z>0)for(let y=0;y<z;y++)v();else for(let y=0;y<Math.abs(z);y++)Y()}}),[w,E,J,v,Y]),i.jsx(na,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:x,clickToAddConfig:C})},Ia=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:f,onItemClick:u,isLoading:x,onEventDrop:C,onEventDrag:w,draggableConfig:E,onTimeRangeSelect:v,onMultiTimeRangeSelect:Y,clickToAddConfig:J},L){var H;const z=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,hourFormat:"12h",showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),y=p.useRef(null),m=p.useRef(null),[h,_]=p.useState((H=y.current)==null?void 0:H.clientWidth),S=p.useMemo(()=>N(s),[s]),[k,j]=p.useState(z.defaultTheme??"light"),Q=()=>{j(k==="light"?"dark":"light")},I=k==="light"?bs:ws,$=z.theme?z.theme[I.mode]:{},T={...I,colors:{...I.colors,...$}};return p.useImperativeHandle(L,()=>({goToDate:P=>{var O;return(O=m.current)==null?void 0:O.goToDate(P)},goToToday:()=>{var P;return(P=m.current)==null?void 0:P.goToToday()},setZoom:P=>{var O;return(O=m.current)==null?void 0:O.setZoom(P)}}),[]),p.useLayoutEffect(()=>{const P=()=>{y.current&&_(y.current.clientWidth)};P(),window.addEventListener("resize",P);let O;const W=y.current;return W&&typeof ResizeObserver<"u"&&(O=new ResizeObserver(P),O.observe(W)),()=>{window.removeEventListener("resize",P),O==null||O.disconnect()}},[]),i.jsxs(i.Fragment,{children:[i.jsx(xs,{}),i.jsx(gs,{theme:T,children:i.jsx(Vi,{lang:z.lang,translations:z.translations,children:i.jsx(ci,{data:r,isLoading:!!x,config:z,onRangeChange:a,defaultStartDate:S,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:f,children:i.jsxs(Ta,{id:br,children:[i.jsx(Aa,{showScroll:!!r.length,$footer:z.showOverview!==!1&&!!r.length,id:Ze,ref:y,children:i.jsx(Pa,{children:i.jsx(Oa,{data:r,baseData:n,categories:t,onTileClick:l,topBarWidth:h??0,onItemClick:u,toggleTheme:Q,onEventDrop:C,onEventDrag:w,draggableConfig:E,schedulerRef:m,onTimeRangeSelect:v,onMultiTimeRangeSelect:Y,clickToAddConfig:J})})}),z.showOverview!==!1&&!!r.length&&i.jsx(_a,{})]})})})})]})}),Ya=b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,La=b.button`
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
`,Na=b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Fa=b.p`
  ${ut}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,jr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=qe(),d=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(Ya,{intent:e,children:i.jsxs(La,{onClick:r,isVisible:n,children:[t&&i.jsx(Na,{children:t}),i.jsx(Fa,{children:d})]})})},za=b.div`
  min-width: ${Pe+"px"};
  max-width: ${Pe+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Ba=b.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({$height:e})=>e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Pe}px;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,Ha=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Wa=b.input`
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
`,ja=b.div`
  margin-left: 10px;
  height: 36px;
  flex: 1;
  min-width: 0;
  background-color: ${({theme:e})=>e.colors.primary};
  border: 1px solid
    ${({theme:e,isFocused:r})=>r?e.colors.accent:e.colors.border};
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
`,Za=Be`
  from { opacity: 1; }
  to { opacity: 0; }
`,Zr=b.div`
  ${({$fading:e})=>e&&tt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Za} 180ms ease forwards;
      }
    `}
`,Va=b.button`
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
`,Ga=Be`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,Xa=b.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${he}px;
  height: calc(${he}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder+"33":e.colors.border};
  border-left: 3px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder:"transparent"};
  background-color: ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBg:"transparent"};
  /* Scope the transition to paint-only props. It was transition:0.5s ease (= transition:all), which animated the row
     height (a LAYOUT property) for 500ms on every add/remove/collapse — layout thrash that made rowIn hitch. */
  transition: background-color 0.15s ease, border-color 0.15s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Ga} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,Ua=b.div`
  display: flex;
  align-items: center;
`,Ka=b.div`
  margin-right: 0.625rem;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: ${({theme:e,$provider:r})=>r?e.colors.subcontractBg:e.colors.accent+"1A"};
  color: ${({theme:e,$provider:r})=>r?e.colors.subcontractText:e.colors.accent};
  & svg {
    width: 17px;
    height: 17px;
  }
`,Ja=b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,qa=b.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Vr=b.p`
  margin: 0;
  padding: 0;
  font-size: ${({isMain:e})=>e?.75+"rem":.625+"rem"};
  letter-spacing: ${({isMain:e})=>e?1+"px":.5+"px"};
  line-height: ${({isMain:e})=>e?1.125+"rem":.75+"rem"};
  color: ${({isMain:e,theme:r})=>e?r.colors.textPrimary:r.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`,Qa=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`,Ra=b.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  flex: none;
  font-size: 10px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.accent};
  background: ${({theme:e})=>e.colors.accent+"1A"};
  padding: 1px 6px;
  border-radius: 5px;
  & svg {
    width: 11px;
    height: 11px;
  }
`,ec=b.span`
  min-width: 0;
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.placeholder};
  border: 1px solid ${({theme:e})=>e.colors.border};
  padding: 1px 6px;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tc=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),nc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[i.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),i.jsx("path",{d:"M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z"}),i.jsx("circle",{cx:"16.8",cy:"8.6",r:"2.5"}),i.jsx("path",{d:"M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8"})]}),rc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),oc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),sc=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(Xa,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(Ua,{children:[i.jsx(Ka,{$provider:o,children:tc(r.icon)?i.jsx(Ja,{src:r.icon,alt:""}):o?i.jsx(oc,{}):i.jsx(rc,{})}),i.jsxs(qa,{children:[i.jsx(Vr,{isMain:!0,children:r.title}),r.capacity!=null||r.plate?i.jsxs(Qa,{children:[r.capacity!=null&&i.jsxs(Ra,{title:`${r.capacity} pasajeros`,children:[i.jsx(nc,{}),r.capacity]}),r.plate&&i.jsx(ec,{title:r.plate,children:r.plate})]}):r.subtitle&&i.jsx(Vr,{children:r.subtitle})]})]})}),ic=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder+"24":"#E1ECE6"};
  border-left: 3px solid
    ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:"transparent"};
  border-bottom: 1px solid
    ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:"#D4DFD9"};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder+"33":"#DAE6E0"};
  }
`,ac=b.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,cc=b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  flex-shrink: 0;
`,lc=b.div`
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
`,Gr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>i.jsxs(ic,{$variant:o,onClick:n,title:e,children:[i.jsx(lc,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(ac,{$variant:o,children:e}),i.jsx(cc,{$variant:o,children:r})]}),dc=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:d,onSearchInputChange:c,onItemClick:f,collapsedGroups:u,fadingGroups:x,onToggleGroup:C,allGroupIds:w,onExpandAll:E,onCollapseAll:v})=>{const[Y,J]=p.useState(!1),L=qe(),z=()=>J($=>!$),y=r?[...r].sort(($,T)=>$.maxPassengers-T.maxPassengers):[],m=y.length>0,h=w.length>0,_=h&&u.size===w.length;h&&u.size;const S=e.filter($=>$.isSubcontract),k=L.subcontract??"Subcontract",j=$=>{const T=e.indexOf($);return i.jsx(sc,{id:$.id,item:$.label,rows:n[T],onItemClick:f,isSubcontract:$.isSubcontract},$.id)},Q=$=>{const T=e.filter(W=>!W.isSubcontract&&W.categoryId===$.id);if(T.length===0)return null;const H=u.has($.id),P=x.has($.id),O=$.name;return i.jsxs("div",{children:[i.jsx(Gr,{label:O,count:T.length,isCollapsed:H||P,onToggle:()=>C($.id),variant:"category"}),!H&&i.jsx(Zr,{$fading:P,children:T.map(j)})]},$.id)},I=e.filter($=>!$.isSubcontract&&(!$.categoryId||!m));return i.jsxs(za,{children:[i.jsxs(Ba,{$height:t,children:[i.jsxs(Ha,{children:[i.jsxs(ja,{isFocused:Y,children:[i.jsx(Wa,{placeholder:L.search,value:d,onChange:c,onFocus:z,onBlur:z}),i.jsx(An,{iconName:"search"})]}),h&&i.jsx(Va,{title:_?"Expand all":"Collapse all",onClick:_?E:v,$allCollapsed:_,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:_?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(jr,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(An,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),m?y.map(Q):I.map(j),m&&I.length>0&&I.map(j),S.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Gr,{label:k,count:S.length,isCollapsed:u.has("__subcontract__")||x.has("__subcontract__"),onToggle:()=>C("__subcontract__"),variant:"subcontract"}),!u.has("__subcontract__")&&i.jsx(Zr,{$fading:x.has("__subcontract__"),children:S.map(j)})]}),i.jsx(jr,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(An,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},uc=b.div`
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
`,fc=Be`
from{
    left: -100%;
}
to{
    left: 100%;
}`,hc=b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${fc} 1s infinite;
`,Pn=({isLoading:e,position:r})=>e?i.jsx(uc,{position:r,children:i.jsx(hc,{})}):null,Ve=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:d,font:c,isBottomRow:f,fillStyle:u,topText:x,bottomText:C,strokeStyle:w,labelBetweenCells:E}=e;t.beginPath();const v=w??(r.mode==="dark"?r.colors.border:"#E4EAE7");if(t.strokeStyle=v,t.setLineDash([]),d&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),E?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):(t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke()),t.font=c;const Y=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.mode==="dark"?r.colors.textPrimary:"#183D3D",t.fillText(d,Y,l)}if(f&&u&&x&&C){t.fillStyle=u,t.fillRect(n,o,s,a),t.beginPath(),t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke(),t.font=x.font;const Y=n+s/2-t.measureText(x.label).width/2;t.fillStyle=x.color,t.fillText(x.label,Y,x.y),t.font=C.font;const J=n+s/2-t.measureText(C.label).width/2;t.fillStyle=C.color,t.fillText(C.label,J,C.y)}},pc=(e,r,t,n,o=ot)=>{const s=We+o,a=s+13,l=s+27;let d=0;for(let c=0;c<r;c++){const f=Cr(N(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"days")),u=f.isCurrentDay;if(Ve({ctx:e,x:d,y:s,width:Me,height:st,isBottomRow:!0,fillStyle:u?n.colors.currentDay:n.colors.gridBackground,topText:{y:a,label:u?"":f.dayName.replace(/\./g,"").toUpperCase(),font:`600 10px ${Ye}`,color:n.mode==="dark"?n.colors.placeholder:"#74897F"},bottomText:{y:l,label:`${f.dayOfMonth}`,font:u?`700 12px ${Ye}`:`700 13px ${Ye}`,color:u?n.colors.today:n.mode==="dark"?n.colors.textPrimary:"#183D3D"}},n),u){const w=d+Me/2,E=a-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(w-30/2,E,30,13,5):e.rect(w-30/2,E,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ye}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",w,E+13/2+.5),e.restore()}f.dayOfMonth===1&&(e.save(),e.strokeStyle=n.mode==="dark"?n.colors.today:"#5C8374",e.setLineDash([]),e.beginPath(),e.moveTo(d+.5,0),e.lineTo(d+.5,s+st),e.stroke(),e.restore()),d+=Me}},gc=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Le;const s=We;let l=t.month;for(let d=0;d<r;d++){l>=pr&&(l=0);const c=Sr(t,d)*Le;Ve({ctx:e,x:o,y:s,width:c,height:ot,textYPos:yr,label:N().month(l).format("MMMM").toUpperCase(),font:Ke.bottomRow.number},n),o+=c,l++}},mc=" ".repeat(98),yc=(e,r,t)=>{const o=N(`${r.year}-${r.month+1}-${r.dayOfMonth}`);let s=-r.dayOfMonth*Me+Me;for(let a=0;a<pr;a++){const l=o.add(a,"months"),d=l.daysInMonth()*Me,c=l.format("MMMM YYYY").toUpperCase();Ve({ctx:e,x:s,y:0,width:d,height:We,textYPos:un,label:`${c}${mc}${c}`,font:`800 12px ${Ye}`},t),s+=d}},vc=(e,r,t,n)=>{const o=7*Me,s=We,a=e.canvas.width/o+o,l=r.weekOfYear;let d=0;for(let c=0;c<a;c++){const f=N(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let u=(l+c)%hr;u<=0&&(u+=hr),f!==1&&c===0&&(d=-f*Me+Me),Ve({ctx:e,x:d,y:s,width:o,height:ot,textYPos:yr,label:`${t.toUpperCase()} ${u}`,font:Ke.middleRow},n),d+=o}},xc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},bc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},wc=(e,r,t,n,o)=>{const s=Ft-st/1.6,a=Ft-st/4.5,l=We+ot;let d=0;for(let c=0;c<r;c++){const f=N(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),u=f.isSame(N(),"week");Ve({ctx:e,x:d,y:l,width:ft,height:st,isBottomRow:!0,fillStyle:u?o.colors.today+"26":xc({isCurrent:u,variant:"yearView"},o),topText:{y:s,label:f.isoWeek().toString(),font:u?`700 14px ${Ye}`:Ke.bottomRow.name,color:u?o.colors.today:bc({isCurrent:u},o)},bottomText:{y:a,label:n.toUpperCase(),font:Ke.middleRow,color:o.colors.placeholder}},o),d+=ft}},Sc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,d=0,c=(wr(s)-t+1)*Le,f=0;for(;l+f<=a;)d>0&&(c=wr(s+d)*Le),f+c>a&&d>0&&(c=Math.ceil((a-f)/Le)*Le),Ve({ctx:e,x:l,y:0,width:c,height:We,textYPos:un,label:(s+d).toString(),font:Ke.topRow},n),l+=c,f+=c,d++},Cc=(e,r,t,n)=>{const o=Math.floor(r/zt)+2,s=zt*Ee;let d=-N(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Ee+.5*Ee;for(let c=0;c<o;c++){const f=N(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Ve({ctx:e,x:d,y:ht,width:s,height:Mt,textYPos:ht+Mt/2+2,label:f,font:Ke.bottomRow.number},n),d+=s}},kc=(e,r,t,n)=>{const o=Math.ceil(r/zt),s=N(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),d=a.add(1,"day").month(),c=l===d?1:2;let f=.5*Ee;for(let u=0;u<c;u++){const x=N(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),w=N(`${t.year}-${t.month+u+1}-01T:23:59:59`).endOf("month"),E=w.format("MMMM").toUpperCase(),v=w.diff(x,"hour")+1,Y=u===0?v*Ee:r*Ee;Ve({ctx:e,x:f,y:0,width:Y,height:ht,textYPos:un,label:E,font:Ke.topRow},n),f+=Y}},Mc=(e,r,t,n,o="12h")=>{let s=0;const a=ht+Mt,l=N(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),d=Ee;for(let c=0;c<r;c++){const f=o==="24h"?l.add(c,"hours").format("HH:00"):l.add(c,"hours").format("h:00a").toUpperCase();Ve({ctx:e,x:s,y:a,width:d,height:dn,label:f,font:Ke.bottomRow.hoursInDay,textYPos:ht+Mt+dn/2+2,labelBetweenCells:!0},n),s+=Ee}},$c=(e,r,t,n,o,s,a,l=!0,d="12h")=>{switch(r){case 0:Sc(e,n,s,a),gc(e,t,n,a),wc(e,t,n,o,a);break;case 1:yc(e,n,a),l&&vc(e,n,o,a),pc(e,t,n,a,l?ot:0);break;case 2:kc(e,t,n,a),Cc(e,t,n,a),Mc(e,t,n,a,d);break}},Dc=b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,Ec=b.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,_c=b.div`
  height: ${({$height:e})=>e??Ft}px;
  display: block;
`,Tc=b.canvas``,Ac={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},Ne=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Ac[e]}),Pc=b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Pe+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Xr=b.span`
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
`,Vt=b.span`
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
`,Oc=b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,Ic=b.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,Yc=b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,Lc=b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,Nc=b.span`
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
`,Fc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],zc=()=>i.jsxs(Pc,{children:[i.jsx(Xr,{children:"Leyenda"}),i.jsxs(Vt,{children:[i.jsx(Ne,{name:"transfer"})," Transfer"]}),i.jsxs(Vt,{children:[i.jsx(Ne,{name:"sun"})," Gira 1 día"]}),i.jsxs(Vt,{children:[i.jsx(Ne,{name:"tour"})," Gira multidía"]}),i.jsxs(Vt,{children:[i.jsx(Oc,{children:"SUB"})," Subcontrato"]}),i.jsx(Ic,{}),i.jsxs(Xr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),Fc.map(e=>i.jsxs(Yc,{children:[i.jsx(Lc,{style:{background:e.stripe}}),i.jsx(Nc,{style:{color:e.color},children:i.jsx(Ne,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),Bc=p.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=qe(),{date:l,cols:d,dayOfYear:c,startDate:f,config:u}=He(),x=p.useRef(null),C=Nt(),w=u.showWeekRow!==!1,E=u.hourFormat??"12h",v=r===2?Ss:r===1&&!w?We+st:Ft,Y=p.useCallback(J=>{const L=Cn(),z=v+1;Er(J,L,z),$c(J,r,d,f,a,c,C,w,E)},[d,c,f,a,r,C,w,E,v]);return p.useEffect(()=>{if(!x.current)return;const J=x.current.getContext("2d");if(!J)return;const L=()=>Y(J);return window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[Y]),p.useEffect(()=>{const J=x.current;if(!J)return;J.style.letterSpacing="1px";const L=J.getContext("2d");L&&Y(L)},[l,r,Y]),i.jsxs(Dc,{ref:s,children:[(u.showTopbar!==!1||u.showLegend!==!1)&&i.jsxs(Ec,{$width:t,children:[u.showTopbar!==!1&&i.jsx(fa,{width:t,showThemeToggle:n,toggleTheme:o}),u.showLegend!==!1&&i.jsx(zc,{})]}),i.jsx(_c,{$height:v,id:Cs,children:i.jsx(Tc,{ref:x})})]})}),Hc=(e,r,t)=>{let n;switch(t){case 0:n=Le;break;case 2:n=Ee;break;default:n=Me}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),d=r.endDate.startOf("day"),c=()=>{let f;switch(t){case 2:f=(e.startDate.diff(r.startDate,"minute")/$e+1)*n-n/2;break;default:f=s.diff(l,"day")*n}return Math.max(0,f)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let f;switch(t){case 2:f=Math.max(e.endDate.diff(e.startDate,"minute")/$e*n,50);break;default:f=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:f}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let f;switch(t){case 2:f=Math.max(e.endDate.diff(r.startDate,"minute")/$e*n+.5*n,50);break;default:f=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:f}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let f;switch(t){case 2:f=Math.max(r.endDate.diff(e.startDate,"minute")/$e*n,50);break;default:f=Math.max(d.diff(s,"day")*n+n,50)}return{x:c(),width:f}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let f;switch(t){case 2:f=Math.max(r.endDate.diff(r.startDate,"minute")/$e*n,50);break;default:f=Math.max(d.diff(l,"day")*n+n,50)}return{x:c(),width:f}}return{x:c(),width:50}},Wc=(e,r,t,n,o,s)=>{const a=e*he+ks,l=r.hour(),d=t.hour();let c,f,u,x;switch(s){case 2:{c=N(n),f=N(o),u=N(r).hour(l).minute(0),x=N(t).hour(d).minute(0);break}default:{c=N(n).hour(0).minute(0),f=N(o).hour(23).minute(59),u=r,x=t;break}}return{...Hc({startDate:c,endDate:f},{startDate:u,endDate:x},s),y:a}},Ur=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},Kr={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2",label:"Sin chofer"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22",label:"No notificado al chofer"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0",label:"Notificado"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63",label:"Confirmado"}};b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,b.p`
  ${ut}
  ${rt}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const jc=Be`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,Zc=Be`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,Vc=b.button`
  ${ut}
  position: absolute;
  height: ${Bt}px;
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
  cursor: ${({isDraggable:e,isDragging:r})=>e?r?"grabbing":"grab":"not-allowed"};
  opacity: ${({isDragging:e})=>e?.3:1};
  transition: opacity 0.2s ease;
  /* Motion (gated on reduced-motion): fade/scale a newly-mounted tile in, fade a removed one out, and a subtle lift
     on hover. Only transform/opacity/box-shadow are transitioned — NOT top: transitioning top animated a LAYOUT
     property on every displaced tile on unit add/remove (reflow+paint per frame across many nodes = the reported
     lag), and it made the tiles glide while the canvas grid lane snaps. Tiles now snap to their new row in lockstep
     with the canvas; the enter/exit fades + the left-column rowIn carry the motion. */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${jc} 180ms ease-out;
    transition: opacity 0.2s ease, transform 160ms ease, box-shadow 160ms ease;
    &:hover:not(:active) {
      transform: translateY(-1.5px);
      box-shadow: 0 6px 13px -3px rgba(12, 26, 23, 0.42), 0 0 0 0.5px rgba(12, 26, 23, 0.16);
    }
  }
  ${({$unconfirmed:e})=>e&&`background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px #D98A22, 0 2px 5px -1px rgba(12,26,23,0.28);
     @media (prefers-reduced-motion: no-preference) {
       &:hover:not(:active) { box-shadow: 0 0 0 1.5px #D98A22, 0 6px 13px -3px rgba(12,26,23,0.42); }
     }`}
  ${({$exiting:e})=>e&&tt`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Zc} 190ms ease-out forwards;
      }
    `}
  /* Persistent green highlight for the event focused from a warning: a bold green ring + glow + an inset green wash
     over the tile bg (below the text, which stays readable). Lifted above neighbours so the ring isn't clipped. */
  ${({$highlighted:e})=>e&&`z-index: 9;
     box-shadow: 0 0 0 3px #0F7D66, 0 0 16px 3px rgba(15, 125, 102, 0.55), inset 0 0 0 200px rgba(15, 125, 102, 0.3);`}
  /* Focus-mode: rows outside the focused set fade back and go inert. */
  ${({$dimmed:e})=>e&&"opacity: 0.26; filter: grayscale(0.45); pointer-events: none;"}
  /* Focus-mode: a blocking service that will vacate the target unit — amber dashed outline, faded. */
  ${({$leaving:e})=>e&&"opacity: 0.74; filter: grayscale(0.2); outline: 2px dashed #D98A22; outline-offset: -2px; z-index: 7;"}
`,Gc=b.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`,Xc=b.div`
  position: sticky;
  left: ${Pe+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`,Jr=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Uc=b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Kc=b.span`
  ${rt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,Jc=b.span`
  ${rt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,qc=b.span`
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
`,Qc=b.div`
  ${rt}
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
`,qr=b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Qr=b.span`
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
`,Rr=b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Rc=b.div`
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
`,eo=b.span`
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
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,el=Be`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`,tl=b.div`
  position: absolute;
  height: ${Bt}px;
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
    animation: ${el} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`,nl=b.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`,rl=b.div`
  ${rt}
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
`,ol=b.div`
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
`,sl=b.span`
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
`,il=b.span`
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
`,al=34,cl="#3E8E5A",ll="#D98A22",On=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:a=!1,isDraggable:l=!0,yOffset:d=0,exiting:c=!1,highlighted:f=!1,dimmed:u=!1,leaving:x=!1,ghost:C=!1,ghostBadge:w=""})=>{const{date:E,config:v}=He(),Y=v.hourFormat??"12h",J=jt(E,t),{y:L,x:z,width:y}=Wc(e,J.startDate,J.endDate,r.startDate,r.endDate,t),{colors:m}=Nt(),h=p.useRef(null),_=N(r.startDate).isSame(N(r.endDate),"day"),S=r.eventType===$t.Tour,k=r.eventType===$t.Transfer,j=_&&(S||k);if(C)return i.jsxs(tl,{style:{left:`${z}px`,top:`${L+d}px`,width:`${y}px`},children:[i.jsxs(nl,{children:[i.jsxs(rl,{children:[i.jsx(Ne,{name:k?"transfer":"tour"}),r.title]}),i.jsxs(ol,{children:[i.jsx(Ne,{name:"check",strokeWidth:2.6}),"flota propia"]})]}),w&&i.jsx(sl,{children:w})]});const Q=W=>{h.current={x:W.clientX,y:W.clientY},l&&s&&(W.preventDefault(),s(r,W))},I=W=>{if(h.current){const ne=Math.abs(W.clientX-h.current.x),se=Math.abs(W.clientY-h.current.y);Math.sqrt(ne*ne+se*se)<=5&&(o==null||o(r)),h.current=null}else o==null||o(r)},$={left:`${z}px`,top:`${L+d}px`,backgroundColor:`${r.bgColor??m.defaultTile}`,width:`${y}px`,color:Ur(r.bgColor??"")},T=!n&&r.readiness?Kr[r.readiness]:null,H=n&&r.subcontractConfirmed===!1,P=n?H?ll:cl:T==null?void 0:T.stripe,O=W=>i.jsxs(Vc,{"data-segment-id":r.segmentId,style:$,onClick:I,onMouseDown:Q,onDragStart:ne=>ne.preventDefault(),isDraggable:l,isDragging:a,$unconfirmed:H,$exiting:c,$highlighted:f,$dimmed:u,$leaving:x,children:[P&&i.jsx(Gc,{style:{background:P}}),x&&i.jsx(il,{children:"Sub"}),W]});return O(j?i.jsxs(i.Fragment,{children:[(n||T)&&i.jsx(qr,{$sm:!0,children:n?i.jsx(Rr,{children:"SUB"}):T&&i.jsx(Qr,{$sm:!0,style:{color:T.color},children:i.jsx(Ne,{name:T.icon,strokeWidth:T.icon==="check"?2.6:2.2})})}),i.jsxs(Rc,{$transfer:k,children:[i.jsx(Ne,{name:k?"transfer":"sun",strokeWidth:2.4}),y>=al&&i.jsxs(i.Fragment,{children:[i.jsx(eo,{children:Se(r.startDate,Y)}),!k&&i.jsx(eo,{$end:!0,children:Se(r.endDate,Y)})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(qr,{children:n?i.jsx(Rr,{children:"SUB"}):T&&i.jsx(Qr,{style:{color:T.color},children:i.jsx(Ne,{name:T.icon,strokeWidth:T.icon==="check"?2.6:2.2})})}),r.bookingNumber&&i.jsx(qc,{children:r.bookingNumber}),i.jsxs(Xc,{children:[i.jsxs(Jr,{$pad:!0,children:[i.jsx(Uc,{children:i.jsx(Ne,{name:k?"transfer":"tour"})}),i.jsx(Kc,{children:r.title})]}),r.subtitle&&i.jsx(Jr,{children:i.jsx(Jc,{children:r.subtitle})}),r.driver&&i.jsxs(Qc,{children:[i.jsx(Ne,{name:"person"}),r.driver]})]})]}))},to=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Oe},dl=Be`
  from { opacity: 0; }
  to { opacity: 1; }
`,ul=Be`
  from { opacity: 1; }
  to { opacity: 0; }
`,fl=b.div`
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
  @media (prefers-reduced-motion: no-preference) {
    animation: ${dl} 200ms ease-out;
  }
  ${({$fading:e})=>e&&tt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${ul} 180ms ease forwards;
      }
    `}
  ${({$dimmed:e})=>e&&"opacity: 0.28;"}
`,hl=e=>({segmentId:e.segmentId,reservationId:e.reservationId,startDate:e.startDate,endDate:e.endDate,occupancy:0,title:e.title,bookingNumber:"",eventType:e.eventType}),pl=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:a=[],fadingUnitIds:l,highlightedSegmentId:d,focusedUnitIds:c,leavingSegmentIds:f,ghostProject:u})=>{const{nodes:x,liveMap:C}=p.useMemo(()=>{const L=new Map,z=!!c&&c.length>0;let y=0;return{nodes:e.map((h,_)=>{_>0&&(y+=Math.max(e[_-1].data.length,1));const S=!!(l!=null&&l.has(h.id)),k=z&&!c.includes(h.id),j=to(y,a),Q=u&&h.id===u.targetUnitId?i.jsx(On,{row:y,data:hl(u),zoom:r,yOffset:j,isDragging:!1,isDraggable:!1,ghost:!0,ghostBadge:u.badge},`ghost-${h.id}`):null;if(!h.data.some($=>$.length>0)){const $=[i.jsx(fl,{$fading:S,$dimmed:k,style:{top:`${y*he+j}px`},children:"Disponible"},`dispo-${h.id}`)];return Q&&$.push(Q),$}const I=h.data.map(($,T)=>$.map(H=>{const P=s===H.segmentId,O=o?o(H):!1,W=T+y,ne=to(W,a);return L.set(H.segmentId,{project:H,absoluteRow:W,yOffset:ne,isSubcontract:!!h.isSubcontract}),i.jsx(On,{row:W,data:H,zoom:r,isSubcontract:h.isSubcontract,onTileClick:t,onDragStart:n,isDragging:P,isDraggable:O,yOffset:ne,exiting:S,highlighted:d!=null&&H.segmentId===d,dimmed:k,leaving:!!(f!=null&&f.includes(H.segmentId))},H.segmentId)}));return Q?[...I,[Q]]:I}).flat(2),liveMap:L}},[e,t,r,n,o,s,a,l,d,c,f,u]),w=p.useRef(new Map),E=p.useRef([]),[v,Y]=p.useState([]);p.useEffect(()=>()=>E.current.forEach(clearTimeout),[]),p.useEffect(()=>{const L=w.current;w.current=C;const z=[];if(L.forEach((h,_)=>{C.has(_)||z.push(h)}),Y(h=>{let _=h.filter(S=>!C.has(S.project.segmentId));for(const S of z)_.some(k=>k.project.segmentId===S.project.segmentId)||(_=[..._,S]);return _}),!z.length)return;const y=new Set(z.map(h=>h.project.segmentId)),m=setTimeout(()=>{Y(h=>h.filter(_=>!y.has(_.project.segmentId)))},220);E.current.push(m)},[C]);const J=v.filter(L=>!C.has(L.project.segmentId)).map(L=>i.jsx(On,{row:L.absoluteRow,data:L.project,zoom:r,isSubcontract:L.isSubcontract,yOffset:L.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},L.project.segmentId));return i.jsx(i.Fragment,{children:[...x,...J]})};b.div`
  box-sizing: border-box;
  font-family: ${Ye};
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({isExpanded:e})=>e?0:"-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`,b.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`,b.label`
  font-size: 14px;
`,b.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`,b.input`
  height: 18px;
  width: 18px;
`,b.button`
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
`,b.form`
  background-color: rgba(255, 255, 255, 0.75);
`;const gl=b.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
  /* Kept mounted (opacity-driven) so the fade plays BOTH directions. */
  opacity: ${({$visible:e})=>e?1:0};
  transform: translateY(${({$visible:e})=>e?"0":"3px"});
  transition: opacity 150ms ease, transform 150ms ease;
`,ml=b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,yl=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,vl=b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xl=b.span`
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
`,bl=b.div`
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
`,wl=b.div`
  ${ut}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Sl=b.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,Cl=b.div`
  padding: 10px 12px;
`,kl=b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,no=b.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,ro=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,oo=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,so=b.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,io=b.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Ml=b.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,$l=b.div`
  min-width: 0;
`,Dl=b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,El=b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,ao=b.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Dt=b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Et=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,_t=b.div`
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
`;b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.div``,b.span``,b.div``,b.div``,b.div``,b.div``,b.p``,b.span``;const _l={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Tl=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=p.useRef(null),[s,a]=p.useState("below"),l=qe(),d={..._l,...l.tooltip};p.useLayoutEffect(()=>{if(!o.current||!t)return;const E=o.current,{width:v,height:Y}=E.getBoundingClientRect(),J=E.parentElement;if(!J)return;const L=J.getBoundingClientRect(),z=12,y=4,m=L.height-t.y,h=L.width-t.x;let _=t.x+z,S=t.y+z,k="below";h<v+z&&(_=t.x-v-z),m<Y+z&&(S=t.y-Y-z,k="above"),_=Math.max(y,Math.min(_,L.width-v-y)),S=Math.max(y,Math.min(S,L.height-Y-y)),a(k),E.style.left=`${_}px`,E.style.top=`${S}px`},[t]);const c=n.reservationType===$t.Tour,f=c&&n.isOneDayEvent,u=c?f?"sun":"tour":"transfer",x=c?f?d.oneDay:d.tour:d.transfer,C=n.readiness?Kr[n.readiness]:null,w=[n.groupName&&{label:d.groupName,value:n.groupName},n.driver&&{label:d.driver,value:n.driver},n.passengers&&{label:d.passengers,value:String(n.passengers)},n.flightNumber&&{label:d.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(gl,{ref:o,$position:s,$visible:r,children:[i.jsxs(ml,{children:[i.jsxs(yl,{children:[i.jsx(vl,{children:n.bookingNumber}),i.jsxs(xl,{children:[i.jsx(Ne,{name:u,strokeWidth:2.4}),x]})]}),i.jsx(wl,{children:n.eventName}),n.client&&i.jsx(Sl,{children:n.client}),C&&i.jsxs(bl,{style:{color:C.color},children:[i.jsx(Ne,{name:C.icon,strokeWidth:C.icon==="check"?2.6:2.2}),C.label]})]}),i.jsxs(Cl,{children:[i.jsxs(kl,{children:[i.jsxs(no,{children:[i.jsx(ro,{children:d.startDate}),i.jsxs(oo,{children:[i.jsx(so,{children:n.startDate}),i.jsx(io,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(no,{$isEnd:!0,children:[i.jsx(ro,{children:d.endDate}),i.jsxs(oo,{children:[i.jsx(so,{children:n.endDate}),i.jsx(io,{children:n.endTime})]})]})]}),w.length>0&&i.jsx(Ml,{children:w.map((E,v)=>i.jsxs($l,{children:[i.jsx(Dl,{children:E.label}),i.jsx(El,{children:E.value})]},v))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(ao,{children:[n.departureAddress&&i.jsxs(Dt,{children:[i.jsx(Et,{children:d.salida}),i.jsx(_t,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(Dt,{children:[i.jsx(Et,{children:d.destino}),i.jsx(_t,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(Dt,{children:[i.jsx(Et,{children:d.regreso}),i.jsx(_t,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(ao,{children:[n.serviceNotes&&i.jsxs(Dt,{children:[i.jsx(Et,{children:d.serviceNotes}),i.jsx(_t,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(Dt,{children:[i.jsx(Et,{children:d.reservationNotes}),i.jsx(_t,{children:n.reservationNotes})]})]})]})]})};b.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,b.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,b.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`;const Al=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Pl=b.div`
  position: absolute;
  height: ${Bt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,Ol=b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,co=b.p`
  ${ut}
  ${rt}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Il=b.p`
  ${ut}
  ${rt}
`,Yl=b.div`
  position: sticky;
  left: ${Pe+16}px;
  overflow: hidden;
`,Ll=b.div`
  position: absolute;
  height: ${Bt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Nl=b.div`
  position: absolute;
  top: -24px;
  left: 0;
  padding: 4px 8px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
`,Fl=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,zl=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,Bl=b.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,lo=b.div`
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
`,uo=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,fo=b.div`
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
`,ho=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,In=b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Yn=b.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,vt=b.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,po=b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,Hl=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:d=[]})=>{const c=qe(),{config:f}=He(),u=f.hourFormat??"12h",x=m=>{let h=0;for(const _ of d)_<=m&&h++;return m*he+h*Oe},[C,w]=p.useState(null),[E,v]=p.useState(0),Y=p.useCallback((m=400,h=300)=>{const S=t.width,k=48,j=document.getElementById("react-scheduler");if(!j)return{x:r.x+S+16,y:r.y};const Q=j.scrollLeft,I=j.scrollTop,$=j.clientWidth,T=j.clientHeight,H=r.x-Q,P=r.y-I,O={left:Pe+16,right:$-16,top:16,bottom:T-16},W=O.right-(H+S),ne=H-O.left,se=O.bottom-(P+k),X=P-O.top;let F,U;return W>=m+16?F=H+S+16:ne>=m+16?F=H-m-16:W>=ne?(F=H+S+16,F+m>O.right&&(F=O.right-m)):(F=H-m-16,F<O.left&&(F=O.left)),se>=h+16?U=P+k+16:X>=h+16?U=P-h-16:se>=X?(U=P+k+16,U+h>O.bottom&&(U=O.bottom-h)):(U=P-h-16,U<O.top&&(U=O.top)),F=Math.max(O.left,Math.min(F,O.right-m)),U=Math.max(O.top,Math.min(U,O.bottom-h)),{x:F+Q,y:U+I}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&E===0?v(r.x):s==="idle"&&v(0)},[s,e,r.x,E]),p.useEffect(()=>{w(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const J=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const m=[];let h=0;for(const _ of a){const S=Math.max(_.data.length,1);if(_.capacity!==void 0&&e.totalPassengers>_.capacity)for(let k=0;k<S;k++)m.push(h+k);h+=S}return m},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const L=s==="animating",z=Ur(e.bgColor??""),y=()=>{if(!n)return"";const m=`${N(n.startDate).format("MMM D")}, ${Se(n.startDate,u)}`,h=Se(n.endDate,u);return`${m} - ${h}`};return i.jsxs(Al,{children:[J.map(m=>i.jsx(zl,{style:{top:`${x(m)}px`,height:`${he}px`}},m)),n&&s==="dragging"&&i.jsx(Fl,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${x(n.resourceIndex)}px`,height:`${he}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(Ll,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${x(n.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),i.jsx(Nl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${x(n.resourceIndex)+(he-48)/2}px`},children:y()})]}),n&&s==="dragging"&&l&&i.jsx(Bl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${x(n.resourceIndex)}px`,height:`${he}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const m=Y(400,300);return i.jsxs(lo,{style:{left:`${m.x}px`,top:`${m.y}px`},children:[i.jsxs(uo,{children:[i.jsx(fo,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(ho,{children:n.conflicts.map((h,_)=>{const S=N(n.startDate).format("YYYY-MM-DD"),k=N(n.endDate).format("YYYY-MM-DD"),j=N(h.event.startDate).format("YYYY-MM-DD"),Q=N(h.event.endDate).format("YYYY-MM-DD"),I=N(h.conflictStart).format("YYYY-MM-DD"),$=N(h.conflictEnd).format("YYYY-MM-DD"),T=S!==k,H=j!==Q,P=I!==$,O=T?`${N(n.startDate).format("MMM D")}, ${Se(n.startDate,u)}`:Se(n.startDate,u),W=T?`${N(n.endDate).format("MMM D")}, ${Se(n.endDate,u)}`:Se(n.endDate,u),ne=H?`${N(h.event.startDate).format("MMM D")}, ${Se(h.event.startDate,u)}`:Se(h.event.startDate,u),se=H?`${N(h.event.endDate).format("MMM D")}, ${Se(h.event.endDate,u)}`:Se(h.event.endDate,u),X=P?`${N(h.conflictStart).format("MMM D")}, ${Se(h.conflictStart,u)}`:Se(h.conflictStart,u),F=P?`${N(h.conflictEnd).format("MMM D")}, ${Se(h.conflictEnd,u)}`:Se(h.conflictEnd,u),U=P?"":N(h.conflictStart).format("MMM D"),te=n.startDate.getTime(),M=n.endDate.getTime(),V=h.event.startDate.getTime(),A=h.event.endDate.getTime(),R=te>=V&&te<A,Z=M>V&&M<=A,B=te<=V&&M>=A,g=V<=te&&A>=M;let q=!1,D=!1,K=!1,ee=!1,G="";return B||g?(q=!0,D=!0,K=!0,ee=!0,G=`⚠️ ${c.conflicts.changeBoth}`):R&&Z?(q=!0,D=!0,K=!0,ee=!0,G=`⚠️ ${c.conflicts.changeBoth}`):R?(q=!0,ee=!0,G=`⚠️ ${c.conflicts.changeStart}`):Z&&(D=!0,K=!0,G=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(In,{children:[i.jsxs(Yn,{children:[c.conflicts.conflictsWith,": ",h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(vt,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",q?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:O}):O," ",c.conflicts.to," ",D?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:W}):W]}),i.jsxs(vt,{children:[i.jsx("strong",{children:h.event.title})," ",c.conflicts.currentlyAt,":"," ",K?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ne}):ne," ",c.conflicts.to," ",ee?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:se}):se]}),i.jsxs(po,{children:[c.conflicts.conflictTime,": ",U&&`${U}, `,X," - ",F]}),G&&i.jsx(vt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:G})]},_)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const m=Y(400,400);return i.jsxs(lo,{style:{left:`${m.x}px`,top:`${m.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(uo,{style:{color:"#2E7D32"},children:[i.jsx(fo,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(ho,{children:[(()=>{const h=n.nearbyEvents.some(j=>j.position==="before"),_=n.nearbyEvents.some(j=>j.position==="after"),S=Se(n.startDate,u),k=Se(n.endDate,u);return i.jsxs(In,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(Yn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(vt,{style:{fontWeight:600},children:[N(n.startDate).format("MMM D"),":"," ",h?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",c.conflicts.to," ",_?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:k}):k]}),i.jsx(vt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((h,_)=>{const S=N(h.event.startDate).format("YYYY-MM-DD"),k=N(h.event.endDate).format("YYYY-MM-DD"),j=S!==k,Q=j?`${N(h.event.startDate).format("MMM D")}, ${Se(h.event.startDate,u)}`:Se(h.event.startDate,u),I=j?`${N(h.event.endDate).format("MMM D")}, ${Se(h.event.endDate,u)}`:Se(h.event.endDate,u),$=N(h.event.startDate).format("MMM D"),T=Math.floor(h.timeGap/(1e3*60*60)),H=Math.floor(h.timeGap%(1e3*60*60)/(1e3*60)),P=T>0?`${T}h ${H}m`:`${H}m`,O=h.position==="after",W=h.position==="before";return i.jsxs(In,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(Yn,{style:{color:"#1B5E20"},children:[h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(vt,{children:[!j&&`${$}: `,O?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:Q}):Q," ",c.conflicts.to," ",W?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:I}):I]}),i.jsxs(po,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[P," ",h.position==="before"?c.conflicts.before:c.conflicts.after]})]},_)})]})]})})(),i.jsx(Pl,{$isAnimating:L,$animateToX:C==null?void 0:C.x,$animateToY:C==null?void 0:C.y,style:{left:L?`${(C==null?void 0:C.x)??0}px`:"0",top:L?`${(C==null?void 0:C.y)??0}px`:"0",transform:L?void 0:`translate3d(${l?E:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:z},children:i.jsx(Ol,{children:i.jsxs(Yl,{children:[i.jsx(co,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(co,{children:e.subtitle}),e.description&&i.jsx(Il,{children:e.description})]})})})]})},Wl=Be`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,jl=b.div`
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
  animation: ${Wl} 1.5s ease-in-out infinite;
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
`,Zl=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(jl,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Vl=Be`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Gl=b.div`
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
  animation: ${Vl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,Xl=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Ul=b.span`
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
`,Kl=b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Jl=b.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;b.div`
  display: none;
`,b.div`
  display: none;
`,b.button`
  display: none;
`;const ql=b.div`
  display: flex;
  gap: 8px;
`,go=b.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;

  ${({variant:e,$hasConflicts:r})=>e==="primary"?`
    background: white;
    color: ${r?"#b45309":"#15803d"};
    border: none;
    
    &:hover {
      background: ${r?"#fef3c7":"#f0fdf4"};
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
`,Ql=({selections:e,onConfirm:r,onClear:t})=>{var w;const o=qe().multiSelect,s=p.useMemo(()=>e.filter(E=>E.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",f=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",u=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((w=o==null?void 0:o.conflictsWarning)==null?void 0:w.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const x=s>0,C=i.jsxs(Gl,{$hasConflicts:x,"data-multi-select-ui":!0,children:[i.jsxs(Xl,{children:[i.jsxs(Ul,{$hasConflicts:x,children:[e.length," ",a]}),x&&i.jsxs(Kl,{children:["⚠️ ",u]}),i.jsx(Jl,{children:l})]}),i.jsxs(ql,{children:[i.jsxs(go,{variant:"secondary",onClick:t,children:["✕ ",d]}),i.jsx(go,{variant:"primary",$hasConflicts:x,onClick:r,children:x?`⚠️ ${f}`:`✓ ${c}`})]})]});return vo.createPortal(C,document.body)},Rl=Be`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,ed=b.div`
  position: absolute;
  background: ${({$hasConflict:e,$isDragging:r})=>r?e?"rgba(245, 158, 11, 0.4)":"rgba(34, 197, 94, 0.4)":e?"rgba(245, 158, 11, 0.2)":"rgba(34, 197, 94, 0.2)"};
  border: 2px solid ${({$hasConflict:e})=>e?"#f59e0b":"#22c55e"};
  border-radius: 4px;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  box-sizing: border-box;
  animation: ${Rl} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&tt`
      border-style: dashed;
    `}
`,td=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,nd=b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,rd=b.button`
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
`,od=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,d]=p.useState(null),[c,f]=p.useState({x:0,y:0}),u=p.useRef(null),x=p.useMemo(()=>{switch(t){case 0:return Le*7;case 1:return Me;case 2:return Ee;default:return Me}},[t]),C=p.useMemo(()=>N().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),w=p.useMemo(()=>e.map((m,h)=>{let _=0,S=!1;for(const O of r){if(O.id===m.resourceId){S=!0;break}_+=Math.max(O.data.length,1)}if(!S)return null;const k=N(m.startDate),j=N(m.endDate);let Q,I;switch(t){case 0:Q=Math.floor(k.diff(C,"days")/7),I=Math.max(1,Math.ceil(j.diff(k,"days")/7)+1);break;case 1:Q=k.diff(C,"days"),I=Math.max(1,j.diff(k,"days")+1);break;case 2:Q=k.diff(C,"hours"),I=Math.max(1,j.diff(k,"hours")+1);break;default:Q=0,I=1}const $=Q*x;let T=0;for(const O of a)O<=_&&T++;const H=_*he+T*Oe,P=I*x;return{index:h,selection:m,x:$,y:H,width:P,height:he}}),[e,r,t,C,x]),E=(m,h)=>{const _=N(m).format("MMM D"),S=N(h).format("MMM D");return _===S?_:`${_} - ${S}`},v=m=>!m.hasConflict||!m.conflicts?"":`⚠️ Conflicts with:
${m.conflicts.map(_=>{const S=(_.overlapDuration/36e5).toFixed(1);return`• ${_.event.title} (${S}h overlap)`}).join(`
`)}`,Y=p.useCallback(m=>{let h=0;for(const _ of r){const S=Math.max(_.data.length,1);if(m>=h*he&&m<(h+S)*he)return{resourceId:_.id,resourceLabel:_.label};h+=S}return null},[r]),J=p.useCallback(m=>{const h=Math.floor(m/x);switch(t){case 0:return C.add(h*7,"days").toDate();case 1:return C.add(h,"days").toDate();case 2:return C.add(h,"hours").toDate();default:return C.toDate()}},[t,C,x]),L=p.useCallback((m,h)=>{!s||(m.preventDefault(),m.stopPropagation(),!w[h])||(u.current={x:m.clientX,y:m.clientY},d(h),f({x:0,y:0}))},[s,w]),z=p.useCallback(m=>{if(l===null||!u.current)return;const h=m.clientX-u.current.x,_=m.clientY-u.current.y,S=Math.round(h/x)*x,k=Math.round(_/he)*he;f({x:S,y:k})},[l,x]),y=p.useCallback(()=>{if(l===null||!s){d(null),f({x:0,y:0}),u.current=null;return}const m=w[l];if(!m){d(null),f({x:0,y:0}),u.current=null;return}const h=m.x+c.x,_=m.y+c.y,S=Y(_+he/2);if(!S){d(null),f({x:0,y:0}),u.current=null;return}const k=J(h),j=e[l],Q=j.endDate.getTime()-j.startDate.getTime(),I=new Date(k.getTime()+Q);s(l,{startDate:k,endDate:I,resourceId:S.resourceId,resourceLabel:S.resourceLabel}),d(null),f({x:0,y:0}),u.current=null},[l,c,w,e,s,Y,J]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",z),document.addEventListener("mouseup",y),()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",y)}},[l,z,y]),i.jsx(i.Fragment,{children:w.map(m=>{if(!m)return null;const h=m.selection.hasConflict||!1,_=l===m.index,S=_?m.x+c.x:m.x,k=_?m.y+c.y:m.y;return i.jsxs(ed,{$hasConflict:h,$isDragging:_,style:{left:S,top:k,width:m.width,height:m.height},"data-multi-select-ui":!0,onMouseDown:j=>L(j,m.index),children:[h&&i.jsx(nd,{title:v(m.selection),children:"⚠️"}),i.jsx(td,{$hasConflict:h,children:E(m.selection.startDate,m.selection.endDate)}),i.jsx(rd,{onClick:j=>{j.stopPropagation(),o(m.index)},onMouseDown:j=>j.stopPropagation(),title:h?"Remove conflicting selection":"Remove selection",children:"×"})]},m.index)})})},mo=(e,r,t,n)=>{if(r===2)return null;const o=r===0?Le*7:Me,s=N().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"),a=e.startOf("day"),l=r===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=n?null:{x:l*o,width:o}},sd=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,id=({zoom:e,startDate:r})=>{const{cols:t}=He(),n=p.useMemo(()=>mo(N(),e,r,t),[e,r,t]);return n?i.jsx(sd,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},Ln="#2f6fed",ad=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${Ln};
  border-right: 1px solid ${Ln}55;
  background: ${Ln}1c;
`,cd=({zoom:e,startDate:r})=>{const{cols:t,jumpDate:n}=He(),o=p.useMemo(()=>!n||n.isSame(N(),"day")?null:mo(n,e,r,t),[n,e,r,t]);return o?i.jsx(ad,{style:{left:`${o.x}px`,width:`${o.width}px`},"aria-hidden":!0}):null},Hd="";Ae.Scheduler=Ia,Object.defineProperty(Ae,Symbol.toStringTag,{value:"Module"})});
