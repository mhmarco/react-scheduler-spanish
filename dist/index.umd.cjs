(function($e,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],a):($e=typeof globalThis<"u"?globalThis:$e||self,a($e["react-scheduler"]={},$e["react/jsx-runtime"],$e.React,$e.ReactDOM))})(this,function($e,a,p,Qr){"use strict";var fl=Object.defineProperty;var hl=($e,a,p)=>a in $e?fl($e,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):$e[a]=p;var Jr=($e,a,p)=>(hl($e,typeof a!="symbol"?a+"":a,p),p);function Rr(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const ne=Rr(p);var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ft={},eo={get exports(){return ft},set exports(e){ft=e}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dn;function to(){if(Dn)return fe;Dn=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function M(g){if(typeof g=="object"&&g!==null){var W=g.$$typeof;switch(W){case e:switch(g=g.type,g){case t:case o:case r:case c:case d:return g;default:switch(g=g&&g.$$typeof,g){case l:case i:case u:case y:case h:case s:return g;default:return W}}case n:return W}}}return fe.ContextConsumer=i,fe.ContextProvider=s,fe.Element=e,fe.ForwardRef=u,fe.Fragment=t,fe.Lazy=y,fe.Memo=h,fe.Portal=n,fe.Profiler=o,fe.StrictMode=r,fe.Suspense=c,fe.SuspenseList=d,fe.isAsyncMode=function(){return!1},fe.isConcurrentMode=function(){return!1},fe.isContextConsumer=function(g){return M(g)===i},fe.isContextProvider=function(g){return M(g)===s},fe.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},fe.isForwardRef=function(g){return M(g)===u},fe.isFragment=function(g){return M(g)===t},fe.isLazy=function(g){return M(g)===y},fe.isMemo=function(g){return M(g)===h},fe.isPortal=function(g){return M(g)===n},fe.isProfiler=function(g){return M(g)===o},fe.isStrictMode=function(g){return M(g)===r},fe.isSuspense=function(g){return M(g)===c},fe.isSuspenseList=function(g){return M(g)===d},fe.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===t||g===o||g===r||g===c||g===d||g===x||typeof g=="object"&&g!==null&&(g.$$typeof===y||g.$$typeof===h||g.$$typeof===s||g.$$typeof===i||g.$$typeof===u||g.$$typeof===b||g.getModuleId!==void 0)},fe.typeOf=M,fe}var he={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function no(){return En||(En=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b=!1,M=!1,g=!1,W=!1,U=!1,Z;Z=Symbol.for("react.module.reference");function I(N){return!!(typeof N=="string"||typeof N=="function"||N===t||N===o||U||N===r||N===c||N===d||W||N===x||b||M||g||typeof N=="object"&&N!==null&&(N.$$typeof===y||N.$$typeof===h||N.$$typeof===s||N.$$typeof===i||N.$$typeof===u||N.$$typeof===Z||N.getModuleId!==void 0))}function f(N){if(typeof N=="object"&&N!==null){var q=N.$$typeof;switch(q){case e:var re=N.type;switch(re){case t:case o:case r:case c:case d:return re;default:var H=re&&re.$$typeof;switch(H){case l:case i:case u:case y:case h:case s:return H;default:return q}}case n:return q}}}var v=i,S=s,T=e,P=u,z=t,G=y,R=h,$=n,E=o,D=r,j=c,O=d,J=!1,ee=!1;function se(N){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function oe(N){return ee||(ee=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function B(N){return f(N)===i}function V(N){return f(N)===s}function K(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function X(N){return f(N)===u}function w(N){return f(N)===t}function A(N){return f(N)===y}function m(N){return f(N)===h}function L(N){return f(N)===n}function F(N){return f(N)===o}function Y(N){return f(N)===r}function C(N){return f(N)===c}function te(N){return f(N)===d}he.ContextConsumer=v,he.ContextProvider=S,he.Element=T,he.ForwardRef=P,he.Fragment=z,he.Lazy=G,he.Memo=R,he.Portal=$,he.Profiler=E,he.StrictMode=D,he.Suspense=j,he.SuspenseList=O,he.isAsyncMode=se,he.isConcurrentMode=oe,he.isContextConsumer=B,he.isContextProvider=V,he.isElement=K,he.isForwardRef=X,he.isFragment=w,he.isLazy=A,he.isMemo=m,he.isPortal=L,he.isProfiler=F,he.isStrictMode=Y,he.isSuspense=C,he.isSuspenseList=te,he.isValidElementType=I,he.typeOf=f}()),he}(function(e){process.env.NODE_ENV==="production"?e.exports=to():e.exports=no()})(eo);function ro(e){function n(B,V,K,X,w){for(var A=0,m=0,L=0,F=0,Y,C,te=0,N=0,q,re=q=Y=0,H=0,ae=0,le=0,ue=0,me=K.length,ke=me-1,ve,Q="",ie="",ce="",be="",xe;H<me;){if(C=K.charCodeAt(H),H===ke&&m+F+L+A!==0&&(m!==0&&(C=m===47?10:47),F=L=A=0,me++,ke++),m+F+L+A===0){if(H===ke&&(0<ae&&(Q=Q.replace(y,"")),0<Q.trim().length)){switch(C){case 32:case 9:case 59:case 13:case 10:break;default:Q+=K.charAt(H)}C=59}switch(C){case 123:for(Q=Q.trim(),Y=Q.charCodeAt(0),q=1,ue=++H;H<me;){switch(C=K.charCodeAt(H)){case 123:q++;break;case 125:q--;break;case 47:switch(C=K.charCodeAt(H+1)){case 42:case 47:e:{for(re=H+1;re<ke;++re)switch(K.charCodeAt(re)){case 47:if(C===42&&K.charCodeAt(re-1)===42&&H+2!==re){H=re+1;break e}break;case 10:if(C===47){H=re+1;break e}}H=re}}break;case 91:C++;case 40:C++;case 34:case 39:for(;H++<ke&&K.charCodeAt(H)!==C;);}if(q===0)break;H++}switch(q=K.substring(ue,H),Y===0&&(Y=(Q=Q.replace(h,"").trim()).charCodeAt(0)),Y){case 64:switch(0<ae&&(Q=Q.replace(y,"")),C=Q.charCodeAt(1),C){case 100:case 109:case 115:case 45:ae=V;break;default:ae=j}if(q=n(V,ae,q,C,w+1),ue=q.length,0<J&&(ae=t(j,Q,le),xe=l(3,q,ae,V,$,R,ue,C,w,X),Q=ae.join(""),xe!==void 0&&(ue=(q=xe.trim()).length)===0&&(C=0,q="")),0<ue)switch(C){case 115:Q=Q.replace(v,i);case 100:case 109:case 45:q=Q+"{"+q+"}";break;case 107:Q=Q.replace(U,"$1 $2"),q=Q+"{"+q+"}",q=D===1||D===2&&s("@"+q,3)?"@-webkit-"+q+"@"+q:"@"+q;break;default:q=Q+q,X===112&&(q=(ie+=q,""))}else q="";break;default:q=n(V,t(V,Q,le),q,X,w+1)}ce+=q,q=le=ae=re=Y=0,Q="",C=K.charCodeAt(++H);break;case 125:case 59:if(Q=(0<ae?Q.replace(y,""):Q).trim(),1<(ue=Q.length))switch(re===0&&(Y=Q.charCodeAt(0),Y===45||96<Y&&123>Y)&&(ue=(Q=Q.replace(" ",":")).length),0<J&&(xe=l(1,Q,V,B,$,R,ie.length,X,w,X))!==void 0&&(ue=(Q=xe.trim()).length)===0&&(Q="\0\0"),Y=Q.charCodeAt(0),C=Q.charCodeAt(1),Y){case 0:break;case 64:if(C===105||C===99){be+=Q+K.charAt(H);break}default:Q.charCodeAt(ue-1)!==58&&(ie+=o(Q,Y,C,Q.charCodeAt(2)))}le=ae=re=Y=0,Q="",C=K.charCodeAt(++H)}}switch(C){case 13:case 10:m===47?m=0:1+Y===0&&X!==107&&0<Q.length&&(ae=1,Q+="\0"),0<J*se&&l(0,Q,V,B,$,R,ie.length,X,w,X),R=1,$++;break;case 59:case 125:if(m+F+L+A===0){R++;break}default:switch(R++,ve=K.charAt(H),C){case 9:case 32:if(F+A+m===0)switch(te){case 44:case 58:case 9:case 32:ve="";break;default:C!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:F+m+A===0&&(ae=le=1,ve="\f"+ve);break;case 108:if(F+m+A+E===0&&0<re)switch(H-re){case 2:te===112&&K.charCodeAt(H-3)===58&&(E=te);case 8:N===111&&(E=N)}break;case 58:F+m+A===0&&(re=H);break;case 44:m+L+F+A===0&&(ae=1,ve+="\r");break;case 34:case 39:m===0&&(F=F===C?0:F===0?C:F);break;case 91:F+m+L===0&&A++;break;case 93:F+m+L===0&&A--;break;case 41:F+m+A===0&&L--;break;case 40:if(F+m+A===0){if(Y===0)switch(2*te+3*N){case 533:break;default:Y=1}L++}break;case 64:m+L+F+A+re+q===0&&(q=1);break;case 42:case 47:if(!(0<F+A+L))switch(m){case 0:switch(2*C+3*K.charCodeAt(H+1)){case 235:m=47;break;case 220:ue=H,m=42}break;case 42:C===47&&te===42&&ue+2!==H&&(K.charCodeAt(ue+2)===33&&(ie+=K.substring(ue,H+1)),ve="",m=0)}}m===0&&(Q+=ve)}N=te,te=C,H++}if(ue=ie.length,0<ue){if(ae=V,0<J&&(xe=l(2,ie,ae,B,$,R,ue,X,w,X),xe!==void 0&&(ie=xe).length===0))return be+ie+ce;if(ie=ae.join(",")+"{"+ie+"}",D*E!==0){switch(D!==2||s(ie,2)||(E=0),E){case 111:ie=ie.replace(I,":-moz-$1")+ie;break;case 112:ie=ie.replace(Z,"::-webkit-input-$1")+ie.replace(Z,"::-moz-$1")+ie.replace(Z,":-ms-input-$1")+ie}E=0}}return be+ie+ce}function t(B,V,K){var X=V.trim().split(g);V=X;var w=X.length,A=B.length;switch(A){case 0:case 1:var m=0;for(B=A===0?"":B[0]+" ";m<w;++m)V[m]=r(B,V[m],K).trim();break;default:var L=m=0;for(V=[];m<w;++m)for(var F=0;F<A;++F)V[L++]=r(B[F]+" ",X[m],K).trim()}return V}function r(B,V,K){var X=V.charCodeAt(0);switch(33>X&&(X=(V=V.trim()).charCodeAt(0)),X){case 38:return V.replace(W,"$1"+B.trim());case 58:return B.trim()+V.replace(W,"$1"+B.trim());default:if(0<1*K&&0<V.indexOf("\f"))return V.replace(W,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+V}function o(B,V,K,X){var w=B+";",A=2*V+3*K+4*X;if(A===944){B=w.indexOf(":",9)+1;var m=w.substring(B,w.length-1).trim();return m=w.substring(0,B).trim()+m+";",D===1||D===2&&s(m,1)?"-webkit-"+m+m:m}if(D===0||D===2&&!s(w,1))return w;switch(A){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(G,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return m=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+m+"-webkit-"+w+"-ms-flex-pack"+m+w;case 1005:return b.test(w)?w.replace(x,":-webkit-")+w.replace(x,":-moz-")+w:w;case 1e3:switch(m=w.substring(13).trim(),V=m.indexOf("-")+1,m.charCodeAt(0)+m.charCodeAt(V)){case 226:m=w.replace(f,"tb");break;case 232:m=w.replace(f,"tb-rl");break;case 220:m=w.replace(f,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+m+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(V=(w=B).length-10,m=(w.charCodeAt(V)===33?w.substring(0,V):w).substring(B.indexOf(":",7)+1).trim(),A=m.charCodeAt(0)+(m.charCodeAt(7)|0)){case 203:if(111>m.charCodeAt(8))break;case 115:w=w.replace(m,"-webkit-"+m)+";"+w;break;case 207:case 102:w=w.replace(m,"-webkit-"+(102<A?"inline-":"")+"box")+";"+w.replace(m,"-webkit-"+m)+";"+w.replace(m,"-ms-"+m+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return m=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+m+"-ms-flex-"+m+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(T,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(T,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(z.test(B)===!0)return(m=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?o(B.replace("stretch","fill-available"),V,K,X).replace(":fill-available",":stretch"):w.replace(m,"-webkit-"+m)+w.replace(m,"-moz-"+m.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,K+X===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(M,"$1-webkit-$2")+w}return w}function s(B,V){var K=B.indexOf(V===1?":":"{"),X=B.substring(0,V!==3?K:10);return K=B.substring(K+1,B.length-1),ee(V!==2?X:X.replace(P,"$1"),K,V)}function i(B,V){var K=o(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return K!==V+";"?K.replace(S," or ($1)").substring(4):"("+V+")"}function l(B,V,K,X,w,A,m,L,F,Y){for(var C=0,te=V,N;C<J;++C)switch(N=O[C].call(d,B,te,K,X,w,A,m,L,F,Y)){case void 0:case!1:case!0:case null:break;default:te=N}if(te!==V)return te}function u(B){switch(B){case void 0:case null:J=O.length=0;break;default:if(typeof B=="function")O[J++]=B;else if(typeof B=="object")for(var V=0,K=B.length;V<K;++V)u(B[V]);else se=!!B|0}return u}function c(B){return B=B.prefix,B!==void 0&&(ee=null,B?typeof B!="function"?D=1:(D=2,ee=B):D=0),c}function d(B,V){var K=B;if(33>K.charCodeAt(0)&&(K=K.trim()),oe=K,K=[oe],0<J){var X=l(-1,V,K,K,$,R,0,0,0,0);X!==void 0&&typeof X=="string"&&(V=X)}var w=n(j,K,V,0,0);return 0<J&&(X=l(-2,w,K,K,$,R,w.length,0,0,0),X!==void 0&&(w=X)),oe="",E=0,R=$=1,w}var h=/^\0+/g,y=/[\0\r\f]/g,x=/: */g,b=/zoo|gra/,M=/([,: ])(transform)/g,g=/,\r+?/g,W=/([\t\r\n ])*\f?&/g,U=/@(k\w+)\s*(\S*)\s*/,Z=/::(place)/g,I=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,v=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,T=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,R=1,$=1,E=0,D=1,j=[],O=[],J=0,ee=null,se=0,oe="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var oo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function so(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var io=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_n=so(function(e){return io.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Yt={},ao={get exports(){return Yt},set exports(e){Yt=e}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tn;function co(){if(Tn)return pe;Tn=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,W=e?Symbol.for("react.responder"):60118,U=e?Symbol.for("react.scope"):60119;function Z(f){if(typeof f=="object"&&f!==null){var v=f.$$typeof;switch(v){case n:switch(f=f.type,f){case u:case c:case r:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case l:case d:case b:case x:case i:return f;default:return v}}case t:return v}}}function I(f){return Z(f)===c}return pe.AsyncMode=u,pe.ConcurrentMode=c,pe.ContextConsumer=l,pe.ContextProvider=i,pe.Element=n,pe.ForwardRef=d,pe.Fragment=r,pe.Lazy=b,pe.Memo=x,pe.Portal=t,pe.Profiler=s,pe.StrictMode=o,pe.Suspense=h,pe.isAsyncMode=function(f){return I(f)||Z(f)===u},pe.isConcurrentMode=I,pe.isContextConsumer=function(f){return Z(f)===l},pe.isContextProvider=function(f){return Z(f)===i},pe.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===n},pe.isForwardRef=function(f){return Z(f)===d},pe.isFragment=function(f){return Z(f)===r},pe.isLazy=function(f){return Z(f)===b},pe.isMemo=function(f){return Z(f)===x},pe.isPortal=function(f){return Z(f)===t},pe.isProfiler=function(f){return Z(f)===s},pe.isStrictMode=function(f){return Z(f)===o},pe.isSuspense=function(f){return Z(f)===h},pe.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===c||f===s||f===o||f===h||f===y||typeof f=="object"&&f!==null&&(f.$$typeof===b||f.$$typeof===x||f.$$typeof===i||f.$$typeof===l||f.$$typeof===d||f.$$typeof===g||f.$$typeof===W||f.$$typeof===U||f.$$typeof===M)},pe.typeOf=Z,pe}var ge={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn;function lo(){return Pn||(Pn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,W=e?Symbol.for("react.responder"):60118,U=e?Symbol.for("react.scope"):60119;function Z(C){return typeof C=="string"||typeof C=="function"||C===r||C===c||C===s||C===o||C===h||C===y||typeof C=="object"&&C!==null&&(C.$$typeof===b||C.$$typeof===x||C.$$typeof===i||C.$$typeof===l||C.$$typeof===d||C.$$typeof===g||C.$$typeof===W||C.$$typeof===U||C.$$typeof===M)}function I(C){if(typeof C=="object"&&C!==null){var te=C.$$typeof;switch(te){case n:var N=C.type;switch(N){case u:case c:case r:case s:case o:case h:return N;default:var q=N&&N.$$typeof;switch(q){case l:case d:case b:case x:case i:return q;default:return te}}case t:return te}}}var f=u,v=c,S=l,T=i,P=n,z=d,G=r,R=b,$=x,E=t,D=s,j=o,O=h,J=!1;function ee(C){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(C)||I(C)===u}function se(C){return I(C)===c}function oe(C){return I(C)===l}function B(C){return I(C)===i}function V(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function K(C){return I(C)===d}function X(C){return I(C)===r}function w(C){return I(C)===b}function A(C){return I(C)===x}function m(C){return I(C)===t}function L(C){return I(C)===s}function F(C){return I(C)===o}function Y(C){return I(C)===h}ge.AsyncMode=f,ge.ConcurrentMode=v,ge.ContextConsumer=S,ge.ContextProvider=T,ge.Element=P,ge.ForwardRef=z,ge.Fragment=G,ge.Lazy=R,ge.Memo=$,ge.Portal=E,ge.Profiler=D,ge.StrictMode=j,ge.Suspense=O,ge.isAsyncMode=ee,ge.isConcurrentMode=se,ge.isContextConsumer=oe,ge.isContextProvider=B,ge.isElement=V,ge.isForwardRef=K,ge.isFragment=X,ge.isLazy=w,ge.isMemo=A,ge.isPortal=m,ge.isProfiler=L,ge.isStrictMode=F,ge.isSuspense=Y,ge.isValidElementType=Z,ge.typeOf=I}()),ge}(function(e){process.env.NODE_ENV==="production"?e.exports=co():e.exports=lo()})(ao);var Lt=Yt,uo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ho={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},An={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nt={};Nt[Lt.ForwardRef]=ho,Nt[Lt.Memo]=An;function In(e){return Lt.isMemo(e)?An:Nt[e.$$typeof]||uo}var po=Object.defineProperty,go=Object.getOwnPropertyNames,On=Object.getOwnPropertySymbols,mo=Object.getOwnPropertyDescriptor,yo=Object.getPrototypeOf,Yn=Object.prototype;function Ln(e,n,t){if(typeof n!="string"){if(Yn){var r=yo(n);r&&r!==Yn&&Ln(e,r,t)}var o=go(n);On&&(o=o.concat(On(n)));for(var s=In(e),i=In(n),l=0;l<o.length;++l){var u=o[l];if(!fo[u]&&!(t&&t[u])&&!(i&&i[u])&&!(s&&s[u])){var c=mo(n,u);try{po(e,u,c)}catch{}}}}return e}var vo=Ln;function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Nn=function(e,n){for(var t=[e[0]],r=0,o=n.length;r<o;r+=1)t.push(n[r],e[r+1]);return t},Ft=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ft.typeOf(e)},vt=Object.freeze([]),He=Object.freeze({});function Ke(e){return typeof e=="function"}function Ht(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Wt(e){return e&&typeof e.styledComponentId=="string"}var qe=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Bt=typeof window<"u"&&"HTMLElement"in window,bo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),xo={},wo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function So(){for(var e=arguments.length<=0?void 0:arguments[0],n=[],t=1,r=arguments.length;t<r;t+=1)n.push(t<0||arguments.length<=t?void 0:arguments[t]);return n.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ae(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(So.apply(void 0,[wo[e]].concat(t)).trim())}var Co=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},n.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Ae(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var l=s;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[t]++,u++)},n.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},n.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,l=s;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),bt=new Map,xt=new Map,ht=1,wt=function(e){if(bt.has(e))return bt.get(e);for(;xt.has(ht);)ht++;var n=ht++;return process.env.NODE_ENV!=="production"&&((0|n)<0||n>1<<30)&&Ae(16,""+n),bt.set(e,n),xt.set(n,e),n},ko=function(e){return xt.get(e)},Mo=function(e,n){n>=ht&&(ht=n+1),bt.set(e,n),xt.set(n,e)},$o="style["+qe+'][data-styled-version="5.3.8"]',Do=new RegExp("^"+qe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Eo=function(e,n,t){for(var r,o=t.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(n,r)},_o=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var l=i.match(Do);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Mo(c,u),Eo(e,c,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},To=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Fn=function(e){var n=document.head,t=e||n,r=document.createElement("style"),o=function(l){for(var u=l.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(qe))return d}}(t),s=o!==void 0?o.nextSibling:null;r.setAttribute(qe,"active"),r.setAttribute("data-styled-version","5.3.8");var i=To();return i&&r.setAttribute("nonce",i),t.insertBefore(r,s),r},Po=function(){function e(t){var r=this.element=Fn(t);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,l=s.length;i<l;i++){var u=s[i];if(u.ownerNode===o)return u}Ae(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Ao=function(){function e(t){var r=this.element=Fn(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Io=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Hn=Bt,Oo={isServer:!Bt,useCSSOMInjection:!bo},St=function(){function e(t,r,o){t===void 0&&(t=He),r===void 0&&(r={}),this.options=Te({},Oo,{},t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Bt&&Hn&&(Hn=!1,function(s){for(var i=document.querySelectorAll($o),l=0,u=i.length;l<u;l++){var c=i[l];c&&c.getAttribute(qe)!=="active"&&(_o(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return wt(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Te({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,s=r.useCSSOMInjection,i=r.target,t=o?new Io(i):s?new Po(i):new Ao(i),new Co(t)));var t,r,o,s,i},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(wt(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},n.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(wt(t),o)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(wt(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),o=r.length,s="",i=0;i<o;i++){var l=ko(i);if(l!==void 0){var u=t.names.get(l),c=r.getGroup(i);if(u&&c&&u.size){var d=qe+".g"+i+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(y){y.length>0&&(h+=y+",")}),s+=""+c+d+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Yo=/(a)(d)/gi,Wn=function(e){return String.fromCharCode(e+(e>25?39:97))};function zt(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=Wn(n%52)+t;return(Wn(n%52)+t).replace(Yo,"$1-$2")}var je=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},Bn=function(e){return je(5381,e)};function zn(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(Ke(t)&&!Wt(t))return!1}return!0}var Lo=Bn("5.3.8"),No=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&zn(n),this.componentId=t,this.baseHash=je(Lo,t),this.baseStyle=r,St.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=Ze(this.rules,n,t,r).join(""),l=zt(je(this.baseHash,i)>>>0);if(!t.hasNameForId(o,l)){var u=r(i,"."+l,void 0,o);t.insertRules(o,l,u)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=je(this.baseHash,r.hash),h="",y=0;y<c;y++){var x=this.rules[y];if(typeof x=="string")h+=x,process.env.NODE_ENV!=="production"&&(d=je(d,x+y));else if(x){var b=Ze(x,n,t,r),M=Array.isArray(b)?b.join(""):b;d=je(d,M+y),h+=M}}if(h){var g=zt(d>>>0);if(!t.hasNameForId(o,g)){var W=r(h,"."+g,void 0,o);t.insertRules(o,g,W)}s.push(g)}}return s.join(" ")},e}(),Fo=/^\s*\/\/.*$/gm,Ho=[":","[",".","#"];function Wo(e){var n,t,r,o,s=e===void 0?He:e,i=s.options,l=i===void 0?He:i,u=s.plugins,c=u===void 0?vt:u,d=new ro(l),h=[],y=function(M){function g(W){if(W)try{M(W+"}")}catch{}}return function(W,U,Z,I,f,v,S,T,P,z){switch(W){case 1:if(P===0&&U.charCodeAt(0)===64)return M(U+";"),"";break;case 2:if(T===0)return U+"/*|*/";break;case 3:switch(T){case 102:case 112:return M(Z[0]+U),"";default:return U+(z===0?"/*|*/":"")}case-2:U.split("/*|*/}").forEach(g)}}}(function(M){h.push(M)}),x=function(M,g,W){return g===0&&Ho.indexOf(W[t.length])!==-1||W.match(o)?M:"."+n};function b(M,g,W,U){U===void 0&&(U="&");var Z=M.replace(Fo,""),I=g&&W?W+" "+g+" { "+Z+" }":Z;return n=U,t=g,r=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(W||!g?"":g,I)}return d.use([].concat(c,[function(M,g,W){M===2&&W.length&&W[0].lastIndexOf(t)>0&&(W[0]=W[0].replace(r,x))},y,function(M){if(M===-2){var g=h;return h=[],g}}])),b.hash=c.length?c.reduce(function(M,g){return g.name||Ae(15),je(M,g.name)},5381).toString():"",b}var jn=p.createContext();jn.Consumer;var Zn=p.createContext(),Bo=(Zn.Consumer,new St),jt=Wo();function Vn(){return p.useContext(jn)||Bo}function Gn(){return p.useContext(Zn)||jt}var Xn=function(){function e(n,t){var r=this;this.inject=function(o,s){s===void 0&&(s=jt);var i=r.name+s.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,s(r.rules,i,"@keyframes"))},this.toString=function(){return Ae(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=jt),this.name+n.hash},e}(),zo=/([A-Z])/,jo=/([A-Z])/g,Zo=/^ms-/,Vo=function(e){return"-"+e.toLowerCase()};function Un(e){return zo.test(e)?e.replace(jo,Vo).replace(Zo,"-ms-"):e}var Kn=function(e){return e==null||e===!1||e===""};function Ze(e,n,t,r){if(Array.isArray(e)){for(var o,s=[],i=0,l=e.length;i<l;i+=1)(o=Ze(e[i],n,t,r))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(Kn(e))return"";if(Wt(e))return"."+e.styledComponentId;if(Ke(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!n)return e;var u=e(n);return process.env.NODE_ENV!=="production"&&ft.isElement(u)&&console.warn(Ht(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ze(u,n,t,r)}var c;return e instanceof Xn?t?(e.inject(t,r),e.getName(r)):e:Ft(e)?function d(h,y){var x,b,M=[];for(var g in h)h.hasOwnProperty(g)&&!Kn(h[g])&&(Array.isArray(h[g])&&h[g].isCss||Ke(h[g])?M.push(Un(g)+":",h[g],";"):Ft(h[g])?M.push.apply(M,d(h[g],g)):M.push(Un(g)+": "+(x=g,(b=h[g])==null||typeof b=="boolean"||b===""?"":typeof b!="number"||b===0||x in oo?String(b).trim():b+"px")+";"));return y?[y+" {"].concat(M,["}"]):M}(e):e.toString()}var qn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ct(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return Ke(e)||Ft(e)?qn(Ze(Nn(vt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:qn(Ze(Nn(e,t)))}var Jn=/invalid hook call/i,kt=new Set,Qn=function(e,n){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(n?' with the id of "'+n+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,r=console.error;try{var o=!0;console.error=function(s){if(Jn.test(s))o=!1,kt.delete(t);else{for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];r.apply(void 0,[s].concat(l))}},p.useRef(),o&&!kt.has(t)&&(console.warn(t),kt.add(t))}catch(s){Jn.test(s.message)&&kt.delete(t)}finally{console.error=r}}},Rn=function(e,n,t){return t===void 0&&(t=He),e.theme!==t.theme&&e.theme||n||t.theme},Go=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xo=/(^-|-$)/g;function Zt(e){return e.replace(Go,"-").replace(Xo,"")}var Vt=function(e){return zt(Bn(e)>>>0)};function Mt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Gt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Uo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ko(e,n,t){var r=e[t];Gt(n)&&Gt(r)?er(r,n):e[t]=n}function er(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(Gt(i))for(var l in i)Uo(l)&&Ko(e,i[l],l)}return e}var Je=p.createContext();Je.Consumer;function qo(e){var n=p.useContext(Je),t=p.useMemo(function(){return function(r,o){if(!r)return Ae(14);if(Ke(r)){var s=r(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ae(7)}return Array.isArray(r)||typeof r!="object"?Ae(8):o?Te({},o,{},r):r}(e.theme,n)},[e.theme,n]);return e.children?p.createElement(Je.Provider,{value:t},e.children):null}var Xt={};function tr(e,n,t){var r=Wt(e),o=!Mt(e),s=n.attrs,i=s===void 0?vt:s,l=n.componentId,u=l===void 0?function(U,Z){var I=typeof U!="string"?"sc":Zt(U);Xt[I]=(Xt[I]||0)+1;var f=I+"-"+Vt("5.3.8"+I+Xt[I]);return Z?Z+"-"+f:f}(n.displayName,n.parentComponentId):l,c=n.displayName,d=c===void 0?function(U){return Mt(U)?"styled."+U:"Styled("+Ht(U)+")"}(e):c,h=n.displayName&&n.componentId?Zt(n.displayName)+"-"+n.componentId:n.componentId||u,y=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,x=n.shouldForwardProp;r&&e.shouldForwardProp&&(x=n.shouldForwardProp?function(U,Z,I){return e.shouldForwardProp(U,Z,I)&&n.shouldForwardProp(U,Z,I)}:e.shouldForwardProp);var b,M=new No(t,h,r?e.componentStyle:void 0),g=M.isStatic&&i.length===0,W=function(U,Z){return function(I,f,v,S){var T=I.attrs,P=I.componentStyle,z=I.defaultProps,G=I.foldedComponentIds,R=I.shouldForwardProp,$=I.styledComponentId,E=I.target;process.env.NODE_ENV!=="production"&&p.useDebugValue($);var D=function(X,w,A){X===void 0&&(X=He);var m=Te({},w,{theme:X}),L={};return A.forEach(function(F){var Y,C,te,N=F;for(Y in Ke(N)&&(N=N(m)),N)m[Y]=L[Y]=Y==="className"?(C=L[Y],te=N[Y],C&&te?C+" "+te:C||te):N[Y]}),[m,L]}(Rn(f,p.useContext(Je),z)||He,f,T),j=D[0],O=D[1],J=function(X,w,A,m){var L=Vn(),F=Gn(),Y=w?X.generateAndInjectStyles(He,L,F):X.generateAndInjectStyles(A,L,F);return process.env.NODE_ENV!=="production"&&p.useDebugValue(Y),process.env.NODE_ENV!=="production"&&!w&&m&&m(Y),Y}(P,S,j,process.env.NODE_ENV!=="production"?I.warnTooManyClasses:void 0),ee=v,se=O.$as||f.$as||O.as||f.as||E,oe=Mt(se),B=O!==f?Te({},f,{},O):f,V={};for(var K in B)K[0]!=="$"&&K!=="as"&&(K==="forwardedAs"?V.as=B[K]:(R?R(K,_n,se):!oe||_n(K))&&(V[K]=B[K]));return f.style&&O.style!==f.style&&(V.style=Te({},f.style,{},O.style)),V.className=Array.prototype.concat(G,$,J!==$?J:null,f.className,O.className).filter(Boolean).join(" "),V.ref=ee,p.createElement(se,V)}(b,U,Z,g)};return W.displayName=d,(b=p.forwardRef(W)).attrs=y,b.componentStyle=M,b.displayName=d,b.shouldForwardProp=x,b.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):vt,b.styledComponentId=h,b.target=r?e.target:e,b.withComponent=function(U){var Z=n.componentId,I=function(v,S){if(v==null)return{};var T,P,z={},G=Object.keys(v);for(P=0;P<G.length;P++)T=G[P],S.indexOf(T)>=0||(z[T]=v[T]);return z}(n,["componentId"]),f=Z&&Z+"-"+(Mt(U)?U:Zt(Ht(U)));return tr(U,Te({},I,{attrs:y,componentId:f}),t)},Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=r?er({},e.defaultProps,U):U}}),process.env.NODE_ENV!=="production"&&(Qn(d,h),b.warnTooManyClasses=function(U,Z){var I={},f=!1;return function(v){if(!f&&(I[v]=!0,Object.keys(I).length>=200)){var S=Z?' with the id of "'+Z+'"':"";console.warn("Over 200 classes were generated for component "+U+S+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,I={}}}}(d,h)),b.toString=function(){return"."+b.styledComponentId},o&&vo(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),b}var Ut=function(e){return function n(t,r,o){if(o===void 0&&(o=He),!ft.isValidElementType(r))return Ae(1,String(r));var s=function(){return t(r,o,Ct.apply(void 0,arguments))};return s.withConfig=function(i){return n(t,r,Te({},o,{},i))},s.attrs=function(i){return n(t,r,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(tr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ut[e]=Ut(e)});var Jo=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=zn(t),St.registerId(this.componentId+1)}var n=e.prototype;return n.createStyles=function(t,r,o,s){var i=s(Ze(this.rules,r,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,i)},n.removeStyles=function(t,r){r.clearRules(this.componentId+t)},n.renderStyles=function(t,r,o,s){t>2&&St.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,s)},e}();function Qo(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Ct.apply(void 0,[e].concat(t)),s="sc-global-"+Vt(JSON.stringify(o)),i=new Jo(o,s);function l(c){var d=Vn(),h=Gn(),y=p.useContext(Je),x=p.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(b){return typeof b=="string"&&b.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(x,c,d,y,h),p.useLayoutEffect(function(){if(!d.server)return u(x,c,d,y,h),function(){return i.removeStyles(x,d)}},[x,c,d,y,h]),null}function u(c,d,h,y,x){if(i.isStatic)i.renderStyles(c,xo,h,x);else{var b=Te({},d,{theme:Rn(d,y,l.defaultProps)});i.renderStyles(c,b,h,x)}}return process.env.NODE_ENV!=="production"&&Qn(s),p.memo(l)}function $t(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Ct.apply(void 0,[e].concat(t)).join(""),s=Vt(o);return new Xn(s,o)}var Dt=function(){return p.useContext(Je)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const k=Ut,pt="reactSchedulerOutsideWrapper",Ro=Qo`

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
`,es={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},ts={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},Qe=`
margin: 0;
padding: 0;
`,Re=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;k.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const ye=50,Ie=24,et=16,Ve=40,tt=Ve+et+Ie,nt=84,de=56,Ee=196,_e=12,Ce=50,rt=24,gt=16,Kt=40,ns=rt+gt+Kt,nr=24,rr=52,Pe={topRow:"600 14px Inter",middleRow:"400 10px Inter",bottomRow:{name:"600 14px Inter",number:"600 10px Inter",hoursInDay:"400 9px Inter"}},ot=3,rs=1.6,os=4.5,qt=12,Et=24,ss="reactSchedulerCanvasHeaderWrapper",or="reactSchedulerCanvasWrapper",Oe=pt,is=4,Jt=48,We=5,as=40,sr=8,Qt=Ie/2+2,ir=et/2+Ie+1,ar=2,we=60,De=21;var Ge={},cs={get exports(){return Ge},set exports(e){Ge=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){var t=1e3,r=6e4,o=36e5,s="millisecond",i="second",l="minute",u="hour",c="day",d="week",h="month",y="quarter",x="year",b="date",M="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function($){var E=["th","st","nd","rd"],D=$%100;return"["+$+(E[(D-20)%10]||E[D]||E[0])+"]"}},Z=function($,E,D){var j=String($);return!j||j.length>=E?$:""+Array(E+1-j.length).join(D)+$},I={s:Z,z:function($){var E=-$.utcOffset(),D=Math.abs(E),j=Math.floor(D/60),O=D%60;return(E<=0?"+":"-")+Z(j,2,"0")+":"+Z(O,2,"0")},m:function $(E,D){if(E.date()<D.date())return-$(D,E);var j=12*(D.year()-E.year())+(D.month()-E.month()),O=E.clone().add(j,h),J=D-O<0,ee=E.clone().add(j+(J?-1:1),h);return+(-(j+(D-O)/(J?O-ee:ee-O))||0)},a:function($){return $<0?Math.ceil($)||0:Math.floor($)},p:function($){return{M:h,y:x,w:d,d:c,D:b,h:u,m:l,s:i,ms:s,Q:y}[$]||String($||"").toLowerCase().replace(/s$/,"")},u:function($){return $===void 0}},f="en",v={};v[f]=U;var S=function($){return $ instanceof G},T=function $(E,D,j){var O;if(!E)return f;if(typeof E=="string"){var J=E.toLowerCase();v[J]&&(O=J),D&&(v[J]=D,O=J);var ee=E.split("-");if(!O&&ee.length>1)return $(ee[0])}else{var se=E.name;v[se]=E,O=se}return!j&&O&&(f=O),O||!j&&f},P=function($,E){if(S($))return $.clone();var D=typeof E=="object"?E:{};return D.date=$,D.args=arguments,new G(D)},z=I;z.l=T,z.i=S,z.w=function($,E){return P($,{locale:E.$L,utc:E.$u,x:E.$x,$offset:E.$offset})};var G=function(){function $(D){this.$L=T(D.locale,null,!0),this.parse(D)}var E=$.prototype;return E.parse=function(D){this.$d=function(j){var O=j.date,J=j.utc;if(O===null)return new Date(NaN);if(z.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var ee=O.match(g);if(ee){var se=ee[2]-1||0,oe=(ee[7]||"0").substring(0,3);return J?new Date(Date.UTC(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)):new Date(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)}}return new Date(O)}(D),this.$x=D.x||{},this.init()},E.init=function(){var D=this.$d;this.$y=D.getFullYear(),this.$M=D.getMonth(),this.$D=D.getDate(),this.$W=D.getDay(),this.$H=D.getHours(),this.$m=D.getMinutes(),this.$s=D.getSeconds(),this.$ms=D.getMilliseconds()},E.$utils=function(){return z},E.isValid=function(){return this.$d.toString()!==M},E.isSame=function(D,j){var O=P(D);return this.startOf(j)<=O&&O<=this.endOf(j)},E.isAfter=function(D,j){return P(D)<this.startOf(j)},E.isBefore=function(D,j){return this.endOf(j)<P(D)},E.$g=function(D,j,O){return z.u(D)?this[j]:this.set(O,D)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(D,j){var O=this,J=!!z.u(j)||j,ee=z.p(D),se=function(m,L){var F=z.w(O.$u?Date.UTC(O.$y,L,m):new Date(O.$y,L,m),O);return J?F:F.endOf(c)},oe=function(m,L){return z.w(O.toDate()[m].apply(O.toDate("s"),(J?[0,0,0,0]:[23,59,59,999]).slice(L)),O)},B=this.$W,V=this.$M,K=this.$D,X="set"+(this.$u?"UTC":"");switch(ee){case x:return J?se(1,0):se(31,11);case h:return J?se(1,V):se(0,V+1);case d:var w=this.$locale().weekStart||0,A=(B<w?B+7:B)-w;return se(J?K-A:K+(6-A),V);case c:case b:return oe(X+"Hours",0);case u:return oe(X+"Minutes",1);case l:return oe(X+"Seconds",2);case i:return oe(X+"Milliseconds",3);default:return this.clone()}},E.endOf=function(D){return this.startOf(D,!1)},E.$set=function(D,j){var O,J=z.p(D),ee="set"+(this.$u?"UTC":""),se=(O={},O[c]=ee+"Date",O[b]=ee+"Date",O[h]=ee+"Month",O[x]=ee+"FullYear",O[u]=ee+"Hours",O[l]=ee+"Minutes",O[i]=ee+"Seconds",O[s]=ee+"Milliseconds",O)[J],oe=J===c?this.$D+(j-this.$W):j;if(J===h||J===x){var B=this.clone().set(b,1);B.$d[se](oe),B.init(),this.$d=B.set(b,Math.min(this.$D,B.daysInMonth())).$d}else se&&this.$d[se](oe);return this.init(),this},E.set=function(D,j){return this.clone().$set(D,j)},E.get=function(D){return this[z.p(D)]()},E.add=function(D,j){var O,J=this;D=Number(D);var ee=z.p(j),se=function(V){var K=P(J);return z.w(K.date(K.date()+Math.round(V*D)),J)};if(ee===h)return this.set(h,this.$M+D);if(ee===x)return this.set(x,this.$y+D);if(ee===c)return se(1);if(ee===d)return se(7);var oe=(O={},O[l]=r,O[u]=o,O[i]=t,O)[ee]||1,B=this.$d.getTime()+D*oe;return z.w(B,this)},E.subtract=function(D,j){return this.add(-1*D,j)},E.format=function(D){var j=this,O=this.$locale();if(!this.isValid())return O.invalidDate||M;var J=D||"YYYY-MM-DDTHH:mm:ssZ",ee=z.z(this),se=this.$H,oe=this.$m,B=this.$M,V=O.weekdays,K=O.months,X=function(L,F,Y,C){return L&&(L[F]||L(j,J))||Y[F].slice(0,C)},w=function(L){return z.s(se%12||12,L,"0")},A=O.meridiem||function(L,F,Y){var C=L<12?"AM":"PM";return Y?C.toLowerCase():C},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:B+1,MM:z.s(B+1,2,"0"),MMM:X(O.monthsShort,B,K,3),MMMM:X(K,B),D:this.$D,DD:z.s(this.$D,2,"0"),d:String(this.$W),dd:X(O.weekdaysMin,this.$W,V,2),ddd:X(O.weekdaysShort,this.$W,V,3),dddd:V[this.$W],H:String(se),HH:z.s(se,2,"0"),h:w(1),hh:w(2),a:A(se,oe,!0),A:A(se,oe,!1),m:String(oe),mm:z.s(oe,2,"0"),s:String(this.$s),ss:z.s(this.$s,2,"0"),SSS:z.s(this.$ms,3,"0"),Z:ee};return J.replace(W,function(L,F){return F||m[L]||ee.replace(":","")})},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(D,j,O){var J,ee=z.p(j),se=P(D),oe=(se.utcOffset()-this.utcOffset())*r,B=this-se,V=z.m(this,se);return V=(J={},J[x]=V/12,J[h]=V,J[y]=V/3,J[d]=(B-oe)/6048e5,J[c]=(B-oe)/864e5,J[u]=B/o,J[l]=B/r,J[i]=B/t,J)[ee]||B,O?V:z.a(V)},E.daysInMonth=function(){return this.endOf(h).$D},E.$locale=function(){return v[this.$L]},E.locale=function(D,j){if(!D)return this.$L;var O=this.clone(),J=T(D,j,!0);return J&&(O.$L=J),O},E.clone=function(){return z.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},$}(),R=G.prototype;return P.prototype=R,[["$ms",s],["$s",i],["$m",l],["$H",u],["$W",c],["$M",h],["$y",x],["$D",b]].forEach(function($){R[$[1]]=function(E){return this.$g(E,$[0],$[1])}}),P.extend=function($,E){return $.$i||($(E,G,P),$.$i=!0),P},P.locale=T,P.isDayjs=S,P.unix=function($){return P(1e3*$)},P.en=v[f],P.Ls=v,P.p={},P})})(cs);const _=Ge,cr=e=>e%4===0&&e%100>0||e%400===0?366:365,Rt=e=>{const n=e.day();return n!==0&&n!==6},lr=(e,n)=>_(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(n,"months").daysInMonth(),dr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:Rt(e),isCurrentDay:e.isSame(_(),"day"),year:parseInt(e.format("YYYY"))});let _t=null;const ls=e=>{if(_t)return _t;const n=document.createElement("canvas");n.width=12,n.height=12;const t=n.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),_t=e.createPattern(n,"repeat"),_t):null},en=(e,n,t,r,o,s,i,l=!1)=>{if(e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(n,t,r,de),l&&!s){const u=ls(e);u&&(e.fillStyle=u,e.fillRect(n,t,r,de))}e.strokeRect(n+.5,t+.5,r,de)},tn=(e,n)=>{let t=0;for(const r of n)r<=e&&t++;return t*De},ds=(e,n,t,r,o,s=[])=>{for(let i=0;i<n;i++){const l=tn(i,s);for(let u=0;u<=t;u++){const c=_(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(u,"days"),d=c.isSame(_(),"day"),h=c.isBefore(_(),"day");en(e,u*ye,i*de+l,ye,Rt(c),d,o,h)}}},us=(e,n,t,r)=>{e.setLineDash([5,5]),e.strokeStyle=r.colors.border,e.moveTo(n+.5,.5),e.lineTo(n+.5,t+.5),e.stroke()},fs=(e,n,t,r,o,s=[])=>{let i=0,l=-(r.dayOfMonth-1)*_e;const u=n*de+s.length*De;for(let c=0;c<=t;c++){const h=_(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"weeks").isSame(_(),"week");for(let y=0;y<n;y++){const x=tn(y,s);en(e,i,y*de+x,nt,!0,h,o)}i+=nt}for(let c=0;c<t;c++){const d=lr(r,c)*_e;us(e,l,u,o),l+=d}},hs=(e,n,t,r,o,s=[])=>{const i=_(`${r.year}-${r.month+1}-${r.dayOfMonth+1}`);for(let l=0;l<n;l++){const u=tn(l,s);for(let c=0;c<=t;c++){let d;c===Math.floor(t/2)?d=_():c>Math.floor(t/2)?d=_().add(c-Math.floor(t/2),"hours"):d=_().subtract(Math.floor(t/2)-l,"hours");const h=i.isSame(_(),"day")&&d.isSame(_(),"hour");en(e,c*Ce+Ce/2-.5,l*de+u,Ce,Rt(d),h,o)}}},ps=(e,n,t,r)=>{const o=t*de+n*De,s=e.canvas.width,i=o+De/2;e.fillStyle=r.mode==="dark"?r.colors.primary+"80":r.colors.primary,e.fillRect(0,o,s,De),e.strokeStyle=r.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},gs=(e,n,t,r,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(or)){switch(n){case 0:fs(e,t,r,o,s,i);break;case 1:ds(e,t,r,o,s,i);break;case 2:hs(e,t,r,o,s,i);break}for(let u=0;u<i.length;u++)ps(e,u,i[u],s)}};var nn={},ms={get exports(){return nn},set exports(e){nn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){var t="week",r="year";return function(o,s,i){var l=s.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=i(this).startOf(r).add(1,r).date(c),h=i(this).endOf(t);if(d.isBefore(h))return 1}var y=i(this).startOf(r).date(c).startOf(t).subtract(1,"millisecond"),x=this.diff(y,t,!0);return x<0?i(this).startOf("week").week():Math.ceil(x)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(ms);const ys=nn;var rn={},vs={get exports(){return rn},set exports(e){rn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return function(t,r,o){r.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(vs);const bs=rn;var on={},xs={get exports(){return on},set exports(e){on=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){var t="day";return function(r,o,s){var i=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return i(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var d,h,y,x,b=i(this),M=(d=this.isoWeekYear(),h=this.$u,y=(h?s.utc:s)().year(d).startOf("year"),x=4-y.isoWeekday(),y.isoWeekday()>4&&(x+=7),y.add(x,t));return b.diff(M,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var u=l.startOf;l.startOf=function(c,d){var h=this.$utils(),y=!!h.u(d)||d;return h.p(c)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(c,d)}}})})(xs);const ws=on;var sn={},Ss={get exports(){return sn},set exports(e){sn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return function(t,r,o){r.prototype.isBetween=function(s,i,l,u){var c=o(s),d=o(i),h=(u=u||"()")[0]==="(",y=u[1]===")";return(h?this.isAfter(c,l):!this.isBefore(c,l))&&(y?this.isBefore(d,l):!this.isAfter(d,l))||(h?this.isBefore(c,l):!this.isAfter(c,l))&&(y?this.isAfter(d,l):!this.isBefore(d,l))}}})})(Ss);const Cs=sn;var an={},ks={get exports(){return an},set exports(e){an=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){var t,r,o=1e3,s=6e4,i=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,d=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:c,months:d,days:l,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},x=function(f){return f instanceof I},b=function(f,v,S){return new I(f,S,v.$l)},M=function(f){return r.p(f)+"s"},g=function(f){return f<0},W=function(f){return g(f)?Math.ceil(f):Math.floor(f)},U=function(f){return Math.abs(f)},Z=function(f,v){return f?g(f)?{negative:!0,format:""+U(f)+v}:{negative:!1,format:""+f+v}:{negative:!1,format:""}},I=function(){function f(S,T,P){var z=this;if(this.$d={},this.$l=P,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),T)return b(S*y[M(T)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function($){z.$d[M($)]=S[$]}),this.calMilliseconds(),this;if(typeof S=="string"){var G=S.match(h);if(G){var R=G.slice(2).map(function($){return $!=null?Number($):0});return this.$d.years=R[0],this.$d.months=R[1],this.$d.weeks=R[2],this.$d.days=R[3],this.$d.hours=R[4],this.$d.minutes=R[5],this.$d.seconds=R[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(T,P){return T+(S.$d[P]||0)*y[P]},0)},v.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=W(S/c),S%=c,this.$d.months=W(S/d),S%=d,this.$d.days=W(S/l),S%=l,this.$d.hours=W(S/i),S%=i,this.$d.minutes=W(S/s),S%=s,this.$d.seconds=W(S/o),S%=o,this.$d.milliseconds=S},v.toISOString=function(){var S=Z(this.$d.years,"Y"),T=Z(this.$d.months,"M"),P=+this.$d.days||0;this.$d.weeks&&(P+=7*this.$d.weeks);var z=Z(P,"D"),G=Z(this.$d.hours,"H"),R=Z(this.$d.minutes,"M"),$=this.$d.seconds||0;this.$d.milliseconds&&($+=this.$d.milliseconds/1e3);var E=Z($,"S"),D=S.negative||T.negative||z.negative||G.negative||R.negative||E.negative,j=G.format||R.format||E.format?"T":"",O=(D?"-":"")+"P"+S.format+T.format+z.format+j+G.format+R.format+E.format;return O==="P"||O==="-P"?"P0D":O},v.toJSON=function(){return this.toISOString()},v.format=function(S){var T=S||"YYYY-MM-DDTHH:mm:ss",P={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return T.replace(u,function(z,G){return G||String(P[z])})},v.as=function(S){return this.$ms/y[M(S)]},v.get=function(S){var T=this.$ms,P=M(S);return P==="milliseconds"?T%=1e3:T=P==="weeks"?W(T/y[P]):this.$d[P],T===0?0:T},v.add=function(S,T,P){var z;return z=T?S*y[M(T)]:x(S)?S.$ms:b(S,this).$ms,b(this.$ms+z*(P?-1:1),this)},v.subtract=function(S,T){return this.add(S,T,!0)},v.locale=function(S){var T=this.clone();return T.$l=S,T},v.clone=function(){return b(this.$ms,this)},v.humanize=function(S){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(f,v,S){t=S,r=S().$utils(),S.duration=function(z,G){var R=S.locale();return b(z,{$l:R},G)},S.isDuration=x;var T=v.prototype.add,P=v.prototype.subtract;v.prototype.add=function(z,G){return x(z)&&(z=z.asMilliseconds()),T.bind(this)(z,G)},v.prototype.subtract=function(z,G){return x(z)&&(z=z.asMilliseconds()),P.bind(this)(z,G)}}})})(ks);const Ms=an;var $s="Expected a function",ur=0/0,Ds="[object Symbol]",Es=/^\s+|\s+$/g,_s=/^[-+]0x[0-9a-f]+$/i,Ts=/^0b[01]+$/i,Ps=/^0o[0-7]+$/i,As=parseInt,Is=typeof Se=="object"&&Se&&Se.Object===Object&&Se,Os=typeof self=="object"&&self&&self.Object===Object&&self,Ys=Is||Os||Function("return this")(),Ls=Object.prototype,Ns=Ls.toString,Fs=Math.max,Hs=Math.min,cn=function(){return Ys.Date.now()};function Ws(e,n,t){var r,o,s,i,l,u,c=0,d=!1,h=!1,y=!0;if(typeof e!="function")throw new TypeError($s);n=fr(n)||0,ln(t)&&(d=!!t.leading,h="maxWait"in t,s=h?Fs(fr(t.maxWait)||0,n):s,y="trailing"in t?!!t.trailing:y);function x(v){var S=r,T=o;return r=o=void 0,c=v,i=e.apply(T,S),i}function b(v){return c=v,l=setTimeout(W,n),d?x(v):i}function M(v){var S=v-u,T=v-c,P=n-S;return h?Hs(P,s-T):P}function g(v){var S=v-u,T=v-c;return u===void 0||S>=n||S<0||h&&T>=s}function W(){var v=cn();if(g(v))return U(v);l=setTimeout(W,M(v))}function U(v){return l=void 0,y&&r?x(v):(r=o=void 0,i)}function Z(){l!==void 0&&clearTimeout(l),c=0,r=u=o=l=void 0}function I(){return l===void 0?i:U(cn())}function f(){var v=cn(),S=g(v);if(r=arguments,o=this,u=v,S){if(l===void 0)return b(u);if(h)return l=setTimeout(W,n),x(u)}return l===void 0&&(l=setTimeout(W,n)),i}return f.cancel=Z,f.flush=I,f}function ln(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Bs(e){return!!e&&typeof e=="object"}function zs(e){return typeof e=="symbol"||Bs(e)&&Ns.call(e)==Ds}function fr(e){if(typeof e=="number")return e;if(zs(e))return ur;if(ln(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ln(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(Es,"");var t=Ts.test(e);return t||Ps.test(e)?As(e.slice(2),t?2:8):_s.test(e)?ur:+e}var st=Ws;const Tt=[0,1,2];var mt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(mt||{});const hr=e=>Tt.includes(e),it=e=>{var r;const t=(((r=document.getElementById(Oe))==null?void 0:r.clientWidth)||0)-Ee;switch(e){case 1:return Math.ceil(t/ye)*ot;case 2:return Math.ceil(t/Ce)*ot;default:return Math.ceil(t/nt)*ot}},js=e=>it(e)/ot,dn=(e,n)=>{const t=it(n)/2;let r;switch(n){case 1:r=e.subtract(t,"days");break;case 2:r=e.subtract(t,"hours");break;default:r=e.subtract(t,"weeks");break}let o;switch(n){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:r,endDate:o}},Zs=(e,n)=>{const t=dn(e,n);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},un=()=>{var t;return((((t=document.getElementById(Oe))==null?void 0:t.clientWidth)||0)-Ee)*ot},pr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:_(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});_.extend(ys),_.extend(bs),_.extend(ws),_.extend(Cs),_.extend(Ms);const Vs=({data:e,children:n,isLoading:t,config:r,defaultStartDate:o=_(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:l})=>{const{zoom:u,maxRecordsPerPage:c=50}=r,[d,h]=p.useState(u),[y,x]=p.useState(_()),[b,M]=p.useState(!1),[g,W]=p.useState(it(d)),U=Tt[d]!==Tt[Tt.length-1],Z=d!==0,I=p.useMemo(()=>Zs(y,d),[y,d]),f=dn(y,d).startDate,v=_(f).dayOfYear(),S=dr(f),T=p.useRef(null),[P,z]=p.useState([{x:0,y:0}]),G=p.useCallback((X,w="auto")=>{var m,L,F,Y;const A=un();switch(X){case"back":return(m=T.current)==null?void 0:m.scrollTo({behavior:w,left:A/3});case"forward":return(L=T.current)==null?void 0:L.scrollTo({behavior:w,left:A/3});case"middle":{const C=A/ot/4;return(F=T.current)==null?void 0:F.scrollTo({behavior:w,left:A/2-C})}default:return(Y=T.current)==null?void 0:Y.scrollTo({behavior:w,left:A/2})}},[]),R=X=>{z(X)},$=p.useCallback(X=>{const w=js(d);let A;switch(d){case 0:A=w*7;break;case 1:A=w;break;case 2:A=Math.ceil(w/Et);break}st(()=>{switch(X){case"back":x(L=>L.subtract(A,"days"));break;case"forward":x(L=>L.add(A,"days"));break;case"middle":x(_());break}s==null||s(I)},300)()},[s,I,d]);p.useEffect(()=>{T.current=document.getElementById(Oe),W(it(d))},[d]),p.useEffect(()=>{const X=()=>W(it(d));return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[d]),p.useEffect(()=>{s==null||s(I)},[s,I]),p.useEffect(()=>{M(!1)},[o]),p.useEffect(()=>{b||(G("middle"),M(!0),x(o))},[o,b,G]);const E=()=>{t||(x(X=>d===2?X.add(nr,"hours"):X.add(ar,"weeks")),s==null||s(I))},D=p.useCallback(()=>{t||($("forward"),st(()=>{G("forward")},500)())},[t,$,G]),j=()=>{t||(x(X=>d===2?X.subtract(nr,"hours"):X.subtract(ar,"weeks")),s==null||s(I))},O=p.useCallback(()=>{!b||t||($("back"),st(()=>{G("back")},500)())},[b,t,$,G]),J=p.useCallback(()=>{t||($("middle"),st(()=>{G("middle","smooth")},300)())},[t,$,G]),ee=p.useCallback(X=>{if(t)return;const w=_(X).startOf("day");w.isValid()&&(x(w),s==null||s(I),setTimeout(()=>{G("middle","smooth")},300))},[t,G,s,I]),se=()=>B(d+1),oe=()=>B(d-1),B=X=>{hr(X)&&(h(X),W(it(X)),s==null||s(I))},V=()=>i==null?void 0:i(),{Provider:K}=pr;return a.jsx(K,{value:{data:e,config:r,handleGoNext:E,handleScrollNext:D,handleGoPrev:j,handleScrollPrev:O,handleGoToday:J,goToDate:ee,zoomIn:se,zoomOut:oe,setZoom:B,zoom:d,isNextZoom:U,isPrevZoom:Z,date:y,isLoading:t,cols:g,startDate:S,dayOfYear:v,toggleDisplayActiveUnits:V,tilesCoords:P,updateTilesCoords:R,recordsThreshold:c,onClearFilterData:l},children:n})},Be=()=>p.useContext(pr),gr=(e,n,t)=>{e.canvas.width=n*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},mr=(e,n)=>{if(n.length===0)return e;let t=e,r=0;for(const o of n){const s=o*de+r*De;if(e>=s+De)r++;else if(e>=s)return o*de+r*De-r*De}return t-r*De},Gs=5,yr=(e,n)=>{const t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.sqrt(t*t+r*r)>Gs},yt=(e,n,t)=>{const r=t.getBoundingClientRect();return{x:e-r.left+t.scrollLeft,y:n-r.top+t.scrollTop}},Xs=({data:e,baseData:n,zoom:t,startDate:r,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:l,separatorRowIndices:u=[]})=>{const c=n?n.length>0&&n[0].data.length>0&&!Array.isArray(n[0].data[0])?n.map(A=>({...A,data:[A.data]})):n:e,{enabled:d=!0,isDraggable:h,resourceOnly:y=!1,isValidDrop:x}=i,[b,M]=p.useState("idle"),[g,W]=p.useState(null),[U,Z]=p.useState({x:0,y:0}),[I,f]=p.useState({width:0,height:48}),[v,S]=p.useState(null),[T,P]=p.useState(!0),z=p.useRef({x:0,y:0}),G=p.useRef({x:0,y:0}),R=p.useRef({x:0,y:0}),$=p.useRef(null),E=p.useRef(null),D=p.useRef(0),j=p.useRef(null),O=p.useCallback(A=>!d||A.draggable===!1?!1:h?h(A):!0,[d,h]),J=p.useCallback((A,m)=>{const L=mr(m,u),F=Math.floor(L/de);let Y;switch(t){case 0:Y=_e*7;break;case 1:Y=ye;break;case 2:Y=Ce;break;default:Y=ye}const C=Math.floor(A/Y);let te;const N=_().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:te=N.add(C*7,"days").toDate();break;case 1:te=N.add(C,"days").toDate();break;case 2:te=N.add(C,"hours").toDate();break;default:te=N.toDate()}return{snappedDate:te,snappedResourceIndex:F}},[t,r,u]),ee=p.useCallback((A,m,L,F)=>{const Y=[],C=m.getTime(),te=L.getTime(),N=c.find(re=>re.id===F);if(!N)return Y;const q=[];for(const re of N.data)Array.isArray(re)?q.push(...re):q.push(re);for(const re of q){if(re.segmentId===A.segmentId)continue;const H=re.startDate.getTime(),ae=re.endDate.getTime();if(C>=H&&C<ae||te>H&&te<=ae||C<=H&&te>=ae){const ue=new Date(Math.max(C,H)),me=new Date(Math.min(te,ae)),ke=me.getTime()-ue.getTime();Y.push({event:re,conflictStart:ue,conflictEnd:me,overlapDuration:ke})}}return Y},[c]),se=p.useCallback((A,m,L,F)=>{const Y=[],C=m.getTime(),te=L.getTime(),N=_(m).format("YYYY-MM-DD"),q=c.find(H=>H.id===F);if(!q)return Y;const re=[];for(const H of q.data)Array.isArray(H)?re.push(...H):re.push(H);for(const H of re){if(H.segmentId===A.segmentId)continue;const ae=H.startDate.getTime(),le=H.endDate.getTime(),ue=_(H.startDate).format("YYYY-MM-DD"),me=_(H.endDate).format("YYYY-MM-DD"),ke=_(L).format("YYYY-MM-DD");if(!(ue===N||me===N||ue===ke||me===ke||_(H.startDate).isBefore(m,"day")&&_(H.endDate).isAfter(L,"day"))||C>=ae&&C<le||te>ae&&te<=le||C<=ae&&te>=le)continue;let ie,ce;le<=C?(ie=C-le,ce="before"):(ie=ae-te,ce="after"),Y.push({event:H,timeGap:ie,position:ce})}return Y.sort((H,ae)=>H.timeGap-ae.timeGap)},[c]),oe=p.useCallback((A,m,L)=>{const F=J(m,L);let Y,C;if(y)Y=A.startDate,C=A.endDate;else{const le=_(A.endDate).diff(A.startDate);Y=F.snappedDate,C=_(Y).add(le,"milliseconds").toDate()}let te=0,N="",q;for(const le of e){const ue=Math.max(le.data.length,1);if(F.snappedResourceIndex<te+ue){N=le.id,q=le.capacity;break}te+=ue}if(!N)return null;let re=!0;q!==void 0&&A.totalPassengers!==void 0&&(re=A.totalPassengers<=q);const H=ee(A,Y,C,N),ae=H.length===0?se(A,Y,C,N):[];return{startDate:Y,endDate:C,resourceId:N,resourceIndex:F.snappedResourceIndex,resourceCapacity:q,hasCapacity:re,conflicts:H,hasConflict:H.length>0,nearbyEvents:ae}},[J,e,y,ee,se]),B=p.useCallback((A,m)=>{if(!s)return;const L=Date.now();if(L-D.current<100)return;D.current=L;const F={event:A,currentStartDate:m.startDate,currentEndDate:m.endDate,currentResourceId:m.resourceId,conflicts:m.conflicts};s(F)},[s]),V=p.useCallback((A,m)=>{if(!O(A)||!l.current)return;m.preventDefault(),m.stopPropagation();const L=m.target.closest('[style*="left"]');let F=0,Y=0;L&&L.style.left&&L.style.top&&(F=parseInt(L.style.left),Y=parseInt(L.style.top));const C=yt(m.clientX,m.clientY,l.current);z.current={x:F,y:Y},G.current={x:m.clientX,y:m.clientY},R.current={x:C.x-F,y:20},j.current={startDate:A.startDate,endDate:A.endDate,resourceId:""};for(const q of e){for(const re of q.data)if(re.some(H=>H.segmentId===A.segmentId)){j.current.resourceId=q.id;break}if(j.current.resourceId)break}W(A),M("potential"),Z({x:F,y:Y});let te=100,N=48;if(L){const q=L.getBoundingClientRect();te=q.width,N=q.height}f({width:te,height:N})},[O,l,e,t]),K=p.useCallback(A=>{if(!l.current)return;let m=l.current;for(;m&&m!==document.body;){const H=window.getComputedStyle(m);if(m.scrollHeight>m.clientHeight&&(H.overflowY==="auto"||H.overflowY==="scroll"||H.overflow==="auto"||H.overflow==="scroll"))break;m=m.parentElement}(!m||m===document.body)&&(m=document.documentElement);const L=m.getBoundingClientRect(),F=A.clientY,Y=50,C=5,te=F-L.top,N=L.bottom-F;let q=!1,re=0;te<Y&&te>0?(q=!0,re=-C*(1-te/Y)):N<Y&&N>0&&(q=!0,re=C*(1-N/Y)),q?(E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>{m.scrollTop+=re,b==="dragging"&&K(A)})):E.current&&(cancelAnimationFrame(E.current),E.current=null)},[l,b]),X=p.useCallback(A=>{if(b==="idle"||b==="animating"||!g||!l.current)return;const m={x:A.clientX,y:A.clientY};if(b==="potential")if(yr(G.current,m))M("dragging");else return;K(A);const L=yt(A.clientX,A.clientY,l.current);$.current&&cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>{const F={x:L.x-R.current.x,y:L.y-R.current.y};Z(F);const Y=oe(g,L.x,L.y);if(Y&&x){const C={event:g,currentStartDate:Y.startDate,currentEndDate:Y.endDate,currentResourceId:Y.resourceId,conflicts:Y.conflicts};Y.hasConflict=!x(C)}if(S(Y),Y){const C=Y.hasCapacity!==!1;P(C),B(g,Y)}})},[b,g,l,oe,B,x,K]),w=p.useCallback(async A=>{if(b==="idle"||b==="animating")return;const m={x:A.clientX,y:A.clientY};if(!yr(G.current,m)||b==="potential"){M("idle"),W(null),S(null);return}if(!g||!v||!j.current){M("idle"),W(null),S(null);return}if(v.hasCapacity===!1){P(!1),M("animating"),Z(z.current),setTimeout(()=>{M("idle"),W(null),S(null),P(!0)},300);return}const F={event:g,originalStartDate:j.current.startDate,originalEndDate:j.current.endDate,originalResourceId:j.current.resourceId,newStartDate:v.startDate,newEndDate:v.endDate,newResourceId:v.resourceId,hasConflict:v.hasConflict,conflicts:v.conflicts};let Y=!0;if(o)try{const C=o(F);Y=C instanceof Promise?await C:C}catch{Y=!1}Y?(P(!0),M("idle"),W(null),S(null)):(P(!1),M("animating"),Z(z.current),setTimeout(()=>{M("idle"),W(null),S(null),P(!0)},300))},[b,g,v,o,x]);return p.useEffect(()=>{if(b==="potential"||b==="dragging"){const A=L=>X(L),m=L=>w(L);return document.addEventListener("mousemove",A),document.addEventListener("mouseup",m),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",m)}}else return()=>{}},[b,X,w]),p.useEffect(()=>()=>{$.current&&(cancelAnimationFrame($.current),$.current=null),E.current&&(cancelAnimationFrame(E.current),E.current=null)},[]),p.useEffect(()=>{(b==="idle"||b==="animating")&&($.current&&(cancelAnimationFrame($.current),$.current=null),E.current&&(cancelAnimationFrame(E.current),E.current=null))},[b]),p.useEffect(()=>{(b==="dragging"||b==="potential")&&(b==="dragging"?(M("animating"),Z(z.current),setTimeout(()=>{M("idle"),W(null),S(null)},300)):(M("idle"),W(null),S(null)))},[t]),p.useEffect(()=>{if((b==="dragging"||b==="potential")&&g){let A=!1;for(const m of e){for(const L of m.data)if(L.some(F=>F.segmentId===g.segmentId)){A=!0;break}if(A)break}A||(b==="dragging"?(M("animating"),Z(z.current),setTimeout(()=>{M("idle"),W(null),S(null)},300)):(M("idle"),W(null),S(null)))}},[e,b,g]),{dragState:b,draggedEvent:g,ghostPosition:U,ghostDimensions:I,dropTarget:v,isValidDrop:T,handleDragStart:V,isDraggable:O,draggingEventId:(g==null?void 0:g.segmentId)||null,resourceOnly:y}},Us=({data:e,baseData:n,zoom:t,startDate:r,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:l,isDragging:u,separatorRowIndices:c=[]})=>{const{enabled:d=!1,isSelectable:h}=i,y=d&&!!o,x=p.useCallback(m=>{let L=0;for(const F of c)F<=m&&L++;return m*de+L*De},[c]),[b,M]=p.useState("idle"),[g,W]=p.useState(null),[U,Z]=p.useState(null),[I,f]=p.useState(null),[v,S]=p.useState(!1),[T,P]=p.useState([]),[z,G]=p.useState(!1),R=p.useRef(null),$=p.useRef(null),E=p.useRef(null),D=p.useCallback(()=>{switch(t){case 0:return _e*7;case 1:return ye;case 2:return Ce;default:return ye}},[t]),j=p.useCallback(m=>{const L=D(),F=Math.floor(m/L),Y=_().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return Y.add(F*7,"days").toDate();case 1:return Y.add(F,"days").toDate();case 2:return Y.add(F,"hours").toDate();default:return Y.toDate()}},[t,r,D]),O=p.useCallback(m=>{const L=mr(m,c),F=Math.floor(L/de);let Y=0;for(const C of e){const te=Math.max(C.data.length,1);if(F<Y+te)return{resourceId:C.id,resourceIndex:F,resourceLabel:C.label};Y+=te}return null},[e,c]),J=p.useCallback(m=>{const L=D();return Math.floor(m/L)*L},[D]),ee=p.useCallback((m,L,F,Y=[])=>{const C=[],N=(n||e).find(H=>H.id===m),q=L.getTime(),re=F.getTime();if(N){const H=N.data[0],ae=H&&Array.isArray(H)?N.data.flat():N.data;for(const le of ae){const ue=new Date(le.startDate).getTime(),me=new Date(le.endDate).getTime();if(q<me&&re>ue){const ke=new Date(Math.max(q,ue)),ve=new Date(Math.min(re,me)),Q=ve.getTime()-ke.getTime();C.push({event:le,conflictStart:ke,conflictEnd:ve,overlapDuration:Q})}}}for(const H of Y){if(H.resourceId!==m)continue;const ae=H.startDate.getTime(),le=H.endDate.getTime();if(q<le&&re>ae){const ue=new Date(Math.max(q,ae)),me=new Date(Math.min(re,le)),ke=me.getTime()-ue.getTime(),ve={segmentId:`pending-${H.startDate.getTime()}`,reservationId:`pending-${H.startDate.getTime()}`,startDate:H.startDate,endDate:H.endDate,occupancy:0,title:`New Event (${H.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};C.push({event:ve,conflictStart:ue,conflictEnd:me,overlapDuration:ke})}}return C},[e,n]),se=p.useCallback(m=>{if(!y||u||!l.current||m.button!==0)return;const L=m.target;if(L.closest("[data-segment-id]")||L.closest("[data-multi-select-ui]"))return;const F=yt(m.clientX,m.clientY,l.current),Y=O(F.y);if(!Y)return;R.current={x:m.clientX,y:m.clientY},$.current=Y.resourceIndex;const C=J(F.x),te=D(),N=x(Y.resourceIndex);W(F),Z(F),f({x:C,y:N,width:te,height:de}),M("selecting")},[y,u,l,O,J,D,x]),oe=p.useCallback(m=>{if(b!=="selecting"||!l.current||$.current===null)return;const L=yt(m.clientX,m.clientY,l.current);E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>{Z(L);const F=D(),Y=J((g==null?void 0:g.x)||0),C=J(L.x),te=x($.current),N=Math.min(Y,C),q=Math.max(Y,C)+F;f({x:N,y:te,width:q-N,height:de})})},[b,l,g,D,J,x]),B=p.useCallback(m=>{if(b!=="selecting")return;if(!l.current||!g||!R.current){M("idle"),W(null),Z(null),f(null);return}const L=yt(m.clientX,m.clientY,l.current),F=O(g.y);if(!F){M("idle"),W(null),Z(null),f(null);return}const Y=Math.min(g.x,L.x),C=Math.max(g.x,L.x),te=j(Y),N=j(C),q=_(N).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(F.resourceId,te,q)){M("idle"),W(null),Z(null),f(null);return}const re=ee(F.resourceId,te,q,T),H=re.length>0,ae={startDate:te,endDate:q,resourceId:F.resourceId,resourceLabel:F.resourceLabel,zoomLevel:t,hasConflict:H,conflicts:H?re:void 0};if(v)P(le=>[...le,ae]),G(!0);else if(o){const le=o(ae),ue=me=>{me!=null&&me.continueMultiSelect&&(S(!0),P([ae]),G(!0))};le instanceof Promise?le.then(ue):ue(le)}M("idle"),W(null),Z(null),f(null),R.current=null,$.current=null},[b,l,g,O,j,h,o,t,v,ee,T]),V=p.useCallback(()=>{if(T.length>0&&s){G(!1);const m=s(T),L=F=>{F!=null&&F.continueMultiSelect?G(!0):(P([]),S(!1),G(!1))};m instanceof Promise?m.then(L):L(m);return}P([]),S(!1),G(!1)},[T,s]),K=p.useCallback(()=>{P([]),S(!1),G(!1)},[]),X=p.useCallback(m=>{P(L=>{const F=L.filter((Y,C)=>C!==m);return F.length===0&&(S(!1),G(!1)),F})},[]),w=p.useCallback((m,L)=>{P(F=>F.map((Y,C)=>{if(C!==m)return Y;const te={...Y,...L},N=F.filter((re,H)=>H!==m),q=ee(te.resourceId,te.startDate,te.endDate,N);return{...te,hasConflict:q.length>0,conflicts:q.length>0?q:void 0}}))},[ee]),A=p.useCallback(m=>{m.key==="Escape"&&(b==="selecting"?(M("idle"),W(null),Z(null),f(null),R.current=null,$.current=null):v&&T.length>0&&(P([]),S(!1),G(!1)))},[b,v,T.length]);return p.useEffect(()=>{if(b==="selecting")return document.addEventListener("mousemove",oe),document.addEventListener("mouseup",B),document.addEventListener("keydown",A),()=>{document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",B),document.removeEventListener("keydown",A)}},[b,oe,B,A]),p.useEffect(()=>{if(v&&T.length>0)return document.addEventListener("keydown",A),()=>{document.removeEventListener("keydown",A)}},[v,T.length,A]),p.useEffect(()=>()=>{E.current&&(cancelAnimationFrame(E.current),E.current=null)},[]),p.useEffect(()=>{u&&b==="selecting"&&(M("idle"),W(null),Z(null),f(null),R.current=null,$.current=null)},[u,b]),{selectionState:b,selectionStart:g,selectionEnd:U,selectionBox:I,handleGridMouseDown:se,isEnabled:y,pendingSelections:T,confirmSelections:V,clearSelections:K,removeSelection:X,updateSelection:w,isMultiSelectActive:v,hasUnconfirmedSelections:z}},Ks=k.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,qs=k.div`
  position: relative;
`,Js=k.canvas``;k.canvas``;const vr=k.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,Qs=p.forwardRef(function({zoom:n,rows:t,data:r,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:l,draggableConfig:u,onDragStateChange:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y,separatorRowIndices:x=[]},b){const M=p.useRef(!1),{handleScrollNext:g,handleScrollPrev:W,date:U,isLoading:Z,cols:I,startDate:f}=Be(),v=p.useRef(null),S=p.useRef(null),T=p.useRef(null),P=p.useRef(null),[z,G]=p.useState(!1),R=Dt(),{dragState:$,draggedEvent:E,ghostPosition:D,ghostDimensions:j,dropTarget:O,isValidDrop:J,handleDragStart:ee,isDraggable:se,draggingEventId:oe,resourceOnly:B}=Xs({data:r,baseData:o||r,zoom:n,startDate:f,onEventDrop:i,onEventDrag:l,draggableConfig:u,gridRef:P,separatorRowIndices:x});p.useEffect(()=>{const H=$==="dragging"||$==="potential";G(H),c&&c(H)},[$,c]);const{selectionState:V,selectionBox:K,handleGridMouseDown:X,pendingSelections:w,confirmSelections:A,clearSelections:m,removeSelection:L,updateSelection:F,isMultiSelectActive:Y,hasUnconfirmedSelections:C}=Us({data:r,baseData:o||r,zoom:n,startDate:f,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y,gridRef:P,isDragging:z,separatorRowIndices:x}),te=p.useCallback(H=>{H.preventDefault()},[]),N=p.useCallback(H=>{H.preventDefault()},[]),q=x.length*De,re=p.useCallback(H=>{const ae=un(),le=t*de+1+q;gr(H,ae,le),gs(H,n,t,I,f,R,x)},[I,f,t,n,R,x,q]);return p.useEffect(()=>{if(!v.current)return;const H=v.current.getContext("2d");if(!H)return;const ae=()=>re(H);return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[re]),p.useEffect(()=>{const H=v.current;if(!H)return;H.style.letterSpacing="1px";const ae=H.getContext("2d");ae&&re(ae)},[U,t,n,re]),p.useEffect(()=>{if(!S.current)return;const H=new IntersectionObserver(ae=>{ae[0].isIntersecting&&!M.current&&(M.current=!0,g(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Oe)});return H.observe(S.current),()=>{H.disconnect()}},[g]),p.useEffect(()=>{if(!T.current)return;const H=new IntersectionObserver(ae=>{ae[0].isIntersecting&&!M.current&&(M.current=!0,W(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Oe),rootMargin:`0px 0px 0px -${Ee}px`});return H.observe(T.current),()=>{H.disconnect()}},[W]),a.jsxs(Ks,{id:or,children:[a.jsxs(qs,{ref:H=>{typeof b=="function"?b(H):b&&(b.current=H),P.current=H},onMouseDown:X,style:{cursor:d?"crosshair":"default"},children:[a.jsx(vr,{position:"left",ref:T}),a.jsx(Sn,{isLoading:Z,position:"left"}),a.jsx(Js,{ref:v,onDragStart:te,onDragOver:N,style:{userSelect:$==="dragging"?"none":"auto"}}),a.jsx(cl,{zoom:n,startDate:f}),a.jsx(mc,{data:r,zoom:n,onTileClick:s,onDragStart:ee,isDraggable:se,draggingEventId:oe,separatorRowIndices:x}),a.jsx(vr,{ref:S,position:"right"}),a.jsx(Sn,{isLoading:Z,position:"right"}),($==="dragging"||$==="animating")&&a.jsx(jc,{draggedEvent:E,ghostPosition:D,ghostDimensions:j,dropTarget:O,isValidDrop:J,dragState:$,zoom:n,data:r,resourceOnly:B,separatorRowIndices:x}),a.jsx(Gc,{selectionBox:K,isSelecting:V==="selecting"}),Y&&w.length>0&&a.jsx(il,{selections:w,data:r,zoom:n,startDate:f,onRemove:L,onUpdate:F,separatorRowIndices:x})]}),Y&&C&&w.length>0&&a.jsx(el,{selections:w,onConfirm:A,onClear:m,onRemove:L})]})}),br=e=>{const n=_.duration(e,"seconds"),t=n.hours(),r=n.minutes();return{hours:t,minutes:r}},xr=e=>{let n=0,t=0,r=0;return e.forEach(o=>{n+=o.minutes;const s=Math.floor(n/we);t+=o.hours+s,r+=n%we,r>=we&&(t++,r-=we)}),{hours:t,minutes:r}},wr=(e,n)=>{let t=sr;switch(n){case 0:t=as;break;case 1:t=sr;break;case 2:t=1;break}const r=()=>{let s=t-e.hours-1,i=we-e.minutes;return i===we&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:r(),overtime:o()}},Rs=(e,n,t)=>{const r=n.isoWeek(),o=e.map(c=>{const d=_(c.startDate).isoWeek(),h=_(c.startDate).isoWeekday(),y=_(c.endDate).isoWeek(),x=_(c.endDate).isoWeekday(),{hours:b,minutes:M}=br(c.occupancy);if(r===d){const g=(We+1-h)*b,W=(We+1-h)*M;return{hours:Math.max(0,g),minutes:W}}else if(r===y){const g=x>We?We*b:x*b,W=x>We?We*M:x*M;return{hours:g,minutes:W}}else if(_(n).isBetween(c.startDate,c.endDate))return{hours:We*b,minutes:We*M};return{hours:0,minutes:0}}),{hours:s,minutes:i}=xr(o),{free:l,overtime:u}=wr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:l,overtime:u}},ei=(e,n,t,r)=>{const o=n.isoWeekday(),s=e.map(d=>{const{hours:h,minutes:y}=br(d.occupancy);return o<=(r?7:5)?{hours:h,minutes:y}:{hours:0,minutes:0}}),{hours:i,minutes:l}=xr(s),{free:u,overtime:c}=wr({hours:i,minutes:l},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,l)},free:u,overtime:c}},ti=(e,n)=>{let t=0;e.forEach(l=>{const u=_(l.startDate).hour(),c=_(l.endDate).hour(),d=n.hour(),h=_(l.endDate).minute(),y=_(l.startDate).minute();u<d&&c>d?t+=we:u===d&&c===d&&y&&h?t+=h?h-y:we-y:u===d&&c>=d?t+=y?we-y:we:c===d&&h&&(t+=h)});const r=Math.floor(t/we),o=t%we,s=r||o?0:1,i=r?0:o?we-o:0;return{taken:{hours:r,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},ni=(e,n,t,r,o=!1)=>{if(n<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>r===1?_(t).isBetween(i.startDate,i.endDate,"day","[]"):r===2?_(t).isBetween(i.startDate,i.endDate,"hour","[]"):_(i.startDate).isBetween(_(t),_(t).add(6,"days"),"day","[]")||_(t).isBetween(_(i.startDate),_(i.endDate),"day","[]"));switch(r){case 1:return ei(s,t,r,o);case 2:return ti(s,t);default:return Rs(s,t,r)}},ri=(e,n,t,r,o,s,i=!1)=>{let l="weeks",u;switch(s){case 0:l="weeks",u=nt;break;case 1:l="days",u=ye;break;case 2:l="hours",u=Ce;break}const c=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=_(`${n.year}-${n.month+1}-${n.dayOfMonth}T${n.hour}:00:00`).add(c-1,l),h=Math.ceil(t.y/de),y=r.findIndex((W,U,Z)=>Z.slice(0,U+1).reduce((f,v)=>f+v,0)>=h),x=s===2?(c+1)*u:c*u,b=(h-1)*de+de,M=ni(o[y],y,d,s,i),g=_(e.startDate).isSame(_(e.endDate),"day");return{coords:{x,y:b},mouseCoords:t,resourceIndex:y,disposition:M,reservationData:{startTime:_(e.startDate).format("hh:mm A"),startDate:_(e.startDate).format("MMM D, YYYY"),endTime:_(e.endDate).format("hh:mm A"),endDate:_(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:g,passengers:e.totalPassengers}}};function oi(e,n){if(e.length<=1)return[];if(e.length<=n){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const r=Math.min(n-1,t.length);return t.slice(0,r).map(o=>o.index).sort((o,s)=>o-s)}function si(e){const n={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&d.capacity!=null&&t.add(d.capacity);const r=[...t].sort((d,h)=>d-h);if(r.length<2)return n;const o=Math.min(5,r.length),s=oi(r,o),i=[];let l=0;for(const d of s)i.push({min:r[l],max:r[d-1],values:r.slice(l,d)}),l=d;i.push({min:r[l],max:r[r.length-1],values:r.slice(l)});const u=[],c=new Map;return i.forEach((d,h)=>{const y="__auto_cat_"+h,x=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:y,name:x,minPassengers:d.min,maxPassengers:d.max});for(const b of d.values)c.set(b,y)}),{categories:u,capacityToCategoryId:c}}const ii=(e,n,t,r)=>{const o=[];let s=0,i=[],l=0;return n.length>r?(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=r&&(o.push(i),s+=i.length,i=[],l=0),l++,i.push(d)}),t.slice(s).length<=r&&(i=[],n.slice(s).forEach((u,c)=>{const d={id:e[c+s].id,label:e[c+s].label,data:u,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};i.push(d),c===n.length-s-1&&o.push(i)})),o):(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};i.push(d)}),o.push(i),o)};var fn={},ai={get exports(){return fn},set exports(e){fn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return function(t,r){r.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(ai);const ci=fn;var hn={},li={get exports(){return hn},set exports(e){hn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return function(t,r){r.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(li);const di=hn,ui=e=>{const n=[];for(const t of e){let r=!1;if(n.length)for(const o of n){let s=!1;for(let i=0;i<o.length;i++){const l=_(t.startDate).startOf("day"),u=_(t.endDate).startOf("day"),c=_(o[i].startDate).startOf("day"),d=_(o[i].endDate).startOf("day");if(l.isBetween(c,d,null,"[]")||u.isBetween(c,d,null,"[]")||l.isBefore(c,"minute")&&u.isAfter(d,"minute")||l.isAfter(c,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),r=!0;break}}r||n.push([t])}return n};_.extend(ci),_.extend(di);const Sr=new WeakMap,fi=e=>{const n=Sr.get(e);if(n)return n;const t=[...e].sort((o,s)=>{const i=_(o.startDate),l=_(s.startDate),u=i.startOf("day").diff(l.startOf("day"),"day");return u!==0?u:i.diff(l)}),r=ui(t);return Sr.set(e,r),r},hi=e=>{const n=[[],[]],[t,r]=e.reduce((o,s)=>{const i=fi(s.data);return o[0].push(i),o[1].push(Math.max(i.length,1)),o},n);return{projectsPerPerson:t,rowsPerPerson:r}},pi=e=>e?e.map(n=>n.data.length).reduce((n,t)=>n+Math.max(t,1),0):0,gi=e=>{const{recordsThreshold:n}=Be(),[t,r]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Oe)},[]);const{projectsPerPerson:l,rowsPerPerson:u}=p.useMemo(()=>hi(e),[e]),c=p.useMemo(()=>ii(e,l,u,n),[e,l,n,u]),d=p.useCallback(()=>{c[o].length&&i.current&&(i.current.scroll({top:0}),r(g=>g+c[Math.max(o,0)].length),s(g=>Math.min(g+1,c.length-1)),window.scroll({top:0}))},[o,c]),h=p.useCallback(()=>{c[o].length&&(r(g=>Math.max(g-c[o-1].length,0)),s(g=>Math.max(g-1,0)))},[o,c]),y=p.useCallback(()=>{r(0),s(0)},[]),x=t+c[o].length,b=p.useMemo(()=>u.slice(t,x),[x,u,t]),M=p.useMemo(()=>l.slice(t,x),[x,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:M,rowsPerItem:b,totalRowsPerPage:pi(c[o]),next:d,previous:h,reset:y}};var pn={},mi={get exports(){return pn},set exports(e){pn=e}};(function(e,n){(function(t,r){e.exports=r()})(Se,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var r=["th","st","nd","rd"],o=t%100;return"["+t+(r[(o-20)%10]||r[o]||r[0])+"]"}}})})(mi);const yi=pn;var gn={},vi={get exports(){return gn},set exports(e){gn=e}};(function(e,n){(function(t,r){e.exports=r(Ge)})(Se,function(t){function r(y){return y&&typeof y=="object"&&"default"in y?y:{default:y}}var o=r(t);function s(y){return y%10<5&&y%10>1&&~~(y/10)%10!=1}function i(y,x,b){var M=y+" ";switch(b){case"m":return x?"minuta":"minutę";case"mm":return M+(s(y)?"minuty":"minut");case"h":return x?"godzina":"godzinę";case"hh":return M+(s(y)?"godziny":"godzin");case"MM":return M+(s(y)?"miesiące":"miesięcy");case"yy":return M+(s(y)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,d=function(y,x){return c.test(x)?l[y.month()]:u[y.month()]};d.s=u,d.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(y){return y+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(vi);const bi=gn;var mn={},xi={get exports(){return mn},set exports(e){mn=e}};(function(e,n){(function(t,r){e.exports=r(Ge)})(Se,function(t){function r(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=r(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(u,c,d){var h=s[d];return Array.isArray(h)&&(h=h[c?0:1]),h.replace("%d",u)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(l,null,!0),l})})(xi);const wi=mn;var yn={},Si={get exports(){return yn},set exports(e){yn=e}};(function(e,n){(function(t,r){e.exports=r(Ge)})(Se,function(t){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=r(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,h){return l.test(h)?s[d.month()]:i[d.month()]};u.s=i,u.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Si);const Ci=yn;var vn={},ki={get exports(){return vn},set exports(e){vn=e}};(function(e,n){(function(t,r){e.exports=r(Ge)})(Se,function(t){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=r(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(ki);const Mi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:yi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:bi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:vn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:Ci},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:wi}];class $i{constructor(){Jr(this,"locales",Mi)}getLocales(){return this.locales}addLocales(n){this.locales.push(n)}}const Pt=new $i,Cr=p.createContext({localesData:Pt.getLocales(),currentLocale:Pt.getLocales()[0],setCurrentLocale:()=>{}}),Di=({children:e,lang:n,translations:t})=>{const[r,o]=p.useState("en"),s=Pt.getLocales(),i=p.useCallback(()=>{const h=s.find(y=>y.id===r);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&_.locale(h.dayjsTranslations),h||s[0]},[r,s]),[l,u]=p.useState(i()),c=h=>{localStorage.setItem("locale",h.translateCode),u(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(x=>x.id===h.id)||Pt.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),y=n??h??"en";localStorage.setItem("locale",y),o(y),u(i())},[i,n]);const{Provider:d}=Cr;return a.jsx(d,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Xe=()=>p.useContext(Cr).currentLocale.lang,Ei=e=>ne.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},ne.createElement("defs",null,ne.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),ne.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},ne.createElement("stop",{offset:.47,stopColor:"#ccc"}),ne.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),ne.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),ne.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),ne.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),ne.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),ne.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),ne.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),ne.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),ne.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),ne.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),ne.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),_i=k.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Ti=k.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Pi=({onTileClick:e})=>{const{feelingEmpty:n}=Xe();return a.jsxs(_i,{onClick:e,children:[a.jsx(Ei,{}),a.jsx(Ti,{children:n})]})},Ai=k.div`
  position: relative;
  display: flex;
`,Ii=k.div`
  position: relative;
  margin-left: ${Ee};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Oi=k.div`
  width: calc(${({width:e})=>e}px - ${Ee}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ee}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,bn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:mt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Yi(e,n){const t=n?[...n].sort((l,u)=>l.maxPassengers-u.maxPassengers):[],r=[];for(const l of t){const u=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);u.length>0&&r.push({type:"category",category:l,items:u})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?r.push({type:"uncategorized",items:s}):s.length>0&&r.push({type:"uncategorized",items:s});const i=e.filter(l=>l.isSubcontract);return i.length>0&&r.push({type:"subcontract",items:i}),r}const Li=({data:e,baseData:n,categories:t,onTileClick:r,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y})=>{const[x,b]=p.useState(bn),[M,g]=p.useState(e),[W,U]=p.useState(!1),[Z,I]=p.useState(!1),[f,v]=p.useState(""),[S,T]=p.useState(new Set),{zoom:P,startDate:z,isLoading:G,config:{includeTakenHoursOnWeekendsInDayView:R,showTooltip:$,showThemeToggle:E}}=Be(),D=p.useRef(null),j=p.useRef(null),[O,J]=p.useState(124),{page:ee,projectsPerPerson:se,rowsPerItem:oe,currentPageNum:B,pagesAmount:V,next:K,previous:X,reset:w}=gi(M),{effectiveCategories:A,effectivePage:m}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:ee};const Q=si(ee);if(Q.categories.length===0)return{effectiveCategories:void 0,effectivePage:ee};const ie=ee.map(ce=>{if(ce.isSubcontract||ce.capacity==null)return ce;const be=Q.capacityToCategoryId.get(ce.capacity);return be?{...ce,categoryId:be}:ce});return{effectiveCategories:Q.categories,effectivePage:ie}},[t,ee]),L=p.useCallback(Q=>{T(ie=>{const ce=new Set(ie);return ce.has(Q)?ce.delete(Q):ce.add(Q),ce})},[]),F=p.useMemo(()=>{const Q=[],ie=A?[...A].sort((ce,be)=>ce.maxPassengers-be.maxPassengers):[];for(const ce of ie)m.some(be=>!be.isSubcontract&&be.categoryId===ce.id)&&Q.push(ce.id);return m.some(ce=>ce.isSubcontract)&&Q.push("__subcontract__"),Q},[A,m]),Y=p.useCallback(()=>{T(new Set)},[]),C=p.useCallback(()=>{T(new Set(F))},[F]),{visiblePage:te,visibleRowsPerItem:N,visibleTotalRows:q,visibleProjectsPerPerson:re,separatorRowIndices:H}=p.useMemo(()=>{const Q=Yi(m,A),ie=((A==null?void 0:A.length)??0)>0,ce=new Map;ee.forEach((Me,Fe)=>ce.set(Me.id,Fe));const be=[],xe=[],Le=[],Ne=[];let lt=0;for(const Me of Q)if(Me.type==="subcontract"||Me.type==="category"&&ie){const dt=Me.type==="subcontract"?"__subcontract__":Me.category.id,ut=S.has(dt);if(Ne.push(lt),!ut)for(const Ue of Me.items){const It=ce.get(Ue.id)??0,Ot=oe[It];be.push(Ue),xe.push(Ot),Le.push(se[It]),lt+=Ot}}else for(const dt of Me.items){const ut=ce.get(dt.id)??0,Ue=oe[ut];be.push(dt),xe.push(Ue),Le.push(se[ut]),lt+=Ue}const $n=xe.reduce((Me,Fe)=>Me+Fe,0);return{visiblePage:be,visibleRowsPerItem:xe,visibleTotalRows:$n,visibleProjectsPerPerson:Le,separatorRowIndices:Ne}},[m,A,ee,S,oe,se]),ae=p.useRef(st((Q,ie,ce,be,xe,Le)=>{if(!D.current)return;const{tile:Ne,segmentId:lt}=me(Q);if(!lt||!Ne){U(!1),b(bn);return}const $n=ue(lt,ie),Me=D.current.getBoundingClientRect(),Fe=Ne.getBoundingClientRect(),dt={x:Q.clientX-Me.left,y:Q.clientY-Me.top},ut={x:Q.clientX-Me.left,y:Q.clientY-Me.top},Ue={x:Fe.left-Me.left,y:Fe.top-Me.top,width:Fe.width,height:Fe.height},{coords:{x:It,y:Ot},resourceIndex:ll,disposition:dl,reservationData:ul}=ri($n,ce,dt,be,xe,Le,R);b({coords:{x:It,y:Ot},mouseCoords:ut,resourceIndex:ll,disposition:dl,reservationData:ul,tileBounds:Ue}),U(!0)},4)),le=p.useRef(st((Q,ie)=>{w(),g(Q.map(ce=>({...ce,data:ce.data.filter(be=>{const{title:xe,description:Le,subtitle:Ne}=be;return(xe==null?void 0:xe.toLowerCase().includes(ie.toLowerCase()))||(Ne==null?void 0:Ne.toLowerCase().includes(ie.toLowerCase()))||(Le==null?void 0:Le.toLowerCase().includes(ie.toLowerCase()))})})).filter(ce=>ce.data.length>0))},500)),ue=(Q,ie)=>{if(Q)return ie.flatMap(ce=>ce.data).find(ce=>ce.segmentId===Q)},me=Q=>{if(!Q.target)return{tile:null,segmentId:null};const ie=Q.target.closest("[data-segment-id]");return ie?{tile:ie,segmentId:ie.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},ke=Q=>{const ie=Q.target.value;v(ie),le.current.cancel(),ie?le.current(e,ie):(w(),g(e))},ve=p.useCallback(()=>{ae.current.cancel(),U(!1),b(bn)},[]);return p.useEffect(()=>{const Q=ce=>ae.current(ce,e,z,N,re,P),ie=D.current;if(ie)return ie.addEventListener("mousemove",Q),ie.addEventListener("mouseleave",ve),()=>{ie.removeEventListener("mousemove",Q),ie.removeEventListener("mouseleave",ve)}},[ae,ve,re,N,z,P,e]),p.useEffect(()=>{f?(le.current.cancel(),le.current(e,f)):g(e)},[e,f]),p.useLayoutEffect(()=>{const Q=j.current;if(!Q)return;const ie=()=>J(Q.offsetHeight);ie();const ce=new ResizeObserver(ie);return ce.observe(Q),()=>ce.disconnect()},[]),a.jsxs(Ai,{children:[a.jsx(Sa,{headerHeight:O,data:m,categories:A,pageNum:B,pagesAmount:V,rows:oe,onLoadNext:K,onLoadPrevious:X,searchInputValue:f,onSearchInputChange:ke,onItemClick:o,collapsedGroups:S,onToggleGroup:L,allGroupIds:F,onExpandAll:Y,onCollapseAll:C}),a.jsxs(Ii,{children:[a.jsx(qa,{ref:j,zoom:P,topBarWidth:i,showThemeToggle:E,toggleTheme:s}),e.length?a.jsx(Qs,{data:te,baseData:n||e,zoom:P,rows:q,ref:D,onTileClick:r,onEventDrop:l,onEventDrag:u,draggableConfig:c,onDragStateChange:I,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y,separatorRowIndices:H}):a.jsx(Oi,{width:i,children:G?a.jsx(Sn,{isLoading:G,position:"left"}):a.jsx(Pi,{})}),$&&W&&!Z&&(x==null?void 0:x.resourceIndex)>-1&&a.jsx(Ac,{tooltipData:x})]})]})},Ni=k.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
`,xn=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({$at:e})=>e??"start"};
  justify-content: ${({$at:e})=>e==="end"?"flex-end":e==="center"?"center":"flex-start"};
`,Fi=k.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,kr=k.button`
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
`,Hi=k.button`
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
`,Wi=k.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,Bi=k.div`
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
`,Mr=k.button`
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
`,zi=k.label`
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
`,ji=k.button`
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
`,Zi=k.span`
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
`,at=({children:e,sw:n=2})=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:e}),Vi=()=>{var n,t;const e=document.getElementById(Oe);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(n=e==null?void 0:e.requestFullscreen)==null||n.call(e)},Gi=()=>{const{config:e,date:n,zoom:t,handleGoNext:r,handleGoPrev:o,handleGoToday:s,setZoom:i,goToDate:l,toggleDisplayActiveUnits:u}=Be(),{filterButtonState:c=-1}=e,d=()=>{var h;(h=document.querySelector(`#${Oe} input[placeholder]`))==null||h.focus()};return a.jsxs(Ni,{width:0,children:[a.jsxs(xn,{$at:"start",children:[a.jsx(Wi,{children:n.format("MMMM YYYY")}),a.jsxs(Bi,{children:[a.jsx("button",{className:t===2?"on":"",onClick:()=>i(2),children:"Día"}),a.jsx("button",{className:t===0?"on":"",onClick:()=>i(0),children:"Semana"}),a.jsx("button",{className:t===1?"on":"",onClick:()=>i(1),children:"Mes"})]}),a.jsxs(zi,{children:[a.jsxs(at,{children:[a.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),a.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),a.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",a.jsx("input",{type:"date",onChange:h=>h.target.value&&l(h.target.value)})]})]}),a.jsx(xn,{$at:"center",children:a.jsxs(Fi,{children:[a.jsx(kr,{onClick:o,"aria-label":"Anterior",children:a.jsx(at,{children:a.jsx("path",{d:"m15 18-6-6 6-6"})})}),a.jsx(Hi,{onClick:s,children:"Hoy"}),a.jsx(kr,{onClick:r,"aria-label":"Siguiente",children:a.jsx(at,{children:a.jsx("path",{d:"m9 18 6-6-6-6"})})})]})}),a.jsxs(xn,{$at:"end",children:[a.jsxs(ji,{onClick:d,children:[a.jsxs(at,{children:[a.jsx("circle",{cx:"11",cy:"11",r:"7"}),a.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",a.jsx("span",{className:"k",children:"⌘K"})]}),c>=0&&a.jsxs(Mr,{$primary:!!c,onClick:u,children:[a.jsx(at,{children:a.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&a.jsx(Zi,{children:c})]}),a.jsxs(Mr,{onClick:Vi,children:[a.jsx(at,{children:a.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]})]})]})},Xi={add:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>ne.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>ne.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>ne.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>ne.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>ne.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>ne.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>ne.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>ne.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ne.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),ne.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ne.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},wn=({iconName:e,width:n,height:t,fill:r,className:o})=>{const{colors:s}=Dt(),i=Xi[e];return i?a.jsx(i,{style:{transition:".5s ease"},fill:r??s.accent,width:n,height:t,className:o}):null},Ui=(e,n,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[n];k.button`
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
  ${({theme:e,variant:n,disabled:t})=>Ui(e,n,t)}
`;const Ki=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,qi=k.div`
  position: relative;
`,Ji=({data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,schedulerRef:d,onTimeRangeSelect:h,onMultiTimeRangeSelect:y,clickToAddConfig:x})=>{const{goToDate:b,handleGoToday:M,zoomIn:g,zoomOut:W,zoom:U}=Be();return p.useImperativeHandle(d,()=>({goToDate:b,goToToday:M,setZoom:Z=>{if(!hr(Z))return;const I=Z-U;if(I>0)for(let f=0;f<I;f++)g();else for(let f=0;f<Math.abs(I);f++)W()}}),[b,M,U,g,W]),a.jsx(Li,{data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:h,onMultiTimeRangeSelect:y,clickToAddConfig:x})},Qi=p.forwardRef(function({data:n,categories:t,baseData:r,config:o,startDate:s,onRangeChange:i,onTileClick:l,handleToggleDisplayActiveUnits:u,onClearFilterData:c,onItemClick:d,isLoading:h,onEventDrop:y,onEventDrag:x,draggableConfig:b,onTimeRangeSelect:M,onMultiTimeRangeSelect:g,clickToAddConfig:W},U){var D;const Z=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),I=p.useRef(null),f=p.useRef(null),[v,S]=p.useState((D=I.current)==null?void 0:D.clientWidth),T=p.useMemo(()=>_(s),[s]),[P,z]=p.useState(Z.defaultTheme??"light"),G=()=>{z(P==="light"?"dark":"light")},R=P==="light"?es:ts,$=Z.theme?Z.theme[R.mode]:{},E={...R,colors:{...R.colors,...$}};return p.useImperativeHandle(U,()=>({goToDate:j=>{var O;return(O=f.current)==null?void 0:O.goToDate(j)},goToToday:()=>{var j;return(j=f.current)==null?void 0:j.goToToday()},setZoom:j=>{var O;return(O=f.current)==null?void 0:O.setZoom(j)}}),[]),p.useEffect(()=>{const j=()=>{I.current&&S(I.current.clientWidth)};return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]),I.current,a.jsxs(a.Fragment,{children:[a.jsx(Ro,{}),a.jsx(qo,{theme:E,children:a.jsx(Di,{lang:Z.lang,translations:Z.translations,children:a.jsx(Vs,{data:n,isLoading:!!h,config:Z,onRangeChange:i,defaultStartDate:T,handleToggleDisplayActiveUnits:u,onClearFilterData:c,children:a.jsx(Ki,{showScroll:!!n.length,id:Oe,ref:I,children:a.jsx(qi,{children:a.jsx(Ji,{data:n,baseData:r,categories:t,onTileClick:l,topBarWidth:v??0,onItemClick:d,toggleTheme:G,onEventDrop:y,onEventDrag:x,draggableConfig:b,schedulerRef:f,onTimeRangeSelect:M,onMultiTimeRangeSelect:g,clickToAddConfig:W})})})})})})]})}),Ri=k.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:n})=>e==="next"?`1px solid ${n.colors.border}`:"none"};
`,ea=k.button`
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
`,ta=k.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,na=k.p`
  ${Qe}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,$r=({intent:e,onClick:n,icon:t,isVisible:r,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:l}=Xe(),u=e==="next"?`${i} ${o+2}/${s}`:`${l} ${o}/${s}`;return a.jsx(Ri,{intent:e,children:a.jsxs(ea,{onClick:n,isVisible:r,children:[t&&a.jsx(ta,{children:t}),a.jsx(na,{children:u})]})})},ra=k.div`
  min-width: ${Ee+"px"};
  max-width: ${Ee+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,oa=k.div`
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
`,sa=k.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,ia=k.input`
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
`,aa=k.div`
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
`,ca=k.button`
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
`,la=k.div`
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
`,da=k.div`
  display: flex;
  align-items: center;
`,ua=k.div`
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
`,fa=k.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,ha=k.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Dr=k.p`
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
`,pa=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),ga=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),a.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),a.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),ma=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),a.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),ya=({id:e,item:n,rows:t,onItemClick:r,isSubcontract:o})=>a.jsx(la,{title:n.title,clickable:typeof r=="function",rows:t,$isSubcontract:o,onClick:()=>r==null?void 0:r({id:e,label:n}),children:a.jsxs(da,{children:[a.jsx(ua,{$provider:o,children:pa(n.icon)?a.jsx(fa,{src:n.icon,alt:""}):o?a.jsx(ma,{}):a.jsx(ga,{})}),a.jsxs(ha,{children:[a.jsx(Dr,{isMain:!0,children:n.title}),a.jsx(Dr,{children:n.subtitle})]})]})}),va=k.div`
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
`,ba=k.span`
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
`,xa=k.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,wa=k.div`
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
`,Er=({label:e,count:n,isCollapsed:t,onToggle:r,variant:o="category"})=>a.jsxs(va,{$variant:o,onClick:r,title:e,children:[a.jsx(wa,{$collapsed:t,children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx(ba,{$variant:o,children:e}),a.jsx(xa,{$variant:o,children:n})]}),Sa=({data:e,categories:n,headerHeight:t,rows:r,onLoadNext:o,onLoadPrevious:s,pageNum:i,pagesAmount:l,searchInputValue:u,onSearchInputChange:c,onItemClick:d,collapsedGroups:h,onToggleGroup:y,allGroupIds:x,onExpandAll:b,onCollapseAll:M})=>{const[g,W]=p.useState(!1),U=Xe(),Z=()=>W($=>!$),I=n?[...n].sort(($,E)=>$.maxPassengers-E.maxPassengers):[],f=I.length>0,v=x.length>0,S=v&&h.size===x.length;v&&h.size;const T=e.filter($=>$.isSubcontract),P=U.subcontract??"Subcontract",z=$=>{const E=e.indexOf($);return a.jsx(ya,{id:$.id,item:$.label,rows:r[E],onItemClick:d,isSubcontract:$.isSubcontract},$.id)},G=$=>{const E=e.filter(O=>!O.isSubcontract&&O.categoryId===$.id);if(E.length===0)return null;const D=h.has($.id),j=$.name;return a.jsxs("div",{children:[a.jsx(Er,{label:j,count:E.length,isCollapsed:D,onToggle:()=>y($.id),variant:"category"}),!D&&E.map(z)]},$.id)},R=e.filter($=>!$.isSubcontract&&(!$.categoryId||!f));return a.jsxs(ra,{children:[a.jsxs(oa,{$height:t,children:[a.jsxs(sa,{children:[a.jsxs(aa,{isFocused:g,children:[a.jsx(ia,{placeholder:U.search,value:u,onChange:c,onFocus:Z,onBlur:Z}),a.jsx(wn,{iconName:"search"})]}),v&&a.jsx(ca,{title:S?"Expand all":"Collapse all",onClick:S?b:M,$allCollapsed:S,children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:S?a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),a.jsx($r,{intent:"previous",isVisible:i!==0,onClick:s,icon:a.jsx(wn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]}),f?I.map(G):R.map(z),f&&R.length>0&&R.map(z),T.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(Er,{label:P,count:T.length,isCollapsed:h.has("__subcontract__"),onToggle:()=>y("__subcontract__"),variant:"subcontract"}),!h.has("__subcontract__")&&T.map(z)]}),a.jsx($r,{intent:"next",isVisible:i!==l-1,onClick:o,icon:a.jsx(wn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]})},Ca=k.div`
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
`,ka=$t`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Ma=k.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${ka} 1s infinite;
`,Sn=({isLoading:e,position:n})=>e?a.jsx(Ca,{position:n,children:a.jsx(Ma,{})}):null,Ye=(e,n)=>{const{ctx:t,x:r,y:o,width:s,height:i,textYPos:l,label:u,font:c,isBottomRow:d,fillStyle:h,topText:y,bottomText:x,strokeStyle:b,labelBetweenCells:M}=e;if(t.beginPath(),t.strokeStyle=b??n.colors.border,t.setLineDash([]),u&&c&&l){t.fillStyle=n.colors.gridBackground,t.fillRect(r,o,s,i),M?(t.moveTo(r,o),t.lineTo(r+s,o),t.stroke(),t.moveTo(r,o+i),t.lineTo(r+s,o+i),t.stroke(),t.moveTo(r+s/2,o+i),t.lineTo(r+s/2,o+i-5),t.stroke()):t.strokeRect(r+.5,o+.5,s,i),t.font=c;const g=r+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=n.colors.accent,t.fillText(u,g,l)}if(d&&h&&y&&x){t.fillStyle=h,t.fillRect(r,o,s,i),t.strokeRect(r+.5,o+.5,s,i),t.font=y.font;const g=r+s/2-t.measureText(y.label).width/2;t.fillStyle=y.color,t.fillText(y.label,g,y.y),t.font=x.font;const W=r+s/2-t.measureText(x.label).width/2;t.fillStyle=x.color,t.fillText(x.label,W,x.y)}},Cn=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return t?o==="bottomRow"?n.colors.placeholder:n.colors.accent:r?o==="bottomRow"?n.colors.placeholder:n.colors.textPrimary:n.colors.placeholder},$a=(e,n,t,r)=>{const o=tt-Ve/rs,s=tt-Ve/os,i=Ie+et;let l=0;for(let u=0;u<n;u++){const c=dr(_(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(u,"days")),d=c.isCurrentDay;if(Ye({ctx:e,x:l,y:i,width:ye,height:Ve,isBottomRow:!0,fillStyle:d?r.colors.today+"26":c.isBusinessDay?r.colors.gridBackground:r.colors.primary,topText:{y:o,label:d?"":c.dayName.toUpperCase(),font:Pe.bottomRow.name,color:Cn({isCurrent:!1,isBusinessDay:c.isBusinessDay},r)},bottomText:{y:s,label:`${c.dayOfMonth}`,font:d?"700 10px Inter":Pe.bottomRow.number,color:d?r.colors.today:Cn({isCurrent:!1,isBusinessDay:c.isBusinessDay,variant:"bottomRow"},r)}},r),d){const x=l+ye/2,b=o-13/2;e.save(),e.fillStyle=r.colors.today,e.beginPath(),e.roundRect?e.roundRect(x-30/2,b,30,13,5):e.rect(x-30/2,b,30,13),e.fill(),e.fillStyle="#fff",e.font="800 8.5px Inter",e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",x,b+13/2+.5),e.restore()}l+=ye}},Da=(e,n,t,r)=>{let o=-(t.dayOfMonth-1)*_e;const s=Ie;let l=t.month;for(let u=0;u<n;u++){l>=qt&&(l=0);const c=lr(t,u)*_e;Ye({ctx:e,x:o,y:s,width:c,height:et,textYPos:ir,label:_().month(l).format("MMMM").toUpperCase(),font:Pe.bottomRow.number},r),o+=c,l++}},Ea=(e,n,t)=>{let o=0,s=0,i=_(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month();o=-n.dayOfMonth*ye+ye;for(let l=0;l<qt;l++)i>qt-1&&(i=0),s=_(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(l,"months").daysInMonth()*ye,Ye({ctx:e,x:o,y:0,width:s,height:Ie,textYPos:Qt,label:_(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${_(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,font:Pe.topRow},t),o+=s,i++},_a=(e,n,t,r)=>{const o=7*ye,s=Ie,i=e.canvas.width/o+o,l=n.weekOfYear;let u=0;for(let c=0;c<i;c++){const d=_(`${n.year}-${n.month+1}-${n.dayOfMonth}`).day();let h=(l+c)%rr;h<=0&&(h+=rr),d!==1&&c===0&&(u=-d*ye+ye),Ye({ctx:e,x:u,y:s,width:o,height:et,textYPos:ir,label:`${t.toUpperCase()} ${h}`,font:Pe.middleRow},r),u+=o}},Ta=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return o==="yearView"?t?n.colors.tertiary:n.colors.gridBackground:t?n.colors.currentDay:r?n.colors.primary:n.colors.secondary},Pa=(e,n,t,r,o)=>{const s=tt-Ve/1.6,i=tt-Ve/4.5,l=Ie+et;let u=0;for(let c=0;c<n;c++){const d=_(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),h=d.isSame(_(),"week");Ye({ctx:e,x:u,y:l,width:nt,height:Ve,isBottomRow:!0,fillStyle:h?o.colors.today+"26":Ta({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:h?"700 14px Inter":Pe.bottomRow.name,color:h?o.colors.today:Cn({isCurrent:h},o)},bottomText:{y:i,label:r.toUpperCase(),font:Pe.middleRow,color:o.colors.placeholder}},o),u+=nt}},Aa=(e,n,t,r)=>{const s=n.year,i=e.canvas.width*2;let l=0,u=0,c=(cr(s)-t+1)*_e,d=0;for(;l+d<=i;)u>0&&(c=cr(s+u)*_e),d+c>i&&u>0&&(c=Math.ceil((i-d)/_e)*_e),Ye({ctx:e,x:l,y:0,width:c,height:Ie,textYPos:Qt,label:(s+u).toString(),font:Pe.topRow},r),l+=c,d+=c,u++},Ia=(e,n,t,r)=>{const o=Math.floor(n/Et)+2,s=Et*Ce;let u=-_(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Ce+.5*Ce;for(let c=0;c<o;c++){const d=_(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Ye({ctx:e,x:u,y:rt,width:s,height:gt,textYPos:rt+gt/2+2,label:d,font:Pe.bottomRow.number},r),u+=s}},Oa=(e,n,t,r)=>{const o=Math.ceil(n/Et),s=_(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),l=s.month(),u=i.add(1,"day").month(),c=l===u?1:2;let d=.5*Ce;for(let h=0;h<c;h++){const y=_(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),b=_(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),M=b.format("MMMM").toUpperCase(),g=b.diff(y,"hour")+1,W=h===0?g*Ce:n*Ce;Ye({ctx:e,x:d,y:0,width:W,height:rt,textYPos:Qt,label:M,font:Pe.topRow},r),d+=W}},Ya=(e,n,t,r)=>{let o=0;const s=rt+gt,i=_(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=Ce;for(let u=0;u<n;u++){const c=i.add(u,"hours").format("h:00a").toUpperCase();Ye({ctx:e,x:o,y:s,width:l,height:Kt,label:c,font:Pe.bottomRow.hoursInDay,textYPos:rt+gt+Kt/2+2,labelBetweenCells:!0},r),o+=Ce}},La=(e,n,t,r,o,s,i)=>{switch(n){case 0:Aa(e,r,s,i),Da(e,t,r,i),Pa(e,t,r,o,i);break;case 1:Ea(e,r,i),_a(e,r,o,i),$a(e,t,r,i);break;case 2:Oa(e,t,r,i),Ia(e,t,r,i),Ya(e,t,r,i);break}},Na=k.div`
  position: sticky;
  top: 0;
  z-index: 1;
`,Fa=k.div`
  position: sticky;
  left: ${Ee}px;
  width: calc(${({$width:e})=>e}px - ${Ee}px);
  z-index: 3;
`,Ha=k.div`
  height: ${tt}px;
  display: block;
`,Wa=k.canvas``,Ba={transfer:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 8h13l-3-3"}),a.jsx("path",{d:"M20 16H7l3 3"})]}),sun:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"4"}),a.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),a.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),a.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:a.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 3 2 20h20z"}),a.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),a.jsx("path",{d:"M12 7.5V12l3 2"})]})},ze=({name:e,className:n,strokeWidth:t=2})=>a.jsx("svg",{className:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Ba[e]}),za=k.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,_r=k.span`
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
`,At=k.span`
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
`,ja=k.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: #b4791e;
  background: #fbf1de;
  border: 1px solid #e9d3a6;
  padding: 1px 5px;
  border-radius: 5px;
`,Za=k.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,Va=k.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,Ga=k.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,Xa=k.span`
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
`,Ua=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Ka=()=>a.jsxs(za,{children:[a.jsx(_r,{children:"Leyenda"}),a.jsxs(At,{children:[a.jsx(ze,{name:"transfer"})," Transfer"]}),a.jsxs(At,{children:[a.jsx(ze,{name:"sun"})," Gira 1 día"]}),a.jsxs(At,{children:[a.jsx(ze,{name:"tour"})," Gira multidía"]}),a.jsxs(At,{children:[a.jsx(ja,{children:"SUB"})," Subcontrato"]}),a.jsx(Za,{}),a.jsxs(_r,{children:["Estado ",a.jsx("em",{children:"franja izq. + punto esq."})]}),Ua.map(e=>a.jsxs(Va,{children:[a.jsx(Ga,{style:{background:e.stripe}}),a.jsx(Xa,{style:{color:e.color},children:a.jsx(ze,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),qa=p.forwardRef(function({zoom:n,topBarWidth:t,showThemeToggle:r,toggleTheme:o},s){const{week:i}=Xe(),{date:l,cols:u,dayOfYear:c,startDate:d,config:h}=Be(),y=p.useRef(null),x=Dt(),b=p.useCallback(M=>{const g=un(),U=(n===2?ns:tt)+1;gr(M,g,U),La(M,n,u,d,i,c,x)},[u,c,d,i,n,x]);return p.useEffect(()=>{if(!y.current)return;const M=y.current.getContext("2d");if(!M)return;const g=()=>b(M);return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[b]),p.useEffect(()=>{const M=y.current;if(!M)return;M.style.letterSpacing="1px";const g=M.getContext("2d");g&&b(g)},[l,n,b]),a.jsxs(Na,{ref:s,children:[(h.showTopbar!==!1||h.showLegend!==!1)&&a.jsxs(Fa,{$width:t,children:[h.showTopbar!==!1&&a.jsx(Gi,{width:t,showThemeToggle:r,toggleTheme:o}),h.showLegend!==!1&&a.jsx(Ka,{})]}),a.jsx(Ha,{id:ss,children:a.jsx(Wa,{ref:y})})]})}),Ja=(e,n,t)=>{let r;switch(t){case 0:r=_e;break;case 2:r=Ce;break;default:r=ye}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),l=n.startDate.startOf("day"),u=n.endDate.startOf("day"),c=()=>{let d;switch(t){case 2:d=(e.startDate.diff(n.startDate,"minute")/we+1)*r-r/2;break;default:d=s.diff(l,"day")*r}return Math.max(0,d)};if(e.startDate.isAfter(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/we*r,50);break;default:d=Math.max(i.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(n.startDate,"minute")/we*r+.5*r,50);break;default:d=Math.max(i.diff(l,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isAfter(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(e.startDate,"minute")/we*r,50);break;default:d=Math.max(u.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(n.startDate,"minute")/we*r,50);break;default:d=Math.max(u.diff(l,"day")*r+r,50)}return{x:c(),width:d}}return{x:c(),width:50}},Qa=(e,n,t,r,o,s)=>{const i=e*de+is,l=n.hour(),u=t.hour();let c,d,h,y;switch(s){case 2:{c=_(r),d=_(o),h=_(n).hour(l).minute(0),y=_(t).hour(u).minute(0);break}default:{c=_(r).hour(0).minute(0),d=_(o).hour(23).minute(59),h=n,y=t;break}}return{...Ja({startDate:c,endDate:d},{startDate:h,endDate:y},s),y:i}},Tr=e=>{if(!e)return"white";const n=[];for(let o=1;o<6;o+=2)n.push(parseInt(e.slice(o,o+2),16)/255);const t=n.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};k.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,k.p`
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
`;const Ra=k.button`
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
`,ec=k.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`,tc=k.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,Pr=k.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,nc=k.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,rc=k.span`
  ${Re}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,oc=k.span`
  ${Re}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,sc=k.span`
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
`,ic=k.div`
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
`,Ar=k.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,ac=k.span`
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
`,Ir=k.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,cc=k.div`
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
`,Or=k.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,lc=k.span`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid #fff;
`,dc=34,uc={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},fc="#3E8E5A",hc="#D98A22",pc=({row:e,data:n,zoom:t,isSubcontract:r=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:l=!0,yOffset:u=0})=>{const{date:c}=Be(),d=dn(c,t),{y:h,x:y,width:x}=Qa(e,d.startDate,d.endDate,n.startDate,n.endDate,t),{colors:b}=Dt(),M=p.useRef(null),g=_(n.startDate).isSame(_(n.endDate),"day"),W=n.eventType===mt.Tour,U=n.eventType===mt.Transfer,Z=g&&(W||U),I=G=>{M.current={x:G.clientX,y:G.clientY},l&&s&&(G.preventDefault(),s(n,G))},f=G=>{if(M.current){const R=Math.abs(G.clientX-M.current.x),$=Math.abs(G.clientY-M.current.y);Math.sqrt(R*R+$*$)<=5&&(o==null||o(n)),M.current=null}else o==null||o(n)},v={left:`${y}px`,top:`${h+u}px`,backgroundColor:`${n.bgColor??b.defaultTile}`,width:`${x}px`,color:Tr(n.bgColor??"")},S=!r&&n.readiness?uc[n.readiness]:null,T=r&&n.subcontractConfirmed===!1,P=r?T?hc:fc:S==null?void 0:S.stripe,z=G=>a.jsxs(Ra,{"data-segment-id":n.segmentId,style:v,onClick:f,onMouseDown:I,onDragStart:R=>R.preventDefault(),isDraggable:l,isDragging:i,$unconfirmed:T,children:[P&&a.jsx(ec,{style:{background:P}}),G]});return z(Z?a.jsxs(a.Fragment,{children:[r&&a.jsx(Ar,{$sm:!0,children:a.jsx(Ir,{children:"SUB"})}),a.jsxs(cc,{children:[a.jsx(ze,{name:U?"transfer":"sun",strokeWidth:2.4}),x>=dc&&a.jsxs(a.Fragment,{children:[a.jsx(Or,{children:_(n.startDate).format("HH:mm")}),!U&&a.jsx(Or,{$end:!0,children:_(n.endDate).format("HH:mm")})]}),S&&a.jsx(lc,{style:{background:S.color}})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Ar,{children:r?a.jsx(Ir,{children:"SUB"}):S&&a.jsx(ac,{style:{color:S.color},children:a.jsx(ze,{name:S.icon,strokeWidth:S.icon==="check"?2.6:2.2})})}),a.jsxs(tc,{children:[a.jsxs(Pr,{$pad:!0,children:[a.jsx(nc,{children:a.jsx(ze,{name:U?"transfer":"tour"})}),a.jsx(rc,{children:n.title})]}),a.jsxs(Pr,{children:[n.bookingNumber&&a.jsx(sc,{children:n.bookingNumber}),n.subtitle&&a.jsx(oc,{children:n.subtitle})]}),n.driver&&a.jsxs(ic,{children:[a.jsx(ze,{name:"person"}),n.driver]})]})]}))},Yr=(e,n)=>{let t=0;for(const r of n)e>=r&&t++;return t*De},gc=k.div`
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
`,mc=({data:e,zoom:n,onTileClick:t,onDragStart:r,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const l=p.useCallback(()=>{let u=0;return e.map((c,d)=>{if(d>0&&(u+=Math.max(e[d-1].data.length,1)),!c.data.some(h=>h.length>0)){const h=Yr(u,i);return[a.jsx(gc,{style:{top:`${u*de+h}px`},children:"Disponible"},`dispo-${c.id}`)]}return c.data.map((h,y)=>h.map(x=>{const b=s===x.segmentId,M=o?o(x):!1,g=y+u,W=Yr(g,i);return a.jsx(pc,{row:g,data:x,zoom:n,isSubcontract:c.isSubcontract,onTileClick:t,onDragStart:r,isDragging:b,isDraggable:M,yOffset:W},x.segmentId)}))}).flat(2)},[e,t,n,r,o,s,i]);return a.jsx(a.Fragment,{children:l()})};k.div`
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
`,k.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`,k.label`
  font-size: 14px;
`,k.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`,k.input`
  height: 18px;
  width: 18px;
`,k.button`
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
`,k.form`
  background-color: rgba(255, 255, 255, 0.75);
`;const yc=k.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,vc=k.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,bc=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,xc=k.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,wc=k.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,Sc=k.div`
  ${Qe}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Cc=k.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,kc=k.div`
  padding: 10px 12px;
`,Mc=k.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Lr=k.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Nr=k.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Fr=k.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Hr=k.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Wr=k.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,$c=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Dc=k.div``,Ec=k.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,_c=k.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Tc=k.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Br=k.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,zr=k.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,jr=k.div`
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
`;k.div``,k.span``,k.span``,k.div``,k.div``,k.span``,k.span``,k.div``,k.div``,k.span``,k.span``,k.div``,k.div``,k.div``,k.span``,k.div``,k.div``,k.div``,k.div``,k.p``,k.span``;const Pc={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Ac=({tooltipData:e})=>{const{mouseCoords:n,reservationData:t}=e,r=p.useRef(null),[o,s]=p.useState("below"),i=Xe(),l={...Pc,...i.tooltip};p.useLayoutEffect(()=>{if(!r.current||!n)return;const x=r.current,{width:b,height:M}=x.getBoundingClientRect(),g=x.parentElement;if(!g)return;const W=g.getBoundingClientRect(),U=12,Z=4,I=W.height-n.y,f=W.width-n.x;let v=n.x+U,S=n.y+U,T="below";f<b+U&&(v=n.x-b-U),I<M+U&&(S=n.y-M-U,T="above"),v=Math.max(Z,Math.min(v,W.width-b-Z)),S=Math.max(Z,Math.min(S,W.height-M-Z)),s(T),x.style.left=`${v}px`,x.style.top=`${S}px`},[n]);const u=t.reservationType===mt.Tour,c=u&&t.isOneDayEvent,d=()=>u?c?"oneday":"tour":"transfer",h=()=>u?c?l.oneDay:l.tour:l.transfer,y=[t.groupName&&{label:l.groupName,value:t.groupName},t.driver&&{label:l.driver,value:t.driver},t.passengers&&{label:l.passengers,value:String(t.passengers)},t.flightNumber&&{label:l.flightNumber,value:t.flightNumber}].filter(Boolean);return a.jsxs(yc,{ref:r,$position:o,children:[a.jsxs(vc,{children:[a.jsxs(bc,{children:[a.jsx(xc,{children:t.bookingNumber}),a.jsx(wc,{$type:d(),children:h()})]}),a.jsx(Sc,{children:t.eventName}),t.client&&a.jsx(Cc,{children:t.client})]}),a.jsxs(kc,{children:[a.jsxs(Mc,{children:[a.jsxs(Lr,{children:[a.jsx(Nr,{children:l.startDate}),a.jsxs(Fr,{children:[a.jsx(Hr,{children:t.startDate})," ",a.jsx(Wr,{children:t.startTime})]})]}),u&&t.endDate&&a.jsxs(Lr,{$isEnd:!0,children:[a.jsx(Nr,{children:l.endDate}),a.jsxs(Fr,{children:[a.jsx(Hr,{children:t.endDate})," ",a.jsx(Wr,{children:t.endTime})]})]})]}),y.length>0&&a.jsx($c,{children:y.map((x,b)=>a.jsxs(Dc,{children:[a.jsx(Ec,{children:x.label}),a.jsx(_c,{children:x.value})]},b))}),(t.serviceNotes||t.reservationNotes)&&a.jsxs(Tc,{children:[t.serviceNotes&&a.jsxs(Br,{children:[a.jsx(zr,{children:l.serviceNotes}),a.jsx(jr,{children:t.serviceNotes})]}),t.reservationNotes&&a.jsxs(Br,{children:[a.jsx(zr,{children:l.reservationNotes}),a.jsx(jr,{children:t.reservationNotes})]})]})]})]})};k.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,k.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,k.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`;const Ic=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Oc=k.div`
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
`,Yc=k.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Zr=k.p`
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
`,Lc=k.p`
  ${Qe}
  ${Re}
`,Nc=k.div`
  position: sticky;
  left: ${Ee+16}px;
  overflow: hidden;
`,Fc=k.div`
  position: absolute;
  height: ${Jt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Hc=k.div`
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
`,Wc=k.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Bc=k.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,zc=k.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Vr=k.div`
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
`,Gr=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,Xr=k.div`
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
`,Ur=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,kn=k.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Mn=k.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,ct=k.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,Kr=k.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,jc=({draggedEvent:e,ghostPosition:n,ghostDimensions:t,dropTarget:r,isValidDrop:o,dragState:s,data:i,resourceOnly:l,separatorRowIndices:u=[]})=>{const c=Xe(),d=I=>{let f=0;for(const v of u)v<=I&&f++;return I*de+f*De},[h,y]=p.useState(null),[x,b]=p.useState(0),M=p.useCallback((I=400,f=300)=>{const S=t.width,T=48,P=document.getElementById("react-scheduler");if(!P)return{x:n.x+S+16,y:n.y};const z=P.scrollLeft,G=P.scrollTop,R=P.clientWidth,$=P.clientHeight,E=n.x-z,D=n.y-G,j={left:Ee+16,right:R-16,top:16,bottom:$-16},O=j.right-(E+S),J=E-j.left,ee=j.bottom-(D+T),se=D-j.top;let oe,B;return O>=I+16?oe=E+S+16:J>=I+16?oe=E-I-16:O>=J?(oe=E+S+16,oe+I>j.right&&(oe=j.right-I)):(oe=E-I-16,oe<j.left&&(oe=j.left)),ee>=f+16?B=D+T+16:se>=f+16?B=D-f-16:ee>=se?(B=D+T+16,B+f>j.bottom&&(B=j.bottom-f)):(B=D-f-16,B<j.top&&(B=j.top)),oe=Math.max(j.left,Math.min(oe,j.right-I)),B=Math.max(j.top,Math.min(B,j.bottom-f)),{x:oe+z,y:B+G}},[n.x,n.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&x===0?b(n.x):s==="idle"&&b(0)},[s,e,n.x,x]),p.useEffect(()=>{y(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const g=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const I=[];let f=0;for(const v of i){const S=Math.max(v.data.length,1);if(v.capacity!==void 0&&e.totalPassengers>v.capacity)for(let T=0;T<S;T++)I.push(f+T);f+=S}return I},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const W=s==="animating",U=Tr(e.bgColor??""),Z=()=>{if(!r)return"";const I=_(r.startDate).format("MMM D, HH:mm"),f=_(r.endDate).format("HH:mm");return`${I} - ${f}`};return a.jsxs(Ic,{children:[g.map(I=>a.jsx(Bc,{style:{top:`${d(I)}px`,height:`${de}px`}},I)),r&&s==="dragging"&&a.jsx(Wc,{$isValid:o,$hasConflict:r.hasConflict,style:{top:`${d(r.resourceIndex)}px`,height:`${de}px`}}),r&&s==="dragging"&&!l&&a.jsxs(a.Fragment,{children:[a.jsx(Fc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(de-48)/2}px`,width:`${t.width}px`}}),a.jsx(Hc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(de-48)/2}px`},children:Z()})]}),r&&s==="dragging"&&l&&a.jsx(zc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:"0px",top:`${d(r.resourceIndex)}px`,height:`${de}px`}}),r&&o&&r.hasConflict&&r.conflicts&&r.conflicts.length>0&&s==="dragging"&&(()=>{const I=M(400,300);return a.jsxs(Vr,{style:{left:`${I.x}px`,top:`${I.y}px`},children:[a.jsxs(Gr,{children:[a.jsx(Xr,{children:"!"}),r.conflicts.length," ",r.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),a.jsx(Ur,{children:r.conflicts.map((f,v)=>{const S=_(r.startDate).format("YYYY-MM-DD"),T=_(r.endDate).format("YYYY-MM-DD"),P=_(f.event.startDate).format("YYYY-MM-DD"),z=_(f.event.endDate).format("YYYY-MM-DD"),G=_(f.conflictStart).format("YYYY-MM-DD"),R=_(f.conflictEnd).format("YYYY-MM-DD"),$=S!==T,E=P!==z,D=G!==R,j=$?_(r.startDate).format("MMM D, h:mm A"):_(r.startDate).format("h:mm A"),O=$?_(r.endDate).format("MMM D, h:mm A"):_(r.endDate).format("h:mm A"),J=E?_(f.event.startDate).format("MMM D, h:mm A"):_(f.event.startDate).format("h:mm A"),ee=E?_(f.event.endDate).format("MMM D, h:mm A"):_(f.event.endDate).format("h:mm A"),se=D?_(f.conflictStart).format("MMM D, h:mm A"):_(f.conflictStart).format("h:mm A"),oe=D?_(f.conflictEnd).format("MMM D, h:mm A"):_(f.conflictEnd).format("h:mm A"),B=D?"":_(f.conflictStart).format("MMM D"),V=r.startDate.getTime(),K=r.endDate.getTime(),X=f.event.startDate.getTime(),w=f.event.endDate.getTime(),A=V>=X&&V<w,m=K>X&&K<=w,L=V<=X&&K>=w,F=X<=V&&w>=K;let Y=!1,C=!1,te=!1,N=!1,q="";return L||F?(Y=!0,C=!0,te=!0,N=!0,q=`⚠️ ${c.conflicts.changeBoth}`):A&&m?(Y=!0,C=!0,te=!0,N=!0,q=`⚠️ ${c.conflicts.changeBoth}`):A?(Y=!0,N=!0,q=`⚠️ ${c.conflicts.changeStart}`):m&&(C=!0,te=!0,q=`⚠️ ${c.conflicts.changeEnd}`),a.jsxs(kn,{children:[a.jsxs(Mn,{children:[c.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(ct,{children:[a.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",Y?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:j}):j," ",c.conflicts.to," ",C?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:O}):O]}),a.jsxs(ct,{children:[a.jsx("strong",{children:f.event.title})," ",c.conflicts.currentlyAt,":"," ",te?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:J}):J," ",c.conflicts.to," ",N?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ee}):ee]}),a.jsxs(Kr,{children:[c.conflicts.conflictTime,": ",B&&`${B}, `,se," - ",oe]}),q&&a.jsx(ct,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:q})]},v)})})]})})(),r&&o&&!r.hasConflict&&r.nearbyEvents&&r.nearbyEvents.length>0&&s==="dragging"&&(()=>{const I=M(400,400);return a.jsxs(Vr,{style:{left:`${I.x}px`,top:`${I.y}px`,borderColor:"#4CAF50"},children:[a.jsxs(Gr,{style:{color:"#2E7D32"},children:[a.jsx(Xr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),r.nearbyEvents.length," ",r.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),a.jsxs(Ur,{children:[(()=>{const f=r.nearbyEvents.some(P=>P.position==="before"),v=r.nearbyEvents.some(P=>P.position==="after"),S=_(r.startDate).format("h:mm A"),T=_(r.endDate).format("h:mm A");return a.jsxs(kn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[a.jsxs(Mn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),a.jsxs(ct,{style:{fontWeight:600},children:[_(r.startDate).format("MMM D"),":"," ",f?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",c.conflicts.to," ",v?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:T}):T]}),a.jsx(ct,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),r.nearbyEvents.map((f,v)=>{const S=_(f.event.startDate).format("YYYY-MM-DD"),T=_(f.event.endDate).format("YYYY-MM-DD"),P=S!==T,z=P?_(f.event.startDate).format("MMM D, h:mm A"):_(f.event.startDate).format("h:mm A"),G=P?_(f.event.endDate).format("MMM D, h:mm A"):_(f.event.endDate).format("h:mm A"),R=_(f.event.startDate).format("MMM D"),$=Math.floor(f.timeGap/(1e3*60*60)),E=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),D=$>0?`${$}h ${E}m`:`${E}m`,j=f.position==="after",O=f.position==="before";return a.jsxs(kn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[a.jsxs(Mn,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(ct,{children:[!P&&`${R}: `,j?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:z}):z," ",c.conflicts.to," ",O?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:G}):G]}),a.jsxs(Kr,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[D," ",f.position==="before"?c.conflicts.before:c.conflicts.after]})]},v)})]})]})})(),a.jsx(Oc,{$isAnimating:W,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:W?`${(h==null?void 0:h.x)??0}px`:"0",top:W?`${(h==null?void 0:h.y)??0}px`:"0",transform:W?void 0:`translate3d(${l?x:n.x}px, ${n.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:U},children:a.jsx(Yc,{children:a.jsxs(Nc,{children:[a.jsx(Zr,{$bold:!0,children:e.title}),e.subtitle&&a.jsx(Zr,{children:e.subtitle}),e.description&&a.jsx(Lc,{children:e.description})]})})})]})},Zc=$t`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,Vc=k.div`
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
  animation: ${Zc} 1.5s ease-in-out infinite;
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
`,Gc=({selectionBox:e,isSelecting:n})=>!e||!n?null:a.jsx(Vc,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Xc=$t`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Uc=k.div`
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
  animation: ${Xc} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,Kc=k.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,qc=k.span`
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
`,Jc=k.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Qc=k.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;k.div`
  display: none;
`,k.div`
  display: none;
`,k.button`
  display: none;
`;const Rc=k.div`
  display: flex;
  gap: 8px;
`,qr=k.button`
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
`,el=({selections:e,onConfirm:n,onClear:t})=>{var b;const o=Xe().multiSelect,s=p.useMemo(()=>e.filter(M=>M.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((b=o==null?void 0:o.conflictsWarning)==null?void 0:b.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const y=s>0,x=a.jsxs(Uc,{$hasConflicts:y,"data-multi-select-ui":!0,children:[a.jsxs(Kc,{children:[a.jsxs(qc,{$hasConflicts:y,children:[e.length," ",i]}),y&&a.jsxs(Jc,{children:["⚠️ ",h]}),a.jsx(Qc,{children:l})]}),a.jsxs(Rc,{children:[a.jsxs(qr,{variant:"secondary",onClick:t,children:["✕ ",u]}),a.jsx(qr,{variant:"primary",$hasConflicts:y,onClick:n,children:y?`⚠️ ${d}`:`✓ ${c}`})]})]});return Qr.createPortal(x,document.body)},tl=$t`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,nl=k.div`
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
  animation: ${tl} 0.2s ease-out;
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
`,rl=k.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,ol=k.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,sl=k.button`
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
`,il=({selections:e,data:n,zoom:t,startDate:r,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[l,u]=p.useState(null),[c,d]=p.useState({x:0,y:0}),h=p.useRef(null),y=p.useMemo(()=>{switch(t){case 0:return _e*7;case 1:return ye;case 2:return Ce;default:return ye}},[t]),x=p.useMemo(()=>_().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0),[r]),b=p.useMemo(()=>e.map((v,S)=>{let T=0,P=!1;for(const J of n){if(J.id===v.resourceId){P=!0;break}T+=Math.max(J.data.length,1)}if(!P)return null;const z=_(v.startDate),G=_(v.endDate);let R,$;switch(t){case 0:R=Math.floor(z.diff(x,"days")/7),$=Math.max(1,Math.ceil(G.diff(z,"days")/7)+1);break;case 1:R=z.diff(x,"days"),$=Math.max(1,G.diff(z,"days")+1);break;case 2:R=z.diff(x,"hours"),$=Math.max(1,G.diff(z,"hours")+1);break;default:R=0,$=1}const E=R*y;let D=0;for(const J of i)J<=T&&D++;const j=T*de+D*De,O=$*y;return{index:S,selection:v,x:E,y:j,width:O,height:de}}),[e,n,t,x,y]),M=(v,S)=>{const T=_(v).format("MMM D"),P=_(S).format("MMM D");return T===P?T:`${T} - ${P}`},g=v=>!v.hasConflict||!v.conflicts?"":`⚠️ Conflicts with:
${v.conflicts.map(T=>{const P=(T.overlapDuration/36e5).toFixed(1);return`• ${T.event.title} (${P}h overlap)`}).join(`
`)}`,W=p.useCallback(v=>{let S=0;for(const T of n){const P=Math.max(T.data.length,1);if(v>=S*de&&v<(S+P)*de)return{resourceId:T.id,resourceLabel:T.label};S+=P}return null},[n]),U=p.useCallback(v=>{const S=Math.floor(v/y);switch(t){case 0:return x.add(S*7,"days").toDate();case 1:return x.add(S,"days").toDate();case 2:return x.add(S,"hours").toDate();default:return x.toDate()}},[t,x,y]),Z=p.useCallback((v,S)=>{!s||(v.preventDefault(),v.stopPropagation(),!b[S])||(h.current={x:v.clientX,y:v.clientY},u(S),d({x:0,y:0}))},[s,b]),I=p.useCallback(v=>{if(l===null||!h.current)return;const S=v.clientX-h.current.x,T=v.clientY-h.current.y,P=Math.round(S/y)*y,z=Math.round(T/de)*de;d({x:P,y:z})},[l,y]),f=p.useCallback(()=>{if(l===null||!s){u(null),d({x:0,y:0}),h.current=null;return}const v=b[l];if(!v){u(null),d({x:0,y:0}),h.current=null;return}const S=v.x+c.x,T=v.y+c.y,P=W(T+de/2);if(!P){u(null),d({x:0,y:0}),h.current=null;return}const z=U(S),G=e[l],R=G.endDate.getTime()-G.startDate.getTime(),$=new Date(z.getTime()+R);s(l,{startDate:z,endDate:$,resourceId:P.resourceId,resourceLabel:P.resourceLabel}),u(null),d({x:0,y:0}),h.current=null},[l,c,b,e,s,W,U]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",I),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",f)}},[l,I,f]),a.jsx(a.Fragment,{children:b.map(v=>{if(!v)return null;const S=v.selection.hasConflict||!1,T=l===v.index,P=T?v.x+c.x:v.x,z=T?v.y+c.y:v.y;return a.jsxs(nl,{$hasConflict:S,$isDragging:T,style:{left:P,top:z,width:v.width,height:v.height},"data-multi-select-ui":!0,onMouseDown:G=>Z(G,v.index),children:[S&&a.jsx(ol,{title:g(v.selection),children:"⚠️"}),a.jsx(rl,{$hasConflict:S,children:M(v.selection.startDate,v.selection.endDate)}),a.jsx(sl,{onClick:G=>{G.stopPropagation(),o(v.index)},onMouseDown:G=>G.stopPropagation(),title:S?"Remove conflicting selection":"Remove selection",children:"×"})]},v.index)})})},al=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,cl=({zoom:e,startDate:n})=>{const{cols:t}=Be(),r=p.useMemo(()=>{if(e===2)return null;const o=e===0?_e*7:ye,s=_().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"),i=_().startOf("day"),l=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,n,t]);return r?a.jsx(al,{style:{left:`${r.x}px`,width:`${r.width}px`},"aria-hidden":!0}):null},Bl="";$e.Scheduler=Qi,Object.defineProperty($e,Symbol.toStringTag,{value:"Module"})});
