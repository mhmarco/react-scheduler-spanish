(function(Ie,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Ie=typeof globalThis<"u"?globalThis:Ie||self,i(Ie["react-scheduler"]={},Ie["react/jsx-runtime"],Ie.React,Ie.ReactDOM))})(this,function(Ie,i,h,ko){"use strict";var Sd=Object.defineProperty;var Cd=(Ie,i,h)=>i in Ie?Sd(Ie,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):Ie[i]=h;var Co=(Ie,i,h)=>(Cd(Ie,typeof i!="symbol"?i+"":i,h),h);function Mo(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const oe=Mo(h);var _e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mt={},$o={get exports(){return Mt},set exports(e){Mt=e}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wn;function Do(){if(Wn)return me;Wn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function $(y){if(typeof y=="object"&&y!==null){var I=y.$$typeof;switch(I){case e:switch(y=y.type,y){case t:case o:case n:case c:case d:return y;default:switch(y=y&&y.$$typeof,y){case l:case a:case u:case v:case f:case s:return y;default:return I}}case r:return I}}}return me.ContextConsumer=a,me.ContextProvider=s,me.Element=e,me.ForwardRef=u,me.Fragment=t,me.Lazy=v,me.Memo=f,me.Portal=r,me.Profiler=o,me.StrictMode=n,me.Suspense=c,me.SuspenseList=d,me.isAsyncMode=function(){return!1},me.isConcurrentMode=function(){return!1},me.isContextConsumer=function(y){return $(y)===a},me.isContextProvider=function(y){return $(y)===s},me.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===e},me.isForwardRef=function(y){return $(y)===u},me.isFragment=function(y){return $(y)===t},me.isLazy=function(y){return $(y)===v},me.isMemo=function(y){return $(y)===f},me.isPortal=function(y){return $(y)===r},me.isProfiler=function(y){return $(y)===o},me.isStrictMode=function(y){return $(y)===n},me.isSuspense=function(y){return $(y)===c},me.isSuspenseList=function(y){return $(y)===d},me.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===t||y===o||y===n||y===c||y===d||y===k||typeof y=="object"&&y!==null&&(y.$$typeof===v||y.$$typeof===f||y.$$typeof===s||y.$$typeof===a||y.$$typeof===u||y.$$typeof===b||y.getModuleId!==void 0)},me.typeOf=$,me}var ye={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jn;function Eo(){return jn||(jn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),b=!1,$=!1,y=!1,I=!1,X=!1,Z;Z=Symbol.for("react.module.reference");function W(D){return!!(typeof D=="string"||typeof D=="function"||D===t||D===o||X||D===n||D===c||D===d||I||D===k||b||$||y||typeof D=="object"&&D!==null&&(D.$$typeof===v||D.$$typeof===f||D.$$typeof===s||D.$$typeof===a||D.$$typeof===u||D.$$typeof===Z||D.getModuleId!==void 0))}function p(D){if(typeof D=="object"&&D!==null){var G=D.$$typeof;switch(G){case e:var ne=D.type;switch(ne){case t:case o:case n:case c:case d:return ne;default:var q=ne&&ne.$$typeof;switch(q){case l:case a:case u:case v:case f:case s:return q;default:return G}}case r:return G}}}var g=a,w=s,_=e,C=u,S=t,j=v,K=f,L=r,A=o,P=n,N=c,E=d,Y=!1,z=!1;function re(D){return Y||(Y=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ee(D){return z||(z=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function B(D){return p(D)===a}function F(D){return p(D)===s}function Q(D){return typeof D=="object"&&D!==null&&D.$$typeof===e}function te(D){return p(D)===u}function M(D){return p(D)===t}function U(D){return p(D)===v}function T(D){return p(D)===f}function R(D){return p(D)===r}function V(D){return p(D)===o}function H(D){return p(D)===n}function m(D){return p(D)===c}function J(D){return p(D)===d}ye.ContextConsumer=g,ye.ContextProvider=w,ye.Element=_,ye.ForwardRef=C,ye.Fragment=S,ye.Lazy=j,ye.Memo=K,ye.Portal=L,ye.Profiler=A,ye.StrictMode=P,ye.Suspense=N,ye.SuspenseList=E,ye.isAsyncMode=re,ye.isConcurrentMode=ee,ye.isContextConsumer=B,ye.isContextProvider=F,ye.isElement=Q,ye.isForwardRef=te,ye.isFragment=M,ye.isLazy=U,ye.isMemo=T,ye.isPortal=R,ye.isProfiler=V,ye.isStrictMode=H,ye.isSuspense=m,ye.isSuspenseList=J,ye.isValidElementType=W,ye.typeOf=p}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=Do():e.exports=Eo()})($o);function _o(e){function r(B,F,Q,te,M){for(var U=0,T=0,R=0,V=0,H,m,J=0,D=0,G,ne=G=H=0,q=0,ce=0,ue=0,de=0,pe=Q.length,we=pe-1,be,se="",fe="",$e="",Be="",De;q<pe;){if(m=Q.charCodeAt(q),q===we&&T+V+R+U!==0&&(T!==0&&(m=T===47?10:47),V=R=U=0,pe++,we++),T+V+R+U===0){if(q===we&&(0<ce&&(se=se.replace(v,"")),0<se.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:se+=Q.charAt(q)}m=59}switch(m){case 123:for(se=se.trim(),H=se.charCodeAt(0),G=1,de=++q;q<pe;){switch(m=Q.charCodeAt(q)){case 123:G++;break;case 125:G--;break;case 47:switch(m=Q.charCodeAt(q+1)){case 42:case 47:e:{for(ne=q+1;ne<we;++ne)switch(Q.charCodeAt(ne)){case 47:if(m===42&&Q.charCodeAt(ne-1)===42&&q+2!==ne){q=ne+1;break e}break;case 10:if(m===47){q=ne+1;break e}}q=ne}}break;case 91:m++;case 40:m++;case 34:case 39:for(;q++<we&&Q.charCodeAt(q)!==m;);}if(G===0)break;q++}switch(G=Q.substring(de,q),H===0&&(H=(se=se.replace(f,"").trim()).charCodeAt(0)),H){case 64:switch(0<ce&&(se=se.replace(v,"")),m=se.charCodeAt(1),m){case 100:case 109:case 115:case 45:ce=F;break;default:ce=N}if(G=r(F,ce,G,m,M+1),de=G.length,0<Y&&(ce=t(N,se,ue),De=l(3,G,ce,F,L,K,de,m,M,te),se=ce.join(""),De!==void 0&&(de=(G=De.trim()).length)===0&&(m=0,G="")),0<de)switch(m){case 115:se=se.replace(g,a);case 100:case 109:case 45:G=se+"{"+G+"}";break;case 107:se=se.replace(X,"$1 $2"),G=se+"{"+G+"}",G=P===1||P===2&&s("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=se+G,te===112&&(G=(fe+=G,""))}else G="";break;default:G=r(F,t(F,se,ue),G,te,M+1)}$e+=G,G=ue=ce=ne=H=0,se="",m=Q.charCodeAt(++q);break;case 125:case 59:if(se=(0<ce?se.replace(v,""):se).trim(),1<(de=se.length))switch(ne===0&&(H=se.charCodeAt(0),H===45||96<H&&123>H)&&(de=(se=se.replace(" ",":")).length),0<Y&&(De=l(1,se,F,B,L,K,fe.length,te,M,te))!==void 0&&(de=(se=De.trim()).length)===0&&(se="\0\0"),H=se.charCodeAt(0),m=se.charCodeAt(1),H){case 0:break;case 64:if(m===105||m===99){Be+=se+Q.charAt(q);break}default:se.charCodeAt(de-1)!==58&&(fe+=o(se,H,m,se.charCodeAt(2)))}ue=ce=ne=H=0,se="",m=Q.charCodeAt(++q)}}switch(m){case 13:case 10:T===47?T=0:1+H===0&&te!==107&&0<se.length&&(ce=1,se+="\0"),0<Y*re&&l(0,se,F,B,L,K,fe.length,te,M,te),K=1,L++;break;case 59:case 125:if(T+V+R+U===0){K++;break}default:switch(K++,be=Q.charAt(q),m){case 9:case 32:if(V+U+T===0)switch(J){case 44:case 58:case 9:case 32:be="";break;default:m!==32&&(be=" ")}break;case 0:be="\\0";break;case 12:be="\\f";break;case 11:be="\\v";break;case 38:V+T+U===0&&(ce=ue=1,be="\f"+be);break;case 108:if(V+T+U+A===0&&0<ne)switch(q-ne){case 2:J===112&&Q.charCodeAt(q-3)===58&&(A=J);case 8:D===111&&(A=D)}break;case 58:V+T+U===0&&(ne=q);break;case 44:T+R+V+U===0&&(ce=1,be+="\r");break;case 34:case 39:T===0&&(V=V===m?0:V===0?m:V);break;case 91:V+T+R===0&&U++;break;case 93:V+T+R===0&&U--;break;case 41:V+T+U===0&&R--;break;case 40:if(V+T+U===0){if(H===0)switch(2*J+3*D){case 533:break;default:H=1}R++}break;case 64:T+R+V+U+ne+G===0&&(G=1);break;case 42:case 47:if(!(0<V+U+R))switch(T){case 0:switch(2*m+3*Q.charCodeAt(q+1)){case 235:T=47;break;case 220:de=q,T=42}break;case 42:m===47&&J===42&&de+2!==q&&(Q.charCodeAt(de+2)===33&&(fe+=Q.substring(de,q+1)),be="",T=0)}}T===0&&(se+=be)}D=J,J=m,q++}if(de=fe.length,0<de){if(ce=F,0<Y&&(De=l(2,fe,ce,B,L,K,de,te,M,te),De!==void 0&&(fe=De).length===0))return Be+fe+$e;if(fe=ce.join(",")+"{"+fe+"}",P*A!==0){switch(P!==2||s(fe,2)||(A=0),A){case 111:fe=fe.replace(W,":-moz-$1")+fe;break;case 112:fe=fe.replace(Z,"::-webkit-input-$1")+fe.replace(Z,"::-moz-$1")+fe.replace(Z,":-ms-input-$1")+fe}A=0}}return Be+fe+$e}function t(B,F,Q){var te=F.trim().split(y);F=te;var M=te.length,U=B.length;switch(U){case 0:case 1:var T=0;for(B=U===0?"":B[0]+" ";T<M;++T)F[T]=n(B,F[T],Q).trim();break;default:var R=T=0;for(F=[];T<M;++T)for(var V=0;V<U;++V)F[R++]=n(B[V]+" ",te[T],Q).trim()}return F}function n(B,F,Q){var te=F.charCodeAt(0);switch(33>te&&(te=(F=F.trim()).charCodeAt(0)),te){case 38:return F.replace(I,"$1"+B.trim());case 58:return B.trim()+F.replace(I,"$1"+B.trim());default:if(0<1*Q&&0<F.indexOf("\f"))return F.replace(I,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+F}function o(B,F,Q,te){var M=B+";",U=2*F+3*Q+4*te;if(U===944){B=M.indexOf(":",9)+1;var T=M.substring(B,M.length-1).trim();return T=M.substring(0,B).trim()+T+";",P===1||P===2&&s(T,1)?"-webkit-"+T+T:T}if(P===0||P===2&&!s(M,1))return M;switch(U){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(j,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return T=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+M+"-ms-flex-pack"+T+M;case 1005:return b.test(M)?M.replace(k,":-webkit-")+M.replace(k,":-moz-")+M:M;case 1e3:switch(T=M.substring(13).trim(),F=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(F)){case 226:T=M.replace(p,"tb");break;case 232:T=M.replace(p,"tb-rl");break;case 220:T=M.replace(p,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+T+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(F=(M=B).length-10,T=(M.charCodeAt(F)===33?M.substring(0,F):M).substring(B.indexOf(":",7)+1).trim(),U=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:M=M.replace(T,"-webkit-"+T)+";"+M;break;case 207:case 102:M=M.replace(T,"-webkit-"+(102<U?"inline-":"")+"box")+";"+M.replace(T,"-webkit-"+T)+";"+M.replace(T,"-ms-"+T+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return T=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+T+"-ms-flex-"+T+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(_,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(_,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(S.test(B)===!0)return(T=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?o(B.replace("stretch","fill-available"),F,Q,te).replace(":fill-available",":stretch"):M.replace(T,"-webkit-"+T)+M.replace(T,"-moz-"+T.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,Q+te===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace($,"$1-webkit-$2")+M}return M}function s(B,F){var Q=B.indexOf(F===1?":":"{"),te=B.substring(0,F!==3?Q:10);return Q=B.substring(Q+1,B.length-1),z(F!==2?te:te.replace(C,"$1"),Q,F)}function a(B,F){var Q=o(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return Q!==F+";"?Q.replace(w," or ($1)").substring(4):"("+F+")"}function l(B,F,Q,te,M,U,T,R,V,H){for(var m=0,J=F,D;m<Y;++m)switch(D=E[m].call(d,B,J,Q,te,M,U,T,R,V,H)){case void 0:case!1:case!0:case null:break;default:J=D}if(J!==F)return J}function u(B){switch(B){case void 0:case null:Y=E.length=0;break;default:if(typeof B=="function")E[Y++]=B;else if(typeof B=="object")for(var F=0,Q=B.length;F<Q;++F)u(B[F]);else re=!!B|0}return u}function c(B){return B=B.prefix,B!==void 0&&(z=null,B?typeof B!="function"?P=1:(P=2,z=B):P=0),c}function d(B,F){var Q=B;if(33>Q.charCodeAt(0)&&(Q=Q.trim()),ee=Q,Q=[ee],0<Y){var te=l(-1,F,Q,Q,L,K,0,0,0,0);te!==void 0&&typeof te=="string"&&(F=te)}var M=r(N,Q,F,0,0);return 0<Y&&(te=l(-2,M,Q,Q,L,K,M.length,0,0,0),te!==void 0&&(M=te)),ee="",A=0,K=L=1,M}var f=/^\0+/g,v=/[\0\r\f]/g,k=/: */g,b=/zoo|gra/,$=/([,: ])(transform)/g,y=/,\r+?/g,I=/([\t\r\n ])*\f?&/g,X=/@(k\w+)\s*(\S*)\s*/,Z=/::(place)/g,W=/:(read-only)/g,p=/[svh]\w+-[tblr]{2}/,g=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,_=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,K=1,L=1,A=0,P=1,N=[],E=[],Y=0,z=null,re=0,ee="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var To={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ao(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Po=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Zn=Ao(function(e){return Po.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Qt={},Oo={get exports(){return Qt},set exports(e){Qt=e}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vn;function Io(){if(Vn)return ve;Vn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,k=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,$=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,I=e?Symbol.for("react.responder"):60118,X=e?Symbol.for("react.scope"):60119;function Z(p){if(typeof p=="object"&&p!==null){var g=p.$$typeof;switch(g){case r:switch(p=p.type,p){case u:case c:case n:case s:case o:case f:return p;default:switch(p=p&&p.$$typeof,p){case l:case d:case b:case k:case a:return p;default:return g}}case t:return g}}}function W(p){return Z(p)===c}return ve.AsyncMode=u,ve.ConcurrentMode=c,ve.ContextConsumer=l,ve.ContextProvider=a,ve.Element=r,ve.ForwardRef=d,ve.Fragment=n,ve.Lazy=b,ve.Memo=k,ve.Portal=t,ve.Profiler=s,ve.StrictMode=o,ve.Suspense=f,ve.isAsyncMode=function(p){return W(p)||Z(p)===u},ve.isConcurrentMode=W,ve.isContextConsumer=function(p){return Z(p)===l},ve.isContextProvider=function(p){return Z(p)===a},ve.isElement=function(p){return typeof p=="object"&&p!==null&&p.$$typeof===r},ve.isForwardRef=function(p){return Z(p)===d},ve.isFragment=function(p){return Z(p)===n},ve.isLazy=function(p){return Z(p)===b},ve.isMemo=function(p){return Z(p)===k},ve.isPortal=function(p){return Z(p)===t},ve.isProfiler=function(p){return Z(p)===s},ve.isStrictMode=function(p){return Z(p)===o},ve.isSuspense=function(p){return Z(p)===f},ve.isValidElementType=function(p){return typeof p=="string"||typeof p=="function"||p===n||p===c||p===s||p===o||p===f||p===v||typeof p=="object"&&p!==null&&(p.$$typeof===b||p.$$typeof===k||p.$$typeof===a||p.$$typeof===l||p.$$typeof===d||p.$$typeof===y||p.$$typeof===I||p.$$typeof===X||p.$$typeof===$)},ve.typeOf=Z,ve}var xe={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn;function Lo(){return Gn||(Gn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,k=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,$=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,I=e?Symbol.for("react.responder"):60118,X=e?Symbol.for("react.scope"):60119;function Z(m){return typeof m=="string"||typeof m=="function"||m===n||m===c||m===s||m===o||m===f||m===v||typeof m=="object"&&m!==null&&(m.$$typeof===b||m.$$typeof===k||m.$$typeof===a||m.$$typeof===l||m.$$typeof===d||m.$$typeof===y||m.$$typeof===I||m.$$typeof===X||m.$$typeof===$)}function W(m){if(typeof m=="object"&&m!==null){var J=m.$$typeof;switch(J){case r:var D=m.type;switch(D){case u:case c:case n:case s:case o:case f:return D;default:var G=D&&D.$$typeof;switch(G){case l:case d:case b:case k:case a:return G;default:return J}}case t:return J}}}var p=u,g=c,w=l,_=a,C=r,S=d,j=n,K=b,L=k,A=t,P=s,N=o,E=f,Y=!1;function z(m){return Y||(Y=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),re(m)||W(m)===u}function re(m){return W(m)===c}function ee(m){return W(m)===l}function B(m){return W(m)===a}function F(m){return typeof m=="object"&&m!==null&&m.$$typeof===r}function Q(m){return W(m)===d}function te(m){return W(m)===n}function M(m){return W(m)===b}function U(m){return W(m)===k}function T(m){return W(m)===t}function R(m){return W(m)===s}function V(m){return W(m)===o}function H(m){return W(m)===f}xe.AsyncMode=p,xe.ConcurrentMode=g,xe.ContextConsumer=w,xe.ContextProvider=_,xe.Element=C,xe.ForwardRef=S,xe.Fragment=j,xe.Lazy=K,xe.Memo=L,xe.Portal=A,xe.Profiler=P,xe.StrictMode=N,xe.Suspense=E,xe.isAsyncMode=z,xe.isConcurrentMode=re,xe.isContextConsumer=ee,xe.isContextProvider=B,xe.isElement=F,xe.isForwardRef=Q,xe.isFragment=te,xe.isLazy=M,xe.isMemo=U,xe.isPortal=T,xe.isProfiler=R,xe.isStrictMode=V,xe.isSuspense=H,xe.isValidElementType=Z,xe.typeOf=W}()),xe}(function(e){process.env.NODE_ENV==="production"?e.exports=Io():e.exports=Lo()})(Oo);var Rt=Qt,Yo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},No={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Un={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},en={};en[Rt.ForwardRef]=Fo,en[Rt.Memo]=Un;function Xn(e){return Rt.isMemo(e)?Un:en[e.$$typeof]||Yo}var Bo=Object.defineProperty,zo=Object.getOwnPropertyNames,Kn=Object.getOwnPropertySymbols,Ho=Object.getOwnPropertyDescriptor,Wo=Object.getPrototypeOf,Jn=Object.prototype;function qn(e,r,t){if(typeof r!="string"){if(Jn){var n=Wo(r);n&&n!==Jn&&qn(e,n,t)}var o=zo(r);Kn&&(o=o.concat(Kn(r)));for(var s=Xn(e),a=Xn(r),l=0;l<o.length;++l){var u=o[l];if(!No[u]&&!(t&&t[u])&&!(a&&a[u])&&!(s&&s[u])){var c=Ho(r,u);try{Bo(e,u,c)}catch{}}}}return e}var jo=qn;function He(){return(He=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Qn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},tn=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Mt.typeOf(e)},It=Object.freeze([]),qe=Object.freeze({});function lt(e){return typeof e=="function"}function nn(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function rn(e){return e&&typeof e.styledComponentId=="string"}var dt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",on=typeof window<"u"&&"HTMLElement"in window,Zo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Vo={},Go=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function Uo(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ge(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(Uo.apply(void 0,[Go[e]].concat(t)).trim())}var Xo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&Ge(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),c=0,d=n.length;c<d;c++)this.tag.insertRule(u,n[c])&&(this.groupSizes[t]++,u++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),Lt=new Map,Yt=new Map,$t=1,Nt=function(e){if(Lt.has(e))return Lt.get(e);for(;Yt.has($t);)$t++;var r=$t++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Ge(16,""+r),Lt.set(e,r),Yt.set(r,e),r},Ko=function(e){return Yt.get(e)},Jo=function(e,r){r>=$t&&($t=r+1),Lt.set(e,r),Yt.set(r,e)},qo="style["+dt+'][data-styled-version="5.3.8"]',Qo=new RegExp("^"+dt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ro=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},es=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Qo);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Jo(c,u),Ro(e,c,l[3]),e.getTag().insertRules(u,n)),n.length=0}else n.push(a)}}},ts=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Rn=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var u=l.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(dt))return d}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(dt,"active"),n.setAttribute("data-styled-version","5.3.8");var a=ts();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},ns=function(){function e(t){var n=this.element=Rn(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var u=s[a];if(u.ownerNode===o)return u}Ge(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),rs=function(){function e(t){var n=this.element=Rn(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),os=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),er=on,ss={isServer:!on,useCSSOMInjection:!Zo},Ft=function(){function e(t,n,o){t===void 0&&(t=qe),n===void 0&&(n={}),this.options=He({},ss,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&on&&er&&(er=!1,function(s){for(var a=document.querySelectorAll(qo),l=0,u=a.length;l<u;l++){var c=a[l];c&&c.getAttribute(dt)!=="active"&&(es(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return Nt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(He({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new os(a):s?new ns(a):new rs(a),new Xo(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(Nt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(Nt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Nt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=Ko(a);if(l!==void 0){var u=t.names.get(l),c=n.getGroup(a);if(u&&c&&u.size){var d=dt+".g"+a+'[id="'+l+'"]',f="";u!==void 0&&u.forEach(function(v){v.length>0&&(f+=v+",")}),s+=""+c+d+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),is=/(a)(d)/gi,tr=function(e){return String.fromCharCode(e+(e>25?39:97))};function sn(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=tr(r%52)+t;return(tr(r%52)+t).replace(is,"$1-$2")}var nt=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},nr=function(e){return nt(5381,e)};function rr(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(lt(t)&&!rn(t))return!1}return!0}var as=nr("5.3.8"),cs=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&rr(r),this.componentId=t,this.baseHash=nt(as,t),this.baseStyle=n,Ft.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=rt(this.rules,r,t,n).join(""),l=sn(nt(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var u=n(a,"."+l,void 0,o);t.insertRules(o,l,u)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=nt(this.baseHash,n.hash),f="",v=0;v<c;v++){var k=this.rules[v];if(typeof k=="string")f+=k,process.env.NODE_ENV!=="production"&&(d=nt(d,k+v));else if(k){var b=rt(k,r,t,n),$=Array.isArray(b)?b.join(""):b;d=nt(d,$+v),f+=$}}if(f){var y=sn(d>>>0);if(!t.hasNameForId(o,y)){var I=n(f,"."+y,void 0,o);t.insertRules(o,y,I)}s.push(y)}}return s.join(" ")},e}(),ls=/^\s*\/\/.*$/gm,ds=[":","[",".","#"];function us(e){var r,t,n,o,s=e===void 0?qe:e,a=s.options,l=a===void 0?qe:a,u=s.plugins,c=u===void 0?It:u,d=new _o(l),f=[],v=function($){function y(I){if(I)try{$(I+"}")}catch{}}return function(I,X,Z,W,p,g,w,_,C,S){switch(I){case 1:if(C===0&&X.charCodeAt(0)===64)return $(X+";"),"";break;case 2:if(_===0)return X+"/*|*/";break;case 3:switch(_){case 102:case 112:return $(Z[0]+X),"";default:return X+(S===0?"/*|*/":"")}case-2:X.split("/*|*/}").forEach(y)}}}(function($){f.push($)}),k=function($,y,I){return y===0&&ds.indexOf(I[t.length])!==-1||I.match(o)?$:"."+r};function b($,y,I,X){X===void 0&&(X="&");var Z=$.replace(ls,""),W=y&&I?I+" "+y+" { "+Z+" }":Z;return r=X,t=y,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(I||!y?"":y,W)}return d.use([].concat(c,[function($,y,I){$===2&&I.length&&I[0].lastIndexOf(t)>0&&(I[0]=I[0].replace(n,k))},v,function($){if($===-2){var y=f;return f=[],y}}])),b.hash=c.length?c.reduce(function($,y){return y.name||Ge(15),nt($,y.name)},5381).toString():"",b}var or=h.createContext();or.Consumer;var sr=h.createContext(),fs=(sr.Consumer,new Ft),an=us();function ir(){return h.useContext(or)||fs}function ar(){return h.useContext(sr)||an}var cr=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=an);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return Ge(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=an),this.name+r.hash},e}(),hs=/([A-Z])/,ps=/([A-Z])/g,gs=/^ms-/,ms=function(e){return"-"+e.toLowerCase()};function lr(e){return hs.test(e)?e.replace(ps,ms).replace(gs,"-ms-"):e}var dr=function(e){return e==null||e===!1||e===""};function rt(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=rt(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(dr(e))return"";if(rn(e))return"."+e.styledComponentId;if(lt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var u=e(r);return process.env.NODE_ENV!=="production"&&Mt.isElement(u)&&console.warn(nn(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),rt(u,r,t,n)}var c;return e instanceof cr?t?(e.inject(t,n),e.getName(n)):e:tn(e)?function d(f,v){var k,b,$=[];for(var y in f)f.hasOwnProperty(y)&&!dr(f[y])&&(Array.isArray(f[y])&&f[y].isCss||lt(f[y])?$.push(lr(y)+":",f[y],";"):tn(f[y])?$.push.apply($,d(f[y],y)):$.push(lr(y)+": "+(k=y,(b=f[y])==null||typeof b=="boolean"||b===""?"":typeof b!="number"||b===0||k in To?String(b).trim():b+"px")+";"));return v?[v+" {"].concat($,["}"]):$}(e):e.toString()}var ur=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ot(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return lt(e)||tn(e)?ur(rt(Qn(It,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:ur(rt(Qn(e,t)))}var fr=/invalid hook call/i,Bt=new Set,hr=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(fr.test(s))o=!1,Bt.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),u=1;u<a;u++)l[u-1]=arguments[u];n.apply(void 0,[s].concat(l))}},h.useRef(),o&&!Bt.has(t)&&(console.warn(t),Bt.add(t))}catch(s){fr.test(s.message)&&Bt.delete(t)}finally{console.error=n}}},pr=function(e,r,t){return t===void 0&&(t=qe),e.theme!==t.theme&&e.theme||r||t.theme},ys=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vs=/(^-|-$)/g;function cn(e){return e.replace(ys,"-").replace(vs,"")}var ln=function(e){return sn(nr(e)>>>0)};function zt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var dn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},xs=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function bs(e,r,t){var n=e[t];dn(r)&&dn(n)?gr(n,r):e[t]=r}function gr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(dn(a))for(var l in a)xs(l)&&bs(e,a[l],l)}return e}var ut=h.createContext();ut.Consumer;function ws(e){var r=h.useContext(ut),t=h.useMemo(function(){return function(n,o){if(!n)return Ge(14);if(lt(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ge(7)}return Array.isArray(n)||typeof n!="object"?Ge(8):o?He({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?h.createElement(ut.Provider,{value:t},e.children):null}var un={};function mr(e,r,t){var n=rn(e),o=!zt(e),s=r.attrs,a=s===void 0?It:s,l=r.componentId,u=l===void 0?function(X,Z){var W=typeof X!="string"?"sc":cn(X);un[W]=(un[W]||0)+1;var p=W+"-"+ln("5.3.8"+W+un[W]);return Z?Z+"-"+p:p}(r.displayName,r.parentComponentId):l,c=r.displayName,d=c===void 0?function(X){return zt(X)?"styled."+X:"Styled("+nn(X)+")"}(e):c,f=r.displayName&&r.componentId?cn(r.displayName)+"-"+r.componentId:r.componentId||u,v=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,k=r.shouldForwardProp;n&&e.shouldForwardProp&&(k=r.shouldForwardProp?function(X,Z,W){return e.shouldForwardProp(X,Z,W)&&r.shouldForwardProp(X,Z,W)}:e.shouldForwardProp);var b,$=new cs(t,f,n?e.componentStyle:void 0),y=$.isStatic&&a.length===0,I=function(X,Z){return function(W,p,g,w){var _=W.attrs,C=W.componentStyle,S=W.defaultProps,j=W.foldedComponentIds,K=W.shouldForwardProp,L=W.styledComponentId,A=W.target;process.env.NODE_ENV!=="production"&&h.useDebugValue(L);var P=function(te,M,U){te===void 0&&(te=qe);var T=He({},M,{theme:te}),R={};return U.forEach(function(V){var H,m,J,D=V;for(H in lt(D)&&(D=D(T)),D)T[H]=R[H]=H==="className"?(m=R[H],J=D[H],m&&J?m+" "+J:m||J):D[H]}),[T,R]}(pr(p,h.useContext(ut),S)||qe,p,_),N=P[0],E=P[1],Y=function(te,M,U,T){var R=ir(),V=ar(),H=M?te.generateAndInjectStyles(qe,R,V):te.generateAndInjectStyles(U,R,V);return process.env.NODE_ENV!=="production"&&h.useDebugValue(H),process.env.NODE_ENV!=="production"&&!M&&T&&T(H),H}(C,w,N,process.env.NODE_ENV!=="production"?W.warnTooManyClasses:void 0),z=g,re=E.$as||p.$as||E.as||p.as||A,ee=zt(re),B=E!==p?He({},p,{},E):p,F={};for(var Q in B)Q[0]!=="$"&&Q!=="as"&&(Q==="forwardedAs"?F.as=B[Q]:(K?K(Q,Zn,re):!ee||Zn(Q))&&(F[Q]=B[Q]));return p.style&&E.style!==p.style&&(F.style=He({},p.style,{},E.style)),F.className=Array.prototype.concat(j,L,Y!==L?Y:null,p.className,E.className).filter(Boolean).join(" "),F.ref=z,h.createElement(re,F)}(b,X,Z,y)};return I.displayName=d,(b=h.forwardRef(I)).attrs=v,b.componentStyle=$,b.displayName=d,b.shouldForwardProp=k,b.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):It,b.styledComponentId=f,b.target=n?e.target:e,b.withComponent=function(X){var Z=r.componentId,W=function(g,w){if(g==null)return{};var _,C,S={},j=Object.keys(g);for(C=0;C<j.length;C++)_=j[C],w.indexOf(_)>=0||(S[_]=g[_]);return S}(r,["componentId"]),p=Z&&Z+"-"+(zt(X)?X:cn(nn(X)));return mr(X,He({},W,{attrs:v,componentId:p}),t)},Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=n?gr({},e.defaultProps,X):X}}),process.env.NODE_ENV!=="production"&&(hr(d,f),b.warnTooManyClasses=function(X,Z){var W={},p=!1;return function(g){if(!p&&(W[g]=!0,Object.keys(W).length>=200)){var w=Z?' with the id of "'+Z+'"':"";console.warn("Over 200 classes were generated for component "+X+w+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),p=!0,W={}}}}(d,f)),b.toString=function(){return"."+b.styledComponentId},o&&jo(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),b}var fn=function(e){return function r(t,n,o){if(o===void 0&&(o=qe),!Mt.isValidElementType(n))return Ge(1,String(n));var s=function(){return t(n,o,ot.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,He({},o,{},a))},s.attrs=function(a){return r(t,n,He({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(mr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){fn[e]=fn(e)});var Ss=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=rr(t),Ft.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(rt(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&Ft.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function Cs(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=ot.apply(void 0,[e].concat(t)),s="sc-global-"+ln(JSON.stringify(o)),a=new Ss(o,s);function l(c){var d=ir(),f=ar(),v=h.useContext(ut),k=h.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&h.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(b){return typeof b=="string"&&b.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(k,c,d,v,f),h.useLayoutEffect(function(){if(!d.server)return u(k,c,d,v,f),function(){return a.removeStyles(k,d)}},[k,c,d,v,f]),null}function u(c,d,f,v,k){if(a.isStatic)a.renderStyles(c,Vo,f,k);else{var b=He({},d,{theme:pr(d,v,l.defaultProps)});a.renderStyles(c,b,f,k)}}return process.env.NODE_ENV!=="production"&&hr(s),h.memo(l)}function Ye(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=ot.apply(void 0,[e].concat(t)).join(""),s=ln(o);return new cr(s,o)}var Ht=function(){return h.useContext(ut)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const x=fn;var st={},ks={get exports(){return st},set exports(e){st=e}};(function(e,r){(function(t,n){e.exports=n()})(_e,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",u="hour",c="day",d="week",f="month",v="quarter",k="year",b="date",$="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(L){var A=["th","st","nd","rd"],P=L%100;return"["+L+(A[(P-20)%10]||A[P]||A[0])+"]"}},Z=function(L,A,P){var N=String(L);return!N||N.length>=A?L:""+Array(A+1-N.length).join(P)+L},W={s:Z,z:function(L){var A=-L.utcOffset(),P=Math.abs(A),N=Math.floor(P/60),E=P%60;return(A<=0?"+":"-")+Z(N,2,"0")+":"+Z(E,2,"0")},m:function L(A,P){if(A.date()<P.date())return-L(P,A);var N=12*(P.year()-A.year())+(P.month()-A.month()),E=A.clone().add(N,f),Y=P-E<0,z=A.clone().add(N+(Y?-1:1),f);return+(-(N+(P-E)/(Y?E-z:z-E))||0)},a:function(L){return L<0?Math.ceil(L)||0:Math.floor(L)},p:function(L){return{M:f,y:k,w:d,d:c,D:b,h:u,m:l,s:a,ms:s,Q:v}[L]||String(L||"").toLowerCase().replace(/s$/,"")},u:function(L){return L===void 0}},p="en",g={};g[p]=X;var w=function(L){return L instanceof j},_=function L(A,P,N){var E;if(!A)return p;if(typeof A=="string"){var Y=A.toLowerCase();g[Y]&&(E=Y),P&&(g[Y]=P,E=Y);var z=A.split("-");if(!E&&z.length>1)return L(z[0])}else{var re=A.name;g[re]=A,E=re}return!N&&E&&(p=E),E||!N&&p},C=function(L,A){if(w(L))return L.clone();var P=typeof A=="object"?A:{};return P.date=L,P.args=arguments,new j(P)},S=W;S.l=_,S.i=w,S.w=function(L,A){return C(L,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var j=function(){function L(P){this.$L=_(P.locale,null,!0),this.parse(P)}var A=L.prototype;return A.parse=function(P){this.$d=function(N){var E=N.date,Y=N.utc;if(E===null)return new Date(NaN);if(S.u(E))return new Date;if(E instanceof Date)return new Date(E);if(typeof E=="string"&&!/Z$/i.test(E)){var z=E.match(y);if(z){var re=z[2]-1||0,ee=(z[7]||"0").substring(0,3);return Y?new Date(Date.UTC(z[1],re,z[3]||1,z[4]||0,z[5]||0,z[6]||0,ee)):new Date(z[1],re,z[3]||1,z[4]||0,z[5]||0,z[6]||0,ee)}}return new Date(E)}(P),this.$x=P.x||{},this.init()},A.init=function(){var P=this.$d;this.$y=P.getFullYear(),this.$M=P.getMonth(),this.$D=P.getDate(),this.$W=P.getDay(),this.$H=P.getHours(),this.$m=P.getMinutes(),this.$s=P.getSeconds(),this.$ms=P.getMilliseconds()},A.$utils=function(){return S},A.isValid=function(){return this.$d.toString()!==$},A.isSame=function(P,N){var E=C(P);return this.startOf(N)<=E&&E<=this.endOf(N)},A.isAfter=function(P,N){return C(P)<this.startOf(N)},A.isBefore=function(P,N){return this.endOf(N)<C(P)},A.$g=function(P,N,E){return S.u(P)?this[N]:this.set(E,P)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(P,N){var E=this,Y=!!S.u(N)||N,z=S.p(P),re=function(T,R){var V=S.w(E.$u?Date.UTC(E.$y,R,T):new Date(E.$y,R,T),E);return Y?V:V.endOf(c)},ee=function(T,R){return S.w(E.toDate()[T].apply(E.toDate("s"),(Y?[0,0,0,0]:[23,59,59,999]).slice(R)),E)},B=this.$W,F=this.$M,Q=this.$D,te="set"+(this.$u?"UTC":"");switch(z){case k:return Y?re(1,0):re(31,11);case f:return Y?re(1,F):re(0,F+1);case d:var M=this.$locale().weekStart||0,U=(B<M?B+7:B)-M;return re(Y?Q-U:Q+(6-U),F);case c:case b:return ee(te+"Hours",0);case u:return ee(te+"Minutes",1);case l:return ee(te+"Seconds",2);case a:return ee(te+"Milliseconds",3);default:return this.clone()}},A.endOf=function(P){return this.startOf(P,!1)},A.$set=function(P,N){var E,Y=S.p(P),z="set"+(this.$u?"UTC":""),re=(E={},E[c]=z+"Date",E[b]=z+"Date",E[f]=z+"Month",E[k]=z+"FullYear",E[u]=z+"Hours",E[l]=z+"Minutes",E[a]=z+"Seconds",E[s]=z+"Milliseconds",E)[Y],ee=Y===c?this.$D+(N-this.$W):N;if(Y===f||Y===k){var B=this.clone().set(b,1);B.$d[re](ee),B.init(),this.$d=B.set(b,Math.min(this.$D,B.daysInMonth())).$d}else re&&this.$d[re](ee);return this.init(),this},A.set=function(P,N){return this.clone().$set(P,N)},A.get=function(P){return this[S.p(P)]()},A.add=function(P,N){var E,Y=this;P=Number(P);var z=S.p(N),re=function(F){var Q=C(Y);return S.w(Q.date(Q.date()+Math.round(F*P)),Y)};if(z===f)return this.set(f,this.$M+P);if(z===k)return this.set(k,this.$y+P);if(z===c)return re(1);if(z===d)return re(7);var ee=(E={},E[l]=n,E[u]=o,E[a]=t,E)[z]||1,B=this.$d.getTime()+P*ee;return S.w(B,this)},A.subtract=function(P,N){return this.add(-1*P,N)},A.format=function(P){var N=this,E=this.$locale();if(!this.isValid())return E.invalidDate||$;var Y=P||"YYYY-MM-DDTHH:mm:ssZ",z=S.z(this),re=this.$H,ee=this.$m,B=this.$M,F=E.weekdays,Q=E.months,te=function(R,V,H,m){return R&&(R[V]||R(N,Y))||H[V].slice(0,m)},M=function(R){return S.s(re%12||12,R,"0")},U=E.meridiem||function(R,V,H){var m=R<12?"AM":"PM";return H?m.toLowerCase():m},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:B+1,MM:S.s(B+1,2,"0"),MMM:te(E.monthsShort,B,Q,3),MMMM:te(Q,B),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:te(E.weekdaysMin,this.$W,F,2),ddd:te(E.weekdaysShort,this.$W,F,3),dddd:F[this.$W],H:String(re),HH:S.s(re,2,"0"),h:M(1),hh:M(2),a:U(re,ee,!0),A:U(re,ee,!1),m:String(ee),mm:S.s(ee,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:z};return Y.replace(I,function(R,V){return V||T[R]||z.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(P,N,E){var Y,z=S.p(N),re=C(P),ee=(re.utcOffset()-this.utcOffset())*n,B=this-re,F=S.m(this,re);return F=(Y={},Y[k]=F/12,Y[f]=F,Y[v]=F/3,Y[d]=(B-ee)/6048e5,Y[c]=(B-ee)/864e5,Y[u]=B/o,Y[l]=B/n,Y[a]=B/t,Y)[z]||B,E?F:S.a(F)},A.daysInMonth=function(){return this.endOf(f).$D},A.$locale=function(){return g[this.$L]},A.locale=function(P,N){if(!P)return this.$L;var E=this.clone(),Y=_(P,N,!0);return Y&&(E.$L=Y),E},A.clone=function(){return S.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},L}(),K=j.prototype;return C.prototype=K,[["$ms",s],["$s",a],["$m",l],["$H",u],["$W",c],["$M",f],["$y",k],["$D",b]].forEach(function(L){K[L[1]]=function(A){return this.$g(A,L[0],L[1])}}),C.extend=function(L,A){return L.$i||(L(A,j,C),L.$i=!0),C},C.locale=_,C.isDayjs=w,C.unix=function(L){return C(1e3*L)},C.en=g[p],C.Ls=g,C.p={},C})})(ks);const O=st,Dt="reactSchedulerOutsideWrapper",Ne="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",Ms=Cs`

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
`,$s={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E",unassignedBorder:"#F59E0B",unassignedText:"#92400E"}},Ds={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D",unassignedBorder:"#D97706",unassignedText:"#FCD34D"}},ft=`
margin: 0;
padding: 0;
`,it=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;x.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const Ce=50,je=24,at=16,ht=40,Wt=ht+at+je,pt=84,he=56,Pe=196,ze=12,Te=50,gt=24,Et=16,hn=40,Es=gt+Et+hn,yr=24,vr=52,Qe={topRow:`600 14px ${Ne}`,middleRow:`400 10px ${Ne}`,bottomRow:{name:`600 14px ${Ne}`,number:`600 10px ${Ne}`,hoursInDay:`400 9px ${Ne}`}},mt=3,xr=12,jt=24,br="reactSchedulerCanvasHeaderWrapper",wr="reactSchedulerCanvasWrapper",Ue=Dt,_s=4,Zt=48,Re=5,Ts=40,Sr=8,pn=je/2+2,Cr=at/2+je+1,kr=2,Me=60,Le=21,Mr=58,$r="reactSchedulerBody",Dr=e=>e%4===0&&e%100>0||e%400===0?366:365,gn=e=>{const r=e.day();return r!==0&&r!==6},Er=(e,r)=>O(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),_r=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:gn(e),isCurrentDay:e.isSame(O(),"day"),year:parseInt(e.format("YYYY"))}),mn=(e,r,t,n,o,s,a,l=!1)=>{s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.mode==="dark"?a.colors.primary:"#F2F6F4",e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,he);const u=a.mode==="dark";e.strokeStyle=u?a.colors.border:"#EEF3F0",e.beginPath(),e.moveTo(r+n-.5,t),e.lineTo(r+n-.5,t+he),e.stroke(),e.strokeStyle=u?a.colors.border:"#E4EAE7",e.beginPath(),e.moveTo(r,t+.5),e.lineTo(r+n,t+.5),e.stroke(),l&&(e.strokeStyle=u?a.colors.today:"#5C8374",e.beginPath(),e.moveTo(r+.5,t),e.lineTo(r+.5,t+he),e.stroke())},yn=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Le},As=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=yn(a,s);for(let u=0;u<=t;u++){const c=O(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(u,"days"),d=c.isSame(O(),"day"),f=c.date()===1;mn(e,u*Ce,a*he+l,Ce,gn(c),d,o,f)}}},Ps=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},Os=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*ze;const u=r*he+s.length*Le;for(let c=0;c<=t;c++){const f=O(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(O(),"week");for(let v=0;v<r;v++){const k=yn(v,s);mn(e,a,v*he+k,pt,!0,f,o)}a+=pt}for(let c=0;c<t;c++){const d=Er(n,c)*ze;Ps(e,l,u,o),l+=d}},Is=(e,r,t,n,o,s=[])=>{const a=O(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const u=yn(l,s);for(let c=0;c<=t;c++){let d;c===Math.floor(t/2)?d=O():c>Math.floor(t/2)?d=O().add(c-Math.floor(t/2),"hours"):d=O().subtract(Math.floor(t/2)-l,"hours");const f=a.isSame(O(),"day")&&d.isSame(O(),"hour");mn(e,c*Te+Te/2-.5,l*he+u,Te,gn(d),f,o)}}},Ls=(e,r,t,n,o="group")=>{const s=t*he+r*Le,a=e.canvas.width;e.fillStyle=o==="subcontract"?n.colors.subcontractBorder+"40":o==="warning"?n.colors.unassignedBorder+"26":n.mode==="dark"?n.colors.primary+"80":"#E9EFEC",e.fillRect(0,s,a,Le)},Ys=(e,r,t,n,o,s,a=[],l=-1,u=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(wr)){switch(r){case 0:Os(e,t,n,o,s,a);break;case 1:As(e,t,n,o,s,a);break;case 2:Is(e,t,n,o,s,a);break}for(let d=0;d<a.length;d++){const f=d===l?"subcontract":d===u?"warning":"group";Ls(e,d,a[d],s,f)}if(r===1){const d=O(`${o.year}-${o.month+1}-${o.dayOfMonth}`),f=t*he+a.length*Le;e.strokeStyle=s.mode==="dark"?s.colors.today:"#5C8374",e.setLineDash([]);for(let v=0;v<=n;v++)if(d.add(v,"days").date()===1){const k=v*Ce+.5;e.beginPath(),e.moveTo(k,0),e.lineTo(k,f),e.stroke()}}}};var vn={},Ns={get exports(){return vn},set exports(e){vn=e}};(function(e,r){(function(t,n){e.exports=n()})(_e,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=a(this).startOf(n).add(1,n).date(c),f=a(this).endOf(t);if(d.isBefore(f))return 1}var v=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),k=this.diff(v,t,!0);return k<0?a(this).startOf("week").week():Math.ceil(k)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(Ns);const Fs=vn;var xn={},Bs={get exports(){return xn},set exports(e){xn=e}};(function(e,r){(function(t,n){e.exports=n()})(_e,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Bs);const zs=xn;var bn={},Hs={get exports(){return bn},set exports(e){bn=e}};(function(e,r){(function(t,n){e.exports=n()})(_e,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var d,f,v,k,b=a(this),$=(d=this.isoWeekYear(),f=this.$u,v=(f?s.utc:s)().year(d).startOf("year"),k=4-v.isoWeekday(),v.isoWeekday()>4&&(k+=7),v.add(k,t));return b.diff($,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var u=l.startOf;l.startOf=function(c,d){var f=this.$utils(),v=!!f.u(d)||d;return f.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(c,d)}}})})(Hs);const Ws=bn;var wn={},js={get exports(){return wn},set exports(e){wn=e}};(function(e,r){(function(t,n){e.exports=n()})(_e,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,u){var c=o(s),d=o(a),f=(u=u||"()")[0]==="(",v=u[1]===")";return(f?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(d,l):!this.isAfter(d,l))||(f?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(d,l):!this.isBefore(d,l))}}})})(js);const Zs=wn;var Sn={},Vs={get exports(){return Sn},set exports(e){Sn=e}};(function(e,r){(function(t,n){e.exports=n()})(_e,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,d=2592e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:d,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},k=function(p){return p instanceof W},b=function(p,g,w){return new W(p,w,g.$l)},$=function(p){return n.p(p)+"s"},y=function(p){return p<0},I=function(p){return y(p)?Math.ceil(p):Math.floor(p)},X=function(p){return Math.abs(p)},Z=function(p,g){return p?y(p)?{negative:!0,format:""+X(p)+g}:{negative:!1,format:""+p+g}:{negative:!1,format:""}},W=function(){function p(w,_,C){var S=this;if(this.$d={},this.$l=C,w===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return b(w*v[$(_)],this);if(typeof w=="number")return this.$ms=w,this.parseFromMilliseconds(),this;if(typeof w=="object")return Object.keys(w).forEach(function(L){S.$d[$(L)]=w[L]}),this.calMilliseconds(),this;if(typeof w=="string"){var j=w.match(f);if(j){var K=j.slice(2).map(function(L){return L!=null?Number(L):0});return this.$d.years=K[0],this.$d.months=K[1],this.$d.weeks=K[2],this.$d.days=K[3],this.$d.hours=K[4],this.$d.minutes=K[5],this.$d.seconds=K[6],this.calMilliseconds(),this}}return this}var g=p.prototype;return g.calMilliseconds=function(){var w=this;this.$ms=Object.keys(this.$d).reduce(function(_,C){return _+(w.$d[C]||0)*v[C]},0)},g.parseFromMilliseconds=function(){var w=this.$ms;this.$d.years=I(w/c),w%=c,this.$d.months=I(w/d),w%=d,this.$d.days=I(w/l),w%=l,this.$d.hours=I(w/a),w%=a,this.$d.minutes=I(w/s),w%=s,this.$d.seconds=I(w/o),w%=o,this.$d.milliseconds=w},g.toISOString=function(){var w=Z(this.$d.years,"Y"),_=Z(this.$d.months,"M"),C=+this.$d.days||0;this.$d.weeks&&(C+=7*this.$d.weeks);var S=Z(C,"D"),j=Z(this.$d.hours,"H"),K=Z(this.$d.minutes,"M"),L=this.$d.seconds||0;this.$d.milliseconds&&(L+=this.$d.milliseconds/1e3);var A=Z(L,"S"),P=w.negative||_.negative||S.negative||j.negative||K.negative||A.negative,N=j.format||K.format||A.format?"T":"",E=(P?"-":"")+"P"+w.format+_.format+S.format+N+j.format+K.format+A.format;return E==="P"||E==="-P"?"P0D":E},g.toJSON=function(){return this.toISOString()},g.format=function(w){var _=w||"YYYY-MM-DDTHH:mm:ss",C={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return _.replace(u,function(S,j){return j||String(C[S])})},g.as=function(w){return this.$ms/v[$(w)]},g.get=function(w){var _=this.$ms,C=$(w);return C==="milliseconds"?_%=1e3:_=C==="weeks"?I(_/v[C]):this.$d[C],_===0?0:_},g.add=function(w,_,C){var S;return S=_?w*v[$(_)]:k(w)?w.$ms:b(w,this).$ms,b(this.$ms+S*(C?-1:1),this)},g.subtract=function(w,_){return this.add(w,_,!0)},g.locale=function(w){var _=this.clone();return _.$l=w,_},g.clone=function(){return b(this.$ms,this)},g.humanize=function(w){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!w)},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},p}();return function(p,g,w){t=w,n=w().$utils(),w.duration=function(S,j){var K=w.locale();return b(S,{$l:K},j)},w.isDuration=k;var _=g.prototype.add,C=g.prototype.subtract;g.prototype.add=function(S,j){return k(S)&&(S=S.asMilliseconds()),_.bind(this)(S,j)},g.prototype.subtract=function(S,j){return k(S)&&(S=S.asMilliseconds()),C.bind(this)(S,j)}}})})(Vs);const Gs=Sn;var Us="Expected a function",Tr=0/0,Xs="[object Symbol]",Ks=/^\s+|\s+$/g,Js=/^[-+]0x[0-9a-f]+$/i,qs=/^0b[01]+$/i,Qs=/^0o[0-7]+$/i,Rs=parseInt,ei=typeof _e=="object"&&_e&&_e.Object===Object&&_e,ti=typeof self=="object"&&self&&self.Object===Object&&self,ni=ei||ti||Function("return this")(),ri=Object.prototype,oi=ri.toString,si=Math.max,ii=Math.min,Cn=function(){return ni.Date.now()};function ai(e,r,t){var n,o,s,a,l,u,c=0,d=!1,f=!1,v=!0;if(typeof e!="function")throw new TypeError(Us);r=Ar(r)||0,kn(t)&&(d=!!t.leading,f="maxWait"in t,s=f?si(Ar(t.maxWait)||0,r):s,v="trailing"in t?!!t.trailing:v);function k(g){var w=n,_=o;return n=o=void 0,c=g,a=e.apply(_,w),a}function b(g){return c=g,l=setTimeout(I,r),d?k(g):a}function $(g){var w=g-u,_=g-c,C=r-w;return f?ii(C,s-_):C}function y(g){var w=g-u,_=g-c;return u===void 0||w>=r||w<0||f&&_>=s}function I(){var g=Cn();if(y(g))return X(g);l=setTimeout(I,$(g))}function X(g){return l=void 0,v&&n?k(g):(n=o=void 0,a)}function Z(){l!==void 0&&clearTimeout(l),c=0,n=u=o=l=void 0}function W(){return l===void 0?a:X(Cn())}function p(){var g=Cn(),w=y(g);if(n=arguments,o=this,u=g,w){if(l===void 0)return b(u);if(f)return l=setTimeout(I,r),k(u)}return l===void 0&&(l=setTimeout(I,r)),a}return p.cancel=Z,p.flush=W,p}function kn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function ci(e){return!!e&&typeof e=="object"}function li(e){return typeof e=="symbol"||ci(e)&&oi.call(e)==Xs}function Ar(e){if(typeof e=="number")return e;if(li(e))return Tr;if(kn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=kn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ks,"");var t=qs.test(e);return t||Qs.test(e)?Rs(e.slice(2),t?2:8):Js.test(e)?Tr:+e}var Mn=ai;const Vt=[0,1,2];var _t=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(_t||{});const Pr=e=>Vt.includes(e),yt=e=>{var n;const t=(((n=document.getElementById(Ue))==null?void 0:n.clientWidth)||0)-Pe;switch(e){case 1:return Math.ceil(t/Ce)*mt;case 2:return Math.ceil(t/Te)*mt;default:return Math.ceil(t/pt)*mt}},di=e=>yt(e)/mt,Gt=(e,r)=>{const t=yt(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},ui=(e,r)=>{const t=Gt(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},$n=()=>{var t;const e=((t=document.getElementById(Ue))==null?void 0:t.clientWidth)||0;return Math.max(0,e-Pe)*mt},Or=h.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:O(),jumpDate:null,isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});O.extend(Fs),O.extend(zs),O.extend(Ws),O.extend(Zs),O.extend(Gs);const fi=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=O(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:u})=>{const{zoom:c,maxRecordsPerPage:d=50}=n,[f,v]=h.useState(c),[k,b]=h.useState(O()),[$,y]=h.useState(null),[I,X]=h.useState(!1),[Z,W]=h.useState(yt(f)),p=Vt[f]!==Vt[Vt.length-1],g=f!==0,w=h.useMemo(()=>ui(k,f),[k,f]),_=Gt(k,f).startDate,C=O(_).dayOfYear(),S=_r(_),j=h.useRef(null),K=h.useRef(!1),L=h.useRef(null),[A,P]=h.useState([{x:0,y:0}]),N=h.useCallback((V,H="auto")=>{var J,D,G,ne;const m=$n();switch(V){case"back":return(J=j.current)==null?void 0:J.scrollTo({behavior:H,left:m/3});case"forward":return(D=j.current)==null?void 0:D.scrollTo({behavior:H,left:m/3});case"middle":{const q=m/mt/4;return(G=j.current)==null?void 0:G.scrollTo({behavior:H,left:m/2-q})}default:return(ne=j.current)==null?void 0:ne.scrollTo({behavior:H,left:m/2})}},[]),E=V=>{P(V)},Y=h.useCallback(V=>{const H=di(f);let m;switch(f){case 0:m=H*7;break;case 1:m=H;break;case 2:m=Math.ceil(H/jt);break}Mn(()=>{switch((V==="forward"||V==="back")&&(K.current=!0),L.current=V,V){case"back":b(D=>D.subtract(m,"days"));break;case"forward":b(D=>D.add(m,"days"));break;case"middle":b(O());break}s==null||s(w)},300)()},[s,w,f]);h.useEffect(()=>{L.current&&(N(L.current),L.current=null)},[k,N]),h.useEffect(()=>{j.current=document.getElementById(Ue),W(yt(f))},[f]),h.useEffect(()=>{const V=()=>W(yt(f));return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[f]),h.useEffect(()=>{s==null||s(w)},[s,w]),h.useEffect(()=>{X(!1)},[o]),h.useEffect(()=>{I||(N("middle"),X(!0),b(o))},[o,I,N]);const z=()=>{t||(b(V=>f===2?V.add(yr,"hours"):V.add(kr,"weeks")),s==null||s(w))},re=h.useCallback(()=>{t||Y("forward")},[t,Y]),ee=()=>{t||(b(V=>f===2?V.subtract(yr,"hours"):V.subtract(kr,"weeks")),s==null||s(w))},B=h.useCallback(()=>{!I||t||Y("back")},[I,t,Y]),F=h.useCallback(()=>{t||(L.current="middle",b(O()),y(null),s==null||s(w))},[t,s,w]),Q=h.useCallback(V=>{if(t)return;const H=O(V).startOf("day");H.isValid()&&(L.current="middle",b(H),y(H),s==null||s(w))},[t,s,w]);h.useEffect(()=>{if(!$)return;const V=()=>y(null);return document.addEventListener("mousedown",V,{once:!0}),()=>document.removeEventListener("mousedown",V)},[$]);const te=()=>U(f+1),M=()=>U(f-1),U=V=>{Pr(V)&&(v(V),W(yt(V)),s==null||s(w))},T=()=>a==null?void 0:a(),{Provider:R}=Or;return i.jsx(R,{value:{data:e,config:n,handleGoNext:z,handleScrollNext:re,handleGoPrev:ee,handleScrollPrev:B,handleGoToday:F,goToDate:Q,zoomIn:te,zoomOut:M,setZoom:U,zoom:f,isNextZoom:p,isPrevZoom:g,date:k,jumpDate:$,isLoading:t,cols:Z,startDate:S,dayOfYear:C,toggleDisplayActiveUnits:T,tilesCoords:A,updateTilesCoords:E,recordsThreshold:d,onClearFilterData:l,suppressNextSlideRef:K,toolbarActions:u},children:r})},Ze=()=>h.useContext(Or),Ir=(e,r,t)=>{const n=Math.max(0,r),o=Math.max(0,t);e.canvas.width=n*window.devicePixelRatio,e.canvas.height=o*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=o+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Lr=()=>{var e;return typeof window<"u"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)},Yr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*he+n*Le;if(e>=s+Le)n++;else if(e>=s)return o*he+n*Le-n*Le}return t-n*Le},hi=5,Nr=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>hi},vt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},pi=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:u=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(U=>({...U,data:[U.data]})):r:e,{enabled:d=!0,isDraggable:f,resourceOnly:v=!1,isValidDrop:k}=a,[b,$]=h.useState("idle"),[y,I]=h.useState(null),[X,Z]=h.useState({x:0,y:0}),[W,p]=h.useState({width:0,height:48}),[g,w]=h.useState(null),[_,C]=h.useState(!0),S=h.useRef({x:0,y:0}),j=h.useRef({x:0,y:0}),K=h.useRef({x:0,y:0}),L=h.useRef(null),A=h.useRef(null),P=h.useRef(0),N=h.useRef(null),E=h.useCallback(U=>!d||U.draggable===!1?!1:f?f(U):!0,[d,f]),Y=h.useCallback((U,T)=>{const R=Yr(T,u),V=Math.floor(R/he);let H;switch(t){case 0:H=ze*7;break;case 1:H=Ce;break;case 2:H=Te;break;default:H=Ce}const m=Math.floor(U/H);let J;const D=O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:J=D.add(m*7,"days").toDate();break;case 1:J=D.add(m,"days").toDate();break;case 2:J=D.add(m,"hours").toDate();break;default:J=D.toDate()}return{snappedDate:J,snappedResourceIndex:V}},[t,n,u]),z=h.useCallback((U,T,R,V)=>{const H=[],m=T.getTime(),J=R.getTime(),D=c.find(ne=>ne.id===V);if(!D)return H;const G=[];for(const ne of D.data)Array.isArray(ne)?G.push(...ne):G.push(ne);for(const ne of G){if(ne.segmentId===U.segmentId)continue;const q=ne.startDate.getTime(),ce=ne.endDate.getTime();if(m>=q&&m<ce||J>q&&J<=ce||m<=q&&J>=ce){const de=new Date(Math.max(m,q)),pe=new Date(Math.min(J,ce)),we=pe.getTime()-de.getTime();H.push({event:ne,conflictStart:de,conflictEnd:pe,overlapDuration:we})}}return H},[c]),re=h.useCallback((U,T,R,V)=>{const H=[],m=T.getTime(),J=R.getTime(),D=O(T).format("YYYY-MM-DD"),G=c.find(q=>q.id===V);if(!G)return H;const ne=[];for(const q of G.data)Array.isArray(q)?ne.push(...q):ne.push(q);for(const q of ne){if(q.segmentId===U.segmentId)continue;const ce=q.startDate.getTime(),ue=q.endDate.getTime(),de=O(q.startDate).format("YYYY-MM-DD"),pe=O(q.endDate).format("YYYY-MM-DD"),we=O(R).format("YYYY-MM-DD");if(!(de===D||pe===D||de===we||pe===we||O(q.startDate).isBefore(T,"day")&&O(q.endDate).isAfter(R,"day"))||m>=ce&&m<ue||J>ce&&J<=ue||m<=ce&&J>=ue)continue;let fe,$e;ue<=m?(fe=m-ue,$e="before"):(fe=ce-J,$e="after"),H.push({event:q,timeGap:fe,position:$e})}return H.sort((q,ce)=>q.timeGap-ce.timeGap)},[c]),ee=h.useCallback((U,T,R)=>{const V=Y(T,R);let H,m;if(v)H=U.startDate,m=U.endDate;else{const ue=O(U.endDate).diff(U.startDate);H=V.snappedDate,m=O(H).add(ue,"milliseconds").toDate()}let J=0,D="",G;for(const ue of e){const de=Math.max(ue.data.length,1);if(V.snappedResourceIndex<J+de){D=ue.id,G=ue.capacity;break}J+=de}if(!D)return null;let ne=!0;G!==void 0&&U.totalPassengers!==void 0&&(ne=U.totalPassengers<=G);const q=z(U,H,m,D),ce=q.length===0?re(U,H,m,D):[];return{startDate:H,endDate:m,resourceId:D,resourceIndex:V.snappedResourceIndex,resourceCapacity:G,hasCapacity:ne,conflicts:q,hasConflict:q.length>0,nearbyEvents:ce}},[Y,e,v,z,re]),B=h.useCallback((U,T)=>{if(!s)return;const R=Date.now();if(R-P.current<100)return;P.current=R;const V={event:U,currentStartDate:T.startDate,currentEndDate:T.endDate,currentResourceId:T.resourceId,conflicts:T.conflicts};s(V)},[s]),F=h.useCallback((U,T)=>{if(!E(U)||!l.current)return;T.preventDefault(),T.stopPropagation();const R=T.target.closest('[style*="left"]');let V=0,H=0;R&&R.style.left&&R.style.top&&(V=parseInt(R.style.left),H=parseInt(R.style.top));const m=vt(T.clientX,T.clientY,l.current);S.current={x:V,y:H},j.current={x:T.clientX,y:T.clientY},K.current={x:m.x-V,y:20},N.current={startDate:U.startDate,endDate:U.endDate,resourceId:""};for(const G of e){for(const ne of G.data)if(ne.some(q=>q.segmentId===U.segmentId)){N.current.resourceId=G.id;break}if(N.current.resourceId)break}I(U),$("potential"),Z({x:V,y:H});let J=100,D=48;if(R){const G=R.getBoundingClientRect();J=G.width,D=G.height}p({width:J,height:D})},[E,l,e,t]),Q=h.useCallback(U=>{if(!l.current)return;let T=l.current;for(;T&&T!==document.body;){const q=window.getComputedStyle(T);if(T.scrollHeight>T.clientHeight&&(q.overflowY==="auto"||q.overflowY==="scroll"||q.overflow==="auto"||q.overflow==="scroll"))break;T=T.parentElement}(!T||T===document.body)&&(T=document.documentElement);const R=T.getBoundingClientRect(),V=U.clientY,H=50,m=12,J=V-R.top,D=R.bottom-V;let G=!1,ne=0;J<H&&J>0?(G=!0,ne=-m*(1-J/H)):D<H&&D>0&&(G=!0,ne=m*(1-D/H)),G?(A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{T.scrollTop+=ne,b==="dragging"&&Q(U)})):A.current&&(cancelAnimationFrame(A.current),A.current=null)},[l,b]),te=h.useCallback(U=>{if(b==="idle"||b==="animating"||!y||!l.current)return;const T={x:U.clientX,y:U.clientY};if(b==="potential")if(Nr(j.current,T))$("dragging");else return;Q(U);const R=vt(U.clientX,U.clientY,l.current);L.current&&cancelAnimationFrame(L.current),L.current=requestAnimationFrame(()=>{const V={x:R.x-K.current.x,y:R.y-K.current.y};Z(V);const H=ee(y,R.x,R.y);if(H&&k){const m={event:y,currentStartDate:H.startDate,currentEndDate:H.endDate,currentResourceId:H.resourceId,conflicts:H.conflicts};H.hasConflict=!k(m)}if(w(H),H){const m=H.hasCapacity!==!1;C(m),B(y,H)}})},[b,y,l,ee,B,k,Q]),M=h.useCallback(async U=>{if(b==="idle"||b==="animating")return;const T={x:U.clientX,y:U.clientY};if(!Nr(j.current,T)||b==="potential"){$("idle"),I(null),w(null);return}if(!y||!g||!N.current){$("idle"),I(null),w(null);return}if(g.hasCapacity===!1){C(!1),$("animating"),Z(S.current),setTimeout(()=>{$("idle"),I(null),w(null),C(!0)},300);return}const V={event:y,originalStartDate:N.current.startDate,originalEndDate:N.current.endDate,originalResourceId:N.current.resourceId,newStartDate:g.startDate,newEndDate:g.endDate,newResourceId:g.resourceId,hasConflict:g.hasConflict,conflicts:g.conflicts};let H=!0;if(o)try{const m=o(V);H=m instanceof Promise?await m:m}catch{H=!1}H?(C(!0),$("idle"),I(null),w(null)):(C(!1),$("animating"),Z(S.current),setTimeout(()=>{$("idle"),I(null),w(null),C(!0)},300))},[b,y,g,o,k]);return h.useEffect(()=>{if(b==="potential"||b==="dragging"){const U=R=>te(R),T=R=>M(R);return document.addEventListener("mousemove",U),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",T)}}else return()=>{}},[b,te,M]),h.useEffect(()=>()=>{L.current&&(cancelAnimationFrame(L.current),L.current=null),A.current&&(cancelAnimationFrame(A.current),A.current=null)},[]),h.useEffect(()=>{(b==="idle"||b==="animating")&&(L.current&&(cancelAnimationFrame(L.current),L.current=null),A.current&&(cancelAnimationFrame(A.current),A.current=null))},[b]),h.useEffect(()=>{(b==="dragging"||b==="potential")&&(b==="dragging"?($("animating"),Z(S.current),setTimeout(()=>{$("idle"),I(null),w(null)},300)):($("idle"),I(null),w(null)))},[t]),h.useEffect(()=>{if((b==="dragging"||b==="potential")&&y){let U=!1;for(const T of e){for(const R of T.data)if(R.some(V=>V.segmentId===y.segmentId)){U=!0;break}if(U)break}U||(b==="dragging"?($("animating"),Z(S.current),setTimeout(()=>{$("idle"),I(null),w(null)},300)):($("idle"),I(null),w(null)))}},[e,b,y]),{dragState:b,draggedEvent:y,ghostPosition:X,ghostDimensions:W,dropTarget:g,isValidDrop:_,handleDragStart:F,isDraggable:E,draggingEventId:(y==null?void 0:y.segmentId)||null,resourceOnly:v}},gi=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:u,separatorRowIndices:c=[]})=>{const{enabled:d=!1,isSelectable:f}=a,v=d&&!!o,k=h.useCallback(m=>{let J=0;for(const D of c)D<=m&&J++;return m*he+J*Le},[c]),[b,$]=h.useState("idle"),[y,I]=h.useState(null),[X,Z]=h.useState(null),[W,p]=h.useState(null),[g,w]=h.useState(!1),[_,C]=h.useState([]),[S,j]=h.useState(!1),K=h.useRef(null),L=h.useRef(null),A=h.useRef(null),P=h.useRef(null),N=h.useCallback(()=>{switch(t){case 0:return ze*7;case 1:return Ce;case 2:return Te;default:return Ce}},[t]),E=h.useCallback(m=>{const J=N(),D=Math.floor(m/J),G=O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return G.add(D*7,"days").toDate();case 1:return G.add(D,"days").toDate();case 2:return G.add(D,"hours").toDate();default:return G.toDate()}},[t,n,N]),Y=h.useCallback(m=>{const J=Yr(m,c),D=Math.floor(J/he);let G=0;for(const ne of e){const q=Math.max(ne.data.length,1);if(D<G+q)return{resourceId:ne.id,resourceIndex:D,resourceLabel:ne.label};G+=q}return null},[e,c]),z=h.useCallback(m=>{const J=N();return Math.floor(m/J)*J},[N]),re=h.useCallback((m,J,D,G=[])=>{const ne=[],ce=(r||e).find(pe=>pe.id===m),ue=J.getTime(),de=D.getTime();if(ce){const pe=ce.data[0],we=pe&&Array.isArray(pe)?ce.data.flat():ce.data;for(const be of we){const se=new Date(be.startDate).getTime(),fe=new Date(be.endDate).getTime();if(ue<fe&&de>se){const $e=new Date(Math.max(ue,se)),Be=new Date(Math.min(de,fe)),De=Be.getTime()-$e.getTime();ne.push({event:be,conflictStart:$e,conflictEnd:Be,overlapDuration:De})}}}for(const pe of G){if(pe.resourceId!==m)continue;const we=pe.startDate.getTime(),be=pe.endDate.getTime();if(ue<be&&de>we){const se=new Date(Math.max(ue,we)),fe=new Date(Math.min(de,be)),$e=fe.getTime()-se.getTime(),Be={segmentId:`pending-${pe.startDate.getTime()}`,reservationId:`pending-${pe.startDate.getTime()}`,startDate:pe.startDate,endDate:pe.endDate,occupancy:0,title:`New Event (${pe.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ne.push({event:Be,conflictStart:se,conflictEnd:fe,overlapDuration:$e})}}return ne},[e,r]),ee=h.useCallback(m=>{if(!v||u||!l.current||m.button!==0)return;const J=m.target;if(J.closest("[data-segment-id]")||J.closest("[data-multi-select-ui]"))return;const D=vt(m.clientX,m.clientY,l.current),G=Y(D.y);if(!G)return;K.current={x:m.clientX,y:m.clientY},L.current=G.resourceIndex;const ne=z(D.x),q=N(),ce=k(G.resourceIndex);I(D),Z(D),p({x:ne,y:ce,width:q,height:he}),$("selecting")},[v,u,l,Y,z,N,k]),B=h.useCallback(m=>{Z(m);const J=N(),D=z((y==null?void 0:y.x)||0),G=z(m.x),ne=k(L.current),q=Math.min(D,G),ce=Math.max(D,G)+J;p({x:q,y:ne,width:ce-q,height:he})},[y,N,z,k]),F=h.useCallback(()=>{P.current&&(cancelAnimationFrame(P.current),P.current=null)},[]),Q=h.useCallback((m,J)=>{const D=document.getElementById(Ue);if(!D||!l.current)return;const G=D.getBoundingClientRect(),ne=60,q=12,ce=m-(G.left+Pe),ue=G.right-m;let de=0;ce<ne?de=-q*(1-Math.max(0,ce)/ne):ue<ne&&(de=q*(1-Math.max(0,ue)/ne)),F(),de!==0&&(P.current=requestAnimationFrame(()=>{D.scrollLeft+=de,B(vt(m,J,l.current)),Q(m,J)}))},[l,B,F]),te=h.useCallback(m=>{if(b!=="selecting"||!l.current||L.current===null)return;const J=vt(m.clientX,m.clientY,l.current);A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>B(J)),Q(m.clientX,m.clientY)},[b,l,B,Q]),M=h.useCallback(m=>{if(b!=="selecting")return;if(F(),!l.current||!y||!K.current){$("idle"),I(null),Z(null),p(null);return}const J=vt(m.clientX,m.clientY,l.current),D=Y(y.y);if(!D){$("idle"),I(null),Z(null),p(null);return}const G=Math.min(y.x,J.x),ne=Math.max(y.x,J.x),q=E(G),ce=E(ne),ue=O(ce).hour(23).minute(59).second(0).millisecond(0).toDate();if(f&&!f(D.resourceId,q,ue)){$("idle"),I(null),Z(null),p(null);return}const de=re(D.resourceId,q,ue,_),pe=de.length>0,we={startDate:q,endDate:ue,resourceId:D.resourceId,resourceLabel:D.resourceLabel,zoomLevel:t,hasConflict:pe,conflicts:pe?de:void 0};if(g)C(be=>[...be,we]),j(!0);else if(o){const be=o(we),se=fe=>{fe!=null&&fe.continueMultiSelect&&(w(!0),C([we]),j(!0))};be instanceof Promise?be.then(se):se(be)}$("idle"),I(null),Z(null),p(null),K.current=null,L.current=null},[b,l,y,Y,E,f,o,t,g,re,_,F]),U=h.useCallback(()=>{if(_.length>0&&s){j(!1);const m=s(_),J=D=>{D!=null&&D.continueMultiSelect?j(!0):(C([]),w(!1),j(!1))};m instanceof Promise?m.then(J):J(m);return}C([]),w(!1),j(!1)},[_,s]),T=h.useCallback(()=>{C([]),w(!1),j(!1)},[]),R=h.useCallback(m=>{C(J=>{const D=J.filter((G,ne)=>ne!==m);return D.length===0&&(w(!1),j(!1)),D})},[]),V=h.useCallback((m,J)=>{C(D=>D.map((G,ne)=>{if(ne!==m)return G;const q={...G,...J},ce=D.filter((de,pe)=>pe!==m),ue=re(q.resourceId,q.startDate,q.endDate,ce);return{...q,hasConflict:ue.length>0,conflicts:ue.length>0?ue:void 0}}))},[re]),H=h.useCallback(m=>{m.key==="Escape"&&(b==="selecting"?(F(),$("idle"),I(null),Z(null),p(null),K.current=null,L.current=null):g&&_.length>0&&(C([]),w(!1),j(!1)))},[b,g,_.length,F]);return h.useEffect(()=>{if(b==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",M),document.addEventListener("keydown",H),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",M),document.removeEventListener("keydown",H)}},[b,te,M,H]),h.useEffect(()=>{if(g&&_.length>0)return document.addEventListener("keydown",H),()=>{document.removeEventListener("keydown",H)}},[g,_.length,H]),h.useEffect(()=>()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null),F()},[F]),h.useEffect(()=>{u&&b==="selecting"&&(F(),$("idle"),I(null),Z(null),p(null),K.current=null,L.current=null)},[u,b,F]),{selectionState:b,selectionStart:y,selectionEnd:X,selectionBox:W,handleGridMouseDown:ee,isEnabled:v,pendingSelections:_,confirmSelections:U,clearSelections:T,removeSelection:R,updateSelection:V,isMultiSelectActive:g,hasUnconfirmedSelections:S}},mi=x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,yi=x.div`
  position: relative;
`,vi=x.canvas``;x.canvas``;const xi=x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Fr=x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,bi=h.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onTileContextMenu:a,onEventDrop:l,onEventDrag:u,draggableConfig:c,onDragStateChange:d,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:k,separatorRowIndices:b=[],subcontractSeparatorIndex:$=-1,warningSeparatorIndex:y=-1,fadingUnitIds:I},X){const Z=h.useRef(!1),{handleScrollNext:W,handleScrollPrev:p,date:g,isLoading:w,cols:_,startDate:C,suppressNextSlideRef:S,config:j}=Ze(),K=h.useRef(null),L=h.useRef(null),A=h.useRef(t),P=h.useRef(g),N=h.useRef(null),E=h.useRef(null),Y=h.useRef(null),z=h.useRef(null),[re,ee]=h.useState(!1),B=Ht(),{dragState:F,draggedEvent:Q,ghostPosition:te,ghostDimensions:M,dropTarget:U,isValidDrop:T,handleDragStart:R,isDraggable:V,draggingEventId:H,resourceOnly:m}=pi({data:n,baseData:o||n,zoom:r,startDate:C,onEventDrop:l,onEventDrag:u,draggableConfig:c,gridRef:z,separatorRowIndices:b});h.useEffect(()=>{const ge=F==="dragging"||F==="potential";ee(ge),d&&d(ge)},[F,d]);const J=h.useRef(!1),D=h.useRef(g),G=h.useRef(null);h.useEffect(()=>{var le;const ge=D.current;if(D.current=g,!J.current){J.current=!0;return}if(S!=null&&S.current){S.current=!1;return}const ke=z.current;if(!(ke!=null&&ke.animate))return;const Ee=g.isAfter(ge)?48:-48;(le=G.current)==null||le.cancel(),ke.style.willChange="transform";const Ae=ke.animate([{transform:`translateX(${Ee}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),ie=()=>{ke.style.willChange=""};Ae.onfinish=ie,Ae.oncancel=ie,G.current=Ae},[g,S]);const{selectionState:ne,selectionBox:q,handleGridMouseDown:ce,pendingSelections:ue,confirmSelections:de,clearSelections:pe,removeSelection:we,updateSelection:be,isMultiSelectActive:se,hasUnconfirmedSelections:fe}=gi({data:n,baseData:o||n,zoom:r,startDate:C,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:k,gridRef:z,isDragging:re,separatorRowIndices:b}),$e=h.useCallback(ge=>{ge.preventDefault()},[]),Be=h.useCallback(ge=>{ge.preventDefault()},[]),De=b.length*Le,bt=h.useCallback(ge=>{const ke=$n(),Ee=t*he+1+De;Ir(ge,ke,Ee),Ys(ge,r,t,_,C,B,b,$,y)},[_,C,t,r,B,b,$,y,De]);return h.useEffect(()=>{if(!K.current)return;const ge=K.current.getContext("2d");if(!ge)return;const ke=()=>bt(ge);return window.addEventListener("resize",ke),()=>window.removeEventListener("resize",ke)},[bt]),h.useEffect(()=>{var ae;const ge=A.current,ke=P.current;if(A.current=t,P.current=g,ge===t||!g.isSame(ke,"day")||Lr())return;const Ee=K.current,Ae=L.current;if(!Ee||!Ae||Ee.width===0||Ee.height===0)return;const ie=Ae.getContext("2d");if(!ie)return;Ae.width=Ee.width,Ae.height=Ee.height,Ae.style.width=Ee.style.width,Ae.style.height=Ee.style.height,ie.setTransform(1,0,0,1,0,0),ie.clearRect(0,0,Ae.width,Ae.height),ie.drawImage(Ee,0,0),(ae=N.current)==null||ae.cancel(),Ae.style.opacity="1";const le=Ae.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});le.onfinish=()=>{Ae.style.opacity="0"},N.current=le},[t,g]),h.useEffect(()=>{const ge=K.current;if(!ge)return;ge.style.letterSpacing="1px";const ke=ge.getContext("2d");ke&&bt(ke)},[g,t,r,bt]),h.useEffect(()=>{if(!E.current)return;const ge=new IntersectionObserver(ke=>{ke[0].isIntersecting&&!Z.current&&(Z.current=!0,W(),setTimeout(()=>{Z.current=!1},1e3))},{root:document.getElementById(Ue)});return ge.observe(E.current),()=>{ge.disconnect()}},[W]),h.useEffect(()=>{if(!Y.current)return;const ge=new IntersectionObserver(ke=>{ke[0].isIntersecting&&!Z.current&&(Z.current=!0,p(),setTimeout(()=>{Z.current=!1},1e3))},{root:document.getElementById(Ue),rootMargin:`0px 0px 0px -${Pe}px`});return ge.observe(Y.current),()=>{ge.disconnect()}},[p]),i.jsxs(mi,{id:wr,children:[i.jsxs(yi,{ref:ge=>{typeof X=="function"?X(ge):X&&(X.current=ge),z.current=ge},onMouseDown:ce,style:{cursor:f?"crosshair":"default"},children:[i.jsx(Fr,{position:"left",ref:Y}),i.jsx(Nn,{isLoading:w,position:"left"}),i.jsx(vi,{ref:K,onDragStart:$e,onDragOver:Be,style:{userSelect:F==="dragging"?"none":"auto"}}),i.jsx(xi,{ref:L,"aria-hidden":!0}),i.jsx(yd,{zoom:r,startDate:C}),i.jsx(bd,{zoom:r,startDate:C}),i.jsx($l,{data:n,zoom:r,onTileClick:s,onTileContextMenu:a,onDragStart:R,isDraggable:V,draggingEventId:H,separatorRowIndices:b,fadingUnitIds:I,highlightedSegmentId:(j==null?void 0:j.highlightedSegmentId)??null,focusedUnitIds:(j==null?void 0:j.focusedUnitIds)??null,leavingSegmentIds:(j==null?void 0:j.leavingSegmentIds)??null,ghostProject:(j==null?void 0:j.ghostProject)??null}),i.jsx(Fr,{ref:E,position:"right"}),i.jsx(Nn,{isLoading:w,position:"right"}),(F==="dragging"||F==="animating")&&i.jsx(Ql,{draggedEvent:Q,ghostPosition:te,ghostDimensions:M,dropTarget:U,isValidDrop:T,dragState:F,zoom:r,data:n,resourceOnly:m,separatorRowIndices:b}),i.jsx(td,{selectionBox:q,isSelecting:ne==="selecting"}),se&&ue.length>0&&i.jsx(gd,{selections:ue,data:n,zoom:r,startDate:C,onRemove:we,onUpdate:be,separatorRowIndices:b})]}),se&&fe&&ue.length>0&&i.jsx(ld,{selections:ue,onConfirm:de,onClear:pe,onRemove:we})]})}),Br=e=>{const r=O.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},zr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/Me);t+=o.hours+s,n+=r%Me,n>=Me&&(t++,n-=Me)}),{hours:t,minutes:n}},Hr=(e,r)=>{let t=Sr;switch(r){case 0:t=Ts;break;case 1:t=Sr;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=Me-e.minutes;return a===Me&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},wi=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const d=O(c.startDate).isoWeek(),f=O(c.startDate).isoWeekday(),v=O(c.endDate).isoWeek(),k=O(c.endDate).isoWeekday(),{hours:b,minutes:$}=Br(c.occupancy);if(n===d){const y=(Re+1-f)*b,I=(Re+1-f)*$;return{hours:Math.max(0,y),minutes:I}}else if(n===v){const y=k>Re?Re*b:k*b,I=k>Re?Re*$:k*$;return{hours:y,minutes:I}}else if(O(r).isBetween(c.startDate,c.endDate))return{hours:Re*b,minutes:Re*$};return{hours:0,minutes:0}}),{hours:s,minutes:a}=zr(o),{free:l,overtime:u}=Hr({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:u}},Si=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(d=>{const{hours:f,minutes:v}=Br(d.occupancy);return o<=(n?7:5)?{hours:f,minutes:v}:{hours:0,minutes:0}}),{hours:a,minutes:l}=zr(s),{free:u,overtime:c}=Hr({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:u,overtime:c}},Ci=(e,r)=>{let t=0;e.forEach(l=>{const u=O(l.startDate).hour(),c=O(l.endDate).hour(),d=r.hour(),f=O(l.endDate).minute(),v=O(l.startDate).minute();u<d&&c>d?t+=Me:u===d&&c===d&&v&&f?t+=f?f-v:Me-v:u===d&&c>=d?t+=v?Me-v:Me:c===d&&f&&(t+=f)});const n=Math.floor(t/Me),o=t%Me,s=n||o?0:1,a=n?0:o?Me-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},ki=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?O(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?O(t).isBetween(a.startDate,a.endDate,"hour","[]"):O(a.startDate).isBetween(O(t),O(t).add(6,"days"),"day","[]")||O(t).isBetween(O(a.startDate),O(a.endDate),"day","[]"));switch(n){case 1:return Si(s,t,n,o);case 2:return Ci(s,t);default:return wi(s,t,n)}},Mi=(e,r,t,n,o,s,a=!1)=>{let l="weeks",u;switch(s){case 0:l="weeks",u=pt;break;case 1:l="days",u=Ce;break;case 2:l="hours",u=Te;break}const c=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=O(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),f=Math.ceil(t.y/he),v=n.findIndex((I,X,Z)=>Z.slice(0,X+1).reduce((p,g)=>p+g,0)>=f),k=s===2?(c+1)*u:c*u,b=(f-1)*he+he,$=ki(o[v],v,d,s,a),y=O(e.startDate).isSame(O(e.endDate),"day");return{coords:{x:k,y:b},mouseCoords:t,resourceIndex:v,disposition:$,reservationData:{startTime:O(e.startDate).format("hh:mm A"),startDate:O(e.startDate).format("MMM D, YYYY"),endTime:O(e.endDate).format("hh:mm A"),endDate:O(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:y,passengers:e.totalPassengers,readiness:e.readiness,readinessNote:e.readinessNote,subcontractConfirmed:e.subcontractConfirmed,subcontractDetails:e.subcontractDetails}}};function $i(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Di(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&!d.isUnassigned&&d.capacity!=null&&t.add(d.capacity);const n=[...t].sort((d,f)=>d-f);if(n.length<2)return r;const o=Math.min(5,n.length),s=$i(n,o),a=[];let l=0;for(const d of s)a.push({min:n[l],max:n[d-1],values:n.slice(l,d)}),l=d;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const u=[],c=new Map;return a.forEach((d,f)=>{const v="__auto_cat_"+f,k=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:v,name:k,minPassengers:d.min,maxPassengers:d.max});for(const b of d.values)c.set(b,v)}),{categories:u,capacityToCategoryId:c}}const Ei=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,isUnassigned:e[c].isUnassigned,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(d)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((u,c)=>{const d={id:e[c+s].id,label:e[c+s].label,data:u,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,isUnassigned:e[c+s].isUnassigned,categoryId:e[c+s].categoryId};a.push(d),c===r.length-s-1&&o.push(a)})),o):(r.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,isUnassigned:e[c].isUnassigned,categoryId:e[c].categoryId};a.push(d)}),o.push(a),o)};var Dn={},_i={get exports(){return Dn},set exports(e){Dn=e}};(function(e,r){(function(t,n){e.exports=n()})(_e,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(_i);const Ti=Dn;var En={},Ai={get exports(){return En},set exports(e){En=e}};(function(e,r){(function(t,n){e.exports=n()})(_e,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Ai);const Pi=En,Oi=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=O(t.startDate).startOf("day"),u=O(t.endDate).startOf("day"),c=O(o[a].startDate).startOf("day"),d=O(o[a].endDate).startOf("day");if(l.isBetween(c,d,null,"[]")||u.isBetween(c,d,null,"[]")||l.isBefore(c,"minute")&&u.isAfter(d,"minute")||l.isAfter(c,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};O.extend(Ti),O.extend(Pi);const Wr=new WeakMap,Ii=e=>{const r=Wr.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=O(o.startDate),l=O(s.startDate),u=a.startOf("day").diff(l.startOf("day"),"day");return u!==0?u:a.diff(l)}),n=Oi(t);return Wr.set(e,n),n},Li=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Ii(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Yi=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Ni=e=>{const{recordsThreshold:r}=Ze(),[t,n]=h.useState(0),[o,s]=h.useState(0),a=h.useRef(null);h.useEffect(()=>{a.current=document.getElementById(Ue)},[]);const{projectsPerPerson:l,rowsPerPerson:u}=h.useMemo(()=>Li(e),[e]),c=h.useMemo(()=>Ei(e,l,u,r),[e,l,r,u]),d=h.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(y=>y+c[Math.max(o,0)].length),s(y=>Math.min(y+1,c.length-1)),window.scroll({top:0}))},[o,c]),f=h.useCallback(()=>{c[o].length&&(n(y=>Math.max(y-c[o-1].length,0)),s(y=>Math.max(y-1,0)))},[o,c]),v=h.useCallback(()=>{n(0),s(0)},[]),k=t+c[o].length,b=h.useMemo(()=>u.slice(t,k),[k,u,t]),$=h.useMemo(()=>l.slice(t,k),[k,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:$,rowsPerItem:b,totalRowsPerPage:Yi(c[o]),next:d,previous:f,reset:v}};var _n={},Fi={get exports(){return _n},set exports(e){_n=e}};(function(e,r){(function(t,n){e.exports=n()})(_e,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(Fi);const Bi=_n;var Tn={},zi={get exports(){return Tn},set exports(e){Tn=e}};(function(e,r){(function(t,n){e.exports=n(st)})(_e,function(t){function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=n(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function a(v,k,b){var $=v+" ";switch(b){case"m":return k?"minuta":"minutę";case"mm":return $+(s(v)?"minuty":"minut");case"h":return k?"godzina":"godzinę";case"hh":return $+(s(v)?"godziny":"godzin");case"MM":return $+(s(v)?"miesiące":"miesięcy");case"yy":return $+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,d=function(v,k){return c.test(k)?l[v.month()]:u[v.month()]};d.s=u,d.f=l;var f={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(f,null,!0),f})})(zi);const Hi=Tn;var An={},Wi={get exports(){return An},set exports(e){An=e}};(function(e,r){(function(t,n){e.exports=n(st)})(_e,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(u,c,d){var f=s[d];return Array.isArray(f)&&(f=f[c?0:1]),f.replace("%d",u)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Wi);const ji=An;var Pn={},Zi={get exports(){return Pn},set exports(e){Pn=e}};(function(e,r){(function(t,n){e.exports=n(st)})(_e,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,f){return l.test(f)?s[d.month()]:a[d.month()]};u.s=a,u.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Zi);const Vi=Pn;var On={},Gi={get exports(){return On},set exports(e){On=e}};(function(e,r){(function(t,n){e.exports=n(st)})(_e,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(Gi);const Ui=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract",unassigned:"No unit assigned"},translateCode:"en-GB",dayjsTranslations:Bi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca",unassigned:"Nie przypisano pojazdu"},translateCode:"pl-PL",dayjsTranslations:Hi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"One Day",passengers:"Pax"},subcontract:"Subcontrato",unassigned:"Sin unidad asignada"},translateCode:"es-ES",dayjsTranslations:On},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas",unassigned:"Nepriskirta transporto priemonė"},translateCode:"lt-LT",dayjsTranslations:Vi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer",unassigned:"Kein Fahrzeug zugewiesen"},translateCode:"de-DE",dayjsTranslations:ji}];class Xi{constructor(){Co(this,"locales",Ui)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Ut=new Xi,jr=h.createContext({localesData:Ut.getLocales(),currentLocale:Ut.getLocales()[0],setCurrentLocale:()=>{}}),Ki=({children:e,lang:r,translations:t})=>{const[n,o]=h.useState("en"),s=Ut.getLocales(),a=h.useCallback(()=>{const f=s.find(v=>v.id===n);return typeof(f==null?void 0:f.dayjsTranslations)=="object"&&O.locale(f.dayjsTranslations),f||s[0]},[n,s]),[l,u]=h.useState(a()),c=f=>{localStorage.setItem("locale",f.translateCode),u(f)};h.useEffect(()=>{t==null||t.forEach(f=>{s.find(k=>k.id===f.id)||Ut.addLocales(f)})},[s,t]),h.useEffect(()=>{const f=localStorage.getItem("locale"),v=r??f??"en";localStorage.setItem("locale",v),o(v),u(a())},[a,r]);const{Provider:d}=jr;return i.jsx(d,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},et=()=>h.useContext(jr).currentLocale.lang,Ji=e=>oe.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},oe.createElement("defs",null,oe.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),oe.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},oe.createElement("stop",{offset:.47,stopColor:"#ccc"}),oe.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),oe.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),oe.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),oe.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),oe.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),oe.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),oe.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),oe.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),oe.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),oe.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),oe.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),qi=x.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Qi=x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Ri=({onTileClick:e})=>{const{feelingEmpty:r}=et();return i.jsxs(qi,{onClick:e,children:[i.jsx(Ji,{}),i.jsx(Qi,{children:r})]})},ea=x.div`
  position: relative;
  display: flex;
`,ta=x.div`
  position: relative;
  margin-left: ${Pe};
  display: flex;
  flex-direction: column;
  contain: paint;
`,na=x.div`
  width: calc(${({width:e})=>e}px - ${Pe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Pe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ra=new Set,oa={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:_t.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function sa(e,r){const t=r?[...r].sort((c,d)=>c.maxPassengers-d.maxPassengers):[],n=[],o=e.filter(c=>c.isUnassigned);o.length>0&&n.push({type:"unassigned",items:o});const s=e.filter(c=>!c.isUnassigned);for(const c of t){const d=s.filter(f=>!f.isSubcontract&&f.categoryId===c.id);d.length>0&&n.push({type:"category",category:c,items:d})}const a=t.length>0,l=s.filter(c=>!c.isSubcontract&&(!c.categoryId||!a));l.length>0&&a?n.push({type:"uncategorized",items:l}):l.length>0&&n.push({type:"uncategorized",items:l});const u=s.filter(c=>c.isSubcontract);return u.length>0&&n.push({type:"subcontract",items:u}),n}const ia=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,onItemClick:s,toggleTheme:a,topBarWidth:l,onEventDrop:u,onEventDrag:c,draggableConfig:d,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:k})=>{const[b,$]=h.useState(oa),[y,I]=h.useState(e),[X,Z]=h.useState(!1),[W,p]=h.useState(!1),[g,w]=h.useState(""),[_,C]=h.useState(new Set),[S,j]=h.useState(new Set),K=h.useRef([]);h.useEffect(()=>()=>K.current.forEach(clearTimeout),[]);const{zoom:L,startDate:A,isLoading:P,config:{includeTakenHoursOnWeekendsInDayView:N,showTooltip:E,showThemeToggle:Y}}=Ze(),z=h.useRef(null),re=h.useRef(null),[ee,B]=h.useState(124),{page:F,projectsPerPerson:Q,rowsPerItem:te,currentPageNum:M,pagesAmount:U,next:T,previous:R,reset:V}=Ni(y),{effectiveCategories:H,effectivePage:m}=h.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:F};const ie=Di(F);if(ie.categories.length===0)return{effectiveCategories:void 0,effectivePage:F};const le=F.map(ae=>{if(ae.isSubcontract||ae.isUnassigned||ae.capacity==null)return ae;const Se=ie.capacityToCategoryId.get(ae.capacity);return Se?{...ae,categoryId:Se}:ae});return{effectiveCategories:ie.categories,effectivePage:le}},[t,F]),J=h.useCallback(ie=>{if(_.has(ie)){C(ae=>{const Se=new Set(ae);return Se.delete(ie),Se});return}if(Lr()){C(ae=>new Set(ae).add(ie));return}j(ae=>new Set(ae).add(ie));const le=setTimeout(()=>{C(ae=>new Set(ae).add(ie)),j(ae=>{const Se=new Set(ae);return Se.delete(ie),Se})},190);K.current.push(le)},[_]),D=h.useMemo(()=>{const ie=[];m.some(ae=>ae.isUnassigned)&&ie.push("__unassigned__");const le=H?[...H].sort((ae,Se)=>ae.maxPassengers-Se.maxPassengers):[];for(const ae of le)m.some(Se=>!Se.isSubcontract&&Se.categoryId===ae.id)&&ie.push(ae.id);return m.some(ae=>ae.isSubcontract)&&ie.push("__subcontract__"),ie},[H,m]),G=h.useCallback(()=>{C(new Set)},[]),ne=h.useCallback(()=>{C(new Set(D))},[D]),q=h.useMemo(()=>{if(S.size===0)return ra;const ie=new Set;for(const le of m){const ae=le.isUnassigned?"__unassigned__":le.isSubcontract?"__subcontract__":le.categoryId;ae&&S.has(ae)&&ie.add(le.id)}return ie},[S,m]),{visiblePage:ce,visibleRowsPerItem:ue,visibleTotalRows:de,visibleProjectsPerPerson:pe,separatorRowIndices:we,subcontractSeparatorIndex:be,unassignedSeparatorIndex:se}=h.useMemo(()=>{const ie=sa(m,H),le=((H==null?void 0:H.length)??0)>0,ae=new Map;F.forEach((Oe,St)=>ae.set(Oe.id,St));const Se=[],Ve=[],Ke=[],We=[];let tt=0,Kt=-1,Je=-1;for(const Oe of ie)if(Oe.type==="unassigned"||Oe.type==="subcontract"||Oe.type==="category"&&le){const Ct=Oe.type==="unassigned"?"__unassigned__":Oe.type==="subcontract"?"__subcontract__":Oe.category.id,kt=_.has(Ct);if(Oe.type==="subcontract"&&(Kt=We.length),Oe.type==="unassigned"&&(Je=We.length),We.push(tt),!kt)for(const ct of Oe.items){const Jt=ae.get(ct.id)??0,qt=te[Jt];Se.push(ct),Ve.push(qt),Ke.push(Q[Jt]),tt+=qt}}else for(const Ct of Oe.items){const kt=ae.get(Ct.id)??0,ct=te[kt];Se.push(Ct),Ve.push(ct),Ke.push(Q[kt]),tt+=ct}const wt=Ve.reduce((Oe,St)=>Oe+St,0);return{visiblePage:Se,visibleRowsPerItem:Ve,visibleTotalRows:wt,visibleProjectsPerPerson:Ke,separatorRowIndices:We,subcontractSeparatorIndex:Kt,unassignedSeparatorIndex:Je}},[m,H,F,_,te,Q]),fe=h.useMemo(()=>m.reduce((ie,le)=>le.isUnassigned?ie+le.data.reduce((ae,Se)=>ae+Se.length,0):ie,0),[m]),$e=h.useRef(null),Be=h.useRef(Mn((ie,le,ae,Se,Ve,Ke)=>{if(!z.current)return;const{tile:We,segmentId:tt}=ge(ie);if(tt&&tt===$e.current)return;if($e.current=null,!tt||!We){Z(!1);return}const Kt=bt(tt,le),Je=z.current.getBoundingClientRect(),wt=We.getBoundingClientRect(),Oe={x:ie.clientX-Je.left,y:ie.clientY-Je.top},St={x:ie.clientX-Je.left,y:ie.clientY-Je.top},Ct={x:wt.left-Je.left,y:wt.top-Je.top,width:wt.width,height:wt.height},{coords:{x:kt,y:ct},resourceIndex:Jt,disposition:qt,reservationData:wd}=Mi(Kt,ae,Oe,Se,Ve,Ke,N);$({coords:{x:kt,y:ct},mouseCoords:St,resourceIndex:Jt,disposition:qt,reservationData:wd,tileBounds:Ct}),Z(!0)},4)),De=h.useRef(Mn((ie,le)=>{V(),I(ie.map(ae=>({...ae,data:ae.data.filter(Se=>{const{title:Ve,description:Ke,subtitle:We}=Se;return(Ve==null?void 0:Ve.toLowerCase().includes(le.toLowerCase()))||(We==null?void 0:We.toLowerCase().includes(le.toLowerCase()))||(Ke==null?void 0:Ke.toLowerCase().includes(le.toLowerCase()))})})).filter(ae=>ae.data.length>0))},500)),bt=(ie,le)=>{if(ie)return le.flatMap(ae=>ae.data).find(ae=>ae.segmentId===ie)},ge=ie=>{if(!ie.target)return{tile:null,segmentId:null};const le=ie.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},ke=ie=>{const le=ie.target.value;w(le),De.current.cancel(),le?De.current(e,le):(V(),I(e))},Ee=h.useCallback(()=>{Be.current.cancel(),Z(!1)},[]),Ae=h.useCallback((ie,le)=>{$e.current=String(ie.segmentId),Ee(),o==null||o(ie,le)},[Ee,o]);return h.useEffect(()=>{const ie=ae=>Be.current(ae,e,A,ue,pe,L),le=z.current;if(le)return le.addEventListener("mousemove",ie),le.addEventListener("mouseleave",Ee),()=>{le.removeEventListener("mousemove",ie),le.removeEventListener("mouseleave",Ee)}},[Be,Ee,pe,ue,A,L,e]),h.useEffect(()=>{g?(De.current.cancel(),De.current(e,g)):I(e)},[e,g]),h.useLayoutEffect(()=>{const ie=re.current;if(!ie)return;const le=()=>B(ie.offsetHeight);le();const ae=new ResizeObserver(le);return ae.observe(ie),()=>ae.disconnect()},[]),i.jsxs(ea,{children:[i.jsx(wc,{headerHeight:ee,data:m,categories:H,pageNum:M,pagesAmount:U,rows:te,onLoadNext:T,onLoadPrevious:R,searchInputValue:g,onSearchInputChange:ke,onItemClick:s,collapsedGroups:_,fadingGroups:S,onToggleGroup:J,allGroupIds:D,onExpandAll:G,onCollapseAll:ne,unassignedCount:fe}),i.jsxs(ta,{children:[i.jsx(qc,{ref:re,zoom:L,topBarWidth:l,showThemeToggle:Y,toggleTheme:a}),e.length?i.jsx(bi,{data:ce,baseData:r||e,zoom:L,rows:de,ref:z,onTileClick:n,onTileContextMenu:o&&Ae,onEventDrop:u,onEventDrag:c,draggableConfig:d,onDragStateChange:p,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:k,separatorRowIndices:we,subcontractSeparatorIndex:be,warningSeparatorIndex:fe>0?se:-1,fadingUnitIds:q}):i.jsx(na,{width:l,children:P?i.jsx(Nn,{isLoading:P,position:"left"}):i.jsx(Ri,{})}),E&&i.jsx(Hl,{tooltipData:b,visible:X&&!W})]})]})},aa=x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Pe+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.mode==="dark"?e.colors.primary:"#fff"};
`,Zr=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,ca=x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,la=x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Vr=x.button`
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
`,da=x.button`
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
`,ua=x.div`
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
`,Gr=x.button`
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
`,fa=x.label`
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
`,ha=x.span`
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
`,Tt=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),pa=()=>{var r,t;const e=document.getElementById($r);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},ga=()=>{const{config:e,zoom:r,handleGoNext:t,handleGoPrev:n,handleGoToday:o,setZoom:s,goToDate:a,toggleDisplayActiveUnits:l,toolbarActions:u}=Ze(),{filterButtonState:c=-1}=e;return i.jsxs(aa,{width:0,children:[i.jsxs(Zr,{$at:"start",children:[i.jsxs(la,{children:[i.jsx(Vr,{onClick:n,"aria-label":"Anterior",children:i.jsx(Tt,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(da,{onClick:o,children:"Hoy"}),i.jsx(Vr,{onClick:t,"aria-label":"Siguiente",children:i.jsx(Tt,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),e.showViewSwitcher!==!1&&i.jsxs(i.Fragment,{children:[i.jsx(ca,{}),i.jsxs(ua,{children:[i.jsx("button",{className:r===2?"on":"",onClick:()=>s(2),children:"Día"}),i.jsx("button",{className:r===0?"on":"",onClick:()=>s(0),children:"Semana"}),i.jsx("button",{className:r===1?"on":"",onClick:()=>s(1),children:"Mes"})]})]}),e.showJumpToDate!==!1&&i.jsxs(fa,{children:[i.jsxs(Tt,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onClick:d=>{var f,v;try{(v=(f=d.currentTarget).showPicker)==null||v.call(f)}catch{}},onChange:d=>d.target.value&&a(d.target.value)})]})]}),i.jsxs(Zr,{$at:"end",children:[e.showFilterButton!==!1&&c>=0&&i.jsxs(Gr,{$primary:!!c,onClick:l,children:[i.jsx(Tt,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&i.jsx(ha,{children:c})]}),e.showFullscreenButton!==!1&&i.jsxs(Gr,{onClick:pa,children:[i.jsx(Tt,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),u]})]})},ma={add:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>oe.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),oe.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},In=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Ht(),a=ma[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},ya=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];x.button`
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
  ${({theme:e,variant:r,disabled:t})=>ya(e,r,t)}
`;const va=x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${Mr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ne};
`,xa=x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,ba=x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,wa=x.div`
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
`,Sa=x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,Ca=x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,ka=x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`,Ma=x.div`
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
`,$a=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,Da=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,Ea=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,_a=x.div`
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
`,Ur="#cdd8d2",Xr=[178,216,195],Ta=[15,125,102],Aa=e=>{const r=Math.min(1,Math.max(0,e)),t=n=>Math.round(Xr[n]+(Ta[n]-Xr[n])*r);return`rgb(${t(0)}, ${t(1)}, ${t(2)})`},Pa=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=Ze(),s=et(),a=h.useRef(null),[l,u]=h.useState(null),c=h.useMemo(()=>Array.from({length:12},(C,S)=>O().month(S).format("MMM").toUpperCase()),[s]),d=h.useMemo(()=>O().startOf("day"),[]),{domainStart:f,domainEnd:v,domainDays:k}=h.useMemo(()=>{const C=d.subtract(3,"month").startOf("month"),S=d.add(9,"month").endOf("month");return{domainStart:C,domainEnd:S,domainDays:S.diff(C,"day")+1}},[d]),b=C=>C.diff(f,"day")/k*100,$=C=>Math.min(100,Math.max(0,C)),y=h.useMemo(()=>{const C=[];let S=f.startOf("month");for(;S.isBefore(v);)C.push(S),S=S.add(1,"month");return C},[f,v]),I=o==null?void 0:o.yearCounts,X=h.useMemo(()=>{const C=Math.ceil(k/7),S=new Array(C).fill(0),j=Y=>{const z=Y.diff(f,"day");return z<0||z>=k?-1:Math.floor(z/7)};if(I&&I.length)for(const Y of I){const z=j(O(Y.date));z>=0&&(S[z]+=Y.count)}else for(const Y of t??[])for(const z of Y.data??[]){const re=j(O(z.startDate));re>=0&&(S[re]+=1)}const K=Math.max(0,...S);if(K<=0)return S.map(()=>({h:0,color:Ur}));const L=S.filter(Y=>Y>0).sort((Y,z)=>Y-z),A=L.length>>1,P=L.length%2?L[A]:(L[A-1]+L[A])/2,N=P>0?K/P:1,E=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,N)))));return S.map(Y=>Y>0?{h:Math.min(100,100*Math.pow(Y/K,E)),color:Aa(Y/K)}:{h:0,color:Ur})},[t,I,f,k]),Z=b(d),W=C=>{const{startDate:S,endDate:j}=Gt(C,r),K=$(b(S));return{left:K,width:$(b(j))-K,startDate:S,endDate:j}},p=W(e),g=l?W(l.d):null,w=C=>`${C.date()} ${c[C.month()]}`,_=C=>{var K;const S=(K=a.current)==null?void 0:K.getBoundingClientRect();if(!S)return null;const j=Math.min(1,Math.max(0,(C-S.left)/S.width));return{f:j,d:f.add(Math.round(j*(k-1)),"day")}};return i.jsxs(va,{children:[i.jsxs(xa,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(ba,{ref:a,onClick:C=>{const S=_(C.clientX);S&&n(S.d.toDate())},onMouseMove:C=>{const S=_(C.clientX);S&&u({left:S.f*100,d:S.d})},onMouseLeave:()=>u(null),children:[i.jsx(wa,{children:y.map((C,S)=>i.jsx("span",{style:{left:`${b(C)}%`},children:S===0||C.month()===0?`${c[C.month()]} ${C.format("YY")}`:c[C.month()]},S))}),y.map((C,S)=>S===0?null:i.jsx(Sa,{style:{left:`${b(C)}%`}},S)),i.jsx(Ca,{children:X.map((C,S)=>i.jsx(ka,{style:{height:`${C.h}%`,background:C.color}},S))}),i.jsx($a,{style:{left:`${p.left}%`,width:`${p.width}%`}}),i.jsx(Ma,{style:{left:`${$(Z)}%`},children:i.jsx("span",{children:"HOY"})}),l&&g&&i.jsxs(i.Fragment,{children:[i.jsx(Da,{style:{left:`${g.left}%`,width:`${g.width}%`}}),i.jsx(Ea,{style:{left:`${l.left}%`}}),i.jsx(_a,{style:{left:`${l.left}%`},children:`Ir a ${w(l.d)}`})]})]})]})},Kr=h.createContext(new Map),Oa=()=>h.useContext(Kr),Ia=10500,La=60,Ya=600,Na=e=>{var u;const r=document.getElementById(Ue),t=r==null?void 0:r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);if(!r||!t)return!1;const n=r.getBoundingClientRect(),o=(u=document.getElementById(br))==null?void 0:u.getBoundingClientRect(),s=t.getBoundingClientRect(),a=Math.max((o==null?void 0:o.bottom)??n.top,n.top,0),l=Math.min(n.bottom,window.innerHeight);return s.width>0&&s.right>n.left+Pe&&s.left<n.right&&s.bottom>a&&s.top<l},Fa=()=>{const[e,r]=h.useState(()=>new Map),t=h.useRef(0),n=h.useRef(new Set);h.useEffect(()=>{const s=n.current;return()=>s.forEach(clearTimeout)},[]);const o=h.useCallback(s=>{const a=s.filter(d=>Na(d.segmentId));if(!a.length)return[];const l=++t.current,u=new Map(a.map((d,f)=>[d.segmentId,{kind:d.kind,key:l,delayMs:Math.min(f*La,Ya)}]));r(d=>new Map([...Array.from(d),...Array.from(u)]));const c=setTimeout(()=>{n.current.delete(c),r(d=>{const f=new Map(d);return u.forEach((v,k)=>{var b;((b=f.get(k))==null?void 0:b.key)===l&&f.delete(k)}),f})},Ia);return n.current.add(c),a.map(d=>d.segmentId)},[]);return{pulses:e,pulseTiles:o}},Ba=x.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,za=x.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?Mr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Ha=x.div`
  position: relative;
`,Wa=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:u,onEventDrag:c,draggableConfig:d,schedulerRef:f,onTimeRangeSelect:v,onMultiTimeRangeSelect:k,clickToAddConfig:b})=>{const{goToDate:$,handleGoToday:y,zoomIn:I,zoomOut:X,zoom:Z}=Ze(),{pulses:W,pulseTiles:p}=Fa();return h.useImperativeHandle(f,()=>({goToDate:$,goToToday:y,setZoom:g=>{if(!Pr(g))return;const w=g-Z;if(w>0)for(let _=0;_<w;_++)I();else for(let _=0;_<Math.abs(w);_++)X()},pulseTiles:p}),[$,y,Z,I,X,p]),i.jsx(Kr.Provider,{value:W,children:i.jsx(ia,{data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:u,onEventDrag:c,draggableConfig:d,onTimeRangeSelect:v,onMultiTimeRangeSelect:k,clickToAddConfig:b})})},ja=h.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,onTileContextMenu:u,handleToggleDisplayActiveUnits:c,onClearFilterData:d,toolbarActions:f,onItemClick:v,isLoading:k,onEventDrop:b,onEventDrag:$,draggableConfig:y,onTimeRangeSelect:I,onMultiTimeRangeSelect:X,clickToAddConfig:Z},W){var E;const p=h.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),g=h.useRef(null),w=h.useRef(null),[_,C]=h.useState((E=g.current)==null?void 0:E.clientWidth),S=h.useMemo(()=>O(s),[s]),[j,K]=h.useState(p.defaultTheme??"light"),L=()=>{K(j==="light"?"dark":"light")},A=j==="light"?$s:Ds,P=p.theme?p.theme[A.mode]:{},N={...A,colors:{...A.colors,...P}};return h.useImperativeHandle(W,()=>({goToDate:Y=>{var z;return(z=w.current)==null?void 0:z.goToDate(Y)},goToToday:()=>{var Y;return(Y=w.current)==null?void 0:Y.goToToday()},setZoom:Y=>{var z;return(z=w.current)==null?void 0:z.setZoom(Y)},pulseTiles:Y=>{var z;return((z=w.current)==null?void 0:z.pulseTiles(Y))??[]}}),[]),h.useLayoutEffect(()=>{const Y=()=>{g.current&&C(g.current.clientWidth)};Y(),window.addEventListener("resize",Y);let z;const re=g.current;return re&&typeof ResizeObserver<"u"&&(z=new ResizeObserver(Y),z.observe(re)),()=>{window.removeEventListener("resize",Y),z==null||z.disconnect()}},[]),i.jsxs(i.Fragment,{children:[i.jsx(Ms,{}),i.jsx(ws,{theme:N,children:i.jsx(Ki,{lang:p.lang,translations:p.translations,children:i.jsx(fi,{data:r,isLoading:!!k,config:p,onRangeChange:a,defaultStartDate:S,handleToggleDisplayActiveUnits:c,onClearFilterData:d,toolbarActions:f,children:i.jsxs(Ba,{id:$r,children:[i.jsx(za,{showScroll:!!r.length,$footer:p.showOverview!==!1&&!!r.length,id:Ue,ref:g,children:i.jsx(Ha,{children:i.jsx(Wa,{data:r,baseData:n,categories:t,onTileClick:l,onTileContextMenu:u,topBarWidth:_??0,onItemClick:v,toggleTheme:L,onEventDrop:b,onEventDrag:$,draggableConfig:y,schedulerRef:w,onTimeRangeSelect:I,onMultiTimeRangeSelect:X,clickToAddConfig:Z})})}),p.showOverview!==!1&&!!r.length&&i.jsx(Pa,{})]})})})})]})}),Za=x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,Va=x.button`
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
`,Ga=x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ua=x.p`
  ${ft}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Jr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=et(),u=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(Za,{intent:e,children:i.jsxs(Va,{onClick:r,isVisible:n,children:[t&&i.jsx(Ga,{children:t}),i.jsx(Ua,{children:u})]})})},Xa=x.div`
  min-width: ${Pe+"px"};
  max-width: ${Pe+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Ka=x.div`
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
`,Ja=x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,qa=x.input`
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
`,Qa=x.div`
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
`,Ra=Ye`
  from { opacity: 1; }
  to { opacity: 0; }
`,Ln=x.div`
  ${({$fading:e})=>e&&ot`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Ra} 180ms ease forwards;
      }
    `}
`,ec=x.button`
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
`,tc=Ye`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,nc=x.div`
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
    animation: ${tc} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,rc=x.div`
  display: flex;
  align-items: center;
`,oc=x.div`
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
`,sc=x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,ic=x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,qr=x.p`
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
`,ac=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`,cc=x.span`
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
`,lc=x.span`
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
`,dc=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),uc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[i.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),i.jsx("path",{d:"M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z"}),i.jsx("circle",{cx:"16.8",cy:"8.6",r:"2.5"}),i.jsx("path",{d:"M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8"})]}),fc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),hc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),pc=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(nc,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(rc,{children:[i.jsx(oc,{$provider:o,children:dc(r.icon)?i.jsx(sc,{src:r.icon,alt:""}):o?i.jsx(hc,{}):i.jsx(fc,{})}),i.jsxs(ic,{children:[i.jsx(qr,{isMain:!0,children:r.title}),r.capacity!=null||r.plate?i.jsxs(ac,{children:[r.capacity!=null&&i.jsxs(cc,{title:`${r.capacity} pasajeros`,children:[i.jsx(uc,{}),r.capacity]}),r.plate&&i.jsx(lc,{title:r.plate,children:r.plate})]}):r.subtitle&&i.jsx(qr,{children:r.subtitle})]})]})}),gc=Ye`
  0% { box-shadow: 0 0 0 0 var(--attention-ring); }
  70%, 100% { box-shadow: 0 0 0 5px transparent; }
`,mc=x.div`
  display: flex;
  align-items: center;
  gap: ${({$tone:e})=>e?"4px":"5px"};
  padding: ${({$tone:e})=>e?"0 7px 0 9px":"0 11px 0 9px"};
  height: 21px;
  color: ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.unassignedText:r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  background: ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.unassignedBorder+"26":r==="subcontract"?e.colors.subcontractBorder+"24":"#E9EFEC"};
  border-left: 3px solid
    ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.unassignedBorder:r==="subcontract"?e.colors.subcontractBorder:"transparent"};
  border-bottom: 1px solid
    ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.unassignedBorder+"66":r==="subcontract"?e.colors.subcontractBorder:"#D4DFD9"};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.unassignedBorder+"38":r==="subcontract"?e.colors.subcontractBorder+"33":"#DAE6E0"};
  }
`,yc=x.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: ${({$tone:e})=>e?"0.03em":"0.07em"};
  text-transform: uppercase;
  color: ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.unassignedText:r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,vc=x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  flex-shrink: 0;
`,xc=x.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 15px;
  padding: 0 5px 0 4px;
  border-radius: 8px;
  font-size: 9.5px;
  font-weight: 750;
  line-height: 1;
  flex-shrink: 0;
  color: ${({theme:e,$tone:r})=>r==="warning"?e.mode==="dark"?"#1C1917":"#FFFFFF":"#2E8B63"};
  background: ${({theme:e,$tone:r})=>r==="warning"?e.mode==="dark"?e.colors.unassignedBorder:e.colors.unassignedText:"#2E8B6324"};
  --attention-ring: ${({theme:e})=>e.colors.unassignedBorder}99;
  ${({$pulse:e})=>e&&ot`
      animation: ${gc} 1.8s ease-out infinite;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
`,bc=x.div`
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
`,Yn=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>{const s=o==="unassigned"?r===0?"ok":"warning":void 0;return i.jsxs(mc,{$variant:o,$tone:s,onClick:n,title:e,children:[i.jsx(bc,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(yc,{$variant:o,$tone:s,children:e}),s?i.jsxs(xc,{$tone:s,$pulse:s==="warning"&&t,children:[i.jsx("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:s==="ok"?i.jsx("path",{d:"M2.5 6.5L5 9L9.5 3.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M6 1.5L11 10.5H1L6 1.5Z",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),i.jsx("path",{d:"M6 5V7.2",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"}),i.jsx("circle",{cx:"6",cy:"8.9",r:"0.75",fill:"currentColor"})]})}),r]}):i.jsx(vc,{$variant:o,children:r})]})},wc=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:u,onSearchInputChange:c,onItemClick:d,collapsedGroups:f,fadingGroups:v,onToggleGroup:k,allGroupIds:b,onExpandAll:$,onCollapseAll:y,unassignedCount:I})=>{const[X,Z]=h.useState(!1),W=et(),p=()=>Z(E=>!E),g=r?[...r].sort((E,Y)=>E.maxPassengers-Y.maxPassengers):[],w=g.length>0,_=b.length>0,C=_&&f.size===b.length;_&&f.size;const S=e.filter(E=>E.isUnassigned),j=W.unassigned??"No unit assigned",K=e.filter(E=>E.isSubcontract),L=W.subcontract??"Subcontract",A=E=>{const Y=e.indexOf(E);return i.jsx(pc,{id:E.id,item:E.label,rows:n[Y],onItemClick:d,isSubcontract:E.isSubcontract},E.id)},P=E=>{const Y=e.filter(B=>!B.isSubcontract&&B.categoryId===E.id);if(Y.length===0)return null;const z=f.has(E.id),re=v.has(E.id),ee=E.name;return i.jsxs("div",{children:[i.jsx(Yn,{label:ee,count:Y.length,isCollapsed:z||re,onToggle:()=>k(E.id),variant:"category"}),!z&&i.jsx(Ln,{$fading:re,children:Y.map(A)})]},E.id)},N=e.filter(E=>!E.isSubcontract&&!E.isUnassigned&&(!E.categoryId||!w));return i.jsxs(Xa,{children:[i.jsxs(Ka,{$height:t,children:[i.jsxs(Ja,{children:[i.jsxs(Qa,{isFocused:X,children:[i.jsx(qa,{placeholder:W.search,value:u,onChange:c,onFocus:p,onBlur:p}),i.jsx(In,{iconName:"search"})]}),_&&i.jsx(ec,{title:C?"Expand all":"Collapse all",onClick:C?$:y,$allCollapsed:C,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:C?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(Jr,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(In,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),S.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Yn,{label:j,count:I,isCollapsed:f.has("__unassigned__")||v.has("__unassigned__"),onToggle:()=>k("__unassigned__"),variant:"unassigned"}),!f.has("__unassigned__")&&i.jsx(Ln,{$fading:v.has("__unassigned__"),children:S.map(A)})]}),w?g.map(P):N.map(A),w&&N.length>0&&N.map(A),K.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Yn,{label:L,count:K.length,isCollapsed:f.has("__subcontract__")||v.has("__subcontract__"),onToggle:()=>k("__subcontract__"),variant:"subcontract"}),!f.has("__subcontract__")&&i.jsx(Ln,{$fading:v.has("__subcontract__"),children:K.map(A)})]}),i.jsx(Jr,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(In,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},Sc=x.div`
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
`,Cc=Ye`
from{
    left: -100%;
}
to{
    left: 100%;
}`,kc=x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Cc} 1s infinite;
`,Nn=({isLoading:e,position:r})=>e?i.jsx(Sc,{position:r,children:i.jsx(kc,{})}):null,Xe=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:u,font:c,isBottomRow:d,fillStyle:f,topText:v,bottomText:k,strokeStyle:b,labelBetweenCells:$}=e;t.beginPath();const y=b??(r.mode==="dark"?r.colors.border:"#E4EAE7");if(t.strokeStyle=y,t.setLineDash([]),u&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),$?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):(t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke()),t.font=c;const I=n+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=r.mode==="dark"?r.colors.textPrimary:"#183D3D",t.fillText(u,I,l)}if(d&&f&&v&&k){t.fillStyle=f,t.fillRect(n,o,s,a),t.beginPath(),t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke(),t.font=v.font;const I=n+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,I,v.y),t.font=k.font;const X=n+s/2-t.measureText(k.label).width/2;t.fillStyle=k.color,t.fillText(k.label,X,k.y)}},Mc=(e,r,t,n,o=at)=>{const s=je+o,a=s+13,l=s+27;let u=0;for(let c=0;c<r;c++){const d=_r(O(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"days")),f=d.isCurrentDay;if(Xe({ctx:e,x:u,y:s,width:Ce,height:ht,isBottomRow:!0,fillStyle:f?n.colors.currentDay:n.colors.gridBackground,topText:{y:a,label:f?"":d.dayName.replace(/\./g,"").toUpperCase(),font:`600 10px ${Ne}`,color:n.mode==="dark"?n.colors.placeholder:"#74897F"},bottomText:{y:l,label:`${d.dayOfMonth}`,font:f?`700 12px ${Ne}`:`700 13px ${Ne}`,color:f?n.colors.today:n.mode==="dark"?n.colors.textPrimary:"#183D3D"}},n),f){const b=u+Ce/2,$=a-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(b-30/2,$,30,13,5):e.rect(b-30/2,$,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ne}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",b,$+13/2+.5),e.restore()}u+=Ce}},$c=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*ze;const s=je;let l=t.month;for(let u=0;u<r;u++){l>=xr&&(l=0);const c=Er(t,u)*ze;Xe({ctx:e,x:o,y:s,width:c,height:at,textYPos:Cr,label:O().month(l).format("MMMM").toUpperCase(),font:Qe.bottomRow.number},n),o+=c,l++}},Dc=" ".repeat(98),Ec=(e,r,t)=>{const o=O(`${r.year}-${r.month+1}-${r.dayOfMonth}`);let s=-r.dayOfMonth*Ce+Ce;for(let a=0;a<xr;a++){const l=o.add(a,"months"),u=l.daysInMonth()*Ce,c=l.format("MMMM YYYY").toUpperCase();Xe({ctx:e,x:s,y:0,width:u,height:je,textYPos:pn,label:`${c}${Dc}${c}`,font:`800 12px ${Ne}`},t),s+=u}},_c=(e,r,t,n)=>{const o=7*Ce,s=je,a=e.canvas.width/o+o,l=r.weekOfYear;let u=0;for(let c=0;c<a;c++){const d=O(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let f=(l+c)%vr;f<=0&&(f+=vr),d!==1&&c===0&&(u=-d*Ce+Ce),Xe({ctx:e,x:u,y:s,width:o,height:at,textYPos:Cr,label:`${t.toUpperCase()} ${f}`,font:Qe.middleRow},n),u+=o}},Tc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},Ac=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},Pc=(e,r,t,n,o)=>{const s=Wt-ht/1.6,a=Wt-ht/4.5,l=je+at;let u=0;for(let c=0;c<r;c++){const d=O(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),f=d.isSame(O(),"week");Xe({ctx:e,x:u,y:l,width:pt,height:ht,isBottomRow:!0,fillStyle:f?o.colors.today+"26":Tc({isCurrent:f,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:f?`700 14px ${Ne}`:Qe.bottomRow.name,color:f?o.colors.today:Ac({isCurrent:f},o)},bottomText:{y:a,label:n.toUpperCase(),font:Qe.middleRow,color:o.colors.placeholder}},o),u+=pt}},Oc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,u=0,c=(Dr(s)-t+1)*ze,d=0;for(;l+d<=a;)u>0&&(c=Dr(s+u)*ze),d+c>a&&u>0&&(c=Math.ceil((a-d)/ze)*ze),Xe({ctx:e,x:l,y:0,width:c,height:je,textYPos:pn,label:(s+u).toString(),font:Qe.topRow},n),l+=c,d+=c,u++},Ic=(e,r,t,n)=>{const o=Math.floor(r/jt)+2,s=jt*Te;let u=-O(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Te+.5*Te;for(let c=0;c<o;c++){const d=O(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Xe({ctx:e,x:u,y:gt,width:s,height:Et,textYPos:gt+Et/2+2,label:d,font:Qe.bottomRow.number},n),u+=s}},Lc=(e,r,t,n)=>{const o=Math.ceil(r/jt),s=O(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),u=a.add(1,"day").month(),c=l===u?1:2;let d=.5*Te;for(let f=0;f<c;f++){const v=O(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),b=O(`${t.year}-${t.month+f+1}-01T:23:59:59`).endOf("month"),$=b.format("MMMM").toUpperCase(),y=b.diff(v,"hour")+1,I=f===0?y*Te:r*Te;Xe({ctx:e,x:d,y:0,width:I,height:gt,textYPos:pn,label:$,font:Qe.topRow},n),d+=I}},Yc=(e,r,t,n)=>{let o=0;const s=gt+Et,a=O(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=Te;for(let u=0;u<r;u++){const c=a.add(u,"hours").format("h:00a").toUpperCase();Xe({ctx:e,x:o,y:s,width:l,height:hn,label:c,font:Qe.bottomRow.hoursInDay,textYPos:gt+Et+hn/2+2,labelBetweenCells:!0},n),o+=Te}},Nc=(e,r,t,n,o,s,a,l=!0)=>{switch(r){case 0:Oc(e,n,s,a),$c(e,t,n,a),Pc(e,t,n,o,a);break;case 1:Ec(e,n,a),l&&_c(e,n,o,a),Mc(e,t,n,a,l?at:0);break;case 2:Lc(e,t,n,a),Ic(e,t,n,a),Yc(e,t,n,a);break}},Fc=x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,Bc=x.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,zc=x.div`
  height: ${({$height:e})=>e??Wt}px;
  display: block;
`,Hc=x.canvas``,Wc={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},Fe=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Wc[e]}),jc=x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Pe+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Qr=x.span`
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
`,Xt=x.span`
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
`,Zc=x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,Vc=x.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,Gc=x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,Uc=x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,Xc=x.span`
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
`,Kc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Jc=()=>i.jsxs(jc,{children:[i.jsx(Qr,{children:"Leyenda"}),i.jsxs(Xt,{children:[i.jsx(Fe,{name:"transfer"})," Transfer"]}),i.jsxs(Xt,{children:[i.jsx(Fe,{name:"sun"})," Gira 1 día"]}),i.jsxs(Xt,{children:[i.jsx(Fe,{name:"tour"})," Gira multidía"]}),i.jsxs(Xt,{children:[i.jsx(Zc,{children:"SUB"})," Subcontrato"]}),i.jsx(Vc,{}),i.jsxs(Qr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),Kc.map(e=>i.jsxs(Gc,{children:[i.jsx(Uc,{style:{background:e.stripe}}),i.jsx(Xc,{style:{color:e.color},children:i.jsx(Fe,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),qc=h.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=et(),{date:l,cols:u,dayOfYear:c,startDate:d,config:f}=Ze(),v=h.useRef(null),k=Ht(),b=f.showWeekRow!==!1,$=r===2?Es:r===1&&!b?je+ht:Wt,y=h.useCallback(I=>{const X=$n(),Z=$+1;Ir(I,X,Z),Nc(I,r,u,d,a,c,k,b)},[u,c,d,a,r,k,b,$]);return h.useEffect(()=>{if(!v.current)return;const I=v.current.getContext("2d");if(!I)return;const X=()=>y(I);return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[y]),h.useEffect(()=>{const I=v.current;if(!I)return;I.style.letterSpacing="1px";const X=I.getContext("2d");X&&y(X)},[l,r,y]),i.jsxs(Fc,{ref:s,children:[(f.showTopbar!==!1||f.showLegend!==!1)&&i.jsxs(Bc,{$width:t,children:[f.showTopbar!==!1&&i.jsx(ga,{width:t,showThemeToggle:n,toggleTheme:o}),f.showLegend!==!1&&i.jsx(Jc,{})]}),i.jsx(zc,{$height:$,id:br,children:i.jsx(Hc,{ref:v})})]})}),Qc=(e,r,t)=>{let n;switch(t){case 0:n=ze;break;case 2:n=Te;break;default:n=Ce}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),u=r.endDate.startOf("day"),c=()=>{let d;switch(t){case 2:d=(e.startDate.diff(r.startDate,"minute")/Me+1)*n-n/2;break;default:d=s.diff(l,"day")*n}return Math.max(0,d)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/Me*n,50);break;default:d=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:d}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(r.startDate,"minute")/Me*n+.5*n,50);break;default:d=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:d}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let d;switch(t){case 2:d=Math.max(r.endDate.diff(e.startDate,"minute")/Me*n,50);break;default:d=Math.max(u.diff(s,"day")*n+n,50)}return{x:c(),width:d}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let d;switch(t){case 2:d=Math.max(r.endDate.diff(r.startDate,"minute")/Me*n,50);break;default:d=Math.max(u.diff(l,"day")*n+n,50)}return{x:c(),width:d}}return{x:c(),width:50}},Rc=(e,r,t,n,o,s)=>{const a=e*he+_s,l=r.hour(),u=t.hour();let c,d,f,v;switch(s){case 2:{c=O(n),d=O(o),f=O(r).hour(l).minute(0),v=O(t).hour(u).minute(0);break}default:{c=O(n).hour(0).minute(0),d=O(o).hour(23).minute(59),f=r,v=t;break}}return{...Qc({startDate:c,endDate:d},{startDate:f,endDate:v},s),y:a}},Rr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},eo={sin_chofer:{icon:"warn",color:"#9AA4B2",label:"Sin chofer"},sin_avisar:{icon:"warn",color:"#D98A22",label:"No notificado al chofer"},programado:{icon:"warn",color:"#C2A878",label:"Notificación programada"},notificado:{icon:"clock",color:"#2C6BB0",label:"Notificado"},confirmado:{icon:"check",color:"#2E8B63",label:"Confirmado"}},el={confirmed:{icon:"check",color:"#2E8B63",label:"Subcontrato confirmado"},unconfirmed:{icon:"clock",color:"#D98A22",label:"Subcontrato sin confirmar"}};x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,x.p`
  ${ft}
  ${it}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const tl=Ye`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,nl=Ye`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,rl=x.button`
  ${ft}
  position: absolute;
  height: ${Zt}px;
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
  cursor: ${({isDraggable:e,isDragging:r})=>e?r?"grabbing":"grab":"not-allowed"};
  opacity: ${({isDragging:e})=>e?.3:1};
  transition: opacity 0.2s ease;
  /* Motion (gated on reduced-motion): fade/scale a newly-mounted tile in, fade a removed one out, and a subtle lift
     on hover. Only transform/opacity/box-shadow are transitioned — NOT top: transitioning top animated a LAYOUT
     property on every displaced tile on unit add/remove (reflow+paint per frame across many nodes = the reported
     lag), and it made the tiles glide while the canvas grid lane snaps. Tiles now snap to their new row in lockstep
     with the canvas; the enter/exit fades + the left-column rowIn carry the motion. */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${tl} 180ms ease-out;
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
  ${({$exiting:e})=>e&&ot`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${nl} 190ms ease-out forwards;
      }
    `}
  /* A pulsing tile's flare and rings reach past its edges; lift it so neighbours don't cover them. */
  ${({$pulsing:e})=>e&&"z-index: 8;"}
  /* Persistent green highlight for the event focused from a warning: a bold green ring + glow + an inset green wash
     over the tile bg (below the text, which stays readable). Lifted above neighbours so the ring isn't clipped. */
  ${({$highlighted:e})=>e&&`z-index: 9;
     box-shadow: 0 0 0 3px #0F7D66, 0 0 16px 3px rgba(15, 125, 102, 0.55), inset 0 0 0 200px rgba(15, 125, 102, 0.3);`}
  /* Focus-mode: rows outside the focused set fade back and go inert. */
  ${({$dimmed:e})=>e&&"opacity: 0.26; filter: grayscale(0.45); pointer-events: none;"}
  /* Focus-mode: a blocking service that will vacate the target unit — amber dashed outline, faded. */
  ${({$leaving:e})=>e&&"opacity: 0.74; filter: grayscale(0.2); outline: 2px dashed #D98A22; outline-offset: -2px; z-index: 7;"}
`,ol=x.div`
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
`,to=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,sl=x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,il=x.span`
  ${it}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,al=x.span`
  ${it}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,cl=x.span`
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
`,ll=x.div`
  ${it}
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
`,no=x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,ro=x.span`
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
`,oo=x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Fn={confirmed:{ring:"#2E8B63",glow:"rgba(46, 139, 99, 0.45)"},notified:{ring:"#2C6BB0",glow:"rgba(44, 107, 176, 0.45)"},lost:{ring:"#C6483D",glow:"rgba(198, 72, 61, 0.45)"}},dl=Ye`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`,ul=Ye`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`,fl=Ye`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`,hl=Ye`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`,pl=x.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({$kind:e})=>Fn[e].ring};
  --pulse-glow: ${({$kind:e})=>Fn[e].glow};
  animation:
    ${dl} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${ul} 9600ms linear var(--pulse-delay, 0ms) both;
`,gl=x.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({$kind:e})=>Fn[e].ring};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${fl} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border-radius: 50%;
      border: 1.5px solid var(--pulse-ring);
      opacity: 0;
      pointer-events: none;
      animation: ${hl} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`,ml=x.div`
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
`,so=x.span`
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
`,yl=Ye`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`,vl=x.div`
  position: absolute;
  height: ${Zt}px;
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
    animation: ${yl} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`,xl=x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`,bl=x.div`
  ${it}
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
`,wl=x.div`
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
`,Sl=x.span`
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
`,Cl=x.span`
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
`,kl=34,Bn=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onTileContextMenu:s,onDragStart:a,isDragging:l=!1,isDraggable:u=!0,yOffset:c=0,exiting:d=!1,highlighted:f=!1,dimmed:v=!1,leaving:k=!1,ghost:b=!1,ghostBadge:$="",pulse:y})=>{const{date:I}=Ze(),X=Gt(I,t),{y:Z,x:W,width:p}=Rc(e,X.startDate,X.endDate,r.startDate,r.endDate,t),{colors:g}=Ht(),w=h.useRef(null),_=O(r.startDate).isSame(O(r.endDate),"day"),C=r.eventType===_t.Tour,S=r.eventType===_t.Transfer,j=_&&(C||S);if(b)return i.jsxs(vl,{style:{left:`${W}px`,top:`${Z+c}px`,width:`${p}px`},children:[i.jsxs(xl,{children:[i.jsxs(bl,{children:[i.jsx(Fe,{name:S?"transfer":"tour"}),r.title]}),i.jsxs(wl,{children:[i.jsx(Fe,{name:"check",strokeWidth:2.6}),"flota propia"]})]}),$&&i.jsx(Sl,{children:$})]});const K=ee=>{ee.button===0&&(w.current={x:ee.clientX,y:ee.clientY},u&&a&&(ee.preventDefault(),a(r,ee)))},L=ee=>{s&&(ee.preventDefault(),s(r,{x:ee.clientX,y:ee.clientY}))},A=ee=>{if(w.current){const B=Math.abs(ee.clientX-w.current.x),F=Math.abs(ee.clientY-w.current.y);Math.sqrt(B*B+F*F)<=5&&(o==null||o(r)),w.current=null}else o==null||o(r)},P={left:`${W}px`,top:`${Z+c}px`,backgroundColor:`${r.bgColor??g.defaultTile}`,width:`${p}px`,color:Rr(r.bgColor??"")},N=!n&&r.readiness?eo[r.readiness]:null,E=n&&r.subcontractConfirmed===!1,Y=y?{"--pulse-delay":`${y.delayMs}ms`}:void 0,z=ee=>y?i.jsx(gl,{$kind:y.kind,style:Y,children:ee},`${y.key}-${r.readiness??""}-${String(r.subcontractConfirmed)}`):ee,re=ee=>i.jsxs(rl,{"data-segment-id":r.segmentId,style:P,onClick:A,onMouseDown:K,onContextMenu:L,onDragStart:B=>B.preventDefault(),isDraggable:u,isDragging:l,$unconfirmed:E,$exiting:d,$highlighted:f,$dimmed:v,$leaving:k,$pulsing:!!y,children:[y&&i.jsx(pl,{$kind:y.kind,style:Y,"aria-hidden":!0},y.key),k&&i.jsx(Cl,{children:"Sub"}),ee]});return re(j?i.jsxs(i.Fragment,{children:[(n||N)&&i.jsx(no,{$sm:!0,children:z(n?i.jsx(oo,{children:"SUB"}):N&&i.jsx(ro,{$sm:!0,style:{color:N.color},children:i.jsx(Fe,{name:N.icon,strokeWidth:N.icon==="check"?2.6:2.2})}))}),i.jsxs(ml,{$transfer:S,children:[i.jsx(Fe,{name:S?"transfer":"sun",strokeWidth:2.4}),p>=kl&&i.jsxs(i.Fragment,{children:[i.jsx(so,{children:O(r.startDate).format("h:mm A")}),!S&&i.jsx(so,{$end:!0,children:O(r.endDate).format("h:mm A")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(no,{children:(n||N)&&z(n?i.jsx(oo,{children:"SUB"}):N&&i.jsx(ro,{style:{color:N.color},children:i.jsx(Fe,{name:N.icon,strokeWidth:N.icon==="check"?2.6:2.2})}))}),r.bookingNumber&&i.jsx(cl,{children:r.bookingNumber}),i.jsxs(ol,{children:[i.jsxs(to,{$pad:!0,children:[i.jsx(sl,{children:i.jsx(Fe,{name:S?"transfer":"tour"})}),i.jsx(il,{children:r.title})]}),r.subtitle&&i.jsx(to,{children:i.jsx(al,{children:r.subtitle})}),r.driver&&i.jsxs(ll,{children:[i.jsx(Fe,{name:"person"}),r.driver]})]})]}))},io=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Le},Ml=e=>({segmentId:e.segmentId,reservationId:e.reservationId,startDate:e.startDate,endDate:e.endDate,occupancy:0,title:e.title,bookingNumber:"",eventType:e.eventType}),$l=({data:e,zoom:r,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDraggable:s,draggingEventId:a,separatorRowIndices:l=[],fadingUnitIds:u,highlightedSegmentId:c,focusedUnitIds:d,leavingSegmentIds:f,ghostProject:v})=>{const k=Oa(),{nodes:b,liveMap:$}=h.useMemo(()=>{const g=new Map,w=!!d&&d.length>0;let _=0;return{nodes:e.map((S,j)=>{j>0&&(_+=Math.max(e[j-1].data.length,1));const K=!!(u!=null&&u.has(S.id)),L=w&&!d.includes(S.id),A=io(_,l),P=v&&S.id===v.targetUnitId?i.jsx(Bn,{row:_,data:Ml(v),zoom:r,yOffset:A,isDragging:!1,isDraggable:!1,ghost:!0,ghostBadge:v.badge},`ghost-${S.id}`):null;if(!S.data.some(E=>E.length>0))return P?[P]:[];const N=S.data.map((E,Y)=>E.map(z=>{const re=a===z.segmentId,ee=s?s(z):!1,B=Y+_,F=io(B,l);return g.set(z.segmentId,{project:z,absoluteRow:B,yOffset:F,isSubcontract:!!S.isSubcontract,faded:K}),i.jsx(Bn,{row:B,data:z,zoom:r,isSubcontract:S.isSubcontract,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDragging:re,isDraggable:ee,yOffset:F,exiting:K,highlighted:c!=null&&z.segmentId===c,dimmed:L,leaving:!!(f!=null&&f.includes(z.segmentId)),pulse:k.get(z.segmentId)},z.segmentId)}));return P?[...N,[P]]:N}).flat(2),liveMap:g}},[e,t,n,r,o,s,a,l,u,c,d,f,v,k]),y=h.useRef(new Map),I=h.useRef([]),[X,Z]=h.useState([]);h.useEffect(()=>()=>I.current.forEach(clearTimeout),[]),h.useEffect(()=>{const g=y.current;y.current=$;const w=[];if(g.forEach((S,j)=>{!$.has(j)&&!S.faded&&w.push(S)}),Z(S=>{let j=S.filter(K=>!$.has(K.project.segmentId));for(const K of w)j.some(L=>L.project.segmentId===K.project.segmentId)||(j=[...j,K]);return j}),!w.length)return;const _=new Set(w.map(S=>S.project.segmentId)),C=setTimeout(()=>{Z(S=>S.filter(j=>!_.has(j.project.segmentId)))},220);I.current.push(C)},[$]);const W=[];y.current!==$&&y.current.forEach((g,w)=>{!$.has(w)&&!g.faded&&!X.some(_=>_.project.segmentId===w)&&W.push(g)});const p=[...X,...W].filter(g=>!$.has(g.project.segmentId)).map(g=>i.jsx(Bn,{row:g.absoluteRow,data:g.project,zoom:r,isSubcontract:g.isSubcontract,yOffset:g.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},g.project.segmentId));return i.jsx(i.Fragment,{children:[...b,...p]})};x.div`
  box-sizing: border-box;
  font-family: ${Ne};
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({isExpanded:e})=>e?0:"-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`,x.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`,x.label`
  font-size: 14px;
`,x.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`,x.input`
  height: 18px;
  width: 18px;
`,x.button`
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
`,x.form`
  background-color: rgba(255, 255, 255, 0.75);
`;const Dl=x.div`
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
`,El=x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,_l=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,Tl=x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Al=x.span`
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
`,ao=x.div`
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
`,Pl=x.div`
  ${ft}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ol=x.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,Il=x.div`
  padding: 10px 12px;
`,Ll=x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,co=x.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,lo=x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,uo=x.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,fo=x.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,ho=x.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Yl=x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Nl=x.div`
  min-width: 0;
`,Fl=x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Bl=x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,po=x.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,At=x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Pt=x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Ot=x.div`
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
`;x.div``,x.span``,x.span``,x.div``,x.div``,x.span``,x.span``,x.div``,x.div``,x.span``,x.span``,x.div``,x.div``,x.div``,x.span``,x.div``,x.div``,x.div``,x.div``,x.p``,x.span``;const zl={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Hl=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=h.useRef(null),[s,a]=h.useState("below"),l=et(),u={...zl,...l.tooltip};h.useLayoutEffect(()=>{if(!o.current||!t)return;const y=o.current,{width:I,height:X}=y.getBoundingClientRect(),Z=y.parentElement;if(!Z)return;const W=Z.getBoundingClientRect(),p=12,g=4,w=W.height-t.y,_=W.width-t.x;let C=t.x+p,S=t.y+p,j="below";_<I+p&&(C=t.x-I-p),w<X+p&&(S=t.y-X-p,j="above"),C=Math.max(g,Math.min(C,W.width-I-g)),S=Math.max(g,Math.min(S,W.height-X-g)),a(j),y.style.left=`${C}px`,y.style.top=`${S}px`},[t]);const c=n.reservationType===_t.Tour,d=c&&n.isOneDayEvent,f=c?d?"sun":"tour":"transfer",v=c?d?u.oneDay:u.tour:u.transfer,k=n.readiness?eo[n.readiness]:null,b=n.subcontractConfirmed===void 0?null:el[n.subcontractConfirmed?"confirmed":"unconfirmed"],$=[...n.subcontractConfirmed?n.subcontractDetails??[]:[],n.groupName&&{label:u.groupName,value:n.groupName},n.driver&&{label:u.driver,value:n.driver},n.passengers&&{label:u.passengers,value:String(n.passengers)},n.flightNumber&&{label:u.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(Dl,{ref:o,$position:s,$visible:r,children:[i.jsxs(El,{children:[i.jsxs(_l,{children:[i.jsx(Tl,{children:n.bookingNumber}),i.jsxs(Al,{children:[i.jsx(Fe,{name:f,strokeWidth:2.4}),v]})]}),i.jsx(Pl,{children:n.eventName}),n.client&&i.jsx(Ol,{children:n.client}),k&&i.jsxs(ao,{style:{color:k.color},children:[i.jsx(Fe,{name:k.icon,strokeWidth:k.icon==="check"?2.6:2.2}),n.readinessNote||k.label]}),b&&i.jsxs(ao,{style:{color:b.color},children:[i.jsx(Fe,{name:b.icon,strokeWidth:b.icon==="check"?2.6:2.2}),b.label]})]}),i.jsxs(Il,{children:[i.jsxs(Ll,{children:[i.jsxs(co,{children:[i.jsx(lo,{children:u.startDate}),i.jsxs(uo,{children:[i.jsx(fo,{children:n.startDate}),i.jsx(ho,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(co,{$isEnd:!0,children:[i.jsx(lo,{children:u.endDate}),i.jsxs(uo,{children:[i.jsx(fo,{children:n.endDate}),i.jsx(ho,{children:n.endTime})]})]})]}),$.length>0&&i.jsx(Yl,{children:$.map((y,I)=>i.jsxs(Nl,{children:[i.jsx(Fl,{children:y.label}),i.jsx(Bl,{children:y.value})]},I))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(po,{children:[n.departureAddress&&i.jsxs(At,{children:[i.jsx(Pt,{children:u.salida}),i.jsx(Ot,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(At,{children:[i.jsx(Pt,{children:u.destino}),i.jsx(Ot,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(At,{children:[i.jsx(Pt,{children:u.regreso}),i.jsx(Ot,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(po,{children:[n.serviceNotes&&i.jsxs(At,{children:[i.jsx(Pt,{children:u.serviceNotes}),i.jsx(Ot,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(At,{children:[i.jsx(Pt,{children:u.reservationNotes}),i.jsx(Ot,{children:n.reservationNotes})]})]})]})]})};x.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,x.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,x.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`;const Wl=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,jl=x.div`
  position: absolute;
  height: ${Zt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,Zl=x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,go=x.p`
  ${ft}
  ${it}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Vl=x.p`
  ${ft}
  ${it}
`,Gl=x.div`
  position: sticky;
  left: ${Pe+16}px;
  overflow: hidden;
`,Ul=x.div`
  position: absolute;
  height: ${Zt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Xl=x.div`
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
`,Kl=x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Jl=x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,ql=x.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,mo=x.div`
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
`,yo=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,vo=x.div`
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
`,xo=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,zn=x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Hn=x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,xt=x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,bo=x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,Ql=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:u=[]})=>{const c=et(),d=W=>{let p=0;for(const g of u)g<=W&&p++;return W*he+p*Le},[f,v]=h.useState(null),[k,b]=h.useState(0),$=h.useCallback((W=400,p=300)=>{const w=t.width,_=48,C=document.getElementById("react-scheduler");if(!C)return{x:r.x+w+16,y:r.y};const S=C.scrollLeft,j=C.scrollTop,K=C.clientWidth,L=C.clientHeight,A=r.x-S,P=r.y-j,N={left:Pe+16,right:K-16,top:16,bottom:L-16},E=N.right-(A+w),Y=A-N.left,z=N.bottom-(P+_),re=P-N.top;let ee,B;return E>=W+16?ee=A+w+16:Y>=W+16?ee=A-W-16:E>=Y?(ee=A+w+16,ee+W>N.right&&(ee=N.right-W)):(ee=A-W-16,ee<N.left&&(ee=N.left)),z>=p+16?B=P+_+16:re>=p+16?B=P-p-16:z>=re?(B=P+_+16,B+p>N.bottom&&(B=N.bottom-p)):(B=P-p-16,B<N.top&&(B=N.top)),ee=Math.max(N.left,Math.min(ee,N.right-W)),B=Math.max(N.top,Math.min(B,N.bottom-p)),{x:ee+S,y:B+j}},[r.x,r.y,t.width]);h.useEffect(()=>{s==="dragging"&&e&&k===0?b(r.x):s==="idle"&&b(0)},[s,e,r.x,k]),h.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const y=h.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const W=[];let p=0;for(const g of a){const w=Math.max(g.data.length,1);if(g.capacity!==void 0&&e.totalPassengers>g.capacity)for(let _=0;_<w;_++)W.push(p+_);p+=w}return W},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const I=s==="animating",X=Rr(e.bgColor??""),Z=()=>{if(!n)return"";const W=O(n.startDate).format("MMM D, HH:mm"),p=O(n.endDate).format("HH:mm");return`${W} - ${p}`};return i.jsxs(Wl,{children:[y.map(W=>i.jsx(Jl,{style:{top:`${d(W)}px`,height:`${he}px`}},W)),n&&s==="dragging"&&i.jsx(Kl,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${d(n.resourceIndex)}px`,height:`${he}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(Ul,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${d(n.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),i.jsx(Xl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${d(n.resourceIndex)+(he-48)/2}px`},children:Z()})]}),n&&s==="dragging"&&l&&i.jsx(ql,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${d(n.resourceIndex)}px`,height:`${he}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const W=$(400,300);return i.jsxs(mo,{style:{left:`${W.x}px`,top:`${W.y}px`},children:[i.jsxs(yo,{children:[i.jsx(vo,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(xo,{children:n.conflicts.map((p,g)=>{const w=O(n.startDate).format("YYYY-MM-DD"),_=O(n.endDate).format("YYYY-MM-DD"),C=O(p.event.startDate).format("YYYY-MM-DD"),S=O(p.event.endDate).format("YYYY-MM-DD"),j=O(p.conflictStart).format("YYYY-MM-DD"),K=O(p.conflictEnd).format("YYYY-MM-DD"),L=w!==_,A=C!==S,P=j!==K,N=L?O(n.startDate).format("MMM D, h:mm A"):O(n.startDate).format("h:mm A"),E=L?O(n.endDate).format("MMM D, h:mm A"):O(n.endDate).format("h:mm A"),Y=A?O(p.event.startDate).format("MMM D, h:mm A"):O(p.event.startDate).format("h:mm A"),z=A?O(p.event.endDate).format("MMM D, h:mm A"):O(p.event.endDate).format("h:mm A"),re=P?O(p.conflictStart).format("MMM D, h:mm A"):O(p.conflictStart).format("h:mm A"),ee=P?O(p.conflictEnd).format("MMM D, h:mm A"):O(p.conflictEnd).format("h:mm A"),B=P?"":O(p.conflictStart).format("MMM D"),F=n.startDate.getTime(),Q=n.endDate.getTime(),te=p.event.startDate.getTime(),M=p.event.endDate.getTime(),U=F>=te&&F<M,T=Q>te&&Q<=M,R=F<=te&&Q>=M,V=te<=F&&M>=Q;let H=!1,m=!1,J=!1,D=!1,G="";return R||V?(H=!0,m=!0,J=!0,D=!0,G=`⚠️ ${c.conflicts.changeBoth}`):U&&T?(H=!0,m=!0,J=!0,D=!0,G=`⚠️ ${c.conflicts.changeBoth}`):U?(H=!0,D=!0,G=`⚠️ ${c.conflicts.changeStart}`):T&&(m=!0,J=!0,G=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(zn,{children:[i.jsxs(Hn,{children:[c.conflicts.conflictsWith,": ",p.event.title,p.event.subtitle&&` - ${p.event.subtitle}`]}),i.jsxs(xt,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",H?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:N}):N," ",c.conflicts.to," ",m?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:E}):E]}),i.jsxs(xt,{children:[i.jsx("strong",{children:p.event.title})," ",c.conflicts.currentlyAt,":"," ",J?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Y}):Y," ",c.conflicts.to," ",D?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:z}):z]}),i.jsxs(bo,{children:[c.conflicts.conflictTime,": ",B&&`${B}, `,re," - ",ee]}),G&&i.jsx(xt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:G})]},g)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const W=$(400,400);return i.jsxs(mo,{style:{left:`${W.x}px`,top:`${W.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(yo,{style:{color:"#2E7D32"},children:[i.jsx(vo,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(xo,{children:[(()=>{const p=n.nearbyEvents.some(C=>C.position==="before"),g=n.nearbyEvents.some(C=>C.position==="after"),w=O(n.startDate).format("h:mm A"),_=O(n.endDate).format("h:mm A");return i.jsxs(zn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(Hn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(xt,{style:{fontWeight:600},children:[O(n.startDate).format("MMM D"),":"," ",p?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:w}):w," ",c.conflicts.to," ",g?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:_}):_]}),i.jsx(xt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((p,g)=>{const w=O(p.event.startDate).format("YYYY-MM-DD"),_=O(p.event.endDate).format("YYYY-MM-DD"),C=w!==_,S=C?O(p.event.startDate).format("MMM D, h:mm A"):O(p.event.startDate).format("h:mm A"),j=C?O(p.event.endDate).format("MMM D, h:mm A"):O(p.event.endDate).format("h:mm A"),K=O(p.event.startDate).format("MMM D"),L=Math.floor(p.timeGap/(1e3*60*60)),A=Math.floor(p.timeGap%(1e3*60*60)/(1e3*60)),P=L>0?`${L}h ${A}m`:`${A}m`,N=p.position==="after",E=p.position==="before";return i.jsxs(zn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(Hn,{style:{color:"#1B5E20"},children:[p.event.title,p.event.subtitle&&` - ${p.event.subtitle}`]}),i.jsxs(xt,{children:[!C&&`${K}: `,N?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",c.conflicts.to," ",E?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:j}):j]}),i.jsxs(bo,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[P," ",p.position==="before"?c.conflicts.before:c.conflicts.after]})]},g)})]})]})})(),i.jsx(jl,{$isAnimating:I,$animateToX:f==null?void 0:f.x,$animateToY:f==null?void 0:f.y,style:{left:I?`${(f==null?void 0:f.x)??0}px`:"0",top:I?`${(f==null?void 0:f.y)??0}px`:"0",transform:I?void 0:`translate3d(${l?k:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:X},children:i.jsx(Zl,{children:i.jsxs(Gl,{children:[i.jsx(go,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(go,{children:e.subtitle}),e.description&&i.jsx(Vl,{children:e.description})]})})})]})},Rl=Ye`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,ed=x.div`
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
  animation: ${Rl} 1.5s ease-in-out infinite;
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
`,td=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(ed,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),nd=Ye`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,rd=x.div`
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
  animation: ${nd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,od=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,sd=x.span`
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
`,id=x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,ad=x.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;x.div`
  display: none;
`,x.div`
  display: none;
`,x.button`
  display: none;
`;const cd=x.div`
  display: flex;
  gap: 8px;
`,wo=x.button`
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
`,ld=({selections:e,onConfirm:r,onClear:t})=>{var b;const o=et().multiSelect,s=h.useMemo(()=>e.filter($=>$.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",f=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((b=o==null?void 0:o.conflictsWarning)==null?void 0:b.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,k=i.jsxs(rd,{$hasConflicts:v,"data-multi-select-ui":!0,children:[i.jsxs(od,{children:[i.jsxs(sd,{$hasConflicts:v,children:[e.length," ",a]}),v&&i.jsxs(id,{children:["⚠️ ",f]}),i.jsx(ad,{children:l})]}),i.jsxs(cd,{children:[i.jsxs(wo,{variant:"secondary",onClick:t,children:["✕ ",u]}),i.jsx(wo,{variant:"primary",$hasConflicts:v,onClick:r,children:v?`⚠️ ${d}`:`✓ ${c}`})]})]});return ko.createPortal(k,document.body)},dd=Ye`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,ud=x.div`
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
  animation: ${dd} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&ot`
      border-style: dashed;
    `}
`,fd=x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,hd=x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,pd=x.button`
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
`,gd=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,u]=h.useState(null),[c,d]=h.useState({x:0,y:0}),f=h.useRef(null),v=h.useMemo(()=>{switch(t){case 0:return ze*7;case 1:return Ce;case 2:return Te;default:return Ce}},[t]),k=h.useMemo(()=>O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),b=h.useMemo(()=>e.map((g,w)=>{let _=0,C=!1;for(const Y of r){if(Y.id===g.resourceId){C=!0;break}_+=Math.max(Y.data.length,1)}if(!C)return null;const S=O(g.startDate),j=O(g.endDate);let K,L;switch(t){case 0:K=Math.floor(S.diff(k,"days")/7),L=Math.max(1,Math.ceil(j.diff(S,"days")/7)+1);break;case 1:K=S.diff(k,"days"),L=Math.max(1,j.diff(S,"days")+1);break;case 2:K=S.diff(k,"hours"),L=Math.max(1,j.diff(S,"hours")+1);break;default:K=0,L=1}const A=K*v;let P=0;for(const Y of a)Y<=_&&P++;const N=_*he+P*Le,E=L*v;return{index:w,selection:g,x:A,y:N,width:E,height:he}}),[e,r,t,k,v]),$=(g,w)=>{const _=O(g).format("MMM D"),C=O(w).format("MMM D");return _===C?_:`${_} - ${C}`},y=g=>!g.hasConflict||!g.conflicts?"":`⚠️ Conflicts with:
${g.conflicts.map(_=>{const C=(_.overlapDuration/36e5).toFixed(1);return`• ${_.event.title} (${C}h overlap)`}).join(`
`)}`,I=h.useCallback(g=>{let w=0;for(const _ of r){const C=Math.max(_.data.length,1);if(g>=w*he&&g<(w+C)*he)return{resourceId:_.id,resourceLabel:_.label};w+=C}return null},[r]),X=h.useCallback(g=>{const w=Math.floor(g/v);switch(t){case 0:return k.add(w*7,"days").toDate();case 1:return k.add(w,"days").toDate();case 2:return k.add(w,"hours").toDate();default:return k.toDate()}},[t,k,v]),Z=h.useCallback((g,w)=>{!s||(g.preventDefault(),g.stopPropagation(),!b[w])||(f.current={x:g.clientX,y:g.clientY},u(w),d({x:0,y:0}))},[s,b]),W=h.useCallback(g=>{if(l===null||!f.current)return;const w=g.clientX-f.current.x,_=g.clientY-f.current.y,C=Math.round(w/v)*v,S=Math.round(_/he)*he;d({x:C,y:S})},[l,v]),p=h.useCallback(()=>{if(l===null||!s){u(null),d({x:0,y:0}),f.current=null;return}const g=b[l];if(!g){u(null),d({x:0,y:0}),f.current=null;return}const w=g.x+c.x,_=g.y+c.y,C=I(_+he/2);if(!C){u(null),d({x:0,y:0}),f.current=null;return}const S=X(w),j=e[l],K=j.endDate.getTime()-j.startDate.getTime(),L=new Date(S.getTime()+K);s(l,{startDate:S,endDate:L,resourceId:C.resourceId,resourceLabel:C.resourceLabel}),u(null),d({x:0,y:0}),f.current=null},[l,c,b,e,s,I,X]);return h.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",W),document.addEventListener("mouseup",p),()=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",p)}},[l,W,p]),i.jsx(i.Fragment,{children:b.map(g=>{if(!g)return null;const w=g.selection.hasConflict||!1,_=l===g.index,C=_?g.x+c.x:g.x,S=_?g.y+c.y:g.y;return i.jsxs(ud,{$hasConflict:w,$isDragging:_,style:{left:C,top:S,width:g.width,height:g.height},"data-multi-select-ui":!0,onMouseDown:j=>Z(j,g.index),children:[w&&i.jsx(hd,{title:y(g.selection),children:"⚠️"}),i.jsx(fd,{$hasConflict:w,children:$(g.selection.startDate,g.selection.endDate)}),i.jsx(pd,{onClick:j=>{j.stopPropagation(),o(g.index)},onMouseDown:j=>j.stopPropagation(),title:w?"Remove conflicting selection":"Remove selection",children:"×"})]},g.index)})})},So=(e,r,t,n)=>{if(r===2)return null;const o=r===0?ze*7:Ce,s=O().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"),a=e.startOf("day"),l=r===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=n?null:{x:l*o,width:o}},md=x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({theme:e})=>e.colors.today}12;
`,yd=({zoom:e,startDate:r})=>{const{cols:t}=Ze(),n=h.useMemo(()=>So(O(),e,r,t),[e,r,t]);return n?i.jsx(md,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},vd="#2f6fed",xd=x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${vd}1c;
`,bd=({zoom:e,startDate:r})=>{const{cols:t,jumpDate:n}=Ze(),o=h.useMemo(()=>!n||n.isSame(O(),"day")?null:So(n,e,r,t),[n,e,r,t]);return o?i.jsx(xd,{style:{left:`${o.x}px`,width:`${o.width}px`},"aria-hidden":!0}):null},Qd="";Ie.Scheduler=ja,Object.defineProperty(Ie,Symbol.toStringTag,{value:"Module"})});
