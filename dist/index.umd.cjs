(function(ke,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],c):(ke=typeof globalThis<"u"?globalThis:ke||self,c(ke["react-scheduler"]={},ke["react/jsx-runtime"],ke.React,ke.ReactDOM))})(this,function(ke,c,p,Kr){"use strict";var cl=Object.defineProperty;var ll=(ke,c,p)=>c in ke?cl(ke,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):ke[c]=p;var Ur=(ke,c,p)=>(ll(ke,typeof c!="symbol"?c+"":c,p),p);function qr(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const re=qr(p);var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lt={},Jr={get exports(){return lt},set exports(e){lt=e}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cn;function Qr(){if(Cn)return pe;Cn=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function M(g){if(typeof g=="object"&&g!==null){var H=g.$$typeof;switch(H){case e:switch(g=g.type,g){case t:case o:case r:case a:case d:return g;default:switch(g=g&&g.$$typeof,g){case l:case i:case u:case y:case h:case s:return g;default:return H}}case n:return H}}}return pe.ContextConsumer=i,pe.ContextProvider=s,pe.Element=e,pe.ForwardRef=u,pe.Fragment=t,pe.Lazy=y,pe.Memo=h,pe.Portal=n,pe.Profiler=o,pe.StrictMode=r,pe.Suspense=a,pe.SuspenseList=d,pe.isAsyncMode=function(){return!1},pe.isConcurrentMode=function(){return!1},pe.isContextConsumer=function(g){return M(g)===i},pe.isContextProvider=function(g){return M(g)===s},pe.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},pe.isForwardRef=function(g){return M(g)===u},pe.isFragment=function(g){return M(g)===t},pe.isLazy=function(g){return M(g)===y},pe.isMemo=function(g){return M(g)===h},pe.isPortal=function(g){return M(g)===n},pe.isProfiler=function(g){return M(g)===o},pe.isStrictMode=function(g){return M(g)===r},pe.isSuspense=function(g){return M(g)===a},pe.isSuspenseList=function(g){return M(g)===d},pe.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===t||g===o||g===r||g===a||g===d||g===x||typeof g=="object"&&g!==null&&(g.$$typeof===y||g.$$typeof===h||g.$$typeof===s||g.$$typeof===i||g.$$typeof===u||g.$$typeof===b||g.getModuleId!==void 0)},pe.typeOf=M,pe}var ge={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kn;function Rr(){return kn||(kn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b=!1,M=!1,g=!1,H=!1,Q=!1,Z;Z=Symbol.for("react.module.reference");function P(L){return!!(typeof L=="string"||typeof L=="function"||L===t||L===o||Q||L===r||L===a||L===d||H||L===x||b||M||g||typeof L=="object"&&L!==null&&(L.$$typeof===y||L.$$typeof===h||L.$$typeof===s||L.$$typeof===i||L.$$typeof===u||L.$$typeof===Z||L.getModuleId!==void 0))}function f(L){if(typeof L=="object"&&L!==null){var q=L.$$typeof;switch(q){case e:var te=L.type;switch(te){case t:case o:case r:case a:case d:return te;default:var W=te&&te.$$typeof;switch(W){case l:case i:case u:case y:case h:case s:return W;default:return q}}case n:return q}}}var m=i,S=s,_=e,A=u,j=t,G=y,U=h,E=n,T=o,D=r,N=a,O=d,J=!1,ee=!1;function se(L){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function oe(L){return ee||(ee=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function B(L){return f(L)===i}function V(L){return f(L)===s}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===e}function K(L){return f(L)===u}function w(L){return f(L)===t}function F(L){return f(L)===y}function v(L){return f(L)===h}function Y(L){return f(L)===n}function z(L){return f(L)===o}function I(L){return f(L)===r}function C(L){return f(L)===a}function R(L){return f(L)===d}ge.ContextConsumer=m,ge.ContextProvider=S,ge.Element=_,ge.ForwardRef=A,ge.Fragment=j,ge.Lazy=G,ge.Memo=U,ge.Portal=E,ge.Profiler=T,ge.StrictMode=D,ge.Suspense=N,ge.SuspenseList=O,ge.isAsyncMode=se,ge.isConcurrentMode=oe,ge.isContextConsumer=B,ge.isContextProvider=V,ge.isElement=X,ge.isForwardRef=K,ge.isFragment=w,ge.isLazy=F,ge.isMemo=v,ge.isPortal=Y,ge.isProfiler=z,ge.isStrictMode=I,ge.isSuspense=C,ge.isSuspenseList=R,ge.isValidElementType=P,ge.typeOf=f}()),ge}(function(e){process.env.NODE_ENV==="production"?e.exports=Qr():e.exports=Rr()})(Jr);function eo(e){function n(B,V,X,K,w){for(var F=0,v=0,Y=0,z=0,I,C,R=0,L=0,q,te=q=I=0,W=0,ie=0,he=0,de=0,ae=X.length,le=ae-1,ce,ne="",fe="",Se="",Ee="",De;W<ae;){if(C=X.charCodeAt(W),W===le&&v+z+Y+F!==0&&(v!==0&&(C=v===47?10:47),z=Y=F=0,ae++,le++),v+z+Y+F===0){if(W===le&&(0<ie&&(ne=ne.replace(y,"")),0<ne.trim().length)){switch(C){case 32:case 9:case 59:case 13:case 10:break;default:ne+=X.charAt(W)}C=59}switch(C){case 123:for(ne=ne.trim(),I=ne.charCodeAt(0),q=1,de=++W;W<ae;){switch(C=X.charCodeAt(W)){case 123:q++;break;case 125:q--;break;case 47:switch(C=X.charCodeAt(W+1)){case 42:case 47:e:{for(te=W+1;te<le;++te)switch(X.charCodeAt(te)){case 47:if(C===42&&X.charCodeAt(te-1)===42&&W+2!==te){W=te+1;break e}break;case 10:if(C===47){W=te+1;break e}}W=te}}break;case 91:C++;case 40:C++;case 34:case 39:for(;W++<le&&X.charCodeAt(W)!==C;);}if(q===0)break;W++}switch(q=X.substring(de,W),I===0&&(I=(ne=ne.replace(h,"").trim()).charCodeAt(0)),I){case 64:switch(0<ie&&(ne=ne.replace(y,"")),C=ne.charCodeAt(1),C){case 100:case 109:case 115:case 45:ie=V;break;default:ie=N}if(q=n(V,ie,q,C,w+1),de=q.length,0<J&&(ie=t(N,ne,he),De=l(3,q,ie,V,E,U,de,C,w,K),ne=ie.join(""),De!==void 0&&(de=(q=De.trim()).length)===0&&(C=0,q="")),0<de)switch(C){case 115:ne=ne.replace(m,i);case 100:case 109:case 45:q=ne+"{"+q+"}";break;case 107:ne=ne.replace(Q,"$1 $2"),q=ne+"{"+q+"}",q=D===1||D===2&&s("@"+q,3)?"@-webkit-"+q+"@"+q:"@"+q;break;default:q=ne+q,K===112&&(q=(fe+=q,""))}else q="";break;default:q=n(V,t(V,ne,he),q,K,w+1)}Se+=q,q=he=ie=te=I=0,ne="",C=X.charCodeAt(++W);break;case 125:case 59:if(ne=(0<ie?ne.replace(y,""):ne).trim(),1<(de=ne.length))switch(te===0&&(I=ne.charCodeAt(0),I===45||96<I&&123>I)&&(de=(ne=ne.replace(" ",":")).length),0<J&&(De=l(1,ne,V,B,E,U,fe.length,K,w,K))!==void 0&&(de=(ne=De.trim()).length)===0&&(ne="\0\0"),I=ne.charCodeAt(0),C=ne.charCodeAt(1),I){case 0:break;case 64:if(C===105||C===99){Ee+=ne+X.charAt(W);break}default:ne.charCodeAt(de-1)!==58&&(fe+=o(ne,I,C,ne.charCodeAt(2)))}he=ie=te=I=0,ne="",C=X.charCodeAt(++W)}}switch(C){case 13:case 10:v===47?v=0:1+I===0&&K!==107&&0<ne.length&&(ie=1,ne+="\0"),0<J*se&&l(0,ne,V,B,E,U,fe.length,K,w,K),U=1,E++;break;case 59:case 125:if(v+z+Y+F===0){U++;break}default:switch(U++,ce=X.charAt(W),C){case 9:case 32:if(z+F+v===0)switch(R){case 44:case 58:case 9:case 32:ce="";break;default:C!==32&&(ce=" ")}break;case 0:ce="\\0";break;case 12:ce="\\f";break;case 11:ce="\\v";break;case 38:z+v+F===0&&(ie=he=1,ce="\f"+ce);break;case 108:if(z+v+F+T===0&&0<te)switch(W-te){case 2:R===112&&X.charCodeAt(W-3)===58&&(T=R);case 8:L===111&&(T=L)}break;case 58:z+v+F===0&&(te=W);break;case 44:v+Y+z+F===0&&(ie=1,ce+="\r");break;case 34:case 39:v===0&&(z=z===C?0:z===0?C:z);break;case 91:z+v+Y===0&&F++;break;case 93:z+v+Y===0&&F--;break;case 41:z+v+F===0&&Y--;break;case 40:if(z+v+F===0){if(I===0)switch(2*R+3*L){case 533:break;default:I=1}Y++}break;case 64:v+Y+z+F+te+q===0&&(q=1);break;case 42:case 47:if(!(0<z+F+Y))switch(v){case 0:switch(2*C+3*X.charCodeAt(W+1)){case 235:v=47;break;case 220:de=W,v=42}break;case 42:C===47&&R===42&&de+2!==W&&(X.charCodeAt(de+2)===33&&(fe+=X.substring(de,W+1)),ce="",v=0)}}v===0&&(ne+=ce)}L=R,R=C,W++}if(de=fe.length,0<de){if(ie=V,0<J&&(De=l(2,fe,ie,B,E,U,de,K,w,K),De!==void 0&&(fe=De).length===0))return Ee+fe+Se;if(fe=ie.join(",")+"{"+fe+"}",D*T!==0){switch(D!==2||s(fe,2)||(T=0),T){case 111:fe=fe.replace(P,":-moz-$1")+fe;break;case 112:fe=fe.replace(Z,"::-webkit-input-$1")+fe.replace(Z,"::-moz-$1")+fe.replace(Z,":-ms-input-$1")+fe}T=0}}return Ee+fe+Se}function t(B,V,X){var K=V.trim().split(g);V=K;var w=K.length,F=B.length;switch(F){case 0:case 1:var v=0;for(B=F===0?"":B[0]+" ";v<w;++v)V[v]=r(B,V[v],X).trim();break;default:var Y=v=0;for(V=[];v<w;++v)for(var z=0;z<F;++z)V[Y++]=r(B[z]+" ",K[v],X).trim()}return V}function r(B,V,X){var K=V.charCodeAt(0);switch(33>K&&(K=(V=V.trim()).charCodeAt(0)),K){case 38:return V.replace(H,"$1"+B.trim());case 58:return B.trim()+V.replace(H,"$1"+B.trim());default:if(0<1*X&&0<V.indexOf("\f"))return V.replace(H,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+V}function o(B,V,X,K){var w=B+";",F=2*V+3*X+4*K;if(F===944){B=w.indexOf(":",9)+1;var v=w.substring(B,w.length-1).trim();return v=w.substring(0,B).trim()+v+";",D===1||D===2&&s(v,1)?"-webkit-"+v+v:v}if(D===0||D===2&&!s(w,1))return w;switch(F){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(G,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return v=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+v+"-webkit-"+w+"-ms-flex-pack"+v+w;case 1005:return b.test(w)?w.replace(x,":-webkit-")+w.replace(x,":-moz-")+w:w;case 1e3:switch(v=w.substring(13).trim(),V=v.indexOf("-")+1,v.charCodeAt(0)+v.charCodeAt(V)){case 226:v=w.replace(f,"tb");break;case 232:v=w.replace(f,"tb-rl");break;case 220:v=w.replace(f,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+v+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(V=(w=B).length-10,v=(w.charCodeAt(V)===33?w.substring(0,V):w).substring(B.indexOf(":",7)+1).trim(),F=v.charCodeAt(0)+(v.charCodeAt(7)|0)){case 203:if(111>v.charCodeAt(8))break;case 115:w=w.replace(v,"-webkit-"+v)+";"+w;break;case 207:case 102:w=w.replace(v,"-webkit-"+(102<F?"inline-":"")+"box")+";"+w.replace(v,"-webkit-"+v)+";"+w.replace(v,"-ms-"+v+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return v=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+v+"-ms-flex-"+v+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(_,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(_,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(j.test(B)===!0)return(v=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?o(B.replace("stretch","fill-available"),V,X,K).replace(":fill-available",":stretch"):w.replace(v,"-webkit-"+v)+w.replace(v,"-moz-"+v.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,X+K===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(M,"$1-webkit-$2")+w}return w}function s(B,V){var X=B.indexOf(V===1?":":"{"),K=B.substring(0,V!==3?X:10);return X=B.substring(X+1,B.length-1),ee(V!==2?K:K.replace(A,"$1"),X,V)}function i(B,V){var X=o(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return X!==V+";"?X.replace(S," or ($1)").substring(4):"("+V+")"}function l(B,V,X,K,w,F,v,Y,z,I){for(var C=0,R=V,L;C<J;++C)switch(L=O[C].call(d,B,R,X,K,w,F,v,Y,z,I)){case void 0:case!1:case!0:case null:break;default:R=L}if(R!==V)return R}function u(B){switch(B){case void 0:case null:J=O.length=0;break;default:if(typeof B=="function")O[J++]=B;else if(typeof B=="object")for(var V=0,X=B.length;V<X;++V)u(B[V]);else se=!!B|0}return u}function a(B){return B=B.prefix,B!==void 0&&(ee=null,B?typeof B!="function"?D=1:(D=2,ee=B):D=0),a}function d(B,V){var X=B;if(33>X.charCodeAt(0)&&(X=X.trim()),oe=X,X=[oe],0<J){var K=l(-1,V,X,X,E,U,0,0,0,0);K!==void 0&&typeof K=="string"&&(V=K)}var w=n(N,X,V,0,0);return 0<J&&(K=l(-2,w,X,X,E,U,w.length,0,0,0),K!==void 0&&(w=K)),oe="",T=0,U=E=1,w}var h=/^\0+/g,y=/[\0\r\f]/g,x=/: */g,b=/zoo|gra/,M=/([,: ])(transform)/g,g=/,\r+?/g,H=/([\t\r\n ])*\f?&/g,Q=/@(k\w+)\s*(\S*)\s*/,Z=/::(place)/g,P=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,m=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,_=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,U=1,E=1,T=0,D=1,N=[],O=[],J=0,ee=null,se=0,oe="";return d.use=u,d.set=a,e!==void 0&&a(e),d}var to={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function no(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var ro=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Mn=no(function(e){return ro.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Pt={},oo={get exports(){return Pt},set exports(e){Pt=e}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dn;function so(){if(Dn)return me;Dn=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,H=e?Symbol.for("react.responder"):60118,Q=e?Symbol.for("react.scope"):60119;function Z(f){if(typeof f=="object"&&f!==null){var m=f.$$typeof;switch(m){case n:switch(f=f.type,f){case u:case a:case r:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case l:case d:case b:case x:case i:return f;default:return m}}case t:return m}}}function P(f){return Z(f)===a}return me.AsyncMode=u,me.ConcurrentMode=a,me.ContextConsumer=l,me.ContextProvider=i,me.Element=n,me.ForwardRef=d,me.Fragment=r,me.Lazy=b,me.Memo=x,me.Portal=t,me.Profiler=s,me.StrictMode=o,me.Suspense=h,me.isAsyncMode=function(f){return P(f)||Z(f)===u},me.isConcurrentMode=P,me.isContextConsumer=function(f){return Z(f)===l},me.isContextProvider=function(f){return Z(f)===i},me.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===n},me.isForwardRef=function(f){return Z(f)===d},me.isFragment=function(f){return Z(f)===r},me.isLazy=function(f){return Z(f)===b},me.isMemo=function(f){return Z(f)===x},me.isPortal=function(f){return Z(f)===t},me.isProfiler=function(f){return Z(f)===s},me.isStrictMode=function(f){return Z(f)===o},me.isSuspense=function(f){return Z(f)===h},me.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===a||f===s||f===o||f===h||f===y||typeof f=="object"&&f!==null&&(f.$$typeof===b||f.$$typeof===x||f.$$typeof===i||f.$$typeof===l||f.$$typeof===d||f.$$typeof===g||f.$$typeof===H||f.$$typeof===Q||f.$$typeof===M)},me.typeOf=Z,me}var ye={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $n;function io(){return $n||($n=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,H=e?Symbol.for("react.responder"):60118,Q=e?Symbol.for("react.scope"):60119;function Z(C){return typeof C=="string"||typeof C=="function"||C===r||C===a||C===s||C===o||C===h||C===y||typeof C=="object"&&C!==null&&(C.$$typeof===b||C.$$typeof===x||C.$$typeof===i||C.$$typeof===l||C.$$typeof===d||C.$$typeof===g||C.$$typeof===H||C.$$typeof===Q||C.$$typeof===M)}function P(C){if(typeof C=="object"&&C!==null){var R=C.$$typeof;switch(R){case n:var L=C.type;switch(L){case u:case a:case r:case s:case o:case h:return L;default:var q=L&&L.$$typeof;switch(q){case l:case d:case b:case x:case i:return q;default:return R}}case t:return R}}}var f=u,m=a,S=l,_=i,A=n,j=d,G=r,U=b,E=x,T=t,D=s,N=o,O=h,J=!1;function ee(C){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(C)||P(C)===u}function se(C){return P(C)===a}function oe(C){return P(C)===l}function B(C){return P(C)===i}function V(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function X(C){return P(C)===d}function K(C){return P(C)===r}function w(C){return P(C)===b}function F(C){return P(C)===x}function v(C){return P(C)===t}function Y(C){return P(C)===s}function z(C){return P(C)===o}function I(C){return P(C)===h}ye.AsyncMode=f,ye.ConcurrentMode=m,ye.ContextConsumer=S,ye.ContextProvider=_,ye.Element=A,ye.ForwardRef=j,ye.Fragment=G,ye.Lazy=U,ye.Memo=E,ye.Portal=T,ye.Profiler=D,ye.StrictMode=N,ye.Suspense=O,ye.isAsyncMode=ee,ye.isConcurrentMode=se,ye.isContextConsumer=oe,ye.isContextProvider=B,ye.isElement=V,ye.isForwardRef=X,ye.isFragment=K,ye.isLazy=w,ye.isMemo=F,ye.isPortal=v,ye.isProfiler=Y,ye.isStrictMode=z,ye.isSuspense=I,ye.isValidElementType=Z,ye.typeOf=P}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=so():e.exports=io()})(oo);var It=Pt,ao={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},co={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},En={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ot={};Ot[It.ForwardRef]=lo,Ot[It.Memo]=En;function _n(e){return It.isMemo(e)?En:Ot[e.$$typeof]||ao}var uo=Object.defineProperty,fo=Object.getOwnPropertyNames,Tn=Object.getOwnPropertySymbols,ho=Object.getOwnPropertyDescriptor,po=Object.getPrototypeOf,An=Object.prototype;function Pn(e,n,t){if(typeof n!="string"){if(An){var r=po(n);r&&r!==An&&Pn(e,r,t)}var o=fo(n);Tn&&(o=o.concat(Tn(n)));for(var s=_n(e),i=_n(n),l=0;l<o.length;++l){var u=o[l];if(!co[u]&&!(t&&t[u])&&!(i&&i[u])&&!(s&&s[u])){var a=ho(n,u);try{uo(e,u,a)}catch{}}}}return e}var go=Pn;function _e(){return(_e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var In=function(e,n){for(var t=[e[0]],r=0,o=n.length;r<o;r+=1)t.push(n[r],e[r+1]);return t},Yt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!lt.typeOf(e)},gt=Object.freeze([]),Ne=Object.freeze({});function Xe(e){return typeof e=="function"}function Lt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Nt(e){return e&&typeof e.styledComponentId=="string"}var Ue=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Ft=typeof window<"u"&&"HTMLElement"in window,mo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),yo={},vo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function bo(){for(var e=arguments.length<=0?void 0:arguments[0],n=[],t=1,r=arguments.length;t<r;t+=1)n.push(t<0||arguments.length<=t?void 0:arguments[t]);return n.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Pe(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(bo.apply(void 0,[vo[e]].concat(t)).trim())}var xo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},n.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Pe(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var l=s;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),a=0,d=r.length;a<d;a++)this.tag.insertRule(u,r[a])&&(this.groupSizes[t]++,u++)},n.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},n.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,l=s;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),mt=new Map,yt=new Map,dt=1,vt=function(e){if(mt.has(e))return mt.get(e);for(;yt.has(dt);)dt++;var n=dt++;return process.env.NODE_ENV!=="production"&&((0|n)<0||n>1<<30)&&Pe(16,""+n),mt.set(e,n),yt.set(n,e),n},wo=function(e){return yt.get(e)},So=function(e,n){n>=dt&&(dt=n+1),mt.set(e,n),yt.set(n,e)},Co="style["+Ue+'][data-styled-version="5.3.8"]',ko=new RegExp("^"+Ue+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Mo=function(e,n,t){for(var r,o=t.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(n,r)},Do=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var l=i.match(ko);if(l){var u=0|parseInt(l[1],10),a=l[2];u!==0&&(So(a,u),Mo(e,a,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},$o=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},On=function(e){var n=document.head,t=e||n,r=document.createElement("style"),o=function(l){for(var u=l.childNodes,a=u.length;a>=0;a--){var d=u[a];if(d&&d.nodeType===1&&d.hasAttribute(Ue))return d}}(t),s=o!==void 0?o.nextSibling:null;r.setAttribute(Ue,"active"),r.setAttribute("data-styled-version","5.3.8");var i=$o();return i&&r.setAttribute("nonce",i),t.insertBefore(r,s),r},Eo=function(){function e(t){var r=this.element=On(t);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,l=s.length;i<l;i++){var u=s[i];if(u.ownerNode===o)return u}Pe(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),_o=function(){function e(t){var r=this.element=On(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),To=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Yn=Ft,Ao={isServer:!Ft,useCSSOMInjection:!mo},bt=function(){function e(t,r,o){t===void 0&&(t=Ne),r===void 0&&(r={}),this.options=_e({},Ao,{},t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Ft&&Yn&&(Yn=!1,function(s){for(var i=document.querySelectorAll(Co),l=0,u=i.length;l<u;l++){var a=i[l];a&&a.getAttribute(Ue)!=="active"&&(Do(s,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(t){return vt(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(_e({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,s=r.useCSSOMInjection,i=r.target,t=o?new To(i):s?new Eo(i):new _o(i),new xo(t)));var t,r,o,s,i},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(vt(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},n.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(vt(t),o)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(vt(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),o=r.length,s="",i=0;i<o;i++){var l=wo(i);if(l!==void 0){var u=t.names.get(l),a=r.getGroup(i);if(u&&a&&u.size){var d=Ue+".g"+i+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(y){y.length>0&&(h+=y+",")}),s+=""+a+d+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Po=/(a)(d)/gi,Ln=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wt(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=Ln(n%52)+t;return(Ln(n%52)+t).replace(Po,"$1-$2")}var Be=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},Nn=function(e){return Be(5381,e)};function Fn(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(Xe(t)&&!Nt(t))return!1}return!0}var Io=Nn("5.3.8"),Oo=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&Fn(n),this.componentId=t,this.baseHash=Be(Io,t),this.baseStyle=r,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=ze(this.rules,n,t,r).join(""),l=Wt(Be(this.baseHash,i)>>>0);if(!t.hasNameForId(o,l)){var u=r(i,"."+l,void 0,o);t.insertRules(o,l,u)}s.push(l),this.staticRulesId=l}else{for(var a=this.rules.length,d=Be(this.baseHash,r.hash),h="",y=0;y<a;y++){var x=this.rules[y];if(typeof x=="string")h+=x,process.env.NODE_ENV!=="production"&&(d=Be(d,x+y));else if(x){var b=ze(x,n,t,r),M=Array.isArray(b)?b.join(""):b;d=Be(d,M+y),h+=M}}if(h){var g=Wt(d>>>0);if(!t.hasNameForId(o,g)){var H=r(h,"."+g,void 0,o);t.insertRules(o,g,H)}s.push(g)}}return s.join(" ")},e}(),Yo=/^\s*\/\/.*$/gm,Lo=[":","[",".","#"];function No(e){var n,t,r,o,s=e===void 0?Ne:e,i=s.options,l=i===void 0?Ne:i,u=s.plugins,a=u===void 0?gt:u,d=new eo(l),h=[],y=function(M){function g(H){if(H)try{M(H+"}")}catch{}}return function(H,Q,Z,P,f,m,S,_,A,j){switch(H){case 1:if(A===0&&Q.charCodeAt(0)===64)return M(Q+";"),"";break;case 2:if(_===0)return Q+"/*|*/";break;case 3:switch(_){case 102:case 112:return M(Z[0]+Q),"";default:return Q+(j===0?"/*|*/":"")}case-2:Q.split("/*|*/}").forEach(g)}}}(function(M){h.push(M)}),x=function(M,g,H){return g===0&&Lo.indexOf(H[t.length])!==-1||H.match(o)?M:"."+n};function b(M,g,H,Q){Q===void 0&&(Q="&");var Z=M.replace(Yo,""),P=g&&H?H+" "+g+" { "+Z+" }":Z;return n=Q,t=g,r=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(H||!g?"":g,P)}return d.use([].concat(a,[function(M,g,H){M===2&&H.length&&H[0].lastIndexOf(t)>0&&(H[0]=H[0].replace(r,x))},y,function(M){if(M===-2){var g=h;return h=[],g}}])),b.hash=a.length?a.reduce(function(M,g){return g.name||Pe(15),Be(M,g.name)},5381).toString():"",b}var Wn=p.createContext();Wn.Consumer;var Hn=p.createContext(),Fo=(Hn.Consumer,new bt),Ht=No();function Bn(){return p.useContext(Wn)||Fo}function zn(){return p.useContext(Hn)||Ht}var jn=function(){function e(n,t){var r=this;this.inject=function(o,s){s===void 0&&(s=Ht);var i=r.name+s.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,s(r.rules,i,"@keyframes"))},this.toString=function(){return Pe(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=Ht),this.name+n.hash},e}(),Wo=/([A-Z])/,Ho=/([A-Z])/g,Bo=/^ms-/,zo=function(e){return"-"+e.toLowerCase()};function Zn(e){return Wo.test(e)?e.replace(Ho,zo).replace(Bo,"-ms-"):e}var Vn=function(e){return e==null||e===!1||e===""};function ze(e,n,t,r){if(Array.isArray(e)){for(var o,s=[],i=0,l=e.length;i<l;i+=1)(o=ze(e[i],n,t,r))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(Vn(e))return"";if(Nt(e))return"."+e.styledComponentId;if(Xe(e)){if(typeof(a=e)!="function"||a.prototype&&a.prototype.isReactComponent||!n)return e;var u=e(n);return process.env.NODE_ENV!=="production"&&lt.isElement(u)&&console.warn(Lt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),ze(u,n,t,r)}var a;return e instanceof jn?t?(e.inject(t,r),e.getName(r)):e:Yt(e)?function d(h,y){var x,b,M=[];for(var g in h)h.hasOwnProperty(g)&&!Vn(h[g])&&(Array.isArray(h[g])&&h[g].isCss||Xe(h[g])?M.push(Zn(g)+":",h[g],";"):Yt(h[g])?M.push.apply(M,d(h[g],g)):M.push(Zn(g)+": "+(x=g,(b=h[g])==null||typeof b=="boolean"||b===""?"":typeof b!="number"||b===0||x in to?String(b).trim():b+"px")+";"));return y?[y+" {"].concat(M,["}"]):M}(e):e.toString()}var Gn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return Xe(e)||Yt(e)?Gn(ze(In(gt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Gn(ze(In(e,t)))}var Xn=/invalid hook call/i,wt=new Set,Un=function(e,n){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(n?' with the id of "'+n+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,r=console.error;try{var o=!0;console.error=function(s){if(Xn.test(s))o=!1,wt.delete(t);else{for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];r.apply(void 0,[s].concat(l))}},p.useRef(),o&&!wt.has(t)&&(console.warn(t),wt.add(t))}catch(s){Xn.test(s.message)&&wt.delete(t)}finally{console.error=r}}},Kn=function(e,n,t){return t===void 0&&(t=Ne),e.theme!==t.theme&&e.theme||n||t.theme},jo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zo=/(^-|-$)/g;function Bt(e){return e.replace(jo,"-").replace(Zo,"")}var zt=function(e){return Wt(Nn(e)>>>0)};function St(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var jt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Vo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Go(e,n,t){var r=e[t];jt(n)&&jt(r)?qn(r,n):e[t]=n}function qn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(jt(i))for(var l in i)Vo(l)&&Go(e,i[l],l)}return e}var Ke=p.createContext();Ke.Consumer;function Xo(e){var n=p.useContext(Ke),t=p.useMemo(function(){return function(r,o){if(!r)return Pe(14);if(Xe(r)){var s=r(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Pe(7)}return Array.isArray(r)||typeof r!="object"?Pe(8):o?_e({},o,{},r):r}(e.theme,n)},[e.theme,n]);return e.children?p.createElement(Ke.Provider,{value:t},e.children):null}var Zt={};function Jn(e,n,t){var r=Nt(e),o=!St(e),s=n.attrs,i=s===void 0?gt:s,l=n.componentId,u=l===void 0?function(Q,Z){var P=typeof Q!="string"?"sc":Bt(Q);Zt[P]=(Zt[P]||0)+1;var f=P+"-"+zt("5.3.8"+P+Zt[P]);return Z?Z+"-"+f:f}(n.displayName,n.parentComponentId):l,a=n.displayName,d=a===void 0?function(Q){return St(Q)?"styled."+Q:"Styled("+Lt(Q)+")"}(e):a,h=n.displayName&&n.componentId?Bt(n.displayName)+"-"+n.componentId:n.componentId||u,y=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,x=n.shouldForwardProp;r&&e.shouldForwardProp&&(x=n.shouldForwardProp?function(Q,Z,P){return e.shouldForwardProp(Q,Z,P)&&n.shouldForwardProp(Q,Z,P)}:e.shouldForwardProp);var b,M=new Oo(t,h,r?e.componentStyle:void 0),g=M.isStatic&&i.length===0,H=function(Q,Z){return function(P,f,m,S){var _=P.attrs,A=P.componentStyle,j=P.defaultProps,G=P.foldedComponentIds,U=P.shouldForwardProp,E=P.styledComponentId,T=P.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(E);var D=function(K,w,F){K===void 0&&(K=Ne);var v=_e({},w,{theme:K}),Y={};return F.forEach(function(z){var I,C,R,L=z;for(I in Xe(L)&&(L=L(v)),L)v[I]=Y[I]=I==="className"?(C=Y[I],R=L[I],C&&R?C+" "+R:C||R):L[I]}),[v,Y]}(Kn(f,p.useContext(Ke),j)||Ne,f,_),N=D[0],O=D[1],J=function(K,w,F,v){var Y=Bn(),z=zn(),I=w?K.generateAndInjectStyles(Ne,Y,z):K.generateAndInjectStyles(F,Y,z);return process.env.NODE_ENV!=="production"&&p.useDebugValue(I),process.env.NODE_ENV!=="production"&&!w&&v&&v(I),I}(A,S,N,process.env.NODE_ENV!=="production"?P.warnTooManyClasses:void 0),ee=m,se=O.$as||f.$as||O.as||f.as||T,oe=St(se),B=O!==f?_e({},f,{},O):f,V={};for(var X in B)X[0]!=="$"&&X!=="as"&&(X==="forwardedAs"?V.as=B[X]:(U?U(X,Mn,se):!oe||Mn(X))&&(V[X]=B[X]));return f.style&&O.style!==f.style&&(V.style=_e({},f.style,{},O.style)),V.className=Array.prototype.concat(G,E,J!==E?J:null,f.className,O.className).filter(Boolean).join(" "),V.ref=ee,p.createElement(se,V)}(b,Q,Z,g)};return H.displayName=d,(b=p.forwardRef(H)).attrs=y,b.componentStyle=M,b.displayName=d,b.shouldForwardProp=x,b.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):gt,b.styledComponentId=h,b.target=r?e.target:e,b.withComponent=function(Q){var Z=n.componentId,P=function(m,S){if(m==null)return{};var _,A,j={},G=Object.keys(m);for(A=0;A<G.length;A++)_=G[A],S.indexOf(_)>=0||(j[_]=m[_]);return j}(n,["componentId"]),f=Z&&Z+"-"+(St(Q)?Q:Bt(Lt(Q)));return Jn(Q,_e({},P,{attrs:y,componentId:f}),t)},Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=r?qn({},e.defaultProps,Q):Q}}),process.env.NODE_ENV!=="production"&&(Un(d,h),b.warnTooManyClasses=function(Q,Z){var P={},f=!1;return function(m){if(!f&&(P[m]=!0,Object.keys(P).length>=200)){var S=Z?' with the id of "'+Z+'"':"";console.warn("Over 200 classes were generated for component "+Q+S+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,P={}}}}(d,h)),b.toString=function(){return"."+b.styledComponentId},o&&go(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),b}var Vt=function(e){return function n(t,r,o){if(o===void 0&&(o=Ne),!lt.isValidElementType(r))return Pe(1,String(r));var s=function(){return t(r,o,xt.apply(void 0,arguments))};return s.withConfig=function(i){return n(t,r,_e({},o,{},i))},s.attrs=function(i){return n(t,r,_e({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(Jn,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Vt[e]=Vt(e)});var Uo=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Fn(t),bt.registerId(this.componentId+1)}var n=e.prototype;return n.createStyles=function(t,r,o,s){var i=s(ze(this.rules,r,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,i)},n.removeStyles=function(t,r){r.clearRules(this.componentId+t)},n.renderStyles=function(t,r,o,s){t>2&&bt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,s)},e}();function Ko(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=xt.apply(void 0,[e].concat(t)),s="sc-global-"+zt(JSON.stringify(o)),i=new Uo(o,s);function l(a){var d=Bn(),h=zn(),y=p.useContext(Ke),x=p.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(a.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(b){return typeof b=="string"&&b.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(x,a,d,y,h),p.useLayoutEffect(function(){if(!d.server)return u(x,a,d,y,h),function(){return i.removeStyles(x,d)}},[x,a,d,y,h]),null}function u(a,d,h,y,x){if(i.isStatic)i.renderStyles(a,yo,h,x);else{var b=_e({},d,{theme:Kn(d,y,l.defaultProps)});i.renderStyles(a,b,h,x)}}return process.env.NODE_ENV!=="production"&&Un(s),p.memo(l)}function Ct(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=xt.apply(void 0,[e].concat(t)).join(""),s=zt(o);return new jn(s,o)}var kt=function(){return p.useContext(Ke)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const k=Vt,ut="reactSchedulerOutsideWrapper",qo=Ko`

  #${ut} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${ut} *,
 #${ut} *:before,
 #${ut} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,Jo={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},Qo={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},qe=`
margin: 0;
padding: 0;
`,Je=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;k.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const ve=50,Ie=24,Qe=16,je=40,Re=je+Qe+Ie,et=84,ue=56,Te=196,$e=12,we=50,tt=24,ft=16,Gt=40,Ro=tt+ft+Gt,Qn=24,Rn=52,Ae={topRow:"600 14px Inter",middleRow:"400 10px Inter",bottomRow:{name:"600 14px Inter",number:"600 10px Inter",hoursInDay:"400 9px Inter"}},nt=3,es=1.6,ts=4.5,Xt=12,Mt=24,ns="reactSchedulerCanvasHeaderWrapper",er="reactSchedulerCanvasWrapper",Oe=ut,rs=4,Ut=48,Fe=5,os=40,tr=8,Kt=Ie/2+2,nr=Qe/2+Ie+1,rr=2,be=60,Me=21;var Ze={},ss={get exports(){return Ze},set exports(e){Ze=e}};(function(e,n){(function(t,r){e.exports=r()})(xe,function(){var t=1e3,r=6e4,o=36e5,s="millisecond",i="second",l="minute",u="hour",a="day",d="week",h="month",y="quarter",x="year",b="date",M="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,H=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(E){var T=["th","st","nd","rd"],D=E%100;return"["+E+(T[(D-20)%10]||T[D]||T[0])+"]"}},Z=function(E,T,D){var N=String(E);return!N||N.length>=T?E:""+Array(T+1-N.length).join(D)+E},P={s:Z,z:function(E){var T=-E.utcOffset(),D=Math.abs(T),N=Math.floor(D/60),O=D%60;return(T<=0?"+":"-")+Z(N,2,"0")+":"+Z(O,2,"0")},m:function E(T,D){if(T.date()<D.date())return-E(D,T);var N=12*(D.year()-T.year())+(D.month()-T.month()),O=T.clone().add(N,h),J=D-O<0,ee=T.clone().add(N+(J?-1:1),h);return+(-(N+(D-O)/(J?O-ee:ee-O))||0)},a:function(E){return E<0?Math.ceil(E)||0:Math.floor(E)},p:function(E){return{M:h,y:x,w:d,d:a,D:b,h:u,m:l,s:i,ms:s,Q:y}[E]||String(E||"").toLowerCase().replace(/s$/,"")},u:function(E){return E===void 0}},f="en",m={};m[f]=Q;var S=function(E){return E instanceof G},_=function E(T,D,N){var O;if(!T)return f;if(typeof T=="string"){var J=T.toLowerCase();m[J]&&(O=J),D&&(m[J]=D,O=J);var ee=T.split("-");if(!O&&ee.length>1)return E(ee[0])}else{var se=T.name;m[se]=T,O=se}return!N&&O&&(f=O),O||!N&&f},A=function(E,T){if(S(E))return E.clone();var D=typeof T=="object"?T:{};return D.date=E,D.args=arguments,new G(D)},j=P;j.l=_,j.i=S,j.w=function(E,T){return A(E,{locale:T.$L,utc:T.$u,x:T.$x,$offset:T.$offset})};var G=function(){function E(D){this.$L=_(D.locale,null,!0),this.parse(D)}var T=E.prototype;return T.parse=function(D){this.$d=function(N){var O=N.date,J=N.utc;if(O===null)return new Date(NaN);if(j.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var ee=O.match(g);if(ee){var se=ee[2]-1||0,oe=(ee[7]||"0").substring(0,3);return J?new Date(Date.UTC(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)):new Date(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)}}return new Date(O)}(D),this.$x=D.x||{},this.init()},T.init=function(){var D=this.$d;this.$y=D.getFullYear(),this.$M=D.getMonth(),this.$D=D.getDate(),this.$W=D.getDay(),this.$H=D.getHours(),this.$m=D.getMinutes(),this.$s=D.getSeconds(),this.$ms=D.getMilliseconds()},T.$utils=function(){return j},T.isValid=function(){return this.$d.toString()!==M},T.isSame=function(D,N){var O=A(D);return this.startOf(N)<=O&&O<=this.endOf(N)},T.isAfter=function(D,N){return A(D)<this.startOf(N)},T.isBefore=function(D,N){return this.endOf(N)<A(D)},T.$g=function(D,N,O){return j.u(D)?this[N]:this.set(O,D)},T.unix=function(){return Math.floor(this.valueOf()/1e3)},T.valueOf=function(){return this.$d.getTime()},T.startOf=function(D,N){var O=this,J=!!j.u(N)||N,ee=j.p(D),se=function(v,Y){var z=j.w(O.$u?Date.UTC(O.$y,Y,v):new Date(O.$y,Y,v),O);return J?z:z.endOf(a)},oe=function(v,Y){return j.w(O.toDate()[v].apply(O.toDate("s"),(J?[0,0,0,0]:[23,59,59,999]).slice(Y)),O)},B=this.$W,V=this.$M,X=this.$D,K="set"+(this.$u?"UTC":"");switch(ee){case x:return J?se(1,0):se(31,11);case h:return J?se(1,V):se(0,V+1);case d:var w=this.$locale().weekStart||0,F=(B<w?B+7:B)-w;return se(J?X-F:X+(6-F),V);case a:case b:return oe(K+"Hours",0);case u:return oe(K+"Minutes",1);case l:return oe(K+"Seconds",2);case i:return oe(K+"Milliseconds",3);default:return this.clone()}},T.endOf=function(D){return this.startOf(D,!1)},T.$set=function(D,N){var O,J=j.p(D),ee="set"+(this.$u?"UTC":""),se=(O={},O[a]=ee+"Date",O[b]=ee+"Date",O[h]=ee+"Month",O[x]=ee+"FullYear",O[u]=ee+"Hours",O[l]=ee+"Minutes",O[i]=ee+"Seconds",O[s]=ee+"Milliseconds",O)[J],oe=J===a?this.$D+(N-this.$W):N;if(J===h||J===x){var B=this.clone().set(b,1);B.$d[se](oe),B.init(),this.$d=B.set(b,Math.min(this.$D,B.daysInMonth())).$d}else se&&this.$d[se](oe);return this.init(),this},T.set=function(D,N){return this.clone().$set(D,N)},T.get=function(D){return this[j.p(D)]()},T.add=function(D,N){var O,J=this;D=Number(D);var ee=j.p(N),se=function(V){var X=A(J);return j.w(X.date(X.date()+Math.round(V*D)),J)};if(ee===h)return this.set(h,this.$M+D);if(ee===x)return this.set(x,this.$y+D);if(ee===a)return se(1);if(ee===d)return se(7);var oe=(O={},O[l]=r,O[u]=o,O[i]=t,O)[ee]||1,B=this.$d.getTime()+D*oe;return j.w(B,this)},T.subtract=function(D,N){return this.add(-1*D,N)},T.format=function(D){var N=this,O=this.$locale();if(!this.isValid())return O.invalidDate||M;var J=D||"YYYY-MM-DDTHH:mm:ssZ",ee=j.z(this),se=this.$H,oe=this.$m,B=this.$M,V=O.weekdays,X=O.months,K=function(Y,z,I,C){return Y&&(Y[z]||Y(N,J))||I[z].slice(0,C)},w=function(Y){return j.s(se%12||12,Y,"0")},F=O.meridiem||function(Y,z,I){var C=Y<12?"AM":"PM";return I?C.toLowerCase():C},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:B+1,MM:j.s(B+1,2,"0"),MMM:K(O.monthsShort,B,X,3),MMMM:K(X,B),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:K(O.weekdaysMin,this.$W,V,2),ddd:K(O.weekdaysShort,this.$W,V,3),dddd:V[this.$W],H:String(se),HH:j.s(se,2,"0"),h:w(1),hh:w(2),a:F(se,oe,!0),A:F(se,oe,!1),m:String(oe),mm:j.s(oe,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:ee};return J.replace(H,function(Y,z){return z||v[Y]||ee.replace(":","")})},T.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},T.diff=function(D,N,O){var J,ee=j.p(N),se=A(D),oe=(se.utcOffset()-this.utcOffset())*r,B=this-se,V=j.m(this,se);return V=(J={},J[x]=V/12,J[h]=V,J[y]=V/3,J[d]=(B-oe)/6048e5,J[a]=(B-oe)/864e5,J[u]=B/o,J[l]=B/r,J[i]=B/t,J)[ee]||B,O?V:j.a(V)},T.daysInMonth=function(){return this.endOf(h).$D},T.$locale=function(){return m[this.$L]},T.locale=function(D,N){if(!D)return this.$L;var O=this.clone(),J=_(D,N,!0);return J&&(O.$L=J),O},T.clone=function(){return j.w(this.$d,this)},T.toDate=function(){return new Date(this.valueOf())},T.toJSON=function(){return this.isValid()?this.toISOString():null},T.toISOString=function(){return this.$d.toISOString()},T.toString=function(){return this.$d.toUTCString()},E}(),U=G.prototype;return A.prototype=U,[["$ms",s],["$s",i],["$m",l],["$H",u],["$W",a],["$M",h],["$y",x],["$D",b]].forEach(function(E){U[E[1]]=function(T){return this.$g(T,E[0],E[1])}}),A.extend=function(E,T){return E.$i||(E(T,G,A),E.$i=!0),A},A.locale=_,A.isDayjs=S,A.unix=function(E){return A(1e3*E)},A.en=m[f],A.Ls=m,A.p={},A})})(ss);const $=Ze,or=e=>e%4===0&&e%100>0||e%400===0?366:365,qt=e=>{const n=e.day();return n!==0&&n!==6},sr=(e,n)=>$(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(n,"months").daysInMonth(),ir=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:qt(e),isCurrentDay:e.isSame($(),"day"),year:parseInt(e.format("YYYY"))});let Dt=null;const is=e=>{if(Dt)return Dt;const n=document.createElement("canvas");n.width=12,n.height=12;const t=n.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),Dt=e.createPattern(n,"repeat"),Dt):null},Jt=(e,n,t,r,o,s,i,l=!1)=>{if(e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(n,t,r,ue),l&&!s){const u=is(e);u&&(e.fillStyle=u,e.fillRect(n,t,r,ue))}e.strokeRect(n+.5,t+.5,r,ue)},Qt=(e,n)=>{let t=0;for(const r of n)r<=e&&t++;return t*Me},as=(e,n,t,r,o,s=[])=>{for(let i=0;i<n;i++){const l=Qt(i,s);for(let u=0;u<=t;u++){const a=$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(u,"days"),d=a.isSame($(),"day"),h=a.isBefore($(),"day");Jt(e,u*ve,i*ue+l,ve,qt(a),d,o,h)}}},cs=(e,n,t,r)=>{e.setLineDash([5,5]),e.strokeStyle=r.colors.border,e.moveTo(n+.5,.5),e.lineTo(n+.5,t+.5),e.stroke()},ls=(e,n,t,r,o,s=[])=>{let i=0,l=-(r.dayOfMonth-1)*$e;const u=n*ue+s.length*Me;for(let a=0;a<=t;a++){const h=$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(a,"weeks").isSame($(),"week");for(let y=0;y<n;y++){const x=Qt(y,s);Jt(e,i,y*ue+x,et,!0,h,o)}i+=et}for(let a=0;a<t;a++){const d=sr(r,a)*$e;cs(e,l,u,o),l+=d}},ds=(e,n,t,r,o,s=[])=>{const i=$(`${r.year}-${r.month+1}-${r.dayOfMonth+1}`);for(let l=0;l<n;l++){const u=Qt(l,s);for(let a=0;a<=t;a++){let d;a===Math.floor(t/2)?d=$():a>Math.floor(t/2)?d=$().add(a-Math.floor(t/2),"hours"):d=$().subtract(Math.floor(t/2)-l,"hours");const h=i.isSame($(),"day")&&d.isSame($(),"hour");Jt(e,a*we+we/2-.5,l*ue+u,we,qt(d),h,o)}}},us=(e,n,t,r)=>{const o=t*ue+n*Me,s=e.canvas.width,i=o+Me/2;e.fillStyle=r.mode==="dark"?r.colors.primary+"80":r.colors.primary,e.fillRect(0,o,s,Me),e.strokeStyle=r.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},fs=(e,n,t,r,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(er)){switch(n){case 0:ls(e,t,r,o,s,i);break;case 1:as(e,t,r,o,s,i);break;case 2:ds(e,t,r,o,s,i);break}for(let u=0;u<i.length;u++)us(e,u,i[u],s)}};var Rt={},hs={get exports(){return Rt},set exports(e){Rt=e}};(function(e,n){(function(t,r){e.exports=r()})(xe,function(){var t="week",r="year";return function(o,s,i){var l=s.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var a=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=i(this).startOf(r).add(1,r).date(a),h=i(this).endOf(t);if(d.isBefore(h))return 1}var y=i(this).startOf(r).date(a).startOf(t).subtract(1,"millisecond"),x=this.diff(y,t,!0);return x<0?i(this).startOf("week").week():Math.ceil(x)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(hs);const ps=Rt;var en={},gs={get exports(){return en},set exports(e){en=e}};(function(e,n){(function(t,r){e.exports=r()})(xe,function(){return function(t,r,o){r.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(gs);const ms=en;var tn={},ys={get exports(){return tn},set exports(e){tn=e}};(function(e,n){(function(t,r){e.exports=r()})(xe,function(){var t="day";return function(r,o,s){var i=function(a){return a.add(4-a.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return i(this).year()},l.isoWeek=function(a){if(!this.$utils().u(a))return this.add(7*(a-this.isoWeek()),t);var d,h,y,x,b=i(this),M=(d=this.isoWeekYear(),h=this.$u,y=(h?s.utc:s)().year(d).startOf("year"),x=4-y.isoWeekday(),y.isoWeekday()>4&&(x+=7),y.add(x,t));return b.diff(M,"week")+1},l.isoWeekday=function(a){return this.$utils().u(a)?this.day()||7:this.day(this.day()%7?a:a-7)};var u=l.startOf;l.startOf=function(a,d){var h=this.$utils(),y=!!h.u(d)||d;return h.p(a)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(a,d)}}})})(ys);const vs=tn;var nn={},bs={get exports(){return nn},set exports(e){nn=e}};(function(e,n){(function(t,r){e.exports=r()})(xe,function(){return function(t,r,o){r.prototype.isBetween=function(s,i,l,u){var a=o(s),d=o(i),h=(u=u||"()")[0]==="(",y=u[1]===")";return(h?this.isAfter(a,l):!this.isBefore(a,l))&&(y?this.isBefore(d,l):!this.isAfter(d,l))||(h?this.isBefore(a,l):!this.isAfter(a,l))&&(y?this.isAfter(d,l):!this.isBefore(d,l))}}})})(bs);const xs=nn;var rn={},ws={get exports(){return rn},set exports(e){rn=e}};(function(e,n){(function(t,r){e.exports=r()})(xe,function(){var t,r,o=1e3,s=6e4,i=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,d=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:a,months:d,days:l,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},x=function(f){return f instanceof P},b=function(f,m,S){return new P(f,S,m.$l)},M=function(f){return r.p(f)+"s"},g=function(f){return f<0},H=function(f){return g(f)?Math.ceil(f):Math.floor(f)},Q=function(f){return Math.abs(f)},Z=function(f,m){return f?g(f)?{negative:!0,format:""+Q(f)+m}:{negative:!1,format:""+f+m}:{negative:!1,format:""}},P=function(){function f(S,_,A){var j=this;if(this.$d={},this.$l=A,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return b(S*y[M(_)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(E){j.$d[M(E)]=S[E]}),this.calMilliseconds(),this;if(typeof S=="string"){var G=S.match(h);if(G){var U=G.slice(2).map(function(E){return E!=null?Number(E):0});return this.$d.years=U[0],this.$d.months=U[1],this.$d.weeks=U[2],this.$d.days=U[3],this.$d.hours=U[4],this.$d.minutes=U[5],this.$d.seconds=U[6],this.calMilliseconds(),this}}return this}var m=f.prototype;return m.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(_,A){return _+(S.$d[A]||0)*y[A]},0)},m.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=H(S/a),S%=a,this.$d.months=H(S/d),S%=d,this.$d.days=H(S/l),S%=l,this.$d.hours=H(S/i),S%=i,this.$d.minutes=H(S/s),S%=s,this.$d.seconds=H(S/o),S%=o,this.$d.milliseconds=S},m.toISOString=function(){var S=Z(this.$d.years,"Y"),_=Z(this.$d.months,"M"),A=+this.$d.days||0;this.$d.weeks&&(A+=7*this.$d.weeks);var j=Z(A,"D"),G=Z(this.$d.hours,"H"),U=Z(this.$d.minutes,"M"),E=this.$d.seconds||0;this.$d.milliseconds&&(E+=this.$d.milliseconds/1e3);var T=Z(E,"S"),D=S.negative||_.negative||j.negative||G.negative||U.negative||T.negative,N=G.format||U.format||T.format?"T":"",O=(D?"-":"")+"P"+S.format+_.format+j.format+N+G.format+U.format+T.format;return O==="P"||O==="-P"?"P0D":O},m.toJSON=function(){return this.toISOString()},m.format=function(S){var _=S||"YYYY-MM-DDTHH:mm:ss",A={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return _.replace(u,function(j,G){return G||String(A[j])})},m.as=function(S){return this.$ms/y[M(S)]},m.get=function(S){var _=this.$ms,A=M(S);return A==="milliseconds"?_%=1e3:_=A==="weeks"?H(_/y[A]):this.$d[A],_===0?0:_},m.add=function(S,_,A){var j;return j=_?S*y[M(_)]:x(S)?S.$ms:b(S,this).$ms,b(this.$ms+j*(A?-1:1),this)},m.subtract=function(S,_){return this.add(S,_,!0)},m.locale=function(S){var _=this.clone();return _.$l=S,_},m.clone=function(){return b(this.$ms,this)},m.humanize=function(S){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},f}();return function(f,m,S){t=S,r=S().$utils(),S.duration=function(j,G){var U=S.locale();return b(j,{$l:U},G)},S.isDuration=x;var _=m.prototype.add,A=m.prototype.subtract;m.prototype.add=function(j,G){return x(j)&&(j=j.asMilliseconds()),_.bind(this)(j,G)},m.prototype.subtract=function(j,G){return x(j)&&(j=j.asMilliseconds()),A.bind(this)(j,G)}}})})(ws);const Ss=rn;var Cs="Expected a function",ar=0/0,ks="[object Symbol]",Ms=/^\s+|\s+$/g,Ds=/^[-+]0x[0-9a-f]+$/i,$s=/^0b[01]+$/i,Es=/^0o[0-7]+$/i,_s=parseInt,Ts=typeof xe=="object"&&xe&&xe.Object===Object&&xe,As=typeof self=="object"&&self&&self.Object===Object&&self,Ps=Ts||As||Function("return this")(),Is=Object.prototype,Os=Is.toString,Ys=Math.max,Ls=Math.min,on=function(){return Ps.Date.now()};function Ns(e,n,t){var r,o,s,i,l,u,a=0,d=!1,h=!1,y=!0;if(typeof e!="function")throw new TypeError(Cs);n=cr(n)||0,sn(t)&&(d=!!t.leading,h="maxWait"in t,s=h?Ys(cr(t.maxWait)||0,n):s,y="trailing"in t?!!t.trailing:y);function x(m){var S=r,_=o;return r=o=void 0,a=m,i=e.apply(_,S),i}function b(m){return a=m,l=setTimeout(H,n),d?x(m):i}function M(m){var S=m-u,_=m-a,A=n-S;return h?Ls(A,s-_):A}function g(m){var S=m-u,_=m-a;return u===void 0||S>=n||S<0||h&&_>=s}function H(){var m=on();if(g(m))return Q(m);l=setTimeout(H,M(m))}function Q(m){return l=void 0,y&&r?x(m):(r=o=void 0,i)}function Z(){l!==void 0&&clearTimeout(l),a=0,r=u=o=l=void 0}function P(){return l===void 0?i:Q(on())}function f(){var m=on(),S=g(m);if(r=arguments,o=this,u=m,S){if(l===void 0)return b(u);if(h)return l=setTimeout(H,n),x(u)}return l===void 0&&(l=setTimeout(H,n)),i}return f.cancel=Z,f.flush=P,f}function sn(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Fs(e){return!!e&&typeof e=="object"}function Ws(e){return typeof e=="symbol"||Fs(e)&&Os.call(e)==ks}function cr(e){if(typeof e=="number")return e;if(Ws(e))return ar;if(sn(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=sn(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ms,"");var t=$s.test(e);return t||Es.test(e)?_s(e.slice(2),t?2:8):Ds.test(e)?ar:+e}var rt=Ns;const $t=[0,1,2];var ht=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(ht||{});const lr=e=>$t.includes(e),ot=e=>{var r;const t=(((r=document.getElementById(Oe))==null?void 0:r.clientWidth)||0)-Te;switch(e){case 1:return Math.ceil(t/ve)*nt;case 2:return Math.ceil(t/we)*nt;default:return Math.ceil(t/et)*nt}},Hs=e=>ot(e)/nt,an=(e,n)=>{const t=ot(n)/2;let r;switch(n){case 1:r=e.subtract(t,"days");break;case 2:r=e.subtract(t,"hours");break;default:r=e.subtract(t,"weeks");break}let o;switch(n){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:r,endDate:o}},Bs=(e,n)=>{const t=an(e,n);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},cn=()=>{var t;return((((t=document.getElementById(Oe))==null?void 0:t.clientWidth)||0)-Te)*nt},dr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:$(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});$.extend(ps),$.extend(ms),$.extend(vs),$.extend(xs),$.extend(Ss);const zs=({data:e,children:n,isLoading:t,config:r,defaultStartDate:o=$(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:l})=>{const{zoom:u,maxRecordsPerPage:a=50}=r,[d,h]=p.useState(u),[y,x]=p.useState($()),[b,M]=p.useState(!1),[g,H]=p.useState(ot(d)),Q=$t[d]!==$t[$t.length-1],Z=d!==0,P=p.useMemo(()=>Bs(y,d),[y,d]),f=an(y,d).startDate,m=$(f).dayOfYear(),S=ir(f),_=p.useRef(null),[A,j]=p.useState([{x:0,y:0}]),G=p.useCallback((K,w="auto")=>{var v,Y,z,I;const F=cn();switch(K){case"back":return(v=_.current)==null?void 0:v.scrollTo({behavior:w,left:F/3});case"forward":return(Y=_.current)==null?void 0:Y.scrollTo({behavior:w,left:F/3});case"middle":{const C=F/nt/4;return(z=_.current)==null?void 0:z.scrollTo({behavior:w,left:F/2-C})}default:return(I=_.current)==null?void 0:I.scrollTo({behavior:w,left:F/2})}},[]),U=K=>{j(K)},E=p.useCallback(K=>{const w=Hs(d);let F;switch(d){case 0:F=w*7;break;case 1:F=w;break;case 2:F=Math.ceil(w/Mt);break}rt(()=>{switch(K){case"back":x(Y=>Y.subtract(F,"days"));break;case"forward":x(Y=>Y.add(F,"days"));break;case"middle":x($());break}s==null||s(P)},300)()},[s,P,d]);p.useEffect(()=>{_.current=document.getElementById(Oe),H(ot(d))},[d]),p.useEffect(()=>{const K=()=>H(ot(d));return window.addEventListener("resize",K),()=>window.removeEventListener("resize",K)},[d]),p.useEffect(()=>{s==null||s(P)},[s,P]),p.useEffect(()=>{M(!1)},[o]),p.useEffect(()=>{b||(G("middle"),M(!0),x(o))},[o,b,G]);const T=()=>{t||(x(K=>d===2?K.add(Qn,"hours"):K.add(rr,"weeks")),s==null||s(P))},D=p.useCallback(()=>{t||(E("forward"),rt(()=>{G("forward")},500)())},[t,E,G]),N=()=>{t||(x(K=>d===2?K.subtract(Qn,"hours"):K.subtract(rr,"weeks")),s==null||s(P))},O=p.useCallback(()=>{!b||t||(E("back"),rt(()=>{G("back")},500)())},[b,t,E,G]),J=p.useCallback(()=>{t||(E("middle"),rt(()=>{G("middle","smooth")},300)())},[t,E,G]),ee=p.useCallback(K=>{if(t)return;const w=$(K).startOf("day");w.isValid()&&(x(w),s==null||s(P),setTimeout(()=>{G("middle","smooth")},300))},[t,G,s,P]),se=()=>B(d+1),oe=()=>B(d-1),B=K=>{lr(K)&&(h(K),H(ot(K)),s==null||s(P))},V=()=>i==null?void 0:i(),{Provider:X}=dr;return c.jsx(X,{value:{data:e,config:r,handleGoNext:T,handleScrollNext:D,handleGoPrev:N,handleScrollPrev:O,handleGoToday:J,goToDate:ee,zoomIn:se,zoomOut:oe,setZoom:B,zoom:d,isNextZoom:Q,isPrevZoom:Z,date:y,isLoading:t,cols:g,startDate:S,dayOfYear:m,toggleDisplayActiveUnits:V,tilesCoords:A,updateTilesCoords:U,recordsThreshold:a,onClearFilterData:l},children:n})},We=()=>p.useContext(dr),ur=(e,n,t)=>{e.canvas.width=n*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},fr=(e,n)=>{if(n.length===0)return e;let t=e,r=0;for(const o of n){const s=o*ue+r*Me;if(e>=s+Me)r++;else if(e>=s)return o*ue+r*Me-r*Me}return t-r*Me},js=5,hr=(e,n)=>{const t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.sqrt(t*t+r*r)>js},pt=(e,n,t)=>{const r=t.getBoundingClientRect();return{x:e-r.left+t.scrollLeft,y:n-r.top+t.scrollTop}},Zs=({data:e,baseData:n,zoom:t,startDate:r,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:l,separatorRowIndices:u=[]})=>{const a=n?n.length>0&&n[0].data.length>0&&!Array.isArray(n[0].data[0])?n.map(F=>({...F,data:[F.data]})):n:e,{enabled:d=!0,isDraggable:h,resourceOnly:y=!1,isValidDrop:x}=i,[b,M]=p.useState("idle"),[g,H]=p.useState(null),[Q,Z]=p.useState({x:0,y:0}),[P,f]=p.useState({width:0,height:48}),[m,S]=p.useState(null),[_,A]=p.useState(!0),j=p.useRef({x:0,y:0}),G=p.useRef({x:0,y:0}),U=p.useRef({x:0,y:0}),E=p.useRef(null),T=p.useRef(null),D=p.useRef(0),N=p.useRef(null),O=p.useCallback(F=>!d||F.draggable===!1?!1:h?h(F):!0,[d,h]),J=p.useCallback((F,v)=>{const Y=fr(v,u),z=Math.floor(Y/ue);let I;switch(t){case 0:I=$e*7;break;case 1:I=ve;break;case 2:I=we;break;default:I=ve}const C=Math.floor(F/I);let R;const L=$().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:R=L.add(C*7,"days").toDate();break;case 1:R=L.add(C,"days").toDate();break;case 2:R=L.add(C,"hours").toDate();break;default:R=L.toDate()}return{snappedDate:R,snappedResourceIndex:z}},[t,r,u]),ee=p.useCallback((F,v,Y,z)=>{const I=[],C=v.getTime(),R=Y.getTime(),L=a.find(te=>te.id===z);if(!L)return I;const q=[];for(const te of L.data)Array.isArray(te)?q.push(...te):q.push(te);for(const te of q){if(te.segmentId===F.segmentId)continue;const W=te.startDate.getTime(),ie=te.endDate.getTime();if(C>=W&&C<ie||R>W&&R<=ie||C<=W&&R>=ie){const de=new Date(Math.max(C,W)),ae=new Date(Math.min(R,ie)),le=ae.getTime()-de.getTime();I.push({event:te,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return I},[a]),se=p.useCallback((F,v,Y,z)=>{const I=[],C=v.getTime(),R=Y.getTime(),L=$(v).format("YYYY-MM-DD"),q=a.find(W=>W.id===z);if(!q)return I;const te=[];for(const W of q.data)Array.isArray(W)?te.push(...W):te.push(W);for(const W of te){if(W.segmentId===F.segmentId)continue;const ie=W.startDate.getTime(),he=W.endDate.getTime(),de=$(W.startDate).format("YYYY-MM-DD"),ae=$(W.endDate).format("YYYY-MM-DD"),le=$(Y).format("YYYY-MM-DD");if(!(de===L||ae===L||de===le||ae===le||$(W.startDate).isBefore(v,"day")&&$(W.endDate).isAfter(Y,"day"))||C>=ie&&C<he||R>ie&&R<=he||C<=ie&&R>=he)continue;let fe,Se;he<=C?(fe=C-he,Se="before"):(fe=ie-R,Se="after"),I.push({event:W,timeGap:fe,position:Se})}return I.sort((W,ie)=>W.timeGap-ie.timeGap)},[a]),oe=p.useCallback((F,v,Y)=>{const z=J(v,Y);let I,C;if(y)I=F.startDate,C=F.endDate;else{const he=$(F.endDate).diff(F.startDate);I=z.snappedDate,C=$(I).add(he,"milliseconds").toDate()}let R=0,L="",q;for(const he of e){const de=Math.max(he.data.length,1);if(z.snappedResourceIndex<R+de){L=he.id,q=he.capacity;break}R+=de}if(!L)return null;let te=!0;q!==void 0&&F.totalPassengers!==void 0&&(te=F.totalPassengers<=q);const W=ee(F,I,C,L),ie=W.length===0?se(F,I,C,L):[];return{startDate:I,endDate:C,resourceId:L,resourceIndex:z.snappedResourceIndex,resourceCapacity:q,hasCapacity:te,conflicts:W,hasConflict:W.length>0,nearbyEvents:ie}},[J,e,y,ee,se]),B=p.useCallback((F,v)=>{if(!s)return;const Y=Date.now();if(Y-D.current<100)return;D.current=Y;const z={event:F,currentStartDate:v.startDate,currentEndDate:v.endDate,currentResourceId:v.resourceId,conflicts:v.conflicts};s(z)},[s]),V=p.useCallback((F,v)=>{if(!O(F)||!l.current)return;v.preventDefault(),v.stopPropagation();const Y=v.target.closest('[style*="left"]');let z=0,I=0;Y&&Y.style.left&&Y.style.top&&(z=parseInt(Y.style.left),I=parseInt(Y.style.top));const C=pt(v.clientX,v.clientY,l.current);j.current={x:z,y:I},G.current={x:v.clientX,y:v.clientY},U.current={x:C.x-z,y:20},N.current={startDate:F.startDate,endDate:F.endDate,resourceId:""};for(const q of e){for(const te of q.data)if(te.some(W=>W.segmentId===F.segmentId)){N.current.resourceId=q.id;break}if(N.current.resourceId)break}H(F),M("potential"),Z({x:z,y:I});let R=100,L=48;if(Y){const q=Y.getBoundingClientRect();R=q.width,L=q.height}f({width:R,height:L})},[O,l,e,t]),X=p.useCallback(F=>{if(!l.current)return;let v=l.current;for(;v&&v!==document.body;){const W=window.getComputedStyle(v);if(v.scrollHeight>v.clientHeight&&(W.overflowY==="auto"||W.overflowY==="scroll"||W.overflow==="auto"||W.overflow==="scroll"))break;v=v.parentElement}(!v||v===document.body)&&(v=document.documentElement);const Y=v.getBoundingClientRect(),z=F.clientY,I=50,C=5,R=z-Y.top,L=Y.bottom-z;let q=!1,te=0;R<I&&R>0?(q=!0,te=-C*(1-R/I)):L<I&&L>0&&(q=!0,te=C*(1-L/I)),q?(T.current&&cancelAnimationFrame(T.current),T.current=requestAnimationFrame(()=>{v.scrollTop+=te,b==="dragging"&&X(F)})):T.current&&(cancelAnimationFrame(T.current),T.current=null)},[l,b]),K=p.useCallback(F=>{if(b==="idle"||b==="animating"||!g||!l.current)return;const v={x:F.clientX,y:F.clientY};if(b==="potential")if(hr(G.current,v))M("dragging");else return;X(F);const Y=pt(F.clientX,F.clientY,l.current);E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>{const z={x:Y.x-U.current.x,y:Y.y-U.current.y};Z(z);const I=oe(g,Y.x,Y.y);if(I&&x){const C={event:g,currentStartDate:I.startDate,currentEndDate:I.endDate,currentResourceId:I.resourceId,conflicts:I.conflicts};I.hasConflict=!x(C)}if(S(I),I){const C=I.hasCapacity!==!1;A(C),B(g,I)}})},[b,g,l,oe,B,x,X]),w=p.useCallback(async F=>{if(b==="idle"||b==="animating")return;const v={x:F.clientX,y:F.clientY};if(!hr(G.current,v)||b==="potential"){M("idle"),H(null),S(null);return}if(!g||!m||!N.current){M("idle"),H(null),S(null);return}if(m.hasCapacity===!1){A(!1),M("animating"),Z(j.current),setTimeout(()=>{M("idle"),H(null),S(null),A(!0)},300);return}const z={event:g,originalStartDate:N.current.startDate,originalEndDate:N.current.endDate,originalResourceId:N.current.resourceId,newStartDate:m.startDate,newEndDate:m.endDate,newResourceId:m.resourceId,hasConflict:m.hasConflict,conflicts:m.conflicts};let I=!0;if(o)try{const C=o(z);I=C instanceof Promise?await C:C}catch{I=!1}I?(A(!0),M("idle"),H(null),S(null)):(A(!1),M("animating"),Z(j.current),setTimeout(()=>{M("idle"),H(null),S(null),A(!0)},300))},[b,g,m,o,x]);return p.useEffect(()=>{if(b==="potential"||b==="dragging"){const F=Y=>K(Y),v=Y=>w(Y);return document.addEventListener("mousemove",F),document.addEventListener("mouseup",v),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",v)}}else return()=>{}},[b,K,w]),p.useEffect(()=>()=>{E.current&&(cancelAnimationFrame(E.current),E.current=null),T.current&&(cancelAnimationFrame(T.current),T.current=null)},[]),p.useEffect(()=>{(b==="idle"||b==="animating")&&(E.current&&(cancelAnimationFrame(E.current),E.current=null),T.current&&(cancelAnimationFrame(T.current),T.current=null))},[b]),p.useEffect(()=>{(b==="dragging"||b==="potential")&&(b==="dragging"?(M("animating"),Z(j.current),setTimeout(()=>{M("idle"),H(null),S(null)},300)):(M("idle"),H(null),S(null)))},[t]),p.useEffect(()=>{if((b==="dragging"||b==="potential")&&g){let F=!1;for(const v of e){for(const Y of v.data)if(Y.some(z=>z.segmentId===g.segmentId)){F=!0;break}if(F)break}F||(b==="dragging"?(M("animating"),Z(j.current),setTimeout(()=>{M("idle"),H(null),S(null)},300)):(M("idle"),H(null),S(null)))}},[e,b,g]),{dragState:b,draggedEvent:g,ghostPosition:Q,ghostDimensions:P,dropTarget:m,isValidDrop:_,handleDragStart:V,isDraggable:O,draggingEventId:(g==null?void 0:g.segmentId)||null,resourceOnly:y}},Vs=({data:e,baseData:n,zoom:t,startDate:r,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:l,isDragging:u,separatorRowIndices:a=[]})=>{const{enabled:d=!1,isSelectable:h}=i,y=d&&!!o,x=p.useCallback(v=>{let Y=0;for(const z of a)z<=v&&Y++;return v*ue+Y*Me},[a]),[b,M]=p.useState("idle"),[g,H]=p.useState(null),[Q,Z]=p.useState(null),[P,f]=p.useState(null),[m,S]=p.useState(!1),[_,A]=p.useState([]),[j,G]=p.useState(!1),U=p.useRef(null),E=p.useRef(null),T=p.useRef(null),D=p.useCallback(()=>{switch(t){case 0:return $e*7;case 1:return ve;case 2:return we;default:return ve}},[t]),N=p.useCallback(v=>{const Y=D(),z=Math.floor(v/Y),I=$().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return I.add(z*7,"days").toDate();case 1:return I.add(z,"days").toDate();case 2:return I.add(z,"hours").toDate();default:return I.toDate()}},[t,r,D]),O=p.useCallback(v=>{const Y=fr(v,a),z=Math.floor(Y/ue);let I=0;for(const C of e){const R=Math.max(C.data.length,1);if(z<I+R)return{resourceId:C.id,resourceIndex:z,resourceLabel:C.label};I+=R}return null},[e,a]),J=p.useCallback(v=>{const Y=D();return Math.floor(v/Y)*Y},[D]),ee=p.useCallback((v,Y,z,I=[])=>{const C=[],L=(n||e).find(W=>W.id===v),q=Y.getTime(),te=z.getTime();if(L){const W=L.data[0],ie=W&&Array.isArray(W)?L.data.flat():L.data;for(const he of ie){const de=new Date(he.startDate).getTime(),ae=new Date(he.endDate).getTime();if(q<ae&&te>de){const le=new Date(Math.max(q,de)),ce=new Date(Math.min(te,ae)),ne=ce.getTime()-le.getTime();C.push({event:he,conflictStart:le,conflictEnd:ce,overlapDuration:ne})}}}for(const W of I){if(W.resourceId!==v)continue;const ie=W.startDate.getTime(),he=W.endDate.getTime();if(q<he&&te>ie){const de=new Date(Math.max(q,ie)),ae=new Date(Math.min(te,he)),le=ae.getTime()-de.getTime(),ce={segmentId:`pending-${W.startDate.getTime()}`,reservationId:`pending-${W.startDate.getTime()}`,startDate:W.startDate,endDate:W.endDate,occupancy:0,title:`New Event (${W.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};C.push({event:ce,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return C},[e,n]),se=p.useCallback(v=>{if(!y||u||!l.current||v.button!==0)return;const Y=v.target;if(Y.closest("[data-segment-id]")||Y.closest("[data-multi-select-ui]"))return;const z=pt(v.clientX,v.clientY,l.current),I=O(z.y);if(!I)return;U.current={x:v.clientX,y:v.clientY},E.current=I.resourceIndex;const C=J(z.x),R=D(),L=x(I.resourceIndex);H(z),Z(z),f({x:C,y:L,width:R,height:ue}),M("selecting")},[y,u,l,O,J,D,x]),oe=p.useCallback(v=>{if(b!=="selecting"||!l.current||E.current===null)return;const Y=pt(v.clientX,v.clientY,l.current);T.current&&cancelAnimationFrame(T.current),T.current=requestAnimationFrame(()=>{Z(Y);const z=D(),I=J((g==null?void 0:g.x)||0),C=J(Y.x),R=x(E.current),L=Math.min(I,C),q=Math.max(I,C)+z;f({x:L,y:R,width:q-L,height:ue})})},[b,l,g,D,J,x]),B=p.useCallback(v=>{if(b!=="selecting")return;if(!l.current||!g||!U.current){M("idle"),H(null),Z(null),f(null);return}const Y=pt(v.clientX,v.clientY,l.current),z=O(g.y);if(!z){M("idle"),H(null),Z(null),f(null);return}const I=Math.min(g.x,Y.x),C=Math.max(g.x,Y.x),R=N(I),L=N(C),q=$(L).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(z.resourceId,R,q)){M("idle"),H(null),Z(null),f(null);return}const te=ee(z.resourceId,R,q,_),W=te.length>0,ie={startDate:R,endDate:q,resourceId:z.resourceId,resourceLabel:z.resourceLabel,zoomLevel:t,hasConflict:W,conflicts:W?te:void 0};if(m)A(he=>[...he,ie]),G(!0);else if(o){const he=o(ie),de=ae=>{ae!=null&&ae.continueMultiSelect&&(S(!0),A([ie]),G(!0))};he instanceof Promise?he.then(de):de(he)}M("idle"),H(null),Z(null),f(null),U.current=null,E.current=null},[b,l,g,O,N,h,o,t,m,ee,_]),V=p.useCallback(()=>{if(_.length>0&&s){G(!1);const v=s(_),Y=z=>{z!=null&&z.continueMultiSelect?G(!0):(A([]),S(!1),G(!1))};v instanceof Promise?v.then(Y):Y(v);return}A([]),S(!1),G(!1)},[_,s]),X=p.useCallback(()=>{A([]),S(!1),G(!1)},[]),K=p.useCallback(v=>{A(Y=>{const z=Y.filter((I,C)=>C!==v);return z.length===0&&(S(!1),G(!1)),z})},[]),w=p.useCallback((v,Y)=>{A(z=>z.map((I,C)=>{if(C!==v)return I;const R={...I,...Y},L=z.filter((te,W)=>W!==v),q=ee(R.resourceId,R.startDate,R.endDate,L);return{...R,hasConflict:q.length>0,conflicts:q.length>0?q:void 0}}))},[ee]),F=p.useCallback(v=>{v.key==="Escape"&&(b==="selecting"?(M("idle"),H(null),Z(null),f(null),U.current=null,E.current=null):m&&_.length>0&&(A([]),S(!1),G(!1)))},[b,m,_.length]);return p.useEffect(()=>{if(b==="selecting")return document.addEventListener("mousemove",oe),document.addEventListener("mouseup",B),document.addEventListener("keydown",F),()=>{document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",B),document.removeEventListener("keydown",F)}},[b,oe,B,F]),p.useEffect(()=>{if(m&&_.length>0)return document.addEventListener("keydown",F),()=>{document.removeEventListener("keydown",F)}},[m,_.length,F]),p.useEffect(()=>()=>{T.current&&(cancelAnimationFrame(T.current),T.current=null)},[]),p.useEffect(()=>{u&&b==="selecting"&&(M("idle"),H(null),Z(null),f(null),U.current=null,E.current=null)},[u,b]),{selectionState:b,selectionStart:g,selectionEnd:Q,selectionBox:P,handleGridMouseDown:se,isEnabled:y,pendingSelections:_,confirmSelections:V,clearSelections:X,removeSelection:K,updateSelection:w,isMultiSelectActive:m,hasUnconfirmedSelections:j}},Gs=k.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,Xs=k.div`
  position: relative;
`,Us=k.canvas``;k.canvas``;const pr=k.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,Ks=p.forwardRef(function({zoom:n,rows:t,data:r,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:l,draggableConfig:u,onDragStateChange:a,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y,separatorRowIndices:x=[]},b){const M=p.useRef(!1),{handleScrollNext:g,handleScrollPrev:H,date:Q,isLoading:Z,cols:P,startDate:f}=We(),m=p.useRef(null),S=p.useRef(null),_=p.useRef(null),A=p.useRef(null),[j,G]=p.useState(!1),U=kt(),{dragState:E,draggedEvent:T,ghostPosition:D,ghostDimensions:N,dropTarget:O,isValidDrop:J,handleDragStart:ee,isDraggable:se,draggingEventId:oe,resourceOnly:B}=Zs({data:r,baseData:o||r,zoom:n,startDate:f,onEventDrop:i,onEventDrag:l,draggableConfig:u,gridRef:A,separatorRowIndices:x});p.useEffect(()=>{const W=E==="dragging"||E==="potential";G(W),a&&a(W)},[E,a]);const{selectionState:V,selectionBox:X,handleGridMouseDown:K,pendingSelections:w,confirmSelections:F,clearSelections:v,removeSelection:Y,updateSelection:z,isMultiSelectActive:I,hasUnconfirmedSelections:C}=Vs({data:r,baseData:o||r,zoom:n,startDate:f,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y,gridRef:A,isDragging:j,separatorRowIndices:x}),R=p.useCallback(W=>{W.preventDefault()},[]),L=p.useCallback(W=>{W.preventDefault()},[]),q=x.length*Me,te=p.useCallback(W=>{const ie=cn(),he=t*ue+1+q;ur(W,ie,he),fs(W,n,t,P,f,U,x)},[P,f,t,n,U,x,q]);return p.useEffect(()=>{if(!m.current)return;const W=m.current.getContext("2d");if(!W)return;const ie=()=>te(W);return window.addEventListener("resize",ie),()=>window.removeEventListener("resize",ie)},[te]),p.useEffect(()=>{const W=m.current;if(!W)return;W.style.letterSpacing="1px";const ie=W.getContext("2d");ie&&te(ie)},[Q,t,n,te]),p.useEffect(()=>{if(!S.current)return;const W=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!M.current&&(M.current=!0,g(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Oe)});return W.observe(S.current),()=>{W.disconnect()}},[g]),p.useEffect(()=>{if(!_.current)return;const W=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!M.current&&(M.current=!0,H(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Oe),rootMargin:`0px 0px 0px -${Te}px`});return W.observe(_.current),()=>{W.disconnect()}},[H]),c.jsxs(Gs,{id:er,children:[c.jsxs(Xs,{ref:W=>{typeof b=="function"?b(W):b&&(b.current=W),A.current=W},onMouseDown:K,style:{cursor:d?"crosshair":"default"},children:[c.jsx(pr,{position:"left",ref:_}),c.jsx(vn,{isLoading:Z,position:"left"}),c.jsx(Us,{ref:m,onDragStart:R,onDragOver:L,style:{userSelect:E==="dragging"?"none":"auto"}}),c.jsx(ol,{zoom:n,startDate:f}),c.jsx(fc,{data:r,zoom:n,onTileClick:s,onDragStart:ee,isDraggable:se,draggingEventId:oe,separatorRowIndices:x}),c.jsx(pr,{ref:S,position:"right"}),c.jsx(vn,{isLoading:Z,position:"right"}),(E==="dragging"||E==="animating")&&c.jsx(Wc,{draggedEvent:T,ghostPosition:D,ghostDimensions:N,dropTarget:O,isValidDrop:J,dragState:E,zoom:n,data:r,resourceOnly:B,separatorRowIndices:x}),c.jsx(zc,{selectionBox:X,isSelecting:V==="selecting"}),I&&w.length>0&&c.jsx(nl,{selections:w,data:r,zoom:n,startDate:f,onRemove:Y,onUpdate:z,separatorRowIndices:x})]}),I&&C&&w.length>0&&c.jsx(qc,{selections:w,onConfirm:F,onClear:v,onRemove:Y})]})}),gr=e=>{const n=$.duration(e,"seconds"),t=n.hours(),r=n.minutes();return{hours:t,minutes:r}},mr=e=>{let n=0,t=0,r=0;return e.forEach(o=>{n+=o.minutes;const s=Math.floor(n/be);t+=o.hours+s,r+=n%be,r>=be&&(t++,r-=be)}),{hours:t,minutes:r}},yr=(e,n)=>{let t=tr;switch(n){case 0:t=os;break;case 1:t=tr;break;case 2:t=1;break}const r=()=>{let s=t-e.hours-1,i=be-e.minutes;return i===be&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:r(),overtime:o()}},qs=(e,n,t)=>{const r=n.isoWeek(),o=e.map(a=>{const d=$(a.startDate).isoWeek(),h=$(a.startDate).isoWeekday(),y=$(a.endDate).isoWeek(),x=$(a.endDate).isoWeekday(),{hours:b,minutes:M}=gr(a.occupancy);if(r===d){const g=(Fe+1-h)*b,H=(Fe+1-h)*M;return{hours:Math.max(0,g),minutes:H}}else if(r===y){const g=x>Fe?Fe*b:x*b,H=x>Fe?Fe*M:x*M;return{hours:g,minutes:H}}else if($(n).isBetween(a.startDate,a.endDate))return{hours:Fe*b,minutes:Fe*M};return{hours:0,minutes:0}}),{hours:s,minutes:i}=mr(o),{free:l,overtime:u}=yr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:l,overtime:u}},Js=(e,n,t,r)=>{const o=n.isoWeekday(),s=e.map(d=>{const{hours:h,minutes:y}=gr(d.occupancy);return o<=(r?7:5)?{hours:h,minutes:y}:{hours:0,minutes:0}}),{hours:i,minutes:l}=mr(s),{free:u,overtime:a}=yr({hours:i,minutes:l},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,l)},free:u,overtime:a}},Qs=(e,n)=>{let t=0;e.forEach(l=>{const u=$(l.startDate).hour(),a=$(l.endDate).hour(),d=n.hour(),h=$(l.endDate).minute(),y=$(l.startDate).minute();u<d&&a>d?t+=be:u===d&&a===d&&y&&h?t+=h?h-y:be-y:u===d&&a>=d?t+=y?be-y:be:a===d&&h&&(t+=h)});const r=Math.floor(t/be),o=t%be,s=r||o?0:1,i=r?0:o?be-o:0;return{taken:{hours:r,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},Rs=(e,n,t,r,o=!1)=>{if(n<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>r===1?$(t).isBetween(i.startDate,i.endDate,"day","[]"):r===2?$(t).isBetween(i.startDate,i.endDate,"hour","[]"):$(i.startDate).isBetween($(t),$(t).add(6,"days"),"day","[]")||$(t).isBetween($(i.startDate),$(i.endDate),"day","[]"));switch(r){case 1:return Js(s,t,r,o);case 2:return Qs(s,t);default:return qs(s,t,r)}},ei=(e,n,t,r,o,s,i=!1)=>{let l="weeks",u;switch(s){case 0:l="weeks",u=et;break;case 1:l="days",u=ve;break;case 2:l="hours",u=we;break}const a=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=$(`${n.year}-${n.month+1}-${n.dayOfMonth}T${n.hour}:00:00`).add(a-1,l),h=Math.ceil(t.y/ue),y=r.findIndex((H,Q,Z)=>Z.slice(0,Q+1).reduce((f,m)=>f+m,0)>=h),x=s===2?(a+1)*u:a*u,b=(h-1)*ue+ue,M=Rs(o[y],y,d,s,i),g=$(e.startDate).isSame($(e.endDate),"day");return{coords:{x,y:b},mouseCoords:t,resourceIndex:y,disposition:M,reservationData:{startTime:$(e.startDate).format("hh:mm A"),startDate:$(e.startDate).format("MMM D, YYYY"),endTime:$(e.endDate).format("hh:mm A"),endDate:$(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:g,passengers:e.totalPassengers}}};function ti(e,n){if(e.length<=1)return[];if(e.length<=n){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const r=Math.min(n-1,t.length);return t.slice(0,r).map(o=>o.index).sort((o,s)=>o-s)}function ni(e){const n={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&d.capacity!=null&&t.add(d.capacity);const r=[...t].sort((d,h)=>d-h);if(r.length<2)return n;const o=Math.min(5,r.length),s=ti(r,o),i=[];let l=0;for(const d of s)i.push({min:r[l],max:r[d-1],values:r.slice(l,d)}),l=d;i.push({min:r[l],max:r[r.length-1],values:r.slice(l)});const u=[],a=new Map;return i.forEach((d,h)=>{const y="__auto_cat_"+h,x=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:y,name:x,minPassengers:d.min,maxPassengers:d.max});for(const b of d.values)a.set(b,y)}),{categories:u,capacityToCategoryId:a}}const ri=(e,n,t,r)=>{const o=[];let s=0,i=[],l=0;return n.length>r?(n.forEach((u,a)=>{const d={id:e[a].id,label:e[a].label,data:u,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};l>=r&&(o.push(i),s+=i.length,i=[],l=0),l++,i.push(d)}),t.slice(s).length<=r&&(i=[],n.slice(s).forEach((u,a)=>{const d={id:e[a+s].id,label:e[a+s].label,data:u,capacity:e[a+s].capacity,isSubcontract:e[a+s].isSubcontract,categoryId:e[a+s].categoryId};i.push(d),a===n.length-s-1&&o.push(i)})),o):(n.forEach((u,a)=>{const d={id:e[a].id,label:e[a].label,data:u,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};i.push(d)}),o.push(i),o)};var ln={},oi={get exports(){return ln},set exports(e){ln=e}};(function(e,n){(function(t,r){e.exports=r()})(xe,function(){return function(t,r){r.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(oi);const si=ln;var dn={},ii={get exports(){return dn},set exports(e){dn=e}};(function(e,n){(function(t,r){e.exports=r()})(xe,function(){return function(t,r){r.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(ii);const ai=dn,ci=e=>{const n=[];for(const t of e){let r=!1;if(n.length)for(const o of n){let s=!1;for(let i=0;i<o.length;i++){const l=$(t.startDate).startOf("day"),u=$(t.endDate).startOf("day"),a=$(o[i].startDate).startOf("day"),d=$(o[i].endDate).startOf("day");if(l.isBetween(a,d,null,"[]")||u.isBetween(a,d,null,"[]")||l.isBefore(a,"minute")&&u.isAfter(d,"minute")||l.isAfter(a,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),r=!0;break}}r||n.push([t])}return n};$.extend(si),$.extend(ai);const vr=new WeakMap,li=e=>{const n=vr.get(e);if(n)return n;const t=[...e].sort((o,s)=>{const i=$(o.startDate),l=$(s.startDate),u=i.startOf("day").diff(l.startOf("day"),"day");return u!==0?u:i.diff(l)}),r=ci(t);return vr.set(e,r),r},di=e=>{const n=[[],[]],[t,r]=e.reduce((o,s)=>{const i=li(s.data);return o[0].push(i),o[1].push(Math.max(i.length,1)),o},n);return{projectsPerPerson:t,rowsPerPerson:r}},ui=e=>e?e.map(n=>n.data.length).reduce((n,t)=>n+Math.max(t,1),0):0,fi=e=>{const{recordsThreshold:n}=We(),[t,r]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Oe)},[]);const{projectsPerPerson:l,rowsPerPerson:u}=p.useMemo(()=>di(e),[e]),a=p.useMemo(()=>ri(e,l,u,n),[e,l,n,u]),d=p.useCallback(()=>{a[o].length&&i.current&&(i.current.scroll({top:0}),r(g=>g+a[Math.max(o,0)].length),s(g=>Math.min(g+1,a.length-1)),window.scroll({top:0}))},[o,a]),h=p.useCallback(()=>{a[o].length&&(r(g=>Math.max(g-a[o-1].length,0)),s(g=>Math.max(g-1,0)))},[o,a]),y=p.useCallback(()=>{r(0),s(0)},[]),x=t+a[o].length,b=p.useMemo(()=>u.slice(t,x),[x,u,t]),M=p.useMemo(()=>l.slice(t,x),[x,l,t]);return{page:a[o],currentPageNum:o,pagesAmount:a.length,projectsPerPerson:M,rowsPerItem:b,totalRowsPerPage:ui(a[o]),next:d,previous:h,reset:y}};var un={},hi={get exports(){return un},set exports(e){un=e}};(function(e,n){(function(t,r){e.exports=r()})(xe,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var r=["th","st","nd","rd"],o=t%100;return"["+t+(r[(o-20)%10]||r[o]||r[0])+"]"}}})})(hi);const pi=un;var fn={},gi={get exports(){return fn},set exports(e){fn=e}};(function(e,n){(function(t,r){e.exports=r(Ze)})(xe,function(t){function r(y){return y&&typeof y=="object"&&"default"in y?y:{default:y}}var o=r(t);function s(y){return y%10<5&&y%10>1&&~~(y/10)%10!=1}function i(y,x,b){var M=y+" ";switch(b){case"m":return x?"minuta":"minutę";case"mm":return M+(s(y)?"minuty":"minut");case"h":return x?"godzina":"godzinę";case"hh":return M+(s(y)?"godziny":"godzin");case"MM":return M+(s(y)?"miesiące":"miesięcy");case"yy":return M+(s(y)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),a=/D MMMM/,d=function(y,x){return a.test(x)?l[y.month()]:u[y.month()]};d.s=u,d.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(y){return y+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(gi);const mi=fn;var hn={},yi={get exports(){return hn},set exports(e){hn=e}};(function(e,n){(function(t,r){e.exports=r(Ze)})(xe,function(t){function r(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=r(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(u,a,d){var h=s[d];return Array.isArray(h)&&(h=h[a?0:1]),h.replace("%d",u)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(l,null,!0),l})})(yi);const vi=hn;var pn={},bi={get exports(){return pn},set exports(e){pn=e}};(function(e,n){(function(t,r){e.exports=r(Ze)})(xe,function(t){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=r(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,h){return l.test(h)?s[d.month()]:i[d.month()]};u.s=i,u.f=s;var a={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(a,null,!0),a})})(bi);const xi=pn;var gn={},wi={get exports(){return gn},set exports(e){gn=e}};(function(e,n){(function(t,r){e.exports=r(Ze)})(xe,function(t){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=r(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(wi);const Si=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:pi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:mi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:gn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:xi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:vi}];class Ci{constructor(){Ur(this,"locales",Si)}getLocales(){return this.locales}addLocales(n){this.locales.push(n)}}const Et=new Ci,br=p.createContext({localesData:Et.getLocales(),currentLocale:Et.getLocales()[0],setCurrentLocale:()=>{}}),ki=({children:e,lang:n,translations:t})=>{const[r,o]=p.useState("en"),s=Et.getLocales(),i=p.useCallback(()=>{const h=s.find(y=>y.id===r);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&$.locale(h.dayjsTranslations),h||s[0]},[r,s]),[l,u]=p.useState(i()),a=h=>{localStorage.setItem("locale",h.translateCode),u(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(x=>x.id===h.id)||Et.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),y=n??h??"en";localStorage.setItem("locale",y),o(y),u(i())},[i,n]);const{Provider:d}=br;return c.jsx(d,{value:{currentLocale:l,localesData:s,setCurrentLocale:a},children:e})},Ve=()=>p.useContext(br).currentLocale.lang,Mi=e=>re.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},re.createElement("defs",null,re.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),re.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},re.createElement("stop",{offset:.47,stopColor:"#ccc"}),re.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),re.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),re.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),re.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),re.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),re.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),re.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),re.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),re.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),re.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),re.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Di=k.div`
  height: 440px;
  width: 514px;
  position: relative;
`,$i=k.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Ei=({onTileClick:e})=>{const{feelingEmpty:n}=Ve();return c.jsxs(Di,{onClick:e,children:[c.jsx(Mi,{}),c.jsx($i,{children:n})]})},_i=k.div`
  position: relative;
  display: flex;
`,Ti=k.div`
  position: relative;
  margin-left: ${Te};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Ai=k.div`
  width: calc(${({width:e})=>e}px - ${Te}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Te}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,mn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:ht.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Pi(e,n){const t=n?[...n].sort((l,u)=>l.maxPassengers-u.maxPassengers):[],r=[];for(const l of t){const u=e.filter(a=>!a.isSubcontract&&a.categoryId===l.id);u.length>0&&r.push({type:"category",category:l,items:u})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?r.push({type:"uncategorized",items:s}):s.length>0&&r.push({type:"uncategorized",items:s});const i=e.filter(l=>l.isSubcontract);return i.length>0&&r.push({type:"subcontract",items:i}),r}const Ii=({data:e,baseData:n,categories:t,onTileClick:r,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:l,onEventDrag:u,draggableConfig:a,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y})=>{const[x,b]=p.useState(mn),[M,g]=p.useState(e),[H,Q]=p.useState(!1),[Z,P]=p.useState(!1),[f,m]=p.useState(""),[S,_]=p.useState(new Set),{zoom:A,startDate:j,isLoading:G,config:{includeTakenHoursOnWeekendsInDayView:U,showTooltip:E,showThemeToggle:T}}=We(),D=p.useRef(null),{page:N,projectsPerPerson:O,rowsPerItem:J,currentPageNum:ee,pagesAmount:se,next:oe,previous:B,reset:V}=fi(M),{effectiveCategories:X,effectivePage:K}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:N};const ae=ni(N);if(ae.categories.length===0)return{effectiveCategories:void 0,effectivePage:N};const le=N.map(ce=>{if(ce.isSubcontract||ce.capacity==null)return ce;const ne=ae.capacityToCategoryId.get(ce.capacity);return ne?{...ce,categoryId:ne}:ce});return{effectiveCategories:ae.categories,effectivePage:le}},[t,N]),w=p.useCallback(ae=>{_(le=>{const ce=new Set(le);return ce.has(ae)?ce.delete(ae):ce.add(ae),ce})},[]),F=p.useMemo(()=>{const ae=[],le=X?[...X].sort((ce,ne)=>ce.maxPassengers-ne.maxPassengers):[];for(const ce of le)K.some(ne=>!ne.isSubcontract&&ne.categoryId===ce.id)&&ae.push(ce.id);return K.some(ce=>ce.isSubcontract)&&ae.push("__subcontract__"),ae},[X,K]),v=p.useCallback(()=>{_(new Set)},[]),Y=p.useCallback(()=>{_(new Set(F))},[F]),{visiblePage:z,visibleRowsPerItem:I,visibleTotalRows:C,visibleProjectsPerPerson:R,separatorRowIndices:L}=p.useMemo(()=>{const ae=Pi(K,X),le=((X==null?void 0:X.length)??0)>0,ce=new Map;N.forEach((Ce,Le)=>ce.set(Ce.id,Le));const ne=[],fe=[],Se=[],Ee=[];let De=0;for(const Ce of ae)if(Ce.type==="subcontract"||Ce.type==="category"&&le){const at=Ce.type==="subcontract"?"__subcontract__":Ce.category.id,ct=S.has(at);if(Ee.push(De),!ct)for(const Ge of Ce.items){const Tt=ce.get(Ge.id)??0,At=J[Tt];ne.push(Ge),fe.push(At),Se.push(O[Tt]),De+=At}}else for(const at of Ce.items){const ct=ce.get(at.id)??0,Ge=J[ct];ne.push(at),fe.push(Ge),Se.push(O[ct]),De+=Ge}const Sn=fe.reduce((Ce,Le)=>Ce+Le,0);return{visiblePage:ne,visibleRowsPerItem:fe,visibleTotalRows:Sn,visibleProjectsPerPerson:Se,separatorRowIndices:Ee}},[K,X,N,S,J,O]),q=p.useRef(rt((ae,le,ce,ne,fe,Se)=>{if(!D.current)return;const{tile:Ee,segmentId:De}=ie(ae);if(!De||!Ee){Q(!1),b(mn);return}const Sn=W(De,le),Ce=D.current.getBoundingClientRect(),Le=Ee.getBoundingClientRect(),at={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},ct={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},Ge={x:Le.left-Ce.left,y:Le.top-Ce.top,width:Le.width,height:Le.height},{coords:{x:Tt,y:At},resourceIndex:sl,disposition:il,reservationData:al}=ei(Sn,ce,at,ne,fe,Se,U);b({coords:{x:Tt,y:At},mouseCoords:ct,resourceIndex:sl,disposition:il,reservationData:al,tileBounds:Ge}),Q(!0)},4)),te=p.useRef(rt((ae,le)=>{V(),g(ae.map(ce=>({...ce,data:ce.data.filter(ne=>{const{title:fe,description:Se,subtitle:Ee}=ne;return(fe==null?void 0:fe.toLowerCase().includes(le.toLowerCase()))||(Ee==null?void 0:Ee.toLowerCase().includes(le.toLowerCase()))||(Se==null?void 0:Se.toLowerCase().includes(le.toLowerCase()))})})).filter(ce=>ce.data.length>0))},500)),W=(ae,le)=>{if(ae)return le.flatMap(ce=>ce.data).find(ce=>ce.segmentId===ae)},ie=ae=>{if(!ae.target)return{tile:null,segmentId:null};const le=ae.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},he=ae=>{const le=ae.target.value;m(le),te.current.cancel(),le?te.current(e,le):(V(),g(e))},de=p.useCallback(()=>{q.current.cancel(),Q(!1),b(mn)},[]);return p.useEffect(()=>{const ae=ce=>q.current(ce,e,j,I,R,A),le=D.current;if(le)return le.addEventListener("mousemove",ae),le.addEventListener("mouseleave",de),()=>{le.removeEventListener("mousemove",ae),le.removeEventListener("mouseleave",de)}},[q,de,R,I,j,A,e]),p.useEffect(()=>{f?(te.current.cancel(),te.current(e,f)):g(e)},[e,f]),c.jsxs(_i,{children:[c.jsx(ba,{data:K,categories:X,pageNum:ee,pagesAmount:se,rows:J,onLoadNext:oe,onLoadPrevious:B,searchInputValue:f,onSearchInputChange:he,onItemClick:o,collapsedGroups:S,onToggleGroup:w,allGroupIds:F,onExpandAll:v,onCollapseAll:Y}),c.jsxs(Ti,{children:[c.jsx(Ga,{zoom:A,topBarWidth:i,showThemeToggle:T,toggleTheme:s}),e.length?c.jsx(Ks,{data:z,baseData:n||e,zoom:A,rows:C,ref:D,onTileClick:r,onEventDrop:l,onEventDrag:u,draggableConfig:a,onDragStateChange:P,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:y,separatorRowIndices:L}):c.jsx(Ai,{width:i,children:G?c.jsx(vn,{isLoading:G,position:"left"}):c.jsx(Ei,{})}),E&&H&&!Z&&(x==null?void 0:x.resourceIndex)>-1&&c.jsx(Ec,{tooltipData:x})]})]})},Oi=k.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
  flex-wrap: wrap;
`,xr=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,Yi=k.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,wr=k.button`
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
`,Li=k.button`
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
`,Ni=k.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,Fi=k.div`
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
`,Sr=k.button`
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
`,Wi=k.label`
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
`,Hi=k.button`
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
`,Bi=k.span`
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
`,st=({children:e,sw:n=2})=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:e}),zi=()=>{var n,t;const e=document.getElementById(Oe);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(n=e==null?void 0:e.requestFullscreen)==null||n.call(e)},ji=()=>{const{config:e,date:n,zoom:t,handleGoNext:r,handleGoPrev:o,handleGoToday:s,setZoom:i,goToDate:l,toggleDisplayActiveUnits:u}=We(),{filterButtonState:a=-1}=e,d=()=>{var h;(h=document.querySelector(`#${Oe} input[placeholder]`))==null||h.focus()};return c.jsxs(Oi,{width:0,children:[c.jsxs(xr,{children:[c.jsxs(Yi,{children:[c.jsx(wr,{onClick:o,"aria-label":"Anterior",children:c.jsx(st,{children:c.jsx("path",{d:"m15 18-6-6 6-6"})})}),c.jsx(Li,{onClick:s,children:"Hoy"}),c.jsx(wr,{onClick:r,"aria-label":"Siguiente",children:c.jsx(st,{children:c.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),c.jsx(Ni,{children:n.format("MMMM YYYY")}),c.jsxs(Fi,{children:[c.jsx("button",{className:t===2?"on":"",onClick:()=>i(2),children:"Día"}),c.jsx("button",{className:t===0?"on":"",onClick:()=>i(0),children:"Semana"}),c.jsx("button",{className:t===1?"on":"",onClick:()=>i(1),children:"Mes"})]}),c.jsxs(Wi,{children:[c.jsxs(st,{children:[c.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),c.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),c.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",c.jsx("input",{type:"date",onChange:h=>h.target.value&&l(h.target.value)})]}),c.jsxs(Hi,{onClick:d,children:[c.jsxs(st,{children:[c.jsx("circle",{cx:"11",cy:"11",r:"7"}),c.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",c.jsx("span",{className:"k",children:"⌘K"})]})]}),c.jsxs(xr,{children:[a>=0&&c.jsxs(Sr,{$primary:!!a,onClick:u,children:[c.jsx(st,{children:c.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!a&&c.jsx(Bi,{children:a})]}),c.jsxs(Sr,{onClick:zi,children:[c.jsx(st,{children:c.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]})]})]})},Zi={add:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>re.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),re.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},yn=({iconName:e,width:n,height:t,fill:r,className:o})=>{const{colors:s}=kt(),i=Zi[e];return i?c.jsx(i,{style:{transition:".5s ease"},fill:r??s.accent,width:n,height:t,className:o}):null},Vi=(e,n,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[n];k.button`
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
  ${({theme:e,variant:n,disabled:t})=>Vi(e,n,t)}
`;const Gi=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Xi=k.div`
  position: relative;
`,Ui=({data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:a,schedulerRef:d,onTimeRangeSelect:h,onMultiTimeRangeSelect:y,clickToAddConfig:x})=>{const{goToDate:b,handleGoToday:M,zoomIn:g,zoomOut:H,zoom:Q}=We();return p.useImperativeHandle(d,()=>({goToDate:b,goToToday:M,setZoom:Z=>{if(!lr(Z))return;const P=Z-Q;if(P>0)for(let f=0;f<P;f++)g();else for(let f=0;f<Math.abs(P);f++)H()}}),[b,M,Q,g,H]),c.jsx(Ii,{data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:a,onTimeRangeSelect:h,onMultiTimeRangeSelect:y,clickToAddConfig:x})},Ki=p.forwardRef(function({data:n,categories:t,baseData:r,config:o,startDate:s,onRangeChange:i,onTileClick:l,handleToggleDisplayActiveUnits:u,onClearFilterData:a,onItemClick:d,isLoading:h,onEventDrop:y,onEventDrag:x,draggableConfig:b,onTimeRangeSelect:M,onMultiTimeRangeSelect:g,clickToAddConfig:H},Q){var D;const Z=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),P=p.useRef(null),f=p.useRef(null),[m,S]=p.useState((D=P.current)==null?void 0:D.clientWidth),_=p.useMemo(()=>$(s),[s]),[A,j]=p.useState(Z.defaultTheme??"light"),G=()=>{j(A==="light"?"dark":"light")},U=A==="light"?Jo:Qo,E=Z.theme?Z.theme[U.mode]:{},T={...U,colors:{...U.colors,...E}};return p.useImperativeHandle(Q,()=>({goToDate:N=>{var O;return(O=f.current)==null?void 0:O.goToDate(N)},goToToday:()=>{var N;return(N=f.current)==null?void 0:N.goToToday()},setZoom:N=>{var O;return(O=f.current)==null?void 0:O.setZoom(N)}}),[]),p.useEffect(()=>{const N=()=>{P.current&&S(P.current.clientWidth)};return N(),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]),P.current,c.jsxs(c.Fragment,{children:[c.jsx(qo,{}),c.jsx(Xo,{theme:T,children:c.jsx(ki,{lang:Z.lang,translations:Z.translations,children:c.jsx(zs,{data:n,isLoading:!!h,config:Z,onRangeChange:i,defaultStartDate:_,handleToggleDisplayActiveUnits:u,onClearFilterData:a,children:c.jsx(Gi,{showScroll:!!n.length,id:Oe,ref:P,children:c.jsx(Xi,{children:c.jsx(Ui,{data:n,baseData:r,categories:t,onTileClick:l,topBarWidth:m??0,onItemClick:d,toggleTheme:G,onEventDrop:y,onEventDrag:x,draggableConfig:b,schedulerRef:f,onTimeRangeSelect:M,onMultiTimeRangeSelect:g,clickToAddConfig:H})})})})})})]})}),qi=k.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:n})=>e==="next"?`1px solid ${n.colors.border}`:"none"};
`,Ji=k.button`
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
`,Qi=k.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ri=k.p`
  ${qe}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Cr=({intent:e,onClick:n,icon:t,isVisible:r,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:l}=Ve(),u=e==="next"?`${i} ${o+2}/${s}`:`${l} ${o}/${s}`;return c.jsx(qi,{intent:e,children:c.jsxs(Ji,{onClick:n,isVisible:r,children:[t&&c.jsx(Qi,{children:t}),c.jsx(Ri,{children:u})]})})},ea=k.div`
  min-width: ${Te+"px"};
  max-width: ${Te+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,ta=k.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Te}px;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,na=k.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,ra=k.input`
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
`,oa=k.div`
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
`,sa=k.button`
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
`,ia=k.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ue}px;
  height: calc(${ue}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBorder+"33":e.colors.border};
  background-color: ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBg:"transparent"};
  transition: 0.5s ease;
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,aa=k.div`
  display: flex;
  align-items: center;
`,ca=k.div`
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
`,la=k.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,da=k.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,kr=k.p`
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
`,ua=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),fa=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[c.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),c.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),c.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),c.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),c.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),ha=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),c.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),pa=({id:e,item:n,rows:t,onItemClick:r,isSubcontract:o})=>c.jsx(ia,{title:n.title,clickable:typeof r=="function",rows:t,$isSubcontract:o,onClick:()=>r==null?void 0:r({id:e,label:n}),children:c.jsxs(aa,{children:[c.jsx(ca,{$provider:o,children:ua(n.icon)?c.jsx(la,{src:n.icon,alt:""}):o?c.jsx(ha,{}):c.jsx(fa,{})}),c.jsxs(da,{children:[c.jsx(kr,{isMain:!0,children:n.title}),c.jsx(kr,{children:n.subtitle})]})]})}),ga=k.div`
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
`,ma=k.span`
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
`,ya=k.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,va=k.div`
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
`,Mr=({label:e,count:n,isCollapsed:t,onToggle:r,variant:o="category"})=>c.jsxs(ga,{$variant:o,onClick:r,title:e,children:[c.jsx(va,{$collapsed:t,children:c.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:c.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx(ma,{$variant:o,children:e}),c.jsx(ya,{$variant:o,children:n})]}),ba=({data:e,categories:n,rows:t,onLoadNext:r,onLoadPrevious:o,pageNum:s,pagesAmount:i,searchInputValue:l,onSearchInputChange:u,onItemClick:a,collapsedGroups:d,onToggleGroup:h,allGroupIds:y,onExpandAll:x,onCollapseAll:b})=>{const[M,g]=p.useState(!1),H=Ve(),Q=()=>g(U=>!U),Z=n?[...n].sort((U,E)=>U.maxPassengers-E.maxPassengers):[],P=Z.length>0,f=y.length>0,m=f&&d.size===y.length;f&&d.size;const S=e.filter(U=>U.isSubcontract),_=H.subcontract??"Subcontract",A=U=>{const E=e.indexOf(U);return c.jsx(pa,{id:U.id,item:U.label,rows:t[E],onItemClick:a,isSubcontract:U.isSubcontract},U.id)},j=U=>{const E=e.filter(N=>!N.isSubcontract&&N.categoryId===U.id);if(E.length===0)return null;const T=d.has(U.id),D=U.name;return c.jsxs("div",{children:[c.jsx(Mr,{label:D,count:E.length,isCollapsed:T,onToggle:()=>h(U.id),variant:"category"}),!T&&E.map(A)]},U.id)},G=e.filter(U=>!U.isSubcontract&&(!U.categoryId||!P));return c.jsxs(ea,{children:[c.jsxs(ta,{children:[c.jsxs(na,{children:[c.jsxs(oa,{isFocused:M,children:[c.jsx(ra,{placeholder:H.search,value:l,onChange:u,onFocus:Q,onBlur:Q}),c.jsx(yn,{iconName:"search"})]}),f&&c.jsx(sa,{title:m?"Expand all":"Collapse all",onClick:m?x:b,$allCollapsed:m,children:c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m?c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),c.jsx(Cr,{intent:"previous",isVisible:s!==0,onClick:o,icon:c.jsx(yn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]}),P?Z.map(j):G.map(A),P&&G.length>0&&G.map(A),S.length>0&&c.jsxs(c.Fragment,{children:[c.jsx(Mr,{label:_,count:S.length,isCollapsed:d.has("__subcontract__"),onToggle:()=>h("__subcontract__"),variant:"subcontract"}),!d.has("__subcontract__")&&S.map(A)]}),c.jsx(Cr,{intent:"next",isVisible:s!==i-1,onClick:r,icon:c.jsx(yn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]})},xa=k.div`
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
`,wa=Ct`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Sa=k.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${wa} 1s infinite;
`,vn=({isLoading:e,position:n})=>e?c.jsx(xa,{position:n,children:c.jsx(Sa,{})}):null,Ye=(e,n)=>{const{ctx:t,x:r,y:o,width:s,height:i,textYPos:l,label:u,font:a,isBottomRow:d,fillStyle:h,topText:y,bottomText:x,strokeStyle:b,labelBetweenCells:M}=e;if(t.beginPath(),t.strokeStyle=b??n.colors.border,t.setLineDash([]),u&&a&&l){t.fillStyle=n.colors.gridBackground,t.fillRect(r,o,s,i),M?(t.moveTo(r,o),t.lineTo(r+s,o),t.stroke(),t.moveTo(r,o+i),t.lineTo(r+s,o+i),t.stroke(),t.moveTo(r+s/2,o+i),t.lineTo(r+s/2,o+i-5),t.stroke()):t.strokeRect(r+.5,o+.5,s,i),t.font=a;const g=r+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=n.colors.accent,t.fillText(u,g,l)}if(d&&h&&y&&x){t.fillStyle=h,t.fillRect(r,o,s,i),t.strokeRect(r+.5,o+.5,s,i),t.font=y.font;const g=r+s/2-t.measureText(y.label).width/2;t.fillStyle=y.color,t.fillText(y.label,g,y.y),t.font=x.font;const H=r+s/2-t.measureText(x.label).width/2;t.fillStyle=x.color,t.fillText(x.label,H,x.y)}},bn=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return t?o==="bottomRow"?n.colors.placeholder:n.colors.accent:r?o==="bottomRow"?n.colors.placeholder:n.colors.textPrimary:n.colors.placeholder},Ca=(e,n,t,r)=>{const o=Re-je/es,s=Re-je/ts,i=Ie+Qe;let l=0;for(let u=0;u<n;u++){const a=ir($(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(u,"days")),d=a.isCurrentDay;if(Ye({ctx:e,x:l,y:i,width:ve,height:je,isBottomRow:!0,fillStyle:d?r.colors.today+"26":a.isBusinessDay?r.colors.gridBackground:r.colors.primary,topText:{y:o,label:d?"":a.dayName.toUpperCase(),font:Ae.bottomRow.name,color:bn({isCurrent:!1,isBusinessDay:a.isBusinessDay},r)},bottomText:{y:s,label:`${a.dayOfMonth}`,font:d?"700 10px Inter":Ae.bottomRow.number,color:d?r.colors.today:bn({isCurrent:!1,isBusinessDay:a.isBusinessDay,variant:"bottomRow"},r)}},r),d){const x=l+ve/2,b=o-13/2;e.save(),e.fillStyle=r.colors.today,e.beginPath(),e.roundRect?e.roundRect(x-30/2,b,30,13,5):e.rect(x-30/2,b,30,13),e.fill(),e.fillStyle="#fff",e.font="800 8.5px Inter",e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",x,b+13/2+.5),e.restore()}l+=ve}},ka=(e,n,t,r)=>{let o=-(t.dayOfMonth-1)*$e;const s=Ie;let l=t.month;for(let u=0;u<n;u++){l>=Xt&&(l=0);const a=sr(t,u)*$e;Ye({ctx:e,x:o,y:s,width:a,height:Qe,textYPos:nr,label:$().month(l).format("MMMM").toUpperCase(),font:Ae.bottomRow.number},r),o+=a,l++}},Ma=(e,n,t)=>{let o=0,s=0,i=$(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month();o=-n.dayOfMonth*ve+ve;for(let l=0;l<Xt;l++)i>Xt-1&&(i=0),s=$(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(l,"months").daysInMonth()*ve,Ye({ctx:e,x:o,y:0,width:s,height:Ie,textYPos:Kt,label:$(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${$(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,font:Ae.topRow},t),o+=s,i++},Da=(e,n,t,r)=>{const o=7*ve,s=Ie,i=e.canvas.width/o+o,l=n.weekOfYear;let u=0;for(let a=0;a<i;a++){const d=$(`${n.year}-${n.month+1}-${n.dayOfMonth}`).day();let h=(l+a)%Rn;h<=0&&(h+=Rn),d!==1&&a===0&&(u=-d*ve+ve),Ye({ctx:e,x:u,y:s,width:o,height:Qe,textYPos:nr,label:`${t.toUpperCase()} ${h}`,font:Ae.middleRow},r),u+=o}},$a=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return o==="yearView"?t?n.colors.tertiary:n.colors.gridBackground:t?n.colors.currentDay:r?n.colors.primary:n.colors.secondary},Ea=(e,n,t,r,o)=>{const s=Re-je/1.6,i=Re-je/4.5,l=Ie+Qe;let u=0;for(let a=0;a<n;a++){const d=$(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"weeks"),h=d.isSame($(),"week");Ye({ctx:e,x:u,y:l,width:et,height:je,isBottomRow:!0,fillStyle:h?o.colors.today+"26":$a({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:h?"700 14px Inter":Ae.bottomRow.name,color:h?o.colors.today:bn({isCurrent:h},o)},bottomText:{y:i,label:r.toUpperCase(),font:Ae.middleRow,color:o.colors.placeholder}},o),u+=et}},_a=(e,n,t,r)=>{const s=n.year,i=e.canvas.width*2;let l=0,u=0,a=(or(s)-t+1)*$e,d=0;for(;l+d<=i;)u>0&&(a=or(s+u)*$e),d+a>i&&u>0&&(a=Math.ceil((i-d)/$e)*$e),Ye({ctx:e,x:l,y:0,width:a,height:Ie,textYPos:Kt,label:(s+u).toString(),font:Ae.topRow},r),l+=a,d+=a,u++},Ta=(e,n,t,r)=>{const o=Math.floor(n/Mt)+2,s=Mt*we;let u=-$(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*we+.5*we;for(let a=0;a<o;a++){const d=$(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"day").format("dddd DD/MM/YYYY").toUpperCase();Ye({ctx:e,x:u,y:tt,width:s,height:ft,textYPos:tt+ft/2+2,label:d,font:Ae.bottomRow.number},r),u+=s}},Aa=(e,n,t,r)=>{const o=Math.ceil(n/Mt),s=$(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),l=s.month(),u=i.add(1,"day").month(),a=l===u?1:2;let d=.5*we;for(let h=0;h<a;h++){const y=$(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),b=$(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),M=b.format("MMMM").toUpperCase(),g=b.diff(y,"hour")+1,H=h===0?g*we:n*we;Ye({ctx:e,x:d,y:0,width:H,height:tt,textYPos:Kt,label:M,font:Ae.topRow},r),d+=H}},Pa=(e,n,t,r)=>{let o=0;const s=tt+ft,i=$(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=we;for(let u=0;u<n;u++){const a=i.add(u,"hours").format("h:00a").toUpperCase();Ye({ctx:e,x:o,y:s,width:l,height:Gt,label:a,font:Ae.bottomRow.hoursInDay,textYPos:tt+ft+Gt/2+2,labelBetweenCells:!0},r),o+=we}},Ia=(e,n,t,r,o,s,i)=>{switch(n){case 0:_a(e,r,s,i),ka(e,t,r,i),Ea(e,t,r,o,i);break;case 1:Ma(e,r,i),Da(e,r,o,i),Ca(e,t,r,i);break;case 2:Aa(e,t,r,i),Ta(e,t,r,i),Pa(e,t,r,i);break}},Oa=k.div`
  position: sticky;
  top: 0;
  z-index: 1;
`,Ya=k.div`
  height: ${Re}px;
  display: block;
`,La=k.canvas``,Na={transfer:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M4 8h13l-3-3"}),c.jsx("path",{d:"M20 16H7l3 3"})]}),sun:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"4"}),c.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),c.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),c.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:c.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M12 3 2 20h20z"}),c.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),c.jsx("path",{d:"M12 7.5V12l3 2"})]})},He=({name:e,className:n,strokeWidth:t=2})=>c.jsx("svg",{className:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Na[e]}),Fa=k.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Dr=k.span`
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
`,_t=k.span`
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
`,Wa=k.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: #b4791e;
  background: #fbf1de;
  border: 1px solid #e9d3a6;
  padding: 1px 5px;
  border-radius: 5px;
`,Ha=k.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,Ba=k.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,za=k.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,ja=k.span`
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
`,Za=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Va=()=>c.jsxs(Fa,{children:[c.jsx(Dr,{children:"Leyenda"}),c.jsxs(_t,{children:[c.jsx(He,{name:"transfer"})," Transfer"]}),c.jsxs(_t,{children:[c.jsx(He,{name:"sun"})," Gira 1 día"]}),c.jsxs(_t,{children:[c.jsx(He,{name:"tour"})," Gira multidía"]}),c.jsxs(_t,{children:[c.jsx(Wa,{children:"SUB"})," Subcontrato"]}),c.jsx(Ha,{}),c.jsxs(Dr,{children:["Estado ",c.jsx("em",{children:"franja izq. + punto esq."})]}),Za.map(e=>c.jsxs(Ba,{children:[c.jsx(za,{style:{background:e.stripe}}),c.jsx(ja,{style:{color:e.color},children:c.jsx(He,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),Ga=({zoom:e,topBarWidth:n,showThemeToggle:t,toggleTheme:r})=>{const{week:o}=Ve(),{date:s,cols:i,dayOfYear:l,startDate:u,config:a}=We(),d=p.useRef(null),h=kt(),y=p.useCallback(x=>{const b=cn(),g=(e===2?Ro:Re)+1;ur(x,b,g),Ia(x,e,i,u,o,l,h)},[i,l,u,o,e,h]);return p.useEffect(()=>{if(!d.current)return;const x=d.current.getContext("2d");if(!x)return;const b=()=>y(x);return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[y]),p.useEffect(()=>{const x=d.current;if(!x)return;x.style.letterSpacing="1px";const b=x.getContext("2d");b&&y(b)},[s,e,y]),c.jsxs(Oa,{children:[a.showTopbar!==!1&&c.jsx(ji,{width:n,showThemeToggle:t,toggleTheme:r}),a.showLegend!==!1&&c.jsx(Va,{}),c.jsx(Ya,{id:ns,children:c.jsx(La,{ref:d})})]})},Xa=(e,n,t)=>{let r;switch(t){case 0:r=$e;break;case 2:r=we;break;default:r=ve}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),l=n.startDate.startOf("day"),u=n.endDate.startOf("day"),a=()=>{let d;switch(t){case 2:d=(e.startDate.diff(n.startDate,"minute")/be+1)*r-r/2;break;default:d=s.diff(l,"day")*r}return Math.max(0,d)};if(e.startDate.isAfter(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/be*r,50);break;default:d=Math.max(i.diff(s,"day")*r+r,50)}return{x:a(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(n.startDate,"minute")/be*r+.5*r,50);break;default:d=Math.max(i.diff(l,"day")*r+r,50)}return{x:a(),width:d}}if(e.startDate.isAfter(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(e.startDate,"minute")/be*r,50);break;default:d=Math.max(u.diff(s,"day")*r+r,50)}return{x:a(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(n.startDate,"minute")/be*r,50);break;default:d=Math.max(u.diff(l,"day")*r+r,50)}return{x:a(),width:d}}return{x:a(),width:50}},Ua=(e,n,t,r,o,s)=>{const i=e*ue+rs,l=n.hour(),u=t.hour();let a,d,h,y;switch(s){case 2:{a=$(r),d=$(o),h=$(n).hour(l).minute(0),y=$(t).hour(u).minute(0);break}default:{a=$(r).hour(0).minute(0),d=$(o).hour(23).minute(59),h=n,y=t;break}}return{...Xa({startDate:a,endDate:d},{startDate:h,endDate:y},s),y:i}},$r=e=>{if(!e)return"white";const n=[];for(let o=1;o<6;o+=2)n.push(parseInt(e.slice(o,o+2),16)/255);const t=n.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};k.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,k.p`
  ${qe}
  ${Je}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const Ka=k.button`
  ${qe}
  position: absolute;
  height: ${Ut}px;
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
`,qa=k.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`,Ja=k.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,Er=k.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Qa=k.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Ra=k.span`
  ${Je}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 650;
`,ec=k.span`
  ${Je}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,tc=k.span`
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
`,nc=k.div`
  ${Je}
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
`,_r=k.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,rc=k.span`
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
`,Tr=k.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,oc=k.div`
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
`,Ar=k.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,sc=k.span`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid #fff;
`,ic=34,ac={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},cc="#3E8E5A",lc="#D98A22",dc=({row:e,data:n,zoom:t,isSubcontract:r=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:l=!0,yOffset:u=0})=>{const{date:a}=We(),d=an(a,t),{y:h,x:y,width:x}=Ua(e,d.startDate,d.endDate,n.startDate,n.endDate,t),{colors:b}=kt(),M=p.useRef(null),g=$(n.startDate).isSame($(n.endDate),"day"),H=n.eventType===ht.Tour,Q=n.eventType===ht.Transfer,Z=g&&(H||Q),P=G=>{M.current={x:G.clientX,y:G.clientY},l&&s&&(G.preventDefault(),s(n,G))},f=G=>{if(M.current){const U=Math.abs(G.clientX-M.current.x),E=Math.abs(G.clientY-M.current.y);Math.sqrt(U*U+E*E)<=5&&(o==null||o(n)),M.current=null}else o==null||o(n)},m={left:`${y}px`,top:`${h+u}px`,backgroundColor:`${n.bgColor??b.defaultTile}`,width:`${x}px`,color:$r(n.bgColor??"")},S=!r&&n.readiness?ac[n.readiness]:null,_=r&&n.subcontractConfirmed===!1,A=r?_?lc:cc:S==null?void 0:S.stripe,j=G=>c.jsxs(Ka,{"data-segment-id":n.segmentId,style:m,onClick:f,onMouseDown:P,onDragStart:U=>U.preventDefault(),isDraggable:l,isDragging:i,$unconfirmed:_,children:[A&&c.jsx(qa,{style:{background:A}}),G]});return j(Z?c.jsxs(c.Fragment,{children:[r&&c.jsx(_r,{$sm:!0,children:c.jsx(Tr,{children:"SUB"})}),c.jsxs(oc,{children:[c.jsx(He,{name:Q?"transfer":"sun",strokeWidth:2.4}),x>=ic&&c.jsxs(c.Fragment,{children:[c.jsx(Ar,{children:$(n.startDate).format("HH:mm")}),!Q&&c.jsx(Ar,{$end:!0,children:$(n.endDate).format("HH:mm")})]}),S&&c.jsx(sc,{style:{background:S.color}})]})]}):c.jsxs(c.Fragment,{children:[c.jsx(_r,{children:r?c.jsx(Tr,{children:"SUB"}):S&&c.jsx(rc,{style:{color:S.color},children:c.jsx(He,{name:S.icon,strokeWidth:S.icon==="check"?2.6:2.2})})}),c.jsxs(Ja,{children:[c.jsxs(Er,{$pad:!0,children:[c.jsx(Qa,{children:c.jsx(He,{name:Q?"transfer":"tour"})}),c.jsx(Ra,{children:n.title})]}),c.jsxs(Er,{children:[n.bookingNumber&&c.jsx(tc,{children:n.bookingNumber}),n.subtitle&&c.jsx(ec,{children:n.subtitle})]}),n.driver&&c.jsxs(nc,{children:[c.jsx(He,{name:"person"}),n.driver]})]})]}))},Pr=(e,n)=>{let t=0;for(const r of n)e>=r&&t++;return t*Me},uc=k.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${ue}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  pointer-events: none;
`,fc=({data:e,zoom:n,onTileClick:t,onDragStart:r,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const l=p.useCallback(()=>{let u=0;return e.map((a,d)=>{if(d>0&&(u+=Math.max(e[d-1].data.length,1)),!a.data.some(h=>h.length>0)){const h=Pr(u,i);return[c.jsx(uc,{style:{top:`${u*ue+h}px`},children:"Disponible"},`dispo-${a.id}`)]}return a.data.map((h,y)=>h.map(x=>{const b=s===x.segmentId,M=o?o(x):!1,g=y+u,H=Pr(g,i);return c.jsx(dc,{row:g,data:x,zoom:n,isSubcontract:a.isSubcontract,onTileClick:t,onDragStart:r,isDragging:b,isDraggable:M,yOffset:H},x.segmentId)}))}).flat(2)},[e,t,n,r,o,s,i]);return c.jsx(c.Fragment,{children:l()})};k.div`
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
`;const hc=k.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,pc=k.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,gc=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,mc=k.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,yc=k.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,vc=k.div`
  ${qe}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bc=k.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,xc=k.div`
  padding: 10px 12px;
`,wc=k.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Ir=k.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Or=k.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Yr=k.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Lr=k.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Nr=k.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Sc=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Cc=k.div``,kc=k.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Mc=k.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Dc=k.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Fr=k.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Wr=k.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Hr=k.div`
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
`;k.div``,k.span``,k.span``,k.div``,k.div``,k.span``,k.span``,k.div``,k.div``,k.span``,k.span``,k.div``,k.div``,k.div``,k.span``,k.div``,k.div``,k.div``,k.div``,k.p``,k.span``;const $c={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Ec=({tooltipData:e})=>{const{mouseCoords:n,reservationData:t}=e,r=p.useRef(null),[o,s]=p.useState("below"),i=Ve(),l={...$c,...i.tooltip};p.useLayoutEffect(()=>{if(!r.current||!n)return;const x=r.current,{width:b,height:M}=x.getBoundingClientRect(),g=x.parentElement;if(!g)return;const H=g.getBoundingClientRect(),Q=12,Z=4,P=H.height-n.y,f=H.width-n.x;let m=n.x+Q,S=n.y+Q,_="below";f<b+Q&&(m=n.x-b-Q),P<M+Q&&(S=n.y-M-Q,_="above"),m=Math.max(Z,Math.min(m,H.width-b-Z)),S=Math.max(Z,Math.min(S,H.height-M-Z)),s(_),x.style.left=`${m}px`,x.style.top=`${S}px`},[n]);const u=t.reservationType===ht.Tour,a=u&&t.isOneDayEvent,d=()=>u?a?"oneday":"tour":"transfer",h=()=>u?a?l.oneDay:l.tour:l.transfer,y=[t.groupName&&{label:l.groupName,value:t.groupName},t.driver&&{label:l.driver,value:t.driver},t.passengers&&{label:l.passengers,value:String(t.passengers)},t.flightNumber&&{label:l.flightNumber,value:t.flightNumber}].filter(Boolean);return c.jsxs(hc,{ref:r,$position:o,children:[c.jsxs(pc,{children:[c.jsxs(gc,{children:[c.jsx(mc,{children:t.bookingNumber}),c.jsx(yc,{$type:d(),children:h()})]}),c.jsx(vc,{children:t.eventName}),t.client&&c.jsx(bc,{children:t.client})]}),c.jsxs(xc,{children:[c.jsxs(wc,{children:[c.jsxs(Ir,{children:[c.jsx(Or,{children:l.startDate}),c.jsxs(Yr,{children:[c.jsx(Lr,{children:t.startDate})," ",c.jsx(Nr,{children:t.startTime})]})]}),u&&t.endDate&&c.jsxs(Ir,{$isEnd:!0,children:[c.jsx(Or,{children:l.endDate}),c.jsxs(Yr,{children:[c.jsx(Lr,{children:t.endDate})," ",c.jsx(Nr,{children:t.endTime})]})]})]}),y.length>0&&c.jsx(Sc,{children:y.map((x,b)=>c.jsxs(Cc,{children:[c.jsx(kc,{children:x.label}),c.jsx(Mc,{children:x.value})]},b))}),(t.serviceNotes||t.reservationNotes)&&c.jsxs(Dc,{children:[t.serviceNotes&&c.jsxs(Fr,{children:[c.jsx(Wr,{children:l.serviceNotes}),c.jsx(Hr,{children:t.serviceNotes})]}),t.reservationNotes&&c.jsxs(Fr,{children:[c.jsx(Wr,{children:l.reservationNotes}),c.jsx(Hr,{children:t.reservationNotes})]})]})]})]})};k.div`
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
`;const _c=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Tc=k.div`
  position: absolute;
  height: ${Ut}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:n,$animateToY:t})=>e&&n!==void 0&&t!==void 0?`transform: translate3d(${n}px, ${t}px, 0);`:""}
`,Ac=k.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Br=k.p`
  ${qe}
  ${Je}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Pc=k.p`
  ${qe}
  ${Je}
`,Ic=k.div`
  position: sticky;
  left: ${Te+16}px;
  overflow: hidden;
`,Oc=k.div`
  position: absolute;
  height: ${Ut}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Yc=k.div`
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
`,Lc=k.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Nc=k.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,Fc=k.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,zr=k.div`
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
`,jr=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,Zr=k.div`
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
`,Vr=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,xn=k.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,wn=k.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,it=k.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,Gr=k.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,Wc=({draggedEvent:e,ghostPosition:n,ghostDimensions:t,dropTarget:r,isValidDrop:o,dragState:s,data:i,resourceOnly:l,separatorRowIndices:u=[]})=>{const a=Ve(),d=P=>{let f=0;for(const m of u)m<=P&&f++;return P*ue+f*Me},[h,y]=p.useState(null),[x,b]=p.useState(0),M=p.useCallback((P=400,f=300)=>{const S=t.width,_=48,A=document.getElementById("react-scheduler");if(!A)return{x:n.x+S+16,y:n.y};const j=A.scrollLeft,G=A.scrollTop,U=A.clientWidth,E=A.clientHeight,T=n.x-j,D=n.y-G,N={left:Te+16,right:U-16,top:16,bottom:E-16},O=N.right-(T+S),J=T-N.left,ee=N.bottom-(D+_),se=D-N.top;let oe,B;return O>=P+16?oe=T+S+16:J>=P+16?oe=T-P-16:O>=J?(oe=T+S+16,oe+P>N.right&&(oe=N.right-P)):(oe=T-P-16,oe<N.left&&(oe=N.left)),ee>=f+16?B=D+_+16:se>=f+16?B=D-f-16:ee>=se?(B=D+_+16,B+f>N.bottom&&(B=N.bottom-f)):(B=D-f-16,B<N.top&&(B=N.top)),oe=Math.max(N.left,Math.min(oe,N.right-P)),B=Math.max(N.top,Math.min(B,N.bottom-f)),{x:oe+j,y:B+G}},[n.x,n.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&x===0?b(n.x):s==="idle"&&b(0)},[s,e,n.x,x]),p.useEffect(()=>{y(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const g=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const P=[];let f=0;for(const m of i){const S=Math.max(m.data.length,1);if(m.capacity!==void 0&&e.totalPassengers>m.capacity)for(let _=0;_<S;_++)P.push(f+_);f+=S}return P},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const H=s==="animating",Q=$r(e.bgColor??""),Z=()=>{if(!r)return"";const P=$(r.startDate).format("MMM D, HH:mm"),f=$(r.endDate).format("HH:mm");return`${P} - ${f}`};return c.jsxs(_c,{children:[g.map(P=>c.jsx(Nc,{style:{top:`${d(P)}px`,height:`${ue}px`}},P)),r&&s==="dragging"&&c.jsx(Lc,{$isValid:o,$hasConflict:r.hasConflict,style:{top:`${d(r.resourceIndex)}px`,height:`${ue}px`}}),r&&s==="dragging"&&!l&&c.jsxs(c.Fragment,{children:[c.jsx(Oc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(ue-48)/2}px`,width:`${t.width}px`}}),c.jsx(Yc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(ue-48)/2}px`},children:Z()})]}),r&&s==="dragging"&&l&&c.jsx(Fc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:"0px",top:`${d(r.resourceIndex)}px`,height:`${ue}px`}}),r&&o&&r.hasConflict&&r.conflicts&&r.conflicts.length>0&&s==="dragging"&&(()=>{const P=M(400,300);return c.jsxs(zr,{style:{left:`${P.x}px`,top:`${P.y}px`},children:[c.jsxs(jr,{children:[c.jsx(Zr,{children:"!"}),r.conflicts.length," ",r.conflicts.length>1?a.conflicts.detectedPlural:a.conflicts.detected," ",a.conflicts.detectedSuffix]}),c.jsx(Vr,{children:r.conflicts.map((f,m)=>{const S=$(r.startDate).format("YYYY-MM-DD"),_=$(r.endDate).format("YYYY-MM-DD"),A=$(f.event.startDate).format("YYYY-MM-DD"),j=$(f.event.endDate).format("YYYY-MM-DD"),G=$(f.conflictStart).format("YYYY-MM-DD"),U=$(f.conflictEnd).format("YYYY-MM-DD"),E=S!==_,T=A!==j,D=G!==U,N=E?$(r.startDate).format("MMM D, h:mm A"):$(r.startDate).format("h:mm A"),O=E?$(r.endDate).format("MMM D, h:mm A"):$(r.endDate).format("h:mm A"),J=T?$(f.event.startDate).format("MMM D, h:mm A"):$(f.event.startDate).format("h:mm A"),ee=T?$(f.event.endDate).format("MMM D, h:mm A"):$(f.event.endDate).format("h:mm A"),se=D?$(f.conflictStart).format("MMM D, h:mm A"):$(f.conflictStart).format("h:mm A"),oe=D?$(f.conflictEnd).format("MMM D, h:mm A"):$(f.conflictEnd).format("h:mm A"),B=D?"":$(f.conflictStart).format("MMM D"),V=r.startDate.getTime(),X=r.endDate.getTime(),K=f.event.startDate.getTime(),w=f.event.endDate.getTime(),F=V>=K&&V<w,v=X>K&&X<=w,Y=V<=K&&X>=w,z=K<=V&&w>=X;let I=!1,C=!1,R=!1,L=!1,q="";return Y||z?(I=!0,C=!0,R=!0,L=!0,q=`⚠️ ${a.conflicts.changeBoth}`):F&&v?(I=!0,C=!0,R=!0,L=!0,q=`⚠️ ${a.conflicts.changeBoth}`):F?(I=!0,L=!0,q=`⚠️ ${a.conflicts.changeStart}`):v&&(C=!0,R=!0,q=`⚠️ ${a.conflicts.changeEnd}`),c.jsxs(xn,{children:[c.jsxs(wn,{children:[a.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),c.jsxs(it,{children:[c.jsx("strong",{children:e.title})," ",a.conflicts.movingTo,":"," ",I?c.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:N}):N," ",a.conflicts.to," ",C?c.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:O}):O]}),c.jsxs(it,{children:[c.jsx("strong",{children:f.event.title})," ",a.conflicts.currentlyAt,":"," ",R?c.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:J}):J," ",a.conflicts.to," ",L?c.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ee}):ee]}),c.jsxs(Gr,{children:[a.conflicts.conflictTime,": ",B&&`${B}, `,se," - ",oe]}),q&&c.jsx(it,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:q})]},m)})})]})})(),r&&o&&!r.hasConflict&&r.nearbyEvents&&r.nearbyEvents.length>0&&s==="dragging"&&(()=>{const P=M(400,400);return c.jsxs(zr,{style:{left:`${P.x}px`,top:`${P.y}px`,borderColor:"#4CAF50"},children:[c.jsxs(jr,{style:{color:"#2E7D32"},children:[c.jsx(Zr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),r.nearbyEvents.length," ",r.nearbyEvents.length>1?a.conflicts.nearbyEvents:a.conflicts.nearbyEvent]}),c.jsxs(Vr,{children:[(()=>{const f=r.nearbyEvents.some(A=>A.position==="before"),m=r.nearbyEvents.some(A=>A.position==="after"),S=$(r.startDate).format("h:mm A"),_=$(r.endDate).format("h:mm A");return c.jsxs(xn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[c.jsxs(wn,{style:{color:"#33691E"},children:[a.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),c.jsxs(it,{style:{fontWeight:600},children:[$(r.startDate).format("MMM D"),":"," ",f?c.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",a.conflicts.to," ",m?c.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:_}):_]}),c.jsx(it,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:a.conflicts.sameDay})]})})(),r.nearbyEvents.map((f,m)=>{const S=$(f.event.startDate).format("YYYY-MM-DD"),_=$(f.event.endDate).format("YYYY-MM-DD"),A=S!==_,j=A?$(f.event.startDate).format("MMM D, h:mm A"):$(f.event.startDate).format("h:mm A"),G=A?$(f.event.endDate).format("MMM D, h:mm A"):$(f.event.endDate).format("h:mm A"),U=$(f.event.startDate).format("MMM D"),E=Math.floor(f.timeGap/(1e3*60*60)),T=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),D=E>0?`${E}h ${T}m`:`${T}m`,N=f.position==="after",O=f.position==="before";return c.jsxs(xn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[c.jsxs(wn,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),c.jsxs(it,{children:[!A&&`${U}: `,N?c.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:j}):j," ",a.conflicts.to," ",O?c.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:G}):G]}),c.jsxs(Gr,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[D," ",f.position==="before"?a.conflicts.before:a.conflicts.after]})]},m)})]})]})})(),c.jsx(Tc,{$isAnimating:H,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:H?`${(h==null?void 0:h.x)??0}px`:"0",top:H?`${(h==null?void 0:h.y)??0}px`:"0",transform:H?void 0:`translate3d(${l?x:n.x}px, ${n.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:Q},children:c.jsx(Ac,{children:c.jsxs(Ic,{children:[c.jsx(Br,{$bold:!0,children:e.title}),e.subtitle&&c.jsx(Br,{children:e.subtitle}),e.description&&c.jsx(Pc,{children:e.description})]})})})]})},Hc=Ct`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,Bc=k.div`
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
  animation: ${Hc} 1.5s ease-in-out infinite;
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
`,zc=({selectionBox:e,isSelecting:n})=>!e||!n?null:c.jsx(Bc,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),jc=Ct`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Zc=k.div`
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
  animation: ${jc} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,Vc=k.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Gc=k.span`
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
`,Xc=k.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Uc=k.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;k.div`
  display: none;
`,k.div`
  display: none;
`,k.button`
  display: none;
`;const Kc=k.div`
  display: flex;
  gap: 8px;
`,Xr=k.button`
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
`,qc=({selections:e,onConfirm:n,onClear:t})=>{var b;const o=Ve().multiSelect,s=p.useMemo(()=>e.filter(M=>M.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",a=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((b=o==null?void 0:o.conflictsWarning)==null?void 0:b.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const y=s>0,x=c.jsxs(Zc,{$hasConflicts:y,"data-multi-select-ui":!0,children:[c.jsxs(Vc,{children:[c.jsxs(Gc,{$hasConflicts:y,children:[e.length," ",i]}),y&&c.jsxs(Xc,{children:["⚠️ ",h]}),c.jsx(Uc,{children:l})]}),c.jsxs(Kc,{children:[c.jsxs(Xr,{variant:"secondary",onClick:t,children:["✕ ",u]}),c.jsx(Xr,{variant:"primary",$hasConflicts:y,onClick:n,children:y?`⚠️ ${d}`:`✓ ${a}`})]})]});return Kr.createPortal(x,document.body)},Jc=Ct`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Qc=k.div`
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
  animation: ${Jc} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&xt`
      border-style: dashed;
    `}
`,Rc=k.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,el=k.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,tl=k.button`
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
`,nl=({selections:e,data:n,zoom:t,startDate:r,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[l,u]=p.useState(null),[a,d]=p.useState({x:0,y:0}),h=p.useRef(null),y=p.useMemo(()=>{switch(t){case 0:return $e*7;case 1:return ve;case 2:return we;default:return ve}},[t]),x=p.useMemo(()=>$().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0),[r]),b=p.useMemo(()=>e.map((m,S)=>{let _=0,A=!1;for(const J of n){if(J.id===m.resourceId){A=!0;break}_+=Math.max(J.data.length,1)}if(!A)return null;const j=$(m.startDate),G=$(m.endDate);let U,E;switch(t){case 0:U=Math.floor(j.diff(x,"days")/7),E=Math.max(1,Math.ceil(G.diff(j,"days")/7)+1);break;case 1:U=j.diff(x,"days"),E=Math.max(1,G.diff(j,"days")+1);break;case 2:U=j.diff(x,"hours"),E=Math.max(1,G.diff(j,"hours")+1);break;default:U=0,E=1}const T=U*y;let D=0;for(const J of i)J<=_&&D++;const N=_*ue+D*Me,O=E*y;return{index:S,selection:m,x:T,y:N,width:O,height:ue}}),[e,n,t,x,y]),M=(m,S)=>{const _=$(m).format("MMM D"),A=$(S).format("MMM D");return _===A?_:`${_} - ${A}`},g=m=>!m.hasConflict||!m.conflicts?"":`⚠️ Conflicts with:
${m.conflicts.map(_=>{const A=(_.overlapDuration/36e5).toFixed(1);return`• ${_.event.title} (${A}h overlap)`}).join(`
`)}`,H=p.useCallback(m=>{let S=0;for(const _ of n){const A=Math.max(_.data.length,1);if(m>=S*ue&&m<(S+A)*ue)return{resourceId:_.id,resourceLabel:_.label};S+=A}return null},[n]),Q=p.useCallback(m=>{const S=Math.floor(m/y);switch(t){case 0:return x.add(S*7,"days").toDate();case 1:return x.add(S,"days").toDate();case 2:return x.add(S,"hours").toDate();default:return x.toDate()}},[t,x,y]),Z=p.useCallback((m,S)=>{!s||(m.preventDefault(),m.stopPropagation(),!b[S])||(h.current={x:m.clientX,y:m.clientY},u(S),d({x:0,y:0}))},[s,b]),P=p.useCallback(m=>{if(l===null||!h.current)return;const S=m.clientX-h.current.x,_=m.clientY-h.current.y,A=Math.round(S/y)*y,j=Math.round(_/ue)*ue;d({x:A,y:j})},[l,y]),f=p.useCallback(()=>{if(l===null||!s){u(null),d({x:0,y:0}),h.current=null;return}const m=b[l];if(!m){u(null),d({x:0,y:0}),h.current=null;return}const S=m.x+a.x,_=m.y+a.y,A=H(_+ue/2);if(!A){u(null),d({x:0,y:0}),h.current=null;return}const j=Q(S),G=e[l],U=G.endDate.getTime()-G.startDate.getTime(),E=new Date(j.getTime()+U);s(l,{startDate:j,endDate:E,resourceId:A.resourceId,resourceLabel:A.resourceLabel}),u(null),d({x:0,y:0}),h.current=null},[l,a,b,e,s,H,Q]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",P),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",f)}},[l,P,f]),c.jsx(c.Fragment,{children:b.map(m=>{if(!m)return null;const S=m.selection.hasConflict||!1,_=l===m.index,A=_?m.x+a.x:m.x,j=_?m.y+a.y:m.y;return c.jsxs(Qc,{$hasConflict:S,$isDragging:_,style:{left:A,top:j,width:m.width,height:m.height},"data-multi-select-ui":!0,onMouseDown:G=>Z(G,m.index),children:[S&&c.jsx(el,{title:g(m.selection),children:"⚠️"}),c.jsx(Rc,{$hasConflict:S,children:M(m.selection.startDate,m.selection.endDate)}),c.jsx(tl,{onClick:G=>{G.stopPropagation(),o(m.index)},onMouseDown:G=>G.stopPropagation(),title:S?"Remove conflicting selection":"Remove selection",children:"×"})]},m.index)})})},rl=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,ol=({zoom:e,startDate:n})=>{const{cols:t}=We(),r=p.useMemo(()=>{if(e===2)return null;const o=e===0?$e*7:ve,s=$().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"),i=$().startOf("day"),l=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,n,t]);return r?c.jsx(rl,{style:{left:`${r.x}px`,width:`${r.width}px`},"aria-hidden":!0}):null},Nl="";ke.Scheduler=Ki,Object.defineProperty(ke,Symbol.toStringTag,{value:"Module"})});
