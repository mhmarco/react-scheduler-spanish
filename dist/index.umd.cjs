(function($e,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],a):($e=typeof globalThis<"u"?globalThis:$e||self,a($e["react-scheduler"]={},$e["react/jsx-runtime"],$e.React,$e.ReactDOM))})(this,function($e,a,p,to){"use strict";var Ml=Object.defineProperty;var kl=($e,a,p)=>a in $e?Ml($e,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):$e[a]=p;var eo=($e,a,p)=>(kl($e,typeof a!="symbol"?a+"":a,p),p);function no(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const ne=no(p);var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ft={},ro={get exports(){return ft},set exports(e){ft=e}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function oo(){if(En)return fe;En=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function k(g){if(typeof g=="object"&&g!==null){var F=g.$$typeof;switch(F){case e:switch(g=g.type,g){case t:case o:case r:case c:case d:return g;default:switch(g=g&&g.$$typeof,g){case l:case i:case u:case y:case h:case s:return g;default:return F}}case n:return F}}}return fe.ContextConsumer=i,fe.ContextProvider=s,fe.Element=e,fe.ForwardRef=u,fe.Fragment=t,fe.Lazy=y,fe.Memo=h,fe.Portal=n,fe.Profiler=o,fe.StrictMode=r,fe.Suspense=c,fe.SuspenseList=d,fe.isAsyncMode=function(){return!1},fe.isConcurrentMode=function(){return!1},fe.isContextConsumer=function(g){return k(g)===i},fe.isContextProvider=function(g){return k(g)===s},fe.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},fe.isForwardRef=function(g){return k(g)===u},fe.isFragment=function(g){return k(g)===t},fe.isLazy=function(g){return k(g)===y},fe.isMemo=function(g){return k(g)===h},fe.isPortal=function(g){return k(g)===n},fe.isProfiler=function(g){return k(g)===o},fe.isStrictMode=function(g){return k(g)===r},fe.isSuspense=function(g){return k(g)===c},fe.isSuspenseList=function(g){return k(g)===d},fe.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===t||g===o||g===r||g===c||g===d||g===S||typeof g=="object"&&g!==null&&(g.$$typeof===y||g.$$typeof===h||g.$$typeof===s||g.$$typeof===i||g.$$typeof===u||g.$$typeof===x||g.getModuleId!==void 0)},fe.typeOf=k,fe}var he={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _n;function so(){return _n||(_n=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),x=!1,k=!1,g=!1,F=!1,X=!1,Z;Z=Symbol.for("react.module.reference");function E(N){return!!(typeof N=="string"||typeof N=="function"||N===t||N===o||X||N===r||N===c||N===d||F||N===S||x||k||g||typeof N=="object"&&N!==null&&(N.$$typeof===y||N.$$typeof===h||N.$$typeof===s||N.$$typeof===i||N.$$typeof===u||N.$$typeof===Z||N.getModuleId!==void 0))}function f(N){if(typeof N=="object"&&N!==null){var q=N.$$typeof;switch(q){case e:var re=N.type;switch(re){case t:case o:case r:case c:case d:return re;default:var W=re&&re.$$typeof;switch(W){case l:case i:case u:case y:case h:case s:return W;default:return q}}case n:return q}}}var m=i,b=s,_=e,P=u,z=t,V=y,R=h,$=n,A=o,T=r,j=c,O=d,J=!1,ee=!1;function se(N){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function oe(N){return ee||(ee=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function B(N){return f(N)===i}function G(N){return f(N)===s}function K(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function U(N){return f(N)===u}function C(N){return f(N)===t}function I(N){return f(N)===y}function v(N){return f(N)===h}function L(N){return f(N)===n}function H(N){return f(N)===o}function Y(N){return f(N)===r}function M(N){return f(N)===c}function te(N){return f(N)===d}he.ContextConsumer=m,he.ContextProvider=b,he.Element=_,he.ForwardRef=P,he.Fragment=z,he.Lazy=V,he.Memo=R,he.Portal=$,he.Profiler=A,he.StrictMode=T,he.Suspense=j,he.SuspenseList=O,he.isAsyncMode=se,he.isConcurrentMode=oe,he.isContextConsumer=B,he.isContextProvider=G,he.isElement=K,he.isForwardRef=U,he.isFragment=C,he.isLazy=I,he.isMemo=v,he.isPortal=L,he.isProfiler=H,he.isStrictMode=Y,he.isSuspense=M,he.isSuspenseList=te,he.isValidElementType=E,he.typeOf=f}()),he}(function(e){process.env.NODE_ENV==="production"?e.exports=oo():e.exports=so()})(ro);function io(e){function n(B,G,K,U,C){for(var I=0,v=0,L=0,H=0,Y,M,te=0,N=0,q,re=q=Y=0,W=0,ae=0,le=0,ue=0,me=K.length,Me=me-1,ve,Q="",ie="",ce="",xe="",be;W<me;){if(M=K.charCodeAt(W),W===Me&&v+H+L+I!==0&&(v!==0&&(M=v===47?10:47),H=L=I=0,me++,Me++),v+H+L+I===0){if(W===Me&&(0<ae&&(Q=Q.replace(y,"")),0<Q.trim().length)){switch(M){case 32:case 9:case 59:case 13:case 10:break;default:Q+=K.charAt(W)}M=59}switch(M){case 123:for(Q=Q.trim(),Y=Q.charCodeAt(0),q=1,ue=++W;W<me;){switch(M=K.charCodeAt(W)){case 123:q++;break;case 125:q--;break;case 47:switch(M=K.charCodeAt(W+1)){case 42:case 47:e:{for(re=W+1;re<Me;++re)switch(K.charCodeAt(re)){case 47:if(M===42&&K.charCodeAt(re-1)===42&&W+2!==re){W=re+1;break e}break;case 10:if(M===47){W=re+1;break e}}W=re}}break;case 91:M++;case 40:M++;case 34:case 39:for(;W++<Me&&K.charCodeAt(W)!==M;);}if(q===0)break;W++}switch(q=K.substring(ue,W),Y===0&&(Y=(Q=Q.replace(h,"").trim()).charCodeAt(0)),Y){case 64:switch(0<ae&&(Q=Q.replace(y,"")),M=Q.charCodeAt(1),M){case 100:case 109:case 115:case 45:ae=G;break;default:ae=j}if(q=n(G,ae,q,M,C+1),ue=q.length,0<J&&(ae=t(j,Q,le),be=l(3,q,ae,G,$,R,ue,M,C,U),Q=ae.join(""),be!==void 0&&(ue=(q=be.trim()).length)===0&&(M=0,q="")),0<ue)switch(M){case 115:Q=Q.replace(m,i);case 100:case 109:case 45:q=Q+"{"+q+"}";break;case 107:Q=Q.replace(X,"$1 $2"),q=Q+"{"+q+"}",q=T===1||T===2&&s("@"+q,3)?"@-webkit-"+q+"@"+q:"@"+q;break;default:q=Q+q,U===112&&(q=(ie+=q,""))}else q="";break;default:q=n(G,t(G,Q,le),q,U,C+1)}ce+=q,q=le=ae=re=Y=0,Q="",M=K.charCodeAt(++W);break;case 125:case 59:if(Q=(0<ae?Q.replace(y,""):Q).trim(),1<(ue=Q.length))switch(re===0&&(Y=Q.charCodeAt(0),Y===45||96<Y&&123>Y)&&(ue=(Q=Q.replace(" ",":")).length),0<J&&(be=l(1,Q,G,B,$,R,ie.length,U,C,U))!==void 0&&(ue=(Q=be.trim()).length)===0&&(Q="\0\0"),Y=Q.charCodeAt(0),M=Q.charCodeAt(1),Y){case 0:break;case 64:if(M===105||M===99){xe+=Q+K.charAt(W);break}default:Q.charCodeAt(ue-1)!==58&&(ie+=o(Q,Y,M,Q.charCodeAt(2)))}le=ae=re=Y=0,Q="",M=K.charCodeAt(++W)}}switch(M){case 13:case 10:v===47?v=0:1+Y===0&&U!==107&&0<Q.length&&(ae=1,Q+="\0"),0<J*se&&l(0,Q,G,B,$,R,ie.length,U,C,U),R=1,$++;break;case 59:case 125:if(v+H+L+I===0){R++;break}default:switch(R++,ve=K.charAt(W),M){case 9:case 32:if(H+I+v===0)switch(te){case 44:case 58:case 9:case 32:ve="";break;default:M!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:H+v+I===0&&(ae=le=1,ve="\f"+ve);break;case 108:if(H+v+I+A===0&&0<re)switch(W-re){case 2:te===112&&K.charCodeAt(W-3)===58&&(A=te);case 8:N===111&&(A=N)}break;case 58:H+v+I===0&&(re=W);break;case 44:v+L+H+I===0&&(ae=1,ve+="\r");break;case 34:case 39:v===0&&(H=H===M?0:H===0?M:H);break;case 91:H+v+L===0&&I++;break;case 93:H+v+L===0&&I--;break;case 41:H+v+I===0&&L--;break;case 40:if(H+v+I===0){if(Y===0)switch(2*te+3*N){case 533:break;default:Y=1}L++}break;case 64:v+L+H+I+re+q===0&&(q=1);break;case 42:case 47:if(!(0<H+I+L))switch(v){case 0:switch(2*M+3*K.charCodeAt(W+1)){case 235:v=47;break;case 220:ue=W,v=42}break;case 42:M===47&&te===42&&ue+2!==W&&(K.charCodeAt(ue+2)===33&&(ie+=K.substring(ue,W+1)),ve="",v=0)}}v===0&&(Q+=ve)}N=te,te=M,W++}if(ue=ie.length,0<ue){if(ae=G,0<J&&(be=l(2,ie,ae,B,$,R,ue,U,C,U),be!==void 0&&(ie=be).length===0))return xe+ie+ce;if(ie=ae.join(",")+"{"+ie+"}",T*A!==0){switch(T!==2||s(ie,2)||(A=0),A){case 111:ie=ie.replace(E,":-moz-$1")+ie;break;case 112:ie=ie.replace(Z,"::-webkit-input-$1")+ie.replace(Z,"::-moz-$1")+ie.replace(Z,":-ms-input-$1")+ie}A=0}}return xe+ie+ce}function t(B,G,K){var U=G.trim().split(g);G=U;var C=U.length,I=B.length;switch(I){case 0:case 1:var v=0;for(B=I===0?"":B[0]+" ";v<C;++v)G[v]=r(B,G[v],K).trim();break;default:var L=v=0;for(G=[];v<C;++v)for(var H=0;H<I;++H)G[L++]=r(B[H]+" ",U[v],K).trim()}return G}function r(B,G,K){var U=G.charCodeAt(0);switch(33>U&&(U=(G=G.trim()).charCodeAt(0)),U){case 38:return G.replace(F,"$1"+B.trim());case 58:return B.trim()+G.replace(F,"$1"+B.trim());default:if(0<1*K&&0<G.indexOf("\f"))return G.replace(F,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+G}function o(B,G,K,U){var C=B+";",I=2*G+3*K+4*U;if(I===944){B=C.indexOf(":",9)+1;var v=C.substring(B,C.length-1).trim();return v=C.substring(0,B).trim()+v+";",T===1||T===2&&s(v,1)?"-webkit-"+v+v:v}if(T===0||T===2&&!s(C,1))return C;switch(I){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(V,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return v=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+v+"-webkit-"+C+"-ms-flex-pack"+v+C;case 1005:return x.test(C)?C.replace(S,":-webkit-")+C.replace(S,":-moz-")+C:C;case 1e3:switch(v=C.substring(13).trim(),G=v.indexOf("-")+1,v.charCodeAt(0)+v.charCodeAt(G)){case 226:v=C.replace(f,"tb");break;case 232:v=C.replace(f,"tb-rl");break;case 220:v=C.replace(f,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+v+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(G=(C=B).length-10,v=(C.charCodeAt(G)===33?C.substring(0,G):C).substring(B.indexOf(":",7)+1).trim(),I=v.charCodeAt(0)+(v.charCodeAt(7)|0)){case 203:if(111>v.charCodeAt(8))break;case 115:C=C.replace(v,"-webkit-"+v)+";"+C;break;case 207:case 102:C=C.replace(v,"-webkit-"+(102<I?"inline-":"")+"box")+";"+C.replace(v,"-webkit-"+v)+";"+C.replace(v,"-ms-"+v+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return v=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+v+"-ms-flex-"+v+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(_,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(_,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(z.test(B)===!0)return(v=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?o(B.replace("stretch","fill-available"),G,K,U).replace(":fill-available",":stretch"):C.replace(v,"-webkit-"+v)+C.replace(v,"-moz-"+v.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,K+U===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+C}return C}function s(B,G){var K=B.indexOf(G===1?":":"{"),U=B.substring(0,G!==3?K:10);return K=B.substring(K+1,B.length-1),ee(G!==2?U:U.replace(P,"$1"),K,G)}function i(B,G){var K=o(G,G.charCodeAt(0),G.charCodeAt(1),G.charCodeAt(2));return K!==G+";"?K.replace(b," or ($1)").substring(4):"("+G+")"}function l(B,G,K,U,C,I,v,L,H,Y){for(var M=0,te=G,N;M<J;++M)switch(N=O[M].call(d,B,te,K,U,C,I,v,L,H,Y)){case void 0:case!1:case!0:case null:break;default:te=N}if(te!==G)return te}function u(B){switch(B){case void 0:case null:J=O.length=0;break;default:if(typeof B=="function")O[J++]=B;else if(typeof B=="object")for(var G=0,K=B.length;G<K;++G)u(B[G]);else se=!!B|0}return u}function c(B){return B=B.prefix,B!==void 0&&(ee=null,B?typeof B!="function"?T=1:(T=2,ee=B):T=0),c}function d(B,G){var K=B;if(33>K.charCodeAt(0)&&(K=K.trim()),oe=K,K=[oe],0<J){var U=l(-1,G,K,K,$,R,0,0,0,0);U!==void 0&&typeof U=="string"&&(G=U)}var C=n(j,K,G,0,0);return 0<J&&(U=l(-2,C,K,K,$,R,C.length,0,0,0),U!==void 0&&(C=U)),oe="",A=0,R=$=1,C}var h=/^\0+/g,y=/[\0\r\f]/g,S=/: */g,x=/zoo|gra/,k=/([,: ])(transform)/g,g=/,\r+?/g,F=/([\t\r\n ])*\f?&/g,X=/@(k\w+)\s*(\S*)\s*/,Z=/::(place)/g,E=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,m=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,_=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,R=1,$=1,A=0,T=1,j=[],O=[],J=0,ee=null,se=0,oe="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var ao={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function co(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var lo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Tn=co(function(e){return lo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Yt={},uo={get exports(){return Yt},set exports(e){Yt=e}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var An;function fo(){if(An)return pe;An=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,F=e?Symbol.for("react.responder"):60118,X=e?Symbol.for("react.scope"):60119;function Z(f){if(typeof f=="object"&&f!==null){var m=f.$$typeof;switch(m){case n:switch(f=f.type,f){case u:case c:case r:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case l:case d:case x:case S:case i:return f;default:return m}}case t:return m}}}function E(f){return Z(f)===c}return pe.AsyncMode=u,pe.ConcurrentMode=c,pe.ContextConsumer=l,pe.ContextProvider=i,pe.Element=n,pe.ForwardRef=d,pe.Fragment=r,pe.Lazy=x,pe.Memo=S,pe.Portal=t,pe.Profiler=s,pe.StrictMode=o,pe.Suspense=h,pe.isAsyncMode=function(f){return E(f)||Z(f)===u},pe.isConcurrentMode=E,pe.isContextConsumer=function(f){return Z(f)===l},pe.isContextProvider=function(f){return Z(f)===i},pe.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===n},pe.isForwardRef=function(f){return Z(f)===d},pe.isFragment=function(f){return Z(f)===r},pe.isLazy=function(f){return Z(f)===x},pe.isMemo=function(f){return Z(f)===S},pe.isPortal=function(f){return Z(f)===t},pe.isProfiler=function(f){return Z(f)===s},pe.isStrictMode=function(f){return Z(f)===o},pe.isSuspense=function(f){return Z(f)===h},pe.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===c||f===s||f===o||f===h||f===y||typeof f=="object"&&f!==null&&(f.$$typeof===x||f.$$typeof===S||f.$$typeof===i||f.$$typeof===l||f.$$typeof===d||f.$$typeof===g||f.$$typeof===F||f.$$typeof===X||f.$$typeof===k)},pe.typeOf=Z,pe}var ge={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn;function ho(){return Pn||(Pn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,F=e?Symbol.for("react.responder"):60118,X=e?Symbol.for("react.scope"):60119;function Z(M){return typeof M=="string"||typeof M=="function"||M===r||M===c||M===s||M===o||M===h||M===y||typeof M=="object"&&M!==null&&(M.$$typeof===x||M.$$typeof===S||M.$$typeof===i||M.$$typeof===l||M.$$typeof===d||M.$$typeof===g||M.$$typeof===F||M.$$typeof===X||M.$$typeof===k)}function E(M){if(typeof M=="object"&&M!==null){var te=M.$$typeof;switch(te){case n:var N=M.type;switch(N){case u:case c:case r:case s:case o:case h:return N;default:var q=N&&N.$$typeof;switch(q){case l:case d:case x:case S:case i:return q;default:return te}}case t:return te}}}var f=u,m=c,b=l,_=i,P=n,z=d,V=r,R=x,$=S,A=t,T=s,j=o,O=h,J=!1;function ee(M){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(M)||E(M)===u}function se(M){return E(M)===c}function oe(M){return E(M)===l}function B(M){return E(M)===i}function G(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function K(M){return E(M)===d}function U(M){return E(M)===r}function C(M){return E(M)===x}function I(M){return E(M)===S}function v(M){return E(M)===t}function L(M){return E(M)===s}function H(M){return E(M)===o}function Y(M){return E(M)===h}ge.AsyncMode=f,ge.ConcurrentMode=m,ge.ContextConsumer=b,ge.ContextProvider=_,ge.Element=P,ge.ForwardRef=z,ge.Fragment=V,ge.Lazy=R,ge.Memo=$,ge.Portal=A,ge.Profiler=T,ge.StrictMode=j,ge.Suspense=O,ge.isAsyncMode=ee,ge.isConcurrentMode=se,ge.isContextConsumer=oe,ge.isContextProvider=B,ge.isElement=G,ge.isForwardRef=K,ge.isFragment=U,ge.isLazy=C,ge.isMemo=I,ge.isPortal=v,ge.isProfiler=L,ge.isStrictMode=H,ge.isSuspense=Y,ge.isValidElementType=Z,ge.typeOf=E}()),ge}(function(e){process.env.NODE_ENV==="production"?e.exports=fo():e.exports=ho()})(uo);var Lt=Yt,po={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},go={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},In={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nt={};Nt[Lt.ForwardRef]=mo,Nt[Lt.Memo]=In;function On(e){return Lt.isMemo(e)?In:Nt[e.$$typeof]||po}var yo=Object.defineProperty,vo=Object.getOwnPropertyNames,Yn=Object.getOwnPropertySymbols,xo=Object.getOwnPropertyDescriptor,bo=Object.getPrototypeOf,Ln=Object.prototype;function Nn(e,n,t){if(typeof n!="string"){if(Ln){var r=bo(n);r&&r!==Ln&&Nn(e,r,t)}var o=vo(n);Yn&&(o=o.concat(Yn(n)));for(var s=On(e),i=On(n),l=0;l<o.length;++l){var u=o[l];if(!go[u]&&!(t&&t[u])&&!(i&&i[u])&&!(s&&s[u])){var c=xo(n,u);try{yo(e,u,c)}catch{}}}}return e}var wo=Nn;function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Fn=function(e,n){for(var t=[e[0]],r=0,o=n.length;r<o;r+=1)t.push(n[r],e[r+1]);return t},Ft=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ft.typeOf(e)},vt=Object.freeze([]),ze=Object.freeze({});function Ke(e){return typeof e=="function"}function Ht(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Wt(e){return e&&typeof e.styledComponentId=="string"}var qe=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",zt=typeof window<"u"&&"HTMLElement"in window,So=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Co={},Mo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function ko(){for(var e=arguments.length<=0?void 0:arguments[0],n=[],t=1,r=arguments.length;t<r;t+=1)n.push(t<0||arguments.length<=t?void 0:arguments[t]);return n.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Pe(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(ko.apply(void 0,[Mo[e]].concat(t)).trim())}var $o=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},n.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Pe(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var l=s;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[t]++,u++)},n.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},n.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,l=s;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),xt=new Map,bt=new Map,ht=1,wt=function(e){if(xt.has(e))return xt.get(e);for(;bt.has(ht);)ht++;var n=ht++;return process.env.NODE_ENV!=="production"&&((0|n)<0||n>1<<30)&&Pe(16,""+n),xt.set(e,n),bt.set(n,e),n},Do=function(e){return bt.get(e)},Eo=function(e,n){n>=ht&&(ht=n+1),xt.set(e,n),bt.set(n,e)},_o="style["+qe+'][data-styled-version="5.3.8"]',To=new RegExp("^"+qe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ao=function(e,n,t){for(var r,o=t.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(n,r)},Po=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var l=i.match(To);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Eo(c,u),Ao(e,c,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},Io=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Hn=function(e){var n=document.head,t=e||n,r=document.createElement("style"),o=function(l){for(var u=l.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(qe))return d}}(t),s=o!==void 0?o.nextSibling:null;r.setAttribute(qe,"active"),r.setAttribute("data-styled-version","5.3.8");var i=Io();return i&&r.setAttribute("nonce",i),t.insertBefore(r,s),r},Oo=function(){function e(t){var r=this.element=Hn(t);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,l=s.length;i<l;i++){var u=s[i];if(u.ownerNode===o)return u}Pe(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Yo=function(){function e(t){var r=this.element=Hn(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Lo=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wn=zt,No={isServer:!zt,useCSSOMInjection:!So},St=function(){function e(t,r,o){t===void 0&&(t=ze),r===void 0&&(r={}),this.options=Te({},No,{},t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&zt&&Wn&&(Wn=!1,function(s){for(var i=document.querySelectorAll(_o),l=0,u=i.length;l<u;l++){var c=i[l];c&&c.getAttribute(qe)!=="active"&&(Po(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return wt(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Te({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,s=r.useCSSOMInjection,i=r.target,t=o?new Lo(i):s?new Oo(i):new Yo(i),new $o(t)));var t,r,o,s,i},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(wt(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},n.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(wt(t),o)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(wt(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),o=r.length,s="",i=0;i<o;i++){var l=Do(i);if(l!==void 0){var u=t.names.get(l),c=r.getGroup(i);if(u&&c&&u.size){var d=qe+".g"+i+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(y){y.length>0&&(h+=y+",")}),s+=""+c+d+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Fo=/(a)(d)/gi,zn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bt(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=zn(n%52)+t;return(zn(n%52)+t).replace(Fo,"$1-$2")}var Ze=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},Bn=function(e){return Ze(5381,e)};function jn(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(Ke(t)&&!Wt(t))return!1}return!0}var Ho=Bn("5.3.8"),Wo=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&jn(n),this.componentId=t,this.baseHash=Ze(Ho,t),this.baseStyle=r,St.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=Ve(this.rules,n,t,r).join(""),l=Bt(Ze(this.baseHash,i)>>>0);if(!t.hasNameForId(o,l)){var u=r(i,"."+l,void 0,o);t.insertRules(o,l,u)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=Ze(this.baseHash,r.hash),h="",y=0;y<c;y++){var S=this.rules[y];if(typeof S=="string")h+=S,process.env.NODE_ENV!=="production"&&(d=Ze(d,S+y));else if(S){var x=Ve(S,n,t,r),k=Array.isArray(x)?x.join(""):x;d=Ze(d,k+y),h+=k}}if(h){var g=Bt(d>>>0);if(!t.hasNameForId(o,g)){var F=r(h,"."+g,void 0,o);t.insertRules(o,g,F)}s.push(g)}}return s.join(" ")},e}(),zo=/^\s*\/\/.*$/gm,Bo=[":","[",".","#"];function jo(e){var n,t,r,o,s=e===void 0?ze:e,i=s.options,l=i===void 0?ze:i,u=s.plugins,c=u===void 0?vt:u,d=new io(l),h=[],y=function(k){function g(F){if(F)try{k(F+"}")}catch{}}return function(F,X,Z,E,f,m,b,_,P,z){switch(F){case 1:if(P===0&&X.charCodeAt(0)===64)return k(X+";"),"";break;case 2:if(_===0)return X+"/*|*/";break;case 3:switch(_){case 102:case 112:return k(Z[0]+X),"";default:return X+(z===0?"/*|*/":"")}case-2:X.split("/*|*/}").forEach(g)}}}(function(k){h.push(k)}),S=function(k,g,F){return g===0&&Bo.indexOf(F[t.length])!==-1||F.match(o)?k:"."+n};function x(k,g,F,X){X===void 0&&(X="&");var Z=k.replace(zo,""),E=g&&F?F+" "+g+" { "+Z+" }":Z;return n=X,t=g,r=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(F||!g?"":g,E)}return d.use([].concat(c,[function(k,g,F){k===2&&F.length&&F[0].lastIndexOf(t)>0&&(F[0]=F[0].replace(r,S))},y,function(k){if(k===-2){var g=h;return h=[],g}}])),x.hash=c.length?c.reduce(function(k,g){return g.name||Pe(15),Ze(k,g.name)},5381).toString():"",x}var Zn=p.createContext();Zn.Consumer;var Vn=p.createContext(),Zo=(Vn.Consumer,new St),jt=jo();function Gn(){return p.useContext(Zn)||Zo}function Xn(){return p.useContext(Vn)||jt}var Un=function(){function e(n,t){var r=this;this.inject=function(o,s){s===void 0&&(s=jt);var i=r.name+s.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,s(r.rules,i,"@keyframes"))},this.toString=function(){return Pe(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=jt),this.name+n.hash},e}(),Vo=/([A-Z])/,Go=/([A-Z])/g,Xo=/^ms-/,Uo=function(e){return"-"+e.toLowerCase()};function Kn(e){return Vo.test(e)?e.replace(Go,Uo).replace(Xo,"-ms-"):e}var qn=function(e){return e==null||e===!1||e===""};function Ve(e,n,t,r){if(Array.isArray(e)){for(var o,s=[],i=0,l=e.length;i<l;i+=1)(o=Ve(e[i],n,t,r))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(qn(e))return"";if(Wt(e))return"."+e.styledComponentId;if(Ke(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!n)return e;var u=e(n);return process.env.NODE_ENV!=="production"&&ft.isElement(u)&&console.warn(Ht(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ve(u,n,t,r)}var c;return e instanceof Un?t?(e.inject(t,r),e.getName(r)):e:Ft(e)?function d(h,y){var S,x,k=[];for(var g in h)h.hasOwnProperty(g)&&!qn(h[g])&&(Array.isArray(h[g])&&h[g].isCss||Ke(h[g])?k.push(Kn(g)+":",h[g],";"):Ft(h[g])?k.push.apply(k,d(h[g],g)):k.push(Kn(g)+": "+(S=g,(x=h[g])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||S in ao?String(x).trim():x+"px")+";"));return y?[y+" {"].concat(k,["}"]):k}(e):e.toString()}var Jn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ct(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return Ke(e)||Ft(e)?Jn(Ve(Fn(vt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Jn(Ve(Fn(e,t)))}var Qn=/invalid hook call/i,Mt=new Set,Rn=function(e,n){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(n?' with the id of "'+n+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,r=console.error;try{var o=!0;console.error=function(s){if(Qn.test(s))o=!1,Mt.delete(t);else{for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];r.apply(void 0,[s].concat(l))}},p.useRef(),o&&!Mt.has(t)&&(console.warn(t),Mt.add(t))}catch(s){Qn.test(s.message)&&Mt.delete(t)}finally{console.error=r}}},er=function(e,n,t){return t===void 0&&(t=ze),e.theme!==t.theme&&e.theme||n||t.theme},Ko=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qo=/(^-|-$)/g;function Zt(e){return e.replace(Ko,"-").replace(qo,"")}var Vt=function(e){return Bt(Bn(e)>>>0)};function kt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Gt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Jo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Qo(e,n,t){var r=e[t];Gt(n)&&Gt(r)?tr(r,n):e[t]=n}function tr(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(Gt(i))for(var l in i)Jo(l)&&Qo(e,i[l],l)}return e}var Je=p.createContext();Je.Consumer;function Ro(e){var n=p.useContext(Je),t=p.useMemo(function(){return function(r,o){if(!r)return Pe(14);if(Ke(r)){var s=r(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Pe(7)}return Array.isArray(r)||typeof r!="object"?Pe(8):o?Te({},o,{},r):r}(e.theme,n)},[e.theme,n]);return e.children?p.createElement(Je.Provider,{value:t},e.children):null}var Xt={};function nr(e,n,t){var r=Wt(e),o=!kt(e),s=n.attrs,i=s===void 0?vt:s,l=n.componentId,u=l===void 0?function(X,Z){var E=typeof X!="string"?"sc":Zt(X);Xt[E]=(Xt[E]||0)+1;var f=E+"-"+Vt("5.3.8"+E+Xt[E]);return Z?Z+"-"+f:f}(n.displayName,n.parentComponentId):l,c=n.displayName,d=c===void 0?function(X){return kt(X)?"styled."+X:"Styled("+Ht(X)+")"}(e):c,h=n.displayName&&n.componentId?Zt(n.displayName)+"-"+n.componentId:n.componentId||u,y=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,S=n.shouldForwardProp;r&&e.shouldForwardProp&&(S=n.shouldForwardProp?function(X,Z,E){return e.shouldForwardProp(X,Z,E)&&n.shouldForwardProp(X,Z,E)}:e.shouldForwardProp);var x,k=new Wo(t,h,r?e.componentStyle:void 0),g=k.isStatic&&i.length===0,F=function(X,Z){return function(E,f,m,b){var _=E.attrs,P=E.componentStyle,z=E.defaultProps,V=E.foldedComponentIds,R=E.shouldForwardProp,$=E.styledComponentId,A=E.target;process.env.NODE_ENV!=="production"&&p.useDebugValue($);var T=function(U,C,I){U===void 0&&(U=ze);var v=Te({},C,{theme:U}),L={};return I.forEach(function(H){var Y,M,te,N=H;for(Y in Ke(N)&&(N=N(v)),N)v[Y]=L[Y]=Y==="className"?(M=L[Y],te=N[Y],M&&te?M+" "+te:M||te):N[Y]}),[v,L]}(er(f,p.useContext(Je),z)||ze,f,_),j=T[0],O=T[1],J=function(U,C,I,v){var L=Gn(),H=Xn(),Y=C?U.generateAndInjectStyles(ze,L,H):U.generateAndInjectStyles(I,L,H);return process.env.NODE_ENV!=="production"&&p.useDebugValue(Y),process.env.NODE_ENV!=="production"&&!C&&v&&v(Y),Y}(P,b,j,process.env.NODE_ENV!=="production"?E.warnTooManyClasses:void 0),ee=m,se=O.$as||f.$as||O.as||f.as||A,oe=kt(se),B=O!==f?Te({},f,{},O):f,G={};for(var K in B)K[0]!=="$"&&K!=="as"&&(K==="forwardedAs"?G.as=B[K]:(R?R(K,Tn,se):!oe||Tn(K))&&(G[K]=B[K]));return f.style&&O.style!==f.style&&(G.style=Te({},f.style,{},O.style)),G.className=Array.prototype.concat(V,$,J!==$?J:null,f.className,O.className).filter(Boolean).join(" "),G.ref=ee,p.createElement(se,G)}(x,X,Z,g)};return F.displayName=d,(x=p.forwardRef(F)).attrs=y,x.componentStyle=k,x.displayName=d,x.shouldForwardProp=S,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):vt,x.styledComponentId=h,x.target=r?e.target:e,x.withComponent=function(X){var Z=n.componentId,E=function(m,b){if(m==null)return{};var _,P,z={},V=Object.keys(m);for(P=0;P<V.length;P++)_=V[P],b.indexOf(_)>=0||(z[_]=m[_]);return z}(n,["componentId"]),f=Z&&Z+"-"+(kt(X)?X:Zt(Ht(X)));return nr(X,Te({},E,{attrs:y,componentId:f}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=r?tr({},e.defaultProps,X):X}}),process.env.NODE_ENV!=="production"&&(Rn(d,h),x.warnTooManyClasses=function(X,Z){var E={},f=!1;return function(m){if(!f&&(E[m]=!0,Object.keys(E).length>=200)){var b=Z?' with the id of "'+Z+'"':"";console.warn("Over 200 classes were generated for component "+X+b+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,E={}}}}(d,h)),x.toString=function(){return"."+x.styledComponentId},o&&wo(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var Ut=function(e){return function n(t,r,o){if(o===void 0&&(o=ze),!ft.isValidElementType(r))return Pe(1,String(r));var s=function(){return t(r,o,Ct.apply(void 0,arguments))};return s.withConfig=function(i){return n(t,r,Te({},o,{},i))},s.attrs=function(i){return n(t,r,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(nr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ut[e]=Ut(e)});var es=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=jn(t),St.registerId(this.componentId+1)}var n=e.prototype;return n.createStyles=function(t,r,o,s){var i=s(Ve(this.rules,r,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,i)},n.removeStyles=function(t,r){r.clearRules(this.componentId+t)},n.renderStyles=function(t,r,o,s){t>2&&St.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,s)},e}();function ts(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Ct.apply(void 0,[e].concat(t)),s="sc-global-"+Vt(JSON.stringify(o)),i=new es(o,s);function l(c){var d=Gn(),h=Xn(),y=p.useContext(Je),S=p.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(x){return typeof x=="string"&&x.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(S,c,d,y,h),p.useLayoutEffect(function(){if(!d.server)return u(S,c,d,y,h),function(){return i.removeStyles(S,d)}},[S,c,d,y,h]),null}function u(c,d,h,y,S){if(i.isStatic)i.renderStyles(c,Co,h,S);else{var x=Te({},d,{theme:er(d,y,l.defaultProps)});i.renderStyles(c,x,h,S)}}return process.env.NODE_ENV!=="production"&&Rn(s),p.memo(l)}function $t(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Ct.apply(void 0,[e].concat(t)).join(""),s=Vt(o);return new Un(s,o)}var Dt=function(){return p.useContext(Je)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const w=Ut,pt="reactSchedulerOutsideWrapper",ns=ts`

  #${pt} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${pt} *,
 #${pt} *:before,
 #${pt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,rs={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},os={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},Qe=`
margin: 0;
padding: 0;
`,Re=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;w.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const ye=50,Ie=24,et=16,Ge=40,tt=Ge+et+Ie,nt=84,de=56,Ee=196,_e=12,Ce=50,rt=24,gt=16,Kt=40,ss=rt+gt+Kt,rr=24,or=52,Ae={topRow:"600 14px Inter",middleRow:"400 10px Inter",bottomRow:{name:"600 14px Inter",number:"600 10px Inter",hoursInDay:"400 9px Inter"}},ot=3,is=1.6,as=4.5,qt=12,Et=24,cs="reactSchedulerCanvasHeaderWrapper",sr="reactSchedulerCanvasWrapper",Oe=pt,ls=4,Jt=48,Be=5,ds=40,ir=8,Qt=Ie/2+2,ar=et/2+Ie+1,cr=2,we=60,De=21,lr=68;var Xe={},us={get exports(){return Xe},set exports(e){Xe=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){var t=1e3,r=6e4,o=36e5,s="millisecond",i="second",l="minute",u="hour",c="day",d="week",h="month",y="quarter",S="year",x="date",k="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function($){var A=["th","st","nd","rd"],T=$%100;return"["+$+(A[(T-20)%10]||A[T]||A[0])+"]"}},Z=function($,A,T){var j=String($);return!j||j.length>=A?$:""+Array(A+1-j.length).join(T)+$},E={s:Z,z:function($){var A=-$.utcOffset(),T=Math.abs(A),j=Math.floor(T/60),O=T%60;return(A<=0?"+":"-")+Z(j,2,"0")+":"+Z(O,2,"0")},m:function $(A,T){if(A.date()<T.date())return-$(T,A);var j=12*(T.year()-A.year())+(T.month()-A.month()),O=A.clone().add(j,h),J=T-O<0,ee=A.clone().add(j+(J?-1:1),h);return+(-(j+(T-O)/(J?O-ee:ee-O))||0)},a:function($){return $<0?Math.ceil($)||0:Math.floor($)},p:function($){return{M:h,y:S,w:d,d:c,D:x,h:u,m:l,s:i,ms:s,Q:y}[$]||String($||"").toLowerCase().replace(/s$/,"")},u:function($){return $===void 0}},f="en",m={};m[f]=X;var b=function($){return $ instanceof V},_=function $(A,T,j){var O;if(!A)return f;if(typeof A=="string"){var J=A.toLowerCase();m[J]&&(O=J),T&&(m[J]=T,O=J);var ee=A.split("-");if(!O&&ee.length>1)return $(ee[0])}else{var se=A.name;m[se]=A,O=se}return!j&&O&&(f=O),O||!j&&f},P=function($,A){if(b($))return $.clone();var T=typeof A=="object"?A:{};return T.date=$,T.args=arguments,new V(T)},z=E;z.l=_,z.i=b,z.w=function($,A){return P($,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var V=function(){function $(T){this.$L=_(T.locale,null,!0),this.parse(T)}var A=$.prototype;return A.parse=function(T){this.$d=function(j){var O=j.date,J=j.utc;if(O===null)return new Date(NaN);if(z.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var ee=O.match(g);if(ee){var se=ee[2]-1||0,oe=(ee[7]||"0").substring(0,3);return J?new Date(Date.UTC(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)):new Date(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)}}return new Date(O)}(T),this.$x=T.x||{},this.init()},A.init=function(){var T=this.$d;this.$y=T.getFullYear(),this.$M=T.getMonth(),this.$D=T.getDate(),this.$W=T.getDay(),this.$H=T.getHours(),this.$m=T.getMinutes(),this.$s=T.getSeconds(),this.$ms=T.getMilliseconds()},A.$utils=function(){return z},A.isValid=function(){return this.$d.toString()!==k},A.isSame=function(T,j){var O=P(T);return this.startOf(j)<=O&&O<=this.endOf(j)},A.isAfter=function(T,j){return P(T)<this.startOf(j)},A.isBefore=function(T,j){return this.endOf(j)<P(T)},A.$g=function(T,j,O){return z.u(T)?this[j]:this.set(O,T)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(T,j){var O=this,J=!!z.u(j)||j,ee=z.p(T),se=function(v,L){var H=z.w(O.$u?Date.UTC(O.$y,L,v):new Date(O.$y,L,v),O);return J?H:H.endOf(c)},oe=function(v,L){return z.w(O.toDate()[v].apply(O.toDate("s"),(J?[0,0,0,0]:[23,59,59,999]).slice(L)),O)},B=this.$W,G=this.$M,K=this.$D,U="set"+(this.$u?"UTC":"");switch(ee){case S:return J?se(1,0):se(31,11);case h:return J?se(1,G):se(0,G+1);case d:var C=this.$locale().weekStart||0,I=(B<C?B+7:B)-C;return se(J?K-I:K+(6-I),G);case c:case x:return oe(U+"Hours",0);case u:return oe(U+"Minutes",1);case l:return oe(U+"Seconds",2);case i:return oe(U+"Milliseconds",3);default:return this.clone()}},A.endOf=function(T){return this.startOf(T,!1)},A.$set=function(T,j){var O,J=z.p(T),ee="set"+(this.$u?"UTC":""),se=(O={},O[c]=ee+"Date",O[x]=ee+"Date",O[h]=ee+"Month",O[S]=ee+"FullYear",O[u]=ee+"Hours",O[l]=ee+"Minutes",O[i]=ee+"Seconds",O[s]=ee+"Milliseconds",O)[J],oe=J===c?this.$D+(j-this.$W):j;if(J===h||J===S){var B=this.clone().set(x,1);B.$d[se](oe),B.init(),this.$d=B.set(x,Math.min(this.$D,B.daysInMonth())).$d}else se&&this.$d[se](oe);return this.init(),this},A.set=function(T,j){return this.clone().$set(T,j)},A.get=function(T){return this[z.p(T)]()},A.add=function(T,j){var O,J=this;T=Number(T);var ee=z.p(j),se=function(G){var K=P(J);return z.w(K.date(K.date()+Math.round(G*T)),J)};if(ee===h)return this.set(h,this.$M+T);if(ee===S)return this.set(S,this.$y+T);if(ee===c)return se(1);if(ee===d)return se(7);var oe=(O={},O[l]=r,O[u]=o,O[i]=t,O)[ee]||1,B=this.$d.getTime()+T*oe;return z.w(B,this)},A.subtract=function(T,j){return this.add(-1*T,j)},A.format=function(T){var j=this,O=this.$locale();if(!this.isValid())return O.invalidDate||k;var J=T||"YYYY-MM-DDTHH:mm:ssZ",ee=z.z(this),se=this.$H,oe=this.$m,B=this.$M,G=O.weekdays,K=O.months,U=function(L,H,Y,M){return L&&(L[H]||L(j,J))||Y[H].slice(0,M)},C=function(L){return z.s(se%12||12,L,"0")},I=O.meridiem||function(L,H,Y){var M=L<12?"AM":"PM";return Y?M.toLowerCase():M},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:B+1,MM:z.s(B+1,2,"0"),MMM:U(O.monthsShort,B,K,3),MMMM:U(K,B),D:this.$D,DD:z.s(this.$D,2,"0"),d:String(this.$W),dd:U(O.weekdaysMin,this.$W,G,2),ddd:U(O.weekdaysShort,this.$W,G,3),dddd:G[this.$W],H:String(se),HH:z.s(se,2,"0"),h:C(1),hh:C(2),a:I(se,oe,!0),A:I(se,oe,!1),m:String(oe),mm:z.s(oe,2,"0"),s:String(this.$s),ss:z.s(this.$s,2,"0"),SSS:z.s(this.$ms,3,"0"),Z:ee};return J.replace(F,function(L,H){return H||v[L]||ee.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(T,j,O){var J,ee=z.p(j),se=P(T),oe=(se.utcOffset()-this.utcOffset())*r,B=this-se,G=z.m(this,se);return G=(J={},J[S]=G/12,J[h]=G,J[y]=G/3,J[d]=(B-oe)/6048e5,J[c]=(B-oe)/864e5,J[u]=B/o,J[l]=B/r,J[i]=B/t,J)[ee]||B,O?G:z.a(G)},A.daysInMonth=function(){return this.endOf(h).$D},A.$locale=function(){return m[this.$L]},A.locale=function(T,j){if(!T)return this.$L;var O=this.clone(),J=_(T,j,!0);return J&&(O.$L=J),O},A.clone=function(){return z.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},$}(),R=V.prototype;return P.prototype=R,[["$ms",s],["$s",i],["$m",l],["$H",u],["$W",c],["$M",h],["$y",S],["$D",x]].forEach(function($){R[$[1]]=function(A){return this.$g(A,$[0],$[1])}}),P.extend=function($,A){return $.$i||($(A,V,P),$.$i=!0),P},P.locale=_,P.isDayjs=b,P.unix=function($){return P(1e3*$)},P.en=m[f],P.Ls=m,P.p={},P})})(us);const D=Xe,dr=e=>e%4===0&&e%100>0||e%400===0?366:365,Rt=e=>{const n=e.day();return n!==0&&n!==6},ur=(e,n)=>D(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(n,"months").daysInMonth(),fr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:Rt(e),isCurrentDay:e.isSame(D(),"day"),year:parseInt(e.format("YYYY"))});let _t=null;const fs=e=>{if(_t)return _t;const n=document.createElement("canvas");n.width=12,n.height=12;const t=n.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),_t=e.createPattern(n,"repeat"),_t):null},en=(e,n,t,r,o,s,i,l=!1)=>{if(e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(n,t,r,de),l&&!s){const u=fs(e);u&&(e.fillStyle=u,e.fillRect(n,t,r,de))}e.strokeRect(n+.5,t+.5,r,de)},tn=(e,n)=>{let t=0;for(const r of n)r<=e&&t++;return t*De},hs=(e,n,t,r,o,s=[])=>{for(let i=0;i<n;i++){const l=tn(i,s);for(let u=0;u<=t;u++){const c=D(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(u,"days"),d=c.isSame(D(),"day"),h=c.isBefore(D(),"day");en(e,u*ye,i*de+l,ye,Rt(c),d,o,h)}}},ps=(e,n,t,r)=>{e.setLineDash([5,5]),e.strokeStyle=r.colors.border,e.moveTo(n+.5,.5),e.lineTo(n+.5,t+.5),e.stroke()},gs=(e,n,t,r,o,s=[])=>{let i=0,l=-(r.dayOfMonth-1)*_e;const u=n*de+s.length*De;for(let c=0;c<=t;c++){const h=D(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"weeks").isSame(D(),"week");for(let y=0;y<n;y++){const S=tn(y,s);en(e,i,y*de+S,nt,!0,h,o)}i+=nt}for(let c=0;c<t;c++){const d=ur(r,c)*_e;ps(e,l,u,o),l+=d}},ms=(e,n,t,r,o,s=[])=>{const i=D(`${r.year}-${r.month+1}-${r.dayOfMonth+1}`);for(let l=0;l<n;l++){const u=tn(l,s);for(let c=0;c<=t;c++){let d;c===Math.floor(t/2)?d=D():c>Math.floor(t/2)?d=D().add(c-Math.floor(t/2),"hours"):d=D().subtract(Math.floor(t/2)-l,"hours");const h=i.isSame(D(),"day")&&d.isSame(D(),"hour");en(e,c*Ce+Ce/2-.5,l*de+u,Ce,Rt(d),h,o)}}},ys=(e,n,t,r)=>{const o=t*de+n*De,s=e.canvas.width,i=o+De/2;e.fillStyle=r.mode==="dark"?r.colors.primary+"80":r.colors.primary,e.fillRect(0,o,s,De),e.strokeStyle=r.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},vs=(e,n,t,r,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(sr)){switch(n){case 0:gs(e,t,r,o,s,i);break;case 1:hs(e,t,r,o,s,i);break;case 2:ms(e,t,r,o,s,i);break}for(let u=0;u<i.length;u++)ys(e,u,i[u],s)}};var nn={},xs={get exports(){return nn},set exports(e){nn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){var t="week",r="year";return function(o,s,i){var l=s.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=i(this).startOf(r).add(1,r).date(c),h=i(this).endOf(t);if(d.isBefore(h))return 1}var y=i(this).startOf(r).date(c).startOf(t).subtract(1,"millisecond"),S=this.diff(y,t,!0);return S<0?i(this).startOf("week").week():Math.ceil(S)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(xs);const bs=nn;var rn={},ws={get exports(){return rn},set exports(e){rn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return function(t,r,o){r.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(ws);const Ss=rn;var on={},Cs={get exports(){return on},set exports(e){on=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){var t="day";return function(r,o,s){var i=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return i(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var d,h,y,S,x=i(this),k=(d=this.isoWeekYear(),h=this.$u,y=(h?s.utc:s)().year(d).startOf("year"),S=4-y.isoWeekday(),y.isoWeekday()>4&&(S+=7),y.add(S,t));return x.diff(k,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var u=l.startOf;l.startOf=function(c,d){var h=this.$utils(),y=!!h.u(d)||d;return h.p(c)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(c,d)}}})})(Cs);const Ms=on;var sn={},ks={get exports(){return sn},set exports(e){sn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return function(t,r,o){r.prototype.isBetween=function(s,i,l,u){var c=o(s),d=o(i),h=(u=u||"()")[0]==="(",y=u[1]===")";return(h?this.isAfter(c,l):!this.isBefore(c,l))&&(y?this.isBefore(d,l):!this.isAfter(d,l))||(h?this.isBefore(c,l):!this.isAfter(c,l))&&(y?this.isAfter(d,l):!this.isBefore(d,l))}}})})(ks);const $s=sn;var an={},Ds={get exports(){return an},set exports(e){an=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){var t,r,o=1e3,s=6e4,i=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,d=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:c,months:d,days:l,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},S=function(f){return f instanceof E},x=function(f,m,b){return new E(f,b,m.$l)},k=function(f){return r.p(f)+"s"},g=function(f){return f<0},F=function(f){return g(f)?Math.ceil(f):Math.floor(f)},X=function(f){return Math.abs(f)},Z=function(f,m){return f?g(f)?{negative:!0,format:""+X(f)+m}:{negative:!1,format:""+f+m}:{negative:!1,format:""}},E=function(){function f(b,_,P){var z=this;if(this.$d={},this.$l=P,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return x(b*y[k(_)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function($){z.$d[k($)]=b[$]}),this.calMilliseconds(),this;if(typeof b=="string"){var V=b.match(h);if(V){var R=V.slice(2).map(function($){return $!=null?Number($):0});return this.$d.years=R[0],this.$d.months=R[1],this.$d.weeks=R[2],this.$d.days=R[3],this.$d.hours=R[4],this.$d.minutes=R[5],this.$d.seconds=R[6],this.calMilliseconds(),this}}return this}var m=f.prototype;return m.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function(_,P){return _+(b.$d[P]||0)*y[P]},0)},m.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=F(b/c),b%=c,this.$d.months=F(b/d),b%=d,this.$d.days=F(b/l),b%=l,this.$d.hours=F(b/i),b%=i,this.$d.minutes=F(b/s),b%=s,this.$d.seconds=F(b/o),b%=o,this.$d.milliseconds=b},m.toISOString=function(){var b=Z(this.$d.years,"Y"),_=Z(this.$d.months,"M"),P=+this.$d.days||0;this.$d.weeks&&(P+=7*this.$d.weeks);var z=Z(P,"D"),V=Z(this.$d.hours,"H"),R=Z(this.$d.minutes,"M"),$=this.$d.seconds||0;this.$d.milliseconds&&($+=this.$d.milliseconds/1e3);var A=Z($,"S"),T=b.negative||_.negative||z.negative||V.negative||R.negative||A.negative,j=V.format||R.format||A.format?"T":"",O=(T?"-":"")+"P"+b.format+_.format+z.format+j+V.format+R.format+A.format;return O==="P"||O==="-P"?"P0D":O},m.toJSON=function(){return this.toISOString()},m.format=function(b){var _=b||"YYYY-MM-DDTHH:mm:ss",P={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return _.replace(u,function(z,V){return V||String(P[z])})},m.as=function(b){return this.$ms/y[k(b)]},m.get=function(b){var _=this.$ms,P=k(b);return P==="milliseconds"?_%=1e3:_=P==="weeks"?F(_/y[P]):this.$d[P],_===0?0:_},m.add=function(b,_,P){var z;return z=_?b*y[k(_)]:S(b)?b.$ms:x(b,this).$ms,x(this.$ms+z*(P?-1:1),this)},m.subtract=function(b,_){return this.add(b,_,!0)},m.locale=function(b){var _=this.clone();return _.$l=b,_},m.clone=function(){return x(this.$ms,this)},m.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},f}();return function(f,m,b){t=b,r=b().$utils(),b.duration=function(z,V){var R=b.locale();return x(z,{$l:R},V)},b.isDuration=S;var _=m.prototype.add,P=m.prototype.subtract;m.prototype.add=function(z,V){return S(z)&&(z=z.asMilliseconds()),_.bind(this)(z,V)},m.prototype.subtract=function(z,V){return S(z)&&(z=z.asMilliseconds()),P.bind(this)(z,V)}}})})(Ds);const Es=an;var _s="Expected a function",hr=0/0,Ts="[object Symbol]",As=/^\s+|\s+$/g,Ps=/^[-+]0x[0-9a-f]+$/i,Is=/^0b[01]+$/i,Os=/^0o[0-7]+$/i,Ys=parseInt,Ls=typeof Se=="object"&&Se&&Se.Object===Object&&Se,Ns=typeof self=="object"&&self&&self.Object===Object&&self,Fs=Ls||Ns||Function("return this")(),Hs=Object.prototype,Ws=Hs.toString,zs=Math.max,Bs=Math.min,cn=function(){return Fs.Date.now()};function js(e,n,t){var r,o,s,i,l,u,c=0,d=!1,h=!1,y=!0;if(typeof e!="function")throw new TypeError(_s);n=pr(n)||0,ln(t)&&(d=!!t.leading,h="maxWait"in t,s=h?zs(pr(t.maxWait)||0,n):s,y="trailing"in t?!!t.trailing:y);function S(m){var b=r,_=o;return r=o=void 0,c=m,i=e.apply(_,b),i}function x(m){return c=m,l=setTimeout(F,n),d?S(m):i}function k(m){var b=m-u,_=m-c,P=n-b;return h?Bs(P,s-_):P}function g(m){var b=m-u,_=m-c;return u===void 0||b>=n||b<0||h&&_>=s}function F(){var m=cn();if(g(m))return X(m);l=setTimeout(F,k(m))}function X(m){return l=void 0,y&&r?S(m):(r=o=void 0,i)}function Z(){l!==void 0&&clearTimeout(l),c=0,r=u=o=l=void 0}function E(){return l===void 0?i:X(cn())}function f(){var m=cn(),b=g(m);if(r=arguments,o=this,u=m,b){if(l===void 0)return x(u);if(h)return l=setTimeout(F,n),S(u)}return l===void 0&&(l=setTimeout(F,n)),i}return f.cancel=Z,f.flush=E,f}function ln(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Zs(e){return!!e&&typeof e=="object"}function Vs(e){return typeof e=="symbol"||Zs(e)&&Ws.call(e)==Ts}function pr(e){if(typeof e=="number")return e;if(Vs(e))return hr;if(ln(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ln(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(As,"");var t=Is.test(e);return t||Os.test(e)?Ys(e.slice(2),t?2:8):Ps.test(e)?hr:+e}var st=js;const Tt=[0,1,2];var mt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(mt||{});const gr=e=>Tt.includes(e),it=e=>{var r;const t=(((r=document.getElementById(Oe))==null?void 0:r.clientWidth)||0)-Ee;switch(e){case 1:return Math.ceil(t/ye)*ot;case 2:return Math.ceil(t/Ce)*ot;default:return Math.ceil(t/nt)*ot}},dn=e=>it(e)/ot,un=(e,n)=>{const t=it(n)/2;let r;switch(n){case 1:r=e.subtract(t,"days");break;case 2:r=e.subtract(t,"hours");break;default:r=e.subtract(t,"weeks");break}let o;switch(n){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:r,endDate:o}},Gs=(e,n)=>{const t=un(e,n);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},fn=()=>{var t;return((((t=document.getElementById(Oe))==null?void 0:t.clientWidth)||0)-Ee)*ot},mr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:D(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});D.extend(bs),D.extend(Ss),D.extend(Ms),D.extend($s),D.extend(Es);const Xs=({data:e,children:n,isLoading:t,config:r,defaultStartDate:o=D(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:l})=>{const{zoom:u,maxRecordsPerPage:c=50}=r,[d,h]=p.useState(u),[y,S]=p.useState(D()),[x,k]=p.useState(!1),[g,F]=p.useState(it(d)),X=Tt[d]!==Tt[Tt.length-1],Z=d!==0,E=p.useMemo(()=>Gs(y,d),[y,d]),f=un(y,d).startDate,m=D(f).dayOfYear(),b=fr(f),_=p.useRef(null),[P,z]=p.useState([{x:0,y:0}]),V=p.useCallback((U,C="auto")=>{var v,L,H,Y;const I=fn();switch(U){case"back":return(v=_.current)==null?void 0:v.scrollTo({behavior:C,left:I/3});case"forward":return(L=_.current)==null?void 0:L.scrollTo({behavior:C,left:I/3});case"middle":{const M=I/ot/4;return(H=_.current)==null?void 0:H.scrollTo({behavior:C,left:I/2-M})}default:return(Y=_.current)==null?void 0:Y.scrollTo({behavior:C,left:I/2})}},[]),R=U=>{z(U)},$=p.useCallback(U=>{const C=dn(d);let I;switch(d){case 0:I=C*7;break;case 1:I=C;break;case 2:I=Math.ceil(C/Et);break}st(()=>{switch(U){case"back":S(L=>L.subtract(I,"days"));break;case"forward":S(L=>L.add(I,"days"));break;case"middle":S(D());break}s==null||s(E)},300)()},[s,E,d]);p.useEffect(()=>{_.current=document.getElementById(Oe),F(it(d))},[d]),p.useEffect(()=>{const U=()=>F(it(d));return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[d]),p.useEffect(()=>{s==null||s(E)},[s,E]),p.useEffect(()=>{k(!1)},[o]),p.useEffect(()=>{x||(V("middle"),k(!0),S(o))},[o,x,V]);const A=()=>{t||(S(U=>d===2?U.add(rr,"hours"):U.add(cr,"weeks")),s==null||s(E))},T=p.useCallback(()=>{t||($("forward"),st(()=>{V("forward")},500)())},[t,$,V]),j=()=>{t||(S(U=>d===2?U.subtract(rr,"hours"):U.subtract(cr,"weeks")),s==null||s(E))},O=p.useCallback(()=>{!x||t||($("back"),st(()=>{V("back")},500)())},[x,t,$,V]),J=p.useCallback(()=>{t||($("middle"),st(()=>{V("middle","smooth")},300)())},[t,$,V]),ee=p.useCallback(U=>{if(t)return;const C=D(U).startOf("day");C.isValid()&&(S(C),s==null||s(E),setTimeout(()=>{V("middle","smooth")},300))},[t,V,s,E]),se=()=>B(d+1),oe=()=>B(d-1),B=U=>{gr(U)&&(h(U),F(it(U)),s==null||s(E))},G=()=>i==null?void 0:i(),{Provider:K}=mr;return a.jsx(K,{value:{data:e,config:r,handleGoNext:A,handleScrollNext:T,handleGoPrev:j,handleScrollPrev:O,handleGoToday:J,goToDate:ee,zoomIn:se,zoomOut:oe,setZoom:B,zoom:d,isNextZoom:X,isPrevZoom:Z,date:y,isLoading:t,cols:g,startDate:b,dayOfYear:m,toggleDisplayActiveUnits:G,tilesCoords:P,updateTilesCoords:R,recordsThreshold:c,onClearFilterData:l},children:n})},Ye=()=>p.useContext(mr),yr=(e,n,t)=>{e.canvas.width=n*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},vr=(e,n)=>{if(n.length===0)return e;let t=e,r=0;for(const o of n){const s=o*de+r*De;if(e>=s+De)r++;else if(e>=s)return o*de+r*De-r*De}return t-r*De},Us=5,xr=(e,n)=>{const t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.sqrt(t*t+r*r)>Us},yt=(e,n,t)=>{const r=t.getBoundingClientRect();return{x:e-r.left+t.scrollLeft,y:n-r.top+t.scrollTop}},Ks=({data:e,baseData:n,zoom:t,startDate:r,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:l,separatorRowIndices:u=[]})=>{const c=n?n.length>0&&n[0].data.length>0&&!Array.isArray(n[0].data[0])?n.map(I=>({...I,data:[I.data]})):n:e,{enabled:d=!0,isDraggable:h,resourceOnly:y=!1,isValidDrop:S}=i,[x,k]=p.useState("idle"),[g,F]=p.useState(null),[X,Z]=p.useState({x:0,y:0}),[E,f]=p.useState({width:0,height:48}),[m,b]=p.useState(null),[_,P]=p.useState(!0),z=p.useRef({x:0,y:0}),V=p.useRef({x:0,y:0}),R=p.useRef({x:0,y:0}),$=p.useRef(null),A=p.useRef(null),T=p.useRef(0),j=p.useRef(null),O=p.useCallback(I=>!d||I.draggable===!1?!1:h?h(I):!0,[d,h]),J=p.useCallback((I,v)=>{const L=vr(v,u),H=Math.floor(L/de);let Y;switch(t){case 0:Y=_e*7;break;case 1:Y=ye;break;case 2:Y=Ce;break;default:Y=ye}const M=Math.floor(I/Y);let te;const N=D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:te=N.add(M*7,"days").toDate();break;case 1:te=N.add(M,"days").toDate();break;case 2:te=N.add(M,"hours").toDate();break;default:te=N.toDate()}return{snappedDate:te,snappedResourceIndex:H}},[t,r,u]),ee=p.useCallback((I,v,L,H)=>{const Y=[],M=v.getTime(),te=L.getTime(),N=c.find(re=>re.id===H);if(!N)return Y;const q=[];for(const re of N.data)Array.isArray(re)?q.push(...re):q.push(re);for(const re of q){if(re.segmentId===I.segmentId)continue;const W=re.startDate.getTime(),ae=re.endDate.getTime();if(M>=W&&M<ae||te>W&&te<=ae||M<=W&&te>=ae){const ue=new Date(Math.max(M,W)),me=new Date(Math.min(te,ae)),Me=me.getTime()-ue.getTime();Y.push({event:re,conflictStart:ue,conflictEnd:me,overlapDuration:Me})}}return Y},[c]),se=p.useCallback((I,v,L,H)=>{const Y=[],M=v.getTime(),te=L.getTime(),N=D(v).format("YYYY-MM-DD"),q=c.find(W=>W.id===H);if(!q)return Y;const re=[];for(const W of q.data)Array.isArray(W)?re.push(...W):re.push(W);for(const W of re){if(W.segmentId===I.segmentId)continue;const ae=W.startDate.getTime(),le=W.endDate.getTime(),ue=D(W.startDate).format("YYYY-MM-DD"),me=D(W.endDate).format("YYYY-MM-DD"),Me=D(L).format("YYYY-MM-DD");if(!(ue===N||me===N||ue===Me||me===Me||D(W.startDate).isBefore(v,"day")&&D(W.endDate).isAfter(L,"day"))||M>=ae&&M<le||te>ae&&te<=le||M<=ae&&te>=le)continue;let ie,ce;le<=M?(ie=M-le,ce="before"):(ie=ae-te,ce="after"),Y.push({event:W,timeGap:ie,position:ce})}return Y.sort((W,ae)=>W.timeGap-ae.timeGap)},[c]),oe=p.useCallback((I,v,L)=>{const H=J(v,L);let Y,M;if(y)Y=I.startDate,M=I.endDate;else{const le=D(I.endDate).diff(I.startDate);Y=H.snappedDate,M=D(Y).add(le,"milliseconds").toDate()}let te=0,N="",q;for(const le of e){const ue=Math.max(le.data.length,1);if(H.snappedResourceIndex<te+ue){N=le.id,q=le.capacity;break}te+=ue}if(!N)return null;let re=!0;q!==void 0&&I.totalPassengers!==void 0&&(re=I.totalPassengers<=q);const W=ee(I,Y,M,N),ae=W.length===0?se(I,Y,M,N):[];return{startDate:Y,endDate:M,resourceId:N,resourceIndex:H.snappedResourceIndex,resourceCapacity:q,hasCapacity:re,conflicts:W,hasConflict:W.length>0,nearbyEvents:ae}},[J,e,y,ee,se]),B=p.useCallback((I,v)=>{if(!s)return;const L=Date.now();if(L-T.current<100)return;T.current=L;const H={event:I,currentStartDate:v.startDate,currentEndDate:v.endDate,currentResourceId:v.resourceId,conflicts:v.conflicts};s(H)},[s]),G=p.useCallback((I,v)=>{if(!O(I)||!l.current)return;v.preventDefault(),v.stopPropagation();const L=v.target.closest('[style*="left"]');let H=0,Y=0;L&&L.style.left&&L.style.top&&(H=parseInt(L.style.left),Y=parseInt(L.style.top));const M=yt(v.clientX,v.clientY,l.current);z.current={x:H,y:Y},V.current={x:v.clientX,y:v.clientY},R.current={x:M.x-H,y:20},j.current={startDate:I.startDate,endDate:I.endDate,resourceId:""};for(const q of e){for(const re of q.data)if(re.some(W=>W.segmentId===I.segmentId)){j.current.resourceId=q.id;break}if(j.current.resourceId)break}F(I),k("potential"),Z({x:H,y:Y});let te=100,N=48;if(L){const q=L.getBoundingClientRect();te=q.width,N=q.height}f({width:te,height:N})},[O,l,e,t]),K=p.useCallback(I=>{if(!l.current)return;let v=l.current;for(;v&&v!==document.body;){const W=window.getComputedStyle(v);if(v.scrollHeight>v.clientHeight&&(W.overflowY==="auto"||W.overflowY==="scroll"||W.overflow==="auto"||W.overflow==="scroll"))break;v=v.parentElement}(!v||v===document.body)&&(v=document.documentElement);const L=v.getBoundingClientRect(),H=I.clientY,Y=50,M=5,te=H-L.top,N=L.bottom-H;let q=!1,re=0;te<Y&&te>0?(q=!0,re=-M*(1-te/Y)):N<Y&&N>0&&(q=!0,re=M*(1-N/Y)),q?(A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{v.scrollTop+=re,x==="dragging"&&K(I)})):A.current&&(cancelAnimationFrame(A.current),A.current=null)},[l,x]),U=p.useCallback(I=>{if(x==="idle"||x==="animating"||!g||!l.current)return;const v={x:I.clientX,y:I.clientY};if(x==="potential")if(xr(V.current,v))k("dragging");else return;K(I);const L=yt(I.clientX,I.clientY,l.current);$.current&&cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>{const H={x:L.x-R.current.x,y:L.y-R.current.y};Z(H);const Y=oe(g,L.x,L.y);if(Y&&S){const M={event:g,currentStartDate:Y.startDate,currentEndDate:Y.endDate,currentResourceId:Y.resourceId,conflicts:Y.conflicts};Y.hasConflict=!S(M)}if(b(Y),Y){const M=Y.hasCapacity!==!1;P(M),B(g,Y)}})},[x,g,l,oe,B,S,K]),C=p.useCallback(async I=>{if(x==="idle"||x==="animating")return;const v={x:I.clientX,y:I.clientY};if(!xr(V.current,v)||x==="potential"){k("idle"),F(null),b(null);return}if(!g||!m||!j.current){k("idle"),F(null),b(null);return}if(m.hasCapacity===!1){P(!1),k("animating"),Z(z.current),setTimeout(()=>{k("idle"),F(null),b(null),P(!0)},300);return}const H={event:g,originalStartDate:j.current.startDate,originalEndDate:j.current.endDate,originalResourceId:j.current.resourceId,newStartDate:m.startDate,newEndDate:m.endDate,newResourceId:m.resourceId,hasConflict:m.hasConflict,conflicts:m.conflicts};let Y=!0;if(o)try{const M=o(H);Y=M instanceof Promise?await M:M}catch{Y=!1}Y?(P(!0),k("idle"),F(null),b(null)):(P(!1),k("animating"),Z(z.current),setTimeout(()=>{k("idle"),F(null),b(null),P(!0)},300))},[x,g,m,o,S]);return p.useEffect(()=>{if(x==="potential"||x==="dragging"){const I=L=>U(L),v=L=>C(L);return document.addEventListener("mousemove",I),document.addEventListener("mouseup",v),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",v)}}else return()=>{}},[x,U,C]),p.useEffect(()=>()=>{$.current&&(cancelAnimationFrame($.current),$.current=null),A.current&&(cancelAnimationFrame(A.current),A.current=null)},[]),p.useEffect(()=>{(x==="idle"||x==="animating")&&($.current&&(cancelAnimationFrame($.current),$.current=null),A.current&&(cancelAnimationFrame(A.current),A.current=null))},[x]),p.useEffect(()=>{(x==="dragging"||x==="potential")&&(x==="dragging"?(k("animating"),Z(z.current),setTimeout(()=>{k("idle"),F(null),b(null)},300)):(k("idle"),F(null),b(null)))},[t]),p.useEffect(()=>{if((x==="dragging"||x==="potential")&&g){let I=!1;for(const v of e){for(const L of v.data)if(L.some(H=>H.segmentId===g.segmentId)){I=!0;break}if(I)break}I||(x==="dragging"?(k("animating"),Z(z.current),setTimeout(()=>{k("idle"),F(null),b(null)},300)):(k("idle"),F(null),b(null)))}},[e,x,g]),{dragState:x,draggedEvent:g,ghostPosition:X,ghostDimensions:E,dropTarget:m,isValidDrop:_,handleDragStart:G,isDraggable:O,draggingEventId:(g==null?void 0:g.segmentId)||null,resourceOnly:y}},qs=({data:e,baseData:n,zoom:t,startDate:r,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:l,isDragging:u,separatorRowIndices:c=[]})=>{const{enabled:d=!1,isSelectable:h}=i,y=d&&!!o,S=p.useCallback(v=>{let L=0;for(const H of c)H<=v&&L++;return v*de+L*De},[c]),[x,k]=p.useState("idle"),[g,F]=p.useState(null),[X,Z]=p.useState(null),[E,f]=p.useState(null),[m,b]=p.useState(!1),[_,P]=p.useState([]),[z,V]=p.useState(!1),R=p.useRef(null),$=p.useRef(null),A=p.useRef(null),T=p.useCallback(()=>{switch(t){case 0:return _e*7;case 1:return ye;case 2:return Ce;default:return ye}},[t]),j=p.useCallback(v=>{const L=T(),H=Math.floor(v/L),Y=D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return Y.add(H*7,"days").toDate();case 1:return Y.add(H,"days").toDate();case 2:return Y.add(H,"hours").toDate();default:return Y.toDate()}},[t,r,T]),O=p.useCallback(v=>{const L=vr(v,c),H=Math.floor(L/de);let Y=0;for(const M of e){const te=Math.max(M.data.length,1);if(H<Y+te)return{resourceId:M.id,resourceIndex:H,resourceLabel:M.label};Y+=te}return null},[e,c]),J=p.useCallback(v=>{const L=T();return Math.floor(v/L)*L},[T]),ee=p.useCallback((v,L,H,Y=[])=>{const M=[],N=(n||e).find(W=>W.id===v),q=L.getTime(),re=H.getTime();if(N){const W=N.data[0],ae=W&&Array.isArray(W)?N.data.flat():N.data;for(const le of ae){const ue=new Date(le.startDate).getTime(),me=new Date(le.endDate).getTime();if(q<me&&re>ue){const Me=new Date(Math.max(q,ue)),ve=new Date(Math.min(re,me)),Q=ve.getTime()-Me.getTime();M.push({event:le,conflictStart:Me,conflictEnd:ve,overlapDuration:Q})}}}for(const W of Y){if(W.resourceId!==v)continue;const ae=W.startDate.getTime(),le=W.endDate.getTime();if(q<le&&re>ae){const ue=new Date(Math.max(q,ae)),me=new Date(Math.min(re,le)),Me=me.getTime()-ue.getTime(),ve={segmentId:`pending-${W.startDate.getTime()}`,reservationId:`pending-${W.startDate.getTime()}`,startDate:W.startDate,endDate:W.endDate,occupancy:0,title:`New Event (${W.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};M.push({event:ve,conflictStart:ue,conflictEnd:me,overlapDuration:Me})}}return M},[e,n]),se=p.useCallback(v=>{if(!y||u||!l.current||v.button!==0)return;const L=v.target;if(L.closest("[data-segment-id]")||L.closest("[data-multi-select-ui]"))return;const H=yt(v.clientX,v.clientY,l.current),Y=O(H.y);if(!Y)return;R.current={x:v.clientX,y:v.clientY},$.current=Y.resourceIndex;const M=J(H.x),te=T(),N=S(Y.resourceIndex);F(H),Z(H),f({x:M,y:N,width:te,height:de}),k("selecting")},[y,u,l,O,J,T,S]),oe=p.useCallback(v=>{if(x!=="selecting"||!l.current||$.current===null)return;const L=yt(v.clientX,v.clientY,l.current);A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{Z(L);const H=T(),Y=J((g==null?void 0:g.x)||0),M=J(L.x),te=S($.current),N=Math.min(Y,M),q=Math.max(Y,M)+H;f({x:N,y:te,width:q-N,height:de})})},[x,l,g,T,J,S]),B=p.useCallback(v=>{if(x!=="selecting")return;if(!l.current||!g||!R.current){k("idle"),F(null),Z(null),f(null);return}const L=yt(v.clientX,v.clientY,l.current),H=O(g.y);if(!H){k("idle"),F(null),Z(null),f(null);return}const Y=Math.min(g.x,L.x),M=Math.max(g.x,L.x),te=j(Y),N=j(M),q=D(N).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(H.resourceId,te,q)){k("idle"),F(null),Z(null),f(null);return}const re=ee(H.resourceId,te,q,_),W=re.length>0,ae={startDate:te,endDate:q,resourceId:H.resourceId,resourceLabel:H.resourceLabel,zoomLevel:t,hasConflict:W,conflicts:W?re:void 0};if(m)P(le=>[...le,ae]),V(!0);else if(o){const le=o(ae),ue=me=>{me!=null&&me.continueMultiSelect&&(b(!0),P([ae]),V(!0))};le instanceof Promise?le.then(ue):ue(le)}k("idle"),F(null),Z(null),f(null),R.current=null,$.current=null},[x,l,g,O,j,h,o,t,m,ee,_]),G=p.useCallback(()=>{if(_.length>0&&s){V(!1);const v=s(_),L=H=>{H!=null&&H.continueMultiSelect?V(!0):(P([]),b(!1),V(!1))};v instanceof Promise?v.then(L):L(v);return}P([]),b(!1),V(!1)},[_,s]),K=p.useCallback(()=>{P([]),b(!1),V(!1)},[]),U=p.useCallback(v=>{P(L=>{const H=L.filter((Y,M)=>M!==v);return H.length===0&&(b(!1),V(!1)),H})},[]),C=p.useCallback((v,L)=>{P(H=>H.map((Y,M)=>{if(M!==v)return Y;const te={...Y,...L},N=H.filter((re,W)=>W!==v),q=ee(te.resourceId,te.startDate,te.endDate,N);return{...te,hasConflict:q.length>0,conflicts:q.length>0?q:void 0}}))},[ee]),I=p.useCallback(v=>{v.key==="Escape"&&(x==="selecting"?(k("idle"),F(null),Z(null),f(null),R.current=null,$.current=null):m&&_.length>0&&(P([]),b(!1),V(!1)))},[x,m,_.length]);return p.useEffect(()=>{if(x==="selecting")return document.addEventListener("mousemove",oe),document.addEventListener("mouseup",B),document.addEventListener("keydown",I),()=>{document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",B),document.removeEventListener("keydown",I)}},[x,oe,B,I]),p.useEffect(()=>{if(m&&_.length>0)return document.addEventListener("keydown",I),()=>{document.removeEventListener("keydown",I)}},[m,_.length,I]),p.useEffect(()=>()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null)},[]),p.useEffect(()=>{u&&x==="selecting"&&(k("idle"),F(null),Z(null),f(null),R.current=null,$.current=null)},[u,x]),{selectionState:x,selectionStart:g,selectionEnd:X,selectionBox:E,handleGridMouseDown:se,isEnabled:y,pendingSelections:_,confirmSelections:G,clearSelections:K,removeSelection:U,updateSelection:C,isMultiSelectActive:m,hasUnconfirmedSelections:z}},Js=w.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,Qs=w.div`
  position: relative;
`,Rs=w.canvas``;w.canvas``;const br=w.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,ei=p.forwardRef(function({zoom:n,rows:t,data:r,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:l,draggableConfig:u,onDragStateChange:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y,separatorRowIndices:S=[]},x){const k=p.useRef(!1),{handleScrollNext:g,handleScrollPrev:F,date:X,isLoading:Z,cols:E,startDate:f}=Ye(),m=p.useRef(null),b=p.useRef(null),_=p.useRef(null),P=p.useRef(null),[z,V]=p.useState(!1),R=Dt(),{dragState:$,draggedEvent:A,ghostPosition:T,ghostDimensions:j,dropTarget:O,isValidDrop:J,handleDragStart:ee,isDraggable:se,draggingEventId:oe,resourceOnly:B}=Ks({data:r,baseData:o||r,zoom:n,startDate:f,onEventDrop:i,onEventDrag:l,draggableConfig:u,gridRef:P,separatorRowIndices:S});p.useEffect(()=>{const W=$==="dragging"||$==="potential";V(W),c&&c(W)},[$,c]);const{selectionState:G,selectionBox:K,handleGridMouseDown:U,pendingSelections:C,confirmSelections:I,clearSelections:v,removeSelection:L,updateSelection:H,isMultiSelectActive:Y,hasUnconfirmedSelections:M}=qs({data:r,baseData:o||r,zoom:n,startDate:f,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y,gridRef:P,isDragging:z,separatorRowIndices:S}),te=p.useCallback(W=>{W.preventDefault()},[]),N=p.useCallback(W=>{W.preventDefault()},[]),q=S.length*De,re=p.useCallback(W=>{const ae=fn(),le=t*de+1+q;yr(W,ae,le),vs(W,n,t,E,f,R,S)},[E,f,t,n,R,S,q]);return p.useEffect(()=>{if(!m.current)return;const W=m.current.getContext("2d");if(!W)return;const ae=()=>re(W);return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[re]),p.useEffect(()=>{const W=m.current;if(!W)return;W.style.letterSpacing="1px";const ae=W.getContext("2d");ae&&re(ae)},[X,t,n,re]),p.useEffect(()=>{if(!b.current)return;const W=new IntersectionObserver(ae=>{ae[0].isIntersecting&&!k.current&&(k.current=!0,g(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Oe)});return W.observe(b.current),()=>{W.disconnect()}},[g]),p.useEffect(()=>{if(!_.current)return;const W=new IntersectionObserver(ae=>{ae[0].isIntersecting&&!k.current&&(k.current=!0,F(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Oe),rootMargin:`0px 0px 0px -${Ee}px`});return W.observe(_.current),()=>{W.disconnect()}},[F]),a.jsxs(Js,{id:sr,children:[a.jsxs(Qs,{ref:W=>{typeof x=="function"?x(W):x&&(x.current=W),P.current=W},onMouseDown:U,style:{cursor:d?"crosshair":"default"},children:[a.jsx(br,{position:"left",ref:_}),a.jsx(Cn,{isLoading:Z,position:"left"}),a.jsx(Rs,{ref:m,onDragStart:te,onDragOver:N,style:{userSelect:$==="dragging"?"none":"auto"}}),a.jsx(bl,{zoom:n,startDate:f}),a.jsx(Ec,{data:r,zoom:n,onTileClick:s,onDragStart:ee,isDraggable:se,draggingEventId:oe,separatorRowIndices:S}),a.jsx(br,{ref:b,position:"right"}),a.jsx(Cn,{isLoading:Z,position:"right"}),($==="dragging"||$==="animating")&&a.jsx(tl,{draggedEvent:A,ghostPosition:T,ghostDimensions:j,dropTarget:O,isValidDrop:J,dragState:$,zoom:n,data:r,resourceOnly:B,separatorRowIndices:S}),a.jsx(ol,{selectionBox:K,isSelecting:G==="selecting"}),Y&&C.length>0&&a.jsx(vl,{selections:C,data:r,zoom:n,startDate:f,onRemove:L,onUpdate:H,separatorRowIndices:S})]}),Y&&M&&C.length>0&&a.jsx(fl,{selections:C,onConfirm:I,onClear:v,onRemove:L})]})}),wr=e=>{const n=D.duration(e,"seconds"),t=n.hours(),r=n.minutes();return{hours:t,minutes:r}},Sr=e=>{let n=0,t=0,r=0;return e.forEach(o=>{n+=o.minutes;const s=Math.floor(n/we);t+=o.hours+s,r+=n%we,r>=we&&(t++,r-=we)}),{hours:t,minutes:r}},Cr=(e,n)=>{let t=ir;switch(n){case 0:t=ds;break;case 1:t=ir;break;case 2:t=1;break}const r=()=>{let s=t-e.hours-1,i=we-e.minutes;return i===we&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:r(),overtime:o()}},ti=(e,n,t)=>{const r=n.isoWeek(),o=e.map(c=>{const d=D(c.startDate).isoWeek(),h=D(c.startDate).isoWeekday(),y=D(c.endDate).isoWeek(),S=D(c.endDate).isoWeekday(),{hours:x,minutes:k}=wr(c.occupancy);if(r===d){const g=(Be+1-h)*x,F=(Be+1-h)*k;return{hours:Math.max(0,g),minutes:F}}else if(r===y){const g=S>Be?Be*x:S*x,F=S>Be?Be*k:S*k;return{hours:g,minutes:F}}else if(D(n).isBetween(c.startDate,c.endDate))return{hours:Be*x,minutes:Be*k};return{hours:0,minutes:0}}),{hours:s,minutes:i}=Sr(o),{free:l,overtime:u}=Cr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:l,overtime:u}},ni=(e,n,t,r)=>{const o=n.isoWeekday(),s=e.map(d=>{const{hours:h,minutes:y}=wr(d.occupancy);return o<=(r?7:5)?{hours:h,minutes:y}:{hours:0,minutes:0}}),{hours:i,minutes:l}=Sr(s),{free:u,overtime:c}=Cr({hours:i,minutes:l},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,l)},free:u,overtime:c}},ri=(e,n)=>{let t=0;e.forEach(l=>{const u=D(l.startDate).hour(),c=D(l.endDate).hour(),d=n.hour(),h=D(l.endDate).minute(),y=D(l.startDate).minute();u<d&&c>d?t+=we:u===d&&c===d&&y&&h?t+=h?h-y:we-y:u===d&&c>=d?t+=y?we-y:we:c===d&&h&&(t+=h)});const r=Math.floor(t/we),o=t%we,s=r||o?0:1,i=r?0:o?we-o:0;return{taken:{hours:r,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},oi=(e,n,t,r,o=!1)=>{if(n<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>r===1?D(t).isBetween(i.startDate,i.endDate,"day","[]"):r===2?D(t).isBetween(i.startDate,i.endDate,"hour","[]"):D(i.startDate).isBetween(D(t),D(t).add(6,"days"),"day","[]")||D(t).isBetween(D(i.startDate),D(i.endDate),"day","[]"));switch(r){case 1:return ni(s,t,r,o);case 2:return ri(s,t);default:return ti(s,t,r)}},si=(e,n,t,r,o,s,i=!1)=>{let l="weeks",u;switch(s){case 0:l="weeks",u=nt;break;case 1:l="days",u=ye;break;case 2:l="hours",u=Ce;break}const c=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=D(`${n.year}-${n.month+1}-${n.dayOfMonth}T${n.hour}:00:00`).add(c-1,l),h=Math.ceil(t.y/de),y=r.findIndex((F,X,Z)=>Z.slice(0,X+1).reduce((f,m)=>f+m,0)>=h),S=s===2?(c+1)*u:c*u,x=(h-1)*de+de,k=oi(o[y],y,d,s,i),g=D(e.startDate).isSame(D(e.endDate),"day");return{coords:{x:S,y:x},mouseCoords:t,resourceIndex:y,disposition:k,reservationData:{startTime:D(e.startDate).format("hh:mm A"),startDate:D(e.startDate).format("MMM D, YYYY"),endTime:D(e.endDate).format("hh:mm A"),endDate:D(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:g,passengers:e.totalPassengers}}};function ii(e,n){if(e.length<=1)return[];if(e.length<=n){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const r=Math.min(n-1,t.length);return t.slice(0,r).map(o=>o.index).sort((o,s)=>o-s)}function ai(e){const n={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&d.capacity!=null&&t.add(d.capacity);const r=[...t].sort((d,h)=>d-h);if(r.length<2)return n;const o=Math.min(5,r.length),s=ii(r,o),i=[];let l=0;for(const d of s)i.push({min:r[l],max:r[d-1],values:r.slice(l,d)}),l=d;i.push({min:r[l],max:r[r.length-1],values:r.slice(l)});const u=[],c=new Map;return i.forEach((d,h)=>{const y="__auto_cat_"+h,S=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:y,name:S,minPassengers:d.min,maxPassengers:d.max});for(const x of d.values)c.set(x,y)}),{categories:u,capacityToCategoryId:c}}const ci=(e,n,t,r)=>{const o=[];let s=0,i=[],l=0;return n.length>r?(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=r&&(o.push(i),s+=i.length,i=[],l=0),l++,i.push(d)}),t.slice(s).length<=r&&(i=[],n.slice(s).forEach((u,c)=>{const d={id:e[c+s].id,label:e[c+s].label,data:u,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};i.push(d),c===n.length-s-1&&o.push(i)})),o):(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};i.push(d)}),o.push(i),o)};var hn={},li={get exports(){return hn},set exports(e){hn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return function(t,r){r.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(li);const di=hn;var pn={},ui={get exports(){return pn},set exports(e){pn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return function(t,r){r.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(ui);const fi=pn,hi=e=>{const n=[];for(const t of e){let r=!1;if(n.length)for(const o of n){let s=!1;for(let i=0;i<o.length;i++){const l=D(t.startDate).startOf("day"),u=D(t.endDate).startOf("day"),c=D(o[i].startDate).startOf("day"),d=D(o[i].endDate).startOf("day");if(l.isBetween(c,d,null,"[]")||u.isBetween(c,d,null,"[]")||l.isBefore(c,"minute")&&u.isAfter(d,"minute")||l.isAfter(c,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),r=!0;break}}r||n.push([t])}return n};D.extend(di),D.extend(fi);const Mr=new WeakMap,pi=e=>{const n=Mr.get(e);if(n)return n;const t=[...e].sort((o,s)=>{const i=D(o.startDate),l=D(s.startDate),u=i.startOf("day").diff(l.startOf("day"),"day");return u!==0?u:i.diff(l)}),r=hi(t);return Mr.set(e,r),r},gi=e=>{const n=[[],[]],[t,r]=e.reduce((o,s)=>{const i=pi(s.data);return o[0].push(i),o[1].push(Math.max(i.length,1)),o},n);return{projectsPerPerson:t,rowsPerPerson:r}},mi=e=>e?e.map(n=>n.data.length).reduce((n,t)=>n+Math.max(t,1),0):0,yi=e=>{const{recordsThreshold:n}=Ye(),[t,r]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Oe)},[]);const{projectsPerPerson:l,rowsPerPerson:u}=p.useMemo(()=>gi(e),[e]),c=p.useMemo(()=>ci(e,l,u,n),[e,l,n,u]),d=p.useCallback(()=>{c[o].length&&i.current&&(i.current.scroll({top:0}),r(g=>g+c[Math.max(o,0)].length),s(g=>Math.min(g+1,c.length-1)),window.scroll({top:0}))},[o,c]),h=p.useCallback(()=>{c[o].length&&(r(g=>Math.max(g-c[o-1].length,0)),s(g=>Math.max(g-1,0)))},[o,c]),y=p.useCallback(()=>{r(0),s(0)},[]),S=t+c[o].length,x=p.useMemo(()=>u.slice(t,S),[S,u,t]),k=p.useMemo(()=>l.slice(t,S),[S,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:k,rowsPerItem:x,totalRowsPerPage:mi(c[o]),next:d,previous:h,reset:y}};var gn={},vi={get exports(){return gn},set exports(e){gn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var r=["th","st","nd","rd"],o=t%100;return"["+t+(r[(o-20)%10]||r[o]||r[0])+"]"}}})})(vi);const xi=gn;var mn={},bi={get exports(){return mn},set exports(e){mn=e}};(function(e,n){(function(t,r){e.exports=r(Xe)})(Se,function(t){function r(y){return y&&typeof y=="object"&&"default"in y?y:{default:y}}var o=r(t);function s(y){return y%10<5&&y%10>1&&~~(y/10)%10!=1}function i(y,S,x){var k=y+" ";switch(x){case"m":return S?"minuta":"minutę";case"mm":return k+(s(y)?"minuty":"minut");case"h":return S?"godzina":"godzinę";case"hh":return k+(s(y)?"godziny":"godzin");case"MM":return k+(s(y)?"miesiące":"miesięcy");case"yy":return k+(s(y)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,d=function(y,S){return c.test(S)?l[y.month()]:u[y.month()]};d.s=u,d.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(y){return y+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(bi);const wi=mn;var yn={},Si={get exports(){return yn},set exports(e){yn=e}};(function(e,n){(function(t,r){e.exports=r(Xe)})(Se,function(t){function r(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=r(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(u,c,d){var h=s[d];return Array.isArray(h)&&(h=h[c?0:1]),h.replace("%d",u)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(l,null,!0),l})})(Si);const Ci=yn;var vn={},Mi={get exports(){return vn},set exports(e){vn=e}};(function(e,n){(function(t,r){e.exports=r(Xe)})(Se,function(t){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=r(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,h){return l.test(h)?s[d.month()]:i[d.month()]};u.s=i,u.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Mi);const ki=vn;var xn={},$i={get exports(){return xn},set exports(e){xn=e}};(function(e,n){(function(t,r){e.exports=r(Xe)})(Se,function(t){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=r(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})($i);const Di=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:xi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:wi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:xn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:ki},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:Ci}];class Ei{constructor(){eo(this,"locales",Di)}getLocales(){return this.locales}addLocales(n){this.locales.push(n)}}const At=new Ei,kr=p.createContext({localesData:At.getLocales(),currentLocale:At.getLocales()[0],setCurrentLocale:()=>{}}),_i=({children:e,lang:n,translations:t})=>{const[r,o]=p.useState("en"),s=At.getLocales(),i=p.useCallback(()=>{const h=s.find(y=>y.id===r);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&D.locale(h.dayjsTranslations),h||s[0]},[r,s]),[l,u]=p.useState(i()),c=h=>{localStorage.setItem("locale",h.translateCode),u(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(S=>S.id===h.id)||At.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),y=n??h??"en";localStorage.setItem("locale",y),o(y),u(i())},[i,n]);const{Provider:d}=kr;return a.jsx(d,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},je=()=>p.useContext(kr).currentLocale.lang,Ti=e=>ne.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},ne.createElement("defs",null,ne.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),ne.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},ne.createElement("stop",{offset:.47,stopColor:"#ccc"}),ne.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),ne.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),ne.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),ne.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),ne.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),ne.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),ne.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),ne.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),ne.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),ne.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),ne.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Ai=w.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Pi=w.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Ii=({onTileClick:e})=>{const{feelingEmpty:n}=je();return a.jsxs(Ai,{onClick:e,children:[a.jsx(Ti,{}),a.jsx(Pi,{children:n})]})},Oi=w.div`
  position: relative;
  display: flex;
`,Yi=w.div`
  position: relative;
  margin-left: ${Ee};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Li=w.div`
  width: calc(${({width:e})=>e}px - ${Ee}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ee}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,bn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:mt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Ni(e,n){const t=n?[...n].sort((l,u)=>l.maxPassengers-u.maxPassengers):[],r=[];for(const l of t){const u=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);u.length>0&&r.push({type:"category",category:l,items:u})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?r.push({type:"uncategorized",items:s}):s.length>0&&r.push({type:"uncategorized",items:s});const i=e.filter(l=>l.isSubcontract);return i.length>0&&r.push({type:"subcontract",items:i}),r}const Fi=({data:e,baseData:n,categories:t,onTileClick:r,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y})=>{const[S,x]=p.useState(bn),[k,g]=p.useState(e),[F,X]=p.useState(!1),[Z,E]=p.useState(!1),[f,m]=p.useState(""),[b,_]=p.useState(new Set),{zoom:P,startDate:z,isLoading:V,config:{includeTakenHoursOnWeekendsInDayView:R,showTooltip:$,showThemeToggle:A}}=Ye(),T=p.useRef(null),j=p.useRef(null),[O,J]=p.useState(124),{page:ee,projectsPerPerson:se,rowsPerItem:oe,currentPageNum:B,pagesAmount:G,next:K,previous:U,reset:C}=yi(k),{effectiveCategories:I,effectivePage:v}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:ee};const Q=ai(ee);if(Q.categories.length===0)return{effectiveCategories:void 0,effectivePage:ee};const ie=ee.map(ce=>{if(ce.isSubcontract||ce.capacity==null)return ce;const xe=Q.capacityToCategoryId.get(ce.capacity);return xe?{...ce,categoryId:xe}:ce});return{effectiveCategories:Q.categories,effectivePage:ie}},[t,ee]),L=p.useCallback(Q=>{_(ie=>{const ce=new Set(ie);return ce.has(Q)?ce.delete(Q):ce.add(Q),ce})},[]),H=p.useMemo(()=>{const Q=[],ie=I?[...I].sort((ce,xe)=>ce.maxPassengers-xe.maxPassengers):[];for(const ce of ie)v.some(xe=>!xe.isSubcontract&&xe.categoryId===ce.id)&&Q.push(ce.id);return v.some(ce=>ce.isSubcontract)&&Q.push("__subcontract__"),Q},[I,v]),Y=p.useCallback(()=>{_(new Set)},[]),M=p.useCallback(()=>{_(new Set(H))},[H]),{visiblePage:te,visibleRowsPerItem:N,visibleTotalRows:q,visibleProjectsPerPerson:re,separatorRowIndices:W}=p.useMemo(()=>{const Q=Ni(v,I),ie=((I==null?void 0:I.length)??0)>0,ce=new Map;ee.forEach((ke,We)=>ce.set(ke.id,We));const xe=[],be=[],Fe=[],He=[];let lt=0;for(const ke of Q)if(ke.type==="subcontract"||ke.type==="category"&&ie){const dt=ke.type==="subcontract"?"__subcontract__":ke.category.id,ut=b.has(dt);if(He.push(lt),!ut)for(const Ue of ke.items){const It=ce.get(Ue.id)??0,Ot=oe[It];xe.push(Ue),be.push(Ot),Fe.push(se[It]),lt+=Ot}}else for(const dt of ke.items){const ut=ce.get(dt.id)??0,Ue=oe[ut];xe.push(dt),be.push(Ue),Fe.push(se[ut]),lt+=Ue}const Dn=be.reduce((ke,We)=>ke+We,0);return{visiblePage:xe,visibleRowsPerItem:be,visibleTotalRows:Dn,visibleProjectsPerPerson:Fe,separatorRowIndices:He}},[v,I,ee,b,oe,se]),ae=p.useRef(st((Q,ie,ce,xe,be,Fe)=>{if(!T.current)return;const{tile:He,segmentId:lt}=me(Q);if(!lt||!He){X(!1),x(bn);return}const Dn=ue(lt,ie),ke=T.current.getBoundingClientRect(),We=He.getBoundingClientRect(),dt={x:Q.clientX-ke.left,y:Q.clientY-ke.top},ut={x:Q.clientX-ke.left,y:Q.clientY-ke.top},Ue={x:We.left-ke.left,y:We.top-ke.top,width:We.width,height:We.height},{coords:{x:It,y:Ot},resourceIndex:wl,disposition:Sl,reservationData:Cl}=si(Dn,ce,dt,xe,be,Fe,R);x({coords:{x:It,y:Ot},mouseCoords:ut,resourceIndex:wl,disposition:Sl,reservationData:Cl,tileBounds:Ue}),X(!0)},4)),le=p.useRef(st((Q,ie)=>{C(),g(Q.map(ce=>({...ce,data:ce.data.filter(xe=>{const{title:be,description:Fe,subtitle:He}=xe;return(be==null?void 0:be.toLowerCase().includes(ie.toLowerCase()))||(He==null?void 0:He.toLowerCase().includes(ie.toLowerCase()))||(Fe==null?void 0:Fe.toLowerCase().includes(ie.toLowerCase()))})})).filter(ce=>ce.data.length>0))},500)),ue=(Q,ie)=>{if(Q)return ie.flatMap(ce=>ce.data).find(ce=>ce.segmentId===Q)},me=Q=>{if(!Q.target)return{tile:null,segmentId:null};const ie=Q.target.closest("[data-segment-id]");return ie?{tile:ie,segmentId:ie.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},Me=Q=>{const ie=Q.target.value;m(ie),le.current.cancel(),ie?le.current(e,ie):(C(),g(e))},ve=p.useCallback(()=>{ae.current.cancel(),X(!1),x(bn)},[]);return p.useEffect(()=>{const Q=ce=>ae.current(ce,e,z,N,re,P),ie=T.current;if(ie)return ie.addEventListener("mousemove",Q),ie.addEventListener("mouseleave",ve),()=>{ie.removeEventListener("mousemove",Q),ie.removeEventListener("mouseleave",ve)}},[ae,ve,re,N,z,P,e]),p.useEffect(()=>{f?(le.current.cancel(),le.current(e,f)):g(e)},[e,f]),p.useLayoutEffect(()=>{const Q=j.current;if(!Q)return;const ie=()=>J(Q.offsetHeight);ie();const ce=new ResizeObserver(ie);return ce.observe(Q),()=>ce.disconnect()},[]),a.jsxs(Oi,{children:[a.jsx(La,{headerHeight:O,data:v,categories:I,pageNum:B,pagesAmount:G,rows:oe,onLoadNext:K,onLoadPrevious:U,searchInputValue:f,onSearchInputChange:Me,onItemClick:o,collapsedGroups:b,onToggleGroup:L,allGroupIds:H,onExpandAll:Y,onCollapseAll:M}),a.jsxs(Yi,{children:[a.jsx(dc,{ref:j,zoom:P,topBarWidth:i,showThemeToggle:A,toggleTheme:s}),e.length?a.jsx(ei,{data:te,baseData:n||e,zoom:P,rows:q,ref:T,onTileClick:r,onEventDrop:l,onEventDrag:u,draggableConfig:c,onDragStateChange:E,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y,separatorRowIndices:W}):a.jsx(Li,{width:i,children:V?a.jsx(Cn,{isLoading:V,position:"left"}):a.jsx(Ii,{})}),$&&F&&!Z&&(S==null?void 0:S.resourceIndex)>-1&&a.jsx(Zc,{tooltipData:S})]})]})},Hi=w.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
`,wn=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({$at:e})=>e??"start"};
  justify-content: ${({$at:e})=>e==="end"?"flex-end":e==="center"?"center":"flex-start"};
`,Wi=w.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,$r=w.button`
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
`,zi=w.button`
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
`,Bi=w.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,ji=w.div`
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
`,Dr=w.button`
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
`,Zi=w.label`
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
`,Vi=w.button`
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
`,Gi=w.span`
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
`,at=({children:e,sw:n=2})=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:e}),Xi=()=>{var n,t;const e=document.getElementById(Oe);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(n=e==null?void 0:e.requestFullscreen)==null||n.call(e)},Ui=()=>{const{config:e,date:n,zoom:t,handleGoNext:r,handleGoPrev:o,handleGoToday:s,setZoom:i,goToDate:l,toggleDisplayActiveUnits:u}=Ye(),{filterButtonState:c=-1}=e,d=()=>{var h;(h=document.querySelector(`#${Oe} input[placeholder]`))==null||h.focus()};return a.jsxs(Hi,{width:0,children:[a.jsxs(wn,{$at:"start",children:[a.jsx(Bi,{children:n.format("MMMM YYYY")}),a.jsxs(ji,{children:[a.jsx("button",{className:t===2?"on":"",onClick:()=>i(2),children:"Día"}),a.jsx("button",{className:t===0?"on":"",onClick:()=>i(0),children:"Semana"}),a.jsx("button",{className:t===1?"on":"",onClick:()=>i(1),children:"Mes"})]}),a.jsxs(Zi,{children:[a.jsxs(at,{children:[a.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),a.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),a.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",a.jsx("input",{type:"date",onChange:h=>h.target.value&&l(h.target.value)})]})]}),a.jsx(wn,{$at:"center",children:a.jsxs(Wi,{children:[a.jsx($r,{onClick:o,"aria-label":"Anterior",children:a.jsx(at,{children:a.jsx("path",{d:"m15 18-6-6 6-6"})})}),a.jsx(zi,{onClick:s,children:"Hoy"}),a.jsx($r,{onClick:r,"aria-label":"Siguiente",children:a.jsx(at,{children:a.jsx("path",{d:"m9 18 6-6-6-6"})})})]})}),a.jsxs(wn,{$at:"end",children:[a.jsxs(Vi,{onClick:d,children:[a.jsxs(at,{children:[a.jsx("circle",{cx:"11",cy:"11",r:"7"}),a.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",a.jsx("span",{className:"k",children:"⌘K"})]}),c>=0&&a.jsxs(Dr,{$primary:!!c,onClick:u,children:[a.jsx(at,{children:a.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&a.jsx(Gi,{children:c})]}),a.jsxs(Dr,{onClick:Xi,children:[a.jsx(at,{children:a.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]})]})]})},Ki={add:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>ne.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>ne.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>ne.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>ne.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>ne.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>ne.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>ne.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),ne.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Sn=({iconName:e,width:n,height:t,fill:r,className:o})=>{const{colors:s}=Dt(),i=Ki[e];return i?a.jsx(i,{style:{transition:".5s ease"},fill:r??s.accent,width:n,height:t,className:o}):null},qi=(e,n,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[n];w.button`
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
  ${({theme:e,variant:n,disabled:t})=>qi(e,n,t)}
`;const Ji=w.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${lr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 16px 11px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
`,Qi=w.div`
  width: ${Ee-28}px;
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,Ri=w.div`
  position: relative;
  flex: 1;
  height: 46px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 9px;
  overflow: hidden;
  cursor: pointer;
`,ea=w.div`
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
`,ta=w.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,na=w.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,ra=w.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({$sev:e})=>e===2?"#c6483d":e===1?"#d98a22":"#93b1a6"};
`,oa=w.div`
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
`,sa=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,ia=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,aa=w.div`
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
`,ca=()=>{const{date:e,zoom:n,data:t,goToDate:r}=Ye(),o=je(),s=p.useRef(null),[i,l]=p.useState(null),u=p.useMemo(()=>Array.from({length:12},(E,f)=>D().month(f).format("MMM").toUpperCase()),[o]),c=e.year(),d=p.useMemo(()=>D(new Date(c,0,1)),[c]),h=p.useMemo(()=>D(new Date(c+1,0,1)).diff(d,"day"),[c,d]),y=E=>E.diff(d,"day")/h*100,S=p.useMemo(()=>{const E=Math.ceil(h/7),f=new Array(E).fill(0),m=new Array(E).fill(0);for(const _ of t??[])for(const P of _.data??[]){const z=D(P.startDate);if(z.year()!==c)continue;const V=Math.floor(z.diff(d,"day")/7);if(V<0||V>=E)continue;f[V]+=1;const R=P.readiness==="sin_chofer"?2:P.readiness==="sin_avisar"?1:0;R>m[V]&&(m[V]=R)}const b=Math.max(1,...f);return f.map((_,P)=>({h:_/b*100,sev:m[P]}))},[t,c,d,h]),x=D(),k=x.year()===c?y(x):null,g=n===1?dn(1)/2:n===0?dn(0)*7/2:.5,F=Math.max(0,y(e.subtract(g,"day"))),X=Math.min(100,y(e.add(g,"day")))-F,Z=E=>{var b;const f=(b=s.current)==null?void 0:b.getBoundingClientRect();if(!f)return null;const m=Math.min(1,Math.max(0,(E-f.left)/f.width));return{f:m,d:d.add(Math.round(m*h),"day")}};return a.jsxs(Ji,{children:[a.jsxs(Qi,{children:["Navegar",a.jsx("br",{}),"por fecha"]}),a.jsxs(Ri,{ref:s,onClick:E=>{const f=Z(E.clientX);f&&r(f.d.toDate())},onMouseMove:E=>{const f=Z(E.clientX);f&&l({left:f.f*100,label:`${f.d.date()} ${u[f.d.month()]}`})},onMouseLeave:()=>l(null),children:[a.jsx(ea,{children:u.map((E,f)=>a.jsx("span",{style:{left:`${y(D(new Date(c,f,1)))}%`},children:E},f))}),u.map((E,f)=>f===0?null:a.jsx(ta,{style:{left:`${y(D(new Date(c,f,1)))}%`}},f)),a.jsx(na,{children:S.map((E,f)=>a.jsx(ra,{$sev:E.sev,style:{height:`${E.h}%`}},f))}),a.jsx(sa,{style:{left:`${F}%`,width:`${X}%`}}),k!==null&&a.jsx(oa,{style:{left:`${k}%`},children:a.jsx("span",{children:"HOY"})}),i&&a.jsxs(a.Fragment,{children:[a.jsx(ia,{style:{left:`${i.left}%`}}),a.jsx(aa,{style:{left:`${i.left}%`},children:i.label})]})]})]})},la=w.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?lr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,da=w.div`
  position: relative;
`,ua=({data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,schedulerRef:d,onTimeRangeSelect:h,onMultiTimeRangeSelect:y,clickToAddConfig:S})=>{const{goToDate:x,handleGoToday:k,zoomIn:g,zoomOut:F,zoom:X}=Ye();return p.useImperativeHandle(d,()=>({goToDate:x,goToToday:k,setZoom:Z=>{if(!gr(Z))return;const E=Z-X;if(E>0)for(let f=0;f<E;f++)g();else for(let f=0;f<Math.abs(E);f++)F()}}),[x,k,X,g,F]),a.jsx(Fi,{data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:h,onMultiTimeRangeSelect:y,clickToAddConfig:S})},fa=p.forwardRef(function({data:n,categories:t,baseData:r,config:o,startDate:s,onRangeChange:i,onTileClick:l,handleToggleDisplayActiveUnits:u,onClearFilterData:c,onItemClick:d,isLoading:h,onEventDrop:y,onEventDrag:S,draggableConfig:x,onTimeRangeSelect:k,onMultiTimeRangeSelect:g,clickToAddConfig:F},X){var T;const Z=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),E=p.useRef(null),f=p.useRef(null),[m,b]=p.useState((T=E.current)==null?void 0:T.clientWidth),_=p.useMemo(()=>D(s),[s]),[P,z]=p.useState(Z.defaultTheme??"light"),V=()=>{z(P==="light"?"dark":"light")},R=P==="light"?rs:os,$=Z.theme?Z.theme[R.mode]:{},A={...R,colors:{...R.colors,...$}};return p.useImperativeHandle(X,()=>({goToDate:j=>{var O;return(O=f.current)==null?void 0:O.goToDate(j)},goToToday:()=>{var j;return(j=f.current)==null?void 0:j.goToToday()},setZoom:j=>{var O;return(O=f.current)==null?void 0:O.setZoom(j)}}),[]),p.useEffect(()=>{const j=()=>{E.current&&b(E.current.clientWidth)};return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]),E.current,a.jsxs(a.Fragment,{children:[a.jsx(ns,{}),a.jsx(Ro,{theme:A,children:a.jsx(_i,{lang:Z.lang,translations:Z.translations,children:a.jsxs(Xs,{data:n,isLoading:!!h,config:Z,onRangeChange:i,defaultStartDate:_,handleToggleDisplayActiveUnits:u,onClearFilterData:c,children:[a.jsx(la,{showScroll:!!n.length,$footer:Z.showOverview!==!1&&!!n.length,id:Oe,ref:E,children:a.jsx(da,{children:a.jsx(ua,{data:n,baseData:r,categories:t,onTileClick:l,topBarWidth:m??0,onItemClick:d,toggleTheme:V,onEventDrop:y,onEventDrag:S,draggableConfig:x,schedulerRef:f,onTimeRangeSelect:k,onMultiTimeRangeSelect:g,clickToAddConfig:F})})}),Z.showOverview!==!1&&!!n.length&&a.jsx(ca,{})]})})})]})}),ha=w.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:n})=>e==="next"?`1px solid ${n.colors.border}`:"none"};
`,pa=w.button`
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
`,ga=w.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ma=w.p`
  ${Qe}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Er=({intent:e,onClick:n,icon:t,isVisible:r,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:l}=je(),u=e==="next"?`${i} ${o+2}/${s}`:`${l} ${o}/${s}`;return a.jsx(ha,{intent:e,children:a.jsxs(pa,{onClick:n,isVisible:r,children:[t&&a.jsx(ga,{children:t}),a.jsx(ma,{children:u})]})})},ya=w.div`
  min-width: ${Ee+"px"};
  max-width: ${Ee+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,va=w.div`
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
`,xa=w.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,ba=w.input`
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
`,wa=w.div`
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
`,Sa=w.button`
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
`,Ca=w.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${de}px;
  height: calc(${de}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBorder+"33":e.colors.border};
  background-color: ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBg:"transparent"};
  transition: 0.5s ease;
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,Ma=w.div`
  display: flex;
  align-items: center;
`,ka=w.div`
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
`,$a=w.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Da=w.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,_r=w.p`
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
`,Ea=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),_a=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),a.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),a.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),Ta=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),a.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),Aa=({id:e,item:n,rows:t,onItemClick:r,isSubcontract:o})=>a.jsx(Ca,{title:n.title,clickable:typeof r=="function",rows:t,$isSubcontract:o,onClick:()=>r==null?void 0:r({id:e,label:n}),children:a.jsxs(Ma,{children:[a.jsx(ka,{$provider:o,children:Ea(n.icon)?a.jsx($a,{src:n.icon,alt:""}):o?a.jsx(Ta,{}):a.jsx(_a,{})}),a.jsxs(Da,{children:[a.jsx(_r,{isMain:!0,children:n.title}),a.jsx(_r,{children:n.subtitle})]})]})}),Pa=w.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  background: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractBg:e.colors.accent+"14"};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractBg:e.colors.accent+"22"};
  }
`,Ia=w.span`
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
`,Oa=w.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,Ya=w.div`
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
`,Tr=({label:e,count:n,isCollapsed:t,onToggle:r,variant:o="category"})=>a.jsxs(Pa,{$variant:o,onClick:r,title:e,children:[a.jsx(Ya,{$collapsed:t,children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx(Ia,{$variant:o,children:e}),a.jsx(Oa,{$variant:o,children:n})]}),La=({data:e,categories:n,headerHeight:t,rows:r,onLoadNext:o,onLoadPrevious:s,pageNum:i,pagesAmount:l,searchInputValue:u,onSearchInputChange:c,onItemClick:d,collapsedGroups:h,onToggleGroup:y,allGroupIds:S,onExpandAll:x,onCollapseAll:k})=>{const[g,F]=p.useState(!1),X=je(),Z=()=>F($=>!$),E=n?[...n].sort(($,A)=>$.maxPassengers-A.maxPassengers):[],f=E.length>0,m=S.length>0,b=m&&h.size===S.length;m&&h.size;const _=e.filter($=>$.isSubcontract),P=X.subcontract??"Subcontract",z=$=>{const A=e.indexOf($);return a.jsx(Aa,{id:$.id,item:$.label,rows:r[A],onItemClick:d,isSubcontract:$.isSubcontract},$.id)},V=$=>{const A=e.filter(O=>!O.isSubcontract&&O.categoryId===$.id);if(A.length===0)return null;const T=h.has($.id),j=$.name;return a.jsxs("div",{children:[a.jsx(Tr,{label:j,count:A.length,isCollapsed:T,onToggle:()=>y($.id),variant:"category"}),!T&&A.map(z)]},$.id)},R=e.filter($=>!$.isSubcontract&&(!$.categoryId||!f));return a.jsxs(ya,{children:[a.jsxs(va,{$height:t,children:[a.jsxs(xa,{children:[a.jsxs(wa,{isFocused:g,children:[a.jsx(ba,{placeholder:X.search,value:u,onChange:c,onFocus:Z,onBlur:Z}),a.jsx(Sn,{iconName:"search"})]}),m&&a.jsx(Sa,{title:b?"Expand all":"Collapse all",onClick:b?x:k,$allCollapsed:b,children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:b?a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),a.jsx(Er,{intent:"previous",isVisible:i!==0,onClick:s,icon:a.jsx(Sn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]}),f?E.map(V):R.map(z),f&&R.length>0&&R.map(z),_.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(Tr,{label:P,count:_.length,isCollapsed:h.has("__subcontract__"),onToggle:()=>y("__subcontract__"),variant:"subcontract"}),!h.has("__subcontract__")&&_.map(z)]}),a.jsx(Er,{intent:"next",isVisible:i!==l-1,onClick:o,icon:a.jsx(Sn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]})},Na=w.div`
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
`,Fa=$t`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Ha=w.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Fa} 1s infinite;
`,Cn=({isLoading:e,position:n})=>e?a.jsx(Na,{position:n,children:a.jsx(Ha,{})}):null,Le=(e,n)=>{const{ctx:t,x:r,y:o,width:s,height:i,textYPos:l,label:u,font:c,isBottomRow:d,fillStyle:h,topText:y,bottomText:S,strokeStyle:x,labelBetweenCells:k}=e;if(t.beginPath(),t.strokeStyle=x??n.colors.border,t.setLineDash([]),u&&c&&l){t.fillStyle=n.colors.gridBackground,t.fillRect(r,o,s,i),k?(t.moveTo(r,o),t.lineTo(r+s,o),t.stroke(),t.moveTo(r,o+i),t.lineTo(r+s,o+i),t.stroke(),t.moveTo(r+s/2,o+i),t.lineTo(r+s/2,o+i-5),t.stroke()):t.strokeRect(r+.5,o+.5,s,i),t.font=c;const g=r+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=n.colors.accent,t.fillText(u,g,l)}if(d&&h&&y&&S){t.fillStyle=h,t.fillRect(r,o,s,i),t.strokeRect(r+.5,o+.5,s,i),t.font=y.font;const g=r+s/2-t.measureText(y.label).width/2;t.fillStyle=y.color,t.fillText(y.label,g,y.y),t.font=S.font;const F=r+s/2-t.measureText(S.label).width/2;t.fillStyle=S.color,t.fillText(S.label,F,S.y)}},Mn=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return t?o==="bottomRow"?n.colors.placeholder:n.colors.accent:r?o==="bottomRow"?n.colors.placeholder:n.colors.textPrimary:n.colors.placeholder},Wa=(e,n,t,r)=>{const o=tt-Ge/is,s=tt-Ge/as,i=Ie+et;let l=0;for(let u=0;u<n;u++){const c=fr(D(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(u,"days")),d=c.isCurrentDay;if(Le({ctx:e,x:l,y:i,width:ye,height:Ge,isBottomRow:!0,fillStyle:d?r.colors.today+"26":c.isBusinessDay?r.colors.gridBackground:r.colors.primary,topText:{y:o,label:d?"":c.dayName.toUpperCase(),font:Ae.bottomRow.name,color:Mn({isCurrent:!1,isBusinessDay:c.isBusinessDay},r)},bottomText:{y:s,label:`${c.dayOfMonth}`,font:d?"700 10px Inter":Ae.bottomRow.number,color:d?r.colors.today:Mn({isCurrent:!1,isBusinessDay:c.isBusinessDay,variant:"bottomRow"},r)}},r),d){const S=l+ye/2,x=o-13/2;e.save(),e.fillStyle=r.colors.today,e.beginPath(),e.roundRect?e.roundRect(S-30/2,x,30,13,5):e.rect(S-30/2,x,30,13),e.fill(),e.fillStyle="#fff",e.font="800 8.5px Inter",e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",S,x+13/2+.5),e.restore()}l+=ye}},za=(e,n,t,r)=>{let o=-(t.dayOfMonth-1)*_e;const s=Ie;let l=t.month;for(let u=0;u<n;u++){l>=qt&&(l=0);const c=ur(t,u)*_e;Le({ctx:e,x:o,y:s,width:c,height:et,textYPos:ar,label:D().month(l).format("MMMM").toUpperCase(),font:Ae.bottomRow.number},r),o+=c,l++}},Ba=(e,n,t)=>{let o=0,s=0,i=D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month();o=-n.dayOfMonth*ye+ye;for(let l=0;l<qt;l++)i>qt-1&&(i=0),s=D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(l,"months").daysInMonth()*ye,Le({ctx:e,x:o,y:0,width:s,height:Ie,textYPos:Qt,label:D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,font:Ae.topRow},t),o+=s,i++},ja=(e,n,t,r)=>{const o=7*ye,s=Ie,i=e.canvas.width/o+o,l=n.weekOfYear;let u=0;for(let c=0;c<i;c++){const d=D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).day();let h=(l+c)%or;h<=0&&(h+=or),d!==1&&c===0&&(u=-d*ye+ye),Le({ctx:e,x:u,y:s,width:o,height:et,textYPos:ar,label:`${t.toUpperCase()} ${h}`,font:Ae.middleRow},r),u+=o}},Za=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return o==="yearView"?t?n.colors.tertiary:n.colors.gridBackground:t?n.colors.currentDay:r?n.colors.primary:n.colors.secondary},Va=(e,n,t,r,o)=>{const s=tt-Ge/1.6,i=tt-Ge/4.5,l=Ie+et;let u=0;for(let c=0;c<n;c++){const d=D(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),h=d.isSame(D(),"week");Le({ctx:e,x:u,y:l,width:nt,height:Ge,isBottomRow:!0,fillStyle:h?o.colors.today+"26":Za({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:h?"700 14px Inter":Ae.bottomRow.name,color:h?o.colors.today:Mn({isCurrent:h},o)},bottomText:{y:i,label:r.toUpperCase(),font:Ae.middleRow,color:o.colors.placeholder}},o),u+=nt}},Ga=(e,n,t,r)=>{const s=n.year,i=e.canvas.width*2;let l=0,u=0,c=(dr(s)-t+1)*_e,d=0;for(;l+d<=i;)u>0&&(c=dr(s+u)*_e),d+c>i&&u>0&&(c=Math.ceil((i-d)/_e)*_e),Le({ctx:e,x:l,y:0,width:c,height:Ie,textYPos:Qt,label:(s+u).toString(),font:Ae.topRow},r),l+=c,d+=c,u++},Xa=(e,n,t,r)=>{const o=Math.floor(n/Et)+2,s=Et*Ce;let u=-D(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Ce+.5*Ce;for(let c=0;c<o;c++){const d=D(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Le({ctx:e,x:u,y:rt,width:s,height:gt,textYPos:rt+gt/2+2,label:d,font:Ae.bottomRow.number},r),u+=s}},Ua=(e,n,t,r)=>{const o=Math.ceil(n/Et),s=D(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),l=s.month(),u=i.add(1,"day").month(),c=l===u?1:2;let d=.5*Ce;for(let h=0;h<c;h++){const y=D(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),x=D(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),k=x.format("MMMM").toUpperCase(),g=x.diff(y,"hour")+1,F=h===0?g*Ce:n*Ce;Le({ctx:e,x:d,y:0,width:F,height:rt,textYPos:Qt,label:k,font:Ae.topRow},r),d+=F}},Ka=(e,n,t,r)=>{let o=0;const s=rt+gt,i=D(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=Ce;for(let u=0;u<n;u++){const c=i.add(u,"hours").format("h:00a").toUpperCase();Le({ctx:e,x:o,y:s,width:l,height:Kt,label:c,font:Ae.bottomRow.hoursInDay,textYPos:rt+gt+Kt/2+2,labelBetweenCells:!0},r),o+=Ce}},qa=(e,n,t,r,o,s,i)=>{switch(n){case 0:Ga(e,r,s,i),za(e,t,r,i),Va(e,t,r,o,i);break;case 1:Ba(e,r,i),ja(e,r,o,i),Wa(e,t,r,i);break;case 2:Ua(e,t,r,i),Xa(e,t,r,i),Ka(e,t,r,i);break}},Ja=w.div`
  position: sticky;
  top: 0;
  z-index: 1;
`,Qa=w.div`
  position: sticky;
  left: ${Ee}px;
  width: calc(${({$width:e})=>e}px - ${Ee}px);
  z-index: 3;
`,Ra=w.div`
  height: ${tt}px;
  display: block;
`,ec=w.canvas``,tc={transfer:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 8h13l-3-3"}),a.jsx("path",{d:"M20 16H7l3 3"})]}),sun:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"4"}),a.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),a.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),a.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:a.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 3 2 20h20z"}),a.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),a.jsx("path",{d:"M12 7.5V12l3 2"})]})},Ne=({name:e,className:n,strokeWidth:t=2})=>a.jsx("svg",{className:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:tc[e]}),nc=w.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Ar=w.span`
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
`,rc=w.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: #b4791e;
  background: #fbf1de;
  border: 1px solid #e9d3a6;
  padding: 1px 5px;
  border-radius: 5px;
`,oc=w.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,sc=w.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,ic=w.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,ac=w.span`
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
`,cc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],lc=()=>a.jsxs(nc,{children:[a.jsx(Ar,{children:"Leyenda"}),a.jsxs(Pt,{children:[a.jsx(Ne,{name:"transfer"})," Transfer"]}),a.jsxs(Pt,{children:[a.jsx(Ne,{name:"sun"})," Gira 1 día"]}),a.jsxs(Pt,{children:[a.jsx(Ne,{name:"tour"})," Gira multidía"]}),a.jsxs(Pt,{children:[a.jsx(rc,{children:"SUB"})," Subcontrato"]}),a.jsx(oc,{}),a.jsxs(Ar,{children:["Estado ",a.jsx("em",{children:"franja izq. + punto esq."})]}),cc.map(e=>a.jsxs(sc,{children:[a.jsx(ic,{style:{background:e.stripe}}),a.jsx(ac,{style:{color:e.color},children:a.jsx(Ne,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),dc=p.forwardRef(function({zoom:n,topBarWidth:t,showThemeToggle:r,toggleTheme:o},s){const{week:i}=je(),{date:l,cols:u,dayOfYear:c,startDate:d,config:h}=Ye(),y=p.useRef(null),S=Dt(),x=p.useCallback(k=>{const g=fn(),X=(n===2?ss:tt)+1;yr(k,g,X),qa(k,n,u,d,i,c,S)},[u,c,d,i,n,S]);return p.useEffect(()=>{if(!y.current)return;const k=y.current.getContext("2d");if(!k)return;const g=()=>x(k);return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[x]),p.useEffect(()=>{const k=y.current;if(!k)return;k.style.letterSpacing="1px";const g=k.getContext("2d");g&&x(g)},[l,n,x]),a.jsxs(Ja,{ref:s,children:[(h.showTopbar!==!1||h.showLegend!==!1)&&a.jsxs(Qa,{$width:t,children:[h.showTopbar!==!1&&a.jsx(Ui,{width:t,showThemeToggle:r,toggleTheme:o}),h.showLegend!==!1&&a.jsx(lc,{})]}),a.jsx(Ra,{id:cs,children:a.jsx(ec,{ref:y})})]})}),uc=(e,n,t)=>{let r;switch(t){case 0:r=_e;break;case 2:r=Ce;break;default:r=ye}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),l=n.startDate.startOf("day"),u=n.endDate.startOf("day"),c=()=>{let d;switch(t){case 2:d=(e.startDate.diff(n.startDate,"minute")/we+1)*r-r/2;break;default:d=s.diff(l,"day")*r}return Math.max(0,d)};if(e.startDate.isAfter(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/we*r,50);break;default:d=Math.max(i.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(n.startDate,"minute")/we*r+.5*r,50);break;default:d=Math.max(i.diff(l,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isAfter(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(e.startDate,"minute")/we*r,50);break;default:d=Math.max(u.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(n.startDate,"minute")/we*r,50);break;default:d=Math.max(u.diff(l,"day")*r+r,50)}return{x:c(),width:d}}return{x:c(),width:50}},fc=(e,n,t,r,o,s)=>{const i=e*de+ls,l=n.hour(),u=t.hour();let c,d,h,y;switch(s){case 2:{c=D(r),d=D(o),h=D(n).hour(l).minute(0),y=D(t).hour(u).minute(0);break}default:{c=D(r).hour(0).minute(0),d=D(o).hour(23).minute(59),h=n,y=t;break}}return{...uc({startDate:c,endDate:d},{startDate:h,endDate:y},s),y:i}},Pr=e=>{if(!e)return"white";const n=[];for(let o=1;o<6;o+=2)n.push(parseInt(e.slice(o,o+2),16)/255);const t=n.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,w.p`
  ${Qe}
  ${Re}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const hc=w.button`
  ${Qe}
  position: absolute;
  height: ${Jt}px;
  border-radius: 7px;
  overflow: hidden;
  outline: none;
  border: none;
  text-align: left;
  color: #fff;
  width: 100%;
  box-shadow: 0 2px 5px -1px rgba(12, 26, 23, 0.28), 0 0 0 0.5px rgba(12, 26, 23, 0.14);
  cursor: ${({isDraggable:e,isDragging:n})=>e?n?"grabbing":"grab":"not-allowed"};
  opacity: ${({isDragging:e})=>e?.3:1};
  transition: opacity 0.2s ease;
  ${({$unconfirmed:e})=>e&&`background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px #D98A22, 0 2px 5px -1px rgba(12,26,23,0.28);`}
`,pc=w.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`,gc=w.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,Ir=w.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,mc=w.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,yc=w.span`
  ${Re}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,vc=w.span`
  ${Re}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,xc=w.span`
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
`,bc=w.div`
  ${Re}
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
`,Or=w.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Yr=w.span`
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
`,Lr=w.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,wc=w.div`
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
`,Nr=w.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,Sc=34,Cc={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},Mc="#3E8E5A",kc="#D98A22",$c=({row:e,data:n,zoom:t,isSubcontract:r=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:l=!0,yOffset:u=0})=>{const{date:c}=Ye(),d=un(c,t),{y:h,x:y,width:S}=fc(e,d.startDate,d.endDate,n.startDate,n.endDate,t),{colors:x}=Dt(),k=p.useRef(null),g=D(n.startDate).isSame(D(n.endDate),"day"),F=n.eventType===mt.Tour,X=n.eventType===mt.Transfer,Z=g&&(F||X),E=V=>{k.current={x:V.clientX,y:V.clientY},l&&s&&(V.preventDefault(),s(n,V))},f=V=>{if(k.current){const R=Math.abs(V.clientX-k.current.x),$=Math.abs(V.clientY-k.current.y);Math.sqrt(R*R+$*$)<=5&&(o==null||o(n)),k.current=null}else o==null||o(n)},m={left:`${y}px`,top:`${h+u}px`,backgroundColor:`${n.bgColor??x.defaultTile}`,width:`${S}px`,color:Pr(n.bgColor??"")},b=!r&&n.readiness?Cc[n.readiness]:null,_=r&&n.subcontractConfirmed===!1,P=r?_?kc:Mc:b==null?void 0:b.stripe,z=V=>a.jsxs(hc,{"data-segment-id":n.segmentId,style:m,onClick:f,onMouseDown:E,onDragStart:R=>R.preventDefault(),isDraggable:l,isDragging:i,$unconfirmed:_,children:[P&&a.jsx(pc,{style:{background:P}}),V]});return z(Z?a.jsxs(a.Fragment,{children:[(r||b)&&a.jsx(Or,{$sm:!0,children:r?a.jsx(Lr,{children:"SUB"}):b&&a.jsx(Yr,{$sm:!0,style:{color:b.color},children:a.jsx(Ne,{name:b.icon,strokeWidth:b.icon==="check"?2.6:2.2})})}),a.jsxs(wc,{children:[a.jsx(Ne,{name:X?"transfer":"sun",strokeWidth:2.4}),S>=Sc&&a.jsxs(a.Fragment,{children:[a.jsx(Nr,{children:D(n.startDate).format("HH:mm")}),!X&&a.jsx(Nr,{$end:!0,children:D(n.endDate).format("HH:mm")})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Or,{children:r?a.jsx(Lr,{children:"SUB"}):b&&a.jsx(Yr,{style:{color:b.color},children:a.jsx(Ne,{name:b.icon,strokeWidth:b.icon==="check"?2.6:2.2})})}),a.jsxs(gc,{children:[a.jsxs(Ir,{$pad:!0,children:[a.jsx(mc,{children:a.jsx(Ne,{name:X?"transfer":"tour"})}),a.jsx(yc,{children:n.title})]}),a.jsxs(Ir,{children:[n.bookingNumber&&a.jsx(xc,{children:n.bookingNumber}),n.subtitle&&a.jsx(vc,{children:n.subtitle})]}),n.driver&&a.jsxs(bc,{children:[a.jsx(Ne,{name:"person"}),n.driver]})]})]}))},Fr=(e,n)=>{let t=0;for(const r of n)e>=r&&t++;return t*De},Dc=w.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${de}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  pointer-events: none;
`,Ec=({data:e,zoom:n,onTileClick:t,onDragStart:r,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const l=p.useCallback(()=>{let u=0;return e.map((c,d)=>{if(d>0&&(u+=Math.max(e[d-1].data.length,1)),!c.data.some(h=>h.length>0)){const h=Fr(u,i);return[a.jsx(Dc,{style:{top:`${u*de+h}px`},children:"Disponible"},`dispo-${c.id}`)]}return c.data.map((h,y)=>h.map(S=>{const x=s===S.segmentId,k=o?o(S):!1,g=y+u,F=Fr(g,i);return a.jsx($c,{row:g,data:S,zoom:n,isSubcontract:c.isSubcontract,onTileClick:t,onDragStart:r,isDragging:x,isDraggable:k,yOffset:F},S.segmentId)}))}).flat(2)},[e,t,n,r,o,s,i]);return a.jsx(a.Fragment,{children:l()})};w.div`
  box-sizing: border-box;
  font-family: Inter;
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
`;const _c=w.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,Tc=w.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Ac=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,Pc=w.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,Ic=w.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,Oc=w.div`
  ${Qe}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yc=w.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,Lc=w.div`
  padding: 10px 12px;
`,Nc=w.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Hr=w.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Wr=w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,zr=w.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Br=w.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,jr=w.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Fc=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Hc=w.div``,Wc=w.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,zc=w.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Bc=w.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Zr=w.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Vr=w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Gr=w.div`
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
`;w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.div``,w.span``,w.div``,w.div``,w.div``,w.div``,w.p``,w.span``;const jc={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Zc=({tooltipData:e})=>{const{mouseCoords:n,reservationData:t}=e,r=p.useRef(null),[o,s]=p.useState("below"),i=je(),l={...jc,...i.tooltip};p.useLayoutEffect(()=>{if(!r.current||!n)return;const S=r.current,{width:x,height:k}=S.getBoundingClientRect(),g=S.parentElement;if(!g)return;const F=g.getBoundingClientRect(),X=12,Z=4,E=F.height-n.y,f=F.width-n.x;let m=n.x+X,b=n.y+X,_="below";f<x+X&&(m=n.x-x-X),E<k+X&&(b=n.y-k-X,_="above"),m=Math.max(Z,Math.min(m,F.width-x-Z)),b=Math.max(Z,Math.min(b,F.height-k-Z)),s(_),S.style.left=`${m}px`,S.style.top=`${b}px`},[n]);const u=t.reservationType===mt.Tour,c=u&&t.isOneDayEvent,d=()=>u?c?"oneday":"tour":"transfer",h=()=>u?c?l.oneDay:l.tour:l.transfer,y=[t.groupName&&{label:l.groupName,value:t.groupName},t.driver&&{label:l.driver,value:t.driver},t.passengers&&{label:l.passengers,value:String(t.passengers)},t.flightNumber&&{label:l.flightNumber,value:t.flightNumber}].filter(Boolean);return a.jsxs(_c,{ref:r,$position:o,children:[a.jsxs(Tc,{children:[a.jsxs(Ac,{children:[a.jsx(Pc,{children:t.bookingNumber}),a.jsx(Ic,{$type:d(),children:h()})]}),a.jsx(Oc,{children:t.eventName}),t.client&&a.jsx(Yc,{children:t.client})]}),a.jsxs(Lc,{children:[a.jsxs(Nc,{children:[a.jsxs(Hr,{children:[a.jsx(Wr,{children:l.startDate}),a.jsxs(zr,{children:[a.jsx(Br,{children:t.startDate})," ",a.jsx(jr,{children:t.startTime})]})]}),u&&t.endDate&&a.jsxs(Hr,{$isEnd:!0,children:[a.jsx(Wr,{children:l.endDate}),a.jsxs(zr,{children:[a.jsx(Br,{children:t.endDate})," ",a.jsx(jr,{children:t.endTime})]})]})]}),y.length>0&&a.jsx(Fc,{children:y.map((S,x)=>a.jsxs(Hc,{children:[a.jsx(Wc,{children:S.label}),a.jsx(zc,{children:S.value})]},x))}),(t.serviceNotes||t.reservationNotes)&&a.jsxs(Bc,{children:[t.serviceNotes&&a.jsxs(Zr,{children:[a.jsx(Vr,{children:l.serviceNotes}),a.jsx(Gr,{children:t.serviceNotes})]}),t.reservationNotes&&a.jsxs(Zr,{children:[a.jsx(Vr,{children:l.reservationNotes}),a.jsx(Gr,{children:t.reservationNotes})]})]})]})]})};w.div`
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
`;const Vc=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Gc=w.div`
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
`,Xc=w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Xr=w.p`
  ${Qe}
  ${Re}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Uc=w.p`
  ${Qe}
  ${Re}
`,Kc=w.div`
  position: sticky;
  left: ${Ee+16}px;
  overflow: hidden;
`,qc=w.div`
  position: absolute;
  height: ${Jt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Jc=w.div`
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
`,Qc=w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Rc=w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,el=w.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Ur=w.div`
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
`,Kr=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,qr=w.div`
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
`,Jr=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,kn=w.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,$n=w.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,ct=w.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,Qr=w.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,tl=({draggedEvent:e,ghostPosition:n,ghostDimensions:t,dropTarget:r,isValidDrop:o,dragState:s,data:i,resourceOnly:l,separatorRowIndices:u=[]})=>{const c=je(),d=E=>{let f=0;for(const m of u)m<=E&&f++;return E*de+f*De},[h,y]=p.useState(null),[S,x]=p.useState(0),k=p.useCallback((E=400,f=300)=>{const b=t.width,_=48,P=document.getElementById("react-scheduler");if(!P)return{x:n.x+b+16,y:n.y};const z=P.scrollLeft,V=P.scrollTop,R=P.clientWidth,$=P.clientHeight,A=n.x-z,T=n.y-V,j={left:Ee+16,right:R-16,top:16,bottom:$-16},O=j.right-(A+b),J=A-j.left,ee=j.bottom-(T+_),se=T-j.top;let oe,B;return O>=E+16?oe=A+b+16:J>=E+16?oe=A-E-16:O>=J?(oe=A+b+16,oe+E>j.right&&(oe=j.right-E)):(oe=A-E-16,oe<j.left&&(oe=j.left)),ee>=f+16?B=T+_+16:se>=f+16?B=T-f-16:ee>=se?(B=T+_+16,B+f>j.bottom&&(B=j.bottom-f)):(B=T-f-16,B<j.top&&(B=j.top)),oe=Math.max(j.left,Math.min(oe,j.right-E)),B=Math.max(j.top,Math.min(B,j.bottom-f)),{x:oe+z,y:B+V}},[n.x,n.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&S===0?x(n.x):s==="idle"&&x(0)},[s,e,n.x,S]),p.useEffect(()=>{y(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const g=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const E=[];let f=0;for(const m of i){const b=Math.max(m.data.length,1);if(m.capacity!==void 0&&e.totalPassengers>m.capacity)for(let _=0;_<b;_++)E.push(f+_);f+=b}return E},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const F=s==="animating",X=Pr(e.bgColor??""),Z=()=>{if(!r)return"";const E=D(r.startDate).format("MMM D, HH:mm"),f=D(r.endDate).format("HH:mm");return`${E} - ${f}`};return a.jsxs(Vc,{children:[g.map(E=>a.jsx(Rc,{style:{top:`${d(E)}px`,height:`${de}px`}},E)),r&&s==="dragging"&&a.jsx(Qc,{$isValid:o,$hasConflict:r.hasConflict,style:{top:`${d(r.resourceIndex)}px`,height:`${de}px`}}),r&&s==="dragging"&&!l&&a.jsxs(a.Fragment,{children:[a.jsx(qc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(de-48)/2}px`,width:`${t.width}px`}}),a.jsx(Jc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(de-48)/2}px`},children:Z()})]}),r&&s==="dragging"&&l&&a.jsx(el,{$isValid:o,$hasConflict:r.hasConflict,style:{left:"0px",top:`${d(r.resourceIndex)}px`,height:`${de}px`}}),r&&o&&r.hasConflict&&r.conflicts&&r.conflicts.length>0&&s==="dragging"&&(()=>{const E=k(400,300);return a.jsxs(Ur,{style:{left:`${E.x}px`,top:`${E.y}px`},children:[a.jsxs(Kr,{children:[a.jsx(qr,{children:"!"}),r.conflicts.length," ",r.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),a.jsx(Jr,{children:r.conflicts.map((f,m)=>{const b=D(r.startDate).format("YYYY-MM-DD"),_=D(r.endDate).format("YYYY-MM-DD"),P=D(f.event.startDate).format("YYYY-MM-DD"),z=D(f.event.endDate).format("YYYY-MM-DD"),V=D(f.conflictStart).format("YYYY-MM-DD"),R=D(f.conflictEnd).format("YYYY-MM-DD"),$=b!==_,A=P!==z,T=V!==R,j=$?D(r.startDate).format("MMM D, h:mm A"):D(r.startDate).format("h:mm A"),O=$?D(r.endDate).format("MMM D, h:mm A"):D(r.endDate).format("h:mm A"),J=A?D(f.event.startDate).format("MMM D, h:mm A"):D(f.event.startDate).format("h:mm A"),ee=A?D(f.event.endDate).format("MMM D, h:mm A"):D(f.event.endDate).format("h:mm A"),se=T?D(f.conflictStart).format("MMM D, h:mm A"):D(f.conflictStart).format("h:mm A"),oe=T?D(f.conflictEnd).format("MMM D, h:mm A"):D(f.conflictEnd).format("h:mm A"),B=T?"":D(f.conflictStart).format("MMM D"),G=r.startDate.getTime(),K=r.endDate.getTime(),U=f.event.startDate.getTime(),C=f.event.endDate.getTime(),I=G>=U&&G<C,v=K>U&&K<=C,L=G<=U&&K>=C,H=U<=G&&C>=K;let Y=!1,M=!1,te=!1,N=!1,q="";return L||H?(Y=!0,M=!0,te=!0,N=!0,q=`⚠️ ${c.conflicts.changeBoth}`):I&&v?(Y=!0,M=!0,te=!0,N=!0,q=`⚠️ ${c.conflicts.changeBoth}`):I?(Y=!0,N=!0,q=`⚠️ ${c.conflicts.changeStart}`):v&&(M=!0,te=!0,q=`⚠️ ${c.conflicts.changeEnd}`),a.jsxs(kn,{children:[a.jsxs($n,{children:[c.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(ct,{children:[a.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",Y?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:j}):j," ",c.conflicts.to," ",M?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:O}):O]}),a.jsxs(ct,{children:[a.jsx("strong",{children:f.event.title})," ",c.conflicts.currentlyAt,":"," ",te?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:J}):J," ",c.conflicts.to," ",N?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ee}):ee]}),a.jsxs(Qr,{children:[c.conflicts.conflictTime,": ",B&&`${B}, `,se," - ",oe]}),q&&a.jsx(ct,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:q})]},m)})})]})})(),r&&o&&!r.hasConflict&&r.nearbyEvents&&r.nearbyEvents.length>0&&s==="dragging"&&(()=>{const E=k(400,400);return a.jsxs(Ur,{style:{left:`${E.x}px`,top:`${E.y}px`,borderColor:"#4CAF50"},children:[a.jsxs(Kr,{style:{color:"#2E7D32"},children:[a.jsx(qr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),r.nearbyEvents.length," ",r.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),a.jsxs(Jr,{children:[(()=>{const f=r.nearbyEvents.some(P=>P.position==="before"),m=r.nearbyEvents.some(P=>P.position==="after"),b=D(r.startDate).format("h:mm A"),_=D(r.endDate).format("h:mm A");return a.jsxs(kn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[a.jsxs($n,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),a.jsxs(ct,{style:{fontWeight:600},children:[D(r.startDate).format("MMM D"),":"," ",f?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:b}):b," ",c.conflicts.to," ",m?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:_}):_]}),a.jsx(ct,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),r.nearbyEvents.map((f,m)=>{const b=D(f.event.startDate).format("YYYY-MM-DD"),_=D(f.event.endDate).format("YYYY-MM-DD"),P=b!==_,z=P?D(f.event.startDate).format("MMM D, h:mm A"):D(f.event.startDate).format("h:mm A"),V=P?D(f.event.endDate).format("MMM D, h:mm A"):D(f.event.endDate).format("h:mm A"),R=D(f.event.startDate).format("MMM D"),$=Math.floor(f.timeGap/(1e3*60*60)),A=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),T=$>0?`${$}h ${A}m`:`${A}m`,j=f.position==="after",O=f.position==="before";return a.jsxs(kn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[a.jsxs($n,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(ct,{children:[!P&&`${R}: `,j?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:z}):z," ",c.conflicts.to," ",O?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:V}):V]}),a.jsxs(Qr,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[T," ",f.position==="before"?c.conflicts.before:c.conflicts.after]})]},m)})]})]})})(),a.jsx(Gc,{$isAnimating:F,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:F?`${(h==null?void 0:h.x)??0}px`:"0",top:F?`${(h==null?void 0:h.y)??0}px`:"0",transform:F?void 0:`translate3d(${l?S:n.x}px, ${n.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:X},children:a.jsx(Xc,{children:a.jsxs(Kc,{children:[a.jsx(Xr,{$bold:!0,children:e.title}),e.subtitle&&a.jsx(Xr,{children:e.subtitle}),e.description&&a.jsx(Uc,{children:e.description})]})})})]})},nl=$t`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,rl=w.div`
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
  animation: ${nl} 1.5s ease-in-out infinite;
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
`,ol=({selectionBox:e,isSelecting:n})=>!e||!n?null:a.jsx(rl,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),sl=$t`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,il=w.div`
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
  animation: ${sl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,al=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,cl=w.span`
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
`,ll=w.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,dl=w.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;w.div`
  display: none;
`,w.div`
  display: none;
`,w.button`
  display: none;
`;const ul=w.div`
  display: flex;
  gap: 8px;
`,Rr=w.button`
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
`,fl=({selections:e,onConfirm:n,onClear:t})=>{var x;const o=je().multiSelect,s=p.useMemo(()=>e.filter(k=>k.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((x=o==null?void 0:o.conflictsWarning)==null?void 0:x.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const y=s>0,S=a.jsxs(il,{$hasConflicts:y,"data-multi-select-ui":!0,children:[a.jsxs(al,{children:[a.jsxs(cl,{$hasConflicts:y,children:[e.length," ",i]}),y&&a.jsxs(ll,{children:["⚠️ ",h]}),a.jsx(dl,{children:l})]}),a.jsxs(ul,{children:[a.jsxs(Rr,{variant:"secondary",onClick:t,children:["✕ ",u]}),a.jsx(Rr,{variant:"primary",$hasConflicts:y,onClick:n,children:y?`⚠️ ${d}`:`✓ ${c}`})]})]});return to.createPortal(S,document.body)},hl=$t`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,pl=w.div`
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
  animation: ${hl} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&Ct`
      border-style: dashed;
    `}
`,gl=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,ml=w.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,yl=w.button`
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
`,vl=({selections:e,data:n,zoom:t,startDate:r,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[l,u]=p.useState(null),[c,d]=p.useState({x:0,y:0}),h=p.useRef(null),y=p.useMemo(()=>{switch(t){case 0:return _e*7;case 1:return ye;case 2:return Ce;default:return ye}},[t]),S=p.useMemo(()=>D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0),[r]),x=p.useMemo(()=>e.map((m,b)=>{let _=0,P=!1;for(const J of n){if(J.id===m.resourceId){P=!0;break}_+=Math.max(J.data.length,1)}if(!P)return null;const z=D(m.startDate),V=D(m.endDate);let R,$;switch(t){case 0:R=Math.floor(z.diff(S,"days")/7),$=Math.max(1,Math.ceil(V.diff(z,"days")/7)+1);break;case 1:R=z.diff(S,"days"),$=Math.max(1,V.diff(z,"days")+1);break;case 2:R=z.diff(S,"hours"),$=Math.max(1,V.diff(z,"hours")+1);break;default:R=0,$=1}const A=R*y;let T=0;for(const J of i)J<=_&&T++;const j=_*de+T*De,O=$*y;return{index:b,selection:m,x:A,y:j,width:O,height:de}}),[e,n,t,S,y]),k=(m,b)=>{const _=D(m).format("MMM D"),P=D(b).format("MMM D");return _===P?_:`${_} - ${P}`},g=m=>!m.hasConflict||!m.conflicts?"":`⚠️ Conflicts with:
${m.conflicts.map(_=>{const P=(_.overlapDuration/36e5).toFixed(1);return`• ${_.event.title} (${P}h overlap)`}).join(`
`)}`,F=p.useCallback(m=>{let b=0;for(const _ of n){const P=Math.max(_.data.length,1);if(m>=b*de&&m<(b+P)*de)return{resourceId:_.id,resourceLabel:_.label};b+=P}return null},[n]),X=p.useCallback(m=>{const b=Math.floor(m/y);switch(t){case 0:return S.add(b*7,"days").toDate();case 1:return S.add(b,"days").toDate();case 2:return S.add(b,"hours").toDate();default:return S.toDate()}},[t,S,y]),Z=p.useCallback((m,b)=>{!s||(m.preventDefault(),m.stopPropagation(),!x[b])||(h.current={x:m.clientX,y:m.clientY},u(b),d({x:0,y:0}))},[s,x]),E=p.useCallback(m=>{if(l===null||!h.current)return;const b=m.clientX-h.current.x,_=m.clientY-h.current.y,P=Math.round(b/y)*y,z=Math.round(_/de)*de;d({x:P,y:z})},[l,y]),f=p.useCallback(()=>{if(l===null||!s){u(null),d({x:0,y:0}),h.current=null;return}const m=x[l];if(!m){u(null),d({x:0,y:0}),h.current=null;return}const b=m.x+c.x,_=m.y+c.y,P=F(_+de/2);if(!P){u(null),d({x:0,y:0}),h.current=null;return}const z=X(b),V=e[l],R=V.endDate.getTime()-V.startDate.getTime(),$=new Date(z.getTime()+R);s(l,{startDate:z,endDate:$,resourceId:P.resourceId,resourceLabel:P.resourceLabel}),u(null),d({x:0,y:0}),h.current=null},[l,c,x,e,s,F,X]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",E),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",f)}},[l,E,f]),a.jsx(a.Fragment,{children:x.map(m=>{if(!m)return null;const b=m.selection.hasConflict||!1,_=l===m.index,P=_?m.x+c.x:m.x,z=_?m.y+c.y:m.y;return a.jsxs(pl,{$hasConflict:b,$isDragging:_,style:{left:P,top:z,width:m.width,height:m.height},"data-multi-select-ui":!0,onMouseDown:V=>Z(V,m.index),children:[b&&a.jsx(ml,{title:g(m.selection),children:"⚠️"}),a.jsx(gl,{$hasConflict:b,children:k(m.selection.startDate,m.selection.endDate)}),a.jsx(yl,{onClick:V=>{V.stopPropagation(),o(m.index)},onMouseDown:V=>V.stopPropagation(),title:b?"Remove conflicting selection":"Remove selection",children:"×"})]},m.index)})})},xl=w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,bl=({zoom:e,startDate:n})=>{const{cols:t}=Ye(),r=p.useMemo(()=>{if(e===2)return null;const o=e===0?_e*7:ye,s=D().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"),i=D().startOf("day"),l=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,n,t]);return r?a.jsx(xl,{style:{left:`${r.x}px`,width:`${r.width}px`},"aria-hidden":!0}):null},Rl="";$e.Scheduler=fa,Object.defineProperty($e,Symbol.toStringTag,{value:"Module"})});
