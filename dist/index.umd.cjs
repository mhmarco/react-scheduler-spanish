(function(Pe,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Pe=typeof globalThis<"u"?globalThis:Pe||self,i(Pe["react-scheduler"]={},Pe["react/jsx-runtime"],Pe.React,Pe.ReactDOM))})(this,function(Pe,i,p,vo){"use strict";var gd=Object.defineProperty;var md=(Pe,i,p)=>i in Pe?gd(Pe,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):Pe[i]=p;var yo=(Pe,i,p)=>(md(Pe,typeof i!="symbol"?i+"":i,p),p);function xo(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const se=xo(p);var Me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bt={},bo={get exports(){return bt},set exports(e){bt=e}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function wo(){if(Ln)return me;Ln=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function D(m){if(typeof m=="object"&&m!==null){var O=m.$$typeof;switch(O){case e:switch(m=m.type,m){case t:case o:case n:case c:case u:return m;default:switch(m=m&&m.$$typeof,m){case l:case a:case d:case v:case f:case s:return m;default:return O}}case r:return O}}}return me.ContextConsumer=a,me.ContextProvider=s,me.Element=e,me.ForwardRef=d,me.Fragment=t,me.Lazy=v,me.Memo=f,me.Portal=r,me.Profiler=o,me.StrictMode=n,me.Suspense=c,me.SuspenseList=u,me.isAsyncMode=function(){return!1},me.isConcurrentMode=function(){return!1},me.isContextConsumer=function(m){return D(m)===a},me.isContextProvider=function(m){return D(m)===s},me.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},me.isForwardRef=function(m){return D(m)===d},me.isFragment=function(m){return D(m)===t},me.isLazy=function(m){return D(m)===v},me.isMemo=function(m){return D(m)===f},me.isPortal=function(m){return D(m)===r},me.isProfiler=function(m){return D(m)===o},me.isStrictMode=function(m){return D(m)===n},me.isSuspense=function(m){return D(m)===c},me.isSuspenseList=function(m){return D(m)===u},me.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===n||m===c||m===u||m===M||typeof m=="object"&&m!==null&&(m.$$typeof===v||m.$$typeof===f||m.$$typeof===s||m.$$typeof===a||m.$$typeof===d||m.$$typeof===b||m.getModuleId!==void 0)},me.typeOf=D,me}var ye={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn;function So(){return Yn||(Yn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),b=!1,D=!1,m=!1,O=!1,U=!1,j;j=Symbol.for("react.module.reference");function B(E){return!!(typeof E=="string"||typeof E=="function"||E===t||E===o||U||E===n||E===c||E===u||O||E===M||b||D||m||typeof E=="object"&&E!==null&&(E.$$typeof===v||E.$$typeof===f||E.$$typeof===s||E.$$typeof===a||E.$$typeof===d||E.$$typeof===j||E.getModuleId!==void 0))}function h(E){if(typeof E=="object"&&E!==null){var X=E.$$typeof;switch(X){case e:var ne=E.type;switch(ne){case t:case o:case n:case c:case u:return ne;default:var J=ne&&ne.$$typeof;switch(J){case l:case a:case d:case v:case f:case s:return J;default:return X}}case r:return X}}}var y=a,w=s,_=e,S=d,C=t,Z=v,Q=f,L=r,k=o,A=n,Y=c,F=u,I=!1,W=!1;function re(E){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ee(E){return W||(W=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function N(E){return h(E)===a}function H(E){return h(E)===s}function q(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function te(E){return h(E)===d}function $(E){return h(E)===t}function G(E){return h(E)===v}function T(E){return h(E)===f}function R(E){return h(E)===r}function V(E){return h(E)===o}function z(E){return h(E)===n}function g(E){return h(E)===c}function K(E){return h(E)===u}ye.ContextConsumer=y,ye.ContextProvider=w,ye.Element=_,ye.ForwardRef=S,ye.Fragment=C,ye.Lazy=Z,ye.Memo=Q,ye.Portal=L,ye.Profiler=k,ye.StrictMode=A,ye.Suspense=Y,ye.SuspenseList=F,ye.isAsyncMode=re,ye.isConcurrentMode=ee,ye.isContextConsumer=N,ye.isContextProvider=H,ye.isElement=q,ye.isForwardRef=te,ye.isFragment=$,ye.isLazy=G,ye.isMemo=T,ye.isPortal=R,ye.isProfiler=V,ye.isStrictMode=z,ye.isSuspense=g,ye.isSuspenseList=K,ye.isValidElementType=B,ye.typeOf=h}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=wo():e.exports=So()})(bo);function Co(e){function r(N,H,q,te,$){for(var G=0,T=0,R=0,V=0,z,g,K=0,E=0,X,ne=X=z=0,J=0,ce=0,fe=0,de=0,pe=q.length,Se=pe-1,be,ae="",ue="",_e="",Fe="",De;J<pe;){if(g=q.charCodeAt(J),J===Se&&T+V+R+G!==0&&(T!==0&&(g=T===47?10:47),V=R=G=0,pe++,Se++),T+V+R+G===0){if(J===Se&&(0<ce&&(ae=ae.replace(v,"")),0<ae.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:ae+=q.charAt(J)}g=59}switch(g){case 123:for(ae=ae.trim(),z=ae.charCodeAt(0),X=1,de=++J;J<pe;){switch(g=q.charCodeAt(J)){case 123:X++;break;case 125:X--;break;case 47:switch(g=q.charCodeAt(J+1)){case 42:case 47:e:{for(ne=J+1;ne<Se;++ne)switch(q.charCodeAt(ne)){case 47:if(g===42&&q.charCodeAt(ne-1)===42&&J+2!==ne){J=ne+1;break e}break;case 10:if(g===47){J=ne+1;break e}}J=ne}}break;case 91:g++;case 40:g++;case 34:case 39:for(;J++<Se&&q.charCodeAt(J)!==g;);}if(X===0)break;J++}switch(X=q.substring(de,J),z===0&&(z=(ae=ae.replace(f,"").trim()).charCodeAt(0)),z){case 64:switch(0<ce&&(ae=ae.replace(v,"")),g=ae.charCodeAt(1),g){case 100:case 109:case 115:case 45:ce=H;break;default:ce=Y}if(X=r(H,ce,X,g,$+1),de=X.length,0<I&&(ce=t(Y,ae,fe),De=l(3,X,ce,H,L,Q,de,g,$,te),ae=ce.join(""),De!==void 0&&(de=(X=De.trim()).length)===0&&(g=0,X="")),0<de)switch(g){case 115:ae=ae.replace(y,a);case 100:case 109:case 45:X=ae+"{"+X+"}";break;case 107:ae=ae.replace(U,"$1 $2"),X=ae+"{"+X+"}",X=A===1||A===2&&s("@"+X,3)?"@-webkit-"+X+"@"+X:"@"+X;break;default:X=ae+X,te===112&&(X=(ue+=X,""))}else X="";break;default:X=r(H,t(H,ae,fe),X,te,$+1)}_e+=X,X=fe=ce=ne=z=0,ae="",g=q.charCodeAt(++J);break;case 125:case 59:if(ae=(0<ce?ae.replace(v,""):ae).trim(),1<(de=ae.length))switch(ne===0&&(z=ae.charCodeAt(0),z===45||96<z&&123>z)&&(de=(ae=ae.replace(" ",":")).length),0<I&&(De=l(1,ae,H,N,L,Q,ue.length,te,$,te))!==void 0&&(de=(ae=De.trim()).length)===0&&(ae="\0\0"),z=ae.charCodeAt(0),g=ae.charCodeAt(1),z){case 0:break;case 64:if(g===105||g===99){Fe+=ae+q.charAt(J);break}default:ae.charCodeAt(de-1)!==58&&(ue+=o(ae,z,g,ae.charCodeAt(2)))}fe=ce=ne=z=0,ae="",g=q.charCodeAt(++J)}}switch(g){case 13:case 10:T===47?T=0:1+z===0&&te!==107&&0<ae.length&&(ce=1,ae+="\0"),0<I*re&&l(0,ae,H,N,L,Q,ue.length,te,$,te),Q=1,L++;break;case 59:case 125:if(T+V+R+G===0){Q++;break}default:switch(Q++,be=q.charAt(J),g){case 9:case 32:if(V+G+T===0)switch(K){case 44:case 58:case 9:case 32:be="";break;default:g!==32&&(be=" ")}break;case 0:be="\\0";break;case 12:be="\\f";break;case 11:be="\\v";break;case 38:V+T+G===0&&(ce=fe=1,be="\f"+be);break;case 108:if(V+T+G+k===0&&0<ne)switch(J-ne){case 2:K===112&&q.charCodeAt(J-3)===58&&(k=K);case 8:E===111&&(k=E)}break;case 58:V+T+G===0&&(ne=J);break;case 44:T+R+V+G===0&&(ce=1,be+="\r");break;case 34:case 39:T===0&&(V=V===g?0:V===0?g:V);break;case 91:V+T+R===0&&G++;break;case 93:V+T+R===0&&G--;break;case 41:V+T+G===0&&R--;break;case 40:if(V+T+G===0){if(z===0)switch(2*K+3*E){case 533:break;default:z=1}R++}break;case 64:T+R+V+G+ne+X===0&&(X=1);break;case 42:case 47:if(!(0<V+G+R))switch(T){case 0:switch(2*g+3*q.charCodeAt(J+1)){case 235:T=47;break;case 220:de=J,T=42}break;case 42:g===47&&K===42&&de+2!==J&&(q.charCodeAt(de+2)===33&&(ue+=q.substring(de,J+1)),be="",T=0)}}T===0&&(ae+=be)}E=K,K=g,J++}if(de=ue.length,0<de){if(ce=H,0<I&&(De=l(2,ue,ce,N,L,Q,de,te,$,te),De!==void 0&&(ue=De).length===0))return Fe+ue+_e;if(ue=ce.join(",")+"{"+ue+"}",A*k!==0){switch(A!==2||s(ue,2)||(k=0),k){case 111:ue=ue.replace(B,":-moz-$1")+ue;break;case 112:ue=ue.replace(j,"::-webkit-input-$1")+ue.replace(j,"::-moz-$1")+ue.replace(j,":-ms-input-$1")+ue}k=0}}return Fe+ue+_e}function t(N,H,q){var te=H.trim().split(m);H=te;var $=te.length,G=N.length;switch(G){case 0:case 1:var T=0;for(N=G===0?"":N[0]+" ";T<$;++T)H[T]=n(N,H[T],q).trim();break;default:var R=T=0;for(H=[];T<$;++T)for(var V=0;V<G;++V)H[R++]=n(N[V]+" ",te[T],q).trim()}return H}function n(N,H,q){var te=H.charCodeAt(0);switch(33>te&&(te=(H=H.trim()).charCodeAt(0)),te){case 38:return H.replace(O,"$1"+N.trim());case 58:return N.trim()+H.replace(O,"$1"+N.trim());default:if(0<1*q&&0<H.indexOf("\f"))return H.replace(O,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+H}function o(N,H,q,te){var $=N+";",G=2*H+3*q+4*te;if(G===944){N=$.indexOf(":",9)+1;var T=$.substring(N,$.length-1).trim();return T=$.substring(0,N).trim()+T+";",A===1||A===2&&s(T,1)?"-webkit-"+T+T:T}if(A===0||A===2&&!s($,1))return $;switch(G){case 1015:return $.charCodeAt(10)===97?"-webkit-"+$+$:$;case 951:return $.charCodeAt(3)===116?"-webkit-"+$+$:$;case 963:return $.charCodeAt(5)===110?"-webkit-"+$+$:$;case 1009:if($.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+$+$;case 978:return"-webkit-"+$+"-moz-"+$+$;case 1019:case 983:return"-webkit-"+$+"-moz-"+$+"-ms-"+$+$;case 883:if($.charCodeAt(8)===45)return"-webkit-"+$+$;if(0<$.indexOf("image-set(",11))return $.replace(Z,"$1-webkit-$2")+$;break;case 932:if($.charCodeAt(4)===45)switch($.charCodeAt(5)){case 103:return"-webkit-box-"+$.replace("-grow","")+"-webkit-"+$+"-ms-"+$.replace("grow","positive")+$;case 115:return"-webkit-"+$+"-ms-"+$.replace("shrink","negative")+$;case 98:return"-webkit-"+$+"-ms-"+$.replace("basis","preferred-size")+$}return"-webkit-"+$+"-ms-"+$+$;case 964:return"-webkit-"+$+"-ms-flex-"+$+$;case 1023:if($.charCodeAt(8)!==99)break;return T=$.substring($.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+$+"-ms-flex-pack"+T+$;case 1005:return b.test($)?$.replace(M,":-webkit-")+$.replace(M,":-moz-")+$:$;case 1e3:switch(T=$.substring(13).trim(),H=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(H)){case 226:T=$.replace(h,"tb");break;case 232:T=$.replace(h,"tb-rl");break;case 220:T=$.replace(h,"lr");break;default:return $}return"-webkit-"+$+"-ms-"+T+$;case 1017:if($.indexOf("sticky",9)===-1)break;case 975:switch(H=($=N).length-10,T=($.charCodeAt(H)===33?$.substring(0,H):$).substring(N.indexOf(":",7)+1).trim(),G=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:$=$.replace(T,"-webkit-"+T)+";"+$;break;case 207:case 102:$=$.replace(T,"-webkit-"+(102<G?"inline-":"")+"box")+";"+$.replace(T,"-webkit-"+T)+";"+$.replace(T,"-ms-"+T+"box")+";"+$}return $+";";case 938:if($.charCodeAt(5)===45)switch($.charCodeAt(6)){case 105:return T=$.replace("-items",""),"-webkit-"+$+"-webkit-box-"+T+"-ms-flex-"+T+$;case 115:return"-webkit-"+$+"-ms-flex-item-"+$.replace(_,"")+$;default:return"-webkit-"+$+"-ms-flex-line-pack"+$.replace("align-content","").replace(_,"")+$}break;case 973:case 989:if($.charCodeAt(3)!==45||$.charCodeAt(4)===122)break;case 931:case 953:if(C.test(N)===!0)return(T=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),H,q,te).replace(":fill-available",":stretch"):$.replace(T,"-webkit-"+T)+$.replace(T,"-moz-"+T.replace("fill-",""))+$;break;case 962:if($="-webkit-"+$+($.charCodeAt(5)===102?"-ms-"+$:"")+$,q+te===211&&$.charCodeAt(13)===105&&0<$.indexOf("transform",10))return $.substring(0,$.indexOf(";",27)+1).replace(D,"$1-webkit-$2")+$}return $}function s(N,H){var q=N.indexOf(H===1?":":"{"),te=N.substring(0,H!==3?q:10);return q=N.substring(q+1,N.length-1),W(H!==2?te:te.replace(S,"$1"),q,H)}function a(N,H){var q=o(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return q!==H+";"?q.replace(w," or ($1)").substring(4):"("+H+")"}function l(N,H,q,te,$,G,T,R,V,z){for(var g=0,K=H,E;g<I;++g)switch(E=F[g].call(u,N,K,q,te,$,G,T,R,V,z)){case void 0:case!1:case!0:case null:break;default:K=E}if(K!==H)return K}function d(N){switch(N){case void 0:case null:I=F.length=0;break;default:if(typeof N=="function")F[I++]=N;else if(typeof N=="object")for(var H=0,q=N.length;H<q;++H)d(N[H]);else re=!!N|0}return d}function c(N){return N=N.prefix,N!==void 0&&(W=null,N?typeof N!="function"?A=1:(A=2,W=N):A=0),c}function u(N,H){var q=N;if(33>q.charCodeAt(0)&&(q=q.trim()),ee=q,q=[ee],0<I){var te=l(-1,H,q,q,L,Q,0,0,0,0);te!==void 0&&typeof te=="string"&&(H=te)}var $=r(Y,q,H,0,0);return 0<I&&(te=l(-2,$,q,q,L,Q,$.length,0,0,0),te!==void 0&&($=te)),ee="",k=0,Q=L=1,$}var f=/^\0+/g,v=/[\0\r\f]/g,M=/: */g,b=/zoo|gra/,D=/([,: ])(transform)/g,m=/,\r+?/g,O=/([\t\r\n ])*\f?&/g,U=/@(k\w+)\s*(\S*)\s*/,j=/::(place)/g,B=/:(read-only)/g,h=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,_=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,Z=/([^-])(image-set\()/,Q=1,L=1,k=0,A=1,Y=[],F=[],I=0,W=null,re=0,ee="";return u.use=d,u.set=c,e!==void 0&&c(e),u}var ko={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mo(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var $o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Nn=Mo(function(e){return $o.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Xt={},Do={get exports(){return Xt},set exports(e){Xt=e}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fn;function Eo(){if(Fn)return ve;Fn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,M=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,D=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,O=e?Symbol.for("react.responder"):60118,U=e?Symbol.for("react.scope"):60119;function j(h){if(typeof h=="object"&&h!==null){var y=h.$$typeof;switch(y){case r:switch(h=h.type,h){case d:case c:case n:case s:case o:case f:return h;default:switch(h=h&&h.$$typeof,h){case l:case u:case b:case M:case a:return h;default:return y}}case t:return y}}}function B(h){return j(h)===c}return ve.AsyncMode=d,ve.ConcurrentMode=c,ve.ContextConsumer=l,ve.ContextProvider=a,ve.Element=r,ve.ForwardRef=u,ve.Fragment=n,ve.Lazy=b,ve.Memo=M,ve.Portal=t,ve.Profiler=s,ve.StrictMode=o,ve.Suspense=f,ve.isAsyncMode=function(h){return B(h)||j(h)===d},ve.isConcurrentMode=B,ve.isContextConsumer=function(h){return j(h)===l},ve.isContextProvider=function(h){return j(h)===a},ve.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===r},ve.isForwardRef=function(h){return j(h)===u},ve.isFragment=function(h){return j(h)===n},ve.isLazy=function(h){return j(h)===b},ve.isMemo=function(h){return j(h)===M},ve.isPortal=function(h){return j(h)===t},ve.isProfiler=function(h){return j(h)===s},ve.isStrictMode=function(h){return j(h)===o},ve.isSuspense=function(h){return j(h)===f},ve.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===n||h===c||h===s||h===o||h===f||h===v||typeof h=="object"&&h!==null&&(h.$$typeof===b||h.$$typeof===M||h.$$typeof===a||h.$$typeof===l||h.$$typeof===u||h.$$typeof===m||h.$$typeof===O||h.$$typeof===U||h.$$typeof===D)},ve.typeOf=j,ve}var xe={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn;function _o(){return zn||(zn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,M=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,D=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,O=e?Symbol.for("react.responder"):60118,U=e?Symbol.for("react.scope"):60119;function j(g){return typeof g=="string"||typeof g=="function"||g===n||g===c||g===s||g===o||g===f||g===v||typeof g=="object"&&g!==null&&(g.$$typeof===b||g.$$typeof===M||g.$$typeof===a||g.$$typeof===l||g.$$typeof===u||g.$$typeof===m||g.$$typeof===O||g.$$typeof===U||g.$$typeof===D)}function B(g){if(typeof g=="object"&&g!==null){var K=g.$$typeof;switch(K){case r:var E=g.type;switch(E){case d:case c:case n:case s:case o:case f:return E;default:var X=E&&E.$$typeof;switch(X){case l:case u:case b:case M:case a:return X;default:return K}}case t:return K}}}var h=d,y=c,w=l,_=a,S=r,C=u,Z=n,Q=b,L=M,k=t,A=s,Y=o,F=f,I=!1;function W(g){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),re(g)||B(g)===d}function re(g){return B(g)===c}function ee(g){return B(g)===l}function N(g){return B(g)===a}function H(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function q(g){return B(g)===u}function te(g){return B(g)===n}function $(g){return B(g)===b}function G(g){return B(g)===M}function T(g){return B(g)===t}function R(g){return B(g)===s}function V(g){return B(g)===o}function z(g){return B(g)===f}xe.AsyncMode=h,xe.ConcurrentMode=y,xe.ContextConsumer=w,xe.ContextProvider=_,xe.Element=S,xe.ForwardRef=C,xe.Fragment=Z,xe.Lazy=Q,xe.Memo=L,xe.Portal=k,xe.Profiler=A,xe.StrictMode=Y,xe.Suspense=F,xe.isAsyncMode=W,xe.isConcurrentMode=re,xe.isContextConsumer=ee,xe.isContextProvider=N,xe.isElement=H,xe.isForwardRef=q,xe.isFragment=te,xe.isLazy=$,xe.isMemo=G,xe.isPortal=T,xe.isProfiler=R,xe.isStrictMode=V,xe.isSuspense=z,xe.isValidElementType=j,xe.typeOf=B}()),xe}(function(e){process.env.NODE_ENV==="production"?e.exports=Eo():e.exports=_o()})(Do);var Ut=Xt,To={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ao={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Po={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kt={};Kt[Ut.ForwardRef]=Po,Kt[Ut.Memo]=Bn;function Hn(e){return Ut.isMemo(e)?Bn:Kt[e.$$typeof]||To}var Oo=Object.defineProperty,Io=Object.getOwnPropertyNames,Wn=Object.getOwnPropertySymbols,Lo=Object.getOwnPropertyDescriptor,Yo=Object.getPrototypeOf,jn=Object.prototype;function Zn(e,r,t){if(typeof r!="string"){if(jn){var n=Yo(r);n&&n!==jn&&Zn(e,n,t)}var o=Io(r);Wn&&(o=o.concat(Wn(r)));for(var s=Hn(e),a=Hn(r),l=0;l<o.length;++l){var d=o[l];if(!Ao[d]&&!(t&&t[d])&&!(a&&a[d])&&!(s&&s[d])){var c=Lo(r,d);try{Oo(e,d,c)}catch{}}}}return e}var No=Zn;function Be(){return(Be=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Vn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},Jt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!bt.typeOf(e)},_t=Object.freeze([]),Xe=Object.freeze({});function st(e){return typeof e=="function"}function qt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Qt(e){return e&&typeof e.styledComponentId=="string"}var it=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Rt=typeof window<"u"&&"HTMLElement"in window,Fo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),zo={},Bo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function Ho(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function je(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(Ho.apply(void 0,[Bo[e]].concat(t)).trim())}var Wo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&je(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(t+1),c=0,u=n.length;c<u;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),Tt=new Map,At=new Map,wt=1,Pt=function(e){if(Tt.has(e))return Tt.get(e);for(;At.has(wt);)wt++;var r=wt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&je(16,""+r),Tt.set(e,r),At.set(r,e),r},jo=function(e){return At.get(e)},Zo=function(e,r){r>=wt&&(wt=r+1),Tt.set(e,r),At.set(r,e)},Vo="style["+it+'][data-styled-version="5.3.8"]',Go=new RegExp("^"+it+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Xo=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},Uo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Go);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(Zo(c,d),Xo(e,c,l[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(a)}}},Ko=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Gn=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var u=d[c];if(u&&u.nodeType===1&&u.hasAttribute(it))return u}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(it,"active"),n.setAttribute("data-styled-version","5.3.8");var a=Ko();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},Jo=function(){function e(t){var n=this.element=Gn(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var d=s[a];if(d.ownerNode===o)return d}je(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),qo=function(){function e(t){var n=this.element=Gn(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Qo=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xn=Rt,Ro={isServer:!Rt,useCSSOMInjection:!Fo},Ot=function(){function e(t,n,o){t===void 0&&(t=Xe),n===void 0&&(n={}),this.options=Be({},Ro,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Rt&&Xn&&(Xn=!1,function(s){for(var a=document.querySelectorAll(Vo),l=0,d=a.length;l<d;l++){var c=a[l];c&&c.getAttribute(it)!=="active"&&(Uo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return Pt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Be({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new Qo(a):s?new Jo(a):new qo(a),new Wo(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(Pt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(Pt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Pt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=jo(a);if(l!==void 0){var d=t.names.get(l),c=n.getGroup(a);if(d&&c&&d.size){var u=it+".g"+a+'[id="'+l+'"]',f="";d!==void 0&&d.forEach(function(v){v.length>0&&(f+=v+",")}),s+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),es=/(a)(d)/gi,Un=function(e){return String.fromCharCode(e+(e>25?39:97))};function en(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Un(r%52)+t;return(Un(r%52)+t).replace(es,"$1-$2")}var Qe=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Kn=function(e){return Qe(5381,e)};function Jn(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(st(t)&&!Qt(t))return!1}return!0}var ts=Kn("5.3.8"),ns=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&Jn(r),this.componentId=t,this.baseHash=Qe(ts,t),this.baseStyle=n,Ot.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=Re(this.rules,r,t,n).join(""),l=en(Qe(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var d=n(a,"."+l,void 0,o);t.insertRules(o,l,d)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,u=Qe(this.baseHash,n.hash),f="",v=0;v<c;v++){var M=this.rules[v];if(typeof M=="string")f+=M,process.env.NODE_ENV!=="production"&&(u=Qe(u,M+v));else if(M){var b=Re(M,r,t,n),D=Array.isArray(b)?b.join(""):b;u=Qe(u,D+v),f+=D}}if(f){var m=en(u>>>0);if(!t.hasNameForId(o,m)){var O=n(f,"."+m,void 0,o);t.insertRules(o,m,O)}s.push(m)}}return s.join(" ")},e}(),rs=/^\s*\/\/.*$/gm,os=[":","[",".","#"];function ss(e){var r,t,n,o,s=e===void 0?Xe:e,a=s.options,l=a===void 0?Xe:a,d=s.plugins,c=d===void 0?_t:d,u=new Co(l),f=[],v=function(D){function m(O){if(O)try{D(O+"}")}catch{}}return function(O,U,j,B,h,y,w,_,S,C){switch(O){case 1:if(S===0&&U.charCodeAt(0)===64)return D(U+";"),"";break;case 2:if(_===0)return U+"/*|*/";break;case 3:switch(_){case 102:case 112:return D(j[0]+U),"";default:return U+(C===0?"/*|*/":"")}case-2:U.split("/*|*/}").forEach(m)}}}(function(D){f.push(D)}),M=function(D,m,O){return m===0&&os.indexOf(O[t.length])!==-1||O.match(o)?D:"."+r};function b(D,m,O,U){U===void 0&&(U="&");var j=D.replace(rs,""),B=m&&O?O+" "+m+" { "+j+" }":j;return r=U,t=m,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),u(O||!m?"":m,B)}return u.use([].concat(c,[function(D,m,O){D===2&&O.length&&O[0].lastIndexOf(t)>0&&(O[0]=O[0].replace(n,M))},v,function(D){if(D===-2){var m=f;return f=[],m}}])),b.hash=c.length?c.reduce(function(D,m){return m.name||je(15),Qe(D,m.name)},5381).toString():"",b}var qn=p.createContext();qn.Consumer;var Qn=p.createContext(),is=(Qn.Consumer,new Ot),tn=ss();function Rn(){return p.useContext(qn)||is}function er(){return p.useContext(Qn)||tn}var tr=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=tn);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return je(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=tn),this.name+r.hash},e}(),as=/([A-Z])/,cs=/([A-Z])/g,ls=/^ms-/,ds=function(e){return"-"+e.toLowerCase()};function nr(e){return as.test(e)?e.replace(cs,ds).replace(ls,"-ms-"):e}var rr=function(e){return e==null||e===!1||e===""};function Re(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=Re(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(rr(e))return"";if(Qt(e))return"."+e.styledComponentId;if(st(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&bt.isElement(d)&&console.warn(qt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Re(d,r,t,n)}var c;return e instanceof tr?t?(e.inject(t,n),e.getName(n)):e:Jt(e)?function u(f,v){var M,b,D=[];for(var m in f)f.hasOwnProperty(m)&&!rr(f[m])&&(Array.isArray(f[m])&&f[m].isCss||st(f[m])?D.push(nr(m)+":",f[m],";"):Jt(f[m])?D.push.apply(D,u(f[m],m)):D.push(nr(m)+": "+(M=m,(b=f[m])==null||typeof b=="boolean"||b===""?"":typeof b!="number"||b===0||M in ko?String(b).trim():b+"px")+";"));return v?[v+" {"].concat(D,["}"]):D}(e):e.toString()}var or=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function at(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return st(e)||Jt(e)?or(Re(Vn(_t,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:or(Re(Vn(e,t)))}var sr=/invalid hook call/i,It=new Set,ir=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(sr.test(s))o=!1,It.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];n.apply(void 0,[s].concat(l))}},p.useRef(),o&&!It.has(t)&&(console.warn(t),It.add(t))}catch(s){sr.test(s.message)&&It.delete(t)}finally{console.error=n}}},ar=function(e,r,t){return t===void 0&&(t=Xe),e.theme!==t.theme&&e.theme||r||t.theme},us=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fs=/(^-|-$)/g;function nn(e){return e.replace(us,"-").replace(fs,"")}var rn=function(e){return en(Kn(e)>>>0)};function Lt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var on=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},hs=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ps(e,r,t){var n=e[t];on(r)&&on(n)?cr(n,r):e[t]=r}function cr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(on(a))for(var l in a)hs(l)&&ps(e,a[l],l)}return e}var ct=p.createContext();ct.Consumer;function gs(e){var r=p.useContext(ct),t=p.useMemo(function(){return function(n,o){if(!n)return je(14);if(st(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:je(7)}return Array.isArray(n)||typeof n!="object"?je(8):o?Be({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(ct.Provider,{value:t},e.children):null}var sn={};function lr(e,r,t){var n=Qt(e),o=!Lt(e),s=r.attrs,a=s===void 0?_t:s,l=r.componentId,d=l===void 0?function(U,j){var B=typeof U!="string"?"sc":nn(U);sn[B]=(sn[B]||0)+1;var h=B+"-"+rn("5.3.8"+B+sn[B]);return j?j+"-"+h:h}(r.displayName,r.parentComponentId):l,c=r.displayName,u=c===void 0?function(U){return Lt(U)?"styled."+U:"Styled("+qt(U)+")"}(e):c,f=r.displayName&&r.componentId?nn(r.displayName)+"-"+r.componentId:r.componentId||d,v=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,M=r.shouldForwardProp;n&&e.shouldForwardProp&&(M=r.shouldForwardProp?function(U,j,B){return e.shouldForwardProp(U,j,B)&&r.shouldForwardProp(U,j,B)}:e.shouldForwardProp);var b,D=new ns(t,f,n?e.componentStyle:void 0),m=D.isStatic&&a.length===0,O=function(U,j){return function(B,h,y,w){var _=B.attrs,S=B.componentStyle,C=B.defaultProps,Z=B.foldedComponentIds,Q=B.shouldForwardProp,L=B.styledComponentId,k=B.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(L);var A=function(te,$,G){te===void 0&&(te=Xe);var T=Be({},$,{theme:te}),R={};return G.forEach(function(V){var z,g,K,E=V;for(z in st(E)&&(E=E(T)),E)T[z]=R[z]=z==="className"?(g=R[z],K=E[z],g&&K?g+" "+K:g||K):E[z]}),[T,R]}(ar(h,p.useContext(ct),C)||Xe,h,_),Y=A[0],F=A[1],I=function(te,$,G,T){var R=Rn(),V=er(),z=$?te.generateAndInjectStyles(Xe,R,V):te.generateAndInjectStyles(G,R,V);return process.env.NODE_ENV!=="production"&&p.useDebugValue(z),process.env.NODE_ENV!=="production"&&!$&&T&&T(z),z}(S,w,Y,process.env.NODE_ENV!=="production"?B.warnTooManyClasses:void 0),W=y,re=F.$as||h.$as||F.as||h.as||k,ee=Lt(re),N=F!==h?Be({},h,{},F):h,H={};for(var q in N)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?H.as=N[q]:(Q?Q(q,Nn,re):!ee||Nn(q))&&(H[q]=N[q]));return h.style&&F.style!==h.style&&(H.style=Be({},h.style,{},F.style)),H.className=Array.prototype.concat(Z,L,I!==L?I:null,h.className,F.className).filter(Boolean).join(" "),H.ref=W,p.createElement(re,H)}(b,U,j,m)};return O.displayName=u,(b=p.forwardRef(O)).attrs=v,b.componentStyle=D,b.displayName=u,b.shouldForwardProp=M,b.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):_t,b.styledComponentId=f,b.target=n?e.target:e,b.withComponent=function(U){var j=r.componentId,B=function(y,w){if(y==null)return{};var _,S,C={},Z=Object.keys(y);for(S=0;S<Z.length;S++)_=Z[S],w.indexOf(_)>=0||(C[_]=y[_]);return C}(r,["componentId"]),h=j&&j+"-"+(Lt(U)?U:nn(qt(U)));return lr(U,Be({},B,{attrs:v,componentId:h}),t)},Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=n?cr({},e.defaultProps,U):U}}),process.env.NODE_ENV!=="production"&&(ir(u,f),b.warnTooManyClasses=function(U,j){var B={},h=!1;return function(y){if(!h&&(B[y]=!0,Object.keys(B).length>=200)){var w=j?' with the id of "'+j+'"':"";console.warn("Over 200 classes were generated for component "+U+w+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),h=!0,B={}}}}(u,f)),b.toString=function(){return"."+b.styledComponentId},o&&No(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),b}var an=function(e){return function r(t,n,o){if(o===void 0&&(o=Xe),!bt.isValidElementType(n))return je(1,String(n));var s=function(){return t(n,o,at.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,Be({},o,{},a))},s.attrs=function(a){return r(t,n,Be({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(lr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){an[e]=an(e)});var ms=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Jn(t),Ot.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(Re(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&Ot.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function ys(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=at.apply(void 0,[e].concat(t)),s="sc-global-"+rn(JSON.stringify(o)),a=new ms(o,s);function l(c){var u=Rn(),f=er(),v=p.useContext(ct),M=p.useRef(u.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(b){return typeof b=="string"&&b.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),u.server&&d(M,c,u,v,f),p.useLayoutEffect(function(){if(!u.server)return d(M,c,u,v,f),function(){return a.removeStyles(M,u)}},[M,c,u,v,f]),null}function d(c,u,f,v,M){if(a.isStatic)a.renderStyles(c,zo,f,M);else{var b=Be({},u,{theme:ar(u,v,l.defaultProps)});a.renderStyles(c,b,f,M)}}return process.env.NODE_ENV!=="production"&&ir(s),p.memo(l)}function Le(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=at.apply(void 0,[e].concat(t)).join(""),s=rn(o);return new tr(s,o)}var Yt=function(){return p.useContext(ct)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const x=an;var et={},vs={get exports(){return et},set exports(e){et=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",d="hour",c="day",u="week",f="month",v="quarter",M="year",b="date",D="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(L){var k=["th","st","nd","rd"],A=L%100;return"["+L+(k[(A-20)%10]||k[A]||k[0])+"]"}},j=function(L,k,A){var Y=String(L);return!Y||Y.length>=k?L:""+Array(k+1-Y.length).join(A)+L},B={s:j,z:function(L){var k=-L.utcOffset(),A=Math.abs(k),Y=Math.floor(A/60),F=A%60;return(k<=0?"+":"-")+j(Y,2,"0")+":"+j(F,2,"0")},m:function L(k,A){if(k.date()<A.date())return-L(A,k);var Y=12*(A.year()-k.year())+(A.month()-k.month()),F=k.clone().add(Y,f),I=A-F<0,W=k.clone().add(Y+(I?-1:1),f);return+(-(Y+(A-F)/(I?F-W:W-F))||0)},a:function(L){return L<0?Math.ceil(L)||0:Math.floor(L)},p:function(L){return{M:f,y:M,w:u,d:c,D:b,h:d,m:l,s:a,ms:s,Q:v}[L]||String(L||"").toLowerCase().replace(/s$/,"")},u:function(L){return L===void 0}},h="en",y={};y[h]=U;var w=function(L){return L instanceof Z},_=function L(k,A,Y){var F;if(!k)return h;if(typeof k=="string"){var I=k.toLowerCase();y[I]&&(F=I),A&&(y[I]=A,F=I);var W=k.split("-");if(!F&&W.length>1)return L(W[0])}else{var re=k.name;y[re]=k,F=re}return!Y&&F&&(h=F),F||!Y&&h},S=function(L,k){if(w(L))return L.clone();var A=typeof k=="object"?k:{};return A.date=L,A.args=arguments,new Z(A)},C=B;C.l=_,C.i=w,C.w=function(L,k){return S(L,{locale:k.$L,utc:k.$u,x:k.$x,$offset:k.$offset})};var Z=function(){function L(A){this.$L=_(A.locale,null,!0),this.parse(A)}var k=L.prototype;return k.parse=function(A){this.$d=function(Y){var F=Y.date,I=Y.utc;if(F===null)return new Date(NaN);if(C.u(F))return new Date;if(F instanceof Date)return new Date(F);if(typeof F=="string"&&!/Z$/i.test(F)){var W=F.match(m);if(W){var re=W[2]-1||0,ee=(W[7]||"0").substring(0,3);return I?new Date(Date.UTC(W[1],re,W[3]||1,W[4]||0,W[5]||0,W[6]||0,ee)):new Date(W[1],re,W[3]||1,W[4]||0,W[5]||0,W[6]||0,ee)}}return new Date(F)}(A),this.$x=A.x||{},this.init()},k.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},k.$utils=function(){return C},k.isValid=function(){return this.$d.toString()!==D},k.isSame=function(A,Y){var F=S(A);return this.startOf(Y)<=F&&F<=this.endOf(Y)},k.isAfter=function(A,Y){return S(A)<this.startOf(Y)},k.isBefore=function(A,Y){return this.endOf(Y)<S(A)},k.$g=function(A,Y,F){return C.u(A)?this[Y]:this.set(F,A)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(A,Y){var F=this,I=!!C.u(Y)||Y,W=C.p(A),re=function(T,R){var V=C.w(F.$u?Date.UTC(F.$y,R,T):new Date(F.$y,R,T),F);return I?V:V.endOf(c)},ee=function(T,R){return C.w(F.toDate()[T].apply(F.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(R)),F)},N=this.$W,H=this.$M,q=this.$D,te="set"+(this.$u?"UTC":"");switch(W){case M:return I?re(1,0):re(31,11);case f:return I?re(1,H):re(0,H+1);case u:var $=this.$locale().weekStart||0,G=(N<$?N+7:N)-$;return re(I?q-G:q+(6-G),H);case c:case b:return ee(te+"Hours",0);case d:return ee(te+"Minutes",1);case l:return ee(te+"Seconds",2);case a:return ee(te+"Milliseconds",3);default:return this.clone()}},k.endOf=function(A){return this.startOf(A,!1)},k.$set=function(A,Y){var F,I=C.p(A),W="set"+(this.$u?"UTC":""),re=(F={},F[c]=W+"Date",F[b]=W+"Date",F[f]=W+"Month",F[M]=W+"FullYear",F[d]=W+"Hours",F[l]=W+"Minutes",F[a]=W+"Seconds",F[s]=W+"Milliseconds",F)[I],ee=I===c?this.$D+(Y-this.$W):Y;if(I===f||I===M){var N=this.clone().set(b,1);N.$d[re](ee),N.init(),this.$d=N.set(b,Math.min(this.$D,N.daysInMonth())).$d}else re&&this.$d[re](ee);return this.init(),this},k.set=function(A,Y){return this.clone().$set(A,Y)},k.get=function(A){return this[C.p(A)]()},k.add=function(A,Y){var F,I=this;A=Number(A);var W=C.p(Y),re=function(H){var q=S(I);return C.w(q.date(q.date()+Math.round(H*A)),I)};if(W===f)return this.set(f,this.$M+A);if(W===M)return this.set(M,this.$y+A);if(W===c)return re(1);if(W===u)return re(7);var ee=(F={},F[l]=n,F[d]=o,F[a]=t,F)[W]||1,N=this.$d.getTime()+A*ee;return C.w(N,this)},k.subtract=function(A,Y){return this.add(-1*A,Y)},k.format=function(A){var Y=this,F=this.$locale();if(!this.isValid())return F.invalidDate||D;var I=A||"YYYY-MM-DDTHH:mm:ssZ",W=C.z(this),re=this.$H,ee=this.$m,N=this.$M,H=F.weekdays,q=F.months,te=function(R,V,z,g){return R&&(R[V]||R(Y,I))||z[V].slice(0,g)},$=function(R){return C.s(re%12||12,R,"0")},G=F.meridiem||function(R,V,z){var g=R<12?"AM":"PM";return z?g.toLowerCase():g},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:N+1,MM:C.s(N+1,2,"0"),MMM:te(F.monthsShort,N,q,3),MMMM:te(q,N),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:te(F.weekdaysMin,this.$W,H,2),ddd:te(F.weekdaysShort,this.$W,H,3),dddd:H[this.$W],H:String(re),HH:C.s(re,2,"0"),h:$(1),hh:$(2),a:G(re,ee,!0),A:G(re,ee,!1),m:String(ee),mm:C.s(ee,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:W};return I.replace(O,function(R,V){return V||T[R]||W.replace(":","")})},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(A,Y,F){var I,W=C.p(Y),re=S(A),ee=(re.utcOffset()-this.utcOffset())*n,N=this-re,H=C.m(this,re);return H=(I={},I[M]=H/12,I[f]=H,I[v]=H/3,I[u]=(N-ee)/6048e5,I[c]=(N-ee)/864e5,I[d]=N/o,I[l]=N/n,I[a]=N/t,I)[W]||N,F?H:C.a(H)},k.daysInMonth=function(){return this.endOf(f).$D},k.$locale=function(){return y[this.$L]},k.locale=function(A,Y){if(!A)return this.$L;var F=this.clone(),I=_(A,Y,!0);return I&&(F.$L=I),F},k.clone=function(){return C.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},L}(),Q=Z.prototype;return S.prototype=Q,[["$ms",s],["$s",a],["$m",l],["$H",d],["$W",c],["$M",f],["$y",M],["$D",b]].forEach(function(L){Q[L[1]]=function(k){return this.$g(k,L[0],L[1])}}),S.extend=function(L,k){return L.$i||(L(k,Z,S),L.$i=!0),S},S.locale=_,S.isDayjs=w,S.unix=function(L){return S(1e3*L)},S.en=y[h],S.Ls=y,S.p={},S})})(vs);const P=et,St="reactSchedulerOutsideWrapper",Ie="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",xs=ys`

  #${St} {
    font-family: ${Ie};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${St} *,
 #${St} *:before,
 #${St} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,bs={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},ws={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},lt=`
margin: 0;
padding: 0;
`,tt=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;x.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const Ce=50,He=24,nt=16,dt=40,Nt=dt+nt+He,ut=84,he=56,Ee=196,Ye=12,$e=50,ft=24,Ct=16,cn=40,Ss=ft+Ct+cn,dr=24,ur=52,Ue={topRow:`600 14px ${Ie}`,middleRow:`400 10px ${Ie}`,bottomRow:{name:`600 14px ${Ie}`,number:`600 10px ${Ie}`,hoursInDay:`400 9px ${Ie}`}},ht=3,fr=12,Ft=24,hr="reactSchedulerCanvasHeaderWrapper",pr="reactSchedulerCanvasWrapper",Ze=St,Cs=4,zt=48,Ke=5,ks=40,gr=8,ln=He/2+2,mr=nt/2+He+1,yr=2,ke=60,Oe=21,vr=58,xr="reactSchedulerBody",br=e=>e%4===0&&e%100>0||e%400===0?366:365,dn=e=>{const r=e.day();return r!==0&&r!==6},wr=(e,r)=>P(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),Sr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:dn(e),isCurrentDay:e.isSame(P(),"day"),year:parseInt(e.format("YYYY"))}),un=(e,r,t,n,o,s,a,l=!1)=>{s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.mode==="dark"?a.colors.primary:"#F2F6F4",e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,he);const d=a.mode==="dark";e.strokeStyle=d?a.colors.border:"#EEF3F0",e.beginPath(),e.moveTo(r+n-.5,t),e.lineTo(r+n-.5,t+he),e.stroke(),e.strokeStyle=d?a.colors.border:"#E4EAE7",e.beginPath(),e.moveTo(r,t+.5),e.lineTo(r+n,t+.5),e.stroke(),l&&(e.strokeStyle=d?a.colors.today:"#5C8374",e.beginPath(),e.moveTo(r+.5,t),e.lineTo(r+.5,t+he),e.stroke())},fn=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Oe},Ms=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=fn(a,s);for(let d=0;d<=t;d++){const c=P(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),u=c.isSame(P(),"day"),f=c.date()===1;un(e,d*Ce,a*he+l,Ce,dn(c),u,o,f)}}},$s=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},Ds=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*Ye;const d=r*he+s.length*Oe;for(let c=0;c<=t;c++){const f=P(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(P(),"week");for(let v=0;v<r;v++){const M=fn(v,s);un(e,a,v*he+M,ut,!0,f,o)}a+=ut}for(let c=0;c<t;c++){const u=wr(n,c)*Ye;$s(e,l,d,o),l+=u}},Es=(e,r,t,n,o,s=[])=>{const a=P(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const d=fn(l,s);for(let c=0;c<=t;c++){let u;c===Math.floor(t/2)?u=P():c>Math.floor(t/2)?u=P().add(c-Math.floor(t/2),"hours"):u=P().subtract(Math.floor(t/2)-l,"hours");const f=a.isSame(P(),"day")&&u.isSame(P(),"hour");un(e,c*$e+$e/2-.5,l*he+d,$e,dn(u),f,o)}}},_s=(e,r,t,n,o=!1)=>{const s=t*he+r*Oe,a=e.canvas.width;e.fillStyle=o?n.colors.subcontractBorder+"40":n.mode==="dark"?n.colors.primary+"80":"#E9EFEC",e.fillRect(0,s,a,Oe)},Ts=(e,r,t,n,o,s,a=[],l=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(pr)){switch(r){case 0:Ds(e,t,n,o,s,a);break;case 1:Ms(e,t,n,o,s,a);break;case 2:Es(e,t,n,o,s,a);break}for(let c=0;c<a.length;c++)_s(e,c,a[c],s,a[c]===l);if(r===1){const c=P(`${o.year}-${o.month+1}-${o.dayOfMonth}`),u=t*he+a.length*Oe;e.strokeStyle=s.mode==="dark"?s.colors.today:"#5C8374",e.setLineDash([]);for(let f=0;f<=n;f++)if(c.add(f,"days").date()===1){const v=f*Ce+.5;e.beginPath(),e.moveTo(v,0),e.lineTo(v,u),e.stroke()}}}};var hn={},As={get exports(){return hn},set exports(e){hn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=a(this).startOf(n).add(1,n).date(c),f=a(this).endOf(t);if(u.isBefore(f))return 1}var v=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),M=this.diff(v,t,!0);return M<0?a(this).startOf("week").week():Math.ceil(M)},l.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(As);const Ps=hn;var pn={},Os={get exports(){return pn},set exports(e){pn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Os);const Is=pn;var gn={},Ls={get exports(){return gn},set exports(e){gn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var u,f,v,M,b=a(this),D=(u=this.isoWeekYear(),f=this.$u,v=(f?s.utc:s)().year(u).startOf("year"),M=4-v.isoWeekday(),v.isoWeekday()>4&&(M+=7),v.add(M,t));return b.diff(D,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var d=l.startOf;l.startOf=function(c,u){var f=this.$utils(),v=!!f.u(u)||u;return f.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(c,u)}}})})(Ls);const Ys=gn;var mn={},Ns={get exports(){return mn},set exports(e){mn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,d){var c=o(s),u=o(a),f=(d=d||"()")[0]==="(",v=d[1]===")";return(f?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(u,l):!this.isAfter(u,l))||(f?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(u,l):!this.isBefore(u,l))}}})})(Ns);const Fs=mn;var yn={},zs={get exports(){return yn},set exports(e){yn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,u=2592e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:u,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},M=function(h){return h instanceof B},b=function(h,y,w){return new B(h,w,y.$l)},D=function(h){return n.p(h)+"s"},m=function(h){return h<0},O=function(h){return m(h)?Math.ceil(h):Math.floor(h)},U=function(h){return Math.abs(h)},j=function(h,y){return h?m(h)?{negative:!0,format:""+U(h)+y}:{negative:!1,format:""+h+y}:{negative:!1,format:""}},B=function(){function h(w,_,S){var C=this;if(this.$d={},this.$l=S,w===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return b(w*v[D(_)],this);if(typeof w=="number")return this.$ms=w,this.parseFromMilliseconds(),this;if(typeof w=="object")return Object.keys(w).forEach(function(L){C.$d[D(L)]=w[L]}),this.calMilliseconds(),this;if(typeof w=="string"){var Z=w.match(f);if(Z){var Q=Z.slice(2).map(function(L){return L!=null?Number(L):0});return this.$d.years=Q[0],this.$d.months=Q[1],this.$d.weeks=Q[2],this.$d.days=Q[3],this.$d.hours=Q[4],this.$d.minutes=Q[5],this.$d.seconds=Q[6],this.calMilliseconds(),this}}return this}var y=h.prototype;return y.calMilliseconds=function(){var w=this;this.$ms=Object.keys(this.$d).reduce(function(_,S){return _+(w.$d[S]||0)*v[S]},0)},y.parseFromMilliseconds=function(){var w=this.$ms;this.$d.years=O(w/c),w%=c,this.$d.months=O(w/u),w%=u,this.$d.days=O(w/l),w%=l,this.$d.hours=O(w/a),w%=a,this.$d.minutes=O(w/s),w%=s,this.$d.seconds=O(w/o),w%=o,this.$d.milliseconds=w},y.toISOString=function(){var w=j(this.$d.years,"Y"),_=j(this.$d.months,"M"),S=+this.$d.days||0;this.$d.weeks&&(S+=7*this.$d.weeks);var C=j(S,"D"),Z=j(this.$d.hours,"H"),Q=j(this.$d.minutes,"M"),L=this.$d.seconds||0;this.$d.milliseconds&&(L+=this.$d.milliseconds/1e3);var k=j(L,"S"),A=w.negative||_.negative||C.negative||Z.negative||Q.negative||k.negative,Y=Z.format||Q.format||k.format?"T":"",F=(A?"-":"")+"P"+w.format+_.format+C.format+Y+Z.format+Q.format+k.format;return F==="P"||F==="-P"?"P0D":F},y.toJSON=function(){return this.toISOString()},y.format=function(w){var _=w||"YYYY-MM-DDTHH:mm:ss",S={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return _.replace(d,function(C,Z){return Z||String(S[C])})},y.as=function(w){return this.$ms/v[D(w)]},y.get=function(w){var _=this.$ms,S=D(w);return S==="milliseconds"?_%=1e3:_=S==="weeks"?O(_/v[S]):this.$d[S],_===0?0:_},y.add=function(w,_,S){var C;return C=_?w*v[D(_)]:M(w)?w.$ms:b(w,this).$ms,b(this.$ms+C*(S?-1:1),this)},y.subtract=function(w,_){return this.add(w,_,!0)},y.locale=function(w){var _=this.clone();return _.$l=w,_},y.clone=function(){return b(this.$ms,this)},y.humanize=function(w){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!w)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},h}();return function(h,y,w){t=w,n=w().$utils(),w.duration=function(C,Z){var Q=w.locale();return b(C,{$l:Q},Z)},w.isDuration=M;var _=y.prototype.add,S=y.prototype.subtract;y.prototype.add=function(C,Z){return M(C)&&(C=C.asMilliseconds()),_.bind(this)(C,Z)},y.prototype.subtract=function(C,Z){return M(C)&&(C=C.asMilliseconds()),S.bind(this)(C,Z)}}})})(zs);const Bs=yn;var Hs="Expected a function",Cr=0/0,Ws="[object Symbol]",js=/^\s+|\s+$/g,Zs=/^[-+]0x[0-9a-f]+$/i,Vs=/^0b[01]+$/i,Gs=/^0o[0-7]+$/i,Xs=parseInt,Us=typeof Me=="object"&&Me&&Me.Object===Object&&Me,Ks=typeof self=="object"&&self&&self.Object===Object&&self,Js=Us||Ks||Function("return this")(),qs=Object.prototype,Qs=qs.toString,Rs=Math.max,ei=Math.min,vn=function(){return Js.Date.now()};function ti(e,r,t){var n,o,s,a,l,d,c=0,u=!1,f=!1,v=!0;if(typeof e!="function")throw new TypeError(Hs);r=kr(r)||0,xn(t)&&(u=!!t.leading,f="maxWait"in t,s=f?Rs(kr(t.maxWait)||0,r):s,v="trailing"in t?!!t.trailing:v);function M(y){var w=n,_=o;return n=o=void 0,c=y,a=e.apply(_,w),a}function b(y){return c=y,l=setTimeout(O,r),u?M(y):a}function D(y){var w=y-d,_=y-c,S=r-w;return f?ei(S,s-_):S}function m(y){var w=y-d,_=y-c;return d===void 0||w>=r||w<0||f&&_>=s}function O(){var y=vn();if(m(y))return U(y);l=setTimeout(O,D(y))}function U(y){return l=void 0,v&&n?M(y):(n=o=void 0,a)}function j(){l!==void 0&&clearTimeout(l),c=0,n=d=o=l=void 0}function B(){return l===void 0?a:U(vn())}function h(){var y=vn(),w=m(y);if(n=arguments,o=this,d=y,w){if(l===void 0)return b(d);if(f)return l=setTimeout(O,r),M(d)}return l===void 0&&(l=setTimeout(O,r)),a}return h.cancel=j,h.flush=B,h}function xn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function ni(e){return!!e&&typeof e=="object"}function ri(e){return typeof e=="symbol"||ni(e)&&Qs.call(e)==Ws}function kr(e){if(typeof e=="number")return e;if(ri(e))return Cr;if(xn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=xn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(js,"");var t=Vs.test(e);return t||Gs.test(e)?Xs(e.slice(2),t?2:8):Zs.test(e)?Cr:+e}var bn=ti;const Bt=[0,1,2];var kt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(kt||{});const Mr=e=>Bt.includes(e),pt=e=>{var n;const t=(((n=document.getElementById(Ze))==null?void 0:n.clientWidth)||0)-Ee;switch(e){case 1:return Math.ceil(t/Ce)*ht;case 2:return Math.ceil(t/$e)*ht;default:return Math.ceil(t/ut)*ht}},oi=e=>pt(e)/ht,Ht=(e,r)=>{const t=pt(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},si=(e,r)=>{const t=Ht(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},wn=()=>{var t;const e=((t=document.getElementById(Ze))==null?void 0:t.clientWidth)||0;return Math.max(0,e-Ee)*ht},$r=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:P(),jumpDate:null,isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});P.extend(Ps),P.extend(Is),P.extend(Ys),P.extend(Fs),P.extend(Bs);const ii=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=P(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:d})=>{const{zoom:c,maxRecordsPerPage:u=50}=n,[f,v]=p.useState(c),[M,b]=p.useState(P()),[D,m]=p.useState(null),[O,U]=p.useState(!1),[j,B]=p.useState(pt(f)),h=Bt[f]!==Bt[Bt.length-1],y=f!==0,w=p.useMemo(()=>si(M,f),[M,f]),_=Ht(M,f).startDate,S=P(_).dayOfYear(),C=Sr(_),Z=p.useRef(null),Q=p.useRef(!1),L=p.useRef(null),[k,A]=p.useState([{x:0,y:0}]),Y=p.useCallback((V,z="auto")=>{var K,E,X,ne;const g=wn();switch(V){case"back":return(K=Z.current)==null?void 0:K.scrollTo({behavior:z,left:g/3});case"forward":return(E=Z.current)==null?void 0:E.scrollTo({behavior:z,left:g/3});case"middle":{const J=g/ht/4;return(X=Z.current)==null?void 0:X.scrollTo({behavior:z,left:g/2-J})}default:return(ne=Z.current)==null?void 0:ne.scrollTo({behavior:z,left:g/2})}},[]),F=V=>{A(V)},I=p.useCallback(V=>{const z=oi(f);let g;switch(f){case 0:g=z*7;break;case 1:g=z;break;case 2:g=Math.ceil(z/Ft);break}bn(()=>{switch((V==="forward"||V==="back")&&(Q.current=!0),L.current=V,V){case"back":b(E=>E.subtract(g,"days"));break;case"forward":b(E=>E.add(g,"days"));break;case"middle":b(P());break}s==null||s(w)},300)()},[s,w,f]);p.useEffect(()=>{L.current&&(Y(L.current),L.current=null)},[M,Y]),p.useEffect(()=>{Z.current=document.getElementById(Ze),B(pt(f))},[f]),p.useEffect(()=>{const V=()=>B(pt(f));return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[f]),p.useEffect(()=>{s==null||s(w)},[s,w]),p.useEffect(()=>{U(!1)},[o]),p.useEffect(()=>{O||(Y("middle"),U(!0),b(o))},[o,O,Y]);const W=()=>{t||(b(V=>f===2?V.add(dr,"hours"):V.add(yr,"weeks")),s==null||s(w))},re=p.useCallback(()=>{t||I("forward")},[t,I]),ee=()=>{t||(b(V=>f===2?V.subtract(dr,"hours"):V.subtract(yr,"weeks")),s==null||s(w))},N=p.useCallback(()=>{!O||t||I("back")},[O,t,I]),H=p.useCallback(()=>{t||(L.current="middle",b(P()),m(null),s==null||s(w))},[t,s,w]),q=p.useCallback(V=>{if(t)return;const z=P(V).startOf("day");z.isValid()&&(L.current="middle",b(z),m(z),s==null||s(w))},[t,s,w]);p.useEffect(()=>{if(!D)return;const V=()=>m(null);return document.addEventListener("mousedown",V,{once:!0}),()=>document.removeEventListener("mousedown",V)},[D]);const te=()=>G(f+1),$=()=>G(f-1),G=V=>{Mr(V)&&(v(V),B(pt(V)),s==null||s(w))},T=()=>a==null?void 0:a(),{Provider:R}=$r;return i.jsx(R,{value:{data:e,config:n,handleGoNext:W,handleScrollNext:re,handleGoPrev:ee,handleScrollPrev:N,handleGoToday:H,goToDate:q,zoomIn:te,zoomOut:$,setZoom:G,zoom:f,isNextZoom:h,isPrevZoom:y,date:M,jumpDate:D,isLoading:t,cols:j,startDate:C,dayOfYear:S,toggleDisplayActiveUnits:T,tilesCoords:k,updateTilesCoords:F,recordsThreshold:u,onClearFilterData:l,suppressNextSlideRef:Q,toolbarActions:d},children:r})},We=()=>p.useContext($r),Dr=(e,r,t)=>{const n=Math.max(0,r),o=Math.max(0,t);e.canvas.width=n*window.devicePixelRatio,e.canvas.height=o*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=o+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Er=()=>{var e;return typeof window<"u"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)},_r=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*he+n*Oe;if(e>=s+Oe)n++;else if(e>=s)return o*he+n*Oe-n*Oe}return t-n*Oe},ai=5,Tr=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>ai},gt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},ci=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:d=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(G=>({...G,data:[G.data]})):r:e,{enabled:u=!0,isDraggable:f,resourceOnly:v=!1,isValidDrop:M}=a,[b,D]=p.useState("idle"),[m,O]=p.useState(null),[U,j]=p.useState({x:0,y:0}),[B,h]=p.useState({width:0,height:48}),[y,w]=p.useState(null),[_,S]=p.useState(!0),C=p.useRef({x:0,y:0}),Z=p.useRef({x:0,y:0}),Q=p.useRef({x:0,y:0}),L=p.useRef(null),k=p.useRef(null),A=p.useRef(0),Y=p.useRef(null),F=p.useCallback(G=>!u||G.draggable===!1?!1:f?f(G):!0,[u,f]),I=p.useCallback((G,T)=>{const R=_r(T,d),V=Math.floor(R/he);let z;switch(t){case 0:z=Ye*7;break;case 1:z=Ce;break;case 2:z=$e;break;default:z=Ce}const g=Math.floor(G/z);let K;const E=P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:K=E.add(g*7,"days").toDate();break;case 1:K=E.add(g,"days").toDate();break;case 2:K=E.add(g,"hours").toDate();break;default:K=E.toDate()}return{snappedDate:K,snappedResourceIndex:V}},[t,n,d]),W=p.useCallback((G,T,R,V)=>{const z=[],g=T.getTime(),K=R.getTime(),E=c.find(ne=>ne.id===V);if(!E)return z;const X=[];for(const ne of E.data)Array.isArray(ne)?X.push(...ne):X.push(ne);for(const ne of X){if(ne.segmentId===G.segmentId)continue;const J=ne.startDate.getTime(),ce=ne.endDate.getTime();if(g>=J&&g<ce||K>J&&K<=ce||g<=J&&K>=ce){const de=new Date(Math.max(g,J)),pe=new Date(Math.min(K,ce)),Se=pe.getTime()-de.getTime();z.push({event:ne,conflictStart:de,conflictEnd:pe,overlapDuration:Se})}}return z},[c]),re=p.useCallback((G,T,R,V)=>{const z=[],g=T.getTime(),K=R.getTime(),E=P(T).format("YYYY-MM-DD"),X=c.find(J=>J.id===V);if(!X)return z;const ne=[];for(const J of X.data)Array.isArray(J)?ne.push(...J):ne.push(J);for(const J of ne){if(J.segmentId===G.segmentId)continue;const ce=J.startDate.getTime(),fe=J.endDate.getTime(),de=P(J.startDate).format("YYYY-MM-DD"),pe=P(J.endDate).format("YYYY-MM-DD"),Se=P(R).format("YYYY-MM-DD");if(!(de===E||pe===E||de===Se||pe===Se||P(J.startDate).isBefore(T,"day")&&P(J.endDate).isAfter(R,"day"))||g>=ce&&g<fe||K>ce&&K<=fe||g<=ce&&K>=fe)continue;let ue,_e;fe<=g?(ue=g-fe,_e="before"):(ue=ce-K,_e="after"),z.push({event:J,timeGap:ue,position:_e})}return z.sort((J,ce)=>J.timeGap-ce.timeGap)},[c]),ee=p.useCallback((G,T,R)=>{const V=I(T,R);let z,g;if(v)z=G.startDate,g=G.endDate;else{const fe=P(G.endDate).diff(G.startDate);z=V.snappedDate,g=P(z).add(fe,"milliseconds").toDate()}let K=0,E="",X;for(const fe of e){const de=Math.max(fe.data.length,1);if(V.snappedResourceIndex<K+de){E=fe.id,X=fe.capacity;break}K+=de}if(!E)return null;let ne=!0;X!==void 0&&G.totalPassengers!==void 0&&(ne=G.totalPassengers<=X);const J=W(G,z,g,E),ce=J.length===0?re(G,z,g,E):[];return{startDate:z,endDate:g,resourceId:E,resourceIndex:V.snappedResourceIndex,resourceCapacity:X,hasCapacity:ne,conflicts:J,hasConflict:J.length>0,nearbyEvents:ce}},[I,e,v,W,re]),N=p.useCallback((G,T)=>{if(!s)return;const R=Date.now();if(R-A.current<100)return;A.current=R;const V={event:G,currentStartDate:T.startDate,currentEndDate:T.endDate,currentResourceId:T.resourceId,conflicts:T.conflicts};s(V)},[s]),H=p.useCallback((G,T)=>{if(!F(G)||!l.current)return;T.preventDefault(),T.stopPropagation();const R=T.target.closest('[style*="left"]');let V=0,z=0;R&&R.style.left&&R.style.top&&(V=parseInt(R.style.left),z=parseInt(R.style.top));const g=gt(T.clientX,T.clientY,l.current);C.current={x:V,y:z},Z.current={x:T.clientX,y:T.clientY},Q.current={x:g.x-V,y:20},Y.current={startDate:G.startDate,endDate:G.endDate,resourceId:""};for(const X of e){for(const ne of X.data)if(ne.some(J=>J.segmentId===G.segmentId)){Y.current.resourceId=X.id;break}if(Y.current.resourceId)break}O(G),D("potential"),j({x:V,y:z});let K=100,E=48;if(R){const X=R.getBoundingClientRect();K=X.width,E=X.height}h({width:K,height:E})},[F,l,e,t]),q=p.useCallback(G=>{if(!l.current)return;let T=l.current;for(;T&&T!==document.body;){const J=window.getComputedStyle(T);if(T.scrollHeight>T.clientHeight&&(J.overflowY==="auto"||J.overflowY==="scroll"||J.overflow==="auto"||J.overflow==="scroll"))break;T=T.parentElement}(!T||T===document.body)&&(T=document.documentElement);const R=T.getBoundingClientRect(),V=G.clientY,z=50,g=12,K=V-R.top,E=R.bottom-V;let X=!1,ne=0;K<z&&K>0?(X=!0,ne=-g*(1-K/z)):E<z&&E>0&&(X=!0,ne=g*(1-E/z)),X?(k.current&&cancelAnimationFrame(k.current),k.current=requestAnimationFrame(()=>{T.scrollTop+=ne,b==="dragging"&&q(G)})):k.current&&(cancelAnimationFrame(k.current),k.current=null)},[l,b]),te=p.useCallback(G=>{if(b==="idle"||b==="animating"||!m||!l.current)return;const T={x:G.clientX,y:G.clientY};if(b==="potential")if(Tr(Z.current,T))D("dragging");else return;q(G);const R=gt(G.clientX,G.clientY,l.current);L.current&&cancelAnimationFrame(L.current),L.current=requestAnimationFrame(()=>{const V={x:R.x-Q.current.x,y:R.y-Q.current.y};j(V);const z=ee(m,R.x,R.y);if(z&&M){const g={event:m,currentStartDate:z.startDate,currentEndDate:z.endDate,currentResourceId:z.resourceId,conflicts:z.conflicts};z.hasConflict=!M(g)}if(w(z),z){const g=z.hasCapacity!==!1;S(g),N(m,z)}})},[b,m,l,ee,N,M,q]),$=p.useCallback(async G=>{if(b==="idle"||b==="animating")return;const T={x:G.clientX,y:G.clientY};if(!Tr(Z.current,T)||b==="potential"){D("idle"),O(null),w(null);return}if(!m||!y||!Y.current){D("idle"),O(null),w(null);return}if(y.hasCapacity===!1){S(!1),D("animating"),j(C.current),setTimeout(()=>{D("idle"),O(null),w(null),S(!0)},300);return}const V={event:m,originalStartDate:Y.current.startDate,originalEndDate:Y.current.endDate,originalResourceId:Y.current.resourceId,newStartDate:y.startDate,newEndDate:y.endDate,newResourceId:y.resourceId,hasConflict:y.hasConflict,conflicts:y.conflicts};let z=!0;if(o)try{const g=o(V);z=g instanceof Promise?await g:g}catch{z=!1}z?(S(!0),D("idle"),O(null),w(null)):(S(!1),D("animating"),j(C.current),setTimeout(()=>{D("idle"),O(null),w(null),S(!0)},300))},[b,m,y,o,M]);return p.useEffect(()=>{if(b==="potential"||b==="dragging"){const G=R=>te(R),T=R=>$(R);return document.addEventListener("mousemove",G),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",G),document.removeEventListener("mouseup",T)}}else return()=>{}},[b,te,$]),p.useEffect(()=>()=>{L.current&&(cancelAnimationFrame(L.current),L.current=null),k.current&&(cancelAnimationFrame(k.current),k.current=null)},[]),p.useEffect(()=>{(b==="idle"||b==="animating")&&(L.current&&(cancelAnimationFrame(L.current),L.current=null),k.current&&(cancelAnimationFrame(k.current),k.current=null))},[b]),p.useEffect(()=>{(b==="dragging"||b==="potential")&&(b==="dragging"?(D("animating"),j(C.current),setTimeout(()=>{D("idle"),O(null),w(null)},300)):(D("idle"),O(null),w(null)))},[t]),p.useEffect(()=>{if((b==="dragging"||b==="potential")&&m){let G=!1;for(const T of e){for(const R of T.data)if(R.some(V=>V.segmentId===m.segmentId)){G=!0;break}if(G)break}G||(b==="dragging"?(D("animating"),j(C.current),setTimeout(()=>{D("idle"),O(null),w(null)},300)):(D("idle"),O(null),w(null)))}},[e,b,m]),{dragState:b,draggedEvent:m,ghostPosition:U,ghostDimensions:B,dropTarget:y,isValidDrop:_,handleDragStart:H,isDraggable:F,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:v}},li=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:d,separatorRowIndices:c=[]})=>{const{enabled:u=!1,isSelectable:f}=a,v=u&&!!o,M=p.useCallback(g=>{let K=0;for(const E of c)E<=g&&K++;return g*he+K*Oe},[c]),[b,D]=p.useState("idle"),[m,O]=p.useState(null),[U,j]=p.useState(null),[B,h]=p.useState(null),[y,w]=p.useState(!1),[_,S]=p.useState([]),[C,Z]=p.useState(!1),Q=p.useRef(null),L=p.useRef(null),k=p.useRef(null),A=p.useRef(null),Y=p.useCallback(()=>{switch(t){case 0:return Ye*7;case 1:return Ce;case 2:return $e;default:return Ce}},[t]),F=p.useCallback(g=>{const K=Y(),E=Math.floor(g/K),X=P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return X.add(E*7,"days").toDate();case 1:return X.add(E,"days").toDate();case 2:return X.add(E,"hours").toDate();default:return X.toDate()}},[t,n,Y]),I=p.useCallback(g=>{const K=_r(g,c),E=Math.floor(K/he);let X=0;for(const ne of e){const J=Math.max(ne.data.length,1);if(E<X+J)return{resourceId:ne.id,resourceIndex:E,resourceLabel:ne.label};X+=J}return null},[e,c]),W=p.useCallback(g=>{const K=Y();return Math.floor(g/K)*K},[Y]),re=p.useCallback((g,K,E,X=[])=>{const ne=[],ce=(r||e).find(pe=>pe.id===g),fe=K.getTime(),de=E.getTime();if(ce){const pe=ce.data[0],Se=pe&&Array.isArray(pe)?ce.data.flat():ce.data;for(const be of Se){const ae=new Date(be.startDate).getTime(),ue=new Date(be.endDate).getTime();if(fe<ue&&de>ae){const _e=new Date(Math.max(fe,ae)),Fe=new Date(Math.min(de,ue)),De=Fe.getTime()-_e.getTime();ne.push({event:be,conflictStart:_e,conflictEnd:Fe,overlapDuration:De})}}}for(const pe of X){if(pe.resourceId!==g)continue;const Se=pe.startDate.getTime(),be=pe.endDate.getTime();if(fe<be&&de>Se){const ae=new Date(Math.max(fe,Se)),ue=new Date(Math.min(de,be)),_e=ue.getTime()-ae.getTime(),Fe={segmentId:`pending-${pe.startDate.getTime()}`,reservationId:`pending-${pe.startDate.getTime()}`,startDate:pe.startDate,endDate:pe.endDate,occupancy:0,title:`New Event (${pe.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ne.push({event:Fe,conflictStart:ae,conflictEnd:ue,overlapDuration:_e})}}return ne},[e,r]),ee=p.useCallback(g=>{if(!v||d||!l.current||g.button!==0)return;const K=g.target;if(K.closest("[data-segment-id]")||K.closest("[data-multi-select-ui]"))return;const E=gt(g.clientX,g.clientY,l.current),X=I(E.y);if(!X)return;Q.current={x:g.clientX,y:g.clientY},L.current=X.resourceIndex;const ne=W(E.x),J=Y(),ce=M(X.resourceIndex);O(E),j(E),h({x:ne,y:ce,width:J,height:he}),D("selecting")},[v,d,l,I,W,Y,M]),N=p.useCallback(g=>{j(g);const K=Y(),E=W((m==null?void 0:m.x)||0),X=W(g.x),ne=M(L.current),J=Math.min(E,X),ce=Math.max(E,X)+K;h({x:J,y:ne,width:ce-J,height:he})},[m,Y,W,M]),H=p.useCallback(()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null)},[]),q=p.useCallback((g,K)=>{const E=document.getElementById(Ze);if(!E||!l.current)return;const X=E.getBoundingClientRect(),ne=60,J=12,ce=g-(X.left+Ee),fe=X.right-g;let de=0;ce<ne?de=-J*(1-Math.max(0,ce)/ne):fe<ne&&(de=J*(1-Math.max(0,fe)/ne)),H(),de!==0&&(A.current=requestAnimationFrame(()=>{E.scrollLeft+=de,N(gt(g,K,l.current)),q(g,K)}))},[l,N,H]),te=p.useCallback(g=>{if(b!=="selecting"||!l.current||L.current===null)return;const K=gt(g.clientX,g.clientY,l.current);k.current&&cancelAnimationFrame(k.current),k.current=requestAnimationFrame(()=>N(K)),q(g.clientX,g.clientY)},[b,l,N,q]),$=p.useCallback(g=>{if(b!=="selecting")return;if(H(),!l.current||!m||!Q.current){D("idle"),O(null),j(null),h(null);return}const K=gt(g.clientX,g.clientY,l.current),E=I(m.y);if(!E){D("idle"),O(null),j(null),h(null);return}const X=Math.min(m.x,K.x),ne=Math.max(m.x,K.x),J=F(X),ce=F(ne),fe=P(ce).hour(23).minute(59).second(0).millisecond(0).toDate();if(f&&!f(E.resourceId,J,fe)){D("idle"),O(null),j(null),h(null);return}const de=re(E.resourceId,J,fe,_),pe=de.length>0,Se={startDate:J,endDate:fe,resourceId:E.resourceId,resourceLabel:E.resourceLabel,zoomLevel:t,hasConflict:pe,conflicts:pe?de:void 0};if(y)S(be=>[...be,Se]),Z(!0);else if(o){const be=o(Se),ae=ue=>{ue!=null&&ue.continueMultiSelect&&(w(!0),S([Se]),Z(!0))};be instanceof Promise?be.then(ae):ae(be)}D("idle"),O(null),j(null),h(null),Q.current=null,L.current=null},[b,l,m,I,F,f,o,t,y,re,_,H]),G=p.useCallback(()=>{if(_.length>0&&s){Z(!1);const g=s(_),K=E=>{E!=null&&E.continueMultiSelect?Z(!0):(S([]),w(!1),Z(!1))};g instanceof Promise?g.then(K):K(g);return}S([]),w(!1),Z(!1)},[_,s]),T=p.useCallback(()=>{S([]),w(!1),Z(!1)},[]),R=p.useCallback(g=>{S(K=>{const E=K.filter((X,ne)=>ne!==g);return E.length===0&&(w(!1),Z(!1)),E})},[]),V=p.useCallback((g,K)=>{S(E=>E.map((X,ne)=>{if(ne!==g)return X;const J={...X,...K},ce=E.filter((de,pe)=>pe!==g),fe=re(J.resourceId,J.startDate,J.endDate,ce);return{...J,hasConflict:fe.length>0,conflicts:fe.length>0?fe:void 0}}))},[re]),z=p.useCallback(g=>{g.key==="Escape"&&(b==="selecting"?(H(),D("idle"),O(null),j(null),h(null),Q.current=null,L.current=null):y&&_.length>0&&(S([]),w(!1),Z(!1)))},[b,y,_.length,H]);return p.useEffect(()=>{if(b==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",$),document.addEventListener("keydown",z),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",$),document.removeEventListener("keydown",z)}},[b,te,$,z]),p.useEffect(()=>{if(y&&_.length>0)return document.addEventListener("keydown",z),()=>{document.removeEventListener("keydown",z)}},[y,_.length,z]),p.useEffect(()=>()=>{k.current&&(cancelAnimationFrame(k.current),k.current=null),H()},[H]),p.useEffect(()=>{d&&b==="selecting"&&(H(),D("idle"),O(null),j(null),h(null),Q.current=null,L.current=null)},[d,b,H]),{selectionState:b,selectionStart:m,selectionEnd:U,selectionBox:B,handleGridMouseDown:ee,isEnabled:v,pendingSelections:_,confirmSelections:G,clearSelections:T,removeSelection:R,updateSelection:V,isMultiSelectActive:y,hasUnconfirmedSelections:C}},di=x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,ui=x.div`
  position: relative;
`,fi=x.canvas``;x.canvas``;const hi=x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Ar=x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,pi=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onTileContextMenu:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onDragStateChange:u,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:M,separatorRowIndices:b=[],subcontractSeparatorRow:D=-1,fadingUnitIds:m},O){const U=p.useRef(!1),{handleScrollNext:j,handleScrollPrev:B,date:h,isLoading:y,cols:w,startDate:_,suppressNextSlideRef:S,config:C}=We(),Z=p.useRef(null),Q=p.useRef(null),L=p.useRef(t),k=p.useRef(h),A=p.useRef(null),Y=p.useRef(null),F=p.useRef(null),I=p.useRef(null),[W,re]=p.useState(!1),ee=Yt(),{dragState:N,draggedEvent:H,ghostPosition:q,ghostDimensions:te,dropTarget:$,isValidDrop:G,handleDragStart:T,isDraggable:R,draggingEventId:V,resourceOnly:z}=ci({data:n,baseData:o||n,zoom:r,startDate:_,onEventDrop:l,onEventDrag:d,draggableConfig:c,gridRef:I,separatorRowIndices:b});p.useEffect(()=>{const ge=N==="dragging"||N==="potential";re(ge),u&&u(ge)},[N,u]);const g=p.useRef(!1),K=p.useRef(h),E=p.useRef(null);p.useEffect(()=>{var Te;const ge=K.current;if(K.current=h,!g.current){g.current=!0;return}if(S!=null&&S.current){S.current=!1;return}const oe=I.current;if(!(oe!=null&&oe.animate))return;const le=h.isAfter(ge)?48:-48;(Te=E.current)==null||Te.cancel(),oe.style.willChange="transform";const ie=oe.animate([{transform:`translateX(${le}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),we=()=>{oe.style.willChange=""};ie.onfinish=we,ie.oncancel=we,E.current=ie},[h,S]);const{selectionState:X,selectionBox:ne,handleGridMouseDown:J,pendingSelections:ce,confirmSelections:fe,clearSelections:de,removeSelection:pe,updateSelection:Se,isMultiSelectActive:be,hasUnconfirmedSelections:ae}=li({data:n,baseData:o||n,zoom:r,startDate:_,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:M,gridRef:I,isDragging:W,separatorRowIndices:b}),ue=p.useCallback(ge=>{ge.preventDefault()},[]),_e=p.useCallback(ge=>{ge.preventDefault()},[]),Fe=b.length*Oe,De=p.useCallback(ge=>{const oe=wn(),le=t*he+1+Fe;Dr(ge,oe,le),Ts(ge,r,t,w,_,ee,b,D)},[w,_,t,r,ee,b,D,Fe]);return p.useEffect(()=>{if(!Z.current)return;const ge=Z.current.getContext("2d");if(!ge)return;const oe=()=>De(ge);return window.addEventListener("resize",oe),()=>window.removeEventListener("resize",oe)},[De]),p.useEffect(()=>{var ze;const ge=L.current,oe=k.current;if(L.current=t,k.current=h,ge===t||!h.isSame(oe,"day")||Er())return;const le=Z.current,ie=Q.current;if(!le||!ie||le.width===0||le.height===0)return;const we=ie.getContext("2d");if(!we)return;ie.width=le.width,ie.height=le.height,ie.style.width=le.style.width,ie.style.height=le.style.height,we.setTransform(1,0,0,1,0,0),we.clearRect(0,0,ie.width,ie.height),we.drawImage(le,0,0),(ze=A.current)==null||ze.cancel(),ie.style.opacity="1";const Te=ie.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});Te.onfinish=()=>{ie.style.opacity="0"},A.current=Te},[t,h]),p.useEffect(()=>{const ge=Z.current;if(!ge)return;ge.style.letterSpacing="1px";const oe=ge.getContext("2d");oe&&De(oe)},[h,t,r,De]),p.useEffect(()=>{if(!Y.current)return;const ge=new IntersectionObserver(oe=>{oe[0].isIntersecting&&!U.current&&(U.current=!0,j(),setTimeout(()=>{U.current=!1},1e3))},{root:document.getElementById(Ze)});return ge.observe(Y.current),()=>{ge.disconnect()}},[j]),p.useEffect(()=>{if(!F.current)return;const ge=new IntersectionObserver(oe=>{oe[0].isIntersecting&&!U.current&&(U.current=!0,B(),setTimeout(()=>{U.current=!1},1e3))},{root:document.getElementById(Ze),rootMargin:`0px 0px 0px -${Ee}px`});return ge.observe(F.current),()=>{ge.disconnect()}},[B]),i.jsxs(di,{id:pr,children:[i.jsxs(ui,{ref:ge=>{typeof O=="function"?O(ge):O&&(O.current=ge),I.current=ge},onMouseDown:J,style:{cursor:f?"crosshair":"default"},children:[i.jsx(Ar,{position:"left",ref:F}),i.jsx(Tn,{isLoading:y,position:"left"}),i.jsx(fi,{ref:Z,onDragStart:ue,onDragOver:_e,style:{userSelect:N==="dragging"?"none":"auto"}}),i.jsx(hi,{ref:Q,"aria-hidden":!0}),i.jsx(ld,{zoom:r,startDate:_}),i.jsx(fd,{zoom:r,startDate:_}),i.jsx(yl,{data:n,zoom:r,onTileClick:s,onTileContextMenu:a,onDragStart:T,isDraggable:R,draggingEventId:V,separatorRowIndices:b,fadingUnitIds:m,highlightedSegmentId:(C==null?void 0:C.highlightedSegmentId)??null,focusedUnitIds:(C==null?void 0:C.focusedUnitIds)??null,leavingSegmentIds:(C==null?void 0:C.leavingSegmentIds)??null,ghostProject:(C==null?void 0:C.ghostProject)??null}),i.jsx(Ar,{ref:Y,position:"right"}),i.jsx(Tn,{isLoading:y,position:"right"}),(N==="dragging"||N==="animating")&&i.jsx(Zl,{draggedEvent:H,ghostPosition:q,ghostDimensions:te,dropTarget:$,isValidDrop:G,dragState:N,zoom:r,data:n,resourceOnly:z,separatorRowIndices:b}),i.jsx(Xl,{selectionBox:ne,isSelecting:X==="selecting"}),be&&ce.length>0&&i.jsx(ad,{selections:ce,data:n,zoom:r,startDate:_,onRemove:pe,onUpdate:Se,separatorRowIndices:b})]}),be&&ae&&ce.length>0&&i.jsx(td,{selections:ce,onConfirm:fe,onClear:de,onRemove:pe})]})}),Pr=e=>{const r=P.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Or=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/ke);t+=o.hours+s,n+=r%ke,n>=ke&&(t++,n-=ke)}),{hours:t,minutes:n}},Ir=(e,r)=>{let t=gr;switch(r){case 0:t=ks;break;case 1:t=gr;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=ke-e.minutes;return a===ke&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},gi=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const u=P(c.startDate).isoWeek(),f=P(c.startDate).isoWeekday(),v=P(c.endDate).isoWeek(),M=P(c.endDate).isoWeekday(),{hours:b,minutes:D}=Pr(c.occupancy);if(n===u){const m=(Ke+1-f)*b,O=(Ke+1-f)*D;return{hours:Math.max(0,m),minutes:O}}else if(n===v){const m=M>Ke?Ke*b:M*b,O=M>Ke?Ke*D:M*D;return{hours:m,minutes:O}}else if(P(r).isBetween(c.startDate,c.endDate))return{hours:Ke*b,minutes:Ke*D};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Or(o),{free:l,overtime:d}=Ir({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:d}},mi=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(u=>{const{hours:f,minutes:v}=Pr(u.occupancy);return o<=(n?7:5)?{hours:f,minutes:v}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Or(s),{free:d,overtime:c}=Ir({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:d,overtime:c}},yi=(e,r)=>{let t=0;e.forEach(l=>{const d=P(l.startDate).hour(),c=P(l.endDate).hour(),u=r.hour(),f=P(l.endDate).minute(),v=P(l.startDate).minute();d<u&&c>u?t+=ke:d===u&&c===u&&v&&f?t+=f?f-v:ke-v:d===u&&c>=u?t+=v?ke-v:ke:c===u&&f&&(t+=f)});const n=Math.floor(t/ke),o=t%ke,s=n||o?0:1,a=n?0:o?ke-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},vi=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?P(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?P(t).isBetween(a.startDate,a.endDate,"hour","[]"):P(a.startDate).isBetween(P(t),P(t).add(6,"days"),"day","[]")||P(t).isBetween(P(a.startDate),P(a.endDate),"day","[]"));switch(n){case 1:return mi(s,t,n,o);case 2:return yi(s,t);default:return gi(s,t,n)}},xi=(e,r,t,n,o,s,a=!1)=>{let l="weeks",d;switch(s){case 0:l="weeks",d=ut;break;case 1:l="days",d=Ce;break;case 2:l="hours",d=$e;break}const c=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),u=P(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),f=Math.ceil(t.y/he),v=n.findIndex((O,U,j)=>j.slice(0,U+1).reduce((h,y)=>h+y,0)>=f),M=s===2?(c+1)*d:c*d,b=(f-1)*he+he,D=vi(o[v],v,u,s,a),m=P(e.startDate).isSame(P(e.endDate),"day");return{coords:{x:M,y:b},mouseCoords:t,resourceIndex:v,disposition:D,reservationData:{startTime:P(e.startDate).format("hh:mm A"),startDate:P(e.startDate).format("MMM D, YYYY"),endTime:P(e.endDate).format("hh:mm A"),endDate:P(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:m,passengers:e.totalPassengers,readiness:e.readiness,readinessNote:e.readinessNote,subcontractConfirmed:e.subcontractConfirmed}}};function bi(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function wi(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const u of e)!u.isSubcontract&&u.capacity!=null&&t.add(u.capacity);const n=[...t].sort((u,f)=>u-f);if(n.length<2)return r;const o=Math.min(5,n.length),s=bi(n,o),a=[];let l=0;for(const u of s)a.push({min:n[l],max:n[u-1],values:n.slice(l,u)}),l=u;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const d=[],c=new Map;return a.forEach((u,f)=>{const v="__auto_cat_"+f,M=u.min===u.max?u.min+" pax":u.min+"-"+u.max+" pax";d.push({id:v,name:M,minPassengers:u.min,maxPassengers:u.max});for(const b of u.values)c.set(b,v)}),{categories:d,capacityToCategoryId:c}}const Si=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(u)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((d,c)=>{const u={id:e[c+s].id,label:e[c+s].label,data:d,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};a.push(u),c===r.length-s-1&&o.push(a)})),o):(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};a.push(u)}),o.push(a),o)};var Sn={},Ci={get exports(){return Sn},set exports(e){Sn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(Ci);const ki=Sn;var Cn={},Mi={get exports(){return Cn},set exports(e){Cn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Mi);const $i=Cn,Di=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=P(t.startDate).startOf("day"),d=P(t.endDate).startOf("day"),c=P(o[a].startDate).startOf("day"),u=P(o[a].endDate).startOf("day");if(l.isBetween(c,u,null,"[]")||d.isBetween(c,u,null,"[]")||l.isBefore(c,"minute")&&d.isAfter(u,"minute")||l.isAfter(c,"minute")&&d.isBefore(u,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};P.extend(ki),P.extend($i);const Lr=new WeakMap,Ei=e=>{const r=Lr.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=P(o.startDate),l=P(s.startDate),d=a.startOf("day").diff(l.startOf("day"),"day");return d!==0?d:a.diff(l)}),n=Di(t);return Lr.set(e,n),n},_i=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Ei(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Ti=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Ai=e=>{const{recordsThreshold:r}=We(),[t,n]=p.useState(0),[o,s]=p.useState(0),a=p.useRef(null);p.useEffect(()=>{a.current=document.getElementById(Ze)},[]);const{projectsPerPerson:l,rowsPerPerson:d}=p.useMemo(()=>_i(e),[e]),c=p.useMemo(()=>Si(e,l,d,r),[e,l,r,d]),u=p.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(m=>m+c[Math.max(o,0)].length),s(m=>Math.min(m+1,c.length-1)),window.scroll({top:0}))},[o,c]),f=p.useCallback(()=>{c[o].length&&(n(m=>Math.max(m-c[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,c]),v=p.useCallback(()=>{n(0),s(0)},[]),M=t+c[o].length,b=p.useMemo(()=>d.slice(t,M),[M,d,t]),D=p.useMemo(()=>l.slice(t,M),[M,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:D,rowsPerItem:b,totalRowsPerPage:Ti(c[o]),next:u,previous:f,reset:v}};var kn={},Pi={get exports(){return kn},set exports(e){kn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(Pi);const Oi=kn;var Mn={},Ii={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Me,function(t){function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=n(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function a(v,M,b){var D=v+" ";switch(b){case"m":return M?"minuta":"minutę";case"mm":return D+(s(v)?"minuty":"minut");case"h":return M?"godzina":"godzinę";case"hh":return D+(s(v)?"godziny":"godzin");case"MM":return D+(s(v)?"miesiące":"miesięcy");case"yy":return D+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,u=function(v,M){return c.test(M)?l[v.month()]:d[v.month()]};u.s=d,u.f=l;var f={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:u,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(f,null,!0),f})})(Ii);const Li=Mn;var $n={},Yi={get exports(){return $n},set exports(e){$n=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Me,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(d,c,u){var f=s[u];return Array.isArray(f)&&(f=f[c?0:1]),f.replace("%d",d)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Yi);const Ni=$n;var Dn={},Fi={get exports(){return Dn},set exports(e){Dn=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Me,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(u,f){return l.test(f)?s[u.month()]:a[u.month()]};d.s=a,d.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(u){return u+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Fi);const zi=Dn;var En={},Bi={get exports(){return En},set exports(e){En=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Me,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(Bi);const Hi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Oi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Li},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"One Day",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:En},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:zi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:Ni}];class Wi{constructor(){yo(this,"locales",Hi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Wt=new Wi,Yr=p.createContext({localesData:Wt.getLocales(),currentLocale:Wt.getLocales()[0],setCurrentLocale:()=>{}}),ji=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Wt.getLocales(),a=p.useCallback(()=>{const f=s.find(v=>v.id===n);return typeof(f==null?void 0:f.dayjsTranslations)=="object"&&P.locale(f.dayjsTranslations),f||s[0]},[n,s]),[l,d]=p.useState(a()),c=f=>{localStorage.setItem("locale",f.translateCode),d(f)};p.useEffect(()=>{t==null||t.forEach(f=>{s.find(M=>M.id===f.id)||Wt.addLocales(f)})},[s,t]),p.useEffect(()=>{const f=localStorage.getItem("locale"),v=r??f??"en";localStorage.setItem("locale",v),o(v),d(a())},[a,r]);const{Provider:u}=Yr;return i.jsx(u,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Je=()=>p.useContext(Yr).currentLocale.lang,Zi=e=>se.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},se.createElement("defs",null,se.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),se.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},se.createElement("stop",{offset:.47,stopColor:"#ccc"}),se.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),se.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),se.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),se.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),se.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),se.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),se.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),se.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),se.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),se.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),se.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Vi=x.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Gi=x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Xi=({onTileClick:e})=>{const{feelingEmpty:r}=Je();return i.jsxs(Vi,{onClick:e,children:[i.jsx(Zi,{}),i.jsx(Gi,{children:r})]})},Ui=x.div`
  position: relative;
  display: flex;
`,Ki=x.div`
  position: relative;
  margin-left: ${Ee};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Ji=x.div`
  width: calc(${({width:e})=>e}px - ${Ee}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ee}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,qi=new Set,Qi={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:kt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Ri(e,r){const t=r?[...r].sort((l,d)=>l.maxPassengers-d.maxPassengers):[],n=[];for(const l of t){const d=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);d.length>0&&n.push({type:"category",category:l,items:d})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const a=e.filter(l=>l.isSubcontract);return a.length>0&&n.push({type:"subcontract",items:a}),n}const ea=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,onItemClick:s,toggleTheme:a,topBarWidth:l,onEventDrop:d,onEventDrag:c,draggableConfig:u,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:M})=>{const[b,D]=p.useState(Qi),[m,O]=p.useState(e),[U,j]=p.useState(!1),[B,h]=p.useState(!1),[y,w]=p.useState(""),[_,S]=p.useState(new Set),[C,Z]=p.useState(new Set),Q=p.useRef([]);p.useEffect(()=>()=>Q.current.forEach(clearTimeout),[]);const{zoom:L,startDate:k,isLoading:A,config:{includeTakenHoursOnWeekendsInDayView:Y,showTooltip:F,showThemeToggle:I}}=We(),W=p.useRef(null),re=p.useRef(null),[ee,N]=p.useState(124),{page:H,projectsPerPerson:q,rowsPerItem:te,currentPageNum:$,pagesAmount:G,next:T,previous:R,reset:V}=Ai(m),{effectiveCategories:z,effectivePage:g}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:H};const oe=wi(H);if(oe.categories.length===0)return{effectiveCategories:void 0,effectivePage:H};const le=H.map(ie=>{if(ie.isSubcontract||ie.capacity==null)return ie;const we=oe.capacityToCategoryId.get(ie.capacity);return we?{...ie,categoryId:we}:ie});return{effectiveCategories:oe.categories,effectivePage:le}},[t,H]),K=p.useCallback(oe=>{if(_.has(oe)){S(ie=>{const we=new Set(ie);return we.delete(oe),we});return}if(Er()){S(ie=>new Set(ie).add(oe));return}Z(ie=>new Set(ie).add(oe));const le=setTimeout(()=>{S(ie=>new Set(ie).add(oe)),Z(ie=>{const we=new Set(ie);return we.delete(oe),we})},190);Q.current.push(le)},[_]),E=p.useMemo(()=>{const oe=[],le=z?[...z].sort((ie,we)=>ie.maxPassengers-we.maxPassengers):[];for(const ie of le)g.some(we=>!we.isSubcontract&&we.categoryId===ie.id)&&oe.push(ie.id);return g.some(ie=>ie.isSubcontract)&&oe.push("__subcontract__"),oe},[z,g]),X=p.useCallback(()=>{S(new Set)},[]),ne=p.useCallback(()=>{S(new Set(E))},[E]),J=p.useMemo(()=>{if(C.size===0)return qi;const oe=new Set;for(const le of g){const ie=le.isSubcontract?"__subcontract__":le.categoryId;ie&&C.has(ie)&&oe.add(le.id)}return oe},[C,g]),{visiblePage:ce,visibleRowsPerItem:fe,visibleTotalRows:de,visibleProjectsPerPerson:pe,separatorRowIndices:Se,subcontractSeparatorRow:be}=p.useMemo(()=>{const oe=Ri(g,z),le=((z==null?void 0:z.length)??0)>0,ie=new Map;H.forEach((Ae,yt)=>ie.set(Ae.id,yt));const we=[],Te=[],ze=[],Ge=[];let rt=0,Zt=-1;for(const Ae of oe)if(Ae.type==="subcontract"||Ae.type==="category"&&le){const vt=Ae.type==="subcontract"?"__subcontract__":Ae.category.id,xt=_.has(vt);if(Ge.push(rt),Ae.type==="subcontract"&&(Zt=rt),!xt)for(const ot of Ae.items){const Vt=ie.get(ot.id)??0,Gt=te[Vt];we.push(ot),Te.push(Gt),ze.push(q[Vt]),rt+=Gt}}else for(const vt of Ae.items){const xt=ie.get(vt.id)??0,ot=te[xt];we.push(vt),Te.push(ot),ze.push(q[xt]),rt+=ot}const qe=Te.reduce((Ae,yt)=>Ae+yt,0);return{visiblePage:we,visibleRowsPerItem:Te,visibleTotalRows:qe,visibleProjectsPerPerson:ze,separatorRowIndices:Ge,subcontractSeparatorRow:Zt}},[g,z,H,_,te,q]),ae=p.useRef(bn((oe,le,ie,we,Te,ze)=>{if(!W.current)return;const{tile:Ge,segmentId:rt}=Fe(oe);if(!rt||!Ge){j(!1);return}const Zt=_e(rt,le),qe=W.current.getBoundingClientRect(),Ae=Ge.getBoundingClientRect(),yt={x:oe.clientX-qe.left,y:oe.clientY-qe.top},vt={x:oe.clientX-qe.left,y:oe.clientY-qe.top},xt={x:Ae.left-qe.left,y:Ae.top-qe.top,width:Ae.width,height:Ae.height},{coords:{x:ot,y:Vt},resourceIndex:Gt,disposition:hd,reservationData:pd}=xi(Zt,ie,yt,we,Te,ze,Y);D({coords:{x:ot,y:Vt},mouseCoords:vt,resourceIndex:Gt,disposition:hd,reservationData:pd,tileBounds:xt}),j(!0)},4)),ue=p.useRef(bn((oe,le)=>{V(),O(oe.map(ie=>({...ie,data:ie.data.filter(we=>{const{title:Te,description:ze,subtitle:Ge}=we;return(Te==null?void 0:Te.toLowerCase().includes(le.toLowerCase()))||(Ge==null?void 0:Ge.toLowerCase().includes(le.toLowerCase()))||(ze==null?void 0:ze.toLowerCase().includes(le.toLowerCase()))})})).filter(ie=>ie.data.length>0))},500)),_e=(oe,le)=>{if(oe)return le.flatMap(ie=>ie.data).find(ie=>ie.segmentId===oe)},Fe=oe=>{if(!oe.target)return{tile:null,segmentId:null};const le=oe.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},De=oe=>{const le=oe.target.value;w(le),ue.current.cancel(),le?ue.current(e,le):(V(),O(e))},ge=p.useCallback(()=>{ae.current.cancel(),j(!1)},[]);return p.useEffect(()=>{const oe=ie=>ae.current(ie,e,k,fe,pe,L),le=W.current;if(le)return le.addEventListener("mousemove",oe),le.addEventListener("mouseleave",ge),()=>{le.removeEventListener("mousemove",oe),le.removeEventListener("mouseleave",ge)}},[ae,ge,pe,fe,k,L,e]),p.useEffect(()=>{y?(ue.current.cancel(),ue.current(e,y)):O(e)},[e,y]),p.useLayoutEffect(()=>{const oe=re.current;if(!oe)return;const le=()=>N(oe.offsetHeight);le();const ie=new ResizeObserver(le);return ie.observe(oe),()=>ie.disconnect()},[]),i.jsxs(Ui,{children:[i.jsx(hc,{headerHeight:ee,data:g,categories:z,pageNum:$,pagesAmount:G,rows:te,onLoadNext:T,onLoadPrevious:R,searchInputValue:y,onSearchInputChange:De,onItemClick:s,collapsedGroups:_,fadingGroups:C,onToggleGroup:K,allGroupIds:E,onExpandAll:X,onCollapseAll:ne}),i.jsxs(Ki,{children:[i.jsx(jc,{ref:re,zoom:L,topBarWidth:l,showThemeToggle:I,toggleTheme:a}),e.length?i.jsx(pi,{data:ce,baseData:r||e,zoom:L,rows:de,ref:W,onTileClick:n,onTileContextMenu:o,onEventDrop:d,onEventDrag:c,draggableConfig:u,onDragStateChange:h,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:M,separatorRowIndices:Se,subcontractSeparatorRow:be,fadingUnitIds:J}):i.jsx(Ji,{width:l,children:A?i.jsx(Tn,{isLoading:A,position:"left"}):i.jsx(Xi,{})}),F&&i.jsx(Ol,{tooltipData:b,visible:U&&!B})]})]})},ta=x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Ee+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.mode==="dark"?e.colors.primary:"#fff"};
`,Nr=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,na=x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,ra=x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Fr=x.button`
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
`,oa=x.button`
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
`,sa=x.div`
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
`,zr=x.button`
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
`,ia=x.label`
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
`,aa=x.span`
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
`,Mt=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),ca=()=>{var r,t;const e=document.getElementById(xr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},la=()=>{const{config:e,zoom:r,handleGoNext:t,handleGoPrev:n,handleGoToday:o,setZoom:s,goToDate:a,toggleDisplayActiveUnits:l,toolbarActions:d}=We(),{filterButtonState:c=-1}=e;return i.jsxs(ta,{width:0,children:[i.jsxs(Nr,{$at:"start",children:[i.jsxs(ra,{children:[i.jsx(Fr,{onClick:n,"aria-label":"Anterior",children:i.jsx(Mt,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(oa,{onClick:o,children:"Hoy"}),i.jsx(Fr,{onClick:t,"aria-label":"Siguiente",children:i.jsx(Mt,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),e.showViewSwitcher!==!1&&i.jsxs(i.Fragment,{children:[i.jsx(na,{}),i.jsxs(sa,{children:[i.jsx("button",{className:r===2?"on":"",onClick:()=>s(2),children:"Día"}),i.jsx("button",{className:r===0?"on":"",onClick:()=>s(0),children:"Semana"}),i.jsx("button",{className:r===1?"on":"",onClick:()=>s(1),children:"Mes"})]})]}),e.showJumpToDate!==!1&&i.jsxs(ia,{children:[i.jsxs(Mt,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onClick:u=>{var f,v;try{(v=(f=u.currentTarget).showPicker)==null||v.call(f)}catch{}},onChange:u=>u.target.value&&a(u.target.value)})]})]}),i.jsxs(Nr,{$at:"end",children:[e.showFilterButton!==!1&&c>=0&&i.jsxs(zr,{$primary:!!c,onClick:l,children:[i.jsx(Mt,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&i.jsx(aa,{children:c})]}),e.showFullscreenButton!==!1&&i.jsxs(zr,{onClick:ca,children:[i.jsx(Mt,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),d]})]})},da={add:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>se.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>se.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>se.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>se.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>se.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>se.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>se.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),se.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},_n=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Yt(),a=da[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},ua=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];x.button`
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
  ${({theme:e,variant:r,disabled:t})=>ua(e,r,t)}
`;const fa=x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${vr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ie};
`,ha=x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,pa=x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,ga=x.div`
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
`,ma=x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,ya=x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,va=x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`,xa=x.div`
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
`,ba=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,wa=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,Sa=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,Ca=x.div`
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
`,Br="#cdd8d2",Hr=[178,216,195],ka=[15,125,102],Ma=e=>{const r=Math.min(1,Math.max(0,e)),t=n=>Math.round(Hr[n]+(ka[n]-Hr[n])*r);return`rgb(${t(0)}, ${t(1)}, ${t(2)})`},$a=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=We(),s=Je(),a=p.useRef(null),[l,d]=p.useState(null),c=p.useMemo(()=>Array.from({length:12},(S,C)=>P().month(C).format("MMM").toUpperCase()),[s]),u=p.useMemo(()=>P().startOf("day"),[]),{domainStart:f,domainEnd:v,domainDays:M}=p.useMemo(()=>{const S=u.subtract(3,"month").startOf("month"),C=u.add(9,"month").endOf("month");return{domainStart:S,domainEnd:C,domainDays:C.diff(S,"day")+1}},[u]),b=S=>S.diff(f,"day")/M*100,D=S=>Math.min(100,Math.max(0,S)),m=p.useMemo(()=>{const S=[];let C=f.startOf("month");for(;C.isBefore(v);)S.push(C),C=C.add(1,"month");return S},[f,v]),O=o==null?void 0:o.yearCounts,U=p.useMemo(()=>{const S=Math.ceil(M/7),C=new Array(S).fill(0),Z=I=>{const W=I.diff(f,"day");return W<0||W>=M?-1:Math.floor(W/7)};if(O&&O.length)for(const I of O){const W=Z(P(I.date));W>=0&&(C[W]+=I.count)}else for(const I of t??[])for(const W of I.data??[]){const re=Z(P(W.startDate));re>=0&&(C[re]+=1)}const Q=Math.max(0,...C);if(Q<=0)return C.map(()=>({h:0,color:Br}));const L=C.filter(I=>I>0).sort((I,W)=>I-W),k=L.length>>1,A=L.length%2?L[k]:(L[k-1]+L[k])/2,Y=A>0?Q/A:1,F=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,Y)))));return C.map(I=>I>0?{h:Math.min(100,100*Math.pow(I/Q,F)),color:Ma(I/Q)}:{h:0,color:Br})},[t,O,f,M]),j=b(u),B=S=>{const{startDate:C,endDate:Z}=Ht(S,r),Q=D(b(C));return{left:Q,width:D(b(Z))-Q,startDate:C,endDate:Z}},h=B(e),y=l?B(l.d):null,w=S=>`${S.date()} ${c[S.month()]}`,_=S=>{var Q;const C=(Q=a.current)==null?void 0:Q.getBoundingClientRect();if(!C)return null;const Z=Math.min(1,Math.max(0,(S-C.left)/C.width));return{f:Z,d:f.add(Math.round(Z*(M-1)),"day")}};return i.jsxs(fa,{children:[i.jsxs(ha,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(pa,{ref:a,onClick:S=>{const C=_(S.clientX);C&&n(C.d.toDate())},onMouseMove:S=>{const C=_(S.clientX);C&&d({left:C.f*100,d:C.d})},onMouseLeave:()=>d(null),children:[i.jsx(ga,{children:m.map((S,C)=>i.jsx("span",{style:{left:`${b(S)}%`},children:C===0||S.month()===0?`${c[S.month()]} ${S.format("YY")}`:c[S.month()]},C))}),m.map((S,C)=>C===0?null:i.jsx(ma,{style:{left:`${b(S)}%`}},C)),i.jsx(ya,{children:U.map((S,C)=>i.jsx(va,{style:{height:`${S.h}%`,background:S.color}},C))}),i.jsx(ba,{style:{left:`${h.left}%`,width:`${h.width}%`}}),i.jsx(xa,{style:{left:`${D(j)}%`},children:i.jsx("span",{children:"HOY"})}),l&&y&&i.jsxs(i.Fragment,{children:[i.jsx(wa,{style:{left:`${y.left}%`,width:`${y.width}%`}}),i.jsx(Sa,{style:{left:`${l.left}%`}}),i.jsx(Ca,{style:{left:`${l.left}%`},children:`Ir a ${w(l.d)}`})]})]})]})},Wr=p.createContext(new Map),Da=()=>p.useContext(Wr),Ea=10500,_a=60,Ta=600,Aa=e=>{var d;const r=document.getElementById(Ze),t=r==null?void 0:r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);if(!r||!t)return!1;const n=r.getBoundingClientRect(),o=(d=document.getElementById(hr))==null?void 0:d.getBoundingClientRect(),s=t.getBoundingClientRect(),a=Math.max((o==null?void 0:o.bottom)??n.top,n.top,0),l=Math.min(n.bottom,window.innerHeight);return s.width>0&&s.right>n.left+Ee&&s.left<n.right&&s.bottom>a&&s.top<l},Pa=()=>{const[e,r]=p.useState(()=>new Map),t=p.useRef(0),n=p.useRef(new Set);p.useEffect(()=>{const s=n.current;return()=>s.forEach(clearTimeout)},[]);const o=p.useCallback(s=>{const a=s.filter(u=>Aa(u.segmentId));if(!a.length)return[];const l=++t.current,d=new Map(a.map((u,f)=>[u.segmentId,{kind:u.kind,key:l,delayMs:Math.min(f*_a,Ta)}]));r(u=>new Map([...Array.from(u),...Array.from(d)]));const c=setTimeout(()=>{n.current.delete(c),r(u=>{const f=new Map(u);return d.forEach((v,M)=>{var b;((b=f.get(M))==null?void 0:b.key)===l&&f.delete(M)}),f})},Ea);return n.current.add(c),a.map(u=>u.segmentId)},[]);return{pulses:e,pulseTiles:o}},Oa=x.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Ia=x.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?vr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,La=x.div`
  position: relative;
`,Ya=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:d,onEventDrag:c,draggableConfig:u,schedulerRef:f,onTimeRangeSelect:v,onMultiTimeRangeSelect:M,clickToAddConfig:b})=>{const{goToDate:D,handleGoToday:m,zoomIn:O,zoomOut:U,zoom:j}=We(),{pulses:B,pulseTiles:h}=Pa();return p.useImperativeHandle(f,()=>({goToDate:D,goToToday:m,setZoom:y=>{if(!Mr(y))return;const w=y-j;if(w>0)for(let _=0;_<w;_++)O();else for(let _=0;_<Math.abs(w);_++)U()},pulseTiles:h}),[D,m,j,O,U,h]),i.jsx(Wr.Provider,{value:B,children:i.jsx(ea,{data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:d,onEventDrag:c,draggableConfig:u,onTimeRangeSelect:v,onMultiTimeRangeSelect:M,clickToAddConfig:b})})},Na=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,onTileContextMenu:d,handleToggleDisplayActiveUnits:c,onClearFilterData:u,toolbarActions:f,onItemClick:v,isLoading:M,onEventDrop:b,onEventDrag:D,draggableConfig:m,onTimeRangeSelect:O,onMultiTimeRangeSelect:U,clickToAddConfig:j},B){var F;const h=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),y=p.useRef(null),w=p.useRef(null),[_,S]=p.useState((F=y.current)==null?void 0:F.clientWidth),C=p.useMemo(()=>P(s),[s]),[Z,Q]=p.useState(h.defaultTheme??"light"),L=()=>{Q(Z==="light"?"dark":"light")},k=Z==="light"?bs:ws,A=h.theme?h.theme[k.mode]:{},Y={...k,colors:{...k.colors,...A}};return p.useImperativeHandle(B,()=>({goToDate:I=>{var W;return(W=w.current)==null?void 0:W.goToDate(I)},goToToday:()=>{var I;return(I=w.current)==null?void 0:I.goToToday()},setZoom:I=>{var W;return(W=w.current)==null?void 0:W.setZoom(I)},pulseTiles:I=>{var W;return((W=w.current)==null?void 0:W.pulseTiles(I))??[]}}),[]),p.useLayoutEffect(()=>{const I=()=>{y.current&&S(y.current.clientWidth)};I(),window.addEventListener("resize",I);let W;const re=y.current;return re&&typeof ResizeObserver<"u"&&(W=new ResizeObserver(I),W.observe(re)),()=>{window.removeEventListener("resize",I),W==null||W.disconnect()}},[]),i.jsxs(i.Fragment,{children:[i.jsx(xs,{}),i.jsx(gs,{theme:Y,children:i.jsx(ji,{lang:h.lang,translations:h.translations,children:i.jsx(ii,{data:r,isLoading:!!M,config:h,onRangeChange:a,defaultStartDate:C,handleToggleDisplayActiveUnits:c,onClearFilterData:u,toolbarActions:f,children:i.jsxs(Oa,{id:xr,children:[i.jsx(Ia,{showScroll:!!r.length,$footer:h.showOverview!==!1&&!!r.length,id:Ze,ref:y,children:i.jsx(La,{children:i.jsx(Ya,{data:r,baseData:n,categories:t,onTileClick:l,onTileContextMenu:d,topBarWidth:_??0,onItemClick:v,toggleTheme:L,onEventDrop:b,onEventDrag:D,draggableConfig:m,schedulerRef:w,onTimeRangeSelect:O,onMultiTimeRangeSelect:U,clickToAddConfig:j})})}),h.showOverview!==!1&&!!r.length&&i.jsx($a,{})]})})})})]})}),Fa=x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,za=x.button`
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
`,Ba=x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ha=x.p`
  ${lt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,jr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=Je(),d=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(Fa,{intent:e,children:i.jsxs(za,{onClick:r,isVisible:n,children:[t&&i.jsx(Ba,{children:t}),i.jsx(Ha,{children:d})]})})},Wa=x.div`
  min-width: ${Ee+"px"};
  max-width: ${Ee+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,ja=x.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({$height:e})=>e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ee}px;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,Za=x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Va=x.input`
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
`,Ga=x.div`
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
`,Xa=Le`
  from { opacity: 1; }
  to { opacity: 0; }
`,Zr=x.div`
  ${({$fading:e})=>e&&at`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Xa} 180ms ease forwards;
      }
    `}
`,Ua=x.button`
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
`,Ka=Le`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,Ja=x.div`
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
    animation: ${Ka} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,qa=x.div`
  display: flex;
  align-items: center;
`,Qa=x.div`
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
`,Ra=x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,ec=x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Vr=x.p`
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
`,tc=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`,nc=x.span`
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
`,rc=x.span`
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
`,oc=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),sc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[i.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),i.jsx("path",{d:"M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z"}),i.jsx("circle",{cx:"16.8",cy:"8.6",r:"2.5"}),i.jsx("path",{d:"M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8"})]}),ic=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),ac=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),cc=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(Ja,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(qa,{children:[i.jsx(Qa,{$provider:o,children:oc(r.icon)?i.jsx(Ra,{src:r.icon,alt:""}):o?i.jsx(ac,{}):i.jsx(ic,{})}),i.jsxs(ec,{children:[i.jsx(Vr,{isMain:!0,children:r.title}),r.capacity!=null||r.plate?i.jsxs(tc,{children:[r.capacity!=null&&i.jsxs(nc,{title:`${r.capacity} pasajeros`,children:[i.jsx(sc,{}),r.capacity]}),r.plate&&i.jsx(rc,{title:r.plate,children:r.plate})]}):r.subtitle&&i.jsx(Vr,{children:r.subtitle})]})]})}),lc=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder+"24":"#E9EFEC"};
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
`,dc=x.span`
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
`,uc=x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  flex-shrink: 0;
`,fc=x.div`
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
`,Gr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>i.jsxs(lc,{$variant:o,onClick:n,title:e,children:[i.jsx(fc,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(dc,{$variant:o,children:e}),i.jsx(uc,{$variant:o,children:r})]}),hc=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:d,onSearchInputChange:c,onItemClick:u,collapsedGroups:f,fadingGroups:v,onToggleGroup:M,allGroupIds:b,onExpandAll:D,onCollapseAll:m})=>{const[O,U]=p.useState(!1),j=Je(),B=()=>U(k=>!k),h=r?[...r].sort((k,A)=>k.maxPassengers-A.maxPassengers):[],y=h.length>0,w=b.length>0,_=w&&f.size===b.length;w&&f.size;const S=e.filter(k=>k.isSubcontract),C=j.subcontract??"Subcontract",Z=k=>{const A=e.indexOf(k);return i.jsx(cc,{id:k.id,item:k.label,rows:n[A],onItemClick:u,isSubcontract:k.isSubcontract},k.id)},Q=k=>{const A=e.filter(W=>!W.isSubcontract&&W.categoryId===k.id);if(A.length===0)return null;const Y=f.has(k.id),F=v.has(k.id),I=k.name;return i.jsxs("div",{children:[i.jsx(Gr,{label:I,count:A.length,isCollapsed:Y||F,onToggle:()=>M(k.id),variant:"category"}),!Y&&i.jsx(Zr,{$fading:F,children:A.map(Z)})]},k.id)},L=e.filter(k=>!k.isSubcontract&&(!k.categoryId||!y));return i.jsxs(Wa,{children:[i.jsxs(ja,{$height:t,children:[i.jsxs(Za,{children:[i.jsxs(Ga,{isFocused:O,children:[i.jsx(Va,{placeholder:j.search,value:d,onChange:c,onFocus:B,onBlur:B}),i.jsx(_n,{iconName:"search"})]}),w&&i.jsx(Ua,{title:_?"Expand all":"Collapse all",onClick:_?D:m,$allCollapsed:_,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:_?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(jr,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(_n,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),y?h.map(Q):L.map(Z),y&&L.length>0&&L.map(Z),S.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Gr,{label:C,count:S.length,isCollapsed:f.has("__subcontract__")||v.has("__subcontract__"),onToggle:()=>M("__subcontract__"),variant:"subcontract"}),!f.has("__subcontract__")&&i.jsx(Zr,{$fading:v.has("__subcontract__"),children:S.map(Z)})]}),i.jsx(jr,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(_n,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},pc=x.div`
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
`,gc=Le`
from{
    left: -100%;
}
to{
    left: 100%;
}`,mc=x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${gc} 1s infinite;
`,Tn=({isLoading:e,position:r})=>e?i.jsx(pc,{position:r,children:i.jsx(mc,{})}):null,Ve=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:d,font:c,isBottomRow:u,fillStyle:f,topText:v,bottomText:M,strokeStyle:b,labelBetweenCells:D}=e;t.beginPath();const m=b??(r.mode==="dark"?r.colors.border:"#E4EAE7");if(t.strokeStyle=m,t.setLineDash([]),d&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),D?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):(t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke()),t.font=c;const O=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.mode==="dark"?r.colors.textPrimary:"#183D3D",t.fillText(d,O,l)}if(u&&f&&v&&M){t.fillStyle=f,t.fillRect(n,o,s,a),t.beginPath(),t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke(),t.font=v.font;const O=n+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,O,v.y),t.font=M.font;const U=n+s/2-t.measureText(M.label).width/2;t.fillStyle=M.color,t.fillText(M.label,U,M.y)}},yc=(e,r,t,n,o=nt)=>{const s=He+o,a=s+13,l=s+27;let d=0;for(let c=0;c<r;c++){const u=Sr(P(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"days")),f=u.isCurrentDay;if(Ve({ctx:e,x:d,y:s,width:Ce,height:dt,isBottomRow:!0,fillStyle:f?n.colors.currentDay:n.colors.gridBackground,topText:{y:a,label:f?"":u.dayName.replace(/\./g,"").toUpperCase(),font:`600 10px ${Ie}`,color:n.mode==="dark"?n.colors.placeholder:"#74897F"},bottomText:{y:l,label:`${u.dayOfMonth}`,font:f?`700 12px ${Ie}`:`700 13px ${Ie}`,color:f?n.colors.today:n.mode==="dark"?n.colors.textPrimary:"#183D3D"}},n),f){const b=d+Ce/2,D=a-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(b-30/2,D,30,13,5):e.rect(b-30/2,D,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ie}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",b,D+13/2+.5),e.restore()}d+=Ce}},vc=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Ye;const s=He;let l=t.month;for(let d=0;d<r;d++){l>=fr&&(l=0);const c=wr(t,d)*Ye;Ve({ctx:e,x:o,y:s,width:c,height:nt,textYPos:mr,label:P().month(l).format("MMMM").toUpperCase(),font:Ue.bottomRow.number},n),o+=c,l++}},xc=" ".repeat(98),bc=(e,r,t)=>{const o=P(`${r.year}-${r.month+1}-${r.dayOfMonth}`);let s=-r.dayOfMonth*Ce+Ce;for(let a=0;a<fr;a++){const l=o.add(a,"months"),d=l.daysInMonth()*Ce,c=l.format("MMMM YYYY").toUpperCase();Ve({ctx:e,x:s,y:0,width:d,height:He,textYPos:ln,label:`${c}${xc}${c}`,font:`800 12px ${Ie}`},t),s+=d}},wc=(e,r,t,n)=>{const o=7*Ce,s=He,a=e.canvas.width/o+o,l=r.weekOfYear;let d=0;for(let c=0;c<a;c++){const u=P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let f=(l+c)%ur;f<=0&&(f+=ur),u!==1&&c===0&&(d=-u*Ce+Ce),Ve({ctx:e,x:d,y:s,width:o,height:nt,textYPos:mr,label:`${t.toUpperCase()} ${f}`,font:Ue.middleRow},n),d+=o}},Sc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},Cc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},kc=(e,r,t,n,o)=>{const s=Nt-dt/1.6,a=Nt-dt/4.5,l=He+nt;let d=0;for(let c=0;c<r;c++){const u=P(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),f=u.isSame(P(),"week");Ve({ctx:e,x:d,y:l,width:ut,height:dt,isBottomRow:!0,fillStyle:f?o.colors.today+"26":Sc({isCurrent:f,variant:"yearView"},o),topText:{y:s,label:u.isoWeek().toString(),font:f?`700 14px ${Ie}`:Ue.bottomRow.name,color:f?o.colors.today:Cc({isCurrent:f},o)},bottomText:{y:a,label:n.toUpperCase(),font:Ue.middleRow,color:o.colors.placeholder}},o),d+=ut}},Mc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,d=0,c=(br(s)-t+1)*Ye,u=0;for(;l+u<=a;)d>0&&(c=br(s+d)*Ye),u+c>a&&d>0&&(c=Math.ceil((a-u)/Ye)*Ye),Ve({ctx:e,x:l,y:0,width:c,height:He,textYPos:ln,label:(s+d).toString(),font:Ue.topRow},n),l+=c,u+=c,d++},$c=(e,r,t,n)=>{const o=Math.floor(r/Ft)+2,s=Ft*$e;let d=-P(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*$e+.5*$e;for(let c=0;c<o;c++){const u=P(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Ve({ctx:e,x:d,y:ft,width:s,height:Ct,textYPos:ft+Ct/2+2,label:u,font:Ue.bottomRow.number},n),d+=s}},Dc=(e,r,t,n)=>{const o=Math.ceil(r/Ft),s=P(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),d=a.add(1,"day").month(),c=l===d?1:2;let u=.5*$e;for(let f=0;f<c;f++){const v=P(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),b=P(`${t.year}-${t.month+f+1}-01T:23:59:59`).endOf("month"),D=b.format("MMMM").toUpperCase(),m=b.diff(v,"hour")+1,O=f===0?m*$e:r*$e;Ve({ctx:e,x:u,y:0,width:O,height:ft,textYPos:ln,label:D,font:Ue.topRow},n),u+=O}},Ec=(e,r,t,n)=>{let o=0;const s=ft+Ct,a=P(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=$e;for(let d=0;d<r;d++){const c=a.add(d,"hours").format("h:00a").toUpperCase();Ve({ctx:e,x:o,y:s,width:l,height:cn,label:c,font:Ue.bottomRow.hoursInDay,textYPos:ft+Ct+cn/2+2,labelBetweenCells:!0},n),o+=$e}},_c=(e,r,t,n,o,s,a,l=!0)=>{switch(r){case 0:Mc(e,n,s,a),vc(e,t,n,a),kc(e,t,n,o,a);break;case 1:bc(e,n,a),l&&wc(e,n,o,a),yc(e,t,n,a,l?nt:0);break;case 2:Dc(e,t,n,a),$c(e,t,n,a),Ec(e,t,n,a);break}},Tc=x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,Ac=x.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,Pc=x.div`
  height: ${({$height:e})=>e??Nt}px;
  display: block;
`,Oc=x.canvas``,Ic={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},Ne=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Ic[e]}),Lc=x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Ee+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Xr=x.span`
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
`,jt=x.span`
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
`,Yc=x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,Nc=x.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,Fc=x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,zc=x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,Bc=x.span`
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
`,Hc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Wc=()=>i.jsxs(Lc,{children:[i.jsx(Xr,{children:"Leyenda"}),i.jsxs(jt,{children:[i.jsx(Ne,{name:"transfer"})," Transfer"]}),i.jsxs(jt,{children:[i.jsx(Ne,{name:"sun"})," Gira 1 día"]}),i.jsxs(jt,{children:[i.jsx(Ne,{name:"tour"})," Gira multidía"]}),i.jsxs(jt,{children:[i.jsx(Yc,{children:"SUB"})," Subcontrato"]}),i.jsx(Nc,{}),i.jsxs(Xr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),Hc.map(e=>i.jsxs(Fc,{children:[i.jsx(zc,{style:{background:e.stripe}}),i.jsx(Bc,{style:{color:e.color},children:i.jsx(Ne,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),jc=p.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=Je(),{date:l,cols:d,dayOfYear:c,startDate:u,config:f}=We(),v=p.useRef(null),M=Yt(),b=f.showWeekRow!==!1,D=r===2?Ss:r===1&&!b?He+dt:Nt,m=p.useCallback(O=>{const U=wn(),j=D+1;Dr(O,U,j),_c(O,r,d,u,a,c,M,b)},[d,c,u,a,r,M,b,D]);return p.useEffect(()=>{if(!v.current)return;const O=v.current.getContext("2d");if(!O)return;const U=()=>m(O);return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[m]),p.useEffect(()=>{const O=v.current;if(!O)return;O.style.letterSpacing="1px";const U=O.getContext("2d");U&&m(U)},[l,r,m]),i.jsxs(Tc,{ref:s,children:[(f.showTopbar!==!1||f.showLegend!==!1)&&i.jsxs(Ac,{$width:t,children:[f.showTopbar!==!1&&i.jsx(la,{width:t,showThemeToggle:n,toggleTheme:o}),f.showLegend!==!1&&i.jsx(Wc,{})]}),i.jsx(Pc,{$height:D,id:hr,children:i.jsx(Oc,{ref:v})})]})}),Zc=(e,r,t)=>{let n;switch(t){case 0:n=Ye;break;case 2:n=$e;break;default:n=Ce}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),d=r.endDate.startOf("day"),c=()=>{let u;switch(t){case 2:u=(e.startDate.diff(r.startDate,"minute")/ke+1)*n-n/2;break;default:u=s.diff(l,"day")*n}return Math.max(0,u)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(e.startDate,"minute")/ke*n,50);break;default:u=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(r.startDate,"minute")/ke*n+.5*n,50);break;default:u=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(e.startDate,"minute")/ke*n,50);break;default:u=Math.max(d.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(r.startDate,"minute")/ke*n,50);break;default:u=Math.max(d.diff(l,"day")*n+n,50)}return{x:c(),width:u}}return{x:c(),width:50}},Vc=(e,r,t,n,o,s)=>{const a=e*he+Cs,l=r.hour(),d=t.hour();let c,u,f,v;switch(s){case 2:{c=P(n),u=P(o),f=P(r).hour(l).minute(0),v=P(t).hour(d).minute(0);break}default:{c=P(n).hour(0).minute(0),u=P(o).hour(23).minute(59),f=r,v=t;break}}return{...Zc({startDate:c,endDate:u},{startDate:f,endDate:v},s),y:a}},Ur=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},Kr={sin_chofer:{icon:"warn",color:"#9AA4B2",label:"Sin chofer"},sin_avisar:{icon:"warn",color:"#D98A22",label:"No notificado al chofer"},programado:{icon:"warn",color:"#C2A878",label:"Notificación programada"},notificado:{icon:"clock",color:"#2C6BB0",label:"Notificado"},confirmado:{icon:"check",color:"#2E8B63",label:"Confirmado"}};x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,x.p`
  ${lt}
  ${tt}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const Gc=Le`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,Xc=Le`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,Uc=x.button`
  ${lt}
  position: absolute;
  height: ${zt}px;
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
    animation: ${Gc} 180ms ease-out;
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
  ${({$exiting:e})=>e&&at`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Xc} 190ms ease-out forwards;
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
`,Kc=x.div`
  position: sticky;
  left: ${Ee+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`,Jr=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Jc=x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,qc=x.span`
  ${tt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,Qc=x.span`
  ${tt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,Rc=x.span`
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
`,el=x.div`
  ${tt}
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
`,qr=x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Qr=x.span`
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
`,Rr=x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,An={confirmed:{ring:"#2E8B63",glow:"rgba(46, 139, 99, 0.45)"},notified:{ring:"#2C6BB0",glow:"rgba(44, 107, 176, 0.45)"},lost:{ring:"#C6483D",glow:"rgba(198, 72, 61, 0.45)"}},tl=Le`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`,nl=Le`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`,rl=Le`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`,ol=Le`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`,sl=x.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({$kind:e})=>An[e].ring};
  --pulse-glow: ${({$kind:e})=>An[e].glow};
  animation:
    ${tl} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${nl} 9600ms linear var(--pulse-delay, 0ms) both;
`,il=x.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({$kind:e})=>An[e].ring};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rl} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
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
      animation: ${ol} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`,al=x.div`
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
`,eo=x.span`
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
`,cl=Le`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`,ll=x.div`
  position: absolute;
  height: ${zt}px;
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
    animation: ${cl} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`,dl=x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`,ul=x.div`
  ${tt}
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
`,fl=x.div`
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
`,hl=x.span`
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
`,pl=x.span`
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
`,gl=34,Pn=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onTileContextMenu:s,onDragStart:a,isDragging:l=!1,isDraggable:d=!0,yOffset:c=0,exiting:u=!1,highlighted:f=!1,dimmed:v=!1,leaving:M=!1,ghost:b=!1,ghostBadge:D="",pulse:m})=>{const{date:O}=We(),U=Ht(O,t),{y:j,x:B,width:h}=Vc(e,U.startDate,U.endDate,r.startDate,r.endDate,t),{colors:y}=Yt(),w=p.useRef(null),_=P(r.startDate).isSame(P(r.endDate),"day"),S=r.eventType===kt.Tour,C=r.eventType===kt.Transfer,Z=_&&(S||C);if(b)return i.jsxs(ll,{style:{left:`${B}px`,top:`${j+c}px`,width:`${h}px`},children:[i.jsxs(dl,{children:[i.jsxs(ul,{children:[i.jsx(Ne,{name:C?"transfer":"tour"}),r.title]}),i.jsxs(fl,{children:[i.jsx(Ne,{name:"check",strokeWidth:2.6}),"flota propia"]})]}),D&&i.jsx(hl,{children:D})]});const Q=ee=>{ee.button===0&&(w.current={x:ee.clientX,y:ee.clientY},d&&a&&(ee.preventDefault(),a(r,ee)))},L=ee=>{s&&(ee.preventDefault(),s(r,{x:ee.clientX,y:ee.clientY}))},k=ee=>{if(w.current){const N=Math.abs(ee.clientX-w.current.x),H=Math.abs(ee.clientY-w.current.y);Math.sqrt(N*N+H*H)<=5&&(o==null||o(r)),w.current=null}else o==null||o(r)},A={left:`${B}px`,top:`${j+c}px`,backgroundColor:`${r.bgColor??y.defaultTile}`,width:`${h}px`,color:Ur(r.bgColor??"")},Y=!n&&r.readiness?Kr[r.readiness]:null,F=n&&r.subcontractConfirmed===!1,I=m?{"--pulse-delay":`${m.delayMs}ms`}:void 0,W=ee=>m?i.jsx(il,{$kind:m.kind,style:I,children:ee},`${m.key}-${r.readiness??""}-${String(r.subcontractConfirmed)}`):ee,re=ee=>i.jsxs(Uc,{"data-segment-id":r.segmentId,style:A,onClick:k,onMouseDown:Q,onContextMenu:L,onDragStart:N=>N.preventDefault(),isDraggable:d,isDragging:l,$unconfirmed:F,$exiting:u,$highlighted:f,$dimmed:v,$leaving:M,$pulsing:!!m,children:[m&&i.jsx(sl,{$kind:m.kind,style:I,"aria-hidden":!0},m.key),M&&i.jsx(pl,{children:"Sub"}),ee]});return re(Z?i.jsxs(i.Fragment,{children:[(n||Y)&&i.jsx(qr,{$sm:!0,children:W(n?i.jsx(Rr,{children:"SUB"}):Y&&i.jsx(Qr,{$sm:!0,style:{color:Y.color},children:i.jsx(Ne,{name:Y.icon,strokeWidth:Y.icon==="check"?2.6:2.2})}))}),i.jsxs(al,{$transfer:C,children:[i.jsx(Ne,{name:C?"transfer":"sun",strokeWidth:2.4}),h>=gl&&i.jsxs(i.Fragment,{children:[i.jsx(eo,{children:P(r.startDate).format("h:mm A")}),!C&&i.jsx(eo,{$end:!0,children:P(r.endDate).format("h:mm A")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(qr,{children:(n||Y)&&W(n?i.jsx(Rr,{children:"SUB"}):Y&&i.jsx(Qr,{style:{color:Y.color},children:i.jsx(Ne,{name:Y.icon,strokeWidth:Y.icon==="check"?2.6:2.2})}))}),r.bookingNumber&&i.jsx(Rc,{children:r.bookingNumber}),i.jsxs(Kc,{children:[i.jsxs(Jr,{$pad:!0,children:[i.jsx(Jc,{children:i.jsx(Ne,{name:C?"transfer":"tour"})}),i.jsx(qc,{children:r.title})]}),r.subtitle&&i.jsx(Jr,{children:i.jsx(Qc,{children:r.subtitle})}),r.driver&&i.jsxs(el,{children:[i.jsx(Ne,{name:"person"}),r.driver]})]})]}))},to=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Oe},ml=e=>({segmentId:e.segmentId,reservationId:e.reservationId,startDate:e.startDate,endDate:e.endDate,occupancy:0,title:e.title,bookingNumber:"",eventType:e.eventType}),yl=({data:e,zoom:r,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDraggable:s,draggingEventId:a,separatorRowIndices:l=[],fadingUnitIds:d,highlightedSegmentId:c,focusedUnitIds:u,leavingSegmentIds:f,ghostProject:v})=>{const M=Da(),{nodes:b,liveMap:D}=p.useMemo(()=>{const h=new Map,y=!!u&&u.length>0;let w=0;return{nodes:e.map((S,C)=>{C>0&&(w+=Math.max(e[C-1].data.length,1));const Z=!!(d!=null&&d.has(S.id)),Q=y&&!u.includes(S.id),L=to(w,l),k=v&&S.id===v.targetUnitId?i.jsx(Pn,{row:w,data:ml(v),zoom:r,yOffset:L,isDragging:!1,isDraggable:!1,ghost:!0,ghostBadge:v.badge},`ghost-${S.id}`):null;if(!S.data.some(Y=>Y.length>0))return k?[k]:[];const A=S.data.map((Y,F)=>Y.map(I=>{const W=a===I.segmentId,re=s?s(I):!1,ee=F+w,N=to(ee,l);return h.set(I.segmentId,{project:I,absoluteRow:ee,yOffset:N,isSubcontract:!!S.isSubcontract}),i.jsx(Pn,{row:ee,data:I,zoom:r,isSubcontract:S.isSubcontract,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDragging:W,isDraggable:re,yOffset:N,exiting:Z,highlighted:c!=null&&I.segmentId===c,dimmed:Q,leaving:!!(f!=null&&f.includes(I.segmentId)),pulse:M.get(I.segmentId)},I.segmentId)}));return k?[...A,[k]]:A}).flat(2),liveMap:h}},[e,t,n,r,o,s,a,l,d,c,u,f,v,M]),m=p.useRef(new Map),O=p.useRef([]),[U,j]=p.useState([]);p.useEffect(()=>()=>O.current.forEach(clearTimeout),[]),p.useEffect(()=>{const h=m.current;m.current=D;const y=[];if(h.forEach((S,C)=>{D.has(C)||y.push(S)}),j(S=>{let C=S.filter(Z=>!D.has(Z.project.segmentId));for(const Z of y)C.some(Q=>Q.project.segmentId===Z.project.segmentId)||(C=[...C,Z]);return C}),!y.length)return;const w=new Set(y.map(S=>S.project.segmentId)),_=setTimeout(()=>{j(S=>S.filter(C=>!w.has(C.project.segmentId)))},220);O.current.push(_)},[D]);const B=U.filter(h=>!D.has(h.project.segmentId)).map(h=>i.jsx(Pn,{row:h.absoluteRow,data:h.project,zoom:r,isSubcontract:h.isSubcontract,yOffset:h.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},h.project.segmentId));return i.jsx(i.Fragment,{children:[...b,...B]})};x.div`
  box-sizing: border-box;
  font-family: ${Ie};
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
`;const vl=x.div`
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
`,xl=x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,bl=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,wl=x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Sl=x.span`
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
`,Cl=x.div`
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
`,kl=x.div`
  ${lt}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ml=x.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,$l=x.div`
  padding: 10px 12px;
`,Dl=x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,no=x.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,ro=x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,oo=x.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,so=x.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,io=x.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,El=x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,_l=x.div`
  min-width: 0;
`,Tl=x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Al=x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,ao=x.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,$t=x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Dt=x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Et=x.div`
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
`;x.div``,x.span``,x.span``,x.div``,x.div``,x.span``,x.span``,x.div``,x.div``,x.span``,x.span``,x.div``,x.div``,x.div``,x.span``,x.div``,x.div``,x.div``,x.div``,x.p``,x.span``;const Pl={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Ol=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=p.useRef(null),[s,a]=p.useState("below"),l=Je(),d={...Pl,...l.tooltip};p.useLayoutEffect(()=>{if(!o.current||!t)return;const D=o.current,{width:m,height:O}=D.getBoundingClientRect(),U=D.parentElement;if(!U)return;const j=U.getBoundingClientRect(),B=12,h=4,y=j.height-t.y,w=j.width-t.x;let _=t.x+B,S=t.y+B,C="below";w<m+B&&(_=t.x-m-B),y<O+B&&(S=t.y-O-B,C="above"),_=Math.max(h,Math.min(_,j.width-m-h)),S=Math.max(h,Math.min(S,j.height-O-h)),a(C),D.style.left=`${_}px`,D.style.top=`${S}px`},[t]);const c=n.reservationType===kt.Tour,u=c&&n.isOneDayEvent,f=c?u?"sun":"tour":"transfer",v=c?u?d.oneDay:d.tour:d.transfer,M=n.readiness?Kr[n.readiness]:null,b=[n.groupName&&{label:d.groupName,value:n.groupName},n.driver&&{label:d.driver,value:n.driver},n.passengers&&{label:d.passengers,value:String(n.passengers)},n.flightNumber&&{label:d.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(vl,{ref:o,$position:s,$visible:r,children:[i.jsxs(xl,{children:[i.jsxs(bl,{children:[i.jsx(wl,{children:n.bookingNumber}),i.jsxs(Sl,{children:[i.jsx(Ne,{name:f,strokeWidth:2.4}),v]})]}),i.jsx(kl,{children:n.eventName}),n.client&&i.jsx(Ml,{children:n.client}),M&&i.jsxs(Cl,{style:{color:M.color},children:[i.jsx(Ne,{name:M.icon,strokeWidth:M.icon==="check"?2.6:2.2}),n.readinessNote||M.label]})]}),i.jsxs($l,{children:[i.jsxs(Dl,{children:[i.jsxs(no,{children:[i.jsx(ro,{children:d.startDate}),i.jsxs(oo,{children:[i.jsx(so,{children:n.startDate}),i.jsx(io,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(no,{$isEnd:!0,children:[i.jsx(ro,{children:d.endDate}),i.jsxs(oo,{children:[i.jsx(so,{children:n.endDate}),i.jsx(io,{children:n.endTime})]})]})]}),b.length>0&&i.jsx(El,{children:b.map((D,m)=>i.jsxs(_l,{children:[i.jsx(Tl,{children:D.label}),i.jsx(Al,{children:D.value})]},m))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(ao,{children:[n.departureAddress&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.salida}),i.jsx(Et,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.destino}),i.jsx(Et,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.regreso}),i.jsx(Et,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(ao,{children:[n.serviceNotes&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.serviceNotes}),i.jsx(Et,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.reservationNotes}),i.jsx(Et,{children:n.reservationNotes})]})]})]})]})};x.div`
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
`;const Il=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Ll=x.div`
  position: absolute;
  height: ${zt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,Yl=x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,co=x.p`
  ${lt}
  ${tt}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Nl=x.p`
  ${lt}
  ${tt}
`,Fl=x.div`
  position: sticky;
  left: ${Ee+16}px;
  overflow: hidden;
`,zl=x.div`
  position: absolute;
  height: ${zt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Bl=x.div`
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
`,Hl=x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Wl=x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,jl=x.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,lo=x.div`
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
`,uo=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,fo=x.div`
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
`,ho=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,On=x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,In=x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,mt=x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,po=x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,Zl=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:d=[]})=>{const c=Je(),u=B=>{let h=0;for(const y of d)y<=B&&h++;return B*he+h*Oe},[f,v]=p.useState(null),[M,b]=p.useState(0),D=p.useCallback((B=400,h=300)=>{const w=t.width,_=48,S=document.getElementById("react-scheduler");if(!S)return{x:r.x+w+16,y:r.y};const C=S.scrollLeft,Z=S.scrollTop,Q=S.clientWidth,L=S.clientHeight,k=r.x-C,A=r.y-Z,Y={left:Ee+16,right:Q-16,top:16,bottom:L-16},F=Y.right-(k+w),I=k-Y.left,W=Y.bottom-(A+_),re=A-Y.top;let ee,N;return F>=B+16?ee=k+w+16:I>=B+16?ee=k-B-16:F>=I?(ee=k+w+16,ee+B>Y.right&&(ee=Y.right-B)):(ee=k-B-16,ee<Y.left&&(ee=Y.left)),W>=h+16?N=A+_+16:re>=h+16?N=A-h-16:W>=re?(N=A+_+16,N+h>Y.bottom&&(N=Y.bottom-h)):(N=A-h-16,N<Y.top&&(N=Y.top)),ee=Math.max(Y.left,Math.min(ee,Y.right-B)),N=Math.max(Y.top,Math.min(N,Y.bottom-h)),{x:ee+C,y:N+Z}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&M===0?b(r.x):s==="idle"&&b(0)},[s,e,r.x,M]),p.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const B=[];let h=0;for(const y of a){const w=Math.max(y.data.length,1);if(y.capacity!==void 0&&e.totalPassengers>y.capacity)for(let _=0;_<w;_++)B.push(h+_);h+=w}return B},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const O=s==="animating",U=Ur(e.bgColor??""),j=()=>{if(!n)return"";const B=P(n.startDate).format("MMM D, HH:mm"),h=P(n.endDate).format("HH:mm");return`${B} - ${h}`};return i.jsxs(Il,{children:[m.map(B=>i.jsx(Wl,{style:{top:`${u(B)}px`,height:`${he}px`}},B)),n&&s==="dragging"&&i.jsx(Hl,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${u(n.resourceIndex)}px`,height:`${he}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(zl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),i.jsx(Bl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(he-48)/2}px`},children:j()})]}),n&&s==="dragging"&&l&&i.jsx(jl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${u(n.resourceIndex)}px`,height:`${he}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const B=D(400,300);return i.jsxs(lo,{style:{left:`${B.x}px`,top:`${B.y}px`},children:[i.jsxs(uo,{children:[i.jsx(fo,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(ho,{children:n.conflicts.map((h,y)=>{const w=P(n.startDate).format("YYYY-MM-DD"),_=P(n.endDate).format("YYYY-MM-DD"),S=P(h.event.startDate).format("YYYY-MM-DD"),C=P(h.event.endDate).format("YYYY-MM-DD"),Z=P(h.conflictStart).format("YYYY-MM-DD"),Q=P(h.conflictEnd).format("YYYY-MM-DD"),L=w!==_,k=S!==C,A=Z!==Q,Y=L?P(n.startDate).format("MMM D, h:mm A"):P(n.startDate).format("h:mm A"),F=L?P(n.endDate).format("MMM D, h:mm A"):P(n.endDate).format("h:mm A"),I=k?P(h.event.startDate).format("MMM D, h:mm A"):P(h.event.startDate).format("h:mm A"),W=k?P(h.event.endDate).format("MMM D, h:mm A"):P(h.event.endDate).format("h:mm A"),re=A?P(h.conflictStart).format("MMM D, h:mm A"):P(h.conflictStart).format("h:mm A"),ee=A?P(h.conflictEnd).format("MMM D, h:mm A"):P(h.conflictEnd).format("h:mm A"),N=A?"":P(h.conflictStart).format("MMM D"),H=n.startDate.getTime(),q=n.endDate.getTime(),te=h.event.startDate.getTime(),$=h.event.endDate.getTime(),G=H>=te&&H<$,T=q>te&&q<=$,R=H<=te&&q>=$,V=te<=H&&$>=q;let z=!1,g=!1,K=!1,E=!1,X="";return R||V?(z=!0,g=!0,K=!0,E=!0,X=`⚠️ ${c.conflicts.changeBoth}`):G&&T?(z=!0,g=!0,K=!0,E=!0,X=`⚠️ ${c.conflicts.changeBoth}`):G?(z=!0,E=!0,X=`⚠️ ${c.conflicts.changeStart}`):T&&(g=!0,K=!0,X=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(On,{children:[i.jsxs(In,{children:[c.conflicts.conflictsWith,": ",h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(mt,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",z?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Y}):Y," ",c.conflicts.to," ",g?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:F}):F]}),i.jsxs(mt,{children:[i.jsx("strong",{children:h.event.title})," ",c.conflicts.currentlyAt,":"," ",K?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:I}):I," ",c.conflicts.to," ",E?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:W}):W]}),i.jsxs(po,{children:[c.conflicts.conflictTime,": ",N&&`${N}, `,re," - ",ee]}),X&&i.jsx(mt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:X})]},y)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const B=D(400,400);return i.jsxs(lo,{style:{left:`${B.x}px`,top:`${B.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(uo,{style:{color:"#2E7D32"},children:[i.jsx(fo,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(ho,{children:[(()=>{const h=n.nearbyEvents.some(S=>S.position==="before"),y=n.nearbyEvents.some(S=>S.position==="after"),w=P(n.startDate).format("h:mm A"),_=P(n.endDate).format("h:mm A");return i.jsxs(On,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(In,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(mt,{style:{fontWeight:600},children:[P(n.startDate).format("MMM D"),":"," ",h?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:w}):w," ",c.conflicts.to," ",y?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:_}):_]}),i.jsx(mt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((h,y)=>{const w=P(h.event.startDate).format("YYYY-MM-DD"),_=P(h.event.endDate).format("YYYY-MM-DD"),S=w!==_,C=S?P(h.event.startDate).format("MMM D, h:mm A"):P(h.event.startDate).format("h:mm A"),Z=S?P(h.event.endDate).format("MMM D, h:mm A"):P(h.event.endDate).format("h:mm A"),Q=P(h.event.startDate).format("MMM D"),L=Math.floor(h.timeGap/(1e3*60*60)),k=Math.floor(h.timeGap%(1e3*60*60)/(1e3*60)),A=L>0?`${L}h ${k}m`:`${k}m`,Y=h.position==="after",F=h.position==="before";return i.jsxs(On,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(In,{style:{color:"#1B5E20"},children:[h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(mt,{children:[!S&&`${Q}: `,Y?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:C}):C," ",c.conflicts.to," ",F?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:Z}):Z]}),i.jsxs(po,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[A," ",h.position==="before"?c.conflicts.before:c.conflicts.after]})]},y)})]})]})})(),i.jsx(Ll,{$isAnimating:O,$animateToX:f==null?void 0:f.x,$animateToY:f==null?void 0:f.y,style:{left:O?`${(f==null?void 0:f.x)??0}px`:"0",top:O?`${(f==null?void 0:f.y)??0}px`:"0",transform:O?void 0:`translate3d(${l?M:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:U},children:i.jsx(Yl,{children:i.jsxs(Fl,{children:[i.jsx(co,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(co,{children:e.subtitle}),e.description&&i.jsx(Nl,{children:e.description})]})})})]})},Vl=Le`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,Gl=x.div`
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
  animation: ${Vl} 1.5s ease-in-out infinite;
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
`,Xl=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(Gl,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Ul=Le`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Kl=x.div`
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
  animation: ${Ul} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,Jl=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,ql=x.span`
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
`,Ql=x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Rl=x.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;x.div`
  display: none;
`,x.div`
  display: none;
`,x.button`
  display: none;
`;const ed=x.div`
  display: flex;
  gap: 8px;
`,go=x.button`
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
`,td=({selections:e,onConfirm:r,onClear:t})=>{var b;const o=Je().multiSelect,s=p.useMemo(()=>e.filter(D=>D.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",u=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",f=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((b=o==null?void 0:o.conflictsWarning)==null?void 0:b.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,M=i.jsxs(Kl,{$hasConflicts:v,"data-multi-select-ui":!0,children:[i.jsxs(Jl,{children:[i.jsxs(ql,{$hasConflicts:v,children:[e.length," ",a]}),v&&i.jsxs(Ql,{children:["⚠️ ",f]}),i.jsx(Rl,{children:l})]}),i.jsxs(ed,{children:[i.jsxs(go,{variant:"secondary",onClick:t,children:["✕ ",d]}),i.jsx(go,{variant:"primary",$hasConflicts:v,onClick:r,children:v?`⚠️ ${u}`:`✓ ${c}`})]})]});return vo.createPortal(M,document.body)},nd=Le`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,rd=x.div`
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
  animation: ${nd} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&at`
      border-style: dashed;
    `}
`,od=x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,sd=x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,id=x.button`
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
`,ad=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,d]=p.useState(null),[c,u]=p.useState({x:0,y:0}),f=p.useRef(null),v=p.useMemo(()=>{switch(t){case 0:return Ye*7;case 1:return Ce;case 2:return $e;default:return Ce}},[t]),M=p.useMemo(()=>P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),b=p.useMemo(()=>e.map((y,w)=>{let _=0,S=!1;for(const I of r){if(I.id===y.resourceId){S=!0;break}_+=Math.max(I.data.length,1)}if(!S)return null;const C=P(y.startDate),Z=P(y.endDate);let Q,L;switch(t){case 0:Q=Math.floor(C.diff(M,"days")/7),L=Math.max(1,Math.ceil(Z.diff(C,"days")/7)+1);break;case 1:Q=C.diff(M,"days"),L=Math.max(1,Z.diff(C,"days")+1);break;case 2:Q=C.diff(M,"hours"),L=Math.max(1,Z.diff(C,"hours")+1);break;default:Q=0,L=1}const k=Q*v;let A=0;for(const I of a)I<=_&&A++;const Y=_*he+A*Oe,F=L*v;return{index:w,selection:y,x:k,y:Y,width:F,height:he}}),[e,r,t,M,v]),D=(y,w)=>{const _=P(y).format("MMM D"),S=P(w).format("MMM D");return _===S?_:`${_} - ${S}`},m=y=>!y.hasConflict||!y.conflicts?"":`⚠️ Conflicts with:
${y.conflicts.map(_=>{const S=(_.overlapDuration/36e5).toFixed(1);return`• ${_.event.title} (${S}h overlap)`}).join(`
`)}`,O=p.useCallback(y=>{let w=0;for(const _ of r){const S=Math.max(_.data.length,1);if(y>=w*he&&y<(w+S)*he)return{resourceId:_.id,resourceLabel:_.label};w+=S}return null},[r]),U=p.useCallback(y=>{const w=Math.floor(y/v);switch(t){case 0:return M.add(w*7,"days").toDate();case 1:return M.add(w,"days").toDate();case 2:return M.add(w,"hours").toDate();default:return M.toDate()}},[t,M,v]),j=p.useCallback((y,w)=>{!s||(y.preventDefault(),y.stopPropagation(),!b[w])||(f.current={x:y.clientX,y:y.clientY},d(w),u({x:0,y:0}))},[s,b]),B=p.useCallback(y=>{if(l===null||!f.current)return;const w=y.clientX-f.current.x,_=y.clientY-f.current.y,S=Math.round(w/v)*v,C=Math.round(_/he)*he;u({x:S,y:C})},[l,v]),h=p.useCallback(()=>{if(l===null||!s){d(null),u({x:0,y:0}),f.current=null;return}const y=b[l];if(!y){d(null),u({x:0,y:0}),f.current=null;return}const w=y.x+c.x,_=y.y+c.y,S=O(_+he/2);if(!S){d(null),u({x:0,y:0}),f.current=null;return}const C=U(w),Z=e[l],Q=Z.endDate.getTime()-Z.startDate.getTime(),L=new Date(C.getTime()+Q);s(l,{startDate:C,endDate:L,resourceId:S.resourceId,resourceLabel:S.resourceLabel}),d(null),u({x:0,y:0}),f.current=null},[l,c,b,e,s,O,U]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",B),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",h)}},[l,B,h]),i.jsx(i.Fragment,{children:b.map(y=>{if(!y)return null;const w=y.selection.hasConflict||!1,_=l===y.index,S=_?y.x+c.x:y.x,C=_?y.y+c.y:y.y;return i.jsxs(rd,{$hasConflict:w,$isDragging:_,style:{left:S,top:C,width:y.width,height:y.height},"data-multi-select-ui":!0,onMouseDown:Z=>j(Z,y.index),children:[w&&i.jsx(sd,{title:m(y.selection),children:"⚠️"}),i.jsx(od,{$hasConflict:w,children:D(y.selection.startDate,y.selection.endDate)}),i.jsx(id,{onClick:Z=>{Z.stopPropagation(),o(y.index)},onMouseDown:Z=>Z.stopPropagation(),title:w?"Remove conflicting selection":"Remove selection",children:"×"})]},y.index)})})},mo=(e,r,t,n)=>{if(r===2)return null;const o=r===0?Ye*7:Ce,s=P().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"),a=e.startOf("day"),l=r===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=n?null:{x:l*o,width:o}},cd=x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({theme:e})=>e.colors.today}12;
`,ld=({zoom:e,startDate:r})=>{const{cols:t}=We(),n=p.useMemo(()=>mo(P(),e,r,t),[e,r,t]);return n?i.jsx(cd,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},dd="#2f6fed",ud=x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${dd}1c;
`,fd=({zoom:e,startDate:r})=>{const{cols:t,jumpDate:n}=We(),o=p.useMemo(()=>!n||n.isSame(P(),"day")?null:mo(n,e,r,t),[n,e,r,t]);return o?i.jsx(ud,{style:{left:`${o.x}px`,width:`${o.width}px`},"aria-hidden":!0}):null},Vd="";Pe.Scheduler=Na,Object.defineProperty(Pe,Symbol.toStringTag,{value:"Module"})});
