(function(Te,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Te=typeof globalThis<"u"?globalThis:Te||self,i(Te["react-scheduler"]={},Te["react/jsx-runtime"],Te.React,Te.ReactDOM))})(this,function(Te,i,p,po){"use strict";var ed=Object.defineProperty;var td=(Te,i,p)=>i in Te?ed(Te,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):Te[i]=p;var ho=(Te,i,p)=>(td(Te,typeof i!="symbol"?i+"":i,p),p);function go(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const oe=go(p);var Me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xt={},mo={get exports(){return xt},set exports(e){xt=e}},ye={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var On;function yo(){if(On)return ye;On=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),w;w=Symbol.for("react.module.reference");function E(m){if(typeof m=="object"&&m!==null){var L=m.$$typeof;switch(L){case e:switch(m=m.type,m){case t:case o:case n:case c:case u:return m;default:switch(m=m&&m.$$typeof,m){case l:case a:case d:case v:case f:case s:return m;default:return L}}case r:return L}}}return ye.ContextConsumer=a,ye.ContextProvider=s,ye.Element=e,ye.ForwardRef=d,ye.Fragment=t,ye.Lazy=v,ye.Memo=f,ye.Portal=r,ye.Profiler=o,ye.StrictMode=n,ye.Suspense=c,ye.SuspenseList=u,ye.isAsyncMode=function(){return!1},ye.isConcurrentMode=function(){return!1},ye.isContextConsumer=function(m){return E(m)===a},ye.isContextProvider=function(m){return E(m)===s},ye.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},ye.isForwardRef=function(m){return E(m)===d},ye.isFragment=function(m){return E(m)===t},ye.isLazy=function(m){return E(m)===v},ye.isMemo=function(m){return E(m)===f},ye.isPortal=function(m){return E(m)===r},ye.isProfiler=function(m){return E(m)===o},ye.isStrictMode=function(m){return E(m)===n},ye.isSuspense=function(m){return E(m)===c},ye.isSuspenseList=function(m){return E(m)===u},ye.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===n||m===c||m===u||m===C||typeof m=="object"&&m!==null&&(m.$$typeof===v||m.$$typeof===f||m.$$typeof===s||m.$$typeof===a||m.$$typeof===d||m.$$typeof===w||m.getModuleId!==void 0)},ye.typeOf=E,ye}var ve={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In;function vo(){return In||(In=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),w=!1,E=!1,m=!1,L=!1,U=!1,W;W=Symbol.for("react.module.reference");function O(_){return!!(typeof _=="string"||typeof _=="function"||_===t||_===o||U||_===n||_===c||_===u||L||_===C||w||E||m||typeof _=="object"&&_!==null&&(_.$$typeof===v||_.$$typeof===f||_.$$typeof===s||_.$$typeof===a||_.$$typeof===d||_.$$typeof===W||_.getModuleId!==void 0))}function h(_){if(typeof _=="object"&&_!==null){var V=_.$$typeof;switch(V){case e:var ee=_.type;switch(ee){case t:case o:case n:case c:case u:return ee;default:var K=ee&&ee.$$typeof;switch(K){case l:case a:case d:case v:case f:case s:return K;default:return V}}case r:return V}}}var x=a,y=s,D=e,S=d,$=t,G=v,Q=f,P=r,k=o,A=n,N=c,I=u,F=!1,J=!1;function ne(_){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ie(_){return J||(J=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function H(_){return h(_)===a}function j(_){return h(_)===s}function q(_){return typeof _=="object"&&_!==null&&_.$$typeof===e}function te(_){return h(_)===d}function M(_){return h(_)===t}function Z(_){return h(_)===v}function T(_){return h(_)===f}function R(_){return h(_)===r}function B(_){return h(_)===o}function z(_){return h(_)===n}function g(_){return h(_)===c}function X(_){return h(_)===u}ve.ContextConsumer=x,ve.ContextProvider=y,ve.Element=D,ve.ForwardRef=S,ve.Fragment=$,ve.Lazy=G,ve.Memo=Q,ve.Portal=P,ve.Profiler=k,ve.StrictMode=A,ve.Suspense=N,ve.SuspenseList=I,ve.isAsyncMode=ne,ve.isConcurrentMode=ie,ve.isContextConsumer=H,ve.isContextProvider=j,ve.isElement=q,ve.isForwardRef=te,ve.isFragment=M,ve.isLazy=Z,ve.isMemo=T,ve.isPortal=R,ve.isProfiler=B,ve.isStrictMode=z,ve.isSuspense=g,ve.isSuspenseList=X,ve.isValidElementType=O,ve.typeOf=h}()),ve}(function(e){process.env.NODE_ENV==="production"?e.exports=yo():e.exports=vo()})(mo);function xo(e){function r(H,j,q,te,M){for(var Z=0,T=0,R=0,B=0,z,g,X=0,_=0,V,ee=V=z=0,K=0,ce=0,he=0,de=0,ge=q.length,Se=ge-1,me,ae="",fe="",De="",Oe="",ue;K<ge;){if(g=q.charCodeAt(K),K===Se&&T+B+R+Z!==0&&(T!==0&&(g=T===47?10:47),B=R=Z=0,ge++,Se++),T+B+R+Z===0){if(K===Se&&(0<ce&&(ae=ae.replace(v,"")),0<ae.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:ae+=q.charAt(K)}g=59}switch(g){case 123:for(ae=ae.trim(),z=ae.charCodeAt(0),V=1,de=++K;K<ge;){switch(g=q.charCodeAt(K)){case 123:V++;break;case 125:V--;break;case 47:switch(g=q.charCodeAt(K+1)){case 42:case 47:e:{for(ee=K+1;ee<Se;++ee)switch(q.charCodeAt(ee)){case 47:if(g===42&&q.charCodeAt(ee-1)===42&&K+2!==ee){K=ee+1;break e}break;case 10:if(g===47){K=ee+1;break e}}K=ee}}break;case 91:g++;case 40:g++;case 34:case 39:for(;K++<Se&&q.charCodeAt(K)!==g;);}if(V===0)break;K++}switch(V=q.substring(de,K),z===0&&(z=(ae=ae.replace(f,"").trim()).charCodeAt(0)),z){case 64:switch(0<ce&&(ae=ae.replace(v,"")),g=ae.charCodeAt(1),g){case 100:case 109:case 115:case 45:ce=j;break;default:ce=N}if(V=r(j,ce,V,g,M+1),de=V.length,0<F&&(ce=t(N,ae,he),ue=l(3,V,ce,j,P,Q,de,g,M,te),ae=ce.join(""),ue!==void 0&&(de=(V=ue.trim()).length)===0&&(g=0,V="")),0<de)switch(g){case 115:ae=ae.replace(x,a);case 100:case 109:case 45:V=ae+"{"+V+"}";break;case 107:ae=ae.replace(U,"$1 $2"),V=ae+"{"+V+"}",V=A===1||A===2&&s("@"+V,3)?"@-webkit-"+V+"@"+V:"@"+V;break;default:V=ae+V,te===112&&(V=(fe+=V,""))}else V="";break;default:V=r(j,t(j,ae,he),V,te,M+1)}De+=V,V=he=ce=ee=z=0,ae="",g=q.charCodeAt(++K);break;case 125:case 59:if(ae=(0<ce?ae.replace(v,""):ae).trim(),1<(de=ae.length))switch(ee===0&&(z=ae.charCodeAt(0),z===45||96<z&&123>z)&&(de=(ae=ae.replace(" ",":")).length),0<F&&(ue=l(1,ae,j,H,P,Q,fe.length,te,M,te))!==void 0&&(de=(ae=ue.trim()).length)===0&&(ae="\0\0"),z=ae.charCodeAt(0),g=ae.charCodeAt(1),z){case 0:break;case 64:if(g===105||g===99){Oe+=ae+q.charAt(K);break}default:ae.charCodeAt(de-1)!==58&&(fe+=o(ae,z,g,ae.charCodeAt(2)))}he=ce=ee=z=0,ae="",g=q.charCodeAt(++K)}}switch(g){case 13:case 10:T===47?T=0:1+z===0&&te!==107&&0<ae.length&&(ce=1,ae+="\0"),0<F*ne&&l(0,ae,j,H,P,Q,fe.length,te,M,te),Q=1,P++;break;case 59:case 125:if(T+B+R+Z===0){Q++;break}default:switch(Q++,me=q.charAt(K),g){case 9:case 32:if(B+Z+T===0)switch(X){case 44:case 58:case 9:case 32:me="";break;default:g!==32&&(me=" ")}break;case 0:me="\\0";break;case 12:me="\\f";break;case 11:me="\\v";break;case 38:B+T+Z===0&&(ce=he=1,me="\f"+me);break;case 108:if(B+T+Z+k===0&&0<ee)switch(K-ee){case 2:X===112&&q.charCodeAt(K-3)===58&&(k=X);case 8:_===111&&(k=_)}break;case 58:B+T+Z===0&&(ee=K);break;case 44:T+R+B+Z===0&&(ce=1,me+="\r");break;case 34:case 39:T===0&&(B=B===g?0:B===0?g:B);break;case 91:B+T+R===0&&Z++;break;case 93:B+T+R===0&&Z--;break;case 41:B+T+Z===0&&R--;break;case 40:if(B+T+Z===0){if(z===0)switch(2*X+3*_){case 533:break;default:z=1}R++}break;case 64:T+R+B+Z+ee+V===0&&(V=1);break;case 42:case 47:if(!(0<B+Z+R))switch(T){case 0:switch(2*g+3*q.charCodeAt(K+1)){case 235:T=47;break;case 220:de=K,T=42}break;case 42:g===47&&X===42&&de+2!==K&&(q.charCodeAt(de+2)===33&&(fe+=q.substring(de,K+1)),me="",T=0)}}T===0&&(ae+=me)}_=X,X=g,K++}if(de=fe.length,0<de){if(ce=j,0<F&&(ue=l(2,fe,ce,H,P,Q,de,te,M,te),ue!==void 0&&(fe=ue).length===0))return Oe+fe+De;if(fe=ce.join(",")+"{"+fe+"}",A*k!==0){switch(A!==2||s(fe,2)||(k=0),k){case 111:fe=fe.replace(O,":-moz-$1")+fe;break;case 112:fe=fe.replace(W,"::-webkit-input-$1")+fe.replace(W,"::-moz-$1")+fe.replace(W,":-ms-input-$1")+fe}k=0}}return Oe+fe+De}function t(H,j,q){var te=j.trim().split(m);j=te;var M=te.length,Z=H.length;switch(Z){case 0:case 1:var T=0;for(H=Z===0?"":H[0]+" ";T<M;++T)j[T]=n(H,j[T],q).trim();break;default:var R=T=0;for(j=[];T<M;++T)for(var B=0;B<Z;++B)j[R++]=n(H[B]+" ",te[T],q).trim()}return j}function n(H,j,q){var te=j.charCodeAt(0);switch(33>te&&(te=(j=j.trim()).charCodeAt(0)),te){case 38:return j.replace(L,"$1"+H.trim());case 58:return H.trim()+j.replace(L,"$1"+H.trim());default:if(0<1*q&&0<j.indexOf("\f"))return j.replace(L,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+j}function o(H,j,q,te){var M=H+";",Z=2*j+3*q+4*te;if(Z===944){H=M.indexOf(":",9)+1;var T=M.substring(H,M.length-1).trim();return T=M.substring(0,H).trim()+T+";",A===1||A===2&&s(T,1)?"-webkit-"+T+T:T}if(A===0||A===2&&!s(M,1))return M;switch(Z){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(G,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return T=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+M+"-ms-flex-pack"+T+M;case 1005:return w.test(M)?M.replace(C,":-webkit-")+M.replace(C,":-moz-")+M:M;case 1e3:switch(T=M.substring(13).trim(),j=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(j)){case 226:T=M.replace(h,"tb");break;case 232:T=M.replace(h,"tb-rl");break;case 220:T=M.replace(h,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+T+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(j=(M=H).length-10,T=(M.charCodeAt(j)===33?M.substring(0,j):M).substring(H.indexOf(":",7)+1).trim(),Z=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:M=M.replace(T,"-webkit-"+T)+";"+M;break;case 207:case 102:M=M.replace(T,"-webkit-"+(102<Z?"inline-":"")+"box")+";"+M.replace(T,"-webkit-"+T)+";"+M.replace(T,"-ms-"+T+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return T=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+T+"-ms-flex-"+T+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(D,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(D,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if($.test(H)===!0)return(T=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?o(H.replace("stretch","fill-available"),j,q,te).replace(":fill-available",":stretch"):M.replace(T,"-webkit-"+T)+M.replace(T,"-moz-"+T.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,q+te===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+M}return M}function s(H,j){var q=H.indexOf(j===1?":":"{"),te=H.substring(0,j!==3?q:10);return q=H.substring(q+1,H.length-1),J(j!==2?te:te.replace(S,"$1"),q,j)}function a(H,j){var q=o(j,j.charCodeAt(0),j.charCodeAt(1),j.charCodeAt(2));return q!==j+";"?q.replace(y," or ($1)").substring(4):"("+j+")"}function l(H,j,q,te,M,Z,T,R,B,z){for(var g=0,X=j,_;g<F;++g)switch(_=I[g].call(u,H,X,q,te,M,Z,T,R,B,z)){case void 0:case!1:case!0:case null:break;default:X=_}if(X!==j)return X}function d(H){switch(H){case void 0:case null:F=I.length=0;break;default:if(typeof H=="function")I[F++]=H;else if(typeof H=="object")for(var j=0,q=H.length;j<q;++j)d(H[j]);else ne=!!H|0}return d}function c(H){return H=H.prefix,H!==void 0&&(J=null,H?typeof H!="function"?A=1:(A=2,J=H):A=0),c}function u(H,j){var q=H;if(33>q.charCodeAt(0)&&(q=q.trim()),ie=q,q=[ie],0<F){var te=l(-1,j,q,q,P,Q,0,0,0,0);te!==void 0&&typeof te=="string"&&(j=te)}var M=r(N,q,j,0,0);return 0<F&&(te=l(-2,M,q,q,P,Q,M.length,0,0,0),te!==void 0&&(M=te)),ie="",k=0,Q=P=1,M}var f=/^\0+/g,v=/[\0\r\f]/g,C=/: */g,w=/zoo|gra/,E=/([,: ])(transform)/g,m=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,U=/@(k\w+)\s*(\S*)\s*/,W=/::(place)/g,O=/:(read-only)/g,h=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,y=/([\s\S]*?);/g,D=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,Q=1,P=1,k=0,A=1,N=[],I=[],F=0,J=null,ne=0,ie="";return u.use=d,u.set=c,e!==void 0&&c(e),u}var bo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function wo(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var So=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Yn=wo(function(e){return So.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Gt={},Co={get exports(){return Gt},set exports(e){Gt=e}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function ko(){if(Ln)return xe;Ln=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,U=e?Symbol.for("react.scope"):60119;function W(h){if(typeof h=="object"&&h!==null){var x=h.$$typeof;switch(x){case r:switch(h=h.type,h){case d:case c:case n:case s:case o:case f:return h;default:switch(h=h&&h.$$typeof,h){case l:case u:case w:case C:case a:return h;default:return x}}case t:return x}}}function O(h){return W(h)===c}return xe.AsyncMode=d,xe.ConcurrentMode=c,xe.ContextConsumer=l,xe.ContextProvider=a,xe.Element=r,xe.ForwardRef=u,xe.Fragment=n,xe.Lazy=w,xe.Memo=C,xe.Portal=t,xe.Profiler=s,xe.StrictMode=o,xe.Suspense=f,xe.isAsyncMode=function(h){return O(h)||W(h)===d},xe.isConcurrentMode=O,xe.isContextConsumer=function(h){return W(h)===l},xe.isContextProvider=function(h){return W(h)===a},xe.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===r},xe.isForwardRef=function(h){return W(h)===u},xe.isFragment=function(h){return W(h)===n},xe.isLazy=function(h){return W(h)===w},xe.isMemo=function(h){return W(h)===C},xe.isPortal=function(h){return W(h)===t},xe.isProfiler=function(h){return W(h)===s},xe.isStrictMode=function(h){return W(h)===o},xe.isSuspense=function(h){return W(h)===f},xe.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===n||h===c||h===s||h===o||h===f||h===v||typeof h=="object"&&h!==null&&(h.$$typeof===w||h.$$typeof===C||h.$$typeof===a||h.$$typeof===l||h.$$typeof===u||h.$$typeof===m||h.$$typeof===L||h.$$typeof===U||h.$$typeof===E)},xe.typeOf=W,xe}var be={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn;function Mo(){return Nn||(Nn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,U=e?Symbol.for("react.scope"):60119;function W(g){return typeof g=="string"||typeof g=="function"||g===n||g===c||g===s||g===o||g===f||g===v||typeof g=="object"&&g!==null&&(g.$$typeof===w||g.$$typeof===C||g.$$typeof===a||g.$$typeof===l||g.$$typeof===u||g.$$typeof===m||g.$$typeof===L||g.$$typeof===U||g.$$typeof===E)}function O(g){if(typeof g=="object"&&g!==null){var X=g.$$typeof;switch(X){case r:var _=g.type;switch(_){case d:case c:case n:case s:case o:case f:return _;default:var V=_&&_.$$typeof;switch(V){case l:case u:case w:case C:case a:return V;default:return X}}case t:return X}}}var h=d,x=c,y=l,D=a,S=r,$=u,G=n,Q=w,P=C,k=t,A=s,N=o,I=f,F=!1;function J(g){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ne(g)||O(g)===d}function ne(g){return O(g)===c}function ie(g){return O(g)===l}function H(g){return O(g)===a}function j(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function q(g){return O(g)===u}function te(g){return O(g)===n}function M(g){return O(g)===w}function Z(g){return O(g)===C}function T(g){return O(g)===t}function R(g){return O(g)===s}function B(g){return O(g)===o}function z(g){return O(g)===f}be.AsyncMode=h,be.ConcurrentMode=x,be.ContextConsumer=y,be.ContextProvider=D,be.Element=S,be.ForwardRef=$,be.Fragment=G,be.Lazy=Q,be.Memo=P,be.Portal=k,be.Profiler=A,be.StrictMode=N,be.Suspense=I,be.isAsyncMode=J,be.isConcurrentMode=ne,be.isContextConsumer=ie,be.isContextProvider=H,be.isElement=j,be.isForwardRef=q,be.isFragment=te,be.isLazy=M,be.isMemo=Z,be.isPortal=T,be.isProfiler=R,be.isStrictMode=B,be.isSuspense=z,be.isValidElementType=W,be.typeOf=O}()),be}(function(e){process.env.NODE_ENV==="production"?e.exports=ko():e.exports=Mo()})(Co);var Xt=Gt,$o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Do={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Eo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ut={};Ut[Xt.ForwardRef]=Eo,Ut[Xt.Memo]=Fn;function zn(e){return Xt.isMemo(e)?Fn:Ut[e.$$typeof]||$o}var _o=Object.defineProperty,To=Object.getOwnPropertyNames,Hn=Object.getOwnPropertySymbols,Ao=Object.getOwnPropertyDescriptor,Po=Object.getPrototypeOf,Wn=Object.prototype;function Bn(e,r,t){if(typeof r!="string"){if(Wn){var n=Po(r);n&&n!==Wn&&Bn(e,n,t)}var o=To(r);Hn&&(o=o.concat(Hn(r)));for(var s=zn(e),a=zn(r),l=0;l<o.length;++l){var d=o[l];if(!Do[d]&&!(t&&t[d])&&!(a&&a[d])&&!(s&&s[d])){var c=Ao(r,d);try{_o(e,d,c)}catch{}}}}return e}var Oo=Bn;function Fe(){return(Fe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var jn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},Kt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!xt.typeOf(e)},Et=Object.freeze([]),Ve=Object.freeze({});function ot(e){return typeof e=="function"}function Jt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function qt(e){return e&&typeof e.styledComponentId=="string"}var st=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Qt=typeof window<"u"&&"HTMLElement"in window,Io=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Yo={},Lo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function No(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function We(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(No.apply(void 0,[Lo[e]].concat(t)).trim())}var Fo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&We(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(t+1),c=0,u=n.length;c<u;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),_t=new Map,Tt=new Map,bt=1,At=function(e){if(_t.has(e))return _t.get(e);for(;Tt.has(bt);)bt++;var r=bt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&We(16,""+r),_t.set(e,r),Tt.set(r,e),r},zo=function(e){return Tt.get(e)},Ho=function(e,r){r>=bt&&(bt=r+1),_t.set(e,r),Tt.set(r,e)},Wo="style["+st+'][data-styled-version="5.3.8"]',Bo=new RegExp("^"+st+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),jo=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},Zo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Bo);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(Ho(c,d),jo(e,c,l[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(a)}}},Vo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Zn=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var u=d[c];if(u&&u.nodeType===1&&u.hasAttribute(st))return u}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(st,"active"),n.setAttribute("data-styled-version","5.3.8");var a=Vo();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},Go=function(){function e(t){var n=this.element=Zn(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var d=s[a];if(d.ownerNode===o)return d}We(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Xo=function(){function e(t){var n=this.element=Zn(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Uo=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vn=Qt,Ko={isServer:!Qt,useCSSOMInjection:!Io},Pt=function(){function e(t,n,o){t===void 0&&(t=Ve),n===void 0&&(n={}),this.options=Fe({},Ko,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Qt&&Vn&&(Vn=!1,function(s){for(var a=document.querySelectorAll(Wo),l=0,d=a.length;l<d;l++){var c=a[l];c&&c.getAttribute(st)!=="active"&&(Zo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return At(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Fe({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new Uo(a):s?new Go(a):new Xo(a),new Fo(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(At(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(At(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(At(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=zo(a);if(l!==void 0){var d=t.names.get(l),c=n.getGroup(a);if(d&&c&&d.size){var u=st+".g"+a+'[id="'+l+'"]',f="";d!==void 0&&d.forEach(function(v){v.length>0&&(f+=v+",")}),s+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),Jo=/(a)(d)/gi,Gn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rt(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Gn(r%52)+t;return(Gn(r%52)+t).replace(Jo,"$1-$2")}var qe=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Xn=function(e){return qe(5381,e)};function Un(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(ot(t)&&!qt(t))return!1}return!0}var qo=Xn("5.3.8"),Qo=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&Un(r),this.componentId=t,this.baseHash=qe(qo,t),this.baseStyle=n,Pt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=Qe(this.rules,r,t,n).join(""),l=Rt(qe(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var d=n(a,"."+l,void 0,o);t.insertRules(o,l,d)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,u=qe(this.baseHash,n.hash),f="",v=0;v<c;v++){var C=this.rules[v];if(typeof C=="string")f+=C,process.env.NODE_ENV!=="production"&&(u=qe(u,C+v));else if(C){var w=Qe(C,r,t,n),E=Array.isArray(w)?w.join(""):w;u=qe(u,E+v),f+=E}}if(f){var m=Rt(u>>>0);if(!t.hasNameForId(o,m)){var L=n(f,"."+m,void 0,o);t.insertRules(o,m,L)}s.push(m)}}return s.join(" ")},e}(),Ro=/^\s*\/\/.*$/gm,es=[":","[",".","#"];function ts(e){var r,t,n,o,s=e===void 0?Ve:e,a=s.options,l=a===void 0?Ve:a,d=s.plugins,c=d===void 0?Et:d,u=new xo(l),f=[],v=function(E){function m(L){if(L)try{E(L+"}")}catch{}}return function(L,U,W,O,h,x,y,D,S,$){switch(L){case 1:if(S===0&&U.charCodeAt(0)===64)return E(U+";"),"";break;case 2:if(D===0)return U+"/*|*/";break;case 3:switch(D){case 102:case 112:return E(W[0]+U),"";default:return U+($===0?"/*|*/":"")}case-2:U.split("/*|*/}").forEach(m)}}}(function(E){f.push(E)}),C=function(E,m,L){return m===0&&es.indexOf(L[t.length])!==-1||L.match(o)?E:"."+r};function w(E,m,L,U){U===void 0&&(U="&");var W=E.replace(Ro,""),O=m&&L?L+" "+m+" { "+W+" }":W;return r=U,t=m,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),u(L||!m?"":m,O)}return u.use([].concat(c,[function(E,m,L){E===2&&L.length&&L[0].lastIndexOf(t)>0&&(L[0]=L[0].replace(n,C))},v,function(E){if(E===-2){var m=f;return f=[],m}}])),w.hash=c.length?c.reduce(function(E,m){return m.name||We(15),qe(E,m.name)},5381).toString():"",w}var Kn=p.createContext();Kn.Consumer;var Jn=p.createContext(),ns=(Jn.Consumer,new Pt),en=ts();function qn(){return p.useContext(Kn)||ns}function Qn(){return p.useContext(Jn)||en}var Rn=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=en);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return We(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=en),this.name+r.hash},e}(),rs=/([A-Z])/,os=/([A-Z])/g,ss=/^ms-/,is=function(e){return"-"+e.toLowerCase()};function er(e){return rs.test(e)?e.replace(os,is).replace(ss,"-ms-"):e}var tr=function(e){return e==null||e===!1||e===""};function Qe(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=Qe(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(tr(e))return"";if(qt(e))return"."+e.styledComponentId;if(ot(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&xt.isElement(d)&&console.warn(Jt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Qe(d,r,t,n)}var c;return e instanceof Rn?t?(e.inject(t,n),e.getName(n)):e:Kt(e)?function u(f,v){var C,w,E=[];for(var m in f)f.hasOwnProperty(m)&&!tr(f[m])&&(Array.isArray(f[m])&&f[m].isCss||ot(f[m])?E.push(er(m)+":",f[m],";"):Kt(f[m])?E.push.apply(E,u(f[m],m)):E.push(er(m)+": "+(C=m,(w=f[m])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||C in bo?String(w).trim():w+"px")+";"));return v?[v+" {"].concat(E,["}"]):E}(e):e.toString()}var nr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function it(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return ot(e)||Kt(e)?nr(Qe(jn(Et,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:nr(Qe(jn(e,t)))}var rr=/invalid hook call/i,Ot=new Set,or=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(rr.test(s))o=!1,Ot.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];n.apply(void 0,[s].concat(l))}},p.useRef(),o&&!Ot.has(t)&&(console.warn(t),Ot.add(t))}catch(s){rr.test(s.message)&&Ot.delete(t)}finally{console.error=n}}},sr=function(e,r,t){return t===void 0&&(t=Ve),e.theme!==t.theme&&e.theme||r||t.theme},as=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cs=/(^-|-$)/g;function tn(e){return e.replace(as,"-").replace(cs,"")}var nn=function(e){return Rt(Xn(e)>>>0)};function It(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var rn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ls=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ds(e,r,t){var n=e[t];rn(r)&&rn(n)?ir(n,r):e[t]=r}function ir(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(rn(a))for(var l in a)ls(l)&&ds(e,a[l],l)}return e}var at=p.createContext();at.Consumer;function us(e){var r=p.useContext(at),t=p.useMemo(function(){return function(n,o){if(!n)return We(14);if(ot(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:We(7)}return Array.isArray(n)||typeof n!="object"?We(8):o?Fe({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(at.Provider,{value:t},e.children):null}var on={};function ar(e,r,t){var n=qt(e),o=!It(e),s=r.attrs,a=s===void 0?Et:s,l=r.componentId,d=l===void 0?function(U,W){var O=typeof U!="string"?"sc":tn(U);on[O]=(on[O]||0)+1;var h=O+"-"+nn("5.3.8"+O+on[O]);return W?W+"-"+h:h}(r.displayName,r.parentComponentId):l,c=r.displayName,u=c===void 0?function(U){return It(U)?"styled."+U:"Styled("+Jt(U)+")"}(e):c,f=r.displayName&&r.componentId?tn(r.displayName)+"-"+r.componentId:r.componentId||d,v=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,C=r.shouldForwardProp;n&&e.shouldForwardProp&&(C=r.shouldForwardProp?function(U,W,O){return e.shouldForwardProp(U,W,O)&&r.shouldForwardProp(U,W,O)}:e.shouldForwardProp);var w,E=new Qo(t,f,n?e.componentStyle:void 0),m=E.isStatic&&a.length===0,L=function(U,W){return function(O,h,x,y){var D=O.attrs,S=O.componentStyle,$=O.defaultProps,G=O.foldedComponentIds,Q=O.shouldForwardProp,P=O.styledComponentId,k=O.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(P);var A=function(te,M,Z){te===void 0&&(te=Ve);var T=Fe({},M,{theme:te}),R={};return Z.forEach(function(B){var z,g,X,_=B;for(z in ot(_)&&(_=_(T)),_)T[z]=R[z]=z==="className"?(g=R[z],X=_[z],g&&X?g+" "+X:g||X):_[z]}),[T,R]}(sr(h,p.useContext(at),$)||Ve,h,D),N=A[0],I=A[1],F=function(te,M,Z,T){var R=qn(),B=Qn(),z=M?te.generateAndInjectStyles(Ve,R,B):te.generateAndInjectStyles(Z,R,B);return process.env.NODE_ENV!=="production"&&p.useDebugValue(z),process.env.NODE_ENV!=="production"&&!M&&T&&T(z),z}(S,y,N,process.env.NODE_ENV!=="production"?O.warnTooManyClasses:void 0),J=x,ne=I.$as||h.$as||I.as||h.as||k,ie=It(ne),H=I!==h?Fe({},h,{},I):h,j={};for(var q in H)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?j.as=H[q]:(Q?Q(q,Yn,ne):!ie||Yn(q))&&(j[q]=H[q]));return h.style&&I.style!==h.style&&(j.style=Fe({},h.style,{},I.style)),j.className=Array.prototype.concat(G,P,F!==P?F:null,h.className,I.className).filter(Boolean).join(" "),j.ref=J,p.createElement(ne,j)}(w,U,W,m)};return L.displayName=u,(w=p.forwardRef(L)).attrs=v,w.componentStyle=E,w.displayName=u,w.shouldForwardProp=C,w.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Et,w.styledComponentId=f,w.target=n?e.target:e,w.withComponent=function(U){var W=r.componentId,O=function(x,y){if(x==null)return{};var D,S,$={},G=Object.keys(x);for(S=0;S<G.length;S++)D=G[S],y.indexOf(D)>=0||($[D]=x[D]);return $}(r,["componentId"]),h=W&&W+"-"+(It(U)?U:tn(Jt(U)));return ar(U,Fe({},O,{attrs:v,componentId:h}),t)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=n?ir({},e.defaultProps,U):U}}),process.env.NODE_ENV!=="production"&&(or(u,f),w.warnTooManyClasses=function(U,W){var O={},h=!1;return function(x){if(!h&&(O[x]=!0,Object.keys(O).length>=200)){var y=W?' with the id of "'+W+'"':"";console.warn("Over 200 classes were generated for component "+U+y+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),h=!0,O={}}}}(u,f)),w.toString=function(){return"."+w.styledComponentId},o&&Oo(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var sn=function(e){return function r(t,n,o){if(o===void 0&&(o=Ve),!xt.isValidElementType(n))return We(1,String(n));var s=function(){return t(n,o,it.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,Fe({},o,{},a))},s.attrs=function(a){return r(t,n,Fe({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(ar,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){sn[e]=sn(e)});var fs=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Un(t),Pt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(Qe(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&Pt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function hs(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=it.apply(void 0,[e].concat(t)),s="sc-global-"+nn(JSON.stringify(o)),a=new fs(o,s);function l(c){var u=qn(),f=Qn(),v=p.useContext(at),C=p.useRef(u.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(w){return typeof w=="string"&&w.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),u.server&&d(C,c,u,v,f),p.useLayoutEffect(function(){if(!u.server)return d(C,c,u,v,f),function(){return a.removeStyles(C,u)}},[C,c,u,v,f]),null}function d(c,u,f,v,C){if(a.isStatic)a.renderStyles(c,Yo,f,C);else{var w=Fe({},u,{theme:sr(u,v,l.defaultProps)});a.renderStyles(c,w,f,C)}}return process.env.NODE_ENV!=="production"&&or(s),p.memo(l)}function Be(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=it.apply(void 0,[e].concat(t)).join(""),s=nn(o);return new Rn(s,o)}var Yt=function(){return p.useContext(at)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const b=sn;var Re={},ps={get exports(){return Re},set exports(e){Re=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",d="hour",c="day",u="week",f="month",v="quarter",C="year",w="date",E="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(P){var k=["th","st","nd","rd"],A=P%100;return"["+P+(k[(A-20)%10]||k[A]||k[0])+"]"}},W=function(P,k,A){var N=String(P);return!N||N.length>=k?P:""+Array(k+1-N.length).join(A)+P},O={s:W,z:function(P){var k=-P.utcOffset(),A=Math.abs(k),N=Math.floor(A/60),I=A%60;return(k<=0?"+":"-")+W(N,2,"0")+":"+W(I,2,"0")},m:function P(k,A){if(k.date()<A.date())return-P(A,k);var N=12*(A.year()-k.year())+(A.month()-k.month()),I=k.clone().add(N,f),F=A-I<0,J=k.clone().add(N+(F?-1:1),f);return+(-(N+(A-I)/(F?I-J:J-I))||0)},a:function(P){return P<0?Math.ceil(P)||0:Math.floor(P)},p:function(P){return{M:f,y:C,w:u,d:c,D:w,h:d,m:l,s:a,ms:s,Q:v}[P]||String(P||"").toLowerCase().replace(/s$/,"")},u:function(P){return P===void 0}},h="en",x={};x[h]=U;var y=function(P){return P instanceof G},D=function P(k,A,N){var I;if(!k)return h;if(typeof k=="string"){var F=k.toLowerCase();x[F]&&(I=F),A&&(x[F]=A,I=F);var J=k.split("-");if(!I&&J.length>1)return P(J[0])}else{var ne=k.name;x[ne]=k,I=ne}return!N&&I&&(h=I),I||!N&&h},S=function(P,k){if(y(P))return P.clone();var A=typeof k=="object"?k:{};return A.date=P,A.args=arguments,new G(A)},$=O;$.l=D,$.i=y,$.w=function(P,k){return S(P,{locale:k.$L,utc:k.$u,x:k.$x,$offset:k.$offset})};var G=function(){function P(A){this.$L=D(A.locale,null,!0),this.parse(A)}var k=P.prototype;return k.parse=function(A){this.$d=function(N){var I=N.date,F=N.utc;if(I===null)return new Date(NaN);if($.u(I))return new Date;if(I instanceof Date)return new Date(I);if(typeof I=="string"&&!/Z$/i.test(I)){var J=I.match(m);if(J){var ne=J[2]-1||0,ie=(J[7]||"0").substring(0,3);return F?new Date(Date.UTC(J[1],ne,J[3]||1,J[4]||0,J[5]||0,J[6]||0,ie)):new Date(J[1],ne,J[3]||1,J[4]||0,J[5]||0,J[6]||0,ie)}}return new Date(I)}(A),this.$x=A.x||{},this.init()},k.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},k.$utils=function(){return $},k.isValid=function(){return this.$d.toString()!==E},k.isSame=function(A,N){var I=S(A);return this.startOf(N)<=I&&I<=this.endOf(N)},k.isAfter=function(A,N){return S(A)<this.startOf(N)},k.isBefore=function(A,N){return this.endOf(N)<S(A)},k.$g=function(A,N,I){return $.u(A)?this[N]:this.set(I,A)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(A,N){var I=this,F=!!$.u(N)||N,J=$.p(A),ne=function(T,R){var B=$.w(I.$u?Date.UTC(I.$y,R,T):new Date(I.$y,R,T),I);return F?B:B.endOf(c)},ie=function(T,R){return $.w(I.toDate()[T].apply(I.toDate("s"),(F?[0,0,0,0]:[23,59,59,999]).slice(R)),I)},H=this.$W,j=this.$M,q=this.$D,te="set"+(this.$u?"UTC":"");switch(J){case C:return F?ne(1,0):ne(31,11);case f:return F?ne(1,j):ne(0,j+1);case u:var M=this.$locale().weekStart||0,Z=(H<M?H+7:H)-M;return ne(F?q-Z:q+(6-Z),j);case c:case w:return ie(te+"Hours",0);case d:return ie(te+"Minutes",1);case l:return ie(te+"Seconds",2);case a:return ie(te+"Milliseconds",3);default:return this.clone()}},k.endOf=function(A){return this.startOf(A,!1)},k.$set=function(A,N){var I,F=$.p(A),J="set"+(this.$u?"UTC":""),ne=(I={},I[c]=J+"Date",I[w]=J+"Date",I[f]=J+"Month",I[C]=J+"FullYear",I[d]=J+"Hours",I[l]=J+"Minutes",I[a]=J+"Seconds",I[s]=J+"Milliseconds",I)[F],ie=F===c?this.$D+(N-this.$W):N;if(F===f||F===C){var H=this.clone().set(w,1);H.$d[ne](ie),H.init(),this.$d=H.set(w,Math.min(this.$D,H.daysInMonth())).$d}else ne&&this.$d[ne](ie);return this.init(),this},k.set=function(A,N){return this.clone().$set(A,N)},k.get=function(A){return this[$.p(A)]()},k.add=function(A,N){var I,F=this;A=Number(A);var J=$.p(N),ne=function(j){var q=S(F);return $.w(q.date(q.date()+Math.round(j*A)),F)};if(J===f)return this.set(f,this.$M+A);if(J===C)return this.set(C,this.$y+A);if(J===c)return ne(1);if(J===u)return ne(7);var ie=(I={},I[l]=n,I[d]=o,I[a]=t,I)[J]||1,H=this.$d.getTime()+A*ie;return $.w(H,this)},k.subtract=function(A,N){return this.add(-1*A,N)},k.format=function(A){var N=this,I=this.$locale();if(!this.isValid())return I.invalidDate||E;var F=A||"YYYY-MM-DDTHH:mm:ssZ",J=$.z(this),ne=this.$H,ie=this.$m,H=this.$M,j=I.weekdays,q=I.months,te=function(R,B,z,g){return R&&(R[B]||R(N,F))||z[B].slice(0,g)},M=function(R){return $.s(ne%12||12,R,"0")},Z=I.meridiem||function(R,B,z){var g=R<12?"AM":"PM";return z?g.toLowerCase():g},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:H+1,MM:$.s(H+1,2,"0"),MMM:te(I.monthsShort,H,q,3),MMMM:te(q,H),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:te(I.weekdaysMin,this.$W,j,2),ddd:te(I.weekdaysShort,this.$W,j,3),dddd:j[this.$W],H:String(ne),HH:$.s(ne,2,"0"),h:M(1),hh:M(2),a:Z(ne,ie,!0),A:Z(ne,ie,!1),m:String(ie),mm:$.s(ie,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:J};return F.replace(L,function(R,B){return B||T[R]||J.replace(":","")})},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(A,N,I){var F,J=$.p(N),ne=S(A),ie=(ne.utcOffset()-this.utcOffset())*n,H=this-ne,j=$.m(this,ne);return j=(F={},F[C]=j/12,F[f]=j,F[v]=j/3,F[u]=(H-ie)/6048e5,F[c]=(H-ie)/864e5,F[d]=H/o,F[l]=H/n,F[a]=H/t,F)[J]||H,I?j:$.a(j)},k.daysInMonth=function(){return this.endOf(f).$D},k.$locale=function(){return x[this.$L]},k.locale=function(A,N){if(!A)return this.$L;var I=this.clone(),F=D(A,N,!0);return F&&(I.$L=F),I},k.clone=function(){return $.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},P}(),Q=G.prototype;return S.prototype=Q,[["$ms",s],["$s",a],["$m",l],["$H",d],["$W",c],["$M",f],["$y",C],["$D",w]].forEach(function(P){Q[P[1]]=function(k){return this.$g(k,P[0],P[1])}}),S.extend=function(P,k){return P.$i||(P(k,G,S),P.$i=!0),S},S.locale=D,S.isDayjs=y,S.unix=function(P){return S(1e3*P)},S.en=x[h],S.Ls=x,S.p={},S})})(ps);const Y=Re,wt="reactSchedulerOutsideWrapper",Ie="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",gs=hs`

  #${wt} {
    font-family: ${Ie};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${wt} *,
 #${wt} *:before,
 #${wt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,ms={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},ys={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},ct=`
margin: 0;
padding: 0;
`,et=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;b.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const Ce=50,ze=24,tt=16,lt=40,Lt=lt+tt+ze,dt=84,pe=56,Ae=196,Ye=12,$e=50,ut=24,St=16,an=40,vs=ut+St+an,cr=24,lr=52,Ge={topRow:`600 14px ${Ie}`,middleRow:`400 10px ${Ie}`,bottomRow:{name:`600 14px ${Ie}`,number:`600 10px ${Ie}`,hoursInDay:`400 9px ${Ie}`}},ft=3,dr=12,Nt=24,xs="reactSchedulerCanvasHeaderWrapper",ur="reactSchedulerCanvasWrapper",Xe=wt,bs=4,Ft=48,Ue=5,ws=40,fr=8,cn=ze/2+2,hr=tt/2+ze+1,pr=2,ke=60,Pe=21,gr=58,mr="reactSchedulerBody",yr=e=>e%4===0&&e%100>0||e%400===0?366:365,ln=e=>{const r=e.day();return r!==0&&r!==6},vr=(e,r)=>Y(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),xr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:ln(e),isCurrentDay:e.isSame(Y(),"day"),year:parseInt(e.format("YYYY"))}),dn=(e,r,t,n,o,s,a,l=!1)=>{s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.mode==="dark"?a.colors.primary:"#F2F6F4",e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,pe);const d=a.mode==="dark";e.strokeStyle=d?a.colors.border:"#EEF3F0",e.beginPath(),e.moveTo(r+n-.5,t),e.lineTo(r+n-.5,t+pe),e.stroke(),e.strokeStyle=d?a.colors.border:"#E4EAE7",e.beginPath(),e.moveTo(r,t+.5),e.lineTo(r+n,t+.5),e.stroke(),l&&(e.strokeStyle=d?a.colors.today:"#5C8374",e.beginPath(),e.moveTo(r+.5,t),e.lineTo(r+.5,t+pe),e.stroke())},un=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Pe},Ss=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=un(a,s);for(let d=0;d<=t;d++){const c=Y(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),u=c.isSame(Y(),"day"),f=c.date()===1;dn(e,d*Ce,a*pe+l,Ce,ln(c),u,o,f)}}},Cs=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},ks=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*Ye;const d=r*pe+s.length*Pe;for(let c=0;c<=t;c++){const f=Y(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(Y(),"week");for(let v=0;v<r;v++){const C=un(v,s);dn(e,a,v*pe+C,dt,!0,f,o)}a+=dt}for(let c=0;c<t;c++){const u=vr(n,c)*Ye;Cs(e,l,d,o),l+=u}},Ms=(e,r,t,n,o,s=[])=>{const a=Y(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const d=un(l,s);for(let c=0;c<=t;c++){let u;c===Math.floor(t/2)?u=Y():c>Math.floor(t/2)?u=Y().add(c-Math.floor(t/2),"hours"):u=Y().subtract(Math.floor(t/2)-l,"hours");const f=a.isSame(Y(),"day")&&u.isSame(Y(),"hour");dn(e,c*$e+$e/2-.5,l*pe+d,$e,ln(u),f,o)}}},$s=(e,r,t,n,o=!1)=>{const s=t*pe+r*Pe,a=e.canvas.width;e.fillStyle=o?n.colors.subcontractBorder+"40":n.mode==="dark"?n.colors.primary+"80":"#E9EFEC",e.fillRect(0,s,a,Pe)},Ds=(e,r,t,n,o,s,a=[],l=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(ur)){switch(r){case 0:ks(e,t,n,o,s,a);break;case 1:Ss(e,t,n,o,s,a);break;case 2:Ms(e,t,n,o,s,a);break}for(let c=0;c<a.length;c++)$s(e,c,a[c],s,a[c]===l);if(r===1){const c=Y(`${o.year}-${o.month+1}-${o.dayOfMonth}`),u=t*pe+a.length*Pe;e.strokeStyle=s.mode==="dark"?s.colors.today:"#5C8374",e.setLineDash([]);for(let f=0;f<=n;f++)if(c.add(f,"days").date()===1){const v=f*Ce+.5;e.beginPath(),e.moveTo(v,0),e.lineTo(v,u),e.stroke()}}}};var fn={},Es={get exports(){return fn},set exports(e){fn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=a(this).startOf(n).add(1,n).date(c),f=a(this).endOf(t);if(u.isBefore(f))return 1}var v=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),C=this.diff(v,t,!0);return C<0?a(this).startOf("week").week():Math.ceil(C)},l.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(Es);const _s=fn;var hn={},Ts={get exports(){return hn},set exports(e){hn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Ts);const As=hn;var pn={},Ps={get exports(){return pn},set exports(e){pn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var u,f,v,C,w=a(this),E=(u=this.isoWeekYear(),f=this.$u,v=(f?s.utc:s)().year(u).startOf("year"),C=4-v.isoWeekday(),v.isoWeekday()>4&&(C+=7),v.add(C,t));return w.diff(E,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var d=l.startOf;l.startOf=function(c,u){var f=this.$utils(),v=!!f.u(u)||u;return f.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(c,u)}}})})(Ps);const Os=pn;var gn={},Is={get exports(){return gn},set exports(e){gn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,d){var c=o(s),u=o(a),f=(d=d||"()")[0]==="(",v=d[1]===")";return(f?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(u,l):!this.isAfter(u,l))||(f?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(u,l):!this.isBefore(u,l))}}})})(Is);const Ys=gn;var mn={},Ls={get exports(){return mn},set exports(e){mn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,u=2592e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:u,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},C=function(h){return h instanceof O},w=function(h,x,y){return new O(h,y,x.$l)},E=function(h){return n.p(h)+"s"},m=function(h){return h<0},L=function(h){return m(h)?Math.ceil(h):Math.floor(h)},U=function(h){return Math.abs(h)},W=function(h,x){return h?m(h)?{negative:!0,format:""+U(h)+x}:{negative:!1,format:""+h+x}:{negative:!1,format:""}},O=function(){function h(y,D,S){var $=this;if(this.$d={},this.$l=S,y===void 0&&(this.$ms=0,this.parseFromMilliseconds()),D)return w(y*v[E(D)],this);if(typeof y=="number")return this.$ms=y,this.parseFromMilliseconds(),this;if(typeof y=="object")return Object.keys(y).forEach(function(P){$.$d[E(P)]=y[P]}),this.calMilliseconds(),this;if(typeof y=="string"){var G=y.match(f);if(G){var Q=G.slice(2).map(function(P){return P!=null?Number(P):0});return this.$d.years=Q[0],this.$d.months=Q[1],this.$d.weeks=Q[2],this.$d.days=Q[3],this.$d.hours=Q[4],this.$d.minutes=Q[5],this.$d.seconds=Q[6],this.calMilliseconds(),this}}return this}var x=h.prototype;return x.calMilliseconds=function(){var y=this;this.$ms=Object.keys(this.$d).reduce(function(D,S){return D+(y.$d[S]||0)*v[S]},0)},x.parseFromMilliseconds=function(){var y=this.$ms;this.$d.years=L(y/c),y%=c,this.$d.months=L(y/u),y%=u,this.$d.days=L(y/l),y%=l,this.$d.hours=L(y/a),y%=a,this.$d.minutes=L(y/s),y%=s,this.$d.seconds=L(y/o),y%=o,this.$d.milliseconds=y},x.toISOString=function(){var y=W(this.$d.years,"Y"),D=W(this.$d.months,"M"),S=+this.$d.days||0;this.$d.weeks&&(S+=7*this.$d.weeks);var $=W(S,"D"),G=W(this.$d.hours,"H"),Q=W(this.$d.minutes,"M"),P=this.$d.seconds||0;this.$d.milliseconds&&(P+=this.$d.milliseconds/1e3);var k=W(P,"S"),A=y.negative||D.negative||$.negative||G.negative||Q.negative||k.negative,N=G.format||Q.format||k.format?"T":"",I=(A?"-":"")+"P"+y.format+D.format+$.format+N+G.format+Q.format+k.format;return I==="P"||I==="-P"?"P0D":I},x.toJSON=function(){return this.toISOString()},x.format=function(y){var D=y||"YYYY-MM-DDTHH:mm:ss",S={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return D.replace(d,function($,G){return G||String(S[$])})},x.as=function(y){return this.$ms/v[E(y)]},x.get=function(y){var D=this.$ms,S=E(y);return S==="milliseconds"?D%=1e3:D=S==="weeks"?L(D/v[S]):this.$d[S],D===0?0:D},x.add=function(y,D,S){var $;return $=D?y*v[E(D)]:C(y)?y.$ms:w(y,this).$ms,w(this.$ms+$*(S?-1:1),this)},x.subtract=function(y,D){return this.add(y,D,!0)},x.locale=function(y){var D=this.clone();return D.$l=y,D},x.clone=function(){return w(this.$ms,this)},x.humanize=function(y){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!y)},x.milliseconds=function(){return this.get("milliseconds")},x.asMilliseconds=function(){return this.as("milliseconds")},x.seconds=function(){return this.get("seconds")},x.asSeconds=function(){return this.as("seconds")},x.minutes=function(){return this.get("minutes")},x.asMinutes=function(){return this.as("minutes")},x.hours=function(){return this.get("hours")},x.asHours=function(){return this.as("hours")},x.days=function(){return this.get("days")},x.asDays=function(){return this.as("days")},x.weeks=function(){return this.get("weeks")},x.asWeeks=function(){return this.as("weeks")},x.months=function(){return this.get("months")},x.asMonths=function(){return this.as("months")},x.years=function(){return this.get("years")},x.asYears=function(){return this.as("years")},h}();return function(h,x,y){t=y,n=y().$utils(),y.duration=function($,G){var Q=y.locale();return w($,{$l:Q},G)},y.isDuration=C;var D=x.prototype.add,S=x.prototype.subtract;x.prototype.add=function($,G){return C($)&&($=$.asMilliseconds()),D.bind(this)($,G)},x.prototype.subtract=function($,G){return C($)&&($=$.asMilliseconds()),S.bind(this)($,G)}}})})(Ls);const Ns=mn;var Fs="Expected a function",br=0/0,zs="[object Symbol]",Hs=/^\s+|\s+$/g,Ws=/^[-+]0x[0-9a-f]+$/i,Bs=/^0b[01]+$/i,js=/^0o[0-7]+$/i,Zs=parseInt,Vs=typeof Me=="object"&&Me&&Me.Object===Object&&Me,Gs=typeof self=="object"&&self&&self.Object===Object&&self,Xs=Vs||Gs||Function("return this")(),Us=Object.prototype,Ks=Us.toString,Js=Math.max,qs=Math.min,yn=function(){return Xs.Date.now()};function Qs(e,r,t){var n,o,s,a,l,d,c=0,u=!1,f=!1,v=!0;if(typeof e!="function")throw new TypeError(Fs);r=wr(r)||0,vn(t)&&(u=!!t.leading,f="maxWait"in t,s=f?Js(wr(t.maxWait)||0,r):s,v="trailing"in t?!!t.trailing:v);function C(x){var y=n,D=o;return n=o=void 0,c=x,a=e.apply(D,y),a}function w(x){return c=x,l=setTimeout(L,r),u?C(x):a}function E(x){var y=x-d,D=x-c,S=r-y;return f?qs(S,s-D):S}function m(x){var y=x-d,D=x-c;return d===void 0||y>=r||y<0||f&&D>=s}function L(){var x=yn();if(m(x))return U(x);l=setTimeout(L,E(x))}function U(x){return l=void 0,v&&n?C(x):(n=o=void 0,a)}function W(){l!==void 0&&clearTimeout(l),c=0,n=d=o=l=void 0}function O(){return l===void 0?a:U(yn())}function h(){var x=yn(),y=m(x);if(n=arguments,o=this,d=x,y){if(l===void 0)return w(d);if(f)return l=setTimeout(L,r),C(d)}return l===void 0&&(l=setTimeout(L,r)),a}return h.cancel=W,h.flush=O,h}function vn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function Rs(e){return!!e&&typeof e=="object"}function ei(e){return typeof e=="symbol"||Rs(e)&&Ks.call(e)==zs}function wr(e){if(typeof e=="number")return e;if(ei(e))return br;if(vn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=vn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(Hs,"");var t=Bs.test(e);return t||js.test(e)?Zs(e.slice(2),t?2:8):Ws.test(e)?br:+e}var xn=Qs;const zt=[0,1,2];var Ct=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(Ct||{});const Sr=e=>zt.includes(e),ht=e=>{var n;const t=(((n=document.getElementById(Xe))==null?void 0:n.clientWidth)||0)-Ae;switch(e){case 1:return Math.ceil(t/Ce)*ft;case 2:return Math.ceil(t/$e)*ft;default:return Math.ceil(t/dt)*ft}},ti=e=>ht(e)/ft,Ht=(e,r)=>{const t=ht(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},ni=(e,r)=>{const t=Ht(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},bn=()=>{var t;const e=((t=document.getElementById(Xe))==null?void 0:t.clientWidth)||0;return Math.max(0,e-Ae)*ft},Cr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:Y(),jumpDate:null,isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});Y.extend(_s),Y.extend(As),Y.extend(Os),Y.extend(Ys),Y.extend(Ns);const ri=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=Y(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:d})=>{const{zoom:c,maxRecordsPerPage:u=50}=n,[f,v]=p.useState(c),[C,w]=p.useState(Y()),[E,m]=p.useState(null),[L,U]=p.useState(!1),[W,O]=p.useState(ht(f)),h=zt[f]!==zt[zt.length-1],x=f!==0,y=p.useMemo(()=>ni(C,f),[C,f]),D=Ht(C,f).startDate,S=Y(D).dayOfYear(),$=xr(D),G=p.useRef(null),Q=p.useRef(!1),P=p.useRef(null),[k,A]=p.useState([{x:0,y:0}]),N=p.useCallback((B,z="auto")=>{var X,_,V,ee;const g=bn();switch(B){case"back":return(X=G.current)==null?void 0:X.scrollTo({behavior:z,left:g/3});case"forward":return(_=G.current)==null?void 0:_.scrollTo({behavior:z,left:g/3});case"middle":{const K=g/ft/4;return(V=G.current)==null?void 0:V.scrollTo({behavior:z,left:g/2-K})}default:return(ee=G.current)==null?void 0:ee.scrollTo({behavior:z,left:g/2})}},[]),I=B=>{A(B)},F=p.useCallback(B=>{const z=ti(f);let g;switch(f){case 0:g=z*7;break;case 1:g=z;break;case 2:g=Math.ceil(z/Nt);break}xn(()=>{switch((B==="forward"||B==="back")&&(Q.current=!0),P.current=B,B){case"back":w(_=>_.subtract(g,"days"));break;case"forward":w(_=>_.add(g,"days"));break;case"middle":w(Y());break}s==null||s(y)},300)()},[s,y,f]);p.useEffect(()=>{P.current&&(N(P.current),P.current=null)},[C,N]),p.useEffect(()=>{G.current=document.getElementById(Xe),O(ht(f))},[f]),p.useEffect(()=>{const B=()=>O(ht(f));return window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[f]),p.useEffect(()=>{s==null||s(y)},[s,y]),p.useEffect(()=>{U(!1)},[o]),p.useEffect(()=>{L||(N("middle"),U(!0),w(o))},[o,L,N]);const J=()=>{t||(w(B=>f===2?B.add(cr,"hours"):B.add(pr,"weeks")),s==null||s(y))},ne=p.useCallback(()=>{t||F("forward")},[t,F]),ie=()=>{t||(w(B=>f===2?B.subtract(cr,"hours"):B.subtract(pr,"weeks")),s==null||s(y))},H=p.useCallback(()=>{!L||t||F("back")},[L,t,F]),j=p.useCallback(()=>{t||(P.current="middle",w(Y()),m(null),s==null||s(y))},[t,s,y]),q=p.useCallback(B=>{if(t)return;const z=Y(B).startOf("day");z.isValid()&&(P.current="middle",w(z),m(z),s==null||s(y))},[t,s,y]);p.useEffect(()=>{if(!E)return;const B=()=>m(null);return document.addEventListener("mousedown",B,{once:!0}),()=>document.removeEventListener("mousedown",B)},[E]);const te=()=>Z(f+1),M=()=>Z(f-1),Z=B=>{Sr(B)&&(v(B),O(ht(B)),s==null||s(y))},T=()=>a==null?void 0:a(),{Provider:R}=Cr;return i.jsx(R,{value:{data:e,config:n,handleGoNext:J,handleScrollNext:ne,handleGoPrev:ie,handleScrollPrev:H,handleGoToday:j,goToDate:q,zoomIn:te,zoomOut:M,setZoom:Z,zoom:f,isNextZoom:h,isPrevZoom:x,date:C,jumpDate:E,isLoading:t,cols:W,startDate:$,dayOfYear:S,toggleDisplayActiveUnits:T,tilesCoords:k,updateTilesCoords:I,recordsThreshold:u,onClearFilterData:l,suppressNextSlideRef:Q,toolbarActions:d},children:r})},He=()=>p.useContext(Cr),kr=(e,r,t)=>{const n=Math.max(0,r),o=Math.max(0,t);e.canvas.width=n*window.devicePixelRatio,e.canvas.height=o*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=o+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Mr=()=>{var e;return typeof window<"u"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)},$r=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*pe+n*Pe;if(e>=s+Pe)n++;else if(e>=s)return o*pe+n*Pe-n*Pe}return t-n*Pe},oi=5,Dr=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>oi},pt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},si=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:d=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(Z=>({...Z,data:[Z.data]})):r:e,{enabled:u=!0,isDraggable:f,resourceOnly:v=!1,isValidDrop:C}=a,[w,E]=p.useState("idle"),[m,L]=p.useState(null),[U,W]=p.useState({x:0,y:0}),[O,h]=p.useState({width:0,height:48}),[x,y]=p.useState(null),[D,S]=p.useState(!0),$=p.useRef({x:0,y:0}),G=p.useRef({x:0,y:0}),Q=p.useRef({x:0,y:0}),P=p.useRef(null),k=p.useRef(null),A=p.useRef(0),N=p.useRef(null),I=p.useCallback(Z=>!u||Z.draggable===!1?!1:f?f(Z):!0,[u,f]),F=p.useCallback((Z,T)=>{const R=$r(T,d),B=Math.floor(R/pe);let z;switch(t){case 0:z=Ye*7;break;case 1:z=Ce;break;case 2:z=$e;break;default:z=Ce}const g=Math.floor(Z/z);let X;const _=Y().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:X=_.add(g*7,"days").toDate();break;case 1:X=_.add(g,"days").toDate();break;case 2:X=_.add(g,"hours").toDate();break;default:X=_.toDate()}return{snappedDate:X,snappedResourceIndex:B}},[t,n,d]),J=p.useCallback((Z,T,R,B)=>{const z=[],g=T.getTime(),X=R.getTime(),_=c.find(ee=>ee.id===B);if(!_)return z;const V=[];for(const ee of _.data)Array.isArray(ee)?V.push(...ee):V.push(ee);for(const ee of V){if(ee.segmentId===Z.segmentId)continue;const K=ee.startDate.getTime(),ce=ee.endDate.getTime();if(g>=K&&g<ce||X>K&&X<=ce||g<=K&&X>=ce){const de=new Date(Math.max(g,K)),ge=new Date(Math.min(X,ce)),Se=ge.getTime()-de.getTime();z.push({event:ee,conflictStart:de,conflictEnd:ge,overlapDuration:Se})}}return z},[c]),ne=p.useCallback((Z,T,R,B)=>{const z=[],g=T.getTime(),X=R.getTime(),_=Y(T).format("YYYY-MM-DD"),V=c.find(K=>K.id===B);if(!V)return z;const ee=[];for(const K of V.data)Array.isArray(K)?ee.push(...K):ee.push(K);for(const K of ee){if(K.segmentId===Z.segmentId)continue;const ce=K.startDate.getTime(),he=K.endDate.getTime(),de=Y(K.startDate).format("YYYY-MM-DD"),ge=Y(K.endDate).format("YYYY-MM-DD"),Se=Y(R).format("YYYY-MM-DD");if(!(de===_||ge===_||de===Se||ge===Se||Y(K.startDate).isBefore(T,"day")&&Y(K.endDate).isAfter(R,"day"))||g>=ce&&g<he||X>ce&&X<=he||g<=ce&&X>=he)continue;let fe,De;he<=g?(fe=g-he,De="before"):(fe=ce-X,De="after"),z.push({event:K,timeGap:fe,position:De})}return z.sort((K,ce)=>K.timeGap-ce.timeGap)},[c]),ie=p.useCallback((Z,T,R)=>{const B=F(T,R);let z,g;if(v)z=Z.startDate,g=Z.endDate;else{const he=Y(Z.endDate).diff(Z.startDate);z=B.snappedDate,g=Y(z).add(he,"milliseconds").toDate()}let X=0,_="",V;for(const he of e){const de=Math.max(he.data.length,1);if(B.snappedResourceIndex<X+de){_=he.id,V=he.capacity;break}X+=de}if(!_)return null;let ee=!0;V!==void 0&&Z.totalPassengers!==void 0&&(ee=Z.totalPassengers<=V);const K=J(Z,z,g,_),ce=K.length===0?ne(Z,z,g,_):[];return{startDate:z,endDate:g,resourceId:_,resourceIndex:B.snappedResourceIndex,resourceCapacity:V,hasCapacity:ee,conflicts:K,hasConflict:K.length>0,nearbyEvents:ce}},[F,e,v,J,ne]),H=p.useCallback((Z,T)=>{if(!s)return;const R=Date.now();if(R-A.current<100)return;A.current=R;const B={event:Z,currentStartDate:T.startDate,currentEndDate:T.endDate,currentResourceId:T.resourceId,conflicts:T.conflicts};s(B)},[s]),j=p.useCallback((Z,T)=>{if(!I(Z)||!l.current)return;T.preventDefault(),T.stopPropagation();const R=T.target.closest('[style*="left"]');let B=0,z=0;R&&R.style.left&&R.style.top&&(B=parseInt(R.style.left),z=parseInt(R.style.top));const g=pt(T.clientX,T.clientY,l.current);$.current={x:B,y:z},G.current={x:T.clientX,y:T.clientY},Q.current={x:g.x-B,y:20},N.current={startDate:Z.startDate,endDate:Z.endDate,resourceId:""};for(const V of e){for(const ee of V.data)if(ee.some(K=>K.segmentId===Z.segmentId)){N.current.resourceId=V.id;break}if(N.current.resourceId)break}L(Z),E("potential"),W({x:B,y:z});let X=100,_=48;if(R){const V=R.getBoundingClientRect();X=V.width,_=V.height}h({width:X,height:_})},[I,l,e,t]),q=p.useCallback(Z=>{if(!l.current)return;let T=l.current;for(;T&&T!==document.body;){const K=window.getComputedStyle(T);if(T.scrollHeight>T.clientHeight&&(K.overflowY==="auto"||K.overflowY==="scroll"||K.overflow==="auto"||K.overflow==="scroll"))break;T=T.parentElement}(!T||T===document.body)&&(T=document.documentElement);const R=T.getBoundingClientRect(),B=Z.clientY,z=50,g=12,X=B-R.top,_=R.bottom-B;let V=!1,ee=0;X<z&&X>0?(V=!0,ee=-g*(1-X/z)):_<z&&_>0&&(V=!0,ee=g*(1-_/z)),V?(k.current&&cancelAnimationFrame(k.current),k.current=requestAnimationFrame(()=>{T.scrollTop+=ee,w==="dragging"&&q(Z)})):k.current&&(cancelAnimationFrame(k.current),k.current=null)},[l,w]),te=p.useCallback(Z=>{if(w==="idle"||w==="animating"||!m||!l.current)return;const T={x:Z.clientX,y:Z.clientY};if(w==="potential")if(Dr(G.current,T))E("dragging");else return;q(Z);const R=pt(Z.clientX,Z.clientY,l.current);P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>{const B={x:R.x-Q.current.x,y:R.y-Q.current.y};W(B);const z=ie(m,R.x,R.y);if(z&&C){const g={event:m,currentStartDate:z.startDate,currentEndDate:z.endDate,currentResourceId:z.resourceId,conflicts:z.conflicts};z.hasConflict=!C(g)}if(y(z),z){const g=z.hasCapacity!==!1;S(g),H(m,z)}})},[w,m,l,ie,H,C,q]),M=p.useCallback(async Z=>{if(w==="idle"||w==="animating")return;const T={x:Z.clientX,y:Z.clientY};if(!Dr(G.current,T)||w==="potential"){E("idle"),L(null),y(null);return}if(!m||!x||!N.current){E("idle"),L(null),y(null);return}if(x.hasCapacity===!1){S(!1),E("animating"),W($.current),setTimeout(()=>{E("idle"),L(null),y(null),S(!0)},300);return}const B={event:m,originalStartDate:N.current.startDate,originalEndDate:N.current.endDate,originalResourceId:N.current.resourceId,newStartDate:x.startDate,newEndDate:x.endDate,newResourceId:x.resourceId,hasConflict:x.hasConflict,conflicts:x.conflicts};let z=!0;if(o)try{const g=o(B);z=g instanceof Promise?await g:g}catch{z=!1}z?(S(!0),E("idle"),L(null),y(null)):(S(!1),E("animating"),W($.current),setTimeout(()=>{E("idle"),L(null),y(null),S(!0)},300))},[w,m,x,o,C]);return p.useEffect(()=>{if(w==="potential"||w==="dragging"){const Z=R=>te(R),T=R=>M(R);return document.addEventListener("mousemove",Z),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",T)}}else return()=>{}},[w,te,M]),p.useEffect(()=>()=>{P.current&&(cancelAnimationFrame(P.current),P.current=null),k.current&&(cancelAnimationFrame(k.current),k.current=null)},[]),p.useEffect(()=>{(w==="idle"||w==="animating")&&(P.current&&(cancelAnimationFrame(P.current),P.current=null),k.current&&(cancelAnimationFrame(k.current),k.current=null))},[w]),p.useEffect(()=>{(w==="dragging"||w==="potential")&&(w==="dragging"?(E("animating"),W($.current),setTimeout(()=>{E("idle"),L(null),y(null)},300)):(E("idle"),L(null),y(null)))},[t]),p.useEffect(()=>{if((w==="dragging"||w==="potential")&&m){let Z=!1;for(const T of e){for(const R of T.data)if(R.some(B=>B.segmentId===m.segmentId)){Z=!0;break}if(Z)break}Z||(w==="dragging"?(E("animating"),W($.current),setTimeout(()=>{E("idle"),L(null),y(null)},300)):(E("idle"),L(null),y(null)))}},[e,w,m]),{dragState:w,draggedEvent:m,ghostPosition:U,ghostDimensions:O,dropTarget:x,isValidDrop:D,handleDragStart:j,isDraggable:I,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:v}},ii=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:d,separatorRowIndices:c=[]})=>{const{enabled:u=!1,isSelectable:f}=a,v=u&&!!o,C=p.useCallback(g=>{let X=0;for(const _ of c)_<=g&&X++;return g*pe+X*Pe},[c]),[w,E]=p.useState("idle"),[m,L]=p.useState(null),[U,W]=p.useState(null),[O,h]=p.useState(null),[x,y]=p.useState(!1),[D,S]=p.useState([]),[$,G]=p.useState(!1),Q=p.useRef(null),P=p.useRef(null),k=p.useRef(null),A=p.useRef(null),N=p.useCallback(()=>{switch(t){case 0:return Ye*7;case 1:return Ce;case 2:return $e;default:return Ce}},[t]),I=p.useCallback(g=>{const X=N(),_=Math.floor(g/X),V=Y().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return V.add(_*7,"days").toDate();case 1:return V.add(_,"days").toDate();case 2:return V.add(_,"hours").toDate();default:return V.toDate()}},[t,n,N]),F=p.useCallback(g=>{const X=$r(g,c),_=Math.floor(X/pe);let V=0;for(const ee of e){const K=Math.max(ee.data.length,1);if(_<V+K)return{resourceId:ee.id,resourceIndex:_,resourceLabel:ee.label};V+=K}return null},[e,c]),J=p.useCallback(g=>{const X=N();return Math.floor(g/X)*X},[N]),ne=p.useCallback((g,X,_,V=[])=>{const ee=[],ce=(r||e).find(ge=>ge.id===g),he=X.getTime(),de=_.getTime();if(ce){const ge=ce.data[0],Se=ge&&Array.isArray(ge)?ce.data.flat():ce.data;for(const me of Se){const ae=new Date(me.startDate).getTime(),fe=new Date(me.endDate).getTime();if(he<fe&&de>ae){const De=new Date(Math.max(he,ae)),Oe=new Date(Math.min(de,fe)),ue=Oe.getTime()-De.getTime();ee.push({event:me,conflictStart:De,conflictEnd:Oe,overlapDuration:ue})}}}for(const ge of V){if(ge.resourceId!==g)continue;const Se=ge.startDate.getTime(),me=ge.endDate.getTime();if(he<me&&de>Se){const ae=new Date(Math.max(he,Se)),fe=new Date(Math.min(de,me)),De=fe.getTime()-ae.getTime(),Oe={segmentId:`pending-${ge.startDate.getTime()}`,reservationId:`pending-${ge.startDate.getTime()}`,startDate:ge.startDate,endDate:ge.endDate,occupancy:0,title:`New Event (${ge.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ee.push({event:Oe,conflictStart:ae,conflictEnd:fe,overlapDuration:De})}}return ee},[e,r]),ie=p.useCallback(g=>{if(!v||d||!l.current||g.button!==0)return;const X=g.target;if(X.closest("[data-segment-id]")||X.closest("[data-multi-select-ui]"))return;const _=pt(g.clientX,g.clientY,l.current),V=F(_.y);if(!V)return;Q.current={x:g.clientX,y:g.clientY},P.current=V.resourceIndex;const ee=J(_.x),K=N(),ce=C(V.resourceIndex);L(_),W(_),h({x:ee,y:ce,width:K,height:pe}),E("selecting")},[v,d,l,F,J,N,C]),H=p.useCallback(g=>{W(g);const X=N(),_=J((m==null?void 0:m.x)||0),V=J(g.x),ee=C(P.current),K=Math.min(_,V),ce=Math.max(_,V)+X;h({x:K,y:ee,width:ce-K,height:pe})},[m,N,J,C]),j=p.useCallback(()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null)},[]),q=p.useCallback((g,X)=>{const _=document.getElementById(Xe);if(!_||!l.current)return;const V=_.getBoundingClientRect(),ee=60,K=12,ce=g-(V.left+Ae),he=V.right-g;let de=0;ce<ee?de=-K*(1-Math.max(0,ce)/ee):he<ee&&(de=K*(1-Math.max(0,he)/ee)),j(),de!==0&&(A.current=requestAnimationFrame(()=>{_.scrollLeft+=de,H(pt(g,X,l.current)),q(g,X)}))},[l,H,j]),te=p.useCallback(g=>{if(w!=="selecting"||!l.current||P.current===null)return;const X=pt(g.clientX,g.clientY,l.current);k.current&&cancelAnimationFrame(k.current),k.current=requestAnimationFrame(()=>H(X)),q(g.clientX,g.clientY)},[w,l,H,q]),M=p.useCallback(g=>{if(w!=="selecting")return;if(j(),!l.current||!m||!Q.current){E("idle"),L(null),W(null),h(null);return}const X=pt(g.clientX,g.clientY,l.current),_=F(m.y);if(!_){E("idle"),L(null),W(null),h(null);return}const V=Math.min(m.x,X.x),ee=Math.max(m.x,X.x),K=I(V),ce=I(ee),he=Y(ce).hour(23).minute(59).second(0).millisecond(0).toDate();if(f&&!f(_.resourceId,K,he)){E("idle"),L(null),W(null),h(null);return}const de=ne(_.resourceId,K,he,D),ge=de.length>0,Se={startDate:K,endDate:he,resourceId:_.resourceId,resourceLabel:_.resourceLabel,zoomLevel:t,hasConflict:ge,conflicts:ge?de:void 0};if(x)S(me=>[...me,Se]),G(!0);else if(o){const me=o(Se),ae=fe=>{fe!=null&&fe.continueMultiSelect&&(y(!0),S([Se]),G(!0))};me instanceof Promise?me.then(ae):ae(me)}E("idle"),L(null),W(null),h(null),Q.current=null,P.current=null},[w,l,m,F,I,f,o,t,x,ne,D,j]),Z=p.useCallback(()=>{if(D.length>0&&s){G(!1);const g=s(D),X=_=>{_!=null&&_.continueMultiSelect?G(!0):(S([]),y(!1),G(!1))};g instanceof Promise?g.then(X):X(g);return}S([]),y(!1),G(!1)},[D,s]),T=p.useCallback(()=>{S([]),y(!1),G(!1)},[]),R=p.useCallback(g=>{S(X=>{const _=X.filter((V,ee)=>ee!==g);return _.length===0&&(y(!1),G(!1)),_})},[]),B=p.useCallback((g,X)=>{S(_=>_.map((V,ee)=>{if(ee!==g)return V;const K={...V,...X},ce=_.filter((de,ge)=>ge!==g),he=ne(K.resourceId,K.startDate,K.endDate,ce);return{...K,hasConflict:he.length>0,conflicts:he.length>0?he:void 0}}))},[ne]),z=p.useCallback(g=>{g.key==="Escape"&&(w==="selecting"?(j(),E("idle"),L(null),W(null),h(null),Q.current=null,P.current=null):x&&D.length>0&&(S([]),y(!1),G(!1)))},[w,x,D.length,j]);return p.useEffect(()=>{if(w==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",M),document.addEventListener("keydown",z),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",M),document.removeEventListener("keydown",z)}},[w,te,M,z]),p.useEffect(()=>{if(x&&D.length>0)return document.addEventListener("keydown",z),()=>{document.removeEventListener("keydown",z)}},[x,D.length,z]),p.useEffect(()=>()=>{k.current&&(cancelAnimationFrame(k.current),k.current=null),j()},[j]),p.useEffect(()=>{d&&w==="selecting"&&(j(),E("idle"),L(null),W(null),h(null),Q.current=null,P.current=null)},[d,w,j]),{selectionState:w,selectionStart:m,selectionEnd:U,selectionBox:O,handleGridMouseDown:ie,isEnabled:v,pendingSelections:D,confirmSelections:Z,clearSelections:T,removeSelection:R,updateSelection:B,isMultiSelectActive:x,hasUnconfirmedSelections:$}},ai=b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,ci=b.div`
  position: relative;
`,li=b.canvas``;b.canvas``;const di=b.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Er=b.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,ui=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:a,onEventDrag:l,draggableConfig:d,onDragStateChange:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:v,separatorRowIndices:C=[],subcontractSeparatorRow:w=-1,fadingUnitIds:E},m){const L=p.useRef(!1),{handleScrollNext:U,handleScrollPrev:W,date:O,isLoading:h,cols:x,startDate:y,suppressNextSlideRef:D,config:S}=He(),$=p.useRef(null),G=p.useRef(null),Q=p.useRef(t),P=p.useRef(O),k=p.useRef(null),A=p.useRef(null),N=p.useRef(null),I=p.useRef(null),[F,J]=p.useState(!1),ne=Yt(),{dragState:ie,draggedEvent:H,ghostPosition:j,ghostDimensions:q,dropTarget:te,isValidDrop:M,handleDragStart:Z,isDraggable:T,draggingEventId:R,resourceOnly:B}=si({data:n,baseData:o||n,zoom:r,startDate:y,onEventDrop:a,onEventDrag:l,draggableConfig:d,gridRef:I,separatorRowIndices:C});p.useEffect(()=>{const ue=ie==="dragging"||ie==="potential";J(ue),c&&c(ue)},[ie,c]);const z=p.useRef(!1),g=p.useRef(O),X=p.useRef(null);p.useEffect(()=>{var Ee;const ue=g.current;if(g.current=O,!z.current){z.current=!0;return}if(D!=null&&D.current){D.current=!1;return}const re=I.current;if(!(re!=null&&re.animate))return;const le=O.isAfter(ue)?48:-48;(Ee=X.current)==null||Ee.cancel(),re.style.willChange="transform";const se=re.animate([{transform:`translateX(${le}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),we=()=>{re.style.willChange=""};se.onfinish=we,se.oncancel=we,X.current=se},[O,D]);const{selectionState:_,selectionBox:V,handleGridMouseDown:ee,pendingSelections:K,confirmSelections:ce,clearSelections:he,removeSelection:de,updateSelection:ge,isMultiSelectActive:Se,hasUnconfirmedSelections:me}=ii({data:n,baseData:o||n,zoom:r,startDate:y,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:v,gridRef:I,isDragging:F,separatorRowIndices:C}),ae=p.useCallback(ue=>{ue.preventDefault()},[]),fe=p.useCallback(ue=>{ue.preventDefault()},[]),De=C.length*Pe,Oe=p.useCallback(ue=>{const re=bn(),le=t*pe+1+De;kr(ue,re,le),Ds(ue,r,t,x,y,ne,C,w)},[x,y,t,r,ne,C,w,De]);return p.useEffect(()=>{if(!$.current)return;const ue=$.current.getContext("2d");if(!ue)return;const re=()=>Oe(ue);return window.addEventListener("resize",re),()=>window.removeEventListener("resize",re)},[Oe]),p.useEffect(()=>{var Ne;const ue=Q.current,re=P.current;if(Q.current=t,P.current=O,ue===t||!O.isSame(re,"day")||Mr())return;const le=$.current,se=G.current;if(!le||!se||le.width===0||le.height===0)return;const we=se.getContext("2d");if(!we)return;se.width=le.width,se.height=le.height,se.style.width=le.style.width,se.style.height=le.style.height,we.setTransform(1,0,0,1,0,0),we.clearRect(0,0,se.width,se.height),we.drawImage(le,0,0),(Ne=k.current)==null||Ne.cancel(),se.style.opacity="1";const Ee=se.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});Ee.onfinish=()=>{se.style.opacity="0"},k.current=Ee},[t,O]),p.useEffect(()=>{const ue=$.current;if(!ue)return;ue.style.letterSpacing="1px";const re=ue.getContext("2d");re&&Oe(re)},[O,t,r,Oe]),p.useEffect(()=>{if(!A.current)return;const ue=new IntersectionObserver(re=>{re[0].isIntersecting&&!L.current&&(L.current=!0,U(),setTimeout(()=>{L.current=!1},1e3))},{root:document.getElementById(Xe)});return ue.observe(A.current),()=>{ue.disconnect()}},[U]),p.useEffect(()=>{if(!N.current)return;const ue=new IntersectionObserver(re=>{re[0].isIntersecting&&!L.current&&(L.current=!0,W(),setTimeout(()=>{L.current=!1},1e3))},{root:document.getElementById(Xe),rootMargin:`0px 0px 0px -${Ae}px`});return ue.observe(N.current),()=>{ue.disconnect()}},[W]),i.jsxs(ai,{id:ur,children:[i.jsxs(ci,{ref:ue=>{typeof m=="function"?m(ue):m&&(m.current=ue),I.current=ue},onMouseDown:ee,style:{cursor:u?"crosshair":"default"},children:[i.jsx(Er,{position:"left",ref:N}),i.jsx(_n,{isLoading:h,position:"left"}),i.jsx(li,{ref:$,onDragStart:ae,onDragOver:fe,style:{userSelect:ie==="dragging"?"none":"auto"}}),i.jsx(di,{ref:G,"aria-hidden":!0}),i.jsx(Ul,{zoom:r,startDate:y}),i.jsx(ql,{zoom:r,startDate:y}),i.jsx(nl,{data:n,zoom:r,onTileClick:s,onDragStart:Z,isDraggable:T,draggingEventId:R,separatorRowIndices:C,fadingUnitIds:E,highlightedSegmentId:(S==null?void 0:S.highlightedSegmentId)??null,focusedUnitIds:(S==null?void 0:S.focusedUnitIds)??null,leavingSegmentIds:(S==null?void 0:S.leavingSegmentIds)??null,ghostProject:(S==null?void 0:S.ghostProject)??null}),i.jsx(Er,{ref:A,position:"right"}),i.jsx(_n,{isLoading:h,position:"right"}),(ie==="dragging"||ie==="animating")&&i.jsx(_l,{draggedEvent:H,ghostPosition:j,ghostDimensions:q,dropTarget:te,isValidDrop:M,dragState:ie,zoom:r,data:n,resourceOnly:B,separatorRowIndices:C}),i.jsx(Pl,{selectionBox:V,isSelecting:_==="selecting"}),Se&&K.length>0&&i.jsx(Gl,{selections:K,data:n,zoom:r,startDate:y,onRemove:de,onUpdate:ge,separatorRowIndices:C})]}),Se&&me&&K.length>0&&i.jsx(Hl,{selections:K,onConfirm:ce,onClear:he,onRemove:de})]})}),_r=e=>{const r=Y.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Tr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/ke);t+=o.hours+s,n+=r%ke,n>=ke&&(t++,n-=ke)}),{hours:t,minutes:n}},Ar=(e,r)=>{let t=fr;switch(r){case 0:t=ws;break;case 1:t=fr;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=ke-e.minutes;return a===ke&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},fi=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const u=Y(c.startDate).isoWeek(),f=Y(c.startDate).isoWeekday(),v=Y(c.endDate).isoWeek(),C=Y(c.endDate).isoWeekday(),{hours:w,minutes:E}=_r(c.occupancy);if(n===u){const m=(Ue+1-f)*w,L=(Ue+1-f)*E;return{hours:Math.max(0,m),minutes:L}}else if(n===v){const m=C>Ue?Ue*w:C*w,L=C>Ue?Ue*E:C*E;return{hours:m,minutes:L}}else if(Y(r).isBetween(c.startDate,c.endDate))return{hours:Ue*w,minutes:Ue*E};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Tr(o),{free:l,overtime:d}=Ar({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:d}},hi=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(u=>{const{hours:f,minutes:v}=_r(u.occupancy);return o<=(n?7:5)?{hours:f,minutes:v}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Tr(s),{free:d,overtime:c}=Ar({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:d,overtime:c}},pi=(e,r)=>{let t=0;e.forEach(l=>{const d=Y(l.startDate).hour(),c=Y(l.endDate).hour(),u=r.hour(),f=Y(l.endDate).minute(),v=Y(l.startDate).minute();d<u&&c>u?t+=ke:d===u&&c===u&&v&&f?t+=f?f-v:ke-v:d===u&&c>=u?t+=v?ke-v:ke:c===u&&f&&(t+=f)});const n=Math.floor(t/ke),o=t%ke,s=n||o?0:1,a=n?0:o?ke-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},gi=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?Y(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?Y(t).isBetween(a.startDate,a.endDate,"hour","[]"):Y(a.startDate).isBetween(Y(t),Y(t).add(6,"days"),"day","[]")||Y(t).isBetween(Y(a.startDate),Y(a.endDate),"day","[]"));switch(n){case 1:return hi(s,t,n,o);case 2:return pi(s,t);default:return fi(s,t,n)}},mi=(e,r,t,n,o,s,a=!1)=>{let l="weeks",d;switch(s){case 0:l="weeks",d=dt;break;case 1:l="days",d=Ce;break;case 2:l="hours",d=$e;break}const c=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),u=Y(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),f=Math.ceil(t.y/pe),v=n.findIndex((L,U,W)=>W.slice(0,U+1).reduce((h,x)=>h+x,0)>=f),C=s===2?(c+1)*d:c*d,w=(f-1)*pe+pe,E=gi(o[v],v,u,s,a),m=Y(e.startDate).isSame(Y(e.endDate),"day");return{coords:{x:C,y:w},mouseCoords:t,resourceIndex:v,disposition:E,reservationData:{startTime:Y(e.startDate).format("hh:mm A"),startDate:Y(e.startDate).format("MMM D, YYYY"),endTime:Y(e.endDate).format("hh:mm A"),endDate:Y(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:m,passengers:e.totalPassengers,readiness:e.readiness,readinessNote:e.readinessNote,subcontractConfirmed:e.subcontractConfirmed}}};function yi(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function vi(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const u of e)!u.isSubcontract&&u.capacity!=null&&t.add(u.capacity);const n=[...t].sort((u,f)=>u-f);if(n.length<2)return r;const o=Math.min(5,n.length),s=yi(n,o),a=[];let l=0;for(const u of s)a.push({min:n[l],max:n[u-1],values:n.slice(l,u)}),l=u;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const d=[],c=new Map;return a.forEach((u,f)=>{const v="__auto_cat_"+f,C=u.min===u.max?u.min+" pax":u.min+"-"+u.max+" pax";d.push({id:v,name:C,minPassengers:u.min,maxPassengers:u.max});for(const w of u.values)c.set(w,v)}),{categories:d,capacityToCategoryId:c}}const xi=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(u)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((d,c)=>{const u={id:e[c+s].id,label:e[c+s].label,data:d,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};a.push(u),c===r.length-s-1&&o.push(a)})),o):(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};a.push(u)}),o.push(a),o)};var wn={},bi={get exports(){return wn},set exports(e){wn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(bi);const wi=wn;var Sn={},Si={get exports(){return Sn},set exports(e){Sn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Si);const Ci=Sn,ki=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=Y(t.startDate).startOf("day"),d=Y(t.endDate).startOf("day"),c=Y(o[a].startDate).startOf("day"),u=Y(o[a].endDate).startOf("day");if(l.isBetween(c,u,null,"[]")||d.isBetween(c,u,null,"[]")||l.isBefore(c,"minute")&&d.isAfter(u,"minute")||l.isAfter(c,"minute")&&d.isBefore(u,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};Y.extend(wi),Y.extend(Ci);const Pr=new WeakMap,Mi=e=>{const r=Pr.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=Y(o.startDate),l=Y(s.startDate),d=a.startOf("day").diff(l.startOf("day"),"day");return d!==0?d:a.diff(l)}),n=ki(t);return Pr.set(e,n),n},$i=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Mi(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Di=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Ei=e=>{const{recordsThreshold:r}=He(),[t,n]=p.useState(0),[o,s]=p.useState(0),a=p.useRef(null);p.useEffect(()=>{a.current=document.getElementById(Xe)},[]);const{projectsPerPerson:l,rowsPerPerson:d}=p.useMemo(()=>$i(e),[e]),c=p.useMemo(()=>xi(e,l,d,r),[e,l,r,d]),u=p.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(m=>m+c[Math.max(o,0)].length),s(m=>Math.min(m+1,c.length-1)),window.scroll({top:0}))},[o,c]),f=p.useCallback(()=>{c[o].length&&(n(m=>Math.max(m-c[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,c]),v=p.useCallback(()=>{n(0),s(0)},[]),C=t+c[o].length,w=p.useMemo(()=>d.slice(t,C),[C,d,t]),E=p.useMemo(()=>l.slice(t,C),[C,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:E,rowsPerItem:w,totalRowsPerPage:Di(c[o]),next:u,previous:f,reset:v}};var Cn={},_i={get exports(){return Cn},set exports(e){Cn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(_i);const Ti=Cn;var kn={},Ai={get exports(){return kn},set exports(e){kn=e}};(function(e,r){(function(t,n){e.exports=n(Re)})(Me,function(t){function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=n(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function a(v,C,w){var E=v+" ";switch(w){case"m":return C?"minuta":"minutę";case"mm":return E+(s(v)?"minuty":"minut");case"h":return C?"godzina":"godzinę";case"hh":return E+(s(v)?"godziny":"godzin");case"MM":return E+(s(v)?"miesiące":"miesięcy");case"yy":return E+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,u=function(v,C){return c.test(C)?l[v.month()]:d[v.month()]};u.s=d,u.f=l;var f={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:u,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(f,null,!0),f})})(Ai);const Pi=kn;var Mn={},Oi={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n(Re)})(Me,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(d,c,u){var f=s[u];return Array.isArray(f)&&(f=f[c?0:1]),f.replace("%d",d)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Oi);const Ii=Mn;var $n={},Yi={get exports(){return $n},set exports(e){$n=e}};(function(e,r){(function(t,n){e.exports=n(Re)})(Me,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(u,f){return l.test(f)?s[u.month()]:a[u.month()]};d.s=a,d.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(u){return u+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Yi);const Li=$n;var Dn={},Ni={get exports(){return Dn},set exports(e){Dn=e}};(function(e,r){(function(t,n){e.exports=n(Re)})(Me,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(Ni);const Fi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Ti},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Pi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"One Day",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:Dn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:Li},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:Ii}];class zi{constructor(){ho(this,"locales",Fi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Wt=new zi,Or=p.createContext({localesData:Wt.getLocales(),currentLocale:Wt.getLocales()[0],setCurrentLocale:()=>{}}),Hi=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Wt.getLocales(),a=p.useCallback(()=>{const f=s.find(v=>v.id===n);return typeof(f==null?void 0:f.dayjsTranslations)=="object"&&Y.locale(f.dayjsTranslations),f||s[0]},[n,s]),[l,d]=p.useState(a()),c=f=>{localStorage.setItem("locale",f.translateCode),d(f)};p.useEffect(()=>{t==null||t.forEach(f=>{s.find(C=>C.id===f.id)||Wt.addLocales(f)})},[s,t]),p.useEffect(()=>{const f=localStorage.getItem("locale"),v=r??f??"en";localStorage.setItem("locale",v),o(v),d(a())},[a,r]);const{Provider:u}=Or;return i.jsx(u,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Ke=()=>p.useContext(Or).currentLocale.lang,Wi=e=>oe.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},oe.createElement("defs",null,oe.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),oe.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},oe.createElement("stop",{offset:.47,stopColor:"#ccc"}),oe.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),oe.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),oe.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),oe.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),oe.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),oe.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),oe.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),oe.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),oe.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),oe.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),oe.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Bi=b.div`
  height: 440px;
  width: 514px;
  position: relative;
`,ji=b.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Zi=({onTileClick:e})=>{const{feelingEmpty:r}=Ke();return i.jsxs(Bi,{onClick:e,children:[i.jsx(Wi,{}),i.jsx(ji,{children:r})]})},Vi=b.div`
  position: relative;
  display: flex;
`,Gi=b.div`
  position: relative;
  margin-left: ${Ae};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Xi=b.div`
  width: calc(${({width:e})=>e}px - ${Ae}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ae}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ui=new Set,Ki={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:Ct.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Ji(e,r){const t=r?[...r].sort((l,d)=>l.maxPassengers-d.maxPassengers):[],n=[];for(const l of t){const d=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);d.length>0&&n.push({type:"category",category:l,items:d})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const a=e.filter(l=>l.isSubcontract);return a.length>0&&n.push({type:"subcontract",items:a}),n}const qi=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:v})=>{const[C,w]=p.useState(Ki),[E,m]=p.useState(e),[L,U]=p.useState(!1),[W,O]=p.useState(!1),[h,x]=p.useState(""),[y,D]=p.useState(new Set),[S,$]=p.useState(new Set),G=p.useRef([]);p.useEffect(()=>()=>G.current.forEach(clearTimeout),[]);const{zoom:Q,startDate:P,isLoading:k,config:{includeTakenHoursOnWeekendsInDayView:A,showTooltip:N,showThemeToggle:I}}=He(),F=p.useRef(null),J=p.useRef(null),[ne,ie]=p.useState(124),{page:H,projectsPerPerson:j,rowsPerItem:q,currentPageNum:te,pagesAmount:M,next:Z,previous:T,reset:R}=Ei(E),{effectiveCategories:B,effectivePage:z}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:H};const re=vi(H);if(re.categories.length===0)return{effectiveCategories:void 0,effectivePage:H};const le=H.map(se=>{if(se.isSubcontract||se.capacity==null)return se;const we=re.capacityToCategoryId.get(se.capacity);return we?{...se,categoryId:we}:se});return{effectiveCategories:re.categories,effectivePage:le}},[t,H]),g=p.useCallback(re=>{if(y.has(re)){D(se=>{const we=new Set(se);return we.delete(re),we});return}if(Mr()){D(se=>new Set(se).add(re));return}$(se=>new Set(se).add(re));const le=setTimeout(()=>{D(se=>new Set(se).add(re)),$(se=>{const we=new Set(se);return we.delete(re),we})},190);G.current.push(le)},[y]),X=p.useMemo(()=>{const re=[],le=B?[...B].sort((se,we)=>se.maxPassengers-we.maxPassengers):[];for(const se of le)z.some(we=>!we.isSubcontract&&we.categoryId===se.id)&&re.push(se.id);return z.some(se=>se.isSubcontract)&&re.push("__subcontract__"),re},[B,z]),_=p.useCallback(()=>{D(new Set)},[]),V=p.useCallback(()=>{D(new Set(X))},[X]),ee=p.useMemo(()=>{if(S.size===0)return Ui;const re=new Set;for(const le of z){const se=le.isSubcontract?"__subcontract__":le.categoryId;se&&S.has(se)&&re.add(le.id)}return re},[S,z]),{visiblePage:K,visibleRowsPerItem:ce,visibleTotalRows:he,visibleProjectsPerPerson:de,separatorRowIndices:ge,subcontractSeparatorRow:Se}=p.useMemo(()=>{const re=Ji(z,B),le=((B==null?void 0:B.length)??0)>0,se=new Map;H.forEach((_e,mt)=>se.set(_e.id,mt));const we=[],Ee=[],Ne=[],Ze=[];let nt=0,jt=-1;for(const _e of re)if(_e.type==="subcontract"||_e.type==="category"&&le){const yt=_e.type==="subcontract"?"__subcontract__":_e.category.id,vt=y.has(yt);if(Ze.push(nt),_e.type==="subcontract"&&(jt=nt),!vt)for(const rt of _e.items){const Zt=se.get(rt.id)??0,Vt=q[Zt];we.push(rt),Ee.push(Vt),Ne.push(j[Zt]),nt+=Vt}}else for(const yt of _e.items){const vt=se.get(yt.id)??0,rt=q[vt];we.push(yt),Ee.push(rt),Ne.push(j[vt]),nt+=rt}const Je=Ee.reduce((_e,mt)=>_e+mt,0);return{visiblePage:we,visibleRowsPerItem:Ee,visibleTotalRows:Je,visibleProjectsPerPerson:Ne,separatorRowIndices:Ze,subcontractSeparatorRow:jt}},[z,B,H,y,q,j]),me=p.useRef(xn((re,le,se,we,Ee,Ne)=>{if(!F.current)return;const{tile:Ze,segmentId:nt}=De(re);if(!nt||!Ze){U(!1);return}const jt=fe(nt,le),Je=F.current.getBoundingClientRect(),_e=Ze.getBoundingClientRect(),mt={x:re.clientX-Je.left,y:re.clientY-Je.top},yt={x:re.clientX-Je.left,y:re.clientY-Je.top},vt={x:_e.left-Je.left,y:_e.top-Je.top,width:_e.width,height:_e.height},{coords:{x:rt,y:Zt},resourceIndex:Vt,disposition:Ql,reservationData:Rl}=mi(jt,se,mt,we,Ee,Ne,A);w({coords:{x:rt,y:Zt},mouseCoords:yt,resourceIndex:Vt,disposition:Ql,reservationData:Rl,tileBounds:vt}),U(!0)},4)),ae=p.useRef(xn((re,le)=>{R(),m(re.map(se=>({...se,data:se.data.filter(we=>{const{title:Ee,description:Ne,subtitle:Ze}=we;return(Ee==null?void 0:Ee.toLowerCase().includes(le.toLowerCase()))||(Ze==null?void 0:Ze.toLowerCase().includes(le.toLowerCase()))||(Ne==null?void 0:Ne.toLowerCase().includes(le.toLowerCase()))})})).filter(se=>se.data.length>0))},500)),fe=(re,le)=>{if(re)return le.flatMap(se=>se.data).find(se=>se.segmentId===re)},De=re=>{if(!re.target)return{tile:null,segmentId:null};const le=re.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},Oe=re=>{const le=re.target.value;x(le),ae.current.cancel(),le?ae.current(e,le):(R(),m(e))},ue=p.useCallback(()=>{me.current.cancel(),U(!1)},[]);return p.useEffect(()=>{const re=se=>me.current(se,e,P,ce,de,Q),le=F.current;if(le)return le.addEventListener("mousemove",re),le.addEventListener("mouseleave",ue),()=>{le.removeEventListener("mousemove",re),le.removeEventListener("mouseleave",ue)}},[me,ue,de,ce,P,Q,e]),p.useEffect(()=>{h?(ae.current.cancel(),ae.current(e,h)):m(e)},[e,h]),p.useLayoutEffect(()=>{const re=J.current;if(!re)return;const le=()=>ie(re.offsetHeight);le();const se=new ResizeObserver(le);return se.observe(re),()=>se.disconnect()},[]),i.jsxs(Vi,{children:[i.jsx(oc,{headerHeight:ne,data:z,categories:B,pageNum:te,pagesAmount:M,rows:q,onLoadNext:Z,onLoadPrevious:T,searchInputValue:h,onSearchInputChange:Oe,onItemClick:o,collapsedGroups:y,fadingGroups:S,onToggleGroup:g,allGroupIds:X,onExpandAll:_,onCollapseAll:V}),i.jsxs(Gi,{children:[i.jsx(Ic,{ref:J,zoom:Q,topBarWidth:a,showThemeToggle:I,toggleTheme:s}),e.length?i.jsx(ui,{data:K,baseData:r||e,zoom:Q,rows:he,ref:F,onTileClick:n,onEventDrop:l,onEventDrag:d,draggableConfig:c,onDragStateChange:O,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:v,separatorRowIndices:ge,subcontractSeparatorRow:Se,fadingUnitIds:ee}):i.jsx(Xi,{width:a,children:k?i.jsx(_n,{isLoading:k,position:"left"}):i.jsx(Zi,{})}),N&&i.jsx(vl,{tooltipData:C,visible:L&&!W})]})]})},Qi=b.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Ae+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.mode==="dark"?e.colors.primary:"#fff"};
`,Ir=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,Ri=b.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,ea=b.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Yr=b.button`
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
`,ta=b.button`
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
`,na=b.div`
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
`,Lr=b.button`
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
`,ra=b.label`
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
`,oa=b.span`
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
`,kt=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),sa=()=>{var r,t;const e=document.getElementById(mr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},ia=()=>{const{config:e,zoom:r,handleGoNext:t,handleGoPrev:n,handleGoToday:o,setZoom:s,goToDate:a,toggleDisplayActiveUnits:l,toolbarActions:d}=He(),{filterButtonState:c=-1}=e;return i.jsxs(Qi,{width:0,children:[i.jsxs(Ir,{$at:"start",children:[i.jsxs(ea,{children:[i.jsx(Yr,{onClick:n,"aria-label":"Anterior",children:i.jsx(kt,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(ta,{onClick:o,children:"Hoy"}),i.jsx(Yr,{onClick:t,"aria-label":"Siguiente",children:i.jsx(kt,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),e.showViewSwitcher!==!1&&i.jsxs(i.Fragment,{children:[i.jsx(Ri,{}),i.jsxs(na,{children:[i.jsx("button",{className:r===2?"on":"",onClick:()=>s(2),children:"Día"}),i.jsx("button",{className:r===0?"on":"",onClick:()=>s(0),children:"Semana"}),i.jsx("button",{className:r===1?"on":"",onClick:()=>s(1),children:"Mes"})]})]}),e.showJumpToDate!==!1&&i.jsxs(ra,{children:[i.jsxs(kt,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onClick:u=>{var f,v;try{(v=(f=u.currentTarget).showPicker)==null||v.call(f)}catch{}},onChange:u=>u.target.value&&a(u.target.value)})]})]}),i.jsxs(Ir,{$at:"end",children:[e.showFilterButton!==!1&&c>=0&&i.jsxs(Lr,{$primary:!!c,onClick:l,children:[i.jsx(kt,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&i.jsx(oa,{children:c})]}),e.showFullscreenButton!==!1&&i.jsxs(Lr,{onClick:sa,children:[i.jsx(kt,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),d]})]})},aa={add:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>oe.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),oe.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},En=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Yt(),a=aa[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},ca=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];b.button`
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
  ${({theme:e,variant:r,disabled:t})=>ca(e,r,t)}
`;const la=b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${gr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ie};
`,da=b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,ua=b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,fa=b.div`
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
`,ha=b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,pa=b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,ga=b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`,ma=b.div`
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
`,ya=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,va=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,xa=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,ba=b.div`
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
`,Nr="#cdd8d2",Fr=[178,216,195],wa=[15,125,102],Sa=e=>{const r=Math.min(1,Math.max(0,e)),t=n=>Math.round(Fr[n]+(wa[n]-Fr[n])*r);return`rgb(${t(0)}, ${t(1)}, ${t(2)})`},Ca=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=He(),s=Ke(),a=p.useRef(null),[l,d]=p.useState(null),c=p.useMemo(()=>Array.from({length:12},(S,$)=>Y().month($).format("MMM").toUpperCase()),[s]),u=p.useMemo(()=>Y().startOf("day"),[]),{domainStart:f,domainEnd:v,domainDays:C}=p.useMemo(()=>{const S=u.subtract(3,"month").startOf("month"),$=u.add(9,"month").endOf("month");return{domainStart:S,domainEnd:$,domainDays:$.diff(S,"day")+1}},[u]),w=S=>S.diff(f,"day")/C*100,E=S=>Math.min(100,Math.max(0,S)),m=p.useMemo(()=>{const S=[];let $=f.startOf("month");for(;$.isBefore(v);)S.push($),$=$.add(1,"month");return S},[f,v]),L=o==null?void 0:o.yearCounts,U=p.useMemo(()=>{const S=Math.ceil(C/7),$=new Array(S).fill(0),G=F=>{const J=F.diff(f,"day");return J<0||J>=C?-1:Math.floor(J/7)};if(L&&L.length)for(const F of L){const J=G(Y(F.date));J>=0&&($[J]+=F.count)}else for(const F of t??[])for(const J of F.data??[]){const ne=G(Y(J.startDate));ne>=0&&($[ne]+=1)}const Q=Math.max(0,...$);if(Q<=0)return $.map(()=>({h:0,color:Nr}));const P=$.filter(F=>F>0).sort((F,J)=>F-J),k=P.length>>1,A=P.length%2?P[k]:(P[k-1]+P[k])/2,N=A>0?Q/A:1,I=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,N)))));return $.map(F=>F>0?{h:Math.min(100,100*Math.pow(F/Q,I)),color:Sa(F/Q)}:{h:0,color:Nr})},[t,L,f,C]),W=w(u),O=S=>{const{startDate:$,endDate:G}=Ht(S,r),Q=E(w($));return{left:Q,width:E(w(G))-Q,startDate:$,endDate:G}},h=O(e),x=l?O(l.d):null,y=S=>`${S.date()} ${c[S.month()]}`,D=S=>{var Q;const $=(Q=a.current)==null?void 0:Q.getBoundingClientRect();if(!$)return null;const G=Math.min(1,Math.max(0,(S-$.left)/$.width));return{f:G,d:f.add(Math.round(G*(C-1)),"day")}};return i.jsxs(la,{children:[i.jsxs(da,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(ua,{ref:a,onClick:S=>{const $=D(S.clientX);$&&n($.d.toDate())},onMouseMove:S=>{const $=D(S.clientX);$&&d({left:$.f*100,d:$.d})},onMouseLeave:()=>d(null),children:[i.jsx(fa,{children:m.map((S,$)=>i.jsx("span",{style:{left:`${w(S)}%`},children:$===0||S.month()===0?`${c[S.month()]} ${S.format("YY")}`:c[S.month()]},$))}),m.map((S,$)=>$===0?null:i.jsx(ha,{style:{left:`${w(S)}%`}},$)),i.jsx(pa,{children:U.map((S,$)=>i.jsx(ga,{style:{height:`${S.h}%`,background:S.color}},$))}),i.jsx(ya,{style:{left:`${h.left}%`,width:`${h.width}%`}}),i.jsx(ma,{style:{left:`${E(W)}%`},children:i.jsx("span",{children:"HOY"})}),l&&x&&i.jsxs(i.Fragment,{children:[i.jsx(va,{style:{left:`${x.left}%`,width:`${x.width}%`}}),i.jsx(xa,{style:{left:`${l.left}%`}}),i.jsx(ba,{style:{left:`${l.left}%`},children:`Ir a ${y(l.d)}`})]})]})]})},ka=b.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Ma=b.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?gr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,$a=b.div`
  position: relative;
`,Da=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,schedulerRef:u,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:C})=>{const{goToDate:w,handleGoToday:E,zoomIn:m,zoomOut:L,zoom:U}=He();return p.useImperativeHandle(u,()=>({goToDate:w,goToToday:E,setZoom:W=>{if(!Sr(W))return;const O=W-U;if(O>0)for(let h=0;h<O;h++)m();else for(let h=0;h<Math.abs(O);h++)L()}}),[w,E,U,m,L]),i.jsx(qi,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:C})},Ea=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,onItemClick:f,isLoading:v,onEventDrop:C,onEventDrag:w,draggableConfig:E,onTimeRangeSelect:m,onMultiTimeRangeSelect:L,clickToAddConfig:U},W){var N;const O=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),h=p.useRef(null),x=p.useRef(null),[y,D]=p.useState((N=h.current)==null?void 0:N.clientWidth),S=p.useMemo(()=>Y(s),[s]),[$,G]=p.useState(O.defaultTheme??"light"),Q=()=>{G($==="light"?"dark":"light")},P=$==="light"?ms:ys,k=O.theme?O.theme[P.mode]:{},A={...P,colors:{...P.colors,...k}};return p.useImperativeHandle(W,()=>({goToDate:I=>{var F;return(F=x.current)==null?void 0:F.goToDate(I)},goToToday:()=>{var I;return(I=x.current)==null?void 0:I.goToToday()},setZoom:I=>{var F;return(F=x.current)==null?void 0:F.setZoom(I)}}),[]),p.useLayoutEffect(()=>{const I=()=>{h.current&&D(h.current.clientWidth)};I(),window.addEventListener("resize",I);let F;const J=h.current;return J&&typeof ResizeObserver<"u"&&(F=new ResizeObserver(I),F.observe(J)),()=>{window.removeEventListener("resize",I),F==null||F.disconnect()}},[]),i.jsxs(i.Fragment,{children:[i.jsx(gs,{}),i.jsx(us,{theme:A,children:i.jsx(Hi,{lang:O.lang,translations:O.translations,children:i.jsx(ri,{data:r,isLoading:!!v,config:O,onRangeChange:a,defaultStartDate:S,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,children:i.jsxs(ka,{id:mr,children:[i.jsx(Ma,{showScroll:!!r.length,$footer:O.showOverview!==!1&&!!r.length,id:Xe,ref:h,children:i.jsx($a,{children:i.jsx(Da,{data:r,baseData:n,categories:t,onTileClick:l,topBarWidth:y??0,onItemClick:f,toggleTheme:Q,onEventDrop:C,onEventDrag:w,draggableConfig:E,schedulerRef:x,onTimeRangeSelect:m,onMultiTimeRangeSelect:L,clickToAddConfig:U})})}),O.showOverview!==!1&&!!r.length&&i.jsx(Ca,{})]})})})})]})}),_a=b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,Ta=b.button`
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
`,Aa=b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Pa=b.p`
  ${ct}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,zr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=Ke(),d=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(_a,{intent:e,children:i.jsxs(Ta,{onClick:r,isVisible:n,children:[t&&i.jsx(Aa,{children:t}),i.jsx(Pa,{children:d})]})})},Oa=b.div`
  min-width: ${Ae+"px"};
  max-width: ${Ae+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Ia=b.div`
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
`,Ya=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,La=b.input`
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
`,Na=b.div`
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
`,Fa=Be`
  from { opacity: 1; }
  to { opacity: 0; }
`,Hr=b.div`
  ${({$fading:e})=>e&&it`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Fa} 180ms ease forwards;
      }
    `}
`,za=b.button`
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
`,Ha=Be`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,Wa=b.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${pe}px;
  height: calc(${pe}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder+"33":e.colors.border};
  border-left: 3px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder:"transparent"};
  background-color: ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBg:"transparent"};
  /* Scope the transition to paint-only props. It was transition:0.5s ease (= transition:all), which animated the row
     height (a LAYOUT property) for 500ms on every add/remove/collapse — layout thrash that made rowIn hitch. */
  transition: background-color 0.15s ease, border-color 0.15s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Ha} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,Ba=b.div`
  display: flex;
  align-items: center;
`,ja=b.div`
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
`,Za=b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Va=b.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Wr=b.p`
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
`,Ga=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`,Xa=b.span`
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
`,Ua=b.span`
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
`,Ka=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),Ja=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[i.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),i.jsx("path",{d:"M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z"}),i.jsx("circle",{cx:"16.8",cy:"8.6",r:"2.5"}),i.jsx("path",{d:"M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8"})]}),qa=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),Qa=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),Ra=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(Wa,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(Ba,{children:[i.jsx(ja,{$provider:o,children:Ka(r.icon)?i.jsx(Za,{src:r.icon,alt:""}):o?i.jsx(Qa,{}):i.jsx(qa,{})}),i.jsxs(Va,{children:[i.jsx(Wr,{isMain:!0,children:r.title}),r.capacity!=null||r.plate?i.jsxs(Ga,{children:[r.capacity!=null&&i.jsxs(Xa,{title:`${r.capacity} pasajeros`,children:[i.jsx(Ja,{}),r.capacity]}),r.plate&&i.jsx(Ua,{title:r.plate,children:r.plate})]}):r.subtitle&&i.jsx(Wr,{children:r.subtitle})]})]})}),ec=b.div`
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
`,tc=b.span`
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
`,nc=b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  flex-shrink: 0;
`,rc=b.div`
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
`,Br=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>i.jsxs(ec,{$variant:o,onClick:n,title:e,children:[i.jsx(rc,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(tc,{$variant:o,children:e}),i.jsx(nc,{$variant:o,children:r})]}),oc=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:d,onSearchInputChange:c,onItemClick:u,collapsedGroups:f,fadingGroups:v,onToggleGroup:C,allGroupIds:w,onExpandAll:E,onCollapseAll:m})=>{const[L,U]=p.useState(!1),W=Ke(),O=()=>U(k=>!k),h=r?[...r].sort((k,A)=>k.maxPassengers-A.maxPassengers):[],x=h.length>0,y=w.length>0,D=y&&f.size===w.length;y&&f.size;const S=e.filter(k=>k.isSubcontract),$=W.subcontract??"Subcontract",G=k=>{const A=e.indexOf(k);return i.jsx(Ra,{id:k.id,item:k.label,rows:n[A],onItemClick:u,isSubcontract:k.isSubcontract},k.id)},Q=k=>{const A=e.filter(J=>!J.isSubcontract&&J.categoryId===k.id);if(A.length===0)return null;const N=f.has(k.id),I=v.has(k.id),F=k.name;return i.jsxs("div",{children:[i.jsx(Br,{label:F,count:A.length,isCollapsed:N||I,onToggle:()=>C(k.id),variant:"category"}),!N&&i.jsx(Hr,{$fading:I,children:A.map(G)})]},k.id)},P=e.filter(k=>!k.isSubcontract&&(!k.categoryId||!x));return i.jsxs(Oa,{children:[i.jsxs(Ia,{$height:t,children:[i.jsxs(Ya,{children:[i.jsxs(Na,{isFocused:L,children:[i.jsx(La,{placeholder:W.search,value:d,onChange:c,onFocus:O,onBlur:O}),i.jsx(En,{iconName:"search"})]}),y&&i.jsx(za,{title:D?"Expand all":"Collapse all",onClick:D?E:m,$allCollapsed:D,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:D?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(zr,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(En,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),x?h.map(Q):P.map(G),x&&P.length>0&&P.map(G),S.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Br,{label:$,count:S.length,isCollapsed:f.has("__subcontract__")||v.has("__subcontract__"),onToggle:()=>C("__subcontract__"),variant:"subcontract"}),!f.has("__subcontract__")&&i.jsx(Hr,{$fading:v.has("__subcontract__"),children:S.map(G)})]}),i.jsx(zr,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(En,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},sc=b.div`
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
`,ic=Be`
from{
    left: -100%;
}
to{
    left: 100%;
}`,ac=b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${ic} 1s infinite;
`,_n=({isLoading:e,position:r})=>e?i.jsx(sc,{position:r,children:i.jsx(ac,{})}):null,je=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:d,font:c,isBottomRow:u,fillStyle:f,topText:v,bottomText:C,strokeStyle:w,labelBetweenCells:E}=e;t.beginPath();const m=w??(r.mode==="dark"?r.colors.border:"#E4EAE7");if(t.strokeStyle=m,t.setLineDash([]),d&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),E?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):(t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke()),t.font=c;const L=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.mode==="dark"?r.colors.textPrimary:"#183D3D",t.fillText(d,L,l)}if(u&&f&&v&&C){t.fillStyle=f,t.fillRect(n,o,s,a),t.beginPath(),t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke(),t.font=v.font;const L=n+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,L,v.y),t.font=C.font;const U=n+s/2-t.measureText(C.label).width/2;t.fillStyle=C.color,t.fillText(C.label,U,C.y)}},cc=(e,r,t,n,o=tt)=>{const s=ze+o,a=s+13,l=s+27;let d=0;for(let c=0;c<r;c++){const u=xr(Y(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"days")),f=u.isCurrentDay;if(je({ctx:e,x:d,y:s,width:Ce,height:lt,isBottomRow:!0,fillStyle:f?n.colors.currentDay:n.colors.gridBackground,topText:{y:a,label:f?"":u.dayName.replace(/\./g,"").toUpperCase(),font:`600 10px ${Ie}`,color:n.mode==="dark"?n.colors.placeholder:"#74897F"},bottomText:{y:l,label:`${u.dayOfMonth}`,font:f?`700 12px ${Ie}`:`700 13px ${Ie}`,color:f?n.colors.today:n.mode==="dark"?n.colors.textPrimary:"#183D3D"}},n),f){const w=d+Ce/2,E=a-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(w-30/2,E,30,13,5):e.rect(w-30/2,E,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ie}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",w,E+13/2+.5),e.restore()}d+=Ce}},lc=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Ye;const s=ze;let l=t.month;for(let d=0;d<r;d++){l>=dr&&(l=0);const c=vr(t,d)*Ye;je({ctx:e,x:o,y:s,width:c,height:tt,textYPos:hr,label:Y().month(l).format("MMMM").toUpperCase(),font:Ge.bottomRow.number},n),o+=c,l++}},dc=" ".repeat(98),uc=(e,r,t)=>{const o=Y(`${r.year}-${r.month+1}-${r.dayOfMonth}`);let s=-r.dayOfMonth*Ce+Ce;for(let a=0;a<dr;a++){const l=o.add(a,"months"),d=l.daysInMonth()*Ce,c=l.format("MMMM YYYY").toUpperCase();je({ctx:e,x:s,y:0,width:d,height:ze,textYPos:cn,label:`${c}${dc}${c}`,font:`800 12px ${Ie}`},t),s+=d}},fc=(e,r,t,n)=>{const o=7*Ce,s=ze,a=e.canvas.width/o+o,l=r.weekOfYear;let d=0;for(let c=0;c<a;c++){const u=Y(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let f=(l+c)%lr;f<=0&&(f+=lr),u!==1&&c===0&&(d=-u*Ce+Ce),je({ctx:e,x:d,y:s,width:o,height:tt,textYPos:hr,label:`${t.toUpperCase()} ${f}`,font:Ge.middleRow},n),d+=o}},hc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},pc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},gc=(e,r,t,n,o)=>{const s=Lt-lt/1.6,a=Lt-lt/4.5,l=ze+tt;let d=0;for(let c=0;c<r;c++){const u=Y(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),f=u.isSame(Y(),"week");je({ctx:e,x:d,y:l,width:dt,height:lt,isBottomRow:!0,fillStyle:f?o.colors.today+"26":hc({isCurrent:f,variant:"yearView"},o),topText:{y:s,label:u.isoWeek().toString(),font:f?`700 14px ${Ie}`:Ge.bottomRow.name,color:f?o.colors.today:pc({isCurrent:f},o)},bottomText:{y:a,label:n.toUpperCase(),font:Ge.middleRow,color:o.colors.placeholder}},o),d+=dt}},mc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,d=0,c=(yr(s)-t+1)*Ye,u=0;for(;l+u<=a;)d>0&&(c=yr(s+d)*Ye),u+c>a&&d>0&&(c=Math.ceil((a-u)/Ye)*Ye),je({ctx:e,x:l,y:0,width:c,height:ze,textYPos:cn,label:(s+d).toString(),font:Ge.topRow},n),l+=c,u+=c,d++},yc=(e,r,t,n)=>{const o=Math.floor(r/Nt)+2,s=Nt*$e;let d=-Y(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*$e+.5*$e;for(let c=0;c<o;c++){const u=Y(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();je({ctx:e,x:d,y:ut,width:s,height:St,textYPos:ut+St/2+2,label:u,font:Ge.bottomRow.number},n),d+=s}},vc=(e,r,t,n)=>{const o=Math.ceil(r/Nt),s=Y(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),d=a.add(1,"day").month(),c=l===d?1:2;let u=.5*$e;for(let f=0;f<c;f++){const v=Y(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),w=Y(`${t.year}-${t.month+f+1}-01T:23:59:59`).endOf("month"),E=w.format("MMMM").toUpperCase(),m=w.diff(v,"hour")+1,L=f===0?m*$e:r*$e;je({ctx:e,x:u,y:0,width:L,height:ut,textYPos:cn,label:E,font:Ge.topRow},n),u+=L}},xc=(e,r,t,n)=>{let o=0;const s=ut+St,a=Y(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=$e;for(let d=0;d<r;d++){const c=a.add(d,"hours").format("h:00a").toUpperCase();je({ctx:e,x:o,y:s,width:l,height:an,label:c,font:Ge.bottomRow.hoursInDay,textYPos:ut+St+an/2+2,labelBetweenCells:!0},n),o+=$e}},bc=(e,r,t,n,o,s,a,l=!0)=>{switch(r){case 0:mc(e,n,s,a),lc(e,t,n,a),gc(e,t,n,o,a);break;case 1:uc(e,n,a),l&&fc(e,n,o,a),cc(e,t,n,a,l?tt:0);break;case 2:vc(e,t,n,a),yc(e,t,n,a),xc(e,t,n,a);break}},wc=b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,Sc=b.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,Cc=b.div`
  height: ${({$height:e})=>e??Lt}px;
  display: block;
`,kc=b.canvas``,Mc={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},Le=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Mc[e]}),$c=b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Ae+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,jr=b.span`
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
`,Bt=b.span`
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
`,Dc=b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,Ec=b.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,_c=b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,Tc=b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,Ac=b.span`
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
`,Pc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Oc=()=>i.jsxs($c,{children:[i.jsx(jr,{children:"Leyenda"}),i.jsxs(Bt,{children:[i.jsx(Le,{name:"transfer"})," Transfer"]}),i.jsxs(Bt,{children:[i.jsx(Le,{name:"sun"})," Gira 1 día"]}),i.jsxs(Bt,{children:[i.jsx(Le,{name:"tour"})," Gira multidía"]}),i.jsxs(Bt,{children:[i.jsx(Dc,{children:"SUB"})," Subcontrato"]}),i.jsx(Ec,{}),i.jsxs(jr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),Pc.map(e=>i.jsxs(_c,{children:[i.jsx(Tc,{style:{background:e.stripe}}),i.jsx(Ac,{style:{color:e.color},children:i.jsx(Le,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),Ic=p.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=Ke(),{date:l,cols:d,dayOfYear:c,startDate:u,config:f}=He(),v=p.useRef(null),C=Yt(),w=f.showWeekRow!==!1,E=r===2?vs:r===1&&!w?ze+lt:Lt,m=p.useCallback(L=>{const U=bn(),W=E+1;kr(L,U,W),bc(L,r,d,u,a,c,C,w)},[d,c,u,a,r,C,w,E]);return p.useEffect(()=>{if(!v.current)return;const L=v.current.getContext("2d");if(!L)return;const U=()=>m(L);return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[m]),p.useEffect(()=>{const L=v.current;if(!L)return;L.style.letterSpacing="1px";const U=L.getContext("2d");U&&m(U)},[l,r,m]),i.jsxs(wc,{ref:s,children:[(f.showTopbar!==!1||f.showLegend!==!1)&&i.jsxs(Sc,{$width:t,children:[f.showTopbar!==!1&&i.jsx(ia,{width:t,showThemeToggle:n,toggleTheme:o}),f.showLegend!==!1&&i.jsx(Oc,{})]}),i.jsx(Cc,{$height:E,id:xs,children:i.jsx(kc,{ref:v})})]})}),Yc=(e,r,t)=>{let n;switch(t){case 0:n=Ye;break;case 2:n=$e;break;default:n=Ce}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),d=r.endDate.startOf("day"),c=()=>{let u;switch(t){case 2:u=(e.startDate.diff(r.startDate,"minute")/ke+1)*n-n/2;break;default:u=s.diff(l,"day")*n}return Math.max(0,u)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(e.startDate,"minute")/ke*n,50);break;default:u=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(r.startDate,"minute")/ke*n+.5*n,50);break;default:u=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(e.startDate,"minute")/ke*n,50);break;default:u=Math.max(d.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(r.startDate,"minute")/ke*n,50);break;default:u=Math.max(d.diff(l,"day")*n+n,50)}return{x:c(),width:u}}return{x:c(),width:50}},Lc=(e,r,t,n,o,s)=>{const a=e*pe+bs,l=r.hour(),d=t.hour();let c,u,f,v;switch(s){case 2:{c=Y(n),u=Y(o),f=Y(r).hour(l).minute(0),v=Y(t).hour(d).minute(0);break}default:{c=Y(n).hour(0).minute(0),u=Y(o).hour(23).minute(59),f=r,v=t;break}}return{...Yc({startDate:c,endDate:u},{startDate:f,endDate:v},s),y:a}},Zr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},Vr={sin_chofer:{icon:"warn",color:"#9AA4B2",label:"Sin chofer"},sin_avisar:{icon:"warn",color:"#D98A22",label:"No notificado al chofer"},programado:{icon:"warn",color:"#C2A878",label:"Notificación programada"},notificado:{icon:"clock",color:"#2C6BB0",label:"Notificado"},confirmado:{icon:"check",color:"#2E8B63",label:"Confirmado"}};b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,b.p`
  ${ct}
  ${et}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const Nc=Be`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,Fc=Be`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,zc=b.button`
  ${ct}
  position: absolute;
  height: ${Ft}px;
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
    animation: ${Nc} 180ms ease-out;
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
  ${({$exiting:e})=>e&&it`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Fc} 190ms ease-out forwards;
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
`,Hc=b.div`
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
`,Gr=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Wc=b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Bc=b.span`
  ${et}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,jc=b.span`
  ${et}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,Zc=b.span`
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
`,Vc=b.div`
  ${et}
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
`,Xr=b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Ur=b.span`
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
`,Kr=b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Gc=b.div`
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
`,Jr=b.span`
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
`,Xc=Be`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`,Uc=b.div`
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
    animation: ${Xc} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`,Kc=b.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`,Jc=b.div`
  ${et}
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
`,qc=b.div`
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
`,Qc=b.span`
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
`,Rc=b.span`
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
`,el=34,Tn=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:a=!1,isDraggable:l=!0,yOffset:d=0,exiting:c=!1,highlighted:u=!1,dimmed:f=!1,leaving:v=!1,ghost:C=!1,ghostBadge:w=""})=>{const{date:E}=He(),m=Ht(E,t),{y:L,x:U,width:W}=Lc(e,m.startDate,m.endDate,r.startDate,r.endDate,t),{colors:O}=Yt(),h=p.useRef(null),x=Y(r.startDate).isSame(Y(r.endDate),"day"),y=r.eventType===Ct.Tour,D=r.eventType===Ct.Transfer,S=x&&(y||D);if(C)return i.jsxs(Uc,{style:{left:`${U}px`,top:`${L+d}px`,width:`${W}px`},children:[i.jsxs(Kc,{children:[i.jsxs(Jc,{children:[i.jsx(Le,{name:D?"transfer":"tour"}),r.title]}),i.jsxs(qc,{children:[i.jsx(Le,{name:"check",strokeWidth:2.6}),"flota propia"]})]}),w&&i.jsx(Qc,{children:w})]});const $=N=>{h.current={x:N.clientX,y:N.clientY},l&&s&&(N.preventDefault(),s(r,N))},G=N=>{if(h.current){const I=Math.abs(N.clientX-h.current.x),F=Math.abs(N.clientY-h.current.y);Math.sqrt(I*I+F*F)<=5&&(o==null||o(r)),h.current=null}else o==null||o(r)},Q={left:`${U}px`,top:`${L+d}px`,backgroundColor:`${r.bgColor??O.defaultTile}`,width:`${W}px`,color:Zr(r.bgColor??"")},P=!n&&r.readiness?Vr[r.readiness]:null,k=n&&r.subcontractConfirmed===!1,A=N=>i.jsxs(zc,{"data-segment-id":r.segmentId,style:Q,onClick:G,onMouseDown:$,onDragStart:I=>I.preventDefault(),isDraggable:l,isDragging:a,$unconfirmed:k,$exiting:c,$highlighted:u,$dimmed:f,$leaving:v,children:[v&&i.jsx(Rc,{children:"Sub"}),N]});return A(S?i.jsxs(i.Fragment,{children:[(n||P)&&i.jsx(Xr,{$sm:!0,children:n?i.jsx(Kr,{children:"SUB"}):P&&i.jsx(Ur,{$sm:!0,style:{color:P.color},children:i.jsx(Le,{name:P.icon,strokeWidth:P.icon==="check"?2.6:2.2})})}),i.jsxs(Gc,{$transfer:D,children:[i.jsx(Le,{name:D?"transfer":"sun",strokeWidth:2.4}),W>=el&&i.jsxs(i.Fragment,{children:[i.jsx(Jr,{children:Y(r.startDate).format("h:mm A")}),!D&&i.jsx(Jr,{$end:!0,children:Y(r.endDate).format("h:mm A")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(Xr,{children:n?i.jsx(Kr,{children:"SUB"}):P&&i.jsx(Ur,{style:{color:P.color},children:i.jsx(Le,{name:P.icon,strokeWidth:P.icon==="check"?2.6:2.2})})}),r.bookingNumber&&i.jsx(Zc,{children:r.bookingNumber}),i.jsxs(Hc,{children:[i.jsxs(Gr,{$pad:!0,children:[i.jsx(Wc,{children:i.jsx(Le,{name:D?"transfer":"tour"})}),i.jsx(Bc,{children:r.title})]}),r.subtitle&&i.jsx(Gr,{children:i.jsx(jc,{children:r.subtitle})}),r.driver&&i.jsxs(Vc,{children:[i.jsx(Le,{name:"person"}),r.driver]})]})]}))},qr=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Pe},tl=e=>({segmentId:e.segmentId,reservationId:e.reservationId,startDate:e.startDate,endDate:e.endDate,occupancy:0,title:e.title,bookingNumber:"",eventType:e.eventType}),nl=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:a=[],fadingUnitIds:l,highlightedSegmentId:d,focusedUnitIds:c,leavingSegmentIds:u,ghostProject:f})=>{const{nodes:v,liveMap:C}=p.useMemo(()=>{const W=new Map,O=!!c&&c.length>0;let h=0;return{nodes:e.map((y,D)=>{D>0&&(h+=Math.max(e[D-1].data.length,1));const S=!!(l!=null&&l.has(y.id)),$=O&&!c.includes(y.id),G=qr(h,a),Q=f&&y.id===f.targetUnitId?i.jsx(Tn,{row:h,data:tl(f),zoom:r,yOffset:G,isDragging:!1,isDraggable:!1,ghost:!0,ghostBadge:f.badge},`ghost-${y.id}`):null;if(!y.data.some(k=>k.length>0))return Q?[Q]:[];const P=y.data.map((k,A)=>k.map(N=>{const I=s===N.segmentId,F=o?o(N):!1,J=A+h,ne=qr(J,a);return W.set(N.segmentId,{project:N,absoluteRow:J,yOffset:ne,isSubcontract:!!y.isSubcontract}),i.jsx(Tn,{row:J,data:N,zoom:r,isSubcontract:y.isSubcontract,onTileClick:t,onDragStart:n,isDragging:I,isDraggable:F,yOffset:ne,exiting:S,highlighted:d!=null&&N.segmentId===d,dimmed:$,leaving:!!(u!=null&&u.includes(N.segmentId))},N.segmentId)}));return Q?[...P,[Q]]:P}).flat(2),liveMap:W}},[e,t,r,n,o,s,a,l,d,c,u,f]),w=p.useRef(new Map),E=p.useRef([]),[m,L]=p.useState([]);p.useEffect(()=>()=>E.current.forEach(clearTimeout),[]),p.useEffect(()=>{const W=w.current;w.current=C;const O=[];if(W.forEach((y,D)=>{C.has(D)||O.push(y)}),L(y=>{let D=y.filter(S=>!C.has(S.project.segmentId));for(const S of O)D.some($=>$.project.segmentId===S.project.segmentId)||(D=[...D,S]);return D}),!O.length)return;const h=new Set(O.map(y=>y.project.segmentId)),x=setTimeout(()=>{L(y=>y.filter(D=>!h.has(D.project.segmentId)))},220);E.current.push(x)},[C]);const U=m.filter(W=>!C.has(W.project.segmentId)).map(W=>i.jsx(Tn,{row:W.absoluteRow,data:W.project,zoom:r,isSubcontract:W.isSubcontract,yOffset:W.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},W.project.segmentId));return i.jsx(i.Fragment,{children:[...v,...U]})};b.div`
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
`;const rl=b.div`
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
`,ol=b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,sl=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,il=b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,al=b.span`
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
`,cl=b.div`
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
`,ll=b.div`
  ${ct}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dl=b.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,ul=b.div`
  padding: 10px 12px;
`,fl=b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Qr=b.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Rr=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,eo=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,to=b.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,no=b.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,hl=b.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,pl=b.div`
  min-width: 0;
`,gl=b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,ml=b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,ro=b.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Mt=b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,$t=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Dt=b.div`
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
`;b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.div``,b.span``,b.div``,b.div``,b.div``,b.div``,b.p``,b.span``;const yl={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},vl=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=p.useRef(null),[s,a]=p.useState("below"),l=Ke(),d={...yl,...l.tooltip};p.useLayoutEffect(()=>{if(!o.current||!t)return;const E=o.current,{width:m,height:L}=E.getBoundingClientRect(),U=E.parentElement;if(!U)return;const W=U.getBoundingClientRect(),O=12,h=4,x=W.height-t.y,y=W.width-t.x;let D=t.x+O,S=t.y+O,$="below";y<m+O&&(D=t.x-m-O),x<L+O&&(S=t.y-L-O,$="above"),D=Math.max(h,Math.min(D,W.width-m-h)),S=Math.max(h,Math.min(S,W.height-L-h)),a($),E.style.left=`${D}px`,E.style.top=`${S}px`},[t]);const c=n.reservationType===Ct.Tour,u=c&&n.isOneDayEvent,f=c?u?"sun":"tour":"transfer",v=c?u?d.oneDay:d.tour:d.transfer,C=n.readiness?Vr[n.readiness]:null,w=[n.groupName&&{label:d.groupName,value:n.groupName},n.driver&&{label:d.driver,value:n.driver},n.passengers&&{label:d.passengers,value:String(n.passengers)},n.flightNumber&&{label:d.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(rl,{ref:o,$position:s,$visible:r,children:[i.jsxs(ol,{children:[i.jsxs(sl,{children:[i.jsx(il,{children:n.bookingNumber}),i.jsxs(al,{children:[i.jsx(Le,{name:f,strokeWidth:2.4}),v]})]}),i.jsx(ll,{children:n.eventName}),n.client&&i.jsx(dl,{children:n.client}),C&&i.jsxs(cl,{style:{color:C.color},children:[i.jsx(Le,{name:C.icon,strokeWidth:C.icon==="check"?2.6:2.2}),n.readinessNote||C.label]})]}),i.jsxs(ul,{children:[i.jsxs(fl,{children:[i.jsxs(Qr,{children:[i.jsx(Rr,{children:d.startDate}),i.jsxs(eo,{children:[i.jsx(to,{children:n.startDate}),i.jsx(no,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(Qr,{$isEnd:!0,children:[i.jsx(Rr,{children:d.endDate}),i.jsxs(eo,{children:[i.jsx(to,{children:n.endDate}),i.jsx(no,{children:n.endTime})]})]})]}),w.length>0&&i.jsx(hl,{children:w.map((E,m)=>i.jsxs(pl,{children:[i.jsx(gl,{children:E.label}),i.jsx(ml,{children:E.value})]},m))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(ro,{children:[n.departureAddress&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.salida}),i.jsx(Dt,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.destino}),i.jsx(Dt,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.regreso}),i.jsx(Dt,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(ro,{children:[n.serviceNotes&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.serviceNotes}),i.jsx(Dt,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(Mt,{children:[i.jsx($t,{children:d.reservationNotes}),i.jsx(Dt,{children:n.reservationNotes})]})]})]})]})};b.div`
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
`;const xl=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,bl=b.div`
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
`,wl=b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,oo=b.p`
  ${ct}
  ${et}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Sl=b.p`
  ${ct}
  ${et}
`,Cl=b.div`
  position: sticky;
  left: ${Ae+16}px;
  overflow: hidden;
`,kl=b.div`
  position: absolute;
  height: ${Ft}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Ml=b.div`
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
`,$l=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Dl=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,El=b.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,so=b.div`
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
`,io=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,ao=b.div`
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
`,co=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,An=b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Pn=b.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,gt=b.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,lo=b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,_l=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:d=[]})=>{const c=Ke(),u=O=>{let h=0;for(const x of d)x<=O&&h++;return O*pe+h*Pe},[f,v]=p.useState(null),[C,w]=p.useState(0),E=p.useCallback((O=400,h=300)=>{const y=t.width,D=48,S=document.getElementById("react-scheduler");if(!S)return{x:r.x+y+16,y:r.y};const $=S.scrollLeft,G=S.scrollTop,Q=S.clientWidth,P=S.clientHeight,k=r.x-$,A=r.y-G,N={left:Ae+16,right:Q-16,top:16,bottom:P-16},I=N.right-(k+y),F=k-N.left,J=N.bottom-(A+D),ne=A-N.top;let ie,H;return I>=O+16?ie=k+y+16:F>=O+16?ie=k-O-16:I>=F?(ie=k+y+16,ie+O>N.right&&(ie=N.right-O)):(ie=k-O-16,ie<N.left&&(ie=N.left)),J>=h+16?H=A+D+16:ne>=h+16?H=A-h-16:J>=ne?(H=A+D+16,H+h>N.bottom&&(H=N.bottom-h)):(H=A-h-16,H<N.top&&(H=N.top)),ie=Math.max(N.left,Math.min(ie,N.right-O)),H=Math.max(N.top,Math.min(H,N.bottom-h)),{x:ie+$,y:H+G}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&C===0?w(r.x):s==="idle"&&w(0)},[s,e,r.x,C]),p.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const O=[];let h=0;for(const x of a){const y=Math.max(x.data.length,1);if(x.capacity!==void 0&&e.totalPassengers>x.capacity)for(let D=0;D<y;D++)O.push(h+D);h+=y}return O},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const L=s==="animating",U=Zr(e.bgColor??""),W=()=>{if(!n)return"";const O=Y(n.startDate).format("MMM D, HH:mm"),h=Y(n.endDate).format("HH:mm");return`${O} - ${h}`};return i.jsxs(xl,{children:[m.map(O=>i.jsx(Dl,{style:{top:`${u(O)}px`,height:`${pe}px`}},O)),n&&s==="dragging"&&i.jsx($l,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${u(n.resourceIndex)}px`,height:`${pe}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(kl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(pe-48)/2}px`,width:`${t.width}px`}}),i.jsx(Ml,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(pe-48)/2}px`},children:W()})]}),n&&s==="dragging"&&l&&i.jsx(El,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${u(n.resourceIndex)}px`,height:`${pe}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const O=E(400,300);return i.jsxs(so,{style:{left:`${O.x}px`,top:`${O.y}px`},children:[i.jsxs(io,{children:[i.jsx(ao,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(co,{children:n.conflicts.map((h,x)=>{const y=Y(n.startDate).format("YYYY-MM-DD"),D=Y(n.endDate).format("YYYY-MM-DD"),S=Y(h.event.startDate).format("YYYY-MM-DD"),$=Y(h.event.endDate).format("YYYY-MM-DD"),G=Y(h.conflictStart).format("YYYY-MM-DD"),Q=Y(h.conflictEnd).format("YYYY-MM-DD"),P=y!==D,k=S!==$,A=G!==Q,N=P?Y(n.startDate).format("MMM D, h:mm A"):Y(n.startDate).format("h:mm A"),I=P?Y(n.endDate).format("MMM D, h:mm A"):Y(n.endDate).format("h:mm A"),F=k?Y(h.event.startDate).format("MMM D, h:mm A"):Y(h.event.startDate).format("h:mm A"),J=k?Y(h.event.endDate).format("MMM D, h:mm A"):Y(h.event.endDate).format("h:mm A"),ne=A?Y(h.conflictStart).format("MMM D, h:mm A"):Y(h.conflictStart).format("h:mm A"),ie=A?Y(h.conflictEnd).format("MMM D, h:mm A"):Y(h.conflictEnd).format("h:mm A"),H=A?"":Y(h.conflictStart).format("MMM D"),j=n.startDate.getTime(),q=n.endDate.getTime(),te=h.event.startDate.getTime(),M=h.event.endDate.getTime(),Z=j>=te&&j<M,T=q>te&&q<=M,R=j<=te&&q>=M,B=te<=j&&M>=q;let z=!1,g=!1,X=!1,_=!1,V="";return R||B?(z=!0,g=!0,X=!0,_=!0,V=`⚠️ ${c.conflicts.changeBoth}`):Z&&T?(z=!0,g=!0,X=!0,_=!0,V=`⚠️ ${c.conflicts.changeBoth}`):Z?(z=!0,_=!0,V=`⚠️ ${c.conflicts.changeStart}`):T&&(g=!0,X=!0,V=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(An,{children:[i.jsxs(Pn,{children:[c.conflicts.conflictsWith,": ",h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(gt,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",z?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:N}):N," ",c.conflicts.to," ",g?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:I}):I]}),i.jsxs(gt,{children:[i.jsx("strong",{children:h.event.title})," ",c.conflicts.currentlyAt,":"," ",X?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:F}):F," ",c.conflicts.to," ",_?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:J}):J]}),i.jsxs(lo,{children:[c.conflicts.conflictTime,": ",H&&`${H}, `,ne," - ",ie]}),V&&i.jsx(gt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:V})]},x)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const O=E(400,400);return i.jsxs(so,{style:{left:`${O.x}px`,top:`${O.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(io,{style:{color:"#2E7D32"},children:[i.jsx(ao,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(co,{children:[(()=>{const h=n.nearbyEvents.some(S=>S.position==="before"),x=n.nearbyEvents.some(S=>S.position==="after"),y=Y(n.startDate).format("h:mm A"),D=Y(n.endDate).format("h:mm A");return i.jsxs(An,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(Pn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(gt,{style:{fontWeight:600},children:[Y(n.startDate).format("MMM D"),":"," ",h?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:y}):y," ",c.conflicts.to," ",x?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:D}):D]}),i.jsx(gt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((h,x)=>{const y=Y(h.event.startDate).format("YYYY-MM-DD"),D=Y(h.event.endDate).format("YYYY-MM-DD"),S=y!==D,$=S?Y(h.event.startDate).format("MMM D, h:mm A"):Y(h.event.startDate).format("h:mm A"),G=S?Y(h.event.endDate).format("MMM D, h:mm A"):Y(h.event.endDate).format("h:mm A"),Q=Y(h.event.startDate).format("MMM D"),P=Math.floor(h.timeGap/(1e3*60*60)),k=Math.floor(h.timeGap%(1e3*60*60)/(1e3*60)),A=P>0?`${P}h ${k}m`:`${k}m`,N=h.position==="after",I=h.position==="before";return i.jsxs(An,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(Pn,{style:{color:"#1B5E20"},children:[h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(gt,{children:[!S&&`${Q}: `,N?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:$}):$," ",c.conflicts.to," ",I?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:G}):G]}),i.jsxs(lo,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[A," ",h.position==="before"?c.conflicts.before:c.conflicts.after]})]},x)})]})]})})(),i.jsx(bl,{$isAnimating:L,$animateToX:f==null?void 0:f.x,$animateToY:f==null?void 0:f.y,style:{left:L?`${(f==null?void 0:f.x)??0}px`:"0",top:L?`${(f==null?void 0:f.y)??0}px`:"0",transform:L?void 0:`translate3d(${l?C:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:U},children:i.jsx(wl,{children:i.jsxs(Cl,{children:[i.jsx(oo,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(oo,{children:e.subtitle}),e.description&&i.jsx(Sl,{children:e.description})]})})})]})},Tl=Be`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,Al=b.div`
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
  animation: ${Tl} 1.5s ease-in-out infinite;
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
`,Pl=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(Al,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Ol=Be`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Il=b.div`
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
  animation: ${Ol} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,Yl=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Ll=b.span`
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
`,Nl=b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Fl=b.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;b.div`
  display: none;
`,b.div`
  display: none;
`,b.button`
  display: none;
`;const zl=b.div`
  display: flex;
  gap: 8px;
`,uo=b.button`
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
`,Hl=({selections:e,onConfirm:r,onClear:t})=>{var w;const o=Ke().multiSelect,s=p.useMemo(()=>e.filter(E=>E.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",u=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",f=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((w=o==null?void 0:o.conflictsWarning)==null?void 0:w.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,C=i.jsxs(Il,{$hasConflicts:v,"data-multi-select-ui":!0,children:[i.jsxs(Yl,{children:[i.jsxs(Ll,{$hasConflicts:v,children:[e.length," ",a]}),v&&i.jsxs(Nl,{children:["⚠️ ",f]}),i.jsx(Fl,{children:l})]}),i.jsxs(zl,{children:[i.jsxs(uo,{variant:"secondary",onClick:t,children:["✕ ",d]}),i.jsx(uo,{variant:"primary",$hasConflicts:v,onClick:r,children:v?`⚠️ ${u}`:`✓ ${c}`})]})]});return po.createPortal(C,document.body)},Wl=Be`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Bl=b.div`
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
  animation: ${Wl} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&it`
      border-style: dashed;
    `}
`,jl=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,Zl=b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Vl=b.button`
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
`,Gl=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,d]=p.useState(null),[c,u]=p.useState({x:0,y:0}),f=p.useRef(null),v=p.useMemo(()=>{switch(t){case 0:return Ye*7;case 1:return Ce;case 2:return $e;default:return Ce}},[t]),C=p.useMemo(()=>Y().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),w=p.useMemo(()=>e.map((x,y)=>{let D=0,S=!1;for(const F of r){if(F.id===x.resourceId){S=!0;break}D+=Math.max(F.data.length,1)}if(!S)return null;const $=Y(x.startDate),G=Y(x.endDate);let Q,P;switch(t){case 0:Q=Math.floor($.diff(C,"days")/7),P=Math.max(1,Math.ceil(G.diff($,"days")/7)+1);break;case 1:Q=$.diff(C,"days"),P=Math.max(1,G.diff($,"days")+1);break;case 2:Q=$.diff(C,"hours"),P=Math.max(1,G.diff($,"hours")+1);break;default:Q=0,P=1}const k=Q*v;let A=0;for(const F of a)F<=D&&A++;const N=D*pe+A*Pe,I=P*v;return{index:y,selection:x,x:k,y:N,width:I,height:pe}}),[e,r,t,C,v]),E=(x,y)=>{const D=Y(x).format("MMM D"),S=Y(y).format("MMM D");return D===S?D:`${D} - ${S}`},m=x=>!x.hasConflict||!x.conflicts?"":`⚠️ Conflicts with:
${x.conflicts.map(D=>{const S=(D.overlapDuration/36e5).toFixed(1);return`• ${D.event.title} (${S}h overlap)`}).join(`
`)}`,L=p.useCallback(x=>{let y=0;for(const D of r){const S=Math.max(D.data.length,1);if(x>=y*pe&&x<(y+S)*pe)return{resourceId:D.id,resourceLabel:D.label};y+=S}return null},[r]),U=p.useCallback(x=>{const y=Math.floor(x/v);switch(t){case 0:return C.add(y*7,"days").toDate();case 1:return C.add(y,"days").toDate();case 2:return C.add(y,"hours").toDate();default:return C.toDate()}},[t,C,v]),W=p.useCallback((x,y)=>{!s||(x.preventDefault(),x.stopPropagation(),!w[y])||(f.current={x:x.clientX,y:x.clientY},d(y),u({x:0,y:0}))},[s,w]),O=p.useCallback(x=>{if(l===null||!f.current)return;const y=x.clientX-f.current.x,D=x.clientY-f.current.y,S=Math.round(y/v)*v,$=Math.round(D/pe)*pe;u({x:S,y:$})},[l,v]),h=p.useCallback(()=>{if(l===null||!s){d(null),u({x:0,y:0}),f.current=null;return}const x=w[l];if(!x){d(null),u({x:0,y:0}),f.current=null;return}const y=x.x+c.x,D=x.y+c.y,S=L(D+pe/2);if(!S){d(null),u({x:0,y:0}),f.current=null;return}const $=U(y),G=e[l],Q=G.endDate.getTime()-G.startDate.getTime(),P=new Date($.getTime()+Q);s(l,{startDate:$,endDate:P,resourceId:S.resourceId,resourceLabel:S.resourceLabel}),d(null),u({x:0,y:0}),f.current=null},[l,c,w,e,s,L,U]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",O),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",h)}},[l,O,h]),i.jsx(i.Fragment,{children:w.map(x=>{if(!x)return null;const y=x.selection.hasConflict||!1,D=l===x.index,S=D?x.x+c.x:x.x,$=D?x.y+c.y:x.y;return i.jsxs(Bl,{$hasConflict:y,$isDragging:D,style:{left:S,top:$,width:x.width,height:x.height},"data-multi-select-ui":!0,onMouseDown:G=>W(G,x.index),children:[y&&i.jsx(Zl,{title:m(x.selection),children:"⚠️"}),i.jsx(jl,{$hasConflict:y,children:E(x.selection.startDate,x.selection.endDate)}),i.jsx(Vl,{onClick:G=>{G.stopPropagation(),o(x.index)},onMouseDown:G=>G.stopPropagation(),title:y?"Remove conflicting selection":"Remove selection",children:"×"})]},x.index)})})},fo=(e,r,t,n)=>{if(r===2)return null;const o=r===0?Ye*7:Ce,s=Y().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"),a=e.startOf("day"),l=r===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=n?null:{x:l*o,width:o}},Xl=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({theme:e})=>e.colors.today}12;
`,Ul=({zoom:e,startDate:r})=>{const{cols:t}=He(),n=p.useMemo(()=>fo(Y(),e,r,t),[e,r,t]);return n?i.jsx(Xl,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},Kl="#2f6fed",Jl=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${Kl}1c;
`,ql=({zoom:e,startDate:r})=>{const{cols:t,jumpDate:n}=He(),o=p.useMemo(()=>!n||n.isSame(Y(),"day")?null:fo(n,e,r,t),[n,e,r,t]);return o?i.jsx(Jl,{style:{left:`${o.x}px`,width:`${o.width}px`},"aria-hidden":!0}):null},Td="";Te.Scheduler=Ea,Object.defineProperty(Te,Symbol.toStringTag,{value:"Module"})});
