(function(Te,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Te=typeof globalThis<"u"?globalThis:Te||self,i(Te["react-scheduler"]={},Te["react/jsx-runtime"],Te.React,Te.ReactDOM))})(this,function(Te,i,p,mo){"use strict";var cd=Object.defineProperty;var ld=(Te,i,p)=>i in Te?cd(Te,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):Te[i]=p;var go=(Te,i,p)=>(ld(Te,typeof i!="symbol"?i+"":i,p),p);function yo(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const oe=yo(p);var Me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bt={},vo={get exports(){return bt},set exports(e){bt=e}},ye={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function xo(){if(Ln)return ye;Ln=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),S;S=Symbol.for("react.module.reference");function E(m){if(typeof m=="object"&&m!==null){var L=m.$$typeof;switch(L){case e:switch(m=m.type,m){case t:case o:case n:case c:case u:return m;default:switch(m=m&&m.$$typeof,m){case l:case a:case d:case x:case f:case s:return m;default:return L}}case r:return L}}}return ye.ContextConsumer=a,ye.ContextProvider=s,ye.Element=e,ye.ForwardRef=d,ye.Fragment=t,ye.Lazy=x,ye.Memo=f,ye.Portal=r,ye.Profiler=o,ye.StrictMode=n,ye.Suspense=c,ye.SuspenseList=u,ye.isAsyncMode=function(){return!1},ye.isConcurrentMode=function(){return!1},ye.isContextConsumer=function(m){return E(m)===a},ye.isContextProvider=function(m){return E(m)===s},ye.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},ye.isForwardRef=function(m){return E(m)===d},ye.isFragment=function(m){return E(m)===t},ye.isLazy=function(m){return E(m)===x},ye.isMemo=function(m){return E(m)===f},ye.isPortal=function(m){return E(m)===r},ye.isProfiler=function(m){return E(m)===o},ye.isStrictMode=function(m){return E(m)===n},ye.isSuspense=function(m){return E(m)===c},ye.isSuspenseList=function(m){return E(m)===u},ye.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===n||m===c||m===u||m===C||typeof m=="object"&&m!==null&&(m.$$typeof===x||m.$$typeof===f||m.$$typeof===s||m.$$typeof===a||m.$$typeof===d||m.$$typeof===S||m.getModuleId!==void 0)},ye.typeOf=E,ye}var ve={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn;function bo(){return Nn||(Nn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),S=!1,E=!1,m=!1,L=!1,K=!1,H;H=Symbol.for("react.module.reference");function Y(_){return!!(typeof _=="string"||typeof _=="function"||_===t||_===o||K||_===n||_===c||_===u||L||_===C||S||E||m||typeof _=="object"&&_!==null&&(_.$$typeof===x||_.$$typeof===f||_.$$typeof===s||_.$$typeof===a||_.$$typeof===d||_.$$typeof===H||_.getModuleId!==void 0))}function h(_){if(typeof _=="object"&&_!==null){var V=_.$$typeof;switch(V){case e:var ee=_.type;switch(ee){case t:case o:case n:case c:case u:return ee;default:var J=ee&&ee.$$typeof;switch(J){case l:case a:case d:case x:case f:case s:return J;default:return V}}case r:return V}}}var b=a,y=s,D=e,w=d,$=t,G=x,Q=f,A=r,k=o,P=n,N=c,O=u,F=!1,X=!1;function ne(_){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ie(_){return X||(X=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function B(_){return h(_)===a}function W(_){return h(_)===s}function q(_){return typeof _=="object"&&_!==null&&_.$$typeof===e}function te(_){return h(_)===d}function M(_){return h(_)===t}function Z(_){return h(_)===x}function T(_){return h(_)===f}function R(_){return h(_)===r}function j(_){return h(_)===o}function z(_){return h(_)===n}function g(_){return h(_)===c}function U(_){return h(_)===u}ve.ContextConsumer=b,ve.ContextProvider=y,ve.Element=D,ve.ForwardRef=w,ve.Fragment=$,ve.Lazy=G,ve.Memo=Q,ve.Portal=A,ve.Profiler=k,ve.StrictMode=P,ve.Suspense=N,ve.SuspenseList=O,ve.isAsyncMode=ne,ve.isConcurrentMode=ie,ve.isContextConsumer=B,ve.isContextProvider=W,ve.isElement=q,ve.isForwardRef=te,ve.isFragment=M,ve.isLazy=Z,ve.isMemo=T,ve.isPortal=R,ve.isProfiler=j,ve.isStrictMode=z,ve.isSuspense=g,ve.isSuspenseList=U,ve.isValidElementType=Y,ve.typeOf=h}()),ve}(function(e){process.env.NODE_ENV==="production"?e.exports=xo():e.exports=bo()})(vo);function wo(e){function r(B,W,q,te,M){for(var Z=0,T=0,R=0,j=0,z,g,U=0,_=0,V,ee=V=z=0,J=0,ce=0,pe=0,de=0,ge=q.length,Se=ge-1,me,ae="",he="",De="",Oe="",ue;J<ge;){if(g=q.charCodeAt(J),J===Se&&T+j+R+Z!==0&&(T!==0&&(g=T===47?10:47),j=R=Z=0,ge++,Se++),T+j+R+Z===0){if(J===Se&&(0<ce&&(ae=ae.replace(x,"")),0<ae.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:ae+=q.charAt(J)}g=59}switch(g){case 123:for(ae=ae.trim(),z=ae.charCodeAt(0),V=1,de=++J;J<ge;){switch(g=q.charCodeAt(J)){case 123:V++;break;case 125:V--;break;case 47:switch(g=q.charCodeAt(J+1)){case 42:case 47:e:{for(ee=J+1;ee<Se;++ee)switch(q.charCodeAt(ee)){case 47:if(g===42&&q.charCodeAt(ee-1)===42&&J+2!==ee){J=ee+1;break e}break;case 10:if(g===47){J=ee+1;break e}}J=ee}}break;case 91:g++;case 40:g++;case 34:case 39:for(;J++<Se&&q.charCodeAt(J)!==g;);}if(V===0)break;J++}switch(V=q.substring(de,J),z===0&&(z=(ae=ae.replace(f,"").trim()).charCodeAt(0)),z){case 64:switch(0<ce&&(ae=ae.replace(x,"")),g=ae.charCodeAt(1),g){case 100:case 109:case 115:case 45:ce=W;break;default:ce=N}if(V=r(W,ce,V,g,M+1),de=V.length,0<F&&(ce=t(N,ae,pe),ue=l(3,V,ce,W,A,Q,de,g,M,te),ae=ce.join(""),ue!==void 0&&(de=(V=ue.trim()).length)===0&&(g=0,V="")),0<de)switch(g){case 115:ae=ae.replace(b,a);case 100:case 109:case 45:V=ae+"{"+V+"}";break;case 107:ae=ae.replace(K,"$1 $2"),V=ae+"{"+V+"}",V=P===1||P===2&&s("@"+V,3)?"@-webkit-"+V+"@"+V:"@"+V;break;default:V=ae+V,te===112&&(V=(he+=V,""))}else V="";break;default:V=r(W,t(W,ae,pe),V,te,M+1)}De+=V,V=pe=ce=ee=z=0,ae="",g=q.charCodeAt(++J);break;case 125:case 59:if(ae=(0<ce?ae.replace(x,""):ae).trim(),1<(de=ae.length))switch(ee===0&&(z=ae.charCodeAt(0),z===45||96<z&&123>z)&&(de=(ae=ae.replace(" ",":")).length),0<F&&(ue=l(1,ae,W,B,A,Q,he.length,te,M,te))!==void 0&&(de=(ae=ue.trim()).length)===0&&(ae="\0\0"),z=ae.charCodeAt(0),g=ae.charCodeAt(1),z){case 0:break;case 64:if(g===105||g===99){Oe+=ae+q.charAt(J);break}default:ae.charCodeAt(de-1)!==58&&(he+=o(ae,z,g,ae.charCodeAt(2)))}pe=ce=ee=z=0,ae="",g=q.charCodeAt(++J)}}switch(g){case 13:case 10:T===47?T=0:1+z===0&&te!==107&&0<ae.length&&(ce=1,ae+="\0"),0<F*ne&&l(0,ae,W,B,A,Q,he.length,te,M,te),Q=1,A++;break;case 59:case 125:if(T+j+R+Z===0){Q++;break}default:switch(Q++,me=q.charAt(J),g){case 9:case 32:if(j+Z+T===0)switch(U){case 44:case 58:case 9:case 32:me="";break;default:g!==32&&(me=" ")}break;case 0:me="\\0";break;case 12:me="\\f";break;case 11:me="\\v";break;case 38:j+T+Z===0&&(ce=pe=1,me="\f"+me);break;case 108:if(j+T+Z+k===0&&0<ee)switch(J-ee){case 2:U===112&&q.charCodeAt(J-3)===58&&(k=U);case 8:_===111&&(k=_)}break;case 58:j+T+Z===0&&(ee=J);break;case 44:T+R+j+Z===0&&(ce=1,me+="\r");break;case 34:case 39:T===0&&(j=j===g?0:j===0?g:j);break;case 91:j+T+R===0&&Z++;break;case 93:j+T+R===0&&Z--;break;case 41:j+T+Z===0&&R--;break;case 40:if(j+T+Z===0){if(z===0)switch(2*U+3*_){case 533:break;default:z=1}R++}break;case 64:T+R+j+Z+ee+V===0&&(V=1);break;case 42:case 47:if(!(0<j+Z+R))switch(T){case 0:switch(2*g+3*q.charCodeAt(J+1)){case 235:T=47;break;case 220:de=J,T=42}break;case 42:g===47&&U===42&&de+2!==J&&(q.charCodeAt(de+2)===33&&(he+=q.substring(de,J+1)),me="",T=0)}}T===0&&(ae+=me)}_=U,U=g,J++}if(de=he.length,0<de){if(ce=W,0<F&&(ue=l(2,he,ce,B,A,Q,de,te,M,te),ue!==void 0&&(he=ue).length===0))return Oe+he+De;if(he=ce.join(",")+"{"+he+"}",P*k!==0){switch(P!==2||s(he,2)||(k=0),k){case 111:he=he.replace(Y,":-moz-$1")+he;break;case 112:he=he.replace(H,"::-webkit-input-$1")+he.replace(H,"::-moz-$1")+he.replace(H,":-ms-input-$1")+he}k=0}}return Oe+he+De}function t(B,W,q){var te=W.trim().split(m);W=te;var M=te.length,Z=B.length;switch(Z){case 0:case 1:var T=0;for(B=Z===0?"":B[0]+" ";T<M;++T)W[T]=n(B,W[T],q).trim();break;default:var R=T=0;for(W=[];T<M;++T)for(var j=0;j<Z;++j)W[R++]=n(B[j]+" ",te[T],q).trim()}return W}function n(B,W,q){var te=W.charCodeAt(0);switch(33>te&&(te=(W=W.trim()).charCodeAt(0)),te){case 38:return W.replace(L,"$1"+B.trim());case 58:return B.trim()+W.replace(L,"$1"+B.trim());default:if(0<1*q&&0<W.indexOf("\f"))return W.replace(L,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+W}function o(B,W,q,te){var M=B+";",Z=2*W+3*q+4*te;if(Z===944){B=M.indexOf(":",9)+1;var T=M.substring(B,M.length-1).trim();return T=M.substring(0,B).trim()+T+";",P===1||P===2&&s(T,1)?"-webkit-"+T+T:T}if(P===0||P===2&&!s(M,1))return M;switch(Z){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(G,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return T=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+M+"-ms-flex-pack"+T+M;case 1005:return S.test(M)?M.replace(C,":-webkit-")+M.replace(C,":-moz-")+M:M;case 1e3:switch(T=M.substring(13).trim(),W=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(W)){case 226:T=M.replace(h,"tb");break;case 232:T=M.replace(h,"tb-rl");break;case 220:T=M.replace(h,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+T+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(W=(M=B).length-10,T=(M.charCodeAt(W)===33?M.substring(0,W):M).substring(B.indexOf(":",7)+1).trim(),Z=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:M=M.replace(T,"-webkit-"+T)+";"+M;break;case 207:case 102:M=M.replace(T,"-webkit-"+(102<Z?"inline-":"")+"box")+";"+M.replace(T,"-webkit-"+T)+";"+M.replace(T,"-ms-"+T+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return T=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+T+"-ms-flex-"+T+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(D,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(D,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if($.test(B)===!0)return(T=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?o(B.replace("stretch","fill-available"),W,q,te).replace(":fill-available",":stretch"):M.replace(T,"-webkit-"+T)+M.replace(T,"-moz-"+T.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,q+te===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+M}return M}function s(B,W){var q=B.indexOf(W===1?":":"{"),te=B.substring(0,W!==3?q:10);return q=B.substring(q+1,B.length-1),X(W!==2?te:te.replace(w,"$1"),q,W)}function a(B,W){var q=o(W,W.charCodeAt(0),W.charCodeAt(1),W.charCodeAt(2));return q!==W+";"?q.replace(y," or ($1)").substring(4):"("+W+")"}function l(B,W,q,te,M,Z,T,R,j,z){for(var g=0,U=W,_;g<F;++g)switch(_=O[g].call(u,B,U,q,te,M,Z,T,R,j,z)){case void 0:case!1:case!0:case null:break;default:U=_}if(U!==W)return U}function d(B){switch(B){case void 0:case null:F=O.length=0;break;default:if(typeof B=="function")O[F++]=B;else if(typeof B=="object")for(var W=0,q=B.length;W<q;++W)d(B[W]);else ne=!!B|0}return d}function c(B){return B=B.prefix,B!==void 0&&(X=null,B?typeof B!="function"?P=1:(P=2,X=B):P=0),c}function u(B,W){var q=B;if(33>q.charCodeAt(0)&&(q=q.trim()),ie=q,q=[ie],0<F){var te=l(-1,W,q,q,A,Q,0,0,0,0);te!==void 0&&typeof te=="string"&&(W=te)}var M=r(N,q,W,0,0);return 0<F&&(te=l(-2,M,q,q,A,Q,M.length,0,0,0),te!==void 0&&(M=te)),ie="",k=0,Q=A=1,M}var f=/^\0+/g,x=/[\0\r\f]/g,C=/: */g,S=/zoo|gra/,E=/([,: ])(transform)/g,m=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,K=/@(k\w+)\s*(\S*)\s*/,H=/::(place)/g,Y=/:(read-only)/g,h=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,y=/([\s\S]*?);/g,D=/-self|flex-/g,w=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,Q=1,A=1,k=0,P=1,N=[],O=[],F=0,X=null,ne=0,ie="";return u.use=d,u.set=c,e!==void 0&&c(e),u}var So={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Co(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var ko=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Fn=Co(function(e){return ko.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Xt={},Mo={get exports(){return Xt},set exports(e){Xt=e}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn;function $o(){if(zn)return xe;zn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,x=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,K=e?Symbol.for("react.scope"):60119;function H(h){if(typeof h=="object"&&h!==null){var b=h.$$typeof;switch(b){case r:switch(h=h.type,h){case d:case c:case n:case s:case o:case f:return h;default:switch(h=h&&h.$$typeof,h){case l:case u:case S:case C:case a:return h;default:return b}}case t:return b}}}function Y(h){return H(h)===c}return xe.AsyncMode=d,xe.ConcurrentMode=c,xe.ContextConsumer=l,xe.ContextProvider=a,xe.Element=r,xe.ForwardRef=u,xe.Fragment=n,xe.Lazy=S,xe.Memo=C,xe.Portal=t,xe.Profiler=s,xe.StrictMode=o,xe.Suspense=f,xe.isAsyncMode=function(h){return Y(h)||H(h)===d},xe.isConcurrentMode=Y,xe.isContextConsumer=function(h){return H(h)===l},xe.isContextProvider=function(h){return H(h)===a},xe.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===r},xe.isForwardRef=function(h){return H(h)===u},xe.isFragment=function(h){return H(h)===n},xe.isLazy=function(h){return H(h)===S},xe.isMemo=function(h){return H(h)===C},xe.isPortal=function(h){return H(h)===t},xe.isProfiler=function(h){return H(h)===s},xe.isStrictMode=function(h){return H(h)===o},xe.isSuspense=function(h){return H(h)===f},xe.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===n||h===c||h===s||h===o||h===f||h===x||typeof h=="object"&&h!==null&&(h.$$typeof===S||h.$$typeof===C||h.$$typeof===a||h.$$typeof===l||h.$$typeof===u||h.$$typeof===m||h.$$typeof===L||h.$$typeof===K||h.$$typeof===E)},xe.typeOf=H,xe}var be={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bn;function Do(){return Bn||(Bn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,x=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,K=e?Symbol.for("react.scope"):60119;function H(g){return typeof g=="string"||typeof g=="function"||g===n||g===c||g===s||g===o||g===f||g===x||typeof g=="object"&&g!==null&&(g.$$typeof===S||g.$$typeof===C||g.$$typeof===a||g.$$typeof===l||g.$$typeof===u||g.$$typeof===m||g.$$typeof===L||g.$$typeof===K||g.$$typeof===E)}function Y(g){if(typeof g=="object"&&g!==null){var U=g.$$typeof;switch(U){case r:var _=g.type;switch(_){case d:case c:case n:case s:case o:case f:return _;default:var V=_&&_.$$typeof;switch(V){case l:case u:case S:case C:case a:return V;default:return U}}case t:return U}}}var h=d,b=c,y=l,D=a,w=r,$=u,G=n,Q=S,A=C,k=t,P=s,N=o,O=f,F=!1;function X(g){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ne(g)||Y(g)===d}function ne(g){return Y(g)===c}function ie(g){return Y(g)===l}function B(g){return Y(g)===a}function W(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function q(g){return Y(g)===u}function te(g){return Y(g)===n}function M(g){return Y(g)===S}function Z(g){return Y(g)===C}function T(g){return Y(g)===t}function R(g){return Y(g)===s}function j(g){return Y(g)===o}function z(g){return Y(g)===f}be.AsyncMode=h,be.ConcurrentMode=b,be.ContextConsumer=y,be.ContextProvider=D,be.Element=w,be.ForwardRef=$,be.Fragment=G,be.Lazy=Q,be.Memo=A,be.Portal=k,be.Profiler=P,be.StrictMode=N,be.Suspense=O,be.isAsyncMode=X,be.isConcurrentMode=ne,be.isContextConsumer=ie,be.isContextProvider=B,be.isElement=W,be.isForwardRef=q,be.isFragment=te,be.isLazy=M,be.isMemo=Z,be.isPortal=T,be.isProfiler=R,be.isStrictMode=j,be.isSuspense=z,be.isValidElementType=H,be.typeOf=Y}()),be}(function(e){process.env.NODE_ENV==="production"?e.exports=$o():e.exports=Do()})(Mo);var Ut=Xt,Eo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},To={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kt={};Kt[Ut.ForwardRef]=To,Kt[Ut.Memo]=Hn;function Wn(e){return Ut.isMemo(e)?Hn:Kt[e.$$typeof]||Eo}var Ao=Object.defineProperty,Po=Object.getOwnPropertyNames,jn=Object.getOwnPropertySymbols,Oo=Object.getOwnPropertyDescriptor,Io=Object.getPrototypeOf,Zn=Object.prototype;function Vn(e,r,t){if(typeof r!="string"){if(Zn){var n=Io(r);n&&n!==Zn&&Vn(e,n,t)}var o=Po(r);jn&&(o=o.concat(jn(r)));for(var s=Wn(e),a=Wn(r),l=0;l<o.length;++l){var d=o[l];if(!_o[d]&&!(t&&t[d])&&!(a&&a[d])&&!(s&&s[d])){var c=Oo(r,d);try{Ao(e,d,c)}catch{}}}}return e}var Yo=Vn;function Fe(){return(Fe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Gn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},Jt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!bt.typeOf(e)},Et=Object.freeze([]),Ge=Object.freeze({});function it(e){return typeof e=="function"}function qt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Qt(e){return e&&typeof e.styledComponentId=="string"}var at=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Rt=typeof window<"u"&&"HTMLElement"in window,Lo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),No={},Fo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function zo(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function We(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(zo.apply(void 0,[Fo[e]].concat(t)).trim())}var Bo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&We(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(t+1),c=0,u=n.length;c<u;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),_t=new Map,Tt=new Map,wt=1,At=function(e){if(_t.has(e))return _t.get(e);for(;Tt.has(wt);)wt++;var r=wt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&We(16,""+r),_t.set(e,r),Tt.set(r,e),r},Ho=function(e){return Tt.get(e)},Wo=function(e,r){r>=wt&&(wt=r+1),_t.set(e,r),Tt.set(r,e)},jo="style["+at+'][data-styled-version="5.3.8"]',Zo=new RegExp("^"+at+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Vo=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},Go=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Zo);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(Wo(c,d),Vo(e,c,l[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(a)}}},Xo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Xn=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var u=d[c];if(u&&u.nodeType===1&&u.hasAttribute(at))return u}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(at,"active"),n.setAttribute("data-styled-version","5.3.8");var a=Xo();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},Uo=function(){function e(t){var n=this.element=Xn(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var d=s[a];if(d.ownerNode===o)return d}We(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Ko=function(){function e(t){var n=this.element=Xn(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Jo=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Un=Rt,qo={isServer:!Rt,useCSSOMInjection:!Lo},Pt=function(){function e(t,n,o){t===void 0&&(t=Ge),n===void 0&&(n={}),this.options=Fe({},qo,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Rt&&Un&&(Un=!1,function(s){for(var a=document.querySelectorAll(jo),l=0,d=a.length;l<d;l++){var c=a[l];c&&c.getAttribute(at)!=="active"&&(Go(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return At(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Fe({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new Jo(a):s?new Uo(a):new Ko(a),new Bo(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(At(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(At(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(At(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=Ho(a);if(l!==void 0){var d=t.names.get(l),c=n.getGroup(a);if(d&&c&&d.size){var u=at+".g"+a+'[id="'+l+'"]',f="";d!==void 0&&d.forEach(function(x){x.length>0&&(f+=x+",")}),s+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),Qo=/(a)(d)/gi,Kn=function(e){return String.fromCharCode(e+(e>25?39:97))};function en(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Kn(r%52)+t;return(Kn(r%52)+t).replace(Qo,"$1-$2")}var qe=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Jn=function(e){return qe(5381,e)};function qn(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(it(t)&&!Qt(t))return!1}return!0}var Ro=Jn("5.3.8"),es=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&qn(r),this.componentId=t,this.baseHash=qe(Ro,t),this.baseStyle=n,Pt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=Qe(this.rules,r,t,n).join(""),l=en(qe(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var d=n(a,"."+l,void 0,o);t.insertRules(o,l,d)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,u=qe(this.baseHash,n.hash),f="",x=0;x<c;x++){var C=this.rules[x];if(typeof C=="string")f+=C,process.env.NODE_ENV!=="production"&&(u=qe(u,C+x));else if(C){var S=Qe(C,r,t,n),E=Array.isArray(S)?S.join(""):S;u=qe(u,E+x),f+=E}}if(f){var m=en(u>>>0);if(!t.hasNameForId(o,m)){var L=n(f,"."+m,void 0,o);t.insertRules(o,m,L)}s.push(m)}}return s.join(" ")},e}(),ts=/^\s*\/\/.*$/gm,ns=[":","[",".","#"];function rs(e){var r,t,n,o,s=e===void 0?Ge:e,a=s.options,l=a===void 0?Ge:a,d=s.plugins,c=d===void 0?Et:d,u=new wo(l),f=[],x=function(E){function m(L){if(L)try{E(L+"}")}catch{}}return function(L,K,H,Y,h,b,y,D,w,$){switch(L){case 1:if(w===0&&K.charCodeAt(0)===64)return E(K+";"),"";break;case 2:if(D===0)return K+"/*|*/";break;case 3:switch(D){case 102:case 112:return E(H[0]+K),"";default:return K+($===0?"/*|*/":"")}case-2:K.split("/*|*/}").forEach(m)}}}(function(E){f.push(E)}),C=function(E,m,L){return m===0&&ns.indexOf(L[t.length])!==-1||L.match(o)?E:"."+r};function S(E,m,L,K){K===void 0&&(K="&");var H=E.replace(ts,""),Y=m&&L?L+" "+m+" { "+H+" }":H;return r=K,t=m,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),u(L||!m?"":m,Y)}return u.use([].concat(c,[function(E,m,L){E===2&&L.length&&L[0].lastIndexOf(t)>0&&(L[0]=L[0].replace(n,C))},x,function(E){if(E===-2){var m=f;return f=[],m}}])),S.hash=c.length?c.reduce(function(E,m){return m.name||We(15),qe(E,m.name)},5381).toString():"",S}var Qn=p.createContext();Qn.Consumer;var Rn=p.createContext(),os=(Rn.Consumer,new Pt),tn=rs();function er(){return p.useContext(Qn)||os}function tr(){return p.useContext(Rn)||tn}var nr=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=tn);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return We(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=tn),this.name+r.hash},e}(),ss=/([A-Z])/,is=/([A-Z])/g,as=/^ms-/,cs=function(e){return"-"+e.toLowerCase()};function rr(e){return ss.test(e)?e.replace(is,cs).replace(as,"-ms-"):e}var or=function(e){return e==null||e===!1||e===""};function Qe(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=Qe(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(or(e))return"";if(Qt(e))return"."+e.styledComponentId;if(it(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&bt.isElement(d)&&console.warn(qt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Qe(d,r,t,n)}var c;return e instanceof nr?t?(e.inject(t,n),e.getName(n)):e:Jt(e)?function u(f,x){var C,S,E=[];for(var m in f)f.hasOwnProperty(m)&&!or(f[m])&&(Array.isArray(f[m])&&f[m].isCss||it(f[m])?E.push(rr(m)+":",f[m],";"):Jt(f[m])?E.push.apply(E,u(f[m],m)):E.push(rr(m)+": "+(C=m,(S=f[m])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||C in So?String(S).trim():S+"px")+";"));return x?[x+" {"].concat(E,["}"]):E}(e):e.toString()}var sr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Re(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return it(e)||Jt(e)?sr(Qe(Gn(Et,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:sr(Qe(Gn(e,t)))}var ir=/invalid hook call/i,Ot=new Set,ar=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(ir.test(s))o=!1,Ot.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];n.apply(void 0,[s].concat(l))}},p.useRef(),o&&!Ot.has(t)&&(console.warn(t),Ot.add(t))}catch(s){ir.test(s.message)&&Ot.delete(t)}finally{console.error=n}}},cr=function(e,r,t){return t===void 0&&(t=Ge),e.theme!==t.theme&&e.theme||r||t.theme},ls=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ds=/(^-|-$)/g;function nn(e){return e.replace(ls,"-").replace(ds,"")}var rn=function(e){return en(Jn(e)>>>0)};function It(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var on=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},us=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function fs(e,r,t){var n=e[t];on(r)&&on(n)?lr(n,r):e[t]=r}function lr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(on(a))for(var l in a)us(l)&&fs(e,a[l],l)}return e}var ct=p.createContext();ct.Consumer;function hs(e){var r=p.useContext(ct),t=p.useMemo(function(){return function(n,o){if(!n)return We(14);if(it(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:We(7)}return Array.isArray(n)||typeof n!="object"?We(8):o?Fe({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(ct.Provider,{value:t},e.children):null}var sn={};function dr(e,r,t){var n=Qt(e),o=!It(e),s=r.attrs,a=s===void 0?Et:s,l=r.componentId,d=l===void 0?function(K,H){var Y=typeof K!="string"?"sc":nn(K);sn[Y]=(sn[Y]||0)+1;var h=Y+"-"+rn("5.3.8"+Y+sn[Y]);return H?H+"-"+h:h}(r.displayName,r.parentComponentId):l,c=r.displayName,u=c===void 0?function(K){return It(K)?"styled."+K:"Styled("+qt(K)+")"}(e):c,f=r.displayName&&r.componentId?nn(r.displayName)+"-"+r.componentId:r.componentId||d,x=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,C=r.shouldForwardProp;n&&e.shouldForwardProp&&(C=r.shouldForwardProp?function(K,H,Y){return e.shouldForwardProp(K,H,Y)&&r.shouldForwardProp(K,H,Y)}:e.shouldForwardProp);var S,E=new es(t,f,n?e.componentStyle:void 0),m=E.isStatic&&a.length===0,L=function(K,H){return function(Y,h,b,y){var D=Y.attrs,w=Y.componentStyle,$=Y.defaultProps,G=Y.foldedComponentIds,Q=Y.shouldForwardProp,A=Y.styledComponentId,k=Y.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(A);var P=function(te,M,Z){te===void 0&&(te=Ge);var T=Fe({},M,{theme:te}),R={};return Z.forEach(function(j){var z,g,U,_=j;for(z in it(_)&&(_=_(T)),_)T[z]=R[z]=z==="className"?(g=R[z],U=_[z],g&&U?g+" "+U:g||U):_[z]}),[T,R]}(cr(h,p.useContext(ct),$)||Ge,h,D),N=P[0],O=P[1],F=function(te,M,Z,T){var R=er(),j=tr(),z=M?te.generateAndInjectStyles(Ge,R,j):te.generateAndInjectStyles(Z,R,j);return process.env.NODE_ENV!=="production"&&p.useDebugValue(z),process.env.NODE_ENV!=="production"&&!M&&T&&T(z),z}(w,y,N,process.env.NODE_ENV!=="production"?Y.warnTooManyClasses:void 0),X=b,ne=O.$as||h.$as||O.as||h.as||k,ie=It(ne),B=O!==h?Fe({},h,{},O):h,W={};for(var q in B)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?W.as=B[q]:(Q?Q(q,Fn,ne):!ie||Fn(q))&&(W[q]=B[q]));return h.style&&O.style!==h.style&&(W.style=Fe({},h.style,{},O.style)),W.className=Array.prototype.concat(G,A,F!==A?F:null,h.className,O.className).filter(Boolean).join(" "),W.ref=X,p.createElement(ne,W)}(S,K,H,m)};return L.displayName=u,(S=p.forwardRef(L)).attrs=x,S.componentStyle=E,S.displayName=u,S.shouldForwardProp=C,S.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Et,S.styledComponentId=f,S.target=n?e.target:e,S.withComponent=function(K){var H=r.componentId,Y=function(b,y){if(b==null)return{};var D,w,$={},G=Object.keys(b);for(w=0;w<G.length;w++)D=G[w],y.indexOf(D)>=0||($[D]=b[D]);return $}(r,["componentId"]),h=H&&H+"-"+(It(K)?K:nn(qt(K)));return dr(K,Fe({},Y,{attrs:x,componentId:h}),t)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(K){this._foldedDefaultProps=n?lr({},e.defaultProps,K):K}}),process.env.NODE_ENV!=="production"&&(ar(u,f),S.warnTooManyClasses=function(K,H){var Y={},h=!1;return function(b){if(!h&&(Y[b]=!0,Object.keys(Y).length>=200)){var y=H?' with the id of "'+H+'"':"";console.warn("Over 200 classes were generated for component "+K+y+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),h=!0,Y={}}}}(u,f)),S.toString=function(){return"."+S.styledComponentId},o&&Yo(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var an=function(e){return function r(t,n,o){if(o===void 0&&(o=Ge),!bt.isValidElementType(n))return We(1,String(n));var s=function(){return t(n,o,Re.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,Fe({},o,{},a))},s.attrs=function(a){return r(t,n,Fe({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(dr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){an[e]=an(e)});var ps=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=qn(t),Pt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(Qe(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&Pt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function gs(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=Re.apply(void 0,[e].concat(t)),s="sc-global-"+rn(JSON.stringify(o)),a=new ps(o,s);function l(c){var u=er(),f=tr(),x=p.useContext(ct),C=p.useRef(u.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(S){return typeof S=="string"&&S.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),u.server&&d(C,c,u,x,f),p.useLayoutEffect(function(){if(!u.server)return d(C,c,u,x,f),function(){return a.removeStyles(C,u)}},[C,c,u,x,f]),null}function d(c,u,f,x,C){if(a.isStatic)a.renderStyles(c,No,f,C);else{var S=Fe({},u,{theme:cr(u,x,l.defaultProps)});a.renderStyles(c,S,f,C)}}return process.env.NODE_ENV!=="production"&&ar(s),p.memo(l)}function ze(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=Re.apply(void 0,[e].concat(t)).join(""),s=rn(o);return new nr(s,o)}var Yt=function(){return p.useContext(ct)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const v=an;var et={},ms={get exports(){return et},set exports(e){et=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",d="hour",c="day",u="week",f="month",x="quarter",C="year",S="date",E="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,K={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var k=["th","st","nd","rd"],P=A%100;return"["+A+(k[(P-20)%10]||k[P]||k[0])+"]"}},H=function(A,k,P){var N=String(A);return!N||N.length>=k?A:""+Array(k+1-N.length).join(P)+A},Y={s:H,z:function(A){var k=-A.utcOffset(),P=Math.abs(k),N=Math.floor(P/60),O=P%60;return(k<=0?"+":"-")+H(N,2,"0")+":"+H(O,2,"0")},m:function A(k,P){if(k.date()<P.date())return-A(P,k);var N=12*(P.year()-k.year())+(P.month()-k.month()),O=k.clone().add(N,f),F=P-O<0,X=k.clone().add(N+(F?-1:1),f);return+(-(N+(P-O)/(F?O-X:X-O))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:f,y:C,w:u,d:c,D:S,h:d,m:l,s:a,ms:s,Q:x}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},h="en",b={};b[h]=K;var y=function(A){return A instanceof G},D=function A(k,P,N){var O;if(!k)return h;if(typeof k=="string"){var F=k.toLowerCase();b[F]&&(O=F),P&&(b[F]=P,O=F);var X=k.split("-");if(!O&&X.length>1)return A(X[0])}else{var ne=k.name;b[ne]=k,O=ne}return!N&&O&&(h=O),O||!N&&h},w=function(A,k){if(y(A))return A.clone();var P=typeof k=="object"?k:{};return P.date=A,P.args=arguments,new G(P)},$=Y;$.l=D,$.i=y,$.w=function(A,k){return w(A,{locale:k.$L,utc:k.$u,x:k.$x,$offset:k.$offset})};var G=function(){function A(P){this.$L=D(P.locale,null,!0),this.parse(P)}var k=A.prototype;return k.parse=function(P){this.$d=function(N){var O=N.date,F=N.utc;if(O===null)return new Date(NaN);if($.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var X=O.match(m);if(X){var ne=X[2]-1||0,ie=(X[7]||"0").substring(0,3);return F?new Date(Date.UTC(X[1],ne,X[3]||1,X[4]||0,X[5]||0,X[6]||0,ie)):new Date(X[1],ne,X[3]||1,X[4]||0,X[5]||0,X[6]||0,ie)}}return new Date(O)}(P),this.$x=P.x||{},this.init()},k.init=function(){var P=this.$d;this.$y=P.getFullYear(),this.$M=P.getMonth(),this.$D=P.getDate(),this.$W=P.getDay(),this.$H=P.getHours(),this.$m=P.getMinutes(),this.$s=P.getSeconds(),this.$ms=P.getMilliseconds()},k.$utils=function(){return $},k.isValid=function(){return this.$d.toString()!==E},k.isSame=function(P,N){var O=w(P);return this.startOf(N)<=O&&O<=this.endOf(N)},k.isAfter=function(P,N){return w(P)<this.startOf(N)},k.isBefore=function(P,N){return this.endOf(N)<w(P)},k.$g=function(P,N,O){return $.u(P)?this[N]:this.set(O,P)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(P,N){var O=this,F=!!$.u(N)||N,X=$.p(P),ne=function(T,R){var j=$.w(O.$u?Date.UTC(O.$y,R,T):new Date(O.$y,R,T),O);return F?j:j.endOf(c)},ie=function(T,R){return $.w(O.toDate()[T].apply(O.toDate("s"),(F?[0,0,0,0]:[23,59,59,999]).slice(R)),O)},B=this.$W,W=this.$M,q=this.$D,te="set"+(this.$u?"UTC":"");switch(X){case C:return F?ne(1,0):ne(31,11);case f:return F?ne(1,W):ne(0,W+1);case u:var M=this.$locale().weekStart||0,Z=(B<M?B+7:B)-M;return ne(F?q-Z:q+(6-Z),W);case c:case S:return ie(te+"Hours",0);case d:return ie(te+"Minutes",1);case l:return ie(te+"Seconds",2);case a:return ie(te+"Milliseconds",3);default:return this.clone()}},k.endOf=function(P){return this.startOf(P,!1)},k.$set=function(P,N){var O,F=$.p(P),X="set"+(this.$u?"UTC":""),ne=(O={},O[c]=X+"Date",O[S]=X+"Date",O[f]=X+"Month",O[C]=X+"FullYear",O[d]=X+"Hours",O[l]=X+"Minutes",O[a]=X+"Seconds",O[s]=X+"Milliseconds",O)[F],ie=F===c?this.$D+(N-this.$W):N;if(F===f||F===C){var B=this.clone().set(S,1);B.$d[ne](ie),B.init(),this.$d=B.set(S,Math.min(this.$D,B.daysInMonth())).$d}else ne&&this.$d[ne](ie);return this.init(),this},k.set=function(P,N){return this.clone().$set(P,N)},k.get=function(P){return this[$.p(P)]()},k.add=function(P,N){var O,F=this;P=Number(P);var X=$.p(N),ne=function(W){var q=w(F);return $.w(q.date(q.date()+Math.round(W*P)),F)};if(X===f)return this.set(f,this.$M+P);if(X===C)return this.set(C,this.$y+P);if(X===c)return ne(1);if(X===u)return ne(7);var ie=(O={},O[l]=n,O[d]=o,O[a]=t,O)[X]||1,B=this.$d.getTime()+P*ie;return $.w(B,this)},k.subtract=function(P,N){return this.add(-1*P,N)},k.format=function(P){var N=this,O=this.$locale();if(!this.isValid())return O.invalidDate||E;var F=P||"YYYY-MM-DDTHH:mm:ssZ",X=$.z(this),ne=this.$H,ie=this.$m,B=this.$M,W=O.weekdays,q=O.months,te=function(R,j,z,g){return R&&(R[j]||R(N,F))||z[j].slice(0,g)},M=function(R){return $.s(ne%12||12,R,"0")},Z=O.meridiem||function(R,j,z){var g=R<12?"AM":"PM";return z?g.toLowerCase():g},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:B+1,MM:$.s(B+1,2,"0"),MMM:te(O.monthsShort,B,q,3),MMMM:te(q,B),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:te(O.weekdaysMin,this.$W,W,2),ddd:te(O.weekdaysShort,this.$W,W,3),dddd:W[this.$W],H:String(ne),HH:$.s(ne,2,"0"),h:M(1),hh:M(2),a:Z(ne,ie,!0),A:Z(ne,ie,!1),m:String(ie),mm:$.s(ie,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:X};return F.replace(L,function(R,j){return j||T[R]||X.replace(":","")})},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(P,N,O){var F,X=$.p(N),ne=w(P),ie=(ne.utcOffset()-this.utcOffset())*n,B=this-ne,W=$.m(this,ne);return W=(F={},F[C]=W/12,F[f]=W,F[x]=W/3,F[u]=(B-ie)/6048e5,F[c]=(B-ie)/864e5,F[d]=B/o,F[l]=B/n,F[a]=B/t,F)[X]||B,O?W:$.a(W)},k.daysInMonth=function(){return this.endOf(f).$D},k.$locale=function(){return b[this.$L]},k.locale=function(P,N){if(!P)return this.$L;var O=this.clone(),F=D(P,N,!0);return F&&(O.$L=F),O},k.clone=function(){return $.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},A}(),Q=G.prototype;return w.prototype=Q,[["$ms",s],["$s",a],["$m",l],["$H",d],["$W",c],["$M",f],["$y",C],["$D",S]].forEach(function(A){Q[A[1]]=function(k){return this.$g(k,A[0],A[1])}}),w.extend=function(A,k){return A.$i||(A(k,G,w),A.$i=!0),w},w.locale=D,w.isDayjs=y,w.unix=function(A){return w(1e3*A)},w.en=b[h],w.Ls=b,w.p={},w})})(ms);const I=et,St="reactSchedulerOutsideWrapper",Ie="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",ys=gs`

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
`,vs={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},xs={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},lt=`
margin: 0;
padding: 0;
`,tt=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;v.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const Ce=50,Be=24,nt=16,rt=40,Lt=rt+nt+Be,dt=84,fe=56,Ae=196,Ye=12,$e=50,ut=24,Ct=16,cn=40,bs=ut+Ct+cn,ur=24,fr=52,Xe={topRow:`600 14px ${Ie}`,middleRow:`400 10px ${Ie}`,bottomRow:{name:`600 14px ${Ie}`,number:`600 10px ${Ie}`,hoursInDay:`400 9px ${Ie}`}},ft=3,ln=12,Nt=24,ws="reactSchedulerCanvasHeaderWrapper",hr="reactSchedulerCanvasWrapper",je=St,Ss=4,Ft=48,Ue=5,Cs=40,pr=8,dn=Be/2+2,gr=nt/2+Be+1,mr=2,ke=60,Pe=21,yr=58,vr="reactSchedulerBody",xr=e=>e%4===0&&e%100>0||e%400===0?366:365,un=e=>{const r=e.day();return r!==0&&r!==6},br=(e,r)=>I(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),wr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:un(e),isCurrentDay:e.isSame(I(),"day"),year:parseInt(e.format("YYYY"))});let zt=null;const ks=e=>{if(zt)return zt;const r=document.createElement("canvas");r.width=12,r.height=12;const t=r.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),zt=e.createPattern(r,"repeat"),zt):null},fn=(e,r,t,n,o,s,a,l=!1,d=!1)=>{if(s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.mode==="dark"?a.colors.primary:"#E1ECE6",e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,fe),l&&!s){const u=ks(e);u&&(e.fillStyle=u,e.fillRect(r,t,n,fe))}const c=a.mode==="dark";e.strokeStyle=c?a.colors.border:"#EEF3F0",e.beginPath(),e.moveTo(r+n-.5,t),e.lineTo(r+n-.5,t+fe),e.stroke(),e.strokeStyle=c?a.colors.border:"#E4EAE7",e.beginPath(),e.moveTo(r,t+.5),e.lineTo(r+n,t+.5),e.stroke(),d&&(e.strokeStyle=c?a.colors.today:"#5C8374",e.beginPath(),e.moveTo(r+.5,t),e.lineTo(r+.5,t+fe),e.stroke())},hn=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Pe},Ms=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=hn(a,s);for(let d=0;d<=t;d++){const c=I(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),u=c.isSame(I(),"day"),f=c.isBefore(I(),"day"),x=c.date()===1;fn(e,d*Ce,a*fe+l,Ce,un(c),u,o,f,x)}}},$s=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},Ds=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*Ye;const d=r*fe+s.length*Pe;for(let c=0;c<=t;c++){const f=I(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(I(),"week");for(let x=0;x<r;x++){const C=hn(x,s);fn(e,a,x*fe+C,dt,!0,f,o)}a+=dt}for(let c=0;c<t;c++){const u=br(n,c)*Ye;$s(e,l,d,o),l+=u}},Es=(e,r,t,n,o,s=[])=>{const a=I(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const d=hn(l,s);for(let c=0;c<=t;c++){let u;c===Math.floor(t/2)?u=I():c>Math.floor(t/2)?u=I().add(c-Math.floor(t/2),"hours"):u=I().subtract(Math.floor(t/2)-l,"hours");const f=a.isSame(I(),"day")&&u.isSame(I(),"hour");fn(e,c*$e+$e/2-.5,l*fe+d,$e,un(u),f,o)}}},_s=(e,r,t,n,o=!1)=>{const s=t*fe+r*Pe,a=e.canvas.width;e.fillStyle=o?n.colors.subcontractBorder+"40":n.mode==="dark"?n.colors.primary+"80":"#E1ECE6",e.fillRect(0,s,a,Pe)},Ts=(e,r,t,n,o,s,a=[],l=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(hr)){switch(r){case 0:Ds(e,t,n,o,s,a);break;case 1:Ms(e,t,n,o,s,a);break;case 2:Es(e,t,n,o,s,a);break}for(let c=0;c<a.length;c++)_s(e,c,a[c],s,a[c]===l);if(r===1){const c=I(`${o.year}-${o.month+1}-${o.dayOfMonth}`),u=t*fe+a.length*Pe;e.strokeStyle=s.mode==="dark"?s.colors.today:"#5C8374",e.setLineDash([]);for(let f=0;f<=n;f++)if(c.add(f,"days").date()===1){const x=f*Ce+.5;e.beginPath(),e.moveTo(x,0),e.lineTo(x,u),e.stroke()}}}};var pn={},As={get exports(){return pn},set exports(e){pn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=a(this).startOf(n).add(1,n).date(c),f=a(this).endOf(t);if(u.isBefore(f))return 1}var x=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),C=this.diff(x,t,!0);return C<0?a(this).startOf("week").week():Math.ceil(C)},l.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(As);const Ps=pn;var gn={},Os={get exports(){return gn},set exports(e){gn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Os);const Is=gn;var mn={},Ys={get exports(){return mn},set exports(e){mn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var u,f,x,C,S=a(this),E=(u=this.isoWeekYear(),f=this.$u,x=(f?s.utc:s)().year(u).startOf("year"),C=4-x.isoWeekday(),x.isoWeekday()>4&&(C+=7),x.add(C,t));return S.diff(E,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var d=l.startOf;l.startOf=function(c,u){var f=this.$utils(),x=!!f.u(u)||u;return f.p(c)==="isoweek"?x?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(c,u)}}})})(Ys);const Ls=mn;var yn={},Ns={get exports(){return yn},set exports(e){yn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,d){var c=o(s),u=o(a),f=(d=d||"()")[0]==="(",x=d[1]===")";return(f?this.isAfter(c,l):!this.isBefore(c,l))&&(x?this.isBefore(u,l):!this.isAfter(u,l))||(f?this.isBefore(c,l):!this.isAfter(c,l))&&(x?this.isAfter(u,l):!this.isBefore(u,l))}}})})(Ns);const Fs=yn;var vn={},zs={get exports(){return vn},set exports(e){vn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,u=2592e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,x={years:c,months:u,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},C=function(h){return h instanceof Y},S=function(h,b,y){return new Y(h,y,b.$l)},E=function(h){return n.p(h)+"s"},m=function(h){return h<0},L=function(h){return m(h)?Math.ceil(h):Math.floor(h)},K=function(h){return Math.abs(h)},H=function(h,b){return h?m(h)?{negative:!0,format:""+K(h)+b}:{negative:!1,format:""+h+b}:{negative:!1,format:""}},Y=function(){function h(y,D,w){var $=this;if(this.$d={},this.$l=w,y===void 0&&(this.$ms=0,this.parseFromMilliseconds()),D)return S(y*x[E(D)],this);if(typeof y=="number")return this.$ms=y,this.parseFromMilliseconds(),this;if(typeof y=="object")return Object.keys(y).forEach(function(A){$.$d[E(A)]=y[A]}),this.calMilliseconds(),this;if(typeof y=="string"){var G=y.match(f);if(G){var Q=G.slice(2).map(function(A){return A!=null?Number(A):0});return this.$d.years=Q[0],this.$d.months=Q[1],this.$d.weeks=Q[2],this.$d.days=Q[3],this.$d.hours=Q[4],this.$d.minutes=Q[5],this.$d.seconds=Q[6],this.calMilliseconds(),this}}return this}var b=h.prototype;return b.calMilliseconds=function(){var y=this;this.$ms=Object.keys(this.$d).reduce(function(D,w){return D+(y.$d[w]||0)*x[w]},0)},b.parseFromMilliseconds=function(){var y=this.$ms;this.$d.years=L(y/c),y%=c,this.$d.months=L(y/u),y%=u,this.$d.days=L(y/l),y%=l,this.$d.hours=L(y/a),y%=a,this.$d.minutes=L(y/s),y%=s,this.$d.seconds=L(y/o),y%=o,this.$d.milliseconds=y},b.toISOString=function(){var y=H(this.$d.years,"Y"),D=H(this.$d.months,"M"),w=+this.$d.days||0;this.$d.weeks&&(w+=7*this.$d.weeks);var $=H(w,"D"),G=H(this.$d.hours,"H"),Q=H(this.$d.minutes,"M"),A=this.$d.seconds||0;this.$d.milliseconds&&(A+=this.$d.milliseconds/1e3);var k=H(A,"S"),P=y.negative||D.negative||$.negative||G.negative||Q.negative||k.negative,N=G.format||Q.format||k.format?"T":"",O=(P?"-":"")+"P"+y.format+D.format+$.format+N+G.format+Q.format+k.format;return O==="P"||O==="-P"?"P0D":O},b.toJSON=function(){return this.toISOString()},b.format=function(y){var D=y||"YYYY-MM-DDTHH:mm:ss",w={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return D.replace(d,function($,G){return G||String(w[$])})},b.as=function(y){return this.$ms/x[E(y)]},b.get=function(y){var D=this.$ms,w=E(y);return w==="milliseconds"?D%=1e3:D=w==="weeks"?L(D/x[w]):this.$d[w],D===0?0:D},b.add=function(y,D,w){var $;return $=D?y*x[E(D)]:C(y)?y.$ms:S(y,this).$ms,S(this.$ms+$*(w?-1:1),this)},b.subtract=function(y,D){return this.add(y,D,!0)},b.locale=function(y){var D=this.clone();return D.$l=y,D},b.clone=function(){return S(this.$ms,this)},b.humanize=function(y){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!y)},b.milliseconds=function(){return this.get("milliseconds")},b.asMilliseconds=function(){return this.as("milliseconds")},b.seconds=function(){return this.get("seconds")},b.asSeconds=function(){return this.as("seconds")},b.minutes=function(){return this.get("minutes")},b.asMinutes=function(){return this.as("minutes")},b.hours=function(){return this.get("hours")},b.asHours=function(){return this.as("hours")},b.days=function(){return this.get("days")},b.asDays=function(){return this.as("days")},b.weeks=function(){return this.get("weeks")},b.asWeeks=function(){return this.as("weeks")},b.months=function(){return this.get("months")},b.asMonths=function(){return this.as("months")},b.years=function(){return this.get("years")},b.asYears=function(){return this.as("years")},h}();return function(h,b,y){t=y,n=y().$utils(),y.duration=function($,G){var Q=y.locale();return S($,{$l:Q},G)},y.isDuration=C;var D=b.prototype.add,w=b.prototype.subtract;b.prototype.add=function($,G){return C($)&&($=$.asMilliseconds()),D.bind(this)($,G)},b.prototype.subtract=function($,G){return C($)&&($=$.asMilliseconds()),w.bind(this)($,G)}}})})(zs);const Bs=vn;var Hs="Expected a function",Sr=0/0,Ws="[object Symbol]",js=/^\s+|\s+$/g,Zs=/^[-+]0x[0-9a-f]+$/i,Vs=/^0b[01]+$/i,Gs=/^0o[0-7]+$/i,Xs=parseInt,Us=typeof Me=="object"&&Me&&Me.Object===Object&&Me,Ks=typeof self=="object"&&self&&self.Object===Object&&self,Js=Us||Ks||Function("return this")(),qs=Object.prototype,Qs=qs.toString,Rs=Math.max,ei=Math.min,xn=function(){return Js.Date.now()};function ti(e,r,t){var n,o,s,a,l,d,c=0,u=!1,f=!1,x=!0;if(typeof e!="function")throw new TypeError(Hs);r=Cr(r)||0,bn(t)&&(u=!!t.leading,f="maxWait"in t,s=f?Rs(Cr(t.maxWait)||0,r):s,x="trailing"in t?!!t.trailing:x);function C(b){var y=n,D=o;return n=o=void 0,c=b,a=e.apply(D,y),a}function S(b){return c=b,l=setTimeout(L,r),u?C(b):a}function E(b){var y=b-d,D=b-c,w=r-y;return f?ei(w,s-D):w}function m(b){var y=b-d,D=b-c;return d===void 0||y>=r||y<0||f&&D>=s}function L(){var b=xn();if(m(b))return K(b);l=setTimeout(L,E(b))}function K(b){return l=void 0,x&&n?C(b):(n=o=void 0,a)}function H(){l!==void 0&&clearTimeout(l),c=0,n=d=o=l=void 0}function Y(){return l===void 0?a:K(xn())}function h(){var b=xn(),y=m(b);if(n=arguments,o=this,d=b,y){if(l===void 0)return S(d);if(f)return l=setTimeout(L,r),C(d)}return l===void 0&&(l=setTimeout(L,r)),a}return h.cancel=H,h.flush=Y,h}function bn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function ni(e){return!!e&&typeof e=="object"}function ri(e){return typeof e=="symbol"||ni(e)&&Qs.call(e)==Ws}function Cr(e){if(typeof e=="number")return e;if(ri(e))return Sr;if(bn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=bn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(js,"");var t=Vs.test(e);return t||Gs.test(e)?Xs(e.slice(2),t?2:8):Zs.test(e)?Sr:+e}var wn=ti;const Bt=[0,1,2];var kt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(kt||{});const kr=e=>Bt.includes(e),ht=e=>{var n;const t=(((n=document.getElementById(je))==null?void 0:n.clientWidth)||0)-Ae;switch(e){case 1:return Math.ceil(t/Ce)*ft;case 2:return Math.ceil(t/$e)*ft;default:return Math.ceil(t/dt)*ft}},oi=e=>ht(e)/ft,Ht=(e,r)=>{const t=ht(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},si=(e,r)=>{const t=Ht(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},Sn=()=>{var t;return((((t=document.getElementById(je))==null?void 0:t.clientWidth)||0)-Ae)*ft},Mr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:I(),jumpDate:null,isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});I.extend(Ps),I.extend(Is),I.extend(Ls),I.extend(Fs),I.extend(Bs);const ii=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=I(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:d})=>{const{zoom:c,maxRecordsPerPage:u=50}=n,[f,x]=p.useState(c),[C,S]=p.useState(I()),[E,m]=p.useState(null),[L,K]=p.useState(!1),[H,Y]=p.useState(ht(f)),h=Bt[f]!==Bt[Bt.length-1],b=f!==0,y=p.useMemo(()=>si(C,f),[C,f]),D=Ht(C,f).startDate,w=I(D).dayOfYear(),$=wr(D),G=p.useRef(null),Q=p.useRef(!1),A=p.useRef(null),[k,P]=p.useState([{x:0,y:0}]),N=p.useCallback((j,z="auto")=>{var U,_,V,ee;const g=Sn();switch(j){case"back":return(U=G.current)==null?void 0:U.scrollTo({behavior:z,left:g/3});case"forward":return(_=G.current)==null?void 0:_.scrollTo({behavior:z,left:g/3});case"middle":{const J=g/ft/4;return(V=G.current)==null?void 0:V.scrollTo({behavior:z,left:g/2-J})}default:return(ee=G.current)==null?void 0:ee.scrollTo({behavior:z,left:g/2})}},[]),O=j=>{P(j)},F=p.useCallback(j=>{const z=oi(f);let g;switch(f){case 0:g=z*7;break;case 1:g=z;break;case 2:g=Math.ceil(z/Nt);break}wn(()=>{switch((j==="forward"||j==="back")&&(Q.current=!0),A.current=j,j){case"back":S(_=>_.subtract(g,"days"));break;case"forward":S(_=>_.add(g,"days"));break;case"middle":S(I());break}s==null||s(y)},300)()},[s,y,f]);p.useEffect(()=>{A.current&&(N(A.current),A.current=null)},[C,N]),p.useEffect(()=>{G.current=document.getElementById(je),Y(ht(f))},[f]),p.useEffect(()=>{const j=()=>Y(ht(f));return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[f]),p.useEffect(()=>{s==null||s(y)},[s,y]),p.useEffect(()=>{K(!1)},[o]),p.useEffect(()=>{L||(N("middle"),K(!0),S(o))},[o,L,N]);const X=()=>{t||(S(j=>f===2?j.add(ur,"hours"):j.add(mr,"weeks")),s==null||s(y))},ne=p.useCallback(()=>{t||F("forward")},[t,F]),ie=()=>{t||(S(j=>f===2?j.subtract(ur,"hours"):j.subtract(mr,"weeks")),s==null||s(y))},B=p.useCallback(()=>{!L||t||F("back")},[L,t,F]),W=p.useCallback(()=>{t||(A.current="middle",S(I()),m(null),s==null||s(y))},[t,s,y]),q=p.useCallback(j=>{if(t)return;const z=I(j).startOf("day");z.isValid()&&(A.current="middle",S(z),m(z),s==null||s(y))},[t,s,y]),te=()=>Z(f+1),M=()=>Z(f-1),Z=j=>{kr(j)&&(x(j),Y(ht(j)),s==null||s(y))},T=()=>a==null?void 0:a(),{Provider:R}=Mr;return i.jsx(R,{value:{data:e,config:n,handleGoNext:X,handleScrollNext:ne,handleGoPrev:ie,handleScrollPrev:B,handleGoToday:W,goToDate:q,zoomIn:te,zoomOut:M,setZoom:Z,zoom:f,isNextZoom:h,isPrevZoom:b,date:C,jumpDate:E,isLoading:t,cols:H,startDate:$,dayOfYear:w,toggleDisplayActiveUnits:T,tilesCoords:k,updateTilesCoords:O,recordsThreshold:u,onClearFilterData:l,suppressNextSlideRef:Q,toolbarActions:d},children:r})},He=()=>p.useContext(Mr),$r=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Dr=()=>{var e;return typeof window<"u"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)},Er=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*fe+n*Pe;if(e>=s+Pe)n++;else if(e>=s)return o*fe+n*Pe-n*Pe}return t-n*Pe},ai=5,_r=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>ai},pt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},ci=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:d=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(Z=>({...Z,data:[Z.data]})):r:e,{enabled:u=!0,isDraggable:f,resourceOnly:x=!1,isValidDrop:C}=a,[S,E]=p.useState("idle"),[m,L]=p.useState(null),[K,H]=p.useState({x:0,y:0}),[Y,h]=p.useState({width:0,height:48}),[b,y]=p.useState(null),[D,w]=p.useState(!0),$=p.useRef({x:0,y:0}),G=p.useRef({x:0,y:0}),Q=p.useRef({x:0,y:0}),A=p.useRef(null),k=p.useRef(null),P=p.useRef(0),N=p.useRef(null),O=p.useCallback(Z=>!u||Z.draggable===!1?!1:f?f(Z):!0,[u,f]),F=p.useCallback((Z,T)=>{const R=Er(T,d),j=Math.floor(R/fe);let z;switch(t){case 0:z=Ye*7;break;case 1:z=Ce;break;case 2:z=$e;break;default:z=Ce}const g=Math.floor(Z/z);let U;const _=I().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:U=_.add(g*7,"days").toDate();break;case 1:U=_.add(g,"days").toDate();break;case 2:U=_.add(g,"hours").toDate();break;default:U=_.toDate()}return{snappedDate:U,snappedResourceIndex:j}},[t,n,d]),X=p.useCallback((Z,T,R,j)=>{const z=[],g=T.getTime(),U=R.getTime(),_=c.find(ee=>ee.id===j);if(!_)return z;const V=[];for(const ee of _.data)Array.isArray(ee)?V.push(...ee):V.push(ee);for(const ee of V){if(ee.segmentId===Z.segmentId)continue;const J=ee.startDate.getTime(),ce=ee.endDate.getTime();if(g>=J&&g<ce||U>J&&U<=ce||g<=J&&U>=ce){const de=new Date(Math.max(g,J)),ge=new Date(Math.min(U,ce)),Se=ge.getTime()-de.getTime();z.push({event:ee,conflictStart:de,conflictEnd:ge,overlapDuration:Se})}}return z},[c]),ne=p.useCallback((Z,T,R,j)=>{const z=[],g=T.getTime(),U=R.getTime(),_=I(T).format("YYYY-MM-DD"),V=c.find(J=>J.id===j);if(!V)return z;const ee=[];for(const J of V.data)Array.isArray(J)?ee.push(...J):ee.push(J);for(const J of ee){if(J.segmentId===Z.segmentId)continue;const ce=J.startDate.getTime(),pe=J.endDate.getTime(),de=I(J.startDate).format("YYYY-MM-DD"),ge=I(J.endDate).format("YYYY-MM-DD"),Se=I(R).format("YYYY-MM-DD");if(!(de===_||ge===_||de===Se||ge===Se||I(J.startDate).isBefore(T,"day")&&I(J.endDate).isAfter(R,"day"))||g>=ce&&g<pe||U>ce&&U<=pe||g<=ce&&U>=pe)continue;let he,De;pe<=g?(he=g-pe,De="before"):(he=ce-U,De="after"),z.push({event:J,timeGap:he,position:De})}return z.sort((J,ce)=>J.timeGap-ce.timeGap)},[c]),ie=p.useCallback((Z,T,R)=>{const j=F(T,R);let z,g;if(x)z=Z.startDate,g=Z.endDate;else{const pe=I(Z.endDate).diff(Z.startDate);z=j.snappedDate,g=I(z).add(pe,"milliseconds").toDate()}let U=0,_="",V;for(const pe of e){const de=Math.max(pe.data.length,1);if(j.snappedResourceIndex<U+de){_=pe.id,V=pe.capacity;break}U+=de}if(!_)return null;let ee=!0;V!==void 0&&Z.totalPassengers!==void 0&&(ee=Z.totalPassengers<=V);const J=X(Z,z,g,_),ce=J.length===0?ne(Z,z,g,_):[];return{startDate:z,endDate:g,resourceId:_,resourceIndex:j.snappedResourceIndex,resourceCapacity:V,hasCapacity:ee,conflicts:J,hasConflict:J.length>0,nearbyEvents:ce}},[F,e,x,X,ne]),B=p.useCallback((Z,T)=>{if(!s)return;const R=Date.now();if(R-P.current<100)return;P.current=R;const j={event:Z,currentStartDate:T.startDate,currentEndDate:T.endDate,currentResourceId:T.resourceId,conflicts:T.conflicts};s(j)},[s]),W=p.useCallback((Z,T)=>{if(!O(Z)||!l.current)return;T.preventDefault(),T.stopPropagation();const R=T.target.closest('[style*="left"]');let j=0,z=0;R&&R.style.left&&R.style.top&&(j=parseInt(R.style.left),z=parseInt(R.style.top));const g=pt(T.clientX,T.clientY,l.current);$.current={x:j,y:z},G.current={x:T.clientX,y:T.clientY},Q.current={x:g.x-j,y:20},N.current={startDate:Z.startDate,endDate:Z.endDate,resourceId:""};for(const V of e){for(const ee of V.data)if(ee.some(J=>J.segmentId===Z.segmentId)){N.current.resourceId=V.id;break}if(N.current.resourceId)break}L(Z),E("potential"),H({x:j,y:z});let U=100,_=48;if(R){const V=R.getBoundingClientRect();U=V.width,_=V.height}h({width:U,height:_})},[O,l,e,t]),q=p.useCallback(Z=>{if(!l.current)return;let T=l.current;for(;T&&T!==document.body;){const J=window.getComputedStyle(T);if(T.scrollHeight>T.clientHeight&&(J.overflowY==="auto"||J.overflowY==="scroll"||J.overflow==="auto"||J.overflow==="scroll"))break;T=T.parentElement}(!T||T===document.body)&&(T=document.documentElement);const R=T.getBoundingClientRect(),j=Z.clientY,z=50,g=12,U=j-R.top,_=R.bottom-j;let V=!1,ee=0;U<z&&U>0?(V=!0,ee=-g*(1-U/z)):_<z&&_>0&&(V=!0,ee=g*(1-_/z)),V?(k.current&&cancelAnimationFrame(k.current),k.current=requestAnimationFrame(()=>{T.scrollTop+=ee,S==="dragging"&&q(Z)})):k.current&&(cancelAnimationFrame(k.current),k.current=null)},[l,S]),te=p.useCallback(Z=>{if(S==="idle"||S==="animating"||!m||!l.current)return;const T={x:Z.clientX,y:Z.clientY};if(S==="potential")if(_r(G.current,T))E("dragging");else return;q(Z);const R=pt(Z.clientX,Z.clientY,l.current);A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{const j={x:R.x-Q.current.x,y:R.y-Q.current.y};H(j);const z=ie(m,R.x,R.y);if(z&&C){const g={event:m,currentStartDate:z.startDate,currentEndDate:z.endDate,currentResourceId:z.resourceId,conflicts:z.conflicts};z.hasConflict=!C(g)}if(y(z),z){const g=z.hasCapacity!==!1;w(g),B(m,z)}})},[S,m,l,ie,B,C,q]),M=p.useCallback(async Z=>{if(S==="idle"||S==="animating")return;const T={x:Z.clientX,y:Z.clientY};if(!_r(G.current,T)||S==="potential"){E("idle"),L(null),y(null);return}if(!m||!b||!N.current){E("idle"),L(null),y(null);return}if(b.hasCapacity===!1){w(!1),E("animating"),H($.current),setTimeout(()=>{E("idle"),L(null),y(null),w(!0)},300);return}const j={event:m,originalStartDate:N.current.startDate,originalEndDate:N.current.endDate,originalResourceId:N.current.resourceId,newStartDate:b.startDate,newEndDate:b.endDate,newResourceId:b.resourceId,hasConflict:b.hasConflict,conflicts:b.conflicts};let z=!0;if(o)try{const g=o(j);z=g instanceof Promise?await g:g}catch{z=!1}z?(w(!0),E("idle"),L(null),y(null)):(w(!1),E("animating"),H($.current),setTimeout(()=>{E("idle"),L(null),y(null),w(!0)},300))},[S,m,b,o,C]);return p.useEffect(()=>{if(S==="potential"||S==="dragging"){const Z=R=>te(R),T=R=>M(R);return document.addEventListener("mousemove",Z),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",T)}}else return()=>{}},[S,te,M]),p.useEffect(()=>()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null),k.current&&(cancelAnimationFrame(k.current),k.current=null)},[]),p.useEffect(()=>{(S==="idle"||S==="animating")&&(A.current&&(cancelAnimationFrame(A.current),A.current=null),k.current&&(cancelAnimationFrame(k.current),k.current=null))},[S]),p.useEffect(()=>{(S==="dragging"||S==="potential")&&(S==="dragging"?(E("animating"),H($.current),setTimeout(()=>{E("idle"),L(null),y(null)},300)):(E("idle"),L(null),y(null)))},[t]),p.useEffect(()=>{if((S==="dragging"||S==="potential")&&m){let Z=!1;for(const T of e){for(const R of T.data)if(R.some(j=>j.segmentId===m.segmentId)){Z=!0;break}if(Z)break}Z||(S==="dragging"?(E("animating"),H($.current),setTimeout(()=>{E("idle"),L(null),y(null)},300)):(E("idle"),L(null),y(null)))}},[e,S,m]),{dragState:S,draggedEvent:m,ghostPosition:K,ghostDimensions:Y,dropTarget:b,isValidDrop:D,handleDragStart:W,isDraggable:O,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:x}},li=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:d,separatorRowIndices:c=[]})=>{const{enabled:u=!1,isSelectable:f}=a,x=u&&!!o,C=p.useCallback(g=>{let U=0;for(const _ of c)_<=g&&U++;return g*fe+U*Pe},[c]),[S,E]=p.useState("idle"),[m,L]=p.useState(null),[K,H]=p.useState(null),[Y,h]=p.useState(null),[b,y]=p.useState(!1),[D,w]=p.useState([]),[$,G]=p.useState(!1),Q=p.useRef(null),A=p.useRef(null),k=p.useRef(null),P=p.useRef(null),N=p.useCallback(()=>{switch(t){case 0:return Ye*7;case 1:return Ce;case 2:return $e;default:return Ce}},[t]),O=p.useCallback(g=>{const U=N(),_=Math.floor(g/U),V=I().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return V.add(_*7,"days").toDate();case 1:return V.add(_,"days").toDate();case 2:return V.add(_,"hours").toDate();default:return V.toDate()}},[t,n,N]),F=p.useCallback(g=>{const U=Er(g,c),_=Math.floor(U/fe);let V=0;for(const ee of e){const J=Math.max(ee.data.length,1);if(_<V+J)return{resourceId:ee.id,resourceIndex:_,resourceLabel:ee.label};V+=J}return null},[e,c]),X=p.useCallback(g=>{const U=N();return Math.floor(g/U)*U},[N]),ne=p.useCallback((g,U,_,V=[])=>{const ee=[],ce=(r||e).find(ge=>ge.id===g),pe=U.getTime(),de=_.getTime();if(ce){const ge=ce.data[0],Se=ge&&Array.isArray(ge)?ce.data.flat():ce.data;for(const me of Se){const ae=new Date(me.startDate).getTime(),he=new Date(me.endDate).getTime();if(pe<he&&de>ae){const De=new Date(Math.max(pe,ae)),Oe=new Date(Math.min(de,he)),ue=Oe.getTime()-De.getTime();ee.push({event:me,conflictStart:De,conflictEnd:Oe,overlapDuration:ue})}}}for(const ge of V){if(ge.resourceId!==g)continue;const Se=ge.startDate.getTime(),me=ge.endDate.getTime();if(pe<me&&de>Se){const ae=new Date(Math.max(pe,Se)),he=new Date(Math.min(de,me)),De=he.getTime()-ae.getTime(),Oe={segmentId:`pending-${ge.startDate.getTime()}`,reservationId:`pending-${ge.startDate.getTime()}`,startDate:ge.startDate,endDate:ge.endDate,occupancy:0,title:`New Event (${ge.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ee.push({event:Oe,conflictStart:ae,conflictEnd:he,overlapDuration:De})}}return ee},[e,r]),ie=p.useCallback(g=>{if(!x||d||!l.current||g.button!==0)return;const U=g.target;if(U.closest("[data-segment-id]")||U.closest("[data-multi-select-ui]"))return;const _=pt(g.clientX,g.clientY,l.current),V=F(_.y);if(!V)return;Q.current={x:g.clientX,y:g.clientY},A.current=V.resourceIndex;const ee=X(_.x),J=N(),ce=C(V.resourceIndex);L(_),H(_),h({x:ee,y:ce,width:J,height:fe}),E("selecting")},[x,d,l,F,X,N,C]),B=p.useCallback(g=>{H(g);const U=N(),_=X((m==null?void 0:m.x)||0),V=X(g.x),ee=C(A.current),J=Math.min(_,V),ce=Math.max(_,V)+U;h({x:J,y:ee,width:ce-J,height:fe})},[m,N,X,C]),W=p.useCallback(()=>{P.current&&(cancelAnimationFrame(P.current),P.current=null)},[]),q=p.useCallback((g,U)=>{const _=document.getElementById(je);if(!_||!l.current)return;const V=_.getBoundingClientRect(),ee=60,J=12,ce=g-(V.left+Ae),pe=V.right-g;let de=0;ce<ee?de=-J*(1-Math.max(0,ce)/ee):pe<ee&&(de=J*(1-Math.max(0,pe)/ee)),W(),de!==0&&(P.current=requestAnimationFrame(()=>{_.scrollLeft+=de,B(pt(g,U,l.current)),q(g,U)}))},[l,B,W]),te=p.useCallback(g=>{if(S!=="selecting"||!l.current||A.current===null)return;const U=pt(g.clientX,g.clientY,l.current);k.current&&cancelAnimationFrame(k.current),k.current=requestAnimationFrame(()=>B(U)),q(g.clientX,g.clientY)},[S,l,B,q]),M=p.useCallback(g=>{if(S!=="selecting")return;if(W(),!l.current||!m||!Q.current){E("idle"),L(null),H(null),h(null);return}const U=pt(g.clientX,g.clientY,l.current),_=F(m.y);if(!_){E("idle"),L(null),H(null),h(null);return}const V=Math.min(m.x,U.x),ee=Math.max(m.x,U.x),J=O(V),ce=O(ee),pe=I(ce).hour(23).minute(59).second(0).millisecond(0).toDate();if(f&&!f(_.resourceId,J,pe)){E("idle"),L(null),H(null),h(null);return}const de=ne(_.resourceId,J,pe,D),ge=de.length>0,Se={startDate:J,endDate:pe,resourceId:_.resourceId,resourceLabel:_.resourceLabel,zoomLevel:t,hasConflict:ge,conflicts:ge?de:void 0};if(b)w(me=>[...me,Se]),G(!0);else if(o){const me=o(Se),ae=he=>{he!=null&&he.continueMultiSelect&&(y(!0),w([Se]),G(!0))};me instanceof Promise?me.then(ae):ae(me)}E("idle"),L(null),H(null),h(null),Q.current=null,A.current=null},[S,l,m,F,O,f,o,t,b,ne,D,W]),Z=p.useCallback(()=>{if(D.length>0&&s){G(!1);const g=s(D),U=_=>{_!=null&&_.continueMultiSelect?G(!0):(w([]),y(!1),G(!1))};g instanceof Promise?g.then(U):U(g);return}w([]),y(!1),G(!1)},[D,s]),T=p.useCallback(()=>{w([]),y(!1),G(!1)},[]),R=p.useCallback(g=>{w(U=>{const _=U.filter((V,ee)=>ee!==g);return _.length===0&&(y(!1),G(!1)),_})},[]),j=p.useCallback((g,U)=>{w(_=>_.map((V,ee)=>{if(ee!==g)return V;const J={...V,...U},ce=_.filter((de,ge)=>ge!==g),pe=ne(J.resourceId,J.startDate,J.endDate,ce);return{...J,hasConflict:pe.length>0,conflicts:pe.length>0?pe:void 0}}))},[ne]),z=p.useCallback(g=>{g.key==="Escape"&&(S==="selecting"?(W(),E("idle"),L(null),H(null),h(null),Q.current=null,A.current=null):b&&D.length>0&&(w([]),y(!1),G(!1)))},[S,b,D.length,W]);return p.useEffect(()=>{if(S==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",M),document.addEventListener("keydown",z),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",M),document.removeEventListener("keydown",z)}},[S,te,M,z]),p.useEffect(()=>{if(b&&D.length>0)return document.addEventListener("keydown",z),()=>{document.removeEventListener("keydown",z)}},[b,D.length,z]),p.useEffect(()=>()=>{k.current&&(cancelAnimationFrame(k.current),k.current=null),W()},[W]),p.useEffect(()=>{d&&S==="selecting"&&(W(),E("idle"),L(null),H(null),h(null),Q.current=null,A.current=null)},[d,S,W]),{selectionState:S,selectionStart:m,selectionEnd:K,selectionBox:Y,handleGridMouseDown:ie,isEnabled:x,pendingSelections:D,confirmSelections:Z,clearSelections:T,removeSelection:R,updateSelection:j,isMultiSelectActive:b,hasUnconfirmedSelections:$}},di=v.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,ui=v.div`
  position: relative;
`,fi=v.canvas``;v.canvas``;const hi=v.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Tr=v.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,pi=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:a,onEventDrag:l,draggableConfig:d,onDragStateChange:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:x,separatorRowIndices:C=[],subcontractSeparatorRow:S=-1,fadingUnitIds:E},m){const L=p.useRef(!1),{handleScrollNext:K,handleScrollPrev:H,date:Y,isLoading:h,cols:b,startDate:y,suppressNextSlideRef:D,config:w}=He(),$=p.useRef(null),G=p.useRef(null),Q=p.useRef(t),A=p.useRef(Y),k=p.useRef(null),P=p.useRef(null),N=p.useRef(null),O=p.useRef(null),[F,X]=p.useState(!1),ne=Yt(),{dragState:ie,draggedEvent:B,ghostPosition:W,ghostDimensions:q,dropTarget:te,isValidDrop:M,handleDragStart:Z,isDraggable:T,draggingEventId:R,resourceOnly:j}=ci({data:n,baseData:o||n,zoom:r,startDate:y,onEventDrop:a,onEventDrag:l,draggableConfig:d,gridRef:O,separatorRowIndices:C});p.useEffect(()=>{const ue=ie==="dragging"||ie==="potential";X(ue),c&&c(ue)},[ie,c]);const z=p.useRef(!1),g=p.useRef(Y),U=p.useRef(null);p.useEffect(()=>{var Ee;const ue=g.current;if(g.current=Y,!z.current){z.current=!0;return}if(D!=null&&D.current){D.current=!1;return}const re=O.current;if(!(re!=null&&re.animate))return;const le=Y.isAfter(ue)?48:-48;(Ee=U.current)==null||Ee.cancel(),re.style.willChange="transform";const se=re.animate([{transform:`translateX(${le}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),we=()=>{re.style.willChange=""};se.onfinish=we,se.oncancel=we,U.current=se},[Y,D]);const{selectionState:_,selectionBox:V,handleGridMouseDown:ee,pendingSelections:J,confirmSelections:ce,clearSelections:pe,removeSelection:de,updateSelection:ge,isMultiSelectActive:Se,hasUnconfirmedSelections:me}=li({data:n,baseData:o||n,zoom:r,startDate:y,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:x,gridRef:O,isDragging:F,separatorRowIndices:C}),ae=p.useCallback(ue=>{ue.preventDefault()},[]),he=p.useCallback(ue=>{ue.preventDefault()},[]),De=C.length*Pe,Oe=p.useCallback(ue=>{const re=Sn(),le=t*fe+1+De;$r(ue,re,le),Ts(ue,r,t,b,y,ne,C,S)},[b,y,t,r,ne,C,S,De]);return p.useEffect(()=>{if(!$.current)return;const ue=$.current.getContext("2d");if(!ue)return;const re=()=>Oe(ue);return window.addEventListener("resize",re),()=>window.removeEventListener("resize",re)},[Oe]),p.useEffect(()=>{var Ne;const ue=Q.current,re=A.current;if(Q.current=t,A.current=Y,ue===t||!Y.isSame(re,"day")||Dr())return;const le=$.current,se=G.current;if(!le||!se)return;const we=se.getContext("2d");if(!we)return;se.width=le.width,se.height=le.height,se.style.width=le.style.width,se.style.height=le.style.height,we.setTransform(1,0,0,1,0,0),we.clearRect(0,0,se.width,se.height),we.drawImage(le,0,0),(Ne=k.current)==null||Ne.cancel(),se.style.opacity="1";const Ee=se.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});Ee.onfinish=()=>{se.style.opacity="0"},k.current=Ee},[t,Y]),p.useEffect(()=>{const ue=$.current;if(!ue)return;ue.style.letterSpacing="1px";const re=ue.getContext("2d");re&&Oe(re)},[Y,t,r,Oe]),p.useEffect(()=>{if(!P.current)return;const ue=new IntersectionObserver(re=>{re[0].isIntersecting&&!L.current&&(L.current=!0,K(),setTimeout(()=>{L.current=!1},1e3))},{root:document.getElementById(je)});return ue.observe(P.current),()=>{ue.disconnect()}},[K]),p.useEffect(()=>{if(!N.current)return;const ue=new IntersectionObserver(re=>{re[0].isIntersecting&&!L.current&&(L.current=!0,H(),setTimeout(()=>{L.current=!1},1e3))},{root:document.getElementById(je),rootMargin:`0px 0px 0px -${Ae}px`});return ue.observe(N.current),()=>{ue.disconnect()}},[H]),i.jsxs(di,{id:hr,children:[i.jsxs(ui,{ref:ue=>{typeof m=="function"?m(ue):m&&(m.current=ue),O.current=ue},onMouseDown:ee,style:{cursor:u?"crosshair":"default"},children:[i.jsx(Tr,{position:"left",ref:N}),i.jsx(An,{isLoading:h,position:"left"}),i.jsx(fi,{ref:$,onDragStart:ae,onDragOver:he,style:{userSelect:ie==="dragging"?"none":"auto"}}),i.jsx(hi,{ref:G,"aria-hidden":!0}),i.jsx(rd,{zoom:r,startDate:y}),i.jsx(sd,{zoom:r,startDate:y}),i.jsx(ul,{data:n,zoom:r,onTileClick:s,onDragStart:Z,isDraggable:T,draggingEventId:R,separatorRowIndices:C,fadingUnitIds:E,highlightedSegmentId:(w==null?void 0:w.highlightedSegmentId)??null,focusedUnitIds:(w==null?void 0:w.focusedUnitIds)??null,leavingSegmentIds:(w==null?void 0:w.leavingSegmentIds)??null,ghostProject:(w==null?void 0:w.ghostProject)??null}),i.jsx(Tr,{ref:P,position:"right"}),i.jsx(An,{isLoading:h,position:"right"}),(ie==="dragging"||ie==="animating")&&i.jsx(Fl,{draggedEvent:B,ghostPosition:W,ghostDimensions:q,dropTarget:te,isValidDrop:M,dragState:ie,zoom:r,data:n,resourceOnly:j,separatorRowIndices:C}),i.jsx(Hl,{selectionBox:V,isSelecting:_==="selecting"}),Se&&J.length>0&&i.jsx(td,{selections:J,data:n,zoom:r,startDate:y,onRemove:de,onUpdate:ge,separatorRowIndices:C})]}),Se&&me&&J.length>0&&i.jsx(Kl,{selections:J,onConfirm:ce,onClear:pe,onRemove:de})]})}),Ar=e=>{const r=I.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Pr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/ke);t+=o.hours+s,n+=r%ke,n>=ke&&(t++,n-=ke)}),{hours:t,minutes:n}},Or=(e,r)=>{let t=pr;switch(r){case 0:t=Cs;break;case 1:t=pr;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=ke-e.minutes;return a===ke&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},gi=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const u=I(c.startDate).isoWeek(),f=I(c.startDate).isoWeekday(),x=I(c.endDate).isoWeek(),C=I(c.endDate).isoWeekday(),{hours:S,minutes:E}=Ar(c.occupancy);if(n===u){const m=(Ue+1-f)*S,L=(Ue+1-f)*E;return{hours:Math.max(0,m),minutes:L}}else if(n===x){const m=C>Ue?Ue*S:C*S,L=C>Ue?Ue*E:C*E;return{hours:m,minutes:L}}else if(I(r).isBetween(c.startDate,c.endDate))return{hours:Ue*S,minutes:Ue*E};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Pr(o),{free:l,overtime:d}=Or({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:d}},mi=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(u=>{const{hours:f,minutes:x}=Ar(u.occupancy);return o<=(n?7:5)?{hours:f,minutes:x}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Pr(s),{free:d,overtime:c}=Or({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:d,overtime:c}},yi=(e,r)=>{let t=0;e.forEach(l=>{const d=I(l.startDate).hour(),c=I(l.endDate).hour(),u=r.hour(),f=I(l.endDate).minute(),x=I(l.startDate).minute();d<u&&c>u?t+=ke:d===u&&c===u&&x&&f?t+=f?f-x:ke-x:d===u&&c>=u?t+=x?ke-x:ke:c===u&&f&&(t+=f)});const n=Math.floor(t/ke),o=t%ke,s=n||o?0:1,a=n?0:o?ke-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},vi=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?I(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?I(t).isBetween(a.startDate,a.endDate,"hour","[]"):I(a.startDate).isBetween(I(t),I(t).add(6,"days"),"day","[]")||I(t).isBetween(I(a.startDate),I(a.endDate),"day","[]"));switch(n){case 1:return mi(s,t,n,o);case 2:return yi(s,t);default:return gi(s,t,n)}},xi=(e,r,t,n,o,s,a=!1)=>{let l="weeks",d;switch(s){case 0:l="weeks",d=dt;break;case 1:l="days",d=Ce;break;case 2:l="hours",d=$e;break}const c=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),u=I(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),f=Math.ceil(t.y/fe),x=n.findIndex((L,K,H)=>H.slice(0,K+1).reduce((h,b)=>h+b,0)>=f),C=s===2?(c+1)*d:c*d,S=(f-1)*fe+fe,E=vi(o[x],x,u,s,a),m=I(e.startDate).isSame(I(e.endDate),"day");return{coords:{x:C,y:S},mouseCoords:t,resourceIndex:x,disposition:E,reservationData:{startTime:I(e.startDate).format("hh:mm A"),startDate:I(e.startDate).format("MMM D, YYYY"),endTime:I(e.endDate).format("hh:mm A"),endDate:I(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:m,passengers:e.totalPassengers,readiness:e.readiness,subcontractConfirmed:e.subcontractConfirmed}}};function bi(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function wi(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const u of e)!u.isSubcontract&&u.capacity!=null&&t.add(u.capacity);const n=[...t].sort((u,f)=>u-f);if(n.length<2)return r;const o=Math.min(5,n.length),s=bi(n,o),a=[];let l=0;for(const u of s)a.push({min:n[l],max:n[u-1],values:n.slice(l,u)}),l=u;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const d=[],c=new Map;return a.forEach((u,f)=>{const x="__auto_cat_"+f,C=u.min===u.max?u.min+" pax":u.min+"-"+u.max+" pax";d.push({id:x,name:C,minPassengers:u.min,maxPassengers:u.max});for(const S of u.values)c.set(S,x)}),{categories:d,capacityToCategoryId:c}}const Si=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(u)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((d,c)=>{const u={id:e[c+s].id,label:e[c+s].label,data:d,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};a.push(u),c===r.length-s-1&&o.push(a)})),o):(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};a.push(u)}),o.push(a),o)};var Cn={},Ci={get exports(){return Cn},set exports(e){Cn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(Ci);const ki=Cn;var kn={},Mi={get exports(){return kn},set exports(e){kn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Mi);const $i=kn,Di=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=I(t.startDate).startOf("day"),d=I(t.endDate).startOf("day"),c=I(o[a].startDate).startOf("day"),u=I(o[a].endDate).startOf("day");if(l.isBetween(c,u,null,"[]")||d.isBetween(c,u,null,"[]")||l.isBefore(c,"minute")&&d.isAfter(u,"minute")||l.isAfter(c,"minute")&&d.isBefore(u,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};I.extend(ki),I.extend($i);const Ir=new WeakMap,Ei=e=>{const r=Ir.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=I(o.startDate),l=I(s.startDate),d=a.startOf("day").diff(l.startOf("day"),"day");return d!==0?d:a.diff(l)}),n=Di(t);return Ir.set(e,n),n},_i=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Ei(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Ti=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Ai=e=>{const{recordsThreshold:r}=He(),[t,n]=p.useState(0),[o,s]=p.useState(0),a=p.useRef(null);p.useEffect(()=>{a.current=document.getElementById(je)},[]);const{projectsPerPerson:l,rowsPerPerson:d}=p.useMemo(()=>_i(e),[e]),c=p.useMemo(()=>Si(e,l,d,r),[e,l,r,d]),u=p.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(m=>m+c[Math.max(o,0)].length),s(m=>Math.min(m+1,c.length-1)),window.scroll({top:0}))},[o,c]),f=p.useCallback(()=>{c[o].length&&(n(m=>Math.max(m-c[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,c]),x=p.useCallback(()=>{n(0),s(0)},[]),C=t+c[o].length,S=p.useMemo(()=>d.slice(t,C),[C,d,t]),E=p.useMemo(()=>l.slice(t,C),[C,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:E,rowsPerItem:S,totalRowsPerPage:Ti(c[o]),next:u,previous:f,reset:x}};var Mn={},Pi={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(Pi);const Oi=Mn;var $n={},Ii={get exports(){return $n},set exports(e){$n=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Me,function(t){function n(x){return x&&typeof x=="object"&&"default"in x?x:{default:x}}var o=n(t);function s(x){return x%10<5&&x%10>1&&~~(x/10)%10!=1}function a(x,C,S){var E=x+" ";switch(S){case"m":return C?"minuta":"minutę";case"mm":return E+(s(x)?"minuty":"minut");case"h":return C?"godzina":"godzinę";case"hh":return E+(s(x)?"godziny":"godzin");case"MM":return E+(s(x)?"miesiące":"miesięcy");case"yy":return E+(s(x)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,u=function(x,C){return c.test(C)?l[x.month()]:d[x.month()]};u.s=d,u.f=l;var f={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:u,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(x){return x+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(f,null,!0),f})})(Ii);const Yi=$n;var Dn={},Li={get exports(){return Dn},set exports(e){Dn=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Me,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(d,c,u){var f=s[u];return Array.isArray(f)&&(f=f[c?0:1]),f.replace("%d",d)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Li);const Ni=Dn;var En={},Fi={get exports(){return En},set exports(e){En=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Me,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(u,f){return l.test(f)?s[u.month()]:a[u.month()]};d.s=a,d.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(u){return u+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Fi);const zi=En;var _n={},Bi={get exports(){return _n},set exports(e){_n=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Me,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(Bi);const Hi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Oi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Yi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"One Day",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:_n},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:zi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:Ni}];class Wi{constructor(){go(this,"locales",Hi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Wt=new Wi,Yr=p.createContext({localesData:Wt.getLocales(),currentLocale:Wt.getLocales()[0],setCurrentLocale:()=>{}}),ji=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Wt.getLocales(),a=p.useCallback(()=>{const f=s.find(x=>x.id===n);return typeof(f==null?void 0:f.dayjsTranslations)=="object"&&I.locale(f.dayjsTranslations),f||s[0]},[n,s]),[l,d]=p.useState(a()),c=f=>{localStorage.setItem("locale",f.translateCode),d(f)};p.useEffect(()=>{t==null||t.forEach(f=>{s.find(C=>C.id===f.id)||Wt.addLocales(f)})},[s,t]),p.useEffect(()=>{const f=localStorage.getItem("locale"),x=r??f??"en";localStorage.setItem("locale",x),o(x),d(a())},[a,r]);const{Provider:u}=Yr;return i.jsx(u,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Ke=()=>p.useContext(Yr).currentLocale.lang,Zi=e=>oe.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},oe.createElement("defs",null,oe.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),oe.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},oe.createElement("stop",{offset:.47,stopColor:"#ccc"}),oe.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),oe.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),oe.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),oe.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),oe.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),oe.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),oe.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),oe.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),oe.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),oe.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),oe.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Vi=v.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Gi=v.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Xi=({onTileClick:e})=>{const{feelingEmpty:r}=Ke();return i.jsxs(Vi,{onClick:e,children:[i.jsx(Zi,{}),i.jsx(Gi,{children:r})]})},Ui=v.div`
  position: relative;
  display: flex;
`,Ki=v.div`
  position: relative;
  margin-left: ${Ae};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Ji=v.div`
  width: calc(${({width:e})=>e}px - ${Ae}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ae}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,qi=new Set,Qi={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:kt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Ri(e,r){const t=r?[...r].sort((l,d)=>l.maxPassengers-d.maxPassengers):[],n=[];for(const l of t){const d=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);d.length>0&&n.push({type:"category",category:l,items:d})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const a=e.filter(l=>l.isSubcontract);return a.length>0&&n.push({type:"subcontract",items:a}),n}const ea=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:x})=>{const[C,S]=p.useState(Qi),[E,m]=p.useState(e),[L,K]=p.useState(!1),[H,Y]=p.useState(!1),[h,b]=p.useState(""),[y,D]=p.useState(new Set),[w,$]=p.useState(new Set),G=p.useRef([]);p.useEffect(()=>()=>G.current.forEach(clearTimeout),[]);const{zoom:Q,startDate:A,isLoading:k,config:{includeTakenHoursOnWeekendsInDayView:P,showTooltip:N,showThemeToggle:O}}=He(),F=p.useRef(null),X=p.useRef(null),[ne,ie]=p.useState(124),{page:B,projectsPerPerson:W,rowsPerItem:q,currentPageNum:te,pagesAmount:M,next:Z,previous:T,reset:R}=Ai(E),{effectiveCategories:j,effectivePage:z}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:B};const re=wi(B);if(re.categories.length===0)return{effectiveCategories:void 0,effectivePage:B};const le=B.map(se=>{if(se.isSubcontract||se.capacity==null)return se;const we=re.capacityToCategoryId.get(se.capacity);return we?{...se,categoryId:we}:se});return{effectiveCategories:re.categories,effectivePage:le}},[t,B]),g=p.useCallback(re=>{if(y.has(re)){D(se=>{const we=new Set(se);return we.delete(re),we});return}if(Dr()){D(se=>new Set(se).add(re));return}$(se=>new Set(se).add(re));const le=setTimeout(()=>{D(se=>new Set(se).add(re)),$(se=>{const we=new Set(se);return we.delete(re),we})},190);G.current.push(le)},[y]),U=p.useMemo(()=>{const re=[],le=j?[...j].sort((se,we)=>se.maxPassengers-we.maxPassengers):[];for(const se of le)z.some(we=>!we.isSubcontract&&we.categoryId===se.id)&&re.push(se.id);return z.some(se=>se.isSubcontract)&&re.push("__subcontract__"),re},[j,z]),_=p.useCallback(()=>{D(new Set)},[]),V=p.useCallback(()=>{D(new Set(U))},[U]),ee=p.useMemo(()=>{if(w.size===0)return qi;const re=new Set;for(const le of z){const se=le.isSubcontract?"__subcontract__":le.categoryId;se&&w.has(se)&&re.add(le.id)}return re},[w,z]),{visiblePage:J,visibleRowsPerItem:ce,visibleTotalRows:pe,visibleProjectsPerPerson:de,separatorRowIndices:ge,subcontractSeparatorRow:Se}=p.useMemo(()=>{const re=Ri(z,j),le=((j==null?void 0:j.length)??0)>0,se=new Map;B.forEach((_e,yt)=>se.set(_e.id,yt));const we=[],Ee=[],Ne=[],Ve=[];let ot=0,Zt=-1;for(const _e of re)if(_e.type==="subcontract"||_e.type==="category"&&le){const vt=_e.type==="subcontract"?"__subcontract__":_e.category.id,xt=y.has(vt);if(Ve.push(ot),_e.type==="subcontract"&&(Zt=ot),!xt)for(const st of _e.items){const Vt=se.get(st.id)??0,Gt=q[Vt];we.push(st),Ee.push(Gt),Ne.push(W[Vt]),ot+=Gt}}else for(const vt of _e.items){const xt=se.get(vt.id)??0,st=q[xt];we.push(vt),Ee.push(st),Ne.push(W[xt]),ot+=st}const Je=Ee.reduce((_e,yt)=>_e+yt,0);return{visiblePage:we,visibleRowsPerItem:Ee,visibleTotalRows:Je,visibleProjectsPerPerson:Ne,separatorRowIndices:Ve,subcontractSeparatorRow:Zt}},[z,j,B,y,q,W]),me=p.useRef(wn((re,le,se,we,Ee,Ne)=>{if(!F.current)return;const{tile:Ve,segmentId:ot}=De(re);if(!ot||!Ve){K(!1);return}const Zt=he(ot,le),Je=F.current.getBoundingClientRect(),_e=Ve.getBoundingClientRect(),yt={x:re.clientX-Je.left,y:re.clientY-Je.top},vt={x:re.clientX-Je.left,y:re.clientY-Je.top},xt={x:_e.left-Je.left,y:_e.top-Je.top,width:_e.width,height:_e.height},{coords:{x:st,y:Vt},resourceIndex:Gt,disposition:id,reservationData:ad}=xi(Zt,se,yt,we,Ee,Ne,P);S({coords:{x:st,y:Vt},mouseCoords:vt,resourceIndex:Gt,disposition:id,reservationData:ad,tileBounds:xt}),K(!0)},4)),ae=p.useRef(wn((re,le)=>{R(),m(re.map(se=>({...se,data:se.data.filter(we=>{const{title:Ee,description:Ne,subtitle:Ve}=we;return(Ee==null?void 0:Ee.toLowerCase().includes(le.toLowerCase()))||(Ve==null?void 0:Ve.toLowerCase().includes(le.toLowerCase()))||(Ne==null?void 0:Ne.toLowerCase().includes(le.toLowerCase()))})})).filter(se=>se.data.length>0))},500)),he=(re,le)=>{if(re)return le.flatMap(se=>se.data).find(se=>se.segmentId===re)},De=re=>{if(!re.target)return{tile:null,segmentId:null};const le=re.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},Oe=re=>{const le=re.target.value;b(le),ae.current.cancel(),le?ae.current(e,le):(R(),m(e))},ue=p.useCallback(()=>{me.current.cancel(),K(!1)},[]);return p.useEffect(()=>{const re=se=>me.current(se,e,A,ce,de,Q),le=F.current;if(le)return le.addEventListener("mousemove",re),le.addEventListener("mouseleave",ue),()=>{le.removeEventListener("mousemove",re),le.removeEventListener("mouseleave",ue)}},[me,ue,de,ce,A,Q,e]),p.useEffect(()=>{h?(ae.current.cancel(),ae.current(e,h)):m(e)},[e,h]),p.useLayoutEffect(()=>{const re=X.current;if(!re)return;const le=()=>ie(re.offsetHeight);le();const se=new ResizeObserver(le);return se.observe(re),()=>se.disconnect()},[]),i.jsxs(Ui,{children:[i.jsx(cc,{headerHeight:ne,data:z,categories:j,pageNum:te,pagesAmount:M,rows:q,onLoadNext:Z,onLoadPrevious:T,searchInputValue:h,onSearchInputChange:Oe,onItemClick:o,collapsedGroups:y,fadingGroups:w,onToggleGroup:g,allGroupIds:U,onExpandAll:_,onCollapseAll:V}),i.jsxs(Ki,{children:[i.jsx(Nc,{ref:X,zoom:Q,topBarWidth:a,showThemeToggle:O,toggleTheme:s}),e.length?i.jsx(pi,{data:J,baseData:r||e,zoom:Q,rows:pe,ref:F,onTileClick:n,onEventDrop:l,onEventDrag:d,draggableConfig:c,onDragStateChange:Y,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:x,separatorRowIndices:ge,subcontractSeparatorRow:Se,fadingUnitIds:ee}):i.jsx(Ji,{width:a,children:k?i.jsx(An,{isLoading:k,position:"left"}):i.jsx(Xi,{})}),N&&i.jsx(Dl,{tooltipData:C,visible:L&&!H})]})]})},ta=v.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Ae+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.mode==="dark"?e.colors.primary:"#E1ECE6"};
`,Lr=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,na=v.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,ra=v.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Nr=v.button`
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
`,oa=v.button`
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
`,sa=v.div`
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
`,Fr=v.button`
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
`,ia=v.label`
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
`,aa=v.button`
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
`,ca=v.span`
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
`,gt=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),la=()=>{var r,t;const e=document.getElementById(vr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},da=()=>{const{config:e,zoom:r,handleGoNext:t,handleGoPrev:n,handleGoToday:o,setZoom:s,goToDate:a,toggleDisplayActiveUnits:l,toolbarActions:d}=He(),{filterButtonState:c=-1}=e,u=()=>{var f;(f=document.querySelector(`#${je} input[placeholder]`))==null||f.focus()};return i.jsxs(ta,{width:0,children:[i.jsxs(Lr,{$at:"start",children:[i.jsxs(ra,{children:[i.jsx(Nr,{onClick:n,"aria-label":"Anterior",children:i.jsx(gt,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(oa,{onClick:o,children:"Hoy"}),i.jsx(Nr,{onClick:t,"aria-label":"Siguiente",children:i.jsx(gt,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),e.showViewSwitcher!==!1&&i.jsxs(i.Fragment,{children:[i.jsx(na,{}),i.jsxs(sa,{children:[i.jsx("button",{className:r===2?"on":"",onClick:()=>s(2),children:"Día"}),i.jsx("button",{className:r===0?"on":"",onClick:()=>s(0),children:"Semana"}),i.jsx("button",{className:r===1?"on":"",onClick:()=>s(1),children:"Mes"})]})]}),e.showJumpToDate!==!1&&i.jsxs(ia,{children:[i.jsxs(gt,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onChange:f=>f.target.value&&a(f.target.value)})]}),i.jsxs(aa,{onClick:u,children:[i.jsxs(gt,{children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",i.jsx("span",{className:"k",children:"⌘K"})]})]}),i.jsxs(Lr,{$at:"end",children:[e.showFilterButton!==!1&&c>=0&&i.jsxs(Fr,{$primary:!!c,onClick:l,children:[i.jsx(gt,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&i.jsx(ca,{children:c})]}),e.showFullscreenButton!==!1&&i.jsxs(Fr,{onClick:la,children:[i.jsx(gt,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),d]})]})},ua={add:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>oe.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),oe.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Tn=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Yt(),a=ua[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},fa=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];v.button`
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
  ${({theme:e,variant:r,disabled:t})=>fa(e,r,t)}
`;const ha=v.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${yr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ie};
`,pa=v.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,ga=v.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,ma=v.div`
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
`,ya=v.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,va=v.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,xa=v.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`,ba=v.div`
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
`,wa=v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,Sa=v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,Ca=v.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,ka=v.div`
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
`,zr="#cdd8d2",Br=[178,216,195],Ma=[15,125,102],$a=e=>{const r=Math.min(1,Math.max(0,e)),t=n=>Math.round(Br[n]+(Ma[n]-Br[n])*r);return`rgb(${t(0)}, ${t(1)}, ${t(2)})`},Da=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=He(),s=Ke(),a=p.useRef(null),[l,d]=p.useState(null),c=p.useMemo(()=>Array.from({length:12},(w,$)=>I().month($).format("MMM").toUpperCase()),[s]),u=p.useMemo(()=>I().startOf("day"),[]),{domainStart:f,domainEnd:x,domainDays:C}=p.useMemo(()=>{const w=u.subtract(3,"month").startOf("month"),$=u.add(9,"month").endOf("month");return{domainStart:w,domainEnd:$,domainDays:$.diff(w,"day")+1}},[u]),S=w=>w.diff(f,"day")/C*100,E=w=>Math.min(100,Math.max(0,w)),m=p.useMemo(()=>{const w=[];let $=f.startOf("month");for(;$.isBefore(x);)w.push($),$=$.add(1,"month");return w},[f,x]),L=o==null?void 0:o.yearCounts,K=p.useMemo(()=>{const w=Math.ceil(C/7),$=new Array(w).fill(0),G=F=>{const X=F.diff(f,"day");return X<0||X>=C?-1:Math.floor(X/7)};if(L&&L.length)for(const F of L){const X=G(I(F.date));X>=0&&($[X]+=F.count)}else for(const F of t??[])for(const X of F.data??[]){const ne=G(I(X.startDate));ne>=0&&($[ne]+=1)}const Q=Math.max(0,...$);if(Q<=0)return $.map(()=>({h:0,color:zr}));const A=$.filter(F=>F>0).sort((F,X)=>F-X),k=A.length>>1,P=A.length%2?A[k]:(A[k-1]+A[k])/2,N=P>0?Q/P:1,O=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,N)))));return $.map(F=>F>0?{h:Math.min(100,100*Math.pow(F/Q,O)),color:$a(F/Q)}:{h:0,color:zr})},[t,L,f,C]),H=S(u),Y=w=>{const{startDate:$,endDate:G}=Ht(w,r),Q=E(S($));return{left:Q,width:E(S(G))-Q,startDate:$,endDate:G}},h=Y(e),b=l?Y(l.d):null,y=w=>`${w.date()} ${c[w.month()]}`,D=w=>{var Q;const $=(Q=a.current)==null?void 0:Q.getBoundingClientRect();if(!$)return null;const G=Math.min(1,Math.max(0,(w-$.left)/$.width));return{f:G,d:f.add(Math.round(G*(C-1)),"day")}};return i.jsxs(ha,{children:[i.jsxs(pa,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(ga,{ref:a,onClick:w=>{const $=D(w.clientX);$&&n($.d.toDate())},onMouseMove:w=>{const $=D(w.clientX);$&&d({left:$.f*100,d:$.d})},onMouseLeave:()=>d(null),children:[i.jsx(ma,{children:m.map((w,$)=>i.jsx("span",{style:{left:`${S(w)}%`},children:$===0||w.month()===0?`${c[w.month()]} ${w.format("YY")}`:c[w.month()]},$))}),m.map((w,$)=>$===0?null:i.jsx(ya,{style:{left:`${S(w)}%`}},$)),i.jsx(va,{children:K.map((w,$)=>i.jsx(xa,{style:{height:`${w.h}%`,background:w.color}},$))}),i.jsx(wa,{style:{left:`${h.left}%`,width:`${h.width}%`}}),i.jsx(ba,{style:{left:`${E(H)}%`},children:i.jsx("span",{children:"HOY"})}),l&&b&&i.jsxs(i.Fragment,{children:[i.jsx(Sa,{style:{left:`${b.left}%`,width:`${b.width}%`}}),i.jsx(Ca,{style:{left:`${l.left}%`}}),i.jsx(ka,{style:{left:`${l.left}%`},children:`Ir a ${y(l.d)}`})]})]})]})},Ea=v.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,_a=v.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?yr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Ta=v.div`
  position: relative;
`,Aa=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,schedulerRef:u,onTimeRangeSelect:f,onMultiTimeRangeSelect:x,clickToAddConfig:C})=>{const{goToDate:S,handleGoToday:E,zoomIn:m,zoomOut:L,zoom:K}=He();return p.useImperativeHandle(u,()=>({goToDate:S,goToToday:E,setZoom:H=>{if(!kr(H))return;const Y=H-K;if(Y>0)for(let h=0;h<Y;h++)m();else for(let h=0;h<Math.abs(Y);h++)L()}}),[S,E,K,m,L]),i.jsx(ea,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:f,onMultiTimeRangeSelect:x,clickToAddConfig:C})},Pa=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,onItemClick:f,isLoading:x,onEventDrop:C,onEventDrag:S,draggableConfig:E,onTimeRangeSelect:m,onMultiTimeRangeSelect:L,clickToAddConfig:K},H){var N;const Y=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),h=p.useRef(null),b=p.useRef(null),[y,D]=p.useState((N=h.current)==null?void 0:N.clientWidth),w=p.useMemo(()=>I(s),[s]),[$,G]=p.useState(Y.defaultTheme??"light"),Q=()=>{G($==="light"?"dark":"light")},A=$==="light"?vs:xs,k=Y.theme?Y.theme[A.mode]:{},P={...A,colors:{...A.colors,...k}};return p.useImperativeHandle(H,()=>({goToDate:O=>{var F;return(F=b.current)==null?void 0:F.goToDate(O)},goToToday:()=>{var O;return(O=b.current)==null?void 0:O.goToToday()},setZoom:O=>{var F;return(F=b.current)==null?void 0:F.setZoom(O)}}),[]),p.useLayoutEffect(()=>{const O=()=>{h.current&&D(h.current.clientWidth)};O(),window.addEventListener("resize",O);let F;const X=h.current;return X&&typeof ResizeObserver<"u"&&(F=new ResizeObserver(O),F.observe(X)),()=>{window.removeEventListener("resize",O),F==null||F.disconnect()}},[]),i.jsxs(i.Fragment,{children:[i.jsx(ys,{}),i.jsx(hs,{theme:P,children:i.jsx(ji,{lang:Y.lang,translations:Y.translations,children:i.jsx(ii,{data:r,isLoading:!!x,config:Y,onRangeChange:a,defaultStartDate:w,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,children:i.jsxs(Ea,{id:vr,children:[i.jsx(_a,{showScroll:!!r.length,$footer:Y.showOverview!==!1&&!!r.length,id:je,ref:h,children:i.jsx(Ta,{children:i.jsx(Aa,{data:r,baseData:n,categories:t,onTileClick:l,topBarWidth:y??0,onItemClick:f,toggleTheme:Q,onEventDrop:C,onEventDrag:S,draggableConfig:E,schedulerRef:b,onTimeRangeSelect:m,onMultiTimeRangeSelect:L,clickToAddConfig:K})})}),Y.showOverview!==!1&&!!r.length&&i.jsx(Da,{})]})})})})]})}),Oa=v.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,Ia=v.button`
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
`,Ya=v.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,La=v.p`
  ${lt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Hr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=Ke(),d=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(Oa,{intent:e,children:i.jsxs(Ia,{onClick:r,isVisible:n,children:[t&&i.jsx(Ya,{children:t}),i.jsx(La,{children:d})]})})},Na=v.div`
  min-width: ${Ae+"px"};
  max-width: ${Ae+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Fa=v.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({$height:e})=>e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ae}px;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,za=v.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Ba=v.input`
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
`,Ha=v.div`
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
`,Wa=ze`
  from { opacity: 1; }
  to { opacity: 0; }
`,Wr=v.div`
  ${({$fading:e})=>e&&Re`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Wa} 180ms ease forwards;
      }
    `}
`,ja=v.button`
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
`,Za=ze`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,Va=v.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${fe}px;
  height: calc(${fe}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder+"33":e.colors.border};
  border-left: 3px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder:"transparent"};
  background-color: ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBg:"transparent"};
  /* Scope the transition to paint-only props. It was transition:0.5s ease (= transition:all), which animated the row
     height (a LAYOUT property) for 500ms on every add/remove/collapse — layout thrash that made rowIn hitch. */
  transition: background-color 0.15s ease, border-color 0.15s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Za} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,Ga=v.div`
  display: flex;
  align-items: center;
`,Xa=v.div`
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
`,Ua=v.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Ka=v.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,jr=v.p`
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
`,Ja=v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`,qa=v.span`
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
`,Qa=v.span`
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
`,Ra=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),ec=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[i.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),i.jsx("path",{d:"M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z"}),i.jsx("circle",{cx:"16.8",cy:"8.6",r:"2.5"}),i.jsx("path",{d:"M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8"})]}),tc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),nc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),rc=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(Va,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(Ga,{children:[i.jsx(Xa,{$provider:o,children:Ra(r.icon)?i.jsx(Ua,{src:r.icon,alt:""}):o?i.jsx(nc,{}):i.jsx(tc,{})}),i.jsxs(Ka,{children:[i.jsx(jr,{isMain:!0,children:r.title}),r.capacity!=null||r.plate?i.jsxs(Ja,{children:[r.capacity!=null&&i.jsxs(qa,{title:`${r.capacity} pasajeros`,children:[i.jsx(ec,{}),r.capacity]}),r.plate&&i.jsx(Qa,{title:r.plate,children:r.plate})]}):r.subtitle&&i.jsx(jr,{children:r.subtitle})]})]})}),oc=v.div`
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
`,sc=v.span`
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
`,ic=v.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  flex-shrink: 0;
`,ac=v.div`
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
`,Zr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>i.jsxs(oc,{$variant:o,onClick:n,title:e,children:[i.jsx(ac,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(sc,{$variant:o,children:e}),i.jsx(ic,{$variant:o,children:r})]}),cc=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:d,onSearchInputChange:c,onItemClick:u,collapsedGroups:f,fadingGroups:x,onToggleGroup:C,allGroupIds:S,onExpandAll:E,onCollapseAll:m})=>{const[L,K]=p.useState(!1),H=Ke(),Y=()=>K(k=>!k),h=r?[...r].sort((k,P)=>k.maxPassengers-P.maxPassengers):[],b=h.length>0,y=S.length>0,D=y&&f.size===S.length;y&&f.size;const w=e.filter(k=>k.isSubcontract),$=H.subcontract??"Subcontract",G=k=>{const P=e.indexOf(k);return i.jsx(rc,{id:k.id,item:k.label,rows:n[P],onItemClick:u,isSubcontract:k.isSubcontract},k.id)},Q=k=>{const P=e.filter(X=>!X.isSubcontract&&X.categoryId===k.id);if(P.length===0)return null;const N=f.has(k.id),O=x.has(k.id),F=k.name;return i.jsxs("div",{children:[i.jsx(Zr,{label:F,count:P.length,isCollapsed:N||O,onToggle:()=>C(k.id),variant:"category"}),!N&&i.jsx(Wr,{$fading:O,children:P.map(G)})]},k.id)},A=e.filter(k=>!k.isSubcontract&&(!k.categoryId||!b));return i.jsxs(Na,{children:[i.jsxs(Fa,{$height:t,children:[i.jsxs(za,{children:[i.jsxs(Ha,{isFocused:L,children:[i.jsx(Ba,{placeholder:H.search,value:d,onChange:c,onFocus:Y,onBlur:Y}),i.jsx(Tn,{iconName:"search"})]}),y&&i.jsx(ja,{title:D?"Expand all":"Collapse all",onClick:D?E:m,$allCollapsed:D,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:D?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(Hr,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(Tn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),b?h.map(Q):A.map(G),b&&A.length>0&&A.map(G),w.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Zr,{label:$,count:w.length,isCollapsed:f.has("__subcontract__")||x.has("__subcontract__"),onToggle:()=>C("__subcontract__"),variant:"subcontract"}),!f.has("__subcontract__")&&i.jsx(Wr,{$fading:x.has("__subcontract__"),children:w.map(G)})]}),i.jsx(Hr,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(Tn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},lc=v.div`
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
`,dc=ze`
from{
    left: -100%;
}
to{
    left: 100%;
}`,uc=v.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${dc} 1s infinite;
`,An=({isLoading:e,position:r})=>e?i.jsx(lc,{position:r,children:i.jsx(uc,{})}):null,Ze=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:d,font:c,isBottomRow:u,fillStyle:f,topText:x,bottomText:C,strokeStyle:S,labelBetweenCells:E}=e;t.beginPath();const m=S??(r.mode==="dark"?r.colors.border:"#E4EAE7");if(t.strokeStyle=m,t.setLineDash([]),d&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),E?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):(t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke()),t.font=c;const L=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.mode==="dark"?r.colors.textPrimary:"#183D3D",t.fillText(d,L,l)}if(u&&f&&x&&C){t.fillStyle=f,t.fillRect(n,o,s,a),t.beginPath(),t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke(),t.font=x.font;const L=n+s/2-t.measureText(x.label).width/2;t.fillStyle=x.color,t.fillText(x.label,L,x.y),t.font=C.font;const K=n+s/2-t.measureText(C.label).width/2;t.fillStyle=C.color,t.fillText(C.label,K,C.y)}},fc=(e,r,t,n,o=nt)=>{const s=Be+o,a=s+13,l=s+27;let d=0;for(let c=0;c<r;c++){const u=wr(I(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"days")),f=u.isCurrentDay;if(Ze({ctx:e,x:d,y:s,width:Ce,height:rt,isBottomRow:!0,fillStyle:f?n.colors.currentDay:n.colors.gridBackground,topText:{y:a,label:f?"":u.dayName.replace(/\./g,"").toUpperCase(),font:`600 10px ${Ie}`,color:n.mode==="dark"?n.colors.placeholder:"#74897F"},bottomText:{y:l,label:`${u.dayOfMonth}`,font:f?`700 12px ${Ie}`:`700 13px ${Ie}`,color:f?n.colors.today:n.mode==="dark"?n.colors.textPrimary:"#183D3D"}},n),f){const S=d+Ce/2,E=a-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(S-30/2,E,30,13,5):e.rect(S-30/2,E,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ie}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",S,E+13/2+.5),e.restore()}u.dayOfMonth===1&&(e.save(),e.strokeStyle=n.mode==="dark"?n.colors.today:"#5C8374",e.setLineDash([]),e.beginPath(),e.moveTo(d+.5,0),e.lineTo(d+.5,s+rt),e.stroke(),e.restore()),d+=Ce}},hc=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Ye;const s=Be;let l=t.month;for(let d=0;d<r;d++){l>=ln&&(l=0);const c=br(t,d)*Ye;Ze({ctx:e,x:o,y:s,width:c,height:nt,textYPos:gr,label:I().month(l).format("MMMM").toUpperCase(),font:Xe.bottomRow.number},n),o+=c,l++}},pc=(e,r,t)=>{let o=0,s=0,a=I(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month();o=-r.dayOfMonth*Ce+Ce;for(let l=0;l<ln;l++)a>ln-1&&(a=0),s=I(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(l,"months").daysInMonth()*Ce,Ze({ctx:e,x:o,y:0,width:s,height:Be,textYPos:dn,label:I(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${I(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()}`,font:`800 12px ${Ie}`},t),o+=s,a++},gc=(e,r,t,n)=>{const o=7*Ce,s=Be,a=e.canvas.width/o+o,l=r.weekOfYear;let d=0;for(let c=0;c<a;c++){const u=I(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let f=(l+c)%fr;f<=0&&(f+=fr),u!==1&&c===0&&(d=-u*Ce+Ce),Ze({ctx:e,x:d,y:s,width:o,height:nt,textYPos:gr,label:`${t.toUpperCase()} ${f}`,font:Xe.middleRow},n),d+=o}},mc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},yc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},vc=(e,r,t,n,o)=>{const s=Lt-rt/1.6,a=Lt-rt/4.5,l=Be+nt;let d=0;for(let c=0;c<r;c++){const u=I(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),f=u.isSame(I(),"week");Ze({ctx:e,x:d,y:l,width:dt,height:rt,isBottomRow:!0,fillStyle:f?o.colors.today+"26":mc({isCurrent:f,variant:"yearView"},o),topText:{y:s,label:u.isoWeek().toString(),font:f?`700 14px ${Ie}`:Xe.bottomRow.name,color:f?o.colors.today:yc({isCurrent:f},o)},bottomText:{y:a,label:n.toUpperCase(),font:Xe.middleRow,color:o.colors.placeholder}},o),d+=dt}},xc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,d=0,c=(xr(s)-t+1)*Ye,u=0;for(;l+u<=a;)d>0&&(c=xr(s+d)*Ye),u+c>a&&d>0&&(c=Math.ceil((a-u)/Ye)*Ye),Ze({ctx:e,x:l,y:0,width:c,height:Be,textYPos:dn,label:(s+d).toString(),font:Xe.topRow},n),l+=c,u+=c,d++},bc=(e,r,t,n)=>{const o=Math.floor(r/Nt)+2,s=Nt*$e;let d=-I(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*$e+.5*$e;for(let c=0;c<o;c++){const u=I(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Ze({ctx:e,x:d,y:ut,width:s,height:Ct,textYPos:ut+Ct/2+2,label:u,font:Xe.bottomRow.number},n),d+=s}},wc=(e,r,t,n)=>{const o=Math.ceil(r/Nt),s=I(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),d=a.add(1,"day").month(),c=l===d?1:2;let u=.5*$e;for(let f=0;f<c;f++){const x=I(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),S=I(`${t.year}-${t.month+f+1}-01T:23:59:59`).endOf("month"),E=S.format("MMMM").toUpperCase(),m=S.diff(x,"hour")+1,L=f===0?m*$e:r*$e;Ze({ctx:e,x:u,y:0,width:L,height:ut,textYPos:dn,label:E,font:Xe.topRow},n),u+=L}},Sc=(e,r,t,n)=>{let o=0;const s=ut+Ct,a=I(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=$e;for(let d=0;d<r;d++){const c=a.add(d,"hours").format("h:00a").toUpperCase();Ze({ctx:e,x:o,y:s,width:l,height:cn,label:c,font:Xe.bottomRow.hoursInDay,textYPos:ut+Ct+cn/2+2,labelBetweenCells:!0},n),o+=$e}},Cc=(e,r,t,n,o,s,a,l=!0)=>{switch(r){case 0:xc(e,n,s,a),hc(e,t,n,a),vc(e,t,n,o,a);break;case 1:pc(e,n,a),l&&gc(e,n,o,a),fc(e,t,n,a,l?nt:0);break;case 2:wc(e,t,n,a),bc(e,t,n,a),Sc(e,t,n,a);break}},kc=v.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,Mc=v.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,$c=v.div`
  height: ${({$height:e})=>e??Lt}px;
  display: block;
`,Dc=v.canvas``,Ec={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},Le=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Ec[e]}),_c=v.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Ae+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Vr=v.span`
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
`,jt=v.span`
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
`,Tc=v.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,Ac=v.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,Pc=v.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,Oc=v.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,Ic=v.span`
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
`,Yc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Lc=()=>i.jsxs(_c,{children:[i.jsx(Vr,{children:"Leyenda"}),i.jsxs(jt,{children:[i.jsx(Le,{name:"transfer"})," Transfer"]}),i.jsxs(jt,{children:[i.jsx(Le,{name:"sun"})," Gira 1 día"]}),i.jsxs(jt,{children:[i.jsx(Le,{name:"tour"})," Gira multidía"]}),i.jsxs(jt,{children:[i.jsx(Tc,{children:"SUB"})," Subcontrato"]}),i.jsx(Ac,{}),i.jsxs(Vr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),Yc.map(e=>i.jsxs(Pc,{children:[i.jsx(Oc,{style:{background:e.stripe}}),i.jsx(Ic,{style:{color:e.color},children:i.jsx(Le,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),Nc=p.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=Ke(),{date:l,cols:d,dayOfYear:c,startDate:u,config:f}=He(),x=p.useRef(null),C=Yt(),S=f.showWeekRow!==!1,E=r===2?bs:r===1&&!S?Be+rt:Lt,m=p.useCallback(L=>{const K=Sn(),H=E+1;$r(L,K,H),Cc(L,r,d,u,a,c,C,S)},[d,c,u,a,r,C,S,E]);return p.useEffect(()=>{if(!x.current)return;const L=x.current.getContext("2d");if(!L)return;const K=()=>m(L);return window.addEventListener("resize",K),()=>window.removeEventListener("resize",K)},[m]),p.useEffect(()=>{const L=x.current;if(!L)return;L.style.letterSpacing="1px";const K=L.getContext("2d");K&&m(K)},[l,r,m]),i.jsxs(kc,{ref:s,children:[(f.showTopbar!==!1||f.showLegend!==!1)&&i.jsxs(Mc,{$width:t,children:[f.showTopbar!==!1&&i.jsx(da,{width:t,showThemeToggle:n,toggleTheme:o}),f.showLegend!==!1&&i.jsx(Lc,{})]}),i.jsx($c,{$height:E,id:ws,children:i.jsx(Dc,{ref:x})})]})}),Fc=(e,r,t)=>{let n;switch(t){case 0:n=Ye;break;case 2:n=$e;break;default:n=Ce}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),d=r.endDate.startOf("day"),c=()=>{let u;switch(t){case 2:u=(e.startDate.diff(r.startDate,"minute")/ke+1)*n-n/2;break;default:u=s.diff(l,"day")*n}return Math.max(0,u)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(e.startDate,"minute")/ke*n,50);break;default:u=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(r.startDate,"minute")/ke*n+.5*n,50);break;default:u=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(e.startDate,"minute")/ke*n,50);break;default:u=Math.max(d.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(r.startDate,"minute")/ke*n,50);break;default:u=Math.max(d.diff(l,"day")*n+n,50)}return{x:c(),width:u}}return{x:c(),width:50}},zc=(e,r,t,n,o,s)=>{const a=e*fe+Ss,l=r.hour(),d=t.hour();let c,u,f,x;switch(s){case 2:{c=I(n),u=I(o),f=I(r).hour(l).minute(0),x=I(t).hour(d).minute(0);break}default:{c=I(n).hour(0).minute(0),u=I(o).hour(23).minute(59),f=r,x=t;break}}return{...Fc({startDate:c,endDate:u},{startDate:f,endDate:x},s),y:a}},Gr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},Xr={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2",label:"Sin chofer"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22",label:"No notificado al chofer"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0",label:"Notificado"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63",label:"Confirmado"}};v.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,v.p`
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
`;const Bc=ze`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,Hc=ze`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,Wc=v.button`
  ${lt}
  position: absolute;
  height: ${Ft}px;
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
    animation: ${Bc} 180ms ease-out;
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
  ${({$exiting:e})=>e&&Re`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Hc} 190ms ease-out forwards;
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
`,jc=v.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`,Zc=v.div`
  position: sticky;
  left: ${Ae+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`,Ur=v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Vc=v.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Gc=v.span`
  ${tt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,Xc=v.span`
  ${tt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,Uc=v.span`
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
`,Kc=v.div`
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
`,Kr=v.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Jr=v.span`
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
`,qr=v.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Jc=v.div`
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
`,Qr=v.span`
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
`,qc=ze`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`,Qc=v.div`
  position: absolute;
  height: ${Ft}px;
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
    animation: ${qc} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`,Rc=v.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`,el=v.div`
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
`,tl=v.div`
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
`,nl=v.span`
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
`,rl=v.span`
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
`,ol=34,sl="#3E8E5A",il="#D98A22",Pn=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:a=!1,isDraggable:l=!0,yOffset:d=0,exiting:c=!1,highlighted:u=!1,dimmed:f=!1,leaving:x=!1,ghost:C=!1,ghostBadge:S=""})=>{const{date:E}=He(),m=Ht(E,t),{y:L,x:K,width:H}=zc(e,m.startDate,m.endDate,r.startDate,r.endDate,t),{colors:Y}=Yt(),h=p.useRef(null),b=I(r.startDate).isSame(I(r.endDate),"day"),y=r.eventType===kt.Tour,D=r.eventType===kt.Transfer,w=b&&(y||D);if(C)return i.jsxs(Qc,{style:{left:`${K}px`,top:`${L+d}px`,width:`${H}px`},children:[i.jsxs(Rc,{children:[i.jsxs(el,{children:[i.jsx(Le,{name:D?"transfer":"tour"}),r.title]}),i.jsxs(tl,{children:[i.jsx(Le,{name:"check",strokeWidth:2.6}),"flota propia"]})]}),S&&i.jsx(nl,{children:S})]});const $=O=>{h.current={x:O.clientX,y:O.clientY},l&&s&&(O.preventDefault(),s(r,O))},G=O=>{if(h.current){const F=Math.abs(O.clientX-h.current.x),X=Math.abs(O.clientY-h.current.y);Math.sqrt(F*F+X*X)<=5&&(o==null||o(r)),h.current=null}else o==null||o(r)},Q={left:`${K}px`,top:`${L+d}px`,backgroundColor:`${r.bgColor??Y.defaultTile}`,width:`${H}px`,color:Gr(r.bgColor??"")},A=!n&&r.readiness?Xr[r.readiness]:null,k=n&&r.subcontractConfirmed===!1,P=n?k?il:sl:A==null?void 0:A.stripe,N=O=>i.jsxs(Wc,{"data-segment-id":r.segmentId,style:Q,onClick:G,onMouseDown:$,onDragStart:F=>F.preventDefault(),isDraggable:l,isDragging:a,$unconfirmed:k,$exiting:c,$highlighted:u,$dimmed:f,$leaving:x,children:[P&&i.jsx(jc,{style:{background:P}}),x&&i.jsx(rl,{children:"Sub"}),O]});return N(w?i.jsxs(i.Fragment,{children:[(n||A)&&i.jsx(Kr,{$sm:!0,children:n?i.jsx(qr,{children:"SUB"}):A&&i.jsx(Jr,{$sm:!0,style:{color:A.color},children:i.jsx(Le,{name:A.icon,strokeWidth:A.icon==="check"?2.6:2.2})})}),i.jsxs(Jc,{$transfer:D,children:[i.jsx(Le,{name:D?"transfer":"sun",strokeWidth:2.4}),H>=ol&&i.jsxs(i.Fragment,{children:[i.jsx(Qr,{children:I(r.startDate).format("h:mm A")}),!D&&i.jsx(Qr,{$end:!0,children:I(r.endDate).format("h:mm A")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(Kr,{children:n?i.jsx(qr,{children:"SUB"}):A&&i.jsx(Jr,{style:{color:A.color},children:i.jsx(Le,{name:A.icon,strokeWidth:A.icon==="check"?2.6:2.2})})}),r.bookingNumber&&i.jsx(Uc,{children:r.bookingNumber}),i.jsxs(Zc,{children:[i.jsxs(Ur,{$pad:!0,children:[i.jsx(Vc,{children:i.jsx(Le,{name:D?"transfer":"tour"})}),i.jsx(Gc,{children:r.title})]}),r.subtitle&&i.jsx(Ur,{children:i.jsx(Xc,{children:r.subtitle})}),r.driver&&i.jsxs(Kc,{children:[i.jsx(Le,{name:"person"}),r.driver]})]})]}))},Rr=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Pe},al=ze`
  from { opacity: 0; }
  to { opacity: 1; }
`,cl=ze`
  from { opacity: 1; }
  to { opacity: 0; }
`,ll=v.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${fe}px;
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
    animation: ${al} 200ms ease-out;
  }
  ${({$fading:e})=>e&&Re`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${cl} 180ms ease forwards;
      }
    `}
  ${({$dimmed:e})=>e&&"opacity: 0.28;"}
`,dl=e=>({segmentId:e.segmentId,reservationId:e.reservationId,startDate:e.startDate,endDate:e.endDate,occupancy:0,title:e.title,bookingNumber:"",eventType:e.eventType}),ul=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:a=[],fadingUnitIds:l,highlightedSegmentId:d,focusedUnitIds:c,leavingSegmentIds:u,ghostProject:f})=>{const{nodes:x,liveMap:C}=p.useMemo(()=>{const H=new Map,Y=!!c&&c.length>0;let h=0;return{nodes:e.map((y,D)=>{D>0&&(h+=Math.max(e[D-1].data.length,1));const w=!!(l!=null&&l.has(y.id)),$=Y&&!c.includes(y.id),G=Rr(h,a),Q=f&&y.id===f.targetUnitId?i.jsx(Pn,{row:h,data:dl(f),zoom:r,yOffset:G,isDragging:!1,isDraggable:!1,ghost:!0,ghostBadge:f.badge},`ghost-${y.id}`):null;if(!y.data.some(k=>k.length>0)){const k=[i.jsx(ll,{$fading:w,$dimmed:$,style:{top:`${h*fe+G}px`},children:"Disponible"},`dispo-${y.id}`)];return Q&&k.push(Q),k}const A=y.data.map((k,P)=>k.map(N=>{const O=s===N.segmentId,F=o?o(N):!1,X=P+h,ne=Rr(X,a);return H.set(N.segmentId,{project:N,absoluteRow:X,yOffset:ne,isSubcontract:!!y.isSubcontract}),i.jsx(Pn,{row:X,data:N,zoom:r,isSubcontract:y.isSubcontract,onTileClick:t,onDragStart:n,isDragging:O,isDraggable:F,yOffset:ne,exiting:w,highlighted:d!=null&&N.segmentId===d,dimmed:$,leaving:!!(u!=null&&u.includes(N.segmentId))},N.segmentId)}));return Q?[...A,[Q]]:A}).flat(2),liveMap:H}},[e,t,r,n,o,s,a,l,d,c,u,f]),S=p.useRef(new Map),E=p.useRef([]),[m,L]=p.useState([]);p.useEffect(()=>()=>E.current.forEach(clearTimeout),[]),p.useEffect(()=>{const H=S.current;S.current=C;const Y=[];if(H.forEach((y,D)=>{C.has(D)||Y.push(y)}),L(y=>{let D=y.filter(w=>!C.has(w.project.segmentId));for(const w of Y)D.some($=>$.project.segmentId===w.project.segmentId)||(D=[...D,w]);return D}),!Y.length)return;const h=new Set(Y.map(y=>y.project.segmentId)),b=setTimeout(()=>{L(y=>y.filter(D=>!h.has(D.project.segmentId)))},220);E.current.push(b)},[C]);const K=m.filter(H=>!C.has(H.project.segmentId)).map(H=>i.jsx(Pn,{row:H.absoluteRow,data:H.project,zoom:r,isSubcontract:H.isSubcontract,yOffset:H.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},H.project.segmentId));return i.jsx(i.Fragment,{children:[...x,...K]})};v.div`
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
`,v.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`,v.label`
  font-size: 14px;
`,v.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`,v.input`
  height: 18px;
  width: 18px;
`,v.button`
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
`,v.form`
  background-color: rgba(255, 255, 255, 0.75);
`;const fl=v.div`
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
`,hl=v.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,pl=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,gl=v.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ml=v.span`
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
`,yl=v.div`
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
`,vl=v.div`
  ${lt}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,xl=v.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,bl=v.div`
  padding: 10px 12px;
`,wl=v.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,eo=v.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,to=v.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,no=v.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,ro=v.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,oo=v.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Sl=v.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Cl=v.div`
  min-width: 0;
`,kl=v.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Ml=v.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,so=v.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Mt=v.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,$t=v.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Dt=v.div`
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
`;v.div``,v.span``,v.span``,v.div``,v.div``,v.span``,v.span``,v.div``,v.div``,v.span``,v.span``,v.div``,v.div``,v.div``,v.span``,v.div``,v.div``,v.div``,v.div``,v.p``,v.span``;const $l={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Dl=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=p.useRef(null),[s,a]=p.useState("below"),l=Ke(),d={...$l,...l.tooltip};p.useLayoutEffect(()=>{if(!o.current||!t)return;const E=o.current,{width:m,height:L}=E.getBoundingClientRect(),K=E.parentElement;if(!K)return;const H=K.getBoundingClientRect(),Y=12,h=4,b=H.height-t.y,y=H.width-t.x;let D=t.x+Y,w=t.y+Y,$="below";y<m+Y&&(D=t.x-m-Y),b<L+Y&&(w=t.y-L-Y,$="above"),D=Math.max(h,Math.min(D,H.width-m-h)),w=Math.max(h,Math.min(w,H.height-L-h)),a($),E.style.left=`${D}px`,E.style.top=`${w}px`},[t]);const c=n.reservationType===kt.Tour,u=c&&n.isOneDayEvent,f=c?u?"sun":"tour":"transfer",x=c?u?d.oneDay:d.tour:d.transfer,C=n.readiness?Xr[n.readiness]:null,S=[n.groupName&&{label:d.groupName,value:n.groupName},n.driver&&{label:d.driver,value:n.driver},n.passengers&&{label:d.passengers,value:String(n.passengers)},n.flightNumber&&{label:d.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(fl,{ref:o,$position:s,$visible:r,children:[i.jsxs(hl,{children:[i.jsxs(pl,{children:[i.jsx(gl,{children:n.bookingNumber}),i.jsxs(ml,{children:[i.jsx(Le,{name:f,strokeWidth:2.4}),x]})]}),i.jsx(vl,{children:n.eventName}),n.client&&i.jsx(xl,{children:n.client}),C&&i.jsxs(yl,{style:{color:C.color},children:[i.jsx(Le,{name:C.icon,strokeWidth:C.icon==="check"?2.6:2.2}),C.label]})]}),i.jsxs(bl,{children:[i.jsxs(wl,{children:[i.jsxs(eo,{children:[i.jsx(to,{children:d.startDate}),i.jsxs(no,{children:[i.jsx(ro,{children:n.startDate}),i.jsx(oo,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(eo,{$isEnd:!0,children:[i.jsx(to,{children:d.endDate}),i.jsxs(no,{children:[i.jsx(ro,{children:n.endDate}),i.jsx(oo,{children:n.endTime})]})]})]}),S.length>0&&i.jsx(Sl,{children:S.map((E,m)=>i.jsxs(Cl,{children:[i.jsx(kl,{children:E.label}),i.jsx(Ml,{children:E.value})]},m))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(so,{children:[n.departureAddress&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.salida}),i.jsx(Dt,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.destino}),i.jsx(Dt,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.regreso}),i.jsx(Dt,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(so,{children:[n.serviceNotes&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.serviceNotes}),i.jsx(Dt,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.reservationNotes}),i.jsx(Dt,{children:n.reservationNotes})]})]})]})]})};v.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,v.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,v.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`;const El=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,_l=v.div`
  position: absolute;
  height: ${Ft}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,Tl=v.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,io=v.p`
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
`,Al=v.p`
  ${lt}
  ${tt}
`,Pl=v.div`
  position: sticky;
  left: ${Ae+16}px;
  overflow: hidden;
`,Ol=v.div`
  position: absolute;
  height: ${Ft}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Il=v.div`
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
`,Yl=v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Ll=v.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,Nl=v.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,ao=v.div`
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
`,co=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,lo=v.div`
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
`,uo=v.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,On=v.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,In=v.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,mt=v.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,fo=v.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,Fl=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:d=[]})=>{const c=Ke(),u=Y=>{let h=0;for(const b of d)b<=Y&&h++;return Y*fe+h*Pe},[f,x]=p.useState(null),[C,S]=p.useState(0),E=p.useCallback((Y=400,h=300)=>{const y=t.width,D=48,w=document.getElementById("react-scheduler");if(!w)return{x:r.x+y+16,y:r.y};const $=w.scrollLeft,G=w.scrollTop,Q=w.clientWidth,A=w.clientHeight,k=r.x-$,P=r.y-G,N={left:Ae+16,right:Q-16,top:16,bottom:A-16},O=N.right-(k+y),F=k-N.left,X=N.bottom-(P+D),ne=P-N.top;let ie,B;return O>=Y+16?ie=k+y+16:F>=Y+16?ie=k-Y-16:O>=F?(ie=k+y+16,ie+Y>N.right&&(ie=N.right-Y)):(ie=k-Y-16,ie<N.left&&(ie=N.left)),X>=h+16?B=P+D+16:ne>=h+16?B=P-h-16:X>=ne?(B=P+D+16,B+h>N.bottom&&(B=N.bottom-h)):(B=P-h-16,B<N.top&&(B=N.top)),ie=Math.max(N.left,Math.min(ie,N.right-Y)),B=Math.max(N.top,Math.min(B,N.bottom-h)),{x:ie+$,y:B+G}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&C===0?S(r.x):s==="idle"&&S(0)},[s,e,r.x,C]),p.useEffect(()=>{x(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const Y=[];let h=0;for(const b of a){const y=Math.max(b.data.length,1);if(b.capacity!==void 0&&e.totalPassengers>b.capacity)for(let D=0;D<y;D++)Y.push(h+D);h+=y}return Y},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const L=s==="animating",K=Gr(e.bgColor??""),H=()=>{if(!n)return"";const Y=I(n.startDate).format("MMM D, HH:mm"),h=I(n.endDate).format("HH:mm");return`${Y} - ${h}`};return i.jsxs(El,{children:[m.map(Y=>i.jsx(Ll,{style:{top:`${u(Y)}px`,height:`${fe}px`}},Y)),n&&s==="dragging"&&i.jsx(Yl,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${u(n.resourceIndex)}px`,height:`${fe}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(Ol,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(fe-48)/2}px`,width:`${t.width}px`}}),i.jsx(Il,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(fe-48)/2}px`},children:H()})]}),n&&s==="dragging"&&l&&i.jsx(Nl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${u(n.resourceIndex)}px`,height:`${fe}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const Y=E(400,300);return i.jsxs(ao,{style:{left:`${Y.x}px`,top:`${Y.y}px`},children:[i.jsxs(co,{children:[i.jsx(lo,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(uo,{children:n.conflicts.map((h,b)=>{const y=I(n.startDate).format("YYYY-MM-DD"),D=I(n.endDate).format("YYYY-MM-DD"),w=I(h.event.startDate).format("YYYY-MM-DD"),$=I(h.event.endDate).format("YYYY-MM-DD"),G=I(h.conflictStart).format("YYYY-MM-DD"),Q=I(h.conflictEnd).format("YYYY-MM-DD"),A=y!==D,k=w!==$,P=G!==Q,N=A?I(n.startDate).format("MMM D, h:mm A"):I(n.startDate).format("h:mm A"),O=A?I(n.endDate).format("MMM D, h:mm A"):I(n.endDate).format("h:mm A"),F=k?I(h.event.startDate).format("MMM D, h:mm A"):I(h.event.startDate).format("h:mm A"),X=k?I(h.event.endDate).format("MMM D, h:mm A"):I(h.event.endDate).format("h:mm A"),ne=P?I(h.conflictStart).format("MMM D, h:mm A"):I(h.conflictStart).format("h:mm A"),ie=P?I(h.conflictEnd).format("MMM D, h:mm A"):I(h.conflictEnd).format("h:mm A"),B=P?"":I(h.conflictStart).format("MMM D"),W=n.startDate.getTime(),q=n.endDate.getTime(),te=h.event.startDate.getTime(),M=h.event.endDate.getTime(),Z=W>=te&&W<M,T=q>te&&q<=M,R=W<=te&&q>=M,j=te<=W&&M>=q;let z=!1,g=!1,U=!1,_=!1,V="";return R||j?(z=!0,g=!0,U=!0,_=!0,V=`⚠️ ${c.conflicts.changeBoth}`):Z&&T?(z=!0,g=!0,U=!0,_=!0,V=`⚠️ ${c.conflicts.changeBoth}`):Z?(z=!0,_=!0,V=`⚠️ ${c.conflicts.changeStart}`):T&&(g=!0,U=!0,V=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(On,{children:[i.jsxs(In,{children:[c.conflicts.conflictsWith,": ",h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(mt,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",z?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:N}):N," ",c.conflicts.to," ",g?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:O}):O]}),i.jsxs(mt,{children:[i.jsx("strong",{children:h.event.title})," ",c.conflicts.currentlyAt,":"," ",U?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:F}):F," ",c.conflicts.to," ",_?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:X}):X]}),i.jsxs(fo,{children:[c.conflicts.conflictTime,": ",B&&`${B}, `,ne," - ",ie]}),V&&i.jsx(mt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:V})]},b)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const Y=E(400,400);return i.jsxs(ao,{style:{left:`${Y.x}px`,top:`${Y.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(co,{style:{color:"#2E7D32"},children:[i.jsx(lo,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(uo,{children:[(()=>{const h=n.nearbyEvents.some(w=>w.position==="before"),b=n.nearbyEvents.some(w=>w.position==="after"),y=I(n.startDate).format("h:mm A"),D=I(n.endDate).format("h:mm A");return i.jsxs(On,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(In,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(mt,{style:{fontWeight:600},children:[I(n.startDate).format("MMM D"),":"," ",h?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:y}):y," ",c.conflicts.to," ",b?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:D}):D]}),i.jsx(mt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((h,b)=>{const y=I(h.event.startDate).format("YYYY-MM-DD"),D=I(h.event.endDate).format("YYYY-MM-DD"),w=y!==D,$=w?I(h.event.startDate).format("MMM D, h:mm A"):I(h.event.startDate).format("h:mm A"),G=w?I(h.event.endDate).format("MMM D, h:mm A"):I(h.event.endDate).format("h:mm A"),Q=I(h.event.startDate).format("MMM D"),A=Math.floor(h.timeGap/(1e3*60*60)),k=Math.floor(h.timeGap%(1e3*60*60)/(1e3*60)),P=A>0?`${A}h ${k}m`:`${k}m`,N=h.position==="after",O=h.position==="before";return i.jsxs(On,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(In,{style:{color:"#1B5E20"},children:[h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(mt,{children:[!w&&`${Q}: `,N?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:$}):$," ",c.conflicts.to," ",O?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:G}):G]}),i.jsxs(fo,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[P," ",h.position==="before"?c.conflicts.before:c.conflicts.after]})]},b)})]})]})})(),i.jsx(_l,{$isAnimating:L,$animateToX:f==null?void 0:f.x,$animateToY:f==null?void 0:f.y,style:{left:L?`${(f==null?void 0:f.x)??0}px`:"0",top:L?`${(f==null?void 0:f.y)??0}px`:"0",transform:L?void 0:`translate3d(${l?C:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:K},children:i.jsx(Tl,{children:i.jsxs(Pl,{children:[i.jsx(io,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(io,{children:e.subtitle}),e.description&&i.jsx(Al,{children:e.description})]})})})]})},zl=ze`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,Bl=v.div`
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
  animation: ${zl} 1.5s ease-in-out infinite;
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
`,Hl=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(Bl,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Wl=ze`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,jl=v.div`
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
  animation: ${Wl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,Zl=v.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Vl=v.span`
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
`,Gl=v.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Xl=v.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;v.div`
  display: none;
`,v.div`
  display: none;
`,v.button`
  display: none;
`;const Ul=v.div`
  display: flex;
  gap: 8px;
`,ho=v.button`
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
`,Kl=({selections:e,onConfirm:r,onClear:t})=>{var S;const o=Ke().multiSelect,s=p.useMemo(()=>e.filter(E=>E.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",u=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",f=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((S=o==null?void 0:o.conflictsWarning)==null?void 0:S.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const x=s>0,C=i.jsxs(jl,{$hasConflicts:x,"data-multi-select-ui":!0,children:[i.jsxs(Zl,{children:[i.jsxs(Vl,{$hasConflicts:x,children:[e.length," ",a]}),x&&i.jsxs(Gl,{children:["⚠️ ",f]}),i.jsx(Xl,{children:l})]}),i.jsxs(Ul,{children:[i.jsxs(ho,{variant:"secondary",onClick:t,children:["✕ ",d]}),i.jsx(ho,{variant:"primary",$hasConflicts:x,onClick:r,children:x?`⚠️ ${u}`:`✓ ${c}`})]})]});return mo.createPortal(C,document.body)},Jl=ze`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,ql=v.div`
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
  animation: ${Jl} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&Re`
      border-style: dashed;
    `}
`,Ql=v.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,Rl=v.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,ed=v.button`
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
`,td=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,d]=p.useState(null),[c,u]=p.useState({x:0,y:0}),f=p.useRef(null),x=p.useMemo(()=>{switch(t){case 0:return Ye*7;case 1:return Ce;case 2:return $e;default:return Ce}},[t]),C=p.useMemo(()=>I().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),S=p.useMemo(()=>e.map((b,y)=>{let D=0,w=!1;for(const F of r){if(F.id===b.resourceId){w=!0;break}D+=Math.max(F.data.length,1)}if(!w)return null;const $=I(b.startDate),G=I(b.endDate);let Q,A;switch(t){case 0:Q=Math.floor($.diff(C,"days")/7),A=Math.max(1,Math.ceil(G.diff($,"days")/7)+1);break;case 1:Q=$.diff(C,"days"),A=Math.max(1,G.diff($,"days")+1);break;case 2:Q=$.diff(C,"hours"),A=Math.max(1,G.diff($,"hours")+1);break;default:Q=0,A=1}const k=Q*x;let P=0;for(const F of a)F<=D&&P++;const N=D*fe+P*Pe,O=A*x;return{index:y,selection:b,x:k,y:N,width:O,height:fe}}),[e,r,t,C,x]),E=(b,y)=>{const D=I(b).format("MMM D"),w=I(y).format("MMM D");return D===w?D:`${D} - ${w}`},m=b=>!b.hasConflict||!b.conflicts?"":`⚠️ Conflicts with:
${b.conflicts.map(D=>{const w=(D.overlapDuration/36e5).toFixed(1);return`• ${D.event.title} (${w}h overlap)`}).join(`
`)}`,L=p.useCallback(b=>{let y=0;for(const D of r){const w=Math.max(D.data.length,1);if(b>=y*fe&&b<(y+w)*fe)return{resourceId:D.id,resourceLabel:D.label};y+=w}return null},[r]),K=p.useCallback(b=>{const y=Math.floor(b/x);switch(t){case 0:return C.add(y*7,"days").toDate();case 1:return C.add(y,"days").toDate();case 2:return C.add(y,"hours").toDate();default:return C.toDate()}},[t,C,x]),H=p.useCallback((b,y)=>{!s||(b.preventDefault(),b.stopPropagation(),!S[y])||(f.current={x:b.clientX,y:b.clientY},d(y),u({x:0,y:0}))},[s,S]),Y=p.useCallback(b=>{if(l===null||!f.current)return;const y=b.clientX-f.current.x,D=b.clientY-f.current.y,w=Math.round(y/x)*x,$=Math.round(D/fe)*fe;u({x:w,y:$})},[l,x]),h=p.useCallback(()=>{if(l===null||!s){d(null),u({x:0,y:0}),f.current=null;return}const b=S[l];if(!b){d(null),u({x:0,y:0}),f.current=null;return}const y=b.x+c.x,D=b.y+c.y,w=L(D+fe/2);if(!w){d(null),u({x:0,y:0}),f.current=null;return}const $=K(y),G=e[l],Q=G.endDate.getTime()-G.startDate.getTime(),A=new Date($.getTime()+Q);s(l,{startDate:$,endDate:A,resourceId:w.resourceId,resourceLabel:w.resourceLabel}),d(null),u({x:0,y:0}),f.current=null},[l,c,S,e,s,L,K]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",Y),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",h)}},[l,Y,h]),i.jsx(i.Fragment,{children:S.map(b=>{if(!b)return null;const y=b.selection.hasConflict||!1,D=l===b.index,w=D?b.x+c.x:b.x,$=D?b.y+c.y:b.y;return i.jsxs(ql,{$hasConflict:y,$isDragging:D,style:{left:w,top:$,width:b.width,height:b.height},"data-multi-select-ui":!0,onMouseDown:G=>H(G,b.index),children:[y&&i.jsx(Rl,{title:m(b.selection),children:"⚠️"}),i.jsx(Ql,{$hasConflict:y,children:E(b.selection.startDate,b.selection.endDate)}),i.jsx(ed,{onClick:G=>{G.stopPropagation(),o(b.index)},onMouseDown:G=>G.stopPropagation(),title:y?"Remove conflicting selection":"Remove selection",children:"×"})]},b.index)})})},po=(e,r,t,n)=>{if(r===2)return null;const o=r===0?Ye*7:Ce,s=I().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"),a=e.startOf("day"),l=r===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=n?null:{x:l*o,width:o}},nd=v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,rd=({zoom:e,startDate:r})=>{const{cols:t}=He(),n=p.useMemo(()=>po(I(),e,r,t),[e,r,t]);return n?i.jsx(nd,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},Yn="#2f6fed",od=v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${Yn};
  border-right: 1px solid ${Yn}55;
  background: ${Yn}1c;
`,sd=({zoom:e,startDate:r})=>{const{cols:t,jumpDate:n}=He(),o=p.useMemo(()=>!n||n.isSame(I(),"day")?null:po(n,e,r,t),[n,e,r,t]);return o?i.jsx(od,{style:{left:`${o.x}px`,width:`${o.width}px`},"aria-hidden":!0}):null},Fd="";Te.Scheduler=Pa,Object.defineProperty(Te,Symbol.toStringTag,{value:"Module"})});
